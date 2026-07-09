#!/bin/bash
# 本地 HTTP 服务 — 托管 /Users/dingding/Desktop/space 在 8888 端口
cd /Users/dingding/Desktop/space
exec /opt/homebrew/bin/python3 -m http.server 8888
