#!/usr/bin/env python3
"""
精彩片段分析脚本 - AI分析逐字稿识别高价值片段
"""
import json
import argparse
from pathlib import Path
import sys
import re
from collections import defaultdict

def load_transcript(transcript_file):
    """加载逐字稿数据"""
    with open(transcript_file, 'r', encoding='utf-8') as f:
        data = json.load(f)
    return data

def calculate_information_density(text):
    """
    计算信息密度
    - 数字、百分比、时间等数据
    - 专业术语
    - 列举性内容（第一、第二）
    """
    score = 0.0
    
    # 数字和数据
    numbers = re.findall(r'\d+(?:\.\d+)?%?', text)
    score += len(numbers) * 2
    
    # 列举词
    enumerate_words = ['第一', '第二', '第三', '首先', '其次', '最后', '一是', '二是', '三是']
    for word in enumerate_words:
        if word in text:
            score += 3
    
    # 专业术语（简化版，实际可接入词库）
    professional_terms = ['算法', '模型', '架构', '框架', '系统', '技术', '方案', '策略']
    for term in professional_terms:
        if term in text:
            score += 1
    
    return score

def detect_emotion_peaks(segments):
    """
    检测情绪高点
    - 语气词密度
    - 重复强调
    - 感叹句
    """
    emotion_scores = []
    
    for seg in segments:
        score = 0.0
        text = seg.get('text', '')
        
        # 语气词
        emotion_words = ['真的', '非常', '特别', '太', '超级', '确实', '其实', '竟然']
        for word in emotion_words:
            score += text.count(word) * 1.5
        
        # 感叹号
        score += text.count('!') * 2
        score += text.count('！') * 2
        
        # 问句（互动性）
        score += text.count('?') * 1.5
        score += text.count('？') * 1.5
        
        emotion_scores.append({
            'segment_id': seg.get('id'),
            'start': seg.get('start'),
            'score': score
        })
    
    return emotion_scores

def identify_golden_sentences(segments):
    """
    识别金句
    - 短句（10-30字）
    - 对仗、排比
    - 名言型表述
    """
    golden_sentences = []
    
    for seg in segments:
        text = seg.get('text', '').strip()
        length = len(text)
        
        # 长度筛选
        if 10 <= length <= 40:
            score = 0.0
            
            # 对仗结构（简化检测）
            if '不是' in text and '而是' in text:
                score += 5
            if '不仅' in text and '还' in text:
                score += 5
            
            # 名言型关键词
            quote_keywords = ['最', '真正的', '核心', '本质', '关键', '秘诀']
            for keyword in quote_keywords:
                if keyword in text:
                    score += 2
            
            if score > 0:
                golden_sentences.append({
                    'text': text,
                    'start': seg.get('start'),
                    'end': seg.get('end'),
                    'score': score
                })
    
    # 按分数排序
    golden_sentences.sort(key=lambda x: x['score'], reverse=True)
    return golden_sentences[:10]  # 只保留前10个

def analyze_topic_completeness(segments, window_size=10):
    """
    分析话题完整性
    使用滑动窗口检测完整话题段落
    """
    topics = []
    
    for i in range(len(segments) - window_size + 1):
        window = segments[i:i+window_size]
        
        # 拼接文本
        combined_text = ' '.join([seg.get('text', '') for seg in window])
        
        # 计算话题分数（简化版）
        score = 0.0
        
        # 话题开始标志
        start_markers = ['那么', '接下来', '现在', '我们来', '首先', '第一']
        for marker in start_markers:
            if marker in window[0].get('text', ''):
                score += 3
        
        # 话题结束标志
        end_markers = ['所以', '总之', '因此', '这就是', '明白了吗']
        for marker in end_markers:
            if marker in window[-1].get('text', ''):
                score += 3
        
        # 内容连贯性（信息密度）
        info_score = calculate_information_density(combined_text)
        score += info_score / 5
        
        if score > 5:
            topics.append({
                'start_segment': i,
                'end_segment': i + window_size - 1,
                'start_time': window[0].get('start'),
                'end_time': window[-1].get('end'),
                'text': combined_text,
                'score': score
            })
    
    # 去重（重叠的窗口）
    unique_topics = []
    for topic in sorted(topics, key=lambda x: x['score'], reverse=True):
        overlap = False
        for existing in unique_topics:
            if not (topic['end_time'] < existing['start_time'] or 
                   topic['start_time'] > existing['end_time']):
                overlap = True
                break
        if not overlap:
            unique_topics.append(topic)
    
    return unique_topics

def assess_viral_potential(text):
    """
    评估传播潜力
    - 争议性关键词
    - 共鸣性话题
    - 实用性内容
    """
    score = 0.0
    
    # 争议性
    controversy_words = ['但是', '其实', '误区', '真相', '你以为', '不要以为']
    for word in controversy_words:
        if word in text:
            score += 2
    
    # 共鸣性
    resonance_words = ['我们', '大家', '很多人', '都知道', '都说', '谁不想']
    for word in resonance_words:
        if word in text:
            score += 1.5
    
    # 实用性
    practical_words = ['方法', '技巧', '建议', '注意', '避免', '推荐', '如何']
    for word in practical_words:
        if word in text:
            score += 2
    
    return score

def identify_highlights(transcript_data, weights=None):
    """
    综合识别精彩片段
    
    Args:
        transcript_data: 逐字稿数据
        weights: 各维度权重配置
    """
    if weights is None:
        weights = {
            'information_density': 0.3,
            'emotion_peak': 0.2,
            'golden_sentence': 0.25,
            'topic_completeness': 0.15,
            'viral_potential': 0.1
        }
    
    segments = transcript_data.get('segments', [])
    
    print("🔍 分析维度:")
    print(f"   信息密度: {weights['information_density']:.0%}")
    print(f"   情绪高点: {weights['emotion_peak']:.0%}")
    print(f"   金句识别: {weights['golden_sentence']:.0%}")
    print(f"   话题完整性: {weights['topic_completeness']:.0%}")
    print(f"   传播潜力: {weights['viral_potential']:.0%}")
    print()
    
    # 1. 分析话题完整性（生成候选片段）
    print("📊 分析话题完整性...")
    candidate_topics = analyze_topic_completeness(segments, window_size=10)
    print(f"   找到 {len(candidate_topics)} 个候选片段")
    
    # 2. 对每个候选片段计算综合分数
    highlights = []
    for topic in candidate_topics:
        text = topic['text']
        
        # 各维度分数
        info_score = calculate_information_density(text)
        viral_score = assess_viral_potential(text)
        
        # 情绪分数（该段落内的平均情绪）
        topic_segments = segments[topic['start_segment']:topic['end_segment']+1]
        emotion_scores = detect_emotion_peaks(topic_segments)
        avg_emotion = sum([e['score'] for e in emotion_scores]) / len(emotion_scores) if emotion_scores else 0
        
        # 综合分数
        final_score = (
            info_score * weights['information_density'] +
            avg_emotion * weights['emotion_peak'] +
            topic['score'] * weights['topic_completeness'] +
            viral_score * weights['viral_potential']
        )
        
        # 生成标题（提取前30字）
        title = text[:30].strip() + ('...' if len(text) > 30 else '')
        
        # 提取关键词（简化版）
        keywords = extract_keywords(text)
        
        highlights.append({
            'id': f"highlight_{len(highlights)+1}",
            'title': title,
            'start': format_timestamp(topic['start_time']),
            'end': format_timestamp(topic['end_time']),
            'duration': topic['end_time'] - topic['start_time'],
            'text': text,
            'keywords': keywords,
            'scores': {
                'information_density': round(info_score, 2),
                'emotion': round(avg_emotion, 2),
                'topic_completeness': round(topic['score'], 2),
                'viral_potential': round(viral_score, 2),
                'final': round(final_score, 2)
            },
            'recommendation': generate_recommendation(final_score)
        })
    
    # 3. 识别金句
    print("💎 识别金句...")
    golden_sentences = identify_golden_sentences(segments)
    print(f"   找到 {len(golden_sentences)} 个金句")
    
    # 按最终分数排序
    highlights.sort(key=lambda x: x['scores']['final'], reverse=True)
    
    return highlights, golden_sentences

def extract_keywords(text, top_n=5):
    """提取关键词（简化版）"""
    # 简单的词频统计（实际可接入jieba分词）
    words = re.findall(r'[\u4e00-\u9fa5]{2,}', text)
    word_freq = defaultdict(int)
    
    # 过滤停用词
    stop_words = {'我们', '这个', '就是', '可以', '因为', '所以', '但是', '然后', '还是', '已经', '如果'}
    
    for word in words:
        if word not in stop_words:
            word_freq[word] += 1
    
    # 返回高频词
    sorted_words = sorted(word_freq.items(), key=lambda x: x[1], reverse=True)
    return [word for word, freq in sorted_words[:top_n]]

def generate_recommendation(score):
    """根据分数生成推荐理由"""
    if score > 20:
        return "强烈推荐：高信息密度 + 强传播潜力"
    elif score > 15:
        return "推荐：内容完整且有亮点"
    elif score > 10:
        return "可选：有一定价值但需优化"
    else:
        return "备选：建议与其他片段组合"

def format_timestamp(seconds):
    """将秒数转换为 HH:MM:SS 格式"""
    hours = int(seconds // 3600)
    minutes = int((seconds % 3600) // 60)
    secs = int(seconds % 60)
    return f"{hours:02d}:{minutes:02d}:{secs:02d}"

def save_results(highlights, golden_sentences, output_dir):
    """保存分析结果"""
    output_dir = Path(output_dir)
    
    # 1. 保存JSON格式
    highlights_file = output_dir / 'highlights.json'
    with open(highlights_file, 'w', encoding='utf-8') as f:
        json.dump({
            'highlights': highlights,
            'golden_sentences': golden_sentences,
            'total_highlights': len(highlights),
            'total_golden_sentences': len(golden_sentences)
        }, f, indent=2, ensure_ascii=False)
    
    print(f"✅ 精彩片段已保存: {highlights_file}")
    
    # 2. 生成Markdown报告
    report_file = output_dir / 'highlights_summary.md'
    with open(report_file, 'w', encoding='utf-8') as f:
        f.write("# 精彩片段分析报告\n\n")
        f.write(f"共识别 **{len(highlights)}** 个精彩片段\n\n")
        f.write("---\n\n")
        
        for i, h in enumerate(highlights, 1):
            f.write(f"## {i}. {h['title']}\n\n")
            f.write(f"**时间戳**: {h['start']} - {h['end']} ({h['duration']:.0f}秒)\n\n")
            f.write(f"**推荐理由**: {h['recommendation']}\n\n")
            f.write(f"**关键词**: {', '.join(h['keywords'])}\n\n")
            f.write(f"**评分**:\n")
            f.write(f"- 信息密度: {h['scores']['information_density']}\n")
            f.write(f"- 情绪高点: {h['scores']['emotion']}\n")
            f.write(f"- 话题完整性: {h['scores']['topic_completeness']}\n")
            f.write(f"- 传播潜力: {h['scores']['viral_potential']}\n")
            f.write(f"- **综合得分: {h['scores']['final']}**\n\n")
            f.write(f"**内容预览**:\n```\n{h['text'][:200]}...\n```\n\n")
            f.write("---\n\n")
        
        # 金句部分
        if golden_sentences:
            f.write("## 💎 金句精选\n\n")
            for i, gs in enumerate(golden_sentences[:5], 1):
                f.write(f"{i}. 「{gs['text']}」 ({gs['start']})\n")
    
    print(f"📄 分析报告已保存: {report_file}")
    
    return highlights_file, report_file

def main():
    parser = argparse.ArgumentParser(
        description='分析逐字稿，识别精彩片段'
    )
    parser.add_argument(
        '--transcript', '-t',
        required=True,
        help='逐字稿JSON文件路径'
    )
    parser.add_argument(
        '--output', '-o',
        required=True,
        help='输出目录'
    )
    parser.add_argument(
        '--weights',
        help='自定义权重配置文件（JSON格式）'
    )
    
    args = parser.parse_args()
    
    # 检查输入文件
    transcript_file = Path(args.transcript)
    if not transcript_file.exists():
        print(f"❌ 错误：逐字稿文件不存在 - {transcript_file}")
        sys.exit(1)
    
    # 加载权重配置
    weights = None
    if args.weights:
        with open(args.weights, 'r') as f:
            weights = json.load(f)
    
    # 加载逐字稿
    print(f"📖 加载逐字稿...")
    transcript_data = load_transcript(transcript_file)
    
    # 分析精彩片段
    print(f"\n🎯 开始分析精彩片段...")
    highlights, golden_sentences = identify_highlights(transcript_data, weights)
    
    # 保存结果
    print(f"\n💾 保存结果...")
    output_dir = Path(args.output)
    output_dir.mkdir(parents=True, exist_ok=True)
    highlights_file, report_file = save_results(highlights, golden_sentences, output_dir)
    
    # 统计信息
    print(f"\n📊 分析完成！")
    print(f"   精彩片段: {len(highlights)} 个")
    print(f"   金句: {len(golden_sentences)} 个")
    print(f"   平均时长: {sum([h['duration'] for h in highlights]) / len(highlights):.1f} 秒")
    print(f"\n📈 推荐使用前 5 个高分片段制作小红书CUT")
    print(f"\n🎉 下一步：生成小红书内容")
    print(f"   查看报告: {report_file}")

if __name__ == '__main__':
    main()
