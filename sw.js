// The app-wide worker. The build writes BUILD and PRECACHE (vite.config.ts, swManifest); each deploy gets its own cache,
// and activating a new worker deletes the previous deploy's cache. Pages are network-first with the cached page as the
// offline fallback, hashed assets cache-first, everything else stale-while-revalidate.
const BUILD = 'mvrtynmv'
const PRECACHE = ["assets/App-D_gBeHl3.js","assets/Battle-C6Rx_QOS.js","assets/Battle-C9S1H959.css","assets/Build-B7BwU4Gu.css","assets/Build-DP6d6G9y.js","assets/BuildPage-B-n6XyT9.js","assets/CommunityEntryPage-CQ9Lm5G0.js","assets/Compare-f3luVUyI.js","assets/CompareWith-C6n9AgXw.js","assets/DownloadSheet-4x54iq0g.js","assets/GoalsPanel-CDyvpwqw.js","assets/HelpArticlePage-mBF1y_6c.js","assets/HelpPage-DuZJOrd7.js","assets/Home-DpB0915i.js","assets/HomePage-DCT1PIlS.js","assets/HomePage-DD-2rOZ8.css","assets/Main-Bu4L0wBr.js","assets/ModInfoSheet-Cd6pJHKC.js","assets/QuickSetup-DC_a3HtM.js","assets/Route-Dt4psdHY.js","assets/SaveRoot-wJ8r-YYh.js","assets/Saved-BYk0wWqf.js","assets/Settings-CMAt419C.js","assets/Settings-CxBB5fHT.css","assets/Templates-CxWdk7wP.js","assets/WikiPanel-DztLbe7X.js","assets/app-D3jH9lGE.js","assets/arrow-left-BdhiZkBq.js","assets/arrow-left-right-CMaCNbI5.js","assets/arrow-right-CVMf0-Mm.js","assets/arrow-up-down-CSBr0aMW.js","assets/article-BgMcgmPD.css","assets/article-C_tWriuQ.js","assets/backup-Da1i6Zsp.js","assets/book-open-FXzQNGxf.js","assets/build-CwuBT7rY.js","assets/bundle-mjs-BCZgiF-g.js","assets/cargo-3BNIVv0A.css","assets/cargo-B55v5h0U.js","assets/chevron-down-D0SvXSjB.js","assets/chevron-right-DbggDAKd.js","assets/chunk-BV7QT456-D05fNF4-.js","assets/circle-question-mark-_-9JObpI.js","assets/codec-CL8Dyfgb.js","assets/command-CSxRtEAO.js","assets/common-BqD4cj4q.js","assets/common-DonGeTSj.js","assets/credit-eMakbqfx.js","assets/credit-wqsEhaWx.css","assets/database-DdjD-o0X.js","assets/dist-73md-sHI.js","assets/dist-BLT91B-D.js","assets/dist-BPuNt0v6.js","assets/dist-CfYWvTvm.js","assets/dist-YGEkkWd1.js","assets/dist-u53zft8l.js","assets/dist-uGW4DHGK.js","assets/download-CFe2FatP.js","assets/download-quIXni7d.js","assets/ellipsis-vertical-Bmj3f2JR.js","assets/engineer-C-EJzynJ.css","assets/engineer-Cve0aZr5.js","assets/esm-B123jtWu.js","assets/field-DmkBGQK3.js","assets/file-text-7z3nJ_1o.js","assets/flag-T3rPPboB.js","assets/folder-open-CfEdG960.js","assets/galaxy-BYqx99BF.js","assets/galaxy-CeiMzcSo.js","assets/galaxy-DQEO-anZ.css","assets/game-CMlON69l.js","assets/gestures-DbqRjBM1.js","assets/globe-PnSc_R96.js","assets/grip-vertical-13M7XOpB.js","assets/hangar-BgrKsq0c.css","assets/hangar-CFpromwI.js","assets/header-lab-1rcfNp7a.js","assets/headline-DSH7Wm1Q.js","assets/help-BKQaBbZf.js","assets/help-BT5GjqxY.js","assets/help-articles-BC0xQhU5.js","assets/help-content-BGCDMlPC.js","assets/helpSearch-vLNrFSQf.js","assets/highs-B_nfHoE0.wasm","assets/i18n-Dz28N_C-.js","assets/i18n-fcxdqInz.js","assets/index-D5ALtLe9.js","assets/index-DoVcwAIc.css","assets/info-B18D_W0L.js","assets/inputs-DmHkAo14.js","assets/jsx-runtime-BtH0gOTJ.js","assets/kept-DW9cIqEK.js","assets/list-BBExj8pz.js","assets/loadouts-CDtBLoDk.js","assets/lock-DHYM86gK.js","assets/map-CW85atrl.js","assets/map-CqJ5SkG0.css","assets/map-DazY8kcE.js","assets/map-pin-BlXhE72d.js","assets/materials-B1nhUreQ.js","assets/materials-BmQ6xv9A.css","assets/mods-pjHGoUlj.js","assets/overlays-BG_zpXFK.js","assets/package-DW4-GuG6.js","assets/panel-DSg_Yh9m.js","assets/panel-lab-apLyl6PO.js","assets/panels-i8OVnJ8Z.js","assets/pickers-BCxyvDYN.js","assets/plus-BpmkW7og.js","assets/position-BQP78jEJ.js","assets/prefs-CnRSq-YD.js","assets/preload-helper-BZ1Pz5am.js","assets/quests-B9EATHkB.css","assets/quests-DAm_eSGK.js","assets/react-BbcNmIHv.js","assets/react-DB-4Zxce.js","assets/react-dom-DEdkSy2c.js","assets/read-BShTMooR.js","assets/record-0xnyLDsa.css","assets/record-Ch-1V3ip.js","assets/reference-pA-DyXo0.js","assets/render-gWCV15bM.js","assets/rotate-ccw-BwpOpiV2.js","assets/rules-BQvDEbax.js","assets/save-BywLT8Io.js","assets/save-y1kw7Ngr.js","assets/search-BwvBh1UX.js","assets/search-Dpp-hUJL.js","assets/search-lab-BdCxJa9R.js","assets/share-DMwwPE2p.js","assets/share-DPdk6W8R.js","assets/shared-Bd7-mHJu.js","assets/sheet-356OY_TM.js","assets/shell-DhrEN8kX.js","assets/shell-lab-DPC1fgiH.js","assets/ship-BwLi3ESZ.css","assets/ship-DR-d3zUF.js","assets/smartphone-BMAswj6i.js","assets/sparkles-Dxsr74FF.js","assets/station-CZn8n2I3.js","assets/station-DgLDxETI.css","assets/storage-D1nELDIB.js","assets/storage-Dg3FJPTK.js","assets/storage-Dz6I6nRO.css","assets/strings-BwbRdQlW.js","assets/strings-Cy1i1kN1.js","assets/strings-SpXsXVok.js","assets/swords-BeF4Ze_R.js","assets/triangle-alert-4IE3AfCC.js","assets/u01-0DtgZwe8.css","assets/u01-CnJbvcGk.js","assets/u03-DJSw27iK.js","assets/u03-DSmyRqS4.css","assets/u04-BcMc-ECk.css","assets/u04-BepyArAp.js","assets/u05-BkvoXATF.css","assets/u05-CRu4R6_Y.js","assets/u06-BCOm372v.css","assets/u06-x6LqZHBH.js","assets/u07-5zD6LWAa.css","assets/u07-C8Gz4h8E.js","assets/u11-CxVOTfPr.css","assets/u11-CywKNV_Y.js","assets/u12-BTyJPmax.css","assets/u12-DdS0xVJH.js","assets/u17-DkRD_2hJ.js","assets/u18-CQSTBw2W.css","assets/u18-DX0AL3OK.js","assets/u19-Ch1eMoDs.css","assets/u19-CiAbKVn9.js","assets/u20-DnepwjDW.js","assets/u26-C69gWOpS.js","assets/u26-OOU6384h.css","assets/u27-6izHQcMv.css","assets/u27-CBUnvEYF.js","assets/u28-Drenzamr.js","assets/u29-DLV5GOoq.js","assets/u30-qh-6ZYkZ.js","assets/ui-DLAUpM2y.js","assets/ui-lab-6iQ105v6.js","assets/unit-DOc6skV4.js","assets/useFit-D6RP6w5o.js","assets/utils-DoXd4H81.js","assets/wand-ClRT4LZJ.js","assets/wiki-BKme3A8L.js","assets/worker-DYBW_De8.js","assets/wrench-CSjYHIIw.js","galaxy-map/app.js","galaxy-map/data/cells.png","galaxy-map/data/detail.json","galaxy-map/data/galaxy.json","galaxy-map/data/lang/cn.json","galaxy-map/data/lang/en.json","galaxy-map/data/lang/es.json","galaxy-map/data/lang/pt.json","galaxy-map/data/lang/ru.json","galaxy-map/data/reachable.png","galaxy-map/data/rich2m.bin","galaxy-map/data/side.webp","galaxy-map/data/zones.webp","galaxy-map/icon-180.png","galaxy-map/icon.svg","galaxy-map/index.html","galaxy-map/style.css","icons/icon-128.png","icons/icon-144.png","icons/icon-152.png","icons/icon-16.png","icons/icon-180.png","icons/icon-192.png","icons/icon-256.png","icons/icon-32.png","icons/icon-384.png","icons/icon-48.png","icons/icon-512.png","icons/icon-72.png","icons/icon-96.png","icons/icon.svg","index.html","manifest.webmanifest","mods/data/galaxy.json","mods/data/save-data.json","mods/data/save-lang.json","mods/data/side.webp","mods/data/zones.webp","mods/icon-180.png","mods/icon-192.png","mods/icon-512.png","mods/icon-maskable-512.png","mods/icon.svg","mods/manifest.webmanifest","wiki/articles.json","wiki/data.json","wiki/files/StoryAlt/Quest150.json","wiki/files/StoryAlt/Quest151.json"]
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
