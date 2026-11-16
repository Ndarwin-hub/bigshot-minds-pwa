const CACHE = "bigshot-minds-shell-v10";
const BASE = self.registration.scope;
const SHELL = ["./", "./index.html", "./manifest.webmanifest", "./icons/icon-192.png", "./icons/icon-512.png", "./icons/apple-touch-icon.png"].map(p => new URL(p, BASE).href);
self.addEventListener("install", event => event.waitUntil((async () => { const cache = await caches.open(CACHE); await cache.addAll(SHELL); await self.skipWaiting(); })()));
self.addEventListener("activate", event => event.waitUntil((async () => { const keys = await caches.keys(); await Promise.all(keys.filter(k => k.startsWith("bigshot-minds-shell-") && k !== CACHE).map(k => caches.delete(k))); await self.clients.claim(); })()));
self.addEventListener("fetch", event => {
  const req = event.request; const url = new URL(req.url);
  if (req.method !== "GET" || url.origin !== self.location.origin) return;
  if (req.mode === "navigate") {
    event.respondWith((async () => { try { return await fetch(req, {cache: "no-store"}); } catch (e) { return (await caches.match(new URL("./index.html", BASE).href)) || Response.error(); } })());
    return;
  }
  event.respondWith((async () => { const cached = await caches.match(req); if (cached) return cached; const response = await fetch(req); if (response.ok) { const cache = await caches.open(CACHE); await cache.put(req, response.clone()); } return response; })());
});