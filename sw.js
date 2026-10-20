const CACHE_NAME = 'inspefrota-v1';
const urlsToCache = [
  './',
  './index.html',
  './dashboard.html',
  './veiculos.html',
  './checklists.html',
  './inspetor.html',
  './inspecoes.html',
  './style.css'
];

// Instala o Service Worker e guarda os arquivos em cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Responde com o cache caso a internet falhe (Opcional, bom para áreas sem sinal)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) return response;
        return fetch(event.request);
      })
  );
});