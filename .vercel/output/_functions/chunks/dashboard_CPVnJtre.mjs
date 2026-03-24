import { c as createComponent } from './astro-component_DnMgApJP.mjs';
import 'piccolore';
import { l as createRenderInstruction, n as renderComponent, r as renderTemplate, o as renderSlot, p as renderHead, h as addAttribute, q as defineScriptVars, m as maybeRenderHead } from './entrypoint_DmW9XWMo.mjs';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-analytics", "vercel-analytics", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "/Users/pablo.suzarte/Desktop/pablosuzarte.com/node_modules/@vercel/analytics/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/pablo.suzarte/Desktop/pablosuzarte.com/node_modules/@vercel/analytics/dist/astro/index.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1, _b;
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Pablo Suzarte — Senior UX Designer & AI Collaboration Specialist",
    description = "Senior Product UX Designer — 15+ years in service design, journey orchestration, and AI collaboration. Based in Malmö, Sweden. Currently at IKEA Global.",
    lang = "en",
    ogType = "website",
    ogImage = "/pablo_profile_photo.png",
    articleDate,
    noTracking = false
  } = Astro2.props;
  const canonicalUrl = new URL(Astro2.url.pathname, "https://pablosuzarte.com").href;
  const ogImageUrl = new URL(ogImage, "https://pablosuzarte.com").href;
  return renderTemplate(_b || (_b = __template$1(["<html", '> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"', '><meta name="author" content="Pablo Suzarte"><title>', '</title><!-- Canonical URL --><link rel="canonical"', '><!-- Hreflang — i18n alternates --><link rel="alternate" hreflang="en" href="https://pablosuzarte.com/"><link rel="alternate" hreflang="sv" href="https://pablosuzarte.com/sv/"><link rel="alternate" hreflang="es" href="https://pablosuzarte.com/es/"><link rel="alternate" hreflang="x-default" href="https://pablosuzarte.com/"><!-- Open Graph --><meta property="og:type"', '><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:locale"', '><meta property="og:site_name" content="Pablo Suzarte">', "", '<!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><!-- Geo targeting --><meta name="geo.region" content="SE-M"><meta name="geo.placename" content="Malmö"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" type="image/png" href="/favicon.png"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet"><!-- Structured Data (JSON-LD) --><script type="application/ld+json">\n      {\n        "@context": "https://schema.org",\n        "@type": "Person",\n        "name": "Pablo Suzarte",\n        "jobTitle": "Senior Product UX Designer",\n        "url": "https://pablosuzarte.com",\n        "sameAs": [\n          "https://www.linkedin.com/in/pablosuzarte/"\n        ],\n        "knowsAbout": [\n          "UX Design",\n          "Service Design",\n          "User Research",\n          "Journey Mapping",\n          "Journey Orchestration",\n          "Experience Strategy",\n          "AI-Assisted Design",\n          "AI Orchestration",\n          "Project Intelligence",\n          "Human-AI Collaboration"\n        ],\n        "worksFor": {\n          "@type": "Organization",\n          "name": "IKEA Global"\n        },\n        "address": {\n          "@type": "PostalAddress",\n          "addressLocality": "Malmö",\n          "addressRegion": "Skåne",\n          "addressCountry": "SE"\n        },\n        "description": "Senior Product UX Designer with 15+ years of experience. Designs environments where humans and AI think together."\n      }\n    <\/script>', "", "</head> <body> ", " ", " </body> </html>"])), addAttribute(lang, "lang"), addAttribute(description, "content"), title, addAttribute(canonicalUrl, "href"), addAttribute(ogType, "content"), addAttribute(canonicalUrl, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(ogImageUrl, "content"), addAttribute(lang === "sv" ? "sv_SE" : lang === "es" ? "es_ES" : "en_US", "content"), articleDate && renderTemplate`<meta property="article:published_time"${addAttribute(articleDate, "content")}>`, articleDate && renderTemplate`<meta property="article:author" content="Pablo Suzarte">`, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(ogImageUrl, "content"), renderComponent($$result, "Analytics", $$Index, {}), renderHead(), renderSlot($$result, $$slots["default"]), !noTracking && renderTemplate(_a$1 || (_a$1 = __template$1(["<script>\n      (function() {\n        if (window.location.pathname.startsWith('/dashboard')) return;\n\n        var vid = localStorage.getItem('_vid');\n        if (!vid) {\n          vid = crypto.randomUUID();\n          localStorage.setItem('_vid', vid);\n        }\n\n        var path = window.location.pathname;\n        var ref = document.referrer || 'direct';\n        var ua = navigator.userAgent;\n        var device = /Mobi|Android/i.test(ua) ? 'mobile' : /Tablet|iPad/i.test(ua) ? 'tablet' : 'desktop';\n\n        function send(type, data) {\n          var payload = JSON.stringify({ type: type, path: path, data: data, vid: vid, device: device, ref: ref });\n          if (navigator.sendBeacon) {\n            navigator.sendBeacon('/api/analytics/', payload);\n          } else {\n            fetch('/api/analytics/', { method: 'POST', body: payload, keepalive: true });\n          }\n        }\n\n        // Page view\n        send('pageview', {});\n\n        // Scroll depth milestones\n        var scrollFired = {};\n        var milestones = [25, 50, 75, 100];\n        function checkScroll() {\n          var docH = document.documentElement.scrollHeight - window.innerHeight;\n          if (docH <= 0) return;\n          var pct = Math.round((window.scrollY / docH) * 100);\n          for (var i = 0; i < milestones.length; i++) {\n            var m = milestones[i];\n            if (pct >= m && !scrollFired[m]) {\n              scrollFired[m] = true;\n              send('scroll', { depth: m });\n              if (typeof window.va === 'function') window.va('event', { name: 'scroll_depth', data: { depth: m, path: path } });\n            }\n          }\n        }\n        window.addEventListener('scroll', checkScroll, { passive: true });\n\n        // Time on page milestones\n        var timeMilestones = [30, 60, 120, 300];\n        var startTime = Date.now();\n        var timeIdx = 0;\n        var timeTimer = setInterval(function() {\n          if (timeIdx >= timeMilestones.length) { clearInterval(timeTimer); return; }\n          var elapsed = Math.round((Date.now() - startTime) / 1000);\n          if (elapsed >= timeMilestones[timeIdx]) {\n            send('engage', { seconds: timeMilestones[timeIdx] });\n            if (typeof window.va === 'function') window.va('event', { name: 'time_on_page', data: { seconds: timeMilestones[timeIdx], path: path } });\n            timeIdx++;\n          }\n        }, 5000);\n      })();\n      <\/script>"]))));
}, "/Users/pablo.suzarte/Desktop/pablosuzarte.com/src/layouts/Layout.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const prerender = false;
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Dashboard;
  const PASSWORD = "";
  let authenticated = false;
  let loginError = false;
  const cookie = Astro2.cookies.get("dashboard_auth");
  if (cookie?.value === PASSWORD && PASSWORD) ;
  if (Astro2.request.method === "POST") {
    try {
      const formData = await Astro2.request.formData();
      const submitted = formData.get("password")?.toString() || "";
      if (submitted === PASSWORD && PASSWORD) ; else {
        loginError = true;
      }
    } catch {
      loginError = true;
    }
  }
  let initialData = null;
  if (authenticated) {
    try {
      const res = await fetch(new URL("/api/analytics/?days=7", Astro2.url.origin), {
        headers: { Authorization: `Bearer ${PASSWORD}` }
      });
      if (res.ok) {
        initialData = await res.json();
      }
    } catch {
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Analytics Dashboard", "noTracking": true, "data-astro-cid-3nssi2tu": true }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template(["", "<script>(function(){", `
    if (typeof initialData !== 'undefined' && initialData !== null) {
      render(initialData);
    }

    document.querySelectorAll('.range-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        document.querySelectorAll('.range-btn').forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var days = btn.getAttribute('data-days');
        fetch('/api/analytics/?days=' + days, {
          headers: { Authorization: 'Bearer ' + PASSWORD }
        })
          .then(function(r) { return r.json(); })
          .then(function(data) { render(data); })
          .catch(function() {});
      });
    });

    function render(d) {
      if (!d) return;

      var pvEl = document.getElementById('m-pv');
      var uvEl = document.getElementById('m-uv');
      var scrollEl = document.getElementById('m-scroll');
      var timeEl = document.getElementById('m-time');
      if (pvEl) pvEl.textContent = fmt(d.totalPageViews || 0);
      if (uvEl) uvEl.textContent = fmt(d.uniqueVisitors || 0);
      if (scrollEl) scrollEl.textContent = (d.avgScrollDepth || 0) + '%';
      if (timeEl) timeEl.textContent = fmtTime(d.avgEngagement || 0);

      // Top pages
      var tbody = document.getElementById('tb-pages');
      if (tbody && d.topPages && d.topPages.length > 0) {
        tbody.innerHTML = d.topPages.map(function(p) {
          return '<tr><td class="page-path">' + esc(p[0]) + '</td><td class="num">' + fmt(p[1]) + '</td></tr>';
        }).join('');
      } else if (tbody) {
        tbody.innerHTML = '<tr><td colspan="2" class="empty-state">No data yet</td></tr>';
      }

      // Sources
      var stbody = document.getElementById('tb-sources');
      if (stbody && d.topSources && d.topSources.length > 0) {
        stbody.innerHTML = d.topSources.map(function(s) {
          return '<tr><td>' + esc(s[0]) + '</td><td class="num">' + fmt(s[1]) + '</td></tr>';
        }).join('');
      } else if (stbody) {
        stbody.innerHTML = '<tr><td colspan="2" class="empty-state">No data yet</td></tr>';
      }

      // Scroll depth bars
      if (d.scrollDepth) {
        var sMax = Math.max(d.scrollDepth['25'] || 0, d.scrollDepth['50'] || 0, d.scrollDepth['75'] || 0, d.scrollDepth['100'] || 0, 1);
        setBar('bar-s25', 'bv-s25', d.scrollDepth['25'] || 0, sMax);
        setBar('bar-s50', 'bv-s50', d.scrollDepth['50'] || 0, sMax);
        setBar('bar-s75', 'bv-s75', d.scrollDepth['75'] || 0, sMax);
        setBar('bar-s100', 'bv-s100', d.scrollDepth['100'] || 0, sMax);
      }

      // Engagement bars
      if (d.engagement) {
        var eMax = Math.max(d.engagement['30'] || 0, d.engagement['60'] || 0, d.engagement['120'] || 0, d.engagement['300'] || 0, 1);
        setBar('bar-e30', 'bv-e30', d.engagement['30'] || 0, eMax);
        setBar('bar-e60', 'bv-e60', d.engagement['60'] || 0, eMax);
        setBar('bar-e120', 'bv-e120', d.engagement['120'] || 0, eMax);
        setBar('bar-e300', 'bv-e300', d.engagement['300'] || 0, eMax);
      }

      // Device bars
      if (d.devices) {
        var dMax = Math.max(d.devices.desktop || 0, d.devices.mobile || 0, d.devices.tablet || 0, 1);
        setBar('bar-desktop', 'bv-desktop', d.devices.desktop || 0, dMax);
        setBar('bar-mobile', 'bv-mobile', d.devices.mobile || 0, dMax);
        setBar('bar-tablet', 'bv-tablet', d.devices.tablet || 0, dMax);
      }
    }

    function setBar(barId, valId, val, max) {
      var bar = document.getElementById(barId);
      var valEl = document.getElementById(valId);
      if (bar) bar.style.width = Math.round((val / max) * 100) + '%';
      if (valEl) valEl.textContent = fmt(val);
    }

    function fmt(n) {
      return n.toLocaleString('en-US');
    }

    function fmtTime(s) {
      if (s < 60) return s + 's';
      var m = Math.floor(s / 60);
      var rem = s % 60;
      return m + 'm ' + rem + 's';
    }

    function esc(str) {
      var div = document.createElement('div');
      div.textContent = str;
      return div.innerHTML;
    }
  })();</script> `])), !authenticated ? renderTemplate`${maybeRenderHead()}<div class="login-wrapper" data-astro-cid-3nssi2tu> <form class="login-card" method="POST" data-astro-cid-3nssi2tu> <h1 class="login-title" data-astro-cid-3nssi2tu>Analytics</h1> <p class="login-subtitle" data-astro-cid-3nssi2tu>Enter password to continue</p> ${loginError && renderTemplate`<p class="login-error" data-astro-cid-3nssi2tu>Wrong password</p>`} <input type="password" name="password" class="login-input" placeholder="Password" autofocus required data-astro-cid-3nssi2tu> <button type="submit" class="login-btn" data-astro-cid-3nssi2tu>Sign in</button> </form> </div>` : renderTemplate`<div class="dash" data-astro-cid-3nssi2tu> <header class="dash-header" data-astro-cid-3nssi2tu> <div class="dash-header-left" data-astro-cid-3nssi2tu> <h1 class="dash-title" data-astro-cid-3nssi2tu>Analytics</h1> <a href="/" class="dash-back" data-astro-cid-3nssi2tu>Back to site</a> </div> <div class="dash-range" data-astro-cid-3nssi2tu> <button class="range-btn active" data-days="7" data-astro-cid-3nssi2tu>7d</button> <button class="range-btn" data-days="30" data-astro-cid-3nssi2tu>30d</button> <button class="range-btn" data-days="90" data-astro-cid-3nssi2tu>90d</button> </div> </header> <div class="metrics-row" id="metrics-row" data-astro-cid-3nssi2tu> <div class="metric-card" data-astro-cid-3nssi2tu> <span class="metric-label" data-astro-cid-3nssi2tu>Page Views</span> <span class="metric-value" id="m-pv" data-astro-cid-3nssi2tu>--</span> </div> <div class="metric-card" data-astro-cid-3nssi2tu> <span class="metric-label" data-astro-cid-3nssi2tu>Unique Visitors</span> <span class="metric-value" id="m-uv" data-astro-cid-3nssi2tu>--</span> </div> <div class="metric-card" data-astro-cid-3nssi2tu> <span class="metric-label" data-astro-cid-3nssi2tu>Avg Scroll Depth</span> <span class="metric-value" id="m-scroll" data-astro-cid-3nssi2tu>--</span> </div> <div class="metric-card" data-astro-cid-3nssi2tu> <span class="metric-label" data-astro-cid-3nssi2tu>Avg Time on Page</span> <span class="metric-value" id="m-time" data-astro-cid-3nssi2tu>--</span> </div> </div> <div class="grid-2col" id="main-grid" data-astro-cid-3nssi2tu> <div class="panel" data-astro-cid-3nssi2tu> <h2 class="panel-title" data-astro-cid-3nssi2tu>Top Pages</h2> <table class="data-table" id="t-pages" data-astro-cid-3nssi2tu> <thead data-astro-cid-3nssi2tu><tr data-astro-cid-3nssi2tu><th data-astro-cid-3nssi2tu>Page</th><th data-astro-cid-3nssi2tu>Views</th></tr></thead> <tbody id="tb-pages" data-astro-cid-3nssi2tu> <tr data-astro-cid-3nssi2tu><td colspan="2" class="empty-state" data-astro-cid-3nssi2tu>No data yet</td></tr> </tbody> </table> </div> <div class="panel" data-astro-cid-3nssi2tu> <h2 class="panel-title" data-astro-cid-3nssi2tu>Scroll Depth</h2> <div class="bars" id="bars-scroll" data-astro-cid-3nssi2tu> <div class="bar-row" data-astro-cid-3nssi2tu><span class="bar-label" data-astro-cid-3nssi2tu>25%</span><div class="bar-track" data-astro-cid-3nssi2tu><div class="bar-fill" id="bar-s25" data-astro-cid-3nssi2tu></div></div><span class="bar-val" id="bv-s25" data-astro-cid-3nssi2tu>0</span></div> <div class="bar-row" data-astro-cid-3nssi2tu><span class="bar-label" data-astro-cid-3nssi2tu>50%</span><div class="bar-track" data-astro-cid-3nssi2tu><div class="bar-fill" id="bar-s50" data-astro-cid-3nssi2tu></div></div><span class="bar-val" id="bv-s50" data-astro-cid-3nssi2tu>0</span></div> <div class="bar-row" data-astro-cid-3nssi2tu><span class="bar-label" data-astro-cid-3nssi2tu>75%</span><div class="bar-track" data-astro-cid-3nssi2tu><div class="bar-fill" id="bar-s75" data-astro-cid-3nssi2tu></div></div><span class="bar-val" id="bv-s75" data-astro-cid-3nssi2tu>0</span></div> <div class="bar-row" data-astro-cid-3nssi2tu><span class="bar-label" data-astro-cid-3nssi2tu>100%</span><div class="bar-track" data-astro-cid-3nssi2tu><div class="bar-fill" id="bar-s100" data-astro-cid-3nssi2tu></div></div><span class="bar-val" id="bv-s100" data-astro-cid-3nssi2tu>0</span></div> </div> </div> <div class="panel" data-astro-cid-3nssi2tu> <h2 class="panel-title" data-astro-cid-3nssi2tu>Traffic Sources</h2> <table class="data-table" id="t-sources" data-astro-cid-3nssi2tu> <thead data-astro-cid-3nssi2tu><tr data-astro-cid-3nssi2tu><th data-astro-cid-3nssi2tu>Source</th><th data-astro-cid-3nssi2tu>Visits</th></tr></thead> <tbody id="tb-sources" data-astro-cid-3nssi2tu> <tr data-astro-cid-3nssi2tu><td colspan="2" class="empty-state" data-astro-cid-3nssi2tu>No data yet</td></tr> </tbody> </table> </div> <div class="panel" data-astro-cid-3nssi2tu> <h2 class="panel-title" data-astro-cid-3nssi2tu>Engagement Time</h2> <div class="bars" id="bars-engage" data-astro-cid-3nssi2tu> <div class="bar-row" data-astro-cid-3nssi2tu><span class="bar-label" data-astro-cid-3nssi2tu>30s</span><div class="bar-track" data-astro-cid-3nssi2tu><div class="bar-fill" id="bar-e30" data-astro-cid-3nssi2tu></div></div><span class="bar-val" id="bv-e30" data-astro-cid-3nssi2tu>0</span></div> <div class="bar-row" data-astro-cid-3nssi2tu><span class="bar-label" data-astro-cid-3nssi2tu>60s</span><div class="bar-track" data-astro-cid-3nssi2tu><div class="bar-fill" id="bar-e60" data-astro-cid-3nssi2tu></div></div><span class="bar-val" id="bv-e60" data-astro-cid-3nssi2tu>0</span></div> <div class="bar-row" data-astro-cid-3nssi2tu><span class="bar-label" data-astro-cid-3nssi2tu>2m</span><div class="bar-track" data-astro-cid-3nssi2tu><div class="bar-fill" id="bar-e120" data-astro-cid-3nssi2tu></div></div><span class="bar-val" id="bv-e120" data-astro-cid-3nssi2tu>0</span></div> <div class="bar-row" data-astro-cid-3nssi2tu><span class="bar-label" data-astro-cid-3nssi2tu>5m</span><div class="bar-track" data-astro-cid-3nssi2tu><div class="bar-fill" id="bar-e300" data-astro-cid-3nssi2tu></div></div><span class="bar-val" id="bv-e300" data-astro-cid-3nssi2tu>0</span></div> </div> </div> </div> <div class="device-row" id="device-row" data-astro-cid-3nssi2tu> <h2 class="panel-title" data-astro-cid-3nssi2tu>Devices</h2> <div class="device-bars" id="device-bars" data-astro-cid-3nssi2tu> <div class="device-item" data-astro-cid-3nssi2tu> <span class="device-label" data-astro-cid-3nssi2tu>Desktop</span> <div class="bar-track" data-astro-cid-3nssi2tu><div class="bar-fill" id="bar-desktop" data-astro-cid-3nssi2tu></div></div> <span class="bar-val" id="bv-desktop" data-astro-cid-3nssi2tu>0</span> </div> <div class="device-item" data-astro-cid-3nssi2tu> <span class="device-label" data-astro-cid-3nssi2tu>Mobile</span> <div class="bar-track" data-astro-cid-3nssi2tu><div class="bar-fill" id="bar-mobile" data-astro-cid-3nssi2tu></div></div> <span class="bar-val" id="bv-mobile" data-astro-cid-3nssi2tu>0</span> </div> <div class="device-item" data-astro-cid-3nssi2tu> <span class="device-label" data-astro-cid-3nssi2tu>Tablet</span> <div class="bar-track" data-astro-cid-3nssi2tu><div class="bar-fill" id="bar-tablet" data-astro-cid-3nssi2tu></div></div> <span class="bar-val" id="bv-tablet" data-astro-cid-3nssi2tu>0</span> </div> </div> </div> <footer class="dash-footer" data-astro-cid-3nssi2tu> <a href="https://vercel.com/analytics" target="_blank" rel="noopener" data-astro-cid-3nssi2tu>Vercel Analytics Dashboard</a> </footer> </div>`, defineScriptVars({ initialData, PASSWORD })) })}`;
}, "/Users/pablo.suzarte/Desktop/pablosuzarte.com/src/pages/dashboard.astro", void 0);
const $$file = "/Users/pablo.suzarte/Desktop/pablosuzarte.com/src/pages/dashboard.astro";
const $$url = "/dashboard/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
