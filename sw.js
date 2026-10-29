// The app-wide worker. The build writes BUILD and PRECACHE (vite.config.ts, swManifest); each deploy gets its own cache,
// and activating a new worker deletes the previous deploy's cache. Pages are network-first with the cached page as the
// offline fallback, hashed assets cache-first, everything else stale-while-revalidate.
const BUILD = 'mvto93th'
const PRECACHE = ["assets/App-BKq6I9Ba.js","assets/Battle-C9S1H959.css","assets/Battle-DrctSGeP.js","assets/Build-B7BwU4Gu.css","assets/Build-CwCVhGBs.js","assets/BuildPage-DIa0dB5R.js","assets/CommunityEntryPage-CeVK5Nul.js","assets/Compare-CqF6cEEY.js","assets/CompareWith-BNZKzkgu.js","assets/DownloadSheet-DvpnL4PN.js","assets/GoalsPanel-DD6KKnTN.js","assets/HelpArticlePage-B-ah7t2s.js","assets/HelpPage-g5ZsAHkt.js","assets/Home-DV2s89wb.js","assets/HomePage-DD-2rOZ8.css","assets/HomePage-UXlF3Xpe.js","assets/Main-P_j8uc9X.js","assets/ModInfoSheet-liQbdES-.js","assets/QuickSetup-Cgqghkxw.js","assets/Route-CDukSK0Q.js","assets/SaveRoot-sQS07YBx.js","assets/Saved-BpWQbwGz.js","assets/Settings-CxBB5fHT.css","assets/Settings-D4q8Vt25.js","assets/Templates-D2d5DuEq.js","assets/WikiPanel-C8ZQFKCj.js","assets/app-D3jH9lGE.js","assets/arrow-left-BSujY0KR.js","assets/arrow-left-right-gDnJfVZ9.js","assets/arrow-right-Nl0l5aW9.js","assets/arrow-up-down-BFWY-69V.js","assets/article-BgMcgmPD.css","assets/article-BlLW7iEJ.js","assets/backup-Ckz24-XT.js","assets/book-open-CvyNqCeP.js","assets/build-CwuBT7rY.js","assets/bundle-mjs-BCZgiF-g.js","assets/cargo-3BNIVv0A.css","assets/cargo-DzgKRkYv.js","assets/chevron-down-Bd1UmHiN.js","assets/chevron-right-BCxUilZA.js","assets/chunk-BV7QT456-D05fNF4-.js","assets/circle-question-mark-DQ1wXXwf.js","assets/codec-CL8Dyfgb.js","assets/command-D2lKM26c.js","assets/common-BCKpzbPC.js","assets/common-BMm7fSEf.js","assets/credit-eMakbqfx.js","assets/credit-wqsEhaWx.css","assets/database-DGwkxSnQ.js","assets/dist-73md-sHI.js","assets/dist-BG1iEFdN.js","assets/dist-BLT91B-D.js","assets/dist-BPuNt0v6.js","assets/dist-CfYWvTvm.js","assets/dist-YGEkkWd1.js","assets/dist-dRovImhn.js","assets/download-CI9DewAm.js","assets/download-O-o_wcNQ.js","assets/ellipsis-vertical-CymBBIbS.js","assets/engineer-C-EJzynJ.css","assets/engineer-gnSZ1gwi.js","assets/esm-B123jtWu.js","assets/field-CdkXY2vH.js","assets/file-text-9utY518-.js","assets/flag-DvJJFnxk.js","assets/folder-open-Ch6caaF0.js","assets/galaxy-BYqx99BF.js","assets/galaxy-C1dDOA3c.js","assets/galaxy-DQEO-anZ.css","assets/game-CMlON69l.js","assets/gestures-DpwDrB8b.js","assets/globe-B5418wsM.js","assets/grip-vertical-HBtVj8tp.js","assets/hangar-BgrKsq0c.css","assets/hangar-F-zAsmET.js","assets/header-lab-D6MrnsDj.js","assets/headline-DSH7Wm1Q.js","assets/help-articles-Bko-8NWL.js","assets/help-content-Dt6YfR_i.js","assets/help-eSIxs6AY.js","assets/help-wlp_DTma.js","assets/helpSearch-vLNrFSQf.js","assets/highs-B_nfHoE0.wasm","assets/i18n-CkIzXxN_.js","assets/i18n-Dz28N_C-.js","assets/index-DoVcwAIc.css","assets/index-RVLXMWDR.js","assets/info-DcTiC9tv.js","assets/inputs-q2Fe5Jtp.js","assets/jsx-runtime-BtH0gOTJ.js","assets/kept-mHdepDN-.js","assets/list-BhJ6U_gt.js","assets/loadouts-BhDKeBaM.js","assets/lock-cSfpsIAv.js","assets/map-BjCmBNmZ.js","assets/map-Bz_CTyx2.js","assets/map-CqJ5SkG0.css","assets/map-pin-DaVT3rPQ.js","assets/materials-BcFrSGR_.js","assets/materials-BmQ6xv9A.css","assets/mods-oT-TosGI.js","assets/overlays-BD_jUDoE.js","assets/package-DhiYvaB_.js","assets/panel-C7OUzRVk.js","assets/panel-lab-DuLp66b3.js","assets/panels-CXcYWFVL.js","assets/pickers-DG7dE5yV.js","assets/plus-Cl74Cn6a.js","assets/position-BQP78jEJ.js","assets/prefs-DS9O2SHz.js","assets/preload-helper-BZ1Pz5am.js","assets/quests-B-uiEqck.js","assets/quests-B9EATHkB.css","assets/react-BbcNmIHv.js","assets/react-DB-4Zxce.js","assets/react-dom-DEdkSy2c.js","assets/read-BShTMooR.js","assets/record-0xnyLDsa.css","assets/record-C85T7Ndx.js","assets/reference-pA-DyXo0.js","assets/render-gWCV15bM.js","assets/rotate-ccw-0XWrE4sJ.js","assets/rules-DHKQAj7T.js","assets/save-DbpEVcFU.js","assets/save-y1kw7Ngr.js","assets/search-Dpp-hUJL.js","assets/search-Iv0VGyZQ.js","assets/search-lab-C-sIy42_.js","assets/share-DPdk6W8R.js","assets/share-DZ7JaNf-.js","assets/shared-Bd7-mHJu.js","assets/sheet-dwr-vj8d.js","assets/shell-ClzwOGkn.js","assets/shell-lab-Dno5V11z.js","assets/ship-BwLi3ESZ.css","assets/ship-btjZqw0j.js","assets/smartphone-3_Wz6mbv.js","assets/sparkles-D4zFHHD-.js","assets/station-BN6v9Kmz.js","assets/station-DgLDxETI.css","assets/storage-Dg3FJPTK.js","assets/storage-DxK82CFh.js","assets/storage-Dz6I6nRO.css","assets/strings-BwbRdQlW.js","assets/strings-CLgwf9qn.js","assets/strings-pzsLCFKq.js","assets/swords-D8sbsiaj.js","assets/triangle-alert-CIF-1m1a.js","assets/u01-0DtgZwe8.css","assets/u01-De1TP68I.js","assets/u03-1jXgQZqB.js","assets/u03-DSmyRqS4.css","assets/u04-BcMc-ECk.css","assets/u04-BepyArAp.js","assets/u05-B5A0Ip2j.js","assets/u05-BkvoXATF.css","assets/u06-BCOm372v.css","assets/u06-_pdIkpw3.js","assets/u07-5zD6LWAa.css","assets/u07-B2Svk2Tk.js","assets/u11-CxVOTfPr.css","assets/u11-M9Y7QqF6.js","assets/u12-BTyJPmax.css","assets/u12-DjP5Ppgb.js","assets/u17-BRdVefc8.js","assets/u18-Bzj20763.js","assets/u18-CQSTBw2W.css","assets/u19-Ch1eMoDs.css","assets/u19-DnUOh6ME.js","assets/u20-D9B8l9NS.js","assets/u26-OOU6384h.css","assets/u26-n-j6eeJm.js","assets/u27-6izHQcMv.css","assets/u27-BRjLpdIR.js","assets/u28-5eMocltD.js","assets/u29-DLV5GOoq.js","assets/u30-BQ5CXDeA.js","assets/ui-C0ae1T1s.js","assets/ui-lab-DBGT31bU.js","assets/unit-DOc6skV4.js","assets/useFit-D2oFhCLm.js","assets/utils-DVfp9ab7.js","assets/wand-CCXdNe7j.js","assets/wiki-CDS6hUSQ.js","assets/worker-DYBW_De8.js","assets/wrench-DYKc1Q6n.js","galaxy-map/app.js","galaxy-map/data/cells.png","galaxy-map/data/detail.json","galaxy-map/data/galaxy.json","galaxy-map/data/lang/cn.json","galaxy-map/data/lang/en.json","galaxy-map/data/lang/es.json","galaxy-map/data/lang/pt.json","galaxy-map/data/lang/ru.json","galaxy-map/data/reachable.png","galaxy-map/data/rich2m.bin","galaxy-map/data/side.webp","galaxy-map/data/zones.webp","galaxy-map/icon-180.png","galaxy-map/icon.svg","galaxy-map/index.html","galaxy-map/style.css","icons/icon-128.png","icons/icon-144.png","icons/icon-152.png","icons/icon-16.png","icons/icon-180.png","icons/icon-192.png","icons/icon-256.png","icons/icon-32.png","icons/icon-384.png","icons/icon-48.png","icons/icon-512.png","icons/icon-72.png","icons/icon-96.png","icons/icon.svg","index.html","manifest.webmanifest","mods/data/galaxy.json","mods/data/save-data.json","mods/data/save-lang.json","mods/data/side.webp","mods/data/zones.webp","mods/icon-180.png","mods/icon-192.png","mods/icon-512.png","mods/icon-maskable-512.png","mods/icon.svg","mods/manifest.webmanifest","wiki/articles.json","wiki/data.json","wiki/files/StoryAlt/Quest150.json","wiki/files/StoryAlt/Quest151.json"]
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
