#!/usr/bin/env python3
"""
封面生成脚本（视频截图版）- 从视频提取关键帧并添加标题文字
"""
import subprocess
import argparse
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import sys
import json

def extract_frame(video_path, timestamp, output_path):
    """
    使用ffmpeg提取指定时间戳的视频帧
    
    Args:
        video_path: 视频文件路径
        timestamp: 时间戳（格式：HH:MM:SS）
        output_path: 输出图片路径
    """
    cmd = [
        'ffmpeg',
        '-ss', timestamp,        # 跳转到指定时间
        '-i', str(video_path),
        '-vframes', '1',         # 只提取1帧
        '-q:v', '2',             # 高质量
        '-y',                    # 覆盖已存在文件
        str(output_path)
    ]
    
    try:
        subprocess.run(cmd, capture_output=True, check=True)
        return True
    except subprocess.CalledProcessError as e:
        print(f"❌ 提取视频帧失败: {e.stderr.decode()}")
        return False

def add_text_overlay(image_path, title, subtitle=None, output_path=None):
    """
    在图片上添加标题文字遮罩
    
    Args:
        image_path: 原始图片路径
        title: 标题文字
        subtitle: 副标题（可选）
        output_path: 输出路径（默认覆盖原图）
    """
    if output_path is None:
        output_path = image_path
    
    # 打开图片
    img = Image.open(image_path)
    width, height = img.size
    
    # 小红书推荐尺寸：3:4 (1080x1440) 或 1:1 (1080x1080)
    # 裁剪为3:4比例
    target_ratio = 3 / 4
    current_ratio = width / height
    
    if current_ratio > target_ratio:
        # 宽度过大，裁剪左右
        new_width = int(height * target_ratio)
        left = (width - new_width) // 2
        img = img.crop((left, 0, left + new_width, height))
    elif current_ratio < target_ratio:
        # 高度过大，裁剪上下
        new_height = int(width / target_ratio)
        top = (height - new_height) // 2
        img = img.crop((0, top, width, top + new_height))
    
    width, height = img.size
    
    # 创建绘图对象
    draw = ImageDraw.Draw(img)
    
    # 加载字体（使用系统字体）
    try:
        # macOS系统字体
        title_font = ImageFont.truetype('/System/Library/Fonts/PingFang.ttc', 80)
        subtitle_font = ImageFont.truetype('/System/Library/Fonts/PingFang.ttc', 50)
    except:
        try:
            # Linux系统字体
            title_font = ImageFont.truetype('/usr/share/fonts/truetype/wqy/wqy-zenhei.ttc', 80)
            subtitle_font = ImageFont.truetype('/usr/share/fonts/truetype/wqy/wqy-zenhei.ttc', 50)
        except:
            # 回退到默认字体
            print("⚠️  警告：未找到中文字体，使用默认字体")
            title_font = ImageFont.load_default()
            subtitle_font = ImageFont.load_default()
    
    # 添加半透明黑色遮罩（底部）
    overlay = Image.new('RGBA', img.size, (0, 0, 0, 0))
    overlay_draw = ImageDraw.Draw(overlay)
    
    # 渐变遮罩（从透明到半透明黑色）
    mask_height = height // 2
    for y in range(mask_height):
        alpha = int((y / mask_height) * 180)  # 0-180透明度
        overlay_draw.rectangle(
            [(0, height - mask_height + y), (width, height - mask_height + y + 1)],
            fill=(0, 0, 0, alpha)
        )
    
    # 合并遮罩
    img = Image.alpha_composite(img.convert('RGBA'), overlay)
    
    # 绘制标题文字
    # 自动换行
    title_lines = wrap_text(title, title_font, width - 100, draw)
    
    # 计算文字总高度
    line_height = 90
    total_text_height = len(title_lines) * line_height
    if subtitle:
        total_text_height += 60
    
    # 文字起始Y坐标（底部对齐）
    start_y = height - total_text_height - 80
    
    # 绘制标题（带描边效果）
    current_y = start_y
    for line in title_lines:
        # 获取文字边界框
        bbox = draw.textbbox((0, 0), line, font=title_font)
        text_width = bbox[2] - bbox[0]
        x = (width - text_width) // 2
        
        # 描边（黑色）
        for offset_x in [-3, 0, 3]:
            for offset_y in [-3, 0, 3]:
                draw.text((x + offset_x, current_y + offset_y), line, 
                         font=title_font, fill=(0, 0, 0, 255))
        
        # 主文字（白色）
        draw.text((x, current_y), line, font=title_font, fill=(255, 255, 255, 255))
        current_y += line_height
    
    # 绘制副标题
    if subtitle:
        bbox = draw.textbbox((0, 0), subtitle, font=subtitle_font)
        text_width = bbox[2] - bbox[0]
        x = (width - text_width) // 2
        
        # 描边
        for offset_x in [-2, 0, 2]:
            for offset_y in [-2, 0, 2]:
                draw.text((x + offset_x, current_y + offset_y), subtitle,
                         font=subtitle_font, fill=(0, 0, 0, 255))
        
        # 主文字（浅灰色）
        draw.text((x, current_y), subtitle, font=subtitle_font, 
                 fill=(220, 220, 220, 255))
    
    # 添加小红书品牌色装饰（左上角小标签）
    tag_width = 200
    tag_height = 60
    draw.rectangle([(20, 20), (20 + tag_width, 20 + tag_height)], 
                  fill=(254, 44, 85, 230))  # 小红书品牌红
    
    # 标签文字
    try:
        tag_font = ImageFont.truetype('/System/Library/Fonts/PingFang.ttc', 35)
    except:
        tag_font = title_font
    
    tag_text = "💡 干货分享"
    draw.text((35, 30), tag_text, font=tag_font, fill=(255, 255, 255, 255))
    
    # 保存图片
    img = img.convert('RGB')
    img.save(output_path, quality=95)
    print(f"✅ 封面已生成: {output_path}")

def wrap_text(text, font, max_width, draw):
    """
    文字自动换行
    """
    lines = []
    words = list(text)  # 中文按字符分割
    current_line = ""
    
    for char in words:
        test_line = current_line + char
        bbox = draw.textbbox((0, 0), test_line, font=font)
        width = bbox[2] - bbox[0]
        
        if width <= max_width:
            current_line = test_line
        else:
            if current_line:
                lines.append(current_line)
            current_line = char
    
    if current_line:
        lines.append(current_line)
    
    return lines

def main():
    parser = argparse.ArgumentParser(
        description='从视频生成小红书封面（截图+文字）'
    )
    parser.add_argument(
        '--video', '-v',
        required=True,
        help='视频文件路径'
    )
    parser.add_argument(
        '--timestamp', '-t',
        required=True,
        help='时间戳（格式：HH:MM:SS）'
    )
    parser.add_argument(
        '--title',
        required=True,
        help='封面标题'
    )
    parser.add_argument(
        '--subtitle',
        help='副标题（可选）'
    )
    parser.add_argument(
        '--output', '-o',
        required=True,
        help='输出图片路径'
    )
    
    args = parser.parse_args()
    
    # 检查视频文件
    video_path = Path(args.video)
    if not video_path.exists():
        print(f"❌ 错误：视频文件不存在 - {video_path}")
        sys.exit(1)
    
    # 输出路径
    output_path = Path(args.output)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    
    # 临时帧文件
    temp_frame = output_path.parent / 'temp_frame.jpg'
    
    print(f"📹 提取视频帧...")
    print(f"   视频: {video_path.name}")
    print(f"   时间: {args.timestamp}")
    
    # 1. 提取视频帧
    if not extract_frame(str(video_path), args.timestamp, temp_frame):
        sys.exit(1)
    
    # 2. 添加文字遮罩
    print(f"\n✏️  添加文字遮罩...")
    print(f"   标题: {args.title}")
    if args.subtitle:
        print(f"   副标题: {args.subtitle}")
    
    add_text_overlay(
        temp_frame,
        args.title,
        args.subtitle,
        output_path
    )
    
    # 3. 删除临时文件
    if temp_frame.exists():
        temp_frame.unlink()
    
    print(f"\n🎉 完成！封面已保存到: {output_path}")

if __name__ == '__main__':
    main()
