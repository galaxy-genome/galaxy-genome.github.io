import { a as Buffer$1, i as readdirSync, o as __exportAll, r as readFileSync, s as __name, t as fs_default } from "./fs-fg_DKUrq.js";
//#region ../../as3c-wt/js/js/natives/object.mjs
var $O = class $O {
	constructor(...a) {
		const c = Object.hasOwn(new.target, "$ctor") ? new.target.$ctor : "$ctor_" + new.target.name;
		if (c && this[c]) this[c](...a);
	}
	hasOwnProperty(name) {
		const n = String(name);
		return Object.hasOwn(this, n) || !n.startsWith("$") && n !== "constructor" && n in this && !(n in $O.prototype);
	}
};
const int$1 = {
	MAX_VALUE: 2147483647,
	MIN_VALUE: -2147483648
};
const uint$2 = {
	MAX_VALUE: 4294967295,
	MIN_VALUE: 0
};
//#endregion
//#region ../../as3c-wt/js/js/natives/player.mjs
const player = {
	now: 0,
	stage: null,
	document: void 0,
	waiting: [],
	timers: /* @__PURE__ */ new Set(),
	natives: null,
	later(fn) {
		this.waiting.push(fn);
	}
};
const broadcast = /* @__PURE__ */ new Set();
function frame(ms) {
	player.now += ms;
	const waiting = player.waiting;
	player.waiting = [];
	for (const fn of waiting) fn();
	for (const t of [...player.timers]) t.$tick(player.now);
	const Event = player.natives.Event;
	for (const o of [...broadcast]) o.$fire(new Event("enterFrame"), false);
}
//#endregion
//#region ../../as3c-wt/js/js/natives/top.mjs
var top_exports = /* @__PURE__ */ __exportAll({
	ArgumentError: () => ArgumentError,
	Class: () => Class,
	DefinitionError: () => DefinitionError,
	EOFError: () => EOFError,
	IOError: () => IOError,
	IllegalOperationError: () => IllegalOperationError,
	SecurityError: () => SecurityError,
	VerifyError: () => VerifyError,
	clock: () => clock,
	int: () => int$1,
	raise: () => raise,
	uint: () => uint$2
});
var ArgumentError = class extends Error {};
var SecurityError = class extends Error {};
var IOError = class extends Error {};
var EOFError = class extends IOError {};
var IllegalOperationError = class extends Error {};
var DefinitionError = class extends Error {};
var VerifyError = class extends Error {};
for (const C of [
	ArgumentError,
	SecurityError,
	IOError,
	EOFError,
	IllegalOperationError,
	DefinitionError,
	VerifyError
]) C.prototype.name = C.name;
Error.prototype.errorID = 0;
Error.prototype.getStackTrace = function() {
	return this.stack ?? null;
};
function raise(C, id, text) {
	const e = new C(`Error #${id}: ${text}`);
	e.errorID = id;
	return e;
}
function Class(v) {
	return v;
}
const jsSort = Array.prototype.sort;
function comparer(flags, by) {
	const key = (v) => by ? v?.[by] : v;
	const base = flags & 16 ? (a, b) => key(a) - key(b) : (a, b) => {
		let x = String(key(a));
		let y = String(key(b));
		if (flags & 1) {
			x = x.toLowerCase();
			y = y.toLowerCase();
		}
		return x < y ? -1 : x > y ? 1 : 0;
	};
	return flags & 2 ? (a, b) => base(b, a) : base;
}
function sorted(arr, cmp, flags) {
	if (flags & 4) {
		for (let i = 1; i < arr.length; i++) if (cmp(arr[i - 1], arr[i]) === 0 && [...arr].sort(cmp)) return 0;
	}
	if (flags & 8) return jsSort.call([...arr.keys()], (i, j) => cmp(arr[i], arr[j]));
	return jsSort.call(arr, cmp);
}
for (const [k, f] of Object.entries({
	insertAt(i, v) {
		this.splice(i, 0, v);
	},
	removeAt(i) {
		return this.splice(i, 1)[0];
	},
	sort(a, b) {
		if (typeof a === "function") return sorted(this, typeof b === "number" && b & 2 ? (x, y) => a(y, x) : a, typeof b === "number" ? b : 0);
		const flags = typeof a === "number" ? a : 0;
		return sorted(this, comparer(flags), flags);
	},
	sortOn(names, flags = 0) {
		const ns = [].concat(names);
		const fs = [].concat(flags);
		const cmps = ns.map((n, i) => comparer(fs[i] ?? fs[0] ?? 0, n));
		return sorted(this, (x, y) => {
			for (const c of cmps) {
				const r = c(x, y);
				if (r) return r;
			}
			return 0;
		}, fs[0] ?? 0);
	}
})) Object.defineProperty(Array.prototype, k, {
	value: f,
	writable: true,
	configurable: true
});
const clock = { epoch: null };
const JSDate = globalThis.Date.$js ?? globalThis.Date;
var AS3Date = class extends JSDate {
	constructor(...a) {
		if (a.length) super(...a);
		else super(clock.epoch === null ? JSDate.now() : clock.epoch + player.now);
	}
	static now() {
		return clock.epoch === null ? JSDate.now() : clock.epoch + player.now;
	}
};
AS3Date.$js = JSDate;
globalThis.Date = AS3Date;
const accessors = {
	date: "Date",
	dateUTC: "UTCDate",
	fullYear: "FullYear",
	fullYearUTC: "UTCFullYear",
	hours: "Hours",
	hoursUTC: "UTCHours",
	milliseconds: "Milliseconds",
	millisecondsUTC: "UTCMilliseconds",
	minutes: "Minutes",
	minutesUTC: "UTCMinutes",
	month: "Month",
	monthUTC: "UTCMonth",
	seconds: "Seconds",
	secondsUTC: "UTCSeconds",
	time: "Time"
};
const dp = JSDate.prototype;
for (const [k, m] of Object.entries(accessors)) Object.defineProperty(dp, k, {
	get() {
		return this["get" + m]();
	},
	set(v) {
		this["set" + m](v);
	},
	configurable: true
});
for (const [k, m] of Object.entries({
	day: "getDay",
	dayUTC: "getUTCDay",
	timezoneOffset: "getTimezoneOffset"
})) Object.defineProperty(dp, k, {
	get() {
		return this[m]();
	},
	configurable: true
});
const DAYS$1 = [
	"Sun",
	"Mon",
	"Tue",
	"Wed",
	"Thu",
	"Fri",
	"Sat"
];
const MONTHS$1 = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec"
];
const two = (n) => String(n).padStart(2, "0");
function flashFormat(d, utc, date, time) {
	if (Number.isNaN(d.getTime())) return "Invalid Date";
	const g = (m) => d[(utc ? "getUTC" : "get") + m]();
	const day = DAYS$1[g("Day")];
	const month = MONTHS$1[g("Month")];
	const year = g("FullYear");
	const clockText = `${two(g("Hours"))}:${two(g("Minutes"))}:${two(g("Seconds"))}`;
	const off = -d.getTimezoneOffset();
	const zone = `GMT${off < 0 ? "-" : "+"}${two(Math.floor(Math.abs(off) / 60))}${two(Math.abs(off) % 60)}`;
	if (utc) return `${day} ${month} ${g("Date")} ${clockText} ${year} UTC`;
	if (date && time) return `${day} ${month} ${g("Date")} ${clockText} ${zone} ${year}`;
	if (date) return `${day} ${month} ${g("Date")} ${year}`;
	return `${clockText} ${zone}`;
}
for (const [k, f] of Object.entries({
	toString() {
		return flashFormat(this, false, true, true);
	},
	toDateString() {
		return flashFormat(this, false, true, false);
	},
	toTimeString() {
		return flashFormat(this, false, false, true);
	},
	toUTCString() {
		return flashFormat(this, true, true, true);
	}
})) Object.defineProperty(dp, k, {
	value: f,
	writable: true,
	configurable: true
});
Object.defineProperty(RegExp.prototype, "dotall", {
	get() {
		return this.dotAll;
	},
	configurable: true
});
//#endregion
//#region ../../as3c-wt/js/js/natives/flash.events.mjs
var flash_events_exports = /* @__PURE__ */ __exportAll({
	ActivityEvent: () => ActivityEvent,
	ErrorEvent: () => ErrorEvent,
	Event: () => Event,
	EventDispatcher: () => EventDispatcher,
	EventPhase: () => EventPhase,
	FocusEvent: () => FocusEvent,
	FullScreenEvent: () => FullScreenEvent,
	GestureEvent: () => GestureEvent,
	HTTPStatusEvent: () => HTTPStatusEvent,
	IMEEvent: () => IMEEvent,
	IOErrorEvent: () => IOErrorEvent,
	KeyboardEvent: () => KeyboardEvent,
	MouseEvent: () => MouseEvent,
	ProgressEvent: () => ProgressEvent,
	SecurityErrorEvent: () => SecurityErrorEvent,
	SoftKeyboardEvent: () => SoftKeyboardEvent,
	TextEvent: () => TextEvent,
	TimerEvent: () => TimerEvent,
	TouchEvent: () => TouchEvent,
	TransformGestureEvent: () => TransformGestureEvent,
	UncaughtErrorEvent: () => UncaughtErrorEvent
});
const text$1 = /* @__PURE__ */ __name((v) => typeof v === "string" ? `"${v}"` : String(v), "text");
var Event = class extends $O {
	$ctor_Event(type, bubbles = false, cancelable = false) {
		this.$type = type;
		this.$bubbles = !!bubbles;
		this.$cancelable = !!cancelable;
		this.$target = null;
		this.$currentTarget = null;
		this.$phase = 0;
		this.$stop = 0;
		this.$prevented = false;
	}
	get type() {
		return this.$type;
	}
	get bubbles() {
		return this.$bubbles;
	}
	get cancelable() {
		return this.$cancelable;
	}
	get target() {
		return this.$target;
	}
	get currentTarget() {
		return this.$currentTarget;
	}
	get eventPhase() {
		return this.$phase;
	}
	clone() {
		const copy = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
		copy.$target = null;
		copy.$currentTarget = null;
		copy.$phase = 0;
		copy.$stop = 0;
		copy.$prevented = false;
		return copy;
	}
	stopPropagation() {
		this.$stop ||= 1;
	}
	stopImmediatePropagation() {
		this.$stop = 2;
	}
	preventDefault() {
		if (this.$cancelable) this.$prevented = true;
	}
	isDefaultPrevented() {
		return this.$prevented;
	}
	formatToString(className, ...names) {
		return `[${[className, ...names.map((n) => `${n}=${text$1(this[n])}`)].join(" ")}]`;
	}
	toString() {
		const C = this.constructor;
		return this.formatToString(C.$name ?? C.name, "type", "bubbles", "cancelable", "eventPhase", ...(C.$fields ?? []).map(([f]) => f));
	}
};
var EventPhase = class extends $O {};
const uint$1 = /* @__PURE__ */ __name((v) => v >>> 0, "uint");
const int = (v) => v | 0;
const bool$1 = /* @__PURE__ */ __name((v) => !!v, "bool");
function eventClass(name, Parent, bubbles, fields, after) {
	const C = { [name]: class extends Parent {} }[name];
	C.$fields = [...Parent.$fields ?? [], ...fields];
	C.prototype["$ctor_" + name] = function(type, b = bubbles, cancelable = false, ...rest) {
		this["$ctor_" + Parent.name](type, b, cancelable);
		fields.forEach(([f, d, coerce], i) => {
			const v = rest[i] === void 0 ? d : rest[i];
			this[f] = coerce ? coerce(v) : v;
		});
		after?.call(this);
	};
	return C;
}
function atLocal() {
	this.stageX = this.localX;
	this.stageY = this.localY;
}
const TextEvent = eventClass("TextEvent", Event, false, [["text", ""]]);
const IMEEvent = eventClass("IMEEvent", TextEvent, false, [["imeClient", null]]);
IMEEvent.prototype.$ctor_IMEEvent = function(type, bubbles = false, cancelable = false, text = "", imeClient = null) {
	this.$ctor_TextEvent(type, bubbles, cancelable, text);
	this.imeClient = imeClient;
};
const ErrorEvent = eventClass("ErrorEvent", TextEvent, false, []);
ErrorEvent.$fields = [["text"], ["errorID"]];
ErrorEvent.prototype.$ctor_ErrorEvent = function(type, bubbles = false, cancelable = false, text = "", id = 0) {
	this.$ctor_TextEvent(type, bubbles, cancelable, text);
	this.errorID = id | 0;
};
function errorEvent(name) {
	const C = { [name]: class extends ErrorEvent {} }[name];
	C.prototype["$ctor_" + name] = function(...a) {
		this.$ctor_ErrorEvent(...a);
	};
	return C;
}
const IOErrorEvent = errorEvent("IOErrorEvent");
const SecurityErrorEvent = errorEvent("SecurityErrorEvent");
var UncaughtErrorEvent = class extends ErrorEvent {
	$ctor_UncaughtErrorEvent(type = "uncaughtError", bubbles = true, cancelable = true, error = null) {
		this.$ctor_ErrorEvent(type, bubbles, cancelable, "", 0);
		this.error = error;
	}
};
const ProgressEvent = eventClass("ProgressEvent", Event, false, [[
	"bytesLoaded",
	0,
	Number
], [
	"bytesTotal",
	0,
	Number
]]);
const HTTPStatusEvent = eventClass("HTTPStatusEvent", Event, false, [[
	"status",
	0,
	int
], [
	"redirected",
	false,
	bool$1
]], function() {
	this.responseURL = null;
	this.responseHeaders = null;
});
const TimerEvent = eventClass("TimerEvent", Event, false, []);
const KeyboardEvent = eventClass("KeyboardEvent", Event, true, [
	[
		"charCode",
		0,
		uint$1
	],
	[
		"keyCode",
		0,
		uint$1
	],
	[
		"keyLocation",
		0,
		uint$1
	],
	[
		"ctrlKey",
		false,
		bool$1
	],
	[
		"altKey",
		false,
		bool$1
	],
	[
		"shiftKey",
		false,
		bool$1
	],
	[
		"controlKey",
		false,
		bool$1
	],
	[
		"commandKey",
		false,
		bool$1
	]
]);
const MouseEvent = eventClass("MouseEvent", Event, true, [
	[
		"localX",
		NaN,
		Number
	],
	[
		"localY",
		NaN,
		Number
	],
	["relatedObject", null],
	[
		"ctrlKey",
		false,
		bool$1
	],
	[
		"altKey",
		false,
		bool$1
	],
	[
		"shiftKey",
		false,
		bool$1
	],
	[
		"buttonDown",
		false,
		bool$1
	],
	[
		"delta",
		0,
		int
	],
	[
		"commandKey",
		false,
		bool$1
	],
	[
		"controlKey",
		false,
		bool$1
	],
	[
		"clickCount",
		0,
		int
	]
], atLocal);
const TouchEvent = eventClass("TouchEvent", Event, true, [
	[
		"touchPointID",
		0,
		int
	],
	[
		"isPrimaryTouchPoint",
		false,
		bool$1
	],
	[
		"localX",
		NaN,
		Number
	],
	[
		"localY",
		NaN,
		Number
	],
	[
		"sizeX",
		NaN,
		Number
	],
	[
		"sizeY",
		NaN,
		Number
	],
	[
		"pressure",
		NaN,
		Number
	],
	["relatedObject", null],
	[
		"ctrlKey",
		false,
		bool$1
	],
	[
		"altKey",
		false,
		bool$1
	],
	[
		"shiftKey",
		false,
		bool$1
	]
], atLocal);
const FocusEvent = eventClass("FocusEvent", Event, true, [
	["relatedObject", null],
	[
		"shiftKey",
		false,
		bool$1
	],
	[
		"keyCode",
		0,
		uint$1
	],
	["direction", "none"]
], function() {
	this.isRelatedObjectInaccessible = false;
});
const SoftKeyboardEvent = eventClass("SoftKeyboardEvent", Event, false, [["relatedObject", null], ["triggerType", null]]);
const GestureEvent = eventClass("GestureEvent", Event, true, [
	["phase", null],
	[
		"localX",
		0,
		Number
	],
	[
		"localY",
		0,
		Number
	],
	[
		"ctrlKey",
		false,
		bool$1
	],
	[
		"altKey",
		false,
		bool$1
	],
	[
		"shiftKey",
		false,
		bool$1
	]
], atLocal);
var TransformGestureEvent = class extends GestureEvent {
	$ctor_TransformGestureEvent(type, bubbles = true, cancelable = false, phase = null, localX = 0, localY = 0, scaleX = 1, scaleY = 1, rotation = 0, offsetX = 0, offsetY = 0, ctrlKey = false, altKey = false, shiftKey = false, commandKey = false, controlKey = false, velocity = 0) {
		this.$ctor_GestureEvent(type, bubbles, cancelable, phase, localX, localY, ctrlKey, altKey, shiftKey);
		Object.assign(this, {
			scaleX,
			scaleY,
			rotation,
			offsetX,
			offsetY,
			velocity
		});
	}
};
TransformGestureEvent.$fields = [
	...GestureEvent.$fields,
	["scaleX"],
	["scaleY"],
	["rotation"],
	["offsetX"],
	["offsetY"],
	["velocity"]
];
const ActivityEvent = eventClass("ActivityEvent", Event, false, [[
	"activating",
	false,
	bool$1
]]);
const FullScreenEvent = eventClass("FullScreenEvent", ActivityEvent, false, []);
FullScreenEvent.$fields = [
	...ActivityEvent.$fields,
	["fullScreen"],
	["interactive"]
];
FullScreenEvent.prototype.$ctor_FullScreenEvent = function(type, bubbles = false, cancelable = false, fullScreen = false, interactive = false) {
	this.$ctor_ActivityEvent(type, bubbles, cancelable, fullScreen);
	this.fullScreen = !!fullScreen;
	this.interactive = !!interactive;
};
const mustBe = (v, what) => {
	if (v == null) throw raise(TypeError, 2007, `Parameter ${what} must be non-null.`);
};
var EventDispatcher = class extends $O {
	$ctor_EventDispatcher(target = null) {
		this.$dispatchTarget = target;
	}
	get $listeners() {
		return this.$l ??= /* @__PURE__ */ new Map();
	}
	addEventListener(type, fn, useCapture = false, priority = 0) {
		mustBe(fn, "listener");
		priority |= 0;
		const list = this.$listeners.get(type) ?? [];
		if (list.some((l) => l.fn === fn && l.capture === !!useCapture)) return;
		let at = list.findIndex((l) => l.priority < priority);
		if (at < 0) at = list.length;
		this.$listeners.set(type, [
			...list.slice(0, at),
			{
				fn,
				capture: !!useCapture,
				priority
			},
			...list.slice(at)
		]);
	}
	removeEventListener(type, fn, useCapture = false) {
		mustBe(fn, "listener");
		const list = this.$l?.get(type);
		if (list) this.$l.set(type, list.filter((l) => !(l.fn === fn && l.capture === !!useCapture)));
	}
	hasEventListener(type) {
		return !!this.$l?.get(type)?.length;
	}
	willTrigger(type) {
		for (let o = this; o; o = o.parent) if (o.hasEventListener?.(type)) return true;
		return false;
	}
	toString() {
		return "[object EventDispatcher]";
	}
	$fire(event, capture) {
		event.$target ??= this;
		deliver(this, event, capture ? 1 : 2, capture);
		event.$currentTarget = null;
		event.$phase = 0;
	}
	dispatchEvent(event) {
		mustBe(event, "event");
		if (event.$target) event = event.clone();
		const target = this.$dispatchTarget ?? this;
		event.$target = target;
		event.$stop = 0;
		const path = [];
		for (let o = target.parent; o; o = o.parent) path.push(o);
		let going = true;
		for (let i = path.length - 1; i >= 0 && going; i--) going = deliver(path[i], event, 1, true);
		if (going) going = deliver(target, event, 2, false);
		if (going && event.$bubbles) for (let i = 0; i < path.length && deliver(path[i], event, 3, false); i++);
		event.$currentTarget = null;
		event.$phase = 0;
		return !event.$prevented;
	}
};
function deliver(at, event, phase, capture) {
	const list = at.$l?.get(event.$type);
	event.$currentTarget = at;
	event.$phase = phase;
	if (list) for (const l of list) {
		if (l.capture !== capture) continue;
		l.fn(event);
		if (event.$stop === 2) return false;
	}
	return event.$stop === 0;
}
//#endregion
//#region ../../as3c-wt/js/js/natives/top.xml.mjs
var top_xml_exports = /* @__PURE__ */ __exportAll({
	Namespace: () => Namespace,
	QName: () => QName,
	XML: () => XML,
	XMLList: () => XMLList
});
const element = (name, uri, attrs, children) => ({
	kind: "element",
	name,
	uri,
	attrs,
	children
});
const textNode = (text) => ({
	kind: "text",
	text
});
const unescape = (s) => s.replace(/&(lt|gt|amp|quot|apos|#\d+|#x[\da-f]+);/gi, (_, e) => ({
	lt: "<",
	gt: ">",
	amp: "&",
	quot: "\"",
	apos: "'"
})[e.toLowerCase()] ?? String.fromCodePoint(e[1] === "x" || e[1] === "X" ? parseInt(e.slice(2), 16) : +e.slice(1)));
const trimXml = (s) => s.replace(/^[ \t\n\r]+|[ \t\n\r]+$/g, "");
const fail = (why) => {
	throw raise(TypeError, 1090, `XML parser failure: ${why}.`);
};
function parse(source) {
	const trimmed = String(source).trim();
	const cdata = /^<!\[CDATA\[([\s\S]*)\]\]>$/.exec(trimmed);
	if (cdata && !cdata[1].includes("]]>")) return textNode(cdata[1]);
	if (!trimmed.startsWith("<")) return textNode(trimmed);
	const top = {
		children: [],
		scope: /* @__PURE__ */ new Map([["xml", "http://www.w3.org/XML/1998/namespace"]])
	};
	const stack = [top];
	let pending = null;
	const flush = () => {
		if (pending === null) return;
		const t = trimXml(pending);
		if (t) {
			if (stack.length === 1) fail("text outside the root element");
			stack[stack.length - 1].children.push(textNode(t));
		}
		pending = null;
	};
	for (const m of trimmed.matchAll(/<!\[CDATA\[([\s\S]*?)\]\]>|<!--[\s\S]*?-->|<\?[\s\S]*?\?>|<!DOCTYPE(?:[^[>]|\[[\s\S]*?\])*>|<\/\s*([^\s>]+)\s*>|<([^\s/>!?]+)((?:\s+[^\s=/>]+\s*=\s*(?:"[^"]*"|'[^']*'))*)\s*(\/?)>|([^<]+)|(<)/g)) if (m[1] !== void 0) pending = (pending ?? "") + m[1];
	else if (m[6] !== void 0) pending = (pending ?? "") + unescape(m[6]);
	else if (m[7]) fail("unexpected <");
	else if (m[2]) {
		flush();
		const open = stack.pop();
		if (stack.length === 0 || open.raw !== m[2]) fail(`</${m[2]}> closes nothing`);
	} else if (m[3]) {
		flush();
		const parent = stack[stack.length - 1];
		if (stack.length === 1 && top.children.length) fail("more than one root element");
		const scope = new Map(parent.scope);
		const attrs = [];
		for (const a of m[4].matchAll(/([^\s=]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g)) {
			const [k, v] = [a[1], unescape(a[2] ?? a[3])];
			if (k === "xmlns") scope.set("", v);
			else if (k.startsWith("xmlns:")) scope.set(k.slice(6), v);
			else attrs.push([k.includes(":") ? k.slice(k.indexOf(":") + 1) : k, v]);
		}
		const [prefix, local] = m[3].includes(":") ? m[3].split(":", 2) : ["", m[3]];
		const node = element(local, scope.get(prefix) ?? "", attrs, []);
		parent.children.push(node);
		if (!m[5]) stack.push({
			...node,
			raw: m[3],
			scope,
			node,
			children: node.children
		});
	}
	flush();
	if (stack.length > 1) fail(`<${stack[stack.length - 1].raw}> is not closed`);
	return top.children[0] ?? textNode("");
}
const isElement = (n) => n.kind === "element";
const nameOf = (n) => n.kind === "text" ? null : n.name;
const kids = (n) => isElement(n) ? n.children : [];
const simple = (n) => !kids(n).some(isElement);
function text(n) {
	if (n.kind === "text") return n.text;
	if (n.kind === "attribute") return n.value;
	return simple(n) ? n.children.map(text).join("") : markup(n, 0);
}
function escape(s, attribute) {
	return s.replace(/[&<>"\n\r\t]/g, (c) => {
		if (c === "&") return "&amp;";
		if (c === "<") return "&lt;";
		if (c === ">") return attribute ? c : "&gt;";
		if (!attribute) return c;
		return {
			"\"": "&quot;",
			"\n": "&#xA;",
			"\r": "&#xD;",
			"	": "&#x9;"
		}[c];
	});
}
function markup(n, depth) {
	const pad = "  ".repeat(depth);
	if (n.kind === "text") return pad + escape(n.text, false);
	if (n.kind === "attribute") return escape(n.value, true);
	const attrs = n.attrs.map(([k, v]) => ` ${k}="${escape(v, true)}"`).join("");
	if (!n.children.length) return `${pad}<${n.name}${attrs}/>`;
	if (simple(n)) return `${pad}<${n.name}${attrs}>${n.children.map((c) => escape(text(c), false)).join("")}</${n.name}>`;
	return `${pad}<${n.name}${attrs}>\n${n.children.map((c) => markup(c, depth + 1)).join("\n")}\n${pad}</${n.name}>`;
}
function wanted(name) {
	const s = name instanceof QName ? name.localName : String(name);
	return s === "*" ? null : s;
}
const named = (nodes, name) => nodes.filter((n) => isElement(n) && (name === null || n.name === name));
const attributesOf = (nodes, name) => nodes.flatMap((n) => (isElement(n) ? n.attrs : []).filter(([k]) => name === null || k === name).map(([k, v]) => ({
	kind: "attribute",
	name: k,
	value: v
})));
function childOf(nodes, name) {
	if (typeof name === "number") return nodes.flatMap((n) => kids(n)[name] ? [kids(n)[name]] : []);
	const want = wanted(name);
	return nodes.flatMap((n) => named(kids(n), want));
}
function descendantsOf(nodes, name) {
	const out = [];
	const walk = (n) => {
		for (const c of kids(n)) {
			if (isElement(c) && (name === null || c.name === name)) out.push(c);
			walk(c);
		}
	};
	nodes.forEach(walk);
	return out;
}
const textsOf = (nodes) => nodes.flatMap((n) => kids(n).filter((c) => c.kind === "text"));
function e4x(nodes, key) {
	if (key.startsWith("@")) return list(attributesOf(nodes, wanted(key.slice(1))));
	if (key.startsWith("..")) return list(descendantsOf(nodes, wanted(key.slice(2))));
	return list(childOf(nodes, key));
}
const stringMethod = (t, p) => typeof String.prototype[p] === "function" ? (...a) => t.toString()[p](...a) : null;
const index = (p) => typeof p === "string" && /^\d+$/.test(p) ? +p : -1;
const xmlTraps = {
	get(t, p, r) {
		if (typeof p === "symbol" || p in t) return Reflect.get(t, p, r);
		if (p === "0") return r;
		if (index(p) >= 0) return void 0;
		return (simple(t.$node) ? stringMethod(t, p) : null) ?? e4x([t.$node], p);
	},
	set(t, p, v, r) {
		if (typeof p !== "string" || !p.startsWith("@") || !isElement(t.$node)) return Reflect.set(t, p, v, r);
		const name = p.slice(1);
		const attrs = t.$node.attrs;
		const value = String(v);
		const at = attrs.findIndex(([k]) => k === name);
		if (at >= 0) attrs[at] = [name, value];
		else attrs.push([name, value]);
		return true;
	},
	ownKeys: () => ["0"],
	getOwnPropertyDescriptor(t, p) {
		return p === "0" ? {
			value: wrap(t.$node),
			enumerable: true,
			configurable: true,
			writable: false
		} : void 0;
	}
};
const wrap = (node) => {
	const x = Object.create(XML.prototype);
	Object.defineProperty(x, "$node", {
		value: node,
		configurable: true
	});
	return new Proxy(x, xmlTraps);
};
const list = (items) => {
	const l = Object.create(XMLList.prototype);
	Object.defineProperty(l, "$items", {
		value: items,
		writable: true,
		configurable: true
	});
	return new Proxy(l, listTraps);
};
var XML = class XML extends $O {
	constructor(value = null) {
		super();
		let node;
		if (value instanceof XML) node = value.$node;
		else if (value instanceof XMLList) {
			if (value.$items.length !== 1) throw raise(TypeError, 1088, "The markup in the document following the root element must be well-formed.");
			node = value.$items[0];
		} else if (value == null) node = textNode("");
		else if (value.$bytes instanceof Uint8Array) node = parse(new TextDecoder().decode(value.$bytes));
		else node = parse(String(value));
		Object.defineProperty(this, "$node", {
			value: node,
			configurable: true
		});
		return new Proxy(this, xmlTraps);
	}
	attribute(n) {
		return list(attributesOf([this.$node], wanted(n)));
	}
	attributes() {
		return list(attributesOf([this.$node], null));
	}
	child(n) {
		return list(childOf([this.$node], n));
	}
	children() {
		return list([...kids(this.$node)]);
	}
	elements(n = "*") {
		return list(named(kids(this.$node), wanted(n)));
	}
	descendants(n = "*") {
		return list(descendantsOf([this.$node], wanted(n)));
	}
	text() {
		return list(textsOf([this.$node]));
	}
	length() {
		return 1;
	}
	localName() {
		return nameOf(this.$node);
	}
	name() {
		return nameOf(this.$node);
	}
	namespace(prefix = null) {
		if (prefix != null) throw new Error("missing native: XML.namespace(prefix)");
		return new Namespace(isElement(this.$node) ? this.$node.uri : "");
	}
	appendChild(child) {
		const nodes = child instanceof XML ? [child.$node] : child instanceof XMLList ? [...child.$items] : [parse(String(child))];
		if (isElement(this.$node)) this.$node.children.push(...nodes);
		return this;
	}
	hasSimpleContent() {
		return simple(this.$node);
	}
	toString() {
		return text(this.$node);
	}
	toXMLString() {
		return markup(this.$node, 0);
	}
	valueOf() {
		return this.toString();
	}
	[Symbol.toPrimitive]() {
		return this.toString();
	}
};
const listTraps = {
	get(t, p, r) {
		if (typeof p === "symbol" || p in t) return Reflect.get(t, p, r);
		const i = index(p);
		if (i >= 0) return t.$get(i);
		return (t.$items.length === 1 || !t.$items.some(isElement) ? stringMethod(t, p) : null) ?? e4x(t.$items, p);
	},
	set(t, p, v, r) {
		const i = index(p);
		if (i >= 0) {
			t.$set(i, v);
			return true;
		}
		return Reflect.set(t, p, v, r);
	},
	deleteProperty(t, p) {
		const i = index(p);
		if (i >= 0) {
			t.$delete(i);
			return true;
		}
		return Reflect.deleteProperty(t, p);
	},
	has(t, p) {
		const i = index(p);
		return i >= 0 ? i < t.$items.length : Reflect.has(t, p);
	},
	ownKeys: (t) => t.$items.map((_, i) => String(i)),
	getOwnPropertyDescriptor(t, p) {
		const i = index(p);
		return i >= 0 && i < t.$items.length ? {
			value: wrap(t.$items[i]),
			enumerable: true,
			configurable: true,
			writable: true
		} : void 0;
	}
};
var XMLList = class XMLList extends $O {
	constructor(value = null) {
		super();
		let items;
		if (value == null) items = [];
		else if (value instanceof XMLList) items = [...value.$items];
		else if (value instanceof XML) items = [value.$node];
		else {
			const s = String(value);
			items = s.trim() ? [...kids(parse(`<list>${s}</list>`))] : [];
		}
		Object.defineProperty(this, "$items", {
			value: items,
			writable: true,
			configurable: true
		});
		return new Proxy(this, listTraps);
	}
	static of(...xmls) {
		return list(xmls.map((x) => x.$node));
	}
	[Symbol.iterator]() {
		return this.$items.map(wrap)[Symbol.iterator]();
	}
	$get(i) {
		const n = this.$items[i];
		return n === void 0 || i < 0 ? void 0 : wrap(n);
	}
	$set(i, v) {
		const nodes = v instanceof XML ? [v.$node] : v instanceof XMLList ? [...v.$items] : [textNode(String(v))];
		const at = Math.min(Math.max(0, Math.trunc(i)), this.$items.length);
		this.$items.splice(at, at < this.$items.length ? 1 : 0, ...nodes);
	}
	$delete(i) {
		if (i >= 0 && i < this.$items.length) this.$items.splice(i, 1);
		return true;
	}
	filter(f) {
		return list(this.$items.filter((n) => f(wrap(n))));
	}
	attribute(n) {
		return list(attributesOf(this.$items, wanted(n)));
	}
	attributes() {
		return list(attributesOf(this.$items, null));
	}
	child(n) {
		return list(childOf(this.$items, n));
	}
	children() {
		return list(this.$items.flatMap((n) => kids(n)));
	}
	elements(n = "*") {
		const w = wanted(n);
		return list(this.$items.flatMap((x) => named(kids(x), w)));
	}
	descendants(n = "*") {
		return list(descendantsOf(this.$items, wanted(n)));
	}
	text() {
		return list(textsOf(this.$items));
	}
	length() {
		return this.$items.length;
	}
	copy() {
		return list([...this.$items]);
	}
	toString() {
		return (this.$items.length === 1 ? simple(this.$items[0]) : !this.$items.some(isElement)) ? this.$items.map(text).join("") : this.toXMLString();
	}
	toXMLString() {
		return this.$items.map((n) => markup(n, 0)).join("\n");
	}
	valueOf() {
		return this.toString();
	}
	[Symbol.toPrimitive]() {
		return this.toString();
	}
};
var Namespace = class Namespace extends $O {
	$ctor_Namespace(prefixOrUri = void 0, uri = void 0) {
		const uriOf = (v) => v instanceof Namespace ? v.uri : v instanceof QName ? String(v.uri) : v == null ? "" : String(v);
		if (uri === void 0) {
			this.$uri = uriOf(prefixOrUri);
			this.$prefix = this.$uri === "" ? "" : void 0;
		} else {
			this.$uri = uriOf(uri);
			this.$prefix = prefixOrUri == null ? void 0 : String(prefixOrUri);
		}
	}
	get prefix() {
		return this.$prefix;
	}
	get uri() {
		return this.$uri;
	}
	toString() {
		return this.$uri;
	}
};
var QName = class QName extends $O {
	$ctor_QName(namespaceOrName = void 0, name = void 0) {
		if (name === void 0) {
			if (namespaceOrName instanceof QName) [this.$uri, this.$local] = [namespaceOrName.uri, namespaceOrName.localName];
			else [this.$uri, this.$local] = ["", namespaceOrName === void 0 ? "" : String(namespaceOrName)];
		} else {
			const ns = namespaceOrName;
			this.$uri = ns === null ? null : ns instanceof Namespace ? ns.uri : ns instanceof QName ? String(ns.uri) : ns === void 0 ? "" : String(ns);
			this.$local = name instanceof QName ? name.localName : String(name);
		}
	}
	get localName() {
		return this.$local;
	}
	get uri() {
		return this.$uri;
	}
	toString() {
		return this.$uri === "" ? this.$local : this.$uri === null ? `*::${this.$local}` : `${this.$uri}::${this.$local}`;
	}
};
//#endregion
//#region sim/src/swf-data.js
const DIR$1 = "/gg/swf/";
const HOLE = Symbol("unread");
const missing$2 = /* @__PURE__ */ __name((what) => {
	throw new Error(`not extracted for the browser build: ${what}`);
}, "missing");
function strict(o, where) {
	return new Proxy(o, { get(t, k, r) {
		if (typeof k !== "symbol" && !(k in t)) return missing$2(`${where}.${k}`);
		const v = Reflect.get(t, k, r);
		return v === HOLE ? missing$2(`${where}[${String(k)}]`) : v;
	} });
}
function revive(v, where) {
	if (v === null || typeof v !== "object") return v;
	if (v.$blob) return readFileSync(DIR$1 + v.$blob);
	if (v.$map) return new Map(v.$map);
	if (v.$num) return Number(v.$num);
	return strict(Array.isArray(v) ? v.map((e, i) => e?.$unread ? HOLE : revive(e, `${where}[${i}]`)) : Object.fromEntries(Object.entries(v).map(([k, e]) => [k, e?.$undef ? void 0 : revive(e, `${where}.${k}`)])), where);
}
function open$1() {
	const d = JSON.parse(readFileSync(DIR$1 + "swf.json", "utf8"));
	const chars = new Map(Object.entries(d.characters).map(([id, c]) => [Number(id), revive(c, `character ${id}`)]));
	const charMisses = new Set(d.charMisses.map(Number));
	const classes = new Map(Object.entries(d.classes));
	const classMisses = new Set(d.classMisses);
	return {
		characters: { get: (id) => chars.has(id) ? chars.get(id) : charMisses.has(id) ? void 0 : missing$2(`character ${id}`) },
		classes: {
			get: (name) => classes.has(name) ? classes.get(name) : classMisses.has(name) ? void 0 : missing$2(`class ${name}`),
			keys: () => d.allClasses ? classes.keys() : missing$2("the list of every class")
		},
		fonts: revive(d.fonts, "fonts")
	};
}
__name(open$1, "open");
//#endregion
//#region sim/src/node/zlib.js
const LBASE = [
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10,
	11,
	13,
	15,
	17,
	19,
	23,
	27,
	31,
	35,
	43,
	51,
	59,
	67,
	83,
	99,
	115,
	131,
	163,
	195,
	227,
	258
];
const LEXT = [
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	1,
	1,
	1,
	1,
	2,
	2,
	2,
	2,
	3,
	3,
	3,
	3,
	4,
	4,
	4,
	4,
	5,
	5,
	5,
	5,
	0
];
const DBASE = [
	1,
	2,
	3,
	4,
	5,
	7,
	9,
	13,
	17,
	25,
	33,
	49,
	65,
	97,
	129,
	193,
	257,
	385,
	513,
	769,
	1025,
	1537,
	2049,
	3073,
	4097,
	6145,
	8193,
	12289,
	16385,
	24577
];
const DEXT = [
	0,
	0,
	0,
	0,
	1,
	1,
	2,
	2,
	3,
	3,
	4,
	4,
	5,
	5,
	6,
	6,
	7,
	7,
	8,
	8,
	9,
	9,
	10,
	10,
	11,
	11,
	12,
	12,
	13,
	13
];
const ORDER = [
	16,
	17,
	18,
	0,
	8,
	7,
	9,
	6,
	10,
	5,
	11,
	4,
	12,
	3,
	13,
	2,
	14,
	1,
	15
];
function tree(lengths) {
	const counts = /* @__PURE__ */ new Uint16Array(16);
	const offs = /* @__PURE__ */ new Uint16Array(16);
	const symbols = new Uint16Array(lengths.length);
	for (const l of lengths) counts[l]++;
	counts[0] = 0;
	for (let i = 1; i < 16; i++) offs[i] = offs[i - 1] + counts[i - 1];
	lengths.forEach((l, s) => {
		if (l) symbols[offs[l]++] = s;
	});
	return {
		counts,
		symbols
	};
}
const FIXED_L = tree([
	...Array(144).fill(8),
	...Array(112).fill(9),
	...Array(24).fill(7),
	...Array(8).fill(8)
]);
const FIXED_D = tree(Array(30).fill(5));
function inflateRaw(src) {
	let pos = 0;
	let bit = 0;
	let bits = 0;
	let out = new Uint8Array(Math.max(1024, src.length * 4));
	let n = 0;
	const need = (k) => {
		while (bits < k) {
			if (pos >= src.length) throw new Error("inflate: unexpected end of data");
			bit |= src[pos++] << bits;
			bits += 8;
		}
	};
	const take = (k) => {
		if (!k) return 0;
		need(k);
		const v = bit & (1 << k) - 1;
		bit >>>= k;
		bits -= k;
		return v;
	};
	const grow = (k) => {
		if (n + k > out.length) {
			const o = new Uint8Array(Math.max(out.length * 2, n + k));
			o.set(out.subarray(0, n));
			out = o;
		}
	};
	const decode = ({ counts, symbols }) => {
		let code = 0;
		let first = 0;
		let index = 0;
		for (let len = 1; len < 16; len++) {
			code |= take(1);
			const c = counts[len];
			if (code - first < c) return symbols[index + code - first];
			index += c;
			first = first + c << 1;
			code <<= 1;
		}
		throw new Error("inflate: bad code");
	};
	for (let last = 0; !last;) {
		last = take(1);
		const type = take(2);
		if (type === 0) {
			bit = 0;
			bits = 0;
			const len = src[pos] | src[pos + 1] << 8;
			pos += 4;
			if (pos + len > src.length) throw new Error("inflate: unexpected end of data");
			grow(len);
			out.set(src.subarray(pos, pos + len), n);
			n += len;
			pos += len;
			continue;
		}
		if (type === 3) throw new Error("inflate: bad block type");
		let lt = FIXED_L;
		let dt = FIXED_D;
		if (type === 2) {
			const hlit = take(5) + 257;
			const hdist = take(5) + 1;
			const hclen = take(4) + 4;
			const cl = new Array(19).fill(0);
			for (let i = 0; i < hclen; i++) cl[ORDER[i]] = take(3);
			const ct = tree(cl);
			const lengths = [];
			while (lengths.length < hlit + hdist) {
				const s = decode(ct);
				if (s < 16) lengths.push(s);
				else if (s === 16) {
					const p = lengths.at(-1);
					for (let r = take(2) + 3; r; r--) lengths.push(p);
				} else for (let r = s === 17 ? take(3) + 3 : take(7) + 11; r; r--) lengths.push(0);
			}
			lt = tree(lengths.slice(0, hlit));
			dt = tree(lengths.slice(hlit));
		}
		for (;;) {
			const s = decode(lt);
			if (s < 256) {
				grow(1);
				out[n++] = s;
				continue;
			}
			if (s === 256) break;
			const len = LBASE[s - 257] + take(LEXT[s - 257]);
			const d = decode(dt);
			const dist = DBASE[d] + take(DEXT[d]);
			if (dist > n) throw new Error("inflate: distance too far back");
			grow(len);
			for (let i = 0; i < len; i++, n++) out[n] = out[n - dist];
		}
	}
	return Buffer$1.from(out.subarray(0, n));
}
function inflateSync(src) {
	if (src.length < 2 || (src[0] & 15) !== 8 || (src[0] << 8 | src[1]) % 31) throw new Error("inflate: incorrect header check");
	return inflateRaw(src.subarray(2));
}
const unsupported = () => {
	throw new Error("deflate is not in the browser build");
};
var zlib_default = {
	inflateSync,
	inflateRawSync: inflateRaw,
	deflateSync: unsupported,
	deflateRawSync: unsupported
};
//#endregion
//#region ../../as3c-wt/js/js/natives/swf.mjs
let library = null;
function open() {
	return open$1();
}
const fonts$1 = /* @__PURE__ */ __name(() => (library ??= open()).fonts, "fonts");
function font(name, bold = false, italic = false) {
	return fonts$1().find((f) => f.name === name && f.bold === !!bold && f.italic === !!italic)?.layout ?? null;
}
function linked$1(C) {
	library ??= open();
	const q = (C.$qname ?? C.name).replace("::", ".");
	const id = library.classes.get(q) ?? library.classes.get(q.split(".").pop());
	return id === void 0 ? null : library.characters.get(id) ?? null;
}
__name(linked$1, "linked");
const NO_COLOR = [
	1,
	1,
	1,
	1,
	0,
	0,
	0,
	0
];
const IDENTITY$1 = [
	1,
	0,
	0,
	1,
	0,
	0
];
function frameOf(id, frame = 1) {
	library ??= open();
	const ch = library.characters.get(id);
	if (!ch?.controls) return [];
	const list = /* @__PURE__ */ new Map();
	let shown = 0;
	for (const c of ch.controls) if (c.show) {
		if (++shown >= frame) break;
	} else if (c.remove !== void 0) list.delete(c.remove);
	else {
		const child = list.get(c.depth) ?? {
			depth: c.depth,
			id: 0,
			name: null,
			matrix: IDENTITY$1,
			color: NO_COLOR,
			filters: []
		};
		if (c.id !== void 0) child.id = c.id;
		if (c.name) child.name = c.name;
		if (c.matrix) child.matrix = c.matrix;
		if (c.color) child.color = c.color;
		if (c.filters) child.filters = c.filters;
		list.set(c.depth, child);
	}
	return [...list.values()].sort((a, b) => a.depth - b.depth).filter((c) => c.id);
}
const character = (id) => (library ??= open()).characters.get(id);
function classId(C) {
	library ??= open();
	const q = (C.$qname ?? C.name).replace("::", ".");
	return library.classes.get(q) ?? library.classes.get(q.split(".").pop());
}
function mul(m, n) {
	return [
		m[0] * n[0] + m[2] * n[1],
		m[1] * n[0] + m[3] * n[1],
		m[0] * n[2] + m[2] * n[3],
		m[1] * n[2] + m[3] * n[3],
		m[0] * n[4] + m[2] * n[5] + m[4],
		m[1] * n[4] + m[3] * n[5] + m[5]
	];
}
function transform(m, r) {
	const twip = (v) => Math.round(v * 20) / 20;
	return [
		[r[0], r[1]],
		[r[2], r[1]],
		[r[0], r[3]],
		[r[2], r[3]]
	].map(([x, y]) => [twip(m[0] * x + m[2] * y + m[4]), twip(m[1] * x + m[3] * y + m[5])]).reduce((b, [x, y]) => [
		Math.min(b[0], x),
		Math.min(b[1], y),
		Math.max(b[2], x),
		Math.max(b[3], y)
	], [
		Infinity,
		Infinity,
		-Infinity,
		-Infinity
	]);
}
function extent(id, frame, m = IDENTITY$1) {
	const ch = character(id);
	if (!ch) return null;
	if (ch.shape) return transform(ch.matrix ? mul(m, ch.matrix) : m, ch.shape);
	if (!ch.controls) return null;
	return frameOf(id, frame).map((c) => extent(c.id, 1, mul(m, c.matrix))).filter(Boolean).reduce((a, b) => a ? [
		Math.min(a[0], b[0]),
		Math.min(a[1], b[1]),
		Math.max(a[2], b[2]),
		Math.max(a[3], b[3])
	] : b, null);
}
function class_id(name) {
	library ??= open();
	return library.classes.get(name.replaceAll("::", ".")) ?? null;
}
const linkedTo = (name) => {
	const id = class_id(name);
	return id === null ? null : character(id) ?? null;
};
const unmultiply$1 = /* @__PURE__ */ __name((ch, a) => a === 0 ? 0 : Math.min(255, Math.floor((ch * 255 + (a >> 1)) / a)), "unmultiply");
function pixels(name) {
	const ch = linkedTo(name);
	if (!ch?.lossless && !ch?.image) return /* @__PURE__ */ new Uint32Array(0);
	const n = ch.width * ch.height;
	if (ch.image) throw new Error(`swf.pixels: ${name} is a JPEG, and JPEG pixels are not decoded yet`);
	const raw = inflateSync(ch.lossless.data);
	if (ch.lossless.format !== 5 || raw.length < n * 4) throw new Error(`swf.pixels: ${name}: only 32-bit lossless bitmaps are read, and this SWF holds no other kind`);
	const out = new Uint32Array(n);
	for (let i = 0; i < n; i++) {
		const a = ch.lossless.version === 2 ? raw[i * 4] : 255;
		out[i] = (a << 24 | unmultiply$1(raw[i * 4 + 1], a) << 16 | unmultiply$1(raw[i * 4 + 2], a) << 8 | unmultiply$1(raw[i * 4 + 3], a)) >>> 0;
	}
	return out;
}
const PASS_SCALES = [
	1,
	2.1,
	2.7,
	3.1,
	3.5,
	3.8,
	4,
	4.2,
	4.4,
	4.6,
	5,
	6,
	6,
	7,
	7
];
function filter_rect(r, f) {
	if (![
		"blur",
		"glow",
		"dropShadow",
		"bevel"
	].includes(f.type) || f.inner) return r;
	const k = PASS_SCALES[Math.min(Math.max(f.passes, 1), 15) - 1] / 2;
	const side = (b) => b === 0 ? Math.ceil(k) : Math.floor(k * b + .82);
	const dx = side(f.blurX);
	const dy = side(f.blurY);
	let x0 = r[0] - dx;
	let y0 = r[1] - dy;
	let x1 = r[0] + r[2] + dx;
	let y1 = r[1] + r[3] + dy;
	if (f.type === "dropShadow" || f.type === "bevel") {
		const sx = Math.cos(f.angle) * f.distance;
		const sy = Math.sin(f.angle) * f.distance;
		if (sx < 0) x0 += sx;
		else x1 += sx;
		if (sy < 0) y0 += sy;
		else y1 += sy;
	}
	x0 = Math.floor(x0);
	y0 = Math.floor(y0);
	return [
		x0,
		y0,
		Math.ceil(x1) - x0,
		Math.ceil(y1) - y0
	];
}
const raster = { sink: null };
//#endregion
//#region ../../as3c-wt/js/js/natives/decls.mjs
const DIR = new URL("../../runtime/decls/", "file:///gg/as3c-wt/js/js/natives/decls.mjs");
const classes = /* @__PURE__ */ new Map();
const functions = /* @__PURE__ */ new Map();
for (const file of readdirSync(DIR).filter((f) => f.endsWith(".as")).sort()) {
	let pkg = "";
	let depth = 0;
	let cls = null;
	let clsDepth = 0;
	for (const raw of readFileSync(new URL(file, DIR), "utf8").split("\n")) {
		const line = raw.replace(/\/\/.*$/, "").trim();
		let m;
		if (m = line.match(/^package\s*([\w.]*)/)) pkg = m[1];
		else if (m = line.match(/\b(class|interface)\s+(\w+)(?:\s+extends\s+([\w.]+))?/)) {
			cls = {
				package: pkg,
				name: m[2],
				dynamic: /\bdynamic\b/.test(line),
				extends: m[3]?.split(".").pop() ?? null,
				interface: m[1] === "interface",
				members: /* @__PURE__ */ new Map(),
				statics: /* @__PURE__ */ new Map(),
				consts: {}
			};
			classes.set(m[2], cls);
			clsDepth = depth + 1;
		} else if (cls && (m = line.match(/^public\s+(static\s+)?(?:override\s+)?(?:final\s+)?(function|var|const)\s+(?:(get|set)\s+)?(\w+)\s*(?:\(|:)/))) {
			const [, stat, what, acc, name] = m;
			if (name === cls.name && what === "function") continue;
			const kind = what === "function" ? acc ?? "method" : what;
			const into = stat ? cls.statics : cls.members;
			into.set(name, into.has(name) && kind !== into.get(name) ? "accessor" : kind);
			if (stat && what === "const") {
				const v = line.match(/=\s*(.+?);?$/)?.[1];
				if (v !== void 0) cls.consts[name] = JSON.parse(v.replace(/^'(.*)'$/, "\"$1\""));
			}
		} else if (!cls && (m = line.match(/^public\s+function\s+(\w+)\s*\(/))) functions.set(m[1], pkg);
		depth += (line.match(/{/g) ?? []).length - (line.match(/}/g) ?? []).length;
		if (cls && line.includes("}") && depth < clsDepth) cls = null;
	}
}
//#endregion
//#region ../../as3c-wt/js/js/natives/flash.utils.mjs
var flash_utils_exports = /* @__PURE__ */ __exportAll({
	$varsOf: () => $varsOf,
	ApplicationDomain: () => ApplicationDomain,
	ByteArray: () => ByteArray,
	Dictionary: () => Dictionary,
	Proxy: () => Proxy$1,
	Timer: () => Timer,
	amfString: () => amfString,
	clearInterval: () => clearInterval,
	clearTimeout: () => clearTimeout,
	definition: () => definition,
	describeType: () => describeType,
	getDefinitionByName: () => getDefinitionByName,
	getQualifiedClassName: () => getQualifiedClassName,
	getQualifiedSuperclassName: () => getQualifiedSuperclassName,
	getTimer: () => getTimer,
	putString: () => putString,
	resetTimers: () => resetTimers,
	runTimers: () => runTimers,
	setInterval: () => setInterval,
	setTimeout: () => setTimeout
});
var Dictionary = class extends Map {
	static $qname = "flash.utils::Dictionary";
	constructor() {
		super();
	}
};
function getTimer() {
	return player.now;
}
const eof = () => raise(EOFError, 2030, "End of file was encountered.");
const outOfBounds = () => raise(RangeError, 2006, "The supplied index is out of bounds.");
var ByteArray = class ByteArray extends $O {
	$ctor_ByteArray() {
		this.$buf = /* @__PURE__ */ new ArrayBuffer(64);
		this.$view = new DataView(this.$buf);
		this.$length = 0;
		this.$position = 0;
		this.$little = false;
		const bytes = this.constructor !== ByteArray && linked$1(this.constructor)?.bytes;
		if (bytes) this.$replace(bytes);
	}
	static $of(bytes) {
		const b = new ByteArray();
		b.$replace(bytes);
		return b;
	}
	get $bytes() {
		return new Uint8Array(this.$buf, 0, this.$length);
	}
	$replace(bytes) {
		this.$buf = new ArrayBuffer(Math.max(64, bytes.length));
		this.$view = new DataView(this.$buf);
		new Uint8Array(this.$buf).set(bytes);
		this.$length = bytes.length;
		this.$position = 0;
	}
	$reserve(n) {
		if (n <= this.$buf.byteLength) return;
		const next = new ArrayBuffer(Math.max(n, this.$buf.byteLength * 2));
		new Uint8Array(next).set(new Uint8Array(this.$buf));
		this.$buf = next;
		this.$view = new DataView(next);
	}
	get length() {
		return this.$length;
	}
	set length(v) {
		const n = v >>> 0;
		this.$reserve(n);
		if (n < this.$length) new Uint8Array(this.$buf, n, this.$length - n).fill(0);
		this.$length = n;
		if (this.$position > n) this.$position = n;
	}
	get position() {
		return this.$position;
	}
	set position(v) {
		this.$position = v >>> 0;
	}
	get bytesAvailable() {
		return Math.max(0, this.$length - this.$position);
	}
	get endian() {
		return this.$little ? "littleEndian" : "bigEndian";
	}
	set endian(v) {
		if (v === "littleEndian") this.$little = true;
		else if (v === "bigEndian") this.$little = false;
		else throw raise(ArgumentError, 2008, "Parameter type must be one of the accepted values.");
	}
	clear() {
		this.$buf = /* @__PURE__ */ new ArrayBuffer(64);
		this.$view = new DataView(this.$buf);
		this.$length = 0;
		this.$position = 0;
	}
	uncompress(algorithm = "zlib") {
		const inflate = algorithm === "zlib" ? zlib_default.inflateSync : algorithm === "deflate" ? zlib_default.inflateRawSync : null;
		if (!inflate) throw raise(ArgumentError, 2008, "Parameter algorithm must be one of the accepted values.");
		let out;
		try {
			out = inflate(this.$bytes);
		} catch {
			throw raise(IOError, 2058, "There was an error decompressing the data.");
		}
		this.$replace(out);
	}
	compress(algorithm = "zlib") {
		const deflate = algorithm === "zlib" ? zlib_default.deflateSync : algorithm === "deflate" ? zlib_default.deflateRawSync : null;
		if (!deflate) throw raise(ArgumentError, 2008, "Parameter algorithm must be one of the accepted values.");
		this.$replace(deflate(this.$bytes));
		this.$position = this.$length;
	}
	$take(size, read) {
		const at = this.$position;
		if (at + size > this.$length) throw eof();
		this.$position = at + size;
		return read(this.$view, at, this.$little);
	}
	$put(size, write) {
		const at = this.$position;
		this.$reserve(at + size);
		if (at > this.$length) new Uint8Array(this.$buf, this.$length, at - this.$length).fill(0);
		write(this.$view, at, this.$little);
		this.$position = at + size;
		if (this.$position > this.$length) this.$length = this.$position;
	}
	$putBytes(b) {
		this.$put(b.length, (d) => new Uint8Array(d.buffer).set(b, this.$position));
	}
	readByte() {
		return this.$take(1, (d, p) => d.getInt8(p));
	}
	readUnsignedByte() {
		return this.$take(1, (d, p) => d.getUint8(p));
	}
	readShort() {
		return this.$take(2, (d, p, le) => d.getInt16(p, le));
	}
	readUnsignedShort() {
		return this.$take(2, (d, p, le) => d.getUint16(p, le));
	}
	readInt() {
		return this.$take(4, (d, p, le) => d.getInt32(p, le));
	}
	readUnsignedInt() {
		return this.$take(4, (d, p, le) => d.getUint32(p, le));
	}
	readFloat() {
		return this.$take(4, (d, p, le) => d.getFloat32(p, le));
	}
	readDouble() {
		return this.$take(8, (d, p, le) => d.getFloat64(p, le));
	}
	readBoolean() {
		return this.readUnsignedByte() !== 0;
	}
	readUTF() {
		return this.$text(this.readUnsignedShort(), false);
	}
	readUTFBytes(length) {
		return this.$text(length >>> 0, true);
	}
	$text(n, skipBom) {
		const at = this.$position;
		if (at + n > this.$length) throw eof();
		let bytes = new Uint8Array(this.$buf, at, n);
		if (skipBom && bytes[0] === 239 && bytes[1] === 187 && bytes[2] === 191) bytes = bytes.subarray(3);
		const nul = bytes.indexOf(0);
		if (nul >= 0) bytes = bytes.subarray(0, nul);
		this.$position = at + n;
		return new TextDecoder().decode(bytes);
	}
	readBytes(bytes, offset = 0, length = 0) {
		const available = this.bytesAvailable;
		let n = length >>> 0;
		if (n === 0) n = available;
		else if (n > available) throw eof();
		const chunk = new Uint8Array(this.$buf, this.$position, n).slice();
		this.$position += n;
		offset >>>= 0;
		bytes.$reserve(offset + n);
		if (offset > bytes.$length) new Uint8Array(bytes.$buf, bytes.$length, offset - bytes.$length).fill(0);
		new Uint8Array(bytes.$buf, offset, n).set(chunk);
		if (offset + n > bytes.$length) bytes.$length = offset + n;
	}
	writeByte(v) {
		this.$put(1, (d, p) => d.setInt8(p, v | 0));
	}
	writeShort(v) {
		this.$put(2, (d, p, le) => d.setInt16(p, v | 0, le));
	}
	writeInt(v) {
		this.$put(4, (d, p, le) => d.setInt32(p, v | 0, le));
	}
	writeUnsignedInt(v) {
		this.$put(4, (d, p, le) => d.setUint32(p, v >>> 0, le));
	}
	writeFloat(v) {
		this.$put(4, (d, p, le) => d.setFloat32(p, v, le));
	}
	writeDouble(v) {
		this.$put(8, (d, p, le) => d.setFloat64(p, v, le));
	}
	writeBoolean(v) {
		this.writeByte(v ? 1 : 0);
	}
	writeUTF(s) {
		const b = new TextEncoder().encode(s);
		if (b.length > 65535) throw outOfBounds();
		this.writeShort(b.length);
		this.$putBytes(b);
	}
	writeUTFBytes(s) {
		this.$putBytes(new TextEncoder().encode(s));
	}
	writeBytes(bytes, offset = 0, length = 0) {
		const source = bytes.$bytes.slice();
		offset = Math.min(offset >>> 0, source.length);
		let n = length >>> 0;
		if (n === 0) n = source.length - offset;
		else if (offset + n > source.length) throw outOfBounds();
		this.$putBytes(source.subarray(offset, offset + n));
	}
	readObject() {
		const outer = this.$reading;
		this.$reading = outer ?? {
			strings: [],
			objects: [],
			traits: []
		};
		try {
			return amfRead(this);
		} finally {
			this.$reading = outer;
		}
	}
	writeObject(v) {
		const outer = this.$writing;
		this.$writing = outer ?? {
			strings: /* @__PURE__ */ new Map(),
			objects: /* @__PURE__ */ new Map(),
			traits: /* @__PURE__ */ new Map()
		};
		try {
			amfWrite(this, v);
		} finally {
			this.$writing = outer;
		}
	}
	$get(i) {
		return i >= 0 && i < this.$length ? new Uint8Array(this.$buf)[i] : void 0;
	}
	$set(i, v) {
		i >>>= 0;
		if (i >= this.$length) this.length = i + 1;
		new Uint8Array(this.$buf)[i] = v & 255;
	}
	toString() {
		return new TextDecoder().decode(this.$bytes).replace(/^﻿/, "");
	}
};
function amfString(b) {
	const outer = b.$reading;
	b.$reading = outer ?? {
		strings: [],
		objects: [],
		traits: []
	};
	try {
		return readString(b, b.$reading);
	} finally {
		b.$reading = outer;
	}
}
function putString(b, s) {
	const outer = b.$writing;
	b.$writing = outer ?? {
		strings: /* @__PURE__ */ new Map(),
		objects: /* @__PURE__ */ new Map(),
		traits: /* @__PURE__ */ new Map()
	};
	try {
		writeString(b, b.$writing, s);
	} finally {
		b.$writing = outer;
	}
}
function u29(b) {
	let v = 0;
	for (let i = 0; i < 3; i++) {
		const x = b.readUnsignedByte();
		if (!(x & 128)) return v << 7 | x;
		v = v << 7 | x & 127;
	}
	return (v << 8 | b.readUnsignedByte()) >>> 0;
}
const badRef = () => outOfBounds();
function readString(b, t) {
	const h = u29(b);
	if (!(h & 1)) {
		const s = t.strings[h >> 1];
		if (s === void 0) throw badRef();
		return s;
	}
	const n = h >>> 1;
	if (b.$position + n > b.$length) throw eof();
	const s = new TextDecoder().decode(new Uint8Array(b.$buf, b.$position, n));
	b.$position += n;
	if (s !== "") t.strings.push(s);
	return s;
}
function objectRef(t, h) {
	const o = t.objects[h >>> 1];
	if (o === void 0) throw badRef();
	return o;
}
function externalizable(C) {
	for (let c = C; c && c !== $O; c = Object.getPrototypeOf(c)) if (Object.hasOwn(c, "$impl") && c.$impl.has("IExternalizable")) return true;
	return false;
}
function amfRead(b) {
	const t = b.$reading;
	const marker = b.readUnsignedByte();
	switch (marker) {
		case 0: return;
		case 1: return null;
		case 2: return false;
		case 3: return true;
		case 4: return u29(b) << 3 >> 3;
		case 5: return b.$take(8, (d, p) => d.getFloat64(p, false));
		case 6: return readString(b, t);
		case 9: {
			const h = u29(b);
			if (!(h & 1)) return objectRef(t, h);
			const out = [];
			t.objects.push(out);
			if (readString(b, t) !== "") throw new TypeError("readObject: an Array with named members is not supported");
			for (let i = 0; i < h >>> 1; i++) out.push(amfRead(b));
			return out;
		}
		case 10: {
			const h = u29(b);
			if (!(h & 1)) return objectRef(t, h);
			let traits;
			if (!(h & 2)) {
				traits = t.traits[h >>> 2];
				if (!traits) throw badRef();
			} else {
				const external = !!(h & 4);
				const name = readString(b, t);
				const sealed = [];
				if (!external) for (let i = 0; i < h >>> 4; i++) sealed.push(readString(b, t));
				traits = {
					name,
					sealed,
					dynamic: !!(h & 8),
					external
				};
				t.traits.push(traits);
			}
			const C = traits.name ? aliases.get(traits.name) : void 0;
			if (traits.external) {
				if (!C) throw raise(ReferenceError, 1065, `Variable ${traits.name} is not defined.`);
				const o = new C();
				t.objects.push(o);
				o.readExternal(b);
				return o;
			}
			const o = C ? new C() : {};
			t.objects.push(o);
			for (const name of traits.sealed) o[name] = amfRead(b);
			if (traits.dynamic) for (let name = readString(b, t); name !== ""; name = readString(b, t)) o[name] = amfRead(b);
			return o;
		}
		case 12: {
			const h = u29(b);
			if (!(h & 1)) return objectRef(t, h);
			const n = h >>> 1;
			if (b.$position + n > b.$length) throw eof();
			const o = ByteArray.$of(new Uint8Array(b.$buf, b.$position, n));
			b.$position += n;
			t.objects.push(o);
			return o;
		}
		case 13:
		case 14:
		case 15:
		case 16: {
			const h = u29(b);
			if (!(h & 1)) return objectRef(t, h);
			const n = h >>> 1;
			b.readUnsignedByte();
			const out = [];
			t.objects.push(out);
			if (marker === 16) readString(b, t);
			for (let i = 0; i < n; i++) out.push(marker === 13 ? b.$take(4, (d, p) => d.getInt32(p, false)) : marker === 14 ? b.$take(4, (d, p) => d.getUint32(p, false)) : marker === 15 ? b.$take(8, (d, p) => d.getFloat64(p, false)) : amfRead(b));
			return out;
		}
		default: throw new TypeError(`readObject: AMF3 marker ${marker} is not supported`);
	}
}
function putU29(b, v) {
	v &= 536870911;
	if (v < 128) b.writeByte(v);
	else if (v < 16384) {
		b.writeByte(v >> 7 | 128);
		b.writeByte(v & 127);
	} else if (v < 2097152) {
		b.writeByte(v >> 14 | 128);
		b.writeByte(v >> 7 | 128);
		b.writeByte(v & 127);
	} else {
		b.writeByte(v >> 22 | 128);
		b.writeByte(v >> 15 | 128);
		b.writeByte(v >> 8 | 128);
		b.writeByte(v & 255);
	}
}
function writeString(b, t, s) {
	if (s !== "") {
		const i = t.strings.get(s);
		if (i !== void 0) {
			putU29(b, i << 1);
			return;
		}
		t.strings.set(s, t.strings.size);
	}
	const bytes = new TextEncoder().encode(s);
	putU29(b, bytes.length << 1 | 1);
	b.$putBytes(bytes);
}
function seen(b, t, o) {
	const i = t.objects.get(o);
	if (i !== void 0) {
		putU29(b, i << 1);
		return true;
	}
	t.objects.set(o, t.objects.size);
	return false;
}
function amfWrite(b, v) {
	const t = b.$writing;
	if (v === void 0) return b.writeByte(0);
	if (v === null) return b.writeByte(1);
	if (typeof v === "boolean") return b.writeByte(v ? 3 : 2);
	if (typeof v === "number") {
		if (Number.isInteger(v) && v >= -(2 ** 28) && v < 2 ** 28 && !Object.is(v, -0)) {
			b.writeByte(4);
			return putU29(b, v);
		}
		b.writeByte(5);
		return b.$put(8, (d, p) => d.setFloat64(p, v, false));
	}
	if (typeof v === "string") {
		b.writeByte(6);
		return writeString(b, t, v);
	}
	if (typeof v === "function") {
		if (v.$qname || v.prototype instanceof $O) throw new TypeError("writeObject: a Class value is not supported");
		return b.writeByte(0);
	}
	if (Array.isArray(v)) {
		b.writeByte(9);
		if (seen(b, t, v)) return;
		putU29(b, v.length << 1 | 1);
		writeString(b, t, "");
		for (const item of v) amfWrite(b, item);
		return;
	}
	if (v instanceof ByteArray) {
		b.writeByte(12);
		if (seen(b, t, v)) return;
		const bytes = v.$bytes.slice();
		putU29(b, bytes.length << 1 | 1);
		return b.$putBytes(bytes);
	}
	const proto = Object.getPrototypeOf(v);
	if (proto === Object.prototype || proto === null) {
		b.writeByte(10);
		if (seen(b, t, v)) return;
		b.writeByte(11);
		writeString(b, t, "");
		for (const [name, item] of Object.entries(v)) {
			writeString(b, t, name);
			amfWrite(b, item);
		}
		return writeString(b, t, "");
	}
	if (v instanceof $O) {
		b.writeByte(10);
		if (seen(b, t, v)) return;
		const C = v.constructor;
		let alias = "";
		for (const [name, one] of aliases) if (one === C) alias = name;
		if (externalizable(C)) {
			if (t.traits.has(C)) putU29(b, t.traits.get(C) << 2 | 1);
			else {
				if (!alias) throw raise(ArgumentError, 2004, `${getQualifiedClassName(v)} is IExternalizable and has no class alias.`);
				t.traits.set(C, t.traits.size);
				putU29(b, 7);
				writeString(b, t, alias);
			}
			return v.writeExternal(b);
		}
		const sealed = $varsOf(v);
		if (t.traits.has(C)) putU29(b, t.traits.get(C) << 2 | 1);
		else {
			t.traits.set(C, t.traits.size);
			putU29(b, sealed.length << 4 | 3);
			writeString(b, t, alias);
			for (const name of sealed) writeString(b, t, name);
		}
		for (const name of sealed) amfWrite(b, v[name]);
		return;
	}
	throw new TypeError("writeObject: this value is not supported");
}
const proxied = {
	get(t, p, r) {
		return typeof p === "symbol" || p in t ? Reflect.get(t, p, r) : t.getProperty(p);
	},
	set(t, p, v, r) {
		if (typeof p === "symbol" || p in t) return Reflect.set(t, p, v, r);
		t.setProperty(p, v);
		return true;
	},
	has(t, p) {
		return typeof p === "symbol" || p in t || !!t.hasProperty(p);
	},
	deleteProperty(t, p) {
		return p in t ? Reflect.deleteProperty(t, p) : !!t.deleteProperty(p);
	},
	ownKeys(t) {
		const names = [];
		for (let i = t.nextNameIndex(0); i > 0; i = t.nextNameIndex(i)) names.push(String(t.nextName(i)));
		return names;
	},
	getOwnPropertyDescriptor(t, p) {
		if (typeof p === "symbol" || Object.hasOwn(t, p)) return Reflect.getOwnPropertyDescriptor(t, p);
		return {
			value: t.getProperty(p),
			writable: true,
			enumerable: true,
			configurable: true
		};
	}
};
const notOverridden = (name) => raise(IllegalOperationError, 2088, `The Proxy class does not implement ${name}. It must be overridden by a subclass.`);
var Proxy$1 = class extends $O {
	static {
		__name(this, "Proxy");
	}
	constructor(...a) {
		super(...a);
		return new globalThis.Proxy(this, proxied);
	}
	getProperty() {
		throw notOverridden("getProperty");
	}
	setProperty() {
		throw notOverridden("setProperty");
	}
	hasProperty() {
		throw notOverridden("hasProperty");
	}
	deleteProperty() {
		throw notOverridden("deleteProperty");
	}
	nextNameIndex() {
		throw notOverridden("nextNameIndex");
	}
	nextName() {
		throw notOverridden("nextName");
	}
	nextValue() {
		throw notOverridden("nextValue");
	}
	isAttribute() {
		return false;
	}
};
function getDefinitionByName(name) {
	const d = definition(name);
	if (d === void 0) throw raise(ReferenceError, 1065, `Variable ${name} is not defined.`);
	return d;
}
function getQualifiedClassName(v) {
	if (v === void 0) return "void";
	if (v === null) return "null";
	if (typeof v === "number") return Number.isInteger(v) && (v | 0) === v ? "int" : "Number";
	if (typeof v === "string") return "String";
	if (typeof v === "boolean") return "Boolean";
	if (Array.isArray(v)) return "Array";
	if (typeof v === "function" && !isClass(v)) return "Function";
	const C = typeof v === "function" ? v : v.constructor;
	return C.$qname ?? qname(C);
}
function isClass(f) {
	return Object.hasOwn(f, "$qname") || f === Object || f.prototype instanceof $O || f.prototype instanceof Map || classes.has(f.name);
}
function qname(C) {
	const d = classes.get(C.name);
	return d ? d.package ? `${d.package}::${d.name}` : d.name : C.name;
}
function getQualifiedSuperclassName(v) {
	if (typeof v === "function" && !isClass(v)) return "Object";
	const C = typeof v === "function" ? v : v.constructor;
	const P = Object.getPrototypeOf(C);
	return P && P !== $O && P.name ? getQualifiedClassName(P) : "Object";
}
const esc = (t) => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
function typeOf(x) {
	if (typeof x === "function") return isClass(x) ? "Class" : "Function";
	if (x === void 0) return "*";
	return getQualifiedClassName(x);
}
function describeType(v) {
	if (typeof v !== "function") throw new TypeError("describeType: only a class value is supported");
	const C = v;
	const name = esc(getQualifiedClassName(C));
	let xml = `<type name="${name}" base="Class" isDynamic="true" isFinal="true" isStatic="true">`;
	for (const n of Object.getOwnPropertyNames(C)) {
		if (/^(\$|length$|name$|prototype$)/.test(n)) continue;
		xml += `<constant name="${esc(n)}" type="${esc(typeOf(C[n]))}"/>`;
	}
	xml += `<factory type="${name}">`;
	for (const [n, type] of Object.entries(C.$vars ?? {})) xml += `<variable name="${esc(n)}" type="${esc(type)}"/>`;
	for (let p = C.prototype; p && p !== $O.prototype && p !== Object.prototype; p = Object.getPrototypeOf(p)) for (const n of Object.getOwnPropertyNames(p)) {
		if (n === "constructor" || n.startsWith("$")) continue;
		const d = Object.getOwnPropertyDescriptor(p, n);
		if (d.get || d.set) xml += `<accessor name="${esc(n)}" access="${d.get && d.set ? "readwrite" : d.get ? "readonly" : "writeonly"}" type="*"/>`;
		else if (typeof d.value === "function") xml += `<method name="${esc(n)}" returnType="*"/>`;
	}
	return new XML(xml + "</factory></type>");
}
function $varsOf(o) {
	return Object.keys(o.constructor.$vars ?? o).filter((k) => !k.startsWith("$"));
}
let sequence = 0;
let nextTimeout = 1;
let pending = [];
const schedule = (entry) => pending.push({
	...entry,
	order: ++sequence
});
function runTimers(now = player.now) {
	const due = pending.filter((e) => e.due <= now).sort((a, b) => a.due - b.due || a.order - b.order);
	pending = pending.filter((e) => e.due > now);
	for (const e of due) if (e.timer) e.timer.$tick(now);
	else {
		if (e.every !== void 0) schedule({
			...e,
			due: now + Math.max(1, Math.ceil(e.every))
		});
		e.fn(...e.args);
	}
}
function resetTimers() {
	pending = [];
}
player.timers.add({ $tick: runTimers });
const wait = (delay) => Number.isFinite(delay) && delay > 0 ? Math.ceil(delay) : 0;
function setTimeout(closure, delay, ...args) {
	if (typeof closure !== "function") throw raise(TypeError, 1009, "Cannot access a property or method of a null object reference.");
	const id = nextTimeout++;
	schedule({
		due: player.now + wait(delay),
		id,
		fn: closure,
		args
	});
	return id;
}
function setInterval(closure, delay, ...args) {
	if (typeof closure !== "function") throw raise(TypeError, 1009, "Cannot access a property or method of a null object reference.");
	const id = nextTimeout++;
	schedule({
		due: player.now + wait(delay),
		id,
		fn: closure,
		args,
		every: delay
	});
	return id;
}
function clearTimeout(id) {
	pending = pending.filter((e) => e.id !== id);
}
const clearInterval = clearTimeout;
const checkDelay = (delay) => {
	if (!(delay >= 0 && Number.isFinite(delay))) throw raise(RangeError, 2066, "The Timer delay specified is out of range.");
};
var Timer = class extends EventDispatcher {
	$ctor_Timer(delay, repeatCount = 0) {
		checkDelay(delay);
		this.$ctor_EventDispatcher();
		this.$delay = delay;
		this.repeatCount = repeatCount | 0;
		this.$count = 0;
		this.$running = false;
	}
	get delay() {
		return this.$delay;
	}
	set delay(v) {
		checkDelay(v);
		this.$delay = v;
		if (this.$running) {
			this.stop();
			this.start();
		}
	}
	get currentCount() {
		return this.$count;
	}
	get running() {
		return this.$running;
	}
	start() {
		if (this.$running) return;
		this.$running = true;
		schedule({
			due: player.now + Math.ceil(this.$delay),
			timer: this
		});
	}
	stop() {
		this.$running = false;
		pending = pending.filter((e) => e.timer !== this);
	}
	reset() {
		this.stop();
		this.$count = 0;
	}
	$tick(now) {
		this.$count++;
		const finished = this.repeatCount > 0 && this.$count >= this.repeatCount;
		if (finished) this.$running = false;
		else schedule({
			due: now + Math.ceil(this.$delay),
			timer: this
		});
		this.dispatchEvent(new TimerEvent("timer"));
		if (finished) this.dispatchEvent(new TimerEvent("timerComplete"));
	}
};
var ApplicationDomain = class ApplicationDomain extends $O {
	$ctor_ApplicationDomain(parentDomain = null) {
		this.parentDomain = parentDomain;
	}
	static get currentDomain() {
		return ApplicationDomain.$current ??= new ApplicationDomain();
	}
	hasDefinition(name) {
		return definition(name) !== void 0;
	}
	getDefinition(name) {
		const d = definition(name);
		if (d === void 0) throw raise(ReferenceError, 1065, `Variable ${name} is not defined.`);
		return d;
	}
};
function definition(name) {
	const short = name.replace("::", ".");
	const last = short.split(".").pop();
	return player.definitions?.[short.replaceAll(".", "_")] ?? player.definitions?.[last] ?? (classes.has(last) ? player.natives[last] : void 0);
}
//#endregion
//#region ../../as3c-wt/js/js/natives/flash.system.mjs
var flash_system_exports = /* @__PURE__ */ __exportAll({
	Capabilities: () => Capabilities,
	LoaderContext: () => LoaderContext,
	Security: () => Security,
	SecurityDomain: () => SecurityDomain,
	System: () => System,
	encode: () => encode
});
const SCREEN_X = 1616;
const SCREEN_Y = 720;
const DPI = 320;
const OS = "Linux 4.19.191";
const VERSION = "AND 51,3,4,0";
function encode(text) {
	return [...new TextEncoder().encode(text)].map((b) => /[A-Za-z0-9\-_.~]/.test(String.fromCharCode(b)) ? String.fromCharCode(b) : "%" + b.toString(16).toUpperCase().padStart(2, "0")).join("");
}
var Capabilities = class extends $O {
	static get isDebugger() {
		return false;
	}
	static get language() {
		return "en";
	}
	static get os() {
		return OS;
	}
	static get pixelAspectRatio() {
		return 1;
	}
	static get playerType() {
		return "Desktop";
	}
	static get screenDPI() {
		return DPI;
	}
	static get screenResolutionX() {
		return SCREEN_X;
	}
	static get screenResolutionY() {
		return SCREEN_Y;
	}
	static get serverString() {
		return `A=t&SA=t&SV=t&EV=t&MP3=t&AE=t&VE=t&ACC=f&PR=t&SP=t&SB=f&DEB=f&V=${encode(VERSION)}&M=Android%20Linux&R=${SCREEN_X}x${SCREEN_Y}&COL=color&AR=1.0&OS=${encode(OS)}&ARCH=ARM&L=en&IME=t&PT=Desktop&AVD=f&LFD=f&WD=f&TLS=t&DP=${DPI}`;
	}
	static get version() {
		return VERSION;
	}
};
const MEMORY = 67108864;
var System = class extends $O {
	static get totalMemory() {
		return MEMORY;
	}
	static get freeMemory() {
		return 0;
	}
	static gc() {}
	static disposeXML(node) {}
};
var Security = class extends $O {
	static get sandboxType() {
		return "application";
	}
};
var SecurityDomain = class extends $O {};
var LoaderContext = class extends $O {
	$ctor_LoaderContext(checkPolicyFile = false, applicationDomain = null, securityDomain = null) {
		this.checkPolicyFile = checkPolicyFile;
		this.applicationDomain = applicationDomain;
		this.securityDomain = securityDomain;
		this.imageDecodingPolicy = "onDemand";
	}
};
//#endregion
//#region sim/src/node/path.js
function join(...parts) {
	const out = [];
	for (const s of parts.join("/").split("/")) if (s === "..") out.pop();
	else if (s && s !== ".") out.push(s);
	return (parts[0]?.startsWith("/") ? "/" : "") + out.join("/");
}
const dirname = (p) => p.slice(0, p.lastIndexOf("/")) || "/";
const basename = (p) => p.replace(/\/+$/, "").split("/").pop();
var path_default = {
	join,
	dirname,
	basename,
	sep: "/"
};
//#endregion
//#region sim/src/node/os.js
const tmpdir = () => "/tmp";
const availableParallelism = () => navigator.hardwareConcurrency ?? 2;
var os_default = {
	tmpdir,
	availableParallelism
};
//#endregion
//#region sim/src/node/url.js
const fileURLToPath = (u) => decodeURIComponent(new URL(u).pathname);
//#endregion
//#region ../../as3c-wt/js/js/natives/flash.net.mjs
var flash_net_exports = /* @__PURE__ */ __exportAll({
	DatagramSocket: () => DatagramSocket,
	FileReference: () => FileReference,
	NetStream: () => NetStream,
	SharedObject: () => SharedObject,
	URLLoader: () => URLLoader,
	URLRequest: () => URLRequest,
	URLVariables: () => URLVariables,
	aliases: () => aliases,
	decode: () => decode$1,
	decodeSol: () => decodeSol,
	directories: () => directories,
	encodeSol: () => encodeSol,
	ioError: () => ioError,
	navigateToURL: () => navigateToURL,
	readFile: () => readFile,
	readStore: () => readStore,
	registerClassAlias: () => registerClassAlias,
	resetSharedObjects: () => resetSharedObjects,
	setDirectories: () => setDirectories,
	urlPath: () => urlPath,
	writeStore: () => writeStore
});
let given = null;
function setDirectories(application, documents, storage) {
	given = {
		application,
		documents,
		storage
	};
}
function directories() {
	if (given) return given;
	const own = path_default.join(os_default.tmpdir(), `as3rt-js-0`);
	return {
		application: fileURLToPath(player.files).replace(/\/$/, ""),
		documents: path_default.join(own, "documents"),
		storage: path_default.join(own, "storage")
	};
}
function decode$1(text) {
	const src = new TextEncoder().encode(text);
	const out = [];
	const hex = (b) => b >= 48 && b <= 57 || b >= 65 && b <= 70 || b >= 97 && b <= 102;
	for (let i = 0; i < src.length; i++) if (src[i] === 37 && i + 2 < src.length && hex(src[i + 1]) && hex(src[i + 2])) {
		out.push(parseInt(String.fromCharCode(src[i + 1], src[i + 2]), 16));
		i += 2;
	} else out.push(src[i] === 43 ? 32 : src[i]);
	return new TextDecoder().decode(new Uint8Array(out));
}
__name(decode$1, "decode");
function urlPath(url) {
	const u = decode$1(String(url));
	const app = directories().application;
	if (u.startsWith("app:/")) return path_default.join(app, u.slice(5).replace(/^\/+/, ""));
	if (u.startsWith("file://")) return u.slice(7);
	return path_default.join(app, u);
}
function readFile(url) {
	try {
		return fs_default.readFileSync(urlPath(url));
	} catch {
		return null;
	}
}
function ioError(url) {
	return new IOErrorEvent("ioError", false, false, `Error #2035: URL Not Found. URL: ${url}`, 2035);
}
const aliases = /* @__PURE__ */ new Map();
function registerClassAlias(aliasName, classObject) {
	if (classObject == null) throw raise(TypeError, 2007, "Parameter classObject must be non-null.");
	aliases.set(aliasName, classObject);
}
function navigateToURL(request, window = null) {}
var URLRequest = class extends $O {
	$ctor_URLRequest(url = null) {
		this.url = url;
	}
};
var URLLoader = class extends EventDispatcher {
	$ctor_URLLoader(request = null) {
		this.$ctor_EventDispatcher();
		this.data = void 0;
		this.dataFormat = "text";
		this.bytesLoaded = 0;
		this.bytesTotal = 0;
		this.$loading = 0;
		if (request) this.load(request);
	}
	load(request) {
		const url = request.url;
		const ticket = ++this.$loading;
		player.later(() => {
			if (this.$loading !== ticket) return;
			const bytes = readFile(url);
			if (!bytes) return this.dispatchEvent(ioError(url));
			const text = () => bytes.toString("utf8");
			this.data = this.dataFormat === "binary" ? ByteArray.$of(bytes) : this.dataFormat === "variables" ? new URLVariables(text()) : text();
			this.bytesLoaded = this.bytesTotal = bytes.length;
			this.dispatchEvent(new Event("complete"));
		});
	}
	close() {
		this.$loading++;
	}
};
var URLVariables = class extends $O {
	$ctor_URLVariables(source = null) {
		if (source) this.decode(source);
	}
	decode(source) {
		for (const pair of source.split("&")) {
			const eq = pair.indexOf("=");
			if (eq < 0) throw raise(Error, 2101, "The String passed to URLVariables.decode() must be a URL-encoded query string containing name/value pairs.");
			const name = decode$1(pair.slice(0, eq));
			const value = decode$1(pair.slice(eq + 1));
			const held = Object.hasOwn(this, name) ? this[name] : void 0;
			this[name] = held === void 0 ? value : Array.isArray(held) ? (held.push(value), held) : [held, value];
		}
	}
	toString() {
		const out = [];
		for (const [name, v] of Object.entries(this)) for (const one of Array.isArray(v) ? v : [v]) out.push(`${encode(name)}=${encode(String(one))}`);
		return out.join("&");
	}
};
let stores = /* @__PURE__ */ new Map();
const SWF_NAME = "Release_x64.swf";
function storePath(name) {
	const storage = given?.storage;
	return storage ? path_default.join(storage, "#SharedObjects", SWF_NAME, `${name}.sol`) : null;
}
function readStore(name) {
	const p = storePath(name);
	let bytes;
	try {
		bytes = p && fs_default.readFileSync(p);
	} catch {
		return null;
	}
	return bytes ? decodeSol(bytes) : null;
}
function writeStore(name, data) {
	const p = storePath(name);
	if (!p) return;
	fs_default.mkdirSync(path_default.dirname(p), { recursive: true });
	fs_default.writeFileSync(p, encodeSol(name, data));
}
const TCSO = [
	84,
	67,
	83,
	79,
	0,
	4,
	0,
	0,
	0,
	0
];
const corrupt = () => raise(Error, 2006, "The supplied index is out of bounds.");
function decodeSol(bytes) {
	const b = ByteArray.$of(bytes);
	if (b.readUnsignedShort() !== 191 || b.readUnsignedInt() !== b.length - 6) throw corrupt();
	for (const x of TCSO) if (b.readUnsignedByte() !== x) throw corrupt();
	b.readUTFBytes(b.readUnsignedShort());
	if (b.readUnsignedInt() !== 3) throw new TypeError("SharedObject: only AMF3 stores are supported");
	const data = {};
	b.$reading = {
		strings: [],
		objects: [],
		traits: []
	};
	try {
		while (b.bytesAvailable > 0) {
			const name = amfString(b);
			data[name] = b.readObject();
			b.readUnsignedByte();
		}
	} finally {
		b.$reading = void 0;
	}
	return data;
}
function encodeSol(name, data) {
	const body = new ByteArray();
	const title = new TextEncoder().encode(name);
	for (const x of TCSO) body.writeByte(x);
	body.writeShort(title.length);
	body.writeUTFBytes(name);
	body.writeUnsignedInt(3);
	body.$writing = {
		strings: /* @__PURE__ */ new Map(),
		objects: /* @__PURE__ */ new Map(),
		traits: /* @__PURE__ */ new Map()
	};
	try {
		for (const [key, value] of Object.entries(data)) {
			putString(body, key);
			body.writeObject(value);
			body.writeByte(0);
		}
	} finally {
		body.$writing = void 0;
	}
	const out = new ByteArray();
	out.writeShort(191);
	out.writeUnsignedInt(body.length);
	out.writeBytes(body, 0, 0);
	return out.$bytes.slice();
}
var SharedObject = class SharedObject extends EventDispatcher {
	$ctor_SharedObject() {
		this.$ctor_EventDispatcher();
		this.$data = {};
		this.$name = "";
	}
	static getLocal(name, localPath = null, secure = false) {
		let store = stores.get(name);
		if (!store) {
			store = new SharedObject();
			store.$name = name;
			store.$data = readStore(name) ?? {};
			stores.set(name, store);
		}
		return store;
	}
	get data() {
		return this.$data;
	}
	clear() {
		for (const k of Object.keys(this.$data)) delete this.$data[k];
	}
	flush(minDiskSpace = 0) {
		writeStore(this.$name, this.$data);
		return "flushed";
	}
};
function resetSharedObjects() {
	stores = /* @__PURE__ */ new Map();
}
var FileReference = class extends EventDispatcher {
	$ctor_FileReference() {
		this.$ctor_EventDispatcher();
		this.$path = "";
	}
	get name() {
		return path_default.basename(this.$path);
	}
};
var NetStream = class extends EventDispatcher {
	$ctor_NetStream() {
		this.$ctor_EventDispatcher();
		this.$client = null;
	}
	get client() {
		return this.$client ?? this;
	}
	set client(object) {
		if (object == null) throw raise(TypeError, 2004, "One of the parameters is invalid.");
		this.$client = object;
	}
};
var DatagramSocket = class extends EventDispatcher {
	$ctor_DatagramSocket() {
		this.$ctor_EventDispatcher();
		this.$bound = false;
	}
	get bound() {
		return this.$bound;
	}
	bind(localPort = 0, localAddress = "0.0.0.0") {
		this.$bound = true;
	}
	receive() {}
	send(bytes, offset = 0, length = 0, address = null, port = 0) {}
	close() {
		this.$bound = false;
	}
};
//#endregion
//#region ../../as3c-wt/js/js/natives/flash.desktop.mjs
var flash_desktop_exports = /* @__PURE__ */ __exportAll({
	Clipboard: () => Clipboard,
	ExtensionContext: () => ExtensionContext,
	NativeApplication: () => NativeApplication
});
const MINIMAL_DESCRIPTOR = "<application xmlns=\"http://ns.adobe.com/air/application/51.2\"><id>com.skvgames.GalaxyGenome</id><initialWindow><depthAndStencil>true</depthAndStencil></initialWindow></application>";
let one = null;
var NativeApplication = class NativeApplication extends EventDispatcher {
	$ctor_NativeApplication() {
		this.$ctor_EventDispatcher();
	}
	static get nativeApplication() {
		return one ??= new NativeApplication();
	}
	get applicationDescriptor() {
		let text;
		try {
			text = fs_default.readFileSync(path_default.join(directories().application, "META-INF/AIR/application.xml"), "utf8");
		} catch {
			text = MINIMAL_DESCRIPTOR;
		}
		return new XML(text);
	}
	get systemIdleMode() {
		return idle;
	}
	set systemIdleMode(mode) {
		idle = mode;
	}
};
let idle = "normal";
let general = null;
var Clipboard = class Clipboard extends $O {
	$ctor_Clipboard() {
		this.$held = /* @__PURE__ */ new Map();
	}
	static get generalClipboard() {
		return general ??= new Clipboard();
	}
	getData(format, transferMode = "originalPreferred") {
		return this.$held.get(format);
	}
	setData(format, data, serializable = true) {
		this.$held.set(format, data);
		return true;
	}
};
var ExtensionContext = class extends EventDispatcher {
	static createExtensionContext(extensionID, contextType) {
		return null;
	}
};
//#endregion
//#region ../../as3c-wt/js/js/natives/flash.geom.mjs
var flash_geom_exports = /* @__PURE__ */ __exportAll({
	ColorTransform: () => ColorTransform,
	Matrix: () => Matrix,
	Matrix3D: () => Matrix3D,
	Point: () => Point,
	Rectangle: () => Rectangle,
	Transform: () => Transform,
	Vector3D: () => Vector3D
});
var Point = class Point extends $O {
	$ctor_Point(x = 0, y = 0) {
		this.x = x;
		this.y = y;
	}
	get length() {
		return Math.hypot(this.x, this.y);
	}
	setTo(x, y) {
		this.x = x;
		this.y = y;
	}
	clone() {
		return new Point(this.x, this.y);
	}
	add(v) {
		return new Point(this.x + v.x, this.y + v.y);
	}
	subtract(v) {
		return new Point(this.x - v.x, this.y - v.y);
	}
	copyFrom(p) {
		this.setTo(p.x, p.y);
	}
	equals(p) {
		return p != null && p.x === this.x && p.y === this.y;
	}
	normalize(thickness) {
		const l = this.length;
		if (l > 0) this.setTo(this.x * thickness / l, this.y * thickness / l);
	}
	offset(dx, dy) {
		this.x += dx;
		this.y += dy;
	}
	toString() {
		return `(x=${this.x}, y=${this.y})`;
	}
	static distance(a, b) {
		return Math.hypot(a.x - b.x, a.y - b.y);
	}
	static interpolate(a, b, f) {
		return new Point(b.x + f * (a.x - b.x), b.y + f * (a.y - b.y));
	}
	static polar(len, angle) {
		return new Point(len * Math.cos(angle), len * Math.sin(angle));
	}
};
var Rectangle = class Rectangle extends $O {
	$ctor_Rectangle(x = 0, y = 0, width = 0, height = 0) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}
	setTo(x, y, w, h) {
		this.x = x;
		this.y = y;
		this.width = w;
		this.height = h;
	}
	get left() {
		return this.x;
	}
	get right() {
		return this.x + this.width;
	}
	get top() {
		return this.y;
	}
	get bottom() {
		return this.y + this.height;
	}
	setEmpty() {
		this.x = this.y = this.width = this.height = 0;
	}
	isEmpty() {
		return this.width <= 0 || this.height <= 0;
	}
	clone() {
		return new Rectangle(this.x, this.y, this.width, this.height);
	}
	copyFrom(r) {
		this.setTo(r.x, r.y, r.width, r.height);
	}
	contains(x, y) {
		return x >= this.x && y >= this.y && x < this.right && y < this.bottom;
	}
	set left(v) {
		this.width += this.x - v;
		this.x = v;
	}
	set right(v) {
		this.width = v - this.x;
	}
	set top(v) {
		this.height += this.y - v;
		this.y = v;
	}
	set bottom(v) {
		this.height = v - this.y;
	}
	get topLeft() {
		return new Point(this.x, this.y);
	}
	get bottomRight() {
		return new Point(this.right, this.bottom);
	}
	get size() {
		return new Point(this.width, this.height);
	}
	containsPoint(p) {
		return this.contains(p.x, p.y);
	}
	containsRect(r) {
		return !r.isEmpty() && r.x >= this.x && r.y >= this.y && r.right <= this.right && r.bottom <= this.bottom;
	}
	equals(r) {
		return r.x === this.x && r.y === this.y && r.width === this.width && r.height === this.height;
	}
	inflate(dx, dy) {
		this.x -= dx;
		this.y -= dy;
		this.width += 2 * dx;
		this.height += 2 * dy;
	}
	offset(dx, dy) {
		this.x += dx;
		this.y += dy;
	}
	intersects(r) {
		return !this.intersection(r).isEmpty();
	}
	intersection(r) {
		const x = Math.max(this.x, r.x);
		const y = Math.max(this.y, r.y);
		const w = Math.min(this.right, r.right) - x;
		const h = Math.min(this.bottom, r.bottom) - y;
		return w > 0 && h > 0 ? new Rectangle(x, y, w, h) : new Rectangle();
	}
	union(r) {
		if (this.isEmpty()) return r.clone();
		if (r.isEmpty()) return this.clone();
		const x = Math.min(this.x, r.x);
		const y = Math.min(this.y, r.y);
		return new Rectangle(x, y, Math.max(this.right, r.right) - x, Math.max(this.bottom, r.bottom) - y);
	}
	toString() {
		return `(x=${this.x}, y=${this.y}, w=${this.width}, h=${this.height})`;
	}
};
var Matrix = class Matrix extends $O {
	$ctor_Matrix(a = 1, b = 0, c = 0, d = 1, tx = 0, ty = 0) {
		this.setTo(a, b, c, d, tx, ty);
	}
	setTo(a, b, c, d, tx, ty) {
		this.a = a;
		this.b = b;
		this.c = c;
		this.d = d;
		this.tx = tx;
		this.ty = ty;
	}
	identity() {
		this.setTo(1, 0, 0, 1, 0, 0);
	}
	copyFrom(m) {
		this.setTo(m.a, m.b, m.c, m.d, m.tx, m.ty);
	}
	clone() {
		return new Matrix(this.a, this.b, this.c, this.d, this.tx, this.ty);
	}
	translate(x, y) {
		this.tx += x;
		this.ty += y;
	}
	scale(sx, sy) {
		this.a *= sx;
		this.b *= sy;
		this.c *= sx;
		this.d *= sy;
		this.tx *= sx;
		this.ty *= sy;
	}
	rotate(t) {
		const cos = Math.cos(t);
		const sin = Math.sin(t);
		const { a, b, c, d, tx, ty } = this;
		this.setTo(a * cos - b * sin, a * sin + b * cos, c * cos - d * sin, c * sin + d * cos, tx * cos - ty * sin, tx * sin + ty * cos);
	}
	concat(m) {
		const { a, b, c, d, tx, ty } = this;
		this.setTo(a * m.a + b * m.c, a * m.b + b * m.d, c * m.a + d * m.c, c * m.b + d * m.d, tx * m.a + ty * m.c + m.tx, tx * m.b + ty * m.d + m.ty);
	}
	invert() {
		const { a, b, c, d, tx, ty } = this;
		const det = a * d - b * c;
		if (det === 0) return this.setTo(0, 0, 0, 0, -tx, -ty);
		const ia = d / det;
		const ib = -b / det;
		const ic = -c / det;
		const id = a / det;
		this.setTo(ia, ib, ic, id, -(ia * tx + ic * ty), -(ib * tx + id * ty));
	}
	createBox(scaleX, scaleY, rotation = 0, tx = 0, ty = 0) {
		const sin = Math.sin(rotation);
		const cos = Math.cos(rotation);
		this.setTo(scaleX * cos, scaleY * sin, -scaleX * sin, scaleY * cos, tx, ty);
	}
	deltaTransformPoint(p) {
		return new Point(this.a * p.x + this.c * p.y, this.b * p.x + this.d * p.y);
	}
	transformPoint(p) {
		return new Point(this.a * p.x + this.c * p.y + this.tx, this.b * p.x + this.d * p.y + this.ty);
	}
};
var Vector3D = class Vector3D extends $O {
	$ctor_Vector3D(x = 0, y = 0, z = 0, w = 0) {
		this.x = x;
		this.y = y;
		this.z = z;
		this.w = w;
	}
	get length() {
		return Math.sqrt(this.lengthSquared);
	}
	get lengthSquared() {
		return this.x * this.x + this.y * this.y + this.z * this.z;
	}
	add(a) {
		return new Vector3D(this.x + a.x, this.y + a.y, this.z + a.z);
	}
	subtract(a) {
		return new Vector3D(this.x - a.x, this.y - a.y, this.z - a.z);
	}
	clone() {
		return new Vector3D(this.x, this.y, this.z, this.w);
	}
	copyFrom(a) {
		this.x = a.x;
		this.y = a.y;
		this.z = a.z;
	}
	crossProduct(a) {
		return new Vector3D(this.y * a.z - this.z * a.y, this.z * a.x - this.x * a.z, this.x * a.y - this.y * a.x, 1);
	}
	dotProduct(a) {
		return this.x * a.x + this.y * a.y + this.z * a.z;
	}
	normalize() {
		const l = this.length;
		if (l) this.scaleBy(1 / l);
		return l;
	}
	scaleBy(s) {
		this.x *= s;
		this.y *= s;
		this.z *= s;
	}
	setTo(x, y, z) {
		this.x = x;
		this.y = y;
		this.z = z;
	}
	project() {
		this.x /= this.w;
		this.y /= this.w;
		this.z /= this.w;
	}
	equals(a, allFour = false) {
		return this.x === a.x && this.y === a.y && this.z === a.z && (!allFour || this.w === a.w);
	}
	nearEquals(a, tolerance, allFour = false) {
		const near = (u, v) => Math.abs(u - v) < tolerance;
		return near(this.x, a.x) && near(this.y, a.y) && near(this.z, a.z) && (!allFour || near(this.w, a.w));
	}
	negate() {
		this.x = -this.x;
		this.y = -this.y;
		this.z = -this.z;
	}
	incrementBy(a) {
		this.x += a.x;
		this.y += a.y;
		this.z += a.z;
	}
	decrementBy(a) {
		this.x -= a.x;
		this.y -= a.y;
		this.z -= a.z;
	}
	toString() {
		return `Vector3D(${this.x}, ${this.y}, ${this.z})`;
	}
	static distance(a, b) {
		return a.subtract(b).length;
	}
	static angleBetween(a, b) {
		return Math.acos(Math.min(1, Math.max(-1, a.dotProduct(b) / (a.length * b.length))));
	}
	static get X_AXIS() {
		return new Vector3D(1, 0, 0);
	}
	static get Y_AXIS() {
		return new Vector3D(0, 1, 0);
	}
	static get Z_AXIS() {
		return new Vector3D(0, 0, 1);
	}
};
var Matrix3D = class Matrix3D extends $O {
	$ctor_Matrix3D(v = null) {
		this.m = /* @__PURE__ */ new Float64Array(16);
		if (v) this.m.set(v.slice(0, 16));
		else this.identity();
	}
	get rawData() {
		return Array.from(this.m);
	}
	set rawData(v) {
		this.m.set(v.slice(0, 16));
	}
	identity() {
		this.m.fill(0);
		this.m[0] = this.m[5] = this.m[10] = this.m[15] = 1;
	}
	clone() {
		return new Matrix3D(this.m);
	}
	copyFrom(o) {
		this.m.set(o.m);
	}
	copyRawDataFrom(v, i = 0, transpose = false) {
		for (let k = 0; k < 16; k++) this.m[transpose ? k % 4 * 4 + (k >> 2) : k] = v[i + k];
	}
	copyRawDataTo(v, i = 0, transpose = false) {
		for (let k = 0; k < 16; k++) v[i + k] = this.m[transpose ? k % 4 * 4 + (k >> 2) : k];
	}
	static mul(a, b) {
		const r = /* @__PURE__ */ new Float64Array(16);
		for (let c = 0; c < 4; c++) for (let row = 0; row < 4; row++) {
			let s = 0;
			for (let k = 0; k < 4; k++) s += a[k * 4 + row] * b[c * 4 + k];
			r[c * 4 + row] = s;
		}
		return r;
	}
	append(lhs) {
		this.m = Matrix3D.mul(lhs.m, this.m);
	}
	prepend(rhs) {
		this.m = Matrix3D.mul(this.m, rhs.m);
	}
	appendScale(x, y, z) {
		this.append(new Matrix3D([
			x,
			0,
			0,
			0,
			0,
			y,
			0,
			0,
			0,
			0,
			z,
			0,
			0,
			0,
			0,
			1
		]));
	}
	prependScale(x, y, z) {
		this.prepend(new Matrix3D([
			x,
			0,
			0,
			0,
			0,
			y,
			0,
			0,
			0,
			0,
			z,
			0,
			0,
			0,
			0,
			1
		]));
	}
	appendTranslation(x, y, z) {
		this.append(new Matrix3D([
			1,
			0,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			0,
			1,
			0,
			x,
			y,
			z,
			1
		]));
	}
	transpose() {
		const m = Float64Array.from(this.m);
		for (let i = 0; i < 16; i++) this.m[i] = m[i % 4 * 4 + (i >> 2)];
	}
	prependTranslation(x, y, z) {
		this.prepend(new Matrix3D([
			1,
			0,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			0,
			1,
			0,
			x,
			y,
			z,
			1
		]));
	}
	deltaTransformVector(v) {
		const m = this.m;
		return new Vector3D(m[0] * v.x + m[4] * v.y + m[8] * v.z, m[1] * v.x + m[5] * v.y + m[9] * v.z, m[2] * v.x + m[6] * v.y + m[10] * v.z, 0);
	}
	static $rotation(degrees, axis, pivot) {
		const l = Math.hypot(axis.x, axis.y, axis.z) || 1;
		const x = axis.x / l;
		const y = axis.y / l;
		const z = axis.z / l;
		const r = degrees * Math.PI / 180;
		const c = Math.cos(r);
		const s = Math.sin(r);
		const t = 1 - c;
		const rot = new Matrix3D([
			t * x * x + c,
			t * x * y + s * z,
			t * x * z - s * y,
			0,
			t * x * y - s * z,
			t * y * y + c,
			t * y * z + s * x,
			0,
			t * x * z + s * y,
			t * y * z - s * x,
			t * z * z + c,
			0,
			0,
			0,
			0,
			1
		]);
		if (pivot) {
			const out = new Matrix3D(null);
			out.appendTranslation(-pivot.x, -pivot.y, -pivot.z);
			out.append(rot);
			out.appendTranslation(pivot.x, pivot.y, pivot.z);
			return out;
		}
		return rot;
	}
	appendRotation(degrees, axis, pivot = null) {
		this.append(Matrix3D.$rotation(degrees, axis, pivot));
	}
	prependRotation(degrees, axis, pivot = null) {
		this.prepend(Matrix3D.$rotation(degrees, axis, pivot));
	}
	$rc(i) {
		i >>>= 0;
		if (i > 3) throw raise(ArgumentError, 2004, "One of the parameters is invalid.");
		return i;
	}
	copyColumnFrom(c, v) {
		c = this.$rc(c) * 4;
		[this.m[c], this.m[c + 1], this.m[c + 2], this.m[c + 3]] = [
			v.x,
			v.y,
			v.z,
			v.w
		];
	}
	copyColumnTo(c, v) {
		c = this.$rc(c) * 4;
		v.x = this.m[c];
		v.y = this.m[c + 1];
		v.z = this.m[c + 2];
		v.w = this.m[c + 3];
	}
	copyRowFrom(r, v) {
		r = this.$rc(r);
		[this.m[r], this.m[r + 4], this.m[r + 8], this.m[r + 12]] = [
			v.x,
			v.y,
			v.z,
			v.w
		];
	}
	copyRowTo(r, v) {
		r = this.$rc(r);
		v.x = this.m[r];
		v.y = this.m[r + 4];
		v.z = this.m[r + 8];
		v.w = this.m[r + 12];
	}
	get position() {
		return new Vector3D(this.m[12], this.m[13], this.m[14], this.m[15]);
	}
	set position(v) {
		this.m[12] = v.x;
		this.m[13] = v.y;
		this.m[14] = v.z;
	}
	get determinant() {
		const m = this.m;
		const sub = (a, b, c, d, e, f, g, h, i) => a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g);
		return m[0] * sub(m[5], m[6], m[7], m[9], m[10], m[11], m[13], m[14], m[15]) - m[1] * sub(m[4], m[6], m[7], m[8], m[10], m[11], m[12], m[14], m[15]) + m[2] * sub(m[4], m[5], m[7], m[8], m[9], m[11], m[12], m[13], m[15]) - m[3] * sub(m[4], m[5], m[6], m[8], m[9], m[10], m[12], m[13], m[14]);
	}
	transformVector(v) {
		const m = this.m;
		return new Vector3D(m[0] * v.x + m[4] * v.y + m[8] * v.z + m[12], m[1] * v.x + m[5] * v.y + m[9] * v.z + m[13], m[2] * v.x + m[6] * v.y + m[10] * v.z + m[14], m[3] * v.x + m[7] * v.y + m[11] * v.z + m[15]);
	}
	invert() {
		const m = this.m;
		const inv = /* @__PURE__ */ new Float64Array(16);
		inv[0] = m[5] * m[10] * m[15] - m[5] * m[11] * m[14] - m[9] * m[6] * m[15] + m[9] * m[7] * m[14] + m[13] * m[6] * m[11] - m[13] * m[7] * m[10];
		inv[4] = -m[4] * m[10] * m[15] + m[4] * m[11] * m[14] + m[8] * m[6] * m[15] - m[8] * m[7] * m[14] - m[12] * m[6] * m[11] + m[12] * m[7] * m[10];
		inv[8] = m[4] * m[9] * m[15] - m[4] * m[11] * m[13] - m[8] * m[5] * m[15] + m[8] * m[7] * m[13] + m[12] * m[5] * m[11] - m[12] * m[7] * m[9];
		inv[12] = -m[4] * m[9] * m[14] + m[4] * m[10] * m[13] + m[8] * m[5] * m[14] - m[8] * m[6] * m[13] - m[12] * m[5] * m[10] + m[12] * m[6] * m[9];
		inv[1] = -m[1] * m[10] * m[15] + m[1] * m[11] * m[14] + m[9] * m[2] * m[15] - m[9] * m[3] * m[14] - m[13] * m[2] * m[11] + m[13] * m[3] * m[10];
		inv[5] = m[0] * m[10] * m[15] - m[0] * m[11] * m[14] - m[8] * m[2] * m[15] + m[8] * m[3] * m[14] + m[12] * m[2] * m[11] - m[12] * m[3] * m[10];
		inv[9] = -m[0] * m[9] * m[15] + m[0] * m[11] * m[13] + m[8] * m[1] * m[15] - m[8] * m[3] * m[13] - m[12] * m[1] * m[11] + m[12] * m[3] * m[9];
		inv[13] = m[0] * m[9] * m[14] - m[0] * m[10] * m[13] - m[8] * m[1] * m[14] + m[8] * m[2] * m[13] + m[12] * m[1] * m[10] - m[12] * m[2] * m[9];
		inv[2] = m[1] * m[6] * m[15] - m[1] * m[7] * m[14] - m[5] * m[2] * m[15] + m[5] * m[3] * m[14] + m[13] * m[2] * m[7] - m[13] * m[3] * m[6];
		inv[6] = -m[0] * m[6] * m[15] + m[0] * m[7] * m[14] + m[4] * m[2] * m[15] - m[4] * m[3] * m[14] - m[12] * m[2] * m[7] + m[12] * m[3] * m[6];
		inv[10] = m[0] * m[5] * m[15] - m[0] * m[7] * m[13] - m[4] * m[1] * m[15] + m[4] * m[3] * m[13] + m[12] * m[1] * m[7] - m[12] * m[3] * m[5];
		inv[14] = -m[0] * m[5] * m[14] + m[0] * m[6] * m[13] + m[4] * m[1] * m[14] - m[4] * m[2] * m[13] - m[12] * m[1] * m[6] + m[12] * m[2] * m[5];
		inv[3] = -m[1] * m[6] * m[11] + m[1] * m[7] * m[10] + m[5] * m[2] * m[11] - m[5] * m[3] * m[10] - m[9] * m[2] * m[7] + m[9] * m[3] * m[6];
		inv[7] = m[0] * m[6] * m[11] - m[0] * m[7] * m[10] - m[4] * m[2] * m[11] + m[4] * m[3] * m[10] + m[8] * m[2] * m[7] - m[8] * m[3] * m[6];
		inv[11] = -m[0] * m[5] * m[11] + m[0] * m[7] * m[9] + m[4] * m[1] * m[11] - m[4] * m[3] * m[9] - m[8] * m[1] * m[7] + m[8] * m[3] * m[5];
		inv[15] = m[0] * m[5] * m[10] - m[0] * m[6] * m[9] - m[4] * m[1] * m[10] + m[4] * m[2] * m[9] + m[8] * m[1] * m[6] - m[8] * m[2] * m[5];
		const det = m[0] * inv[0] + m[1] * inv[4] + m[2] * inv[8] + m[3] * inv[12];
		if (!det) return false;
		for (let i = 0; i < 16; i++) this.m[i] = inv[i] / det;
		return true;
	}
};
var ColorTransform = class extends $O {
	$ctor_ColorTransform(redMultiplier = 1, greenMultiplier = 1, blueMultiplier = 1, alphaMultiplier = 1, redOffset = 0, greenOffset = 0, blueOffset = 0, alphaOffset = 0) {
		Object.assign(this, {
			redMultiplier,
			greenMultiplier,
			blueMultiplier,
			alphaMultiplier,
			redOffset,
			greenOffset,
			blueOffset,
			alphaOffset
		});
	}
	get color() {
		return ((this.redOffset | 0) & 255) << 16 | ((this.greenOffset | 0) & 255) << 8 | (this.blueOffset | 0) & 255;
	}
	set color(v) {
		v >>>= 0;
		this.redMultiplier = this.greenMultiplier = this.blueMultiplier = 0;
		this.redOffset = v >>> 16 & 255;
		this.greenOffset = v >>> 8 & 255;
		this.blueOffset = v & 255;
	}
	concat(o) {
		for (const c of [
			"red",
			"green",
			"blue",
			"alpha"
		]) {
			this[c + "Offset"] += this[c + "Multiplier"] * o[c + "Offset"];
			this[c + "Multiplier"] *= o[c + "Multiplier"];
		}
	}
	$apply(argb) {
		const ch = (shift, m, o) => Math.trunc(Math.min(255, Math.max(0, (argb >>> shift & 255) * m + o)));
		return (ch(24, this.alphaMultiplier, this.alphaOffset) << 24 | ch(16, this.redMultiplier, this.redOffset) << 16 | ch(8, this.greenMultiplier, this.greenOffset) << 8 | ch(0, this.blueMultiplier, this.blueOffset)) >>> 0;
	}
	toString() {
		return `(redMultiplier=${this.redMultiplier}, greenMultiplier=${this.greenMultiplier}, blueMultiplier=${this.blueMultiplier}, alphaMultiplier=${this.alphaMultiplier}, redOffset=${this.redOffset}, greenOffset=${this.greenOffset}, blueOffset=${this.blueOffset}, alphaOffset=${this.alphaOffset})`;
	}
};
var Transform = class Transform extends $O {
	$ctor_Transform(o) {
		this.$o = o;
	}
	get matrix() {
		const [a, b, c, d, tx, ty] = this.$o.$matrix;
		return new Matrix(a, b, c, d, tx, ty);
	}
	set matrix(m) {
		this.$o.$matrix = [
			m.a,
			m.b,
			m.c,
			m.d,
			m.tx,
			m.ty
		];
	}
	get concatenatedMatrix() {
		const [a, b, c, d, tx, ty] = this.$o.$global();
		return new Matrix(a, b, c, d, tx, ty);
	}
	get colorTransform() {
		const t = Object.assign(new ColorTransform(), this.$o.$color ?? new ColorTransform());
		t.alphaMultiplier = this.$o.alpha;
		return t;
	}
	set colorTransform(t) {
		this.$o.$color = Object.assign(new ColorTransform(), t);
		this.$o.alpha = t.alphaMultiplier;
	}
	get concatenatedColorTransform() {
		const result = this.colorTransform;
		for (let o = this.$o.parent; o; o = o.parent) {
			const outer = new Transform(o).colorTransform;
			outer.concat(result);
			Object.assign(result, outer);
		}
		return result;
	}
	get matrix3D() {
		return null;
	}
	set matrix3D(m) {
		throw new Error("missing native: flash.geom.Transform.matrix3D");
	}
	get pixelBounds() {
		return this.$o.getBounds(this.$o.stage);
	}
};
//#endregion
//#region ../../as3c-wt/js/js/natives/flash.filters.mjs
var flash_filters_exports = /* @__PURE__ */ __exportAll({
	BevelFilter: () => BevelFilter,
	BitmapFilter: () => BitmapFilter,
	BlurFilter: () => BlurFilter,
	ColorMatrixFilter: () => ColorMatrixFilter,
	DropShadowFilter: () => DropShadowFilter,
	GlowFilter: () => GlowFilter,
	fromSwf: () => fromSwf,
	rectRecord: () => rectRecord
});
var BitmapFilter = class extends $O {
	$ctor_BitmapFilter() {}
	clone() {
		return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
	}
};
var BlurFilter = class extends BitmapFilter {
	$ctor_BlurFilter(blurX = 4, blurY = 4, quality = 1) {
		this.$ctor_BitmapFilter();
		Object.assign(this, {
			blurX,
			blurY,
			quality
		});
	}
};
var GlowFilter = class extends BitmapFilter {
	$ctor_GlowFilter(color = 16711680, alpha = 1, blurX = 6, blurY = 6, strength = 2, quality = 1, inner = false, knockout = false) {
		this.$ctor_BitmapFilter();
		Object.assign(this, {
			color,
			alpha,
			blurX,
			blurY,
			strength,
			quality,
			inner,
			knockout
		});
	}
};
var DropShadowFilter = class extends BitmapFilter {
	$ctor_DropShadowFilter(distance = 4, angle = 45, color = 0, alpha = 1, blurX = 4, blurY = 4, strength = 1, quality = 1, inner = false, knockout = false, hideObject = false) {
		this.$ctor_BitmapFilter();
		Object.assign(this, {
			distance,
			angle,
			color,
			alpha,
			blurX,
			blurY,
			strength,
			quality,
			inner,
			knockout,
			hideObject
		});
	}
};
var BevelFilter = class extends BitmapFilter {
	$ctor_BevelFilter(distance = 4, angle = 45, highlightColor = 16777215, highlightAlpha = 1, shadowColor = 0, shadowAlpha = 1, blurX = 4, blurY = 4, strength = 1, quality = 1, type = "inner", knockout = false) {
		this.$ctor_BitmapFilter();
		Object.assign(this, {
			distance,
			angle,
			highlightColor,
			highlightAlpha,
			shadowColor,
			shadowAlpha,
			blurX,
			blurY,
			strength,
			quality,
			type,
			knockout
		});
	}
};
var ColorMatrixFilter = class extends BitmapFilter {
	$ctor_ColorMatrixFilter(matrix = null) {
		this.$ctor_BitmapFilter();
		this.matrix = matrix ?? [
			1,
			0,
			0,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			0,
			0,
			1,
			0
		];
	}
};
function fromSwf(f) {
	const deg = (r) => r * 180 / Math.PI;
	switch (f.type) {
		case "blur": return new BlurFilter(f.blurX, f.blurY, f.passes);
		case "glow": return new GlowFilter(f.color, f.alpha, f.blurX, f.blurY, f.strength, f.passes, f.inner, f.knockout);
		case "dropShadow": return new DropShadowFilter(f.distance, deg(f.angle), f.color, f.alpha, f.blurX, f.blurY, f.strength, f.passes, f.inner, f.knockout, f.hideObject);
		case "bevel": return new BevelFilter(f.distance, deg(f.angle), f.highlightColor, f.highlightAlpha, f.color, f.alpha, f.blurX, f.blurY, f.strength, f.passes, f.onTop ? "full" : f.inner ? "inner" : "outer", f.knockout);
		case "colorMatrix": return new ColorMatrixFilter(f.matrix);
		default: throw new Error(`swf: no AS3 filter for a ${f.type} filter`);
	}
}
function rectRecord(f) {
	const rad = (d) => d * Math.PI / 180;
	if (f instanceof BlurFilter) return {
		type: "blur",
		blurX: f.blurX,
		blurY: f.blurY,
		passes: f.quality
	};
	if (f instanceof GlowFilter) return {
		type: "glow",
		blurX: f.blurX,
		blurY: f.blurY,
		passes: f.quality,
		inner: f.inner,
		angle: 0,
		distance: 0
	};
	if (f instanceof DropShadowFilter) return {
		type: "dropShadow",
		blurX: f.blurX,
		blurY: f.blurY,
		passes: f.quality,
		inner: f.inner,
		angle: rad(f.angle),
		distance: f.distance
	};
	if (f instanceof BevelFilter) return {
		type: "bevel",
		blurX: f.blurX,
		blurY: f.blurY,
		passes: f.quality,
		inner: f.type === "inner",
		angle: rad(f.angle),
		distance: f.distance
	};
	return { type: "other" };
}
//#endregion
//#region ../../as3c-wt/js/js/natives/flash.display.mjs
var flash_display_exports = /* @__PURE__ */ __exportAll({
	Bitmap: () => Bitmap,
	BitmapData: () => BitmapData,
	DisplayObject: () => DisplayObject,
	DisplayObjectContainer: () => DisplayObjectContainer,
	Graphics: () => Graphics,
	InteractiveObject: () => InteractiveObject,
	Loader: () => Loader,
	LoaderInfo: () => LoaderInfo,
	MovieClip: () => MovieClip,
	Shape: () => Shape,
	Sprite: () => Sprite,
	Stage: () => Stage,
	Stage3D: () => Stage3D,
	mouse: () => mouse,
	premultiply: () => premultiply,
	unmultiply: () => unmultiply
});
const IDENTITY = [
	1,
	0,
	0,
	1,
	0,
	0
];
const apply = (m, x, y) => [m[0] * x + m[2] * y + m[4], m[1] * x + m[3] * y + m[5]];
function invert(m) {
	const det = m[0] * m[3] - m[1] * m[2];
	if (det === 0) return [
		0,
		0,
		0,
		0,
		-m[4],
		-m[5]
	];
	const a = m[3] / det;
	const b = -m[1] / det;
	const c = -m[2] / det;
	const d = m[0] / det;
	return [
		a,
		b,
		c,
		d,
		-(a * m[4] + c * m[5]),
		-(b * m[4] + d * m[5])
	];
}
const union = (a, b) => a && b ? [
	Math.min(a[0], b[0]),
	Math.min(a[1], b[1]),
	Math.max(a[2], b[2]),
	Math.max(a[3], b[3])
] : a ?? b;
const twips = (v) => (v * 20 | 0) / 20;
const mouse = {
	x: 0,
	y: 0
};
const qualifiedName = (C) => C.$qname ?? C.name;
const symbolName = (o) => qualifiedName(o.constructor).replaceAll("::", ".");
var DisplayObject = class DisplayObject extends EventDispatcher {
	$ctor_DisplayObject() {
		this.$ctor_EventDispatcher();
		Object.assign(this, {
			x: 0,
			y: 0,
			z: 0,
			scaleX: 1,
			scaleY: 1,
			rotation: 0,
			alpha: 1,
			visible: true,
			parent: null,
			blendMode: "normal",
			cacheAsBitmap: false,
			mask: null
		});
		this.$filters = null;
		this.$scrollRect = null;
		this.$scale9Grid = null;
		this.name = "instance" + ++DisplayObject.$count;
		if (player.document === void 0) return;
		if (player.document === null) {
			player.document = this;
			player.stage.addChild(this);
		}
	}
	get x() {
		return this.$x;
	}
	set x(v) {
		this.$x = twips(v);
	}
	get y() {
		return this.$y;
	}
	set y(v) {
		this.$y = twips(v);
	}
	get rotation() {
		return this.$rotation;
	}
	set rotation(v) {
		let r = v % 360;
		if (r > 180) r -= 360;
		else if (r < -180) r += 360;
		this.$rotation = r;
	}
	get filters() {
		return [...this.$filters ?? []];
	}
	set filters(v) {
		this.$filters = v ? [...v] : null;
	}
	get scrollRect() {
		return this.$scrollRect?.clone() ?? null;
	}
	set scrollRect(v) {
		this.$scrollRect = v?.clone() ?? null;
	}
	get scale9Grid() {
		return this.$scale9Grid?.clone() ?? null;
	}
	set scale9Grid(v) {
		this.$scale9Grid = v?.clone() ?? null;
	}
	get stage() {
		let o = this;
		while (o.parent) o = o.parent;
		return o instanceof Stage ? o : null;
	}
	addEventListener(type, fn, ...rest) {
		super.addEventListener(type, fn, ...rest);
		if (type === "enterFrame") broadcast.add(this);
	}
	removeEventListener(type, fn, ...rest) {
		super.removeEventListener(type, fn, ...rest);
		if (type === "enterFrame" && !this.hasEventListener(type)) broadcast.delete(this);
	}
	get root() {
		for (let o = this;; o = o.parent) {
			if (!o.parent) return o instanceof Stage ? o : null;
			if (o.parent instanceof Stage) return o;
		}
	}
	get $matrix() {
		const r = this.rotation * Math.PI / 180;
		const c = Math.cos(r);
		const s = Math.sin(r);
		return [
			c * this.scaleX,
			s * this.scaleX,
			-s * this.scaleY,
			c * this.scaleY,
			this.x,
			this.y
		];
	}
	set $matrix(m) {
		this.x = m[4];
		this.y = m[5];
		this.scaleX = Math.hypot(m[0], m[1]);
		this.scaleY = Math.hypot(m[2], m[3]) * (m[0] * m[3] - m[1] * m[2] < 0 ? -1 : 1);
		this.rotation = Math.atan2(m[1], m[0]) * 180 / Math.PI;
	}
	$extent(m) {
		if (this.$char !== void 0 && !this.$children) return extent(this.$char, 1, m);
		let out = this.$ownExtent?.(m) ?? null;
		for (const c of this.$children ?? []) out = union(out, c.$extent(mul(m, c.$matrix)));
		if (!out && this.$children && this.$char !== void 0) out = extent(this.$char, 1, m);
		return out;
	}
	get width() {
		const e = this.$extent(this.$matrix);
		return e ? e[2] - e[0] : 0;
	}
	set width(v) {
		const e = this.$extent(IDENTITY);
		if (e && e[2] > e[0] && v >= 0) this.scaleX = v / (e[2] - e[0]);
	}
	get height() {
		const e = this.$extent(this.$matrix);
		return e ? e[3] - e[1] : 0;
	}
	set height(v) {
		const e = this.$extent(IDENTITY);
		if (e && e[3] > e[1] && v >= 0) this.scaleY = v / (e[3] - e[1]);
	}
	get loaderInfo() {
		return this.$loaderInfo ?? this.root?.$loaderInfo ?? null;
	}
	getBounds(target) {
		const m = target ? mul(invert(target.$global()), this.$global()) : this.$global();
		const e = this.$extent(m) ?? [
			0,
			0,
			0,
			0
		];
		return new Rectangle(e[0], e[1], e[2] - e[0], e[3] - e[1]);
	}
	getRect(t) {
		return this.getBounds(t);
	}
	get transform() {
		return new Transform(this);
	}
	set transform(t) {
		this.$matrix = t.$o.$matrix;
		this.$color = t.$o.$color;
	}
	$global() {
		let m = IDENTITY;
		for (let o = this; o; o = o.parent) m = mul(o.$matrix, m);
		return m;
	}
	localToGlobal(p) {
		const [x, y] = apply(this.$global(), p.x, p.y);
		return new Point(x, y);
	}
	globalToLocal(p) {
		const [x, y] = apply(invert(this.$global()), p.x, p.y);
		return new Point(x, y);
	}
	get mouseX() {
		return apply(invert(this.$global()), mouse.x, mouse.y)[0];
	}
	get mouseY() {
		return apply(invert(this.$global()), mouse.x, mouse.y)[1];
	}
	hitTestPoint(x, y, shapeFlag = false) {
		const e = this.$extent(this.$global());
		return !!e && x >= e[0] && x <= e[2] && y >= e[1] && y <= e[3];
	}
	hitTestObject(o) {
		const a = this.$extent(this.$global());
		const b = o.$extent(o.$global());
		return !!a && !!b && a[0] <= b[2] && b[0] <= a[2] && a[1] <= b[3] && b[1] <= a[3];
	}
};
DisplayObject.$count = 0;
var InteractiveObject = class extends DisplayObject {
	$ctor_InteractiveObject() {
		this.$ctor_DisplayObject();
		Object.assign(this, {
			mouseEnabled: true,
			doubleClickEnabled: false,
			tabEnabled: false,
			focusRect: null,
			contextMenu: null,
			needsSoftKeyboard: false
		});
		this.tabIndex = -1;
	}
	get tabIndex() {
		return this.$tabIndex;
	}
	set tabIndex(v) {
		this.$tabIndex = v | 0;
	}
	requestSoftKeyboard() {
		return false;
	}
};
const rangeError = () => raise(RangeError, 2006, "The supplied index is out of bounds.");
const notAChild = () => raise(ArgumentError, 2025, "The supplied DisplayObject must be a child of the caller.");
const nullChild = () => raise(TypeError, 2007, "Parameter child must be non-null.");
var DisplayObjectContainer = class extends InteractiveObject {
	$ctor_DisplayObjectContainer() {
		this.$ctor_InteractiveObject();
		this.$children = [];
		Object.assign(this, {
			mouseChildren: true,
			tabChildren: true
		});
	}
	get numChildren() {
		return this.$children.length;
	}
	$index(i, len = this.$children.length) {
		i |= 0;
		if (i < 0 || i >= len) throw rangeError();
		return i;
	}
	addChild(c) {
		return this.addChildAt(c, this.$children.length - (c?.parent === this ? 1 : 0));
	}
	addChildAt(c, i) {
		if (!c) throw nullChild();
		if (c === this) throw raise(ArgumentError, 2024, "An object cannot be added as a child of itself.");
		for (let o = this.parent; o; o = o.parent) if (o === c) throw raise(ArgumentError, 2150, "An object cannot be added as a child to one of it's children (or children's children, etc.).");
		i |= 0;
		const same = c.parent === this;
		if (i < 0 || i > this.$children.length - (same ? 1 : 0)) throw rangeError();
		if (same) {
			this.setChildIndex(c, i);
			return c;
		}
		if (c.parent) c.parent.removeChild(c);
		this.$children.splice(i, 0, c);
		c.parent = this;
		c.dispatchEvent(new Event("added", true));
		if (this.stage) staged(c, "addedToStage");
		return c;
	}
	removeChild(c) {
		if (!c) throw nullChild();
		const i = this.$children.indexOf(c);
		if (i < 0) throw notAChild();
		return this.removeChildAt(i);
	}
	removeChildAt(i) {
		const c = this.$children[this.$index(i)];
		c.dispatchEvent(new Event("removed", true));
		if (this.stage) staged(c, "removedFromStage");
		const at = this.$children.indexOf(c);
		if (at >= 0) {
			this.$children.splice(at, 1);
			c.parent = null;
		}
		return c;
	}
	removeChildren(begin = 0, end = 2147483647) {
		const len = this.$children.length;
		begin |= 0;
		end = Math.min(end | 0, len - 1);
		if (len === 0 && begin === 0) return;
		if (begin < 0 || begin >= len || end < begin) throw rangeError();
		for (let k = begin; k <= end; k++) this.removeChildAt(begin);
	}
	getChildAt(i) {
		return this.$children[this.$index(i)];
	}
	getChildIndex(c) {
		const i = this.$children.indexOf(c);
		if (i < 0) throw notAChild();
		return i;
	}
	getChildByName(n) {
		return this.$children.find((c) => c.name === n) ?? null;
	}
	setChildIndex(c, i) {
		const from = this.$children.indexOf(c);
		if (from < 0) throw notAChild();
		const to = this.$index(i);
		this.$children.splice(from, 1);
		this.$children.splice(to, 0, c);
	}
	swapChildren(a, b) {
		const i = this.$children.indexOf(a);
		const j = this.$children.indexOf(b);
		if (i < 0 || j < 0) throw notAChild();
		this.$children[i] = b;
		this.$children[j] = a;
	}
	swapChildrenAt(i, j) {
		i = this.$index(i);
		j = this.$index(j);
		[this.$children[i], this.$children[j]] = [this.$children[j], this.$children[i]];
	}
	contains(c) {
		for (let o = c; o; o = o.parent) if (o === this) return true;
		return false;
	}
};
function staged(o, type) {
	if (o.hasEventListener(type)) o.dispatchEvent(new Event(type));
	if (o.$children) for (const c of [...o.$children]) staged(c, type);
}
var Graphics = class extends $O {
	$ctor_Graphics() {
		this.clear();
	}
	$cover(b) {
		const h = (this.$line ?? 0) / 2;
		this.$bounds = union(this.$bounds, [
			b[0] - h,
			b[1] - h,
			b[2] + h,
			b[3] + h
		]);
	}
	beginFill(color, alpha = 1) {
		this.$fill = [color >>> 0, alpha];
	}
	endFill() {
		this.$fill = null;
	}
	lineStyle(thickness = NaN) {
		this.$line = Number.isNaN(thickness) ? null : Math.min(255, Math.max(0, thickness));
	}
	moveTo(x, y) {
		this.$pen = [x, y];
	}
	lineTo(x, y) {
		const [px, py] = this.$pen;
		this.$cover([
			Math.min(px, x),
			Math.min(py, y),
			Math.max(px, x),
			Math.max(py, y)
		]);
		this.$pen = [x, y];
	}
	drawRect(x, y, w, h) {
		this.$cover([
			Math.min(x, x + w),
			Math.min(y, y + h),
			Math.max(x, x + w),
			Math.max(y, y + h)
		]);
	}
	drawCircle(x, y, r) {
		this.$cover([
			x - r,
			y - r,
			x + r,
			y + r
		]);
	}
	clear() {
		this.$bounds = null;
		this.$pen = [0, 0];
		this.$line = null;
		this.$fill = null;
	}
	$extent(m) {
		return this.$bounds ? extentOfBox(m, this.$bounds[2] - this.$bounds[0], this.$bounds[3] - this.$bounds[1], this.$bounds[0], this.$bounds[1]) : null;
	}
};
var Sprite = class extends DisplayObjectContainer {
	$ctor_Sprite() {
		this.$ctor_DisplayObjectContainer();
		Object.assign(this, {
			buttonMode: false,
			useHandCursor: true,
			hitArea: null
		});
		this.$g = new Graphics();
	}
	get graphics() {
		return this.$g;
	}
	$ownExtent(m) {
		return this.$g.$extent(m);
	}
};
var Shape = class extends DisplayObject {
	$ctor_Shape() {
		this.$ctor_DisplayObject();
		this.$g = new Graphics();
	}
	get graphics() {
		return this.$g;
	}
	$ownExtent(m) {
		return this.$char !== void 0 ? null : this.$g.$extent(m);
	}
};
var MovieClip = class MovieClip extends Sprite {
	$ctor_MovieClip() {
		this.$ctor_Sprite();
		this.currentFrame = 1;
		this.totalFrames = 1;
		const id = this.constructor !== MovieClip ? classId(this.constructor) : void 0;
		if (id !== void 0) timeline(this, id);
	}
	get isPlaying() {
		return !!this.$playing;
	}
	stop() {
		this.$playing = false;
	}
	play() {
		this.$playing = true;
	}
	gotoAndStop(f) {
		this.currentFrame = f;
		this.stop();
	}
	gotoAndPlay(f) {
		this.currentFrame = f;
		this.play();
	}
};
function timeline(clip, id) {
	clip.$char = id;
	clip.totalFrames = Math.max(1, character(id)?.frames ?? 1);
	for (const c of frameOf(id, 1)) {
		const ch = character(c.id);
		let child;
		if (ch?.controls) {
			child = new MovieClip();
			timeline(child, c.id);
		} else {
			child = new Shape();
			child.$char = c.id;
		}
		child.$matrix = c.matrix;
		const [rm, gm, bm, am, ro, go, bo, ao] = c.color;
		child.$color = new ColorTransform(rm, gm, bm, 1, ro, go, bo, ao);
		child.alpha = am;
		if (c.filters?.length) child.filters = c.filters.map(fromSwf);
		if (c.name) {
			child.name = c.name;
			clip[c.name] = child;
		}
		clip.addChild(child);
	}
}
var Stage = class extends DisplayObjectContainer {
	$ctor_Stage(width = 1616, height = 720, contentsScaleFactor = 1) {
		this.$ctor_DisplayObjectContainer();
		Object.assign(this, {
			stageWidth: width,
			stageHeight: height,
			fullScreenWidth: width,
			fullScreenHeight: height,
			scaleMode: "showAll",
			align: "",
			displayState: "normal",
			focus: null,
			contentsScaleFactor,
			browserZoomFactor: 1,
			vsyncEnabled: true
		});
		this.frameRate = 60;
		this.quality = "high";
		this.color = 0;
		this.stage3Ds = [
			new Stage3D(),
			new Stage3D(),
			new Stage3D(),
			new Stage3D()
		];
	}
	get stage() {
		return this;
	}
	get frameRate() {
		return this.$frameRate;
	}
	set frameRate(v) {
		this.$frameRate = Math.min(1e3, Math.max(.01, v));
	}
	get quality() {
		return this.$quality;
	}
	set quality(v) {
		this.$quality = String(v).toLowerCase();
	}
	get color() {
		return this.$color;
	}
	set color(v) {
		this.$color = v >>> 0 & 16777215;
	}
	get softKeyboardRect() {
		return new Rectangle(0, 0, 0, 0);
	}
	invalidate() {
		player.later(() => {
			if (this.hasEventListener("render")) this.dispatchEvent(new Event("render"));
		});
	}
	static $frame(ms = 1e3 / 60) {
		frame(ms);
	}
	static $resize(width, height) {
		const s = player.stage;
		s.stageWidth = width | 0;
		s.stageHeight = height | 0;
		s.dispatchEvent(new Event("resize"));
	}
	static $key(down, keyCode, charCode = 0) {
		const s = player.stage;
		(s.focus ?? s).dispatchEvent(new KeyboardEvent(down ? "keyDown" : "keyUp", true, false, charCode, keyCode));
	}
};
var Stage3D = class extends EventDispatcher {
	$ctor_Stage3D() {
		this.$ctor_EventDispatcher();
		this.x = 0;
		this.y = 0;
		this.visible = true;
		this.context3D = null;
	}
	requestContext3D(mode = "auto", profile = "baseline") {
		player.later(() => {
			this.context3D = new player.natives.Context3D(profile);
			this.dispatchEvent(new Event("context3DCreate"));
		});
	}
	requestContext3DMatchingProfiles(profiles) {
		this.requestContext3D("auto", profiles[0] ?? "");
	}
};
const invalid = () => raise(ArgumentError, 2015, "Invalid BitmapData.");
var BitmapData = class BitmapData extends $O {
	$ctor_BitmapData(width, height, transparent = true, fillColor = 4294967295) {
		const embed = this.constructor !== BitmapData ? linked$1(this.constructor) : null;
		this.$transparent = !!transparent;
		if (embed?.width !== void 0) {
			this.$w = embed.width;
			this.$h = embed.height;
			this.$symbol = this.constructor;
			return;
		}
		width |= 0;
		height |= 0;
		if (width <= 0 || height <= 0 || width > 8191 || height > 8191 || width * height > 16777215) throw invalid();
		this.$w = width;
		this.$h = height;
		this.$fill = premultiply(fillColor >>> 0, this.$transparent);
	}
	$size() {
		if (this.$disposed) throw invalid();
		return [this.$w, this.$h];
	}
	generateFilterRect(sourceRect, filter) {
		this.$size();
		const [x, y, w, h] = filter_rect([
			sourceRect.x,
			sourceRect.y,
			sourceRect.width,
			sourceRect.height
		], rectRecord(filter));
		return new Rectangle(x, y, w, h);
	}
	get width() {
		return this.$size()[0];
	}
	get height() {
		return this.$size()[1];
	}
	get transparent() {
		this.$size();
		return this.$transparent;
	}
	get rect() {
		const [w, h] = this.$size();
		return new Rectangle(0, 0, w, h);
	}
	get $pixels() {
		this.$size();
		if (this.$px) return this.$px;
		const n = this.$w * this.$h;
		if (this.$symbol) {
			if (!pixels) throw new Error("missing native: swf.pixels");
			const argb = pixels(qualifiedName(this.$symbol));
			if (argb.length !== n) throw new Error(`embedded bitmap ${qualifiedName(this.$symbol)} has no pixels`);
			this.$px = Uint32Array.from(argb, (c) => premultiply(c >>> 0, this.$transparent));
		} else if (this.$encoded) this.$px = decode(this.$encoded, this.$w, this.$h);
		else this.$px = new Uint32Array(n).fill(this.$fill);
		return this.$px;
	}
	$argb() {
		return this.$pixels.map(unmultiply);
	}
	$at(x, y) {
		const [w, h] = this.$size();
		x |= 0;
		y |= 0;
		return x >= 0 && y >= 0 && x < w && y < h ? y * w + x : -1;
	}
	getPixel32(x, y) {
		const i = this.$at(x, y);
		return i < 0 ? 0 : unmultiply(this.$pixels[i]);
	}
	getPixel(x, y) {
		return (this.getPixel32(x, y) & 16777215) >>> 0;
	}
	setPixel32(x, y, color) {
		const i = this.$at(x, y);
		if (i >= 0) this.$pixels[i] = premultiply(color >>> 0, this.$transparent);
	}
	setPixel(x, y, color) {
		const i = this.$at(x, y);
		if (i < 0) return;
		const alpha = unmultiply(this.$pixels[i]) & 4278190080;
		this.$pixels[i] = premultiply((alpha | color & 16777215) >>> 0, this.$transparent);
	}
	fillRect(rect, color) {
		const [w, h] = this.$size(), [x0, y0, x1, y1] = region(rect, w, h);
		const c = premultiply(color >>> 0, this.$transparent);
		if (x0 === 0 && y0 === 0 && x1 === w && y1 === h) {
			this.$px = null;
			this.$symbol = null;
			this.$encoded = null;
			this.$fill = c;
			return;
		}
		const px = this.$pixels;
		for (let y = y0; y < y1; y++) px.fill(c, y * w + x0, y * w + x1);
	}
	copyPixels(source, sourceRect, destPoint, alphaBitmapData = null, alphaPoint = null, mergeAlpha = false) {
		if (alphaBitmapData) throw new Error("missing native: flash.display.BitmapData.copyPixels with alphaBitmapData");
		const [sw, sh] = source.$size(), [w, h] = this.$size();
		const rx = sourceRect.x | 0;
		const ry = sourceRect.y | 0;
		const rw = sourceRect.width | 0;
		const rh = sourceRect.height | 0;
		const dx = destPoint.x | 0;
		const dy = destPoint.y | 0;
		const blend = mergeAlpha || source.$transparent && !this.$transparent;
		const from = Uint32Array.from(source.$pixels);
		const to = this.$pixels;
		for (let y = 0; y < rh; y++) for (let x = 0; x < rw; x++) {
			const sx = rx + x;
			const sy = ry + y;
			const tx = dx + x;
			const ty = dy + y;
			if (sx < 0 || sy < 0 || tx < 0 || ty < 0 || sx >= sw || sy >= sh || tx >= w || ty >= h) continue;
			const s = from[sy * sw + sx];
			const t = ty * w + tx;
			to[t] = blend ? blendOver(to[t], s) : s;
		}
	}
	draw(source, matrix = null, colorTransform = null, blendMode = null, clipRect = null, smoothing = false) {
		if (blendMode && blendMode !== "normal") throw new Error(`missing native: flash.display.BitmapData.draw with blendMode ${blendMode}`);
		const m = matrix ? [
			matrix.a,
			matrix.b,
			matrix.c,
			matrix.d,
			matrix.tx,
			matrix.ty
		] : IDENTITY;
		const [w, h] = this.$size(), [x0, y0, x1, y1] = clipRect ? region(clipRect, w, h) : [
			0,
			0,
			w,
			h
		];
		let sample;
		if (source instanceof BitmapData) {
			const [sw, sh] = source.$size(), from = Uint32Array.from(source.$pixels), inv = invert(m);
			sample = (x, y) => {
				let [sx, sy] = apply(inv, x + .5, y + .5);
				sx = Math.floor(sx);
				sy = Math.floor(sy);
				return sx >= 0 && sy >= 0 && sx < sw && sy < sh ? from[sy * sw + sx] : void 0;
			};
		} else {
			const drawn = raster?.sink?.draw(symbolName(source), m, w, h, source);
			if (!drawn) return;
			sample = (x, y) => {
				const c = drawn[y * w + x];
				return c === void 0 ? void 0 : premultiply(c >>> 0, true);
			};
		}
		const px = this.$pixels;
		const opaque = !this.$transparent;
		for (let y = y0; y < y1; y++) for (let x = x0; x < x1; x++) {
			let s = sample(x, y);
			if (s === void 0) continue;
			if (colorTransform) s = premultiply(colorTransform.$apply(unmultiply(s)), true);
			px[y * w + x] = (blendOver(px[y * w + x], s) | (opaque ? 4278190080 : 0)) >>> 0;
		}
	}
	getVector(rect) {
		const [w, h] = this.$size(), [x0, y0, x1, y1] = region(rect, w, h), px = this.$pixels, out = [];
		for (let y = y0; y < y1; y++) for (let x = x0; x < x1; x++) out.push(unmultiply(px[y * w + x]));
		return out;
	}
	setVector(rect, input) {
		const [w, h] = this.$size(), [x0, y0, x1, y1] = region(rect, w, h), px = this.$pixels;
		if (input.length < (x1 - x0) * (y1 - y0)) throw rangeError();
		let i = 0;
		for (let y = y0; y < y1; y++) for (let x = x0; x < x1; x++) px[y * w + x] = premultiply(input[i++] >>> 0, this.$transparent);
	}
	setPixels(rect, input) {
		const [w, h] = this.$size(), [x0, y0, x1, y1] = region(rect, w, h), px = this.$pixels;
		for (let y = y0; y < y1; y++) for (let x = x0; x < x1; x++) {
			if (input.bytesAvailable < 4) {
				input.position = input.length;
				throw raise(EOFError, 2030, "End of file was encountered.");
			}
			px[y * w + x] = premultiply(input.readUnsignedInt() >>> 0, this.$transparent);
		}
	}
	clone() {
		this.$size();
		const c = Object.create(BitmapData.prototype);
		Object.assign(c, this);
		if (this.$px) c.$px = Uint32Array.from(this.$px);
		return c;
	}
	lock() {}
	unlock(changeRect = null) {}
	dispose() {
		this.$disposed = true;
		this.$px = null;
	}
	noise(randomSeed, low = 0, high = 255, channelOptions = 7, grayScale = false) {
		const [w, h] = this.$size(), transparent = this.$transparent, n = w * h;
		low = low >>> 0 & 255;
		high = Math.max(high >>> 0 & 255, low);
		const channels = channelOptions >>> 0;
		const seed = randomSeed | 0;
		let x = seed <= 0 ? 1 - seed : seed;
		const next = () => {
			x = x * 16807 % 2147483647;
			return low + x % (high - low + 1);
		};
		const pick = (bit) => channels & bit ? next() : 0;
		const px = new Uint32Array(n);
		for (let i = 0; i < n; i++) {
			let r;
			let g;
			let b;
			if (grayScale) r = g = b = next();
			else {
				r = pick(1);
				g = pick(2);
				b = pick(4);
			}
			const a = transparent && channels & 8 ? next() : 255;
			px[i] = premultiply((a << 24 | r << 16 | g << 8 | b) >>> 0, transparent);
		}
		this.$px = px;
	}
	perlinNoise(baseX, baseY, numOctaves, randomSeed, stitch, fractalNoise, channelOptions = 7, grayScale = false, offsets = null) {
		const [w, h] = this.$size(), transparent = this.$transparent;
		const octaves = numOctaves >>> 0;
		const channels = (channelOptions | 0) & 255;
		const offs = [];
		for (let i = 0; i < octaves; i++) {
			const p = offsets?.[i];
			offs.push(p ? [p.x, p.y] : [0, 0]);
		}
		const turb = new Turbulence(randomSeed | 0);
		const freq = [baseX === 0 ? 0 : 1 / baseX, baseY === 0 ? 0 : 1 / baseY];
		const size = [w, h];
		const px = new Uint32Array(w * h);
		const byte = (n) => u8(fractalNoise ? (n * 255 + 255 + .5) / 2 : n * 255 + .5);
		for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
			const at = (c) => turb.turbulence(c, [x, y], freq, octaves, fractalNoise, stitch, [0, 0], size, offs);
			const noise = [
				0,
				0,
				0,
				0
			];
			if (grayScale) {
				noise[0] = noise[1] = noise[2] = at(0);
				noise[3] = channels & 8 ? at(1) : 1;
			} else {
				let channel = 0;
				for (let c = 0; c < 4; c++) {
					noise[c] = c === 3 ? 1 : -1;
					if (channels & 1 << c) noise[c] = at(channel++);
				}
			}
			const a = transparent ? byte(noise[3]) : 255;
			px[y * w + x] = (a << 24 | byte(noise[0]) << 16 | byte(noise[1]) << 8 | byte(noise[2])) >>> 0;
		}
		this.$px = px;
	}
};
function blendOver(d, s) {
	const inv = 256 - (s >>> 24);
	const ch = (shift) => Math.min(255, (s >>> shift & 255) + ((d >>> shift & 255) * inv >> 8));
	return (ch(24) << 24 | ch(16) << 16 | ch(8) << 8 | ch(0)) >>> 0;
}
function imageHeader(d) {
	if (d[0] === 137 && d[1] === 80) return [d.readUInt32BE(16), d.readUInt32BE(20)];
	if (d[0] === 71 && d[1] === 73 && d[2] === 70) return [d.readUInt16LE(6), d.readUInt16LE(8)];
	if (d[0] === 255 && d[1] === 216) for (let p = 2; p + 8 < d.length && d[p] === 255;) {
		const m = d[p + 1];
		if (m >= 192 && m <= 207 && m !== 196 && m !== 200 && m !== 204) return [d.readUInt16BE(p + 7), d.readUInt16BE(p + 5)];
		p += 2 + d.readUInt16BE(p + 2);
	}
	return null;
}
function decode(d, w, h) {
	if (!(d[0] === 137 && d[1] === 80)) throw new Error("missing native: decoding JPEG or GIF pixels");
	let p = 8;
	let depth;
	let type;
	let interlace;
	let palette = null;
	let trns = null;
	const idat = [];
	while (p < d.length) {
		const len = d.readUInt32BE(p);
		const kind = d.toString("latin1", p + 4, p + 8);
		const body = d.subarray(p + 8, p + 8 + len);
		if (kind === "IHDR") {
			depth = body[8];
			type = body[9];
			interlace = body[12];
		} else if (kind === "PLTE") palette = body;
		else if (kind === "tRNS") trns = body;
		else if (kind === "IDAT") idat.push(body);
		else if (kind === "IEND") break;
		p += 12 + len;
	}
	if (depth !== 8 || interlace) throw new Error(`missing native: decoding a PNG of depth ${depth}${interlace ? ", interlaced" : ""}`);
	const channels = {
		0: 1,
		2: 3,
		3: 1,
		4: 2,
		6: 4
	}[type];
	const stride = w * channels;
	const raw = inflateSync(Buffer.concat(idat));
	const rows = new Uint8Array(stride * h);
	for (let y = 0; y < h; y++) {
		const filter = raw[y * (stride + 1)];
		const src = raw.subarray(y * (stride + 1) + 1, (y + 1) * (stride + 1));
		for (let x = 0; x < stride; x++) {
			const a = x >= channels ? rows[y * stride + x - channels] : 0;
			const b = y ? rows[(y - 1) * stride + x] : 0;
			const c = x >= channels && y ? rows[(y - 1) * stride + x - channels] : 0;
			const pa = Math.abs(b - c);
			const pb = Math.abs(a - c);
			const pc = Math.abs(a + b - 2 * c);
			const pred = [
				0,
				a,
				b,
				a + b >> 1,
				pa <= pb && pa <= pc ? a : pb <= pc ? b : c
			][filter];
			rows[y * stride + x] = src[x] + pred & 255;
		}
	}
	const out = new Uint32Array(w * h);
	for (let i = 0; i < w * h; i++) {
		const q = i * channels;
		let r;
		let g;
		let b;
		let a = 255;
		if (type === 0) r = g = b = rows[q];
		else if (type === 4) {
			r = g = b = rows[q];
			a = rows[q + 1];
		} else if (type === 3) {
			const k = rows[q];
			[r, g, b] = [
				palette[k * 3],
				palette[k * 3 + 1],
				palette[k * 3 + 2]
			];
			a = trns && k < trns.length ? trns[k] : 255;
		} else {
			r = rows[q];
			g = rows[q + 1];
			b = rows[q + 2];
			if (type === 6) a = rows[q + 3];
		}
		out[i] = premultiply((a << 24 | r << 16 | g << 8 | b) >>> 0, true);
	}
	return out;
}
const u8 = (v) => Number.isNaN(v) ? 0 : Math.min(255, Math.max(0, Math.trunc(v)));
function region(rect, w, h) {
	const clamp = (v, max) => Math.min(Math.max(v | 0, 0), max);
	const x0 = clamp(rect.x, w);
	const y0 = clamp(rect.y, h);
	return [
		x0,
		y0,
		Math.max(clamp(rect.x + rect.width, w), x0),
		Math.max(clamp(rect.y + rect.height, h), y0)
	];
}
function premultiply(argb, transparent) {
	const a = transparent ? argb >>> 24 : 255;
	const scale = (shift) => Math.floor(((argb >>> shift & 255) * a + 127) / 255);
	return (a << 24 | scale(16) << 16 | scale(8) << 8 | scale(0)) >>> 0;
}
const FACTOR = [
	0,
	16678912,
	8339456,
	5559638,
	4169728,
	3335783,
	2779819,
	2386603,
	2086230,
	1855488,
	1667892,
	1518251,
	1391151,
	1285234,
	1193302,
	1111928,
	1043895,
	981113,
	927744,
	879275,
	834621,
	795535,
	759126,
	726358,
	695839,
	668183,
	642538,
	618737,
	596651,
	576171,
	555964,
	538706,
	522104,
	506319,
	490557,
	477321,
	464038,
	451353,
	439544,
	428244,
	417582,
	407500,
	397768,
	388535,
	379630,
	371117,
	363179,
	355235,
	348050,
	340965,
	334052,
	327038,
	321269,
	315077,
	309159,
	303586,
	298189,
	293092,
	287981,
	283080,
	278251,
	273892,
	269268,
	265179,
	261087,
	256971,
	253160,
	249322,
	245508,
	242164,
	238575,
	235245,
	231859,
	228848,
	225785,
	222712,
	219616,
	216827,
	213985,
	211432,
	208835,
	206075,
	203750,
	201196,
	198895,
	196223,
	194301,
	191987,
	189686,
	187636,
	185559,
	183426,
	181453,
	179444,
	177638,
	175855,
	174054,
	171948,
	170489,
	168695,
	166889,
	165365,
	163519,
	162045,
	160508,
	158970,
	157429,
	156150,
	154610,
	153081,
	151803,
	150511,
	148986,
	147709,
	146420,
	145116,
	143868,
	142586,
	141545,
	140277,
	139194,
	137957,
	136954,
	135676,
	134652,
	133621,
	132604,
	131577,
	130552,
	129527,
	128508,
	127476,
	126451,
	125432,
	124670,
	123645,
	122818,
	121847,
	121082,
	120060,
	119288,
	118263,
	117502,
	116720,
	115967,
	115195,
	114424,
	113655,
	112893,
	112125,
	111356,
	110563,
	109811,
	109048,
	108287,
	107766,
	107004,
	106236,
	105724,
	104953,
	104434,
	103676,
	102904,
	102375,
	101879,
	101119,
	100604,
	99834,
	99321,
	98813,
	98112,
	97533,
	97019,
	96509,
	95994,
	95486,
	94713,
	94185,
	93689,
	93179,
	92667,
	92149,
	91643,
	91129,
	90621,
	90068,
	89597,
	89342,
	88829,
	88318,
	87804,
	87294,
	87034,
	86523,
	85994,
	85499,
	85245,
	84732,
	84222,
	83956,
	83450,
	82937,
	82685,
	82173,
	81840,
	81405,
	80889,
	80638,
	80127,
	79862,
	79354,
	79103,
	78590,
	78332,
	78077,
	77565,
	77308,
	76795,
	76541,
	76284,
	75766,
	75518,
	75262,
	74748,
	74493,
	74238,
	73691,
	73470,
	73214,
	72959,
	72447,
	72189,
	71935,
	71671,
	71166,
	70911,
	70651,
	70399,
	70140,
	69886,
	69615,
	69116,
	68861,
	68603,
	68350,
	68093,
	67839,
	67576,
	67326,
	67070,
	66813,
	66556,
	66302,
	66046,
	65791,
	65408
];
function unmultiply(stored) {
	const a = stored >>> 24;
	const factor = FACTOR[a];
	const channel = (shift) => Math.min(255, Math.floor(((stored >>> shift & 255) * factor + 32768) / 65536));
	return (a << 24 | channel(16) << 16 | channel(8) << 8 | channel(0)) >>> 0;
}
const RAND_M = 2147483647;
const RAND_A = 16807;
const RAND_Q = 127773;
const RAND_R = 2836;
const B_SIZE = 256;
const BM = 255;
const PERLIN_N = 4096;
const lerp = (t, a, b) => a + t * (b - a);
const sCurve = (t) => t * t * (3 - 2 * t);
function setupSeed(seed) {
	if (seed <= 0) seed = -(seed % 2147483646) + 1;
	if (seed > 2147483646) seed = 2147483646;
	return seed;
}
function random(seed) {
	let r = RAND_A * (seed % RAND_Q) - RAND_R * Math.trunc(seed / RAND_Q);
	if (r <= 0) r += RAND_M;
	return r;
}
var Turbulence = class {
	constructor(seed) {
		const lattice = /* @__PURE__ */ new Int32Array(514);
		const gradient = [
			0,
			1,
			2,
			3
		].map(() => Array.from({ length: 514 }, () => [0, 0]));
		seed = setupSeed(seed);
		for (let k = 0; k < 4; k++) for (let i = 0; i < B_SIZE; i++) {
			lattice[i] = i;
			for (let j = 0; j < 2; j++) {
				seed = random(seed);
				gradient[k][i][j] = (seed % 512 - B_SIZE) / B_SIZE;
			}
			const g = gradient[k][i];
			const s = Math.sqrt(g[0] * g[0] + g[1] * g[1]);
			g[0] /= s;
			g[1] /= s;
		}
		for (let i = 255; i > 0; i--) {
			const k = lattice[i];
			seed = random(seed);
			const j = seed % B_SIZE;
			lattice[i] = lattice[j];
			lattice[j] = k;
		}
		for (let i = 0; i < 258; i++) {
			lattice[B_SIZE + i] = lattice[i];
			for (let k = 0; k < 4; k++) gradient[k][B_SIZE + i] = [gradient[k][i][0], gradient[k][i][1]];
		}
		this.lattice = lattice;
		this.gradient = gradient;
	}
	noise2(channel, vx, vy, stitch) {
		let t = vx + PERLIN_N;
		let bx0 = Math.trunc(t);
		let bx1 = bx0 + 1;
		const rx0 = t - Math.trunc(t);
		const rx1 = rx0 - 1;
		t = vy + PERLIN_N;
		let by0 = Math.trunc(t);
		let by1 = by0 + 1;
		const ry0 = t - Math.trunc(t);
		const ry1 = ry0 - 1;
		if (stitch) {
			if (bx0 >= stitch.wrapX) bx0 -= stitch.width;
			if (bx1 >= stitch.wrapX) bx1 -= stitch.width;
			if (by0 >= stitch.wrapY) by0 -= stitch.height;
			if (by1 >= stitch.wrapY) by1 -= stitch.height;
		}
		bx0 &= BM;
		bx1 &= BM;
		by0 &= BM;
		by1 &= BM;
		const L = this.lattice;
		const G = this.gradient[channel];
		const i = L[bx0];
		const j = L[bx1];
		const b00 = L[i + by0];
		const b10 = L[j + by0];
		const b01 = L[i + by1];
		const b11 = L[j + by1];
		const sx = sCurve(rx0);
		const sy = sCurve(ry0);
		let q = G[b00];
		let u = rx0 * q[0] + ry0 * q[1];
		q = G[b10];
		let v = rx1 * q[0] + ry0 * q[1];
		const a = lerp(sx, u, v);
		q = G[b01];
		u = rx0 * q[0] + ry1 * q[1];
		q = G[b11];
		v = rx1 * q[0] + ry1 * q[1];
		const b = lerp(sx, u, v);
		return lerp(sy, a, b);
	}
	turbulence(channel, point, baseFreq, numOctaves, fractalSum, doStitching, tilePos, tileSize, offsets) {
		let [fx, fy] = baseFreq, stitch = null;
		if (doStitching) {
			if (fx !== 0) {
				const lo = Math.floor(tileSize[0] * fx) / tileSize[0];
				const hi = Math.ceil(tileSize[0] * fx) / tileSize[0];
				fx = fx / lo < hi / fx ? lo : hi;
			}
			if (fy !== 0) {
				const lo = Math.floor(tileSize[1] * fx) / tileSize[1];
				const hi = Math.ceil(tileSize[1] * fy) / tileSize[1];
				fy = fy / lo < hi / fy ? lo : hi;
			}
			const w = Math.trunc(tileSize[0] * fx + .5);
			const h = Math.trunc(tileSize[1] * fy + .5);
			stitch = {
				width: w,
				height: h,
				wrapX: Math.trunc(tilePos[0] * fx) + PERLIN_N + w,
				wrapY: Math.trunc(tilePos[1] * fy) + PERLIN_N + h
			};
		}
		let sum = 0;
		let ratio = 1;
		for (let octave = 0; octave < numOctaves; octave++) {
			const [ox, oy] = offsets[octave];
			const noise = this.noise2(channel, (point[0] + ox) * fx * ratio, (point[1] + oy) * fy * ratio, stitch);
			sum += (fractalSum ? noise : Math.abs(noise)) / ratio;
			ratio *= 2;
			if (stitch) {
				stitch.width *= 2;
				stitch.wrapX = 2 * stitch.wrapX - PERLIN_N;
				stitch.height *= 2;
				stitch.wrapY = 2 * stitch.wrapY - PERLIN_N;
			}
		}
		return sum;
	}
};
var Bitmap = class Bitmap extends DisplayObject {
	$ctor_Bitmap(bitmapData = null, pixelSnapping = "auto", smoothing = false) {
		this.$ctor_DisplayObject();
		Object.assign(this, {
			bitmapData,
			pixelSnapping,
			smoothing
		});
		const embed = !bitmapData && this.constructor !== Bitmap && linked$1(this.constructor);
		if (embed?.width !== void 0) {
			const d = Object.create(BitmapData.prototype);
			Object.assign(d, {
				$w: embed.width,
				$h: embed.height,
				$transparent: true,
				$symbol: this.constructor
			});
			this.bitmapData = d;
		}
	}
	$ownExtent(m) {
		const b = this.bitmapData;
		return b ? extentOfBox(m, b.$w, b.$h) : null;
	}
};
var Loader = class extends DisplayObjectContainer {
	$ctor_Loader() {
		this.$ctor_DisplayObjectContainer();
		this.contentLoaderInfo = new LoaderInfo();
		this.contentLoaderInfo.$ctor_LoaderInfo(this);
	}
	get content() {
		return this.contentLoaderInfo.content;
	}
	load(request, context = null) {
		const url = request.url;
		const info = this.contentLoaderInfo;
		const bytes = readFile(url);
		info.url = url;
		if (bytes) return this.$arrive(bytes);
		player.later(() => info.dispatchEvent(new IOErrorEvent("ioError", false, false, `Error #2035: URL Not Found. URL: ${url}`, 2035)));
	}
	loadBytes(bytes, context = null) {
		const data = Buffer.from(new Uint8Array(bytes.buf, bytes.position, bytes.length - bytes.position));
		bytes.position = bytes.length;
		this.$arrive(data);
	}
	$arrive(bytes) {
		const info = this.contentLoaderInfo;
		player.later(() => {
			const size = imageHeader(bytes);
			if (!size) return info.dispatchEvent(new IOErrorEvent("ioError", false, false, "Error #2124: Loaded file is an unknown type.", 2124));
			const data = Object.create(BitmapData.prototype);
			Object.assign(data, {
				$w: size[0],
				$h: size[1],
				$transparent: true,
				$encoded: bytes
			});
			const bitmap = new Bitmap(data);
			Object.assign(info, {
				content: bitmap,
				bytesLoaded: bytes.length,
				bytesTotal: bytes.length,
				width: size[0],
				height: size[1],
				contentType: bytes[0] === 137 ? "image/png" : bytes[0] === 255 ? "image/jpeg" : "image/gif"
			});
			this.addChild(bitmap);
			for (const type of ["init", "complete"]) if (info.hasEventListener(type)) info.dispatchEvent(new Event(type));
		});
	}
	unload() {
		if (this.content) this.removeChild(this.content);
		this.contentLoaderInfo.$ctor_LoaderInfo(this);
	}
};
var LoaderInfo = class extends EventDispatcher {
	$ctor_LoaderInfo(loader = null) {
		this.$ctor_EventDispatcher();
		Object.assign(this, {
			loader,
			content: null,
			url: null,
			bytesLoaded: 0,
			bytesTotal: 0,
			width: 0,
			height: 0,
			contentType: null
		});
	}
};
function extentOfBox(m, w, h, x = 0, y = 0) {
	return [
		[x, y],
		[x + w, y],
		[x, y + h],
		[x + w, y + h]
	].map(([x, y]) => [m[0] * x + m[2] * y + m[4], m[1] * x + m[3] * y + m[5]]).reduce((b, [x, y]) => [
		Math.min(b[0], x),
		Math.min(b[1], y),
		Math.max(b[2], x),
		Math.max(b[3], y)
	], [
		Infinity,
		Infinity,
		-Infinity,
		-Infinity
	]);
}
function installed() {
	return false;
}
let next = 1;
function handle() {
	return next++;
}
//#endregion
//#region ../../as3c-wt/js/js/natives/flash.display3D.mjs
var flash_display3D_exports = /* @__PURE__ */ __exportAll({
	Context3D: () => Context3D,
	IndexBuffer3D: () => IndexBuffer3D,
	Program3D: () => Program3D,
	RectangleTexture: () => RectangleTexture,
	Texture: () => Texture,
	TextureBase: () => TextureBase,
	VertexBuffer3D: () => VertexBuffer3D
});
function littleEndian(b, offset, count, size, read) {
	const bytes = b.$bytes;
	if (offset + count * size > bytes.length) throw raise(RangeError, 2006, "The supplied index is out of bounds.");
	const view = new DataView(bytes.buffer, bytes.byteOffset + offset, count * size);
	return Array.from({ length: count }, (_, i) => read(view, i * size));
}
const FORMATS = /* @__PURE__ */ new Set([
	"bytes4",
	"float1",
	"float2",
	"float3",
	"float4"
]);
var Context3D = class extends EventDispatcher {
	static get supportsVideoTexture() {
		return false;
	}
	$ctor_Context3D(profile = "baseline") {
		this.$ctor_EventDispatcher();
		const max = profile === "baseline" || profile === "baselineConstrained" ? 2048 : 4096;
		this.$profile = profile;
		this.$backBufferWidth = 0;
		this.$backBufferHeight = 0;
		this.maxBackBufferWidth = max;
		this.maxBackBufferHeight = max;
		this.enableErrorChecking = false;
		this.$disposed = false;
	}
	get profile() {
		return this.$profile;
	}
	get backBufferWidth() {
		return this.$backBufferWidth;
	}
	get backBufferHeight() {
		return this.$backBufferHeight;
	}
	get driverInfo() {
		return this.$disposed ? "Disposed" : "OpenGL (as3rt)";
	}
	clear(red = 0, green = 0, blue = 0, alpha = 1, depth = 1, stencil = 0, mask = 4294967295) {
		stencil >>> 0, mask >>> 0;
	}
	configureBackBuffer(width, height, antiAlias, enableDepthAndStencil = true) {
		this.$backBufferWidth = width;
		this.$backBufferHeight = height;
		width >>> 0, height >>> 0, antiAlias >>> 0;
	}
	createIndexBuffer(numIndices, bufferUsage = "staticDraw") {
		const h = handle();
		numIndices >>> 0;
		return Object.assign(new IndexBuffer3D(), { $handle: h });
	}
	createProgram() {
		const h = handle();
		return Object.assign(new Program3D(), { $handle: h });
	}
	$texture(texture, width, height, format, optimize) {
		const h = handle();
		width >>>= 0;
		height >>>= 0;
		return Object.assign(texture, {
			$handle: h,
			$width: width,
			$height: height
		});
	}
	createRectangleTexture(width, height, format, optimizeForRenderToTexture) {
		return this.$texture(new RectangleTexture(), width, height, format, optimizeForRenderToTexture);
	}
	createTexture(width, height, format, optimizeForRenderToTexture, streamingLevels = 0) {
		return this.$texture(new Texture(), width, height, format, optimizeForRenderToTexture);
	}
	createVertexBuffer(numVertices, data32PerVertex, bufferUsage = "staticDraw") {
		const h = handle();
		numVertices >>> 0, data32PerVertex >>> 0;
		return Object.assign(new VertexBuffer3D(), {
			$handle: h,
			$data32: data32PerVertex >>> 0
		});
	}
	createVideoTexture() {
		throw raise(Error, 3767, "Video textures are not supported");
	}
	dispose(recreate = true) {
		this.$disposed = true;
	}
	drawTriangles(indexBuffer, firstIndex = 0, numTriangles = -1) {
		if (indexBuffer === null) throw raise(TypeError, 1009, "Cannot access a property or method of a null object reference.");
		indexBuffer.$handle, firstIndex >>> 0, numTriangles | 0;
	}
	present() {}
	setBlendFactors(sourceFactor, destinationFactor) {}
	setCulling(triangleFaceToCull) {}
	setDepthTest(depthMask, passCompareMode) {}
	setProgram(program) {
		program?.$handle;
	}
	setProgramConstantsFromMatrix(programType, firstRegister, matrix, transposedMatrix = false) {
		if (!installed()) return;
		const m = matrix.m;
		Float32Array.from({ length: 16 }, (_, i) => transposedMatrix ? m[i % 4 * 4 + (i >> 2)] : m[i]);
		firstRegister >>> 0;
	}
	setProgramConstantsFromVector(programType, firstRegister, data, numRegisters = -1) {
		if (!installed()) return;
		const count = numRegisters < 0 ? data.length >> 2 : numRegisters;
		firstRegister >>> 0, Float32Array.from(data.slice(0, count * 4));
	}
	setRenderToBackBuffer() {}
	setRenderToTexture(texture, enableDepthAndStencil = false, antiAlias = 0, surfaceSelector = 0, colorOutputIndex = 0) {
		if (texture === null) throw raise(TypeError, 1009, "Cannot access a property or method of a null object reference.");
		texture.$handle, antiAlias >>> 0, surfaceSelector >>> 0;
	}
	setSamplerStateAt(sampler, wrap, filter, mipfilter) {
		sampler >>> 0;
	}
	setScissorRectangle(rectangle) {
		rectangle && (rectangle.x, rectangle.y, rectangle.width, rectangle.height);
	}
	setStencilActions(triangleFace = "frontAndBack", compareMode = "always", actionOnBothPass = "keep", actionOnDepthFail = "keep", actionOnDepthPassStencilFail = "keep") {}
	setStencilReferenceValue(referenceValue, readMask = 255, writeMask = 255) {
		referenceValue >>> 0, readMask >>> 0, writeMask >>> 0;
	}
	setTextureAt(sampler, texture) {
		sampler >>> 0, texture?.$handle;
	}
	setVertexBufferAt(index, buffer, bufferOffset = 0, format = "float4") {
		if (buffer !== null && !FORMATS.has(format)) throw raise(ArgumentError, 2008, "Parameter vertexStreamFormat must be one of the accepted values.");
		index >>> 0, buffer?.$handle, bufferOffset >>> 0;
	}
};
var VertexBuffer3D = class extends $O {
	uploadFromByteArray(data, byteArrayOffset, startVertex, numVertices) {
		if (!installed()) return;
		const floats = littleEndian(data, byteArrayOffset, numVertices * this.$data32, 4, (v, p) => v.getFloat32(p, true));
		this.$handle, Float32Array.from(floats), startVertex >>> 0, numVertices >>> 0;
	}
	uploadFromVector(data, startVertex, numVertices) {
		if (!installed()) return;
		this.$handle, Float32Array.from(data.slice(0, numVertices * this.$data32)), startVertex >>> 0, numVertices >>> 0;
	}
	dispose() {
		this.$handle;
	}
};
var IndexBuffer3D = class extends $O {
	uploadFromByteArray(data, byteArrayOffset, startOffset, count) {
		if (!installed()) return;
		const indices = littleEndian(data, byteArrayOffset, count, 2, (v, p) => v.getUint16(p, true));
		this.$handle, Uint16Array.from(indices), startOffset >>> 0, count >>> 0;
	}
	uploadFromVector(data, startOffset, count) {
		if (!installed()) return;
		this.$handle, Uint16Array.from(data.slice(0, count)), startOffset >>> 0, count >>> 0;
	}
	dispose() {
		this.$handle;
	}
};
var Program3D = class extends $O {
	upload(vertexProgram, fragmentProgram) {
		if (!installed()) return;
		this.$handle, vertexProgram.$bytes.slice(), fragmentProgram.$bytes.slice();
	}
	dispose() {
		this.$handle;
	}
};
var TextureBase = class extends EventDispatcher {
	$ctor_TextureBase() {
		this.$ctor_EventDispatcher();
	}
	dispose() {
		this.$handle;
	}
	$upload(source, miplevel) {
		if (!installed()) return;
		this.$handle, source.width >>> 0, source.height >>> 0, source.$argb(), miplevel >>> 0;
	}
};
var Texture = class extends TextureBase {
	uploadFromBitmapData(source, miplevel = 0) {
		this.$upload(source, miplevel);
	}
};
var RectangleTexture = class extends TextureBase {
	uploadFromBitmapData(source) {
		this.$upload(source, 0);
	}
};
//#endregion
//#region ../../as3c-wt/js/js/natives/flash.filesystem.mjs
var flash_filesystem_exports = /* @__PURE__ */ __exportAll({
	File: () => File,
	FileStream: () => FileStream,
	setDirectories: () => setDirectories
});
const missing$1 = /* @__PURE__ */ __name(() => raise(Error, 3003, "File or directory does not exist."), "missing");
const denied = () => raise(Error, 3001, "File or directory access denied.");
var File = class File extends FileReference {
	$ctor_File(p = null) {
		this.$ctor_FileReference();
		this.$path = p ?? "";
	}
	static $at(p) {
		return new File(p);
	}
	static get applicationDirectory() {
		return File.$at(directories().application);
	}
	static get documentsDirectory() {
		const d = directories().documents;
		fs_default.mkdirSync(d, { recursive: true });
		return File.$at(d);
	}
	static get applicationStorageDirectory() {
		const d = directories().storage;
		fs_default.mkdirSync(d, { recursive: true });
		return File.$at(d);
	}
	get exists() {
		return fs_default.existsSync(this.$path);
	}
	get isDirectory() {
		return fs_default.statSync(this.$path, { throwIfNoEntry: false })?.isDirectory() ?? false;
	}
	get isHidden() {
		return this.name.startsWith(".");
	}
	get extension() {
		const n = this.name;
		const dot = n.lastIndexOf(".");
		return dot < 0 ? null : n.slice(dot + 1);
	}
	get nativePath() {
		return this.$path;
	}
	get url() {
		const app = directories().application;
		if (this.$path === app || this.$path.startsWith(app + "/")) return "app:/" + this.$path.slice(app.length + 1);
		return "file://" + this.$path;
	}
	resolvePath(p) {
		const out = p.startsWith("/") ? [""] : this.$path.split("/");
		for (const part of p.split("/")) {
			if (part === "" || part === ".") continue;
			if (part === "..") {
				if (out.length > 1) out.pop();
			} else out.push(part);
		}
		return File.$at(out.join("/") || "/");
	}
	getDirectoryListing() {
		let names;
		try {
			names = fs_default.readdirSync(this.$path);
		} catch {
			throw missing$1();
		}
		return names.map((n) => path_default.join(this.$path, n)).sort().map((p) => File.$at(p));
	}
	createDirectory() {
		try {
			fs_default.mkdirSync(this.$path, { recursive: true });
		} catch {
			throw denied();
		}
	}
	requestPermission() {}
};
var FileStream = class extends EventDispatcher {
	$ctor_FileStream() {
		this.$ctor_EventDispatcher();
		this.$file = null;
		this.$mode = "";
		this.$b = /* @__PURE__ */ new Uint8Array(0);
		this.$at = 0;
	}
	open(file, fileMode) {
		const p = file.$path;
		let bytes = /* @__PURE__ */ new Uint8Array(0);
		if (fileMode !== "write") try {
			bytes = new Uint8Array(fs_default.readFileSync(p));
		} catch {
			if (fileMode === "read") throw missing$1();
		}
		Object.assign(this, {
			$file: p,
			$mode: fileMode,
			$b: bytes,
			$at: fileMode === "append" ? bytes.length : 0
		});
	}
	close() {
		const { $file: file, $mode: mode, $b: bytes } = this;
		Object.assign(this, {
			$file: null,
			$mode: "",
			$b: /* @__PURE__ */ new Uint8Array(0)
		});
		if (file !== null && mode !== "read") try {
			fs_default.writeFileSync(file, bytes);
		} catch {
			throw denied();
		}
	}
	get bytesAvailable() {
		return Math.max(this.$b.length - this.$at, 0);
	}
	get position() {
		return this.$at;
	}
	set position(v) {
		this.$at = v;
	}
	$take(count) {
		if (this.$file === null) throw raise(IOError, 2029, "This URLStream object does not have a stream opened.");
		if (this.$b.length - Math.min(this.$at, this.$b.length) < count) throw raise(EOFError, 2030, "End of file was encountered.");
		const out = this.$b.slice(this.$at, this.$at + count);
		this.$at += count;
		return out;
	}
	$put(data) {
		if (this.$file === null || this.$mode === "read") throw raise(IOError, 2029, "This URLStream object does not have a stream opened.");
		const end = this.$at + data.length;
		if (this.$b.length < end) {
			const grown = new Uint8Array(end);
			grown.set(this.$b);
			this.$b = grown;
		}
		this.$b.set(data, this.$at);
		this.$at = end;
	}
	readUTF() {
		const size = this.$take(2);
		return new TextDecoder().decode(this.$take(size[0] << 8 | size[1]));
	}
	readUTFBytes(length) {
		return new TextDecoder().decode(this.$take(length >>> 0));
	}
	writeUTF(value) {
		const bytes = new TextEncoder().encode(value);
		if (bytes.length > 65535) throw raise(RangeError, 2006, "The supplied index is out of bounds.");
		this.$put([bytes.length >> 8, bytes.length & 255]);
		this.$put(bytes);
	}
	readBytes(bytes, offset = 0, length = 0) {
		const data = this.$take(length === 0 ? this.bytesAvailable : length);
		const at = bytes.position;
		bytes.position = offset;
		bytes.writeBytes(ByteArray.$of(data), 0, data.length);
		bytes.position = at;
	}
	writeBytes(bytes, offset = 0, length = 0) {
		const all = bytes.$bytes;
		const start = Math.min(offset, all.length);
		const end = length === 0 ? all.length : Math.min(start + length, all.length);
		this.$put(all.subarray(start, end));
	}
};
//#endregion
//#region ../../as3c-wt/js/js/natives/flash.globalization.mjs
var flash_globalization_exports = /* @__PURE__ */ __exportAll({
	DateTimeFormatter: () => DateTimeFormatter,
	NumberFormatter: () => NumberFormatter
});
const MONTH_NAMES = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
const MONTHS = MONTH_NAMES.map((m) => m.slice(0, 3));
const DAY_NAMES = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
const DAYS = DAY_NAMES.map((d) => d.slice(0, 3));
function enUsPattern(date, time) {
	return [{
		long: "EEEE, MMMM d, yyyy",
		medium: "MMM d, yyyy",
		short: "M/d/yyyy"
	}[date] ?? "", {
		long: "h:mm:ss a",
		medium: "h:mm:ss a",
		short: "h:mm a"
	}[time] ?? ""].filter(Boolean).join(" ");
}
var DateTimeFormatter = class extends $O {
	$ctor_DateTimeFormatter(requestedLocaleIDName, dateStyle = "long", timeStyle = "long") {
		this.$requested = requestedLocaleIDName;
		this.$pattern = enUsPattern(dateStyle, timeStyle);
	}
	get requestedLocaleIDName() {
		return this.$requested;
	}
	get actualLocaleIDName() {
		return "en-US";
	}
	getDateTimePattern() {
		return this.$pattern;
	}
	setDateTimePattern(pattern) {
		this.$pattern = pattern;
	}
	format(d) {
		const p = this.$pattern;
		let out = "";
		for (let at = 0; at < p.length;) {
			const c = p[at];
			let run = 1;
			while (p[at + run] === c) run++;
			const pad = (v) => String(Math.trunc(v)).padStart(run, "0");
			if (c === "'") {
				let end = p.indexOf("'", at + 1);
				if (end < 0) end = p.length;
				out += end === at + 1 ? "'" : p.slice(at + 1, end);
				at = end + 1;
				continue;
			}
			switch (c) {
				case "y":
					out += run === 2 ? String(d.getFullYear() % 100).padStart(2, "0") : pad(d.getFullYear());
					break;
				case "M":
					out += run >= 4 ? MONTH_NAMES[d.getMonth()] : run === 3 ? MONTHS[d.getMonth()] : pad(d.getMonth() + 1);
					break;
				case "d":
					out += pad(d.getDate());
					break;
				case "E":
					out += run >= 4 ? DAY_NAMES[d.getDay()] : DAYS[d.getDay()];
					break;
				case "h":
					out += pad((d.getHours() + 11) % 12 + 1);
					break;
				case "H":
					out += pad(d.getHours());
					break;
				case "m":
					out += pad(d.getMinutes());
					break;
				case "s":
					out += pad(d.getSeconds());
					break;
				case "a":
					out += d.getHours() < 12 ? "AM" : "PM";
					break;
				default: out += c.repeat(run);
			}
			at += run;
		}
		return out;
	}
	getMonthNames(nameStyle = "full", context = "standalone") {
		return [...nameStyle === "full" ? MONTH_NAMES : MONTHS];
	}
	getWeekdayNames(nameStyle = "full", context = "standalone") {
		return [...nameStyle === "full" ? DAY_NAMES : DAYS];
	}
};
var NumberFormatter = class extends $O {
	$ctor_NumberFormatter(requestedLocaleIDName) {
		this.$requested = requestedLocaleIDName;
		this.useGrouping = true;
		this.groupingPattern = "3;*";
		this.groupingSeparator = ",";
		this.leadingZero = true;
		this.trailingZeros = false;
	}
	formatInt(value) {
		const v = value | 0;
		const digits = String(Math.abs(v));
		const sign = v < 0 ? "-" : "";
		if (!this.useGrouping) return sign + digits;
		const parts = this.groupingPattern.split(";");
		const repeat = parts[parts.length - 1] === "*";
		const sizes = parts.map(Number).filter((n) => Number.isInteger(n) && n > 0);
		const groups = [];
		for (let end = digits.length, next = 0; end > 0; next++) {
			const size = sizes[next] ?? (repeat && sizes.length ? sizes[sizes.length - 1] : end);
			const start = Math.max(0, end - size);
			groups.unshift(digits.slice(start, end));
			end = start;
		}
		return sign + groups.join(this.groupingSeparator);
	}
};
//#endregion
//#region ../../as3c-wt/js/js/natives/flash.media.mjs
var flash_media_exports = /* @__PURE__ */ __exportAll({
	Camera: () => Camera,
	Sound: () => Sound,
	SoundChannel: () => SoundChannel,
	SoundLoaderContext: () => SoundLoaderContext,
	SoundTransform: () => SoundTransform,
	mp3LengthMs: () => mp3LengthMs,
	resetChannels: () => resetChannels
});
var Sound = class Sound extends EventDispatcher {
	$ctor_Sound(stream = null, context = null) {
		this.$ctor_EventDispatcher();
		this.$length = 0;
		this.$url = "";
		if (this.constructor !== Sound) this.$length = linked$1(this.constructor)?.ms ?? NaN;
		if (stream) this.load(stream, context);
	}
	get length() {
		return this.$length;
	}
	get url() {
		return this.$url;
	}
	load(stream, context = null) {
		const url = stream.url;
		this.$url = url;
		player.later(() => {
			const bytes = readFile(url);
			if (!bytes) return this.dispatchEvent(ioError(url));
			this.$length = mp3LengthMs(bytes);
			this.dispatchEvent(new Event("complete"));
		});
	}
	loadCompressedDataFromByteArray(bytes, length) {
		this.$length = mp3LengthMs(bytes.$bytes.subarray(0, Math.min(length, bytes.length)));
	}
	close() {}
	play(startTime = 0, loops = 0, sndTransform = null) {
		const length = this.$length;
		if (startTime >= length) return null;
		const channel = new SoundChannel();
		Object.assign(channel, {
			$from: Math.max(startTime, 0),
			$len: length,
			$plays: Math.max(loops | 0, 1),
			$started: player.now,
			$volume: sndTransform ? sndTransform.volume : 1,
			$pan: sndTransform ? sndTransform.pan : 0
		});
		if (Number.isFinite(length)) {
			playing.push(channel);
			tickSoon();
		}
		return channel;
	}
};
function mp3LengthMs(b) {
	const RATES = [
		[
			44100,
			48e3,
			32e3
		],
		[
			22050,
			24e3,
			16e3
		],
		[
			11025,
			12e3,
			8e3
		]
	];
	const KBPS_V1 = [
		0,
		32,
		40,
		48,
		56,
		64,
		80,
		96,
		112,
		128,
		160,
		192,
		224,
		256,
		320,
		0
	];
	const KBPS_V2 = [
		0,
		8,
		16,
		24,
		32,
		40,
		48,
		56,
		64,
		80,
		96,
		112,
		128,
		144,
		160,
		0
	];
	let at = 0;
	if (b.length >= 10 && b[0] === 73 && b[1] === 68 && b[2] === 51) at = 10 + [
		6,
		7,
		8,
		9
	].reduce((n, i) => n * 128 + (b[i] & 127), 0);
	let ms = 0;
	let found = false;
	while (at + 4 <= b.length) {
		const h1 = b[at + 1];
		const h2 = b[at + 2];
		if (b[at] !== 255 || (h1 & 224) !== 224 || (h1 >> 1 & 3) !== 1) {
			at++;
			continue;
		}
		const version = {
			3: 0,
			2: 1,
			0: 2
		}[h1 >> 3 & 3];
		if (version === void 0) {
			at++;
			continue;
		}
		const bitrate = h2 >> 4;
		const rateIndex = h2 >> 2 & 3;
		const kbps = (version === 0 ? KBPS_V1 : KBPS_V2)[bitrate];
		if (kbps === 0 || rateIndex === 3) {
			at++;
			continue;
		}
		const rate = RATES[version][rateIndex];
		const samples = version === 0 ? 1152 : 576;
		ms += samples * 1e3 / rate;
		found = true;
		at += Math.floor(samples / 8 * kbps * 1e3 / rate) + (h2 >> 1 & 1);
	}
	return found ? ms : NaN;
}
let playing = [];
let ticking = false;
function tickSoon() {
	if (ticking) return;
	ticking = true;
	player.later(() => {
		ticking = false;
		const done = playing.filter((c) => c.$finished());
		playing = playing.filter((c) => !done.includes(c));
		if (playing.length) tickSoon();
		for (const c of done) {
			c.$stopped = c.$len;
			c.dispatchEvent(new Event("soundComplete"));
		}
	});
}
function resetChannels() {
	playing = [];
	ticking = false;
}
var SoundChannel = class extends EventDispatcher {
	$ctor_SoundChannel() {
		this.$ctor_EventDispatcher();
		Object.assign(this, {
			$from: 0,
			$len: 0,
			$plays: 1,
			$started: 0,
			$stopped: null,
			$volume: 1,
			$pan: 0
		});
	}
	get $span() {
		return this.$len - this.$from;
	}
	$finished() {
		return this.$stopped === null && player.now - this.$started >= this.$span * this.$plays;
	}
	get position() {
		if (this.$stopped !== null) return this.$stopped;
		const elapsed = player.now - this.$started;
		const span = this.$span;
		return Number.isFinite(span) && span > 0 ? this.$from + elapsed % span : this.$from + elapsed;
	}
	get soundTransform() {
		return new SoundTransform(this.$volume, this.$pan);
	}
	set soundTransform(t) {
		this.$volume = t.volume;
		this.$pan = t.pan;
	}
	stop() {
		this.$stopped = this.position;
		playing = playing.filter((c) => c !== this);
	}
};
var SoundTransform = class extends $O {
	$ctor_SoundTransform(vol = 1, panning = 0) {
		this.volume = vol;
		this.pan = panning;
	}
};
var SoundLoaderContext = class extends $O {
	$ctor_SoundLoaderContext(bufferTime = 1e3, checkPolicyFile = false) {
		this.bufferTime = bufferTime;
		this.checkPolicyFile = checkPolicyFile;
	}
};
var Camera = class extends EventDispatcher {};
//#endregion
//#region ../../as3c-wt/js/js/natives/flash.net.dns.mjs
var flash_net_dns_exports = /* @__PURE__ */ __exportAll({
	AAAARecord: () => AAAARecord,
	ARecord: () => ARecord,
	DNSResolver: () => DNSResolver,
	DNSResolverEvent: () => DNSResolverEvent,
	DatagramSocketDataEvent: () => DatagramSocketDataEvent,
	MXRecord: () => MXRecord,
	PTRRecord: () => PTRRecord,
	ResourceRecord: () => ResourceRecord,
	SRVRecord: () => SRVRecord
});
var DNSResolver = class extends EventDispatcher {
	$ctor_DNSResolver() {
		this.$ctor_EventDispatcher();
	}
	lookup(host, recordType) {
		player.later(() => this.dispatchEvent(new ErrorEvent("error", false, false, "Error #3003: DNS lookup failed.", 3003)));
	}
};
var ResourceRecord = class extends $O {};
var ARecord = class extends ResourceRecord {};
var AAAARecord = class extends ResourceRecord {};
var MXRecord = class extends ResourceRecord {};
var PTRRecord = class extends ResourceRecord {};
var SRVRecord = class extends ResourceRecord {};
var DNSResolverEvent = class extends Event {
	static LOOKUP = "lookup";
	static $fields = [["host"], ["resourceRecords"]];
	$ctor_DNSResolverEvent(type, bubbles = false, cancelable = false, host = "", resourceRecords = null) {
		this.$ctor_Event(type, bubbles, cancelable);
		this.$host = host;
		this.$resourceRecords = resourceRecords;
	}
	get host() {
		return this.$host;
	}
	get resourceRecords() {
		return this.$resourceRecords;
	}
};
var DatagramSocketDataEvent = class extends Event {
	static DATA = "data";
	static $fields = [
		["srcAddress"],
		["srcPort"],
		["dstAddress"],
		["dstPort"],
		["data"]
	];
	$ctor_DatagramSocketDataEvent(type, bubbles = false, cancelable = false, srcAddress = "", srcPort = 0, dstAddress = "", dstPort = 0, data = null) {
		this.$ctor_Event(type, bubbles, cancelable);
		this.$srcAddress = srcAddress;
		this.$srcPort = srcPort;
		this.$dstAddress = dstAddress;
		this.$dstPort = dstPort;
		this.$data = data;
	}
	get srcAddress() {
		return this.$srcAddress;
	}
	get srcPort() {
		return this.$srcPort;
	}
	get dstAddress() {
		return this.$dstAddress;
	}
	get dstPort() {
		return this.$dstPort;
	}
	get data() {
		return this.$data;
	}
};
//#endregion
//#region ../../as3c-wt/js/js/natives/flash.text.mjs
var flash_text_exports = /* @__PURE__ */ __exportAll({
	ADVANCE: () => ADVANCE,
	ASCENT: () => ASCENT,
	DESCENT: () => DESCENT,
	Font: () => Font,
	GUTTER: () => 2,
	StyleSheet: () => StyleSheet,
	TextField: () => TextField,
	TextFormat: () => TextFormat,
	TextLineMetrics: () => TextLineMetrics,
	breakLine: () => breakLine,
	isBreak: () => isBreak,
	isSpace: () => isSpace,
	metrics: () => metrics,
	registerEmbeddedFont: () => registerEmbeddedFont,
	stripHtml: () => stripHtml
});
const ASCENT = .905;
const DESCENT = .212;
const ADVANCE = .55;
function metrics(size, letterSpacing = 0, leading = 0, laid = null) {
	if (!laid) return {
		size,
		letterSpacing,
		leading,
		advance: () => size * ADVANCE + letterSpacing,
		ascent: size * ASCENT,
		descent: size * DESCENT
	};
	const twips = (em) => (size * em * 20 | 0) / 20;
	return {
		size,
		letterSpacing,
		leading,
		advance: (u) => twips(laid.advances.get(u) ?? 0) + letterSpacing,
		ascent: twips(laid.ascent),
		descent: twips(laid.descent)
	};
}
const span = (text, from, to, m) => {
	let w = 0;
	for (let i = from; i < to; i++) w += m.advance(text.charCodeAt(i));
	return w;
};
const isSpace = (u) => u === 32 || u === 9;
const isBreak = (u) => u === 13 || u === 10 || u === 8233;
function visibleWidth(text, from, to, m) {
	let end = to;
	while (end > from && (isSpace(text.charCodeAt(end - 1)) || isBreak(text.charCodeAt(end - 1)))) end--;
	return span(text, from, end, m);
}
function breakLine(text, from, width, m) {
	let lastSpace = -1;
	let w = 0;
	for (let at = from; at < text.length; at++) {
		const u = text.charCodeAt(at);
		w += m.advance(u);
		const fits = () => w <= width + 1e-9;
		if (isBreak(u)) return [u === 13 && text.charCodeAt(at + 1) === 10 ? at + 2 : at + 1, visibleWidth(text, from, at, m)];
		if (isSpace(u)) lastSpace = at;
		else if (!fits()) {
			const end = lastSpace >= 0 ? lastSpace + 1 : at === from ? at + 1 : at;
			let stop = end;
			while (stop < text.length && isSpace(text.charCodeAt(stop))) stop++;
			return [stop, visibleWidth(text, from, end, m)];
		}
	}
	return [text.length, visibleWidth(text, from, text.length, m)];
}
function layOut(text, wrap, width, m) {
	width = wrap ? Math.max(0, width) : Infinity;
	const lines = [];
	for (let at = 0;;) {
		const [end, w] = breakLine(text, at, width, m);
		lines.push({
			begin: at,
			length: end - at,
			width: w
		});
		if (end >= text.length) {
			if (end > at && isBreak(text.charCodeAt(end - 1))) lines.push({
				begin: end,
				length: 0,
				width: 0
			});
			return lines;
		}
		at = end;
	}
}
const orNull = (f) => (v) => v == null ? null : f(v);
const num = orNull(Number);
const uint = orNull((v) => Number(v) >>> 0);
const bool = orNull((v) => !!v);
const numberOr = (v, d) => v == null ? d : Number(v);
const COERCE = {
	size: num,
	color: uint,
	bold: bool,
	italic: bool,
	underline: bool,
	leftMargin: num,
	rightMargin: num,
	indent: num,
	leading: num,
	blockIndent: num,
	bullet: bool,
	kerning: bool,
	letterSpacing: num
};
var TextFormat = class extends $O {
	$ctor_TextFormat(font = null, size = null, color = null, bold = null, italic = null, underline = null, url = null, target = null, align = null, leftMargin = null, rightMargin = null, indent = null, leading = null) {
		for (const k of [
			"blockIndent",
			"bullet",
			"display",
			"kerning",
			"letterSpacing",
			"tabStops"
		]) this["$" + k] = null;
		Object.assign(this, {
			font,
			size,
			color,
			bold,
			italic,
			underline,
			url,
			target,
			align,
			leftMargin,
			rightMargin,
			indent,
			leading
		});
	}
	$mergeInto(onto) {
		for (const k of FORMAT_KEYS) if (this[k] != null) onto[k] = this[k];
	}
	$metricsOf(embedded) {
		const laid = embedded && this.font != null ? font(this.font, this.bold, this.italic) ?? font(this.font) : null;
		return metrics(numberOr(this.size, 12), numberOr(this.letterSpacing, 0), numberOr(this.leading, 0), laid);
	}
};
const FORMAT_KEYS = [
	"align",
	"blockIndent",
	"bold",
	"bullet",
	"color",
	"display",
	"font",
	"indent",
	"italic",
	"kerning",
	"leading",
	"leftMargin",
	"letterSpacing",
	"rightMargin",
	"size",
	"tabStops",
	"target",
	"underline",
	"url"
];
for (const k of FORMAT_KEYS) {
	const c = COERCE[k];
	Object.defineProperty(TextFormat.prototype, k, {
		get() {
			return this["$" + k] ?? null;
		},
		set(v) {
			this["$" + k] = c ? c(v) : v ?? null;
		}
	});
}
function fieldDefault() {
	const f = new TextFormat("Times New Roman", 12, 0, false, false, false, "", "", "left", 0, 0, 0, 0);
	Object.assign(f, {
		blockIndent: 0,
		bullet: false,
		display: "block",
		kerning: false,
		letterSpacing: 0,
		tabStops: []
	});
	return f;
}
var TextLineMetrics = class extends $O {
	$ctor_TextLineMetrics(x, width, height, ascent, descent, leading) {
		Object.assign(this, {
			x,
			width,
			height,
			ascent,
			descent,
			leading
		});
	}
};
var StyleSheet = class extends EventDispatcher {
	$ctor_StyleSheet() {
		this.$ctor_EventDispatcher(null);
	}
};
const accepted = (v, ok, name) => {
	if (!ok.includes(v)) throw raise(ArgumentError, 2008, `Parameter ${name} must be one of the accepted values.`);
};
const html = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const breaks = (s) => String(s ?? "").replace(/\r\n/g, "\r").replace(/\n/g, "\r");
function stripHtml(source) {
	let out = source.replace(/<\s*(\/?)\s*([a-zA-Z]*)[^>]*>/g, (_, close, name) => {
		name = name.toLowerCase();
		return name === "br" || close && (name === "p" || name === "li") ? "\r" : "";
	});
	if (out.endsWith("\r") && /<\/p>\s*$/i.test(source)) out = out.slice(0, -1);
	return out.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, "\"").replace(/&apos;/g, "'").replace(/&nbsp;/g, "\xA0").replace(/&amp;/g, "&");
}
var TextField = class extends InteractiveObject {
	$ctor_TextField() {
		this.$ctor_InteractiveObject();
		Object.assign(this, {
			$text: "",
			$html: null,
			$format: fieldDefault(),
			$fw: 100,
			$fh: 100,
			$autoSize: "none",
			$type: "dynamic",
			$wordWrap: false,
			$scrollV: 1,
			$scrollH: 0,
			$selBegin: 0,
			$selEnd: 0,
			styleSheet: null,
			multiline: false,
			selectable: true,
			embedFonts: false,
			displayAsPassword: false,
			$maxChars: 0,
			restrict: null,
			antiAliasType: "normal",
			gridFitType: "pixel",
			$sharpness: 0,
			$thickness: 0,
			background: false,
			$backgroundColor: 16777215,
			border: false,
			$borderColor: 0,
			condenseWhite: false,
			alwaysShowSelection: false,
			mouseWheelEnabled: true
		});
	}
	get $metrics() {
		return this.$format.$metricsOf(this.embedFonts);
	}
	get $lines() {
		return layOut(this.$text, this.$wordWrap, this.$fw - 4, this.$metrics);
	}
	$lineHeight(m) {
		return m.ascent + m.descent + m.leading;
	}
	$fit() {
		if (this.$autoSize === "none") return;
		if (!this.$wordWrap) this.$fw = this.textWidth + 4;
		this.$fh = this.textHeight + 4;
	}
	$setText(t) {
		this.$text = t;
		this.$selBegin = Math.min(this.$selBegin, t.length);
		this.$selEnd = Math.min(this.$selEnd, t.length);
		this.$fit();
	}
	get $bounds() {
		return [
			0,
			0,
			this.$fw,
			this.$fh
		];
	}
	$ownExtent(m) {
		return [
			[0, 0],
			[this.$fw, 0],
			[0, this.$fh],
			[this.$fw, this.$fh]
		].map(([x, y]) => [m[0] * x + m[2] * y + m[4], m[1] * x + m[3] * y + m[5]]).reduce((b, [x, y]) => [
			Math.min(b[0], x),
			Math.min(b[1], y),
			Math.max(b[2], x),
			Math.max(b[3], y)
		], [
			Infinity,
			Infinity,
			-Infinity,
			-Infinity
		]);
	}
	get text() {
		return this.$text;
	}
	set text(v) {
		this.$html = null;
		this.$setText(breaks(v));
	}
	get htmlText() {
		return this.$html ?? html(this.$text);
	}
	set htmlText(v) {
		v = String(v ?? "");
		this.$setText(stripHtml(v));
		this.$html = v;
	}
	get length() {
		return this.$text.length;
	}
	get width() {
		return super.width;
	}
	set width(v) {
		this.$fw = Math.max(0, v);
		this.$fit();
	}
	get height() {
		return super.height;
	}
	set height(v) {
		this.$fh = Math.max(0, v);
		this.$fit();
	}
	get textWidth() {
		return this.$text ? Math.max(0, ...this.$lines.map((l) => l.width)) : 0;
	}
	get textHeight() {
		if (!this.$text) return 0;
		const m = this.$metrics;
		return this.$lines.length * this.$lineHeight(m) - m.leading;
	}
	get numLines() {
		return this.$lines.length;
	}
	get maxScrollV() {
		const m = this.$metrics;
		const visible = Math.max(1, Math.floor((this.$fh - 4) / this.$lineHeight(m)));
		return Math.max(1, this.$lines.length - visible + 1);
	}
	get scrollV() {
		return this.$scrollV;
	}
	set scrollV(v) {
		this.$scrollV = Math.min(Math.max(v | 0, 1), this.maxScrollV);
	}
	get scrollH() {
		return this.$scrollH;
	}
	set scrollH(v) {
		this.$scrollH = Math.max(v | 0, 0);
	}
	get defaultTextFormat() {
		const f = new TextFormat();
		this.$format.$mergeInto(f);
		return f;
	}
	set defaultTextFormat(f) {
		if (f == null) throw raise(TypeError, 2007, "Parameter format must be non-null.");
		f.$mergeInto(this.$format);
		this.$fit();
	}
	getTextFormat() {
		return this.defaultTextFormat;
	}
	setTextFormat(f) {
		this.defaultTextFormat = f;
	}
	get autoSize() {
		return this.$autoSize;
	}
	set autoSize(v) {
		accepted(v, [
			"none",
			"left",
			"center",
			"right"
		], "autoSize");
		this.$autoSize = v;
		this.$fit();
	}
	get type() {
		return this.$type;
	}
	set type(v) {
		accepted(v, ["dynamic", "input"], "type");
		this.$type = v;
	}
	get wordWrap() {
		return this.$wordWrap;
	}
	set wordWrap(v) {
		this.$wordWrap = !!v;
		this.$fit();
	}
	get textColor() {
		return numberOr(this.$format.color, 0);
	}
	set textColor(v) {
		this.$format.color = v >>> 0;
	}
	get maxChars() {
		return this.$maxChars;
	}
	set maxChars(v) {
		this.$maxChars = v | 0;
	}
	get sharpness() {
		return this.$sharpness;
	}
	set sharpness(v) {
		this.$sharpness = Math.min(Math.max(v, -400), 400);
	}
	get thickness() {
		return this.$thickness;
	}
	set thickness(v) {
		this.$thickness = Math.min(Math.max(v, -200), 200);
	}
	get backgroundColor() {
		return this.$backgroundColor;
	}
	set backgroundColor(v) {
		this.$backgroundColor = v >>> 0;
	}
	get borderColor() {
		return this.$borderColor;
	}
	set borderColor(v) {
		this.$borderColor = v >>> 0;
	}
	get selectionBeginIndex() {
		return this.$selBegin;
	}
	get selectionEndIndex() {
		return this.$selEnd;
	}
	get caretIndex() {
		return this.$selEnd;
	}
	setSelection(b, e) {
		const c = (v) => Math.min(Math.max(v | 0, 0), this.$text.length);
		[b, e] = [c(b), c(e)];
		this.$selBegin = Math.min(b, e);
		this.$selEnd = Math.max(b, e);
	}
	appendText(t) {
		this.$html = null;
		this.$setText(this.$text + breaks(t));
	}
	replaceText(b, e, t) {
		const n = this.$text.length;
		b = Math.min(Math.max(b | 0, 0), n);
		e = Math.max(Math.min(Math.max(e | 0, 0), n), b);
		this.$html = null;
		this.$setText(this.$text.slice(0, b) + t + this.$text.slice(e));
	}
	$line(i) {
		const lines = this.$lines;
		i |= 0;
		if (i < 0 || i >= lines.length) throw raise(RangeError, 2006, "The supplied index is out of bounds.");
		return lines[i];
	}
	$lineX(line) {
		const room = this.$fw - 4;
		const a = this.$format.align;
		return 2 + (a === "center" ? Math.max(0, (room - line.width) / 2) : a === "right" || a === "end" ? Math.max(0, room - line.width) : 0);
	}
	getLineMetrics(i) {
		const line = this.$line(i);
		const m = this.$metrics;
		return new TextLineMetrics(this.$lineX(line), line.width, this.$lineHeight(m), m.ascent, m.descent, m.leading);
	}
	getLineLength(i) {
		return this.$line(i).length;
	}
	getLineOffset(i) {
		return this.$line(i).begin;
	}
	getLineText(i) {
		const l = this.$line(i);
		return this.$text.substr(l.begin, l.length);
	}
	getLineIndexAtPoint(x, y) {
		if (x < 2 || x > this.$fw - 2 || y < 2) return -1;
		const row = Math.floor((y - 2) / this.$lineHeight(this.$metrics)) + this.$scrollV - 1;
		return row < this.$lines.length ? row : -1;
	}
	getLineIndexOfChar(i) {
		i |= 0;
		if (i < 0 || i >= this.$text.length) return -1;
		return this.$lines.findIndex((l) => i >= l.begin && i < l.begin + l.length);
	}
	getCharIndexAtPoint(x, y) {
		const row = this.getLineIndexAtPoint(x, y);
		if (row < 0) return -1;
		const line = this.$line(row);
		const m = this.$metrics;
		let at = x - this.$lineX(line) + this.$scrollH;
		if (at < 0) return -1;
		for (let i = line.begin; i < line.begin + line.length; i++) if ((at -= m.advance(this.$text.charCodeAt(i))) < 0) return i;
		return -1;
	}
	getCharBoundaries(i) {
		const row = this.getLineIndexOfChar(i);
		if (row < 0) return null;
		const line = this.$line(row);
		const m = this.$metrics;
		return new Rectangle(this.$lineX(line) + span(this.$text, line.begin, i | 0, m) - this.$scrollH, 2 + (row - (this.$scrollV - 1)) * this.$lineHeight(m), m.advance(this.$text.charCodeAt(i | 0)), m.ascent + m.descent);
	}
};
const fonts = [];
function registerEmbeddedFont(cls, fontName, fontStyle, fontType) {
	const at = fonts.findIndex((f) => f.cls === cls);
	if (at >= 0) fonts.splice(at, 1);
	fonts.push({
		cls,
		fontName,
		fontStyle,
		fontType
	});
}
var Font = class Font extends $O {
	$ctor_Font() {
		const cls = (this.constructor.$qname ?? this.constructor.name).replace("::", ".");
		const f = fonts.find((one) => one.cls === cls);
		this.$fill(f);
	}
	$fill(f) {
		this.$name = f?.fontName ?? null;
		this.$style = f?.fontStyle ?? null;
		this.$kind = f?.fontType ?? null;
	}
	get fontName() {
		return this.$name;
	}
	get fontStyle() {
		return this.$style;
	}
	get fontType() {
		return this.$kind;
	}
	static enumerateFonts() {
		const style = (f) => f.bold ? f.italic ? "boldItalic" : "bold" : f.italic ? "italic" : "regular";
		return [...fonts$1().map((f) => ({
			fontName: f.name,
			fontStyle: style(f),
			fontType: f.cff ? "embeddedCFF" : "embedded"
		})), ...fonts].map((f) => {
			const one = Object.create(Font.prototype);
			one.$fill(f);
			return one;
		});
	}
};
//#endregion
//#region ../../as3c-wt/js/js/natives/flash.text.engine.mjs
var flash_text_engine_exports = /* @__PURE__ */ __exportAll({
	CompositionAttributeRange: () => CompositionAttributeRange,
	ContentElement: () => ContentElement,
	ElementFormat: () => ElementFormat,
	FontDescription: () => FontDescription,
	SpaceJustifier: () => SpaceJustifier,
	TabStop: () => TabStop,
	TextBlock: () => TextBlock,
	TextElement: () => TextElement,
	TextJustifier: () => TextJustifier,
	TextLine: () => TextLine
});
var FontDescription = class FontDescription extends $O {
	$ctor_FontDescription(fontName = "_serif", fontWeight = "normal", fontPosture = "normal", fontLookup = "device", renderingMode = "cff", cffHinting = "horizontalStem") {
		Object.assign(this, {
			fontName,
			fontWeight,
			fontPosture,
			fontLookup,
			renderingMode,
			cffHinting,
			locked: false
		});
	}
	clone() {
		return Object.assign(Object.create(FontDescription.prototype), this, { locked: false });
	}
};
var ElementFormat = class ElementFormat extends $O {
	$ctor_ElementFormat(fontDescription = null, fontSize = 12, color = 0, alpha = 1, textRotation = "auto", dominantBaseline = "roman", alignmentBaseline = "useDominantBaseline", baselineShift = 0, kerning = "on", trackingRight = 0, trackingLeft = 0, locale = "en", breakOpportunity = "auto", digitCase = "default", digitWidth = "default", ligatureLevel = "common", typographicCase = "default") {
		Object.assign(this, {
			fontDescription: fontDescription ?? new FontDescription(),
			fontSize,
			color: color >>> 0,
			alpha,
			textRotation,
			dominantBaseline,
			alignmentBaseline,
			baselineShift,
			kerning,
			trackingRight,
			trackingLeft,
			locale,
			breakOpportunity,
			digitCase,
			digitWidth,
			ligatureLevel,
			typographicCase,
			locked: false
		});
	}
	clone() {
		return Object.assign(Object.create(ElementFormat.prototype), this, { locked: false });
	}
};
const formatMetrics = (f) => f ? metrics(f.fontSize, f.trackingLeft + f.trackingRight) : metrics(12);
var ContentElement = class extends $O {
	$ctor_ContentElement(elementFormat = null) {
		this.elementFormat = elementFormat;
		this.userData = void 0;
		this.$text = null;
		this.$block = null;
	}
	get text() {
		return this.$text;
	}
	get rawText() {
		return this.$text;
	}
	get textBlock() {
		return this.$block;
	}
};
var TextElement = class extends ContentElement {
	$ctor_TextElement(text = null, elementFormat = null) {
		this.$ctor_ContentElement(elementFormat);
		this.$text = text;
	}
	get text() {
		return this.$text;
	}
	set text(v) {
		this.$text = v ?? null;
	}
};
var TextJustifier = class TextJustifier extends $O {
	$ctor_TextJustifier(locale, lineJustification) {
		if (this.constructor === TextJustifier) throw raise(ArgumentError, 2012, "TextJustifier class cannot be instantiated.");
		this.$locale = locale;
		this.lineJustification = lineJustification;
	}
	get locale() {
		return this.$locale;
	}
};
var SpaceJustifier = class extends TextJustifier {
	$ctor_SpaceJustifier(locale = "en", lineJustification = "unjustified", letterSpacing = false) {
		this.$locale = locale;
		this.lineJustification = lineJustification;
		this.letterSpacing = !!letterSpacing;
	}
};
var TabStop = class extends $O {
	$ctor_TabStop(alignment = "start", position = 0, decimalAlignmentToken = "") {
		Object.assign(this, {
			alignment,
			position,
			decimalAlignmentToken
		});
	}
};
var TextBlock = class extends $O {
	$ctor_TextBlock(content = null, tabStops = null, textJustifier = null, lineRotation = "rotate0", baselineZero = "roman", bidiLevel = 0, applyNonLinearFontScaling = true, baselineFontDescription = null, baselineFontSize = 12) {
		Object.assign(this, {
			tabStops,
			textJustifier,
			lineRotation,
			baselineZero,
			bidiLevel,
			applyNonLinearFontScaling,
			baselineFontDescription,
			baselineFontSize,
			userData: void 0,
			$first: null,
			$last: null,
			$content: null
		});
		this.content = content;
	}
	get content() {
		return this.$content;
	}
	set content(v) {
		if (v) v.$block = this;
		this.$content = v;
		this.$first = null;
		this.$last = null;
	}
	get firstLine() {
		return this.$first;
	}
	get lastLine() {
		return this.$last;
	}
	createTextLine(previous = null, width = 1e6, lineOffset = 0, fitSomething = false) {
		return this.$makeLine(null, previous, width, fitSomething);
	}
	recreateTextLine(line, previous = null, width = 1e6, lineOffset = 0, fitSomething = false) {
		if (line == null) throw raise(TypeError, 2007, "Parameter textLine must be non-null.");
		return this.$makeLine(line, previous, width, fitSomething);
	}
	$makeLine(reuse, previous, width, fitSomething) {
		if (!(width >= 0 && width <= 1e6)) throw raise(ArgumentError, 2004, "One of the parameters is invalid.");
		const content = this.$content;
		if (!content) return null;
		const text = content.$text ?? "";
		const begin = previous ? previous.$begin + previous.$length : 0;
		if (begin >= text.length) return null;
		const m = formatMetrics(content.elementFormat);
		const [end, measured] = breakLine(text, begin, width, m);
		let spaced = false;
		for (let i = begin; i < end; i++) if (isSpace(text.charCodeAt(i))) spaced = true;
		if (!(measured <= width + 1e-9 || spaced) && !fitSomething) return null;
		const line = reuse ?? TextLine.$make();
		Object.assign(line, {
			$block: this,
			$begin: begin,
			$length: end - begin,
			$width: measured,
			$size: m.size,
			$advance: m.advance(0),
			$previous: previous,
			$next: null
		});
		if (previous) previous.$next = line;
		if (!previous) this.$first = line;
		this.$last = line;
		return line;
	}
};
var TextLine = class TextLine extends DisplayObjectContainer {
	$ctor_TextLine() {
		throw raise(ArgumentError, 2012, "TextLine class cannot be instantiated.");
	}
	static $make() {
		const line = Object.create(TextLine.prototype);
		line.$ctor_DisplayObjectContainer();
		line.userData = void 0;
		return line;
	}
	get $bounds() {
		return [
			0,
			-this.$size * ASCENT,
			this.$width,
			this.$size * 1.117
		];
	}
	$ownExtent(m) {
		const [bx, by, bw, bh] = this.$bounds;
		return [
			[bx, by],
			[bx + bw, by],
			[bx, by + bh],
			[bx + bw, by + bh]
		].map(([x, y]) => [m[0] * x + m[2] * y + m[4], m[1] * x + m[3] * y + m[5]]).reduce((b, [x, y]) => [
			Math.min(b[0], x),
			Math.min(b[1], y),
			Math.max(b[2], x),
			Math.max(b[3], y)
		], [
			Infinity,
			Infinity,
			-Infinity,
			-Infinity
		]);
	}
	get ascent() {
		return this.$size * ASCENT;
	}
	get descent() {
		return this.$size * DESCENT;
	}
	get totalAscent() {
		return this.ascent;
	}
	get totalDescent() {
		return this.descent;
	}
	get totalHeight() {
		return this.ascent + this.descent;
	}
	get textWidth() {
		return this.$width;
	}
	get textHeight() {
		return this.totalHeight;
	}
	get unjustifiedTextWidth() {
		return this.$width;
	}
	get rawTextLength() {
		return this.$length;
	}
	get textBlockBeginIndex() {
		return this.$begin;
	}
	get atomCount() {
		return this.$length;
	}
	get textBlock() {
		return this.$block;
	}
	get previousLine() {
		return this.$previous;
	}
	get nextLine() {
		return this.$next;
	}
	get validity() {
		return "valid";
	}
	$atom(i) {
		i |= 0;
		if (i < 0 || i >= this.$length) throw raise(RangeError, 2006, "The supplied index is out of bounds.");
		return i;
	}
	getAtomBounds(i) {
		return new Rectangle(this.$atom(i) * this.$advance, -this.$size * ASCENT, this.$advance, this.$size * 1.117);
	}
	getAtomIndexAtCharIndex(i) {
		const at = (i | 0) - this.$begin;
		return at < 0 || at >= this.$length ? -1 : at;
	}
	getAtomIndexAtPoint(x, y) {
		if (y < -this.$size * .905 || y > this.$size * .212 || x < 0 || this.$advance <= 0) return -1;
		const at = Math.floor(x / this.$advance);
		return at >= this.$length ? -1 : at;
	}
	getAtomTextBlockBeginIndex(i) {
		return this.$begin + this.$atom(i);
	}
	getAtomTextBlockEndIndex(i) {
		return this.$begin + this.$atom(i) + 1;
	}
	getBaselinePosition(baseline) {
		const s = this.$size;
		switch (baseline) {
			case "roman": return 0;
			case "ascent":
			case "ideographicTop": return -s * ASCENT;
			case "descent":
			case "ideographicBottom": return s * DESCENT;
			case "ideographicCenter": return s * -.6930000000000001 / 2;
			default: throw raise(ArgumentError, 2008, "Parameter baseline must be one of the accepted values.");
		}
	}
};
var CompositionAttributeRange = class extends $O {
	$ctor_CompositionAttributeRange(relativeStart, relativeEnd, selected, converted) {
		Object.assign(this, {
			relativeStart: relativeStart | 0,
			relativeEnd: relativeEnd | 0,
			selected: !!selected,
			converted: !!converted
		});
	}
};
//#endregion
//#region ../../as3c-wt/js/js/natives/flash.ui.gameinput.mjs
var flash_ui_gameinput_exports = /* @__PURE__ */ __exportAll({
	GameInput: () => GameInput,
	GameInputControl: () => GameInputControl,
	GameInputDevice: () => GameInputDevice,
	GameInputEvent: () => GameInputEvent
});
var GameInput = class extends EventDispatcher {
	$ctor_GameInput() {
		this.$ctor_EventDispatcher();
	}
	static get isSupported() {
		return true;
	}
	static get numDevices() {
		return 0;
	}
	static getDeviceAt(index) {
		throw raise(RangeError, 2006, `The supplied index ${index} is out of bounds.`);
	}
};
var GameInputDevice = class extends $O {};
var GameInputControl = class extends EventDispatcher {};
var GameInputEvent = class extends Event {
	static DEVICE_ADDED = "deviceAdded";
	static DEVICE_REMOVED = "deviceRemoved";
	static DEVICE_UNUSABLE = "deviceUnusable";
	static $fields = [["device"]];
	$ctor_GameInputEvent(type, bubbles = false, cancelable = false, device = null) {
		this.$ctor_Event(type, bubbles, cancelable);
		this.$device = device;
	}
	get device() {
		return this.$device;
	}
};
//#endregion
//#region ../../as3c-wt/js/js/natives/flash.ui.mjs
var flash_ui_exports = /* @__PURE__ */ __exportAll({
	ContextMenu: () => ContextMenu,
	Keyboard: () => Keyboard,
	Mouse: () => Mouse,
	Multitouch: () => Multitouch,
	MultitouchInputMode: () => MultitouchInputMode
});
var Keyboard = class extends $O {};
let cursor = "auto";
var Mouse = class Mouse extends $O {
	static supportsCursor = true;
	static supportsNativeCursor = true;
	static $hidden = false;
	static get cursor() {
		return cursor;
	}
	static set cursor(v) {
		if (!v) throw raise(ArgumentError, 2008, "Parameter cursor must be one of the accepted values.");
		cursor = v;
	}
	static hide() {
		Mouse.$hidden = true;
	}
	static show() {
		Mouse.$hidden = false;
	}
};
let inputMode = "gesture";
var Multitouch = class extends $O {
	static maxTouchPoints = 0;
	static supportsTouchEvents = false;
	static supportsGestureEvents = false;
	static get inputMode() {
		return inputMode;
	}
	static set inputMode(v) {
		if (![
			"gesture",
			"none",
			"touchPoint"
		].includes(v)) throw raise(ArgumentError, 2008, "Parameter inputMode must be one of the accepted values.");
		inputMode = v;
	}
};
var MultitouchInputMode = class extends $O {};
var ContextMenu = class extends $O {
	$ctor_ContextMenu() {
		this.$builtInHidden = false;
	}
	hideBuiltInItems() {
		this.$builtInHidden = true;
	}
};
//#endregion
//#region ../../as3c-wt/js/js/runtime.mjs
const $natives = {
	"flash.desktop.mjs": flash_desktop_exports,
	"flash.display.mjs": flash_display_exports,
	"flash.display3D.mjs": flash_display3D_exports,
	"flash.events.mjs": flash_events_exports,
	"flash.filesystem.mjs": flash_filesystem_exports,
	"flash.filters.mjs": flash_filters_exports,
	"flash.geom.mjs": flash_geom_exports,
	"flash.globalization.mjs": flash_globalization_exports,
	"flash.media.mjs": flash_media_exports,
	"flash.net.dns.mjs": flash_net_dns_exports,
	"flash.net.mjs": flash_net_exports,
	"flash.system.mjs": flash_system_exports,
	"flash.text.engine.mjs": flash_text_engine_exports,
	"flash.text.mjs": flash_text_exports,
	"flash.ui.gameinput.mjs": flash_ui_gameinput_exports,
	"flash.ui.mjs": flash_ui_exports,
	"flash.utils.mjs": flash_utils_exports,
	"top.mjs": top_exports,
	"top.xml.mjs": top_xml_exports
};
for (const k of [
	"abs",
	"acos",
	"asin",
	"atan",
	"atan2",
	"ceil",
	"cos",
	"exp",
	"floor",
	"log",
	"max",
	"min",
	"pow",
	"random",
	"round",
	"sin",
	"sqrt",
	"tan"
]) Object.defineProperty(Number, k, {
	value: (...a) => Math[k](...a),
	writable: true,
	configurable: true
});
for (const k of [
	"E",
	"LN10",
	"LN2",
	"LOG10E",
	"LOG2E",
	"PI",
	"SQRT1_2",
	"SQRT2"
]) Object.defineProperty(Number, k, { value: Math[k] });
function $is(v, T) {
	if (v == null) return false;
	if (T === int$1) return typeof v === "number" && (v | 0) === v;
	if (T === uint$2) return typeof v === "number" && v >>> 0 === v;
	if (T === Number) return typeof v === "number";
	if (T === String) return typeof v === "string";
	if (T === Boolean) return typeof v === "boolean";
	if (T === Object) return true;
	if (T === linked.get("Class")) return typeof v === "function";
	if (T && T.$iface) return !!(v.constructor && v.constructor.$impl && v.constructor.$impl.has(T.name));
	return typeof T === "function" && v instanceof T;
}
function $str(v) {
	return typeof v === "string" || v == null ? v ?? null : String(v);
}
function $as(v, T) {
	return $is(v, T) ? v : null;
}
function $cast(v, T) {
	if (v == null || $is(v, T)) return v;
	if (!T || T.prototype === void 0) return v;
	throw new TypeError(`Type Coercion failed: cannot convert ${v} to ${T.name}`);
}
function $ix(o, k) {
	return o instanceof Map ? o.get(k) : o.$get ? o.$get(k) : o[k];
}
function $sx(o, k, v) {
	if (o instanceof Map) o.set(k, v);
	else if (o.$set) o.$set(k, v);
	else o[k] = v;
	return v;
}
function $re(source) {
	const space = "\\t\\n\\x0B\\f\\r ";
	const notSpace = "\\0-\\x08\\x0E-\\x1F\\x21-\\uFFFF";
	let inClass = false;
	return String(source).replace(/\\[\s\S]|[[\]]/g, (t) => {
		if (t === "[") {
			inClass = true;
			return t;
		}
		if (t === "]") {
			inClass = false;
			return t;
		}
		if (t === "\\s") return inClass ? space : `[${space}]`;
		if (t === "\\S") return inClass ? notSpace : `[^${space}]`;
		return t;
	});
}
function $caught(e) {}
function $mcall(o, k, ...a) {
	return $ix(o, k).apply(o, a);
}
function $del(o, k) {
	return o instanceof Map ? o.delete(k) : delete o[k];
}
function $in(k, o) {
	return o instanceof Map ? o.has(k) : k in o;
}
function $keys(o) {
	if (o == null) return [];
	if (o instanceof Map) return o.keys();
	if (Array.isArray(o)) return o.keys();
	return Object.keys(o);
}
function $vals(o) {
	if (o == null) return [];
	if (o instanceof Map) return o.values();
	if (Array.isArray(o)) return o;
	return Object.values(o);
}
function $bind(o, k) {
	const held = o.$bound ??= /* @__PURE__ */ new Map();
	let f = held.get(k);
	if (!f) held.set(k, f = o[k].bind(o));
	return f;
}
function $vec(n, fill) {
	return new Array(n | 0).fill(fill);
}
function $lazy(C, defaults) {
	const names = Object.keys(defaults);
	const run = () => {
		for (const n of names) Object.defineProperty(C, n, {
			value: defaults[n],
			writable: true,
			configurable: true,
			enumerable: true
		});
		C.$clinit();
	};
	for (const n of names) Object.defineProperty(C, n, {
		configurable: true,
		get() {
			run();
			return C[n];
		},
		set(v) {
			run();
			C[n] = v;
		}
	});
}
const natives = {};
for (const f of [
	"flash.desktop.mjs",
	"flash.display.mjs",
	"flash.display3D.mjs",
	"flash.events.mjs",
	"flash.filesystem.mjs",
	"flash.filters.mjs",
	"flash.geom.mjs",
	"flash.globalization.mjs",
	"flash.media.mjs",
	"flash.net.dns.mjs",
	"flash.net.mjs",
	"flash.system.mjs",
	"flash.text.engine.mjs",
	"flash.text.mjs",
	"flash.ui.gameinput.mjs",
	"flash.ui.mjs",
	"flash.utils.mjs",
	"top.mjs",
	"top.xml.mjs"
].filter((f) => /^(flash|top)(\..*)?\.mjs$/.test(f)).sort()) {
	const m = $natives[f];
	for (const [name, v] of Object.entries(m)) {
		if (name in natives && natives[name] !== v) throw new Error(`natives: ${name} is exported by two modules, the second ${f}`);
		natives[name] = v;
	}
}
function missing(name) {
	throw new Error(`missing native: ${name}`);
}
const linked = /* @__PURE__ */ new Map();
function $native(name) {
	if (linked.has(name)) return linked.get(name);
	const d = classes.get(name);
	let v = natives[name];
	if (d) v = complete(name, d, v);
	else if (v === void 0) {
		const qualified = functions.has(name) ? `${functions.get(name)}.${name}` : name;
		v = functions.has(name) ? (...a) => missing(qualified) : new Proxy(function() {}, {
			get(t, p) {
				if (p === Symbol.toPrimitive || p === "prototype") return void 0;
				return missing(`${qualified}.${String(p)}`);
			},
			apply() {
				return missing(qualified);
			},
			construct() {
				return missing(qualified);
			}
		});
	}
	linked.set(name, v);
	return v;
}
function complete(name, d, C) {
	const q = (d.package ? d.package + "." : "") + name;
	if (!C) {
		const Parent = d.extends ? $native(d.extends) : $O;
		C = { [name]: class extends Parent {} }[name];
		C.prototype["$ctor_" + name] = function() {
			missing(q);
		};
		if (d.interface) C.$iface = true;
	}
	const throwing = (target, member, kind, where) => {
		if (member in target) return;
		const full = `${q}.${member}`;
		if (kind === "method") Object.defineProperty(target, member, {
			configurable: true,
			writable: true,
			value() {
				return missing(full);
			}
		});
		else Object.defineProperty(target, member, {
			configurable: true,
			get() {
				return missing(full);
			},
			set(v) {
				Object.defineProperty(this, member, {
					value: v,
					writable: true,
					configurable: true,
					enumerable: true
				});
			}
		});
	};
	for (const [m, kind] of d.statics) if (m in d.consts && !(m in C)) C[m] = d.consts[m];
	else throwing(C, m, kind);
	for (const [m, kind] of d.members) if (kind !== "var") throwing(C.prototype, m, kind);
	return C;
}
for (const name of classes.keys()) $native(name);
const declaredAnywhere = new Set([...classes.values()].flatMap((d) => [...d.members.keys(), ...d.statics.keys()]));
const dynamicNatives = new Set([...classes.values()].filter((d) => d.dynamic).map((d) => d.name));
const guard = new Proxy(Object.create($O.prototype), { get(t, p, receiver) {
	if (typeof p === "symbol" || p.startsWith("$") || p === "then" || p === "toJSON" || p in t || declaredAnywhere.has(p)) return Reflect.get(t, p, receiver);
	const C = receiver?.constructor;
	if (!C || C.$qname || dynamicNatives.has(C.name) || C.prototype instanceof Map) return void 0;
	const d = classes.get(C.name);
	throw new TypeError(`undeclared native member: ${d ? d.package + "." : ""}${C.name}.${p}`);
} });
for (const name of classes.keys()) {
	const C = linked.get(name);
	if (typeof C === "function" && C.prototype && Object.getPrototypeOf(C.prototype) === $O.prototype) Object.setPrototypeOf(C.prototype, guard);
}
//#endregion
export { $O as C, player as S, uint$2 as T, $vec as _, $del as a, os_default as b, $ix as c, $mcall as d, $native as f, $vals as g, $sx as h, $caught as i, $keys as l, $str as m, $bind as n, $in as o, $re as p, $cast as r, $is as s, $as as t, $lazy as u, setDirectories as v, int$1 as w, path_default as x, fileURLToPath as y };
