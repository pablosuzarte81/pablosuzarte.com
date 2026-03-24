import '@upstash/redis';

const prerender = false;
function getRedis() {
  return null;
}
function today() {
  return (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
}
function parseRef(raw) {
  if (!raw || raw === "direct") return "direct";
  try {
    const hostname = new URL(raw).hostname.replace("www.", "");
    return hostname || "direct";
  } catch {
    return "direct";
  }
}
const POST = async ({ request }) => {
  const redis = getRedis();
  if (!redis) {
    return new Response(JSON.stringify({ ok: false, error: "Redis not configured" }), { status: 503 });
  }
  try {
    const body = await request.json();
    const { type, path, data, vid, device, ref } = body;
    const date = today();
    if (!type || !path) {
      return new Response(JSON.stringify({ ok: false, error: "Missing type or path" }), { status: 400 });
    }
    const pipeline = redis.pipeline();
    if (type === "pageview") {
      pipeline.zincrby(`pv:${date}`, 1, path);
      if (vid) pipeline.sadd(`visitors:${date}`, vid);
      if (ref) pipeline.zincrby(`ref:${date}`, 1, parseRef(ref));
      if (device) pipeline.hincrby(`device:${date}`, device, 1);
    } else if (type === "scroll") {
      const depth = data?.depth;
      if (depth) {
        pipeline.hincrby(`scroll:${date}`, `${path}:${depth}`, 1);
      }
    } else if (type === "engage") {
      const seconds = data?.seconds;
      if (seconds) {
        pipeline.hincrby(`engage:${date}`, `${path}:${seconds}`, 1);
      }
    }
    await pipeline.exec();
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: "Server error" }), { status: 500 });
  }
};
const GET = async ({ request }) => {
  request.headers.get("Authorization");
  {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
