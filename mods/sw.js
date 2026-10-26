// The old mods app's worker lived here and served a cached copy of it. This one drops that copy and itself, then reloads
// its pages, which gg-assist now serves at the same addresses.
self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', (e) => e.waitUntil((async () => {
  for (const k of await caches.keys()) if (k.startsWith('gg-editor')) await caches.delete(k)
  await self.registration.unregister()
  for (const c of await self.clients.matchAll({ type: 'window' })) c.navigate(c.url)
})()))
