//
// app.js
// job    : app behavior
// git    : https://github.com/motetpaper/pwa-js
// lic    : MIT
//
//
//
//
//
if ('serviceWorker' in navigator) {

  navigator.serviceWorker.register('sw.js').then(
    (registration) => {
      console.log('[app.js] service worker reg OK.', registration);
    },
    (error) => {
      console.error(`[app.js] service worker reg failed: ${error}`);
    },
  );
} else {
  console.error('[app.js] service worker unsupported.');
}

