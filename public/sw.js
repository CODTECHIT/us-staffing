// Service Worker for Maxera Talent
// This is a placeholder that prevents 404 errors from browser extensions

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(clients.claim());
});

// Handle fetch events - default behavior (no custom response)
// You can add caching or offline support here if needed
