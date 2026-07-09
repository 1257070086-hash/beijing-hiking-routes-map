# Learnings

Corrections, insights, and knowledge gaps captured during development.

**Categories**: correction | insight | knowledge_gap | best_practice

---

## [LRN-20260505-001] best_practice

**Logged**: 2026-05-05T22:00:00+08:00
**Priority**: high
**Status**: resolved
**Area**: frontend

### Summary
competitor-monitor 本地模式直连 WeWe RSS 时，必须在 fetch URL 后加 `?limit=100`，否则只返回默认 10 篇/账号

### Details
**场景**：用户反馈本地网页（localhost:8888）文章总量只有 240 篇，而快照有 2340 篇

**根因**：
- 脚本 `export-snapshot.sh` 用 `curl "$WEWE_API/feeds/${FID}.json?limit=100"` 抓快照，每账号 100 篇 ✅
- 前端 `competitor-monitor.html` 本地模式 fetch URL 为 `${WEWE_BASE}/feeds/${src.id}.json`，没有 limit 参数 ❌
- WeWe RSS 默认返回 10 篇，24 账号 × 10 = 240 篇

**修复**：
```js
// 修复前
const url = `${dataBase}/${src.id}.json`;
// 修复后
const url = usingSnapshot ? `${dataBase}/${src.id}.json` : `${dataBase}/${src.id}.json?limit=100`;
```

### Suggested Action
新增或修改本地直连 WeWe RSS 的 fetch 时，始终检查是否携带 `?limit=100`

### Metadata
- Source: user_feedback
- Related Files: /Users/dingding/Desktop/space/competitor-monitor.html
- Tags: wewe-rss, limit, fetch, competitor-monitor, 文章总量
- Pattern-Key: wewe-rss.fetch-limit
- Recurrence-Count: 1
- First-Seen: 2026-05-05

---

## [LRN-20260505-002] best_practice

**Logged**: 2026-05-05T22:00:00+08:00
**Updated**: 2026-05-06T00:25:00+08:00
**Priority**: medium
**Status**: resolved
**Area**: backend

### Summary
从快照生成周报 `data-W*.js` 的完整工作流：捞文章 → Claude 直接撰写内容 → 组装 JS → 推送双仓库

### Details
**场景**：每周需要生成 competitor-monitor 的周报数据文件

**重要规则**：禁止未经用户允许调用 DeepSeek API 生成内容，应由 Claude 直接阅读文章列表后撰写

**完整流程**：

1. **捞文章**：按时间段过滤 data-snapshot/ 下各公众号 JSON 的 `date_modified`
   ```python
   START = datetime(2026,4,28, tzinfo=timezone.utc)
   END   = datetime(2026,5,6,  tzinfo=timezone.utc)
   ```

2. **Claude 直接撰写内容**（阅读文章标题+URL后分析）：
   - 行业资讯分析（热点事件 / 技术进展 / 行业趋势 / 对快手启示）
   - 各大厂分析（摘要 / 招聘动态 / 战略重点 / 对快手启示）
   - 5 条周度头条

3. **组装 JS**：直接用 `write_to_file` 写 `data-Wxx.js`，按照 data-W17.js 的结构模板
   - 注意 JS 中单引号需要用 `\'` 转义

4. **推送**：
   - 先跑 `export-snapshot.sh` 更新快照 + AI 摘要，再单独 push 周报文件
   - 两个仓库都需同步：space 和 competitor-monitor

**踩坑**：
- 如果使用 Python 动态构建 JS，`make_sources()` 需拆成独立函数，避免 f-string 嵌套转义报错

### Suggested Action
将此流程固化为 `generate-weekly.sh` 或 Python 脚本，减少每周手动操作

### Metadata
- Source: conversation
- Related Files: /Users/dingding/Desktop/space/weekly-report/data-W18.js
- Tags: 周报, weekly-report, claude, data-snapshot, competitor-monitor
- Pattern-Key: competitor-monitor.weekly-report-generation
- Recurrence-Count: 2
- First-Seen: 2026-05-05

---

## [LRN-20260506-001] best_practice

**Logged**: 2026-05-06T00:25:00+08:00
**Priority**: medium
**Status**: resolved
**Area**: frontend

### Summary
competitor-monitor 周报新增一期时，需同时更新/创建 4 个文件才能让页面正确加载

### Details
**场景**：新增 W18 周报后，用户反馈"AI 资讯摘要里的周报没看到 W18"

**根因**：周报页面由 4 个文件协同工作，漏了任何一个都会导致新周报无法显示

**必须同时操作的 4 个文件**（以新增 W18 为例）：

| 文件 | 作用 | 操作 |
|------|------|------|
| `data-W18.js` | W18 的数据 | 新建（本周数据）|
| `report-W18.html` | W18 的独立 HTML 页面 | 新建（复制 report-W17.html 模板，改 title 和 script src）|
| `app-W18.js` | W18 页面的渲染逻辑 | 新建（复制 app-W17.js，更新 REPORTS 列表，W18 active=true）|
| `app.js` | 主页（index.html）的渲染逻辑 | 修改 REPORTS 列表，W18 active=true，W17 变为历史链接 |
| `data.js` | 主页（index.html）的数据 | 覆盖为 data-W18.js 的内容（`cp data-W18.js data.js`）|

**REPORTS 列表规则**（以主页 app.js 为例）：
```js
const REPORTS = [
  { week: '2026 W18', range: '4.28 — 5.5', file: 'index.html', active: true },   // 最新周，指向 index.html
  { week: '2026 W17', range: '4.21 — 4.27', file: 'report-W17.html', active: false }, // 历史周
  { week: '2026 W16', range: '4.14 — 4.19', file: 'report-W16.html', active: false }, // 历史周
];
```

**同步到两个仓库**：`space/weekly-report/` 和 `competitor-monitor/weekly-report/` 内容完全一致

### Suggested Action
每次新增周报前，列出 checklist：data-Wxx.js / report-Wxx.html / app-Wxx.js / app.js(REPORTS) / data.js

### Metadata
- Source: user_feedback
- Related Files: /Users/dingding/Desktop/space/weekly-report/
- Tags: 周报, weekly-report, competitor-monitor, 页面注册, checklist
- Pattern-Key: competitor-monitor.weekly-report-page-registration
- Recurrence-Count: 1
- First-Seen: 2026-05-06

---

## [LRN-20260506-002] correction

**Logged**: 2026-05-06T00:25:00+08:00
**Priority**: medium
**Status**: resolved
**Area**: frontend

### Summary
周报侧边栏目录有三个经典 JS bug：`replace(' ','')` 只替换首个空格、active 子目录不自动展开、`this` 指向导致点击后消失

### Details
**场景**：用户反馈周报侧边栏目录"有时显示不完整"，"点击后有的会消失"

**Bug 1 — String.replace 只替换首次匹配**
```js
// ❌ 错误：只去掉第一个空格，'2026 W18' → '2026W18'（W17变'2026W17'，容易混乱）
r.week.replace(' ', '')

// ✅ 正确：正则全局替换
r.week.replace(/\s/g, '')
```

**Bug 2 — active 子目录初始不展开**
```js
// ❌ 错误：子目录 div 写死 display:none，加载后 active 周报的子目录也是隐藏的
`<div class="sidebar-sections" style="display:none">`

// ✅ 正确：active 周报的子目录不加 display:none（CSS 的 display:flex 控制展开）
// 给 active 的 .sidebar-item 加 'expanded' class
`<div class="sidebar-item active expanded" ...>`
```

**Bug 3 — toggleSections 依赖 this 导致点击后子目录消失**
```js
// ❌ 错误：innerHTML 重建的元素，传入 this 后操作节点状态混乱
window.toggleSections = function(key, headerEl) {
  headerEl.classList.toggle('expanded', !isOpen); // this 指向有问题
};

// ✅ 正确：完全通过 getElementById 操作，不依赖 this/headerEl
window.toggleSections = function(key) {
  const el = document.getElementById(`sidebar-sections-${key}`);
  const header = el && el.previousElementSibling; // 通过 DOM 关系找 header
  if (!el) return;
  const isOpen = el.style.display !== 'none';
  el.style.display = isOpen ? 'none' : '';  // '' 让 CSS flex 接管展开
  if (header) header.classList.toggle('expanded', !isOpen);
};
```

### Suggested Action
动态渲染侧边栏时：① 用正则替换空格；② active 项默认展开（不加 display:none）；③ 事件函数通过 id 操作 DOM，不依赖 this

### Metadata
- Source: user_feedback
- Related Files: /Users/dingding/Desktop/space/weekly-report/app.js, app-W17.js, app-W18.js
- Tags: sidebar, 侧边栏, JS-bug, innerHTML, replace, toggleSections, competitor-monitor
- Pattern-Key: weekly-report.sidebar-bugs
- Recurrence-Count: 1
- First-Seen: 2026-05-06

---

## [LRN-20260506-003] best_practice

**Logged**: 2026-05-06T02:00:00+08:00
**Priority**: high
**Status**: resolved
**Area**: infra

### Summary
macOS 定时任务"睡眠期间跳过"问题：cron 不适合需要在 Mac 休眠后唤醒执行的定时任务，应改用 launchd（LaunchAgents）

### Details
**场景**：用户要每天 19:00 自动更新 WeWe RSS 快照，要求"睡眠也可以触发"

**cron 的问题**：
- Mac 睡眠期间 cron 任务被跳过，不会补跑
- 适合始终开机的服务器，不适合笔记本

**launchd 方案**（使用 `~/Library/LaunchAgents/`）：
```xml
<!-- com.dingding.wewe-auto-update.plist -->
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" ...>
<plist version="1.0">
<dict>
  <key>Label</key>
  <string>com.dingding.wewe-auto-update</string>
  <key>ProgramArguments</key>
  <array>
    <string>/bin/bash</string>
    <string>/Users/dingding/Desktop/space/auto-update-wewe.sh</string>
  </array>
  <key>StartCalendarInterval</key>
  <dict>
    <key>Hour</key>
    <integer>19</integer>
    <key>Minute</key>
    <integer>0</integer>
  </dict>
  <key>StandardOutPath</key>
  <string>/tmp/wewe-auto-update.log</string>
  <key>StandardErrorPath</key>
  <string>/tmp/wewe-auto-update.log</string>
</dict>
</plist>
```

**加载/卸载命令**：
```bash
launchctl load ~/Library/LaunchAgents/com.dingding.wewe-auto-update.plist
launchctl list | grep wewe  # 验证已加载
launchctl unload ~/Library/LaunchAgents/com.dingding.wewe-auto-update.plist  # 卸载
```

**launchd 与 cron 的核心区别**：
- launchd 在 Mac 从睡眠唤醒后，如果错过了触发时间，会立即补跑一次（StartCalendarInterval 行为）
- StandardOutPath/StandardErrorPath 合并到同一日志文件便于调试

### Suggested Action
所有需要"Mac 睡眠也可触发"的定时任务，一律用 launchd（LaunchAgents），不用 cron

### Metadata
- Source: user_feedback
- Related Files: ~/Library/LaunchAgents/com.dingding.wewe-auto-update.plist, /Users/dingding/Desktop/space/auto-update-wewe.sh
- Tags: launchd, cron, 定时任务, macOS, sleep, LaunchAgents, 睡眠唤醒
- Pattern-Key: macos.scheduled-task-launchd-vs-cron
- Recurrence-Count: 1
- First-Seen: 2026-05-06

---

## [LRN-20260506-004] best_practice

**Logged**: 2026-05-06T02:00:00+08:00
**Priority**: medium
**Status**: resolved
**Area**: backend

### Summary
AI 摘要分公司展示为"暂无数据"的根因：脚本只取"今天"文章，而 WeWe 停更时分公司账号无近期文章，应实现 1天→7天→最新N篇 fallback 策略

### Details
**场景**：用户反馈 competitor-monitor 页面的 AI 摘要只有"行业资讯"有内容，各公司（字节/腾讯/阿里/美团/小红书）均显示"暂无文章数据"

**根因追踪**：
1. `ai-summary.json` 中各公司确实写着"暂无文章数据"
2. 脚本 `export-snapshot.sh` 的 `get_recent_arts()` 默认取 days=1（只取今天）
3. WeWe RSS 各大厂账号最近一批文章停留在 4月底，今天没有新文章 → 返回空 → 写入"暂无文章数据"

**修复（export-snapshot.sh 内 Python 逻辑）**：
```python
# 先尝试今天，无文章则扩展到 7 天，再无则取最新 30 篇（不限日期）
arts = get_recent_arts(company, days=1)
if not arts:
    arts = get_recent_arts(company, days=7)
if not arts:
    # 取该公司快照里最新的 30 篇（不限日期）
    arts = [a for a in all_articles if a['company'] == company]
    arts.sort(key=lambda x: x['date'], reverse=True)
    arts = arts[:30]
if not arts:
    summaries[company] = '暂无文章数据'
    continue
```

**效果**：修复后字节/腾讯/阿里/美团/小红书分别生成 415/411/481/490/609 字摘要

**注意**：前端 `competitor-monitor.html` 会过滤掉"暂无文章数据"，因此后端必须在有任何历史文章的情况下生成摘要

### Suggested Action
当 WeWe RSS 数据源可能有长时间停更风险时，AI 摘要脚本必须带 fallback 策略，避免空输出

### Metadata
- Source: user_feedback
- Related Files: /Users/dingding/Desktop/space/export-snapshot.sh
- Tags: ai-summary, 分公司摘要, 暂无数据, fallback, WeWe RSS, competitor-monitor, 停更
- Pattern-Key: competitor-monitor.ai-summary-fallback
- Recurrence-Count: 1
- First-Seen: 2026-05-06

---

## [LRN-20260429-001] correction

**Logged**: 2026-04-29T13:22:00+08:00
**Priority**: high
**Status**: resolved
**Area**: config

### Summary
M4 上 mlx-whisper 应固定用 `distil-whisper-large-v3-mlx`，不要用 `large-v3` 或 `medium`；language 参数绝不硬编码 'zh'

### Details
**场景**：对 B站英文解说视频（15分钟）做本地 whisper 转写

**错误做法1**：使用 `mlx-community/whisper-large-v3-mlx`
- large-v3 约 3GB，15 分钟视频在 M4 上跑超 10 分钟
- 用户明确指出："为什么不用适合 M4 的那个模型呢，你很奇怪"
- 后改用 `whisper-medium-mlx` 成功，但仍不是 M4 最优

**错误做法2**：`language='zh'` 硬编码
- 对英文视频强制指定中文，whisper 把英文"硬翻"成翻译腔中文
- 背景音乐段（7-9分钟）出现大量幻觉重复词（"尤其是"、"盡情歌的威益"等）

**正确结论**：
- M3/M4 首选：`distil-whisper-large-v3-mlx`（~1.5GB，速度是 large-v3 的 ~6x，精度接近 large-v3）
- M1/M2 或内存紧张：`whisper-medium-mlx`
- language 参数：中文平台确认中文内容才传 'zh'，否则 `language=None` 自动检测

### Suggested Action
✅ 已完成：
- video-summarizer SKILL.md 已全面更新（5处改动）
- memory `6877c94e9f9f0be4` 已更新固化正确结论

### Metadata
- Source: user_feedback
- Related Files: ~/.codeflicker/skills/video-summarizer/SKILL.md
- Tags: mlx-whisper, M4, Apple Silicon, distil-whisper, language参数, video-summarizer
- Pattern-Key: mlx-whisper.model-selection
- Recurrence-Count: 1
- First-Seen: 2026-04-29

---
