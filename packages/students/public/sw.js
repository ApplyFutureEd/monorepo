if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let e=Promise.resolve();return c[s]||(e=new Promise((async e=>{if("document"in self){const c=document.createElement("script");c.src=s,document.head.appendChild(c),c.onload=e}else importScripts(s),e()}))),e.then((()=>{if(!c[s])throw new Error(`Module ${s} didn’t register its module`);return c[s]}))},e=(e,c)=>{Promise.all(e.map(s)).then((s=>c(1===s.length?s[0]:s)))},c={require:Promise.resolve(e)};self.define=(e,a,i)=>{c[e]||(c[e]=Promise.resolve().then((()=>{let c={};const n={uri:location.origin+e.slice(1)};return Promise.all(a.map((e=>{switch(e){case"exports":return c;case"module":return n;default:return s(e)}}))).then((s=>{const e=i(...s);return c.default||(c.default=e),c}))})))}}define("./sw.js",["./workbox-32faf1bf"],(function(s){"use strict";importScripts(),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"/_next//static/media/landing-hero.17fbdf72.png",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next//static/media/landing-process.47fe3155.png",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next//static/media/landing-recruiters.707fe9a7.png",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next//static/media/landing-schools.539ae794.png",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next//static/media/logo.3ee44791.png",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next//static/media/partners-logo-ducasse.458b997b.png",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next//static/media/partners-logo-glion.4a30fd49.png",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next//static/media/partners-logo-larochelle.1fb7d1d5.png",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next//static/media/partners-logo-lesroches.c8239445.png",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next//static/media/partners-logo-scbs.c4a885d7.png",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next//static/media/partners-logo-supdeluxe.dfe48e66.png",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next//static/media/people.97e1c7b3.png",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/server/middleware-manifest.json",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/1140.87f824f4e43de9bc.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/1526.6ba883a9bcb57a42.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/1608-f25cea3a9c457ae0.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/1763.0d0f712b4110a648.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/189.d48a2088b55c7b9e.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/2431.b86ecd81bacea342.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/2923.aaaf072efdfc06a6.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/3072.e677a6789928d38a.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/3207.093d483432c7ac5b.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/3367.25217dd545ce332d.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/3799.248b3b73407eb9fd.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/3832.bcc87ac5a0c4466a.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/4028.69a645097cb01500.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/4242.cad6ad46b399fda0.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/4261-87fb40631a5c6ad5.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/4373.4d30dbc7c2f63534.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/4400.0e2835cd83512ec3.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/4568-742ef74159e19fdd.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/4571.bf7c5d9fe140e7a3.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/4579-10a0e614237e7038.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/464.fd10046da3c38b93.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/4831.4858e0b4cbad88ed.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/4873-f0852b6020ab180a.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/5153-0d909f511a97bab5.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/5167.c0c563dd80edcf50.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/5921.dd729e65c0312332.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/6003-dce34f0c3c4d6ab6.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/6013.902e698585a4a5cb.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/6014.3445c8055910e4ea.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/6215.58b165ae83c0e77d.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/6295.e5b80e6a86054512.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/6387.6efc14e740ccdb2b.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/6671.a923fbe4f97a67b0.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/6756-6e719d19b00badfa.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/7542.92acf24a58c4e3a3.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/7739.b318c354fca8f64d.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/8382.62f3344d20f7c729.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/86.9517a104cca72613.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/8690-237accada01e1b45.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/9093.44892bbb8ee7805d.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/9406.7679366371dadd7d.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/9504-8a956ad2a3b22741.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/9761.829663149abbb1ad.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/9818.e5839ddcd304126f.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/9823.361943483ce29871.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/9942.fffb2dafbd653622.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/a9a7754c-c613061ee64e0c0e.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/c943faba-d5c5fc19af94572a.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/ec1189df-eb454ca9696191c7.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/framework-c8e1226e78b7c0de.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/main-57b61a41a5520497.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/pages/404-d45ed0b50afcc3f6.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/pages/_error-20e93104fad83d22.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/pages/about-a60e54c73646ad3e.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/pages/applications-8573fc50067eacd7.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/pages/applications/%5Bid%5D/fees-payment-81b65ff6f292bb71.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/pages/applications/%5Bid%5D/review-documents-e3a216b8c942e570.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/pages/applications/%5Bid%5D/submission-4ddc91b76699d2c1.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/pages/applications/%5Bid%5D/upload-documents-11b80af3b6b6a895.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/pages/applications/%5Bid%5D/upload-missing-documents-5ec7dc61b822ce76.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/pages/blog-1dda035746c42f34.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/pages/blog/%5Bslug%5D-05eeba6c01407171.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/pages/careers-31b38700975fbbbc.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/pages/confirm-account-95e30aba4731e2da.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/pages/confirm-forgot-password-8b4686e715de8f3e.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/pages/forgot-password-9e3314f5d0d2da44.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/pages/help-e5b5e2c2111e86f4.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/pages/index-5ecaa3385e6cbd54.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/pages/new-password-aba228010dc847ee.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/pages/onboarding/country-3be564644f435b34.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/pages/onboarding/degree-df3f7ae7b659510d.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/pages/onboarding/discipline-fe5129d588c656a5.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/pages/onboarding/highest-education-level-53ec850dbf364b81.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/pages/onboarding/suggestions-ee212c470d37d5dc.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/pages/privacy-policy-d561ddf11da25333.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/pages/profile/background-information-af920ae576d6001f.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/pages/profile/education-history-a294c22a9affae0e.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/pages/profile/general-information-2f16521d900b3736.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/pages/profile/test-scores-a2aa9fa3589c0bca.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/pages/profile/upload-documents-dcc8fa113feebd77.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/pages/programs-636acbdbf14f6226.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/pages/programs/%5Bslug%5D-2f15575030121cf4.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/pages/recruiters-afddc6c09915c321.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/pages/schools-aa6078544b494970.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/pages/schools/%5Bslug%5D-29796647d74ad1e5.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/pages/sign-in-3032543cb03757f5.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/pages/sign-up-5d6c5ab8e770d100.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/pages/terms-and-conditions-001ce079db32835f.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/pages/terms-of-use-cd20b88d9ff8984c.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/chunks/webpack-6592dd4cc7f393a7.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/css/4067031497e7781d.css",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/ltXlcKoPr28cFua4Ez8F4/_buildManifest.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/ltXlcKoPr28cFua4Ez8F4/_middlewareManifest.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/_next/static/ltXlcKoPr28cFua4Ez8F4/_ssgManifest.js",revision:"ltXlcKoPr28cFua4Ez8F4"},{url:"/assets/icons/favicon-16x16.png",revision:"3020dc04936bc6477b47b5b7cbd67bb5"},{url:"/assets/icons/favicon-32x32.png",revision:"4573b251a522f08205d10ebf2f4ef78b"},{url:"/assets/icons/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/assets/icons/icon-192x192.png",revision:"0bac81380f41e437a35d75bca64db791"},{url:"/assets/icons/icon-256x256.png",revision:"567e404c2989c0aa57ccc155edd06e17"},{url:"/assets/icons/icon-384x384.png",revision:"c1856d092f00bf848a7107d9f0c61ce1"},{url:"/assets/icons/icon-512x512.png",revision:"992c46bd51bc091078b431a78fe2e239"},{url:"/assets/icons/maskable_icon.png",revision:"e1d6149ad475f8fc6c793745f61015a9"},{url:"/assets/images/application/close.svg",revision:"e12441d21317ddef2d7367ea943d51f0"},{url:"/assets/images/application/no-new-notifications.svg",revision:"e8eb710f4e551cf027cf86329442e547"},{url:"/assets/images/application/submission.svg",revision:"57ccc18d43b3278667256fcf58f8f0f0"},{url:"/assets/images/blog/people.svg",revision:"afe0521418c54919489dc13944175d24"},{url:"/assets/images/careers/perks.svg",revision:"7cb077b406b83c2a61fc1c8cc529e57f"},{url:"/assets/images/careers/perks1.svg",revision:"57e37acd2065e68a6facc58bd3890acb"},{url:"/assets/images/careers/perks2.svg",revision:"433459d49c7919f40c73724255ca5c4e"},{url:"/assets/images/careers/perks3.svg",revision:"bb036394fa4c851030f18a71b8810f7e"},{url:"/assets/images/landing/about.svg",revision:"01237fad9a4e5b46fea6c69a73b6dab2"},{url:"/assets/images/landing/auth.svg",revision:"6e7e1cc36127b9391594399142642afd"},{url:"/assets/images/landing/landing-arguments.svg",revision:"74f026855ba8724eb8c39108519f2c03"},{url:"/assets/images/landing/landing-hero.svg",revision:"7eeff9021ae0f4d05f54a02b2bce5868"},{url:"/assets/images/landing/landing-process.svg",revision:"bb2c34c8a63b6084c69709025cd629db"},{url:"/assets/images/landing/landing-recruiters.svg",revision:"ab15ab42734efa450fa2f0fbdedfe1b1"},{url:"/assets/images/landing/landing-schools.svg",revision:"a12d19ad1ec64e9734c37b6ab9ef0f20"},{url:"/assets/images/landing/landing-students.svg",revision:"9777a3f51504323d14f5350b8dd9187b"},{url:"/assets/images/landing/partners-logo-ducasse.svg",revision:"8fbf10af903d680149d3476dea3cdabf"},{url:"/assets/images/landing/partners-logo-glion.svg",revision:"05d4a4e71ed7a64d27c136f098bf3921"},{url:"/assets/images/landing/partners-logo-larochelle.png",revision:"715fa3da780af9e8da80ff8aaba2d2a0"},{url:"/assets/images/landing/partners-logo-lesroches.svg",revision:"93a2f09a52c538add2a44befc5c01f44"},{url:"/assets/images/landing/partners-logo-scbs.png",revision:"1944498e2a083039a6e567426a1593f7"},{url:"/assets/images/landing/partners-logo-supdeluxe.png",revision:"df830b13edb2f1c55ed9173948380191"},{url:"/assets/images/landing/recruiters-form.svg",revision:"bb8476b2984eeb7746e75139664edc98"},{url:"/assets/images/logo-dark.svg",revision:"186f30d107995b3b67833bca1c5c396f"},{url:"/assets/images/logo-light.svg",revision:"da612b4f7d3245c21a690ff4a400c5d4"},{url:"/assets/images/logo.svg",revision:"74a6f23c64267fb6456ac78eddf4b8c7"},{url:"/assets/images/onboarding/country.svg",revision:"0fdde37571edf269bb2eae1981059592"},{url:"/assets/images/onboarding/degree.svg",revision:"6eca13269d256a8d4b665f8eac314478"},{url:"/assets/images/onboarding/education-level.svg",revision:"a7173c7cac6ecde6f9a631356b6f69da"},{url:"/assets/images/onboarding/profile-picture.jpg",revision:"e2421fbec3d9653ff816c804f03d669c"},{url:"/assets/images/onboarding/x.css",revision:"38e9e33bb549c96f9c0125b3874d8e93"},{url:"/assets/images/profile/complete-your-profile.svg",revision:"69d5147f2c45969bd7d2152bdf6d08be"},{url:"/assets/images/profile/congrats.svg",revision:"b50f8f6cb2e661a44a987b08650d2281"},{url:"/locales/en/account.json",revision:"774114e68bf3be11dc4b79ec5e0429f2"},{url:"/locales/en/application.json",revision:"8aee15d627299ffbb366e9048246a751"},{url:"/locales/en/auth.json",revision:"04b564fbbe8b4fda743eeb89e58a82b3"},{url:"/locales/en/common.json",revision:"b0736bf5b2dbcb402bc54f9cb33dc94e"},{url:"/locales/en/help.json",revision:"a9b3704b3af39bb16dbe13ecbf34d7ba"},{url:"/locales/en/landing.json",revision:"c4bde35061a34710fad235dbd5533f25"},{url:"/locales/en/navigation.json",revision:"3302a4db63439de74f78fac382cf235a"},{url:"/locales/en/profile.json",revision:"ba45a6abbd0c5406bdcd6a03adc0cd8d"},{url:"/locales/en/programs.json",revision:"68834f1a39fdc4558c4db7417cb11336"},{url:"/locales/en/recruiter-form.json",revision:"c3e5436601a29411ec823b1cea169150"},{url:"/locales/en/schools.json",revision:"d72ccea108750d5725364373ae60e64a"},{url:"/locales/fr/account.json",revision:"51011f515ca30f2d517f67b706989ff2"},{url:"/locales/fr/application.json",revision:"0a2a85cc6480c17e1657ed978f8c927e"},{url:"/locales/fr/auth.json",revision:"0b8764c4110d3ec05a6fe12d808745aa"},{url:"/locales/fr/common.json",revision:"11d837bb92b4d2bff44a6f5363948886"},{url:"/locales/fr/help.json",revision:"c0b1911febaeb0f849868e712217ddcc"},{url:"/locales/fr/landing.json",revision:"e2728182ac39a71d54b12e45609a9cb3"},{url:"/locales/fr/navigation.json",revision:"121996c7b0e7f695efbdebacc844b70f"},{url:"/locales/fr/profile.json",revision:"fdb2809e7e7fb82d779137823816cae2"},{url:"/locales/fr/programs.json",revision:"2a105360767b8dff3a20c403a10109af"},{url:"/locales/fr/recruiter-form.json",revision:"371c82517d199da185e1223e6ec6a544"},{url:"/locales/fr/schools.json",revision:"45f621fbece0536b868c03a1d6eaa6c6"},{url:"/locales/zh/account.json",revision:"72b40256a123f9ce1ebbc8e4a4214e60"},{url:"/locales/zh/application.json",revision:"ac8c97ee9793f3ebcb0b96fdb09215c3"},{url:"/locales/zh/auth.json",revision:"3989c5d04cbd6464016e51b84f9eb92c"},{url:"/locales/zh/common.json",revision:"84dd63986c85aa9ebb34e40b90c2722c"},{url:"/locales/zh/help.json",revision:"75bbee2ae3ec89e1ae44193def706e8d"},{url:"/locales/zh/landing.json",revision:"603bff908acf0b423b70503eea1893ed"},{url:"/locales/zh/navigation.json",revision:"593fb71c126c8e64523c06818d562090"},{url:"/locales/zh/profile.json",revision:"ad2fd54e1ed26996555251ba22a4212e"},{url:"/locales/zh/programs.json",revision:"b859e275d4cbad779dc1f5d6a3eb814d"},{url:"/locales/zh/recruiter-form.json",revision:"3ac4d7615f7a52841a363b5acbaa8dfe"},{url:"/locales/zh/schools.json",revision:"82053da2b998b932125074754b7eeba4"},{url:"/manifest.json",revision:"e2367e75ba52c2baeda4d14dc8859359"},{url:"/robots.txt",revision:"1e433b1c4f862289f56fbeef2f49e1b2"},{url:"/sitemap.xml",revision:"2bca68b29b303412fd807caed4158c20"}],{ignoreURLParametersMatching:[]}),s.cleanupOutdatedCaches(),s.registerRoute("/",new s.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:s,response:e,event:c,state:a})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),s.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new s.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),s.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new s.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),s.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new s.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),s.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new s.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new s.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\/_next\/image\?url=.+$/i,new s.StaleWhileRevalidate({cacheName:"next-image",plugins:[new s.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:mp3|mp4)$/i,new s.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:js)$/i,new s.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:css|less)$/i,new s.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new s.StaleWhileRevalidate({cacheName:"next-data",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:json|xml|csv)$/i,new s.NetworkFirst({cacheName:"static-data-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>{if(!(self.origin===s.origin))return!1;const e=s.pathname;return!e.startsWith("/api/auth/")&&!!e.startsWith("/api/")}),new s.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>{if(!(self.origin===s.origin))return!1;return!s.pathname.startsWith("/api/")}),new s.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>!(self.origin===s.origin)),new s.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
