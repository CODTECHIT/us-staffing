// Service Worker for Maxera Talent
// This is a placeholder that prevents 404 errors from browser extensions

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// Handle fetch events - just respond with a simple message
self.addEventListener('fetch', (event) => {
    event.respondWith(
        new Response('Service worker is running', {
            headers: { 'Content-Type': 'text/plain' }
        })
    );
});