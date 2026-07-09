#!/usr/bin/env python3
"""
从视频中提取音频
"""
from moviepy import VideoFileClip
import sys

def extract_audio(video_path, audio_path):
    """提取视频音频到WAV文件"""
    print(f"正在加载视频: {video_path}")
    video = VideoFileClip(video_path)
    
    print(f"视频时长: {video.duration/60:.2f} 分钟")
    print(f"正在提取音频到: {audio_path}")
    
    # 提取音频并保存为WAV格式
    video.audio.write_audiofile(
        audio_path,
        codec='pcm_s16le',  # WAV格式
        fps=16000,  # 16kHz采样率（语音识别常用）
        nbytes=2,
        buffersize=2000
    )
    
    video.close()
    print("音频提取完成！")

if __name__ == "__main__":
    video_file = "3.20 春招启动直播.mp4"
    audio_file = "3.20春招启动直播_audio.wav"
    
    extract_audio(video_file, audio_file)
