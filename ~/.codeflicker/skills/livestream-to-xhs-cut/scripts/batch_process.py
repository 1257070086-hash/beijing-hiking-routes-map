#!/usr/bin/env python3
"""
批量处理脚本 - 一键完成从视频到小红书CUT的完整流程
"""
import subprocess
import argparse
from pathlib import Path
import sys
import time

def run_step(step_name, command, verbose=True):
    """执行单个步骤"""
    if verbose:
        print(f"\n{'='*60}")
        print(f"🚀 {step_name}")
        print(f"{'='*60}\n")
    
    start_time = time.time()
    
    try:
        result = subprocess.run(
            command,
            shell=True,
            check=True,
            capture_output=not verbose,
            text=True
        )
        
        elapsed = time.time() - start_time
        if verbose:
            print(f"\n✅ {step_name} 完成！耗时: {elapsed:.1f}秒")
        
        return True
    except subprocess.CalledProcessError as e:
        print(f"\n❌ {step_name} 失败！")
        if not verbose and e.stderr:
            print(f"错误信息: {e.stderr}")
        return False

def batch_process_single_video(video_path, output_dir, top_n=5, mode='auto'):
    """
    处理单个视频
    
    Args:
        video_path: 视频文件路径
        output_dir: 输出目录
        top_n: 生成CUT数量
        mode: 处理模式（auto/manual/hybrid）
    """
    video_path = Path(video_path)
    output_dir = Path(output_dir)
    
    if not video_path.exists():
        print(f"❌ 错误：视频文件不存在 - {video_path}")
        return False
    
    output_dir.mkdir(parents=True, exist_ok=True)
    
    print(f"\n{'#'*60}")
    print(f"# 处理视频: {video_path.name}")
    print(f"# 输出目录: {output_dir}")
    print(f"# 模式: {mode}")
    print(f"{'#'*60}")
    
    # Step 1: 提取音频
    if not run_step(
        "Step 1/5: 提取音频",
        f"python scripts/extract_audio.py --input {video_path} --output {output_dir}"
    ):
        return False
    
    audio_file = output_dir / 'audio.wav'
    if not audio_file.exists():
        print(f"❌ 错误：音频文件未生成")
        return False
    
    # Step 2: 生成逐字稿
    if not run_step(
        "Step 2/5: 生成逐字稿（这一步可能需要10-20分钟）",
        f"python scripts/transcribe.py --audio {audio_file} --output {output_dir}"
    ):
        return False
    
    transcript_file = output_dir / 'transcript.json'
    if not transcript_file.exists():
        print(f"❌ 错误：逐字稿文件未生成")
        return False
    
    # Step 3: 分析精彩片段
    if mode == 'auto':
        if not run_step(
            "Step 3/5: 分析精彩片段",
            f"python scripts/analyze_highlights.py --transcript {transcript_file} --output {output_dir}"
        ):
            return False
        
        highlights_file = output_dir / 'highlights.json'
        if not highlights_file.exists():
            print(f"❌ 错误：精彩片段文件未生成")
            return False
    
    elif mode == 'manual':
        print(f"\n⚠️  手动模式：请提供 manual_cuts.json 文件")
        print(f"   格式参考: README.md")
        return False
    
    elif mode == 'hybrid':
        # 先自动识别，然后等待用户确认
        if not run_step(
            "Step 3/5: 分析精彩片段（等待确认）",
            f"python scripts/analyze_highlights.py --transcript {transcript_file} --output {output_dir}"
        ):
            return False
        
        print(f"\n⏸️  请查看 {output_dir}/highlights_summary.md")
        print(f"   确认后按Enter继续，或输入 'edit' 手动调整...")
        user_input = input()
        if user_input.lower() == 'edit':
            print(f"⚠️  请手动编辑 {output_dir}/highlights.json，完成后按Enter")
            input()
    
    # Step 4: 生成小红书CUT内容包
    if not run_step(
        "Step 4/5: 生成小红书CUT内容包",
        f"python scripts/generate_xhs_package.py --highlights {output_dir}/highlights.json --video {video_path} --output {output_dir} --top-n {top_n}"
    ):
        return False
    
    # Step 5: 生成封面（可选，需用户手动执行）
    print(f"\n{'='*60}")
    print(f"Step 5/5: 生成封面图（可选）")
    print(f"{'='*60}\n")
    print(f"已生成 {top_n} 个CUT，每个CUT包含封面生成指南")
    print(f"请查看: {output_dir}/2_cuts/cut_XXX/COVER_README.md")
    print(f"\n可选操作：")
    print(f"1. 生成所有截图封面：运行批量脚本")
    print(f"2. 生成AI封面：使用 ks-design-image-gen 技能")
    
    return True

def batch_process_directory(input_dir, output_dir, mode='auto'):
    """批量处理目录下所有视频"""
    input_dir = Path(input_dir)
    output_dir = Path(output_dir)
    
    # 支持的视频格式
    video_extensions = ['.mp4', '.mov', '.avi', '.flv', '.mkv', '.wmv']
    
    # 找到所有视频文件
    video_files = []
    for ext in video_extensions:
        video_files.extend(input_dir.glob(f'*{ext}'))
    
    if not video_files:
        print(f"❌ 错误：未找到视频文件 - {input_dir}")
        return
    
    print(f"📹 找到 {len(video_files)} 个视频文件")
    
    success_count = 0
    for i, video_file in enumerate(video_files, 1):
        print(f"\n{'#'*60}")
        print(f"# 进度: {i}/{len(video_files)}")
        print(f"{'#'*60}")
        
        # 为每个视频创建独立输出目录
        video_output_dir = output_dir / video_file.stem
        
        if batch_process_single_video(video_file, video_output_dir, mode=mode):
            success_count += 1
        else:
            print(f"⚠️  视频 {video_file.name} 处理失败，跳过...")
    
    print(f"\n{'#'*60}")
    print(f"# 批量处理完成")
    print(f"# 成功: {success_count}/{len(video_files)}")
    print(f"{'#'*60}")

def main():
    parser = argparse.ArgumentParser(
        description='批量处理直播视频，生成小红书CUT'
    )
    parser.add_argument(
        '--input', '-i',
        help='单个视频文件路径'
    )
    parser.add_argument(
        '--input-dir',
        help='视频文件目录（批量处理）'
    )
    parser.add_argument(
        '--output', '-o',
        help='输出目录（单文件模式）'
    )
    parser.add_argument(
        '--output-dir',
        help='输出目录（批量模式）'
    )
    parser.add_argument(
        '--top-n',
        type=int,
        default=5,
        help='生成前N个CUT（默认：5）'
    )
    parser.add_argument(
        '--mode',
        default='auto',
        choices=['auto', 'manual', 'hybrid'],
        help='处理模式：auto=自动识别，manual=手动指定，hybrid=AI推荐+用户确认'
    )
    
    args = parser.parse_args()
    
    # 检查参数
    if args.input and args.input_dir:
        print("❌ 错误：不能同时指定 --input 和 --input-dir")
        sys.exit(1)
    
    if not args.input and not args.input_dir:
        print("❌ 错误：必须指定 --input 或 --input-dir")
        sys.exit(1)
    
    # 单文件模式
    if args.input:
        if not args.output:
            print("❌ 错误：单文件模式需要指定 --output")
            sys.exit(1)
        
        success = batch_process_single_video(
            args.input,
            args.output,
            args.top_n,
            args.mode
        )
        
        if success:
            print(f"\n🎉 处理完成！")
            print(f"   查看结果: {args.output}/3_summary_report.md")
        else:
            print(f"\n❌ 处理失败！")
            sys.exit(1)
    
    # 批量模式
    elif args.input_dir:
        if not args.output_dir:
            print("❌ 错误：批量模式需要指定 --output-dir")
            sys.exit(1)
        
        batch_process_directory(
            args.input_dir,
            args.output_dir,
            args.mode
        )

if __name__ == '__main__':
    main()
