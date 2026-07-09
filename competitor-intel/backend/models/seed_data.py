"""
预置公众号数据 - 五大互联网公司 + 行业媒体
"""

DEFAULT_ACCOUNTS = [
    # ==================== Tab1: 今天都发了啥 (content) ====================
    # 字节跳动 - 招聘/文化
    {
        "name": "字节跳动招聘",
        "wechat_id": "bytedance_recruit",
        "category": "culture",
        "company": "bytedance",
        "tab": "content",
        "description": "字节跳动官方招聘账号"
    },
    {
        "name": "字节范儿",
        "wechat_id": "bytedance_fan",
        "category": "culture",
        "company": "bytedance",
        "tab": "content",
        "description": "字节跳动企业文化账号"
    },
    {
        "name": "飞书",
        "category": "culture",
        "company": "bytedance",
        "tab": "content",
        "description": "字节跳动飞书产品账号"
    },
    # 腾讯 - 招聘/文化
    {
        "name": "腾讯招聘",
        "wechat_id": "tencent_recruit",
        "category": "culture",
        "company": "tencent",
        "tab": "content",
        "description": "腾讯官方招聘账号"
    },
    {
        "name": "腾讯大讲堂",
        "category": "culture",
        "company": "tencent",
        "tab": "content",
        "description": "腾讯企业文化与分享"
    },
    # 阿里巴巴 - 招聘/文化
    {
        "name": "阿里巴巴招聘",
        "category": "culture",
        "company": "alibaba",
        "tab": "content",
        "description": "阿里巴巴官方招聘账号"
    },
    {
        "name": "阿里技术",
        "category": "culture",
        "company": "alibaba",
        "tab": "content",
        "description": "阿里巴巴技术分享"
    },
    # 百度 - 招聘/文化
    {
        "name": "百度招聘",
        "category": "culture",
        "company": "baidu",
        "tab": "content",
        "description": "百度官方招聘账号"
    },
    {
        "name": "百度AILAB",
        "category": "culture",
        "company": "baidu",
        "tab": "content",
        "description": "百度AI实验室"
    },
    # 美团 - 招聘/文化
    {
        "name": "美团技术团队",
        "category": "culture",
        "company": "meituan",
        "tab": "content",
        "description": "美团技术团队官方账号"
    },
    {
        "name": "美团招聘",
        "category": "culture",
        "company": "meituan",
        "tab": "content",
        "description": "美团官方招聘账号"
    },

    # ==================== Tab2: 人都去哪了 (personnel) ====================
    {
        "name": "晚点LatePost",
        "category": "media",
        "company": "media",
        "tab": "personnel",
        "description": "深度报道科技公司人事和商业动态"
    },
    {
        "name": "36氪",
        "category": "media",
        "company": "media",
        "tab": "personnel",
        "description": "科技创业媒体，覆盖大厂人事动态"
    },
    {
        "name": "大厂日爆",
        "category": "media",
        "company": "media",
        "tab": "personnel",
        "description": "专注互联网大厂内部动态"
    },
    {
        "name": "申妈朋友圈",
        "category": "media",
        "company": "media",
        "tab": "personnel",
        "description": "互联网圈内人士动态"
    },
    {
        "name": "虎嗅",
        "category": "media",
        "company": "media",
        "tab": "personnel",
        "description": "深度科技商业分析"
    },
    {
        "name": "钛媒体",
        "category": "media",
        "company": "media",
        "tab": "personnel",
        "description": "科技商业媒体"
    },
    {
        "name": "界面新闻",
        "category": "media",
        "company": "media",
        "tab": "personnel",
        "description": "财经科技综合媒体"
    },

    # ==================== Tab3: 技术进展 (tech) ====================
    {
        "name": "机器之心",
        "category": "media",
        "company": "media",
        "tab": "tech",
        "description": "AI/ML领域权威媒体"
    },
    {
        "name": "量子位",
        "category": "media",
        "company": "media",
        "tab": "tech",
        "description": "AI科技媒体，关注大模型动态"
    },
    {
        "name": "新智元",
        "category": "media",
        "company": "media",
        "tab": "tech",
        "description": "AI前沿资讯"
    },
    {
        "name": "AI前线",
        "category": "media",
        "company": "media",
        "tab": "tech",
        "description": "AI行业技术动态"
    },
    {
        "name": "字节跳动技术团队",
        "category": "tech",
        "company": "bytedance",
        "tab": "tech",
        "description": "字节跳动技术博客"
    },
    {
        "name": "腾讯技术工程",
        "category": "tech",
        "company": "tencent",
        "tab": "tech",
        "description": "腾讯技术工程团队"
    },
    {
        "name": "InfoQ",
        "category": "media",
        "company": "media",
        "tab": "tech",
        "description": "软件开发与架构技术媒体"
    },
    {
        "name": "阿里云开发者",
        "category": "tech",
        "company": "alibaba",
        "tab": "tech",
        "description": "阿里云开发者社区"
    },
    {
        "name": "百度AI",
        "category": "tech",
        "company": "baidu",
        "tab": "tech",
        "description": "百度AI官方账号"
    },
]

# 公司中文映射
COMPANY_LABELS = {
    "bytedance": "字节跳动",
    "tencent": "腾讯",
    "alibaba": "阿里巴巴",
    "baidu": "百度",
    "meituan": "美团",
    "media": "媒体",
}

# Tab中文映射
TAB_LABELS = {
    "content": "今天都发了啥",
    "personnel": "人都去哪了",
    "tech": "技术进展",
}
