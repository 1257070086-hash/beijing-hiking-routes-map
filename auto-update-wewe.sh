#!/bin/bash
# ============================================================
# auto-update-wewe.sh
# 每天 19:00 由 cron 触发：启动 WeWe → 检查登录 → 更新快照
# ============================================================

# 加载环境变量（cron 环境没有 zprofile）
source ~/.zprofile 2>/dev/null || source ~/.zshenv 2>/dev/null || true

WEWE_DIR="/Users/dingding/Desktop/space/wewe-rss"
SNAPSHOT_SH="/Users/dingding/Desktop/space/export-snapshot.sh"
WEWE_API="http://localhost:4000"
LOG_FILE="/tmp/wewe-auto-update.log"
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')

log() { echo "[$TIMESTAMP] $*" | tee -a "$LOG_FILE"; }

log "========== 开始自动更新 =========="

# ──────────────────────────────────────────────────────────
# Step 1: 检查 WeWe RSS 是否运行，没跑则自动启动
# ──────────────────────────────────────────────────────────
if curl -s --max-time 3 "$WEWE_API/feeds" > /dev/null 2>&1; then
  log "✅ WeWe RSS 已在运行"
else
  log "🚀 WeWe RSS 未运行，正在启动..."
  cd "$WEWE_DIR" && pnpm run start:server >> "$LOG_FILE" 2>&1 &

  # 等待最多 40 秒，每 4 秒探测一次
  READY=false
  for i in $(seq 1 10); do
    sleep 4
    if curl -s --max-time 3 "$WEWE_API/feeds" > /dev/null 2>&1; then
      log "✅ WeWe RSS 启动成功（第 ${i} 次探测）"
      READY=true
      break
    fi
    log "  等待 WeWe 就绪... (${i}/10)"
  done

  if [ "$READY" = false ]; then
    MSG="❌ WeWe RSS 启动失败，已等待 40 秒仍无响应，请手动检查"
    log "$MSG"
    osascript -e "display notification \"$MSG\" with title \"WeWe 自动更新\" sound name \"Basso\"" 2>/dev/null
    exit 1
  fi
fi

# ──────────────────────────────────────────────────────────
# Step 2: 检查账号登录状态
# ──────────────────────────────────────────────────────────
log "🔍 检查微信账号登录状态..."

FEEDS_JSON=$(curl -s --max-time 10 "$WEWE_API/feeds" 2>/dev/null)
FEED_COUNT=$(echo "$FEEDS_JSON" | python3 -c "
import sys, json
try:
    d = json.load(sys.stdin)
    print(len(d))
except Exception:
    print(0)
" 2>/dev/null || echo "0")

if [ "$FEED_COUNT" = "0" ]; then
  MSG="⚠️ 未检测到任何微信订阅账号，请打开 http://localhost:4000 扫码登录微信读书账号"
  log "$MSG"
  osascript -e "display notification \"请打开 http://localhost:4000 扫码登录\" with title \"⚠️ WeWe 需要登录\" sound name \"Ping\"" 2>/dev/null
  log "❌ 登录检测未通过，跳过本次更新"
  exit 1
fi

# 检查是否所有 feed 的 syncTime 都超过 48 小时（可能账号已失效）
NOW_TS=$(date +%s)
STALE_COUNT=$(echo "$FEEDS_JSON" | python3 - << 'PYEOF'
import sys, json
from datetime import datetime, timezone

data = json.load(sys.stdin)
import os, time
now = time.time()
stale = 0
for feed in data:
    sync = feed.get('syncTime') or feed.get('updatedTime') or ''
    if not sync:
        stale += 1
        continue
    try:
        # syncTime 可能是毫秒时间戳或 ISO 字符串
        if str(sync).isdigit():
            ts = int(sync) / 1000 if len(str(sync)) > 11 else int(sync)
        else:
            dt = datetime.fromisoformat(str(sync).replace('Z', '+00:00'))
            ts = dt.timestamp()
        if now - ts > 48 * 3600:
            stale += 1
    except:
        stale += 1
print(stale)
PYEOF
)

log "  订阅账号总数：$FEED_COUNT，其中 $STALE_COUNT 个 syncTime 超过 48 小时"

if [ "$STALE_COUNT" = "$FEED_COUNT" ] && [ "$FEED_COUNT" -gt 0 ]; then
  MSG="⚠️ 所有 ${FEED_COUNT} 个账号均超过 48 小时未同步，微信登录可能已失效，请访问 http://localhost:4000 重新扫码"
  log "$MSG"
  osascript -e "display notification \"所有账号超48小时未同步，请重新扫码登录\" with title \"⚠️ WeWe 账号可能失效\" sound name \"Ping\"" 2>/dev/null
  # 登录失效不强制退出，仍尝试更新（可能只是同步慢）
fi

# ──────────────────────────────────────────────────────────
# Step 3: 执行快照更新 + 推送两个网页
# ──────────────────────────────────────────────────────────
log "📦 开始执行 export-snapshot.sh..."
bash "$SNAPSHOT_SH" 2>&1 | tee -a "$LOG_FILE"
EXIT_CODE=${PIPESTATUS[0]}

if [ "$EXIT_CODE" -eq 0 ]; then
  log "✅ 快照更新成功，两个网页已推送"
  osascript -e "display notification \"快照更新完成，两个 GitHub Pages 已推送\" with title \"✅ WeWe 自动更新完成\" sound name \"Glass\"" 2>/dev/null
else
  log "❌ export-snapshot.sh 执行失败（exit code: $EXIT_CODE）"
  osascript -e "display notification \"export-snapshot.sh 执行失败，请查看日志 /tmp/wewe-auto-update.log\" with title \"❌ WeWe 更新失败\" sound name \"Basso\"" 2>/dev/null
fi

log "========== 自动更新结束 =========="
