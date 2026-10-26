import { t as fs_default } from "./fs-fg_DKUrq.js";
import { S as player, b as os_default, f as $native, v as setDirectories, x as path_default, y as fileURLToPath } from "./runtime-CdqNm_ch.js";
import * as g from "./generated.js";
//#region ../../as3c-wt/js/js/harness.mjs
const ROOT = new URL("../../../extracted/assets/", "file:///gg/as3c-wt/js/js/harness.mjs");
function start(Document, options = {}) {
	const { width = 1616, height = 720, contentsScaleFactor = 2, files = ROOT } = options;
	player.natives = new Proxy({}, { get: (_, n) => $native(n) });
	player.files = files;
	player.definitions = options.definitions;
	if (options.seed !== void 0) Math.random = mulberry32(options.seed);
	if (options.store) {
		const own = fs_default.mkdtempSync(path_default.join(os_default.tmpdir(), "gg-js-"));
		fs_default.cpSync(fileURLToPath(options.store), path_default.join(own, "storage", "#SharedObjects", "Release_x64.swf"), { recursive: true });
		setDirectories(fileURLToPath(files).replace(/\/$/, ""), path_default.join(own, "documents"), path_default.join(own, "storage"));
	}
	const Stage = $native("Stage");
	player.stage = new Stage(width, height, contentsScaleFactor);
	player.document = null;
	const main = new Document();
	player.document = void 0;
	Stage.$resize(width, height);
	return main;
}
const frame = (ms) => $native("Stage").$frame(ms);
function mulberry32(seed) {
	let a = seed >>> 0;
	return () => {
		a = a + 1831565813 >>> 0;
		let t = Math.imul(a ^ a >>> 15, 1 | a);
		t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
		return ((t ^ t >>> 14) >>> 0) / 4294967296;
	};
}
//#endregion
//#region ../../as3c-wt/js/js/newgame.mjs
function startTheGame(options = {}) {
	start(g.Main, {
		definitions: g,
		...options
	});
	for (let n = 0; n < 600; n++) {
		frame(16);
		if (g.Game.instance?.mainM_BG) return g.Game.instance;
	}
	throw new Error("the game did not reach the main menu in 600 frames");
}
function startANewGame(options = {}) {
	const game = startTheGame(options);
	const save = new g.Save();
	save._slot = 0;
	g.SaveSlotsScreen.selectedSave = save;
	game.LoadUniverse(() => {});
	if (!g.Universe._instance) throw new Error("the game did not build its Universe");
	return g.Universe._instance;
}
function opening(seed = 1) {
	startANewGame({ seed });
	const ship = g.ShipsManager.player_ship;
	for (let n = 0; n < 3e3 && (ship.AFKTime > 0 || ship.LeftEngineOn || ship.RightEngineOn); n++) frame(16);
	for (let tap = 0; tap < 100 && g.DialogManager.dialogCount > 0; tap++) {
		const button = g.DialogManager.board?.buttons.find((b) => b.visible);
		if (button && g.DialogBoard._isOpened) {
			g.Starling.current.dispatchEventWith(g.Events.DIALOG_BUTTON_END_TOUCH, true, {
				questID: button.questID,
				stepID: button.stepID
			});
			button.visible = false;
		}
		for (let n = 0; n < 60; n++) frame(16);
	}
	if (g.DialogManager.dialogCount > 0) throw new Error("the opening dialogs never closed");
	g.Game.save_settings._settings2.autoTargetSelect = true;
	return ship;
}
//#endregion
//#region ../../as3c-wt/js/js/outcome.mjs
const dead = (s) => s.killMe || !s.info || s.info.Hull <= 0;
const shotTimes = (s) => s.modules?.ModulesBlocks.map((m) => m?.lastShotTime) ?? [];
function outcome(ships, clock) {
	const t0 = clock();
	const state = ships.map((ship) => ({
		ship,
		shots: 0,
		peak: -Infinity,
		lastShot: t0,
		gap: 0,
		last: shotTimes(ship),
		died: null
	}));
	const read = (st) => {
		const { ship } = st;
		if (st.died !== null) return;
		if (dead(ship)) {
			st.died = clock() - t0;
			return;
		}
		const { Hull, HullMax, Shield, ShieldMax, Temperature } = ship.info;
		Object.assign(st, {
			hull: Hull,
			hullMax: HullMax,
			shield: Shield,
			shieldMax: ShieldMax
		});
		st.peak = Math.max(st.peak, Temperature);
		const now = shotTimes(ship);
		const before = st.shots;
		now.forEach((t, i) => {
			if (t !== void 0 && t !== st.last[i]) st.shots++;
		});
		if (st.shots > before) {
			st.gap = Math.max(st.gap, clock() - st.lastShot);
			st.lastShot = clock();
		}
		st.last = now;
	};
	state.forEach(read);
	return {
		tick() {
			state.forEach(read);
		},
		record() {
			return {
				seconds: clock() - t0,
				ships: state.map((st) => ({
					name: st.ship.info?.shipName ?? st.ship.name,
					alive: st.died === null,
					died: st.died,
					hull: st.died === null ? st.hull : 0,
					hullMax: st.hullMax,
					shield: st.died === null ? st.shield : 0,
					shieldMax: st.shieldMax,
					shots: st.shots,
					peakTemperature: st.peak,
					longestGap: st.gap
				}))
			};
		}
	};
}
//#endregion
export { dead, frame, g, opening, outcome };
