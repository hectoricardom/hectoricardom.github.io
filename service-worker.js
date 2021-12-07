/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

importScripts(
  "/precache-manifest.02d2704ae65238c3e286695da8860a90.js"
);

workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/index.html", {
  
  blacklist: [/^\/_/,/\/[^/]+\.[^/]+$/],
});



self.addEventListener('fetch', function(event) {
  if(event.request.url && (event.request.url.indexOf("/getImage64/")>=0 || event.request.url.indexOf("hrm-1128.appspot.com")>=0 )){
      event.respondWith(
          caches.open('qvamarkets_hrm').then(function(cache) {
              return cache.match(event.request).then(function (response) {
              return response || fetch(event.request).then(function(response) {
                  cache.put(event.request, response.clone());
                  return response;
              });
              });
          })
      );
  }
});