(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [890],
  {
    66406: function (e, t, n) {
      "use strict";
      function r(e, t, n, r) {
        return !1;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        n(82139),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    25250: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return g;
          },
        });
      let r = n(21024)._(n(2265)),
        o = n(14542),
        l = n(17434),
        u = n(11030),
        f = n(36874),
        a = n(12956),
        i = n(46993),
        c = n(38599),
        s = n(45291),
        d = n(66406),
        p = n(45786),
        b = n(91414),
        y = new Set();
      function h(e, t, n, r, o, u) {
        if (u || (0, l.isLocalURL)(t)) {
          if (!r.bypassPrefetchedCheck) {
            let o =
              t +
              "%" +
              n +
              "%" +
              (void 0 !== r.locale
                ? r.locale
                : "locale" in e
                ? e.locale
                : void 0);
            if (y.has(o)) return;
            y.add(o);
          }
          Promise.resolve(u ? e.prefetch(t, o) : e.prefetch(t, n, r)).catch(
            (e) => {}
          );
        }
      }
      function v(e) {
        return "string" == typeof e ? e : (0, u.formatUrl)(e);
      }
      let g = r.default.forwardRef(function (e, t) {
        let n, u;
        let {
          href: y,
          as: g,
          children: _,
          prefetch: m = null,
          passHref: k,
          replace: j,
          shallow: C,
          scroll: M,
          locale: P,
          onClick: O,
          onMouseEnter: E,
          onTouchStart: L,
          legacyBehavior: x = !1,
          ...R
        } = e;
        (n = _),
          x &&
            ("string" == typeof n || "number" == typeof n) &&
            (n = r.default.createElement("a", null, n));
        let w = r.default.useContext(i.RouterContext),
          I = r.default.useContext(c.AppRouterContext),
          T = null != w ? w : I,
          S = !w,
          U = !1 !== m,
          K = null === m ? b.PrefetchKind.AUTO : b.PrefetchKind.FULL,
          { href: A, as: D } = r.default.useMemo(() => {
            if (!w) {
              let e = v(y);
              return { href: e, as: g ? v(g) : e };
            }
            let [e, t] = (0, o.resolveHref)(w, y, !0);
            return { href: e, as: g ? (0, o.resolveHref)(w, g) : t || e };
          }, [w, y, g]),
          N = r.default.useRef(A),
          q = r.default.useRef(D);
        x && (u = r.default.Children.only(n));
        let B = x ? u && "object" == typeof u && u.ref : t,
          [H, z, F] = (0, s.useIntersection)({ rootMargin: "200px" }),
          G = r.default.useCallback(
            (e) => {
              (q.current !== D || N.current !== A) &&
                (F(), (q.current = D), (N.current = A)),
                H(e),
                B &&
                  ("function" == typeof B
                    ? B(e)
                    : "object" == typeof B && (B.current = e));
            },
            [D, B, A, F, H]
          );
        r.default.useEffect(() => {
          T && z && U && h(T, A, D, { locale: P }, { kind: K }, S);
        }, [D, A, z, P, U, null == w ? void 0 : w.locale, T, S, K]);
        let J = {
          ref: G,
          onClick(e) {
            x || "function" != typeof O || O(e),
              x &&
                u.props &&
                "function" == typeof u.props.onClick &&
                u.props.onClick(e),
              T &&
                !e.defaultPrevented &&
                (function (e, t, n, o, u, f, a, i, c) {
                  let { nodeName: s } = e.currentTarget;
                  if (
                    "A" === s.toUpperCase() &&
                    ((function (e) {
                      let t = e.currentTarget.getAttribute("target");
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) ||
                      (!c && !(0, l.isLocalURL)(n)))
                  )
                    return;
                  e.preventDefault();
                  let d = () => {
                    let e = null == a || a;
                    "beforePopState" in t
                      ? t[u ? "replace" : "push"](n, o, {
                          shallow: f,
                          locale: i,
                          scroll: e,
                        })
                      : t[u ? "replace" : "push"](o || n, { scroll: e });
                  };
                  c ? r.default.startTransition(d) : d();
                })(e, T, A, D, j, C, M, P, S);
          },
          onMouseEnter(e) {
            x || "function" != typeof E || E(e),
              x &&
                u.props &&
                "function" == typeof u.props.onMouseEnter &&
                u.props.onMouseEnter(e),
              T &&
                (U || !S) &&
                h(
                  T,
                  A,
                  D,
                  { locale: P, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: K },
                  S
                );
          },
          onTouchStart(e) {
            x || "function" != typeof L || L(e),
              x &&
                u.props &&
                "function" == typeof u.props.onTouchStart &&
                u.props.onTouchStart(e),
              T &&
                (U || !S) &&
                h(
                  T,
                  A,
                  D,
                  { locale: P, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: K },
                  S
                );
          },
        };
        if ((0, f.isAbsoluteUrl)(D)) J.href = D;
        else if (!x || k || ("a" === u.type && !("href" in u.props))) {
          let e = void 0 !== P ? P : null == w ? void 0 : w.locale,
            t =
              (null == w ? void 0 : w.isLocaleDomain) &&
              (0, d.getDomainLocale)(
                D,
                e,
                null == w ? void 0 : w.locales,
                null == w ? void 0 : w.domainLocales
              );
          J.href =
            t ||
            (0, p.addBasePath)(
              (0, a.addLocale)(D, e, null == w ? void 0 : w.defaultLocale)
            );
        }
        return x
          ? r.default.cloneElement(u, J)
          : r.default.createElement("a", { ...R, ...J }, n);
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    45291: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useIntersection", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let r = n(2265),
        o = n(52185),
        l = "function" == typeof IntersectionObserver,
        u = new Map(),
        f = [];
      function a(e) {
        let { rootRef: t, rootMargin: n, disabled: a } = e,
          i = a || !l,
          [c, s] = (0, r.useState)(!1),
          d = (0, r.useRef)(null),
          p = (0, r.useCallback)((e) => {
            d.current = e;
          }, []);
        return (
          (0, r.useEffect)(() => {
            if (l) {
              if (i || c) return;
              let e = d.current;
              if (e && e.tagName)
                return (function (e, t, n) {
                  let {
                    id: r,
                    observer: o,
                    elements: l,
                  } = (function (e) {
                    let t;
                    let n = {
                        root: e.root || null,
                        margin: e.rootMargin || "",
                      },
                      r = f.find(
                        (e) => e.root === n.root && e.margin === n.margin
                      );
                    if (r && (t = u.get(r))) return t;
                    let o = new Map();
                    return (
                      (t = {
                        id: n,
                        observer: new IntersectionObserver((e) => {
                          e.forEach((e) => {
                            let t = o.get(e.target),
                              n = e.isIntersecting || e.intersectionRatio > 0;
                            t && n && t(n);
                          });
                        }, e),
                        elements: o,
                      }),
                      f.push(n),
                      u.set(n, t),
                      t
                    );
                  })(n);
                  return (
                    l.set(e, t),
                    o.observe(e),
                    function () {
                      if ((l.delete(e), o.unobserve(e), 0 === l.size)) {
                        o.disconnect(), u.delete(r);
                        let e = f.findIndex(
                          (e) => e.root === r.root && e.margin === r.margin
                        );
                        e > -1 && f.splice(e, 1);
                      }
                    }
                  );
                })(e, (e) => e && s(e), {
                  root: null == t ? void 0 : t.current,
                  rootMargin: n,
                });
            } else if (!c) {
              let e = (0, o.requestIdleCallback)(() => s(!0));
              return () => (0, o.cancelIdleCallback)(e);
            }
          }, [i, n, t, c, d.current]),
          [
            p,
            c,
            (0, r.useCallback)(() => {
              s(!1);
            }, []),
          ]
        );
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    61396: function (e, t, n) {
      e.exports = n(25250);
    },
    33890: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return c;
        },
      });
      var r = n(58250),
        o = n(89839),
        l = n(50446),
        u = n(83032),
        f = n(61396),
        a = n(57437),
        i = (...e) => e.filter(Boolean).join(" "),
        c = (0, r.G)(function (e, t) {
          let n = (0, o.mq)("Link", e),
            {
              className: r,
              isExternal: c,
              href: s,
              children: d,
              ...p
            } = (0, l.Lr)(e);
          return (0,
          a.jsx)(u.m.a, { target: c ? "_blank" : void 0, ref: t, href: s, ...p, className: i("chakra-link", r), __css: n, as: f, children: d });
        });
    },
  },
]);
