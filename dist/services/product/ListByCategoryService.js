var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a, prop, b2[prop]);
    }
  return a;
};
var __spreadProps = (a, b2) => __defProps(a, __getOwnPropDescs(b2));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to2, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to2, key) && key !== except)
        __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to2;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// node_modules/@prisma/client/runtime/library.js
var require_library = __commonJS({
  "node_modules/@prisma/client/runtime/library.js"(exports, module) {
    "use strict";
    var Fl = Object.create;
    var yr = Object.defineProperty;
    var kl = Object.getOwnPropertyDescriptor;
    var Ol = Object.getOwnPropertyNames;
    var Dl = Object.getPrototypeOf;
    var _l = Object.prototype.hasOwnProperty;
    var q = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
    var Rt = (e, t) => {
      for (var r in t)
        yr(e, r, { get: t[r], enumerable: true });
    };
    var Gi = (e, t, r, n) => {
      if (t && typeof t == "object" || typeof t == "function")
        for (let i of Ol(t))
          !_l.call(e, i) && i !== r && yr(e, i, { get: () => t[i], enumerable: !(n = kl(t, i)) || n.enumerable });
      return e;
    };
    var S = (e, t, r) => (r = e != null ? Fl(Dl(e)) : {}, Gi(t || !e || !e.__esModule ? yr(r, "default", { value: e, enumerable: true }) : r, e));
    var Nl = (e) => Gi(yr({}, "__esModule", { value: true }), e);
    var no = q((om, ro) => {
      "use strict";
      var tt = 1e3, rt = tt * 60, nt = rt * 60, Ke = nt * 24, Ll = Ke * 7, $l = Ke * 365.25;
      ro.exports = function(e, t) {
        t = t || {};
        var r = typeof e;
        if (r === "string" && e.length > 0)
          return ql(e);
        if (r === "number" && isFinite(e))
          return t.long ? jl(e) : Vl(e);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e));
      };
      function ql(e) {
        if (e = String(e), !(e.length > 100)) {
          var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
          if (t) {
            var r = parseFloat(t[1]), n = (t[2] || "ms").toLowerCase();
            switch (n) {
              case "years":
              case "year":
              case "yrs":
              case "yr":
              case "y":
                return r * $l;
              case "weeks":
              case "week":
              case "w":
                return r * Ll;
              case "days":
              case "day":
              case "d":
                return r * Ke;
              case "hours":
              case "hour":
              case "hrs":
              case "hr":
              case "h":
                return r * nt;
              case "minutes":
              case "minute":
              case "mins":
              case "min":
              case "m":
                return r * rt;
              case "seconds":
              case "second":
              case "secs":
              case "sec":
              case "s":
                return r * tt;
              case "milliseconds":
              case "millisecond":
              case "msecs":
              case "msec":
              case "ms":
                return r;
              default:
                return;
            }
          }
        }
      }
      function Vl(e) {
        var t = Math.abs(e);
        return t >= Ke ? Math.round(e / Ke) + "d" : t >= nt ? Math.round(e / nt) + "h" : t >= rt ? Math.round(e / rt) + "m" : t >= tt ? Math.round(e / tt) + "s" : e + "ms";
      }
      function jl(e) {
        var t = Math.abs(e);
        return t >= Ke ? xr(e, t, Ke, "day") : t >= nt ? xr(e, t, nt, "hour") : t >= rt ? xr(e, t, rt, "minute") : t >= tt ? xr(e, t, tt, "second") : e + " ms";
      }
      function xr(e, t, r, n) {
        var i = t >= r * 1.5;
        return Math.round(e / r) + " " + n + (i ? "s" : "");
      }
    });
    var Rn = q((sm, io) => {
      "use strict";
      function Bl(e) {
        r.debug = r, r.default = r, r.coerce = l, r.disable = o, r.enable = i, r.enabled = s, r.humanize = no(), r.destroy = u, Object.keys(e).forEach((c) => {
          r[c] = e[c];
        }), r.names = [], r.skips = [], r.formatters = {};
        function t(c) {
          let p = 0;
          for (let d = 0; d < c.length; d++)
            p = (p << 5) - p + c.charCodeAt(d), p |= 0;
          return r.colors[Math.abs(p) % r.colors.length];
        }
        r.selectColor = t;
        function r(c) {
          let p, d = null, f, y;
          function g(...P) {
            if (!g.enabled)
              return;
            let T = g, C = Number(/* @__PURE__ */ new Date()), x = C - (p || C);
            T.diff = x, T.prev = p, T.curr = C, p = C, P[0] = r.coerce(P[0]), typeof P[0] != "string" && P.unshift("%O");
            let R = 0;
            P[0] = P[0].replace(/%([a-zA-Z%])/g, (G, Ue) => {
              if (G === "%%")
                return "%";
              R++;
              let $ = r.formatters[Ue];
              if (typeof $ == "function") {
                let z = P[R];
                G = $.call(T, z), P.splice(R, 1), R--;
              }
              return G;
            }), r.formatArgs.call(T, P), (T.log || r.log).apply(T, P);
          }
          return g.namespace = c, g.useColors = r.useColors(), g.color = r.selectColor(c), g.extend = n, g.destroy = r.destroy, Object.defineProperty(g, "enabled", { enumerable: true, configurable: false, get: () => d !== null ? d : (f !== r.namespaces && (f = r.namespaces, y = r.enabled(c)), y), set: (P) => {
            d = P;
          } }), typeof r.init == "function" && r.init(g), g;
        }
        function n(c, p) {
          let d = r(this.namespace + (typeof p > "u" ? ":" : p) + c);
          return d.log = this.log, d;
        }
        function i(c) {
          r.save(c), r.namespaces = c, r.names = [], r.skips = [];
          let p, d = (typeof c == "string" ? c : "").split(/[\s,]+/), f = d.length;
          for (p = 0; p < f; p++)
            d[p] && (c = d[p].replace(/\*/g, ".*?"), c[0] === "-" ? r.skips.push(new RegExp("^" + c.slice(1) + "$")) : r.names.push(new RegExp("^" + c + "$")));
        }
        function o() {
          let c = [...r.names.map(a), ...r.skips.map(a).map((p) => "-" + p)].join(",");
          return r.enable(""), c;
        }
        function s(c) {
          if (c[c.length - 1] === "*")
            return true;
          let p, d;
          for (p = 0, d = r.skips.length; p < d; p++)
            if (r.skips[p].test(c))
              return false;
          for (p = 0, d = r.names.length; p < d; p++)
            if (r.names[p].test(c))
              return true;
          return false;
        }
        function a(c) {
          return c.toString().substring(2, c.toString().length - 2).replace(/\.\*\?$/, "*");
        }
        function l(c) {
          return c instanceof Error ? c.stack || c.message : c;
        }
        function u() {
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
        return r.enable(r.load()), r;
      }
      io.exports = Bl;
    });
    var oo = q((le, br) => {
      "use strict";
      le.formatArgs = Kl;
      le.save = Ql;
      le.load = Jl;
      le.useColors = Ul;
      le.storage = Gl();
      le.destroy = (() => {
        let e = false;
        return () => {
          e || (e = true, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
        };
      })();
      le.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];
      function Ul() {
        return typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? true : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? false : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
      }
      function Kl(e) {
        if (e[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") + "+" + br.exports.humanize(this.diff), !this.useColors)
          return;
        let t = "color: " + this.color;
        e.splice(1, 0, t, "color: inherit");
        let r = 0, n = 0;
        e[0].replace(/%[a-zA-Z%]/g, (i) => {
          i !== "%%" && (r++, i === "%c" && (n = r));
        }), e.splice(n, 0, t);
      }
      le.log = console.debug || console.log || (() => {
      });
      function Ql(e) {
        try {
          e ? le.storage.setItem("debug", e) : le.storage.removeItem("debug");
        } catch (e2) {
        }
      }
      function Jl() {
        let e;
        try {
          e = le.storage.getItem("debug");
        } catch (e2) {
        }
        return !e && typeof process < "u" && "env" in process && (e = process.env.DEBUG), e;
      }
      function Gl() {
        try {
          return localStorage;
        } catch (e) {
        }
      }
      br.exports = Rn()(le);
      var { formatters: Hl } = br.exports;
      Hl.j = function(e) {
        try {
          return JSON.stringify(e);
        } catch (t) {
          return "[UnexpectedJSONParseError]: " + t.message;
        }
      };
    });
    var Mn = q((am, so) => {
      "use strict";
      so.exports = (e, t = process.argv) => {
        let r = e.startsWith("-") ? "" : e.length === 1 ? "-" : "--", n = t.indexOf(r + e), i = t.indexOf("--");
        return n !== -1 && (i === -1 || n < i);
      };
    });
    var Fn = q((lm, lo) => {
      "use strict";
      var Wl = require("os"), ao = require("tty"), de = Mn(), { env: B } = process, Fe;
      de("no-color") || de("no-colors") || de("color=false") || de("color=never") ? Fe = 0 : (de("color") || de("colors") || de("color=true") || de("color=always")) && (Fe = 1);
      "FORCE_COLOR" in B && (B.FORCE_COLOR === "true" ? Fe = 1 : B.FORCE_COLOR === "false" ? Fe = 0 : Fe = B.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(B.FORCE_COLOR, 10), 3));
      function Sn(e) {
        return e === 0 ? false : { level: e, hasBasic: true, has256: e >= 2, has16m: e >= 3 };
      }
      function In(e, t) {
        if (Fe === 0)
          return 0;
        if (de("color=16m") || de("color=full") || de("color=truecolor"))
          return 3;
        if (de("color=256"))
          return 2;
        if (e && !t && Fe === void 0)
          return 0;
        let r = Fe || 0;
        if (B.TERM === "dumb")
          return r;
        if (process.platform === "win32") {
          let n = Wl.release().split(".");
          return Number(n[0]) >= 10 && Number(n[2]) >= 10586 ? Number(n[2]) >= 14931 ? 3 : 2 : 1;
        }
        if ("CI" in B)
          return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((n) => n in B) || B.CI_NAME === "codeship" ? 1 : r;
        if ("TEAMCITY_VERSION" in B)
          return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(B.TEAMCITY_VERSION) ? 1 : 0;
        if (B.COLORTERM === "truecolor")
          return 3;
        if ("TERM_PROGRAM" in B) {
          let n = parseInt((B.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
          switch (B.TERM_PROGRAM) {
            case "iTerm.app":
              return n >= 3 ? 3 : 2;
            case "Apple_Terminal":
              return 2;
          }
        }
        return /-256(color)?$/i.test(B.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(B.TERM) || "COLORTERM" in B ? 1 : r;
      }
      function zl(e) {
        let t = In(e, e && e.isTTY);
        return Sn(t);
      }
      lo.exports = { supportsColor: zl, stdout: Sn(In(true, ao.isatty(1))), stderr: Sn(In(true, ao.isatty(2))) };
    });
    var co = q((H, wr) => {
      "use strict";
      var Yl = require("tty"), Er = require("util");
      H.init = iu;
      H.log = tu;
      H.formatArgs = Xl;
      H.save = ru;
      H.load = nu;
      H.useColors = Zl;
      H.destroy = Er.deprecate(() => {
      }, "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      H.colors = [6, 2, 3, 4, 5, 1];
      try {
        let e = Fn();
        e && (e.stderr || e).level >= 2 && (H.colors = [20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221]);
      } catch (e) {
      }
      H.inspectOpts = Object.keys(process.env).filter((e) => /^debug_/i.test(e)).reduce((e, t) => {
        let r = t.substring(6).toLowerCase().replace(/_([a-z])/g, (i, o) => o.toUpperCase()), n = process.env[t];
        return /^(yes|on|true|enabled)$/i.test(n) ? n = true : /^(no|off|false|disabled)$/i.test(n) ? n = false : n === "null" ? n = null : n = Number(n), e[r] = n, e;
      }, {});
      function Zl() {
        return "colors" in H.inspectOpts ? !!H.inspectOpts.colors : Yl.isatty(process.stderr.fd);
      }
      function Xl(e) {
        let { namespace: t, useColors: r } = this;
        if (r) {
          let n = this.color, i = "\x1B[3" + (n < 8 ? n : "8;5;" + n), o = `  ${i};1m${t} \x1B[0m`;
          e[0] = o + e[0].split(`
`).join(`
` + o), e.push(i + "m+" + wr.exports.humanize(this.diff) + "\x1B[0m");
        } else
          e[0] = eu() + t + " " + e[0];
      }
      function eu() {
        return H.inspectOpts.hideDate ? "" : (/* @__PURE__ */ new Date()).toISOString() + " ";
      }
      function tu(...e) {
        return process.stderr.write(Er.format(...e) + `
`);
      }
      function ru(e) {
        e ? process.env.DEBUG = e : delete process.env.DEBUG;
      }
      function nu() {
        return process.env.DEBUG;
      }
      function iu(e) {
        e.inspectOpts = {};
        let t = Object.keys(H.inspectOpts);
        for (let r = 0; r < t.length; r++)
          e.inspectOpts[t[r]] = H.inspectOpts[t[r]];
      }
      wr.exports = Rn()(H);
      var { formatters: uo } = wr.exports;
      uo.o = function(e) {
        return this.inspectOpts.colors = this.useColors, Er.inspect(e, this.inspectOpts).split(`
`).map((t) => t.trim()).join(" ");
      };
      uo.O = function(e) {
        return this.inspectOpts.colors = this.useColors, Er.inspect(e, this.inspectOpts);
      };
    });
    var po = q((um, kn) => {
      "use strict";
      typeof process > "u" || process.type === "renderer" || process.browser === true || process.__nwjs ? kn.exports = oo() : kn.exports = co();
    });
    var vo = q((jm, $n) => {
      "use strict";
      var A = $n.exports;
      $n.exports.default = A;
      var I = "\x1B[", St = "\x1B]", st = "\x07", Ar = ";", Po = process.env.TERM_PROGRAM === "Apple_Terminal";
      A.cursorTo = (e, t) => {
        if (typeof e != "number")
          throw new TypeError("The `x` argument is required");
        return typeof t != "number" ? I + (e + 1) + "G" : I + (t + 1) + ";" + (e + 1) + "H";
      };
      A.cursorMove = (e, t) => {
        if (typeof e != "number")
          throw new TypeError("The `x` argument is required");
        let r = "";
        return e < 0 ? r += I + -e + "D" : e > 0 && (r += I + e + "C"), t < 0 ? r += I + -t + "A" : t > 0 && (r += I + t + "B"), r;
      };
      A.cursorUp = (e = 1) => I + e + "A";
      A.cursorDown = (e = 1) => I + e + "B";
      A.cursorForward = (e = 1) => I + e + "C";
      A.cursorBackward = (e = 1) => I + e + "D";
      A.cursorLeft = I + "G";
      A.cursorSavePosition = Po ? "\x1B7" : I + "s";
      A.cursorRestorePosition = Po ? "\x1B8" : I + "u";
      A.cursorGetPosition = I + "6n";
      A.cursorNextLine = I + "E";
      A.cursorPrevLine = I + "F";
      A.cursorHide = I + "?25l";
      A.cursorShow = I + "?25h";
      A.eraseLines = (e) => {
        let t = "";
        for (let r = 0; r < e; r++)
          t += A.eraseLine + (r < e - 1 ? A.cursorUp() : "");
        return e && (t += A.cursorLeft), t;
      };
      A.eraseEndLine = I + "K";
      A.eraseStartLine = I + "1K";
      A.eraseLine = I + "2K";
      A.eraseDown = I + "J";
      A.eraseUp = I + "1J";
      A.eraseScreen = I + "2J";
      A.scrollUp = I + "S";
      A.scrollDown = I + "T";
      A.clearScreen = "\x1Bc";
      A.clearTerminal = process.platform === "win32" ? `${A.eraseScreen}${I}0f` : `${A.eraseScreen}${I}3J${I}H`;
      A.beep = st;
      A.link = (e, t) => [St, "8", Ar, Ar, t, st, e, St, "8", Ar, Ar, st].join("");
      A.image = (e, t = {}) => {
        let r = `${St}1337;File=inline=1`;
        return t.width && (r += `;width=${t.width}`), t.height && (r += `;height=${t.height}`), t.preserveAspectRatio === false && (r += ";preserveAspectRatio=0"), r + ":" + e.toString("base64") + st;
      };
      A.iTerm = { setCwd: (e = process.cwd()) => `${St}50;CurrentDir=${e}${st}`, annotation: (e, t = {}) => {
        let r = `${St}1337;`, n = typeof t.x < "u", i = typeof t.y < "u";
        if ((n || i) && !(n && i && typeof t.length < "u"))
          throw new Error("`x`, `y` and `length` must be defined when `x` or `y` is defined");
        return e = e.replace(/\|/g, ""), r += t.isHidden ? "AddHiddenAnnotation=" : "AddAnnotation=", t.length > 0 ? r += (n ? [e, t.length, t.x, t.y] : [t.length, e]).join("|") : r += e, r + st;
      } };
    });
    var Ao = q((Bm, Co) => {
      "use strict";
      var cu = Fn(), at = Mn();
      function To(e) {
        if (/^\d{3,4}$/.test(e)) {
          let r = /(\d{1,2})(\d{2})/.exec(e);
          return { major: 0, minor: parseInt(r[1], 10), patch: parseInt(r[2], 10) };
        }
        let t = (e || "").split(".").map((r) => parseInt(r, 10));
        return { major: t[0], minor: t[1], patch: t[2] };
      }
      function qn(e) {
        let { env: t } = process;
        if ("FORCE_HYPERLINK" in t)
          return !(t.FORCE_HYPERLINK.length > 0 && parseInt(t.FORCE_HYPERLINK, 10) === 0);
        if (at("no-hyperlink") || at("no-hyperlinks") || at("hyperlink=false") || at("hyperlink=never"))
          return false;
        if (at("hyperlink=true") || at("hyperlink=always") || "NETLIFY" in t)
          return true;
        if (!cu.supportsColor(e) || e && !e.isTTY || process.platform === "win32" || "CI" in t || "TEAMCITY_VERSION" in t)
          return false;
        if ("TERM_PROGRAM" in t) {
          let r = To(t.TERM_PROGRAM_VERSION);
          switch (t.TERM_PROGRAM) {
            case "iTerm.app":
              return r.major === 3 ? r.minor >= 1 : r.major > 3;
            case "WezTerm":
              return r.major >= 20200620;
            case "vscode":
              return r.major > 1 || r.major === 1 && r.minor >= 72;
          }
        }
        if ("VTE_VERSION" in t) {
          if (t.VTE_VERSION === "0.50.0")
            return false;
          let r = To(t.VTE_VERSION);
          return r.major > 0 || r.minor >= 50;
        }
        return false;
      }
      Co.exports = { supportsHyperlink: qn, stdout: qn(process.stdout), stderr: qn(process.stderr) };
    });
    var Mo = q((Um, It) => {
      "use strict";
      var pu = vo(), Vn = Ao(), Ro = (e, t, _a4 = {}) => {
        var _b2 = _a4, { target: r = "stdout" } = _b2, n = __objRest(_b2, ["target"]);
        return Vn[r] ? pu.link(e, t) : n.fallback === false ? e : typeof n.fallback == "function" ? n.fallback(e, t) : `${e} (\u200B${t}\u200B)`;
      };
      It.exports = (e, t, r = {}) => Ro(e, t, r);
      It.exports.stderr = (e, t, r = {}) => Ro(e, t, __spreadValues({ target: "stderr" }, r));
      It.exports.isSupported = Vn.stdout;
      It.exports.stderr.isSupported = Vn.stderr;
    });
    var $o = q((lf, Au) => {
      Au.exports = { name: "dotenv", version: "16.0.3", description: "Loads environment variables from .env file", main: "lib/main.js", types: "lib/main.d.ts", exports: { ".": { require: "./lib/main.js", types: "./lib/main.d.ts", default: "./lib/main.js" }, "./config": "./config.js", "./config.js": "./config.js", "./lib/env-options": "./lib/env-options.js", "./lib/env-options.js": "./lib/env-options.js", "./lib/cli-options": "./lib/cli-options.js", "./lib/cli-options.js": "./lib/cli-options.js", "./package.json": "./package.json" }, scripts: { "dts-check": "tsc --project tests/types/tsconfig.json", lint: "standard", "lint-readme": "standard-markdown", pretest: "npm run lint && npm run dts-check", test: "tap tests/*.js --100 -Rspec", prerelease: "npm test", release: "standard-version" }, repository: { type: "git", url: "git://github.com/motdotla/dotenv.git" }, keywords: ["dotenv", "env", ".env", "environment", "variables", "config", "settings"], readmeFilename: "README.md", license: "BSD-2-Clause", devDependencies: { "@types/node": "^17.0.9", decache: "^4.6.1", dtslint: "^3.7.0", sinon: "^12.0.1", standard: "^16.0.4", "standard-markdown": "^7.1.0", "standard-version": "^9.3.2", tap: "^15.1.6", tar: "^6.1.11", typescript: "^4.5.4" }, engines: { node: ">=12" } };
    });
    var Vo = q((uf, Fr) => {
      "use strict";
      var Ru = require("fs"), qo = require("path"), Mu = require("os"), Su = $o(), Iu = Su.version, Fu = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;
      function ku(e) {
        let t = {}, r = e.toString();
        r = r.replace(/\r\n?/mg, `
`);
        let n;
        for (; (n = Fu.exec(r)) != null; ) {
          let i = n[1], o = n[2] || "";
          o = o.trim();
          let s = o[0];
          o = o.replace(/^(['"`])([\s\S]*)\1$/mg, "$2"), s === '"' && (o = o.replace(/\\n/g, `
`), o = o.replace(/\\r/g, "\r")), t[i] = o;
        }
        return t;
      }
      function Kn(e) {
        console.log(`[dotenv@${Iu}][DEBUG] ${e}`);
      }
      function Ou(e) {
        return e[0] === "~" ? qo.join(Mu.homedir(), e.slice(1)) : e;
      }
      function Du(e) {
        let t = qo.resolve(process.cwd(), ".env"), r = "utf8", n = !!(e && e.debug), i = !!(e && e.override);
        e && (e.path != null && (t = Ou(e.path)), e.encoding != null && (r = e.encoding));
        try {
          let o = Ir.parse(Ru.readFileSync(t, { encoding: r }));
          return Object.keys(o).forEach(function(s) {
            Object.prototype.hasOwnProperty.call(process.env, s) ? (i === true && (process.env[s] = o[s]), n && Kn(i === true ? `"${s}" is already defined in \`process.env\` and WAS overwritten` : `"${s}" is already defined in \`process.env\` and was NOT overwritten`)) : process.env[s] = o[s];
          }), { parsed: o };
        } catch (o) {
          return n && Kn(`Failed to load ${t} ${o.message}`), { error: o };
        }
      }
      var Ir = { config: Du, parse: ku };
      Fr.exports.config = Ir.config;
      Fr.exports.parse = Ir.parse;
      Fr.exports = Ir;
    });
    var Jo = q((yf, Qo) => {
      "use strict";
      Qo.exports = (e) => {
        let t = e.match(/^[ \t]*(?=\S)/gm);
        return t ? t.reduce((r, n) => Math.min(r, n.length), 1 / 0) : 0;
      };
    });
    var Ho = q((hf, Go) => {
      "use strict";
      var $u = Jo();
      Go.exports = (e) => {
        let t = $u(e);
        if (t === 0)
          return e;
        let r = new RegExp(`^[ \\t]{${t}}`, "gm");
        return e.replace(r, "");
      };
    });
    var Wo = q((xf, qu) => {
      qu.exports = { name: "@prisma/engines-version", version: "5.3.1-2.61e140623197a131c2a6189271ffee05a7aa9a59", main: "index.js", types: "index.d.ts", license: "Apache-2.0", author: "Tim Suchanek <suchanek@prisma.io>", prisma: { enginesVersion: "61e140623197a131c2a6189271ffee05a7aa9a59" }, repository: { type: "git", url: "https://github.com/prisma/engines-wrapper.git", directory: "packages/engines-version" }, devDependencies: { "@types/node": "18.17.15", typescript: "4.9.5" }, files: ["index.js", "index.d.ts"], scripts: { build: "tsc -d" } };
    });
    var Hn = q((Or) => {
      "use strict";
      Object.defineProperty(Or, "__esModule", { value: true });
      Or.enginesVersion = void 0;
      Or.enginesVersion = Wo().prisma.enginesVersion;
    });
    var Xn = q((Ff, Zo) => {
      "use strict";
      Zo.exports = (e, t = 1, r) => {
        if (r = __spreadValues({ indent: " ", includeEmptyLines: false }, r), typeof e != "string")
          throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);
        if (typeof t != "number")
          throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof t}\``);
        if (typeof r.indent != "string")
          throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``);
        if (t === 0)
          return e;
        let n = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
        return e.replace(n, r.indent.repeat(t));
      };
    });
    var rs = q((Df, ts) => {
      "use strict";
      ts.exports = ({ onlyFirst: e = false } = {}) => {
        let t = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
        return new RegExp(t, e ? void 0 : "g");
      };
    });
    var ni = q((_f, ns) => {
      "use strict";
      var Wu = rs();
      ns.exports = (e) => typeof e == "string" ? e.replace(Wu(), "") : e;
    });
    var is = q((Lf, Dr) => {
      "use strict";
      Dr.exports = (e = {}) => {
        let t;
        if (e.repoUrl)
          t = e.repoUrl;
        else if (e.user && e.repo)
          t = `https://github.com/${e.user}/${e.repo}`;
        else
          throw new Error("You need to specify either the `repoUrl` option or both the `user` and `repo` options");
        let r = new URL(`${t}/issues/new`), n = ["body", "title", "labels", "template", "milestone", "assignee", "projects"];
        for (let i of n) {
          let o = e[i];
          if (o !== void 0) {
            if (i === "labels" || i === "projects") {
              if (!Array.isArray(o))
                throw new TypeError(`The \`${i}\` option should be an array`);
              o = o.join(",");
            }
            r.searchParams.set(i, o);
          }
        }
        return r.toString();
      };
      Dr.exports.default = Dr.exports;
    });
    var $i = q((iP, La) => {
      "use strict";
      La.exports = function() {
        function e(t, r, n, i, o) {
          return t < r || n < r ? t > n ? n + 1 : t + 1 : i === o ? r : r + 1;
        }
        return function(t, r) {
          if (t === r)
            return 0;
          if (t.length > r.length) {
            var n = t;
            t = r, r = n;
          }
          for (var i = t.length, o = r.length; i > 0 && t.charCodeAt(i - 1) === r.charCodeAt(o - 1); )
            i--, o--;
          for (var s = 0; s < i && t.charCodeAt(s) === r.charCodeAt(s); )
            s++;
          if (i -= s, o -= s, i === 0 || o < 3)
            return o;
          var a = 0, l, u, c, p, d, f, y, g, P, T, C, x, R = [];
          for (l = 0; l < i; l++)
            R.push(l + 1), R.push(t.charCodeAt(s + l));
          for (var ce = R.length - 1; a < o - 3; )
            for (P = r.charCodeAt(s + (u = a)), T = r.charCodeAt(s + (c = a + 1)), C = r.charCodeAt(s + (p = a + 2)), x = r.charCodeAt(s + (d = a + 3)), f = a += 4, l = 0; l < ce; l += 2)
              y = R[l], g = R[l + 1], u = e(y, u, c, P, g), c = e(u, c, p, T, g), p = e(c, p, d, C, g), f = e(p, d, f, x, g), R[l] = f, d = p, p = c, c = u, u = y;
          for (; a < o; )
            for (P = r.charCodeAt(s + (u = a)), f = ++a, l = 0; l < ce; l += 2)
              y = R[l], R[l] = f = e(y, u, f, P, R[l + 1]), u = y;
          return f;
        };
      }();
    });
    var Gd = {};
    Rt(Gd, { DMMF: () => pe, DMMFClass: () => hr, Debug: () => On, Decimal: () => we, Extensions: () => vn, MetricsClient: () => pt, NotFoundError: () => Ce, PrismaClientInitializationError: () => k, PrismaClientKnownRequestError: () => U, PrismaClientRustPanicError: () => ue, PrismaClientUnknownRequestError: () => K, PrismaClientValidationError: () => X, Public: () => Tn, Sql: () => oe, Types: () => Cn, defineDmmfProperty: () => as, empty: () => us, getPrismaClient: () => Ml, join: () => ls, makeStrictEnum: () => Sl, objectEnumValues: () => $r, raw: () => li, sqltag: () => ui, warnEnvConflicts: () => Il, warnOnce: () => Lt });
    module.exports = Nl(Gd);
    var vn = {};
    Rt(vn, { defineExtension: () => Hi, getExtensionContext: () => Wi });
    function Hi(e) {
      return typeof e == "function" ? e : (t) => t.$extends(e);
    }
    function Wi(e) {
      return e;
    }
    var Tn = {};
    Rt(Tn, { validator: () => zi });
    function zi(...e) {
      return (t) => t;
    }
    var Cn = {};
    Rt(Cn, { Extensions: () => Yi, Public: () => Zi, Result: () => Xi, Utils: () => eo });
    var Yi = {};
    var Zi = {};
    var Xi = {};
    var eo = {};
    var Ie = (e, t) => {
      let r = {};
      for (let n of e) {
        let i = n[t];
        r[i] = n;
      }
      return r;
    };
    function to(e) {
      return e.substring(0, 1).toLowerCase() + e.substring(1);
    }
    var hr = class {
      constructor(t) {
        this.document = t;
        this.compositeNames = new Set(this.datamodel.types.map((r) => r.name)), this.typeAndModelMap = this.buildTypeModelMap(), this.mappingsMap = this.buildMappingsMap(), this.outputTypeMap = this.buildMergedOutputTypeMap(), this.rootFieldMap = this.buildRootFieldMap(), this.inputTypesByName = this.buildInputTypesMap();
      }
      get datamodel() {
        return this.document.datamodel;
      }
      get mappings() {
        return this.document.mappings;
      }
      get schema() {
        return this.document.schema;
      }
      get inputObjectTypes() {
        return this.schema.inputObjectTypes;
      }
      get outputObjectTypes() {
        return this.schema.outputObjectTypes;
      }
      isComposite(t) {
        return this.compositeNames.has(t);
      }
      getOtherOperationNames() {
        return [Object.values(this.mappings.otherOperations.write), Object.values(this.mappings.otherOperations.read)].flat();
      }
      hasEnumInNamespace(t, r) {
        var _a4;
        return ((_a4 = this.schema.enumTypes[r]) == null ? void 0 : _a4.find((n) => n.name === t)) !== void 0;
      }
      resolveInputObjectType(t) {
        return this.inputTypesByName.get(An(t.type, t.namespace));
      }
      resolveOutputObjectType(t) {
        var _a4;
        if (t.location === "outputObjectTypes")
          return this.outputObjectTypes[(_a4 = t.namespace) != null ? _a4 : "prisma"].find((r) => r.name === t.type);
      }
      buildModelMap() {
        return Ie(this.datamodel.models, "name");
      }
      buildTypeMap() {
        return Ie(this.datamodel.types, "name");
      }
      buildTypeModelMap() {
        return __spreadValues(__spreadValues({}, this.buildTypeMap()), this.buildModelMap());
      }
      buildMappingsMap() {
        return Ie(this.mappings.modelOperations, "model");
      }
      buildMergedOutputTypeMap() {
        return { model: Ie(this.schema.outputObjectTypes.model, "name"), prisma: Ie(this.schema.outputObjectTypes.prisma, "name") };
      }
      buildRootFieldMap() {
        return __spreadValues(__spreadValues({}, Ie(this.outputTypeMap.prisma.Query.fields, "name")), Ie(this.outputTypeMap.prisma.Mutation.fields, "name"));
      }
      buildInputTypesMap() {
        let t = /* @__PURE__ */ new Map();
        for (let r of this.inputObjectTypes.prisma)
          t.set(An(r.name, "prisma"), r);
        if (!this.inputObjectTypes.model)
          return t;
        for (let r of this.inputObjectTypes.model)
          t.set(An(r.name, "model"), r);
        return t;
      }
    };
    function An(e, t) {
      return t ? `${t}.${e}` : e;
    }
    var pe;
    ((t) => {
      let e;
      ((x) => (x.findUnique = "findUnique", x.findUniqueOrThrow = "findUniqueOrThrow", x.findFirst = "findFirst", x.findFirstOrThrow = "findFirstOrThrow", x.findMany = "findMany", x.create = "create", x.createMany = "createMany", x.update = "update", x.updateMany = "updateMany", x.upsert = "upsert", x.delete = "delete", x.deleteMany = "deleteMany", x.groupBy = "groupBy", x.count = "count", x.aggregate = "aggregate", x.findRaw = "findRaw", x.aggregateRaw = "aggregateRaw"))(e = t.ModelAction || (t.ModelAction = {}));
    })(pe || (pe = {}));
    var Pr = S(po());
    var ou = 100;
    var Mt = [];
    var _a2, _b;
    typeof process < "u" && typeof ((_a2 = process.stderr) == null ? void 0 : _a2.write) != "function" && (Pr.default.log = (_b = console.debug) != null ? _b : console.log);
    function su(e) {
      let t = (0, Pr.default)(e), r = Object.assign((...n) => (t.log = r.log, n.length !== 0 && Mt.push([e, ...n]), Mt.length > ou && Mt.shift(), t("", ...n)), t);
      return r;
    }
    var On = Object.assign(su, Pr.default);
    function mo(e = 7500) {
      let t = Mt.map((r) => r.map((n) => typeof n == "string" ? n : JSON.stringify(n)).join(" ")).join(`
`);
      return t.length < e ? t : t.slice(-e);
    }
    function fo() {
      Mt.length = 0;
    }
    var D = On;
    var Dn;
    var go;
    var yo;
    var ho;
    var xo = true;
    typeof process < "u" && ({ FORCE_COLOR: Dn, NODE_DISABLE_COLORS: go, NO_COLOR: yo, TERM: ho } = process.env || {}, xo = process.stdout && process.stdout.isTTY);
    var au = { enabled: !go && yo == null && ho !== "dumb" && (Dn != null && Dn !== "0" || xo) };
    function _(e, t) {
      let r = new RegExp(`\\x1b\\[${t}m`, "g"), n = `\x1B[${e}m`, i = `\x1B[${t}m`;
      return function(o) {
        return !au.enabled || o == null ? o : n + (~("" + o).indexOf(i) ? o.replace(r, i + n) : o) + i;
      };
    }
    var pm = _(0, 0);
    var ne = _(1, 22);
    var ke = _(2, 22);
    var dm = _(3, 23);
    var te = _(4, 24);
    var mm = _(7, 27);
    var fm = _(8, 28);
    var gm = _(9, 29);
    var ym = _(30, 39);
    var me = _(31, 39);
    var Qe = _(32, 39);
    var he = _(33, 39);
    var it = _(34, 39);
    var hm = _(35, 39);
    var Oe = _(36, 39);
    var xm = _(37, 39);
    var vr = _(90, 39);
    var bm = _(90, 39);
    var Em = _(40, 49);
    var wm = _(41, 49);
    var Pm = _(42, 49);
    var vm = _(43, 49);
    var Tm = _(44, 49);
    var Cm = _(45, 49);
    var Am = _(46, 49);
    var Rm = _(47, 49);
    var bo = S(require("fs"));
    function _n() {
      let e = process.env.PRISMA_QUERY_ENGINE_LIBRARY;
      if (!(e && bo.default.existsSync(e)) && process.arch === "ia32")
        throw new Error('The default query engine type (Node-API, "library") is currently not supported for 32bit Node. Please set `engineType = "binary"` in the "generator" block of your "schema.prisma" file (or use the environment variables "PRISMA_CLIENT_ENGINE_TYPE=binary" and/or "PRISMA_CLI_QUERY_ENGINE_TYPE=binary".)');
    }
    var Tr = "libquery_engine";
    function Nn(e, t) {
      let r = t === "url";
      return e.includes("windows") ? r ? "query_engine.dll.node" : `query_engine-${e}.dll.node` : e.includes("darwin") ? r ? `${Tr}.dylib.node` : `${Tr}-${e}.dylib.node` : r ? `${Tr}.so.node` : `${Tr}-${e}.so.node`;
    }
    var ko = S(require("child_process"));
    var jn = S(require("fs/promises"));
    var Mr = S(require("os"));
    var Cr = Symbol("@ts-pattern/matcher");
    var Eo = "@ts-pattern/anonymous-select-key";
    var wo = function(e) {
      return !!(e && typeof e == "object");
    };
    var Ln = function(e) {
      return e && !!e[Cr];
    };
    var lu = function e(t, r, n) {
      if (wo(t)) {
        if (Ln(t)) {
          var i = t[Cr]().match(r), o = i.matched, s = i.selections;
          return o && s && Object.keys(s).forEach(function(l) {
            return n(l, s[l]);
          }), o;
        }
        if (!wo(r))
          return false;
        if (Array.isArray(t))
          return !!Array.isArray(r) && t.length === r.length && t.every(function(l, u) {
            return e(l, r[u], n);
          });
        if (t instanceof Map)
          return r instanceof Map && Array.from(t.keys()).every(function(l) {
            return e(t.get(l), r.get(l), n);
          });
        if (t instanceof Set) {
          if (!(r instanceof Set))
            return false;
          if (t.size === 0)
            return r.size === 0;
          if (t.size === 1) {
            var a = Array.from(t.values())[0];
            return Ln(a) ? Array.from(r.values()).every(function(l) {
              return e(a, l, n);
            }) : r.has(a);
          }
          return Array.from(t.values()).every(function(l) {
            return r.has(l);
          });
        }
        return Object.keys(t).every(function(l) {
          var u, c = t[l];
          return (l in r || Ln(u = c) && u[Cr]().matcherType === "optional") && e(c, r[l], n);
        });
      }
      return Object.is(r, t);
    };
    function Je(e) {
      var t;
      return (t = {})[Cr] = function() {
        return { match: function(r) {
          return { matched: !!e(r) };
        } };
      }, t;
    }
    var Om = Je(function(e) {
      return true;
    });
    var Dm = Je(function(e) {
      return typeof e == "string";
    });
    var _m = Je(function(e) {
      return typeof e == "number";
    });
    var Nm = Je(function(e) {
      return typeof e == "boolean";
    });
    var Lm = Je(function(e) {
      return typeof e == "bigint";
    });
    var $m = Je(function(e) {
      return typeof e == "symbol";
    });
    var qm = Je(function(e) {
      return e == null;
    });
    function ot(e) {
      return new uu(e, []);
    }
    var uu = function() {
      function e(r, n) {
        this.value = void 0, this.cases = void 0, this.value = r, this.cases = n;
      }
      var t = e.prototype;
      return t.with = function() {
        var r = [].slice.call(arguments), n = r[r.length - 1], i = [r[0]], o = [];
        return r.length === 3 && typeof r[1] == "function" ? (i.push(r[0]), o.push(r[1])) : r.length > 2 && i.push.apply(i, r.slice(1, r.length - 1)), new e(this.value, this.cases.concat([{ match: function(s) {
          var a = {}, l = !!(i.some(function(u) {
            return lu(u, s, function(c, p) {
              a[c] = p;
            });
          }) && o.every(function(u) {
            return u(s);
          }));
          return { matched: l, value: l && Object.keys(a).length ? Eo in a ? a[Eo] : a : s };
        }, handler: n }]));
      }, t.when = function(r, n) {
        return new e(this.value, this.cases.concat([{ match: function(i) {
          return { matched: !!r(i), value: i };
        }, handler: n }]));
      }, t.otherwise = function(r) {
        return new e(this.value, this.cases.concat([{ match: function(n) {
          return { matched: true, value: n };
        }, handler: r }])).run();
      }, t.exhaustive = function() {
        return this.run();
      }, t.run = function() {
        for (var r = this.value, n = void 0, i = 0; i < this.cases.length; i++) {
          var o = this.cases[i], s = o.match(this.value);
          if (s.matched) {
            r = s.value, n = o.handler;
            break;
          }
        }
        if (!n) {
          var a;
          try {
            a = JSON.stringify(this.value);
          } catch (e2) {
            a = this.value;
          }
          throw new Error("Pattern matching error: no pattern matches value " + a);
        }
        return n(r, this.value);
      }, e;
    }();
    var Oo = require("util");
    var So = S(Mo());
    function Ft(e) {
      return (0, So.default)(e, e, { fallback: te });
    }
    var du = { warn: he("prisma:warn") };
    var mu = { warn: () => !process.env.PRISMA_DISABLE_WARNINGS };
    function kt(e, ...t) {
      mu.warn() && console.warn(`${du.warn} ${e}`, ...t);
    }
    var fu = (0, Oo.promisify)(ko.default.exec);
    var ie = D("prisma:get-platform");
    var gu = ["1.0.x", "1.1.x", "3.0.x"];
    function Do() {
      return __async(this, null, function* () {
        let e = Mr.default.platform(), t = process.arch;
        if (e === "freebsd") {
          let s = yield Sr("freebsd-version");
          if (s && s.trim().length > 0) {
            let l = /^(\d+)\.?/.exec(s);
            if (l)
              return { platform: "freebsd", targetDistro: `freebsd${l[1]}`, arch: t };
          }
        }
        if (e !== "linux")
          return { platform: e, arch: t };
        let r = yield hu(), n = yield Cu(), i = bu({ arch: t, archFromUname: n, familyDistro: r.familyDistro }), { libssl: o } = yield Eu(i);
        return __spreadValues({ platform: "linux", libssl: o, arch: t, archFromUname: n }, r);
      });
    }
    function yu(e) {
      let t = /^ID="?([^"\n]*)"?$/im, r = /^ID_LIKE="?([^"\n]*)"?$/im, n = t.exec(e), i = n && n[1] && n[1].toLowerCase() || "", o = r.exec(e), s = o && o[1] && o[1].toLowerCase() || "", a = ot({ id: i, idLike: s }).with({ id: "alpine" }, ({ id: l }) => ({ targetDistro: "musl", familyDistro: l, originalDistro: l })).with({ id: "raspbian" }, ({ id: l }) => ({ targetDistro: "arm", familyDistro: "debian", originalDistro: l })).with({ id: "nixos" }, ({ id: l }) => ({ targetDistro: "nixos", originalDistro: l, familyDistro: "nixos" })).with({ id: "debian" }, { id: "ubuntu" }, ({ id: l }) => ({ targetDistro: "debian", familyDistro: "debian", originalDistro: l })).with({ id: "rhel" }, { id: "centos" }, { id: "fedora" }, ({ id: l }) => ({ targetDistro: "rhel", familyDistro: "rhel", originalDistro: l })).when(({ idLike: l }) => l.includes("debian") || l.includes("ubuntu"), ({ id: l }) => ({ targetDistro: "debian", familyDistro: "debian", originalDistro: l })).when(({ idLike: l }) => i === "arch" || l.includes("arch"), ({ id: l }) => ({ targetDistro: "debian", familyDistro: "arch", originalDistro: l })).when(({ idLike: l }) => l.includes("centos") || l.includes("fedora") || l.includes("rhel") || l.includes("suse"), ({ id: l }) => ({ targetDistro: "rhel", familyDistro: "rhel", originalDistro: l })).otherwise(({ id: l }) => ({ targetDistro: void 0, familyDistro: void 0, originalDistro: l }));
      return ie(`Found distro info:
${JSON.stringify(a, null, 2)}`), a;
    }
    function hu() {
      return __async(this, null, function* () {
        let e = "/etc/os-release";
        try {
          let t = yield jn.default.readFile(e, { encoding: "utf-8" });
          return yu(t);
        } catch (e2) {
          return { targetDistro: void 0, familyDistro: void 0, originalDistro: void 0 };
        }
      });
    }
    function xu(e) {
      let t = /^OpenSSL\s(\d+\.\d+)\.\d+/.exec(e);
      if (t) {
        let r = `${t[1]}.x`;
        return _o(r);
      }
    }
    function Io(e) {
      var _a4;
      let t = /libssl\.so\.(\d)(\.\d)?/.exec(e);
      if (t) {
        let r = `${t[1]}${(_a4 = t[2]) != null ? _a4 : ".0"}.x`;
        return _o(r);
      }
    }
    function _o(e) {
      let t = (() => {
        if (Lo(e))
          return e;
        let r = e.split(".");
        return r[1] = "0", r.join(".");
      })();
      if (gu.includes(t))
        return t;
    }
    function bu(e) {
      return ot(e).with({ familyDistro: "musl" }, () => (ie('Trying platform-specific paths for "alpine"'), ["/lib"])).with({ familyDistro: "debian" }, ({ archFromUname: t }) => (ie('Trying platform-specific paths for "debian" (and "ubuntu")'), [`/usr/lib/${t}-linux-gnu`, `/lib/${t}-linux-gnu`])).with({ familyDistro: "rhel" }, () => (ie('Trying platform-specific paths for "rhel"'), ["/lib64", "/usr/lib64"])).otherwise(({ familyDistro: t, arch: r, archFromUname: n }) => (ie(`Don't know any platform-specific paths for "${t}" on ${r} (${n})`), []));
    }
    function Eu(e) {
      return __async(this, null, function* () {
        let t = 'grep -v "libssl.so.0"', r = yield Fo(e);
        if (r) {
          ie(`Found libssl.so file using platform-specific paths: ${r}`);
          let o = Io(r);
          if (ie(`The parsed libssl version is: ${o}`), o)
            return { libssl: o, strategy: "libssl-specific-path" };
        }
        ie('Falling back to "ldconfig" and other generic paths');
        let n = yield Sr(`ldconfig -p | sed "s/.*=>s*//" | sed "s|.*/||" | grep libssl | sort | ${t}`);
        if (n || (n = yield Fo(["/lib64", "/usr/lib64", "/lib"])), n) {
          ie(`Found libssl.so file using "ldconfig" or other generic paths: ${n}`);
          let o = Io(n);
          if (ie(`The parsed libssl version is: ${o}`), o)
            return { libssl: o, strategy: "ldconfig" };
        }
        let i = yield Sr("openssl version -v");
        if (i) {
          ie(`Found openssl binary with version: ${i}`);
          let o = xu(i);
          if (ie(`The parsed openssl version is: ${o}`), o)
            return { libssl: o, strategy: "openssl-binary" };
        }
        return ie("Couldn't find any version of libssl or OpenSSL in the system"), {};
      });
    }
    function Fo(e) {
      return __async(this, null, function* () {
        for (let t of e) {
          let r = yield wu(t);
          if (r)
            return r;
        }
      });
    }
    function wu(e) {
      return __async(this, null, function* () {
        try {
          return (yield jn.default.readdir(e)).find((r) => r.startsWith("libssl.so.") && !r.startsWith("libssl.so.0"));
        } catch (t) {
          if (t.code === "ENOENT")
            return;
          throw t;
        }
      });
    }
    function lt() {
      return __async(this, null, function* () {
        let { binaryTarget: e } = yield No();
        return e;
      });
    }
    function Pu(e) {
      return e.binaryTarget !== void 0;
    }
    function Bn() {
      return __async(this, null, function* () {
        let _a4 = yield No(), { memoized: e } = _a4, t = __objRest(_a4, ["memoized"]);
        return t;
      });
    }
    var Rr = {};
    function No() {
      return __async(this, null, function* () {
        if (Pu(Rr))
          return Promise.resolve(__spreadProps(__spreadValues({}, Rr), { memoized: true }));
        let e = yield Do(), t = vu(e);
        return Rr = __spreadProps(__spreadValues({}, e), { binaryTarget: t }), __spreadProps(__spreadValues({}, Rr), { memoized: false });
      });
    }
    function vu(e) {
      let { platform: t, arch: r, archFromUname: n, libssl: i, targetDistro: o, familyDistro: s, originalDistro: a } = e;
      t === "linux" && !["x64", "arm64"].includes(r) && kt(`Prisma only officially supports Linux on amd64 (x86_64) and arm64 (aarch64) system architectures. If you are using your own custom Prisma engines, you can ignore this warning, as long as you've compiled the engines for your system architecture "${n}".`);
      let l = "1.1.x";
      if (t === "linux" && i === void 0) {
        let c = ot({ familyDistro: s }).with({ familyDistro: "debian" }, () => "Please manually install OpenSSL via `apt-get update -y && apt-get install -y openssl` and try installing Prisma again. If you're running Prisma on Docker, add this command to your Dockerfile, or switch to an image that already has OpenSSL installed.").otherwise(() => "Please manually install OpenSSL and try installing Prisma again.");
        kt(`Prisma failed to detect the libssl/openssl version to use, and may not work as expected. Defaulting to "openssl-${l}".
${c}`);
      }
      let u = "debian";
      if (t === "linux" && o === void 0 && kt(`Prisma doesn't know which engines to download for the Linux distro "${a}". Falling back to Prisma engines built "${u}".
Please report your experience by creating an issue at ${Ft("https://github.com/prisma/prisma/issues")} so we can add your distro to the list of known supported distros.`), t === "darwin" && r === "arm64")
        return "darwin-arm64";
      if (t === "darwin")
        return "darwin";
      if (t === "win32")
        return "windows";
      if (t === "freebsd")
        return o;
      if (t === "openbsd")
        return "openbsd";
      if (t === "netbsd")
        return "netbsd";
      if (t === "linux" && o === "nixos")
        return "linux-nixos";
      if (t === "linux" && r === "arm64")
        return `${o === "musl" ? "linux-musl-arm64" : "linux-arm64"}-openssl-${i || l}`;
      if (t === "linux" && r === "arm")
        return `linux-arm-openssl-${i || l}`;
      if (t === "linux" && o === "musl") {
        let c = "linux-musl";
        return !i || Lo(i) ? c : `${c}-openssl-${i}`;
      }
      return t === "linux" && o && i ? `${o}-openssl-${i}` : (t !== "linux" && kt(`Prisma detected unknown OS "${t}" and may not work as expected. Defaulting to "linux".`), i ? `${u}-openssl-${i}` : o ? `${o}-openssl-${l}` : `${u}-openssl-${l}`);
    }
    function Tu(e) {
      return __async(this, null, function* () {
        try {
          return yield e();
        } catch (e2) {
          return;
        }
      });
    }
    function Sr(e) {
      return Tu(() => __async(this, null, function* () {
        let t = yield fu(e);
        return ie(`Command "${e}" successfully returned "${t.stdout}"`), t.stdout;
      }));
    }
    function Cu() {
      return __async(this, null, function* () {
        var _a4;
        return typeof Mr.default.machine == "function" ? Mr.default.machine() : (_a4 = yield Sr("uname -m")) == null ? void 0 : _a4.trim();
      });
    }
    function Lo(e) {
      return e.startsWith("1.");
    }
    var Un = ["darwin", "darwin-arm64", "debian-openssl-1.0.x", "debian-openssl-1.1.x", "debian-openssl-3.0.x", "rhel-openssl-1.0.x", "rhel-openssl-1.1.x", "rhel-openssl-3.0.x", "linux-arm64-openssl-1.1.x", "linux-arm64-openssl-1.0.x", "linux-arm64-openssl-3.0.x", "linux-arm-openssl-1.1.x", "linux-arm-openssl-1.0.x", "linux-arm-openssl-3.0.x", "linux-musl", "linux-musl-openssl-3.0.x", "linux-musl-arm64-openssl-1.1.x", "linux-musl-arm64-openssl-3.0.x", "linux-nixos", "linux-static-x64", "linux-static-arm64", "windows", "freebsd11", "freebsd12", "freebsd13", "openbsd", "netbsd", "arm"];
    var Jn = S(Vo());
    var kr = S(require("fs"));
    var ut = S(require("path"));
    function jo(e) {
      let t = e.ignoreProcessEnv ? {} : process.env, r = (n) => {
        var _a4, _b2;
        return (_b2 = (_a4 = n.match(/(.?\${(?:[a-zA-Z0-9_]+)?})/g)) == null ? void 0 : _a4.reduce(function(o, s) {
          let a = /(.?)\${([a-zA-Z0-9_]+)?}/g.exec(s);
          if (!a)
            return o;
          let l = a[1], u, c;
          if (l === "\\")
            c = a[0], u = c.replace("\\$", "$");
          else {
            let p = a[2];
            c = a[0].substring(l.length), u = Object.hasOwnProperty.call(t, p) ? t[p] : e.parsed[p] || "", u = r(u);
          }
          return o.replace(c, u);
        }, n)) != null ? _b2 : n;
      };
      for (let n in e.parsed) {
        let i = Object.hasOwnProperty.call(t, n) ? t[n] : e.parsed[n];
        e.parsed[n] = r(i);
      }
      for (let n in e.parsed)
        t[n] = e.parsed[n];
      return e;
    }
    var Qn = D("prisma:tryLoadEnv");
    function Ot({ rootEnvPath: e, schemaEnvPath: t }, r = { conflictCheck: "none" }) {
      var _a4, _b2;
      let n = Bo(e);
      r.conflictCheck !== "none" && _u(n, t, r.conflictCheck);
      let i = null;
      return Uo(n == null ? void 0 : n.path, t) || (i = Bo(t)), !n && !i && Qn("No Environment variables loaded"), (i == null ? void 0 : i.dotenvResult.error) ? console.error(me(ne("Schema Env Error: ")) + i.dotenvResult.error) : { message: [n == null ? void 0 : n.message, i == null ? void 0 : i.message].filter(Boolean).join(`
`), parsed: __spreadValues(__spreadValues({}, (_a4 = n == null ? void 0 : n.dotenvResult) == null ? void 0 : _a4.parsed), (_b2 = i == null ? void 0 : i.dotenvResult) == null ? void 0 : _b2.parsed) };
    }
    function _u(e, t, r) {
      let n = e == null ? void 0 : e.dotenvResult.parsed, i = !Uo(e == null ? void 0 : e.path, t);
      if (n && t && i && kr.default.existsSync(t)) {
        let o = Jn.default.parse(kr.default.readFileSync(t)), s = [];
        for (let a in o)
          n[a] === o[a] && s.push(a);
        if (s.length > 0) {
          let a = ut.default.relative(process.cwd(), e.path), l = ut.default.relative(process.cwd(), t);
          if (r === "error") {
            let u = `There is a conflict between env var${s.length > 1 ? "s" : ""} in ${te(a)} and ${te(l)}
Conflicting env vars:
${s.map((c) => `  ${ne(c)}`).join(`
`)}

We suggest to move the contents of ${te(l)} to ${te(a)} to consolidate your env vars.
`;
            throw new Error(u);
          } else if (r === "warn") {
            let u = `Conflict for env var${s.length > 1 ? "s" : ""} ${s.map((c) => ne(c)).join(", ")} in ${te(a)} and ${te(l)}
Env vars from ${te(l)} overwrite the ones from ${te(a)}
      `;
            console.warn(`${he("warn(prisma)")} ${u}`);
          }
        }
      }
    }
    function Bo(e) {
      return Nu(e) ? (Qn(`Environment variables loaded from ${e}`), { dotenvResult: jo(Jn.default.config({ path: e, debug: process.env.DOTENV_CONFIG_DEBUG ? true : void 0 })), message: ke(`Environment variables loaded from ${ut.default.relative(process.cwd(), e)}`), path: e }) : (Qn(`Environment variables not found at ${e}`), null);
    }
    function Uo(e, t) {
      return e && t && ut.default.resolve(e) === ut.default.resolve(t);
    }
    function Nu(e) {
      return !!(e && kr.default.existsSync(e));
    }
    var Ko = "library";
    function Gn(e) {
      let t = Lu();
      return t || ((e == null ? void 0 : e.config.engineType) === "library" ? "library" : (e == null ? void 0 : e.config.engineType) === "binary" ? "binary" : Ko);
    }
    function Lu() {
      let e = process.env.PRISMA_CLIENT_ENGINE_TYPE;
      return e === "library" ? "library" : e === "binary" ? "binary" : void 0;
    }
    var Vu = S(Hn());
    var N = S(require("path"));
    var ju = S(Hn());
    var wf = D("prisma:engines");
    function zo() {
      return N.default.join(__dirname, "../");
    }
    var Pf = "libquery-engine";
    N.default.join(__dirname, "../query-engine-darwin");
    N.default.join(__dirname, "../query-engine-darwin-arm64");
    N.default.join(__dirname, "../query-engine-debian-openssl-1.0.x");
    N.default.join(__dirname, "../query-engine-debian-openssl-1.1.x");
    N.default.join(__dirname, "../query-engine-debian-openssl-3.0.x");
    N.default.join(__dirname, "../query-engine-linux-static-x64");
    N.default.join(__dirname, "../query-engine-linux-static-arm64");
    N.default.join(__dirname, "../query-engine-rhel-openssl-1.0.x");
    N.default.join(__dirname, "../query-engine-rhel-openssl-1.1.x");
    N.default.join(__dirname, "../query-engine-rhel-openssl-3.0.x");
    N.default.join(__dirname, "../libquery_engine-darwin.dylib.node");
    N.default.join(__dirname, "../libquery_engine-darwin-arm64.dylib.node");
    N.default.join(__dirname, "../libquery_engine-debian-openssl-1.0.x.so.node");
    N.default.join(__dirname, "../libquery_engine-debian-openssl-1.1.x.so.node");
    N.default.join(__dirname, "../libquery_engine-debian-openssl-3.0.x.so.node");
    N.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-1.0.x.so.node");
    N.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-1.1.x.so.node");
    N.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-3.0.x.so.node");
    N.default.join(__dirname, "../libquery_engine-linux-musl.so.node");
    N.default.join(__dirname, "../libquery_engine-linux-musl-openssl-3.0.x.so.node");
    N.default.join(__dirname, "../libquery_engine-rhel-openssl-1.0.x.so.node");
    N.default.join(__dirname, "../libquery_engine-rhel-openssl-1.1.x.so.node");
    N.default.join(__dirname, "../libquery_engine-rhel-openssl-3.0.x.so.node");
    N.default.join(__dirname, "../query_engine-windows.dll.node");
    var Wn = S(require("fs"));
    var Yo = D("chmodPlusX");
    function zn(e) {
      if (process.platform === "win32")
        return;
      let t = Wn.default.statSync(e), r = t.mode | 64 | 8 | 1;
      if (t.mode === r) {
        Yo(`Execution permissions of ${e} are fine`);
        return;
      }
      let n = r.toString(8).slice(-3);
      Yo(`Have to call chmodPlusX on ${e}`), Wn.default.chmodSync(e, n);
    }
    function Yn(e) {
      let t = e.e, r = (a) => `Prisma cannot find the required \`${a}\` system library in your system`, n = t.message.includes("cannot open shared object file"), i = `Please refer to the documentation about Prisma's system requirements: ${Ft("https://pris.ly/d/system-requirements")}`, o = `Unable to require(\`${ke(e.id)}\`).`, s = ot({ message: t.message, code: t.code }).with({ code: "ENOENT" }, () => "File does not exist.").when(({ message: a }) => n && a.includes("libz"), () => `${r("libz")}. Please install it and try again.`).when(({ message: a }) => n && a.includes("libgcc_s"), () => `${r("libgcc_s")}. Please install it and try again.`).when(({ message: a }) => n && a.includes("libssl"), () => {
        let a = e.platformInfo.libssl ? `openssl-${e.platformInfo.libssl}` : "openssl";
        return `${r("libssl")}. Please install ${a} and try again.`;
      }).when(({ message: a }) => a.includes("GLIBC"), () => `Prisma has detected an incompatible version of the \`glibc\` C standard library installed in your system. This probably means your system may be too old to run Prisma. ${i}`).when(({ message: a }) => e.platformInfo.platform === "linux" && a.includes("symbol not found"), () => `The Prisma engines are not compatible with your system ${e.platformInfo.originalDistro} on (${e.platformInfo.archFromUname}) which uses the \`${e.platformInfo.binaryTarget}\` binaryTarget by default. ${i}`).otherwise(() => `The Prisma engines do not seem to be compatible with your system. ${i}`);
      return `${o}
${s}

Details: ${t.message}`;
    }
    var Dt = S(require("path"));
    function Zn(e) {
      return Dt.default.sep === Dt.default.posix.sep ? e : e.split(Dt.default.sep).join(Dt.default.posix.sep);
    }
    var Xo = S(Xn());
    function ti(e) {
      return String(new ei(e));
    }
    var ei = class {
      constructor(t) {
        this.config = t;
      }
      toString() {
        let { config: t } = this, r = t.provider.fromEnvVar ? `env("${t.provider.fromEnvVar}")` : t.provider.value, n = JSON.parse(JSON.stringify({ provider: r, binaryTargets: Bu(t.binaryTargets) }));
        return `generator ${t.name} {
${(0, Xo.default)(Uu(n), 2)}
}`;
      }
    };
    function Bu(e) {
      let t;
      if (e.length > 0) {
        let r = e.find((n) => n.fromEnvVar !== null);
        r ? t = `env("${r.fromEnvVar}")` : t = e.map((n) => n.native ? "native" : n.value);
      } else
        t = void 0;
      return t;
    }
    function Uu(e) {
      let t = Object.keys(e).reduce((r, n) => Math.max(r, n.length), 0);
      return Object.entries(e).map(([r, n]) => `${r.padEnd(t)} = ${Ku(n)}`).join(`
`);
    }
    function Ku(e) {
      return JSON.parse(JSON.stringify(e, (t, r) => Array.isArray(r) ? `[${r.map((n) => JSON.stringify(n)).join(", ")}]` : JSON.stringify(r)));
    }
    var Nt = {};
    Rt(Nt, { error: () => Gu, info: () => Ju, log: () => Qu, query: () => Hu, should: () => es, tags: () => _t, warn: () => ri });
    var _t = { error: me("prisma:error"), warn: he("prisma:warn"), info: Oe("prisma:info"), query: it("prisma:query") };
    var es = { warn: () => !process.env.PRISMA_DISABLE_WARNINGS };
    function Qu(...e) {
      console.log(...e);
    }
    function ri(e, ...t) {
      es.warn() && console.warn(`${_t.warn} ${e}`, ...t);
    }
    function Ju(e, ...t) {
      console.info(`${_t.info} ${e}`, ...t);
    }
    function Gu(e, ...t) {
      console.error(`${_t.error} ${e}`, ...t);
    }
    function Hu(e, ...t) {
      console.log(`${_t.query} ${e}`, ...t);
    }
    function Ge(e, t) {
      throw new Error(t);
    }
    function ii(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    var oi = (e, t) => e.reduce((r, n) => (r[t(n)] = n, r), {});
    function ct(e, t) {
      let r = {};
      for (let n of Object.keys(e))
        r[n] = t(e[n], n);
      return r;
    }
    function si(e, t) {
      if (e.length === 0)
        return;
      let r = e[0];
      for (let n = 1; n < e.length; n++)
        t(r, e[n]) < 0 && (r = e[n]);
      return r;
    }
    function E(e, t) {
      Object.defineProperty(e, "name", { value: t, configurable: true });
    }
    var os = /* @__PURE__ */ new Set();
    var Lt = (e, t, ...r) => {
      os.has(e) || (os.add(e), ri(t, ...r));
    };
    var U = class extends Error {
      constructor(r, { code: n, clientVersion: i, meta: o, batchRequestIdx: s }) {
        super(r);
        this.name = "PrismaClientKnownRequestError", this.code = n, this.clientVersion = i, this.meta = o, Object.defineProperty(this, "batchRequestIdx", { value: s, enumerable: false, writable: true });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientKnownRequestError";
      }
    };
    E(U, "PrismaClientKnownRequestError");
    var Ce = class extends U {
      constructor(t, r) {
        super(t, { code: "P2025", clientVersion: r }), this.name = "NotFoundError";
      }
    };
    E(Ce, "NotFoundError");
    var k = class e extends Error {
      constructor(r, n, i) {
        super(r);
        this.name = "PrismaClientInitializationError", this.clientVersion = n, this.errorCode = i, Error.captureStackTrace(e);
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientInitializationError";
      }
    };
    E(k, "PrismaClientInitializationError");
    var ue = class extends Error {
      constructor(r, n) {
        super(r);
        this.name = "PrismaClientRustPanicError", this.clientVersion = n;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientRustPanicError";
      }
    };
    E(ue, "PrismaClientRustPanicError");
    var K = class extends Error {
      constructor(r, { clientVersion: n, batchRequestIdx: i }) {
        super(r);
        this.name = "PrismaClientUnknownRequestError", this.clientVersion = n, Object.defineProperty(this, "batchRequestIdx", { value: i, writable: true, enumerable: false });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientUnknownRequestError";
      }
    };
    E(K, "PrismaClientUnknownRequestError");
    var X = class extends Error {
      constructor(r, { clientVersion: n }) {
        super(r);
        this.name = "PrismaClientValidationError";
        this.clientVersion = n;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientValidationError";
      }
    };
    E(X, "PrismaClientValidationError");
    var pt = class {
      constructor(t) {
        this._engine = t;
      }
      prometheus(t) {
        return this._engine.metrics(__spreadValues({ format: "prometheus" }, t));
      }
      json(t) {
        return this._engine.metrics(__spreadValues({ format: "json" }, t));
      }
    };
    function $t(e) {
      let t;
      return { get() {
        return t || (t = { value: e() }), t.value;
      } };
    }
    function as(e, t) {
      let r = $t(() => zu(t));
      Object.defineProperty(e, "dmmf", { get: () => r.get() });
    }
    function zu(e) {
      return { datamodel: { models: ai(e.models), enums: ai(e.enums), types: ai(e.types) } };
    }
    function ai(e) {
      return Object.entries(e).map(([t, r]) => __spreadValues({ name: t }, r));
    }
    var Cl = require("async_hooks");
    var Al = require("events");
    var Rl = S(require("fs"));
    var fr = S(require("path"));
    var oe = class e {
      constructor(t, r) {
        if (t.length - 1 !== r.length)
          throw t.length === 0 ? new TypeError("Expected at least 1 string") : new TypeError(`Expected ${t.length} strings to have ${t.length - 1} values`);
        let n = r.reduce((s, a) => s + (a instanceof e ? a.values.length : 1), 0);
        this.values = new Array(n), this.strings = new Array(n + 1), this.strings[0] = t[0];
        let i = 0, o = 0;
        for (; i < r.length; ) {
          let s = r[i++], a = t[i];
          if (s instanceof e) {
            this.strings[o] += s.strings[0];
            let l = 0;
            for (; l < s.values.length; )
              this.values[o++] = s.values[l++], this.strings[o] = s.strings[l];
            this.strings[o] += a;
          } else
            this.values[o++] = s, this.strings[o] = a;
        }
      }
      get text() {
        let t = 1, r = this.strings[0];
        for (; t < this.strings.length; )
          r += `$${t}${this.strings[t++]}`;
        return r;
      }
      get sql() {
        let t = 1, r = this.strings[0];
        for (; t < this.strings.length; )
          r += `?${this.strings[t++]}`;
        return r;
      }
      inspect() {
        return { text: this.text, sql: this.sql, values: this.values };
      }
    };
    function ls(e, t = ",", r = "", n = "") {
      if (e.length === 0)
        throw new TypeError("Expected `join([])` to be called with an array of multiple elements, but got an empty array");
      return new oe([r, ...Array(e.length - 1).fill(t), n], e);
    }
    function li(e) {
      return new oe([e], []);
    }
    var us = li("");
    function ui(e, ...t) {
      return new oe(e, t);
    }
    function qt(e) {
      return { getKeys() {
        return Object.keys(e);
      }, getPropertyValue(t) {
        return e[t];
      } };
    }
    function re(e, t) {
      return { getKeys() {
        return [e];
      }, getPropertyValue() {
        return t();
      } };
    }
    var xe = class {
      constructor() {
        this._map = /* @__PURE__ */ new Map();
      }
      get(t) {
        var _a4;
        return (_a4 = this._map.get(t)) == null ? void 0 : _a4.value;
      }
      set(t, r) {
        this._map.set(t, { value: r });
      }
      getOrCreate(t, r) {
        let n = this._map.get(t);
        if (n)
          return n.value;
        let i = r();
        return this.set(t, i), i;
      }
    };
    function He(e) {
      let t = new xe();
      return { getKeys() {
        return e.getKeys();
      }, getPropertyValue(r) {
        return t.getOrCreate(r, () => e.getPropertyValue(r));
      }, getPropertyDescriptor(r) {
        var _a4;
        return (_a4 = e.getPropertyDescriptor) == null ? void 0 : _a4.call(e, r);
      } };
    }
    var ds = require("util");
    var _r = { enumerable: true, configurable: true, writable: true };
    function Nr(e) {
      let t = new Set(e);
      return { getOwnPropertyDescriptor: () => _r, has: (r, n) => t.has(n), set: (r, n, i) => t.add(n) && Reflect.set(r, n, i), ownKeys: () => [...t] };
    }
    var cs = Symbol.for("nodejs.util.inspect.custom");
    function be(e, t) {
      let r = Yu(t), n = /* @__PURE__ */ new Set(), i = new Proxy(e, { get(o, s) {
        if (n.has(s))
          return o[s];
        let a = r.get(s);
        return a ? a.getPropertyValue(s) : o[s];
      }, has(o, s) {
        var _a4, _b2;
        if (n.has(s))
          return true;
        let a = r.get(s);
        return a ? (_b2 = (_a4 = a.has) == null ? void 0 : _a4.call(a, s)) != null ? _b2 : true : Reflect.has(o, s);
      }, ownKeys(o) {
        let s = ps(Reflect.ownKeys(o), r), a = ps(Array.from(r.keys()), r);
        return [.../* @__PURE__ */ new Set([...s, ...a, ...n])];
      }, set(o, s, a) {
        var _a4, _b2, _c2;
        return ((_c2 = (_b2 = (_a4 = r.get(s)) == null ? void 0 : _a4.getPropertyDescriptor) == null ? void 0 : _b2.call(_a4, s)) == null ? void 0 : _c2.writable) === false ? false : (n.add(s), Reflect.set(o, s, a));
      }, getOwnPropertyDescriptor(o, s) {
        let a = Reflect.getOwnPropertyDescriptor(o, s);
        if (a && !a.configurable)
          return a;
        let l = r.get(s);
        return l ? l.getPropertyDescriptor ? __spreadValues(__spreadValues({}, _r), l == null ? void 0 : l.getPropertyDescriptor(s)) : _r : a;
      }, defineProperty(o, s, a) {
        return n.add(s), Reflect.defineProperty(o, s, a);
      } });
      return i[cs] = function(o, s, a = ds.inspect) {
        let l = __spreadValues({}, this);
        return delete l[cs], a(l, s);
      }, i;
    }
    function Yu(e) {
      let t = /* @__PURE__ */ new Map();
      for (let r of e) {
        let n = r.getKeys();
        for (let i of n)
          t.set(i, r);
      }
      return t;
    }
    function ps(e, t) {
      return e.filter((r) => {
        var _a4, _b2, _c2;
        return (_c2 = (_b2 = (_a4 = t.get(r)) == null ? void 0 : _a4.has) == null ? void 0 : _b2.call(_a4, r)) != null ? _c2 : true;
      });
    }
    function Vt(e) {
      return { getKeys() {
        return e;
      }, has() {
        return false;
      }, getPropertyValue() {
      } };
    }
    var dt = class {
      constructor(t = 0, r) {
        this.context = r;
        this.lines = [];
        this.currentLine = "";
        this.currentIndent = 0;
        this.currentIndent = t;
      }
      write(t) {
        return typeof t == "string" ? this.currentLine += t : t.write(this), this;
      }
      writeJoined(t, r) {
        let n = r.length - 1;
        for (let i = 0; i < r.length; i++)
          this.write(r[i]), i !== n && this.write(t);
        return this;
      }
      writeLine(t) {
        return this.write(t).newLine();
      }
      newLine() {
        this.lines.push(this.indentedCurrentLine()), this.currentLine = "", this.marginSymbol = void 0;
        let t = this.afterNextNewLineCallback;
        return this.afterNextNewLineCallback = void 0, t == null ? void 0 : t(), this;
      }
      withIndent(t) {
        return this.indent(), t(this), this.unindent(), this;
      }
      afterNextNewline(t) {
        return this.afterNextNewLineCallback = t, this;
      }
      indent() {
        return this.currentIndent++, this;
      }
      unindent() {
        return this.currentIndent > 0 && this.currentIndent--, this;
      }
      addMarginSymbol(t) {
        return this.marginSymbol = t, this;
      }
      toString() {
        return this.lines.concat(this.indentedCurrentLine()).join(`
`);
      }
      getCurrentLineLength() {
        return this.currentLine.length;
      }
      indentedCurrentLine() {
        let t = this.currentLine.padStart(this.currentLine.length + 2 * this.currentIndent);
        return this.marginSymbol ? this.marginSymbol + t.slice(1) : t;
      }
    };
    var Lr = Symbol();
    var ci = /* @__PURE__ */ new WeakMap();
    var Ae = class {
      constructor(t) {
        t === Lr ? ci.set(this, `Prisma.${this._getName()}`) : ci.set(this, `new Prisma.${this._getNamespace()}.${this._getName()}()`);
      }
      _getName() {
        return this.constructor.name;
      }
      toString() {
        return ci.get(this);
      }
    };
    var jt = class extends Ae {
      _getNamespace() {
        return "NullTypes";
      }
    };
    var Bt = class extends jt {
    };
    pi(Bt, "DbNull");
    var Ut = class extends jt {
    };
    pi(Ut, "JsonNull");
    var Kt = class extends jt {
    };
    pi(Kt, "AnyNull");
    var $r = { classes: { DbNull: Bt, JsonNull: Ut, AnyNull: Kt }, instances: { DbNull: new Bt(Lr), JsonNull: new Ut(Lr), AnyNull: new Kt(Lr) } };
    function pi(e, t) {
      Object.defineProperty(e, "name", { value: t, configurable: true });
    }
    function mt(e) {
      return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
    }
    function qr(e) {
      return e.toString() !== "Invalid Date";
    }
    var ft = 9e15;
    var Le = 1e9;
    var di = "0123456789abcdef";
    var jr = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058";
    var Br = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789";
    var mi = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -ft, maxE: ft, crypto: false };
    var ys;
    var Re;
    var w = true;
    var Kr = "[DecimalError] ";
    var Ne = Kr + "Invalid argument: ";
    var hs = Kr + "Precision limit exceeded";
    var xs = Kr + "crypto unavailable";
    var bs = "[object Decimal]";
    var ee = Math.floor;
    var j = Math.pow;
    var Zu = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i;
    var Xu = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i;
    var ec = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i;
    var Es = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
    var ge = 1e7;
    var b = 7;
    var tc = 9007199254740991;
    var rc = jr.length - 1;
    var fi = Br.length - 1;
    var m = { toStringTag: bs };
    m.absoluteValue = m.abs = function() {
      var e = new this.constructor(this);
      return e.s < 0 && (e.s = 1), h(e);
    };
    m.ceil = function() {
      return h(new this.constructor(this), this.e + 1, 2);
    };
    m.clampedTo = m.clamp = function(e, t) {
      var r, n = this, i = n.constructor;
      if (e = new i(e), t = new i(t), !e.s || !t.s)
        return new i(NaN);
      if (e.gt(t))
        throw Error(Ne + t);
      return r = n.cmp(e), r < 0 ? e : n.cmp(t) > 0 ? t : new i(n);
    };
    m.comparedTo = m.cmp = function(e) {
      var t, r, n, i, o = this, s = o.d, a = (e = new o.constructor(e)).d, l = o.s, u = e.s;
      if (!s || !a)
        return !l || !u ? NaN : l !== u ? l : s === a ? 0 : !s ^ l < 0 ? 1 : -1;
      if (!s[0] || !a[0])
        return s[0] ? l : a[0] ? -u : 0;
      if (l !== u)
        return l;
      if (o.e !== e.e)
        return o.e > e.e ^ l < 0 ? 1 : -1;
      for (n = s.length, i = a.length, t = 0, r = n < i ? n : i; t < r; ++t)
        if (s[t] !== a[t])
          return s[t] > a[t] ^ l < 0 ? 1 : -1;
      return n === i ? 0 : n > i ^ l < 0 ? 1 : -1;
    };
    m.cosine = m.cos = function() {
      var e, t, r = this, n = r.constructor;
      return r.d ? r.d[0] ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + b, n.rounding = 1, r = nc(n, Cs(n, r)), n.precision = e, n.rounding = t, h(Re == 2 || Re == 3 ? r.neg() : r, e, t, true)) : new n(1) : new n(NaN);
    };
    m.cubeRoot = m.cbrt = function() {
      var e, t, r, n, i, o, s, a, l, u, c = this, p = c.constructor;
      if (!c.isFinite() || c.isZero())
        return new p(c);
      for (w = false, o = c.s * j(c.s * c, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (r = W(c.d), e = c.e, (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"), o = j(r, 1 / 3), e = ee((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? r = "5e" + e : (r = o.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), n = new p(r), n.s = c.s) : n = new p(o.toString()), s = (e = p.precision) + 3; ; )
        if (a = n, l = a.times(a).times(a), u = l.plus(c), n = O(u.plus(c).times(a), u.plus(l), s + 2, 1), W(a.d).slice(0, s) === (r = W(n.d)).slice(0, s))
          if (r = r.slice(s - 3, s + 1), r == "9999" || !i && r == "4999") {
            if (!i && (h(a, e + 1, 0), a.times(a).times(a).eq(c))) {
              n = a;
              break;
            }
            s += 4, i = 1;
          } else {
            (!+r || !+r.slice(1) && r.charAt(0) == "5") && (h(n, e + 1, 1), t = !n.times(n).times(n).eq(c));
            break;
          }
      return w = true, h(n, e, p.rounding, t);
    };
    m.decimalPlaces = m.dp = function() {
      var e, t = this.d, r = NaN;
      if (t) {
        if (e = t.length - 1, r = (e - ee(this.e / b)) * b, e = t[e], e)
          for (; e % 10 == 0; e /= 10)
            r--;
        r < 0 && (r = 0);
      }
      return r;
    };
    m.dividedBy = m.div = function(e) {
      return O(this, new this.constructor(e));
    };
    m.dividedToIntegerBy = m.divToInt = function(e) {
      var t = this, r = t.constructor;
      return h(O(t, new r(e), 0, 1, 1), r.precision, r.rounding);
    };
    m.equals = m.eq = function(e) {
      return this.cmp(e) === 0;
    };
    m.floor = function() {
      return h(new this.constructor(this), this.e + 1, 3);
    };
    m.greaterThan = m.gt = function(e) {
      return this.cmp(e) > 0;
    };
    m.greaterThanOrEqualTo = m.gte = function(e) {
      var t = this.cmp(e);
      return t == 1 || t === 0;
    };
    m.hyperbolicCosine = m.cosh = function() {
      var e, t, r, n, i, o = this, s = o.constructor, a = new s(1);
      if (!o.isFinite())
        return new s(o.s ? 1 / 0 : NaN);
      if (o.isZero())
        return a;
      r = s.precision, n = s.rounding, s.precision = r + Math.max(o.e, o.sd()) + 4, s.rounding = 1, i = o.d.length, i < 32 ? (e = Math.ceil(i / 3), t = (1 / Jr(4, e)).toString()) : (e = 16, t = "2.3283064365386962890625e-10"), o = gt(s, 1, o.times(t), new s(1), true);
      for (var l, u = e, c = new s(8); u--; )
        l = o.times(o), o = a.minus(l.times(c.minus(l.times(c))));
      return h(o, s.precision = r, s.rounding = n, true);
    };
    m.hyperbolicSine = m.sinh = function() {
      var e, t, r, n, i = this, o = i.constructor;
      if (!i.isFinite() || i.isZero())
        return new o(i);
      if (t = o.precision, r = o.rounding, o.precision = t + Math.max(i.e, i.sd()) + 4, o.rounding = 1, n = i.d.length, n < 3)
        i = gt(o, 2, i, i, true);
      else {
        e = 1.4 * Math.sqrt(n), e = e > 16 ? 16 : e | 0, i = i.times(1 / Jr(5, e)), i = gt(o, 2, i, i, true);
        for (var s, a = new o(5), l = new o(16), u = new o(20); e--; )
          s = i.times(i), i = i.times(a.plus(s.times(l.times(s).plus(u))));
      }
      return o.precision = t, o.rounding = r, h(i, t, r, true);
    };
    m.hyperbolicTangent = m.tanh = function() {
      var e, t, r = this, n = r.constructor;
      return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 7, n.rounding = 1, O(r.sinh(), r.cosh(), n.precision = e, n.rounding = t)) : new n(r.s);
    };
    m.inverseCosine = m.acos = function() {
      var e, t = this, r = t.constructor, n = t.abs().cmp(1), i = r.precision, o = r.rounding;
      return n !== -1 ? n === 0 ? t.isNeg() ? fe(r, i, o) : new r(0) : new r(NaN) : t.isZero() ? fe(r, i + 4, o).times(0.5) : (r.precision = i + 6, r.rounding = 1, t = t.asin(), e = fe(r, i + 4, o).times(0.5), r.precision = i, r.rounding = o, e.minus(t));
    };
    m.inverseHyperbolicCosine = m.acosh = function() {
      var e, t, r = this, n = r.constructor;
      return r.lte(1) ? new n(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, n.rounding = 1, w = false, r = r.times(r).minus(1).sqrt().plus(r), w = true, n.precision = e, n.rounding = t, r.ln()) : new n(r);
    };
    m.inverseHyperbolicSine = m.asinh = function() {
      var e, t, r = this, n = r.constructor;
      return !r.isFinite() || r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, n.rounding = 1, w = false, r = r.times(r).plus(1).sqrt().plus(r), w = true, n.precision = e, n.rounding = t, r.ln());
    };
    m.inverseHyperbolicTangent = m.atanh = function() {
      var e, t, r, n, i = this, o = i.constructor;
      return i.isFinite() ? i.e >= 0 ? new o(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = o.precision, t = o.rounding, n = i.sd(), Math.max(n, e) < 2 * -i.e - 1 ? h(new o(i), e, t, true) : (o.precision = r = n - i.e, i = O(i.plus(1), new o(1).minus(i), r + e, 1), o.precision = e + 4, o.rounding = 1, i = i.ln(), o.precision = e, o.rounding = t, i.times(0.5))) : new o(NaN);
    };
    m.inverseSine = m.asin = function() {
      var e, t, r, n, i = this, o = i.constructor;
      return i.isZero() ? new o(i) : (t = i.abs().cmp(1), r = o.precision, n = o.rounding, t !== -1 ? t === 0 ? (e = fe(o, r + 4, n).times(0.5), e.s = i.s, e) : new o(NaN) : (o.precision = r + 6, o.rounding = 1, i = i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan(), o.precision = r, o.rounding = n, i.times(2)));
    };
    m.inverseTangent = m.atan = function() {
      var e, t, r, n, i, o, s, a, l, u = this, c = u.constructor, p = c.precision, d = c.rounding;
      if (u.isFinite()) {
        if (u.isZero())
          return new c(u);
        if (u.abs().eq(1) && p + 4 <= fi)
          return s = fe(c, p + 4, d).times(0.25), s.s = u.s, s;
      } else {
        if (!u.s)
          return new c(NaN);
        if (p + 4 <= fi)
          return s = fe(c, p + 4, d).times(0.5), s.s = u.s, s;
      }
      for (c.precision = a = p + 10, c.rounding = 1, r = Math.min(28, a / b + 2 | 0), e = r; e; --e)
        u = u.div(u.times(u).plus(1).sqrt().plus(1));
      for (w = false, t = Math.ceil(a / b), n = 1, l = u.times(u), s = new c(u), i = u; e !== -1; )
        if (i = i.times(l), o = s.minus(i.div(n += 2)), i = i.times(l), s = o.plus(i.div(n += 2)), s.d[t] !== void 0)
          for (e = t; s.d[e] === o.d[e] && e--; )
            ;
      return r && (s = s.times(2 << r - 1)), w = true, h(s, c.precision = p, c.rounding = d, true);
    };
    m.isFinite = function() {
      return !!this.d;
    };
    m.isInteger = m.isInt = function() {
      return !!this.d && ee(this.e / b) > this.d.length - 2;
    };
    m.isNaN = function() {
      return !this.s;
    };
    m.isNegative = m.isNeg = function() {
      return this.s < 0;
    };
    m.isPositive = m.isPos = function() {
      return this.s > 0;
    };
    m.isZero = function() {
      return !!this.d && this.d[0] === 0;
    };
    m.lessThan = m.lt = function(e) {
      return this.cmp(e) < 0;
    };
    m.lessThanOrEqualTo = m.lte = function(e) {
      return this.cmp(e) < 1;
    };
    m.logarithm = m.log = function(e) {
      var t, r, n, i, o, s, a, l, u = this, c = u.constructor, p = c.precision, d = c.rounding, f = 5;
      if (e == null)
        e = new c(10), t = true;
      else {
        if (e = new c(e), r = e.d, e.s < 0 || !r || !r[0] || e.eq(1))
          return new c(NaN);
        t = e.eq(10);
      }
      if (r = u.d, u.s < 0 || !r || !r[0] || u.eq(1))
        return new c(r && !r[0] ? -1 / 0 : u.s != 1 ? NaN : r ? 0 : 1 / 0);
      if (t)
        if (r.length > 1)
          o = true;
        else {
          for (i = r[0]; i % 10 === 0; )
            i /= 10;
          o = i !== 1;
        }
      if (w = false, a = p + f, s = _e(u, a), n = t ? Ur(c, a + 10) : _e(e, a), l = O(s, n, a, 1), Qt(l.d, i = p, d))
        do
          if (a += 10, s = _e(u, a), n = t ? Ur(c, a + 10) : _e(e, a), l = O(s, n, a, 1), !o) {
            +W(l.d).slice(i + 1, i + 15) + 1 == 1e14 && (l = h(l, p + 1, 0));
            break;
          }
        while (Qt(l.d, i += 10, d));
      return w = true, h(l, p, d);
    };
    m.minus = m.sub = function(e) {
      var t, r, n, i, o, s, a, l, u, c, p, d, f = this, y = f.constructor;
      if (e = new y(e), !f.d || !e.d)
        return !f.s || !e.s ? e = new y(NaN) : f.d ? e.s = -e.s : e = new y(e.d || f.s !== e.s ? f : NaN), e;
      if (f.s != e.s)
        return e.s = -e.s, f.plus(e);
      if (u = f.d, d = e.d, a = y.precision, l = y.rounding, !u[0] || !d[0]) {
        if (d[0])
          e.s = -e.s;
        else if (u[0])
          e = new y(f);
        else
          return new y(l === 3 ? -0 : 0);
        return w ? h(e, a, l) : e;
      }
      if (r = ee(e.e / b), c = ee(f.e / b), u = u.slice(), o = c - r, o) {
        for (p = o < 0, p ? (t = u, o = -o, s = d.length) : (t = d, r = c, s = u.length), n = Math.max(Math.ceil(a / b), s) + 2, o > n && (o = n, t.length = 1), t.reverse(), n = o; n--; )
          t.push(0);
        t.reverse();
      } else {
        for (n = u.length, s = d.length, p = n < s, p && (s = n), n = 0; n < s; n++)
          if (u[n] != d[n]) {
            p = u[n] < d[n];
            break;
          }
        o = 0;
      }
      for (p && (t = u, u = d, d = t, e.s = -e.s), s = u.length, n = d.length - s; n > 0; --n)
        u[s++] = 0;
      for (n = d.length; n > o; ) {
        if (u[--n] < d[n]) {
          for (i = n; i && u[--i] === 0; )
            u[i] = ge - 1;
          --u[i], u[n] += ge;
        }
        u[n] -= d[n];
      }
      for (; u[--s] === 0; )
        u.pop();
      for (; u[0] === 0; u.shift())
        --r;
      return u[0] ? (e.d = u, e.e = Qr(u, r), w ? h(e, a, l) : e) : new y(l === 3 ? -0 : 0);
    };
    m.modulo = m.mod = function(e) {
      var t, r = this, n = r.constructor;
      return e = new n(e), !r.d || !e.s || e.d && !e.d[0] ? new n(NaN) : !e.d || r.d && !r.d[0] ? h(new n(r), n.precision, n.rounding) : (w = false, n.modulo == 9 ? (t = O(r, e.abs(), 0, 3, 1), t.s *= e.s) : t = O(r, e, 0, n.modulo, 1), t = t.times(e), w = true, r.minus(t));
    };
    m.naturalExponential = m.exp = function() {
      return gi(this);
    };
    m.naturalLogarithm = m.ln = function() {
      return _e(this);
    };
    m.negated = m.neg = function() {
      var e = new this.constructor(this);
      return e.s = -e.s, h(e);
    };
    m.plus = m.add = function(e) {
      var t, r, n, i, o, s, a, l, u, c, p = this, d = p.constructor;
      if (e = new d(e), !p.d || !e.d)
        return !p.s || !e.s ? e = new d(NaN) : p.d || (e = new d(e.d || p.s === e.s ? p : NaN)), e;
      if (p.s != e.s)
        return e.s = -e.s, p.minus(e);
      if (u = p.d, c = e.d, a = d.precision, l = d.rounding, !u[0] || !c[0])
        return c[0] || (e = new d(p)), w ? h(e, a, l) : e;
      if (o = ee(p.e / b), n = ee(e.e / b), u = u.slice(), i = o - n, i) {
        for (i < 0 ? (r = u, i = -i, s = c.length) : (r = c, n = o, s = u.length), o = Math.ceil(a / b), s = o > s ? o + 1 : s + 1, i > s && (i = s, r.length = 1), r.reverse(); i--; )
          r.push(0);
        r.reverse();
      }
      for (s = u.length, i = c.length, s - i < 0 && (i = s, r = c, c = u, u = r), t = 0; i; )
        t = (u[--i] = u[i] + c[i] + t) / ge | 0, u[i] %= ge;
      for (t && (u.unshift(t), ++n), s = u.length; u[--s] == 0; )
        u.pop();
      return e.d = u, e.e = Qr(u, n), w ? h(e, a, l) : e;
    };
    m.precision = m.sd = function(e) {
      var t, r = this;
      if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
        throw Error(Ne + e);
      return r.d ? (t = ws(r.d), e && r.e + 1 > t && (t = r.e + 1)) : t = NaN, t;
    };
    m.round = function() {
      var e = this, t = e.constructor;
      return h(new t(e), e.e + 1, t.rounding);
    };
    m.sine = m.sin = function() {
      var e, t, r = this, n = r.constructor;
      return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + b, n.rounding = 1, r = oc(n, Cs(n, r)), n.precision = e, n.rounding = t, h(Re > 2 ? r.neg() : r, e, t, true)) : new n(NaN);
    };
    m.squareRoot = m.sqrt = function() {
      var e, t, r, n, i, o, s = this, a = s.d, l = s.e, u = s.s, c = s.constructor;
      if (u !== 1 || !a || !a[0])
        return new c(!u || u < 0 && (!a || a[0]) ? NaN : a ? s : 1 / 0);
      for (w = false, u = Math.sqrt(+s), u == 0 || u == 1 / 0 ? (t = W(a), (t.length + l) % 2 == 0 && (t += "0"), u = Math.sqrt(t), l = ee((l + 1) / 2) - (l < 0 || l % 2), u == 1 / 0 ? t = "5e" + l : (t = u.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + l), n = new c(t)) : n = new c(u.toString()), r = (l = c.precision) + 3; ; )
        if (o = n, n = o.plus(O(s, o, r + 2, 1)).times(0.5), W(o.d).slice(0, r) === (t = W(n.d)).slice(0, r))
          if (t = t.slice(r - 3, r + 1), t == "9999" || !i && t == "4999") {
            if (!i && (h(o, l + 1, 0), o.times(o).eq(s))) {
              n = o;
              break;
            }
            r += 4, i = 1;
          } else {
            (!+t || !+t.slice(1) && t.charAt(0) == "5") && (h(n, l + 1, 1), e = !n.times(n).eq(s));
            break;
          }
      return w = true, h(n, l, c.rounding, e);
    };
    m.tangent = m.tan = function() {
      var e, t, r = this, n = r.constructor;
      return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 10, n.rounding = 1, r = r.sin(), r.s = 1, r = O(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0), n.precision = e, n.rounding = t, h(Re == 2 || Re == 4 ? r.neg() : r, e, t, true)) : new n(NaN);
    };
    m.times = m.mul = function(e) {
      var t, r, n, i, o, s, a, l, u, c = this, p = c.constructor, d = c.d, f = (e = new p(e)).d;
      if (e.s *= c.s, !d || !d[0] || !f || !f[0])
        return new p(!e.s || d && !d[0] && !f || f && !f[0] && !d ? NaN : !d || !f ? e.s / 0 : e.s * 0);
      for (r = ee(c.e / b) + ee(e.e / b), l = d.length, u = f.length, l < u && (o = d, d = f, f = o, s = l, l = u, u = s), o = [], s = l + u, n = s; n--; )
        o.push(0);
      for (n = u; --n >= 0; ) {
        for (t = 0, i = l + n; i > n; )
          a = o[i] + f[n] * d[i - n - 1] + t, o[i--] = a % ge | 0, t = a / ge | 0;
        o[i] = (o[i] + t) % ge | 0;
      }
      for (; !o[--s]; )
        o.pop();
      return t ? ++r : o.shift(), e.d = o, e.e = Qr(o, r), w ? h(e, p.precision, p.rounding) : e;
    };
    m.toBinary = function(e, t) {
      return hi(this, 2, e, t);
    };
    m.toDecimalPlaces = m.toDP = function(e, t) {
      var r = this, n = r.constructor;
      return r = new n(r), e === void 0 ? r : (se(e, 0, Le), t === void 0 ? t = n.rounding : se(t, 0, 8), h(r, e + r.e + 1, t));
    };
    m.toExponential = function(e, t) {
      var r, n = this, i = n.constructor;
      return e === void 0 ? r = Ee(n, true) : (se(e, 0, Le), t === void 0 ? t = i.rounding : se(t, 0, 8), n = h(new i(n), e + 1, t), r = Ee(n, true, e + 1)), n.isNeg() && !n.isZero() ? "-" + r : r;
    };
    m.toFixed = function(e, t) {
      var r, n, i = this, o = i.constructor;
      return e === void 0 ? r = Ee(i) : (se(e, 0, Le), t === void 0 ? t = o.rounding : se(t, 0, 8), n = h(new o(i), e + i.e + 1, t), r = Ee(n, false, e + n.e + 1)), i.isNeg() && !i.isZero() ? "-" + r : r;
    };
    m.toFraction = function(e) {
      var t, r, n, i, o, s, a, l, u, c, p, d, f = this, y = f.d, g = f.constructor;
      if (!y)
        return new g(f);
      if (u = r = new g(1), n = l = new g(0), t = new g(n), o = t.e = ws(y) - f.e - 1, s = o % b, t.d[0] = j(10, s < 0 ? b + s : s), e == null)
        e = o > 0 ? t : u;
      else {
        if (a = new g(e), !a.isInt() || a.lt(u))
          throw Error(Ne + a);
        e = a.gt(t) ? o > 0 ? t : u : a;
      }
      for (w = false, a = new g(W(y)), c = g.precision, g.precision = o = y.length * b * 2; p = O(a, t, 0, 1, 1), i = r.plus(p.times(n)), i.cmp(e) != 1; )
        r = n, n = i, i = u, u = l.plus(p.times(i)), l = i, i = t, t = a.minus(p.times(i)), a = i;
      return i = O(e.minus(r), n, 0, 1, 1), l = l.plus(i.times(u)), r = r.plus(i.times(n)), l.s = u.s = f.s, d = O(u, n, o, 1).minus(f).abs().cmp(O(l, r, o, 1).minus(f).abs()) < 1 ? [u, n] : [l, r], g.precision = c, w = true, d;
    };
    m.toHexadecimal = m.toHex = function(e, t) {
      return hi(this, 16, e, t);
    };
    m.toNearest = function(e, t) {
      var r = this, n = r.constructor;
      if (r = new n(r), e == null) {
        if (!r.d)
          return r;
        e = new n(1), t = n.rounding;
      } else {
        if (e = new n(e), t === void 0 ? t = n.rounding : se(t, 0, 8), !r.d)
          return e.s ? r : e;
        if (!e.d)
          return e.s && (e.s = r.s), e;
      }
      return e.d[0] ? (w = false, r = O(r, e, 0, t, 1).times(e), w = true, h(r)) : (e.s = r.s, r = e), r;
    };
    m.toNumber = function() {
      return +this;
    };
    m.toOctal = function(e, t) {
      return hi(this, 8, e, t);
    };
    m.toPower = m.pow = function(e) {
      var t, r, n, i, o, s, a = this, l = a.constructor, u = +(e = new l(e));
      if (!a.d || !e.d || !a.d[0] || !e.d[0])
        return new l(j(+a, u));
      if (a = new l(a), a.eq(1))
        return a;
      if (n = l.precision, o = l.rounding, e.eq(1))
        return h(a, n, o);
      if (t = ee(e.e / b), t >= e.d.length - 1 && (r = u < 0 ? -u : u) <= tc)
        return i = Ps(l, a, r, n), e.s < 0 ? new l(1).div(i) : h(i, n, o);
      if (s = a.s, s < 0) {
        if (t < e.d.length - 1)
          return new l(NaN);
        if (e.d[t] & 1 || (s = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1)
          return a.s = s, a;
      }
      return r = j(+a, u), t = r == 0 || !isFinite(r) ? ee(u * (Math.log("0." + W(a.d)) / Math.LN10 + a.e + 1)) : new l(r + "").e, t > l.maxE + 1 || t < l.minE - 1 ? new l(t > 0 ? s / 0 : 0) : (w = false, l.rounding = a.s = 1, r = Math.min(12, (t + "").length), i = gi(e.times(_e(a, n + r)), n), i.d && (i = h(i, n + 5, 1), Qt(i.d, n, o) && (t = n + 10, i = h(gi(e.times(_e(a, t + r)), t), t + 5, 1), +W(i.d).slice(n + 1, n + 15) + 1 == 1e14 && (i = h(i, n + 1, 0)))), i.s = s, w = true, l.rounding = o, h(i, n, o));
    };
    m.toPrecision = function(e, t) {
      var r, n = this, i = n.constructor;
      return e === void 0 ? r = Ee(n, n.e <= i.toExpNeg || n.e >= i.toExpPos) : (se(e, 1, Le), t === void 0 ? t = i.rounding : se(t, 0, 8), n = h(new i(n), e, t), r = Ee(n, e <= n.e || n.e <= i.toExpNeg, e)), n.isNeg() && !n.isZero() ? "-" + r : r;
    };
    m.toSignificantDigits = m.toSD = function(e, t) {
      var r = this, n = r.constructor;
      return e === void 0 ? (e = n.precision, t = n.rounding) : (se(e, 1, Le), t === void 0 ? t = n.rounding : se(t, 0, 8)), h(new n(r), e, t);
    };
    m.toString = function() {
      var e = this, t = e.constructor, r = Ee(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
      return e.isNeg() && !e.isZero() ? "-" + r : r;
    };
    m.truncated = m.trunc = function() {
      return h(new this.constructor(this), this.e + 1, 1);
    };
    m.valueOf = m.toJSON = function() {
      var e = this, t = e.constructor, r = Ee(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
      return e.isNeg() ? "-" + r : r;
    };
    function W(e) {
      var t, r, n, i = e.length - 1, o = "", s = e[0];
      if (i > 0) {
        for (o += s, t = 1; t < i; t++)
          n = e[t] + "", r = b - n.length, r && (o += De(r)), o += n;
        s = e[t], n = s + "", r = b - n.length, r && (o += De(r));
      } else if (s === 0)
        return "0";
      for (; s % 10 === 0; )
        s /= 10;
      return o + s;
    }
    function se(e, t, r) {
      if (e !== ~~e || e < t || e > r)
        throw Error(Ne + e);
    }
    function Qt(e, t, r, n) {
      var i, o, s, a;
      for (o = e[0]; o >= 10; o /= 10)
        --t;
      return --t < 0 ? (t += b, i = 0) : (i = Math.ceil((t + 1) / b), t %= b), o = j(10, b - t), a = e[i] % o | 0, n == null ? t < 3 ? (t == 0 ? a = a / 100 | 0 : t == 1 && (a = a / 10 | 0), s = r < 4 && a == 99999 || r > 3 && a == 49999 || a == 5e4 || a == 0) : s = (r < 4 && a + 1 == o || r > 3 && a + 1 == o / 2) && (e[i + 1] / o / 100 | 0) == j(10, t - 2) - 1 || (a == o / 2 || a == 0) && (e[i + 1] / o / 100 | 0) == 0 : t < 4 ? (t == 0 ? a = a / 1e3 | 0 : t == 1 ? a = a / 100 | 0 : t == 2 && (a = a / 10 | 0), s = (n || r < 4) && a == 9999 || !n && r > 3 && a == 4999) : s = ((n || r < 4) && a + 1 == o || !n && r > 3 && a + 1 == o / 2) && (e[i + 1] / o / 1e3 | 0) == j(10, t - 3) - 1, s;
    }
    function Vr(e, t, r) {
      for (var n, i = [0], o, s = 0, a = e.length; s < a; ) {
        for (o = i.length; o--; )
          i[o] *= t;
        for (i[0] += di.indexOf(e.charAt(s++)), n = 0; n < i.length; n++)
          i[n] > r - 1 && (i[n + 1] === void 0 && (i[n + 1] = 0), i[n + 1] += i[n] / r | 0, i[n] %= r);
      }
      return i.reverse();
    }
    function nc(e, t) {
      var r, n, i;
      if (t.isZero())
        return t;
      n = t.d.length, n < 32 ? (r = Math.ceil(n / 3), i = (1 / Jr(4, r)).toString()) : (r = 16, i = "2.3283064365386962890625e-10"), e.precision += r, t = gt(e, 1, t.times(i), new e(1));
      for (var o = r; o--; ) {
        var s = t.times(t);
        t = s.times(s).minus(s).times(8).plus(1);
      }
      return e.precision -= r, t;
    }
    var O = function() {
      function e(n, i, o) {
        var s, a = 0, l = n.length;
        for (n = n.slice(); l--; )
          s = n[l] * i + a, n[l] = s % o | 0, a = s / o | 0;
        return a && n.unshift(a), n;
      }
      function t(n, i, o, s) {
        var a, l;
        if (o != s)
          l = o > s ? 1 : -1;
        else
          for (a = l = 0; a < o; a++)
            if (n[a] != i[a]) {
              l = n[a] > i[a] ? 1 : -1;
              break;
            }
        return l;
      }
      function r(n, i, o, s) {
        for (var a = 0; o--; )
          n[o] -= a, a = n[o] < i[o] ? 1 : 0, n[o] = a * s + n[o] - i[o];
        for (; !n[0] && n.length > 1; )
          n.shift();
      }
      return function(n, i, o, s, a, l) {
        var u, c, p, d, f, y, g, P, T, C, x, R, ce, G, Ue, $, z, Te, Y, et, gr = n.constructor, Pn = n.s == i.s ? 1 : -1, Z = n.d, F = i.d;
        if (!Z || !Z[0] || !F || !F[0])
          return new gr(!n.s || !i.s || (Z ? F && Z[0] == F[0] : !F) ? NaN : Z && Z[0] == 0 || !F ? Pn * 0 : Pn / 0);
        for (l ? (f = 1, c = n.e - i.e) : (l = ge, f = b, c = ee(n.e / f) - ee(i.e / f)), Y = F.length, z = Z.length, T = new gr(Pn), C = T.d = [], p = 0; F[p] == (Z[p] || 0); p++)
          ;
        if (F[p] > (Z[p] || 0) && c--, o == null ? (G = o = gr.precision, s = gr.rounding) : a ? G = o + (n.e - i.e) + 1 : G = o, G < 0)
          C.push(1), y = true;
        else {
          if (G = G / f + 2 | 0, p = 0, Y == 1) {
            for (d = 0, F = F[0], G++; (p < z || d) && G--; p++)
              Ue = d * l + (Z[p] || 0), C[p] = Ue / F | 0, d = Ue % F | 0;
            y = d || p < z;
          } else {
            for (d = l / (F[0] + 1) | 0, d > 1 && (F = e(F, d, l), Z = e(Z, d, l), Y = F.length, z = Z.length), $ = Y, x = Z.slice(0, Y), R = x.length; R < Y; )
              x[R++] = 0;
            et = F.slice(), et.unshift(0), Te = F[0], F[1] >= l / 2 && ++Te;
            do
              d = 0, u = t(F, x, Y, R), u < 0 ? (ce = x[0], Y != R && (ce = ce * l + (x[1] || 0)), d = ce / Te | 0, d > 1 ? (d >= l && (d = l - 1), g = e(F, d, l), P = g.length, R = x.length, u = t(g, x, P, R), u == 1 && (d--, r(g, Y < P ? et : F, P, l))) : (d == 0 && (u = d = 1), g = F.slice()), P = g.length, P < R && g.unshift(0), r(x, g, R, l), u == -1 && (R = x.length, u = t(F, x, Y, R), u < 1 && (d++, r(x, Y < R ? et : F, R, l))), R = x.length) : u === 0 && (d++, x = [0]), C[p++] = d, u && x[0] ? x[R++] = Z[$] || 0 : (x = [Z[$]], R = 1);
            while (($++ < z || x[0] !== void 0) && G--);
            y = x[0] !== void 0;
          }
          C[0] || C.shift();
        }
        if (f == 1)
          T.e = c, ys = y;
        else {
          for (p = 1, d = C[0]; d >= 10; d /= 10)
            p++;
          T.e = p + c * f - 1, h(T, a ? o + T.e + 1 : o, s, y);
        }
        return T;
      };
    }();
    function h(e, t, r, n) {
      var i, o, s, a, l, u, c, p, d, f = e.constructor;
      e:
        if (t != null) {
          if (p = e.d, !p)
            return e;
          for (i = 1, a = p[0]; a >= 10; a /= 10)
            i++;
          if (o = t - i, o < 0)
            o += b, s = t, c = p[d = 0], l = c / j(10, i - s - 1) % 10 | 0;
          else if (d = Math.ceil((o + 1) / b), a = p.length, d >= a)
            if (n) {
              for (; a++ <= d; )
                p.push(0);
              c = l = 0, i = 1, o %= b, s = o - b + 1;
            } else
              break e;
          else {
            for (c = a = p[d], i = 1; a >= 10; a /= 10)
              i++;
            o %= b, s = o - b + i, l = s < 0 ? 0 : c / j(10, i - s - 1) % 10 | 0;
          }
          if (n = n || t < 0 || p[d + 1] !== void 0 || (s < 0 ? c : c % j(10, i - s - 1)), u = r < 4 ? (l || n) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : l > 5 || l == 5 && (r == 4 || n || r == 6 && (o > 0 ? s > 0 ? c / j(10, i - s) : 0 : p[d - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), t < 1 || !p[0])
            return p.length = 0, u ? (t -= e.e + 1, p[0] = j(10, (b - t % b) % b), e.e = -t || 0) : p[0] = e.e = 0, e;
          if (o == 0 ? (p.length = d, a = 1, d--) : (p.length = d + 1, a = j(10, b - o), p[d] = s > 0 ? (c / j(10, i - s) % j(10, s) | 0) * a : 0), u)
            for (; ; )
              if (d == 0) {
                for (o = 1, s = p[0]; s >= 10; s /= 10)
                  o++;
                for (s = p[0] += a, a = 1; s >= 10; s /= 10)
                  a++;
                o != a && (e.e++, p[0] == ge && (p[0] = 1));
                break;
              } else {
                if (p[d] += a, p[d] != ge)
                  break;
                p[d--] = 0, a = 1;
              }
          for (o = p.length; p[--o] === 0; )
            p.pop();
        }
      return w && (e.e > f.maxE ? (e.d = null, e.e = NaN) : e.e < f.minE && (e.e = 0, e.d = [0])), e;
    }
    function Ee(e, t, r) {
      if (!e.isFinite())
        return Ts(e);
      var n, i = e.e, o = W(e.d), s = o.length;
      return t ? (r && (n = r - s) > 0 ? o = o.charAt(0) + "." + o.slice(1) + De(n) : s > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (o = "0." + De(-i - 1) + o, r && (n = r - s) > 0 && (o += De(n))) : i >= s ? (o += De(i + 1 - s), r && (n = r - i - 1) > 0 && (o = o + "." + De(n))) : ((n = i + 1) < s && (o = o.slice(0, n) + "." + o.slice(n)), r && (n = r - s) > 0 && (i + 1 === s && (o += "."), o += De(n))), o;
    }
    function Qr(e, t) {
      var r = e[0];
      for (t *= b; r >= 10; r /= 10)
        t++;
      return t;
    }
    function Ur(e, t, r) {
      if (t > rc)
        throw w = true, r && (e.precision = r), Error(hs);
      return h(new e(jr), t, 1, true);
    }
    function fe(e, t, r) {
      if (t > fi)
        throw Error(hs);
      return h(new e(Br), t, r, true);
    }
    function ws(e) {
      var t = e.length - 1, r = t * b + 1;
      if (t = e[t], t) {
        for (; t % 10 == 0; t /= 10)
          r--;
        for (t = e[0]; t >= 10; t /= 10)
          r++;
      }
      return r;
    }
    function De(e) {
      for (var t = ""; e--; )
        t += "0";
      return t;
    }
    function Ps(e, t, r, n) {
      var i, o = new e(1), s = Math.ceil(n / b + 4);
      for (w = false; ; ) {
        if (r % 2 && (o = o.times(t), fs(o.d, s) && (i = true)), r = ee(r / 2), r === 0) {
          r = o.d.length - 1, i && o.d[r] === 0 && ++o.d[r];
          break;
        }
        t = t.times(t), fs(t.d, s);
      }
      return w = true, o;
    }
    function ms(e) {
      return e.d[e.d.length - 1] & 1;
    }
    function vs(e, t, r) {
      for (var n, i = new e(t[0]), o = 0; ++o < t.length; )
        if (n = new e(t[o]), n.s)
          i[r](n) && (i = n);
        else {
          i = n;
          break;
        }
      return i;
    }
    function gi(e, t) {
      var r, n, i, o, s, a, l, u = 0, c = 0, p = 0, d = e.constructor, f = d.rounding, y = d.precision;
      if (!e.d || !e.d[0] || e.e > 17)
        return new d(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
      for (t == null ? (w = false, l = y) : l = t, a = new d(0.03125); e.e > -2; )
        e = e.times(a), p += 5;
      for (n = Math.log(j(2, p)) / Math.LN10 * 2 + 5 | 0, l += n, r = o = s = new d(1), d.precision = l; ; ) {
        if (o = h(o.times(e), l, 1), r = r.times(++c), a = s.plus(O(o, r, l, 1)), W(a.d).slice(0, l) === W(s.d).slice(0, l)) {
          for (i = p; i--; )
            s = h(s.times(s), l, 1);
          if (t == null)
            if (u < 3 && Qt(s.d, l - n, f, u))
              d.precision = l += 10, r = o = a = new d(1), c = 0, u++;
            else
              return h(s, d.precision = y, f, w = true);
          else
            return d.precision = y, s;
        }
        s = a;
      }
    }
    function _e(e, t) {
      var r, n, i, o, s, a, l, u, c, p, d, f = 1, y = 10, g = e, P = g.d, T = g.constructor, C = T.rounding, x = T.precision;
      if (g.s < 0 || !P || !P[0] || !g.e && P[0] == 1 && P.length == 1)
        return new T(P && !P[0] ? -1 / 0 : g.s != 1 ? NaN : P ? 0 : g);
      if (t == null ? (w = false, c = x) : c = t, T.precision = c += y, r = W(P), n = r.charAt(0), Math.abs(o = g.e) < 15e14) {
        for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
          g = g.times(e), r = W(g.d), n = r.charAt(0), f++;
        o = g.e, n > 1 ? (g = new T("0." + r), o++) : g = new T(n + "." + r.slice(1));
      } else
        return u = Ur(T, c + 2, x).times(o + ""), g = _e(new T(n + "." + r.slice(1)), c - y).plus(u), T.precision = x, t == null ? h(g, x, C, w = true) : g;
      for (p = g, l = s = g = O(g.minus(1), g.plus(1), c, 1), d = h(g.times(g), c, 1), i = 3; ; ) {
        if (s = h(s.times(d), c, 1), u = l.plus(O(s, new T(i), c, 1)), W(u.d).slice(0, c) === W(l.d).slice(0, c))
          if (l = l.times(2), o !== 0 && (l = l.plus(Ur(T, c + 2, x).times(o + ""))), l = O(l, new T(f), c, 1), t == null)
            if (Qt(l.d, c - y, C, a))
              T.precision = c += y, u = s = g = O(p.minus(1), p.plus(1), c, 1), d = h(g.times(g), c, 1), i = a = 1;
            else
              return h(l, T.precision = x, C, w = true);
          else
            return T.precision = x, l;
        l = u, i += 2;
      }
    }
    function Ts(e) {
      return String(e.s * e.s / 0);
    }
    function yi(e, t) {
      var r, n, i;
      for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; n++)
        ;
      for (i = t.length; t.charCodeAt(i - 1) === 48; --i)
        ;
      if (t = t.slice(n, i), t) {
        if (i -= n, e.e = r = r - n - 1, e.d = [], n = (r + 1) % b, r < 0 && (n += b), n < i) {
          for (n && e.d.push(+t.slice(0, n)), i -= b; n < i; )
            e.d.push(+t.slice(n, n += b));
          t = t.slice(n), n = b - t.length;
        } else
          n -= i;
        for (; n--; )
          t += "0";
        e.d.push(+t), w && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
      } else
        e.e = 0, e.d = [0];
      return e;
    }
    function ic(e, t) {
      var r, n, i, o, s, a, l, u, c;
      if (t.indexOf("_") > -1) {
        if (t = t.replace(/(\d)_(?=\d)/g, "$1"), Es.test(t))
          return yi(e, t);
      } else if (t === "Infinity" || t === "NaN")
        return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
      if (Xu.test(t))
        r = 16, t = t.toLowerCase();
      else if (Zu.test(t))
        r = 2;
      else if (ec.test(t))
        r = 8;
      else
        throw Error(Ne + t);
      for (o = t.search(/p/i), o > 0 ? (l = +t.slice(o + 1), t = t.substring(2, o)) : t = t.slice(2), o = t.indexOf("."), s = o >= 0, n = e.constructor, s && (t = t.replace(".", ""), a = t.length, o = a - o, i = Ps(n, new n(r), o, o * 2)), u = Vr(t, r, ge), c = u.length - 1, o = c; u[o] === 0; --o)
        u.pop();
      return o < 0 ? new n(e.s * 0) : (e.e = Qr(u, c), e.d = u, w = false, s && (e = O(e, i, a * 4)), l && (e = e.times(Math.abs(l) < 54 ? j(2, l) : We.pow(2, l))), w = true, e);
    }
    function oc(e, t) {
      var r, n = t.d.length;
      if (n < 3)
        return t.isZero() ? t : gt(e, 2, t, t);
      r = 1.4 * Math.sqrt(n), r = r > 16 ? 16 : r | 0, t = t.times(1 / Jr(5, r)), t = gt(e, 2, t, t);
      for (var i, o = new e(5), s = new e(16), a = new e(20); r--; )
        i = t.times(t), t = t.times(o.plus(i.times(s.times(i).minus(a))));
      return t;
    }
    function gt(e, t, r, n, i) {
      var o, s, a, l, u = 1, c = e.precision, p = Math.ceil(c / b);
      for (w = false, l = r.times(r), a = new e(n); ; ) {
        if (s = O(a.times(l), new e(t++ * t++), c, 1), a = i ? n.plus(s) : n.minus(s), n = O(s.times(l), new e(t++ * t++), c, 1), s = a.plus(n), s.d[p] !== void 0) {
          for (o = p; s.d[o] === a.d[o] && o--; )
            ;
          if (o == -1)
            break;
        }
        o = a, a = n, n = s, s = o, u++;
      }
      return w = true, s.d.length = p + 1, s;
    }
    function Jr(e, t) {
      for (var r = e; --t; )
        r *= e;
      return r;
    }
    function Cs(e, t) {
      var r, n = t.s < 0, i = fe(e, e.precision, 1), o = i.times(0.5);
      if (t = t.abs(), t.lte(o))
        return Re = n ? 4 : 1, t;
      if (r = t.divToInt(i), r.isZero())
        Re = n ? 3 : 2;
      else {
        if (t = t.minus(r.times(i)), t.lte(o))
          return Re = ms(r) ? n ? 2 : 3 : n ? 4 : 1, t;
        Re = ms(r) ? n ? 1 : 4 : n ? 3 : 2;
      }
      return t.minus(i).abs();
    }
    function hi(e, t, r, n) {
      var i, o, s, a, l, u, c, p, d, f = e.constructor, y = r !== void 0;
      if (y ? (se(r, 1, Le), n === void 0 ? n = f.rounding : se(n, 0, 8)) : (r = f.precision, n = f.rounding), !e.isFinite())
        c = Ts(e);
      else {
        for (c = Ee(e), s = c.indexOf("."), y ? (i = 2, t == 16 ? r = r * 4 - 3 : t == 8 && (r = r * 3 - 2)) : i = t, s >= 0 && (c = c.replace(".", ""), d = new f(1), d.e = c.length - s, d.d = Vr(Ee(d), 10, i), d.e = d.d.length), p = Vr(c, 10, i), o = l = p.length; p[--l] == 0; )
          p.pop();
        if (!p[0])
          c = y ? "0p+0" : "0";
        else {
          if (s < 0 ? o-- : (e = new f(e), e.d = p, e.e = o, e = O(e, d, r, n, 0, i), p = e.d, o = e.e, u = ys), s = p[r], a = i / 2, u = u || p[r + 1] !== void 0, u = n < 4 ? (s !== void 0 || u) && (n === 0 || n === (e.s < 0 ? 3 : 2)) : s > a || s === a && (n === 4 || u || n === 6 && p[r - 1] & 1 || n === (e.s < 0 ? 8 : 7)), p.length = r, u)
            for (; ++p[--r] > i - 1; )
              p[r] = 0, r || (++o, p.unshift(1));
          for (l = p.length; !p[l - 1]; --l)
            ;
          for (s = 0, c = ""; s < l; s++)
            c += di.charAt(p[s]);
          if (y) {
            if (l > 1)
              if (t == 16 || t == 8) {
                for (s = t == 16 ? 4 : 3, --l; l % s; l++)
                  c += "0";
                for (p = Vr(c, i, t), l = p.length; !p[l - 1]; --l)
                  ;
                for (s = 1, c = "1."; s < l; s++)
                  c += di.charAt(p[s]);
              } else
                c = c.charAt(0) + "." + c.slice(1);
            c = c + (o < 0 ? "p" : "p+") + o;
          } else if (o < 0) {
            for (; ++o; )
              c = "0" + c;
            c = "0." + c;
          } else if (++o > l)
            for (o -= l; o--; )
              c += "0";
          else
            o < l && (c = c.slice(0, o) + "." + c.slice(o));
        }
        c = (t == 16 ? "0x" : t == 2 ? "0b" : t == 8 ? "0o" : "") + c;
      }
      return e.s < 0 ? "-" + c : c;
    }
    function fs(e, t) {
      if (e.length > t)
        return e.length = t, true;
    }
    function sc(e) {
      return new this(e).abs();
    }
    function ac(e) {
      return new this(e).acos();
    }
    function lc(e) {
      return new this(e).acosh();
    }
    function uc(e, t) {
      return new this(e).plus(t);
    }
    function cc(e) {
      return new this(e).asin();
    }
    function pc(e) {
      return new this(e).asinh();
    }
    function dc(e) {
      return new this(e).atan();
    }
    function mc(e) {
      return new this(e).atanh();
    }
    function fc(e, t) {
      e = new this(e), t = new this(t);
      var r, n = this.precision, i = this.rounding, o = n + 4;
      return !e.s || !t.s ? r = new this(NaN) : !e.d && !t.d ? (r = fe(this, o, 1).times(t.s > 0 ? 0.25 : 0.75), r.s = e.s) : !t.d || e.isZero() ? (r = t.s < 0 ? fe(this, n, i) : new this(0), r.s = e.s) : !e.d || t.isZero() ? (r = fe(this, o, 1).times(0.5), r.s = e.s) : t.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan(O(e, t, o, 1)), t = fe(this, o, 1), this.precision = n, this.rounding = i, r = e.s < 0 ? r.minus(t) : r.plus(t)) : r = this.atan(O(e, t, o, 1)), r;
    }
    function gc(e) {
      return new this(e).cbrt();
    }
    function yc(e) {
      return h(e = new this(e), e.e + 1, 2);
    }
    function hc(e, t, r) {
      return new this(e).clamp(t, r);
    }
    function xc(e) {
      if (!e || typeof e != "object")
        throw Error(Kr + "Object expected");
      var t, r, n, i = e.defaults === true, o = ["precision", 1, Le, "rounding", 0, 8, "toExpNeg", -ft, 0, "toExpPos", 0, ft, "maxE", 0, ft, "minE", -ft, 0, "modulo", 0, 9];
      for (t = 0; t < o.length; t += 3)
        if (r = o[t], i && (this[r] = mi[r]), (n = e[r]) !== void 0)
          if (ee(n) === n && n >= o[t + 1] && n <= o[t + 2])
            this[r] = n;
          else
            throw Error(Ne + r + ": " + n);
      if (r = "crypto", i && (this[r] = mi[r]), (n = e[r]) !== void 0)
        if (n === true || n === false || n === 0 || n === 1)
          if (n)
            if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
              this[r] = true;
            else
              throw Error(xs);
          else
            this[r] = false;
        else
          throw Error(Ne + r + ": " + n);
      return this;
    }
    function bc(e) {
      return new this(e).cos();
    }
    function Ec(e) {
      return new this(e).cosh();
    }
    function As(e) {
      var t, r, n;
      function i(o) {
        var s, a, l, u = this;
        if (!(u instanceof i))
          return new i(o);
        if (u.constructor = i, gs(o)) {
          u.s = o.s, w ? !o.d || o.e > i.maxE ? (u.e = NaN, u.d = null) : o.e < i.minE ? (u.e = 0, u.d = [0]) : (u.e = o.e, u.d = o.d.slice()) : (u.e = o.e, u.d = o.d ? o.d.slice() : o.d);
          return;
        }
        if (l = typeof o, l === "number") {
          if (o === 0) {
            u.s = 1 / o < 0 ? -1 : 1, u.e = 0, u.d = [0];
            return;
          }
          if (o < 0 ? (o = -o, u.s = -1) : u.s = 1, o === ~~o && o < 1e7) {
            for (s = 0, a = o; a >= 10; a /= 10)
              s++;
            w ? s > i.maxE ? (u.e = NaN, u.d = null) : s < i.minE ? (u.e = 0, u.d = [0]) : (u.e = s, u.d = [o]) : (u.e = s, u.d = [o]);
            return;
          } else if (o * 0 !== 0) {
            o || (u.s = NaN), u.e = NaN, u.d = null;
            return;
          }
          return yi(u, o.toString());
        } else if (l !== "string")
          throw Error(Ne + o);
        return (a = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (a === 43 && (o = o.slice(1)), u.s = 1), Es.test(o) ? yi(u, o) : ic(u, o);
      }
      if (i.prototype = m, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = xc, i.clone = As, i.isDecimal = gs, i.abs = sc, i.acos = ac, i.acosh = lc, i.add = uc, i.asin = cc, i.asinh = pc, i.atan = dc, i.atanh = mc, i.atan2 = fc, i.cbrt = gc, i.ceil = yc, i.clamp = hc, i.cos = bc, i.cosh = Ec, i.div = wc, i.exp = Pc, i.floor = vc, i.hypot = Tc, i.ln = Cc, i.log = Ac, i.log10 = Mc, i.log2 = Rc, i.max = Sc, i.min = Ic, i.mod = Fc, i.mul = kc, i.pow = Oc, i.random = Dc, i.round = _c, i.sign = Nc, i.sin = Lc, i.sinh = $c, i.sqrt = qc, i.sub = Vc, i.sum = jc, i.tan = Bc, i.tanh = Uc, i.trunc = Kc, e === void 0 && (e = {}), e && e.defaults !== true)
        for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], t = 0; t < n.length; )
          e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
      return i.config(e), i;
    }
    function wc(e, t) {
      return new this(e).div(t);
    }
    function Pc(e) {
      return new this(e).exp();
    }
    function vc(e) {
      return h(e = new this(e), e.e + 1, 3);
    }
    function Tc() {
      var e, t, r = new this(0);
      for (w = false, e = 0; e < arguments.length; )
        if (t = new this(arguments[e++]), t.d)
          r.d && (r = r.plus(t.times(t)));
        else {
          if (t.s)
            return w = true, new this(1 / 0);
          r = t;
        }
      return w = true, r.sqrt();
    }
    function gs(e) {
      return e instanceof We || e && e.toStringTag === bs || false;
    }
    function Cc(e) {
      return new this(e).ln();
    }
    function Ac(e, t) {
      return new this(e).log(t);
    }
    function Rc(e) {
      return new this(e).log(2);
    }
    function Mc(e) {
      return new this(e).log(10);
    }
    function Sc() {
      return vs(this, arguments, "lt");
    }
    function Ic() {
      return vs(this, arguments, "gt");
    }
    function Fc(e, t) {
      return new this(e).mod(t);
    }
    function kc(e, t) {
      return new this(e).mul(t);
    }
    function Oc(e, t) {
      return new this(e).pow(t);
    }
    function Dc(e) {
      var t, r, n, i, o = 0, s = new this(1), a = [];
      if (e === void 0 ? e = this.precision : se(e, 1, Le), n = Math.ceil(e / b), this.crypto)
        if (crypto.getRandomValues)
          for (t = crypto.getRandomValues(new Uint32Array(n)); o < n; )
            i = t[o], i >= 429e7 ? t[o] = crypto.getRandomValues(new Uint32Array(1))[0] : a[o++] = i % 1e7;
        else if (crypto.randomBytes) {
          for (t = crypto.randomBytes(n *= 4); o < n; )
            i = t[o] + (t[o + 1] << 8) + (t[o + 2] << 16) + ((t[o + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(t, o) : (a.push(i % 1e7), o += 4);
          o = n / 4;
        } else
          throw Error(xs);
      else
        for (; o < n; )
          a[o++] = Math.random() * 1e7 | 0;
      for (n = a[--o], e %= b, n && e && (i = j(10, b - e), a[o] = (n / i | 0) * i); a[o] === 0; o--)
        a.pop();
      if (o < 0)
        r = 0, a = [0];
      else {
        for (r = -1; a[0] === 0; r -= b)
          a.shift();
        for (n = 1, i = a[0]; i >= 10; i /= 10)
          n++;
        n < b && (r -= b - n);
      }
      return s.e = r, s.d = a, s;
    }
    function _c(e) {
      return h(e = new this(e), e.e + 1, this.rounding);
    }
    function Nc(e) {
      return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
    }
    function Lc(e) {
      return new this(e).sin();
    }
    function $c(e) {
      return new this(e).sinh();
    }
    function qc(e) {
      return new this(e).sqrt();
    }
    function Vc(e, t) {
      return new this(e).sub(t);
    }
    function jc() {
      var e = 0, t = arguments, r = new this(t[e]);
      for (w = false; r.s && ++e < t.length; )
        r = r.plus(t[e]);
      return w = true, h(r, this.precision, this.rounding);
    }
    function Bc(e) {
      return new this(e).tan();
    }
    function Uc(e) {
      return new this(e).tanh();
    }
    function Kc(e) {
      return h(e = new this(e), e.e + 1, 1);
    }
    m[Symbol.for("nodejs.util.inspect.custom")] = m.toString;
    m[Symbol.toStringTag] = "Decimal";
    var We = m.constructor = As(mi);
    jr = new We(jr);
    Br = new We(Br);
    var we = We;
    function yt(e) {
      return We.isDecimal(e) ? true : e !== null && typeof e == "object" && typeof e.s == "number" && typeof e.e == "number" && typeof e.toFixed == "function" && Array.isArray(e.d);
    }
    var Jt = class {
      constructor(t, r, n, i, o) {
        this.modelName = t, this.name = r, this.typeName = n, this.isList = i, this.isEnum = o;
      }
      _toGraphQLInputType() {
        let t = this.isList ? "List" : "", r = this.isEnum ? "Enum" : "";
        return `${t}${r}${this.typeName}FieldRefInput<${this.modelName}>`;
      }
    };
    function ht(e) {
      return e instanceof Jt;
    }
    var Gr = class {
      constructor(t) {
        this.value = t;
      }
      write(t) {
        t.write(this.value);
      }
      markAsError() {
        this.value.markAsError();
      }
    };
    var Hr = (e) => e;
    var Wr = { bold: Hr, red: Hr, green: Hr, dim: Hr };
    var Rs = { bold: ne, red: me, green: Qe, dim: ke };
    var xt = { write(e) {
      e.writeLine(",");
    } };
    var Pe = class {
      constructor(t) {
        this.contents = t;
        this.isUnderlined = false;
        this.color = (t2) => t2;
      }
      underline() {
        return this.isUnderlined = true, this;
      }
      setColor(t) {
        return this.color = t, this;
      }
      write(t) {
        let r = t.getCurrentLineLength();
        t.write(this.color(this.contents)), this.isUnderlined && t.afterNextNewline(() => {
          t.write(" ".repeat(r)).writeLine(this.color("~".repeat(this.contents.length)));
        });
      }
    };
    var $e = class {
      constructor() {
        this.hasError = false;
      }
      markAsError() {
        return this.hasError = true, this;
      }
    };
    var bt = class extends $e {
      constructor() {
        super(...arguments);
        this.items = [];
      }
      addItem(r) {
        return this.items.push(new Gr(r)), this;
      }
      getField(r) {
        return this.items[r];
      }
      getPrintWidth() {
        return this.items.length === 0 ? 2 : Math.max(...this.items.map((n) => n.value.getPrintWidth())) + 2;
      }
      write(r) {
        if (this.items.length === 0) {
          this.writeEmpty(r);
          return;
        }
        this.writeWithItems(r);
      }
      writeEmpty(r) {
        let n = new Pe("[]");
        this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
      }
      writeWithItems(r) {
        let { colors: n } = r.context;
        r.writeLine("[").withIndent(() => r.writeJoined(xt, this.items).newLine()).write("]"), this.hasError && r.afterNextNewline(() => {
          r.writeLine(n.red("~".repeat(this.getPrintWidth())));
        });
      }
    };
    var Ms = ": ";
    var zr = class {
      constructor(t, r) {
        this.name = t;
        this.value = r;
        this.hasError = false;
      }
      markAsError() {
        this.hasError = true;
      }
      getPrintWidth() {
        return this.name.length + this.value.getPrintWidth() + Ms.length;
      }
      write(t) {
        let r = new Pe(this.name);
        this.hasError && r.underline().setColor(t.context.colors.red), t.write(r).write(Ms).write(this.value);
      }
    };
    var Q = class e extends $e {
      constructor() {
        super(...arguments);
        this.fields = {};
        this.suggestions = [];
      }
      addField(r) {
        this.fields[r.name] = r;
      }
      addSuggestion(r) {
        this.suggestions.push(r);
      }
      getField(r) {
        return this.fields[r];
      }
      getDeepField(r) {
        let [n, ...i] = r, o = this.getField(n);
        if (!o)
          return;
        let s = o;
        for (let a of i) {
          let l;
          if (s.value instanceof e ? l = s.value.getField(a) : s.value instanceof bt && (l = s.value.getField(Number(a))), !l)
            return;
          s = l;
        }
        return s;
      }
      getDeepFieldValue(r) {
        var _a4;
        return r.length === 0 ? this : (_a4 = this.getDeepField(r)) == null ? void 0 : _a4.value;
      }
      hasField(r) {
        return !!this.getField(r);
      }
      removeAllFields() {
        this.fields = {};
      }
      removeField(r) {
        delete this.fields[r];
      }
      getFields() {
        return this.fields;
      }
      isEmpty() {
        return Object.keys(this.fields).length === 0;
      }
      getFieldValue(r) {
        var _a4;
        return (_a4 = this.getField(r)) == null ? void 0 : _a4.value;
      }
      getDeepSubSelectionValue(r) {
        let n = this;
        for (let i of r) {
          if (!(n instanceof e))
            return;
          let o = n.getSubSelectionValue(i);
          if (!o)
            return;
          n = o;
        }
        return n;
      }
      getDeepSelectionParent(r) {
        let n = this.getSelectionParent();
        if (!n)
          return;
        let i = n;
        for (let o of r) {
          let s = i.value.getFieldValue(o);
          if (!s || !(s instanceof e))
            return;
          let a = s.getSelectionParent();
          if (!a)
            return;
          i = a;
        }
        return i;
      }
      getSelectionParent() {
        let r = this.getField("select");
        if ((r == null ? void 0 : r.value) instanceof e)
          return { kind: "select", value: r.value };
        let n = this.getField("include");
        if ((n == null ? void 0 : n.value) instanceof e)
          return { kind: "include", value: n.value };
      }
      getSubSelectionValue(r) {
        var _a4;
        return (_a4 = this.getSelectionParent()) == null ? void 0 : _a4.value.fields[r].value;
      }
      getPrintWidth() {
        let r = Object.values(this.fields);
        return r.length == 0 ? 2 : Math.max(...r.map((i) => i.getPrintWidth())) + 2;
      }
      write(r) {
        let n = Object.values(this.fields);
        if (n.length === 0 && this.suggestions.length === 0) {
          this.writeEmpty(r);
          return;
        }
        this.writeWithContents(r, n);
      }
      writeEmpty(r) {
        let n = new Pe("{}");
        this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
      }
      writeWithContents(r, n) {
        r.writeLine("{").withIndent(() => {
          r.writeJoined(xt, [...n, ...this.suggestions]).newLine();
        }), r.write("}"), this.hasError && r.afterNextNewline(() => {
          r.writeLine(r.context.colors.red("~".repeat(this.getPrintWidth())));
        });
      }
    };
    var J = class extends $e {
      constructor(r) {
        super();
        this.text = r;
      }
      getPrintWidth() {
        return this.text.length;
      }
      write(r) {
        let n = new Pe(this.text);
        this.hasError && n.underline().setColor(r.context.colors.red), r.write(n);
      }
    };
    var xi = class {
      constructor(t) {
        this.errorMessages = [];
        this.arguments = t;
      }
      write(t) {
        t.write(this.arguments);
      }
      addErrorMessage(t) {
        this.errorMessages.push(t);
      }
      renderAllMessages(t) {
        return this.errorMessages.map((r) => r(t)).join(`
`);
      }
    };
    function Yr(e) {
      return new xi(Ss(e));
    }
    function Ss(e) {
      let t = new Q();
      for (let [r, n] of Object.entries(e)) {
        let i = new zr(r, Is(n));
        t.addField(i);
      }
      return t;
    }
    function Is(e) {
      if (typeof e == "string")
        return new J(JSON.stringify(e));
      if (typeof e == "number" || typeof e == "boolean")
        return new J(String(e));
      if (typeof e == "bigint")
        return new J(`${e}n`);
      if (e === null)
        return new J("null");
      if (e === void 0)
        return new J("undefined");
      if (yt(e))
        return new J(`new Prisma.Decimal("${e.toFixed()}")`);
      if (e instanceof Uint8Array)
        return Buffer.isBuffer(e) ? new J(`Buffer.alloc(${e.byteLength})`) : new J(`new Uint8Array(${e.byteLength})`);
      if (e instanceof Date) {
        let t = qr(e) ? e.toISOString() : "Invalid Date";
        return new J(`new Date("${t}")`);
      }
      return e instanceof Ae ? new J(`Prisma.${e._getName()}`) : ht(e) ? new J(`prisma.${to(e.modelName)}.$fields.${e.name}`) : Array.isArray(e) ? Jc(e) : typeof e == "object" ? Ss(e) : new J(Object.prototype.toString.call(e));
    }
    function Jc(e) {
      let t = new bt();
      for (let r of e)
        t.addItem(Is(r));
      return t;
    }
    function Fs(e) {
      if (e === void 0)
        return "";
      let t = Yr(e);
      return new dt(0, { colors: Wr }).write(t).toString();
    }
    var Gt = "<unknown>";
    function ks(e) {
      var t = e.split(`
`);
      return t.reduce(function(r, n) {
        var i = Wc(n) || Yc(n) || ep(n) || ip(n) || rp(n);
        return i && r.push(i), r;
      }, []);
    }
    var Gc = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
    var Hc = /\((\S*)(?::(\d+))(?::(\d+))\)/;
    function Wc(e) {
      var t = Gc.exec(e);
      if (!t)
        return null;
      var r = t[2] && t[2].indexOf("native") === 0, n = t[2] && t[2].indexOf("eval") === 0, i = Hc.exec(t[2]);
      return n && i != null && (t[2] = i[1], t[3] = i[2], t[4] = i[3]), { file: r ? null : t[2], methodName: t[1] || Gt, arguments: r ? [t[2]] : [], lineNumber: t[3] ? +t[3] : null, column: t[4] ? +t[4] : null };
    }
    var zc = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
    function Yc(e) {
      var t = zc.exec(e);
      return t ? { file: t[2], methodName: t[1] || Gt, arguments: [], lineNumber: +t[3], column: t[4] ? +t[4] : null } : null;
    }
    var Zc = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i;
    var Xc = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
    function ep(e) {
      var t = Zc.exec(e);
      if (!t)
        return null;
      var r = t[3] && t[3].indexOf(" > eval") > -1, n = Xc.exec(t[3]);
      return r && n != null && (t[3] = n[1], t[4] = n[2], t[5] = null), { file: t[3], methodName: t[1] || Gt, arguments: t[2] ? t[2].split(",") : [], lineNumber: t[4] ? +t[4] : null, column: t[5] ? +t[5] : null };
    }
    var tp = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
    function rp(e) {
      var t = tp.exec(e);
      return t ? { file: t[3], methodName: t[1] || Gt, arguments: [], lineNumber: +t[4], column: t[5] ? +t[5] : null } : null;
    }
    var np = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
    function ip(e) {
      var t = np.exec(e);
      return t ? { file: t[2], methodName: t[1] || Gt, arguments: [], lineNumber: +t[3], column: t[4] ? +t[4] : null } : null;
    }
    var bi = class {
      getLocation() {
        return null;
      }
    };
    var Ei = class {
      constructor() {
        this._error = new Error();
      }
      getLocation() {
        let t = this._error.stack;
        if (!t)
          return null;
        let n = ks(t).find((i) => {
          if (!i.file)
            return false;
          let o = Zn(i.file);
          return o !== "<anonymous>" && !o.includes("@prisma") && !o.includes("/packages/client/src/runtime/") && !o.endsWith("/runtime/binary.js") && !o.endsWith("/runtime/library.js") && !o.endsWith("/runtime/edge.js") && !o.endsWith("/runtime/edge-esm.js") && !o.startsWith("internal/") && !i.methodName.includes("new ") && !i.methodName.includes("getCallSite") && !i.methodName.includes("Proxy.") && i.methodName.split(".").length < 4;
        });
        return !n || !n.file ? null : { fileName: n.file, lineNumber: n.lineNumber, columnNumber: n.column };
      }
    };
    function qe(e) {
      return e === "minimal" ? new bi() : new Ei();
    }
    var Os = { _avg: true, _count: true, _sum: true, _min: true, _max: true };
    function Et(e = {}) {
      let t = sp(e);
      return Object.entries(t).reduce((n, [i, o]) => (Os[i] !== void 0 ? n.select[i] = { select: o } : n[i] = o, n), { select: {} });
    }
    function sp(e = {}) {
      return typeof e._count == "boolean" ? __spreadProps(__spreadValues({}, e), { _count: { _all: e._count } }) : e;
    }
    function Zr(e = {}) {
      return (t) => (typeof e._count == "boolean" && (t._count = t._count._all), t);
    }
    function Ds(e, t) {
      let r = Zr(e);
      return t({ action: "aggregate", unpacker: r, argsMapper: Et })(e);
    }
    function ap(e = {}) {
      let _a4 = e, { select: t } = _a4, r = __objRest(_a4, ["select"]);
      return typeof t == "object" ? Et(__spreadProps(__spreadValues({}, r), { _count: t })) : Et(__spreadProps(__spreadValues({}, r), { _count: { _all: true } }));
    }
    function lp(e = {}) {
      return typeof e.select == "object" ? (t) => Zr(e)(t)._count : (t) => Zr(e)(t)._count._all;
    }
    function _s(e, t) {
      return t({ action: "count", unpacker: lp(e), argsMapper: ap })(e);
    }
    function up(e = {}) {
      let t = Et(e);
      if (Array.isArray(t.by))
        for (let r of t.by)
          typeof r == "string" && (t.select[r] = true);
      else
        typeof t.by == "string" && (t.select[t.by] = true);
      return t;
    }
    function cp(e = {}) {
      return (t) => (typeof (e == null ? void 0 : e._count) == "boolean" && t.forEach((r) => {
        r._count = r._count._all;
      }), t);
    }
    function Ns(e, t) {
      return t({ action: "groupBy", unpacker: cp(e), argsMapper: up })(e);
    }
    function Ls(e, t, r) {
      if (t === "aggregate")
        return (n) => Ds(n, r);
      if (t === "count")
        return (n) => _s(n, r);
      if (t === "groupBy")
        return (n) => Ns(n, r);
    }
    function $s(e, t) {
      let r = t.fields.filter((i) => !i.relationName), n = oi(r, (i) => i.name);
      return new Proxy({}, __spreadValues({ get(i, o) {
        if (o in i || typeof o == "symbol")
          return i[o];
        let s = n[o];
        if (s)
          return new Jt(e, o, s.type, s.isList, s.kind === "enum");
      } }, Nr(Object.keys(n))));
    }
    var qs = (e) => Array.isArray(e) ? e : e.split(".");
    var wi = (e, t) => qs(t).reduce((r, n) => r && r[n], e);
    var Vs = (e, t, r) => qs(t).reduceRight((n, i, o, s) => Object.assign({}, wi(e, s.slice(0, o)), { [i]: n }), r);
    function pp(e, t) {
      return e === void 0 || t === void 0 ? [] : [...t, "select", e];
    }
    function dp(e, t, r) {
      return t === void 0 ? e != null ? e : {} : Vs(t, r, e || true);
    }
    function Pi(e, t, r, n, i, o) {
      let a = e._runtimeDataModel.models[t].fields.reduce((l, u) => __spreadProps(__spreadValues({}, l), { [u.name]: u }), {});
      return (l) => {
        let u = qe(e._errorFormat), c = pp(n, i), p = dp(l, o, c), d = r({ dataPath: c, callsite: u })(p), f = mp(e, t);
        return new Proxy(d, __spreadValues({ get(y, g) {
          if (!f.includes(g))
            return y[g];
          let T = [a[g].type, r, g], C = [c, p];
          return Pi(e, ...T, ...C);
        } }, Nr([...f, ...Object.getOwnPropertyNames(d)])));
      };
    }
    function mp(e, t) {
      return e._runtimeDataModel.models[t].fields.filter((r) => r.kind === "object").map((r) => r.name);
    }
    var Js = S(Xn());
    var Qs = S(require("fs"));
    var js = { keyword: Oe, entity: Oe, value: (e) => ne(it(e)), punctuation: it, directive: Oe, function: Oe, variable: (e) => ne(it(e)), string: (e) => ne(Qe(e)), boolean: he, number: Oe, comment: vr };
    var fp = (e) => e;
    var Xr = {};
    var gp = 0;
    var v = { manual: Xr.Prism && Xr.Prism.manual, disableWorkerMessageHandler: Xr.Prism && Xr.Prism.disableWorkerMessageHandler, util: { encode: function(e) {
      if (e instanceof ye) {
        let t = e;
        return new ye(t.type, v.util.encode(t.content), t.alias);
      } else
        return Array.isArray(e) ? e.map(v.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
    }, type: function(e) {
      return Object.prototype.toString.call(e).slice(8, -1);
    }, objId: function(e) {
      return e.__id || Object.defineProperty(e, "__id", { value: ++gp }), e.__id;
    }, clone: function e(t, r) {
      let n, i, o = v.util.type(t);
      switch (r = r || {}, o) {
        case "Object":
          if (i = v.util.objId(t), r[i])
            return r[i];
          n = {}, r[i] = n;
          for (let s in t)
            t.hasOwnProperty(s) && (n[s] = e(t[s], r));
          return n;
        case "Array":
          return i = v.util.objId(t), r[i] ? r[i] : (n = [], r[i] = n, t.forEach(function(s, a) {
            n[a] = e(s, r);
          }), n);
        default:
          return t;
      }
    } }, languages: { extend: function(e, t) {
      let r = v.util.clone(v.languages[e]);
      for (let n in t)
        r[n] = t[n];
      return r;
    }, insertBefore: function(e, t, r, n) {
      n = n || v.languages;
      let i = n[e], o = {};
      for (let a in i)
        if (i.hasOwnProperty(a)) {
          if (a == t)
            for (let l in r)
              r.hasOwnProperty(l) && (o[l] = r[l]);
          r.hasOwnProperty(a) || (o[a] = i[a]);
        }
      let s = n[e];
      return n[e] = o, v.languages.DFS(v.languages, function(a, l) {
        l === s && a != e && (this[a] = o);
      }), o;
    }, DFS: function e(t, r, n, i) {
      i = i || {};
      let o = v.util.objId;
      for (let s in t)
        if (t.hasOwnProperty(s)) {
          r.call(t, s, t[s], n || s);
          let a = t[s], l = v.util.type(a);
          l === "Object" && !i[o(a)] ? (i[o(a)] = true, e(a, r, null, i)) : l === "Array" && !i[o(a)] && (i[o(a)] = true, e(a, r, s, i));
        }
    } }, plugins: {}, highlight: function(e, t, r) {
      let n = { code: e, grammar: t, language: r };
      return v.hooks.run("before-tokenize", n), n.tokens = v.tokenize(n.code, n.grammar), v.hooks.run("after-tokenize", n), ye.stringify(v.util.encode(n.tokens), n.language);
    }, matchGrammar: function(e, t, r, n, i, o, s) {
      for (let g in r) {
        if (!r.hasOwnProperty(g) || !r[g])
          continue;
        if (g == s)
          return;
        let P = r[g];
        P = v.util.type(P) === "Array" ? P : [P];
        for (let T = 0; T < P.length; ++T) {
          let C = P[T], x = C.inside, R = !!C.lookbehind, ce = !!C.greedy, G = 0, Ue = C.alias;
          if (ce && !C.pattern.global) {
            let $ = C.pattern.toString().match(/[imuy]*$/)[0];
            C.pattern = RegExp(C.pattern.source, $ + "g");
          }
          C = C.pattern || C;
          for (let $ = n, z = i; $ < t.length; z += t[$].length, ++$) {
            let Te = t[$];
            if (t.length > e.length)
              return;
            if (Te instanceof ye)
              continue;
            if (ce && $ != t.length - 1) {
              C.lastIndex = z;
              var p = C.exec(e);
              if (!p)
                break;
              var c = p.index + (R ? p[1].length : 0), d = p.index + p[0].length, a = $, l = z;
              for (let F = t.length; a < F && (l < d || !t[a].type && !t[a - 1].greedy); ++a)
                l += t[a].length, c >= l && (++$, z = l);
              if (t[$] instanceof ye)
                continue;
              u = a - $, Te = e.slice(z, l), p.index -= z;
            } else {
              C.lastIndex = 0;
              var p = C.exec(Te), u = 1;
            }
            if (!p) {
              if (o)
                break;
              continue;
            }
            R && (G = p[1] ? p[1].length : 0);
            var c = p.index + G, p = p[0].slice(G), d = c + p.length, f = Te.slice(0, c), y = Te.slice(d);
            let Y = [$, u];
            f && (++$, z += f.length, Y.push(f));
            let et = new ye(g, x ? v.tokenize(p, x) : p, Ue, p, ce);
            if (Y.push(et), y && Y.push(y), Array.prototype.splice.apply(t, Y), u != 1 && v.matchGrammar(e, t, r, $, z, true, g), o)
              break;
          }
        }
      }
    }, tokenize: function(e, t) {
      let r = [e], n = t.rest;
      if (n) {
        for (let i in n)
          t[i] = n[i];
        delete t.rest;
      }
      return v.matchGrammar(e, r, t, 0, 0, false), r;
    }, hooks: { all: {}, add: function(e, t) {
      let r = v.hooks.all;
      r[e] = r[e] || [], r[e].push(t);
    }, run: function(e, t) {
      let r = v.hooks.all[e];
      if (!(!r || !r.length))
        for (var n = 0, i; i = r[n++]; )
          i(t);
    } }, Token: ye };
    v.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: true }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: true, greedy: true }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: true }, "class-name": { pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i, lookbehind: true, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, boolean: /\b(?:true|false)\b/, function: /\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/, punctuation: /[{}[\];(),.:]/ };
    v.languages.javascript = v.languages.extend("clike", { "class-name": [v.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/, lookbehind: true }], keyword: [{ pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: true }, { pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: true }], number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/, function: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/ });
    v.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
    v.languages.insertBefore("javascript", "keyword", { regex: { pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/, lookbehind: true, greedy: true }, "function-variable": { pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/, lookbehind: true, inside: v.languages.javascript }, { pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i, inside: v.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/, lookbehind: true, inside: v.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/, lookbehind: true, inside: v.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ });
    v.languages.markup && v.languages.markup.tag.addInlined("script", "javascript");
    v.languages.js = v.languages.javascript;
    v.languages.typescript = v.languages.extend("javascript", { keyword: /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/, builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/ });
    v.languages.ts = v.languages.typescript;
    function ye(e, t, r, n, i) {
      this.type = e, this.content = t, this.alias = r, this.length = (n || "").length | 0, this.greedy = !!i;
    }
    ye.stringify = function(e, t) {
      return typeof e == "string" ? e : Array.isArray(e) ? e.map(function(r) {
        return ye.stringify(r, t);
      }).join("") : yp(e.type)(e.content);
    };
    function yp(e) {
      return js[e] || fp;
    }
    function Bs(e) {
      return hp(e, v.languages.javascript);
    }
    function hp(e, t) {
      return v.tokenize(e, t).map((n) => ye.stringify(n)).join("");
    }
    var Us = S(Ho());
    function Ks(e) {
      return (0, Us.default)(e);
    }
    var en = class e {
      static read(t) {
        let r;
        try {
          r = Qs.default.readFileSync(t, "utf-8");
        } catch (e2) {
          return null;
        }
        return e.fromContent(r);
      }
      static fromContent(t) {
        let r = t.split(/\r?\n/);
        return new e(1, r);
      }
      constructor(t, r) {
        this.firstLineNumber = t, this.lines = r;
      }
      get lastLineNumber() {
        return this.firstLineNumber + this.lines.length - 1;
      }
      mapLineAt(t, r) {
        if (t < this.firstLineNumber || t > this.lines.length + this.firstLineNumber)
          return this;
        let n = t - this.firstLineNumber, i = [...this.lines];
        return i[n] = r(i[n]), new e(this.firstLineNumber, i);
      }
      mapLines(t) {
        return new e(this.firstLineNumber, this.lines.map((r, n) => t(r, this.firstLineNumber + n)));
      }
      lineAt(t) {
        return this.lines[t - this.firstLineNumber];
      }
      prependSymbolAt(t, r) {
        return this.mapLines((n, i) => i === t ? `${r} ${n}` : `  ${n}`);
      }
      slice(t, r) {
        let n = this.lines.slice(t - 1, r).join(`
`);
        return new e(t, Ks(n).split(`
`));
      }
      highlight() {
        let t = Bs(this.toString());
        return new e(this.firstLineNumber, t.split(`
`));
      }
      toString() {
        return this.lines.join(`
`);
      }
    };
    var xp = { red: me, gray: vr, dim: ke, bold: ne, underline: te, highlightSource: (e) => e.highlight() };
    var bp = { red: (e) => e, gray: (e) => e, dim: (e) => e, bold: (e) => e, underline: (e) => e, highlightSource: (e) => e };
    function Ep({ callsite: e, message: t, originalMethod: r, isPanic: n, callArguments: i }, o) {
      var _a4;
      let s = { functionName: `prisma.${r}()`, message: t, isPanic: n != null ? n : false, callArguments: i };
      if (!e || typeof window < "u" || process.env.NODE_ENV === "production")
        return s;
      let a = e.getLocation();
      if (!a || !a.lineNumber || !a.columnNumber)
        return s;
      let l = Math.max(1, a.lineNumber - 3), u = (_a4 = en.read(a.fileName)) == null ? void 0 : _a4.slice(l, a.lineNumber), c = u == null ? void 0 : u.lineAt(a.lineNumber);
      if (u && c) {
        let p = Pp(c), d = wp(c);
        if (!d)
          return s;
        s.functionName = `${d.code})`, s.location = a, n || (u = u.mapLineAt(a.lineNumber, (y) => y.slice(0, d.openingBraceIndex))), u = o.highlightSource(u);
        let f = String(u.lastLineNumber).length;
        if (s.contextLines = u.mapLines((y, g) => o.gray(String(g).padStart(f)) + " " + y).mapLines((y) => o.dim(y)).prependSymbolAt(a.lineNumber, o.bold(o.red("\u2192"))), i) {
          let y = p + f + 1;
          y += 2, s.callArguments = (0, Js.default)(i, y).slice(y);
        }
      }
      return s;
    }
    function wp(e) {
      let t = Object.keys(pe.ModelAction).join("|"), n = new RegExp(String.raw`\.(${t})\(`).exec(e);
      if (n) {
        let i = n.index + n[0].length, o = e.lastIndexOf(" ", n.index) + 1;
        return { code: e.slice(o, i), openingBraceIndex: i };
      }
      return null;
    }
    function Pp(e) {
      let t = 0;
      for (let r = 0; r < e.length; r++) {
        if (e.charAt(r) !== " ")
          return t;
        t++;
      }
      return t;
    }
    function vp({ functionName: e, location: t, message: r, isPanic: n, contextLines: i, callArguments: o }, s) {
      let a = [""], l = t ? " in" : ":";
      if (n ? (a.push(s.red(`Oops, an unknown error occurred! This is ${s.bold("on us")}, you did nothing wrong.`)), a.push(s.red(`It occurred in the ${s.bold(`\`${e}\``)} invocation${l}`))) : a.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${l}`)), t && a.push(s.underline(Tp(t))), i) {
        a.push("");
        let u = [i.toString()];
        o && (u.push(o), u.push(s.dim(")"))), a.push(u.join("")), o && a.push("");
      } else
        a.push(""), o && a.push(o), a.push("");
      return a.push(r), a.join(`
`);
    }
    function Tp(e) {
      let t = [e.fileName];
      return e.lineNumber && t.push(String(e.lineNumber)), e.columnNumber && t.push(String(e.columnNumber)), t.join(":");
    }
    function wt(e) {
      let t = e.showColors ? xp : bp, r = Ep(e, t);
      return vp(r, t);
    }
    function Gs(e, t, r, n) {
      return e === pe.ModelAction.findFirstOrThrow || e === pe.ModelAction.findUniqueOrThrow ? Cp(t, r, n) : n;
    }
    function Cp(e, t, r) {
      return (n) => __async(this, null, function* () {
        if ("rejectOnNotFound" in n.args) {
          let o = wt({ originalMethod: n.clientMethod, callsite: n.callsite, message: "'rejectOnNotFound' option is not supported" });
          throw new X(o, { clientVersion: t });
        }
        return yield r(n).catch((o) => {
          throw o instanceof U && o.code === "P2025" ? new Ce(`No ${e} found`, t) : o;
        });
      });
    }
    function ve(e) {
      return e.replace(/^./, (t) => t.toLowerCase());
    }
    var Ap = ["findUnique", "findUniqueOrThrow", "findFirst", "findFirstOrThrow", "create", "update", "upsert", "delete"];
    var Rp = ["aggregate", "count", "groupBy"];
    function vi(e, t) {
      var _a4;
      let r = (_a4 = e._extensions.getAllModelExtensions(t)) != null ? _a4 : {}, n = [Mp(e, t), Ip(e, t), qt(r), re("name", () => t), re("$name", () => t), re("$parent", () => e._appliedParent)];
      return be({}, n);
    }
    function Mp(e, t) {
      let r = ve(t), n = Object.keys(pe.ModelAction).concat("count");
      return { getKeys() {
        return n;
      }, getPropertyValue(i) {
        let o = i, s = (l) => e._request(l);
        s = Gs(o, t, e._clientVersion, s);
        let a = (l) => (u) => {
          let c = qe(e._errorFormat);
          return e._createPrismaPromise((p) => {
            let d = { args: u, dataPath: [], action: o, model: t, clientMethod: `${r}.${i}`, jsModelName: r, transaction: p, callsite: c };
            return s(__spreadValues(__spreadValues({}, d), l));
          });
        };
        return Ap.includes(o) ? Pi(e, t, a) : Sp(i) ? Ls(e, i, a) : a({});
      } };
    }
    function Sp(e) {
      return Rp.includes(e);
    }
    function Ip(e, t) {
      return He(re("fields", () => {
        let r = e._runtimeDataModel.models[t];
        return $s(t, r);
      }));
    }
    function Hs(e) {
      return e.replace(/^./, (t) => t.toUpperCase());
    }
    var Ti = Symbol();
    function Ht(e) {
      let t = [Fp(e), re(Ti, () => e), re("$parent", () => e._appliedParent)], r = e._extensions.getAllClientExtensions();
      return r && t.push(qt(r)), be(e, t);
    }
    function Fp(e) {
      let t = Object.keys(e._runtimeDataModel.models), r = t.map(ve), n = [...new Set(t.concat(r))];
      return He({ getKeys() {
        return n;
      }, getPropertyValue(i) {
        let o = Hs(i);
        if (e._runtimeDataModel.models[o] !== void 0)
          return vi(e, o);
        if (e._runtimeDataModel.models[i] !== void 0)
          return vi(e, i);
      }, getPropertyDescriptor(i) {
        if (!r.includes(i))
          return { enumerable: false };
      } });
    }
    function tn(e) {
      return e[Ti] ? e[Ti] : e;
    }
    function Ws(e) {
      if (typeof e == "function")
        return e(this);
      let t = tn(this), r = Object.create(t, { _extensions: { value: this._extensions.append(e) }, _appliedParent: { value: this, configurable: true }, $use: { value: void 0 }, $on: { value: void 0 } });
      return Ht(r);
    }
    function zs({ result: e, modelName: t, select: r, extensions: n }) {
      let i = n.getAllComputedFields(t);
      if (!i)
        return e;
      let o = [], s = [];
      for (let a of Object.values(i)) {
        if (r) {
          if (!r[a.name])
            continue;
          let l = a.needs.filter((u) => !r[u]);
          l.length > 0 && s.push(Vt(l));
        }
        kp(e, a.needs) && o.push(Op(a, be(e, o)));
      }
      return o.length > 0 || s.length > 0 ? be(e, [...o, ...s]) : e;
    }
    function kp(e, t) {
      return t.every((r) => ii(e, r));
    }
    function Op(e, t) {
      return He(re(e.name, () => e.compute(t)));
    }
    function rn({ visitor: e, result: t, args: r, runtimeDataModel: n, modelName: i }) {
      var _a4;
      if (Array.isArray(t)) {
        for (let s = 0; s < t.length; s++)
          t[s] = rn({ result: t[s], args: r, modelName: i, runtimeDataModel: n, visitor: e });
        return t;
      }
      let o = (_a4 = e(t, i, r)) != null ? _a4 : t;
      return r.include && Ys({ includeOrSelect: r.include, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), r.select && Ys({ includeOrSelect: r.select, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), o;
    }
    function Ys({ includeOrSelect: e, result: t, parentModelName: r, runtimeDataModel: n, visitor: i }) {
      for (let [o, s] of Object.entries(e)) {
        if (!s || t[o] == null)
          continue;
        let l = n.models[r].fields.find((c) => c.name === o);
        if (!l || l.kind !== "object" || !l.relationName)
          continue;
        let u = typeof s == "object" ? s : {};
        t[o] = rn({ visitor: i, result: t[o], args: u, modelName: l.type, runtimeDataModel: n });
      }
    }
    function Zs({ result: e, modelName: t, args: r, extensions: n, runtimeDataModel: i }) {
      return n.isEmpty() || e == null || typeof e != "object" || !i.models[t] ? e : rn({ result: e, args: r != null ? r : {}, modelName: t, runtimeDataModel: i, visitor: (s, a, l) => zs({ result: s, modelName: ve(a), select: l.select, extensions: n }) });
    }
    function Xs(e) {
      if (e instanceof oe)
        return Dp(e);
      if (Array.isArray(e)) {
        let r = [e[0]];
        for (let n = 1; n < e.length; n++)
          r[n] = Wt(e[n]);
        return r;
      }
      let t = {};
      for (let r in e)
        t[r] = Wt(e[r]);
      return t;
    }
    function Dp(e) {
      return new oe(e.strings, e.values);
    }
    function Wt(e) {
      if (typeof e != "object" || e == null || e instanceof Ae || ht(e))
        return e;
      if (yt(e))
        return new we(e.toFixed());
      if (mt(e))
        return /* @__PURE__ */ new Date(+e);
      if (ArrayBuffer.isView(e))
        return e.slice(0);
      if (Array.isArray(e)) {
        let t = e.length, r;
        for (r = Array(t); t--; )
          r[t] = Wt(e[t]);
        return r;
      }
      if (typeof e == "object") {
        let t = {};
        for (let r in e)
          r === "__proto__" ? Object.defineProperty(t, r, { value: Wt(e[r]), configurable: true, enumerable: true, writable: true }) : t[r] = Wt(e[r]);
        return t;
      }
      Ge(e, "Unknown value");
    }
    function ta(e, t, r, n = 0) {
      return e._createPrismaPromise((i) => {
        var _a4, _b2;
        let o = t.customDataProxyFetch;
        return "transaction" in t && i !== void 0 && (((_a4 = t.transaction) == null ? void 0 : _a4.kind) === "batch" && t.transaction.lock.then(), t.transaction = i), n === r.length ? e._executeRequest(t) : r[n]({ model: t.model, operation: t.model ? t.action : t.clientMethod, args: Xs((_b2 = t.args) != null ? _b2 : {}), __internalParams: t, query: (s, a = t) => {
          let l = a.customDataProxyFetch;
          return a.customDataProxyFetch = oa(o, l), a.args = s, ta(e, a, r, n + 1);
        } });
      });
    }
    function ra(e, t) {
      let { jsModelName: r, action: n, clientMethod: i } = t, o = r ? n : i;
      if (e._extensions.isEmpty())
        return e._executeRequest(t);
      let s = e._extensions.getAllQueryCallbacks(r != null ? r : "$none", o);
      return ta(e, t, s);
    }
    function na(e) {
      return (t) => {
        let r = { requests: t }, n = t[0].extensions.getAllBatchQueryCallbacks();
        return n.length ? ia(r, n, 0, e) : e(r);
      };
    }
    function ia(e, t, r, n) {
      if (r === t.length)
        return n(e);
      let i = e.customDataProxyFetch, o = e.requests[0].transaction;
      return t[r]({ args: { queries: e.requests.map((s) => ({ model: s.modelName, operation: s.action, args: s.args })), transaction: o ? { isolationLevel: o.kind === "batch" ? o.isolationLevel : void 0 } : void 0 }, __internalParams: e, query(s, a = e) {
        let l = a.customDataProxyFetch;
        return a.customDataProxyFetch = oa(i, l), ia(a, t, r + 1, n);
      } });
    }
    var ea = (e) => e;
    function oa(e = ea, t = ea) {
      return (r) => e(t(r));
    }
    function aa(e, t, r) {
      let n = ve(r);
      return !t.result || !(t.result.$allModels || t.result[n]) ? e : _p(__spreadValues(__spreadValues(__spreadValues({}, e), sa(t.name, e, t.result.$allModels)), sa(t.name, e, t.result[n])));
    }
    function _p(e) {
      let t = new xe(), r = (n, i) => t.getOrCreate(n, () => i.has(n) ? [n] : (i.add(n), e[n] ? e[n].needs.flatMap((o) => r(o, i)) : [n]));
      return ct(e, (n) => __spreadProps(__spreadValues({}, n), { needs: r(n.name, /* @__PURE__ */ new Set()) }));
    }
    function sa(e, t, r) {
      return r ? ct(r, ({ needs: n, compute: i }, o) => ({ name: o, needs: n ? Object.keys(n).filter((s) => n[s]) : [], compute: Np(t, o, i) })) : {};
    }
    function Np(e, t, r) {
      var _a4;
      let n = (_a4 = e == null ? void 0 : e[t]) == null ? void 0 : _a4.compute;
      return n ? (i) => r(__spreadProps(__spreadValues({}, i), { [t]: n(i) })) : r;
    }
    function la(e, t) {
      if (!t)
        return e;
      let r = __spreadValues({}, e);
      for (let n of Object.values(t))
        if (e[n.name])
          for (let i of n.needs)
            r[i] = true;
      return r;
    }
    var nn = class {
      constructor(t, r) {
        this.extension = t;
        this.previous = r;
        this.computedFieldsCache = new xe();
        this.modelExtensionsCache = new xe();
        this.queryCallbacksCache = new xe();
        this.clientExtensions = $t(() => {
          var _a4, _b2;
          return this.extension.client ? __spreadValues(__spreadValues({}, (_a4 = this.previous) == null ? void 0 : _a4.getAllClientExtensions()), this.extension.client) : (_b2 = this.previous) == null ? void 0 : _b2.getAllClientExtensions();
        });
        this.batchCallbacks = $t(() => {
          var _a4, _b2, _c2;
          let t2 = (_b2 = (_a4 = this.previous) == null ? void 0 : _a4.getAllBatchQueryCallbacks()) != null ? _b2 : [], r2 = (_c2 = this.extension.query) == null ? void 0 : _c2.$__internalBatch;
          return r2 ? t2.concat(r2) : t2;
        });
      }
      getAllComputedFields(t) {
        return this.computedFieldsCache.getOrCreate(t, () => {
          var _a4;
          return aa((_a4 = this.previous) == null ? void 0 : _a4.getAllComputedFields(t), this.extension, t);
        });
      }
      getAllClientExtensions() {
        return this.clientExtensions.get();
      }
      getAllModelExtensions(t) {
        return this.modelExtensionsCache.getOrCreate(t, () => {
          var _a4, _b2;
          let r = ve(t);
          return !this.extension.model || !(this.extension.model[r] || this.extension.model.$allModels) ? (_a4 = this.previous) == null ? void 0 : _a4.getAllModelExtensions(t) : __spreadValues(__spreadValues(__spreadValues({}, (_b2 = this.previous) == null ? void 0 : _b2.getAllModelExtensions(t)), this.extension.model.$allModels), this.extension.model[r]);
        });
      }
      getAllQueryCallbacks(t, r) {
        return this.queryCallbacksCache.getOrCreate(`${t}:${r}`, () => {
          var _a4, _b2;
          let n = (_b2 = (_a4 = this.previous) == null ? void 0 : _a4.getAllQueryCallbacks(t, r)) != null ? _b2 : [], i = [], o = this.extension.query;
          return !o || !(o[t] || o.$allModels || o[r] || o.$allOperations) ? n : (o[t] !== void 0 && (o[t][r] !== void 0 && i.push(o[t][r]), o[t].$allOperations !== void 0 && i.push(o[t].$allOperations)), t !== "$none" && o.$allModels !== void 0 && (o.$allModels[r] !== void 0 && i.push(o.$allModels[r]), o.$allModels.$allOperations !== void 0 && i.push(o.$allModels.$allOperations)), o[r] !== void 0 && i.push(o[r]), o.$allOperations !== void 0 && i.push(o.$allOperations), n.concat(i));
        });
      }
      getAllBatchQueryCallbacks() {
        return this.batchCallbacks.get();
      }
    };
    var on = class e {
      constructor(t) {
        this.head = t;
      }
      static empty() {
        return new e();
      }
      static single(t) {
        return new e(new nn(t));
      }
      isEmpty() {
        return this.head === void 0;
      }
      append(t) {
        return new e(new nn(t, this.head));
      }
      getAllComputedFields(t) {
        var _a4;
        return (_a4 = this.head) == null ? void 0 : _a4.getAllComputedFields(t);
      }
      getAllClientExtensions() {
        var _a4;
        return (_a4 = this.head) == null ? void 0 : _a4.getAllClientExtensions();
      }
      getAllModelExtensions(t) {
        var _a4;
        return (_a4 = this.head) == null ? void 0 : _a4.getAllModelExtensions(t);
      }
      getAllQueryCallbacks(t, r) {
        var _a4, _b2;
        return (_b2 = (_a4 = this.head) == null ? void 0 : _a4.getAllQueryCallbacks(t, r)) != null ? _b2 : [];
      }
      getAllBatchQueryCallbacks() {
        var _a4, _b2;
        return (_b2 = (_a4 = this.head) == null ? void 0 : _a4.getAllBatchQueryCallbacks()) != null ? _b2 : [];
      }
    };
    var ua = D("prisma:client");
    var ca = { Vercel: "vercel", "Netlify CI": "netlify" };
    function pa({ postinstall: e, ciName: t, clientVersion: r }) {
      if (ua("checkPlatformCaching:postinstall", e), ua("checkPlatformCaching:ciName", t), e === true && t && t in ca) {
        let n = `Prisma has detected that this project was built on ${t}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${ca[t]}-build`;
        throw console.error(n), new k(n, r);
      }
    }
    function da(e, t) {
      return e ? e.datasources ? e.datasources : e.datasourceUrl ? { [t[0]]: { url: e.datasourceUrl } } : {} : {};
    }
    function zt({ error: e, user_facing_error: t }, r) {
      return t.error_code ? new U(t.message, { code: t.error_code, clientVersion: r, meta: t.meta, batchRequestIdx: t.batch_request_idx }) : new K(e, { clientVersion: r, batchRequestIdx: t.batch_request_idx });
    }
    var Pt = class {
    };
    var ha = S(require("fs"));
    var Yt = S(require("path"));
    function sn(e) {
      let { runtimeBinaryTarget: t } = e;
      return `Add "${t}" to \`binaryTargets\` in the "schema.prisma" file and run \`prisma generate\` after saving it:

${Lp(e)}`;
    }
    function Lp(e) {
      let { generator: t, generatorBinaryTargets: r, runtimeBinaryTarget: n } = e, i = { fromEnvVar: null, value: n }, o = [...r, i];
      return ti(__spreadProps(__spreadValues({}, t), { binaryTargets: o }));
    }
    function Ve(e) {
      let { runtimeBinaryTarget: t } = e;
      return `Prisma Client could not locate the Query Engine for runtime "${t}".`;
    }
    function je(e) {
      let { searchedLocations: t } = e;
      return `The following locations have been searched:
${[...new Set(t)].map((i) => `  ${i}`).join(`
`)}`;
    }
    function ma(e) {
      let { runtimeBinaryTarget: t } = e;
      return `${Ve(e)}

This happened because \`binaryTargets\` have been pinned, but the actual deployment also required "${t}".
${sn(e)}

${je(e)}`;
    }
    function an(e) {
      return `We would appreciate if you could take the time to share some information with us.
Please help us by answering a few questions: https://pris.ly/${e}`;
    }
    function fa(e) {
      let { queryEngineName: t } = e;
      return `${Ve(e)}

This is likely caused by a bundler that has not copied "${t}" next to the resulting bundle.
Ensure that "${t}" has been copied next to the bundle or in "${e.expectedLocation}".

${an("engine-not-found-bundler-investigation")}

${je(e)}`;
    }
    function ga(e) {
      var _a4;
      let { runtimeBinaryTarget: t, generatorBinaryTargets: r } = e, n = r.find((i) => i.native);
      return `${Ve(e)}

This happened because Prisma Client was generated for "${(_a4 = n == null ? void 0 : n.value) != null ? _a4 : "unknown"}", but the actual deployment required "${t}".
${sn(e)}

${je(e)}`;
    }
    function ya(e) {
      let { queryEngineName: t } = e;
      return `${Ve(e)}

This is likely caused by tooling that has not copied "${t}" to the deployment folder.
Ensure that you ran \`prisma generate\` and that "${t}" has been copied to "${e.expectedLocation}".

${an("engine-not-found-tooling-investigation")}

${je(e)}`;
    }
    var $p = D("prisma:client:engines:resolveEnginePath");
    var qp = () => new RegExp("runtime[\\\\/]library\\.m?js$");
    function xa(e, t) {
      return __async(this, null, function* () {
        var _a4, _b2, _c2;
        let r = (_a4 = { binary: process.env.PRISMA_QUERY_ENGINE_BINARY, library: process.env.PRISMA_QUERY_ENGINE_LIBRARY }[e]) != null ? _a4 : t.prismaPath;
        if (r !== void 0)
          return r;
        let { enginePath: n, searchedLocations: i } = yield Vp(e, t);
        if ($p("enginePath", n), n !== void 0 && e === "binary" && zn(n), n !== void 0)
          return t.prismaPath = n;
        let o = yield lt(), s = (_c2 = (_b2 = t.generator) == null ? void 0 : _b2.binaryTargets) != null ? _c2 : [], a = s.some((d) => d.native), l = !s.some((d) => d.value === o), u = __filename.match(qp()) === null, c = { searchedLocations: i, generatorBinaryTargets: s, generator: t.generator, runtimeBinaryTarget: o, queryEngineName: ba(e, o), expectedLocation: Yt.default.relative(process.cwd(), t.dirname) }, p;
        throw a && l ? p = ga(c) : l ? p = ma(c) : u ? p = fa(c) : p = ya(c), new k(p, t.clientVersion);
      });
    }
    function Vp(engineType, config) {
      return __async(this, null, function* () {
        var _a4, _b2, _c2;
        let binaryTarget = yield lt(), searchedLocations = [], dirname = eval("__dirname"), searchLocations = [config.dirname, Yt.default.resolve(dirname, ".."), (_c2 = (_b2 = (_a4 = config.generator) == null ? void 0 : _a4.output) == null ? void 0 : _b2.value) != null ? _c2 : dirname, Yt.default.resolve(dirname, "../../../.prisma/client"), "/tmp/prisma-engines", config.cwd];
        __filename.includes("resolveEnginePath") && searchLocations.push(zo());
        for (let e of searchLocations) {
          let t = ba(engineType, binaryTarget), r = Yt.default.join(e, t);
          if (searchedLocations.push(e), ha.default.existsSync(r))
            return { enginePath: r, searchedLocations };
        }
        return { enginePath: void 0, searchedLocations };
      });
    }
    function ba(e, t) {
      return e === "library" ? Nn(t, "fs") : `query-engine-${t}${t === "windows" ? ".exe" : ""}`;
    }
    function ln(e, t) {
      return { batch: e, transaction: (t == null ? void 0 : t.kind) === "batch" ? { isolationLevel: t.options.isolationLevel } : void 0 };
    }
    var Ci = S(ni());
    function Ea(e) {
      return e ? e.replace(/".*"/g, '"X"').replace(/[\s:\[]([+-]?([0-9]*[.])?[0-9]+)/g, (t) => `${t[0]}5`) : "";
    }
    function wa(e) {
      return e.split(`
`).map((t) => t.replace(/^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)\s*/, "").replace(/\+\d+\s*ms$/, "")).join(`
`);
    }
    var Pa = S(is());
    function va({ title: e, user: t = "prisma", repo: r = "prisma", template: n = "bug_report.md", body: i }) {
      return (0, Pa.default)({ user: t, repo: r, template: n, title: e, body: i });
    }
    function Ta({ version: e, platform: t, title: r, description: n, engineVersion: i, database: o, query: s }) {
      var _a4, _b2;
      let a = mo(6e3 - ((_a4 = s == null ? void 0 : s.length) != null ? _a4 : 0)), l = wa((0, Ci.default)(a)), u = n ? `# Description
\`\`\`
${n}
\`\`\`` : "", c = (0, Ci.default)(`Hi Prisma Team! My Prisma Client just crashed. This is the report:
## Versions

| Name            | Version            |
|-----------------|--------------------|
| Node            | ${(_b2 = process.version) == null ? void 0 : _b2.padEnd(19)}| 
| OS              | ${t == null ? void 0 : t.padEnd(19)}|
| Prisma Client   | ${e == null ? void 0 : e.padEnd(19)}|
| Query Engine    | ${i == null ? void 0 : i.padEnd(19)}|
| Database        | ${o == null ? void 0 : o.padEnd(19)}|

${u}

## Logs
\`\`\`
${l}
\`\`\`

## Client Snippet
\`\`\`ts
// PLEASE FILL YOUR CODE SNIPPET HERE
\`\`\`

## Schema
\`\`\`prisma
// PLEASE ADD YOUR SCHEMA HERE IF POSSIBLE
\`\`\`

## Prisma Engine Query
\`\`\`
${s ? Ea(s) : ""}
\`\`\`
`), p = va({ title: r, body: c });
      return `${r}

This is a non-recoverable error which probably happens when the Prisma Query Engine has a panic.

${te(p)}

If you want the Prisma team to look into it, please open the link above \u{1F64F}
To increase the chance of success, please post your schema and a snippet of
how you used Prisma Client in the issue. 
`;
    }
    function un({ inlineDatasources: e, overrideDatasources: t, env: r, clientVersion: n }) {
      var _a4, _b2;
      let i, o = Object.keys(e)[0], s = (_a4 = e[o]) == null ? void 0 : _a4.url, a = (_b2 = t[o]) == null ? void 0 : _b2.url;
      if (o === void 0 ? i = void 0 : a ? i = a : (s == null ? void 0 : s.value) ? i = s.value : (s == null ? void 0 : s.fromEnvVar) && (i = r[s.fromEnvVar]), (s == null ? void 0 : s.fromEnvVar) !== void 0 && i === void 0)
        throw new k(`error: Environment variable not found: ${s.fromEnvVar}.`, n);
      if (i === void 0)
        throw new k("error: Missing URL environment variable, value, or override.", n);
      return i;
    }
    var cn = class extends Error {
      constructor(r, n) {
        super(r);
        this.clientVersion = n.clientVersion, this.cause = n.cause;
      }
      get [Symbol.toStringTag]() {
        return this.name;
      }
    };
    var ae = class extends cn {
      constructor(r, n) {
        var _a4;
        super(r, n);
        this.isRetryable = (_a4 = n.isRetryable) != null ? _a4 : true;
      }
    };
    function M(e, t) {
      return __spreadProps(__spreadValues({}, e), { isRetryable: t });
    }
    var vt = class extends ae {
      constructor(r) {
        super("This request must be retried", M(r, true));
        this.name = "ForcedRetryError";
        this.code = "P5001";
      }
    };
    E(vt, "ForcedRetryError");
    var ze = class extends ae {
      constructor(r, n) {
        super(r, M(n, false));
        this.name = "InvalidDatasourceError";
        this.code = "P5002";
      }
    };
    E(ze, "InvalidDatasourceError");
    var Ye = class extends ae {
      constructor(r, n) {
        super(r, M(n, false));
        this.name = "NotImplementedYetError";
        this.code = "P5004";
      }
    };
    E(Ye, "NotImplementedYetError");
    var L = class extends ae {
      constructor(r, n) {
        super(r, n);
        this.response = n.response;
        let i = this.response.headers.get("prisma-request-id");
        if (i) {
          let o = `(The request id was: ${i})`;
          this.message = this.message + " " + o;
        }
      }
    };
    var Ze = class extends L {
      constructor(r) {
        super("Schema needs to be uploaded", M(r, true));
        this.name = "SchemaMissingError";
        this.code = "P5005";
      }
    };
    E(Ze, "SchemaMissingError");
    var Ai = "This request could not be understood by the server";
    var Zt = class extends L {
      constructor(r, n, i) {
        super(n || Ai, M(r, false));
        this.name = "BadRequestError";
        this.code = "P5000";
        i && (this.code = i);
      }
    };
    E(Zt, "BadRequestError");
    var Xt = class extends L {
      constructor(r, n) {
        super("Engine not started: healthcheck timeout", M(r, true));
        this.name = "HealthcheckTimeoutError";
        this.code = "P5013";
        this.logs = n;
      }
    };
    E(Xt, "HealthcheckTimeoutError");
    var er = class extends L {
      constructor(r, n, i) {
        super(n, M(r, true));
        this.name = "EngineStartupError";
        this.code = "P5014";
        this.logs = i;
      }
    };
    E(er, "EngineStartupError");
    var tr = class extends L {
      constructor(r) {
        super("Engine version is not supported", M(r, false));
        this.name = "EngineVersionNotSupportedError";
        this.code = "P5012";
      }
    };
    E(tr, "EngineVersionNotSupportedError");
    var Ri = "Request timed out";
    var rr = class extends L {
      constructor(r, n = Ri) {
        super(n, M(r, false));
        this.name = "GatewayTimeoutError";
        this.code = "P5009";
      }
    };
    E(rr, "GatewayTimeoutError");
    var jp = "Interactive transaction error";
    var nr = class extends L {
      constructor(r, n = jp) {
        super(n, M(r, false));
        this.name = "InteractiveTransactionError";
        this.code = "P5015";
      }
    };
    E(nr, "InteractiveTransactionError");
    var Bp = "Request parameters are invalid";
    var ir = class extends L {
      constructor(r, n = Bp) {
        super(n, M(r, false));
        this.name = "InvalidRequestError";
        this.code = "P5011";
      }
    };
    E(ir, "InvalidRequestError");
    var Mi = "Requested resource does not exist";
    var or = class extends L {
      constructor(r, n = Mi) {
        super(n, M(r, false));
        this.name = "NotFoundError";
        this.code = "P5003";
      }
    };
    E(or, "NotFoundError");
    var Si = "Unknown server error";
    var Tt = class extends L {
      constructor(r, n, i) {
        super(n || Si, M(r, true));
        this.name = "ServerError";
        this.code = "P5006";
        this.logs = i;
      }
    };
    E(Tt, "ServerError");
    var Ii = "Unauthorized, check your connection string";
    var sr = class extends L {
      constructor(r, n = Ii) {
        super(n, M(r, false));
        this.name = "UnauthorizedError";
        this.code = "P5007";
      }
    };
    E(sr, "UnauthorizedError");
    var Fi = "Usage exceeded, retry again later";
    var ar = class extends L {
      constructor(r, n = Fi) {
        super(n, M(r, true));
        this.name = "UsageExceededError";
        this.code = "P5008";
      }
    };
    E(ar, "UsageExceededError");
    function Up(e) {
      return __async(this, null, function* () {
        let t;
        try {
          t = yield e.text();
        } catch (e2) {
          return { type: "EmptyError" };
        }
        try {
          let r = JSON.parse(t);
          if (typeof r == "string")
            switch (r) {
              case "InternalDataProxyError":
                return { type: "DataProxyError", body: r };
              default:
                return { type: "UnknownTextError", body: r };
            }
          if (typeof r == "object" && r !== null) {
            if ("is_panic" in r && "message" in r && "error_code" in r)
              return { type: "QueryEngineError", body: r };
            if ("EngineNotStarted" in r || "InteractiveTransactionMisrouted" in r || "InvalidRequestError" in r) {
              let n = Object.values(r)[0].reason;
              return typeof n == "string" && !["SchemaMissing", "EngineVersionNotSupported"].includes(n) ? { type: "UnknownJsonError", body: r } : { type: "DataProxyError", body: r };
            }
          }
          return { type: "UnknownJsonError", body: r };
        } catch (e2) {
          return t === "" ? { type: "EmptyError" } : { type: "UnknownTextError", body: t };
        }
      });
    }
    function lr(e, t) {
      return __async(this, null, function* () {
        if (e.ok)
          return;
        let r = { clientVersion: t, response: e }, n = yield Up(e);
        if (n.type === "QueryEngineError")
          throw new U(n.body.message, { code: n.body.error_code, clientVersion: t });
        if (n.type === "DataProxyError") {
          if (n.body === "InternalDataProxyError")
            throw new Tt(r, "Internal Data Proxy error");
          if ("EngineNotStarted" in n.body) {
            if (n.body.EngineNotStarted.reason === "SchemaMissing")
              return new Ze(r);
            if (n.body.EngineNotStarted.reason === "EngineVersionNotSupported")
              throw new tr(r);
            if ("EngineStartupError" in n.body.EngineNotStarted.reason) {
              let { msg: i, logs: o } = n.body.EngineNotStarted.reason.EngineStartupError;
              throw new er(r, i, o);
            }
            if ("KnownEngineStartupError" in n.body.EngineNotStarted.reason) {
              let { msg: i, error_code: o } = n.body.EngineNotStarted.reason.KnownEngineStartupError;
              throw new k(i, t, o);
            }
            if ("HealthcheckTimeout" in n.body.EngineNotStarted.reason) {
              let { logs: i } = n.body.EngineNotStarted.reason.HealthcheckTimeout;
              throw new Xt(r, i);
            }
          }
          if ("InteractiveTransactionMisrouted" in n.body) {
            let i = { IDParseError: "Could not parse interactive transaction ID", NoQueryEngineFoundError: "Could not find Query Engine for the specified host and transaction ID", TransactionStartError: "Could not start interactive transaction" };
            throw new nr(r, i[n.body.InteractiveTransactionMisrouted.reason]);
          }
          if ("InvalidRequestError" in n.body)
            throw new ir(r, n.body.InvalidRequestError.reason);
        }
        if (e.status === 401 || e.status === 403)
          throw new sr(r, Ct(Ii, n));
        if (e.status === 404)
          return new or(r, Ct(Mi, n));
        if (e.status === 429)
          throw new ar(r, Ct(Fi, n));
        if (e.status === 504)
          throw new rr(r, Ct(Ri, n));
        if (e.status >= 500)
          throw new Tt(r, Ct(Si, n));
        if (e.status >= 400)
          throw new Zt(r, Ct(Ai, n));
      });
    }
    function Ct(e, t) {
      return t.type === "EmptyError" ? e : `${e}: ${JSON.stringify(t)}`;
    }
    function Ca(e) {
      let t = Math.pow(2, e) * 50, r = Math.ceil(Math.random() * t) - Math.ceil(t / 2), n = t + r;
      return new Promise((i) => setTimeout(() => i(n), n));
    }
    function Aa(e) {
      var _a4;
      if (!!((_a4 = e.generator) == null ? void 0 : _a4.previewFeatures.some((r) => r.toLowerCase().includes("metrics"))))
        throw new k("The `metrics` preview feature is not yet available with Accelerate.\nPlease remove `metrics` from the `previewFeatures` in your schema.\n\nMore information about Accelerate: https://pris.ly/d/accelerate", e.clientVersion);
    }
    var Ra = { "@prisma/debug": "workspace:*", "@prisma/engines-version": "5.3.1-2.61e140623197a131c2a6189271ffee05a7aa9a59", "@prisma/fetch-engine": "workspace:*", "@prisma/get-platform": "workspace:*", "@swc/core": "1.3.75", "@swc/jest": "0.2.29", "@types/jest": "29.5.4", "@types/node": "18.17.12", execa: "5.1.1", jest: "29.6.4", typescript: "5.2.2" };
    var ur = class extends ae {
      constructor(r, n) {
        super(`Cannot fetch data from service:
${r}`, M(n, true));
        this.name = "RequestError";
        this.code = "P5010";
      }
    };
    E(ur, "RequestError");
    function Xe(e, t, r = (n) => n) {
      return __async(this, null, function* () {
        var _a4;
        let n = t.clientVersion;
        try {
          return typeof fetch == "function" ? yield r(fetch)(e, t) : yield r(ki)(e, t);
        } catch (i) {
          console.log(e);
          let o = (_a4 = i.message) != null ? _a4 : "Unknown error";
          throw new ur(o, { clientVersion: n });
        }
      });
    }
    function Qp(e) {
      return __spreadProps(__spreadValues({}, e.headers), { "Content-Type": "application/json" });
    }
    function Jp(e) {
      return { method: e.method, headers: Qp(e) };
    }
    function Gp(e, t) {
      return { text: () => Promise.resolve(Buffer.concat(e).toString()), json: () => Promise.resolve().then(() => JSON.parse(Buffer.concat(e).toString())), ok: t.statusCode >= 200 && t.statusCode <= 299, status: t.statusCode, url: t.url, headers: new Oi(t.headers) };
    }
    function ki(_0) {
      return __async(this, arguments, function* (e, t = {}) {
        let r = Hp("https"), n = Jp(t), i = [], { origin: o } = new URL(e);
        return new Promise((s, a) => {
          var _a4;
          let l = r.request(e, n, (u) => {
            let { statusCode: c, headers: { location: p } } = u;
            c >= 301 && c <= 399 && p && (p.startsWith("http") === false ? s(ki(`${o}${p}`, t)) : s(ki(p, t))), u.on("data", (d) => i.push(d)), u.on("end", () => s(Gp(i, u))), u.on("error", a);
          });
          l.on("error", a), l.end((_a4 = t.body) != null ? _a4 : "");
        });
      });
    }
    var Hp = typeof require < "u" ? require : () => {
    };
    var Oi = class {
      constructor(t = {}) {
        this.headers = /* @__PURE__ */ new Map();
        for (let [r, n] of Object.entries(t))
          if (typeof n == "string")
            this.headers.set(r, n);
          else if (Array.isArray(n))
            for (let i of n)
              this.headers.set(r, i);
      }
      append(t, r) {
        this.headers.set(t, r);
      }
      delete(t) {
        this.headers.delete(t);
      }
      get(t) {
        var _a4;
        return (_a4 = this.headers.get(t)) != null ? _a4 : null;
      }
      has(t) {
        return this.headers.has(t);
      }
      set(t, r) {
        this.headers.set(t, r);
      }
      forEach(t, r) {
        for (let [n, i] of this.headers)
          t.call(r, i, n, this);
      }
    };
    var Wp = /^[1-9][0-9]*\.[0-9]+\.[0-9]+$/;
    var Ma = D("prisma:client:dataproxyEngine");
    function zp(e, t) {
      return __async(this, null, function* () {
        var _a4, _b2, _c2;
        let r = Ra["@prisma/engines-version"], n = (_a4 = t.clientVersion) != null ? _a4 : "unknown";
        if (process.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION)
          return process.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION;
        if (e.includes("accelerate") && n !== "0.0.0" && n !== "in-memory")
          return n;
        let [i, o] = (_b2 = n == null ? void 0 : n.split("-")) != null ? _b2 : [];
        if (o === void 0 && Wp.test(i))
          return i;
        if (o !== void 0 || n === "0.0.0" || n === "in-memory") {
          if (e.startsWith("localhost") || e.startsWith("127.0.0.1"))
            return "0.0.0";
          let [s] = (_c2 = r.split("-")) != null ? _c2 : [], [a, l, u] = s.split("."), c = Yp(`<=${a}.${l}.${u}`), p = yield Xe(c, { clientVersion: n });
          if (!p.ok)
            throw new Error(`Failed to fetch stable Prisma version, unpkg.com status ${p.status} ${p.statusText}, response body: ${(yield p.text()) || "<empty body>"}`);
          let d = yield p.text();
          Ma("length of body fetched from unpkg.com", d.length);
          let f;
          try {
            f = JSON.parse(d);
          } catch (y) {
            throw console.error("JSON.parse error: body fetched from unpkg.com: ", d), y;
          }
          return f.version;
        }
        throw new Ye("Only `major.minor.patch` versions are supported by Accelerate.", { clientVersion: n });
      });
    }
    function Sa(e, t) {
      return __async(this, null, function* () {
        let r = yield zp(e, t);
        return Ma("version", r), r;
      });
    }
    function Yp(e) {
      return encodeURI(`https://unpkg.com/prisma@${e}/package.json`);
    }
    var Ia = 3;
    var Di = D("prisma:client:dataproxyEngine");
    var _i = class {
      constructor({ apiKey: t, tracingHelper: r, logLevel: n, logQueries: i }) {
        this.apiKey = t, this.tracingHelper = r, this.logLevel = n, this.logQueries = i;
      }
      build({ traceparent: t, interactiveTransaction: r } = {}) {
        let n = { Authorization: `Bearer ${this.apiKey}` };
        this.tracingHelper.isEnabled() && (n.traceparent = t != null ? t : this.tracingHelper.getTraceParent()), r && (n["X-transaction-id"] = r.id);
        let i = this.buildCaptureSettings();
        return i.length > 0 && (n["X-capture-telemetry"] = i.join(", ")), n;
      }
      buildCaptureSettings() {
        let t = [];
        return this.tracingHelper.isEnabled() && t.push("tracing"), this.logLevel && t.push(this.logLevel), this.logQueries && t.push("query"), t;
      }
    };
    var cr = class extends Pt {
      constructor(r) {
        var _a4, _b2, _c2, _d2;
        super();
        Aa(r), this.config = r, this.env = __spreadValues(__spreadValues({}, this.config.env), process.env), this.inlineSchema = (_a4 = r.inlineSchema) != null ? _a4 : "", this.inlineDatasources = (_b2 = r.inlineDatasources) != null ? _b2 : {}, this.inlineSchemaHash = (_c2 = r.inlineSchemaHash) != null ? _c2 : "", this.clientVersion = (_d2 = r.clientVersion) != null ? _d2 : "unknown", this.logEmitter = r.logEmitter, this.tracingHelper = this.config.tracingHelper;
      }
      apiKey() {
        return this.headerBuilder.apiKey;
      }
      version() {
        return "unknown";
      }
      start() {
        return __async(this, null, function* () {
          this.startPromise !== void 0 && (yield this.startPromise), this.startPromise = (() => __async(this, null, function* () {
            let [r, n] = this.extractHostAndApiKey();
            this.host = r, this.headerBuilder = new _i({ apiKey: n, tracingHelper: this.tracingHelper, logLevel: this.config.logLevel, logQueries: this.config.logQueries }), this.remoteClientVersion = yield Sa(r, this.config), Di("host", this.host);
          }))(), yield this.startPromise;
        });
      }
      stop() {
        return __async(this, null, function* () {
        });
      }
      propagateResponseExtensions(r) {
        var _a4, _b2;
        ((_a4 = r == null ? void 0 : r.logs) == null ? void 0 : _a4.length) && r.logs.forEach((n) => {
          switch (n.level) {
            case "debug":
            case "error":
            case "trace":
            case "warn":
            case "info":
              break;
            case "query": {
              let i = typeof n.attributes.query == "string" ? n.attributes.query : "";
              if (!this.tracingHelper.isEnabled()) {
                let [o] = i.split("/* traceparent");
                i = o;
              }
              this.logEmitter.emit("query", { query: i, timestamp: n.timestamp, duration: n.attributes.duration_ms, params: n.attributes.params, target: n.attributes.target });
            }
          }
        }), ((_b2 = r == null ? void 0 : r.traces) == null ? void 0 : _b2.length) && this.tracingHelper.createEngineSpan({ span: true, spans: r.traces });
      }
      on(r, n) {
        if (r === "beforeExit")
          throw new Error('"beforeExit" hook is not applicable to the remote query engine');
        this.logEmitter.on(r, n);
      }
      url(r) {
        return __async(this, null, function* () {
          return yield this.start(), `https://${this.host}/${this.remoteClientVersion}/${this.inlineSchemaHash}/${r}`;
        });
      }
      uploadSchema() {
        return __async(this, null, function* () {
          let r = { name: "schemaUpload", internal: true };
          return this.tracingHelper.runInChildSpan(r, () => __async(this, null, function* () {
            let n = yield Xe(yield this.url("schema"), { method: "PUT", headers: this.headerBuilder.build(), body: this.inlineSchema, clientVersion: this.clientVersion });
            n.ok || Di("schema response status", n.status);
            let i = yield lr(n, this.clientVersion);
            if (i)
              throw this.logEmitter.emit("warn", { message: `Error while uploading schema: ${i.message}` }), i;
            this.logEmitter.emit("info", { message: `Schema (re)uploaded (hash: ${this.inlineSchemaHash})` });
          }));
        });
      }
      request(r, { traceparent: n, interactiveTransaction: i, customDataProxyFetch: o }) {
        return this.requestInternal({ body: r, traceparent: n, interactiveTransaction: i, customDataProxyFetch: o });
      }
      requestBatch(_0, _1) {
        return __async(this, arguments, function* (r, { traceparent: n, transaction: i, customDataProxyFetch: o }) {
          let s = (i == null ? void 0 : i.kind) === "itx" ? i.options : void 0, a = ln(r, i), { batchResult: l, elapsed: u } = yield this.requestInternal({ body: a, customDataProxyFetch: o, interactiveTransaction: s, traceparent: n });
          return l.map((c) => "errors" in c && c.errors.length > 0 ? zt(c.errors[0], this.clientVersion) : { data: c, elapsed: u });
        });
      }
      requestInternal({ body: r, traceparent: n, customDataProxyFetch: i, interactiveTransaction: o }) {
        return this.withRetry({ actionGerund: "querying", callback: (_0) => __async(this, [_0], function* ({ logHttpCall: s }) {
          let a = o ? `${o.payload.endpoint}/graphql` : yield this.url("graphql");
          s(a);
          let l = yield Xe(a, { method: "POST", headers: this.headerBuilder.build({ traceparent: n, interactiveTransaction: o }), body: JSON.stringify(r), clientVersion: this.clientVersion }, i);
          l.ok || Di("graphql response status", l.status), yield this.handleError(yield lr(l, this.clientVersion));
          let u = yield l.json(), c = u.extensions;
          if (c && this.propagateResponseExtensions(c), u.errors)
            throw u.errors.length === 1 ? zt(u.errors[0], this.config.clientVersion) : new K(u.errors, { clientVersion: this.config.clientVersion });
          return u;
        }) });
      }
      transaction(r, n, i) {
        return __async(this, null, function* () {
          let o = { start: "starting", commit: "committing", rollback: "rolling back" };
          return this.withRetry({ actionGerund: `${o[r]} transaction`, callback: (_0) => __async(this, [_0], function* ({ logHttpCall: s }) {
            var _a4, _b2;
            if (r === "start") {
              let a = JSON.stringify({ max_wait: (_a4 = i == null ? void 0 : i.maxWait) != null ? _a4 : 2e3, timeout: (_b2 = i == null ? void 0 : i.timeout) != null ? _b2 : 5e3, isolation_level: i == null ? void 0 : i.isolationLevel }), l = yield this.url("transaction/start");
              s(l);
              let u = yield Xe(l, { method: "POST", headers: this.headerBuilder.build({ traceparent: n.traceparent }), body: a, clientVersion: this.clientVersion });
              yield this.handleError(yield lr(u, this.clientVersion));
              let c = yield u.json(), p = c.extensions;
              p && this.propagateResponseExtensions(p);
              let d = c.id, f = c["data-proxy"].endpoint;
              return { id: d, payload: { endpoint: f } };
            } else {
              let a = `${i.payload.endpoint}/${r}`;
              s(a);
              let l = yield Xe(a, { method: "POST", headers: this.headerBuilder.build({ traceparent: n.traceparent }), clientVersion: this.clientVersion });
              yield this.handleError(yield lr(l, this.clientVersion));
              let c = (yield l.json()).extensions;
              c && this.propagateResponseExtensions(c);
              return;
            }
          }) });
        });
      }
      extractHostAndApiKey() {
        let r = { clientVersion: this.clientVersion }, n = Object.keys(this.inlineDatasources)[0], i = un({ inlineDatasources: this.inlineDatasources, overrideDatasources: this.config.overrideDatasources, clientVersion: this.clientVersion, env: this.env }), o;
        try {
          o = new URL(i);
        } catch (e) {
          throw new ze(`Error validating datasource \`${n}\`: the URL must start with the protocol \`prisma://\``, r);
        }
        let { protocol: s, host: a, searchParams: l } = o;
        if (s !== "prisma:")
          throw new ze(`Error validating datasource \`${n}\`: the URL must start with the protocol \`prisma://\``, r);
        let u = l.get("api_key");
        if (u === null || u.length < 1)
          throw new ze(`Error validating datasource \`${n}\`: the URL must contain a valid API key`, r);
        return [a, u];
      }
      metrics() {
        throw new Ye("Metrics are not yet supported for Accelerate", { clientVersion: this.clientVersion });
      }
      withRetry(r) {
        return __async(this, null, function* () {
          var _a4;
          for (let n = 0; ; n++) {
            let i = (o) => {
              this.logEmitter.emit("info", { message: `Calling ${o} (n=${n})` });
            };
            try {
              return yield r.callback({ logHttpCall: i });
            } catch (o) {
              if (!(o instanceof ae) || !o.isRetryable)
                throw o;
              if (n >= Ia)
                throw o instanceof vt ? o.cause : o;
              this.logEmitter.emit("warn", { message: `Attempt ${n + 1}/${Ia} failed for ${r.actionGerund}: ${(_a4 = o.message) != null ? _a4 : "(unknown)"}` });
              let s = yield Ca(n);
              this.logEmitter.emit("warn", { message: `Retrying after ${s}ms` });
            }
          }
        });
      }
      handleError(r) {
        return __async(this, null, function* () {
          if (r instanceof Ze)
            throw yield this.uploadSchema(), new vt({ clientVersion: this.clientVersion, cause: r });
          if (r)
            throw r;
        });
      }
    };
    var _a = S(require("fs"));
    function Fa(e) {
      if ((e == null ? void 0 : e.kind) === "itx")
        return e.options.id;
    }
    var Li = S(require("os"));
    var ka = S(require("path"));
    var Ni = Symbol("PrismaLibraryEngineCache");
    function Zp() {
      let e = globalThis;
      return e[Ni] === void 0 && (e[Ni] = {}), e[Ni];
    }
    function Xp(e) {
      let t = Zp();
      if (t[e] !== void 0)
        return t[e];
      let r = ka.default.toNamespacedPath(e), n = { exports: {} }, i = 0;
      return process.platform !== "win32" && (i = Li.default.constants.dlopen.RTLD_LAZY | Li.default.constants.dlopen.RTLD_DEEPBIND), process.dlopen(n, r, i), t[e] = n.exports, n.exports;
    }
    var pn = class {
      constructor(t) {
        this.config = t;
      }
      loadLibrary() {
        return __async(this, null, function* () {
          let t = yield Bn(), r = yield xa("library", this.config);
          try {
            return this.config.tracingHelper.runInChildSpan({ name: "loadLibrary", internal: true }, () => Xp(r));
          } catch (n) {
            let i = Yn({ e: n, platformInfo: t, id: r });
            throw new k(i, this.config.clientVersion);
          }
        });
      }
    };
    var Me = D("prisma:client:libraryEngine");
    function ed(e) {
      return e.item_type === "query" && "query" in e;
    }
    function td(e) {
      return "level" in e ? e.level === "error" && e.message === "PANIC" : false;
    }
    var Oa = [...Un, "native"];
    var Da = 0;
    var pr = class extends Pt {
      constructor(r, n = new pn(r)) {
        var _a4, _b2, _c2;
        super();
        try {
          this.datamodel = _a.default.readFileSync(r.datamodelPath, "utf-8");
        } catch (s) {
          throw s.stack.match(/\/\.next|\/next@|\/next\//) ? new k(`Your schema.prisma could not be found, and we detected that you are using Next.js.
Find out why and learn how to fix this: https://pris.ly/d/schema-not-found-nextjs`, r.clientVersion) : r.isBundled === true ? new k("Prisma Client could not find its `schema.prisma`. This is likely caused by a bundling step, which leads to `schema.prisma` not being copied near the resulting bundle. We would appreciate if you could take the time to share some information with us.\nPlease help us by answering a few questions: https://pris.ly/bundler-investigation-error", r.clientVersion) : s;
        }
        this.config = r, this.libraryStarted = false, this.logQueries = (_a4 = r.logQueries) != null ? _a4 : false, this.logLevel = (_b2 = r.logLevel) != null ? _b2 : "error", this.libraryLoader = n, this.logEmitter = r.logEmitter, r.enableDebugLogs && (this.logLevel = "debug");
        let i = Object.keys(r.overrideDatasources)[0], o = (_c2 = r.overrideDatasources[i]) == null ? void 0 : _c2.url;
        i !== void 0 && o !== void 0 && (this.datasourceOverrides = { [i]: o }), this.libraryInstantiationPromise = this.instantiateLibrary(), this.checkForTooManyEngines();
      }
      checkForTooManyEngines() {
        Da === 10 && console.warn(`${he("warn(prisma-client)")} This is the 10th instance of Prisma Client being started. Make sure this is intentional.`);
      }
      transaction(r, n, i) {
        return __async(this, null, function* () {
          var _a4, _b2, _c2, _d2, _e2;
          yield this.start();
          let o = JSON.stringify(n), s;
          if (r === "start") {
            let l = JSON.stringify({ max_wait: (_a4 = i == null ? void 0 : i.maxWait) != null ? _a4 : 2e3, timeout: (_b2 = i == null ? void 0 : i.timeout) != null ? _b2 : 5e3, isolation_level: i == null ? void 0 : i.isolationLevel });
            s = yield (_c2 = this.engine) == null ? void 0 : _c2.startTransaction(l, o);
          } else
            r === "commit" ? s = yield (_d2 = this.engine) == null ? void 0 : _d2.commitTransaction(i.id, o) : r === "rollback" && (s = yield (_e2 = this.engine) == null ? void 0 : _e2.rollbackTransaction(i.id, o));
          let a = this.parseEngineResponse(s);
          if (a.error_code)
            throw new U(a.message, { code: a.error_code, clientVersion: this.config.clientVersion, meta: a.meta });
          return a;
        });
      }
      instantiateLibrary() {
        return __async(this, null, function* () {
          if (Me("internalSetup"), this.libraryInstantiationPromise)
            return this.libraryInstantiationPromise;
          _n(), this.platform = yield this.getPlatform(), yield this.loadEngine(), this.version();
        });
      }
      getPlatform() {
        return __async(this, null, function* () {
          if (this.platform)
            return this.platform;
          let r = yield lt();
          if (!Oa.includes(r))
            throw new k(`Unknown ${me("PRISMA_QUERY_ENGINE_LIBRARY")} ${me(ne(r))}. Possible binaryTargets: ${Qe(Oa.join(", "))} or a path to the query engine library.
You may have to run ${Qe("prisma generate")} for your changes to take effect.`, this.config.clientVersion);
          return r;
        });
      }
      parseEngineResponse(r) {
        if (!r)
          throw new K("Response from the Engine was empty", { clientVersion: this.config.clientVersion });
        try {
          return JSON.parse(r);
        } catch (e) {
          throw new K("Unable to JSON.parse response from engine", { clientVersion: this.config.clientVersion });
        }
      }
      loadEngine() {
        return __async(this, null, function* () {
          var _a4, _b2;
          if (!this.engine) {
            this.QueryEngineConstructor || (this.library = yield this.libraryLoader.loadLibrary(), this.QueryEngineConstructor = this.library.QueryEngine);
            try {
              let r = new WeakRef(this);
              this.engine = new this.QueryEngineConstructor({ datamodel: this.datamodel, env: process.env, logQueries: (_a4 = this.config.logQueries) != null ? _a4 : false, ignoreEnvVarErrors: true, datasourceOverrides: (_b2 = this.datasourceOverrides) != null ? _b2 : {}, logLevel: this.logLevel, configDir: this.config.cwd, engineProtocol: "json" }, (n) => {
                var _a5;
                (_a5 = r.deref()) == null ? void 0 : _a5.logger(n);
              }), Da++;
            } catch (r) {
              let n = r, i = this.parseInitError(n.message);
              throw typeof i == "string" ? n : new k(i.message, this.config.clientVersion, i.error_code);
            }
          }
        });
      }
      logger(r) {
        var _a4;
        let n = this.parseEngineResponse(r);
        if (n) {
          if ("span" in n) {
            this.config.tracingHelper.createEngineSpan(n);
            return;
          }
          n.level = (_a4 = n == null ? void 0 : n.level.toLowerCase()) != null ? _a4 : "unknown", ed(n) ? this.logEmitter.emit("query", { timestamp: /* @__PURE__ */ new Date(), query: n.query, params: n.params, duration: Number(n.duration_ms), target: n.module_path }) : td(n) ? this.loggerRustPanic = new ue(this.getErrorMessageWithLink(`${n.message}: ${n.reason} in ${n.file}:${n.line}:${n.column}`), this.config.clientVersion) : this.logEmitter.emit(n.level, { timestamp: /* @__PURE__ */ new Date(), message: n.message, target: n.module_path });
        }
      }
      getErrorMessageWithLink(r) {
        var _a4;
        return Ta({ platform: this.platform, title: r, version: this.config.clientVersion, engineVersion: (_a4 = this.versionInfo) == null ? void 0 : _a4.commit, database: this.config.activeProvider, query: this.lastQuery });
      }
      parseInitError(r) {
        try {
          return JSON.parse(r);
        } catch (e) {
        }
        return r;
      }
      parseRequestError(r) {
        try {
          return JSON.parse(r);
        } catch (e) {
        }
        return r;
      }
      on(r, n) {
        if (r === "beforeExit")
          throw new Error('"beforeExit" hook is not applicable to the library engine since Prisma 5.0.0, it is only relevant and implemented for the binary engine. Please add your event listener to the `process` object directly instead.');
        this.logEmitter.on(r, n);
      }
      start() {
        return __async(this, null, function* () {
          if (yield this.libraryInstantiationPromise, yield this.libraryStoppingPromise, this.libraryStartingPromise)
            return Me(`library already starting, this.libraryStarted: ${this.libraryStarted}`), this.libraryStartingPromise;
          if (this.libraryStarted)
            return;
          let r = () => __async(this, null, function* () {
            var _a4;
            Me("library starting");
            try {
              let n = { traceparent: this.config.tracingHelper.getTraceParent() };
              yield (_a4 = this.engine) == null ? void 0 : _a4.connect(JSON.stringify(n)), this.libraryStarted = true, Me("library started");
            } catch (n) {
              let i = this.parseInitError(n.message);
              throw typeof i == "string" ? n : new k(i.message, this.config.clientVersion, i.error_code);
            } finally {
              this.libraryStartingPromise = void 0;
            }
          });
          return this.libraryStartingPromise = this.config.tracingHelper.runInChildSpan("connect", r), this.libraryStartingPromise;
        });
      }
      stop() {
        return __async(this, null, function* () {
          if (yield this.libraryStartingPromise, yield this.executingQueryPromise, this.libraryStoppingPromise)
            return Me("library is already stopping"), this.libraryStoppingPromise;
          if (!this.libraryStarted)
            return;
          let r = () => __async(this, null, function* () {
            var _a4;
            yield new Promise((i) => setTimeout(i, 5)), Me("library stopping");
            let n = { traceparent: this.config.tracingHelper.getTraceParent() };
            yield (_a4 = this.engine) == null ? void 0 : _a4.disconnect(JSON.stringify(n)), this.libraryStarted = false, this.libraryStoppingPromise = void 0, Me("library stopped");
          });
          return this.libraryStoppingPromise = this.config.tracingHelper.runInChildSpan("disconnect", r), this.libraryStoppingPromise;
        });
      }
      version() {
        var _a4, _b2, _c2;
        return this.versionInfo = (_a4 = this.library) == null ? void 0 : _a4.version(), (_c2 = (_b2 = this.versionInfo) == null ? void 0 : _b2.version) != null ? _c2 : "unknown";
      }
      debugPanic(r) {
        var _a4;
        return (_a4 = this.library) == null ? void 0 : _a4.debugPanic(r);
      }
      request(_0, _1) {
        return __async(this, arguments, function* (r, { traceparent: n, interactiveTransaction: i }) {
          var _a4, _b2;
          Me(`sending request, this.libraryStarted: ${this.libraryStarted}`);
          let o = JSON.stringify({ traceparent: n }), s = JSON.stringify(r);
          try {
            yield this.start(), this.executingQueryPromise = (_a4 = this.engine) == null ? void 0 : _a4.query(s, o, i == null ? void 0 : i.id), this.lastQuery = s;
            let a = this.parseEngineResponse(yield this.executingQueryPromise);
            if (a.errors)
              throw a.errors.length === 1 ? this.buildQueryError(a.errors[0]) : new K(JSON.stringify(a.errors), { clientVersion: this.config.clientVersion });
            if (this.loggerRustPanic)
              throw this.loggerRustPanic;
            return { data: a, elapsed: 0 };
          } catch (a) {
            if (a instanceof k)
              throw a;
            if (a.code === "GenericFailure" && ((_b2 = a.message) == null ? void 0 : _b2.startsWith("PANIC:")))
              throw new ue(this.getErrorMessageWithLink(a.message), this.config.clientVersion);
            let l = this.parseRequestError(a.message);
            throw typeof l == "string" ? a : new K(`${l.message}
${l.backtrace}`, { clientVersion: this.config.clientVersion });
          }
        });
      }
      requestBatch(_0, _1) {
        return __async(this, arguments, function* (r, { transaction: n, traceparent: i }) {
          Me("requestBatch");
          let o = ln(r, n);
          yield this.start(), this.lastQuery = JSON.stringify(o), this.executingQueryPromise = this.engine.query(this.lastQuery, JSON.stringify({ traceparent: i }), Fa(n));
          let s = yield this.executingQueryPromise, a = this.parseEngineResponse(s);
          if (a.errors)
            throw a.errors.length === 1 ? this.buildQueryError(a.errors[0]) : new K(JSON.stringify(a.errors), { clientVersion: this.config.clientVersion });
          let { batchResult: l, errors: u } = a;
          if (Array.isArray(l))
            return l.map((c) => {
              var _a4;
              return c.errors && c.errors.length > 0 ? (_a4 = this.loggerRustPanic) != null ? _a4 : this.buildQueryError(c.errors[0]) : { data: c, elapsed: 0 };
            });
          throw u && u.length === 1 ? new Error(u[0].error) : new Error(JSON.stringify(a));
        });
      }
      buildQueryError(r) {
        return r.user_facing_error.is_panic ? new ue(this.getErrorMessageWithLink(r.user_facing_error.message), this.config.clientVersion) : zt(r, this.config.clientVersion);
      }
      metrics(r) {
        return __async(this, null, function* () {
          yield this.start();
          let n = yield this.engine.metrics(JSON.stringify(r));
          return r.format === "prometheus" ? n : this.parseEngineResponse(n);
        });
      }
    };
    function Na(e, t) {
      let r;
      try {
        r = un({ inlineDatasources: t.inlineDatasources, overrideDatasources: t.overrideDatasources, env: __spreadValues(__spreadValues({}, t.env), process.env), clientVersion: t.clientVersion });
      } catch (e2) {
      }
      e.noEngine !== true && (r == null ? void 0 : r.startsWith("prisma://")) && Lt("recommend--no-engine", "In production, we recommend using `prisma generate --no-engine` (See: `prisma generate --help`)");
      let n = Gn(t.generator);
      if ((r == null ? void 0 : r.startsWith("prisma://")) || e.noEngine)
        return new cr(t);
      if (n === "library")
        return new pr(t);
      throw "binary", new X("Invalid client engine type, please use `library` or `binary`", { clientVersion: t.clientVersion });
    }
    var Ba = S($i());
    function Va(e, t) {
      let r = ja(e), n = rd(r), i = id(n);
      i ? dn(i, t) : t.addErrorMessage(() => "Unknown error");
    }
    function ja(e) {
      return e.errors.flatMap((t) => t.kind === "Union" ? ja(t) : [t]);
    }
    function rd(e) {
      let t = /* @__PURE__ */ new Map(), r = [];
      for (let n of e) {
        if (n.kind !== "InvalidArgumentType") {
          r.push(n);
          continue;
        }
        let i = `${n.selectionPath.join(".")}:${n.argumentPath.join(".")}`, o = t.get(i);
        o ? t.set(i, __spreadProps(__spreadValues({}, n), { argument: __spreadProps(__spreadValues({}, n.argument), { typeNames: nd(o.argument.typeNames, n.argument.typeNames) }) })) : t.set(i, n);
      }
      return r.push(...t.values()), r;
    }
    function nd(e, t) {
      return [...new Set(e.concat(t))];
    }
    function id(e) {
      return si(e, (t, r) => {
        let n = $a(t), i = $a(r);
        return n !== i ? n - i : qa(t) - qa(r);
      });
    }
    function $a(e) {
      let t = 0;
      return Array.isArray(e.selectionPath) && (t += e.selectionPath.length), Array.isArray(e.argumentPath) && (t += e.argumentPath.length), t;
    }
    function qa(e) {
      switch (e.kind) {
        case "InvalidArgumentValue":
        case "ValueTooLarge":
          return 20;
        case "InvalidArgumentType":
          return 10;
        case "RequiredArgumentMissing":
          return -10;
        default:
          return 0;
      }
    }
    var Se = class {
      constructor(t, r) {
        this.name = t;
        this.value = r;
        this.isRequired = false;
      }
      makeRequired() {
        return this.isRequired = true, this;
      }
      write(t) {
        let { colors: { green: r } } = t.context;
        t.addMarginSymbol(r(this.isRequired ? "+" : "?")), t.write(r(this.name)), this.isRequired || t.write(r("?")), t.write(r(": ")), typeof this.value == "string" ? t.write(r(this.value)) : t.write(this.value);
      }
    };
    var mn = class {
      constructor() {
        this.fields = [];
      }
      addField(t, r) {
        return this.fields.push({ write(n) {
          let { green: i, dim: o } = n.context.colors;
          n.write(i(o(`${t}: ${r}`))).addMarginSymbol(i(o("+")));
        } }), this;
      }
      write(t) {
        let { colors: { green: r } } = t.context;
        t.writeLine(r("{")).withIndent(() => {
          t.writeJoined(xt, this.fields).newLine();
        }).write(r("}")).addMarginSymbol(r("+"));
      }
    };
    function dn(e, t) {
      switch (e.kind) {
        case "IncludeAndSelect":
          od(e, t);
          break;
        case "IncludeOnScalar":
          sd(e, t);
          break;
        case "EmptySelection":
          ad(e, t);
          break;
        case "UnknownSelectionField":
          ld(e, t);
          break;
        case "UnknownArgument":
          ud(e, t);
          break;
        case "UnknownInputField":
          cd(e, t);
          break;
        case "RequiredArgumentMissing":
          pd(e, t);
          break;
        case "InvalidArgumentType":
          dd(e, t);
          break;
        case "InvalidArgumentValue":
          md(e, t);
          break;
        case "ValueTooLarge":
          fd(e, t);
          break;
        case "SomeFieldsMissing":
          gd(e, t);
          break;
        case "TooManyFieldsGiven":
          yd(e, t);
          break;
        case "Union":
          Va(e, t);
          break;
        default:
          throw new Error("not implemented: " + e.kind);
      }
    }
    function od(e, t) {
      var _a4, _b2;
      let r = t.arguments.getDeepSubSelectionValue(e.selectionPath);
      r && r instanceof Q && ((_a4 = r.getField("include")) == null ? void 0 : _a4.markAsError(), (_b2 = r.getField("select")) == null ? void 0 : _b2.markAsError()), t.addErrorMessage((n) => `Please ${n.bold("either")} use ${n.green("`include`")} or ${n.green("`select`")}, but ${n.red("not both")} at the same time.`);
    }
    function sd(e, t) {
      var _a4, _b2;
      let [r, n] = fn(e.selectionPath), i = e.outputType, o = (_a4 = t.arguments.getDeepSelectionParent(r)) == null ? void 0 : _a4.value;
      if (o && ((_b2 = o.getField(n)) == null ? void 0 : _b2.markAsError(), i))
        for (let s of i.fields)
          s.isRelation && o.addSuggestion(new Se(s.name, "true"));
      t.addErrorMessage((s) => {
        let a = `Invalid scalar field ${s.red(`\`${n}\``)} for ${s.bold("include")} statement`;
        return i ? a += ` on model ${s.bold(i.name)}. ${dr(s)}` : a += ".", a += `
Note that ${s.bold("include")} statements only accept relation fields.`, a;
      });
    }
    function ad(e, t) {
      var _a4, _b2;
      let r = e.outputType, n = (_a4 = t.arguments.getDeepSelectionParent(e.selectionPath)) == null ? void 0 : _a4.value, i = (_b2 = n == null ? void 0 : n.isEmpty()) != null ? _b2 : false;
      n && (n.removeAllFields(), Qa(n, r)), t.addErrorMessage((o) => i ? `The ${o.red("`select`")} statement for type ${o.bold(r.name)} must not be empty. ${dr(o)}` : `The ${o.red("`select`")} statement for type ${o.bold(r.name)} needs ${o.bold("at least one truthy value")}.`);
    }
    function ld(e, t) {
      var _a4;
      let [r, n] = fn(e.selectionPath), i = t.arguments.getDeepSelectionParent(r);
      i && ((_a4 = i.value.getField(n)) == null ? void 0 : _a4.markAsError(), Qa(i.value, e.outputType)), t.addErrorMessage((o) => {
        let s = [`Unknown field ${o.red(`\`${n}\``)}`];
        return i && s.push(`for ${o.bold(i.kind)} statement`), s.push(`on model ${o.bold(`\`${e.outputType.name}\``)}.`), s.push(dr(o)), s.join(" ");
      });
    }
    function ud(e, t) {
      var _a4;
      let r = e.argumentPath[0], n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
      n instanceof Q && ((_a4 = n.getField(r)) == null ? void 0 : _a4.markAsError(), hd(n, e.arguments)), t.addErrorMessage((i) => Ua(i, r, e.arguments.map((o) => o.name)));
    }
    function cd(e, t) {
      var _a4;
      let [r, n] = fn(e.argumentPath), i = t.arguments.getDeepSubSelectionValue(e.selectionPath);
      if (i instanceof Q) {
        (_a4 = i.getDeepField(e.argumentPath)) == null ? void 0 : _a4.markAsError();
        let o = i.getDeepFieldValue(r);
        o instanceof Q && Ja(o, e.inputType);
      }
      t.addErrorMessage((o) => Ua(o, n, e.inputType.fields.map((s) => s.name)));
    }
    function Ua(e, t, r) {
      let n = [`Unknown argument \`${e.red(t)}\`.`], i = bd(t, r);
      return i && n.push(`Did you mean \`${e.green(i)}\`?`), r.length > 0 && n.push(dr(e)), n.join(" ");
    }
    function pd(e, t) {
      let r;
      t.addErrorMessage((l) => (r == null ? void 0 : r.value) instanceof J && r.value.text === "null" ? `Argument \`${l.green(o)}\` must not be ${l.red("null")}.` : `Argument \`${l.green(o)}\` is missing.`);
      let n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
      if (!(n instanceof Q))
        return;
      let [i, o] = fn(e.argumentPath), s = new mn(), a = n.getDeepFieldValue(i);
      if (a instanceof Q)
        if (r = a.getField(o), r && a.removeField(o), e.inputTypes.length === 1 && e.inputTypes[0].kind === "object") {
          for (let l of e.inputTypes[0].fields)
            s.addField(l.name, l.typeNames.join(" | "));
          a.addSuggestion(new Se(o, s).makeRequired());
        } else {
          let l = e.inputTypes.map(Ka).join(" | ");
          a.addSuggestion(new Se(o, l).makeRequired());
        }
    }
    function Ka(e) {
      return e.kind === "list" ? `${Ka(e.elementType)}[]` : e.name;
    }
    function dd(e, t) {
      var _a4;
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
      n instanceof Q && ((_a4 = n.getDeepFieldValue(e.argumentPath)) == null ? void 0 : _a4.markAsError()), t.addErrorMessage((i) => {
        let o = gn("or", e.argument.typeNames.map((s) => i.green(s)));
        return `Argument \`${i.bold(r)}\`: Invalid value provided. Expected ${o}, provided ${i.red(e.inferredType)}.`;
      });
    }
    function md(e, t) {
      var _a4;
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
      n instanceof Q && ((_a4 = n.getDeepFieldValue(e.argumentPath)) == null ? void 0 : _a4.markAsError()), t.addErrorMessage((i) => {
        let o = [`Invalid value for argument \`${i.bold(r)}\``];
        if (e.underlyingError && o.push(`: ${e.underlyingError}`), o.push("."), e.argument.typeNames.length > 0) {
          let s = gn("or", e.argument.typeNames.map((a) => i.green(a)));
          o.push(` Expected ${s}.`);
        }
        return o.join("");
      });
    }
    function fd(e, t) {
      var _a4;
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath), i;
      if (n instanceof Q) {
        let s = (_a4 = n.getDeepField(e.argumentPath)) == null ? void 0 : _a4.value;
        s == null ? void 0 : s.markAsError(), s instanceof J && (i = s.text);
      }
      t.addErrorMessage((o) => {
        let s = ["Unable to fit value"];
        return i && s.push(o.red(i)), s.push(`into a 64-bit signed integer for field \`${o.bold(r)}\``), s.join(" ");
      });
    }
    function gd(e, t) {
      let r = e.argumentPath[e.argumentPath.length - 1], n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
      if (n instanceof Q) {
        let i = n.getDeepFieldValue(e.argumentPath);
        i instanceof Q && Ja(i, e.inputType);
      }
      t.addErrorMessage((i) => {
        let o = [`Argument \`${i.bold(r)}\` of type ${i.bold(e.inputType.name)} needs`];
        return e.constraints.minFieldCount === 1 ? e.constraints.requiredFields ? o.push(`${i.green("at least one of")} ${gn("or", e.constraints.requiredFields.map((s) => `\`${i.bold(s)}\``))} arguments.`) : o.push(`${i.green("at least one")} argument.`) : o.push(`${i.green(`at least ${e.constraints.minFieldCount}`)} arguments.`), o.push(dr(i)), o.join(" ");
      });
    }
    function yd(e, t) {
      let r = e.argumentPath[e.argumentPath.length - 1], n = t.arguments.getDeepSubSelectionValue(e.selectionPath), i = [];
      if (n instanceof Q) {
        let o = n.getDeepFieldValue(e.argumentPath);
        o instanceof Q && (o.markAsError(), i = Object.keys(o.getFields()));
      }
      t.addErrorMessage((o) => {
        let s = [`Argument \`${o.bold(r)}\` of type ${o.bold(e.inputType.name)} needs`];
        return e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1 ? s.push(`${o.green("exactly one")} argument,`) : e.constraints.maxFieldCount == 1 ? s.push(`${o.green("at most one")} argument,`) : s.push(`${o.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`), s.push(`but you provided ${gn("and", i.map((a) => o.red(a)))}. Please choose`), e.constraints.maxFieldCount === 1 ? s.push("one.") : s.push(`${e.constraints.maxFieldCount}.`), s.join(" ");
      });
    }
    function Qa(e, t) {
      for (let r of t.fields)
        e.hasField(r.name) || e.addSuggestion(new Se(r.name, "true"));
    }
    function hd(e, t) {
      for (let r of t)
        e.hasField(r.name) || e.addSuggestion(new Se(r.name, r.typeNames.join(" | ")));
    }
    function Ja(e, t) {
      if (t.kind === "object")
        for (let r of t.fields)
          e.hasField(r.name) || e.addSuggestion(new Se(r.name, r.typeNames.join(" | ")));
    }
    function fn(e) {
      let t = [...e], r = t.pop();
      if (!r)
        throw new Error("unexpected empty path");
      return [t, r];
    }
    function dr({ green: e }) {
      return `Available options are listed in ${e("green")}.`;
    }
    function gn(e, t) {
      if (t.length === 1)
        return t[0];
      let r = [...t], n = r.pop();
      return `${r.join(", ")} ${e} ${n}`;
    }
    var xd = 3;
    function bd(e, t) {
      let r = 1 / 0, n;
      for (let i of t) {
        let o = (0, Ba.default)(e, i);
        o > xd || o < r && (r = o, n = i);
      }
      return n;
    }
    function yn({ args: e, errors: t, errorFormat: r, callsite: n, originalMethod: i, clientVersion: o }) {
      let s = Yr(e);
      for (let p of t)
        dn(p, s);
      let a = r === "pretty" ? Rs : Wr, l = s.renderAllMessages(a), u = new dt(0, { colors: a }).write(s).toString(), c = wt({ message: l, callsite: n, originalMethod: i, showColors: r === "pretty", callArguments: u });
      throw new X(c, { clientVersion: o });
    }
    var Ed = { findUnique: "findUnique", findUniqueOrThrow: "findUniqueOrThrow", findFirst: "findFirst", findFirstOrThrow: "findFirstOrThrow", findMany: "findMany", count: "aggregate", create: "createOne", createMany: "createMany", update: "updateOne", updateMany: "updateMany", upsert: "upsertOne", delete: "deleteOne", deleteMany: "deleteMany", executeRaw: "executeRaw", queryRaw: "queryRaw", aggregate: "aggregate", groupBy: "groupBy", runCommandRaw: "runCommandRaw", findRaw: "findRaw", aggregateRaw: "aggregateRaw" };
    function Ga({ modelName: e, action: t, args: r, runtimeDataModel: n, extensions: i, callsite: o, clientMethod: s, errorFormat: a, clientVersion: l }) {
      let u = new qi({ runtimeDataModel: n, modelName: e, action: t, rootArgs: r, callsite: o, extensions: i, selectionPath: [], argumentPath: [], originalMethod: s, errorFormat: a, clientVersion: l });
      return { modelName: e, action: Ed[t], query: Vi(r, u) };
    }
    function Vi(_a4 = {}, n) {
      var _b2 = _a4, { select: e, include: t } = _b2, r = __objRest(_b2, ["select", "include"]);
      return { arguments: Wa(r, n), selection: wd(e, t, n) };
    }
    function wd(e, t, r) {
      return e && t && r.throwValidationError({ kind: "IncludeAndSelect", selectionPath: r.getSelectionPath() }), e ? Td(e, r) : Pd(r, t);
    }
    function Pd(e, t) {
      let r = {};
      return e.model && !e.isRawAction() && (r.$composites = true, r.$scalars = true), t && vd(r, t, e), r;
    }
    function vd(e, t, r) {
      for (let [n, i] of Object.entries(t)) {
        let o = r.findField(n);
        o && (o == null ? void 0 : o.kind) !== "object" && r.throwValidationError({ kind: "IncludeOnScalar", selectionPath: r.getSelectionPath().concat(n), outputType: r.getOutputTypeDescription() }), i === true ? e[n] = true : typeof i == "object" && (e[n] = Vi(i, r.nestSelection(n)));
      }
    }
    function Td(e, t) {
      let r = {}, n = t.getComputedFields(), i = la(e, n);
      for (let [o, s] of Object.entries(i)) {
        let a = t.findField(o);
        (n == null ? void 0 : n[o]) && !a || (s === true ? r[o] = true : typeof s == "object" && (r[o] = Vi(s, t.nestSelection(o))));
      }
      return r;
    }
    function Ha(e, t) {
      if (e === null)
        return null;
      if (typeof e == "string" || typeof e == "number" || typeof e == "boolean")
        return e;
      if (typeof e == "bigint")
        return { $type: "BigInt", value: String(e) };
      if (mt(e)) {
        if (qr(e))
          return { $type: "DateTime", value: e.toISOString() };
        t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: ["Date"] }, underlyingError: "Provided Date object is invalid" });
      }
      if (ht(e))
        return { $type: "FieldRef", value: { _ref: e.name, _container: e.modelName } };
      if (Array.isArray(e))
        return Cd(e, t);
      if (ArrayBuffer.isView(e))
        return { $type: "Bytes", value: Buffer.from(e).toString("base64") };
      if (Ad(e))
        return e.values;
      if (yt(e))
        return { $type: "Decimal", value: e.toFixed() };
      if (e instanceof Ae) {
        if (e !== $r.instances[e._getName()])
          throw new Error("Invalid ObjectEnumValue");
        return { $type: "Enum", value: e._getName() };
      }
      if (Rd(e))
        return e.toJSON();
      if (typeof e == "object")
        return Wa(e, t);
      t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: [] }, underlyingError: `We could not serialize ${Object.prototype.toString.call(e)} value. Serialize the object to JSON or implement a ".toJSON()" method on it` });
    }
    function Wa(e, t) {
      if (e.$type)
        return { $type: "Json", value: JSON.stringify(e) };
      let r = {};
      for (let n in e) {
        let i = e[n];
        i !== void 0 && (r[n] = Ha(i, t.nestArgument(n)));
      }
      return r;
    }
    function Cd(e, t) {
      let r = [];
      for (let n = 0; n < e.length; n++) {
        let i = t.nestArgument(String(n)), o = e[n];
        o === void 0 && t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: i.getSelectionPath(), argumentPath: i.getArgumentPath(), argument: { name: `${t.getArgumentName()}[${n}]`, typeNames: [] }, underlyingError: "Can not use `undefined` value within array. Use `null` or filter out `undefined` values" }), r.push(Ha(o, i));
      }
      return r;
    }
    function Ad(e) {
      return typeof e == "object" && e !== null && e.__prismaRawParameters__ === true;
    }
    function Rd(e) {
      return typeof e == "object" && e !== null && typeof e.toJSON == "function";
    }
    var qi = class e {
      constructor(t) {
        this.params = t;
        this.params.modelName && (this.model = this.params.runtimeDataModel.models[this.params.modelName]);
      }
      throwValidationError(t) {
        var _a4;
        yn({ errors: [t], originalMethod: this.params.originalMethod, args: (_a4 = this.params.rootArgs) != null ? _a4 : {}, callsite: this.params.callsite, errorFormat: this.params.errorFormat, clientVersion: this.params.clientVersion });
      }
      getSelectionPath() {
        return this.params.selectionPath;
      }
      getArgumentPath() {
        return this.params.argumentPath;
      }
      getArgumentName() {
        return this.params.argumentPath[this.params.argumentPath.length - 1];
      }
      getOutputTypeDescription() {
        if (!(!this.params.modelName || !this.model))
          return { name: this.params.modelName, fields: this.model.fields.map((t) => ({ name: t.name, typeName: "boolean", isRelation: t.kind === "object" })) };
      }
      isRawAction() {
        return ["executeRaw", "queryRaw", "runCommandRaw", "findRaw", "aggregateRaw"].includes(this.params.action);
      }
      getComputedFields() {
        if (this.params.modelName)
          return this.params.extensions.getAllComputedFields(this.params.modelName);
      }
      findField(t) {
        var _a4;
        return (_a4 = this.model) == null ? void 0 : _a4.fields.find((r) => r.name === t);
      }
      nestSelection(t) {
        let r = this.findField(t), n = (r == null ? void 0 : r.kind) === "object" ? r.type : void 0;
        return new e(__spreadProps(__spreadValues({}, this.params), { modelName: n, selectionPath: this.params.selectionPath.concat(t) }));
      }
      nestArgument(t) {
        return new e(__spreadProps(__spreadValues({}, this.params), { argumentPath: this.params.argumentPath.concat(t) }));
      }
    };
    var za = (e) => ({ command: e });
    var Ya = (e) => e.strings.reduce((t, r, n) => `${t}@P${n}${r}`);
    function mr(e) {
      try {
        return Za(e, "fast");
      } catch (e2) {
        return Za(e, "slow");
      }
    }
    function Za(e, t) {
      return JSON.stringify(e.map((r) => Md(r, t)));
    }
    function Md(e, t) {
      return typeof e == "bigint" ? { prisma__type: "bigint", prisma__value: e.toString() } : mt(e) ? { prisma__type: "date", prisma__value: e.toJSON() } : we.isDecimal(e) ? { prisma__type: "decimal", prisma__value: e.toJSON() } : Buffer.isBuffer(e) ? { prisma__type: "bytes", prisma__value: e.toString("base64") } : Sd(e) || ArrayBuffer.isView(e) ? { prisma__type: "bytes", prisma__value: Buffer.from(e).toString("base64") } : typeof e == "object" && t === "slow" ? el(e) : e;
    }
    function Sd(e) {
      return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer ? true : typeof e == "object" && e !== null ? e[Symbol.toStringTag] === "ArrayBuffer" || e[Symbol.toStringTag] === "SharedArrayBuffer" : false;
    }
    function el(e) {
      if (typeof e != "object" || e === null)
        return e;
      if (typeof e.toJSON == "function")
        return e.toJSON();
      if (Array.isArray(e))
        return e.map(Xa);
      let t = {};
      for (let r of Object.keys(e))
        t[r] = Xa(e[r]);
      return t;
    }
    function Xa(e) {
      return typeof e == "bigint" ? e.toString() : el(e);
    }
    var Id = /^(\s*alter\s)/i;
    var tl = D("prisma:client");
    function ji(e, t, r, n) {
      if (!(e !== "postgresql" && e !== "cockroachdb") && r.length > 0 && Id.exec(t))
        throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
    }
    var Bi = (e, t) => (r) => {
      let n = "", i;
      if (Array.isArray(r)) {
        let [o, ...s] = r;
        n = o, i = { values: mr(s || []), __prismaRawParameters__: true };
      } else
        switch (e) {
          case "sqlite":
          case "mysql": {
            n = r.sql, i = { values: mr(r.values), __prismaRawParameters__: true };
            break;
          }
          case "cockroachdb":
          case "postgresql": {
            n = r.text, i = { values: mr(r.values), __prismaRawParameters__: true };
            break;
          }
          case "sqlserver": {
            n = Ya(r), i = { values: mr(r.values), __prismaRawParameters__: true };
            break;
          }
          default:
            throw new Error(`The ${e} provider does not support ${t}`);
        }
      return (i == null ? void 0 : i.values) ? tl(`prisma.${t}(${n}, ${i.values})`) : tl(`prisma.${t}(${n})`), { query: n, parameters: i };
    };
    var rl = { requestArgsToMiddlewareArgs(e) {
      return [e.strings, ...e.values];
    }, middlewareArgsToRequestArgs(e) {
      let [t, ...r] = e;
      return new oe(t, r);
    } };
    var nl = { requestArgsToMiddlewareArgs(e) {
      return [e];
    }, middlewareArgsToRequestArgs(e) {
      return e[0];
    } };
    function Ui(e) {
      return function(r) {
        let n, i = (o = e) => {
          try {
            return o === void 0 || (o == null ? void 0 : o.kind) === "itx" ? n != null ? n : n = il(r(o)) : il(r(o));
          } catch (s) {
            return Promise.reject(s);
          }
        };
        return { then(o, s) {
          return i().then(o, s);
        }, catch(o) {
          return i().catch(o);
        }, finally(o) {
          return i().finally(o);
        }, requestTransaction(o) {
          let s = i(o);
          return s.requestTransaction ? s.requestTransaction(o) : s;
        }, [Symbol.toStringTag]: "PrismaPromise" };
      };
    }
    function il(e) {
      return typeof e.then == "function" ? e : Promise.resolve(e);
    }
    var ol = { isEnabled() {
      return false;
    }, getTraceParent() {
      return "00-10-10-00";
    }, createEngineSpan() {
      return __async(this, null, function* () {
      });
    }, getActiveContext() {
    }, runInChildSpan(e, t) {
      return t();
    } };
    var Ki = class {
      isEnabled() {
        return this.getGlobalTracingHelper().isEnabled();
      }
      getTraceParent(t) {
        return this.getGlobalTracingHelper().getTraceParent(t);
      }
      createEngineSpan(t) {
        return this.getGlobalTracingHelper().createEngineSpan(t);
      }
      getActiveContext() {
        return this.getGlobalTracingHelper().getActiveContext();
      }
      runInChildSpan(t, r) {
        return this.getGlobalTracingHelper().runInChildSpan(t, r);
      }
      getGlobalTracingHelper() {
        var _a4, _b2;
        return (_b2 = (_a4 = globalThis.PRISMA_INSTRUMENTATION) == null ? void 0 : _a4.helper) != null ? _b2 : ol;
      }
    };
    function sl(e) {
      return e.includes("tracing") ? new Ki() : ol;
    }
    function al(e, t = () => {
    }) {
      let r, n = new Promise((i) => r = i);
      return { then(i) {
        return --e === 0 && r(t()), i == null ? void 0 : i(n);
      } };
    }
    function ll(e) {
      return typeof e == "string" ? e : e.reduce((t, r) => {
        let n = typeof r == "string" ? r : r.level;
        return n === "query" ? t : t && (r === "info" || t === "info") ? "info" : n;
      }, void 0);
    }
    var Fd = ["$connect", "$disconnect", "$on", "$transaction", "$use", "$extends"];
    var ul = Fd;
    var hn = class {
      constructor() {
        this._middlewares = [];
      }
      use(t) {
        this._middlewares.push(t);
      }
      get(t) {
        return this._middlewares[t];
      }
      has(t) {
        return !!this._middlewares[t];
      }
      length() {
        return this._middlewares.length;
      }
    };
    var pl = S(ni());
    function xn(e) {
      return typeof e.batchRequestIdx == "number";
    }
    function bn(e) {
      return e === null ? e : Array.isArray(e) ? e.map(bn) : typeof e == "object" ? kd(e) ? Od(e) : ct(e, bn) : e;
    }
    function kd(e) {
      return e !== null && typeof e == "object" && typeof e.$type == "string";
    }
    function Od({ $type: e, value: t }) {
      switch (e) {
        case "BigInt":
          return BigInt(t);
        case "Bytes":
          return Buffer.from(t, "base64");
        case "DateTime":
          return new Date(t);
        case "Decimal":
          return new we(t);
        case "Json":
          return JSON.parse(t);
        default:
          Ge(t, "Unknown tagged value");
      }
    }
    function cl(e) {
      if (e.action !== "findUnique" && e.action !== "findUniqueOrThrow")
        return;
      let t = [];
      return e.modelName && t.push(e.modelName), e.query.arguments && t.push(Qi(e.query.arguments)), t.push(Qi(e.query.selection)), t.join("");
    }
    function Qi(e) {
      return `(${Object.keys(e).sort().map((r) => {
        let n = e[r];
        return typeof n == "object" && n !== null ? `(${r} ${Qi(n)})` : r;
      }).join(" ")})`;
    }
    var Dd = { aggregate: false, aggregateRaw: false, createMany: true, createOne: true, deleteMany: true, deleteOne: true, executeRaw: true, findFirst: false, findFirstOrThrow: false, findMany: false, findRaw: false, findUnique: false, findUniqueOrThrow: false, groupBy: false, queryRaw: false, runCommandRaw: true, updateMany: true, updateOne: true, upsertOne: true };
    function Ji(e) {
      return Dd[e];
    }
    var En = class {
      constructor(t) {
        this.options = t;
        this.tickActive = false;
        this.batches = {};
      }
      request(t) {
        let r = this.options.batchBy(t);
        return r ? (this.batches[r] || (this.batches[r] = [], this.tickActive || (this.tickActive = true, process.nextTick(() => {
          this.dispatchBatches(), this.tickActive = false;
        }))), new Promise((n, i) => {
          this.batches[r].push({ request: t, resolve: n, reject: i });
        })) : this.options.singleLoader(t);
      }
      dispatchBatches() {
        for (let t in this.batches) {
          let r = this.batches[t];
          delete this.batches[t], r.length === 1 ? this.options.singleLoader(r[0].request).then((n) => {
            n instanceof Error ? r[0].reject(n) : r[0].resolve(n);
          }).catch((n) => {
            r[0].reject(n);
          }) : (r.sort((n, i) => this.options.batchOrder(n.request, i.request)), this.options.batchLoader(r.map((n) => n.request)).then((n) => {
            if (n instanceof Error)
              for (let i = 0; i < r.length; i++)
                r[i].reject(n);
            else
              for (let i = 0; i < r.length; i++) {
                let o = n[i];
                o instanceof Error ? r[i].reject(o) : r[i].resolve(o);
              }
          }).catch((n) => {
            for (let i = 0; i < r.length; i++)
              r[i].reject(n);
          }));
        }
      }
      get [Symbol.toStringTag]() {
        return "DataLoader";
      }
    };
    var _d = D("prisma:client:request_handler");
    var wn = class {
      constructor(t, r) {
        this.logEmitter = r, this.client = t, this.dataloader = new En({ batchLoader: na((_0) => __async(this, [_0], function* ({ requests: n, customDataProxyFetch: i }) {
          let { transaction: o, otelParentCtx: s } = n[0], a = n.map((p) => p.protocolQuery), l = this.client._tracingHelper.getTraceParent(s), u = n.some((p) => Ji(p.protocolQuery.action));
          return (yield this.client._engine.requestBatch(a, { traceparent: l, transaction: Nd(o), containsWrite: u, customDataProxyFetch: i })).map((p, d) => {
            if (p instanceof Error)
              return p;
            try {
              return this.mapQueryEngineResult(n[d], p);
            } catch (f) {
              return f;
            }
          });
        })), singleLoader: (n) => __async(this, null, function* () {
          var _a4;
          let i = ((_a4 = n.transaction) == null ? void 0 : _a4.kind) === "itx" ? dl(n.transaction) : void 0, o = yield this.client._engine.request(n.protocolQuery, { traceparent: this.client._tracingHelper.getTraceParent(), interactiveTransaction: i, isWrite: Ji(n.protocolQuery.action), customDataProxyFetch: n.customDataProxyFetch });
          return this.mapQueryEngineResult(n, o);
        }), batchBy: (n) => {
          var _a4;
          return ((_a4 = n.transaction) == null ? void 0 : _a4.id) ? `transaction-${n.transaction.id}` : cl(n.protocolQuery);
        }, batchOrder(n, i) {
          var _a4, _b2;
          return ((_a4 = n.transaction) == null ? void 0 : _a4.kind) === "batch" && ((_b2 = i.transaction) == null ? void 0 : _b2.kind) === "batch" ? n.transaction.index - i.transaction.index : 0;
        } });
      }
      request(t) {
        return __async(this, null, function* () {
          try {
            return yield this.dataloader.request(t);
          } catch (r) {
            let { clientMethod: n, callsite: i, transaction: o, args: s } = t;
            this.handleAndLogRequestError({ error: r, clientMethod: n, callsite: i, transaction: o, args: s });
          }
        });
      }
      mapQueryEngineResult({ dataPath: t, unpacker: r }, n) {
        let i = n == null ? void 0 : n.data, o = n == null ? void 0 : n.elapsed, s = this.unpack(i, t, r);
        return process.env.PRISMA_CLIENT_GET_TIME ? { data: s, elapsed: o } : s;
      }
      handleAndLogRequestError(t) {
        try {
          this.handleRequestError(t);
        } catch (r) {
          throw this.logEmitter && this.logEmitter.emit("error", { message: r.message, target: t.clientMethod, timestamp: /* @__PURE__ */ new Date() }), r;
        }
      }
      handleRequestError({ error: t, clientMethod: r, callsite: n, transaction: i, args: o }) {
        if (_d(t), Ld(t, i) || t instanceof Ce)
          throw t;
        if (t instanceof U && $d(t)) {
          let a = ml(t.meta);
          yn({ args: o, errors: [a], callsite: n, errorFormat: this.client._errorFormat, originalMethod: r, clientVersion: this.client._clientVersion });
        }
        let s = t.message;
        throw n && (s = wt({ callsite: n, originalMethod: r, isPanic: t.isPanic, showColors: this.client._errorFormat === "pretty", message: s })), s = this.sanitizeMessage(s), t.code ? new U(s, { code: t.code, clientVersion: this.client._clientVersion, meta: t.meta, batchRequestIdx: t.batchRequestIdx }) : t.isPanic ? new ue(s, this.client._clientVersion) : t instanceof K ? new K(s, { clientVersion: this.client._clientVersion, batchRequestIdx: t.batchRequestIdx }) : t instanceof k ? new k(s, this.client._clientVersion) : t instanceof ue ? new ue(s, this.client._clientVersion) : (t.clientVersion = this.client._clientVersion, t);
      }
      sanitizeMessage(t) {
        return this.client._errorFormat && this.client._errorFormat !== "pretty" ? (0, pl.default)(t) : t;
      }
      unpack(t, r, n) {
        if (!t || (t.data && (t = t.data), !t))
          return t;
        let i = Object.values(t)[0], o = r.filter((a) => a !== "select" && a !== "include"), s = bn(wi(i, o));
        return n ? n(s) : s;
      }
      get [Symbol.toStringTag]() {
        return "RequestHandler";
      }
    };
    function Nd(e) {
      if (e) {
        if (e.kind === "batch")
          return { kind: "batch", options: { isolationLevel: e.isolationLevel } };
        if (e.kind === "itx")
          return { kind: "itx", options: dl(e) };
        Ge(e, "Unknown transaction kind");
      }
    }
    function dl(e) {
      return { id: e.id, payload: e.payload };
    }
    function Ld(e, t) {
      return xn(e) && (t == null ? void 0 : t.kind) === "batch" && e.batchRequestIdx !== t.index;
    }
    function $d(e) {
      return e.code === "P2009" || e.code === "P2012";
    }
    function ml(e) {
      if (e.kind === "Union")
        return { kind: "Union", errors: e.errors.map(ml) };
      if (Array.isArray(e.selectionPath)) {
        let [, ...t] = e.selectionPath;
        return __spreadProps(__spreadValues({}, e), { selectionPath: t });
      }
      return e;
    }
    var fl = "5.3.1";
    var gl = fl;
    function yl(e) {
      return e.map((t) => {
        let r = {};
        for (let n of Object.keys(t))
          r[n] = hl(t[n]);
        return r;
      });
    }
    function hl({ prisma__type: e, prisma__value: t }) {
      switch (e) {
        case "bigint":
          return BigInt(t);
        case "bytes":
          return Buffer.from(t, "base64");
        case "decimal":
          return new we(t);
        case "datetime":
        case "date":
          return new Date(t);
        case "time":
          return /* @__PURE__ */ new Date(`1970-01-01T${t}Z`);
        case "array":
          return t.map(hl);
        default:
          return t;
      }
    }
    var wl = S($i());
    var V = class extends Error {
      constructor(t) {
        super(t + `
Read more at https://pris.ly/d/client-constructor`), this.name = "PrismaClientConstructorValidationError";
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientConstructorValidationError";
      }
    };
    E(V, "PrismaClientConstructorValidationError");
    var xl = ["datasources", "datasourceUrl", "errorFormat", "log", "__internal"];
    var bl = ["pretty", "colorless", "minimal"];
    var El = ["info", "query", "warn", "error"];
    var Vd = { datasources: (e, t) => {
      if (e) {
        if (typeof e != "object" || Array.isArray(e))
          throw new V(`Invalid value ${JSON.stringify(e)} for "datasources" provided to PrismaClient constructor`);
        for (let [r, n] of Object.entries(e)) {
          if (!t.includes(r)) {
            let i = At(r, t) || ` Available datasources: ${t.join(", ")}`;
            throw new V(`Unknown datasource ${r} provided to PrismaClient constructor.${i}`);
          }
          if (typeof n != "object" || Array.isArray(n))
            throw new V(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
          if (n && typeof n == "object")
            for (let [i, o] of Object.entries(n)) {
              if (i !== "url")
                throw new V(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
              if (typeof o != "string")
                throw new V(`Invalid value ${JSON.stringify(o)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
            }
        }
      }
    }, datasourceUrl: (e) => {
      if (typeof e < "u" && typeof e != "string")
        throw new V(`Invalid value ${JSON.stringify(e)} for "datasourceUrl" provided to PrismaClient constructor.
Expected string or undefined.`);
    }, errorFormat: (e) => {
      if (e) {
        if (typeof e != "string")
          throw new V(`Invalid value ${JSON.stringify(e)} for "errorFormat" provided to PrismaClient constructor.`);
        if (!bl.includes(e)) {
          let t = At(e, bl);
          throw new V(`Invalid errorFormat ${e} provided to PrismaClient constructor.${t}`);
        }
      }
    }, log: (e) => {
      if (!e)
        return;
      if (!Array.isArray(e))
        throw new V(`Invalid value ${JSON.stringify(e)} for "log" provided to PrismaClient constructor.`);
      function t(r) {
        if (typeof r == "string" && !El.includes(r)) {
          let n = At(r, El);
          throw new V(`Invalid log level "${r}" provided to PrismaClient constructor.${n}`);
        }
      }
      for (let r of e) {
        t(r);
        let n = { level: t, emit: (i) => {
          let o = ["stdout", "event"];
          if (!o.includes(i)) {
            let s = At(i, o);
            throw new V(`Invalid value ${JSON.stringify(i)} for "emit" in logLevel provided to PrismaClient constructor.${s}`);
          }
        } };
        if (r && typeof r == "object")
          for (let [i, o] of Object.entries(r))
            if (n[i])
              n[i](o);
            else
              throw new V(`Invalid property ${i} for "log" provided to PrismaClient constructor`);
      }
    }, __internal: (e) => {
      if (!e)
        return;
      let t = ["debug", "hooks", "engine", "measurePerformance"];
      if (typeof e != "object")
        throw new V(`Invalid value ${JSON.stringify(e)} for "__internal" to PrismaClient constructor`);
      for (let [r] of Object.entries(e))
        if (!t.includes(r)) {
          let n = At(r, t);
          throw new V(`Invalid property ${JSON.stringify(r)} for "__internal" provided to PrismaClient constructor.${n}`);
        }
    } };
    function Pl(e, t) {
      for (let [r, n] of Object.entries(e)) {
        if (!xl.includes(r)) {
          let i = At(r, xl);
          throw new V(`Unknown property ${r} provided to PrismaClient constructor.${i}`);
        }
        Vd[r](n, t);
      }
      if (e.datasourceUrl && e.datasources)
        throw new V('Can not use "datasourceUrl" and "datasources" options at the same time. Pick one of them');
    }
    function At(e, t) {
      if (t.length === 0 || typeof e != "string")
        return "";
      let r = jd(e, t);
      return r ? ` Did you mean "${r}"?` : "";
    }
    function jd(e, t) {
      if (t.length === 0)
        return null;
      let r = t.map((i) => ({ value: i, distance: (0, wl.default)(e, i) }));
      r.sort((i, o) => i.distance < o.distance ? -1 : 1);
      let n = r[0];
      return n.distance < 3 ? n.value : null;
    }
    function vl(e) {
      return e.length === 0 ? Promise.resolve([]) : new Promise((t, r) => {
        let n = new Array(e.length), i = null, o = false, s = 0, a = () => {
          o || (s++, s === e.length && (o = true, i ? r(i) : t(n)));
        }, l = (u) => {
          o || (o = true, r(u));
        };
        for (let u = 0; u < e.length; u++)
          e[u].then((c) => {
            n[u] = c, a();
          }, (c) => {
            if (!xn(c)) {
              l(c);
              return;
            }
            c.batchRequestIdx === u ? l(c) : (i || (i = c), a());
          });
      });
    }
    var Be = D("prisma:client");
    typeof globalThis == "object" && (globalThis.NODE_CLIENT = true);
    var Bd = { requestArgsToMiddlewareArgs: (e) => e, middlewareArgsToRequestArgs: (e) => e };
    var Ud = Symbol.for("prisma.client.transaction.id");
    var Kd = { id: 0, nextId() {
      return ++this.id;
    } };
    function Ml(e) {
      class t {
        constructor(n) {
          var _a4, _b2, _c2, _d2, _e2, _f, _g, _h;
          this._middlewares = new hn();
          this._createPrismaPromise = Ui();
          this.$extends = Ws;
          pa(e), n && Pl(n, e.datasourceNames);
          let i = new Al.EventEmitter().on("error", () => {
          });
          this._extensions = on.empty(), this._previewFeatures = (_b2 = (_a4 = e.generator) == null ? void 0 : _a4.previewFeatures) != null ? _b2 : [], this._clientVersion = (_c2 = e.clientVersion) != null ? _c2 : gl, this._activeProvider = e.activeProvider, this._tracingHelper = sl(this._previewFeatures);
          let o = { rootEnvPath: e.relativeEnvPaths.rootEnvPath && fr.default.resolve(e.dirname, e.relativeEnvPaths.rootEnvPath), schemaEnvPath: e.relativeEnvPaths.schemaEnvPath && fr.default.resolve(e.dirname, e.relativeEnvPaths.schemaEnvPath) }, s = Ot(o, { conflictCheck: "none" }) || ((_d2 = e.injectableEdgeEnv) == null ? void 0 : _d2.call(e));
          try {
            let a = n != null ? n : {}, l = (_e2 = a.__internal) != null ? _e2 : {}, u = l.debug === true;
            u && D.enable("prisma:client");
            let c = fr.default.resolve(e.dirname, e.relativePath);
            Rl.default.existsSync(c) || (c = e.dirname), Be("dirname", e.dirname), Be("relativePath", e.relativePath), Be("cwd", c);
            let p = l.engine || {};
            if (a.errorFormat ? this._errorFormat = a.errorFormat : process.env.NODE_ENV === "production" ? this._errorFormat = "minimal" : process.env.NO_COLOR ? this._errorFormat = "colorless" : this._errorFormat = "colorless", this._runtimeDataModel = e.runtimeDataModel, this._engineConfig = { cwd: c, dirname: e.dirname, enableDebugLogs: u, allowTriggerPanic: p.allowTriggerPanic, datamodelPath: fr.default.join(e.dirname, (_f = e.filename) != null ? _f : "schema.prisma"), prismaPath: (_g = p.binaryPath) != null ? _g : void 0, engineEndpoint: p.endpoint, generator: e.generator, showColors: this._errorFormat === "pretty", logLevel: a.log && ll(a.log), logQueries: a.log && !!(typeof a.log == "string" ? a.log === "query" : a.log.find((d) => typeof d == "string" ? d === "query" : d.level === "query")), env: (_h = s == null ? void 0 : s.parsed) != null ? _h : {}, flags: [], clientVersion: e.clientVersion, engineVersion: e.engineVersion, previewFeatures: this._previewFeatures, activeProvider: e.activeProvider, inlineSchema: e.inlineSchema, overrideDatasources: da(a, e.datasourceNames), inlineDatasources: e.inlineDatasources, inlineSchemaHash: e.inlineSchemaHash, tracingHelper: this._tracingHelper, logEmitter: i, isBundled: e.isBundled }, Be("clientVersion", e.clientVersion), this._engine = Na(e, this._engineConfig), this._requestHandler = new wn(this, i), a.log)
              for (let d of a.log) {
                let f = typeof d == "string" ? d : d.emit === "stdout" ? d.level : null;
                f && this.$on(f, (y) => {
                  var _a5;
                  Nt.log(`${(_a5 = Nt.tags[f]) != null ? _a5 : ""}`, y.message || y.query);
                });
              }
            this._metrics = new pt(this._engine);
          } catch (a) {
            throw a.clientVersion = this._clientVersion, a;
          }
          return this._appliedParent = Ht(this);
        }
        get [Symbol.toStringTag]() {
          return "PrismaClient";
        }
        $use(n) {
          this._middlewares.use(n);
        }
        $on(n, i) {
          n === "beforeExit" ? this._engine.on("beforeExit", i) : this._engine.on(n, (o) => {
            var _a4, _b2, _c2, _d2;
            let s = o.fields;
            return i(n === "query" ? { timestamp: o.timestamp, query: (_a4 = s == null ? void 0 : s.query) != null ? _a4 : o.query, params: (_b2 = s == null ? void 0 : s.params) != null ? _b2 : o.params, duration: (_c2 = s == null ? void 0 : s.duration_ms) != null ? _c2 : o.duration, target: o.target } : { timestamp: o.timestamp, message: (_d2 = s == null ? void 0 : s.message) != null ? _d2 : o.message, target: o.target });
          });
        }
        $connect() {
          try {
            return this._engine.start();
          } catch (n) {
            throw n.clientVersion = this._clientVersion, n;
          }
        }
        $disconnect() {
          return __async(this, null, function* () {
            try {
              yield this._engine.stop();
            } catch (n) {
              throw n.clientVersion = this._clientVersion, n;
            } finally {
              fo();
            }
          });
        }
        $executeRawInternal(n, i, o, s) {
          return this._request({ action: "executeRaw", args: o, transaction: n, clientMethod: i, argsMapper: Bi(this._activeProvider, i), callsite: qe(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
        }
        $executeRaw(n, ...i) {
          return this._createPrismaPromise((o) => {
            if (n.raw !== void 0 || n.sql !== void 0) {
              let [s, a] = Tl(n, i);
              return ji(this._activeProvider, s.text, s.values, Array.isArray(n) ? "prisma.$executeRaw`<SQL>`" : "prisma.$executeRaw(sql`<SQL>`)"), this.$executeRawInternal(o, "$executeRaw", s, a);
            }
            throw new X("`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n", { clientVersion: this._clientVersion });
          });
        }
        $executeRawUnsafe(n, ...i) {
          return this._createPrismaPromise((o) => (ji(this._activeProvider, n, i, "prisma.$executeRawUnsafe(<SQL>, [...values])"), this.$executeRawInternal(o, "$executeRawUnsafe", [n, ...i])));
        }
        $runCommandRaw(n) {
          if (e.activeProvider !== "mongodb")
            throw new X(`The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`, { clientVersion: this._clientVersion });
          return this._createPrismaPromise((i) => this._request({ args: n, clientMethod: "$runCommandRaw", dataPath: [], action: "runCommandRaw", argsMapper: za, callsite: qe(this._errorFormat), transaction: i }));
        }
        $queryRawInternal(n, i, o, s) {
          return __async(this, null, function* () {
            return this._request({ action: "queryRaw", args: o, transaction: n, clientMethod: i, argsMapper: Bi(this._activeProvider, i), callsite: qe(this._errorFormat), dataPath: [], middlewareArgsMapper: s }).then(yl);
          });
        }
        $queryRaw(n, ...i) {
          return this._createPrismaPromise((o) => {
            if (n.raw !== void 0 || n.sql !== void 0)
              return this.$queryRawInternal(o, "$queryRaw", ...Tl(n, i));
            throw new X("`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n", { clientVersion: this._clientVersion });
          });
        }
        $queryRawUnsafe(n, ...i) {
          return this._createPrismaPromise((o) => this.$queryRawInternal(o, "$queryRawUnsafe", [n, ...i]));
        }
        _transactionWithArray({ promises: n, options: i }) {
          let o = Kd.nextId(), s = al(n.length), a = n.map((l, u) => {
            var _a4, _b2;
            if ((l == null ? void 0 : l[Symbol.toStringTag]) !== "PrismaPromise")
              throw new Error("All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.");
            let c = i == null ? void 0 : i.isolationLevel, p = { kind: "batch", id: o, index: u, isolationLevel: c, lock: s };
            return (_b2 = (_a4 = l.requestTransaction) == null ? void 0 : _a4.call(l, p)) != null ? _b2 : l;
          });
          return vl(a);
        }
        _transactionWithCallback(_0) {
          return __async(this, arguments, function* ({ callback: n, options: i }) {
            let o = { traceparent: this._tracingHelper.getTraceParent() }, s = yield this._engine.transaction("start", o, i), a;
            try {
              let l = __spreadValues({ kind: "itx" }, s);
              a = yield n(this._createItxClient(l)), yield this._engine.transaction("commit", o, s);
            } catch (l) {
              throw yield this._engine.transaction("rollback", o, s).catch(() => {
              }), l;
            }
            return a;
          });
        }
        _createItxClient(n) {
          return Ht(be(tn(this), [re("_appliedParent", () => this._appliedParent._createItxClient(n)), re("_createPrismaPromise", () => Ui(n)), re(Ud, () => n.id), Vt(ul)]));
        }
        $transaction(n, i) {
          let o;
          typeof n == "function" ? o = () => this._transactionWithCallback({ callback: n, options: i }) : o = () => this._transactionWithArray({ promises: n, options: i });
          let s = { name: "transaction", attributes: { method: "$transaction" } };
          return this._tracingHelper.runInChildSpan(s, o);
        }
        _request(n) {
          var _a4;
          n.otelParentCtx = this._tracingHelper.getActiveContext();
          let i = (_a4 = n.middlewareArgsMapper) != null ? _a4 : Bd, o = { args: i.requestArgsToMiddlewareArgs(n.args), dataPath: n.dataPath, runInTransaction: !!n.transaction, action: n.action, model: n.model }, s = { middleware: { name: "middleware", middleware: true, attributes: { method: "$use" }, active: false }, operation: { name: "operation", attributes: { method: o.action, model: o.model, name: o.model ? `${o.model}.${o.action}` : o.action } } }, a = -1, l = (u) => __async(this, null, function* () {
            let c = this._middlewares.get(++a);
            if (c)
              return this._tracingHelper.runInChildSpan(s.middleware, (P) => c(u, (T) => (P == null ? void 0 : P.end(), l(T))));
            let _a5 = u, { runInTransaction: p, args: d } = _a5, f = __objRest(_a5, ["runInTransaction", "args"]), y = __spreadValues(__spreadValues({}, n), f);
            d && (y.args = i.middlewareArgsToRequestArgs(d)), n.transaction !== void 0 && p === false && delete y.transaction;
            let g = yield ra(this, y);
            return y.model ? Zs({ result: g, modelName: y.model, args: y.args, extensions: this._extensions, runtimeDataModel: this._runtimeDataModel }) : g;
          });
          return this._tracingHelper.runInChildSpan(s.operation, () => new Cl.AsyncResource("prisma-client-request").runInAsyncScope(() => l(o)));
        }
        _executeRequest(_0) {
          return __async(this, arguments, function* ({ args: n, clientMethod: i, dataPath: o, callsite: s, action: a, model: l, argsMapper: u, transaction: c, unpacker: p, otelParentCtx: d, customDataProxyFetch: f }) {
            try {
              n = u ? u(n) : n;
              let y = { name: "serialize" }, g = this._tracingHelper.runInChildSpan(y, () => Ga({ modelName: l, runtimeDataModel: this._runtimeDataModel, action: a, args: n, clientMethod: i, callsite: s, extensions: this._extensions, errorFormat: this._errorFormat, clientVersion: this._clientVersion }));
              return D.enabled("prisma:client") && (Be("Prisma Client call:"), Be(`prisma.${i}(${Fs(n)})`), Be("Generated request:"), Be(JSON.stringify(g, null, 2) + `
`)), (c == null ? void 0 : c.kind) === "batch" && (yield c.lock), this._requestHandler.request({ protocolQuery: g, modelName: l, action: a, clientMethod: i, dataPath: o, callsite: s, args: n, extensions: this._extensions, transaction: c, unpacker: p, otelParentCtx: d, otelChildCtx: this._tracingHelper.getActiveContext(), customDataProxyFetch: f });
            } catch (y) {
              throw y.clientVersion = this._clientVersion, y;
            }
          });
        }
        get $metrics() {
          if (!this._hasPreviewFlag("metrics"))
            throw new X("`metrics` preview feature must be enabled in order to access metrics API", { clientVersion: this._clientVersion });
          return this._metrics;
        }
        _hasPreviewFlag(n) {
          var _a4;
          return !!((_a4 = this._engineConfig.previewFeatures) == null ? void 0 : _a4.includes(n));
        }
      }
      return t;
    }
    function Tl(e, t) {
      return Qd(e) ? [new oe(e, t), rl] : [e, nl];
    }
    function Qd(e) {
      return Array.isArray(e) && Array.isArray(e.raw);
    }
    var Jd = /* @__PURE__ */ new Set(["toJSON", "$$typeof", "asymmetricMatch", Symbol.iterator, Symbol.toStringTag, Symbol.isConcatSpreadable, Symbol.toPrimitive]);
    function Sl(e) {
      return new Proxy(e, { get(t, r) {
        if (r in t)
          return t[r];
        if (!Jd.has(r))
          throw new TypeError(`Invalid enum value: ${String(r)}`);
      } });
    }
    function Il(e) {
      Ot(e, { conflictCheck: "warn" });
    }
  }
});

// node_modules/.prisma/client/index.js
var require_client = __commonJS({
  "node_modules/.prisma/client/index.js"(exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    var {
      PrismaClientKnownRequestError: PrismaClientKnownRequestError2,
      PrismaClientUnknownRequestError: PrismaClientUnknownRequestError2,
      PrismaClientRustPanicError: PrismaClientRustPanicError2,
      PrismaClientInitializationError: PrismaClientInitializationError2,
      PrismaClientValidationError: PrismaClientValidationError2,
      NotFoundError: NotFoundError2,
      getPrismaClient: getPrismaClient2,
      sqltag: sqltag2,
      empty: empty2,
      join: join2,
      raw: raw2,
      Decimal: Decimal2,
      Debug: Debug2,
      objectEnumValues: objectEnumValues2,
      makeStrictEnum: makeStrictEnum2,
      Extensions: Extensions2,
      warnOnce: warnOnce2,
      defineDmmfProperty: defineDmmfProperty2,
      Public: Public2
    } = require_library();
    var Prisma = {};
    exports2.Prisma = Prisma;
    exports2.$Enums = {};
    Prisma.prismaVersion = {
      client: "5.3.1",
      engine: "2804dc98259d2ea960602aca6b8e7fdc03c1758f"
    };
    Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError2;
    Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError2;
    Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError2;
    Prisma.PrismaClientInitializationError = PrismaClientInitializationError2;
    Prisma.PrismaClientValidationError = PrismaClientValidationError2;
    Prisma.NotFoundError = NotFoundError2;
    Prisma.Decimal = Decimal2;
    Prisma.sql = sqltag2;
    Prisma.empty = empty2;
    Prisma.join = join2;
    Prisma.raw = raw2;
    Prisma.validator = Public2.validator;
    Prisma.getExtensionContext = Extensions2.getExtensionContext;
    Prisma.defineExtension = Extensions2.defineExtension;
    Prisma.DbNull = objectEnumValues2.instances.DbNull;
    Prisma.JsonNull = objectEnumValues2.instances.JsonNull;
    Prisma.AnyNull = objectEnumValues2.instances.AnyNull;
    Prisma.NullTypes = {
      DbNull: objectEnumValues2.classes.DbNull,
      JsonNull: objectEnumValues2.classes.JsonNull,
      AnyNull: objectEnumValues2.classes.AnyNull
    };
    var path = require("path");
    exports2.Prisma.TransactionIsolationLevel = makeStrictEnum2({
      ReadUncommitted: "ReadUncommitted",
      ReadCommitted: "ReadCommitted",
      RepeatableRead: "RepeatableRead",
      Serializable: "Serializable"
    });
    exports2.Prisma.UserScalarFieldEnum = {
      id: "id",
      name: "name",
      email: "email",
      password: "password",
      created_at: "created_at",
      updated_at: "updated_at"
    };
    exports2.Prisma.CategoryScalarFieldEnum = {
      id: "id",
      name: "name",
      created_at: "created_at",
      updated_at: "updated_at"
    };
    exports2.Prisma.ProductScalarFieldEnum = {
      id: "id",
      name: "name",
      price: "price",
      description: "description",
      banner: "banner",
      created_at: "created_at",
      updated_at: "updated_at",
      category_id: "category_id"
    };
    exports2.Prisma.OrderScalarFieldEnum = {
      id: "id",
      table: "table",
      status: "status",
      draft: "draft",
      name: "name",
      created_at: "created_at",
      updated_at: "updated_at"
    };
    exports2.Prisma.ItemScalarFieldEnum = {
      id: "id",
      amount: "amount",
      created_at: "created_at",
      updated_at: "updated_at",
      order_id: "order_id",
      product_id: "product_id"
    };
    exports2.Prisma.SortOrder = {
      asc: "asc",
      desc: "desc"
    };
    exports2.Prisma.QueryMode = {
      default: "default",
      insensitive: "insensitive"
    };
    exports2.Prisma.NullsOrder = {
      first: "first",
      last: "last"
    };
    exports2.Prisma.ModelName = {
      User: "User",
      Category: "Category",
      Product: "Product",
      Order: "Order",
      Item: "Item"
    };
    var config2 = {
      "generator": {
        "name": "client",
        "provider": {
          "fromEnvVar": null,
          "value": "prisma-client-js"
        },
        "output": {
          "value": "C:\\Users\\RRsil\\OneDrive\\\xC1rea de Trabalho\\projeto pizzaria baguete\\backend-pizbgt\\node_modules\\@prisma\\client",
          "fromEnvVar": null
        },
        "config": {
          "engineType": "library"
        },
        "binaryTargets": [
          {
            "fromEnvVar": null,
            "value": "windows",
            "native": true
          }
        ],
        "previewFeatures": []
      },
      "relativeEnvPaths": {
        "rootEnvPath": "../../../.env",
        "schemaEnvPath": "../../../.env"
      },
      "relativePath": "../../../prisma",
      "clientVersion": "5.3.1",
      "engineVersion": "2804dc98259d2ea960602aca6b8e7fdc03c1758f",
      "datasourceNames": [
        "db"
      ],
      "activeProvider": "postgresql",
      "postinstall": true,
      "inlineDatasources": {
        "db": {
          "url": {
            "fromEnvVar": "DATABASE_URL",
            "value": null
          }
        }
      },
      "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAicG9zdGdyZXNxbCIKICB1cmwgICAgICA9IGVudigiREFUQUJBU0VfVVJMIikKfQoKLy8gY3JpYXIgdW1hIG1pZ3JhdGlvbjogeWFybiBwcmlzbWEgbWlncmF0ZSBkZXYKbW9kZWwgVXNlciB7CiAgaWQgU3RyaW5nIEBpZCBAZGVmYXVsdCh1dWlkKCkpCiAgbmFtZSBTdHJpbmcKICBlbWFpbCBTdHJpbmcKICBwYXNzd29yZCBTdHJpbmcKICBjcmVhdGVkX2F0IERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkKICB1cGRhdGVkX2F0IERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkKCiAgQEBtYXAoInVzZXJzIikKfQoKbW9kZWwgQ2F0ZWdvcnl7CiAgaWQgU3RyaW5nIEBpZCBAZGVmYXVsdCh1dWlkKCkpCiAgbmFtZSBTdHJpbmcKICBjcmVhdGVkX2F0IERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkKICB1cGRhdGVkX2F0IERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkKCiAgQEBtYXAoImNhdGVnb3JpZXMiKQogIHByb2R1Y3RzIFByb2R1Y3RbXQp9Cgptb2RlbCBQcm9kdWN0ewogIGlkIFN0cmluZyBAaWQgQGRlZmF1bHQodXVpZCgpKQogIG5hbWUgU3RyaW5nCiAgcHJpY2UgU3RyaW5nCiAgZGVzY3JpcHRpb24gU3RyaW5nCiAgYmFubmVyIFN0cmluZwogIGNyZWF0ZWRfYXQgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKQogIHVwZGF0ZWRfYXQgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKQoKICBjYXRlZ29yeSBDYXRlZ29yeSBAcmVsYXRpb24oZmllbGRzOiBbY2F0ZWdvcnlfaWRdLCByZWZlcmVuY2VzOiBbaWRdKQoKICBAQG1hcCgicHJvZHVjdHMiKQogIGNhdGVnb3J5X2lkIFN0cmluZwogIGl0ZW1zIEl0ZW1bXQp9Cgptb2RlbCBPcmRlcnsKICBpZCBTdHJpbmcgQGlkIEBkZWZhdWx0KHV1aWQoKSkKICB0YWJsZSBJbnQKICBzdGF0dXMgQm9vbGVhbiBAZGVmYXVsdChmYWxzZSkKICBkcmFmdCBCb29sZWFuIEBkZWZhdWx0KHRydWUpCiAgbmFtZSBTdHJpbmc/CgogIGNyZWF0ZWRfYXQgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKQogIHVwZGF0ZWRfYXQgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKQoKICBAQG1hcCgib3JkZXJzIikKICBpdGVtcyBJdGVtW10KfQoKbW9kZWwgSXRlbXsKICBpZCBTdHJpbmcgQGlkIEBkZWZhdWx0KHV1aWQoKSkKICBhbW91bnQgSW50CgogIGNyZWF0ZWRfYXQgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKQogIHVwZGF0ZWRfYXQgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKQoKICBvcmRlciBPcmRlciBAcmVsYXRpb24oZmllbGRzOiBbb3JkZXJfaWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIHByb2R1Y3QgUHJvZHVjdCBAcmVsYXRpb24oZmllbGRzOiBbcHJvZHVjdF9pZF0sIHJlZmVyZW5jZXM6IFtpZF0pCgogIEBAbWFwKCJpdGVtcyIpCiAgb3JkZXJfaWQgU3RyaW5nCiAgcHJvZHVjdF9pZCBTdHJpbmcKCn0=",
      "inlineSchemaHash": "b736592616b71a34a292bd63a6ac002102a55536e23d75f04cd60042961af891",
      "noEngine": false
    };
    var fs2 = require("fs");
    config2.dirname = __dirname;
    var _a2;
    if (!fs2.existsSync(path.join(__dirname, "schema.prisma"))) {
      const alternativePaths = [
        "node_modules/.prisma/client",
        ".prisma/client"
      ];
      const alternativePath = (_a2 = alternativePaths.find((altPath) => {
        return fs2.existsSync(path.join(process.cwd(), altPath, "schema.prisma"));
      })) != null ? _a2 : alternativePaths[0];
      config2.dirname = path.join(process.cwd(), alternativePath);
      config2.isBundled = true;
    }
    config2.runtimeDataModel = JSON.parse('{"models":{"User":{"dbName":"users","fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"email","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"password","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"created_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updated_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Category":{"dbName":"categories","fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"created_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updated_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"products","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Product","relationName":"CategoryToProduct","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Product":{"dbName":"products","fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"price","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"description","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"banner","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"created_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updated_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"category","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Category","relationName":"CategoryToProduct","relationFromFields":["category_id"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"category_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"items","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Item","relationName":"ItemToProduct","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Order":{"dbName":"orders","fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"table","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","default":false,"isGenerated":false,"isUpdatedAt":false},{"name":"draft","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","default":true,"isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"created_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updated_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"items","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Item","relationName":"ItemToOrder","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Item":{"dbName":"items","fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"amount","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"created_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updated_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"order","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Order","relationName":"ItemToOrder","relationFromFields":["order_id"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"product","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Product","relationName":"ItemToProduct","relationFromFields":["product_id"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"order_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"product_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{},"types":{}}');
    defineDmmfProperty2(exports2.Prisma, config2.runtimeDataModel);
    var { warnEnvConflicts: warnEnvConflicts2 } = require_library();
    warnEnvConflicts2({
      rootEnvPath: config2.relativeEnvPaths.rootEnvPath && path.resolve(config2.dirname, config2.relativeEnvPaths.rootEnvPath),
      schemaEnvPath: config2.relativeEnvPaths.schemaEnvPath && path.resolve(config2.dirname, config2.relativeEnvPaths.schemaEnvPath)
    });
    var PrismaClient2 = getPrismaClient2(config2);
    exports2.PrismaClient = PrismaClient2;
    Object.assign(exports2, Prisma);
    path.join(__dirname, "query_engine-windows.dll.node");
    path.join(process.cwd(), "node_modules/.prisma/client/query_engine-windows.dll.node");
    path.join(__dirname, "schema.prisma");
    path.join(process.cwd(), "node_modules/.prisma/client/schema.prisma");
  }
});

// node_modules/@prisma/client/index.js
var require_client2 = __commonJS({
  "node_modules/@prisma/client/index.js"(exports2, module2) {
    module2.exports = __spreadValues({}, require_client());
  }
});

// src/services/product/ListByCategoryService.ts
var ListByCategoryService_exports = {};
__export(ListByCategoryService_exports, {
  ListByCategoryService: () => ListByCategoryService
});
module.exports = __toCommonJS(ListByCategoryService_exports);

// src/prisma/index.ts
var import_client = __toESM(require_client2());
var prismaClient = new import_client.PrismaClient();
var prisma_default = prismaClient;

// src/services/product/ListByCategoryService.ts
var ListByCategoryService = class {
  execute(_0) {
    return __async(this, arguments, function* ({ category_id }) {
      const findByCategory = yield prisma_default.product.findMany({
        where: {
          category_id
        }
      });
      return findByCategory;
    });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ListByCategoryService
});
/*! Bundled license information:

@prisma/client/runtime/library.js:
  (*! Bundled license information:
  
  decimal.js/decimal.mjs:
    (*!
     *  decimal.js v10.4.3
     *  An arbitrary-precision Decimal type for JavaScript.
     *  https://github.com/MikeMcl/decimal.js
     *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
     *  MIT Licence
     *)
  *)
*/
