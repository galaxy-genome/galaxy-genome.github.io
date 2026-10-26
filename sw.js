// The app-wide worker. The build writes BUILD and PRECACHE (vite.config.ts, swManifest); each deploy gets its own cache,
// and activating a new worker deletes the previous deploy's cache. Pages are network-first with the cached page as the
// offline fallback, hashed assets cache-first, everything else stale-while-revalidate.
const BUILD = 'mvomk2kx'
const PRECACHE = ["assets/App-CIwStzYJ.js","assets/Battle-C9S1H959.css","assets/Battle-CTZsef0X.js","assets/Build-B7BwU4Gu.css","assets/Build-CcB-MVlx.js","assets/BuildPage-BxGrZ19j.js","assets/CommunityEntryPage-4YygOPkt.js","assets/Compare-CkzIQWJ5.js","assets/CompareWith-B3WGKKx4.js","assets/DownloadSheet-D0Hlq-Xw.js","assets/GoalsPanel-iDXRA0dF.js","assets/HelpArticlePage-Dk8JuO7w.js","assets/HelpPage-2NZqMYc3.js","assets/Home-BiJwsJGU.js","assets/HomePage-CIE2xwM1.js","assets/HomePage-DD-2rOZ8.css","assets/Main-BbcGwf7W.js","assets/ModInfoSheet-D7zIu-z7.js","assets/QuickSetup-0zUL0wdp.js","assets/Route-y4JK8u2S.js","assets/SaveRoot-O7V3WA0v.js","assets/Saved-DQfCmm3z.js","assets/Settings-CxBB5fHT.css","assets/Settings-DGwWMKTp.js","assets/Templates-Cv5OfUlu.js","assets/WikiPanel-BLfqFEmQ.js","assets/app-Dw48oL_p.js","assets/arrow-left-DK5yVFKQ.js","assets/arrow-left-right-CXZJ8TPw.js","assets/arrow-right-BZUlr-6r.js","assets/arrow-up-down-B-Z_IQSd.js","assets/article-B_fFfQBu.js","assets/article-BgMcgmPD.css","assets/backup-Da1i6Zsp.js","assets/book-open-BVLb-YNC.js","assets/build-0uyrDoRx.js","assets/bundle-mjs-BCZgiF-g.js","assets/cargo-3BNIVv0A.css","assets/cargo-SaQhSubA.js","assets/chevron-down-YvO9lvVx.js","assets/chevron-right-B6BAEnLy.js","assets/chunk-BV7QT456-D05fNF4-.js","assets/circle-question-mark-J82yaOzG.js","assets/codec-CL8Dyfgb.js","assets/command-Cpm0HxD_.js","assets/common-CoCZ055Y.js","assets/common-DfBrt9yq.js","assets/credit-eMakbqfx.js","assets/credit-wqsEhaWx.css","assets/database-5DaY3jrt.js","assets/dist-73md-sHI.js","assets/dist-BLT91B-D.js","assets/dist-BPuNt0v6.js","assets/dist-C00fYTH9.js","assets/dist-CfYWvTvm.js","assets/dist-YGEkkWd1.js","assets/dist-sCIH8rBA.js","assets/download-CXBwm3q2.js","assets/download-UwIki0VR.js","assets/ellipsis-vertical-rZMs6GV2.js","assets/engineer-BTtmzqCj.js","assets/engineer-C-EJzynJ.css","assets/esm-B123jtWu.js","assets/field-DayCeawR.js","assets/file-text-B5sON3fB.js","assets/flag-DcQJ-3po.js","assets/folder-open-Dq-SoMEn.js","assets/galaxy-BYqx99BF.js","assets/galaxy-CQZkerz5.js","assets/galaxy-DQEO-anZ.css","assets/game-C15_0MQM.js","assets/gestures-DSaw8XRF.js","assets/globe-yEzsvzxA.js","assets/grip-vertical-CjjGP5wQ.js","assets/hangar-BgrKsq0c.css","assets/hangar-Bmw4FrWx.js","assets/header-lab-Bzw1O12b.js","assets/headline-DSH7Wm1Q.js","assets/help-D-uXQGi5.js","assets/help-articles-BC0xQhU5.js","assets/help-content-DmJztSH7.js","assets/help-nPCvFQO2.js","assets/helpSearch-vLNrFSQf.js","assets/highs-B_nfHoE0.wasm","assets/i18n-BLjUHlKs.js","assets/i18n-fcxdqInz.js","assets/index-DoVcwAIc.css","assets/index-wmRJ7ix4.js","assets/info-M-mFIgJ6.js","assets/inputs-Bga13827.js","assets/jsx-runtime-BtH0gOTJ.js","assets/kept-DW9cIqEK.js","assets/list-D9cbwNEL.js","assets/loadouts-BKl6ZezC.js","assets/lock-BBuTj3TB.js","assets/map-BOeGosCL.js","assets/map-CqJ5SkG0.css","assets/map-DZrojOnd.js","assets/map-pin-ajcMnf1m.js","assets/materials-BmQ6xv9A.css","assets/materials-DdZb5GBN.js","assets/mods-DU9L8wVF.js","assets/overlays-CL8EOKLg.js","assets/package-C4upNVRx.js","assets/panel-CPJXaum5.js","assets/panel-lab-DQB5Xfta.js","assets/panels-CqDG9mov.js","assets/pickers-bmityICY.js","assets/plus-BT668hde.js","assets/position-B4RsCwkL.js","assets/prefs-B_316wxG.js","assets/preload-helper-BZ1Pz5am.js","assets/quests-B9EATHkB.css","assets/quests-CQLPpgg8.js","assets/react-BbcNmIHv.js","assets/react-DB-4Zxce.js","assets/react-dom-DEdkSy2c.js","assets/read-Ag4QqOqJ.js","assets/record-0xnyLDsa.css","assets/record-DpNF3w35.js","assets/reference-pA-DyXo0.js","assets/render-gWCV15bM.js","assets/rotate-ccw-DCfWzy1T.js","assets/rules-Co9G2tDq.js","assets/save-D6v2F7ZA.js","assets/save-y1kw7Ngr.js","assets/search-CvjwF5Ya.js","assets/search-Dpp-hUJL.js","assets/search-lab-BNhkeoBb.js","assets/share-DrrBVf8E.js","assets/share-owdwTycS.js","assets/shared-CEScruhS.js","assets/sheet-BNP5_rNy.js","assets/shell-CEjqWTU_.js","assets/shell-lab-C2sqjNpT.js","assets/ship-BwLi3ESZ.css","assets/ship-DZ7w7cgT.js","assets/smartphone-wasKoreg.js","assets/sparkles-ClWvep29.js","assets/station-CZ2jAIig.js","assets/station-DgLDxETI.css","assets/storage-BCr_PdNc.js","assets/storage-Dxv2F9-S.js","assets/storage-Dz6I6nRO.css","assets/strings-Br9EQXiZ.js","assets/strings-DLocL3_v.js","assets/strings-Dabzv-MN.js","assets/swords-CzIqGj-K.js","assets/triangle-alert-CBwh3z8X.js","assets/u01-0DtgZwe8.css","assets/u01-E5ee94mb.js","assets/u03-B6UBf_h0.js","assets/u03-DSmyRqS4.css","assets/u04-BcMc-ECk.css","assets/u04-BepyArAp.js","assets/u05-BkvoXATF.css","assets/u05-KWeDZpMu.js","assets/u06-BCOm372v.css","assets/u06-D-FM6FFy.js","assets/u07-5zD6LWAa.css","assets/u07-rsbQr2AH.js","assets/u11-CxVOTfPr.css","assets/u11-w_MCCP4S.js","assets/u12-BTyJPmax.css","assets/u12-DWPTUNJR.js","assets/u17-CsUWuJyn.js","assets/u18-C3WF5mMx.js","assets/u18-CQSTBw2W.css","assets/u19-Ch1eMoDs.css","assets/u19-gMvdF-yc.js","assets/u20-rAtduLOR.js","assets/u26-BuUxISHJ.js","assets/u26-OOU6384h.css","assets/u27-6izHQcMv.css","assets/u27-C-q8DKxL.js","assets/u28-CxwaEnBp.js","assets/u29-DLV5GOoq.js","assets/u30-DBIr_9-E.js","assets/ui-Cl0j0Wnh.js","assets/ui-lab-BpAJJgIM.js","assets/unit-DOc6skV4.js","assets/useFit-B3lyVh-r.js","assets/utils-zMlpnadq.js","assets/wand-DjUFPQTS.js","assets/wiki-yGw2_7BY.js","assets/worker-DFOz_zfT.js","assets/wrench-Bcosvtw9.js","galaxy-map/app.js","galaxy-map/data/cells.png","galaxy-map/data/detail.json","galaxy-map/data/galaxy.json","galaxy-map/data/lang/cn.json","galaxy-map/data/lang/en.json","galaxy-map/data/lang/es.json","galaxy-map/data/lang/pt.json","galaxy-map/data/lang/ru.json","galaxy-map/data/reachable.png","galaxy-map/data/rich2m.bin","galaxy-map/data/side.webp","galaxy-map/data/zones.webp","galaxy-map/icon-180.png","galaxy-map/icon.svg","galaxy-map/index.html","galaxy-map/style.css","icons/icon-128.png","icons/icon-144.png","icons/icon-152.png","icons/icon-16.png","icons/icon-180.png","icons/icon-192.png","icons/icon-256.png","icons/icon-32.png","icons/icon-384.png","icons/icon-48.png","icons/icon-512.png","icons/icon-72.png","icons/icon-96.png","icons/icon.svg","index.html","manifest.webmanifest","mods/data/galaxy.json","mods/data/save-data.json","mods/data/save-lang.json","mods/data/side.webp","mods/data/zones.webp","mods/icon-180.png","mods/icon-192.png","mods/icon-512.png","mods/icon-maskable-512.png","mods/icon.svg","mods/manifest.webmanifest","wiki/articles.json","wiki/data.json","wiki/files/StoryAlt/Quest150.json","wiki/files/StoryAlt/Quest151.json"]
const CACHE = `gga-${BUILD}`
/** Files shared to the installed app wait here until the Mods tab reads them (src/tabs/mods/App.tsx, SharedFile). */
const SHARE = 'gga-share'
const ROOT = new URL('./', self.location).pathname

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(PRECACHE.map((p) => ROOT + p))).then(() => self.skipWaiting()))
})

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('gga-') && k !== CACHE && k !== SHARE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  )
})

const put = (req, res) => { if (res.status === 200 && res.type === 'basic') { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)) } return res }

async function share(req) {
  const file = (await req.formData()).get('file')
  if (file instanceof File) {
    const c = await caches.open(SHARE)
    await c.put(`${ROOT}mods/share/file`, new Response(file, { headers: { 'content-type': file.type || 'application/octet-stream', 'x-file-name': encodeURIComponent(file.name) } }))
  }
  return Response.redirect(`${ROOT}mods/share`, 303)
}

self.addEventListener('fetch', (e) => {
  const req = e.request
  const url = new URL(req.url)
  if (url.origin !== self.location.origin) return
  if (req.method === 'POST' && url.pathname === `${ROOT}mods/share`) { e.respondWith(share(req)); return }
  if (req.method !== 'GET') return
  // The old tools' workers unregister themselves from here (public/mods/sw.js, public/loadouts/sw.js).
  if (url.pathname.endsWith('/sw.js')) return

  if (req.mode === 'navigate') {
    const page = url.pathname.startsWith(`${ROOT}galaxy-map/`) ? `${ROOT}galaxy-map/index.html` : `${ROOT}index.html`
    e.respondWith(fetch(req).then((res) => (url.pathname === page ? put(page, res) : res))
      .catch(async () => (await caches.match(req, { ignoreSearch: true, ignoreVary: true })) || caches.match(page)))
    return
  }

  if (url.pathname.startsWith(`${ROOT}assets/`)) {
    e.respondWith(caches.match(req, { ignoreVary: true }).then((hit) => hit || fetch(req).then((res) => put(req, res))))
    return
  }

  e.respondWith(caches.match(req, { ignoreSearch: true, ignoreVary: true }).then((hit) => {
    const fresh = fetch(req).then((res) => put(req, res))
    if (!hit) return fresh
    e.waitUntil(fresh.catch(() => {}))
    return hit
  }))
})
