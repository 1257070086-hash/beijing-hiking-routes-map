#!/usr/bin/env python3
"""
逐字稿生成脚本 - 使用Whisper进行语音识别
"""
import subprocess
import json
import argparse
from pathlib import Path
import sys
import time

def check_whisper():
    """检查whisper是否已安装"""
    try:
        subprocess.run(['whisper', '--help'], 
                      capture_output=True, 
                      check=True)
        return True
    except (subprocess.CalledProcessError, FileNotFoundError):
        return False

def transcribe_audio(audio_path, output_dir, model='medium', language='zh'):
    """
    使用Whisper生成逐字稿
    
    Args:
        audio_path: 音频文件路径
        output_dir: 输出目录
        model: Whisper模型 (tiny/base/small/medium/large)
        language: 语言代码 (zh/en)
    """
    audio_path = Path(audio_path)
    output_dir = Path(output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)
    
    print(f"🎙️  正在识别语音...")
    print(f"   模型: {model}")
    print(f"   语言: {language}")
    print(f"   输入: {audio_path.name}")
    print()
    
    # Whisper命令
    cmd = [
        'whisper',
        str(audio_path),
        '--model', model,
        '--language', language,
        '--output_dir', str(output_dir),
        '--output_format', 'all',  # 生成所有格式
        '--verbose', 'True',
        '--task', 'transcribe'
    ]
    
    start_time = time.time()
    
    try:
        result = subprocess.run(
            cmd,
            capture_output=True,
            text=True,
            check=True
        )
        
        elapsed = time.time() - start_time
        print(f"✅ 语音识别完成！耗时: {elapsed:.1f} 秒")
        
    except subprocess.CalledProcessError as e:
        print(f"❌ 语音识别失败：")
        print(f"   错误信息: {e.stderr}")
        sys.exit(1)
    
    # Whisper会自动生成多个文件
    base_name = audio_path.stem
    json_file = output_dir / f"{base_name}.json"
    txt_file = output_dir / f"{base_name}.txt"
    srt_file = output_dir / f"{base_name}.srt"
    vtt_file = output_dir / f"{base_name}.vtt"
    
    return {
        'json': json_file,
        'txt': txt_file,
        'srt': srt_file,
        'vtt': vtt_file
    }

def process_transcript(json_file, output_dir):
    """
    处理Whisper输出的JSON，生成结构化数据
    
    生成两个文件：
    1. transcript.json - 完整逐字稿（带时间戳、置信度）
    2. segments.json - 按句子分段的结构化数据
    """
    with open(json_file, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    # 提取基本信息
    transcript_data = {
        'text': data.get('text', ''),
        'language': data.get('language', 'zh'),
        'duration': data.get('duration', 0),
        'segments': []
    }
    
    # 处理分段
    segments = []
    for seg in data.get('segments', []):
        segment = {
            'id': seg.get('id'),
            'start': seg.get('start'),
            'end': seg.get('end'),
            'text': seg.get('text', '').strip(),
            'avg_logprob': seg.get('avg_logprob'),  # 置信度
            'no_speech_prob': seg.get('no_speech_prob')
        }
        transcript_data['segments'].append(segment)
        
        # 简化版本（用于快速分析）
        segments.append({
            'start': format_timestamp(seg.get('start', 0)),
            'end': format_timestamp(seg.get('end', 0)),
            'text': seg.get('text', '').strip()
        })
    
    # 保存完整逐字稿
    output_dir = Path(output_dir)
    transcript_file = output_dir / 'transcript.json'
    with open(transcript_file, 'w', encoding='utf-8') as f:
        json.dump(transcript_data, f, indent=2, ensure_ascii=False)
    
    # 保存简化版分段
    segments_file = output_dir / 'segments.json'
    with open(segments_file, 'w', encoding='utf-8') as f:
        json.dump(segments, f, indent=2, ensure_ascii=False)
    
    print(f"📄 逐字稿已保存:")
    print(f"   完整版: {transcript_file}")
    print(f"   分段版: {segments_file}")
    
    # 统计信息
    total_words = len(transcript_data['text'])
    total_segments = len(segments)
    duration_min = transcript_data['duration'] / 60
    
    print(f"\n📊 统计信息:")
    print(f"   总字数: {total_words}")
    print(f"   分段数: {total_segments}")
    print(f"   时长: {duration_min:.1f} 分钟")
    print(f"   平均语速: {total_words / duration_min:.1f} 字/分钟")
    
    return transcript_file, segments_file

def format_timestamp(seconds):
    """将秒数转换为 HH:MM:SS 格式"""
    hours = int(seconds // 3600)
    minutes = int((seconds % 3600) // 60)
    secs = int(seconds % 60)
    return f"{hours:02d}:{minutes:02d}:{secs:02d}"

def main():
    parser = argparse.ArgumentParser(
        description='使用Whisper生成逐字稿'
    )
    parser.add_argument(
        '--audio', '-a',
        required=True,
        help='输入音频文件路径'
    )
    parser.add_argument(
        '--output', '-o',
        required=True,
        help='输出目录'
    )
    parser.add_argument(
        '--model', '-m',
        default='medium',
        choices=['tiny', 'base', 'small', 'medium', 'large'],
        help='Whisper模型 (默认: medium，推荐中文识别)'
    )
    parser.add_argument(
        '--language', '-l',
        default='zh',
        help='语言代码 (默认: zh)'
    )
    
    args = parser.parse_args()
    
    # 检查whisper
    if not check_whisper():
        print("❌ 错误：未找到whisper")
        print("   请先安装whisper:")
        print("   pip install openai-whisper")
        print("\n   如果遇到依赖问题，可以使用:")
        print("   pip install git+https://github.com/openai/whisper.git")
        sys.exit(1)
    
    # 检查音频文件
    audio_path = Path(args.audio)
    if not audio_path.exists():
        print(f"❌ 错误：音频文件不存在 - {audio_path}")
        sys.exit(1)
    
    # 显示模型说明
    model_info = {
        'tiny': '最快，准确率较低（不推荐中文）',
        'base': '快速，准确率一般',
        'small': '平衡，适合快速测试',
        'medium': '推荐，中文识别最佳平衡点',
        'large': '最准确，但速度慢且占用资源多'
    }
    print(f"ℹ️  模型说明: {model_info.get(args.model, '')}")
    print()
    
    # 执行识别
    output_files = transcribe_audio(
        str(audio_path),
        args.output,
        args.model,
        args.language
    )
    
    # 处理输出
    if output_files['json'].exists():
        transcript_file, segments_file = process_transcript(
            output_files['json'],
            args.output
        )
        
        print(f"\n🎉 完成！可以使用以下命令分析精彩片段：")
        print(f"   python scripts/analyze_highlights.py \\")
        print(f"     --transcript {transcript_file} \\")
        print(f"     --output {args.output}")
    else:
        print(f"⚠️  警告：未找到JSON输出文件")

if __name__ == '__main__':
    main()
