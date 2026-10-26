//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", {
	value,
	configurable: true
});
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region sim/src/node/buffer.js
const latin1 = (b, s, e) => {
	let t = "";
	for (let i = s; i < e; i += 8192) t += String.fromCharCode.apply(null, b.subarray(i, Math.min(e, i + 8192)));
	return t;
};
var Buffer$1 = class Buffer$1 extends Uint8Array {
	static {
		__name(this, "Buffer");
	}
	static from(x, enc) {
		if (typeof x === "string") return Buffer$1.from(enc === "latin1" ? Uint8Array.from(x, (c) => c.charCodeAt(0)) : new TextEncoder().encode(x));
		return x instanceof ArrayBuffer ? new Buffer$1(x) : new Buffer$1(x.buffer ? x.buffer.slice(x.byteOffset, x.byteOffset + x.byteLength) : x);
	}
	static alloc(n) {
		return new Buffer$1(n);
	}
	static isBuffer(x) {
		return x instanceof Buffer$1;
	}
	static concat(list) {
		const out = new Buffer$1(list.reduce((n, b) => n + b.length, 0));
		let at = 0;
		for (const b of list) {
			out.set(b, at);
			at += b.length;
		}
		return out;
	}
	#dv() {
		return new DataView(this.buffer, this.byteOffset, this.byteLength);
	}
	toString(enc = "utf8", start = 0, end = this.length) {
		return enc === "latin1" || enc === "binary" || enc === "ascii" ? latin1(this, start, end) : new TextDecoder().decode(this.subarray(start, end));
	}
	readUInt8(o) {
		return this[o];
	}
	readUInt16LE(o) {
		return this.#dv().getUint16(o, true);
	}
	readUInt16BE(o) {
		return this.#dv().getUint16(o, false);
	}
	readUInt32LE(o) {
		return this.#dv().getUint32(o, true);
	}
	readUInt32BE(o) {
		return this.#dv().getUint32(o, false);
	}
	readInt16LE(o) {
		return this.#dv().getInt16(o, true);
	}
	readInt32LE(o) {
		return this.#dv().getInt32(o, true);
	}
	readFloatLE(o) {
		return this.#dv().getFloat32(o, true);
	}
	readDoubleLE(o) {
		return this.#dv().getFloat64(o, true);
	}
	equals(b) {
		return this.length === b.length && this.every((v, i) => v === b[i]);
	}
};
//#endregion
//#region sim/src/node/fs.js
const files = /* @__PURE__ */ new Map();
const dirs = /* @__PURE__ */ new Set(["/"]);
const key = (p) => (p instanceof URL ? decodeURIComponent(p.pathname) : String(p).replace(/^file:\/\//, "")).replace(/\/+$/, "") || "/";
const parent = (p) => p.slice(0, p.lastIndexOf("/")) || "/";
const addDir = (d) => {
	for (; !dirs.has(d); d = parent(d)) dirs.add(d);
};
const missing = (p) => Object.assign(/* @__PURE__ */ new Error(`ENOENT: no such file or directory, '${p}'`), { code: "ENOENT" });
function mount(entries) {
	for (const [p, bytes] of Object.entries(entries)) {
		files.set(p, new Uint8Array(bytes));
		addDir(parent(p));
	}
}
function readFileSync(p, opt) {
	const k = key(p);
	const b = files.get(k);
	if (!b) throw missing(k);
	const enc = typeof opt === "string" ? opt : opt?.encoding;
	return enc ? Buffer$1.from(b).toString(enc) : Buffer$1.from(b);
}
function readdirSync(p) {
	const k = key(p);
	if (!dirs.has(k)) throw missing(k);
	const pre = k === "/" ? "/" : k + "/";
	const names = /* @__PURE__ */ new Set();
	for (const f of [...files.keys(), ...dirs]) if (f.startsWith(pre) && f !== k) names.add(f.slice(pre.length).split("/")[0]);
	return [...names].sort();
}
const existsSync = (p) => files.has(key(p)) || dirs.has(key(p));
function statSync(p, opt) {
	const k = key(p);
	if (!existsSync(k)) {
		if (opt?.throwIfNoEntry === false) return void 0;
		throw missing(k);
	}
	const dir = dirs.has(k);
	return {
		isDirectory: () => dir,
		isFile: () => !dir,
		size: dir ? 0 : files.get(k).length
	};
}
function mkdirSync(p) {
	addDir(key(p));
}
function writeFileSync(p, data) {
	const k = key(p);
	files.set(k, typeof data === "string" ? new TextEncoder().encode(data) : new Uint8Array(data));
	addDir(parent(k));
}
var fs_default = {
	readFileSync,
	readdirSync,
	existsSync,
	statSync,
	mkdirSync,
	writeFileSync
};
//#endregion
export { Buffer$1 as a, readdirSync as i, mount as n, __exportAll as o, readFileSync as r, __name as s, fs_default as t };
