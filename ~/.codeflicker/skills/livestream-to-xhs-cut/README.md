# 使用指南

欢迎使用 **livestream-to-xhs-cut** 技能！本指南将带你完成从直播视频到小红书CUT的完整流程。

---

## 🚀 快速开始

### 1. 前置准备

#### 安装依赖

```bash
# macOS
brew install ffmpeg

# Ubuntu/Debian
sudo apt install ffmpeg

# Python依赖
pip install openai-whisper pillow opencv-python
```

#### 检查安装

```bash
ffmpeg -version
whisper --help
python -c "from PIL import Image; print('PIL OK')"
```

### 2. 完整流程演示

假设你有一个直播录屏文件 `livestream_2024.mp4`，想生成5个小红书CUT。

#### Step 1: 提取音频

```bash
python scripts/extract_audio.py \
  --input ~/Downloads/livestream_2024.mp4 \
  --output ./output
```

**输出**：
- `output/audio.wav`：16kHz单声道音频
- `output/metadata.json`：视频元信息

**耗时**：约1-2分钟（取决于视频时长）

---

#### Step 2: 生成逐字稿

```bash
python scripts/transcribe.py \
  --audio ./output/audio.wav \
  --output ./output \
  --model medium
```

**输出**：
- `output/transcript.json`：完整逐字稿（带时间戳）
- `output/segments.json`：分段数据
- `output/audio.txt`：纯文本版本

**耗时**：约10-20分钟（83分钟直播需要约15分钟）

**提示**：首次运行会自动下载Whisper模型（~1.5GB），请耐心等待

---

#### Step 3: 分析精彩片段

```bash
python scripts/analyze_highlights.py \
  --transcript ./output/transcript.json \
  --output ./output
```

**输出**：
- `output/highlights.json`：精彩片段列表（JSON格式）
- `output/highlights_summary.md`：分析报告（Markdown）

**耗时**：约1-2分钟

**示例输出**：
```
🔍 分析维度:
   信息密度: 30%
   情绪高点: 20%
   金句识别: 25%
   话题完整性: 15%
   传播潜力: 10%

📊 分析话题完整性...
   找到 23 个候选片段

💎 识别金句...
   找到 8 个金句

📊 分析完成！
   精彩片段: 23 个
   金句: 8 个
   平均时长: 95.3 秒
```

---

#### Step 4: 生成小红书CUT内容包

```bash
python scripts/generate_xhs_package.py \
  --highlights ./output/highlights.json \
  --video ~/Downloads/livestream_2024.mp4 \
  --output ./output \
  --top-n 5
```

**输出目录结构**：
```
output/
├── 0_raw_materials/          # 原始素材
│   ├── audio.wav
│   ├── transcript.json
│   └── metadata.json
├── 1_highlights/             # 精彩片段分析
│   ├── highlights.json
│   └── highlights_summary.md
├── 2_cuts/                   # 各个CUT内容
│   ├── cut_001/
│   │   ├── caption.txt              # 小红书文案
│   │   ├── editing_script.json      # 剪辑脚本
│   │   ├── metadata.json            # 元数据
│   │   └── COVER_README.md          # 封面生成指南
│   ├── cut_002/
│   ├── cut_003/
│   ├── cut_004/
│   └── cut_005/
└── 3_summary_report.md       # 汇总报告
```

**耗时**：约10秒

---

#### Step 5: 生成封面图

每个CUT有两种封面方案可选：

**方案A：视频截图封面**

```bash
python scripts/generate_cover_screenshot.py \
  --video ~/Downloads/livestream_2024.mp4 \
  --timestamp "00:12:34" \
  --title "种地社文化的真实含义" \
  --output ./output/2_cuts/cut_001/cover_screenshot.jpg
```

**方案B：AI生成封面**

```bash
# 1. 生成提示词
python scripts/generate_ai_cover_prompt.py \
  --highlight ./output/2_cuts/cut_001/metadata.json \
  --style flat_illustration \
  --output ./output/2_cuts/cut_001/ai_prompt

# 2. 在对话中使用生成的提示词
# 触发 ks-design-image-gen 技能生成封面
```

**耗时**：截图封面约10秒，AI封面约30秒

---

### 3. 一键执行（推荐）

我们还提供了批量处理脚本，一条命令完成所有步骤：

```bash
python scripts/batch_process.py \
  --input ~/Downloads/livestream_2024.mp4 \
  --output ./output \
  --top-n 5 \
  --mode auto
```

**mode参数说明**：
- `auto`：自动识别精彩片段（默认）
- `manual`：手动指定时间段
- `hybrid`：AI推荐 + 用户确认

---

## 🎯 高级用法

### 自定义权重配置

创建 `custom_weights.json`：

```json
{
  "weights": {
    "information_density": 0.40,
    "emotion_peak": 0.15,
    "golden_sentence": 0.25,
    "topic_completeness": 0.15,
    "viral_potential": 0.05
  }
}
```

使用自定义权重：

```bash
python scripts/analyze_highlights.py \
  --transcript ./output/transcript.json \
  --output ./output \
  --weights custom_weights.json
```

### 手动模式：指定时间段

创建 `manual_cuts.json`：

```json
{
  "cuts": [
    {
      "title": "种地社文化解读",
      "start": "00:12:30",
      "end": "00:14:45",
      "keywords": ["种地社", "文化", "价值观"]
    },
    {
      "title": "AI原生公司判断标准",
      "start": "00:28:10",
      "end": "00:30:20",
      "keywords": ["AI", "原生", "技术"]
    }
  ]
}
```

跳过分析，直接生成：

```bash
python scripts/generate_xhs_package.py \
  --manual-cuts manual_cuts.json \
  --video ~/Downloads/livestream_2024.mp4 \
  --output ./output
```

### 批量处理多个视频

```bash
python scripts/batch_process.py \
  --input-dir ~/Downloads/livestreams/ \
  --output-dir ./batch_output \
  --mode auto
```

---

## 📝 输出文件说明

### caption.txt - 小红书文案

直接可用的文案，已优化格式和话题标签。

**示例**：
```
💡 种地社文化的真实含义

听了直播后才发现的真相：

种地社不是加班文化，而是用技术让普通人被看见...

关键点：
1️⃣ 春节红包
2️⃣ 实时推荐
3️⃣ 普惠价值观

💡 最打动我的一句话：
"技术不是让5%的人锦上添花，而是让95%的人雪中送炭"

🔥 你怎么看？评论区聊聊👇

#干货分享 #直播精华 #种地社
```

### editing_script.json - 剪辑脚本

包含时间戳、字幕、音效、转场的完整剪辑指令。

**关键字段**：
- `clip_range`：视频片段范围
- `editing_timeline`：分段编辑指令（intro/main/outro）
- `video_effects`：视频参数（分辨率、帧率）

可导入到剪映、PR等剪辑软件。

### metadata.json - 元数据

CUT的完整元信息，便于管理和追踪。

---

## 🛠️ 故障排查

### 问题1：Whisper识别失败

**错误信息**：`RuntimeError: No audio backend is available`

**解决方案**：
```bash
# 方案1：重新安装ffmpeg
brew reinstall ffmpeg

# 方案2：检查音频格式
ffprobe output/audio.wav

# 方案3：使用更小的模型
python scripts/transcribe.py --model small
```

### 问题2：封面生成失败

**错误信息**：`OSError: cannot open resource`

**原因**：缺少中文字体

**解决方案**：
```bash
# macOS
# 检查系统字体
fc-list :lang=zh

# 如果没有，下载并安装思源黑体
# https://github.com/adobe-fonts/source-han-sans/releases

# Linux
sudo apt install fonts-wqy-zenhei
```

### 问题3：内存不足

**症状**：Whisper运行时系统卡死

**解决方案**：
```bash
# 使用更小的模型
python scripts/transcribe.py --model small

# 或者分段处理
ffmpeg -i video.mp4 -t 600 -c copy part1.mp4  # 前10分钟
ffmpeg -i video.mp4 -ss 600 -c copy part2.mp4 # 后续部分
```

---

## 💡 最佳实践

### 1. 直播前准备

- 明确直播主题，便于后期识别片段
- 准备大纲，分段讲解不同话题
- 控制语速，提高Whisper识别准确率

### 2. CUT时长控制

- **推荐时长**：60-120秒（小红书最佳传播时长）
- **最短**：30秒（否则信息不完整）
- **最长**：180秒（否则完播率低）

### 3. 发布策略

**避免刷屏**：同一直播的多个CUT分开发布

**推荐节奏**：
- Day 1：最高分CUT（引流）
- Day 3：知识科普型（涨粉）
- Day 5：干货价值型（转化）
- Day 7：对比测评型（互动）

**发布时间**：
- 工作日：12:00-13:00、19:00-21:00
- 周末：10:00-12:00、15:00-17:00、20:00-22:00

### 4. A/B测试

同时生成AI封面和截图封面，测试哪个CTR更高：

```bash
# 生成两种封面
python scripts/generate_cover_screenshot.py ...
# 同时触发 ks-design-image-gen

# 发布后追踪数据
# 记录播放量、点赞数、收藏数
# 下次优化策略
```

---

## 🤝 与其他技能配合

### 配合 xiaohongshu 技能直接发布

```
用户：「把这些CUT发布到小红书」

Agent：
1. 读取 caption.txt
2. 准备封面图
3. 调用 xiaohongshu 技能发布
```

### 配合 ks-design-ppt 生成内容矩阵PPT

```
用户：「把这5个CUT做成内容矩阵PPT」

Agent：
1. 读取 summary_report.md
2. 提取标题、时长、推荐理由
3. 调用 ks-design-ppt 生成汇报PPT
```

---

## 📚 参考资料

- [小红书干货文案模板库](./references/xhs-dry-content-templates.md)
- [精彩片段识别策略](./references/highlight-strategies.md)
- [Whisper官方文档](https://github.com/openai/whisper)
- [FFmpeg官方文档](https://ffmpeg.org/documentation.html)

---

## 🔄 更新日志

- **v1.0.0** (2026-04-03)：初始版本
  - 支持自动/手动/混合三种模式
  - 5维度精彩片段识别
  - 小红书干货型文案模板
  - 双封面方案（截图+AI生图）
  - 完整剪辑脚本生成

---

有问题？欢迎在对话中提问！🎉
