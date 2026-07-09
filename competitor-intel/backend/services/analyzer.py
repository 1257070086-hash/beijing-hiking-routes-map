"""
规则引擎 AI 分析模块
- 默认使用 jieba 分词 + 关键词库做分类、打标、摘要、评分
- 预留 LLM 接口（配置 GEMINI_API_KEY 后自动升级为 AI 分析）
"""
import re
import json
import os
from typing import Optional

try:
    import jieba
    import jieba.analyse
    JIEBA_AVAILABLE = True
except ImportError:
    JIEBA_AVAILABLE = False

# ==============================
# 关键词库定义
# ==============================

# Tab 分类关键词
TAB_KEYWORDS = {
    "personnel": [
        "离职", "入职", "加入", "出走", "辞职", "晋升", "降职", "调任",
        "人事变动", "组织架构", "架构调整", "裁员", "缩编", "扩招",
        "总裁", "CEO", "CTO", "VP", "负责人", "接任", "卸任", "退休",
        "HR政策", "薪酬", "绩效", "layoff", "restructure", "resign",
        "跳槽", "挖人", "猎头", "offer", "高管", "任命", "免职",
    ],
    "tech": [
        "大模型", "LLM", "GPT", "Claude", "Gemini", "发布", "开源",
        "技术路线", "论文", "NeurIPS", "ICML", "ICLR", "ACL", "CVPR",
        "顶会", "顶刊", "AI", "人工智能", "深度学习", "神经网络",
        "多模态", "Agent", "RAG", "微调", "fine-tuning", "预训练",
        "推理", "训练", "算法", "模型", "参数", "benchmark", "SOTA",
        "芯片", "GPU", "算力", "云计算", "开放平台",
    ],
    "content": [
        "招聘", "校招", "社招", "实习", "内推", "offer", "面试",
        "团建", "文化", "价值观", "员工", "福利", "激励",
        "公司", "战略", "业务", "产品", "发展", "规划",
    ],
}

# 公司关键词识别
COMPANY_KEYWORDS = {
    "bytedance": ["字节", "字节跳动", "TikTok", "抖音", "飞书", "今日头条", "剪映", "懒人听书"],
    "tencent": ["腾讯", "微信", "QQ", "微视", "腾讯云", "游戏", "王者荣耀"],
    "alibaba": ["阿里", "阿里巴巴", "淘宝", "天猫", "蚂蚁", "钉钉", "菜鸟", "高德", "优酷"],
    "baidu": ["百度", "文心", "百度云", "Apollo", "百度AI", "小度", "爱奇艺"],
    "meituan": ["美团", "大众点评", "美团优选", "摩拜"],
}

# 重要度关键词（越高越重要）
IMPORTANCE_HIGH = [
    "CEO", "CTO", "总裁", "董事长", "副总裁", "VP", "离职", "裁员",
    "发布", "开源", "顶会", "重大", "重磅", "突破", "首发", "独家",
    "架构调整", "战略", "重组", "合并", "收购", "上市",
]
IMPORTANCE_MEDIUM = [
    "高管", "晋升", "调任", "入职", "招聘", "论文", "新模型",
    "更新", "升级", "优化", "改版", "版本",
]


def analyze_article(title: str, content: str = "", account_tab: str = "content") -> dict:
    """
    分析文章，返回：summary / tags / importance / tab
    优先尝试 LLM，失败则使用规则引擎
    """
    # 检查是否配置了 Gemini API Key（预留接口）
    gemini_key = os.getenv("GEMINI_API_KEY", "")
    if gemini_key and _test_gemini_available():
        try:
            return _analyze_with_gemini(title, content, gemini_key)
        except Exception:
            pass  # 降级到规则引擎

    return _analyze_with_rules(title, content, account_tab)


def _analyze_with_rules(title: str, content: str = "", account_tab: str = "content") -> dict:
    """规则引擎分析"""
    full_text = f"{title} {content}"

    # 1. 提取标签
    tags = _extract_tags(full_text)

    # 2. 判断 Tab 分类
    tab = _classify_tab(full_text, account_tab)

    # 3. 计算重要度
    importance = _score_importance(full_text)

    # 4. 生成摘要（取正文前200字，加关键词提示）
    summary = _generate_summary(title, content, tags)

    # 5. 识别公司
    company = _detect_company(full_text)

    return {
        "summary": summary,
        "tags": tags,
        "importance": importance,
        "tab": tab,
        "company": company,
    }


def _extract_tags(text: str) -> list[str]:
    """提取关键词标签"""
    tags = []

    if JIEBA_AVAILABLE:
        # 用 jieba 提取 TF-IDF 关键词
        keywords = jieba.analyse.extract_tags(text, topK=8, withWeight=False)
        tags.extend(keywords)

    # 规则补充：检测特定实体
    for company, keywords in COMPANY_KEYWORDS.items():
        for kw in keywords:
            if kw in text:
                company_labels = {
                    "bytedance": "字节跳动", "tencent": "腾讯",
                    "alibaba": "阿里巴巴", "baidu": "百度", "meituan": "美团"
                }
                label = company_labels.get(company, company)
                if label not in tags:
                    tags.append(label)
                break

    # 检测技术关键词
    tech_hits = [kw for kw in TAB_KEYWORDS["tech"] if kw in text][:3]
    for kw in tech_hits:
        if kw not in tags:
            tags.append(kw)

    # 检测人事关键词
    hr_hits = [kw for kw in TAB_KEYWORDS["personnel"] if kw in text][:3]
    for kw in hr_hits:
        if kw not in tags:
            tags.append(kw)

    return list(dict.fromkeys(tags))[:10]  # 去重，最多10个


def _classify_tab(text: str, default_tab: str) -> str:
    """判断文章属于哪个 Tab"""
    scores = {"content": 0, "personnel": 0, "tech": 0}

    for tab, keywords in TAB_KEYWORDS.items():
        for kw in keywords:
            if kw in text:
                scores[tab] += 1

    # 如果有明显倾向，覆盖默认 tab
    max_tab = max(scores, key=scores.get)
    if scores[max_tab] >= 2:
        return max_tab

    return default_tab


def _score_importance(text: str) -> int:
    """评估重要度 1-5"""
    score = 3  # 默认中等

    high_hits = sum(1 for kw in IMPORTANCE_HIGH if kw in text)
    medium_hits = sum(1 for kw in IMPORTANCE_MEDIUM if kw in text)

    if high_hits >= 2:
        score = 5
    elif high_hits == 1:
        score = 4
    elif medium_hits >= 2:
        score = 4
    elif medium_hits == 1:
        score = 3
    else:
        score = 2

    return max(1, min(5, score))


def _generate_summary(title: str, content: str, tags: list) -> str:
    """生成简短摘要"""
    # 清理 HTML 标签
    clean_content = re.sub(r'<[^>]+>', '', content or "")
    clean_content = re.sub(r'\s+', ' ', clean_content).strip()

    if len(clean_content) > 200:
        # 取前200字
        summary = clean_content[:200] + "..."
    elif clean_content:
        summary = clean_content
    else:
        # 仅有标题时，基于标签生成描述
        if tags:
            summary = f"本文涉及：{' | '.join(tags[:5])}"
        else:
            summary = title

    return summary[:300]


def _detect_company(text: str) -> Optional[str]:
    """从文本中检测相关公司"""
    for company, keywords in COMPANY_KEYWORDS.items():
        for kw in keywords:
            if kw in text:
                return company
    return None


def _test_gemini_available() -> bool:
    """测试 Gemini API 是否可用（带缓存）"""
    return False  # 暂时禁用，避免每次都发请求


def _analyze_with_gemini(title: str, content: str, api_key: str) -> dict:
    """
    用 Gemini API 分析（预留接口）
    当 GEMINI_API_KEY 配置且网络可达时自动启用
    """
    import httpx

    prompt = f"""分析以下微信公众号文章，返回JSON格式：

标题：{title}
内容：{content[:500] if content else "无"}

请返回：
{{
  "summary": "100字以内摘要",
  "tags": ["标签1", "标签2", "标签3"],  // 最多5个
  "importance": 3,  // 1-5分，5最重要
  "tab": "content"  // content/personnel/tech 三选一
    // content=公司文化招聘, personnel=人事变动, tech=技术进展
}}

只返回JSON，不要其他内容。"""

    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key={api_key}"
    resp = httpx.post(url, json={
        "contents": [{"parts": [{"text": prompt}]}]
    }, timeout=30)

    if resp.status_code == 200:
        data = resp.json()
        text = data["candidates"][0]["content"]["parts"][0]["text"]
        # 提取JSON
        json_match = re.search(r'\{.*\}', text, re.DOTALL)
        if json_match:
            return json.loads(json_match.group())

    raise Exception(f"Gemini API error: {resp.status_code}")
