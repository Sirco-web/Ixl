if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
        cacheResources();
    }).catch(err => {
        console.log('Service Worker registration failed:', err);
    });
}

function cacheResources() {
    const urlsToCache = [
        '/',
        '/index.html',
        '/game/cookieclicker/index.html',
        '/game/getawayshootoutnew/index.html',
        '/game/letssurf/index.html',
        '/game/1v1lol/index.html',
        '/game/basketballstars/index.html',
        '/game/basketrandom/index.html'
    ];

    caches.open('offline-cache-v1').then(cache => {
        cache.addAll(urlsToCache).then(() => {
            document.getElementById('progress-bar').style.width = '100%';
            alert('Content downloaded for offline use!');
        }).catch(err => {
            console.error('Failed to cache resources:', err);
        });
    });
}
