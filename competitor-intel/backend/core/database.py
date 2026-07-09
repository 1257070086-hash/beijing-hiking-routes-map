"""
数据库会话管理
"""
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession, async_sessionmaker
from sqlalchemy import create_engine
from models.database import Base, WechatAccount, init_db
from models.seed_data import DEFAULT_ACCOUNTS
import os

DATABASE_URL = os.getenv("DATABASE_URL", "sqlite+aiosqlite:///./competitor_intel.db")
SYNC_DATABASE_URL = DATABASE_URL.replace("sqlite+aiosqlite", "sqlite")

# 异步引擎（FastAPI 使用）
async_engine = create_async_engine(DATABASE_URL, echo=False)
AsyncSessionLocal = async_sessionmaker(
    async_engine, class_=AsyncSession, expire_on_commit=False
)


async def get_db():
    """FastAPI 依赖注入 - 获取数据库会话"""
    async with AsyncSessionLocal() as session:
        yield session


async def init_database():
    """初始化数据库并插入默认数据"""
    # 创建表
    sync_engine = create_engine(SYNC_DATABASE_URL, echo=False)
    Base.metadata.create_all(sync_engine)
    sync_engine.dispose()

    # 插入默认公众号数据
    async with AsyncSessionLocal() as session:
        from sqlalchemy import select, func
        result = await session.execute(select(func.count()).select_from(WechatAccount))
        count = result.scalar()

        if count == 0:
            for account_data in DEFAULT_ACCOUNTS:
                account = WechatAccount(**account_data)
                session.add(account)
            await session.commit()
            print(f"✅ 已插入 {len(DEFAULT_ACCOUNTS)} 个默认公众号")
        else:
            print(f"ℹ️ 数据库已有 {count} 个公众号，跳过初始化")
