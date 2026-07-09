#!/usr/bin/env python3
"""
使用Whisper将音频转为文字
"""
import whisper
import json
from datetime import timedelta

def format_timestamp(seconds):
    """将秒数转换为时:分:秒格式"""
    return str(timedelta(seconds=int(seconds)))

def transcribe_audio(audio_path, output_path):
    """使用Whisper转录音频"""
    print(f"正在加载Whisper模型（base）...")
    model = whisper.load_model("base")
    
    print(f"开始转录音频: {audio_path}")
    print("这可能需要20-30分钟，请耐心等待...")
    
    # 转录音频，包含时间戳
    result = model.transcribe(
        audio_path,
        language="zh",  # 中文
        verbose=True,   # 显示进度
        word_timestamps=True  # 包含详细时间戳
    )
    
    print(f"\n转录完成！正在保存结果...")
    
    # 保存完整结果（JSON格式）
    json_path = output_path.replace('.txt', '.json')
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(result, f, ensure_ascii=False, indent=2)
    print(f"详细结果已保存到: {json_path}")
    
    # 保存带时间戳的文本
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write("【快手春招启动场直播 - 完整文字稿】\n")
        f.write("="*60 + "\n\n")
        
        for segment in result['segments']:
            start_time = format_timestamp(segment['start'])
            end_time = format_timestamp(segment['end'])
            text = segment['text'].strip()
            
            f.write(f"[{start_time} - {end_time}]\n")
            f.write(f"{text}\n\n")
    
    print(f"文字稿已保存到: {output_path}")
    print(f"\n总时长: {format_timestamp(result['segments'][-1]['end'])}")
    print(f"识别的文本片段数: {len(result['segments'])}")
    
    return result

if __name__ == "__main__":
    audio_file = "3.20春招启动直播_audio.wav"
    output_file = "3.20春招启动直播_文字稿.txt"
    
    result = transcribe_audio(audio_file, output_file)
    print("\n✅ 转录完成！")
