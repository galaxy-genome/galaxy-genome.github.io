// The app-wide worker. The build writes BUILD and PRECACHE (vite.config.ts, swManifest); each deploy gets its own cache,
// and activating a new worker deletes the previous deploy's cache. Pages are network-first with the cached page as the
// offline fallback, hashed assets cache-first, everything else stale-while-revalidate.
const BUILD = 'mvtpi289'
const PRECACHE = ["assets/App-nWkaLAv0.js","assets/Battle-C9S1H959.css","assets/Battle-XRz8PGvv.js","assets/Build-B7BwU4Gu.css","assets/Build-DO0Iy9Ux.js","assets/BuildPage-3RfDlUsO.js","assets/CommunityEntryPage-asbMA6k4.js","assets/Compare-CCmShC4P.js","assets/CompareWith-BY6P0TOW.js","assets/DownloadSheet-BIKXgzvl.js","assets/GoalsPanel-EXHWMm4m.js","assets/HelpArticlePage-CoE1sMag.js","assets/HelpPage-DQGTbZ5v.js","assets/Home-D4J55WVD.js","assets/HomePage-CjYnX7zP.js","assets/HomePage-DD-2rOZ8.css","assets/Main-DdzeuDAA.js","assets/ModInfoSheet-BeLvYC_f.js","assets/QuickSetup-FR3F7AID.js","assets/Route-BKvIoybs.js","assets/SaveRoot-CAHuUfCX.js","assets/Saved-C06OCRYP.js","assets/Settings-CxBB5fHT.css","assets/Settings-cpxytycW.js","assets/Templates-JVaWklD1.js","assets/WikiPanel-BvTGpJgf.js","assets/app-D3jH9lGE.js","assets/arrow-left-D-CPAmVl.js","assets/arrow-left-right-gLew9lUF.js","assets/arrow-right-DjoUGblq.js","assets/arrow-up-down-D_-3gnow.js","assets/article-BgMcgmPD.css","assets/article-CfRGJzdG.js","assets/backup-Dx821us0.js","assets/book-open-CWJ7rVZJ.js","assets/build-CwuBT7rY.js","assets/bundle-mjs-BCZgiF-g.js","assets/cargo-3BNIVv0A.css","assets/cargo-CR9iXc6s.js","assets/chevron-down-Q2jv6tS_.js","assets/chevron-right-kBl2_rkI.js","assets/chunk-BV7QT456-D05fNF4-.js","assets/circle-question-mark-B8-7ScMX.js","assets/codec-CL8Dyfgb.js","assets/command-Cco5fNxk.js","assets/common-Bfo5wbmI.js","assets/common-xn0o-VZn.js","assets/credit-eMakbqfx.js","assets/credit-wqsEhaWx.css","assets/database-BNq9x-0l.js","assets/dist-1ge9gEbg.js","assets/dist-73md-sHI.js","assets/dist-BLT91B-D.js","assets/dist-BPuNt0v6.js","assets/dist-BbREahyd.js","assets/dist-CfYWvTvm.js","assets/dist-YGEkkWd1.js","assets/download-CF1PiRWa.js","assets/download-cuxmU9sH.js","assets/ellipsis-vertical-BGAIssZX.js","assets/engineer-C-EJzynJ.css","assets/engineer-CtBX0o8b.js","assets/esm-B123jtWu.js","assets/field-BcbN0lH5.js","assets/file-text-NMXoT3NC.js","assets/flag-DWpLHbv5.js","assets/folder-open-B0TJebhf.js","assets/galaxy-BYqx99BF.js","assets/galaxy-C6IB9E7h.js","assets/galaxy-DQEO-anZ.css","assets/game-CMlON69l.js","assets/gestures-C-C_tnYd.js","assets/globe-v0LQZx2A.js","assets/grip-vertical-Dg_F-jJB.js","assets/hangar-2AeGdn9O.js","assets/hangar-BgrKsq0c.css","assets/header-lab-Bpx9q5kW.js","assets/headline-DSH7Wm1Q.js","assets/help-BDMUnLn2.js","assets/help-CcIsu4mw.js","assets/help-articles-CVWxsX2R.js","assets/help-content-DQWXY55J.js","assets/helpSearch-vLNrFSQf.js","assets/highs-B_nfHoE0.wasm","assets/i18n-DjcAIav-.js","assets/i18n-Dz28N_C-.js","assets/index-CZ9khxyD.js","assets/index-DoVcwAIc.css","assets/info-CmxLJVGc.js","assets/inputs-C4tOhqDZ.js","assets/jsx-runtime-BtH0gOTJ.js","assets/kept-DAe7sFvI.js","assets/list-CGDCg92F.js","assets/loadouts-BNY3nvkb.js","assets/lock-DyaEGMsh.js","assets/map-CqJ5SkG0.css","assets/map-DJJkmuY3.js","assets/map-X2pD_oCt.js","assets/map-pin-CyT1_QIl.js","assets/materials-B9JbkSWt.js","assets/materials-BmQ6xv9A.css","assets/mods-Dnv3g8OZ.js","assets/overlays-Btrb0jQp.js","assets/package-PLChNsdh.js","assets/panel-D2Q7jWfj.js","assets/panel-lab-CxLhJeKH.js","assets/panels-C-LNtFbl.js","assets/pickers-CT43Laj8.js","assets/plus-CrDiMUdC.js","assets/position-BQP78jEJ.js","assets/prefs-DHq0jS7h.js","assets/preload-helper-BZ1Pz5am.js","assets/quests-B9EATHkB.css","assets/quests-DW_rzlPO.js","assets/react-BbcNmIHv.js","assets/react-DB-4Zxce.js","assets/react-dom-DEdkSy2c.js","assets/read-BShTMooR.js","assets/record-0xnyLDsa.css","assets/record-BHxqSht3.js","assets/reference-pA-DyXo0.js","assets/render-gWCV15bM.js","assets/rotate-ccw-vnOKp1ze.js","assets/rules-CYQrsTeD.js","assets/save-CdtNOyXC.js","assets/save-y1kw7Ngr.js","assets/search-Dpp-hUJL.js","assets/search-QbeDQ0kw.js","assets/search-lab-DNQz5e1U.js","assets/share-DPdk6W8R.js","assets/share-wKI12KQa.js","assets/shared-Bd7-mHJu.js","assets/sheet-D44bkh8u.js","assets/shell-ChStNRAQ.js","assets/shell-lab-DtX7lg0i.js","assets/ship-BwLi3ESZ.css","assets/ship-CwfSsAhn.js","assets/smartphone-GYXw-aX6.js","assets/sparkles-BwaqSidZ.js","assets/station-DgLDxETI.css","assets/station-Duk3Nnal.js","assets/storage-BE3TLbcL.js","assets/storage-Dg3FJPTK.js","assets/storage-Dz6I6nRO.css","assets/strings-BwbRdQlW.js","assets/strings-oln4GtAJ.js","assets/strings-p80wpPdm.js","assets/swords-dSE_nTFl.js","assets/triangle-alert-DKVmuyy8.js","assets/u01-0DtgZwe8.css","assets/u01-KfHp6C3x.js","assets/u03-DSmyRqS4.css","assets/u03-DcI_8P9p.js","assets/u04-BcMc-ECk.css","assets/u04-BepyArAp.js","assets/u05-BkvoXATF.css","assets/u05-Db1uBPTe.js","assets/u06-BCOm372v.css","assets/u06-kKuLD1m_.js","assets/u07-5zD6LWAa.css","assets/u07-By117U38.js","assets/u11-B_AkWDZj.js","assets/u11-CxVOTfPr.css","assets/u12-BTyJPmax.css","assets/u12-Clawj5pw.js","assets/u17-7qoRRMka.js","assets/u18-CQSTBw2W.css","assets/u18-DuD_YPw4.js","assets/u19-B_z4VKG4.js","assets/u19-Ch1eMoDs.css","assets/u20-BkQ7VfX3.js","assets/u26-Bl9dYPV5.js","assets/u26-OOU6384h.css","assets/u27-6izHQcMv.css","assets/u27-BQ339-cf.js","assets/u28-CkFSYJpf.js","assets/u29-DLV5GOoq.js","assets/u30-C7LPAxQA.js","assets/ui-B47EEsM2.js","assets/ui-lab--eLCC8LQ.js","assets/unit-DOc6skV4.js","assets/useFit-D9wOYAvN.js","assets/utils-D_QCwDFP.js","assets/wand-CvbmsAJ8.js","assets/wiki-D-ZVI-kk.js","assets/worker-DYBW_De8.js","assets/wrench-DUdxbNX0.js","galaxy-map/app.js","galaxy-map/data/cells.png","galaxy-map/data/detail.json","galaxy-map/data/galaxy.json","galaxy-map/data/lang/cn.json","galaxy-map/data/lang/en.json","galaxy-map/data/lang/es.json","galaxy-map/data/lang/pt.json","galaxy-map/data/lang/ru.json","galaxy-map/data/reachable.png","galaxy-map/data/rich2m.bin","galaxy-map/data/side.webp","galaxy-map/data/zones.webp","galaxy-map/icon-180.png","galaxy-map/icon.svg","galaxy-map/index.html","galaxy-map/style.css","icons/icon-128.png","icons/icon-144.png","icons/icon-152.png","icons/icon-16.png","icons/icon-180.png","icons/icon-192.png","icons/icon-256.png","icons/icon-32.png","icons/icon-384.png","icons/icon-48.png","icons/icon-512.png","icons/icon-72.png","icons/icon-96.png","icons/icon.svg","index.html","manifest.webmanifest","mods/data/galaxy.json","mods/data/save-data.json","mods/data/save-lang.json","mods/data/side.webp","mods/data/zones.webp","mods/icon-180.png","mods/icon-192.png","mods/icon-512.png","mods/icon-maskable-512.png","mods/icon.svg","mods/manifest.webmanifest","wiki/articles.json","wiki/data.json","wiki/files/StoryAlt/Quest150.json","wiki/files/StoryAlt/Quest151.json"]
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
