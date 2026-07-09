"""
竞品情报监控平台 - 数据模型
"""
from datetime import datetime
from typing import Optional
from sqlalchemy import (
    Column, Integer, String, Text, Boolean, DateTime,
    Float, create_engine, Index
)
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

Base = declarative_base()


class WechatAccount(Base):
    """微信公众号账号表"""
    __tablename__ = "wechat_accounts"

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(100), nullable=False, comment="公众号名称")
    wechat_id = Column(String(100), nullable=True, comment="微信号")
    # category: culture=招聘/文化, hr_news=人事变动媒体, tech=技术媒体, media=综合媒体
    category = Column(String(50), nullable=False, comment="分类")
    # company: bytedance/tencent/alibaba/baidu/meituan/media
    company = Column(String(50), nullable=True, comment="所属公司")
    tab = Column(String(20), nullable=False, default="content",
                 comment="对应Tab: content/personnel/tech")
    is_active = Column(Boolean, default=True, comment="是否启用")
    is_custom = Column(Boolean, default=False, comment="是否用户自定义")
    description = Column(String(200), nullable=True, comment="描述")
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    __table_args__ = (
        Index("idx_account_category", "category"),
        Index("idx_account_tab", "tab"),
        Index("idx_account_active", "is_active"),
    )


class Article(Base):
    """文章表"""
    __tablename__ = "articles"

    id = Column(Integer, primary_key=True, autoincrement=True)
    title = Column(String(500), nullable=False, comment="文章标题")
    account_id = Column(Integer, nullable=True, comment="关联公众号ID")
    account_name = Column(String(100), nullable=True, comment="公众号名称")
    company = Column(String(50), nullable=True, comment="关联公司")
    tab = Column(String(20), nullable=False, default="content",
                 comment="所属Tab: content/personnel/tech")
    # AI分析结果
    summary = Column(Text, nullable=True, comment="AI摘要(300字以内)")
    tags = Column(String(500), nullable=True, comment="JSON标签数组")
    importance = Column(Integer, default=3, comment="重要度1-5")
    # 原始数据
    raw_content = Column(Text, nullable=True, comment="原始正文")
    url = Column(String(1000), nullable=True, comment="文章链接(转载或搜狗)")
    # 状态
    is_read = Column(Boolean, default=False, comment="是否已读")
    is_analyzed = Column(Boolean, default=False, comment="是否已AI分析")
    published_at = Column(DateTime, nullable=True, comment="发布时间")
    crawled_at = Column(DateTime, default=datetime.utcnow, comment="抓取时间")

    __table_args__ = (
        Index("idx_article_tab", "tab"),
        Index("idx_article_company", "company"),
        Index("idx_article_published", "published_at"),
        Index("idx_article_crawled", "crawled_at"),
        Index("idx_article_importance", "importance"),
    )


class CrawlTask(Base):
    """爬取任务记录表"""
    __tablename__ = "crawl_tasks"

    id = Column(Integer, primary_key=True, autoincrement=True)
    account_id = Column(Integer, nullable=True, comment="关联公众号ID")
    account_name = Column(String(100), nullable=True)
    status = Column(String(20), default="pending",
                    comment="状态: pending/running/done/failed")
    articles_found = Column(Integer, default=0, comment="找到文章数")
    articles_new = Column(Integer, default=0, comment="新增文章数")
    error_msg = Column(Text, nullable=True, comment="错误信息")
    started_at = Column(DateTime, nullable=True)
    finished_at = Column(DateTime, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)


def get_engine(db_url: str = "sqlite+aiosqlite:///./competitor_intel.db"):
    """获取同步引擎（用于初始化）"""
    sync_url = db_url.replace("sqlite+aiosqlite", "sqlite")
    return create_engine(sync_url, echo=False)


def init_db(db_url: str = "sqlite:///./competitor_intel.db"):
    """初始化数据库，创建所有表"""
    engine = create_engine(db_url, echo=False)
    Base.metadata.create_all(engine)
    return engine
