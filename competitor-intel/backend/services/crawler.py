"""
微信公众号爬虫服务
使用 weixin_search MCP 抓取公众号文章
"""
import json
import asyncio
import subprocess
import re
import os
from datetime import datetime, timedelta
from typing import Optional
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, and_
from models.database import Article, WechatAccount, CrawlTask
from services.analyzer import analyze_article


async def crawl_account(
    account: WechatAccount,
    db: AsyncSession,
    days_back: int = 3,
) -> dict:
    """
    爬取指定公众号的最新文章
    返回: {"found": int, "new": int, "errors": list}
    """
    result = {"found": 0, "new": 0, "errors": []}

    # 创建爬取任务记录
    task = CrawlTask(
        account_id=account.id,
        account_name=account.name,
        status="running",
        started_at=datetime.utcnow(),
    )
    db.add(task)
    await db.commit()

    try:
        # 搜索公众号最新文章
        articles_data = await _search_weixin_articles(account.name, days_back)
        result["found"] = len(articles_data)
        task.articles_found = len(articles_data)

        new_count = 0
        for article_data in articles_data:
            # 检查是否已存在（去重）
            existing = await db.execute(
                select(Article).where(
                    and_(
                        Article.title == article_data["title"],
                        Article.account_name == account.name,
                    )
                )
            )
            if existing.scalar_one_or_none():
                continue

            # AI 分析
            analysis = analyze_article(
                title=article_data["title"],
                content=article_data.get("content", ""),
                account_tab=account.tab,
            )

            # 保存文章
            article = Article(
                title=article_data["title"],
                account_id=account.id,
                account_name=account.name,
                company=analysis.get("company") or account.company,
                tab=analysis.get("tab", account.tab),
                summary=analysis["summary"],
                tags=json.dumps(analysis["tags"], ensure_ascii=False),
                importance=analysis["importance"],
                raw_content=article_data.get("content", ""),
                url=article_data.get("url", ""),
                published_at=article_data.get("published_at"),
                is_analyzed=True,
            )
            db.add(article)
            new_count += 1

        await db.commit()
        result["new"] = new_count
        task.articles_new = new_count
        task.status = "done"

    except Exception as e:
        task.status = "failed"
        task.error_msg = str(e)
        result["errors"].append(str(e))

    task.finished_at = datetime.utcnow()
    await db.commit()

    return result


async def _search_weixin_articles(account_name: str, days_back: int = 3) -> list[dict]:
    """
    通过 weixin_search MCP 搜索公众号文章
    返回文章列表: [{title, url, content, published_at}]
    """
    articles = []

    try:
        # 调用 weixin_search MCP
        # 优先用 MCP，失败则用 mock 数据（开发阶段）
        mcp_result = await _call_weixin_mcp(account_name)
        if mcp_result:
            articles = mcp_result
    except Exception as e:
        print(f"⚠️ MCP 搜索失败 ({account_name}): {e}")

    # 开发阶段：如果 MCP 不可用，返回模拟数据
    if not articles:
        articles = _get_mock_articles(account_name)

    return articles


async def _call_weixin_mcp(query: str) -> list[dict]:
    """
    调用 weixin_search MCP 工具搜索文章
    返回格式化后的文章列表
    """
    # 这里通过 subprocess 调用 MCP 或直接 HTTP 调用
    # 实际部署时替换为真实的 MCP 调用逻辑
    # 参考: ~/.codeflicker/mcp/weixin-search-wrapper/
    try:
        proc = await asyncio.create_subprocess_exec(
            "python3", "-c", f"""
import json, sys
try:
    from mcp_weixin import search
    results = search("{query}")
    print(json.dumps(results, ensure_ascii=False))
except:
    print(json.dumps([]))
""",
            stdout=asyncio.subprocess.PIPE,
            stderr=asyncio.subprocess.PIPE,
        )
        stdout, _ = await asyncio.wait_for(proc.communicate(), timeout=30)
        data = json.loads(stdout.decode().strip() or "[]")
        return _format_mcp_results(data)
    except Exception:
        return []


def _format_mcp_results(raw_results: list) -> list[dict]:
    """格式化 MCP 返回结果"""
    articles = []
    for item in raw_results:
        if not item.get("title"):
            continue
        articles.append({
            "title": item.get("title", ""),
            "url": item.get("real_url") or item.get("link", ""),
            "content": item.get("content", ""),
            "published_at": _parse_date(item.get("publish_time")),
        })
    return articles


def _get_mock_articles(account_name: str) -> list[dict]:
    """
    开发阶段模拟数据
    - 生产环境中由真实 MCP 替换
    """
    now = datetime.utcnow()
    return [
        {
            "title": f"【{account_name}】最新动态：2025年春招进行中，欢迎投递",
            "url": f"https://weixin.sogou.com/weixin?type=2&query={account_name}+春招",
            "content": f"{account_name}官方发布2025年春季招聘信息，涵盖技术、产品、运营等多个岗位，福利待遇优厚，欢迎应届生和社会人才投递简历。",
            "published_at": now - timedelta(hours=2),
        },
        {
            "title": f"【{account_name}】员工故事：从实习生到全职员工的成长之路",
            "url": f"https://weixin.sogou.com/weixin?type=2&query={account_name}+员工故事",
            "content": f"讲述{account_name}员工从实习到转正的真实经历，展现公司文化和成长环境。",
            "published_at": now - timedelta(hours=6),
        },
    ]


def _parse_date(date_str: Optional[str]) -> Optional[datetime]:
    """解析日期字符串"""
    if not date_str:
        return None
    try:
        formats = [
            "%Y-%m-%d %H:%M:%S",
            "%Y-%m-%d",
            "%Y/%m/%d",
        ]
        for fmt in formats:
            try:
                return datetime.strptime(date_str, fmt)
            except ValueError:
                continue
    except Exception:
        pass
    return None


async def crawl_all_active(db: AsyncSession) -> dict:
    """爬取所有启用的公众号"""
    result = await db.execute(
        select(WechatAccount).where(WechatAccount.is_active == True)
    )
    accounts = result.scalars().all()

    total = {"found": 0, "new": 0, "errors": [], "accounts": len(accounts)}
    for account in accounts:
        r = await crawl_account(account, db)
        total["found"] += r["found"]
        total["new"] += r["new"]
        total["errors"].extend(r["errors"])
        # 避免过快请求
        await asyncio.sleep(1)

    return total
