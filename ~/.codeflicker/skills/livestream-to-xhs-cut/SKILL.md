---
name: livestream-to-xhs-cut
version: 1.0.0
description: "直播视频转小红书CUT技能。当用户说「直播转小红书」「生成直播CUT」「小红书直播切片」「分析这个直播视频」「直播剪辑方案」「直播精彩片段」「视频切片」「livestream to XHS」「video cuts」或提供直播视频文件需要生成小红书内容时使用。自动提取音频→生成逐字稿→识别精彩片段→生成小红书干货型文案+封面（AI生图/视频截图双方案）+剪辑脚本。"
compatibility:
  required_tools:
    - ffmpeg (音频/视频处理)
    - whisper (语音识别，本地免费方案)
    - python3 (PIL/Pillow 图像处理)
  optional_skills:
    - ks-design-image-gen (AI封面图生成)
    - xiaohongshu (小红书发布，可选)
---

# Livestream to XHS Cut

将直播视频智能转换为小红书CUT内容的完整工作流技能。

## 核心能力

1. **音频提取**：从视频中提取高质量音频（16kHz单声道）
2. **逐字稿生成**：使用Whisper本地识别（免费方案），生成带时间戳的完整逐字稿
3. **精彩片段识别**：AI分析内容，自动识别高价值片段
4. **内容生成**：
   - 小红书干货型文案（开头直击痛点、结构化内容、金句提炼）
   - 封面图双方案（视频截图+AI生图）
   - 视频剪辑脚本（带精确时间戳）

## 使用流程

### Step 1: 接收视频文件

询问用户提供：
- 视频文件路径（支持 mp4/mov/flv/avi 等常见格式）
- CUT生成模式：
  - **自动模式**：AI自动识别精彩片段（默认）
  - **手动模式**：用户指定主题/时间段
  - **混合模式**：AI推荐 + 用户确认

### Step 2: 音频提取

使用 `scripts/extract_audio.py` 提取音频：

```bash
python scripts/extract_audio.py --input <视频路径> --output <输出目录>
```

**输出**：
- `audio.wav`：16kHz单声道WAV文件（Whisper优化格式）
- `metadata.json`：视频元信息（时长、分辨率等）

### Step 3: 生成逐字稿

使用 `scripts/transcribe.py` 调用Whisper：

```bash
python scripts/transcribe.py --audio <audio.wav> --output <输出目录>
```

**输出**：
- `transcript.json`：完整逐字稿（带时间戳、置信度）
- `transcript.txt`：纯文本版本（便于阅读）
- `segments.json`：按句子分段的结构化数据

**Whisper配置**：
- 模型：`medium`（中文识别最佳平衡点）
- 语言：`zh`（中文）
- 输出格式：JSON + TXT

### Step 4: 识别精彩片段

使用 `scripts/analyze_highlights.py` 分析内容：

```bash
python scripts/analyze_highlights.py --transcript <transcript.json> --output <输出目录>
```

**分析维度**（参考 `references/highlight-strategies.md`）：
1. **信息密度**：干货内容、数据引用、案例故事
2. **情绪高点**：笑声、掌声、语气变化
3. **金句识别**：可提炼的短句、名言
4. **话题完整性**：单个主题的完整阐述
5. **传播价值**：争议性、共鸣性、实用性

**输出**：
- `highlights.json`：精彩片段列表（每个片段包含：时间戳、主题、关键词、推荐理由）
- `highlights_summary.md`：人类可读的摘要报告

### Step 5: 生成小红书内容

对每个精彩片段，生成完整的小红书CUT包：

#### 5.1 生成文案

根据 `references/xhs-dry-content-templates.md` 中的干货型模板：

**文案结构**：
```
【开头】直击痛点/核心价值（1-2句话）
  ↓
【正文】结构化内容（1234分点 or 场景化描述）
  ↓
【金句】可提炼的短句（emoji强调）
  ↓
【结尾】行动号召（关注/收藏/评论区互动）
```

**示例**（直播招聘主题）：
```
💼 应届生vs社招，差距到底在哪？

听了83分钟的快手校招直播，发现了3个被忽视的真相：

1️⃣ 种地社文化不是加班文化
真实含义：用技术让普通人被看见（春节红包、实时推荐）

2️⃣ 0-3年工作经验=黄金窗口期
快手专门开通通道，看中的是「未被固化的潜力」

3️⃣ AI原生公司≠AI工具公司
核心区别：业务是否用AI重构（不是简单接入ChatGPT）

💡 最打动我的一句话：
"我们要的不是会写代码的人，而是能用技术改变生活的人"

🔥 你在选公司时最看重什么？评论区聊聊👇

#快手校招 #互联网求职 #职场干货
```

#### 5.2 生成封面图

**方案A：视频截图封面**

使用 `scripts/generate_cover_screenshot.py`：

```bash
python scripts/generate_cover_screenshot.py \
  --video <视频路径> \
  --timestamp <精彩片段开始时间> \
  --title <CUT标题> \
  --output <输出路径>
```

**处理步骤**：
1. ffmpeg提取指定时间戳的关键帧
2. PIL添加半透明遮罩
3. 添加标题文字（中文字体：思源黑体/阿里巴巴普惠体）
4. 添加小红书风格装饰元素（贴纸、边框）

**方案B：AI生成封面**

调用 `ks-design-image-gen` skill：

```
触发词：「用AI生成这个CUT的封面图」

提示词模板：
"小红书封面图，主题：{CUT主题}，风格：扁平插画/商务简约/手绘风，
配色：小红书品牌红+白色，包含文字：{标题文字}，
构图：中心对称/左文右图，分辨率：1080x1350"
```

#### 5.3 生成剪辑脚本

输出带时间戳的剪辑指令：

```json
{
  "cut_id": "cut_001",
  "title": "种地社文化的真实含义",
  "video_clip": {
    "start": "00:12:34",
    "end": "00:14:56",
    "duration": "02:22"
  },
  "editing_script": {
    "intro": {
      "time": "00:00-00:03",
      "action": "添加开场字幕：『种地社≠加班文化？』",
      "bgm": "轻快节奏（60%音量）"
    },
    "main_content": {
      "time": "00:03-02:15",
      "action": "保留原声，关键词高亮字幕",
      "highlight_keywords": ["春节红包", "实时推荐", "普通人"]
    },
    "outro": {
      "time": "02:15-02:22",
      "action": "添加结尾引导：『关注了解更多』+ 点赞动画"
    }
  },
  "caption": "<小红书文案内容>",
  "cover": {
    "screenshot_path": "covers/cut_001_screenshot.jpg",
    "ai_generated_path": "covers/cut_001_ai.jpg"
  }
}
```

### Step 6: 输出交付物

最终输出目录结构：

```
<项目名>_xhs_cuts/
├── 0_raw_materials/          # 原始素材
│   ├── video_original.mp4
│   ├── audio.wav
│   └── transcript.json
├── 1_highlights/             # 精彩片段分析
│   ├── highlights.json
│   └── highlights_summary.md
├── 2_cuts/                   # 各个CUT内容
│   ├── cut_001/
│   │   ├── caption.txt       # 小红书文案
│   │   ├── cover_screenshot.jpg
│   │   ├── cover_ai.jpg
│   │   ├── editing_script.json
│   │   └── metadata.json
│   ├── cut_002/
│   │   └── ...
│   └── ...
└── 3_summary_report.md       # 汇总报告
```

**汇总报告内容**：
- 视频基本信息（时长、主题）
- 共生成X个CUT
- 每个CUT的标题、时间戳、推荐理由
- 建议发布排期（避免刷屏）

## 高级用法

### 自定义精彩片段策略

编辑 `references/highlight-strategies.md`，调整识别权重：

```yaml
weights:
  information_density: 0.3    # 信息密度
  emotion_peak: 0.2           # 情绪高点
  golden_sentence: 0.25       # 金句识别
  topic_completeness: 0.15    # 话题完整性
  viral_potential: 0.1        # 传播潜力
```

### 批量处理

处理多个视频：

```bash
python scripts/batch_process.py \
  --input-dir <视频目录> \
  --output-dir <输出目录> \
  --mode auto
```

### 与小红书平台对接

如果用户已安装 `xiaohongshu` skill，可以直接发布：

```
触发词：「把这些CUT发布到小红书」
```

## 依赖检查

首次使用时，自动检查并提示安装：

```bash
# FFmpeg
brew install ffmpeg  # macOS
apt install ffmpeg   # Linux

# Whisper
pip install openai-whisper

# Python依赖
pip install pillow opencv-python
```

## 故障排查

### Whisper识别失败
- 检查音频格式：必须是16kHz单声道WAV
- 尝试降低模型：`--model small`
- 检查磁盘空间：模型文件较大（~1.5GB）

### 封面图生成失败
- 检查中文字体是否安装
- 截图时间戳是否超出视频时长
- 图像分辨率是否过大（建议≤1920x1080）

### 精彩片段识别不准确
- 调整 `highlight-strategies.md` 中的权重
- 增加手动模式，人工辅助筛选
- 提供更多上下文（直播主题、目标受众）

## 最佳实践

1. **前期准备**：直播前明确主题，便于后期识别精彩片段
2. **时长控制**：每个CUT建议1-3分钟，小红书最佳传播时长
3. **发布节奏**：同一直播的多个CUT分开发布（间隔1-2天）
4. **A/B测试**：同时生成AI封面和截图封面，测试哪个CTR更高
5. **数据追踪**：记录每个CUT的播放量/点赞数，优化后续策略

## 参考文档

- `references/xhs-dry-content-templates.md`：小红书干货型文案模板库（20+模板）
- `references/highlight-strategies.md`：精彩片段识别策略详解
- `references/video-editing-best-practices.md`：视频剪辑脚本最佳实践

## 版本历史

- v1.0.0 (2026-04-03)：初始版本，支持自动/手动/混合三种模式
