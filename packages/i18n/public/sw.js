if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return t[e]||(s=new Promise((async s=>{if("document"in self){const t=document.createElement("script");t.src=e,document.head.appendChild(t),t.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!t[e])throw new Error(`Module ${e} didn’t register its module`);return t[e]}))},s=(s,t)=>{Promise.all(s.map(e)).then((e=>t(1===e.length?e[0]:e)))},t={require:Promise.resolve(s)};self.define=(s,i,c)=>{t[s]||(t[s]=Promise.resolve().then((()=>{let t={};const n={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return t;case"module":return n;default:return e(s)}}))).then((e=>{const s=c(...e);return t.default||(t.default=s),t}))})))}}define("./sw.js",["./workbox-c3c683e6"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/SmYIDujtOTocWfQfJUTiV/_buildManifest.js",revision:"SmYIDujtOTocWfQfJUTiV"},{url:"/_next/static/SmYIDujtOTocWfQfJUTiV/_ssgManifest.js",revision:"SmYIDujtOTocWfQfJUTiV"},{url:"/_next/static/chunks/0.61d7d5ec1f48fb92e205.js",revision:"SmYIDujtOTocWfQfJUTiV"},{url:"/_next/static/chunks/165.f70aea48a2e7f339f645.js",revision:"SmYIDujtOTocWfQfJUTiV"},{url:"/_next/static/chunks/174.d3c29d3ffbb0594367cb.js",revision:"SmYIDujtOTocWfQfJUTiV"},{url:"/_next/static/chunks/184.5940d4740684c6e26029.js",revision:"SmYIDujtOTocWfQfJUTiV"},{url:"/_next/static/chunks/185.cf2f3a1dd50c77794fee.js",revision:"SmYIDujtOTocWfQfJUTiV"},{url:"/_next/static/chunks/189.805ff5707ffc38d7ca07.js",revision:"SmYIDujtOTocWfQfJUTiV"},{url:"/_next/static/chunks/19.3124fa6b9801d5c32d8f.js",revision:"SmYIDujtOTocWfQfJUTiV"},{url:"/_next/static/chunks/191.7a5ccd4be15986ca4b90.js",revision:"SmYIDujtOTocWfQfJUTiV"},{url:"/_next/static/chunks/193.a7dc63e6f1f1e55d2cba.js",revision:"SmYIDujtOTocWfQfJUTiV"},{url:"/_next/static/chunks/202.7356592f80ca895bf552.js",revision:"SmYIDujtOTocWfQfJUTiV"},{url:"/_next/static/chunks/207.45287ac098005db45a7d.js",revision:"SmYIDujtOTocWfQfJUTiV"},{url:"/_next/static/chunks/230.63b72dae721c489a1f08.js",revision:"SmYIDujtOTocWfQfJUTiV"},{url:"/_next/static/chunks/248.fb40dc56cb220ea78df1.js",revision:"SmYIDujtOTocWfQfJUTiV"},{url:"/_next/static/chunks/262.02381ad17c46378af891.js",revision:"SmYIDujtOTocWfQfJUTiV"},{url:"/_next/static/chunks/281.c3e1f9bd9cf9d07bbd02.js",revision:"SmYIDujtOTocWfQfJUTiV"},{url:"/_next/static/chunks/361.4f732c61094468e2a158.js",revision:"SmYIDujtOTocWfQfJUTiV"},{url:"/_next/static/chunks/409.6a6443fa8713d4fe8dfa.js",revision:"SmYIDujtOTocWfQfJUTiV"},{url:"/_next/static/chunks/426.8da52863cb54076ad124.js",revision:"SmYIDujtOTocWfQfJUTiV"},{url:"/_next/static/chunks/449.45adaa652dc9e54d8379.js",revision:"SmYIDujtOTocWfQfJUTiV"},{url:"/_next/static/chunks/460.bfec2c127718f92cdcf3.js",revision:"SmYIDujtOTocWfQfJUTiV"},{url:"/_next/static/chunks/466.130963c8bd7587a0240a.js",revision:"SmYIDujtOTocWfQfJUTiV"},{url:"/_next/static/chunks/487.d759a871eb7131e74465.js",revision:"SmYIDujtOTocWfQfJUTiV"},{url:"/_next/static/chunks/5.7e72652ffa450ed2793f.js",revision:"SmYIDujtOTocWfQfJUTiV"},{url:"/_next/static/chunks/54.b6e28d0e7081eb0bf1eb.js",revision:"SmYIDujtOTocWfQfJUTiV"},{url:"/_next/static/chunks/567.63e67f19da822bb1c3c5.js",revision:"SmYIDujtOTocWfQfJUTiV"},{url:"/_next/static/chunks/571.68a0759b30cd8643efee.js",revision:"SmYIDujtOTocWfQfJUTiV"},{url:"/_next/static/chunks/589.f060f377d68cb2dfe62c.js",revision:"SmYIDujtOTocWfQfJUTiV"},{url:"/_next/static/chunks/61.9c9f1f20e5430db1554c.js",revision:"SmYIDujtOTocWfQfJUTiV"},{url:"/_next/static/chunks/646.87b57a83dc9660c40396.js",revision:"SmYIDujtOTocWfQfJUTiV"},{url:"/_next/static/chunks/657.d893fe9559c0049f9c5f.js",revision:"SmYIDujtOTocWfQfJUTiV"},{url:"/_next/static/chunks/70.fdf08ad037a0b8846d3c.js",revision:"SmYIDujtOTocWfQfJUTiV"},{url:"/_next/static/chunks/758.696bdb9dde4598e14118.js",revision:"SmYIDujtOTocWfQfJUTiV"},{url:"/_next/static/chunks/818.c20cd124358c435346e3.js",revision:"SmYIDujtOTocWfQfJUTiV"},{url:"/_next/static/chunks/framework-53bbf2ce3cccafba52c2.js",revision:"SmYIDujtOTocWfQfJUTiV"},{url:"/_next/static/chunks/main-ece68e34335fa946f67d.js",revision:"SmYIDujtOTocWfQfJUTiV"},{url:"/_next/static/chunks/pages/404-21c5cc8185e09e8bff41.js",revision:"SmYIDujtOTocWfQfJUTiV"},{url:"/_next/static/chunks/pages/_app-3c91982cb52e487f7792.js",revision:"SmYIDujtOTocWfQfJUTiV"},{url:"/_next/static/chunks/pages/_error-de78862c2fc77881f7b0.js",revision:"SmYIDujtOTocWfQfJUTiV"},{url:"/_next/static/chunks/pages/index-e8a7b990bd2a651fda65.js",revision:"SmYIDujtOTocWfQfJUTiV"},{url:"/_next/static/chunks/polyfills-373fe9ae0f75336a1a0f.js",revision:"SmYIDujtOTocWfQfJUTiV"},{url:"/_next/static/chunks/webpack-2e99ea4a1e8de643ea7c.js",revision:"SmYIDujtOTocWfQfJUTiV"},{url:"/_next/static/image/src/assets/images/logo.29d7db2fe45fecf1ba66ac3712e37143.png",revision:"SmYIDujtOTocWfQfJUTiV"},{url:"/assets/icons/favicon-16x16.png",revision:"3020dc04936bc6477b47b5b7cbd67bb5"},{url:"/assets/icons/favicon-32x32.png",revision:"4573b251a522f08205d10ebf2f4ef78b"},{url:"/assets/icons/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/assets/icons/icon-192x192.png",revision:"0bac81380f41e437a35d75bca64db791"},{url:"/assets/icons/icon-256x256.png",revision:"567e404c2989c0aa57ccc155edd06e17"},{url:"/assets/icons/icon-384x384.png",revision:"c1856d092f00bf848a7107d9f0c61ce1"},{url:"/assets/icons/icon-512x512.png",revision:"992c46bd51bc091078b431a78fe2e239"},{url:"/assets/icons/maskable_icon.png",revision:"e1d6149ad475f8fc6c793745f61015a9"},{url:"/assets/images/landing/auth.svg",revision:"6e7e1cc36127b9391594399142642afd"},{url:"/assets/images/logo-dark.svg",revision:"186f30d107995b3b67833bca1c5c396f"},{url:"/assets/images/logo-light.svg",revision:"da612b4f7d3245c21a690ff4a400c5d4"},{url:"/assets/images/logo.svg",revision:"74a6f23c64267fb6456ac78eddf4b8c7"},{url:"/assets/manifest.json",revision:"d85e409b2f05c2aeeb9c33a1deec6ac7"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:t,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600,purgeOnQuotaError:!0})]}),"GET")}));