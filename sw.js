// The app-wide worker. The build writes BUILD and PRECACHE (vite.config.ts, swManifest); each deploy gets its own cache,
// and activating a new worker deletes the previous deploy's cache. Pages are network-first with the cached page as the
// offline fallback, hashed assets cache-first, everything else stale-while-revalidate.
const BUILD = 'mvtpnsty'
const PRECACHE = ["assets/App-DwEidmci.js","assets/Battle-C9S1H959.css","assets/Battle-DWvg8XYT.js","assets/Build-B7BwU4Gu.css","assets/Build-CevbeBpc.js","assets/BuildPage-DG2B9qTh.js","assets/CommunityEntryPage-BAiFc-AU.js","assets/Compare-D_A6CSEN.js","assets/CompareWith-BmPlxghA.js","assets/DownloadSheet-oiHG1tRZ.js","assets/GoalsPanel-CgFep9yJ.js","assets/HelpArticlePage-cQUK5xW8.js","assets/HelpPage-Br2ciavg.js","assets/Home-BY7v1_bW.js","assets/HomePage-CxuNl5TU.js","assets/HomePage-DD-2rOZ8.css","assets/Main-D2WMgWli.js","assets/ModInfoSheet-Ctj9X21u.js","assets/QuickSetup-AUO6dgak.js","assets/Route-CH-iBPbG.js","assets/SaveRoot-JWihc40w.js","assets/Saved-Deyjlmq9.js","assets/Settings-CxBB5fHT.css","assets/Settings-Zb8RLmsO.js","assets/Templates-Bdyn4XWw.js","assets/WikiPanel-BHTrJ3hM.js","assets/app-D3jH9lGE.js","assets/arrow-left-DkNVfcm8.js","assets/arrow-left-right-ZPI5H-wV.js","assets/arrow-right-BZAnaLBj.js","assets/arrow-up-down-Dqw0sxE3.js","assets/article-BRBH941W.js","assets/article-BgMcgmPD.css","assets/backup-C8fmjP53.js","assets/book-open-CbBqHUqH.js","assets/build-CwuBT7rY.js","assets/bundle-mjs-BCZgiF-g.js","assets/cargo-3BNIVv0A.css","assets/cargo-h-pZzkwe.js","assets/chevron-down-BGgQ8M9H.js","assets/chevron-right-DmEBf5mo.js","assets/chunk-BV7QT456-D05fNF4-.js","assets/circle-question-mark-BgNcvt3K.js","assets/codec-CL8Dyfgb.js","assets/command-rc8czSXs.js","assets/common-BOcCrpeo.js","assets/common-Du88kD8C.js","assets/credit-eMakbqfx.js","assets/credit-wqsEhaWx.css","assets/database-BUxy2gAJ.js","assets/dist-73md-sHI.js","assets/dist-BLT91B-D.js","assets/dist-BPuNt0v6.js","assets/dist-CfYWvTvm.js","assets/dist-DIhzEvse.js","assets/dist-DbzQnI8H.js","assets/dist-YGEkkWd1.js","assets/download-B6-u1eGp.js","assets/download-CFkO6jAO.js","assets/ellipsis-vertical-CtpBF_a3.js","assets/engineer-C-EJzynJ.css","assets/engineer-rXQDlOJx.js","assets/esm-B123jtWu.js","assets/field-BbYNF9cY.js","assets/file-text-Bk00NM5c.js","assets/flag-BoBekWa0.js","assets/folder-open-GmEtBHWO.js","assets/galaxy-BYqx99BF.js","assets/galaxy-C0N5Kdax.js","assets/galaxy-DQEO-anZ.css","assets/game-CMlON69l.js","assets/gestures-BJ6QW-_u.js","assets/globe-C-lSThvf.js","assets/grip-vertical-D_tB7oPR.js","assets/hangar-BgrKsq0c.css","assets/hangar-CazjnQLT.js","assets/header-lab-iXVXT7Fa.js","assets/headline-DSH7Wm1Q.js","assets/help-CEXJUxpe.js","assets/help-D61pfN0v.js","assets/help-articles-BVyeeoMC.js","assets/help-content-DMOpcD0P.js","assets/helpSearch-vLNrFSQf.js","assets/highs-B_nfHoE0.wasm","assets/i18n-Dz28N_C-.js","assets/i18n-ocvNR2iL.js","assets/index-CH1CF8um.js","assets/index-DoVcwAIc.css","assets/info--8-naR5t.js","assets/inputs-CGaC-s7K.js","assets/jsx-runtime-BtH0gOTJ.js","assets/kept-3RJPfKm_.js","assets/list-UBg_J_C4.js","assets/loadouts-o-hYuFYZ.js","assets/lock-WgbQ3UmM.js","assets/map-Bje1GH8Z.js","assets/map-CqJ5SkG0.css","assets/map-D8iSE4OT.js","assets/map-pin-wDkB_CVe.js","assets/materials-BmQ6xv9A.css","assets/materials-_oFFBPtx.js","assets/mods-D5SVCNlv.js","assets/overlays-BbnuEvKb.js","assets/package-BYzdUNRa.js","assets/panel-CTjhnrYR.js","assets/panel-lab-BkgiJdvH.js","assets/panels-C2OfwGRT.js","assets/pickers-Z7aivw9_.js","assets/plus-vWGN7guA.js","assets/position-BQP78jEJ.js","assets/prefs-B4ciGQw_.js","assets/preload-helper-BZ1Pz5am.js","assets/quests-B9EATHkB.css","assets/quests-D6Oz8CGm.js","assets/react-BbcNmIHv.js","assets/react-DB-4Zxce.js","assets/react-dom-DEdkSy2c.js","assets/read-BShTMooR.js","assets/record-0xnyLDsa.css","assets/record-D32azuSI.js","assets/reference-pA-DyXo0.js","assets/render-gWCV15bM.js","assets/rotate-ccw-CZHnZo1C.js","assets/rules-D3AaoQsA.js","assets/save-CA92rSaL.js","assets/save-y1kw7Ngr.js","assets/search-Dpp-hUJL.js","assets/search-ZURbbvJK.js","assets/search-lab-DdgdDbO7.js","assets/share-BCsvExV6.js","assets/share-DPdk6W8R.js","assets/shared-Bd7-mHJu.js","assets/sheet-LaBmUkR7.js","assets/shell-DggDCAns.js","assets/shell-lab-CgKUt1Rm.js","assets/ship-BwLi3ESZ.css","assets/ship-DMdYmvmK.js","assets/smartphone-MFQdiA3T.js","assets/sparkles-iFgjrAd_.js","assets/station-B7FmO80G.js","assets/station-DgLDxETI.css","assets/storage-Dg3FJPTK.js","assets/storage-Dz6I6nRO.css","assets/storage-pIU-LZe8.js","assets/strings-BwbRdQlW.js","assets/strings-CAs8PCtI.js","assets/strings-FciB-ooY.js","assets/swords-Y0Gs-1eX.js","assets/triangle-alert-PZF9N-2p.js","assets/u01-0DtgZwe8.css","assets/u01-CD9z7vYC.js","assets/u03-DSmyRqS4.css","assets/u03-UG2ynq1X.js","assets/u04-BcMc-ECk.css","assets/u04-BepyArAp.js","assets/u05-13rCMB9A.js","assets/u05-BkvoXATF.css","assets/u06-BCOm372v.css","assets/u06-BSGvynLo.js","assets/u07-5zD6LWAa.css","assets/u07-CbHZbtYr.js","assets/u11-CxVOTfPr.css","assets/u11-D0kFQmQy.js","assets/u12-B7puqV2Q.js","assets/u12-BTyJPmax.css","assets/u17-B-fUNRXY.js","assets/u18-CQSTBw2W.css","assets/u18-DN_w80nB.js","assets/u19-C7JxAJrx.js","assets/u19-Ch1eMoDs.css","assets/u20-Boe8r8tH.js","assets/u26-GHBU46_f.js","assets/u26-OOU6384h.css","assets/u27-6izHQcMv.css","assets/u27-DrgWFl3i.js","assets/u28-B2VKSr4B.js","assets/u29-DLV5GOoq.js","assets/u30-Ccs7GEzj.js","assets/ui-DFoEwjXv.js","assets/ui-lab-jsnJ6BiK.js","assets/unit-DOc6skV4.js","assets/useFit-CSGEF2ph.js","assets/utils-BhSgVRqz.js","assets/wand-BKEzTU23.js","assets/wiki-CPFMs6Si.js","assets/worker-DYBW_De8.js","assets/wrench-BMVCXt81.js","galaxy-map/app.js","galaxy-map/data/cells.png","galaxy-map/data/detail.json","galaxy-map/data/galaxy.json","galaxy-map/data/lang/cn.json","galaxy-map/data/lang/en.json","galaxy-map/data/lang/es.json","galaxy-map/data/lang/pt.json","galaxy-map/data/lang/ru.json","galaxy-map/data/reachable.png","galaxy-map/data/rich2m.bin","galaxy-map/data/side.webp","galaxy-map/data/zones.webp","galaxy-map/icon-180.png","galaxy-map/icon.svg","galaxy-map/index.html","galaxy-map/style.css","icons/icon-128.png","icons/icon-144.png","icons/icon-152.png","icons/icon-16.png","icons/icon-180.png","icons/icon-192.png","icons/icon-256.png","icons/icon-32.png","icons/icon-384.png","icons/icon-48.png","icons/icon-512.png","icons/icon-72.png","icons/icon-96.png","icons/icon.svg","index.html","manifest.webmanifest","mods/data/galaxy.json","mods/data/save-data.json","mods/data/save-lang.json","mods/data/side.webp","mods/data/zones.webp","mods/icon-180.png","mods/icon-192.png","mods/icon-512.png","mods/icon-maskable-512.png","mods/icon.svg","mods/manifest.webmanifest","wiki/articles.json","wiki/data.json","wiki/files/StoryAlt/Quest150.json","wiki/files/StoryAlt/Quest151.json"]
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
