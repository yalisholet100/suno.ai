"use strict";
(globalThis.webpackChunk_clerk_clerk_js =
  globalThis.webpackChunk_clerk_clerk_js || []).push([
  [700],
  {
    2362: function (e, t, r) {
      r.d(t, {
        B: function () {
          return l;
        },
        o: function () {
          return s;
        },
      });
      var n = r(2903),
        o = r(3476),
        i = r(8690),
        a = r(4804);
      const s = (e) => {
          var t;
          const { id: r, ...a } = e;
          return (0, n.tZ)(i.ArrowBlockButton, {
            variant: "ghost",
            elementDescriptor: o.descriptors.profileSectionPrimaryButton,
            elementId:
              null === (t = o.descriptors.profileSectionPrimaryButton) ||
              void 0 === t
                ? void 0
                : t.setId(r),
            ...a,
          });
        },
        l = (e) => {
          const { leftIcon: t, ...r } = e;
          return (0, n.tZ)(s, {
            colorScheme: "primary",
            ...r,
            sx: (e) => ({ justifyContent: "flex-start", gap: e.space.$2 }),
            leftIcon: (0, n.tZ)(o.Icon, {
              icon: t || a.v3,
              sx: (e) => ({ width: e.sizes.$2x5, height: e.sizes.$2x5 }),
            }),
            children: e.children,
          });
        };
    },
    3185: function (e, t, r) {
      r.d(t, {
        O: function () {
          return s;
        },
      });
      var n = r(2903),
        o = r(3476),
        i = r(8690),
        a = r(1609);
      const s = (0, i.withCardStateProvider)(({ mount: e, unmount: t }) => {
        const r = (0, i.useCardState)();
        return (0, n.BX)(o.Col, {
          elementDescriptor: o.descriptors.page,
          gap: 8,
          children: [
            (0, n.tZ)(i.CardAlert, { children: r.error }),
            (0, n.tZ)(i.NavbarMenuButtonRow, {}),
            (0, n.tZ)(o.Col, {
              elementDescriptor: o.descriptors.profilePage,
              gap: 8,
              children: (0, n.tZ)(a.qT, { mount: e, unmount: t }),
            }),
          ],
        });
      });
    },
    3936: function (e, t, r) {
      r.d(t, {
        $: function () {
          return u;
        },
        J: function () {
          return c;
        },
      });
      var n = r(2903),
        o = r(8690),
        i = r(4334),
        a = r(6043);
      const s = {
          verified: {
            title: (0, i.u1)("signIn.emailLink.verified.title"),
            subtitle: (0, i.u1)("signIn.emailLink.verified.subtitle"),
          },
          verified_switch_tab: {
            title: (0, i.u1)("signIn.emailLink.verified.title"),
            subtitle: (0, i.u1)("signIn.emailLink.verifiedSwitchTab.subtitle"),
          },
          loading: {
            title: (0, i.u1)("signIn.emailLink.loading.title"),
            subtitle: (0, i.u1)("signIn.emailLink.loading.subtitle"),
          },
          failed: {
            title: (0, i.u1)("signIn.emailLink.failed.title"),
            subtitle: (0, i.u1)("signIn.emailLink.failed.subtitle"),
          },
          expired: {
            title: (0, i.u1)("signIn.emailLink.expired.title"),
            subtitle: (0, i.u1)("signIn.emailLink.expired.subtitle"),
          },
        },
        l = {
          ...s,
          verified: {
            ...s.verified,
            title: (0, i.u1)("signUp.emailLink.verified.title"),
          },
          verified_switch_tab: {
            ...s.verified_switch_tab,
            title: (0, i.u1)("signUp.emailLink.verified.title"),
          },
          loading: {
            ...s.loading,
            title: (0, i.u1)("signUp.emailLink.loading.title"),
          },
        },
        c = (0, o.withCardStateProvider)((e) =>
          (0, n.tZ)(a.$, { ...e, texts: s })
        ),
        u = (0, o.withCardStateProvider)((e) =>
          (0, n.tZ)(a.$, { ...e, texts: l })
        );
    },
    6970: function (e, t, r) {
      r.d(t, {
        E: function () {
          return d;
        },
      });
      var n = r(2903),
        o = (r(2784), r(3476)),
        i = r(8690),
        a = r(7158),
        s = r(4804),
        l = r(9820);
      const c = {
          verified: s.qy,
          verified_switch_tab: s.oX,
          expired: s.SV,
          failed: s.SV,
        },
        u = (e, t) =>
          ({
            verified: e.colors.$success500,
            verified_switch_tab: e.colors.$primary500,
            expired: e.colors.$warning500,
            failed: e.colors.$danger500,
          }[t]),
        d = (e) => {
          const t = (0, a.v)();
          return (0, n.tZ)(o.Flow.Part, {
            part: "emailLinkStatus",
            children: (0, n.BX)(i.Card, {
              children: [
                (0, n.tZ)(i.CardAlert, { children: t.error }),
                (0, n.BX)(i.Header.Root, {
                  children: [
                    (0, n.tZ)(i.Header.Title, { localizationKey: e.title }),
                    (0, n.tZ)(i.Header.Subtitle, {
                      localizationKey: e.subtitle,
                    }),
                  ],
                }),
                (0, n.tZ)(o.Col, {
                  elementDescriptor: o.descriptors.main,
                  children: (0, n.tZ)(p, { status: e.status }),
                }),
              ],
            }),
          });
        },
        p = (e) =>
          (0, n.tZ)(o.Flex, {
            elementDescriptor: o.descriptors.verificationLinkStatusBox,
            center: !0,
            direction: "col",
            gap: 8,
            children:
              "loading" === e.status
                ? (0, n.tZ)(o.Spinner, {
                    size: "xl",
                    colorScheme: "primary",
                    sx: (e) => ({ margin: `${e.space.$12} 0` }),
                  })
                : (0, n.BX)(n.HY, {
                    children: [
                      (0, n.tZ)(m, { status: e.status }),
                      (0, n.tZ)(o.Text, {
                        elementDescriptor:
                          o.descriptors.verificationLinkStatusText,
                        variant: "regularRegular",
                        colorScheme: "neutral",
                        localizationKey: (0, o.localizationKeys)(
                          "signIn.emailLink.unusedTab.title"
                        ),
                      }),
                    ],
                  }),
          }),
        m = (e) => {
          const { status: t } = e;
          return (0, n.tZ)(o.Flex, {
            elementDescriptor: o.descriptors.verificationLinkStatusIconBox,
            center: !0,
            sx: (e) => ({
              width: e.sizes.$24,
              height: e.sizes.$24,
              borderRadius: e.radii.$circle,
              backgroundColor: e.colors.$blackAlpha100,
              color: u(e, t),
              animation: `${l.animations.dropdownSlideInScaleAndFade} 500ms ease`,
            }),
            children: (0, n.tZ)(o.Icon, {
              elementDescriptor: o.descriptors.verificationLinkStatusIcon,
              icon: c[t],
              sx: (e) => ({ height: e.sizes.$6, width: e.sizes.$5 }),
            }),
          });
        };
    },
    6043: function (e, t, r) {
      r.d(t, {
        $: function () {
          return d;
        },
      });
      var n = r(2903),
        o = r(221),
        i = r(2784),
        a = r(8173),
        s = r(3736),
        l = r(1609),
        c = r(6678),
        u = r(6970);
      const d = (e) => {
        var t, r;
        const {
            redirectUrl: d,
            redirectUrlComplete: p,
            verifyEmailPath: m,
            verifyPhonePath: f,
          } = e,
          { handleEmailLinkVerification: h } = (0, a.useCoreClerk)(),
          { navigate: g } = (0, s.useRouter)(),
          v = (0, a.useCoreSignUp)(),
          [b, y] = i.useState("loading");
        return (
          i.useEffect(() => {
            (async () => {
              try {
                return (
                  await (0, l._v)(750),
                  await h({ redirectUrlComplete: p, redirectUrl: d }, g),
                  y("verified_switch_tab"),
                  await (0, l._v)(750),
                  (0, c.v)({
                    signUp: v,
                    verifyEmailPath: m,
                    verifyPhonePath: f,
                    navigate: g,
                  })
                );
              } catch (e) {
                let t = "failed";
                (0, o.G1)(e) && e.code === o._L.Expired && (t = "expired"),
                  y(t);
              }
            })();
          }, []),
          (0, n.tZ)(u.E, {
            title:
              (null === (t = e.texts[b]) || void 0 === t ? void 0 : t.title) ||
              "",
            subtitle:
              (null === (r = e.texts[b]) || void 0 === r
                ? void 0
                : r.subtitle) || "",
            status: b,
          })
        );
      };
    },
    9813: function (e, t, r) {
      r.d(t, {
        Cc: function () {
          return l;
        },
        DD: function () {
          return s;
        },
        rh: function () {
          return c;
        },
      });
      var n = r(2903),
        o = r(2784),
        i = r(8173),
        a = r(3736);
      const s = (e) => {
          const { checkAuthorization: t, id: r } = (0, i.useCoreSession)();
          return r
            ? "function" == typeof e
              ? e(t)
                ? { isAuthorizedUser: !0 }
                : { isAuthorizedUser: !1 }
              : { isAuthorizedUser: t(e) }
            : { isAuthorizedUser: !1 };
        },
        l = (e) => {
          const { children: t, fallback: r, redirectTo: i, ...l } = e,
            { isAuthorizedUser: c } = s(
              "function" == typeof l.condition ? l.condition : l
            ),
            { navigate: u } = (0, a.useRouter)();
          return (
            (0, o.useEffect)(() => {
              "boolean" == typeof c && !c && i && u(i);
            }, [c, i]),
            "boolean" == typeof c && !c && r
              ? (0, n.tZ)(n.HY, { children: r })
              : c
              ? (0, n.tZ)(n.HY, { children: t })
              : null
          );
        };
      function c(e, t) {
        const r = e.displayName || e.name || "Component",
          o = (r) => (0, n.tZ)(l, { ...t, children: (0, n.tZ)(e, { ...r }) });
        return (o.displayName = `withGate(${r})`), o;
      }
    },
    172: function (e, t, r) {
      r.d(t, {
        WY: function () {
          return l;
        },
        kJ: function () {
          return s;
        },
        vO: function () {
          return a;
        },
        vX: function () {
          return i;
        },
      }),
        r(5900);
      var n = r(8515);
      const o = Object.freeze({
          email_address_username: {
            label: (0, n.u)("formFieldLabel__emailAddress_username"),
            placeholder: (0, n.u)(
              "formFieldInputPlaceholder__emailAddress_username"
            ),
            type: "text",
            action: (0, n.u)("signIn.start.actionLink__use_email_username"),
          },
          email_address: {
            label: (0, n.u)("formFieldLabel__emailAddress"),
            placeholder: (0, n.u)("formFieldInputPlaceholder__emailAddress"),
            type: "email",
            action: (0, n.u)("signIn.start.actionLink__use_email"),
          },
          phone_number: {
            label: (0, n.u)("formFieldLabel__phoneNumber"),
            placeholder: (0, n.u)("formFieldInputPlaceholder__phoneNumber"),
            type: "tel",
            action: (0, n.u)("signIn.start.actionLink__use_phone"),
          },
          username: {
            label: (0, n.u)("formFieldLabel__username"),
            placeholder: (0, n.u)("formFieldInputPlaceholder__username"),
            type: "text",
            action: (0, n.u)("signIn.start.actionLink__use_username"),
          },
          default: { label: "", placeholder: "", type: "text", action: "" },
        }),
        i = (e) => {
          let t = [...e];
          return (
            ["email_address", "username"].every((e) => t.includes(e)) &&
              ((t = t.filter(
                (e) => !["email_address", "username"].includes(e)
              )),
              t.unshift("email_address_username")),
            t
          );
        },
        a = (e, t) => {
          const r = e.indexOf(t);
          return -1 === r
            ? { currentIdentifier: { ...o.default }, nextIdentifier: void 0 }
            : {
                currentIdentifier: { ...o[t] },
                nextIdentifier:
                  e.length > 1 ? { ...o[e[(r + 1) % e.length]] } : void 0,
              };
        },
        s = Object.freeze({ Password: "password", OTP: "otp" });
      function l(e) {
        return `https://img.clerk.com/static/${e}.svg`;
      }
      Object.freeze({ metamask: { id: "metamask", name: "MetaMask" } });
    },
    5480: function (e, t, r) {
      r.d(t, {
        Br: function () {
          return n.B;
        },
        of: function () {
          return n.o;
        },
        aX: function () {
          return s;
        },
        Ej: function () {
          return C.E;
        },
        Cc: function () {
          return c.Cc;
        },
        q7: function () {
          return u;
        },
        dN: function () {
          return z;
        },
        o4: function () {
          return B;
        },
        s_: function () {
          return E;
        },
        hH: function () {
          return P;
        },
        L: function () {
          return S;
        },
        en: function () {
          return k;
        },
        wT: function () {
          return d.w;
        },
        vO: function () {
          return o.vO;
        },
        vX: function () {
          return o.vX;
        },
        DD: function () {
          return c.DD;
        },
        Qz: function () {
          return I;
        },
        a2: function () {
          return $;
        },
        rh: function () {
          return c.rh;
        },
        pK: function () {
          return D;
        },
        Q6: function () {
          return x;
        },
        P5: function () {
          return b;
        },
        ZP: function () {
          return y;
        },
      });
      var n = r(2362),
        o = r(172),
        i = r(2903),
        a = r(3476);
      const s = (e) => {
        const { icon: t, text: r, textSx: n, actionLabel: o, onClick: s } = e;
        return (0, i.tZ)(a.Flex, {
          sx: (e) => ({
            background: e.colors.$blackAlpha50,
            padding: `${e.space.$2x5} ${e.space.$4}`,
            justifyContent: "space-between",
            alignItems: "flex-start",
            borderRadius: e.radii.$md,
          }),
          children: (0, i.BX)(a.Flex, {
            gap: 2,
            children: [
              (0, i.tZ)(a.Icon, {
                colorScheme: "neutral",
                icon: t,
                sx: (e) => ({ marginTop: e.space.$1 }),
              }),
              (0, i.BX)(a.Col, {
                gap: 4,
                children: [
                  (0, i.tZ)(a.Text, {
                    colorScheme: "neutral",
                    sx: [(e) => ({ lineHeight: e.lineHeights.$base }), n],
                    localizationKey: r,
                    children: e.children,
                  }),
                  o &&
                    (0, i.tZ)(a.Link, {
                      colorScheme: "primary",
                      variant: "regularMedium",
                      localizationKey: o,
                      onClick: (e) => {
                        null == s || s(e);
                      },
                    }),
                ],
              }),
            ],
          }),
        });
      };
      var l = r(2784),
        c = r(9813);
      const u = (0, l.forwardRef)((e, t) =>
        (0, i.tZ)(a.Box, {
          ref: t,
          sx: (e) => ({
            width: "100%",
            height: e.space.$12,
            position: "relative",
          }),
          children: (0, i.tZ)(a.Box, {
            sx: {
              margin: "auto",
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translateY(-50%) translateX(-50%)",
            },
            children: (0, i.tZ)(a.Spinner, {
              size: "sm",
              colorScheme: "primary",
            }),
          }),
        })
      );
      var d = r(6874),
        p = r(1609),
        m = r(4850),
        f = r(996),
        h = r(8173),
        g = r(3736);
      function v(e, t, r) {
        const n = e.displayName || e.name || "Component";
        e.displayName = n;
        const o = (n) => {
          const { navigate: o } = (0, g.useRouter)(),
            a = (0, h.useCoreClerk)(),
            s = (0, h.useEnvironment)(),
            c = (0, h.useOptions)(),
            u = t(a, s, c);
          return (
            l.useEffect(() => {
              u &&
                (r &&
                  "development" === s.displayConfig.instanceEnvironmentType &&
                  console.info(r),
                o(s.displayConfig.homeUrl));
            }, []),
            u ? null : (0, i.tZ)(e, { ...n })
          );
        };
        return (o.displayName = `withRedirectToHome(${n})`), o;
      }
      const b = (e) => v(e, f.So, m.q.cannotRenderComponentWhenSessionExists),
        y = (e) => v(e, f.f, m.q.cannotRenderComponentWhenUserDoesNotExist),
        x = (e) => v(e, f.n$, m.q.cannotRenderComponentWhenOrgDoesNotExist);
      var w = r(8690);
      const S = (0, w.withCardStateProvider)((e) =>
          (0, i.tZ)(a.Flow.Part, {
            part: "ssoCallback",
            children: (0, i.tZ)(_, { ...e }),
          })
        ),
        _ = (e) => {
          const { handleRedirectCallback: t } = (0, h.useCoreClerk)(),
            { navigate: r } = (0, g.useRouter)(),
            n = (0, w.useCardState)();
          return (
            l.useEffect(() => {
              let o;
              return (
                t({ ...e }, r).catch((e) => {
                  (0, p.S3)(e, [], n.setError),
                    (o = setTimeout(() => {
                      r("../");
                    }, 4e3));
                }),
                () => clearTimeout(o)
              );
            }, [p.S3, t]),
            (0, i.tZ)(a.Flow.Part, {
              part: "ssoCallback",
              children: (0, i.BX)(w.Card, {
                children: [
                  (0, i.tZ)(w.CardAlert, { children: n.error }),
                  (0, i.tZ)(w.LoadingCardContainer, {}),
                ],
              }),
            })
          );
        };
      r(6043);
      var C = r(6970);
      const $ = (e = {}) => {
          const { defaultStep: t = 0, onNextStep: r } = e,
            [n, o] = l.useState(t);
          return {
            nextStep: l.useCallback(() => {
              null == r || r(), o((e) => e + 1);
            }, []),
            prevStep: l.useCallback(() => o((e) => e - 1), []),
            goToStep: l.useCallback((e) => o(e), []),
            props: { step: n },
          };
        },
        k = (e) => {
          const { step: t, children: r } = e;
          return (0, i.tZ)(i.HY, { children: l.Children.toArray(r)[t] });
        },
        P = (0, w.withCardStateProvider)((e) => {
          const {
              title: t,
              messageLine1: r,
              messageLine2: n,
              breadcrumbTitle: o,
              successMessage: s,
              deleteResource: l,
            } = e,
            c = $(),
            u = (0, w.useCardState)();
          return (0, i.BX)(k, {
            ...c.props,
            children: [
              (0, i.tZ)(w.ContentPage, {
                headerTitle: t,
                breadcrumbTitle: o,
                Breadcrumbs: e.Breadcrumbs,
                children: (0, i.BX)(w.Form.Root, {
                  onSubmit: async () => {
                    try {
                      await l().then(() => c.nextStep());
                    } catch (e) {
                      (0, p.S3)(e, [], u.setError);
                    }
                  },
                  children: [
                    (0, i.tZ)(a.Text, {
                      localizationKey: r,
                      variant: "regularRegular",
                    }),
                    (0, i.tZ)(a.Text, {
                      localizationKey: n,
                      variant: "regularRegular",
                    }),
                    (0, i.tZ)(w.FormButtons, { colorScheme: "danger" }),
                  ],
                }),
              }),
              (0, i.tZ)(w.SuccessPage, {
                title: t,
                text: s,
                Breadcrumbs: e.Breadcrumbs,
              }),
            ],
          });
        }),
        I = () => {
          const e = [];
          return {
            print: () => e.forEach((e) => e()),
            printableProps: { onPrint: (t) => e.push(t) },
          };
        },
        B = (e) => {
          const { children: t, onPrint: r } = e,
            n = l.useRef(null);
          return (
            r(() => {
              R(n);
            }),
            (0, i.tZ)("div", {
              ref: n,
              style: {
                position: "fixed",
                left: "-9999px",
                top: 0,
                display: "none",
              },
              children: t,
            })
          );
        },
        R = (e) => {
          const t = e.current;
          if (!t) return;
          const r = document.createElement("iframe");
          (r.style.position = "fixed"),
            (r.style.right = "-2000px"),
            (r.style.bottom = "-2000px"),
            (r.onload = () => {
              var e;
              ((e, t = "[data-emotion=cl-internal]") => {
                if (!e.contentDocument) return;
                const r = [...document.head.querySelectorAll(t)]
                    .map((e) => e.innerHTML)
                    .join("\n"),
                  n = e.contentDocument.createElement("style");
                (n.innerHTML = r), e.contentDocument.head.prepend(n);
              })(r),
                (e = r).contentDocument &&
                  ((e.contentDocument.body.style.fontFamily = "Arial"),
                  (e.contentDocument.body.style.cssText =
                    "* {\n-webkit-print-color-adjust: exact !important;\ncolor-adjust: exact !important;\nprint-color-adjust: exact !important;\n}")),
                r.contentDocument &&
                  r.contentWindow &&
                  ((r.contentDocument.body.innerHTML = t.innerHTML),
                  r.contentWindow.print());
            }),
            window.document.body.appendChild(r);
        };
      var T = r(8441),
        A = r(9820);
      const z = ({ notificationCount: e, containerSx: t }) => {
        const r = (0, T.Tb)(),
          n = (0, T.dB)(e > 0, 350) || !1;
        return (0, i.tZ)(a.Box, {
          sx: [
            (e) => ({
              position: "relative",
              width: e.sizes.$4,
              height: e.sizes.$4,
            }),
            t,
          ],
          children:
            n &&
            (0, i.tZ)(a.NotificationBadge, {
              sx: (t) => ({
                animation: r
                  ? "none"
                  : `${
                      e
                        ? A.animations.notificationAnimation
                        : A.animations.outAnimation
                    } ${t.transitionDuration.$textField} ${
                      t.transitionTiming.$slowBezier
                    } 0s 1 normal forwards`,
              }),
              children: e,
            }),
        });
      };
      function D(e, t, r) {
        const n = (t) => {
          const { navigate: n } = (0, g.useRouter)(),
            { organizationSettings: o, displayConfig: a } = (0,
            h.useEnvironment)();
          return (
            l.useEffect(() => {
              "redirect" !== r.mode || o.enabled || n(a.homeUrl);
            }, []),
            "hide" !== r.mode || o.enabled ? (0, i.tZ)(e, { ...t }) : null
          );
        };
        return (n.displayName = t), n;
      }
      var O = r(9782);
      const E = (e) => {
        const { size: t = 200, url: r, ...n } = e;
        return (0, i.tZ)(a.Flex, {
          elementDescriptor: a.descriptors.qrCodeRow,
          ...n,
          children: (0, i.tZ)(a.Flex, {
            elementDescriptor: a.descriptors.qrCodeContainer,
            sx: (e) => ({ backgroundColor: "white", padding: e.space.$2x5 }),
            children: (0, i.tZ)(O.tv, { value: r || "", size: t }),
          }),
        });
      };
    },
    6874: function (e, t, r) {
      r.d(t, {
        d: function () {
          return a;
        },
        w: function () {
          return s;
        },
      });
      var n = r(1808);
      const o = "/sso-callback",
        i = "/verify";
      function a(e, t = "") {
        const { routing: r, authQueryString: n, path: o } = e;
        return l({
          routing: r,
          baseUrl: t,
          authQueryString: n,
          path: o,
          endpoint: i,
        });
      }
      function s(e, t = "") {
        const { routing: r, authQueryString: n, path: i } = e;
        return l({
          routing: r,
          baseUrl: t,
          authQueryString: n,
          path: i,
          endpoint: o,
        });
      }
      const l = ({
          routing: e,
          authQueryString: t,
          baseUrl: r,
          path: n,
          endpoint: o,
        }) =>
          e && "hash" !== e
            ? "path" === e
              ? u(n || "", t, o)
              : d(r || "", t, o)
            : c(t, o),
        c = (e, t) => {
          const r = t + (e ? `?${e}` : "");
          return (0, n.KV)({ hash: r }, { stringify: !0 });
        },
        u = (e, t, r) => {
          const o = t ? { search: "?" + t } : {};
          return (0, n.KV)({ pathname: e + r, ...o }, { stringify: !0 });
        },
        d = (e, t, r) => {
          const o = r + (t ? `?${t}` : "");
          return (0, n.KV)({ base: e, hash: o }, { stringify: !0 });
        };
    },
    8246: function (e, t, r) {
      r.d(t, {
        b: function () {
          return o;
        },
        x: function () {
          return n;
        },
      });
      const n = { ACCOUNT: "account", SECURITY: "security" },
        o = { MEMBERS: "members", SETTINGS: "settings" };
    },
    7568: function (e, t, r) {
      r.d(t, {
        O: function () {
          return l;
        },
        u: function () {
          return s;
        },
      });
      var n = r(2903),
        o = r(2784),
        i = r(6235);
      const a = o.createContext(null);
      function s({ children: e, value: t }) {
        return (0, n.tZ)(a.Provider, { value: t, children: e });
      }
      function l() {
        const e = o.useContext(a);
        return (0, i.L)(e, "EnvironmentProvider"), e;
      }
    },
    8173: function (e, t, r) {
      r.r(t),
        r.d(t, {
          ComponentContext: function () {
            return S;
          },
          CoreClerkContext: function () {
            return o;
          },
          CoreClerkContextWrapper: function () {
            return V;
          },
          CoreClientContext: function () {
            return F;
          },
          CoreOrganizationProvider: function () {
            return p;
          },
          CoreSessionContext: function () {
            return E;
          },
          CoreUserContext: function () {
            return c;
          },
          EnvironmentProvider: function () {
            return A.u;
          },
          OptionsContext: function () {
            return z;
          },
          OptionsProvider: function () {
            return D;
          },
          useCoreClerk: function () {
            return i;
          },
          useCoreOrganization: function () {
            return m;
          },
          useCoreOrganizationList: function () {
            return f;
          },
          useCoreOrganizations: function () {
            return h;
          },
          useCoreSession: function () {
            return Z;
          },
          useCoreSessionList: function () {
            return U;
          },
          useCoreSignIn: function () {
            return M;
          },
          useCoreSignUp: function () {
            return j;
          },
          useCoreUser: function () {
            return u;
          },
          useCreateOrganizationContext: function () {
            return T;
          },
          useEnvironment: function () {
            return A.O;
          },
          useOptions: function () {
            return O;
          },
          useOrganizationListContext: function () {
            return B;
          },
          useOrganizationProfileContext: function () {
            return R;
          },
          useOrganizationSwitcherContext: function () {
            return I;
          },
          useSignInContext: function () {
            return $;
          },
          useSignUpContext: function () {
            return C;
          },
          useUserButtonContext: function () {
            return P;
          },
          useUserProfileContext: function () {
            return k;
          },
          withCoreSessionSwitchGuard: function () {
            return L;
          },
          withCoreUserGuard: function () {
            return d;
          },
        });
      var n = r(7018);
      const [o, i] = [n.b5, n.rI];
      var a = r(2903),
        s = r(2784),
        l = r(361);
      const c = n.St,
        u = () => {
          const e = (0, n.SE)();
          return e || (0, l.ag)(), e;
        };
      function d(e) {
        const t = (t) => {
            const r = (0, s.useContext)(c);
            return (0, n.LB)(r, c), r.value ? (0, a.tZ)(e, { ...t }) : null;
          },
          r = e.displayName || e.name || "Component";
        return (e.displayName = r), (t.displayName = r), t;
      }
      const p = n.f0,
        m = n.o8,
        f = n.eW,
        h = n.qi;
      var g = r(4096),
        v = r(9841),
        b = r(996),
        y = r(3736),
        x = r(1609);
      const w = (0, b.OY)({ regex: /:(\w+)/ }),
        S = s.createContext(null),
        _ = (e, t) => {
          const r = {};
          return (
            new URLSearchParams(e).forEach((e, n) => {
              t.includes(n) && "string" == typeof e && (r[(0, g.TD)(n)] = e);
            }),
            r
          );
        },
        C = () => {
          const { componentName: e, ...t } = s.useContext(S) || {},
            { navigate: r } = (0, y.useRouter)(),
            { displayConfig: n } = (0, A.O)(),
            { queryParams: o, queryString: a } = (0, y.useRouter)(),
            l = O(),
            c = i(),
            u = (0, s.useMemo)(() => _(a, v.bf), []);
          if ("SignUp" !== e)
            throw new Error(
              "Clerk: useSignUpContext called outside of the mounted SignUp component."
            );
          const d = c.buildUrlWithAuth(
              (0, b.pv)("afterSignUpUrl", {
                queryParams: o,
                ctx: t,
                options: l,
                displayConfig: n,
              })
            ),
            p = c.buildUrlWithAuth(
              (0, b.pv)("afterSignInUrl", {
                queryParams: o,
                ctx: t,
                options: l,
                displayConfig: n,
              })
            );
          let m = (0, b.pv)(
            "signInUrl",
            { ctx: t, options: l, displayConfig: n },
            !1
          );
          const f = (0, b.LD)({
            afterSignInUrl: p,
            afterSignUpUrl: d,
            displayConfig: n,
          });
          f && "virtual" != t.routing && (m += `#/?${f}`);
          const h = (0, b.KV)(
            { base: m, hashPath: "/factor-two" },
            { stringify: !0 }
          );
          return {
            ...t,
            componentName: e,
            signInUrl: m,
            secondFactorUrl: h,
            afterSignUpUrl: d,
            afterSignInUrl: p,
            navigateAfterSignUp: () => r(d),
            queryParams: o,
            initialValues: { ...t.initialValues, ...u },
            authQueryString: f,
          };
        },
        $ = () => {
          const { componentName: e, ...t } = s.useContext(S) || {},
            { navigate: r } = (0, y.useRouter)(),
            { displayConfig: n } = (0, A.O)(),
            { queryParams: o, queryString: a } = (0, y.useRouter)(),
            l = O(),
            c = i(),
            u = (0, s.useMemo)(() => _(a, v.im), []);
          if ("SignIn" !== e)
            throw new Error(
              "Clerk: useSignInContext called outside of the mounted SignIn component."
            );
          const d = c.buildUrlWithAuth(
              (0, b.pv)("afterSignUpUrl", {
                queryParams: o,
                ctx: t,
                options: l,
                displayConfig: n,
              })
            ),
            p = c.buildUrlWithAuth(
              (0, b.pv)("afterSignInUrl", {
                queryParams: o,
                ctx: t,
                options: l,
                displayConfig: n,
              })
            );
          let m = (0, b.pv)(
            "signUpUrl",
            { ctx: t, options: l, displayConfig: n },
            !1
          );
          const f = (0, b.LD)({
            afterSignInUrl: p,
            afterSignUpUrl: d,
            displayConfig: n,
          });
          f && "virtual" !== t.routing && (m += `#/?${f}`);
          const h = (0, b.KV)(
            { base: m, hashPath: "/continue" },
            { stringify: !0 }
          );
          return {
            ...t,
            componentName: e,
            signUpUrl: m,
            afterSignInUrl: p,
            afterSignUpUrl: d,
            navigateAfterSignIn: () => r(p),
            signUpContinueUrl: h,
            queryParams: o,
            initialValues: { ...t.initialValues, ...u },
            authQueryString: f,
          };
        },
        k = () => {
          const {
              componentName: e,
              customPages: t,
              ...r
            } = s.useContext(S) || {},
            { queryParams: n } = (0, y.useRouter)();
          if ("UserProfile" !== e)
            throw new Error(
              "Clerk: useUserProfileContext called outside of the mounted UserProfile component."
            );
          return {
            ...r,
            pages: (0, x.BG)(t || []),
            componentName: e,
            queryParams: n,
            authQueryString: "",
          };
        },
        P = () => {
          const { componentName: e, ...t } = s.useContext(S) || {},
            r = i(),
            { navigate: n } = (0, y.useRouter)(),
            { displayConfig: o } = (0, A.O)(),
            a = O();
          if ("UserButton" !== e)
            throw new Error(
              "Clerk: useUserButtonContext called outside of the mounted UserButton component."
            );
          const l = (0, b.pv)(
              "signInUrl",
              { ctx: t, options: a, displayConfig: o },
              !1
            ),
            c = t.userProfileUrl || o.userProfileUrl,
            u = t.afterMultiSessionSingleSignOutUrl || o.afterSignOutOneUrl,
            d = t.afterSignOutUrl || o.afterSignOutAllUrl,
            p = t.afterSwitchSessionUrl || o.afterSwitchSessionUrl;
          return {
            ...t,
            componentName: e,
            navigateAfterMultiSessionSingleSignOut: () => r.redirectWithAuth(u),
            navigateAfterSignOut: () => n(d),
            navigateAfterSwitchSession: () => n(p),
            signInUrl: l,
            userProfileUrl: c,
            afterMultiSessionSingleSignOutUrl: u,
            afterSignOutUrl: d,
            afterSwitchSessionUrl: p,
          };
        },
        I = () => {
          const { componentName: e, ...t } = s.useContext(S) || {},
            { navigate: r } = (0, y.useRouter)(),
            { displayConfig: n } = (0, A.O)();
          if ("OrganizationSwitcher" !== e)
            throw new Error(
              "Clerk: useOrganizationSwitcherContext called outside OrganizationSwitcher."
            );
          const o =
              t.afterCreateOrganizationUrl || n.afterCreateOrganizationUrl,
            i = t.afterLeaveOrganizationUrl || n.afterLeaveOrganizationUrl,
            a = ({ organization: e, user: n }) => {
              if ("function" == typeof t.afterSelectPersonalUrl && n)
                return r(t.afterSelectPersonalUrl(n));
              if ("function" == typeof t.afterSelectOrganizationUrl && e)
                return r(t.afterSelectOrganizationUrl(e));
              if (t.afterSelectPersonalUrl && n) {
                const e = w({
                  urlWithParam: t.afterSelectPersonalUrl,
                  entity: n,
                });
                return r(e);
              }
              if (t.afterSelectOrganizationUrl && e) {
                const n = w({
                  urlWithParam: t.afterSelectOrganizationUrl,
                  entity: e,
                });
                return r(n);
              }
              return t.afterSwitchOrganizationUrl
                ? ((0, g.x9)(
                    "afterSwitchOrganizationUrl",
                    "Use `afterSelectOrganizationUrl` or `afterSelectPersonalUrl`"
                  ),
                  r(t.afterSwitchOrganizationUrl))
                : Promise.resolve();
            };
          return {
            ...t,
            hidePersonal: t.hidePersonal || !1,
            organizationProfileMode: t.organizationProfileMode || "modal",
            createOrganizationMode: t.createOrganizationMode || "modal",
            afterCreateOrganizationUrl: o,
            afterLeaveOrganizationUrl: i,
            navigateOrganizationProfile: () =>
              r(t.organizationProfileUrl || n.organizationProfileUrl),
            navigateCreateOrganization: () =>
              r(t.createOrganizationUrl || n.createOrganizationUrl),
            navigateAfterSelectOrganization: (e) => a({ organization: e }),
            navigateAfterSelectPersonal: (e) => a({ user: e }),
            componentName: e,
          };
        },
        B = () => {
          const { componentName: e, ...t } = s.useContext(S) || {},
            { navigate: r } = (0, y.useRouter)(),
            { displayConfig: n } = (0, A.O)();
          if ("OrganizationList" !== e)
            throw new Error(
              "Clerk: useOrganizationListContext called outside OrganizationList."
            );
          const o =
              t.afterCreateOrganizationUrl || n.afterCreateOrganizationUrl,
            i = ({ organization: e, user: n }) => {
              if ("function" == typeof t.afterSelectPersonalUrl && n)
                return r(t.afterSelectPersonalUrl(n));
              if ("function" == typeof t.afterSelectOrganizationUrl && e)
                return r(t.afterSelectOrganizationUrl(e));
              if (t.afterSelectPersonalUrl && n) {
                const e = w({
                  urlWithParam: t.afterSelectPersonalUrl,
                  entity: n,
                });
                return r(e);
              }
              if (t.afterSelectOrganizationUrl && e) {
                const n = w({
                  urlWithParam: t.afterSelectOrganizationUrl,
                  entity: e,
                });
                return r(n);
              }
              return Promise.resolve();
            };
          return {
            ...t,
            afterCreateOrganizationUrl: o,
            skipInvitationScreen: t.skipInvitationScreen || !1,
            hidePersonal: t.hidePersonal || !1,
            navigateAfterCreateOrganization: (e) => {
              if ("function" == typeof t.afterCreateOrganizationUrl)
                return r(t.afterCreateOrganizationUrl(e));
              if (t.afterCreateOrganizationUrl) {
                const n = w({
                  urlWithParam: t.afterCreateOrganizationUrl,
                  entity: e,
                });
                return r(n);
              }
              return r(n.afterCreateOrganizationUrl);
            },
            navigateAfterSelectOrganization: (e) => i({ organization: e }),
            navigateAfterSelectPersonal: (e) => i({ user: e }),
            componentName: e,
          };
        },
        R = () => {
          const {
              componentName: e,
              customPages: t,
              ...r
            } = s.useContext(S) || {},
            { navigate: n } = (0, y.useRouter)(),
            { displayConfig: o } = (0, A.O)();
          if ("OrganizationProfile" !== e)
            throw new Error(
              "Clerk: useOrganizationProfileContext called outside OrganizationProfile."
            );
          const i = (0, x.sn)(t || []);
          return {
            ...r,
            pages: i,
            navigateAfterLeaveOrganization: () =>
              n(r.afterLeaveOrganizationUrl || o.afterLeaveOrganizationUrl),
            componentName: e,
          };
        },
        T = () => {
          const { componentName: e, ...t } = s.useContext(S) || {},
            { navigate: r } = (0, y.useRouter)(),
            { displayConfig: n } = (0, A.O)();
          if ("CreateOrganization" !== e)
            throw new Error(
              "Clerk: useCreateOrganizationContext called outside CreateOrganization."
            );
          return {
            ...t,
            skipInvitationScreen: t.skipInvitationScreen || !1,
            navigateAfterCreateOrganization: (e) => {
              if ("function" == typeof t.afterCreateOrganizationUrl)
                return r(t.afterCreateOrganizationUrl(e));
              if (t.afterCreateOrganizationUrl) {
                const n = w({
                  urlWithParam: t.afterCreateOrganizationUrl,
                  entity: e,
                });
                return r(n);
              }
              return r(n.afterCreateOrganizationUrl);
            },
            componentName: e,
          };
        };
      var A = r(7568);
      const z = s.createContext({});
      function D({ children: e, value: t }) {
        return (0, a.tZ)(z.Provider, { value: t, children: e });
      }
      function O() {
        const e = s.useContext(z);
        if (void 0 === e)
          throw new Error("useOptions must be used within an OptionsContext");
        return e;
      }
      const E = n.B3;
      function Z() {
        const e = (0, n.Tt)();
        return e || (0, l.Og)(), e;
      }
      function L(e) {
        const t = (t) => {
            const r = s.useContext(E);
            return (
              (0, n.LB)(r, E),
              void 0 === r.value ? null : (0, a.tZ)(e, { ...t })
            );
          },
          r = e.displayName || e.name || "Component";
        return (e.displayName = r), (t.displayName = r), t;
      }
      const F = n.RY;
      function M() {
        const e = (0, n.sX)();
        return (0, n.LB)(e, F), e.signIn;
      }
      function j() {
        const e = (0, n.sX)();
        return (0, n.LB)(e, F), e.signUp;
      }
      function U() {
        const e = (0, n.sX)();
        return (0, n.LB)(e, F), e.sessions;
      }
      var N = r(6235);
      function V(e) {
        const t = e.clerk;
        (0, N.M)(t);
        const [r, n] = s.useState({
          client: t.client,
          session: t.session,
          user: t.user,
          organization: t.organization,
        });
        s.useEffect(() => t.addListener((e) => n({ ...e })), []);
        const { client: i, session: l, user: u, organization: d } = r,
          m = s.useMemo(() => ({ value: t }), []),
          f = s.useMemo(() => ({ value: i }), [i]),
          h = s.useMemo(() => ({ value: l }), [l]),
          g = s.useMemo(() => ({ value: u }), [u]),
          v = s.useMemo(
            () => ({
              value: {
                organization: d,
                lastOrganizationInvitation: void 0,
                lastOrganizationMember: void 0,
              },
            }),
            [d]
          );
        return (0, a.tZ)(o.Provider, {
          value: m,
          children: (0, a.tZ)(F.Provider, {
            value: f,
            children: (0, a.tZ)(E.Provider, {
              value: h,
              children: (0, a.tZ)(p, {
                ...v.value,
                swrConfig: e.swrConfig,
                children: (0, a.tZ)(c.Provider, {
                  value: g,
                  children: e.children,
                }),
              }),
            }),
          }),
        });
      }
    },
    6235: function (e, t, r) {
      r.d(t, {
        L: function () {
          return i;
        },
        M: function () {
          return o;
        },
      });
      var n = r(361);
      function o(e) {
        e || (0, n.G6)();
      }
      function i(e, t) {
        e || (0, n.k2)(t);
      }
    },
    127: function (e, t, r) {
      r.d(t, {
        x: function () {
          return ne;
        },
        M: function () {
          return re;
        },
      });
      var n = r(2903),
        o = r(7018),
        i = (r(2784), r(8441));
      const a = (e) => {
          const t = {},
            r = e;
          for (const e in r) {
            t[e] = {};
            for (const n in r[e]) t[e]["$" + n] = r[e][n];
          }
          return Object.freeze(t);
        },
        s = Object.freeze({ normal: "1px solid", heavy: "2px solid" }),
        l = Object.freeze({
          whiteAlpha20: "hsla(0, 0%, 100%, 0.02)",
          whiteAlpha50: "hsla(0, 0%, 100%, 0.04)",
          whiteAlpha100: "hsla(0, 0%, 100%, 0.06)",
          whiteAlpha200: "hsla(0, 0%, 100%, 0.08)",
          whiteAlpha300: "hsla(0, 0%, 100%, 0.16)",
          whiteAlpha400: "hsla(0, 0%, 100%, 0.24)",
          whiteAlpha500: "hsla(0, 0%, 100%, 0.36)",
          whiteAlpha600: "hsla(0, 0%, 100%, 0.48)",
          whiteAlpha700: "hsla(0, 0%, 100%, 0.64)",
          whiteAlpha800: "hsla(0, 0%, 100%, 0.80)",
          whiteAlpha900: "hsla(0, 0%, 100%, 0.92)",
        }),
        c = Object.freeze({
          blackAlpha20: "hsla(0, 0%, 0%, 0.02)",
          blackAlpha50: "hsla(0, 0%, 0%, 0.04)",
          blackAlpha100: "hsla(0, 0%, 0%, 0.06)",
          blackAlpha200: "hsla(0, 0%, 0%, 0.08)",
          blackAlpha300: "hsla(0, 0%, 0%, 0.16)",
          blackAlpha400: "hsla(0, 0%, 0%, 0.24)",
          blackAlpha500: "hsla(0, 0%, 0%, 0.36)",
          blackAlpha600: "hsla(0, 0%, 0%, 0.48)",
          blackAlpha700: "hsla(0, 0%, 0%, 0.64)",
          blackAlpha800: "hsla(0, 0%, 0%, 0.80)",
          blackAlpha900: "hsla(0, 0%, 0%, 0.92)",
        }),
        u = Object.freeze({
          avatarBorder: c.blackAlpha200,
          avatarBackground: c.blackAlpha400,
          modalBackdrop: c.blackAlpha700,
          activeDeviceBackground: l.whiteAlpha200,
          ...c,
          ...l,
          colorBackground: "white",
          colorInputBackground: "white",
          colorText: "black",
          colorTextOnPrimaryBackground: "white",
          colorTextSecondary: "rgba(0,0,0,0.65)",
          colorInputText: "black",
          colorShimmer: "rgba(255, 255, 255, 0.36)",
          transparent: "transparent",
          white: "white",
          black: "black",
          primary50: "#f0f3ff",
          primary100: "#d1dcff",
          primary200: "#91A7F7",
          primary300: "#6684F5",
          primary400: "#3B62F2",
          primary500: "#103FEF",
          primary600: "#0D33BF",
          primary700: "#0A268F",
          primary800: "#07195F",
          primary900: "#030D30",
          danger50: "#FEF3F2",
          danger100: "#FEE4E2",
          danger200: "#FECDCA",
          danger300: "#FDA29B",
          danger400: "#F97066",
          danger500: "#F04438",
          danger600: "#D92D20",
          danger700: "#B42318",
          danger800: "#912018",
          danger900: "#7A271A",
          warning50: "#FFFAEB",
          warning100: "#FEF0C7",
          warning200: "#FEDF89",
          warning300: "#FEC84B",
          warning400: "#FDB022",
          warning500: "#F79009",
          warning600: "#DC6803",
          warning700: "#B54708",
          warning800: "#93370D",
          warning900: "#7A2E0E",
          success50: "#ECFDF3",
          success100: "#D1FADF",
          success200: "#A6F4C5",
          success300: "#6CE9A6",
          success400: "#32D583",
          success500: "#12B76A",
          success600: "#039855",
          success700: "#027A48",
          success800: "#05603A",
          success900: "#054F31",
        }),
        d = Object.freeze({ sm: "24%", disabled: "50%", inactive: "62%" }),
        p = Object.freeze({
          cardDropShadow: "0px 24px 48px rgba(0, 0, 0, 0.16)",
          boxShadow1: "0px 24px 48px rgba(0, 0, 0, 0.16)",
          fabShadow: "0px 12px 24px rgba(0, 0, 0, 0.32)",
          focusRing: "0 0 0 3px {{color}}",
          focusRingInput: "0 0 0 1px {{color}}",
          shadowShimmer: "1px 1px 2px rgba(0, 0, 0, 0.36)",
        }),
        m = Object.freeze({ none: "0", xxs: "0.5px", px: "1px" }),
        f = Object.freeze({
          "0x5": "0.125rem",
          1: "0.25rem",
          "1x5": "0.375rem",
          2: "0.5rem",
          "2x5": "0.625rem",
          3: "0.75rem",
          "3x5": "0.875rem",
          4: "1rem",
          5: "1.25rem",
          6: "1.5rem",
          7: "1.75rem",
          8: "2rem",
          9: "2.25rem",
          "9x5": "2.375rem",
          10: "2.5rem",
          11: "2.75rem",
          12: "3rem",
          "12x5": "3.125rem",
          14: "3.5rem",
          15: "3.75rem",
          16: "4rem",
          20: "5rem",
          24: "6rem",
          48: "12rem",
          60: "15rem",
          94: "23.5rem",
          100: "25rem",
          120: "30rem",
          140: "35rem",
          160: "40rem",
          176: "44rem",
          220: "55rem",
        }),
        h = Object.freeze({ ...m, ...f }),
        g = Object.freeze({ ...h }),
        v = Object.freeze({
          none: "0px",
          circle: "50%",
          sm: "0.25rem",
          md: "0.375rem",
          lg: "0.5rem",
          xl: "1rem",
          "2xl": "1.25rem",
          halfHeight: "99999px",
        }),
        b = Object.keys(f),
        y = Object.freeze({
          slowest: "600ms",
          slower: "280ms",
          slow: "200ms",
          fast: "120ms",
          focusRing: "200ms",
          controls: "100ms",
          textField: "450ms",
        }),
        x = Object.freeze({
          common:
            "background-color,border-color,color,fill,stroke,opacity,box-shadow,transform",
        }),
        w = Object.freeze({
          common: "ease",
          easeOut: "ease-out",
          slowBezier: "cubic-bezier(0.16, 1, 0.3, 1)",
        }),
        S = Object.freeze({ normal: 400, medium: 500, bold: 600 }),
        _ = Object.freeze({
          normal: "normal",
          none: 1,
          shortest: 1.1,
          shorter: 1.25,
          short: 1.375,
          base: 1.5,
          tall: 1.625,
          taller: 2,
        }),
        C = Object.freeze({
          tighter: "-0.05em",
          tight: "-0.025em",
          normal: "0",
          wide: "0.025em",
          wider: "0.05em",
          widest: "0.1em",
        }),
        $ = Object.freeze({
          "2xs": "0.6875rem",
          xs: "0.8125rem",
          sm: "0.875rem",
          md: "1rem",
          lg: "1.125rem",
          xl: "1.25rem",
          "2xl": "2rem",
        }),
        k = Object.freeze({ normal: "normal" }),
        P = Object.freeze({ main: "inherit", buttons: "inherit" }),
        I = Object.freeze({
          navbar: "100",
          fab: "9000",
          modal: "10000",
          dropdown: "11000",
        }),
        B = Object.freeze({
          colors: u,
          fonts: P,
          fontStyles: k,
          fontSizes: $,
          fontWeights: S,
          letterSpacings: C,
          lineHeights: _,
          radii: v,
          sizes: g,
          space: h,
          shadows: p,
          transitionProperty: x,
          transitionTiming: w,
          transitionDuration: y,
          opacity: d,
          borders: s,
          zIndices: I,
          options: { fontSmoothing: "auto !important" },
        }),
        R = a(B);
      var T = r(1609);
      const A = ["50", "100", "200", "300", "400"].reverse(),
        z = ["600", "700", "800", "900"],
        D = (e, t) => O(e, t, F),
        O = (e, t, r) => {
          if (!e) return;
          if ("object" == typeof e && !e[500])
            throw new Error("You need to provide at least the 500 shade");
          const n = L(e),
            o = r(n[500]),
            i = E(o, n);
          return Z(i, t);
        },
        E = (e, t) =>
          (0, T.sq)(Object.entries(t).map(([t, r]) => [t, r || e[t]])),
        Z = (e, t) => {
          const r = {};
          for (const n in e) e[n] && (r[t + n] = T.O9.toHslaString(e[n]));
          return r;
        },
        L = (e) => {
          const t = "string" == typeof e ? { 500: e } : e,
            r = Object.keys({
              50: void 0,
              100: void 0,
              200: void 0,
              300: void 0,
              400: void 0,
              500: void 0,
              600: void 0,
              700: void 0,
              800: void 0,
              900: void 0,
            }).map((e) => [e, t[e] ? T.O9.toHslaColor(t[e]) : void 0]);
          return (0, T.sq)(r);
        },
        F = (e) => {
          const t = {
            50: void 0,
            100: void 0,
            200: void 0,
            300: void 0,
            400: void 0,
            500: void 0,
            600: void 0,
            700: void 0,
            800: void 0,
            900: void 0,
          };
          t[500] = e;
          const r = (97 - e.l) / A.length,
            n = (e.l - 12) / z.length;
          return (
            A.forEach(
              (n, o) => (t[n] = T.O9.changeHslaLightness(e, (o + 1) * r))
            ),
            z.map(
              (r, o) => (t[r] = T.O9.changeHslaLightness(e, (o + 1) * n * -1))
            ),
            t
          );
        },
        M = (e) => {
          const t = {
              20: void 0,
              50: void 0,
              100: void 0,
              200: void 0,
              300: void 0,
              400: void 0,
              500: void 0,
              600: void 0,
              700: void 0,
              800: void 0,
              900: void 0,
            },
            r = T.O9.setHslaAlpha(e, 0),
            n = [
              0.02, 0.04, 0.06, 0.08, 0.16, 0.24, 0.36, 0.48, 0.64, 0.8, 0.92,
            ];
          return (
            Object.keys(t).forEach(
              (e, o) => (t[e] = T.O9.setHslaAlpha(r, n[o]))
            ),
            t
          );
        },
        j = (e) => {
          const t = e.variables || {};
          return (0, T.Yb)({
            ...D(t.colorPrimary, "primary"),
            ...D(t.colorDanger, "danger"),
            ...D(t.colorSuccess, "success"),
            ...D(t.colorWarning, "warning"),
            ...((r = t.colorAlphaShade), "blackAlpha", O(r, "blackAlpha", M)),
            colorText: N(t.colorText),
            colorTextOnPrimaryBackground: N(t.colorTextOnPrimaryBackground),
            colorTextSecondary:
              N(t.colorTextSecondary) ||
              T.O9.makeTransparent(t.colorText, 0.35),
            colorInputText: N(t.colorInputText),
            colorBackground: N(t.colorBackground),
            colorInputBackground: N(t.colorInputBackground),
            colorShimmer: N(t.colorShimmer),
          });
          var r;
        },
        U = (e) => {
          const { fontSmoothing: t = "auto !important" } = e.variables || {};
          return { fontSmoothing: t };
        },
        N = (e) => (e ? T.O9.toHslaString(e) : void 0),
        V = (e) => {
          const { borderRadius: t } = e.variables || {};
          if (void 0 === t) return;
          const r = "none" === t ? "0" : t,
            { numericValue: n, unit: o = "rem" } = Y(r);
          return {
            sm: G(n, 0.23).toString() + o,
            md: r,
            lg: G(n, 0.35).toString() + o,
            xl: G(n, 1.7).toString() + o,
            "2xl": G(n, 2.35).toString() + o,
          };
        },
        H = (e) => {
          const { spacingUnit: t } = e.variables || {};
          if (void 0 === t) return;
          const { numericValue: r, unit: n } = Y(t);
          return (0, T.sq)(
            b.map((e) => {
              const t = Number.parseFloat(e.replace("x", "."));
              return [e, `${r * ((t / 0.5) * 0.125)}${n}`];
            })
          );
        },
        W = (e) => {
          const { fontSize: t } = e.variables || {};
          if (void 0 === t) return;
          const { numericValue: r, unit: n = "rem" } = Y(t);
          return {
            "2xs": (0.625 * r).toString() + n,
            xs: (0.75 * r).toString() + n,
            sm: (0.875 * r).toString() + n,
            md: t,
            lg: (1.125 * r).toString() + n,
            xl: (1.25 * r).toString() + n,
            "2xl": (2 * r).toString() + n,
          };
        },
        X = (e) => {
          const { fontWeight: t } = e.variables || {};
          return (0, T.Yb)({ ...t });
        },
        q = (e) => {
          const { fontFamily: t, fontFamilyButtons: r } = e.variables || {};
          return (0, T.Yb)({ main: t, buttons: r });
        },
        K = (e) => {
          const { shadowShimmer: t } = e.variables || {};
          return (0, T.Yb)({ shadowShimmer: t });
        },
        Y = (e) => {
          const t = Number.parseFloat(e),
            r = e.replace(t.toString(), "") || void 0;
          return { numericValue: t, unit: r };
        },
        G = (e, t) => e + e * t,
        J = {
          logoPlacement: "inside",
          socialButtonsPlacement: "top",
          socialButtonsVariant: "auto",
          logoImageUrl: "",
          logoLinkUrl: "",
          showOptionalFields: !0,
          helpPageUrl: "",
          privacyPageUrl: "",
          termsPageUrl: "",
          shimmer: !1,
        },
        Q = (e, t) => {
          e &&
            ((Array.isArray(e.baseTheme) ? e.baseTheme : [e.baseTheme]).forEach(
              (e) => Q(e, t)
            ),
            t.push(e));
        },
        ee = (e) => {
          if (!e) return {};
          const t = { ...j(e) },
            r = { ...V(e) },
            n = { ...H(e) },
            o = { ...W(e) },
            i = { ...X(e) },
            s = { ...q(e) },
            l = { ...U(e) },
            c = { ...K(e) };
          return a({
            colors: t,
            radii: r,
            space: n,
            fontSizes: o,
            fontWeights: i,
            fonts: s,
            options: l,
            shadows: c,
          });
        },
        [te, re] = (0, o.uH)("AppearanceContext"),
        ne = (e) => {
          const t = (0, i.I7)(
            () => ({
              value: ((e) => {
                const {
                    globalAppearance: t,
                    appearance: r,
                    appearanceKey: n,
                  } = e,
                  o = [];
                [t, null == t ? void 0 : t[n], r].forEach((e) => Q(e, o));
                const i = ((e) => {
                    const t = {};
                    return (
                      (0, T.EB)({ ...R }, t),
                      e.forEach((e) => {
                        (0, T.EB)(ee(e), t);
                      }),
                      t
                    );
                  })(o),
                  a = ((e) => ({
                    ...J,
                    ...e.reduce((e, t) => ({ ...e, ...t.layout }), {}),
                  }))(o);
                return {
                  parsedElements:
                    ((s = o.map((e) => {
                      if (!e.elements || "function" != typeof e.elements)
                        return e;
                      const t = { ...e };
                      return (t.elements = e.elements({ theme: i })), t;
                    })),
                    s.map((e) => ({ ...(null == e ? void 0 : e.elements) }))),
                  parsedInternalTheme: i,
                  parsedLayout: a,
                };
                var s;
              })(e),
            }),
            [e.appearance, e.globalAppearance]
          );
          return (0, n.tZ)(te.Provider, { value: t, children: e.children });
        };
    },
    6112: function (e, t, r) {
      r.d(t, {
        ZS: function () {
          return d;
        },
        fI: function () {
          return b;
        },
        u8: function () {
          return a;
        },
        vn: function () {
          return v;
        },
      });
      var n = r(7850);
      const o = Object.freeze({
          loading: ` ${n.jW}loading`,
          error: ` ${n.jW}error`,
          open: ` ${n.jW}open`,
          active: ` ${n.jW}active`,
        }),
        i = Object.freeze({ loading: 2, error: 2, open: 2, active: 2 }),
        a = (e, t, r, n) => {
          const o = f(n);
          let i = "";
          const a = [];
          return (
            (i = s(i, t)),
            (i = l(i, t, r)),
            (i = c(i, o)),
            (i = u(i, n)),
            (i = m(i, e, t, r, o)),
            p(a, e, t, r, o),
            { className: i, css: a }
          );
        },
        s = (e, t) => {
          for (let r = t.length - 1; r >= 0; r--)
            e += t[r].targettableClassname + " ";
          return e.trimEnd();
        },
        l = (e, t, r) => {
          if (!r) return e;
          for (let n = t.length - 1; n >= 0; n--)
            e = e + " " + t[n].getTargettableIdClassname(r);
          return e;
        },
        c = (e, t) => (t ? e + o[t] : e),
        u = (e, t) => (t && t.isRequired ? e + ` ${n.jW}required` : e),
        d = (e, t) => e + (t ? " " + t : "") + " 🔒️",
        p = (e, t, r, n, o) => {
          for (let i = 0; i < r.length; i++)
            for (let a = 0; a < t.length; a++) x(e, t[a], r[i], n, o);
        },
        m = (e, t, r, n, o) => {
          for (let i = 0; i < r.length; i++)
            for (let a = 0; a < t.length; a++) e = y(e, t[a], r[i], n, o);
          return e;
        },
        f = (e) => {
          if (e)
            return e.isLoading
              ? "loading"
              : e.hasError
              ? "error"
              : e.isOpen
              ? "open"
              : e.isActive
              ? "active"
              : void 0;
        },
        h = (e, t) => ("string" == typeof t ? e + " " + t : e),
        g = (e, t, r = 0) => {
          r
            ? t && "object" == typeof t && e.push({ ["&".repeat(r)]: t })
            : t && "object" == typeof t && e.push(t);
        },
        v = (e) => n.jW + e.flow + "-root",
        b = (e) => (e.part ? n.jW + e.flow + "-" + e.part : ""),
        y = (e, t, r, n, o) =>
          t
            ? ((e = h(e, t[r.objectKey])),
              n && (e = h(e, t[r.getObjectKeyWithId(n)])),
              o && (e = h(e, t[r.getObjectKeyWithState(o)])),
              n && o && (e = h(e, t[r.getObjectKeyWithIdAndState(n, o)])),
              e)
            : e,
        x = (e, t, r, n, o) => {
          t &&
            (g(e, t[r.objectKey]),
            n && g(e, t[r.getObjectKeyWithId(n)]),
            o && g(e, t[r.getObjectKeyWithState(o)], i[o]),
            n && o && g(e, t[r.getObjectKeyWithIdAndState(n, o)], i[o]));
        };
    },
    7850: function (e, t, r) {
      r.d(t, {
        jW: function () {
          return o;
        },
        tp: function () {
          return u;
        },
      });
      var n = r(1609);
      const o = "cl-",
        i = "__",
        a = (0, n.Nr)()([
          "rootBox",
          "card",
          "logoBox",
          "logoImage",
          "header",
          "headerTitle",
          "headerSubtitle",
          "headerBackRow",
          "headerBackLink",
          "headerBackIcon",
          "main",
          "footer",
          "footerAction",
          "footerActionText",
          "footerActionLink",
          "footerPages",
          "footerPagesLink",
          "socialButtons",
          "socialButtonsIconButton",
          "socialButtonsBlockButton",
          "socialButtonsBlockButtonText",
          "socialButtonsBlockButtonArrow",
          "socialButtonsProviderIcon",
          "enterpriseButtonsProviderIcon",
          "alternativeMethods",
          "alternativeMethodsBlockButton",
          "alternativeMethodsBlockButtonText",
          "alternativeMethodsBlockButtonArrow",
          "otpCodeBox",
          "otpCodeHeader",
          "otpCodeHeaderTitle",
          "otpCodeHeaderSubtitle",
          "otpCodeField",
          "otpCodeFieldInputs",
          "otpCodeFieldInput",
          "otpCodeFieldErrorText",
          "formResendCodeLink",
          "dividerRow",
          "dividerText",
          "dividerLine",
          "formHeader",
          "formHeaderTitle",
          "formHeaderSubtitle",
          "verificationLinkStatusBox",
          "verificationLinkStatusIconBox",
          "verificationLinkStatusIcon",
          "verificationLinkStatusText",
          "form",
          "formFieldRow",
          "formField",
          "formFieldLabelRow",
          "formFieldLabel",
          "formFieldRadioGroup",
          "formFieldRadioGroupItem",
          "formFieldRadioInput",
          "formFieldRadioLabel",
          "formFieldRadioLabelTitle",
          "formFieldRadioLabelDescription",
          "formFieldAction",
          "formFieldInput",
          "formFieldErrorText",
          "formFieldWarningText",
          "formFieldSuccessText",
          "formFieldInfoText",
          "formFieldDirectionsText",
          "formFieldHintText",
          "formButtonRow",
          "formButtonPrimary",
          "formButtonReset",
          "formFieldInputGroup",
          "formFieldInputShowPasswordButton",
          "formFieldInputShowPasswordIcon",
          "formFieldInputCopyToClipboardButton",
          "formFieldInputCopyToClipboardIcon",
          "phoneInputBox",
          "formInputGroup",
          "avatarBox",
          "avatarImage",
          "avatarImageActions",
          "avatarImageActionsUpload",
          "avatarImageActionsRemove",
          "userButtonBox",
          "userButtonOuterIdentifier",
          "userButtonTrigger",
          "userButtonAvatarBox",
          "userButtonAvatarImage",
          "userButtonPopoverRootBox",
          "userButtonPopoverCard",
          "userButtonPopoverMain",
          "userButtonPopoverUserPreview",
          "userButtonPopoverActions",
          "userButtonPopoverActionButton",
          "userButtonPopoverActionButtonIconBox",
          "userButtonPopoverActionButtonIcon",
          "userButtonPopoverActionButtonText",
          "userButtonPopoverFooter",
          "userButtonPopoverFooterPages",
          "userButtonPopoverFooterPagesLink",
          "organizationSwitcherTrigger",
          "organizationSwitcherTriggerIcon",
          "organizationSwitcherPopoverRootBox",
          "organizationSwitcherPopoverCard",
          "organizationSwitcherPopoverMain",
          "organizationSwitcherPopoverActions",
          "organizationSwitcherPopoverInvitationActions",
          "organizationSwitcherPopoverActionButton",
          "organizationSwitcherPreviewButton",
          "organizationSwitcherInvitationAcceptButton",
          "organizationSwitcherInvitationRejectButton",
          "organizationSwitcherPopoverActionButtonIconBox",
          "organizationSwitcherPopoverActionButtonIcon",
          "organizationSwitcherPopoverActionButtonText",
          "organizationSwitcherPopoverFooter",
          "organizationSwitcherPopoverFooterPages",
          "organizationSwitcherPopoverFooterPagesLink",
          "organizationListPreviewItems",
          "organizationListPreviewItem",
          "organizationListPreviewButton",
          "organizationListPreviewItemActionButton",
          "userPreview",
          "userPreviewAvatarContainer",
          "userPreviewAvatarBox",
          "userPreviewAvatarImage",
          "userPreviewTextContainer",
          "userPreviewMainIdentifier",
          "userPreviewSecondaryIdentifier",
          "organizationPreview",
          "organizationPreviewAvatarContainer",
          "organizationPreviewAvatarBox",
          "organizationPreviewAvatarImage",
          "organizationPreviewTextContainer",
          "organizationPreviewMainIdentifier",
          "organizationPreviewSecondaryIdentifier",
          "membersPageInviteButton",
          "organizationProfilePage",
          "identityPreview",
          "identityPreviewAvatarBox",
          "identityPreviewAvatarImage",
          "identityPreviewText",
          "identityPreviewEditButton",
          "identityPreviewEditButtonIcon",
          "alert",
          "alertIcon",
          "alertText",
          "alertTextContainer",
          "tagInputContainer",
          "tagPillIcon",
          "tagPillContainer",
          "tabPanel",
          "tabButton",
          "tabListContainer",
          "tableHead",
          "paginationButton",
          "paginationRowText",
          "selectButton",
          "selectSearchInput",
          "selectButtonIcon",
          "selectOptionsContainer",
          "selectOption",
          "menuButton",
          "menuList",
          "menuItem",
          "loader",
          "loaderIcon",
          "modalBackdrop",
          "modalContent",
          "modalCloseButton",
          "profileSection",
          "profileSectionTitle",
          "profileSectionTitleText",
          "profileSectionSubtitle",
          "profileSectionSubtitleText",
          "profileSectionContent",
          "profileSectionPrimaryButton",
          "profilePage",
          "formattedPhoneNumber",
          "formattedPhoneNumberFlag",
          "formattedPhoneNumberText",
          "breadcrumbs",
          "breadcrumbsItems",
          "breadcrumbsItemBox",
          "breadcrumbsItem",
          "breadcrumbsItemIcon",
          "breadcrumbsItemDivider",
          "scrollBox",
          "navbar",
          "navbarButtons",
          "navbarButton",
          "navbarButtonIcon",
          "navbarMobileMenuRow",
          "navbarMobileMenuButton",
          "navbarMobileMenuButtonIcon",
          "pageScrollBox",
          "page",
          "pageHeader",
          "activeDevice",
          "activeDeviceListItem",
          "activeDeviceIcon",
          "impersonationFab",
          "impersonationFabIcon",
          "impersonationFabIconContainer",
          "impersonationFabTitle",
          "impersonationFabActionLink",
          "fileDropAreaOuterBox",
          "fileDropAreaBox",
          "fileDropAreaIconBox",
          "fileDropAreaIcon",
          "fileDropAreaHint",
          "fileDropAreaButtonPrimary",
          "fileDropAreaFooterHint",
          "invitationsSentIconBox",
          "invitationsSentIcon",
          "accordionTriggerButton",
          "accordionContent",
          "qrCodeRow",
          "qrCodeContainer",
          "badge",
          "notificationBadge",
          "button",
          "providerIcon",
        ]).map((e) => e.replace(/-./g, (e) => e[1].toUpperCase())),
        s = (e) => o + e,
        l = (e) => e.replace(/([-][a-z])/, (e) => e[1].toUpperCase()),
        c = (e) => {
          const t = l(e);
          return {
            objectKey: t,
            targettableClassname: s(e),
            getTargettableIdClassname: (t) => s(e) + "__" + t.id,
            getObjectKeyWithState: (e) => t + i + e,
            getObjectKeyWithId: (e) => t + i + e.id,
            getObjectKeyWithIdAndState: (e, r) => t + i + e.id + i + r,
            setId: (e) => (e ? { id: e, __type: "id" } : void 0),
          };
        },
        u = ((e = a) => {
          const t = e.map((e) => [l(e), c(e)]);
          return (0, n.sq)(t);
        })();
    },
    3476: function (e, t, r) {
      r.r(t),
        r.d(t, {
          Alert: function () {
            return B;
          },
          AlertIcon: function () {
            return R;
          },
          AppearanceProvider: function () {
            return b.x;
          },
          Badge: function () {
            return j;
          },
          Box: function () {
            return y;
          },
          Button: function () {
            return _;
          },
          Col: function () {
            return w;
          },
          Flex: function () {
            return x;
          },
          Flow: function () {
            return v;
          },
          Form: function () {
            return L;
          },
          FormControl: function () {
            return A;
          },
          FormErrorText: function () {
            return D;
          },
          FormInfoText: function () {
            return Z;
          },
          FormLabel: function () {
            return z;
          },
          FormSuccessText: function () {
            return O;
          },
          FormWarningText: function () {
            return E;
          },
          Grid: function () {
            return S;
          },
          Heading: function () {
            return $;
          },
          Icon: function () {
            return F;
          },
          Image: function () {
            return I;
          },
          Input: function () {
            return T;
          },
          Link: function () {
            return k;
          },
          NotificationBadge: function () {
            return U;
          },
          SimpleButton: function () {
            return C;
          },
          Spinner: function () {
            return M;
          },
          Table: function () {
            return N;
          },
          Tbody: function () {
            return H;
          },
          Td: function () {
            return q;
          },
          Text: function () {
            return P;
          },
          Th: function () {
            return X;
          },
          Thead: function () {
            return V;
          },
          Tr: function () {
            return W;
          },
          descriptors: function () {
            return i.tp;
          },
          generateFlowPartClassname: function () {
            return g.fI;
          },
          localizationKeys: function () {
            return n.u1;
          },
          useAppearance: function () {
            return b.M;
          },
          useLocalizations: function () {
            return n.zJ;
          },
        });
      var n = r(4334),
        o = r(373),
        i = r(7850),
        a = r(718),
        s = r(2903),
        l = r(2784),
        c = r(996);
      const u = [
          "https://img.clerk.com/",
          "https://img.clerk.dev/",
          "https://img.clerkstage.dev/",
          "https://img.lclclerk.com/",
        ],
        d = ({ src: e, width: t, xDescriptors: r }) =>
          e
            ? r.map((r) => `${p({ src: e, width: t * r })} ${r}x`).toString()
            : "",
        p = ({ src: e, width: t }) => {
          if (!(0, c.jv)(e) || (0, c.pU)(e)) return e;
          const r = new URL(e);
          return (
            t &&
              r.searchParams.append("width", null == t ? void 0 : t.toString()),
            r.href
          );
        },
        m = (e) =>
          l.forwardRef((t, r) => {
            const {
              elementId: n,
              elementDescriptor: o,
              localizationKey: i,
              ...a
            } = t;
            return (0, s.tZ)(e, { ...a, ref: r });
          });
      var f = r(8690),
        h = r(9820),
        g = r(6112);
      const v = {
        Root: (e) =>
          (0, s.tZ)(f.FlowMetadataProvider, {
            flow: e.flow,
            children: (0, s.tZ)(h.InternalThemeProvider, {
              children: (0, s.tZ)(f.InvisibleRootBox, {
                elementDescriptor: i.tp.rootBox,
                className: (0, g.vn)(e),
                ...e,
              }),
            }),
          }),
        Part: (e) => {
          const { flow: t } = (0, f.useFlowMetadata)();
          return (0, s.tZ)(f.FlowMetadataProvider, {
            flow: t,
            part: e.part,
            children: (0, s.tZ)(h.InternalThemeProvider, {
              children: e.children,
            }),
          });
        },
      };
      var b = r(127);
      const y = (0, a.P)(m(o.xu)),
        x = (0, a.P)(m(o.kC)),
        w = (0, a.P)(m(o.JX)),
        S = (0, a.P)(m(o.rj)),
        _ = (0, a.P)((0, n.W5)(m(o.zx))),
        C = (0, a.P)((0, n.W5)(m(o.rF))),
        $ = (0, a.P)((0, n.W5)(m(o.X6))),
        k = (0, a.P)((0, n.W5)(m(o.rU))),
        P = (0, a.P)((0, n.W5)(m(o.xv))),
        I = (0, a.P)(
          m(
            ((e) => {
              const t = l.forwardRef((t, r) => {
                  const {
                      src: n,
                      size: o = 80,
                      xDescriptors: i = [1, 2],
                      ...a
                    } = t,
                    l = ((e) =>
                      !!u.some((t) => (null == e ? void 0 : e.includes(t))))(n);
                  return (0, s.tZ)(e, {
                    srcSet: l
                      ? d({ src: n, width: o, xDescriptors: i })
                      : void 0,
                    src: l ? p({ src: n, width: 2 * o }) : n,
                    ...a,
                    ref: r,
                  });
                }),
                r = e.displayName || e.name || "Component";
              return (t.displayName = `Responsive${r}`.replace("_", "")), t;
            })(o.Ee)
          )
        ),
        B = (0, a.P)(m(o.bZ)),
        R = (0, a.P)(m(o.zM)),
        T = (0, a.P)(m(o.II)),
        A = (0, a.P)(m(o.NI)),
        z = (0, a.P)((0, n.W5)(m(o.lX))),
        D = (0, a.P)((0, n.W5)(m(o.jo))),
        O = (0, a.P)((0, n.W5)(m(o.Xc))),
        E = (0, a.P)((0, n.W5)(m(o.ZD))),
        Z = (0, a.P)((0, n.W5)(m(o.Zh))),
        L = (0, a.P)(m(o.l0)),
        F = (0, a.P)(m(o.JO)),
        M = (0, a.P)(m(o.$j)),
        j = (0, a.P)((0, n.W5)(m(o.Ct)), { defaultDescriptor: i.tp.badge }),
        U = (0, a.P)((0, n.W5)(m(o.Cc)), {
          defaultDescriptor: i.tp.notificationBadge,
        }),
        N = (0, a.P)(m(o.iA)),
        V = (0, a.P)(m(o.hr)),
        H = (0, a.P)(m(o.p3)),
        W = (0, a.P)(m(o.Tr)),
        X = (0, a.P)((0, n.W5)(m(o.Th))),
        q = (0, a.P)((0, n.W5)(m(o.Td)));
    },
    718: function (e, t, r) {
      r.d(t, {
        P: function () {
          return s;
        },
      });
      var n = r(2903),
        o = r(2784),
        i = r(127),
        a = r(6112);
      const s = (e, t) => {
        const { defaultStyles: r, defaultDescriptor: s } = t || {},
          l = o.forwardRef((t, o) => {
            const {
                elementDescriptor: l,
                elementId: c,
                sx: u,
                className: d,
                ...p
              } = t,
              { parsedElements: m } = (0, i.M)(),
              f = [s, ...(Array.isArray(l) ? l : [l])].filter((e) => e);
            if (!f.length)
              return (0, n.tZ)(e, { css: u, ...p, className: d, ref: o });
            const h = (0, a.u8)(m, f, c, t),
              g = (0, a.ZS)(h.className, d);
            return (
              h.css.unshift(r, u),
              (0, n.tZ)(e, {
                elementId: c,
                css: h.css,
                className: g,
                ...p,
                ref: o,
              })
            );
          }),
          c = e.displayName || e.name || "Component";
        return (l.displayName = `Customizable${c}`.replace("_", "")), l;
      };
    },
    1149: function (e, t, r) {
      r.d(t, {
        $: function () {
          return s;
        },
      });
      var n = r(2903),
        o = r(2784),
        i = r(3476),
        a = r(4804);
      const s = (e) => {
        const {
            rightIcon: t = a.LZ,
            rightIconSx: r,
            leftIcon: s,
            leftIconSx: l,
            leftIconElementId: c,
            leftIconElementDescriptor: u,
            isLoading: d,
            children: p,
            textElementDescriptor: m,
            textElementId: f,
            spinnerElementDescriptor: h,
            spinnerElementId: g,
            arrowElementDescriptor: v,
            arrowElementId: b,
            textLocalizationKey: y,
            badge: x,
            ...w
          } = e,
          S = (0, o.isValidElement)(s);
        return (0, n.BX)(i.SimpleButton, {
          variant: "outline",
          colorScheme: "neutral",
          block: !0,
          isLoading: d,
          ...w,
          sx: (t) => [
            {
              gap: t.space.$4,
              position: "relative",
              justifyContent: "flex-start",
              borderColor: t.colors.$blackAlpha200,
              "--arrow-opacity": "0",
              "--arrow-transform": `translateX(-${t.space.$2});`,
              "&:hover,&:focus ": {
                "--arrow-opacity": "0.5",
                "--arrow-transform": "translateX(0px);",
              },
            },
            e.sx,
          ],
          children: [
            (d || s) &&
              (0, n.tZ)(i.Flex, {
                as: "span",
                center: !0,
                sx: (e) => ({ flex: `0 0 ${e.space.$5}` }),
                children: d
                  ? (0, n.tZ)(i.Spinner, {
                      elementDescriptor: h,
                      elementId: g,
                      size: "md",
                    })
                  : !S && s
                  ? (0, n.tZ)(i.Icon, {
                      elementDescriptor: u,
                      elementId: c,
                      icon: s,
                      sx: [
                        (e) => ({
                          color: e.colors.$blackAlpha600,
                          width: e.sizes.$5,
                          position: "absolute",
                        }),
                        l,
                      ],
                    })
                  : s,
              }),
            (0, n.BX)(i.Flex, {
              justify: "start",
              align: "center",
              gap: 2,
              sx: { width: "100%", overflow: "hidden" },
              children: [
                (0, n.tZ)(i.Text, {
                  elementDescriptor: m,
                  elementId: f,
                  as: "span",
                  truncate: !0,
                  colorScheme: "inherit",
                  variant: "buttonSmallRegular",
                  localizationKey: y,
                  children: p,
                }),
                x,
              ],
            }),
            (0, n.tZ)(i.Icon, {
              elementDescriptor: v,
              elementId: b,
              icon: t,
              sx: [
                (e) => ({
                  transition: "all 100ms ease",
                  minWidth: e.sizes.$4,
                  minHeight: e.sizes.$4,
                  width: "1em",
                  height: "1em",
                  opacity: "var(--arrow-opacity)",
                  transform: "var(--arrow-transform)",
                }),
                r,
              ],
            }),
          ],
        });
      };
    },
    3332: function (e, t, r) {
      r.d(t, {
        G: function () {
          return l;
        },
        J: function () {
          return c;
        },
      });
      var n = r(2903),
        o = r(2784),
        i = r(3476),
        a = r(9820),
        s = r(1023);
      const l = (e, t) => {
          const r = o.useRef(),
            n = o.useRef(),
            i = e.value,
            { feedback: a, feedbackType: s, onChange: l } = e,
            { length: c = 6 } = t || {},
            [u, d] = o.useState(() =>
              i ? i.split("").slice(0, c) : Array.from({ length: c }, () => "")
            );
          return (
            o.useEffect(() => {
              var e;
              if (u.filter((e) => e).length === c) {
                const t = u.map((e) => e || " ").join("");
                null === (e = n.current) || void 0 === e || e.call(n, t);
              } else {
                const e = u.join("");
                null == l || l({ target: { value: e } });
              }
            }, [u.toString()]),
            {
              otpInputProps: {
                length: c,
                values: u,
                setValues: d,
                feedback: a,
                feedbackType: s,
                ref: r,
              },
              onCodeEntryFinished: (e) => {
                n.current = e;
              },
              reset: () => {
                var e;
                return null === (e = r.current) || void 0 === e
                  ? void 0
                  : e.reset();
              },
            }
          );
        },
        c = o.forwardRef((e, t) => {
          const [r, a] = o.useState(!1),
            l = o.useRef([]),
            c = o.useRef(!1),
            {
              values: p,
              setValues: m,
              isDisabled: f,
              feedback: h,
              feedbackType: g,
              isSuccessfullyFilled: v,
              isLoading: b,
              length: y,
            } = e;
          o.useImperativeHandle(t, () => ({
            reset: () => {
              m(p.map(() => "")), a(!1), setTimeout(() => w(0), 0);
            },
          })),
            o.useLayoutEffect(() => {
              setTimeout(() => w(0), 0);
            }, []),
            o.useEffect(() => {
              h && a(!0);
            }, [h]);
          const x = ({ eventValue: e, inputPosition: t }) => {
              const r = (e || "").split("");
              if (0 === r.length || !r.every((e) => d(e))) return;
              if (r.length === y) return m([...r]), void w(y - 1);
              const n = p.map((e, n) => (n < t ? e : r[n - t] || e));
              m(n), w(t + r.length);
            },
            w = (e) => {
              const t = Math.min(Math.max(0, e), l.current.length - 1),
                r = l.current[t];
              r && (r.focus(), p[t] && r.select());
            },
            S = (e) => (t) => {
              if ((t.preventDefault(), !c.current))
                return w(0), void (c.current = !0);
              w(e);
            },
            _ = (e) => (t) => {
              t.preventDefault(),
                x({ eventValue: t.target.value || "", inputPosition: e });
            },
            C = (e) => (t) => {
              t.preventDefault(), d(t.target.value) && w(e + 1);
            },
            $ = (e) => (t) => {
              t.preventDefault(),
                x({
                  eventValue: t.clipboardData.getData("text/plain") || "",
                  inputPosition: e,
                });
            },
            k = (e) => (t) => {
              switch (t.key) {
                case "Backspace":
                  return (
                    t.preventDefault(),
                    ((e, t) => {
                      const r = [...p];
                      (r[e] = ""), m(r);
                    })(e),
                    void w(e - 1)
                  );
                case "ArrowLeft":
                  return t.preventDefault(), void w(e - 1);
                case "ArrowRight":
                  return t.preventDefault(), void w(e + 1);
                case " ":
                  return void t.preventDefault();
              }
            };
          return (0, n.BX)(i.Flex, {
            elementDescriptor: i.descriptors.otpCodeField,
            isLoading: b,
            hasError: "error" === g,
            direction: "col",
            children: [
              (0, n.BX)(i.Flex, {
                isLoading: b,
                hasError: "error" === g,
                elementDescriptor: i.descriptors.otpCodeFieldInputs,
                gap: 2,
                align: "center",
                sx: { direction: "ltr", width: "max-content" },
                children: [
                  p.map((e, t) =>
                    (0, n.tZ)(
                      u,
                      {
                        elementDescriptor: i.descriptors.otpCodeFieldInput,
                        value: e,
                        onClick: S(t),
                        onChange: _(t),
                        onKeyDown: k(t),
                        onInput: C(t),
                        onPaste: $(t),
                        ref: (e) => (l.current[t] = e),
                        autoFocus: 0 === t || void 0,
                        autoComplete: "one-time-code",
                        "aria-label": `${
                          0 === t ? "Enter verification code. " : ""
                        } Digit ${t + 1}`,
                        isDisabled: f || b || r || v,
                        hasError: "error" === g,
                        isSuccessfullyFilled: v,
                        type: "text",
                        inputMode: "numeric",
                        name: `codeInput-${t}`,
                      },
                      t
                    )
                  ),
                  b &&
                    (0, n.tZ)(i.Spinner, {
                      colorScheme: "neutral",
                      sx: (e) => ({ marginLeft: e.space.$2 }),
                    }),
                ],
              }),
              (0, n.tZ)(s.A, {
                feedback: h,
                feedbackType: g,
                elementDescriptors: {
                  error: i.descriptors.otpCodeFieldErrorText,
                },
              }),
            ],
          });
        }),
        u = o.forwardRef((e, t) => {
          const { isSuccessfullyFilled: r, ...o } = e;
          return (0, n.tZ)(i.Input, {
            ref: t,
            type: "text",
            sx: (t) => ({
              textAlign: "center",
              ...a.common.textVariants(t).xlargeMedium,
              padding: `${t.space.$0x5} 0`,
              boxSizing: "content-box",
              minWidth: "1ch",
              maxWidth: t.sizes.$7,
              borderRadius: t.radii.$none,
              border: "none",
              borderBottom: t.borders.$heavy,
              ...(r
                ? { borderColor: t.colors.$success500 }
                : a.common.borderColor(t, e)),
              backgroundColor: "unset",
              "&:focus": {
                boxShadow: "none",
                borderColor: t.colors.$primary500,
              },
            }),
            ...o,
          });
        }),
        d = (e) => null != e && Number.isInteger(+e);
    },
    6684: function (e, t, r) {
      r.d(t, {
        T: function () {
          return s;
        },
      });
      var n = r(2903),
        o = (r(2784), r(3476)),
        i = r(3332),
        a = r(4089);
      const s = (e) => {
        const {
          subtitle: t,
          title: r,
          isLoading: s,
          success: l,
          codeControl: c,
          onResendCodeClicked: u,
          resendButton: d,
        } = e;
        return (0, n.BX)(o.Col, {
          elementDescriptor: o.descriptors.form,
          gap: 2,
          children: [
            (0, n.tZ)(o.Text, {
              localizationKey: r,
              elementDescriptor: o.descriptors.formHeaderTitle,
              variant: "smallMedium",
            }),
            (0, n.tZ)(o.Text, {
              localizationKey: t,
              elementDescriptor: o.descriptors.formHeaderSubtitle,
              variant: "smallRegular",
              colorScheme: "neutral",
            }),
            (0, n.tZ)(i.J, {
              ...c.otpInputProps,
              isLoading: s,
              isSuccessfullyFilled: l,
            }),
            u &&
              (0, n.tZ)(a.u, {
                elementDescriptor: o.descriptors.formResendCodeLink,
                onClick: u,
                startDisabled: !0,
                isDisabled: l || s,
                showCounter: !l,
                sx: (e) => ({ marginTop: e.space.$6 }),
                localizationKey: d,
              }),
          ],
        });
      };
    },
    1023: function (e, t, r) {
      r.d(t, {
        N: function () {
          return B;
        },
        A: function () {
          return I;
        },
      });
      var n = r(2903),
        o = r(2784),
        i = r(3476),
        a = r(8441),
        s = r(9820),
        l = r(1609),
        c = r(7158);
      const u = (0, o.forwardRef)((e, t) => {
        const { sx: r, groupPreffix: o, groupSuffix: a, ...s } = e,
          l = o
            ? { borderTopLeftRadius: "0", borderBottomLeftRadius: "0" }
            : { borderTopRightRadius: "0", borderBottomRightRadius: "0" },
          c = (e) => ({
            paddingInline: e.space.$2,
            backgroundColor: e.colors.$blackAlpha50,
            borderTopRightRadius: "0",
            borderBottomRightRadius: "0",
            width: "fit-content",
            display: "flex",
            alignItems: "center",
          });
        return (0, n.BX)(i.Flex, {
          elementDescriptor: i.descriptors.formInputGroup,
          direction: "row",
          hasError: s.hasError,
          sx: (e) => ({
            position: "relative",
            borderRadius: e.radii.$md,
            zIndex: 1,
            border: e.borders.$normal,
            borderColor: e.colors.$blackAlpha300,
          }),
          children: [
            o && (0, n.tZ)(i.Text, { sx: c, children: o }),
            (0, n.tZ)(i.Input, {
              maxLength: 25,
              sx: [{ borderColor: "transparent", height: "100%", ...l }, r],
              ref: t,
              ...s,
            }),
            a &&
              (0, n.tZ)(i.Text, { colorScheme: "neutral", sx: c, children: a }),
          ],
        });
      });
      var d = r(9841),
        p = r(8173),
        m = r(7598),
        f = r(4804),
        h = r(1708),
        g = r(3526);
      const v = (0, o.forwardRef)((e, t) => {
        const [r, a] = o.useState(!0),
          { id: s, onChange: c, validatePassword: u = !1, ...v } = e,
          b = (0, o.useRef)(null),
          [y, x] = (0, o.useState)(null),
          {
            userSettings: { passwordSettings: w },
          } = (0, p.useEnvironment)(),
          S = (0, h.Yp)(),
          { t: _ } = (0, i.useLocalizations)(),
          { validatePassword: C } = (0, m.i)(
            { ...w, validatePassword: u },
            {
              onValidationSuccess: () => {
                var e;
                return null === (e = null == S ? void 0 : S.setSuccess) ||
                  void 0 === e
                  ? void 0
                  : e.call(
                      S,
                      _(
                        (0, i.localizationKeys)(
                          "unstable__errors.zxcvbn.goodPassword"
                        )
                      )
                    );
              },
              onValidationError: (e) => {
                var t;
                return null === (t = null == S ? void 0 : S.setError) ||
                  void 0 === t
                  ? void 0
                  : t.call(S, e);
              },
              onValidationWarning: (e) => {
                var t;
                return null === (t = null == S ? void 0 : S.setWarning) ||
                  void 0 === t
                  ? void 0
                  : t.call(S, e);
              },
              onValidationInfo: (e) => {
                var t, r;
                b.current === document.activeElement
                  ? null === (t = null == S ? void 0 : S.setInfo) ||
                    void 0 === t ||
                    t.call(S, e)
                  : null === (r = null == S ? void 0 : S.setError) ||
                    void 0 === r ||
                    r.call(S, e);
              },
              onValidationComplexity: (e) => {
                var t;
                return null ===
                  (t = null == S ? void 0 : S.setHasPassedComplexity) ||
                  void 0 === t
                  ? void 0
                  : t.call(S, e);
              },
            }
          );
        return (0, n.BX)(i.Flex, {
          elementDescriptor: i.descriptors.formFieldInputGroup,
          direction: "col",
          justify: "center",
          sx: { position: "relative" },
          children: [
            (0, n.tZ)(i.Input, {
              ...v,
              onChange: (e) => (
                y && clearTimeout(y),
                x(
                  setTimeout(() => {
                    C(e.target.value);
                  }, d.hz)
                ),
                null == c ? void 0 : c(e)
              ),
              onBlur: (e) => {
                var t;
                null === (t = v.onBlur) || void 0 === t || t.call(v, e),
                  C(e.target.value);
              },
              onFocus: (e) => {
                var t;
                null === (t = v.onFocus) || void 0 === t || t.call(v, e),
                  C(e.target.value);
              },
              ref: (0, l.lq)(t, b),
              type: r ? "password" : "text",
              sx: (e) => ({ paddingRight: e.space.$10 }),
            }),
            (0, n.tZ)(g.h, {
              elementDescriptor: i.descriptors.formFieldInputShowPasswordButton,
              iconElementDescriptor:
                i.descriptors.formFieldInputShowPasswordIcon,
              "aria-label": (r ? "Show" : "Hide") + " password",
              variant: "ghostIcon",
              tabIndex: -1,
              colorScheme: "neutral",
              onClick: () => a((e) => !e),
              sx: (e) => ({
                position: "absolute",
                right: 0,
                marginRight: e.space.$3,
                color: e.colors.$blackAlpha400,
              }),
              icon: r ? f.bA : f.N6,
            }),
          ],
        });
      });
      var b = r(8690),
        y = r(4036);
      const x = [...y.h5.values()].map((e) => ({
          searchTerm: `${e.iso} ${e.name} ${e.code}`,
          value: `${e.iso} ${e.name} ${e.code}`,
          country: e,
        })),
        w = (0, o.forwardRef)((e, t) => {
          const {
              onChange: r,
              value: a,
              locationBasedCountryIso: s,
              sx: c,
              ...u
            } = e,
            d = (0, o.useRef)(null),
            {
              setNumber: p,
              setIso: m,
              setNumberAndIso: f,
              numberWithCode: h,
              iso: g,
              formattedNumber: v,
            } = ((e) => {
              const [t, r] = o.useState(() => {
                  const { number: t } = (0, l.y3)(e.initPhoneWithCode || "");
                  return t;
                }),
                [n, i] = o.useState(
                  (0, l.y3)(e.initPhoneWithCode || "").number
                    ? (0, l.y3)(e.initPhoneWithCode || "").iso
                    : e.locationBasedCountryIso || "us"
                );
              o.useEffect(() => {
                r((0, l.yy)(t));
              }, [n, t]);
              const a = o.useMemo(() => {
                  var e;
                  if (!t) return "";
                  const r =
                    (null === (e = y.h5.get(n)) || void 0 === e
                      ? void 0
                      : e.code) || "1";
                  return "+" + (0, l.yy)(`${r}${t}`);
                }, [n, t]),
                s = o.useMemo(
                  () =>
                    ((e, t) => {
                      if (!e) return "";
                      const r = y.h5.get(t);
                      return (0, l.un)(
                        e,
                        null == r ? void 0 : r.pattern,
                        null == r ? void 0 : r.code
                      );
                    })(t, n),
                  [n, t]
                ),
                c = o.useCallback(
                  (e) => {
                    const { iso: t, number: n } = (0, l.y3)(e);
                    r(n), i(t);
                  },
                  [n, t]
                );
              return {
                setNumber: r,
                setIso: i,
                setNumberAndIso: c,
                iso: n,
                number: t,
                numberWithCode: a,
                formattedNumber: s,
              };
            })({ initPhoneWithCode: a, locationBasedCountryIso: s }),
            w = (0, o.useMemo)(
              () => x.find((e) => e.country.iso === g) || x[0],
              [g]
            );
          return (
            (0, o.useEffect)(() => {
              null == r || r({ target: { value: h } });
            }, [h]),
            (0, n.BX)(i.Flex, {
              elementDescriptor: i.descriptors.phoneInputBox,
              direction: "row",
              center: !0,
              hasError: u.hasError,
              sx: (e) => ({
                position: "relative",
                borderRadius: e.radii.$md,
                zIndex: 1,
                border: e.borders.$normal,
                borderColor: e.colors.$blackAlpha300,
              }),
              children: [
                (0, n.BX)(b.Select, {
                  elementId: "countryCode",
                  value: w.value,
                  options: x,
                  optionBuilder: (e, t, r) =>
                    (0, n.tZ)(S, {
                      sx: (e) => ({
                        ...(r && { backgroundColor: e.colors.$blackAlpha200 }),
                        "&:hover": { backgroundColor: e.colors.$blackAlpha200 },
                      }),
                      country: e.country,
                    }),
                  onChange: (e) => {
                    var t;
                    m(e.country.iso),
                      null === (t = d.current) || void 0 === t || t.focus();
                  },
                  noResultsMessage: "No countries found",
                  searchPlaceholder: "Search country or code",
                  comparator: (e, t) =>
                    t.searchTerm.toLowerCase().includes(e.toLowerCase()),
                  children: [
                    (0, n.tZ)(i.Flex, {
                      sx: { zIndex: 2 },
                      children: (0, n.BX)(b.SelectButton, {
                        sx: (e) => ({
                          backgroundColor: e.colors.$blackAlpha50,
                          border: "none",
                          borderBottomRightRadius: "0",
                          borderTopRightRadius: "0",
                        }),
                        isDisabled: u.isDisabled,
                        children: [
                          (0, n.tZ)(_, { iso: g }),
                          (0, n.BX)(i.Text, {
                            variant: "smallRegular",
                            sx: { paddingLeft: "4px" },
                            children: ["+", w.country.code],
                          }),
                        ],
                      }),
                    }),
                    (0, n.tZ)(b.SelectOptionList, {
                      sx: { width: "100%", padding: "0 0" },
                      containerSx: { gap: 0 },
                    }),
                  ],
                }),
                (0, n.tZ)(i.Input, {
                  value: v,
                  onPaste: (e) => {
                    e.preventDefault();
                    const t = e.clipboardData.getData("text");
                    t.includes("+") ? f(t) : p(t);
                  },
                  onChange: (e) => {
                    const t = e.target.value;
                    t.includes("+") ? f(t) : p(t);
                  },
                  maxLength: 25,
                  type: "tel",
                  sx: [
                    {
                      borderColor: "transparent",
                      height: "100%",
                      borderTopLeftRadius: "0",
                      borderBottomLeftRadius: "0",
                    },
                    c,
                  ],
                  ref: (0, l.lq)(d, t),
                  ...u,
                }),
              ],
            })
          );
        }),
        S = (0, o.memo)((e) => {
          const { country: t, sx: r, ...o } = e;
          return (0, n.BX)(i.Flex, {
            center: !0,
            sx: [
              (e) => ({
                width: "100%",
                gap: e.space.$2,
                padding: `${e.space.$0x5} ${e.space.$4}`,
              }),
              r,
            ],
            ...o,
            children: [
              (0, n.tZ)(_, { iso: t.iso }),
              (0, n.tZ)(i.Text, {
                as: "div",
                variant: "smallRegular",
                sx: { width: "100%" },
                children: t.name,
              }),
              (0, n.BX)(i.Text, {
                variant: "smallRegular",
                colorScheme: "neutral",
                children: ["+", t.code],
              }),
            ],
          });
        }),
        _ = (e) => {
          const [t, r] = (0, o.useState)(!1);
          return (
            (0, o.useLayoutEffect)(() => {
              r(!window.navigator.userAgent.includes("Windows"));
            }, []),
            (0, n.tZ)(n.HY, {
              children: t
                ? (0, n.tZ)(i.Flex, {
                    sx: (e) => ({ fontSize: e.fontSizes.$md }),
                    children: (0, l.uz)(e.iso),
                  })
                : (0, n.tZ)(i.Text, {
                    variant: "smallBold",
                    children: e.iso.toUpperCase(),
                  }),
            })
          );
        },
        C = (0, o.forwardRef)((e, t) => {
          const { __internal_country: r } = (0, p.useCoreClerk)();
          return (0, n.tZ)(w, { ...e, locationBasedCountryIso: r, ref: t });
        }),
        $ = (e) => {
          const { radioOptions: t, ...r } = e;
          return (0, n.tZ)(i.Col, {
            elementDescriptor: i.descriptors.formFieldRadioGroup,
            gap: 2,
            children:
              null == t
                ? void 0
                : t.map((e) => (0, n.tZ)(k, { ...e, inputProps: r }, e.value)),
          });
        },
        k = (e) => {
          const t = (0, o.useId)();
          return (0, n.BX)(i.Flex, {
            elementDescriptor: i.descriptors.formFieldRadioGroupItem,
            align: "start",
            children: [
              (0, n.tZ)(i.Input, {
                elementDescriptor: i.descriptors.formFieldRadioInput,
                ...e.inputProps,
                focusRing: !1,
                id: t,
                sx: [
                  (e) => ({ width: "fit-content", marginTop: e.space.$0x5 }),
                  e.inputProps.sx,
                ],
                type: "radio",
                value: e.value,
                checked: e.value === e.inputProps.value,
              }),
              (0, n.BX)(i.FormLabel, {
                elementDescriptor: i.descriptors.formFieldRadioLabel,
                htmlFor: t,
                sx: (e) => ({
                  padding: `${e.space.$none} ${e.space.$2}`,
                  display: "flex",
                  flexDirection: "column",
                }),
                children: [
                  (0, n.tZ)(i.Text, {
                    elementDescriptor: i.descriptors.formFieldRadioLabelTitle,
                    variant: "regularMedium",
                    localizationKey: e.label,
                  }),
                  e.description &&
                    (0, n.tZ)(i.Text, {
                      elementDescriptor:
                        i.descriptors.formFieldRadioLabelDescription,
                      colorScheme: "neutral",
                      variant: "smallRegular",
                      localizationKey: e.description,
                    }),
                ],
              }),
            ],
          });
        },
        P = ({ feedback: e }) => {
          const [t, r] = (0, o.useState)(0);
          return {
            height: t,
            calculateHeight: (0, o.useCallback)(
              (e) => {
                if (e) {
                  const t = getComputedStyle(e);
                  r(e.scrollHeight + parseInt(t.marginTop.replace("px", "")));
                }
              },
              [e]
            ),
          };
        },
        I = (e) => {
          var t, r, l, c, u, d, p, m, f, h;
          const {
              id: g,
              elementDescriptors: v,
              feedback: b,
              feedbackType: y = "info",
            } = e,
            x = (0, o.useRef)({ a: void 0, b: void 0 }),
            { getFormTextAnimation: w } = (function () {
              const e = (0, a.Tb)();
              return {
                getFormTextAnimation: (0, o.useCallback)(
                  (t, r) => {
                    if (e) return { animation: "none" };
                    const n = (null == r ? void 0 : r.inDelay)
                      ? s.animations.inDelayAnimation
                      : s.animations.inAnimation;
                    return (e) => ({
                      animation: `${t ? n : s.animations.outAnimation} ${
                        e.transitionDuration.$textField
                      } ${e.transitionTiming.$common}`,
                      transition: `height ${e.transitionDuration.$slow} ${e.transitionTiming.$common}`,
                    });
                  },
                  [e]
                ),
              };
            })(),
            S = {
              error: i.descriptors.formFieldErrorText,
              warning: i.descriptors.formFieldWarningText,
              info: i.descriptors.formFieldInfoText,
              success: i.descriptors.formFieldSuccessText,
            },
            _ = (0, o.useMemo)(() => {
              var e;
              const t = x.current;
              let r;
              return (
                (r = (
                  null === (e = t.a) || void 0 === e ? void 0 : e.shouldEnter
                )
                  ? {
                      a: { ...t.a, shouldEnter: !1 },
                      b: { feedback: b, feedbackType: y, shouldEnter: !0 },
                    }
                  : {
                      a: { feedback: b, feedbackType: y, shouldEnter: !0 },
                      b: { ...t.b, shouldEnter: !1 },
                    }),
                (x.current = r),
                r
              );
            }, [b, y]),
            { calculateHeight: C, height: $ } = P({
              feedback:
                (null === (t = _.a) || void 0 === t ? void 0 : t.feedback) ||
                "",
            }),
            { calculateHeight: k, height: I } = P({
              feedback:
                (null === (r = _.b) || void 0 === r ? void 0 : r.feedback) ||
                "",
            }),
            B = (0, o.useRef)(Math.max($, I)),
            R = (0, o.useMemo)(() => {
              const e = Math.max($, I, B.current);
              return (B.current = e), e;
            }, [$, I]),
            T = (e) => {
              var t;
              if (!e) return {};
              const r = (null == v ? void 0 : v[e]) || S[e];
              return {
                elementDescriptor: r,
                elementId: g
                  ? null === (t = null == r ? void 0 : r.setId) || void 0 === t
                    ? void 0
                    : t.call(r, g)
                  : void 0,
              };
            },
            A = {
              error: i.FormErrorText,
              info: i.FormInfoText,
              success: i.FormSuccessText,
              warning: i.FormWarningText,
            },
            z =
              A[
                (null === (l = _.a) || void 0 === l
                  ? void 0
                  : l.feedbackType) || "info"
              ],
            D =
              A[
                (null === (c = _.b) || void 0 === c
                  ? void 0
                  : c.feedbackType) || "info"
              ];
          return (0, n.BX)(i.Box, {
            style: { height: b ? R : 0, position: "relative" },
            sx: [w(!!b)],
            children: [
              (0, n.tZ)(z, {
                ...T(
                  null === (u = _.a) || void 0 === u ? void 0 : u.feedbackType
                ),
                ref: C,
                sx: [
                  () => {
                    var e;
                    return {
                      visibility: (
                        null === (e = _.a) || void 0 === e
                          ? void 0
                          : e.shouldEnter
                      )
                        ? "visible"
                        : "hidden",
                    };
                  },
                  w(
                    !!(null === (d = _.a) || void 0 === d
                      ? void 0
                      : d.shouldEnter),
                    { inDelay: !0 }
                  ),
                ],
                localizationKey:
                  null === (p = _.a) || void 0 === p ? void 0 : p.feedback,
              }),
              (0, n.tZ)(D, {
                ...T(
                  null === (m = _.b) || void 0 === m ? void 0 : m.feedbackType
                ),
                ref: k,
                sx: [
                  () => {
                    var e;
                    return {
                      visibility: (
                        null === (e = _.b) || void 0 === e
                          ? void 0
                          : e.shouldEnter
                      )
                        ? "visible"
                        : "hidden",
                    };
                  },
                  w(
                    !!(null === (f = _.b) || void 0 === f
                      ? void 0
                      : f.shouldEnter),
                    { inDelay: !0 }
                  ),
                ],
                localizationKey:
                  null === (h = _.b) || void 0 === h ? void 0 : h.feedback,
              }),
            ],
          });
        },
        B = (0, o.forwardRef)((e, t) => {
          const { t: r } = (0, i.useLocalizations)(),
            a = (0, c.v)(),
            [s, d] = (0, o.useState)(!1),
            {
              hasPassedComplexity: p,
              infoText: m,
              id: f,
              isRequired: h,
              isOptional: g,
              label: b,
              actionLabel: y,
              onActionClicked: x,
              sx: w,
              placeholder: S,
              icon: _,
              setError: k,
              setSuccess: P,
              feedback: B,
              feedbackType: R,
              setWarning: T,
              setInfo: A,
              setHasPassedComplexity: z,
              clearFeedback: D,
              radioOptions: O,
              groupPreffix: E,
              groupSuffix: Z,
              ...L
            } = e,
            F = e.isDisabled || a.isLoading,
            { validatePassword: M, ...j } = L,
            U = (0, o.useMemo)(() => {
              const t = { password: L, radio: { ...j, radioOptions: O } };
              return E || Z
                ? { ...j, groupPreffix: E, groupSuffix: Z }
                : (e.type && t[e.type]) || j;
            }, [L]),
            N = (({ type: e, groupPreffix: t, groupSuffix: r }) =>
              t || r
                ? u
                : (e && { password: v, tel: C, radio: $ }[e]) || i.Input)({
              type: e.type,
              groupPreffix: E,
              groupSuffix: Z,
            }),
            V = "checkbox" === e.type,
            { debounced: H } = (0, l.V2)({
              feedback: B,
              feedbackType: R,
              isFocused: s,
            }),
            W = y
              ? (0, n.tZ)(i.Link, {
                  localizationKey: y,
                  elementDescriptor: i.descriptors.formFieldAction,
                  elementId: i.descriptors.formFieldLabel.setId(f),
                  isDisabled: F,
                  colorScheme: "primary",
                  onClick: (e) => {
                    e.preventDefault(), null == x || x(e);
                  },
                  children: "string" == typeof y ? y : void 0,
                })
              : null,
            X =
              g && !y
                ? (0, n.tZ)(i.Text, {
                    localizationKey: (0, i.localizationKeys)(
                      "formFieldHintText__optional"
                    ),
                    elementDescriptor: i.descriptors.formFieldHintText,
                    elementId: i.descriptors.formFieldHintText.setId(f),
                    as: "span",
                    colorScheme: "neutral",
                    variant: "smallRegular",
                    isDisabled: F,
                  })
                : null,
            q = _
              ? (0, n.tZ)(i.Flex, {
                  as: "span",
                  title: r((0, i.localizationKeys)("formFieldHintText__slug")),
                  children: (0, n.tZ)(i.Icon, {
                    icon: _,
                    sx: (e) => ({
                      marginLeft: e.space.$0x5,
                      color: e.colors.$blackAlpha400,
                      width: e.sizes.$4,
                      height: e.sizes.$4,
                    }),
                  }),
                })
              : null,
            K = (0, n.tZ)(i.FormLabel, {
              localizationKey: "object" == typeof b ? b : void 0,
              elementDescriptor: i.descriptors.formFieldLabel,
              elementId: i.descriptors.formFieldLabel.setId(f),
              hasError: "error" === H.feedbackType,
              isDisabled: F,
              isRequired: h,
              sx: { display: "flex", alignItems: "center" },
              children: "string" == typeof b ? b : void 0,
            }),
            Y = (0, n.tZ)(N, {
              elementDescriptor: i.descriptors.formFieldInput,
              elementId: i.descriptors.formFieldInput.setId(f),
              hasError: "error" === H.feedbackType,
              isDisabled: F,
              isRequired: h,
              ...U,
              onFocus: (e) => {
                var t;
                null === (t = U.onFocus) || void 0 === t || t.call(U, e), d(!0);
              },
              onBlur: (e) => {
                var t;
                null === (t = U.onBlur) || void 0 === t || t.call(U, e), d(!1);
              },
              ref: t,
              placeholder: r(S),
            });
          return (0, n.BX)(i.FormControl, {
            elementDescriptor: i.descriptors.formField,
            elementId: i.descriptors.formField.setId(f),
            id: f,
            hasError: "error" === H.feedbackType,
            isDisabled: F,
            isRequired: h,
            setError: k,
            setSuccess: P,
            setWarning: T,
            setInfo: A,
            setHasPassedComplexity: z,
            clearFeedback: D,
            sx: w,
            children: [
              V
                ? (0, n.BX)(i.Flex, {
                    direction: "row",
                    children: [
                      Y,
                      (0, n.BX)(i.Flex, {
                        justify: _ ? "start" : "between",
                        align: "center",
                        elementDescriptor: i.descriptors.formFieldLabelRow,
                        elementId: i.descriptors.formFieldLabelRow.setId(f),
                        sx: (e) => ({
                          marginBottom: V ? 0 : e.space.$1,
                          marginLeft: V ? e.space.$1 : 0,
                        }),
                        children: [K, q, X, W],
                      }),
                    ],
                  })
                : (0, n.BX)(n.HY, {
                    children: [
                      (0, n.BX)(i.Flex, {
                        justify: _ ? "start" : "between",
                        align: "center",
                        elementDescriptor: i.descriptors.formFieldLabelRow,
                        elementId: i.descriptors.formFieldLabelRow.setId(f),
                        sx: (e) => ({
                          marginBottom: V ? 0 : e.space.$1,
                          marginLeft: V ? e.space.$1 : 0,
                        }),
                        children: [K, q, X, W],
                      }),
                      Y,
                    ],
                  }),
              (0, n.tZ)(I, { ...H, id: f }),
            ],
          });
        });
    },
    3526: function (e, t, r) {
      r.d(t, {
        h: function () {
          return a;
        },
      });
      var n = r(2903),
        o = r(2784),
        i = r(3476);
      const a = (e) => {
        const {
            children: t,
            icon: r,
            localizationKey: a,
            iconElementDescriptor: s,
            ...l
          } = e,
          { t: c } = (0, i.useLocalizations)(),
          u = c(a),
          d = (0, o.isValidElement)(r)
            ? (0, o.cloneElement)(r, { "aria-hidden": !0, focusable: !1 })
            : (0, n.tZ)(i.Icon, { elementDescriptor: s, icon: r, size: "md" });
        return (0, n.tZ)(i.Button, {
          ...l,
          children: (0, n.BX)(n.HY, { children: [d, u || t] }),
        });
      };
    },
    6465: function (e, t, r) {
      r.d(t, {
        Uh: function () {
          return v;
        },
        ap: function () {
          return _;
        },
        bX: function () {
          return f;
        },
        jh: function () {
          return g;
        },
        l2: function () {
          return y;
        },
        qL: function () {
          return h;
        },
      });
      var n = r(2903),
        o = r(7018),
        i = r(2784),
        a = r(3476),
        s = r(8441),
        l = r(4804),
        c = r(3736),
        u = r(9820),
        d = r(1609),
        p = r(7158),
        m = r(3193);
      const [f, h, g] = (0, o.uH)("NavbarContext"),
        v = (e) => {
          const [t, r] = i.useState(!1),
            o = i.useCallback(() => r(!0), []),
            a = i.useCallback(() => r(!1), []),
            s = i.useMemo(
              () => ({ value: { isOpen: t, open: o, close: a } }),
              [t]
            );
          return (0, n.tZ)(f.Provider, { value: s, children: e.children });
        },
        b = (e) => `#cl-section-${e}`,
        y = (e) => {
          const { contentRef: t, routes: r, header: l } = e,
            [u, p] = i.useState(""),
            { close: m } = h(),
            { navigate: f } = (0, c.useRouter)(),
            { navigateToFlowStart: g } = (0, s.zk)(),
            { t: v } = (0, a.useLocalizations)(),
            y = (0, c.useRouter)();
          (0, o.Gw)(
            function () {
              const e = new IntersectionObserver(
                  (e) => {
                    var t, r;
                    for (const n of e) {
                      const e =
                        null ===
                          (r =
                            null === (t = n.target) || void 0 === t
                              ? void 0
                              : t.id) || void 0 === r
                          ? void 0
                          : r.split("section-")[1];
                      if (n.isIntersecting && e) return p(e);
                    }
                  },
                  { root: t.current, threshold: 1 }
                ),
                n = setInterval(() => {
                  (() => {
                    const n = r
                      .map((e) => e.id)
                      .map(b)
                      .map((e) => {
                        var r;
                        return null === (r = t.current) || void 0 === r
                          ? void 0
                          : r.querySelector(e);
                      })
                      .filter((e) => e);
                    return (
                      0 !== n.length &&
                      (n.forEach((t) => t && e.observe(t)), !0)
                    );
                  })() && clearInterval(n);
                }, 50);
              return () => {
                e.disconnect();
              };
            },
            [y]
          ),
            (0, i.useEffect)(() => {
              r.every((e) => {
                const t = y.currentPath === y.fullPath && "/" === e.path,
                  r = y.matches(e.path);
                return (!t && !r) || (p(e.id), !1);
              });
            }, [y.currentPath]);
          const _ = (0, n.tZ)(a.Col, {
            elementDescriptor: a.descriptors.navbarButtons,
            children: r.map((e) => {
              return (0, n.tZ)(
                S,
                {
                  elementDescriptor: a.descriptors.navbarButton,
                  elementId: a.descriptors.navbarButton.setId(e.id),
                  iconElementDescriptor: a.descriptors.navbarButtonIcon,
                  iconElementId: a.descriptors.navbarButtonIcon.setId(e.id),
                  onClick:
                    ((r = e),
                    (null == r ? void 0 : r.external)
                      ? () => f(r.path)
                      : () =>
                          (async (e) => {
                            var r;
                            if (t.current) {
                              p(e.id),
                                m(),
                                "/" === e.path ? await g() : await f(e.path);
                              const n =
                                null === (r = t.current) || void 0 === r
                                  ? void 0
                                  : r.querySelector(b(e.id));
                              await (0, d._v)(10),
                                null == n ||
                                  n.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                  });
                            }
                          })(r)),
                  icon: e.icon,
                  isActive: u === e.id,
                  children: v(e.name),
                },
                e.id
              );
              var r;
            }),
          });
          return (0, n.BX)(n.HY, {
            children: [
              (0, n.BX)(x, { children: [l, _] }),
              (0, n.BX)(w, { children: [l, _] }),
            ],
          });
        },
        x = (e) =>
          (0, n.tZ)(a.Col, {
            elementDescriptor: a.descriptors.navbar,
            sx: (e) => ({
              flex: `0 0 ${e.space.$60}`,
              maxWidth: e.space.$60,
              borderRight: `${e.borders.$normal} ${e.colors.$blackAlpha300}`,
              padding: `${e.space.$9x5} ${e.space.$6}`,
              [u.mqu.md]: { display: "none" },
              color: e.colors.$colorText,
            }),
            children: e.children,
          }),
        w = (0, p.TJ)((e) => {
          const t = h(),
            {
              floating: r,
              isOpen: o,
              open: l,
              close: c,
              nodeId: p,
              context: f,
            } = (0, s.Sv)({ defaultOpen: !1, autoUpdate: !1 });
          return (
            i.useEffect(() => {
              t.isOpen ? l() : c();
            }, [t.isOpen]),
            i.useEffect(() => {
              o || t.close();
            }, [o]),
            (0, n.tZ)(m.J, {
              nodeId: p,
              context: f,
              isOpen: o,
              order: ["floating", "content"],
              portal: !1,
              children: (0, n.tZ)(a.Col, {
                sx: (e) => ({
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  width: "100%",
                  zIndex: e.zIndices.$navbar,
                  borderRadius: e.radii.$xl,
                  overflow: "hidden",
                  color: e.colors.$colorText,
                }),
                children: (0, n.tZ)(a.Col, {
                  ref: r,
                  elementDescriptor: a.descriptors.navbar,
                  tabIndex: 0,
                  sx: (e) => ({
                    outline: 0,
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    width: e.space.$60,
                    backgroundColor: d.O9.makeSolid(e.colors.$colorBackground),
                    borderTopRightRadius: e.radii.$lg,
                    borderBottomRightRadius: e.radii.$lg,
                    borderRight: `${e.borders.$normal} ${e.colors.$blackAlpha100}`,
                    padding: `${e.space.$9x5} ${e.space.$6}`,
                    animation: `${u.animations.navbarSlideIn} ${e.transitionDuration.$slower} ${e.transitionTiming.$slowBezier}`,
                    boxShadow: e.shadows.$cardDropShadow,
                  }),
                  children: e.children,
                }),
              }),
            })
          );
        }),
        S = (e) => {
          const {
            icon: t,
            children: r,
            isActive: o,
            iconElementDescriptor: i,
            iconElementId: s,
            ...l
          } = e;
          return (0, n.BX)(a.Button, {
            variant: "ghost",
            colorScheme: "neutral",
            textVariant: "buttonRegularMedium",
            isActive: o,
            ...l,
            sx: (e) => ({
              gap: e.space.$4,
              justifyContent: "flex-start",
              backgroundColor: o ? e.colors.$blackAlpha50 : void 0,
              opacity: o ? 1 : 0.6,
            }),
            children: [
              (0, n.tZ)(a.Icon, {
                elementDescriptor: i,
                elementId: s,
                icon: t,
                sx: { opacity: o ? 1 : 0.7 },
              }),
              r,
            ],
          });
        },
        _ = (e) => {
          const { open: t } = g(),
            { t: r } = (0, a.useLocalizations)();
          return t
            ? (0, n.tZ)(a.Flex, {
                elementDescriptor: a.descriptors.navbarMobileMenuRow,
                sx: { display: "none", [u.mqu.md]: { display: "flex" } },
                children: (0, n.BX)(a.Button, {
                  elementDescriptor: a.descriptors.navbarMobileMenuButton,
                  ...e,
                  onClick: t,
                  size: "xs",
                  variant: "ghost",
                  colorScheme: "neutral",
                  sx: (e) => ({
                    color: e.colors.$colorText,
                    gap: e.space.$1x5,
                    width: "fit-content",
                    alignItems: "center",
                  }),
                  children: [
                    (0, n.tZ)(a.Icon, {
                      elementDescriptor:
                        a.descriptors.navbarMobileMenuButtonIcon,
                      icon: l.v2,
                      size: "sm",
                    }),
                    r(
                      (0, a.localizationKeys)("userProfile.mobileButton__menu")
                    ),
                  ],
                }),
              })
            : null;
        };
    },
    4036: function (e, t, r) {
      r.d(t, {
        h5: function () {
          return a;
        },
        nX: function () {
          return s;
        },
        ug: function () {
          return o;
        },
      });
      const n = [
          ["United States", "us", "1", "(...) ...-....", 100],
          ["United Kingdom", "gb", "44", ".... ......", 100],
          ["India", "in", "91", ".....-.....", 100],
          ["Canada", "ca", "1", "(...) ...-....", 100],
          ["Germany", "de", "49", "... .......", 100],
          ["France", "fr", "33", ". .. .. .. ..", 100],
          ["Russia", "ru", "7", "... ...-..-..", 100],
          ["Afghanistan", "af", "93"],
          ["Albania", "al", "355"],
          ["Algeria ", "dz", "213"],
          ["American Samoa", "as", "1684"],
          ["Andorra", "ad", "376"],
          ["Angola", "ao", "244"],
          ["Anguilla", "ai", "1264"],
          ["Antigua and Barbuda", "ag", "1268"],
          ["Argentina", "ar", "54"],
          ["Armenia", "am", "374"],
          ["Aruba", "aw", "297"],
          ["Australia", "au", "61", "... ... ..."],
          ["Austria", "at", "43"],
          ["Azerbaijan", "az", "994"],
          ["Bahamas", "bs", "1242"],
          ["Bahrain", "bh", "973"],
          ["Bangladesh", "bd", "880"],
          ["Barbados", "bb", "1246"],
          ["Belarus", "by", "375"],
          ["Belgium", "be", "32", "... .. .. .."],
          ["Belize", "bz", "501"],
          ["Benin", "bj", "229"],
          ["Bermuda", "bm", "1441"],
          ["Bhutan", "bt", "975"],
          ["Bolivia", "bo", "591"],
          ["Bosnia and Herzegovina", "ba", "387"],
          ["Botswana", "bw", "267"],
          ["Brazil", "br", "55"],
          ["British Indian Ocean Territory", "io", "246"],
          ["British Virgin Islands", "vg", "1284"],
          ["Brunei", "bn", "673"],
          ["Bulgaria", "bg", "359"],
          ["Burkina Faso", "bf", "226"],
          ["Burundi", "bi", "257"],
          ["Cambodia", "kh", "855"],
          ["Cameroon", "cm", "237"],
          ["Cape Verde", "cv", "238"],
          ["Caribbean Netherlands", "bq", "599"],
          ["Cayman Islands", "ky", "1345"],
          ["Central African Republic", "cf", "236"],
          ["Chad", "td", "235"],
          ["Chile", "cl", "56"],
          ["China", "cn", "86", "...-....-...."],
          ["Colombia", "co", "57"],
          ["Comoros", "km", "269"],
          ["Congo", "cd", "243"],
          ["Congo", "cg", "242"],
          ["Cook Islands", "ck", "682"],
          ["Costa Rica", "cr", "506", "....-...."],
          ["Côte d’Ivoire", "ci", "225"],
          ["Croatia", "hr", "385"],
          ["Cuba", "cu", "53"],
          ["Curaçao", "cw", "599"],
          ["Cyprus", "cy", "357"],
          ["Czech Republic", "cz", "420"],
          ["Denmark", "dk", "45", ".. .. .. .."],
          ["Djibouti", "dj", "253"],
          ["Dominica", "dm", "1767"],
          ["Dominican Republic", "do", "1"],
          ["Ecuador", "ec", "593"],
          ["Egypt", "eg", "20"],
          ["El Salvador", "sv", "503", "....-...."],
          ["Equatorial Guinea", "gq", "240"],
          ["Eritrea", "er", "291"],
          ["Estonia", "ee", "372"],
          ["Ethiopia", "et", "251"],
          ["Falkland Islands", "fk", "500"],
          ["Faroe Islands", "fo", "298"],
          ["Fiji", "fj", "679"],
          ["Finland", "fi", "358", ".. ... .. .."],
          ["French Guiana", "gf", "594"],
          ["French Polynesia", "pf", "689"],
          ["Gabon", "ga", "241"],
          ["Gambia", "gm", "220"],
          ["Georgia", "ge", "995"],
          ["Ghana", "gh", "233"],
          ["Gibraltar", "gi", "350"],
          ["Greece", "gr", "30", "... ......."],
          ["Greenland", "gl", "299"],
          ["Grenada", "gd", "1473"],
          ["Guadeloupe", "gp", "590"],
          ["Guam", "gu", "1671"],
          ["Guatemala", "gt", "502", "....-...."],
          ["Guinea", "gn", "224"],
          ["Guinea-Bissau", "gw", "245"],
          ["Guyana", "gy", "592"],
          ["Haiti", "ht", "509", "....-...."],
          ["Honduras", "hn", "504"],
          ["Hong Kong", "hk", "852", ".... ...."],
          ["Hungary", "hu", "36"],
          ["Iceland", "is", "354", "... ...."],
          ["Indonesia", "id", "62"],
          ["Iran", "ir", "98"],
          ["Iraq", "iq", "964"],
          ["Ireland", "ie", "353", ".. ......."],
          ["Israel", "il", "972"],
          ["Italy", "it", "39", "... ......"],
          ["Jamaica", "jm", "1876"],
          ["Japan", "jp", "81", "... .. ...."],
          ["Jordan", "jo", "962"],
          ["Kazakhstan", "kz", "7", "... ...-..-.."],
          ["Kenya", "ke", "254"],
          ["Kiribati", "ki", "686"],
          ["Kuwait", "kw", "965"],
          ["Kyrgyzstan", "kg", "996"],
          ["Laos", "la", "856"],
          ["Latvia", "lv", "371"],
          ["Lebanon", "lb", "961"],
          ["Lesotho", "ls", "266"],
          ["Liberia", "lr", "231"],
          ["Libya", "ly", "218"],
          ["Liechtenstein", "li", "423"],
          ["Lithuania", "lt", "370"],
          ["Luxembourg", "lu", "352"],
          ["Macau", "mo", "853"],
          ["Macedonia", "mk", "389"],
          ["Madagascar", "mg", "261"],
          ["Malawi", "mw", "265"],
          ["Malaysia", "my", "60", "..-....-...."],
          ["Maldives", "mv", "960"],
          ["Mali", "ml", "223"],
          ["Malta", "mt", "356"],
          ["Marshall Islands", "mh", "692"],
          ["Martinique", "mq", "596"],
          ["Mauritania", "mr", "222"],
          ["Mauritius", "mu", "230"],
          ["Mexico", "mx", "52"],
          ["Micronesia", "fm", "691"],
          ["Moldova", "md", "373"],
          ["Monaco", "mc", "377"],
          ["Mongolia", "mn", "976"],
          ["Montenegro", "me", "382"],
          ["Montserrat", "ms", "1664"],
          ["Morocco", "ma", "212"],
          ["Mozambique", "mz", "258"],
          ["Myanmar", "mm", "95"],
          ["Namibia", "na", "264"],
          ["Nauru", "nr", "674"],
          ["Nepal", "np", "977"],
          ["Netherlands", "nl", "31", ".. ........"],
          ["New Caledonia", "nc", "687"],
          ["New Zealand", "nz", "64", "...-...-...."],
          ["Nicaragua", "ni", "505"],
          ["Niger", "ne", "227"],
          ["Nigeria", "ng", "234"],
          ["Niue", "nu", "683"],
          ["Norfolk Island", "nf", "672"],
          ["North Korea", "kp", "850"],
          ["Northern Mariana Islands", "mp", "1670"],
          ["Norway", "no", "47", "... .. ..."],
          ["Oman", "om", "968"],
          ["Pakistan", "pk", "92", "...-......."],
          ["Palau", "pw", "680"],
          ["Palestine", "ps", "970"],
          ["Panama", "pa", "507"],
          ["Papua New Guinea", "pg", "675"],
          ["Paraguay", "py", "595"],
          ["Peru", "pe", "51"],
          ["Philippines", "ph", "63", "... ...."],
          ["Poland", "pl", "48", "...-...-..."],
          ["Portugal", "pt", "351"],
          ["Puerto Rico", "pr", "1"],
          ["Qatar", "qa", "974"],
          ["Réunion", "re", "262"],
          ["Romania", "ro", "40"],
          ["Rwanda", "rw", "250"],
          ["Saint Barthélemy", "bl", "590"],
          ["Saint Helena", "sh", "290"],
          ["Saint Kitts and Nevis", "kn", "1869"],
          ["Saint Lucia", "lc", "1758"],
          ["Saint Martin", "mf", "590"],
          ["Saint Pierre and Miquelon", "pm", "508"],
          ["Saint Vincent and the Grenadines", "vc", "1784"],
          ["Samoa", "ws", "685"],
          ["San Marino", "sm", "378"],
          ["São Tomé and Príncipe", "st", "239"],
          ["Saudi Arabia", "sa", "966"],
          ["Senegal", "sn", "221"],
          ["Serbia", "rs", "381"],
          ["Seychelles", "sc", "248"],
          ["Sierra Leone", "sl", "232"],
          ["Singapore", "sg", "65", "....-...."],
          ["Sint Maarten", "sx", "1721"],
          ["Slovakia", "sk", "421"],
          ["Slovenia", "si", "386"],
          ["Solomon Islands", "sb", "677"],
          ["Somalia", "so", "252"],
          ["South Africa", "za", "27"],
          ["South Korea", "kr", "82"],
          ["South Sudan", "ss", "211"],
          ["Spain", "es", "34", "... ... ..."],
          ["Sri Lanka", "lk", "94"],
          ["Sudan", "sd", "249"],
          ["Suriname", "sr", "597"],
          ["Swaziland", "sz", "268"],
          ["Sweden", "se", "46", ".. ... .. .."],
          ["Switzerland", "ch", "41", ".. ... .. .."],
          ["Syria", "sy", "963"],
          ["Taiwan", "tw", "886"],
          ["Tajikistan", "tj", "992"],
          ["Tanzania", "tz", "255"],
          ["Thailand", "th", "66"],
          ["Timor-Leste", "tl", "670"],
          ["Togo", "tg", "228"],
          ["Tokelau", "tk", "690"],
          ["Tonga", "to", "676"],
          ["Trinidad and Tobago", "tt", "1868"],
          ["Tunisia", "tn", "216"],
          ["Turkey", "tr", "90", "... ... .. .."],
          ["Turkmenistan", "tm", "993"],
          ["Turks and Caicos Islands", "tc", "1649"],
          ["Tuvalu", "tv", "688"],
          ["U.S. Virgin Islands", "vi", "1340"],
          ["Uganda", "ug", "256"],
          ["Ukraine", "ua", "380"],
          ["United Arab Emirates", "ae", "971"],
          ["Uruguay", "uy", "598"],
          ["Uzbekistan", "uz", "998"],
          ["Vanuatu", "vu", "678"],
          ["Vatican City", "va", "39", ".. .... ...."],
          ["Venezuela", "ve", "58"],
          ["Vietnam", "vn", "84"],
          ["Wallis and Futuna", "wf", "681"],
          ["Yemen", "ye", "967"],
          ["Zambia", "zm", "260"],
          ["Zimbabwe", "zw", "263"],
        ],
        o = {
          us: new Set([
            "907",
            "205",
            "251",
            "256",
            "334",
            "479",
            "501",
            "870",
            "480",
            "520",
            "602",
            "623",
            "928",
            "209",
            "213",
            "310",
            "323",
            "408",
            "415",
            "510",
            "530",
            "559",
            "562",
            "619",
            "626",
            "650",
            "661",
            "707",
            "714",
            "760",
            "805",
            "818",
            "831",
            "858",
            "909",
            "916",
            "925",
            "949",
            "951",
            "303",
            "719",
            "970",
            "203",
            "860",
            "202",
            "302",
            "239",
            "305",
            "321",
            "352",
            "386",
            "407",
            "561",
            "727",
            "772",
            "813",
            "850",
            "863",
            "904",
            "941",
            "954",
            "229",
            "404",
            "478",
            "706",
            "770",
            "912",
            "808",
            "319",
            "515",
            "563",
            "641",
            "712",
            "208",
            "217",
            "309",
            "312",
            "618",
            "630",
            "708",
            "773",
            "815",
            "847",
            "219",
            "260",
            "317",
            "574",
            "765",
            "812",
            "316",
            "620",
            "785",
            "913",
            "270",
            "502",
            "606",
            "859",
            "225",
            "318",
            "337",
            "504",
            "985",
            "413",
            "508",
            "617",
            "781",
            "978",
            "301",
            "410",
            "207",
            "231",
            "248",
            "269",
            "313",
            "517",
            "586",
            "616",
            "734",
            "810",
            "906",
            "989",
            "218",
            "320",
            "507",
            "612",
            "651",
            "763",
            "952",
            "314",
            "417",
            "573",
            "636",
            "660",
            "816",
            "228",
            "601",
            "662",
            "406",
            "252",
            "336",
            "704",
            "828",
            "910",
            "919",
            "701",
            "308",
            "402",
            "603",
            "201",
            "609",
            "732",
            "856",
            "908",
            "973",
            "505",
            "575",
            "702",
            "775",
            "212",
            "315",
            "516",
            "518",
            "585",
            "607",
            "631",
            "716",
            "718",
            "845",
            "914",
            "216",
            "330",
            "419",
            "440",
            "513",
            "614",
            "740",
            "937",
            "405",
            "580",
            "918",
            "503",
            "541",
            "215",
            "412",
            "570",
            "610",
            "717",
            "724",
            "814",
            "401",
            "803",
            "843",
            "864",
            "605",
            "423",
            "615",
            "731",
            "865",
            "901",
            "931",
            "210",
            "214",
            "254",
            "281",
            "325",
            "361",
            "409",
            "432",
            "512",
            "713",
            "806",
            "817",
            "830",
            "903",
            "915",
            "936",
            "940",
            "956",
            "972",
            "979",
            "435",
            "801",
            "276",
            "434",
            "540",
            "703",
            "757",
            "804",
            "802",
            "206",
            "253",
            "360",
            "425",
            "509",
            "262",
            "414",
            "608",
            "715",
            "920",
            "304",
            "307",
          ]),
          ca: new Set([
            "204",
            "226",
            "236",
            "249",
            "250",
            "289",
            "306",
            "343",
            "365",
            "387",
            "403",
            "416",
            "418",
            "431",
            "437",
            "438",
            "450",
            "506",
            "514",
            "519",
            "548",
            "579",
            "581",
            "587",
            "604",
            "613",
            "639",
            "647",
            "672",
            "705",
            "709",
            "742",
            "778",
            "780",
            "782",
            "807",
            "819",
            "825",
            "867",
            "873",
            "902",
            "905",
          ]),
        },
        i = ([e, t, r, n = "", o = 0]) => ({
          name: e,
          iso: t,
          code: r,
          pattern: n,
          priority: o,
        }),
        a = n.reduce((e, t) => e.set(t[1], i(t)), new Map()),
        s = n.reduce((e, t) => {
          const r = t[2],
            n = i(t);
          return e.get(r) ? e.get(r).push(n) : e.set(r, [n]), e;
        }, new Map());
    },
    3193: function (e, t, r) {
      r.d(t, {
        J: function () {
          return i;
        },
      });
      var n = r(2903),
        o = r(1646);
      r(2784);
      const i = (e) => {
        const {
          context: t,
          initialFocus: r,
          order: i = ["reference", "content"],
          nodeId: a,
          isOpen: s,
          portal: l = !0,
          children: c,
        } = e;
        return l
          ? (0, n.tZ)(o.mN, {
              id: a,
              children: (0, n.tZ)(o.ll, {
                children:
                  s &&
                  (0, n.tZ)(o.wD, {
                    context: t,
                    initialFocus: r,
                    order: i,
                    children: (0, n.tZ)(n.HY, { children: c }),
                  }),
              }),
            })
          : (0, n.tZ)(o.mN, {
              id: a,
              children:
                s &&
                (0, n.tZ)(o.wD, {
                  context: t,
                  initialFocus: r,
                  order: i,
                  children: (0, n.tZ)(n.HY, { children: c }),
                }),
            });
      };
    },
    353: function (e, t, r) {
      r.d(t, {
        h: function () {
          return i;
        },
      });
      var n = r(2784),
        o = r(8316);
      const i = (e) => {
        const t = n.useRef(document.createElement("div"));
        return (
          n.useEffect(
            () => (
              document.body.appendChild(t.current),
              () => {
                document.body.removeChild(t.current);
              }
            ),
            []
          ),
          (0, o.createPortal)(e.children, t.current)
        );
      };
    },
    3244: function (e, t, r) {
      r.d(t, {
        r: function () {
          return i;
        },
      });
      var n = r(2903),
        o = r(3476);
      const i = (e) =>
        (0, n.tZ)(o.Col, {
          ...e,
          sx: (e) => ({
            boxSizing: "border-box",
            width: "fit-content",
            color: e.colors.$colorText,
            fontFamily: e.fonts.$main,
            fontStyle: e.fontStyles.$normal,
          }),
        });
    },
    8568: function (e, t, r) {
      r.d(t, {
        L: function () {
          return u;
        },
      });
      var n = r(2903),
        o = r(2784),
        i = r(3476),
        a = r(8441),
        s = r(1609),
        l = r(1149),
        c = r(7158);
      const u = o.memo((e) => {
          const {
              oauthCallback: t,
              web3Callback: r,
              enableOAuthProviders: o = !0,
              enableWeb3Providers: l = !0,
            } = e,
            {
              web3Strategies: u,
              authenticatableOauthStrategies: h,
              strategyToDisplayData: g,
            } = (0, a.vO)(),
            v = (0, c.v)(),
            { socialButtonsVariant: b } = (0, i.useAppearance)().parsedLayout,
            y = [...(o ? h : []), ...(l ? u : [])];
          if (!y.length) return null;
          const x =
              "blockButton" === b || ("iconButton" !== b && y.length <= 2),
            w = (e) => async () => {
              v.setLoading(e);
              try {
                e.startsWith("web3_") ? await r(e) : await t(e);
              } catch {
                await (0, s._v)(1e3), v.setIdle();
              }
              await (0, s._v)(5e3), v.setIdle();
            },
            S = x ? f : m,
            _ = x ? p : d;
          return (0, n.tZ)(_, {
            children: y.map((e) =>
              (0, n.tZ)(
                S,
                {
                  id: g[e].id,
                  providerName: g[e].name,
                  onClick: w(e),
                  isLoading: v.loadingMetadata === e,
                  isDisabled: v.isLoading,
                  label: `Continue with ${g[e].name}`,
                  icon: (0, n.tZ)(i.Image, {
                    elementDescriptor: [
                      i.descriptors.providerIcon,
                      i.descriptors.socialButtonsProviderIcon,
                    ],
                    elementId: i.descriptors.socialButtonsProviderIcon.setId(
                      g[e].id
                    ),
                    isLoading: v.loadingMetadata === e,
                    isDisabled: v.isLoading,
                    src: g[e].iconUrl,
                    alt: `Sign in with ${g[e].name}`,
                    sx: (e) => ({
                      width: e.sizes.$5,
                      height: "auto",
                      maxWidth: "100%",
                    }),
                  }),
                },
                e
              )
            ),
          });
        }),
        d = (e) =>
          (0, n.tZ)(i.Grid, {
            elementDescriptor: i.descriptors.socialButtons,
            gap: 2,
            sx: (e) => ({
              gridTemplateColumns: `repeat(auto-fit, minmax(${e.sizes.$12}, 1fr))`,
              gridAutoRows: e.sizes.$12,
            }),
            children: e.children,
          }),
        p = (e) =>
          (0, n.tZ)(i.Grid, {
            elementDescriptor: i.descriptors.socialButtons,
            columns: 1,
            gap: 2,
            children: e.children,
          }),
        m = (e) => {
          const { icon: t, label: r, id: o, providerName: a, ...s } = e;
          return (0, n.tZ)(i.Button, {
            elementDescriptor: i.descriptors.socialButtonsIconButton,
            elementId: i.descriptors.socialButtonsIconButton.setId(o),
            variant: "icon",
            colorScheme: "neutral",
            sx: (e) => ({ padding: 0, borderColor: e.colors.$blackAlpha200 }),
            ...s,
            children: t,
          });
        },
        f = (e) => {
          const { label: t, id: r, providerName: o, sx: a, icon: s, ...c } = e;
          return (0, n.tZ)(l.$, {
            elementDescriptor: i.descriptors.socialButtonsBlockButton,
            elementId: i.descriptors.socialButtonsBlockButton.setId(r),
            textElementDescriptor: i.descriptors.socialButtonsBlockButtonText,
            textElementId: i.descriptors.socialButtonsBlockButtonText.setId(r),
            textLocalizationKey: (0, i.localizationKeys)(
              "socialButtonsBlockButton",
              { provider: o }
            ),
            arrowElementDescriptor: i.descriptors.socialButtonsBlockButtonArrow,
            arrowElementId:
              i.descriptors.socialButtonsBlockButtonArrow.setId(r),
            leftIcon: s,
            sx: [{ textOverflow: "ellipsis", overflow: "hidden" }, a],
            ...c,
            children: t,
          });
        };
    },
    4089: function (e, t, r) {
      r.d(t, {
        u: function () {
          return s;
        },
      });
      var n = r(2903),
        o = r(7018),
        i = r(2784),
        a = r(3476);
      const s = (e) => {
        const { t: t } = (0, a.useLocalizations)(),
          {
            onClick: r,
            throttleTimeInSec: s = 30,
            startDisabled: l,
            children: c,
            localizationKey: u,
            showCounter: d = !0,
            ...p
          } = e,
          [m, f] = i.useState(0),
          h = i.useRef(void 0);
        (0, o.Gw)(() => {
          l && g();
        }, []),
          (0, i.useEffect)(() => () => clearInterval(h.current), []);
        const g = () => {
          f(s),
            (h.current = window.setInterval(() => {
              f((e) => (1 === e && clearInterval(h.current), e - 1));
            }, 1e3));
        };
        return (0, n.BX)(a.Button, {
          variant: "link",
          ...p,
          isDisabled: m > 0 || e.isDisabled,
          onClick: (e) => {
            m || (null == r || r(e), g());
          },
          children: [t(u) || c, m && d ? ` (${m})` : ""],
        });
      };
    },
    7158: function (e, t, r) {
      r.d(t, {
        wu: function () {
          return u;
        },
        w$: function () {
          return h;
        },
        v: function () {
          return d;
        },
        Li: function () {
          return f;
        },
        $p: function () {
          return p;
        },
        TJ: function () {
          return v;
        },
      });
      var n = r(2903),
        o = r(7018),
        i = r(2784),
        a = r(3476),
        s = r(8441);
      const [l, c] = (0, o.uH)("CardState"),
        u = (e) => {
          var t;
          const { translateError: r } = (0, a.useLocalizations)(),
            [o, c] = (0, s.FH)({
              status: "idle",
              metadata: void 0,
              error: r(
                (null ===
                  (t =
                    null === window || void 0 === window
                      ? void 0
                      : window.Clerk) || void 0 === t
                  ? void 0
                  : t.__internal_last_error) || void 0
              ),
            }),
            u = i.useMemo(() => ({ value: { state: o, setState: c } }), [o, c]);
          return (0, n.tZ)(l.Provider, { value: u, children: e.children });
        },
        d = () => {
          const { state: e, setState: t } = c(),
            { translateError: r } = (0, a.useLocalizations)(),
            n = (e) => t((t) => ({ ...t, status: "idle", metadata: e })),
            o = (e) => t((t) => ({ ...t, status: "loading", metadata: e }));
          return {
            setIdle: n,
            setError: (e) => t((t) => ({ ...t, error: r(e) })),
            setLoading: o,
            runAsync: async (e, t) => (
              o(t),
              ("function" == typeof e ? e() : e)
                .then((e) => e)
                .finally(() => n(t))
            ),
            loadingMetadata: "loading" === e.status ? e.metadata : void 0,
            error: e.error ? e.error : void 0,
            isLoading: "loading" === e.status,
            isIdle: "idle" === e.status,
          };
        },
        p = (e) => (t) => (0, n.tZ)(u, { children: (0, n.tZ)(e, { ...t }) }),
        [m, f] = (0, o.uH)("FlowMetadata"),
        h = (e) => {
          const { flow: t, part: r } = e,
            o = i.useMemo(() => ({ value: e }), [t, r]);
          return (0, n.tZ)(m.Provider, { value: o, children: e.children });
        };
      var g = r(1646);
      const v = (e) => (t) =>
        null == (0, g.Zm)()
          ? (0, n.tZ)(g.RB, { children: (0, n.tZ)(e, { ...t }) })
          : (0, n.tZ)(e, { ...t });
    },
    8690: function (e, t, r) {
      r.r(t),
        r.d(t, {
          AccordionItem: function () {
            return fe;
          },
          Action: function () {
            return xt;
          },
          Actions: function () {
            return bt;
          },
          Alert: function () {
            return h;
          },
          ApplicationLogo: function () {
            return Z;
          },
          ArrowBlockButton: function () {
            return re.$;
          },
          Avatar: function () {
            return T;
          },
          AvatarUploader: function () {
            return vt;
          },
          BackLink: function () {
            return u;
          },
          BaseCard: function () {
            return K;
          },
          BlockWithTrailingComponent: function () {
            return _;
          },
          Breadcrumbs: function () {
            return pt;
          },
          Card: function () {
            return X;
          },
          CardAlert: function () {
            return g;
          },
          CardStateProvider: function () {
            return n.wu;
          },
          ClipboardInput: function () {
            return $e;
          },
          CodeControl: function () {
            return z.J;
          },
          ContentPage: function () {
            return mt;
          },
          Divider: function () {
            return ae;
          },
          ErrorCard: function () {
            return ne;
          },
          FileDropArea: function () {
            return xe;
          },
          FlowMetadataProvider: function () {
            return n.w$;
          },
          Footer: function () {
            return f;
          },
          Form: function () {
            return S;
          },
          FormButtonContainer: function () {
            return Tt;
          },
          FormButtons: function () {
            return Rt;
          },
          FormattedPhoneNumber: function () {
            return he;
          },
          FormattedPhoneNumberText: function () {
            return ge;
          },
          FullHeightLoader: function () {
            return Ge;
          },
          Header: function () {
            return d;
          },
          IconButton: function () {
            return L.h;
          },
          IconCircle: function () {
            return ve;
          },
          IdentityPreview: function () {
            return $;
          },
          InformationBox: function () {
            return Lt;
          },
          InputWithIcon: function () {
            return Pe;
          },
          InvisibleRootBox: function () {
            return Ce;
          },
          LoadingCard: function () {
            return ee;
          },
          LoadingCardContainer: function () {
            return Q;
          },
          Menu: function () {
            return je;
          },
          MenuItem: function () {
            return He;
          },
          MenuList: function () {
            return Ve;
          },
          MenuTrigger: function () {
            return Ue;
          },
          Modal: function () {
            return N;
          },
          ModalContext: function () {
            return M;
          },
          NavBar: function () {
            return ut.l2;
          },
          NavbarContext: function () {
            return ut.bX;
          },
          NavbarContextProvider: function () {
            return ut.Uh;
          },
          NavbarMenuButtonRow: function () {
            return ut.ap;
          },
          NavigateToFlowStartButton: function () {
            return At;
          },
          OrganizationAvatar: function () {
            return at;
          },
          OrganizationPreview: function () {
            return lt;
          },
          Pagination: function () {
            return Ye;
          },
          PersonalWorkspacePreview: function () {
            return ct;
          },
          Popover: function () {
            return F.J;
          },
          PopoverCard: function () {
            return Ct;
          },
          PoweredByClerkTag: function () {
            return H;
          },
          PoweredByClerkText: function () {
            return V;
          },
          PreviewButton: function () {
            return Zt;
          },
          ProfileCard: function () {
            return q;
          },
          ProfileCardContent: function () {
            return ft;
          },
          ProfileSection: function () {
            return Dt;
          },
          ReversibleContainer: function () {
            return ce;
          },
          RootBox: function () {
            return we.r;
          },
          SecondaryActions: function () {
            return yt;
          },
          SectionHeader: function () {
            return Ot;
          },
          SectionSubHeader: function () {
            return Et;
          },
          Select: function () {
            return Ae;
          },
          SelectButton: function () {
            return Ze;
          },
          SelectNoResults: function () {
            return Oe;
          },
          SelectOptionList: function () {
            return Ee;
          },
          SocialButtonsReversibleContainerWithDivider: function () {
            return le;
          },
          SuccessPage: function () {
            return zt;
          },
          Tab: function () {
            return nt;
          },
          TabPanel: function () {
            return it;
          },
          TabPanels: function () {
            return ot;
          },
          Tabs: function () {
            return tt;
          },
          TabsList: function () {
            return rt;
          },
          TagInput: function () {
            return kt;
          },
          ThreeDotsMenu: function () {
            return It;
          },
          TileButton: function () {
            return ke;
          },
          TimerButton: function () {
            return D.u;
          },
          UserAvatar: function () {
            return pe;
          },
          UserPreview: function () {
            return me;
          },
          VerificationCodeCard: function () {
            return G;
          },
          VerificationLink: function () {
            return ie;
          },
          VerificationLinkCard: function () {
            return oe;
          },
          _: function () {
            return j;
          },
          fileToBase64: function () {
            return gt;
          },
          useCardState: function () {
            return n.v;
          },
          useCodeControl: function () {
            return z.G;
          },
          useFlowMetadata: function () {
            return n.Li;
          },
          useFormState: function () {
            return w;
          },
          useNavbarContext: function () {
            return ut.qL;
          },
          usePagination: function () {
            return We;
          },
          useUnsafeModalContext: function () {
            return U;
          },
          useUnsafeNavbarContext: function () {
            return ut.jh;
          },
          withAvatarShimmer: function () {
            return Ft;
          },
          withCardStateProvider: function () {
            return n.$p;
          },
          withFloatingTree: function () {
            return n.TJ;
          },
        });
      var n = r(7158),
        o = r(2903),
        i = r(2784),
        a = r(3476),
        s = r(4804),
        l = r(3736);
      const c = (e) => {
          const { to: t, onClick: r, ...n } = e,
            i = (0, l.useRouter)(),
            s = i.resolve(t || i.indexPath);
          return (0, o.tZ)(a.Link, {
            ...n,
            onClick: (e) => (
              e.preventDefault(), r && !t ? r(e) : i.navigate(s.href)
            ),
            href: s.href,
          });
        },
        u = (e) => {
          const {
            boxElementDescriptor: t,
            linkElementDescriptor: r,
            iconElementDescriptor: n,
            ...i
          } = e;
          return (0, o.tZ)(a.Flex, {
            elementDescriptor: t,
            sx: (e) => ({ marginBottom: e.space.$2x5 }),
            children: (0, o.BX)(c, {
              ...i,
              children: [
                (0, o.tZ)(a.Icon, { elementDescriptor: n, icon: s.Y4 }),
                (0, o.tZ)(a.Text, {
                  localizationKey: (0, a.localizationKeys)("backButton"),
                  elementDescriptor: r,
                  colorScheme: "inherit",
                }),
              ],
            }),
          });
        },
        d = {
          Root: i.memo((e) =>
            (0, o.tZ)(a.Col, {
              elementDescriptor: a.descriptors.header,
              gap: 1,
              ...e,
            })
          ),
          Title: i.memo((e) =>
            (0, o.tZ)(a.Heading, {
              elementDescriptor: a.descriptors.headerTitle,
              ...e,
            })
          ),
          Subtitle: i.memo((e) =>
            (0, o.tZ)(a.Text, {
              elementDescriptor: a.descriptors.headerSubtitle,
              variant: "headingRegularRegular",
              colorScheme: "neutral",
              ...e,
            })
          ),
          BackLink: (e) =>
            (0, o.tZ)(u, {
              boxElementDescriptor: a.descriptors.headerBackRow,
              linkElementDescriptor: a.descriptors.headerBackLink,
              iconElementDescriptor: a.descriptors.headerBackIcon,
              ...e,
            }),
        };
      var p = r(9820);
      const m = (e) =>
          (0, o.tZ)(a.Link, {
            elementDescriptor: a.descriptors.footerPagesLink,
            ...e,
            colorScheme: "neutral",
          }),
        f = {
          Root: (e) =>
            (0, o.tZ)(a.Flex, {
              elementDescriptor: a.descriptors.footer,
              ...e,
              justify: "between",
              align: "center",
            }),
          Action: (e) => {
            const { elementId: t, ...r } = e;
            return (0, o.tZ)(a.Flex, {
              elementDescriptor: a.descriptors.footerAction,
              elementId: a.descriptors.footerAction.setId(t),
              ...r,
              gap: 1,
            });
          },
          ActionLink: (e) =>
            (0, o.tZ)(c, {
              elementDescriptor: a.descriptors.footerActionLink,
              ...e,
              colorScheme: "primary",
            }),
          ActionText: (e) =>
            (0, o.tZ)(a.Text, {
              elementDescriptor: a.descriptors.footerActionText,
              ...e,
              as: "span",
              variant: "smallRegular",
              colorScheme: "neutral",
            }),
          Links: i.memo(() => {
            const {
              helpPageUrl: e,
              privacyPageUrl: t,
              termsPageUrl: r,
            } = (0, a.useAppearance)().parsedLayout;
            return (0, o.BX)(a.Flex, {
              elementDescriptor: a.descriptors.footerPages,
              justify: "between",
              sx: (e) => ({ gap: e.space.$3, [p.mqu.xs]: { gap: e.space.$2 } }),
              children: [
                e &&
                  (0, o.tZ)(m, {
                    localizationKey: (0, a.localizationKeys)(
                      "footerPageLink__help"
                    ),
                    elementId: a.descriptors.footerPagesLink.setId("help"),
                    isExternal: !0,
                    href: e,
                  }),
                t &&
                  (0, o.tZ)(m, {
                    localizationKey: (0, a.localizationKeys)(
                      "footerPageLink__privacy"
                    ),
                    elementId: a.descriptors.footerPagesLink.setId("privacy"),
                    isExternal: !0,
                    href: t,
                  }),
                r &&
                  (0, o.tZ)(m, {
                    localizationKey: (0, a.localizationKeys)(
                      "footerPageLink__terms"
                    ),
                    elementId: a.descriptors.footerPagesLink.setId("terms"),
                    isExternal: !0,
                    href: r,
                  }),
              ],
            });
          }),
          Link: m,
        },
        h = (e) => {
          const {
            children: t,
            title: r,
            subtitle: n,
            variant: i = "warning",
            ...s
          } = e;
          return t || r || n
            ? (0, o.BX)(a.Alert, {
                elementDescriptor: a.descriptors.alert,
                elementId: a.descriptors.alert.setId(i),
                ...s,
                children: [
                  (0, o.tZ)(a.AlertIcon, {
                    elementId: a.descriptors.alert.setId(i),
                    elementDescriptor: a.descriptors.alertIcon,
                    variant: i,
                    colorScheme: i,
                    sx: { flexShrink: "0" },
                  }),
                  (0, o.BX)(a.Col, {
                    elementDescriptor: a.descriptors.alertTextContainer,
                    elementId: a.descriptors.alertTextContainer.setId(i),
                    gap: 1,
                    children: [
                      (0, o.tZ)(a.Text, {
                        elementDescriptor: a.descriptors.alertText,
                        elementId: a.descriptors.alert.setId(i),
                        colorScheme: "neutral",
                        variant: "smallRegular",
                        localizationKey: r,
                        children: t,
                      }),
                      n &&
                        (0, o.tZ)(a.Text, {
                          elementDescriptor: a.descriptors.alertText,
                          elementId: a.descriptors.alert.setId(i),
                          colorScheme: "neutral",
                          variant: "smallRegular",
                          localizationKey: n,
                        }),
                    ],
                  }),
                ],
              })
            : null;
        },
        g = i.memo((e) =>
          (0, o.tZ)(h, {
            variant: "danger",
            sx: (e) => ({
              willChange: "transform, opacity, height",
              animation: `${p.animations.textInBig} ${e.transitionDuration.$slow}`,
            }),
            ...e,
          })
        );
      var v = r(7018),
        b = r(8441),
        y = r(1023);
      const [x, w] = (0, v.uH)("FormState"),
        S = {
          Root: (e) => {
            const t = (0, n.v)(),
              r = (0, b._m)(),
              [s, l] = (0, i.useState)(!1),
              c = i.useMemo(
                () => ({
                  value: {
                    isLoading: r.isLoading,
                    isDisabled: t.isLoading || r.isLoading,
                    submittedWithEnter: s,
                  },
                }),
                [t.isLoading, r.isLoading, s]
              );
            return (0, o.tZ)(x.Provider, {
              value: c,
              children: (0, o.BX)(a.Form, {
                elementDescriptor: a.descriptors.form,
                gap: 4,
                ...e,
                onSubmit: async (n) => {
                  if ((n.preventDefault(), n.stopPropagation(), e.onSubmit))
                    try {
                      t.setLoading(),
                        r.setLoading(),
                        l(!0),
                        await e.onSubmit(n);
                    } finally {
                      t.setIdle(), r.setIdle();
                    }
                },
                children: [
                  (0, o.tZ)("button", {
                    type: "submit",
                    "aria-hidden": !0,
                    style: { visibility: "hidden", position: "absolute" },
                  }),
                  e.children,
                ],
              }),
            });
          },
          ControlRow: (e) => {
            const { elementId: t, ...r } = e;
            return (0, o.tZ)(a.Flex, {
              elementDescriptor: a.descriptors.formFieldRow,
              elementId: a.descriptors.formFieldRow.setId(t),
              justify: "between",
              gap: 4,
              ...r,
            });
          },
          Control: y.N,
          SubmitButton: (e) => {
            const { isLoading: t, isDisabled: r } = w();
            return (0, o.tZ)(o.HY, {
              children: (0, o.tZ)(a.Button, {
                elementDescriptor: a.descriptors.formButtonPrimary,
                block: !0,
                textVariant: "buttonExtraSmallBold",
                isLoading: t,
                isDisabled: r,
                type: "submit",
                ...e,
                localizationKey:
                  e.localizationKey ||
                  (0, a.localizationKeys)("formButtonPrimary"),
              }),
            });
          },
          ResetButton: (e) => {
            const { isLoading: t, isDisabled: r } = w();
            return (0, o.tZ)(o.HY, {
              children: (0, o.tZ)(a.Button, {
                elementDescriptor: a.descriptors.formButtonReset,
                block: !0,
                variant: "ghost",
                textVariant: "buttonExtraSmallBold",
                type: "reset",
                isDisabled: t || r,
                ...e,
              }),
            });
          },
        },
        _ = (e) => {
          const {
            isLoading: t,
            children: r,
            trailingComponent: n,
            textElementDescriptor: i,
            textElementId: s,
            textLocalizationKey: l,
            badge: c,
            ...u
          } = e;
          return (0, o.BX)(a.Box, {
            isLoading: t,
            ...u,
            sx: (t) => [
              {
                borderRadius: t.radii.$md,
                display: "inline-flex",
                alignItems: "center",
                gap: t.space.$4,
                position: "relative",
                justifyContent: "flex-start",
                borderColor: t.colors.$blackAlpha200,
              },
              e.sx,
            ],
            children: [
              (0, o.BX)(a.Flex, {
                justify: "start",
                align: "center",
                gap: 2,
                sx: { flexGrow: "1", overflow: "hidden" },
                children: [
                  (0, o.tZ)(a.Text, {
                    elementDescriptor: i,
                    elementId: s,
                    as: "span",
                    truncate: !0,
                    colorScheme: "inherit",
                    variant: "buttonSmallRegular",
                    localizationKey: l,
                    children: r,
                  }),
                  c,
                ],
              }),
              n,
            ],
          });
        };
      var C = r(1609);
      const $ = (e) => {
          const {
              avatarUrl:
                t = "https://img.clerk.com/static/avatar_placeholder.jpeg",
              identifier: r,
              onClick: n,
              ...l
            } = e,
            c = i.useRef({ avatarUrl: t, identifier: (0, C.HT)(r) }),
            u =
              n &&
              (0, o.tZ)(a.Button, {
                elementDescriptor: a.descriptors.identityPreviewEditButton,
                variant: "ghostIcon",
                onClick: n,
                "aria-label": "Edit",
                children: (0, o.tZ)(a.Icon, {
                  elementDescriptor:
                    a.descriptors.identityPreviewEditButtonIcon,
                  icon: s.ET,
                }),
              });
          if (!c.current.identifier)
            return (0, o.BX)(R, { ...l, children: [(0, o.tZ)(B, {}), u] });
          if (
            (0, C.Sj)(c.current.identifier) ||
            !c.current.identifier.startsWith("+")
          )
            return (0, o.BX)(R, {
              ...l,
              children: [(0, o.tZ)(P, { ...c.current }), u],
            });
          const d = (0, C.y3)(c.current.identifier || ""),
            p = (0, C.uz)(d.iso);
          return (0, o.BX)(R, {
            ...l,
            children: [
              (0, o.tZ)(I, { identifier: c.current.identifier, flag: p }),
              u,
            ],
          });
        },
        k = (e) =>
          (0, o.tZ)(a.Text, {
            elementDescriptor: a.descriptors.identityPreviewText,
            variant: "smallRegular",
            colorScheme: "neutral",
            truncate: !0,
            ...e,
          }),
        P = (e) =>
          (0, o.BX)(o.HY, {
            children: [
              (0, o.tZ)(pe, {
                boxElementDescriptor: a.descriptors.identityPreviewAvatarBox,
                imageElementDescriptor:
                  a.descriptors.identityPreviewAvatarImage,
                avatarUrl: e.avatarUrl,
                size: (e) => e.sizes.$5,
              }),
              (0, o.tZ)(k, { children: e.identifier }),
            ],
          }),
        I = (e) =>
          (0, o.BX)(o.HY, {
            children: [
              (0, o.tZ)(a.Text, {
                sx: (e) => ({ fontSize: e.fontSizes.$sm }),
                children: e.flag,
              }),
              (0, o.tZ)(k, { children: e.identifier }),
            ],
          }),
        B = () =>
          (0, o.BX)(o.HY, {
            children: [
              (0, o.tZ)(a.Icon, {
                icon: s.hc,
                sx: (e) => ({ color: e.colors.$blackAlpha700 }),
              }),
              (0, o.tZ)(k, { children: "Authenticator app" }),
            ],
          }),
        R = (e) =>
          (0, o.tZ)(a.Flex, {
            elementDescriptor: a.descriptors.identityPreview,
            align: "center",
            gap: 2,
            sx: (e) => ({
              minHeight: e.space.$9x5,
              maxWidth: "fit-content",
              backgroundColor: e.colors.$blackAlpha20,
              padding: `${e.space.$1x5} ${e.space.$4}`,
              borderRadius: e.radii.$2xl,
              border: `${e.borders.$normal} ${e.colors.$blackAlpha200}`,
            }),
            ...e,
          }),
        T = (e) => {
          const {
              size: t = () => 26,
              title: r,
              initials: n,
              imageUrl: s,
              rounded: l = !0,
              imageFetchSize: c = 80,
              sx: u,
              boxElementDescriptor: d,
              imageElementDescriptor: p,
            } = e,
            [m, f] = i.useState(!1),
            h =
              !n || (s && !m)
                ? (0, o.tZ)(a.Image, {
                    elementDescriptor: [p, a.descriptors.avatarImage],
                    title: r,
                    alt: r,
                    src: s || "",
                    width: "100%",
                    height: "100%",
                    sx: { objectFit: "cover" },
                    onError: () => f(!0),
                    size: c,
                  })
                : (0, o.tZ)(A, { initials: n });
          return (0, o.BX)(a.Flex, {
            elementDescriptor: [d, a.descriptors.avatarBox],
            sx: [
              (e) => ({
                flexShrink: 0,
                borderRadius: l ? e.radii.$circle : e.radii.$md,
                overflow: "hidden",
                width: t(e),
                height: t(e),
                backgroundColor: e.colors.$avatarBackground,
                backgroundClip: "padding-box",
                position: "relative",
                boxShadow: "var(--cl-shimmer-hover-shadow)",
                transition: `box-shadow ${e.transitionDuration.$slower} ${e.transitionTiming.$easeOut}`,
              }),
              u,
            ],
            children: [
              h,
              (0, o.tZ)(a.Box, {
                sx: (e) => ({
                  overflow: "hidden",
                  background: e.colors.$colorShimmer,
                  position: "absolute",
                  width: "25%",
                  height: "100%",
                  transition: `all ${e.transitionDuration.$slower} ${e.transitionTiming.$easeOut}`,
                  transform:
                    "var(--cl-shimmer-hover-transform, skewX(-45deg) translateX(-300%))",
                  ":after": {
                    display: "block",
                    boxSizing: "border-box",
                    content: "''",
                    position: "absolute",
                    width: "400%",
                    height: "100%",
                    transform:
                      "var(--cl-shimmer-hover-after-transform, skewX(45deg) translateX(75%))",
                    transition: `all ${e.transitionDuration.$slower} ${e.transitionTiming.$easeOut}`,
                    border: e.borders.$heavy,
                    borderColor: e.colors.$colorShimmer,
                    borderRadius: l ? e.radii.$circle : e.radii.$md,
                  },
                }),
              }),
            ],
          });
        },
        A = (e) => {
          const t = e.initials;
          return (0, o.tZ)(a.Text, {
            as: "span",
            sx: { ...p.common.centeredFlex("inline-flex"), width: "100%" },
            children: t,
          });
        };
      var z = r(3332),
        D = r(4089),
        O = r(8173);
      const E = (e, t) => {
          const r = 16 * Number.parseFloat(t.replace("rem", ""));
          if (!e.current) return r;
          const n = e.current.naturalWidth / e.current.naturalHeight;
          let o = `${r}px`;
          return (
            n <= 1
              ? (o = 2 * r + "px")
              : n > 1 && n <= 2 && (o = (2 * r) / n + "px"),
            o
          );
        },
        Z = (e) => {
          const t = i.useRef(null),
            [r, n] = i.useState(!1),
            {
              logoImageUrl: s,
              applicationName: l,
              homeUrl: u,
            } = (0, O.useEnvironment)().displayConfig,
            { parsedLayout: d } = (0, a.useAppearance)(),
            p = d.logoImageUrl || s,
            m = d.logoLinkUrl || u;
          if (!p) return null;
          const f = (0, o.tZ)(a.Image, {
            ref: t,
            elementDescriptor: a.descriptors.logoImage,
            alt: l,
            src: p,
            size: 200,
            onLoad: () => n(!0),
            sx: { display: r ? "inline-block" : "none", height: "100%" },
          });
          return (0, o.tZ)(a.Flex, {
            elementDescriptor: a.descriptors.logoBox,
            ...e,
            sx: [
              (e) => ({ height: E(t, e.sizes.$6), objectFit: "cover" }),
              e.sx,
            ],
            children: m ? (0, o.tZ)(c, { to: m, children: f }) : f,
          });
        };
      var L = r(3526),
        F = r(3193);
      const [M, j, U] = (0, v.uH)("ModalContext"),
        N = (0, n.TJ)((e) => {
          const {
              handleClose: t,
              handleOpen: r,
              contentSx: n,
              containerSx: s,
            } = e,
            { disableScroll: l, enableScroll: c } = (0, b.Pr)(document.body),
            u = (0, i.useRef)(null),
            {
              floating: d,
              isOpen: m,
              context: f,
              nodeId: h,
              toggle: g,
            } = (0, b.Sv)({
              defaultOpen: !0,
              autoUpdate: !1,
              outsidePress: (e) => e.target === u.current,
            });
          i.useEffect(() => {
            m ? null == r || r() : null == t || t();
          }, [m]),
            (0, v.Gw)(() => (l(), () => c()));
          const y = i.useMemo(() => ({ value: { toggle: g } }), [g]);
          return (0, o.tZ)(F.J, {
            nodeId: h,
            context: f,
            isOpen: m,
            order: ["floating", "content"],
            children: (0, o.tZ)(M.Provider, {
              value: y,
              children: (0, o.tZ)(a.Flex, {
                "aria-hidden": !0,
                ref: u,
                elementDescriptor: a.descriptors.modalBackdrop,
                sx: [
                  (e) => ({
                    animation: `${p.animations.fadeIn} 150ms ${e.transitionTiming.$common}`,
                    zIndex: e.zIndices.$modal,
                    backgroundColor: e.colors.$modalBackdrop,
                    alignItems: "flex-start",
                    justifyContent: "center",
                    overflow: "auto",
                    width: "100vw",
                    height: ["100vh", "-webkit-fill-available"],
                    position: "fixed",
                    left: 0,
                    top: 0,
                  }),
                  s,
                ],
                children: (0, o.tZ)(a.Flex, {
                  elementDescriptor: a.descriptors.modalContent,
                  ref: d,
                  tabIndex: 0,
                  "aria-modal": "true",
                  role: "dialog",
                  sx: [
                    (e) => ({
                      position: "relative",
                      outline: 0,
                      animation: `${p.animations.modalSlideAndFade} 180ms ${e.transitionTiming.$easeOut}`,
                      margin: `${e.space.$16} 0`,
                      [p.mqu.sm]: { margin: `${e.space.$10} 0` },
                    }),
                    n,
                  ],
                  children: e.children,
                }),
              }),
            }),
          });
        }),
        V = i.memo(() => {
          const { branded: e } = (0, O.useEnvironment)().displayConfig;
          return (0, o.tZ)(a.Flex, {
            gap: 1,
            justify: "center",
            sx: (e) => ({ color: e.colors.$blackAlpha300 }),
            children: e
              ? (0, o.BX)(o.HY, {
                  children: [
                    (0, o.tZ)(a.Text, {
                      variant: "smallMedium",
                      sx: { color: "inherit" },
                      children: "Secured by",
                    }),
                    (0, o.tZ)(W, {}),
                  ],
                })
              : null,
          });
        }),
        H = i.memo(
          i.forwardRef((e, t) => {
            const { branded: r } = (0, O.useEnvironment)().displayConfig,
              n = (e) => ({
                left: "-1px",
                top: e.radii.$lg,
                bottom: "unset",
                transform: "rotate(-90deg) translateX(-10rem)",
                borderRadius: `${e.radii.$md} ${e.radii.$md} 0 0`,
                borderTopColor: e.colors.$whiteAlpha200,
              }),
              i = (e) => ({
                left: 0,
                top: "unset",
                bottom: "-1px",
                transform: "translateX(2rem) translateY(100%)",
                borderRadius: `0 0 ${e.radii.$md} ${e.radii.$md}`,
                borderTopColor: "transparent",
              });
            return r
              ? (0, o.BX)(a.Flex, {
                  gap: 2,
                  align: "center",
                  sx: (e) => ({
                    border: e.borders.$normal,
                    borderColor: e.colors.$whiteAlpha200,
                    color: e.colors.$colorTextOnPrimaryBackground,
                    backgroundColor: e.colors.$primary500,
                    padding: `${e.space.$1x5} ${e.space.$4}`,
                    position: "absolute",
                    transformOrigin: "left bottom",
                    ...n(e),
                    [p.mqu.sm]: { ...i(e) },
                  }),
                  ...e,
                  ref: t,
                  children: [
                    (0, o.tZ)(a.Text, {
                      variant: "extraSmallRegular",
                      sx: (e) => ({
                        color: "inherit",
                        letterSpacing: e.space.$none,
                        fontSize: "0.625rem",
                      }),
                      children: "Secured by",
                    }),
                    (0, o.tZ)(W, {}),
                  ],
                })
              : null;
          })
        ),
        W = () =>
          (0, o.tZ)(a.Link, {
            href: "https://www.clerk.com?utm_source=clerk&utm_medium=components",
            colorScheme: "neutral",
            sx: { color: "inherit", "&:hover": { color: "inherit" } },
            isExternal: !0,
            "aria-label": "Clerk logo",
            children: (0, o.tZ)(a.Icon, {
              icon: s.cN,
              sx: (e) => ({
                width: e.sizes.$12,
                height: e.sizes.$3x5,
                transform: "translateY(1px)",
              }),
            }),
          }),
        X = i.forwardRef((e, t) => {
          const { sx: r, children: i, ...s } = e,
            l = (0, a.useAppearance)(),
            c = (0, n.Li)(),
            { branded: u } = (0, O.useEnvironment)().displayConfig;
          return (0, o.BX)(o.HY, {
            children: [
              "outside" === l.parsedLayout.logoPlacement &&
                (0, o.tZ)(Z, {
                  sx: (e) => ({
                    margin: u
                      ? `0 ${e.space.$7} ${e.space.$8} ${e.space.$7}`
                      : void 0,
                    [p.mqu.sm]: { margin: `0 0 ${e.space.$7} 0` },
                  }),
                }),
              (0, o.BX)(K, {
                elementDescriptor: a.descriptors.card,
                className: (0, a.generateFlowPartClassname)(c),
                gap: 8,
                ...s,
                sx: [
                  (e) => ({
                    width: e.sizes.$100,
                    maxWidth: `calc(100vw - ${e.sizes.$20})`,
                    margin: u ? `0 ${e.space.$7}` : void 0,
                    [p.mqu.sm]: {
                      maxWidth: `calc(100vw - ${e.sizes.$3})`,
                      margin: u ? `0 0 ${e.space.$7} 0` : "0",
                    },
                    padding: `${e.space.$9x5} ${e.space.$8} ${e.space.$12} ${e.space.$8}`,
                    [p.mqu.xs]: {
                      padding: `${e.space.$8} ${e.space.$5} ${e.space.$10} ${e.space.$5}`,
                    },
                  }),
                  r,
                ],
                ref: t,
                children: [
                  "inside" === l.parsedLayout.logoPlacement && (0, o.tZ)(Z, {}),
                  i,
                  u && (0, o.tZ)(H, {}),
                ],
              }),
            ],
          });
        }),
        q = i.forwardRef((e, t) => {
          const { sx: r, children: n, ...i } = e,
            { branded: a } = (0, O.useEnvironment)().displayConfig;
          return (0, o.BX)(K, {
            direction: "row",
            sx: [
              (e) => ({
                padding: 0,
                width: e.sizes.$220,
                maxWidth: `calc(100vw - ${e.sizes.$20})`,
                margin: a ? `0 ${e.space.$7}` : void 0,
                [p.mqu.sm]: {
                  maxWidth: `calc(100vw - ${e.sizes.$3})`,
                  margin: a ? `0 0 ${e.space.$7} 0` : "0",
                },
              }),
              r,
            ],
            ...i,
            ref: t,
            children: [n, a && (0, o.tZ)(H, {})],
          });
        }),
        K = i.forwardRef((e, t) => {
          const { children: r, sx: i, ...l } = e,
            c = (0, n.Li)(),
            { toggle: u } = U();
          return (0, o.BX)(a.Flex, {
            direction: "col",
            className: (0, a.generateFlowPartClassname)(c),
            ...l,
            elementDescriptor: [a.descriptors.card, e.elementDescriptor],
            sx: [
              (e) => ({
                willChange: "transform, opacity, height",
                borderRadius: e.radii.$xl,
                backgroundColor: e.colors.$colorBackground,
                transitionProperty: e.transitionProperty.$common,
                transitionDuration: "200ms",
                boxShadow: e.shadows.$cardDropShadow,
                border: "1px solid transparent",
              }),
              i,
            ],
            ref: t,
            children: [
              u &&
                (0, o.tZ)(L.h, {
                  elementDescriptor: a.descriptors.modalCloseButton,
                  variant: "ghost",
                  colorScheme: "neutral",
                  "aria-label": "Close modal",
                  onClick: u,
                  icon: (0, o.tZ)(a.Icon, { icon: s.x8, size: "sm" }),
                  sx: (e) => ({
                    zIndex: e.zIndices.$modal,
                    opacity: e.opacity.$inactive,
                    ":hover": { opacity: 0.8 },
                    position: "absolute",
                    top: e.space.$3,
                    padding: e.space.$3,
                    right: e.space.$3,
                  }),
                }),
              r,
            ],
          });
        });
      var Y = r(6684);
      const G = (e) => {
        const { showAlternativeMethods: t = !0, children: r } = e,
          [s, l] = i.useState(!1),
          c = (0, b._m)(),
          u = (0, C.Yp)("code", ""),
          p = (0, z.G)(u),
          m = (0, n.v)(),
          h = async () => {
            l(!0), await (0, C._v)(750);
          },
          v = async (e) => {
            (0, C.S3)(e, [u], m.setError),
              c.setIdle(),
              await (0, C._v)(750),
              p.reset();
          };
        p.onCodeEntryFinished((t) => {
          c.setLoading(),
            u.setError(void 0),
            e.onCodeEntryFinishedAction(t, h, v);
        });
        const y = e.onResendCodeClicked
          ? (t) => {
              var r;
              p.reset(),
                null === (r = e.onResendCodeClicked) ||
                  void 0 === r ||
                  r.call(e, t);
            }
          : void 0;
        return (0, o.BX)(X, {
          children: [
            (0, o.tZ)(g, { children: m.error }),
            (0, o.BX)(d.Root, {
              children: [
                e.onBackLinkClicked &&
                  (0, o.tZ)(d.BackLink, { onClick: e.onBackLinkClicked }),
                (0, o.tZ)(d.Title, { localizationKey: e.cardTitle }),
                (0, o.tZ)(d.Subtitle, { localizationKey: e.cardSubtitle }),
              ],
            }),
            r,
            (0, o.tZ)($, {
              identifier: e.safeIdentifier,
              avatarUrl: e.profileImageUrl,
              onClick: e.onBackLinkClicked
                ? void 0
                : e.onIdentityPreviewEditClicked,
            }),
            (0, o.tZ)(a.Col, {
              elementDescriptor: a.descriptors.main,
              gap: 8,
              children: (0, o.tZ)(Y.T, {
                title: e.formTitle,
                subtitle: e.formSubtitle,
                resendButton: e.resendButton,
                isLoading: c.isLoading,
                success: s,
                codeControl: p,
                onResendCodeClicked: y,
              }),
            }),
            t &&
              e.onShowAlternativeMethodsClicked &&
              (0, o.BX)(f.Root, {
                children: [
                  (0, o.tZ)(f.Action, {
                    elementId: "alternativeMethods",
                    children: (0, o.tZ)(f.ActionLink, {
                      localizationKey: (0, a.localizationKeys)(
                        "footerActionLink__useAnotherMethod"
                      ),
                      onClick: e.onShowAlternativeMethodsClicked,
                    }),
                  }),
                  (0, o.tZ)(f.Links, {}),
                ],
              }),
          ],
        });
      };
      var J = r(373);
      const Q = ({ children: e }) =>
          (0, o.BX)(a.Flex, {
            direction: "col",
            center: !0,
            elementDescriptor: a.descriptors.main,
            gap: 8,
            sx: (e) => ({ marginTop: e.space.$16, marginBottom: e.space.$14 }),
            children: [
              (0, o.tZ)(J.$j, { size: "xl", colorScheme: "primary" }),
              e,
            ],
          }),
        ee = (0, n.$p)(() => {
          const e = (0, n.v)();
          return (0, o.BX)(X, {
            children: [(0, o.tZ)(g, { children: e.error }), (0, o.tZ)(Q, {})],
          });
        });
      var te = r(8150),
        re = r(1149);
      const ne = (e) => {
          const { onBackLinkClick: t } = e,
            r = (0, n.v)(),
            i = (0, te.H)();
          return (0, o.tZ)(a.Flow.Part, {
            part: "havingTrouble",
            children: (0, o.BX)(X, {
              children: [
                (0, o.tZ)(g, { children: r.error }),
                (0, o.BX)(d.Root, {
                  children: [
                    t && (0, o.tZ)(d.BackLink, { onClick: t }),
                    (0, o.tZ)(d.Title, {
                      localizationKey: e.cardTitle || "Error",
                    }),
                    e.cardSubtitle &&
                      (0, o.tZ)(d.Subtitle, {
                        localizationKey: e.cardSubtitle,
                      }),
                  ],
                }),
                (0, o.BX)(a.Flex, {
                  direction: "col",
                  elementDescriptor: a.descriptors.main,
                  gap: 4,
                  children: [
                    e.message &&
                      (0, o.tZ)(a.Text, {
                        variant: "smallRegular",
                        colorScheme: "neutral",
                        localizationKey: e.message,
                      }),
                    (0, o.tZ)(a.Text, {
                      variant: "smallRegular",
                      colorScheme: "neutral",
                      localizationKey: (0, a.localizationKeys)(
                        "signIn.alternativeMethods.getHelp.content"
                      ),
                    }),
                    (0, o.tZ)(re.$, {
                      textLocalizationKey: (0, a.localizationKeys)(
                        "signIn.alternativeMethods.getHelp.blockButton__emailSupport"
                      ),
                      onClick: () => {
                        window.location.href = `mailto:${i}`;
                      },
                      leftIcon: (0, o.tZ)(a.Icon, {
                        icon: s.GT,
                        sx: (e) => ({ color: e.colors.$blackAlpha500 }),
                      }),
                    }),
                  ],
                }),
                (0, o.BX)(f.Root, {
                  children: [(0, o.tZ)(f.Action, {}), (0, o.tZ)(f.Links, {})],
                }),
              ],
            }),
          });
        },
        oe = (e) => {
          const { navigate: t } = (0, l.useRouter)(),
            r = (0, n.v)();
          return (0, o.tZ)(a.Flow.Part, {
            part: "emailLinkVerify",
            children: (0, o.BX)(X, {
              children: [
                (0, o.tZ)(g, { children: r.error }),
                (0, o.BX)(d.Root, {
                  children: [
                    (0, o.tZ)(d.Title, { localizationKey: e.cardTitle }),
                    (0, o.tZ)(d.Subtitle, { localizationKey: e.cardSubtitle }),
                  ],
                }),
                (0, o.tZ)($, {
                  identifier: e.safeIdentifier,
                  avatarUrl: e.profileImageUrl,
                  onClick: () => t("../"),
                }),
                (0, o.tZ)(a.Col, {
                  elementDescriptor: a.descriptors.main,
                  gap: 8,
                  children: (0, o.tZ)(ie, {
                    formTitle: e.formTitle,
                    formSubtitle: e.formSubtitle,
                    resendButton: e.resendButton,
                    onResendCodeClicked: e.onResendCodeClicked,
                  }),
                }),
                (0, o.BX)(f.Root, {
                  children: [
                    (0, o.tZ)(f.Action, {
                      elementId: "alternativeMethods",
                      children:
                        e.onShowAlternativeMethodsClicked &&
                        (0, o.tZ)(f.ActionLink, {
                          localizationKey: (0, a.localizationKeys)(
                            "footerActionLink__useAnotherMethod"
                          ),
                          onClick: e.onShowAlternativeMethodsClicked,
                        }),
                    }),
                    (0, o.tZ)(f.Links, {}),
                  ],
                }),
              ],
            }),
          });
        },
        ie = (e) => {
          const t = (0, n.v)();
          return (0, o.BX)(a.Col, {
            elementDescriptor: a.descriptors.form,
            gap: 1,
            children: [
              (0, o.BX)(a.Col, {
                elementDescriptor: a.descriptors.formHeader,
                gap: 1,
                children: [
                  (0, o.tZ)(a.Text, {
                    localizationKey: e.formTitle,
                    elementDescriptor: a.descriptors.formHeaderTitle,
                    variant: "smallMedium",
                  }),
                  (0, o.tZ)(a.Text, {
                    localizationKey: e.formSubtitle,
                    elementDescriptor: a.descriptors.formHeaderSubtitle,
                    variant: "smallRegular",
                    colorScheme: "neutral",
                  }),
                ],
              }),
              (0, o.tZ)(D.u, {
                localizationKey: e.resendButton,
                elementDescriptor: a.descriptors.formResendCodeLink,
                onClick: e.onResendCodeClicked,
                startDisabled: !0,
                isDisabled: t.isLoading,
                throttleTimeInSec: 60,
                sx: (e) => ({ marginTop: e.space.$4 }),
              }),
            ],
          });
        },
        ae = (e) =>
          (0, o.BX)(a.Flex, {
            center: !0,
            elementDescriptor: a.descriptors.dividerRow,
            ...e,
            children: [
              (0, o.tZ)(se, {}),
              (0, o.tZ)(a.Text, {
                localizationKey: (0, a.localizationKeys)("dividerText"),
                elementDescriptor: a.descriptors.dividerText,
                variant: "smallMedium",
                colorScheme: "neutral",
                sx: (e) => ({ margin: `0 ${e.space.$4}` }),
              }),
              (0, o.tZ)(se, {}),
            ],
          }),
        se = () =>
          (0, o.tZ)(a.Flex, {
            elementDescriptor: a.descriptors.dividerLine,
            sx: (e) => ({
              flex: "1",
              height: "1px",
              backgroundColor: e.colors.$blackAlpha300,
            }),
          }),
        le = (e) => {
          const t = (0, a.useAppearance)(),
            r = ue(i.Children.toArray(e.children), (e) =>
              (0, o.tZ)(ae, {}, `divider${e}`)
            );
          return (0, o.tZ)(ce, {
            reverse: "bottom" === t.parsedLayout.socialButtonsPlacement,
            ...e,
            children: r,
          });
        },
        ce = (e) => {
          const { children: t, reverse: r } = e;
          return (0, o.tZ)(o.HY, {
            children: r ? i.Children.toArray(t).reverse() : t,
          });
        },
        ue = (e, t) =>
          e.reduce(
            (r, n, o) => (o === e.length - 1 ? [...r, n] : [...r, n, t(o)]),
            []
          );
      var de = r(4016);
      const pe = (e) => {
          const {
              name: t,
              firstName: r,
              lastName: n,
              avatarUrl: i,
              imageUrl: a,
              ...s
            } = e,
            l = (0, de.Pp)({ name: t, firstName: r, lastName: n }),
            c = (0, de.Qm)({ name: t, firstName: r, lastName: n });
          return (0, o.tZ)(T, {
            title: l,
            initials: c,
            imageUrl: i || a,
            ...s,
          });
        },
        me = (e) => {
          var t;
          const {
              user: r,
              externalAccount: n,
              samlAccount: i,
              size: s = "md",
              showAvatar: l = !0,
              icon: c,
              rounded: u = !0,
              imageUrl: d,
              badge: p,
              elementId: m,
              sx: f,
              title: h,
              subtitle: g,
              avatarSx: v,
              mainIdentifierSx: b,
              ...y
            } = e,
            { t: x } = (0, a.useLocalizations)(),
            w =
              (0, de.Pp)({ ...r }) ||
              (0, de.Pp)({ ...n }) ||
              (0, de.Pp)({ ...i }),
            S =
              (0, de.xC)({ ...r }) ||
              (null === (t = null == n ? void 0 : n.accountIdentifier) ||
              void 0 === t
                ? void 0
                : t.call(n)) ||
              (null == i ? void 0 : i.emailAddress),
            _ = x(h),
            C =
              d ||
              (null == r ? void 0 : r.imageUrl) ||
              (null == n ? void 0 : n.imageUrl),
            $ = (e) =>
              ({ sm: e.sizes.$8, md: e.sizes.$11, lg: e.sizes.$12x5 }[s]);
          return (0, o.BX)(a.Flex, {
            elementDescriptor: a.descriptors.userPreview,
            elementId: a.descriptors.userPreview.setId(m),
            gap: 4,
            align: "center",
            sx: [{ minWidth: "0px", width: "100%" }, f],
            ...y,
            children: [
              C
                ? l
                  ? (0, o.BX)(a.Flex, {
                      elementDescriptor:
                        a.descriptors.userPreviewAvatarContainer,
                      elementId:
                        a.descriptors.userPreviewAvatarContainer.setId(m),
                      justify: "center",
                      sx: { position: "relative" },
                      children: [
                        (0, o.tZ)(pe, {
                          boxElementDescriptor:
                            a.descriptors.userPreviewAvatarBox,
                          imageElementDescriptor:
                            a.descriptors.userPreviewAvatarImage,
                          ...r,
                          ...n,
                          ...i,
                          name: w,
                          avatarUrl: C,
                          size: $,
                          sx: v,
                          rounded: u,
                        }),
                        c &&
                          (0, o.tZ)(a.Flex, {
                            sx: { position: "absolute", left: 0, bottom: 0 },
                            children: c,
                          }),
                      ],
                    })
                  : (0, o.tZ)(a.Flex, {
                      elementDescriptor:
                        a.descriptors.userPreviewAvatarContainer,
                      elementId:
                        a.descriptors.userPreviewAvatarContainer.setId(m),
                      justify: "center",
                      sx: (e) => ({ height: $(e) }),
                    })
                : null,
              (0, o.BX)(a.Flex, {
                elementDescriptor: a.descriptors.userPreviewTextContainer,
                elementId: a.descriptors.userPreviewTextContainer.setId(m),
                direction: "col",
                justify: "center",
                sx: { minWidth: "0px", textAlign: "left" },
                children: [
                  (0, o.BX)(a.Text, {
                    elementDescriptor: a.descriptors.userPreviewMainIdentifier,
                    elementId: a.descriptors.userPreviewMainIdentifier.setId(m),
                    variant: "md" === s ? "regularMedium" : "smallMedium",
                    colorScheme: "inherit",
                    sx: [
                      (e) => ({
                        display: "flex",
                        gap: e.sizes.$1,
                        alignItems: "center",
                      }),
                      b,
                    ],
                    children: [
                      (0, o.tZ)(a.Text, {
                        as: "span",
                        colorScheme: "inherit",
                        truncate: !0,
                        sx: { fontSize: "inherit", fontWeight: "inherit" },
                        children: _ || w || S,
                      }),
                      p,
                    ],
                  }),
                  (g || (w && S)) &&
                    (0, o.tZ)(a.Text, {
                      elementDescriptor:
                        a.descriptors.userPreviewSecondaryIdentifier,
                      elementId:
                        a.descriptors.userPreviewSecondaryIdentifier.setId(m),
                      variant: "smallRegular",
                      colorScheme: "neutral",
                      truncate: !0,
                      localizationKey: g || S,
                    }),
                ],
              }),
            ],
          });
        },
        fe = (e) => {
          const {
              children: t,
              title: r,
              icon: n,
              defaultOpen: l = !1,
              toggleable: c = !0,
              scrollOnOpen: u = !1,
              badge: d,
              onCloseCallback: m = null,
              ...f
            } = e,
            [h, g] = i.useState(l),
            v = i.useRef(null);
          return (
            i.useEffect(() => {
              g(l);
            }, [l]),
            i.useLayoutEffect(() => {
              let e;
              return (
                u &&
                  h &&
                  v.current &&
                  (e = requestAnimationFrame(() => {
                    var e;
                    null === (e = v.current) ||
                      void 0 === e ||
                      e.scrollIntoView({ behavior: "smooth", block: "center" });
                  })),
                () => cancelAnimationFrame(e)
              );
            }, [h, u]),
            (0, o.BX)(a.Col, {
              ...f,
              children: [
                (0, o.tZ)(re.$, {
                  elementDescriptor: a.descriptors.accordionTriggerButton,
                  variant: "ghost",
                  colorScheme: "neutral",
                  textVariant: "smallRegular",
                  leftIcon: n,
                  rightIcon: s.Fj,
                  rightIconSx: (e) => ({
                    transitionProperty: e.transitionProperty.$common,
                    transitionDuration: e.transitionDuration.$controls,
                    transform: `rotate(${h ? "180" : "0"}deg)`,
                    opacity: 0.4,
                  }),
                  badge: d,
                  sx: (e) => ({
                    backgroundColor: h ? e.colors.$blackAlpha50 : void 0,
                    padding: `${e.space.$3} ${e.space.$4}`,
                    minHeight: e.sizes.$10,
                  }),
                  onClick: () => {
                    c && g((e) => !e), h && m && m();
                  },
                  isDisabled: !c,
                  children: r,
                }),
                h &&
                  (0, o.tZ)(a.Col, {
                    ref: v,
                    elementDescriptor: a.descriptors.accordionContent,
                    sx: (e) => ({
                      animation: `${p.animations.blockBigIn} ${e.transitionDuration.$slow} ease`,
                      padding: `${e.space.$4} ${e.space.$8}`,
                      borderTop: 0,
                    }),
                    children: t,
                  }),
              ],
            })
          );
        },
        he = (e) => {
          const t = (0, C.L_)(e.value),
            r = (0, C.uz)((0, C.y3)(e.value).iso);
          return (0, o.BX)(a.Flex, {
            elementDescriptor: a.descriptors.formattedPhoneNumber,
            gap: 4,
            children: [
              (0, o.tZ)(a.Text, {
                elementDescriptor: a.descriptors.formattedPhoneNumberFlag,
                sx: (e) => ({ fontSize: e.fontSizes.$sm }),
                children: r,
              }),
              (0, o.tZ)(a.Text, {
                elementDescriptor: a.descriptors.formattedPhoneNumberText,
                variant: "smallRegular",
                children: t,
              }),
            ],
          });
        },
        ge = (e) => {
          const t = (0, C.L_)(e.value);
          return (0, o.tZ)(a.Text, {
            as: "span",
            elementDescriptor: a.descriptors.formattedPhoneNumberText,
            variant: "smallRegular",
            children: t,
          });
        },
        ve = (e) => {
          const {
            icon: t,
            boxElementDescriptor: r,
            iconElementDescriptor: n,
            sx: i,
            ...s
          } = e;
          return (0, o.tZ)(a.Flex, {
            center: !0,
            elementDescriptor: r,
            sx: [
              (e) => ({
                backgroundColor: e.colors.$blackAlpha50,
                width: e.sizes.$16,
                height: e.sizes.$16,
                borderRadius: e.radii.$circle,
              }),
              i,
            ],
            ...s,
            children: (0, o.tZ)(a.Icon, {
              elementDescriptor: n,
              icon: t,
              size: "lg",
              sx: (e) => ({ color: e.colors.$blackAlpha600 }),
            }),
          });
        },
        be = Object.freeze([
          "image/png",
          "image/jpeg",
          "image/gif",
          "image/webp",
        ]),
        ye = (e) => be.includes(e.type),
        xe = (e) => {
          const { onFileDrop: t } = e,
            [r, n] = i.useState("idle"),
            l = i.useRef(null),
            c = (e) => {
              e.currentTarget.contains(e.relatedTarget) || n("idle");
            },
            u = (e) => {
              e &&
                ((e) => ye(e) && ((e) => e.size <= 1e7)(e))(e) &&
                (n("loading"), t(e));
            },
            d = {
              onDragEnter: (e) => {
                const t = e.dataTransfer.items[0];
                n(t && !ye(t) ? "invalid" : "valid");
              },
              onDragLeave: c,
              onDragOver: (e) => {
                e.preventDefault();
              },
              onDrop: (e) => {
                e.preventDefault(), c(e), u(e.dataTransfer.files[0]);
              },
            };
          return (0, o.BX)(a.Col, {
            elementDescriptor: a.descriptors.fileDropAreaOuterBox,
            gap: 2,
            ...d,
            children: [
              (0, o.tZ)("input", {
                type: "file",
                accept: be.join(","),
                style: { display: "none" },
                ref: l,
                onChange: (e) => {
                  var t;
                  return u(
                    null === (t = e.currentTarget.files) || void 0 === t
                      ? void 0
                      : t[0]
                  );
                },
              }),
              (0, o.BX)(a.Col, {
                elementDescriptor: a.descriptors.fileDropAreaBox,
                center: !0,
                gap: 4,
                sx: (e) => ({
                  height: e.space.$60,
                  [p.mqu.sm]: { height: "10 rem" },
                  backgroundColor: {
                    idle: e.colors.$blackAlpha50,
                    loading: e.colors.$blackAlpha50,
                    valid: C.O9.setAlpha(e.colors.$success500, 0.2),
                    invalid: C.O9.setAlpha(e.colors.$danger500, 0.2),
                  }[r],
                  borderRadius: e.radii.$xl,
                  animation: `${p.animations.expandIn(e.space.$60)} ${
                    e.transitionDuration.$fast
                  } ease`,
                }),
                children: [
                  (0, o.tZ)(ve, {
                    icon: s.gt,
                    boxElementDescriptor: a.descriptors.fileDropAreaIconBox,
                    iconElementDescriptor: a.descriptors.fileDropAreaIcon,
                  }),
                  "loading" === r
                    ? (0, o.tZ)(a.Text, {
                        colorScheme: "neutral",
                        children: "Uploading...",
                      })
                    : (0, o.BX)(o.HY, {
                        children: [
                          (0, o.tZ)(a.Text, {
                            localizationKey: (0, a.localizationKeys)(
                              "userProfile.profilePage.fileDropAreaTitle"
                            ),
                            elementDescriptor: a.descriptors.fileDropAreaHint,
                            sx: { [p.mqu.sm]: { display: "none" } },
                            colorScheme: "neutral",
                          }),
                          (0, o.tZ)(a.Button, {
                            localizationKey: (0, a.localizationKeys)(
                              "userProfile.profilePage.fileDropAreaAction"
                            ),
                            elementDescriptor:
                              a.descriptors.fileDropAreaButtonPrimary,
                            variant: "ghost",
                            onClick: () => {
                              var e;
                              return null === (e = l.current) || void 0 === e
                                ? void 0
                                : e.click();
                            },
                          }),
                        ],
                      }),
                ],
              }),
              (0, o.tZ)(a.Text, {
                localizationKey: (0, a.localizationKeys)(
                  "userProfile.profilePage.fileDropAreaHint"
                ),
                elementDescriptor: a.descriptors.fileDropAreaFooterHint,
                variant: "smallRegular",
                colorScheme: "neutral",
              }),
            ],
          });
        };
      var we = r(3244),
        Se = r(718);
      const _e = i.memo((e) => {
          const [t, r] = i.useState(!0),
            n = i.useRef(null);
          return (
            i.useEffect(() => {
              const o = n.current;
              o && (t && r(!1), (o.className = e.className));
            }, [e.className]),
            (0, o.BX)(o.HY, {
              children: [
                e.children,
                t &&
                  (0, o.tZ)("span", {
                    ref: (e) => (n.current = e ? e.parentElement : n.current),
                    "aria-hidden": !0,
                    style: { display: "none" },
                  }),
              ],
            })
          );
        }),
        Ce = (0, Se.P)(_e, {
          defaultStyles: (e) => ({
            boxSizing: "border-box",
            width: "fit-content",
            fontFamily: e.fonts.$main,
            fontStyle: e.fontStyles.$normal,
          }),
        }),
        $e = (e) => {
          const { id: t, value: r, ...n } = e,
            { onCopy: i, hasCopied: l } = (0, b.VP)(r);
          return (0, o.BX)(a.Flex, {
            direction: "col",
            justify: "center",
            sx: { position: "relative" },
            children: [
              (0, o.tZ)(a.Input, {
                ...n,
                value: r,
                isDisabled: !0,
                sx: (e) => ({ paddingRight: e.space.$8 }),
              }),
              (0, o.tZ)(a.Button, {
                elementDescriptor:
                  a.descriptors.formFieldInputCopyToClipboardButton,
                variant: "ghostIcon",
                tabIndex: -1,
                colorScheme: "primary",
                onClick: i,
                sx: (e) => ({
                  position: "absolute",
                  right: 0,
                  marginRight: e.space.$3,
                }),
                children: (0, o.tZ)(a.Icon, {
                  elementDescriptor:
                    a.descriptors.formFieldInputCopyToClipboardIcon,
                  icon: l ? s.qy : s.TU,
                }),
              }),
            ],
          });
        },
        ke = (e) => {
          const { icon: t, ...r } = e;
          return (0, o.tZ)(a.Button, {
            colorScheme: "neutral",
            variant: "outline",
            sx: [(e) => ({ borderColor: e.colors.$blackAlpha200 }), e.sx],
            ...r,
            children: (0, o.BX)(a.Col, {
              center: !0,
              gap: 2,
              children: [
                (0, o.tZ)(a.Icon, { icon: t }),
                (0, o.tZ)(a.Text, { children: e.children }),
              ],
            }),
          });
        },
        Pe = i.forwardRef((e, t) => {
          const { leftIcon: r, sx: n, ...s } = e;
          return (0, o.BX)(a.Flex, {
            center: !0,
            sx: (e) => ({
              width: "100%",
              position: "relative",
              "& .cl-internal-icon": {
                position: "absolute",
                left: e.space.$4,
                width: e.sizes.$3x5,
                height: e.sizes.$3x5,
              },
            }),
            children: [
              r && i.cloneElement(r, { className: "cl-internal-icon" }),
              (0, o.tZ)(a.Input, {
                ...s,
                sx: [(e) => ({ width: "100%", paddingLeft: e.space.$10 }), n],
                ref: t,
              }),
            ],
          });
        }),
        [Ie, Be] = (0, v.uH)("SelectState"),
        Re = (e, t, r) =>
          (0, o.tZ)(a.Flex, {
            sx: (e) => ({
              width: "100%",
              padding: `${e.space.$2} ${e.space.$4}`,
              margin: `0 ${e.space.$1}`,
              borderRadius: e.radii.$md,
              ...(r && { backgroundColor: e.colors.$blackAlpha200 }),
              "&:hover": { backgroundColor: e.colors.$blackAlpha200 },
            }),
            children: (0, o.tZ)(a.Text, {
              truncate: !0,
              children: e.label || e.value,
            }),
          }),
        Te = (e) => (0, o.tZ)(o.HY, { children: e.label || e.value }),
        Ae = (0, n.TJ)((e) => {
          const {
              value: t,
              options: r,
              onChange: n,
              optionBuilder: a,
              noResultsMessage: s,
              comparator: l,
              placeholder: c = "Select an option",
              searchPlaceholder: u,
              elementId: d,
              children: p,
              ...m
            } = e,
            f = (0, b.Sv)({ autoUpdate: !1, bubbles: !1 }),
            h = f.toggle,
            g = i.useRef(null),
            v = (0, b.dw)({ items: r, comparator: l || (() => !0) }),
            y = i.useCallback(
              (e) => {
                null == n || n(e), h();
              },
              [h, n]
            ),
            x = (0, o.BX)(o.HY, {
              children: [(0, o.tZ)(Ee, {}), (0, o.tZ)(Ze, {})],
            });
          return (0, o.tZ)(Ie.Provider, {
            value: {
              value: {
                popoverCtx: f,
                searchInputCtx: v,
                selectedOption: r.find((e) => e.value === t) || null,
                noResultsMessage: s,
                focusedItemRef: g,
                optionBuilder: a || Re,
                buttonOptionBuilder: a || Te,
                placeholder: c,
                searchPlaceholder: u,
                comparator: l,
                select: y,
                onTriggerClick: h,
                elementId: d,
              },
            },
            ...m,
            children: i.Children.count(p) ? p : x,
          });
        }),
        ze = i.memo(
          i.forwardRef((e, t) => {
            const {
              option: r,
              optionBuilder: n,
              index: s,
              handleSelect: l,
              isFocused: c,
              elementId: u,
            } = e;
            return (0, o.tZ)(a.Flex, {
              ref: t,
              sx: { userSelect: "none", cursor: "pointer" },
              onClick: () => {
                l(r);
              },
              children: i.cloneElement(n(r, s, c), {
                elementDescriptor: a.descriptors.selectOption,
                elementId: a.descriptors.selectOption.setId(u),
              }),
            });
          })
        ),
        De = (e) => {
          const { sx: t, ...r } = e;
          i.useEffect(() => () => e.onChange({ target: { value: "" } }), []);
          const { elementId: n } = Be();
          return (0, o.tZ)(a.Flex, {
            sx: (e) => ({
              borderBottom: e.borders.$normal,
              borderColor: e.colors.$blackAlpha200,
            }),
            children: (0, o.tZ)(Pe, {
              elementDescriptor: a.descriptors.selectSearchInput,
              elementId: a.descriptors.selectSearchInput.setId(n),
              focusRing: !1,
              leftIcon: (0, o.tZ)(a.Icon, {
                colorScheme: "neutral",
                icon: s.Yt,
              }),
              sx: [{ border: "none", borderRadius: "0" }, t],
              ...r,
            }),
          });
        },
        Oe = (e) => {
          const { sx: t, ...r } = e;
          return (0, o.tZ)(a.Text, {
            as: "div",
            variant: "smallRegular",
            sx: [
              (e) => ({
                width: "100%",
                padding: `${e.space.$2} 0 0 ${e.space.$4}`,
              }),
              t,
            ],
            ...r,
          });
        },
        Ee = (e) => {
          const { containerSx: t, sx: r, ...n } = e,
            {
              popoverCtx: s,
              searchInputCtx: l,
              optionBuilder: c,
              searchPlaceholder: u,
              comparator: d,
              focusedItemRef: m,
              noResultsMessage: f,
              select: h,
              onTriggerClick: g,
              elementId: v,
            } = Be(),
            { filteredItems: b, searchInputProps: y } = l,
            [x, w] = (0, i.useState)(0),
            { isOpen: S, floating: _, styles: $, nodeId: k, context: P } = s,
            I = i.useRef(null);
          return (
            i.useEffect(() => {
              var e;
              S
                ? null === (e = m.current) ||
                  void 0 === e ||
                  e.scrollIntoView({ block: "nearest" })
                : w(-1);
            }, [x, S]),
            i.useEffect(() => {
              var e;
              d ||
                null === (e = null == I ? void 0 : I.current) ||
                void 0 === e ||
                e.focus();
            }, [S]),
            (0, o.tZ)(F.J, {
              nodeId: k,
              context: P,
              isOpen: S,
              portal: !1,
              order: ["content"],
              children: (0, o.BX)(a.Flex, {
                elementDescriptor: a.descriptors.selectOptionsContainer,
                elementId: a.descriptors.selectOptionsContainer.setId(v),
                ref: _,
                onKeyDown: (e) =>
                  "ArrowUp" === e.key
                    ? (e.preventDefault(),
                      S ? w((e = 0) => Math.max(e - 1, 0)) : g())
                    : "ArrowDown" === e.key
                    ? (e.preventDefault(),
                      S ? w((e = 0) => Math.min(e + 1, b.length - 1)) : g())
                    : "Enter" === e.key && x >= 0
                    ? (e.preventDefault(), h(b[x]))
                    : void 0,
                direction: "col",
                justify: "start",
                sx: [
                  (e) => ({
                    backgroundColor: C.O9.makeSolid(e.colors.$colorBackground),
                    border: e.borders.$normal,
                    borderRadius: e.radii.$lg,
                    borderColor: e.colors.$blackAlpha200,
                    overflow: "hidden",
                    animation: `${p.animations.dropdownSlideInScaleAndFade} ${e.transitionDuration.$slower} ${e.transitionTiming.$slowBezier}`,
                    transformOrigin: "top center",
                    boxShadow: e.shadows.$cardDropShadow,
                    zIndex: e.zIndices.$dropdown,
                  }),
                  r,
                ],
                style: { ...$, left: $.left - 1 },
                children: [
                  d && (0, o.tZ)(De, { placeholder: u, ...y }),
                  (0, o.BX)(a.Flex, {
                    ref: I,
                    direction: "col",
                    tabIndex: d ? void 0 : 0,
                    sx: [
                      (e) => ({
                        gap: e.space.$1,
                        outline: "none",
                        overflowY: "auto",
                        maxHeight: "18vh",
                        padding: `${e.space.$2} 0`,
                      }),
                      t,
                    ],
                    ...n,
                    children: [
                      b.map((e, t) => {
                        const r = t === x;
                        return (0, o.tZ)(
                          ze,
                          {
                            index: t,
                            ref: r ? m : void 0,
                            option: e,
                            optionBuilder: c,
                            isFocused: r,
                            handleSelect: h,
                            elementId: v,
                          },
                          t
                        );
                      }),
                      f && 0 === b.length && (0, o.tZ)(Oe, { children: f }),
                    ],
                  }),
                ],
              }),
            })
          );
        },
        Ze = (e) => {
          const { sx: t, children: r, ...n } = e,
            {
              popoverCtx: i,
              onTriggerClick: l,
              buttonOptionBuilder: c,
              selectedOption: u,
              placeholder: d,
              elementId: m,
            } = Be(),
            { isOpen: f, reference: h } = i;
          let g = r;
          return (
            r ||
              (g = u
                ? c(u)
                : (0, o.tZ)(a.Text, {
                    sx: (e) => ({ opacity: e.opacity.$inactive }),
                    children: d,
                  })),
            (0, o.BX)(a.Button, {
              elementDescriptor: a.descriptors.selectButton,
              elementId: a.descriptors.selectButton.setId(m),
              ref: h,
              colorScheme: "neutral",
              variant: "ghost",
              textVariant: "smallMedium",
              onClick: l,
              sx: [
                (e) => ({
                  fontWeight: e.fontWeights.$normal,
                  color: e.colors.$colorInputText,
                  backgroundColor: e.colors.$colorInputBackground,
                  ...p.common.borderVariants(e).normal,
                  paddingLeft: e.space.$3x5,
                  paddingRight: e.space.$3x5,
                  "> *": { pointerEvents: "none" },
                }),
                t,
              ],
              ...n,
              children: [
                g,
                (0, o.tZ)(a.Icon, {
                  elementDescriptor: a.descriptors.selectButtonIcon,
                  elementId: a.descriptors.selectButtonIcon.setId(m),
                  icon: s.Fj,
                  sx: (e) => ({
                    width: e.sizes.$3x5,
                    marginLeft: e.space.$1,
                    transitionProperty: e.transitionProperty.$common,
                    transitionDuration: e.transitionDuration.$controls,
                    transform: `rotate(${f ? "180" : "0"}deg)`,
                  }),
                }),
              ],
            })
          );
        };
      var Le = r(7178);
      const [Fe, Me] = (0, v.uH)("MenuState"),
        je = (0, n.TJ)((e) => {
          const { elementId: t } = e,
            r = (0, b.Sv)({ placement: "right-start", offset: 8, bubbles: !1 }),
            n = i.useMemo(
              () => ({ value: { popoverCtx: r, elementId: t } }),
              [{ ...r }, t]
            );
          return (0, o.tZ)(Fe.Provider, { value: n, ...e });
        }),
        Ue = (e) => {
          const { children: t } = e,
            { popoverCtx: r, elementId: n } = Me(),
            { reference: o, toggle: s } = r;
          return (0, i.isValidElement)(t)
            ? (0, i.cloneElement)(t, {
                ref: o,
                elementDescriptor: a.descriptors.menuButton,
                elementId: a.descriptors.menuButton.setId(n),
                onClick: (e) => {
                  var r, n;
                  null ===
                    (n =
                      null === (r = t.props) || void 0 === r
                        ? void 0
                        : r.onClick) ||
                    void 0 === n ||
                    n.call(r, e),
                    s();
                },
              })
            : null;
        },
        Ne = (e, t, r) => {
          var n;
          let o = (null == r ? void 0 : r.countSelf) ? e.tagName : "",
            i = e;
          for (; i && "BUTTON" !== o.toUpperCase(); )
            (i =
              i[
                "prev" === t ? "previousElementSibling" : "nextElementSibling"
              ]),
              (o =
                null !== (n = null == i ? void 0 : i.tagName) && void 0 !== n
                  ? n
                  : "");
          return i;
        },
        Ve = (e) => {
          const { sx: t, ...r } = e,
            { popoverCtx: n, elementId: s } = Me(),
            { floating: l, styles: c, isOpen: u, context: d, nodeId: m } = n,
            f = (0, i.useRef)(null);
          return (
            (0, i.useLayoutEffect)(() => {
              const e = f.current;
              l(e);
            }, [u]),
            (0, o.tZ)(F.J, {
              context: d,
              nodeId: m,
              isOpen: u,
              order: ["floating", "content"],
              children: (0, o.tZ)(a.Col, {
                elementDescriptor: a.descriptors.menuList,
                elementId: a.descriptors.menuList.setId(s),
                ref: f,
                role: "menu",
                onKeyDown: (e) => {
                  var t;
                  const r = f.current;
                  if (r && r === document.activeElement)
                    return "ArrowDown" === e.key
                      ? (e.preventDefault(),
                        null ===
                          (t = Ne(r.children[0], "next", { countSelf: !0 })) ||
                        void 0 === t
                          ? void 0
                          : t.focus())
                      : void 0;
                },
                tabIndex: 0,
                sx: [
                  (e) => ({
                    backgroundColor: Le.O.makeSolid(e.colors.$colorBackground),
                    border: e.borders.$normal,
                    outline: "none",
                    borderRadius: e.radii.$lg,
                    borderColor: e.colors.$blackAlpha200,
                    paddingTop: e.space.$2,
                    paddingBottom: e.space.$2,
                    overflow: "hidden",
                    top: `calc(100% + ${e.space.$2})`,
                    animation: `${p.animations.dropdownSlideInScaleAndFade} ${e.transitionDuration.$slower} ${e.transitionTiming.$slowBezier}`,
                    transformOrigin: "top center",
                    boxShadow: e.shadows.$boxShadow1,
                    zIndex: e.zIndices.$dropdown,
                  }),
                  t,
                ],
                style: c,
                ...r,
              }),
            })
          );
        },
        He = (e) => {
          const { sx: t, onClick: r, destructive: n, ...s } = e,
            { popoverCtx: l, elementId: c } = Me(),
            { toggle: u } = l,
            d = (0, i.useRef)(null);
          return (0, o.tZ)(a.Button, {
            ref: d,
            elementDescriptor: a.descriptors.menuItem,
            elementId: a.descriptors.menuItem.setId(c),
            focusRing: !1,
            hoverAsFocus: !0,
            variant: "ghost",
            colorScheme: n ? "danger" : "neutral",
            role: "menuitem",
            onKeyDown: (e) => {
              const t = d.current;
              if (!t) return;
              const r = e.key;
              if ("ArrowUp" !== r && "ArrowDown" !== r) return;
              e.preventDefault();
              const n = Ne(t, "ArrowUp" === r ? "prev" : "next");
              null == n || n.focus();
            },
            onClick: (e) => {
              null == r || r(e), u();
            },
            sx: [
              (e) => ({
                justifyContent: "start",
                borderRadius: e.radii.$none,
                paddingLeft: e.space.$4,
                paddingRight: e.space.$4,
              }),
              t,
            ],
            ...s,
          });
        },
        We = (e) => {
          const { defaultPage: t = 1 } = e || {},
            [r, n] = (0, i.useState)(t);
          return { page: r, changePage: n };
        },
        Xe = (e) => {
          const { sx: t, isActive: r, ...n } = e;
          return (0, o.tZ)(a.Button, {
            size: "xs",
            variant: "ghost",
            colorScheme: "neutral",
            sx: (e) => [
              {
                color: e.colors.$colorText,
                opacity: r ? 1 : e.opacity.$inactive,
              },
              t,
            ],
            elementDescriptor: a.descriptors.paginationButton,
            ...n,
          });
        },
        qe = (e) => {
          var t, r, n, i;
          const {
            rowInfo: { startingRow: s, endingRow: l, allRowsCount: c },
          } = e;
          return (0, o.BX)(a.Text, {
            children: [
              (0, o.tZ)(a.Text, {
                as: "span",
                elementDescriptor: a.descriptors.paginationRowText,
                elementId:
                  null === (t = a.descriptors.paginationRowText) || void 0 === t
                    ? void 0
                    : t.setId("displaying"),
                sx: (e) => ({ opacity: e.opacity.$inactive }),
                localizationKey: (0, a.localizationKeys)(
                  "paginationRowText__displaying"
                ),
              }),
              " ",
              (0, o.tZ)(a.Text, {
                as: "span",
                elementDescriptor: a.descriptors.paginationRowText,
                elementId:
                  null === (r = a.descriptors.paginationRowText) || void 0 === r
                    ? void 0
                    : r.setId("rowsCount"),
                sx: (e) => ({ fontWeight: e.fontWeights.$medium }),
                children: s === l && [0, 1].includes(s) ? s : `${s} – ${l}`,
              }),
              " ",
              (0, o.tZ)(a.Text, {
                as: "span",
                elementDescriptor: a.descriptors.paginationRowText,
                elementId:
                  null === (n = a.descriptors.paginationRowText) || void 0 === n
                    ? void 0
                    : n.setId("displaying"),
                sx: (e) => ({ opacity: e.opacity.$inactive }),
                localizationKey: (0, a.localizationKeys)(
                  "paginationRowText__of"
                ),
              }),
              " ",
              (0, o.tZ)(a.Text, {
                as: "span",
                elementDescriptor: a.descriptors.paginationRowText,
                elementId:
                  null === (i = a.descriptors.paginationRowText) || void 0 === i
                    ? void 0
                    : i.setId("allRowsCount"),
                children: c,
              }),
            ],
          });
        },
        Ke = () =>
          (0, o.tZ)(a.Flex, {
            center: !0,
            children: (0, o.tZ)(a.Text, {
              sx: (e) => ({ color: e.colors.$blackAlpha500 }),
              children: "...",
            }),
          }),
        Ye = (e) => {
          const {
            page: t,
            count: r,
            rowInfo: n,
            siblingCount: i = 1,
            onChange: s,
          } = e;
          return (0, o.BX)(a.Flex, {
            justify: n ? "between" : "center",
            align: "center",
            sx: (e) => ({
              fontSize: e.fontSizes.$xs,
              "*": { fontSize: "inherit" },
              [p.mqu.sm]: { flexDirection: "column", gap: e.space.$2 },
            }),
            children: [
              n && (0, o.tZ)(qe, { rowInfo: n }),
              (0, o.BX)(a.Flex, {
                gap: 2,
                children: [
                  (0, o.tZ)(Xe, {
                    isDisabled: t <= 1,
                    localizationKey: (0, a.localizationKeys)(
                      "paginationButton__previous"
                    ),
                    onClick: () => {
                      null == s || s(t - 1);
                    },
                  }),
                  (0, C.w6)(1, r).map((e) =>
                    ((e, t, r, n) =>
                      Math.abs(e - t) <= r || t === n || 1 === t)(t, e, i, r)
                      ? (0, o.tZ)(
                          Xe,
                          {
                            isActive: e === t,
                            onClick: () => {
                              null == s || s(e);
                            },
                            children: e,
                          },
                          e
                        )
                      : ((e, t, r) => Math.abs(e - t) === r + 1)(t, e, i)
                      ? (0, o.tZ)(Ke, {}, e)
                      : null
                  ),
                  (0, o.tZ)(Xe, {
                    isDisabled: t >= r || t < 1,
                    localizationKey: (0, a.localizationKeys)(
                      "paginationButton__next"
                    ),
                    onClick: () => {
                      null == s || s(t + 1);
                    },
                  }),
                ],
              }),
            ],
          });
        },
        Ge = () =>
          (0, o.tZ)(a.Flex, {
            center: !0,
            sx: { height: "100%" },
            children: (0, o.tZ)(a.Spinner, {
              colorScheme: "primary",
              size: "lg",
            }),
          }),
        [Je, Qe] = (0, v.uH)("TabsContext"),
        et = (e) => {
          const t = i.useMemo(
            () => ({ value: e.value }),
            [e.value.selectedIndex, e.value.setFocusedIndex]
          );
          return (0, o.tZ)(Je.Provider, { value: t, children: e.children });
        },
        tt = (e) => {
          const { defaultIndex: t = 0, children: r } = e,
            [n, a] = i.useState(t),
            [s, l] = i.useState(-1);
          return (0, o.tZ)(et, {
            value: {
              selectedIndex: n,
              setSelectedIndex: a,
              focusedIndex: s,
              setFocusedIndex: l,
            },
            children: r,
          });
        },
        rt = (e) => {
          const { children: t, sx: r, ...n } = e,
            {
              setSelectedIndex: s,
              selectedIndex: l,
              setFocusedIndex: c,
            } = Qe(),
            u = (0, C.WR)(t).map((e, t) => i.cloneElement(e, { tabIndex: t }));
          return (0, o.tZ)(a.Flex, {
            elementDescriptor: a.descriptors.tabListContainer,
            onKeyDown: (e) => {
              const t = u
                  .filter((e) => {
                    var t;
                    return !(null === (t = e.props) || void 0 === t
                      ? void 0
                      : t.isDisabled);
                  })
                  .map((e) => e.props.tabIndex),
                r = t.length,
                n = t.indexOf(l);
              if ("ArrowLeft" === e.key) {
                const e = 0 === n ? t[r - 1] : t[n - 1];
                return c(e), s(e);
              }
              if ("ArrowRight" === e.key) {
                const e = r - 1 === n ? t[0] : t[n + 1];
                return c(e), s(e);
              }
            },
            sx: [
              (e) => ({
                borderBottom: e.borders.$normal,
                borderColor: e.colors.$blackAlpha300,
              }),
              r,
            ],
            ...n,
            children: u,
          });
        },
        nt = (e) => {
          const { t: t } = (0, a.useLocalizations)(),
            {
              children: r,
              sx: n,
              tabIndex: s,
              isDisabled: l,
              localizationKey: c,
              ...u
            } = e;
          if (void 0 === s)
            throw new Error("Tab component must be a direct child of TabList.");
          const {
              setSelectedIndex: d,
              selectedIndex: p,
              focusedIndex: m,
              setFocusedIndex: f,
            } = Qe(),
            h = i.useRef(null),
            g = s === p,
            v = s === m;
          return (
            i.useEffect(() => {
              l && 0 === s && d(s + 1);
            }, []),
            i.useEffect(() => {
              h.current && v && h.current.focus();
            }, [v]),
            (0, o.BX)(a.Button, {
              elementDescriptor: a.descriptors.tabButton,
              onClick: () => {
                d(s), f(-1);
              },
              focusRing: g,
              isDisabled: l,
              tabIndex: g ? 0 : -1,
              variant: "ghost",
              "aria-selected": g,
              id: `cl-tab-${s}`,
              "aria-controls": `cl-tabpanel-${s}`,
              role: "tab",
              ref: h,
              sx: [
                (e) => ({
                  background: e.colors.$transparent,
                  color: g ? e.colors.$blackAlpha900 : e.colors.$blackAlpha700,
                  gap: e.space.$1x5,
                  fontWeight: e.fontWeights.$medium,
                  borderBottom: e.borders.$normal,
                  marginBottom: "-1px",
                  borderColor: g
                    ? e.colors.$blackAlpha700
                    : e.colors.$transparent,
                  borderRadius: 0,
                  width: "fit-content",
                  "&:hover, :focus": { backgroundColor: e.colors.$transparent },
                }),
                n,
              ],
              ...u,
              children: [t(c), r],
            })
          );
        },
        ot = (e) => {
          const { children: t } = e,
            r = (0, C.WR)(t).map((e, t) => i.cloneElement(e, { tabIndex: t }));
          return (0, o.tZ)(o.HY, { children: r });
        },
        it = (e) => {
          const { tabIndex: t, sx: r, children: n, ...i } = e;
          if (void 0 === t)
            throw new Error(
              "TabPanel component must be a direct child of TabPanels."
            );
          const { selectedIndex: s } = Qe();
          return t === s
            ? (0, o.tZ)(a.Flex, {
                elementDescriptor: a.descriptors.tabPanel,
                id: `cl-tabpanel-${t}`,
                role: "tabpanel",
                tabIndex: 0,
                "aria-labelledby": `cl-tab-${t}`,
                sx: [{ outline: 0 }, r],
                ...i,
                children: n,
              })
            : null;
        },
        at = (e) => {
          const { name: t = "", imageUrl: r, ...n } = e;
          return (0, o.tZ)(T, {
            title: t,
            initials: (t || " ")[0],
            imageUrl: r,
            rounded: !1,
            ...n,
          });
        };
      var st = r(5802);
      const lt = (e) => {
          var t;
          const {
              organization: r,
              size: n = "md",
              icon: i,
              rounded: s = !1,
              fetchRoles: l = !1,
              badge: c,
              sx: u,
              user: d,
              avatarSx: p,
              mainIdentifierSx: m,
              elementId: f,
              ...h
            } = e,
            { localizeCustomRole: g } = (0, st.q)(),
            { options: v } = (0, st.e)(l),
            b =
              null == d
                ? void 0
                : d.organizationMemberships.find(
                    (e) => e.organization.id === r.id
                  ),
            y =
              null ===
                (t =
                  null == v
                    ? void 0
                    : v.find(
                        (e) => e.value === (null == b ? void 0 : b.role)
                      )) || void 0 === t
                ? void 0
                : t.label;
          return (0, o.BX)(a.Flex, {
            elementDescriptor: a.descriptors.organizationPreview,
            elementId: a.descriptors.organizationPreview.setId(f),
            gap: 4,
            align: "center",
            sx: [{ minWidth: "0" }, u],
            ...h,
            children: [
              (0, o.BX)(a.Flex, {
                elementDescriptor:
                  a.descriptors.organizationPreviewAvatarContainer,
                elementId:
                  a.descriptors.organizationPreviewAvatarContainer.setId(f),
                justify: "center",
                sx: { position: "relative" },
                children: [
                  (0, o.tZ)(at, {
                    boxElementDescriptor:
                      a.descriptors.organizationPreviewAvatarBox,
                    imageElementDescriptor:
                      a.descriptors.organizationPreviewAvatarImage,
                    ...r,
                    size: (e) =>
                      ({ sm: e.sizes.$8, md: e.sizes.$11, lg: e.sizes.$12x5 }[
                        n
                      ]),
                    sx: p,
                    rounded: s,
                  }),
                  i &&
                    (0, o.tZ)(a.Flex, {
                      sx: { position: "absolute", left: 0, bottom: 0 },
                      children: i,
                    }),
                ],
              }),
              (0, o.BX)(a.Flex, {
                elementDescriptor:
                  a.descriptors.organizationPreviewTextContainer,
                elementId:
                  a.descriptors.organizationPreviewTextContainer.setId(f),
                direction: "col",
                justify: "center",
                sx: { minWidth: "0px", textAlign: "left" },
                children: [
                  (0, o.BX)(a.Text, {
                    elementDescriptor:
                      a.descriptors.organizationPreviewMainIdentifier,
                    elementId:
                      a.descriptors.organizationPreviewMainIdentifier.setId(f),
                    variant: {
                      sm: "smallMedium",
                      md: "regularMedium",
                      lg: "regularMedium",
                    }[n],
                    colorScheme: "inherit",
                    truncate: !0,
                    sx: m,
                    children: [r.name, " ", c],
                  }),
                  r.name &&
                    (0, o.tZ)(a.Text, {
                      elementDescriptor:
                        a.descriptors.organizationPreviewSecondaryIdentifier,
                      elementId:
                        a.descriptors.organizationPreviewSecondaryIdentifier.setId(
                          f
                        ),
                      localizationKey: g(null == b ? void 0 : b.role) || y,
                      variant: "smallRegular",
                      colorScheme: "neutral",
                      truncate: !0,
                    }),
                ],
              }),
            ],
          });
        },
        ct = (e) =>
          (0, o.tZ)(me, { elementId: "personalWorkspace", rounded: !1, ...e });
      var ut = r(6465);
      const dt = (e) => {
          const t = e.onClick || e.href ? a.Link : a.Text;
          return (0, o.tZ)(a.Flex, {
            elementDescriptor: a.descriptors.breadcrumbsItemBox,
            as: "li",
            children: (0, o.tZ)(t, {
              elementDescriptor: a.descriptors.breadcrumbsItem,
              colorScheme: "neutral",
              variant: "smallRegular",
              sx: { display: "inline-flex", listStyle: "none" },
              ...e,
            }),
          });
        },
        pt = (e) => {
          const { title: t, pageToRootNavbarRoute: r, ...n } = e,
            s = (0, l.useRouter)(),
            { navigateToFlowStart: c } = (0, b.zk)(),
            { t: u } = (0, a.useLocalizations)(),
            d = s.currentPath.replace(`/${s.basePath}/`, ""),
            m = (0, i.useMemo)(() => {
              var e;
              return null ===
                (e = Object.entries(r).find(([e]) => d.includes(e))) ||
                void 0 === e
                ? void 0
                : e[1];
            }, []);
          return t
            ? (0, o.tZ)(a.Flex, {
                as: "nav",
                elementDescriptor: a.descriptors.breadcrumbs,
                ...n,
                children: (0, o.BX)(a.Flex, {
                  elementDescriptor: a.descriptors.breadcrumbsItems,
                  as: "ol",
                  sx: (e) => ({
                    gap: e.space.$3,
                    [p.mqu.xs]: { gap: e.space.$1 },
                    margin: 0,
                    padding: 0,
                  }),
                  children: [
                    m &&
                      (0, o.BX)(o.HY, {
                        children: [
                          (0, o.BX)(dt, {
                            href: "",
                            onClick: (e) => (e.preventDefault(), c()),
                            children: [
                              (0, o.tZ)(a.Icon, {
                                elementDescriptor:
                                  a.descriptors.breadcrumbsItemIcon,
                                icon: m.icon,
                                size: "sm",
                                sx: (e) => ({
                                  [p.mqu.xs]: { display: "none" },
                                  opacity: 0.7,
                                  marginRight: e.space.$2,
                                }),
                              }),
                              u(m.name),
                            ],
                          }),
                          (0, o.tZ)(dt, {
                            elementDescriptor:
                              a.descriptors.breadcrumbsItemDivider,
                            "aria-hidden": !0,
                            children: "/",
                          }),
                        ],
                      }),
                    (0, o.tZ)(dt, {
                      localizationKey: t,
                      elementDescriptor: a.descriptors.breadcrumbsItem,
                      elementId:
                        a.descriptors.breadcrumbsItem.setId("currentPage"),
                      colorScheme: "primary",
                    }),
                  ],
                }),
              })
            : null;
        },
        mt = (e) => {
          const {
              headerTitle: t,
              headerTitleTextVariant: r,
              headerSubtitle: i,
              headerSubtitleTextVariant: s,
              breadcrumbTitle: l,
              children: c,
              Breadcrumbs: u,
              sx: p,
              ...m
            } = e,
            f = (0, n.v)();
          return (0, o.BX)(a.Col, {
            elementDescriptor: a.descriptors.page,
            gap: 8,
            ...m,
            sx: [(e) => ({ minHeight: e.sizes.$120 }), p],
            children: [
              (0, o.tZ)(ut.ap, {}),
              (0, o.tZ)(g, { children: f.error }),
              (0, o.BX)(d.Root, {
                children: [
                  u &&
                    (0, o.tZ)(u, {
                      title: l || t,
                      sx: (e) => ({ marginBottom: e.space.$5 }),
                    }),
                  (0, o.tZ)(d.Title, {
                    localizationKey: t,
                    textVariant: r || "xxlargeMedium",
                  }),
                  i &&
                    (0, o.tZ)(d.Subtitle, {
                      variant: s || "regularRegular",
                      localizationKey: i,
                    }),
                ],
              }),
              (0, o.tZ)(a.Col, { gap: 8, children: c }),
            ],
          });
        },
        ft = (e) => {
          const { contentRef: t, children: r } = e,
            n = (0, l.useRouter)(),
            s = i.useRef(0);
          return (
            i.useEffect(() => {
              var e;
              const r = (e) => {
                const t = e.target;
                t.scrollTop && (s.current = t.scrollTop);
              };
              return (
                null === (e = null == t ? void 0 : t.current) ||
                  void 0 === e ||
                  e.addEventListener("scroll", r),
                () => {
                  var e;
                  return null === (e = null == t ? void 0 : t.current) ||
                    void 0 === e
                    ? void 0
                    : e.removeEventListener("scroll", r);
                }
              );
            }, []),
            i.useLayoutEffect(() => {
              s.current &&
                (null == t ? void 0 : t.current) &&
                (t.current.scrollTop = s.current);
            }, [n.currentPath]),
            (0, o.tZ)(ht, {
              children: (0, o.tZ)(a.Col, {
                elementDescriptor: a.descriptors.pageScrollBox,
                sx: (e) => ({
                  flex: "1",
                  padding: `${e.space.$9x5} ${e.space.$8}`,
                  [p.mqu.xs]: { padding: `${e.space.$8} ${e.space.$5}` },
                  ...p.common.maxHeightScroller(e),
                }),
                ref: t,
                children: r,
              }),
            })
          );
        },
        ht = (e) =>
          (0, o.tZ)(a.Col, {
            elementDescriptor: a.descriptors.scrollBox,
            sx: (e) => ({
              position: "relative",
              borderRadius: e.radii.$xl,
              width: "100%",
              overflow: "hidden",
            }),
            ...e,
          }),
        gt = (e) =>
          new Promise((t, r) => {
            const n = new FileReader();
            n.readAsDataURL(e),
              (n.onload = () => t(n.result)),
              (n.onerror = (e) => r(e));
          }),
        vt = (e) => {
          const [t, r] = i.useState(!1),
            [s, l] = i.useState(),
            c = (0, n.v)(),
            {
              onAvatarChange: u,
              onAvatarRemove: d,
              title: p,
              avatarPreview: m,
              avatarPreviewPlaceholder: f,
              ...h
            } = e,
            g = () => {
              r(!t);
            },
            v = (e) =>
              null === e
                ? l("")
                : (gt(e).then(l),
                  c.setLoading(),
                  u(e)
                    .then(() => {
                      g(), c.setIdle();
                    })
                    .catch((e) => (0, C.S3)(e, [], c.setError))),
            b = s
              ? i.cloneElement(m, { imageUrl: s })
              : f
              ? i.cloneElement(f, { onClick: g })
              : m;
          return (0, o.BX)(a.Col, {
            gap: 4,
            children: [
              (0, o.BX)(a.Flex, {
                gap: 4,
                align: "center",
                ...h,
                children: [
                  b,
                  (0, o.BX)(a.Col, {
                    gap: 1,
                    children: [
                      (0, o.tZ)(a.Text, {
                        localizationKey: p,
                        variant: "regularMedium",
                      }),
                      (0, o.BX)(a.Flex, {
                        elementDescriptor: a.descriptors.avatarImageActions,
                        gap: 4,
                        children: [
                          (0, o.tZ)(a.Button, {
                            elementDescriptor:
                              a.descriptors.avatarImageActionsUpload,
                            localizationKey: t
                              ? (0, a.localizationKeys)(
                                  "userProfile.formButtonReset"
                                )
                              : (0, a.localizationKeys)(
                                  "userProfile.profilePage.imageFormSubtitle"
                                ),
                            isDisabled: c.isLoading,
                            variant: "link",
                            onClick: (e) => {
                              var t;
                              null === (t = e.target) ||
                                void 0 === t ||
                                t.blur(),
                                g();
                            },
                          }),
                          !!d &&
                            !t &&
                            (0, o.tZ)(a.Button, {
                              elementDescriptor:
                                a.descriptors.avatarImageActionsRemove,
                              localizationKey: (0, a.localizationKeys)(
                                "userProfile.profilePage.imageFormDestructiveActionSubtitle"
                              ),
                              isDisabled: c.isLoading,
                              sx: (e) => ({ color: e.colors.$danger500 }),
                              variant: "link",
                              onClick: () => (
                                c.setLoading(),
                                v(null),
                                null == d ? void 0 : d()
                              ),
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              t && (0, o.tZ)(xe, { onFileDrop: v }),
            ],
          });
        },
        bt = (e) => (0, o.tZ)(a.Col, { ...e }),
        yt = (e) =>
          (0, o.tZ)(bt, {
            sx: (e) => ({
              backgroundColor: e.colors.$blackAlpha20,
              border: `${e.borders.$normal} ${e.colors.$blackAlpha200}`,
              borderRight: 0,
              borderLeft: 0,
            }),
            ...e,
          }),
        xt = (e) => {
          const t = (0, n.v)(),
            r = (0, b._m)(),
            {
              icon: i,
              label: s,
              onClick: l,
              iconElementDescriptor: c,
              sx: u,
              iconElementId: d,
              textElementDescriptor: p,
              textElementId: m,
              iconBoxElementDescriptor: f,
              iconBoxElementId: h,
              trailing: g,
              ...v
            } = e;
          return (0, o.BX)(a.Button, {
            variant: "ghost",
            colorScheme: "neutral",
            textVariant: "buttonSmallRegular",
            focusRing: !1,
            hoverAsFocus: !0,
            sx: [
              (e) => ({
                flex: "1",
                borderRadius: 0,
                gap: e.space.$4,
                padding: `${e.space.$3x5} ${e.space.$6}`,
                justifyContent: "flex-start",
              }),
              u,
            ],
            isDisabled: t.isLoading,
            onClick: async (e) => {
              t.setLoading(), r.setLoading();
              try {
                await (null == l ? void 0 : l(e));
              } finally {
                t.setIdle(), r.setIdle();
              }
            },
            role: "menuitem",
            ...v,
            children: [
              (0, o.tZ)(a.Flex, {
                elementDescriptor: f,
                elementId: h,
                justify: "center",
                sx: (e) => ({ flex: `0 0 ${e.sizes.$11}` }),
                children: r.isLoading
                  ? (0, o.tZ)(a.Spinner, { size: "xs" })
                  : (0, o.tZ)(a.Icon, {
                      elementDescriptor: c,
                      elementId: d,
                      icon: i,
                      sx: (e) => ({
                        color: e.colors.$blackAlpha400,
                        width: e.sizes.$3,
                        height: e.sizes.$3,
                      }),
                    }),
              }),
              (0, o.tZ)(a.Text, {
                localizationKey: s,
                elementDescriptor: p,
                elementId: m,
                as: "span",
                variant: "smallRegular",
                colorScheme: "neutral",
              }),
              g,
            ],
          });
        },
        wt = i.forwardRef((e, t) =>
          (0, o.tZ)(a.Flow.Part, {
            part: "popover",
            children: (0, o.tZ)(K, {
              ...e,
              ref: t,
              sx: (e) => ({
                padding: `${e.space.$6} 0`,
                width: e.sizes.$94,
                maxWidth: `calc(100vw - ${e.sizes.$8})`,
                zIndex: e.zIndices.$modal,
                animation: `${p.animations.dropdownSlideInScaleAndFade} 140ms `,
              }),
              children: e.children,
            }),
          })
        ),
        St = (e) =>
          (0, o.tZ)(a.Link, {
            colorScheme: "neutral",
            isExternal: !0,
            size: "xss",
            ...e,
          }),
        _t = (e) => {
          const { sx: t, ...r } = e,
            { privacyPageUrl: n, termsPageUrl: i } = (0, a.useAppearance)()
              .parsedLayout;
          return i || n
            ? (0, o.BX)(a.Flex, {
                gap: 4,
                sx: t,
                ...r,
                children: [
                  i &&
                    (0, o.tZ)(St, {
                      localizationKey: (0, a.localizationKeys)(
                        "footerPageLink__terms"
                      ),
                      elementDescriptor:
                        a.descriptors.userButtonPopoverFooterPagesLink,
                      elementId:
                        a.descriptors.userButtonPopoverFooterPagesLink.setId(
                          "terms"
                        ),
                      href: i,
                    }),
                  n &&
                    (0, o.tZ)(St, {
                      localizationKey: (0, a.localizationKeys)(
                        "footerPageLink__privacy"
                      ),
                      elementDescriptor:
                        a.descriptors.userButtonPopoverFooterPagesLink,
                      elementId:
                        a.descriptors.userButtonPopoverFooterPagesLink.setId(
                          "privacy"
                        ),
                      href: n,
                    }),
                ],
              })
            : null;
        },
        Ct = {
          Root: wt,
          Main: (e) => {
            const { sx: t, ...r } = e;
            return (0, o.tZ)(a.Flex, {
              direction: "col",
              sx: t,
              ...r,
              children: e.children,
            });
          },
          Footer: (e) => {
            const { sx: t, ...r } = e,
              { branded: n } = (0, O.useEnvironment)().displayConfig,
              { privacyPageUrl: i, termsPageUrl: s } = (0, a.useAppearance)()
                .parsedLayout;
            return n || i || s
              ? (0, o.BX)(a.Flex, {
                  justify: "between",
                  sx: [
                    (e) => ({
                      padding: `${e.space.$6}`,
                      paddingBottom: 0,
                      "&:empty": { padding: "0" },
                    }),
                    t,
                  ],
                  ...r,
                  children: [(0, o.tZ)(V, {}), (0, o.tZ)(_t, {})],
                })
              : null;
          },
        },
        $t = (e) => e.trim(),
        kt = (e) => {
          const { t: t } = (0, a.useLocalizations)(),
            {
              sx: r,
              placeholder: n,
              validate: s = () => !0,
              value: l,
              onChange: c,
              autoFocus: u,
              validateUnsubmittedEmail: d = () => null,
              ...m
            } = e,
            f = l.split(",").map($t).filter(Boolean),
            h = new Set(f),
            g = i.useRef(!0),
            v = i.useRef(null),
            [b, y] = i.useState(""),
            x = (e) => {
              c({ target: { value: e.join(",") } }), S(), d("");
            },
            w = (e) => {
              const t = (Array.isArray(e) ? [...e] : [e])
                .map($t)
                .filter(Boolean)
                .filter(s)
                .filter((e) => !h.has(e));
              t.length && (x([...f, ...t]), y(""), S());
            },
            S = () => {
              var e;
              null === (e = v.current) || void 0 === e || e.focus();
            };
          return (0, o.BX)(a.Flex, {
            elementDescriptor: a.descriptors.tagInputContainer,
            align: "start",
            gap: 2,
            wrap: "wrap",
            onClick: S,
            onFocus: S,
            sx: [
              (e) => ({
                maxWidth: "100%",
                padding: `${e.space.$2x5} ${e.space.$4}`,
                backgroundColor: e.colors.$colorInputBackground,
                color: e.colors.$colorInputText,
                minHeight: e.sizes.$20,
                maxHeight: e.sizes.$60,
                overflowY: "auto",
                ...p.common.borderVariants(e).normal,
              }),
              r,
            ],
            ...m,
            children: [
              f.map((e) =>
                (0, o.tZ)(
                  Pt,
                  {
                    onRemoveClick: () =>
                      ((e) => {
                        x(f.filter((t) => t !== e));
                      })(e),
                    children: e,
                  },
                  e
                )
              ),
              (0, o.tZ)(a.Input, {
                ref: v,
                value: b,
                type: "email",
                "data-testid": "tag-input",
                placeholder: f.length ? void 0 : t(n),
                onKeyDown: (e) => {
                  const { key: t } = e;
                  ("," !== t && " " !== t && "Enter" !== t) || !b.length
                    ? "Backspace" === t &&
                      !b.length &&
                      f.length &&
                      g.current &&
                      (e.preventDefault(), x(f.slice(0, -1)))
                    : (e.preventDefault(), w(b)),
                    (g.current = !1);
                },
                onKeyUp: () => {
                  g.current = !0;
                },
                onChange: (e) => {
                  y(e.target.value), d(e.target.value);
                },
                onPaste: (e) => {
                  e.preventDefault(),
                    w(
                      (e.clipboardData.getData("text") || "")
                        .split(/,| |\n|\t/)
                        .filter(Boolean)
                        .map((e) => e.trim())
                    );
                },
                onBlur: (e) => {
                  e.preventDefault(), w(b);
                },
                focusRing: !1,
                autoFocus: u,
                sx: (e) => ({
                  flexGrow: 1,
                  border: "none",
                  width: "initial",
                  padding: 0,
                  lineHeight: e.space.$6,
                  paddingLeft: e.space.$1,
                }),
              }),
            ],
          });
        },
        Pt = (e) => {
          const { onRemoveClick: t, children: r, ...n } = e;
          return (0, o.BX)(a.Flex, {
            elementDescriptor: a.descriptors.tagPillContainer,
            onClick: t,
            gap: 1,
            center: !0,
            ...n,
            sx: (e) => ({
              padding: `${e.space.$1x5} ${e.space.$3}`,
              backgroundColor: e.colors.$blackAlpha50,
              borderRadius: e.radii.$sm,
              cursor: "pointer",
              ":hover svg": { color: e.colors.$danger500 },
              overflow: "hidden",
            }),
            children: [
              (0, o.tZ)(a.Text, {
                variant: "smallRegular",
                truncate: !0,
                children: r,
              }),
              (0, o.tZ)(a.Icon, {
                elementDescriptor: a.descriptors.tagPillIcon,
                size: "sm",
                icon: s.v3,
                sx: (e) => ({
                  color: e.colors.$blackAlpha500,
                  transform: "translateY(1px) rotate(45deg)",
                }),
              }),
            ],
          });
        },
        It = (e) => {
          const { actions: t, elementId: r } = e;
          return (0, o.BX)(je, {
            elementId: r,
            children: [
              (0, o.tZ)(Ue, {
                children: (0, o.tZ)(a.Button, {
                  size: "xs",
                  sx: (e) => ({
                    opacity: e.opacity.$inactive,
                    ":hover": { opacity: 1 },
                  }),
                  colorScheme: "neutral",
                  variant: "ghost",
                  children: (0, o.tZ)(a.Icon, { icon: s.g4 }),
                }),
              }),
              (0, o.tZ)(Ve, {
                children: t.map((e, t) =>
                  (0, o.tZ)(
                    He,
                    {
                      destructive: e.isDestructive,
                      onClick: e.onClick,
                      isDisabled: e.isDisabled,
                      localizationKey: e.label,
                    },
                    t
                  )
                ),
              }),
            ],
          });
        };
      var Bt = r(4334);
      const Rt = (e) => {
          const { navigateToFlowStart: t } = (0, b.zk)(),
            { isDisabled: r, submitLabel: n, resetLabel: i, ...a } = e;
          return (0, o.BX)(Tt, {
            children: [
              (0, o.tZ)(S.SubmitButton, {
                block: !1,
                isDisabled: r,
                localizationKey:
                  n || (0, Bt.u1)("userProfile.formButtonPrimary__continue"),
                ...a,
              }),
              (0, o.tZ)(S.ResetButton, {
                localizationKey: i || (0, Bt.u1)("userProfile.formButtonReset"),
                block: !1,
                onClick: t,
              }),
            ],
          });
        },
        Tt = (e) =>
          (0, o.tZ)(a.Flex, {
            direction: "rowReverse",
            gap: 2,
            ...e,
            sx: [(e) => ({ marginTop: e.space.$4 }), e.sx],
            children: e.children,
          }),
        At = (e) => {
          const { navigateToFlowStart: t } = (0, b.zk)();
          return (0, o.tZ)(a.Button, {
            textVariant: "buttonExtraSmallBold",
            variant: "ghost",
            onClick: t,
            ...e,
          });
        },
        zt = (e) => {
          const {
            text: t,
            title: r,
            finishLabel: n,
            onFinish: i,
            contents: s,
            ...l
          } = e;
          return (0, o.BX)(mt, {
            headerTitle: r,
            ...l,
            children: [
              (0, o.tZ)(a.Box, {
                children: Array.isArray(t)
                  ? t.map((e) =>
                      (0, o.tZ)(
                        a.Text,
                        {
                          localizationKey: e,
                          variant: "regularRegular",
                          sx: (e) => ({
                            display: "inline",
                            ":not(:last-of-type)": { marginRight: e.sizes.$1 },
                          }),
                        },
                        e.key
                      )
                    )
                  : (0, o.tZ)(a.Text, {
                      localizationKey: t,
                      variant: "regularRegular",
                    }),
              }),
              s,
              (0, o.tZ)(Tt, {
                children: (0, o.tZ)(At, {
                  variant: "solid",
                  autoFocus: !0,
                  localizationKey:
                    n || (0, Bt.u1)("userProfile.formButtonPrimary__finish"),
                  elementDescriptor: a.descriptors.formButtonPrimary,
                  ...(i ? { onClick: i } : {}),
                }),
              }),
            ],
          });
        },
        Dt = (e) => {
          const { title: t, children: r, id: n, subtitle: i, ...s } = e;
          return (0, o.BX)(a.Col, {
            elementDescriptor: a.descriptors.profileSection,
            elementId: a.descriptors.profileSection.setId(n),
            ...s,
            gap: 2,
            children: [
              (0, o.tZ)(Ot, {
                localizationKey: t,
                elementDescriptor: a.descriptors.profileSectionTitle,
                elementId: a.descriptors.profileSectionTitle.setId(n),
                textElementDescriptor: a.descriptors.profileSectionTitleText,
                textElementId: a.descriptors.profileSectionTitleText.setId(n),
              }),
              i &&
                (0, o.tZ)(Et, {
                  localizationKey: i,
                  elementDescriptor: a.descriptors.profileSectionSubtitle,
                  elementId: a.descriptors.profileSectionSubtitle.setId(n),
                  textElementDescriptor:
                    a.descriptors.profileSectionSubtitleText,
                  textElementId:
                    a.descriptors.profileSectionSubtitleText.setId(n),
                }),
              (0, o.tZ)(a.Col, {
                elementDescriptor: a.descriptors.profileSectionContent,
                elementId: a.descriptors.profileSectionContent.setId(n),
                gap: 2,
                children: r,
              }),
            ],
          });
        },
        Ot = (e) => {
          const {
            textElementDescriptor: t,
            textElementId: r,
            localizationKey: n,
            ...i
          } = e;
          return (0, o.tZ)(a.Flex, {
            ...i,
            sx: (e) => ({
              borderBottom: `${e.borders.$normal} ${e.colors.$blackAlpha100}`,
            }),
            children: (0, o.tZ)(a.Text, {
              localizationKey: n,
              variant: "largeMedium",
              elementDescriptor: t,
              elementId: r,
            }),
          });
        },
        Et = (e) => {
          const {
            textElementDescriptor: t,
            textElementId: r,
            localizationKey: n,
            ...i
          } = e;
          return (0, o.tZ)(a.Flex, {
            ...i,
            sx: (e) => ({ padding: `${e.space.$2} ${e.space.$none}` }),
            children: (0, o.tZ)(a.Text, {
              localizationKey: n,
              variant: "regularRegular",
              colorScheme: "neutral",
              elementDescriptor: t,
              elementId: r,
            }),
          });
        },
        Zt = (e) => {
          const {
              sx: t,
              children: r,
              icon: i,
              iconProps: s,
              showIconOnHover: l = !0,
              ...c
            } = e,
            u = (0, n.v)(),
            { sx: d, ...p } = s || {};
          return (0, o.BX)(a.Button, {
            variant: "ghost",
            colorScheme: "neutral",
            focusRing: !1,
            block: !0,
            hoverAsFocus: !0,
            isDisabled: u.isLoading,
            sx: [
              (e) => ({
                minHeight: "unset",
                height: e.space.$12,
                justifyContent: "space-between",
                padding: `${e.space.$3} ${e.space.$6}`,
                ...(l ? { ":hover > svg": { visibility: "initial" } } : {}),
              }),
              t,
            ],
            ...c,
            children: [
              r,
              i &&
                (0, o.tZ)(a.Icon, {
                  icon: i,
                  sx: [
                    (e) => ({
                      color: e.colors.$blackAlpha500,
                      marginLeft: e.space.$2,
                      visibility: l ? "hidden" : "initial",
                    }),
                    d,
                  ],
                  ...p,
                }),
            ],
          });
        };
      function Lt(e) {
        return (0, o.BX)(a.Flex, {
          sx: (e) => ({
            gap: e.space.$2,
            padding: `${e.space.$3} ${e.space.$4}`,
            backgroundColor: e.colors.$blackAlpha50,
            borderRadius: e.radii.$md,
          }),
          children: [
            (0, o.tZ)(a.Icon, {
              icon: s.I$,
              sx: (e) => ({ opacity: e.opacity.$disabled }),
            }),
            (0, o.tZ)(a.Text, {
              localizationKey: e.message,
              sx: (e) => ({ color: e.colors.$blackAlpha700 }),
            }),
          ],
        });
      }
      const Ft = (e) =>
        (0, i.forwardRef)((t, r) => {
          const { parsedLayout: n } = (0, a.useAppearance)();
          return (0, o.tZ)(e, {
            ...t,
            ref: r,
            sx: [
              n.shimmer
                ? (e) => ({
                    ":hover": {
                      "--cl-shimmer-hover-shadow": e.shadows.$shadowShimmer,
                      "--cl-shimmer-hover-transform":
                        "skew(-45deg) translateX(600%)",
                      "--cl-shimmer-hover-after-transform":
                        "skewX(45deg) translateX(-150%)",
                    },
                  })
                : {},
              t.sx,
            ],
          });
        });
    },
    8441: function (e, t, r) {
      r.d(t, {
        _6: function () {
          return A._;
        },
        VP: function () {
          return f;
        },
        p5: function () {
          return x.p;
        },
        Nr: function () {
          return I;
        },
        I7: function () {
          return T;
        },
        dB: function () {
          return o;
        },
        E2: function () {
          return d.E;
        },
        vO: function () {
          return h.v;
        },
        ib: function () {
          return g.i;
        },
        YD: function () {
          return v;
        },
        _m: function () {
          return y;
        },
        zk: function () {
          return D;
        },
        Sv: function () {
          return C;
        },
        Tb: function () {
          return k;
        },
        FH: function () {
          return b;
        },
        n$: function () {
          return c;
        },
        Pr: function () {
          return B;
        },
        dw: function () {
          return P;
        },
        Fm: function () {
          return u;
        },
      });
      var n = r(2784);
      function o(e, t) {
        const [r, o] = (0, n.useState)(void 0);
        return (
          (0, n.useEffect)(() => {
            let n;
            return (
              e && !r
                ? (n = setTimeout(() => o(e), t))
                : !e && r
                ? (n = setTimeout(() => o(void 0), t))
                : o(e),
              () => clearTimeout(n)
            );
          }, [e, t, r]),
          r
        );
      }
      var i = r(1416),
        a = r(172);
      function s(e = "saml_custom") {
        var t;
        return (0, a.WY)(
          null === (t = i.SAML_IDPS[e]) || void 0 === t ? void 0 : t.logo
        );
      }
      function l(e = "saml_custom") {
        var t;
        return null === (t = i.SAML_IDPS[e]) || void 0 === t ? void 0 : t.name;
      }
      const c = () => ({ getSamlProviderLogoUrl: s, getSamlProviderName: l }),
        u = (e, t) => {
          n.useEffect(() => {
            const r = [e].flat().filter((e) => !!e);
            if (r.length)
              return (
                r.forEach((e) => window.addEventListener(e, t)),
                () => {
                  r.forEach((e) => window.removeEventListener(e, t));
                }
              );
          }, [e, t]);
        };
      var d = r(2750),
        p = r(381),
        m = r.n(p);
      function f(e, t = {}) {
        const [r, o] = (0, n.useState)(!1),
          { timeout: i = 1500, ...a } =
            "number" == typeof t ? { timeout: t } : t,
          s = (0, n.useCallback)(() => {
            const t = m()(e, a);
            o(t);
          }, [e, a]);
        return (
          (0, n.useEffect)(() => {
            let e = null;
            return (
              r &&
                (e = window.setTimeout(() => {
                  o(!1);
                }, i)),
              () => {
                e && window.clearTimeout(e);
              }
            );
          }, [i, r]),
          { value: e, onCopy: s, hasCopied: r }
        );
      }
      var h = r(7562),
        g = r(5599);
      const v = (e) => {
        const [t, r] = (0, n.useState)(!1),
          o = (0, n.useRef)(null),
          i = Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0],
          a = (0, n.useRef)();
        return (
          (a.current = e.onChange),
          {
            inView: t,
            ref: (0, n.useCallback)((t) => {
              t
                ? ((o.current = new IntersectionObserver(
                    (e) => {
                      e.forEach((e) => {
                        const t =
                          e.isIntersecting &&
                          i.some((t) => e.intersectionRatio >= t);
                        r(t), a.current && a.current(t, e);
                      });
                    },
                    { root: e.root, rootMargin: e.rootMargin, threshold: i }
                  )),
                  o.current.observe(t))
                : o.current && o.current.disconnect();
            }, []),
          }
        );
      };
      function b(e) {
        const [t, r] = n.useState(e),
          o = n.useRef(!0);
        return (
          n.useEffect(
            () => () => {
              o.current = !1;
            },
            []
          ),
          [
            t,
            n.useCallback((e) => {
              o.current && r(e);
            }, []),
          ]
        );
      }
      const y = (e) => {
        const [t, r] = b({ status: "idle", metadata: void 0, ...e });
        return {
          status: t.status,
          setIdle: (e) => r({ status: "idle", metadata: e }),
          setError: (e) => r({ status: "error", metadata: e }),
          setLoading: (e) => r({ status: "loading", metadata: e }),
          loadingMetadata: "loading" === t.status ? t.metadata : void 0,
          isLoading: "loading" === t.status,
          isIdle: "idle" === t.status,
        };
      };
      var x = r(7598),
        w = (r(947), r(1646)),
        S = r(5580),
        _ = r(4061);
      const C = (e = {}) => {
          const { bubbles: t = !0, outsidePress: r } = e,
            [o, i] = n.useState(e.defaultOpen || !1),
            a = (0, w.jV)(),
            {
              update: s,
              refs: l,
              strategy: c,
              x: u,
              y: d,
              context: p,
            } = (0, w.YF)({
              open: o,
              onOpenChange: i,
              nodeId: a,
              whileElementsMounted: !1 === e.autoUpdate ? void 0 : S.Me,
              placement: e.placement || "bottom-start",
              middleware: [(0, _.cv)(e.offset || 6), (0, _.RR)(), (0, _.uY)()],
            }),
            { setReference: m, setFloating: f } = l;
          return (
            (0, w.bQ)(p, { bubbles: t, outsidePress: r }),
            (0, n.useEffect)(() => {
              e.defaultOpen && s();
            }, []),
            {
              reference: m,
              floating: f,
              toggle: n.useCallback(() => i((e) => !e), [i]),
              open: n.useCallback(() => i(!0), [i]),
              nodeId: a,
              close: n.useCallback(() => i(!1), [i]),
              isOpen: o,
              styles: {
                position: c,
                top: null != d ? d : 0,
                left: null != u ? u : 0,
              },
              context: p,
            }
          );
        },
        $ = "(prefers-reduced-motion: no-preference)";
      function k() {
        const [e, t] = (0, n.useState)(!0);
        return (
          (0, n.useEffect)(() => {
            const e = window.matchMedia($);
            t(!window.matchMedia($).matches);
            const r = (e) => {
              t(!e.matches);
            };
            return (
              e.addEventListener("change", r),
              () => e.removeEventListener("change", r)
            );
          }, []),
          e
        );
      }
      const P = (e) => {
        const { items: t, comparator: r, searchTermForItem: o } = e,
          [i, a] = n.useState(""),
          s = n.useMemo(
            () =>
              t.reduce(
                (e, t) => (e.set(t, null == o ? void 0 : o(t)), e),
                new Map()
              ),
            [t]
          ),
          l = n.useMemo(
            () => (i ? t.filter((e) => r(i, e, s.get(e))) : t),
            [t, i]
          );
        return {
          searchInputProps: {
            onChange: (e) => a(e.target.value || ""),
            value: i,
          },
          filteredItems: l,
        };
      };
      function I(e, t) {
        const [r, o] = (0, n.useState)(e),
          [i, a] = (0, n.useState)(void 0);
        return (
          (0, n.useEffect)(
            () => (
              i && (clearTimeout(i), a(void 0)),
              a(
                setTimeout(() => {
                  o(e), a(void 0);
                }, t || 500)
              ),
              () => {
                i && (clearTimeout(i), a(void 0));
              }
            ),
            [JSON.stringify(e), t]
          ),
          r
        );
      }
      const B = (e) => {
        let t, r;
        return {
          disableScroll: () => {
            (t = getComputedStyle(e).paddingRight),
              (r = getComputedStyle(e).overflow);
            const n = e.clientWidth;
            e.style.overflow = "hidden";
            const o = e.clientWidth,
              i = Number.parseInt(t.replace("px", ""));
            e.style.paddingRight = `${o - n + i}px`;
          },
          enableScroll: () => {
            (e.style.overflow = r), t && (e.style.paddingRight = t);
          },
        };
      };
      var R = r(9444);
      const T = (e, t) =>
        n.useMemo(
          e,
          ((e) => {
            const t = n.useRef(e);
            return (
              (0, R.J)(e, t.current) || (t.current = e),
              n.useMemo(() => t.current, [t.current])
            );
          })(t)
        );
      var A = r(3859),
        z = r(3736);
      const D = () => {
        const e = (0, z.useRouter)();
        return {
          navigateToFlowStart: async () => {
            var t, r;
            const n = "/" + e.basePath + e.flowStartPath;
            return n !== e.currentPath
              ? e.navigate(n)
              : (
                  null === (t = e.urlStateParam) || void 0 === t
                    ? void 0
                    : t.path
                )
              ? e.navigate(
                  "/" +
                    e.basePath +
                    (null === (r = e.urlStateParam) || void 0 === r
                      ? void 0
                      : r.startPath)
                )
              : void 0;
          },
        };
      };
    },
    960: function (e, t, r) {
      r.d(t, {
        l: function () {
          return s;
        },
      });
      var n = r(4411),
        o = r(8173),
        i = r(1609),
        a = r(7562);
      function s({ filterOutFactor: e }) {
        const { supportedFirstFactors: t } = (0, o.useCoreSignIn)(),
          { strategies: r } = (0, a.v)(),
          s =
            t.filter(
              (t) =>
                t.strategy !== (null == e ? void 0 : e.strategy) &&
                !(0, n.Vh)(t.strategy)
            ).length +
              r.length >
            0,
          l = t
            .filter(
              (t) =>
                !(
                  t.strategy.startsWith("oauth_") ||
                  t.strategy === (null == e ? void 0 : e.strategy)
                )
            )
            .filter((e) => (0, n.xT)(e))
            .sort(i.U6);
        return { hasAnyStrategy: s, hasFirstParty: !!l, firstPartyFactors: l };
      }
    },
    2750: function (e, t, r) {
      r.d(t, {
        E: function () {
          return o;
        },
      });
      var n = r(2784);
      function o(e) {
        const { startEmailLinkFlow: t, cancelEmailLinkFlow: r } = n.useMemo(
          () => e.createEmailLinkFlow(),
          [e]
        );
        return (
          n.useEffect(() => r, []),
          { startEmailLinkFlow: t, cancelEmailLinkFlow: r }
        );
      }
    },
    7562: function (e, t, r) {
      r.d(t, {
        v: function () {
          return u;
        },
      });
      var n = r(1416),
        o = r(172),
        i = r(7568),
        a = r(1609);
      const s = n.OAUTH_PROVIDERS.map((e) => e.strategy),
        l = (0, a.sq)(
          [...n.OAUTH_PROVIDERS, ...n.WEB3_PROVIDERS].map((e) => [
            e.provider,
            {
              strategy: e.strategy,
              name: e.name,
              iconUrl: (0, o.WY)(e.provider),
            },
          ])
        ),
        c = (0, a.sq)(
          [...n.OAUTH_PROVIDERS, ...n.WEB3_PROVIDERS].map((e) => [
            e.strategy,
            { id: e.provider, name: e.name, iconUrl: (0, o.WY)(e.provider) },
          ])
        ),
        u = () => {
          const {
              socialProviderStrategies: e,
              web3FirstFactors: t,
              authenticatableSocialStrategies: r,
            } = (0, i.O)().userSettings,
            n = e.filter((e) => s.includes(e)),
            o = r.filter((e) => s.includes(e));
          return {
            strategies: [...n, ...t],
            web3Strategies: [...t],
            authenticatableOauthStrategies: [...o],
            strategyToDisplayData: c,
            providerToDisplayData: l,
          };
        };
    },
    5599: function (e, t, r) {
      r.d(t, {
        i: function () {
          return s;
        },
      });
      var n = r(2784);
      let o = new Map();
      const i = new Set(),
        a = (e) => JSON.stringify(e),
        s = (e, t, r) => {
          const {
              subscribeCache: s,
              getCache: l,
              setCache: c,
            } = ((e) => {
              const t = a(e);
              return {
                getCache: (0, n.useCallback)(() => o.get(t), [t]),
                setCache: (0, n.useCallback)(
                  (e) => {
                    o.set(t, e), i.forEach((e) => e());
                  },
                  [t]
                ),
                subscribeCache: (0, n.useCallback)(
                  (e) => (i.add(e), () => i.delete(e)),
                  []
                ),
              };
            })(t),
            u = (null == r ? void 0 : r.staleTime) || 12e4,
            d = (0, n.useRef)(e),
            p = (0, n.useSyncExternalStore)(s, l);
          return (
            (0, n.useEffect)(() => {
              var e, n;
              const o = !d.current,
                i =
                  Date.now() -
                    ((null === (e = l()) || void 0 === e
                      ? void 0
                      : e.cachedAt) || 0) <
                  u,
                a =
                  null === (n = l()) || void 0 === n ? void 0 : n.isValidating;
              o ||
                i ||
                a ||
                (c({
                  data: null,
                  isLoading: !l(),
                  isValidating: !0,
                  error: null,
                }),
                d
                  .current(t)
                  .then((e) => {
                    var t;
                    if (void 0 !== e) {
                      const n = "object" == typeof e ? { ...e } : e;
                      c({
                        data: n,
                        isLoading: !1,
                        isValidating: !1,
                        error: null,
                        cachedAt: Date.now(),
                      }),
                        null === (t = null == r ? void 0 : r.onSuccess) ||
                          void 0 === t ||
                          t.call(r, n);
                    }
                  })
                  .catch(() => {
                    c({
                      data: null,
                      isLoading: !1,
                      isValidating: !1,
                      error: !0,
                      cachedAt: Date.now(),
                    });
                  }));
            }, [a(t), c, l]),
            { ...p }
          );
        };
    },
    5802: function (e, t, r) {
      r.d(t, {
        e: function () {
          return l;
        },
        q: function () {
          return c;
        },
      });
      var n = r(8173),
        o = r(4334),
        i = r(1609),
        a = r(5599);
      const s = { pageSize: 20 },
        l = (e = !0) => {
          var t;
          const { organization: r } = (0, n.useCoreOrganization)(),
            { data: o, isLoading: i } = (0, a.i)(
              e ? (null == r ? void 0 : r.getRoles) : void 0,
              s
            );
          return {
            isLoading: i,
            options:
              null === (t = null == o ? void 0 : o.data) || void 0 === t
                ? void 0
                : t.map((e) => ({ value: e.key, label: e.name })),
          };
        },
        c = () => {
          const { t: e } = (0, o.zJ)();
          return {
            localizeCustomRole: (t) => e((0, i.Oi)(t)) || e((0, i.JD)(t)),
          };
        };
    },
    7598: function (e, t, r) {
      r.d(t, {
        i: function () {
          return l;
        },
        p: function () {
          return c;
        },
      });
      var n = r(4096),
        o = r(2784),
        i = r(2469),
        a = r(4334),
        s = r(947);
      const l = (e, t) => {
          const { t: r, locale: l } = (0, a.zJ)(),
            {
              onValidationError: c = n.ZT,
              onValidationSuccess: u = n.ZT,
              onValidationWarning: d = n.ZT,
              onValidationInfo: p = n.ZT,
              onValidationComplexity: m,
            } = t || {},
            f = (0, o.useCallback)(
              (t) => {
                var n, o, i;
                if (
                  Object.values((null == t ? void 0 : t.complexity) || {})
                    .length > 0
                ) {
                  const o = (0, s.e)({
                    config: e,
                    t: r,
                    failedValidations: t.complexity,
                    locale: l,
                  });
                  return (
                    null === (n = t.complexity) || void 0 === n
                      ? void 0
                      : n.min_length
                  )
                    ? p(o)
                    : c(o);
                }
                if (
                  "fail" ===
                  (null === (o = null == t ? void 0 : t.strength) ||
                  void 0 === o
                    ? void 0
                    : o.state)
                ) {
                  const e = t.strength.keys
                    .map((e) => r((0, a.u1)(e)))
                    .join(" ");
                  return c(e);
                }
                if (
                  "pass" ===
                  (null === (i = null == t ? void 0 : t.strength) ||
                  void 0 === i
                    ? void 0
                    : i.state)
                ) {
                  const e = t.strength.keys
                    .map((e) => r((0, a.u1)(e)))
                    .join(" ");
                  return d(e);
                }
                return u();
              },
              [t, r, l]
            );
          return {
            validatePassword: (0, o.useMemo)(
              () => (0, i.z)(e, { onValidation: f, onValidationComplexity: m }),
              [f]
            ),
          };
        },
        c = ({ passwordField: e, confirmPasswordField: t }) => {
          const { t: r } = (0, a.zJ)(),
            n = (0, o.useCallback)((t) => e.value === t, [e.value]),
            i = (0, o.useMemo)(() => n(t.value), [n, t.value]);
          return {
            setConfirmPasswordFeedback: (0, o.useCallback)(
              (e) => {
                n(e)
                  ? t.setSuccess(
                      r((0, a.u1)("formFieldError__matchingPasswords"))
                    )
                  : t.setError(
                      r((0, a.u1)("formFieldError__notMatchingPasswords"))
                    );
              },
              [t.setError, t.setSuccess, r, n]
            ),
            isPasswordMatch: i,
          };
        };
    },
    947: function (e, t, r) {
      r.d(t, {
        e: function () {
          return a;
        },
      }),
        r(2784);
      var n = r(4334),
        o = r(1609);
      const i = {
          max_length: [
            "unstable__errors.passwordComplexity.maximumLength",
            "length",
          ],
          min_length: [
            "unstable__errors.passwordComplexity.minimumLength",
            "length",
          ],
          require_numbers: "unstable__errors.passwordComplexity.requireNumbers",
          require_lowercase:
            "unstable__errors.passwordComplexity.requireLowercase",
          require_uppercase:
            "unstable__errors.passwordComplexity.requireUppercase",
          require_special_char:
            "unstable__errors.passwordComplexity.requireSpecialCharacter",
        },
        a = ({ config: e, failedValidations: t, locale: r, t: a }) => {
          if (!t || 0 === Object.keys(t).length) return "";
          const s = (null == t ? void 0 : t.min_length) || !1,
            l = Object.entries(t)
              .filter((e) => !s || "min_length" === e[0])
              .filter(([, e]) => !!e)
              .map(([t]) => {
                const r = i[t];
                if (Array.isArray(r)) {
                  const [o, i] = r;
                  return a((0, n.u1)(o, { [i]: e[t] }));
                }
                return a((0, n.u1)(r));
              }),
            c = (0, o.z$)(l, r);
          return (0, o.$M)(
            `${a(
              (0, n.u1)("unstable__errors.passwordComplexity.sentencePrefix")
            )} ${c}`
          );
        };
    },
    9210: function (e, t, r) {
      r.d(t, {
        E: function () {
          return a;
        },
      });
      var n = r(2784),
        o = r(8173),
        i = r(3736);
      const a = (e = 2e3) => {
        const { queryString: t } = (0, i.useRouter)(),
          { setActive: r } = (0, o.useCoreClerk)(),
          { navigateAfterSignIn: a } = (0, o.useSignInContext)();
        (0, n.useEffect)(() => {
          let n;
          const o = new URLSearchParams(t).get("createdSessionId");
          return (
            o &&
              (n = setTimeout(() => {
                r({ session: o, beforeEmit: a });
              }, e)),
            () => {
              n && clearTimeout(n);
            }
          );
        }, [r, a, t]);
      };
    },
    8150: function (e, t, r) {
      r.d(t, {
        H: function () {
          return a;
        },
      });
      var n = r(2784),
        o = r(996),
        i = r(8173);
      function a() {
        const e = (0, i.useCoreClerk)(),
          { supportEmail: t } = (0, i.useOptions)(),
          { displayConfig: r } = (0, i.useEnvironment)(),
          { supportEmail: a } = r;
        return n.useMemo(
          () =>
            t ||
            a ||
            (0, o.aR)({ localPart: "support", frontendApi: e.frontendApi }),
          [e.frontendApi, t, a]
        );
      }
    },
    4804: function (e, t, r) {
      r.d(t, {
        Y4: function () {
          return s;
        },
        LZ: function () {
          return u;
        },
        hc: function () {
          return f;
        },
        Nj: function () {
          return v;
        },
        Fj: function () {
          return x;
        },
        iU: function () {
          return _;
        },
        fU: function () {
          return P;
        },
        TU: function () {
          return R;
        },
        x8: function () {
          return z;
        },
        tc: function () {
          return M;
        },
        eu: function () {
          return K;
        },
        Fh: function () {
          return J;
        },
        TZ: function () {
          return re;
        },
        GT: function () {
          return ie;
        },
        bR: function () {
          return le;
        },
        SV: function () {
          return de;
        },
        bA: function () {
          return be;
        },
        N6: function () {
          return he;
        },
        gt: function () {
          return we;
        },
        I$: function () {
          return $e;
        },
        xP: function () {
          return Ie;
        },
        kh: function () {
          return Ae;
        },
        cN: function () {
          return Oe;
        },
        Yt: function () {
          return Le;
        },
        v2: function () {
          return je;
        },
        ij: function () {
          return He;
        },
        z: function () {
          return Ge;
        },
        ET: function () {
          return qe;
        },
        v3: function () {
          return et;
        },
        Zc: function () {
          return ot;
        },
        ds: function () {
          return st;
        },
        Qf: function () {
          return ut;
        },
        lv: function () {
          return gt;
        },
        kM: function () {
          return mt;
        },
        oX: function () {
          return yt;
        },
        g4: function () {
          return St;
        },
        qy: function () {
          return $t;
        },
        um: function () {
          return It;
        },
        gq: function () {
          return Tt;
        },
        n5: function () {
          return Dt;
        },
        av: function () {
          return Et;
        },
      });
      var n,
        o = r(2784);
      function i() {
        return (
          (i = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          i.apply(this, arguments)
        );
      }
      var a,
        s = (e) =>
          o.createElement(
            "svg",
            i(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
              },
              e
            ),
            n ||
              (n = o.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M20 12H4m6 6-6-6 6-6",
              }))
          );
      function l() {
        return (
          (l = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          l.apply(this, arguments)
        );
      }
      var c,
        u = (e) =>
          o.createElement(
            "svg",
            l(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 20 20",
              },
              e
            ),
            a ||
              (a = o.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M3.3 10h13.4m-5-5 5 5-5 5",
              }))
          );
      function d() {
        return (
          (d = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          d.apply(this, arguments)
        );
      }
      var p,
        m,
        f = (e) =>
          o.createElement(
            "svg",
            d(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 18 16",
              },
              e
            ),
            c ||
              (c = o.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                d: "M2.33.5C1.41.5.67 1.25.67 2.17v11.66c0 .92.74 1.67 1.66 1.67h13.34c.92 0 1.66-.75 1.66-1.67V2.17c0-.92-.74-1.67-1.66-1.67H2.33Zm9.9 8.33A3.33 3.33 0 0 1 5.67 8a3.33 3.33 0 0 1 6.56-.83H14a.83.83 0 1 1 0 1.66h-1.77ZM10.67 8a1.67 1.67 0 1 1-3.34 0 1.67 1.67 0 0 1 3.34 0Z",
                clipRule: "evenodd",
              }))
          );
      function h() {
        return (
          (h = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          h.apply(this, arguments)
        );
      }
      var g,
        v = (e) =>
          o.createElement(
            "svg",
            h(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 16 12",
              },
              e
            ),
            p ||
              (p = o.createElement("path", {
                fill: "currentColor",
                d: "M2 0a2 2 0 0 0-2 2v1h16V2a2 2 0 0 0-2-2H2Z",
              })),
            m ||
              (m = o.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                d: "M16 5H0v5c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V5ZM2 9c0-.6.4-1 1-1h1a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Zm5-1a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2H7Z",
                clipRule: "evenodd",
              }))
          );
      function b() {
        return (
          (b = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          b.apply(this, arguments)
        );
      }
      var y,
        x = (e) =>
          o.createElement(
            "svg",
            b(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 20 20",
              },
              e
            ),
            g ||
              (g = o.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "m5 7.5 5 5 5-5",
              }))
          );
      function w() {
        return (
          (w = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          w.apply(this, arguments)
        );
      }
      var S,
        _ = (e) =>
          o.createElement(
            "svg",
            w(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 16 16",
              },
              e
            ),
            y ||
              (y = o.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                d: "M14.4 4v6.4a1.6 1.6 0 0 1-1.6 1.6h-4l-4 3.2V12H3.2a1.6 1.6 0 0 1-1.6-1.6V4a1.6 1.6 0 0 1 1.6-1.6h9.6A1.6 1.6 0 0 1 14.4 4ZM5.6 6.4H4V8h1.6V6.4Zm1.6 0h1.6V8H7.2V6.4Zm4.8 0h-1.6V8H12V6.4Z",
                clipRule: "evenodd",
              }))
          );
      function C() {
        return (
          (C = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          C.apply(this, arguments)
        );
      }
      var $,
        k,
        P = (e) =>
          o.createElement(
            "svg",
            C(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 20 20",
              },
              e
            ),
            S ||
              (S = o.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.7-9.3a1 1 0 0 0-1.4-1.4L9 10.58l-1.3-1.3a1 1 0 0 0-1.4 1.42l2 2a1 1 0 0 0 1.4 0l4-4Z",
                clipRule: "evenodd",
              }))
          );
      function I() {
        return (
          (I = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          I.apply(this, arguments)
        );
      }
      var B,
        R = (e) =>
          o.createElement(
            "svg",
            I(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 12 16",
              },
              e
            ),
            $ ||
              ($ = o.createElement("path", {
                fill: "currentColor",
                d: "M4 1c0-.6.4-1 1-1h2a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1Z",
              })),
            k ||
              (k = o.createElement("path", {
                fill: "currentColor",
                d: "M2 1a2 2 0 0 0-2 2v11c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2 3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Z",
              }))
          );
      function T() {
        return (
          (T = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          T.apply(this, arguments)
        );
      }
      var A,
        z = (e) =>
          o.createElement(
            "svg",
            T(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 12 12",
              },
              e
            ),
            B ||
              (B = o.createElement("path", {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 1.7,
                d: "M11 1 1 11M1 1l10 10",
              }))
          );
      function D() {
        return (
          (D = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          D.apply(this, arguments)
        );
      }
      var O,
        E,
        Z,
        L,
        F,
        M = (e) =>
          o.createElement(
            "svg",
            D(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 16 16",
              },
              e
            ),
            A ||
              (A = o.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                d: "M9.49 1.17c-.38-1.56-2.6-1.56-2.98 0a1.53 1.53 0 0 1-2.29.95c-1.37-.84-2.94.73-2.1 2.1.54.89.06 2.05-.95 2.3-1.56.37-1.56 2.6 0 2.97a1.53 1.53 0 0 1 .95 2.29c-.84 1.37.73 2.94 2.1 2.1a1.53 1.53 0 0 1 2.3.95c.37 1.56 2.6 1.56 2.97 0a1.53 1.53 0 0 1 2.29-.95c1.37.84 2.94-.73 2.1-2.1a1.53 1.53 0 0 1 .95-2.3c1.56-.37 1.56-2.6 0-2.97a1.53 1.53 0 0 1-.95-2.29c.84-1.37-.73-2.94-2.1-2.1a1.53 1.53 0 0 1-2.3-.95ZM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
                clipRule: "evenodd",
              }))
          );
      function j() {
        return (
          (j = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          j.apply(this, arguments)
        );
      }
      var U,
        N,
        V,
        H,
        W,
        X,
        q,
        K = (e) =>
          o.createElement(
            "svg",
            j(
              {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "569.4 86.3 83.6 48.2",
              },
              e
            ),
            O ||
              (O = o.createElement("path", {
                fill: "var(--cl-chassis-back, black)",
                d: "M577 89.8c0-1.4.2-2 .6-2.6.5-.5 1.2-.9 2.8-.9h61.7c1.4 0 2 .3 2.5.8s.7 1.2.7 2.7v41c0 1.4-.2 2-.5 2.4a2.7 2.7 0 0 1-2.2 1.1h-63c-.8 0-1.6-.3-2-1-.4-.4-.6-1-.6-2.5v-41Z",
              })),
            E ||
              (E = o.createElement("path", {
                fill: "var(--cl-chassis-screen, #323232)",
                d: "M578.4 132.9h65.5c.3 0 .6-.2.8-.4.2-.2.2-.5.2-1.4V89.8c0-1.2-.1-2-.6-2.4-.5-.5-1-.7-2.2-.7h-61.7c-1.3 0-2 .3-2.5.8-.4.4-.5 1-.5 2.3v41.3c0 .9 0 1.2.2 1.4.2.2.5.4.8.4Z",
              })),
            Z ||
              (Z = o.createElement("path", {
                fillRule: "evenodd",
                stroke: "var(--cl-chassis-back1, 'gold')",
                strokeWidth: 0.3,
                d: "M611.2 88.5a.3.3 0 1 0 0-.5.3.3 0 1 0 0 .5Z",
                clipRule: "evenodd",
              })),
            L ||
              (L = o.createElement("path", {
                fill: "var(--cl-chassis-bottom, #191919)",
                fillRule: "evenodd",
                d: "M569.4 133.3v-.5H653v.5s-1.9.6-4 .8c-1.4.1-3.7.4-8.9.4h-57.4c-4.5 0-8.3-.3-10-.5-1.7-.2-3.3-.7-3.3-.7Z",
                clipRule: "evenodd",
              })),
            F ||
              (F = o.createElement("path", {
                fill: "var(--cl-screen, #111111)",
                fillRule: "evenodd",
                d: "M579.7 89.5h63v39.4h-63V89.5Z",
                clipRule: "evenodd",
              }))
          );
      function Y() {
        return (
          (Y = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          Y.apply(this, arguments)
        );
      }
      var G,
        J = (e) =>
          o.createElement(
            "svg",
            Y(
              {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "670.6 72.3 84 76",
              },
              e
            ),
            U ||
              (U = o.createElement("path", {
                fill: "var(--cl-chassis-screen, #6D6D6D)",
                fillRule: "evenodd",
                d: "M712.5 107.2v-.6h.1l.2.1v7.2a.1.1 0 0 1-.2.2l-.1-.3v-6.6Z",
                clipRule: "evenodd",
              })),
            N ||
              (N = o.createElement("path", {
                fill: "var(--cl-chassis-back, #6D6D6D)",
                fillRule: "evenodd",
                d: "M697.4 100v-.7h-.2a.1.1 0 0 0-.1.2v4.4s0 .2.2.2V100Z",
                clipRule: "evenodd",
              })),
            V ||
              (V = o.createElement("path", {
                fill: "var(--cl-chassis-screen, #6D6D6D)",
                fillRule: "evenodd",
                d: "M697.4 94v-.7h-.2a.1.1 0 0 0-.1.2v4.4s0 .2.2.2V94Z",
                clipRule: "evenodd",
              })),
            H ||
              (H = o.createElement("path", {
                fill: "var(--cl-chassis-back, #363636)",
                d: "M722.7 78.6c3.6 0 5.5 2.1 5.5 5.7v52.4c0 3.4-2.3 5.3-5.8 5.3H703c-3.8 0-5.8-2.4-5.7-5.4V84.3c0-3.6 2-5.7 5.6-5.7h19.8Z",
              })),
            W ||
              (W = o.createElement("path", {
                fill: "var(--cl-chassis-screen, #363636)",
                stroke: "var(--cl-chassis-bottom, black)",
                strokeWidth: 0.5,
                d: "M722.3 79.2c3.7 0 5.4 1.8 5.4 5.4v52c0 3.2-2.2 5-5.5 5h-19c-3.2 0-5.4-2-5.4-5v-52c0-3.6 1.8-5.4 5.5-5.4h19Z",
              })),
            X ||
              (X = o.createElement("path", {
                fill: "var(--cl-screen, black)",
                fillRule: "evenodd",
                d: "M704.9 80.3c.2 0 .3.1.3.4v.2c0 .9.8 1.7 1.6 1.7h11.8c1 0 1.7-.8 1.7-1.7v-.2c0-.3.1-.4.3-.4h3c1.6 0 3 1.7 3 3.3V137c0 1.7-1.5 3.3-3.4 3.3h-21c-2.1 0-3.3-1.3-3.3-3.2V83.6c0-1.6 1.3-3.3 2.9-3.3h3Z",
                clipRule: "evenodd",
              })),
            q ||
              (q = o.createElement("path", {
                fillRule: "evenodd",
                d: "M715.3 81.2a.3.3 0 0 0-.2-.4.3.3 0 1 0-.2.6.3.3 0 0 0 .4-.2Zm-5.1-.2c0 .2 0 .3.2.3h2.9a.3.3 0 0 0 .2-.3.3.3 0 0 0-.2-.2h-2.9a.3.3 0 0 0-.2.2Z",
                clipRule: "evenodd",
              }))
          );
      function Q() {
        return (
          (Q = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          Q.apply(this, arguments)
        );
      }
      var ee,
        te,
        re = (e) =>
          o.createElement(
            "svg",
            Q(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 16 16",
              },
              e
            ),
            G ||
              (G = o.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                d: "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16ZM5 7H3v2h2V7Zm8 0h-2v2h2V7ZM7 7h2v2H7V7Z",
                clipRule: "evenodd",
              }))
          );
      function ne() {
        return (
          (ne = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          ne.apply(this, arguments)
        );
      }
      var oe,
        ie = (e) =>
          o.createElement(
            "svg",
            ne(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 16 12",
              },
              e
            ),
            ee ||
              (ee = o.createElement("path", {
                fill: "currentColor",
                d: "m0 1.9 8 4 8-4A2 2 0 0 0 14 0H2a2 2 0 0 0-2 1.9Z",
              })),
            te ||
              (te = o.createElement("path", {
                fill: "currentColor",
                d: "m16 4.1-8 4-8-4V10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4.1Z",
              }))
          );
      function ae() {
        return (
          (ae = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          ae.apply(this, arguments)
        );
      }
      var se,
        le = (e) =>
          o.createElement(
            "svg",
            ae(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 14 14",
              },
              e
            ),
            oe ||
              (oe = o.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                d: "M13.4 7A6.4 6.4 0 1 1 .6 7a6.4 6.4 0 0 1 12.8 0Zm-5.6 3.2a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0ZM7 3a.8.8 0 0 0-.8.8V7a.8.8 0 0 0 1.6 0V3.8A.8.8 0 0 0 7 3Z",
                clipRule: "evenodd",
              }))
          );
      function ce() {
        return (
          (ce = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          ce.apply(this, arguments)
        );
      }
      var ue,
        de = (e) =>
          o.createElement(
            "svg",
            ce(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 25 23",
              },
              e
            ),
            se ||
              (se = o.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                d: "M9.5 2A3.2 3.2 0 0 1 15 2l9 15.8a3.2 3.2 0 0 1-2.8 4.8H3.3c-2.4 0-4-2.6-2.8-4.8L9.5 2Zm4.4 15.8a1.6 1.6 0 1 1-3.2 0 1.6 1.6 0 0 1 3.2 0ZM12.3 5a1.6 1.6 0 0 0-1.6 1.6v4.8a1.6 1.6 0 0 0 3.2 0V6.6A1.6 1.6 0 0 0 12.3 5Z",
                clipRule: "evenodd",
              }))
          );
      function pe() {
        return (
          (pe = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          pe.apply(this, arguments)
        );
      }
      var me,
        fe,
        he = (e) =>
          o.createElement(
            "svg",
            pe(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 16 16",
              },
              e
            ),
            ue ||
              (ue = o.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                d: "M2.97 1.83a.8.8 0 0 0-1.14 1.14l1.18 1.17A8.01 8.01 0 0 0 .37 8a8 8 0 0 0 11.24 4.74l1.42 1.43a.8.8 0 0 0 1.14-1.14l-1.18-1.17A8.01 8.01 0 0 0 15.63 8 8 8 0 0 0 4.4 3.26L2.97 1.83Zm2.27 4.54a3.2 3.2 0 0 0 4.39 4.39L8.4 9.55a1.6 1.6 0 0 1-1.96-1.96l-1.2-1.22Zm2.35.08-1.22-1.2a3.2 3.2 0 0 1 4.39 4.38L9.55 8.4a1.6 1.6 0 0 0-1.96-1.96Z",
                clipRule: "evenodd",
              }))
          );
      function ge() {
        return (
          (ge = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          ge.apply(this, arguments)
        );
      }
      var ve,
        be = (e) =>
          o.createElement(
            "svg",
            ge(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 20 20",
              },
              e
            ),
            me ||
              (me = o.createElement("path", {
                fill: "currentColor",
                d: "M10 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
              })),
            fe ||
              (fe = o.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                d: "M.46 10a10 10 0 0 1 19.08 0A10 10 0 0 1 .46 10ZM14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
                clipRule: "evenodd",
              }))
          );
      function ye() {
        return (
          (ye = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          ye.apply(this, arguments)
        );
      }
      var xe,
        we = (e) =>
          o.createElement(
            "svg",
            ye(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 21 16",
              },
              e
            ),
            ve ||
              (ve = o.createElement("path", {
                fill: "currentColor",
                d: "M.9 3.2A2.4 2.4 0 0 1 3.3.8h6l2.4 2.4h6a2.4 2.4 0 0 1 2.4 2.4v7.2a2.4 2.4 0 0 1-2.4 2.4H3.3a2.4 2.4 0 0 1-2.4-2.4V3.2Z",
              }))
          );
      function Se() {
        return (
          (Se = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          Se.apply(this, arguments)
        );
      }
      var _e,
        Ce,
        $e = (e) =>
          o.createElement(
            "svg",
            Se(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 16 16",
              },
              e
            ),
            xe ||
              (xe = o.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                d: "M14.4 8A6.4 6.4 0 1 1 1.6 8a6.4 6.4 0 0 1 12.8 0ZM8.8 4.8a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0ZM7.2 7.2a.8.8 0 1 0 0 1.6v2.4a.8.8 0 0 0 .8.8h.8a.8.8 0 0 0 0-1.6V8a.8.8 0 0 0-.8-.8h-.8Z",
                clipRule: "evenodd",
              }))
          );
      function ke() {
        return (
          (ke = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          ke.apply(this, arguments)
        );
      }
      var Pe,
        Ie = (e) =>
          o.createElement(
            "svg",
            ke(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 16 16",
              },
              e
            ),
            _e ||
              (_e = o.createElement("path", {
                fill: "currentColor",
                d: "M10.068 3.668a1.6 1.6 0 0 1 2.263 2.263l-2.4 2.4a1.6 1.6 0 0 1-2.263 0 .8.8 0 1 0-1.131 1.131 3.2 3.2 0 0 0 4.525 0l2.4-2.4a3.2 3.2 0 1 0-4.525-4.525l-1.2 1.2a.8.8 0 1 0 1.131 1.131l1.2-1.2Z",
              })),
            Ce ||
              (Ce = o.createElement("path", {
                fill: "currentColor",
                d: "M6.068 7.668a1.6 1.6 0 0 1 2.263 0 .8.8 0 1 0 1.131-1.131 3.2 3.2 0 0 0-4.525 0l-2.4 2.4a3.2 3.2 0 0 0 4.525 4.525l1.2-1.2a.8.8 0 0 0-1.131-1.131l-1.2 1.2a1.6 1.6 0 0 1-2.263-2.263l2.4-2.4Z",
              }))
          );
      function Be() {
        return (
          (Be = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          Be.apply(this, arguments)
        );
      }
      var Re,
        Te,
        Ae = (e) =>
          o.createElement(
            "svg",
            Be(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 16 16",
              },
              e
            ),
            Pe ||
              (Pe = o.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                d: "M4 7.2V5.6a4 4 0 1 1 8 0v1.6a1.6 1.6 0 0 1 1.6 1.6v4a1.6 1.6 0 0 1-1.6 1.6H4a1.6 1.6 0 0 1-1.6-1.6v-4A1.6 1.6 0 0 1 4 7.2Zm6.4-1.6v1.6H5.6V5.6a2.4 2.4 0 0 1 4.8 0Z",
                clipRule: "evenodd",
              }))
          );
      function ze() {
        return (
          (ze = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          ze.apply(this, arguments)
        );
      }
      var De,
        Oe = (e) =>
          o.createElement(
            "svg",
            ze(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 77 24",
              },
              e
            ),
            Re ||
              (Re = o.createElement("path", {
                fill: "currentColor",
                d: "M35.16 16.75a4.2 4.2 0 0 1-3.05 1.28 3.54 3.54 0 0 1-2.6-1.04 3.73 3.73 0 0 1-.99-2.66c0-2.2 1.43-3.7 3.59-3.7A3.92 3.92 0 0 1 35.14 12L37 10.36a6.6 6.6 0 0 0-5.05-2.24c-3.65 0-6.24 2.52-6.24 6.23a6.2 6.2 0 0 0 1.73 4.46 6.14 6.14 0 0 0 4.41 1.73 6.9 6.9 0 0 0 5.21-2.12l-1.9-1.68Zm3.58-13.32h2.76v16.92h-2.76V3.43Zm16.1 11.86c.04-.37.06-.74.07-1.11 0-3.5-2.3-6.05-5.85-6.05-1.69 0-3.16.63-4.22 1.72a6.32 6.32 0 0 0-1.66 4.48c0 3.75 2.65 6.22 6.15 6.22a6.2 6.2 0 0 0 5.06-2.25l-1.8-1.6-.1-.08c-.62.77-1.6 1.41-3.01 1.41a3.32 3.32 0 0 1-3.43-2.74h8.79Zm-8.74-2.22a3.36 3.36 0 0 1 .74-1.45c.57-.65 1.4-1 2.37-1 1.58 0 2.57 1 2.9 2.45H46.1Zm17.37-4.98v3.1a13.1 13.1 0 0 0-.83-.06c-2.1 0-3.29 1.5-3.29 3.48v5.74H56.6V8.27h2.76v1.83h.03c.93-1.29 2.3-2 3.75-2h.34Zm6.44 7.2-2 2.22v2.84h-2.76V3.43h2.76V13.8l4.94-5.5h3.28l-4.34 4.86 4.42 7.18H73.1l-3.14-5.06h-.05ZM19.12 3.16l-2.88 2.88a.57.57 0 0 1-.7.09 6.87 6.87 0 0 0-9.17 1.95 6.87 6.87 0 0 0-.24 7.46.57.57 0 0 1-.09.7l-2.88 2.88a.57.57 0 0 1-.86-.06A12 12 0 0 1 19.05 2.3a.57.57 0 0 1 .06.86Z",
              })),
            Te ||
              (Te = o.createElement("path", {
                fill: "currentColor",
                d: "m19.12 20.84-2.88-2.88a.57.57 0 0 0-.7-.09 6.87 6.87 0 0 1-7.08 0 .57.57 0 0 0-.7.09l-2.89 2.88a.57.57 0 0 0 .07.86 12 12 0 0 0 14.12 0 .57.57 0 0 0 .06-.86ZM12 15.43a3.43 3.43 0 1 0 0-6.86 3.43 3.43 0 0 0 0 6.86Z",
              }))
          );
      function Ee() {
        return (
          (Ee = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          Ee.apply(this, arguments)
        );
      }
      var Ze,
        Le = (e) =>
          o.createElement(
            "svg",
            Ee(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 14 14",
              },
              e
            ),
            De ||
              (De = o.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                d: "M5.4 2.2a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4ZM.6 5.4a4.8 4.8 0 1 1 8.7 2.8l3.9 3.8a.8.8 0 0 1-1.2 1.2L8.2 9.3A4.8 4.8 0 0 1 .6 5.4Z",
                clipRule: "evenodd",
              }))
          );
      function Fe() {
        return (
          (Fe = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          Fe.apply(this, arguments)
        );
      }
      var Me,
        je = (e) =>
          o.createElement(
            "svg",
            Fe(
              {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "183.07 203.02 11.2 9.6",
              },
              e
            ),
            Ze ||
              (Ze = o.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                d: "M183.07 203.82a.8.8 0 0 1 .8-.8h9.6a.8.8 0 0 1 0 1.6h-9.6a.8.8 0 0 1-.8-.8Zm0 4a.8.8 0 0 1 .8-.8h9.6a.8.8 0 0 1 0 1.6h-9.6a.8.8 0 0 1-.8-.8Zm0 4a.8.8 0 0 1 .8-.8h9.6a.8.8 0 0 1 0 1.6h-9.6a.8.8 0 0 1-.8-.8Z",
                clipRule: "evenodd",
              }))
          );
      function Ue() {
        return (
          (Ue = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          Ue.apply(this, arguments)
        );
      }
      var Ne,
        Ve,
        He = (e) =>
          o.createElement(
            "svg",
            Ue(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 16 16",
              },
              e
            ),
            Me ||
              (Me = o.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                d: "M5.6 1.6A1.6 1.6 0 0 0 4 3.2v9.6a1.6 1.6 0 0 0 1.6 1.6h4.8a1.6 1.6 0 0 0 1.6-1.6V3.2a1.6 1.6 0 0 0-1.6-1.6H5.6ZM8 12.8a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6Z",
                clipRule: "evenodd",
              }))
          );
      function We() {
        return (
          (We = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          We.apply(this, arguments)
        );
      }
      var Xe,
        qe = (e) =>
          o.createElement(
            "svg",
            We(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 14 14",
              },
              e
            ),
            Ne ||
              (Ne = o.createElement("path", {
                fill: "currentColor",
                d: "M13 1a1.6 1.6 0 0 0-2.3 0L4.6 7.2v2.3h2.3l6-6A1.6 1.6 0 0 0 13 1Z",
              })),
            Ve ||
              (Ve = o.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                d: "M.6 3.8a1.6 1.6 0 0 1 1.6-1.6h3.2a.8.8 0 1 1 0 1.6H2.2v8h8V8.6a.8.8 0 0 1 1.6 0v3.2a1.6 1.6 0 0 1-1.6 1.6h-8a1.6 1.6 0 0 1-1.6-1.6v-8Z",
                clipRule: "evenodd",
              }))
          );
      function Ke() {
        return (
          (Ke = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          Ke.apply(this, arguments)
        );
      }
      var Ye,
        Ge = (e) =>
          o.createElement(
            "svg",
            Ke(
              {
                viewBox: "0 0 14 14",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              e
            ),
            Xe ||
              (Xe = o.createElement("path", {
                d: "M10.586.586a2 2 0 1 1 2.828 2.828l-.793.793L9.793 1.38l.793-.793ZM8.379 2.793 0 11.172V14h2.828l8.38-8.379-2.83-2.828Z",
                fill: "currentColor",
              }))
          );
      function Je() {
        return (
          (Je = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          Je.apply(this, arguments)
        );
      }
      var Qe,
        et = (e) =>
          o.createElement(
            "svg",
            Je(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 11 11",
              },
              e
            ),
            Ye ||
              (Ye = o.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                d: "M5 0a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2H6v3a1 1 0 1 1-2 0V6H1a1 1 0 0 1 0-2h3V1a1 1 0 0 1 1-1Z",
                clipRule: "evenodd",
              }))
          );
      function tt() {
        return (
          (tt = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          tt.apply(this, arguments)
        );
      }
      var rt,
        nt,
        ot = (e) =>
          o.createElement(
            "svg",
            tt(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 14 14",
              },
              e
            ),
            Qe ||
              (Qe = o.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                d: "M13.4 7A6.4 6.4 0 1 1 .6 7a6.4 6.4 0 0 1 12.8 0ZM7 4.6a.8.8 0 0 0-.693.4.8.8 0 1 1-1.385-.8A2.4 2.4 0 1 1 7.8 7.664V7.8a.8.8 0 0 1-1.6 0V7a.8.8 0 0 1 .8-.8.8.8 0 1 0 0-1.6ZM7 11a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6Z",
                clipRule: "evenodd",
              }))
          );
      function it() {
        return (
          (it = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          it.apply(this, arguments)
        );
      }
      var at,
        st = (e) =>
          o.createElement(
            "svg",
            it(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 16 16",
              },
              e
            ),
            rt ||
              (rt = o.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                d: "M6 7.6v-.8a2 2 0 0 1 4 0v.8a.8.8 0 0 1 .8.8v2a.8.8 0 0 1-.8.8H6a.8.8 0 0 1-.8-.8v-2a.8.8 0 0 1 .8-.8Zm3.2-.8v.8H6.8v-.8a1.2 1.2 0 0 1 2.4 0Z",
                clipRule: "evenodd",
              })),
            nt ||
              (nt = o.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                d: "M13.07 2.9a7.2 7.2 0 1 0 .02 10.19s.42-.47 0-.89-.88 0-.88 0a5.95 5.95 0 1 1-.02-8.42l-1.04 1.04c-.25.24-.16.44.18.44h2.5c.63 0 .63 0 .63-.63v-2.5c0-.34-.2-.43-.44-.18l-.95.94Z",
                clipRule: "evenodd",
              }))
          );
      function lt() {
        return (
          (lt = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          lt.apply(this, arguments)
        );
      }
      var ct,
        ut = (e) =>
          o.createElement(
            "svg",
            lt(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0.25 0 8 14",
              },
              e
            ),
            at ||
              (at = o.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                d: "M4.25 0a1 1 0 0 1 .707.293l3 3a1 1 0 0 1-1.414 1.414L4.25 2.414 1.957 4.707A1 1 0 0 1 .543 3.293l3-3A1 1 0 0 1 4.25 0ZM.543 9.293a1 1 0 0 1 1.414 0l2.293 2.293 2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414Z",
                clipRule: "evenodd",
              }))
          );
      function dt() {
        return (
          (dt = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          dt.apply(this, arguments)
        );
      }
      var pt,
        mt = (e) =>
          o.createElement(
            "svg",
            dt(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 16 16",
              },
              e
            ),
            ct ||
              (ct = o.createElement("path", {
                fill: "currentColor",
                d: "M4 0a1 1 0 0 0-1 1v12a1 1 0 1 0 2 0V1a1 1 0 0 0-1-1Zm7.3 9.3a1 1 0 0 0 1.4 1.4l3-3a1 1 0 0 0 0-1.4l-3-3a1 1 0 1 0-1.4 1.4L12.58 6H8a1 1 0 1 0 0 2h4.59l-1.3 1.3ZM1 1a1 1 0 0 0-1 1v10a1 1 0 1 0 2 0V2a1 1 0 0 0-1-1Z",
              }))
          );
      function ft() {
        return (
          (ft = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          ft.apply(this, arguments)
        );
      }
      var ht,
        gt = (e) =>
          o.createElement(
            "svg",
            ft(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 15 16",
              },
              e
            ),
            pt ||
              (pt = o.createElement("path", {
                fill: "currentColor",
                d: "M1 0a1 1 0 0 0-1 1v12a1 1 0 1 0 2 0V1a1 1 0 0 0-1-1Zm10.3 9.3a1 1 0 0 0 1.4 1.4l3-3a1 1 0 0 0 0-1.4l-3-3a1 1 0 1 0-1.4 1.4L12.58 6H5a1 1 0 1 0 0 2h7.59l-1.3 1.3Z",
              }))
          );
      function vt() {
        return (
          (vt = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          vt.apply(this, arguments)
        );
      }
      var bt,
        yt = (e) =>
          o.createElement(
            "svg",
            vt(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "currentColor",
                viewBox: "0 0 18 20",
              },
              e
            ),
            ht ||
              (ht = o.createElement("path", {
                d: "M6.6 4a1.2 1.2 0 0 0 0 2.4h6.7l-1.55 1.55a1.2 1.2 0 0 0 1.7 1.7l3.6-3.6a1.2 1.2 0 0 0 0-1.7l-3.6-3.6a1.2 1.2 0 1 0-1.7 1.7L13.3 4H6.6Zm4.8 12a1.2 1.2 0 1 0 0-2.4H4.7l1.55-1.55a1.2 1.2 0 1 0-1.7-1.7l-3.6 3.6a1.2 1.2 0 0 0 0 1.7l3.6 3.6a1.2 1.2 0 1 0 1.7-1.7L4.7 16h6.7Z",
              }))
          );
      function xt() {
        return (
          (xt = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          xt.apply(this, arguments)
        );
      }
      var wt,
        St = (e) =>
          o.createElement(
            "svg",
            xt(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 14 4",
              },
              e
            ),
            bt ||
              (bt = o.createElement("path", {
                fill: "currentColor",
                d: "M3.8 2A1.6 1.6 0 1 1 .6 2a1.6 1.6 0 0 1 3.2 0Zm4.8 0a1.6 1.6 0 1 1-3.2 0 1.6 1.6 0 0 1 3.2 0Zm3.2 1.6a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2Z",
              }))
          );
      function _t() {
        return (
          (_t = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          _t.apply(this, arguments)
        );
      }
      var Ct,
        $t = (e) =>
          o.createElement(
            "svg",
            _t(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 27 27",
              },
              e
            ),
            wt ||
              (wt = o.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                d: "M.72 5A19.13 19.13 0 0 0 13.25.1 19.13 19.13 0 0 0 25.78 5a19.2 19.2 0 0 1-12.53 21.3A19.2 19.2 0 0 1 .72 5Zm18.46 5.93a1.6 1.6 0 1 0-2.26-2.26l-5.27 5.27-2.07-2.07a1.6 1.6 0 0 0-2.26 2.26l3.2 3.2a1.6 1.6 0 0 0 2.26 0l6.4-6.4Z",
                clipRule: "evenodd",
              }))
          );
      function kt() {
        return (
          (kt = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          kt.apply(this, arguments)
        );
      }
      var Pt,
        It = (e) =>
          o.createElement(
            "svg",
            kt(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 10 8",
              },
              e
            ),
            Ct ||
              (Ct = o.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                d: "M.576 1.076a.6.6 0 0 1 .849 0L4 3.65l2.576-2.575a.6.6 0 1 1 .849.848L4.849 4.5l2.576 2.576a.6.6 0 1 1-.849.848L4 5.348 1.425 7.924a.6.6 0 0 1-.849-.848L3.152 4.5.576 1.924a.6.6 0 0 1 0-.848Z",
                clipRule: "evenodd",
              }))
          );
      function Bt() {
        return (
          (Bt = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          Bt.apply(this, arguments)
        );
      }
      var Rt,
        Tt = (e) =>
          o.createElement(
            "svg",
            Bt(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
              },
              e
            ),
            Pt ||
              (Pt = o.createElement("path", {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M21 15v1.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V15m14-7-5-5m0 0L7 8m5-5v12",
              }))
          );
      function At() {
        return (
          (At = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          At.apply(this, arguments)
        );
      }
      var zt,
        Dt = (e) =>
          o.createElement(
            "svg",
            At(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 12 13",
              },
              e
            ),
            Rt ||
              (Rt = o.createElement("path", {
                fill: "currentColor",
                d: "M6 5.2A2.4 2.4 0 1 0 6 .4a2.4 2.4 0 0 0 0 4.8ZM.4 12.4a5.6 5.6 0 0 1 11.2 0H.4Z",
              }))
          );
      function Ot() {
        return (
          (Ot = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          Ot.apply(this, arguments)
        );
      }
      var Et = (e) =>
        o.createElement(
          "svg",
          Ot(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 10 10",
            },
            e
          ),
          zt ||
            (zt = o.createElement("path", {
              fill: "currentColor",
              d: "M3.8 4.4a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Zm0 1.2c2 0 3.6 1.6 3.6 3.6H.2c0-2 1.6-3.6 3.6-3.6Zm4.8-2.4a.6.6 0 0 0-1.2 0v.6h-.6a.6.6 0 1 0 0 1.2h.6v.6a.6.6 0 0 0 1.2 0V5h.6a.6.6 0 0 0 0-1.2h-.6v-.6Z",
            }))
        );
    },
    1434: function (e, t, r) {
      r.r(t),
        r.d(t, {
          createRoot: function () {
            return n.s;
          },
        }),
        r(8173);
      var n = r(7029);
    },
    4334: function (e, t, r) {
      r.d(t, {
        u1: function () {
          return v.u;
        },
        W5: function () {
          return S;
        },
        zJ: function () {
          return _;
        },
      });
      var n = r(2903),
        o = r(221),
        i = r(2784),
        a = r(8173),
        s = r(1609),
        l = r(4096);
      const c = {
          titleize: l.up,
          timeString: (e, t) => {
            try {
              return new Intl.DateTimeFormat(t || "en-US", {
                timeStyle: "short",
              }).format((0, l.P9)(e));
            } catch (e) {
              return console.warn(e), "";
            }
          },
          weekday: (e, t, r) => {
            try {
              return new Intl.DateTimeFormat(t || "en-US", {
                weekday: r || "long",
              }).format((0, l.P9)(e));
            } catch (e) {
              return console.warn(e), "";
            }
          },
          numeric: (e, t) => {
            try {
              return new Intl.DateTimeFormat(t || "en-US").format((0, l.P9)(e));
            } catch (e) {
              return console.warn(e), "";
            }
          },
        },
        u = () => {
          var e, t;
          const { applicationName: r } = (0, a.useEnvironment)().displayConfig,
            { client: n, user: o } = (0, a.useCoreClerk)(),
            { signIn: i } = n;
          return {
            applicationName: r,
            "signIn.identifier": i.identifier || "",
            "user.username": (null == o ? void 0 : o.username) || "",
            "user.firstName": (null == o ? void 0 : o.firstName) || "",
            "user.lastName": (null == o ? void 0 : o.lastName) || "",
            "user.primaryEmailAddress":
              (null === (e = null == o ? void 0 : o.primaryEmailAddress) ||
              void 0 === e
                ? void 0
                : e.emailAddress) || "",
            "user.primaryPhoneNumber":
              (null === (t = null == o ? void 0 : o.primaryPhoneNumber) ||
              void 0 === t
                ? void 0
                : t.phoneNumber) || "",
          };
        },
        d = (e) => Object.prototype.hasOwnProperty.call(c, e),
        p = (e) => {
          const t = e
            .split(/[(,)]/g)
            .map((e) => e.trim())
            .filter((e) => !!e);
          if (1 === t.length) {
            const [e] = t;
            return { modifierName: e, params: [] };
          }
          {
            const [e, ...r] = t;
            return {
              modifierName: e,
              params: r.map((e) => e.replace(/['"]+/g, "")),
            };
          }
        };
      var m = {
          phoneCode: {
            title: "Check your phone",
            subtitle: "to continue to {{applicationName}}",
            formTitle: "Verification code",
            formSubtitle:
              "Enter the verification code sent to your phone number",
            resendButton: "Didn't receive a code? Resend",
          },
        },
        f = {
          locale: "en-US",
          socialButtonsBlockButton: "Continue with {{provider|titleize}}",
          dividerText: "or",
          formFieldLabel__emailAddress: "Email address",
          formFieldLabel__emailAddresses: "Email addresses",
          formFieldLabel__phoneNumber: "Phone number",
          formFieldLabel__username: "Username",
          formFieldLabel__emailAddress_phoneNumber:
            "Email address or phone number",
          formFieldLabel__emailAddress_username: "Email address or username",
          formFieldLabel__phoneNumber_username: "phone number or username",
          formFieldLabel__emailAddress_phoneNumber_username:
            "Email address, phone number or username",
          formFieldLabel__password: "Password",
          formFieldLabel__currentPassword: "Current password",
          formFieldLabel__newPassword: "New password",
          formFieldLabel__confirmPassword: "Confirm password",
          formFieldLabel__signOutOfOtherSessions:
            "Sign out of all other devices",
          formFieldLabel__automaticInvitations:
            "Enable automatic invitations for this domain",
          formFieldLabel__firstName: "First name",
          formFieldLabel__lastName: "Last name",
          formFieldLabel__backupCode: "Backup code",
          formFieldLabel__organizationName: "Organization name",
          formFieldLabel__organizationSlug: "Slug URL",
          formFieldLabel__organizationDomain: "Domain",
          formFieldLabel__organizationDomainEmailAddress:
            "Verification email address",
          formFieldLabel__organizationDomainEmailAddressDescription:
            "Enter an email address under this domain to receive a code and verify this domain.",
          formFieldLabel__organizationDomainDeletePending:
            "Delete pending invitations and suggestions",
          formFieldLabel__confirmDeletion: "Confirmation",
          formFieldLabel__role: "Role",
          formFieldInputPlaceholder__emailAddress: "",
          formFieldInputPlaceholder__emailAddresses:
            "Enter or paste one or more email addresses, separated by spaces or commas",
          formFieldInputPlaceholder__phoneNumber: "",
          formFieldInputPlaceholder__username: "",
          formFieldInputPlaceholder__emailAddress_phoneNumber: "",
          formFieldInputPlaceholder__emailAddress_username: "",
          formFieldInputPlaceholder__phoneNumber_username: "",
          formFieldInputPlaceholder__emailAddress_phoneNumber_username: "",
          formFieldInputPlaceholder__password: "",
          formFieldInputPlaceholder__firstName: "",
          formFieldInputPlaceholder__lastName: "",
          formFieldInputPlaceholder__backupCode: "",
          formFieldInputPlaceholder__organizationName: "",
          formFieldInputPlaceholder__organizationSlug: "",
          formFieldInputPlaceholder__organizationDomain: "",
          formFieldInputPlaceholder__organizationDomainEmailAddress: "",
          formFieldError__notMatchingPasswords: "Passwords don't match.",
          formFieldError__matchingPasswords: "Passwords match.",
          formFieldError__verificationLinkExpired:
            "The verification link expired. Please request a new link.",
          formFieldAction__forgotPassword: "Forgot password?",
          formFieldHintText__optional: "Optional",
          formFieldHintText__slug:
            "A slug is a human-readable ID that must be unique. It’s often used in URLs.",
          formButtonPrimary: "Continue",
          signInEnterPasswordTitle: "Enter your password",
          backButton: "Back",
          footerActionLink__useAnotherMethod: "Use another method",
          badge__primary: "Primary",
          badge__thisDevice: "This device",
          badge__userDevice: "User device",
          badge__otherImpersonatorDevice: "Other impersonator device",
          badge__default: "Default",
          badge__unverified: "Unverified",
          badge__requiresAction: "Requires action",
          badge__you: "You",
          footerPageLink__help: "Help",
          footerPageLink__privacy: "Privacy",
          footerPageLink__terms: "Terms",
          paginationButton__previous: "Previous",
          paginationButton__next: "Next",
          paginationRowText__displaying: "Displaying",
          paginationRowText__of: "of",
          membershipRole__admin: "Admin",
          membershipRole__basicMember: "Member",
          membershipRole__guestMember: "Guest",
          signUp: {
            start: {
              title: "Create your account",
              subtitle: "to continue to {{applicationName}}",
              actionText: "Have an account?",
              actionLink: "Sign in",
            },
            emailLink: {
              title: "Verify your email",
              subtitle: "to continue to {{applicationName}}",
              formTitle: "Verification link",
              formSubtitle:
                "Use the verification link sent to your email address",
              resendButton: "Didn't receive a link? Resend",
              verified: { title: "Successfully signed up" },
              loading: { title: "Signing up..." },
              verifiedSwitchTab: {
                title: "Successfully verified email",
                subtitle: "Return to the newly opened tab to continue",
                subtitleNewTab: "Return to previous tab to continue",
              },
            },
            emailCode: {
              title: "Verify your email",
              subtitle: "to continue to {{applicationName}}",
              formTitle: "Verification code",
              formSubtitle:
                "Enter the verification code sent to your email address",
              resendButton: "Didn't receive a code? Resend",
            },
            phoneCode: {
              title: "Verify your phone",
              subtitle: "to continue to {{applicationName}}",
              formTitle: "Verification code",
              formSubtitle:
                "Enter the verification code sent to your phone number",
              resendButton: "Didn't receive a code? Resend",
            },
            continue: {
              title: "Fill in missing fields",
              subtitle: "to continue to {{applicationName}}",
              actionText: "Have an account?",
              actionLink: "Sign in",
            },
          },
          signIn: {
            start: {
              title: "Sign in",
              subtitle: "to continue to {{applicationName}}",
              actionText: "No account?",
              actionLink: "Sign up",
              actionLink__use_email: "Use email",
              actionLink__use_phone: "Use phone",
              actionLink__use_username: "Use username",
              actionLink__use_email_username: "Use email or username",
            },
            password: {
              title: "Enter your password",
              subtitle: "to continue to {{applicationName}}",
              actionLink: "Use another method",
            },
            forgotPasswordAlternativeMethods: {
              title: "Forgot Password?",
              label__alternativeMethods: "Or, sign in with another method.",
              blockButton__resetPassword: "Reset your password",
            },
            forgotPassword: {
              title_email: "Check your email",
              title_phone: "Check your phone",
              subtitle: "to reset your password",
              formTitle: "Reset password code",
              formSubtitle_email: "Enter the code sent to your email address",
              formSubtitle_phone: "Enter the code sent to your phone number",
              resendButton: "Didn't receive a code? Resend",
            },
            resetPassword: {
              title: "Reset Password",
              formButtonPrimary: "Reset Password",
              successMessage:
                "Your password was successfully changed. Signing you in, please wait a moment.",
              requiredMessage:
                "An account already exists with an unverified email address. Please reset your password for security.",
            },
            resetPasswordMfa: {
              detailsLabel:
                "We need to verify your identity before resetting your password.",
            },
            emailCode: {
              title: "Check your email",
              subtitle: "to continue to {{applicationName}}",
              formTitle: "Verification code",
              formSubtitle:
                "Enter the verification code sent to your email address",
              resendButton: "Didn't receive a code? Resend",
            },
            emailLink: {
              title: "Check your email",
              subtitle: "to continue to {{applicationName}}",
              formTitle: "Verification link",
              formSubtitle: "Use the verification link sent to your email",
              resendButton: "Didn't receive a link? Resend",
              unusedTab: { title: "You may close this tab" },
              verified: {
                title: "Successfully signed in",
                subtitle: "You will be redirected soon",
              },
              verifiedSwitchTab: {
                subtitle: "Return to original tab to continue",
                titleNewTab: "Signed in on other tab",
                subtitleNewTab: "Return to the newly opened tab to continue",
              },
              loading: {
                title: "Signing in...",
                subtitle: "You will be redirected soon",
              },
              failed: {
                title: "This verification link is invalid",
                subtitle: "Return to the original tab to continue.",
              },
              expired: {
                title: "This verification link has expired",
                subtitle: "Return to the original tab to continue.",
              },
            },
            phoneCode: { ...m.phoneCode },
            phoneCodeMfa: { ...m.phoneCode, subtitle: "" },
            totpMfa: {
              title: "Two-step verification",
              subtitle: "",
              formTitle: "Verification code",
              formSubtitle:
                "Enter the verification code generated by your authenticator app",
            },
            backupCodeMfa: {
              title: "Enter a backup code",
              subtitle: "to continue to {{applicationName}}",
              formTitle: "",
              formSubtitle: "",
            },
            alternativeMethods: {
              title: "Use another method",
              actionLink: "Get help",
              blockButton__emailLink: "Email link to {{identifier}}",
              blockButton__emailCode: "Email code to {{identifier}}",
              blockButton__phoneCode: "Send SMS code to {{identifier}}",
              blockButton__password: "Sign in with your password",
              blockButton__totp: "Use your authenticator app",
              blockButton__backupCode: "Use a backup code",
              getHelp: {
                title: "Get help",
                content:
                  "If you’re experiencing difficulty signing into your account, email us and we will work with you to restore access as soon as possible.",
                blockButton__emailSupport: "Email support",
              },
            },
            noAvailableMethods: {
              title: "Cannot sign in",
              subtitle: "An error occurred",
              message:
                "Cannot proceed with sign in. There's no available authentication factor.",
            },
          },
          userProfile: {
            mobileButton__menu: "Menu",
            formButtonPrimary__continue: "Continue",
            formButtonPrimary__finish: "Finish",
            formButtonReset: "Cancel",
            start: {
              headerTitle__account: "Account",
              headerTitle__security: "Security",
              headerSubtitle__account: "Manage your account information",
              headerSubtitle__security: "Manage your security preferences",
              profileSection: { title: "Profile" },
              usernameSection: {
                title: "Username",
                primaryButton__changeUsername: "Change username",
                primaryButton__setUsername: "Set username",
              },
              emailAddressesSection: {
                title: "Email addresses",
                primaryButton: "Add an email address",
                detailsTitle__primary: "Primary email address",
                detailsSubtitle__primary:
                  "This email address is the primary email address",
                detailsAction__primary: "Complete verification",
                detailsTitle__nonPrimary: "Set as primary email address",
                detailsSubtitle__nonPrimary:
                  "Set this email address as the primary to receive communications regarding your account.",
                detailsAction__nonPrimary: "Set as primary",
                detailsTitle__unverified: "Verify email address",
                detailsSubtitle__unverified:
                  "Complete verification to access all features with this email address",
                detailsAction__unverified: "Verify email address",
                destructiveActionTitle: "Remove",
                destructiveActionSubtitle:
                  "Delete this email address and remove it from your account",
                destructiveAction: "Remove email address",
              },
              phoneNumbersSection: {
                title: "Phone numbers",
                primaryButton: "Add a phone number",
                detailsTitle__primary: "Primary phone number",
                detailsSubtitle__primary:
                  "This phone number is the primary phone number",
                detailsAction__primary: "Complete verification",
                detailsTitle__nonPrimary: "Set as primary phone number",
                detailsSubtitle__nonPrimary:
                  "Set this phone number as the primary to receive communications regarding your account.",
                detailsAction__nonPrimary: "Set as primary",
                detailsTitle__unverified: "Verify phone number",
                detailsSubtitle__unverified:
                  "Complete verification to access all features with this phone number",
                detailsAction__unverified: "Verify phone number",
                destructiveActionTitle: "Remove",
                destructiveActionSubtitle:
                  "Delete this phone number and remove it from your account",
                destructiveAction: "Remove phone number",
              },
              connectedAccountsSection: {
                title: "Connected accounts",
                primaryButton: "Connect account",
                title__conectionFailed: "Retry failed connection",
                title__connectionFailed: "Retry failed connection",
                title__reauthorize: "Reauthorization required",
                subtitle__reauthorize:
                  "The required scopes have been updated, and you may be experiencing limited functionality. Please re-authorize this application to avoid any issues",
                actionLabel__conectionFailed: "Try again",
                actionLabel__connectionFailed: "Try again",
                actionLabel__reauthorize: "Authorize now",
                destructiveActionTitle: "Remove",
                destructiveActionSubtitle:
                  "Remove this connected account from your account",
                destructiveActionAccordionSubtitle: "Remove connected account",
              },
              enterpriseAccountsSection: { title: "Enterprise accounts" },
              passwordSection: {
                title: "Password",
                primaryButton__changePassword: "Change password",
                primaryButton__setPassword: "Set password",
              },
              mfaSection: {
                title: "Two-step verification",
                primaryButton: "Add two-step verification",
                phoneCode: {
                  destructiveActionTitle: "Remove",
                  destructiveActionSubtitle:
                    "Remove this phone number from the two-step verification methods",
                  destructiveActionLabel: "Remove phone number",
                  title__default: "Default factor",
                  title__setDefault: "Set as Default factor",
                  subtitle__default:
                    "This factor will be used as the default two-step verification method when signing in.",
                  subtitle__setDefault:
                    "Set this factor as the default factor to use it as the default two-step verification method when signing in.",
                  actionLabel__setDefault: "Set as default",
                },
                backupCodes: {
                  headerTitle: "Backup codes",
                  title__regenerate: "Regenerate backup codes",
                  subtitle__regenerate:
                    "Get a fresh set of secure backup codes. Prior backup codes will be deleted and cannot be used.",
                  actionLabel__regenerate: "Regenerate codes",
                },
                totp: {
                  headerTitle: "Authenticator application",
                  title: "Default factor",
                  subtitle:
                    "This factor will be used as the default two-step verification method when signing in.",
                  destructiveActionTitle: "Remove",
                  destructiveActionSubtitle:
                    "Remove authenticator application from the two-step verification methods",
                  destructiveActionLabel: "Remove authenticator application",
                },
              },
              activeDevicesSection: {
                title: "Active devices",
                primaryButton: "Active devices",
                detailsTitle: "Current device",
                detailsSubtitle: "This is the device you are currently using",
                destructiveActionTitle: "Sign out",
                destructiveActionSubtitle:
                  "Sign out from your account on this device",
                destructiveAction: "Sign out of device",
              },
              web3WalletsSection: {
                title: "Web3 wallets",
                primaryButton: "Web3 wallets",
                destructiveActionTitle: "Remove",
                destructiveActionSubtitle:
                  "Remove this web3 wallet from your account",
                destructiveAction: "Remove wallet",
              },
              dangerSection: {
                title: "Danger",
                deleteAccountButton: "Delete Account",
                deleteAccountTitle: "Delete Account",
                deleteAccountDescription:
                  "Delete your account and all its associated data",
              },
            },
            profilePage: {
              title: "Update profile",
              imageFormTitle: "Profile image",
              imageFormSubtitle: "Upload image",
              imageFormDestructiveActionSubtitle: "Remove image",
              fileDropAreaTitle: "Drag file here, or...",
              fileDropAreaAction: "Select file",
              fileDropAreaHint:
                "Upload a JPG, PNG, GIF, or WEBP image smaller than 10 MB",
              readonly:
                "Your profile information has been provided by the enterprise connection and cannot be edited.",
              successMessage: "Your profile has been updated.",
            },
            usernamePage: {
              title: "Update username",
              successMessage: "Your username has been updated.",
            },
            emailAddressPage: {
              title: "Add email address",
              emailCode: {
                formHint:
                  "An email containing a verification code will be sent to this email address.",
                formTitle: "Verification code",
                formSubtitle:
                  "Enter the verification code sent to {{identifier}}",
                resendButton: "Didn't receive a code? Resend",
                successMessage:
                  "The email {{identifier}} has been added to your account.",
              },
              emailLink: {
                formHint:
                  "An email containing a verification link will be sent to this email address.",
                formTitle: "Verification link",
                formSubtitle:
                  "Click on the verification link in the email sent to {{identifier}}",
                resendButton: "Didn't receive a link? Resend",
                successMessage:
                  "The email {{identifier}} has been added to your account.",
              },
              removeResource: {
                title: "Remove email address",
                messageLine1:
                  "{{identifier}} will be removed from this account.",
                messageLine2:
                  "You will no longer be able to sign in using this email address.",
                successMessage:
                  "{{emailAddress}} has been removed from your account.",
              },
            },
            phoneNumberPage: {
              title: "Add phone number",
              successMessage: "{{identifier}} has been added to your account.",
              infoText:
                "A text message containing a verification link will be sent to this phone number.",
              infoText__secondary: "Message and data rates may apply.",
              removeResource: {
                title: "Remove phone number",
                messageLine1:
                  "{{identifier}} will be removed from this account.",
                messageLine2:
                  "You will no longer be able to sign in using this phone number.",
                successMessage:
                  "{{phoneNumber}} has been removed from your account.",
              },
            },
            connectedAccountPage: {
              title: "Add connected account",
              formHint: "Select a provider to connect your account.",
              formHint__noAccounts:
                "There are no available external account providers.",
              socialButtonsBlockButton: "Connect {{provider|titleize}} account",
              successMessage: "The provider has been added to your account",
              removeResource: {
                title: "Remove connected account",
                messageLine1:
                  "{{identifier}} will be removed from this account.",
                messageLine2:
                  "You will no longer be able to use this connected account and any dependent features will no longer work.",
                successMessage:
                  "{{connectedAccount}} has been removed from your account.",
              },
            },
            web3WalletPage: {
              title: "Add web3 wallet",
              subtitle__availableWallets:
                "Select a web3 wallet to connect to your account.",
              subtitle__unavailableWallets:
                "There are no available web3 wallets.",
              successMessage: "The wallet has been added to your account.",
              removeResource: {
                title: "Remove web3 wallet",
                messageLine1:
                  "{{identifier}} will be removed from this account.",
                messageLine2:
                  "You will no longer be able to sign in using this web3 wallet.",
                successMessage:
                  "{{web3Wallet}} has been removed from your account.",
              },
            },
            passwordPage: {
              title: "Set password",
              changePasswordTitle: "Change password",
              readonly:
                "Your password can currently not be edited because you can sign in only via the enterprise connection.",
              successMessage: "Your password has been set.",
              changePasswordSuccessMessage: "Your password has been updated.",
              sessionsSignedOutSuccessMessage:
                "All other devices have been signed out.",
            },
            mfaPage: {
              title: "Add two-step verification",
              formHint: "Select a method to add.",
            },
            mfaTOTPPage: {
              title: "Add authenticator application",
              verifyTitle: "Verification code",
              verifySubtitle:
                "Enter verification code generated by your authenticator",
              successMessage:
                "Two-step verification is now enabled. When signing in, you will need to enter a verification code from this authenticator as an additional step.",
              authenticatorApp: {
                infoText__ableToScan:
                  "Set up a new sign-in method in your authenticator app and scan the following QR code to link it to your account.",
                infoText__unableToScan:
                  "Set up a new sign-in method in your authenticator and enter the Key provided below.",
                inputLabel__unableToScan1:
                  "Make sure Time-based or One-time passwords is enabled, then finish linking your account.",
                inputLabel__unableToScan2:
                  "Alternatively, if your authenticator supports TOTP URIs, you can also copy the full URI.",
                buttonAbleToScan__nonPrimary: "Scan QR code instead",
                buttonUnableToScan__nonPrimary: "Can’t scan QR code?",
              },
              removeResource: {
                title: "Remove two-step verification",
                messageLine1:
                  "Verification codes from this authenticator will no longer be required when signing in.",
                messageLine2:
                  "Your account may not be as secure. Are you sure you want to continue?",
                successMessage:
                  "Two-step verification via authenticator application has been removed.",
              },
            },
            mfaPhoneCodePage: {
              title: "Add SMS code verification",
              primaryButton__addPhoneNumber: "Add a phone number",
              subtitle__availablePhoneNumbers:
                "Select a phone number to register for SMS code two-step verification.",
              subtitle__unavailablePhoneNumbers:
                "There are no available phone numbers to register for SMS code two-step verification.",
              successMessage:
                "SMS code two-step verification is now enabled for this phone number. When signing in, you will need to enter a verification code sent to this phone number as an additional step.",
              removeResource: {
                title: "Remove two-step verification",
                messageLine1:
                  "{{identifier}} will be no longer receiving verification codes when signing in.",
                messageLine2:
                  "Your account may not be as secure. Are you sure you want to continue?",
                successMessage:
                  "SMS code two-step verification has been removed for {{mfaPhoneCode}}",
              },
            },
            backupCodePage: {
              title: "Add backup code verification",
              title__codelist: "Backup codes",
              subtitle__codelist: "Store them securely and keep them secret.",
              infoText1: "Backup codes will be enabled for this account.",
              infoText2:
                "Keep the backup codes secret and store them securely. You may regenerate backup codes if you suspect they have been compromised.",
              successSubtitle:
                "You can use one of these to sign in to your account, if you lose access to your authentication device.",
              successMessage:
                "Backup codes are now enabled. You can use one of these to sign in to your account, if you lose access to your authentication device. Each code can only be used once.",
              actionLabel__copy: "Copy all",
              actionLabel__copied: "Copied!",
              actionLabel__download: "Download .txt",
              actionLabel__print: "Print",
            },
            deletePage: {
              title: "Delete account",
              messageLine1: "Are you sure you want to delete your account?",
              messageLine2: "This action is permanent and irreversible.",
              actionDescription: "Type Delete account below to continue.",
              confirm: "Delete account",
            },
          },
          userButton: {
            action__manageAccount: "Manage account",
            action__signOut: "Sign out",
            action__signOutAll: "Sign out of all accounts",
            action__addAccount: "Add account",
          },
          organizationSwitcher: {
            personalWorkspace: "Personal account",
            notSelected: "No organization selected",
            action__createOrganization: "Create Organization",
            action__manageOrganization: "Manage Organization",
            action__invitationAccept: "Join",
            action__suggestionsAccept: "Request to join",
            suggestionsAcceptedLabel: "Pending approval",
          },
          impersonationFab: {
            title: "Signed in as {{identifier}}",
            action__signOut: "Sign out",
          },
          organizationProfile: {
            badge__unverified: "Unverified",
            badge__automaticInvitation: "Automatic invitations",
            badge__automaticSuggestion: "Automatic suggestions",
            badge__manualInvitation: "No automatic enrollment",
            start: {
              headerTitle__members: "Members",
              headerTitle__settings: "Settings",
              headerSubtitle__members: "View and manage organization members",
              headerSubtitle__settings: "Manage organization settings",
            },
            profilePage: {
              title: "Organization Profile",
              subtitle: "Manage organization profile",
              successMessage: "The organization has been updated.",
              dangerSection: {
                title: "Danger",
                leaveOrganization: {
                  title: "Leave organization",
                  messageLine1:
                    "Are you sure you want to leave this organization? You will lose access to this organization and its applications.",
                  messageLine2: "This action is permanent and irreversible.",
                  successMessage: "You have left the organization.",
                  actionDescription:
                    "Type {{organizationName}} below to continue.",
                },
                deleteOrganization: {
                  title: "Delete organization",
                  messageLine1:
                    "Are you sure you want to delete this organization?",
                  messageLine2: "This action is permanent and irreversible.",
                  actionDescription:
                    "Type {{organizationName}} below to continue.",
                  successMessage: "You have deleted the organization.",
                },
              },
              domainSection: {
                title: "Verified domains",
                subtitle:
                  "Allow users to join the organization automatically or request to join based on a verified email domain.",
                primaryButton: "Add domain",
                unverifiedDomain_menuAction__verify: "Verify domain",
                unverifiedDomain_menuAction__remove: "Delete domain",
              },
            },
            createDomainPage: {
              title: "Add domain",
              subtitle:
                "Add the domain to verify. Users with email addresses at this domain can join the organization automatically or request to join.",
            },
            verifyDomainPage: {
              title: "Verify domain",
              subtitle:
                "The domain {{domainName}} needs to be verified via email.",
              subtitleVerificationCodeScreen:
                "A verification code was sent to {{emailAddress}}. Enter the code to continue.",
              formTitle: "Verification code",
              formSubtitle:
                "Enter the verification code sent to your email address",
              resendButton: "Didn't receive a code? Resend",
            },
            verifiedDomainPage: {
              subtitle:
                "The domain {{domain}} is now verified. Continue by selecting enrollment mode.",
              start: {
                headerTitle__enrollment: "Enrollment options",
                headerTitle__danger: "Danger",
              },
              enrollmentTab: {
                subtitle:
                  "Choose how users from this domain can join the organization.",
                manualInvitationOption__label: "No automatic enrollment",
                manualInvitationOption__description:
                  "Users can only be invited manually to the organization.",
                automaticInvitationOption__label: "Automatic invitations",
                automaticInvitationOption__description:
                  "Users are automatically invited to join the organization when they sign-up and can join anytime.",
                automaticSuggestionOption__label: "Automatic suggestions",
                automaticSuggestionOption__description:
                  "Users receive a suggestion to request to join, but must be approved by an admin before they are able to join the organization.",
                formButton__save: "Save",
                calloutInfoLabel:
                  "Changing the enrollment mode will only affect new users.",
                calloutInvitationCountLabel:
                  "Pending invitations sent to users: {{count}}",
                calloutSuggestionCountLabel:
                  "Pending suggestions sent to users: {{count}}",
              },
              dangerTab: {
                removeDomainTitle: "Remove domain",
                removeDomainSubtitle:
                  "Remove this domain from your verified domains",
                removeDomainActionLabel__remove: "Remove domain",
                calloutInfoLabel:
                  "Removing this domain will affect invited users.",
              },
            },
            invitePage: {
              title: "Invite members",
              subtitle: "Invite new members to this organization",
              successMessage: "Invitations successfully sent",
              detailsTitle__inviteFailed:
                "The invitations could not be sent. There are already pending invitations for the following email addresses: {{email_addresses}}.",
              formButtonPrimary__continue: "Send invitations",
            },
            removeDomainPage: {
              title: "Remove domain",
              messageLine1: "The email domain {{domain}} will be removed.",
              messageLine2:
                "Users won’t be able to join the organization automatically after this.",
              successMessage: "{{domain}} has been removed.",
            },
            membersPage: {
              detailsTitle__emptyRow: "No members to display",
              action__invite: "Invite",
              start: {
                headerTitle__active: "Active",
                headerTitle__members: "Members",
                headerTitle__invited: "Invited",
                headerTitle__invitations: "Invitations",
                headerTitle__requests: "Requests",
              },
              activeMembersTab: {
                tableHeader__user: "User",
                tableHeader__joined: "Joined",
                tableHeader__role: "Role",
                tableHeader__actions: "",
                menuAction__remove: "Remove member",
              },
              invitedMembersTab: {
                tableHeader__invited: "Invited",
                menuAction__revoke: "Revoke invitation",
              },
              invitationsTab: {
                table__emptyRow: "No invitations to display",
                manualInvitations: {
                  headerTitle: "Individual invitations",
                  headerSubtitle:
                    "Manually invite members and manage existing invitations.",
                },
                autoInvitations: {
                  headerTitle: "Automatic invitations",
                  headerSubtitle:
                    "Invite users by connecting an email domain with your organization. Anyone who signs up with a matching email domain will be able to join the organization anytime.",
                  primaryButton: "Manage verified domains",
                },
              },
              requestsTab: {
                tableHeader__requested: "Requested access",
                menuAction__approve: "Approve",
                menuAction__reject: "Reject",
                table__emptyRow: "No requests to display",
                requests: {
                  headerTitle: "Requests",
                  headerSubtitle:
                    "Browse and manage users who requested to join the organization.",
                },
                autoSuggestions: {
                  headerTitle: "Automatic suggestions",
                  headerSubtitle:
                    "Users who sign up with a matching email domain, will be able to see a suggestion to request to join your organization.",
                  primaryButton: "Manage verified domains",
                },
              },
            },
          },
          createOrganization: {
            title: "Create Organization",
            formButtonSubmit: "Create organization",
            subtitle: "Set the organization profile",
            invitePage: { formButtonReset: "Skip" },
          },
          organizationList: {
            createOrganization: "Create Organization",
            title: "Select an account",
            titleWithoutPersonal: "Select an organization",
            subtitle: "to continue to {{applicationName}}",
            action__invitationAccept: "Join",
            invitationAcceptedLabel: "Joined",
            action__suggestionsAccept: "Request to join",
            suggestionsAcceptedLabel: "Pending approval",
            action__createOrganization: "Create organization",
          },
          unstable__errors: {
            identification_deletion_failed:
              "You cannot delete your last identification.",
            phone_number_exists:
              "This phone number is taken. Please try another.",
            form_identifier_not_found: "",
            captcha_unavailable:
              "Sign up unsuccessful due to failed bot validation. Please refresh the page to try again or reach out to support for more assistance.",
            captcha_invalid:
              "Sign up unsuccessful due to failed security validations. Please refresh the page to try again or reach out to support for more assistance.",
            form_password_pwned:
              "This password has been found as part of a breach and can not be used, please try another password instead.",
            form_username_invalid_length: "",
            form_username_invalid_character: "",
            form_param_format_invalid: "",
            form_param_format_invalid__email_address:
              "Email address must be a valid email address.",
            form_password_length_too_short: "",
            form_param_nil: "",
            form_code_incorrect: "",
            form_password_incorrect: "",
            not_allowed_access: "",
            form_identifier_exists: "",
            form_password_validation_failed: "Incorrect Password",
            form_password_not_strong_enough:
              "Your password is not strong enough.",
            form_password_size_in_bytes_exceeded:
              "Your password has exceeded the maximum number of bytes allowed, please shorten it or remove some special characters.",
            passwordComplexity: {
              sentencePrefix: "Your password must contain",
              minimumLength: "{{length}} or more characters",
              maximumLength: "less than {{length}} characters",
              requireNumbers: "a number",
              requireLowercase: "a lowercase letter",
              requireUppercase: "an uppercase letter",
              requireSpecialCharacter: "a special character",
            },
            zxcvbn: {
              notEnough: "Your password is not strong enough.",
              couldBeStronger:
                "Your password works, but could be stronger. Try adding more characters.",
              goodPassword:
                "Your password meets all the necessary requirements.",
              warnings: {
                straightRow:
                  "Straight rows of keys on your keyboard are easy to guess.",
                keyPattern: "Short keyboard patterns are easy to guess.",
                simpleRepeat:
                  'Repeated characters like "aaa" are easy to guess.',
                extendedRepeat:
                  'Repeated character patterns like "abcabcabc" are easy to guess.',
                sequences:
                  'Common character sequences like "abc" are easy to guess.',
                recentYears: "Recent years are easy to guess.",
                dates: "Dates are easy to guess.",
                topTen: "This is a heavily used password.",
                topHundred: "This is a frequently used password.",
                common: "This is a commonly used password.",
                similarToCommon: "This is similar to a commonly used password.",
                wordByItself: "Single words are easy to guess.",
                namesByThemselves:
                  "Single names or surnames are easy to guess.",
                commonNames: "Common names and surnames are easy to guess.",
                userInputs:
                  "There should not be any personal or page related data.",
                pwned:
                  "Your password was exposed by a data breach on the Internet.",
              },
              suggestions: {
                l33t: "Avoid predictable letter substitutions like '@' for 'a'.",
                reverseWords: "Avoid reversed spellings of common words.",
                allUppercase: "Capitalize some, but not all letters.",
                capitalization: "Capitalize more than the first letter.",
                dates: "Avoid dates and years that are associated with you.",
                recentYears: "Avoid recent years.",
                associatedYears: "Avoid years that are associated with you.",
                sequences: "Avoid common character sequences.",
                repeated: "Avoid repeated words and characters.",
                longerKeyboardPattern:
                  "Use longer keyboard patterns and change typing direction multiple times.",
                anotherWord: "Add more words that are less common.",
                useWords: "Use multiple words, but avoid common phrases.",
                noNeed:
                  "You can create strong passwords without using symbols, numbers, or uppercase letters.",
                pwned:
                  "If you use this password elsewhere, you should change it.",
              },
            },
            form_param_max_length_exceeded__name:
              "Name should not exceed 256 characters.",
            form_param_max_length_exceeded__first_name:
              "First name should not exceed 256 characters.",
            form_param_max_length_exceeded__last_name:
              "Last name should not exceed 256 characters.",
          },
          dates: {
            previous6Days:
              "Last {{ date | weekday('en-US','long') }} at {{ date | timeString('en-US') }}",
            lastDay: "Yesterday at {{ date | timeString('en-US') }}",
            sameDay: "Today at {{ date | timeString('en-US') }}",
            nextDay: "Tomorrow at {{ date | timeString('en-US') }}",
            next6Days:
              "{{ date | weekday('en-US','long') }} at {{ date | timeString('en-US') }}",
            numeric: "{{ date | numeric('en-US') }}",
          },
        },
        h = {
          phoneCode: {
            title: "Check je telefoon",
            subtitle: "om verder te gaan naar {{applicationName}}",
            formTitle: "Verificatie code",
            formSubtitle:
              "Voer de verificatiecode in die naar je telefoonnummer is gestuurd",
            resendButton: "Verstuur code opnieuw",
          },
        };
      const g = f;
      var v = r(8515),
        b = r(9444);
      let y, x;
      const w = () => {
          const { localization: e } = (0, a.useOptions)();
          return ((e, t) => {
            if (!y || (x && x !== e && !(0, b.J)(e, x))) {
              x = e;
              const r = {};
              return (0, s.EB)(t, r), (0, s.EB)(e, r), (y = r), y;
            }
            return y;
          })(e || {}, g);
        },
        S = (e) => {
          const t = i.forwardRef((t, r) => {
              const o = w(),
                { localizationKey: i, ...a } = t,
                s = u();
              return i
                ? "string" == typeof i
                  ? (0, n.tZ)(e, { ...a, ref: r, children: i })
                  : (0, n.tZ)(e, {
                      ...a,
                      ref: r,
                      "data-localization-key": C(i),
                      children: $(i, o, s) || a.children,
                    })
                : (0, n.tZ)(e, { ...a, ref: r });
            }),
            r = e.displayName || e.name || "Component";
          return (t.displayName = `Localizable${r}`.replace("_", "")), t;
        },
        _ = () => {
          const { localization: e } = (0, a.useOptions)(),
            t = w(),
            r = u(),
            n = (e) => (e && "string" != typeof e ? $(e, t, r) : e || "");
          return {
            t: n,
            translateError: (e) => {
              if (!e || "string" == typeof e) return n(e);
              if ((0, o.uX)(e))
                return n((0, v.u)(`unstable__errors.${e.code}`)) || e.message;
              const { code: t, message: r, longMessage: i, meta: a } = e || {},
                { paramName: s = "" } = a || {};
              return t
                ? n((0, v.u)(`unstable__errors.${t}__${s}`)) ||
                    n((0, v.u)(`unstable__errors.${t}`)) ||
                    i ||
                    r
                : "";
            },
            locale:
              (null == e ? void 0 : e.locale) ||
              (null == g ? void 0 : g.locale),
          };
        },
        C = (e) => e.key,
        $ = (e, t, r) => {
          const n = e.key;
          return ((e, t) => {
            if (!e) return "";
            const { normalisedString: r, expressions: n } = ((e, t) => {
              const r = (e.match(/{{.+?}}/g) || []).map((e) =>
                  e.replace(/[{}]/g, "")
                ),
                n = r.map((e) => e.split("|").map((e) => e.trim())),
                o = n
                  .filter((e) => e[0] in t)
                  .map(([e, ...t]) => ({
                    token: e,
                    modifiers: t
                      .map((e) => p(e))
                      .filter((e) => d(e.modifierName)),
                  }));
              let i = e;
              return (
                o.forEach(({ token: e }) => {
                  i = i.replace(/{{.+?}}/, `_++${e}++_`);
                }),
                { expressions: o, normalisedString: i }
              );
            })(e, t);
            return ((e, t, r) => (
              t.forEach(({ token: t, modifiers: n }) => {
                const o = n.reduce((e, t) => {
                  try {
                    return c[t.modifierName](e, ...t.params);
                  } catch (e) {
                    return console.warn(e), "";
                  }
                }, r[t]);
                e = e.replace(`_++${t}++_`, o);
              }),
              e
            ))(r, n, t);
          })((0, s.Ai)(t, n) || "", { ...r, ...e.params });
        };
    },
    8515: function (e, t, r) {
      r.d(t, {
        u: function () {
          return n;
        },
      });
      const n = (e, t) => ({ key: e, params: t });
    },
    7714: function (e, t, r) {
      r.r(t),
        r.d(t, {
          default: function () {
            return u;
          },
        });
      var n = r(2903),
        o = r(2784),
        i = r(8316),
        a = r(9841),
        s = r(361),
        l = r(8173),
        c = r(3736);
      class u extends o.PureComponent {
        render() {
          const {
              props: e,
              component: t,
              componentName: r,
              node: u,
            } = this.props,
            d = (0, n.tZ)(l.ComponentContext.Provider, {
              value: { componentName: r, ...e },
              children: (0, n.tZ)(o.Suspense, {
                fallback: "",
                children: o.createElement(t, e),
              }),
            });
          return "path" === (null == e ? void 0 : e.routing)
            ? ((null == e ? void 0 : e.path) || (0, s.yI)(r),
              i.createPortal(
                (0, n.tZ)(c.PathRouter, {
                  preservedParams: a.Yt,
                  basePath: e.path,
                  children: d,
                }),
                u
              ))
            : i.createPortal(
                (0, n.tZ)(c.HashRouter, { preservedParams: a.Yt, children: d }),
                u
              );
        }
      }
    },
    1708: function (e, t, r) {
      r.d(t, {
        wg: function () {
          return l;
        },
        Yp: function () {
          return s;
        },
      });
      var n = r(2903),
        o = r(7018),
        i = r(2784);
      const [a, , s] = (0, o.uH)("FormControlContext"),
        l = (e) => {
          const {
              id: t,
              isRequired: r = !1,
              hasError: o = !1,
              isDisabled: s = !1,
              setError: l,
              setSuccess: c,
              setWarning: u,
              setInfo: d,
              setHasPassedComplexity: p,
              clearFeedback: m,
            } = e,
            f = `${t}-field`,
            h = o ? `error-${t}` : "",
            g = i.useMemo(
              () => ({
                value: {
                  isRequired: r,
                  hasError: o,
                  id: f,
                  errorMessageId: h,
                  isDisabled: s,
                  setError: l,
                  setSuccess: c,
                  setWarning: u,
                  setInfo: d,
                  setHasPassedComplexity: p,
                  clearFeedback: m,
                },
              }),
              [r, o, f, h, s, l, c, d, u, p, m]
            );
          return (0, n.tZ)(a.Provider, { value: g, children: e.children });
        };
      r(3154);
    },
    3154: function (e, t, r) {
      r.d(t, {
        G: function () {
          return o;
        },
      });
      var n = r(2784);
      function o(e) {
        return {
          onChange: function (t) {
            t.persist(), "function" == typeof e && e(t);
          },
          ref: n.useRef(null),
        };
      }
    },
    373: function (e, t, r) {
      r.d(t, {
        bZ: function () {
          return H;
        },
        zM: function () {
          return K;
        },
        Ct: function () {
          return me;
        },
        xu: function () {
          return l;
        },
        zx: function () {
          return _;
        },
        JX: function () {
          return m;
        },
        kC: function () {
          return p;
        },
        l0: function () {
          return ae;
        },
        NI: function () {
          return Y;
        },
        jo: function () {
          return Q;
        },
        Zh: function () {
          return re;
        },
        lX: function () {
          return ie;
        },
        Xc: function () {
          return te;
        },
        ZD: function () {
          return ne;
        },
        rj: function () {
          return P;
        },
        X6: function () {
          return R;
        },
        JO: function () {
          return ce;
        },
        Ee: function () {
          return U;
        },
        II: function () {
          return L;
        },
        rU: function () {
          return j;
        },
        Cc: function () {
          return Be;
        },
        rF: function () {
          return C;
        },
        $j: function () {
          return y;
        },
        iA: function () {
          return ge;
        },
        p3: function () {
          return be;
        },
        Td: function () {
          return $e;
        },
        xv: function () {
          return z;
        },
        Th: function () {
          return Se;
        },
        hr: function () {
          return ve;
        },
        Tr: function () {
          return ye;
        },
      });
      var n = r(2903),
        o = r(2784),
        i = r(9820);
      const a = (e) => {
          const {
            hasError: t,
            isDisabled: r,
            isLoading: n,
            isOpen: o,
            isActive: i,
            ...a
          } = e;
          return {
            "data-error": t || void 0,
            "data-disabled": r || void 0,
            "data-loading": n || void 0,
            "data-open": o || void 0,
            "data-active": i || void 0,
            ...a,
          };
        },
        { applyVariants: s } = (0, i.createVariants)(() => ({
          base: { boxSizing: "inherit" },
          variants: {},
        })),
        l = o.forwardRef((e, t) => {
          const { as: r = "div", ...o } = e;
          return (0, n.tZ)(r, { ...a(o), css: s(e), ref: t });
        });
      var c = r(1609);
      const { applyVariants: u, filterProps: d } = (0, i.createVariants)(
          (e) => ({
            base: { display: "flex" },
            variants: {
              direction: {
                row: { flexDirection: "row" },
                col: { flexDirection: "column" },
                rowReverse: { flexDirection: "row-reverse" },
                columnReverse: { flexDirection: "column-reverse" },
              },
              align: {
                start: { alignItems: "flex-start" },
                center: { alignItems: "center" },
                end: { alignItems: "flex-end" },
                stretch: { alignItems: "stretch" },
                baseline: { alignItems: "baseline" },
              },
              justify: {
                start: { justifyContent: "flex-start" },
                center: { justifyContent: "center" },
                end: { justifyContent: "flex-end" },
                between: { justifyContent: "space-between" },
              },
              wrap: {
                noWrap: { flexWrap: "nowrap" },
                wrap: { flexWrap: "wrap" },
                wrapReverse: { flexWrap: "wrap-reverse" },
              },
              gap: {
                1: { gap: e.space.$1 },
                2: { gap: e.space.$2 },
                3: { gap: e.space.$3 },
                4: { gap: e.space.$4 },
                5: { gap: e.space.$5 },
                6: { gap: e.space.$6 },
                7: { gap: e.space.$7 },
                8: { gap: e.space.$8 },
                9: { gap: e.space.$9 },
              },
              center: {
                true: { justifyContent: "center", alignItems: "center" },
              },
            },
            defaultVariants: {
              direction: "row",
              align: "stretch",
              justify: "start",
              wrap: "noWrap",
            },
          })
        ),
        p = o.forwardRef((e, t) =>
          (0, n.tZ)(l, { ...d(e), css: u(e), ref: t })
        ),
        m = o.forwardRef((e, t) =>
          (0, n.tZ)(p, { ...e, direction: "col", ref: t })
        ),
        {
          size: f,
          thickness: h,
          speed: g,
        } = (0, i.createCssVariables)("speed", "size", "thickness"),
        { applyVariants: v, filterProps: b } = (0, i.createVariants)((e) => ({
          base: {
            display: "inline-block",
            borderRadius: "99999px",
            borderTop: `${h} solid currentColor`,
            borderRight: `${h} solid currentColor`,
            borderBottomWidth: h,
            borderLeftWidth: h,
            borderBottomStyle: "solid",
            borderLeftStyle: "solid",
            borderBottomColor: e.colors.$transparent,
            borderLeftColor: e.colors.$transparent,
            opacity: 1,
            animation: `${i.animations.spinning} ${g} linear 0s infinite normal none running`,
            width: [f],
            height: [f],
            minWidth: [f],
            minHeight: [f],
          },
          variants: {
            colorScheme: {
              primary: {
                borderTopColor: e.colors.$primary500,
                borderRightColor: e.colors.$primary500,
                opacity: 1,
              },
              neutral: {
                borderTopColor: e.colors.$blackAlpha700,
                borderRightColor: e.colors.$blackAlpha700,
                opacity: 1,
              },
            },
            thickness: { sm: { [h]: e.sizes.$0x5 }, md: { [h]: e.sizes.$1 } },
            size: {
              xs: { [f]: e.sizes.$3 },
              sm: { [f]: e.sizes.$4 },
              md: { [f]: e.sizes.$5 },
              lg: { [f]: e.sizes.$6 },
              xl: { [f]: e.sizes.$8 },
            },
            speed: { slow: { [g]: "600ms" }, normal: { [g]: "400ms" } },
          },
          defaultVariants: { speed: "normal", thickness: "sm", size: "sm" },
        })),
        y = (e) =>
          (0, n.tZ)("span", {
            ...b(e),
            css: v(e),
            "aria-busy": !0,
            "aria-live": "polite",
          }),
        x = (0, i.createCssVariables)(
          "accent",
          "accentDark",
          "accentDarker",
          "accentLighter",
          "accentLightest",
          "border"
        ),
        { applyVariants: w, filterProps: S } = (0, i.createVariants)(
          (e, t) => ({
            base: {
              margin: 0,
              padding: 0,
              border: 0,
              outline: 0,
              userSelect: "none",
              cursor: "pointer",
              backgroundColor: "unset",
              color: "currentColor",
              borderRadius: e.radii.$md,
              ...i.common.centeredFlex("inline-flex"),
              ...i.common.disabled(e),
              transitionProperty: e.transitionProperty.$common,
              transitionDuration: e.transitionDuration.$controls,
            },
            variants: {
              textVariant: i.common.textVariants(e),
              size: {
                iconLg: { minHeight: e.sizes.$14, width: e.sizes.$14 },
                xs: {
                  minHeight: e.sizes.$1x5,
                  padding: `${e.space.$1x5} ${e.space.$1x5}`,
                },
                sm: {
                  minHeight: e.sizes.$8,
                  padding: `${e.space.$2} ${e.space.$3x5}`,
                },
                md: {
                  minHeight: e.sizes.$9,
                  padding: `${e.space.$2x5} ${e.space.$5}`,
                  letterSpacing: e.sizes.$xxs,
                },
              },
              colorScheme: {
                primary: {
                  [x.accentLightest]: c.O9.setAlpha(e.colors.$primary400, 0.3),
                  [x.accentLighter]: c.O9.setAlpha(e.colors.$primary500, 0.3),
                  [x.accent]: e.colors.$primary500,
                  [x.accentDark]: e.colors.$primary600,
                  [x.accentDarker]: e.colors.$primary700,
                },
                danger: {
                  [x.accentLightest]: c.O9.setAlpha(e.colors.$danger400, 0.3),
                  [x.accentLighter]: c.O9.setAlpha(e.colors.$danger500, 0.3),
                  [x.accent]: e.colors.$danger500,
                  [x.accentDark]: e.colors.$danger600,
                  [x.accentDarker]: e.colors.$danger700,
                },
                neutral: {
                  [x.border]: e.colors.$blackAlpha200,
                  [x.accentLightest]: e.colors.$blackAlpha50,
                  [x.accentLighter]: e.colors.$blackAlpha300,
                  [x.accent]: e.colors.$colorText,
                  [x.accentDark]: e.colors.$blackAlpha600,
                  [x.accentDarker]: e.colors.$blackAlpha700,
                },
              },
              variant: {
                solid: {
                  backgroundColor: x.accent,
                  color: e.colors.$colorTextOnPrimaryBackground,
                  "&:hover": { backgroundColor: x.accentDark },
                  "&:focus": t.hoverAsFocus
                    ? { backgroundColor: x.accentDark }
                    : void 0,
                  "&:active": { backgroundColor: x.accentDarker },
                },
                outline: {
                  border: e.borders.$normal,
                  borderColor: x.accentLighter,
                  color: x.accent,
                  "&:hover": { backgroundColor: x.accentLightest },
                  "&:focus": t.hoverAsFocus
                    ? { backgroundColor: x.accentLightest }
                    : void 0,
                  "&:active": { backgroundColor: x.accentLighter },
                },
                ghost: {
                  color: x.accent,
                  "&:hover": { backgroundColor: x.accentLightest },
                  "&:focus": t.hoverAsFocus
                    ? { backgroundColor: x.accentLightest }
                    : void 0,
                  "&:active": { backgroundColor: x.accentLighter },
                },
                icon: {
                  color: x.accent,
                  border: e.borders.$normal,
                  borderRadius: e.radii.$lg,
                  borderColor: x.border,
                  "&:hover": { backgroundColor: x.accentLightest },
                  "&:focus": t.hoverAsFocus
                    ? { backgroundColor: x.accentLightest }
                    : void 0,
                  "&:active": { backgroundColor: x.accentLighter },
                },
                ghostIcon: {
                  color: x.accent,
                  minHeight: e.sizes.$6,
                  width: e.sizes.$6,
                  padding: `${e.space.$1} ${e.space.$1}`,
                  "&:hover": { color: x.accentDark },
                  "&:focus": t.hoverAsFocus
                    ? { backgroundColor: x.accentDark }
                    : void 0,
                  "&:active": { color: x.accentDarker },
                },
                link: {
                  ...i.common.textVariants(e).smallRegular,
                  minHeight: "fit-content",
                  height: "fit-content",
                  width: "fit-content",
                  textTransform: "none",
                  padding: 0,
                  color: x.accent,
                  "&:hover": { textDecoration: "underline" },
                  "&:focus": t.hoverAsFocus
                    ? { textDecoration: "underline" }
                    : void 0,
                  "&:active": { color: x.accentDark },
                },
                roundWrapper: {
                  padding: 0,
                  margin: 0,
                  height: "unset",
                  width: "unset",
                  minHeight: "unset",
                },
              },
              block: { true: { width: "100%" } },
              focusRing: { true: { ...i.common.focusRing(e) } },
            },
            defaultVariants: {
              textVariant: "buttonRegularRegular",
              colorScheme: "primary",
              variant: "solid",
              size: "md",
              focusRing: !0,
            },
          })
        ),
        _ = o.forwardRef((e, t) => {
          const r = { ...e, isDisabled: e.isDisabled || e.isLoading },
            {
              isLoading: o,
              isDisabled: i,
              hoverAsFocus: s,
              loadingText: l,
              children: c,
              onClick: u,
              ...d
            } = S(r);
          return (0, n.BX)("button", {
            ...a(d),
            type: void 0,
            onClick: (e) => (
              "submit" !== d.type && e.preventDefault(),
              null == u ? void 0 : u(e)
            ),
            disabled: i,
            css: w(r),
            ref: t,
            children: [
              o &&
                (0, n.BX)(p, {
                  as: "span",
                  gap: 2,
                  center: !0,
                  css: { position: "relative" },
                  children: [
                    (0, n.tZ)(y, {
                      css: { position: l ? void 0 : "absolute" },
                      "aria-label": l || "Loading",
                    }),
                    l ||
                      (0, n.tZ)("span", { style: { opacity: 0 }, children: c }),
                  ],
                }),
              !o && c,
            ],
          });
        }),
        C = o.forwardRef((e, t) => {
          const r = { ...e, isDisabled: e.isDisabled || e.isLoading },
            {
              loadingText: o,
              isDisabled: i,
              hoverAsFocus: s,
              children: l,
              onClick: c,
              ...u
            } = S(r);
          return (0, n.tZ)("button", {
            ...a(u),
            type: void 0,
            onClick: (e) => (
              "submit" !== u.type && e.preventDefault(),
              null == c ? void 0 : c(e)
            ),
            css: w(r),
            disabled: i,
            ref: t,
            children: l,
          });
        }),
        { applyVariants: $, filterProps: k } = (0, i.createVariants)((e) => ({
          base: { display: "grid" },
          variants: {
            align: {
              start: { alignItems: "flex-start" },
              center: { alignItems: "center" },
              end: { alignItems: "flex-end" },
              stretch: { alignItems: "stretch" },
              baseline: { alignItems: "baseline" },
            },
            justify: {
              start: { justifyContent: "flex-start" },
              center: { justifyContent: "center" },
              end: { justifyContent: "flex-end" },
              between: { justifyContent: "space-between" },
              around: { justifyContent: "space-around" },
              stretch: { justifyContent: "stretch" },
            },
            columns: {
              1: { gridTemplateColumns: "1fr" },
              2: { gridTemplateColumns: "repeat(2, 1fr)" },
              3: { gridTemplateColumns: "repeat(3, 1fr)" },
              4: { gridTemplateColumns: "repeat(4, 1fr)" },
              6: { gridTemplateColumns: "repeat(6, 1fr)" },
            },
            gap: {
              1: { gap: e.space.$1 },
              2: { gap: e.space.$2 },
              3: { gap: e.space.$3 },
              4: { gap: e.space.$4 },
              5: { gap: e.space.$5 },
              6: { gap: e.space.$6 },
              7: { gap: e.space.$7 },
              8: { gap: e.space.$8 },
              9: { gap: e.space.$9 },
            },
          },
          defaultVariants: {
            align: "stretch",
            justify: "stretch",
            wrap: "noWrap",
          },
        })),
        P = o.forwardRef((e, t) =>
          (0, n.tZ)(l, { ...k(e), css: $(e), ref: t })
        ),
        { applyVariants: I, filterProps: B } = (0, i.createVariants)((e) => ({
          base: {
            boxSizing: "border-box",
            color: `${e.colors.$colorText}`,
            margin: 0,
          },
          variants: {
            textVariant: { ...i.common.textVariants(e) },
            as: { h1: { lineHeight: e.lineHeights.$base } },
          },
          defaultVariants: { as: "h1", textVariant: "xlargeMedium" },
        })),
        R = (e) => {
          const { as: t = "h1", ...r } = e;
          return (0, n.tZ)(t, { ...B(r), css: I(e) });
        },
        { applyVariants: T, filterProps: A } = (0, i.createVariants)((e) => ({
          base: {
            boxSizing: "border-box",
            color: e.colors.$colorText,
            margin: 0,
            fontSize: "inherit",
            ...i.common.disabled(e),
          },
          variants: {
            variant: i.common.textVariants(e),
            size: i.common.fontSizeVariants(e),
            colorScheme: {
              primary: { color: e.colors.$colorText },
              onPrimaryBg: { color: e.colors.$colorTextOnPrimaryBackground },
              danger: { color: e.colors.$danger500 },
              success: { color: e.colors.$success500 },
              neutral: { color: e.colors.$colorTextSecondary },
              inherit: { color: "inherit" },
            },
            truncate: {
              true: {
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
              },
            },
          },
          defaultVariants: { variant: "regularRegular" },
        })),
        z = o.forwardRef((e, t) => {
          const { as: r = "p", ...o } = e;
          return (0, n.tZ)(r, { ...a(A(o)), css: T(e), ref: t });
        });
      var D = r(1708),
        O = r(3154);
      const { applyVariants: E, filterProps: Z } = (0, i.createVariants)(
          (e, t) => ({
            base: {
              boxSizing: "inherit",
              margin: 0,
              padding: `${e.space.$2x5} ${e.space.$4}`,
              backgroundColor: e.colors.$colorInputBackground,
              color: e.colors.$colorInputText,
              outline: "transparent solid 2px",
              outlineOffset: "2px",
              width: "checkbox" === t.type ? e.sizes.$4 : "100%",
              aspectRatio: "checkbox" === t.type ? "1/1" : "unset",
              accentColor: e.colors.$primary500,
              ...i.common.textVariants(e).smallRegular,
              ...i.common.borderVariants(e, t).normal,
              ...(!1 === t.focusRing ? {} : i.common.focusRingInput(e, t)),
              ...i.common.disabled(e),
              [i.mqu.ios]: { fontSize: e.fontSizes.$md },
              ":autofill": { animationName: "onAutoFillStart" },
            },
            variants: {},
          })
        ),
        L = o.forwardRef((e, t) => {
          const r = (0, D.Yp)() || {},
            o = Z({ ...e, hasError: e.hasError || r.hasError }),
            { onChange: i } = (0, O.G)(o.onChange),
            {
              isDisabled: a,
              hasError: s,
              focusRing: l,
              isRequired: c,
              ...u
            } = o;
          return (0, n.tZ)("input", {
            ...u,
            ref: t,
            onChange: i,
            disabled: a,
            required: c || r.isRequired,
            id: e.id || r.id,
            "aria-invalid": s || r.hasError,
            "aria-describedby": r.errorMessageId,
            "aria-required": r.isRequired,
            css: E(o),
          });
        }),
        { applyVariants: F, filterProps: M } = (0, i.createVariants)((e) => ({
          base: {
            boxSizing: "border-box",
            display: "inline-flex",
            alignItems: "center",
            margin: 0,
            cursor: "pointer",
            ...i.common.focusRing(e),
            ...i.common.disabled(e),
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          },
          variants: {
            variant: i.common.textVariants(e),
            size: i.common.fontSizeVariants(e),
            colorScheme: {
              primary: {
                color: e.colors.$primary500,
                "&:hover": { color: e.colors.$primary400 },
                "&:active": { color: e.colors.$primary600 },
              },
              danger: {
                color: e.colors.$danger500,
                "&:hover": { color: e.colors.$danger400 },
                "&:active": { color: e.colors.$danger600 },
              },
              neutral: { color: e.colors.$colorTextSecondary },
              inherit: { color: "inherit" },
            },
          },
          defaultVariants: { colorScheme: "primary", variant: "smallRegular" },
        })),
        j = (e) => {
          const { isExternal: t, children: r, href: o, onClick: i, ...s } = e,
            l = i
              ? (e) => {
                  o || e.preventDefault(), i(e);
                }
              : void 0;
          return (0, n.tZ)("a", {
            ...a(M(s)),
            onClick: l,
            href: o || "",
            target: o && t ? "_blank" : void 0,
            rel: o && t ? "noopener" : void 0,
            css: F(e),
            children: r,
          });
        },
        U = o.forwardRef((e, t) =>
          (0, n.tZ)("img", { crossOrigin: "anonymous", ...a(e), ref: t })
        ),
        { applyVariants: N, filterProps: V } = (0, i.createVariants)((e) => ({
          base: {
            padding: `${e.space.$3} ${e.space.$4}`,
            backgroundColor: e.colors.$blackAlpha50,
            ...i.common.borderVariants(e).normal,
          },
          variants: {},
        })),
        H = (e) =>
          (0, n.tZ)(p, {
            align: "center",
            justify: "start",
            ...V(e),
            css: N(e),
            children: e.children,
          });
      var W = r(4804);
      const { applyVariants: X, filterProps: q } = (0, i.createVariants)(
          (e) => ({
            base: {
              marginRight: e.space.$2x5,
              width: e.sizes.$4,
              height: e.sizes.$4,
            },
            variants: {
              colorScheme: {
                danger: { color: e.colors.$danger500 },
                warning: { color: e.colors.$warning500 },
                success: { color: e.colors.$success500 },
                primary: { color: e.colors.$primary500 },
              },
            },
          })
        ),
        K = (e) => {
          const { variant: t, ...r } = e,
            o = "warning" === t ? W.bR : W.SV;
          return (0, n.tZ)(o, { ...q(r), css: X(e) });
        },
        Y = (e) => {
          const {
            hasError: t,
            id: r,
            isRequired: o,
            setError: i,
            setInfo: a,
            clearFeedback: s,
            setSuccess: l,
            setWarning: c,
            setHasPassedComplexity: u,
            ...d
          } = e;
          return (0, n.tZ)(p, {
            direction: "col",
            ...d,
            css: { position: "relative", flex: "1 1 auto" },
            children: (0, n.tZ)(D.wg, {
              hasError: t,
              id: r,
              isRequired: o,
              setError: i,
              setInfo: a,
              clearFeedback: s,
              setSuccess: l,
              setWarning: c,
              setHasPassedComplexity: u,
              children: e.children,
            }),
          });
        };
      var G = r(3476);
      const { applyVariants: J } = (0, i.createVariants)((e) => ({
          base: {
            willChange: "transform, opacity, height",
            marginTop: e.sizes.$2,
            animation: `${i.animations.textInSmall} ${e.transitionDuration.$fast}`,
            display: "flex",
            gap: e.sizes.$1,
            position: "absolute",
            top: "0",
          },
          variants: {},
        })),
        Q = (0, o.forwardRef)((e, t) => {
          const { hasError: r, errorMessageId: o } = (0, D.Yp)() || {};
          if (!r && !e.children) return null;
          const { children: i, ...a } = e;
          return (0, n.BX)(z, {
            ref: t,
            variant: "smallRegular",
            colorScheme: "danger",
            "aria-live": "polite",
            id: o,
            ...a,
            css: J(e),
            children: [
              (0, n.tZ)(G.Icon, { colorScheme: "danger", icon: W.bR }),
              i,
            ],
          });
        }),
        { applyVariants: ee } = (0, i.createVariants)((e) => ({
          base: {
            willChange: "transform, opacity, height",
            marginTop: e.sizes.$2,
            animation: `${i.animations.textInSmall} ${e.transitionDuration.$fast}`,
            display: "flex",
            gap: e.sizes.$1,
            position: "absolute",
            top: "0",
          },
          variants: {},
        })),
        te = (0, o.forwardRef)((e, t) => {
          const { children: r, ...o } = e;
          return (0, n.BX)(z, {
            ref: t,
            variant: "smallRegular",
            colorScheme: "neutral",
            "aria-live": "polite",
            ...o,
            css: ee(e),
            children: [
              (0, n.tZ)(G.Icon, { colorScheme: "success", icon: W.fU }),
              r,
            ],
          });
        }),
        re = (0, o.forwardRef)((e, t) => {
          const { hasError: r, errorMessageId: o } = (0, D.Yp)() || {};
          return r || e.children
            ? (0, n.tZ)(z, {
                ref: t,
                variant: "smallRegular",
                colorScheme: "neutral",
                "aria-live": "polite",
                id: o,
                ...e,
                css: ee(e),
              })
            : null;
        }),
        ne = (0, o.forwardRef)((e, t) => {
          const { children: r, ...o } = e;
          return (0, n.BX)(z, {
            ref: t,
            variant: "smallRegular",
            colorScheme: "neutral",
            "aria-live": "polite",
            ...o,
            css: ee(e),
            children: [
              (0, n.tZ)(G.Icon, { colorScheme: "warning", icon: W.bR }),
              r,
            ],
          });
        }),
        { applyVariants: oe } = (0, i.createVariants)((e) => ({
          base: {
            color: e.colors.$colorText,
            ...i.common.textVariants(e).smallMedium,
            ...i.common.disabled(e),
          },
          variants: {},
        })),
        ie = (e) => {
          const { id: t } = (0, D.Yp)(),
            { isRequired: r, htmlFor: o, ...i } = e;
          return (0, n.tZ)("label", {
            ...a(i),
            htmlFor: null != o ? o : t,
            css: oe(e),
            children: e.children,
          });
        },
        ae = o.forwardRef((e, t) =>
          (0, n.tZ)(p, { direction: "col", as: "form", ...e, ref: t })
        ),
        { applyVariants: se, filterProps: le } = (0, i.createVariants)((e) => ({
          base: { flexShrink: 0 },
          variants: {
            size: {
              sm: { width: e.sizes.$3, height: e.sizes.$3 },
              md: { width: e.sizes.$4, height: e.sizes.$4 },
              lg: { width: e.sizes.$5, height: e.sizes.$5 },
            },
            colorScheme: {
              success: { color: e.colors.$success500 },
              danger: { color: e.colors.$danger500 },
              warning: { color: e.colors.$warning500 },
              neutral: { color: e.colors.$blackAlpha400 },
            },
          },
          defaultVariants: { size: "md" },
        })),
        ce = (e) => {
          const { icon: t, ...r } = e;
          return (0, n.tZ)(t, { ...le(r), css: se(e) });
        },
        ue = (0, i.createCssVariables)("accent", "bg"),
        { applyVariants: de, filterProps: pe } = (0, i.createVariants)((e) => ({
          base: {
            color: ue.accent,
            backgroundColor: ue.bg,
            borderRadius: e.radii.$sm,
            padding: `${e.space.$0x5} ${e.space.$1x5}`,
            display: "inline-flex",
          },
          variants: {
            textVariant: { ...i.common.textVariants(e) },
            colorScheme: {
              primary: {
                [ue.accent]: e.colors.$primary500,
                [ue.bg]: c.O9.setAlpha(e.colors.$primary400, 0.2),
              },
              danger: {
                [ue.accent]: e.colors.$danger500,
                [ue.bg]: e.colors.$danger100,
              },
              neutral: {
                [ue.accent]: e.colors.$blackAlpha600,
                [ue.bg]: e.colors.$blackAlpha200,
              },
              success: {
                [ue.accent]: e.colors.$success500,
                [ue.bg]: c.O9.setAlpha(e.colors.$success50, 0.2),
              },
              warning: {
                [ue.accent]: e.colors.$warning600,
                [ue.bg]: e.colors.$warning100,
              },
            },
          },
          defaultVariants: {
            colorScheme: "primary",
            textVariant: "smallMedium",
          },
        })),
        me = (e) =>
          (0, n.tZ)(p, { ...pe(e), center: !0, as: "span", css: de(e) }),
        { applyVariants: fe, filterProps: he } = (0, i.createVariants)((e) => ({
          base: {
            borderBottom: e.borders.$normal,
            borderColor: e.colors.$blackAlpha300,
            borderCollapse: "separate",
            borderSpacing: "0",
            "td:not(:first-of-type)": { paddingLeft: e.space.$2 },
            "th:not(:first-of-type)": { paddingLeft: e.space.$2 },
            "tr > td": {
              paddingBottom: e.space.$2,
              paddingTop: e.space.$2,
              paddingLeft: e.space.$4,
              paddingRight: e.space.$4,
            },
            "tr > th:first-of-type": { paddingLeft: e.space.$5 },
            "thead::after": {
              content: '""',
              display: "block",
              paddingBottom: e.space.$2,
            },
            "tbody::after": {
              content: '""',
              display: "block",
              paddingBottom: e.space.$2,
            },
            "tr > td:first-of-type": {
              borderTopLeftRadius: e.radii.$md,
              borderBottomLeftRadius: e.radii.$md,
            },
            "tr > td:last-of-type": {
              borderTopRightRadius: e.radii.$md,
              borderBottomRightRadius: e.radii.$md,
            },
            width: "100%",
          },
          variants: {},
        })),
        ge = o.forwardRef((e, t) =>
          (0, n.tZ)(l, { as: "table", ...he(e), css: fe(e), ref: t })
        ),
        ve = o.forwardRef((e, t) =>
          (0, n.tZ)(l, { as: "thead", ...e, ref: t })
        ),
        be = o.forwardRef((e, t) =>
          (0, n.tZ)(l, { as: "tbody", ...e, ref: t })
        ),
        ye = o.forwardRef((e, t) => (0, n.tZ)(l, { as: "tr", ...e, ref: t })),
        { applyVariants: xe, filterProps: we } = (0, i.createVariants)((e) => ({
          base: {
            textAlign: "left",
            fontSize: e.fontSizes.$xs,
            fontWeight: e.fontWeights.$normal,
            color: c.O9.setAlpha(e.colors.$colorText, 0.62),
            borderBottom: e.borders.$normal,
            borderColor: e.colors.$blackAlpha300,
            paddingBottom: e.space.$2,
          },
          variants: {},
        })),
        Se = o.forwardRef((e, t) =>
          (0, n.tZ)(l, { as: "th", ...we(e), css: xe(e), ref: t })
        ),
        { applyVariants: _e, filterProps: Ce } = (0, i.createVariants)((e) => ({
          base: {
            fontSize: e.fontSizes.$xs,
            fontWeight: e.fontWeights.$normal,
            color: e.colors.$colorText,
          },
          variants: {},
        })),
        $e = o.forwardRef((e, t) =>
          (0, n.tZ)(l, { as: "td", ...Ce(e), css: _e(e), ref: t })
        ),
        ke = (0, i.createCssVariables)("accent", "bg"),
        { applyVariants: Pe, filterProps: Ie } = (0, i.createVariants)((e) => ({
          base: {
            color: ke.accent,
            backgroundColor: ke.bg,
            borderRadius: e.radii.$sm,
            height: e.space.$4,
            minWidth: e.space.$4,
            padding: `${e.space.$0x5}`,
            display: "inline-flex",
          },
          variants: {
            textVariant: { ...i.common.textVariants(e) },
            colorScheme: {
              primary: {
                [ke.accent]: e.colors.$colorTextOnPrimaryBackground,
                [ke.bg]: e.colors.$primary500,
              },
            },
          },
          defaultVariants: {
            colorScheme: "primary",
            textVariant: "extraSmallRegular",
          },
        })),
        Be = (e) =>
          (0, n.tZ)(p, {
            ...Ie(e),
            center: !0,
            as: "span",
            css: [Pe(e), { lineHeight: 0 }],
          });
    },
    5345: function (e, t, r) {
      r.d(t, {
        X: function () {
          return o;
        },
        t: function () {
          return i;
        },
      });
      var n = r(2784);
      const o = n.createContext(null);
      o.displayName = "RouteContext";
      const i = () => {
        const e = n.useContext(o);
        if (!e) throw new Error("useRouter called while Router is null");
        return e;
      };
    },
    3736: function (e, t, r) {
      r.r(t),
        r.d(t, {
          HashRouter: function () {
            return w;
          },
          PathRouter: function () {
            return S;
          },
          Route: function () {
            return b;
          },
          RouteContext: function () {
            return n.X;
          },
          Switch: function () {
            return $;
          },
          VIRTUAL_ROUTER_BASE_PATH: function () {
            return _;
          },
          VirtualRouter: function () {
            return C;
          },
          hashRouterBase: function () {
            return x;
          },
          useRouter: function () {
            return n.t;
          },
        });
      var n = r(5345),
        o = r(2903),
        i = r(2784),
        a = r(996),
        s = r(9126),
        l = r.n(s),
        c = r(8173),
        u = r(8441);
      const d = (e, t, r, n) => {
        let o = e;
        r && ((o = t), n || (o += "/" + r)),
          o.startsWith("//") && (o = o.substr(1));
        let i = t + (r ? "/" + r : "");
        return i.startsWith("//") && (i = i.substr(1)), [o, i];
      };
      function p(e, t) {
        const r = [];
        return (function (e, t, r = {}) {
          const { decode: n = (e) => e } = r;
          return function (r) {
            const o = e.exec(r);
            if (!o) return !1;
            const { 0: i, index: a } = o,
              s = Object.create(null);
            for (let e = 1; e < o.length; e++) {
              if (void 0 === o[e]) continue;
              const r = t[e - 1];
              "*" === r.modifier || "+" === r.modifier
                ? (s[r.name] = o[e]
                    .split(r.prefix + r.suffix)
                    .map((e) => n(e, r)))
                : (s[r.name] = n(o[e], r));
            }
            return { path: i, index: a, params: s };
          };
        })(g(e, r, t), r, t);
      }
      function m(e) {
        return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
      }
      function f(e) {
        return e && e.sensitive ? "" : "i";
      }
      function h(e, t, r) {
        return (function (e, t, r = {}) {
          const {
              strict: n = !1,
              start: o = !0,
              end: i = !0,
              encode: a = (e) => e,
            } = r,
            s = `[${m(r.endsWith || "")}]|$`,
            l = `[${m(r.delimiter || "/#?")}]`;
          let c = o ? "^" : "";
          for (const r of e)
            if ("string" == typeof r) c += m(a(r));
            else {
              const e = m(a(r.prefix)),
                n = m(a(r.suffix));
              if (r.pattern)
                if ((t && t.push(r), e || n))
                  if ("+" === r.modifier || "*" === r.modifier) {
                    const t = "*" === r.modifier ? "?" : "";
                    c += `(?:${e}((?:${r.pattern})(?:${n}${e}(?:${r.pattern}))*)${n})${t}`;
                  } else c += `(?:${e}(${r.pattern})${n})${r.modifier}`;
                else c += `(${r.pattern})${r.modifier}`;
              else c += `(?:${e}${n})${r.modifier}`;
            }
          if (i) n || (c += `${l}?`), (c += r.endsWith ? `(?=${s})` : "$");
          else {
            const t = e[e.length - 1],
              r =
                "string" == typeof t
                  ? l.indexOf(t[t.length - 1]) > -1
                  : void 0 === t;
            n || (c += `(?:${l}(?=${s}))?`), r || (c += `(?=${l}|${s})`);
          }
          return new RegExp(c, f(r));
        })(
          (function (e, t = {}) {
            const r = (function (e) {
                const t = [];
                let r = 0;
                for (; r < e.length; ) {
                  const n = e[r];
                  if ("*" !== n && "+" !== n && "?" !== n)
                    if ("\\" !== n)
                      if ("{" !== n)
                        if ("}" !== n)
                          if (":" !== n)
                            if ("(" !== n)
                              t.push({ type: "CHAR", index: r, value: e[r++] });
                            else {
                              let n = 1,
                                o = "",
                                i = r + 1;
                              if ("?" === e[i])
                                throw new TypeError(
                                  `Pattern cannot start with "?" at ${i}`
                                );
                              for (; i < e.length; )
                                if ("\\" !== e[i]) {
                                  if (")" === e[i]) {
                                    if ((n--, 0 === n)) {
                                      i++;
                                      break;
                                    }
                                  } else if (
                                    "(" === e[i] &&
                                    (n++, "?" !== e[i + 1])
                                  )
                                    throw new TypeError(
                                      `Capturing groups are not allowed at ${i}`
                                    );
                                  o += e[i++];
                                } else o += e[i++] + e[i++];
                              if (n)
                                throw new TypeError(
                                  `Unbalanced pattern at ${r}`
                                );
                              if (!o)
                                throw new TypeError(`Missing pattern at ${r}`);
                              t.push({ type: "PATTERN", index: r, value: o }),
                                (r = i);
                            }
                          else {
                            let n = "",
                              o = r + 1;
                            for (; o < e.length; ) {
                              const t = e.charCodeAt(o);
                              if (
                                !(
                                  (t >= 48 && t <= 57) ||
                                  (t >= 65 && t <= 90) ||
                                  (t >= 97 && t <= 122) ||
                                  95 === t
                                )
                              )
                                break;
                              n += e[o++];
                            }
                            if (!n)
                              throw new TypeError(
                                `Missing parameter name at ${r}`
                              );
                            t.push({ type: "NAME", index: r, value: n }),
                              (r = o);
                          }
                        else t.push({ type: "CLOSE", index: r, value: e[r++] });
                      else t.push({ type: "OPEN", index: r, value: e[r++] });
                    else
                      t.push({
                        type: "ESCAPED_CHAR",
                        index: r++,
                        value: e[r++],
                      });
                  else t.push({ type: "MODIFIER", index: r, value: e[r++] });
                }
                return t.push({ type: "END", index: r, value: "" }), t;
              })(e),
              { prefixes: n = "./" } = t,
              o = `[^${m(t.delimiter || "/#?")}]+?`,
              i = [];
            let a = 0,
              s = 0,
              l = "";
            const c = (e) => {
                if (s < r.length && r[s].type === e) return r[s++].value;
              },
              u = (e) => {
                const t = c(e);
                if (void 0 !== t) return t;
                const { type: n, index: o } = r[s];
                throw new TypeError(`Unexpected ${n} at ${o}, expected ${e}`);
              },
              d = () => {
                let e,
                  t = "";
                for (; (e = c("CHAR") || c("ESCAPED_CHAR")); ) t += e;
                return t;
              };
            for (; s < r.length; ) {
              const e = c("CHAR"),
                t = c("NAME"),
                r = c("PATTERN");
              if (t || r) {
                let s = e || "";
                -1 === n.indexOf(s) && ((l += s), (s = "")),
                  l && (i.push(l), (l = "")),
                  i.push({
                    name: t || a++,
                    prefix: s,
                    suffix: "",
                    pattern: r || o,
                    modifier: c("MODIFIER") || "",
                  });
                continue;
              }
              const s = e || c("ESCAPED_CHAR");
              if (s) l += s;
              else if ((l && (i.push(l), (l = "")), c("OPEN"))) {
                const e = d(),
                  t = c("NAME") || "",
                  r = c("PATTERN") || "",
                  n = d();
                u("CLOSE"),
                  i.push({
                    name: t || (r ? a++ : ""),
                    pattern: t && !r ? o : r,
                    prefix: e,
                    suffix: n,
                    modifier: c("MODIFIER") || "",
                  });
              } else u("END");
            }
            return i;
          })(e, r),
          t,
          r
        );
      }
      function g(e, t, r) {
        return e instanceof RegExp
          ? (function (e, t) {
              if (!t) return e;
              const r = e.source.match(/\((?!\?)/g);
              if (r)
                for (let e = 0; e < r.length; e++)
                  t.push({
                    name: e,
                    prefix: "",
                    suffix: "",
                    modifier: "",
                    pattern: "",
                  });
              return e;
            })(e, t)
          : Array.isArray(e)
          ? (function (e, t, r) {
              const n = e.map((e) => g(e, t, r).source);
              return new RegExp(`(?:${n.join("|")})`, f(r));
            })(e, t, r)
          : h(e, t, r);
      }
      const v = ({ canActivate: e, children: t }) => {
        const { navigateToFlowStart: r } = (0, u.zk)(),
          n = (0, c.useCoreClerk)();
        return (
          i.useEffect(() => {
            e(n) || r();
          }),
          e(n) ? (0, o.tZ)(o.HY, { children: t }) : null
        );
      };
      function b(e) {
        const t = (0, n.t)();
        if (!e.children) return null;
        if (!e.index && !e.path)
          return (0, o.tZ)(o.HY, { children: e.children });
        if (!t.matches(e.path, e.index)) return null;
        const [r, i] = d(t.indexPath, t.fullPath, e.path, e.index),
          s = (e) => {
            const t = new URL(e, window.location.origin + i + "/");
            return (t.pathname = (0, a.Os)(t.pathname)), t;
          },
          l = (e, n) => {
            const [o, s] = d(r, i, e, n),
              l = (0, a.Os)(t.currentPath),
              c =
                (e && p(s + "/:foo*")(l)) ||
                (n && p(o)(l)) ||
                (n && p(s)(l)) ||
                !1;
            return !1 !== c && c.params;
          },
          c = t.getMatchData(e.path, e.index) || {},
          u = {};
        for (const [e, t] of Object.entries(c)) u[e] = t;
        const m =
          (e.flowStart
            ? (0, a.hb)(t.fullPath).replace("/" + t.basePath, "")
            : t.flowStartPath) || t.startPath;
        return (0, o.tZ)(n.X.Provider, {
          value: {
            basePath: t.basePath,
            startPath: t.startPath,
            flowStartPath: m,
            indexPath: r,
            fullPath: i,
            currentPath: t.currentPath,
            queryParams: t.queryParams,
            queryString: t.queryString,
            baseNavigate: t.baseNavigate,
            getMatchData: l,
            matches: (e, t) => !!l(e, t),
            resolve: s,
            navigate: (e) => {
              const r = s(e);
              return t.baseNavigate(r);
            },
            refresh: t.refresh,
            params: u,
            urlStateParam: t.urlStateParam,
          },
          children: e.canActivate
            ? (0, o.tZ)(v, { canActivate: e.canActivate, children: e.children })
            : e.children,
        });
      }
      const y = ({
          basePath: e,
          startPath: t,
          getPath: r,
          getQueryString: s,
          internalNavigate: m,
          onExternalNavigate: f,
          refreshEvents: h,
          preservedParams: g,
          urlStateParam: v,
          children: y,
        }) => {
          const { navigate: x } = (0, c.useCoreClerk)(),
            [w, S] = i.useState({ path: r(), queryString: s() }),
            _ = w.path,
            C = w.queryString,
            $ = (0, a.vl)(w.queryString),
            k = (e, t) => {
              const [r, n] = d("", "", e, t),
                o = (0, a.Os)(_),
                i =
                  (e && p(n + "/:foo*")(o)) ||
                  (t && p(r)(o)) ||
                  (t && p(n)(o)) ||
                  !1;
              return !1 !== i && i.params;
            },
            P = i.useCallback(() => {
              const e = r(),
                t = s();
              (e === _ && t === C) || S({ path: e, queryString: t });
            }, [_, C, r, s]);
          return (
            (0, u.Fm)(h, P),
            (0, o.tZ)(n.X.Provider, {
              value: {
                basePath: e,
                startPath: t,
                flowStartPath: t,
                fullPath: "",
                indexPath: "",
                currentPath: _,
                queryString: C,
                queryParams: $,
                getMatchData: k.bind(void 0),
                matches: ((e, t) => !!k(e, t)).bind(void 0),
                baseNavigate: (async (t) => {
                  if (!t) return;
                  if (
                    t.origin !== window.location.origin ||
                    !t.pathname.startsWith("/" + e)
                  ) {
                    f && f();
                    const e = await x(t.href);
                    return P(), e;
                  }
                  if (g) {
                    const e = (0, a.vl)(t.search);
                    g.forEach((t) => {
                      !e[t] && $[t] && (e[t] = $[t]);
                    }),
                      (t.search = l().stringify(e));
                  }
                  const r = await m(t);
                  return S({ path: t.pathname, queryString: t.search }), r;
                }).bind(void 0),
                navigate: async () => {},
                resolve: ((e) => new URL(e, window.location.origin)).bind(
                  void 0
                ),
                refresh: P.bind(void 0),
                params: {},
                urlStateParam: v,
              },
              children: (0, o.tZ)(b, { path: e, children: y }),
            })
          );
        },
        x = "CLERK-ROUTER/HASH",
        w = ({ preservedParams: e, children: t }) => {
          const r = () =>
            (0, a.eT)(window.location.hash)
              ? new URL(
                  window.location.origin + window.location.hash.substring(1)
                )
              : new URL(window.location.origin);
          return (0, o.tZ)(y, {
            getPath: () =>
              "/" === r().pathname ? "/" + x : "/" + x + r().pathname,
            basePath: x,
            startPath: "",
            getQueryString: () => r().search,
            internalNavigate: async (e) => {
              if (e)
                return (
                  (window.location.hash = (0, a.M)(e).substring(1 + x.length)),
                  Promise.resolve()
                );
            },
            refreshEvents: ["popstate", "hashchange"],
            preservedParams: e,
            children: t,
          });
        },
        S = ({ basePath: e, preservedParams: t, children: r }) => {
          const { navigate: n } = (0, c.useCoreClerk)(),
            [s, l] = i.useState(!1);
          if (!n) throw new Error("Clerk: Missing navigate option.");
          const u = (e) => {
            if (e) return n((0, a.M)(e));
          };
          return (
            i.useEffect(() => {
              (async () => {
                if ((0, a.eT)(window.location.hash)) {
                  const e = (0, a.z9)(new URL(window.location.href));
                  await u(e.href), l(!0);
                }
              })();
            }, [l, n, window.location.hash]),
            (0, a.eT)(window.location.hash) && !s
              ? null
              : (0, o.tZ)(y, {
                  basePath: e.substring(1),
                  startPath: "",
                  getPath: () => window.location.pathname,
                  getQueryString: () => window.location.search,
                  internalNavigate: u,
                  refreshEvents: ["popstate"],
                  preservedParams: t,
                  children: r,
                })
          );
        },
        _ = "CLERK-ROUTER/VIRTUAL",
        C = ({
          startPath: e,
          preservedParams: t,
          onExternalNavigate: r,
          children: n,
        }) => {
          const [a, s] = i.useState(
              new URL("/" + _ + e, window.location.origin)
            ),
            { urlStateParam: l, removeQueryParam: c } = (0, u._6)();
          return (
            l.componentName && c(),
            (0, o.tZ)(y, {
              getPath: () => a.pathname,
              basePath: _,
              startPath: e,
              getQueryString: () => a.search,
              internalNavigate: (e) => {
                e && s(e);
              },
              onExternalNavigate: r,
              preservedParams: t,
              urlStateParam: l,
              children: n,
            })
          );
        };
      function $({ children: e }) {
        const t = (0, n.t)();
        let r = null;
        return (
          i.Children.forEach(e, (e) => {
            if (
              r ||
              !(n = e) ||
              !i.isValidElement(n) ||
              "object" != typeof n ||
              n.type !== b
            )
              return;
            var n;
            const { index: o, path: a } = e.props;
            ((!o && !a) || t.matches(a, o)) && (r = e);
          }),
          (0, o.tZ)(o.HY, { children: r })
        );
      }
    },
    9820: function (e, t, r) {
      r.r(t),
        r.d(t, {
          InternalThemeProvider: function () {
            return c;
          },
          animations: function () {
            return z;
          },
          common: function () {
            return _;
          },
          createCssVariables: function () {
            return x;
          },
          createVariants: function () {
            return d;
          },
          mqu: function () {
            return O;
          },
        });
      var n = r(2903),
        o = r(9721),
        i = r(5993),
        a = (r(2784), r(3476));
      const s = document.querySelector("style#cl-style-insertion-point"),
        l = (0, o.Z)({
          key: "cl-internal",
          prepend: !s,
          insertionPoint: s || void 0,
        }),
        c = (e) => {
          const { parsedInternalTheme: t } = (0, a.useAppearance)();
          return (0, n.tZ)(i.C, {
            value: l,
            children: (0, n.tZ)(i.a, { theme: t, children: e.children }),
          });
        };
      var u = r(1609);
      const d = (e) => {
          const t = (0, u.dC)(),
            r = Object.keys(e(t, t).variants || {});
          return {
            applyVariants:
              (t = {}) =>
              (r) => {
                const {
                    base: n,
                    variants: o = {},
                    compoundVariants: i = [],
                    defaultVariants: a = {},
                  } = e(r, t),
                  s = v(o, t, a),
                  l = {};
                return m(l, n), f(l, s, o), h(l, s, i), g(l), l;
              },
            filterProps: (e) => p(e, r),
          };
        },
        p = (e, t) => {
          const r = { ...e };
          for (const e of t) delete r[e];
          return r;
        },
        m = (e, t) => {
          t && "object" == typeof t && Object.assign(e, t);
        },
        f = (e, t, r) => {
          for (const n in t) (0, u.EB)(r[n][t[n]], e);
        },
        h = (e, t, r) => {
          for (const n of r) b(n, t) && (0, u.EB)(n.styles, e);
        },
        g = (e) => {
          for (const t in e)
            t.startsWith("var(") && ((e[t.slice(4, -1)] = e[t]), delete e[t]);
        },
        v = (e, t, r) => {
          const n = {};
          for (const o in e) o in t ? (n[o] = t[o]) : o in r && (n[o] = r[o]);
          return n;
        },
        b = ({ condition: e }, t) => {
          for (const r in e) if (e[r] !== t[r]) return !1;
          return !0;
        };
      var y = r(448);
      const x = (...e) => (0, y.s)(e.map((e) => [e, `var(--${e})`])),
        w = (e, t) => ({
          borderColor: (null == t ? void 0 : t.hasError)
            ? e.colors.$danger500
            : e.colors.$blackAlpha300,
        }),
        S = (e) => ({
          "::-webkit-scrollbar": {
            background: "transparent",
            width: "8px",
            height: "8px",
          },
          "::-webkit-scrollbar-thumb": { background: e.colors.$blackAlpha500 },
          "::-webkit-scrollbar-track": { background: "transparent" },
        }),
        _ = {
          textVariants: (e) => {
            const t = {
                WebkitFontSmoothing: e.options.$fontSmoothing,
                fontFamily: "inherit",
              },
              r = {
                ...t,
                fontWeight: e.fontWeights.$normal,
                fontSize: e.fontSizes.$xs,
                lineHeight: e.lineHeights.$shorter,
              },
              n = {
                ...r,
                fontWeight: e.fontWeights.$medium,
                lineHeight: e.lineHeights.$short,
              },
              o = { ...n, fontWeight: e.fontWeights.$bold },
              i = {
                ...t,
                fontWeight: e.fontWeights.$normal,
                fontSize: e.fontSizes.$2xs,
                letterSpacing: e.letterSpacings.$normal,
                lineHeight: e.lineHeights.$none,
              },
              a = {
                ...t,
                fontWeight: e.fontWeights.$medium,
                fontSize: e.fontSizes.$2xs,
                letterSpacing: e.letterSpacings.$normal,
                lineHeight: e.lineHeights.$shortest,
              },
              s = {
                ...t,
                fontWeight: e.fontWeights.$normal,
                fontSize: e.fontSizes.$sm,
                lineHeight: e.lineHeights.$shorter,
              },
              l = { ...s, fontWeight: e.fontWeights.$medium },
              c = {
                ...t,
                fontWeight: e.fontWeights.$bold,
                fontSize: e.fontSizes.$md,
                lineHeight: e.lineHeights.$taller,
              },
              u = { ...c, fontWeight: e.fontWeights.$medium },
              d = { ...c, fontSize: e.fontSizes.$xl },
              p = { ...d, fontSize: e.fontSizes.$2xl },
              m = {
                ...i,
                fontWeight: e.fontWeights.$bold,
                textTransform: "uppercase",
                fontFamily: e.fonts.$buttons,
              },
              f = { ...r, fontFamily: e.fonts.$buttons },
              h = {
                ...s,
                fontFamily: e.fonts.$buttons,
                lineHeight: e.lineHeights.$none,
              },
              g = {
                ...l,
                fontFamily: e.fonts.$buttons,
                lineHeight: e.lineHeights.$none,
              };
            return {
              headingRegularRegular: { ...s, fontSize: e.fontSizes.$md },
              buttonExtraSmallBold: m,
              buttonSmallRegular: f,
              buttonRegularRegular: h,
              buttonRegularMedium: g,
              extraSmallRegular: i,
              extraSmallMedium: a,
              smallRegular: r,
              smallMedium: n,
              smallBold: o,
              regularRegular: s,
              regularMedium: l,
              largeMedium: u,
              largeBold: c,
              xlargeMedium: d,
              xxlargeMedium: p,
            };
          },
          fontSizeVariants: (e) => ({
            xss: { fontSize: e.fontSizes.$2xs },
            xs: { fontSize: e.fontSizes.$xs },
            sm: { fontSize: e.fontSizes.$sm },
          }),
          borderVariants: (e, t) => ({
            normal: {
              borderRadius: e.radii.$md,
              border: e.borders.$normal,
              ...w(e, t),
            },
          }),
          focusRing: (e) => ({
            "&:focus": {
              "&::-moz-focus-inner": { border: "0" },
              WebkitTapHighlightColor: "transparent",
              boxShadow: e.shadows.$focusRing.replace(
                "{{color}}",
                e.colors.$primary200
              ),
              transitionProperty: e.transitionProperty.$common,
              transitionTimingFunction: e.transitionTiming.$common,
              transitionDuration: e.transitionDuration.$focusRing,
            },
          }),
          focusRingInput: (e, t) => ({
            "&:focus": {
              WebkitTapHighlightColor: "transparent",
              boxShadow: e.shadows.$focusRingInput.replace(
                "{{color}}",
                (null == t ? void 0 : t.hasError)
                  ? e.colors.$danger200
                  : e.colors.$primary200
              ),
              transitionProperty: e.transitionProperty.$common,
              transitionTimingFunction: e.transitionTiming.$common,
              transitionDuration: e.transitionDuration.$focusRing,
            },
          }),
          disabled: (e) => ({
            "&:disabled,&[data-disabled]": {
              cursor: "not-allowed",
              pointerEvents: "none",
              opacity: e.opacity.$disabled,
            },
          }),
          borderColor: w,
          centeredFlex: (e = "flex") => ({
            display: e,
            justifyContent: "center",
            alignItems: "center",
          }),
          maxHeightScroller: (e) => ({
            height: "100%",
            overflowY: "auto",
            ...S(e),
          }),
          unstyledScrollbar: S,
        };
      var C = r(8165);
      const $ = C.F4`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }`,
        k = C.F4`
  0% {
    opacity: 0;
    transform: scaleY(1) translateY(-6px);
  }

  100% {
    opacity: 1;
    transform: scaleY(1)  translateY(0px);
  }
`,
        P = C.F4`
  0% {
    opacity: 0;
    transform: translateY(0.5rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`,
        I = C.F4`
  0% { opacity: 0; }
  100% { opacity: 1; }
`,
        B = C.F4`
  0% {
    opacity: 0;
    transform: translateY(-5px);
    max-height: 0;
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
    max-height: 6rem;
  }
`,
        R = C.F4`
  0% {
    opacity: 0;
    transform: translateY(-5px);
    max-height: 0;
  }
  50% {
    opacity: 0;
    transform: translateY(-5px);
    max-height: 0;
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
    max-height: 6rem;
  }
`,
        T = C.F4`
  0% {
    opacity: 0;
    transform: translateY(5px) scale(.5);
  }

  50% {
    opacity: 1;
    transform: translateY(0px) scale(1.2);
  }

  100% {
    opacity: 1;
    transform: translateY(0px) scale(1);
  }
`,
        A = C.F4`
  0% {
    opacity:1;
    translateY(0px);
    max-height: 6rem;
    visibility: visible;
  }  
  100% {
    opacity: 0;
    transform: translateY(5px);
    max-height: 0;
    visibility: visible;
  }
`,
        z = {
          spinning: $,
          dropdownSlideInScaleAndFade: k,
          modalSlideAndFade: P,
          fadeIn: I,
          textInSmall: C.F4`
  0% {opacity: 0;max-height: 0;}
  100% {opacity: 1;max-height: 3rem;}
`,
          textInBig: C.F4`
  0% {opacity: 0;max-height: 0;}
  100% {opacity: 1;max-height: 8rem;}
`,
          blockBigIn: C.F4`
  0% {opacity: 0;max-height: 0;}
  99% {opacity: 1;max-height: 10rem;}
  100% {opacity: 1;max-height: unset;}
`,
          expandIn: (e) => C.F4`
  0% {opacity: 0;max-height: 0;}
  99% {opacity: 1;max-height: ${e};}
  100% {opacity: 1;max-height: unset;}
`,
          navbarSlideIn: C.F4`
  0% {opacity: 0; transform: translateX(-100%);}
  100% {opacity: 1; transform: translateX(0);}
`,
          inAnimation: B,
          inDelayAnimation: R,
          outAnimation: A,
          notificationAnimation: T,
        },
        D = Object.freeze({
          xs: "21em",
          sm: "30em",
          md: "48em",
          lg: "62em",
          xl: "80em",
          "2xl": "96em",
        }),
        O = {
          ios: "@supports (-webkit-touch-callout: none)",
          ...(0, y.s)(
            Object.entries(D).map(([e, t]) => [e, `@media (max-width: ${t})`])
          ),
        };
    },
    7178: function (e, t, r) {
      r.d(t, {
        O: function () {
          return x;
        },
      });
      const n = /^#([a-f0-9]{3,4})$/i,
        o = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i,
        i =
          /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,
        a =
          /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,
        s =
          /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,
        l =
          /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,
        c = {
          black: [0, 0, 0, 1],
          blue: [0, 0, 255, 1],
          red: [255, 0, 0, 1],
          green: [0, 128, 0, 1],
          grey: [128, 128, 128, 1],
          gray: [128, 128, 128, 1],
          white: [255, 255, 255, 1],
          yellow: [255, 255, 0, 1],
          transparent: [0, 0, 0, 0],
        },
        u = (e, t, r) => Math.min(Math.max(t, e), r),
        d = (e) => {
          if (!e) return null;
          const t = [0, 0, 0, 1];
          let r, s, l;
          if ((r = e.match(o))) {
            for (l = r[2], r = r[1], s = 0; s < 3; s++) {
              const e = 2 * s;
              t[s] = parseInt(r.slice(e, e + 2), 16);
            }
            l && (t[3] = parseInt(l, 16) / 255);
          } else if ((r = e.match(n))) {
            for (r = r[1], l = r[3], s = 0; s < 3; s++)
              t[s] = parseInt(r[s] + r[s], 16);
            l && (t[3] = parseInt(l + l, 16) / 255);
          } else if ((r = e.match(i))) {
            for (s = 0; s < 3; s++) t[s] = parseInt(r[s + 1], 0);
            r[4] &&
              (r[5]
                ? (t[3] = 0.01 * parseFloat(r[4]))
                : (t[3] = parseFloat(r[4])));
          } else {
            if (!(r = e.match(a))) return e in c ? c[e] : null;
            for (s = 0; s < 3; s++)
              t[s] = Math.round(2.55 * parseFloat(r[s + 1]));
            r[4] &&
              (r[5]
                ? (t[3] = 0.01 * parseFloat(r[4]))
                : (t[3] = parseFloat(r[4])));
          }
          for (s = 0; s < 3; s++) t[s] = u(t[s], 0, 255);
          return (t[3] = u(t[3], 0, 1)), t;
        },
        p = (e) => {
          if (!e) return null;
          const t = e.match(s);
          return t ? f(t) : null;
        },
        m = function (e) {
          if (!e) return null;
          const t = e.match(l);
          return t ? f(t) : null;
        },
        f = (e) => {
          const t = parseFloat(e[4]);
          return [
            ((parseFloat(e[1]) % 360) + 360) % 360,
            u(parseFloat(e[2]), 0, 100),
            u(parseFloat(e[3]), 0, 100),
            u(isNaN(t) ? 1 : t, 0, 1),
          ];
        },
        h = (e) => {
          var t;
          const r = e[0] / 255,
            n = e[1] / 255,
            o = e[2] / 255,
            i = null !== (t = e[3]) && void 0 !== t ? t : 1,
            a = Math.min(r, n, o),
            s = Math.max(r, n, o),
            l = s - a;
          let c, u;
          s === a
            ? (c = 0)
            : r === s
            ? (c = (n - o) / l)
            : n === s
            ? (c = 2 + (o - r) / l)
            : o === s && (c = 4 + (r - n) / l),
            (c = Math.min(60 * c, 360)),
            c < 0 && (c += 360);
          const d = (a + s) / 2;
          return (
            (u = s === a ? 0 : d <= 0.5 ? l / (s + a) : l / (2 - s - a)),
            {
              h: Math.floor(c),
              s: Math.floor(100 * u),
              l: Math.floor(100 * d),
              a: i,
            }
          );
        },
        g = (e) => {
          const { model: t, value: r } = ((e) => {
            const t = e.substr(0, 3).toLowerCase();
            let r;
            if (
              ((r =
                "hsl" === t
                  ? { model: "hsl", value: p(e) }
                  : "hwb" === t
                  ? { model: "hwb", value: m(e) }
                  : { model: "rgb", value: d(e) }),
              !r || !r.value)
            )
              throw new Error(
                `Clerk: "${e}" cannot be used as a color within 'variables'. You can pass one of:\n- any valid hsl or hsla color\n- any valid rgb or rgba color\n- any valid hex color\n- any valid hwb color\n- ${Object.keys(
                  c
                ).join(", ")}\n`
              );
            return r;
          })(e);
          switch (t) {
            case "hsl":
              return {
                h: (n = r)[0],
                s: n[1],
                l: n[2],
                a: null !== (o = n[3]) && void 0 !== o ? o : 1,
              };
            case "hwb":
              return h(
                ((e) => {
                  var t;
                  const r = e[0] / 360;
                  let n = e[1] / 100,
                    o = e[2] / 100;
                  const i = null !== (t = e[3]) && void 0 !== t ? t : 1,
                    a = n + o;
                  let s;
                  a > 1 && ((n /= a), (o /= a));
                  const l = Math.floor(6 * r),
                    c = 1 - o;
                  (s = 6 * r - l), 0 != (1 & l) && (s = 1 - s);
                  const u = n + s * (c - n);
                  let d, p, m;
                  switch (l) {
                    default:
                    case 6:
                    case 0:
                      (d = c), (p = u), (m = n);
                      break;
                    case 1:
                      (d = u), (p = c), (m = n);
                      break;
                    case 2:
                      (d = n), (p = c), (m = u);
                      break;
                    case 3:
                      (d = n), (p = u), (m = c);
                      break;
                    case 4:
                      (d = u), (p = n), (m = c);
                      break;
                    case 5:
                      (d = c), (p = n), (m = u);
                  }
                  return [255 * d, 255 * p, 255 * m, i];
                })(r)
              );
            case "rgb":
              return h(r);
          }
          var n, o;
        },
        v = (e) =>
          (({ h: e, s: t, l: r, a: n }) =>
            `hsla(${e}, ${t}%, ${r}%, ${null != n ? n : 1})`)(
            "string" == typeof e ? g(e) : e
          ),
        b = (e, t) => ({ ...e, l: e.l + t }),
        y = (e, t) => ({ ...e, a: t }),
        x = {
          toHslaColor: g,
          toHslaString: v,
          changeHslaLightness: b,
          setHslaAlpha: y,
          lighten: (e, t = 0) => {
            if (!e) return;
            const r = g(e);
            return v(b(r, r.l * t));
          },
          makeTransparent: (e, t = 0) => {
            var r;
            if (!e || "" === e.toString()) return;
            const n = g(e);
            return v(
              ((e, t) => ({ ...e, a: e.a ? e.a - t : void 0 }))(
                n,
                (null !== (r = n.a) && void 0 !== r ? r : 1) * t
              )
            );
          },
          makeSolid: (e) => {
            if (e) return v({ ...g(e), a: 1 });
          },
          setAlpha: (e, t) => (e.toString() ? v(y(g(e), t)) : e),
        };
    },
    448: function (e, t, r) {
      r.d(t, {
        s: function () {
          return n;
        },
      });
      const n = (e) => [...e].reduce((e, [t, r]) => ((e[t] = r), e), {});
    },
    1609: function (e, t, r) {
      r.d(t, {
        qT: function () {
          return pe;
        },
        $M: function () {
          return ae;
        },
        U6: function () {
          return g;
        },
        Q0: function () {
          return h;
        },
        ni: function () {
          return F;
        },
        k_: function () {
          return s;
        },
        O9: function () {
          return l.O;
        },
        Nr: function () {
          return o;
        },
        dC: function () {
          return i;
        },
        z$: function () {
          return se;
        },
        sn: function () {
          return fe;
        },
        GM: function () {
          return ie;
        },
        qi: function () {
          return oe;
        },
        BG: function () {
          return me;
        },
        Oi: function () {
          return te;
        },
        yy: function () {
          return $;
        },
        EB: function () {
          return a;
        },
        un: function () {
          return C;
        },
        HT: function () {
          return A;
        },
        sq: function () {
          return n.s;
        },
        zQ: function () {
          return W;
        },
        uz: function () {
          return _;
        },
        Qg: function () {
          return re;
        },
        WR: function () {
          return G;
        },
        S3: function () {
          return H;
        },
        Sj: function () {
          return T;
        },
        s2: function () {
          return y;
        },
        lq: function () {
          return ne;
        },
        y3: function () {
          return I;
        },
        w6: function () {
          return Y;
        },
        Ai: function () {
          return D;
        },
        Yb: function () {
          return z;
        },
        JD: function () {
          return ee;
        },
        _v: function () {
          return v;
        },
        L_: function () {
          return B;
        },
        Yp: function () {
          return L;
        },
        V2: function () {
          return M;
        },
      });
      var n = r(448);
      const o = () => (e) => e,
        i = () => {
          const e = new Proxy(
            {},
            {
              get: (t, r) =>
                r === Symbol.toPrimitive
                  ? () => ""
                  : r in Object.getPrototypeOf("")
                  ? (e) => Object.getPrototypeOf("")[r].call("", e)
                  : r === Symbol.toPrimitive
                  ? () => ""
                  : e,
            }
          );
          return e;
        },
        a = (e, t) => {
          if (e && t)
            for (const r in e)
              null !== e[r] && "object" == typeof e[r]
                ? (void 0 === t[r] &&
                    (t[r] = new (Object.getPrototypeOf(e[r]).constructor)()),
                  a(e[r], t[r]))
                : (t[r] = e[r]);
        };
      function s(e) {
        return (
          "ListFormat" in Intl &&
          (function (e) {
            if (!e) return !1;
            const t = Array.isArray(e) ? e : [e];
            return Intl.ListFormat.supportedLocalesOf(t).length === t.length;
          })(e)
        );
      }
      var l = r(7178);
      const c = (e) => e.reduce((e, t, r) => ((e[t] = r), e), {}),
        u = c(["password", "email_link", "email_code", "phone_code"]),
        d = c(["email_link", "email_code", "phone_code", "password"]),
        p = c(["email_link", "email_code", "phone_code", "password"]),
        m = c(["totp", "phone_code", "backup_code"]),
        f = (e) => (t, r) => {
          const n = e[t.strategy],
            o = e[r.strategy];
          return void 0 === n || void 0 === o ? 0 : n - o;
        },
        h = (f(u), f(d), f(m)),
        g = f(p),
        v = (e) => new Promise((t) => setTimeout(t, e)),
        b = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i,
        y = () =>
          "undefined" != typeof window &&
          void 0 !== window.document &&
          !!(
            window.matchMedia("only screen and (max-width: 760px)").matches ||
            b.test(navigator.userAgent) ||
            ("ontouchstart" in document.documentElement &&
              navigator.userAgent.match(/Mobi/))
          );
      var x = r(4036);
      const w = 127397,
        S = {};
      function _(e, t = "us") {
        if (S[(e = e || t)]) return S[e];
        const r = [...e.toUpperCase()].map((e) => e.codePointAt(0) + w),
          n = String.fromCodePoint(...r);
        return (S[e] = n), n;
      }
      function C(e, t, r) {
        if (!e || !t) return e;
        const n = [...$(e)].slice(
          0,
          (function (e) {
            const t = (e = e || "1").includes("+") ? e : "+" + e;
            return P - t.length;
          })(r)
        );
        if (n.length <= 3) return n.join("");
        let o = "";
        for (let e = 0; n.length > 0; e++)
          e > t.length - 1
            ? (o += n.shift())
            : (o += "." === t[e] ? n.shift() : t[e]);
        return o;
      }
      function $(e) {
        return (e || "").replace(/[^\d]/g, "");
      }
      function k(e, t) {
        var r, n;
        if (!e || !x.h5.get(e) || !t) return !1;
        const o = t[0],
          i = t.substring(1, 4);
        return (
          o ===
            (null === (r = x.h5.get(e)) || void 0 === r ? void 0 : r.code) &&
          t.length - 1 ===
            (
              (
                (null === (n = x.h5.get(e)) || void 0 === n
                  ? void 0
                  : n.pattern) || ""
              ).match(/\./g) || []
            ).length &&
          x.ug[e].has(i)
        );
      }
      const P = 15;
      function I(e) {
        var t, r;
        const n = $(e),
          o = (function (e, t = "us") {
            const r = $(e);
            return !r || r.length < 4
              ? t
              : r.startsWith("1") && k("us", r)
              ? "us"
              : r.startsWith("1") && k("ca", r)
              ? "ca"
              : (function (e) {
                  const t = $(e),
                    r = [];
                  for (const e of [4, 3, 2, 1]) {
                    const n = t.substring(0, e),
                      o = x.nX.get(n) || [];
                    o.length && r.push(...o);
                  }
                  const n = x.h5.get("us"),
                    o = r.sort(R)[0] || n;
                  return {
                    number: t.slice((null == o ? void 0 : o.code.length) || 0),
                    country: o,
                  };
                })(r).country.iso;
          })(n),
          i =
            (null === (t = x.h5.get(o)) || void 0 === t ? void 0 : t.pattern) ||
            "",
          a =
            (null === (r = x.h5.get(o)) || void 0 === r ? void 0 : r.code) ||
            "",
          s = n.slice(a.length);
        return {
          iso: o,
          pattern: i,
          code: a,
          number: s,
          formattedNumberWithCode: `+${a} ${C(s, i, a)}`,
        };
      }
      function B(e) {
        const t = I(e);
        return `+${t.code} ${C(t.number, t.pattern, t.code)}`;
      }
      const R = (e, t) => t.priority - e.priority,
        T = (e) => e && e.includes("**"),
        A = (e) =>
          !e || e.includes("@") || T(e) || e.match(/[a-zA-Z]/) ? e : B(e),
        z = (e) => (
          Object.keys(e).forEach((t) => void 0 === e[t] && delete e[t]), e
        ),
        D = (e, t) => {
          const r = (t || "").split(".");
          let n = e;
          for (let e = 0; e < r.length; e++)
            if (((n = n[r[e]]), void 0 === n)) return;
          return n;
        };
      var O = r(2784),
        E = r(8441),
        Z = r(4334);
      const L = (e, t, r) => {
          r = r || {
            type: "text",
            label: "",
            isRequired: !1,
            placeholder: "",
            options: [],
            defaultChecked: !1,
          };
          const { translateError: n, t: o } = (0, Z.zJ)(),
            [i, a] = (0, O.useState)(t),
            [s, l] = (0, O.useState)(
              (null == r ? void 0 : r.defaultChecked) || !1
            ),
            [c, u] = (0, O.useState)(!1),
            [d, p] = (0, O.useState)({ message: "", type: "info" }),
            m = (e) => {
              e ? p({ message: n(e), type: "error" }) : f();
            },
            f = () => {
              p({ message: "", type: "info" });
            },
            {
              defaultChecked: h,
              validatePassword: g,
              buildErrorMessage: v,
              ...b
            } = r,
            y = {
              id: e,
              name: e,
              value: i,
              checked: s,
              setSuccess: (e) => {
                e && p({ message: e, type: "success" });
              },
              setError: m,
              onChange: (e) =>
                "checkbox" === (null == r ? void 0 : r.type)
                  ? l(e.target.checked)
                  : a(e.target.value || ""),
              setWarning: (e) => {
                e && p({ message: n(e), type: "warning" });
              },
              feedback: d.message || o(r.infoText),
              feedbackType: d.type,
              setInfo: (e) => {
                e && p({ message: e, type: "info" });
              },
              clearFeedback: f,
              hasPassedComplexity: c,
              setHasPassedComplexity: u,
              validatePassword:
                "password" === r.type ? r.validatePassword : void 0,
              ...b,
            };
          return {
            props: y,
            ...y,
            buildErrorMessage: v,
            setError: m,
            setValue: (e) => a(e || ""),
            setChecked: (e) => l(e),
          };
        },
        F = (e) => {
          const t = {};
          return (
            e.forEach((e) => {
              t[e.id] = e.value;
            }),
            t
          );
        },
        M = (e) => {
          const {
              feedback: t = "",
              delayInMs: r = 100,
              feedbackType: n = "info",
              isFocused: o = !1,
            } = e || {},
            i = !o && ["info", "warning"].includes(n);
          return {
            debounced: (0, E.Nr)(
              { feedback: i ? "" : t, feedbackType: i ? "info" : n },
              r
            ),
          };
        };
      var j = r(4096),
        U = r(187);
      const N = (e) => e[0];
      function V(e) {
        return (e || []).reduce(
          (e, t) => (
            t.meta.paramName ? e.fieldErrors.push(t) : e.globalErrors.push(t), e
          ),
          { fieldErrors: Array(0), globalErrors: Array(0) }
        );
      }
      const H = (e, t, r) => {
        if (!(0, U.sZ)(e)) throw e;
        return (0, U.ZC)(e)
          ? X(e, t, r)
          : (0, U.kD)(e)
          ? q(e, t, r)
          : (0, U.uX)(e)
          ? K(e, t, r)
          : void 0;
      };
      function W(e) {
        if (!(0, U.kD)(e)) return;
        const { fieldErrors: t } = V(e.errors);
        return t.length ? t[0] : void 0;
      }
      const X = (e, t, r) => (null == r ? void 0 : r(e.message)),
        q = (e, t, r) => {
          if (!(0, U.kD)(e)) return;
          const { fieldErrors: n, globalErrors: o } = V(e.errors);
          if (
            ((function (e, t) {
              !t ||
                t.length < 1 ||
                e.forEach((e) => {
                  let r = null == e ? void 0 : e.buildErrorMessage;
                  r || (r = N);
                  const n = t.filter(
                    (t) =>
                      t.meta.paramName === e.id ||
                      (0, j.TD)(t.meta.paramName) === e.id
                  );
                  e.setError(n.length ? r(n) : void 0);
                });
            })(t, n),
            r)
          ) {
            r(void 0);
            const e = o[0];
            e && r(e);
          }
        },
        K = (e, t, r) => {
          (0, U.uX)(e) && r && (r(void 0), e && r(e));
        },
        Y = (e, t) => Array.from({ length: t - e + 1 }, (t, r) => e + r);
      function G(e) {
        return O.Children.toArray(e).filter((e) => O.isValidElement(e));
      }
      var J = r(8515);
      const Q = {
          basic_member: (0, J.u)("membershipRole__basicMember"),
          guest_member: (0, J.u)("membershipRole__guestMember"),
          admin: (0, J.u)("membershipRole__admin"),
        },
        ee = (e) => {
          if (e) return Q[e];
        },
        te = (e) => {
          if (e) return (0, J.u)(`roles.${e}`);
        },
        re = (e) => {
          const t = (0, j.lY)({
            date: e || new Date(),
            relativeTo: new Date(),
          });
          if (!t) return "";
          switch (t.relativeDateCase) {
            case "previous6Days":
              return (0, Z.u1)("dates.previous6Days", { date: t.date });
            case "lastDay":
              return (0, Z.u1)("dates.lastDay", { date: t.date });
            case "sameDay":
              return (0, Z.u1)("dates.sameDay", { date: t.date });
            case "nextDay":
              return (0, Z.u1)("dates.nextDay", { date: t.date });
            case "next6Days":
              return (0, Z.u1)("dates.next6Days", { date: t.date });
            default:
              return (0, Z.u1)("dates.numeric", { date: t.date });
          }
        },
        ne =
          (...e) =>
          (t) => {
            for (const r of e) r && (r.current = t);
          },
        oe = (e) =>
          e
            .trim()
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-"),
        ie = (e, t) => {
          var r, n, o, i, a, s, l, c;
          if (!t) return e[0].longMessage;
          const { t: u, locale: d, passwordSettings: p } = t;
          if (
            "form_password_size_in_bytes_exceeded" ===
              (null === (r = null == e ? void 0 : e[0]) || void 0 === r
                ? void 0
                : r.code) ||
            "form_password_pwned" ===
              (null === (n = null == e ? void 0 : e[0]) || void 0 === n
                ? void 0
                : n.code)
          )
            return `${
              u(
                (0, J.u)(
                  `unstable__errors.${
                    null === (o = null == e ? void 0 : e[0]) || void 0 === o
                      ? void 0
                      : o.code
                  }`
                )
              ) ||
              (null === (i = null == e ? void 0 : e[0]) || void 0 === i
                ? void 0
                : i.message)
            }`;
          if (
            "form_password_not_strong_enough" ===
            (null === (a = null == e ? void 0 : e[0]) || void 0 === a
              ? void 0
              : a.code)
          ) {
            const t =
              null ===
                (c =
                  null ===
                    (l =
                      null === (s = e[0].meta) || void 0 === s
                        ? void 0
                        : s.zxcvbn) || void 0 === l
                    ? void 0
                    : l.suggestions) || void 0 === c
                ? void 0
                : c
                    .map((e) =>
                      u(
                        (0, J.u)(
                          `unstable__errors.zxcvbn.suggestions.${e.code}`
                        )
                      )
                    )
                    .join(" ");
            return `${u((0, J.u)("unstable__errors.zxcvbn.notEnough"))} ${t}`;
          }
          const m = e.filter(
              (e) => "form_password_length_too_short" === e.code
            ),
            f = (m.length ? m : e).map((e) => {
              const t = ((e) => ({
                form_password_length_too_long: [
                  "unstable__errors.passwordComplexity.maximumLength",
                  "length",
                  e.max_length,
                ],
                form_password_length_too_short: [
                  "unstable__errors.passwordComplexity.minimumLength",
                  "length",
                  e.min_length,
                ],
                form_password_no_uppercase:
                  "unstable__errors.passwordComplexity.requireUppercase",
                form_password_no_lowercase:
                  "unstable__errors.passwordComplexity.requireLowercase",
                form_password_no_number:
                  "unstable__errors.passwordComplexity.requireNumbers",
                form_password_no_special_char:
                  "unstable__errors.passwordComplexity.requireSpecialCharacter",
              }))(p)[e.code];
              if (Array.isArray(t)) {
                const [e, r, n] = t;
                return u((0, J.u)(e, { [r]: n }));
              }
              return u((0, J.u)(t));
            }),
            h = se(f, d);
          return ae(
            `${u(
              (0, J.u)("unstable__errors.passwordComplexity.sentencePrefix")
            )} ${h}`
          );
        },
        ae = (e) => (e ? (e.endsWith(".") ? e : `${e}.`) : ""),
        se = (e, t) => {
          let r;
          return (
            (r = s(t)
              ? new Intl.ListFormat(t, {
                  style: "long",
                  type: "conjunction",
                }).format(e)
              : e.join(", ")),
            r
          );
        };
      var le = r(2903),
        ce = r(996),
        ue = r(8246),
        de = r(4804);
      const pe = ({ mount: e, unmount: t, ...r }) => {
          const n = (0, O.useRef)(null);
          return (
            (0, O.useEffect)(() => {
              let r;
              return (
                n.current && ((r = n.current), e(n.current)),
                () => {
                  t(r);
                }
              );
            }, [n.current]),
            (0, le.tZ)("div", { ref: n, ...r })
          );
        },
        me = (e) =>
          he({
            customPages: e,
            getDefaultRoutes: Ie,
            setFirstPathToRoot: ve,
            excludedPathsFromDuplicateWarning: ["/", "account"],
          }),
        fe = (e) =>
          he({
            customPages: e,
            getDefaultRoutes: Be,
            setFirstPathToRoot: be,
            excludedPathsFromDuplicateWarning: [],
          }),
        he = ({
          customPages: e,
          getDefaultRoutes: t,
          setFirstPathToRoot: r,
          excludedPathsFromDuplicateWarning: n,
        }) => {
          const {
            INITIAL_ROUTES: o,
            pageToRootNavbarRouteMap: i,
            validReorderItemLabels: a,
          } = t();
          (0, j.vf)() && ye(e, a);
          const s = e.filter(
              (e) =>
                !!we(e, a) ||
                ((0, j.vf)() &&
                  console.error("Clerk: Invalid custom page data: ", e),
                !1)
            ),
            { allRoutes: l, contents: c } = ge({
              customPages: s,
              defaultRoutes: o,
            });
          Pe(l);
          const u = r(l);
          return (
            (0, j.vf)() && xe(u, n),
            { routes: u, contents: c, pageToRootNavbarRouteMap: i }
          );
        },
        ge = ({ customPages: e, defaultRoutes: t }) => {
          let r = t.map((e) => e);
          const n = [],
            o = e.map((e, o) => {
              if (_e(e))
                return {
                  name: e.label,
                  id: `custom-page-${o}`,
                  icon: (t) =>
                    (0, le.tZ)(pe, {
                      mount: e.mountIcon,
                      unmount: e.unmountIcon,
                      ...t,
                    }),
                  path: ke(e.url),
                  external: !0,
                };
              if (Se(e)) {
                const t = $e(e.url);
                return (
                  n.push({ url: t, mount: e.mount, unmount: e.unmount }),
                  {
                    name: e.label,
                    id: `custom-page-${o}`,
                    icon: (t) =>
                      (0, le.tZ)(pe, {
                        mount: e.mountIcon,
                        unmount: e.unmountIcon,
                        ...t,
                      }),
                    path: t,
                  }
                );
              }
              const i = t.find((t) => t.id === e.label);
              return (r = r.filter(({ id: t }) => t !== e.label)), { ...i };
            });
          return { allRoutes: [...r, ...o], contents: n };
        },
        ve = (e) =>
          "account" === e[0].id || "security" === e[0].id
            ? e.map((e) =>
                "account" === e.id || "security" === e.id
                  ? { ...e, path: "/" }
                  : e
              )
            : e.map((e, t) => (0 === t ? { ...e, path: "/" } : e)),
        be = (e) => e.map((e, t) => (0 === t ? { ...e, path: "/" } : e)),
        ye = (e, t) => {
          e.filter((e) => Ce(e, t)).reduce(
            (e, t) => (
              e.includes(t.label) &&
                console.error(
                  `Clerk: The "${t.label}" item is used more than once when reordering pages. This may cause unexpected behavior.`
                ),
              [...e, t.label]
            ),
            []
          );
        },
        xe = (e, t) => {
          const r = e
            .filter(({ external: e, path: r }) => !e && t.every((e) => e !== r))
            .map(({ path: e }) => e);
          r.filter((e, t) => r.indexOf(e) !== t).forEach((e) => {
            console.error(
              `Clerk: Duplicate path "${e}" found in custom pages. This may cause unexpected behavior.`
            );
          });
        },
        we = (e, t) => Se(e) || _e(e) || Ce(e, t),
        Se = (e) =>
          !!(
            e.url &&
            e.label &&
            e.mount &&
            e.unmount &&
            e.mountIcon &&
            e.unmountIcon
          ),
        _e = (e) =>
          !(
            !e.url ||
            !e.label ||
            e.mount ||
            e.unmount ||
            !e.mountIcon ||
            !e.unmountIcon
          ),
        Ce = (e, t) =>
          !e.url &&
          !e.mount &&
          !e.unmount &&
          !e.mountIcon &&
          !e.unmountIcon &&
          t.some((t) => t === e.label),
        $e = (e) => {
          if (!e) throw new Error("Clerk: URL is required for custom pages");
          if ((0, ce.jv)(e))
            throw new Error(
              "Clerk: Absolute URLs are not supported for custom pages"
            );
          return "/" === e.charAt(0) && e.length > 1 ? e.substring(1) : e;
        },
        ke = (e) => {
          if (!e) throw new Error("Clerk: URL is required for custom links");
          return (0, ce.jv)(e) || "/" === e.charAt(0) ? e : `/${e}`;
        },
        Pe = (e) => {
          if (e[0].external)
            throw new Error(
              "Clerk: The first route cannot be a custom external link component"
            );
        },
        Ie = () => {
          const e = [
              {
                name: (0, Z.u1)("userProfile.start.headerTitle__account"),
                id: ue.x.ACCOUNT,
                icon: de.n5,
                path: "account",
              },
              {
                name: (0, Z.u1)("userProfile.start.headerTitle__security"),
                id: ue.x.SECURITY,
                icon: de.qy,
                path: "account",
              },
            ],
            t = {
              profile: e.find((e) => e.id === ue.x.ACCOUNT),
              "email-address": e.find((e) => e.id === ue.x.ACCOUNT),
              "phone-number": e.find((e) => e.id === ue.x.ACCOUNT),
              "connected-account": e.find((e) => e.id === ue.x.ACCOUNT),
              "web3-wallet": e.find((e) => e.id === ue.x.ACCOUNT),
              username: e.find((e) => e.id === ue.x.ACCOUNT),
              "multi-factor": e.find((e) => e.id === ue.x.SECURITY),
              password: e.find((e) => e.id === ue.x.SECURITY),
            },
            r = e.map((e) => e.id);
          return {
            INITIAL_ROUTES: e,
            pageToRootNavbarRouteMap: t,
            validReorderItemLabels: r,
          };
        },
        Be = () => {
          const e = [
              {
                name: (0, Z.u1)(
                  "organizationProfile.start.headerTitle__members"
                ),
                id: ue.b.MEMBERS,
                icon: de.n5,
                path: "organization-members",
              },
              {
                name: (0, Z.u1)(
                  "organizationProfile.start.headerTitle__settings"
                ),
                id: ue.b.SETTINGS,
                icon: de.tc,
                path: "organization-settings",
              },
            ],
            t = {
              "invite-members": e.find((e) => e.id === ue.b.MEMBERS),
              domain: e.find((e) => e.id === ue.b.SETTINGS),
              profile: e.find((e) => e.id === ue.b.SETTINGS),
              leave: e.find((e) => e.id === ue.b.SETTINGS),
              delete: e.find((e) => e.id === ue.b.SETTINGS),
            },
            r = e.map((e) => e.id);
          return {
            INITIAL_ROUTES: e,
            pageToRootNavbarRouteMap: t,
            validReorderItemLabels: r,
          };
        };
    },
    8747: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    6234: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    337: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    9052: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    5399: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    1134: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    8381: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    3709: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    7054: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    4543: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    2429: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    85: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    3902: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    3816: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    376: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    4959: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    3354: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    1416: function (e, t, r) {
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r);
                var o = Object.getOwnPropertyDescriptor(t, r);
                (o &&
                  !("get" in o
                    ? !t.__esModule
                    : o.writable || o.configurable)) ||
                  (o = {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  }),
                  Object.defineProperty(e, n, o);
              }
            : function (e, t, r, n) {
                void 0 === n && (n = r), (e[n] = t[r]);
              }),
        o =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e)
              "default" === r ||
                Object.prototype.hasOwnProperty.call(t, r) ||
                n(t, e, r);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        o(r(8747), t),
        o(r(6234), t),
        o(r(337), t),
        o(r(9052), t),
        o(r(5399), t),
        o(r(1134), t),
        o(r(8381), t),
        o(r(7054), t),
        o(r(4543), t),
        o(r(2429), t),
        o(r(85), t),
        o(r(3902), t),
        o(r(3816), t),
        o(r(376), t),
        o(r(4959), t),
        o(r(3354), t),
        o(r(7619), t),
        o(r(9883), t),
        o(r(4171), t),
        o(r(2608), t),
        o(r(119), t),
        o(r(2989), t),
        o(r(8742), t),
        o(r(7994), t),
        o(r(9386), t),
        o(r(9339), t),
        o(r(3072), t),
        o(r(3535), t),
        o(r(2610), t),
        o(r(9846), t),
        o(r(9396), t),
        o(r(2866), t),
        o(r(7235), t),
        o(r(5566), t),
        o(r(2978), t),
        o(r(1611), t),
        o(r(1984), t),
        o(r(688), t),
        o(r(6080), t),
        o(r(9776), t),
        o(r(7663), t),
        o(r(4048), t),
        o(r(344), t),
        o(r(8855), t),
        o(r(5539), t),
        o(r(1197), t),
        o(r(6879), t),
        o(r(2096), t),
        o(r(7192), t),
        o(r(2704), t),
        o(r(9162), t),
        o(r(4775), t),
        o(r(5690), t),
        o(r(3709), t);
    },
    7619: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    9883: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    119: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    4171: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    2608: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    2989: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    8742: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sortedOAuthProviders =
          t.getOAuthProviderData =
          t.OAUTH_PROVIDERS =
            void 0),
        (t.OAUTH_PROVIDERS = [
          {
            provider: "google",
            strategy: "oauth_google",
            name: "Google",
            docsUrl:
              "https://clerk.com/docs/authentication/social-connection-with-google",
          },
          {
            provider: "discord",
            strategy: "oauth_discord",
            name: "Discord",
            docsUrl:
              "https://clerk.com/docs/authentication/social-connection-with-discord",
          },
          {
            provider: "facebook",
            strategy: "oauth_facebook",
            name: "Facebook",
            docsUrl:
              "https://clerk.com/docs/authentication/social-connection-with-facebook",
          },
          {
            provider: "twitch",
            strategy: "oauth_twitch",
            name: "Twitch",
            docsUrl:
              "https://clerk.com/docs/authentication/social-connection-with-twitch",
          },
          {
            provider: "twitter",
            strategy: "oauth_twitter",
            name: "Twitter",
            docsUrl:
              "https://clerk.com/docs/authentication/social-connection-with-twitter",
          },
          {
            provider: "microsoft",
            strategy: "oauth_microsoft",
            name: "Microsoft",
            docsUrl:
              "https://clerk.com/docs/authentication/social-connection-with-microsoft",
          },
          {
            provider: "tiktok",
            strategy: "oauth_tiktok",
            name: "TikTok",
            docsUrl:
              "https://clerk.com/docs/authentication/social-connection-with-tiktok",
          },
          {
            provider: "linkedin",
            strategy: "oauth_linkedin",
            name: "LinkedIn",
            docsUrl:
              "https://clerk.com/docs/authentication/social-connection-with-linkedin",
          },
          {
            provider: "linkedin_oidc",
            strategy: "oauth_linkedin_oidc",
            name: "LinkedIn",
            docsUrl:
              "https://clerk.com/docs/authentication/social-connections/linkedin-oidc",
          },
          {
            provider: "github",
            strategy: "oauth_github",
            name: "GitHub",
            docsUrl:
              "https://clerk.com/docs/authentication/social-connection-with-github",
          },
          {
            provider: "gitlab",
            strategy: "oauth_gitlab",
            name: "GitLab",
            docsUrl:
              "https://clerk.com/docs/authentication/social-connection-with-gitlab",
          },
          {
            provider: "dropbox",
            strategy: "oauth_dropbox",
            name: "Dropbox",
            docsUrl:
              "https://clerk.com/docs/authentication/social-connection-with-dropbox",
          },
          {
            provider: "atlassian",
            strategy: "oauth_atlassian",
            name: "Atlassian",
            docsUrl:
              "https://clerk.com/docs/authentication/social-connection-with-atlassian",
          },
          {
            provider: "bitbucket",
            strategy: "oauth_bitbucket",
            name: "Bitbucket",
            docsUrl:
              "https://clerk.com/docs/authentication/social-connection-with-bitbucket",
          },
          {
            provider: "hubspot",
            strategy: "oauth_hubspot",
            name: "HubSpot",
            docsUrl:
              "https://clerk.com/docs/authentication/social-connection-with-hubspot",
          },
          {
            provider: "notion",
            strategy: "oauth_notion",
            name: "Notion",
            docsUrl:
              "https://clerk.com/docs/authentication/social-connection-with-notion",
          },
          {
            provider: "apple",
            strategy: "oauth_apple",
            name: "Apple",
            docsUrl:
              "https://clerk.com/docs/authentication/social-connection-with-apple",
          },
          {
            provider: "line",
            strategy: "oauth_line",
            name: "LINE",
            docsUrl:
              "https://clerk.com/docs/authentication/social-connection-with-line",
          },
          {
            provider: "instagram",
            strategy: "oauth_instagram",
            name: "Instagram",
            docsUrl:
              "https://clerk.com/docs/authentication/social-connection-with-instagram",
          },
          {
            provider: "coinbase",
            strategy: "oauth_coinbase",
            name: "Coinbase",
            docsUrl:
              "https://clerk.com/docs/authentication/social-connection-with-coinbase",
          },
          {
            provider: "spotify",
            strategy: "oauth_spotify",
            name: "Spotify",
            docsUrl:
              "https://clerk.com/docs/authentication/social-connection-with-spotify",
          },
          {
            provider: "xero",
            strategy: "oauth_xero",
            name: "Xero",
            docsUrl:
              "https://clerk.com/docs/authentication/social-connection-with-xero",
          },
          {
            provider: "box",
            strategy: "oauth_box",
            name: "Box",
            docsUrl:
              "https://clerk.com/docs/authentication/social-connection-with-box",
          },
          {
            provider: "slack",
            strategy: "oauth_slack",
            name: "Slack",
            docsUrl:
              "https://clerk.com/docs/authentication/social-connection-with-slack",
          },
          {
            provider: "linear",
            strategy: "oauth_linear",
            name: "Linear",
            docsUrl:
              "https://clerk.com/docs/authentication/social-connection-with-linear",
          },
        ]),
        (t.getOAuthProviderData = function (e) {
          var r = e.provider,
            n = e.strategy;
          return r
            ? t.OAUTH_PROVIDERS.find(function (e) {
                return e.provider == r;
              })
            : t.OAUTH_PROVIDERS.find(function (e) {
                return e.strategy == n;
              });
        }),
        (t.sortedOAuthProviders = function (e) {
          return t.OAUTH_PROVIDERS.slice().sort(function (t, r) {
            var n = e.indexOf(t.strategy);
            -1 == n && (n = Number.MAX_SAFE_INTEGER);
            var o = e.indexOf(r.strategy);
            return -1 == o && (o = Number.MAX_SAFE_INTEGER), n - o;
          });
        });
    },
    7994: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    9386: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    9339: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    3072: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    3535: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    2610: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    9846: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    9396: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    2866: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    7235: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    5566: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    2978: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    1611: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    1984: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SAML_IDPS = void 0),
        (t.SAML_IDPS = {
          saml_okta: { name: "Okta Workforce", logo: "okta" },
          saml_google: { name: "Google Workspace", logo: "google" },
          saml_microsoft: { name: "Microsoft Azure AD", logo: "azure" },
          saml_custom: { name: "SAML", logo: "saml" },
        });
    },
    688: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    6080: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    9776: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    7663: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    4048: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    344: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    8855: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    5539: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    1197: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    6879: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    2096: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    7192: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    2704: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    9162: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    4775: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getWeb3ProviderData = t.WEB3_PROVIDERS = void 0),
        (t.WEB3_PROVIDERS = [
          {
            provider: "metamask",
            strategy: "web3_metamask_signature",
            name: "MetaMask",
          },
        ]),
        (t.getWeb3ProviderData = function (e) {
          var r = e.provider,
            n = e.strategy;
          return r
            ? t.WEB3_PROVIDERS.find(function (e) {
                return e.provider == r;
              })
            : t.WEB3_PROVIDERS.find(function (e) {
                return e.strategy == n;
              });
        });
    },
    5690: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
  },
]);
