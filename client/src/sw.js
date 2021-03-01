/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-restricted-globals */
import * as strategies from 'workbox-strategies'
import * as routing from 'workbox-routing'
import * as precaching from 'workbox-precaching'

// We need this in Webpack plugin (refer to swSrc option): https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin#full_injectmanifest_config
precaching.precacheAndRoute(self.__WB_MANIFEST)

self.addEventListener('install', (event) =>
  event.waitUntil(self.skipWaiting()),
)
self.addEventListener('activate', (event) =>
  event.waitUntil(self.clients.claim()),
)

// app-shell
routing.registerRoute('/', new strategies.NetworkFirst())

routing.registerRoute(
  /https:.*\.(css|js|json|)/,
  new strategies.NetworkFirst({ cacheName: 'external-cache' }),
)
