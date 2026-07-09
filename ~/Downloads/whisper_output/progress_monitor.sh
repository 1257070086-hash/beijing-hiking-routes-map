#!/bin/bash
# Whisper进度监控脚本 - 每10分钟记录一次进度

OUTPUT_DIR=~/Downloads/whisper_output
LOG_FILE=$OUTPUT_DIR/whisper_log.txt
PROGRESS_FILE=$OUTPUT_DIR/progress_report.md
AUDIO_FILE=~/Downloads/qianboshi_20260331.mp3

while true; do
    TIMESTAMP=$(date "+%Y-%m-%d %H:%M:%S")
    
    # 检查进程是否在运行
    if ps aux | grep "python3 -m whisper" | grep -v grep > /dev/null; then
        PROCESS_STATUS="✅ 运行中"
    else
        PROCESS_STATUS="⏸️ 已停止"
    fi
    
    # 读取最新日志
    if [ -f "$LOG_FILE" ]; then
        LAST_LOG=$(tail -5 "$LOG_FILE")
    else
        LAST_LOG="日志文件不存在"
    fi
    
    # 检查输出文件
    TXT_FILE=$(ls $OUTPUT_DIR/*.txt 2>/dev/null | grep -v progress_report | grep -v whisper_log | head -1)
    SRT_FILE=$(ls $OUTPUT_DIR/*.srt 2>/dev/null | head -1)
    JSON_FILE=$(ls $OUTPUT_DIR/*.json 2>/dev/null | head -1)
    
    if [ -n "$TXT_FILE" ]; then
        OUTPUT_STATUS="✅ 转写已完成"
    else
        OUTPUT_STATUS="⏳ 转写进行中"
    fi
    
    # 生成进度报告
    cat > "$PROGRESS_FILE" << EOF
# Whisper转写进度报告

**更新时间**: $TIMESTAMP

---

## 📊 当前状态

- **进程状态**: $PROCESS_STATUS
- **任务状态**: $OUTPUT_STATUS

---

## 📝 最新日志（最后5行）

\`\`\`
$LAST_LOG
\`\`\`

---

## 📂 输出文件状态

- TXT逐字稿: $([ -n "$TXT_FILE" ] && echo "✅ 已生成" || echo "⏳ 未生成")
- SRT字幕: $([ -n "$SRT_FILE" ] && echo "✅ 已生成" || echo "⏳ 未生成")
- JSON数据: $([ -n "$JSON_FILE" ] && echo "✅ 已生成" || echo "⏳ 未生成")

---

## ⏰ 下次更新时间

$(date -v+10M "+%Y-%m-%d %H:%M:%S")

---

*此文件每10分钟自动更新一次*
EOF

    echo "[$TIMESTAMP] 进度已记录到 $PROGRESS_FILE"
    
    # 等待10分钟（600秒）
    sleep 600
done
