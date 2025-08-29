self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("focus-timer-cache").then(cache => {
      return cache.addAll([
        "./index.html",
        "./manifest.json",
        "./assets/icon-192.png",
        "./assets/icon-512.png",
        "./assets/alarm.mp3"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
