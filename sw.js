const C="bigshot-minds-pwa-v4",S=["./","./index.html","./manifest.webmanifest","./icons/icon.svg"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(S)));self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x.startsWith("bigshot-minds-pwa-")&&x!==C).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener("fetch",e=>{
 if(e.request.method!=="GET")return;
 const u=new URL(e.request.url);
 const isLogo=u.hostname==="www.google.com"&&u.pathname==="/s2/favicons";
 if(u.origin!==location.origin&&!isLogo)return;
 e.respondWith((async()=>{
  const cache=await caches.open(C);
  const cached=await cache.match(e.request);
  if(cached)return cached;
  try{
   const r=await fetch(e.request);
   if(r.ok||r.type==="opaque")cache.put(e.request,r.clone()).catch(()=>{});
   return r;
  }catch(err){
   const local=await cache.match(e.request);
   if(local)return local;
   if(u.origin===location.origin)return (await cache.match("./index.html"));
   throw err;
  }
 })());
});