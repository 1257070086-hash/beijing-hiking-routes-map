"""
文章相关 API 路由
"""
from fastapi import APIRouter, Depends, Query, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, func, and_, or_, desc, update
from sqlalchemy.orm import selectinload
from typing import Optional
from datetime import datetime, timedelta
import json

from core.database import get_db
from models.database import Article, WechatAccount
from models.seed_data import COMPANY_LABELS, TAB_LABELS

router = APIRouter(prefix="/api/articles", tags=["articles"])


@router.get("")
async def list_articles(
    tab: Optional[str] = Query(None, description="content/personnel/tech"),
    company: Optional[str] = Query(None, description="bytedance/tencent/alibaba/baidu/meituan/media"),
    days: int = Query(7, description="最近N天"),
    page: int = Query(1, ge=1),
    page_size: int = Query(20, ge=1, le=100),
    search: Optional[str] = Query(None, description="搜索关键词"),
    min_importance: int = Query(1, ge=1, le=5),
    db: AsyncSession = Depends(get_db),
):
    """获取文章列表（分页）"""
    conditions = []

    if tab:
        conditions.append(Article.tab == tab)
    if company:
        conditions.append(Article.company == company)
    if days > 0:
        since = datetime.utcnow() - timedelta(days=days)
        conditions.append(Article.crawled_at >= since)
    if search:
        conditions.append(
            or_(
                Article.title.contains(search),
                Article.summary.contains(search),
                Article.tags.contains(search),
            )
        )
    if min_importance > 1:
        conditions.append(Article.importance >= min_importance)

    # 查询总数
    count_q = select(func.count()).select_from(Article)
    if conditions:
        count_q = count_q.where(and_(*conditions))
    total = (await db.execute(count_q)).scalar()

    # 查询数据
    q = select(Article).order_by(
        desc(Article.importance),
        desc(Article.crawled_at)
    )
    if conditions:
        q = q.where(and_(*conditions))
    q = q.offset((page - 1) * page_size).limit(page_size)

    result = await db.execute(q)
    articles = result.scalars().all()

    return {
        "total": total,
        "page": page,
        "page_size": page_size,
        "items": [_format_article(a) for a in articles],
    }


@router.get("/stats")
async def get_stats(db: AsyncSession = Depends(get_db)):
    """获取统计数据"""
    since_today = datetime.utcnow().replace(hour=0, minute=0, second=0, microsecond=0)
    since_week = datetime.utcnow() - timedelta(days=7)

    # 各 Tab 今日数量
    tab_counts = {}
    for tab in ["content", "personnel", "tech"]:
        count = (await db.execute(
            select(func.count()).select_from(Article).where(
                and_(Article.tab == tab, Article.crawled_at >= since_today)
            )
        )).scalar()
        tab_counts[tab] = count

    # 各公司本周数量
    company_counts = {}
    for company in ["bytedance", "tencent", "alibaba", "baidu", "meituan"]:
        count = (await db.execute(
            select(func.count()).select_from(Article).where(
                and_(Article.company == company, Article.crawled_at >= since_week)
            )
        )).scalar()
        company_counts[company] = {"count": count, "label": COMPANY_LABELS.get(company, company)}

    # 重要文章数（importance >= 4）
    hot_count = (await db.execute(
        select(func.count()).select_from(Article).where(
            and_(Article.importance >= 4, Article.crawled_at >= since_week)
        )
    )).scalar()

    # 未读数
    unread_count = (await db.execute(
        select(func.count()).select_from(Article).where(
            and_(Article.is_read == False, Article.crawled_at >= since_today)
        )
    )).scalar()

    return {
        "today": {
            "content": tab_counts.get("content", 0),
            "personnel": tab_counts.get("personnel", 0),
            "tech": tab_counts.get("tech", 0),
        },
        "week_companies": company_counts,
        "hot_count": hot_count,
        "unread_today": unread_count,
    }


@router.get("/{article_id}")
async def get_article(article_id: int, db: AsyncSession = Depends(get_db)):
    """获取文章详情"""
    result = await db.execute(select(Article).where(Article.id == article_id))
    article = result.scalar_one_or_none()
    if not article:
        raise HTTPException(status_code=404, detail="文章不存在")
    return _format_article(article, include_content=True)


@router.post("/{article_id}/read")
async def mark_read(article_id: int, db: AsyncSession = Depends(get_db)):
    """标记已读"""
    await db.execute(
        update(Article).where(Article.id == article_id).values(is_read=True)
    )
    await db.commit()
    return {"success": True}


@router.post("")
async def create_article(body: dict, db: AsyncSession = Depends(get_db)):
    """手动添加文章"""
    from services.analyzer import analyze_article

    title = body.get("title", "").strip()
    if not title:
        raise HTTPException(status_code=400, detail="标题不能为空")

    analysis = analyze_article(
        title=title,
        content=body.get("content", ""),
        account_tab=body.get("tab", "content"),
    )

    article = Article(
        title=title,
        account_name=body.get("account_name", "手动添加"),
        company=analysis.get("company") or body.get("company"),
        tab=analysis.get("tab", body.get("tab", "content")),
        summary=analysis["summary"],
        tags=json.dumps(analysis["tags"], ensure_ascii=False),
        importance=analysis["importance"],
        raw_content=body.get("content", ""),
        url=body.get("url", ""),
        published_at=datetime.utcnow(),
        is_analyzed=True,
    )
    db.add(article)
    await db.commit()
    await db.refresh(article)
    return _format_article(article)


def _format_article(article: Article, include_content: bool = False) -> dict:
    """格式化文章输出"""
    tags = []
    if article.tags:
        try:
            tags = json.loads(article.tags)
        except Exception:
            tags = [article.tags]

    data = {
        "id": article.id,
        "title": article.title,
        "account_name": article.account_name,
        "company": article.company,
        "company_label": COMPANY_LABELS.get(article.company or "", article.company or ""),
        "tab": article.tab,
        "tab_label": TAB_LABELS.get(article.tab, article.tab),
        "summary": article.summary,
        "tags": tags,
        "importance": article.importance,
        "url": article.url,
        "is_read": article.is_read,
        "published_at": article.published_at.isoformat() if article.published_at else None,
        "crawled_at": article.crawled_at.isoformat() if article.crawled_at else None,
    }
    if include_content:
        data["content"] = article.raw_content
    return data
