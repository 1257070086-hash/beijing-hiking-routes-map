# 🏔️ 环游北京 - 徒步路线地图

> 交互式北京周边徒步路线地图，包含 25 条精选路线，支持路径动画、卡路里计算、智能导航等功能

[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-brightgreen)](https://dingding09.github.io/beijing-hiking-map/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## ✨ 功能特性

- 🗺️ **25条精选路线** - 覆盖北京周边所有热门徒步地点
- 🎨 **Apple风格设计** - 毛玻璃效果、SF字体、精致UI
- 🚶 **动画小人** - 5秒沿路径真实移动动画
- 🔥 **卡路里计算** - 形象化显示（可乐🥤、汉堡🍔等）
- ⬅️➡️ **智能导航** - 无限循环浏览所有路线
- 🏷️ **难度筛选** - 入门级、进阶级、挑战级分类
- 📊 **详细数据** - 用时、距离、海拔、交通、适合人群
- 📸 **实景照片** - 每条路线配有精美风景照片

## 🎮 在线体验

👉 **[立即访问](https://dingding09.github.io/beijing-hiking-map/)**

## 🏔️ 路线列表

### 挑战级（⭐⭐⭐⭐⭐）
- 箭扣长城 - 长城天花板
- 海坨山 - 北京第二高峰
- 灵山 - 北京第一高峰

### 进阶级（⭐⭐⭐）
- 凤凰岭十险
- 阳台山-妙峰山三峰连穿
- 霞云岭
- 妙峰山
- 云蒙山
- 金山岭长城

### 入门级（⭐⭐）
- 神堂峪栈道
- 水泉沟
- 虎头山
- 红螺山
- 黄花城水长城
- 蟒山国家森林公园
- ...更多路线

## 🚀 本地运行

```bash
# 克隆仓库
git clone https://github.com/dingding09/beijing-hiking-map.git

# 进入目录
cd beijing-hiking-map

# 使用任意HTTP服务器运行
python3 -m http.server 8899

# 访问 http://localhost:8899
```

## 🛠️ 技术栈

- **地图引擎**: 高德地图 API 2.0
- **前端框架**: 纯 HTML + CSS + JavaScript（无依赖）
- **设计风格**: Apple Human Interface Guidelines
- **部署平台**: GitHub Pages

## 📱 截图

![环游北京徒步地图](https://via.placeholder.com/800x450.png?text=Beijing+Hiking+Map)

## 🎯 使用指南

1. **浏览路线** - 点击地图标记点或左侧列表查看详情
2. **筛选路线** - 使用顶部按钮按难度筛选
3. **查看路径** - 点击"查看徒步路径"显示红色轨迹
4. **观看动画** - 小人会自动沿路径移动
5. **导航切换** - 使用⬅️上一个/下一个➡️按钮浏览
6. **搜索路线** - 输入关键词快速定位

## 📊 数据说明

- **用时**: 正常徒步速度预估
- **距离**: 实际徒步路径长度
- **卡路里**: 基于公式 `距离(km) × 65 + 海拔(m) × 0.05`
- **难度**: 1-5星，综合考虑距离、海拔、路况

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

如果你想添加新的徒步路线，请提供：
- 路线名称、位置（经纬度）
- 难度等级、用时、距离、海拔
- 路线描述、景观特色、交通方式
- 适合人群、最佳季节、小贴士
- （可选）路线照片和路径坐标

## 📄 许可证

MIT License © 2026

## 🙏 致谢

- 地图数据：高德地图
- 路线信息：来自徒步爱好者分享
- 照片来源：Unsplash

---

**Made with ❤️ for hiking lovers in Beijing**
