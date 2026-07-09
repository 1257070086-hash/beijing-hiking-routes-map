"""
爬取任务 API
"""
from fastapi import APIRouter, Depends, BackgroundTasks, HTTPException, Query
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, desc
from typing import Optional

from core.database import get_db
from models.database import WechatAccount, CrawlTask
from services.crawler import crawl_account, crawl_all_active

router = APIRouter(prefix="/api/crawl", tags=["crawl"])

# 全局爬取状态
_crawl_running = False


@router.post("/trigger")
async def trigger_crawl(
    background_tasks: BackgroundTasks,
    account_id: Optional[int] = Query(None, description="指定公众号ID，不填则爬全部"),
    db: AsyncSession = Depends(get_db),
):
    """手动触发爬取任务"""
    global _crawl_running
    if _crawl_running:
        return {"success": False, "message": "已有爬取任务在运行中，请稍后再试"}

    if account_id:
        result = await db.execute(
            select(WechatAccount).where(WechatAccount.id == account_id)
        )
        account = result.scalar_one_or_none()
        if not account:
            raise HTTPException(status_code=404, detail="公众号不存在")
        background_tasks.add_task(_run_single_crawl, account)
        return {"success": True, "message": f"已启动爬取任务: {account.name}"}
    else:
        background_tasks.add_task(_run_all_crawl)
        return {"success": True, "message": "已启动全量爬取任务"}


@router.get("/status")
async def get_crawl_status(db: AsyncSession = Depends(get_db)):
    """获取最近爬取状态"""
    result = await db.execute(
        select(CrawlTask)
        .order_by(desc(CrawlTask.created_at))
        .limit(20)
    )
    tasks = result.scalars().all()
    return {
        "is_running": _crawl_running,
        "recent_tasks": [
            {
                "id": t.id,
                "account_name": t.account_name,
                "status": t.status,
                "articles_found": t.articles_found,
                "articles_new": t.articles_new,
                "error_msg": t.error_msg,
                "started_at": t.started_at.isoformat() if t.started_at else None,
                "finished_at": t.finished_at.isoformat() if t.finished_at else None,
            }
            for t in tasks
        ],
    }


async def _run_single_crawl(account: WechatAccount):
    global _crawl_running
    _crawl_running = True
    from core.database import AsyncSessionLocal
    async with AsyncSessionLocal() as db:
        try:
            await crawl_account(account, db)
        finally:
            _crawl_running = False


async def _run_all_crawl():
    global _crawl_running
    _crawl_running = True
    from core.database import AsyncSessionLocal
    async with AsyncSessionLocal() as db:
        try:
            await crawl_all_active(db)
        finally:
            _crawl_running = False
