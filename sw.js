// The app-wide worker. The build writes BUILD and PRECACHE (vite.config.ts, swManifest); each deploy gets its own cache,
// and activating a new worker deletes the previous deploy's cache. Pages are network-first with the cached page as the
// offline fallback, hashed assets cache-first, everything else stale-while-revalidate.
const BUILD = 'mvx4valw'
const PRECACHE = ["assets/App-B6zDUfFJ.js","assets/Battle-C9S1H959.css","assets/Battle-S4FyM9If.js","assets/Build-B7BwU4Gu.css","assets/Build-Dht4taQZ.js","assets/BuildPage-BitdP8Mk.js","assets/CommunityEntryPage-BHFopBR5.js","assets/Compare-BhS4oYhj.js","assets/CompareWith-BgnNPAjS.js","assets/DownloadSheet-DASYM030.js","assets/GoalsPanel-3dzGaY4s.js","assets/HelpArticlePage-De1syeHL.js","assets/HelpPage-DoqL23Gt.js","assets/Home-b6IYIppA.js","assets/HomePage-BgvTRtpP.js","assets/HomePage-DD-2rOZ8.css","assets/Main-DrDdI75z.js","assets/ModInfoSheet-C8p1MwT1.js","assets/QuickSetup-DiYFzKI2.js","assets/Route-De43hJB_.js","assets/SaveRoot-BTurbTB6.js","assets/Saved-DOrgzmsJ.js","assets/Settings-ChBNdRYv.js","assets/Settings-CxBB5fHT.css","assets/Templates-V3A9XJyn.js","assets/WikiPanel-Dt2wGAPe.js","assets/app-D3jH9lGE.js","assets/arrow-left-Cj72kKTl.js","assets/arrow-left-right-f-1Tm4gK.js","assets/arrow-right-DNWo8vhe.js","assets/arrow-up-down-D-kOdu30.js","assets/article-BgMcgmPD.css","assets/article-CSPcCaPP.js","assets/backup-CrG9-qV9.js","assets/book-open-Cu-WB1gh.js","assets/build-CwuBT7rY.js","assets/bundle-mjs-BCZgiF-g.js","assets/cargo-3BNIVv0A.css","assets/cargo-Tusf_Iax.js","assets/chevron-down-D6qzuP5Q.js","assets/chevron-right-BZwZ7Bp1.js","assets/chunk-BV7QT456-D05fNF4-.js","assets/circle-question-mark-BRxQ90Nt.js","assets/codec-CL8Dyfgb.js","assets/command-BTc9BpVy.js","assets/common-Bry_kOAD.js","assets/common-DqQxWZf6.js","assets/credit-eMakbqfx.js","assets/credit-wqsEhaWx.css","assets/database-DbOp_Kk3.js","assets/dist-73md-sHI.js","assets/dist-BINnNquy.js","assets/dist-BLT91B-D.js","assets/dist-BPuNt0v6.js","assets/dist-Bh-iuST7.js","assets/dist-CfYWvTvm.js","assets/dist-YGEkkWd1.js","assets/download-DU_a-dzm.js","assets/download-xqhsZXK5.js","assets/ellipsis-vertical-D8jE_fFm.js","assets/engineer-C-EJzynJ.css","assets/engineer-C1g_SMrI.js","assets/esm-B123jtWu.js","assets/field-qDZ6SCtQ.js","assets/file-text-CdabBDYk.js","assets/flag-DLeSOB-8.js","assets/folder-open-CmLKPjGy.js","assets/galaxy-B6_00B6w.js","assets/galaxy-BYqx99BF.js","assets/galaxy-DQEO-anZ.css","assets/game-CMlON69l.js","assets/gestures-DiGQiN-g.js","assets/globe-BXxu2wXl.js","assets/grip-vertical-B_L926m1.js","assets/hangar-BCqKbnYm.js","assets/hangar-BgrKsq0c.css","assets/header-lab-CdEH33Tl.js","assets/headline-DSH7Wm1Q.js","assets/help-B-WhdB2x.js","assets/help-BeHsrC55.js","assets/help-articles-YWlY3EuA.js","assets/help-content-CeUmkdis.js","assets/helpSearch-vLNrFSQf.js","assets/highs-B_nfHoE0.wasm","assets/i18n-BTPBc8ay.js","assets/i18n-CfM8RZsH.js","assets/index-Cz2EAe2c.js","assets/index-DoVcwAIc.css","assets/info-DhYb62fx.js","assets/inputs-DOWqMDau.js","assets/jsx-runtime-BtH0gOTJ.js","assets/kept-CnXcg5eQ.js","assets/list-UqDegLCr.js","assets/loadouts-C8CaI3C9.js","assets/lock-C0CfhYu1.js","assets/map-2Mt7tJGA.js","assets/map-C2_3cVnA.js","assets/map-CqJ5SkG0.css","assets/map-pin-CKjy8PsI.js","assets/materials-BmQ6xv9A.css","assets/materials-ILr7UwWI.js","assets/mods-DDICm3Dr.js","assets/overlays-CPDS-nAU.js","assets/package-CPR9EG-L.js","assets/panel-BT7lSZnH.js","assets/panel-lab-C4qipYcA.js","assets/panels-B-PcwiWz.js","assets/pickers-hboTfmUw.js","assets/plus-weOn6_RA.js","assets/position-BQP78jEJ.js","assets/prefs-DtZJiFb5.js","assets/preload-helper-BZ1Pz5am.js","assets/quests-B9EATHkB.css","assets/quests-mstIc3PY.js","assets/react-BbcNmIHv.js","assets/react-DB-4Zxce.js","assets/react-dom-DEdkSy2c.js","assets/read-BShTMooR.js","assets/record-0xnyLDsa.css","assets/record-CmMGULmE.js","assets/reference-pA-DyXo0.js","assets/render-gWCV15bM.js","assets/rotate-ccw-DB3A0lIe.js","assets/rules-Dg0ww3_a.js","assets/save-BtKDzOEg.js","assets/save-y1kw7Ngr.js","assets/search-CGv-Wy7l.js","assets/search-Dpp-hUJL.js","assets/search-lab-BSmzvwSW.js","assets/share-Css_gF1M.js","assets/share-DPdk6W8R.js","assets/shared-5xILufzH.js","assets/sheet-CYIobCf3.js","assets/shell-BDLGcgQu.js","assets/shell-lab-BZ0uhIoC.js","assets/ship-BwLi3ESZ.css","assets/ship-CQOxcYBT.js","assets/smartphone-BOW7yRLq.js","assets/sparkles-BswtknlV.js","assets/station-B0H80zCg.js","assets/station-DgLDxETI.css","assets/storage-Dg3FJPTK.js","assets/storage-Dz6I6nRO.css","assets/storage-QGOEGf_B.js","assets/strings-BwbRdQlW.js","assets/strings-D9JklZxg.js","assets/strings-DN47r1U6.js","assets/swords-RutSHCj9.js","assets/triangle-alert-BC7rlLRK.js","assets/u01-0DtgZwe8.css","assets/u01-CiVrrNFk.js","assets/u03-BVZGdn8y.js","assets/u03-DSmyRqS4.css","assets/u04-BcMc-ECk.css","assets/u04-BepyArAp.js","assets/u05-BdL8A85j.js","assets/u05-BkvoXATF.css","assets/u06-B8AsCiLS.js","assets/u06-BCOm372v.css","assets/u07-5zD6LWAa.css","assets/u07-Bpn7vo-k.js","assets/u11-CxVOTfPr.css","assets/u11-MWyVJVku.js","assets/u12-B2rkX52P.js","assets/u12-BTyJPmax.css","assets/u17-Ckqq9yEA.js","assets/u18-BvekxYl5.js","assets/u18-CQSTBw2W.css","assets/u19-B4eGiR1b.js","assets/u19-Ch1eMoDs.css","assets/u20-BzOaf-k5.js","assets/u26-DdtN-zsh.js","assets/u26-OOU6384h.css","assets/u27-6izHQcMv.css","assets/u27-B0jQkq4u.js","assets/u28-DkLpnHUn.js","assets/u29-DLV5GOoq.js","assets/u30-ClG2to3L.js","assets/ui-DUoUlKQN.js","assets/ui-lab-CeHZUUpC.js","assets/unit-DOc6skV4.js","assets/useFit-ChMuoklw.js","assets/utils-BS0zV8On.js","assets/wand-dInQ30Pl.js","assets/wiki-BV33LpfO.js","assets/worker-DYBW_De8.js","assets/wrench-CTeLQub2.js","galaxy-map/app.js","galaxy-map/data/cells.png","galaxy-map/data/detail.json","galaxy-map/data/galaxy.json","galaxy-map/data/lang/cn.json","galaxy-map/data/lang/en.json","galaxy-map/data/lang/es.json","galaxy-map/data/lang/pt.json","galaxy-map/data/lang/ru.json","galaxy-map/data/reachable.png","galaxy-map/data/rich2m.bin","galaxy-map/data/side.webp","galaxy-map/data/zones.webp","galaxy-map/icon-180.png","galaxy-map/icon.svg","galaxy-map/index.html","galaxy-map/style.css","icons/icon-128.png","icons/icon-144.png","icons/icon-152.png","icons/icon-16.png","icons/icon-180.png","icons/icon-192.png","icons/icon-256.png","icons/icon-32.png","icons/icon-384.png","icons/icon-48.png","icons/icon-512.png","icons/icon-72.png","icons/icon-96.png","icons/icon.svg","index.html","manifest.webmanifest","mods/data/galaxy.json","mods/data/save-data.json","mods/data/save-lang.json","mods/data/side.webp","mods/data/zones.webp","mods/icon-180.png","mods/icon-192.png","mods/icon-512.png","mods/icon-maskable-512.png","mods/icon.svg","mods/manifest.webmanifest","wiki/articles.json","wiki/data.json","wiki/files/StoryAlt/Quest150.json","wiki/files/StoryAlt/Quest151.json"]
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
