var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// <define:process.env.UNI_STAT_TITLE_JSON>
var init_define_process_env_UNI_STAT_TITLE_JSON = __esm({
  "<define:process.env.UNI_STAT_TITLE_JSON>"() {
  }
});

// F:/前端知识点补充/基于vue3的uniapp聊天应用/I-Chat-Client/node_modules/@hyoga/uni-socket.io/dist/uni-socket.io.js
var require_uni_socket_io = __commonJS({
  "F:/\u524D\u7AEF\u77E5\u8BC6\u70B9\u8865\u5145/\u57FA\u4E8Evue3\u7684uniapp\u804A\u5929\u5E94\u7528/I-Chat-Client/node_modules/@hyoga/uni-socket.io/dist/uni-socket.io.js"(exports, module) {
    init_define_process_env_UNI_STAT_TITLE_JSON();
    !function(t, e) {
      if (typeof exports == "object" && typeof module == "object")
        module.exports = e();
      else if (typeof define == "function" && define.amd)
        define([], e);
      else {
        var n = e();
        for (var r in n)
          (typeof exports == "object" ? exports : t)[r] = n[r];
      }
    }(window, function() {
      return function(t) {
        var e = {};
        function n(r) {
          if (e[r])
            return e[r].exports;
          var o = e[r] = { i: r, l: false, exports: {} };
          return t[r].call(o.exports, o, o.exports, n), o.l = true, o.exports;
        }
        return n.m = t, n.c = e, n.d = function(t2, e2, r) {
          n.o(t2, e2) || Object.defineProperty(t2, e2, { enumerable: true, get: r });
        }, n.r = function(t2) {
          typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
        }, n.t = function(t2, e2) {
          if (1 & e2 && (t2 = n(t2)), 8 & e2)
            return t2;
          if (4 & e2 && typeof t2 == "object" && t2 && t2.__esModule)
            return t2;
          var r = /* @__PURE__ */ Object.create(null);
          if (n.r(r), Object.defineProperty(r, "default", { enumerable: true, value: t2 }), 2 & e2 && typeof t2 != "string")
            for (var o in t2)
              n.d(r, o, function(e3) {
                return t2[e3];
              }.bind(null, o));
          return r;
        }, n.n = function(t2) {
          var e2 = t2 && t2.__esModule ? function() {
            return t2.default;
          } : function() {
            return t2;
          };
          return n.d(e2, "a", e2), e2;
        }, n.o = function(t2, e2) {
          return Object.prototype.hasOwnProperty.call(t2, e2);
        }, n.p = "", n(n.s = 18);
      }([function(t, e) {
        t.exports = function() {
          return function() {
          };
        };
      }, function(t, e, n) {
        function r(t2) {
          if (t2)
            return function(t3) {
              for (var e2 in r.prototype)
                t3[e2] = r.prototype[e2];
              return t3;
            }(t2);
        }
        t.exports = r, r.prototype.on = r.prototype.addEventListener = function(t2, e2) {
          return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t2] = this._callbacks["$" + t2] || []).push(e2), this;
        }, r.prototype.once = function(t2, e2) {
          function n2() {
            this.off(t2, n2), e2.apply(this, arguments);
          }
          return n2.fn = e2, this.on(t2, n2), this;
        }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function(t2, e2) {
          if (this._callbacks = this._callbacks || {}, arguments.length == 0)
            return this._callbacks = {}, this;
          var n2, r2 = this._callbacks["$" + t2];
          if (!r2)
            return this;
          if (arguments.length == 1)
            return delete this._callbacks["$" + t2], this;
          for (var o = 0; o < r2.length; o++)
            if ((n2 = r2[o]) === e2 || n2.fn === e2) {
              r2.splice(o, 1);
              break;
            }
          return r2.length === 0 && delete this._callbacks["$" + t2], this;
        }, r.prototype.emit = function(t2) {
          this._callbacks = this._callbacks || {};
          for (var e2 = new Array(arguments.length - 1), n2 = this._callbacks["$" + t2], r2 = 1; r2 < arguments.length; r2++)
            e2[r2 - 1] = arguments[r2];
          if (n2) {
            r2 = 0;
            for (var o = (n2 = n2.slice(0)).length; r2 < o; ++r2)
              n2[r2].apply(this, e2);
          }
          return this;
        }, r.prototype.listeners = function(t2) {
          return this._callbacks = this._callbacks || {}, this._callbacks["$" + t2] || [];
        }, r.prototype.hasListeners = function(t2) {
          return !!this.listeners(t2).length;
        };
      }, function(t, e, n) {
        const r = n(25), o = n(26), s = String.fromCharCode(30);
        t.exports = { protocol: 4, encodePacket: r, encodePayload: (t2, e2) => {
          const n2 = t2.length, o2 = new Array(n2);
          let i = 0;
          t2.forEach((t3, a) => {
            r(t3, false, (t4) => {
              o2[a] = t4, ++i === n2 && e2(o2.join(s));
            });
          });
        }, decodePacket: o, decodePayload: (t2, e2) => {
          const n2 = t2.split(s), r2 = [];
          for (let t3 = 0; t3 < n2.length; t3++) {
            const s2 = o(n2[t3], e2);
            if (r2.push(s2), s2.type === "error")
              break;
          }
          return r2;
        } };
      }, function(t, e) {
        t.exports = typeof self != "undefined" ? self : typeof window != "undefined" ? window : Function("return this")();
      }, function(t, e, n) {
        const r = n(2), o = n(1), s = n(0)("engine.io-client:transport");
        t.exports = class extends o {
          constructor(t2) {
            super(), this.opts = t2, this.query = t2.query, this.readyState = "", this.socket = t2.socket;
          }
          onError(t2, e2) {
            const n2 = new Error(t2);
            return n2.type = "TransportError", n2.description = e2, this.emit("error", n2), this;
          }
          open() {
            return this.readyState !== "closed" && this.readyState !== "" || (this.readyState = "opening", this.doOpen()), this;
          }
          close() {
            return this.readyState !== "opening" && this.readyState !== "open" || (this.doClose(), this.onClose()), this;
          }
          send(t2) {
            this.readyState === "open" ? this.write(t2) : s("transport is not open, discarding packets");
          }
          onOpen() {
            this.readyState = "open", this.writable = true, this.emit("open");
          }
          onData(t2) {
            const e2 = r.decodePacket(t2, this.socket.binaryType);
            this.onPacket(e2);
          }
          onPacket(t2) {
            this.emit("packet", t2);
          }
          onClose() {
            this.readyState = "closed", this.emit("close");
          }
        };
      }, function(t, e) {
        e.encode = function(t2) {
          var e2 = "";
          for (var n in t2)
            t2.hasOwnProperty(n) && (e2.length && (e2 += "&"), e2 += encodeURIComponent(n) + "=" + encodeURIComponent(t2[n]));
          return e2;
        }, e.decode = function(t2) {
          for (var e2 = {}, n = t2.split("&"), r = 0, o = n.length; r < o; r++) {
            var s = n[r].split("=");
            e2[decodeURIComponent(s[0])] = decodeURIComponent(s[1]);
          }
          return e2;
        };
      }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true }), e.Decoder = e.Encoder = e.PacketType = e.protocol = void 0;
        const r = n(1), o = n(38), s = n(16), i = n(0)("socket.io-parser");
        var a;
        e.protocol = 5, function(t2) {
          t2[t2.CONNECT = 0] = "CONNECT", t2[t2.DISCONNECT = 1] = "DISCONNECT", t2[t2.EVENT = 2] = "EVENT", t2[t2.ACK = 3] = "ACK", t2[t2.CONNECT_ERROR = 4] = "CONNECT_ERROR", t2[t2.BINARY_EVENT = 5] = "BINARY_EVENT", t2[t2.BINARY_ACK = 6] = "BINARY_ACK";
        }(a = e.PacketType || (e.PacketType = {}));
        e.Encoder = class {
          encode(t2) {
            return i("encoding packet %j", t2), t2.type !== a.EVENT && t2.type !== a.ACK || !s.hasBinary(t2) ? [this.encodeAsString(t2)] : (t2.type = t2.type === a.EVENT ? a.BINARY_EVENT : a.BINARY_ACK, this.encodeAsBinary(t2));
          }
          encodeAsString(t2) {
            let e2 = "" + t2.type;
            return t2.type !== a.BINARY_EVENT && t2.type !== a.BINARY_ACK || (e2 += t2.attachments + "-"), t2.nsp && t2.nsp !== "/" && (e2 += t2.nsp + ","), t2.id != null && (e2 += t2.id), t2.data != null && (e2 += JSON.stringify(t2.data)), i("encoded %j as %s", t2, e2), e2;
          }
          encodeAsBinary(t2) {
            const e2 = o.deconstructPacket(t2), n2 = this.encodeAsString(e2.packet), r2 = e2.buffers;
            return r2.unshift(n2), r2;
          }
        };
        class c extends r {
          constructor() {
            super();
          }
          add(t2) {
            let e2;
            if (typeof t2 == "string")
              e2 = this.decodeString(t2), e2.type === a.BINARY_EVENT || e2.type === a.BINARY_ACK ? (this.reconstructor = new h(e2), e2.attachments === 0 && super.emit("decoded", e2)) : super.emit("decoded", e2);
            else {
              if (!s.isBinary(t2) && !t2.base64)
                throw new Error("Unknown type: " + t2);
              if (!this.reconstructor)
                throw new Error("got binary data when not reconstructing a packet");
              e2 = this.reconstructor.takeBinaryData(t2), e2 && (this.reconstructor = null, super.emit("decoded", e2));
            }
          }
          decodeString(t2) {
            let e2 = 0;
            const n2 = { type: Number(t2.charAt(0)) };
            if (a[n2.type] === void 0)
              throw new Error("unknown packet type " + n2.type);
            if (n2.type === a.BINARY_EVENT || n2.type === a.BINARY_ACK) {
              const r3 = e2 + 1;
              for (; t2.charAt(++e2) !== "-" && e2 != t2.length; )
                ;
              const o2 = t2.substring(r3, e2);
              if (o2 != Number(o2) || t2.charAt(e2) !== "-")
                throw new Error("Illegal attachments");
              n2.attachments = Number(o2);
            }
            if (t2.charAt(e2 + 1) === "/") {
              const r3 = e2 + 1;
              for (; ++e2; ) {
                if (t2.charAt(e2) === ",")
                  break;
                if (e2 === t2.length)
                  break;
              }
              n2.nsp = t2.substring(r3, e2);
            } else
              n2.nsp = "/";
            const r2 = t2.charAt(e2 + 1);
            if (r2 !== "" && Number(r2) == r2) {
              const r3 = e2 + 1;
              for (; ++e2; ) {
                const n3 = t2.charAt(e2);
                if (n3 == null || Number(n3) != n3) {
                  --e2;
                  break;
                }
                if (e2 === t2.length)
                  break;
              }
              n2.id = Number(t2.substring(r3, e2 + 1));
            }
            if (t2.charAt(++e2)) {
              const r3 = function(t3) {
                try {
                  return JSON.parse(t3);
                } catch (t4) {
                  return false;
                }
              }(t2.substr(e2));
              if (!c.isPayloadValid(n2.type, r3))
                throw new Error("invalid payload");
              n2.data = r3;
            }
            return i("decoded %s as %j", t2, n2), n2;
          }
          static isPayloadValid(t2, e2) {
            switch (t2) {
              case a.CONNECT:
                return typeof e2 == "object";
              case a.DISCONNECT:
                return e2 === void 0;
              case a.CONNECT_ERROR:
                return typeof e2 == "string" || typeof e2 == "object";
              case a.EVENT:
              case a.BINARY_EVENT:
                return Array.isArray(e2) && typeof e2[0] == "string";
              case a.ACK:
              case a.BINARY_ACK:
                return Array.isArray(e2);
            }
          }
          destroy() {
            this.reconstructor && this.reconstructor.finishedReconstruction();
          }
        }
        e.Decoder = c;
        class h {
          constructor(t2) {
            this.packet = t2, this.buffers = [], this.reconPack = t2;
          }
          takeBinaryData(t2) {
            if (this.buffers.push(t2), this.buffers.length === this.reconPack.attachments) {
              const t3 = o.reconstructPacket(this.reconPack, this.buffers);
              return this.finishedReconstruction(), t3;
            }
            return null;
          }
          finishedReconstruction() {
            this.reconPack = null, this.buffers = [];
          }
        }
      }, function(t, e) {
        var n = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, r = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
        t.exports = function(t2) {
          var e2 = t2, o = t2.indexOf("["), s = t2.indexOf("]");
          o != -1 && s != -1 && (t2 = t2.substring(0, o) + t2.substring(o, s).replace(/:/g, ";") + t2.substring(s, t2.length));
          for (var i, a, c = n.exec(t2 || ""), h = {}, u = 14; u--; )
            h[r[u]] = c[u] || "";
          return o != -1 && s != -1 && (h.source = e2, h.host = h.host.substring(1, h.host.length - 1).replace(/;/g, ":"), h.authority = h.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), h.ipv6uri = true), h.pathNames = function(t3, e3) {
            var n2 = e3.replace(/\/{2,9}/g, "/").split("/");
            e3.substr(0, 1) != "/" && e3.length !== 0 || n2.splice(0, 1);
            e3.substr(e3.length - 1, 1) == "/" && n2.splice(n2.length - 1, 1);
            return n2;
          }(0, h.path), h.queryKey = (i = h.query, a = {}, i.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(t3, e3, n2) {
            e3 && (a[e3] = n2);
          }), a), h;
        };
      }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true }), e.Manager = void 0;
        const r = n(21), o = n(15), s = n(1), i = n(6), a = n(17), c = n(39), h = n(0)("socket.io-client:manager");
        e.Manager = class extends s {
          constructor(t2, e2) {
            super(), this.nsps = {}, this.subs = [], t2 && typeof t2 == "object" && (e2 = t2, t2 = void 0), (e2 = e2 || {}).path = e2.path || "/socket.io", this.opts = e2, this.reconnection(e2.reconnection !== false), this.reconnectionAttempts(e2.reconnectionAttempts || 1 / 0), this.reconnectionDelay(e2.reconnectionDelay || 1e3), this.reconnectionDelayMax(e2.reconnectionDelayMax || 5e3), this.randomizationFactor(e2.randomizationFactor || 0.5), this.backoff = new c({ min: this.reconnectionDelay(), max: this.reconnectionDelayMax(), jitter: this.randomizationFactor() }), this.timeout(e2.timeout == null ? 2e4 : e2.timeout), this._readyState = "closed", this.uri = t2;
            const n2 = e2.parser || i;
            this.encoder = new n2.Encoder(), this.decoder = new n2.Decoder(), this._autoConnect = e2.autoConnect !== false, this._autoConnect && this.open();
          }
          reconnection(t2) {
            return arguments.length ? (this._reconnection = !!t2, this) : this._reconnection;
          }
          reconnectionAttempts(t2) {
            return t2 === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = t2, this);
          }
          reconnectionDelay(t2) {
            var e2;
            return t2 === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = t2, (e2 = this.backoff) === null || e2 === void 0 || e2.setMin(t2), this);
          }
          randomizationFactor(t2) {
            var e2;
            return t2 === void 0 ? this._randomizationFactor : (this._randomizationFactor = t2, (e2 = this.backoff) === null || e2 === void 0 || e2.setJitter(t2), this);
          }
          reconnectionDelayMax(t2) {
            var e2;
            return t2 === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = t2, (e2 = this.backoff) === null || e2 === void 0 || e2.setMax(t2), this);
          }
          timeout(t2) {
            return arguments.length ? (this._timeout = t2, this) : this._timeout;
          }
          maybeReconnectOnOpen() {
            !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect();
          }
          open(t2) {
            if (h("readyState %s", this._readyState), ~this._readyState.indexOf("open"))
              return this;
            h("opening %s", this.uri), this.engine = r(this.uri, this.opts);
            const e2 = this.engine, n2 = this;
            this._readyState = "opening", this.skipReconnect = false;
            const o2 = a.on(e2, "open", function() {
              n2.onopen(), t2 && t2();
            }), s2 = a.on(e2, "error", (e3) => {
              h("error"), n2.cleanup(), n2._readyState = "closed", super.emit("error", e3), t2 ? t2(e3) : n2.maybeReconnectOnOpen();
            });
            if (this._timeout !== false) {
              const t3 = this._timeout;
              h("connect attempt will timeout after %d", t3), t3 === 0 && o2();
              const n3 = setTimeout(() => {
                h("connect attempt timed out after %d", t3), o2(), e2.close(), e2.emit("error", new Error("timeout"));
              }, t3);
              this.subs.push(function() {
                clearTimeout(n3);
              });
            }
            return this.subs.push(o2), this.subs.push(s2), this;
          }
          connect(t2) {
            return this.open(t2);
          }
          onopen() {
            h("open"), this.cleanup(), this._readyState = "open", super.emit("open");
            const t2 = this.engine;
            this.subs.push(a.on(t2, "ping", this.onping.bind(this)), a.on(t2, "data", this.ondata.bind(this)), a.on(t2, "error", this.onerror.bind(this)), a.on(t2, "close", this.onclose.bind(this)), a.on(this.decoder, "decoded", this.ondecoded.bind(this)));
          }
          onping() {
            super.emit("ping");
          }
          ondata(t2) {
            this.decoder.add(t2);
          }
          ondecoded(t2) {
            super.emit("packet", t2);
          }
          onerror(t2) {
            h("error", t2), super.emit("error", t2);
          }
          socket(t2, e2) {
            let n2 = this.nsps[t2];
            return n2 || (n2 = new o.Socket(this, t2, e2), this.nsps[t2] = n2), n2;
          }
          _destroy(t2) {
            const e2 = Object.keys(this.nsps);
            for (const t3 of e2) {
              if (this.nsps[t3].active)
                return void h("socket %s is still active, skipping close", t3);
            }
            this._close();
          }
          _packet(t2) {
            h("writing packet %j", t2), t2.query && t2.type === 0 && (t2.nsp += "?" + t2.query);
            const e2 = this.encoder.encode(t2);
            for (let n2 = 0; n2 < e2.length; n2++)
              this.engine.write(e2[n2], t2.options);
          }
          cleanup() {
            h("cleanup"), this.subs.forEach((t2) => t2()), this.subs.length = 0, this.decoder.destroy();
          }
          _close() {
            h("disconnect"), this.skipReconnect = true, this._reconnecting = false, this._readyState === "opening" && this.cleanup(), this.backoff.reset(), this._readyState = "closed", this.engine && this.engine.close();
          }
          disconnect() {
            return this._close();
          }
          onclose(t2) {
            h("onclose"), this.cleanup(), this.backoff.reset(), this._readyState = "closed", super.emit("close", t2), this._reconnection && !this.skipReconnect && this.reconnect();
          }
          reconnect() {
            if (this._reconnecting || this.skipReconnect)
              return this;
            const t2 = this;
            if (this.backoff.attempts >= this._reconnectionAttempts)
              h("reconnect failed"), this.backoff.reset(), super.emit("reconnect_failed"), this._reconnecting = false;
            else {
              const e2 = this.backoff.duration();
              h("will wait %dms before reconnect attempt", e2), this._reconnecting = true;
              const n2 = setTimeout(() => {
                t2.skipReconnect || (h("attempting reconnect"), super.emit("reconnect_attempt", t2.backoff.attempts), t2.skipReconnect || t2.open((e3) => {
                  e3 ? (h("reconnect attempt error"), t2._reconnecting = false, t2.reconnect(), super.emit("reconnect_error", e3)) : (h("reconnect success"), t2.onreconnect());
                }));
              }, e2);
              this.subs.push(function() {
                clearTimeout(n2);
              });
            }
          }
          onreconnect() {
            const t2 = this.backoff.attempts;
            this._reconnecting = false, this.backoff.reset(), super.emit("reconnect", t2);
          }
        };
      }, function(t, e, n) {
        const r = n(10), o = n(24), s = n(28), i = n(29);
        e.polling = function(t2) {
          let e2, n2 = false, i2 = false;
          const a = t2.jsonp !== false;
          if (typeof location != "undefined") {
            const e3 = location.protocol === "https:";
            let r2 = location.port;
            r2 || (r2 = e3 ? 443 : 80), n2 = t2.hostname !== location.hostname || r2 !== t2.port, i2 = t2.secure !== e3;
          }
          if (t2.xdomain = n2, t2.xscheme = i2, e2 = new r(t2), "open" in e2 && !t2.forceJSONP)
            return new o(t2);
          if (!a)
            throw new Error("JSONP disabled");
          return new s(t2);
        }, e.websocket = i;
      }, function(t, e, n) {
        const r = n(23), o = n(3);
        t.exports = function(t2) {
          const e2 = t2.xdomain, n2 = t2.xscheme, s = t2.enablesXDR;
          try {
            if (typeof XMLHttpRequest != "undefined" && (!e2 || r))
              return new XMLHttpRequest();
          } catch (t3) {
          }
          try {
            if (typeof XDomainRequest != "undefined" && !n2 && s)
              return new XDomainRequest();
          } catch (t3) {
          }
          if (!e2)
            try {
              return new o[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
            } catch (t3) {
            }
        };
      }, function(t, e, n) {
        const r = n(4), o = n(5), s = n(2), i = n(13), a = n(0)("engine.io-client:polling");
        t.exports = class extends r {
          get name() {
            return "polling";
          }
          doOpen() {
            this.poll();
          }
          pause(t2) {
            const e2 = this;
            function n2() {
              a("paused"), e2.readyState = "paused", t2();
            }
            if (this.readyState = "pausing", this.polling || !this.writable) {
              let t3 = 0;
              this.polling && (a("we are currently polling - waiting to pause"), t3++, this.once("pollComplete", function() {
                a("pre-pause polling complete"), --t3 || n2();
              })), this.writable || (a("we are currently writing - waiting to pause"), t3++, this.once("drain", function() {
                a("pre-pause writing complete"), --t3 || n2();
              }));
            } else
              n2();
          }
          poll() {
            a("polling"), this.polling = true, this.doPoll(), this.emit("poll");
          }
          onData(t2) {
            const e2 = this;
            a("polling got data %s", t2);
            s.decodePayload(t2, this.socket.binaryType).forEach(function(t3, n2, r2) {
              if (e2.readyState === "opening" && t3.type === "open" && e2.onOpen(), t3.type === "close")
                return e2.onClose(), false;
              e2.onPacket(t3);
            }), this.readyState !== "closed" && (this.polling = false, this.emit("pollComplete"), this.readyState === "open" ? this.poll() : a('ignoring poll - transport state "%s"', this.readyState));
          }
          doClose() {
            const t2 = this;
            function e2() {
              a("writing close packet"), t2.write([{ type: "close" }]);
            }
            this.readyState === "open" ? (a("transport open - closing"), e2()) : (a("transport not open - deferring close"), this.once("open", e2));
          }
          write(t2) {
            this.writable = false, s.encodePayload(t2, (t3) => {
              this.doWrite(t3, () => {
                this.writable = true, this.emit("drain");
              });
            });
          }
          uri() {
            let t2 = this.query || {};
            const e2 = this.opts.secure ? "https" : "http";
            let n2 = "";
            this.opts.timestampRequests !== false && (t2[this.opts.timestampParam] = i()), this.supportsBinary || t2.sid || (t2.b64 = 1), t2 = o.encode(t2), this.opts.port && (e2 === "https" && Number(this.opts.port) !== 443 || e2 === "http" && Number(this.opts.port) !== 80) && (n2 = ":" + this.opts.port), t2.length && (t2 = "?" + t2);
            return e2 + "://" + (this.opts.hostname.indexOf(":") !== -1 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + n2 + this.opts.path + t2;
          }
        };
      }, function(t, e) {
        const n = /* @__PURE__ */ Object.create(null);
        n.open = "0", n.close = "1", n.ping = "2", n.pong = "3", n.message = "4", n.upgrade = "5", n.noop = "6";
        const r = /* @__PURE__ */ Object.create(null);
        Object.keys(n).forEach((t2) => {
          r[n[t2]] = t2;
        });
        t.exports = { PACKET_TYPES: n, PACKET_TYPES_REVERSE: r, ERROR_PACKET: { type: "error", data: "parser error" } };
      }, function(t, e, n) {
        "use strict";
        var r, o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), s = {}, i = 0, a = 0;
        function c(t2) {
          var e2 = "";
          do {
            e2 = o[t2 % 64] + e2, t2 = Math.floor(t2 / 64);
          } while (t2 > 0);
          return e2;
        }
        function h() {
          var t2 = c(+new Date());
          return t2 !== r ? (i = 0, r = t2) : t2 + "." + c(i++);
        }
        for (; a < 64; a++)
          s[o[a]] = a;
        h.encode = c, h.decode = function(t2) {
          var e2 = 0;
          for (a = 0; a < t2.length; a++)
            e2 = 64 * e2 + s[t2.charAt(a)];
          return e2;
        }, t.exports = h;
      }, function(t, e) {
        t.exports.pick = (t2, ...e2) => e2.reduce((e3, n) => (t2.hasOwnProperty(n) && (e3[n] = t2[n]), e3), {});
      }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true }), e.Socket = void 0;
        const r = n(6), o = n(1), s = n(17), i = n(0)("socket.io-client:socket"), a = Object.freeze({ connect: 1, connect_error: 1, disconnect: 1, disconnecting: 1, newListener: 1, removeListener: 1 });
        e.Socket = class extends o {
          constructor(t2, e2, n2) {
            super(), this.receiveBuffer = [], this.sendBuffer = [], this.ids = 0, this.acks = {}, this.flags = {}, this.io = t2, this.nsp = e2, this.ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = false, this.disconnected = true, this.flags = {}, n2 && n2.auth && (this.auth = n2.auth), this.io._autoConnect && this.open();
          }
          subEvents() {
            if (this.subs)
              return;
            const t2 = this.io;
            this.subs = [s.on(t2, "open", this.onopen.bind(this)), s.on(t2, "packet", this.onpacket.bind(this)), s.on(t2, "error", this.onerror.bind(this)), s.on(t2, "close", this.onclose.bind(this))];
          }
          get active() {
            return !!this.subs;
          }
          connect() {
            return this.connected || (this.subEvents(), this.io._reconnecting || this.io.open(), this.io._readyState === "open" && this.onopen()), this;
          }
          open() {
            return this.connect();
          }
          send(...t2) {
            return t2.unshift("message"), this.emit.apply(this, t2), this;
          }
          emit(t2, ...e2) {
            if (a.hasOwnProperty(t2))
              throw new Error('"' + t2 + '" is a reserved event name');
            e2.unshift(t2);
            const n2 = { type: r.PacketType.EVENT, data: e2, options: {} };
            n2.options.compress = this.flags.compress !== false, typeof e2[e2.length - 1] == "function" && (i("emitting packet with ack id %d", this.ids), this.acks[this.ids] = e2.pop(), n2.id = this.ids++);
            const o2 = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
            return this.flags.volatile && (!o2 || !this.connected) ? i("discard packet as the transport is not currently writable") : this.connected ? this.packet(n2) : this.sendBuffer.push(n2), this.flags = {}, this;
          }
          packet(t2) {
            t2.nsp = this.nsp, this.io._packet(t2);
          }
          onopen() {
            i("transport is open - connecting"), typeof this.auth == "function" ? this.auth((t2) => {
              this.packet({ type: r.PacketType.CONNECT, data: t2 });
            }) : this.packet({ type: r.PacketType.CONNECT, data: this.auth });
          }
          onerror(t2) {
            this.connected || super.emit("connect_error", t2);
          }
          onclose(t2) {
            i("close (%s)", t2), this.connected = false, this.disconnected = true, delete this.id, super.emit("disconnect", t2);
          }
          onpacket(t2) {
            if (t2.nsp === this.nsp)
              switch (t2.type) {
                case r.PacketType.CONNECT:
                  if (t2.data && t2.data.sid) {
                    const e3 = t2.data.sid;
                    this.onconnect(e3);
                  } else
                    super.emit("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                  break;
                case r.PacketType.EVENT:
                case r.PacketType.BINARY_EVENT:
                  this.onevent(t2);
                  break;
                case r.PacketType.ACK:
                case r.PacketType.BINARY_ACK:
                  this.onack(t2);
                  break;
                case r.PacketType.DISCONNECT:
                  this.ondisconnect();
                  break;
                case r.PacketType.CONNECT_ERROR:
                  const e2 = new Error(t2.data.message);
                  e2.data = t2.data.data, super.emit("connect_error", e2);
              }
          }
          onevent(t2) {
            const e2 = t2.data || [];
            i("emitting event %j", e2), t2.id != null && (i("attaching ack callback to event"), e2.push(this.ack(t2.id))), this.connected ? this.emitEvent(e2) : this.receiveBuffer.push(Object.freeze(e2));
          }
          emitEvent(t2) {
            if (this._anyListeners && this._anyListeners.length) {
              const e2 = this._anyListeners.slice();
              for (const n2 of e2)
                n2.apply(this, t2);
            }
            super.emit.apply(this, t2);
          }
          ack(t2) {
            const e2 = this;
            let n2 = false;
            return function(...o2) {
              n2 || (n2 = true, i("sending ack %j", o2), e2.packet({ type: r.PacketType.ACK, id: t2, data: o2 }));
            };
          }
          onack(t2) {
            const e2 = this.acks[t2.id];
            typeof e2 == "function" ? (i("calling ack %s with %j", t2.id, t2.data), e2.apply(this, t2.data), delete this.acks[t2.id]) : i("bad ack %s", t2.id);
          }
          onconnect(t2) {
            i("socket connected with id %s", t2), this.id = t2, this.connected = true, this.disconnected = false, super.emit("connect"), this.emitBuffered();
          }
          emitBuffered() {
            this.receiveBuffer.forEach((t2) => this.emitEvent(t2)), this.receiveBuffer = [], this.sendBuffer.forEach((t2) => this.packet(t2)), this.sendBuffer = [];
          }
          ondisconnect() {
            i("server disconnect (%s)", this.nsp), this.destroy(), this.onclose("io server disconnect");
          }
          destroy() {
            this.subs && (this.subs.forEach((t2) => t2()), this.subs = void 0), this.io._destroy(this);
          }
          disconnect() {
            return this.connected && (i("performing disconnect (%s)", this.nsp), this.packet({ type: r.PacketType.DISCONNECT })), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
          }
          close() {
            return this.disconnect();
          }
          compress(t2) {
            return this.flags.compress = t2, this;
          }
          get volatile() {
            return this.flags.volatile = true, this;
          }
          onAny(t2) {
            return this._anyListeners = this._anyListeners || [], this._anyListeners.push(t2), this;
          }
          prependAny(t2) {
            return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(t2), this;
          }
          offAny(t2) {
            if (!this._anyListeners)
              return this;
            if (t2) {
              const e2 = this._anyListeners;
              for (let n2 = 0; n2 < e2.length; n2++)
                if (t2 === e2[n2])
                  return e2.splice(n2, 1), this;
            } else
              this._anyListeners = [];
            return this;
          }
          listenersAny() {
            return this._anyListeners || [];
          }
        };
      }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true }), e.hasBinary = e.isBinary = void 0;
        const r = typeof ArrayBuffer == "function", o = Object.prototype.toString, s = typeof Blob == "function" || typeof Blob != "undefined" && o.call(Blob) === "[object BlobConstructor]", i = typeof File == "function" || typeof File != "undefined" && o.call(File) === "[object FileConstructor]";
        function a(t2) {
          return r && (t2 instanceof ArrayBuffer || ((t3) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t3) : t3.buffer instanceof ArrayBuffer)(t2)) || s && t2 instanceof Blob || i && t2 instanceof File;
        }
        e.isBinary = a, e.hasBinary = function t2(e2, n2) {
          if (!e2 || typeof e2 != "object")
            return false;
          if (Array.isArray(e2)) {
            for (let n3 = 0, r2 = e2.length; n3 < r2; n3++)
              if (t2(e2[n3]))
                return true;
            return false;
          }
          if (a(e2))
            return true;
          if (e2.toJSON && typeof e2.toJSON == "function" && arguments.length === 1)
            return t2(e2.toJSON(), true);
          for (const n3 in e2)
            if (Object.prototype.hasOwnProperty.call(e2, n3) && t2(e2[n3]))
              return true;
          return false;
        };
      }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true }), e.on = void 0, e.on = function(t2, e2, n2) {
          return t2.on(e2, n2), function() {
            t2.off(e2, n2);
          };
        };
      }, function(t, e, n) {
        t.exports = n(19);
      }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true }), e.Socket = e.io = e.Manager = e.protocol = void 0;
        const r = n(20), o = n(8), s = n(15);
        Object.defineProperty(e, "Socket", { enumerable: true, get: function() {
          return s.Socket;
        } });
        const i = n(0)("socket.io-client");
        t.exports = e = c;
        const a = e.managers = {};
        function c(t2, e2) {
          typeof t2 == "object" && (e2 = t2, t2 = void 0), e2 = e2 || {};
          const n2 = r.url(t2), s2 = n2.source, c2 = n2.id, h2 = n2.path, u2 = a[c2] && h2 in a[c2].nsps;
          let p;
          return e2.forceNew || e2["force new connection"] || e2.multiplex === false || u2 ? (i("ignoring socket cache for %s", s2), p = new o.Manager(s2, e2)) : (a[c2] || (i("new io instance for %s", s2), a[c2] = new o.Manager(s2, e2)), p = a[c2]), n2.query && !e2.query && (e2.query = n2.query), p.socket(n2.path, e2);
        }
        e.io = c;
        var h = n(6);
        Object.defineProperty(e, "protocol", { enumerable: true, get: function() {
          return h.protocol;
        } }), e.connect = c;
        var u = n(8);
        Object.defineProperty(e, "Manager", { enumerable: true, get: function() {
          return u.Manager;
        } });
      }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true }), e.url = void 0;
        const r = n(7), o = n(0)("socket.io-client:url");
        e.url = function(t2, e2) {
          let n2 = t2;
          e2 = e2 || typeof location != "undefined" && location, t2 == null && (t2 = e2.protocol + "//" + e2.host), typeof t2 == "string" && (t2.charAt(0) === "/" && (t2 = t2.charAt(1) === "/" ? e2.protocol + t2 : e2.host + t2), /^(https?|wss?):\/\//.test(t2) || (o("protocol-less url %s", t2), t2 = e2 !== void 0 ? e2.protocol + "//" + t2 : "https://" + t2), o("parse %s", t2), n2 = r(t2)), n2.port || (/^(http|ws)$/.test(n2.protocol) ? n2.port = "80" : /^(http|ws)s$/.test(n2.protocol) && (n2.port = "443")), n2.path = n2.path || "/";
          const s = n2.host.indexOf(":") !== -1 ? "[" + n2.host + "]" : n2.host;
          return n2.id = n2.protocol + "://" + s + ":" + n2.port, n2.href = n2.protocol + "://" + s + (e2 && e2.port === n2.port ? "" : ":" + n2.port), n2;
        };
      }, function(t, e, n) {
        const r = n(22);
        t.exports = (t2, e2) => new r(t2, e2), t.exports.Socket = r, t.exports.protocol = r.protocol, t.exports.Transport = n(4), t.exports.transports = n(9), t.exports.parser = n(2);
      }, function(t, e, n) {
        const r = n(9), o = n(1), s = n(0)("engine.io-client:socket"), i = n(2), a = n(7), c = n(5);
        class h extends o {
          constructor(t2, e2 = {}) {
            super(), t2 && typeof t2 == "object" && (e2 = t2, t2 = null), t2 ? (t2 = a(t2), e2.hostname = t2.host, e2.secure = t2.protocol === "https" || t2.protocol === "wss", e2.port = t2.port, t2.query && (e2.query = t2.query)) : e2.host && (e2.hostname = a(e2.host).host), this.secure = e2.secure != null ? e2.secure : typeof location != "undefined" && location.protocol === "https:", e2.hostname && !e2.port && (e2.port = this.secure ? "443" : "80"), this.hostname = e2.hostname || (typeof location != "undefined" ? location.hostname : "localhost"), this.port = e2.port || (typeof location != "undefined" && location.port ? location.port : this.secure ? 443 : 80), this.transports = e2.transports || ["polling", "websocket"], this.readyState = "", this.writeBuffer = [], this.prevBufferLen = 0, this.opts = Object.assign({ path: "/engine.io", agent: false, withCredentials: false, upgrade: true, jsonp: true, timestampParam: "t", rememberUpgrade: false, rejectUnauthorized: true, perMessageDeflate: { threshold: 1024 }, transportOptions: {} }, e2), this.opts.path = this.opts.path.replace(/\/$/, "") + "/", typeof this.opts.query == "string" && (this.opts.query = c.decode(this.opts.query)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingTimeoutTimer = null, typeof addEventListener == "function" && (addEventListener("beforeunload", () => {
              this.transport && (this.transport.removeAllListeners(), this.transport.close());
            }, false), this.hostname !== "localhost" && (this.offlineEventListener = () => {
              this.onClose("transport close");
            }, addEventListener("offline", this.offlineEventListener, false))), this.open();
          }
          createTransport(t2) {
            s('creating transport "%s"', t2);
            const e2 = function(t3) {
              const e3 = {};
              for (let n3 in t3)
                t3.hasOwnProperty(n3) && (e3[n3] = t3[n3]);
              return e3;
            }(this.opts.query);
            e2.EIO = i.protocol, e2.transport = t2, this.id && (e2.sid = this.id);
            const n2 = Object.assign({}, this.opts.transportOptions[t2], this.opts, { query: e2, socket: this, hostname: this.hostname, secure: this.secure, port: this.port });
            return s("options: %j", n2), new r[t2](n2);
          }
          open() {
            let t2;
            if (this.opts.rememberUpgrade && h.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1)
              t2 = "websocket";
            else {
              if (this.transports.length === 0) {
                const t3 = this;
                return void setTimeout(function() {
                  t3.emit("error", "No transports available");
                }, 0);
              }
              t2 = this.transports[0];
            }
            this.readyState = "opening";
            try {
              t2 = this.createTransport(t2);
            } catch (t3) {
              return s("error while creating transport: %s", t3), this.transports.shift(), void this.open();
            }
            t2.open(), this.setTransport(t2);
          }
          setTransport(t2) {
            s("setting transport %s", t2.name);
            const e2 = this;
            this.transport && (s("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()), this.transport = t2, t2.on("drain", function() {
              e2.onDrain();
            }).on("packet", function(t3) {
              e2.onPacket(t3);
            }).on("error", function(t3) {
              e2.onError(t3);
            }).on("close", function() {
              e2.onClose("transport close");
            });
          }
          probe(t2) {
            s('probing transport "%s"', t2);
            let e2 = this.createTransport(t2, { probe: 1 }), n2 = false;
            const r2 = this;
            function o2() {
              if (r2.onlyBinaryUpgrades) {
                const t3 = !this.supportsBinary && r2.transport.supportsBinary;
                n2 = n2 || t3;
              }
              n2 || (s('probe transport "%s" opened', t2), e2.send([{ type: "ping", data: "probe" }]), e2.once("packet", function(o3) {
                if (!n2)
                  if (o3.type === "pong" && o3.data === "probe") {
                    if (s('probe transport "%s" pong', t2), r2.upgrading = true, r2.emit("upgrading", e2), !e2)
                      return;
                    h.priorWebsocketSuccess = e2.name === "websocket", s('pausing current transport "%s"', r2.transport.name), r2.transport.pause(function() {
                      n2 || r2.readyState !== "closed" && (s("changing transport and sending upgrade packet"), f(), r2.setTransport(e2), e2.send([{ type: "upgrade" }]), r2.emit("upgrade", e2), e2 = null, r2.upgrading = false, r2.flush());
                    });
                  } else {
                    s('probe transport "%s" failed', t2);
                    const n3 = new Error("probe error");
                    n3.transport = e2.name, r2.emit("upgradeError", n3);
                  }
              }));
            }
            function i2() {
              n2 || (n2 = true, f(), e2.close(), e2 = null);
            }
            function a2(n3) {
              const o3 = new Error("probe error: " + n3);
              o3.transport = e2.name, i2(), s('probe transport "%s" failed because of error: %s', t2, n3), r2.emit("upgradeError", o3);
            }
            function c2() {
              a2("transport closed");
            }
            function u() {
              a2("socket closed");
            }
            function p(t3) {
              e2 && t3.name !== e2.name && (s('"%s" works - aborting "%s"', t3.name, e2.name), i2());
            }
            function f() {
              e2.removeListener("open", o2), e2.removeListener("error", a2), e2.removeListener("close", c2), r2.removeListener("close", u), r2.removeListener("upgrading", p);
            }
            h.priorWebsocketSuccess = false, e2.once("open", o2), e2.once("error", a2), e2.once("close", c2), this.once("close", u), this.once("upgrading", p), e2.open();
          }
          onOpen() {
            if (s("socket open"), this.readyState = "open", h.priorWebsocketSuccess = this.transport.name === "websocket", this.emit("open"), this.flush(), this.readyState === "open" && this.opts.upgrade && this.transport.pause) {
              s("starting upgrade probes");
              let t2 = 0;
              const e2 = this.upgrades.length;
              for (; t2 < e2; t2++)
                this.probe(this.upgrades[t2]);
            }
          }
          onPacket(t2) {
            if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
              switch (s('socket receive: type "%s", data "%s"', t2.type, t2.data), this.emit("packet", t2), this.emit("heartbeat"), t2.type) {
                case "open":
                  this.onHandshake(JSON.parse(t2.data));
                  break;
                case "ping":
                  this.resetPingTimeout(), this.sendPacket("pong"), this.emit("pong");
                  break;
                case "error":
                  const e2 = new Error("server error");
                  e2.code = t2.data, this.onError(e2);
                  break;
                case "message":
                  this.emit("data", t2.data), this.emit("message", t2.data);
              }
            else
              s('packet received with socket readyState "%s"', this.readyState);
          }
          onHandshake(t2) {
            this.emit("handshake", t2), this.id = t2.sid, this.transport.query.sid = t2.sid, this.upgrades = this.filterUpgrades(t2.upgrades), this.pingInterval = t2.pingInterval, this.pingTimeout = t2.pingTimeout, this.onOpen(), this.readyState !== "closed" && this.resetPingTimeout();
          }
          resetPingTimeout() {
            clearTimeout(this.pingTimeoutTimer), this.pingTimeoutTimer = setTimeout(() => {
              this.onClose("ping timeout");
            }, this.pingInterval + this.pingTimeout), this.opts.autoUnref && this.pingTimeoutTimer.unref();
          }
          onDrain() {
            this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emit("drain") : this.flush();
          }
          flush() {
            this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length && (s("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"));
          }
          write(t2, e2, n2) {
            return this.sendPacket("message", t2, e2, n2), this;
          }
          send(t2, e2, n2) {
            return this.sendPacket("message", t2, e2, n2), this;
          }
          sendPacket(t2, e2, n2, r2) {
            if (typeof e2 == "function" && (r2 = e2, e2 = void 0), typeof n2 == "function" && (r2 = n2, n2 = null), this.readyState === "closing" || this.readyState === "closed")
              return;
            (n2 = n2 || {}).compress = n2.compress !== false;
            const o2 = { type: t2, data: e2, options: n2 };
            this.emit("packetCreate", o2), this.writeBuffer.push(o2), r2 && this.once("flush", r2), this.flush();
          }
          close() {
            const t2 = this;
            function e2() {
              t2.onClose("forced close"), s("socket closing - telling transport to close"), t2.transport.close();
            }
            function n2() {
              t2.removeListener("upgrade", n2), t2.removeListener("upgradeError", n2), e2();
            }
            function r2() {
              t2.once("upgrade", n2), t2.once("upgradeError", n2);
            }
            return this.readyState !== "opening" && this.readyState !== "open" || (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", function() {
              this.upgrading ? r2() : e2();
            }) : this.upgrading ? r2() : e2()), this;
          }
          onError(t2) {
            s("socket error %j", t2), h.priorWebsocketSuccess = false, this.emit("error", t2), this.onClose("transport error", t2);
          }
          onClose(t2, e2) {
            if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
              s('socket close with reason: "%s"', t2);
              const n2 = this;
              clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), typeof removeEventListener == "function" && removeEventListener("offline", this.offlineEventListener, false), this.readyState = "closed", this.id = null, this.emit("close", t2, e2), n2.writeBuffer = [], n2.prevBufferLen = 0;
            }
          }
          filterUpgrades(t2) {
            const e2 = [];
            let n2 = 0;
            const r2 = t2.length;
            for (; n2 < r2; n2++)
              ~this.transports.indexOf(t2[n2]) && e2.push(t2[n2]);
            return e2;
          }
        }
        h.priorWebsocketSuccess = false, h.protocol = i.protocol, t.exports = h;
      }, function(t, e) {
        try {
          t.exports = typeof XMLHttpRequest != "undefined" && "withCredentials" in new XMLHttpRequest();
        } catch (e2) {
          t.exports = false;
        }
      }, function(t, e, n) {
        const r = n(10), o = n(11), s = n(1), { pick: i } = n(14), a = n(3), c = n(0)("engine.io-client:polling-xhr");
        function h() {
        }
        const u = new r({ xdomain: false }).responseType != null;
        class p extends s {
          constructor(t2, e2) {
            super(), this.opts = e2, this.method = e2.method || "GET", this.uri = t2, this.async = e2.async !== false, this.data = e2.data !== void 0 ? e2.data : null, this.create();
          }
          create() {
            const t2 = i(this.opts, "agent", "enablesXDR", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
            t2.xdomain = !!this.opts.xd, t2.xscheme = !!this.opts.xs;
            const e2 = this.xhr = new r(t2), n2 = this;
            try {
              c("xhr open %s: %s", this.method, this.uri), e2.open(this.method, this.uri, this.async);
              try {
                if (this.opts.extraHeaders) {
                  e2.setDisableHeaderCheck && e2.setDisableHeaderCheck(true);
                  for (let t3 in this.opts.extraHeaders)
                    this.opts.extraHeaders.hasOwnProperty(t3) && e2.setRequestHeader(t3, this.opts.extraHeaders[t3]);
                }
              } catch (t3) {
              }
              if (this.method === "POST")
                try {
                  e2.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
                } catch (t3) {
                }
              try {
                e2.setRequestHeader("Accept", "*/*");
              } catch (t3) {
              }
              "withCredentials" in e2 && (e2.withCredentials = this.opts.withCredentials), this.opts.requestTimeout && (e2.timeout = this.opts.requestTimeout), this.hasXDR() ? (e2.onload = function() {
                n2.onLoad();
              }, e2.onerror = function() {
                n2.onError(e2.responseText);
              }) : e2.onreadystatechange = function() {
                e2.readyState === 4 && (e2.status === 200 || e2.status === 1223 ? n2.onLoad() : setTimeout(function() {
                  n2.onError(typeof e2.status == "number" ? e2.status : 0);
                }, 0));
              }, c("xhr data %s", this.data), e2.send(this.data);
            } catch (t3) {
              return void setTimeout(function() {
                n2.onError(t3);
              }, 0);
            }
            typeof document != "undefined" && (this.index = p.requestsCount++, p.requests[this.index] = this);
          }
          onSuccess() {
            this.emit("success"), this.cleanup();
          }
          onData(t2) {
            this.emit("data", t2), this.onSuccess();
          }
          onError(t2) {
            this.emit("error", t2), this.cleanup(true);
          }
          cleanup(t2) {
            if (this.xhr !== void 0 && this.xhr !== null) {
              if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = h : this.xhr.onreadystatechange = h, t2)
                try {
                  this.xhr.abort();
                } catch (t3) {
                }
              typeof document != "undefined" && delete p.requests[this.index], this.xhr = null;
            }
          }
          onLoad() {
            const t2 = this.xhr.responseText;
            t2 !== null && this.onData(t2);
          }
          hasXDR() {
            return typeof XDomainRequest != "undefined" && !this.xs && this.enablesXDR;
          }
          abort() {
            this.cleanup();
          }
        }
        if (p.requestsCount = 0, p.requests = {}, typeof document != "undefined") {
          if (typeof attachEvent == "function")
            attachEvent("onunload", f);
          else if (typeof addEventListener == "function") {
            addEventListener("onpagehide" in a ? "pagehide" : "unload", f, false);
          }
        }
        function f() {
          for (let t2 in p.requests)
            p.requests.hasOwnProperty(t2) && p.requests[t2].abort();
        }
        t.exports = class extends o {
          constructor(t2) {
            if (super(t2), typeof location != "undefined") {
              const e3 = location.protocol === "https:";
              let n2 = location.port;
              n2 || (n2 = e3 ? 443 : 80), this.xd = typeof location != "undefined" && t2.hostname !== location.hostname || n2 !== t2.port, this.xs = t2.secure !== e3;
            }
            const e2 = t2 && t2.forceBase64;
            this.supportsBinary = u && !e2;
          }
          request(t2 = {}) {
            return Object.assign(t2, { xd: this.xd, xs: this.xs }, this.opts), new p(this.uri(), t2);
          }
          doWrite(t2, e2) {
            const n2 = this.request({ method: "POST", data: t2 }), r2 = this;
            n2.on("success", e2), n2.on("error", function(t3) {
              r2.onError("xhr post error", t3);
            });
          }
          doPoll() {
            c("xhr poll");
            const t2 = this.request(), e2 = this;
            t2.on("data", function(t3) {
              e2.onData(t3);
            }), t2.on("error", function(t3) {
              e2.onError("xhr poll error", t3);
            }), this.pollXhr = t2;
          }
        }, t.exports.Request = p;
      }, function(t, e, n) {
        const { PACKET_TYPES: r } = n(12), o = typeof Blob == "function" || typeof Blob != "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", s = typeof ArrayBuffer == "function", i = (t2, e2) => {
          const n2 = new FileReader();
          return n2.onload = function() {
            const t3 = n2.result.split(",")[1];
            e2("b" + t3);
          }, n2.readAsDataURL(t2);
        };
        t.exports = ({ type: t2, data: e2 }, n2, a) => {
          return o && e2 instanceof Blob ? n2 ? a(e2) : i(e2, a) : s && (e2 instanceof ArrayBuffer || (c = e2, typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(c) : c && c.buffer instanceof ArrayBuffer)) ? n2 ? a(e2 instanceof ArrayBuffer ? e2 : e2.buffer) : i(new Blob([e2]), a) : a(r[t2] + (e2 || ""));
          var c;
        };
      }, function(t, e, n) {
        const { PACKET_TYPES_REVERSE: r, ERROR_PACKET: o } = n(12);
        let s;
        typeof ArrayBuffer == "function" && (s = n(27));
        const i = (t2, e2) => {
          if (s) {
            const n2 = s.decode(t2);
            return a(n2, e2);
          }
          return { base64: true, data: t2 };
        }, a = (t2, e2) => {
          switch (e2) {
            case "blob":
              return t2 instanceof ArrayBuffer ? new Blob([t2]) : t2;
            case "arraybuffer":
            default:
              return t2;
          }
        };
        t.exports = (t2, e2) => {
          if (typeof t2 != "string")
            return { type: "message", data: a(t2, e2) };
          const n2 = t2.charAt(0);
          if (n2 === "b")
            return { type: "message", data: i(t2.substring(1), e2) };
          return r[n2] ? t2.length > 1 ? { type: r[n2], data: t2.substring(1) } : { type: r[n2] } : o;
        };
      }, function(t, e) {
        !function(t2) {
          "use strict";
          e.encode = function(e2) {
            var n, r = new Uint8Array(e2), o = r.length, s = "";
            for (n = 0; n < o; n += 3)
              s += t2[r[n] >> 2], s += t2[(3 & r[n]) << 4 | r[n + 1] >> 4], s += t2[(15 & r[n + 1]) << 2 | r[n + 2] >> 6], s += t2[63 & r[n + 2]];
            return o % 3 == 2 ? s = s.substring(0, s.length - 1) + "=" : o % 3 == 1 && (s = s.substring(0, s.length - 2) + "=="), s;
          }, e.decode = function(e2) {
            var n, r, o, s, i, a = 0.75 * e2.length, c = e2.length, h = 0;
            e2[e2.length - 1] === "=" && (a--, e2[e2.length - 2] === "=" && a--);
            var u = new ArrayBuffer(a), p = new Uint8Array(u);
            for (n = 0; n < c; n += 4)
              r = t2.indexOf(e2[n]), o = t2.indexOf(e2[n + 1]), s = t2.indexOf(e2[n + 2]), i = t2.indexOf(e2[n + 3]), p[h++] = r << 2 | o >> 4, p[h++] = (15 & o) << 4 | s >> 2, p[h++] = (3 & s) << 6 | 63 & i;
            return u;
          };
        }("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");
      }, function(t, e, n) {
        const r = n(11), o = n(3), s = /\n/g, i = /\\n/g;
        let a;
        t.exports = class extends r {
          constructor(t2) {
            super(t2), this.query = this.query || {}, a || (a = o.___eio = o.___eio || []), this.index = a.length;
            const e2 = this;
            a.push(function(t3) {
              e2.onData(t3);
            }), this.query.j = this.index;
          }
          get supportsBinary() {
            return false;
          }
          doClose() {
            this.script && (this.script.onerror = () => {
            }, this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), super.doClose();
          }
          doPoll() {
            const t2 = this, e2 = document.createElement("script");
            this.script && (this.script.parentNode.removeChild(this.script), this.script = null), e2.async = true, e2.src = this.uri(), e2.onerror = function(e3) {
              t2.onError("jsonp poll error", e3);
            };
            const n2 = document.getElementsByTagName("script")[0];
            n2 ? n2.parentNode.insertBefore(e2, n2) : (document.head || document.body).appendChild(e2), this.script = e2;
            typeof navigator != "undefined" && /gecko/i.test(navigator.userAgent) && setTimeout(function() {
              const t3 = document.createElement("iframe");
              document.body.appendChild(t3), document.body.removeChild(t3);
            }, 100);
          }
          doWrite(t2, e2) {
            const n2 = this;
            let r2;
            if (!this.form) {
              const t3 = document.createElement("form"), e3 = document.createElement("textarea"), n3 = this.iframeId = "eio_iframe_" + this.index;
              t3.className = "socketio", t3.style.position = "absolute", t3.style.top = "-1000px", t3.style.left = "-1000px", t3.target = n3, t3.method = "POST", t3.setAttribute("accept-charset", "utf-8"), e3.name = "d", t3.appendChild(e3), document.body.appendChild(t3), this.form = t3, this.area = e3;
            }
            function o2() {
              a2(), e2();
            }
            function a2() {
              if (n2.iframe)
                try {
                  n2.form.removeChild(n2.iframe);
                } catch (t3) {
                  n2.onError("jsonp polling iframe removal error", t3);
                }
              try {
                const t3 = '<iframe src="javascript:0" name="' + n2.iframeId + '">';
                r2 = document.createElement(t3);
              } catch (t3) {
                r2 = document.createElement("iframe"), r2.name = n2.iframeId, r2.src = "javascript:0";
              }
              r2.id = n2.iframeId, n2.form.appendChild(r2), n2.iframe = r2;
            }
            this.form.action = this.uri(), a2(), t2 = t2.replace(i, "\\\n"), this.area.value = t2.replace(s, "\\n");
            try {
              this.form.submit();
            } catch (t3) {
            }
            this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
              n2.iframe.readyState === "complete" && o2();
            } : this.iframe.onload = o2;
          }
        };
      }, function(t, e, n) {
        (function(e2) {
          const r = n(2), o = n(5), s = n(13), i = n(4), { pick: a } = n(14), c = n(3), h = n(0)("engine.io-client:websocket");
          let u = c.WebSocket || c.MozWebSocket, p = true, f = "arraybuffer";
          typeof window == "undefined" && (u = n(35), p = false, f = "nodebuffer");
          const l = typeof navigator != "undefined" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
          class d extends i {
            constructor(t2) {
              super(t2), this.supportsBinary = !t2.forceBase64;
            }
            get name() {
              return "websocket";
            }
            doOpen() {
              if (!this.check())
                return;
              const t2 = this.uri(), e3 = this.opts.protocols, n2 = l ? {} : a(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
              this.opts.extraHeaders && (n2.headers = this.opts.extraHeaders);
              try {
                this.ws = p && !l ? e3 ? new u(t2, e3) : new u(t2) : new u(t2, e3, n2);
              } catch (t3) {
                return console.log("error", t3), this.emit("error", t3);
              }
              this.ws.binaryType = this.socket.binaryType || f, this.addEventListeners();
            }
            addEventListeners() {
              this.ws.onopen = () => {
                this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
              }, this.ws.onclose = this.onClose.bind(this), this.ws.onmessage = (t2) => this.onData(t2.data), this.ws.onerror = (t2) => this.onError("websocket error", t2);
            }
            write(t2) {
              const n2 = this;
              this.writable = false;
              let o2 = t2.length, s2 = 0;
              const i2 = o2;
              for (; s2 < i2; s2++)
                !function(t3) {
                  r.encodePacket(t3, n2.supportsBinary, function(r2) {
                    const s3 = {};
                    if (!p && (t3.options && (s3.compress = t3.options.compress), n2.opts.perMessageDeflate)) {
                      (typeof r2 == "string" ? e2.byteLength(r2) : r2.length) < n2.opts.perMessageDeflate.threshold && (s3.compress = false);
                    }
                    try {
                      p ? n2.ws.send(r2) : n2.ws.send(r2, s3);
                    } catch (t4) {
                      h("websocket closed before onclose event");
                    }
                    --o2 || a2();
                  });
                }(t2[s2]);
              function a2() {
                n2.emit("flush"), setTimeout(function() {
                  n2.writable = true, n2.emit("drain");
                }, 0);
              }
            }
            onClose() {
              i.prototype.onClose.call(this);
            }
            doClose() {
              this.ws !== void 0 && (this.ws.close(), this.ws = null);
            }
            uri() {
              let t2 = this.query || {};
              const e3 = this.opts.secure ? "wss" : "ws";
              let n2 = "";
              this.opts.port && (e3 === "wss" && Number(this.opts.port) !== 443 || e3 === "ws" && Number(this.opts.port) !== 80) && (n2 = ":" + this.opts.port), this.opts.timestampRequests && (t2[this.opts.timestampParam] = s()), this.supportsBinary || (t2.b64 = 1), t2 = o.encode(t2), t2.length && (t2 = "?" + t2);
              return e3 + "://" + (this.opts.hostname.indexOf(":") !== -1 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + n2 + this.opts.path + t2;
            }
            check() {
              return !(!u || "__initialize" in u && this.name === d.prototype.name);
            }
          }
          t.exports = d;
        }).call(this, n(30).Buffer);
      }, function(t, e, n) {
        "use strict";
        (function(t2) {
          var r = n(32), o = n(33), s = n(34);
          function i() {
            return c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
          }
          function a(t3, e2) {
            if (i() < e2)
              throw new RangeError("Invalid typed array length");
            return c.TYPED_ARRAY_SUPPORT ? (t3 = new Uint8Array(e2)).__proto__ = c.prototype : (t3 === null && (t3 = new c(e2)), t3.length = e2), t3;
          }
          function c(t3, e2, n2) {
            if (!(c.TYPED_ARRAY_SUPPORT || this instanceof c))
              return new c(t3, e2, n2);
            if (typeof t3 == "number") {
              if (typeof e2 == "string")
                throw new Error("If encoding is specified then the first argument must be a string");
              return p(this, t3);
            }
            return h(this, t3, e2, n2);
          }
          function h(t3, e2, n2, r2) {
            if (typeof e2 == "number")
              throw new TypeError('"value" argument must not be a number');
            return typeof ArrayBuffer != "undefined" && e2 instanceof ArrayBuffer ? function(t4, e3, n3, r3) {
              if (e3.byteLength, n3 < 0 || e3.byteLength < n3)
                throw new RangeError("'offset' is out of bounds");
              if (e3.byteLength < n3 + (r3 || 0))
                throw new RangeError("'length' is out of bounds");
              e3 = n3 === void 0 && r3 === void 0 ? new Uint8Array(e3) : r3 === void 0 ? new Uint8Array(e3, n3) : new Uint8Array(e3, n3, r3);
              c.TYPED_ARRAY_SUPPORT ? (t4 = e3).__proto__ = c.prototype : t4 = f(t4, e3);
              return t4;
            }(t3, e2, n2, r2) : typeof e2 == "string" ? function(t4, e3, n3) {
              typeof n3 == "string" && n3 !== "" || (n3 = "utf8");
              if (!c.isEncoding(n3))
                throw new TypeError('"encoding" must be a valid string encoding');
              var r3 = 0 | d(e3, n3), o2 = (t4 = a(t4, r3)).write(e3, n3);
              o2 !== r3 && (t4 = t4.slice(0, o2));
              return t4;
            }(t3, e2, n2) : function(t4, e3) {
              if (c.isBuffer(e3)) {
                var n3 = 0 | l(e3.length);
                return (t4 = a(t4, n3)).length === 0 || e3.copy(t4, 0, 0, n3), t4;
              }
              if (e3) {
                if (typeof ArrayBuffer != "undefined" && e3.buffer instanceof ArrayBuffer || "length" in e3)
                  return typeof e3.length != "number" || (r3 = e3.length) != r3 ? a(t4, 0) : f(t4, e3);
                if (e3.type === "Buffer" && s(e3.data))
                  return f(t4, e3.data);
              }
              var r3;
              throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
            }(t3, e2);
          }
          function u(t3) {
            if (typeof t3 != "number")
              throw new TypeError('"size" argument must be a number');
            if (t3 < 0)
              throw new RangeError('"size" argument must not be negative');
          }
          function p(t3, e2) {
            if (u(e2), t3 = a(t3, e2 < 0 ? 0 : 0 | l(e2)), !c.TYPED_ARRAY_SUPPORT)
              for (var n2 = 0; n2 < e2; ++n2)
                t3[n2] = 0;
            return t3;
          }
          function f(t3, e2) {
            var n2 = e2.length < 0 ? 0 : 0 | l(e2.length);
            t3 = a(t3, n2);
            for (var r2 = 0; r2 < n2; r2 += 1)
              t3[r2] = 255 & e2[r2];
            return t3;
          }
          function l(t3) {
            if (t3 >= i())
              throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i().toString(16) + " bytes");
            return 0 | t3;
          }
          function d(t3, e2) {
            if (c.isBuffer(t3))
              return t3.length;
            if (typeof ArrayBuffer != "undefined" && typeof ArrayBuffer.isView == "function" && (ArrayBuffer.isView(t3) || t3 instanceof ArrayBuffer))
              return t3.byteLength;
            typeof t3 != "string" && (t3 = "" + t3);
            var n2 = t3.length;
            if (n2 === 0)
              return 0;
            for (var r2 = false; ; )
              switch (e2) {
                case "ascii":
                case "latin1":
                case "binary":
                  return n2;
                case "utf8":
                case "utf-8":
                case void 0:
                  return Y(t3).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return 2 * n2;
                case "hex":
                  return n2 >>> 1;
                case "base64":
                  return q(t3).length;
                default:
                  if (r2)
                    return Y(t3).length;
                  e2 = ("" + e2).toLowerCase(), r2 = true;
              }
          }
          function y(t3, e2, n2) {
            var r2 = false;
            if ((e2 === void 0 || e2 < 0) && (e2 = 0), e2 > this.length)
              return "";
            if ((n2 === void 0 || n2 > this.length) && (n2 = this.length), n2 <= 0)
              return "";
            if ((n2 >>>= 0) <= (e2 >>>= 0))
              return "";
            for (t3 || (t3 = "utf8"); ; )
              switch (t3) {
                case "hex":
                  return C(this, e2, n2);
                case "utf8":
                case "utf-8":
                  return x(this, e2, n2);
                case "ascii":
                  return S(this, e2, n2);
                case "latin1":
                case "binary":
                  return P(this, e2, n2);
                case "base64":
                  return T(this, e2, n2);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return R(this, e2, n2);
                default:
                  if (r2)
                    throw new TypeError("Unknown encoding: " + t3);
                  t3 = (t3 + "").toLowerCase(), r2 = true;
              }
          }
          function g(t3, e2, n2) {
            var r2 = t3[e2];
            t3[e2] = t3[n2], t3[n2] = r2;
          }
          function m(t3, e2, n2, r2, o2) {
            if (t3.length === 0)
              return -1;
            if (typeof n2 == "string" ? (r2 = n2, n2 = 0) : n2 > 2147483647 ? n2 = 2147483647 : n2 < -2147483648 && (n2 = -2147483648), n2 = +n2, isNaN(n2) && (n2 = o2 ? 0 : t3.length - 1), n2 < 0 && (n2 = t3.length + n2), n2 >= t3.length) {
              if (o2)
                return -1;
              n2 = t3.length - 1;
            } else if (n2 < 0) {
              if (!o2)
                return -1;
              n2 = 0;
            }
            if (typeof e2 == "string" && (e2 = c.from(e2, r2)), c.isBuffer(e2))
              return e2.length === 0 ? -1 : v(t3, e2, n2, r2, o2);
            if (typeof e2 == "number")
              return e2 &= 255, c.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf == "function" ? o2 ? Uint8Array.prototype.indexOf.call(t3, e2, n2) : Uint8Array.prototype.lastIndexOf.call(t3, e2, n2) : v(t3, [e2], n2, r2, o2);
            throw new TypeError("val must be string, number or Buffer");
          }
          function v(t3, e2, n2, r2, o2) {
            var s2, i2 = 1, a2 = t3.length, c2 = e2.length;
            if (r2 !== void 0 && ((r2 = String(r2).toLowerCase()) === "ucs2" || r2 === "ucs-2" || r2 === "utf16le" || r2 === "utf-16le")) {
              if (t3.length < 2 || e2.length < 2)
                return -1;
              i2 = 2, a2 /= 2, c2 /= 2, n2 /= 2;
            }
            function h2(t4, e3) {
              return i2 === 1 ? t4[e3] : t4.readUInt16BE(e3 * i2);
            }
            if (o2) {
              var u2 = -1;
              for (s2 = n2; s2 < a2; s2++)
                if (h2(t3, s2) === h2(e2, u2 === -1 ? 0 : s2 - u2)) {
                  if (u2 === -1 && (u2 = s2), s2 - u2 + 1 === c2)
                    return u2 * i2;
                } else
                  u2 !== -1 && (s2 -= s2 - u2), u2 = -1;
            } else
              for (n2 + c2 > a2 && (n2 = a2 - c2), s2 = n2; s2 >= 0; s2--) {
                for (var p2 = true, f2 = 0; f2 < c2; f2++)
                  if (h2(t3, s2 + f2) !== h2(e2, f2)) {
                    p2 = false;
                    break;
                  }
                if (p2)
                  return s2;
              }
            return -1;
          }
          function b(t3, e2, n2, r2) {
            n2 = Number(n2) || 0;
            var o2 = t3.length - n2;
            r2 ? (r2 = Number(r2)) > o2 && (r2 = o2) : r2 = o2;
            var s2 = e2.length;
            if (s2 % 2 != 0)
              throw new TypeError("Invalid hex string");
            r2 > s2 / 2 && (r2 = s2 / 2);
            for (var i2 = 0; i2 < r2; ++i2) {
              var a2 = parseInt(e2.substr(2 * i2, 2), 16);
              if (isNaN(a2))
                return i2;
              t3[n2 + i2] = a2;
            }
            return i2;
          }
          function w(t3, e2, n2, r2) {
            return F(Y(e2, t3.length - n2), t3, n2, r2);
          }
          function _(t3, e2, n2, r2) {
            return F(function(t4) {
              for (var e3 = [], n3 = 0; n3 < t4.length; ++n3)
                e3.push(255 & t4.charCodeAt(n3));
              return e3;
            }(e2), t3, n2, r2);
          }
          function E(t3, e2, n2, r2) {
            return _(t3, e2, n2, r2);
          }
          function k(t3, e2, n2, r2) {
            return F(q(e2), t3, n2, r2);
          }
          function A(t3, e2, n2, r2) {
            return F(function(t4, e3) {
              for (var n3, r3, o2, s2 = [], i2 = 0; i2 < t4.length && !((e3 -= 2) < 0); ++i2)
                n3 = t4.charCodeAt(i2), r3 = n3 >> 8, o2 = n3 % 256, s2.push(o2), s2.push(r3);
              return s2;
            }(e2, t3.length - n2), t3, n2, r2);
          }
          function T(t3, e2, n2) {
            return e2 === 0 && n2 === t3.length ? r.fromByteArray(t3) : r.fromByteArray(t3.slice(e2, n2));
          }
          function x(t3, e2, n2) {
            n2 = Math.min(t3.length, n2);
            for (var r2 = [], o2 = e2; o2 < n2; ) {
              var s2, i2, a2, c2, h2 = t3[o2], u2 = null, p2 = h2 > 239 ? 4 : h2 > 223 ? 3 : h2 > 191 ? 2 : 1;
              if (o2 + p2 <= n2)
                switch (p2) {
                  case 1:
                    h2 < 128 && (u2 = h2);
                    break;
                  case 2:
                    (192 & (s2 = t3[o2 + 1])) == 128 && (c2 = (31 & h2) << 6 | 63 & s2) > 127 && (u2 = c2);
                    break;
                  case 3:
                    s2 = t3[o2 + 1], i2 = t3[o2 + 2], (192 & s2) == 128 && (192 & i2) == 128 && (c2 = (15 & h2) << 12 | (63 & s2) << 6 | 63 & i2) > 2047 && (c2 < 55296 || c2 > 57343) && (u2 = c2);
                    break;
                  case 4:
                    s2 = t3[o2 + 1], i2 = t3[o2 + 2], a2 = t3[o2 + 3], (192 & s2) == 128 && (192 & i2) == 128 && (192 & a2) == 128 && (c2 = (15 & h2) << 18 | (63 & s2) << 12 | (63 & i2) << 6 | 63 & a2) > 65535 && c2 < 1114112 && (u2 = c2);
                }
              u2 === null ? (u2 = 65533, p2 = 1) : u2 > 65535 && (u2 -= 65536, r2.push(u2 >>> 10 & 1023 | 55296), u2 = 56320 | 1023 & u2), r2.push(u2), o2 += p2;
            }
            return function(t4) {
              var e3 = t4.length;
              if (e3 <= 4096)
                return String.fromCharCode.apply(String, t4);
              var n3 = "", r3 = 0;
              for (; r3 < e3; )
                n3 += String.fromCharCode.apply(String, t4.slice(r3, r3 += 4096));
              return n3;
            }(r2);
          }
          e.Buffer = c, e.SlowBuffer = function(t3) {
            +t3 != t3 && (t3 = 0);
            return c.alloc(+t3);
          }, e.INSPECT_MAX_BYTES = 50, c.TYPED_ARRAY_SUPPORT = t2.TYPED_ARRAY_SUPPORT !== void 0 ? t2.TYPED_ARRAY_SUPPORT : function() {
            try {
              var t3 = new Uint8Array(1);
              return t3.__proto__ = { __proto__: Uint8Array.prototype, foo: function() {
                return 42;
              } }, t3.foo() === 42 && typeof t3.subarray == "function" && t3.subarray(1, 1).byteLength === 0;
            } catch (t4) {
              return false;
            }
          }(), e.kMaxLength = i(), c.poolSize = 8192, c._augment = function(t3) {
            return t3.__proto__ = c.prototype, t3;
          }, c.from = function(t3, e2, n2) {
            return h(null, t3, e2, n2);
          }, c.TYPED_ARRAY_SUPPORT && (c.prototype.__proto__ = Uint8Array.prototype, c.__proto__ = Uint8Array, typeof Symbol != "undefined" && Symbol.species && c[Symbol.species] === c && Object.defineProperty(c, Symbol.species, { value: null, configurable: true })), c.alloc = function(t3, e2, n2) {
            return function(t4, e3, n3, r2) {
              return u(e3), e3 <= 0 ? a(t4, e3) : n3 !== void 0 ? typeof r2 == "string" ? a(t4, e3).fill(n3, r2) : a(t4, e3).fill(n3) : a(t4, e3);
            }(null, t3, e2, n2);
          }, c.allocUnsafe = function(t3) {
            return p(null, t3);
          }, c.allocUnsafeSlow = function(t3) {
            return p(null, t3);
          }, c.isBuffer = function(t3) {
            return !(t3 == null || !t3._isBuffer);
          }, c.compare = function(t3, e2) {
            if (!c.isBuffer(t3) || !c.isBuffer(e2))
              throw new TypeError("Arguments must be Buffers");
            if (t3 === e2)
              return 0;
            for (var n2 = t3.length, r2 = e2.length, o2 = 0, s2 = Math.min(n2, r2); o2 < s2; ++o2)
              if (t3[o2] !== e2[o2]) {
                n2 = t3[o2], r2 = e2[o2];
                break;
              }
            return n2 < r2 ? -1 : r2 < n2 ? 1 : 0;
          }, c.isEncoding = function(t3) {
            switch (String(t3).toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "latin1":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return true;
              default:
                return false;
            }
          }, c.concat = function(t3, e2) {
            if (!s(t3))
              throw new TypeError('"list" argument must be an Array of Buffers');
            if (t3.length === 0)
              return c.alloc(0);
            var n2;
            if (e2 === void 0)
              for (e2 = 0, n2 = 0; n2 < t3.length; ++n2)
                e2 += t3[n2].length;
            var r2 = c.allocUnsafe(e2), o2 = 0;
            for (n2 = 0; n2 < t3.length; ++n2) {
              var i2 = t3[n2];
              if (!c.isBuffer(i2))
                throw new TypeError('"list" argument must be an Array of Buffers');
              i2.copy(r2, o2), o2 += i2.length;
            }
            return r2;
          }, c.byteLength = d, c.prototype._isBuffer = true, c.prototype.swap16 = function() {
            var t3 = this.length;
            if (t3 % 2 != 0)
              throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var e2 = 0; e2 < t3; e2 += 2)
              g(this, e2, e2 + 1);
            return this;
          }, c.prototype.swap32 = function() {
            var t3 = this.length;
            if (t3 % 4 != 0)
              throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var e2 = 0; e2 < t3; e2 += 4)
              g(this, e2, e2 + 3), g(this, e2 + 1, e2 + 2);
            return this;
          }, c.prototype.swap64 = function() {
            var t3 = this.length;
            if (t3 % 8 != 0)
              throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var e2 = 0; e2 < t3; e2 += 8)
              g(this, e2, e2 + 7), g(this, e2 + 1, e2 + 6), g(this, e2 + 2, e2 + 5), g(this, e2 + 3, e2 + 4);
            return this;
          }, c.prototype.toString = function() {
            var t3 = 0 | this.length;
            return t3 === 0 ? "" : arguments.length === 0 ? x(this, 0, t3) : y.apply(this, arguments);
          }, c.prototype.equals = function(t3) {
            if (!c.isBuffer(t3))
              throw new TypeError("Argument must be a Buffer");
            return this === t3 || c.compare(this, t3) === 0;
          }, c.prototype.inspect = function() {
            var t3 = "", n2 = e.INSPECT_MAX_BYTES;
            return this.length > 0 && (t3 = this.toString("hex", 0, n2).match(/.{2}/g).join(" "), this.length > n2 && (t3 += " ... ")), "<Buffer " + t3 + ">";
          }, c.prototype.compare = function(t3, e2, n2, r2, o2) {
            if (!c.isBuffer(t3))
              throw new TypeError("Argument must be a Buffer");
            if (e2 === void 0 && (e2 = 0), n2 === void 0 && (n2 = t3 ? t3.length : 0), r2 === void 0 && (r2 = 0), o2 === void 0 && (o2 = this.length), e2 < 0 || n2 > t3.length || r2 < 0 || o2 > this.length)
              throw new RangeError("out of range index");
            if (r2 >= o2 && e2 >= n2)
              return 0;
            if (r2 >= o2)
              return -1;
            if (e2 >= n2)
              return 1;
            if (this === t3)
              return 0;
            for (var s2 = (o2 >>>= 0) - (r2 >>>= 0), i2 = (n2 >>>= 0) - (e2 >>>= 0), a2 = Math.min(s2, i2), h2 = this.slice(r2, o2), u2 = t3.slice(e2, n2), p2 = 0; p2 < a2; ++p2)
              if (h2[p2] !== u2[p2]) {
                s2 = h2[p2], i2 = u2[p2];
                break;
              }
            return s2 < i2 ? -1 : i2 < s2 ? 1 : 0;
          }, c.prototype.includes = function(t3, e2, n2) {
            return this.indexOf(t3, e2, n2) !== -1;
          }, c.prototype.indexOf = function(t3, e2, n2) {
            return m(this, t3, e2, n2, true);
          }, c.prototype.lastIndexOf = function(t3, e2, n2) {
            return m(this, t3, e2, n2, false);
          }, c.prototype.write = function(t3, e2, n2, r2) {
            if (e2 === void 0)
              r2 = "utf8", n2 = this.length, e2 = 0;
            else if (n2 === void 0 && typeof e2 == "string")
              r2 = e2, n2 = this.length, e2 = 0;
            else {
              if (!isFinite(e2))
                throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
              e2 |= 0, isFinite(n2) ? (n2 |= 0, r2 === void 0 && (r2 = "utf8")) : (r2 = n2, n2 = void 0);
            }
            var o2 = this.length - e2;
            if ((n2 === void 0 || n2 > o2) && (n2 = o2), t3.length > 0 && (n2 < 0 || e2 < 0) || e2 > this.length)
              throw new RangeError("Attempt to write outside buffer bounds");
            r2 || (r2 = "utf8");
            for (var s2 = false; ; )
              switch (r2) {
                case "hex":
                  return b(this, t3, e2, n2);
                case "utf8":
                case "utf-8":
                  return w(this, t3, e2, n2);
                case "ascii":
                  return _(this, t3, e2, n2);
                case "latin1":
                case "binary":
                  return E(this, t3, e2, n2);
                case "base64":
                  return k(this, t3, e2, n2);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return A(this, t3, e2, n2);
                default:
                  if (s2)
                    throw new TypeError("Unknown encoding: " + r2);
                  r2 = ("" + r2).toLowerCase(), s2 = true;
              }
          }, c.prototype.toJSON = function() {
            return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
          };
          function S(t3, e2, n2) {
            var r2 = "";
            n2 = Math.min(t3.length, n2);
            for (var o2 = e2; o2 < n2; ++o2)
              r2 += String.fromCharCode(127 & t3[o2]);
            return r2;
          }
          function P(t3, e2, n2) {
            var r2 = "";
            n2 = Math.min(t3.length, n2);
            for (var o2 = e2; o2 < n2; ++o2)
              r2 += String.fromCharCode(t3[o2]);
            return r2;
          }
          function C(t3, e2, n2) {
            var r2 = t3.length;
            (!e2 || e2 < 0) && (e2 = 0), (!n2 || n2 < 0 || n2 > r2) && (n2 = r2);
            for (var o2 = "", s2 = e2; s2 < n2; ++s2)
              o2 += D(t3[s2]);
            return o2;
          }
          function R(t3, e2, n2) {
            for (var r2 = t3.slice(e2, n2), o2 = "", s2 = 0; s2 < r2.length; s2 += 2)
              o2 += String.fromCharCode(r2[s2] + 256 * r2[s2 + 1]);
            return o2;
          }
          function O(t3, e2, n2) {
            if (t3 % 1 != 0 || t3 < 0)
              throw new RangeError("offset is not uint");
            if (t3 + e2 > n2)
              throw new RangeError("Trying to access beyond buffer length");
          }
          function B(t3, e2, n2, r2, o2, s2) {
            if (!c.isBuffer(t3))
              throw new TypeError('"buffer" argument must be a Buffer instance');
            if (e2 > o2 || e2 < s2)
              throw new RangeError('"value" argument is out of bounds');
            if (n2 + r2 > t3.length)
              throw new RangeError("Index out of range");
          }
          function L(t3, e2, n2, r2) {
            e2 < 0 && (e2 = 65535 + e2 + 1);
            for (var o2 = 0, s2 = Math.min(t3.length - n2, 2); o2 < s2; ++o2)
              t3[n2 + o2] = (e2 & 255 << 8 * (r2 ? o2 : 1 - o2)) >>> 8 * (r2 ? o2 : 1 - o2);
          }
          function N(t3, e2, n2, r2) {
            e2 < 0 && (e2 = 4294967295 + e2 + 1);
            for (var o2 = 0, s2 = Math.min(t3.length - n2, 4); o2 < s2; ++o2)
              t3[n2 + o2] = e2 >>> 8 * (r2 ? o2 : 3 - o2) & 255;
          }
          function j(t3, e2, n2, r2, o2, s2) {
            if (n2 + r2 > t3.length)
              throw new RangeError("Index out of range");
            if (n2 < 0)
              throw new RangeError("Index out of range");
          }
          function I(t3, e2, n2, r2, s2) {
            return s2 || j(t3, 0, n2, 4), o.write(t3, e2, n2, r2, 23, 4), n2 + 4;
          }
          function M(t3, e2, n2, r2, s2) {
            return s2 || j(t3, 0, n2, 8), o.write(t3, e2, n2, r2, 52, 8), n2 + 8;
          }
          c.prototype.slice = function(t3, e2) {
            var n2, r2 = this.length;
            if ((t3 = ~~t3) < 0 ? (t3 += r2) < 0 && (t3 = 0) : t3 > r2 && (t3 = r2), (e2 = e2 === void 0 ? r2 : ~~e2) < 0 ? (e2 += r2) < 0 && (e2 = 0) : e2 > r2 && (e2 = r2), e2 < t3 && (e2 = t3), c.TYPED_ARRAY_SUPPORT)
              (n2 = this.subarray(t3, e2)).__proto__ = c.prototype;
            else {
              var o2 = e2 - t3;
              n2 = new c(o2, void 0);
              for (var s2 = 0; s2 < o2; ++s2)
                n2[s2] = this[s2 + t3];
            }
            return n2;
          }, c.prototype.readUIntLE = function(t3, e2, n2) {
            t3 |= 0, e2 |= 0, n2 || O(t3, e2, this.length);
            for (var r2 = this[t3], o2 = 1, s2 = 0; ++s2 < e2 && (o2 *= 256); )
              r2 += this[t3 + s2] * o2;
            return r2;
          }, c.prototype.readUIntBE = function(t3, e2, n2) {
            t3 |= 0, e2 |= 0, n2 || O(t3, e2, this.length);
            for (var r2 = this[t3 + --e2], o2 = 1; e2 > 0 && (o2 *= 256); )
              r2 += this[t3 + --e2] * o2;
            return r2;
          }, c.prototype.readUInt8 = function(t3, e2) {
            return e2 || O(t3, 1, this.length), this[t3];
          }, c.prototype.readUInt16LE = function(t3, e2) {
            return e2 || O(t3, 2, this.length), this[t3] | this[t3 + 1] << 8;
          }, c.prototype.readUInt16BE = function(t3, e2) {
            return e2 || O(t3, 2, this.length), this[t3] << 8 | this[t3 + 1];
          }, c.prototype.readUInt32LE = function(t3, e2) {
            return e2 || O(t3, 4, this.length), (this[t3] | this[t3 + 1] << 8 | this[t3 + 2] << 16) + 16777216 * this[t3 + 3];
          }, c.prototype.readUInt32BE = function(t3, e2) {
            return e2 || O(t3, 4, this.length), 16777216 * this[t3] + (this[t3 + 1] << 16 | this[t3 + 2] << 8 | this[t3 + 3]);
          }, c.prototype.readIntLE = function(t3, e2, n2) {
            t3 |= 0, e2 |= 0, n2 || O(t3, e2, this.length);
            for (var r2 = this[t3], o2 = 1, s2 = 0; ++s2 < e2 && (o2 *= 256); )
              r2 += this[t3 + s2] * o2;
            return r2 >= (o2 *= 128) && (r2 -= Math.pow(2, 8 * e2)), r2;
          }, c.prototype.readIntBE = function(t3, e2, n2) {
            t3 |= 0, e2 |= 0, n2 || O(t3, e2, this.length);
            for (var r2 = e2, o2 = 1, s2 = this[t3 + --r2]; r2 > 0 && (o2 *= 256); )
              s2 += this[t3 + --r2] * o2;
            return s2 >= (o2 *= 128) && (s2 -= Math.pow(2, 8 * e2)), s2;
          }, c.prototype.readInt8 = function(t3, e2) {
            return e2 || O(t3, 1, this.length), 128 & this[t3] ? -1 * (255 - this[t3] + 1) : this[t3];
          }, c.prototype.readInt16LE = function(t3, e2) {
            e2 || O(t3, 2, this.length);
            var n2 = this[t3] | this[t3 + 1] << 8;
            return 32768 & n2 ? 4294901760 | n2 : n2;
          }, c.prototype.readInt16BE = function(t3, e2) {
            e2 || O(t3, 2, this.length);
            var n2 = this[t3 + 1] | this[t3] << 8;
            return 32768 & n2 ? 4294901760 | n2 : n2;
          }, c.prototype.readInt32LE = function(t3, e2) {
            return e2 || O(t3, 4, this.length), this[t3] | this[t3 + 1] << 8 | this[t3 + 2] << 16 | this[t3 + 3] << 24;
          }, c.prototype.readInt32BE = function(t3, e2) {
            return e2 || O(t3, 4, this.length), this[t3] << 24 | this[t3 + 1] << 16 | this[t3 + 2] << 8 | this[t3 + 3];
          }, c.prototype.readFloatLE = function(t3, e2) {
            return e2 || O(t3, 4, this.length), o.read(this, t3, true, 23, 4);
          }, c.prototype.readFloatBE = function(t3, e2) {
            return e2 || O(t3, 4, this.length), o.read(this, t3, false, 23, 4);
          }, c.prototype.readDoubleLE = function(t3, e2) {
            return e2 || O(t3, 8, this.length), o.read(this, t3, true, 52, 8);
          }, c.prototype.readDoubleBE = function(t3, e2) {
            return e2 || O(t3, 8, this.length), o.read(this, t3, false, 52, 8);
          }, c.prototype.writeUIntLE = function(t3, e2, n2, r2) {
            (t3 = +t3, e2 |= 0, n2 |= 0, r2) || B(this, t3, e2, n2, Math.pow(2, 8 * n2) - 1, 0);
            var o2 = 1, s2 = 0;
            for (this[e2] = 255 & t3; ++s2 < n2 && (o2 *= 256); )
              this[e2 + s2] = t3 / o2 & 255;
            return e2 + n2;
          }, c.prototype.writeUIntBE = function(t3, e2, n2, r2) {
            (t3 = +t3, e2 |= 0, n2 |= 0, r2) || B(this, t3, e2, n2, Math.pow(2, 8 * n2) - 1, 0);
            var o2 = n2 - 1, s2 = 1;
            for (this[e2 + o2] = 255 & t3; --o2 >= 0 && (s2 *= 256); )
              this[e2 + o2] = t3 / s2 & 255;
            return e2 + n2;
          }, c.prototype.writeUInt8 = function(t3, e2, n2) {
            return t3 = +t3, e2 |= 0, n2 || B(this, t3, e2, 1, 255, 0), c.TYPED_ARRAY_SUPPORT || (t3 = Math.floor(t3)), this[e2] = 255 & t3, e2 + 1;
          }, c.prototype.writeUInt16LE = function(t3, e2, n2) {
            return t3 = +t3, e2 |= 0, n2 || B(this, t3, e2, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[e2] = 255 & t3, this[e2 + 1] = t3 >>> 8) : L(this, t3, e2, true), e2 + 2;
          }, c.prototype.writeUInt16BE = function(t3, e2, n2) {
            return t3 = +t3, e2 |= 0, n2 || B(this, t3, e2, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[e2] = t3 >>> 8, this[e2 + 1] = 255 & t3) : L(this, t3, e2, false), e2 + 2;
          }, c.prototype.writeUInt32LE = function(t3, e2, n2) {
            return t3 = +t3, e2 |= 0, n2 || B(this, t3, e2, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[e2 + 3] = t3 >>> 24, this[e2 + 2] = t3 >>> 16, this[e2 + 1] = t3 >>> 8, this[e2] = 255 & t3) : N(this, t3, e2, true), e2 + 4;
          }, c.prototype.writeUInt32BE = function(t3, e2, n2) {
            return t3 = +t3, e2 |= 0, n2 || B(this, t3, e2, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[e2] = t3 >>> 24, this[e2 + 1] = t3 >>> 16, this[e2 + 2] = t3 >>> 8, this[e2 + 3] = 255 & t3) : N(this, t3, e2, false), e2 + 4;
          }, c.prototype.writeIntLE = function(t3, e2, n2, r2) {
            if (t3 = +t3, e2 |= 0, !r2) {
              var o2 = Math.pow(2, 8 * n2 - 1);
              B(this, t3, e2, n2, o2 - 1, -o2);
            }
            var s2 = 0, i2 = 1, a2 = 0;
            for (this[e2] = 255 & t3; ++s2 < n2 && (i2 *= 256); )
              t3 < 0 && a2 === 0 && this[e2 + s2 - 1] !== 0 && (a2 = 1), this[e2 + s2] = (t3 / i2 >> 0) - a2 & 255;
            return e2 + n2;
          }, c.prototype.writeIntBE = function(t3, e2, n2, r2) {
            if (t3 = +t3, e2 |= 0, !r2) {
              var o2 = Math.pow(2, 8 * n2 - 1);
              B(this, t3, e2, n2, o2 - 1, -o2);
            }
            var s2 = n2 - 1, i2 = 1, a2 = 0;
            for (this[e2 + s2] = 255 & t3; --s2 >= 0 && (i2 *= 256); )
              t3 < 0 && a2 === 0 && this[e2 + s2 + 1] !== 0 && (a2 = 1), this[e2 + s2] = (t3 / i2 >> 0) - a2 & 255;
            return e2 + n2;
          }, c.prototype.writeInt8 = function(t3, e2, n2) {
            return t3 = +t3, e2 |= 0, n2 || B(this, t3, e2, 1, 127, -128), c.TYPED_ARRAY_SUPPORT || (t3 = Math.floor(t3)), t3 < 0 && (t3 = 255 + t3 + 1), this[e2] = 255 & t3, e2 + 1;
          }, c.prototype.writeInt16LE = function(t3, e2, n2) {
            return t3 = +t3, e2 |= 0, n2 || B(this, t3, e2, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[e2] = 255 & t3, this[e2 + 1] = t3 >>> 8) : L(this, t3, e2, true), e2 + 2;
          }, c.prototype.writeInt16BE = function(t3, e2, n2) {
            return t3 = +t3, e2 |= 0, n2 || B(this, t3, e2, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[e2] = t3 >>> 8, this[e2 + 1] = 255 & t3) : L(this, t3, e2, false), e2 + 2;
          }, c.prototype.writeInt32LE = function(t3, e2, n2) {
            return t3 = +t3, e2 |= 0, n2 || B(this, t3, e2, 4, 2147483647, -2147483648), c.TYPED_ARRAY_SUPPORT ? (this[e2] = 255 & t3, this[e2 + 1] = t3 >>> 8, this[e2 + 2] = t3 >>> 16, this[e2 + 3] = t3 >>> 24) : N(this, t3, e2, true), e2 + 4;
          }, c.prototype.writeInt32BE = function(t3, e2, n2) {
            return t3 = +t3, e2 |= 0, n2 || B(this, t3, e2, 4, 2147483647, -2147483648), t3 < 0 && (t3 = 4294967295 + t3 + 1), c.TYPED_ARRAY_SUPPORT ? (this[e2] = t3 >>> 24, this[e2 + 1] = t3 >>> 16, this[e2 + 2] = t3 >>> 8, this[e2 + 3] = 255 & t3) : N(this, t3, e2, false), e2 + 4;
          }, c.prototype.writeFloatLE = function(t3, e2, n2) {
            return I(this, t3, e2, true, n2);
          }, c.prototype.writeFloatBE = function(t3, e2, n2) {
            return I(this, t3, e2, false, n2);
          }, c.prototype.writeDoubleLE = function(t3, e2, n2) {
            return M(this, t3, e2, true, n2);
          }, c.prototype.writeDoubleBE = function(t3, e2, n2) {
            return M(this, t3, e2, false, n2);
          }, c.prototype.copy = function(t3, e2, n2, r2) {
            if (n2 || (n2 = 0), r2 || r2 === 0 || (r2 = this.length), e2 >= t3.length && (e2 = t3.length), e2 || (e2 = 0), r2 > 0 && r2 < n2 && (r2 = n2), r2 === n2)
              return 0;
            if (t3.length === 0 || this.length === 0)
              return 0;
            if (e2 < 0)
              throw new RangeError("targetStart out of bounds");
            if (n2 < 0 || n2 >= this.length)
              throw new RangeError("sourceStart out of bounds");
            if (r2 < 0)
              throw new RangeError("sourceEnd out of bounds");
            r2 > this.length && (r2 = this.length), t3.length - e2 < r2 - n2 && (r2 = t3.length - e2 + n2);
            var o2, s2 = r2 - n2;
            if (this === t3 && n2 < e2 && e2 < r2)
              for (o2 = s2 - 1; o2 >= 0; --o2)
                t3[o2 + e2] = this[o2 + n2];
            else if (s2 < 1e3 || !c.TYPED_ARRAY_SUPPORT)
              for (o2 = 0; o2 < s2; ++o2)
                t3[o2 + e2] = this[o2 + n2];
            else
              Uint8Array.prototype.set.call(t3, this.subarray(n2, n2 + s2), e2);
            return s2;
          }, c.prototype.fill = function(t3, e2, n2, r2) {
            if (typeof t3 == "string") {
              if (typeof e2 == "string" ? (r2 = e2, e2 = 0, n2 = this.length) : typeof n2 == "string" && (r2 = n2, n2 = this.length), t3.length === 1) {
                var o2 = t3.charCodeAt(0);
                o2 < 256 && (t3 = o2);
              }
              if (r2 !== void 0 && typeof r2 != "string")
                throw new TypeError("encoding must be a string");
              if (typeof r2 == "string" && !c.isEncoding(r2))
                throw new TypeError("Unknown encoding: " + r2);
            } else
              typeof t3 == "number" && (t3 &= 255);
            if (e2 < 0 || this.length < e2 || this.length < n2)
              throw new RangeError("Out of range index");
            if (n2 <= e2)
              return this;
            var s2;
            if (e2 >>>= 0, n2 = n2 === void 0 ? this.length : n2 >>> 0, t3 || (t3 = 0), typeof t3 == "number")
              for (s2 = e2; s2 < n2; ++s2)
                this[s2] = t3;
            else {
              var i2 = c.isBuffer(t3) ? t3 : Y(new c(t3, r2).toString()), a2 = i2.length;
              for (s2 = 0; s2 < n2 - e2; ++s2)
                this[s2 + e2] = i2[s2 % a2];
            }
            return this;
          };
          var U = /[^+\/0-9A-Za-z-_]/g;
          function D(t3) {
            return t3 < 16 ? "0" + t3.toString(16) : t3.toString(16);
          }
          function Y(t3, e2) {
            var n2;
            e2 = e2 || 1 / 0;
            for (var r2 = t3.length, o2 = null, s2 = [], i2 = 0; i2 < r2; ++i2) {
              if ((n2 = t3.charCodeAt(i2)) > 55295 && n2 < 57344) {
                if (!o2) {
                  if (n2 > 56319) {
                    (e2 -= 3) > -1 && s2.push(239, 191, 189);
                    continue;
                  }
                  if (i2 + 1 === r2) {
                    (e2 -= 3) > -1 && s2.push(239, 191, 189);
                    continue;
                  }
                  o2 = n2;
                  continue;
                }
                if (n2 < 56320) {
                  (e2 -= 3) > -1 && s2.push(239, 191, 189), o2 = n2;
                  continue;
                }
                n2 = 65536 + (o2 - 55296 << 10 | n2 - 56320);
              } else
                o2 && (e2 -= 3) > -1 && s2.push(239, 191, 189);
              if (o2 = null, n2 < 128) {
                if ((e2 -= 1) < 0)
                  break;
                s2.push(n2);
              } else if (n2 < 2048) {
                if ((e2 -= 2) < 0)
                  break;
                s2.push(n2 >> 6 | 192, 63 & n2 | 128);
              } else if (n2 < 65536) {
                if ((e2 -= 3) < 0)
                  break;
                s2.push(n2 >> 12 | 224, n2 >> 6 & 63 | 128, 63 & n2 | 128);
              } else {
                if (!(n2 < 1114112))
                  throw new Error("Invalid code point");
                if ((e2 -= 4) < 0)
                  break;
                s2.push(n2 >> 18 | 240, n2 >> 12 & 63 | 128, n2 >> 6 & 63 | 128, 63 & n2 | 128);
              }
            }
            return s2;
          }
          function q(t3) {
            return r.toByteArray(function(t4) {
              if ((t4 = function(t5) {
                return t5.trim ? t5.trim() : t5.replace(/^\s+|\s+$/g, "");
              }(t4).replace(U, "")).length < 2)
                return "";
              for (; t4.length % 4 != 0; )
                t4 += "=";
              return t4;
            }(t3));
          }
          function F(t3, e2, n2, r2) {
            for (var o2 = 0; o2 < r2 && !(o2 + n2 >= e2.length || o2 >= t3.length); ++o2)
              e2[o2 + n2] = t3[o2];
            return o2;
          }
        }).call(this, n(31));
      }, function(t, e) {
        var n;
        n = function() {
          return this;
        }();
        try {
          n = n || new Function("return this")();
        } catch (t2) {
          typeof window == "object" && (n = window);
        }
        t.exports = n;
      }, function(t, e, n) {
        "use strict";
        e.byteLength = function(t2) {
          var e2 = h(t2), n2 = e2[0], r2 = e2[1];
          return 3 * (n2 + r2) / 4 - r2;
        }, e.toByteArray = function(t2) {
          var e2, n2, r2 = h(t2), i2 = r2[0], a2 = r2[1], c2 = new s(function(t3, e3, n3) {
            return 3 * (e3 + n3) / 4 - n3;
          }(0, i2, a2)), u2 = 0, p = a2 > 0 ? i2 - 4 : i2;
          for (n2 = 0; n2 < p; n2 += 4)
            e2 = o[t2.charCodeAt(n2)] << 18 | o[t2.charCodeAt(n2 + 1)] << 12 | o[t2.charCodeAt(n2 + 2)] << 6 | o[t2.charCodeAt(n2 + 3)], c2[u2++] = e2 >> 16 & 255, c2[u2++] = e2 >> 8 & 255, c2[u2++] = 255 & e2;
          a2 === 2 && (e2 = o[t2.charCodeAt(n2)] << 2 | o[t2.charCodeAt(n2 + 1)] >> 4, c2[u2++] = 255 & e2);
          a2 === 1 && (e2 = o[t2.charCodeAt(n2)] << 10 | o[t2.charCodeAt(n2 + 1)] << 4 | o[t2.charCodeAt(n2 + 2)] >> 2, c2[u2++] = e2 >> 8 & 255, c2[u2++] = 255 & e2);
          return c2;
        }, e.fromByteArray = function(t2) {
          for (var e2, n2 = t2.length, o2 = n2 % 3, s2 = [], i2 = 0, a2 = n2 - o2; i2 < a2; i2 += 16383)
            s2.push(u(t2, i2, i2 + 16383 > a2 ? a2 : i2 + 16383));
          o2 === 1 ? (e2 = t2[n2 - 1], s2.push(r[e2 >> 2] + r[e2 << 4 & 63] + "==")) : o2 === 2 && (e2 = (t2[n2 - 2] << 8) + t2[n2 - 1], s2.push(r[e2 >> 10] + r[e2 >> 4 & 63] + r[e2 << 2 & 63] + "="));
          return s2.join("");
        };
        for (var r = [], o = [], s = typeof Uint8Array != "undefined" ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, c = i.length; a < c; ++a)
          r[a] = i[a], o[i.charCodeAt(a)] = a;
        function h(t2) {
          var e2 = t2.length;
          if (e2 % 4 > 0)
            throw new Error("Invalid string. Length must be a multiple of 4");
          var n2 = t2.indexOf("=");
          return n2 === -1 && (n2 = e2), [n2, n2 === e2 ? 0 : 4 - n2 % 4];
        }
        function u(t2, e2, n2) {
          for (var o2, s2, i2 = [], a2 = e2; a2 < n2; a2 += 3)
            o2 = (t2[a2] << 16 & 16711680) + (t2[a2 + 1] << 8 & 65280) + (255 & t2[a2 + 2]), i2.push(r[(s2 = o2) >> 18 & 63] + r[s2 >> 12 & 63] + r[s2 >> 6 & 63] + r[63 & s2]);
          return i2.join("");
        }
        o["-".charCodeAt(0)] = 62, o["_".charCodeAt(0)] = 63;
      }, function(t, e) {
        e.read = function(t2, e2, n, r, o) {
          var s, i, a = 8 * o - r - 1, c = (1 << a) - 1, h = c >> 1, u = -7, p = n ? o - 1 : 0, f = n ? -1 : 1, l = t2[e2 + p];
          for (p += f, s = l & (1 << -u) - 1, l >>= -u, u += a; u > 0; s = 256 * s + t2[e2 + p], p += f, u -= 8)
            ;
          for (i = s & (1 << -u) - 1, s >>= -u, u += r; u > 0; i = 256 * i + t2[e2 + p], p += f, u -= 8)
            ;
          if (s === 0)
            s = 1 - h;
          else {
            if (s === c)
              return i ? NaN : 1 / 0 * (l ? -1 : 1);
            i += Math.pow(2, r), s -= h;
          }
          return (l ? -1 : 1) * i * Math.pow(2, s - r);
        }, e.write = function(t2, e2, n, r, o, s) {
          var i, a, c, h = 8 * s - o - 1, u = (1 << h) - 1, p = u >> 1, f = o === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, l = r ? 0 : s - 1, d = r ? 1 : -1, y = e2 < 0 || e2 === 0 && 1 / e2 < 0 ? 1 : 0;
          for (e2 = Math.abs(e2), isNaN(e2) || e2 === 1 / 0 ? (a = isNaN(e2) ? 1 : 0, i = u) : (i = Math.floor(Math.log(e2) / Math.LN2), e2 * (c = Math.pow(2, -i)) < 1 && (i--, c *= 2), (e2 += i + p >= 1 ? f / c : f * Math.pow(2, 1 - p)) * c >= 2 && (i++, c /= 2), i + p >= u ? (a = 0, i = u) : i + p >= 1 ? (a = (e2 * c - 1) * Math.pow(2, o), i += p) : (a = e2 * Math.pow(2, p - 1) * Math.pow(2, o), i = 0)); o >= 8; t2[n + l] = 255 & a, l += d, a /= 256, o -= 8)
            ;
          for (i = i << o | a, h += o; h > 0; t2[n + l] = 255 & i, l += d, i /= 256, h -= 8)
            ;
          t2[n + l - d] |= 128 * y;
        };
      }, function(t, e) {
        var n = {}.toString;
        t.exports = Array.isArray || function(t2) {
          return n.call(t2) == "[object Array]";
        };
      }, function(t, e, n) {
        const r = n(36), o = n(37), s = n(0)("@hyoga/uni-socket"), i = uni || wx;
        class a extends r {
          constructor(t2, e2, n2) {
            super(), this._readyState = a.CONNECTING, this._socket = null, t2 !== null && (Array.isArray(e2) ? e2 = e2.join(", ") : typeof e2 == "object" && e2 !== null && (n2 = e2, e2 = void 0), this.initAsClient(t2, e2, n2));
          }
          initAsClient(t2, e2, n2) {
            Object.assign(n2, { url: t2, header: { "content-type": "application/json" }, protocols: e2, timeout: 25e3 }), this._socket = this.createConnection(n2), this.addSocketEventListeners();
          }
          createConnection(t2) {
            return i.connectSocket(__spreadValues({ complete: () => {
            } }, t2));
          }
          addSocketEventListeners() {
            this._socket.onOpen(() => {
              this._readyState = a.OPEN, this.onopen();
            }), this._socket.onClose((t2) => {
              s("onclose: ", t2), this._readyState = a.CLOSED, this.onclose(t2.code, t2.reason);
            }), this._socket.onError((t2) => {
              s("onerror: ", t2), this.onerror(t2);
            }), this._socket.onMessage((t2) => {
              this.onmessage(t2);
            });
          }
          send(t2) {
            if (s("send data: ", t2, this._readyState), this._readyState === a.CONNECTING)
              throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
            typeof t2 == "number" && (t2 = t2.toString()), this._readyState === a.OPEN && this._socket.send({ data: t2 });
          }
          close(t2, e2) {
            s("close socket: ", t2, e2), this._readyState = a.CLOSING, this._socket.close({ code: t2, reason: e2 });
          }
        }
        ["CONNECTING", "OPEN", "CLOSING", "CLOSED"].forEach((t2, e2) => {
          a[t2] = e2;
        });
        ["open", "error", "close", "message"].forEach((t2) => {
          Object.defineProperty(a.prototype, "on" + t2, { get() {
            const e2 = this.listeners(t2);
            for (var n2 = 0; n2 < e2.length; n2++)
              if (e2[n2]._listener)
                return e2[n2]._listener;
          }, set(e2) {
            const n2 = this.listeners(t2);
            for (var r2 = 0; r2 < n2.length; r2++)
              n2[r2]._listener && this.removeListener(t2, n2[r2]);
            this.addEventListener(t2, e2);
          } });
        }), a.prototype.addEventListener = o.addEventListener, a.prototype.removeEventListener = o.removeEventListener, t.exports = a;
      }, function(t, e, n) {
        "use strict";
        var r, o = typeof Reflect == "object" ? Reflect : null, s = o && typeof o.apply == "function" ? o.apply : function(t2, e2, n2) {
          return Function.prototype.apply.call(t2, e2, n2);
        };
        r = o && typeof o.ownKeys == "function" ? o.ownKeys : Object.getOwnPropertySymbols ? function(t2) {
          return Object.getOwnPropertyNames(t2).concat(Object.getOwnPropertySymbols(t2));
        } : function(t2) {
          return Object.getOwnPropertyNames(t2);
        };
        var i = Number.isNaN || function(t2) {
          return t2 != t2;
        };
        function a() {
          a.init.call(this);
        }
        t.exports = a, t.exports.once = function(t2, e2) {
          return new Promise(function(n2, r2) {
            function o2() {
              s2 !== void 0 && t2.removeListener("error", s2), n2([].slice.call(arguments));
            }
            var s2;
            e2 !== "error" && (s2 = function(n3) {
              t2.removeListener(e2, o2), r2(n3);
            }, t2.once("error", s2)), t2.once(e2, o2);
          });
        }, a.EventEmitter = a, a.prototype._events = void 0, a.prototype._eventsCount = 0, a.prototype._maxListeners = void 0;
        var c = 10;
        function h(t2) {
          if (typeof t2 != "function")
            throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t2);
        }
        function u(t2) {
          return t2._maxListeners === void 0 ? a.defaultMaxListeners : t2._maxListeners;
        }
        function p(t2, e2, n2, r2) {
          var o2, s2, i2, a2;
          if (h(n2), (s2 = t2._events) === void 0 ? (s2 = t2._events = /* @__PURE__ */ Object.create(null), t2._eventsCount = 0) : (s2.newListener !== void 0 && (t2.emit("newListener", e2, n2.listener ? n2.listener : n2), s2 = t2._events), i2 = s2[e2]), i2 === void 0)
            i2 = s2[e2] = n2, ++t2._eventsCount;
          else if (typeof i2 == "function" ? i2 = s2[e2] = r2 ? [n2, i2] : [i2, n2] : r2 ? i2.unshift(n2) : i2.push(n2), (o2 = u(t2)) > 0 && i2.length > o2 && !i2.warned) {
            i2.warned = true;
            var c2 = new Error("Possible EventEmitter memory leak detected. " + i2.length + " " + String(e2) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            c2.name = "MaxListenersExceededWarning", c2.emitter = t2, c2.type = e2, c2.count = i2.length, a2 = c2, console && console.warn && console.warn(a2);
          }
          return t2;
        }
        function f() {
          if (!this.fired)
            return this.target.removeListener(this.type, this.wrapFn), this.fired = true, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
        }
        function l(t2, e2, n2) {
          var r2 = { fired: false, wrapFn: void 0, target: t2, type: e2, listener: n2 }, o2 = f.bind(r2);
          return o2.listener = n2, r2.wrapFn = o2, o2;
        }
        function d(t2, e2, n2) {
          var r2 = t2._events;
          if (r2 === void 0)
            return [];
          var o2 = r2[e2];
          return o2 === void 0 ? [] : typeof o2 == "function" ? n2 ? [o2.listener || o2] : [o2] : n2 ? function(t3) {
            for (var e3 = new Array(t3.length), n3 = 0; n3 < e3.length; ++n3)
              e3[n3] = t3[n3].listener || t3[n3];
            return e3;
          }(o2) : g(o2, o2.length);
        }
        function y(t2) {
          var e2 = this._events;
          if (e2 !== void 0) {
            var n2 = e2[t2];
            if (typeof n2 == "function")
              return 1;
            if (n2 !== void 0)
              return n2.length;
          }
          return 0;
        }
        function g(t2, e2) {
          for (var n2 = new Array(e2), r2 = 0; r2 < e2; ++r2)
            n2[r2] = t2[r2];
          return n2;
        }
        Object.defineProperty(a, "defaultMaxListeners", { enumerable: true, get: function() {
          return c;
        }, set: function(t2) {
          if (typeof t2 != "number" || t2 < 0 || i(t2))
            throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t2 + ".");
          c = t2;
        } }), a.init = function() {
          this._events !== void 0 && this._events !== Object.getPrototypeOf(this)._events || (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
        }, a.prototype.setMaxListeners = function(t2) {
          if (typeof t2 != "number" || t2 < 0 || i(t2))
            throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t2 + ".");
          return this._maxListeners = t2, this;
        }, a.prototype.getMaxListeners = function() {
          return u(this);
        }, a.prototype.emit = function(t2) {
          for (var e2 = [], n2 = 1; n2 < arguments.length; n2++)
            e2.push(arguments[n2]);
          var r2 = t2 === "error", o2 = this._events;
          if (o2 !== void 0)
            r2 = r2 && o2.error === void 0;
          else if (!r2)
            return false;
          if (r2) {
            var i2;
            if (e2.length > 0 && (i2 = e2[0]), i2 instanceof Error)
              throw i2;
            var a2 = new Error("Unhandled error." + (i2 ? " (" + i2.message + ")" : ""));
            throw a2.context = i2, a2;
          }
          var c2 = o2[t2];
          if (c2 === void 0)
            return false;
          if (typeof c2 == "function")
            s(c2, this, e2);
          else {
            var h2 = c2.length, u2 = g(c2, h2);
            for (n2 = 0; n2 < h2; ++n2)
              s(u2[n2], this, e2);
          }
          return true;
        }, a.prototype.addListener = function(t2, e2) {
          return p(this, t2, e2, false);
        }, a.prototype.on = a.prototype.addListener, a.prototype.prependListener = function(t2, e2) {
          return p(this, t2, e2, true);
        }, a.prototype.once = function(t2, e2) {
          return h(e2), this.on(t2, l(this, t2, e2)), this;
        }, a.prototype.prependOnceListener = function(t2, e2) {
          return h(e2), this.prependListener(t2, l(this, t2, e2)), this;
        }, a.prototype.removeListener = function(t2, e2) {
          var n2, r2, o2, s2, i2;
          if (h(e2), (r2 = this._events) === void 0)
            return this;
          if ((n2 = r2[t2]) === void 0)
            return this;
          if (n2 === e2 || n2.listener === e2)
            --this._eventsCount == 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete r2[t2], r2.removeListener && this.emit("removeListener", t2, n2.listener || e2));
          else if (typeof n2 != "function") {
            for (o2 = -1, s2 = n2.length - 1; s2 >= 0; s2--)
              if (n2[s2] === e2 || n2[s2].listener === e2) {
                i2 = n2[s2].listener, o2 = s2;
                break;
              }
            if (o2 < 0)
              return this;
            o2 === 0 ? n2.shift() : function(t3, e3) {
              for (; e3 + 1 < t3.length; e3++)
                t3[e3] = t3[e3 + 1];
              t3.pop();
            }(n2, o2), n2.length === 1 && (r2[t2] = n2[0]), r2.removeListener !== void 0 && this.emit("removeListener", t2, i2 || e2);
          }
          return this;
        }, a.prototype.off = a.prototype.removeListener, a.prototype.removeAllListeners = function(t2) {
          var e2, n2, r2;
          if ((n2 = this._events) === void 0)
            return this;
          if (n2.removeListener === void 0)
            return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : n2[t2] !== void 0 && (--this._eventsCount == 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete n2[t2]), this;
          if (arguments.length === 0) {
            var o2, s2 = Object.keys(n2);
            for (r2 = 0; r2 < s2.length; ++r2)
              (o2 = s2[r2]) !== "removeListener" && this.removeAllListeners(o2);
            return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
          }
          if (typeof (e2 = n2[t2]) == "function")
            this.removeListener(t2, e2);
          else if (e2 !== void 0)
            for (r2 = e2.length - 1; r2 >= 0; r2--)
              this.removeListener(t2, e2[r2]);
          return this;
        }, a.prototype.listeners = function(t2) {
          return d(this, t2, true);
        }, a.prototype.rawListeners = function(t2) {
          return d(this, t2, false);
        }, a.listenerCount = function(t2, e2) {
          return typeof t2.listenerCount == "function" ? t2.listenerCount(e2) : y.call(t2, e2);
        }, a.prototype.listenerCount = y, a.prototype.eventNames = function() {
          return this._eventsCount > 0 ? r(this._events) : [];
        };
      }, function(t, e, n) {
        "use strict";
        class r {
          constructor(t2, e2) {
            this.target = e2, this.type = t2;
          }
        }
        class o extends r {
          constructor(t2, e2) {
            super("message", e2), this.data = t2;
          }
        }
        class s extends r {
          constructor(t2, e2, n2) {
            super("close", n2), this.wasClean = n2._closeFrameReceived && n2._closeFrameSent, this.reason = e2, this.code = t2;
          }
        }
        class i extends r {
          constructor(t2) {
            super("open", t2);
          }
        }
        class a extends r {
          constructor(t2, e2) {
            super("error", e2), this.message = t2.message, this.error = t2;
          }
        }
        const c = { addEventListener(t2, e2) {
          function n2(t3) {
            e2.call(this, new o(t3, this));
          }
          function r2(t3, n3) {
            e2.call(this, new s(t3, n3, this));
          }
          function c2(t3) {
            e2.call(this, new a(t3, this));
          }
          function h() {
            e2.call(this, new i(this));
          }
          typeof e2 == "function" && (t2 === "message" ? (n2._listener = e2, this.on(t2, n2)) : t2 === "close" ? (r2._listener = e2, this.on(t2, r2)) : t2 === "error" ? (c2._listener = e2, this.on(t2, c2)) : t2 === "open" ? (h._listener = e2, this.on(t2, h)) : this.on(t2, e2));
        }, removeEventListener(t2, e2) {
          const n2 = this.listeners(t2);
          for (var r2 = 0; r2 < n2.length; r2++)
            n2[r2] !== e2 && n2[r2]._listener !== e2 || this.removeListener(t2, n2[r2]);
        } };
        t.exports = c;
      }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true }), e.reconstructPacket = e.deconstructPacket = void 0;
        const r = n(16);
        e.deconstructPacket = function(t2) {
          const e2 = [], n2 = t2.data, o = t2;
          return o.data = function t3(e3, n3) {
            if (!e3)
              return e3;
            if (r.isBinary(e3)) {
              const t4 = { _placeholder: true, num: n3.length };
              return n3.push(e3), t4;
            }
            if (Array.isArray(e3)) {
              const r2 = new Array(e3.length);
              for (let o2 = 0; o2 < e3.length; o2++)
                r2[o2] = t3(e3[o2], n3);
              return r2;
            }
            if (typeof e3 == "object" && !(e3 instanceof Date)) {
              const r2 = {};
              for (const o2 in e3)
                e3.hasOwnProperty(o2) && (r2[o2] = t3(e3[o2], n3));
              return r2;
            }
            return e3;
          }(n2, e2), o.attachments = e2.length, { packet: o, buffers: e2 };
        }, e.reconstructPacket = function(t2, e2) {
          return t2.data = function t3(e3, n2) {
            if (!e3)
              return e3;
            if (e3 && e3._placeholder)
              return n2[e3.num];
            if (Array.isArray(e3))
              for (let r2 = 0; r2 < e3.length; r2++)
                e3[r2] = t3(e3[r2], n2);
            else if (typeof e3 == "object")
              for (const r2 in e3)
                e3.hasOwnProperty(r2) && (e3[r2] = t3(e3[r2], n2));
            return e3;
          }(t2.data, e2), t2.attachments = void 0, t2;
        };
      }, function(t, e) {
        function n(t2) {
          t2 = t2 || {}, this.ms = t2.min || 100, this.max = t2.max || 1e4, this.factor = t2.factor || 2, this.jitter = t2.jitter > 0 && t2.jitter <= 1 ? t2.jitter : 0, this.attempts = 0;
        }
        t.exports = n, n.prototype.duration = function() {
          var t2 = this.ms * Math.pow(this.factor, this.attempts++);
          if (this.jitter) {
            var e2 = Math.random(), n2 = Math.floor(e2 * this.jitter * t2);
            t2 = (1 & Math.floor(10 * e2)) == 0 ? t2 - n2 : t2 + n2;
          }
          return 0 | Math.min(t2, this.max);
        }, n.prototype.reset = function() {
          this.attempts = 0;
        }, n.prototype.setMin = function(t2) {
          this.ms = t2;
        }, n.prototype.setMax = function(t2) {
          this.max = t2;
        }, n.prototype.setJitter = function(t2) {
          this.jitter = t2;
        };
      }]);
    });
  }
});

// dep:@hyoga_uni-socket_io
init_define_process_env_UNI_STAT_TITLE_JSON();
var hyoga_uni_socket_io_default = require_uni_socket_io();
export {
  hyoga_uni_socket_io_default as default
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=@hyoga_uni-socket_io.js.map
