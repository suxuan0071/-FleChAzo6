/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "9d280b9b442898446ee062a5f8fe1b46"
  },
  {
    "url": "about.html",
    "revision": "cc3ca761cd09215192cd13916eba2a6c"
  },
  {
    "url": "assets/css/0.styles.99fe3955.css",
    "revision": "75d7671587f7cc3eead6a3374ef3a5ba"
  },
  {
    "url": "assets/img/hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.62e2f0b6.js",
    "revision": "47de9730a1f31c703ba4893490f95f5a"
  },
  {
    "url": "assets/js/11.b9928151.js",
    "revision": "3f90813ddf86f0b1a349002c7db10905"
  },
  {
    "url": "assets/js/2.22642d5c.js",
    "revision": "57bec00aed2752416e4d0c1ff01c64bc"
  },
  {
    "url": "assets/js/3.0eecfdf4.js",
    "revision": "5d3fc1fc854eca19c5011956e470e16f"
  },
  {
    "url": "assets/js/4.b0a30057.js",
    "revision": "27167f7f7a070261941538be53f49344"
  },
  {
    "url": "assets/js/5.f215c181.js",
    "revision": "f9c9d876899e52ce44f3e77522a7e962"
  },
  {
    "url": "assets/js/6.37a11fbf.js",
    "revision": "50f3d3875e66e617fe9c824cde35d5b6"
  },
  {
    "url": "assets/js/7.e72a38d1.js",
    "revision": "577a73d31a87bbe0fced730f34e52eb2"
  },
  {
    "url": "assets/js/8.a2b1632c.js",
    "revision": "6f010655f583fbe3a3390218e7e799f3"
  },
  {
    "url": "assets/js/9.1c1c27ac.js",
    "revision": "8083f5ef51fe5bcd145cbc65698e750c"
  },
  {
    "url": "assets/js/app.412ffd4b.js",
    "revision": "72bffb84fb1646bf37325453e4104bb5"
  },
  {
    "url": "index.html",
    "revision": "e39dd6c90ef8c76052364c78b74e07a0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
