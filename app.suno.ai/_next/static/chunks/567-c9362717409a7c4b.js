(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [567],
  {
    65567: function (e, t, i) {
      "use strict";
      i.d(t, {
        vn: function () {
          return im;
        },
        a7: function () {
          return ia;
        },
        qI: function () {
          return il;
        },
        El: function () {
          return tT;
        },
        Gp: function () {
          return t8;
        },
        _L: function () {
          return T;
        },
        X1: function () {
          return N;
        },
        KM: function () {
          return ik;
        },
        Bg: function () {
          return t9;
        },
        A: function () {
          return t4;
        },
        Li: function () {
          return t7;
        },
        Cv: function () {
          return iu;
        },
        gM: function () {
          return ig;
        },
        yB: function () {
          return ip;
        },
        N1: function () {
          return id;
        },
        C2: function () {
          return ic;
        },
        sO: function () {
          return ih;
        },
        cL: function () {
          return tX;
        },
        $d: function () {
          return iC;
        },
        qu: function () {
          return ij;
        },
        AM: function () {
          return iz;
        },
        Mo: function () {
          return tQ;
        },
        gX: function () {
          return iO;
        },
        CH: function () {
          return io;
        },
        tj: function () {
          return is;
        },
        l8: function () {
          return t3;
        },
        Iw: function () {
          return t2;
        },
        _E: function () {
          return tY;
        },
        CJ: function () {
          return iP;
        },
        Gi: function () {
          return ib;
        },
        kD: function () {
          return U;
        },
        G1: function () {
          return A;
        },
        sZ: function () {
          return _;
        },
        V9: function () {
          return R;
        },
        ZC: function () {
          return L;
        },
        aC: function () {
          return ir;
        },
        ll: function () {
          return iL;
        },
        E2: function () {
          return iN;
        },
        jS: function () {
          return iA;
        },
        o8: function () {
          return tS;
        },
        eW: function () {
          return tC;
        },
        qi: function () {
          return tO;
        },
        kP: function () {
          return iU;
        },
        xo: function () {
          return iR;
        },
        zq: function () {
          return iM;
        },
        QS: function () {
          return iI;
        },
        aF: function () {
          return i_;
        },
        r0: function () {
          return tH;
        },
        NA: function () {
          return iy;
        },
        ns: function () {
          return iv;
        },
      });
      var n,
        r,
        o,
        s,
        a,
        l,
        u,
        d,
        c,
        h = {};
      i.r(h),
        i.d(h, {
          SWRConfig: function () {
            return e9;
          },
          default: function () {
            return te;
          },
          mutate: function () {
            return eH;
          },
          preload: function () {
            return e3;
          },
          unstable_serialize: function () {
            return e4;
          },
          useSWRConfig: function () {
            return e2;
          },
        }),
        i(46673);
      var p = (e) =>
          "undefined" != typeof atob && "function" == typeof atob
            ? atob(e)
            : "undefined" != typeof global && global.Buffer
            ? new global.Buffer(e, "base64").toString()
            : e,
        g = "pk_live_";
      function f(e) {
        if (!m((e = e || ""))) return null;
        let t = e.startsWith(g) ? "production" : "development",
          i = p(e.split("_")[2]);
        return i.endsWith("$")
          ? { instanceType: t, frontendApi: (i = i.slice(0, -1)) }
          : null;
      }
      function m(e) {
        let t = (e = e || "").startsWith(g) || e.startsWith("pk_test_"),
          i = p(e.split("_")[2] || "").endsWith("$");
        return t && i;
      }
      var k = Object.defineProperty,
        v = Object.getOwnPropertyDescriptor,
        b = Object.getOwnPropertyNames,
        y = Object.prototype.hasOwnProperty,
        P = (e, t, i, n) => {
          if ((t && "object" == typeof t) || "function" == typeof t)
            for (let r of b(t))
              y.call(e, r) ||
                r === i ||
                k(e, r, {
                  get: () => t[r],
                  enumerable: !(n = v(t, r)) || n.enumerable,
                });
          return e;
        },
        S = i(2265),
        w = () => !1,
        E = () => !1,
        C = () => {
          try {
            return !0;
          } catch (e) {}
          return !1;
        },
        O = new Set(),
        z = (e, t, i) => {
          let n = E() || C(),
            r = i ?? e;
          O.has(r) ||
            n ||
            (O.add(r),
            console.warn(`Clerk - DEPRECATION WARNING: "${e}" is deprecated and will be removed in the next major release.
${t}`));
        },
        j = (e, t, i, n) => {
          let r = e[t];
          Object.defineProperty(e, t, {
            get: () => (z(t, i, n), r),
            set(e) {
              r = e;
            },
          });
        };
      function _(e) {
        return U(e) || L(e) || "clerkRuntimeError" in e;
      }
      function U(e) {
        return "clerkError" in e;
      }
      function L(e) {
        return (
          "code" in e && [4001, 32602, 32603].includes(e.code) && "message" in e
        );
      }
      var M = class e extends Error {
          constructor(t) {
            super(t),
              (this.code = t),
              Object.setPrototypeOf(this, e.prototype),
              z("MagicLinkError", "Use `EmailLinkError` instead.");
          }
        },
        I = class e extends Error {
          constructor(t) {
            super(t), (this.code = t), Object.setPrototypeOf(this, e.prototype);
          }
        };
      function R(e) {
        return (
          z("isMagicLinkError", "Use `isEmailLinkError` instead."),
          e instanceof M
        );
      }
      function A(e) {
        return e instanceof I;
      }
      var N = new Proxy(
          { Expired: "expired", Failed: "failed" },
          {
            get: (e, t, i) => (
              z("MagicLinkErrorCode", "Use `EmailLinkErrorCode` instead."),
              Reflect.get(e, t, i)
            ),
          }
        ),
        T = { Expired: "expired", Failed: "failed" },
        x = Object.freeze({
          InvalidFrontendApiErrorMessage:
            "The frontendApi passed to Clerk is invalid. You can get your Frontend API key at https://dashboard.clerk.com/last-active?path=api-keys. (key={{key}})",
          InvalidProxyUrlErrorMessage:
            "The proxyUrl passed to Clerk is invalid. The expected value for proxyUrl is an absolute URL or a relative path with a leading '/'. (key={{url}})",
          InvalidPublishableKeyErrorMessage:
            "The publishableKey passed to Clerk is invalid. You can get your Publishable key at https://dashboard.clerk.com/last-active?path=api-keys. (key={{key}})",
          MissingPublishableKeyErrorMessage:
            "Missing publishableKey. You can get your key at https://dashboard.clerk.com/last-active?path=api-keys.",
        });
      let D = "Clerk: Child of WithClerk must be a function.",
        V = (e) =>
          `Clerk: You've passed multiple children components to <${e}/>. You can only pass a single child component or text.`,
        W =
          "Clerk: Unsupported usage of isSatellite, domain or proxyUrl. The usage of isSatellite, domain or proxyUrl as function is not supported in non-browser environments.",
        F = (e) =>
          `Clerk: <${e} /> can only accept <${e}.Page /> and <${e}.Link /> as its children. Any other provided component will be ignored.`,
        $ = (e) =>
          `Clerk: Missing props. <${e}.Page /> component requires the following props: url, label, labelIcon, alongside with children to be rendered inside the page.`,
        B = (e) =>
          `Clerk: Missing props. <${e}.Link /> component requires the following props: url, label and labelIcon.`,
        K = (function ({ packageName: e, customMessages: t }) {
          let i = e,
            n = { ...x, ...t };
          function r(e, t) {
            if (!t) return `${i}: ${e}`;
            let n = e;
            for (let i of e.matchAll(/{{([a-zA-Z0-9-_]+)}}/g)) {
              let e = (t[i[1]] || "").toString();
              n = n.replace(`{{${i[1]}}}`, e);
            }
            return `${i}: ${n}`;
          }
          return {
            setPackageName({ packageName: e }) {
              return "string" == typeof e && (i = e), this;
            },
            setMessages({ customMessages: e }) {
              return Object.assign(n, e || {}), this;
            },
            throwInvalidPublishableKeyError(e) {
              throw Error(r(n.InvalidPublishableKeyErrorMessage, e));
            },
            throwInvalidFrontendApiError(e) {
              throw Error(r(n.InvalidFrontendApiErrorMessage, e));
            },
            throwInvalidProxyUrl(e) {
              throw Error(r(n.InvalidProxyUrlErrorMessage, e));
            },
            throwMissingPublishableKeyError() {
              throw Error(r(n.MissingPublishableKeyErrorMessage));
            },
          };
        })({ packageName: "@clerk/react" }),
        q = new Map();
      var G = (e, t, i) => {
          if (!t.has(e)) throw TypeError("Cannot " + i);
        },
        J = (e, t, i) => (
          G(e, t, "read from private field"), i ? i.call(e) : t.get(e)
        ),
        H = (e, t, i) => {
          if (t.has(e))
            throw TypeError(
              "Cannot add the same private member more than once"
            );
          t instanceof WeakSet ? t.add(e) : t.set(e, i);
        },
        Y = (e, t, i, n) => (
          G(e, t, "write to private field"), n ? n.call(e, i) : t.set(e, i), i
        );
      function Z() {
        return "undefined" != typeof window;
      }
      function X(e, t, i) {
        return "function" == typeof e
          ? e(t)
          : void 0 !== e
          ? e
          : void 0 !== i
          ? i
          : void 0;
      }
      async function Q(e = "", t) {
        let { async: i, defer: n, beforeLoad: r, crossOrigin: o } = t || {};
        return new Promise((t, s) => {
          e || s("loadScript cannot be called without a src"),
            (document && document.body) ||
              s("loadScript cannot be called when document does not exist");
          let a = document.createElement("script");
          o && a.setAttribute("crossorigin", o),
            (a.async = i || !1),
            (a.defer = n || !1),
            a.addEventListener("load", () => {
              a.remove(), t(a);
            }),
            a.addEventListener("error", () => {
              a.remove(), s();
            }),
            (a.src = e),
            r?.(a),
            document.body.appendChild(a);
        });
      }
      function ee(e) {
        return e.startsWith("/");
      }
      RegExp(
        "bot|spider|crawl|APIs-Google|AdsBot|Googlebot|mediapartners|Google Favicon|FeedFetcher|Google-Read-Aloud|DuplexWeb-Google|googleweblight|bing|yandex|baidu|duckduck|yahoo|ecosia|ia_archiver|facebook|instagram|pinterest|reddit|slack|twitter|whatsapp|youtube|semrush",
        "i"
      );
      let { isDevOrStagingUrl: et } = (function () {
          let e = [
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
            isDevOrStagingUrl: (i) => {
              if (!i) return !1;
              let n = "string" == typeof i ? i : i.hostname,
                r = t.get(n);
              return (
                void 0 === r &&
                  ((r = e.some((e) => n.endsWith(e))), t.set(n, r)),
                r
              );
            },
          };
        })(),
        ei = (e) => {
          if (e) return e;
          let t = en("4.30.3");
          return t ? ("snapshot" === t ? "4.68.2" : t) : er("4.30.3");
        },
        en = (e) => e.match(/-(.*)\./)?.[1],
        er = (e) => e.split(".")[0],
        eo = (e) => {
          let { frontendApi: t, publishableKey: i } = e;
          return (
            i || t || K.throwMissingPublishableKeyError(),
            Q(es(e), {
              async: !0,
              crossOrigin: "anonymous",
              beforeLoad: ea(e),
            }).catch(() => {
              throw Error("Clerk: Failed to load Clerk");
            })
          );
        },
        es = (e) => {
          let {
            clerkJSUrl: t,
            clerkJSVariant: i,
            clerkJSVersion: n,
            proxyUrl: r,
            domain: o,
            publishableKey: s,
            frontendApi: a,
          } = e;
          if (t) return t;
          let l = "";
          l =
            r && (!r || /^http(s)?:\/\//.test(r || "") || ee(r))
              ? (r
                  ? ee(r)
                    ? new URL(r, window.location.origin).toString()
                    : r
                  : ""
                ).replace(/http(s)?:\/\//, "")
              : o && !et(f(s)?.frontendApi || a || "")
              ? (function (e) {
                  let t;
                  if (!e) return "";
                  if (e.match(/^(clerk\.)+\w*$/)) t = /(clerk\.)*(?=clerk\.)/;
                  else {
                    if (e.match(/\.clerk.accounts/)) return e;
                    t = /^(clerk\.)*/gi;
                  }
                  let i = e.replace(t, "");
                  return `clerk.${i}`;
                })(o)
              : f(s)?.frontendApi || a || "";
          let u = i ? `${i.replace(/\.+$/, "")}.` : "",
            d = ei(n);
          return `https://${l}/npm/@clerk/clerk-js@${d}/dist/clerk.${u}browser.js`;
        },
        ea = (e) => (t) => {
          let { publishableKey: i, frontendApi: n, proxyUrl: r, domain: o } = e;
          i
            ? t.setAttribute("data-clerk-publishable-key", i)
            : n && t.setAttribute("data-clerk-frontend-api", n),
            r && t.setAttribute("data-clerk-proxy-url", r),
            o && t.setAttribute("data-clerk-domain", o);
        },
        el = class e {
          constructor(e) {
            (this.clerkjs = null),
              (this.preopenSignIn = null),
              (this.preopenSignUp = null),
              (this.preopenUserProfile = null),
              (this.preopenOrganizationProfile = null),
              (this.preopenCreateOrganization = null),
              (this.premountSignInNodes = new Map()),
              (this.premountSignUpNodes = new Map()),
              (this.premountUserProfileNodes = new Map()),
              (this.premountUserButtonNodes = new Map()),
              (this.premountOrganizationProfileNodes = new Map()),
              (this.premountCreateOrganizationNodes = new Map()),
              (this.premountOrganizationSwitcherNodes = new Map()),
              (this.premountOrganizationListNodes = new Map()),
              (this.premountMethodCalls = new Map()),
              (this.loadedListeners = []),
              H(this, s, !1),
              H(this, a, void 0),
              H(this, l, void 0),
              H(this, u, void 0),
              H(this, d, void 0),
              (this.isReady = () => !!this.clerkjs?.isReady()),
              (this.buildSignInUrl = (e) => {
                let t = () => this.clerkjs?.buildSignInUrl(e) || "";
                if (this.clerkjs && J(this, s)) return t();
                this.premountMethodCalls.set("buildSignInUrl", t);
              }),
              (this.buildSignUpUrl = (e) => {
                let t = () => this.clerkjs?.buildSignUpUrl(e) || "";
                if (this.clerkjs && J(this, s)) return t();
                this.premountMethodCalls.set("buildSignUpUrl", t);
              }),
              (this.buildUserProfileUrl = () => {
                let e = () => this.clerkjs?.buildUserProfileUrl() || "";
                if (this.clerkjs && J(this, s)) return e();
                this.premountMethodCalls.set("buildUserProfileUrl", e);
              }),
              (this.buildCreateOrganizationUrl = () => {
                let e = () => this.clerkjs?.buildCreateOrganizationUrl() || "";
                if (this.clerkjs && J(this, s)) return e();
                this.premountMethodCalls.set("buildCreateOrganizationUrl", e);
              }),
              (this.buildOrganizationProfileUrl = () => {
                let e = () => this.clerkjs?.buildOrganizationProfileUrl() || "";
                if (this.clerkjs && J(this, s)) return e();
                this.premountMethodCalls.set("buildOrganizationProfileUrl", e);
              }),
              (this.buildHomeUrl = () => {
                let e = () => this.clerkjs?.buildHomeUrl() || "";
                if (this.clerkjs && J(this, s)) return e();
                this.premountMethodCalls.set("buildHomeUrl", e);
              }),
              (this.buildUrlWithAuth = (e, t) => {
                let i = () => this.clerkjs?.buildUrlWithAuth(e, t) || "";
                if (this.clerkjs && J(this, s)) return i();
                this.premountMethodCalls.set("buildUrlWithAuth", i);
              }),
              (this.handleUnauthenticated = () => {
                let e = () => this.clerkjs?.handleUnauthenticated();
                this.clerkjs && J(this, s)
                  ? e()
                  : this.premountMethodCalls.set("handleUnauthenticated", e);
              }),
              (this.addOnLoaded = (e) => {
                this.loadedListeners.push(e);
              }),
              (this.emitLoaded = () => {
                this.loadedListeners.forEach((e) => e()),
                  (this.loadedListeners = []);
              }),
              (this.hydrateClerkJS = (e) => {
                if (!e) throw Error("Failed to hydrate latest Clerk JS");
                return (
                  (this.clerkjs = e),
                  this.premountMethodCalls.forEach((e) => e()),
                  null !== this.preopenSignIn &&
                    e.openSignIn(this.preopenSignIn),
                  null !== this.preopenSignUp &&
                    e.openSignUp(this.preopenSignUp),
                  null !== this.preopenUserProfile &&
                    e.openUserProfile(this.preopenUserProfile),
                  null !== this.preopenOrganizationProfile &&
                    e.openOrganizationProfile(this.preopenOrganizationProfile),
                  null !== this.preopenCreateOrganization &&
                    e.openCreateOrganization(this.preopenCreateOrganization),
                  this.premountSignInNodes.forEach((t, i) => {
                    e.mountSignIn(i, t);
                  }),
                  this.premountSignUpNodes.forEach((t, i) => {
                    e.mountSignUp(i, t);
                  }),
                  this.premountUserProfileNodes.forEach((t, i) => {
                    e.mountUserProfile(i, t);
                  }),
                  this.premountUserButtonNodes.forEach((t, i) => {
                    e.mountUserButton(i, t);
                  }),
                  this.premountOrganizationListNodes.forEach((t, i) => {
                    e.mountOrganizationList(i, t);
                  }),
                  Y(this, s, !0),
                  this.emitLoaded(),
                  this.clerkjs
                );
              }),
              (this.__unstable__updateProps = (e) => {
                this.clerkjs &&
                  "__unstable__updateProps" in this.clerkjs &&
                  this.clerkjs.__unstable__updateProps(e);
              }),
              (this.setActive = ({
                session: e,
                organization: t,
                beforeEmit: i,
              }) =>
                this.clerkjs
                  ? this.clerkjs.setActive({
                      session: e,
                      organization: t,
                      beforeEmit: i,
                    })
                  : Promise.reject()),
              (this.setSession = (e, t) => (
                z("setSession", "Use `Clerk.setActive` instead"),
                this.setActive({ session: e, beforeEmit: t })
              )),
              (this.openSignIn = (e) => {
                this.clerkjs && J(this, s)
                  ? this.clerkjs.openSignIn(e)
                  : (this.preopenSignIn = e);
              }),
              (this.closeSignIn = () => {
                this.clerkjs && J(this, s)
                  ? this.clerkjs.closeSignIn()
                  : (this.preopenSignIn = null);
              }),
              (this.openUserProfile = (e) => {
                this.clerkjs && J(this, s)
                  ? this.clerkjs.openUserProfile(e)
                  : (this.preopenUserProfile = e);
              }),
              (this.closeUserProfile = () => {
                this.clerkjs && J(this, s)
                  ? this.clerkjs.closeUserProfile()
                  : (this.preopenUserProfile = null);
              }),
              (this.openOrganizationProfile = (e) => {
                this.clerkjs && J(this, s)
                  ? this.clerkjs.openOrganizationProfile(e)
                  : (this.preopenOrganizationProfile = e);
              }),
              (this.closeOrganizationProfile = () => {
                this.clerkjs && J(this, s)
                  ? this.clerkjs.closeOrganizationProfile()
                  : (this.preopenOrganizationProfile = null);
              }),
              (this.openCreateOrganization = (e) => {
                this.clerkjs && J(this, s)
                  ? this.clerkjs.openCreateOrganization(e)
                  : (this.preopenCreateOrganization = e);
              }),
              (this.closeCreateOrganization = () => {
                this.clerkjs && J(this, s)
                  ? this.clerkjs.closeCreateOrganization()
                  : (this.preopenCreateOrganization = null);
              }),
              (this.openSignUp = (e) => {
                this.clerkjs && J(this, s)
                  ? this.clerkjs.openSignUp(e)
                  : (this.preopenSignUp = e);
              }),
              (this.closeSignUp = () => {
                this.clerkjs && J(this, s)
                  ? this.clerkjs.closeSignUp()
                  : (this.preopenSignUp = null);
              }),
              (this.mountSignIn = (e, t) => {
                this.clerkjs && J(this, s)
                  ? this.clerkjs.mountSignIn(e, t)
                  : this.premountSignInNodes.set(e, t);
              }),
              (this.unmountSignIn = (e) => {
                this.clerkjs && J(this, s)
                  ? this.clerkjs.unmountSignIn(e)
                  : this.premountSignInNodes.delete(e);
              }),
              (this.mountSignUp = (e, t) => {
                this.clerkjs && J(this, s)
                  ? this.clerkjs.mountSignUp(e, t)
                  : this.premountSignUpNodes.set(e, t);
              }),
              (this.unmountSignUp = (e) => {
                this.clerkjs && J(this, s)
                  ? this.clerkjs.unmountSignUp(e)
                  : this.premountSignUpNodes.delete(e);
              }),
              (this.mountUserProfile = (e, t) => {
                this.clerkjs && J(this, s)
                  ? this.clerkjs.mountUserProfile(e, t)
                  : this.premountUserProfileNodes.set(e, t);
              }),
              (this.unmountUserProfile = (e) => {
                this.clerkjs && J(this, s)
                  ? this.clerkjs.unmountUserProfile(e)
                  : this.premountUserProfileNodes.delete(e);
              }),
              (this.mountOrganizationProfile = (e, t) => {
                this.clerkjs && J(this, s)
                  ? this.clerkjs.mountOrganizationProfile(e, t)
                  : this.premountOrganizationProfileNodes.set(e, t);
              }),
              (this.unmountOrganizationProfile = (e) => {
                this.clerkjs && J(this, s)
                  ? this.clerkjs.unmountOrganizationProfile(e)
                  : this.premountOrganizationProfileNodes.delete(e);
              }),
              (this.mountCreateOrganization = (e, t) => {
                this.clerkjs && J(this, s)
                  ? this.clerkjs.mountCreateOrganization(e, t)
                  : this.premountCreateOrganizationNodes.set(e, t);
              }),
              (this.unmountCreateOrganization = (e) => {
                this.clerkjs && J(this, s)
                  ? this.clerkjs.unmountCreateOrganization(e)
                  : this.premountCreateOrganizationNodes.delete(e);
              }),
              (this.mountOrganizationSwitcher = (e, t) => {
                this.clerkjs && J(this, s)
                  ? this.clerkjs.mountOrganizationSwitcher(e, t)
                  : this.premountOrganizationSwitcherNodes.set(e, t);
              }),
              (this.unmountOrganizationSwitcher = (e) => {
                this.clerkjs && J(this, s)
                  ? this.clerkjs.unmountOrganizationSwitcher(e)
                  : this.premountOrganizationSwitcherNodes.delete(e);
              }),
              (this.mountOrganizationList = (e, t) => {
                this.clerkjs && J(this, s)
                  ? this.clerkjs.mountOrganizationList(e, t)
                  : this.premountOrganizationListNodes.set(e, t);
              }),
              (this.unmountOrganizationList = (e) => {
                this.clerkjs && J(this, s)
                  ? this.clerkjs.unmountOrganizationList(e)
                  : this.premountOrganizationListNodes.delete(e);
              }),
              (this.mountUserButton = (e, t) => {
                this.clerkjs && J(this, s)
                  ? this.clerkjs.mountUserButton(e, t)
                  : this.premountUserButtonNodes.set(e, t);
              }),
              (this.unmountUserButton = (e) => {
                this.clerkjs && J(this, s)
                  ? this.clerkjs.unmountUserButton(e)
                  : this.premountUserButtonNodes.delete(e);
              }),
              (this.addListener = (e) => {
                let t = () => this.clerkjs?.addListener(e);
                return this.clerkjs
                  ? t()
                  : (this.premountMethodCalls.set("addListener", t),
                    () => this.premountMethodCalls.delete("addListener"));
              }),
              (this.navigate = (e) => {
                let t = () => this.clerkjs?.navigate(e);
                this.clerkjs && J(this, s)
                  ? t()
                  : this.premountMethodCalls.set("navigate", t);
              }),
              (this.redirectWithAuth = (...e) => {
                let t = () => this.clerkjs?.redirectWithAuth(...e);
                this.clerkjs && J(this, s)
                  ? t()
                  : this.premountMethodCalls.set("redirectWithAuth", t);
              }),
              (this.redirectToSignIn = (e) => {
                let t = () => this.clerkjs?.redirectToSignIn(e);
                this.clerkjs && J(this, s)
                  ? t()
                  : this.premountMethodCalls.set("redirectToSignIn", t);
              }),
              (this.redirectToSignUp = (e) => {
                let t = () => this.clerkjs?.redirectToSignUp(e);
                this.clerkjs && J(this, s)
                  ? t()
                  : this.premountMethodCalls.set("redirectToSignUp", t);
              }),
              (this.redirectToUserProfile = () => {
                let e = () => this.clerkjs?.redirectToUserProfile();
                this.clerkjs && J(this, s)
                  ? e()
                  : this.premountMethodCalls.set("redirectToUserProfile", e);
              }),
              (this.redirectToHome = () => {
                let e = () => this.clerkjs?.redirectToHome();
                this.clerkjs && J(this, s)
                  ? e()
                  : this.premountMethodCalls.set("redirectToHome", e);
              }),
              (this.redirectToOrganizationProfile = () => {
                let e = () => this.clerkjs?.redirectToOrganizationProfile();
                this.clerkjs && J(this, s)
                  ? e()
                  : this.premountMethodCalls.set(
                      "redirectToOrganizationProfile",
                      e
                    );
              }),
              (this.redirectToCreateOrganization = () => {
                let e = () => this.clerkjs?.redirectToCreateOrganization();
                this.clerkjs && J(this, s)
                  ? e()
                  : this.premountMethodCalls.set(
                      "redirectToCreateOrganization",
                      e
                    );
              }),
              (this.handleRedirectCallback = (e) => {
                let t = () => this.clerkjs?.handleRedirectCallback(e);
                this.clerkjs && J(this, s)
                  ? t()?.catch(() => {})
                  : this.premountMethodCalls.set("handleRedirectCallback", t);
              }),
              (this.handleMagicLinkVerification = async (e) => {
                z(
                  "handleMagicLinkVerification",
                  "Use `handleEmailLinkVerification` instead."
                );
                let t = () => this.clerkjs?.handleMagicLinkVerification(e);
                if (this.clerkjs && J(this, s)) return t();
                this.premountMethodCalls.set("handleMagicLinkVerification", t);
              }),
              (this.handleEmailLinkVerification = async (e) => {
                let t = () => this.clerkjs?.handleEmailLinkVerification(e);
                if (this.clerkjs && J(this, s)) return t();
                this.premountMethodCalls.set("handleEmailLinkVerification", t);
              }),
              (this.authenticateWithMetamask = async (e) => {
                let t = () => this.clerkjs?.authenticateWithMetamask(e);
                if (this.clerkjs && J(this, s)) return t();
                this.premountMethodCalls.set("authenticateWithMetamask", t);
              }),
              (this.createOrganization = async (e) => {
                let t = () => this.clerkjs?.createOrganization(e);
                if (this.clerkjs && J(this, s)) return t();
                this.premountMethodCalls.set("createOrganization", t);
              }),
              (this.getOrganizationMemberships = async () => {
                let e = () => this.clerkjs?.getOrganizationMemberships();
                if (this.clerkjs && J(this, s)) return e();
                this.premountMethodCalls.set("getOrganizationMemberships", e);
              }),
              (this.getOrganization = async (e) => {
                let t = () => this.clerkjs?.getOrganization(e);
                if (this.clerkjs && J(this, s)) return t();
                this.premountMethodCalls.set("getOrganization", t);
              }),
              (this.signOut = async (e, t) => {
                let i = () => this.clerkjs?.signOut(e, t);
                if (this.clerkjs && J(this, s)) return i();
                this.premountMethodCalls.set("signOut", i);
              });
            let {
              Clerk: t = null,
              frontendApi: i,
              publishableKey: n,
            } = e || {};
            Y(this, u, i),
              Y(this, d, n),
              Y(this, l, e?.proxyUrl),
              Y(this, a, e?.domain),
              (this.options = e),
              (this.Clerk = t),
              (this.mode = Z() ? "browser" : "server"),
              this.loadClerkJS();
          }
          get publishableKey() {
            return J(this, d);
          }
          get loaded() {
            return J(this, s);
          }
          static getOrCreateInstance(t) {
            return (
              (Z() &&
                J(this, c) &&
                (!t.Clerk || J(this, c).Clerk === t.Clerk)) ||
                Y(this, c, new e(t)),
              J(this, c)
            );
          }
          get domain() {
            if ("undefined" != typeof window && window.location)
              return X(J(this, a), new URL(window.location.href), "");
            if ("function" == typeof J(this, a)) throw Error(W);
            return J(this, a) || "";
          }
          get proxyUrl() {
            if ("undefined" != typeof window && window.location)
              return X(J(this, l), new URL(window.location.href), "");
            if ("function" == typeof J(this, l)) throw Error(W);
            return J(this, l) || "";
          }
          get sdkMetadata() {
            return (
              this.clerkjs?.sdkMetadata || this.options.sdkMetadata || void 0
            );
          }
          get instanceType() {
            return this.clerkjs?.instanceType;
          }
          get frontendApi() {
            return this.clerkjs?.frontendApi || J(this, u) || "";
          }
          get isStandardBrowser() {
            return (
              this.clerkjs?.isStandardBrowser ||
              this.options.standardBrowser ||
              !1
            );
          }
          get isSatellite() {
            if ("undefined" != typeof window && window.location)
              return X(
                this.options.isSatellite,
                new URL(window.location.href),
                !1
              );
            if ("function" == typeof this.options.isSatellite) throw Error(W);
            return !1;
          }
          async loadClerkJS() {
            if (!("browser" !== this.mode || J(this, s))) {
              "undefined" != typeof window &&
                ((window.__clerk_frontend_api = this.frontendApi),
                (window.__clerk_publishable_key = this.publishableKey),
                (window.__clerk_proxy_url = this.proxyUrl),
                (window.__clerk_domain = this.domain));
              try {
                if (this.Clerk) {
                  var e;
                  let t;
                  ((e = this.Clerk), "function" == typeof e)
                    ? ((t = new this.Clerk(
                        this.publishableKey || this.frontendApi || "",
                        { proxyUrl: this.proxyUrl, domain: this.domain }
                      )),
                      await t.load(this.options))
                    : (t = this.Clerk).isReady() ||
                      (await t.load(this.options)),
                    (i.g.Clerk = t);
                } else {
                  if (
                    (i.g.Clerk ||
                      (await eo({
                        ...this.options,
                        frontendApi: this.frontendApi,
                        publishableKey: this.publishableKey,
                        proxyUrl: this.proxyUrl,
                        domain: this.domain,
                      })),
                    !i.g.Clerk)
                  )
                    throw Error(
                      "Failed to download latest ClerkJS. Contact support@clerk.com."
                    );
                  await i.g.Clerk.load(this.options);
                }
                if (
                  ((i.g.Clerk.sdkMetadata = this.options.sdkMetadata ?? {
                    name: "@clerk/clerk-react",
                    version: "4.30.3",
                  }),
                  i.g.Clerk?.loaded || i.g.Clerk?.isReady())
                )
                  return this.hydrateClerkJS(i.g.Clerk);
                return;
              } catch (e) {
                console.error(e.stack || e.message || e);
                return;
              }
            }
          }
          get version() {
            return this.clerkjs?.version;
          }
          get client() {
            return this.clerkjs ? this.clerkjs.client : void 0;
          }
          get session() {
            return this.clerkjs ? this.clerkjs.session : void 0;
          }
          get user() {
            return this.clerkjs ? this.clerkjs.user : void 0;
          }
          get organization() {
            return this.clerkjs ? this.clerkjs.organization : void 0;
          }
          get __unstable__environment() {
            return this.clerkjs ? this.clerkjs.__unstable__environment : void 0;
          }
          __unstable__setEnvironment(...e) {
            this.clerkjs &&
              "__unstable__setEnvironment" in this.clerkjs &&
              this.clerkjs.__unstable__setEnvironment(e);
          }
        };
      (s = new WeakMap()),
        (a = new WeakMap()),
        (l = new WeakMap()),
        (u = new WeakMap()),
        (d = new WeakMap()),
        H(el, (c = new WeakMap()), void 0);
      let eu = (e, t, i) => (!e && i ? ed(i) : ec(t)),
        ed = (e) => {
          let t = e.userId,
            i = e.user,
            n = e.sessionId,
            r = e.session,
            o = e.organization,
            s = e.orgId,
            a = e.orgRole;
          return {
            userId: t,
            user: i,
            sessionId: n,
            session: r,
            organization: o,
            orgId: s,
            orgRole: a,
            orgPermissions: e.orgPermissions,
            orgSlug: e.orgSlug,
            actor: e.actor,
            lastOrganizationInvitation: null,
            lastOrganizationMember: null,
          };
        },
        ec = (e) => {
          let t = e.user ? e.user.id : e.user,
            i = e.user,
            n = e.session ? e.session.id : e.session,
            r = e.session,
            o = r?.actor,
            s = e.organization,
            a = e.organization ? e.organization.id : e.organization,
            l = s?.slug,
            u = s
              ? i?.organizationMemberships?.find((e) => e.organization.id === a)
              : s,
            d = u ? u.permissions : u;
          return {
            userId: t,
            user: i,
            sessionId: n,
            session: r,
            organization: s,
            orgId: a,
            orgRole: u ? u.role : u,
            orgSlug: l,
            orgPermissions: d,
            actor: o,
            lastOrganizationInvitation: e.lastOrganizationInvitation,
            lastOrganizationMember: e.lastOrganizationMember,
          };
        };
      var eh = i(26272);
      let ep = () => {},
        eg = ep(),
        ef = Object,
        em = (e) => e === eg,
        ek = (e) => "function" == typeof e,
        ev = (e, t) => ({ ...e, ...t }),
        eb = (e) => ek(e.then),
        ey = new WeakMap(),
        eP = 0,
        eS = (e) => {
          let t, i;
          let n = typeof e,
            r = e && e.constructor,
            o = r == Date;
          if (ef(e) !== e || o || r == RegExp)
            t = o
              ? e.toJSON()
              : "symbol" == n
              ? e.toString()
              : "string" == n
              ? JSON.stringify(e)
              : "" + e;
          else {
            if ((t = ey.get(e))) return t;
            if (((t = ++eP + "~"), ey.set(e, t), r == Array)) {
              for (i = 0, t = "@"; i < e.length; i++) t += eS(e[i]) + ",";
              ey.set(e, t);
            }
            if (r == ef) {
              t = "#";
              let n = ef.keys(e).sort();
              for (; !em((i = n.pop())); )
                em(e[i]) || (t += i + ":" + eS(e[i]) + ",");
              ey.set(e, t);
            }
          }
          return t;
        },
        ew = new WeakMap(),
        eE = {},
        eC = {},
        eO = "undefined",
        ez = typeof window != eO,
        ej = typeof document != eO,
        e_ = () => ez && typeof window.requestAnimationFrame != eO,
        eU = (e, t) => {
          let i = ew.get(e);
          return [
            () => (!em(t) && e.get(t)) || eE,
            (n) => {
              if (!em(t)) {
                let r = e.get(t);
                t in eC || (eC[t] = r), i[5](t, ev(r, n), r || eE);
              }
            },
            i[6],
            () => (!em(t) && t in eC ? eC[t] : (!em(t) && e.get(t)) || eE),
          ];
        },
        eL = !0,
        [eM, eI] =
          ez && window.addEventListener
            ? [
                window.addEventListener.bind(window),
                window.removeEventListener.bind(window),
              ]
            : [ep, ep],
        eR = {
          initFocus: (e) => (
            ej && document.addEventListener("visibilitychange", e),
            eM("focus", e),
            () => {
              ej && document.removeEventListener("visibilitychange", e),
                eI("focus", e);
            }
          ),
          initReconnect: (e) => {
            let t = () => {
                (eL = !0), e();
              },
              i = () => {
                eL = !1;
              };
            return (
              eM("online", t),
              eM("offline", i),
              () => {
                eI("online", t), eI("offline", i);
              }
            );
          },
        },
        eA = !S.useId,
        eN = !ez || "Deno" in window,
        eT = (e) => (e_() ? window.requestAnimationFrame(e) : setTimeout(e, 1)),
        ex = eN ? S.useEffect : S.useLayoutEffect,
        eD = "undefined" != typeof navigator && navigator.connection,
        eV =
          !eN &&
          eD &&
          (["slow-2g", "2g"].includes(eD.effectiveType) || eD.saveData),
        eW = (e) => {
          if (ek(e))
            try {
              e = e();
            } catch (t) {
              e = "";
            }
          let t = e;
          return [
            (e =
              "string" == typeof e
                ? e
                : (Array.isArray(e) ? e.length : e)
                ? eS(e)
                : ""),
            t,
          ];
        },
        eF = 0,
        e$ = () => ++eF;
      var eB = {
        ERROR_REVALIDATE_EVENT: 3,
        FOCUS_EVENT: 0,
        MUTATE_EVENT: 2,
        RECONNECT_EVENT: 1,
      };
      async function eK(...e) {
        let [t, i, n, r] = e,
          o = ev(
            { populateCache: !0, throwOnError: !0 },
            "boolean" == typeof r ? { revalidate: r } : r || {}
          ),
          s = o.populateCache,
          a = o.rollbackOnError,
          l = o.optimisticData,
          u = !1 !== o.revalidate,
          d = (e) => ("function" == typeof a ? a(e) : !1 !== a),
          c = o.throwOnError;
        if (ek(i)) {
          let e = [];
          for (let n of t.keys())
            !/^\$(inf|sub)\$/.test(n) && i(t.get(n)._k) && e.push(n);
          return Promise.all(e.map(h));
        }
        return h(i);
        async function h(i) {
          let r;
          let [o] = eW(i);
          if (!o) return;
          let [a, h] = eU(t, o),
            [p, g, f, m] = ew.get(t),
            k = p[o],
            v = () =>
              u && (delete f[o], delete m[o], k && k[0])
                ? k[0](2).then(() => a().data)
                : a().data;
          if (e.length < 3) return v();
          let b = n,
            y = e$();
          g[o] = [y, 0];
          let P = !em(l),
            S = a(),
            w = S.data,
            E = S._c,
            C = em(E) ? w : E;
          if ((P && h({ data: (l = ek(l) ? l(C, w) : l), _c: C }), ek(b)))
            try {
              b = b(C);
            } catch (e) {
              r = e;
            }
          if (b && eb(b)) {
            if (
              ((b = await b.catch((e) => {
                r = e;
              })),
              y !== g[o][0])
            ) {
              if (r) throw r;
              return b;
            }
            r && P && d(r) && ((s = !0), h({ data: (b = C), _c: eg }));
          }
          s &&
            !r &&
            (ek(s) && (b = s(b, C)), h({ data: b, error: eg, _c: eg })),
            (g[o][1] = e$());
          let O = await v();
          if ((h({ _c: eg }), r)) {
            if (c) throw r;
            return;
          }
          return s ? O : b;
        }
      }
      let eq = (e, t) => {
          for (let i in e) e[i][0] && e[i][0](t);
        },
        eG = (e, t) => {
          if (!ew.has(e)) {
            let i = ev(eR, t),
              n = {},
              r = eK.bind(eg, e),
              o = ep,
              s = {},
              a = (e, t) => {
                let i = s[e] || [];
                return (s[e] = i), i.push(t), () => i.splice(i.indexOf(t), 1);
              },
              l = (t, i, n) => {
                e.set(t, i);
                let r = s[t];
                if (r) for (let e of r) e(i, n);
              },
              u = () => {
                if (!ew.has(e) && (ew.set(e, [n, {}, {}, {}, r, l, a]), !eN)) {
                  let t = i.initFocus(setTimeout.bind(eg, eq.bind(eg, n, 0))),
                    r = i.initReconnect(setTimeout.bind(eg, eq.bind(eg, n, 1)));
                  o = () => {
                    t && t(), r && r(), ew.delete(e);
                  };
                }
              };
            return u(), [e, r, u, o];
          }
          return [e, ew.get(e)[4]];
        },
        [eJ, eH] = eG(new Map()),
        eY = ev(
          {
            onLoadingSlow: ep,
            onSuccess: ep,
            onError: ep,
            onErrorRetry: (e, t, i, n, r) => {
              let o = i.errorRetryCount,
                s = r.retryCount,
                a =
                  ~~((Math.random() + 0.5) * (1 << (s < 8 ? s : 8))) *
                  i.errorRetryInterval;
              (em(o) || !(s > o)) && setTimeout(n, a, r);
            },
            onDiscarded: ep,
            revalidateOnFocus: !0,
            revalidateOnReconnect: !0,
            revalidateIfStale: !0,
            shouldRetryOnError: !0,
            errorRetryInterval: eV ? 1e4 : 5e3,
            focusThrottleInterval: 5e3,
            dedupingInterval: 2e3,
            loadingTimeout: eV ? 5e3 : 3e3,
            compare: (e, t) => eS(e) == eS(t),
            isPaused: () => !1,
            cache: eJ,
            mutate: eH,
            fallback: {},
          },
          {
            isOnline: () => eL,
            isVisible: () => {
              let e = ej && document.visibilityState;
              return em(e) || "hidden" !== e;
            },
          }
        ),
        eZ = (e, t) => {
          let i = ev(e, t);
          if (t) {
            let { use: n, fallback: r } = e,
              { use: o, fallback: s } = t;
            n && o && (i.use = n.concat(o)), r && s && (i.fallback = ev(r, s));
          }
          return i;
        },
        eX = (0, S.createContext)({}),
        eQ = ez && window.__SWR_DEVTOOLS_USE__,
        e0 = eQ ? window.__SWR_DEVTOOLS_USE__ : [],
        e1 = (e) =>
          ek(e[1])
            ? [e[0], e[1], e[2] || {}]
            : [e[0], null, (null === e[1] ? e[2] : e[1]) || {}],
        e2 = () => ev(eY, (0, S.useContext)(eX)),
        e3 = (e, t) => {
          let [i, n] = eW(e),
            [, , , r] = ew.get(eJ);
          if (r[i]) return r[i];
          let o = t(n);
          return (r[i] = o), o;
        },
        e6 = e0.concat((e) => (t, i, n) => {
          let r =
            i &&
            ((...e) => {
              let [n] = eW(t),
                [, , , r] = ew.get(eJ),
                o = r[n];
              return em(o) ? i(...e) : (delete r[n], o);
            });
          return e(t, r, n);
        }),
        e5 = (e, t, i) => {
          let n = t[e] || (t[e] = []);
          return (
            n.push(i),
            () => {
              let e = n.indexOf(i);
              e >= 0 && ((n[e] = n[n.length - 1]), n.pop());
            }
          );
        };
      eQ && (window.__SWR_DEVTOOLS_REACT__ = S);
      let e4 = (e) => eW(e)[0],
        e8 =
          S.use ||
          ((e) => {
            if ("pending" === e.status) throw e;
            if ("fulfilled" === e.status) return e.value;
            if ("rejected" === e.status) throw e.reason;
            throw (
              ((e.status = "pending"),
              e.then(
                (t) => {
                  (e.status = "fulfilled"), (e.value = t);
                },
                (t) => {
                  (e.status = "rejected"), (e.reason = t);
                }
              ),
              e)
            );
          }),
        e7 = { dedupe: !0 },
        e9 = ef.defineProperty(
          (e) => {
            let { value: t } = e,
              i = (0, S.useContext)(eX),
              n = ek(t),
              r = (0, S.useMemo)(() => (n ? t(i) : t), [n, i, t]),
              o = (0, S.useMemo)(() => (n ? r : eZ(i, r)), [n, i, r]),
              s = r && r.provider,
              a = (0, S.useRef)(eg);
            s && !a.current && (a.current = eG(s(o.cache || eJ), r));
            let l = a.current;
            return (
              l && ((o.cache = l[0]), (o.mutate = l[1])),
              ex(() => {
                if (l) return l[2] && l[2](), l[3];
              }, []),
              (0, S.createElement)(eX.Provider, ev(e, { value: o }))
            );
          },
          "defaultValue",
          { value: eY }
        ),
        te =
          ((n = (e, t, i) => {
            let {
                cache: n,
                compare: r,
                suspense: o,
                fallbackData: s,
                revalidateOnMount: a,
                revalidateIfStale: l,
                refreshInterval: u,
                refreshWhenHidden: d,
                refreshWhenOffline: c,
                keepPreviousData: h,
              } = i,
              [p, g, f, m] = ew.get(n),
              [k, v] = eW(e),
              b = (0, S.useRef)(!1),
              y = (0, S.useRef)(!1),
              P = (0, S.useRef)(k),
              w = (0, S.useRef)(t),
              E = (0, S.useRef)(i),
              C = () => E.current,
              O = () => C().isVisible() && C().isOnline(),
              [z, j, _, U] = eU(n, k),
              L = (0, S.useRef)({}).current,
              M = em(s) ? i.fallback[k] : s,
              I = (e, t) => {
                for (let i in L)
                  if ("data" === i) {
                    if (!r(e[i], t[i]) && (!em(e[i]) || !r(F, t[i]))) return !1;
                  } else if (t[i] !== e[i]) return !1;
                return !0;
              },
              R = (0, S.useMemo)(() => {
                let e =
                    !!k &&
                    !!t &&
                    (em(a) ? !C().isPaused() && !o && (!!em(l) || l) : a),
                  i = (t) => {
                    let i = ev(t);
                    return (delete i._k, e)
                      ? { isValidating: !0, isLoading: !0, ...i }
                      : i;
                  },
                  n = z(),
                  r = U(),
                  s = i(n),
                  u = n === r ? s : i(r),
                  d = s;
                return [
                  () => {
                    let e = i(z());
                    return I(e, d)
                      ? ((d.data = e.data),
                        (d.isLoading = e.isLoading),
                        (d.isValidating = e.isValidating),
                        (d.error = e.error),
                        d)
                      : ((d = e), e);
                  },
                  () => u,
                ];
              }, [n, k]),
              A = (0, eh.useSyncExternalStore)(
                (0, S.useCallback)(
                  (e) =>
                    _(k, (t, i) => {
                      I(i, t) || e();
                    }),
                  [n, k]
                ),
                R[0],
                R[1]
              ),
              N = !b.current,
              T = p[k] && p[k].length > 0,
              x = A.data,
              D = em(x) ? M : x,
              V = A.error,
              W = (0, S.useRef)(D),
              F = h ? (em(x) ? W.current : x) : D,
              $ =
                (!T || !!em(V)) &&
                (N && !em(a)
                  ? a
                  : !C().isPaused() && (o ? !em(D) && l : em(D) || l)),
              B = !!(k && t && N && $),
              K = em(A.isValidating) ? B : A.isValidating,
              q = em(A.isLoading) ? B : A.isLoading,
              G = (0, S.useCallback)(
                async (e) => {
                  let t, n;
                  let o = w.current;
                  if (!k || !o || y.current || C().isPaused()) return !1;
                  let s = !0,
                    a = e || {},
                    l = !f[k] || !a.dedupe,
                    u = () =>
                      eA
                        ? !y.current && k === P.current && b.current
                        : k === P.current,
                    d = { isValidating: !1, isLoading: !1 },
                    c = () => {
                      j(d);
                    },
                    h = () => {
                      let e = f[k];
                      e && e[1] === n && delete f[k];
                    },
                    m = { isValidating: !0 };
                  em(z().data) && (m.isLoading = !0);
                  try {
                    if (
                      (l &&
                        (j(m),
                        i.loadingTimeout &&
                          em(z().data) &&
                          setTimeout(() => {
                            s && u() && C().onLoadingSlow(k, i);
                          }, i.loadingTimeout),
                        (f[k] = [o(v), e$()])),
                      ([t, n] = f[k]),
                      (t = await t),
                      l && setTimeout(h, i.dedupingInterval),
                      !f[k] || f[k][1] !== n)
                    )
                      return l && u() && C().onDiscarded(k), !1;
                    d.error = eg;
                    let e = g[k];
                    if (!em(e) && (n <= e[0] || n <= e[1] || 0 === e[1]))
                      return c(), l && u() && C().onDiscarded(k), !1;
                    let a = z().data;
                    (d.data = r(a, t) ? a : t),
                      l && u() && C().onSuccess(t, k, i);
                  } catch (i) {
                    h();
                    let e = C(),
                      { shouldRetryOnError: t } = e;
                    !e.isPaused() &&
                      ((d.error = i),
                      l &&
                        u() &&
                        (e.onError(i, k, e),
                        (!0 === t || (ek(t) && t(i))) &&
                          O() &&
                          e.onErrorRetry(
                            i,
                            k,
                            e,
                            (e) => {
                              let t = p[k];
                              t && t[0] && t[0](eB.ERROR_REVALIDATE_EVENT, e);
                            },
                            { retryCount: (a.retryCount || 0) + 1, dedupe: !0 }
                          )));
                  }
                  return (s = !1), c(), !0;
                },
                [k, n]
              ),
              J = (0, S.useCallback)((...e) => eK(n, P.current, ...e), []);
            if (
              (ex(() => {
                (w.current = t), (E.current = i), em(x) || (W.current = x);
              }),
              ex(() => {
                if (!k) return;
                let e = G.bind(eg, e7),
                  t = 0,
                  i = e5(k, p, (i, n = {}) => {
                    if (i == eB.FOCUS_EVENT) {
                      let i = Date.now();
                      C().revalidateOnFocus &&
                        i > t &&
                        O() &&
                        ((t = i + C().focusThrottleInterval), e());
                    } else if (i == eB.RECONNECT_EVENT)
                      C().revalidateOnReconnect && O() && e();
                    else if (i == eB.MUTATE_EVENT) return G();
                    else if (i == eB.ERROR_REVALIDATE_EVENT) return G(n);
                  });
                return (
                  (y.current = !1),
                  (P.current = k),
                  (b.current = !0),
                  j({ _k: v }),
                  $ && (em(D) || eN ? e() : eT(e)),
                  () => {
                    (y.current = !0), i();
                  }
                );
              }, [k]),
              ex(() => {
                let e;
                function t() {
                  let t = ek(u) ? u(z().data) : u;
                  t && -1 !== e && (e = setTimeout(i, t));
                }
                function i() {
                  !z().error && (d || C().isVisible()) && (c || C().isOnline())
                    ? G(e7).then(t)
                    : t();
                }
                return (
                  t(),
                  () => {
                    e && (clearTimeout(e), (e = -1));
                  }
                );
              }, [u, d, c, k]),
              (0, S.useDebugValue)(F),
              o && em(D) && k)
            ) {
              if (!eA && eN)
                throw Error(
                  "Fallback data is required when using suspense in SSR."
                );
              (w.current = t), (E.current = i), (y.current = !1);
              let e = m[k];
              if ((em(e) || e8(J(e)), em(V))) {
                let e = G(e7);
                em(F) || ((e.status = "fulfilled"), (e.value = !0)), e8(e);
              } else throw V;
            }
            return {
              mutate: J,
              get data() {
                return (L.data = !0), F;
              },
              get error() {
                return (L.error = !0), V;
              },
              get isValidating() {
                return (L.isValidating = !0), K;
              },
              get isLoading() {
                return (L.isLoading = !0), q;
              },
            };
          }),
          function (...e) {
            let t = e2(),
              [i, r, o] = e1(e),
              s = eZ(t, o),
              a = n,
              { use: l } = s,
              u = (l || []).concat(e6);
            for (let e = u.length; e--; ) a = u[e](a);
            return a(i, r || s.fetcher || null, s);
          }),
        tt = (e) => eW(e ? e(0, null) : null)[0],
        ti = Promise.resolve(),
        tn =
          ((r = (e) => (t, i, n) => {
            let r;
            let o = (0, S.useRef)(!1),
              {
                cache: s,
                initialSize: a = 1,
                revalidateAll: l = !1,
                persistSize: u = !1,
                revalidateFirstPage: d = !0,
                revalidateOnMount: c = !1,
                parallel: h = !1,
              } = n;
            try {
              (r = tt(t)) && (r = "$inf$" + r);
            } catch (e) {}
            let [p, g, f] = eU(s, r),
              m = (0, S.useCallback)(
                () => (em(p()._l) ? a : p()._l),
                [s, r, a]
              );
            (0, eh.useSyncExternalStore)(
              (0, S.useCallback)(
                (e) =>
                  r
                    ? f(r, () => {
                        e();
                      })
                    : () => {},
                [s, r]
              ),
              m,
              m
            );
            let k = (0, S.useCallback)(() => {
                let e = p()._l;
                return em(e) ? a : e;
              }, [r, a]),
              v = (0, S.useRef)(k());
            ex(() => {
              if (!o.current) {
                o.current = !0;
                return;
              }
              r && g({ _l: u ? v.current : k() });
            }, [r, s]);
            let b = c && !o.current,
              y = e(
                r,
                async (e) => {
                  let r = p()._i,
                    o = [],
                    a = k(),
                    [u] = eU(s, e),
                    c = u().data,
                    f = [],
                    m = null;
                  for (let e = 0; e < a; ++e) {
                    let [a, u] = eW(t(e, h ? null : m));
                    if (!a) break;
                    let [p, g] = eU(s, a),
                      k = p().data,
                      v =
                        l ||
                        r ||
                        em(k) ||
                        (d && !e && !em(c)) ||
                        b ||
                        (c && !em(c[e]) && !n.compare(c[e], k));
                    if (i && v) {
                      let t = async () => {
                        g({ data: (k = await i(u)), _k: u }), (o[e] = k);
                      };
                      h ? f.push(t) : await t();
                    } else o[e] = k;
                    h || (m = k);
                  }
                  return (
                    h && (await Promise.all(f.map((e) => e()))),
                    g({ _i: eg }),
                    o
                  );
                },
                n
              ),
              P = (0, S.useCallback)(
                function (e, t) {
                  let i = "boolean" == typeof t ? { revalidate: t } : t || {},
                    n = !1 !== i.revalidate;
                  return r
                    ? (n && (em(e) ? g({ _i: !0 }) : g({ _i: !1 })),
                      arguments.length
                        ? y.mutate(e, { ...i, revalidate: n })
                        : y.mutate())
                    : ti;
                },
                [r, s]
              ),
              w = (0, S.useCallback)(
                (e) => {
                  let i;
                  if (!r) return ti;
                  let [, n] = eU(s, r);
                  if (
                    (ek(e) ? (i = e(k())) : "number" == typeof e && (i = e),
                    "number" != typeof i)
                  )
                    return ti;
                  n({ _l: i }), (v.current = i);
                  let o = [],
                    [a] = eU(s, r),
                    l = null;
                  for (let e = 0; e < i; ++e) {
                    let [i] = eW(t(e, l)),
                      [n] = eU(s, i),
                      r = i ? n().data : eg;
                    if (em(r)) return P(a().data);
                    o.push(r), (l = r);
                  }
                  return P(o);
                },
                [r, s, P, k]
              );
            return {
              size: k(),
              setSize: w,
              mutate: P,
              get data() {
                return y.data;
              },
              get error() {
                return y.error;
              },
              get isValidating() {
                return y.isValidating;
              },
              get isLoading() {
                return y.isLoading;
              },
            };
          }),
          (...e) => {
            let [t, i, n] = e1(e),
              o = (n.use || []).concat(r);
            return te(t, i, { ...n, use: o });
          });
      function tr(e, t) {
        if (!e)
          throw "string" == typeof t
            ? Error(t)
            : Error(`${t.displayName} not found`);
      }
      var to = (e, t) => {
          let { assertCtxFn: i = tr } = t || {},
            n = S.createContext(void 0);
          return (
            (n.displayName = e),
            [
              n,
              () => {
                let t = S.useContext(n);
                return i(t, `${e} not found`), t.value;
              },
              () => {
                let e = S.useContext(n);
                return e ? e.value : {};
              },
            ]
          );
        },
        ts = {};
      ((e, t) => {
        for (var i in t) k(e, i, { get: t[i], enumerable: !0 });
      })(ts, {
        SWRConfig: () => e9,
        useSWR: () => te,
        useSWRInfinite: () => tn,
      }),
        P(ts, h, "default"),
        o && P(o, h, "default");
      var [ta, tl] = to("ClerkInstanceContext"),
        [tu, td] = to("UserContext"),
        [tc, th] = to("ClientContext"),
        [tp, tg] = to("SessionContext"),
        [tf, tm] = to("OrganizationContext"),
        tk = ({
          children: e,
          organization: t,
          lastOrganizationMember: i,
          lastOrganizationInvitation: n,
          swrConfig: r,
        }) =>
          S.createElement(
            e9,
            { value: r },
            S.createElement(
              tf.Provider,
              {
                value: {
                  value: {
                    organization: t,
                    lastOrganizationMember: i,
                    lastOrganizationInvitation: n,
                  },
                },
              },
              e
            )
          );
      function tv(e, t) {
        let i = new Set(Object.keys(t)),
          n = {};
        for (let t of Object.keys(e)) i.has(t) || (n[t] = e[t]);
        return n;
      }
      var tb = (e, t) => {
          let i = "boolean" == typeof e && e,
            n = (0, S.useRef)(
              i ? t.initialPage : e?.initialPage ?? t.initialPage
            ),
            r = (0, S.useRef)(i ? t.pageSize : e?.pageSize ?? t.pageSize),
            o = {};
          for (let n of Object.keys(t)) o[n] = i ? t[n] : e?.[n] ?? t[n];
          return { ...o, initialPage: n.current, pageSize: r.current };
        },
        ty = (e, t, i, n) => {
          let [r, o] = (0, S.useState)(e.initialPage ?? 1),
            s = (0, S.useRef)(e.initialPage ?? 1),
            a = (0, S.useRef)(e.pageSize ?? 10),
            l = i.enabled ?? !0,
            u = i.infinite ?? !1,
            d = i.keepPreviousData ?? !1,
            c = { ...n, ...e, initialPage: r, pageSize: a.current },
            {
              data: h,
              isValidating: p,
              isLoading: g,
              error: f,
              mutate: m,
            } = te(
              !u && t && l ? c : null,
              (e) => {
                let i = tv(e, n);
                return t?.(i);
              },
              { keepPreviousData: d }
            ),
            {
              data: k,
              isLoading: v,
              isValidating: b,
              error: y,
              size: P,
              setSize: w,
              mutate: E,
            } = tn(
              (t) =>
                u && l
                  ? {
                      ...e,
                      ...n,
                      initialPage: s.current + t,
                      pageSize: a.current,
                    }
                  : null,
              (e) => {
                let i = tv(e, n);
                return t?.(i);
              }
            ),
            C = (0, S.useMemo)(() => (u ? P : r), [u, P, r]),
            O = (0, S.useCallback)(
              (e) => {
                if (u) {
                  w(e);
                  return;
                }
                return o(e);
              },
              [w]
            ),
            z = (0, S.useMemo)(
              () => (u ? k?.map((e) => e?.data).flat() ?? [] : h?.data ?? []),
              [u, h, k]
            ),
            j = (0, S.useMemo)(
              () =>
                u ? k?.[k?.length - 1]?.total_count || 0 : h?.total_count ?? 0,
              [u, h, k]
            ),
            _ = u ? v : g,
            U = u ? b : p,
            L = !!(u ? y : f),
            M = (0, S.useCallback)(() => {
              O((e) => Math.max(0, e + 1));
            }, [O]),
            I = (0, S.useCallback)(() => {
              O((e) => Math.max(0, e - 1));
            }, [O]),
            R = (s.current - 1) * a.current,
            A = Math.ceil((j - R) / a.current),
            N = j - R * a.current > C * a.current,
            T = (C - 1) * a.current > R * a.current,
            x = u
              ? (e) => E(e, { revalidate: !1 })
              : (e) => m(e, { revalidate: !1 });
          return {
            data: z,
            count: j,
            isLoading: _,
            isFetching: U,
            isError: L,
            page: C,
            pageCount: A,
            fetchPage: O,
            fetchNext: M,
            fetchPrevious: I,
            hasNextPage: N,
            hasPreviousPage: T,
            revalidate: u ? () => E() : () => m(),
            setData: x,
          };
        },
        tP = {
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
        tS = (e) => {
          var t, i;
          let {
              invitationList: n,
              membershipList: r,
              domains: o,
              membershipRequests: s,
              memberships: a,
              invitations: l,
            } = e || {},
            {
              organization: u,
              lastOrganizationMember: d,
              lastOrganizationInvitation: c,
            } = tm(),
            h = tg(),
            p = tb(o, {
              initialPage: 1,
              pageSize: 10,
              keepPreviousData: !1,
              infinite: !1,
              enrollmentMode: void 0,
            }),
            g = tb(s, {
              initialPage: 1,
              pageSize: 10,
              status: "pending",
              keepPreviousData: !1,
              infinite: !1,
            }),
            f = tb(a, {
              initialPage: 1,
              pageSize: 10,
              role: void 0,
              keepPreviousData: !1,
              infinite: !1,
            }),
            m = tb(l, {
              initialPage: 1,
              pageSize: 10,
              status: ["pending"],
              keepPreviousData: !1,
              infinite: !1,
            }),
            k = tl(),
            v = !!(k.loaded && h && u),
            b =
              void 0 === o
                ? void 0
                : {
                    initialPage: p.initialPage,
                    pageSize: p.pageSize,
                    enrollmentMode: p.enrollmentMode,
                  },
            y =
              void 0 === s
                ? void 0
                : {
                    initialPage: g.initialPage,
                    pageSize: g.pageSize,
                    status: g.status,
                  },
            P =
              void 0 === a
                ? void 0
                : {
                    initialPage: f.initialPage,
                    pageSize: f.pageSize,
                    role: f.role,
                  },
            S =
              void 0 === l
                ? void 0
                : {
                    initialPage: m.initialPage,
                    pageSize: m.pageSize,
                    status: m.status,
                  },
            w = ty(
              { ...b },
              u?.getDomains,
              {
                keepPreviousData: p.keepPreviousData,
                infinite: p.infinite,
                enabled: !!b,
              },
              { type: "domains", organizationId: u?.id }
            ),
            E = ty(
              { ...y },
              u?.getMembershipRequests,
              {
                keepPreviousData: g.keepPreviousData,
                infinite: g.infinite,
                enabled: !!y,
              },
              { type: "membershipRequests", organizationId: u?.id }
            ),
            C = ty(
              { ...P, paginated: !0 },
              u?.getMemberships,
              {
                keepPreviousData: f.keepPreviousData,
                infinite: f.infinite,
                enabled: !!P,
              },
              { type: "members", organizationId: u?.id }
            ),
            O = ty(
              { ...S },
              u?.getInvitations,
              {
                keepPreviousData: m.keepPreviousData,
                infinite: m.infinite,
                enabled: !!S,
              },
              { type: "invitations", organizationId: u?.id }
            ),
            j = k.loaded
              ? () => k.organization?.getPendingInvitations(n)
              : () => [],
            _ = k.loaded ? () => k.organization?.getMemberships(r) : () => [];
          n &&
            z(
              "invitationList in useOrganization",
              "Use the `invitations` property and return value instead."
            );
          let {
            data: U,
            isValidating: L,
            mutate: M,
          } = te(v && n ? tw("invites", u, c, n) : null, j);
          r &&
            z(
              "membershipList in useOrganization",
              "Use the `memberships` property and return value instead."
            );
          let {
            data: I,
            isValidating: R,
            mutate: A,
          } = te(v && r ? tw("memberships", u, d, r) : null, _);
          return void 0 === u
            ? {
                isLoaded: !1,
                organization: void 0,
                invitationList: void 0,
                membershipList: void 0,
                membership: void 0,
                domains: tP,
                membershipRequests: tP,
                memberships: tP,
                invitations: tP,
              }
            : null === u
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
            : !k.loaded && u
            ? {
                isLoaded: !0,
                organization: u,
                invitationList: void 0,
                membershipList: void 0,
                membership: void 0,
                domains: tP,
                membershipRequests: tP,
                memberships: tP,
                invitations: tP,
              }
            : {
                isLoaded: !R && !L,
                organization: u,
                membershipList: I,
                membership:
                  ((t = h.user.organizationMemberships),
                  (i = u.id),
                  t.find((e) => e.organization.id === i)),
                invitationList: U,
                unstable__mutate: () => {
                  A(), M();
                },
                domains: w,
                membershipRequests: E,
                memberships: C,
                invitations: O,
              };
        };
      function tw(e, t, i, n) {
        return [e, t.id, i?.id, i?.updatedAt, n.offset, n.limit]
          .filter(Boolean)
          .join("-");
      }
      var tE = {
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
        tC = (e) => {
          let {
              userMemberships: t,
              userInvitations: i,
              userSuggestions: n,
            } = e || {},
            r = tb(t, {
              initialPage: 1,
              pageSize: 10,
              keepPreviousData: !1,
              infinite: !1,
            }),
            o = tb(i, {
              initialPage: 1,
              pageSize: 10,
              status: "pending",
              keepPreviousData: !1,
              infinite: !1,
            }),
            s = tb(n, {
              initialPage: 1,
              pageSize: 10,
              status: "pending",
              keepPreviousData: !1,
              infinite: !1,
            }),
            a = tl(),
            l = td(),
            u =
              void 0 === t
                ? void 0
                : { initialPage: r.initialPage, pageSize: r.pageSize },
            d =
              void 0 === i
                ? void 0
                : {
                    initialPage: o.initialPage,
                    pageSize: o.pageSize,
                    status: o.status,
                  },
            c =
              void 0 === n
                ? void 0
                : {
                    initialPage: s.initialPage,
                    pageSize: s.pageSize,
                    status: s.status,
                  },
            h = !!(a.loaded && l),
            p = ty(
              { ...u, paginated: !0 },
              l?.getOrganizationMemberships,
              {
                keepPreviousData: r.keepPreviousData,
                infinite: r.infinite,
                enabled: !!u,
              },
              { type: "userMemberships", userId: l?.id }
            ),
            g = ty(
              { ...d },
              l?.getOrganizationInvitations,
              {
                keepPreviousData: o.keepPreviousData,
                infinite: o.infinite,
                enabled: !!d,
              },
              { type: "userInvitations", userId: l?.id }
            ),
            f = ty(
              { ...c },
              l?.getOrganizationSuggestions,
              {
                keepPreviousData: s.keepPreviousData,
                infinite: s.infinite,
                enabled: !!c,
              },
              { type: "userSuggestions", userId: l?.id }
            );
          if (!h)
            return {
              isLoaded: !1,
              organizationList: void 0,
              createOrganization: void 0,
              setActive: void 0,
              userMemberships: tE,
              userInvitations: tE,
              userSuggestions: tE,
            };
          let m = {
            isLoaded: h,
            organizationList: l.organizationMemberships.map((e) => ({
              membership: e,
              organization: e.organization,
            })),
            setActive: a.setActive,
            createOrganization: a.createOrganization,
            userMemberships: p,
            userInvitations: g,
            userSuggestions: f,
          };
          return j(m, "organizationList", "Use `userMemberships` instead."), m;
        },
        tO = () => {
          z(
            "useOrganizations",
            "Use useOrganizationList, useOrganization, or useClerk instead."
          );
          let e = tl();
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
        };
      "undefined" != typeof window ? S.useLayoutEffect : S.useEffect;
      let [tz, tj] = to("AuthContext"),
        [t_, tU] = [ta, tl];
      function tL(e) {
        let { isomorphicClerkOptions: t, initialState: i, children: n } = e,
          { isomorphicClerk: r, loaded: o } = tM(t);
        t.frontendApi && z("frontendApi", "Use `publishableKey` instead.");
        let [s, a] = S.useState({
          client: r.client,
          session: r.session,
          user: r.user,
          organization: r.organization,
          lastOrganizationInvitation: null,
          lastOrganizationMember: null,
        });
        S.useEffect(() => r.addListener((e) => a({ ...e })), []);
        let l = eu(o, s, i),
          u = S.useMemo(() => ({ value: r }), [o]),
          d = S.useMemo(() => ({ value: s.client }), [s.client]),
          {
            sessionId: c,
            session: h,
            userId: p,
            user: g,
            orgId: f,
            actor: m,
            lastOrganizationInvitation: k,
            lastOrganizationMember: v,
            organization: b,
            orgRole: y,
            orgSlug: P,
            orgPermissions: w,
          } = l,
          E = S.useMemo(
            () => ({
              value: {
                sessionId: c,
                userId: p,
                actor: m,
                orgId: f,
                orgRole: y,
                orgSlug: P,
                orgPermissions: w,
              },
            }),
            [c, p, m, f, y, P]
          ),
          C = S.useMemo(() => ({ value: g }), [p, g]),
          O = S.useMemo(() => ({ value: h }), [c, h]),
          j = S.useMemo(
            () => ({
              value: {
                organization: b,
                lastOrganizationInvitation: k,
                lastOrganizationMember: v,
              },
            }),
            [f, b, k, v]
          );
        return S.createElement(
          t_.Provider,
          { value: u },
          S.createElement(
            tc.Provider,
            { value: d },
            S.createElement(
              tp.Provider,
              { value: O },
              S.createElement(
                tk,
                { ...j.value },
                S.createElement(
                  tz.Provider,
                  { value: E },
                  S.createElement(tu.Provider, { value: C }, n)
                )
              )
            )
          )
        );
      }
      let tM = (e) => {
          let [t, i] = S.useState(!1),
            n = S.useMemo(() => el.getOrCreateInstance(e), []);
          return (
            S.useEffect(() => {
              n.__unstable__updateProps({ appearance: e.appearance });
            }, [e.appearance]),
            S.useEffect(() => {
              n.__unstable__updateProps({ options: e });
            }, [e.localization]),
            S.useEffect(() => {
              n.addOnLoaded(() => i(!0));
            }, []),
            { isomorphicClerk: n, loaded: t }
          );
        },
        tI = Object.freeze({
          noGuarantees: Object.freeze({ guaranteedLoaded: !1 }),
          guaranteedLoaded: Object.freeze({ guaranteedLoaded: !0 }),
        }),
        tR = S.createContext(void 0);
      tR.displayName = "StructureContext";
      let tA = () => {
          let e = S.useContext(tR);
          return (
            !(function (e) {
              if (!e)
                throw Error(
                  "Clerk: You must wrap your application in a <ClerkProvider> component."
                );
            })(e),
            e
          );
        },
        tN = ({ children: e }) =>
          tA().guaranteedLoaded
            ? S.createElement(S.Fragment, null, e)
            : S.createElement(tR.Provider, { value: tI.guaranteedLoaded }, e);
      !(function (e) {
        K.setMessages(e).setPackageName(e);
      })({ packageName: "@clerk/clerk-react" });
      let tT = (function (e, t, i) {
        let n = e.displayName || e.name || t || "Component",
          r = (n) => (
            !(function (e, t, i = 1) {
              S.useEffect(() => {
                let n = q.get(e) || 0;
                if (n == i) throw Error(t);
                return (
                  q.set(e, n + 1),
                  () => {
                    q.set(e, (q.get(e) || 1) - 1);
                  }
                );
              }, []);
            })(t, i),
            S.createElement(e, { ...n })
          );
        return (r.displayName = `withMaxAllowedInstancesGuard(${n})`), r;
      })(
        function (e) {
          let { initialState: t, children: i, ...n } = e,
            { frontendApi: r = "", publishableKey: o = "", Clerk: s } = n;
          return (
            !s &&
              (o || r
                ? o && !m(o)
                  ? K.throwInvalidPublishableKeyError({ key: o })
                  : o ||
                    !r ||
                    (r || "").startsWith("clerk.") ||
                    K.throwInvalidFrontendApiError({ key: r })
                : K.throwMissingPublishableKeyError()),
            S.createElement(
              tR.Provider,
              { value: tI.noGuarantees },
              S.createElement(
                tL,
                { initialState: t, isomorphicClerkOptions: n },
                i
              )
            )
          );
        },
        "ClerkProvider",
        "Clerk: You've added multiple <ClerkProvider> components in your React component tree. Wrap your components in a single <ClerkProvider>."
      );
      tT.displayName = "ClerkProvider";
      var tx = (e) => {
        let t = (i) => {
          if (!i) return i;
          if (Array.isArray(i))
            return i.map((e) =>
              "object" == typeof e || Array.isArray(e) ? t(e) : e
            );
          let n = { ...i };
          for (let i of Object.keys(n)) {
            let r = e(i.toString());
            r !== i && ((n[r] = n[i]), delete n[i]),
              "object" == typeof n[r] && (n[r] = t(n[r]));
          }
          return n;
        };
        return t;
      };
      tx(function (e) {
        return e ? e.replace(/[A-Z]/g, (e) => `_${e.toLowerCase()}`) : "";
      }),
        tx(function (e) {
          return e
            ? e.replace(/([-_][a-z])/g, (e) =>
                e.toUpperCase().replace(/-|_/, "")
              )
            : "";
        }),
        Object.freeze({
          "image/png": "png",
          "image/jpeg": "jpg",
          "image/gif": "gif",
          "image/webp": "webp",
          "image/x-icon": "ico",
          "image/vnd.microsoft.icon": "ico",
        });
      var tD = (e) => {
          w() && console.error(e);
        },
        tV = i(54887);
      let tW = (e) => {
          let t = Array(e.length).fill(null),
            [i, n] = (0, S.useState)(t);
          return e.map((e, t) => ({
            id: e.id,
            mount: (e) => n((i) => i.map((i, n) => (n === t ? e : i))),
            unmount: () => n((e) => e.map((e, i) => (i === t ? null : e))),
            portal: () =>
              S.createElement(
                S.Fragment,
                null,
                i[t] ? (0, tV.createPortal)(e.component, i[t]) : null
              ),
          }));
        },
        tF = (e, t) => !!e && S.isValidElement(e) && e?.type === t,
        t$ = (e) =>
          tK({
            children: e,
            reorderItemsLabels: ["account", "security"],
            LinkComponent: t1,
            PageComponent: t0,
            componentName: "UserProfile",
          }),
        tB = (e) =>
          tK({
            children: e,
            reorderItemsLabels: ["members", "settings"],
            LinkComponent: t5,
            PageComponent: t6,
            componentName: "OrganizationProfile",
          }),
        tK = ({
          children: e,
          LinkComponent: t,
          PageComponent: i,
          reorderItemsLabels: n,
          componentName: r,
        }) => {
          let o = [];
          S.Children.forEach(e, (e) => {
            if (!tF(e, i) && !tF(e, t)) {
              e && tD(F(r));
              return;
            }
            let { props: s } = e,
              { children: a, label: l, url: u, labelIcon: d } = s;
            if (tF(e, i)) {
              if (tq(s, n)) o.push({ label: l });
              else if (tG(s))
                o.push({ label: l, labelIcon: d, children: a, url: u });
              else {
                tD($(r));
                return;
              }
            }
            if (tF(e, t)) {
              if (tJ(s)) o.push({ label: l, labelIcon: d, url: u });
              else {
                tD(B(r));
                return;
              }
            }
          });
          let s = [],
            a = [],
            l = [];
          o.forEach((e, t) => {
            if (tG(e)) {
              s.push({ component: e.children, id: t }),
                a.push({ component: e.labelIcon, id: t });
              return;
            }
            tJ(e) && l.push({ component: e.labelIcon, id: t });
          });
          let u = tW(s),
            d = tW(a),
            c = tW(l),
            h = [],
            p = [];
          return (
            o.forEach((e, t) => {
              if (tq(e, n)) {
                h.push({ label: e.label });
                return;
              }
              if (tG(e)) {
                let {
                    portal: i,
                    mount: n,
                    unmount: r,
                  } = u.find((e) => e.id === t),
                  {
                    portal: o,
                    mount: s,
                    unmount: a,
                  } = d.find((e) => e.id === t);
                h.push({
                  label: e.label,
                  url: e.url,
                  mount: n,
                  unmount: r,
                  mountIcon: s,
                  unmountIcon: a,
                }),
                  p.push(i),
                  p.push(o);
                return;
              }
              if (tJ(e)) {
                let {
                  portal: i,
                  mount: n,
                  unmount: r,
                } = c.find((e) => e.id === t);
                h.push({
                  label: e.label,
                  url: e.url,
                  mountIcon: n,
                  unmountIcon: r,
                }),
                  p.push(i);
                return;
              }
            }),
            { customPages: h, customPagesPortals: p }
          );
        },
        tq = (e, t) => {
          let { children: i, label: n, url: r, labelIcon: o } = e;
          return !i && !r && !o && t.some((e) => e === n);
        },
        tG = (e) => {
          let { children: t, label: i, url: n, labelIcon: r } = e;
          return !!t && !!n && !!r && !!i;
        },
        tJ = (e) => {
          let { children: t, label: i, url: n, labelIcon: r } = e;
          return !t && !!n && !!r && !!i;
        },
        tH = (e, t) => {
          (t = t || e.displayName || e.name || "Component"),
            (e.displayName = t);
          let i = (t) => {
            let i = tU();
            return i.loaded
              ? S.createElement(
                  tN,
                  null,
                  S.createElement(e, { ...t, clerk: i })
                )
              : null;
          };
          return (i.displayName = `withClerk(${t})`), i;
        },
        tY = ({ children: e }) => {
          let t = tU();
          if ("function" != typeof e) throw Error(D);
          return t.loaded ? S.createElement(tN, null, e(t)) : null;
        };
      class tZ extends S.PureComponent {
        constructor() {
          super(...arguments), (this.portalRef = S.createRef());
        }
        componentDidUpdate(e) {
          (e.props.appearance !== this.props.props.appearance ||
            e.props?.customPages?.length !==
              this.props.props?.customPages?.length) &&
            this.props.updateProps({
              node: this.portalRef.current,
              props: this.props.props,
            });
        }
        componentDidMount() {
          this.portalRef.current &&
            this.props.mount(this.portalRef.current, this.props.props);
        }
        componentWillUnmount() {
          this.portalRef.current && this.props.unmount(this.portalRef.current);
        }
        render() {
          return S.createElement(
            S.Fragment,
            null,
            S.createElement("div", { ref: this.portalRef }),
            this.props?.customPagesPortals?.map((e, t) =>
              S.createElement(e, { key: t })
            )
          );
        }
      }
      let tX = tH(
          ({ clerk: e, ...t }) =>
            S.createElement(tZ, {
              mount: e.mountSignIn,
              unmount: e.unmountSignIn,
              updateProps: e.__unstable__updateProps,
              props: t,
            }),
          "SignIn"
        ),
        tQ = tH(
          ({ clerk: e, ...t }) =>
            S.createElement(tZ, {
              mount: e.mountSignUp,
              unmount: e.unmountSignUp,
              updateProps: e.__unstable__updateProps,
              props: t,
            }),
          "SignUp"
        );
      function t0({ children: e }) {
        return (
          tD(
            "Clerk: <UserProfile.Page /> component needs to be a direct child of `<UserProfile />` or `<UserButton />`."
          ),
          S.createElement(S.Fragment, null, e)
        );
      }
      function t1({ children: e }) {
        return (
          tD(
            "Clerk: <UserProfile.Link /> component needs to be a direct child of `<UserProfile />` or `<UserButton />`."
          ),
          S.createElement(S.Fragment, null, e)
        );
      }
      let t2 = Object.assign(
          tH(({ clerk: e, ...t }) => {
            let { customPages: i, customPagesPortals: n } = t$(t.children);
            return S.createElement(tZ, {
              mount: e.mountUserProfile,
              unmount: e.unmountUserProfile,
              updateProps: e.__unstable__updateProps,
              props: { ...t, customPages: i },
              customPagesPortals: n,
            });
          }, "UserProfile"),
          { Page: t0, Link: t1 }
        ),
        t3 = Object.assign(
          tH(({ clerk: e, ...t }) => {
            let { customPages: i, customPagesPortals: n } = t$(t.children),
              r = Object.assign(t.userProfileProps || {}, { customPages: i });
            return S.createElement(tZ, {
              mount: e.mountUserButton,
              unmount: e.unmountUserButton,
              updateProps: e.__unstable__updateProps,
              props: { ...t, userProfileProps: r },
              customPagesPortals: n,
            });
          }, "UserButton"),
          { UserProfilePage: t0, UserProfileLink: t1 }
        );
      function t6({ children: e }) {
        return (
          tD(
            "Clerk: <OrganizationProfile.Page /> component needs to be a direct child of `<OrganizationProfile />` or `<OrganizationSwitcher />`."
          ),
          S.createElement(S.Fragment, null, e)
        );
      }
      function t5({ children: e }) {
        return (
          tD(
            "Clerk: <OrganizationProfile.Link /> component needs to be a direct child of `<OrganizationProfile />` or `<OrganizationSwitcher />`."
          ),
          S.createElement(S.Fragment, null, e)
        );
      }
      let t4 = Object.assign(
          tH(({ clerk: e, ...t }) => {
            let { customPages: i, customPagesPortals: n } = tB(t.children);
            return S.createElement(tZ, {
              mount: e.mountOrganizationProfile,
              unmount: e.unmountOrganizationProfile,
              updateProps: e.__unstable__updateProps,
              props: { ...t, customPages: i },
              customPagesPortals: n,
            });
          }, "OrganizationProfile"),
          { Page: t6, Link: t5 }
        ),
        t8 = tH(
          ({ clerk: e, ...t }) =>
            S.createElement(tZ, {
              mount: e.mountCreateOrganization,
              unmount: e.unmountCreateOrganization,
              updateProps: e.__unstable__updateProps,
              props: t,
            }),
          "CreateOrganization"
        ),
        t7 = Object.assign(
          tH(({ clerk: e, ...t }) => {
            let { customPages: i, customPagesPortals: n } = tB(t.children),
              r = Object.assign(t.organizationProfileProps || {}, {
                customPages: i,
              });
            return S.createElement(tZ, {
              mount: e.mountOrganizationSwitcher,
              unmount: e.unmountOrganizationSwitcher,
              updateProps: e.__unstable__updateProps,
              props: { ...t, organizationProfileProps: r },
              customPagesPortals: n,
            });
          }, "OrganizationSwitcher"),
          { OrganizationProfilePage: t6, OrganizationProfileLink: t5 }
        ),
        t9 = tH(
          ({ clerk: e, ...t }) =>
            S.createElement(tZ, {
              mount: e.mountOrganizationList,
              unmount: e.unmountOrganizationList,
              updateProps: e.__unstable__updateProps,
              props: t,
            }),
          "OrganizationList"
        ),
        ie = (e) =>
          new Promise((t) => {
            e.loaded && t(), e.addOnLoaded(t);
          }),
        it = (e) => async (t) =>
          (await ie(e), e.session) ? e.session.getToken(t) : null,
        ii =
          (e) =>
          async (...t) => (await ie(e), e.signOut(...t)),
        ir = () => {
          let {
              sessionId: e,
              userId: t,
              actor: i,
              orgId: n,
              orgRole: r,
              orgSlug: o,
              orgPermissions: s,
            } = tj(),
            a = tU(),
            l = (0, S.useCallback)(it(a), [a]),
            u = (0, S.useCallback)(ii(a), [a]),
            d = (0, S.useCallback)(
              (e) => {
                if (!e?.permission && !e?.role)
                  throw Error(
                    'Clerk: Missing parameters. `has` from `useAuth` requires a permission or role key to be passed. Example usage: `has({permission: "org:posts:edit"`'
                  );
                return (
                  !!n &&
                  !!t &&
                  !!r &&
                  !!s &&
                  (e.permission
                    ? s.includes(e.permission)
                    : !!e.role && r === e.role)
                );
              },
              [n, r, t, s]
            );
          if (void 0 === e && void 0 === t)
            return {
              isLoaded: !1,
              isSignedIn: void 0,
              sessionId: e,
              userId: t,
              actor: void 0,
              orgId: void 0,
              orgRole: void 0,
              orgSlug: void 0,
              has: void 0,
              signOut: u,
              getToken: l,
            };
          if (null === e && null === t)
            return {
              isLoaded: !0,
              isSignedIn: !1,
              sessionId: e,
              userId: t,
              actor: null,
              orgId: null,
              orgRole: null,
              orgSlug: null,
              has: () => !1,
              signOut: u,
              getToken: l,
            };
          if (e && t && n && r)
            return {
              isLoaded: !0,
              isSignedIn: !0,
              sessionId: e,
              userId: t,
              actor: i || null,
              orgId: n,
              orgRole: r,
              orgSlug: o || null,
              has: d,
              signOut: u,
              getToken: l,
            };
          if (e && t && !n)
            return {
              isLoaded: !0,
              isSignedIn: !0,
              sessionId: e,
              userId: t,
              actor: i || null,
              orgId: null,
              orgRole: null,
              orgSlug: null,
              has: () => !1,
              signOut: u,
              getToken: l,
            };
          throw Error(
            "Clerk: Invalid state. Feel free to submit a bug or reach out to support here: https://clerk.com/support"
          );
        },
        io = ({ children: e }) => {
          let { userId: t } = tj();
          return t ? S.createElement(S.Fragment, null, e) : null;
        },
        is = ({ children: e }) => {
          let { userId: t } = tj();
          return null === t ? S.createElement(S.Fragment, null, e) : null;
        },
        ia = ({ children: e }) =>
          tU().loaded ? S.createElement(tN, null, e) : null,
        il = ({ children: e }) =>
          tU().loaded ? null : S.createElement(S.Fragment, null, e),
        iu = ({ children: e, fallback: t, ...i }) => {
          let { isLoaded: n, has: r, userId: o } = ir();
          if (!n) return null;
          let s = S.createElement(S.Fragment, null, t ?? null),
            a = S.createElement(S.Fragment, null, e);
          return o
            ? "function" == typeof i.condition
              ? i.condition(r)
                ? a
                : s
              : i.role || i.permission
              ? r(i)
                ? a
                : s
              : a
            : s;
        },
        id = tH(({ clerk: e, ...t }) => {
          let { client: i, session: n } = e,
            { __unstable__environment: r } = e,
            o = i.activeSessions && i.activeSessions.length > 0;
          return (
            S.useEffect(() => {
              if (null === n && o && r) {
                let { afterSignOutOneUrl: t } = r.displayConfig;
                e.navigate(t);
              } else e.redirectToSignIn(t);
            }, []),
            null
          );
        }, "RedirectToSignIn"),
        ic = tH(
          ({ clerk: e, ...t }) => (
            S.useEffect(() => {
              e.redirectToSignUp(t);
            }, []),
            null
          ),
          "RedirectToSignUp"
        ),
        ih = tH(
          ({ clerk: e }) => (
            S.useEffect(() => {
              e.redirectToUserProfile();
            }, []),
            null
          ),
          "RedirectToUserProfile"
        ),
        ip = tH(
          ({ clerk: e }) => (
            S.useEffect(() => {
              e.redirectToOrganizationProfile();
            }, []),
            null
          ),
          "RedirectToOrganizationProfile"
        ),
        ig = tH(
          ({ clerk: e }) => (
            S.useEffect(() => {
              e.redirectToCreateOrganization();
            }, []),
            null
          ),
          "RedirectToCreateOrganization"
        ),
        im = tH(
          ({ clerk: e, ...t }) => (
            S.useEffect(() => {
              e.handleRedirectCallback(t);
            }, []),
            null
          ),
          "AuthenticateWithRedirectCallback"
        ),
        ik = ({ children: e }) => {
          let t = tg();
          return S.createElement(S.Fragment, { key: t ? t.id : "no-users" }, e);
        },
        iv = (e, t) => {
          (t = t || e.displayName || e.name || "Component"),
            (e.displayName = t);
          let i = (t) => {
            let i = td();
            return i ? S.createElement(e, { ...t, user: i }) : null;
          };
          return (i.displayName = `withUser(${t})`), i;
        },
        ib = ({ children: e }) => {
          let t = td();
          if ("function" != typeof e) throw Error(D);
          return t ? S.createElement(S.Fragment, null, e(t)) : null;
        },
        iy = (e, t) => {
          (t = t || e.displayName || e.name || "Component"),
            (e.displayName = t);
          let i = (t) => {
            let i = tg();
            return i ? S.createElement(e, { ...t, session: i }) : null;
          };
          return (i.displayName = `withSession(${t})`), i;
        },
        iP = ({ children: e }) => {
          let t = tg();
          if ("function" != typeof e) throw Error(D);
          return t ? S.createElement(S.Fragment, null, e(t)) : null;
        },
        iS = (e) => (t) => {
          try {
            return S.Children.only(e);
          } catch (e) {
            throw Error(V(t));
          }
        },
        iw = (e, t) => (
          e || (e = t),
          "string" == typeof e && (e = S.createElement("button", null, e)),
          e
        ),
        iE =
          (e) =>
          (...t) => {
            if (e && "function" == typeof e) return e(...t);
          },
        iC = tH(({ clerk: e, children: t, ...i }) => {
          let {
              afterSignInUrl: n,
              afterSignUpUrl: r,
              redirectUrl: o,
              mode: s,
              ...a
            } = i,
            l = iS((t = iw(t, "Sign in")))("SignInButton"),
            u = () => {
              let t = { afterSignInUrl: n, afterSignUpUrl: r, redirectUrl: o };
              return "modal" === s ? e.openSignIn(t) : e.redirectToSignIn(t);
            },
            d = async (e) => (await iE(l.props.onClick)(e), u()),
            c = { ...a, onClick: d };
          return S.cloneElement(l, c);
        }, "SignInButton"),
        iO = tH(({ clerk: e, children: t, ...i }) => {
          let {
              afterSignInUrl: n,
              afterSignUpUrl: r,
              redirectUrl: o,
              mode: s,
              unsafeMetadata: a,
              ...l
            } = i,
            u = iS((t = iw(t, "Sign up")))("SignUpButton"),
            d = () => {
              let t = {
                afterSignInUrl: n,
                afterSignUpUrl: r,
                redirectUrl: o,
                unsafeMetadata: a,
              };
              return "modal" === s ? e.openSignUp(t) : e.redirectToSignUp(t);
            },
            c = async (e) => (await iE(u.props.onClick)(e), d()),
            h = { ...l, onClick: c };
          return S.cloneElement(u, h);
        }, "SignUpButton"),
        iz = tH(({ clerk: e, children: t, ...i }) => {
          let { signOutCallback: n, signOutOptions: r, ...o } = i,
            s = iS((t = iw(t, "Sign out")))("SignOutButton"),
            a = () => e.signOut(n, r),
            l = async (e) => (await iE(s.props.onClick)(e), a()),
            u = { ...o, onClick: l };
          return S.cloneElement(s, u);
        }, "SignOutButton"),
        ij = tH(({ clerk: e, children: t, ...i }) => {
          let { redirectUrl: n, ...r } = i,
            o = iS((t = iw(t, "Sign in with Metamask")))(
              "SignInWithMetamaskButton"
            ),
            s = async () => {
              !(async function () {
                await e.authenticateWithMetamask({ redirectUrl: n });
              })();
            },
            a = async (e) => (await iE(o.props.onClick)(e), s()),
            l = { ...r, onClick: a };
          return S.cloneElement(o, l);
        }, "SignInWithMetamask");
      function i_() {
        let e = td();
        return void 0 === e
          ? { isLoaded: !1, isSignedIn: void 0, user: void 0 }
          : null === e
          ? { isLoaded: !0, isSignedIn: !1, user: null }
          : { isLoaded: !0, isSignedIn: !0, user: e };
      }
      let iU = () => {
          let e = tg();
          return void 0 === e
            ? { isLoaded: !1, isSignedIn: void 0, session: void 0 }
            : null === e
            ? { isLoaded: !0, isSignedIn: !1, session: null }
            : { isLoaded: !0, isSignedIn: !0, session: e };
        },
        iL = () => tU(),
        iM = () => {
          let e = tU(),
            t = th();
          return t
            ? {
                isLoaded: !0,
                signIn: t.signIn,
                setSession: e.setSession,
                setActive: e.setActive,
              }
            : {
                isLoaded: !1,
                signIn: void 0,
                setSession: void 0,
                setActive: void 0,
              };
        },
        iI = () => {
          let e = tU(),
            t = th();
          return t
            ? {
                isLoaded: !0,
                signUp: t.signUp,
                setSession: e.setSession,
                setActive: e.setActive,
              }
            : {
                isLoaded: !1,
                signUp: void 0,
                setSession: void 0,
                setActive: void 0,
              };
        },
        iR = () => {
          let e = tU(),
            t = th();
          return t
            ? {
                isLoaded: !0,
                sessions: t.sessions,
                setSession: e.setSession,
                setActive: e.setActive,
              }
            : {
                isLoaded: !1,
                sessions: void 0,
                setSession: void 0,
                setActive: void 0,
              };
        };
      function iA(e) {
        z("useMagicLink", "Use `useEmailLink` instead.");
        let { startMagicLinkFlow: t, cancelMagicLinkFlow: i } = S.useMemo(
          () => e.createMagicLinkFlow(),
          [e]
        );
        return (
          S.useEffect(() => i, []),
          { startMagicLinkFlow: t, cancelMagicLinkFlow: i }
        );
      }
      function iN(e) {
        let { startEmailLinkFlow: t, cancelEmailLinkFlow: i } = S.useMemo(
          () => e.createEmailLinkFlow(),
          [e]
        );
        return (
          S.useEffect(() => i, []),
          { startEmailLinkFlow: t, cancelEmailLinkFlow: i }
        );
      }
    },
    46673: function (e, t, i) {
      "undefined" == typeof window ||
        window.global ||
        (window.global = void 0 === i.g ? window : i.g);
    },
    81853: function (e, t, i) {
      "use strict";
      /**
       * @license React
       * use-sync-external-store-shim.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var n = i(2265),
        r =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        o = n.useState,
        s = n.useEffect,
        a = n.useLayoutEffect,
        l = n.useDebugValue;
      function u(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var i = t();
          return !r(e, i);
        } catch (e) {
          return !0;
        }
      }
      var d =
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (e, t) {
              return t();
            }
          : function (e, t) {
              var i = t(),
                n = o({ inst: { value: i, getSnapshot: t } }),
                r = n[0].inst,
                d = n[1];
              return (
                a(
                  function () {
                    (r.value = i), (r.getSnapshot = t), u(r) && d({ inst: r });
                  },
                  [e, i, t]
                ),
                s(
                  function () {
                    return (
                      u(r) && d({ inst: r }),
                      e(function () {
                        u(r) && d({ inst: r });
                      })
                    );
                  },
                  [e]
                ),
                l(i),
                i
              );
            };
      t.useSyncExternalStore =
        void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : d;
    },
    26272: function (e, t, i) {
      "use strict";
      e.exports = i(81853);
    },
  },
]);
