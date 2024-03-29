"use strict";
(globalThis.webpackChunk_clerk_clerk_js =
  globalThis.webpackChunk_clerk_clerk_js || []).push([
  [132],
  {
    6164: function (e, t, o) {
      o.r(t),
        o.d(t, {
          UserButton: function () {
            return A;
          },
        });
      var n = o(2903),
        r = o(2784),
        i = o(4016),
        s = o(8173),
        c = o(3476),
        l = o(8690),
        u = o(8441),
        a = o(3244),
        d = o(4804),
        p = o(9912);
      const B = r.forwardRef((e, t) => {
          const { close: o, ...r } = e,
            i = (0, s.useCoreSession)(),
            { authConfig: u } = (0, s.useEnvironment)(),
            B = (0, s.useCoreUser)(),
            {
              handleAddAccountClicked: v,
              handleManageAccountClicked: m,
              handleSessionClicked: g,
              handleSignOutAllClicked: A,
              handleSignOutSessionClicked: C,
              otherSessions: h,
            } = (0, p.Z)({
              ...(0, s.useUserButtonContext)(),
              actionCompleteCallback: o,
              user: B,
            }),
            f = (0, n.tZ)(l.Action, {
              icon: d.v3,
              label: (0, c.localizationKeys)("userButton.action__addAccount"),
              onClick: v,
            }),
            P = u.singleSessionMode
              ? null
              : h.length > 0
              ? (0, n.BX)(n.HY, {
                  children: [
                    (0, n.BX)(l.SecondaryActions, {
                      role: "menu",
                      children: [
                        h.map((e) =>
                          (0, n.tZ)(
                            l.PreviewButton,
                            {
                              icon: d.oX,
                              sx: (e) => ({
                                height: e.sizes.$14,
                                borderRadius: 0,
                              }),
                              onClick: g(e),
                              role: "menuitem",
                              children: (0, n.tZ)(l.UserPreview, {
                                user: e.user,
                                size: "sm",
                                avatarSx: (e) => ({
                                  margin: `0 calc(${e.space.$3}/2)`,
                                }),
                              }),
                            },
                            e.id
                          )
                        ),
                        f,
                      ],
                    }),
                    (0, n.tZ)(l.Actions, {
                      role: "menu",
                      children: (0, n.tZ)(l.Action, {
                        icon: d.kM,
                        label: (0, c.localizationKeys)(
                          "userButton.action__signOutAll"
                        ),
                        onClick: A,
                      }),
                    }),
                  ],
                })
              : (0, n.tZ)(l.SecondaryActions, { role: "menu", children: f });
          return (0, n.tZ)(a.r, {
            elementDescriptor: c.descriptors.userButtonPopoverRootBox,
            children: (0, n.BX)(l.PopoverCard.Root, {
              elementDescriptor: c.descriptors.userButtonPopoverCard,
              ref: t,
              role: "dialog",
              "aria-label": "User button popover",
              ...r,
              children: [
                (0, n.BX)(l.PopoverCard.Main, {
                  elementDescriptor: c.descriptors.userButtonPopoverMain,
                  children: [
                    (0, n.tZ)(l.UserPreview, {
                      elementId: "userButton",
                      user: B,
                      sx: (e) => ({
                        padding: `0 ${e.space.$6}`,
                        marginBottom: e.space.$2,
                      }),
                    }),
                    (0, n.BX)(l.Actions, {
                      role: "menu",
                      elementDescriptor: c.descriptors.userButtonPopoverActions,
                      children: [
                        (0, n.tZ)(l.Action, {
                          elementDescriptor:
                            c.descriptors.userButtonPopoverActionButton,
                          elementId:
                            c.descriptors.userButtonPopoverActionButton.setId(
                              "manageAccount"
                            ),
                          iconBoxElementDescriptor:
                            c.descriptors.userButtonPopoverActionButtonIconBox,
                          iconBoxElementId:
                            c.descriptors.userButtonPopoverActionButtonIconBox.setId(
                              "manageAccount"
                            ),
                          iconElementDescriptor:
                            c.descriptors.userButtonPopoverActionButtonIcon,
                          iconElementId:
                            c.descriptors.userButtonPopoverActionButtonIcon.setId(
                              "manageAccount"
                            ),
                          textElementDescriptor:
                            c.descriptors.userButtonPopoverActionButtonText,
                          textElementId:
                            c.descriptors.userButtonPopoverActionButtonText.setId(
                              "manageAccount"
                            ),
                          icon: d.tc,
                          label: (0, c.localizationKeys)(
                            "userButton.action__manageAccount"
                          ),
                          onClick: m,
                        }),
                        (0, n.tZ)(l.Action, {
                          elementDescriptor:
                            c.descriptors.userButtonPopoverActionButton,
                          elementId:
                            c.descriptors.userButtonPopoverActionButton.setId(
                              "signOut"
                            ),
                          iconBoxElementDescriptor:
                            c.descriptors.userButtonPopoverActionButtonIconBox,
                          iconBoxElementId:
                            c.descriptors.userButtonPopoverActionButtonIconBox.setId(
                              "signOut"
                            ),
                          iconElementDescriptor:
                            c.descriptors.userButtonPopoverActionButtonIcon,
                          iconElementId:
                            c.descriptors.userButtonPopoverActionButtonIcon.setId(
                              "signOut"
                            ),
                          textElementDescriptor:
                            c.descriptors.userButtonPopoverActionButtonText,
                          textElementId:
                            c.descriptors.userButtonPopoverActionButtonText.setId(
                              "signOut"
                            ),
                          icon: d.lv,
                          label: (0, c.localizationKeys)(
                            "userButton.action__signOut"
                          ),
                          onClick: C(i),
                        }),
                      ],
                    }),
                    P,
                  ],
                }),
                (0, n.tZ)(l.PopoverCard.Footer, {
                  elementDescriptor: c.descriptors.userButtonPopoverFooter,
                }),
              ],
            }),
          });
        }),
        v = (0, l.withAvatarShimmer)(
          (0, r.forwardRef)((e, t) => {
            const { sx: o, ...r } = e,
              i = (0, s.useCoreUser)();
            return (0, n.tZ)(c.Button, {
              elementDescriptor: c.descriptors.userButtonTrigger,
              variant: "roundWrapper",
              sx: [(e) => ({ borderRadius: e.radii.$circle }), o],
              ref: t,
              "aria-label": (e.isOpen ? "Close" : "Open") + " user button",
              "aria-expanded": e.isOpen,
              "aria-haspopup": "dialog",
              ...r,
              children: (0, n.tZ)(l.UserAvatar, {
                boxElementDescriptor: c.descriptors.userButtonAvatarBox,
                imageElementDescriptor: c.descriptors.userButtonAvatarImage,
                ...i,
                size: (e) => e.sizes.$8,
              }),
            });
          })
        ),
        m = (0, l.withFloatingTree)(() => {
          const { defaultOpen: e } = (0, s.useUserButtonContext)(),
            {
              floating: t,
              reference: o,
              styles: i,
              toggle: a,
              isOpen: d,
              nodeId: p,
              context: m,
            } = (0, u.Sv)({
              defaultOpen: e,
              placement: "bottom-end",
              offset: 8,
            }),
            A = (0, r.useId)();
          return (0, n.tZ)(c.Flow.Root, {
            flow: "userButton",
            children: (0, n.BX)(c.Flex, {
              elementDescriptor: c.descriptors.userButtonBox,
              isOpen: d,
              align: "center",
              gap: 2,
              children: [
                (0, n.tZ)(g, {}),
                (0, n.tZ)(v, {
                  ref: o,
                  onClick: a,
                  isOpen: d,
                  "aria-controls": A,
                }),
                (0, n.tZ)(l.Popover, {
                  nodeId: p,
                  context: m,
                  isOpen: d,
                  children: (0, n.tZ)(B, {
                    id: A,
                    close: a,
                    ref: t,
                    style: { ...i },
                  }),
                }),
              ],
            }),
          });
        }),
        g = () => {
          const e = (0, s.useCoreUser)(),
            { showName: t } = (0, s.useUserButtonContext)();
          return t
            ? (0, n.tZ)(c.Text, {
                variant: "regularMedium",
                elementDescriptor: c.descriptors.userButtonOuterIdentifier,
                children: (0, i.Pp)(e) || (0, i.xC)(e),
              })
            : null;
        },
        A = (0, s.withCoreUserGuard)((0, l.withCardStateProvider)(m));
    },
    9912: function (e, t, o) {
      o.d(t, {
        Z: function () {
          return u;
        },
      });
      var n = o(5900),
        r = o(196),
        i = o(8173),
        s = o(8690),
        c = o(3736),
        l = o(1609);
      const u = (e) => {
        const {
            setActive: t,
            signOut: o,
            openUserProfile: u,
          } = (0, i.useCoreClerk)(),
          a = (0, s.useCardState)(),
          d = (0, i.useCoreSessionList)(),
          { navigate: p } = (0, c.useRouter)(),
          B = d.filter((e) => "active" === e.status),
          v = B.filter((t) => {
            var o, n;
            return (
              (null === (o = t.user) || void 0 === o ? void 0 : o.id) !==
              (null === (n = e.user) || void 0 === n ? void 0 : n.id)
            );
          });
        return {
          handleSignOutSessionClicked: (t) => () =>
            0 === v.length
              ? o(e.navigateAfterSignOut)
              : o(e.navigateAfterMultiSessionSingleSignOut, {
                  sessionId: t.id,
                }).finally(() => a.setIdle()),
          handleManageAccountClicked: () => {
            var t, o, r;
            return "navigation" === e.userProfileMode
              ? p(e.userProfileUrl || "").finally(() => {
                  (async () => {
                    var t;
                    await (0, l._v)(300),
                      null === (t = e.actionCompleteCallback) ||
                        void 0 === t ||
                        t.call(e);
                  })();
                })
              : ((null === (t = e.appearance) || void 0 === t
                  ? void 0
                  : t.userProfile) &&
                  (0, n.x6)(
                    e.appearance,
                    "userProfile",
                    "Use `<UserButton userProfileProps={{appearance: {...}}} />` instead."
                  ),
                u({
                  appearance:
                    null === (o = e.appearance) || void 0 === o
                      ? void 0
                      : o.userProfile,
                  ...e.userProfileProps,
                }),
                null === (r = e.actionCompleteCallback) || void 0 === r
                  ? void 0
                  : r.call(e));
          },
          handleSignOutAllClicked: () => o(e.navigateAfterSignOut),
          handleSessionClicked: (o) => async () => (
            a.setLoading(),
            t({ session: o, beforeEmit: e.navigateAfterSwitchSession }).finally(
              () => {
                var t;
                a.setIdle(),
                  null === (t = e.actionCompleteCallback) ||
                    void 0 === t ||
                    t.call(e);
              }
            )
          ),
          handleAddAccountClicked: () => (
            (0, r.T)(e.signInUrl || window.location.href), (0, l._v)(2e3)
          ),
          otherSessions: v,
          activeSessions: B,
        };
      };
    },
  },
]);
