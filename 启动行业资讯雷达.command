#!/bin/zsh
# ============================================================
# 行业资讯雷达 一键启动脚本（含自动重启）
# ============================================================

SPACE_DIR="$HOME/Desktop/space"
WEWE_DIR="$SPACE_DIR/wewe-rss"
PAGE_PORT=8888
WEWE_PORT=4000

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo ""
echo "🚀 行业资讯雷达 启动中..."
echo "============================================================"

kill_port() {
  local port=$1
  local pid=$(lsof -ti tcp:$port 2>/dev/null)
  if [ -n "$pid" ]; then
    echo "${YELLOW}⚠️  端口 $port 被占用（PID: $pid），释放中…${NC}"
    kill -9 $pid 2>/dev/null
    sleep 1
  fi
}

kill_port $WEWE_PORT
kill_port $PAGE_PORT

# ── 启动本地页面服务 ────────────────────────────────────────
echo "${BLUE}[1/2] 启动页面服务（:${PAGE_PORT}）…${NC}"
python3 -m http.server $PAGE_PORT --directory "$SPACE_DIR" > /tmp/radar-page.log 2>&1 &
PAGE_PID=$!

# ── WeWe RSS 自动重启守护函数 ──────────────────────────────
start_wewe() {
  cd "$WEWE_DIR"
  pnpm start:server > /tmp/wewe-server.log 2>&1 &
  echo $!
}

echo "${BLUE}[2/2] 启动 WeWe RSS（:${WEWE_PORT}）…${NC}"
WEWE_PID=$(start_wewe)

# 等待就绪
for i in {1..20}; do
  if curl -s "http://localhost:$WEWE_PORT" > /dev/null 2>&1; then
    break
  fi
  sleep 1
done

RADAR_URL="http://localhost:${PAGE_PORT}/competitor-monitor.html"
echo ""
echo "${GREEN}============================================================${NC}"
echo "${GREEN}✅ 启动成功！${NC}"
echo "${GREEN}   📡 WeWe RSS:  http://localhost:${WEWE_PORT}${NC}"
echo "${GREEN}   🔭 资讯雷达:  ${RADAR_URL}${NC}"
echo "${GREEN}============================================================${NC}"
echo ""

open "$RADAR_URL"

# ── 守护进程：WeWe RSS 崩溃自动重启 ──────────────────────
echo "🛡️  守护进程启动（WeWe RSS 崩溃时自动重启）"
echo "（关闭此窗口停止所有服务）"
echo ""

trap "echo ''; echo '🛑 停止中…'; kill $WEWE_PID $PAGE_PID 2>/dev/null; exit 0" INT TERM

while true; do
  if ! kill -0 $WEWE_PID 2>/dev/null; then
    echo "${YELLOW}⚠️  WeWe RSS 已停止，5 秒后自动重启…${NC}"
    sleep 5
    WEWE_PID=$(start_wewe)
    echo "${GREEN}✅ WeWe RSS 已重启（PID: $WEWE_PID）${NC}"
  fi
  sleep 3
done
