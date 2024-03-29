/*! For license information please see vendors_5dd90d_4.68.5.js.LICENSE.txt */
(globalThis.webpackChunk_clerk_clerk_js =
  globalThis.webpackChunk_clerk_clerk_js || []).push([
  [216],
  {
    8165: function (e, t, n) {
      "use strict";
      n.d(t, {
        F4: function () {
          return o;
        },
      }),
        n(2784),
        n(2668);
      var r = n(9034);
      function l() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return (0, r.O)(t);
      }
      n(9721), n(3463);
      var o = function () {
        var e = l.apply(void 0, arguments),
          t = "animation-" + e.name;
        return {
          name: t,
          styles: "@keyframes " + t + "{" + e.styles + "}",
          anim: 1,
          toString: function () {
            return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
          },
        };
      };
    },
    381: function (e, t, n) {
      "use strict";
      var r = n(1706),
        l = { "text/plain": "Text", "text/html": "Url", default: "Text" };
      e.exports = function (e, t) {
        var n,
          o,
          a,
          i,
          u,
          s,
          c = !1;
        t || (t = {}), (n = t.debug || !1);
        try {
          if (
            ((a = r()),
            (i = document.createRange()),
            (u = document.getSelection()),
            ((s = document.createElement("span")).textContent = e),
            (s.ariaHidden = "true"),
            (s.style.all = "unset"),
            (s.style.position = "fixed"),
            (s.style.top = 0),
            (s.style.clip = "rect(0, 0, 0, 0)"),
            (s.style.whiteSpace = "pre"),
            (s.style.webkitUserSelect = "text"),
            (s.style.MozUserSelect = "text"),
            (s.style.msUserSelect = "text"),
            (s.style.userSelect = "text"),
            s.addEventListener("copy", function (r) {
              if ((r.stopPropagation(), t.format))
                if ((r.preventDefault(), void 0 === r.clipboardData)) {
                  n && console.warn("unable to use e.clipboardData"),
                    n && console.warn("trying IE specific stuff"),
                    window.clipboardData.clearData();
                  var o = l[t.format] || l.default;
                  window.clipboardData.setData(o, e);
                } else
                  r.clipboardData.clearData(),
                    r.clipboardData.setData(t.format, e);
              t.onCopy && (r.preventDefault(), t.onCopy(r.clipboardData));
            }),
            document.body.appendChild(s),
            i.selectNodeContents(s),
            u.addRange(i),
            !document.execCommand("copy"))
          )
            throw new Error("copy command was unsuccessful");
          c = !0;
        } catch (r) {
          n && console.error("unable to copy using execCommand: ", r),
            n && console.warn("trying IE specific stuff");
          try {
            window.clipboardData.setData(t.format || "text", e),
              t.onCopy && t.onCopy(window.clipboardData),
              (c = !0);
          } catch (r) {
            n && console.error("unable to copy using clipboardData: ", r),
              n && console.error("falling back to prompt"),
              (o = (function (e) {
                var t =
                  (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
                return e.replace(/#{\s*key\s*}/g, t);
              })(
                "message" in t ? t.message : "Copy to clipboard: #{key}, Enter"
              )),
              window.prompt(o, e);
          }
        } finally {
          u &&
            ("function" == typeof u.removeRange
              ? u.removeRange(i)
              : u.removeAllRanges()),
            s && document.body.removeChild(s),
            a();
        }
        return c;
      };
    },
    6524: function (e, t, n) {
      "use strict";
      n.d(t, {
        T: function () {
          return l;
        },
      });
      const r = new Uint32Array(65536),
        l = (e, t) => {
          if (e.length < t.length) {
            const n = t;
            (t = e), (e = n);
          }
          return 0 === t.length
            ? e.length
            : e.length <= 32
            ? ((e, t) => {
                const n = e.length,
                  l = t.length,
                  o = 1 << (n - 1);
                let a = -1,
                  i = 0,
                  u = n,
                  s = n;
                for (; s--; ) r[e.charCodeAt(s)] |= 1 << s;
                for (s = 0; s < l; s++) {
                  let e = r[t.charCodeAt(s)];
                  const n = e | i;
                  (e |= ((e & a) + a) ^ a),
                    (i |= ~(e | a)),
                    (a &= e),
                    i & o && u++,
                    a & o && u--,
                    (i = (i << 1) | 1),
                    (a = (a << 1) | ~(n | i)),
                    (i &= n);
                }
                for (s = n; s--; ) r[e.charCodeAt(s)] = 0;
                return u;
              })(e, t)
            : ((e, t) => {
                const n = t.length,
                  l = e.length,
                  o = [],
                  a = [],
                  i = Math.ceil(n / 32),
                  u = Math.ceil(l / 32);
                for (let e = 0; e < i; e++) (a[e] = -1), (o[e] = 0);
                let s = 0;
                for (; s < u - 1; s++) {
                  let i = 0,
                    u = -1;
                  const c = 32 * s,
                    f = Math.min(32, l) + c;
                  for (let t = c; t < f; t++) r[e.charCodeAt(t)] |= 1 << t;
                  for (let e = 0; e < n; e++) {
                    const n = r[t.charCodeAt(e)],
                      l = (a[(e / 32) | 0] >>> e) & 1,
                      s = (o[(e / 32) | 0] >>> e) & 1,
                      c = n | i,
                      f = ((((n | s) & u) + u) ^ u) | n | s;
                    let d = i | ~(f | u),
                      p = u & f;
                    (d >>> 31) ^ l && (a[(e / 32) | 0] ^= 1 << e),
                      (p >>> 31) ^ s && (o[(e / 32) | 0] ^= 1 << e),
                      (d = (d << 1) | l),
                      (p = (p << 1) | s),
                      (u = p | ~(c | d)),
                      (i = d & c);
                  }
                  for (let t = c; t < f; t++) r[e.charCodeAt(t)] = 0;
                }
                let c = 0,
                  f = -1;
                const d = 32 * s,
                  p = Math.min(32, l - d) + d;
                for (let t = d; t < p; t++) r[e.charCodeAt(t)] |= 1 << t;
                let h = l;
                for (let e = 0; e < n; e++) {
                  const n = r[t.charCodeAt(e)],
                    i = (a[(e / 32) | 0] >>> e) & 1,
                    u = (o[(e / 32) | 0] >>> e) & 1,
                    s = n | c,
                    d = ((((n | u) & f) + f) ^ f) | n | u;
                  let p = c | ~(d | f),
                    m = f & d;
                  (h += (p >>> (l - 1)) & 1),
                    (h -= (m >>> (l - 1)) & 1),
                    (p >>> 31) ^ i && (a[(e / 32) | 0] ^= 1 << e),
                    (m >>> 31) ^ u && (o[(e / 32) | 0] ^= 1 << e),
                    (p = (p << 1) | i),
                    (m = (m << 1) | u),
                    (f = m | ~(s | p)),
                    (c = p & s);
                }
                for (let t = d; t < p; t++) r[e.charCodeAt(t)] = 0;
                return h;
              })(e, t);
        };
    },
    9782: function (e, t, n) {
      "use strict";
      n.d(t, {
        tv: function () {
          return k;
        },
      });
      var r,
        l = n(2784),
        o = Object.defineProperty,
        a = Object.getOwnPropertySymbols,
        i = Object.prototype.hasOwnProperty,
        u = Object.prototype.propertyIsEnumerable,
        s = (e, t, n) =>
          t in e
            ? o(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        c = (e, t) => {
          for (var n in t || (t = {})) i.call(t, n) && s(e, n, t[n]);
          if (a) for (var n of a(t)) u.call(t, n) && s(e, n, t[n]);
          return e;
        },
        f = (e, t) => {
          var n = {};
          for (var r in e) i.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
          if (null != e && a)
            for (var r of a(e))
              t.indexOf(r) < 0 && u.call(e, r) && (n[r] = e[r]);
          return n;
        };
      ((e) => {
        const t = class {
          constructor(e, n, r, l) {
            if (
              ((this.version = e),
              (this.errorCorrectionLevel = n),
              (this.modules = []),
              (this.isFunction = []),
              e < t.MIN_VERSION || e > t.MAX_VERSION)
            )
              throw new RangeError("Version value out of range");
            if (l < -1 || l > 7)
              throw new RangeError("Mask value out of range");
            this.size = 4 * e + 17;
            let a = [];
            for (let e = 0; e < this.size; e++) a.push(!1);
            for (let e = 0; e < this.size; e++)
              this.modules.push(a.slice()), this.isFunction.push(a.slice());
            this.drawFunctionPatterns();
            const i = this.addEccAndInterleave(r);
            if ((this.drawCodewords(i), -1 == l)) {
              let e = 1e9;
              for (let t = 0; t < 8; t++) {
                this.applyMask(t), this.drawFormatBits(t);
                const n = this.getPenaltyScore();
                n < e && ((l = t), (e = n)), this.applyMask(t);
              }
            }
            o(0 <= l && l <= 7),
              (this.mask = l),
              this.applyMask(l),
              this.drawFormatBits(l),
              (this.isFunction = []);
          }
          static encodeText(n, r) {
            const l = e.QrSegment.makeSegments(n);
            return t.encodeSegments(l, r);
          }
          static encodeBinary(n, r) {
            const l = e.QrSegment.makeBytes(n);
            return t.encodeSegments([l], r);
          }
          static encodeSegments(e, n, l = 1, a = 40, u = -1, s = !0) {
            if (
              !(t.MIN_VERSION <= l && l <= a && a <= t.MAX_VERSION) ||
              u < -1 ||
              u > 7
            )
              throw new RangeError("Invalid value");
            let c, f;
            for (c = l; ; c++) {
              const r = 8 * t.getNumDataCodewords(c, n),
                l = i.getTotalBits(e, c);
              if (l <= r) {
                f = l;
                break;
              }
              if (c >= a) throw new RangeError("Data too long");
            }
            for (const e of [t.Ecc.MEDIUM, t.Ecc.QUARTILE, t.Ecc.HIGH])
              s && f <= 8 * t.getNumDataCodewords(c, e) && (n = e);
            let d = [];
            for (const t of e) {
              r(t.mode.modeBits, 4, d),
                r(t.numChars, t.mode.numCharCountBits(c), d);
              for (const e of t.getData()) d.push(e);
            }
            o(d.length == f);
            const p = 8 * t.getNumDataCodewords(c, n);
            o(d.length <= p),
              r(0, Math.min(4, p - d.length), d),
              r(0, (8 - (d.length % 8)) % 8, d),
              o(d.length % 8 == 0);
            for (let e = 236; d.length < p; e ^= 253) r(e, 8, d);
            let h = [];
            for (; 8 * h.length < d.length; ) h.push(0);
            return (
              d.forEach((e, t) => (h[t >>> 3] |= e << (7 - (7 & t)))),
              new t(c, n, h, u)
            );
          }
          getModule(e, t) {
            return (
              0 <= e &&
              e < this.size &&
              0 <= t &&
              t < this.size &&
              this.modules[t][e]
            );
          }
          getModules() {
            return this.modules;
          }
          drawFunctionPatterns() {
            for (let e = 0; e < this.size; e++)
              this.setFunctionModule(6, e, e % 2 == 0),
                this.setFunctionModule(e, 6, e % 2 == 0);
            this.drawFinderPattern(3, 3),
              this.drawFinderPattern(this.size - 4, 3),
              this.drawFinderPattern(3, this.size - 4);
            const e = this.getAlignmentPatternPositions(),
              t = e.length;
            for (let n = 0; n < t; n++)
              for (let r = 0; r < t; r++)
                (0 == n && 0 == r) ||
                  (0 == n && r == t - 1) ||
                  (n == t - 1 && 0 == r) ||
                  this.drawAlignmentPattern(e[n], e[r]);
            this.drawFormatBits(0), this.drawVersion();
          }
          drawFormatBits(e) {
            const t = (this.errorCorrectionLevel.formatBits << 3) | e;
            let n = t;
            for (let e = 0; e < 10; e++) n = (n << 1) ^ (1335 * (n >>> 9));
            const r = 21522 ^ ((t << 10) | n);
            o(r >>> 15 == 0);
            for (let e = 0; e <= 5; e++) this.setFunctionModule(8, e, l(r, e));
            this.setFunctionModule(8, 7, l(r, 6)),
              this.setFunctionModule(8, 8, l(r, 7)),
              this.setFunctionModule(7, 8, l(r, 8));
            for (let e = 9; e < 15; e++)
              this.setFunctionModule(14 - e, 8, l(r, e));
            for (let e = 0; e < 8; e++)
              this.setFunctionModule(this.size - 1 - e, 8, l(r, e));
            for (let e = 8; e < 15; e++)
              this.setFunctionModule(8, this.size - 15 + e, l(r, e));
            this.setFunctionModule(8, this.size - 8, !0);
          }
          drawVersion() {
            if (this.version < 7) return;
            let e = this.version;
            for (let t = 0; t < 12; t++) e = (e << 1) ^ (7973 * (e >>> 11));
            const t = (this.version << 12) | e;
            o(t >>> 18 == 0);
            for (let e = 0; e < 18; e++) {
              const n = l(t, e),
                r = this.size - 11 + (e % 3),
                o = Math.floor(e / 3);
              this.setFunctionModule(r, o, n), this.setFunctionModule(o, r, n);
            }
          }
          drawFinderPattern(e, t) {
            for (let n = -4; n <= 4; n++)
              for (let r = -4; r <= 4; r++) {
                const l = Math.max(Math.abs(r), Math.abs(n)),
                  o = e + r,
                  a = t + n;
                0 <= o &&
                  o < this.size &&
                  0 <= a &&
                  a < this.size &&
                  this.setFunctionModule(o, a, 2 != l && 4 != l);
              }
          }
          drawAlignmentPattern(e, t) {
            for (let n = -2; n <= 2; n++)
              for (let r = -2; r <= 2; r++)
                this.setFunctionModule(
                  e + r,
                  t + n,
                  1 != Math.max(Math.abs(r), Math.abs(n))
                );
          }
          setFunctionModule(e, t, n) {
            (this.modules[t][e] = n), (this.isFunction[t][e] = !0);
          }
          addEccAndInterleave(e) {
            const n = this.version,
              r = this.errorCorrectionLevel;
            if (e.length != t.getNumDataCodewords(n, r))
              throw new RangeError("Invalid argument");
            const l = t.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][n],
              a = t.ECC_CODEWORDS_PER_BLOCK[r.ordinal][n],
              i = Math.floor(t.getNumRawDataModules(n) / 8),
              u = l - (i % l),
              s = Math.floor(i / l);
            let c = [];
            const f = t.reedSolomonComputeDivisor(a);
            for (let n = 0, r = 0; n < l; n++) {
              let l = e.slice(r, r + s - a + (n < u ? 0 : 1));
              r += l.length;
              const o = t.reedSolomonComputeRemainder(l, f);
              n < u && l.push(0), c.push(l.concat(o));
            }
            let d = [];
            for (let e = 0; e < c[0].length; e++)
              c.forEach((t, n) => {
                (e != s - a || n >= u) && d.push(t[e]);
              });
            return o(d.length == i), d;
          }
          drawCodewords(e) {
            if (
              e.length != Math.floor(t.getNumRawDataModules(this.version) / 8)
            )
              throw new RangeError("Invalid argument");
            let n = 0;
            for (let t = this.size - 1; t >= 1; t -= 2) {
              6 == t && (t = 5);
              for (let r = 0; r < this.size; r++)
                for (let o = 0; o < 2; o++) {
                  const a = t - o,
                    i = 0 == ((t + 1) & 2) ? this.size - 1 - r : r;
                  !this.isFunction[i][a] &&
                    n < 8 * e.length &&
                    ((this.modules[i][a] = l(e[n >>> 3], 7 - (7 & n))), n++);
                }
            }
            o(n == 8 * e.length);
          }
          applyMask(e) {
            if (e < 0 || e > 7) throw new RangeError("Mask value out of range");
            for (let t = 0; t < this.size; t++)
              for (let n = 0; n < this.size; n++) {
                let r;
                switch (e) {
                  case 0:
                    r = (n + t) % 2 == 0;
                    break;
                  case 1:
                    r = t % 2 == 0;
                    break;
                  case 2:
                    r = n % 3 == 0;
                    break;
                  case 3:
                    r = (n + t) % 3 == 0;
                    break;
                  case 4:
                    r = (Math.floor(n / 3) + Math.floor(t / 2)) % 2 == 0;
                    break;
                  case 5:
                    r = ((n * t) % 2) + ((n * t) % 3) == 0;
                    break;
                  case 6:
                    r = (((n * t) % 2) + ((n * t) % 3)) % 2 == 0;
                    break;
                  case 7:
                    r = (((n + t) % 2) + ((n * t) % 3)) % 2 == 0;
                    break;
                  default:
                    throw new Error("Unreachable");
                }
                !this.isFunction[t][n] &&
                  r &&
                  (this.modules[t][n] = !this.modules[t][n]);
              }
          }
          getPenaltyScore() {
            let e = 0;
            for (let n = 0; n < this.size; n++) {
              let r = !1,
                l = 0,
                o = [0, 0, 0, 0, 0, 0, 0];
              for (let a = 0; a < this.size; a++)
                this.modules[n][a] == r
                  ? (l++, 5 == l ? (e += t.PENALTY_N1) : l > 5 && e++)
                  : (this.finderPenaltyAddHistory(l, o),
                    r ||
                      (e += this.finderPenaltyCountPatterns(o) * t.PENALTY_N3),
                    (r = this.modules[n][a]),
                    (l = 1));
              e += this.finderPenaltyTerminateAndCount(r, l, o) * t.PENALTY_N3;
            }
            for (let n = 0; n < this.size; n++) {
              let r = !1,
                l = 0,
                o = [0, 0, 0, 0, 0, 0, 0];
              for (let a = 0; a < this.size; a++)
                this.modules[a][n] == r
                  ? (l++, 5 == l ? (e += t.PENALTY_N1) : l > 5 && e++)
                  : (this.finderPenaltyAddHistory(l, o),
                    r ||
                      (e += this.finderPenaltyCountPatterns(o) * t.PENALTY_N3),
                    (r = this.modules[a][n]),
                    (l = 1));
              e += this.finderPenaltyTerminateAndCount(r, l, o) * t.PENALTY_N3;
            }
            for (let n = 0; n < this.size - 1; n++)
              for (let r = 0; r < this.size - 1; r++) {
                const l = this.modules[n][r];
                l == this.modules[n][r + 1] &&
                  l == this.modules[n + 1][r] &&
                  l == this.modules[n + 1][r + 1] &&
                  (e += t.PENALTY_N2);
              }
            let n = 0;
            for (const e of this.modules)
              n = e.reduce((e, t) => e + (t ? 1 : 0), n);
            const r = this.size * this.size,
              l = Math.ceil(Math.abs(20 * n - 10 * r) / r) - 1;
            return (
              o(0 <= l && l <= 9),
              (e += l * t.PENALTY_N4),
              o(0 <= e && e <= 2568888),
              e
            );
          }
          getAlignmentPatternPositions() {
            if (1 == this.version) return [];
            {
              const e = Math.floor(this.version / 7) + 2,
                t =
                  32 == this.version
                    ? 26
                    : 2 * Math.ceil((4 * this.version + 4) / (2 * e - 2));
              let n = [6];
              for (let r = this.size - 7; n.length < e; r -= t)
                n.splice(1, 0, r);
              return n;
            }
          }
          static getNumRawDataModules(e) {
            if (e < t.MIN_VERSION || e > t.MAX_VERSION)
              throw new RangeError("Version number out of range");
            let n = (16 * e + 128) * e + 64;
            if (e >= 2) {
              const t = Math.floor(e / 7) + 2;
              (n -= (25 * t - 10) * t - 55), e >= 7 && (n -= 36);
            }
            return o(208 <= n && n <= 29648), n;
          }
          static getNumDataCodewords(e, n) {
            return (
              Math.floor(t.getNumRawDataModules(e) / 8) -
              t.ECC_CODEWORDS_PER_BLOCK[n.ordinal][e] *
                t.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][e]
            );
          }
          static reedSolomonComputeDivisor(e) {
            if (e < 1 || e > 255) throw new RangeError("Degree out of range");
            let n = [];
            for (let t = 0; t < e - 1; t++) n.push(0);
            n.push(1);
            let r = 1;
            for (let l = 0; l < e; l++) {
              for (let e = 0; e < n.length; e++)
                (n[e] = t.reedSolomonMultiply(n[e], r)),
                  e + 1 < n.length && (n[e] ^= n[e + 1]);
              r = t.reedSolomonMultiply(r, 2);
            }
            return n;
          }
          static reedSolomonComputeRemainder(e, n) {
            let r = n.map((e) => 0);
            for (const l of e) {
              const e = l ^ r.shift();
              r.push(0),
                n.forEach((n, l) => (r[l] ^= t.reedSolomonMultiply(n, e)));
            }
            return r;
          }
          static reedSolomonMultiply(e, t) {
            if (e >>> 8 != 0 || t >>> 8 != 0)
              throw new RangeError("Byte out of range");
            let n = 0;
            for (let r = 7; r >= 0; r--)
              (n = (n << 1) ^ (285 * (n >>> 7))), (n ^= ((t >>> r) & 1) * e);
            return o(n >>> 8 == 0), n;
          }
          finderPenaltyCountPatterns(e) {
            const t = e[1];
            o(t <= 3 * this.size);
            const n =
              t > 0 && e[2] == t && e[3] == 3 * t && e[4] == t && e[5] == t;
            return (
              (n && e[0] >= 4 * t && e[6] >= t ? 1 : 0) +
              (n && e[6] >= 4 * t && e[0] >= t ? 1 : 0)
            );
          }
          finderPenaltyTerminateAndCount(e, t, n) {
            return (
              e && (this.finderPenaltyAddHistory(t, n), (t = 0)),
              (t += this.size),
              this.finderPenaltyAddHistory(t, n),
              this.finderPenaltyCountPatterns(n)
            );
          }
          finderPenaltyAddHistory(e, t) {
            0 == t[0] && (e += this.size), t.pop(), t.unshift(e);
          }
        };
        let n = t;
        function r(e, t, n) {
          if (t < 0 || t > 31 || e >>> t != 0)
            throw new RangeError("Value out of range");
          for (let r = t - 1; r >= 0; r--) n.push((e >>> r) & 1);
        }
        function l(e, t) {
          return 0 != ((e >>> t) & 1);
        }
        function o(e) {
          if (!e) throw new Error("Assertion error");
        }
        (n.MIN_VERSION = 1),
          (n.MAX_VERSION = 40),
          (n.PENALTY_N1 = 3),
          (n.PENALTY_N2 = 3),
          (n.PENALTY_N3 = 40),
          (n.PENALTY_N4 = 10),
          (n.ECC_CODEWORDS_PER_BLOCK = [
            [
              -1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24,
              28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30,
              30, 30, 30, 30, 30, 30, 30, 30,
            ],
            [
              -1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24,
              28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28,
              28, 28, 28, 28, 28, 28, 28, 28, 28,
            ],
            [
              -1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30,
              24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30,
              30, 30, 30, 30, 30, 30, 30, 30, 30,
            ],
            [
              -1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24,
              30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30,
              30, 30, 30, 30, 30, 30, 30, 30, 30,
            ],
          ]),
          (n.NUM_ERROR_CORRECTION_BLOCKS = [
            [
              -1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8,
              9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22,
              24, 25,
            ],
            [
              -1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14,
              16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38,
              40, 43, 45, 47, 49,
            ],
            [
              -1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18,
              21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51,
              53, 56, 59, 62, 65, 68,
            ],
            [
              -1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21,
              25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60,
              63, 66, 70, 74, 77, 81,
            ],
          ]),
          (e.QrCode = n);
        const a = class {
          constructor(e, t, n) {
            if (
              ((this.mode = e), (this.numChars = t), (this.bitData = n), t < 0)
            )
              throw new RangeError("Invalid argument");
            this.bitData = n.slice();
          }
          static makeBytes(e) {
            let t = [];
            for (const n of e) r(n, 8, t);
            return new a(a.Mode.BYTE, e.length, t);
          }
          static makeNumeric(e) {
            if (!a.isNumeric(e))
              throw new RangeError("String contains non-numeric characters");
            let t = [];
            for (let n = 0; n < e.length; ) {
              const l = Math.min(e.length - n, 3);
              r(parseInt(e.substr(n, l), 10), 3 * l + 1, t), (n += l);
            }
            return new a(a.Mode.NUMERIC, e.length, t);
          }
          static makeAlphanumeric(e) {
            if (!a.isAlphanumeric(e))
              throw new RangeError(
                "String contains unencodable characters in alphanumeric mode"
              );
            let t,
              n = [];
            for (t = 0; t + 2 <= e.length; t += 2) {
              let l = 45 * a.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t));
              (l += a.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t + 1))),
                r(l, 11, n);
            }
            return (
              t < e.length &&
                r(a.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t)), 6, n),
              new a(a.Mode.ALPHANUMERIC, e.length, n)
            );
          }
          static makeSegments(e) {
            return "" == e
              ? []
              : a.isNumeric(e)
              ? [a.makeNumeric(e)]
              : a.isAlphanumeric(e)
              ? [a.makeAlphanumeric(e)]
              : [a.makeBytes(a.toUtf8ByteArray(e))];
          }
          static makeEci(e) {
            let t = [];
            if (e < 0)
              throw new RangeError("ECI assignment value out of range");
            if (e < 128) r(e, 8, t);
            else if (e < 16384) r(2, 2, t), r(e, 14, t);
            else {
              if (!(e < 1e6))
                throw new RangeError("ECI assignment value out of range");
              r(6, 3, t), r(e, 21, t);
            }
            return new a(a.Mode.ECI, 0, t);
          }
          static isNumeric(e) {
            return a.NUMERIC_REGEX.test(e);
          }
          static isAlphanumeric(e) {
            return a.ALPHANUMERIC_REGEX.test(e);
          }
          getData() {
            return this.bitData.slice();
          }
          static getTotalBits(e, t) {
            let n = 0;
            for (const r of e) {
              const e = r.mode.numCharCountBits(t);
              if (r.numChars >= 1 << e) return 1 / 0;
              n += 4 + e + r.bitData.length;
            }
            return n;
          }
          static toUtf8ByteArray(e) {
            e = encodeURI(e);
            let t = [];
            for (let n = 0; n < e.length; n++)
              "%" != e.charAt(n)
                ? t.push(e.charCodeAt(n))
                : (t.push(parseInt(e.substr(n + 1, 2), 16)), (n += 2));
            return t;
          }
        };
        let i = a;
        (i.NUMERIC_REGEX = /^[0-9]*$/),
          (i.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/),
          (i.ALPHANUMERIC_CHARSET =
            "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:"),
          (e.QrSegment = i);
      })(r || (r = {})),
        ((e) => {
          let t;
          ((e) => {
            const t = class {
              constructor(e, t) {
                (this.ordinal = e), (this.formatBits = t);
              }
            };
            let n = t;
            (n.LOW = new t(0, 1)),
              (n.MEDIUM = new t(1, 0)),
              (n.QUARTILE = new t(2, 3)),
              (n.HIGH = new t(3, 2)),
              (e.Ecc = n);
          })((t = e.QrCode || (e.QrCode = {})));
        })(r || (r = {})),
        ((e) => {
          let t;
          ((e) => {
            const t = class {
              constructor(e, t) {
                (this.modeBits = e), (this.numBitsCharCount = t);
              }
              numCharCountBits(e) {
                return this.numBitsCharCount[Math.floor((e + 7) / 17)];
              }
            };
            let n = t;
            (n.NUMERIC = new t(1, [10, 12, 14])),
              (n.ALPHANUMERIC = new t(2, [9, 11, 13])),
              (n.BYTE = new t(4, [8, 16, 16])),
              (n.KANJI = new t(8, [8, 10, 12])),
              (n.ECI = new t(7, [0, 0, 0])),
              (e.Mode = n);
          })((t = e.QrSegment || (e.QrSegment = {})));
        })(r || (r = {}));
      var d = r,
        p = {
          L: d.QrCode.Ecc.LOW,
          M: d.QrCode.Ecc.MEDIUM,
          Q: d.QrCode.Ecc.QUARTILE,
          H: d.QrCode.Ecc.HIGH,
        },
        h = 128,
        m = "L",
        g = "#FFFFFF",
        v = "#000000",
        y = !1,
        b = 4,
        w = 0.1;
      function k(e) {
        const t = e,
          {
            value: n,
            size: r = h,
            level: o = m,
            bgColor: a = g,
            fgColor: i = v,
            includeMargin: u = y,
            imageSettings: s,
          } = t,
          k = f(t, [
            "value",
            "size",
            "level",
            "bgColor",
            "fgColor",
            "includeMargin",
            "imageSettings",
          ]);
        let S = d.QrCode.encodeText(n, p[o]).getModules();
        const E = u ? b : 0,
          x = S.length + 2 * E,
          C = (function (e, t, n, r) {
            if (null == r) return null;
            const l = n ? b : 0,
              o = e.length + 2 * l,
              a = Math.floor(t * w),
              i = o / t,
              u = (r.width || a) * i,
              s = (r.height || a) * i,
              c = null == r.x ? e.length / 2 - u / 2 : r.x * i,
              f = null == r.y ? e.length / 2 - s / 2 : r.y * i;
            let d = null;
            if (r.excavate) {
              let e = Math.floor(c),
                t = Math.floor(f);
              d = {
                x: e,
                y: t,
                w: Math.ceil(u + c - e),
                h: Math.ceil(s + f - t),
              };
            }
            return { x: c, y: f, h: s, w: u, excavation: d };
          })(S, r, u, s);
        let R = null;
        var N, P;
        null != s &&
          null != C &&
          (null != C.excavation &&
            ((N = S),
            (P = C.excavation),
            (S = N.slice().map((e, t) =>
              t < P.y || t >= P.y + P.h
                ? e
                : e.map((e, t) => (t < P.x || t >= P.x + P.w) && e)
            ))),
          (R = l.createElement("image", {
            xlinkHref: s.src,
            height: C.h,
            width: C.w,
            x: C.x + E,
            y: C.y + E,
            preserveAspectRatio: "none",
          })));
        const _ = (function (e, t = 0) {
          const n = [];
          return (
            e.forEach(function (e, r) {
              let l = null;
              e.forEach(function (o, a) {
                if (!o && null !== l)
                  return (
                    n.push(`M${l + t} ${r + t}h${a - l}v1H${l + t}z`),
                    void (l = null)
                  );
                if (a !== e.length - 1) o && null === l && (l = a);
                else {
                  if (!o) return;
                  null === l
                    ? n.push(`M${a + t},${r + t} h1v1H${a + t}z`)
                    : n.push(`M${l + t},${r + t} h${a + 1 - l}v1H${l + t}z`);
                }
              });
            }),
            n.join("")
          );
        })(S, E);
        return l.createElement(
          "svg",
          c({ height: r, width: r, viewBox: `0 0 ${x} ${x}` }, k),
          l.createElement("path", {
            fill: a,
            d: `M0,0 h${x}v${x}H0z`,
            shapeRendering: "crispEdges",
          }),
          l.createElement("path", {
            fill: i,
            d: _,
            shapeRendering: "crispEdges",
          }),
          R
        );
      }
      !(function () {
        try {
          new Path2D().addPath(new Path2D());
        } catch (e) {
          return !1;
        }
      })();
    },
    2967: function (e, t, n) {
      "use strict";
      var r = n(2784),
        l = n(4616);
      function o(e) {
        for (
          var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
            n = 1;
          n < arguments.length;
          n++
        )
          t += "&args[]=" + encodeURIComponent(arguments[n]);
        return (
          "Minified React error #" +
          e +
          "; visit " +
          t +
          " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        );
      }
      var a = new Set(),
        i = {};
      function u(e, t) {
        s(e, t), s(e + "Capture", t);
      }
      function s(e, t) {
        for (i[e] = t, e = 0; e < t.length; e++) a.add(t[e]);
      }
      var c = !(
          "undefined" == typeof window ||
          void 0 === window.document ||
          void 0 === window.document.createElement
        ),
        f = Object.prototype.hasOwnProperty,
        d =
          /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        p = {},
        h = {};
      function m(e, t, n, r, l, o, a) {
        (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
          (this.attributeName = r),
          (this.attributeNamespace = l),
          (this.mustUseProperty = n),
          (this.propertyName = e),
          (this.type = t),
          (this.sanitizeURL = o),
          (this.removeEmptyString = a);
      }
      var g = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
        .split(" ")
        .forEach(function (e) {
          g[e] = new m(e, 0, !1, e, null, !1, !1);
        }),
        [
          ["acceptCharset", "accept-charset"],
          ["className", "class"],
          ["htmlFor", "for"],
          ["httpEquiv", "http-equiv"],
        ].forEach(function (e) {
          var t = e[0];
          g[t] = new m(t, 1, !1, e[1], null, !1, !1);
        }),
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(
          function (e) {
            g[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
          }
        ),
        [
          "autoReverse",
          "externalResourcesRequired",
          "focusable",
          "preserveAlpha",
        ].forEach(function (e) {
          g[e] = new m(e, 2, !1, e, null, !1, !1);
        }),
        "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
          .split(" ")
          .forEach(function (e) {
            g[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
          }),
        ["checked", "multiple", "muted", "selected"].forEach(function (e) {
          g[e] = new m(e, 3, !0, e, null, !1, !1);
        }),
        ["capture", "download"].forEach(function (e) {
          g[e] = new m(e, 4, !1, e, null, !1, !1);
        }),
        ["cols", "rows", "size", "span"].forEach(function (e) {
          g[e] = new m(e, 6, !1, e, null, !1, !1);
        }),
        ["rowSpan", "start"].forEach(function (e) {
          g[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
        });
      var v = /[\-:]([a-z])/g;
      function y(e) {
        return e[1].toUpperCase();
      }
      function b(e, t, n, r) {
        var l = g.hasOwnProperty(t) ? g[t] : null;
        (null !== l
          ? 0 !== l.type
          : r ||
            !(2 < t.length) ||
            ("o" !== t[0] && "O" !== t[0]) ||
            ("n" !== t[1] && "N" !== t[1])) &&
          ((function (e, t, n, r) {
            if (
              null == t ||
              (function (e, t, n, r) {
                if (null !== n && 0 === n.type) return !1;
                switch (typeof t) {
                  case "function":
                  case "symbol":
                    return !0;
                  case "boolean":
                    return (
                      !r &&
                      (null !== n
                        ? !n.acceptsBooleans
                        : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                          "aria-" !== e)
                    );
                  default:
                    return !1;
                }
              })(e, t, n, r)
            )
              return !0;
            if (r) return !1;
            if (null !== n)
              switch (n.type) {
                case 3:
                  return !t;
                case 4:
                  return !1 === t;
                case 5:
                  return isNaN(t);
                case 6:
                  return isNaN(t) || 1 > t;
              }
            return !1;
          })(t, n, l, r) && (n = null),
          r || null === l
            ? (function (e) {
                return (
                  !!f.call(h, e) ||
                  (!f.call(p, e) &&
                    (d.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                );
              })(t) &&
              (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
            : l.mustUseProperty
            ? (e[l.propertyName] = null === n ? 3 !== l.type && "" : n)
            : ((t = l.attributeName),
              (r = l.attributeNamespace),
              null === n
                ? e.removeAttribute(t)
                : ((n =
                    3 === (l = l.type) || (4 === l && !0 === n) ? "" : "" + n),
                  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
        .split(" ")
        .forEach(function (e) {
          var t = e.replace(v, y);
          g[t] = new m(t, 1, !1, e, null, !1, !1);
        }),
        "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(v, y);
            g[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
          }),
        ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
          var t = e.replace(v, y);
          g[t] = new m(
            t,
            1,
            !1,
            e,
            "http://www.w3.org/XML/1998/namespace",
            !1,
            !1
          );
        }),
        ["tabIndex", "crossOrigin"].forEach(function (e) {
          g[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
        }),
        (g.xlinkHref = new m(
          "xlinkHref",
          1,
          !1,
          "xlink:href",
          "http://www.w3.org/1999/xlink",
          !0,
          !1
        )),
        ["src", "href", "action", "formAction"].forEach(function (e) {
          g[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
        });
      var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        k = Symbol.for("react.element"),
        S = Symbol.for("react.portal"),
        E = Symbol.for("react.fragment"),
        x = Symbol.for("react.strict_mode"),
        C = Symbol.for("react.profiler"),
        R = Symbol.for("react.provider"),
        N = Symbol.for("react.context"),
        P = Symbol.for("react.forward_ref"),
        _ = Symbol.for("react.suspense"),
        M = Symbol.for("react.suspense_list"),
        L = Symbol.for("react.memo"),
        T = Symbol.for("react.lazy");
      Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
      var z = Symbol.for("react.offscreen");
      Symbol.for("react.legacy_hidden"),
        Symbol.for("react.cache"),
        Symbol.for("react.tracing_marker");
      var F = Symbol.iterator;
      function D(e) {
        return null === e || "object" != typeof e
          ? null
          : "function" == typeof (e = (F && e[F]) || e["@@iterator"])
          ? e
          : null;
      }
      var O,
        A = Object.assign;
      function I(e) {
        if (void 0 === O)
          try {
            throw Error();
          } catch (e) {
            var t = e.stack.trim().match(/\n( *(at )?)/);
            O = (t && t[1]) || "";
          }
        return "\n" + O + e;
      }
      var U = !1;
      function B(e, t) {
        if (!e || U) return "";
        U = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          if (t)
            if (
              ((t = function () {
                throw Error();
              }),
              Object.defineProperty(t.prototype, "props", {
                set: function () {
                  throw Error();
                },
              }),
              "object" == typeof Reflect && Reflect.construct)
            ) {
              try {
                Reflect.construct(t, []);
              } catch (e) {
                var r = e;
              }
              Reflect.construct(e, [], t);
            } else {
              try {
                t.call();
              } catch (e) {
                r = e;
              }
              e.call(t.prototype);
            }
          else {
            try {
              throw Error();
            } catch (e) {
              r = e;
            }
            e();
          }
        } catch (t) {
          if (t && r && "string" == typeof t.stack) {
            for (
              var l = t.stack.split("\n"),
                o = r.stack.split("\n"),
                a = l.length - 1,
                i = o.length - 1;
              1 <= a && 0 <= i && l[a] !== o[i];

            )
              i--;
            for (; 1 <= a && 0 <= i; a--, i--)
              if (l[a] !== o[i]) {
                if (1 !== a || 1 !== i)
                  do {
                    if ((a--, 0 > --i || l[a] !== o[i])) {
                      var u = "\n" + l[a].replace(" at new ", " at ");
                      return (
                        e.displayName &&
                          u.includes("<anonymous>") &&
                          (u = u.replace("<anonymous>", e.displayName)),
                        u
                      );
                    }
                  } while (1 <= a && 0 <= i);
                break;
              }
          }
        } finally {
          (U = !1), (Error.prepareStackTrace = n);
        }
        return (e = e ? e.displayName || e.name : "") ? I(e) : "";
      }
      function H(e) {
        switch (e.tag) {
          case 5:
            return I(e.type);
          case 16:
            return I("Lazy");
          case 13:
            return I("Suspense");
          case 19:
            return I("SuspenseList");
          case 0:
          case 2:
          case 15:
            return B(e.type, !1);
          case 11:
            return B(e.type.render, !1);
          case 1:
            return B(e.type, !0);
          default:
            return "";
        }
      }
      function V(e) {
        if (null == e) return null;
        if ("function" == typeof e) return e.displayName || e.name || null;
        if ("string" == typeof e) return e;
        switch (e) {
          case E:
            return "Fragment";
          case S:
            return "Portal";
          case C:
            return "Profiler";
          case x:
            return "StrictMode";
          case _:
            return "Suspense";
          case M:
            return "SuspenseList";
        }
        if ("object" == typeof e)
          switch (e.$$typeof) {
            case N:
              return (e.displayName || "Context") + ".Consumer";
            case R:
              return (e._context.displayName || "Context") + ".Provider";
            case P:
              var t = e.render;
              return (
                (e = e.displayName) ||
                  (e =
                    "" !== (e = t.displayName || t.name || "")
                      ? "ForwardRef(" + e + ")"
                      : "ForwardRef"),
                e
              );
            case L:
              return null !== (t = e.displayName || null)
                ? t
                : V(e.type) || "Memo";
            case T:
              (t = e._payload), (e = e._init);
              try {
                return V(e(t));
              } catch (e) {}
          }
        return null;
      }
      function W(e) {
        var t = e.type;
        switch (e.tag) {
          case 24:
            return "Cache";
          case 9:
            return (t.displayName || "Context") + ".Consumer";
          case 10:
            return (t._context.displayName || "Context") + ".Provider";
          case 18:
            return "DehydratedFragment";
          case 11:
            return (
              (e = (e = t.render).displayName || e.name || ""),
              t.displayName ||
                ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
            );
          case 7:
            return "Fragment";
          case 5:
            return t;
          case 4:
            return "Portal";
          case 3:
            return "Root";
          case 6:
            return "Text";
          case 16:
            return V(t);
          case 8:
            return t === x ? "StrictMode" : "Mode";
          case 22:
            return "Offscreen";
          case 12:
            return "Profiler";
          case 21:
            return "Scope";
          case 13:
            return "Suspense";
          case 19:
            return "SuspenseList";
          case 25:
            return "TracingMarker";
          case 1:
          case 0:
          case 17:
          case 2:
          case 14:
          case 15:
            if ("function" == typeof t) return t.displayName || t.name || null;
            if ("string" == typeof t) return t;
        }
        return null;
      }
      function Q(e) {
        switch (typeof e) {
          case "boolean":
          case "number":
          case "string":
          case "undefined":
          case "object":
            return e;
          default:
            return "";
        }
      }
      function j(e) {
        var t = e.type;
        return (
          (e = e.nodeName) &&
          "input" === e.toLowerCase() &&
          ("checkbox" === t || "radio" === t)
        );
      }
      function K(e) {
        e._valueTracker ||
          (e._valueTracker = (function (e) {
            var t = j(e) ? "checked" : "value",
              n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
              r = "" + e[t];
            if (
              !e.hasOwnProperty(t) &&
              void 0 !== n &&
              "function" == typeof n.get &&
              "function" == typeof n.set
            ) {
              var l = n.get,
                o = n.set;
              return (
                Object.defineProperty(e, t, {
                  configurable: !0,
                  get: function () {
                    return l.call(this);
                  },
                  set: function (e) {
                    (r = "" + e), o.call(this, e);
                  },
                }),
                Object.defineProperty(e, t, { enumerable: n.enumerable }),
                {
                  getValue: function () {
                    return r;
                  },
                  setValue: function (e) {
                    r = "" + e;
                  },
                  stopTracking: function () {
                    (e._valueTracker = null), delete e[t];
                  },
                }
              );
            }
          })(e));
      }
      function $(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(),
          r = "";
        return (
          e && (r = j(e) ? (e.checked ? "true" : "false") : e.value),
          (e = r) !== n && (t.setValue(e), !0)
        );
      }
      function q(e) {
        if (
          void 0 ===
          (e = e || ("undefined" != typeof document ? document : void 0))
        )
          return null;
        try {
          return e.activeElement || e.body;
        } catch (t) {
          return e.body;
        }
      }
      function Y(e, t) {
        var n = t.checked;
        return A({}, t, {
          defaultChecked: void 0,
          defaultValue: void 0,
          value: void 0,
          checked: null != n ? n : e._wrapperState.initialChecked,
        });
      }
      function X(e, t) {
        var n = null == t.defaultValue ? "" : t.defaultValue,
          r = null != t.checked ? t.checked : t.defaultChecked;
        (n = Q(null != t.value ? t.value : n)),
          (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled:
              "checkbox" === t.type || "radio" === t.type
                ? null != t.checked
                : null != t.value,
          });
      }
      function G(e, t) {
        null != (t = t.checked) && b(e, "checked", t, !1);
      }
      function J(e, t) {
        G(e, t);
        var n = Q(t.value),
          r = t.type;
        if (null != n)
          "number" === r
            ? ((0 === n && "" === e.value) || e.value != n) &&
              (e.value = "" + n)
            : e.value !== "" + n && (e.value = "" + n);
        else if ("submit" === r || "reset" === r)
          return void e.removeAttribute("value");
        t.hasOwnProperty("value")
          ? ee(e, t.type, n)
          : t.hasOwnProperty("defaultValue") &&
            ee(e, t.type, Q(t.defaultValue)),
          null == t.checked &&
            null != t.defaultChecked &&
            (e.defaultChecked = !!t.defaultChecked);
      }
      function Z(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
          var r = t.type;
          if (
            !(
              ("submit" !== r && "reset" !== r) ||
              (void 0 !== t.value && null !== t.value)
            )
          )
            return;
          (t = "" + e._wrapperState.initialValue),
            n || t === e.value || (e.value = t),
            (e.defaultValue = t);
        }
        "" !== (n = e.name) && (e.name = ""),
          (e.defaultChecked = !!e._wrapperState.initialChecked),
          "" !== n && (e.name = n);
      }
      function ee(e, t, n) {
        ("number" === t && q(e.ownerDocument) === e) ||
          (null == n
            ? (e.defaultValue = "" + e._wrapperState.initialValue)
            : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
      }
      var te = Array.isArray;
      function ne(e, t, n, r) {
        if (((e = e.options), t)) {
          t = {};
          for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
          for (n = 0; n < e.length; n++)
            (l = t.hasOwnProperty("$" + e[n].value)),
              e[n].selected !== l && (e[n].selected = l),
              l && r && (e[n].defaultSelected = !0);
        } else {
          for (n = "" + Q(n), t = null, l = 0; l < e.length; l++) {
            if (e[l].value === n)
              return (
                (e[l].selected = !0), void (r && (e[l].defaultSelected = !0))
              );
            null !== t || e[l].disabled || (t = e[l]);
          }
          null !== t && (t.selected = !0);
        }
      }
      function re(e, t) {
        if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
        return A({}, t, {
          value: void 0,
          defaultValue: void 0,
          children: "" + e._wrapperState.initialValue,
        });
      }
      function le(e, t) {
        var n = t.value;
        if (null == n) {
          if (((n = t.children), (t = t.defaultValue), null != n)) {
            if (null != t) throw Error(o(92));
            if (te(n)) {
              if (1 < n.length) throw Error(o(93));
              n = n[0];
            }
            t = n;
          }
          null == t && (t = ""), (n = t);
        }
        e._wrapperState = { initialValue: Q(n) };
      }
      function oe(e, t) {
        var n = Q(t.value),
          r = Q(t.defaultValue);
        null != n &&
          ((n = "" + n) !== e.value && (e.value = n),
          null == t.defaultValue &&
            e.defaultValue !== n &&
            (e.defaultValue = n)),
          null != r && (e.defaultValue = "" + r);
      }
      function ae(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue &&
          "" !== t &&
          null !== t &&
          (e.value = t);
      }
      function ie(e) {
        switch (e) {
          case "svg":
            return "http://www.w3.org/2000/svg";
          case "math":
            return "http://www.w3.org/1998/Math/MathML";
          default:
            return "http://www.w3.org/1999/xhtml";
        }
      }
      function ue(e, t) {
        return null == e || "http://www.w3.org/1999/xhtml" === e
          ? ie(t)
          : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
          ? "http://www.w3.org/1999/xhtml"
          : e;
      }
      var se,
        ce,
        fe =
          ((ce = function (e, t) {
            if (
              "http://www.w3.org/2000/svg" !== e.namespaceURI ||
              "innerHTML" in e
            )
              e.innerHTML = t;
            else {
              for (
                (se = se || document.createElement("div")).innerHTML =
                  "<svg>" + t.valueOf().toString() + "</svg>",
                  t = se.firstChild;
                e.firstChild;

              )
                e.removeChild(e.firstChild);
              for (; t.firstChild; ) e.appendChild(t.firstChild);
            }
          }),
          "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
            ? function (e, t, n, r) {
                MSApp.execUnsafeLocalFunction(function () {
                  return ce(e, t);
                });
              }
            : ce);
      function de(e, t) {
        if (t) {
          var n = e.firstChild;
          if (n && n === e.lastChild && 3 === n.nodeType)
            return void (n.nodeValue = t);
        }
        e.textContent = t;
      }
      var pe = {
          animationIterationCount: !0,
          aspectRatio: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          boxOrdinalGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexPositive: !0,
          flexShrink: !0,
          flexNegative: !0,
          flexOrder: !0,
          gridArea: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowSpan: !0,
          gridRowStart: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnSpan: !0,
          gridColumnStart: !0,
          fontWeight: !0,
          lineClamp: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          tabSize: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeDasharray: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0,
        },
        he = ["Webkit", "ms", "Moz", "O"];
      function me(e, t, n) {
        return null == t || "boolean" == typeof t || "" === t
          ? ""
          : n ||
            "number" != typeof t ||
            0 === t ||
            (pe.hasOwnProperty(e) && pe[e])
          ? ("" + t).trim()
          : t + "px";
      }
      function ge(e, t) {
        for (var n in ((e = e.style), t))
          if (t.hasOwnProperty(n)) {
            var r = 0 === n.indexOf("--"),
              l = me(n, t[n], r);
            "float" === n && (n = "cssFloat"),
              r ? e.setProperty(n, l) : (e[n] = l);
          }
      }
      Object.keys(pe).forEach(function (e) {
        he.forEach(function (t) {
          (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (pe[t] = pe[e]);
        });
      });
      var ve = A(
        { menuitem: !0 },
        {
          area: !0,
          base: !0,
          br: !0,
          col: !0,
          embed: !0,
          hr: !0,
          img: !0,
          input: !0,
          keygen: !0,
          link: !0,
          meta: !0,
          param: !0,
          source: !0,
          track: !0,
          wbr: !0,
        }
      );
      function ye(e, t) {
        if (t) {
          if (
            ve[e] &&
            (null != t.children || null != t.dangerouslySetInnerHTML)
          )
            throw Error(o(137, e));
          if (null != t.dangerouslySetInnerHTML) {
            if (null != t.children) throw Error(o(60));
            if (
              "object" != typeof t.dangerouslySetInnerHTML ||
              !("__html" in t.dangerouslySetInnerHTML)
            )
              throw Error(o(61));
          }
          if (null != t.style && "object" != typeof t.style) throw Error(o(62));
        }
      }
      function be(e, t) {
        if (-1 === e.indexOf("-")) return "string" == typeof t.is;
        switch (e) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return !1;
          default:
            return !0;
        }
      }
      var we = null;
      function ke(e) {
        return (
          (e = e.target || e.srcElement || window).correspondingUseElement &&
            (e = e.correspondingUseElement),
          3 === e.nodeType ? e.parentNode : e
        );
      }
      var Se = null,
        Ee = null,
        xe = null;
      function Ce(e) {
        if ((e = bl(e))) {
          if ("function" != typeof Se) throw Error(o(280));
          var t = e.stateNode;
          t && ((t = kl(t)), Se(e.stateNode, e.type, t));
        }
      }
      function Re(e) {
        Ee ? (xe ? xe.push(e) : (xe = [e])) : (Ee = e);
      }
      function Ne() {
        if (Ee) {
          var e = Ee,
            t = xe;
          if (((xe = Ee = null), Ce(e), t))
            for (e = 0; e < t.length; e++) Ce(t[e]);
        }
      }
      function Pe(e, t) {
        return e(t);
      }
      function _e() {}
      var Me = !1;
      function Le(e, t, n) {
        if (Me) return e(t, n);
        Me = !0;
        try {
          return Pe(e, t, n);
        } finally {
          (Me = !1), (null !== Ee || null !== xe) && (_e(), Ne());
        }
      }
      function Te(e, t) {
        var n = e.stateNode;
        if (null === n) return null;
        var r = kl(n);
        if (null === r) return null;
        n = r[t];
        e: switch (t) {
          case "onClick":
          case "onClickCapture":
          case "onDoubleClick":
          case "onDoubleClickCapture":
          case "onMouseDown":
          case "onMouseDownCapture":
          case "onMouseMove":
          case "onMouseMoveCapture":
          case "onMouseUp":
          case "onMouseUpCapture":
          case "onMouseEnter":
            (r = !r.disabled) ||
              (r = !(
                "button" === (e = e.type) ||
                "input" === e ||
                "select" === e ||
                "textarea" === e
              )),
              (e = !r);
            break e;
          default:
            e = !1;
        }
        if (e) return null;
        if (n && "function" != typeof n) throw Error(o(231, t, typeof n));
        return n;
      }
      var ze = !1;
      if (c)
        try {
          var Fe = {};
          Object.defineProperty(Fe, "passive", {
            get: function () {
              ze = !0;
            },
          }),
            window.addEventListener("test", Fe, Fe),
            window.removeEventListener("test", Fe, Fe);
        } catch (ce) {
          ze = !1;
        }
      function De(e, t, n, r, l, o, a, i, u) {
        var s = Array.prototype.slice.call(arguments, 3);
        try {
          t.apply(n, s);
        } catch (e) {
          this.onError(e);
        }
      }
      var Oe = !1,
        Ae = null,
        Ie = !1,
        Ue = null,
        Be = {
          onError: function (e) {
            (Oe = !0), (Ae = e);
          },
        };
      function He(e, t, n, r, l, o, a, i, u) {
        (Oe = !1), (Ae = null), De.apply(Be, arguments);
      }
      function Ve(e) {
        var t = e,
          n = e;
        if (e.alternate) for (; t.return; ) t = t.return;
        else {
          e = t;
          do {
            0 != (4098 & (t = e).flags) && (n = t.return), (e = t.return);
          } while (e);
        }
        return 3 === t.tag ? n : null;
      }
      function We(e) {
        if (13 === e.tag) {
          var t = e.memoizedState;
          if (
            (null === t && null !== (e = e.alternate) && (t = e.memoizedState),
            null !== t)
          )
            return t.dehydrated;
        }
        return null;
      }
      function Qe(e) {
        if (Ve(e) !== e) throw Error(o(188));
      }
      function je(e) {
        return null !==
          (e = (function (e) {
            var t = e.alternate;
            if (!t) {
              if (null === (t = Ve(e))) throw Error(o(188));
              return t !== e ? null : e;
            }
            for (var n = e, r = t; ; ) {
              var l = n.return;
              if (null === l) break;
              var a = l.alternate;
              if (null === a) {
                if (null !== (r = l.return)) {
                  n = r;
                  continue;
                }
                break;
              }
              if (l.child === a.child) {
                for (a = l.child; a; ) {
                  if (a === n) return Qe(l), e;
                  if (a === r) return Qe(l), t;
                  a = a.sibling;
                }
                throw Error(o(188));
              }
              if (n.return !== r.return) (n = l), (r = a);
              else {
                for (var i = !1, u = l.child; u; ) {
                  if (u === n) {
                    (i = !0), (n = l), (r = a);
                    break;
                  }
                  if (u === r) {
                    (i = !0), (r = l), (n = a);
                    break;
                  }
                  u = u.sibling;
                }
                if (!i) {
                  for (u = a.child; u; ) {
                    if (u === n) {
                      (i = !0), (n = a), (r = l);
                      break;
                    }
                    if (u === r) {
                      (i = !0), (r = a), (n = l);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!i) throw Error(o(189));
                }
              }
              if (n.alternate !== r) throw Error(o(190));
            }
            if (3 !== n.tag) throw Error(o(188));
            return n.stateNode.current === n ? e : t;
          })(e))
          ? Ke(e)
          : null;
      }
      function Ke(e) {
        if (5 === e.tag || 6 === e.tag) return e;
        for (e = e.child; null !== e; ) {
          var t = Ke(e);
          if (null !== t) return t;
          e = e.sibling;
        }
        return null;
      }
      var $e = l.unstable_scheduleCallback,
        qe = l.unstable_cancelCallback,
        Ye = l.unstable_shouldYield,
        Xe = l.unstable_requestPaint,
        Ge = l.unstable_now,
        Je = l.unstable_getCurrentPriorityLevel,
        Ze = l.unstable_ImmediatePriority,
        et = l.unstable_UserBlockingPriority,
        tt = l.unstable_NormalPriority,
        nt = l.unstable_LowPriority,
        rt = l.unstable_IdlePriority,
        lt = null,
        ot = null,
        at = Math.clz32
          ? Math.clz32
          : function (e) {
              return 0 === (e >>>= 0) ? 32 : (31 - ((it(e) / ut) | 0)) | 0;
            },
        it = Math.log,
        ut = Math.LN2,
        st = 64,
        ct = 4194304;
      function ft(e) {
        switch (e & -e) {
          case 1:
            return 1;
          case 2:
            return 2;
          case 4:
            return 4;
          case 8:
            return 8;
          case 16:
            return 16;
          case 32:
            return 32;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return 4194240 & e;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return 130023424 & e;
          case 134217728:
            return 134217728;
          case 268435456:
            return 268435456;
          case 536870912:
            return 536870912;
          case 1073741824:
            return 1073741824;
          default:
            return e;
        }
      }
      function dt(e, t) {
        var n = e.pendingLanes;
        if (0 === n) return 0;
        var r = 0,
          l = e.suspendedLanes,
          o = e.pingedLanes,
          a = 268435455 & n;
        if (0 !== a) {
          var i = a & ~l;
          0 !== i ? (r = ft(i)) : 0 != (o &= a) && (r = ft(o));
        } else 0 != (a = n & ~l) ? (r = ft(a)) : 0 !== o && (r = ft(o));
        if (0 === r) return 0;
        if (
          0 !== t &&
          t !== r &&
          0 == (t & l) &&
          ((l = r & -r) >= (o = t & -t) || (16 === l && 0 != (4194240 & o)))
        )
          return t;
        if ((0 != (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
          for (e = e.entanglements, t &= r; 0 < t; )
            (l = 1 << (n = 31 - at(t))), (r |= e[n]), (t &= ~l);
        return r;
      }
      function pt(e, t) {
        switch (e) {
          case 1:
          case 2:
          case 4:
            return t + 250;
          case 8:
          case 16:
          case 32:
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return t + 5e3;
          default:
            return -1;
        }
      }
      function ht(e) {
        return 0 != (e = -1073741825 & e.pendingLanes)
          ? e
          : 1073741824 & e
          ? 1073741824
          : 0;
      }
      function mt() {
        var e = st;
        return 0 == (4194240 & (st <<= 1)) && (st = 64), e;
      }
      function gt(e) {
        for (var t = [], n = 0; 31 > n; n++) t.push(e);
        return t;
      }
      function vt(e, t, n) {
        (e.pendingLanes |= t),
          536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
          ((e = e.eventTimes)[(t = 31 - at(t))] = n);
      }
      function yt(e, t) {
        var n = (e.entangledLanes |= t);
        for (e = e.entanglements; n; ) {
          var r = 31 - at(n),
            l = 1 << r;
          (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
        }
      }
      var bt = 0;
      function wt(e) {
        return 1 < (e &= -e)
          ? 4 < e
            ? 0 != (268435455 & e)
              ? 16
              : 536870912
            : 4
          : 1;
      }
      var kt,
        St,
        Et,
        xt,
        Ct,
        Rt = !1,
        Nt = [],
        Pt = null,
        _t = null,
        Mt = null,
        Lt = new Map(),
        Tt = new Map(),
        zt = [],
        Ft =
          "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
            " "
          );
      function Dt(e, t) {
        switch (e) {
          case "focusin":
          case "focusout":
            Pt = null;
            break;
          case "dragenter":
          case "dragleave":
            _t = null;
            break;
          case "mouseover":
          case "mouseout":
            Mt = null;
            break;
          case "pointerover":
          case "pointerout":
            Lt.delete(t.pointerId);
            break;
          case "gotpointercapture":
          case "lostpointercapture":
            Tt.delete(t.pointerId);
        }
      }
      function Ot(e, t, n, r, l, o) {
        return null === e || e.nativeEvent !== o
          ? ((e = {
              blockedOn: t,
              domEventName: n,
              eventSystemFlags: r,
              nativeEvent: o,
              targetContainers: [l],
            }),
            null !== t && null !== (t = bl(t)) && St(t),
            e)
          : ((e.eventSystemFlags |= r),
            (t = e.targetContainers),
            null !== l && -1 === t.indexOf(l) && t.push(l),
            e);
      }
      function At(e) {
        var t = yl(e.target);
        if (null !== t) {
          var n = Ve(t);
          if (null !== n)
            if (13 === (t = n.tag)) {
              if (null !== (t = We(n)))
                return (
                  (e.blockedOn = t),
                  void Ct(e.priority, function () {
                    Et(n);
                  })
                );
            } else if (
              3 === t &&
              n.stateNode.current.memoizedState.isDehydrated
            )
              return void (e.blockedOn =
                3 === n.tag ? n.stateNode.containerInfo : null);
        }
        e.blockedOn = null;
      }
      function It(e) {
        if (null !== e.blockedOn) return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
          var n = Yt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
          if (null !== n)
            return null !== (t = bl(n)) && St(t), (e.blockedOn = n), !1;
          var r = new (n = e.nativeEvent).constructor(n.type, n);
          (we = r), n.target.dispatchEvent(r), (we = null), t.shift();
        }
        return !0;
      }
      function Ut(e, t, n) {
        It(e) && n.delete(t);
      }
      function Bt() {
        (Rt = !1),
          null !== Pt && It(Pt) && (Pt = null),
          null !== _t && It(_t) && (_t = null),
          null !== Mt && It(Mt) && (Mt = null),
          Lt.forEach(Ut),
          Tt.forEach(Ut);
      }
      function Ht(e, t) {
        e.blockedOn === t &&
          ((e.blockedOn = null),
          Rt ||
            ((Rt = !0),
            l.unstable_scheduleCallback(l.unstable_NormalPriority, Bt)));
      }
      function Vt(e) {
        function t(t) {
          return Ht(t, e);
        }
        if (0 < Nt.length) {
          Ht(Nt[0], e);
          for (var n = 1; n < Nt.length; n++) {
            var r = Nt[n];
            r.blockedOn === e && (r.blockedOn = null);
          }
        }
        for (
          null !== Pt && Ht(Pt, e),
            null !== _t && Ht(_t, e),
            null !== Mt && Ht(Mt, e),
            Lt.forEach(t),
            Tt.forEach(t),
            n = 0;
          n < zt.length;
          n++
        )
          (r = zt[n]).blockedOn === e && (r.blockedOn = null);
        for (; 0 < zt.length && null === (n = zt[0]).blockedOn; )
          At(n), null === n.blockedOn && zt.shift();
      }
      var Wt = w.ReactCurrentBatchConfig,
        Qt = !0;
      function jt(e, t, n, r) {
        var l = bt,
          o = Wt.transition;
        Wt.transition = null;
        try {
          (bt = 1), $t(e, t, n, r);
        } finally {
          (bt = l), (Wt.transition = o);
        }
      }
      function Kt(e, t, n, r) {
        var l = bt,
          o = Wt.transition;
        Wt.transition = null;
        try {
          (bt = 4), $t(e, t, n, r);
        } finally {
          (bt = l), (Wt.transition = o);
        }
      }
      function $t(e, t, n, r) {
        if (Qt) {
          var l = Yt(e, t, n, r);
          if (null === l) Qr(e, t, r, qt, n), Dt(e, r);
          else if (
            (function (e, t, n, r, l) {
              switch (t) {
                case "focusin":
                  return (Pt = Ot(Pt, e, t, n, r, l)), !0;
                case "dragenter":
                  return (_t = Ot(_t, e, t, n, r, l)), !0;
                case "mouseover":
                  return (Mt = Ot(Mt, e, t, n, r, l)), !0;
                case "pointerover":
                  var o = l.pointerId;
                  return Lt.set(o, Ot(Lt.get(o) || null, e, t, n, r, l)), !0;
                case "gotpointercapture":
                  return (
                    (o = l.pointerId),
                    Tt.set(o, Ot(Tt.get(o) || null, e, t, n, r, l)),
                    !0
                  );
              }
              return !1;
            })(l, e, t, n, r)
          )
            r.stopPropagation();
          else if ((Dt(e, r), 4 & t && -1 < Ft.indexOf(e))) {
            for (; null !== l; ) {
              var o = bl(l);
              if (
                (null !== o && kt(o),
                null === (o = Yt(e, t, n, r)) && Qr(e, t, r, qt, n),
                o === l)
              )
                break;
              l = o;
            }
            null !== l && r.stopPropagation();
          } else Qr(e, t, r, null, n);
        }
      }
      var qt = null;
      function Yt(e, t, n, r) {
        if (((qt = null), null !== (e = yl((e = ke(r))))))
          if (null === (t = Ve(e))) e = null;
          else if (13 === (n = t.tag)) {
            if (null !== (e = We(t))) return e;
            e = null;
          } else if (3 === n) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return 3 === t.tag ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        return (qt = e), null;
      }
      function Xt(e) {
        switch (e) {
          case "cancel":
          case "click":
          case "close":
          case "contextmenu":
          case "copy":
          case "cut":
          case "auxclick":
          case "dblclick":
          case "dragend":
          case "dragstart":
          case "drop":
          case "focusin":
          case "focusout":
          case "input":
          case "invalid":
          case "keydown":
          case "keypress":
          case "keyup":
          case "mousedown":
          case "mouseup":
          case "paste":
          case "pause":
          case "play":
          case "pointercancel":
          case "pointerdown":
          case "pointerup":
          case "ratechange":
          case "reset":
          case "resize":
          case "seeked":
          case "submit":
          case "touchcancel":
          case "touchend":
          case "touchstart":
          case "volumechange":
          case "change":
          case "selectionchange":
          case "textInput":
          case "compositionstart":
          case "compositionend":
          case "compositionupdate":
          case "beforeblur":
          case "afterblur":
          case "beforeinput":
          case "blur":
          case "fullscreenchange":
          case "focus":
          case "hashchange":
          case "popstate":
          case "select":
          case "selectstart":
            return 1;
          case "drag":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "mousemove":
          case "mouseout":
          case "mouseover":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "scroll":
          case "toggle":
          case "touchmove":
          case "wheel":
          case "mouseenter":
          case "mouseleave":
          case "pointerenter":
          case "pointerleave":
            return 4;
          case "message":
            switch (Je()) {
              case Ze:
                return 1;
              case et:
                return 4;
              case tt:
              case nt:
                return 16;
              case rt:
                return 536870912;
              default:
                return 16;
            }
          default:
            return 16;
        }
      }
      var Gt = null,
        Jt = null,
        Zt = null;
      function en() {
        if (Zt) return Zt;
        var e,
          t,
          n = Jt,
          r = n.length,
          l = "value" in Gt ? Gt.value : Gt.textContent,
          o = l.length;
        for (e = 0; e < r && n[e] === l[e]; e++);
        var a = r - e;
        for (t = 1; t <= a && n[r - t] === l[o - t]; t++);
        return (Zt = l.slice(e, 1 < t ? 1 - t : void 0));
      }
      function tn(e) {
        var t = e.keyCode;
        return (
          "charCode" in e
            ? 0 === (e = e.charCode) && 13 === t && (e = 13)
            : (e = t),
          10 === e && (e = 13),
          32 <= e || 13 === e ? e : 0
        );
      }
      function nn() {
        return !0;
      }
      function rn() {
        return !1;
      }
      function ln(e) {
        function t(t, n, r, l, o) {
          for (var a in ((this._reactName = t),
          (this._targetInst = r),
          (this.type = n),
          (this.nativeEvent = l),
          (this.target = o),
          (this.currentTarget = null),
          e))
            e.hasOwnProperty(a) && ((t = e[a]), (this[a] = t ? t(l) : l[a]));
          return (
            (this.isDefaultPrevented = (
              null != l.defaultPrevented
                ? l.defaultPrevented
                : !1 === l.returnValue
            )
              ? nn
              : rn),
            (this.isPropagationStopped = rn),
            this
          );
        }
        return (
          A(t.prototype, {
            preventDefault: function () {
              this.defaultPrevented = !0;
              var e = this.nativeEvent;
              e &&
                (e.preventDefault
                  ? e.preventDefault()
                  : "unknown" != typeof e.returnValue && (e.returnValue = !1),
                (this.isDefaultPrevented = nn));
            },
            stopPropagation: function () {
              var e = this.nativeEvent;
              e &&
                (e.stopPropagation
                  ? e.stopPropagation()
                  : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
                (this.isPropagationStopped = nn));
            },
            persist: function () {},
            isPersistent: nn,
          }),
          t
        );
      }
      var on,
        an,
        un,
        sn = {
          eventPhase: 0,
          bubbles: 0,
          cancelable: 0,
          timeStamp: function (e) {
            return e.timeStamp || Date.now();
          },
          defaultPrevented: 0,
          isTrusted: 0,
        },
        cn = ln(sn),
        fn = A({}, sn, { view: 0, detail: 0 }),
        dn = ln(fn),
        pn = A({}, fn, {
          screenX: 0,
          screenY: 0,
          clientX: 0,
          clientY: 0,
          pageX: 0,
          pageY: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          getModifierState: Cn,
          button: 0,
          buttons: 0,
          relatedTarget: function (e) {
            return void 0 === e.relatedTarget
              ? e.fromElement === e.srcElement
                ? e.toElement
                : e.fromElement
              : e.relatedTarget;
          },
          movementX: function (e) {
            return "movementX" in e
              ? e.movementX
              : (e !== un &&
                  (un && "mousemove" === e.type
                    ? ((on = e.screenX - un.screenX),
                      (an = e.screenY - un.screenY))
                    : (an = on = 0),
                  (un = e)),
                on);
          },
          movementY: function (e) {
            return "movementY" in e ? e.movementY : an;
          },
        }),
        hn = ln(pn),
        mn = ln(A({}, pn, { dataTransfer: 0 })),
        gn = ln(A({}, fn, { relatedTarget: 0 })),
        vn = ln(
          A({}, sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
        ),
        yn = A({}, sn, {
          clipboardData: function (e) {
            return "clipboardData" in e
              ? e.clipboardData
              : window.clipboardData;
          },
        }),
        bn = ln(yn),
        wn = ln(A({}, sn, { data: 0 })),
        kn = {
          Esc: "Escape",
          Spacebar: " ",
          Left: "ArrowLeft",
          Up: "ArrowUp",
          Right: "ArrowRight",
          Down: "ArrowDown",
          Del: "Delete",
          Win: "OS",
          Menu: "ContextMenu",
          Apps: "ContextMenu",
          Scroll: "ScrollLock",
          MozPrintableKey: "Unidentified",
        },
        Sn = {
          8: "Backspace",
          9: "Tab",
          12: "Clear",
          13: "Enter",
          16: "Shift",
          17: "Control",
          18: "Alt",
          19: "Pause",
          20: "CapsLock",
          27: "Escape",
          32: " ",
          33: "PageUp",
          34: "PageDown",
          35: "End",
          36: "Home",
          37: "ArrowLeft",
          38: "ArrowUp",
          39: "ArrowRight",
          40: "ArrowDown",
          45: "Insert",
          46: "Delete",
          112: "F1",
          113: "F2",
          114: "F3",
          115: "F4",
          116: "F5",
          117: "F6",
          118: "F7",
          119: "F8",
          120: "F9",
          121: "F10",
          122: "F11",
          123: "F12",
          144: "NumLock",
          145: "ScrollLock",
          224: "Meta",
        },
        En = {
          Alt: "altKey",
          Control: "ctrlKey",
          Meta: "metaKey",
          Shift: "shiftKey",
        };
      function xn(e) {
        var t = this.nativeEvent;
        return t.getModifierState
          ? t.getModifierState(e)
          : !!(e = En[e]) && !!t[e];
      }
      function Cn() {
        return xn;
      }
      var Rn = A({}, fn, {
          key: function (e) {
            if (e.key) {
              var t = kn[e.key] || e.key;
              if ("Unidentified" !== t) return t;
            }
            return "keypress" === e.type
              ? 13 === (e = tn(e))
                ? "Enter"
                : String.fromCharCode(e)
              : "keydown" === e.type || "keyup" === e.type
              ? Sn[e.keyCode] || "Unidentified"
              : "";
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: Cn,
          charCode: function (e) {
            return "keypress" === e.type ? tn(e) : 0;
          },
          keyCode: function (e) {
            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
          },
          which: function (e) {
            return "keypress" === e.type
              ? tn(e)
              : "keydown" === e.type || "keyup" === e.type
              ? e.keyCode
              : 0;
          },
        }),
        Nn = ln(Rn),
        Pn = ln(
          A({}, pn, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0,
          })
        ),
        _n = ln(
          A({}, fn, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: Cn,
          })
        ),
        Mn = ln(
          A({}, sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
        ),
        Ln = A({}, pn, {
          deltaX: function (e) {
            return "deltaX" in e
              ? e.deltaX
              : "wheelDeltaX" in e
              ? -e.wheelDeltaX
              : 0;
          },
          deltaY: function (e) {
            return "deltaY" in e
              ? e.deltaY
              : "wheelDeltaY" in e
              ? -e.wheelDeltaY
              : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
          },
          deltaZ: 0,
          deltaMode: 0,
        }),
        Tn = ln(Ln),
        zn = [9, 13, 27, 32],
        Fn = c && "CompositionEvent" in window,
        Dn = null;
      c && "documentMode" in document && (Dn = document.documentMode);
      var On = c && "TextEvent" in window && !Dn,
        An = c && (!Fn || (Dn && 8 < Dn && 11 >= Dn)),
        In = String.fromCharCode(32),
        Un = !1;
      function Bn(e, t) {
        switch (e) {
          case "keyup":
            return -1 !== zn.indexOf(t.keyCode);
          case "keydown":
            return 229 !== t.keyCode;
          case "keypress":
          case "mousedown":
          case "focusout":
            return !0;
          default:
            return !1;
        }
      }
      function Hn(e) {
        return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
      }
      var Vn = !1,
        Wn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
      function Qn(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return "input" === t ? !!Wn[e.type] : "textarea" === t;
      }
      function jn(e, t, n, r) {
        Re(r),
          0 < (t = Kr(t, "onChange")).length &&
            ((n = new cn("onChange", "change", null, n, r)),
            e.push({ event: n, listeners: t }));
      }
      var Kn = null,
        $n = null;
      function qn(e) {
        Ir(e, 0);
      }
      function Yn(e) {
        if ($(wl(e))) return e;
      }
      function Xn(e, t) {
        if ("change" === e) return t;
      }
      var Gn = !1;
      if (c) {
        var Jn;
        if (c) {
          var Zn = "oninput" in document;
          if (!Zn) {
            var er = document.createElement("div");
            er.setAttribute("oninput", "return;"),
              (Zn = "function" == typeof er.oninput);
          }
          Jn = Zn;
        } else Jn = !1;
        Gn = Jn && (!document.documentMode || 9 < document.documentMode);
      }
      function tr() {
        Kn && (Kn.detachEvent("onpropertychange", nr), ($n = Kn = null));
      }
      function nr(e) {
        if ("value" === e.propertyName && Yn($n)) {
          var t = [];
          jn(t, $n, e, ke(e)), Le(qn, t);
        }
      }
      function rr(e, t, n) {
        "focusin" === e
          ? (tr(), ($n = n), (Kn = t).attachEvent("onpropertychange", nr))
          : "focusout" === e && tr();
      }
      function lr(e) {
        if ("selectionchange" === e || "keyup" === e || "keydown" === e)
          return Yn($n);
      }
      function or(e, t) {
        if ("click" === e) return Yn(t);
      }
      function ar(e, t) {
        if ("input" === e || "change" === e) return Yn(t);
      }
      var ir =
        "function" == typeof Object.is
          ? Object.is
          : function (e, t) {
              return (
                (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
              );
            };
      function ur(e, t) {
        if (ir(e, t)) return !0;
        if (
          "object" != typeof e ||
          null === e ||
          "object" != typeof t ||
          null === t
        )
          return !1;
        var n = Object.keys(e),
          r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (r = 0; r < n.length; r++) {
          var l = n[r];
          if (!f.call(t, l) || !ir(e[l], t[l])) return !1;
        }
        return !0;
      }
      function sr(e) {
        for (; e && e.firstChild; ) e = e.firstChild;
        return e;
      }
      function cr(e, t) {
        var n,
          r = sr(e);
        for (e = 0; r; ) {
          if (3 === r.nodeType) {
            if (((n = e + r.textContent.length), e <= t && n >= t))
              return { node: r, offset: t - e };
            e = n;
          }
          e: {
            for (; r; ) {
              if (r.nextSibling) {
                r = r.nextSibling;
                break e;
              }
              r = r.parentNode;
            }
            r = void 0;
          }
          r = sr(r);
        }
      }
      function fr(e, t) {
        return (
          !(!e || !t) &&
          (e === t ||
            ((!e || 3 !== e.nodeType) &&
              (t && 3 === t.nodeType
                ? fr(e, t.parentNode)
                : "contains" in e
                ? e.contains(t)
                : !!e.compareDocumentPosition &&
                  !!(16 & e.compareDocumentPosition(t)))))
        );
      }
      function dr() {
        for (var e = window, t = q(); t instanceof e.HTMLIFrameElement; ) {
          try {
            var n = "string" == typeof t.contentWindow.location.href;
          } catch (e) {
            n = !1;
          }
          if (!n) break;
          t = q((e = t.contentWindow).document);
        }
        return t;
      }
      function pr(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return (
          t &&
          (("input" === t &&
            ("text" === e.type ||
              "search" === e.type ||
              "tel" === e.type ||
              "url" === e.type ||
              "password" === e.type)) ||
            "textarea" === t ||
            "true" === e.contentEditable)
        );
      }
      function hr(e) {
        var t = dr(),
          n = e.focusedElem,
          r = e.selectionRange;
        if (
          t !== n &&
          n &&
          n.ownerDocument &&
          fr(n.ownerDocument.documentElement, n)
        ) {
          if (null !== r && pr(n))
            if (
              ((t = r.start),
              void 0 === (e = r.end) && (e = t),
              "selectionStart" in n)
            )
              (n.selectionStart = t),
                (n.selectionEnd = Math.min(e, n.value.length));
            else if (
              (e =
                ((t = n.ownerDocument || document) && t.defaultView) || window)
                .getSelection
            ) {
              e = e.getSelection();
              var l = n.textContent.length,
                o = Math.min(r.start, l);
              (r = void 0 === r.end ? o : Math.min(r.end, l)),
                !e.extend && o > r && ((l = r), (r = o), (o = l)),
                (l = cr(n, o));
              var a = cr(n, r);
              l &&
                a &&
                (1 !== e.rangeCount ||
                  e.anchorNode !== l.node ||
                  e.anchorOffset !== l.offset ||
                  e.focusNode !== a.node ||
                  e.focusOffset !== a.offset) &&
                ((t = t.createRange()).setStart(l.node, l.offset),
                e.removeAllRanges(),
                o > r
                  ? (e.addRange(t), e.extend(a.node, a.offset))
                  : (t.setEnd(a.node, a.offset), e.addRange(t)));
            }
          for (t = [], e = n; (e = e.parentNode); )
            1 === e.nodeType &&
              t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
          for (
            "function" == typeof n.focus && n.focus(), n = 0;
            n < t.length;
            n++
          )
            ((e = t[n]).element.scrollLeft = e.left),
              (e.element.scrollTop = e.top);
        }
      }
      var mr = c && "documentMode" in document && 11 >= document.documentMode,
        gr = null,
        vr = null,
        yr = null,
        br = !1;
      function wr(e, t, n) {
        var r =
          n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
        br ||
          null == gr ||
          gr !== q(r) ||
          ((r =
            "selectionStart" in (r = gr) && pr(r)
              ? { start: r.selectionStart, end: r.selectionEnd }
              : {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
          (yr && ur(yr, r)) ||
            ((yr = r),
            0 < (r = Kr(vr, "onSelect")).length &&
              ((t = new cn("onSelect", "select", null, t, n)),
              e.push({ event: t, listeners: r }),
              (t.target = gr))));
      }
      function kr(e, t) {
        var n = {};
        return (
          (n[e.toLowerCase()] = t.toLowerCase()),
          (n["Webkit" + e] = "webkit" + t),
          (n["Moz" + e] = "moz" + t),
          n
        );
      }
      var Sr = {
          animationend: kr("Animation", "AnimationEnd"),
          animationiteration: kr("Animation", "AnimationIteration"),
          animationstart: kr("Animation", "AnimationStart"),
          transitionend: kr("Transition", "TransitionEnd"),
        },
        Er = {},
        xr = {};
      function Cr(e) {
        if (Er[e]) return Er[e];
        if (!Sr[e]) return e;
        var t,
          n = Sr[e];
        for (t in n) if (n.hasOwnProperty(t) && t in xr) return (Er[e] = n[t]);
        return e;
      }
      c &&
        ((xr = document.createElement("div").style),
        "AnimationEvent" in window ||
          (delete Sr.animationend.animation,
          delete Sr.animationiteration.animation,
          delete Sr.animationstart.animation),
        "TransitionEvent" in window || delete Sr.transitionend.transition);
      var Rr = Cr("animationend"),
        Nr = Cr("animationiteration"),
        Pr = Cr("animationstart"),
        _r = Cr("transitionend"),
        Mr = new Map(),
        Lr =
          "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
            " "
          );
      function Tr(e, t) {
        Mr.set(e, t), u(t, [e]);
      }
      for (var zr = 0; zr < Lr.length; zr++) {
        var Fr = Lr[zr];
        Tr(Fr.toLowerCase(), "on" + (Fr[0].toUpperCase() + Fr.slice(1)));
      }
      Tr(Rr, "onAnimationEnd"),
        Tr(Nr, "onAnimationIteration"),
        Tr(Pr, "onAnimationStart"),
        Tr("dblclick", "onDoubleClick"),
        Tr("focusin", "onFocus"),
        Tr("focusout", "onBlur"),
        Tr(_r, "onTransitionEnd"),
        s("onMouseEnter", ["mouseout", "mouseover"]),
        s("onMouseLeave", ["mouseout", "mouseover"]),
        s("onPointerEnter", ["pointerout", "pointerover"]),
        s("onPointerLeave", ["pointerout", "pointerover"]),
        u(
          "onChange",
          "change click focusin focusout input keydown keyup selectionchange".split(
            " "
          )
        ),
        u(
          "onSelect",
          "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
            " "
          )
        ),
        u("onBeforeInput", [
          "compositionend",
          "keypress",
          "textInput",
          "paste",
        ]),
        u(
          "onCompositionEnd",
          "compositionend focusout keydown keypress keyup mousedown".split(" ")
        ),
        u(
          "onCompositionStart",
          "compositionstart focusout keydown keypress keyup mousedown".split(
            " "
          )
        ),
        u(
          "onCompositionUpdate",
          "compositionupdate focusout keydown keypress keyup mousedown".split(
            " "
          )
        );
      var Dr =
          "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
            " "
          ),
        Or = new Set(
          "cancel close invalid load scroll toggle".split(" ").concat(Dr)
        );
      function Ar(e, t, n) {
        var r = e.type || "unknown-event";
        (e.currentTarget = n),
          (function (e, t, n, r, l, a, i, u, s) {
            if ((He.apply(this, arguments), Oe)) {
              if (!Oe) throw Error(o(198));
              var c = Ae;
              (Oe = !1), (Ae = null), Ie || ((Ie = !0), (Ue = c));
            }
          })(r, t, void 0, e),
          (e.currentTarget = null);
      }
      function Ir(e, t) {
        t = 0 != (4 & t);
        for (var n = 0; n < e.length; n++) {
          var r = e[n],
            l = r.event;
          r = r.listeners;
          e: {
            var o = void 0;
            if (t)
              for (var a = r.length - 1; 0 <= a; a--) {
                var i = r[a],
                  u = i.instance,
                  s = i.currentTarget;
                if (((i = i.listener), u !== o && l.isPropagationStopped()))
                  break e;
                Ar(l, i, s), (o = u);
              }
            else
              for (a = 0; a < r.length; a++) {
                if (
                  ((u = (i = r[a]).instance),
                  (s = i.currentTarget),
                  (i = i.listener),
                  u !== o && l.isPropagationStopped())
                )
                  break e;
                Ar(l, i, s), (o = u);
              }
          }
        }
        if (Ie) throw ((e = Ue), (Ie = !1), (Ue = null), e);
      }
      function Ur(e, t) {
        var n = t[ml];
        void 0 === n && (n = t[ml] = new Set());
        var r = e + "__bubble";
        n.has(r) || (Wr(t, e, 2, !1), n.add(r));
      }
      function Br(e, t, n) {
        var r = 0;
        t && (r |= 4), Wr(n, e, r, t);
      }
      var Hr = "_reactListening" + Math.random().toString(36).slice(2);
      function Vr(e) {
        if (!e[Hr]) {
          (e[Hr] = !0),
            a.forEach(function (t) {
              "selectionchange" !== t &&
                (Or.has(t) || Br(t, !1, e), Br(t, !0, e));
            });
          var t = 9 === e.nodeType ? e : e.ownerDocument;
          null === t || t[Hr] || ((t[Hr] = !0), Br("selectionchange", !1, t));
        }
      }
      function Wr(e, t, n, r) {
        switch (Xt(t)) {
          case 1:
            var l = jt;
            break;
          case 4:
            l = Kt;
            break;
          default:
            l = $t;
        }
        (n = l.bind(null, t, n, e)),
          (l = void 0),
          !ze ||
            ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
            (l = !0),
          r
            ? void 0 !== l
              ? e.addEventListener(t, n, { capture: !0, passive: l })
              : e.addEventListener(t, n, !0)
            : void 0 !== l
            ? e.addEventListener(t, n, { passive: l })
            : e.addEventListener(t, n, !1);
      }
      function Qr(e, t, n, r, l) {
        var o = r;
        if (0 == (1 & t) && 0 == (2 & t) && null !== r)
          e: for (;;) {
            if (null === r) return;
            var a = r.tag;
            if (3 === a || 4 === a) {
              var i = r.stateNode.containerInfo;
              if (i === l || (8 === i.nodeType && i.parentNode === l)) break;
              if (4 === a)
                for (a = r.return; null !== a; ) {
                  var u = a.tag;
                  if (
                    (3 === u || 4 === u) &&
                    ((u = a.stateNode.containerInfo) === l ||
                      (8 === u.nodeType && u.parentNode === l))
                  )
                    return;
                  a = a.return;
                }
              for (; null !== i; ) {
                if (null === (a = yl(i))) return;
                if (5 === (u = a.tag) || 6 === u) {
                  r = o = a;
                  continue e;
                }
                i = i.parentNode;
              }
            }
            r = r.return;
          }
        Le(function () {
          var r = o,
            l = ke(n),
            a = [];
          e: {
            var i = Mr.get(e);
            if (void 0 !== i) {
              var u = cn,
                s = e;
              switch (e) {
                case "keypress":
                  if (0 === tn(n)) break e;
                case "keydown":
                case "keyup":
                  u = Nn;
                  break;
                case "focusin":
                  (s = "focus"), (u = gn);
                  break;
                case "focusout":
                  (s = "blur"), (u = gn);
                  break;
                case "beforeblur":
                case "afterblur":
                  u = gn;
                  break;
                case "click":
                  if (2 === n.button) break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                  u = hn;
                  break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                  u = mn;
                  break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  u = _n;
                  break;
                case Rr:
                case Nr:
                case Pr:
                  u = vn;
                  break;
                case _r:
                  u = Mn;
                  break;
                case "scroll":
                  u = dn;
                  break;
                case "wheel":
                  u = Tn;
                  break;
                case "copy":
                case "cut":
                case "paste":
                  u = bn;
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  u = Pn;
              }
              var c = 0 != (4 & t),
                f = !c && "scroll" === e,
                d = c ? (null !== i ? i + "Capture" : null) : i;
              c = [];
              for (var p, h = r; null !== h; ) {
                var m = (p = h).stateNode;
                if (
                  (5 === p.tag &&
                    null !== m &&
                    ((p = m),
                    null !== d &&
                      null != (m = Te(h, d)) &&
                      c.push(jr(h, m, p))),
                  f)
                )
                  break;
                h = h.return;
              }
              0 < c.length &&
                ((i = new u(i, s, null, n, l)),
                a.push({ event: i, listeners: c }));
            }
          }
          if (0 == (7 & t)) {
            if (
              ((u = "mouseout" === e || "pointerout" === e),
              (!(i = "mouseover" === e || "pointerover" === e) ||
                n === we ||
                !(s = n.relatedTarget || n.fromElement) ||
                (!yl(s) && !s[hl])) &&
                (u || i) &&
                ((i =
                  l.window === l
                    ? l
                    : (i = l.ownerDocument)
                    ? i.defaultView || i.parentWindow
                    : window),
                u
                  ? ((u = r),
                    null !==
                      (s = (s = n.relatedTarget || n.toElement)
                        ? yl(s)
                        : null) &&
                      (s !== (f = Ve(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                      (s = null))
                  : ((u = null), (s = r)),
                u !== s))
            ) {
              if (
                ((c = hn),
                (m = "onMouseLeave"),
                (d = "onMouseEnter"),
                (h = "mouse"),
                ("pointerout" !== e && "pointerover" !== e) ||
                  ((c = Pn),
                  (m = "onPointerLeave"),
                  (d = "onPointerEnter"),
                  (h = "pointer")),
                (f = null == u ? i : wl(u)),
                (p = null == s ? i : wl(s)),
                ((i = new c(m, h + "leave", u, n, l)).target = f),
                (i.relatedTarget = p),
                (m = null),
                yl(l) === r &&
                  (((c = new c(d, h + "enter", s, n, l)).target = p),
                  (c.relatedTarget = f),
                  (m = c)),
                (f = m),
                u && s)
              )
                e: {
                  for (d = s, h = 0, p = c = u; p; p = $r(p)) h++;
                  for (p = 0, m = d; m; m = $r(m)) p++;
                  for (; 0 < h - p; ) (c = $r(c)), h--;
                  for (; 0 < p - h; ) (d = $r(d)), p--;
                  for (; h--; ) {
                    if (c === d || (null !== d && c === d.alternate)) break e;
                    (c = $r(c)), (d = $r(d));
                  }
                  c = null;
                }
              else c = null;
              null !== u && qr(a, i, u, c, !1),
                null !== s && null !== f && qr(a, f, s, c, !0);
            }
            if (
              "select" ===
                (u =
                  (i = r ? wl(r) : window).nodeName &&
                  i.nodeName.toLowerCase()) ||
              ("input" === u && "file" === i.type)
            )
              var g = Xn;
            else if (Qn(i))
              if (Gn) g = ar;
              else {
                g = lr;
                var v = rr;
              }
            else
              (u = i.nodeName) &&
                "input" === u.toLowerCase() &&
                ("checkbox" === i.type || "radio" === i.type) &&
                (g = or);
            switch (
              (g && (g = g(e, r))
                ? jn(a, g, n, l)
                : (v && v(e, i, r),
                  "focusout" === e &&
                    (v = i._wrapperState) &&
                    v.controlled &&
                    "number" === i.type &&
                    ee(i, "number", i.value)),
              (v = r ? wl(r) : window),
              e)
            ) {
              case "focusin":
                (Qn(v) || "true" === v.contentEditable) &&
                  ((gr = v), (vr = r), (yr = null));
                break;
              case "focusout":
                yr = vr = gr = null;
                break;
              case "mousedown":
                br = !0;
                break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                (br = !1), wr(a, n, l);
                break;
              case "selectionchange":
                if (mr) break;
              case "keydown":
              case "keyup":
                wr(a, n, l);
            }
            var y;
            if (Fn)
              e: {
                switch (e) {
                  case "compositionstart":
                    var b = "onCompositionStart";
                    break e;
                  case "compositionend":
                    b = "onCompositionEnd";
                    break e;
                  case "compositionupdate":
                    b = "onCompositionUpdate";
                    break e;
                }
                b = void 0;
              }
            else
              Vn
                ? Bn(e, n) && (b = "onCompositionEnd")
                : "keydown" === e &&
                  229 === n.keyCode &&
                  (b = "onCompositionStart");
            b &&
              (An &&
                "ko" !== n.locale &&
                (Vn || "onCompositionStart" !== b
                  ? "onCompositionEnd" === b && Vn && (y = en())
                  : ((Jt = "value" in (Gt = l) ? Gt.value : Gt.textContent),
                    (Vn = !0))),
              0 < (v = Kr(r, b)).length &&
                ((b = new wn(b, e, null, n, l)),
                a.push({ event: b, listeners: v }),
                (y || null !== (y = Hn(n))) && (b.data = y))),
              (y = On
                ? (function (e, t) {
                    switch (e) {
                      case "compositionend":
                        return Hn(t);
                      case "keypress":
                        return 32 !== t.which ? null : ((Un = !0), In);
                      case "textInput":
                        return (e = t.data) === In && Un ? null : e;
                      default:
                        return null;
                    }
                  })(e, n)
                : (function (e, t) {
                    if (Vn)
                      return "compositionend" === e || (!Fn && Bn(e, t))
                        ? ((e = en()), (Zt = Jt = Gt = null), (Vn = !1), e)
                        : null;
                    switch (e) {
                      case "paste":
                      default:
                        return null;
                      case "keypress":
                        if (
                          !(t.ctrlKey || t.altKey || t.metaKey) ||
                          (t.ctrlKey && t.altKey)
                        ) {
                          if (t.char && 1 < t.char.length) return t.char;
                          if (t.which) return String.fromCharCode(t.which);
                        }
                        return null;
                      case "compositionend":
                        return An && "ko" !== t.locale ? null : t.data;
                    }
                  })(e, n)) &&
                0 < (r = Kr(r, "onBeforeInput")).length &&
                ((l = new wn("onBeforeInput", "beforeinput", null, n, l)),
                a.push({ event: l, listeners: r }),
                (l.data = y));
          }
          Ir(a, t);
        });
      }
      function jr(e, t, n) {
        return { instance: e, listener: t, currentTarget: n };
      }
      function Kr(e, t) {
        for (var n = t + "Capture", r = []; null !== e; ) {
          var l = e,
            o = l.stateNode;
          5 === l.tag &&
            null !== o &&
            ((l = o),
            null != (o = Te(e, n)) && r.unshift(jr(e, o, l)),
            null != (o = Te(e, t)) && r.push(jr(e, o, l))),
            (e = e.return);
        }
        return r;
      }
      function $r(e) {
        if (null === e) return null;
        do {
          e = e.return;
        } while (e && 5 !== e.tag);
        return e || null;
      }
      function qr(e, t, n, r, l) {
        for (var o = t._reactName, a = []; null !== n && n !== r; ) {
          var i = n,
            u = i.alternate,
            s = i.stateNode;
          if (null !== u && u === r) break;
          5 === i.tag &&
            null !== s &&
            ((i = s),
            l
              ? null != (u = Te(n, o)) && a.unshift(jr(n, u, i))
              : l || (null != (u = Te(n, o)) && a.push(jr(n, u, i)))),
            (n = n.return);
        }
        0 !== a.length && e.push({ event: t, listeners: a });
      }
      var Yr = /\r\n?/g,
        Xr = /\u0000|\uFFFD/g;
      function Gr(e) {
        return ("string" == typeof e ? e : "" + e)
          .replace(Yr, "\n")
          .replace(Xr, "");
      }
      function Jr(e, t, n) {
        if (((t = Gr(t)), Gr(e) !== t && n)) throw Error(o(425));
      }
      function Zr() {}
      var el = null,
        tl = null;
      function nl(e, t) {
        return (
          "textarea" === e ||
          "noscript" === e ||
          "string" == typeof t.children ||
          "number" == typeof t.children ||
          ("object" == typeof t.dangerouslySetInnerHTML &&
            null !== t.dangerouslySetInnerHTML &&
            null != t.dangerouslySetInnerHTML.__html)
        );
      }
      var rl = "function" == typeof setTimeout ? setTimeout : void 0,
        ll = "function" == typeof clearTimeout ? clearTimeout : void 0,
        ol = "function" == typeof Promise ? Promise : void 0,
        al =
          "function" == typeof queueMicrotask
            ? queueMicrotask
            : void 0 !== ol
            ? function (e) {
                return ol.resolve(null).then(e).catch(il);
              }
            : rl;
      function il(e) {
        setTimeout(function () {
          throw e;
        });
      }
      function ul(e, t) {
        var n = t,
          r = 0;
        do {
          var l = n.nextSibling;
          if ((e.removeChild(n), l && 8 === l.nodeType))
            if ("/$" === (n = l.data)) {
              if (0 === r) return e.removeChild(l), void Vt(t);
              r--;
            } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
          n = l;
        } while (n);
        Vt(t);
      }
      function sl(e) {
        for (; null != e; e = e.nextSibling) {
          var t = e.nodeType;
          if (1 === t || 3 === t) break;
          if (8 === t) {
            if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
            if ("/$" === t) return null;
          }
        }
        return e;
      }
      function cl(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
          if (8 === e.nodeType) {
            var n = e.data;
            if ("$" === n || "$!" === n || "$?" === n) {
              if (0 === t) return e;
              t--;
            } else "/$" === n && t++;
          }
          e = e.previousSibling;
        }
        return null;
      }
      var fl = Math.random().toString(36).slice(2),
        dl = "__reactFiber$" + fl,
        pl = "__reactProps$" + fl,
        hl = "__reactContainer$" + fl,
        ml = "__reactEvents$" + fl,
        gl = "__reactListeners$" + fl,
        vl = "__reactHandles$" + fl;
      function yl(e) {
        var t = e[dl];
        if (t) return t;
        for (var n = e.parentNode; n; ) {
          if ((t = n[hl] || n[dl])) {
            if (
              ((n = t.alternate),
              null !== t.child || (null !== n && null !== n.child))
            )
              for (e = cl(e); null !== e; ) {
                if ((n = e[dl])) return n;
                e = cl(e);
              }
            return t;
          }
          n = (e = n).parentNode;
        }
        return null;
      }
      function bl(e) {
        return !(e = e[dl] || e[hl]) ||
          (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
          ? null
          : e;
      }
      function wl(e) {
        if (5 === e.tag || 6 === e.tag) return e.stateNode;
        throw Error(o(33));
      }
      function kl(e) {
        return e[pl] || null;
      }
      var Sl = [],
        El = -1;
      function xl(e) {
        return { current: e };
      }
      function Cl(e) {
        0 > El || ((e.current = Sl[El]), (Sl[El] = null), El--);
      }
      function Rl(e, t) {
        El++, (Sl[El] = e.current), (e.current = t);
      }
      var Nl = {},
        Pl = xl(Nl),
        _l = xl(!1),
        Ml = Nl;
      function Ll(e, t) {
        var n = e.type.contextTypes;
        if (!n) return Nl;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
          return r.__reactInternalMemoizedMaskedChildContext;
        var l,
          o = {};
        for (l in n) o[l] = t[l];
        return (
          r &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
              t),
            (e.__reactInternalMemoizedMaskedChildContext = o)),
          o
        );
      }
      function Tl(e) {
        return null != e.childContextTypes;
      }
      function zl() {
        Cl(_l), Cl(Pl);
      }
      function Fl(e, t, n) {
        if (Pl.current !== Nl) throw Error(o(168));
        Rl(Pl, t), Rl(_l, n);
      }
      function Dl(e, t, n) {
        var r = e.stateNode;
        if (((t = t.childContextTypes), "function" != typeof r.getChildContext))
          return n;
        for (var l in (r = r.getChildContext()))
          if (!(l in t)) throw Error(o(108, W(e) || "Unknown", l));
        return A({}, n, r);
      }
      function Ol(e) {
        return (
          (e =
            ((e = e.stateNode) &&
              e.__reactInternalMemoizedMergedChildContext) ||
            Nl),
          (Ml = Pl.current),
          Rl(Pl, e),
          Rl(_l, _l.current),
          !0
        );
      }
      function Al(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(o(169));
        n
          ? ((e = Dl(e, t, Ml)),
            (r.__reactInternalMemoizedMergedChildContext = e),
            Cl(_l),
            Cl(Pl),
            Rl(Pl, e))
          : Cl(_l),
          Rl(_l, n);
      }
      var Il = null,
        Ul = !1,
        Bl = !1;
      function Hl(e) {
        null === Il ? (Il = [e]) : Il.push(e);
      }
      function Vl() {
        if (!Bl && null !== Il) {
          Bl = !0;
          var e = 0,
            t = bt;
          try {
            var n = Il;
            for (bt = 1; e < n.length; e++) {
              var r = n[e];
              do {
                r = r(!0);
              } while (null !== r);
            }
            (Il = null), (Ul = !1);
          } catch (t) {
            throw (null !== Il && (Il = Il.slice(e + 1)), $e(Ze, Vl), t);
          } finally {
            (bt = t), (Bl = !1);
          }
        }
        return null;
      }
      var Wl = [],
        Ql = 0,
        jl = null,
        Kl = 0,
        $l = [],
        ql = 0,
        Yl = null,
        Xl = 1,
        Gl = "";
      function Jl(e, t) {
        (Wl[Ql++] = Kl), (Wl[Ql++] = jl), (jl = e), (Kl = t);
      }
      function Zl(e, t, n) {
        ($l[ql++] = Xl), ($l[ql++] = Gl), ($l[ql++] = Yl), (Yl = e);
        var r = Xl;
        e = Gl;
        var l = 32 - at(r) - 1;
        (r &= ~(1 << l)), (n += 1);
        var o = 32 - at(t) + l;
        if (30 < o) {
          var a = l - (l % 5);
          (o = (r & ((1 << a) - 1)).toString(32)),
            (r >>= a),
            (l -= a),
            (Xl = (1 << (32 - at(t) + l)) | (n << l) | r),
            (Gl = o + e);
        } else (Xl = (1 << o) | (n << l) | r), (Gl = e);
      }
      function eo(e) {
        null !== e.return && (Jl(e, 1), Zl(e, 1, 0));
      }
      function to(e) {
        for (; e === jl; )
          (jl = Wl[--Ql]), (Wl[Ql] = null), (Kl = Wl[--Ql]), (Wl[Ql] = null);
        for (; e === Yl; )
          (Yl = $l[--ql]),
            ($l[ql] = null),
            (Gl = $l[--ql]),
            ($l[ql] = null),
            (Xl = $l[--ql]),
            ($l[ql] = null);
      }
      var no = null,
        ro = null,
        lo = !1,
        oo = null;
      function ao(e, t) {
        var n = Ts(5, null, null, 0);
        (n.elementType = "DELETED"),
          (n.stateNode = t),
          (n.return = e),
          null === (t = e.deletions)
            ? ((e.deletions = [n]), (e.flags |= 16))
            : t.push(n);
      }
      function io(e, t) {
        switch (e.tag) {
          case 5:
            var n = e.type;
            return (
              null !==
                (t =
                  1 !== t.nodeType ||
                  n.toLowerCase() !== t.nodeName.toLowerCase()
                    ? null
                    : t) &&
              ((e.stateNode = t), (no = e), (ro = sl(t.firstChild)), !0)
            );
          case 6:
            return (
              null !==
                (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
              ((e.stateNode = t), (no = e), (ro = null), !0)
            );
          case 13:
            return (
              null !== (t = 8 !== t.nodeType ? null : t) &&
              ((n = null !== Yl ? { id: Xl, overflow: Gl } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              ((n = Ts(18, null, null, 0)).stateNode = t),
              (n.return = e),
              (e.child = n),
              (no = e),
              (ro = null),
              !0)
            );
          default:
            return !1;
        }
      }
      function uo(e) {
        return 0 != (1 & e.mode) && 0 == (128 & e.flags);
      }
      function so(e) {
        if (lo) {
          var t = ro;
          if (t) {
            var n = t;
            if (!io(e, t)) {
              if (uo(e)) throw Error(o(418));
              t = sl(n.nextSibling);
              var r = no;
              t && io(e, t)
                ? ao(r, n)
                : ((e.flags = (-4097 & e.flags) | 2), (lo = !1), (no = e));
            }
          } else {
            if (uo(e)) throw Error(o(418));
            (e.flags = (-4097 & e.flags) | 2), (lo = !1), (no = e);
          }
        }
      }
      function co(e) {
        for (
          e = e.return;
          null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

        )
          e = e.return;
        no = e;
      }
      function fo(e) {
        if (e !== no) return !1;
        if (!lo) return co(e), (lo = !0), !1;
        var t;
        if (
          ((t = 3 !== e.tag) &&
            !(t = 5 !== e.tag) &&
            (t =
              "head" !== (t = e.type) &&
              "body" !== t &&
              !nl(e.type, e.memoizedProps)),
          t && (t = ro))
        ) {
          if (uo(e)) throw (po(), Error(o(418)));
          for (; t; ) ao(e, t), (t = sl(t.nextSibling));
        }
        if ((co(e), 13 === e.tag)) {
          if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
            throw Error(o(317));
          e: {
            for (e = e.nextSibling, t = 0; e; ) {
              if (8 === e.nodeType) {
                var n = e.data;
                if ("/$" === n) {
                  if (0 === t) {
                    ro = sl(e.nextSibling);
                    break e;
                  }
                  t--;
                } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
              }
              e = e.nextSibling;
            }
            ro = null;
          }
        } else ro = no ? sl(e.stateNode.nextSibling) : null;
        return !0;
      }
      function po() {
        for (var e = ro; e; ) e = sl(e.nextSibling);
      }
      function ho() {
        (ro = no = null), (lo = !1);
      }
      function mo(e) {
        null === oo ? (oo = [e]) : oo.push(e);
      }
      var go = w.ReactCurrentBatchConfig;
      function vo(e, t) {
        if (e && e.defaultProps) {
          for (var n in ((t = A({}, t)), (e = e.defaultProps)))
            void 0 === t[n] && (t[n] = e[n]);
          return t;
        }
        return t;
      }
      var yo = xl(null),
        bo = null,
        wo = null,
        ko = null;
      function So() {
        ko = wo = bo = null;
      }
      function Eo(e) {
        var t = yo.current;
        Cl(yo), (e._currentValue = t);
      }
      function xo(e, t, n) {
        for (; null !== e; ) {
          var r = e.alternate;
          if (
            ((e.childLanes & t) !== t
              ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
              : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
            e === n)
          )
            break;
          e = e.return;
        }
      }
      function Co(e, t) {
        (bo = e),
          (ko = wo = null),
          null !== (e = e.dependencies) &&
            null !== e.firstContext &&
            (0 != (e.lanes & t) && (wi = !0), (e.firstContext = null));
      }
      function Ro(e) {
        var t = e._currentValue;
        if (ko !== e)
          if (
            ((e = { context: e, memoizedValue: t, next: null }), null === wo)
          ) {
            if (null === bo) throw Error(o(308));
            (wo = e), (bo.dependencies = { lanes: 0, firstContext: e });
          } else wo = wo.next = e;
        return t;
      }
      var No = null;
      function Po(e) {
        null === No ? (No = [e]) : No.push(e);
      }
      function _o(e, t, n, r) {
        var l = t.interleaved;
        return (
          null === l
            ? ((n.next = n), Po(t))
            : ((n.next = l.next), (l.next = n)),
          (t.interleaved = n),
          Mo(e, r)
        );
      }
      function Mo(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
          (e.childLanes |= t),
            null !== (n = e.alternate) && (n.childLanes |= t),
            (n = e),
            (e = e.return);
        return 3 === n.tag ? n.stateNode : null;
      }
      var Lo = !1;
      function To(e) {
        e.updateQueue = {
          baseState: e.memoizedState,
          firstBaseUpdate: null,
          lastBaseUpdate: null,
          shared: { pending: null, interleaved: null, lanes: 0 },
          effects: null,
        };
      }
      function zo(e, t) {
        (e = e.updateQueue),
          t.updateQueue === e &&
            (t.updateQueue = {
              baseState: e.baseState,
              firstBaseUpdate: e.firstBaseUpdate,
              lastBaseUpdate: e.lastBaseUpdate,
              shared: e.shared,
              effects: e.effects,
            });
      }
      function Fo(e, t) {
        return {
          eventTime: e,
          lane: t,
          tag: 0,
          payload: null,
          callback: null,
          next: null,
        };
      }
      function Do(e, t, n) {
        var r = e.updateQueue;
        if (null === r) return null;
        if (((r = r.shared), 0 != (2 & _u))) {
          var l = r.pending;
          return (
            null === l ? (t.next = t) : ((t.next = l.next), (l.next = t)),
            (r.pending = t),
            Mo(e, n)
          );
        }
        return (
          null === (l = r.interleaved)
            ? ((t.next = t), Po(r))
            : ((t.next = l.next), (l.next = t)),
          (r.interleaved = t),
          Mo(e, n)
        );
      }
      function Oo(e, t, n) {
        if (
          null !== (t = t.updateQueue) &&
          ((t = t.shared), 0 != (4194240 & n))
        ) {
          var r = t.lanes;
          (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
        }
      }
      function Ao(e, t) {
        var n = e.updateQueue,
          r = e.alternate;
        if (null !== r && n === (r = r.updateQueue)) {
          var l = null,
            o = null;
          if (null !== (n = n.firstBaseUpdate)) {
            do {
              var a = {
                eventTime: n.eventTime,
                lane: n.lane,
                tag: n.tag,
                payload: n.payload,
                callback: n.callback,
                next: null,
              };
              null === o ? (l = o = a) : (o = o.next = a), (n = n.next);
            } while (null !== n);
            null === o ? (l = o = t) : (o = o.next = t);
          } else l = o = t;
          return (
            (n = {
              baseState: r.baseState,
              firstBaseUpdate: l,
              lastBaseUpdate: o,
              shared: r.shared,
              effects: r.effects,
            }),
            void (e.updateQueue = n)
          );
        }
        null === (e = n.lastBaseUpdate)
          ? (n.firstBaseUpdate = t)
          : (e.next = t),
          (n.lastBaseUpdate = t);
      }
      function Io(e, t, n, r) {
        var l = e.updateQueue;
        Lo = !1;
        var o = l.firstBaseUpdate,
          a = l.lastBaseUpdate,
          i = l.shared.pending;
        if (null !== i) {
          l.shared.pending = null;
          var u = i,
            s = u.next;
          (u.next = null), null === a ? (o = s) : (a.next = s), (a = u);
          var c = e.alternate;
          null !== c &&
            (i = (c = c.updateQueue).lastBaseUpdate) !== a &&
            (null === i ? (c.firstBaseUpdate = s) : (i.next = s),
            (c.lastBaseUpdate = u));
        }
        if (null !== o) {
          var f = l.baseState;
          for (a = 0, c = s = u = null, i = o; ; ) {
            var d = i.lane,
              p = i.eventTime;
            if ((r & d) === d) {
              null !== c &&
                (c = c.next =
                  {
                    eventTime: p,
                    lane: 0,
                    tag: i.tag,
                    payload: i.payload,
                    callback: i.callback,
                    next: null,
                  });
              e: {
                var h = e,
                  m = i;
                switch (((d = t), (p = n), m.tag)) {
                  case 1:
                    if ("function" == typeof (h = m.payload)) {
                      f = h.call(p, f, d);
                      break e;
                    }
                    f = h;
                    break e;
                  case 3:
                    h.flags = (-65537 & h.flags) | 128;
                  case 0:
                    if (
                      null ==
                      (d =
                        "function" == typeof (h = m.payload)
                          ? h.call(p, f, d)
                          : h)
                    )
                      break e;
                    f = A({}, f, d);
                    break e;
                  case 2:
                    Lo = !0;
                }
              }
              null !== i.callback &&
                0 !== i.lane &&
                ((e.flags |= 64),
                null === (d = l.effects) ? (l.effects = [i]) : d.push(i));
            } else
              (p = {
                eventTime: p,
                lane: d,
                tag: i.tag,
                payload: i.payload,
                callback: i.callback,
                next: null,
              }),
                null === c ? ((s = c = p), (u = f)) : (c = c.next = p),
                (a |= d);
            if (null === (i = i.next)) {
              if (null === (i = l.shared.pending)) break;
              (i = (d = i).next),
                (d.next = null),
                (l.lastBaseUpdate = d),
                (l.shared.pending = null);
            }
          }
          if (
            (null === c && (u = f),
            (l.baseState = u),
            (l.firstBaseUpdate = s),
            (l.lastBaseUpdate = c),
            null !== (t = l.shared.interleaved))
          ) {
            l = t;
            do {
              (a |= l.lane), (l = l.next);
            } while (l !== t);
          } else null === o && (l.shared.lanes = 0);
          (Au |= a), (e.lanes = a), (e.memoizedState = f);
        }
      }
      function Uo(e, t, n) {
        if (((e = t.effects), (t.effects = null), null !== e))
          for (t = 0; t < e.length; t++) {
            var r = e[t],
              l = r.callback;
            if (null !== l) {
              if (((r.callback = null), (r = n), "function" != typeof l))
                throw Error(o(191, l));
              l.call(r);
            }
          }
      }
      var Bo = new r.Component().refs;
      function Ho(e, t, n, r) {
        (n = null == (n = n(r, (t = e.memoizedState))) ? t : A({}, t, n)),
          (e.memoizedState = n),
          0 === e.lanes && (e.updateQueue.baseState = n);
      }
      var Vo = {
        isMounted: function (e) {
          return !!(e = e._reactInternals) && Ve(e) === e;
        },
        enqueueSetState: function (e, t, n) {
          e = e._reactInternals;
          var r = ts(),
            l = ns(e),
            o = Fo(r, l);
          (o.payload = t),
            null != n && (o.callback = n),
            null !== (t = Do(e, o, l)) && (rs(t, e, l, r), Oo(t, e, l));
        },
        enqueueReplaceState: function (e, t, n) {
          e = e._reactInternals;
          var r = ts(),
            l = ns(e),
            o = Fo(r, l);
          (o.tag = 1),
            (o.payload = t),
            null != n && (o.callback = n),
            null !== (t = Do(e, o, l)) && (rs(t, e, l, r), Oo(t, e, l));
        },
        enqueueForceUpdate: function (e, t) {
          e = e._reactInternals;
          var n = ts(),
            r = ns(e),
            l = Fo(n, r);
          (l.tag = 2),
            null != t && (l.callback = t),
            null !== (t = Do(e, l, r)) && (rs(t, e, r, n), Oo(t, e, r));
        },
      };
      function Wo(e, t, n, r, l, o, a) {
        return "function" == typeof (e = e.stateNode).shouldComponentUpdate
          ? e.shouldComponentUpdate(r, o, a)
          : !(
              t.prototype &&
              t.prototype.isPureReactComponent &&
              ur(n, r) &&
              ur(l, o)
            );
      }
      function Qo(e, t, n) {
        var r = !1,
          l = Nl,
          o = t.contextType;
        return (
          "object" == typeof o && null !== o
            ? (o = Ro(o))
            : ((l = Tl(t) ? Ml : Pl.current),
              (o = (r = null != (r = t.contextTypes)) ? Ll(e, l) : Nl)),
          (t = new t(n, o)),
          (e.memoizedState =
            null !== t.state && void 0 !== t.state ? t.state : null),
          (t.updater = Vo),
          (e.stateNode = t),
          (t._reactInternals = e),
          r &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
              l),
            (e.__reactInternalMemoizedMaskedChildContext = o)),
          t
        );
      }
      function jo(e, t, n, r) {
        (e = t.state),
          "function" == typeof t.componentWillReceiveProps &&
            t.componentWillReceiveProps(n, r),
          "function" == typeof t.UNSAFE_componentWillReceiveProps &&
            t.UNSAFE_componentWillReceiveProps(n, r),
          t.state !== e && Vo.enqueueReplaceState(t, t.state, null);
      }
      function Ko(e, t, n, r) {
        var l = e.stateNode;
        (l.props = n), (l.state = e.memoizedState), (l.refs = Bo), To(e);
        var o = t.contextType;
        "object" == typeof o && null !== o
          ? (l.context = Ro(o))
          : ((o = Tl(t) ? Ml : Pl.current), (l.context = Ll(e, o))),
          (l.state = e.memoizedState),
          "function" == typeof (o = t.getDerivedStateFromProps) &&
            (Ho(e, t, o, n), (l.state = e.memoizedState)),
          "function" == typeof t.getDerivedStateFromProps ||
            "function" == typeof l.getSnapshotBeforeUpdate ||
            ("function" != typeof l.UNSAFE_componentWillMount &&
              "function" != typeof l.componentWillMount) ||
            ((t = l.state),
            "function" == typeof l.componentWillMount && l.componentWillMount(),
            "function" == typeof l.UNSAFE_componentWillMount &&
              l.UNSAFE_componentWillMount(),
            t !== l.state && Vo.enqueueReplaceState(l, l.state, null),
            Io(e, n, l, r),
            (l.state = e.memoizedState)),
          "function" == typeof l.componentDidMount && (e.flags |= 4194308);
      }
      function $o(e, t, n) {
        if (
          null !== (e = n.ref) &&
          "function" != typeof e &&
          "object" != typeof e
        ) {
          if (n._owner) {
            if ((n = n._owner)) {
              if (1 !== n.tag) throw Error(o(309));
              var r = n.stateNode;
            }
            if (!r) throw Error(o(147, e));
            var l = r,
              a = "" + e;
            return null !== t &&
              null !== t.ref &&
              "function" == typeof t.ref &&
              t.ref._stringRef === a
              ? t.ref
              : ((t = function (e) {
                  var t = l.refs;
                  t === Bo && (t = l.refs = {}),
                    null === e ? delete t[a] : (t[a] = e);
                }),
                (t._stringRef = a),
                t);
          }
          if ("string" != typeof e) throw Error(o(284));
          if (!n._owner) throw Error(o(290, e));
        }
        return e;
      }
      function qo(e, t) {
        throw (
          ((e = Object.prototype.toString.call(t)),
          Error(
            o(
              31,
              "[object Object]" === e
                ? "object with keys {" + Object.keys(t).join(", ") + "}"
                : e
            )
          ))
        );
      }
      function Yo(e) {
        return (0, e._init)(e._payload);
      }
      function Xo(e) {
        function t(t, n) {
          if (e) {
            var r = t.deletions;
            null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
          }
        }
        function n(n, r) {
          if (!e) return null;
          for (; null !== r; ) t(n, r), (r = r.sibling);
          return null;
        }
        function r(e, t) {
          for (e = new Map(); null !== t; )
            null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
              (t = t.sibling);
          return e;
        }
        function l(e, t) {
          return ((e = Fs(e, t)).index = 0), (e.sibling = null), e;
        }
        function a(t, n, r) {
          return (
            (t.index = r),
            e
              ? null !== (r = t.alternate)
                ? (r = r.index) < n
                  ? ((t.flags |= 2), n)
                  : r
                : ((t.flags |= 2), n)
              : ((t.flags |= 1048576), n)
          );
        }
        function i(t) {
          return e && null === t.alternate && (t.flags |= 2), t;
        }
        function u(e, t, n, r) {
          return null === t || 6 !== t.tag
            ? (((t = Is(n, e.mode, r)).return = e), t)
            : (((t = l(t, n)).return = e), t);
        }
        function s(e, t, n, r) {
          var o = n.type;
          return o === E
            ? f(e, t, n.props.children, r, n.key)
            : null !== t &&
              (t.elementType === o ||
                ("object" == typeof o &&
                  null !== o &&
                  o.$$typeof === T &&
                  Yo(o) === t.type))
            ? (((r = l(t, n.props)).ref = $o(e, t, n)), (r.return = e), r)
            : (((r = Ds(n.type, n.key, n.props, null, e.mode, r)).ref = $o(
                e,
                t,
                n
              )),
              (r.return = e),
              r);
        }
        function c(e, t, n, r) {
          return null === t ||
            4 !== t.tag ||
            t.stateNode.containerInfo !== n.containerInfo ||
            t.stateNode.implementation !== n.implementation
            ? (((t = Us(n, e.mode, r)).return = e), t)
            : (((t = l(t, n.children || [])).return = e), t);
        }
        function f(e, t, n, r, o) {
          return null === t || 7 !== t.tag
            ? (((t = Os(n, e.mode, r, o)).return = e), t)
            : (((t = l(t, n)).return = e), t);
        }
        function d(e, t, n) {
          if (("string" == typeof t && "" !== t) || "number" == typeof t)
            return ((t = Is("" + t, e.mode, n)).return = e), t;
          if ("object" == typeof t && null !== t) {
            switch (t.$$typeof) {
              case k:
                return (
                  ((n = Ds(t.type, t.key, t.props, null, e.mode, n)).ref = $o(
                    e,
                    null,
                    t
                  )),
                  (n.return = e),
                  n
                );
              case S:
                return ((t = Us(t, e.mode, n)).return = e), t;
              case T:
                return d(e, (0, t._init)(t._payload), n);
            }
            if (te(t) || D(t))
              return ((t = Os(t, e.mode, n, null)).return = e), t;
            qo(e, t);
          }
          return null;
        }
        function p(e, t, n, r) {
          var l = null !== t ? t.key : null;
          if (("string" == typeof n && "" !== n) || "number" == typeof n)
            return null !== l ? null : u(e, t, "" + n, r);
          if ("object" == typeof n && null !== n) {
            switch (n.$$typeof) {
              case k:
                return n.key === l ? s(e, t, n, r) : null;
              case S:
                return n.key === l ? c(e, t, n, r) : null;
              case T:
                return p(e, t, (l = n._init)(n._payload), r);
            }
            if (te(n) || D(n)) return null !== l ? null : f(e, t, n, r, null);
            qo(e, n);
          }
          return null;
        }
        function h(e, t, n, r, l) {
          if (("string" == typeof r && "" !== r) || "number" == typeof r)
            return u(t, (e = e.get(n) || null), "" + r, l);
          if ("object" == typeof r && null !== r) {
            switch (r.$$typeof) {
              case k:
                return s(
                  t,
                  (e = e.get(null === r.key ? n : r.key) || null),
                  r,
                  l
                );
              case S:
                return c(
                  t,
                  (e = e.get(null === r.key ? n : r.key) || null),
                  r,
                  l
                );
              case T:
                return h(e, t, n, (0, r._init)(r._payload), l);
            }
            if (te(r) || D(r)) return f(t, (e = e.get(n) || null), r, l, null);
            qo(t, r);
          }
          return null;
        }
        function m(l, o, i, u) {
          for (
            var s = null, c = null, f = o, m = (o = 0), g = null;
            null !== f && m < i.length;
            m++
          ) {
            f.index > m ? ((g = f), (f = null)) : (g = f.sibling);
            var v = p(l, f, i[m], u);
            if (null === v) {
              null === f && (f = g);
              break;
            }
            e && f && null === v.alternate && t(l, f),
              (o = a(v, o, m)),
              null === c ? (s = v) : (c.sibling = v),
              (c = v),
              (f = g);
          }
          if (m === i.length) return n(l, f), lo && Jl(l, m), s;
          if (null === f) {
            for (; m < i.length; m++)
              null !== (f = d(l, i[m], u)) &&
                ((o = a(f, o, m)),
                null === c ? (s = f) : (c.sibling = f),
                (c = f));
            return lo && Jl(l, m), s;
          }
          for (f = r(l, f); m < i.length; m++)
            null !== (g = h(f, l, m, i[m], u)) &&
              (e &&
                null !== g.alternate &&
                f.delete(null === g.key ? m : g.key),
              (o = a(g, o, m)),
              null === c ? (s = g) : (c.sibling = g),
              (c = g));
          return (
            e &&
              f.forEach(function (e) {
                return t(l, e);
              }),
            lo && Jl(l, m),
            s
          );
        }
        function g(l, i, u, s) {
          var c = D(u);
          if ("function" != typeof c) throw Error(o(150));
          if (null == (u = c.call(u))) throw Error(o(151));
          for (
            var f = (c = null), m = i, g = (i = 0), v = null, y = u.next();
            null !== m && !y.done;
            g++, y = u.next()
          ) {
            m.index > g ? ((v = m), (m = null)) : (v = m.sibling);
            var b = p(l, m, y.value, s);
            if (null === b) {
              null === m && (m = v);
              break;
            }
            e && m && null === b.alternate && t(l, m),
              (i = a(b, i, g)),
              null === f ? (c = b) : (f.sibling = b),
              (f = b),
              (m = v);
          }
          if (y.done) return n(l, m), lo && Jl(l, g), c;
          if (null === m) {
            for (; !y.done; g++, y = u.next())
              null !== (y = d(l, y.value, s)) &&
                ((i = a(y, i, g)),
                null === f ? (c = y) : (f.sibling = y),
                (f = y));
            return lo && Jl(l, g), c;
          }
          for (m = r(l, m); !y.done; g++, y = u.next())
            null !== (y = h(m, l, g, y.value, s)) &&
              (e &&
                null !== y.alternate &&
                m.delete(null === y.key ? g : y.key),
              (i = a(y, i, g)),
              null === f ? (c = y) : (f.sibling = y),
              (f = y));
          return (
            e &&
              m.forEach(function (e) {
                return t(l, e);
              }),
            lo && Jl(l, g),
            c
          );
        }
        return function e(r, o, a, u) {
          if (
            ("object" == typeof a &&
              null !== a &&
              a.type === E &&
              null === a.key &&
              (a = a.props.children),
            "object" == typeof a && null !== a)
          ) {
            switch (a.$$typeof) {
              case k:
                e: {
                  for (var s = a.key, c = o; null !== c; ) {
                    if (c.key === s) {
                      if ((s = a.type) === E) {
                        if (7 === c.tag) {
                          n(r, c.sibling),
                            ((o = l(c, a.props.children)).return = r),
                            (r = o);
                          break e;
                        }
                      } else if (
                        c.elementType === s ||
                        ("object" == typeof s &&
                          null !== s &&
                          s.$$typeof === T &&
                          Yo(s) === c.type)
                      ) {
                        n(r, c.sibling),
                          ((o = l(c, a.props)).ref = $o(r, c, a)),
                          (o.return = r),
                          (r = o);
                        break e;
                      }
                      n(r, c);
                      break;
                    }
                    t(r, c), (c = c.sibling);
                  }
                  a.type === E
                    ? (((o = Os(a.props.children, r.mode, u, a.key)).return =
                        r),
                      (r = o))
                    : (((u = Ds(a.type, a.key, a.props, null, r.mode, u)).ref =
                        $o(r, o, a)),
                      (u.return = r),
                      (r = u));
                }
                return i(r);
              case S:
                e: {
                  for (c = a.key; null !== o; ) {
                    if (o.key === c) {
                      if (
                        4 === o.tag &&
                        o.stateNode.containerInfo === a.containerInfo &&
                        o.stateNode.implementation === a.implementation
                      ) {
                        n(r, o.sibling),
                          ((o = l(o, a.children || [])).return = r),
                          (r = o);
                        break e;
                      }
                      n(r, o);
                      break;
                    }
                    t(r, o), (o = o.sibling);
                  }
                  ((o = Us(a, r.mode, u)).return = r), (r = o);
                }
                return i(r);
              case T:
                return e(r, o, (c = a._init)(a._payload), u);
            }
            if (te(a)) return m(r, o, a, u);
            if (D(a)) return g(r, o, a, u);
            qo(r, a);
          }
          return ("string" == typeof a && "" !== a) || "number" == typeof a
            ? ((a = "" + a),
              null !== o && 6 === o.tag
                ? (n(r, o.sibling), ((o = l(o, a)).return = r), (r = o))
                : (n(r, o), ((o = Is(a, r.mode, u)).return = r), (r = o)),
              i(r))
            : n(r, o);
        };
      }
      var Go = Xo(!0),
        Jo = Xo(!1),
        Zo = {},
        ea = xl(Zo),
        ta = xl(Zo),
        na = xl(Zo);
      function ra(e) {
        if (e === Zo) throw Error(o(174));
        return e;
      }
      function la(e, t) {
        switch ((Rl(na, t), Rl(ta, e), Rl(ea, Zo), (e = t.nodeType))) {
          case 9:
          case 11:
            t = (t = t.documentElement) ? t.namespaceURI : ue(null, "");
            break;
          default:
            t = ue(
              (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
              (e = e.tagName)
            );
        }
        Cl(ea), Rl(ea, t);
      }
      function oa() {
        Cl(ea), Cl(ta), Cl(na);
      }
      function aa(e) {
        ra(na.current);
        var t = ra(ea.current),
          n = ue(t, e.type);
        t !== n && (Rl(ta, e), Rl(ea, n));
      }
      function ia(e) {
        ta.current === e && (Cl(ea), Cl(ta));
      }
      var ua = xl(0);
      function sa(e) {
        for (var t = e; null !== t; ) {
          if (13 === t.tag) {
            var n = t.memoizedState;
            if (
              null !== n &&
              (null === (n = n.dehydrated) ||
                "$?" === n.data ||
                "$!" === n.data)
            )
              return t;
          } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
            if (0 != (128 & t.flags)) return t;
          } else if (null !== t.child) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break;
          for (; null === t.sibling; ) {
            if (null === t.return || t.return === e) return null;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
        return null;
      }
      var ca = [];
      function fa() {
        for (var e = 0; e < ca.length; e++)
          ca[e]._workInProgressVersionPrimary = null;
        ca.length = 0;
      }
      var da = w.ReactCurrentDispatcher,
        pa = w.ReactCurrentBatchConfig,
        ha = 0,
        ma = null,
        ga = null,
        va = null,
        ya = !1,
        ba = !1,
        wa = 0,
        ka = 0;
      function Sa() {
        throw Error(o(321));
      }
      function Ea(e, t) {
        if (null === t) return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
          if (!ir(e[n], t[n])) return !1;
        return !0;
      }
      function xa(e, t, n, r, l, a) {
        if (
          ((ha = a),
          (ma = t),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.lanes = 0),
          (da.current = null === e || null === e.memoizedState ? ii : ui),
          (e = n(r, l)),
          ba)
        ) {
          a = 0;
          do {
            if (((ba = !1), (wa = 0), 25 <= a)) throw Error(o(301));
            (a += 1),
              (va = ga = null),
              (t.updateQueue = null),
              (da.current = si),
              (e = n(r, l));
          } while (ba);
        }
        if (
          ((da.current = ai),
          (t = null !== ga && null !== ga.next),
          (ha = 0),
          (va = ga = ma = null),
          (ya = !1),
          t)
        )
          throw Error(o(300));
        return e;
      }
      function Ca() {
        var e = 0 !== wa;
        return (wa = 0), e;
      }
      function Ra() {
        var e = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null,
        };
        return (
          null === va ? (ma.memoizedState = va = e) : (va = va.next = e), va
        );
      }
      function Na() {
        if (null === ga) {
          var e = ma.alternate;
          e = null !== e ? e.memoizedState : null;
        } else e = ga.next;
        var t = null === va ? ma.memoizedState : va.next;
        if (null !== t) (va = t), (ga = e);
        else {
          if (null === e) throw Error(o(310));
          (e = {
            memoizedState: (ga = e).memoizedState,
            baseState: ga.baseState,
            baseQueue: ga.baseQueue,
            queue: ga.queue,
            next: null,
          }),
            null === va ? (ma.memoizedState = va = e) : (va = va.next = e);
        }
        return va;
      }
      function Pa(e, t) {
        return "function" == typeof t ? t(e) : t;
      }
      function _a(e) {
        var t = Na(),
          n = t.queue;
        if (null === n) throw Error(o(311));
        n.lastRenderedReducer = e;
        var r = ga,
          l = r.baseQueue,
          a = n.pending;
        if (null !== a) {
          if (null !== l) {
            var i = l.next;
            (l.next = a.next), (a.next = i);
          }
          (r.baseQueue = l = a), (n.pending = null);
        }
        if (null !== l) {
          (a = l.next), (r = r.baseState);
          var u = (i = null),
            s = null,
            c = a;
          do {
            var f = c.lane;
            if ((ha & f) === f)
              null !== s &&
                (s = s.next =
                  {
                    lane: 0,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null,
                  }),
                (r = c.hasEagerState ? c.eagerState : e(r, c.action));
            else {
              var d = {
                lane: f,
                action: c.action,
                hasEagerState: c.hasEagerState,
                eagerState: c.eagerState,
                next: null,
              };
              null === s ? ((u = s = d), (i = r)) : (s = s.next = d),
                (ma.lanes |= f),
                (Au |= f);
            }
            c = c.next;
          } while (null !== c && c !== a);
          null === s ? (i = r) : (s.next = u),
            ir(r, t.memoizedState) || (wi = !0),
            (t.memoizedState = r),
            (t.baseState = i),
            (t.baseQueue = s),
            (n.lastRenderedState = r);
        }
        if (null !== (e = n.interleaved)) {
          l = e;
          do {
            (a = l.lane), (ma.lanes |= a), (Au |= a), (l = l.next);
          } while (l !== e);
        } else null === l && (n.lanes = 0);
        return [t.memoizedState, n.dispatch];
      }
      function Ma(e) {
        var t = Na(),
          n = t.queue;
        if (null === n) throw Error(o(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch,
          l = n.pending,
          a = t.memoizedState;
        if (null !== l) {
          n.pending = null;
          var i = (l = l.next);
          do {
            (a = e(a, i.action)), (i = i.next);
          } while (i !== l);
          ir(a, t.memoizedState) || (wi = !0),
            (t.memoizedState = a),
            null === t.baseQueue && (t.baseState = a),
            (n.lastRenderedState = a);
        }
        return [a, r];
      }
      function La() {}
      function Ta(e, t) {
        var n = ma,
          r = Na(),
          l = t(),
          a = !ir(r.memoizedState, l);
        if (
          (a && ((r.memoizedState = l), (wi = !0)),
          (r = r.queue),
          Qa(Da.bind(null, n, r, e), [e]),
          r.getSnapshot !== t || a || (null !== va && 1 & va.memoizedState.tag))
        ) {
          if (
            ((n.flags |= 2048),
            Ua(9, Fa.bind(null, n, r, l, t), void 0, null),
            null === Mu)
          )
            throw Error(o(349));
          0 != (30 & ha) || za(n, t, l);
        }
        return l;
      }
      function za(e, t, n) {
        (e.flags |= 16384),
          (e = { getSnapshot: t, value: n }),
          null === (t = ma.updateQueue)
            ? ((t = { lastEffect: null, stores: null }),
              (ma.updateQueue = t),
              (t.stores = [e]))
            : null === (n = t.stores)
            ? (t.stores = [e])
            : n.push(e);
      }
      function Fa(e, t, n, r) {
        (t.value = n), (t.getSnapshot = r), Oa(t) && Aa(e);
      }
      function Da(e, t, n) {
        return n(function () {
          Oa(t) && Aa(e);
        });
      }
      function Oa(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var n = t();
          return !ir(e, n);
        } catch (e) {
          return !0;
        }
      }
      function Aa(e) {
        var t = Mo(e, 1);
        null !== t && rs(t, e, 1, -1);
      }
      function Ia(e) {
        var t = Ra();
        return (
          "function" == typeof e && (e = e()),
          (t.memoizedState = t.baseState = e),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Pa,
            lastRenderedState: e,
          }),
          (t.queue = e),
          (e = e.dispatch = ni.bind(null, ma, e)),
          [t.memoizedState, e]
        );
      }
      function Ua(e, t, n, r) {
        return (
          (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
          null === (t = ma.updateQueue)
            ? ((t = { lastEffect: null, stores: null }),
              (ma.updateQueue = t),
              (t.lastEffect = e.next = e))
            : null === (n = t.lastEffect)
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
          e
        );
      }
      function Ba() {
        return Na().memoizedState;
      }
      function Ha(e, t, n, r) {
        var l = Ra();
        (ma.flags |= e),
          (l.memoizedState = Ua(1 | t, n, void 0, void 0 === r ? null : r));
      }
      function Va(e, t, n, r) {
        var l = Na();
        r = void 0 === r ? null : r;
        var o = void 0;
        if (null !== ga) {
          var a = ga.memoizedState;
          if (((o = a.destroy), null !== r && Ea(r, a.deps)))
            return void (l.memoizedState = Ua(t, n, o, r));
        }
        (ma.flags |= e), (l.memoizedState = Ua(1 | t, n, o, r));
      }
      function Wa(e, t) {
        return Ha(8390656, 8, e, t);
      }
      function Qa(e, t) {
        return Va(2048, 8, e, t);
      }
      function ja(e, t) {
        return Va(4, 2, e, t);
      }
      function Ka(e, t) {
        return Va(4, 4, e, t);
      }
      function $a(e, t) {
        return "function" == typeof t
          ? ((e = e()),
            t(e),
            function () {
              t(null);
            })
          : null != t
          ? ((e = e()),
            (t.current = e),
            function () {
              t.current = null;
            })
          : void 0;
      }
      function qa(e, t, n) {
        return (
          (n = null != n ? n.concat([e]) : null),
          Va(4, 4, $a.bind(null, t, e), n)
        );
      }
      function Ya() {}
      function Xa(e, t) {
        var n = Na();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && Ea(t, r[1])
          ? r[0]
          : ((n.memoizedState = [e, t]), e);
      }
      function Ga(e, t) {
        var n = Na();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && Ea(t, r[1])
          ? r[0]
          : ((e = e()), (n.memoizedState = [e, t]), e);
      }
      function Ja(e, t, n) {
        return 0 == (21 & ha)
          ? (e.baseState && ((e.baseState = !1), (wi = !0)),
            (e.memoizedState = n))
          : (ir(n, t) ||
              ((n = mt()), (ma.lanes |= n), (Au |= n), (e.baseState = !0)),
            t);
      }
      function Za(e, t) {
        var n = bt;
        (bt = 0 !== n && 4 > n ? n : 4), e(!0);
        var r = pa.transition;
        pa.transition = {};
        try {
          e(!1), t();
        } finally {
          (bt = n), (pa.transition = r);
        }
      }
      function ei() {
        return Na().memoizedState;
      }
      function ti(e, t, n) {
        var r = ns(e);
        (n = {
          lane: r,
          action: n,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
          ri(e)
            ? li(t, n)
            : null !== (n = _o(e, t, n, r)) && (rs(n, e, r, ts()), oi(n, t, r));
      }
      function ni(e, t, n) {
        var r = ns(e),
          l = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          };
        if (ri(e)) li(t, l);
        else {
          var o = e.alternate;
          if (
            0 === e.lanes &&
            (null === o || 0 === o.lanes) &&
            null !== (o = t.lastRenderedReducer)
          )
            try {
              var a = t.lastRenderedState,
                i = o(a, n);
              if (((l.hasEagerState = !0), (l.eagerState = i), ir(i, a))) {
                var u = t.interleaved;
                return (
                  null === u
                    ? ((l.next = l), Po(t))
                    : ((l.next = u.next), (u.next = l)),
                  void (t.interleaved = l)
                );
              }
            } catch (e) {}
          null !== (n = _o(e, t, l, r)) &&
            (rs(n, e, r, (l = ts())), oi(n, t, r));
        }
      }
      function ri(e) {
        var t = e.alternate;
        return e === ma || (null !== t && t === ma);
      }
      function li(e, t) {
        ba = ya = !0;
        var n = e.pending;
        null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
          (e.pending = t);
      }
      function oi(e, t, n) {
        if (0 != (4194240 & n)) {
          var r = t.lanes;
          (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
        }
      }
      var ai = {
          readContext: Ro,
          useCallback: Sa,
          useContext: Sa,
          useEffect: Sa,
          useImperativeHandle: Sa,
          useInsertionEffect: Sa,
          useLayoutEffect: Sa,
          useMemo: Sa,
          useReducer: Sa,
          useRef: Sa,
          useState: Sa,
          useDebugValue: Sa,
          useDeferredValue: Sa,
          useTransition: Sa,
          useMutableSource: Sa,
          useSyncExternalStore: Sa,
          useId: Sa,
          unstable_isNewReconciler: !1,
        },
        ii = {
          readContext: Ro,
          useCallback: function (e, t) {
            return (Ra().memoizedState = [e, void 0 === t ? null : t]), e;
          },
          useContext: Ro,
          useEffect: Wa,
          useImperativeHandle: function (e, t, n) {
            return (
              (n = null != n ? n.concat([e]) : null),
              Ha(4194308, 4, $a.bind(null, t, e), n)
            );
          },
          useLayoutEffect: function (e, t) {
            return Ha(4194308, 4, e, t);
          },
          useInsertionEffect: function (e, t) {
            return Ha(4, 2, e, t);
          },
          useMemo: function (e, t) {
            var n = Ra();
            return (
              (t = void 0 === t ? null : t),
              (e = e()),
              (n.memoizedState = [e, t]),
              e
            );
          },
          useReducer: function (e, t, n) {
            var r = Ra();
            return (
              (t = void 0 !== n ? n(t) : t),
              (r.memoizedState = r.baseState = t),
              (e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t,
              }),
              (r.queue = e),
              (e = e.dispatch = ti.bind(null, ma, e)),
              [r.memoizedState, e]
            );
          },
          useRef: function (e) {
            return (e = { current: e }), (Ra().memoizedState = e);
          },
          useState: Ia,
          useDebugValue: Ya,
          useDeferredValue: function (e) {
            return (Ra().memoizedState = e);
          },
          useTransition: function () {
            var e = Ia(!1),
              t = e[0];
            return (e = Za.bind(null, e[1])), (Ra().memoizedState = e), [t, e];
          },
          useMutableSource: function () {},
          useSyncExternalStore: function (e, t, n) {
            var r = ma,
              l = Ra();
            if (lo) {
              if (void 0 === n) throw Error(o(407));
              n = n();
            } else {
              if (((n = t()), null === Mu)) throw Error(o(349));
              0 != (30 & ha) || za(r, t, n);
            }
            l.memoizedState = n;
            var a = { value: n, getSnapshot: t };
            return (
              (l.queue = a),
              Wa(Da.bind(null, r, a, e), [e]),
              (r.flags |= 2048),
              Ua(9, Fa.bind(null, r, a, n, t), void 0, null),
              n
            );
          },
          useId: function () {
            var e = Ra(),
              t = Mu.identifierPrefix;
            if (lo) {
              var n = Gl;
              (t =
                ":" +
                t +
                "R" +
                (n = (Xl & ~(1 << (32 - at(Xl) - 1))).toString(32) + n)),
                0 < (n = wa++) && (t += "H" + n.toString(32)),
                (t += ":");
            } else t = ":" + t + "r" + (n = ka++).toString(32) + ":";
            return (e.memoizedState = t);
          },
          unstable_isNewReconciler: !1,
        },
        ui = {
          readContext: Ro,
          useCallback: Xa,
          useContext: Ro,
          useEffect: Qa,
          useImperativeHandle: qa,
          useInsertionEffect: ja,
          useLayoutEffect: Ka,
          useMemo: Ga,
          useReducer: _a,
          useRef: Ba,
          useState: function () {
            return _a(Pa);
          },
          useDebugValue: Ya,
          useDeferredValue: function (e) {
            return Ja(Na(), ga.memoizedState, e);
          },
          useTransition: function () {
            return [_a(Pa)[0], Na().memoizedState];
          },
          useMutableSource: La,
          useSyncExternalStore: Ta,
          useId: ei,
          unstable_isNewReconciler: !1,
        },
        si = {
          readContext: Ro,
          useCallback: Xa,
          useContext: Ro,
          useEffect: Qa,
          useImperativeHandle: qa,
          useInsertionEffect: ja,
          useLayoutEffect: Ka,
          useMemo: Ga,
          useReducer: Ma,
          useRef: Ba,
          useState: function () {
            return Ma(Pa);
          },
          useDebugValue: Ya,
          useDeferredValue: function (e) {
            var t = Na();
            return null === ga
              ? (t.memoizedState = e)
              : Ja(t, ga.memoizedState, e);
          },
          useTransition: function () {
            return [Ma(Pa)[0], Na().memoizedState];
          },
          useMutableSource: La,
          useSyncExternalStore: Ta,
          useId: ei,
          unstable_isNewReconciler: !1,
        };
      function ci(e, t) {
        try {
          var n = "",
            r = t;
          do {
            (n += H(r)), (r = r.return);
          } while (r);
          var l = n;
        } catch (e) {
          l = "\nError generating stack: " + e.message + "\n" + e.stack;
        }
        return { value: e, source: t, stack: l, digest: null };
      }
      function fi(e, t, n) {
        return {
          value: e,
          source: null,
          stack: null != n ? n : null,
          digest: null != t ? t : null,
        };
      }
      function di(e, t) {
        try {
          console.error(t.value);
        } catch (e) {
          setTimeout(function () {
            throw e;
          });
        }
      }
      var pi = "function" == typeof WeakMap ? WeakMap : Map;
      function hi(e, t, n) {
        ((n = Fo(-1, n)).tag = 3), (n.payload = { element: null });
        var r = t.value;
        return (
          (n.callback = function () {
            ju || ((ju = !0), (Ku = r)), di(0, t);
          }),
          n
        );
      }
      function mi(e, t, n) {
        (n = Fo(-1, n)).tag = 3;
        var r = e.type.getDerivedStateFromError;
        if ("function" == typeof r) {
          var l = t.value;
          (n.payload = function () {
            return r(l);
          }),
            (n.callback = function () {
              di(0, t);
            });
        }
        var o = e.stateNode;
        return (
          null !== o &&
            "function" == typeof o.componentDidCatch &&
            (n.callback = function () {
              di(0, t),
                "function" != typeof r &&
                  (null === $u ? ($u = new Set([this])) : $u.add(this));
              var e = t.stack;
              this.componentDidCatch(t.value, {
                componentStack: null !== e ? e : "",
              });
            }),
          n
        );
      }
      function gi(e, t, n) {
        var r = e.pingCache;
        if (null === r) {
          r = e.pingCache = new pi();
          var l = new Set();
          r.set(t, l);
        } else void 0 === (l = r.get(t)) && ((l = new Set()), r.set(t, l));
        l.has(n) || (l.add(n), (e = Rs.bind(null, e, t, n)), t.then(e, e));
      }
      function vi(e) {
        do {
          var t;
          if (
            ((t = 13 === e.tag) &&
              (t = null === (t = e.memoizedState) || null !== t.dehydrated),
            t)
          )
            return e;
          e = e.return;
        } while (null !== e);
        return null;
      }
      function yi(e, t, n, r, l) {
        return 0 == (1 & e.mode)
          ? (e === t
              ? (e.flags |= 65536)
              : ((e.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
                1 === n.tag &&
                  (null === n.alternate
                    ? (n.tag = 17)
                    : (((t = Fo(-1, 1)).tag = 2), Do(n, t, 1))),
                (n.lanes |= 1)),
            e)
          : ((e.flags |= 65536), (e.lanes = l), e);
      }
      var bi = w.ReactCurrentOwner,
        wi = !1;
      function ki(e, t, n, r) {
        t.child = null === e ? Jo(t, null, n, r) : Go(t, e.child, n, r);
      }
      function Si(e, t, n, r, l) {
        n = n.render;
        var o = t.ref;
        return (
          Co(t, l),
          (r = xa(e, t, n, r, o, l)),
          (n = Ca()),
          null === e || wi
            ? (lo && n && eo(t), (t.flags |= 1), ki(e, t, r, l), t.child)
            : ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~l),
              ji(e, t, l))
        );
      }
      function Ei(e, t, n, r, l) {
        if (null === e) {
          var o = n.type;
          return "function" != typeof o ||
            zs(o) ||
            void 0 !== o.defaultProps ||
            null !== n.compare ||
            void 0 !== n.defaultProps
            ? (((e = Ds(n.type, null, r, t, t.mode, l)).ref = t.ref),
              (e.return = t),
              (t.child = e))
            : ((t.tag = 15), (t.type = o), xi(e, t, o, r, l));
        }
        if (((o = e.child), 0 == (e.lanes & l))) {
          var a = o.memoizedProps;
          if ((n = null !== (n = n.compare) ? n : ur)(a, r) && e.ref === t.ref)
            return ji(e, t, l);
        }
        return (
          (t.flags |= 1),
          ((e = Fs(o, r)).ref = t.ref),
          (e.return = t),
          (t.child = e)
        );
      }
      function xi(e, t, n, r, l) {
        if (null !== e) {
          var o = e.memoizedProps;
          if (ur(o, r) && e.ref === t.ref) {
            if (((wi = !1), (t.pendingProps = r = o), 0 == (e.lanes & l)))
              return (t.lanes = e.lanes), ji(e, t, l);
            0 != (131072 & e.flags) && (wi = !0);
          }
        }
        return Ni(e, t, n, r, l);
      }
      function Ci(e, t, n) {
        var r = t.pendingProps,
          l = r.children,
          o = null !== e ? e.memoizedState : null;
        if ("hidden" === r.mode)
          if (0 == (1 & t.mode))
            (t.memoizedState = {
              baseLanes: 0,
              cachePool: null,
              transitions: null,
            }),
              Rl(Fu, zu),
              (zu |= n);
          else {
            if (0 == (1073741824 & n))
              return (
                (e = null !== o ? o.baseLanes | n : n),
                (t.lanes = t.childLanes = 1073741824),
                (t.memoizedState = {
                  baseLanes: e,
                  cachePool: null,
                  transitions: null,
                }),
                (t.updateQueue = null),
                Rl(Fu, zu),
                (zu |= e),
                null
              );
            (t.memoizedState = {
              baseLanes: 0,
              cachePool: null,
              transitions: null,
            }),
              (r = null !== o ? o.baseLanes : n),
              Rl(Fu, zu),
              (zu |= r);
          }
        else
          null !== o
            ? ((r = o.baseLanes | n), (t.memoizedState = null))
            : (r = n),
            Rl(Fu, zu),
            (zu |= r);
        return ki(e, t, l, n), t.child;
      }
      function Ri(e, t) {
        var n = t.ref;
        ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
          ((t.flags |= 512), (t.flags |= 2097152));
      }
      function Ni(e, t, n, r, l) {
        var o = Tl(n) ? Ml : Pl.current;
        return (
          (o = Ll(t, o)),
          Co(t, l),
          (n = xa(e, t, n, r, o, l)),
          (r = Ca()),
          null === e || wi
            ? (lo && r && eo(t), (t.flags |= 1), ki(e, t, n, l), t.child)
            : ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~l),
              ji(e, t, l))
        );
      }
      function Pi(e, t, n, r, l) {
        if (Tl(n)) {
          var o = !0;
          Ol(t);
        } else o = !1;
        if ((Co(t, l), null === t.stateNode))
          Qi(e, t), Qo(t, n, r), Ko(t, n, r, l), (r = !0);
        else if (null === e) {
          var a = t.stateNode,
            i = t.memoizedProps;
          a.props = i;
          var u = a.context,
            s = n.contextType;
          s =
            "object" == typeof s && null !== s
              ? Ro(s)
              : Ll(t, (s = Tl(n) ? Ml : Pl.current));
          var c = n.getDerivedStateFromProps,
            f =
              "function" == typeof c ||
              "function" == typeof a.getSnapshotBeforeUpdate;
          f ||
            ("function" != typeof a.UNSAFE_componentWillReceiveProps &&
              "function" != typeof a.componentWillReceiveProps) ||
            ((i !== r || u !== s) && jo(t, a, r, s)),
            (Lo = !1);
          var d = t.memoizedState;
          (a.state = d),
            Io(t, r, a, l),
            (u = t.memoizedState),
            i !== r || d !== u || _l.current || Lo
              ? ("function" == typeof c &&
                  (Ho(t, n, c, r), (u = t.memoizedState)),
                (i = Lo || Wo(t, n, i, r, d, u, s))
                  ? (f ||
                      ("function" != typeof a.UNSAFE_componentWillMount &&
                        "function" != typeof a.componentWillMount) ||
                      ("function" == typeof a.componentWillMount &&
                        a.componentWillMount(),
                      "function" == typeof a.UNSAFE_componentWillMount &&
                        a.UNSAFE_componentWillMount()),
                    "function" == typeof a.componentDidMount &&
                      (t.flags |= 4194308))
                  : ("function" == typeof a.componentDidMount &&
                      (t.flags |= 4194308),
                    (t.memoizedProps = r),
                    (t.memoizedState = u)),
                (a.props = r),
                (a.state = u),
                (a.context = s),
                (r = i))
              : ("function" == typeof a.componentDidMount &&
                  (t.flags |= 4194308),
                (r = !1));
        } else {
          (a = t.stateNode),
            zo(e, t),
            (i = t.memoizedProps),
            (s = t.type === t.elementType ? i : vo(t.type, i)),
            (a.props = s),
            (f = t.pendingProps),
            (d = a.context),
            (u =
              "object" == typeof (u = n.contextType) && null !== u
                ? Ro(u)
                : Ll(t, (u = Tl(n) ? Ml : Pl.current)));
          var p = n.getDerivedStateFromProps;
          (c =
            "function" == typeof p ||
            "function" == typeof a.getSnapshotBeforeUpdate) ||
            ("function" != typeof a.UNSAFE_componentWillReceiveProps &&
              "function" != typeof a.componentWillReceiveProps) ||
            ((i !== f || d !== u) && jo(t, a, r, u)),
            (Lo = !1),
            (d = t.memoizedState),
            (a.state = d),
            Io(t, r, a, l);
          var h = t.memoizedState;
          i !== f || d !== h || _l.current || Lo
            ? ("function" == typeof p &&
                (Ho(t, n, p, r), (h = t.memoizedState)),
              (s = Lo || Wo(t, n, s, r, d, h, u) || !1)
                ? (c ||
                    ("function" != typeof a.UNSAFE_componentWillUpdate &&
                      "function" != typeof a.componentWillUpdate) ||
                    ("function" == typeof a.componentWillUpdate &&
                      a.componentWillUpdate(r, h, u),
                    "function" == typeof a.UNSAFE_componentWillUpdate &&
                      a.UNSAFE_componentWillUpdate(r, h, u)),
                  "function" == typeof a.componentDidUpdate && (t.flags |= 4),
                  "function" == typeof a.getSnapshotBeforeUpdate &&
                    (t.flags |= 1024))
                : ("function" != typeof a.componentDidUpdate ||
                    (i === e.memoizedProps && d === e.memoizedState) ||
                    (t.flags |= 4),
                  "function" != typeof a.getSnapshotBeforeUpdate ||
                    (i === e.memoizedProps && d === e.memoizedState) ||
                    (t.flags |= 1024),
                  (t.memoizedProps = r),
                  (t.memoizedState = h)),
              (a.props = r),
              (a.state = h),
              (a.context = u),
              (r = s))
            : ("function" != typeof a.componentDidUpdate ||
                (i === e.memoizedProps && d === e.memoizedState) ||
                (t.flags |= 4),
              "function" != typeof a.getSnapshotBeforeUpdate ||
                (i === e.memoizedProps && d === e.memoizedState) ||
                (t.flags |= 1024),
              (r = !1));
        }
        return _i(e, t, n, r, o, l);
      }
      function _i(e, t, n, r, l, o) {
        Ri(e, t);
        var a = 0 != (128 & t.flags);
        if (!r && !a) return l && Al(t, n, !1), ji(e, t, o);
        (r = t.stateNode), (bi.current = t);
        var i =
          a && "function" != typeof n.getDerivedStateFromError
            ? null
            : r.render();
        return (
          (t.flags |= 1),
          null !== e && a
            ? ((t.child = Go(t, e.child, null, o)),
              (t.child = Go(t, null, i, o)))
            : ki(e, t, i, o),
          (t.memoizedState = r.state),
          l && Al(t, n, !0),
          t.child
        );
      }
      function Mi(e) {
        var t = e.stateNode;
        t.pendingContext
          ? Fl(0, t.pendingContext, t.pendingContext !== t.context)
          : t.context && Fl(0, t.context, !1),
          la(e, t.containerInfo);
      }
      function Li(e, t, n, r, l) {
        return ho(), mo(l), (t.flags |= 256), ki(e, t, n, r), t.child;
      }
      var Ti,
        zi,
        Fi,
        Di,
        Oi = { dehydrated: null, treeContext: null, retryLane: 0 };
      function Ai(e) {
        return { baseLanes: e, cachePool: null, transitions: null };
      }
      function Ii(e, t, n) {
        var r,
          l = t.pendingProps,
          a = ua.current,
          i = !1,
          u = 0 != (128 & t.flags);
        if (
          ((r = u) ||
            (r = (null === e || null !== e.memoizedState) && 0 != (2 & a)),
          r
            ? ((i = !0), (t.flags &= -129))
            : (null !== e && null === e.memoizedState) || (a |= 1),
          Rl(ua, 1 & a),
          null === e)
        )
          return (
            so(t),
            null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
              ? (0 == (1 & t.mode)
                  ? (t.lanes = 1)
                  : "$!" === e.data
                  ? (t.lanes = 8)
                  : (t.lanes = 1073741824),
                null)
              : ((u = l.children),
                (e = l.fallback),
                i
                  ? ((l = t.mode),
                    (i = t.child),
                    (u = { mode: "hidden", children: u }),
                    0 == (1 & l) && null !== i
                      ? ((i.childLanes = 0), (i.pendingProps = u))
                      : (i = As(u, l, 0, null)),
                    (e = Os(e, l, n, null)),
                    (i.return = t),
                    (e.return = t),
                    (i.sibling = e),
                    (t.child = i),
                    (t.child.memoizedState = Ai(n)),
                    (t.memoizedState = Oi),
                    e)
                  : Ui(t, u))
          );
        if (null !== (a = e.memoizedState) && null !== (r = a.dehydrated))
          return (function (e, t, n, r, l, a, i) {
            if (n)
              return 256 & t.flags
                ? ((t.flags &= -257), Bi(e, t, i, (r = fi(Error(o(422))))))
                : null !== t.memoizedState
                ? ((t.child = e.child), (t.flags |= 128), null)
                : ((a = r.fallback),
                  (l = t.mode),
                  (r = As(
                    { mode: "visible", children: r.children },
                    l,
                    0,
                    null
                  )),
                  ((a = Os(a, l, i, null)).flags |= 2),
                  (r.return = t),
                  (a.return = t),
                  (r.sibling = a),
                  (t.child = r),
                  0 != (1 & t.mode) && Go(t, e.child, null, i),
                  (t.child.memoizedState = Ai(i)),
                  (t.memoizedState = Oi),
                  a);
            if (0 == (1 & t.mode)) return Bi(e, t, i, null);
            if ("$!" === l.data) {
              if ((r = l.nextSibling && l.nextSibling.dataset)) var u = r.dgst;
              return (
                (r = u), Bi(e, t, i, (r = fi((a = Error(o(419))), r, void 0)))
              );
            }
            if (((u = 0 != (i & e.childLanes)), wi || u)) {
              if (null !== (r = Mu)) {
                switch (i & -i) {
                  case 4:
                    l = 2;
                    break;
                  case 16:
                    l = 8;
                    break;
                  case 64:
                  case 128:
                  case 256:
                  case 512:
                  case 1024:
                  case 2048:
                  case 4096:
                  case 8192:
                  case 16384:
                  case 32768:
                  case 65536:
                  case 131072:
                  case 262144:
                  case 524288:
                  case 1048576:
                  case 2097152:
                  case 4194304:
                  case 8388608:
                  case 16777216:
                  case 33554432:
                  case 67108864:
                    l = 32;
                    break;
                  case 536870912:
                    l = 268435456;
                    break;
                  default:
                    l = 0;
                }
                0 !== (l = 0 != (l & (r.suspendedLanes | i)) ? 0 : l) &&
                  l !== a.retryLane &&
                  ((a.retryLane = l), Mo(e, l), rs(r, e, l, -1));
              }
              return gs(), Bi(e, t, i, (r = fi(Error(o(421)))));
            }
            return "$?" === l.data
              ? ((t.flags |= 128),
                (t.child = e.child),
                (t = Ps.bind(null, e)),
                (l._reactRetry = t),
                null)
              : ((e = a.treeContext),
                (ro = sl(l.nextSibling)),
                (no = t),
                (lo = !0),
                (oo = null),
                null !== e &&
                  (($l[ql++] = Xl),
                  ($l[ql++] = Gl),
                  ($l[ql++] = Yl),
                  (Xl = e.id),
                  (Gl = e.overflow),
                  (Yl = t)),
                ((t = Ui(t, r.children)).flags |= 4096),
                t);
          })(e, t, u, l, r, a, n);
        if (i) {
          (i = l.fallback), (u = t.mode), (r = (a = e.child).sibling);
          var s = { mode: "hidden", children: l.children };
          return (
            0 == (1 & u) && t.child !== a
              ? (((l = t.child).childLanes = 0),
                (l.pendingProps = s),
                (t.deletions = null))
              : ((l = Fs(a, s)).subtreeFlags = 14680064 & a.subtreeFlags),
            null !== r ? (i = Fs(r, i)) : ((i = Os(i, u, n, null)).flags |= 2),
            (i.return = t),
            (l.return = t),
            (l.sibling = i),
            (t.child = l),
            (l = i),
            (i = t.child),
            (u =
              null === (u = e.child.memoizedState)
                ? Ai(n)
                : {
                    baseLanes: u.baseLanes | n,
                    cachePool: null,
                    transitions: u.transitions,
                  }),
            (i.memoizedState = u),
            (i.childLanes = e.childLanes & ~n),
            (t.memoizedState = Oi),
            l
          );
        }
        return (
          (e = (i = e.child).sibling),
          (l = Fs(i, { mode: "visible", children: l.children })),
          0 == (1 & t.mode) && (l.lanes = n),
          (l.return = t),
          (l.sibling = null),
          null !== e &&
            (null === (n = t.deletions)
              ? ((t.deletions = [e]), (t.flags |= 16))
              : n.push(e)),
          (t.child = l),
          (t.memoizedState = null),
          l
        );
      }
      function Ui(e, t) {
        return (
          ((t = As({ mode: "visible", children: t }, e.mode, 0, null)).return =
            e),
          (e.child = t)
        );
      }
      function Bi(e, t, n, r) {
        return (
          null !== r && mo(r),
          Go(t, e.child, null, n),
          ((e = Ui(t, t.pendingProps.children)).flags |= 2),
          (t.memoizedState = null),
          e
        );
      }
      function Hi(e, t, n) {
        e.lanes |= t;
        var r = e.alternate;
        null !== r && (r.lanes |= t), xo(e.return, t, n);
      }
      function Vi(e, t, n, r, l) {
        var o = e.memoizedState;
        null === o
          ? (e.memoizedState = {
              isBackwards: t,
              rendering: null,
              renderingStartTime: 0,
              last: r,
              tail: n,
              tailMode: l,
            })
          : ((o.isBackwards = t),
            (o.rendering = null),
            (o.renderingStartTime = 0),
            (o.last = r),
            (o.tail = n),
            (o.tailMode = l));
      }
      function Wi(e, t, n) {
        var r = t.pendingProps,
          l = r.revealOrder,
          o = r.tail;
        if ((ki(e, t, r.children, n), 0 != (2 & (r = ua.current))))
          (r = (1 & r) | 2), (t.flags |= 128);
        else {
          if (null !== e && 0 != (128 & e.flags))
            e: for (e = t.child; null !== e; ) {
              if (13 === e.tag) null !== e.memoizedState && Hi(e, n, t);
              else if (19 === e.tag) Hi(e, n, t);
              else if (null !== e.child) {
                (e.child.return = e), (e = e.child);
                continue;
              }
              if (e === t) break e;
              for (; null === e.sibling; ) {
                if (null === e.return || e.return === t) break e;
                e = e.return;
              }
              (e.sibling.return = e.return), (e = e.sibling);
            }
          r &= 1;
        }
        if ((Rl(ua, r), 0 == (1 & t.mode))) t.memoizedState = null;
        else
          switch (l) {
            case "forwards":
              for (n = t.child, l = null; null !== n; )
                null !== (e = n.alternate) && null === sa(e) && (l = n),
                  (n = n.sibling);
              null === (n = l)
                ? ((l = t.child), (t.child = null))
                : ((l = n.sibling), (n.sibling = null)),
                Vi(t, !1, l, n, o);
              break;
            case "backwards":
              for (n = null, l = t.child, t.child = null; null !== l; ) {
                if (null !== (e = l.alternate) && null === sa(e)) {
                  t.child = l;
                  break;
                }
                (e = l.sibling), (l.sibling = n), (n = l), (l = e);
              }
              Vi(t, !0, n, null, o);
              break;
            case "together":
              Vi(t, !1, null, null, void 0);
              break;
            default:
              t.memoizedState = null;
          }
        return t.child;
      }
      function Qi(e, t) {
        0 == (1 & t.mode) &&
          null !== e &&
          ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
      }
      function ji(e, t, n) {
        if (
          (null !== e && (t.dependencies = e.dependencies),
          (Au |= t.lanes),
          0 == (n & t.childLanes))
        )
          return null;
        if (null !== e && t.child !== e.child) throw Error(o(153));
        if (null !== t.child) {
          for (
            n = Fs((e = t.child), e.pendingProps), t.child = n, n.return = t;
            null !== e.sibling;

          )
            (e = e.sibling),
              ((n = n.sibling = Fs(e, e.pendingProps)).return = t);
          n.sibling = null;
        }
        return t.child;
      }
      function Ki(e, t) {
        if (!lo)
          switch (e.tailMode) {
            case "hidden":
              t = e.tail;
              for (var n = null; null !== t; )
                null !== t.alternate && (n = t), (t = t.sibling);
              null === n ? (e.tail = null) : (n.sibling = null);
              break;
            case "collapsed":
              n = e.tail;
              for (var r = null; null !== n; )
                null !== n.alternate && (r = n), (n = n.sibling);
              null === r
                ? t || null === e.tail
                  ? (e.tail = null)
                  : (e.tail.sibling = null)
                : (r.sibling = null);
          }
      }
      function $i(e) {
        var t = null !== e.alternate && e.alternate.child === e.child,
          n = 0,
          r = 0;
        if (t)
          for (var l = e.child; null !== l; )
            (n |= l.lanes | l.childLanes),
              (r |= 14680064 & l.subtreeFlags),
              (r |= 14680064 & l.flags),
              (l.return = e),
              (l = l.sibling);
        else
          for (l = e.child; null !== l; )
            (n |= l.lanes | l.childLanes),
              (r |= l.subtreeFlags),
              (r |= l.flags),
              (l.return = e),
              (l = l.sibling);
        return (e.subtreeFlags |= r), (e.childLanes = n), t;
      }
      function qi(e, t, n) {
        var r = t.pendingProps;
        switch ((to(t), t.tag)) {
          case 2:
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return $i(t), null;
          case 1:
          case 17:
            return Tl(t.type) && zl(), $i(t), null;
          case 3:
            return (
              (r = t.stateNode),
              oa(),
              Cl(_l),
              Cl(Pl),
              fa(),
              r.pendingContext &&
                ((r.context = r.pendingContext), (r.pendingContext = null)),
              (null !== e && null !== e.child) ||
                (fo(t)
                  ? (t.flags |= 4)
                  : null === e ||
                    (e.memoizedState.isDehydrated && 0 == (256 & t.flags)) ||
                    ((t.flags |= 1024), null !== oo && (is(oo), (oo = null)))),
              zi(e, t),
              $i(t),
              null
            );
          case 5:
            ia(t);
            var l = ra(na.current);
            if (((n = t.type), null !== e && null != t.stateNode))
              Fi(e, t, n, r, l),
                e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
            else {
              if (!r) {
                if (null === t.stateNode) throw Error(o(166));
                return $i(t), null;
              }
              if (((e = ra(ea.current)), fo(t))) {
                (r = t.stateNode), (n = t.type);
                var a = t.memoizedProps;
                switch (
                  ((r[dl] = t), (r[pl] = a), (e = 0 != (1 & t.mode)), n)
                ) {
                  case "dialog":
                    Ur("cancel", r), Ur("close", r);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    Ur("load", r);
                    break;
                  case "video":
                  case "audio":
                    for (l = 0; l < Dr.length; l++) Ur(Dr[l], r);
                    break;
                  case "source":
                    Ur("error", r);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    Ur("error", r), Ur("load", r);
                    break;
                  case "details":
                    Ur("toggle", r);
                    break;
                  case "input":
                    X(r, a), Ur("invalid", r);
                    break;
                  case "select":
                    (r._wrapperState = { wasMultiple: !!a.multiple }),
                      Ur("invalid", r);
                    break;
                  case "textarea":
                    le(r, a), Ur("invalid", r);
                }
                for (var u in (ye(n, a), (l = null), a))
                  if (a.hasOwnProperty(u)) {
                    var s = a[u];
                    "children" === u
                      ? "string" == typeof s
                        ? r.textContent !== s &&
                          (!0 !== a.suppressHydrationWarning &&
                            Jr(r.textContent, s, e),
                          (l = ["children", s]))
                        : "number" == typeof s &&
                          r.textContent !== "" + s &&
                          (!0 !== a.suppressHydrationWarning &&
                            Jr(r.textContent, s, e),
                          (l = ["children", "" + s]))
                      : i.hasOwnProperty(u) &&
                        null != s &&
                        "onScroll" === u &&
                        Ur("scroll", r);
                  }
                switch (n) {
                  case "input":
                    K(r), Z(r, a, !0);
                    break;
                  case "textarea":
                    K(r), ae(r);
                    break;
                  case "select":
                  case "option":
                    break;
                  default:
                    "function" == typeof a.onClick && (r.onclick = Zr);
                }
                (r = l), (t.updateQueue = r), null !== r && (t.flags |= 4);
              } else {
                (u = 9 === l.nodeType ? l : l.ownerDocument),
                  "http://www.w3.org/1999/xhtml" === e && (e = ie(n)),
                  "http://www.w3.org/1999/xhtml" === e
                    ? "script" === n
                      ? (((e = u.createElement("div")).innerHTML =
                          "<script></script>"),
                        (e = e.removeChild(e.firstChild)))
                      : "string" == typeof r.is
                      ? (e = u.createElement(n, { is: r.is }))
                      : ((e = u.createElement(n)),
                        "select" === n &&
                          ((u = e),
                          r.multiple
                            ? (u.multiple = !0)
                            : r.size && (u.size = r.size)))
                    : (e = u.createElementNS(e, n)),
                  (e[dl] = t),
                  (e[pl] = r),
                  Ti(e, t, !1, !1),
                  (t.stateNode = e);
                e: {
                  switch (((u = be(n, r)), n)) {
                    case "dialog":
                      Ur("cancel", e), Ur("close", e), (l = r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Ur("load", e), (l = r);
                      break;
                    case "video":
                    case "audio":
                      for (l = 0; l < Dr.length; l++) Ur(Dr[l], e);
                      l = r;
                      break;
                    case "source":
                      Ur("error", e), (l = r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Ur("error", e), Ur("load", e), (l = r);
                      break;
                    case "details":
                      Ur("toggle", e), (l = r);
                      break;
                    case "input":
                      X(e, r), (l = Y(e, r)), Ur("invalid", e);
                      break;
                    case "option":
                    default:
                      l = r;
                      break;
                    case "select":
                      (e._wrapperState = { wasMultiple: !!r.multiple }),
                        (l = A({}, r, { value: void 0 })),
                        Ur("invalid", e);
                      break;
                    case "textarea":
                      le(e, r), (l = re(e, r)), Ur("invalid", e);
                  }
                  for (a in (ye(n, l), (s = l)))
                    if (s.hasOwnProperty(a)) {
                      var c = s[a];
                      "style" === a
                        ? ge(e, c)
                        : "dangerouslySetInnerHTML" === a
                        ? null != (c = c ? c.__html : void 0) && fe(e, c)
                        : "children" === a
                        ? "string" == typeof c
                          ? ("textarea" !== n || "" !== c) && de(e, c)
                          : "number" == typeof c && de(e, "" + c)
                        : "suppressContentEditableWarning" !== a &&
                          "suppressHydrationWarning" !== a &&
                          "autoFocus" !== a &&
                          (i.hasOwnProperty(a)
                            ? null != c && "onScroll" === a && Ur("scroll", e)
                            : null != c && b(e, a, c, u));
                    }
                  switch (n) {
                    case "input":
                      K(e), Z(e, r, !1);
                      break;
                    case "textarea":
                      K(e), ae(e);
                      break;
                    case "option":
                      null != r.value &&
                        e.setAttribute("value", "" + Q(r.value));
                      break;
                    case "select":
                      (e.multiple = !!r.multiple),
                        null != (a = r.value)
                          ? ne(e, !!r.multiple, a, !1)
                          : null != r.defaultValue &&
                            ne(e, !!r.multiple, r.defaultValue, !0);
                      break;
                    default:
                      "function" == typeof l.onClick && (e.onclick = Zr);
                  }
                  switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      r = !!r.autoFocus;
                      break e;
                    case "img":
                      r = !0;
                      break e;
                    default:
                      r = !1;
                  }
                }
                r && (t.flags |= 4);
              }
              null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
            }
            return $i(t), null;
          case 6:
            if (e && null != t.stateNode) Di(e, t, e.memoizedProps, r);
            else {
              if ("string" != typeof r && null === t.stateNode)
                throw Error(o(166));
              if (((n = ra(na.current)), ra(ea.current), fo(t))) {
                if (
                  ((r = t.stateNode),
                  (n = t.memoizedProps),
                  (r[dl] = t),
                  (a = r.nodeValue !== n) && null !== (e = no))
                )
                  switch (e.tag) {
                    case 3:
                      Jr(r.nodeValue, n, 0 != (1 & e.mode));
                      break;
                    case 5:
                      !0 !== e.memoizedProps.suppressHydrationWarning &&
                        Jr(r.nodeValue, n, 0 != (1 & e.mode));
                  }
                a && (t.flags |= 4);
              } else
                ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                  r
                ))[dl] = t),
                  (t.stateNode = r);
            }
            return $i(t), null;
          case 13:
            if (
              (Cl(ua),
              (r = t.memoizedState),
              null === e ||
                (null !== e.memoizedState &&
                  null !== e.memoizedState.dehydrated))
            ) {
              if (
                lo &&
                null !== ro &&
                0 != (1 & t.mode) &&
                0 == (128 & t.flags)
              )
                po(), ho(), (t.flags |= 98560), (a = !1);
              else if (((a = fo(t)), null !== r && null !== r.dehydrated)) {
                if (null === e) {
                  if (!a) throw Error(o(318));
                  if (
                    !(a = null !== (a = t.memoizedState) ? a.dehydrated : null)
                  )
                    throw Error(o(317));
                  a[dl] = t;
                } else
                  ho(),
                    0 == (128 & t.flags) && (t.memoizedState = null),
                    (t.flags |= 4);
                $i(t), (a = !1);
              } else null !== oo && (is(oo), (oo = null)), (a = !0);
              if (!a) return 65536 & t.flags ? t : null;
            }
            return 0 != (128 & t.flags)
              ? ((t.lanes = n), t)
              : ((r = null !== r) != (null !== e && null !== e.memoizedState) &&
                  r &&
                  ((t.child.flags |= 8192),
                  0 != (1 & t.mode) &&
                    (null === e || 0 != (1 & ua.current)
                      ? 0 === Du && (Du = 3)
                      : gs())),
                null !== t.updateQueue && (t.flags |= 4),
                $i(t),
                null);
          case 4:
            return (
              oa(),
              zi(e, t),
              null === e && Vr(t.stateNode.containerInfo),
              $i(t),
              null
            );
          case 10:
            return Eo(t.type._context), $i(t), null;
          case 19:
            if ((Cl(ua), null === (a = t.memoizedState))) return $i(t), null;
            if (((r = 0 != (128 & t.flags)), null === (u = a.rendering)))
              if (r) Ki(a, !1);
              else {
                if (0 !== Du || (null !== e && 0 != (128 & e.flags)))
                  for (e = t.child; null !== e; ) {
                    if (null !== (u = sa(e))) {
                      for (
                        t.flags |= 128,
                          Ki(a, !1),
                          null !== (r = u.updateQueue) &&
                            ((t.updateQueue = r), (t.flags |= 4)),
                          t.subtreeFlags = 0,
                          r = n,
                          n = t.child;
                        null !== n;

                      )
                        (e = r),
                          ((a = n).flags &= 14680066),
                          null === (u = a.alternate)
                            ? ((a.childLanes = 0),
                              (a.lanes = e),
                              (a.child = null),
                              (a.subtreeFlags = 0),
                              (a.memoizedProps = null),
                              (a.memoizedState = null),
                              (a.updateQueue = null),
                              (a.dependencies = null),
                              (a.stateNode = null))
                            : ((a.childLanes = u.childLanes),
                              (a.lanes = u.lanes),
                              (a.child = u.child),
                              (a.subtreeFlags = 0),
                              (a.deletions = null),
                              (a.memoizedProps = u.memoizedProps),
                              (a.memoizedState = u.memoizedState),
                              (a.updateQueue = u.updateQueue),
                              (a.type = u.type),
                              (e = u.dependencies),
                              (a.dependencies =
                                null === e
                                  ? null
                                  : {
                                      lanes: e.lanes,
                                      firstContext: e.firstContext,
                                    })),
                          (n = n.sibling);
                      return Rl(ua, (1 & ua.current) | 2), t.child;
                    }
                    e = e.sibling;
                  }
                null !== a.tail &&
                  Ge() > Wu &&
                  ((t.flags |= 128), (r = !0), Ki(a, !1), (t.lanes = 4194304));
              }
            else {
              if (!r)
                if (null !== (e = sa(u))) {
                  if (
                    ((t.flags |= 128),
                    (r = !0),
                    null !== (n = e.updateQueue) &&
                      ((t.updateQueue = n), (t.flags |= 4)),
                    Ki(a, !0),
                    null === a.tail &&
                      "hidden" === a.tailMode &&
                      !u.alternate &&
                      !lo)
                  )
                    return $i(t), null;
                } else
                  2 * Ge() - a.renderingStartTime > Wu &&
                    1073741824 !== n &&
                    ((t.flags |= 128),
                    (r = !0),
                    Ki(a, !1),
                    (t.lanes = 4194304));
              a.isBackwards
                ? ((u.sibling = t.child), (t.child = u))
                : (null !== (n = a.last) ? (n.sibling = u) : (t.child = u),
                  (a.last = u));
            }
            return null !== a.tail
              ? ((t = a.tail),
                (a.rendering = t),
                (a.tail = t.sibling),
                (a.renderingStartTime = Ge()),
                (t.sibling = null),
                (n = ua.current),
                Rl(ua, r ? (1 & n) | 2 : 1 & n),
                t)
              : ($i(t), null);
          case 22:
          case 23:
            return (
              ds(),
              (r = null !== t.memoizedState),
              null !== e &&
                (null !== e.memoizedState) !== r &&
                (t.flags |= 8192),
              r && 0 != (1 & t.mode)
                ? 0 != (1073741824 & zu) &&
                  ($i(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                : $i(t),
              null
            );
          case 24:
          case 25:
            return null;
        }
        throw Error(o(156, t.tag));
      }
      function Yi(e, t) {
        switch ((to(t), t.tag)) {
          case 1:
            return (
              Tl(t.type) && zl(),
              65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null
            );
          case 3:
            return (
              oa(),
              Cl(_l),
              Cl(Pl),
              fa(),
              0 != (65536 & (e = t.flags)) && 0 == (128 & e)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null
            );
          case 5:
            return ia(t), null;
          case 13:
            if (
              (Cl(ua), null !== (e = t.memoizedState) && null !== e.dehydrated)
            ) {
              if (null === t.alternate) throw Error(o(340));
              ho();
            }
            return 65536 & (e = t.flags)
              ? ((t.flags = (-65537 & e) | 128), t)
              : null;
          case 19:
            return Cl(ua), null;
          case 4:
            return oa(), null;
          case 10:
            return Eo(t.type._context), null;
          case 22:
          case 23:
            return ds(), null;
          default:
            return null;
        }
      }
      (Ti = function (e, t) {
        for (var n = t.child; null !== n; ) {
          if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
          else if (4 !== n.tag && null !== n.child) {
            (n.child.return = n), (n = n.child);
            continue;
          }
          if (n === t) break;
          for (; null === n.sibling; ) {
            if (null === n.return || n.return === t) return;
            n = n.return;
          }
          (n.sibling.return = n.return), (n = n.sibling);
        }
      }),
        (zi = function () {}),
        (Fi = function (e, t, n, r) {
          var l = e.memoizedProps;
          if (l !== r) {
            (e = t.stateNode), ra(ea.current);
            var o,
              a = null;
            switch (n) {
              case "input":
                (l = Y(e, l)), (r = Y(e, r)), (a = []);
                break;
              case "select":
                (l = A({}, l, { value: void 0 })),
                  (r = A({}, r, { value: void 0 })),
                  (a = []);
                break;
              case "textarea":
                (l = re(e, l)), (r = re(e, r)), (a = []);
                break;
              default:
                "function" != typeof l.onClick &&
                  "function" == typeof r.onClick &&
                  (e.onclick = Zr);
            }
            for (c in (ye(n, r), (n = null), l))
              if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && null != l[c])
                if ("style" === c) {
                  var u = l[c];
                  for (o in u)
                    u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
                } else
                  "dangerouslySetInnerHTML" !== c &&
                    "children" !== c &&
                    "suppressContentEditableWarning" !== c &&
                    "suppressHydrationWarning" !== c &&
                    "autoFocus" !== c &&
                    (i.hasOwnProperty(c)
                      ? a || (a = [])
                      : (a = a || []).push(c, null));
            for (c in r) {
              var s = r[c];
              if (
                ((u = null != l ? l[c] : void 0),
                r.hasOwnProperty(c) && s !== u && (null != s || null != u))
              )
                if ("style" === c)
                  if (u) {
                    for (o in u)
                      !u.hasOwnProperty(o) ||
                        (s && s.hasOwnProperty(o)) ||
                        (n || (n = {}), (n[o] = ""));
                    for (o in s)
                      s.hasOwnProperty(o) &&
                        u[o] !== s[o] &&
                        (n || (n = {}), (n[o] = s[o]));
                  } else n || (a || (a = []), a.push(c, n)), (n = s);
                else
                  "dangerouslySetInnerHTML" === c
                    ? ((s = s ? s.__html : void 0),
                      (u = u ? u.__html : void 0),
                      null != s && u !== s && (a = a || []).push(c, s))
                    : "children" === c
                    ? ("string" != typeof s && "number" != typeof s) ||
                      (a = a || []).push(c, "" + s)
                    : "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      (i.hasOwnProperty(c)
                        ? (null != s && "onScroll" === c && Ur("scroll", e),
                          a || u === s || (a = []))
                        : (a = a || []).push(c, s));
            }
            n && (a = a || []).push("style", n);
            var c = a;
            (t.updateQueue = c) && (t.flags |= 4);
          }
        }),
        (Di = function (e, t, n, r) {
          n !== r && (t.flags |= 4);
        });
      var Xi = !1,
        Gi = !1,
        Ji = "function" == typeof WeakSet ? WeakSet : Set,
        Zi = null;
      function eu(e, t) {
        var n = e.ref;
        if (null !== n)
          if ("function" == typeof n)
            try {
              n(null);
            } catch (n) {
              Cs(e, t, n);
            }
          else n.current = null;
      }
      function tu(e, t, n) {
        try {
          n();
        } catch (n) {
          Cs(e, t, n);
        }
      }
      var nu = !1;
      function ru(e, t, n) {
        var r = t.updateQueue;
        if (null !== (r = null !== r ? r.lastEffect : null)) {
          var l = (r = r.next);
          do {
            if ((l.tag & e) === e) {
              var o = l.destroy;
              (l.destroy = void 0), void 0 !== o && tu(t, n, o);
            }
            l = l.next;
          } while (l !== r);
        }
      }
      function lu(e, t) {
        if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
          var n = (t = t.next);
          do {
            if ((n.tag & e) === e) {
              var r = n.create;
              n.destroy = r();
            }
            n = n.next;
          } while (n !== t);
        }
      }
      function ou(e) {
        var t = e.ref;
        if (null !== t) {
          var n = e.stateNode;
          e.tag, (e = n), "function" == typeof t ? t(e) : (t.current = e);
        }
      }
      function au(e) {
        var t = e.alternate;
        null !== t && ((e.alternate = null), au(t)),
          (e.child = null),
          (e.deletions = null),
          (e.sibling = null),
          5 === e.tag &&
            null !== (t = e.stateNode) &&
            (delete t[dl],
            delete t[pl],
            delete t[ml],
            delete t[gl],
            delete t[vl]),
          (e.stateNode = null),
          (e.return = null),
          (e.dependencies = null),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.pendingProps = null),
          (e.stateNode = null),
          (e.updateQueue = null);
      }
      function iu(e) {
        return 5 === e.tag || 3 === e.tag || 4 === e.tag;
      }
      function uu(e) {
        e: for (;;) {
          for (; null === e.sibling; ) {
            if (null === e.return || iu(e.return)) return null;
            e = e.return;
          }
          for (
            e.sibling.return = e.return, e = e.sibling;
            5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

          ) {
            if (2 & e.flags) continue e;
            if (null === e.child || 4 === e.tag) continue e;
            (e.child.return = e), (e = e.child);
          }
          if (!(2 & e.flags)) return e.stateNode;
        }
      }
      function su(e, t, n) {
        var r = e.tag;
        if (5 === r || 6 === r)
          (e = e.stateNode),
            t
              ? 8 === n.nodeType
                ? n.parentNode.insertBefore(e, t)
                : n.insertBefore(e, t)
              : (8 === n.nodeType
                  ? (t = n.parentNode).insertBefore(e, n)
                  : (t = n).appendChild(e),
                null != (n = n._reactRootContainer) ||
                  null !== t.onclick ||
                  (t.onclick = Zr));
        else if (4 !== r && null !== (e = e.child))
          for (su(e, t, n), e = e.sibling; null !== e; )
            su(e, t, n), (e = e.sibling);
      }
      function cu(e, t, n) {
        var r = e.tag;
        if (5 === r || 6 === r)
          (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (4 !== r && null !== (e = e.child))
          for (cu(e, t, n), e = e.sibling; null !== e; )
            cu(e, t, n), (e = e.sibling);
      }
      var fu = null,
        du = !1;
      function pu(e, t, n) {
        for (n = n.child; null !== n; ) hu(e, t, n), (n = n.sibling);
      }
      function hu(e, t, n) {
        if (ot && "function" == typeof ot.onCommitFiberUnmount)
          try {
            ot.onCommitFiberUnmount(lt, n);
          } catch (e) {}
        switch (n.tag) {
          case 5:
            Gi || eu(n, t);
          case 6:
            var r = fu,
              l = du;
            (fu = null),
              pu(e, t, n),
              (du = l),
              null !== (fu = r) &&
                (du
                  ? ((e = fu),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? e.parentNode.removeChild(n)
                      : e.removeChild(n))
                  : fu.removeChild(n.stateNode));
            break;
          case 18:
            null !== fu &&
              (du
                ? ((e = fu),
                  (n = n.stateNode),
                  8 === e.nodeType
                    ? ul(e.parentNode, n)
                    : 1 === e.nodeType && ul(e, n),
                  Vt(e))
                : ul(fu, n.stateNode));
            break;
          case 4:
            (r = fu),
              (l = du),
              (fu = n.stateNode.containerInfo),
              (du = !0),
              pu(e, t, n),
              (fu = r),
              (du = l);
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            if (
              !Gi &&
              null !== (r = n.updateQueue) &&
              null !== (r = r.lastEffect)
            ) {
              l = r = r.next;
              do {
                var o = l,
                  a = o.destroy;
                (o = o.tag),
                  void 0 !== a && (0 != (2 & o) || 0 != (4 & o)) && tu(n, t, a),
                  (l = l.next);
              } while (l !== r);
            }
            pu(e, t, n);
            break;
          case 1:
            if (
              !Gi &&
              (eu(n, t),
              "function" == typeof (r = n.stateNode).componentWillUnmount)
            )
              try {
                (r.props = n.memoizedProps),
                  (r.state = n.memoizedState),
                  r.componentWillUnmount();
              } catch (e) {
                Cs(n, t, e);
              }
            pu(e, t, n);
            break;
          case 21:
            pu(e, t, n);
            break;
          case 22:
            1 & n.mode
              ? ((Gi = (r = Gi) || null !== n.memoizedState),
                pu(e, t, n),
                (Gi = r))
              : pu(e, t, n);
            break;
          default:
            pu(e, t, n);
        }
      }
      function mu(e) {
        var t = e.updateQueue;
        if (null !== t) {
          e.updateQueue = null;
          var n = e.stateNode;
          null === n && (n = e.stateNode = new Ji()),
            t.forEach(function (t) {
              var r = _s.bind(null, e, t);
              n.has(t) || (n.add(t), t.then(r, r));
            });
        }
      }
      function gu(e, t) {
        var n = t.deletions;
        if (null !== n)
          for (var r = 0; r < n.length; r++) {
            var l = n[r];
            try {
              var a = e,
                i = t,
                u = i;
              e: for (; null !== u; ) {
                switch (u.tag) {
                  case 5:
                    (fu = u.stateNode), (du = !1);
                    break e;
                  case 3:
                  case 4:
                    (fu = u.stateNode.containerInfo), (du = !0);
                    break e;
                }
                u = u.return;
              }
              if (null === fu) throw Error(o(160));
              hu(a, i, l), (fu = null), (du = !1);
              var s = l.alternate;
              null !== s && (s.return = null), (l.return = null);
            } catch (e) {
              Cs(l, t, e);
            }
          }
        if (12854 & t.subtreeFlags)
          for (t = t.child; null !== t; ) vu(t, e), (t = t.sibling);
      }
      function vu(e, t) {
        var n = e.alternate,
          r = e.flags;
        switch (e.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            if ((gu(t, e), yu(e), 4 & r)) {
              try {
                ru(3, e, e.return), lu(3, e);
              } catch (t) {
                Cs(e, e.return, t);
              }
              try {
                ru(5, e, e.return);
              } catch (t) {
                Cs(e, e.return, t);
              }
            }
            break;
          case 1:
            gu(t, e), yu(e), 512 & r && null !== n && eu(n, n.return);
            break;
          case 5:
            if (
              (gu(t, e),
              yu(e),
              512 & r && null !== n && eu(n, n.return),
              32 & e.flags)
            ) {
              var l = e.stateNode;
              try {
                de(l, "");
              } catch (t) {
                Cs(e, e.return, t);
              }
            }
            if (4 & r && null != (l = e.stateNode)) {
              var a = e.memoizedProps,
                i = null !== n ? n.memoizedProps : a,
                u = e.type,
                s = e.updateQueue;
              if (((e.updateQueue = null), null !== s))
                try {
                  "input" === u &&
                    "radio" === a.type &&
                    null != a.name &&
                    G(l, a),
                    be(u, i);
                  var c = be(u, a);
                  for (i = 0; i < s.length; i += 2) {
                    var f = s[i],
                      d = s[i + 1];
                    "style" === f
                      ? ge(l, d)
                      : "dangerouslySetInnerHTML" === f
                      ? fe(l, d)
                      : "children" === f
                      ? de(l, d)
                      : b(l, f, d, c);
                  }
                  switch (u) {
                    case "input":
                      J(l, a);
                      break;
                    case "textarea":
                      oe(l, a);
                      break;
                    case "select":
                      var p = l._wrapperState.wasMultiple;
                      l._wrapperState.wasMultiple = !!a.multiple;
                      var h = a.value;
                      null != h
                        ? ne(l, !!a.multiple, h, !1)
                        : p !== !!a.multiple &&
                          (null != a.defaultValue
                            ? ne(l, !!a.multiple, a.defaultValue, !0)
                            : ne(l, !!a.multiple, a.multiple ? [] : "", !1));
                  }
                  l[pl] = a;
                } catch (t) {
                  Cs(e, e.return, t);
                }
            }
            break;
          case 6:
            if ((gu(t, e), yu(e), 4 & r)) {
              if (null === e.stateNode) throw Error(o(162));
              (l = e.stateNode), (a = e.memoizedProps);
              try {
                l.nodeValue = a;
              } catch (t) {
                Cs(e, e.return, t);
              }
            }
            break;
          case 3:
            if (
              (gu(t, e),
              yu(e),
              4 & r && null !== n && n.memoizedState.isDehydrated)
            )
              try {
                Vt(t.containerInfo);
              } catch (t) {
                Cs(e, e.return, t);
              }
            break;
          case 4:
          default:
            gu(t, e), yu(e);
            break;
          case 13:
            gu(t, e),
              yu(e),
              8192 & (l = e.child).flags &&
                ((a = null !== l.memoizedState),
                (l.stateNode.isHidden = a),
                !a ||
                  (null !== l.alternate &&
                    null !== l.alternate.memoizedState) ||
                  (Vu = Ge())),
              4 & r && mu(e);
            break;
          case 22:
            if (
              ((f = null !== n && null !== n.memoizedState),
              1 & e.mode
                ? ((Gi = (c = Gi) || f), gu(t, e), (Gi = c))
                : gu(t, e),
              yu(e),
              8192 & r)
            ) {
              if (
                ((c = null !== e.memoizedState),
                (e.stateNode.isHidden = c) && !f && 0 != (1 & e.mode))
              )
                for (Zi = e, f = e.child; null !== f; ) {
                  for (d = Zi = f; null !== Zi; ) {
                    switch (((h = (p = Zi).child), p.tag)) {
                      case 0:
                      case 11:
                      case 14:
                      case 15:
                        ru(4, p, p.return);
                        break;
                      case 1:
                        eu(p, p.return);
                        var m = p.stateNode;
                        if ("function" == typeof m.componentWillUnmount) {
                          (r = p), (n = p.return);
                          try {
                            (t = r),
                              (m.props = t.memoizedProps),
                              (m.state = t.memoizedState),
                              m.componentWillUnmount();
                          } catch (e) {
                            Cs(r, n, e);
                          }
                        }
                        break;
                      case 5:
                        eu(p, p.return);
                        break;
                      case 22:
                        if (null !== p.memoizedState) {
                          Su(d);
                          continue;
                        }
                    }
                    null !== h ? ((h.return = p), (Zi = h)) : Su(d);
                  }
                  f = f.sibling;
                }
              e: for (f = null, d = e; ; ) {
                if (5 === d.tag) {
                  if (null === f) {
                    f = d;
                    try {
                      (l = d.stateNode),
                        c
                          ? "function" == typeof (a = l.style).setProperty
                            ? a.setProperty("display", "none", "important")
                            : (a.display = "none")
                          : ((u = d.stateNode),
                            (i =
                              null != (s = d.memoizedProps.style) &&
                              s.hasOwnProperty("display")
                                ? s.display
                                : null),
                            (u.style.display = me("display", i)));
                    } catch (t) {
                      Cs(e, e.return, t);
                    }
                  }
                } else if (6 === d.tag) {
                  if (null === f)
                    try {
                      d.stateNode.nodeValue = c ? "" : d.memoizedProps;
                    } catch (t) {
                      Cs(e, e.return, t);
                    }
                } else if (
                  ((22 !== d.tag && 23 !== d.tag) ||
                    null === d.memoizedState ||
                    d === e) &&
                  null !== d.child
                ) {
                  (d.child.return = d), (d = d.child);
                  continue;
                }
                if (d === e) break e;
                for (; null === d.sibling; ) {
                  if (null === d.return || d.return === e) break e;
                  f === d && (f = null), (d = d.return);
                }
                f === d && (f = null),
                  (d.sibling.return = d.return),
                  (d = d.sibling);
              }
            }
            break;
          case 19:
            gu(t, e), yu(e), 4 & r && mu(e);
          case 21:
        }
      }
      function yu(e) {
        var t = e.flags;
        if (2 & t) {
          try {
            e: {
              for (var n = e.return; null !== n; ) {
                if (iu(n)) {
                  var r = n;
                  break e;
                }
                n = n.return;
              }
              throw Error(o(160));
            }
            switch (r.tag) {
              case 5:
                var l = r.stateNode;
                32 & r.flags && (de(l, ""), (r.flags &= -33)), cu(e, uu(e), l);
                break;
              case 3:
              case 4:
                var a = r.stateNode.containerInfo;
                su(e, uu(e), a);
                break;
              default:
                throw Error(o(161));
            }
          } catch (t) {
            Cs(e, e.return, t);
          }
          e.flags &= -3;
        }
        4096 & t && (e.flags &= -4097);
      }
      function bu(e, t, n) {
        (Zi = e), wu(e, t, n);
      }
      function wu(e, t, n) {
        for (var r = 0 != (1 & e.mode); null !== Zi; ) {
          var l = Zi,
            o = l.child;
          if (22 === l.tag && r) {
            var a = null !== l.memoizedState || Xi;
            if (!a) {
              var i = l.alternate,
                u = (null !== i && null !== i.memoizedState) || Gi;
              i = Xi;
              var s = Gi;
              if (((Xi = a), (Gi = u) && !s))
                for (Zi = l; null !== Zi; )
                  (u = (a = Zi).child),
                    22 === a.tag && null !== a.memoizedState
                      ? Eu(l)
                      : null !== u
                      ? ((u.return = a), (Zi = u))
                      : Eu(l);
              for (; null !== o; ) (Zi = o), wu(o, t, n), (o = o.sibling);
              (Zi = l), (Xi = i), (Gi = s);
            }
            ku(e);
          } else
            0 != (8772 & l.subtreeFlags) && null !== o
              ? ((o.return = l), (Zi = o))
              : ku(e);
        }
      }
      function ku(e) {
        for (; null !== Zi; ) {
          var t = Zi;
          if (0 != (8772 & t.flags)) {
            var n = t.alternate;
            try {
              if (0 != (8772 & t.flags))
                switch (t.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Gi || lu(5, t);
                    break;
                  case 1:
                    var r = t.stateNode;
                    if (4 & t.flags && !Gi)
                      if (null === n) r.componentDidMount();
                      else {
                        var l =
                          t.elementType === t.type
                            ? n.memoizedProps
                            : vo(t.type, n.memoizedProps);
                        r.componentDidUpdate(
                          l,
                          n.memoizedState,
                          r.__reactInternalSnapshotBeforeUpdate
                        );
                      }
                    var a = t.updateQueue;
                    null !== a && Uo(t, a, r);
                    break;
                  case 3:
                    var i = t.updateQueue;
                    if (null !== i) {
                      if (((n = null), null !== t.child))
                        switch (t.child.tag) {
                          case 5:
                          case 1:
                            n = t.child.stateNode;
                        }
                      Uo(t, i, n);
                    }
                    break;
                  case 5:
                    var u = t.stateNode;
                    if (null === n && 4 & t.flags) {
                      n = u;
                      var s = t.memoizedProps;
                      switch (t.type) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                          s.autoFocus && n.focus();
                          break;
                        case "img":
                          s.src && (n.src = s.src);
                      }
                    }
                    break;
                  case 6:
                  case 4:
                  case 12:
                  case 19:
                  case 17:
                  case 21:
                  case 22:
                  case 23:
                  case 25:
                    break;
                  case 13:
                    if (null === t.memoizedState) {
                      var c = t.alternate;
                      if (null !== c) {
                        var f = c.memoizedState;
                        if (null !== f) {
                          var d = f.dehydrated;
                          null !== d && Vt(d);
                        }
                      }
                    }
                    break;
                  default:
                    throw Error(o(163));
                }
              Gi || (512 & t.flags && ou(t));
            } catch (e) {
              Cs(t, t.return, e);
            }
          }
          if (t === e) {
            Zi = null;
            break;
          }
          if (null !== (n = t.sibling)) {
            (n.return = t.return), (Zi = n);
            break;
          }
          Zi = t.return;
        }
      }
      function Su(e) {
        for (; null !== Zi; ) {
          var t = Zi;
          if (t === e) {
            Zi = null;
            break;
          }
          var n = t.sibling;
          if (null !== n) {
            (n.return = t.return), (Zi = n);
            break;
          }
          Zi = t.return;
        }
      }
      function Eu(e) {
        for (; null !== Zi; ) {
          var t = Zi;
          try {
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                var n = t.return;
                try {
                  lu(4, t);
                } catch (e) {
                  Cs(t, n, e);
                }
                break;
              case 1:
                var r = t.stateNode;
                if ("function" == typeof r.componentDidMount) {
                  var l = t.return;
                  try {
                    r.componentDidMount();
                  } catch (e) {
                    Cs(t, l, e);
                  }
                }
                var o = t.return;
                try {
                  ou(t);
                } catch (e) {
                  Cs(t, o, e);
                }
                break;
              case 5:
                var a = t.return;
                try {
                  ou(t);
                } catch (e) {
                  Cs(t, a, e);
                }
            }
          } catch (e) {
            Cs(t, t.return, e);
          }
          if (t === e) {
            Zi = null;
            break;
          }
          var i = t.sibling;
          if (null !== i) {
            (i.return = t.return), (Zi = i);
            break;
          }
          Zi = t.return;
        }
      }
      var xu,
        Cu = Math.ceil,
        Ru = w.ReactCurrentDispatcher,
        Nu = w.ReactCurrentOwner,
        Pu = w.ReactCurrentBatchConfig,
        _u = 0,
        Mu = null,
        Lu = null,
        Tu = 0,
        zu = 0,
        Fu = xl(0),
        Du = 0,
        Ou = null,
        Au = 0,
        Iu = 0,
        Uu = 0,
        Bu = null,
        Hu = null,
        Vu = 0,
        Wu = 1 / 0,
        Qu = null,
        ju = !1,
        Ku = null,
        $u = null,
        qu = !1,
        Yu = null,
        Xu = 0,
        Gu = 0,
        Ju = null,
        Zu = -1,
        es = 0;
      function ts() {
        return 0 != (6 & _u) ? Ge() : -1 !== Zu ? Zu : (Zu = Ge());
      }
      function ns(e) {
        return 0 == (1 & e.mode)
          ? 1
          : 0 != (2 & _u) && 0 !== Tu
          ? Tu & -Tu
          : null !== go.transition
          ? (0 === es && (es = mt()), es)
          : 0 !== (e = bt)
          ? e
          : (e = void 0 === (e = window.event) ? 16 : Xt(e.type));
      }
      function rs(e, t, n, r) {
        if (50 < Gu) throw ((Gu = 0), (Ju = null), Error(o(185)));
        vt(e, n, r),
          (0 != (2 & _u) && e === Mu) ||
            (e === Mu && (0 == (2 & _u) && (Iu |= n), 4 === Du && us(e, Tu)),
            ls(e, r),
            1 === n &&
              0 === _u &&
              0 == (1 & t.mode) &&
              ((Wu = Ge() + 500), Ul && Vl()));
      }
      function ls(e, t) {
        var n = e.callbackNode;
        !(function (e, t) {
          for (
            var n = e.suspendedLanes,
              r = e.pingedLanes,
              l = e.expirationTimes,
              o = e.pendingLanes;
            0 < o;

          ) {
            var a = 31 - at(o),
              i = 1 << a,
              u = l[a];
            -1 === u
              ? (0 != (i & n) && 0 == (i & r)) || (l[a] = pt(i, t))
              : u <= t && (e.expiredLanes |= i),
              (o &= ~i);
          }
        })(e, t);
        var r = dt(e, e === Mu ? Tu : 0);
        if (0 === r)
          null !== n && qe(n),
            (e.callbackNode = null),
            (e.callbackPriority = 0);
        else if (((t = r & -r), e.callbackPriority !== t)) {
          if ((null != n && qe(n), 1 === t))
            0 === e.tag
              ? (function (e) {
                  (Ul = !0), Hl(e);
                })(ss.bind(null, e))
              : Hl(ss.bind(null, e)),
              al(function () {
                0 == (6 & _u) && Vl();
              }),
              (n = null);
          else {
            switch (wt(r)) {
              case 1:
                n = Ze;
                break;
              case 4:
                n = et;
                break;
              case 16:
              default:
                n = tt;
                break;
              case 536870912:
                n = rt;
            }
            n = Ms(n, os.bind(null, e));
          }
          (e.callbackPriority = t), (e.callbackNode = n);
        }
      }
      function os(e, t) {
        if (((Zu = -1), (es = 0), 0 != (6 & _u))) throw Error(o(327));
        var n = e.callbackNode;
        if (Es() && e.callbackNode !== n) return null;
        var r = dt(e, e === Mu ? Tu : 0);
        if (0 === r) return null;
        if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t) t = vs(e, r);
        else {
          t = r;
          var l = _u;
          _u |= 2;
          var a = ms();
          for (
            (Mu === e && Tu === t) ||
            ((Qu = null), (Wu = Ge() + 500), ps(e, t));
            ;

          )
            try {
              bs();
              break;
            } catch (t) {
              hs(e, t);
            }
          So(),
            (Ru.current = a),
            (_u = l),
            null !== Lu ? (t = 0) : ((Mu = null), (Tu = 0), (t = Du));
        }
        if (0 !== t) {
          if (
            (2 === t && 0 !== (l = ht(e)) && ((r = l), (t = as(e, l))), 1 === t)
          )
            throw ((n = Ou), ps(e, 0), us(e, r), ls(e, Ge()), n);
          if (6 === t) us(e, r);
          else {
            if (
              ((l = e.current.alternate),
              0 == (30 & r) &&
                !(function (e) {
                  for (var t = e; ; ) {
                    if (16384 & t.flags) {
                      var n = t.updateQueue;
                      if (null !== n && null !== (n = n.stores))
                        for (var r = 0; r < n.length; r++) {
                          var l = n[r],
                            o = l.getSnapshot;
                          l = l.value;
                          try {
                            if (!ir(o(), l)) return !1;
                          } catch (e) {
                            return !1;
                          }
                        }
                    }
                    if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                      (n.return = t), (t = n);
                    else {
                      if (t === e) break;
                      for (; null === t.sibling; ) {
                        if (null === t.return || t.return === e) return !0;
                        t = t.return;
                      }
                      (t.sibling.return = t.return), (t = t.sibling);
                    }
                  }
                  return !0;
                })(l) &&
                (2 === (t = vs(e, r)) &&
                  0 !== (a = ht(e)) &&
                  ((r = a), (t = as(e, a))),
                1 === t))
            )
              throw ((n = Ou), ps(e, 0), us(e, r), ls(e, Ge()), n);
            switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
              case 0:
              case 1:
                throw Error(o(345));
              case 2:
              case 5:
                Ss(e, Hu, Qu);
                break;
              case 3:
                if (
                  (us(e, r),
                  (130023424 & r) === r && 10 < (t = Vu + 500 - Ge()))
                ) {
                  if (0 !== dt(e, 0)) break;
                  if (((l = e.suspendedLanes) & r) !== r) {
                    ts(), (e.pingedLanes |= e.suspendedLanes & l);
                    break;
                  }
                  e.timeoutHandle = rl(Ss.bind(null, e, Hu, Qu), t);
                  break;
                }
                Ss(e, Hu, Qu);
                break;
              case 4:
                if ((us(e, r), (4194240 & r) === r)) break;
                for (t = e.eventTimes, l = -1; 0 < r; ) {
                  var i = 31 - at(r);
                  (a = 1 << i), (i = t[i]) > l && (l = i), (r &= ~a);
                }
                if (
                  ((r = l),
                  10 <
                    (r =
                      (120 > (r = Ge() - r)
                        ? 120
                        : 480 > r
                        ? 480
                        : 1080 > r
                        ? 1080
                        : 1920 > r
                        ? 1920
                        : 3e3 > r
                        ? 3e3
                        : 4320 > r
                        ? 4320
                        : 1960 * Cu(r / 1960)) - r))
                ) {
                  e.timeoutHandle = rl(Ss.bind(null, e, Hu, Qu), r);
                  break;
                }
                Ss(e, Hu, Qu);
                break;
              default:
                throw Error(o(329));
            }
          }
        }
        return ls(e, Ge()), e.callbackNode === n ? os.bind(null, e) : null;
      }
      function as(e, t) {
        var n = Bu;
        return (
          e.current.memoizedState.isDehydrated && (ps(e, t).flags |= 256),
          2 !== (e = vs(e, t)) && ((t = Hu), (Hu = n), null !== t && is(t)),
          e
        );
      }
      function is(e) {
        null === Hu ? (Hu = e) : Hu.push.apply(Hu, e);
      }
      function us(e, t) {
        for (
          t &= ~Uu,
            t &= ~Iu,
            e.suspendedLanes |= t,
            e.pingedLanes &= ~t,
            e = e.expirationTimes;
          0 < t;

        ) {
          var n = 31 - at(t),
            r = 1 << n;
          (e[n] = -1), (t &= ~r);
        }
      }
      function ss(e) {
        if (0 != (6 & _u)) throw Error(o(327));
        Es();
        var t = dt(e, 0);
        if (0 == (1 & t)) return ls(e, Ge()), null;
        var n = vs(e, t);
        if (0 !== e.tag && 2 === n) {
          var r = ht(e);
          0 !== r && ((t = r), (n = as(e, r)));
        }
        if (1 === n) throw ((n = Ou), ps(e, 0), us(e, t), ls(e, Ge()), n);
        if (6 === n) throw Error(o(345));
        return (
          (e.finishedWork = e.current.alternate),
          (e.finishedLanes = t),
          Ss(e, Hu, Qu),
          ls(e, Ge()),
          null
        );
      }
      function cs(e, t) {
        var n = _u;
        _u |= 1;
        try {
          return e(t);
        } finally {
          0 === (_u = n) && ((Wu = Ge() + 500), Ul && Vl());
        }
      }
      function fs(e) {
        null !== Yu && 0 === Yu.tag && 0 == (6 & _u) && Es();
        var t = _u;
        _u |= 1;
        var n = Pu.transition,
          r = bt;
        try {
          if (((Pu.transition = null), (bt = 1), e)) return e();
        } finally {
          (bt = r), (Pu.transition = n), 0 == (6 & (_u = t)) && Vl();
        }
      }
      function ds() {
        (zu = Fu.current), Cl(Fu);
      }
      function ps(e, t) {
        (e.finishedWork = null), (e.finishedLanes = 0);
        var n = e.timeoutHandle;
        if ((-1 !== n && ((e.timeoutHandle = -1), ll(n)), null !== Lu))
          for (n = Lu.return; null !== n; ) {
            var r = n;
            switch ((to(r), r.tag)) {
              case 1:
                null != (r = r.type.childContextTypes) && zl();
                break;
              case 3:
                oa(), Cl(_l), Cl(Pl), fa();
                break;
              case 5:
                ia(r);
                break;
              case 4:
                oa();
                break;
              case 13:
              case 19:
                Cl(ua);
                break;
              case 10:
                Eo(r.type._context);
                break;
              case 22:
              case 23:
                ds();
            }
            n = n.return;
          }
        if (
          ((Mu = e),
          (Lu = e = Fs(e.current, null)),
          (Tu = zu = t),
          (Du = 0),
          (Ou = null),
          (Uu = Iu = Au = 0),
          (Hu = Bu = null),
          null !== No)
        ) {
          for (t = 0; t < No.length; t++)
            if (null !== (r = (n = No[t]).interleaved)) {
              n.interleaved = null;
              var l = r.next,
                o = n.pending;
              if (null !== o) {
                var a = o.next;
                (o.next = l), (r.next = a);
              }
              n.pending = r;
            }
          No = null;
        }
        return e;
      }
      function hs(e, t) {
        for (;;) {
          var n = Lu;
          try {
            if ((So(), (da.current = ai), ya)) {
              for (var r = ma.memoizedState; null !== r; ) {
                var l = r.queue;
                null !== l && (l.pending = null), (r = r.next);
              }
              ya = !1;
            }
            if (
              ((ha = 0),
              (va = ga = ma = null),
              (ba = !1),
              (wa = 0),
              (Nu.current = null),
              null === n || null === n.return)
            ) {
              (Du = 1), (Ou = t), (Lu = null);
              break;
            }
            e: {
              var a = e,
                i = n.return,
                u = n,
                s = t;
              if (
                ((t = Tu),
                (u.flags |= 32768),
                null !== s &&
                  "object" == typeof s &&
                  "function" == typeof s.then)
              ) {
                var c = s,
                  f = u,
                  d = f.tag;
                if (0 == (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                  var p = f.alternate;
                  p
                    ? ((f.updateQueue = p.updateQueue),
                      (f.memoizedState = p.memoizedState),
                      (f.lanes = p.lanes))
                    : ((f.updateQueue = null), (f.memoizedState = null));
                }
                var h = vi(i);
                if (null !== h) {
                  (h.flags &= -257),
                    yi(h, i, u, 0, t),
                    1 & h.mode && gi(a, c, t),
                    (s = c);
                  var m = (t = h).updateQueue;
                  if (null === m) {
                    var g = new Set();
                    g.add(s), (t.updateQueue = g);
                  } else m.add(s);
                  break e;
                }
                if (0 == (1 & t)) {
                  gi(a, c, t), gs();
                  break e;
                }
                s = Error(o(426));
              } else if (lo && 1 & u.mode) {
                var v = vi(i);
                if (null !== v) {
                  0 == (65536 & v.flags) && (v.flags |= 256),
                    yi(v, i, u, 0, t),
                    mo(ci(s, u));
                  break e;
                }
              }
              (a = s = ci(s, u)),
                4 !== Du && (Du = 2),
                null === Bu ? (Bu = [a]) : Bu.push(a),
                (a = i);
              do {
                switch (a.tag) {
                  case 3:
                    (a.flags |= 65536),
                      (t &= -t),
                      (a.lanes |= t),
                      Ao(a, hi(0, s, t));
                    break e;
                  case 1:
                    u = s;
                    var y = a.type,
                      b = a.stateNode;
                    if (
                      0 == (128 & a.flags) &&
                      ("function" == typeof y.getDerivedStateFromError ||
                        (null !== b &&
                          "function" == typeof b.componentDidCatch &&
                          (null === $u || !$u.has(b))))
                    ) {
                      (a.flags |= 65536),
                        (t &= -t),
                        (a.lanes |= t),
                        Ao(a, mi(a, u, t));
                      break e;
                    }
                }
                a = a.return;
              } while (null !== a);
            }
            ks(n);
          } catch (e) {
            (t = e), Lu === n && null !== n && (Lu = n = n.return);
            continue;
          }
          break;
        }
      }
      function ms() {
        var e = Ru.current;
        return (Ru.current = ai), null === e ? ai : e;
      }
      function gs() {
        (0 !== Du && 3 !== Du && 2 !== Du) || (Du = 4),
          null === Mu ||
            (0 == (268435455 & Au) && 0 == (268435455 & Iu)) ||
            us(Mu, Tu);
      }
      function vs(e, t) {
        var n = _u;
        _u |= 2;
        var r = ms();
        for ((Mu === e && Tu === t) || ((Qu = null), ps(e, t)); ; )
          try {
            ys();
            break;
          } catch (t) {
            hs(e, t);
          }
        if ((So(), (_u = n), (Ru.current = r), null !== Lu))
          throw Error(o(261));
        return (Mu = null), (Tu = 0), Du;
      }
      function ys() {
        for (; null !== Lu; ) ws(Lu);
      }
      function bs() {
        for (; null !== Lu && !Ye(); ) ws(Lu);
      }
      function ws(e) {
        var t = xu(e.alternate, e, zu);
        (e.memoizedProps = e.pendingProps),
          null === t ? ks(e) : (Lu = t),
          (Nu.current = null);
      }
      function ks(e) {
        var t = e;
        do {
          var n = t.alternate;
          if (((e = t.return), 0 == (32768 & t.flags))) {
            if (null !== (n = qi(n, t, zu))) return void (Lu = n);
          } else {
            if (null !== (n = Yi(n, t)))
              return (n.flags &= 32767), void (Lu = n);
            if (null === e) return (Du = 6), void (Lu = null);
            (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
          }
          if (null !== (t = t.sibling)) return void (Lu = t);
          Lu = t = e;
        } while (null !== t);
        0 === Du && (Du = 5);
      }
      function Ss(e, t, n) {
        var r = bt,
          l = Pu.transition;
        try {
          (Pu.transition = null),
            (bt = 1),
            (function (e, t, n, r) {
              do {
                Es();
              } while (null !== Yu);
              if (0 != (6 & _u)) throw Error(o(327));
              n = e.finishedWork;
              var l = e.finishedLanes;
              if (null === n) return null;
              if (
                ((e.finishedWork = null),
                (e.finishedLanes = 0),
                n === e.current)
              )
                throw Error(o(177));
              (e.callbackNode = null), (e.callbackPriority = 0);
              var a = n.lanes | n.childLanes;
              if (
                ((function (e, t) {
                  var n = e.pendingLanes & ~t;
                  (e.pendingLanes = t),
                    (e.suspendedLanes = 0),
                    (e.pingedLanes = 0),
                    (e.expiredLanes &= t),
                    (e.mutableReadLanes &= t),
                    (e.entangledLanes &= t),
                    (t = e.entanglements);
                  var r = e.eventTimes;
                  for (e = e.expirationTimes; 0 < n; ) {
                    var l = 31 - at(n),
                      o = 1 << l;
                    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
                  }
                })(e, a),
                e === Mu && ((Lu = Mu = null), (Tu = 0)),
                (0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags)) ||
                  qu ||
                  ((qu = !0),
                  Ms(tt, function () {
                    return Es(), null;
                  })),
                (a = 0 != (15990 & n.flags)),
                0 != (15990 & n.subtreeFlags) || a)
              ) {
                (a = Pu.transition), (Pu.transition = null);
                var i = bt;
                bt = 1;
                var u = _u;
                (_u |= 4),
                  (Nu.current = null),
                  (function (e, t) {
                    if (((el = Qt), pr((e = dr())))) {
                      if ("selectionStart" in e)
                        var n = {
                          start: e.selectionStart,
                          end: e.selectionEnd,
                        };
                      else
                        e: {
                          var r =
                            (n =
                              ((n = e.ownerDocument) && n.defaultView) ||
                              window).getSelection && n.getSelection();
                          if (r && 0 !== r.rangeCount) {
                            n = r.anchorNode;
                            var l = r.anchorOffset,
                              a = r.focusNode;
                            r = r.focusOffset;
                            try {
                              n.nodeType, a.nodeType;
                            } catch (e) {
                              n = null;
                              break e;
                            }
                            var i = 0,
                              u = -1,
                              s = -1,
                              c = 0,
                              f = 0,
                              d = e,
                              p = null;
                            t: for (;;) {
                              for (
                                var h;
                                d !== n ||
                                  (0 !== l && 3 !== d.nodeType) ||
                                  (u = i + l),
                                  d !== a ||
                                    (0 !== r && 3 !== d.nodeType) ||
                                    (s = i + r),
                                  3 === d.nodeType && (i += d.nodeValue.length),
                                  null !== (h = d.firstChild);

                              )
                                (p = d), (d = h);
                              for (;;) {
                                if (d === e) break t;
                                if (
                                  (p === n && ++c === l && (u = i),
                                  p === a && ++f === r && (s = i),
                                  null !== (h = d.nextSibling))
                                )
                                  break;
                                p = (d = p).parentNode;
                              }
                              d = h;
                            }
                            n =
                              -1 === u || -1 === s
                                ? null
                                : { start: u, end: s };
                          } else n = null;
                        }
                      n = n || { start: 0, end: 0 };
                    } else n = null;
                    for (
                      tl = { focusedElem: e, selectionRange: n },
                        Qt = !1,
                        Zi = t;
                      null !== Zi;

                    )
                      if (
                        ((e = (t = Zi).child),
                        0 != (1028 & t.subtreeFlags) && null !== e)
                      )
                        (e.return = t), (Zi = e);
                      else
                        for (; null !== Zi; ) {
                          t = Zi;
                          try {
                            var m = t.alternate;
                            if (0 != (1024 & t.flags))
                              switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                case 5:
                                case 6:
                                case 4:
                                case 17:
                                  break;
                                case 1:
                                  if (null !== m) {
                                    var g = m.memoizedProps,
                                      v = m.memoizedState,
                                      y = t.stateNode,
                                      b = y.getSnapshotBeforeUpdate(
                                        t.elementType === t.type
                                          ? g
                                          : vo(t.type, g),
                                        v
                                      );
                                    y.__reactInternalSnapshotBeforeUpdate = b;
                                  }
                                  break;
                                case 3:
                                  var w = t.stateNode.containerInfo;
                                  1 === w.nodeType
                                    ? (w.textContent = "")
                                    : 9 === w.nodeType &&
                                      w.documentElement &&
                                      w.removeChild(w.documentElement);
                                  break;
                                default:
                                  throw Error(o(163));
                              }
                          } catch (e) {
                            Cs(t, t.return, e);
                          }
                          if (null !== (e = t.sibling)) {
                            (e.return = t.return), (Zi = e);
                            break;
                          }
                          Zi = t.return;
                        }
                    (m = nu), (nu = !1);
                  })(e, n),
                  vu(n, e),
                  hr(tl),
                  (Qt = !!el),
                  (tl = el = null),
                  (e.current = n),
                  bu(n, e, l),
                  Xe(),
                  (_u = u),
                  (bt = i),
                  (Pu.transition = a);
              } else e.current = n;
              if (
                (qu && ((qu = !1), (Yu = e), (Xu = l)),
                0 === (a = e.pendingLanes) && ($u = null),
                (function (e) {
                  if (ot && "function" == typeof ot.onCommitFiberRoot)
                    try {
                      ot.onCommitFiberRoot(
                        lt,
                        e,
                        void 0,
                        128 == (128 & e.current.flags)
                      );
                    } catch (e) {}
                })(n.stateNode),
                ls(e, Ge()),
                null !== t)
              )
                for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                  r((l = t[n]).value, {
                    componentStack: l.stack,
                    digest: l.digest,
                  });
              if (ju) throw ((ju = !1), (e = Ku), (Ku = null), e);
              0 != (1 & Xu) && 0 !== e.tag && Es(),
                0 != (1 & (a = e.pendingLanes))
                  ? e === Ju
                    ? Gu++
                    : ((Gu = 0), (Ju = e))
                  : (Gu = 0),
                Vl();
            })(e, t, n, r);
        } finally {
          (Pu.transition = l), (bt = r);
        }
        return null;
      }
      function Es() {
        if (null !== Yu) {
          var e = wt(Xu),
            t = Pu.transition,
            n = bt;
          try {
            if (((Pu.transition = null), (bt = 16 > e ? 16 : e), null === Yu))
              var r = !1;
            else {
              if (((e = Yu), (Yu = null), (Xu = 0), 0 != (6 & _u)))
                throw Error(o(331));
              var l = _u;
              for (_u |= 4, Zi = e.current; null !== Zi; ) {
                var a = Zi,
                  i = a.child;
                if (0 != (16 & Zi.flags)) {
                  var u = a.deletions;
                  if (null !== u) {
                    for (var s = 0; s < u.length; s++) {
                      var c = u[s];
                      for (Zi = c; null !== Zi; ) {
                        var f = Zi;
                        switch (f.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ru(8, f, a);
                        }
                        var d = f.child;
                        if (null !== d) (d.return = f), (Zi = d);
                        else
                          for (; null !== Zi; ) {
                            var p = (f = Zi).sibling,
                              h = f.return;
                            if ((au(f), f === c)) {
                              Zi = null;
                              break;
                            }
                            if (null !== p) {
                              (p.return = h), (Zi = p);
                              break;
                            }
                            Zi = h;
                          }
                      }
                    }
                    var m = a.alternate;
                    if (null !== m) {
                      var g = m.child;
                      if (null !== g) {
                        m.child = null;
                        do {
                          var v = g.sibling;
                          (g.sibling = null), (g = v);
                        } while (null !== g);
                      }
                    }
                    Zi = a;
                  }
                }
                if (0 != (2064 & a.subtreeFlags) && null !== i)
                  (i.return = a), (Zi = i);
                else
                  e: for (; null !== Zi; ) {
                    if (0 != (2048 & (a = Zi).flags))
                      switch (a.tag) {
                        case 0:
                        case 11:
                        case 15:
                          ru(9, a, a.return);
                      }
                    var y = a.sibling;
                    if (null !== y) {
                      (y.return = a.return), (Zi = y);
                      break e;
                    }
                    Zi = a.return;
                  }
              }
              var b = e.current;
              for (Zi = b; null !== Zi; ) {
                var w = (i = Zi).child;
                if (0 != (2064 & i.subtreeFlags) && null !== w)
                  (w.return = i), (Zi = w);
                else
                  e: for (i = b; null !== Zi; ) {
                    if (0 != (2048 & (u = Zi).flags))
                      try {
                        switch (u.tag) {
                          case 0:
                          case 11:
                          case 15:
                            lu(9, u);
                        }
                      } catch (e) {
                        Cs(u, u.return, e);
                      }
                    if (u === i) {
                      Zi = null;
                      break e;
                    }
                    var k = u.sibling;
                    if (null !== k) {
                      (k.return = u.return), (Zi = k);
                      break e;
                    }
                    Zi = u.return;
                  }
              }
              if (
                ((_u = l),
                Vl(),
                ot && "function" == typeof ot.onPostCommitFiberRoot)
              )
                try {
                  ot.onPostCommitFiberRoot(lt, e);
                } catch (e) {}
              r = !0;
            }
            return r;
          } finally {
            (bt = n), (Pu.transition = t);
          }
        }
        return !1;
      }
      function xs(e, t, n) {
        (e = Do(e, (t = hi(0, (t = ci(n, t)), 1)), 1)),
          (t = ts()),
          null !== e && (vt(e, 1, t), ls(e, t));
      }
      function Cs(e, t, n) {
        if (3 === e.tag) xs(e, e, n);
        else
          for (; null !== t; ) {
            if (3 === t.tag) {
              xs(t, e, n);
              break;
            }
            if (1 === t.tag) {
              var r = t.stateNode;
              if (
                "function" == typeof t.type.getDerivedStateFromError ||
                ("function" == typeof r.componentDidCatch &&
                  (null === $u || !$u.has(r)))
              ) {
                (t = Do(t, (e = mi(t, (e = ci(n, e)), 1)), 1)),
                  (e = ts()),
                  null !== t && (vt(t, 1, e), ls(t, e));
                break;
              }
            }
            t = t.return;
          }
      }
      function Rs(e, t, n) {
        var r = e.pingCache;
        null !== r && r.delete(t),
          (t = ts()),
          (e.pingedLanes |= e.suspendedLanes & n),
          Mu === e &&
            (Tu & n) === n &&
            (4 === Du ||
            (3 === Du && (130023424 & Tu) === Tu && 500 > Ge() - Vu)
              ? ps(e, 0)
              : (Uu |= n)),
          ls(e, t);
      }
      function Ns(e, t) {
        0 === t &&
          (0 == (1 & e.mode)
            ? (t = 1)
            : ((t = ct), 0 == (130023424 & (ct <<= 1)) && (ct = 4194304)));
        var n = ts();
        null !== (e = Mo(e, t)) && (vt(e, t, n), ls(e, n));
      }
      function Ps(e) {
        var t = e.memoizedState,
          n = 0;
        null !== t && (n = t.retryLane), Ns(e, n);
      }
      function _s(e, t) {
        var n = 0;
        switch (e.tag) {
          case 13:
            var r = e.stateNode,
              l = e.memoizedState;
            null !== l && (n = l.retryLane);
            break;
          case 19:
            r = e.stateNode;
            break;
          default:
            throw Error(o(314));
        }
        null !== r && r.delete(t), Ns(e, n);
      }
      function Ms(e, t) {
        return $e(e, t);
      }
      function Ls(e, t, n, r) {
        (this.tag = e),
          (this.key = n),
          (this.sibling =
            this.child =
            this.return =
            this.stateNode =
            this.type =
            this.elementType =
              null),
          (this.index = 0),
          (this.ref = null),
          (this.pendingProps = t),
          (this.dependencies =
            this.memoizedState =
            this.updateQueue =
            this.memoizedProps =
              null),
          (this.mode = r),
          (this.subtreeFlags = this.flags = 0),
          (this.deletions = null),
          (this.childLanes = this.lanes = 0),
          (this.alternate = null);
      }
      function Ts(e, t, n, r) {
        return new Ls(e, t, n, r);
      }
      function zs(e) {
        return !(!(e = e.prototype) || !e.isReactComponent);
      }
      function Fs(e, t) {
        var n = e.alternate;
        return (
          null === n
            ? (((n = Ts(e.tag, t, e.key, e.mode)).elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t),
              (n.type = e.type),
              (n.flags = 0),
              (n.subtreeFlags = 0),
              (n.deletions = null)),
          (n.flags = 14680064 & e.flags),
          (n.childLanes = e.childLanes),
          (n.lanes = e.lanes),
          (n.child = e.child),
          (n.memoizedProps = e.memoizedProps),
          (n.memoizedState = e.memoizedState),
          (n.updateQueue = e.updateQueue),
          (t = e.dependencies),
          (n.dependencies =
            null === t
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext }),
          (n.sibling = e.sibling),
          (n.index = e.index),
          (n.ref = e.ref),
          n
        );
      }
      function Ds(e, t, n, r, l, a) {
        var i = 2;
        if (((r = e), "function" == typeof e)) zs(e) && (i = 1);
        else if ("string" == typeof e) i = 5;
        else
          e: switch (e) {
            case E:
              return Os(n.children, l, a, t);
            case x:
              (i = 8), (l |= 8);
              break;
            case C:
              return (
                ((e = Ts(12, n, t, 2 | l)).elementType = C), (e.lanes = a), e
              );
            case _:
              return ((e = Ts(13, n, t, l)).elementType = _), (e.lanes = a), e;
            case M:
              return ((e = Ts(19, n, t, l)).elementType = M), (e.lanes = a), e;
            case z:
              return As(n, l, a, t);
            default:
              if ("object" == typeof e && null !== e)
                switch (e.$$typeof) {
                  case R:
                    i = 10;
                    break e;
                  case N:
                    i = 9;
                    break e;
                  case P:
                    i = 11;
                    break e;
                  case L:
                    i = 14;
                    break e;
                  case T:
                    (i = 16), (r = null);
                    break e;
                }
              throw Error(o(130, null == e ? e : typeof e, ""));
          }
        return (
          ((t = Ts(i, n, t, l)).elementType = e), (t.type = r), (t.lanes = a), t
        );
      }
      function Os(e, t, n, r) {
        return ((e = Ts(7, e, r, t)).lanes = n), e;
      }
      function As(e, t, n, r) {
        return (
          ((e = Ts(22, e, r, t)).elementType = z),
          (e.lanes = n),
          (e.stateNode = { isHidden: !1 }),
          e
        );
      }
      function Is(e, t, n) {
        return ((e = Ts(6, e, null, t)).lanes = n), e;
      }
      function Us(e, t, n) {
        return (
          ((t = Ts(4, null !== e.children ? e.children : [], e.key, t)).lanes =
            n),
          (t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation,
          }),
          t
        );
      }
      function Bs(e, t, n, r, l) {
        (this.tag = t),
          (this.containerInfo = e),
          (this.finishedWork =
            this.pingCache =
            this.current =
            this.pendingChildren =
              null),
          (this.timeoutHandle = -1),
          (this.callbackNode = this.pendingContext = this.context = null),
          (this.callbackPriority = 0),
          (this.eventTimes = gt(0)),
          (this.expirationTimes = gt(-1)),
          (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
              0),
          (this.entanglements = gt(0)),
          (this.identifierPrefix = r),
          (this.onRecoverableError = l),
          (this.mutableSourceEagerHydrationData = null);
      }
      function Hs(e, t, n, r, l, o, a, i, u) {
        return (
          (e = new Bs(e, t, n, i, u)),
          1 === t ? ((t = 1), !0 === o && (t |= 8)) : (t = 0),
          (o = Ts(3, null, null, t)),
          (e.current = o),
          (o.stateNode = e),
          (o.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
          }),
          To(o),
          e
        );
      }
      function Vs(e) {
        if (!e) return Nl;
        e: {
          if (Ve((e = e._reactInternals)) !== e || 1 !== e.tag)
            throw Error(o(170));
          var t = e;
          do {
            switch (t.tag) {
              case 3:
                t = t.stateNode.context;
                break e;
              case 1:
                if (Tl(t.type)) {
                  t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                  break e;
                }
            }
            t = t.return;
          } while (null !== t);
          throw Error(o(171));
        }
        if (1 === e.tag) {
          var n = e.type;
          if (Tl(n)) return Dl(e, n, t);
        }
        return t;
      }
      function Ws(e, t, n, r, l, o, a, i, u) {
        return (
          ((e = Hs(n, r, !0, e, 0, o, 0, i, u)).context = Vs(null)),
          (n = e.current),
          ((o = Fo((r = ts()), (l = ns(n)))).callback = null != t ? t : null),
          Do(n, o, l),
          (e.current.lanes = l),
          vt(e, l, r),
          ls(e, r),
          e
        );
      }
      function Qs(e, t, n, r) {
        var l = t.current,
          o = ts(),
          a = ns(l);
        return (
          (n = Vs(n)),
          null === t.context ? (t.context = n) : (t.pendingContext = n),
          ((t = Fo(o, a)).payload = { element: e }),
          null !== (r = void 0 === r ? null : r) && (t.callback = r),
          null !== (e = Do(l, t, a)) && (rs(e, l, a, o), Oo(e, l, a)),
          a
        );
      }
      function js(e) {
        return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
      }
      function Ks(e, t) {
        if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
          var n = e.retryLane;
          e.retryLane = 0 !== n && n < t ? n : t;
        }
      }
      function $s(e, t) {
        Ks(e, t), (e = e.alternate) && Ks(e, t);
      }
      xu = function (e, t, n) {
        if (null !== e)
          if (e.memoizedProps !== t.pendingProps || _l.current) wi = !0;
          else {
            if (0 == (e.lanes & n) && 0 == (128 & t.flags))
              return (
                (wi = !1),
                (function (e, t, n) {
                  switch (t.tag) {
                    case 3:
                      Mi(t), ho();
                      break;
                    case 5:
                      aa(t);
                      break;
                    case 1:
                      Tl(t.type) && Ol(t);
                      break;
                    case 4:
                      la(t, t.stateNode.containerInfo);
                      break;
                    case 10:
                      var r = t.type._context,
                        l = t.memoizedProps.value;
                      Rl(yo, r._currentValue), (r._currentValue = l);
                      break;
                    case 13:
                      if (null !== (r = t.memoizedState))
                        return null !== r.dehydrated
                          ? (Rl(ua, 1 & ua.current), (t.flags |= 128), null)
                          : 0 != (n & t.child.childLanes)
                          ? Ii(e, t, n)
                          : (Rl(ua, 1 & ua.current),
                            null !== (e = ji(e, t, n)) ? e.sibling : null);
                      Rl(ua, 1 & ua.current);
                      break;
                    case 19:
                      if (
                        ((r = 0 != (n & t.childLanes)), 0 != (128 & e.flags))
                      ) {
                        if (r) return Wi(e, t, n);
                        t.flags |= 128;
                      }
                      if (
                        (null !== (l = t.memoizedState) &&
                          ((l.rendering = null),
                          (l.tail = null),
                          (l.lastEffect = null)),
                        Rl(ua, ua.current),
                        r)
                      )
                        break;
                      return null;
                    case 22:
                    case 23:
                      return (t.lanes = 0), Ci(e, t, n);
                  }
                  return ji(e, t, n);
                })(e, t, n)
              );
            wi = 0 != (131072 & e.flags);
          }
        else (wi = !1), lo && 0 != (1048576 & t.flags) && Zl(t, Kl, t.index);
        switch (((t.lanes = 0), t.tag)) {
          case 2:
            var r = t.type;
            Qi(e, t), (e = t.pendingProps);
            var l = Ll(t, Pl.current);
            Co(t, n), (l = xa(null, t, r, e, l, n));
            var a = Ca();
            return (
              (t.flags |= 1),
              "object" == typeof l &&
              null !== l &&
              "function" == typeof l.render &&
              void 0 === l.$$typeof
                ? ((t.tag = 1),
                  (t.memoizedState = null),
                  (t.updateQueue = null),
                  Tl(r) ? ((a = !0), Ol(t)) : (a = !1),
                  (t.memoizedState =
                    null !== l.state && void 0 !== l.state ? l.state : null),
                  To(t),
                  (l.updater = Vo),
                  (t.stateNode = l),
                  (l._reactInternals = t),
                  Ko(t, r, e, n),
                  (t = _i(null, t, r, !0, a, n)))
                : ((t.tag = 0),
                  lo && a && eo(t),
                  ki(null, t, l, n),
                  (t = t.child)),
              t
            );
          case 16:
            r = t.elementType;
            e: {
              switch (
                (Qi(e, t),
                (e = t.pendingProps),
                (r = (l = r._init)(r._payload)),
                (t.type = r),
                (l = t.tag =
                  (function (e) {
                    if ("function" == typeof e) return zs(e) ? 1 : 0;
                    if (null != e) {
                      if ((e = e.$$typeof) === P) return 11;
                      if (e === L) return 14;
                    }
                    return 2;
                  })(r)),
                (e = vo(r, e)),
                l)
              ) {
                case 0:
                  t = Ni(null, t, r, e, n);
                  break e;
                case 1:
                  t = Pi(null, t, r, e, n);
                  break e;
                case 11:
                  t = Si(null, t, r, e, n);
                  break e;
                case 14:
                  t = Ei(null, t, r, vo(r.type, e), n);
                  break e;
              }
              throw Error(o(306, r, ""));
            }
            return t;
          case 0:
            return (
              (r = t.type),
              (l = t.pendingProps),
              Ni(e, t, r, (l = t.elementType === r ? l : vo(r, l)), n)
            );
          case 1:
            return (
              (r = t.type),
              (l = t.pendingProps),
              Pi(e, t, r, (l = t.elementType === r ? l : vo(r, l)), n)
            );
          case 3:
            e: {
              if ((Mi(t), null === e)) throw Error(o(387));
              (r = t.pendingProps),
                (l = (a = t.memoizedState).element),
                zo(e, t),
                Io(t, r, null, n);
              var i = t.memoizedState;
              if (((r = i.element), a.isDehydrated)) {
                if (
                  ((a = {
                    element: r,
                    isDehydrated: !1,
                    cache: i.cache,
                    pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                    transitions: i.transitions,
                  }),
                  (t.updateQueue.baseState = a),
                  (t.memoizedState = a),
                  256 & t.flags)
                ) {
                  t = Li(e, t, r, n, (l = ci(Error(o(423)), t)));
                  break e;
                }
                if (r !== l) {
                  t = Li(e, t, r, n, (l = ci(Error(o(424)), t)));
                  break e;
                }
                for (
                  ro = sl(t.stateNode.containerInfo.firstChild),
                    no = t,
                    lo = !0,
                    oo = null,
                    n = Jo(t, null, r, n),
                    t.child = n;
                  n;

                )
                  (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
              } else {
                if ((ho(), r === l)) {
                  t = ji(e, t, n);
                  break e;
                }
                ki(e, t, r, n);
              }
              t = t.child;
            }
            return t;
          case 5:
            return (
              aa(t),
              null === e && so(t),
              (r = t.type),
              (l = t.pendingProps),
              (a = null !== e ? e.memoizedProps : null),
              (i = l.children),
              nl(r, l) ? (i = null) : null !== a && nl(r, a) && (t.flags |= 32),
              Ri(e, t),
              ki(e, t, i, n),
              t.child
            );
          case 6:
            return null === e && so(t), null;
          case 13:
            return Ii(e, t, n);
          case 4:
            return (
              la(t, t.stateNode.containerInfo),
              (r = t.pendingProps),
              null === e ? (t.child = Go(t, null, r, n)) : ki(e, t, r, n),
              t.child
            );
          case 11:
            return (
              (r = t.type),
              (l = t.pendingProps),
              Si(e, t, r, (l = t.elementType === r ? l : vo(r, l)), n)
            );
          case 7:
            return ki(e, t, t.pendingProps, n), t.child;
          case 8:
          case 12:
            return ki(e, t, t.pendingProps.children, n), t.child;
          case 10:
            e: {
              if (
                ((r = t.type._context),
                (l = t.pendingProps),
                (a = t.memoizedProps),
                (i = l.value),
                Rl(yo, r._currentValue),
                (r._currentValue = i),
                null !== a)
              )
                if (ir(a.value, i)) {
                  if (a.children === l.children && !_l.current) {
                    t = ji(e, t, n);
                    break e;
                  }
                } else
                  for (null !== (a = t.child) && (a.return = t); null !== a; ) {
                    var u = a.dependencies;
                    if (null !== u) {
                      i = a.child;
                      for (var s = u.firstContext; null !== s; ) {
                        if (s.context === r) {
                          if (1 === a.tag) {
                            (s = Fo(-1, n & -n)).tag = 2;
                            var c = a.updateQueue;
                            if (null !== c) {
                              var f = (c = c.shared).pending;
                              null === f
                                ? (s.next = s)
                                : ((s.next = f.next), (f.next = s)),
                                (c.pending = s);
                            }
                          }
                          (a.lanes |= n),
                            null !== (s = a.alternate) && (s.lanes |= n),
                            xo(a.return, n, t),
                            (u.lanes |= n);
                          break;
                        }
                        s = s.next;
                      }
                    } else if (10 === a.tag)
                      i = a.type === t.type ? null : a.child;
                    else if (18 === a.tag) {
                      if (null === (i = a.return)) throw Error(o(341));
                      (i.lanes |= n),
                        null !== (u = i.alternate) && (u.lanes |= n),
                        xo(i, n, t),
                        (i = a.sibling);
                    } else i = a.child;
                    if (null !== i) i.return = a;
                    else
                      for (i = a; null !== i; ) {
                        if (i === t) {
                          i = null;
                          break;
                        }
                        if (null !== (a = i.sibling)) {
                          (a.return = i.return), (i = a);
                          break;
                        }
                        i = i.return;
                      }
                    a = i;
                  }
              ki(e, t, l.children, n), (t = t.child);
            }
            return t;
          case 9:
            return (
              (l = t.type),
              (r = t.pendingProps.children),
              Co(t, n),
              (r = r((l = Ro(l)))),
              (t.flags |= 1),
              ki(e, t, r, n),
              t.child
            );
          case 14:
            return (
              (l = vo((r = t.type), t.pendingProps)),
              Ei(e, t, r, (l = vo(r.type, l)), n)
            );
          case 15:
            return xi(e, t, t.type, t.pendingProps, n);
          case 17:
            return (
              (r = t.type),
              (l = t.pendingProps),
              (l = t.elementType === r ? l : vo(r, l)),
              Qi(e, t),
              (t.tag = 1),
              Tl(r) ? ((e = !0), Ol(t)) : (e = !1),
              Co(t, n),
              Qo(t, r, l),
              Ko(t, r, l, n),
              _i(null, t, r, !0, e, n)
            );
          case 19:
            return Wi(e, t, n);
          case 22:
            return Ci(e, t, n);
        }
        throw Error(o(156, t.tag));
      };
      var qs =
        "function" == typeof reportError
          ? reportError
          : function (e) {
              console.error(e);
            };
      function Ys(e) {
        this._internalRoot = e;
      }
      function Xs(e) {
        this._internalRoot = e;
      }
      function Gs(e) {
        return !(
          !e ||
          (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
        );
      }
      function Js(e) {
        return !(
          !e ||
          (1 !== e.nodeType &&
            9 !== e.nodeType &&
            11 !== e.nodeType &&
            (8 !== e.nodeType ||
              " react-mount-point-unstable " !== e.nodeValue))
        );
      }
      function Zs() {}
      function ec(e, t, n, r, l) {
        var o = n._reactRootContainer;
        if (o) {
          var a = o;
          if ("function" == typeof l) {
            var i = l;
            l = function () {
              var e = js(a);
              i.call(e);
            };
          }
          Qs(t, a, e, l);
        } else
          a = (function (e, t, n, r, l) {
            if (l) {
              if ("function" == typeof r) {
                var o = r;
                r = function () {
                  var e = js(a);
                  o.call(e);
                };
              }
              var a = Ws(t, r, e, 0, null, !1, 0, "", Zs);
              return (
                (e._reactRootContainer = a),
                (e[hl] = a.current),
                Vr(8 === e.nodeType ? e.parentNode : e),
                fs(),
                a
              );
            }
            for (; (l = e.lastChild); ) e.removeChild(l);
            if ("function" == typeof r) {
              var i = r;
              r = function () {
                var e = js(u);
                i.call(e);
              };
            }
            var u = Hs(e, 0, !1, null, 0, !1, 0, "", Zs);
            return (
              (e._reactRootContainer = u),
              (e[hl] = u.current),
              Vr(8 === e.nodeType ? e.parentNode : e),
              fs(function () {
                Qs(t, u, n, r);
              }),
              u
            );
          })(n, t, e, l, r);
        return js(a);
      }
      (Xs.prototype.render = Ys.prototype.render =
        function (e) {
          var t = this._internalRoot;
          if (null === t) throw Error(o(409));
          Qs(e, t, null, null);
        }),
        (Xs.prototype.unmount = Ys.prototype.unmount =
          function () {
            var e = this._internalRoot;
            if (null !== e) {
              this._internalRoot = null;
              var t = e.containerInfo;
              fs(function () {
                Qs(null, e, null, null);
              }),
                (t[hl] = null);
            }
          }),
        (Xs.prototype.unstable_scheduleHydration = function (e) {
          if (e) {
            var t = xt();
            e = { blockedOn: null, target: e, priority: t };
            for (
              var n = 0;
              n < zt.length && 0 !== t && t < zt[n].priority;
              n++
            );
            zt.splice(n, 0, e), 0 === n && At(e);
          }
        }),
        (kt = function (e) {
          switch (e.tag) {
            case 3:
              var t = e.stateNode;
              if (t.current.memoizedState.isDehydrated) {
                var n = ft(t.pendingLanes);
                0 !== n &&
                  (yt(t, 1 | n),
                  ls(t, Ge()),
                  0 == (6 & _u) && ((Wu = Ge() + 500), Vl()));
              }
              break;
            case 13:
              fs(function () {
                var t = Mo(e, 1);
                if (null !== t) {
                  var n = ts();
                  rs(t, e, 1, n);
                }
              }),
                $s(e, 1);
          }
        }),
        (St = function (e) {
          if (13 === e.tag) {
            var t = Mo(e, 134217728);
            null !== t && rs(t, e, 134217728, ts()), $s(e, 134217728);
          }
        }),
        (Et = function (e) {
          if (13 === e.tag) {
            var t = ns(e),
              n = Mo(e, t);
            null !== n && rs(n, e, t, ts()), $s(e, t);
          }
        }),
        (xt = function () {
          return bt;
        }),
        (Ct = function (e, t) {
          var n = bt;
          try {
            return (bt = e), t();
          } finally {
            bt = n;
          }
        }),
        (Se = function (e, t, n) {
          switch (t) {
            case "input":
              if ((J(e, n), (t = n.name), "radio" === n.type && null != t)) {
                for (n = e; n.parentNode; ) n = n.parentNode;
                for (
                  n = n.querySelectorAll(
                    "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                  ),
                    t = 0;
                  t < n.length;
                  t++
                ) {
                  var r = n[t];
                  if (r !== e && r.form === e.form) {
                    var l = kl(r);
                    if (!l) throw Error(o(90));
                    $(r), J(r, l);
                  }
                }
              }
              break;
            case "textarea":
              oe(e, n);
              break;
            case "select":
              null != (t = n.value) && ne(e, !!n.multiple, t, !1);
          }
        }),
        (Pe = cs),
        (_e = fs);
      var tc = { usingClientEntryPoint: !1, Events: [bl, wl, kl, Re, Ne, cs] },
        nc = {
          findFiberByHostInstance: yl,
          bundleType: 0,
          version: "18.2.0",
          rendererPackageName: "react-dom",
        },
        rc = {
          bundleType: nc.bundleType,
          version: nc.version,
          rendererPackageName: nc.rendererPackageName,
          rendererConfig: nc.rendererConfig,
          overrideHookState: null,
          overrideHookStateDeletePath: null,
          overrideHookStateRenamePath: null,
          overrideProps: null,
          overridePropsDeletePath: null,
          overridePropsRenamePath: null,
          setErrorHandler: null,
          setSuspenseHandler: null,
          scheduleUpdate: null,
          currentDispatcherRef: w.ReactCurrentDispatcher,
          findHostInstanceByFiber: function (e) {
            return null === (e = je(e)) ? null : e.stateNode;
          },
          findFiberByHostInstance:
            nc.findFiberByHostInstance ||
            function () {
              return null;
            },
          findHostInstancesForRefresh: null,
          scheduleRefresh: null,
          scheduleRoot: null,
          setRefreshHandler: null,
          getCurrentFiber: null,
          reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
        };
      if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
        var lc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!lc.isDisabled && lc.supportsFiber)
          try {
            (lt = lc.inject(rc)), (ot = lc);
          } catch (ce) {}
      }
      (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
        (t.createPortal = function (e, t) {
          var n =
            2 < arguments.length && void 0 !== arguments[2]
              ? arguments[2]
              : null;
          if (!Gs(t)) throw Error(o(200));
          return (function (e, t, n) {
            var r =
              3 < arguments.length && void 0 !== arguments[3]
                ? arguments[3]
                : null;
            return {
              $$typeof: S,
              key: null == r ? null : "" + r,
              children: e,
              containerInfo: t,
              implementation: n,
            };
          })(e, t, null, n);
        }),
        (t.createRoot = function (e, t) {
          if (!Gs(e)) throw Error(o(299));
          var n = !1,
            r = "",
            l = qs;
          return (
            null != t &&
              (!0 === t.unstable_strictMode && (n = !0),
              void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
              void 0 !== t.onRecoverableError && (l = t.onRecoverableError)),
            (t = Hs(e, 1, !1, null, 0, n, 0, r, l)),
            (e[hl] = t.current),
            Vr(8 === e.nodeType ? e.parentNode : e),
            new Ys(t)
          );
        }),
        (t.findDOMNode = function (e) {
          if (null == e) return null;
          if (1 === e.nodeType) return e;
          var t = e._reactInternals;
          if (void 0 === t) {
            if ("function" == typeof e.render) throw Error(o(188));
            throw ((e = Object.keys(e).join(",")), Error(o(268, e)));
          }
          return null === (e = je(t)) ? null : e.stateNode;
        }),
        (t.flushSync = function (e) {
          return fs(e);
        }),
        (t.hydrate = function (e, t, n) {
          if (!Js(t)) throw Error(o(200));
          return ec(null, e, t, !0, n);
        }),
        (t.hydrateRoot = function (e, t, n) {
          if (!Gs(e)) throw Error(o(405));
          var r = (null != n && n.hydratedSources) || null,
            l = !1,
            a = "",
            i = qs;
          if (
            (null != n &&
              (!0 === n.unstable_strictMode && (l = !0),
              void 0 !== n.identifierPrefix && (a = n.identifierPrefix),
              void 0 !== n.onRecoverableError && (i = n.onRecoverableError)),
            (t = Ws(t, null, e, 1, null != n ? n : null, l, 0, a, i)),
            (e[hl] = t.current),
            Vr(e),
            r)
          )
            for (e = 0; e < r.length; e++)
              (l = (l = (n = r[e])._getVersion)(n._source)),
                null == t.mutableSourceEagerHydrationData
                  ? (t.mutableSourceEagerHydrationData = [n, l])
                  : t.mutableSourceEagerHydrationData.push(n, l);
          return new Xs(t);
        }),
        (t.render = function (e, t, n) {
          if (!Js(t)) throw Error(o(200));
          return ec(null, e, t, !1, n);
        }),
        (t.unmountComponentAtNode = function (e) {
          if (!Js(e)) throw Error(o(40));
          return (
            !!e._reactRootContainer &&
            (fs(function () {
              ec(null, null, e, !1, function () {
                (e._reactRootContainer = null), (e[hl] = null);
              });
            }),
            !0)
          );
        }),
        (t.unstable_batchedUpdates = cs),
        (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
          if (!Js(n)) throw Error(o(200));
          if (null == e || void 0 === e._reactInternals) throw Error(o(38));
          return ec(e, t, n, !1, r);
        }),
        (t.version = "18.2.0-next-9e3b772b8-20220608");
    },
    7029: function (e, t, n) {
      "use strict";
      var r = n(8316);
      (t.s = r.createRoot), r.hydrateRoot;
    },
    8316: function (e, t, n) {
      "use strict";
      !(function e() {
        if (
          "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
          "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
        )
          try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
          } catch (e) {
            console.error(e);
          }
      })(),
        (e.exports = n(2967));
    },
    6475: function (e, t) {
      "use strict";
      function n(e, t) {
        var n = e.length;
        e.push(t);
        e: for (; 0 < n; ) {
          var r = (n - 1) >>> 1,
            l = e[r];
          if (!(0 < o(l, t))) break e;
          (e[r] = t), (e[n] = l), (n = r);
        }
      }
      function r(e) {
        return 0 === e.length ? null : e[0];
      }
      function l(e) {
        if (0 === e.length) return null;
        var t = e[0],
          n = e.pop();
        if (n !== t) {
          e[0] = n;
          e: for (var r = 0, l = e.length, a = l >>> 1; r < a; ) {
            var i = 2 * (r + 1) - 1,
              u = e[i],
              s = i + 1,
              c = e[s];
            if (0 > o(u, n))
              s < l && 0 > o(c, u)
                ? ((e[r] = c), (e[s] = n), (r = s))
                : ((e[r] = u), (e[i] = n), (r = i));
            else {
              if (!(s < l && 0 > o(c, n))) break e;
              (e[r] = c), (e[s] = n), (r = s);
            }
          }
        }
        return t;
      }
      function o(e, t) {
        var n = e.sortIndex - t.sortIndex;
        return 0 !== n ? n : e.id - t.id;
      }
      if (
        "object" == typeof performance &&
        "function" == typeof performance.now
      ) {
        var a = performance;
        t.unstable_now = function () {
          return a.now();
        };
      } else {
        var i = Date,
          u = i.now();
        t.unstable_now = function () {
          return i.now() - u;
        };
      }
      var s = [],
        c = [],
        f = 1,
        d = null,
        p = 3,
        h = !1,
        m = !1,
        g = !1,
        v = "function" == typeof setTimeout ? setTimeout : null,
        y = "function" == typeof clearTimeout ? clearTimeout : null,
        b = "undefined" != typeof setImmediate ? setImmediate : null;
      function w(e) {
        for (var t = r(c); null !== t; ) {
          if (null === t.callback) l(c);
          else {
            if (!(t.startTime <= e)) break;
            l(c), (t.sortIndex = t.expirationTime), n(s, t);
          }
          t = r(c);
        }
      }
      function k(e) {
        if (((g = !1), w(e), !m))
          if (null !== r(s)) (m = !0), z(S);
          else {
            var t = r(c);
            null !== t && F(k, t.startTime - e);
          }
      }
      function S(e, n) {
        (m = !1), g && ((g = !1), y(R), (R = -1)), (h = !0);
        var o = p;
        try {
          for (
            w(n), d = r(s);
            null !== d && (!(d.expirationTime > n) || (e && !_()));

          ) {
            var a = d.callback;
            if ("function" == typeof a) {
              (d.callback = null), (p = d.priorityLevel);
              var i = a(d.expirationTime <= n);
              (n = t.unstable_now()),
                "function" == typeof i ? (d.callback = i) : d === r(s) && l(s),
                w(n);
            } else l(s);
            d = r(s);
          }
          if (null !== d) var u = !0;
          else {
            var f = r(c);
            null !== f && F(k, f.startTime - n), (u = !1);
          }
          return u;
        } finally {
          (d = null), (p = o), (h = !1);
        }
      }
      "undefined" != typeof navigator &&
        void 0 !== navigator.scheduling &&
        void 0 !== navigator.scheduling.isInputPending &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
      var E,
        x = !1,
        C = null,
        R = -1,
        N = 5,
        P = -1;
      function _() {
        return !(t.unstable_now() - P < N);
      }
      function M() {
        if (null !== C) {
          var e = t.unstable_now();
          P = e;
          var n = !0;
          try {
            n = C(!0, e);
          } finally {
            n ? E() : ((x = !1), (C = null));
          }
        } else x = !1;
      }
      if ("function" == typeof b)
        E = function () {
          b(M);
        };
      else if ("undefined" != typeof MessageChannel) {
        var L = new MessageChannel(),
          T = L.port2;
        (L.port1.onmessage = M),
          (E = function () {
            T.postMessage(null);
          });
      } else
        E = function () {
          v(M, 0);
        };
      function z(e) {
        (C = e), x || ((x = !0), E());
      }
      function F(e, n) {
        R = v(function () {
          e(t.unstable_now());
        }, n);
      }
      (t.unstable_IdlePriority = 5),
        (t.unstable_ImmediatePriority = 1),
        (t.unstable_LowPriority = 4),
        (t.unstable_NormalPriority = 3),
        (t.unstable_Profiling = null),
        (t.unstable_UserBlockingPriority = 2),
        (t.unstable_cancelCallback = function (e) {
          e.callback = null;
        }),
        (t.unstable_continueExecution = function () {
          m || h || ((m = !0), z(S));
        }),
        (t.unstable_forceFrameRate = function (e) {
          0 > e || 125 < e
            ? console.error(
                "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
              )
            : (N = 0 < e ? Math.floor(1e3 / e) : 5);
        }),
        (t.unstable_getCurrentPriorityLevel = function () {
          return p;
        }),
        (t.unstable_getFirstCallbackNode = function () {
          return r(s);
        }),
        (t.unstable_next = function (e) {
          switch (p) {
            case 1:
            case 2:
            case 3:
              var t = 3;
              break;
            default:
              t = p;
          }
          var n = p;
          p = t;
          try {
            return e();
          } finally {
            p = n;
          }
        }),
        (t.unstable_pauseExecution = function () {}),
        (t.unstable_requestPaint = function () {}),
        (t.unstable_runWithPriority = function (e, t) {
          switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              e = 3;
          }
          var n = p;
          p = e;
          try {
            return t();
          } finally {
            p = n;
          }
        }),
        (t.unstable_scheduleCallback = function (e, l, o) {
          var a = t.unstable_now();
          switch (
            ((o =
              "object" == typeof o &&
              null !== o &&
              "number" == typeof (o = o.delay) &&
              0 < o
                ? a + o
                : a),
            e)
          ) {
            case 1:
              var i = -1;
              break;
            case 2:
              i = 250;
              break;
            case 5:
              i = 1073741823;
              break;
            case 4:
              i = 1e4;
              break;
            default:
              i = 5e3;
          }
          return (
            (e = {
              id: f++,
              callback: l,
              priorityLevel: e,
              startTime: o,
              expirationTime: (i = o + i),
              sortIndex: -1,
            }),
            o > a
              ? ((e.sortIndex = o),
                n(c, e),
                null === r(s) &&
                  e === r(c) &&
                  (g ? (y(R), (R = -1)) : (g = !0), F(k, o - a)))
              : ((e.sortIndex = i), n(s, e), m || h || ((m = !0), z(S))),
            e
          );
        }),
        (t.unstable_shouldYield = _),
        (t.unstable_wrapCallback = function (e) {
          var t = p;
          return function () {
            var n = p;
            p = t;
            try {
              return e.apply(this, arguments);
            } finally {
              p = n;
            }
          };
        });
    },
    4616: function (e, t, n) {
      "use strict";
      e.exports = n(6475);
    },
    1706: function (e) {
      e.exports = function () {
        var e = document.getSelection();
        if (!e.rangeCount) return function () {};
        for (
          var t = document.activeElement, n = [], r = 0;
          r < e.rangeCount;
          r++
        )
          n.push(e.getRangeAt(r));
        switch (t.tagName.toUpperCase()) {
          case "INPUT":
          case "TEXTAREA":
            t.blur();
            break;
          default:
            t = null;
        }
        return (
          e.removeAllRanges(),
          function () {
            "Caret" === e.type && e.removeAllRanges(),
              e.rangeCount ||
                n.forEach(function (t) {
                  e.addRange(t);
                }),
              t && t.focus();
          }
        );
      };
    },
    4061: function (e, t, n) {
      "use strict";
      n.d(t, {
        RR: function () {
          return i;
        },
        cv: function () {
          return u;
        },
        oo: function () {
          return o;
        },
        uY: function () {
          return s;
        },
      });
      var r = n(4029);
      function l(e, t, n) {
        let { reference: l, floating: o } = e;
        const a = (0, r.Qq)(t),
          i = (0, r.Wh)(t),
          u = (0, r.I4)(i),
          s = (0, r.k3)(t),
          c = "y" === a,
          f = l.x + l.width / 2 - o.width / 2,
          d = l.y + l.height / 2 - o.height / 2,
          p = l[u] / 2 - o[u] / 2;
        let h;
        switch (s) {
          case "top":
            h = { x: f, y: l.y - o.height };
            break;
          case "bottom":
            h = { x: f, y: l.y + l.height };
            break;
          case "right":
            h = { x: l.x + l.width, y: d };
            break;
          case "left":
            h = { x: l.x - o.width, y: d };
            break;
          default:
            h = { x: l.x, y: l.y };
        }
        switch ((0, r.hp)(t)) {
          case "start":
            h[i] -= p * (n && c ? -1 : 1);
            break;
          case "end":
            h[i] += p * (n && c ? -1 : 1);
        }
        return h;
      }
      const o = async (e, t, n) => {
        const {
            placement: r = "bottom",
            strategy: o = "absolute",
            middleware: a = [],
            platform: i,
          } = n,
          u = a.filter(Boolean),
          s = await (null == i.isRTL ? void 0 : i.isRTL(t));
        let c = await i.getElementRects({
            reference: e,
            floating: t,
            strategy: o,
          }),
          { x: f, y: d } = l(c, r, s),
          p = r,
          h = {},
          m = 0;
        for (let n = 0; n < u.length; n++) {
          const { name: a, fn: g } = u[n],
            {
              x: v,
              y: y,
              data: b,
              reset: w,
            } = await g({
              x: f,
              y: d,
              initialPlacement: r,
              placement: p,
              strategy: o,
              middlewareData: h,
              rects: c,
              platform: i,
              elements: { reference: e, floating: t },
            });
          (f = null != v ? v : f),
            (d = null != y ? y : d),
            (h = { ...h, [a]: { ...h[a], ...b } }),
            w &&
              m <= 50 &&
              (m++,
              "object" == typeof w &&
                (w.placement && (p = w.placement),
                w.rects &&
                  (c =
                    !0 === w.rects
                      ? await i.getElementRects({
                          reference: e,
                          floating: t,
                          strategy: o,
                        })
                      : w.rects),
                ({ x: f, y: d } = l(c, p, s))),
              (n = -1));
        }
        return { x: f, y: d, placement: p, strategy: o, middlewareData: h };
      };
      async function a(e, t) {
        var n;
        void 0 === t && (t = {});
        const {
            x: l,
            y: o,
            platform: a,
            rects: i,
            elements: u,
            strategy: s,
          } = e,
          {
            boundary: c = "clippingAncestors",
            rootBoundary: f = "viewport",
            elementContext: d = "floating",
            altBoundary: p = !1,
            padding: h = 0,
          } = (0, r.ku)(t, e),
          m = (0, r.yd)(h),
          g = u[p ? ("floating" === d ? "reference" : "floating") : d],
          v = (0, r.JB)(
            await a.getClippingRect({
              element:
                null ==
                  (n = await (null == a.isElement ? void 0 : a.isElement(g))) ||
                n
                  ? g
                  : g.contextElement ||
                    (await (null == a.getDocumentElement
                      ? void 0
                      : a.getDocumentElement(u.floating))),
              boundary: c,
              rootBoundary: f,
              strategy: s,
            })
          ),
          y = "floating" === d ? { ...i.floating, x: l, y: o } : i.reference,
          b = await (null == a.getOffsetParent
            ? void 0
            : a.getOffsetParent(u.floating)),
          w = ((await (null == a.isElement ? void 0 : a.isElement(b))) &&
            (await (null == a.getScale ? void 0 : a.getScale(b)))) || {
            x: 1,
            y: 1,
          },
          k = (0, r.JB)(
            a.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
                  rect: y,
                  offsetParent: b,
                  strategy: s,
                })
              : y
          );
        return {
          top: (v.top - k.top + m.top) / w.y,
          bottom: (k.bottom - v.bottom + m.bottom) / w.y,
          left: (v.left - k.left + m.left) / w.x,
          right: (k.right - v.right + m.right) / w.x,
        };
      }
      const i = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: "flip",
              options: e,
              async fn(t) {
                var n;
                const {
                    placement: l,
                    middlewareData: o,
                    rects: i,
                    initialPlacement: u,
                    platform: s,
                    elements: c,
                  } = t,
                  {
                    mainAxis: f = !0,
                    crossAxis: d = !0,
                    fallbackPlacements: p,
                    fallbackStrategy: h = "bestFit",
                    fallbackAxisSideDirection: m = "none",
                    flipAlignment: g = !0,
                    ...v
                  } = (0, r.ku)(e, t),
                  y = (0, r.k3)(l),
                  b = (0, r.k3)(u) === u,
                  w = await (null == s.isRTL ? void 0 : s.isRTL(c.floating)),
                  k = p || (b || !g ? [(0, r.pw)(u)] : (0, r.gy)(u));
                p || "none" === m || k.push(...(0, r.KX)(u, g, m, w));
                const S = [u, ...k],
                  E = await a(t, v),
                  x = [];
                let C = (null == (n = o.flip) ? void 0 : n.overflows) || [];
                if ((f && x.push(E[y]), d)) {
                  const e = (0, r.i8)(l, i, w);
                  x.push(E[e[0]], E[e[1]]);
                }
                if (
                  ((C = [...C, { placement: l, overflows: x }]),
                  !x.every((e) => e <= 0))
                ) {
                  var R, N;
                  const e =
                      ((null == (R = o.flip) ? void 0 : R.index) || 0) + 1,
                    t = S[e];
                  if (t)
                    return {
                      data: { index: e, overflows: C },
                      reset: { placement: t },
                    };
                  let n =
                    null ==
                    (N = C.filter((e) => e.overflows[0] <= 0).sort(
                      (e, t) => e.overflows[1] - t.overflows[1]
                    )[0])
                      ? void 0
                      : N.placement;
                  if (!n)
                    switch (h) {
                      case "bestFit": {
                        var P;
                        const e =
                          null ==
                          (P = C.map((e) => [
                            e.placement,
                            e.overflows
                              .filter((e) => e > 0)
                              .reduce((e, t) => e + t, 0),
                          ]).sort((e, t) => e[1] - t[1])[0])
                            ? void 0
                            : P[0];
                        e && (n = e);
                        break;
                      }
                      case "initialPlacement":
                        n = u;
                    }
                  if (l !== n) return { reset: { placement: n } };
                }
                return {};
              },
            }
          );
        },
        u = function (e) {
          return (
            void 0 === e && (e = 0),
            {
              name: "offset",
              options: e,
              async fn(t) {
                const { x: n, y: l } = t,
                  o = await (async function (e, t) {
                    const { placement: n, platform: l, elements: o } = e,
                      a = await (null == l.isRTL
                        ? void 0
                        : l.isRTL(o.floating)),
                      i = (0, r.k3)(n),
                      u = (0, r.hp)(n),
                      s = "y" === (0, r.Qq)(n),
                      c = ["left", "top"].includes(i) ? -1 : 1,
                      f = a && s ? -1 : 1,
                      d = (0, r.ku)(t, e);
                    let {
                      mainAxis: p,
                      crossAxis: h,
                      alignmentAxis: m,
                    } = "number" == typeof d
                      ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
                      : {
                          mainAxis: 0,
                          crossAxis: 0,
                          alignmentAxis: null,
                          ...d,
                        };
                    return (
                      u &&
                        "number" == typeof m &&
                        (h = "end" === u ? -1 * m : m),
                      s ? { x: h * f, y: p * c } : { x: p * c, y: h * f }
                    );
                  })(t, e);
                return { x: n + o.x, y: l + o.y, data: o };
              },
            }
          );
        },
        s = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: "shift",
              options: e,
              async fn(t) {
                const { x: n, y: l, placement: o } = t,
                  {
                    mainAxis: i = !0,
                    crossAxis: u = !1,
                    limiter: s = {
                      fn: (e) => {
                        let { x: t, y: n } = e;
                        return { x: t, y: n };
                      },
                    },
                    ...c
                  } = (0, r.ku)(e, t),
                  f = { x: n, y: l },
                  d = await a(t, c),
                  p = (0, r.Qq)((0, r.k3)(o)),
                  h = (0, r.Rn)(p);
                let m = f[h],
                  g = f[p];
                if (i) {
                  const e = "y" === h ? "bottom" : "right",
                    t = m + d["y" === h ? "top" : "left"],
                    n = m - d[e];
                  m = (0, r.uZ)(t, m, n);
                }
                if (u) {
                  const e = "y" === p ? "bottom" : "right",
                    t = g + d["y" === p ? "top" : "left"],
                    n = g - d[e];
                  g = (0, r.uZ)(t, g, n);
                }
                const v = s.fn({ ...t, [h]: m, [p]: g });
                return { ...v, data: { x: v.x - n, y: v.y - l } };
              },
            }
          );
        };
    },
    5580: function (e, t, n) {
      "use strict";
      n.d(t, {
        Me: function () {
          return b;
        },
        oo: function () {
          return w;
        },
      });
      var r = n(4029),
        l = n(4061),
        o = n(7372);
      function a(e) {
        const t = (0, o.Dx)(e);
        let n = parseFloat(t.width) || 0,
          l = parseFloat(t.height) || 0;
        const a = (0, o.Re)(e),
          i = a ? e.offsetWidth : n,
          u = a ? e.offsetHeight : l,
          s = (0, r.NM)(n) !== i || (0, r.NM)(l) !== u;
        return s && ((n = i), (l = u)), { width: n, height: l, $: s };
      }
      function i(e) {
        return (0, o.kK)(e) ? e : e.contextElement;
      }
      function u(e) {
        const t = i(e);
        if (!(0, o.Re)(t)) return (0, r.ze)(1);
        const n = t.getBoundingClientRect(),
          { width: l, height: u, $: s } = a(t);
        let c = (s ? (0, r.NM)(n.width) : n.width) / l,
          f = (s ? (0, r.NM)(n.height) : n.height) / u;
        return (
          (c && Number.isFinite(c)) || (c = 1),
          (f && Number.isFinite(f)) || (f = 1),
          { x: c, y: f }
        );
      }
      const s = (0, r.ze)(0);
      function c(e) {
        const t = (0, o.Jj)(e);
        return (0, o.Pf)() && t.visualViewport
          ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
          : s;
      }
      function f(e, t, n, l) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        const a = e.getBoundingClientRect(),
          s = i(e);
        let f = (0, r.ze)(1);
        t && (l ? (0, o.kK)(l) && (f = u(l)) : (f = u(e)));
        const d = (function (e, t, n) {
          return (
            void 0 === t && (t = !1), !(!n || (t && n !== (0, o.Jj)(e))) && t
          );
        })(s, n, l)
          ? c(s)
          : (0, r.ze)(0);
        let p = (a.left + d.x) / f.x,
          h = (a.top + d.y) / f.y,
          m = a.width / f.x,
          g = a.height / f.y;
        if (s) {
          const e = (0, o.Jj)(s),
            t = l && (0, o.kK)(l) ? (0, o.Jj)(l) : l;
          let n = e.frameElement;
          for (; n && l && t !== e; ) {
            const e = u(n),
              t = n.getBoundingClientRect(),
              r = (0, o.Dx)(n),
              l = t.left + (n.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              a = t.top + (n.clientTop + parseFloat(r.paddingTop)) * e.y;
            (p *= e.x),
              (h *= e.y),
              (m *= e.x),
              (g *= e.y),
              (p += l),
              (h += a),
              (n = (0, o.Jj)(n).frameElement);
          }
        }
        return (0, r.JB)({ width: m, height: g, x: p, y: h });
      }
      function d(e) {
        return f((0, o.tF)(e)).left + (0, o.Lw)(e).scrollLeft;
      }
      function p(e, t, n) {
        let l;
        if ("viewport" === t)
          l = (function (e, t) {
            const n = (0, o.Jj)(e),
              r = (0, o.tF)(e),
              l = n.visualViewport;
            let a = r.clientWidth,
              i = r.clientHeight,
              u = 0,
              s = 0;
            if (l) {
              (a = l.width), (i = l.height);
              const e = (0, o.Pf)();
              (!e || (e && "fixed" === t)) &&
                ((u = l.offsetLeft), (s = l.offsetTop));
            }
            return { width: a, height: i, x: u, y: s };
          })(e, n);
        else if ("document" === t)
          l = (function (e) {
            const t = (0, o.tF)(e),
              n = (0, o.Lw)(e),
              l = e.ownerDocument.body,
              a = (0, r.Fp)(
                t.scrollWidth,
                t.clientWidth,
                l.scrollWidth,
                l.clientWidth
              ),
              i = (0, r.Fp)(
                t.scrollHeight,
                t.clientHeight,
                l.scrollHeight,
                l.clientHeight
              );
            let u = -n.scrollLeft + d(e);
            const s = -n.scrollTop;
            return (
              "rtl" === (0, o.Dx)(l).direction &&
                (u += (0, r.Fp)(t.clientWidth, l.clientWidth) - a),
              { width: a, height: i, x: u, y: s }
            );
          })((0, o.tF)(e));
        else if ((0, o.kK)(t))
          l = (function (e, t) {
            const n = f(e, !0, "fixed" === t),
              l = n.top + e.clientTop,
              a = n.left + e.clientLeft,
              i = (0, o.Re)(e) ? u(e) : (0, r.ze)(1);
            return {
              width: e.clientWidth * i.x,
              height: e.clientHeight * i.y,
              x: a * i.x,
              y: l * i.y,
            };
          })(t, n);
        else {
          const n = c(e);
          l = { ...t, x: t.x - n.x, y: t.y - n.y };
        }
        return (0, r.JB)(l);
      }
      function h(e, t) {
        const n = (0, o.Ow)(e);
        return (
          !(n === t || !(0, o.kK)(n) || (0, o.Py)(n)) &&
          ("fixed" === (0, o.Dx)(n).position || h(n, t))
        );
      }
      function m(e, t, n) {
        const l = (0, o.Re)(t),
          a = (0, o.tF)(t),
          i = "fixed" === n,
          u = f(e, !0, i, t);
        let s = { scrollLeft: 0, scrollTop: 0 };
        const c = (0, r.ze)(0);
        if (l || (!l && !i))
          if (
            (("body" !== (0, o.wk)(t) || (0, o.ao)(a)) && (s = (0, o.Lw)(t)), l)
          ) {
            const e = f(t, !0, i, t);
            (c.x = e.x + t.clientLeft), (c.y = e.y + t.clientTop);
          } else a && (c.x = d(a));
        return {
          x: u.left + s.scrollLeft - c.x,
          y: u.top + s.scrollTop - c.y,
          width: u.width,
          height: u.height,
        };
      }
      function g(e, t) {
        return (0, o.Re)(e) && "fixed" !== (0, o.Dx)(e).position
          ? t
            ? t(e)
            : e.offsetParent
          : null;
      }
      function v(e, t) {
        const n = (0, o.Jj)(e);
        if (!(0, o.Re)(e)) return n;
        let r = g(e, t);
        for (; r && (0, o.Ze)(r) && "static" === (0, o.Dx)(r).position; )
          r = g(r, t);
        return r &&
          ("html" === (0, o.wk)(r) ||
            ("body" === (0, o.wk)(r) &&
              "static" === (0, o.Dx)(r).position &&
              !(0, o.hT)(r)))
          ? n
          : r || (0, o.gQ)(e) || n;
      }
      const y = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
          let { rect: t, offsetParent: n, strategy: l } = e;
          const a = (0, o.Re)(n),
            i = (0, o.tF)(n);
          if (n === i) return t;
          let s = { scrollLeft: 0, scrollTop: 0 },
            c = (0, r.ze)(1);
          const d = (0, r.ze)(0);
          if (
            (a || (!a && "fixed" !== l)) &&
            (("body" !== (0, o.wk)(n) || (0, o.ao)(i)) && (s = (0, o.Lw)(n)),
            (0, o.Re)(n))
          ) {
            const e = f(n);
            (c = u(n)), (d.x = e.x + n.clientLeft), (d.y = e.y + n.clientTop);
          }
          return {
            width: t.width * c.x,
            height: t.height * c.y,
            x: t.x * c.x - s.scrollLeft * c.x + d.x,
            y: t.y * c.y - s.scrollTop * c.y + d.y,
          };
        },
        getDocumentElement: o.tF,
        getClippingRect: function (e) {
          let { element: t, boundary: n, rootBoundary: l, strategy: a } = e;
          const i = [
              ...("clippingAncestors" === n
                ? (function (e, t) {
                    const n = t.get(e);
                    if (n) return n;
                    let r = (0, o.Kx)(e).filter(
                        (e) => (0, o.kK)(e) && "body" !== (0, o.wk)(e)
                      ),
                      l = null;
                    const a = "fixed" === (0, o.Dx)(e).position;
                    let i = a ? (0, o.Ow)(e) : e;
                    for (; (0, o.kK)(i) && !(0, o.Py)(i); ) {
                      const t = (0, o.Dx)(i),
                        n = (0, o.hT)(i);
                      n || "fixed" !== t.position || (l = null),
                        (
                          a
                            ? !n && !l
                            : (!n &&
                                "static" === t.position &&
                                l &&
                                ["absolute", "fixed"].includes(l.position)) ||
                              ((0, o.ao)(i) && !n && h(e, i))
                        )
                          ? (r = r.filter((e) => e !== i))
                          : (l = t),
                        (i = (0, o.Ow)(i));
                    }
                    return t.set(e, r), r;
                  })(t, this._c)
                : [].concat(n)),
              l,
            ],
            u = i[0],
            s = i.reduce((e, n) => {
              const l = p(t, n, a);
              return (
                (e.top = (0, r.Fp)(l.top, e.top)),
                (e.right = (0, r.VV)(l.right, e.right)),
                (e.bottom = (0, r.VV)(l.bottom, e.bottom)),
                (e.left = (0, r.Fp)(l.left, e.left)),
                e
              );
            }, p(t, u, a));
          return {
            width: s.right - s.left,
            height: s.bottom - s.top,
            x: s.left,
            y: s.top,
          };
        },
        getOffsetParent: v,
        getElementRects: async function (e) {
          let { reference: t, floating: n, strategy: r } = e;
          const l = this.getOffsetParent || v,
            o = this.getDimensions;
          return {
            reference: m(t, await l(n), r),
            floating: { x: 0, y: 0, ...(await o(n)) },
          };
        },
        getClientRects: function (e) {
          return Array.from(e.getClientRects());
        },
        getDimensions: function (e) {
          return a(e);
        },
        getScale: u,
        isElement: o.kK,
        isRTL: function (e) {
          return "rtl" === (0, o.Dx)(e).direction;
        },
      };
      function b(e, t, n, l) {
        void 0 === l && (l = {});
        const {
            ancestorScroll: a = !0,
            ancestorResize: u = !0,
            elementResize: s = "function" == typeof ResizeObserver,
            layoutShift: c = "function" == typeof IntersectionObserver,
            animationFrame: d = !1,
          } = l,
          p = i(e),
          h = a || u ? [...(p ? (0, o.Kx)(p) : []), ...(0, o.Kx)(t)] : [];
        h.forEach((e) => {
          a && e.addEventListener("scroll", n, { passive: !0 }),
            u && e.addEventListener("resize", n);
        });
        const m =
          p && c
            ? (function (e, t) {
                let n,
                  l = null;
                const a = (0, o.tF)(e);
                function i() {
                  clearTimeout(n), l && l.disconnect(), (l = null);
                }
                return (
                  (function o(u, s) {
                    void 0 === u && (u = !1), void 0 === s && (s = 1), i();
                    const {
                      left: c,
                      top: f,
                      width: d,
                      height: p,
                    } = e.getBoundingClientRect();
                    if ((u || t(), !d || !p)) return;
                    const h = {
                      rootMargin:
                        -(0, r.GW)(f) +
                        "px " +
                        -(0, r.GW)(a.clientWidth - (c + d)) +
                        "px " +
                        -(0, r.GW)(a.clientHeight - (f + p)) +
                        "px " +
                        -(0, r.GW)(c) +
                        "px",
                      threshold: (0, r.Fp)(0, (0, r.VV)(1, s)) || 1,
                    };
                    let m = !0;
                    function g(e) {
                      const t = e[0].intersectionRatio;
                      if (t !== s) {
                        if (!m) return o();
                        t
                          ? o(!1, t)
                          : (n = setTimeout(() => {
                              o(!1, 1e-7);
                            }, 100));
                      }
                      m = !1;
                    }
                    try {
                      l = new IntersectionObserver(g, {
                        ...h,
                        root: a.ownerDocument,
                      });
                    } catch (e) {
                      l = new IntersectionObserver(g, h);
                    }
                    l.observe(e);
                  })(!0),
                  i
                );
              })(p, n)
            : null;
        let g,
          v = -1,
          y = null;
        s &&
          ((y = new ResizeObserver((e) => {
            let [r] = e;
            r &&
              r.target === p &&
              y &&
              (y.unobserve(t),
              cancelAnimationFrame(v),
              (v = requestAnimationFrame(() => {
                y && y.observe(t);
              }))),
              n();
          })),
          p && !d && y.observe(p),
          y.observe(t));
        let b = d ? f(e) : null;
        return (
          d &&
            (function t() {
              const r = f(e);
              !b ||
                (r.x === b.x &&
                  r.y === b.y &&
                  r.width === b.width &&
                  r.height === b.height) ||
                n(),
                (b = r),
                (g = requestAnimationFrame(t));
            })(),
          n(),
          () => {
            h.forEach((e) => {
              a && e.removeEventListener("scroll", n),
                u && e.removeEventListener("resize", n);
            }),
              m && m(),
              y && y.disconnect(),
              (y = null),
              d && cancelAnimationFrame(g);
          }
        );
      }
      const w = (e, t, n) => {
        const r = new Map(),
          o = { platform: y, ...n },
          a = { ...o.platform, _c: r };
        return (0, l.oo)(e, t, { ...o, platform: a });
      };
    },
    1646: function (e, t, n) {
      "use strict";
      n.d(t, {
        wD: function () {
          return xe;
        },
        mN: function () {
          return G;
        },
        ll: function () {
          return ke;
        },
        RB: function () {
          return J;
        },
        bQ: function () {
          return Me;
        },
        YF: function () {
          return Le;
        },
        jV: function () {
          return X;
        },
        Zm: function () {
          return q;
        },
      });
      var r = n(2784),
        l = n.t(r, 2),
        o = n(7372);
      function a(e) {
        let t = e.activeElement;
        for (
          ;
          null !=
          (null == (n = t) || null == (r = n.shadowRoot)
            ? void 0
            : r.activeElement);

        ) {
          var n, r;
          t = t.shadowRoot.activeElement;
        }
        return t;
      }
      function i(e, t) {
        if (!e || !t) return !1;
        const n = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && (0, o.Zq)(n)) {
          let n = t;
          for (; n; ) {
            if (e === n) return !0;
            n = n.parentNode || n.host;
          }
        }
        return !1;
      }
      function u(e) {
        if (0 === e.mozInputSource && e.isTrusted) return !0;
        const t = /Android/i;
        return (t.test(
          (function () {
            const e = navigator.userAgentData;
            return null != e && e.platform ? e.platform : navigator.platform;
          })()
        ) ||
          t.test(
            (function () {
              const e = navigator.userAgentData;
              return e && Array.isArray(e.brands)
                ? e.brands
                    .map((e) => {
                      let { brand: t, version: n } = e;
                      return t + "/" + n;
                    })
                    .join(" ")
                : navigator.userAgent;
            })()
          )) &&
          e.pointerType
          ? "click" === e.type && 1 === e.buttons
          : 0 === e.detail && !e.pointerType;
      }
      function s(e) {
        return (
          (0 === e.width && 0 === e.height) ||
          (1 === e.width &&
            1 === e.height &&
            0 === e.pressure &&
            0 === e.detail &&
            "mouse" !== e.pointerType) ||
          (e.width < 1 && e.height < 1 && 0 === e.pressure && 0 === e.detail)
        );
      }
      function c(e) {
        return (null == e ? void 0 : e.ownerDocument) || document;
      }
      function f(e, t) {
        if (null == t) return !1;
        if ("composedPath" in e) return e.composedPath().includes(t);
        const n = e;
        return null != n.target && t.contains(n.target);
      }
      function d(e) {
        return "composedPath" in e ? e.composedPath()[0] : e.target;
      }
      const p =
        "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
      function h(e) {
        e.preventDefault(), e.stopPropagation();
      }
      var m = n(5580),
        g = n(8316),
        v = "undefined" != typeof document ? r.useLayoutEffect : r.useEffect;
      function y(e, t) {
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        let n, r, l;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if (((n = e.length), n != t.length)) return !1;
            for (r = n; 0 != r--; ) if (!y(e[r], t[r])) return !1;
            return !0;
          }
          if (
            ((l = Object.keys(e)), (n = l.length), n !== Object.keys(t).length)
          )
            return !1;
          for (r = n; 0 != r--; )
            if (!{}.hasOwnProperty.call(t, l[r])) return !1;
          for (r = n; 0 != r--; ) {
            const n = l[r];
            if (!(("_owner" === n && e.$$typeof) || y(e[n], t[n]))) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function b(e) {
        return "undefined" == typeof window
          ? 1
          : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function w(e, t) {
        const n = b(e);
        return Math.round(t * n) / n;
      }
      function k(e) {
        const t = r.useRef(e);
        return (
          v(() => {
            t.current = e;
          }),
          t
        );
      }
      var S = [
          "input:not([inert])",
          "select:not([inert])",
          "textarea:not([inert])",
          "a[href]:not([inert])",
          "button:not([inert])",
          "[tabindex]:not(slot):not([inert])",
          "audio[controls]:not([inert])",
          "video[controls]:not([inert])",
          '[contenteditable]:not([contenteditable="false"]):not([inert])',
          "details>summary:first-of-type:not([inert])",
          "details:not([inert])",
        ].join(","),
        E = "undefined" == typeof Element,
        x = E
          ? function () {}
          : Element.prototype.matches ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.webkitMatchesSelector,
        C =
          !E && Element.prototype.getRootNode
            ? function (e) {
                var t;
                return null == e || null === (t = e.getRootNode) || void 0 === t
                  ? void 0
                  : t.call(e);
              }
            : function (e) {
                return null == e ? void 0 : e.ownerDocument;
              },
        R = function e(t, n) {
          var r;
          void 0 === n && (n = !0);
          var l =
            null == t || null === (r = t.getAttribute) || void 0 === r
              ? void 0
              : r.call(t, "inert");
          return "" === l || "true" === l || (n && t && e(t.parentNode));
        },
        N = function e(t, n, r) {
          for (var l = [], o = Array.from(t); o.length; ) {
            var a = o.shift();
            if (!R(a, !1))
              if ("SLOT" === a.tagName) {
                var i = a.assignedElements(),
                  u = e(i.length ? i : a.children, !0, r);
                r.flatten
                  ? l.push.apply(l, u)
                  : l.push({ scopeParent: a, candidates: u });
              } else {
                x.call(a, S) &&
                  r.filter(a) &&
                  (n || !t.includes(a)) &&
                  l.push(a);
                var s =
                    a.shadowRoot ||
                    ("function" == typeof r.getShadowRoot &&
                      r.getShadowRoot(a)),
                  c =
                    !R(s, !1) && (!r.shadowRootFilter || r.shadowRootFilter(a));
                if (s && c) {
                  var f = e(!0 === s ? a.children : s.children, !0, r);
                  r.flatten
                    ? l.push.apply(l, f)
                    : l.push({ scopeParent: a, candidates: f });
                } else o.unshift.apply(o, a.children);
              }
          }
          return l;
        },
        P = function (e, t) {
          return e.tabIndex < 0 &&
            (t ||
              /^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) ||
              (function (e) {
                var t,
                  n =
                    null == e || null === (t = e.getAttribute) || void 0 === t
                      ? void 0
                      : t.call(e, "contenteditable");
                return "" === n || "true" === n;
              })(e)) &&
            isNaN(parseInt(e.getAttribute("tabindex"), 10))
            ? 0
            : e.tabIndex;
        },
        _ = function (e, t) {
          return e.tabIndex === t.tabIndex
            ? e.documentOrder - t.documentOrder
            : e.tabIndex - t.tabIndex;
        },
        M = function (e) {
          return "INPUT" === e.tagName;
        },
        L = function (e) {
          var t = e.getBoundingClientRect(),
            n = t.width,
            r = t.height;
          return 0 === n && 0 === r;
        },
        T = function (e, t) {
          return !(
            t.disabled ||
            R(t) ||
            (function (e) {
              return M(e) && "hidden" === e.type;
            })(t) ||
            (function (e, t) {
              var n = t.displayCheck,
                r = t.getShadowRoot;
              if ("hidden" === getComputedStyle(e).visibility) return !0;
              var l = x.call(e, "details>summary:first-of-type")
                ? e.parentElement
                : e;
              if (x.call(l, "details:not([open]) *")) return !0;
              if (n && "full" !== n && "legacy-full" !== n) {
                if ("non-zero-area" === n) return L(e);
              } else {
                if ("function" == typeof r) {
                  for (var o = e; e; ) {
                    var a = e.parentElement,
                      i = C(e);
                    if (a && !a.shadowRoot && !0 === r(a)) return L(e);
                    e = e.assignedSlot
                      ? e.assignedSlot
                      : a || i === e.ownerDocument
                      ? a
                      : i.host;
                  }
                  e = o;
                }
                if (
                  (function (e) {
                    var t,
                      n,
                      r,
                      l,
                      o = e && C(e),
                      a = null === (t = o) || void 0 === t ? void 0 : t.host,
                      i = !1;
                    if (o && o !== e)
                      for (
                        i = !!(
                          (null !== (n = a) &&
                            void 0 !== n &&
                            null !== (r = n.ownerDocument) &&
                            void 0 !== r &&
                            r.contains(a)) ||
                          (null != e &&
                            null !== (l = e.ownerDocument) &&
                            void 0 !== l &&
                            l.contains(e))
                        );
                        !i && a;

                      ) {
                        var u, s, c;
                        i = !(
                          null ===
                            (s = a =
                              null === (u = o = C(a)) || void 0 === u
                                ? void 0
                                : u.host) ||
                          void 0 === s ||
                          null === (c = s.ownerDocument) ||
                          void 0 === c ||
                          !c.contains(a)
                        );
                      }
                    return i;
                  })(e)
                )
                  return !e.getClientRects().length;
                if ("legacy-full" !== n) return !0;
              }
              return !1;
            })(t, e) ||
            (function (e) {
              return (
                "DETAILS" === e.tagName &&
                Array.prototype.slice.apply(e.children).some(function (e) {
                  return "SUMMARY" === e.tagName;
                })
              );
            })(t) ||
            (function (e) {
              if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
                for (var t = e.parentElement; t; ) {
                  if ("FIELDSET" === t.tagName && t.disabled) {
                    for (var n = 0; n < t.children.length; n++) {
                      var r = t.children.item(n);
                      if ("LEGEND" === r.tagName)
                        return (
                          !!x.call(t, "fieldset[disabled] *") || !r.contains(e)
                        );
                    }
                    return !0;
                  }
                  t = t.parentElement;
                }
              return !1;
            })(t)
          );
        },
        z = function (e, t) {
          return !(
            (function (e) {
              return (
                (function (e) {
                  return M(e) && "radio" === e.type;
                })(e) &&
                !(function (e) {
                  if (!e.name) return !0;
                  var t,
                    n = e.form || C(e),
                    r = function (e) {
                      return n.querySelectorAll(
                        'input[type="radio"][name="' + e + '"]'
                      );
                    };
                  if (
                    "undefined" != typeof window &&
                    void 0 !== window.CSS &&
                    "function" == typeof window.CSS.escape
                  )
                    t = r(window.CSS.escape(e.name));
                  else
                    try {
                      t = r(e.name);
                    } catch (e) {
                      return (
                        console.error(
                          "Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",
                          e.message
                        ),
                        !1
                      );
                    }
                  var l = (function (e, t) {
                    for (var n = 0; n < e.length; n++)
                      if (e[n].checked && e[n].form === t) return e[n];
                  })(t, e.form);
                  return !l || l === e;
                })(e)
              );
            })(t) ||
            P(t) < 0 ||
            !T(e, t)
          );
        },
        F = function (e) {
          var t = parseInt(e.getAttribute("tabindex"), 10);
          return !!(isNaN(t) || t >= 0);
        },
        D = function e(t) {
          var n = [],
            r = [];
          return (
            t.forEach(function (t, l) {
              var o = !!t.scopeParent,
                a = o ? t.scopeParent : t,
                i = P(a, o),
                u = o ? e(t.candidates) : a;
              0 === i
                ? o
                  ? n.push.apply(n, u)
                  : n.push(a)
                : r.push({
                    documentOrder: l,
                    tabIndex: i,
                    item: t,
                    isScope: o,
                    content: u,
                  });
            }),
            r
              .sort(_)
              .reduce(function (e, t) {
                return (
                  t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e
                );
              }, [])
              .concat(n)
          );
        },
        O = function (e, t) {
          var n;
          return (
            (n = (t = t || {}).getShadowRoot
              ? N([e], t.includeContainer, {
                  filter: z.bind(null, t),
                  flatten: !1,
                  getShadowRoot: t.getShadowRoot,
                  shadowRootFilter: F,
                })
              : (function (e, t, n) {
                  if (R(e)) return [];
                  var r = Array.prototype.slice.apply(e.querySelectorAll(S));
                  return t && x.call(e, S) && r.unshift(e), r.filter(n);
                })(e, t.includeContainer, z.bind(null, t))),
            D(n)
          );
        };
      let A = 0;
      function I(e, t) {
        void 0 === t && (t = {});
        const {
          preventScroll: n = !1,
          cancelPrevious: r = !0,
          sync: l = !1,
        } = t;
        r && cancelAnimationFrame(A);
        const o = () => (null == e ? void 0 : e.focus({ preventScroll: n }));
        l ? o() : (A = requestAnimationFrame(o));
      }
      var U = "undefined" != typeof document ? r.useLayoutEffect : r.useEffect;
      function B() {
        return (
          (B = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          B.apply(this, arguments)
        );
      }
      let H = !1,
        V = 0;
      const W = () => "floating-ui-" + V++,
        Q =
          l["useId".toString()] ||
          function () {
            const [e, t] = r.useState(() => (H ? W() : void 0));
            return (
              U(() => {
                null == e && t(W());
              }, []),
              r.useEffect(() => {
                H || (H = !0);
              }, []),
              e
            );
          };
      function j() {
        const e = new Map();
        return {
          emit(t, n) {
            var r;
            null == (r = e.get(t)) || r.forEach((e) => e(n));
          },
          on(t, n) {
            e.set(t, [...(e.get(t) || []), n]);
          },
          off(t, n) {
            var r;
            e.set(
              t,
              (null == (r = e.get(t)) ? void 0 : r.filter((e) => e !== n)) || []
            );
          },
        };
      }
      const K = r.createContext(null),
        $ = r.createContext(null),
        q = () => {
          var e;
          return (null == (e = r.useContext(K)) ? void 0 : e.id) || null;
        },
        Y = () => r.useContext($);
      function X(e) {
        const t = Q(),
          n = Y(),
          r = q(),
          l = e || r;
        return (
          U(() => {
            const e = { id: t, parentId: l };
            return (
              null == n || n.addNode(e),
              () => {
                null == n || n.removeNode(e);
              }
            );
          }, [n, t, l]),
          t
        );
      }
      function G(e) {
        let { children: t, id: n } = e;
        const l = q();
        return r.createElement(
          K.Provider,
          { value: r.useMemo(() => ({ id: n, parentId: l }), [n, l]) },
          t
        );
      }
      function J(e) {
        let { children: t } = e;
        const n = r.useRef([]),
          l = r.useCallback((e) => {
            n.current = [...n.current, e];
          }, []),
          o = r.useCallback((e) => {
            n.current = n.current.filter((t) => t !== e);
          }, []),
          a = r.useState(() => j())[0];
        return r.createElement(
          $.Provider,
          {
            value: r.useMemo(
              () => ({ nodesRef: n, addNode: l, removeNode: o, events: a }),
              [n, l, o, a]
            ),
          },
          t
        );
      }
      function Z(e) {
        return "data-floating-ui-" + e;
      }
      function ee(e) {
        const t = (0, r.useRef)(e);
        return (
          U(() => {
            t.current = e;
          }),
          t
        );
      }
      function te(e, t) {
        let n = e.filter((e) => {
            var n;
            return (
              e.parentId === t && (null == (n = e.context) ? void 0 : n.open)
            );
          }),
          r = n;
        for (; r.length; )
          (r = e.filter((e) => {
            var t;
            return null == (t = r)
              ? void 0
              : t.some((t) => {
                  var n;
                  return (
                    e.parentId === t.id &&
                    (null == (n = e.context) ? void 0 : n.open)
                  );
                });
          })),
            (n = n.concat(r));
        return n;
      }
      let ne = new WeakMap(),
        re = new WeakSet(),
        le = {},
        oe = 0;
      const ae = () =>
          "undefined" != typeof HTMLElement && "inert" in HTMLElement.prototype,
        ie = (e) => e && (e.host || ie(e.parentNode)),
        ue = (e, t) =>
          t
            .map((t) => {
              if (e.contains(t)) return t;
              const n = ie(t);
              return e.contains(n) ? n : null;
            })
            .filter((e) => null != e);
      function se(e, t, n) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        const r = c(e[0]).body;
        return (function (e, t, n, r) {
          const l = "data-floating-ui-inert",
            o = r ? "inert" : n ? "aria-hidden" : null,
            a = ue(t, e),
            i = new Set(),
            u = new Set(a),
            s = [];
          le[l] || (le[l] = new WeakMap());
          const c = le[l];
          return (
            a.forEach(function e(t) {
              t && !i.has(t) && (i.add(t), t.parentNode && e(t.parentNode));
            }),
            (function e(t) {
              t &&
                !u.has(t) &&
                Array.prototype.forEach.call(t.children, (t) => {
                  if (i.has(t)) e(t);
                  else {
                    const e = o ? t.getAttribute(o) : null,
                      n = null !== e && "false" !== e,
                      r = (ne.get(t) || 0) + 1,
                      a = (c.get(t) || 0) + 1;
                    ne.set(t, r),
                      c.set(t, a),
                      s.push(t),
                      1 === r && n && re.add(t),
                      1 === a && t.setAttribute(l, ""),
                      !n && o && t.setAttribute(o, "true");
                  }
                });
            })(t),
            i.clear(),
            oe++,
            () => {
              s.forEach((e) => {
                const t = (ne.get(e) || 0) - 1,
                  n = (c.get(e) || 0) - 1;
                ne.set(e, t),
                  c.set(e, n),
                  t || (!re.has(e) && o && e.removeAttribute(o), re.delete(e)),
                  n || e.removeAttribute(l);
              }),
                oe--,
                oe ||
                  ((ne = new WeakMap()),
                  (ne = new WeakMap()),
                  (re = new WeakSet()),
                  (le = {}));
            }
          );
        })(e.concat(Array.from(r.querySelectorAll("[aria-live]"))), r, t, n);
      }
      const ce = () => ({
        getShadowRoot: !0,
        displayCheck:
          "function" == typeof ResizeObserver &&
          ResizeObserver.toString().includes("[native code]")
            ? "full"
            : "none",
      });
      function fe(e, t) {
        const n = O(e, ce());
        "prev" === t && n.reverse();
        const r = n.indexOf(a(c(e)));
        return n.slice(r + 1)[0];
      }
      function de() {
        return fe(document.body, "next");
      }
      function pe() {
        return fe(document.body, "prev");
      }
      function he(e, t) {
        const n = t || e.currentTarget,
          r = e.relatedTarget;
        return !r || !i(n, r);
      }
      function me(e) {
        O(e, ce()).forEach((e) => {
          (e.dataset.tabindex = e.getAttribute("tabindex") || ""),
            e.setAttribute("tabindex", "-1");
        });
      }
      function ge(e) {
        e.querySelectorAll("[data-tabindex]").forEach((e) => {
          const t = e.dataset.tabindex;
          delete e.dataset.tabindex,
            t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex");
        });
      }
      const ve = {
        border: 0,
        clip: "rect(0 0 0 0)",
        height: "1px",
        margin: "-1px",
        overflow: "hidden",
        padding: 0,
        position: "fixed",
        whiteSpace: "nowrap",
        width: "1px",
        top: 0,
        left: 0,
      };
      function ye(e) {
        "Tab" === e.key && (e.target, clearTimeout(void 0));
      }
      const be = r.forwardRef(function (e, t) {
          const [n, l] = r.useState();
          U(
            () => (
              /apple/i.test(navigator.vendor) && l("button"),
              document.addEventListener("keydown", ye),
              () => {
                document.removeEventListener("keydown", ye);
              }
            ),
            []
          );
          const o = {
            ref: t,
            tabIndex: 0,
            role: n,
            "aria-hidden": !n || void 0,
            [Z("focus-guard")]: "",
            style: ve,
          };
          return r.createElement("span", B({}, e, o));
        }),
        we = r.createContext(null);
      function ke(e) {
        let {
          children: t,
          id: n,
          root: l = null,
          preserveTabOrder: a = !0,
        } = e;
        const i = (function (e) {
            let { id: t, root: n } = void 0 === e ? {} : e;
            const [l, a] = r.useState(null),
              i = Q(),
              u = Se(),
              s = r.useMemo(
                () => ({ id: t, root: n, portalContext: u, uniqueId: i }),
                [t, n, u, i]
              ),
              c = r.useRef();
            return (
              U(
                () => () => {
                  null == l || l.remove();
                },
                [l, s]
              ),
              U(() => {
                if (c.current === s) return;
                c.current = s;
                const { id: e, root: t, portalContext: n, uniqueId: r } = s,
                  l = e ? document.getElementById(e) : null,
                  i = Z("portal");
                if (l) {
                  const e = document.createElement("div");
                  (e.id = r), e.setAttribute(i, ""), l.appendChild(e), a(e);
                } else {
                  let l = t || (null == n ? void 0 : n.portalNode);
                  l && !(0, o.kK)(l) && (l = l.current),
                    (l = l || document.body);
                  let u = null;
                  e &&
                    ((u = document.createElement("div")),
                    (u.id = e),
                    l.appendChild(u));
                  const s = document.createElement("div");
                  (s.id = r),
                    s.setAttribute(i, ""),
                    (l = u || l),
                    l.appendChild(s),
                    a(s);
                }
              }, [s]),
              l
            );
          })({ id: n, root: l }),
          [u, s] = r.useState(null),
          c = r.useRef(null),
          f = r.useRef(null),
          d = r.useRef(null),
          p = r.useRef(null),
          h = !!u && !u.modal && u.open && a && !(!l && !i);
        return (
          r.useEffect(() => {
            if (i && a && (null == u || !u.modal))
              return (
                i.addEventListener("focusin", e, !0),
                i.addEventListener("focusout", e, !0),
                () => {
                  i.removeEventListener("focusin", e, !0),
                    i.removeEventListener("focusout", e, !0);
                }
              );
            function e(e) {
              i && he(e) && ("focusin" === e.type ? ge : me)(i);
            }
          }, [i, a, null == u ? void 0 : u.modal]),
          r.createElement(
            we.Provider,
            {
              value: r.useMemo(
                () => ({
                  preserveTabOrder: a,
                  beforeOutsideRef: c,
                  afterOutsideRef: f,
                  beforeInsideRef: d,
                  afterInsideRef: p,
                  portalNode: i,
                  setFocusManagerState: s,
                }),
                [a, i]
              ),
            },
            h &&
              i &&
              r.createElement(be, {
                "data-type": "outside",
                ref: c,
                onFocus: (e) => {
                  if (he(e, i)) {
                    var t;
                    null == (t = d.current) || t.focus();
                  } else {
                    const e =
                      pe() ||
                      (null == u ? void 0 : u.refs.domReference.current);
                    null == e || e.focus();
                  }
                },
              }),
            h && i && r.createElement("span", { "aria-owns": i.id, style: ve }),
            i && (0, g.createPortal)(t, i),
            h &&
              i &&
              r.createElement(be, {
                "data-type": "outside",
                ref: f,
                onFocus: (e) => {
                  if (he(e, i)) {
                    var t;
                    null == (t = p.current) || t.focus();
                  } else {
                    const t =
                      de() ||
                      (null == u ? void 0 : u.refs.domReference.current);
                    null == t || t.focus(),
                      (null == u ? void 0 : u.closeOnFocusOut) &&
                        (null == u || u.onOpenChange(!1, e.nativeEvent));
                  }
                },
              })
          )
        );
      }
      const Se = () => r.useContext(we),
        Ee = r.forwardRef(function (e, t) {
          return r.createElement(
            "button",
            B({}, e, { type: "button", ref: t, tabIndex: -1, style: ve })
          );
        });
      function xe(e) {
        const {
            context: t,
            children: n,
            disabled: l = !1,
            order: u = ["content"],
            guards: s = !0,
            initialFocus: f = 0,
            returnFocus: m = !0,
            modal: g = !0,
            visuallyHiddenDismiss: v = !1,
            closeOnFocusOut: y = !0,
          } = e,
          {
            open: b,
            refs: w,
            nodeId: k,
            onOpenChange: S,
            events: E,
            dataRef: x,
            elements: { domReference: C, floating: R },
          } = t,
          N = !ae() || s,
          P = ee(u),
          _ = ee(f),
          M = ee(m),
          L = Y(),
          T = Se(),
          z = "number" == typeof f && f < 0,
          F = r.useRef(null),
          D = r.useRef(null),
          A = r.useRef(!1),
          B = r.useRef(null),
          H = r.useRef(!1),
          V = null != T,
          W =
            C &&
            "combobox" === C.getAttribute("role") &&
            ((Q = C), (0, o.Re)(Q) && Q.matches(p)) &&
            z;
        var Q;
        const j = r.useCallback(
            function (e) {
              return void 0 === e && (e = R), e ? O(e, ce()) : [];
            },
            [R]
          ),
          K = r.useCallback(
            (e) => {
              const t = j(e);
              return P.current
                .map((e) =>
                  C && "reference" === e ? C : R && "floating" === e ? R : t
                )
                .filter(Boolean)
                .flat();
            },
            [C, R, P, j]
          );
        function $(e) {
          return !l && v && g
            ? r.createElement(
                Ee,
                {
                  ref: "start" === e ? F : D,
                  onClick: (e) => S(!1, e.nativeEvent),
                },
                "string" == typeof v ? v : "Dismiss"
              )
            : null;
        }
        r.useEffect(() => {
          if (l || !g) return;
          function e(e) {
            if ("Tab" === e.key) {
              i(R, a(c(R))) && 0 === j().length && !W && h(e);
              const t = K(),
                n = d(e);
              "reference" === P.current[0] &&
                n === C &&
                (h(e), e.shiftKey ? I(t[t.length - 1]) : I(t[1])),
                "floating" === P.current[1] &&
                  n === R &&
                  e.shiftKey &&
                  (h(e), I(t[0]));
            }
          }
          const t = c(R);
          return (
            t.addEventListener("keydown", e),
            () => {
              t.removeEventListener("keydown", e);
            }
          );
        }, [l, C, R, g, P, w, W, j, K]),
          r.useEffect(() => {
            if (!l && y)
              return R && (0, o.Re)(C)
                ? (C.addEventListener("focusout", t),
                  C.addEventListener("pointerdown", e),
                  !g && R.addEventListener("focusout", t),
                  () => {
                    C.removeEventListener("focusout", t),
                      C.removeEventListener("pointerdown", e),
                      !g && R.removeEventListener("focusout", t);
                  })
                : void 0;
            function e() {
              (H.current = !0),
                setTimeout(() => {
                  H.current = !1;
                });
            }
            function t(e) {
              const t = e.relatedTarget;
              queueMicrotask(() => {
                const n = !(
                  i(C, t) ||
                  i(R, t) ||
                  i(t, R) ||
                  i(null == T ? void 0 : T.portalNode, t) ||
                  (null != t && t.hasAttribute(Z("focus-guard"))) ||
                  (L &&
                    (te(L.nodesRef.current, k).find((e) => {
                      var n, r;
                      return (
                        i(
                          null == (n = e.context)
                            ? void 0
                            : n.elements.floating,
                          t
                        ) ||
                        i(
                          null == (r = e.context)
                            ? void 0
                            : r.elements.domReference,
                          t
                        )
                      );
                    }) ||
                      (function (e, t) {
                        var n;
                        let r = [],
                          l =
                            null == (n = e.find((e) => e.id === t))
                              ? void 0
                              : n.parentId;
                        for (; l; ) {
                          const t = e.find((e) => e.id === l);
                          (l = null == t ? void 0 : t.parentId),
                            t && (r = r.concat(t));
                        }
                        return r;
                      })(L.nodesRef.current, k).find((e) => {
                        var n, r;
                        return (
                          (null == (n = e.context)
                            ? void 0
                            : n.elements.floating) === t ||
                          (null == (r = e.context)
                            ? void 0
                            : r.elements.domReference) === t
                        );
                      })))
                );
                t &&
                  n &&
                  !H.current &&
                  t !== B.current &&
                  ((A.current = !0), S(!1, e));
              });
            }
          }, [l, C, R, g, k, L, T, S, y]),
          r.useEffect(() => {
            var e;
            if (l) return;
            const t = Array.from(
              (null == T || null == (e = T.portalNode)
                ? void 0
                : e.querySelectorAll("[" + Z("portal") + "]")) || []
            );
            if (R) {
              const e = [
                  R,
                  ...t,
                  F.current,
                  D.current,
                  P.current.includes("reference") || W ? C : null,
                ].filter((e) => null != e),
                n = g ? se(e, N, !N) : se(e);
              return () => {
                n();
              };
            }
          }, [l, C, R, g, P, T, W, N]),
          U(() => {
            if (l || !R) return;
            const e = a(c(R));
            queueMicrotask(() => {
              const t = K(R),
                n = _.current,
                r = ("number" == typeof n ? t[n] : n.current) || R,
                l = i(R, e);
              z || l || !b || I(r, { preventScroll: r === R });
            });
          }, [l, b, R, z, K, _]),
          U(() => {
            if (l || !R) return;
            let e = !1;
            const t = c(R),
              n = a(t),
              r = x.current;
            function u(t) {
              if (
                ("escapeKey" === t.type &&
                  w.domReference.current &&
                  (B.current = w.domReference.current),
                ["referencePress", "escapeKey"].includes(t.type))
              )
                return;
              const n = t.data.returnFocus;
              "object" == typeof n
                ? ((A.current = !1), (e = n.preventScroll))
                : (A.current = !n);
            }
            return (
              (B.current = n),
              E.on("dismiss", u),
              () => {
                E.off("dismiss", u);
                const n = a(t);
                (i(R, n) ||
                  (L &&
                    te(L.nodesRef.current, k).some((e) => {
                      var t;
                      return i(
                        null == (t = e.context) ? void 0 : t.elements.floating,
                        n
                      );
                    })) ||
                  (r.openEvent &&
                    ["click", "mousedown"].includes(r.openEvent.type))) &&
                  w.domReference.current &&
                  (B.current = w.domReference.current),
                  M.current &&
                    (0, o.Re)(B.current) &&
                    !A.current &&
                    I(B.current, { cancelPrevious: !1, preventScroll: e });
              }
            );
          }, [l, R, M, x, w, E, L, k]),
          U(() => {
            if (!l && T)
              return (
                T.setFocusManagerState({
                  modal: g,
                  closeOnFocusOut: y,
                  open: b,
                  onOpenChange: S,
                  refs: w,
                }),
                () => {
                  T.setFocusManagerState(null);
                }
              );
          }, [l, T, g, b, S, w, y]),
          U(() => {
            if (!l && R && "function" == typeof MutationObserver && !z) {
              const e = () => {
                const e = R.getAttribute("tabindex");
                P.current.includes("floating") ||
                (a(c(R)) !== w.domReference.current && 0 === j().length)
                  ? "0" !== e && R.setAttribute("tabindex", "0")
                  : "-1" !== e && R.setAttribute("tabindex", "-1");
              };
              e();
              const t = new MutationObserver(e);
              return (
                t.observe(R, { childList: !0, subtree: !0, attributes: !0 }),
                () => {
                  t.disconnect();
                }
              );
            }
          }, [l, R, w, P, j, z]);
        const q = !l && N && !W && (V || g);
        return r.createElement(
          r.Fragment,
          null,
          q &&
            r.createElement(be, {
              "data-type": "inside",
              ref: null == T ? void 0 : T.beforeInsideRef,
              onFocus: (e) => {
                if (g) {
                  const e = K();
                  I("reference" === u[0] ? e[0] : e[e.length - 1]);
                } else if (null != T && T.preserveTabOrder && T.portalNode)
                  if (((A.current = !1), he(e, T.portalNode))) {
                    const e = de() || C;
                    null == e || e.focus();
                  } else {
                    var t;
                    null == (t = T.beforeOutsideRef.current) || t.focus();
                  }
              },
            }),
          !W && $("start"),
          n,
          $("end"),
          q &&
            r.createElement(be, {
              "data-type": "inside",
              ref: null == T ? void 0 : T.afterInsideRef,
              onFocus: (e) => {
                if (g) I(K()[0]);
                else if (null != T && T.preserveTabOrder && T.portalNode)
                  if ((y && (A.current = !0), he(e, T.portalNode))) {
                    const e = pe() || C;
                    null == e || e.focus();
                  } else {
                    var t;
                    null == (t = T.afterOutsideRef.current) || t.focus();
                  }
              },
            })
        );
      }
      const Ce = l["useInsertionEffect".toString()] || ((e) => e());
      function Re(e) {
        const t = r.useRef(() => {});
        return (
          Ce(() => {
            t.current = e;
          }),
          r.useCallback(function () {
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            return null == t.current ? void 0 : t.current(...n);
          }, [])
        );
      }
      const Ne = {
          pointerdown: "onPointerDown",
          mousedown: "onMouseDown",
          click: "onClick",
        },
        Pe = {
          pointerdown: "onPointerDownCapture",
          mousedown: "onMouseDownCapture",
          click: "onClickCapture",
        },
        _e = (e) => {
          var t, n;
          return {
            escapeKeyBubbles:
              "boolean" == typeof e
                ? e
                : null != (t = null == e ? void 0 : e.escapeKey) && t,
            outsidePressBubbles:
              "boolean" == typeof e
                ? e
                : null == (n = null == e ? void 0 : e.outsidePress) || n,
          };
        };
      function Me(e, t) {
        void 0 === t && (t = {});
        const {
            open: n,
            onOpenChange: l,
            events: a,
            nodeId: p,
            elements: { reference: h, domReference: m, floating: g },
            dataRef: v,
          } = e,
          {
            enabled: y = !0,
            escapeKey: b = !0,
            outsidePress: w = !0,
            outsidePressEvent: k = "pointerdown",
            referencePress: S = !1,
            referencePressEvent: E = "pointerdown",
            ancestorScroll: x = !1,
            bubbles: C,
          } = t,
          R = Y(),
          N = null != q(),
          P = Re("function" == typeof w ? w : () => !1),
          _ = "function" == typeof w ? P : w,
          M = r.useRef(!1),
          { escapeKeyBubbles: L, outsidePressBubbles: T } = _e(C),
          z = Re((e) => {
            if (!n || !y || !b || "Escape" !== e.key) return;
            const t = R ? te(R.nodesRef.current, p) : [];
            if (!L && (e.stopPropagation(), t.length > 0)) {
              let e = !0;
              if (
                (t.forEach((t) => {
                  var n;
                  null == (n = t.context) ||
                    !n.open ||
                    t.context.dataRef.current.__escapeKeyBubbles ||
                    (e = !1);
                }),
                !e)
              )
                return;
            }
            a.emit("dismiss", {
              type: "escapeKey",
              data: { returnFocus: { preventScroll: !1 } },
            }),
              l(
                !1,
                (function (e) {
                  return "nativeEvent" in e;
                })(e)
                  ? e.nativeEvent
                  : e
              );
          }),
          F = Re((e) => {
            const t = M.current;
            if (((M.current = !1), t)) return;
            if ("function" == typeof _ && !_(e)) return;
            const n = d(e),
              r = "[" + Z("inert") + "]",
              h = c(g).querySelectorAll(r);
            let v = (0, o.kK)(n) ? n : null;
            for (; v && !(0, o.Py)(v); ) {
              const e = (0, o.Ow)(v);
              if (e === c(g).body || !(0, o.kK)(e)) break;
              v = e;
            }
            if (
              h.length &&
              (0, o.kK)(n) &&
              !n.matches("html,body") &&
              !i(n, g) &&
              Array.from(h).every((e) => !i(v, e))
            )
              return;
            if ((0, o.Re)(n) && g) {
              const t = n.clientWidth > 0 && n.scrollWidth > n.clientWidth,
                r = n.clientHeight > 0 && n.scrollHeight > n.clientHeight;
              let l = r && e.offsetX > n.clientWidth;
              if (
                (r &&
                  "rtl" === (0, o.Dx)(n).direction &&
                  (l = e.offsetX <= n.offsetWidth - n.clientWidth),
                l || (t && e.offsetY > n.clientHeight))
              )
                return;
            }
            const y =
              R &&
              te(R.nodesRef.current, p).some((t) => {
                var n;
                return f(
                  e,
                  null == (n = t.context) ? void 0 : n.elements.floating
                );
              });
            if (f(e, g) || f(e, m) || y) return;
            const b = R ? te(R.nodesRef.current, p) : [];
            if (b.length > 0) {
              let e = !0;
              if (
                (b.forEach((t) => {
                  var n;
                  null == (n = t.context) ||
                    !n.open ||
                    t.context.dataRef.current.__outsidePressBubbles ||
                    (e = !1);
                }),
                !e)
              )
                return;
            }
            a.emit("dismiss", {
              type: "outsidePress",
              data: { returnFocus: N ? { preventScroll: !0 } : u(e) || s(e) },
            }),
              l(!1, e);
          });
        return (
          r.useEffect(() => {
            if (!n || !y) return;
            function e(e) {
              l(!1, e);
            }
            (v.current.__escapeKeyBubbles = L),
              (v.current.__outsidePressBubbles = T);
            const t = c(g);
            b && t.addEventListener("keydown", z),
              _ && t.addEventListener(k, F);
            let r = [];
            return (
              x &&
                ((0, o.kK)(m) && (r = (0, o.Kx)(m)),
                (0, o.kK)(g) && (r = r.concat((0, o.Kx)(g))),
                !(0, o.kK)(h) &&
                  h &&
                  h.contextElement &&
                  (r = r.concat((0, o.Kx)(h.contextElement)))),
              (r = r.filter((e) => {
                var n;
                return (
                  e !==
                  (null == (n = t.defaultView) ? void 0 : n.visualViewport)
                );
              })),
              r.forEach((t) => {
                t.addEventListener("scroll", e, { passive: !0 });
              }),
              () => {
                b && t.removeEventListener("keydown", z),
                  _ && t.removeEventListener(k, F),
                  r.forEach((t) => {
                    t.removeEventListener("scroll", e);
                  });
              }
            );
          }, [v, g, m, h, b, _, k, n, l, x, y, L, T, z, F]),
          r.useEffect(() => {
            M.current = !1;
          }, [_, k]),
          r.useMemo(
            () =>
              y
                ? {
                    reference: {
                      onKeyDown: z,
                      [Ne[E]]: (e) => {
                        S &&
                          (a.emit("dismiss", {
                            type: "referencePress",
                            data: { returnFocus: !1 },
                          }),
                          l(!1, e.nativeEvent));
                      },
                    },
                    floating: {
                      onKeyDown: z,
                      [Pe[k]]: () => {
                        M.current = !0;
                      },
                    },
                  }
                : {},
            [y, a, S, k, E, l, z]
          )
        );
      }
      function Le(e) {
        var t;
        void 0 === e && (e = {});
        const { open: n = !1, onOpenChange: l, nodeId: a } = e,
          [i, u] = r.useState(null),
          s = (null == (t = e.elements) ? void 0 : t.reference) || i,
          c = (function (e) {
            void 0 === e && (e = {});
            const {
                placement: t = "bottom",
                strategy: n = "absolute",
                middleware: l = [],
                platform: o,
                elements: { reference: a, floating: i } = {},
                transform: u = !0,
                whileElementsMounted: s,
                open: c,
              } = e,
              [f, d] = r.useState({
                x: 0,
                y: 0,
                strategy: n,
                placement: t,
                middlewareData: {},
                isPositioned: !1,
              }),
              [p, h] = r.useState(l);
            y(p, l) || h(l);
            const [S, E] = r.useState(null),
              [x, C] = r.useState(null),
              R = r.useCallback(
                (e) => {
                  e != M.current && ((M.current = e), E(e));
                },
                [E]
              ),
              N = r.useCallback(
                (e) => {
                  e !== L.current && ((L.current = e), C(e));
                },
                [C]
              ),
              P = a || S,
              _ = i || x,
              M = r.useRef(null),
              L = r.useRef(null),
              T = r.useRef(f),
              z = k(s),
              F = k(o),
              D = r.useCallback(() => {
                if (!M.current || !L.current) return;
                const e = { placement: t, strategy: n, middleware: p };
                F.current && (e.platform = F.current),
                  (0, m.oo)(M.current, L.current, e).then((e) => {
                    const t = { ...e, isPositioned: !0 };
                    O.current &&
                      !y(T.current, t) &&
                      ((T.current = t),
                      g.flushSync(() => {
                        d(t);
                      }));
                  });
              }, [p, t, n, F]);
            v(() => {
              !1 === c &&
                T.current.isPositioned &&
                ((T.current.isPositioned = !1),
                d((e) => ({ ...e, isPositioned: !1 })));
            }, [c]);
            const O = r.useRef(!1);
            v(
              () => (
                (O.current = !0),
                () => {
                  O.current = !1;
                }
              ),
              []
            ),
              v(() => {
                if ((P && (M.current = P), _ && (L.current = _), P && _)) {
                  if (z.current) return z.current(P, _, D);
                  D();
                }
              }, [P, _, D, z]);
            const A = r.useMemo(
                () => ({
                  reference: M,
                  floating: L,
                  setReference: R,
                  setFloating: N,
                }),
                [R, N]
              ),
              I = r.useMemo(() => ({ reference: P, floating: _ }), [P, _]),
              U = r.useMemo(() => {
                const e = { position: n, left: 0, top: 0 };
                if (!I.floating) return e;
                const t = w(I.floating, f.x),
                  r = w(I.floating, f.y);
                return u
                  ? {
                      ...e,
                      transform: "translate(" + t + "px, " + r + "px)",
                      ...(b(I.floating) >= 1.5 && { willChange: "transform" }),
                    }
                  : { position: n, left: t, top: r };
              }, [n, u, I.floating, f.x, f.y]);
            return r.useMemo(
              () => ({
                ...f,
                update: D,
                refs: A,
                elements: I,
                floatingStyles: U,
              }),
              [f, D, A, I, U]
            );
          })(e),
          f = Y(),
          d = Re((e, t) => {
            e && (h.current.openEvent = t), null == l || l(e, t);
          }),
          p = r.useRef(null),
          h = r.useRef({}),
          S = r.useState(() => j())[0],
          E = Q(),
          x = r.useCallback(
            (e) => {
              const t = (0, o.kK)(e)
                ? {
                    getBoundingClientRect: () => e.getBoundingClientRect(),
                    contextElement: e,
                  }
                : e;
              c.refs.setReference(t);
            },
            [c.refs]
          ),
          C = r.useCallback(
            (e) => {
              ((0, o.kK)(e) || null === e) && ((p.current = e), u(e)),
                ((0, o.kK)(c.refs.reference.current) ||
                  null === c.refs.reference.current ||
                  (null !== e && !(0, o.kK)(e))) &&
                  c.refs.setReference(e);
            },
            [c.refs]
          ),
          R = r.useMemo(
            () => ({
              ...c.refs,
              setReference: C,
              setPositionReference: x,
              domReference: p,
            }),
            [c.refs, C, x]
          ),
          N = r.useMemo(
            () => ({ ...c.elements, domReference: s }),
            [c.elements, s]
          ),
          P = r.useMemo(
            () => ({
              ...c,
              refs: R,
              elements: N,
              dataRef: h,
              nodeId: a,
              floatingId: E,
              events: S,
              open: n,
              onOpenChange: d,
            }),
            [c, a, E, S, n, d, R, N]
          );
        return (
          U(() => {
            const e =
              null == f ? void 0 : f.nodesRef.current.find((e) => e.id === a);
            e && (e.context = P);
          }),
          r.useMemo(
            () => ({ ...c, context: P, refs: R, elements: N }),
            [c, R, N, P]
          )
        );
      }
    },
    4029: function (e, t, n) {
      "use strict";
      n.d(t, {
        Fp: function () {
          return l;
        },
        GW: function () {
          return a;
        },
        I4: function () {
          return m;
        },
        JB: function () {
          return x;
        },
        KX: function () {
          return k;
        },
        NM: function () {
          return o;
        },
        Qq: function () {
          return g;
        },
        Rn: function () {
          return h;
        },
        VV: function () {
          return r;
        },
        Wh: function () {
          return v;
        },
        gy: function () {
          return b;
        },
        hp: function () {
          return p;
        },
        i8: function () {
          return y;
        },
        k3: function () {
          return d;
        },
        ku: function () {
          return f;
        },
        pw: function () {
          return S;
        },
        uZ: function () {
          return c;
        },
        yd: function () {
          return E;
        },
        ze: function () {
          return i;
        },
      });
      const r = Math.min,
        l = Math.max,
        o = Math.round,
        a = Math.floor,
        i = (e) => ({ x: e, y: e }),
        u = { left: "right", right: "left", bottom: "top", top: "bottom" },
        s = { start: "end", end: "start" };
      function c(e, t, n) {
        return l(e, r(t, n));
      }
      function f(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function d(e) {
        return e.split("-")[0];
      }
      function p(e) {
        return e.split("-")[1];
      }
      function h(e) {
        return "x" === e ? "y" : "x";
      }
      function m(e) {
        return "y" === e ? "height" : "width";
      }
      function g(e) {
        return ["top", "bottom"].includes(d(e)) ? "y" : "x";
      }
      function v(e) {
        return h(g(e));
      }
      function y(e, t, n) {
        void 0 === n && (n = !1);
        const r = p(e),
          l = v(e),
          o = m(l);
        let a =
          "x" === l
            ? r === (n ? "end" : "start")
              ? "right"
              : "left"
            : "start" === r
            ? "bottom"
            : "top";
        return t.reference[o] > t.floating[o] && (a = S(a)), [a, S(a)];
      }
      function b(e) {
        const t = S(e);
        return [w(e), t, w(t)];
      }
      function w(e) {
        return e.replace(/start|end/g, (e) => s[e]);
      }
      function k(e, t, n, r) {
        const l = p(e);
        let o = (function (e, t, n) {
          const r = ["left", "right"],
            l = ["right", "left"],
            o = ["top", "bottom"],
            a = ["bottom", "top"];
          switch (e) {
            case "top":
            case "bottom":
              return n ? (t ? l : r) : t ? r : l;
            case "left":
            case "right":
              return t ? o : a;
            default:
              return [];
          }
        })(d(e), "start" === n, r);
        return (
          l && ((o = o.map((e) => e + "-" + l)), t && (o = o.concat(o.map(w)))),
          o
        );
      }
      function S(e) {
        return e.replace(/left|right|bottom|top/g, (e) => u[e]);
      }
      function E(e) {
        return "number" != typeof e
          ? (function (e) {
              return { top: 0, right: 0, bottom: 0, left: 0, ...e };
            })(e)
          : { top: e, right: e, bottom: e, left: e };
      }
      function x(e) {
        return {
          ...e,
          top: e.y,
          left: e.x,
          right: e.x + e.width,
          bottom: e.y + e.height,
        };
      }
    },
    7372: function (e, t, n) {
      "use strict";
      function r(e) {
        return a(e) ? (e.nodeName || "").toLowerCase() : "#document";
      }
      function l(e) {
        var t;
        return (
          (null == e || null == (t = e.ownerDocument)
            ? void 0
            : t.defaultView) || window
        );
      }
      function o(e) {
        var t;
        return null ==
          (t = (a(e) ? e.ownerDocument : e.document) || window.document)
          ? void 0
          : t.documentElement;
      }
      function a(e) {
        return e instanceof Node || e instanceof l(e).Node;
      }
      function i(e) {
        return e instanceof Element || e instanceof l(e).Element;
      }
      function u(e) {
        return e instanceof HTMLElement || e instanceof l(e).HTMLElement;
      }
      function s(e) {
        return (
          "undefined" != typeof ShadowRoot &&
          (e instanceof ShadowRoot || e instanceof l(e).ShadowRoot)
        );
      }
      function c(e) {
        const { overflow: t, overflowX: n, overflowY: r, display: l } = g(e);
        return (
          /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
          !["inline", "contents"].includes(l)
        );
      }
      function f(e) {
        return ["table", "td", "th"].includes(r(e));
      }
      function d(e) {
        const t = h(),
          n = g(e);
        return (
          "none" !== n.transform ||
          "none" !== n.perspective ||
          (!!n.containerType && "normal" !== n.containerType) ||
          (!t && !!n.backdropFilter && "none" !== n.backdropFilter) ||
          (!t && !!n.filter && "none" !== n.filter) ||
          ["transform", "perspective", "filter"].some((e) =>
            (n.willChange || "").includes(e)
          ) ||
          ["paint", "layout", "strict", "content"].some((e) =>
            (n.contain || "").includes(e)
          )
        );
      }
      function p(e) {
        let t = y(e);
        for (; u(t) && !m(t); ) {
          if (d(t)) return t;
          t = y(t);
        }
        return null;
      }
      function h() {
        return (
          !("undefined" == typeof CSS || !CSS.supports) &&
          CSS.supports("-webkit-backdrop-filter", "none")
        );
      }
      function m(e) {
        return ["html", "body", "#document"].includes(r(e));
      }
      function g(e) {
        return l(e).getComputedStyle(e);
      }
      function v(e) {
        return i(e)
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
      }
      function y(e) {
        if ("html" === r(e)) return e;
        const t = e.assignedSlot || e.parentNode || (s(e) && e.host) || o(e);
        return s(t) ? t.host : t;
      }
      function b(e) {
        const t = y(e);
        return m(t)
          ? e.ownerDocument
            ? e.ownerDocument.body
            : e.body
          : u(t) && c(t)
          ? t
          : b(t);
      }
      function w(e, t) {
        var n;
        void 0 === t && (t = []);
        const r = b(e),
          o = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
          a = l(r);
        return o
          ? t.concat(
              a,
              a.visualViewport || [],
              c(r) ? r : [],
              a.frameElement ? w(a.frameElement) : []
            )
          : t.concat(r, w(r));
      }
      n.d(t, {
        Dx: function () {
          return g;
        },
        Jj: function () {
          return l;
        },
        Kx: function () {
          return w;
        },
        Lw: function () {
          return v;
        },
        Ow: function () {
          return y;
        },
        Pf: function () {
          return h;
        },
        Py: function () {
          return m;
        },
        Re: function () {
          return u;
        },
        Ze: function () {
          return f;
        },
        Zq: function () {
          return s;
        },
        ao: function () {
          return c;
        },
        gQ: function () {
          return p;
        },
        hT: function () {
          return d;
        },
        kK: function () {
          return i;
        },
        tF: function () {
          return o;
        },
        wk: function () {
          return r;
        },
      });
    },
    9444: function (e, t, n) {
      "use strict";
      n.d(t, {
        J: function () {
          return o;
        },
      });
      var r = Object.prototype.hasOwnProperty;
      function l(e, t, n) {
        for (n of e.keys()) if (o(n, t)) return n;
      }
      function o(e, t) {
        var n, a, i;
        if (e === t) return !0;
        if (e && t && (n = e.constructor) === t.constructor) {
          if (n === Date) return e.getTime() === t.getTime();
          if (n === RegExp) return e.toString() === t.toString();
          if (n === Array) {
            if ((a = e.length) === t.length) for (; a-- && o(e[a], t[a]); );
            return -1 === a;
          }
          if (n === Set) {
            if (e.size !== t.size) return !1;
            for (a of e) {
              if ((i = a) && "object" == typeof i && !(i = l(t, i))) return !1;
              if (!t.has(i)) return !1;
            }
            return !0;
          }
          if (n === Map) {
            if (e.size !== t.size) return !1;
            for (a of e) {
              if ((i = a[0]) && "object" == typeof i && !(i = l(t, i)))
                return !1;
              if (!o(a[1], t.get(i))) return !1;
            }
            return !0;
          }
          if (n === ArrayBuffer)
            (e = new Uint8Array(e)), (t = new Uint8Array(t));
          else if (n === DataView) {
            if ((a = e.byteLength) === t.byteLength)
              for (; a-- && e.getInt8(a) === t.getInt8(a); );
            return -1 === a;
          }
          if (ArrayBuffer.isView(e)) {
            if ((a = e.byteLength) === t.byteLength)
              for (; a-- && e[a] === t[a]; );
            return -1 === a;
          }
          if (!n || "object" == typeof e) {
            for (n in ((a = 0), e)) {
              if (r.call(e, n) && ++a && !r.call(t, n)) return !1;
              if (!(n in t) || !o(e[n], t[n])) return !1;
            }
            return Object.keys(t).length === a;
          }
        }
        return e != e && t != t;
      }
    },
  },
]);
