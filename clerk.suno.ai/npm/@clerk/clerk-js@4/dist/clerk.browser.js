/*! For license information please see clerk.browser.js.LICENSE.txt */
!(function (e, t) {
  if ("object" == typeof exports && "object" == typeof module)
    module.exports = t();
  else if ("function" == typeof define && define.amd) define([], t);
  else {
    var n = t();
    for (var r in n) ("object" == typeof exports ? exports : e)[r] = n[r];
  }
})(globalThis, function () {
  return (function () {
    var e,
      t,
      n,
      r,
      i = {
        9721: function (e, t, n) {
          "use strict";
          n.d(t, {
            Z: function () {
              return re;
            },
          });
          var r = (function () {
              function e(e) {
                var t = this;
                (this._insertTag = function (e) {
                  var n;
                  (n =
                    0 === t.tags.length
                      ? t.insertionPoint
                        ? t.insertionPoint.nextSibling
                        : t.prepend
                        ? t.container.firstChild
                        : t.before
                      : t.tags[t.tags.length - 1].nextSibling),
                    t.container.insertBefore(e, n),
                    t.tags.push(e);
                }),
                  (this.isSpeedy = void 0 === e.speedy || e.speedy),
                  (this.tags = []),
                  (this.ctr = 0),
                  (this.nonce = e.nonce),
                  (this.key = e.key),
                  (this.container = e.container),
                  (this.prepend = e.prepend),
                  (this.insertionPoint = e.insertionPoint),
                  (this.before = null);
              }
              var t = e.prototype;
              return (
                (t.hydrate = function (e) {
                  e.forEach(this._insertTag);
                }),
                (t.insert = function (e) {
                  this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 &&
                    this._insertTag(
                      (function (e) {
                        var t = document.createElement("style");
                        return (
                          t.setAttribute("data-emotion", e.key),
                          void 0 !== e.nonce &&
                            t.setAttribute("nonce", e.nonce),
                          t.appendChild(document.createTextNode("")),
                          t.setAttribute("data-s", ""),
                          t
                        );
                      })(this)
                    );
                  var t = this.tags[this.tags.length - 1];
                  if (this.isSpeedy) {
                    var n = (function (e) {
                      if (e.sheet) return e.sheet;
                      for (var t = 0; t < document.styleSheets.length; t++)
                        if (document.styleSheets[t].ownerNode === e)
                          return document.styleSheets[t];
                    })(t);
                    try {
                      n.insertRule(e, n.cssRules.length);
                    } catch (e) {}
                  } else t.appendChild(document.createTextNode(e));
                  this.ctr++;
                }),
                (t.flush = function () {
                  this.tags.forEach(function (e) {
                    return e.parentNode && e.parentNode.removeChild(e);
                  }),
                    (this.tags = []),
                    (this.ctr = 0);
                }),
                e
              );
            })(),
            i = Math.abs,
            o = String.fromCharCode,
            a = Object.assign;
          function s(e) {
            return e.trim();
          }
          function c(e, t, n) {
            return e.replace(t, n);
          }
          function u(e, t) {
            return e.indexOf(t);
          }
          function l(e, t) {
            return 0 | e.charCodeAt(t);
          }
          function d(e, t, n) {
            return e.slice(t, n);
          }
          function f(e) {
            return e.length;
          }
          function h(e) {
            return e.length;
          }
          function p(e, t) {
            return t.push(e), e;
          }
          var m = 1,
            g = 1,
            y = 0,
            v = 0,
            b = 0,
            w = "";
          function _(e, t, n, r, i, o, a) {
            return {
              value: e,
              root: t,
              parent: n,
              type: r,
              props: i,
              children: o,
              line: m,
              column: g,
              length: a,
              return: "",
            };
          }
          function S(e, t) {
            return a(
              _("", null, null, "", null, null, 0),
              e,
              { length: -e.length },
              t
            );
          }
          function k() {
            return (
              (b = v > 0 ? l(w, --v) : 0), g--, 10 === b && ((g = 1), m--), b
            );
          }
          function P() {
            return (
              (b = v < y ? l(w, v++) : 0), g++, 10 === b && ((g = 1), m++), b
            );
          }
          function O() {
            return l(w, v);
          }
          function U() {
            return v;
          }
          function x(e, t) {
            return d(w, e, t);
          }
          function A(e) {
            switch (e) {
              case 0:
              case 9:
              case 10:
              case 13:
              case 32:
                return 5;
              case 33:
              case 43:
              case 44:
              case 47:
              case 62:
              case 64:
              case 126:
              case 59:
              case 123:
              case 125:
                return 4;
              case 58:
                return 3;
              case 34:
              case 39:
              case 40:
              case 91:
                return 2;
              case 41:
              case 93:
                return 1;
            }
            return 0;
          }
          function E(e) {
            return (m = g = 1), (y = f((w = e))), (v = 0), [];
          }
          function C(e) {
            return (w = ""), e;
          }
          function I(e) {
            return s(x(v - 1, T(91 === e ? e + 2 : 40 === e ? e + 1 : e)));
          }
          function M(e) {
            for (; (b = O()) && b < 33; ) P();
            return A(e) > 2 || A(b) > 3 ? "" : " ";
          }
          function z(e, t) {
            for (
              ;
              --t &&
              P() &&
              !(b < 48 || b > 102 || (b > 57 && b < 65) || (b > 70 && b < 97));

            );
            return x(e, U() + (t < 6 && 32 == O() && 32 == P()));
          }
          function T(e) {
            for (; P(); )
              switch (b) {
                case e:
                  return v;
                case 34:
                case 39:
                  34 !== e && 39 !== e && T(b);
                  break;
                case 40:
                  41 === e && T(e);
                  break;
                case 92:
                  P();
              }
            return v;
          }
          function R(e, t) {
            for (; P() && e + b !== 57 && (e + b !== 84 || 47 !== O()); );
            return "/*" + x(t, v - 1) + "*" + o(47 === e ? e : P());
          }
          function j(e) {
            for (; !A(O()); ) P();
            return x(e, v);
          }
          var N = "-ms-",
            L = "-moz-",
            $ = "-webkit-",
            F = "comm",
            W = "rule",
            D = "decl",
            V = "@keyframes";
          function B(e, t) {
            for (var n = "", r = h(e), i = 0; i < r; i++)
              n += t(e[i], i, e, t) || "";
            return n;
          }
          function J(e, t, n, r) {
            switch (e.type) {
              case "@layer":
                if (e.children.length) break;
              case "@import":
              case D:
                return (e.return = e.return || e.value);
              case F:
                return "";
              case V:
                return (e.return = e.value + "{" + B(e.children, r) + "}");
              case W:
                e.value = e.props.join(",");
            }
            return f((n = B(e.children, r)))
              ? (e.return = e.value + "{" + n + "}")
              : "";
          }
          function q(e) {
            return C(G("", null, null, null, [""], (e = E(e)), 0, [0], e));
          }
          function G(e, t, n, r, i, a, s, d, h) {
            for (
              var m = 0,
                g = 0,
                y = s,
                v = 0,
                b = 0,
                w = 0,
                _ = 1,
                S = 1,
                x = 1,
                A = 0,
                E = "",
                C = i,
                T = a,
                N = r,
                L = E;
              S;

            )
              switch (((w = A), (A = P()))) {
                case 40:
                  if (108 != w && 58 == l(L, y - 1)) {
                    -1 != u((L += c(I(A), "&", "&\f")), "&\f") && (x = -1);
                    break;
                  }
                case 34:
                case 39:
                case 91:
                  L += I(A);
                  break;
                case 9:
                case 10:
                case 13:
                case 32:
                  L += M(w);
                  break;
                case 92:
                  L += z(U() - 1, 7);
                  continue;
                case 47:
                  switch (O()) {
                    case 42:
                    case 47:
                      p(K(R(P(), U()), t, n), h);
                      break;
                    default:
                      L += "/";
                  }
                  break;
                case 123 * _:
                  d[m++] = f(L) * x;
                case 125 * _:
                case 59:
                case 0:
                  switch (A) {
                    case 0:
                    case 125:
                      S = 0;
                    case 59 + g:
                      -1 == x && (L = c(L, /\f/g, "")),
                        b > 0 &&
                          f(L) - y &&
                          p(
                            b > 32
                              ? H(L + ";", r, n, y - 1)
                              : H(c(L, " ", "") + ";", r, n, y - 2),
                            h
                          );
                      break;
                    case 59:
                      L += ";";
                    default:
                      if (
                        (p(
                          (N = Z(
                            L,
                            t,
                            n,
                            m,
                            g,
                            i,
                            d,
                            E,
                            (C = []),
                            (T = []),
                            y
                          )),
                          a
                        ),
                        123 === A)
                      )
                        if (0 === g) G(L, t, N, N, C, a, y, d, T);
                        else
                          switch (99 === v && 110 === l(L, 3) ? 100 : v) {
                            case 100:
                            case 108:
                            case 109:
                            case 115:
                              G(
                                e,
                                N,
                                N,
                                r &&
                                  p(
                                    Z(e, N, N, 0, 0, i, d, E, i, (C = []), y),
                                    T
                                  ),
                                i,
                                T,
                                y,
                                d,
                                r ? C : T
                              );
                              break;
                            default:
                              G(L, N, N, N, [""], T, 0, d, T);
                          }
                  }
                  (m = g = b = 0), (_ = x = 1), (E = L = ""), (y = s);
                  break;
                case 58:
                  (y = 1 + f(L)), (b = w);
                default:
                  if (_ < 1)
                    if (123 == A) --_;
                    else if (125 == A && 0 == _++ && 125 == k()) continue;
                  switch (((L += o(A)), A * _)) {
                    case 38:
                      x = g > 0 ? 1 : ((L += "\f"), -1);
                      break;
                    case 44:
                      (d[m++] = (f(L) - 1) * x), (x = 1);
                      break;
                    case 64:
                      45 === O() && (L += I(P())),
                        (v = O()),
                        (g = y = f((E = L += j(U())))),
                        A++;
                      break;
                    case 45:
                      45 === w && 2 == f(L) && (_ = 0);
                  }
              }
            return a;
          }
          function Z(e, t, n, r, o, a, u, l, f, p, m) {
            for (
              var g = o - 1,
                y = 0 === o ? a : [""],
                v = h(y),
                b = 0,
                w = 0,
                S = 0;
              b < r;
              ++b
            )
              for (
                var k = 0, P = d(e, g + 1, (g = i((w = u[b])))), O = e;
                k < v;
                ++k
              )
                (O = s(w > 0 ? y[k] + " " + P : c(P, /&\f/g, y[k]))) &&
                  (f[S++] = O);
            return _(e, t, n, 0 === o ? W : l, f, p, m);
          }
          function K(e, t, n) {
            return _(e, t, n, F, o(b), d(e, 2, -2), 0);
          }
          function H(e, t, n, r) {
            return _(e, t, n, D, d(e, 0, r), d(e, r + 1, -1), r);
          }
          var X = function (e, t, n) {
              for (
                var r = 0, i = 0;
                (r = i), (i = O()), 38 === r && 12 === i && (t[n] = 1), !A(i);

              )
                P();
              return x(e, v);
            },
            Y = new WeakMap(),
            Q = function (e) {
              if ("rule" === e.type && e.parent && !(e.length < 1)) {
                for (
                  var t = e.value,
                    n = e.parent,
                    r = e.column === n.column && e.line === n.line;
                  "rule" !== n.type;

                )
                  if (!(n = n.parent)) return;
                if (
                  (1 !== e.props.length ||
                    58 === t.charCodeAt(0) ||
                    Y.get(n)) &&
                  !r
                ) {
                  Y.set(e, !0);
                  for (
                    var i = [],
                      a = (function (e, t) {
                        return C(
                          (function (e, t) {
                            var n = -1,
                              r = 44;
                            do {
                              switch (A(r)) {
                                case 0:
                                  38 === r && 12 === O() && (t[n] = 1),
                                    (e[n] += X(v - 1, t, n));
                                  break;
                                case 2:
                                  e[n] += I(r);
                                  break;
                                case 4:
                                  if (44 === r) {
                                    (e[++n] = 58 === O() ? "&\f" : ""),
                                      (t[n] = e[n].length);
                                    break;
                                  }
                                default:
                                  e[n] += o(r);
                              }
                            } while ((r = P()));
                            return e;
                          })(E(e), t)
                        );
                      })(t, i),
                      s = n.props,
                      c = 0,
                      u = 0;
                    c < a.length;
                    c++
                  )
                    for (var l = 0; l < s.length; l++, u++)
                      e.props[u] = i[c]
                        ? a[c].replace(/&\f/g, s[l])
                        : s[l] + " " + a[c];
                }
              }
            },
            ee = function (e) {
              if ("decl" === e.type) {
                var t = e.value;
                108 === t.charCodeAt(0) &&
                  98 === t.charCodeAt(2) &&
                  ((e.return = ""), (e.value = ""));
              }
            };
          function te(e, t) {
            switch (
              (function (e, t) {
                return 45 ^ l(e, 0)
                  ? (((((((t << 2) ^ l(e, 0)) << 2) ^ l(e, 1)) << 2) ^
                      l(e, 2)) <<
                      2) ^
                      l(e, 3)
                  : 0;
              })(e, t)
            ) {
              case 5103:
                return $ + "print-" + e + e;
              case 5737:
              case 4201:
              case 3177:
              case 3433:
              case 1641:
              case 4457:
              case 2921:
              case 5572:
              case 6356:
              case 5844:
              case 3191:
              case 6645:
              case 3005:
              case 6391:
              case 5879:
              case 5623:
              case 6135:
              case 4599:
              case 4855:
              case 4215:
              case 6389:
              case 5109:
              case 5365:
              case 5621:
              case 3829:
                return $ + e + e;
              case 5349:
              case 4246:
              case 4810:
              case 6968:
              case 2756:
                return $ + e + L + e + N + e + e;
              case 6828:
              case 4268:
                return $ + e + N + e + e;
              case 6165:
                return $ + e + N + "flex-" + e + e;
              case 5187:
                return (
                  $ +
                  e +
                  c(e, /(\w+).+(:[^]+)/, $ + "box-$1$2" + N + "flex-$1$2") +
                  e
                );
              case 5443:
                return $ + e + N + "flex-item-" + c(e, /flex-|-self/, "") + e;
              case 4675:
                return (
                  $ +
                  e +
                  N +
                  "flex-line-pack" +
                  c(e, /align-content|flex-|-self/, "") +
                  e
                );
              case 5548:
                return $ + e + N + c(e, "shrink", "negative") + e;
              case 5292:
                return $ + e + N + c(e, "basis", "preferred-size") + e;
              case 6060:
                return (
                  $ +
                  "box-" +
                  c(e, "-grow", "") +
                  $ +
                  e +
                  N +
                  c(e, "grow", "positive") +
                  e
                );
              case 4554:
                return $ + c(e, /([^-])(transform)/g, "$1" + $ + "$2") + e;
              case 6187:
                return (
                  c(
                    c(c(e, /(zoom-|grab)/, $ + "$1"), /(image-set)/, $ + "$1"),
                    e,
                    ""
                  ) + e
                );
              case 5495:
              case 3959:
                return c(e, /(image-set\([^]*)/, $ + "$1$`$1");
              case 4968:
                return (
                  c(
                    c(
                      e,
                      /(.+:)(flex-)?(.*)/,
                      $ + "box-pack:$3" + N + "flex-pack:$3"
                    ),
                    /s.+-b[^;]+/,
                    "justify"
                  ) +
                  $ +
                  e +
                  e
                );
              case 4095:
              case 3583:
              case 4068:
              case 2532:
                return c(e, /(.+)-inline(.+)/, $ + "$1$2") + e;
              case 8116:
              case 7059:
              case 5753:
              case 5535:
              case 5445:
              case 5701:
              case 4933:
              case 4677:
              case 5533:
              case 5789:
              case 5021:
              case 4765:
                if (f(e) - 1 - t > 6)
                  switch (l(e, t + 1)) {
                    case 109:
                      if (45 !== l(e, t + 4)) break;
                    case 102:
                      return (
                        c(
                          e,
                          /(.+:)(.+)-([^]+)/,
                          "$1" +
                            $ +
                            "$2-$3$1" +
                            L +
                            (108 == l(e, t + 3) ? "$3" : "$2-$3")
                        ) + e
                      );
                    case 115:
                      return ~u(e, "stretch")
                        ? te(c(e, "stretch", "fill-available"), t) + e
                        : e;
                  }
                break;
              case 4949:
                if (115 !== l(e, t + 1)) break;
              case 6444:
                switch (l(e, f(e) - 3 - (~u(e, "!important") && 10))) {
                  case 107:
                    return c(e, ":", ":" + $) + e;
                  case 101:
                    return (
                      c(
                        e,
                        /(.+:)([^;!]+)(;|!.+)?/,
                        "$1" +
                          $ +
                          (45 === l(e, 14) ? "inline-" : "") +
                          "box$3$1" +
                          $ +
                          "$2$3$1" +
                          N +
                          "$2box$3"
                      ) + e
                    );
                }
                break;
              case 5936:
                switch (l(e, t + 11)) {
                  case 114:
                    return $ + e + N + c(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
                  case 108:
                    return $ + e + N + c(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
                  case 45:
                    return $ + e + N + c(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
                }
                return $ + e + N + e + e;
            }
            return e;
          }
          var ne = [
              function (e, t, n, r) {
                if (e.length > -1 && !e.return)
                  switch (e.type) {
                    case D:
                      e.return = te(e.value, e.length);
                      break;
                    case V:
                      return B([S(e, { value: c(e.value, "@", "@" + $) })], r);
                    case W:
                      if (e.length)
                        return (function (e, t) {
                          return e.map(t).join("");
                        })(e.props, function (t) {
                          switch (
                            (function (e, t) {
                              return (e = /(::plac\w+|:read-\w+)/.exec(e))
                                ? e[0]
                                : e;
                            })(t)
                          ) {
                            case ":read-only":
                            case ":read-write":
                              return B(
                                [
                                  S(e, {
                                    props: [c(t, /:(read-\w+)/, ":-moz-$1")],
                                  }),
                                ],
                                r
                              );
                            case "::placeholder":
                              return B(
                                [
                                  S(e, {
                                    props: [
                                      c(t, /:(plac\w+)/, ":" + $ + "input-$1"),
                                    ],
                                  }),
                                  S(e, {
                                    props: [c(t, /:(plac\w+)/, ":-moz-$1")],
                                  }),
                                  S(e, {
                                    props: [c(t, /:(plac\w+)/, N + "input-$1")],
                                  }),
                                ],
                                r
                              );
                          }
                          return "";
                        });
                  }
              },
            ],
            re = function (e) {
              var t = e.key;
              if ("css" === t) {
                var n = document.querySelectorAll(
                  "style[data-emotion]:not([data-s])"
                );
                Array.prototype.forEach.call(n, function (e) {
                  -1 !== e.getAttribute("data-emotion").indexOf(" ") &&
                    (document.head.appendChild(e),
                    e.setAttribute("data-s", ""));
                });
              }
              var i,
                o,
                a = e.stylisPlugins || ne,
                s = {},
                c = [];
              (i = e.container || document.head),
                Array.prototype.forEach.call(
                  document.querySelectorAll(
                    'style[data-emotion^="' + t + ' "]'
                  ),
                  function (e) {
                    for (
                      var t = e.getAttribute("data-emotion").split(" "), n = 1;
                      n < t.length;
                      n++
                    )
                      s[t[n]] = !0;
                    c.push(e);
                  }
                );
              var u,
                l,
                d,
                f,
                p = [
                  J,
                  ((f = function (e) {
                    u.insert(e);
                  }),
                  function (e) {
                    e.root || ((e = e.return) && f(e));
                  }),
                ],
                m =
                  ((l = [Q, ee].concat(a, p)),
                  (d = h(l)),
                  function (e, t, n, r) {
                    for (var i = "", o = 0; o < d; o++)
                      i += l[o](e, t, n, r) || "";
                    return i;
                  });
              o = function (e, t, n, r) {
                (u = n),
                  B(q(e ? e + "{" + t.styles + "}" : t.styles), m),
                  r && (g.inserted[t.name] = !0);
              };
              var g = {
                key: t,
                sheet: new r({
                  key: t,
                  container: i,
                  nonce: e.nonce,
                  speedy: e.speedy,
                  prepend: e.prepend,
                  insertionPoint: e.insertionPoint,
                }),
                nonce: e.nonce,
                inserted: s,
                registered: {},
                insert: o,
              };
              return g.sheet.hydrate(c), g;
            };
        },
        5993: function (e, t, n) {
          "use strict";
          n.d(t, {
            C: function () {
              return f;
            },
            E: function () {
              return w;
            },
            a: function () {
              return g;
            },
            c: function () {
              return v;
            },
            h: function () {
              return l;
            },
          });
          var r = n(2784),
            i = n(9721);
          function o() {
            return (
              (o = Object.assign
                ? Object.assign.bind()
                : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) &&
                          (e[r] = n[r]);
                    }
                    return e;
                  }),
              o.apply(this, arguments)
            );
          }
          var a = function (e) {
              var t = new WeakMap();
              return function (n) {
                if (t.has(n)) return t.get(n);
                var r = e(n);
                return t.set(n, r), r;
              };
            },
            s = function (e, t, n) {
              var r = e.key + "-" + t.name;
              !1 === n &&
                void 0 === e.registered[r] &&
                (e.registered[r] = t.styles);
            },
            c = n(9034),
            u = n(2668),
            l = {}.hasOwnProperty,
            d = r.createContext(
              "undefined" != typeof HTMLElement
                ? (0, i.Z)({ key: "css" })
                : null
            ),
            f = d.Provider,
            h = function (e) {
              return (0, r.forwardRef)(function (t, n) {
                var i = (0, r.useContext)(d);
                return e(t, i, n);
              });
            },
            p = r.createContext({}),
            m = a(function (e) {
              return a(function (t) {
                return (function (e, t) {
                  return "function" == typeof t ? t(e) : o({}, e, t);
                })(e, t);
              });
            }),
            g = function (e) {
              var t = r.useContext(p);
              return (
                e.theme !== t && (t = m(t)(e.theme)),
                r.createElement(p.Provider, { value: t }, e.children)
              );
            },
            y = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
            v = function (e, t) {
              var n = {};
              for (var r in t) l.call(t, r) && (n[r] = t[r]);
              return (n[y] = e), n;
            },
            b = function (e) {
              var t = e.cache,
                n = e.serialized,
                r = e.isStringTag;
              return (
                s(t, n, r),
                (0, u.L)(function () {
                  return (function (e, t, n) {
                    s(e, t, n);
                    var r = e.key + "-" + t.name;
                    if (void 0 === e.inserted[t.name]) {
                      var i = t;
                      do {
                        e.insert(t === i ? "." + r : "", i, e.sheet, !0),
                          (i = i.next);
                      } while (void 0 !== i);
                    }
                  })(t, n, r);
                }),
                null
              );
            },
            w = h(function (e, t, n) {
              var i = e.css;
              "string" == typeof i &&
                void 0 !== t.registered[i] &&
                (i = t.registered[i]);
              var o = e[y],
                a = [i],
                s = "";
              "string" == typeof e.className
                ? (s = (function (e, t, n) {
                    var r = "";
                    return (
                      n.split(" ").forEach(function (n) {
                        void 0 !== e[n] ? t.push(e[n] + ";") : (r += n + " ");
                      }),
                      r
                    );
                  })(t.registered, a, e.className))
                : null != e.className && (s = e.className + " ");
              var u = (0, c.O)(a, void 0, r.useContext(p));
              s += t.key + "-" + u.name;
              var d = {};
              for (var f in e)
                l.call(e, f) && "css" !== f && f !== y && (d[f] = e[f]);
              return (
                (d.ref = n),
                (d.className = s),
                r.createElement(
                  r.Fragment,
                  null,
                  r.createElement(b, {
                    cache: t,
                    serialized: u,
                    isStringTag: "string" == typeof o,
                  }),
                  r.createElement(o, d)
                )
              );
            });
        },
        2903: function (e, t, n) {
          "use strict";
          n.d(t, {
            BX: function () {
              return s;
            },
            HY: function () {
              return o;
            },
            tZ: function () {
              return a;
            },
          });
          var r = n(2322),
            i = n(5993),
            o = (n(2784), n(9721), n(3463), n(9034), n(2668), r.Fragment);
          function a(e, t, n) {
            return i.h.call(t, "css")
              ? r.jsx(i.E, (0, i.c)(e, t), n)
              : r.jsx(e, t, n);
          }
          function s(e, t, n) {
            return i.h.call(t, "css")
              ? r.jsxs(i.E, (0, i.c)(e, t), n)
              : r.jsxs(e, t, n);
          }
        },
        9034: function (e, t, n) {
          "use strict";
          n.d(t, {
            O: function () {
              return p;
            },
          });
          var r = {
            animationIterationCount: 1,
            aspectRatio: 1,
            borderImageOutset: 1,
            borderImageSlice: 1,
            borderImageWidth: 1,
            boxFlex: 1,
            boxFlexGroup: 1,
            boxOrdinalGroup: 1,
            columnCount: 1,
            columns: 1,
            flex: 1,
            flexGrow: 1,
            flexPositive: 1,
            flexShrink: 1,
            flexNegative: 1,
            flexOrder: 1,
            gridRow: 1,
            gridRowEnd: 1,
            gridRowSpan: 1,
            gridRowStart: 1,
            gridColumn: 1,
            gridColumnEnd: 1,
            gridColumnSpan: 1,
            gridColumnStart: 1,
            msGridRow: 1,
            msGridRowSpan: 1,
            msGridColumn: 1,
            msGridColumnSpan: 1,
            fontWeight: 1,
            lineHeight: 1,
            opacity: 1,
            order: 1,
            orphans: 1,
            tabSize: 1,
            widows: 1,
            zIndex: 1,
            zoom: 1,
            WebkitLineClamp: 1,
            fillOpacity: 1,
            floodOpacity: 1,
            stopOpacity: 1,
            strokeDasharray: 1,
            strokeDashoffset: 1,
            strokeMiterlimit: 1,
            strokeOpacity: 1,
            strokeWidth: 1,
          };
          function i(e) {
            var t = Object.create(null);
            return function (n) {
              return void 0 === t[n] && (t[n] = e(n)), t[n];
            };
          }
          var o = /[A-Z]|^ms/g,
            a = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
            s = function (e) {
              return 45 === e.charCodeAt(1);
            },
            c = function (e) {
              return null != e && "boolean" != typeof e;
            },
            u = i(function (e) {
              return s(e) ? e : e.replace(o, "-$&").toLowerCase();
            }),
            l = function (e, t) {
              switch (e) {
                case "animation":
                case "animationName":
                  if ("string" == typeof t)
                    return t.replace(a, function (e, t, n) {
                      return (f = { name: t, styles: n, next: f }), t;
                    });
              }
              return 1 === r[e] || s(e) || "number" != typeof t || 0 === t
                ? t
                : t + "px";
            };
          function d(e, t, n) {
            if (null == n) return "";
            if (void 0 !== n.__emotion_styles) return n;
            switch (typeof n) {
              case "boolean":
                return "";
              case "object":
                if (1 === n.anim)
                  return (
                    (f = { name: n.name, styles: n.styles, next: f }), n.name
                  );
                if (void 0 !== n.styles) {
                  var r = n.next;
                  if (void 0 !== r)
                    for (; void 0 !== r; )
                      (f = { name: r.name, styles: r.styles, next: f }),
                        (r = r.next);
                  return n.styles + ";";
                }
                return (function (e, t, n) {
                  var r = "";
                  if (Array.isArray(n))
                    for (var i = 0; i < n.length; i++) r += d(e, t, n[i]) + ";";
                  else
                    for (var o in n) {
                      var a = n[o];
                      if ("object" != typeof a)
                        null != t && void 0 !== t[a]
                          ? (r += o + "{" + t[a] + "}")
                          : c(a) && (r += u(o) + ":" + l(o, a) + ";");
                      else if (
                        !Array.isArray(a) ||
                        "string" != typeof a[0] ||
                        (null != t && void 0 !== t[a[0]])
                      ) {
                        var s = d(e, t, a);
                        switch (o) {
                          case "animation":
                          case "animationName":
                            r += u(o) + ":" + s + ";";
                            break;
                          default:
                            r += o + "{" + s + "}";
                        }
                      } else
                        for (var f = 0; f < a.length; f++)
                          c(a[f]) && (r += u(o) + ":" + l(o, a[f]) + ";");
                    }
                  return r;
                })(e, t, n);
              case "function":
                if (void 0 !== e) {
                  var i = f,
                    o = n(e);
                  return (f = i), d(e, t, o);
                }
            }
            if (null == t) return n;
            var a = t[n];
            return void 0 !== a ? a : n;
          }
          var f,
            h = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
            p = function (e, t, n) {
              if (
                1 === e.length &&
                "object" == typeof e[0] &&
                null !== e[0] &&
                void 0 !== e[0].styles
              )
                return e[0];
              var r = !0,
                i = "";
              f = void 0;
              var o = e[0];
              null == o || void 0 === o.raw
                ? ((r = !1), (i += d(n, t, o)))
                : (i += o[0]);
              for (var a = 1; a < e.length; a++)
                (i += d(n, t, e[a])), r && (i += o[a]);
              h.lastIndex = 0;
              for (var s, c = ""; null !== (s = h.exec(i)); ) c += "-" + s[1];
              var u =
                (function (e) {
                  for (var t, n = 0, r = 0, i = e.length; i >= 4; ++r, i -= 4)
                    (t =
                      1540483477 *
                        (65535 &
                          (t =
                            (255 & e.charCodeAt(r)) |
                            ((255 & e.charCodeAt(++r)) << 8) |
                            ((255 & e.charCodeAt(++r)) << 16) |
                            ((255 & e.charCodeAt(++r)) << 24))) +
                      ((59797 * (t >>> 16)) << 16)),
                      (n =
                        (1540483477 * (65535 & (t ^= t >>> 24)) +
                          ((59797 * (t >>> 16)) << 16)) ^
                        (1540483477 * (65535 & n) +
                          ((59797 * (n >>> 16)) << 16)));
                  switch (i) {
                    case 3:
                      n ^= (255 & e.charCodeAt(r + 2)) << 16;
                    case 2:
                      n ^= (255 & e.charCodeAt(r + 1)) << 8;
                    case 1:
                      n =
                        1540483477 * (65535 & (n ^= 255 & e.charCodeAt(r))) +
                        ((59797 * (n >>> 16)) << 16);
                  }
                  return (
                    ((n =
                      1540483477 * (65535 & (n ^= n >>> 13)) +
                      ((59797 * (n >>> 16)) << 16)) ^
                      (n >>> 15)) >>>
                    0
                  ).toString(36);
                })(i) + c;
              return { name: u, styles: i, next: f };
            };
        },
        2668: function (e, t, n) {
          "use strict";
          var r;
          n.d(t, {
            L: function () {
              return a;
            },
          });
          var i = n(2784),
            o =
              !!(r || (r = n.t(i, 2))).useInsertionEffect &&
              (r || (r = n.t(i, 2))).useInsertionEffect,
            a =
              o ||
              function (e) {
                return e();
              };
          o || i.useLayoutEffect;
        },
        1096: function (e, t, n) {
          "use strict";
          var r =
              (this && this.__awaiter) ||
              function (e, t, n, r) {
                return new (n || (n = Promise))(function (i, o) {
                  function a(e) {
                    try {
                      c(r.next(e));
                    } catch (e) {
                      o(e);
                    }
                  }
                  function s(e) {
                    try {
                      c(r.throw(e));
                    } catch (e) {
                      o(e);
                    }
                  }
                  function c(e) {
                    e.done
                      ? i(e.value)
                      : new n(function (t) {
                          t(e.value);
                        }).then(a, s);
                  }
                  c((r = r.apply(e, t || [])).next());
                });
              },
            i =
              (this && this.__generator) ||
              function (e, t) {
                var n,
                  r,
                  i,
                  o,
                  a = {
                    label: 0,
                    sent: function () {
                      if (1 & i[0]) throw i[1];
                      return i[1];
                    },
                    trys: [],
                    ops: [],
                  };
                return (
                  (o = { next: s(0), throw: s(1), return: s(2) }),
                  "function" == typeof Symbol &&
                    (o[Symbol.iterator] = function () {
                      return this;
                    }),
                  o
                );
                function s(o) {
                  return function (s) {
                    return (function (o) {
                      if (n)
                        throw new TypeError("Generator is already executing.");
                      for (; a; )
                        try {
                          if (
                            ((n = 1),
                            r &&
                              (i =
                                2 & o[0]
                                  ? r.return
                                  : o[0]
                                  ? r.throw || ((i = r.return) && i.call(r), 0)
                                  : r.next) &&
                              !(i = i.call(r, o[1])).done)
                          )
                            return i;
                          switch (
                            ((r = 0), i && (o = [2 & o[0], i.value]), o[0])
                          ) {
                            case 0:
                            case 1:
                              i = o;
                              break;
                            case 4:
                              return a.label++, { value: o[1], done: !1 };
                            case 5:
                              a.label++, (r = o[1]), (o = [0]);
                              continue;
                            case 7:
                              (o = a.ops.pop()), a.trys.pop();
                              continue;
                            default:
                              if (
                                !(
                                  (i =
                                    (i = a.trys).length > 0 &&
                                    i[i.length - 1]) ||
                                  (6 !== o[0] && 2 !== o[0])
                                )
                              ) {
                                a = 0;
                                continue;
                              }
                              if (
                                3 === o[0] &&
                                (!i || (o[1] > i[0] && o[1] < i[3]))
                              ) {
                                a.label = o[1];
                                break;
                              }
                              if (6 === o[0] && a.label < i[1]) {
                                (a.label = i[1]), (i = o);
                                break;
                              }
                              if (i && a.label < i[2]) {
                                (a.label = i[2]), a.ops.push(o);
                                break;
                              }
                              i[2] && a.ops.pop(), a.trys.pop();
                              continue;
                          }
                          o = t.call(e, a);
                        } catch (e) {
                          (o = [6, e]), (r = 0);
                        } finally {
                          n = i = 0;
                        }
                      if (5 & o[0]) throw o[1];
                      return { value: o[0] ? o[1] : void 0, done: !0 };
                    })([o, s]);
                  };
                }
              };
          Object.defineProperty(t, "__esModule", { value: !0 });
          var o = n(3565),
            a = "browser-tabs-lock-key";
          function s(e) {
            return new Promise(function (t) {
              return setTimeout(t, e);
            });
          }
          function c(e) {
            for (var t = "", n = 0; n < e; n++)
              t +=
                "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz"[
                  Math.floor(61 * Math.random())
                ];
            return t;
          }
          var u = (function () {
            function e() {
              (this.acquiredIatSet = new Set()),
                (this.id = Date.now().toString() + c(15)),
                (this.acquireLock = this.acquireLock.bind(this)),
                (this.releaseLock = this.releaseLock.bind(this)),
                (this.releaseLock__private__ =
                  this.releaseLock__private__.bind(this)),
                (this.waitForSomethingToChange =
                  this.waitForSomethingToChange.bind(this)),
                (this.refreshLockWhileAcquired =
                  this.refreshLockWhileAcquired.bind(this)),
                void 0 === e.waiters && (e.waiters = []);
            }
            return (
              (e.prototype.acquireLock = function (t, n) {
                return (
                  void 0 === n && (n = 5e3),
                  r(this, void 0, void 0, function () {
                    var r, o, u, l, d, f;
                    return i(this, function (i) {
                      switch (i.label) {
                        case 0:
                          (r = Date.now() + c(4)),
                            (o = Date.now() + n),
                            (u = a + "-" + t),
                            (l = window.localStorage),
                            (i.label = 1);
                        case 1:
                          return Date.now() < o ? [4, s(30)] : [3, 8];
                        case 2:
                          return (
                            i.sent(),
                            null !== l.getItem(u)
                              ? [3, 5]
                              : ((d = this.id + "-" + t + "-" + r),
                                [4, s(Math.floor(25 * Math.random()))])
                          );
                        case 3:
                          return (
                            i.sent(),
                            l.setItem(
                              u,
                              JSON.stringify({
                                id: this.id,
                                iat: r,
                                timeoutKey: d,
                                timeAcquired: Date.now(),
                                timeRefreshed: Date.now(),
                              })
                            ),
                            [4, s(30)]
                          );
                        case 4:
                          return (
                            i.sent(),
                            null !== (f = l.getItem(u)) &&
                            (f = JSON.parse(f)).id === this.id &&
                            f.iat === r
                              ? (this.acquiredIatSet.add(r),
                                this.refreshLockWhileAcquired(u, r),
                                [2, !0])
                              : [3, 7]
                          );
                        case 5:
                          return (
                            e.lockCorrector(),
                            [4, this.waitForSomethingToChange(o)]
                          );
                        case 6:
                          i.sent(), (i.label = 7);
                        case 7:
                          return (r = Date.now() + c(4)), [3, 1];
                        case 8:
                          return [2, !1];
                      }
                    });
                  })
                );
              }),
              (e.prototype.refreshLockWhileAcquired = function (e, t) {
                return r(this, void 0, void 0, function () {
                  var n = this;
                  return i(this, function (a) {
                    return (
                      setTimeout(function () {
                        return r(n, void 0, void 0, function () {
                          var n, r;
                          return i(this, function (i) {
                            switch (i.label) {
                              case 0:
                                return [4, o.default().lock(t)];
                              case 1:
                                return (
                                  i.sent(),
                                  this.acquiredIatSet.has(t)
                                    ? ((n = window.localStorage),
                                      null === (r = n.getItem(e))
                                        ? (o.default().unlock(t), [2])
                                        : (((r = JSON.parse(r)).timeRefreshed =
                                            Date.now()),
                                          n.setItem(e, JSON.stringify(r)),
                                          o.default().unlock(t),
                                          this.refreshLockWhileAcquired(e, t),
                                          [2]))
                                    : (o.default().unlock(t), [2])
                                );
                            }
                          });
                        });
                      }, 1e3),
                      [2]
                    );
                  });
                });
              }),
              (e.prototype.waitForSomethingToChange = function (t) {
                return r(this, void 0, void 0, function () {
                  return i(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [
                          4,
                          new Promise(function (n) {
                            var r = !1,
                              i = Date.now(),
                              o = !1;
                            function a() {
                              if (
                                (o ||
                                  (window.removeEventListener("storage", a),
                                  e.removeFromWaiting(a),
                                  clearTimeout(s),
                                  (o = !0)),
                                !r)
                              ) {
                                r = !0;
                                var t = 50 - (Date.now() - i);
                                t > 0 ? setTimeout(n, t) : n();
                              }
                            }
                            window.addEventListener("storage", a),
                              e.addToWaiting(a);
                            var s = setTimeout(a, Math.max(0, t - Date.now()));
                          }),
                        ];
                      case 1:
                        return n.sent(), [2];
                    }
                  });
                });
              }),
              (e.addToWaiting = function (t) {
                this.removeFromWaiting(t),
                  void 0 !== e.waiters && e.waiters.push(t);
              }),
              (e.removeFromWaiting = function (t) {
                void 0 !== e.waiters &&
                  (e.waiters = e.waiters.filter(function (e) {
                    return e !== t;
                  }));
              }),
              (e.notifyWaiters = function () {
                void 0 !== e.waiters &&
                  e.waiters.slice().forEach(function (e) {
                    return e();
                  });
              }),
              (e.prototype.releaseLock = function (e) {
                return r(this, void 0, void 0, function () {
                  return i(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [4, this.releaseLock__private__(e)];
                      case 1:
                        return [2, t.sent()];
                    }
                  });
                });
              }),
              (e.prototype.releaseLock__private__ = function (t) {
                return r(this, void 0, void 0, function () {
                  var n, r, s;
                  return i(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return (
                          (n = window.localStorage),
                          (r = a + "-" + t),
                          null === (s = n.getItem(r))
                            ? [2]
                            : (s = JSON.parse(s)).id !== this.id
                            ? [3, 2]
                            : [4, o.default().lock(s.iat)]
                        );
                      case 1:
                        i.sent(),
                          this.acquiredIatSet.delete(s.iat),
                          n.removeItem(r),
                          o.default().unlock(s.iat),
                          e.notifyWaiters(),
                          (i.label = 2);
                      case 2:
                        return [2];
                    }
                  });
                });
              }),
              (e.lockCorrector = function () {
                for (
                  var t = Date.now() - 5e3,
                    n = window.localStorage,
                    r = Object.keys(n),
                    i = !1,
                    o = 0;
                  o < r.length;
                  o++
                ) {
                  var s = r[o];
                  if (s.includes(a)) {
                    var c = n.getItem(s);
                    null !== c &&
                      ((void 0 === (c = JSON.parse(c)).timeRefreshed &&
                        c.timeAcquired < t) ||
                        (void 0 !== c.timeRefreshed && c.timeRefreshed < t)) &&
                      (n.removeItem(s), (i = !0));
                  }
                }
                i && e.notifyWaiters();
              }),
              (e.waiters = void 0),
              e
            );
          })();
          t.default = u;
        },
        3565: function (e, t) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var n = (function () {
            function e() {
              var e = this;
              (this.locked = new Map()),
                (this.addToLocked = function (t, n) {
                  var r = e.locked.get(t);
                  void 0 === r
                    ? void 0 === n
                      ? e.locked.set(t, [])
                      : e.locked.set(t, [n])
                    : void 0 !== n && (r.unshift(n), e.locked.set(t, r));
                }),
                (this.isLocked = function (t) {
                  return e.locked.has(t);
                }),
                (this.lock = function (t) {
                  return new Promise(function (n, r) {
                    e.isLocked(t)
                      ? e.addToLocked(t, n)
                      : (e.addToLocked(t), n());
                  });
                }),
                (this.unlock = function (t) {
                  var n = e.locked.get(t);
                  if (void 0 !== n && 0 !== n.length) {
                    var r = n.pop();
                    e.locked.set(t, n), void 0 !== r && setTimeout(r, 0);
                  } else e.locked.delete(t);
                });
            }
            return (
              (e.getInstance = function () {
                return (
                  void 0 === e.instance && (e.instance = new e()), e.instance
                );
              }),
              e
            );
          })();
          t.default = function () {
            return n.getInstance();
          };
        },
        2680: function (e, t, n) {
          "use strict";
          var r = n(7286),
            i = n(9429),
            o = i(r("String.prototype.indexOf"));
          e.exports = function (e, t) {
            var n = r(e, !!t);
            return "function" == typeof n && o(e, ".prototype.") > -1
              ? i(n)
              : n;
          };
        },
        9429: function (e, t, n) {
          "use strict";
          var r = n(4090),
            i = n(7286),
            o = i("%Function.prototype.apply%"),
            a = i("%Function.prototype.call%"),
            s = i("%Reflect.apply%", !0) || r.call(a, o),
            c = i("%Object.getOwnPropertyDescriptor%", !0),
            u = i("%Object.defineProperty%", !0),
            l = i("%Math.max%");
          if (u)
            try {
              u({}, "a", { value: 1 });
            } catch (e) {
              u = null;
            }
          e.exports = function (e) {
            var t = s(r, a, arguments);
            return (
              c &&
                u &&
                c(t, "length").configurable &&
                u(t, "length", {
                  value: 1 + l(0, e.length - (arguments.length - 1)),
                }),
              t
            );
          };
          var d = function () {
            return s(r, o, arguments);
          };
          u ? u(e.exports, "apply", { value: d }) : (e.exports.apply = d);
        },
        7795: function (e) {
          "use strict";
          var t = Array.prototype.slice,
            n = Object.prototype.toString;
          e.exports = function (e) {
            var r = this;
            if ("function" != typeof r || "[object Function]" !== n.call(r))
              throw new TypeError(
                "Function.prototype.bind called on incompatible " + r
              );
            for (
              var i,
                o = t.call(arguments, 1),
                a = Math.max(0, r.length - o.length),
                s = [],
                c = 0;
              c < a;
              c++
            )
              s.push("$" + c);
            if (
              ((i = Function(
                "binder",
                "return function (" +
                  s.join(",") +
                  "){ return binder.apply(this,arguments); }"
              )(function () {
                if (this instanceof i) {
                  var n = r.apply(this, o.concat(t.call(arguments)));
                  return Object(n) === n ? n : this;
                }
                return r.apply(e, o.concat(t.call(arguments)));
              })),
              r.prototype)
            ) {
              var u = function () {};
              (u.prototype = r.prototype),
                (i.prototype = new u()),
                (u.prototype = null);
            }
            return i;
          };
        },
        4090: function (e, t, n) {
          "use strict";
          var r = n(7795);
          e.exports = Function.prototype.bind || r;
        },
        7286: function (e, t, n) {
          "use strict";
          var r,
            i = SyntaxError,
            o = Function,
            a = TypeError,
            s = function (e) {
              try {
                return o('"use strict"; return (' + e + ").constructor;")();
              } catch (e) {}
            },
            c = Object.getOwnPropertyDescriptor;
          if (c)
            try {
              c({}, "");
            } catch (e) {
              c = null;
            }
          var u = function () {
              throw new a();
            },
            l = c
              ? (function () {
                  try {
                    return u;
                  } catch (e) {
                    try {
                      return c(arguments, "callee").get;
                    } catch (e) {
                      return u;
                    }
                  }
                })()
              : u,
            d = n(2636)(),
            f = n(8486)(),
            h =
              Object.getPrototypeOf ||
              (f
                ? function (e) {
                    return e.__proto__;
                  }
                : null),
            p = {},
            m = "undefined" != typeof Uint8Array && h ? h(Uint8Array) : r,
            g = {
              "%AggregateError%":
                "undefined" == typeof AggregateError ? r : AggregateError,
              "%Array%": Array,
              "%ArrayBuffer%":
                "undefined" == typeof ArrayBuffer ? r : ArrayBuffer,
              "%ArrayIteratorPrototype%": d && h ? h([][Symbol.iterator]()) : r,
              "%AsyncFromSyncIteratorPrototype%": r,
              "%AsyncFunction%": p,
              "%AsyncGenerator%": p,
              "%AsyncGeneratorFunction%": p,
              "%AsyncIteratorPrototype%": p,
              "%Atomics%": "undefined" == typeof Atomics ? r : Atomics,
              "%BigInt%": "undefined" == typeof BigInt ? r : BigInt,
              "%BigInt64Array%":
                "undefined" == typeof BigInt64Array ? r : BigInt64Array,
              "%BigUint64Array%":
                "undefined" == typeof BigUint64Array ? r : BigUint64Array,
              "%Boolean%": Boolean,
              "%DataView%": "undefined" == typeof DataView ? r : DataView,
              "%Date%": Date,
              "%decodeURI%": decodeURI,
              "%decodeURIComponent%": decodeURIComponent,
              "%encodeURI%": encodeURI,
              "%encodeURIComponent%": encodeURIComponent,
              "%Error%": Error,
              "%eval%": eval,
              "%EvalError%": EvalError,
              "%Float32Array%":
                "undefined" == typeof Float32Array ? r : Float32Array,
              "%Float64Array%":
                "undefined" == typeof Float64Array ? r : Float64Array,
              "%FinalizationRegistry%":
                "undefined" == typeof FinalizationRegistry
                  ? r
                  : FinalizationRegistry,
              "%Function%": o,
              "%GeneratorFunction%": p,
              "%Int8Array%": "undefined" == typeof Int8Array ? r : Int8Array,
              "%Int16Array%": "undefined" == typeof Int16Array ? r : Int16Array,
              "%Int32Array%": "undefined" == typeof Int32Array ? r : Int32Array,
              "%isFinite%": isFinite,
              "%isNaN%": isNaN,
              "%IteratorPrototype%": d && h ? h(h([][Symbol.iterator]())) : r,
              "%JSON%": "object" == typeof JSON ? JSON : r,
              "%Map%": "undefined" == typeof Map ? r : Map,
              "%MapIteratorPrototype%":
                "undefined" != typeof Map && d && h
                  ? h(new Map()[Symbol.iterator]())
                  : r,
              "%Math%": Math,
              "%Number%": Number,
              "%Object%": Object,
              "%parseFloat%": parseFloat,
              "%parseInt%": parseInt,
              "%Promise%": "undefined" == typeof Promise ? r : Promise,
              "%Proxy%": "undefined" == typeof Proxy ? r : Proxy,
              "%RangeError%": RangeError,
              "%ReferenceError%": ReferenceError,
              "%Reflect%": "undefined" == typeof Reflect ? r : Reflect,
              "%RegExp%": RegExp,
              "%Set%": "undefined" == typeof Set ? r : Set,
              "%SetIteratorPrototype%":
                "undefined" != typeof Set && d && h
                  ? h(new Set()[Symbol.iterator]())
                  : r,
              "%SharedArrayBuffer%":
                "undefined" == typeof SharedArrayBuffer ? r : SharedArrayBuffer,
              "%String%": String,
              "%StringIteratorPrototype%":
                d && h ? h(""[Symbol.iterator]()) : r,
              "%Symbol%": d ? Symbol : r,
              "%SyntaxError%": i,
              "%ThrowTypeError%": l,
              "%TypedArray%": m,
              "%TypeError%": a,
              "%Uint8Array%": "undefined" == typeof Uint8Array ? r : Uint8Array,
              "%Uint8ClampedArray%":
                "undefined" == typeof Uint8ClampedArray ? r : Uint8ClampedArray,
              "%Uint16Array%":
                "undefined" == typeof Uint16Array ? r : Uint16Array,
              "%Uint32Array%":
                "undefined" == typeof Uint32Array ? r : Uint32Array,
              "%URIError%": URIError,
              "%WeakMap%": "undefined" == typeof WeakMap ? r : WeakMap,
              "%WeakRef%": "undefined" == typeof WeakRef ? r : WeakRef,
              "%WeakSet%": "undefined" == typeof WeakSet ? r : WeakSet,
            };
          if (h)
            try {
              null.error;
            } catch (e) {
              var y = h(h(e));
              g["%Error.prototype%"] = y;
            }
          var v = function e(t) {
              var n;
              if ("%AsyncFunction%" === t) n = s("async function () {}");
              else if ("%GeneratorFunction%" === t) n = s("function* () {}");
              else if ("%AsyncGeneratorFunction%" === t)
                n = s("async function* () {}");
              else if ("%AsyncGenerator%" === t) {
                var r = e("%AsyncGeneratorFunction%");
                r && (n = r.prototype);
              } else if ("%AsyncIteratorPrototype%" === t) {
                var i = e("%AsyncGenerator%");
                i && h && (n = h(i.prototype));
              }
              return (g[t] = n), n;
            },
            b = {
              "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
              "%ArrayPrototype%": ["Array", "prototype"],
              "%ArrayProto_entries%": ["Array", "prototype", "entries"],
              "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
              "%ArrayProto_keys%": ["Array", "prototype", "keys"],
              "%ArrayProto_values%": ["Array", "prototype", "values"],
              "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
              "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
              "%AsyncGeneratorPrototype%": [
                "AsyncGeneratorFunction",
                "prototype",
                "prototype",
              ],
              "%BooleanPrototype%": ["Boolean", "prototype"],
              "%DataViewPrototype%": ["DataView", "prototype"],
              "%DatePrototype%": ["Date", "prototype"],
              "%ErrorPrototype%": ["Error", "prototype"],
              "%EvalErrorPrototype%": ["EvalError", "prototype"],
              "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
              "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
              "%FunctionPrototype%": ["Function", "prototype"],
              "%Generator%": ["GeneratorFunction", "prototype"],
              "%GeneratorPrototype%": [
                "GeneratorFunction",
                "prototype",
                "prototype",
              ],
              "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
              "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
              "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
              "%JSONParse%": ["JSON", "parse"],
              "%JSONStringify%": ["JSON", "stringify"],
              "%MapPrototype%": ["Map", "prototype"],
              "%NumberPrototype%": ["Number", "prototype"],
              "%ObjectPrototype%": ["Object", "prototype"],
              "%ObjProto_toString%": ["Object", "prototype", "toString"],
              "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
              "%PromisePrototype%": ["Promise", "prototype"],
              "%PromiseProto_then%": ["Promise", "prototype", "then"],
              "%Promise_all%": ["Promise", "all"],
              "%Promise_reject%": ["Promise", "reject"],
              "%Promise_resolve%": ["Promise", "resolve"],
              "%RangeErrorPrototype%": ["RangeError", "prototype"],
              "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
              "%RegExpPrototype%": ["RegExp", "prototype"],
              "%SetPrototype%": ["Set", "prototype"],
              "%SharedArrayBufferPrototype%": [
                "SharedArrayBuffer",
                "prototype",
              ],
              "%StringPrototype%": ["String", "prototype"],
              "%SymbolPrototype%": ["Symbol", "prototype"],
              "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
              "%TypedArrayPrototype%": ["TypedArray", "prototype"],
              "%TypeErrorPrototype%": ["TypeError", "prototype"],
              "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
              "%Uint8ClampedArrayPrototype%": [
                "Uint8ClampedArray",
                "prototype",
              ],
              "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
              "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
              "%URIErrorPrototype%": ["URIError", "prototype"],
              "%WeakMapPrototype%": ["WeakMap", "prototype"],
              "%WeakSetPrototype%": ["WeakSet", "prototype"],
            },
            w = n(4090),
            _ = n(3198),
            S = w.call(Function.call, Array.prototype.concat),
            k = w.call(Function.apply, Array.prototype.splice),
            P = w.call(Function.call, String.prototype.replace),
            O = w.call(Function.call, String.prototype.slice),
            U = w.call(Function.call, RegExp.prototype.exec),
            x =
              /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
            A = /\\(\\)?/g,
            E = function (e, t) {
              var n,
                r = e;
              if ((_(b, r) && (r = "%" + (n = b[r])[0] + "%"), _(g, r))) {
                var o = g[r];
                if ((o === p && (o = v(r)), void 0 === o && !t))
                  throw new a(
                    "intrinsic " +
                      e +
                      " exists, but is not available. Please file an issue!"
                  );
                return { alias: n, name: r, value: o };
              }
              throw new i("intrinsic " + e + " does not exist!");
            };
          e.exports = function (e, t) {
            if ("string" != typeof e || 0 === e.length)
              throw new a("intrinsic name must be a non-empty string");
            if (arguments.length > 1 && "boolean" != typeof t)
              throw new a('"allowMissing" argument must be a boolean');
            if (null === U(/^%?[^%]*%?$/, e))
              throw new i(
                "`%` may not be present anywhere but at the beginning and end of the intrinsic name"
              );
            var n = (function (e) {
                var t = O(e, 0, 1),
                  n = O(e, -1);
                if ("%" === t && "%" !== n)
                  throw new i("invalid intrinsic syntax, expected closing `%`");
                if ("%" === n && "%" !== t)
                  throw new i("invalid intrinsic syntax, expected opening `%`");
                var r = [];
                return (
                  P(e, x, function (e, t, n, i) {
                    r[r.length] = n ? P(i, A, "$1") : t || e;
                  }),
                  r
                );
              })(e),
              r = n.length > 0 ? n[0] : "",
              o = E("%" + r + "%", t),
              s = o.name,
              u = o.value,
              l = !1,
              d = o.alias;
            d && ((r = d[0]), k(n, S([0, 1], d)));
            for (var f = 1, h = !0; f < n.length; f += 1) {
              var p = n[f],
                m = O(p, 0, 1),
                y = O(p, -1);
              if (
                ('"' === m ||
                  "'" === m ||
                  "`" === m ||
                  '"' === y ||
                  "'" === y ||
                  "`" === y) &&
                m !== y
              )
                throw new i(
                  "property names with quotes must have matching quotes"
                );
              if (
                (("constructor" !== p && h) || (l = !0),
                _(g, (s = "%" + (r += "." + p) + "%")))
              )
                u = g[s];
              else if (null != u) {
                if (!(p in u)) {
                  if (!t)
                    throw new a(
                      "base intrinsic for " +
                        e +
                        " exists, but the property is not available."
                    );
                  return;
                }
                if (c && f + 1 >= n.length) {
                  var v = c(u, p);
                  u =
                    (h = !!v) && "get" in v && !("originalValue" in v.get)
                      ? v.get
                      : u[p];
                } else (h = _(u, p)), (u = u[p]);
                h && !l && (g[s] = u);
              }
            }
            return u;
          };
        },
        450: function (e) {
          e.exports = function (e, t) {
            if ("string" != typeof e) throw new TypeError("Expected a string");
            for (
              var n,
                r = String(e),
                i = "",
                o = !!t && !!t.extended,
                a = !!t && !!t.globstar,
                s = !1,
                c = t && "string" == typeof t.flags ? t.flags : "",
                u = 0,
                l = r.length;
              u < l;
              u++
            )
              switch ((n = r[u])) {
                case "/":
                case "$":
                case "^":
                case "+":
                case ".":
                case "(":
                case ")":
                case "=":
                case "!":
                case "|":
                  i += "\\" + n;
                  break;
                case "?":
                  if (o) {
                    i += ".";
                    break;
                  }
                case "[":
                case "]":
                  if (o) {
                    i += n;
                    break;
                  }
                case "{":
                  if (o) {
                    (s = !0), (i += "(");
                    break;
                  }
                case "}":
                  if (o) {
                    (s = !1), (i += ")");
                    break;
                  }
                case ",":
                  if (s) {
                    i += "|";
                    break;
                  }
                  i += "\\" + n;
                  break;
                case "*":
                  for (var d = r[u - 1], f = 1; "*" === r[u + 1]; ) f++, u++;
                  var h = r[u + 1];
                  a
                    ? !(f > 1) ||
                      ("/" !== d && void 0 !== d) ||
                      ("/" !== h && void 0 !== h)
                      ? (i += "([^/]*)")
                      : ((i += "((?:[^/]*(?:/|$))*)"), u++)
                    : (i += ".*");
                  break;
                default:
                  i += n;
              }
            return (
              (c && ~c.indexOf("g")) || (i = "^" + i + "$"), new RegExp(i, c)
            );
          };
        },
        8486: function (e) {
          "use strict";
          var t = { foo: {} },
            n = Object;
          e.exports = function () {
            return (
              { __proto__: t }.foo === t.foo &&
              !({ __proto__: null } instanceof n)
            );
          };
        },
        2636: function (e, t, n) {
          "use strict";
          var r = "undefined" != typeof Symbol && Symbol,
            i = n(6679);
          e.exports = function () {
            return (
              "function" == typeof r &&
              "function" == typeof Symbol &&
              "symbol" == typeof r("foo") &&
              "symbol" == typeof Symbol("bar") &&
              i()
            );
          };
        },
        6679: function (e) {
          "use strict";
          e.exports = function () {
            if (
              "function" != typeof Symbol ||
              "function" != typeof Object.getOwnPropertySymbols
            )
              return !1;
            if ("symbol" == typeof Symbol.iterator) return !0;
            var e = {},
              t = Symbol("test"),
              n = Object(t);
            if ("string" == typeof t) return !1;
            if ("[object Symbol]" !== Object.prototype.toString.call(t))
              return !1;
            if ("[object Symbol]" !== Object.prototype.toString.call(n))
              return !1;
            for (t in ((e[t] = 42), e)) return !1;
            if ("function" == typeof Object.keys && 0 !== Object.keys(e).length)
              return !1;
            if (
              "function" == typeof Object.getOwnPropertyNames &&
              0 !== Object.getOwnPropertyNames(e).length
            )
              return !1;
            var r = Object.getOwnPropertySymbols(e);
            if (1 !== r.length || r[0] !== t) return !1;
            if (!Object.prototype.propertyIsEnumerable.call(e, t)) return !1;
            if ("function" == typeof Object.getOwnPropertyDescriptor) {
              var i = Object.getOwnPropertyDescriptor(e, t);
              if (42 !== i.value || !0 !== i.enumerable) return !1;
            }
            return !0;
          };
        },
        3198: function (e, t, n) {
          "use strict";
          var r = n(4090);
          e.exports = r.call(Function.call, Object.prototype.hasOwnProperty);
        },
        3463: function (e, t, n) {
          "use strict";
          var r = n(8570),
            i = {
              childContextTypes: !0,
              contextType: !0,
              contextTypes: !0,
              defaultProps: !0,
              displayName: !0,
              getDefaultProps: !0,
              getDerivedStateFromError: !0,
              getDerivedStateFromProps: !0,
              mixins: !0,
              propTypes: !0,
              type: !0,
            },
            o = {
              name: !0,
              length: !0,
              prototype: !0,
              caller: !0,
              callee: !0,
              arguments: !0,
              arity: !0,
            },
            a = {
              $$typeof: !0,
              compare: !0,
              defaultProps: !0,
              displayName: !0,
              propTypes: !0,
              type: !0,
            },
            s = {};
          function c(e) {
            return r.isMemo(e) ? a : s[e.$$typeof] || i;
          }
          (s[r.ForwardRef] = {
            $$typeof: !0,
            render: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
          }),
            (s[r.Memo] = a);
          var u = Object.defineProperty,
            l = Object.getOwnPropertyNames,
            d = Object.getOwnPropertySymbols,
            f = Object.getOwnPropertyDescriptor,
            h = Object.getPrototypeOf,
            p = Object.prototype;
          e.exports = function e(t, n, r) {
            if ("string" != typeof n) {
              if (p) {
                var i = h(n);
                i && i !== p && e(t, i, r);
              }
              var a = l(n);
              d && (a = a.concat(d(n)));
              for (var s = c(t), m = c(n), g = 0; g < a.length; ++g) {
                var y = a[g];
                if (!(o[y] || (r && r[y]) || (m && m[y]) || (s && s[y]))) {
                  var v = f(n, y);
                  try {
                    u(t, y, v);
                  } catch (e) {}
                }
              }
            }
            return t;
          };
        },
        9500: function (e, t, n) {
          var r = "function" == typeof Map && Map.prototype,
            i =
              Object.getOwnPropertyDescriptor && r
                ? Object.getOwnPropertyDescriptor(Map.prototype, "size")
                : null,
            o = r && i && "function" == typeof i.get ? i.get : null,
            a = r && Map.prototype.forEach,
            s = "function" == typeof Set && Set.prototype,
            c =
              Object.getOwnPropertyDescriptor && s
                ? Object.getOwnPropertyDescriptor(Set.prototype, "size")
                : null,
            u = s && c && "function" == typeof c.get ? c.get : null,
            l = s && Set.prototype.forEach,
            d =
              "function" == typeof WeakMap && WeakMap.prototype
                ? WeakMap.prototype.has
                : null,
            f =
              "function" == typeof WeakSet && WeakSet.prototype
                ? WeakSet.prototype.has
                : null,
            h =
              "function" == typeof WeakRef && WeakRef.prototype
                ? WeakRef.prototype.deref
                : null,
            p = Boolean.prototype.valueOf,
            m = Object.prototype.toString,
            g = Function.prototype.toString,
            y = String.prototype.match,
            v = String.prototype.slice,
            b = String.prototype.replace,
            w = String.prototype.toUpperCase,
            _ = String.prototype.toLowerCase,
            S = RegExp.prototype.test,
            k = Array.prototype.concat,
            P = Array.prototype.join,
            O = Array.prototype.slice,
            U = Math.floor,
            x = "function" == typeof BigInt ? BigInt.prototype.valueOf : null,
            A = Object.getOwnPropertySymbols,
            E =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? Symbol.prototype.toString
                : null,
            C =
              "function" == typeof Symbol && "object" == typeof Symbol.iterator,
            I =
              "function" == typeof Symbol &&
              Symbol.toStringTag &&
              (Symbol.toStringTag, 1)
                ? Symbol.toStringTag
                : null,
            M = Object.prototype.propertyIsEnumerable,
            z =
              ("function" == typeof Reflect
                ? Reflect.getPrototypeOf
                : Object.getPrototypeOf) ||
              ([].__proto__ === Array.prototype
                ? function (e) {
                    return e.__proto__;
                  }
                : null);
          function T(e, t) {
            if (
              e === 1 / 0 ||
              e === -1 / 0 ||
              e != e ||
              (e && e > -1e3 && e < 1e3) ||
              S.call(/e/, t)
            )
              return t;
            var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
            if ("number" == typeof e) {
              var r = e < 0 ? -U(-e) : U(e);
              if (r !== e) {
                var i = String(r),
                  o = v.call(t, i.length + 1);
                return (
                  b.call(i, n, "$&_") +
                  "." +
                  b.call(b.call(o, /([0-9]{3})/g, "$&_"), /_$/, "")
                );
              }
            }
            return b.call(t, n, "$&_");
          }
          var R = n(3260),
            j = R.custom,
            N = D(j) ? j : null;
          function L(e, t, n) {
            var r = "double" === (n.quoteStyle || t) ? '"' : "'";
            return r + e + r;
          }
          function $(e) {
            return b.call(String(e), /"/g, "&quot;");
          }
          function F(e) {
            return !(
              "[object Array]" !== J(e) ||
              (I && "object" == typeof e && I in e)
            );
          }
          function W(e) {
            return !(
              "[object RegExp]" !== J(e) ||
              (I && "object" == typeof e && I in e)
            );
          }
          function D(e) {
            if (C) return e && "object" == typeof e && e instanceof Symbol;
            if ("symbol" == typeof e) return !0;
            if (!e || "object" != typeof e || !E) return !1;
            try {
              return E.call(e), !0;
            } catch (e) {}
            return !1;
          }
          e.exports = function e(t, n, r, i) {
            var s = n || {};
            if (
              B(s, "quoteStyle") &&
              "single" !== s.quoteStyle &&
              "double" !== s.quoteStyle
            )
              throw new TypeError(
                'option "quoteStyle" must be "single" or "double"'
              );
            if (
              B(s, "maxStringLength") &&
              ("number" == typeof s.maxStringLength
                ? s.maxStringLength < 0 && s.maxStringLength !== 1 / 0
                : null !== s.maxStringLength)
            )
              throw new TypeError(
                'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`'
              );
            var c = !B(s, "customInspect") || s.customInspect;
            if ("boolean" != typeof c && "symbol" !== c)
              throw new TypeError(
                "option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`"
              );
            if (
              B(s, "indent") &&
              null !== s.indent &&
              "\t" !== s.indent &&
              !(parseInt(s.indent, 10) === s.indent && s.indent > 0)
            )
              throw new TypeError(
                'option "indent" must be "\\t", an integer > 0, or `null`'
              );
            if (
              B(s, "numericSeparator") &&
              "boolean" != typeof s.numericSeparator
            )
              throw new TypeError(
                'option "numericSeparator", if provided, must be `true` or `false`'
              );
            var m = s.numericSeparator;
            if (void 0 === t) return "undefined";
            if (null === t) return "null";
            if ("boolean" == typeof t) return t ? "true" : "false";
            if ("string" == typeof t) return G(t, s);
            if ("number" == typeof t) {
              if (0 === t) return 1 / 0 / t > 0 ? "0" : "-0";
              var w = String(t);
              return m ? T(t, w) : w;
            }
            if ("bigint" == typeof t) {
              var S = String(t) + "n";
              return m ? T(t, S) : S;
            }
            var U = void 0 === s.depth ? 5 : s.depth;
            if (
              (void 0 === r && (r = 0), r >= U && U > 0 && "object" == typeof t)
            )
              return F(t) ? "[Array]" : "[Object]";
            var A,
              j = (function (e, t) {
                var n;
                if ("\t" === e.indent) n = "\t";
                else {
                  if (!("number" == typeof e.indent && e.indent > 0))
                    return null;
                  n = P.call(Array(e.indent + 1), " ");
                }
                return { base: n, prev: P.call(Array(t + 1), n) };
              })(s, r);
            if (void 0 === i) i = [];
            else if (q(i, t) >= 0) return "[Circular]";
            function V(t, n, o) {
              if ((n && (i = O.call(i)).push(n), o)) {
                var a = { depth: s.depth };
                return (
                  B(s, "quoteStyle") && (a.quoteStyle = s.quoteStyle),
                  e(t, a, r + 1, i)
                );
              }
              return e(t, s, r + 1, i);
            }
            if ("function" == typeof t && !W(t)) {
              var Z = (function (e) {
                  if (e.name) return e.name;
                  var t = y.call(g.call(e), /^function\s*([\w$]+)/);
                  return t ? t[1] : null;
                })(t),
                ee = Q(t, V);
              return (
                "[Function" +
                (Z ? ": " + Z : " (anonymous)") +
                "]" +
                (ee.length > 0 ? " { " + P.call(ee, ", ") + " }" : "")
              );
            }
            if (D(t)) {
              var te = C
                ? b.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1")
                : E.call(t);
              return "object" != typeof t || C ? te : K(te);
            }
            if (
              (A = t) &&
              "object" == typeof A &&
              (("undefined" != typeof HTMLElement &&
                A instanceof HTMLElement) ||
                ("string" == typeof A.nodeName &&
                  "function" == typeof A.getAttribute))
            ) {
              for (
                var ne = "<" + _.call(String(t.nodeName)),
                  re = t.attributes || [],
                  ie = 0;
                ie < re.length;
                ie++
              )
                ne += " " + re[ie].name + "=" + L($(re[ie].value), "double", s);
              return (
                (ne += ">"),
                t.childNodes && t.childNodes.length && (ne += "..."),
                ne + "</" + _.call(String(t.nodeName)) + ">"
              );
            }
            if (F(t)) {
              if (0 === t.length) return "[]";
              var oe = Q(t, V);
              return j &&
                !(function (e) {
                  for (var t = 0; t < e.length; t++)
                    if (q(e[t], "\n") >= 0) return !1;
                  return !0;
                })(oe)
                ? "[" + Y(oe, j) + "]"
                : "[ " + P.call(oe, ", ") + " ]";
            }
            if (
              (function (e) {
                return !(
                  "[object Error]" !== J(e) ||
                  (I && "object" == typeof e && I in e)
                );
              })(t)
            ) {
              var ae = Q(t, V);
              return "cause" in Error.prototype ||
                !("cause" in t) ||
                M.call(t, "cause")
                ? 0 === ae.length
                  ? "[" + String(t) + "]"
                  : "{ [" + String(t) + "] " + P.call(ae, ", ") + " }"
                : "{ [" +
                    String(t) +
                    "] " +
                    P.call(k.call("[cause]: " + V(t.cause), ae), ", ") +
                    " }";
            }
            if ("object" == typeof t && c) {
              if (N && "function" == typeof t[N] && R)
                return R(t, { depth: U - r });
              if ("symbol" !== c && "function" == typeof t.inspect)
                return t.inspect();
            }
            if (
              (function (e) {
                if (!o || !e || "object" != typeof e) return !1;
                try {
                  o.call(e);
                  try {
                    u.call(e);
                  } catch (e) {
                    return !0;
                  }
                  return e instanceof Map;
                } catch (e) {}
                return !1;
              })(t)
            ) {
              var se = [];
              return (
                a &&
                  a.call(t, function (e, n) {
                    se.push(V(n, t, !0) + " => " + V(e, t));
                  }),
                X("Map", o.call(t), se, j)
              );
            }
            if (
              (function (e) {
                if (!u || !e || "object" != typeof e) return !1;
                try {
                  u.call(e);
                  try {
                    o.call(e);
                  } catch (e) {
                    return !0;
                  }
                  return e instanceof Set;
                } catch (e) {}
                return !1;
              })(t)
            ) {
              var ce = [];
              return (
                l &&
                  l.call(t, function (e) {
                    ce.push(V(e, t));
                  }),
                X("Set", u.call(t), ce, j)
              );
            }
            if (
              (function (e) {
                if (!d || !e || "object" != typeof e) return !1;
                try {
                  d.call(e, d);
                  try {
                    f.call(e, f);
                  } catch (e) {
                    return !0;
                  }
                  return e instanceof WeakMap;
                } catch (e) {}
                return !1;
              })(t)
            )
              return H("WeakMap");
            if (
              (function (e) {
                if (!f || !e || "object" != typeof e) return !1;
                try {
                  f.call(e, f);
                  try {
                    d.call(e, d);
                  } catch (e) {
                    return !0;
                  }
                  return e instanceof WeakSet;
                } catch (e) {}
                return !1;
              })(t)
            )
              return H("WeakSet");
            if (
              (function (e) {
                if (!h || !e || "object" != typeof e) return !1;
                try {
                  return h.call(e), !0;
                } catch (e) {}
                return !1;
              })(t)
            )
              return H("WeakRef");
            if (
              (function (e) {
                return !(
                  "[object Number]" !== J(e) ||
                  (I && "object" == typeof e && I in e)
                );
              })(t)
            )
              return K(V(Number(t)));
            if (
              (function (e) {
                if (!e || "object" != typeof e || !x) return !1;
                try {
                  return x.call(e), !0;
                } catch (e) {}
                return !1;
              })(t)
            )
              return K(V(x.call(t)));
            if (
              (function (e) {
                return !(
                  "[object Boolean]" !== J(e) ||
                  (I && "object" == typeof e && I in e)
                );
              })(t)
            )
              return K(p.call(t));
            if (
              (function (e) {
                return !(
                  "[object String]" !== J(e) ||
                  (I && "object" == typeof e && I in e)
                );
              })(t)
            )
              return K(V(String(t)));
            if (
              !(function (e) {
                return !(
                  "[object Date]" !== J(e) ||
                  (I && "object" == typeof e && I in e)
                );
              })(t) &&
              !W(t)
            ) {
              var ue = Q(t, V),
                le = z
                  ? z(t) === Object.prototype
                  : t instanceof Object || t.constructor === Object,
                de = t instanceof Object ? "" : "null prototype",
                fe =
                  !le && I && Object(t) === t && I in t
                    ? v.call(J(t), 8, -1)
                    : de
                    ? "Object"
                    : "",
                he =
                  (le || "function" != typeof t.constructor
                    ? ""
                    : t.constructor.name
                    ? t.constructor.name + " "
                    : "") +
                  (fe || de
                    ? "[" + P.call(k.call([], fe || [], de || []), ": ") + "] "
                    : "");
              return 0 === ue.length
                ? he + "{}"
                : j
                ? he + "{" + Y(ue, j) + "}"
                : he + "{ " + P.call(ue, ", ") + " }";
            }
            return String(t);
          };
          var V =
            Object.prototype.hasOwnProperty ||
            function (e) {
              return e in this;
            };
          function B(e, t) {
            return V.call(e, t);
          }
          function J(e) {
            return m.call(e);
          }
          function q(e, t) {
            if (e.indexOf) return e.indexOf(t);
            for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
            return -1;
          }
          function G(e, t) {
            if (e.length > t.maxStringLength) {
              var n = e.length - t.maxStringLength,
                r = "... " + n + " more character" + (n > 1 ? "s" : "");
              return G(v.call(e, 0, t.maxStringLength), t) + r;
            }
            return L(
              b.call(b.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, Z),
              "single",
              t
            );
          }
          function Z(e) {
            var t = e.charCodeAt(0),
              n = { 8: "b", 9: "t", 10: "n", 12: "f", 13: "r" }[t];
            return n
              ? "\\" + n
              : "\\x" + (t < 16 ? "0" : "") + w.call(t.toString(16));
          }
          function K(e) {
            return "Object(" + e + ")";
          }
          function H(e) {
            return e + " { ? }";
          }
          function X(e, t, n, r) {
            return e + " (" + t + ") {" + (r ? Y(n, r) : P.call(n, ", ")) + "}";
          }
          function Y(e, t) {
            if (0 === e.length) return "";
            var n = "\n" + t.prev + t.base;
            return n + P.call(e, "," + n) + "\n" + t.prev;
          }
          function Q(e, t) {
            var n = F(e),
              r = [];
            if (n) {
              r.length = e.length;
              for (var i = 0; i < e.length; i++)
                r[i] = B(e, i) ? t(e[i], e) : "";
            }
            var o,
              a = "function" == typeof A ? A(e) : [];
            if (C) {
              o = {};
              for (var s = 0; s < a.length; s++) o["$" + a[s]] = a[s];
            }
            for (var c in e)
              B(e, c) &&
                ((n && String(Number(c)) === c && c < e.length) ||
                  (C && o["$" + c] instanceof Symbol) ||
                  (S.call(/[^\w$]/, c)
                    ? r.push(t(c, e) + ": " + t(e[c], e))
                    : r.push(c + ": " + t(e[c], e))));
            if ("function" == typeof A)
              for (var u = 0; u < a.length; u++)
                M.call(e, a[u]) &&
                  r.push("[" + t(a[u]) + "]: " + t(e[a[u]], e));
            return r;
          }
        },
        5527: function (e) {
          "use strict";
          var t = String.prototype.replace,
            n = /%20/g,
            r = "RFC3986";
          e.exports = {
            default: r,
            formatters: {
              RFC1738: function (e) {
                return t.call(e, n, "+");
              },
              RFC3986: function (e) {
                return String(e);
              },
            },
            RFC1738: "RFC1738",
            RFC3986: r,
          };
        },
        9126: function (e, t, n) {
          "use strict";
          var r = n(6845),
            i = n(9166),
            o = n(5527);
          e.exports = { formats: o, parse: i, stringify: r };
        },
        9166: function (e, t, n) {
          "use strict";
          var r = n(2493),
            i = Object.prototype.hasOwnProperty,
            o = Array.isArray,
            a = {
              allowDots: !1,
              allowPrototypes: !1,
              allowSparse: !1,
              arrayLimit: 20,
              charset: "utf-8",
              charsetSentinel: !1,
              comma: !1,
              decoder: r.decode,
              delimiter: "&",
              depth: 5,
              ignoreQueryPrefix: !1,
              interpretNumericEntities: !1,
              parameterLimit: 1e3,
              parseArrays: !0,
              plainObjects: !1,
              strictNullHandling: !1,
            },
            s = function (e) {
              return e.replace(/&#(\d+);/g, function (e, t) {
                return String.fromCharCode(parseInt(t, 10));
              });
            },
            c = function (e, t) {
              return e && "string" == typeof e && t.comma && e.indexOf(",") > -1
                ? e.split(",")
                : e;
            },
            u = function (e, t, n, r) {
              if (e) {
                var o = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
                  a = /(\[[^[\]]*])/g,
                  s = n.depth > 0 && /(\[[^[\]]*])/.exec(o),
                  u = s ? o.slice(0, s.index) : o,
                  l = [];
                if (u) {
                  if (
                    !n.plainObjects &&
                    i.call(Object.prototype, u) &&
                    !n.allowPrototypes
                  )
                    return;
                  l.push(u);
                }
                for (
                  var d = 0;
                  n.depth > 0 && null !== (s = a.exec(o)) && d < n.depth;

                ) {
                  if (
                    ((d += 1),
                    !n.plainObjects &&
                      i.call(Object.prototype, s[1].slice(1, -1)) &&
                      !n.allowPrototypes)
                  )
                    return;
                  l.push(s[1]);
                }
                return (
                  s && l.push("[" + o.slice(s.index) + "]"),
                  (function (e, t, n, r) {
                    for (
                      var i = r ? t : c(t, n), o = e.length - 1;
                      o >= 0;
                      --o
                    ) {
                      var a,
                        s = e[o];
                      if ("[]" === s && n.parseArrays) a = [].concat(i);
                      else {
                        a = n.plainObjects ? Object.create(null) : {};
                        var u =
                            "[" === s.charAt(0) &&
                            "]" === s.charAt(s.length - 1)
                              ? s.slice(1, -1)
                              : s,
                          l = parseInt(u, 10);
                        n.parseArrays || "" !== u
                          ? !isNaN(l) &&
                            s !== u &&
                            String(l) === u &&
                            l >= 0 &&
                            n.parseArrays &&
                            l <= n.arrayLimit
                            ? ((a = [])[l] = i)
                            : "__proto__" !== u && (a[u] = i)
                          : (a = { 0: i });
                      }
                      i = a;
                    }
                    return i;
                  })(l, t, n, r)
                );
              }
            };
          e.exports = function (e, t) {
            var n = (function (e) {
              if (!e) return a;
              if (
                null !== e.decoder &&
                void 0 !== e.decoder &&
                "function" != typeof e.decoder
              )
                throw new TypeError("Decoder has to be a function.");
              if (
                void 0 !== e.charset &&
                "utf-8" !== e.charset &&
                "iso-8859-1" !== e.charset
              )
                throw new TypeError(
                  "The charset option must be either utf-8, iso-8859-1, or undefined"
                );
              var t = void 0 === e.charset ? a.charset : e.charset;
              return {
                allowDots: void 0 === e.allowDots ? a.allowDots : !!e.allowDots,
                allowPrototypes:
                  "boolean" == typeof e.allowPrototypes
                    ? e.allowPrototypes
                    : a.allowPrototypes,
                allowSparse:
                  "boolean" == typeof e.allowSparse
                    ? e.allowSparse
                    : a.allowSparse,
                arrayLimit:
                  "number" == typeof e.arrayLimit ? e.arrayLimit : a.arrayLimit,
                charset: t,
                charsetSentinel:
                  "boolean" == typeof e.charsetSentinel
                    ? e.charsetSentinel
                    : a.charsetSentinel,
                comma: "boolean" == typeof e.comma ? e.comma : a.comma,
                decoder: "function" == typeof e.decoder ? e.decoder : a.decoder,
                delimiter:
                  "string" == typeof e.delimiter || r.isRegExp(e.delimiter)
                    ? e.delimiter
                    : a.delimiter,
                depth:
                  "number" == typeof e.depth || !1 === e.depth
                    ? +e.depth
                    : a.depth,
                ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
                interpretNumericEntities:
                  "boolean" == typeof e.interpretNumericEntities
                    ? e.interpretNumericEntities
                    : a.interpretNumericEntities,
                parameterLimit:
                  "number" == typeof e.parameterLimit
                    ? e.parameterLimit
                    : a.parameterLimit,
                parseArrays: !1 !== e.parseArrays,
                plainObjects:
                  "boolean" == typeof e.plainObjects
                    ? e.plainObjects
                    : a.plainObjects,
                strictNullHandling:
                  "boolean" == typeof e.strictNullHandling
                    ? e.strictNullHandling
                    : a.strictNullHandling,
              };
            })(t);
            if ("" === e || null == e)
              return n.plainObjects ? Object.create(null) : {};
            for (
              var l =
                  "string" == typeof e
                    ? (function (e, t) {
                        var n,
                          u = {},
                          l = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
                          d =
                            t.parameterLimit === 1 / 0
                              ? void 0
                              : t.parameterLimit,
                          f = l.split(t.delimiter, d),
                          h = -1,
                          p = t.charset;
                        if (t.charsetSentinel)
                          for (n = 0; n < f.length; ++n)
                            0 === f[n].indexOf("utf8=") &&
                              ("utf8=%E2%9C%93" === f[n]
                                ? (p = "utf-8")
                                : "utf8=%26%2310003%3B" === f[n] &&
                                  (p = "iso-8859-1"),
                              (h = n),
                              (n = f.length));
                        for (n = 0; n < f.length; ++n)
                          if (n !== h) {
                            var m,
                              g,
                              y = f[n],
                              v = y.indexOf("]="),
                              b = -1 === v ? y.indexOf("=") : v + 1;
                            -1 === b
                              ? ((m = t.decoder(y, a.decoder, p, "key")),
                                (g = t.strictNullHandling ? null : ""))
                              : ((m = t.decoder(
                                  y.slice(0, b),
                                  a.decoder,
                                  p,
                                  "key"
                                )),
                                (g = r.maybeMap(
                                  c(y.slice(b + 1), t),
                                  function (e) {
                                    return t.decoder(e, a.decoder, p, "value");
                                  }
                                ))),
                              g &&
                                t.interpretNumericEntities &&
                                "iso-8859-1" === p &&
                                (g = s(g)),
                              y.indexOf("[]=") > -1 && (g = o(g) ? [g] : g),
                              i.call(u, m)
                                ? (u[m] = r.combine(u[m], g))
                                : (u[m] = g);
                          }
                        return u;
                      })(e, n)
                    : e,
                d = n.plainObjects ? Object.create(null) : {},
                f = Object.keys(l),
                h = 0;
              h < f.length;
              ++h
            ) {
              var p = f[h],
                m = u(p, l[p], n, "string" == typeof e);
              d = r.merge(d, m, n);
            }
            return !0 === n.allowSparse ? d : r.compact(d);
          };
        },
        6845: function (e, t, n) {
          "use strict";
          var r = n(4294),
            i = n(2493),
            o = n(5527),
            a = Object.prototype.hasOwnProperty,
            s = {
              brackets: function (e) {
                return e + "[]";
              },
              comma: "comma",
              indices: function (e, t) {
                return e + "[" + t + "]";
              },
              repeat: function (e) {
                return e;
              },
            },
            c = Array.isArray,
            u = String.prototype.split,
            l = Array.prototype.push,
            d = function (e, t) {
              l.apply(e, c(t) ? t : [t]);
            },
            f = Date.prototype.toISOString,
            h = o.default,
            p = {
              addQueryPrefix: !1,
              allowDots: !1,
              charset: "utf-8",
              charsetSentinel: !1,
              delimiter: "&",
              encode: !0,
              encoder: i.encode,
              encodeValuesOnly: !1,
              format: h,
              formatter: o.formatters[h],
              indices: !1,
              serializeDate: function (e) {
                return f.call(e);
              },
              skipNulls: !1,
              strictNullHandling: !1,
            },
            m = {},
            g = function e(t, n, o, a, s, l, f, h, g, y, v, b, w, _, S, k) {
              for (
                var P, O = t, U = k, x = 0, A = !1;
                void 0 !== (U = U.get(m)) && !A;

              ) {
                var E = U.get(t);
                if (((x += 1), void 0 !== E)) {
                  if (E === x) throw new RangeError("Cyclic object value");
                  A = !0;
                }
                void 0 === U.get(m) && (x = 0);
              }
              if (
                ("function" == typeof h
                  ? (O = h(n, O))
                  : O instanceof Date
                  ? (O = v(O))
                  : "comma" === o &&
                    c(O) &&
                    (O = i.maybeMap(O, function (e) {
                      return e instanceof Date ? v(e) : e;
                    })),
                null === O)
              ) {
                if (s) return f && !_ ? f(n, p.encoder, S, "key", b) : n;
                O = "";
              }
              if (
                "string" == typeof (P = O) ||
                "number" == typeof P ||
                "boolean" == typeof P ||
                "symbol" == typeof P ||
                "bigint" == typeof P ||
                i.isBuffer(O)
              ) {
                if (f) {
                  var C = _ ? n : f(n, p.encoder, S, "key", b);
                  if ("comma" === o && _) {
                    for (
                      var I = u.call(String(O), ","), M = "", z = 0;
                      z < I.length;
                      ++z
                    )
                      M +=
                        (0 === z ? "" : ",") +
                        w(f(I[z], p.encoder, S, "value", b));
                    return [
                      w(C) +
                        (a && c(O) && 1 === I.length ? "[]" : "") +
                        "=" +
                        M,
                    ];
                  }
                  return [w(C) + "=" + w(f(O, p.encoder, S, "value", b))];
                }
                return [w(n) + "=" + w(String(O))];
              }
              var T,
                R = [];
              if (void 0 === O) return R;
              if ("comma" === o && c(O))
                T = [{ value: O.length > 0 ? O.join(",") || null : void 0 }];
              else if (c(h)) T = h;
              else {
                var j = Object.keys(O);
                T = g ? j.sort(g) : j;
              }
              for (
                var N = a && c(O) && 1 === O.length ? n + "[]" : n, L = 0;
                L < T.length;
                ++L
              ) {
                var $ = T[L],
                  F =
                    "object" == typeof $ && void 0 !== $.value ? $.value : O[$];
                if (!l || null !== F) {
                  var W = c(O)
                    ? "function" == typeof o
                      ? o(N, $)
                      : N
                    : N + (y ? "." + $ : "[" + $ + "]");
                  k.set(t, x);
                  var D = r();
                  D.set(m, k),
                    d(R, e(F, W, o, a, s, l, f, h, g, y, v, b, w, _, S, D));
                }
              }
              return R;
            };
          e.exports = function (e, t) {
            var n,
              i = e,
              u = (function (e) {
                if (!e) return p;
                if (
                  null !== e.encoder &&
                  void 0 !== e.encoder &&
                  "function" != typeof e.encoder
                )
                  throw new TypeError("Encoder has to be a function.");
                var t = e.charset || p.charset;
                if (
                  void 0 !== e.charset &&
                  "utf-8" !== e.charset &&
                  "iso-8859-1" !== e.charset
                )
                  throw new TypeError(
                    "The charset option must be either utf-8, iso-8859-1, or undefined"
                  );
                var n = o.default;
                if (void 0 !== e.format) {
                  if (!a.call(o.formatters, e.format))
                    throw new TypeError("Unknown format option provided.");
                  n = e.format;
                }
                var r = o.formatters[n],
                  i = p.filter;
                return (
                  ("function" == typeof e.filter || c(e.filter)) &&
                    (i = e.filter),
                  {
                    addQueryPrefix:
                      "boolean" == typeof e.addQueryPrefix
                        ? e.addQueryPrefix
                        : p.addQueryPrefix,
                    allowDots:
                      void 0 === e.allowDots ? p.allowDots : !!e.allowDots,
                    charset: t,
                    charsetSentinel:
                      "boolean" == typeof e.charsetSentinel
                        ? e.charsetSentinel
                        : p.charsetSentinel,
                    delimiter:
                      void 0 === e.delimiter ? p.delimiter : e.delimiter,
                    encode: "boolean" == typeof e.encode ? e.encode : p.encode,
                    encoder:
                      "function" == typeof e.encoder ? e.encoder : p.encoder,
                    encodeValuesOnly:
                      "boolean" == typeof e.encodeValuesOnly
                        ? e.encodeValuesOnly
                        : p.encodeValuesOnly,
                    filter: i,
                    format: n,
                    formatter: r,
                    serializeDate:
                      "function" == typeof e.serializeDate
                        ? e.serializeDate
                        : p.serializeDate,
                    skipNulls:
                      "boolean" == typeof e.skipNulls
                        ? e.skipNulls
                        : p.skipNulls,
                    sort: "function" == typeof e.sort ? e.sort : null,
                    strictNullHandling:
                      "boolean" == typeof e.strictNullHandling
                        ? e.strictNullHandling
                        : p.strictNullHandling,
                  }
                );
              })(t);
            "function" == typeof u.filter
              ? (i = (0, u.filter)("", i))
              : c(u.filter) && (n = u.filter);
            var l,
              f = [];
            if ("object" != typeof i || null === i) return "";
            l =
              t && t.arrayFormat in s
                ? t.arrayFormat
                : t && "indices" in t
                ? t.indices
                  ? "indices"
                  : "repeat"
                : "indices";
            var h = s[l];
            if (
              t &&
              "commaRoundTrip" in t &&
              "boolean" != typeof t.commaRoundTrip
            )
              throw new TypeError(
                "`commaRoundTrip` must be a boolean, or absent"
              );
            var m = "comma" === h && t && t.commaRoundTrip;
            n || (n = Object.keys(i)), u.sort && n.sort(u.sort);
            for (var y = r(), v = 0; v < n.length; ++v) {
              var b = n[v];
              (u.skipNulls && null === i[b]) ||
                d(
                  f,
                  g(
                    i[b],
                    b,
                    h,
                    m,
                    u.strictNullHandling,
                    u.skipNulls,
                    u.encode ? u.encoder : null,
                    u.filter,
                    u.sort,
                    u.allowDots,
                    u.serializeDate,
                    u.format,
                    u.formatter,
                    u.encodeValuesOnly,
                    u.charset,
                    y
                  )
                );
            }
            var w = f.join(u.delimiter),
              _ = !0 === u.addQueryPrefix ? "?" : "";
            return (
              u.charsetSentinel &&
                ("iso-8859-1" === u.charset
                  ? (_ += "utf8=%26%2310003%3B&")
                  : (_ += "utf8=%E2%9C%93&")),
              w.length > 0 ? _ + w : ""
            );
          };
        },
        2493: function (e, t, n) {
          "use strict";
          var r = n(5527),
            i = Object.prototype.hasOwnProperty,
            o = Array.isArray,
            a = (function () {
              for (var e = [], t = 0; t < 256; ++t)
                e.push(
                  "%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase()
                );
              return e;
            })(),
            s = function (e, t) {
              for (
                var n = t && t.plainObjects ? Object.create(null) : {}, r = 0;
                r < e.length;
                ++r
              )
                void 0 !== e[r] && (n[r] = e[r]);
              return n;
            };
          e.exports = {
            arrayToObject: s,
            assign: function (e, t) {
              return Object.keys(t).reduce(function (e, n) {
                return (e[n] = t[n]), e;
              }, e);
            },
            combine: function (e, t) {
              return [].concat(e, t);
            },
            compact: function (e) {
              for (
                var t = [{ obj: { o: e }, prop: "o" }], n = [], r = 0;
                r < t.length;
                ++r
              )
                for (
                  var i = t[r], a = i.obj[i.prop], s = Object.keys(a), c = 0;
                  c < s.length;
                  ++c
                ) {
                  var u = s[c],
                    l = a[u];
                  "object" == typeof l &&
                    null !== l &&
                    -1 === n.indexOf(l) &&
                    (t.push({ obj: a, prop: u }), n.push(l));
                }
              return (
                (function (e) {
                  for (; e.length > 1; ) {
                    var t = e.pop(),
                      n = t.obj[t.prop];
                    if (o(n)) {
                      for (var r = [], i = 0; i < n.length; ++i)
                        void 0 !== n[i] && r.push(n[i]);
                      t.obj[t.prop] = r;
                    }
                  }
                })(t),
                e
              );
            },
            decode: function (e, t, n) {
              var r = e.replace(/\+/g, " ");
              if ("iso-8859-1" === n)
                return r.replace(/%[0-9a-f]{2}/gi, unescape);
              try {
                return decodeURIComponent(r);
              } catch (e) {
                return r;
              }
            },
            encode: function (e, t, n, i, o) {
              if (0 === e.length) return e;
              var s = e;
              if (
                ("symbol" == typeof e
                  ? (s = Symbol.prototype.toString.call(e))
                  : "string" != typeof e && (s = String(e)),
                "iso-8859-1" === n)
              )
                return escape(s).replace(/%u[0-9a-f]{4}/gi, function (e) {
                  return "%26%23" + parseInt(e.slice(2), 16) + "%3B";
                });
              for (var c = "", u = 0; u < s.length; ++u) {
                var l = s.charCodeAt(u);
                45 === l ||
                46 === l ||
                95 === l ||
                126 === l ||
                (l >= 48 && l <= 57) ||
                (l >= 65 && l <= 90) ||
                (l >= 97 && l <= 122) ||
                (o === r.RFC1738 && (40 === l || 41 === l))
                  ? (c += s.charAt(u))
                  : l < 128
                  ? (c += a[l])
                  : l < 2048
                  ? (c += a[192 | (l >> 6)] + a[128 | (63 & l)])
                  : l < 55296 || l >= 57344
                  ? (c +=
                      a[224 | (l >> 12)] +
                      a[128 | ((l >> 6) & 63)] +
                      a[128 | (63 & l)])
                  : ((u += 1),
                    (l =
                      65536 + (((1023 & l) << 10) | (1023 & s.charCodeAt(u)))),
                    (c +=
                      a[240 | (l >> 18)] +
                      a[128 | ((l >> 12) & 63)] +
                      a[128 | ((l >> 6) & 63)] +
                      a[128 | (63 & l)]));
              }
              return c;
            },
            isBuffer: function (e) {
              return !(
                !e ||
                "object" != typeof e ||
                !(
                  e.constructor &&
                  e.constructor.isBuffer &&
                  e.constructor.isBuffer(e)
                )
              );
            },
            isRegExp: function (e) {
              return "[object RegExp]" === Object.prototype.toString.call(e);
            },
            maybeMap: function (e, t) {
              if (o(e)) {
                for (var n = [], r = 0; r < e.length; r += 1) n.push(t(e[r]));
                return n;
              }
              return t(e);
            },
            merge: function e(t, n, r) {
              if (!n) return t;
              if ("object" != typeof n) {
                if (o(t)) t.push(n);
                else {
                  if (!t || "object" != typeof t) return [t, n];
                  ((r && (r.plainObjects || r.allowPrototypes)) ||
                    !i.call(Object.prototype, n)) &&
                    (t[n] = !0);
                }
                return t;
              }
              if (!t || "object" != typeof t) return [t].concat(n);
              var a = t;
              return (
                o(t) && !o(n) && (a = s(t, r)),
                o(t) && o(n)
                  ? (n.forEach(function (n, o) {
                      if (i.call(t, o)) {
                        var a = t[o];
                        a && "object" == typeof a && n && "object" == typeof n
                          ? (t[o] = e(a, n, r))
                          : t.push(n);
                      } else t[o] = n;
                    }),
                    t)
                  : Object.keys(n).reduce(function (t, o) {
                      var a = n[o];
                      return (
                        i.call(t, o) ? (t[o] = e(t[o], a, r)) : (t[o] = a), t
                      );
                    }, a)
              );
            },
          };
        },
        6866: function (e, t) {
          "use strict";
          var n = "function" == typeof Symbol && Symbol.for,
            r = n ? Symbol.for("react.element") : 60103,
            i = n ? Symbol.for("react.portal") : 60106,
            o = n ? Symbol.for("react.fragment") : 60107,
            a = n ? Symbol.for("react.strict_mode") : 60108,
            s = n ? Symbol.for("react.profiler") : 60114,
            c = n ? Symbol.for("react.provider") : 60109,
            u = n ? Symbol.for("react.context") : 60110,
            l = n ? Symbol.for("react.async_mode") : 60111,
            d = n ? Symbol.for("react.concurrent_mode") : 60111,
            f = n ? Symbol.for("react.forward_ref") : 60112,
            h = n ? Symbol.for("react.suspense") : 60113,
            p = n ? Symbol.for("react.suspense_list") : 60120,
            m = n ? Symbol.for("react.memo") : 60115,
            g = n ? Symbol.for("react.lazy") : 60116,
            y = n ? Symbol.for("react.block") : 60121,
            v = n ? Symbol.for("react.fundamental") : 60117,
            b = n ? Symbol.for("react.responder") : 60118,
            w = n ? Symbol.for("react.scope") : 60119;
          function _(e) {
            if ("object" == typeof e && null !== e) {
              var t = e.$$typeof;
              switch (t) {
                case r:
                  switch ((e = e.type)) {
                    case l:
                    case d:
                    case o:
                    case s:
                    case a:
                    case h:
                      return e;
                    default:
                      switch ((e = e && e.$$typeof)) {
                        case u:
                        case f:
                        case g:
                        case m:
                        case c:
                          return e;
                        default:
                          return t;
                      }
                  }
                case i:
                  return t;
              }
            }
          }
          function S(e) {
            return _(e) === d;
          }
          (t.AsyncMode = l),
            (t.ConcurrentMode = d),
            (t.ContextConsumer = u),
            (t.ContextProvider = c),
            (t.Element = r),
            (t.ForwardRef = f),
            (t.Fragment = o),
            (t.Lazy = g),
            (t.Memo = m),
            (t.Portal = i),
            (t.Profiler = s),
            (t.StrictMode = a),
            (t.Suspense = h),
            (t.isAsyncMode = function (e) {
              return S(e) || _(e) === l;
            }),
            (t.isConcurrentMode = S),
            (t.isContextConsumer = function (e) {
              return _(e) === u;
            }),
            (t.isContextProvider = function (e) {
              return _(e) === c;
            }),
            (t.isElement = function (e) {
              return "object" == typeof e && null !== e && e.$$typeof === r;
            }),
            (t.isForwardRef = function (e) {
              return _(e) === f;
            }),
            (t.isFragment = function (e) {
              return _(e) === o;
            }),
            (t.isLazy = function (e) {
              return _(e) === g;
            }),
            (t.isMemo = function (e) {
              return _(e) === m;
            }),
            (t.isPortal = function (e) {
              return _(e) === i;
            }),
            (t.isProfiler = function (e) {
              return _(e) === s;
            }),
            (t.isStrictMode = function (e) {
              return _(e) === a;
            }),
            (t.isSuspense = function (e) {
              return _(e) === h;
            }),
            (t.isValidElementType = function (e) {
              return (
                "string" == typeof e ||
                "function" == typeof e ||
                e === o ||
                e === d ||
                e === s ||
                e === a ||
                e === h ||
                e === p ||
                ("object" == typeof e &&
                  null !== e &&
                  (e.$$typeof === g ||
                    e.$$typeof === m ||
                    e.$$typeof === c ||
                    e.$$typeof === u ||
                    e.$$typeof === f ||
                    e.$$typeof === v ||
                    e.$$typeof === b ||
                    e.$$typeof === w ||
                    e.$$typeof === y))
              );
            }),
            (t.typeOf = _);
        },
        8570: function (e, t, n) {
          "use strict";
          e.exports = n(6866);
        },
        1837: function (e, t, n) {
          "use strict";
          var r = n(2784),
            i = Symbol.for("react.element"),
            o = Symbol.for("react.fragment"),
            a = Object.prototype.hasOwnProperty,
            s =
              r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                .ReactCurrentOwner,
            c = { key: !0, ref: !0, __self: !0, __source: !0 };
          function u(e, t, n) {
            var r,
              o = {},
              u = null,
              l = null;
            for (r in (void 0 !== n && (u = "" + n),
            void 0 !== t.key && (u = "" + t.key),
            void 0 !== t.ref && (l = t.ref),
            t))
              a.call(t, r) && !c.hasOwnProperty(r) && (o[r] = t[r]);
            if (e && e.defaultProps)
              for (r in (t = e.defaultProps)) void 0 === o[r] && (o[r] = t[r]);
            return {
              $$typeof: i,
              type: e,
              key: u,
              ref: l,
              props: o,
              _owner: s.current,
            };
          }
          (t.Fragment = o), (t.jsx = u), (t.jsxs = u);
        },
        3426: function (e, t) {
          "use strict";
          var n = Symbol.for("react.element"),
            r = Symbol.for("react.portal"),
            i = Symbol.for("react.fragment"),
            o = Symbol.for("react.strict_mode"),
            a = Symbol.for("react.profiler"),
            s = Symbol.for("react.provider"),
            c = Symbol.for("react.context"),
            u = Symbol.for("react.forward_ref"),
            l = Symbol.for("react.suspense"),
            d = Symbol.for("react.memo"),
            f = Symbol.for("react.lazy"),
            h = Symbol.iterator,
            p = {
              isMounted: function () {
                return !1;
              },
              enqueueForceUpdate: function () {},
              enqueueReplaceState: function () {},
              enqueueSetState: function () {},
            },
            m = Object.assign,
            g = {};
          function y(e, t, n) {
            (this.props = e),
              (this.context = t),
              (this.refs = g),
              (this.updater = n || p);
          }
          function v() {}
          function b(e, t, n) {
            (this.props = e),
              (this.context = t),
              (this.refs = g),
              (this.updater = n || p);
          }
          (y.prototype.isReactComponent = {}),
            (y.prototype.setState = function (e, t) {
              if ("object" != typeof e && "function" != typeof e && null != e)
                throw Error(
                  "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
                );
              this.updater.enqueueSetState(this, e, t, "setState");
            }),
            (y.prototype.forceUpdate = function (e) {
              this.updater.enqueueForceUpdate(this, e, "forceUpdate");
            }),
            (v.prototype = y.prototype);
          var w = (b.prototype = new v());
          (w.constructor = b), m(w, y.prototype), (w.isPureReactComponent = !0);
          var _ = Array.isArray,
            S = Object.prototype.hasOwnProperty,
            k = { current: null },
            P = { key: !0, ref: !0, __self: !0, __source: !0 };
          function O(e, t, r) {
            var i,
              o = {},
              a = null,
              s = null;
            if (null != t)
              for (i in (void 0 !== t.ref && (s = t.ref),
              void 0 !== t.key && (a = "" + t.key),
              t))
                S.call(t, i) && !P.hasOwnProperty(i) && (o[i] = t[i]);
            var c = arguments.length - 2;
            if (1 === c) o.children = r;
            else if (1 < c) {
              for (var u = Array(c), l = 0; l < c; l++) u[l] = arguments[l + 2];
              o.children = u;
            }
            if (e && e.defaultProps)
              for (i in (c = e.defaultProps)) void 0 === o[i] && (o[i] = c[i]);
            return {
              $$typeof: n,
              type: e,
              key: a,
              ref: s,
              props: o,
              _owner: k.current,
            };
          }
          function U(e) {
            return "object" == typeof e && null !== e && e.$$typeof === n;
          }
          var x = /\/+/g;
          function A(e, t) {
            return "object" == typeof e && null !== e && null != e.key
              ? (function (e) {
                  var t = { "=": "=0", ":": "=2" };
                  return (
                    "$" +
                    e.replace(/[=:]/g, function (e) {
                      return t[e];
                    })
                  );
                })("" + e.key)
              : t.toString(36);
          }
          function E(e, t, i, o, a) {
            var s = typeof e;
            ("undefined" !== s && "boolean" !== s) || (e = null);
            var c = !1;
            if (null === e) c = !0;
            else
              switch (s) {
                case "string":
                case "number":
                  c = !0;
                  break;
                case "object":
                  switch (e.$$typeof) {
                    case n:
                    case r:
                      c = !0;
                  }
              }
            if (c)
              return (
                (a = a((c = e))),
                (e = "" === o ? "." + A(c, 0) : o),
                _(a)
                  ? ((i = ""),
                    null != e && (i = e.replace(x, "$&/") + "/"),
                    E(a, t, i, "", function (e) {
                      return e;
                    }))
                  : null != a &&
                    (U(a) &&
                      (a = (function (e, t) {
                        return {
                          $$typeof: n,
                          type: e.type,
                          key: t,
                          ref: e.ref,
                          props: e.props,
                          _owner: e._owner,
                        };
                      })(
                        a,
                        i +
                          (!a.key || (c && c.key === a.key)
                            ? ""
                            : ("" + a.key).replace(x, "$&/") + "/") +
                          e
                      )),
                    t.push(a)),
                1
              );
            if (((c = 0), (o = "" === o ? "." : o + ":"), _(e)))
              for (var u = 0; u < e.length; u++) {
                var l = o + A((s = e[u]), u);
                c += E(s, t, i, l, a);
              }
            else if (
              ((l = (function (e) {
                return null === e || "object" != typeof e
                  ? null
                  : "function" == typeof (e = (h && e[h]) || e["@@iterator"])
                  ? e
                  : null;
              })(e)),
              "function" == typeof l)
            )
              for (e = l.call(e), u = 0; !(s = e.next()).done; )
                c += E((s = s.value), t, i, (l = o + A(s, u++)), a);
            else if ("object" === s)
              throw (
                ((t = String(e)),
                Error(
                  "Objects are not valid as a React child (found: " +
                    ("[object Object]" === t
                      ? "object with keys {" + Object.keys(e).join(", ") + "}"
                      : t) +
                    "). If you meant to render a collection of children, use an array instead."
                ))
              );
            return c;
          }
          function C(e, t, n) {
            if (null == e) return e;
            var r = [],
              i = 0;
            return (
              E(e, r, "", "", function (e) {
                return t.call(n, e, i++);
              }),
              r
            );
          }
          function I(e) {
            if (-1 === e._status) {
              var t = e._result;
              (t = t()).then(
                function (t) {
                  (0 !== e._status && -1 !== e._status) ||
                    ((e._status = 1), (e._result = t));
                },
                function (t) {
                  (0 !== e._status && -1 !== e._status) ||
                    ((e._status = 2), (e._result = t));
                }
              ),
                -1 === e._status && ((e._status = 0), (e._result = t));
            }
            if (1 === e._status) return e._result.default;
            throw e._result;
          }
          var M = { current: null },
            z = { transition: null },
            T = {
              ReactCurrentDispatcher: M,
              ReactCurrentBatchConfig: z,
              ReactCurrentOwner: k,
            };
          (t.Children = {
            map: C,
            forEach: function (e, t, n) {
              C(
                e,
                function () {
                  t.apply(this, arguments);
                },
                n
              );
            },
            count: function (e) {
              var t = 0;
              return (
                C(e, function () {
                  t++;
                }),
                t
              );
            },
            toArray: function (e) {
              return (
                C(e, function (e) {
                  return e;
                }) || []
              );
            },
            only: function (e) {
              if (!U(e))
                throw Error(
                  "React.Children.only expected to receive a single React element child."
                );
              return e;
            },
          }),
            (t.Component = y),
            (t.Fragment = i),
            (t.Profiler = a),
            (t.PureComponent = b),
            (t.StrictMode = o),
            (t.Suspense = l),
            (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T),
            (t.cloneElement = function (e, t, r) {
              if (null == e)
                throw Error(
                  "React.cloneElement(...): The argument must be a React element, but you passed " +
                    e +
                    "."
                );
              var i = m({}, e.props),
                o = e.key,
                a = e.ref,
                s = e._owner;
              if (null != t) {
                if (
                  (void 0 !== t.ref && ((a = t.ref), (s = k.current)),
                  void 0 !== t.key && (o = "" + t.key),
                  e.type && e.type.defaultProps)
                )
                  var c = e.type.defaultProps;
                for (u in t)
                  S.call(t, u) &&
                    !P.hasOwnProperty(u) &&
                    (i[u] = void 0 === t[u] && void 0 !== c ? c[u] : t[u]);
              }
              var u = arguments.length - 2;
              if (1 === u) i.children = r;
              else if (1 < u) {
                c = Array(u);
                for (var l = 0; l < u; l++) c[l] = arguments[l + 2];
                i.children = c;
              }
              return {
                $$typeof: n,
                type: e.type,
                key: o,
                ref: a,
                props: i,
                _owner: s,
              };
            }),
            (t.createContext = function (e) {
              return (
                ((e = {
                  $$typeof: c,
                  _currentValue: e,
                  _currentValue2: e,
                  _threadCount: 0,
                  Provider: null,
                  Consumer: null,
                  _defaultValue: null,
                  _globalName: null,
                }).Provider = { $$typeof: s, _context: e }),
                (e.Consumer = e)
              );
            }),
            (t.createElement = O),
            (t.createFactory = function (e) {
              var t = O.bind(null, e);
              return (t.type = e), t;
            }),
            (t.createRef = function () {
              return { current: null };
            }),
            (t.forwardRef = function (e) {
              return { $$typeof: u, render: e };
            }),
            (t.isValidElement = U),
            (t.lazy = function (e) {
              return {
                $$typeof: f,
                _payload: { _status: -1, _result: e },
                _init: I,
              };
            }),
            (t.memo = function (e, t) {
              return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
            }),
            (t.startTransition = function (e) {
              var t = z.transition;
              z.transition = {};
              try {
                e();
              } finally {
                z.transition = t;
              }
            }),
            (t.unstable_act = function () {
              throw Error(
                "act(...) is not supported in production builds of React."
              );
            }),
            (t.useCallback = function (e, t) {
              return M.current.useCallback(e, t);
            }),
            (t.useContext = function (e) {
              return M.current.useContext(e);
            }),
            (t.useDebugValue = function () {}),
            (t.useDeferredValue = function (e) {
              return M.current.useDeferredValue(e);
            }),
            (t.useEffect = function (e, t) {
              return M.current.useEffect(e, t);
            }),
            (t.useId = function () {
              return M.current.useId();
            }),
            (t.useImperativeHandle = function (e, t, n) {
              return M.current.useImperativeHandle(e, t, n);
            }),
            (t.useInsertionEffect = function (e, t) {
              return M.current.useInsertionEffect(e, t);
            }),
            (t.useLayoutEffect = function (e, t) {
              return M.current.useLayoutEffect(e, t);
            }),
            (t.useMemo = function (e, t) {
              return M.current.useMemo(e, t);
            }),
            (t.useReducer = function (e, t, n) {
              return M.current.useReducer(e, t, n);
            }),
            (t.useRef = function (e) {
              return M.current.useRef(e);
            }),
            (t.useState = function (e) {
              return M.current.useState(e);
            }),
            (t.useSyncExternalStore = function (e, t, n) {
              return M.current.useSyncExternalStore(e, t, n);
            }),
            (t.useTransition = function () {
              return M.current.useTransition();
            }),
            (t.version = "18.2.0");
        },
        2784: function (e, t, n) {
          "use strict";
          e.exports = n(3426);
        },
        2322: function (e, t, n) {
          "use strict";
          e.exports = n(1837);
        },
        5047: function (e) {
          var t = (function (e) {
            "use strict";
            var t,
              n = Object.prototype,
              r = n.hasOwnProperty,
              i =
                Object.defineProperty ||
                function (e, t, n) {
                  e[t] = n.value;
                },
              o = "function" == typeof Symbol ? Symbol : {},
              a = o.iterator || "@@iterator",
              s = o.asyncIterator || "@@asyncIterator",
              c = o.toStringTag || "@@toStringTag";
            function u(e, t, n) {
              return (
                Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                }),
                e[t]
              );
            }
            try {
              u({}, "");
            } catch (e) {
              u = function (e, t, n) {
                return (e[t] = n);
              };
            }
            function l(e, t, n, r) {
              var o = t && t.prototype instanceof y ? t : y,
                a = Object.create(o.prototype),
                s = new C(r || []);
              return i(a, "_invoke", { value: U(e, n, s) }), a;
            }
            function d(e, t, n) {
              try {
                return { type: "normal", arg: e.call(t, n) };
              } catch (e) {
                return { type: "throw", arg: e };
              }
            }
            e.wrap = l;
            var f = "suspendedStart",
              h = "suspendedYield",
              p = "executing",
              m = "completed",
              g = {};
            function y() {}
            function v() {}
            function b() {}
            var w = {};
            u(w, a, function () {
              return this;
            });
            var _ = Object.getPrototypeOf,
              S = _ && _(_(I([])));
            S && S !== n && r.call(S, a) && (w = S);
            var k = (b.prototype = y.prototype = Object.create(w));
            function P(e) {
              ["next", "throw", "return"].forEach(function (t) {
                u(e, t, function (e) {
                  return this._invoke(t, e);
                });
              });
            }
            function O(e, t) {
              function n(i, o, a, s) {
                var c = d(e[i], e, o);
                if ("throw" !== c.type) {
                  var u = c.arg,
                    l = u.value;
                  return l && "object" == typeof l && r.call(l, "__await")
                    ? t.resolve(l.__await).then(
                        function (e) {
                          n("next", e, a, s);
                        },
                        function (e) {
                          n("throw", e, a, s);
                        }
                      )
                    : t.resolve(l).then(
                        function (e) {
                          (u.value = e), a(u);
                        },
                        function (e) {
                          return n("throw", e, a, s);
                        }
                      );
                }
                s(c.arg);
              }
              var o;
              i(this, "_invoke", {
                value: function (e, r) {
                  function i() {
                    return new t(function (t, i) {
                      n(e, r, t, i);
                    });
                  }
                  return (o = o ? o.then(i, i) : i());
                },
              });
            }
            function U(e, t, n) {
              var r = f;
              return function (i, o) {
                if (r === p) throw new Error("Generator is already running");
                if (r === m) {
                  if ("throw" === i) throw o;
                  return M();
                }
                for (n.method = i, n.arg = o; ; ) {
                  var a = n.delegate;
                  if (a) {
                    var s = x(a, n);
                    if (s) {
                      if (s === g) continue;
                      return s;
                    }
                  }
                  if ("next" === n.method) n.sent = n._sent = n.arg;
                  else if ("throw" === n.method) {
                    if (r === f) throw ((r = m), n.arg);
                    n.dispatchException(n.arg);
                  } else "return" === n.method && n.abrupt("return", n.arg);
                  r = p;
                  var c = d(e, t, n);
                  if ("normal" === c.type) {
                    if (((r = n.done ? m : h), c.arg === g)) continue;
                    return { value: c.arg, done: n.done };
                  }
                  "throw" === c.type &&
                    ((r = m), (n.method = "throw"), (n.arg = c.arg));
                }
              };
            }
            function x(e, n) {
              var r = n.method,
                i = e.iterator[r];
              if (i === t)
                return (
                  (n.delegate = null),
                  ("throw" === r &&
                    e.iterator.return &&
                    ((n.method = "return"),
                    (n.arg = t),
                    x(e, n),
                    "throw" === n.method)) ||
                    ("return" !== r &&
                      ((n.method = "throw"),
                      (n.arg = new TypeError(
                        "The iterator does not provide a '" + r + "' method"
                      )))),
                  g
                );
              var o = d(i, e.iterator, n.arg);
              if ("throw" === o.type)
                return (
                  (n.method = "throw"), (n.arg = o.arg), (n.delegate = null), g
                );
              var a = o.arg;
              return a
                ? a.done
                  ? ((n[e.resultName] = a.value),
                    (n.next = e.nextLoc),
                    "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                    (n.delegate = null),
                    g)
                  : a
                : ((n.method = "throw"),
                  (n.arg = new TypeError("iterator result is not an object")),
                  (n.delegate = null),
                  g);
            }
            function A(e) {
              var t = { tryLoc: e[0] };
              1 in e && (t.catchLoc = e[1]),
                2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
                this.tryEntries.push(t);
            }
            function E(e) {
              var t = e.completion || {};
              (t.type = "normal"), delete t.arg, (e.completion = t);
            }
            function C(e) {
              (this.tryEntries = [{ tryLoc: "root" }]),
                e.forEach(A, this),
                this.reset(!0);
            }
            function I(e) {
              if (e) {
                var n = e[a];
                if (n) return n.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                  var i = -1,
                    o = function n() {
                      for (; ++i < e.length; )
                        if (r.call(e, i))
                          return (n.value = e[i]), (n.done = !1), n;
                      return (n.value = t), (n.done = !0), n;
                    };
                  return (o.next = o);
                }
              }
              return { next: M };
            }
            function M() {
              return { value: t, done: !0 };
            }
            return (
              (v.prototype = b),
              i(k, "constructor", { value: b, configurable: !0 }),
              i(b, "constructor", { value: v, configurable: !0 }),
              (v.displayName = u(b, c, "GeneratorFunction")),
              (e.isGeneratorFunction = function (e) {
                var t = "function" == typeof e && e.constructor;
                return (
                  !!t &&
                  (t === v || "GeneratorFunction" === (t.displayName || t.name))
                );
              }),
              (e.mark = function (e) {
                return (
                  Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, b)
                    : ((e.__proto__ = b), u(e, c, "GeneratorFunction")),
                  (e.prototype = Object.create(k)),
                  e
                );
              }),
              (e.awrap = function (e) {
                return { __await: e };
              }),
              P(O.prototype),
              u(O.prototype, s, function () {
                return this;
              }),
              (e.AsyncIterator = O),
              (e.async = function (t, n, r, i, o) {
                void 0 === o && (o = Promise);
                var a = new O(l(t, n, r, i), o);
                return e.isGeneratorFunction(n)
                  ? a
                  : a.next().then(function (e) {
                      return e.done ? e.value : a.next();
                    });
              }),
              P(k),
              u(k, c, "Generator"),
              u(k, a, function () {
                return this;
              }),
              u(k, "toString", function () {
                return "[object Generator]";
              }),
              (e.keys = function (e) {
                var t = Object(e),
                  n = [];
                for (var r in t) n.push(r);
                return (
                  n.reverse(),
                  function e() {
                    for (; n.length; ) {
                      var r = n.pop();
                      if (r in t) return (e.value = r), (e.done = !1), e;
                    }
                    return (e.done = !0), e;
                  }
                );
              }),
              (e.values = I),
              (C.prototype = {
                constructor: C,
                reset: function (e) {
                  if (
                    ((this.prev = 0),
                    (this.next = 0),
                    (this.sent = this._sent = t),
                    (this.done = !1),
                    (this.delegate = null),
                    (this.method = "next"),
                    (this.arg = t),
                    this.tryEntries.forEach(E),
                    !e)
                  )
                    for (var n in this)
                      "t" === n.charAt(0) &&
                        r.call(this, n) &&
                        !isNaN(+n.slice(1)) &&
                        (this[n] = t);
                },
                stop: function () {
                  this.done = !0;
                  var e = this.tryEntries[0].completion;
                  if ("throw" === e.type) throw e.arg;
                  return this.rval;
                },
                dispatchException: function (e) {
                  if (this.done) throw e;
                  var n = this;
                  function i(r, i) {
                    return (
                      (s.type = "throw"),
                      (s.arg = e),
                      (n.next = r),
                      i && ((n.method = "next"), (n.arg = t)),
                      !!i
                    );
                  }
                  for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                    var a = this.tryEntries[o],
                      s = a.completion;
                    if ("root" === a.tryLoc) return i("end");
                    if (a.tryLoc <= this.prev) {
                      var c = r.call(a, "catchLoc"),
                        u = r.call(a, "finallyLoc");
                      if (c && u) {
                        if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                        if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                      } else if (c) {
                        if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                      } else {
                        if (!u)
                          throw new Error(
                            "try statement without catch or finally"
                          );
                        if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                      }
                    }
                  }
                },
                abrupt: function (e, t) {
                  for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var i = this.tryEntries[n];
                    if (
                      i.tryLoc <= this.prev &&
                      r.call(i, "finallyLoc") &&
                      this.prev < i.finallyLoc
                    ) {
                      var o = i;
                      break;
                    }
                  }
                  o &&
                    ("break" === e || "continue" === e) &&
                    o.tryLoc <= t &&
                    t <= o.finallyLoc &&
                    (o = null);
                  var a = o ? o.completion : {};
                  return (
                    (a.type = e),
                    (a.arg = t),
                    o
                      ? ((this.method = "next"), (this.next = o.finallyLoc), g)
                      : this.complete(a)
                  );
                },
                complete: function (e, t) {
                  if ("throw" === e.type) throw e.arg;
                  return (
                    "break" === e.type || "continue" === e.type
                      ? (this.next = e.arg)
                      : "return" === e.type
                      ? ((this.rval = this.arg = e.arg),
                        (this.method = "return"),
                        (this.next = "end"))
                      : "normal" === e.type && t && (this.next = t),
                    g
                  );
                },
                finish: function (e) {
                  for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.finallyLoc === e)
                      return this.complete(n.completion, n.afterLoc), E(n), g;
                  }
                },
                catch: function (e) {
                  for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.tryLoc === e) {
                      var r = n.completion;
                      if ("throw" === r.type) {
                        var i = r.arg;
                        E(n);
                      }
                      return i;
                    }
                  }
                  throw new Error("illegal catch attempt");
                },
                delegateYield: function (e, n, r) {
                  return (
                    (this.delegate = {
                      iterator: I(e),
                      resultName: n,
                      nextLoc: r,
                    }),
                    "next" === this.method && (this.arg = t),
                    g
                  );
                },
              }),
              e
            );
          })(e.exports);
          try {
            regeneratorRuntime = t;
          } catch (e) {
            "object" == typeof globalThis
              ? (globalThis.regeneratorRuntime = t)
              : Function("r", "regeneratorRuntime = r")(t);
          }
        },
        4294: function (e, t, n) {
          "use strict";
          var r = n(7286),
            i = n(2680),
            o = n(9500),
            a = r("%TypeError%"),
            s = r("%WeakMap%", !0),
            c = r("%Map%", !0),
            u = i("WeakMap.prototype.get", !0),
            l = i("WeakMap.prototype.set", !0),
            d = i("WeakMap.prototype.has", !0),
            f = i("Map.prototype.get", !0),
            h = i("Map.prototype.set", !0),
            p = i("Map.prototype.has", !0),
            m = function (e, t) {
              for (var n, r = e; null !== (n = r.next); r = n)
                if (n.key === t)
                  return (r.next = n.next), (n.next = e.next), (e.next = n), n;
            };
          e.exports = function () {
            var e,
              t,
              n,
              r = {
                assert: function (e) {
                  if (!r.has(e))
                    throw new a("Side channel does not contain " + o(e));
                },
                get: function (r) {
                  if (
                    s &&
                    r &&
                    ("object" == typeof r || "function" == typeof r)
                  ) {
                    if (e) return u(e, r);
                  } else if (c) {
                    if (t) return f(t, r);
                  } else if (n)
                    return (function (e, t) {
                      var n = m(e, t);
                      return n && n.value;
                    })(n, r);
                },
                has: function (r) {
                  if (
                    s &&
                    r &&
                    ("object" == typeof r || "function" == typeof r)
                  ) {
                    if (e) return d(e, r);
                  } else if (c) {
                    if (t) return p(t, r);
                  } else if (n)
                    return (function (e, t) {
                      return !!m(e, t);
                    })(n, r);
                  return !1;
                },
                set: function (r, i) {
                  s && r && ("object" == typeof r || "function" == typeof r)
                    ? (e || (e = new s()), l(e, r, i))
                    : c
                    ? (t || (t = new c()), h(t, r, i))
                    : (n || (n = { key: {}, next: null }),
                      (function (e, t, n) {
                        var r = m(e, t);
                        r
                          ? (r.value = n)
                          : (e.next = { key: t, next: e.next, value: n });
                      })(n, r, i));
                },
              };
            return r;
          };
        },
        9841: function (e, t, n) {
          "use strict";
          n.d(t, {
            JR: function () {
              return i;
            },
            O1: function () {
              return l;
            },
            Ty: function () {
              return o;
            },
            Yt: function () {
              return r;
            },
            bf: function () {
              return f;
            },
            cD: function () {
              return c;
            },
            hz: function () {
              return h;
            },
            im: function () {
              return d;
            },
            jU: function () {
              return a;
            },
            v_: function () {
              return s;
            },
            w9: function () {
              return u;
            },
          });
          const r = ["after_sign_in_url", "after_sign_up_url", "redirect_url"],
            i = "clerk-db-jwt",
            o = "__dev_session",
            a = "Clerk-Cookie",
            s = "__clerk_modal_state",
            c = "__clerk_synced",
            u = "__clerk_satellite_url",
            l = {
              FORM_IDENTIFIER_NOT_FOUND: "form_identifier_not_found",
              FORM_PASSWORD_INCORRECT: "form_password_incorrect",
              INVALID_STRATEGY_FOR_USER: "strategy_for_user_invalid",
              NOT_ALLOWED_TO_SIGN_UP: "not_allowed_to_sign_up",
              OAUTH_ACCESS_DENIED: "oauth_access_denied",
              OAUTH_EMAIL_DOMAIN_RESERVED_BY_SAML:
                "oauth_email_domain_reserved_by_saml",
              NOT_ALLOWED_ACCESS: "not_allowed_access",
              SAML_USER_ATTRIBUTE_MISSING: "saml_user_attribute_missing",
              USER_LOCKED: "user_locked",
            },
            d = ["email_address", "phone_number", "username"],
            f = [
              "email_address",
              "phone_number",
              "username",
              "first_name",
              "last_name",
            ],
            h = 350;
        },
        361: function (e, t, n) {
          "use strict";
          n.d(t, {
            C: function () {
              return g;
            },
            Dg: function () {
              return a;
            },
            FI: function () {
              return x;
            },
            Fo: function () {
              return p;
            },
            G6: function () {
              return d;
            },
            HE: function () {
              return f;
            },
            O7: function () {
              return m;
            },
            Og: function () {
              return l;
            },
            Rz: function () {
              return y;
            },
            WC: function () {
              return b;
            },
            Ws: function () {
              return w;
            },
            Xp: function () {
              return o;
            },
            _5: function () {
              return P;
            },
            ag: function () {
              return u;
            },
            an: function () {
              return i;
            },
            cT: function () {
              return k;
            },
            k2: function () {
              return c;
            },
            lb: function () {
              return v;
            },
            qO: function () {
              return _;
            },
            qW: function () {
              return O;
            },
            rn: function () {
              return h;
            },
            sY: function () {
              return U;
            },
            xZ: function () {
              return S;
            },
            yI: function () {
              return s;
            },
          });
          const r = "ClerkJS:";
          function i(e, t) {
            throw new Error(
              `${r} Network error at "${e}" - ${t}. Please try again.`
            );
          }
          function o() {
            throw new Error(`${r} Something went wrong initializing Clerk.`);
          }
          function a(e) {
            throw new Error(
              `${r} Something went wrong initializing Clerk in development mode${
                e && ` - ${e}`
              }.`
            );
          }
          function s(e) {
            throw new Error(
              `${r} Missing path option. The ${e} component was mounted with path routing so you need to specify the path where the component is mounted on e.g. path="/sign-in".`
            );
          }
          function c(e) {
            throw new Error(
              `${r} You must wrap your application in a <${e}> component.`
            );
          }
          function u() {
            throw new Error(
              `${r} User is undefined. Try wrapping your component with \`withUserGuard\``
            );
          }
          function l() {
            throw new Error(
              `${r} Session is undefined. Try wrapping your component with \`withUserGuard\``
            );
          }
          function d() {
            throw new Error(`${r} Clerk is undefined`);
          }
          function f() {
            throw new Error(
              `${r} The target element is empty. Provide a valid DOM element.`
            );
          }
          function h() {
            throw new Error(`${r} Missing FAPI client in resources.`);
          }
          function p(e) {
            throw new Error(`${r} Token refresh failed (error='${e}')`);
          }
          function m(e) {
            throw new Error(
              `${r} Something went wrong initializing Clerk during the ${e} flow. Please contact support.`
            );
          }
          function g(e) {
            throw new Error(
              `${r} You need to start a ${e} flow by calling ${e}.create() first.`
            );
          }
          function y(e, t) {
            throw new Error(
              `${r} Strategy "${t}" is not a valid strategy for ${e}.`
            );
          }
          function v(e) {
            throw new Error(
              `${r} You need to start a ${e} flow by calling ${e}.create({ identifier: 'your web3 wallet address' }) first`
            );
          }
          function b(e = "") {
            throw new Error(`${r} Missing '${e}' option`);
          }
          function w(e, t) {
            throw new Error(
              `${r} Response: ${
                e || 0
              } not supported yet.\nFor more information contact us at ${t}`
            );
          }
          function _() {
            throw new Error(
              `${r} Missing dev browser jwt. Please contact support.`
            );
          }
          function S() {
            throw new Error(
              `${r} Missing domain and proxyUrl. A satellite application needs to specify a domain or a proxyUrl.`
            );
          }
          function k() {
            throw new Error(
              `${r} The signInUrl needs to be on a different origin than your satellite application.`
            );
          }
          function P() {
            throw new Error(
              `${r} The signInUrl needs to have a absolute url format.`
            );
          }
          function O() {
            throw new Error(
              `${r} Missing signInUrl. A satellite application needs to specify the signInUrl for development instances.`
            );
          }
          function U() {
            throw new Error(
              `${r} Invalid redirect_url. A valid http or https url should be used for the redirection.`
            );
          }
          function x(e) {
            throw new Error(
              `${r} Unable to retrieve a third party script${e ? ` ${e}` : ""}.`
            );
          }
        },
        7084: function (e, t, n) {
          "use strict";
          n.d(t, {
            U: function () {
              return r;
            },
            Y: function () {
              return i;
            },
          });
          const r = { TokenUpdate: "token:update" },
            i = (() => {
              const e = new Map();
              return {
                on: (t, n) => {
                  var r;
                  e.get(t) || e.set(t, []),
                    null === (r = e.get(t)) || void 0 === r || r.push(n);
                },
                dispatch: (t, n) => {
                  (e.get(t) || []).forEach(
                    (e) => "function" == typeof e && e(n)
                  );
                },
                off: (t, n) => {
                  const r = e.get(t) || [];
                  r.length &&
                    (n &&
                      e.set(
                        t,
                        r.filter((e) => e !== n)
                      ),
                    e.set(t, []));
                },
              };
            })();
        },
        3351: function (e, t, n) {
          "use strict";
          n.d(t, {
            Z: function () {
              return u;
            },
          });
          var r = n(4096),
            i = n(9126),
            o = n.n(i),
            a = n(996),
            s = n(361);
          const c = (e, t, n, i) => ("key" === i ? (0, r.a1)(e) : t(e));
          function u(e) {
            const t = [],
              n = [];
            function i({
              method: t,
              path: n,
              sessionId: r,
              search: i,
              rotatingTokenNonce: a,
            }) {
              const s = new URLSearchParams(i);
              e.version && s.append("_clerk_js_version", e.version),
                a && s.append("rotating_token_nonce", a),
                "development" === e.instanceType &&
                  e.isSatellite &&
                  s.append("__domain", e.domain),
                t && "GET" !== t && "POST" !== t && s.append("_method", t),
                n &&
                  !n.startsWith("/client") &&
                  r &&
                  s.append("_clerk_session_id", r);
              const c = [...s.entries()].reduce(
                (e, [t, n]) => ((e[t] = n.includes(",") ? n.split(",") : n), e),
                {}
              );
              return o().stringify(c, {
                addQueryPrefix: !0,
                arrayFormat: "repeat",
              });
            }
            function u(t) {
              const { path: n, pathPrefix: r = "v1" } = t,
                { proxyUrl: o, domain: s, frontendApi: c, instanceType: u } = e,
                l = "production" === u ? s : "";
              if (o) {
                const e = new URL(o),
                  s = e.pathname.slice(1, e.pathname.length);
                return (0, a.KV)(
                  { base: e.origin, pathname: `${s}/${r}${n}`, search: i(t) },
                  { stringify: !1 }
                );
              }
              return (0, a.KV)(
                {
                  base: `https://${l || c}`,
                  pathname: `${r}${n}`,
                  search: i(t),
                },
                { stringify: !1 }
              );
            }
            return {
              buildEmailAddress: function (t) {
                return (0, a.aR)({ localPart: t, frontendApi: e.frontendApi });
              },
              buildUrl: u,
              onAfterResponse: function (e) {
                n.push(e);
              },
              onBeforeRequest: function (e) {
                t.push(e);
              },
              request: async function (i) {
                var a;
                let { method: l = "GET", body: d } = i;
                (i.url = u({
                  ...i,
                  sessionId:
                    null === (a = e.session) || void 0 === a ? void 0 : a.id,
                })),
                  i.headers || (i.headers = new Headers()),
                  "GET" === l ||
                    d instanceof FormData ||
                    i.headers.has("content-type") ||
                    i.headers.set(
                      "content-type",
                      "application/x-www-form-urlencoded"
                    ),
                  "application/x-www-form-urlencoded" ===
                    i.headers.get("content-type") &&
                    (i.body = o().stringify(d, { encoder: c, indices: !1 }));
                const f = await (async function (e) {
                    const n =
                      "undefined" != typeof window &&
                      window.__unstable__onBeforeRequest;
                    for await (const r of [n, ...t].filter((e) => e))
                      if (!1 === (await r(e))) return !1;
                    return !0;
                  })(i),
                  h = "GET" === l ? "GET" : "POST";
                let p;
                const m = i.url.toString(),
                  g = { ...i, credentials: "include", method: h };
                try {
                  if (f) {
                    const e = (0, r.TN)() ? 4 : 11;
                    p =
                      "GET" === h
                        ? await (0, r.$V)(() => fetch(m, g), {
                            firstDelay: 500,
                            maxDelay: 3e3,
                            shouldRetry: (t, n) => n < e,
                          })
                        : await fetch(m, g);
                  } else p = new Response("{}", i);
                } catch (e) {
                  (0, s.an)(m, e);
                }
                const y = await p.json(),
                  v = Object.assign(p, { payload: y });
                return (
                  await (async function (e, t) {
                    const r =
                      "undefined" != typeof window &&
                      window.__unstable__onAfterResponse;
                    for await (const i of [r, ...n].filter((e) => e))
                      if (!1 === (await i(e, t))) return !1;
                    return !0;
                  })(i, v),
                  v
                );
              },
            };
          }
        },
        187: function (e, t, n) {
          "use strict";
          n.d(t, {
            Tg: function () {
              return s;
            },
            i: function () {
              return o;
            },
            gO: function () {
              return w.gO;
            },
            w$: function () {
              return w.w$;
            },
            KU: function () {
              return d;
            },
            FF: function () {
              return f;
            },
            lR: function () {
              return p;
            },
            b5: function () {
              return g;
            },
            N: function () {
              return w.N;
            },
            _L: function () {
              return w._L;
            },
            qA: function () {
              return v;
            },
            z: function () {
              return O;
            },
            YN: function () {
              return U;
            },
            Ee: function () {
              return x;
            },
            Sj: function () {
              return w.Sj;
            },
            X1: function () {
              return w.X1;
            },
            cp: function () {
              return T;
            },
            $h: function () {
              return R;
            },
            fr: function () {
              return j;
            },
            wJ: function () {
              return N;
            },
            Bh: function () {
              return A;
            },
            VO: function () {
              return Z;
            },
            gt: function () {
              return L;
            },
            z_: function () {
              return G;
            },
            Ax: function () {
              return K;
            },
            cL: function () {
              return Y;
            },
            Mo: function () {
              return ne;
            },
            EJ: function () {
              return k;
            },
            GF: function () {
              return ie;
            },
            WU: function () {
              return re;
            },
            n5: function () {
              return se;
            },
            mt: function () {
              return Q;
            },
            ff: function () {
              return ce;
            },
            PG: function () {
              return a;
            },
            GX: function () {
              return S;
            },
            q2: function () {
              return ue;
            },
            kD: function () {
              return w.kD;
            },
            uX: function () {
              return w.uX;
            },
            sZ: function () {
              return w.sZ;
            },
            ZC: function () {
              return w.ZC;
            },
            nU: function () {
              return w.nU;
            },
          });
          var r = n(305),
            i = n(361);
          class o {
            constructor() {
              this.pathRoot = "";
            }
            static get fapiClient() {
              return o.clerk.getFapiClient();
            }
            static async _fetch(e, t = {}) {
              let n;
              o.fapiClient || (0, i.rn)();
              try {
                n = await o.fapiClient.request(e);
              } catch (e) {
                if ((0, r.af)()) throw e;
                return console.warn(e), null;
              }
              const { payload: a, status: s, statusText: c, headers: u } = n;
              if (u) {
                const e = u.get("x-country");
                this.clerk.__internal_setCountry(e ? e.toLowerCase() : null);
              }
              if (
                (("GET" !== e.method || t.forceUpdateClient) &&
                  this._updateClient(a),
                s >= 200 && s <= 299)
              )
                return a;
              if (
                (401 === s && (await o.clerk.handleUnauthenticated()), s >= 400)
              )
                throw new w.gO(c, {
                  data: null == a ? void 0 : a.errors,
                  status: s,
                });
              return null;
            }
            static _updateClient(e) {
              var t;
              if (!e) return;
              const n =
                e.client ||
                (null === (t = e.meta) || void 0 === t ? void 0 : t.client);
              n && o.clerk && o.clerk.updateClient(d.getInstance().fromJSON(n));
            }
            isNew() {
              return !this.id;
            }
            path(e) {
              const t = this.pathRoot;
              if (this.isNew()) return t;
              const n = t.replace(/[^/]$/, "$&/") + encodeURIComponent(this.id);
              return e ? n.replace(/[^/]$/, "$&/") + encodeURIComponent(e) : n;
            }
            async _baseGet(e = {}) {
              const t = await o._fetch(
                {
                  method: "GET",
                  path: this.path(),
                  rotatingTokenNonce: e.rotatingTokenNonce,
                  search: e.search,
                },
                e
              );
              return this.fromJSON((null == t ? void 0 : t.response) || t);
            }
            async _baseMutate({
              action: e,
              body: t,
              method: n = "POST",
              path: r,
            }) {
              const i = await o._fetch({
                method: n,
                path: r || this.path(e),
                body: t,
              });
              return this.fromJSON((null == i ? void 0 : i.response) || i);
            }
            async _basePost(e = {}) {
              return this._baseMutate({ ...e, method: "POST" });
            }
            async _basePut(e = {}) {
              return this._baseMutate({ ...e, method: "PUT" });
            }
            async _basePatch(e = {}) {
              return this._baseMutate({ ...e, method: "PATCH" });
            }
            async _baseDelete(e = {}) {
              await this._baseMutate({ ...e, method: "DELETE" });
            }
            async reload(e) {
              const { rotatingTokenNonce: t } = e || {};
              return this._baseGet({
                forceUpdateClient: !0,
                rotatingTokenNonce: t,
              });
            }
          }
          class a extends o {
            constructor(e) {
              super(),
                (this.id = void 0),
                (this.socialProviderStrategies = []),
                (this.authenticatableSocialStrategies = []),
                (this.web3FirstFactors = []),
                (this.enabledFirstFactorIdentifiers = []),
                this.fromJSON(e);
            }
            get instanceIsPasswordBased() {
              return (
                this.attributes.password.enabled &&
                this.attributes.password.required
              );
            }
            get hasValidAuthFactor() {
              return (
                this.attributes.email_address.enabled ||
                this.attributes.phone_number.enabled ||
                (this.attributes.password.required &&
                  this.attributes.username.required)
              );
            }
            fromJSON(e) {
              var t, n, r;
              return e
                ? ((this.social = e.social),
                  (this.saml = e.saml),
                  (this.attributes = Object.fromEntries(
                    Object.entries(e.attributes).map((e) => [
                      e[0],
                      { ...e[1], name: e[0] },
                    ])
                  )),
                  (this.actions = e.actions),
                  (this.signIn = e.sign_in),
                  (this.signUp = e.sign_up),
                  (this.passwordSettings = {
                    ...e.password_settings,
                    min_length: Math.max(
                      null === (t = null == e ? void 0 : e.password_settings) ||
                        void 0 === t
                        ? void 0
                        : t.min_length,
                      8
                    ),
                    max_length:
                      0 ===
                      (null ===
                        (n = null == e ? void 0 : e.password_settings) ||
                      void 0 === n
                        ? void 0
                        : n.max_length)
                        ? 72
                        : Math.min(
                            null ===
                              (r = null == e ? void 0 : e.password_settings) ||
                              void 0 === r
                              ? void 0
                              : r.max_length,
                            72
                          ),
                  }),
                  (this.socialProviderStrategies =
                    this.getSocialProviderStrategies(e.social)),
                  (this.authenticatableSocialStrategies =
                    this.getAuthenticatableSocialStrategies(e.social)),
                  (this.web3FirstFactors = this.getWeb3FirstFactors(
                    this.attributes
                  )),
                  (this.enabledFirstFactorIdentifiers =
                    this.getEnabledFirstFactorIdentifiers(this.attributes)),
                  this)
                : this;
            }
            getEnabledFirstFactorIdentifiers(e) {
              return e
                ? Object.entries(e)
                    .filter(
                      ([e, t]) =>
                        t.used_for_first_factor && !e.startsWith("web3")
                    )
                    .map(([e]) => e)
                : [];
            }
            getWeb3FirstFactors(e) {
              return e
                ? Object.entries(e)
                    .filter(
                      ([e, t]) =>
                        t.used_for_first_factor && e.startsWith("web3")
                    )
                    .map(([, e]) => e.first_factors)
                    .flat()
                : [];
            }
            getSocialProviderStrategies(e) {
              return e
                ? Object.entries(e)
                    .filter(([, e]) => e.enabled)
                    .map(([, e]) => e.strategy)
                    .sort()
                : [];
            }
            getAuthenticatableSocialStrategies(e) {
              return e
                ? Object.entries(e)
                    .filter(([, e]) => e.enabled && e.authenticatable)
                    .map(([, e]) => e.strategy)
                    .sort()
                : [];
            }
          }
          class s extends o {
            constructor(e) {
              super(), this.fromJSON(e);
            }
            fromJSON(e) {
              return (
                (this.singleSessionMode = !e || e.single_session_mode),
                (this.urlBasedSessionSyncing =
                  !!e && e.url_based_session_syncing),
                this
              );
            }
          }
          function c(e) {
            const t = new Date(e || new Date());
            return (n = t) instanceof Date && !isNaN(n.getTime())
              ? t
              : new Date();
            var n;
          }
          class u {
            static fromKey(e) {
              const [t, n, r = ""] = e.split("::");
              return new u(t, { audience: r, tokenId: n });
            }
            constructor(e, t) {
              (this.prefix = e),
                (this.data = t),
                (this.prefix = e),
                (this.data = t);
            }
            toKey() {
              const { tokenId: e, audience: t } = this.data;
              return [this.prefix, e, t || ""].join("::");
            }
          }
          const l = ((e = "clerk") => {
            const t = new Map();
            let n;
            return {
              get: (n, r = 10) => {
                const i = new u(e, n),
                  o = t.get(i.toKey());
                if (!o) return;
                const a = Math.floor(Date.now() / 1e3) - o.createdAt;
                if (!(o.expiresIn - a < (r || 1) + 5)) return o.entry;
                t.delete(i.toKey());
              },
              set: (r) => {
                const i = new u(e, {
                    audience: r.audience,
                    tokenId: r.tokenId,
                  }).toKey(),
                  o = { entry: r, createdAt: Math.floor(Date.now() / 1e3) },
                  a = () => {
                    t.get(i) === o && t.delete(i);
                  };
                r.tokenResolver
                  .then((e) => {
                    const t = e.jwt.claims.exp - e.jwt.claims.iat;
                    (o.expiresIn = t),
                      (n = setTimeout(a, 1e3 * t)),
                      "function" == typeof n.unref && n.unref();
                  })
                  .catch(() => {
                    a();
                  }),
                  t.set(i, o);
              },
              clear: () => {
                clearTimeout(n), t.clear();
              },
              size: () => t.size,
            };
          })();
          class d extends o {
            static getInstance() {
              return d.instance || (d.instance = new d()), d.instance;
            }
            static isClientResource(e) {
              return !!e && e instanceof d;
            }
            constructor(e = null) {
              super(),
                (this.pathRoot = "/client"),
                (this.sessions = []),
                (this.signUp = new ne()),
                (this.signIn = new Y()),
                (this.lastActiveSessionId = null),
                (this.createdAt = null),
                (this.updatedAt = null),
                this.fromJSON(e);
            }
            get signUpAttempt() {
              return this.signUp;
            }
            get signInAttempt() {
              return this.signIn;
            }
            get activeSessions() {
              return this.sessions.filter((e) => "active" === e.status);
            }
            create() {
              return this._basePut();
            }
            fetch() {
              return this._baseGet();
            }
            async destroy() {
              return this._baseDelete({ path: "/client" }).then(() => {
                l.clear(),
                  (this.sessions = []),
                  (this.signUp = new ne(null)),
                  (this.signIn = new Y(null)),
                  (this.lastActiveSessionId = null),
                  (this.createdAt = null),
                  (this.updatedAt = null);
              });
            }
            clearCache() {
              return this.sessions.forEach((e) => e.clearCache());
            }
            fromJSON(e) {
              return (
                e &&
                  ((this.id = e.id),
                  (this.sessions = (e.sessions || []).map((e) => new G(e))),
                  (this.signUp = new ne(e.sign_up)),
                  (this.signIn = new Y(e.sign_in)),
                  (this.lastActiveSessionId = e.last_active_session_id),
                  (this.createdAt = c(e.created_at)),
                  (this.updatedAt = c(e.updated_at))),
                this
              );
            }
            path() {
              return this.pathRoot;
            }
          }
          class f {
            constructor(e) {
              (this.object = ""), (this.deleted = !1), this.fromJSON(e);
            }
            fromJSON(e) {
              return e
                ? ((this.object = e.object),
                  (this.id = e.id),
                  (this.slug = e.slug),
                  (this.deleted = e.deleted),
                  this)
                : this;
            }
          }
          var h = n(5900);
          class p extends o {
            constructor(e) {
              super(), (this.captchaPublicKey = null), this.fromJSON(e);
            }
            fromJSON(e) {
              return e
                ? ((this.id = e.id),
                  (this.instanceEnvironmentType = e.instance_environment_type),
                  (this.applicationName = e.application_name),
                  (this.theme = e.theme),
                  (this.preferredSignInStrategy = e.preferred_sign_in_strategy),
                  (this.logoImageUrl = e.logo_image_url),
                  (this.faviconImageUrl = e.favicon_image_url),
                  (this.logoUrl = e.logo_url),
                  (this.faviconUrl = e.favicon_url),
                  (this.homeUrl = e.home_url),
                  (this.signInUrl = e.sign_in_url),
                  (this.signUpUrl = e.sign_up_url),
                  (this.userProfileUrl = e.user_profile_url),
                  (this.afterSignInUrl = e.after_sign_in_url),
                  (this.afterSignUpUrl = e.after_sign_up_url),
                  (this.afterSignOutOneUrl = e.after_sign_out_one_url),
                  (this.afterSignOutAllUrl = e.after_sign_out_all_url),
                  (this.afterSwitchSessionUrl = e.after_switch_session_url),
                  (this.branded = e.branded),
                  (this.captchaPublicKey = e.captcha_public_key),
                  (this.supportEmail = e.support_email || ""),
                  (this.clerkJSVersion = e.clerk_js_version),
                  (this.organizationProfileUrl = e.organization_profile_url),
                  (this.createOrganizationUrl = e.create_organization_url),
                  (this.afterLeaveOrganizationUrl =
                    e.after_leave_organization_url),
                  (this.afterCreateOrganizationUrl =
                    e.after_create_organization_url),
                  this)
                : this;
            }
          }
          (0, h.Mr)(p, "logoUrl", "Use `logoImageUrl` instead."),
            (0, h.Mr)(p, "faviconUrl", "Use `faviconImageUrl` instead.");
          var m = n(415);
          n(3733);
          class g extends o {
            constructor(e, t) {
              super(),
                (this.emailAddress = ""),
                (this.linkedTo = []),
                (this.prepareVerification = (e) =>
                  this._basePost({
                    action: "prepare_verification",
                    body: { ...e },
                  })),
                (this.attemptVerification = (e) => {
                  const { code: t } = e || {};
                  return this._basePost({
                    action: "attempt_verification",
                    body: { code: t },
                  });
                }),
                (this.createMagicLinkFlow = () => {
                  (0, h.x9)(
                    "createMagicLinkFlow",
                    "Use `createEmailLinkFlow` instead."
                  );
                  const { run: e, stop: t } = (0, m.Ww)();
                  return {
                    startMagicLinkFlow: async ({ redirectUrl: n }) => (
                      this.id || (0, i.C)("SignUp"),
                      await this.prepareVerification({
                        strategy: "email_link",
                        redirectUrl: n,
                      }),
                      new Promise((n, r) => {
                        e(() =>
                          this.reload()
                            .then((e) => {
                              "verified" === e.verification.status &&
                                (t(), n(e));
                            })
                            .catch((e) => {
                              t(), r(e);
                            })
                        );
                      })
                    ),
                    cancelMagicLinkFlow: t,
                  };
                }),
                (this.createEmailLinkFlow = () => {
                  const { run: e, stop: t } = (0, m.Ww)();
                  return {
                    startEmailLinkFlow: async ({ redirectUrl: n }) => (
                      this.id || (0, i.C)("SignUp"),
                      await this.prepareVerification({
                        strategy: "email_link",
                        redirectUrl: n,
                      }),
                      new Promise((n, r) => {
                        e(() =>
                          this.reload()
                            .then((e) => {
                              "verified" === e.verification.status &&
                                (t(), n(e));
                            })
                            .catch((e) => {
                              t(), r(e);
                            })
                        );
                      })
                    ),
                    cancelEmailLinkFlow: t,
                  };
                }),
                (this.destroy = () => this._baseDelete()),
                (this.toString = () => this.emailAddress),
                (this.pathRoot = t),
                this.fromJSON(e);
            }
            create() {
              return this._basePost({
                body: { email_address: this.emailAddress },
              });
            }
            fromJSON(e) {
              return e
                ? ((this.id = e.id),
                  (this.emailAddress = e.email_address),
                  (this.verification = new S(e.verification)),
                  (this.linkedTo = (e.linked_to || []).map((e) => new U(e))),
                  this)
                : this;
            }
          }
          class y extends o {
            constructor(e) {
              super(), this.fromJSON(e);
            }
            fromJSON(e) {
              const {
                enabled: t = !1,
                max_allowed_memberships: n = 0,
                actions: r,
                domains: i,
              } = e || {};
              return (
                (this.enabled = t),
                (this.maxAllowedMemberships = n),
                (this.actions = {
                  adminDelete: (null == r ? void 0 : r.admin_delete) || !1,
                }),
                (this.domains = {
                  enabled: (null == i ? void 0 : i.enabled) || !1,
                  enrollmentModes:
                    (null == i ? void 0 : i.enrollment_modes) || [],
                }),
                this
              );
            }
          }
          class v extends o {
            static getInstance() {
              return v.instance || (v.instance = new v()), v.instance;
            }
            constructor(e = null) {
              super(),
                (this.pathRoot = "/environment"),
                (this.isSingleSession = () =>
                  this.authConfig.singleSessionMode),
                (this.isProduction = () =>
                  "production" === this.displayConfig.instanceEnvironmentType),
                (this.isDevelopmentOrStaging = () => !this.isProduction()),
                (this.onWindowLocationHost = () =>
                  this.displayConfig.backendHost === window.location.host),
                this.fromJSON(e);
            }
            fetch({ touch: e = !1 }) {
              if (e) return this._basePatch({});
              const t = new URLSearchParams();
              if ("function" == typeof o.clerk.__internal_getFrameworkHint) {
                const { framework: e, version: n } =
                  o.clerk.__internal_getFrameworkHint();
                e &&
                  (t.append("__clerk_framework_hint", e),
                  n && t.append("__clerk_framework_version", n));
              }
              return this._baseGet({ search: t });
            }
            fromJSON(e) {
              return (
                e &&
                  ((this.authConfig = new s(e.auth_config)),
                  (this.displayConfig = new p(e.display_config)),
                  (this.userSettings = new a(e.user_settings)),
                  (this.organizationSettings = new y(e.organization_settings))),
                this
              );
            }
          }
          var b,
            w = n(221),
            _ = n(4096);
          class S extends o {
            constructor(e) {
              super(),
                (this.pathRoot = ""),
                (this.status = null),
                (this.strategy = null),
                (this.nonce = null),
                (this.externalVerificationRedirectURL = null),
                (this.attempts = null),
                (this.expireAt = null),
                (this.error = null),
                (this.verifiedAtClient = null),
                (this.verifiedFromTheSameClient = () => {
                  var e, t;
                  return (
                    this.verifiedAtClient ===
                    (null ===
                      (t =
                        null === (e = o.clerk) || void 0 === e
                          ? void 0
                          : e.client) || void 0 === t
                      ? void 0
                      : t.id)
                  );
                }),
                this.fromJSON(e);
            }
            fromJSON(e) {
              return (
                e &&
                  ((this.status = e.status),
                  (this.verifiedAtClient = e.verified_at_client),
                  (this.strategy = e.strategy),
                  (this.nonce = e.nonce || null),
                  e.external_verification_redirect_url
                    ? (this.externalVerificationRedirectURL = new URL(
                        e.external_verification_redirect_url
                      ))
                    : (this.externalVerificationRedirectURL = null),
                  (this.attempts = e.attempts),
                  (this.expireAt = c(e.expire_at)),
                  (this.error = e.error ? (0, w.nU)(e.error) : null)),
                this
              );
            }
          }
          class k {
            constructor(e) {
              e
                ? ((this.emailAddress = new P(e.email_address)),
                  (this.phoneNumber = new P(e.phone_number)),
                  (this.web3Wallet = new P(e.web3_wallet)),
                  (this.externalAccount = new S(e.external_account)))
                : ((this.emailAddress = new P(null)),
                  (this.phoneNumber = new P(null)),
                  (this.web3Wallet = new P(null)),
                  (this.externalAccount = new S(null)));
            }
          }
          class P extends S {
            constructor(e) {
              super(e),
                e
                  ? ((this.nextAction = e.next_action),
                    (this.supportedStrategies = e.supported_strategies))
                  : ((this.nextAction = ""), (this.supportedStrategies = []));
            }
          }
          class O extends o {
            constructor(e, t) {
              super(),
                (this.providerUserId = ""),
                (this.emailAddress = ""),
                (this.approvedScopes = ""),
                (this.firstName = ""),
                (this.lastName = ""),
                (this.avatarUrl = ""),
                (this.imageUrl = ""),
                (this.username = ""),
                (this.publicMetadata = {}),
                (this.label = ""),
                (this.verification = null),
                (this.reauthorize = (e) => {
                  const { additionalScopes: t, redirectUrl: n } = e || {};
                  return this._basePatch({
                    action: "reauthorize",
                    body: { additional_scope: t, redirect_url: n },
                  });
                }),
                (this.destroy = () => this._baseDelete()),
                (this.pathRoot = t),
                this.fromJSON(e);
            }
            fromJSON(e) {
              return e
                ? ((this.id = e.id),
                  (this.identificationId = e.identification_id),
                  (this.providerUserId = e.provider_user_id),
                  (this.approvedScopes = e.approved_scopes),
                  (this.avatarUrl = e.avatar_url),
                  (this.imageUrl = e.image_url),
                  (this.emailAddress = e.email_address),
                  (this.firstName = e.first_name),
                  (this.lastName = e.last_name),
                  (this.provider = (e.provider || "").replace("oauth_", "")),
                  (this.username = e.username),
                  (this.publicMetadata = e.public_metadata),
                  (this.label = e.label),
                  e.verification && (this.verification = new S(e.verification)),
                  this)
                : this;
            }
            providerSlug() {
              return this.provider;
            }
            providerTitle() {
              return [(0, _.up)(this.providerSlug()), "Account"].join(" ");
            }
            accountIdentifier() {
              return this.username || this.emailAddress || this.label;
            }
          }
          (0, _.Mr)(O, "avatarUrl", "Use `imageUrl` instead.");
          class U extends o {
            constructor(e) {
              super(), this.fromJSON(e);
            }
            fromJSON(e) {
              return e ? ((this.id = e.id), (this.type = e.type), this) : this;
            }
          }
          class x extends o {
            static async create(e, t = {}) {
              var n;
              let r,
                i = t;
              "string" == typeof t.file
                ? ((i = t.file),
                  (r = new Headers({
                    "Content-Type": "application/octet-stream",
                  })))
                : t.file && ((i = new FormData()), i.append("file", t.file));
              const a =
                null ===
                  (n = await o._fetch({
                    path: e,
                    method: "POST",
                    body: i,
                    headers: r,
                  })) || void 0 === n
                  ? void 0
                  : n.response;
              return new x(a);
            }
            static async delete(e) {
              var t;
              const n =
                null === (t = await o._fetch({ path: e, method: "DELETE" })) ||
                void 0 === t
                  ? void 0
                  : t.response;
              return new x(n);
            }
            constructor(e) {
              super(),
                (this.name = null),
                (this.publicUrl = null),
                this.fromJSON(e);
            }
            fromJSON(e) {
              return e
                ? ((this.id = e.id),
                  (this.name = e.name),
                  (this.publicUrl = e.public_url),
                  this)
                : this;
            }
          }
          class A extends o {
            constructor(e, t) {
              super(),
                (this.phoneNumber = ""),
                (this.reservedForSecondFactor = !1),
                (this.defaultSecondFactor = !1),
                (this.linkedTo = []),
                (this.create = () =>
                  this._basePost({ body: { phone_number: this.phoneNumber } })),
                (this.prepareVerification = () =>
                  this._basePost({
                    action: "prepare_verification",
                    body: { strategy: "phone_code" },
                  })),
                (this.attemptVerification = (e) => {
                  const { code: t } = e || {};
                  return this._basePost({
                    action: "attempt_verification",
                    body: { code: t },
                  });
                }),
                (this.setReservedForSecondFactor = (e) => {
                  const { reserved: t } = e || {};
                  return this._basePatch({
                    body: { reserved_for_second_factor: t },
                  });
                }),
                (this.makeDefaultSecondFactor = () =>
                  this._basePatch({ body: { default_second_factor: !0 } })),
                (this.destroy = () => this._baseDelete()),
                (this.toString = () => {
                  const e = this.phoneNumber.match(/^(\d{3})(\d{3})(\d{4})$/);
                  return e
                    ? "(" + e[1] + ") " + e[2] + "-" + e[3]
                    : this.phoneNumber;
                }),
                (this.pathRoot = t),
                this.fromJSON(e);
            }
            fromJSON(e) {
              return e
                ? ((this.id = e.id),
                  (this.phoneNumber = e.phone_number),
                  (this.reservedForSecondFactor = e.reserved_for_second_factor),
                  (this.defaultSecondFactor = e.default_second_factor),
                  (this.verification = new S(e.verification)),
                  (this.linkedTo = (e.linked_to || []).map((e) => new U(e))),
                  (this.backupCodes = e.backup_codes),
                  this)
                : this;
            }
          }
          function E(e) {
            const { pageSize: t, initialPage: n, ...r } = e || {},
              i = null != t ? t : 10,
              o = null != n ? n : 1;
            return {
              ...((a = r),
              Object.keys(a).reduce(
                (e, t) => (void 0 !== a[t] && (e[t] = a[t]), e),
                {}
              )),
              limit: i,
              offset: (o - 1) * i,
            };
            var a;
          }
          class C extends o {
            constructor(e) {
              super(),
                (this.prepareAffiliationVerification = async (e) =>
                  this._basePost({
                    path: `/organizations/${this.organizationId}/domains/${this.id}/prepare_affiliation_verification`,
                    method: "POST",
                    body: e,
                  })),
                (this.attemptAffiliationVerification = async (e) =>
                  this._basePost({
                    path: `/organizations/${this.organizationId}/domains/${this.id}/attempt_affiliation_verification`,
                    method: "POST",
                    body: e,
                  })),
                (this.updateEnrollmentMode = (e) =>
                  this._basePost({
                    path: `/organizations/${this.organizationId}/domains/${this.id}/update_enrollment_mode`,
                    body: e,
                  })),
                (this.delete = () =>
                  this._baseDelete({
                    path: `/organizations/${this.organizationId}/domains/${this.id}`,
                  })),
                this.fromJSON(e);
            }
            static async create(e, { name: t }) {
              var n;
              const r =
                null ===
                  (n = await o._fetch({
                    path: `/organizations/${e}/domains`,
                    method: "POST",
                    body: { name: t },
                  })) || void 0 === n
                  ? void 0
                  : n.response;
              return new C(r);
            }
            fromJSON(e) {
              return (
                e &&
                  ((this.id = e.id),
                  (this.name = e.name),
                  (this.organizationId = e.organization_id),
                  (this.enrollmentMode = e.enrollment_mode),
                  (this.affiliationEmailAddress = e.affiliation_email_address),
                  (this.totalPendingSuggestions = e.total_pending_suggestions),
                  (this.totalPendingInvitations = e.total_pending_invitations),
                  e.verification
                    ? (this.verification = {
                        status: e.verification.status,
                        strategy: e.verification.strategy,
                        attempts: e.verification.attempts,
                        expiresAt: c(e.verification.expires_at),
                      })
                    : (this.verification = null)),
                this
              );
            }
          }
          class I extends o {
            constructor(e) {
              super(),
                (this.accept = async () =>
                  await this._basePost({
                    path: `/organizations/${this.organizationId}/membership_requests/${this.id}/accept`,
                  })),
                (this.reject = async () =>
                  await this._basePost({
                    path: `/organizations/${this.organizationId}/membership_requests/${this.id}/reject`,
                  })),
                this.fromJSON(e);
            }
            fromJSON(e) {
              return (
                e &&
                  ((this.id = e.id),
                  (this.organizationId = e.organization_id),
                  (this.status = e.status),
                  (this.createdAt = c(e.created_at)),
                  (this.updatedAt = c(e.updated_at)),
                  e.public_user_data &&
                    (this.publicUserData = new Z(e.public_user_data))),
                this
              );
            }
          }
          class M extends o {
            constructor(e) {
              super(), this.fromJSON(e);
            }
            fromJSON(e) {
              return e
                ? ((this.id = e.id),
                  (this.key = e.key),
                  (this.name = e.name),
                  (this.description = e.description),
                  (this.type = e.type),
                  (this.createdAt = c(e.created_at)),
                  (this.updatedAt = c(e.updated_at)),
                  this)
                : this;
            }
          }
          class z extends o {
            constructor(e) {
              super(), (this.permissions = []), this.fromJSON(e);
            }
            fromJSON(e) {
              return e
                ? ((this.id = e.id),
                  (this.key = e.key),
                  (this.name = e.name),
                  (this.description = e.description),
                  (this.permissions = e.permissions.map((e) => new M(e))),
                  (this.createdAt = c(e.created_at)),
                  (this.updatedAt = c(e.updated_at)),
                  this)
                : this;
            }
          }
          class T extends o {
            constructor(e) {
              super(),
                (this.pathRoot = "/organizations"),
                (this.publicMetadata = {}),
                (this.membersCount = 0),
                (this.pendingInvitationsCount = 0),
                (this.update = async (e) => this._basePatch({ body: e })),
                (this.getRoles = async (e) =>
                  await o
                    ._fetch(
                      {
                        path: `/organizations/${this.id}/roles`,
                        method: "GET",
                        search: E(e),
                      },
                      { forceUpdateClient: !0 }
                    )
                    .then((e) => {
                      const { data: t, total_count: n } =
                        null == e ? void 0 : e.response;
                      return { total_count: n, data: t.map((e) => new z(e)) };
                    })),
                (this.getDomains = async (e) =>
                  await o
                    ._fetch(
                      {
                        path: `/organizations/${this.id}/domains`,
                        method: "GET",
                        search: E(e),
                      },
                      { forceUpdateClient: !0 }
                    )
                    .then((e) => {
                      const { data: t, total_count: n } =
                        null == e ? void 0 : e.response;
                      return { total_count: n, data: t.map((e) => new C(e)) };
                    })
                    .catch(() => ({ total_count: 0, data: [] }))),
                (this.getDomain = async ({ domainId: e }) => {
                  var t;
                  const n =
                    null ===
                      (t = await o._fetch({
                        path: `/organizations/${this.id}/domains/${e}`,
                        method: "GET",
                      })) || void 0 === t
                      ? void 0
                      : t.response;
                  return new C(n);
                }),
                (this.getMembershipRequests = async (e) =>
                  await o
                    ._fetch({
                      path: `/organizations/${this.id}/membership_requests`,
                      method: "GET",
                      search: E(e),
                    })
                    .then((e) => {
                      const { data: t, total_count: n } =
                        null == e ? void 0 : e.response;
                      return { total_count: n, data: t.map((e) => new I(e)) };
                    })
                    .catch(() => ({ total_count: 0, data: [] }))),
                (this.createDomain = async (e) =>
                  C.create(this.id, { name: e })),
                (this.getMemberships = async (e) => {
                  const t = void 0 === e || !(null == e ? void 0 : e.paginated);
                  return (
                    (null == e ? void 0 : e.limit) &&
                      (0, h.x9)(
                        "limit",
                        "Use `pageSize` instead in Organization.getMemberships.",
                        "organization:getMemberships:limit"
                      ),
                    (null == e ? void 0 : e.offset) &&
                      (0, h.x9)(
                        "offset",
                        "Use `initialPage` instead in Organization.limit.",
                        "organization:getMemberships:offset"
                      ),
                    await o
                      ._fetch(
                        {
                          path: `/organizations/${this.id}/memberships`,
                          method: "GET",
                          search: t ? e : E(e),
                        },
                        { forceUpdateClient: !0 }
                      )
                      .then((e) => {
                        if (t)
                          return (null == e ? void 0 : e.response).map(
                            (e) => new j(e)
                          );
                        const { data: n, total_count: r } =
                          null == e ? void 0 : e.response;
                        return { total_count: r, data: n.map((e) => new j(e)) };
                      })
                      .catch(() => (t ? [] : { total_count: 0, data: [] }))
                  );
                }),
                (this.getPendingInvitations = async (e) => (
                  (0, h.x9)(
                    "getPendingInvitations",
                    "Use the `getInvitations` method instead."
                  ),
                  await o
                    ._fetch({
                      path: `/organizations/${this.id}/invitations/pending`,
                      method: "GET",
                      search: e,
                    })
                    .then((e) =>
                      (null == e ? void 0 : e.response).map((e) => new R(e))
                    )
                    .catch(() => [])
                )),
                (this.getInvitations = async (e) =>
                  await o
                    ._fetch(
                      {
                        path: `/organizations/${this.id}/invitations`,
                        method: "GET",
                        search: E(e),
                      },
                      { forceUpdateClient: !0 }
                    )
                    .then((e) => {
                      const { data: t, total_count: n } =
                        null == e ? void 0 : e.response;
                      return { total_count: n, data: t.map((e) => new R(e)) };
                    })
                    .catch(() => ({ total_count: 0, data: [] }))),
                (this.addMember = async ({ userId: e, role: t }) => {
                  const n = await o
                    ._fetch({
                      method: "POST",
                      path: `/organizations/${this.id}/memberships`,
                      body: { userId: e, role: t },
                    })
                    .then((e) => new j(null == e ? void 0 : e.response));
                  return j.clerk.__unstable__membershipUpdate(n), n;
                }),
                (this.inviteMember = async (e) => R.create(this.id, e)),
                (this.inviteMembers = async (e) => R.createBulk(this.id, e)),
                (this.updateMember = async ({ userId: e, role: t }) => {
                  const n = await o
                    ._fetch({
                      method: "PATCH",
                      path: `/organizations/${this.id}/memberships/${e}`,
                      body: { role: t },
                    })
                    .then((e) => new j(null == e ? void 0 : e.response));
                  return j.clerk.__unstable__membershipUpdate(n), n;
                }),
                (this.removeMember = async (e) => {
                  const t = await o
                    ._fetch({
                      method: "DELETE",
                      path: `/organizations/${this.id}/memberships/${e}`,
                    })
                    .then((e) => new j(null == e ? void 0 : e.response));
                  return j.clerk.__unstable__membershipUpdate(t), t;
                }),
                (this.destroy = async () => this._baseDelete()),
                (this.setLogo = async ({ file: e }) => {
                  if (null === e)
                    return await o
                      ._fetch({
                        path: `/organizations/${this.id}/logo`,
                        method: "DELETE",
                      })
                      .then((e) => new T(null == e ? void 0 : e.response));
                  let t, n;
                  return (
                    "string" == typeof e
                      ? ((t = e),
                        (n = new Headers({
                          "Content-Type": "application/octet-stream",
                        })))
                      : ((t = new FormData()), t.append("file", e)),
                    await o
                      ._fetch({
                        path: `/organizations/${this.id}/logo`,
                        method: "PUT",
                        body: t,
                        headers: n,
                      })
                      .then((e) => new T(null == e ? void 0 : e.response))
                  );
                }),
                this.fromJSON(e);
            }
            static async create(e) {
              var t;
              let n, r;
              "string" == typeof e
                ? ((n = e),
                  (0, h.x9)(
                    "create",
                    "Calling `create` with a string is deprecated. Use an object of type CreateOrganizationParams instead.",
                    "organization:create"
                  ))
                : ((n = e.name), (r = e.slug));
              const i =
                null ===
                  (t = await o._fetch({
                    path: "/organizations",
                    method: "POST",
                    body: { name: n, slug: r },
                  })) || void 0 === t
                  ? void 0
                  : t.response;
              return new T(i);
            }
            static async get(e) {
              var t;
              const n =
                null ===
                  (t = await o._fetch({
                    path: `/organizations/${e}`,
                    method: "GET",
                  })) || void 0 === t
                  ? void 0
                  : t.response;
              return new T(n);
            }
            fromJSON(e) {
              return e
                ? ((this.id = e.id),
                  (this.name = e.name),
                  (this.slug = e.slug),
                  (this.logoUrl = e.logo_url),
                  (this.imageUrl = e.image_url),
                  (this.hasImage = e.has_image),
                  (this.publicMetadata = e.public_metadata),
                  (this.membersCount = e.members_count),
                  (this.pendingInvitationsCount = e.pending_invitations_count),
                  (this.maxAllowedMemberships = e.max_allowed_memberships),
                  (this.adminDeleteEnabled = e.admin_delete_enabled),
                  (this.createdAt = c(e.created_at)),
                  (this.updatedAt = c(e.updated_at)),
                  this)
                : this;
            }
            async reload(e) {
              var t;
              const { rotatingTokenNonce: n } = e || {},
                r =
                  null ===
                    (t = await o._fetch(
                      {
                        path: `/organizations/${this.id}`,
                        method: "GET",
                        rotatingTokenNonce: n,
                      },
                      { forceUpdateClient: !0 }
                    )) || void 0 === t
                    ? void 0
                    : t.response;
              return this.fromJSON(r);
            }
          }
          (0, h.Mr)(T, "logoUrl", "Use `imageUrl` instead.");
          class R extends o {
            static async create(e, { emailAddress: t, role: n }) {
              var r;
              const i =
                  null ===
                    (r = await o._fetch({
                      path: `/organizations/${e}/invitations`,
                      method: "POST",
                      body: { email_address: t, role: n },
                    })) || void 0 === r
                    ? void 0
                    : r.response,
                a = new R(i);
              return this.clerk.__unstable__invitationUpdate(a), a;
            }
            static async createBulk(e, t) {
              var n;
              const { emailAddresses: r, role: i } = t;
              return (
                null ===
                  (n = await o._fetch({
                    path: `/organizations/${e}/invitations/bulk`,
                    method: "POST",
                    body: { email_address: r, role: i },
                  })) || void 0 === n
                  ? void 0
                  : n.response
              ).map((e) => new R(e));
            }
            constructor(e) {
              super(),
                (this.publicMetadata = {}),
                (this.revoke = async () => {
                  const e = await this._basePost({
                    path: `/organizations/${this.organizationId}/invitations/${this.id}/revoke`,
                  });
                  return R.clerk.__unstable__invitationUpdate(e), e;
                }),
                this.fromJSON(e);
            }
            fromJSON(e) {
              return (
                e &&
                  ((this.id = e.id),
                  (this.emailAddress = e.email_address),
                  (this.organizationId = e.organization_id),
                  (this.publicMetadata = e.public_metadata),
                  (this.role = e.role),
                  (this.status = e.status),
                  (this.createdAt = c(e.created_at)),
                  (this.updatedAt = c(e.updated_at))),
                this
              );
            }
          }
          class j extends o {
            constructor(e) {
              super(),
                (this.publicMetadata = {}),
                (this.permissions = []),
                (this.destroy = async () => {
                  const e = await this._baseDelete({
                    path: `/organizations/${this.organization.id}/memberships/${this.publicUserData.userId}`,
                  });
                  return b.clerk.__unstable__membershipUpdate(e), e;
                }),
                (this.update = async ({ role: e }) => {
                  const t = await this._basePatch({
                    path: `/organizations/${this.organization.id}/memberships/${this.publicUserData.userId}`,
                    body: { role: e },
                  });
                  return b.clerk.__unstable__membershipUpdate(t), t;
                }),
                this.fromJSON(e);
            }
            fromJSON(e) {
              return e
                ? ((this.id = e.id),
                  (this.organization = new T(e.organization)),
                  (this.publicMetadata = e.public_metadata),
                  e.public_user_data &&
                    (this.publicUserData = new Z(e.public_user_data)),
                  (this.permissions = Array.isArray(e.permissions)
                    ? [...e.permissions]
                    : []),
                  (this.role = e.role),
                  (this.createdAt = c(e.created_at)),
                  (this.updatedAt = c(e.updated_at)),
                  this)
                : this;
            }
            async reload(e) {
              const { rotatingTokenNonce: t } = e || {},
                n = await o._fetch(
                  {
                    method: "GET",
                    path: "/me/organization_memberships",
                    rotatingTokenNonce: t,
                  },
                  { forceUpdateClient: !0 }
                ),
                r = (null == n ? void 0 : n.response).find(
                  (e) => e.id === this.id
                );
              return this.fromJSON(r);
            }
          }
          (b = j),
            (j.retrieve = async (e) => {
              const t = void 0 === e || !(null == e ? void 0 : e.paginated);
              return (
                (null == e ? void 0 : e.limit) &&
                  (0, h.x9)(
                    "limit",
                    "Use `pageSize` instead in OrganizationMembership.retrieve.",
                    "organization-membership:limit"
                  ),
                (null == e ? void 0 : e.offset) &&
                  (0, h.x9)(
                    "offset",
                    "Use `initialPage` instead in OrganizationMembership.retrieve.",
                    "organization-membership:offset"
                  ),
                await o
                  ._fetch({
                    path: "/me/organization_memberships",
                    method: "GET",
                    search: t ? e : E(e),
                  })
                  .then((e) => {
                    if (t)
                      return (null == e ? void 0 : e.response).map(
                        (e) => new b(e)
                      );
                    const { data: n, total_count: r } =
                      null == e ? void 0 : e.response;
                    return { total_count: r, data: n.map((e) => new b(e)) };
                  })
                  .catch(() => (t ? [] : { total_count: 0, data: [] }))
              );
            });
          class N extends o {
            constructor(e) {
              super(),
                (this.accept = async () =>
                  await this._basePost({
                    path: `/me/organization_suggestions/${this.id}/accept`,
                  })),
                this.fromJSON(e);
            }
            static async retrieve(e) {
              return await o
                ._fetch({
                  path: "/me/organization_suggestions",
                  method: "GET",
                  search: E(e),
                })
                .then((e) => {
                  const { data: t, total_count: n } =
                    null == e ? void 0 : e.response;
                  return { total_count: n, data: t.map((e) => new N(e)) };
                })
                .catch(() => ({ total_count: 0, data: [] }));
            }
            fromJSON(e) {
              return (
                e &&
                  ((this.id = e.id),
                  (this.status = e.status),
                  (this.publicOrganizationData = {
                    hasImage: e.public_organization_data.has_image,
                    imageUrl: e.public_organization_data.image_url,
                    name: e.public_organization_data.name,
                    id: e.public_organization_data.id,
                    slug: e.public_organization_data.slug,
                  }),
                  (this.createdAt = c(e.created_at)),
                  (this.updatedAt = c(e.updated_at))),
                this
              );
            }
          }
          class L extends o {
            constructor(e, t) {
              super(),
                (this.provider = "saml_custom"),
                (this.providerUserId = null),
                (this.active = !1),
                (this.emailAddress = ""),
                (this.firstName = ""),
                (this.lastName = ""),
                (this.verification = null),
                (this.pathRoot = t),
                this.fromJSON(e);
            }
            fromJSON(e) {
              return e
                ? ((this.id = e.id),
                  (this.provider = e.provider),
                  (this.providerUserId = e.provider_user_id),
                  (this.active = e.active),
                  (this.emailAddress = e.email_address),
                  (this.firstName = e.first_name),
                  (this.lastName = e.last_name),
                  e.verification && (this.verification = new S(e.verification)),
                  this)
                : this;
            }
          }
          var $,
            F,
            W,
            D,
            V,
            B,
            J = n(7084),
            q = function (e, t, n, r) {
              if ("a" === n && !r)
                throw new TypeError(
                  "Private accessor was defined without a getter"
                );
              if ("function" == typeof t ? e !== t || !r : !t.has(e))
                throw new TypeError(
                  "Cannot read private member from an object whose class did not declare it"
                );
              return "m" === n
                ? r
                : "a" === n
                ? r.call(e)
                : r
                ? r.value
                : t.get(e);
            };
          class G extends o {
            static isSessionResource(e) {
              return !!e && e instanceof G;
            }
            constructor(e) {
              super(),
                $.add(this),
                (this.pathRoot = "/client/sessions"),
                (this.end = () => (
                  l.clear(), this._basePost({ action: "end" })
                )),
                (this.remove = () => (
                  l.clear(), this._basePost({ action: "remove" })
                )),
                (this.touch = () =>
                  this._basePost({
                    action: "touch",
                    body: {
                      active_organization_id: this.lastActiveOrganizationId,
                    },
                  })),
                (this.clearCache = () => l.clear()),
                (this.getToken = async (e) =>
                  (0, _.$V)(() => this._getToken(e), {
                    shouldRetry: (e, t) => !(0, w.ix)(e) && t < 4,
                  })),
                (this.checkAuthorization = (e) => {
                  if (!this.lastActiveOrganizationId || !this.user) return !1;
                  const t = (this.user.organizationMemberships || []).find(
                    (e) => e.organization.id === this.lastActiveOrganizationId
                  );
                  if (!t) return !1;
                  const n = t.permissions,
                    r = t.role;
                  return e.permission
                    ? n.includes(e.permission)
                    : !!e.role && r === e.role;
                }),
                F.set(this, (e) => {
                  e &&
                    (l.set({
                      tokenId: q(this, $, "m", W).call(this),
                      tokenResolver: Promise.resolve(e),
                    }),
                    J.Y.dispatch(J.U.TokenUpdate, { token: e }));
                }),
                D.set(this, (e) => !!e && e.startsWith("integration_")),
                V.set(this, (e) => (e || "").replace("integration_", "")),
                B.set(this, async (e) => {
                  const { template: t, leewayInSeconds: n } = e,
                    r = l.get({ tokenId: this.user.id, audience: t }, n);
                  if (r) return r.tokenResolver.then((e) => e.getRawString());
                  const i = re.create(this.user.pathRoot + "/tokens", {
                    service: q(this, V, "f").call(this, t),
                  });
                  return (
                    l.set({
                      tokenId: this.user.id,
                      audience: t,
                      tokenResolver: i,
                    }),
                    i.then(
                      (e) => (
                        J.Y.dispatch(J.U.TokenUpdate, { token: e }),
                        e.getRawString()
                      )
                    )
                  );
                }),
                this.fromJSON(e),
                q(this, F, "f").call(this, this.lastActiveToken);
            }
            fromJSON(e) {
              return e
                ? ((this.id = e.id),
                  (this.status = e.status),
                  (this.expireAt = c(e.expire_at)),
                  (this.abandonAt = c(e.abandon_at)),
                  (this.lastActiveAt = c(e.last_active_at)),
                  (this.lastActiveOrganizationId =
                    e.last_active_organization_id),
                  (this.actor = e.actor),
                  (this.createdAt = c(e.created_at)),
                  (this.updatedAt = c(e.updated_at)),
                  (this.user = new se(e.user)),
                  e.public_user_data &&
                    (this.publicUserData = new Z(e.public_user_data)),
                  (this.lastActiveToken = e.last_active_token
                    ? new re(e.last_active_token)
                    : null),
                  this)
                : this;
            }
            async _getToken(e) {
              if (!this.user) return null;
              const {
                leewayInSeconds: t,
                template: n,
                skipCache: r = !1,
              } = e || {};
              if (!n && Number(t) >= 60)
                throw new Error(
                  "Leeway can not exceed the token lifespan (60 seconds)"
                );
              if (q(this, D, "f").call(this, n))
                return q(this, B, "f").call(this, {
                  template: n,
                  leewayInSeconds: t,
                  skipCache: r,
                });
              const i = q(this, $, "m", W).call(this, n),
                o = r ? void 0 : l.get({ tokenId: i }, t);
              if (o) {
                const e = await o.tokenResolver.then((e) => e);
                return (
                  n || J.Y.dispatch(J.U.TokenUpdate, { token: e }),
                  e.getRawString()
                );
              }
              const a = n
                  ? `${this.path()}/tokens/${n}`
                  : `${this.path()}/tokens`,
                s = re.create(a);
              return (
                l.set({ tokenId: i, tokenResolver: s }),
                s.then(
                  (e) => (
                    n || J.Y.dispatch(J.U.TokenUpdate, { token: e }),
                    e.getRawString()
                  )
                )
              );
            }
          }
          (F = new WeakMap()),
            (D = new WeakMap()),
            (V = new WeakMap()),
            (B = new WeakMap()),
            ($ = new WeakSet()),
            (W = function (e) {
              return `${
                e ? `${this.id}-${e}` : this.id
              }-${this.updatedAt.getTime()}`;
            });
          class Z {
            constructor(e) {
              this.fromJSON(e);
            }
            fromJSON(e) {
              return (
                e &&
                  ((this.firstName = e.first_name),
                  (this.lastName = e.last_name),
                  (this.profileImageUrl = e.profile_image_url),
                  (this.imageUrl = e.image_url),
                  (this.hasImage = e.has_image),
                  (this.identifier = e.identifier),
                  (this.userId = e.user_id)),
                this
              );
            }
          }
          (0, h.Mr)(Z, "profileImageUrl", "Use `imageUrl` instead.");
          class K extends o {
            constructor(e, t) {
              super(),
                (this.pathRoot = ""),
                (this.pathRoot = t),
                this.fromJSON(e);
            }
            static retrieve() {
              var e;
              const t =
                null === (e = o.clerk.session) || void 0 === e ? void 0 : e.id;
              return this.clerk
                .getFapiClient()
                .request({
                  method: "GET",
                  path: "/me/sessions/active",
                  sessionId: t,
                })
                .then((e) => e.payload.map((e) => new K(e, "/me/sessions")))
                .catch(() => []);
            }
            revoke() {
              return this._basePost({ action: "revoke", body: {} });
            }
            fromJSON(e) {
              var t;
              return e
                ? ((this.id = e.id),
                  (this.status = e.status),
                  (this.expireAt = c(e.expire_at)),
                  (this.abandonAt = c(e.abandon_at)),
                  (this.lastActiveAt = c(e.last_active_at)),
                  (this.latestActivity = ((e) => ({
                    id: e.id,
                    deviceType: e.device_type,
                    browserName: e.browser_name,
                    browserVersion: e.browser_version,
                    country: e.country,
                    city: e.city,
                    isMobile: e.is_mobile,
                    ipAddress: e.ip_address,
                  }))(
                    null !== (t = e.latest_activity) && void 0 !== t ? t : {}
                  )),
                  (this.actor = e.actor),
                  this)
                : this;
            }
          }
          var H = n(996),
            X = n(2469);
          class Y extends o {
            constructor(e = null) {
              super(),
                (this.pathRoot = "/client/sign_ins"),
                (this.status = null),
                (this.supportedIdentifiers = []),
                (this.supportedFirstFactors = []),
                (this.supportedSecondFactors = []),
                (this.firstFactorVerification = new S(null)),
                (this.secondFactorVerification = new S(null)),
                (this.identifier = null),
                (this.createdSessionId = null),
                (this.create = (e) =>
                  this._basePost({ path: this.pathRoot, body: e })),
                (this.resetPassword = (e) =>
                  this._basePost({ body: e, action: "reset_password" })),
                (this.prepareFirstFactor = (e) => {
                  let t;
                  switch (e.strategy) {
                    case "email_link":
                      t = {
                        emailAddressId: e.emailAddressId,
                        redirectUrl: e.redirectUrl,
                      };
                      break;
                    case "email_code":
                    case "reset_password_email_code":
                      t = { emailAddressId: e.emailAddressId };
                      break;
                    case "phone_code":
                      t = {
                        phoneNumberId: e.phoneNumberId,
                        default: e.default,
                      };
                      break;
                    case "web3_metamask_signature":
                      t = { web3WalletId: e.web3WalletId };
                      break;
                    case "reset_password_phone_code":
                      t = { phoneNumberId: e.phoneNumberId };
                      break;
                    case "saml":
                      t = {
                        redirectUrl: e.redirectUrl,
                        actionCompleteRedirectUrl: e.actionCompleteRedirectUrl,
                      };
                      break;
                    default:
                      (0, i.Rz)("SignIn.prepareFirstFactor", e.strategy);
                  }
                  return this._basePost({
                    body: { ...t, strategy: e.strategy },
                    action: "prepare_first_factor",
                  });
                }),
                (this.attemptFirstFactor = (e) =>
                  this._basePost({ body: e, action: "attempt_first_factor" })),
                (this.createMagicLinkFlow = () => {
                  (0, _.x9)(
                    "createMagicLinkFlow",
                    "Use `createEmailLinkFlow` instead."
                  );
                  const { run: e, stop: t } = (0, _.Ww)();
                  return {
                    startMagicLinkFlow: async ({
                      emailAddressId: n,
                      redirectUrl: r,
                    }) => (
                      this.id || (0, i.C)("SignIn"),
                      await this.prepareFirstFactor({
                        strategy: "email_link",
                        emailAddressId: n,
                        redirectUrl: r,
                      }),
                      new Promise((n, r) => {
                        e(() =>
                          this.reload()
                            .then((e) => {
                              const r = e.firstFactorVerification.status;
                              ("verified" !== r && "expired" !== r) ||
                                (t(), n(e));
                            })
                            .catch((e) => {
                              t(), r(e);
                            })
                        );
                      })
                    ),
                    cancelMagicLinkFlow: t,
                  };
                }),
                (this.createEmailLinkFlow = () => {
                  const { run: e, stop: t } = (0, _.Ww)();
                  return {
                    startEmailLinkFlow: async ({
                      emailAddressId: n,
                      redirectUrl: r,
                    }) => (
                      this.id || (0, i.C)("SignIn"),
                      await this.prepareFirstFactor({
                        strategy: "email_link",
                        emailAddressId: n,
                        redirectUrl: r,
                      }),
                      new Promise((n, r) => {
                        e(() =>
                          this.reload()
                            .then((e) => {
                              const r = e.firstFactorVerification.status;
                              ("verified" !== r && "expired" !== r) ||
                                (t(), n(e));
                            })
                            .catch((e) => {
                              t(), r(e);
                            })
                        );
                      })
                    ),
                    cancelEmailLinkFlow: t,
                  };
                }),
                (this.prepareSecondFactor = (e) =>
                  this._basePost({ body: e, action: "prepare_second_factor" })),
                (this.attemptSecondFactor = (e) =>
                  this._basePost({ body: e, action: "attempt_second_factor" })),
                (this.authenticateWithRedirect = async (e) => {
                  const {
                      strategy: t,
                      redirectUrl: n,
                      redirectUrlComplete: r,
                      identifier: o,
                    } = e || {},
                    { firstFactorVerification: a } =
                      "saml" === t && this.id
                        ? await this.prepareFirstFactor({
                            strategy: t,
                            redirectUrl: Y.clerk.buildUrlWithAuth(n),
                            actionCompleteRedirectUrl: r,
                          })
                        : await this.create({
                            strategy: t,
                            identifier: o,
                            redirectUrl: Y.clerk.buildUrlWithAuth(n),
                            actionCompleteRedirectUrl: r,
                          }),
                    { status: s, externalVerificationRedirectURL: c } = a;
                  "unverified" === s && c
                    ? (0, H.T7)(c)
                    : (0, i.Ws)(s, Y.fapiClient.buildEmailAddress("support"));
                }),
                (this.authenticateWithWeb3 = async (e) => {
                  const { identifier: t, generateSignature: n } = e || {};
                  "function" != typeof n && (0, i.WC)("generateSignature"),
                    await this.create({ identifier: t });
                  const r = this.supportedFirstFactors.find(
                    (e) => "web3_metamask_signature" === e.strategy
                  );
                  r || (0, i.lb)("SignIn"), await this.prepareFirstFactor(r);
                  const { nonce: o } = this.firstFactorVerification,
                    a = await n({ identifier: this.identifier, nonce: o });
                  return this.attemptFirstFactor({
                    signature: a,
                    strategy: "web3_metamask_signature",
                  });
                }),
                (this.authenticateWithMetamask = async () => {
                  const e = await (0, H.M8)();
                  return this.authenticateWithWeb3({
                    identifier: e,
                    generateSignature: H.wO,
                  });
                }),
                (this.validatePassword = (e, t) => {
                  var n, r;
                  if (
                    null === (n = Y.clerk.__unstable__environment) ||
                    void 0 === n
                      ? void 0
                      : n.userSettings.passwordSettings
                  )
                    return (0, X.z)({
                      ...(null === (r = Y.clerk.__unstable__environment) ||
                      void 0 === r
                        ? void 0
                        : r.userSettings.passwordSettings),
                      validatePassword: !0,
                    })(e, t);
                }),
                this.fromJSON(e);
            }
            fromJSON(e) {
              return (
                e &&
                  ((this.id = e.id),
                  (this.status = e.status),
                  (this.supportedIdentifiers = e.supported_identifiers),
                  (this.identifier = e.identifier),
                  (this.supportedFirstFactors = (0, _.aw)(
                    e.supported_first_factors
                  )),
                  (this.supportedSecondFactors = (0, _.aw)(
                    e.supported_second_factors
                  )),
                  (this.firstFactorVerification = new S(
                    e.first_factor_verification
                  )),
                  (this.secondFactorVerification = new S(
                    e.second_factor_verification
                  )),
                  (this.createdSessionId = e.created_session_id),
                  (this.userData = new Q(e.user_data))),
                this
              );
            }
          }
          class Q {
            constructor(e) {
              this.fromJSON(e);
            }
            fromJSON(e) {
              return (
                e &&
                  ((this.firstName = e.first_name),
                  (this.lastName = e.last_name),
                  (this.profileImageUrl = e.profile_image_url),
                  (this.imageUrl = e.image_url),
                  (this.hasImage = e.has_image)),
                this
              );
            }
          }
          function ee(e) {
            const { unsafeMetadata: t } = { ...e },
              n = t ? ("object" == typeof t ? JSON.stringify(t) : t) : "";
            return { ...e, ...(t ? { unsafeMetadata: n } : {}) };
          }
          (0, h.Mr)(Q, "profileImageUrl", "Use `imageUrl` instead.");
          var te = n(3351);
          class ne extends o {
            constructor(e = null) {
              super(),
                (this.pathRoot = "/client/sign_ups"),
                (this.status = null),
                (this.requiredFields = []),
                (this.optionalFields = []),
                (this.missingFields = []),
                (this.unverifiedFields = []),
                (this.verifications = new k(null)),
                (this.username = null),
                (this.firstName = null),
                (this.lastName = null),
                (this.emailAddress = null),
                (this.phoneNumber = null),
                (this.web3wallet = null),
                (this.hasPassword = !1),
                (this.unsafeMetadata = {}),
                (this.createdSessionId = null),
                (this.createdUserId = null),
                (this.abandonAt = null),
                (this.create = async (e) => {
                  const t = e,
                    {
                      captchaSiteKey: n,
                      canUseCaptcha: r,
                      captchaURL: i,
                    } = ((e) => {
                      const t = e.__unstable__environment,
                        n = (0, te.Z)(e);
                      return {
                        captchaSiteKey: t
                          ? t.displayConfig.captchaPublicKey
                          : null,
                        canUseCaptcha: t
                          ? t.userSettings.signUp.captcha_enabled &&
                            e.isStandardBrowser &&
                            "production" === e.instanceType
                          : null,
                        captchaURL: n
                          .buildUrl({
                            path: "cloudflare/turnstile/v0/api.js",
                            pathPrefix: "",
                            search: "?render=explicit",
                          })
                          .toString(),
                      };
                    })(ne.clerk);
                  if (r && n && i)
                    try {
                      t.captchaToken = await (0, H.ky)({
                        siteKey: n,
                        scriptUrl: i,
                      });
                    } catch (e) {
                      if (!e.captchaError)
                        throw new w.w$(e.message, {
                          code: "captcha_unavailable",
                        });
                      t.captchaError = e.captchaError;
                    }
                  return this._basePost({ path: this.pathRoot, body: ee(t) });
                }),
                (this.prepareVerification = (e) =>
                  this._basePost({ body: e, action: "prepare_verification" })),
                (this.attemptVerification = (e) =>
                  this._basePost({ body: e, action: "attempt_verification" })),
                (this.prepareEmailAddressVerification = (e) =>
                  this.prepareVerification(e || { strategy: "email_code" })),
                (this.attemptEmailAddressVerification = (e) =>
                  this.attemptVerification({ ...e, strategy: "email_code" })),
                (this.createMagicLinkFlow = () => {
                  (0, _.x9)(
                    "createMagicLinkFlow",
                    "Use `createEmailLinkFlow` instead."
                  );
                  const { run: e, stop: t } = (0, _.Ww)();
                  return {
                    startMagicLinkFlow: async ({ redirectUrl: n }) => (
                      this.id || (0, i.C)("SignUp"),
                      await this.prepareEmailAddressVerification({
                        strategy: "email_link",
                        redirectUrl: n,
                      }),
                      new Promise((n, r) => {
                        e(() =>
                          this.reload()
                            .then((e) => {
                              const r = e.verifications.emailAddress.status;
                              ("verified" !== r && "expired" !== r) ||
                                (t(), n(e));
                            })
                            .catch((e) => {
                              t(), r(e);
                            })
                        );
                      })
                    ),
                    cancelMagicLinkFlow: t,
                  };
                }),
                (this.createEmailLinkFlow = () => {
                  const { run: e, stop: t } = (0, _.Ww)();
                  return {
                    startEmailLinkFlow: async ({ redirectUrl: n }) => (
                      this.id || (0, i.C)("SignUp"),
                      await this.prepareEmailAddressVerification({
                        strategy: "email_link",
                        redirectUrl: n,
                      }),
                      new Promise((n, r) => {
                        e(() =>
                          this.reload()
                            .then((e) => {
                              const r = e.verifications.emailAddress.status;
                              ("verified" !== r && "expired" !== r) ||
                                (t(), n(e));
                            })
                            .catch((e) => {
                              t(), r(e);
                            })
                        );
                      })
                    ),
                    cancelEmailLinkFlow: t,
                  };
                }),
                (this.preparePhoneNumberVerification = (e) =>
                  this.prepareVerification(e || { strategy: "phone_code" })),
                (this.attemptPhoneNumberVerification = (e) =>
                  this.attemptVerification({ ...e, strategy: "phone_code" })),
                (this.prepareWeb3WalletVerification = () =>
                  this.prepareVerification({
                    strategy: "web3_metamask_signature",
                  })),
                (this.attemptWeb3WalletVerification = async (e) => {
                  const { signature: t, generateSignature: n } = e || {};
                  if (
                    (n &&
                      (0, _.x9)(
                        "generateSignature",
                        "Use signature field instead."
                      ),
                    t)
                  )
                    return this.attemptVerification({
                      signature: t,
                      strategy: "web3_metamask_signature",
                    });
                  "function" != typeof n && (0, i.WC)("generateSignature");
                  const { nonce: r } = this.verifications.web3Wallet;
                  r || (0, i.lb)("SignUp");
                  const o = await n({ identifier: this.web3wallet, nonce: r });
                  return this.attemptVerification({
                    signature: o,
                    strategy: "web3_metamask_signature",
                  });
                }),
                (this.authenticateWithWeb3 = async (e) => {
                  const {
                      generateSignature: t,
                      identifier: n,
                      unsafeMetadata: r,
                    } = e || {},
                    o = n || this.web3wallet;
                  await this.create({ web3Wallet: o, unsafeMetadata: r }),
                    await this.prepareWeb3WalletVerification();
                  const { nonce: a } = this.verifications.web3Wallet;
                  a || (0, i.lb)("SignUp");
                  const s = await t({ identifier: n, nonce: a });
                  return this.attemptWeb3WalletVerification({ signature: s });
                }),
                (this.authenticateWithMetamask = async (e) => {
                  const t = await (0, H.M8)();
                  return this.authenticateWithWeb3({
                    identifier: t,
                    generateSignature: H.wO,
                    unsafeMetadata: null == e ? void 0 : e.unsafeMetadata,
                  });
                }),
                (this.authenticateWithRedirect = async ({
                  redirectUrl: e,
                  redirectUrlComplete: t,
                  strategy: n,
                  continueSignUp: r = !1,
                  unsafeMetadata: o,
                  emailAddress: a,
                }) => {
                  const { verifications: s } = await ((e) =>
                      r && this.id ? this.update(e) : this.create(e))({
                      strategy: n,
                      redirectUrl: ne.clerk.buildUrlWithAuth(e),
                      actionCompleteRedirectUrl: t,
                      unsafeMetadata: o,
                      emailAddress: a,
                    }),
                    { externalAccount: c } = s,
                    { status: u, externalVerificationRedirectURL: l } = c;
                  "unverified" === u && l
                    ? (0, H.T7)(l)
                    : (0, i.Ws)(u, ne.fapiClient.buildEmailAddress("support"));
                }),
                (this.update = (e) => this._basePatch({ body: ee(e) })),
                (this.validatePassword = (e, t) => {
                  var n, r;
                  if (
                    null === (n = ne.clerk.__unstable__environment) ||
                    void 0 === n
                      ? void 0
                      : n.userSettings.passwordSettings
                  )
                    return (0, X.z)({
                      ...(null === (r = ne.clerk.__unstable__environment) ||
                      void 0 === r
                        ? void 0
                        : r.userSettings.passwordSettings),
                      validatePassword: !0,
                    })(e, t);
                }),
                this.fromJSON(e);
            }
            fromJSON(e) {
              return (
                e &&
                  ((this.id = e.id),
                  (this.status = e.status),
                  (this.requiredFields = e.required_fields),
                  (this.optionalFields = e.optional_fields),
                  (this.missingFields = e.missing_fields),
                  (this.unverifiedFields = e.unverified_fields),
                  (this.verifications = new k(e.verifications)),
                  (this.username = e.username),
                  (this.firstName = e.first_name),
                  (this.lastName = e.last_name),
                  (this.emailAddress = e.email_address),
                  (this.phoneNumber = e.phone_number),
                  (this.hasPassword = e.has_password),
                  (this.unsafeMetadata = e.unsafe_metadata),
                  (this.createdSessionId = e.created_session_id),
                  (this.createdUserId = e.created_user_id),
                  (this.abandonAt = e.abandon_at),
                  (this.web3wallet = e.web3_wallet)),
                this
              );
            }
          }
          class re extends o {
            static async create(e, t = {}) {
              const n = await o._fetch({ path: e, method: "POST", body: t });
              return new re(n, e);
            }
            constructor(e, t) {
              super(),
                (this.pathRoot = "tokens"),
                (this.getRawString = () => {
                  var e;
                  return null === (e = this.jwt) || void 0 === e
                    ? void 0
                    : e.claims.__raw;
                }),
                t && (this.pathRoot = t),
                (this.jwt = (0, H.Jx)(e.jwt));
            }
            fromJSON(e) {
              return e ? ((this.jwt = (0, H.Jx)(e.jwt)), this) : this;
            }
          }
          class ie extends o {
            constructor(e) {
              super(),
                (this.pathRoot = "/me"),
                (this.id = ""),
                (this.verified = !1),
                (this.updatedAt = null),
                (this.createdAt = null),
                this.fromJSON(e);
            }
            fromJSON(e) {
              return e
                ? ((this.id = e.id),
                  (this.secret = e.secret),
                  (this.uri = e.uri),
                  (this.verified = e.verified),
                  (this.backupCodes = e.backup_codes),
                  (this.updatedAt = c(e.updated_at)),
                  (this.createdAt = c(e.created_at)),
                  this)
                : this;
            }
          }
          var oe = n(4016);
          class ae extends o {
            constructor(e) {
              super(),
                (this.pathRoot = "/me"),
                (this.codes = []),
                (this.updatedAt = null),
                (this.createdAt = null),
                this.fromJSON(e);
            }
            fromJSON(e) {
              return e
                ? ((this.id = e.id),
                  (this.codes = e.codes),
                  (this.updatedAt = c(e.updated_at)),
                  (this.createdAt = c(e.created_at)),
                  this)
                : this;
            }
          }
          class se extends o {
            static isUserResource(e) {
              return !!e && e instanceof se;
            }
            constructor(e) {
              super(),
                (this.pathRoot = "/me"),
                (this.id = ""),
                (this.externalId = null),
                (this.username = null),
                (this.emailAddresses = []),
                (this.phoneNumbers = []),
                (this.web3Wallets = []),
                (this.externalAccounts = []),
                (this.samlAccounts = []),
                (this.organizationMemberships = []),
                (this.passwordEnabled = !1),
                (this.firstName = null),
                (this.lastName = null),
                (this.fullName = null),
                (this.primaryEmailAddressId = null),
                (this.primaryEmailAddress = null),
                (this.primaryPhoneNumberId = null),
                (this.primaryPhoneNumber = null),
                (this.primaryWeb3WalletId = null),
                (this.primaryWeb3Wallet = null),
                (this.profileImageUrl = ""),
                (this.imageUrl = ""),
                (this.hasImage = !1),
                (this.twoFactorEnabled = !1),
                (this.totpEnabled = !1),
                (this.backupCodeEnabled = !1),
                (this.publicMetadata = {}),
                (this.unsafeMetadata = {}),
                (this.createOrganizationEnabled = !1),
                (this.deleteSelfEnabled = !1),
                (this.lastSignInAt = null),
                (this.updatedAt = null),
                (this.createdAt = null),
                (this.cachedSessionsWithActivities = null),
                (this.isPrimaryIdentification = (e) => {
                  switch (e.constructor) {
                    case g:
                      return this.primaryEmailAddressId === e.id;
                    case A:
                      return this.primaryPhoneNumberId === e.id;
                    case ue:
                      return this.primaryWeb3WalletId === e.id;
                    default:
                      return !1;
                  }
                }),
                (this.createEmailAddress = (e) => {
                  const { email: t } = e || {};
                  return new g(
                    { email_address: t },
                    this.path() + "/email_addresses/"
                  ).create();
                }),
                (this.createPhoneNumber = (e) => {
                  const { phoneNumber: t } = e || {};
                  return new A(
                    { phone_number: t },
                    this.path() + "/phone_numbers/"
                  ).create();
                }),
                (this.createWeb3Wallet = (e) => {
                  const { web3Wallet: t } = e || {};
                  return new ue(
                    { web3_wallet: t },
                    this.path() + "/web3_wallets/"
                  ).create();
                }),
                (this.createExternalAccount = async (e) => {
                  var t;
                  const {
                    strategy: n,
                    redirectUrl: r,
                    additionalScopes: i,
                    redirect_url: a,
                  } = e || {};
                  a && (0, h.x9)("redirect_url", "Use `redirectUrl` instead.");
                  const s =
                    null ===
                      (t = await o._fetch({
                        path: "/me/external_accounts",
                        method: "POST",
                        body: {
                          strategy: n,
                          redirect_url: r || a,
                          additional_scope: i,
                        },
                      })) || void 0 === t
                      ? void 0
                      : t.response;
                  return new O(s, this.path() + "/external_accounts");
                }),
                (this.createTOTP = async () => {
                  var e;
                  const t =
                    null ===
                      (e = await o._fetch({
                        path: "/me/totp",
                        method: "POST",
                      })) || void 0 === e
                      ? void 0
                      : e.response;
                  return new ie(t);
                }),
                (this.verifyTOTP = async ({ code: e }) => {
                  var t;
                  const n =
                    null ===
                      (t = await o._fetch({
                        path: "/me/totp/attempt_verification",
                        method: "POST",
                        body: { code: e },
                      })) || void 0 === t
                      ? void 0
                      : t.response;
                  return new ie(n);
                }),
                (this.disableTOTP = async () => {
                  var e;
                  const t =
                    null ===
                      (e = await o._fetch({
                        path: "/me/totp",
                        method: "DELETE",
                      })) || void 0 === e
                      ? void 0
                      : e.response;
                  return new f(t);
                }),
                (this.createBackupCode = async () => {
                  var e;
                  const t =
                    null ===
                      (e = await o._fetch({
                        path: this.path() + "/backup_codes/",
                        method: "POST",
                      })) || void 0 === e
                      ? void 0
                      : e.response;
                  return new ae(t);
                }),
                (this.update = (e) => (
                  e.password &&
                    (0, h.x9)(
                      "password",
                      "This will be removed in the next major version. Please use `updatePassword(params)` instead."
                    ),
                  this._basePatch({ body: ee(e) })
                )),
                (this.updatePassword = (e) =>
                  this._basePost({
                    body: e,
                    path: `${this.path()}/change_password`,
                  })),
                (this.removePassword = (e) =>
                  this._basePost({
                    body: e,
                    path: `${this.path()}/remove_password`,
                  })),
                (this.delete = () => this._baseDelete({ path: "/me" })),
                (this.getSessions = async () => {
                  if (this.cachedSessionsWithActivities)
                    return this.cachedSessionsWithActivities;
                  const e = await K.retrieve();
                  return (this.cachedSessionsWithActivities = e), e;
                }),
                (this.setProfileImage = (e) => {
                  const { file: t } = e || {};
                  return null === t
                    ? x.delete(`${this.path()}/profile_image`)
                    : x.create(`${this.path()}/profile_image`, { file: t });
                }),
                (this.getOrganizationInvitations = (e) => ce.retrieve(e)),
                (this.getOrganizationSuggestions = (e) => N.retrieve(e)),
                (this.getOrganizationMemberships = (e) => j.retrieve(e)),
                (this.leaveOrganization = async (e) => {
                  var t;
                  const n =
                    null ===
                      (t = await o._fetch({
                        path: `${this.path()}/organization_memberships/${e}`,
                        method: "DELETE",
                      })) || void 0 === t
                      ? void 0
                      : t.response;
                  return new f(n);
                }),
                this.fromJSON(e);
            }
            path() {
              return this.pathRoot;
            }
            get verifiedExternalAccounts() {
              return this.externalAccounts.filter((e) => {
                var t;
                return (
                  "verified" ==
                  (null === (t = e.verification) || void 0 === t
                    ? void 0
                    : t.status)
                );
              });
            }
            get unverifiedExternalAccounts() {
              return this.externalAccounts.filter((e) => {
                var t;
                return (
                  "verified" !=
                  (null === (t = e.verification) || void 0 === t
                    ? void 0
                    : t.status)
                );
              });
            }
            get hasVerifiedEmailAddress() {
              return (
                this.emailAddresses.filter(
                  (e) => "verified" === e.verification.status
                ).length > 0
              );
            }
            get hasVerifiedPhoneNumber() {
              return (
                this.phoneNumbers.filter(
                  (e) => "verified" === e.verification.status
                ).length > 0
              );
            }
            fromJSON(e) {
              return e
                ? ((this.id = e.id),
                  (this.externalId = e.external_id),
                  (this.firstName = e.first_name),
                  (this.lastName = e.last_name),
                  (this.firstName || this.lastName) &&
                    (this.fullName = (0, oe.Pp)({
                      firstName: this.firstName,
                      lastName: this.lastName,
                    })),
                  (this.profileImageUrl = e.profile_image_url),
                  (this.imageUrl = e.image_url),
                  (this.hasImage = e.has_image),
                  (this.username = e.username),
                  (this.passwordEnabled = e.password_enabled),
                  (this.emailAddresses = (e.email_addresses || []).map(
                    (e) => new g(e, this.path() + "/email_addresses")
                  )),
                  (this.primaryEmailAddressId = e.primary_email_address_id),
                  (this.primaryEmailAddress =
                    this.emailAddresses.find(
                      ({ id: e }) => e === this.primaryEmailAddressId
                    ) || null),
                  (this.phoneNumbers = (e.phone_numbers || []).map(
                    (e) => new A(e, this.path() + "/phone_numbers")
                  )),
                  (this.primaryPhoneNumberId = e.primary_phone_number_id),
                  (this.primaryPhoneNumber =
                    this.phoneNumbers.find(
                      ({ id: e }) => e === this.primaryPhoneNumberId
                    ) || null),
                  (this.web3Wallets = (e.web3_wallets || []).map(
                    (e) => new ue(e, this.path() + "/web3_wallets")
                  )),
                  (this.primaryWeb3WalletId = e.primary_web3_wallet_id),
                  (this.primaryWeb3Wallet =
                    this.web3Wallets.find(
                      ({ id: e }) => e === this.primaryWeb3WalletId
                    ) || null),
                  (this.externalAccounts = (e.external_accounts || []).map(
                    (e) => new O(e, this.path() + "/external_accounts")
                  )),
                  (this.organizationMemberships = (
                    e.organization_memberships || []
                  ).map((e) => new j(e))),
                  (this.samlAccounts = (e.saml_accounts || []).map(
                    (e) => new L(e, this.path() + "/saml_accounts")
                  )),
                  (this.publicMetadata = e.public_metadata),
                  (this.unsafeMetadata = e.unsafe_metadata),
                  (this.totpEnabled = e.totp_enabled),
                  (this.backupCodeEnabled = e.backup_code_enabled),
                  (this.twoFactorEnabled = e.two_factor_enabled),
                  (this.createOrganizationEnabled =
                    e.create_organization_enabled),
                  (this.deleteSelfEnabled = e.delete_self_enabled),
                  e.last_sign_in_at &&
                    (this.lastSignInAt = c(e.last_sign_in_at)),
                  (this.updatedAt = c(e.updated_at)),
                  (this.createdAt = c(e.created_at)),
                  this)
                : this;
            }
          }
          (0, h.Mr)(se, "profileImageUrl", "Use `imageUrl` instead.");
          class ce extends o {
            static async retrieve(e) {
              return await o
                ._fetch({
                  path: "/me/organization_invitations",
                  method: "GET",
                  search: E(e),
                })
                .then((e) => {
                  const { data: t, total_count: n } =
                    null == e ? void 0 : e.response;
                  return { total_count: n, data: t.map((e) => new ce(e)) };
                })
                .catch(() => ({ total_count: 0, data: [] }));
            }
            constructor(e) {
              super(),
                (this.publicMetadata = {}),
                (this.accept = async () =>
                  await this._basePost({
                    path: `/me/organization_invitations/${this.id}/accept`,
                  })),
                this.fromJSON(e);
            }
            fromJSON(e) {
              return (
                e &&
                  ((this.id = e.id),
                  (this.emailAddress = e.email_address),
                  (this.publicOrganizationData = {
                    hasImage: e.public_organization_data.has_image,
                    imageUrl: e.public_organization_data.image_url,
                    name: e.public_organization_data.name,
                    id: e.public_organization_data.id,
                    slug: e.public_organization_data.slug,
                  }),
                  (this.publicMetadata = e.public_metadata),
                  (this.role = e.role),
                  (this.status = e.status),
                  (this.createdAt = c(e.created_at)),
                  (this.updatedAt = c(e.updated_at))),
                this
              );
            }
          }
          class ue extends o {
            constructor(e, t) {
              super(),
                (this.web3Wallet = ""),
                (this.prepareVerification = (e) =>
                  this._basePost({
                    action: "prepare_verification",
                    body: { ...e },
                  })),
                (this.attemptVerification = (e) => {
                  const { signature: t, generateSignature: n } = e || {};
                  return (
                    n &&
                      (0, h.x9)(
                        "generateSignature",
                        "Use signature field instead."
                      ),
                    t
                      ? this._basePost({
                          action: "attempt_verification",
                          body: { signature: t },
                        })
                      : ("function" != typeof n &&
                          (0, i.WC)("generateSignature"),
                        (async () => {
                          "function" != typeof n &&
                            (0, i.WC)("generateSignature");
                          const { nonce: e } = this.verification;
                          e || (0, i.lb)("SignUp");
                          const t = await n({
                            identifier: this.web3Wallet,
                            nonce: e,
                          });
                          return this._basePost({
                            action: "attempt_verification",
                            body: { signature: t },
                          });
                        })())
                  );
                }),
                (this.pathRoot = t),
                this.fromJSON(e);
            }
            create() {
              return this._basePost({ body: { web3_wallet: this.web3Wallet } });
            }
            destroy() {
              return this._baseDelete();
            }
            toString() {
              return this.web3Wallet;
            }
            fromJSON(e) {
              return e
                ? ((this.id = e.id),
                  (this.web3Wallet = e.web3_wallet),
                  (this.verification = new S(e.verification)),
                  this)
                : this;
            }
          }
        },
        4850: function (e, t, n) {
          "use strict";
          n.d(t, {
            q: function () {
              return r;
            },
          });
          const r = {
            cannotRenderComponentWhenSessionExists:
              "The <SignUp/> and <SignIn/> components cannot render when a user is already signed in, unless the application allows multiple sessions. Since a user is signed in and this application only allows a single session, Clerk is redirecting to the Home URL instead.",
            cannotRenderComponentWhenUserDoesNotExist:
              "<UserProfile/> cannot render unless a user is signed in. Since no user is signed in, Clerk is redirecting to the Home URL instead. (This notice only appears in development.)",
            cannotRenderComponentWhenOrgDoesNotExist:
              "<OrganizationProfile/> cannot render unless an organization is active. Since no organization is currently active, Clerk is redirecting to the Home URL instead.",
            cannotOpenOrgProfile:
              "The OrganizationProfile cannot render unless an organization is active. Since no organization is currently active, this is no-op.",
            cannotOpenUserProfile:
              "The UserProfile modal cannot render unless a user is signed in. Since no user is signed in, this is no-op.",
            cannotOpenSignUpOrSignUp:
              "The SignIn or SignUp modals do not render when a user is already signed in, unless the application allows multiple sessions. Since a user is signed in and this application only allows a single session, this is no-op.",
          };
          for (const e of Object.keys(r))
            r[e] = `🔒 Clerk:\n${r[
              e
            ].trim()}\n(This notice only appears in development)`;
        },
        3859: function (e, t, n) {
          "use strict";
          n.d(t, {
            _: function () {
              return a;
            },
          });
          var r = n(2784),
            i = n(9841),
            o = n(996);
          const a = () => {
            const [e, t] = r.useState({
                startPath: "",
                path: "",
                componentName: "",
                socialProvider: "",
              }),
              n = (0, o.w$)();
            r.useLayoutEffect(() => {
              n && t(n);
            }, []);
            const a = () => {
              t({
                startPath: "",
                path: "",
                componentName: "",
                socialProvider: "",
              });
            };
            return {
              urlStateParam: { ...e, clearUrlStateParam: a },
              decodedRedirectParams: n,
              clearUrlStateParam: a,
              removeQueryParam: () => (0, o.xy)(i.v_),
            };
          };
        },
        6678: function (e, t, n) {
          "use strict";
          n.d(t, {
            v: function () {
              return r;
            },
          });
          const r = ({
            signUp: e,
            verifyEmailPath: t,
            verifyPhonePath: n,
            navigate: r,
            handleComplete: i,
            redirectUrl: o = "",
            redirectUrlComplete: a = "",
          }) => {
            var s, c;
            if ("complete" === e.status) return i && i();
            if ("missing_requirements" === e.status) {
              if (e.missingFields.some((e) => "saml" === e))
                return e.authenticateWithRedirect({
                  strategy: "saml",
                  redirectUrl: o,
                  redirectUrlComplete: a,
                  continueSignUp: !0,
                });
              if (
                (null === (s = e.unverifiedFields) || void 0 === s
                  ? void 0
                  : s.includes("email_address")) &&
                t
              )
                return r(t);
              if (
                (null === (c = e.unverifiedFields) || void 0 === c
                  ? void 0
                  : c.includes("phone_number")) &&
                n
              )
                return r(n);
            }
          };
        },
        6816: function (e, t, n) {
          "use strict";
          n.d(t, {
            XV: function () {
              return i;
            },
            xy: function () {
              return o;
            },
          });
          var r = n(9841);
          function i(e) {
            return new URL(window.location.href).searchParams.get(e) || null;
          }
          function o(e) {
            const t = new URL(window.location.href);
            t.searchParams.delete(e),
              window.history.replaceState(window.history.state, "", t);
          }
          r.cD, r.w9;
        },
        996: function (e, t, n) {
          "use strict";
          n.d(t, {
            ED: function () {
              return Y;
            },
            $s: function () {
              return u.$s;
            },
            bX: function () {
              return J;
            },
            LD: function () {
              return re;
            },
            aR: function () {
              return P;
            },
            KV: function () {
              return u.KV;
            },
            e1: function () {
              return V;
            },
            HV: function () {
              return i;
            },
            i2: function () {
              return _;
            },
            OY: function () {
              return S;
            },
            LM: function () {
              return F;
            },
            Jx: function () {
              return N;
            },
            eg: function () {
              return O;
            },
            RM: function () {
              return A;
            },
            wO: function () {
              return Q.w;
            },
            ky: function () {
              return ce;
            },
            XV: function () {
              return E.XV;
            },
            TG: function () {
              return k;
            },
            M8: function () {
              return Q.M;
            },
            vl: function () {
              return q.v;
            },
            l1: function () {
              return u.l1;
            },
            eT: function () {
              return u.eT;
            },
            BT: function () {
              return M;
            },
            oH: function () {
              return Z;
            },
            _f: function () {
              return G;
            },
            Jo: function () {
              return K;
            },
            pU: function () {
              return u.pU;
            },
            QO: function () {
              return oe;
            },
            u9: function () {
              return u.u9;
            },
            un: function () {
              return u.un;
            },
            VZ: function () {
              return x;
            },
            To: function () {
              return u.To;
            },
            jv: function () {
              return u.jv;
            },
            z9: function () {
              return u.z9;
            },
            n$: function () {
              return s;
            },
            f: function () {
              return a;
            },
            hb: function () {
              return u.hb;
            },
            pv: function () {
              return ne;
            },
            w$: function () {
              return B;
            },
            xy: function () {
              return E.xy;
            },
            WW: function () {
              return u.WW;
            },
            OR: function () {
              return W;
            },
            OZ: function () {
              return C;
            },
            So: function () {
              return o;
            },
            M: function () {
              return u.M;
            },
            lZ: function () {
              return u.lZ;
            },
            ju: function () {
              return u.ju;
            },
            Xn: function () {
              return u.Xn;
            },
            Os: function () {
              return u.Os;
            },
            oU: function () {
              return R;
            },
            T7: function () {
              return r.T;
            },
          });
          var r = n(196);
          const i = () => {
              let e = !1;
              const t = () => (e = !0);
              return {
                startTracking: () => {
                  window.addEventListener("beforeunload", t),
                    window.addEventListener(r.I, t);
                },
                stopTracking: () => {
                  window.removeEventListener("beforeunload", t),
                    window.removeEventListener(r.I, t);
                },
                isUnloading: () => e,
              };
            },
            o = (e, t) =>
              !(
                !e.session ||
                !(null == t ? void 0 : t.authConfig.singleSessionMode)
              ),
            a = (e) => !e.user,
            s = (e) => !e.organization;
          var c = n(4096),
            u = n(1808);
          function l(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) e[r] = n[r];
            }
            return e;
          }
          n(3733);
          var d = (function e(t, n) {
              function r(e, r, i) {
                if ("undefined" != typeof document) {
                  "number" == typeof (i = l({}, n, i)).expires &&
                    (i.expires = new Date(Date.now() + 864e5 * i.expires)),
                    i.expires && (i.expires = i.expires.toUTCString()),
                    (e = encodeURIComponent(e)
                      .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                      .replace(/[()]/g, escape));
                  var o = "";
                  for (var a in i)
                    i[a] &&
                      ((o += "; " + a),
                      !0 !== i[a] && (o += "=" + i[a].split(";")[0]));
                  return (document.cookie = e + "=" + t.write(r, e) + o);
                }
              }
              return Object.create(
                {
                  set: r,
                  get: function (e) {
                    if (
                      "undefined" != typeof document &&
                      (!arguments.length || e)
                    ) {
                      for (
                        var n = document.cookie
                            ? document.cookie.split("; ")
                            : [],
                          r = {},
                          i = 0;
                        i < n.length;
                        i++
                      ) {
                        var o = n[i].split("="),
                          a = o.slice(1).join("=");
                        try {
                          var s = decodeURIComponent(o[0]);
                          if (((r[s] = t.read(a, s)), e === s)) break;
                        } catch (e) {}
                      }
                      return e ? r[e] : r;
                    }
                  },
                  remove: function (e, t) {
                    r(e, "", l({}, t, { expires: -1 }));
                  },
                  withAttributes: function (t) {
                    return e(this.converter, l({}, this.attributes, t));
                  },
                  withConverter: function (t) {
                    return e(l({}, this.converter, t), this.attributes);
                  },
                },
                {
                  attributes: { value: Object.freeze(n) },
                  converter: { value: Object.freeze(t) },
                }
              );
            })(
              {
                read: function (e) {
                  return (
                    '"' === e[0] && (e = e.slice(1, -1)),
                    e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
                  );
                },
                write: function (e) {
                  return encodeURIComponent(e).replace(
                    /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
                    decodeURIComponent
                  );
                },
              },
              { path: "/" }
            ),
            f = d;
          function h(e) {
            return {
              get() {
                return f.get(e);
              },
              set(t, n = {}) {
                return f.set(e, t, n);
              },
              remove(t) {
                f.remove(e, t);
              },
            };
          }
          const p = h("__client"),
            m = h("__client_uat"),
            g = h(c.jt),
            y = h("__initted"),
            v = h("__session"),
            b = "Lax",
            w = "None",
            _ = () => {
              const e = p;
              return {
                getDevBrowserInittedCookie: () => y.get(),
                setDevBrowserInittedCookie: () =>
                  y.set("1", {
                    expires: (0, c.Bc)(Date.now(), 1),
                    sameSite: K() ? w : b,
                    secure: !!K() || void 0,
                    path: "/",
                  }),
                setSessionCookie: (e) => {
                  const t = (0, c.Bc)(Date.now(), 1),
                    n = K() ? w : b,
                    r = K() || "https:" === window.location.protocol;
                  return v.set(e, { expires: t, sameSite: n, secure: r });
                },
                getClientUatCookie: () => parseInt(m.get() || "0", 10),
                setClientUatCookie: (e) => {
                  const t = (0, c.Bc)(Date.now(), 1);
                  let n = "0";
                  return (
                    e &&
                      e.updatedAt &&
                      e.activeSessions.length > 0 &&
                      (n = Math.floor(e.updatedAt.getTime() / 1e3).toString()),
                    m.set(n, { expires: t, sameSite: "Strict", secure: !1 })
                  );
                },
                removeSessionCookie: () => v.remove(),
                removeAllDevBrowserCookies: () => {
                  y.remove({ path: "/" }),
                    (0, u.x_)().forEach((t) =>
                      e.remove({ domain: t, path: "/" })
                    );
                },
                setDevBrowserCookie: (e) => {
                  const t = (0, c.Bc)(Date.now(), 1),
                    n = b;
                  return g.set(e, { expires: t, sameSite: n, secure: !1 });
                },
                getDevBrowserCookie: () => g.get(),
                removeDevBrowserCookie: () => g.remove(),
              };
            },
            S =
              ({ regex: e }) =>
              ({ urlWithParam: t, entity: n }) => {
                const r = e.exec(t);
                if (r) {
                  const e = r[1];
                  if (e in n) {
                    const i = n[e];
                    return t.replace(r[0], i);
                  }
                }
                return t;
              };
          function k(e) {
            const t = new URL(e),
              n = (0, c.$x)(t),
              r = (0, c.c3)(t),
              i = n || r;
            return (
              i &&
                void 0 !== globalThis.history &&
                globalThis.history.replaceState(null, "", t.href),
              i
            );
          }
          function P({ localPart: e, frontendApi: t }) {
            return `${e}@${t ? t.replace("clerk.", "") : "clerk.dev"}`;
          }
          function O(e) {
            return n.g.btoa(e);
          }
          function U(e) {
            return (function (e) {
              return decodeURIComponent(
                n.g
                  .atob(e)
                  .split("")
                  .map(
                    (e) => "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
                  )
                  .join("")
              );
            })(e.replace(/_/g, "/").replace(/-/g, "+"));
          }
          function x(e, t = "") {
            return e.errors && !!e.errors.find((e) => e.code === t);
          }
          const A = (0, n(221).t5)({ packageName: "@clerk/clerk-js" });
          var E = n(6816);
          function C({ src: e, eventOrigin: t }) {
            return new Promise((n, r) => {
              const i = document.createElement("div");
              i.setAttribute(
                "style",
                "display: none; position: fixed; z-index: 2147483646; background-color: rgba(100,100,100,0.8); top: 0; left: 0; bottom: 0; right: 0;"
              );
              const o = document.createElement("iframe");
              (o.src = e),
                o.setAttribute(
                  "style",
                  "display: none; position: fixed; z-index: 2147483647; border-radius: 32px; width: 600px; height: 500px; left: 50%; top: 50%; transform: translate(-50%, -50%); border: 0; outline: 0; background-color: white; box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);"
                );
              const a = [
                "allow-same-origin",
                "allow-scripts",
                "allow-top-navigation",
              ];
              function s() {
                null == i || i.remove(),
                  null == o || o.remove(),
                  window.removeEventListener("message", c, !1);
              }
              function c(e) {
                e.origin == t &&
                  (e.data.error
                    ? (s(), r(e.data.error))
                    : e.data.showFrame
                    ? ((o.style.display = "block"), (i.style.display = "block"))
                    : (s(), n(e.data)));
              }
              "function" == typeof document.requestStorageAccess &&
                a.push("allow-storage-access-by-user-activation"),
                o.setAttribute("sandbox", a.join(" ")),
                window.addEventListener("message", c, !1),
                document.body.appendChild(i),
                document.body.appendChild(o);
            });
          }
          const I = (e) =>
            !!e &&
            "object" == typeof e &&
            "target" in e &&
            "currentTarget" in e &&
            "preventDefault" in e;
          function M(e, t = {}) {
            if (!((t.requireType && typeof e !== t.requireType) || I(e)))
              return e;
          }
          const z = /^clerk\.([\w|-]+\.){2,4}(dev|com)$/i,
            T = /^clerk(\.[A-Z0-9_-]{1,256}){2,}$/i;
          function R(e) {
            return !!e && ((0, u.un)(e) ? z.test(e) : T.test(e));
          }
          var j = n(5900);
          function N(e) {
            const t = (e || "").split("."),
              [n, r, i] = t;
            if (3 !== t.length || !n || !r || !i)
              throw new Error("JWT could not be decoded");
            const o = JSON.parse(U(r)),
              a = { __raw: e };
            Object.keys(o).forEach((e) => {
              a[e] = o[e];
            });
            const s = {
              encoded: { header: n, payload: r, signature: i },
              header: JSON.parse(U(n)),
              claims: a,
            };
            return (
              (0, j.x6)(
                s,
                "orgs",
                'Add orgs to your session token using the "user.organizations" shortcode in JWT Templates instead.',
                "decode:orgs"
              ),
              s
            );
          }
          var L = n(305);
          const $ = () => {},
            F = () => {
              if (!(0, L._f)()) return { isUnloading: $, onPageVisible: $ };
              const e = { "visibilitychange:visible": [] };
              return (
                document.addEventListener("visibilitychange", () => {
                  "visible" === document.visibilityState &&
                    e["visibilitychange:visible"].forEach((e) => e());
                }),
                {
                  onPageVisible: (t) => {
                    e["visibilitychange:visible"].push(t);
                  },
                }
              );
            };
          function W(e) {
            return "function" == typeof e ? e() : e;
          }
          n(5810);
          var D = n(9841);
          const V = ({ base: e, path: t }) => (t ? e + t : e),
            B = () => {
              var e;
              const t = null !== (e = (0, E.XV)(D.v_)) && void 0 !== e ? e : "";
              return t ? JSON.parse(atob(t)) : null;
            },
            J = ({
              url: e,
              startPath: t = "/user",
              currentPath: n = "",
              componentName: r,
              socialProvider: i = "",
            }) => {
              const o = {
                  path: n.replace(/CLERK-ROUTER\/VIRTUAL\/.*\//, "") || "",
                  componentName: r,
                  startPath: t,
                  socialProvider: i,
                },
                a = O(JSON.stringify(o)),
                s = new URL(e),
                c = s.searchParams;
              return c.set(D.v_, a), (s.search = c.toString()), s.toString();
            };
          var q = n(5616);
          function G() {
            return void 0 !== globalThis.document;
          }
          function Z() {
            return G() && globalThis.document.hasFocus();
          }
          function K() {
            return (
              G() &&
              window.self !== window.top &&
              !window.frameElement &&
              G() &&
              "https:" === window.location.protocol
            );
          }
          var H = n(1096),
            X = n.n(H);
          function Y(e) {
            const t = new (X())();
            return (
              window.addEventListener("beforeunload", async () => {
                await t.releaseLock(e);
              }),
              {
                acquireLockAndRun: async (n) => {
                  if (await t.acquireLock(e, 5e3))
                    try {
                      return await n();
                    } finally {
                      await t.releaseLock(e);
                    }
                },
              }
            );
          }
          var Q = n(8621),
            ee = n(9126),
            te = n.n(ee);
          const ne = (
              e,
              { ctx: t, queryParams: n, displayConfig: r, options: i },
              o = !0
            ) => {
              const a = (0, c.a1)(e),
                s = null == n ? void 0 : n[a],
                l = "string" == typeof s ? s : void 0,
                d =
                  o && "string" == typeof (null == n ? void 0 : n.redirect_url)
                    ? n.redirect_url
                    : void 0;
              let f;
              l && (0, u.F9)(l, null == i ? void 0 : i.allowedRedirectOrigins)
                ? (f = l)
                : d &&
                  (0, u.F9)(d, null == i ? void 0 : i.allowedRedirectOrigins) &&
                  (f = d);
              const h =
                f ||
                (null == t ? void 0 : t[e]) ||
                (o ? (null == t ? void 0 : t.redirectUrl) : void 0) ||
                (null == i ? void 0 : i[e]) ||
                (null == r ? void 0 : r[e]);
              return !(0, u.jv)(h, { includeRelativeUrls: !0 }) || (0, u.ne)(h)
                ? ""
                : h;
            },
            re = (e) => {
              const t = (t) => {
                  const n = e[t];
                  if (n && n !== e.displayConfig[t])
                    return n.startsWith("/") ? window.location.origin + n : n;
                },
                n = t("afterSignInUrl"),
                r = t("afterSignUpUrl"),
                i = {};
              return (
                n && n === r
                  ? (i.redirect_url = n)
                  : (r && (i.after_sign_up_url = r),
                    n && (i.after_sign_in_url = n)),
                0 === Object.keys(i).length ? null : te().stringify(i)
              );
            };
          var ie = n(3063);
          const oe = (e) => {
            if (
              (e || "").includes("gravatar") ||
              (e || "").includes("avatar_placeholder")
            )
              return !0;
            try {
              const t = new URL(e).pathname.replace("/", ""),
                n = (0, ie.S)(t);
              return "default" === JSON.parse(n).type;
            } catch {
              return !1;
            }
          };
          var ae = n(361);
          const se = "clerk-captcha";
          const ce = async (e) => {
            const { siteKey: t, scriptUrl: n } = e;
            let r = "",
              i = "";
            const o = document.createElement("div");
            o.classList.add(se), document.body.appendChild(o);
            const a = await (async function (e) {
              if (!window.turnstile)
                try {
                  await (async function (e = "", t) {
                    const {
                      async: n,
                      defer: r,
                      beforeLoad: i,
                      crossOrigin: o,
                    } = t || {};
                    return new Promise((t, a) => {
                      e || a("loadScript cannot be called without a src"),
                        (document && document.body) ||
                          a(
                            "loadScript cannot be called when document does not exist"
                          );
                      const s = document.createElement("script");
                      o && s.setAttribute("crossorigin", o),
                        (s.async = n || !1),
                        (s.defer = r || !1),
                        s.addEventListener("load", () => {
                          s.remove(), t(s);
                        }),
                        s.addEventListener("error", () => {
                          s.remove(), a();
                        }),
                        (s.src = e),
                        null == i || i(s),
                        document.body.appendChild(s);
                    });
                  })(e, { defer: !0 });
                } catch (e) {
                  (0, ae.FI)("Cloudflare Turnstile");
                }
              return window.turnstile;
            })(n);
            let s = 0;
            const c = [];
            try {
              ([r, i] = await new Promise((e, n) => {
                try {
                  const r = a.render(`.${se}`, {
                    sitekey: t,
                    retry: "never",
                    "refresh-expired": "auto",
                    callback: function (t) {
                      e([t, r]);
                    },
                    "error-callback": function (e) {
                      c.push(e),
                        s < 2 &&
                        ((e) =>
                          !![
                            "crashed",
                            "undefined_error",
                            "102",
                            "103",
                            "104",
                            "106",
                            "110600",
                            "300100",
                            "600",
                          ].find((t) => e.startsWith(t)))(e.toString())
                          ? setTimeout(() => {
                              a.reset(r), s++;
                            }, 250)
                          : n([c.join(","), r]);
                    },
                  });
                } catch (e) {
                  n([e, void 0]);
                }
              })),
                a.remove(i);
            } catch ([e, i]) {
              throw (i && a.remove(i), { captchaError: e });
            } finally {
              document.body.removeChild(o);
            }
            return r;
          };
        },
        2469: function (e, t, n) {
          "use strict";
          n.d(t, {
            z: function () {
              return i;
            },
          });
          var r = n(4096);
          const i = (e, t) => {
            const { onValidation: i = r.ZT, onValidationComplexity: o = r.ZT } =
                t || {},
              { show_zxcvbn: a, validatePassword: s } = e,
              c = (
                (e) => (t) =>
                  ((e, t) => {
                    const {
                        max_length: n,
                        min_length: r,
                        require_special_char: i,
                        require_lowercase: o,
                        require_numbers: a,
                        require_uppercase: s,
                      } = t,
                      c = ((e) => {
                        let t;
                        if (e.allowed_special_characters) {
                          let n = e.allowed_special_characters.replace(
                            "[",
                            "\\["
                          );
                          (n = n.replace("]", "\\]")),
                            (t = new RegExp(`[${n}]`));
                        } else t = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/;
                        return (e, { minLength: n, maxLength: r }) => ({
                          max_length: e.length < r,
                          min_length: e.length >= n,
                          require_numbers: /\d/.test(e),
                          require_lowercase: /[a-z]/.test(e),
                          require_uppercase: /[A-Z]/.test(e),
                          require_special_char: t.test(e),
                        });
                      })(t),
                      u = c(e, {
                        maxLength: t.max_length,
                        minLength: t.min_length,
                      }),
                      l = {
                        max_length: n,
                        min_length: r,
                        require_special_char: i,
                        require_lowercase: o,
                        require_numbers: a,
                        require_uppercase: s,
                      },
                      d = new Map();
                    for (const e in l) {
                      const t = e;
                      l[t] && (u[t] || d.set(t, !0));
                    }
                    return Object.freeze(Object.fromEntries(d));
                  })(t, e)
              )(e),
              u = (
                ({ min_zxcvbn_strength: e, onResult: t }) =>
                (n) =>
                (r) => {
                  const i = n(r);
                  return (
                    null == t || t(i),
                    i.score >= e && i.score < 3
                      ? {
                          state: "pass",
                          keys: ["unstable__errors.zxcvbn.couldBeStronger"],
                          result: i,
                        }
                      : i.score >= e
                      ? { state: "excellent", result: i }
                      : {
                          state: "fail",
                          keys: [
                            "unstable__errors.zxcvbn.notEnough",
                            ...i.feedback.suggestions.map(
                              (e) => `unstable__errors.zxcvbn.suggestions.${e}`
                            ),
                          ],
                          result: i,
                        }
                  );
                }
              )(e);
            let l = {};
            return (e, t) => {
              const { onValidation: r = i, onValidationComplexity: d = o } =
                t || {};
              if (!s) return;
              const f = c(e);
              d(0 === Object.keys(f).length),
                (l = { ...l, complexity: f }),
                a &&
                  Promise.all([
                    Promise.all([n.e(220), n.e(216)]).then(n.bind(n, 3502)),
                    n.e(804).then(n.bind(n, 5052)),
                  ])
                    .then(([e, t]) => {
                      const { zxcvbnOptions: n, zxcvbn: r } = e,
                        { dictionary: i, adjacencyGraphs: o } = t;
                      return (
                        n.setOptions({ dictionary: { ...i }, graphs: o }), r
                      );
                    })
                    .then((t) => {
                      const n = u(t)(e);
                      (l = { ...l, strength: n }), r({ ...l, strength: n });
                    }),
                (l.complexity && 0 === Object.keys(l.complexity).length && a) ||
                  r(l);
            };
          };
        },
        5810: function (e, t, n) {
          "use strict";
          n.d(t, {
            R: function () {
              return o;
            },
          });
          const r = "/",
            i = new RegExp(r + "{1,}", "g");
          function o(e, t) {
            return [e, t]
              .filter((e) => e)
              .join(r)
              .replace(i, r);
          }
        },
        5616: function (e, t, n) {
          "use strict";
          n.d(t, {
            v: function () {
              return o;
            },
          });
          var r = n(9126),
            i = n.n(r);
          const o = (e) => i().parse(e || "", { ignoreQueryPrefix: !0 });
        },
        1808: function (e, t, n) {
          "use strict";
          n.d(t, {
            $s: function () {
              return _;
            },
            KV: function () {
              return m;
            },
            x_: function () {
              return p;
            },
            ne: function () {
              return O;
            },
            l1: function () {
              return S;
            },
            eT: function () {
              return U;
            },
            F9: function () {
              return z;
            },
            pU: function () {
              return P;
            },
            u9: function () {
              return h;
            },
            un: function () {
              return d;
            },
            To: function () {
              return I;
            },
            jv: function () {
              return k;
            },
            z9: function () {
              return x;
            },
            hb: function () {
              return A;
            },
            WW: function () {
              return M;
            },
            M: function () {
              return y;
            },
            lZ: function () {
              return w;
            },
            ju: function () {
              return g;
            },
            Xn: function () {
              return b;
            },
            Os: function () {
              return v;
            },
          });
          var r = n(4096),
            i = (n(3733), n(450)),
            o = n(5810),
            a = n(5616);
          const s = "http://clerk-dummy",
            c = [".lcl.dev", ".lclstage.dev", ".lclclerk.com"],
            u = [
              ".accounts.dev",
              ".accountsstage.dev",
              ".accounts.lclclerk.com",
            ],
            l = ["javascript:"],
            { isDevOrStagingUrl: d } = (0, r.MY)(),
            f = new Map();
          function h(e = window.location.hostname) {
            if (!e) return !1;
            let t = f.get(e);
            var n;
            return (
              void 0 === t &&
                ((n = e),
                (t =
                  c.some((e) => n.startsWith("accounts.") && n.endsWith(e)) ||
                  (function (e) {
                    return u.some(
                      (t) => e.endsWith(t) && !e.endsWith(".clerk" + t)
                    );
                  })(e)),
                f.set(e, t)),
              t
            );
          }
          function p(e = window.location.hostname) {
            const t = e.split("."),
              n = [],
              r = [];
            for (let e = t.length - 1; e > 0; e--)
              n.unshift(t[e]), r.push(n.join("."));
            return r;
          }
          function m(e, t = {}) {
            const {
              base: n,
              hashPath: r,
              hashSearch: i,
              searchParams: c,
              ...u
            } = e;
            let l = "";
            l =
              "undefined" != typeof window && window.location
                ? window.location.href
                : "http://react-native-fake-base-url";
            const d = new URL(n || "", l);
            if (
              (c instanceof URLSearchParams &&
                c.forEach((e, t) => {
                  d.searchParams.set(t, e);
                }),
              Object.assign(d, u),
              r || i)
            ) {
              const e = new URL(s + d.hash.substring(1));
              e.pathname = (0, o.R)(e.pathname, r || "");
              const t = (0, a.v)(i || "");
              for (const [n, r] of Object.entries(t))
                e.searchParams.append(n, r);
              const n = e.href.replace(s, "");
              d.hash = n;
            }
            const { stringify: f, skipOrigin: h } = t;
            return f ? (h ? d.href.replace(d.origin, "") : d.href) : d;
          }
          function g(e) {
            return new URL(e.toString(), window.location.origin);
          }
          function y(e) {
            return (e = g(e)).href.replace(e.origin, "");
          }
          const v = (e) => (e || "").replace(/\/+$/, ""),
            b = (e) => (e || "").replace(/^\/+/, ""),
            w = (e, t) => (t.origin === e.origin ? y(e) : `${e}`),
            _ = (e, t = {}) => {
              const n = g(e),
                i = new URLSearchParams();
              for (const [e, n] of Object.entries(t))
                n && i.append((0, r.a1)(e), n);
              return `${n}${i.toString() ? "#/?" + i.toString() : ""}`;
            },
            S = (e) => {
              const { externalAccount: t } = e.verifications;
              return !!t.error;
            };
          function k(e, t) {
            const { includeRelativeUrls: n = !1 } = t || {};
            if (!e && !n) return !1;
            try {
              return new URL(e, n ? s : void 0), !0;
            } catch (e) {
              return !1;
            }
          }
          function P(e) {
            return !!k(e) && "data:" === new URL(e).protocol;
          }
          function O(e) {
            if (!k(e)) return !1;
            const t = new URL(e).protocol;
            return l.some((e) => e === t);
          }
          const U = (e) => new URL(e, s).hash.startsWith("#/"),
            x = (e) => {
              const t = new URL(e);
              if (!U(t)) return t;
              const n = new URL(t.hash.replace("#/", "/"), t.href),
                r = [t.pathname, n.pathname]
                  .map((e) => e.split("/"))
                  .flat()
                  .filter(Boolean)
                  .join("/"),
                i = new URL(r, t.origin);
              return (
                t.searchParams.forEach((e, t) => {
                  i.searchParams.set(t, e);
                }),
                n.searchParams.forEach((e, t) => {
                  i.searchParams.set(t, e);
                }),
                i
              );
            },
            A = (e) => e.replace(/CLERK-ROUTER\/(.*?)\//, ""),
            E = ["/oauth/authorize"],
            C = ["/v1/verify", "/v1/tickets/accept"];
          function I(e, t) {
            const n = new URL(t, s),
              r = n.pathname,
              i = E.includes(r) || C.includes(r);
            return e === n.host && i;
          }
          function M(e) {
            const t = new URL(e, s);
            return E.includes(t.pathname);
          }
          const z = (e, t) => {
            if (!t) return !0;
            const n = new URL(e, s);
            if (n.origin === s) return !0;
            const r = t
              .map((e) =>
                "string" == typeof e
                  ? ((e) => {
                      try {
                        return i(e);
                      } catch (t) {
                        throw new Error(
                          `Invalid pattern: ${e}.\nConsult the documentation of glob-to-regexp here: https://www.npmjs.com/package/glob-to-regexp.\n${t.message}`
                        );
                      }
                    })(v(e))
                  : e
              )
              .some((e) => e.test(v(n.origin)));
            return (
              r ||
                console.warn(
                  `Clerk: Redirect URL ${n} is not on one of the allowedRedirectOrigins, falling back to the default redirect URL.`
                ),
              r
            );
          };
        },
        4016: function (e, t, n) {
          "use strict";
          n.d(t, {
            Pp: function () {
              return r;
            },
            Qm: function () {
              return i;
            },
            xC: function () {
              return o;
            },
          });
          const r = ({ firstName: e, lastName: t, name: n }) =>
              n || [e, t].join(" ").trim() || "",
            i = ({ firstName: e, lastName: t, name: n }) =>
              [(e || "")[0], (t || "")[0]].join("").trim() || (n || "")[0],
            o = (e) =>
              e.username
                ? e.username
                : e.primaryEmailAddress
                ? e.primaryEmailAddress.emailAddress
                : e.primaryPhoneNumber
                ? e.primaryPhoneNumber.phoneNumber
                : e.primaryWeb3Wallet
                ? e.primaryWeb3Wallet.web3Wallet
                : "";
        },
        8621: function (e, t, n) {
          "use strict";
          async function r() {
            if (!n.g.ethereum) return "";
            const e = await n.g.ethereum.request({
              method: "eth_requestAccounts",
            });
            return (e && e[0]) || "";
          }
          async function i({ identifier: e, nonce: t }) {
            return n.g.ethereum
              ? await n.g.ethereum.request({
                  method: "personal_sign",
                  params: [
                    `0x${
                      ((r = t),
                      r
                        .split("")
                        .map((e) =>
                          e.charCodeAt(0).toString(16).padStart(2, "0")
                        )
                        .join(""))
                    }`,
                    e,
                  ],
                })
              : "";
            var r;
          }
          n.d(t, {
            w: function () {
              return i;
            },
            M: function () {
              return r;
            },
          });
        },
        196: function (e, t, n) {
          "use strict";
          n.d(t, {
            I: function () {
              return r;
            },
            T: function () {
              return i;
            },
          });
          const r = "clerk:beforeunload";
          function i(e) {
            window.dispatchEvent(new CustomEvent(r)),
              (window.location.href = "string" == typeof e ? e : e.href);
          }
        },
        452: function (e, t, n) {
          "use strict";
          var r = n(2784),
            i =
              "function" == typeof Object.is
                ? Object.is
                : function (e, t) {
                    return (
                      (e === t && (0 !== e || 1 / e == 1 / t)) ||
                      (e != e && t != t)
                    );
                  },
            o = r.useState,
            a = r.useEffect,
            s = r.useLayoutEffect,
            c = r.useDebugValue;
          function u(e) {
            var t = e.getSnapshot;
            e = e.value;
            try {
              var n = t();
              return !i(e, n);
            } catch (e) {
              return !0;
            }
          }
          var l =
            "undefined" == typeof window ||
            void 0 === window.document ||
            void 0 === window.document.createElement
              ? function (e, t) {
                  return t();
                }
              : function (e, t) {
                  var n = t(),
                    r = o({ inst: { value: n, getSnapshot: t } }),
                    i = r[0].inst,
                    l = r[1];
                  return (
                    s(
                      function () {
                        (i.value = n),
                          (i.getSnapshot = t),
                          u(i) && l({ inst: i });
                      },
                      [e, n, t]
                    ),
                    a(
                      function () {
                        return (
                          u(i) && l({ inst: i }),
                          e(function () {
                            u(i) && l({ inst: i });
                          })
                        );
                      },
                      [e]
                    ),
                    c(n),
                    n
                  );
                };
          t.useSyncExternalStore =
            void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : l;
        },
        3100: function (e, t, n) {
          "use strict";
          e.exports = n(452);
        },
        3260: function () {},
        305: function (e, t, n) {
          "use strict";
          n.d(t, {
            _f: function () {
              return r._f;
            },
            af: function () {
              return r.af;
            },
          });
          var r = n(4118);
          n(3733);
        },
        4518: function (e, t, n) {
          "use strict";
          n.d(t, {
            G1: function () {
              return g;
            },
            N: function () {
              return m;
            },
            Sj: function () {
              return p;
            },
            X1: function () {
              return y;
            },
            ZC: function () {
              return u;
            },
            _L: function () {
              return v;
            },
            ay: function () {
              return l;
            },
            eE: function () {
              return o;
            },
            gO: function () {
              return f;
            },
            ix: function () {
              return i;
            },
            kD: function () {
              return s;
            },
            nU: function () {
              return d;
            },
            sZ: function () {
              return a;
            },
            t5: function () {
              return w;
            },
            uX: function () {
              return c;
            },
            w$: function () {
              return h;
            },
          });
          var r = n(777);
          function i(e) {
            const t = null == e ? void 0 : e.status;
            return !!t && t >= 400 && t < 500;
          }
          function o(e) {
            return (`${e.message}${e.name}` || "")
              .toLowerCase()
              .replace(/\s+/g, "")
              .includes("networkerror");
          }
          function a(e) {
            return s(e) || u(e) || c(e);
          }
          function s(e) {
            return "clerkError" in e;
          }
          function c(e) {
            return "clerkRuntimeError" in e;
          }
          function u(e) {
            return (
              "code" in e &&
              [4001, 32602, 32603].includes(e.code) &&
              "message" in e
            );
          }
          function l(e) {
            var t, n;
            return (
              s(e) &&
              "user_locked" ===
                (null ===
                  (n =
                    null === (t = e.errors) || void 0 === t ? void 0 : t[0]) ||
                void 0 === n
                  ? void 0
                  : n.code)
            );
          }
          function d(e) {
            var t, n, r, i, o;
            return {
              code: e.code,
              message: e.message,
              longMessage: e.long_message,
              meta: {
                paramName:
                  null === (t = null == e ? void 0 : e.meta) || void 0 === t
                    ? void 0
                    : t.param_name,
                sessionId:
                  null === (n = null == e ? void 0 : e.meta) || void 0 === n
                    ? void 0
                    : n.session_id,
                emailAddresses:
                  null === (r = null == e ? void 0 : e.meta) || void 0 === r
                    ? void 0
                    : r.email_addresses,
                identifiers:
                  null === (i = null == e ? void 0 : e.meta) || void 0 === i
                    ? void 0
                    : i.identifiers,
                zxcvbn:
                  null === (o = null == e ? void 0 : e.meta) || void 0 === o
                    ? void 0
                    : o.zxcvbn,
              },
            };
          }
          var f = class e extends Error {
              constructor(t, { data: n, status: r, clerkTraceId: i }) {
                super(t),
                  (this.toString = () => {
                    let e = `[${this.name}]\nMessage:${this.message}\nStatus:${
                      this.status
                    }\nSerialized errors: ${this.errors.map((e) =>
                      JSON.stringify(e)
                    )}`;
                    return (
                      this.clerkTraceId &&
                        (e += `\nClerk Trace ID: ${this.clerkTraceId}`),
                      e
                    );
                  }),
                  Object.setPrototypeOf(this, e.prototype),
                  (this.status = r),
                  (this.message = t),
                  (this.clerkTraceId = i),
                  (this.clerkError = !0),
                  (this.errors = (function (e = []) {
                    return e.length > 0 ? e.map(d) : [];
                  })(n));
              }
            },
            h = class e extends Error {
              constructor(t, { code: n }) {
                super(t),
                  (this.toString = () =>
                    `[${this.name}]\nMessage:${this.message}`),
                  Object.setPrototypeOf(this, e.prototype),
                  (this.code = n),
                  (this.message = t),
                  (this.clerkRuntimeError = !0);
              }
            },
            p = class e extends Error {
              constructor(t) {
                super(t),
                  (this.code = t),
                  Object.setPrototypeOf(this, e.prototype),
                  (0, r.x9)("MagicLinkError", "Use `EmailLinkError` instead.");
              }
            },
            m = class e extends Error {
              constructor(t) {
                super(t),
                  (this.code = t),
                  Object.setPrototypeOf(this, e.prototype);
              }
            };
          function g(e) {
            return e instanceof m;
          }
          var y = new Proxy(
              { Expired: "expired", Failed: "failed" },
              {
                get(e, t, n) {
                  return (
                    (0, r.x9)(
                      "MagicLinkErrorCode",
                      "Use `EmailLinkErrorCode` instead."
                    ),
                    Reflect.get(e, t, n)
                  );
                },
              }
            ),
            v = { Expired: "expired", Failed: "failed" },
            b = Object.freeze({
              InvalidFrontendApiErrorMessage:
                "The frontendApi passed to Clerk is invalid. You can get your Frontend API key at https://dashboard.clerk.com/last-active?path=api-keys. (key={{key}})",
              InvalidProxyUrlErrorMessage:
                "The proxyUrl passed to Clerk is invalid. The expected value for proxyUrl is an absolute URL or a relative path with a leading '/'. (key={{url}})",
              InvalidPublishableKeyErrorMessage:
                "The publishableKey passed to Clerk is invalid. You can get your Publishable key at https://dashboard.clerk.com/last-active?path=api-keys. (key={{key}})",
              MissingPublishableKeyErrorMessage:
                "Missing publishableKey. You can get your key at https://dashboard.clerk.com/last-active?path=api-keys.",
            });
          function w({ packageName: e, customMessages: t }) {
            let n = e;
            const r = { ...b, ...t };
            function i(e, t) {
              if (!t) return `${n}: ${e}`;
              let r = e;
              const i = e.matchAll(/{{([a-zA-Z0-9-_]+)}}/g);
              for (const e of i) {
                const n = (t[e[1]] || "").toString();
                r = r.replace(`{{${e[1]}}}`, n);
              }
              return `${n}: ${r}`;
            }
            return {
              setPackageName({ packageName: e }) {
                return "string" == typeof e && (n = e), this;
              },
              setMessages({ customMessages: e }) {
                return Object.assign(r, e || {}), this;
              },
              throwInvalidPublishableKeyError(e) {
                throw new Error(i(r.InvalidPublishableKeyErrorMessage, e));
              },
              throwInvalidFrontendApiError(e) {
                throw new Error(i(r.InvalidFrontendApiErrorMessage, e));
              },
              throwInvalidProxyUrl(e) {
                throw new Error(i(r.InvalidProxyUrlErrorMessage, e));
              },
              throwMissingPublishableKeyError() {
                throw new Error(i(r.MissingPublishableKeyErrorMessage));
              },
            };
          }
        },
        777: function (e, t, n) {
          "use strict";
          n.d(t, {
            Mr: function () {
              return a;
            },
            vf: function () {
              return r;
            },
            x6: function () {
              return s;
            },
            x9: function () {
              return o;
            },
          });
          var r = () => {
              try {
                return !1;
              } catch (e) {}
              return !1;
            },
            i = new Set(),
            o = (e, t, n) => {
              const r =
                  (() => {
                    try {
                      return !1;
                    } catch (e) {}
                    return !1;
                  })() ||
                  (() => {
                    try {
                      return !0;
                    } catch (e) {}
                    return !1;
                  })(),
                o = null != n ? n : e;
              i.has(o) ||
                r ||
                (i.add(o),
                console.warn(
                  `Clerk - DEPRECATION WARNING: "${e}" is deprecated and will be removed in the next major release.\n${t}`
                ));
            },
            a = (e, t, n, r = !1) => {
              const i = r ? e : e.prototype;
              let a = i[t];
              Object.defineProperty(i, t, {
                get() {
                  return o(t, n, `${e.name}:${t}`), a;
                },
                set(e) {
                  a = e;
                },
              });
            },
            s = (e, t, n, r) => {
              let i = e[t];
              Object.defineProperty(e, t, {
                get() {
                  return o(t, n, r), i;
                },
                set(e) {
                  i = e;
                },
              });
            };
        },
        3733: function (e, t, n) {
          "use strict";
          n.d(t, {
            r: function () {
              return s;
            },
            y: function () {
              return u;
            },
          });
          var r = Object.defineProperty,
            i = Object.getOwnPropertyDescriptor,
            o = Object.getOwnPropertyNames,
            a = Object.prototype.hasOwnProperty,
            s = (e, t) => {
              for (var n in t) r(e, n, { get: t[n], enumerable: !0 });
            },
            c = (e, t, n, s) => {
              if ((t && "object" == typeof t) || "function" == typeof t)
                for (let c of o(t))
                  a.call(e, c) ||
                    c === n ||
                    r(e, c, {
                      get: () => t[c],
                      enumerable: !(s = i(t, c)) || s.enumerable,
                    });
              return e;
            },
            u = (e, t, n) => (c(e, t, "default"), n && c(n, t, "default"));
        },
        3063: function (e, t, n) {
          "use strict";
          n.d(t, {
            S: function () {
              return r;
            },
          });
          var r = (e) =>
            "undefined" != typeof atob && "function" == typeof atob
              ? atob(e)
              : "undefined" != typeof global && global.Buffer
              ? new global.Buffer(e, "base64").toString()
              : e;
        },
        4118: function (e, t, n) {
          "use strict";
          function r() {
            return "undefined" != typeof window;
          }
          n.d(t, {
            TN: function () {
              return o;
            },
            _f: function () {
              return r;
            },
            af: function () {
              return a;
            },
          });
          var i = new RegExp(
            [
              "bot",
              "spider",
              "crawl",
              "APIs-Google",
              "AdsBot",
              "Googlebot",
              "mediapartners",
              "Google Favicon",
              "FeedFetcher",
              "Google-Read-Aloud",
              "DuplexWeb-Google",
              "googleweblight",
              "bing",
              "yandex",
              "baidu",
              "duckduck",
              "yahoo",
              "ecosia",
              "ia_archiver",
              "facebook",
              "instagram",
              "pinterest",
              "reddit",
              "slack",
              "twitter",
              "whatsapp",
              "youtube",
              "semrush",
            ].join("|"),
            "i"
          );
          function o() {
            var e, t;
            const n =
              null === window || void 0 === window ? void 0 : window.navigator;
            if (!r() || !n) return !1;
            const i = null == n ? void 0 : n.onLine;
            return (
              0 !==
                (null === (e = null == n ? void 0 : n.connection) ||
                void 0 === e
                  ? void 0
                  : e.rtt) &&
              0 !==
                (null === (t = null == n ? void 0 : n.connection) ||
                void 0 === t
                  ? void 0
                  : t.downlink) &&
              i
            );
          }
          function a() {
            return (
              o() &&
              (function () {
                const e =
                  null === window || void 0 === window
                    ? void 0
                    : window.navigator;
                return !(
                  !r() ||
                  !e ||
                  ((t = null == e ? void 0 : e.userAgent),
                  (t && i.test(t)) || (null == e ? void 0 : e.webdriver))
                );
                var t;
              })()
            );
          }
        },
        415: function (e, t, n) {
          "use strict";
          n.d(t, {
            Q5: function () {
              return a;
            },
            Ww: function () {
              return s;
            },
            ZT: function () {
              return r;
            },
          });
          var r = (...e) => {},
            i =
              'const respond=r=>{self.postMessage(r)},workerToTabIds={};self.addEventListener("message",r=>{const e=r.data;switch(e.type){case"setTimeout":workerToTabIds[e.id]=setTimeout(()=>{respond({id:e.id})},e.ms);break;case"clearTimeout":workerToTabIds[e.id]&&(clearTimeout(workerToTabIds[e.id]),delete workerToTabIds[e.id]);break;case"setInterval":workerToTabIds[e.id]=setInterval(()=>{respond({id:e.id})},e.ms);break;case"clearInterval":workerToTabIds[e.id]&&(clearInterval(workerToTabIds[e.id]),delete workerToTabIds[e.id]);break}});\n',
            o = (e, t = {}) => {
              if ("undefined" == typeof Worker) return null;
              try {
                const n = new Blob([e], {
                    type: "application/javascript; charset=utf-8",
                  }),
                  r = globalThis.URL.createObjectURL(n);
                return new Worker(r, t);
              } catch (e) {
                return (
                  console.warn(
                    "Clerk: Cannot create worker from blob. Consider adding worker-src blob:; to your CSP"
                  ),
                  null
                );
              }
            },
            a = () => {
              let e = 0;
              const t = () => e++,
                n = new Map(),
                a = (e, t) => (null == e ? void 0 : e.postMessage(t)),
                s = (e) => {
                  var t;
                  null === (t = n.get(e.data.id)) || void 0 === t || t();
                };
              let c = o(i, { name: "clerk-timers" });
              if ((null == c || c.addEventListener("message", s), !c))
                return {
                  setTimeout: globalThis.setTimeout.bind(globalThis),
                  setInterval: globalThis.setInterval.bind(globalThis),
                  clearTimeout: globalThis.clearTimeout.bind(globalThis),
                  clearInterval: globalThis.clearInterval.bind(globalThis),
                  cleanup: r,
                };
              const u = () => {
                c ||
                  ((c = o(i, { name: "clerk-timers" })),
                  null == c || c.addEventListener("message", s));
              };
              return {
                setTimeout: (e, r) => {
                  u();
                  const i = t();
                  return (
                    n.set(i, e), a(c, { type: "setTimeout", id: i, ms: r }), i
                  );
                },
                setInterval: (e, r) => {
                  u();
                  const i = t();
                  return (
                    n.set(i, e), a(c, { type: "setInterval", id: i, ms: r }), i
                  );
                },
                clearTimeout: (e) => {
                  u(), n.delete(e), a(c, { type: "clearTimeout", id: e });
                },
                clearInterval: (e) => {
                  u(), n.delete(e), a(c, { type: "clearInterval", id: e });
                },
                cleanup: () => {
                  c && (c.terminate(), (c = null), n.clear());
                },
              };
            };
          function s({ delayInMs: e } = { delayInMs: 1e3 }) {
            const t = a();
            let n,
              r = !1;
            const i = () => {
                n && (t.clearTimeout(n), t.cleanup()), (r = !0);
              },
              o = async (a) => {
                (r = !1),
                  await a(i),
                  r ||
                    (n = t.setTimeout(() => {
                      o(a);
                    }, e));
              };
            return { run: o, stop: i };
          }
        },
        5900: function (e, t, n) {
          "use strict";
          n.d(t, {
            Mr: function () {
              return r.Mr;
            },
            x6: function () {
              return r.x6;
            },
            x9: function () {
              return r.x9;
            },
          });
          var r = n(777);
          n(3733);
        },
        221: function (e, t, n) {
          "use strict";
          n.d(t, {
            G1: function () {
              return r.G1;
            },
            N: function () {
              return r.N;
            },
            Sj: function () {
              return r.Sj;
            },
            X1: function () {
              return r.X1;
            },
            ZC: function () {
              return r.ZC;
            },
            _L: function () {
              return r._L;
            },
            ay: function () {
              return r.ay;
            },
            eE: function () {
              return r.eE;
            },
            gO: function () {
              return r.gO;
            },
            ix: function () {
              return r.ix;
            },
            kD: function () {
              return r.kD;
            },
            nU: function () {
              return r.nU;
            },
            sZ: function () {
              return r.sZ;
            },
            t5: function () {
              return r.t5;
            },
            uX: function () {
              return r.uX;
            },
            w$: function () {
              return r.w$;
            },
          });
          var r = n(4518);
          n(777), n(3733);
        },
        4096: function (e, t, n) {
          "use strict";
          n.d(t, {
            jt: function () {
              return E;
            },
            Ww: function () {
              return r.Ww;
            },
            xy: function () {
              return m;
            },
            Bc: function () {
              return x;
            },
            a1: function () {
              return d;
            },
            WK: function () {
              return R;
            },
            MY: function () {
              return S;
            },
            Q5: function () {
              return r.Q5;
            },
            aw: function () {
              return h;
            },
            x9: function () {
              return i.x9;
            },
            Mr: function () {
              return i.Mr;
            },
            $x: function () {
              return M;
            },
            c3: function () {
              return z;
            },
            lY: function () {
              return U;
            },
            YZ: function () {
              return g;
            },
            _f: function () {
              return k._f;
            },
            ix: function () {
              return T.ix;
            },
            TN: function () {
              return k.TN;
            },
            vf: function () {
              return i.vf;
            },
            ZD: function () {
              return a;
            },
            qf: function () {
              return _;
            },
            ay: function () {
              return T.ay;
            },
            af: function () {
              return k.af;
            },
            jL: function () {
              return o;
            },
            ZT: function () {
              return r.ZT;
            },
            P9: function () {
              return O;
            },
            nQ: function () {
              return w;
            },
            kI: function () {
              return c;
            },
            $V: function () {
              return N;
            },
            Fe: function () {
              return I;
            },
            TD: function () {
              return l;
            },
            d5: function () {
              return p;
            },
            up: function () {
              return u;
            },
          });
          var r = n(415),
            i = n(777);
          function o(e) {
            return !e || a(e) || s(e);
          }
          function a(e) {
            return /^http(s)?:\/\//.test(e || "");
          }
          function s(e) {
            return e.startsWith("/");
          }
          function c(e) {
            return e
              ? s(e)
                ? new URL(e, window.location.origin).toString()
                : e
              : "";
          }
          function u(e) {
            const t = e || "";
            return t.charAt(0).toUpperCase() + t.slice(1);
          }
          function l(e) {
            return e
              ? e.replace(/([-_][a-z])/g, (e) =>
                  e.toUpperCase().replace(/-|_/, "")
                )
              : "";
          }
          function d(e) {
            return e ? e.replace(/[A-Z]/g, (e) => `_${e.toLowerCase()}`) : "";
          }
          var f = (e) => {
              const t = (n) => {
                if (!n) return n;
                if (Array.isArray(n))
                  return n.map((e) =>
                    "object" == typeof e || Array.isArray(e) ? t(e) : e
                  );
                const r = { ...n },
                  i = Object.keys(r);
                for (const n of i) {
                  const i = e(n.toString());
                  i !== n && ((r[i] = r[n]), delete r[n]),
                    "object" == typeof r[i] && (r[i] = t(r[i]));
                }
                return r;
              };
              return t;
            },
            h = (f(d), f(l));
          function p(e = "") {
            return (e || "").replace(/^.+:\/\//, "");
          }
          function m(e) {
            if (!e) return "";
            let t;
            if (e.match(/^(clerk\.)+\w*$/)) t = /(clerk\.)*(?=clerk\.)/;
            else {
              if (e.match(/\.clerk.accounts/)) return e;
              t = /^(clerk\.)*/gi;
            }
            return `clerk.${e.replace(t, "")}`;
          }
          function g(e, t, n) {
            return "function" == typeof e
              ? e(t)
              : void 0 !== e
              ? e
              : void 0 !== n
              ? n
              : void 0;
          }
          Object.freeze({
            "image/png": "png",
            "image/jpeg": "jpg",
            "image/gif": "gif",
            "image/webp": "webp",
            "image/x-icon": "ico",
            "image/vnd.microsoft.icon": "ico",
          });
          var y = n(3063),
            v = "pk_live_",
            b = "pk_test_";
          function w(e) {
            if (
              !(function (e) {
                const t = (e = e || "").startsWith(v) || e.startsWith(b),
                  n = (0, y.S)(e.split("_")[2] || "").endsWith("$");
                return t && n;
              })((e = e || ""))
            )
              return null;
            const t = e.startsWith(v) ? "production" : "development";
            let n = (0, y.S)(e.split("_")[2]);
            return n.endsWith("$")
              ? ((n = n.slice(0, -1)), { instanceType: t, frontendApi: n })
              : null;
          }
          function _(e) {
            return (e = e || "").startsWith("clerk.");
          }
          function S() {
            const e = [
                ".lcl.dev",
                ".stg.dev",
                ".lclstage.dev",
                ".stgstage.dev",
                ".dev.lclclerk.com",
                ".stg.lclclerk.com",
                ".accounts.lclclerk.com",
                "accountsstage.dev",
                "accounts.dev",
              ],
              t = new Map();
            return {
              isDevOrStagingUrl: (n) => {
                if (!n) return !1;
                const r = "string" == typeof n ? n : n.hostname;
                let i = t.get(r);
                return (
                  void 0 === i &&
                    ((i = e.some((e) => r.endsWith(e))), t.set(r, i)),
                  i
                );
              },
            };
          }
          var k = n(4118),
            P = 864e5;
          function O(e) {
            try {
              return new Date(e || new Date());
            } catch (e) {
              return new Date();
            }
          }
          function U(e) {
            const { date: t, relativeTo: n } = e;
            if (!t || !n) return null;
            const r = O(t),
              i = (function (e, t, { absolute: n = !0 } = {}) {
                if (!e || !t) return 0;
                const r = Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()),
                  i = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate()),
                  o = Math.floor((i - r) / P);
                return n ? Math.abs(o) : o;
              })(O(n), r, { absolute: !1 });
            return i < -6
              ? { relativeDateCase: "other", date: r }
              : i < -1
              ? { relativeDateCase: "previous6Days", date: r }
              : -1 === i
              ? { relativeDateCase: "lastDay", date: r }
              : 0 === i
              ? { relativeDateCase: "sameDay", date: r }
              : 1 === i
              ? { relativeDateCase: "nextDay", date: r }
              : i < 7
              ? { relativeDateCase: "next6Days", date: r }
              : { relativeDateCase: "other", date: r };
          }
          function x(e, t) {
            const n = O(e);
            return n.setFullYear(n.getFullYear() + t), n;
          }
          var A = "__dev_session",
            E = "__clerk_db_jwt",
            C = /__clerk_db_jwt\[(.*)\]/;
          function I(e, t, n) {
            const r = new URL(e),
              i = M(r),
              o = z(r),
              a = i || o || t;
            return (
              a &&
                (n
                  ? (r.searchParams.append(A, a), r.searchParams.append(E, a))
                  : (r.hash = r.hash + `${E}[${a}]`)),
              r
            );
          }
          function M(e) {
            const t = (function (e) {
              const t = e.match(C);
              return t ? t[1] : "";
            })(e.hash);
            return (
              (e.hash = e.hash.replace(C, "")),
              e.href.endsWith("#") && (e.hash = ""),
              t
            );
          }
          function z(e) {
            const t = e.searchParams.get(A);
            e.searchParams.delete(A);
            const n = e.searchParams.get(E);
            return e.searchParams.delete(E), t || n || "";
          }
          var T = n(4518),
            R =
              (n(3733),
              () => {
                let e = r.ZT,
                  t = r.ZT;
                return {
                  promise: new Promise((n, r) => {
                    (e = n), (t = r);
                  }),
                  resolve: e,
                  reject: t,
                };
              }),
            j = {
              firstDelay: 125,
              maxDelay: 0,
              timeMultiple: 2,
              shouldRetry: () => !0,
            },
            N = async (e, t = {}) => {
              let n = 0;
              const {
                  shouldRetry: r,
                  firstDelay: i,
                  maxDelay: o,
                  timeMultiple: a,
                } = { ...j, ...t },
                s = ((e) => {
                  let t = 0;
                  return async () => {
                    await (async (e) => new Promise((t) => setTimeout(t, e)))(
                      (() => {
                        const n = e.firstDelay,
                          r = e.timeMultiple,
                          i = n * Math.pow(r, t);
                        return Math.min(e.maxDelay || i, i);
                      })()
                    ),
                      t++;
                  };
                })({ firstDelay: i, maxDelay: o, timeMultiple: a });
              for (;;)
                try {
                  return await e();
                } catch (e) {
                  if ((n++, !r(e, n))) throw e;
                  await s();
                }
            };
        },
        7018: function (e, t, n) {
          "use strict";
          n.d(t, {
            b5: function () {
              return ce;
            },
            RY: function () {
              return fe;
            },
            f0: function () {
              return ve;
            },
            B3: function () {
              return pe;
            },
            St: function () {
              return le;
            },
            LB: function () {
              return oe;
            },
            uH: function () {
              return ae;
            },
            rI: function () {
              return ue;
            },
            sX: function () {
              return he;
            },
            o8: function () {
              return ke;
            },
            eW: function () {
              return Ue;
            },
            qi: function () {
              return xe;
            },
            Gw: function () {
              return Ae;
            },
            Tt: function () {
              return me;
            },
            SE: function () {
              return de;
            },
          });
          var r = {};
          n.r(r),
            n.d(r, {
              SWRConfig: function () {
                return ee;
              },
              default: function () {
                return te;
              },
              mutate: function () {
                return W;
              },
              preload: function () {
                return K;
              },
              unstable_serialize: function () {
                return X;
              },
              useSWRConfig: function () {
                return Z;
              },
            });
          var i = n(777),
            o = n(3733),
            a = n(2784),
            s = n(3100);
          const c = () => {},
            u = c(),
            l = Object,
            d = (e) => e === u,
            f = (e) => "function" == typeof e,
            h = (e, t) => ({ ...e, ...t }),
            p = new WeakMap();
          let m = 0;
          const g = (e) => {
              const t = typeof e,
                n = e && e.constructor,
                r = n == Date;
              let i, o;
              if (l(e) !== e || r || n == RegExp)
                i = r
                  ? e.toJSON()
                  : "symbol" == t
                  ? e.toString()
                  : "string" == t
                  ? JSON.stringify(e)
                  : "" + e;
              else {
                if (((i = p.get(e)), i)) return i;
                if (((i = ++m + "~"), p.set(e, i), n == Array)) {
                  for (i = "@", o = 0; o < e.length; o++) i += g(e[o]) + ",";
                  p.set(e, i);
                }
                if (n == l) {
                  i = "#";
                  const t = l.keys(e).sort();
                  for (; !d((o = t.pop())); )
                    d(e[o]) || (i += o + ":" + g(e[o]) + ",");
                  p.set(e, i);
                }
              }
              return i;
            },
            y = new WeakMap(),
            v = {},
            b = {},
            w = "undefined",
            _ = typeof window != w,
            S = typeof document != w,
            k = (e, t) => {
              const n = y.get(e);
              return [
                () => (!d(t) && e.get(t)) || v,
                (r) => {
                  if (!d(t)) {
                    const i = e.get(t);
                    t in b || (b[t] = i), n[5](t, h(i, r), i || v);
                  }
                },
                n[6],
                () => (!d(t) && t in b ? b[t] : (!d(t) && e.get(t)) || v),
              ];
            };
          let P = !0;
          const [O, U] =
              _ && window.addEventListener
                ? [
                    window.addEventListener.bind(window),
                    window.removeEventListener.bind(window),
                  ]
                : [c, c],
            x = {
              isOnline: () => P,
              isVisible: () => {
                const e = S && document.visibilityState;
                return d(e) || "hidden" !== e;
              },
            },
            A = {
              initFocus: (e) => (
                S && document.addEventListener("visibilitychange", e),
                O("focus", e),
                () => {
                  S && document.removeEventListener("visibilitychange", e),
                    U("focus", e);
                }
              ),
              initReconnect: (e) => {
                const t = () => {
                    (P = !0), e();
                  },
                  n = () => {
                    P = !1;
                  };
                return (
                  O("online", t),
                  O("offline", n),
                  () => {
                    U("online", t), U("offline", n);
                  }
                );
              },
            },
            E = !a.useId,
            C = !_ || "Deno" in window,
            I = C ? a.useEffect : a.useLayoutEffect,
            M = "undefined" != typeof navigator && navigator.connection,
            z =
              !C &&
              M &&
              (["slow-2g", "2g"].includes(M.effectiveType) || M.saveData),
            T = (e) => {
              if (f(e))
                try {
                  e = e();
                } catch (t) {
                  e = "";
                }
              const t = e;
              return [
                (e =
                  "string" == typeof e
                    ? e
                    : (Array.isArray(e) ? e.length : e)
                    ? g(e)
                    : ""),
                t,
              ];
            };
          let R = 0;
          const j = () => ++R;
          async function N(...e) {
            const [t, n, r, i] = e,
              o = h(
                { populateCache: !0, throwOnError: !0 },
                "boolean" == typeof i ? { revalidate: i } : i || {}
              );
            let a = o.populateCache;
            const s = o.rollbackOnError;
            let c = o.optimisticData;
            const l = !1 !== o.revalidate,
              p = o.throwOnError;
            if (f(n)) {
              const e = n,
                r = [],
                i = t.keys();
              for (const n of i)
                !/^\$(inf|sub)\$/.test(n) && e(t.get(n)._k) && r.push(n);
              return Promise.all(r.map(m));
            }
            return m(n);
            async function m(n) {
              const [i] = T(n);
              if (!i) return;
              const [o, h] = k(t, i),
                [m, g, v, b] = y.get(t),
                w = m[i],
                _ = () =>
                  l && (delete v[i], delete b[i], w && w[0])
                    ? w[0](2).then(() => o().data)
                    : o().data;
              if (e.length < 3) return _();
              let S,
                P = r;
              const O = j();
              g[i] = [O, 0];
              const U = !d(c),
                x = o(),
                A = x.data,
                E = x._c,
                C = d(E) ? A : E;
              if (
                (U && ((c = f(c) ? c(C, A) : c), h({ data: c, _c: C })), f(P))
              )
                try {
                  P = P(C);
                } catch (e) {
                  S = e;
                }
              if (P && f(P.then)) {
                if (
                  ((P = await P.catch((e) => {
                    S = e;
                  })),
                  O !== g[i][0])
                ) {
                  if (S) throw S;
                  return P;
                }
                S &&
                  U &&
                  ((e) => ("function" == typeof s ? s(e) : !1 !== s))(S) &&
                  ((a = !0), (P = C), h({ data: P, _c: u }));
              }
              a &&
                (S || (f(a) && (P = a(P, C)), h({ data: P, error: u, _c: u }))),
                (g[i][1] = j());
              const I = await _();
              if ((h({ _c: u }), !S)) return a ? I : P;
              if (p) throw S;
            }
          }
          const L = (e, t) => {
              for (const n in e) e[n][0] && e[n][0](t);
            },
            $ = (e, t) => {
              if (!y.has(e)) {
                const n = h(A, t),
                  r = {},
                  i = N.bind(u, e);
                let o = c;
                const a = {},
                  s = (e, t) => {
                    const n = a[e] || [];
                    return (
                      (a[e] = n), n.push(t), () => n.splice(n.indexOf(t), 1)
                    );
                  },
                  l = (t, n, r) => {
                    e.set(t, n);
                    const i = a[t];
                    if (i) for (const e of i) e(n, r);
                  },
                  d = () => {
                    if (!y.has(e) && (y.set(e, [r, {}, {}, {}, i, l, s]), !C)) {
                      const t = n.initFocus(
                          setTimeout.bind(u, L.bind(u, r, 0))
                        ),
                        i = n.initReconnect(
                          setTimeout.bind(u, L.bind(u, r, 1))
                        );
                      o = () => {
                        t && t(), i && i(), y.delete(e);
                      };
                    }
                  };
                return d(), [e, i, d, o];
              }
              return [e, y.get(e)[4]];
            },
            [F, W] = $(new Map()),
            D = h(
              {
                onLoadingSlow: c,
                onSuccess: c,
                onError: c,
                onErrorRetry: (e, t, n, r, i) => {
                  const o = n.errorRetryCount,
                    a = i.retryCount,
                    s =
                      ~~((Math.random() + 0.5) * (1 << (a < 8 ? a : 8))) *
                      n.errorRetryInterval;
                  (!d(o) && a > o) || setTimeout(r, s, i);
                },
                onDiscarded: c,
                revalidateOnFocus: !0,
                revalidateOnReconnect: !0,
                revalidateIfStale: !0,
                shouldRetryOnError: !0,
                errorRetryInterval: z ? 1e4 : 5e3,
                focusThrottleInterval: 5e3,
                dedupingInterval: 2e3,
                loadingTimeout: z ? 5e3 : 3e3,
                compare: (e, t) => g(e) == g(t),
                isPaused: () => !1,
                cache: F,
                mutate: W,
                fallback: {},
              },
              x
            ),
            V = (e, t) => {
              const n = h(e, t);
              if (t) {
                const { use: r, fallback: i } = e,
                  { use: o, fallback: a } = t;
                r && o && (n.use = r.concat(o)),
                  i && a && (n.fallback = h(i, a));
              }
              return n;
            },
            B = (0, a.createContext)({}),
            J = _ && window.__SWR_DEVTOOLS_USE__,
            q = J ? window.__SWR_DEVTOOLS_USE__ : [],
            G = (e) =>
              f(e[1])
                ? [e[0], e[1], e[2] || {}]
                : [e[0], null, (null === e[1] ? e[2] : e[1]) || {}],
            Z = () => h(D, (0, a.useContext)(B)),
            K = (e, t) => {
              const [n, r] = T(e),
                [, , , i] = y.get(F);
              if (i[n]) return i[n];
              const o = t(r);
              return (i[n] = o), o;
            },
            H = q.concat(
              (e) => (t, n, r) =>
                e(
                  t,
                  n &&
                    ((...e) => {
                      const [r] = T(t),
                        [, , , i] = y.get(F),
                        o = i[r];
                      return d(o) ? n(...e) : (delete i[r], o);
                    }),
                  r
                )
            );
          J && (window.__SWR_DEVTOOLS_REACT__ = a);
          const X = (e) => T(e)[0],
            Y =
              a.use ||
              ((e) => {
                if ("pending" === e.status) throw e;
                if ("fulfilled" === e.status) return e.value;
                throw "rejected" === e.status
                  ? e.reason
                  : ((e.status = "pending"),
                    e.then(
                      (t) => {
                        (e.status = "fulfilled"), (e.value = t);
                      },
                      (t) => {
                        (e.status = "rejected"), (e.reason = t);
                      }
                    ),
                    e);
              }),
            Q = { dedupe: !0 },
            ee = l.defineProperty(
              (e) => {
                const { value: t } = e,
                  n = (0, a.useContext)(B),
                  r = f(t),
                  i = (0, a.useMemo)(() => (r ? t(n) : t), [r, n, t]),
                  o = (0, a.useMemo)(() => (r ? i : V(n, i)), [r, n, i]),
                  s = i && i.provider,
                  c = (0, a.useRef)(u);
                s && !c.current && (c.current = $(s(o.cache || F), i));
                const l = c.current;
                return (
                  l && ((o.cache = l[0]), (o.mutate = l[1])),
                  I(() => {
                    if (l) return l[2] && l[2](), l[3];
                  }, []),
                  (0, a.createElement)(B.Provider, h(e, { value: o }))
                );
              },
              "defaultValue",
              { value: D }
            ),
            te =
              ((ne = (e, t, n) => {
                const {
                    cache: r,
                    compare: i,
                    suspense: o,
                    fallbackData: c,
                    revalidateOnMount: l,
                    revalidateIfStale: p,
                    refreshInterval: m,
                    refreshWhenHidden: g,
                    refreshWhenOffline: v,
                    keepPreviousData: b,
                  } = n,
                  [S, P, O, U] = y.get(r),
                  [x, A] = T(e),
                  M = (0, a.useRef)(!1),
                  z = (0, a.useRef)(!1),
                  R = (0, a.useRef)(x),
                  L = (0, a.useRef)(t),
                  $ = (0, a.useRef)(n),
                  F = () => $.current,
                  W = () => F().isVisible() && F().isOnline(),
                  [D, V, B, J] = k(r, x),
                  q = (0, a.useRef)({}).current,
                  G = d(c) ? n.fallback[x] : c,
                  Z = (e, t) => {
                    for (const n in q) {
                      const r = n;
                      if ("data" === r) {
                        if (!i(e[r], t[r])) {
                          if (!d(e[r])) return !1;
                          if (!i(oe, t[r])) return !1;
                        }
                      } else if (t[r] !== e[r]) return !1;
                    }
                    return !0;
                  },
                  K = (0, a.useMemo)(() => {
                    const e =
                        !!x &&
                        !!t &&
                        (d(l) ? !F().isPaused() && !o && (!!d(p) || p) : l),
                      n = (t) => {
                        const n = h(t);
                        return (
                          delete n._k,
                          e ? { isValidating: !0, isLoading: !0, ...n } : n
                        );
                      },
                      r = D(),
                      i = J(),
                      a = n(r),
                      s = r === i ? a : n(i);
                    let c = a;
                    return [
                      () => {
                        const e = n(D());
                        return Z(e, c)
                          ? ((c.data = e.data),
                            (c.isLoading = e.isLoading),
                            (c.isValidating = e.isValidating),
                            (c.error = e.error),
                            c)
                          : ((c = e), e);
                      },
                      () => s,
                    ];
                  }, [r, x]),
                  H = (0, s.useSyncExternalStore)(
                    (0, a.useCallback)(
                      (e) =>
                        B(x, (t, n) => {
                          Z(n, t) || e();
                        }),
                      [r, x]
                    ),
                    K[0],
                    K[1]
                  ),
                  X = !M.current,
                  ee = S[x] && S[x].length > 0,
                  te = H.data,
                  ne = d(te) ? G : te,
                  re = H.error,
                  ie = (0, a.useRef)(ne),
                  oe = b ? (d(te) ? ie.current : te) : ne,
                  ae =
                    !(ee && !d(re)) &&
                    (X && !d(l)
                      ? l
                      : !F().isPaused() && (o ? !d(ne) && p : d(ne) || p)),
                  se = !!(x && t && X && ae),
                  ce = d(H.isValidating) ? se : H.isValidating,
                  ue = d(H.isLoading) ? se : H.isLoading,
                  le = (0, a.useCallback)(
                    async (e) => {
                      const t = L.current;
                      if (!x || !t || z.current || F().isPaused()) return !1;
                      let r,
                        o,
                        a = !0;
                      const s = e || {},
                        c = !O[x] || !s.dedupe,
                        l = () =>
                          E
                            ? !z.current && x === R.current && M.current
                            : x === R.current,
                        h = { isValidating: !1, isLoading: !1 },
                        p = () => {
                          V(h);
                        },
                        m = () => {
                          const e = O[x];
                          e && e[1] === o && delete O[x];
                        },
                        g = { isValidating: !0 };
                      d(D().data) && (g.isLoading = !0);
                      try {
                        if (
                          (c &&
                            (V(g),
                            n.loadingTimeout &&
                              d(D().data) &&
                              setTimeout(() => {
                                a && l() && F().onLoadingSlow(x, n);
                              }, n.loadingTimeout),
                            (O[x] = [t(A), j()])),
                          ([r, o] = O[x]),
                          (r = await r),
                          c && setTimeout(m, n.dedupingInterval),
                          !O[x] || O[x][1] !== o)
                        )
                          return c && l() && F().onDiscarded(x), !1;
                        h.error = u;
                        const e = P[x];
                        if (!d(e) && (o <= e[0] || o <= e[1] || 0 === e[1]))
                          return p(), c && l() && F().onDiscarded(x), !1;
                        const s = D().data;
                        (h.data = i(s, r) ? s : r),
                          c && l() && F().onSuccess(r, x, n);
                      } catch (e) {
                        m();
                        const t = F(),
                          { shouldRetryOnError: n } = t;
                        t.isPaused() ||
                          ((h.error = e),
                          c &&
                            l() &&
                            (t.onError(e, x, t),
                            (!0 === n || (f(n) && n(e))) &&
                              W() &&
                              t.onErrorRetry(
                                e,
                                x,
                                t,
                                (e) => {
                                  const t = S[x];
                                  t && t[0] && t[0](3, e);
                                },
                                {
                                  retryCount: (s.retryCount || 0) + 1,
                                  dedupe: !0,
                                }
                              )));
                      }
                      return (a = !1), p(), !0;
                    },
                    [x, r]
                  ),
                  de = (0, a.useCallback)((...e) => N(r, R.current, ...e), []);
                if (
                  (I(() => {
                    (L.current = t),
                      ($.current = n),
                      d(te) || (ie.current = te);
                  }),
                  I(() => {
                    if (!x) return;
                    const e = le.bind(u, Q);
                    let t = 0;
                    const n = ((e, t, n) => {
                      const r = t[e] || (t[e] = []);
                      return (
                        r.push(n),
                        () => {
                          const e = r.indexOf(n);
                          e >= 0 && ((r[e] = r[r.length - 1]), r.pop());
                        }
                      );
                    })(x, S, (n, r = {}) => {
                      if (0 == n) {
                        const n = Date.now();
                        F().revalidateOnFocus &&
                          n > t &&
                          W() &&
                          ((t = n + F().focusThrottleInterval), e());
                      } else if (1 == n)
                        F().revalidateOnReconnect && W() && e();
                      else {
                        if (2 == n) return le();
                        if (3 == n) return le(r);
                      }
                    });
                    return (
                      (z.current = !1),
                      (R.current = x),
                      (M.current = !0),
                      V({ _k: A }),
                      ae &&
                        (d(ne) || C
                          ? e()
                          : ((r = e),
                            _ && typeof window.requestAnimationFrame != w
                              ? window.requestAnimationFrame(r)
                              : setTimeout(r, 1))),
                      () => {
                        (z.current = !0), n();
                      }
                    );
                    var r;
                  }, [x]),
                  I(() => {
                    let e;
                    function t() {
                      const t = f(m) ? m(D().data) : m;
                      t && -1 !== e && (e = setTimeout(n, t));
                    }
                    function n() {
                      D().error ||
                      (!g && !F().isVisible()) ||
                      (!v && !F().isOnline())
                        ? t()
                        : le(Q).then(t);
                    }
                    return (
                      t(),
                      () => {
                        e && (clearTimeout(e), (e = -1));
                      }
                    );
                  }, [m, g, v, x]),
                  (0, a.useDebugValue)(oe),
                  o && d(ne) && x)
                ) {
                  if (!E && C)
                    throw new Error(
                      "Fallback data is required when using suspense in SSR."
                    );
                  (L.current = t), ($.current = n), (z.current = !1);
                  const e = U[x];
                  if (!d(e)) {
                    const t = de(e);
                    Y(t);
                  }
                  if (!d(re)) throw re;
                  {
                    const e = le(Q);
                    d(oe) || ((e.status = "fulfilled"), (e.value = !0)), Y(e);
                  }
                }
                return {
                  mutate: de,
                  get data() {
                    return (q.data = !0), oe;
                  },
                  get error() {
                    return (q.error = !0), re;
                  },
                  get isValidating() {
                    return (q.isValidating = !0), ce;
                  },
                  get isLoading() {
                    return (q.isLoading = !0), ue;
                  },
                };
              }),
              function (...e) {
                const t = Z(),
                  [n, r, i] = G(e),
                  o = V(t, i);
                let a = ne;
                const { use: s } = o,
                  c = (s || []).concat(H);
                for (let e = c.length; e--; ) a = c[e](a);
                return a(n, r || o.fetcher || null, o);
              });
          var ne;
          const re = Promise.resolve(),
            ie = (
              (e, t) =>
              (...n) => {
                const [r, i, o] = G(n),
                  a = (o.use || []).concat(t);
                return e(r, i, { ...o, use: a });
              }
            )(te, (e) => (t, n, r) => {
              const i = (0, a.useRef)(!1),
                {
                  cache: o,
                  initialSize: c = 1,
                  revalidateAll: l = !1,
                  persistSize: h = !1,
                  revalidateFirstPage: p = !0,
                  revalidateOnMount: m = !1,
                  parallel: g = !1,
                } = r;
              let y;
              try {
                (y = ((e) => T(e ? e(0, null) : null)[0])(t)),
                  y && (y = "$inf$" + y);
              } catch (e) {}
              const [v, b, w] = k(o, y),
                _ = (0, a.useCallback)(
                  () => (d(v()._l) ? c : v()._l),
                  [o, y, c]
                );
              (0, s.useSyncExternalStore)(
                (0, a.useCallback)(
                  (e) =>
                    y
                      ? w(y, () => {
                          e();
                        })
                      : () => {},
                  [o, y]
                ),
                _,
                _
              );
              const S = (0, a.useCallback)(() => {
                  const e = v()._l;
                  return d(e) ? c : e;
                }, [y, c]),
                P = (0, a.useRef)(S());
              I(() => {
                i.current
                  ? y && b({ _l: h ? P.current : S() })
                  : (i.current = !0);
              }, [y, o]);
              const O = m && !i.current,
                U = e(
                  y,
                  async (e) => {
                    const i = v()._i,
                      a = [],
                      s = S(),
                      [c] = k(o, e),
                      f = c().data,
                      h = [];
                    let m = null;
                    for (let e = 0; e < s; ++e) {
                      const [s, c] = T(t(e, g ? null : m));
                      if (!s) break;
                      const [u, y] = k(o, s);
                      let v = u().data;
                      const b =
                        l ||
                        i ||
                        d(v) ||
                        (p && !e && !d(f)) ||
                        O ||
                        (f && !d(f[e]) && !r.compare(f[e], v));
                      if (n && b) {
                        const t = async () => {
                          (v = await n(c)), y({ data: v, _k: c }), (a[e] = v);
                        };
                        g ? h.push(t) : await t();
                      } else a[e] = v;
                      g || (m = v);
                    }
                    return (
                      g && (await Promise.all(h.map((e) => e()))),
                      b({ _i: u }),
                      a
                    );
                  },
                  r
                ),
                x = (0, a.useCallback)(
                  function (e, t) {
                    const n =
                        "boolean" == typeof t ? { revalidate: t } : t || {},
                      r = !1 !== n.revalidate;
                    return y
                      ? (r && (d(e) ? b({ _i: !0 }) : b({ _i: !1 })),
                        arguments.length
                          ? U.mutate(e, { ...n, revalidate: r })
                          : U.mutate())
                      : re;
                  },
                  [y, o]
                ),
                A = (0, a.useCallback)(
                  (e) => {
                    if (!y) return re;
                    const [, n] = k(o, y);
                    let r;
                    if (
                      (f(e) ? (r = e(S())) : "number" == typeof e && (r = e),
                      "number" != typeof r)
                    )
                      return re;
                    n({ _l: r }), (P.current = r);
                    const i = [],
                      [a] = k(o, y);
                    let s = null;
                    for (let e = 0; e < r; ++e) {
                      const [n] = T(t(e, s)),
                        [r] = k(o, n),
                        c = n ? r().data : u;
                      if (d(c)) return x(a().data);
                      i.push(c), (s = c);
                    }
                    return x(i);
                  },
                  [y, o, x, S]
                );
              return {
                size: S(),
                setSize: A,
                mutate: x,
                get data() {
                  return U.data;
                },
                get error() {
                  return U.error;
                },
                get isValidating() {
                  return U.isValidating;
                },
                get isLoading() {
                  return U.isLoading;
                },
              };
            });
          function oe(e, t) {
            if (!e)
              throw "string" == typeof t
                ? new Error(t)
                : new Error(`${t.displayName} not found`);
          }
          var ae = (e, t) => {
              const { assertCtxFn: n = oe } = t || {},
                r = a.createContext(void 0);
              return (
                (r.displayName = e),
                [
                  r,
                  () => {
                    const t = a.useContext(r);
                    return n(t, `${e} not found`), t.value;
                  },
                  () => {
                    const e = a.useContext(r);
                    return e ? e.value : {};
                  },
                ]
              );
            },
            se = {};
          (0, o.r)(se, {
            SWRConfig: () => ee,
            useSWR: () => te,
            useSWRInfinite: () => ie,
          }),
            (0, o.y)(se, r);
          var [ce, ue] = ae("ClerkInstanceContext"),
            [le, de] = ae("UserContext"),
            [fe, he] = ae("ClientContext"),
            [pe, me] = ae("SessionContext"),
            [ge, ye] = ae("OrganizationContext"),
            ve = ({
              children: e,
              organization: t,
              lastOrganizationMember: n,
              lastOrganizationInvitation: r,
              swrConfig: i,
            }) =>
              a.createElement(
                ee,
                { value: i },
                a.createElement(
                  ge.Provider,
                  {
                    value: {
                      value: {
                        organization: t,
                        lastOrganizationMember: n,
                        lastOrganizationInvitation: r,
                      },
                    },
                  },
                  e
                )
              );
          function be(e, t) {
            const n = new Set(Object.keys(t)),
              r = {};
            for (const t of Object.keys(e)) n.has(t) || (r[t] = e[t]);
            return r;
          }
          var we = (e, t) => {
              var n, r, i;
              const o = "boolean" == typeof e && e,
                s = (0, a.useRef)(
                  o
                    ? t.initialPage
                    : null !== (n = null == e ? void 0 : e.initialPage) &&
                      void 0 !== n
                    ? n
                    : t.initialPage
                ),
                c = (0, a.useRef)(
                  o
                    ? t.pageSize
                    : null !== (r = null == e ? void 0 : e.pageSize) &&
                      void 0 !== r
                    ? r
                    : t.pageSize
                ),
                u = {};
              for (const n of Object.keys(t))
                u[n] = o
                  ? t[n]
                  : null !== (i = null == e ? void 0 : e[n]) && void 0 !== i
                  ? i
                  : t[n];
              return { ...u, initialPage: s.current, pageSize: c.current };
            },
            _e = (e, t, n, r) => {
              var i, o, s, c, u, l;
              const [d, f] = (0, a.useState)(
                  null !== (i = e.initialPage) && void 0 !== i ? i : 1
                ),
                h = (0, a.useRef)(
                  null !== (o = e.initialPage) && void 0 !== o ? o : 1
                ),
                p = (0, a.useRef)(
                  null !== (s = e.pageSize) && void 0 !== s ? s : 10
                ),
                m = null === (c = n.enabled) || void 0 === c || c,
                g = null !== (u = n.infinite) && void 0 !== u && u,
                y = null !== (l = n.keepPreviousData) && void 0 !== l && l,
                v = { ...r, ...e, initialPage: d, pageSize: p.current },
                {
                  data: b,
                  isValidating: w,
                  isLoading: _,
                  error: S,
                  mutate: k,
                } = te(
                  !g && t && m ? v : null,
                  (e) => {
                    const n = be(e, r);
                    return null == t ? void 0 : t(n);
                  },
                  { keepPreviousData: y }
                ),
                {
                  data: P,
                  isLoading: O,
                  isValidating: U,
                  error: x,
                  size: A,
                  setSize: E,
                  mutate: C,
                } = ie(
                  (t) =>
                    g && m
                      ? {
                          ...e,
                          ...r,
                          initialPage: h.current + t,
                          pageSize: p.current,
                        }
                      : null,
                  (e) => {
                    const n = be(e, r);
                    return null == t ? void 0 : t(n);
                  }
                ),
                I = (0, a.useMemo)(() => (g ? A : d), [g, A, d]),
                M = (0, a.useCallback)(
                  (e) => {
                    if (!g) return f(e);
                    E(e);
                  },
                  [E]
                ),
                z = (0, a.useMemo)(() => {
                  var e, t;
                  return g
                    ? null !==
                        (e =
                          null == P
                            ? void 0
                            : P.map((e) =>
                                null == e ? void 0 : e.data
                              ).flat()) && void 0 !== e
                      ? e
                      : []
                    : null !== (t = null == b ? void 0 : b.data) && void 0 !== t
                    ? t
                    : [];
                }, [g, b, P]),
                T = (0, a.useMemo)(() => {
                  var e, t;
                  return g
                    ? (null ===
                        (e =
                          null == P
                            ? void 0
                            : P[(null == P ? void 0 : P.length) - 1]) ||
                      void 0 === e
                        ? void 0
                        : e.total_count) || 0
                    : null !== (t = null == b ? void 0 : b.total_count) &&
                      void 0 !== t
                    ? t
                    : 0;
                }, [g, b, P]),
                R = g ? O : _,
                j = g ? U : w,
                N = !!(g ? x : S),
                L = (0, a.useCallback)(() => {
                  M((e) => Math.max(0, e + 1));
                }, [M]),
                $ = (0, a.useCallback)(() => {
                  M((e) => Math.max(0, e - 1));
                }, [M]),
                F = (h.current - 1) * p.current,
                W = Math.ceil((T - F) / p.current),
                D = T - F * p.current > I * p.current,
                V = (I - 1) * p.current > F * p.current;
              return {
                data: z,
                count: T,
                isLoading: R,
                isFetching: j,
                isError: N,
                page: I,
                pageCount: W,
                fetchPage: M,
                fetchNext: L,
                fetchPrevious: $,
                hasNextPage: D,
                hasPreviousPage: V,
                revalidate: g ? () => C() : () => k(),
                setData: g
                  ? (e) => C(e, { revalidate: !1 })
                  : (e) => k(e, { revalidate: !1 }),
              };
            },
            Se = {
              data: void 0,
              count: void 0,
              isLoading: !1,
              isFetching: !1,
              isError: !1,
              page: void 0,
              pageCount: void 0,
              fetchPage: void 0,
              fetchNext: void 0,
              fetchPrevious: void 0,
              hasNextPage: !1,
              hasPreviousPage: !1,
              revalidate: void 0,
              setData: void 0,
            },
            ke = (e) => {
              const {
                  invitationList: t,
                  membershipList: n,
                  domains: r,
                  membershipRequests: o,
                  memberships: a,
                  invitations: s,
                } = e || {},
                {
                  organization: c,
                  lastOrganizationMember: u,
                  lastOrganizationInvitation: l,
                } = ye(),
                d = me(),
                f = we(r, {
                  initialPage: 1,
                  pageSize: 10,
                  keepPreviousData: !1,
                  infinite: !1,
                  enrollmentMode: void 0,
                }),
                h = we(o, {
                  initialPage: 1,
                  pageSize: 10,
                  status: "pending",
                  keepPreviousData: !1,
                  infinite: !1,
                }),
                p = we(a, {
                  initialPage: 1,
                  pageSize: 10,
                  role: void 0,
                  keepPreviousData: !1,
                  infinite: !1,
                }),
                m = we(s, {
                  initialPage: 1,
                  pageSize: 10,
                  status: ["pending"],
                  keepPreviousData: !1,
                  infinite: !1,
                }),
                g = ue(),
                y = !!(g.loaded && d && c),
                v =
                  void 0 === r
                    ? void 0
                    : {
                        initialPage: f.initialPage,
                        pageSize: f.pageSize,
                        enrollmentMode: f.enrollmentMode,
                      },
                b =
                  void 0 === o
                    ? void 0
                    : {
                        initialPage: h.initialPage,
                        pageSize: h.pageSize,
                        status: h.status,
                      },
                w =
                  void 0 === a
                    ? void 0
                    : {
                        initialPage: p.initialPage,
                        pageSize: p.pageSize,
                        role: p.role,
                      },
                _ =
                  void 0 === s
                    ? void 0
                    : {
                        initialPage: m.initialPage,
                        pageSize: m.pageSize,
                        status: m.status,
                      },
                S = _e(
                  { ...v },
                  null == c ? void 0 : c.getDomains,
                  {
                    keepPreviousData: f.keepPreviousData,
                    infinite: f.infinite,
                    enabled: !!v,
                  },
                  { type: "domains", organizationId: null == c ? void 0 : c.id }
                ),
                k = _e(
                  { ...b },
                  null == c ? void 0 : c.getMembershipRequests,
                  {
                    keepPreviousData: h.keepPreviousData,
                    infinite: h.infinite,
                    enabled: !!b,
                  },
                  {
                    type: "membershipRequests",
                    organizationId: null == c ? void 0 : c.id,
                  }
                ),
                P = _e(
                  { ...w, paginated: !0 },
                  null == c ? void 0 : c.getMemberships,
                  {
                    keepPreviousData: p.keepPreviousData,
                    infinite: p.infinite,
                    enabled: !!w,
                  },
                  { type: "members", organizationId: null == c ? void 0 : c.id }
                ),
                O = _e(
                  { ..._ },
                  null == c ? void 0 : c.getInvitations,
                  {
                    keepPreviousData: m.keepPreviousData,
                    infinite: m.infinite,
                    enabled: !!_,
                  },
                  {
                    type: "invitations",
                    organizationId: null == c ? void 0 : c.id,
                  }
                ),
                U = g.loaded
                  ? () => {
                      var e;
                      return null === (e = g.organization) || void 0 === e
                        ? void 0
                        : e.getPendingInvitations(t);
                    }
                  : () => [],
                x = g.loaded
                  ? () => {
                      var e;
                      return null === (e = g.organization) || void 0 === e
                        ? void 0
                        : e.getMemberships(n);
                    }
                  : () => [];
              t &&
                (0, i.x9)(
                  "invitationList in useOrganization",
                  "Use the `invitations` property and return value instead."
                );
              const {
                data: A,
                isValidating: E,
                mutate: C,
              } = te(y && t ? Pe("invites", c, l, t) : null, U);
              n &&
                (0, i.x9)(
                  "membershipList in useOrganization",
                  "Use the `memberships` property and return value instead."
                );
              const {
                data: I,
                isValidating: M,
                mutate: z,
              } = te(y && n ? Pe("memberships", c, u, n) : null, x);
              return void 0 === c
                ? {
                    isLoaded: !1,
                    organization: void 0,
                    invitationList: void 0,
                    membershipList: void 0,
                    membership: void 0,
                    domains: Se,
                    membershipRequests: Se,
                    memberships: Se,
                    invitations: Se,
                  }
                : null === c
                ? {
                    isLoaded: !0,
                    organization: null,
                    invitationList: null,
                    membershipList: null,
                    membership: null,
                    domains: null,
                    membershipRequests: null,
                    memberships: null,
                    invitations: null,
                  }
                : !g.loaded && c
                ? {
                    isLoaded: !0,
                    organization: c,
                    invitationList: void 0,
                    membershipList: void 0,
                    membership: void 0,
                    domains: Se,
                    membershipRequests: Se,
                    memberships: Se,
                    invitations: Se,
                  }
                : {
                    isLoaded: !M && !E,
                    organization: c,
                    membershipList: I,
                    membership:
                      ((T = d.user.organizationMemberships),
                      (R = c.id),
                      T.find((e) => e.organization.id === R)),
                    invitationList: A,
                    unstable__mutate: () => {
                      z(), C();
                    },
                    domains: S,
                    membershipRequests: k,
                    memberships: P,
                    invitations: O,
                  };
              var T, R;
            };
          function Pe(e, t, n, r) {
            return [
              e,
              t.id,
              null == n ? void 0 : n.id,
              null == n ? void 0 : n.updatedAt,
              r.offset,
              r.limit,
            ]
              .filter(Boolean)
              .join("-");
          }
          var Oe = {
              data: void 0,
              count: void 0,
              isLoading: !1,
              isFetching: !1,
              isError: !1,
              page: void 0,
              pageCount: void 0,
              fetchPage: void 0,
              fetchNext: void 0,
              fetchPrevious: void 0,
              hasNextPage: !1,
              hasPreviousPage: !1,
              revalidate: void 0,
              setData: void 0,
            },
            Ue = (e) => {
              const {
                  userMemberships: t,
                  userInvitations: n,
                  userSuggestions: r,
                } = e || {},
                o = we(t, {
                  initialPage: 1,
                  pageSize: 10,
                  keepPreviousData: !1,
                  infinite: !1,
                }),
                a = we(n, {
                  initialPage: 1,
                  pageSize: 10,
                  status: "pending",
                  keepPreviousData: !1,
                  infinite: !1,
                }),
                s = we(r, {
                  initialPage: 1,
                  pageSize: 10,
                  status: "pending",
                  keepPreviousData: !1,
                  infinite: !1,
                }),
                c = ue(),
                u = de(),
                l =
                  void 0 === t
                    ? void 0
                    : { initialPage: o.initialPage, pageSize: o.pageSize },
                d =
                  void 0 === n
                    ? void 0
                    : {
                        initialPage: a.initialPage,
                        pageSize: a.pageSize,
                        status: a.status,
                      },
                f =
                  void 0 === r
                    ? void 0
                    : {
                        initialPage: s.initialPage,
                        pageSize: s.pageSize,
                        status: s.status,
                      },
                h = !(!c.loaded || !u),
                p = _e(
                  { ...l, paginated: !0 },
                  null == u ? void 0 : u.getOrganizationMemberships,
                  {
                    keepPreviousData: o.keepPreviousData,
                    infinite: o.infinite,
                    enabled: !!l,
                  },
                  { type: "userMemberships", userId: null == u ? void 0 : u.id }
                ),
                m = _e(
                  { ...d },
                  null == u ? void 0 : u.getOrganizationInvitations,
                  {
                    keepPreviousData: a.keepPreviousData,
                    infinite: a.infinite,
                    enabled: !!d,
                  },
                  { type: "userInvitations", userId: null == u ? void 0 : u.id }
                ),
                g = _e(
                  { ...f },
                  null == u ? void 0 : u.getOrganizationSuggestions,
                  {
                    keepPreviousData: s.keepPreviousData,
                    infinite: s.infinite,
                    enabled: !!f,
                  },
                  { type: "userSuggestions", userId: null == u ? void 0 : u.id }
                );
              if (!h)
                return {
                  isLoaded: !1,
                  organizationList: void 0,
                  createOrganization: void 0,
                  setActive: void 0,
                  userMemberships: Oe,
                  userInvitations: Oe,
                  userSuggestions: Oe,
                };
              const y = {
                isLoaded: h,
                organizationList:
                  ((v = u.organizationMemberships),
                  v.map((e) => ({
                    membership: e,
                    organization: e.organization,
                  }))),
                setActive: c.setActive,
                createOrganization: c.createOrganization,
                userMemberships: p,
                userInvitations: m,
                userSuggestions: g,
              };
              var v;
              return (
                (0, i.x6)(
                  y,
                  "organizationList",
                  "Use `userMemberships` instead."
                ),
                y
              );
            },
            xe = () => {
              (0, i.x9)(
                "useOrganizations",
                "Use useOrganizationList, useOrganization, or useClerk instead."
              );
              const e = ue();
              return e.loaded
                ? {
                    isLoaded: !0,
                    createOrganization: e.createOrganization,
                    getOrganizationMemberships: e.getOrganizationMemberships,
                    getOrganization: e.getOrganization,
                  }
                : {
                    isLoaded: !1,
                    createOrganization: void 0,
                    getOrganizationMemberships: void 0,
                    getOrganization: void 0,
                  };
            },
            Ae = "undefined" != typeof window ? a.useLayoutEffect : a.useEffect;
        },
      },
      o = {};
    function a(e) {
      var t = o[e];
      if (void 0 !== t) return t.exports;
      var n = (o[e] = { exports: {} });
      return i[e].call(n.exports, n, n.exports, a), n.exports;
    }
    (a.m = i),
      (a.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return a.d(t, { a: t }), t;
      }),
      (t = Object.getPrototypeOf
        ? function (e) {
            return Object.getPrototypeOf(e);
          }
        : function (e) {
            return e.__proto__;
          }),
      (a.t = function (n, r) {
        if ((1 & r && (n = this(n)), 8 & r)) return n;
        if ("object" == typeof n && n) {
          if (4 & r && n.__esModule) return n;
          if (16 & r && "function" == typeof n.then) return n;
        }
        var i = Object.create(null);
        a.r(i);
        var o = {};
        e = e || [null, t({}), t([]), t(t)];
        for (
          var s = 2 & r && n;
          "object" == typeof s && !~e.indexOf(s);
          s = t(s)
        )
          Object.getOwnPropertyNames(s).forEach(function (e) {
            o[e] = function () {
              return n[e];
            };
          });
        return (
          (o.default = function () {
            return n;
          }),
          a.d(i, o),
          i
        );
      }),
      (a.d = function (e, t) {
        for (var n in t)
          a.o(t, n) &&
            !a.o(e, n) &&
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      }),
      (a.f = {}),
      (a.e = function (e) {
        return Promise.all(
          Object.keys(a.f).reduce(function (t, n) {
            return a.f[n](e, t), t;
          }, [])
        );
      }),
      (a.u = function (e) {
        return (
          ({
            132: "userbutton",
            216: "vendors",
            220: "zxcvbn-ts-core",
            229: "organizationprofile",
            336: "organizationswitcher",
            490: "impersonationfab",
            577: "signin",
            653: "organizationlist",
            700: "ui-common",
            804: "zxcvbn-common",
            830: "signup",
            971: "userprofile",
            979: "createorganization",
          }[e] || e) +
          "_" +
          a.h().slice(0, 6) +
          "_4.68.5.js"
        );
      }),
      (a.h = function () {
        return "5dd90d835469e0a6ecd7";
      }),
      (a.g = (function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e) {
          if ("object" == typeof window) return window;
        }
      })()),
      (a.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n = {}),
      (r = "@clerk/clerk-js:"),
      (a.l = function (e, t, i, o) {
        if (n[e]) n[e].push(t);
        else {
          var s, c;
          if (void 0 !== i)
            for (
              var u = document.getElementsByTagName("script"), l = 0;
              l < u.length;
              l++
            ) {
              var d = u[l];
              if (
                d.getAttribute("src") == e ||
                d.getAttribute("data-webpack") == r + i
              ) {
                s = d;
                break;
              }
            }
          s ||
            ((c = !0),
            ((s = document.createElement("script")).charset = "utf-8"),
            (s.timeout = 120),
            a.nc && s.setAttribute("nonce", a.nc),
            s.setAttribute("data-webpack", r + i),
            (s.src = e)),
            (n[e] = [t]);
          var f = function (t, r) {
              (s.onerror = s.onload = null), clearTimeout(h);
              var i = n[e];
              if (
                (delete n[e],
                s.parentNode && s.parentNode.removeChild(s),
                i &&
                  i.forEach(function (e) {
                    return e(r);
                  }),
                t)
              )
                return t(r);
            },
            h = setTimeout(
              f.bind(null, void 0, { type: "timeout", target: s }),
              12e4
            );
          (s.onerror = f.bind(null, s.onerror)),
            (s.onload = f.bind(null, s.onload)),
            c && document.head.appendChild(s);
        }
      }),
      (a.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (function () {
        var e;
        a.g.importScripts && (e = a.g.location + "");
        var t = a.g.document;
        if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
          var n = t.getElementsByTagName("script");
          if (n.length)
            for (var r = n.length - 1; r > -1 && !e; ) e = n[r--].src;
        }
        if (!e)
          throw new Error(
            "Automatic publicPath is not supported in this browser"
          );
        (e = e
          .replace(/#.*$/, "")
          .replace(/\?.*$/, "")
          .replace(/\/[^\/]+$/, "/")),
          (a.p = e);
      })(),
      (function () {
        var e = { 787: 0 };
        a.f.j = function (t, n) {
          var r = a.o(e, t) ? e[t] : void 0;
          if (0 !== r)
            if (r) n.push(r[2]);
            else {
              var i = new Promise(function (n, i) {
                r = e[t] = [n, i];
              });
              n.push((r[2] = i));
              var o = a.p + a.u(t),
                s = new Error();
              a.l(
                o,
                function (n) {
                  if (a.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                    var i = n && ("load" === n.type ? "missing" : n.type),
                      o = n && n.target && n.target.src;
                    (s.message =
                      "Loading chunk " +
                      t +
                      " failed.\n(" +
                      i +
                      ": " +
                      o +
                      ")"),
                      (s.name = "ChunkLoadError"),
                      (s.type = i),
                      (s.request = o),
                      r[1](s);
                  }
                },
                "chunk-" + t,
                t
              );
            }
        };
        var t = function (t, n) {
            var r,
              i,
              o = n[0],
              s = n[1],
              c = n[2],
              u = 0;
            if (
              o.some(function (t) {
                return 0 !== e[t];
              })
            ) {
              for (r in s) a.o(s, r) && (a.m[r] = s[r]);
              c && c(a);
            }
            for (t && t(n); u < o.length; u++)
              (i = o[u]), a.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
          },
          n = (globalThis.webpackChunk_clerk_clerk_js =
            globalThis.webpackChunk_clerk_clerk_js || []);
        n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
      })();
    var s = {};
    return (
      (function () {
        "use strict";
        a.r(s);
        {
          const e = /(^.*\/@clerk\/clerk-js@)(.+?)(\/dist.*)/;
          (() => {
            try {
              const t = new URL(document.currentScript.src);
              let n = new URL(t.href.split("/").slice(0, -1).join("/")).href;
              (n += n.endsWith("/") ? "" : "/"),
                (a.p = n.replace(e, "$14.68.5$3"));
            } catch (e) {}
          })();
        }
        a(5047);
        var e = a(4096),
          t = a(6678),
          n = a(996),
          r = a(187);
        function i(e, t) {
          return (function (e, t) {
            if ((!e && t) || (e && !t)) return !0;
            if (!e && e === t) return !1;
            if (!e || !t) return !0;
            try {
              if (r.KU.isClientResource(e))
                return (function (e, t) {
                  return (
                    e.id !== t.id ||
                    e.updatedAt.getTime() < t.updatedAt.getTime() ||
                    e.sessions.length !== t.sessions.length
                  );
                })(e, t);
              if (r.z_.isSessionResource(e))
                return (function (e, t) {
                  return (
                    e.id !== t.id ||
                    e.updatedAt.getTime() < t.updatedAt.getTime() ||
                    (function (e, t) {
                      var n, r, i, o, a, s;
                      if (
                        e.lastActiveOrganizationId !==
                        t.lastActiveOrganizationId
                      )
                        return !0;
                      const c =
                          null ===
                            (r =
                              null === (n = e.user) || void 0 === n
                                ? void 0
                                : n.organizationMemberships) || void 0 === r
                            ? void 0
                            : r.find(
                                (t) =>
                                  t.organization.id ===
                                  e.lastActiveOrganizationId
                              ),
                        u =
                          null ===
                            (o =
                              null === (i = t.user) || void 0 === i
                                ? void 0
                                : i.organizationMemberships) || void 0 === o
                            ? void 0
                            : o.find(
                                (t) =>
                                  t.organization.id ===
                                  e.lastActiveOrganizationId
                              );
                      return (
                        (null == c ? void 0 : c.role) !==
                          (null == u ? void 0 : u.role) ||
                        (null === (a = null == c ? void 0 : c.permissions) ||
                        void 0 === a
                          ? void 0
                          : a.length) !==
                          (null === (s = null == u ? void 0 : u.permissions) ||
                          void 0 === s
                            ? void 0
                            : s.length)
                      );
                    })(t, e)
                  );
                })(e, t);
              if (r.n5.isUserResource(e))
                return (function (e, t) {
                  return (
                    e.id !== t.id ||
                    e.updatedAt.getTime() < t.updatedAt.getTime() ||
                    (function (e, t) {
                      var n, r;
                      return (
                        e.organizationMemberships.length !==
                          t.organizationMemberships.length ||
                        (null === (n = e.organizationMemberships[0]) ||
                        void 0 === n
                          ? void 0
                          : n.updatedAt) !==
                          (null === (r = t.organizationMemberships[0]) ||
                          void 0 === r
                            ? void 0
                            : r.updatedAt)
                      );
                    })(t, e)
                  );
                })(e, t);
            } catch (e) {
              return !0;
            }
            return !0;
          })(e, t)
            ? t
            : e;
        }
        var o = a(9841),
          c = a(361);
        var u = a(3351),
          l = a(221),
          d = a(7084);
        class f {
          constructor() {
            (this.lock = (0, n.ED)("clerk.lock.refreshSessionToken")),
              (this.workerTimers = (0, e.Q5)()),
              (this.timerId = null);
          }
          startPollingForSessionToken(e) {
            this.timerId ||
              (this.timerId = this.workerTimers.setInterval(() => {
                this.lock.acquireLockAndRun(e);
              }, 5e3));
          }
          stopPollingForSessionToken() {
            this.timerId &&
              (this.workerTimers.clearInterval(this.timerId),
              (this.timerId = null));
          }
        }
        class h {
          constructor(e) {
            (this.clerk = e),
              (this.cookies = (0, n.i2)()),
              (this.poller = null),
              d.Y.on(d.U.TokenUpdate, ({ token: e }) => {
                this.updateSessionCookie(null == e ? void 0 : e.getRawString());
              }),
              this.refreshTokenOnVisibilityChange(),
              this.startPollingForToken();
          }
          setEnvironment(e) {
            (this.environment = e),
              this.setClientUatCookieForDevelopmentInstances();
          }
          async setAuthCookiesFromSession(e) {
            this.updateSessionCookie(await (null == e ? void 0 : e.getToken())),
              this.setClientUatCookieForDevelopmentInstances();
          }
          startPollingForToken() {
            this.poller || (this.poller = new f()),
              this.poller.startPollingForSessionToken(() =>
                this.refreshSessionToken()
              );
          }
          refreshTokenOnVisibilityChange() {
            (0, n._f)() &&
              document.addEventListener("visibilitychange", () => {
                "visible" === document.visibilityState &&
                  this.refreshSessionToken();
              });
          }
          async refreshSessionToken() {
            if ((0, n._f)() && this.clerk.session)
              try {
                this.updateSessionCookie(await this.getNewToken());
              } catch (e) {
                return this.handleGetTokenError(e);
              }
          }
          getNewToken() {
            var e;
            return null === (e = this.clerk.session) || void 0 === e
              ? void 0
              : e.getToken();
          }
          setSessionCookie(e) {
            this.cookies.setSessionCookie(
              "string" == typeof e ? e : e.getRawString()
            );
          }
          updateSessionCookie(e) {
            return e ? this.setSessionCookie(e) : this.removeSessionCookie();
          }
          removeSessionCookie() {
            this.cookies.removeSessionCookie();
          }
          setClientUatCookieForDevelopmentInstances() {
            this.environment &&
              this.environment.isDevelopmentOrStaging() &&
              this.inCustomDevelopmentDomain() &&
              this.cookies.setClientUatCookie(this.clerk.client);
          }
          inCustomDevelopmentDomain() {
            const e = this.clerk.frontendApi.replace("clerk.", "");
            return !window.location.host.endsWith(e);
          }
          handleGetTokenError(e) {
            (0, l.kD)(e) || (0, c.Fo)(e.message || e),
              (0, l.ix)(e)
                ? this.clerk.handleUnauthenticated()
                : (0, l.eE)(e) || (0, c.Fo)(e.toString());
          }
        }
        var p,
          m,
          g,
          y,
          v,
          b,
          w,
          _,
          S,
          k,
          P,
          O,
          U,
          x,
          A,
          E,
          C,
          I,
          M,
          z,
          T,
          R,
          j,
          N,
          L,
          $,
          F,
          W,
          D,
          V,
          B,
          J,
          q,
          G,
          Z,
          K,
          H,
          X,
          Y,
          Q,
          ee,
          te,
          ne = a(4850),
          re = function (e, t, n, r) {
            if ("a" === n && !r)
              throw new TypeError(
                "Private accessor was defined without a getter"
              );
            if ("function" == typeof t ? e !== t || !r : !t.has(e))
              throw new TypeError(
                "Cannot read private member from an object whose class did not declare it"
              );
            return "m" === n
              ? r
              : "a" === n
              ? r.call(e)
              : r
              ? r.value
              : t.get(e);
          },
          ie = function (e, t, n, r, i) {
            if ("m" === r)
              throw new TypeError("Private method is not writable");
            if ("a" === r && !i)
              throw new TypeError(
                "Private accessor was defined without a setter"
              );
            if ("function" == typeof t ? e !== t || !i : !t.has(e))
              throw new TypeError(
                "Cannot write private member to an object whose class did not declare it"
              );
            return (
              "a" === r ? i.call(e, n) : i ? (i.value = n) : t.set(e, n), n
            );
          };
        const oe = {
          polling: !0,
          standardBrowser: !0,
          touchSession: !0,
          isSatellite: !1,
          signInUrl: void 0,
          signUpUrl: void 0,
          afterSignInUrl: void 0,
          afterSignUpUrl: void 0,
          isInterstitial: !1,
        };
        class ae {
          get version() {
            return p.version;
          }
          set sdkMetadata(e) {
            p.sdkMetadata = e;
          }
          get sdkMetadata() {
            return p.sdkMetadata;
          }
          get loaded() {
            return re(this, P, "f");
          }
          get isSatellite() {
            return (
              !!(0, n._f)() &&
              (0, e.YZ)(
                re(this, A, "f").isSatellite,
                new URL(window.location.href),
                !1
              )
            );
          }
          get domain() {
            if ((0, n._f)()) {
              const t = (0, e.d5)(
                (0, e.YZ)(re(this, m, "f"), new URL(window.location.href))
              );
              return "production" === re(this, k, "f") ? (0, e.xy)(t) : t;
            }
            return "";
          }
          get proxyUrl() {
            if ((0, n._f)()) {
              const t = (0, e.YZ)(
                re(this, g, "f"),
                new URL(window.location.href)
              );
              return (
                (0, e.jL)(t) || n.RM.throwInvalidProxyUrl({ url: t }),
                (0, e.kI)(t)
              );
            }
            return "";
          }
          get instanceType() {
            return re(this, k, "f");
          }
          get isStandardBrowser() {
            return re(this, A, "f").standardBrowser || !1;
          }
          get experimental_canUseCaptcha() {
            return (
              (0, e.x9)(
                "experimental_canUseCaptcha",
                "This is will be dropped in the next major version"
              ),
              !!re(this, _, "f") &&
                re(this, _, "f").userSettings.signUp.captcha_enabled &&
                re(this, A, "f").standardBrowser &&
                "production" === re(this, k, "f")
            );
          }
          get experimental_captchaSiteKey() {
            return (
              (0, e.x9)(
                "experimental_captchaSiteKey",
                "This is will be dropped in the next major version"
              ),
              re(this, _, "f")
                ? re(this, _, "f").displayConfig.captchaPublicKey
                : null
            );
          }
          get experimental_captchaURL() {
            return (
              (0, e.x9)(
                "experimental_captchaURL",
                "This is will be dropped in the next major version"
              ),
              re(this, S, "f")
                ? re(this, S, "f")
                    .buildUrl({
                      path: "cloudflare/turnstile/v0/api.js",
                      pathPrefix: "",
                      search: "?render=explicit",
                    })
                    .toString()
                : null
            );
          }
          constructor(a, s) {
            if (
              ((this.internal_last_error = null),
              m.set(this, void 0),
              g.set(this, void 0),
              y.set(this, null),
              v.set(this, null),
              b.set(this, void 0),
              w.set(this, null),
              _.set(this, void 0),
              S.set(this, void 0),
              k.set(this, void 0),
              P.set(this, !1),
              O.set(this, null),
              U.set(this, null),
              x.set(this, []),
              A.set(this, {}),
              E.set(this, null),
              (this.getFapiClient = () => re(this, S, "f")),
              (this.isReady = () => re(this, P, "f")),
              (this.load = async (e) => {
                re(this, P, "f") ||
                  (ie(this, A, { ...oe, ...e }, "f"),
                  re(this, A, "f").standardBrowser
                    ? ie(this, P, await re(this, F, "f").call(this), "f")
                    : ie(this, P, await re(this, W, "f").call(this), "f"));
              }),
              (this.signOut = async (e, t) => {
                var r;
                if (!this.client || 0 === this.client.sessions.length) return;
                const i = "function" == typeof e ? e : void 0,
                  o = e && "object" == typeof e ? e : t || {};
                if (!o.sessionId || 1 === this.client.activeSessions.length)
                  return (
                    await this.client.destroy(),
                    this.setActive({ session: null, beforeEmit: (0, n.BT)(i) })
                  );
                const a = this.client.activeSessions.find(
                    (e) => e.id === o.sessionId
                  ),
                  s =
                    (null == a ? void 0 : a.id) &&
                    (null === (r = this.session) || void 0 === r
                      ? void 0
                      : r.id) === a.id;
                return (
                  await (null == a ? void 0 : a.remove()),
                  s
                    ? this.setActive({
                        session: null,
                        beforeEmit: (0, n.BT)(i),
                      })
                    : void 0
                );
              }),
              (this.openSignIn = (e) => {
                if (
                  (this.assertComponentsReady(re(this, b, "f")),
                  (0, n.So)(this, re(this, _, "f")) &&
                    "development" === re(this, k, "f"))
                )
                  return console.info(ne.q.cannotOpenSignUpOrSignUp);
                re(this, b, "f")
                  .ensureMounted({ preloadHint: "SignIn" })
                  .then((t) => t.openModal("signIn", e || {}));
              }),
              (this.closeSignIn = () => {
                this.assertComponentsReady(re(this, b, "f")),
                  re(this, b, "f")
                    .ensureMounted()
                    .then((e) => e.closeModal("signIn"));
              }),
              (this.openSignUp = (e) => {
                if (
                  (this.assertComponentsReady(re(this, b, "f")),
                  (0, n.So)(this, re(this, _, "f")) &&
                    "development" === re(this, k, "f"))
                )
                  return console.info(ne.q.cannotOpenSignUpOrSignUp);
                re(this, b, "f")
                  .ensureMounted({ preloadHint: "SignUp" })
                  .then((t) => t.openModal("signUp", e || {}));
              }),
              (this.closeSignUp = () => {
                this.assertComponentsReady(re(this, b, "f")),
                  re(this, b, "f")
                    .ensureMounted()
                    .then((e) => e.closeModal("signUp"));
              }),
              (this.openUserProfile = (e) => {
                if (
                  (this.assertComponentsReady(re(this, b, "f")),
                  (0, n.f)(this) && "development" === re(this, k, "f"))
                )
                  return console.info(ne.q.cannotOpenUserProfile);
                re(this, b, "f")
                  .ensureMounted({ preloadHint: "UserProfile" })
                  .then((t) => t.openModal("userProfile", e || {}));
              }),
              (this.closeUserProfile = () => {
                this.assertComponentsReady(re(this, b, "f")),
                  re(this, b, "f")
                    .ensureMounted()
                    .then((e) => e.closeModal("userProfile"));
              }),
              (this.openOrganizationProfile = (e) => {
                if (
                  (this.assertComponentsReady(re(this, b, "f")),
                  (0, n.n$)(this) && "development" === re(this, k, "f"))
                )
                  return console.info(ne.q.cannotOpenOrgProfile);
                re(this, b, "f")
                  .ensureMounted({ preloadHint: "OrganizationProfile" })
                  .then((t) => t.openModal("organizationProfile", e || {}));
              }),
              (this.closeOrganizationProfile = () => {
                this.assertComponentsReady(re(this, b, "f")),
                  re(this, b, "f")
                    .ensureMounted()
                    .then((e) => e.closeModal("organizationProfile"));
              }),
              (this.openCreateOrganization = (e) => {
                this.assertComponentsReady(re(this, b, "f")),
                  re(this, b, "f")
                    .ensureMounted({ preloadHint: "CreateOrganization" })
                    .then((t) => t.openModal("createOrganization", e || {}));
              }),
              (this.closeCreateOrganization = () => {
                this.assertComponentsReady(re(this, b, "f")),
                  re(this, b, "f")
                    .ensureMounted()
                    .then((e) => e.closeModal("createOrganization"));
              }),
              (this.mountSignIn = (e, t) => {
                this.assertComponentsReady(re(this, b, "f")),
                  re(this, b, "f")
                    .ensureMounted({ preloadHint: "SignIn" })
                    .then((n) =>
                      n.mountComponent({
                        name: "SignIn",
                        appearanceKey: "signIn",
                        node: e,
                        props: t,
                      })
                    );
              }),
              (this.unmountSignIn = (e) => {
                this.assertComponentsReady(re(this, b, "f")),
                  re(this, b, "f")
                    .ensureMounted()
                    .then((t) => t.unmountComponent({ node: e }));
              }),
              (this.mountSignUp = (e, t) => {
                this.assertComponentsReady(re(this, b, "f")),
                  re(this, b, "f")
                    .ensureMounted({ preloadHint: "SignUp" })
                    .then((n) =>
                      n.mountComponent({
                        name: "SignUp",
                        appearanceKey: "signUp",
                        node: e,
                        props: t,
                      })
                    );
              }),
              (this.unmountSignUp = (e) => {
                this.assertComponentsReady(re(this, b, "f")),
                  re(this, b, "f")
                    .ensureMounted()
                    .then((t) => t.unmountComponent({ node: e }));
              }),
              (this.mountUserProfile = (e, t) => {
                this.assertComponentsReady(re(this, b, "f")),
                  re(this, b, "f")
                    .ensureMounted({ preloadHint: "UserProfile" })
                    .then((n) =>
                      n.mountComponent({
                        name: "UserProfile",
                        appearanceKey: "userProfile",
                        node: e,
                        props: t,
                      })
                    );
              }),
              (this.unmountUserProfile = (e) => {
                this.assertComponentsReady(re(this, b, "f")),
                  re(this, b, "f")
                    .ensureMounted()
                    .then((t) => t.unmountComponent({ node: e }));
              }),
              (this.mountOrganizationProfile = (e, t) => {
                this.assertComponentsReady(re(this, b, "f")),
                  re(this, b, "f")
                    .ensureMounted({ preloadHint: "OrganizationProfile" })
                    .then((n) =>
                      n.mountComponent({
                        name: "OrganizationProfile",
                        appearanceKey: "userProfile",
                        node: e,
                        props: t,
                      })
                    );
              }),
              (this.unmountOrganizationProfile = (e) => {
                this.assertComponentsReady(re(this, b, "f")),
                  re(this, b, "f")
                    .ensureMounted()
                    .then((t) => t.unmountComponent({ node: e }));
              }),
              (this.mountCreateOrganization = (e, t) => {
                var n;
                this.assertComponentsReady(re(this, b, "f")),
                  null === (n = re(this, b, "f")) ||
                    void 0 === n ||
                    n
                      .ensureMounted({ preloadHint: "CreateOrganization" })
                      .then((n) =>
                        n.mountComponent({
                          name: "CreateOrganization",
                          appearanceKey: "createOrganization",
                          node: e,
                          props: t,
                        })
                      );
              }),
              (this.unmountCreateOrganization = (e) => {
                var t;
                this.assertComponentsReady(re(this, b, "f")),
                  null === (t = re(this, b, "f")) ||
                    void 0 === t ||
                    t
                      .ensureMounted()
                      .then((t) => t.unmountComponent({ node: e }));
              }),
              (this.mountOrganizationSwitcher = (e, t) => {
                var n;
                this.assertComponentsReady(re(this, b, "f")),
                  null === (n = re(this, b, "f")) ||
                    void 0 === n ||
                    n
                      .ensureMounted({ preloadHint: "OrganizationSwitcher" })
                      .then((n) =>
                        n.mountComponent({
                          name: "OrganizationSwitcher",
                          appearanceKey: "organizationSwitcher",
                          node: e,
                          props: t,
                        })
                      );
              }),
              (this.unmountOrganizationSwitcher = (e) => {
                var t;
                this.assertComponentsReady(re(this, b, "f")),
                  null === (t = re(this, b, "f")) ||
                    void 0 === t ||
                    t
                      .ensureMounted()
                      .then((t) => t.unmountComponent({ node: e }));
              }),
              (this.mountOrganizationList = (e, t) => {
                var n;
                this.assertComponentsReady(re(this, b, "f")),
                  null === (n = re(this, b, "f")) ||
                    void 0 === n ||
                    n
                      .ensureMounted({ preloadHint: "OrganizationList" })
                      .then((n) =>
                        n.mountComponent({
                          name: "OrganizationList",
                          appearanceKey: "organizationList",
                          node: e,
                          props: t,
                        })
                      );
              }),
              (this.unmountOrganizationList = (e) => {
                var t;
                this.assertComponentsReady(re(this, b, "f")),
                  null === (t = re(this, b, "f")) ||
                    void 0 === t ||
                    t
                      .ensureMounted()
                      .then((t) => t.unmountComponent({ node: e }));
              }),
              (this.mountUserButton = (e, t) => {
                var n;
                this.assertComponentsReady(re(this, b, "f")),
                  null === (n = re(this, b, "f")) ||
                    void 0 === n ||
                    n
                      .ensureMounted({ preloadHint: "UserButton" })
                      .then((n) =>
                        n.mountComponent({
                          name: "UserButton",
                          appearanceKey: "userButton",
                          node: e,
                          props: t,
                        })
                      );
              }),
              (this.unmountUserButton = (e) => {
                var t;
                this.assertComponentsReady(re(this, b, "f")),
                  null === (t = re(this, b, "f")) ||
                    void 0 === t ||
                    t
                      .ensureMounted()
                      .then((t) => t.unmountComponent({ node: e }));
              }),
              (this.setActive = async ({
                session: t,
                organization: r,
                beforeEmit: i,
              }) => {
                var o;
                if (!this.client)
                  throw new Error(
                    "setActive is being called before the client is loaded. Wait for init."
                  );
                if (void 0 === t && !this.session)
                  throw new Error(
                    "setActive should either be called with a session param or there should be already an active session."
                  );
                const a =
                    "undefined" != typeof window &&
                    "function" == typeof window.__unstable__onBeforeSetActive
                      ? window.__unstable__onBeforeSetActive
                      : e.ZT,
                  s =
                    "undefined" != typeof window &&
                    "function" == typeof window.__unstable__onAfterSetActive
                      ? window.__unstable__onAfterSetActive
                      : e.ZT;
                "string" == typeof t &&
                  (t = this.client.sessions.find((e) => e.id === t) || null);
                let c = void 0 === t ? this.session : t;
                if (c && void 0 !== r) {
                  const e =
                    "string" == typeof r ? r : null == r ? void 0 : r.id;
                  c.lastActiveOrganizationId = e || null;
                }
                this.session && null === c && re(this, q, "f").call(this),
                  a(),
                  (!(0, n.oH)() && re(this, A, "f").standardBrowser) ||
                    (await re(this, B, "f").call(this, c),
                    (c = re(this, X, "f").call(
                      this,
                      null == c ? void 0 : c.id
                    ))),
                  await (null === (o = re(this, y, "f")) || void 0 === o
                    ? void 0
                    : o.setAuthCookiesFromSession(c));
                const u = (0, n.HV)();
                i &&
                  (u.startTracking(),
                  re(this, Z, "f").call(this),
                  await i(c),
                  u.stopTracking()),
                  u.isUnloading() ||
                    (re(this, H, "f").call(this, c),
                    re(this, J, "f").call(this),
                    s(),
                    re(this, G, "f").call(this));
              }),
              (this.setSession = async (t, n) => (
                (0, e.x9)(
                  "setSession",
                  "Use `setActive` instead.",
                  "clerk:setSession"
                ),
                this.setActive({ session: t, beforeEmit: n })
              )),
              (this.addListener = (e) => (
                (e = (function (e) {
                  let t;
                  return (n) => {
                    var r, o;
                    t || (t = { ...n }),
                      (t = {
                        ...((r = t),
                        (o = n),
                        {
                          client: i(r.client, o.client),
                          session: i(r.session, o.session),
                          user: i(r.user, o.user),
                          organization: i(r.organization, o.organization),
                          lastOrganizationInvitation: i(
                            r.lastOrganizationInvitation,
                            o.lastOrganizationInvitation
                          ),
                          lastOrganizationMember: i(
                            r.lastOrganizationMember,
                            o.lastOrganizationMember
                          ),
                        }),
                      }),
                      e(t);
                  };
                })(e)),
                re(this, x, "f").push(e),
                this.client &&
                  e({
                    client: this.client,
                    session: this.session,
                    user: this.user,
                    organization: this.organization,
                    lastOrganizationInvitation: re(this, O, "f"),
                    lastOrganizationMember: re(this, U, "f"),
                  }),
                () => {
                  ie(
                    this,
                    x,
                    re(this, x, "f").filter((t) => t !== e),
                    "f"
                  );
                }
              )),
              (this.navigate = async (e) => {
                if (!e || !(0, n._f)()) return;
                const t = new URL(e, window.location.href),
                  r = re(this, A, "f").navigate;
                if (t.origin === window.location.origin && r)
                  return await r((0, n.M)(t));
                (0, n.T7)(t);
              }),
              C.set(this, async () => {
                if (!(0, n._f)()) return;
                const t = new URLSearchParams({ [o.cD]: "true" }),
                  r = (0, n.XV)(o.w9);
                (r && (0, e.ZD)(r)) || (0, c.sY)();
                const i = (0, n.KV)(
                  { base: (0, n.XV)(o.w9), searchParams: t },
                  { stringify: !0 }
                );
                return this.navigate(this.buildUrlWithAuth(i));
              }),
              (this.redirectWithAuth = async (e) => {
                if ((0, n._f)()) return this.navigate(this.buildUrlWithAuth(e));
              }),
              (this.redirectToSignIn = async (e) => {
                if ((0, n._f)()) return this.navigate(this.buildSignInUrl(e));
              }),
              (this.redirectToSignUp = async (e) => {
                if ((0, n._f)()) return this.navigate(this.buildSignUpUrl(e));
              }),
              (this.redirectToUserProfile = async () => {
                if ((0, n._f)())
                  return this.navigate(this.buildUserProfileUrl());
              }),
              (this.redirectToCreateOrganization = async () => {
                if ((0, n._f)())
                  return this.navigate(this.buildCreateOrganizationUrl());
              }),
              (this.redirectToOrganizationProfile = async () => {
                if ((0, n._f)())
                  return this.navigate(this.buildOrganizationProfileUrl());
              }),
              (this.redirectToHome = async () => {
                if ((0, n._f)()) return this.navigate(this.buildHomeUrl());
              }),
              (this.handleMagicLinkVerification = async (t, i) => {
                if (
                  ((0, e.x9)(
                    "handleMagicLinkVerification",
                    "Use `handleEmailLinkVerification` instead."
                  ),
                  !this.client)
                )
                  return;
                const o = (0, n.XV)("__clerk_status");
                if ("expired" === o) throw new r.Sj(r.X1.Expired);
                if ("verified" !== o) throw new r.Sj(r.X1.Failed);
                const a = (0, n.XV)("__clerk_created_session"),
                  { signIn: s, signUp: c, sessions: u } = this.client,
                  l = u.some((e) => e.id === a),
                  d =
                    "needs_second_factor" === s.status ||
                    "missing_requirements" === c.status,
                  f = (e) =>
                    i && "function" == typeof i ? i(e) : this.navigate(e),
                  h = t.redirectUrlComplete
                    ? () => f(t.redirectUrlComplete)
                    : e.ZT,
                  p = t.redirectUrl ? () => f(t.redirectUrl) : e.ZT;
                return l
                  ? this.setActive({ session: a, beforeEmit: h })
                  : d
                  ? p()
                  : ("function" == typeof t.onVerifiedOnOtherDevice &&
                      t.onVerifiedOnOtherDevice(),
                    null);
              }),
              (this.handleEmailLinkVerification = async (t, i) => {
                if (!this.client) return;
                const o = (0, n.XV)("__clerk_status");
                if ("expired" === o) throw new r.N(r._L.Expired);
                if ("verified" !== o) throw new r.N(r._L.Failed);
                const a = (0, n.XV)("__clerk_created_session"),
                  { signIn: s, signUp: c, sessions: u } = this.client,
                  l = u.some((e) => e.id === a),
                  d =
                    "needs_second_factor" === s.status ||
                    "missing_requirements" === c.status,
                  f = (e) =>
                    i && "function" == typeof i ? i(e) : this.navigate(e),
                  h = t.redirectUrlComplete
                    ? () => f(t.redirectUrlComplete)
                    : e.ZT,
                  p = t.redirectUrl ? () => f(t.redirectUrl) : e.ZT;
                return l
                  ? this.setActive({ session: a, beforeEmit: h })
                  : d
                  ? p()
                  : ("function" == typeof t.onVerifiedOnOtherDevice &&
                      t.onVerifiedOnOtherDevice(),
                    null);
              }),
              (this.handleRedirectCallback = async (e = {}, r) => {
                var i, o, a, s, u, l;
                if (!re(this, P, "f") || !re(this, _, "f") || !this.client)
                  return;
                const { signIn: d, signUp: f } = this.client,
                  { displayConfig: h } = re(this, _, "f"),
                  { firstFactorVerification: p } = d,
                  { externalAccount: m } = f.verifications,
                  g = {
                    status: f.status,
                    missingFields: f.missingFields,
                    externalAccountStatus: m.status,
                    externalAccountErrorCode:
                      null === (i = m.error) || void 0 === i ? void 0 : i.code,
                    externalAccountSessionId:
                      null ===
                        (a =
                          null === (o = m.error) || void 0 === o
                            ? void 0
                            : o.meta) || void 0 === a
                        ? void 0
                        : a.sessionId,
                  },
                  y = {
                    status: d.status,
                    firstFactorVerificationStatus: p.status,
                    firstFactorVerificationErrorCode:
                      null === (s = p.error) || void 0 === s ? void 0 : s.code,
                    firstFactorVerificationSessionId:
                      null ===
                        (l =
                          null === (u = p.error) || void 0 === u
                            ? void 0
                            : u.meta) || void 0 === l
                        ? void 0
                        : l.sessionId,
                  },
                  v = (e) =>
                    r && "function" == typeof r ? r(e) : this.navigate(e),
                  b = (e) => () => v(e),
                  w = b(h.signInUrl),
                  S = b(h.signUpUrl),
                  k = b(
                    e.firstFactorUrl ||
                      (0, n.KV)(
                        { base: h.signInUrl, hashPath: "/factor-one" },
                        { stringify: !0 }
                      )
                  ),
                  O = b(
                    e.secondFactorUrl ||
                      (0, n.KV)(
                        { base: h.signInUrl, hashPath: "/factor-two" },
                        { stringify: !0 }
                      )
                  ),
                  U = b(
                    e.resetPasswordUrl ||
                      (0, n.KV)(
                        { base: h.signInUrl, hashPath: "/reset-password" },
                        { stringify: !0 }
                      )
                  ),
                  x = b(e.afterSignInUrl || e.redirectUrl || h.afterSignInUrl),
                  A = b(e.afterSignUpUrl || e.redirectUrl || h.afterSignUpUrl),
                  E = b(
                    e.continueSignUpUrl ||
                      (0, n.KV)(
                        { base: h.signUpUrl, hashPath: "/continue" },
                        { stringify: !0 }
                      )
                  ),
                  C = ({ missingFields: r }) =>
                    r.length
                      ? E()
                      : (0, t.v)({
                          signUp: f,
                          verifyEmailPath:
                            e.verifyEmailAddressUrl ||
                            (0, n.KV)(
                              {
                                base: h.signUpUrl,
                                hashPath: "/verify-email-address",
                              },
                              { stringify: !0 }
                            ),
                          verifyPhonePath:
                            e.verifyPhoneNumberUrl ||
                            (0, n.KV)(
                              {
                                base: h.signUpUrl,
                                hashPath: "/verify-phone-number",
                              },
                              { stringify: !0 }
                            ),
                          navigate: v,
                        });
                if (
                  "transferable" === g.externalAccountStatus &&
                  "external_account_exists" === g.externalAccountErrorCode
                ) {
                  const e = await d.create({ transfer: !0 });
                  switch (e.status) {
                    case "complete":
                      return this.setActive({
                        session: e.createdSessionId,
                        beforeEmit: x,
                      });
                    case "needs_first_factor":
                      return k();
                    case "needs_second_factor":
                      return O();
                    case "needs_new_password":
                      return U();
                    default:
                      (0, c.O7)("sign in");
                  }
                }
                const I = "user_locked" === y.firstFactorVerificationErrorCode;
                if ("user_locked" === g.externalAccountErrorCode) return S();
                if (I) return w();
                if ("needs_first_factor" === y.status) return k();
                if ("needs_new_password" === y.status) return U();
                if ("transferable" === y.firstFactorVerificationStatus) {
                  const e = await f.create({ transfer: !0 });
                  switch (e.status) {
                    case "complete":
                      return this.setActive({
                        session: e.createdSessionId,
                        beforeEmit: A,
                      });
                    case "missing_requirements":
                      return C({ missingFields: e.missingFields });
                    default:
                      (0, c.O7)("sign in");
                  }
                }
                if ("needs_second_factor" === y.status) return O();
                if (
                  (("failed" === g.externalAccountStatus ||
                    "unverified" === g.externalAccountStatus) &&
                    "identifier_already_signed_in" ===
                      g.externalAccountErrorCode &&
                    g.externalAccountSessionId) ||
                  ("failed" === y.firstFactorVerificationStatus &&
                    "identifier_already_signed_in" ===
                      y.firstFactorVerificationErrorCode &&
                    y.firstFactorVerificationSessionId)
                ) {
                  const e =
                    y.firstFactorVerificationSessionId ||
                    g.externalAccountSessionId;
                  if (e) return this.setActive({ session: e, beforeEmit: x });
                }
                return (0, n.l1)(f)
                  ? S()
                  : "verified" === g.externalAccountStatus &&
                    "missing_requirements" === g.status
                  ? C({ missingFields: f.missingFields })
                  : w();
              }),
              (this.handleUnauthenticated = async (e = { broadcast: !0 }) => {
                if (!this.client || !this.session) return;
                const t = await r.KU.getInstance().fetch();
                return (
                  this.updateClient(t),
                  this.session
                    ? void 0
                    : (e.broadcast && re(this, q, "f").call(this),
                      this.setActive({ session: null }))
                );
              }),
              (this.authenticateWithMetamask = async ({
                redirectUrl: e,
                signUpContinueUrl: t,
                customNavigate: r,
                unsafeMetadata: i,
              } = {}) => {
                if (!this.client || !re(this, _, "f")) return;
                const a = (e) =>
                  r && "function" == typeof r ? r(e) : this.navigate(e);
                let s;
                try {
                  s = await this.client.signIn.authenticateWithMetamask();
                } catch (e) {
                  if (!(0, n.VZ)(e, o.O1.FORM_IDENTIFIER_NOT_FOUND)) throw e;
                  (s = await this.client.signUp.authenticateWithMetamask({
                    unsafeMetadata: i,
                  })),
                    t &&
                      "missing_requirements" === s.status &&
                      "verified" === s.verifications.web3Wallet.status &&
                      (await a(t));
                }
                s.createdSessionId &&
                  (await this.setActive({
                    session: s.createdSessionId,
                    beforeEmit: () => (e ? a(e) : Promise.resolve()),
                  }));
              }),
              (this.createOrganization = async ({ name: e, slug: t }) =>
                r.cp.create({ name: e, slug: t })),
              (this.getOrganizationMemberships = async () => (
                (0, e.x9)(
                  "getOrganizationMemberships",
                  "Use User.getOrganizationMemberships"
                ),
                await r.fr.retrieve()
              )),
              (this.getOrganization = async (e) => r.cp.get(e)),
              (this.__internal_setCountry = (e) => {
                this.__internal_country || (this.__internal_country = e);
              }),
              (this.updateClient = (e) => {
                if (!this.client) {
                  const t = re(this, A, "f").selectInitialSession
                    ? re(this, A, "f").selectInitialSession(e)
                    : re(this, D, "f").call(this, e);
                  re(this, H, "f").call(this, t);
                }
                if (((this.client = e), this.session)) {
                  const e = re(this, X, "f").call(this, this.session.id);
                  re(this, H, "f").call(this, e);
                }
                re(this, J, "f").call(this);
              }),
              (this.__unstable__setEnvironment = async (e) => {
                ie(this, _, new r.qA(e), "f"),
                  p.mountComponentRenderer &&
                    ie(
                      this,
                      b,
                      p.mountComponentRenderer(
                        this,
                        re(this, _, "f"),
                        re(this, A, "f")
                      ),
                      "f"
                    );
              }),
              (this.__unstable__onBeforeRequest = (e) => {
                re(this, S, "f").onBeforeRequest(e);
              }),
              (this.__unstable__onAfterResponse = (e) => {
                re(this, S, "f").onAfterResponse(e);
              }),
              (this.__unstable__updateProps = (e) => {
                var t;
                return null === (t = re(this, b, "f")) || void 0 === t
                  ? void 0
                  : t.ensureMounted().then((t) => t.updateProps(e));
              }),
              I.set(this, () => "true" === (0, n.XV)(o.cD)),
              M.set(this, () => (0, n.xy)(o.cD)),
              z.set(this, () => {
                const e = new URLSearchParams({ [o.w9]: window.location.href });
                return (0, n.KV)(
                  { base: re(this, A, "f").signInUrl, searchParams: e },
                  { stringify: !0 }
                );
              }),
              T.set(this, () => {
                let e;
                if (this.proxyUrl) {
                  const t = new URL(this.proxyUrl);
                  e = new URL(`${t.pathname}/v1/client/sync`, t.origin);
                } else
                  this.domain &&
                    (e = new URL("/v1/client/sync", `https://${this.domain}`));
                return (
                  null == e ||
                    e.searchParams.append("redirect_url", window.location.href),
                  (null == e ? void 0 : e.toString()) || ""
                );
              }),
              R.set(this, () =>
                re(this, I, "f").call(this)
                  ? (re(this, A, "f").isInterstitial ||
                      re(this, M, "f").call(this),
                    !1)
                  : !!this.isSatellite && (0, n.i2)().getClientUatCookie() <= 0
              ),
              j.set(
                this,
                () =>
                  "production" !== re(this, k, "f") &&
                  !this.isSatellite &&
                  !!(0, n.XV)(o.w9)
              ),
              N.set(this, async () => {
                "development" === this.instanceType
                  ? await this.navigate(re(this, z, "f").call(this))
                  : "production" === this.instanceType &&
                    (await this.navigate(re(this, T, "f").call(this)));
              }),
              L.set(this, (e, t) => {
                let n;
                try {
                  n = new URL(e);
                } catch {
                  (0, c._5)();
                }
                n.origin === t && (0, c.cT)();
              }),
              $.set(this, () => {
                this.isSatellite &&
                  ("development" !== re(this, k, "f") ||
                    re(this, A, "f").signInUrl ||
                    (0, c.qW)(),
                  this.proxyUrl || this.domain || (0, c.xZ)(),
                  re(this, A, "f").signInUrl &&
                    re(this, L, "f").call(
                      this,
                      re(this, A, "f").signInUrl,
                      window.location.origin
                    ));
              }),
              F.set(this, async () => {
                if (
                  (ie(
                    this,
                    w,
                    (function ({ frontendApi: e, fapiClient: t }) {
                      const r = (0, n.i2)(),
                        i = o.JR;
                      let a = !0;
                      function s() {
                        return localStorage.getItem(i);
                      }
                      function u(e) {
                        localStorage.setItem(i, e), r.setDevBrowserCookie(e);
                      }
                      function l() {
                        localStorage.removeItem(i), r.removeDevBrowserCookie();
                      }
                      function d() {
                        return a;
                      }
                      return {
                        clear: async function () {
                          return (
                            l(),
                            r.removeAllDevBrowserCookies(),
                            Promise.resolve()
                          );
                        },
                        setup: async function () {
                          const i = (0, n.un)(e),
                            l = (0, n.un)(window.location.host),
                            f = r.getDevBrowserCookie();
                          if (
                            (f &&
                              (r.removeDevBrowserCookie(),
                              r.setDevBrowserCookie(f)),
                            i &&
                              (t.onBeforeRequest((e) => {
                                var t;
                                const n = s();
                                n &&
                                  (null === (t = e.url) ||
                                    void 0 === t ||
                                    t.searchParams.set(o.Ty, n));
                              }),
                              t.onAfterResponse((e, t) => {
                                var n;
                                const r =
                                  null ===
                                    (n = null == t ? void 0 : t.headers) ||
                                  void 0 === n
                                    ? void 0
                                    : n.get(o.jU);
                                r && u(r);
                              })),
                            await (async function () {
                              const e = (0, n.TG)(
                                new URL(window.location.href)
                              );
                              if (e) return void u(e);
                              if (null !== s()) return;
                              const r = t.buildUrl({ path: "/dev_browser" }),
                                i = await fetch(r.toString(), {
                                  method: "POST",
                                });
                              if (200 === i.status) {
                                a = !0;
                                const e = await i.json();
                                u(null == e ? void 0 : e.token);
                              } else a = !1;
                            })(),
                            !d())
                          )
                            return l && !r.getDevBrowserInittedCookie()
                              ? (async function () {
                                  const e = t.buildUrl({
                                    method: "POST",
                                    path: "/dev_browser/set_first_party_cookie",
                                  });
                                  (
                                    await fetch(e.toString(), {
                                      method: "POST",
                                      credentials: "include",
                                    })
                                  ).ok || (0, c.Dg)(),
                                    r.setDevBrowserInittedCookie();
                                })()
                              : l || !i || s()
                              ? void 0
                              : (async function () {
                                  const t = `https://${e}`,
                                    i = window.location.origin,
                                    o = window.location.href,
                                    a = (0, n.KV)(
                                      {
                                        base: t,
                                        pathname: "/v1/dev_browser/init",
                                        search: `origin=${i}&redirect=${o}`,
                                      },
                                      { stringify: !0 }
                                    );
                                  try {
                                    const { browserToken: e } = await (0, n.OZ)(
                                      { src: a, eventOrigin: t }
                                    );
                                    if (!e) throw "Missing token";
                                    u(e), r.removeSessionCookie();
                                  } catch (e) {
                                    (0, c.Dg)(e.message || e);
                                  }
                                })();
                        },
                        getDevBrowserJWT: s,
                        setDevBrowserJWT: u,
                        usesUrlBasedSessionSync: d,
                        removeDevBrowserJWT: l,
                      };
                    })({
                      frontendApi: this.frontendApi,
                      fapiClient: re(this, S, "f"),
                    }),
                    "f"
                  ),
                  re(this, $, "f").call(this),
                  re(this, R, "f").call(this))
                )
                  return await re(this, N, "f").call(this), !1;
                if (
                  ("production" === re(this, k, "f")
                    ? await re(this, w, "f").clear()
                    : await re(this, w, "f").setup(),
                  re(this, j, "f").call(this))
                )
                  return await re(this, C, "f").call(this), !1;
                ie(this, y, new h(this), "f"), ie(this, E, (0, n.LM)(), "f");
                const t = (0, n.u9)(
                  null === window || void 0 === window
                    ? void 0
                    : window.location.hostname
                );
                re(this, V, "f").call(this);
                let i = 0;
                for (; i < 2; ) {
                  i++;
                  try {
                    const e = "development" === re(this, k, "f") && !t,
                      [n, i] = await Promise.all([
                        r.qA.getInstance().fetch({ touch: e }),
                        r.KU.getInstance().fetch(),
                      ]);
                    if (
                      (this.updateClient(i),
                      this.updateEnvironment(n),
                      await re(this, te, "f").call(this))
                    )
                      return !1;
                    p.mountComponentRenderer &&
                      ie(
                        this,
                        b,
                        p.mountComponentRenderer(
                          this,
                          re(this, _, "f"),
                          re(this, A, "f")
                        ),
                        "f"
                      );
                    break;
                  } catch (t) {
                    if (!(0, n.VZ)(t, "dev_browser_unauthenticated")) {
                      if ((0, e.af)()) throw t;
                      return console.warn(t), !1;
                    }
                    await re(this, w, "f").clear(),
                      await re(this, w, "f").setup();
                  }
                  i >= 2 && (0, c.Xp)();
                }
                return re(this, Q, "f").call(this), !0;
              }),
              W.set(this, async () => {
                const [e, t] = await Promise.all([
                  r.qA.getInstance().fetch({ touch: !1 }),
                  r.KU.getInstance().fetch(),
                ]);
                return (
                  ie(this, _, e, "f"),
                  this.updateClient(t),
                  p.mountComponentRenderer &&
                    ie(
                      this,
                      b,
                      p.mountComponentRenderer(
                        this,
                        re(this, _, "f"),
                        re(this, A, "f")
                      ),
                      "f"
                    ),
                  !0
                );
              }),
              D.set(this, (e) => {
                if (e.lastActiveSessionId) {
                  const t = e.activeSessions.find(
                    (t) => t.id === e.lastActiveSessionId
                  );
                  if (t) return t;
                }
                return e.activeSessions[0] || null;
              }),
              V.set(this, () => {
                var t, n;
                (0, e._f)() &&
                  (null === (t = re(this, E, "f")) ||
                    void 0 === t ||
                    t.onPageVisible(() => {
                      this.session && re(this, B, "f").call(this, this.session);
                    }),
                  null === (n = re(this, v, "f")) ||
                    void 0 === n ||
                    n.addEventListener("message", ({ data: e }) => {
                      "signout" === e.type &&
                        this.handleUnauthenticated({ broadcast: !1 });
                    }));
              }),
              B.set(this, async (t) => {
                if (!t || !re(this, A, "f").touchSession)
                  return Promise.resolve();
                await t.touch().catch((t) => {
                  (0, e.ix)(t) && this.handleUnauthenticated();
                });
              }),
              J.set(this, () => {
                if (this.client)
                  for (const e of re(this, x, "f"))
                    e({
                      client: this.client,
                      session: this.session,
                      user: this.user,
                      organization: this.organization,
                      lastOrganizationInvitation: re(this, O, "f"),
                      lastOrganizationMember: re(this, U, "f"),
                    });
              }),
              q.set(this, () => {
                var e;
                null === (e = re(this, v, "f")) ||
                  void 0 === e ||
                  e.postMessage({ type: "signout" });
              }),
              G.set(this, () => {
                p.mountComponentRenderer &&
                  (this.closeSignUp(), this.closeSignIn());
              }),
              Z.set(this, () => {
                (this.session = void 0),
                  (this.organization = void 0),
                  (this.user = void 0),
                  re(this, J, "f").call(this);
              }),
              K.set(this, () => {
                var e;
                return (
                  (
                    (null === (e = this.session) || void 0 === e
                      ? void 0
                      : e.user.organizationMemberships) || []
                  )
                    .map((e) => e.organization)
                    .find((e) => {
                      var t;
                      return (
                        e.id ===
                        (null === (t = this.session) || void 0 === t
                          ? void 0
                          : t.lastActiveOrganizationId)
                      );
                    }) || null
                );
              }),
              H.set(this, (e) => {
                (this.session = e || null),
                  (this.organization = re(this, K, "f").call(this)),
                  re(this, Y, "f").call(this);
              }),
              X.set(this, (e) => {
                var t;
                return (
                  (null === (t = this.client) || void 0 === t
                    ? void 0
                    : t.activeSessions.find((t) => t.id === e)) || null
                );
              }),
              Y.set(this, () => {
                this.user = this.session ? this.session.user : null;
              }),
              Q.set(this, () => {
                this.addListener(({ session: e }) => {
                  var t;
                  (null == e ? void 0 : e.actor) &&
                    (null === (t = re(this, b, "f")) ||
                      void 0 === t ||
                      t.ensureMounted().then((e) => e.mountImpersonationFab()));
                });
              }),
              ee.set(this, (e, t) => {
                if (
                  !re(this, P, "f") ||
                  !re(this, _, "f") ||
                  !re(this, _, "f").displayConfig
                )
                  return "";
                const r = (0, n.pv)(
                    e,
                    {
                      options: re(this, A, "f"),
                      displayConfig: re(this, _, "f").displayConfig,
                    },
                    !1
                  ),
                  i = {
                    afterSignInUrl: (0, n.pv)(
                      "afterSignInUrl",
                      { ctx: t, options: re(this, A, "f") },
                      !1
                    ),
                    afterSignUpUrl: (0, n.pv)(
                      "afterSignUpUrl",
                      { ctx: t, options: re(this, A, "f") },
                      !1
                    ),
                    redirectUrl:
                      (null == t ? void 0 : t.redirectUrl) ||
                      window.location.href,
                  };
                return (
                  Object.keys(i).forEach(function (e) {
                    const t = i[e];
                    t && (i[e] = (0, n.lZ)((0, n.ju)(t), (0, n.ju)(r)));
                  }),
                  this.buildUrlWithAuth(
                    (0, n.$s)(r, {
                      ...i,
                      ...(null == t ? void 0 : t.initialValues),
                    })
                  )
                );
              }),
              te.set(this, async () => {
                var e;
                const t = new URLSearchParams(window.location.search).get(
                    "redirect_url"
                  ),
                  r = "production" === this.instanceType,
                  i = null !== t && (0, n.To)(this.frontendApi, t);
                if (r || !i) return !1;
                const o = this.session,
                  a =
                    null === (e = re(this, _, "f")) || void 0 === e
                      ? void 0
                      : e.displayConfig.signInUrl,
                  s = a && window.location.href.startsWith(a);
                return (
                  !((0, n.WW)(t) && !o && s) &&
                  (await this.navigate(
                    this.buildUrlWithAuth(t, { useQueryParam: !0 })
                  ),
                  !0)
                );
              }),
              (a = (a || "").trim()),
              ie(this, m, null == s ? void 0 : s.domain, "f"),
              ie(this, g, null == s ? void 0 : s.proxyUrl, "f"),
              (0, e.qf)(a))
            )
              (0, e.x9)("frontendApi", "Use `publishableKey` instead."),
                (0, n.oU)(a) || n.RM.throwInvalidFrontendApiError({ key: a }),
                (this.frontendApi = a),
                ie(
                  this,
                  k,
                  (0, n.un)(this.frontendApi) ? "development" : "production",
                  "f"
                );
            else {
              const t = (0, e.nQ)(a);
              t || n.RM.throwInvalidPublishableKeyError({ key: a });
              const { frontendApi: r, instanceType: i } = t;
              (this.publishableKey = a),
                (this.frontendApi = r),
                ie(this, k, i, "f");
            }
            ie(this, S, (0, u.Z)(this), "f"), (r.i.clerk = this);
          }
          buildUrlWithAuth(t, r) {
            var i, o;
            if (
              "production" === re(this, k, "f") ||
              !(null === (i = re(this, w, "f")) || void 0 === i
                ? void 0
                : i.usesUrlBasedSessionSync())
            )
              return t;
            const a = new URL(t, window.location.origin);
            if (a.origin === window.location.origin) return a.href;
            const s =
              null === (o = re(this, w, "f")) || void 0 === o
                ? void 0
                : o.getDevBrowserJWT();
            if (!s) return (0, c.qO)();
            const u =
              !!(null == r ? void 0 : r.useQueryParam) || (0, n.u9)(a.hostname);
            return (0, e.Fe)(a, s, u).href;
          }
          buildSignInUrl(e) {
            return re(this, ee, "f").call(this, "signInUrl", e);
          }
          buildSignUpUrl(e) {
            return re(this, ee, "f").call(this, "signUpUrl", e);
          }
          buildUserProfileUrl() {
            return re(this, _, "f") && re(this, _, "f").displayConfig
              ? this.buildUrlWithAuth(
                  re(this, _, "f").displayConfig.userProfileUrl
                )
              : "";
          }
          buildHomeUrl() {
            return re(this, _, "f") && re(this, _, "f").displayConfig
              ? this.buildUrlWithAuth(re(this, _, "f").displayConfig.homeUrl)
              : "";
          }
          buildCreateOrganizationUrl() {
            return re(this, _, "f") && re(this, _, "f").displayConfig
              ? this.buildUrlWithAuth(
                  re(this, _, "f").displayConfig.createOrganizationUrl
                )
              : "";
          }
          buildOrganizationProfileUrl() {
            return re(this, _, "f") && re(this, _, "f").displayConfig
              ? this.buildUrlWithAuth(
                  re(this, _, "f").displayConfig.organizationProfileUrl
                )
              : "";
          }
          updateEnvironment(e) {
            var t;
            ie(this, _, e, "f"),
              null === (t = re(this, y, "f")) ||
                void 0 === t ||
                t.setEnvironment(e);
          }
          get __internal_last_error() {
            const e = this.internal_last_error;
            return (this.internal_last_error = null), e;
          }
          set __internal_last_error(e) {
            this.internal_last_error = e;
          }
          __unstable__invitationUpdate(t) {
            (0, e.x9)(
              "__unstable__invitationUpdate",
              "We are completely dropping this method as it was introduced for internal use only"
            ),
              ie(this, O, t, "f"),
              re(this, J, "f").call(this);
          }
          __unstable__membershipUpdate(t) {
            (0, e.x9)(
              "__unstable__membershipUpdate",
              "We are completely dropping this method as it was introduced for internal use only"
            ),
              ie(this, U, t, "f"),
              re(this, J, "f").call(this);
          }
          get __unstable__environment() {
            return re(this, _, "f");
          }
          __internal_navigateWithError(e, t) {
            return (this.__internal_last_error = t), this.navigate(e);
          }
          __internal_getFrameworkHint() {
            var e, t;
            try {
              if (
                "undefined" == typeof window ||
                "undefined" == typeof document
              )
                return { framework: void 0, version: void 0 };
              const n = window;
              return n.__NEXT_DATA__ ||
                n.document.querySelector("#__next") ||
                (null === (e = n.next) || void 0 === e ? void 0 : e.version)
                ? {
                    framework: "nextjs",
                    version:
                      null === (t = n.next) || void 0 === t
                        ? void 0
                        : t.version,
                  }
                : { framework: void 0, version: void 0 };
            } catch (e) {
              return { framework: void 0, version: void 0 };
            }
          }
          assertComponentsReady(e) {
            if (!p.mountComponentRenderer)
              throw new Error("ClerkJS was loaded without UI components.");
            if (!e) throw new Error("ClerkJS components are not ready yet.");
          }
        }
        (p = ae),
          (m = new WeakMap()),
          (g = new WeakMap()),
          (y = new WeakMap()),
          (v = new WeakMap()),
          (b = new WeakMap()),
          (w = new WeakMap()),
          (_ = new WeakMap()),
          (S = new WeakMap()),
          (k = new WeakMap()),
          (P = new WeakMap()),
          (O = new WeakMap()),
          (U = new WeakMap()),
          (x = new WeakMap()),
          (A = new WeakMap()),
          (E = new WeakMap()),
          (C = new WeakMap()),
          (I = new WeakMap()),
          (M = new WeakMap()),
          (z = new WeakMap()),
          (T = new WeakMap()),
          (R = new WeakMap()),
          (j = new WeakMap()),
          (N = new WeakMap()),
          (L = new WeakMap()),
          ($ = new WeakMap()),
          (F = new WeakMap()),
          (W = new WeakMap()),
          (D = new WeakMap()),
          (V = new WeakMap()),
          (B = new WeakMap()),
          (J = new WeakMap()),
          (q = new WeakMap()),
          (G = new WeakMap()),
          (Z = new WeakMap()),
          (K = new WeakMap()),
          (H = new WeakMap()),
          (X = new WeakMap()),
          (Y = new WeakMap()),
          (Q = new WeakMap()),
          (ee = new WeakMap()),
          (te = new WeakMap()),
          (ae.version = "4.68.5"),
          (ae.sdkMetadata = { name: "@clerk/clerk-js", version: "4.68.5" });
        var se = ae,
          ce = a(2903),
          ue = a(7018),
          le = a(2784),
          de = a(3859);
        const fe = {
            SignIn: () =>
              Promise.all([a.e(216), a.e(700), a.e(577)]).then(a.bind(a, 8370)),
            SignUp: () =>
              Promise.all([a.e(216), a.e(700), a.e(830)]).then(a.bind(a, 2847)),
            UserButton: () =>
              Promise.all([a.e(216), a.e(700), a.e(132)]).then(a.bind(a, 6164)),
            UserProfile: () =>
              Promise.all([a.e(216), a.e(700), a.e(971)]).then(a.bind(a, 1782)),
            CreateOrganization: () =>
              Promise.all([a.e(216), a.e(700), a.e(647), a.e(979)]).then(
                a.bind(a, 3555)
              ),
            OrganizationProfile: () =>
              Promise.all([a.e(216), a.e(700), a.e(229)]).then(a.bind(a, 4821)),
            OrganizationSwitcher: () =>
              Promise.all([a.e(216), a.e(700), a.e(336)]).then(a.bind(a, 3617)),
            OrganizationList: () =>
              Promise.all([a.e(216), a.e(700), a.e(647), a.e(653)]).then(
                a.bind(a, 1987)
              ),
            ImpersonationFab: () =>
              Promise.all([a.e(216), a.e(700), a.e(490)]).then(a.bind(a, 4921)),
          },
          he = (0, le.lazy)(() =>
            fe.SignIn().then((e) => ({ default: e.SignIn }))
          ),
          pe = (0, le.lazy)(() =>
            fe.SignIn().then((e) => ({ default: e.SignInModal }))
          ),
          me = (0, le.lazy)(() =>
            fe.SignUp().then((e) => ({ default: e.SignUp }))
          ),
          ge = (0, le.lazy)(() =>
            fe.SignUp().then((e) => ({ default: e.SignUpModal }))
          ),
          ye = (0, le.lazy)(() =>
            fe.UserButton().then((e) => ({ default: e.UserButton }))
          ),
          ve = (0, le.lazy)(() =>
            fe.UserProfile().then((e) => ({ default: e.UserProfile }))
          ),
          be = (0, le.lazy)(() =>
            fe.UserProfile().then((e) => ({ default: e.UserProfileModal }))
          ),
          we = (0, le.lazy)(() =>
            fe
              .CreateOrganization()
              .then((e) => ({ default: e.CreateOrganization }))
          ),
          _e = (0, le.lazy)(() =>
            fe
              .CreateOrganization()
              .then((e) => ({ default: e.CreateOrganizationModal }))
          ),
          Se = (0, le.lazy)(() =>
            fe
              .OrganizationProfile()
              .then((e) => ({ default: e.OrganizationProfile }))
          ),
          ke = (0, le.lazy)(() =>
            fe
              .OrganizationProfile()
              .then((e) => ({ default: e.OrganizationProfileModal }))
          ),
          Pe = (0, le.lazy)(() =>
            fe
              .OrganizationSwitcher()
              .then((e) => ({ default: e.OrganizationSwitcher }))
          ),
          Oe = (0, le.lazy)(() =>
            fe.OrganizationList().then((e) => ({ default: e.OrganizationList }))
          ),
          Ue = (0, le.lazy)(() =>
            fe.ImpersonationFab().then((e) => ({ default: e.ImpersonationFab }))
          ),
          xe = {
            SignIn: he,
            SignUp: me,
            UserButton: ye,
            UserProfile: ve,
            OrganizationSwitcher: Pe,
            OrganizationList: Oe,
            OrganizationProfile: Se,
            CreateOrganization: we,
            SignInModal: pe,
            SignUpModal: ge,
            UserProfileModal: be,
            OrganizationProfileModal: ke,
            CreateOrganizationModal: _e,
          },
          Ae = (0, le.lazy)(() =>
            Promise.all([a.e(216), a.e(700)])
              .then(a.bind(a, 8173))
              .then((e) => ({ default: e.CoreClerkContextWrapper }))
          ),
          Ee = (0, le.lazy)(() =>
            Promise.all([a.e(216), a.e(700)])
              .then(a.bind(a, 8173))
              .then((e) => ({ default: e.EnvironmentProvider }))
          ),
          Ce = (0, le.lazy)(() =>
            Promise.all([a.e(216), a.e(700)])
              .then(a.bind(a, 8173))
              .then((e) => ({ default: e.OptionsProvider }))
          ),
          Ie = (0, le.lazy)(() =>
            Promise.all([a.e(216), a.e(700)])
              .then(a.bind(a, 3476))
              .then((e) => ({ default: e.AppearanceProvider }))
          ),
          Me = (0, le.lazy)(() =>
            Promise.all([a.e(216), a.e(700)])
              .then(a.bind(a, 3736))
              .then((e) => ({ default: e.VirtualRouter }))
          ),
          ze = (0, le.lazy)(() =>
            Promise.all([a.e(216), a.e(700)])
              .then(a.bind(a, 9820))
              .then((e) => ({ default: e.InternalThemeProvider }))
          ),
          Te = (0, le.lazy)(() =>
            Promise.all([a.e(216), a.e(700)]).then(a.bind(a, 7714))
          ),
          Re = (0, le.lazy)(() =>
            Promise.all([a.e(216), a.e(700)])
              .then(a.bind(a, 8690))
              .then((e) => ({ default: e.FlowMetadataProvider }))
          ),
          je = (0, le.lazy)(() =>
            Promise.all([a.e(216), a.e(700)])
              .then(a.bind(a, 8690))
              .then((e) => ({ default: e.Modal }))
          ),
          Ne = (e) =>
            (0, ce.tZ)(Ae, {
              clerk: e.clerk,
              children: (0, ce.tZ)(Ee, {
                value: e.environment,
                children: (0, ce.tZ)(Ce, {
                  value: e.options,
                  children: e.children,
                }),
              }),
            }),
          Le = (e) =>
            (0, ce.tZ)(Ie, {
              globalAppearance: e.globalAppearance,
              appearanceKey: e.appearanceKey,
              appearance: e.componentAppearance,
              children: (0, ce.tZ)(Te, {
                node: e.node,
                component: xe[e.componentName],
                props: e.componentProps,
                componentName: e.componentName,
              }),
            }),
          $e = (e) =>
            (0, ce.tZ)(le.Suspense, {
              fallback: "",
              children: (0, ce.tZ)(Ie, {
                globalAppearance: e.globalAppearance,
                appearanceKey: e.appearanceKey,
                appearance: e.componentAppearance,
                children: (0, ce.tZ)(Re, {
                  flow: e.flowName || "",
                  children: (0, ce.tZ)(ze, {
                    children: (0, ce.tZ)(je, {
                      handleClose: e.onClose,
                      containerSx: e.modalContainerSx,
                      contentSx: e.modalContentSx,
                      children: e.startPath
                        ? (0, ce.tZ)(le.Suspense, {
                            children: (0, ce.tZ)(Me, {
                              startPath: e.startPath,
                              onExternalNavigate: e.onExternalNavigate,
                              children: e.children,
                            }),
                          })
                        : e.children,
                    }),
                  }),
                }),
              }),
            }),
          Fe = (e) =>
            (0, ce.tZ)(le.Suspense, {
              children: (0, ce.tZ)(Ie, {
                globalAppearance: e.globalAppearance,
                appearanceKey: "impersonationFab",
                children: e.children,
              }),
            });
        let We = 0;
        const De = {},
          Ve = Object.freeze({
            SignUp: "signUpModal",
            SignIn: "signInModal",
            UserProfile: "userProfileModal",
            OrganizationProfile: "organizationProfileModal",
            CreateOrganization: "createOrganizationModal",
          }),
          Be = (e) => {
            const [t, r] = le.useState({
                appearance: e.options.appearance,
                options: e.options,
                signInModal: null,
                signUpModal: null,
                userProfileModal: null,
                organizationProfileModal: null,
                createOrganizationModal: null,
                nodes: new Map(),
                impersonationFab: !1,
              }),
              {
                signInModal: i,
                signUpModal: o,
                userProfileModal: a,
                organizationProfileModal: s,
                createOrganizationModal: u,
                nodes: l,
              } = t,
              {
                urlStateParam: d,
                clearUrlStateParam: f,
                decodedRedirectParams: h,
              } = (0, de._)();
            (0, ue.Gw)(() => {
              h && r((e) => ({ ...e, [Ve[h.componentName]]: !0 })),
                (De.mountComponent = (e) => {
                  const { node: t, name: n, props: i, appearanceKey: o } = e;
                  t || (0, c.HE)(),
                    r(
                      (e) => (
                        e.nodes.set(t, {
                          key: "p" + ++We,
                          name: n,
                          props: i,
                          appearanceKey: o,
                        }),
                        { ...e, nodes: l }
                      )
                    );
                }),
                (De.unmountComponent = (e) => {
                  const { node: t } = e;
                  r((e) => (e.nodes.delete(t), { ...e, nodes: l }));
                }),
                (De.updateProps = ({ node: e, props: n, ...i }) => {
                  if (e && n && "object" == typeof n) {
                    const i = t.nodes.get(e);
                    if (i)
                      return (i.props = { ...n }), void r((e) => ({ ...e }));
                  }
                  r((e) => ({ ...e, ...i }));
                }),
                (De.closeModal = (e) => {
                  f(), r((t) => ({ ...t, [e + "Modal"]: null }));
                }),
                (De.openModal = (e, t) => {
                  r((n) => ({ ...n, [e + "Modal"]: t }));
                }),
                (De.mountImpersonationFab = () => {
                  r((e) => ({ ...e, impersonationFab: !0 }));
                }),
                e.onComponentsMounted();
            }, []);
            const p = (0, ce.BX)($e, {
                globalAppearance: t.appearance,
                appearanceKey: "signIn",
                componentAppearance: null == i ? void 0 : i.appearance,
                flowName: "signIn",
                onClose: () => De.closeModal("signIn"),
                onExternalNavigate: () => De.closeModal("signIn"),
                startPath: (0, n.e1)({
                  base: "/sign-in",
                  path: null == d ? void 0 : d.path,
                }),
                componentName: "SignInModal",
                children: [(0, ce.tZ)(pe, { ...i }), (0, ce.tZ)(ge, { ...i })],
              }),
              m = (0, ce.BX)($e, {
                globalAppearance: t.appearance,
                appearanceKey: "signUp",
                componentAppearance: null == o ? void 0 : o.appearance,
                flowName: "signUp",
                onClose: () => De.closeModal("signUp"),
                onExternalNavigate: () => De.closeModal("signUp"),
                startPath: (0, n.e1)({
                  base: "/sign-up",
                  path: null == d ? void 0 : d.path,
                }),
                componentName: "SignUpModal",
                children: [(0, ce.tZ)(pe, { ...o }), (0, ce.tZ)(ge, { ...o })],
              }),
              g = (0, ce.tZ)($e, {
                globalAppearance: t.appearance,
                appearanceKey: "userProfile",
                componentAppearance: null == a ? void 0 : a.appearance,
                flowName: "userProfile",
                onClose: () => De.closeModal("userProfile"),
                onExternalNavigate: () => De.closeModal("userProfile"),
                startPath: (0, n.e1)({
                  base: "/user",
                  path: null == d ? void 0 : d.path,
                }),
                componentName: "SignUpModal",
                modalContainerSx: { alignItems: "center" },
                modalContentSx: (e) => ({
                  height: `min(${e.sizes.$176}, calc(100% - ${e.sizes.$12}))`,
                  margin: 0,
                }),
                children: (0, ce.tZ)(be, { ...a }),
              }),
              y = (0, ce.tZ)($e, {
                globalAppearance: t.appearance,
                appearanceKey: "organizationProfile",
                componentAppearance: null == s ? void 0 : s.appearance,
                flowName: "organizationProfile",
                onClose: () => De.closeModal("organizationProfile"),
                onExternalNavigate: () => De.closeModal("organizationProfile"),
                startPath: (0, n.e1)({
                  base: "/organizationProfile",
                  path: null == d ? void 0 : d.path,
                }),
                componentName: "OrganizationProfileModal",
                modalContainerSx: { alignItems: "center" },
                modalContentSx: (e) => ({
                  height: `min(${e.sizes.$176}, calc(100% - ${e.sizes.$12}))`,
                  margin: 0,
                }),
                children: (0, ce.tZ)(ke, { ...s }),
              }),
              v = (0, ce.tZ)($e, {
                globalAppearance: t.appearance,
                appearanceKey: "createOrganization",
                componentAppearance: null == u ? void 0 : u.appearance,
                flowName: "createOrganization",
                onClose: () => De.closeModal("createOrganization"),
                onExternalNavigate: () => De.closeModal("createOrganization"),
                startPath: (0, n.e1)({
                  base: "/createOrganization",
                  path: null == d ? void 0 : d.path,
                }),
                componentName: "CreateOrganizationModal",
                modalContainerSx: { alignItems: "center" },
                modalContentSx: (e) => ({
                  height: `min(${e.sizes.$120}, calc(100% - ${e.sizes.$12}))`,
                  margin: 0,
                }),
                children: (0, ce.tZ)(_e, { ...u }),
              });
            return (0, ce.tZ)(le.Suspense, {
              fallback: "",
              children: (0, ce.BX)(Ne, {
                clerk: e.clerk,
                environment: e.environment,
                options: t.options,
                children: [
                  [...l].map(([e, n]) => {
                    var r;
                    return (0, ce.tZ)(
                      Le,
                      {
                        node: e,
                        globalAppearance: t.appearance,
                        appearanceKey: n.appearanceKey,
                        componentAppearance:
                          null === (r = n.props) || void 0 === r
                            ? void 0
                            : r.appearance,
                        componentName: n.name,
                        componentProps: n.props,
                      },
                      n.key
                    );
                  }),
                  i && p,
                  o && m,
                  a && g,
                  s && y,
                  u && v,
                  t.impersonationFab &&
                    (0, ce.tZ)(Fe, {
                      globalAppearance: t.appearance,
                      children: (0, ce.tZ)(Ue, {}),
                    }),
                ],
              }),
            });
          };
        var Je, qe, Ge, Ze;
        se.mountComponentRenderer = (t, n, r) => {
          let i,
            o = document.getElementById("clerk-components");
          return (
            o ||
              ((o = document.createElement("div")),
              o.setAttribute("id", "clerk-components"),
              document.body.appendChild(o)),
            {
              ensureMounted: async (s) => {
                const { preloadHint: c } = s || {};
                if (!i) {
                  const s = (0, e.WK)();
                  c &&
                    (async (e) => {
                      var t;
                      null === (t = fe[e]) || void 0 === t || t.call(fe);
                    })(c),
                    (i = Promise.all([a.e(216), a.e(700)])
                      .then(a.bind(a, 1434))
                      .then(
                        ({ createRoot: e }) => (
                          e(o).render(
                            (0, ce.tZ)(Be, {
                              clerk: t,
                              environment: n,
                              options: r,
                              onComponentsMounted: s.resolve,
                            })
                          ),
                          s.promise.then(() => De)
                        )
                      ));
                }
                return i.then((e) => e);
              },
            }
          );
        };
        const Ke =
            (null ===
              (Je = document.querySelector(
                "script[data-clerk-publishable-key]"
              )) || void 0 === Je
              ? void 0
              : Je.getAttribute("data-clerk-publishable-key")) ||
            window.__clerk_publishable_key ||
            "",
          He =
            (null ===
              (qe = document.querySelector(
                "script[data-clerk-frontend-api]"
              )) || void 0 === qe
              ? void 0
              : qe.getAttribute("data-clerk-frontend-api")) ||
            window.__clerk_frontend_api ||
            "",
          Xe =
            (null ===
              (Ge = document.querySelector("script[data-clerk-proxy-url]")) ||
            void 0 === Ge
              ? void 0
              : Ge.getAttribute("data-clerk-proxy-url")) ||
            window.__clerk_proxy_url ||
            "",
          Ye =
            (null ===
              (Ze = document.querySelector("script[data-clerk-domain]")) ||
            void 0 === Ze
              ? void 0
              : Ze.getAttribute("data-clerk-domain")) ||
            window.__clerk_domain ||
            "";
        window.Clerk = new se(Ke || He, { proxyUrl: Xe, domain: Ye });
      })(),
      s
    );
  })();
});
