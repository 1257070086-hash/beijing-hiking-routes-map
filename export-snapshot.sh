#!/bin/bash
# export-snapshot.sh
# 把本地 WeWe RSS 数据导出为静态 JSON 快照 + AI 摘要，推送到 GitHub
# 用法：手动运行 或 cron 定时运行
# 依赖环境变量：DEEPSEEK_API_KEY（存于 ~/.zprofile）

set -e

WEWE_API="http://localhost:4000"
REPO_DIR="/Users/dingding/Desktop/space"
SNAPSHOT_DIR="$REPO_DIR/data-snapshot"
MONITOR_REPO="/Users/dingding/Desktop/competitor-monitor"
LOG="/tmp/wewe-snapshot.log"

echo "[$(date '+%Y-%m-%d %H:%M:%S')] 开始导出快照..." | tee -a "$LOG"

# 检查 WeWe RSS 是否在跑
if ! curl -s --max-time 5 "$WEWE_API/feeds" > /dev/null 2>&1; then
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] ❌ WeWe RSS 未运行，跳过" | tee -a "$LOG"
  exit 1
fi

mkdir -p "$SNAPSHOT_DIR"

# 1. 导出公众号列表
echo "[$(date '+%Y-%m-%d %H:%M:%S')] 导出 feeds..." | tee -a "$LOG"
curl -s --max-time 30 "$WEWE_API/feeds" > "$SNAPSHOT_DIR/feeds.json"
FEED_COUNT=$(python3 -c "import json; d=json.load(open('$SNAPSHOT_DIR/feeds.json')); print(len(d))")
echo "[$(date '+%Y-%m-%d %H:%M:%S')] ✅ 共 $FEED_COUNT 个公众号" | tee -a "$LOG"

# 2. 导出每个公众号的文章
FEED_IDS=$(python3 -c "import json; d=json.load(open('$SNAPSHOT_DIR/feeds.json')); [print(f['id']) for f in d]")

for FID in $FEED_IDS; do
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] 导出 $FID ..." | tee -a "$LOG"
  curl -s --max-time 30 "$WEWE_API/feeds/${FID}.json?limit=100" > "$SNAPSHOT_DIR/${FID}.json"
  sleep 0.3
done

# 3. 写入快照时间戳
TIMESTAMP=$(date -u '+%Y-%m-%dT%H:%M:%SZ')
echo "{\"snapshotTime\": \"$TIMESTAMP\", \"feedCount\": $FEED_COUNT}" > "$SNAPSHOT_DIR/meta.json"
echo "[$(date '+%Y-%m-%d %H:%M:%S')] ✅ 快照导出完成，时间: $TIMESTAMP" | tee -a "$LOG"

# 4. 生成 AI 摘要快照
echo "[$(date '+%Y-%m-%d %H:%M:%S')] 🤖 开始生成 AI 摘要..." | tee -a "$LOG"

if [ -z "${DEEPSEEK_API_KEY}" ]; then
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] ⚠️  未设置 DEEPSEEK_API_KEY，跳过 AI 摘要生成" | tee -a "$LOG"
else
  DEEPSEEK_API_KEY="$DEEPSEEK_API_KEY" python3 << 'PYEOF'
import json, os, time, urllib.request

SNAPSHOT_DIR = '/Users/dingding/Desktop/space/data-snapshot'
API_KEY = os.environ['DEEPSEEK_API_KEY']
LOG_FILE = '/tmp/wewe-snapshot.log'

def log(msg):
    ts = time.strftime('%Y-%m-%d %H:%M:%S')
    line = f"[{ts}] {msg}"
    print(line)
    with open(LOG_FILE, 'a') as f:
        f.write(line + '\n')

# 公司分组（与页面保持一致）
COMPANY_GROUPS = {
    '行业资讯': ['MP_WXS_3223374696','MP_WXS_3572959446','MP_WXS_3254144461','MP_WXS_3539511831','MP_WXS_3077993707','MP_WXS_1432156401','MP_WXS_3073282833','MP_WXS_2390142780','MP_WXS_3236757533','MP_WXS_3225964491'],
    '字节跳动': ['MP_WXS_3231231509','MP_WXS_3293283359','MP_WXS_3930693616','MP_WXS_3253632141'],
    '腾讯':     ['MP_WXS_1925343081','MP_WXS_2266383221','MP_WXS_2398602260'],
    '阿里':     ['MP_WXS_3534750856','MP_WXS_3885737868'],
    '美团':     ['MP_WXS_2397623202','MP_WXS_2396491298'],
    '小红书':   ['MP_WXS_3212124064','MP_WXS_3935671163','MP_WXS_3889763736'],
}
COMPANY_ALIASES = {
    '字节跳动': ['字节跳动','字节','抖音','今日头条','ByteDance'],
    '小红书':   ['小红书','RED','RedNote'],
    '美团':     ['美团'],
    '阿里':     ['阿里巴巴','阿里','蚂蚁','淘天','Alibaba'],
    '腾讯':     ['腾讯','微信','Tencent'],
    '行业资讯': [],
}

# 加载所有文章
with open(f'{SNAPSHOT_DIR}/feeds.json') as f:
    feeds = json.load(f)

feed_map = {fd['id']: fd for fd in feeds}
all_articles = []
for fd in feeds:
    fpath = f"{SNAPSHOT_DIR}/{fd['id']}.json"
    if not os.path.exists(fpath):
        continue
    with open(fpath) as f:
        data = json.load(f)
    for item in data.get('items', []):
        all_articles.append({
            'title': item.get('title', '(无标题)'),
            'url': item.get('url', ''),
            'authorName': fd.get('name', ''),
            'sourceId': fd['id'],
            'date': item.get('date_modified', '')[:10],  # 保留日期用于过滤
        })

def get_company(sid):
    for c, ids in COMPANY_GROUPS.items():
        if sid in ids: return c
    return '其他'

for a in all_articles:
    a['company'] = get_company(a['sourceId'])

# 只保留最近 3 天的文章（优先今天，不足则扩展到 3 天）
import datetime
today_str = datetime.datetime.utcnow().strftime('%Y-%m-%d')
recent_days = [(datetime.datetime.utcnow() - datetime.timedelta(days=i)).strftime('%Y-%m-%d') for i in range(3)]
# 先尝试只用今天；如果今天某公司文章太少，后面逐步扩展到 3 天
def get_recent_arts(company, days=3):
    days_list = recent_days[:days]
    return [a for a in all_articles if a['company'] == company and a['date'] in days_list]

def call_deepseek(prompt, system_msg):
    body = json.dumps({
        'model': 'deepseek-chat',
        'messages': [
            {'role': 'system', 'content': system_msg},
            {'role': 'user',   'content': prompt},
        ],
        'max_tokens': 1500, 'temperature': 0.6,
    }).encode('utf-8')
    req = urllib.request.Request(
        'https://api.deepseek.com/v1/chat/completions',
        data=body,
        headers={'Content-Type': 'application/json', 'Authorization': f'Bearer {API_KEY}'},
        method='POST'
    )
    with urllib.request.urlopen(req, timeout=60) as resp:
        d = json.loads(resp.read())
    if 'error' in d: raise Exception(d['error']['message'])
    return d['choices'][0]['message']['content']

summaries = {}
SYSTEM = '你是快手雇主品牌团队的竞对情报分析师。分析各公司旗下多个公众号的近期文章，提炼关键情报。输出语言简洁有力，每句话信息密度高，不废话。每条具体结论后必须用脚注编号标注来源，末尾列出参考文章。'

def build_article_index(arts):
    """构建编号→文章的映射，返回 (编号列表lines, url_map {编号: {title, url, date, authorName}})"""
    url_map = {}
    grouped = {}
    for a in arts:
        grouped.setdefault(a['authorName'], []).append(a)
    idx = 1
    lines = []
    for name, alist in grouped.items():
        lines.append(f'【{name}】')
        for a in alist:
            url = a['url'] or ''
            # 在文章列表中同时提供 URL，方便 AI 直接引用真实链接
            lines.append(f'[{idx}] [{a["date"]}] {a["title"]} | URL: {url}')
            url_map[idx] = {'title': a['title'], 'url': url, 'date': a['date'], 'authorName': a['authorName']}
            idx += 1
    return lines, url_map

def build_ref_footer(url_map):
    """生成供 AI 在输出末尾参考的文章链接列表说明"""
    lines = ['---', '**参考文章**']
    for idx, info in url_map.items():
        url = info['url'] or ''
        lines.append(f'[{idx}] [{info["date"]}] {info["authorName"]} · [{info["title"]}]({url})')
    return '\n'.join(lines)

CITATION_INSTRUCTION = (
    '\n\n【引用规则】\n'
    '1. 每条具体事实/结论后，用方括号脚注标注来源编号，例如："腾讯推出XXX产品[3]"；多来源写"[1][4]"。\n'
    '2. 正文结束后，在末尾输出"**参考文章**"小节，按编号列出所有被引用的文章。\n'
    '   格式：[编号] 日期 · 公众号名 · [文章标题](文章URL)\n'
    '   注意：文章URL请直接使用上方文章列表中"URL:"后面的真实地址，不要写"原文链接"占位符。\n'
    '3. 只列出正文中实际引用过的编号，未引用的不列出。'
)

for company in list(COMPANY_GROUPS.keys()):
    log(f"  生成「{company}」摘要...")
    # 只取今天的文章
    arts = get_recent_arts(company, days=1)
    if not arts:
        summaries[company] = '暂无文章数据'
        continue
    arts = arts[:50]

    date_range = f"{min(a['date'] for a in arts)} ~ {max(a['date'] for a in arts)}"

    lines, url_map = build_article_index(arts)

    if company == '行业资讯':
        # 额外纳入所有大厂账号今天的文章，让行业资讯摘要覆盖全局
        company_arts = []
        for c in COMPANY_GROUPS:
            if c == '行业资讯': continue
            ca = get_recent_arts(c, days=1)
            company_arts.extend(ca)
        company_grouped = {}
        for a in company_arts:
            key = f"{a['company']} · {a['authorName']}"
            company_grouped.setdefault(key, []).append(a)
        # 公司文章也纳入编号体系（编号续接行业资讯之后）
        c_idx = max(url_map.keys(), default=0) + 1
        company_lines = []
        for name, alist in company_grouped.items():
            company_lines.append(f'【{name}】')
            for a in alist[:8]:
                url = a['url'] or ''
                company_lines.append(f'[{c_idx}] [{a["date"]}] {a["title"]} | URL: {url}')
                url_map[c_idx] = {'title': a['title'], 'url': url, 'date': a['date'], 'authorName': name}
                c_idx += 1
        prompt = (
            f'请综合分析以下{date_range}的内容，按结构输出行业情报日报：\n\n'
            '**今日热点事件**\n（3-5条，列出今日互联网行业最重要的事件/动态，每条一句，简洁有力）\n\n'
            '**各大厂动向速览**\n（按公司分组，每家2-3句核心动态，基于该公司自有账号真实内容）\n\n'
            '**最新技术进展**\n（2-3条，提炼各大厂近期重要技术/产品进展）\n\n'
            '**行业趋势洞察**\n（2-3条，提炼这批文章反映的行业中长期趋势）\n\n'
            '**对快手的启示**\n（从行业动态中提炼1-2条对快手雇主品牌最有价值的启示）\n\n'
            '【注意】不要输出任何引用编号（如[1][2]），不要输出参考文章列表，只输出正文内容。\n\n'
            '---\n【行业资讯账号文章】\n' + '\n'.join(lines) +
            '\n\n---\n【各大厂账号文章】\n' + '\n'.join(company_lines)
        )
    else:
        aliases = COMPANY_ALIASES.get(company, [company])
        industry_arts = get_recent_arts('行业资讯', days=3)
        industry_arts = [a for a in industry_arts if any(al in a['title'] for al in aliases)][:15]
        # 行业资讯中关于该公司的文章也纳入编号体系
        i_idx = max(url_map.keys(), default=0) + 1
        industry_note = ''
        if industry_arts:
            industry_note = f'\n\n【行业资讯关于「{company}」的报道】\n'
            for a in industry_arts:
                url = a['url'] or ''
                industry_note += f'[{i_idx}] [{a["date"]}] 《{a["authorName"]}》{a["title"]} | URL: {url}\n'
                url_map[i_idx] = {'title': a['title'], 'url': url, 'date': a['date'], 'authorName': a['authorName']}
                i_idx += 1
        prompt = (
            f'请分析「{company}」旗下各公众号{date_range}的文章，按以下结构输出：\n\n'
            f'**招聘动态**\n（总结最近的招聘方向、岗位重点、规模变化，2-3句）\n\n'
            f'**人事变动**\n（高管任免、团队调整；无则写"未检测到明显人事变动"）\n\n'
            f'**最新技术进展**\n（1-2条，提炼该公司近期发布的重要技术/产品进展；无相关内容则写"暂未检测到明显技术发布"）\n\n'
            f'**近期战略重点**\n（3条，每条一句）\n- \n- \n- \n\n'
            f'**对快手的启示**\n（快手雇主品牌可借鉴或差异化的一句话建议）\n\n'
            '【注意】不要输出任何引用编号（如[1][2]），不要输出参考文章列表，只输出正文内容。\n\n'
            '---\n各账号文章如下：\n' + '\n'.join(lines) + industry_note
        )

    try:
        txt = call_deepseek(prompt, SYSTEM)
        summaries[company] = txt
        log(f"  ✅ 「{company}」完成（{len(txt)} 字）")
    except Exception as e:
        log(f"  ❌ 「{company}」失败：{e}")
        summaries[company] = f'生成失败：{e}'
    time.sleep(1)

out_path = f'{SNAPSHOT_DIR}/ai-summary.json'
with open(out_path, 'w', encoding='utf-8') as f:
    json.dump({'generatedAt': time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime()), 'summaries': summaries}, f, ensure_ascii=False, indent=2)
log(f"✅ AI 摘要已写入 {out_path}（共 {len(summaries)} 家公司）")
PYEOF
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] ✅ AI 摘要生成完成" | tee -a "$LOG"
fi

# 5. 同步快照到 competitor-monitor 仓库
if [ -d "$MONITOR_REPO" ]; then
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] 🔄 同步快照到 competitor-monitor 仓库..." | tee -a "$LOG"
  mkdir -p "$MONITOR_REPO/data-snapshot"
  cp -r "$SNAPSHOT_DIR/." "$MONITOR_REPO/data-snapshot/"
fi

# 6. 推送两个仓库
for PUSH_DIR in "$REPO_DIR" "$MONITOR_REPO"; do
  [ -d "$PUSH_DIR" ] || continue
  cd "$PUSH_DIR"
  git add data-snapshot/
  if git diff --staged --quiet; then
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] [$PUSH_DIR] 无变化，跳过推送" | tee -a "$LOG"
  else
    git commit -m "chore: 更新数据快照 + AI 摘要 $TIMESTAMP"
    git push origin main
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] ✅ [$PUSH_DIR] 已推送到 GitHub" | tee -a "$LOG"
  fi
done
