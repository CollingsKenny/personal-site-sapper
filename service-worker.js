!function(){"use strict";const t=1609447972109,e=`cache${t}`,n=["/client/client.38dfcee5.js","/client/inject_styles.5607aec6.js","/client/index.2c27648d.js","/client/about.3864c74e.js","/client/index.87cc415f.js","/client/index.46fcae8b.js","/client/[slug].1e17093e.js"].concat(["/service-worker-index.html","/PTSans-Bold.ttf","/PTSans-BoldItalic.ttf","/PTSans-Italic.ttf","/PTSans-Regular.ttf","/PTSansCaption-Bold.ttf","/PTSansCaption-Regular.ttf","/favicon.png","/global.css","/icon.svg","/images/figma_mockup.png","/images/site_outline.png","/manifest.json"]),s=new Set(n);self.addEventListener("install",(t=>{t.waitUntil(caches.open(e).then((t=>t.addAll(n))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(t=>{t.waitUntil(caches.keys().then((async t=>{for(const n of t)n!==e&&await caches.delete(n);self.clients.claim()})))})),self.addEventListener("fetch",(e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const n=new URL(e.request.url),a=n.protocol.startsWith("http"),c=n.hostname===self.location.hostname&&n.port!==self.location.port,i=n.host===self.location.host&&s.has(n.pathname),o="only-if-cached"===e.request.cache&&!i;!a||c||o||e.respondWith((async()=>i&&await caches.match(e.request)||async function(e){const n=await caches.open(`offline${t}`);try{const t=await fetch(e);return n.put(e,t.clone()),t}catch(t){const s=await n.match(e);if(s)return s;throw t}}(e.request))())}))}();
