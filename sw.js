const CACHE = "bigshot-minds-pwa-v7";

self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith("bigshot-minds-pwa-") && key !== CACHE).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

// Do not cache the redirect page: always let it open the live original site.
self.addEventListener("fetch", event => {
  const url = new URL(event.request.url);
  if (event.request.mode === "navigate" || url.origin !== self.location.origin) return;
});
