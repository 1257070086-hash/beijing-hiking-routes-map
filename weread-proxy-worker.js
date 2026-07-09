/**
 * Cloudflare Worker: WeRead API 反向代理
 * 用途：中转 Railway 上 WeWe RSS 发出的微信读书 API 请求
 * 目标：i.weread.qq.com
 *
 * 部署后，在 Railway wewe-rss 环境变量中设置：
 *   WEREAD_BASE_URL=https://你的worker名.你的子域.workers.dev
 */

const WEREAD_HOST = 'i.weread.qq.com';
const WEREAD_ORIGIN = `https://${WEREAD_HOST}`;

// 允许的来源（Railway 服务地址），防止被滥用
// 设为空数组表示允许所有来源（部署后可按需限制）
const ALLOWED_ORIGINS = [];

export default {
  async fetch(request, env, ctx) {
    // 处理 CORS 预检请求
    if (request.method === 'OPTIONS') {
      return handleOptions(request);
    }

    const url = new URL(request.url);

    // 健康检查端点
    if (url.pathname === '/health') {
      return new Response(JSON.stringify({ status: 'ok', proxy: WEREAD_HOST }), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // 来源检查（可选）
    const origin = request.headers.get('Origin');
    if (ALLOWED_ORIGINS.length > 0 && origin && !ALLOWED_ORIGINS.includes(origin)) {
      return new Response('Forbidden', { status: 403 });
    }

    // 构建目标 URL：把请求路径转发到微信读书
    const targetUrl = `${WEREAD_ORIGIN}${url.pathname}${url.search}`;

    // 复制请求头，替换 Host
    const headers = new Headers(request.headers);
    headers.set('Host', WEREAD_HOST);
    headers.set('Origin', WEREAD_ORIGIN);
    headers.set('Referer', WEREAD_ORIGIN + '/');

    // 移除 CF 特有的头
    headers.delete('cf-connecting-ip');
    headers.delete('cf-ipcountry');
    headers.delete('cf-ray');
    headers.delete('cf-visitor');
    headers.delete('x-forwarded-for');
    headers.delete('x-real-ip');

    // 转发请求
    let proxyRequest;
    if (request.method === 'GET' || request.method === 'HEAD') {
      proxyRequest = new Request(targetUrl, {
        method: request.method,
        headers: headers,
      });
    } else {
      const body = await request.arrayBuffer();
      proxyRequest = new Request(targetUrl, {
        method: request.method,
        headers: headers,
        body: body,
      });
    }

    try {
      const response = await fetch(proxyRequest);

      // 复制响应头
      const respHeaders = new Headers(response.headers);
      // 添加 CORS 头
      respHeaders.set('Access-Control-Allow-Origin', origin || '*');
      respHeaders.set('Access-Control-Allow-Credentials', 'true');
      // 移除可能导致问题的头
      respHeaders.delete('content-encoding');

      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: respHeaders,
      });
    } catch (err) {
      return new Response(
        JSON.stringify({ error: 'Proxy error', message: err.message }),
        {
          status: 502,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
  },
};

function handleOptions(request) {
  const origin = request.headers.get('Origin') || '*';
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': request.headers.get('Access-Control-Request-Headers') || '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Max-Age': '86400',
    },
  });
}
