#!/bin/bash
# ================================================
# 快手雇主品牌舆情 - 定时任务安装脚本
# ================================================
# 运行此脚本后，系统将每天早上 9:00 自动：
#   1. 爬取知乎/微博最新快手雇主品牌相关内容
#   2. 更新 articles.json
#   3. 打包成单文件 HTML
#   4. 上传到内网 CDN（生成新的访问链接）
#
# 使用方式：
#   bash scripts/install_cron.sh
#   bash scripts/install_cron.sh --remove  # 删除定时任务
# ================================================

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
PYTHON3="$(which python3)"
LOG_FILE="$PROJECT_DIR/logs/crawl.log"
CRON_COMMENT="# kuaishou-employer-brand-daily-crawl"

mkdir -p "$PROJECT_DIR/logs"

if [ "$1" = "--remove" ]; then
    echo "🗑️  删除定时任务..."
    crontab -l 2>/dev/null | grep -v "$CRON_COMMENT" | crontab -
    echo "✅ 定时任务已删除"
    exit 0
fi

# 检查 Python3
if [ -z "$PYTHON3" ]; then
    echo "❌ 未找到 python3，请先安装"
    exit 1
fi

echo "📋 定时任务配置信息："
echo "   Python3:   $PYTHON3"
echo "   脚本:      $SCRIPT_DIR/daily_crawl.py"
echo "   日志:      $LOG_FILE"
echo "   执行时间:  每天早上 09:00"
echo ""

# 添加到 crontab（每天 9:00 执行）
CRON_JOB="0 9 * * * $PYTHON3 $SCRIPT_DIR/daily_crawl.py --deploy >> $LOG_FILE 2>&1 $CRON_COMMENT"

# 检查是否已存在
if crontab -l 2>/dev/null | grep -q "kuaishou-employer-brand-daily-crawl"; then
    echo "⚠️  定时任务已存在，先删除旧任务..."
    crontab -l 2>/dev/null | grep -v "$CRON_COMMENT" | crontab -
fi

# 添加新任务
(crontab -l 2>/dev/null; echo "$CRON_JOB") | crontab -

echo "✅ 定时任务已安装！"
echo ""
echo "📅 当前 crontab 内容："
crontab -l
echo ""
echo "📌 手动立即执行一次（测试）："
echo "   python3 $SCRIPT_DIR/daily_crawl.py --deploy"
echo ""
echo "📌 查看爬取日志："
echo "   tail -f $LOG_FILE"
echo ""
echo "📌 删除定时任务："
echo "   bash $SCRIPT_DIR/install_cron.sh --remove"
