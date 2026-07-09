#!/usr/bin/env python3
"""
AI封面生成辅助脚本 - 生成调用 ks-design-image-gen 的提示词
"""
import json
import argparse
from pathlib import Path

def generate_ai_cover_prompt(highlight, style='flat_illustration'):
    """
    生成AI封面的提示词
    
    Args:
        highlight: 精彩片段数据
        style: 视觉风格（flat_illustration/business_minimal/hand_drawn）
    
    Returns:
        提示词字典
    """
    title = highlight['title']
    keywords = highlight['keywords'][:3]
    
    # 风格映射
    style_config = {
        'flat_illustration': {
            'name': '扁平插画',
            'description': '现代扁平风格，色彩明快，几何图形，无阴影',
            'color_scheme': '小红书品牌红(#FE2C55) + 白色 + 浅灰',
            'composition': '中心对称，主体居中'
        },
        'business_minimal': {
            'name': '商务简约',
            'description': '简约专业风格，线条清晰，留白充足',
            'color_scheme': '小红书红 + 深蓝 + 白色',
            'composition': '左文右图，黄金分割'
        },
        'hand_drawn': {
            'name': '手绘风',
            'description': '手绘插画风格，温暖可爱，富有亲和力',
            'color_scheme': '小红书红 + 暖色系渐变',
            'composition': '场景化构图，人物互动'
        }
    }
    
    config = style_config.get(style, style_config['flat_illustration'])
    
    # 构建提示词
    prompt = f"""
小红书封面图设计

【主题】{title}

【关键词】{', '.join(keywords)}

【风格】{config['name']}
- 描述：{config['description']}
- 配色：{config['color_scheme']}
- 构图：{config['composition']}

【文字要求】
- 主标题：{title}（大字号，粗体）
- 位置：图片下半部分
- 字体：思源黑体 or 阿里巴巴普惠体
- 颜色：白色文字 + 黑色描边

【装饰元素】
- 左上角标签：「💡 干货分享」（小红书品牌红背景）
- 右下角：点赞图标提示

【尺寸要求】
- 分辨率：1080x1350（小红书竖屏3:4）
- 格式：JPG/PNG
- 压缩质量：高清

【参考案例】
小红书爆款封面特点：
1. 标题文字清晰醒目（占画面20-30%）
2. 主体元素突出（视觉焦点明确）
3. 配色符合品牌调性（小红书红必不可少）
4. 信息层级分明（主标题 > 关键词 > 装饰元素）
""".strip()
    
    return {
        'prompt': prompt,
        'style': style,
        'title': title,
        'keywords': keywords,
        'resolution': '1080x1350',
        'format': 'jpg'
    }

def save_prompt_file(prompt_data, output_path):
    """保存提示词到文件"""
    output_path = Path(output_path)
    
    # JSON格式（供程序调用）
    json_file = output_path.with_suffix('.json')
    with open(json_file, 'w', encoding='utf-8') as f:
        json.dump(prompt_data, f, indent=2, ensure_ascii=False)
    
    # TXT格式（供人类阅读）
    txt_file = output_path.with_suffix('.txt')
    with open(txt_file, 'w', encoding='utf-8') as f:
        f.write(prompt_data['prompt'])
    
    return json_file, txt_file

def main():
    parser = argparse.ArgumentParser(
        description='生成AI封面的提示词'
    )
    parser.add_argument(
        '--highlight',
        required=True,
        help='精彩片段JSON文件路径（单个）'
    )
    parser.add_argument(
        '--style',
        default='flat_illustration',
        choices=['flat_illustration', 'business_minimal', 'hand_drawn'],
        help='视觉风格'
    )
    parser.add_argument(
        '--output',
        required=True,
        help='输出提示词文件路径（不含扩展名）'
    )
    
    args = parser.parse_args()
    
    # 加载精彩片段数据
    with open(args.highlight, 'r', encoding='utf-8') as f:
        highlight_data = json.load(f)
    
    # 生成提示词
    prompt_data = generate_ai_cover_prompt(highlight_data, args.style)
    
    # 保存文件
    json_file, txt_file = save_prompt_file(prompt_data, args.output)
    
    print(f"✅ AI封面提示词已生成：")
    print(f"   JSON: {json_file}")
    print(f"   TXT: {txt_file}")
    print(f"\n📝 使用方法：")
    print(f"   1. 复制 {txt_file} 的内容")
    print(f"   2. 在对话中说：「用AI生成这个CUT的封面图」")
    print(f"   3. 粘贴提示词并触发 ks-design-image-gen 技能")
    print(f"   4. 生成的图片保存为同目录下的 cover_ai.jpg")

if __name__ == '__main__':
    main()
