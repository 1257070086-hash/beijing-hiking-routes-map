#!/usr/bin/env python3
"""
生成小红书CUT内容包 - 整合文案、封面、剪辑脚本
"""
import json
import argparse
from pathlib import Path
import sys
from datetime import datetime

def load_highlights(highlights_file):
    """加载精彩片段数据"""
    with open(highlights_file, 'r', encoding='utf-8') as f:
        data = json.load(f)
    return data['highlights'], data['golden_sentences']

def generate_xhs_caption(highlight, template_type='dry_content'):
    """
    生成小红书文案
    
    Args:
        highlight: 精彩片段数据
        template_type: 模板类型（dry_content/pain_point/data_compare等）
    """
    title = highlight['title']
    keywords = highlight['keywords']
    text = highlight['text']
    
    # 提取核心观点（前50字）
    core_point = text[:50].strip() + '...'
    
    # 根据模板类型生成文案
    if template_type == 'dry_content':
        # 干货型模板
        caption = f"""💡 {title}

听了直播后才发现的真相：

{core_point}

关键点：
1️⃣ {keywords[0] if len(keywords) > 0 else '核心要点1'}
2️⃣ {keywords[1] if len(keywords) > 1 else '核心要点2'}
3️⃣ {keywords[2] if len(keywords) > 2 else '核心要点3'}

💡 最打动我的一句话：
"{text[50:100].strip()}..."

🔥 你怎么看？评论区聊聊👇

#干货分享 #直播精华 #{keywords[0] if keywords else '知识笔记'}
"""
    
    elif template_type == 'pain_point':
        # 痛点揭秘型
        caption = f"""❌ 你以为的{keywords[0]}，其实是误区！

真相是：{core_point}

常见误区：
1️⃣ 误区1 → 正确做法：{keywords[1] if len(keywords) > 1 else '...'}
2️⃣ 误区2 → 正确做法：{keywords[2] if len(keywords) > 2 else '...'}

💡 记住这一点：
"{text[50:100].strip()}..."

你还踩过哪些坑？评论区聊聊👇

#避坑指南 #真相揭秘 #{keywords[0] if keywords else '干货笔记'}
"""
    
    else:
        # 默认模板
        caption = f"""📌 {title}

{core_point}

关键词：{' | '.join(keywords[:3])}

💡 精彩观点：
"{text[50:100].strip()}..."

点赞收藏慢慢看👍

#{keywords[0] if keywords else '干货笔记'} #直播精华
"""
    
    return caption

def generate_editing_script(highlight, video_path):
    """
    生成剪辑脚本
    
    Args:
        highlight: 精彩片段数据
        video_path: 原视频路径
    """
    start = highlight['start']
    end = highlight['end']
    duration = highlight['duration']
    
    # 计算intro/outro时长
    intro_duration = min(3, duration * 0.1)  # 最多3秒
    outro_duration = min(2, duration * 0.08)  # 最多2秒
    main_duration = duration - intro_duration - outro_duration
    
    script = {
        "video_source": str(video_path),
        "clip_range": {
            "start": start,
            "end": end,
            "duration": f"{duration:.0f}s"
        },
        "editing_timeline": {
            "intro": {
                "time": f"00:00-{intro_duration:.2f}",
                "action": "添加开场字幕",
                "subtitle": f"『{highlight['title']}』",
                "animation": "淡入",
                "bgm": "轻快节奏（60%音量）"
            },
            "main_content": {
                "time": f"{intro_duration:.2f}-{intro_duration + main_duration:.2f}",
                "action": "保留原声，关键词高亮字幕",
                "highlight_keywords": highlight['keywords'][:5],
                "subtitle_style": "小红书风格（白底黑字+描边）"
            },
            "outro": {
                "time": f"{intro_duration + main_duration:.2f}-{duration:.0f}",
                "action": "添加结尾引导",
                "subtitle": "关注了解更多",
                "animation": "点赞+关注按钮弹出"
            }
        },
        "video_effects": {
            "aspect_ratio": "9:16",  # 小红书竖屏
            "resolution": "1080x1920",
            "fps": 30,
            "transition": "无缝衔接"
        }
    }
    
    return script

def create_cut_package(highlight, output_dir, video_path, cut_index):
    """
    创建完整的CUT内容包
    
    Args:
        highlight: 精彩片段数据
        output_dir: 输出目录
        video_path: 视频路径
        cut_index: CUT序号
    """
    cut_id = f"cut_{cut_index:03d}"
    cut_dir = Path(output_dir) / '2_cuts' / cut_id
    cut_dir.mkdir(parents=True, exist_ok=True)
    
    print(f"\n📦 生成 {cut_id}...")
    print(f"   标题: {highlight['title']}")
    print(f"   时长: {highlight['duration']:.0f}秒")
    print(f"   推荐度: {highlight['recommendation']}")
    
    # 1. 生成文案
    caption = generate_xhs_caption(highlight, template_type='dry_content')
    caption_file = cut_dir / 'caption.txt'
    with open(caption_file, 'w', encoding='utf-8') as f:
        f.write(caption)
    print(f"   ✅ 文案: {caption_file}")
    
    # 2. 生成剪辑脚本
    editing_script = generate_editing_script(highlight, video_path)
    script_file = cut_dir / 'editing_script.json'
    with open(script_file, 'w', encoding='utf-8') as f:
        json.dump(editing_script, f, indent=2, ensure_ascii=False)
    print(f"   ✅ 剪辑脚本: {script_file}")
    
    # 3. 保存元数据
    metadata = {
        'cut_id': cut_id,
        'title': highlight['title'],
        'timestamp': {
            'start': highlight['start'],
            'end': highlight['end'],
            'duration': highlight['duration']
        },
        'keywords': highlight['keywords'],
        'scores': highlight['scores'],
        'recommendation': highlight['recommendation'],
        'files': {
            'caption': str(caption_file),
            'editing_script': str(script_file),
            'cover_screenshot': str(cut_dir / 'cover_screenshot.jpg'),
            'cover_ai': str(cut_dir / 'cover_ai.jpg')
        },
        'created_at': datetime.now().isoformat()
    }
    
    metadata_file = cut_dir / 'metadata.json'
    with open(metadata_file, 'w', encoding='utf-8') as f:
        json.dump(metadata, f, indent=2, ensure_ascii=False)
    print(f"   ✅ 元数据: {metadata_file}")
    
    # 4. 生成封面提示（稍后由用户选择生成方式）
    cover_note = cut_dir / 'COVER_README.md'
    with open(cover_note, 'w', encoding='utf-8') as f:
        f.write(f"""# 封面生成指南

## 方案A：视频截图封面

```bash
python scripts/generate_cover_screenshot.py \\
  --video {video_path} \\
  --timestamp {highlight['start']} \\
  --title "{highlight['title']}" \\
  --output {cut_dir}/cover_screenshot.jpg
```

## 方案B：AI生成封面

使用 `ks-design-image-gen` skill 生成：

**提示词**：
```
小红书封面图，主题：{highlight['title']}，
风格：扁平插画/商务简约，
配色：小红书品牌红(#FE2C55)+白色，
包含文字：{highlight['title']}，
构图：中心对称，
分辨率：1080x1350
```

**关键词**：{', '.join(highlight['keywords'][:3])}

生成后保存为：`{cut_dir}/cover_ai.jpg`
""")
    print(f"   📝 封面生成指南: {cover_note}")
    
    return cut_dir

def generate_summary_report(all_cuts, output_dir, video_info):
    """生成汇总报告"""
    report_file = Path(output_dir) / '3_summary_report.md'
    
    with open(report_file, 'w', encoding='utf-8') as f:
        f.write(f"# 小红书CUT内容汇总报告\n\n")
        f.write(f"**生成时间**: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n\n")
        f.write(f"**原视频**: {video_info.get('video_file', 'N/A')}\n")
        f.write(f"**视频时长**: {video_info.get('duration', 0) / 60:.1f} 分钟\n\n")
        f.write(f"---\n\n")
        
        f.write(f"## 📊 生成统计\n\n")
        f.write(f"- 共生成 **{len(all_cuts)}** 个CUT\n")
        total_duration = sum([c['duration'] for c in all_cuts])
        f.write(f"- 总时长：{total_duration / 60:.1f} 分钟\n")
        f.write(f"- 平均时长：{total_duration / len(all_cuts):.0f} 秒\n\n")
        
        f.write(f"---\n\n")
        f.write(f"## 📋 CUT清单\n\n")
        
        for i, cut in enumerate(all_cuts, 1):
            f.write(f"### {i}. {cut['title']}\n\n")
            f.write(f"**CUT ID**: `{cut['cut_id']}`\n\n")
            f.write(f"**时间戳**: {cut['start']} - {cut['end']} ({cut['duration']:.0f}秒)\n\n")
            f.write(f"**推荐理由**: {cut['recommendation']}\n\n")
            f.write(f"**关键词**: {', '.join(cut['keywords'])}\n\n")
            f.write(f"**综合得分**: {cut['scores']['final']}\n\n")
            f.write(f"**文件路径**: `2_cuts/{cut['cut_id']}/`\n\n")
            f.write(f"---\n\n")
        
        f.write(f"## 📅 建议发布排期\n\n")
        f.write(f"为避免刷屏，建议分开发布：\n\n")
        for i, cut in enumerate(all_cuts[:5], 1):  # 只显示前5个
            day = (i - 1) * 2 + 1
            f.write(f"- **Day {day}**: {cut['title']} (综合得分: {cut['scores']['final']})\n")
        f.write(f"\n...")
    
    print(f"\n📄 汇总报告已生成: {report_file}")
    return report_file

def main():
    parser = argparse.ArgumentParser(
        description='生成小红书CUT内容包'
    )
    parser.add_argument(
        '--highlights',
        required=True,
        help='精彩片段JSON文件路径'
    )
    parser.add_argument(
        '--video',
        required=True,
        help='原视频文件路径'
    )
    parser.add_argument(
        '--output',
        required=True,
        help='输出目录'
    )
    parser.add_argument(
        '--top-n',
        type=int,
        default=5,
        help='生成前N个高分CUT（默认：5）'
    )
    
    args = parser.parse_args()
    
    # 检查文件
    if not Path(args.highlights).exists():
        print(f"❌ 错误：精彩片段文件不存在 - {args.highlights}")
        sys.exit(1)
    
    if not Path(args.video).exists():
        print(f"❌ 错误：视频文件不存在 - {args.video}")
        sys.exit(1)
    
    # 加载数据
    print(f"📖 加载精彩片段数据...")
    highlights, golden_sentences = load_highlights(args.highlights)
    
    # 选择TOP N
    top_highlights = sorted(highlights, key=lambda x: x['scores']['final'], reverse=True)[:args.top_n]
    
    print(f"\n🎯 将生成 {len(top_highlights)} 个CUT内容包")
    
    # 创建输出目录结构
    output_dir = Path(args.output)
    (output_dir / '0_raw_materials').mkdir(parents=True, exist_ok=True)
    (output_dir / '1_highlights').mkdir(parents=True, exist_ok=True)
    (output_dir / '2_cuts').mkdir(parents=True, exist_ok=True)
    
    # 生成每个CUT
    all_cuts = []
    for i, highlight in enumerate(top_highlights, 1):
        cut_dir = create_cut_package(
            highlight,
            output_dir,
            args.video,
            i
        )
        all_cuts.append({
            'cut_id': f"cut_{i:03d}",
            'title': highlight['title'],
            'start': highlight['start'],
            'end': highlight['end'],
            'duration': highlight['duration'],
            'keywords': highlight['keywords'],
            'scores': highlight['scores'],
            'recommendation': highlight['recommendation'],
            'cut_dir': str(cut_dir)
        })
    
    # 生成汇总报告
    video_info = {
        'video_file': args.video,
        'duration': sum([c['duration'] for c in all_cuts]) * 2  # 估算
    }
    report_file = generate_summary_report(all_cuts, output_dir, video_info)
    
    # 完成提示
    print(f"\n🎉 所有CUT内容包已生成！")
    print(f"\n📂 输出目录结构：")
    print(f"   {output_dir}/")
    print(f"   ├── 0_raw_materials/    # 原始素材")
    print(f"   ├── 1_highlights/        # 精彩片段分析")
    print(f"   ├── 2_cuts/              # 各个CUT内容")
    print(f"   │   ├── cut_001/")
    print(f"   │   │   ├── caption.txt")
    print(f"   │   │   ├── editing_script.json")
    print(f"   │   │   ├── metadata.json")
    print(f"   │   │   └── COVER_README.md")
    print(f"   │   ├── cut_002/")
    print(f"   │   └── ...")
    print(f"   └── 3_summary_report.md  # 汇总报告")
    print(f"\n📝 下一步：")
    print(f"   1. 查看汇总报告: {report_file}")
    print(f"   2. 根据 COVER_README.md 生成封面图")
    print(f"   3. 按排期发布到小红书")

if __name__ == '__main__':
    main()
