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
        let promises = urlsToCache.map((url, index) => 
            cache.add(url).then(() => {
                updateProgressBar((index + 1) / urlsToCache.length);
            }).catch(err => console.error(`Failed to cache ${url}:`, err))
        );
        Promise.all(promises).then(() => {
            alert('Content downloaded for offline use!');
        }).catch(err => {
            console.error('Failed to cache resources:', err);
        });
    });
}

function updateProgressBar(progress) {
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = `${progress * 100}%`;
}
