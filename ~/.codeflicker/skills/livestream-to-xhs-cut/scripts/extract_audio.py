#!/usr/bin/env python3
"""
音频提取脚本 - 从视频中提取Whisper优化格式的音频
"""
import subprocess
import json
import argparse
from pathlib import Path
import sys

def check_ffmpeg():
    """检查ffmpeg是否已安装"""
    try:
        subprocess.run(['ffmpeg', '-version'], 
                      capture_output=True, 
                      check=True)
        return True
    except (subprocess.CalledProcessError, FileNotFoundError):
        return False

def get_video_metadata(video_path):
    """获取视频元信息"""
    cmd = [
        'ffprobe',
        '-v', 'quiet',
        '-print_format', 'json',
        '-show_format',
        '-show_streams',
        video_path
    ]
    
    try:
        result = subprocess.run(cmd, capture_output=True, text=True, check=True)
        metadata = json.loads(result.stdout)
        
        # 提取关键信息
        format_info = metadata.get('format', {})
        video_stream = next((s for s in metadata.get('streams', []) 
                           if s.get('codec_type') == 'video'), {})
        
        return {
            'duration': float(format_info.get('duration', 0)),
            'size': int(format_info.get('size', 0)),
            'format': format_info.get('format_name', 'unknown'),
            'width': video_stream.get('width', 0),
            'height': video_stream.get('height', 0),
            'fps': eval(video_stream.get('r_frame_rate', '0/1'))
        }
    except Exception as e:
        print(f"⚠️  警告：无法获取视频元信息 - {e}")
        return {}

def extract_audio(video_path, output_dir, format='wav'):
    """
    提取音频
    
    Args:
        video_path: 视频文件路径
        output_dir: 输出目录
        format: 输出格式 (wav/mp3)
    """
    video_path = Path(video_path)
    output_dir = Path(output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)
    
    # 输出文件路径
    audio_file = output_dir / f"audio.{format}"
    
    if format == 'wav':
        # Whisper优化配置：16kHz单声道WAV
        cmd = [
            'ffmpeg',
            '-i', str(video_path),
            '-vn',                    # 禁用视频
            '-acodec', 'pcm_s16le',   # 16位PCM编码
            '-ar', '16000',           # 采样率16kHz
            '-ac', '1',               # 单声道
            '-y',                     # 覆盖已存在文件
            str(audio_file)
        ]
    else:
        # MP3格式（备用）
        cmd = [
            'ffmpeg',
            '-i', str(video_path),
            '-vn',
            '-acodec', 'libmp3lame',
            '-ar', '16000',
            '-ac', '1',
            '-q:a', '2',              # 高质量MP3
            '-y',
            str(audio_file)
        ]
    
    print(f"🎵 正在提取音频...")
    print(f"   输入: {video_path.name}")
    print(f"   输出: {audio_file}")
    
    try:
        result = subprocess.run(
            cmd,
            capture_output=True,
            text=True,
            check=True
        )
        print(f"✅ 音频提取成功！")
        return audio_file
    except subprocess.CalledProcessError as e:
        print(f"❌ 音频提取失败：")
        print(f"   错误信息: {e.stderr}")
        sys.exit(1)

def main():
    parser = argparse.ArgumentParser(
        description='从视频中提取Whisper优化格式的音频'
    )
    parser.add_argument(
        '--input', '-i',
        required=True,
        help='输入视频文件路径'
    )
    parser.add_argument(
        '--output', '-o',
        required=True,
        help='输出目录'
    )
    parser.add_argument(
        '--format', '-f',
        default='wav',
        choices=['wav', 'mp3'],
        help='输出格式 (默认: wav)'
    )
    
    args = parser.parse_args()
    
    # 检查ffmpeg
    if not check_ffmpeg():
        print("❌ 错误：未找到ffmpeg")
        print("   请先安装ffmpeg:")
        print("   macOS: brew install ffmpeg")
        print("   Ubuntu: sudo apt install ffmpeg")
        sys.exit(1)
    
    # 检查输入文件
    video_path = Path(args.input)
    if not video_path.exists():
        print(f"❌ 错误：视频文件不存在 - {video_path}")
        sys.exit(1)
    
    # 获取视频元信息
    print(f"📹 视频信息:")
    metadata = get_video_metadata(str(video_path))
    if metadata:
        duration_min = metadata.get('duration', 0) / 60
        size_mb = metadata.get('size', 0) / (1024 * 1024)
        print(f"   时长: {duration_min:.1f} 分钟")
        print(f"   大小: {size_mb:.1f} MB")
        print(f"   分辨率: {metadata.get('width')}x{metadata.get('height')}")
        print()
    
    # 提取音频
    audio_file = extract_audio(
        str(video_path),
        args.output,
        args.format
    )
    
    # 保存元信息
    output_dir = Path(args.output)
    metadata_file = output_dir / 'metadata.json'
    
    full_metadata = {
        'video_file': str(video_path.absolute()),
        'audio_file': str(audio_file.absolute()),
        'video_metadata': metadata,
        'audio_format': args.format,
        'audio_config': {
            'sample_rate': '16kHz',
            'channels': 'mono',
            'codec': 'pcm_s16le' if args.format == 'wav' else 'mp3'
        }
    }
    
    with open(metadata_file, 'w', encoding='utf-8') as f:
        json.dump(full_metadata, f, indent=2, ensure_ascii=False)
    
    print(f"📄 元信息已保存: {metadata_file}")
    print(f"\n🎉 完成！可以使用以下命令生成逐字稿：")
    print(f"   python scripts/transcribe.py --audio {audio_file} --output {output_dir}")

if __name__ == '__main__':
    main()
