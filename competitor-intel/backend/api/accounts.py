"""
公众号账号管理 API
"""
from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, update, delete
from typing import Optional

from core.database import get_db
from models.database import WechatAccount
from models.seed_data import COMPANY_LABELS, TAB_LABELS

router = APIRouter(prefix="/api/accounts", tags=["accounts"])


@router.get("")
async def list_accounts(
    tab: Optional[str] = Query(None),
    company: Optional[str] = Query(None),
    db: AsyncSession = Depends(get_db),
):
    """获取公众号列表"""
    q = select(WechatAccount).order_by(
        WechatAccount.tab,
        WechatAccount.company,
        WechatAccount.name,
    )
    if tab:
        q = q.where(WechatAccount.tab == tab)
    if company:
        q = q.where(WechatAccount.company == company)

    result = await db.execute(q)
    accounts = result.scalars().all()
    return [_format_account(a) for a in accounts]


@router.post("")
async def create_account(body: dict, db: AsyncSession = Depends(get_db)):
    """添加新公众号"""
    name = body.get("name", "").strip()
    if not name:
        raise HTTPException(status_code=400, detail="公众号名称不能为空")

    tab = body.get("tab", "content")
    if tab not in ["content", "personnel", "tech"]:
        raise HTTPException(status_code=400, detail="tab 必须是 content/personnel/tech")

    account = WechatAccount(
        name=name,
        wechat_id=body.get("wechat_id"),
        category=body.get("category", tab),
        company=body.get("company", "media"),
        tab=tab,
        description=body.get("description", ""),
        is_active=True,
        is_custom=True,
    )
    db.add(account)
    await db.commit()
    await db.refresh(account)
    return _format_account(account)


@router.put("/{account_id}")
async def update_account(account_id: int, body: dict, db: AsyncSession = Depends(get_db)):
    """更新公众号配置"""
    result = await db.execute(
        select(WechatAccount).where(WechatAccount.id == account_id)
    )
    account = result.scalar_one_or_none()
    if not account:
        raise HTTPException(status_code=404, detail="公众号不存在")

    # 允许更新的字段
    allowed_fields = ["name", "tab", "company", "description", "is_active"]
    for field in allowed_fields:
        if field in body:
            setattr(account, field, body[field])

    await db.commit()
    await db.refresh(account)
    return _format_account(account)


@router.delete("/{account_id}")
async def delete_account(account_id: int, db: AsyncSession = Depends(get_db)):
    """删除公众号（只允许删除自定义的）"""
    result = await db.execute(
        select(WechatAccount).where(WechatAccount.id == account_id)
    )
    account = result.scalar_one_or_none()
    if not account:
        raise HTTPException(status_code=404, detail="公众号不存在")
    if not account.is_custom:
        raise HTTPException(status_code=403, detail="默认公众号不能删除，只能停用")

    await db.delete(account)
    await db.commit()
    return {"success": True}


def _format_account(account: WechatAccount) -> dict:
    return {
        "id": account.id,
        "name": account.name,
        "wechat_id": account.wechat_id,
        "category": account.category,
        "company": account.company,
        "company_label": COMPANY_LABELS.get(account.company or "", account.company or ""),
        "tab": account.tab,
        "tab_label": TAB_LABELS.get(account.tab, account.tab),
        "description": account.description,
        "is_active": account.is_active,
        "is_custom": account.is_custom,
        "created_at": account.created_at.isoformat() if account.created_at else None,
    }
