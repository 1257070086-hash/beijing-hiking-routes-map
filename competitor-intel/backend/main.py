"""
竞品情报监控平台 - FastAPI 主入口
"""
import asyncio
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from apscheduler.schedulers.asyncio import AsyncIOScheduler

from core.database import init_database, AsyncSessionLocal
from api.articles import router as articles_router
from api.accounts import router as accounts_router
from api.crawl import router as crawl_router
from services.crawler import crawl_all_active

# 定时调度器
scheduler = AsyncIOScheduler(timezone="Asia/Shanghai")


async def scheduled_crawl():
    """定时爬取任务"""
    print("⏰ 定时爬取任务启动...")
    async with AsyncSessionLocal() as db:
        result = await crawl_all_active(db)
    print(f"✅ 定时爬取完成: 找到 {result['found']} 篇, 新增 {result['new']} 篇")


@asynccontextmanager
async def lifespan(app: FastAPI):
    """应用生命周期管理"""
    # 启动时初始化数据库
    print("🚀 初始化数据库...")
    await init_database()

    # 启动定时任务：每天 8:00, 12:00, 18:00 爬取
    scheduler.add_job(scheduled_crawl, "cron", hour="8,12,18", minute=0)
    scheduler.start()
    print("⏰ 定时任务已启动（每天 8:00/12:00/18:00 自动爬取）")

    yield

    # 关闭时停止调度器
    scheduler.shutdown()
    print("👋 服务关闭")


app = FastAPI(
    title="竞品情报监控平台",
    description="监控友商微信公众号，聚合招聘文化、人事变动、技术进展三类情报",
    version="1.0.0",
    lifespan=lifespan,
)

# CORS 配置（允许前端开发服务器）
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000", "http://localhost:8080"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 注册路由
app.include_router(articles_router)
app.include_router(accounts_router)
app.include_router(crawl_router)


@app.get("/")
async def root():
    return {
        "name": "竞品情报监控平台",
        "version": "1.0.0",
        "status": "running",
        "docs": "/docs",
    }


@app.get("/api/health")
async def health():
    return {"status": "ok"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
