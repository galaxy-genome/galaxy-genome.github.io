import { a as Buffer, n as mount } from "./fs-fg_DKUrq.js";
//#region sim/src/fight.js
function fight({ opening, frame, g, outcome, dead }, scenario, seed) {
	const [hero, ...foes] = scenario.ships;
	if (hero.npc || hero.team !== 0 || foes.some((s) => !s.npc || s.team !== 1)) throw new Error("a scenario is the player on team 0 against NPCs on team 1");
	const staticOf = (key) => {
		const [cls, name] = key.split("."), v = g[cls]?.[name];
		if (v === void 0) throw new Error(`the game has no ${key}`);
		return v;
	};
	const spawn = (f) => {
		const level = f.level ? staticOf(`ShipLevel.${f.level}`) : g.ShipLevel.Level1;
		if (f.seed > 0) {
			g.Rndm.seed = f.seed;
			g.Rndm.reset();
		}
		const task = new g.MissionTask();
		task.TaskType = g.MissionTaskType.SpawnPirate;
		task.shipName = f.name;
		task.shipType = staticOf(f.ship);
		task.shipLevel = level;
		task.supportShips = 0;
		if (f.seed > 0) task.seed = f.seed;
		g.Starling.current.dispatchEventWith(g.Events.SPAWN_PIRATE, true, task);
		const enemy = g.Universe._instance.MANAGERS.find((m) => m instanceof g.ShipsManager).shipsNPC.find((s) => s.Name === f.name);
		if (!enemy) throw new Error("the spawn request made no ship");
		return enemy;
	};
	const start = opening(seed);
	g.Game.save_settings._settings.gameplay_autoAttackAnswer = true;
	g.ShipsManager.MakePlayerShip(staticOf(hero.ship));
	g.Starling.current.dispatchEventWith(g.Events.SPAWN_PLAYER_SHIP, true, {
		x: start.x,
		y: start.y
	});
	const player = g.ShipsManager.player_ship;
	const ships = [player, ...foes.map(spawn)];
	scenario.ships.forEach((s, i) => {
		const ship = ships[i], { modules, info } = ship;
		if (s.fit) {
			if (s.fit.length !== modules.ModulesBlocks.length) throw new Error(`${s.ship} has ${modules.ModulesBlocks.length} slots, the fit ${s.fit.length}`);
			s.fit.forEach((key, slot) => {
				modules.ModulesBlocks[slot] = null;
				if (key) modules.AddToSlotSaved(g.Module.setModule(staticOf(key)), slot);
			});
		} else if (!s.level) throw new Error(`${s.name}: a ship needs a fit or a level`);
		info.Hull = info.HullMax;
		info.Shield = info.ShieldMax;
		info.Fuel = info.FuelMax;
		const pips = s.pips ?? {
			wep: modules.powerWepPrior,
			eng: modules.powerEngPrior,
			sys: modules.powerSysPrior
		};
		for (let n = 0; n < 12; n++) if (modules.powerWepPrior < pips.wep) info.addPowerPriorityWeapons();
		else if (modules.powerEngPrior < pips.eng) info.addPowerPriorityEngines();
		else if (modules.powerSysPrior < pips.sys) info.addPowerPrioritySystem();
		if (modules.powerWepPrior !== pips.wep || modules.powerEngPrior !== pips.eng || modules.powerSysPrior !== pips.sys) throw new Error(`${s.name}: pips ${JSON.stringify(pips)} not reachable`);
		ship.x = start.x + s.x_ls * g.screen.systemScale;
		ship.y = start.y + s.y_ls * g.screen.systemScale;
		ship.rotation = s.facing_degrees * Math.PI / 180 - ship.rotationBase;
		ship.speedX = ship.speedY = ship.speed = 0;
	});
	const clock = () => g.Game.save._progress.timeSpentInGame;
	const record = outcome(ships, clock);
	const t0 = clock();
	const over = () => dead(player) || ships.slice(1).every(dead);
	while (!over() && clock() - t0 < scenario.seconds) {
		frame(scenario.timestep_millis);
		record.tick();
	}
	const winner = dead(player) ? 1 : ships.slice(1).every(dead) ? 0 : null;
	const { seconds, ships: read } = record.record();
	return {
		seed,
		winner,
		seconds,
		ships: read.map((r, i) => ({
			...r,
			name: scenario.ships[i].name,
			team: scenario.ships[i].team
		}))
	};
}
//#endregion
//#region sim/src/fight-worker.js
onmessage = async ({ data: { files, scenario, seed } }) => {
	try {
		globalThis.Buffer = Buffer;
		mount(files);
		const t0 = performance.now();
		const engine = await import("./engine-BAv0_5Pa.js");
		const t1 = performance.now();
		let t2;
		const result = fight({
			...engine,
			opening: (s) => {
				const start = engine.opening(s);
				t2 = performance.now();
				return start;
			}
		}, scenario, seed);
		postMessage({
			type: "fight",
			result,
			ms: {
				load: t1 - t0,
				start: t2 - t1,
				fight: performance.now() - t2
			}
		});
	} catch (e) {
		postMessage({
			type: "error",
			message: String(e?.stack ?? e)
		});
	}
};
//#endregion
