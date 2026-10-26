// The battle simulator's controller, a module worker:
//
//   const sim = new Worker(new URL('sim/dist/worker.js', base), { type: 'module' });
//   sim.postMessage({ type: 'run', scenario, seeds: [1, 2, 3], threads });
//   sim.postMessage({ type: 'stop' });
//
// It answers { type: 'progress', done, total, partial } after each fight and
// { type: 'result', ...summary, stopped } at the end, or { type: 'error', message }.
// A summary is { wins, kills, fightTimeAvg, ships: [{ survival, hullAvg, shieldAvg }], fights }:
// wins counts fights won, kills is enemies killed per fight, fightTimeAvg is
// game seconds per fight, and ships follow the scenario's order. `fights`
// holds each fight's record, as experiment.mjs returns it.
// Each fight runs in its own fight-worker.js; `threads` of them at once.
const DATA = new URL('./data/', import.meta.url);
const FIGHT = new URL('./fight-worker.js', import.meta.url);
let files = null, run = null;

const mean = (xs) => (xs.length ? xs.reduce((a, x) => a + x, 0) / xs.length : 0);
function summary(fights) {
  const n = fights.length;
  return {
    wins: fights.filter((f) => f.winner === 0).length,
    kills: mean(fights.map((f) => f.ships.filter((s) => s.team === 1 && !s.alive).length)),
    fightTimeAvg: mean(fights.map((f) => f.seconds)),
    ships: n ? fights[0].ships.map((_, i) => ({
      survival: fights.filter((f) => f.ships[i].alive).length / n,
      hullAvg: mean(fights.map((f) => f.ships[i].hull)),
      shieldAvg: mean(fights.map((f) => f.ships[i].shield)),
    })) : [],
    fights,
  };
}

/// data/manifest.json's files as fight-worker.js takes them: `{ '/gg/<path>': ArrayBuffer }`.
async function load() {
  const get = async (rel) => { const r = await fetch(new URL(rel, DATA)); if (!r.ok) throw new Error(`${rel}: HTTP ${r.status}`); return r; };
  const list = await (await get('manifest.json')).json();
  return Object.fromEntries(await Promise.all(list.map(async (rel) => ['/gg/' + rel, await (await get(rel)).arrayBuffer()])));
}

async function start({ scenario, seeds, threads }) {
  files ??= await load();
  const me = (run = { workers: new Map(), stopped: false });
  const fights = [];
  let next = 0;
  const one = (seed) => new Promise((ok, fail) => {
    const w = new Worker(FIGHT, { type: 'module' });
    me.workers.set(w, () => ok(null));
    const end = () => { w.terminate(); me.workers.delete(w); };
    w.onmessage = ({ data }) => { end(); data.type === 'fight' ? ok(data.result) : fail(new Error(data.message)); };
    w.onerror = (e) => { end(); fail(new Error(e.message || 'the fight worker failed to load')); };
    w.postMessage({ files, scenario, seed });
  });
  const lanes = Math.max(1, Math.min(seeds.length, threads ?? Math.min(4, (navigator.hardwareConcurrency || 2) - 1)));
  await Promise.all(Array.from({ length: lanes }, async () => {
    while (!me.stopped && next < seeds.length) {
      const i = next++;
      fights[i] = await one(seeds[i]);
      if (me.stopped) return;
      const done = fights.filter(Boolean);
      postMessage({ type: 'progress', done: done.length, total: seeds.length, partial: summary(done) });
    }
  }));
  if (run === me) run = null;
  postMessage({ type: 'result', ...summary(fights.filter(Boolean)), stopped: me.stopped });
}

function stop() {
  if (!run) return;
  run.stopped = true;
  for (const [w, cancel] of run.workers) { w.terminate(); cancel(); }
  run.workers.clear();
}

onmessage = ({ data }) => {
  if (data.type === 'stop') return stop();
  if (data.type !== 'run') return;
  stop();
  start(data).catch((e) => { stop(); postMessage({ type: 'error', message: String(e?.stack ?? e) }); });
};
