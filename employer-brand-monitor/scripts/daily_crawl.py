#!/usr/bin/env python3
"""
快手雇主品牌 - 每日舆情自动爬取脚本
========================================
功能：
  1. 从知乎搜索"快手 工作体验/面试/裁员/薪资"等关键词
  2. 从微博搜索相关话题
  3. 对新内容进行情绪分析（关键词规则）
  4. 去重后追加到 data/articles.json
  5. 自动打包为单文件 HTML 并上传 CDN（需 --deploy 参数）

使用方式：
  python3 scripts/daily_crawl.py           # 执行爬取 + 更新 JSON
  python3 scripts/daily_crawl.py --deploy  # 执行爬取 + 打包 + 上传 CDN

定时任务安装：
  bash scripts/install_cron.sh
"""

import json, os, sys, re, time, urllib.request, urllib.parse
import hashlib, subprocess
from datetime import datetime, date, timedelta

# ─── 配置 ────────────────────────────────────────────────────────
BASE_DIR    = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_FILE   = os.path.join(BASE_DIR, 'data', 'articles.json')
OUTPUT_HTML = os.path.join(BASE_DIR, 'index_single.html')
SOURCE_HTML = os.path.join(BASE_DIR, 'index.html')
LOG_DIR     = os.path.join(BASE_DIR, 'logs')
UPLOAD_SH   = os.path.expanduser('~/.codeflicker/skills/frontend-html-bundler/scripts/upload_html.sh')

SEARCH_QUERIES = [
    "快手 工作体验",
    "快手 面试体验",
    "快手 实习",
    "快手 裁员",
    "快手 薪资福利",
    "快手 校招",
]

CRISIS_KW   = ['裁员','维权','PUA','欺骗','黑心','毁约','违法']
NEGATIVE_KW = ['不推荐','内卷','压力大','态度差','不靠谱','坑','劝退','加班','通宵','下坡路']
POSITIVE_KW = ['福利好','氛围好','推荐','值得','成长','不错','满意','友好','offer','愉快']


def log(msg):
    ts = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    print(f"[{ts}] {msg}", flush=True)


def analyze_sentiment(text):
    text = text or ''
    crisis_hits = [k for k in CRISIS_KW   if k in text]
    neg_hits    = [k for k in NEGATIVE_KW if k in text]
    pos_hits    = [k for k in POSITIVE_KW if k in text]
    all_hits    = list(set(crisis_hits + neg_hits))
    if crisis_hits:
        return 'negative', 0.08, all_hits, True
    neg = len(crisis_hits)*2 + len(neg_hits)
    pos = len(pos_hits)
    if neg > pos:
        return 'negative', round(max(0.1, 0.4 - neg*0.06), 2), all_hits, False
    elif pos > neg:
        return 'positive', round(min(0.95, 0.6 + pos*0.07), 2), [], False
    return 'neutral', 0.5, [], False


def extract_tags(text):
    tag_map = {
        '校招': ['校招','秋招','春招','应届'],
        '实习': ['实习','intern'],
        '面试': ['面试','面经','offer'],
        '裁员': ['裁员'],
        '薪资': ['薪资','工资','年薪','福利'],
        '加班': ['加班','通宵','996'],
        '工作体验': ['工作体验','在职'],
    }
    return [tag for tag, kws in tag_map.items() if any(k in text for k in kws)]


def make_id(url, platform):
    h = hashlib.md5(url.encode()).hexdigest()[:10]
    prefix = {'知乎':'zh','微博':'wb','微信':'wx','小红书':'xhs'}.get(platform,'unk')
    return f"{prefix}_{datetime.now().strftime('%Y%m%d')}_{h}"


def load_existing():
    if not os.path.exists(DATA_FILE):
        return set(), []
    with open(DATA_FILE, 'r', encoding='utf-8') as f:
        data = json.load(f)
    urls = {a.get('url', '') for a in data}
    return urls, data


def save_articles(articles):
    os.makedirs(os.path.dirname(DATA_FILE), exist_ok=True)
    with open(DATA_FILE, 'w', encoding='utf-8') as f:
        json.dump(articles, f, ensure_ascii=False, indent=2)
    log(f"  💾 已保存 {len(articles)} 条数据")


def search_zhihu(query):
    """调用知乎搜索 API，需要登录 Cookie 才能获取完整结果"""
    results = []
    encoded = urllib.parse.quote(query)
    api_url = (
        f"https://www.zhihu.com/api/v4/search_v3?"
        f"t=general&q={encoded}&correction=1&offset=0&limit=10"
        f"&search_source=Normal"
    )
    req = urllib.request.Request(api_url)
    req.add_header('User-Agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36')
    req.add_header('Accept', 'application/json')
    req.add_header('Referer', 'https://www.zhihu.com/search')
    # ⚠️ 如需完整数据，请在下方填入知乎登录 Cookie：
    # req.add_header('Cookie', 'YOUR_ZHIHU_COOKIE_HERE')

    try:
        with urllib.request.urlopen(req, timeout=12) as resp:
            data = json.loads(resp.read().decode())
        items = data.get('data', [])
        for item in items:
            obj  = item.get('object', {})
            t    = obj.get('type', '')
            if t not in ('answer', 'article'):
                continue
            title   = obj.get('question', {}).get('title', '') if t == 'answer' else obj.get('title', '')
            excerpt = (obj.get('excerpt') or obj.get('content', ''))[:300]
            author  = obj.get('author', {}).get('name', '匿名')
            created = obj.get('created_time', 0) or obj.get('updated_time', 0)
            pub     = datetime.fromtimestamp(created).strftime('%Y-%m-%d') if created else date.today().isoformat()
            if t == 'answer':
                link = f"https://www.zhihu.com/question/{obj.get('question',{}).get('id','')}/answer/{obj.get('id','')}"
            else:
                link = f"https://zhuanlan.zhihu.com/p/{obj.get('id','')}"
            if not title or not link:
                continue
            sent, score, hits, alert = analyze_sentiment(title + ' ' + excerpt)
            results.append({
                'platform': '知乎', 'title': title, 'content': excerpt,
                'url': link, 'author': author, 'published_at': pub,
                'collected_at': datetime.now().isoformat(),
                'sentiment': sent, 'sentiment_score': score,
                'keywords_hit': hits, 'is_alert': alert,
                'tags': extract_tags(title + excerpt),
            })
    except Exception as e:
        log(f"  ⚠️  知乎搜索失败 [{query}]: {e}")
    return results


def search_weibo(query):
    """搜索微博，返回最近7天相关帖子"""
    results = []
    start   = (date.today() - timedelta(days=7)).isoformat()
    end     = date.today().isoformat()
    encoded = urllib.parse.quote(query)
    url     = f"https://s.weibo.com/weibo?q={encoded}&typeall=1&suball=1&timescope=custom:{start}:{end}"
    req = urllib.request.Request(url)
    req.add_header('User-Agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36')
    req.add_header('Accept-Language', 'zh-CN,zh;q=0.9')
    # ⚠️ 如需完整数据，请填入微博登录 Cookie：
    # req.add_header('Cookie', 'YOUR_WEIBO_COOKIE_HERE')

    try:
        with urllib.request.urlopen(req, timeout=12) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
        # 提取文本内容和链接
        texts = re.findall(r'class="txt"[^>]*>(.*?)</p>', html, re.DOTALL)
        links = re.findall(r'href="(https://weibo\.com/\d+/\w+)"', html)
        for i, raw in enumerate(texts[:8]):
            clean = re.sub(r'<[^>]+>', '', raw).strip()
            if len(clean) < 15 or '快手' not in clean:
                continue
            link  = links[i] if i < len(links) else f"https://weibo.com/search?q={encoded}"
            sent, score, hits, alert = analyze_sentiment(clean)
            results.append({
                'platform': '微博',
                'title':    clean[:60] + ('...' if len(clean) > 60 else ''),
                'content':  clean[:300],
                'url':      link,
                'author':   '微博用户',
                'published_at': date.today().isoformat(),
                'collected_at': datetime.now().isoformat(),
                'sentiment': sent, 'sentiment_score': score,
                'keywords_hit': hits, 'is_alert': alert,
                'tags': extract_tags(clean),
            })
    except Exception as e:
        log(f"  ⚠️  微博搜索失败 [{query}]: {e}")
    return results


def build_single_html():
    """把 articles.json 内嵌到 HTML，生成单文件"""
    if not os.path.exists(SOURCE_HTML):
        log(f"  ❌ 找不到源文件 {SOURCE_HTML}")
        return False
    with open(DATA_FILE, 'r', encoding='utf-8') as f:
        articles = json.load(f)
    with open(SOURCE_HTML, 'r', encoding='utf-8') as f:
        html = f.read()
    inline_data = json.dumps(articles, ensure_ascii=False)
    old = "  try {\n    // 内嵌数据（已包含真实采集内容，无需外部文件）\n    let base = "
    # 查找并替换内嵌数据部分
    pattern = r"let base = \[[\s\S]*?\];"
    match = re.search(r"// 内嵌数据.*?let base = (\[[\s\S]*?\]);", html)
    if match:
        html = html[:match.start(1)] + inline_data + ';' + html[match.end(1):]
    else:
        # fallback: 替换 fetch 调用
        old_fetch = "    const resp = await fetch('data/articles.json');\n    let base = await resp.json();"
        new_inline = f"    // 内嵌数据（已包含真实采集内容，无需外部文件）\n    let base = {inline_data};"
        html = html.replace(old_fetch, new_inline)
    with open(OUTPUT_HTML, 'w', encoding='utf-8') as f:
        f.write(html)
    size = os.path.getsize(OUTPUT_HTML) // 1024
    log(f"  📦 已生成单文件 {OUTPUT_HTML}（{size}KB，{len(articles)} 条数据）")
    return True


def upload_to_cdn():
    """上传到快手内网 CDN"""
    if not os.path.exists(UPLOAD_SH):
        log(f"  ❌ 上传脚本不存在: {UPLOAD_SH}")
        return None
    try:
        result = subprocess.run(
            ['bash', UPLOAD_SH, OUTPUT_HTML],
            capture_output=True, text=True, timeout=60
        )
        output = result.stdout + result.stderr
        # 提取 CDN URL
        match = re.search(r'CDN URL:\s*(https://\S+)', output)
        if match:
            cdn_url = match.group(1)
            log(f"  🌐 CDN 链接: {cdn_url}")
            return cdn_url
        else:
            log(f"  ❌ 上传失败，输出: {output[:200]}")
            return None
    except Exception as e:
        log(f"  ❌ 上传异常: {e}")
        return None


def run(deploy=False):
    os.makedirs(LOG_DIR, exist_ok=True)
    log("=" * 50)
    log("🚀 快手雇主品牌 - 每日舆情爬取开始")
    log("=" * 50)

    # 加载已有数据
    existing_urls, all_articles = load_existing()
    log(f"📂 已有 {len(all_articles)} 条数据")

    # 爬取新内容
    new_items = []
    for query in SEARCH_QUERIES:
        log(f"\n🔍 搜索: {query}")
        # 知乎
        zh_results = search_zhihu(query)
        log(f"   知乎: {len(zh_results)} 条")
        # 微博
        wb_results = search_weibo(query)
        log(f"   微博: {len(wb_results)} 条")
        new_items.extend(zh_results + wb_results)
        time.sleep(1.5)  # 请求间隔，避免频率过高

    # 去重
    added = 0
    for item in new_items:
        url = item.get('url', '')
        if url and url not in existing_urls:
            item['id'] = make_id(url, item['platform'])
            all_articles.insert(0, item)  # 新内容插入最前面
            existing_urls.add(url)
            added += 1

    log(f"\n✅ 新增 {added} 条（共 {len(all_articles)} 条）")

    # 保存
    save_articles(all_articles)

    if deploy:
        log("\n📦 开始打包并上传...")
        if build_single_html():
            cdn_url = upload_to_cdn()
            if cdn_url:
                # 保存最新 CDN URL
                url_file = os.path.join(BASE_DIR, 'latest_cdn_url.txt')
                with open(url_file, 'w') as f:
                    f.write(f"{datetime.now().isoformat()}\n{cdn_url}\n")
                log(f"\n🎉 部署完成！访问链接：{cdn_url}")
            else:
                log("\n⚠️  上传失败，请检查网络或 CDN 配置")
    else:
        log("\n💡 提示：使用 --deploy 参数可自动打包并上传 CDN")

    log("\n" + "=" * 50)
    log("✅ 每日爬取完成")


if __name__ == '__main__':
    deploy = '--deploy' in sys.argv
    run(deploy=deploy)
