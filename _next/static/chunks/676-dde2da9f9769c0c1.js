(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [676], {
        15084: function(e, t, r) {
            "use strict";
            r.d(t, {
                i: function() {
                    return l
                }
            });
            var n = r(2265),
                i = r(95137),
                o = r(96278),
                a = r(57437);

            function s(e) {
                let t = [],
                    r = [];
                return Array.from(e.querySelectorAll('input,select,textarea,a[href],button,[tabindex],audio[controls],video[controls],[contenteditable]:not([contenteditable="false"])')).forEach((e, n) => {
                    let i = function(e) {
                        let t = parseInt(e.getAttribute("tabindex") || "", 10);
                        return Number.isNaN(t) ? "true" === e.contentEditable || ("AUDIO" === e.nodeName || "VIDEO" === e.nodeName || "DETAILS" === e.nodeName) && null === e.getAttribute("tabindex") ? 0 : e.tabIndex : t
                    }(e); - 1 === i || e.disabled || "INPUT" === e.tagName && "hidden" === e.type || function(e) {
                        if ("INPUT" !== e.tagName || "radio" !== e.type || !e.name) return !1;
                        let t = t => e.ownerDocument.querySelector(`input[type="radio"]${t}`),
                            r = t(`[name="${e.name}"]:checked`);
                        return r || (r = t(`[name="${e.name}"]`)), r !== e
                    }(e) || (0 === i ? t.push(e) : r.push({
                        documentOrder: n,
                        tabIndex: i,
                        node: e
                    }))
                }), r.sort((e, t) => e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex).map(e => e.node).concat(t)
            }

            function u() {
                return !0
            }

            function l(e) {
                let {
                    children: t,
                    disableAutoFocus: r = !1,
                    disableEnforceFocus: l = !1,
                    disableRestoreFocus: c = !1,
                    getTabbable: f = s,
                    isEnabled: p = u,
                    open: h
                } = e, d = n.useRef(!1), y = n.useRef(null), m = n.useRef(null), g = n.useRef(null), b = n.useRef(null), v = n.useRef(!1), E = n.useRef(null), w = (0, i.Z)(t.ref, E), S = n.useRef(null);
                n.useEffect(() => {
                    h && E.current && (v.current = !r)
                }, [r, h]), n.useEffect(() => {
                    if (!h || !E.current) return;
                    let e = (0, o.Z)(E.current);
                    return !E.current.contains(e.activeElement) && (E.current.hasAttribute("tabIndex") || E.current.setAttribute("tabIndex", "-1"), v.current && E.current.focus()), () => {
                        c || (g.current && g.current.focus && (d.current = !0, g.current.focus()), g.current = null)
                    }
                }, [h]), n.useEffect(() => {
                    if (!h || !E.current) return;
                    let e = (0, o.Z)(E.current),
                        t = t => {
                            S.current = t, !l && p() && "Tab" === t.key && e.activeElement === E.current && t.shiftKey && (d.current = !0, m.current && m.current.focus())
                        },
                        r = () => {
                            let t = E.current;
                            if (null === t) return;
                            if (!e.hasFocus() || !p() || d.current) {
                                d.current = !1;
                                return
                            }
                            if (t.contains(e.activeElement) || l && e.activeElement !== y.current && e.activeElement !== m.current) return;
                            if (e.activeElement !== b.current) b.current = null;
                            else if (null !== b.current) return;
                            if (!v.current) return;
                            let r = [];
                            if ((e.activeElement === y.current || e.activeElement === m.current) && (r = f(E.current)), r.length > 0) {
                                var n, i;
                                let e = !!((null == (n = S.current) ? void 0 : n.shiftKey) && (null == (i = S.current) ? void 0 : i.key) === "Tab"),
                                    t = r[0],
                                    o = r[r.length - 1];
                                "string" != typeof t && "string" != typeof o && (e ? o.focus() : t.focus())
                            } else t.focus()
                        };
                    e.addEventListener("focusin", r), e.addEventListener("keydown", t, !0);
                    let n = setInterval(() => {
                        e.activeElement && "BODY" === e.activeElement.tagName && r()
                    }, 50);
                    return () => {
                        clearInterval(n), e.removeEventListener("focusin", r), e.removeEventListener("keydown", t, !0)
                    }
                }, [r, l, c, p, h, f]);
                let T = e => {
                    null === g.current && (g.current = e.relatedTarget), v.current = !0
                };
                return (0, a.jsxs)(n.Fragment, {
                    children: [(0, a.jsx)("div", {
                        tabIndex: h ? 0 : -1,
                        onFocus: T,
                        ref: y,
                        "data-testid": "sentinelStart"
                    }), n.cloneElement(t, {
                        ref: w,
                        onFocus: e => {
                            null === g.current && (g.current = e.relatedTarget), v.current = !0, b.current = e.target;
                            let r = t.props.onFocus;
                            r && r(e)
                        }
                    }), (0, a.jsx)("div", {
                        tabIndex: h ? 0 : -1,
                        onFocus: T,
                        ref: m,
                        "data-testid": "sentinelEnd"
                    })]
                })
            }
        },
        57379: function(e, t, r) {
            "use strict";
            r.d(t, {
                h: function() {
                    return l
                }
            });
            var n = r(2265),
                i = r(54887),
                o = r(95137),
                a = r(1091),
                s = r(13840),
                u = r(57437);
            let l = n.forwardRef(function(e, t) {
                let {
                    children: r,
                    container: l,
                    disablePortal: c = !1
                } = e, [f, p] = n.useState(null), h = (0, o.Z)(n.isValidElement(r) ? r.ref : null, t);
                return ((0, a.Z)(() => {
                    !c && p(("function" == typeof l ? l() : l) || document.body)
                }, [l, c]), (0, a.Z)(() => {
                    if (f && !c) return (0, s.Z)(t, f), () => {
                        (0, s.Z)(t, null)
                    }
                }, [t, f, c]), c) ? n.isValidElement(r) ? n.cloneElement(r, {
                    ref: h
                }) : (0, u.jsx)(n.Fragment, {
                    children: r
                }) : (0, u.jsx)(n.Fragment, {
                    children: f ? i.createPortal(r, f) : f
                })
            })
        },
        20202: function(e, t, r) {
            "use strict";
            r.d(t, {
                $: function() {
                    return o
                }
            });
            var n = r(13428),
                i = r(43655);

            function o(e, t, r) {
                return void 0 === e || (0, i.X)(e) ? t : (0, n.Z)({}, t, {
                    ownerState: (0, n.Z)({}, t.ownerState, r)
                })
            }
        },
        55095: function(e, t, r) {
            "use strict";

            function n(e, t = []) {
                if (void 0 === e) return {};
                let r = {};
                return Object.keys(e).filter(r => r.match(/^on[A-Z]/) && "function" == typeof e[r] && !t.includes(r)).forEach(t => {
                    r[t] = e[t]
                }), r
            }
            r.d(t, {
                _: function() {
                    return n
                }
            })
        },
        43655: function(e, t, r) {
            "use strict";

            function n(e) {
                return "string" == typeof e
            }
            r.d(t, {
                X: function() {
                    return n
                }
            })
        },
        27282: function(e, t, r) {
            "use strict";
            r.d(t, {
                y: function() {
                    return f
                }
            });
            var n = r(13428),
                i = r(20791),
                o = r(95137),
                a = r(20202),
                s = r(57042),
                u = r(55095);

            function l(e) {
                if (void 0 === e) return {};
                let t = {};
                return Object.keys(e).filter(t => !(t.match(/^on[A-Z]/) && "function" == typeof e[t])).forEach(r => {
                    t[r] = e[r]
                }), t
            }
            let c = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];

            function f(e) {
                var t;
                let {
                    elementType: r,
                    externalSlotProps: f,
                    ownerState: p,
                    skipResolvingSlotProps: h = !1
                } = e, d = (0, i.Z)(e, c), y = h ? {} : "function" == typeof f ? f(p, void 0) : f, {
                    props: m,
                    internalRef: g
                } = function(e) {
                    let {
                        getSlotProps: t,
                        additionalProps: r,
                        externalSlotProps: i,
                        externalForwardedProps: o,
                        className: a
                    } = e;
                    if (!t) {
                        let e = (0, s.Z)(null == r ? void 0 : r.className, a, null == o ? void 0 : o.className, null == i ? void 0 : i.className),
                            t = (0, n.Z)({}, null == r ? void 0 : r.style, null == o ? void 0 : o.style, null == i ? void 0 : i.style),
                            u = (0, n.Z)({}, r, o, i);
                        return e.length > 0 && (u.className = e), Object.keys(t).length > 0 && (u.style = t), {
                            props: u,
                            internalRef: void 0
                        }
                    }
                    let c = (0, u._)((0, n.Z)({}, o, i)),
                        f = l(i),
                        p = l(o),
                        h = t(c),
                        d = (0, s.Z)(null == h ? void 0 : h.className, null == r ? void 0 : r.className, a, null == o ? void 0 : o.className, null == i ? void 0 : i.className),
                        y = (0, n.Z)({}, null == h ? void 0 : h.style, null == r ? void 0 : r.style, null == o ? void 0 : o.style, null == i ? void 0 : i.style),
                        m = (0, n.Z)({}, h, r, p, f);
                    return d.length > 0 && (m.className = d), Object.keys(y).length > 0 && (m.style = y), {
                        props: m,
                        internalRef: h.ref
                    }
                }((0, n.Z)({}, d, {
                    externalSlotProps: y
                })), b = (0, o.Z)(g, null == y ? void 0 : y.ref, null == (t = e.additionalProps) ? void 0 : t.ref), v = (0, a.$)(r, (0, n.Z)({}, m, {
                    ref: b
                }), p);
                return v
            }
        },
        33533: function(e, t, r) {
            "use strict";
            var n = r(6093);
            t.Z = void 0;
            var i = n(r(80984)),
                o = r(57437),
                a = (0, i.default)((0, o.jsx)("path", {
                    d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                }), "Close");
            t.Z = a
        },
        80984: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return n.createSvgIcon
                }
            });
            var n = r(43135)
        },
        39350: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return v
                }
            });
            var n = r(20791),
                i = r(13428),
                o = r(2265),
                a = r(57042),
                s = r(95600),
                u = r(35843),
                l = r(87927),
                c = r(72261),
                f = r(26520),
                p = r(25702);

            function h(e) {
                return (0, p.Z)("MuiBackdrop", e)
            }(0, f.Z)("MuiBackdrop", ["root", "invisible"]);
            var d = r(57437);
            let y = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"],
                m = e => {
                    let {
                        classes: t,
                        invisible: r
                    } = e;
                    return (0, s.Z)({
                        root: ["root", r && "invisible"]
                    }, h, t)
                },
                g = (0, u.ZP)("div", {
                    name: "MuiBackdrop",
                    slot: "Root",
                    overridesResolver: (e, t) => {
                        let {
                            ownerState: r
                        } = e;
                        return [t.root, r.invisible && t.invisible]
                    }
                })(({
                    ownerState: e
                }) => (0, i.Z)({
                    position: "fixed",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    right: 0,
                    bottom: 0,
                    top: 0,
                    left: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    WebkitTapHighlightColor: "transparent"
                }, e.invisible && {
                    backgroundColor: "transparent"
                })),
                b = o.forwardRef(function(e, t) {
                    var r, o, s;
                    let u = (0, l.Z)({
                            props: e,
                            name: "MuiBackdrop"
                        }),
                        {
                            children: f,
                            className: p,
                            component: h = "div",
                            components: b = {},
                            componentsProps: v = {},
                            invisible: E = !1,
                            open: w,
                            slotProps: S = {},
                            slots: T = {},
                            TransitionComponent: _ = c.Z,
                            transitionDuration: k
                        } = u,
                        I = (0, n.Z)(u, y),
                        P = (0, i.Z)({}, u, {
                            component: h,
                            invisible: E
                        }),
                        O = m(P),
                        x = null != (r = S.root) ? r : v.root;
                    return (0, d.jsx)(_, (0, i.Z)({ in: w,
                        timeout: k
                    }, I, {
                        children: (0, d.jsx)(g, (0, i.Z)({
                            "aria-hidden": !0
                        }, x, {
                            as: null != (o = null != (s = T.root) ? s : b.Root) ? o : h,
                            className: (0, a.Z)(O.root, p, null == x ? void 0 : x.className),
                            ownerState: (0, i.Z)({}, P, null == x ? void 0 : x.ownerState),
                            classes: O,
                            ref: t,
                            children: f
                        }))
                    }))
                });
            var v = b
        },
        96507: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return b
                }
            });
            var n = r(13428),
                i = r(20791),
                o = r(2265),
                a = r(57042),
                s = r(89770),
                u = r(87947),
                l = r(43381),
                c = r(95270),
                f = r(57437);
            let p = ["className", "component"];
            var h = r(25097),
                d = r(98595),
                y = r(53469);
            let m = (0, d.Z)(),
                g = function(e = {}) {
                    let {
                        themeId: t,
                        defaultTheme: r,
                        defaultClassName: h = "MuiBox-root",
                        generateClassName: d
                    } = e, y = (0, s.ZP)("div", {
                        shouldForwardProp: e => "theme" !== e && "sx" !== e && "as" !== e
                    })(u.Z), m = o.forwardRef(function(e, o) {
                        let s = (0, c.Z)(r),
                            u = (0, l.Z)(e),
                            {
                                className: m,
                                component: g = "div"
                            } = u,
                            b = (0, i.Z)(u, p);
                        return (0, f.jsx)(y, (0, n.Z)({
                            as: g,
                            ref: o,
                            className: (0, a.Z)(m, d ? d(h) : h),
                            theme: t && s[t] || s
                        }, b))
                    });
                    return m
                }({
                    themeId: y.Z,
                    defaultTheme: m,
                    defaultClassName: "MuiBox-root",
                    generateClassName: h.Z.generate
                });
            var b = g
        },
        49050: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return O
                }
            });
            var n = r(20791),
                i = r(13428),
                o = r(2265),
                a = r(57042),
                s = r(10098),
                u = r(95600),
                l = r(89975),
                c = r(35843),
                f = r(87927),
                p = r(1978),
                h = r(28702),
                d = r(26520),
                y = r(25702);

            function m(e) {
                return (0, y.Z)("MuiButton", e)
            }
            let g = (0, d.Z)("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]),
                b = o.createContext({}),
                v = o.createContext(void 0);
            var E = r(57437);
            let w = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"],
                S = e => {
                    let {
                        color: t,
                        disableElevation: r,
                        fullWidth: n,
                        size: o,
                        variant: a,
                        classes: s
                    } = e, l = {
                        root: ["root", a, `${a}${(0,h.Z)(t)}`, `size${(0,h.Z)(o)}`, `${a}Size${(0,h.Z)(o)}`, "inherit" === t && "colorInherit", r && "disableElevation", n && "fullWidth"],
                        label: ["label"],
                        startIcon: ["startIcon", `iconSize${(0,h.Z)(o)}`],
                        endIcon: ["endIcon", `iconSize${(0,h.Z)(o)}`]
                    }, c = (0, u.Z)(l, m, s);
                    return (0, i.Z)({}, s, c)
                },
                T = e => (0, i.Z)({}, "small" === e.size && {
                    "& > *:nth-of-type(1)": {
                        fontSize: 18
                    }
                }, "medium" === e.size && {
                    "& > *:nth-of-type(1)": {
                        fontSize: 20
                    }
                }, "large" === e.size && {
                    "& > *:nth-of-type(1)": {
                        fontSize: 22
                    }
                }),
                _ = (0, c.ZP)(p.Z, {
                    shouldForwardProp: e => (0, c.FO)(e) || "classes" === e,
                    name: "MuiButton",
                    slot: "Root",
                    overridesResolver: (e, t) => {
                        let {
                            ownerState: r
                        } = e;
                        return [t.root, t[r.variant], t[`${r.variant}${(0,h.Z)(r.color)}`], t[`size${(0,h.Z)(r.size)}`], t[`${r.variant}Size${(0,h.Z)(r.size)}`], "inherit" === r.color && t.colorInherit, r.disableElevation && t.disableElevation, r.fullWidth && t.fullWidth]
                    }
                })(({
                    theme: e,
                    ownerState: t
                }) => {
                    var r, n;
                    let o = "light" === e.palette.mode ? e.palette.grey[300] : e.palette.grey[800],
                        a = "light" === e.palette.mode ? e.palette.grey.A100 : e.palette.grey[700];
                    return (0, i.Z)({}, e.typography.button, {
                        minWidth: 64,
                        padding: "6px 16px",
                        borderRadius: (e.vars || e).shape.borderRadius,
                        transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
                            duration: e.transitions.duration.short
                        }),
                        "&:hover": (0, i.Z)({
                            textDecoration: "none",
                            backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : (0, l.Fq)(e.palette.text.primary, e.palette.action.hoverOpacity),
                            "@media (hover: none)": {
                                backgroundColor: "transparent"
                            }
                        }, "text" === t.variant && "inherit" !== t.color && {
                            backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : (0, l.Fq)(e.palette[t.color].main, e.palette.action.hoverOpacity),
                            "@media (hover: none)": {
                                backgroundColor: "transparent"
                            }
                        }, "outlined" === t.variant && "inherit" !== t.color && {
                            border: `1px solid ${(e.vars||e).palette[t.color].main}`,
                            backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : (0, l.Fq)(e.palette[t.color].main, e.palette.action.hoverOpacity),
                            "@media (hover: none)": {
                                backgroundColor: "transparent"
                            }
                        }, "contained" === t.variant && {
                            backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedHoverBg : a,
                            boxShadow: (e.vars || e).shadows[4],
                            "@media (hover: none)": {
                                boxShadow: (e.vars || e).shadows[2],
                                backgroundColor: (e.vars || e).palette.grey[300]
                            }
                        }, "contained" === t.variant && "inherit" !== t.color && {
                            backgroundColor: (e.vars || e).palette[t.color].dark,
                            "@media (hover: none)": {
                                backgroundColor: (e.vars || e).palette[t.color].main
                            }
                        }),
                        "&:active": (0, i.Z)({}, "contained" === t.variant && {
                            boxShadow: (e.vars || e).shadows[8]
                        }),
                        [`&.${g.focusVisible}`]: (0, i.Z)({}, "contained" === t.variant && {
                            boxShadow: (e.vars || e).shadows[6]
                        }),
                        [`&.${g.disabled}`]: (0, i.Z)({
                            color: (e.vars || e).palette.action.disabled
                        }, "outlined" === t.variant && {
                            border: `1px solid ${(e.vars||e).palette.action.disabledBackground}`
                        }, "contained" === t.variant && {
                            color: (e.vars || e).palette.action.disabled,
                            boxShadow: (e.vars || e).shadows[0],
                            backgroundColor: (e.vars || e).palette.action.disabledBackground
                        })
                    }, "text" === t.variant && {
                        padding: "6px 8px"
                    }, "text" === t.variant && "inherit" !== t.color && {
                        color: (e.vars || e).palette[t.color].main
                    }, "outlined" === t.variant && {
                        padding: "5px 15px",
                        border: "1px solid currentColor"
                    }, "outlined" === t.variant && "inherit" !== t.color && {
                        color: (e.vars || e).palette[t.color].main,
                        border: e.vars ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)` : `1px solid ${(0,l.Fq)(e.palette[t.color].main,.5)}`
                    }, "contained" === t.variant && {
                        color: e.vars ? e.vars.palette.text.primary : null == (r = (n = e.palette).getContrastText) ? void 0 : r.call(n, e.palette.grey[300]),
                        backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedBg : o,
                        boxShadow: (e.vars || e).shadows[2]
                    }, "contained" === t.variant && "inherit" !== t.color && {
                        color: (e.vars || e).palette[t.color].contrastText,
                        backgroundColor: (e.vars || e).palette[t.color].main
                    }, "inherit" === t.color && {
                        color: "inherit",
                        borderColor: "currentColor"
                    }, "small" === t.size && "text" === t.variant && {
                        padding: "4px 5px",
                        fontSize: e.typography.pxToRem(13)
                    }, "large" === t.size && "text" === t.variant && {
                        padding: "8px 11px",
                        fontSize: e.typography.pxToRem(15)
                    }, "small" === t.size && "outlined" === t.variant && {
                        padding: "3px 9px",
                        fontSize: e.typography.pxToRem(13)
                    }, "large" === t.size && "outlined" === t.variant && {
                        padding: "7px 21px",
                        fontSize: e.typography.pxToRem(15)
                    }, "small" === t.size && "contained" === t.variant && {
                        padding: "4px 10px",
                        fontSize: e.typography.pxToRem(13)
                    }, "large" === t.size && "contained" === t.variant && {
                        padding: "8px 22px",
                        fontSize: e.typography.pxToRem(15)
                    }, t.fullWidth && {
                        width: "100%"
                    })
                }, ({
                    ownerState: e
                }) => e.disableElevation && {
                    boxShadow: "none",
                    "&:hover": {
                        boxShadow: "none"
                    },
                    [`&.${g.focusVisible}`]: {
                        boxShadow: "none"
                    },
                    "&:active": {
                        boxShadow: "none"
                    },
                    [`&.${g.disabled}`]: {
                        boxShadow: "none"
                    }
                }),
                k = (0, c.ZP)("span", {
                    name: "MuiButton",
                    slot: "StartIcon",
                    overridesResolver: (e, t) => {
                        let {
                            ownerState: r
                        } = e;
                        return [t.startIcon, t[`iconSize${(0,h.Z)(r.size)}`]]
                    }
                })(({
                    ownerState: e
                }) => (0, i.Z)({
                    display: "inherit",
                    marginRight: 8,
                    marginLeft: -4
                }, "small" === e.size && {
                    marginLeft: -2
                }, T(e))),
                I = (0, c.ZP)("span", {
                    name: "MuiButton",
                    slot: "EndIcon",
                    overridesResolver: (e, t) => {
                        let {
                            ownerState: r
                        } = e;
                        return [t.endIcon, t[`iconSize${(0,h.Z)(r.size)}`]]
                    }
                })(({
                    ownerState: e
                }) => (0, i.Z)({
                    display: "inherit",
                    marginRight: -4,
                    marginLeft: 8
                }, "small" === e.size && {
                    marginRight: -2
                }, T(e))),
                P = o.forwardRef(function(e, t) {
                    let r = o.useContext(b),
                        u = o.useContext(v),
                        l = (0, s.Z)(r, e),
                        c = (0, f.Z)({
                            props: l,
                            name: "MuiButton"
                        }),
                        {
                            children: p,
                            color: h = "primary",
                            component: d = "button",
                            className: y,
                            disabled: m = !1,
                            disableElevation: g = !1,
                            disableFocusRipple: T = !1,
                            endIcon: P,
                            focusVisibleClassName: O,
                            fullWidth: x = !1,
                            size: A = "medium",
                            startIcon: N,
                            type: C,
                            variant: B = "text"
                        } = c,
                        R = (0, n.Z)(c, w),
                        U = (0, i.Z)({}, c, {
                            color: h,
                            component: d,
                            disabled: m,
                            disableElevation: g,
                            disableFocusRipple: T,
                            fullWidth: x,
                            size: A,
                            type: C,
                            variant: B
                        }),
                        H = S(U),
                        L = N && (0, E.jsx)(k, {
                            className: H.startIcon,
                            ownerState: U,
                            children: N
                        }),
                        Z = P && (0, E.jsx)(I, {
                            className: H.endIcon,
                            ownerState: U,
                            children: P
                        });
                    return (0, E.jsxs)(_, (0, i.Z)({
                        ownerState: U,
                        className: (0, a.Z)(r.className, H.root, y, u || ""),
                        component: d,
                        disabled: m,
                        focusRipple: !T,
                        focusVisibleClassName: (0, a.Z)(H.focusVisible, O),
                        ref: t,
                        type: C
                    }, R, {
                        classes: H,
                        children: [L, p, Z]
                    }))
                });
            var O = P
        },
        1978: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return W
                }
            });
            var n = r(13428),
                i = r(20791),
                o = r(2265),
                a = r(57042),
                s = r(95600),
                u = r(35843),
                l = r(87927),
                c = r(37663),
                f = r(96),
                p = r(53308),
                h = r(68463);

            function d() {
                return (d = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            var y = r(43154),
                m = r(54439);

            function g(e, t) {
                var r = Object.create(null);
                return e && o.Children.map(e, function(e) {
                    return e
                }).forEach(function(e) {
                    r[e.key] = t && (0, o.isValidElement)(e) ? t(e) : e
                }), r
            }

            function b(e, t, r) {
                return null != r[t] ? r[t] : e.props[t]
            }
            var v = Object.values || function(e) {
                    return Object.keys(e).map(function(t) {
                        return e[t]
                    })
                },
                E = function(e) {
                    function t(t, r) {
                        var n, i = (n = e.call(this, t, r) || this).handleExited.bind(function(e) {
                            if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }(n));
                        return n.state = {
                            contextValue: {
                                isMounting: !0
                            },
                            handleExited: i,
                            firstRender: !0
                        }, n
                    }(0, y.Z)(t, e);
                    var r = t.prototype;
                    return r.componentDidMount = function() {
                        this.mounted = !0, this.setState({
                            contextValue: {
                                isMounting: !1
                            }
                        })
                    }, r.componentWillUnmount = function() {
                        this.mounted = !1
                    }, t.getDerivedStateFromProps = function(e, t) {
                        var r, n, i = t.children,
                            a = t.handleExited;
                        return {
                            children: t.firstRender ? g(e.children, function(t) {
                                return (0, o.cloneElement)(t, {
                                    onExited: a.bind(null, t),
                                    in: !0,
                                    appear: b(t, "appear", e),
                                    enter: b(t, "enter", e),
                                    exit: b(t, "exit", e)
                                })
                            }) : (Object.keys(n = function(e, t) {
                                function r(r) {
                                    return r in t ? t[r] : e[r]
                                }
                                e = e || {}, t = t || {};
                                var n, i = Object.create(null),
                                    o = [];
                                for (var a in e) a in t ? o.length && (i[a] = o, o = []) : o.push(a);
                                var s = {};
                                for (var u in t) {
                                    if (i[u])
                                        for (n = 0; n < i[u].length; n++) {
                                            var l = i[u][n];
                                            s[i[u][n]] = r(l)
                                        }
                                    s[u] = r(u)
                                }
                                for (n = 0; n < o.length; n++) s[o[n]] = r(o[n]);
                                return s
                            }(i, r = g(e.children))).forEach(function(t) {
                                var s = n[t];
                                if ((0, o.isValidElement)(s)) {
                                    var u = t in i,
                                        l = t in r,
                                        c = i[t],
                                        f = (0, o.isValidElement)(c) && !c.props.in;
                                    l && (!u || f) ? n[t] = (0, o.cloneElement)(s, {
                                        onExited: a.bind(null, s),
                                        in: !0,
                                        exit: b(s, "exit", e),
                                        enter: b(s, "enter", e)
                                    }) : l || !u || f ? l && u && (0, o.isValidElement)(c) && (n[t] = (0, o.cloneElement)(s, {
                                        onExited: a.bind(null, s),
                                        in: c.props.in,
                                        exit: b(s, "exit", e),
                                        enter: b(s, "enter", e)
                                    })) : n[t] = (0, o.cloneElement)(s, { in: !1
                                    })
                                }
                            }), n),
                            firstRender: !1
                        }
                    }, r.handleExited = function(e, t) {
                        var r = g(this.props.children);
                        e.key in r || (e.props.onExited && e.props.onExited(t), this.mounted && this.setState(function(t) {
                            var r = d({}, t.children);
                            return delete r[e.key], {
                                children: r
                            }
                        }))
                    }, r.render = function() {
                        var e = this.props,
                            t = e.component,
                            r = e.childFactory,
                            n = (0, h.Z)(e, ["component", "childFactory"]),
                            i = this.state.contextValue,
                            a = v(this.state.children).map(r);
                        return (delete n.appear, delete n.enter, delete n.exit, null === t) ? o.createElement(m.Z.Provider, {
                            value: i
                        }, a) : o.createElement(m.Z.Provider, {
                            value: i
                        }, o.createElement(t, n, a))
                    }, t
                }(o.Component);
            E.propTypes = {}, E.defaultProps = {
                component: "div",
                childFactory: function(e) {
                    return e
                }
            };
            var w = r(99538),
                S = r(57437),
                T = r(26520);
            let _ = (0, T.Z)("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]),
                k = ["center", "classes", "className"],
                I = e => e,
                P, O, x, A, N = (0, w.F4)(P || (P = I `
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),
                C = (0, w.F4)(O || (O = I `
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),
                B = (0, w.F4)(x || (x = I `
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),
                R = (0, u.ZP)("span", {
                    name: "MuiTouchRipple",
                    slot: "Root"
                })({
                    overflow: "hidden",
                    pointerEvents: "none",
                    position: "absolute",
                    zIndex: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    borderRadius: "inherit"
                }),
                U = (0, u.ZP)(function(e) {
                    let {
                        className: t,
                        classes: r,
                        pulsate: n = !1,
                        rippleX: i,
                        rippleY: s,
                        rippleSize: u,
                        in: l,
                        onExited: c,
                        timeout: f
                    } = e, [p, h] = o.useState(!1), d = (0, a.Z)(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), y = (0, a.Z)(r.child, p && r.childLeaving, n && r.childPulsate);
                    return l || p || h(!0), o.useEffect(() => {
                        if (!l && null != c) {
                            let e = setTimeout(c, f);
                            return () => {
                                clearTimeout(e)
                            }
                        }
                    }, [c, l, f]), (0, S.jsx)("span", {
                        className: d,
                        style: {
                            width: u,
                            height: u,
                            top: -(u / 2) + s,
                            left: -(u / 2) + i
                        },
                        children: (0, S.jsx)("span", {
                            className: y
                        })
                    })
                }, {
                    name: "MuiTouchRipple",
                    slot: "Ripple"
                })(A || (A = I `
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), _.rippleVisible, N, 550, ({
                    theme: e
                }) => e.transitions.easing.easeInOut, _.ripplePulsate, ({
                    theme: e
                }) => e.transitions.duration.shorter, _.child, _.childLeaving, C, 550, ({
                    theme: e
                }) => e.transitions.easing.easeInOut, _.childPulsate, B, ({
                    theme: e
                }) => e.transitions.easing.easeInOut),
                H = o.forwardRef(function(e, t) {
                    let r = (0, l.Z)({
                            props: e,
                            name: "MuiTouchRipple"
                        }),
                        {
                            center: s = !1,
                            classes: u = {},
                            className: c
                        } = r,
                        f = (0, i.Z)(r, k),
                        [p, h] = o.useState([]),
                        d = o.useRef(0),
                        y = o.useRef(null);
                    o.useEffect(() => {
                        y.current && (y.current(), y.current = null)
                    }, [p]);
                    let m = o.useRef(!1),
                        g = o.useRef(0),
                        b = o.useRef(null),
                        v = o.useRef(null);
                    o.useEffect(() => () => {
                        g.current && clearTimeout(g.current)
                    }, []);
                    let w = o.useCallback(e => {
                            let {
                                pulsate: t,
                                rippleX: r,
                                rippleY: n,
                                rippleSize: i,
                                cb: o
                            } = e;
                            h(e => [...e, (0, S.jsx)(U, {
                                classes: {
                                    ripple: (0, a.Z)(u.ripple, _.ripple),
                                    rippleVisible: (0, a.Z)(u.rippleVisible, _.rippleVisible),
                                    ripplePulsate: (0, a.Z)(u.ripplePulsate, _.ripplePulsate),
                                    child: (0, a.Z)(u.child, _.child),
                                    childLeaving: (0, a.Z)(u.childLeaving, _.childLeaving),
                                    childPulsate: (0, a.Z)(u.childPulsate, _.childPulsate)
                                },
                                timeout: 550,
                                pulsate: t,
                                rippleX: r,
                                rippleY: n,
                                rippleSize: i
                            }, d.current)]), d.current += 1, y.current = o
                        }, [u]),
                        T = o.useCallback((e = {}, t = {}, r = () => {}) => {
                            let n, i, o;
                            let {
                                pulsate: a = !1,
                                center: u = s || t.pulsate,
                                fakeElement: l = !1
                            } = t;
                            if ((null == e ? void 0 : e.type) === "mousedown" && m.current) {
                                m.current = !1;
                                return
                            }(null == e ? void 0 : e.type) === "touchstart" && (m.current = !0);
                            let c = l ? null : v.current,
                                f = c ? c.getBoundingClientRect() : {
                                    width: 0,
                                    height: 0,
                                    left: 0,
                                    top: 0
                                };
                            if (!u && void 0 !== e && (0 !== e.clientX || 0 !== e.clientY) && (e.clientX || e.touches)) {
                                let {
                                    clientX: t,
                                    clientY: r
                                } = e.touches && e.touches.length > 0 ? e.touches[0] : e;
                                n = Math.round(t - f.left), i = Math.round(r - f.top)
                            } else n = Math.round(f.width / 2), i = Math.round(f.height / 2);
                            if (u)(o = Math.sqrt((2 * f.width ** 2 + f.height ** 2) / 3)) % 2 == 0 && (o += 1);
                            else {
                                let e = 2 * Math.max(Math.abs((c ? c.clientWidth : 0) - n), n) + 2,
                                    t = 2 * Math.max(Math.abs((c ? c.clientHeight : 0) - i), i) + 2;
                                o = Math.sqrt(e ** 2 + t ** 2)
                            }
                            null != e && e.touches ? null === b.current && (b.current = () => {
                                w({
                                    pulsate: a,
                                    rippleX: n,
                                    rippleY: i,
                                    rippleSize: o,
                                    cb: r
                                })
                            }, g.current = setTimeout(() => {
                                b.current && (b.current(), b.current = null)
                            }, 80)) : w({
                                pulsate: a,
                                rippleX: n,
                                rippleY: i,
                                rippleSize: o,
                                cb: r
                            })
                        }, [s, w]),
                        I = o.useCallback(() => {
                            T({}, {
                                pulsate: !0
                            })
                        }, [T]),
                        P = o.useCallback((e, t) => {
                            if (clearTimeout(g.current), (null == e ? void 0 : e.type) === "touchend" && b.current) {
                                b.current(), b.current = null, g.current = setTimeout(() => {
                                    P(e, t)
                                });
                                return
                            }
                            b.current = null, h(e => e.length > 0 ? e.slice(1) : e), y.current = t
                        }, []);
                    return o.useImperativeHandle(t, () => ({
                        pulsate: I,
                        start: T,
                        stop: P
                    }), [I, T, P]), (0, S.jsx)(R, (0, n.Z)({
                        className: (0, a.Z)(_.root, u.root, c),
                        ref: v
                    }, f, {
                        children: (0, S.jsx)(E, {
                            component: null,
                            exit: !0,
                            children: p
                        })
                    }))
                });
            var L = r(25702);

            function Z(e) {
                return (0, L.Z)("MuiButtonBase", e)
            }
            let M = (0, T.Z)("MuiButtonBase", ["root", "disabled", "focusVisible"]),
                D = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"],
                F = e => {
                    let {
                        disabled: t,
                        focusVisible: r,
                        focusVisibleClassName: n,
                        classes: i
                    } = e, o = (0, s.Z)({
                        root: ["root", t && "disabled", r && "focusVisible"]
                    }, Z, i);
                    return r && n && (o.root += ` ${n}`), o
                },
                V = (0, u.ZP)("button", {
                    name: "MuiButtonBase",
                    slot: "Root",
                    overridesResolver: (e, t) => t.root
                })({
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    boxSizing: "border-box",
                    WebkitTapHighlightColor: "transparent",
                    backgroundColor: "transparent",
                    outline: 0,
                    border: 0,
                    margin: 0,
                    borderRadius: 0,
                    padding: 0,
                    cursor: "pointer",
                    userSelect: "none",
                    verticalAlign: "middle",
                    MozAppearance: "none",
                    WebkitAppearance: "none",
                    textDecoration: "none",
                    color: "inherit",
                    "&::-moz-focus-inner": {
                        borderStyle: "none"
                    },
                    [`&.${M.disabled}`]: {
                        pointerEvents: "none",
                        cursor: "default"
                    },
                    "@media print": {
                        colorAdjust: "exact"
                    }
                }),
                j = o.forwardRef(function(e, t) {
                    let r = (0, l.Z)({
                            props: e,
                            name: "MuiButtonBase"
                        }),
                        {
                            action: s,
                            centerRipple: u = !1,
                            children: h,
                            className: d,
                            component: y = "button",
                            disabled: m = !1,
                            disableRipple: g = !1,
                            disableTouchRipple: b = !1,
                            focusRipple: v = !1,
                            LinkComponent: E = "a",
                            onBlur: w,
                            onClick: T,
                            onContextMenu: _,
                            onDragLeave: k,
                            onFocus: I,
                            onFocusVisible: P,
                            onKeyDown: O,
                            onKeyUp: x,
                            onMouseDown: A,
                            onMouseLeave: N,
                            onMouseUp: C,
                            onTouchEnd: B,
                            onTouchMove: R,
                            onTouchStart: U,
                            tabIndex: L = 0,
                            TouchRippleProps: Z,
                            touchRippleRef: M,
                            type: j
                        } = r,
                        W = (0, i.Z)(r, D),
                        K = o.useRef(null),
                        G = o.useRef(null),
                        $ = (0, c.Z)(G, M),
                        {
                            isFocusVisibleRef: z,
                            onFocus: X,
                            onBlur: q,
                            ref: Y
                        } = (0, p.Z)(),
                        [J, Q] = o.useState(!1);
                    m && J && Q(!1), o.useImperativeHandle(s, () => ({
                        focusVisible: () => {
                            Q(!0), K.current.focus()
                        }
                    }), []);
                    let [ee, et] = o.useState(!1);
                    o.useEffect(() => {
                        et(!0)
                    }, []);
                    let er = ee && !g && !m;

                    function en(e, t, r = b) {
                        return (0, f.Z)(n => (t && t(n), !r && G.current && G.current[e](n), !0))
                    }
                    o.useEffect(() => {
                        J && v && !g && ee && G.current.pulsate()
                    }, [g, v, J, ee]);
                    let ei = en("start", A),
                        eo = en("stop", _),
                        ea = en("stop", k),
                        es = en("stop", C),
                        eu = en("stop", e => {
                            J && e.preventDefault(), N && N(e)
                        }),
                        el = en("start", U),
                        ec = en("stop", B),
                        ef = en("stop", R),
                        ep = en("stop", e => {
                            q(e), !1 === z.current && Q(!1), w && w(e)
                        }, !1),
                        eh = (0, f.Z)(e => {
                            K.current || (K.current = e.currentTarget), X(e), !0 === z.current && (Q(!0), P && P(e)), I && I(e)
                        }),
                        ed = () => {
                            let e = K.current;
                            return y && "button" !== y && !("A" === e.tagName && e.href)
                        },
                        ey = o.useRef(!1),
                        em = (0, f.Z)(e => {
                            v && !ey.current && J && G.current && " " === e.key && (ey.current = !0, G.current.stop(e, () => {
                                G.current.start(e)
                            })), e.target === e.currentTarget && ed() && " " === e.key && e.preventDefault(), O && O(e), e.target === e.currentTarget && ed() && "Enter" === e.key && !m && (e.preventDefault(), T && T(e))
                        }),
                        eg = (0, f.Z)(e => {
                            v && " " === e.key && G.current && J && !e.defaultPrevented && (ey.current = !1, G.current.stop(e, () => {
                                G.current.pulsate(e)
                            })), x && x(e), T && e.target === e.currentTarget && ed() && " " === e.key && !e.defaultPrevented && T(e)
                        }),
                        eb = y;
                    "button" === eb && (W.href || W.to) && (eb = E);
                    let ev = {};
                    "button" === eb ? (ev.type = void 0 === j ? "button" : j, ev.disabled = m) : (W.href || W.to || (ev.role = "button"), m && (ev["aria-disabled"] = m));
                    let eE = (0, c.Z)(t, Y, K),
                        ew = (0, n.Z)({}, r, {
                            centerRipple: u,
                            component: y,
                            disabled: m,
                            disableRipple: g,
                            disableTouchRipple: b,
                            focusRipple: v,
                            tabIndex: L,
                            focusVisible: J
                        }),
                        eS = F(ew);
                    return (0, S.jsxs)(V, (0, n.Z)({
                        as: eb,
                        className: (0, a.Z)(eS.root, d),
                        ownerState: ew,
                        onBlur: ep,
                        onClick: T,
                        onContextMenu: eo,
                        onFocus: eh,
                        onKeyDown: em,
                        onKeyUp: eg,
                        onMouseDown: ei,
                        onMouseLeave: eu,
                        onMouseUp: es,
                        onDragLeave: ea,
                        onTouchEnd: ec,
                        onTouchMove: ef,
                        onTouchStart: el,
                        ref: eE,
                        tabIndex: m ? -1 : L,
                        type: j
                    }, ev, W, {
                        children: [h, er ? (0, S.jsx)(H, (0, n.Z)({
                            ref: $,
                            center: u
                        }, Z)) : null]
                    }))
                });
            var W = j
        },
        89394: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return A
                }
            });
            var n = r(20791),
                i = r(13428),
                o = r(2265),
                a = r(57042),
                s = r(95600),
                u = r(33449),
                l = r(28702),
                c = r(26931),
                f = r(72261),
                p = r(29872),
                h = r(87927),
                d = r(35843),
                y = r(26520),
                m = r(25702);

            function g(e) {
                return (0, m.Z)("MuiDialog", e)
            }
            let b = (0, y.Z)("MuiDialog", ["root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]);
            var v = r(57245),
                E = r(39350),
                w = r(41101),
                S = r(57437);
            let T = ["aria-describedby", "aria-labelledby", "BackdropComponent", "BackdropProps", "children", "className", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClose", "open", "PaperComponent", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps"],
                _ = (0, d.ZP)(E.Z, {
                    name: "MuiDialog",
                    slot: "Backdrop",
                    overrides: (e, t) => t.backdrop
                })({
                    zIndex: -1
                }),
                k = e => {
                    let {
                        classes: t,
                        scroll: r,
                        maxWidth: n,
                        fullWidth: i,
                        fullScreen: o
                    } = e, a = {
                        root: ["root"],
                        container: ["container", `scroll${(0,l.Z)(r)}`],
                        paper: ["paper", `paperScroll${(0,l.Z)(r)}`, `paperWidth${(0,l.Z)(String(n))}`, i && "paperFullWidth", o && "paperFullScreen"]
                    };
                    return (0, s.Z)(a, g, t)
                },
                I = (0, d.ZP)(c.Z, {
                    name: "MuiDialog",
                    slot: "Root",
                    overridesResolver: (e, t) => t.root
                })({
                    "@media print": {
                        position: "absolute !important"
                    }
                }),
                P = (0, d.ZP)("div", {
                    name: "MuiDialog",
                    slot: "Container",
                    overridesResolver: (e, t) => {
                        let {
                            ownerState: r
                        } = e;
                        return [t.container, t[`scroll${(0,l.Z)(r.scroll)}`]]
                    }
                })(({
                    ownerState: e
                }) => (0, i.Z)({
                    height: "100%",
                    "@media print": {
                        height: "auto"
                    },
                    outline: 0
                }, "paper" === e.scroll && {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }, "body" === e.scroll && {
                    overflowY: "auto",
                    overflowX: "hidden",
                    textAlign: "center",
                    "&:after": {
                        content: '""',
                        display: "inline-block",
                        verticalAlign: "middle",
                        height: "100%",
                        width: "0"
                    }
                })),
                O = (0, d.ZP)(p.Z, {
                    name: "MuiDialog",
                    slot: "Paper",
                    overridesResolver: (e, t) => {
                        let {
                            ownerState: r
                        } = e;
                        return [t.paper, t[`scrollPaper${(0,l.Z)(r.scroll)}`], t[`paperWidth${(0,l.Z)(String(r.maxWidth))}`], r.fullWidth && t.paperFullWidth, r.fullScreen && t.paperFullScreen]
                    }
                })(({
                    theme: e,
                    ownerState: t
                }) => (0, i.Z)({
                    margin: 32,
                    position: "relative",
                    overflowY: "auto",
                    "@media print": {
                        overflowY: "visible",
                        boxShadow: "none"
                    }
                }, "paper" === t.scroll && {
                    display: "flex",
                    flexDirection: "column",
                    maxHeight: "calc(100% - 64px)"
                }, "body" === t.scroll && {
                    display: "inline-block",
                    verticalAlign: "middle",
                    textAlign: "left"
                }, !t.maxWidth && {
                    maxWidth: "calc(100% - 64px)"
                }, "xs" === t.maxWidth && {
                    maxWidth: "px" === e.breakpoints.unit ? Math.max(e.breakpoints.values.xs, 444) : `max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`,
                    [`&.${b.paperScrollBody}`]: {
                        [e.breakpoints.down(Math.max(e.breakpoints.values.xs, 444) + 64)]: {
                            maxWidth: "calc(100% - 64px)"
                        }
                    }
                }, t.maxWidth && "xs" !== t.maxWidth && {
                    maxWidth: `${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`,
                    [`&.${b.paperScrollBody}`]: {
                        [e.breakpoints.down(e.breakpoints.values[t.maxWidth] + 64)]: {
                            maxWidth: "calc(100% - 64px)"
                        }
                    }
                }, t.fullWidth && {
                    width: "calc(100% - 64px)"
                }, t.fullScreen && {
                    margin: 0,
                    width: "100%",
                    maxWidth: "100%",
                    height: "100%",
                    maxHeight: "none",
                    borderRadius: 0,
                    [`&.${b.paperScrollBody}`]: {
                        margin: 0,
                        maxWidth: "100%"
                    }
                })),
                x = o.forwardRef(function(e, t) {
                    let r = (0, h.Z)({
                            props: e,
                            name: "MuiDialog"
                        }),
                        s = (0, w.Z)(),
                        l = {
                            enter: s.transitions.duration.enteringScreen,
                            exit: s.transitions.duration.leavingScreen
                        },
                        {
                            "aria-describedby": c,
                            "aria-labelledby": d,
                            BackdropComponent: y,
                            BackdropProps: m,
                            children: g,
                            className: b,
                            disableEscapeKeyDown: E = !1,
                            fullScreen: x = !1,
                            fullWidth: A = !1,
                            maxWidth: N = "sm",
                            onBackdropClick: C,
                            onClose: B,
                            open: R,
                            PaperComponent: U = p.Z,
                            PaperProps: H = {},
                            scroll: L = "paper",
                            TransitionComponent: Z = f.Z,
                            transitionDuration: M = l,
                            TransitionProps: D
                        } = r,
                        F = (0, n.Z)(r, T),
                        V = (0, i.Z)({}, r, {
                            disableEscapeKeyDown: E,
                            fullScreen: x,
                            fullWidth: A,
                            maxWidth: N,
                            scroll: L
                        }),
                        j = k(V),
                        W = o.useRef(),
                        K = (0, u.Z)(d),
                        G = o.useMemo(() => ({
                            titleId: K
                        }), [K]);
                    return (0, S.jsx)(I, (0, i.Z)({
                        className: (0, a.Z)(j.root, b),
                        closeAfterTransition: !0,
                        components: {
                            Backdrop: _
                        },
                        componentsProps: {
                            backdrop: (0, i.Z)({
                                transitionDuration: M,
                                as: y
                            }, m)
                        },
                        disableEscapeKeyDown: E,
                        onClose: B,
                        open: R,
                        ref: t,
                        onClick: e => {
                            W.current && (W.current = null, C && C(e), B && B(e, "backdropClick"))
                        },
                        ownerState: V
                    }, F, {
                        children: (0, S.jsx)(Z, (0, i.Z)({
                            appear: !0,
                            in: R,
                            timeout: M,
                            role: "presentation"
                        }, D, {
                            children: (0, S.jsx)(P, {
                                className: (0, a.Z)(j.container),
                                onMouseDown: e => {
                                    W.current = e.target === e.currentTarget
                                },
                                ownerState: V,
                                children: (0, S.jsx)(O, (0, i.Z)({
                                    as: U,
                                    elevation: 24,
                                    role: "dialog",
                                    "aria-describedby": c,
                                    "aria-labelledby": K
                                }, H, {
                                    className: (0, a.Z)(j.paper, H.className),
                                    ownerState: V,
                                    children: (0, S.jsx)(v.Z.Provider, {
                                        value: G,
                                        children: g
                                    })
                                }))
                            })
                        }))
                    }))
                });
            var A = x
        },
        57245: function(e, t, r) {
            "use strict";
            var n = r(2265);
            let i = n.createContext({});
            t.Z = i
        },
        26337: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return v
                }
            });
            var n = r(20791),
                i = r(13428),
                o = r(2265),
                a = r(57042),
                s = r(95600),
                u = r(35843),
                l = r(87927),
                c = r(26520),
                f = r(25702);

            function p(e) {
                return (0, f.Z)("MuiDialogContent", e)
            }(0, c.Z)("MuiDialogContent", ["root", "dividers"]);
            var h = r(92273),
                d = r(57437);
            let y = ["className", "dividers"],
                m = e => {
                    let {
                        classes: t,
                        dividers: r
                    } = e;
                    return (0, s.Z)({
                        root: ["root", r && "dividers"]
                    }, p, t)
                },
                g = (0, u.ZP)("div", {
                    name: "MuiDialogContent",
                    slot: "Root",
                    overridesResolver: (e, t) => {
                        let {
                            ownerState: r
                        } = e;
                        return [t.root, r.dividers && t.dividers]
                    }
                })(({
                    theme: e,
                    ownerState: t
                }) => (0, i.Z)({
                    flex: "1 1 auto",
                    WebkitOverflowScrolling: "touch",
                    overflowY: "auto",
                    padding: "20px 24px"
                }, t.dividers ? {
                    padding: "16px 24px",
                    borderTop: `1px solid ${(e.vars||e).palette.divider}`,
                    borderBottom: `1px solid ${(e.vars||e).palette.divider}`
                } : {
                    [`.${h.Z.root} + &`]: {
                        paddingTop: 0
                    }
                })),
                b = o.forwardRef(function(e, t) {
                    let r = (0, l.Z)({
                            props: e,
                            name: "MuiDialogContent"
                        }),
                        {
                            className: o,
                            dividers: s = !1
                        } = r,
                        u = (0, n.Z)(r, y),
                        c = (0, i.Z)({}, r, {
                            dividers: s
                        }),
                        f = m(c);
                    return (0, d.jsx)(g, (0, i.Z)({
                        className: (0, a.Z)(f.root, o),
                        ownerState: c,
                        ref: t
                    }, u))
                });
            var v = b
        },
        91797: function(e, t, r) {
            "use strict";
            var n = r(13428),
                i = r(20791),
                o = r(2265),
                a = r(57042),
                s = r(95600),
                u = r(43226),
                l = r(35843),
                c = r(87927),
                f = r(92273),
                p = r(57245),
                h = r(57437);
            let d = ["className", "id"],
                y = e => {
                    let {
                        classes: t
                    } = e;
                    return (0, s.Z)({
                        root: ["root"]
                    }, f.a, t)
                },
                m = (0, l.ZP)(u.Z, {
                    name: "MuiDialogTitle",
                    slot: "Root",
                    overridesResolver: (e, t) => t.root
                })({
                    padding: "16px 24px",
                    flex: "0 0 auto"
                }),
                g = o.forwardRef(function(e, t) {
                    let r = (0, c.Z)({
                            props: e,
                            name: "MuiDialogTitle"
                        }),
                        {
                            className: s,
                            id: u
                        } = r,
                        l = (0, i.Z)(r, d),
                        f = y(r),
                        {
                            titleId: g = u
                        } = o.useContext(p.Z);
                    return (0, h.jsx)(m, (0, n.Z)({
                        component: "h2",
                        className: (0, a.Z)(f.root, s),
                        ownerState: r,
                        ref: t,
                        variant: "h6",
                        id: null != u ? u : g
                    }, l))
                });
            t.Z = g
        },
        92273: function(e, t, r) {
            "use strict";
            r.d(t, {
                a: function() {
                    return o
                }
            });
            var n = r(26520),
                i = r(25702);

            function o(e) {
                return (0, i.Z)("MuiDialogTitle", e)
            }
            let a = (0, n.Z)("MuiDialogTitle", ["root"]);
            t.Z = a
        },
        72261: function(e, t, r) {
            "use strict";
            var n = r(13428),
                i = r(20791),
                o = r(2265),
                a = r(58731),
                s = r(41101),
                u = r(4439),
                l = r(37663),
                c = r(57437);
            let f = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"],
                p = {
                    entering: {
                        opacity: 1
                    },
                    entered: {
                        opacity: 1
                    }
                },
                h = o.forwardRef(function(e, t) {
                    let r = (0, s.Z)(),
                        h = {
                            enter: r.transitions.duration.enteringScreen,
                            exit: r.transitions.duration.leavingScreen
                        },
                        {
                            addEndListener: d,
                            appear: y = !0,
                            children: m,
                            easing: g,
                            in: b,
                            onEnter: v,
                            onEntered: E,
                            onEntering: w,
                            onExit: S,
                            onExited: T,
                            onExiting: _,
                            style: k,
                            timeout: I = h,
                            TransitionComponent: P = a.ZP
                        } = e,
                        O = (0, i.Z)(e, f),
                        x = o.useRef(null),
                        A = (0, l.Z)(x, m.ref, t),
                        N = e => t => {
                            if (e) {
                                let r = x.current;
                                void 0 === t ? e(r) : e(r, t)
                            }
                        },
                        C = N(w),
                        B = N((e, t) => {
                            (0, u.n)(e);
                            let n = (0, u.C)({
                                style: k,
                                timeout: I,
                                easing: g
                            }, {
                                mode: "enter"
                            });
                            e.style.webkitTransition = r.transitions.create("opacity", n), e.style.transition = r.transitions.create("opacity", n), v && v(e, t)
                        }),
                        R = N(E),
                        U = N(_),
                        H = N(e => {
                            let t = (0, u.C)({
                                style: k,
                                timeout: I,
                                easing: g
                            }, {
                                mode: "exit"
                            });
                            e.style.webkitTransition = r.transitions.create("opacity", t), e.style.transition = r.transitions.create("opacity", t), S && S(e)
                        }),
                        L = N(T);
                    return (0, c.jsx)(P, (0, n.Z)({
                        appear: y,
                        in: b,
                        nodeRef: x,
                        onEnter: B,
                        onEntered: R,
                        onEntering: C,
                        onExit: H,
                        onExited: L,
                        onExiting: U,
                        addEndListener: e => {
                            d && d(x.current, e)
                        },
                        timeout: I
                    }, O, {
                        children: (e, t) => o.cloneElement(m, (0, n.Z)({
                            style: (0, n.Z)({
                                opacity: 0,
                                visibility: "exited" !== e || b ? void 0 : "hidden"
                            }, p[e], k, m.props.style),
                            ref: A
                        }, t))
                    }))
                });
            t.Z = h
        },
        2592: function(e, t, r) {
            "use strict";
            var n = r(2265);
            let i = n.createContext(void 0);
            t.Z = i
        },
        54379: function(e, t, r) {
            "use strict";

            function n({
                props: e,
                states: t,
                muiFormControl: r
            }) {
                return t.reduce((t, n) => (t[n] = e[n], r && void 0 === e[n] && (t[n] = r[n]), t), {})
            }
            r.d(t, {
                Z: function() {
                    return n
                }
            })
        },
        59592: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return o
                }
            });
            var n = r(2265),
                i = r(2592);

            function o() {
                return n.useContext(i.Z)
            }
        },
        98599: function(e, t, r) {
            "use strict";
            r.d(t, {
                rA: function() {
                    return L
                },
                Ej: function() {
                    return H
                },
                ZP: function() {
                    return D
                },
                _o: function() {
                    return R
                },
                Gx: function() {
                    return B
                }
            });
            var n = r(20791),
                i = r(13428),
                o = r(30018),
                a = r(2265),
                s = r(57042),
                u = r(95600),
                l = r(54887),
                c = r(95137),
                f = r(88221),
                p = r(1091),
                h = r(78078),
                d = r(57437);
            let y = ["onChange", "maxRows", "minRows", "style", "value"];

            function m(e) {
                return parseInt(e, 10) || 0
            }
            let g = {
                shadow: {
                    visibility: "hidden",
                    position: "absolute",
                    overflow: "hidden",
                    height: 0,
                    top: 0,
                    left: 0,
                    transform: "translateZ(0)"
                }
            };

            function b(e) {
                return null == e || 0 === Object.keys(e).length || 0 === e.outerHeightStyle && !e.overflow
            }
            let v = a.forwardRef(function(e, t) {
                let {
                    onChange: r,
                    maxRows: o,
                    minRows: s = 1,
                    style: u,
                    value: v
                } = e, E = (0, n.Z)(e, y), {
                    current: w
                } = a.useRef(null != v), S = a.useRef(null), T = (0, c.Z)(t, S), _ = a.useRef(null), k = a.useRef(0), [I, P] = a.useState({
                    outerHeightStyle: 0
                }), O = a.useCallback(() => {
                    let t = S.current,
                        r = (0, f.Z)(t),
                        n = r.getComputedStyle(t);
                    if ("0px" === n.width) return {
                        outerHeightStyle: 0
                    };
                    let i = _.current;
                    i.style.width = n.width, i.value = t.value || e.placeholder || "x", "\n" === i.value.slice(-1) && (i.value += " ");
                    let a = n.boxSizing,
                        u = m(n.paddingBottom) + m(n.paddingTop),
                        l = m(n.borderBottomWidth) + m(n.borderTopWidth),
                        c = i.scrollHeight;
                    i.value = "x";
                    let p = i.scrollHeight,
                        h = c;
                    s && (h = Math.max(Number(s) * p, h)), o && (h = Math.min(Number(o) * p, h)), h = Math.max(h, p);
                    let d = h + ("border-box" === a ? u + l : 0),
                        y = 1 >= Math.abs(h - c);
                    return {
                        outerHeightStyle: d,
                        overflow: y
                    }
                }, [o, s, e.placeholder]), x = (e, t) => {
                    let {
                        outerHeightStyle: r,
                        overflow: n
                    } = t;
                    return k.current < 20 && (r > 0 && Math.abs((e.outerHeightStyle || 0) - r) > 1 || e.overflow !== n) ? (k.current += 1, {
                        overflow: n,
                        outerHeightStyle: r
                    }) : e
                }, A = a.useCallback(() => {
                    let e = O();
                    b(e) || P(t => x(t, e))
                }, [O]);
                return (0, p.Z)(() => {
                    let e, t;
                    let r = () => {
                            let e = O();
                            b(e) || l.flushSync(() => {
                                P(t => x(t, e))
                            })
                        },
                        n = () => {
                            k.current = 0, r()
                        },
                        i = (0, h.Z)(n),
                        o = S.current,
                        a = (0, f.Z)(o);
                    return a.addEventListener("resize", i), "undefined" != typeof ResizeObserver && (t = new ResizeObserver(n)).observe(o), () => {
                        i.clear(), cancelAnimationFrame(e), a.removeEventListener("resize", i), t && t.disconnect()
                    }
                }, [O]), (0, p.Z)(() => {
                    A()
                }), a.useEffect(() => {
                    k.current = 0
                }, [v]), (0, d.jsxs)(a.Fragment, {
                    children: [(0, d.jsx)("textarea", (0, i.Z)({
                        value: v,
                        onChange: e => {
                            k.current = 0, w || A(), r && r(e)
                        },
                        ref: T,
                        rows: s,
                        style: (0, i.Z)({
                            height: I.outerHeightStyle,
                            overflow: I.overflow ? "hidden" : void 0
                        }, u)
                    }, E)), (0, d.jsx)("textarea", {
                        "aria-hidden": !0,
                        className: e.className,
                        readOnly: !0,
                        ref: _,
                        tabIndex: -1,
                        style: (0, i.Z)({}, g.shadow, u, {
                            paddingTop: 0,
                            paddingBottom: 0
                        })
                    })]
                })
            });
            var E = r(43655),
                w = r(54379),
                S = r(2592),
                T = r(59592),
                _ = r(35843),
                k = r(87927),
                I = r(28702),
                P = r(37663),
                O = r(57613),
                x = r(54281),
                A = r(5454),
                N = r(97044);
            let C = ["aria-describedby", "autoComplete", "autoFocus", "className", "color", "components", "componentsProps", "defaultValue", "disabled", "disableInjectingGlobalStyles", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "slotProps", "slots", "startAdornment", "type", "value"],
                B = (e, t) => {
                    let {
                        ownerState: r
                    } = e;
                    return [t.root, r.formControl && t.formControl, r.startAdornment && t.adornedStart, r.endAdornment && t.adornedEnd, r.error && t.error, "small" === r.size && t.sizeSmall, r.multiline && t.multiline, r.color && t[`color${(0,I.Z)(r.color)}`], r.fullWidth && t.fullWidth, r.hiddenLabel && t.hiddenLabel]
                },
                R = (e, t) => {
                    let {
                        ownerState: r
                    } = e;
                    return [t.input, "small" === r.size && t.inputSizeSmall, r.multiline && t.inputMultiline, "search" === r.type && t.inputTypeSearch, r.startAdornment && t.inputAdornedStart, r.endAdornment && t.inputAdornedEnd, r.hiddenLabel && t.inputHiddenLabel]
                },
                U = e => {
                    let {
                        classes: t,
                        color: r,
                        disabled: n,
                        error: i,
                        endAdornment: o,
                        focused: a,
                        formControl: s,
                        fullWidth: l,
                        hiddenLabel: c,
                        multiline: f,
                        readOnly: p,
                        size: h,
                        startAdornment: d,
                        type: y
                    } = e, m = {
                        root: ["root", `color${(0,I.Z)(r)}`, n && "disabled", i && "error", l && "fullWidth", a && "focused", s && "formControl", h && "medium" !== h && `size${(0,I.Z)(h)}`, f && "multiline", d && "adornedStart", o && "adornedEnd", c && "hiddenLabel", p && "readOnly"],
                        input: ["input", n && "disabled", "search" === y && "inputTypeSearch", f && "inputMultiline", "small" === h && "inputSizeSmall", c && "inputHiddenLabel", d && "inputAdornedStart", o && "inputAdornedEnd", p && "readOnly"]
                    };
                    return (0, u.Z)(m, N.u, t)
                },
                H = (0, _.ZP)("div", {
                    name: "MuiInputBase",
                    slot: "Root",
                    overridesResolver: B
                })(({
                    theme: e,
                    ownerState: t
                }) => (0, i.Z)({}, e.typography.body1, {
                    color: (e.vars || e).palette.text.primary,
                    lineHeight: "1.4375em",
                    boxSizing: "border-box",
                    position: "relative",
                    cursor: "text",
                    display: "inline-flex",
                    alignItems: "center",
                    [`&.${N.Z.disabled}`]: {
                        color: (e.vars || e).palette.text.disabled,
                        cursor: "default"
                    }
                }, t.multiline && (0, i.Z)({
                    padding: "4px 0 5px"
                }, "small" === t.size && {
                    paddingTop: 1
                }), t.fullWidth && {
                    width: "100%"
                })),
                L = (0, _.ZP)("input", {
                    name: "MuiInputBase",
                    slot: "Input",
                    overridesResolver: R
                })(({
                    theme: e,
                    ownerState: t
                }) => {
                    let r = "light" === e.palette.mode,
                        n = (0, i.Z)({
                            color: "currentColor"
                        }, e.vars ? {
                            opacity: e.vars.opacity.inputPlaceholder
                        } : {
                            opacity: r ? .42 : .5
                        }, {
                            transition: e.transitions.create("opacity", {
                                duration: e.transitions.duration.shorter
                            })
                        }),
                        o = {
                            opacity: "0 !important"
                        },
                        a = e.vars ? {
                            opacity: e.vars.opacity.inputPlaceholder
                        } : {
                            opacity: r ? .42 : .5
                        };
                    return (0, i.Z)({
                        font: "inherit",
                        letterSpacing: "inherit",
                        color: "currentColor",
                        padding: "4px 0 5px",
                        border: 0,
                        boxSizing: "content-box",
                        background: "none",
                        height: "1.4375em",
                        margin: 0,
                        WebkitTapHighlightColor: "transparent",
                        display: "block",
                        minWidth: 0,
                        width: "100%",
                        animationName: "mui-auto-fill-cancel",
                        animationDuration: "10ms",
                        "&::-webkit-input-placeholder": n,
                        "&::-moz-placeholder": n,
                        "&:-ms-input-placeholder": n,
                        "&::-ms-input-placeholder": n,
                        "&:focus": {
                            outline: 0
                        },
                        "&:invalid": {
                            boxShadow: "none"
                        },
                        "&::-webkit-search-decoration": {
                            WebkitAppearance: "none"
                        },
                        [`label[data-shrink=false] + .${N.Z.formControl} &`]: {
                            "&::-webkit-input-placeholder": o,
                            "&::-moz-placeholder": o,
                            "&:-ms-input-placeholder": o,
                            "&::-ms-input-placeholder": o,
                            "&:focus::-webkit-input-placeholder": a,
                            "&:focus::-moz-placeholder": a,
                            "&:focus:-ms-input-placeholder": a,
                            "&:focus::-ms-input-placeholder": a
                        },
                        [`&.${N.Z.disabled}`]: {
                            opacity: 1,
                            WebkitTextFillColor: (e.vars || e).palette.text.disabled
                        },
                        "&:-webkit-autofill": {
                            animationDuration: "5000s",
                            animationName: "mui-auto-fill"
                        }
                    }, "small" === t.size && {
                        paddingTop: 1
                    }, t.multiline && {
                        height: "auto",
                        resize: "none",
                        padding: 0,
                        paddingTop: 0
                    }, "search" === t.type && {
                        MozAppearance: "textfield"
                    })
                }),
                Z = (0, d.jsx)(x.Z, {
                    styles: {
                        "@keyframes mui-auto-fill": {
                            from: {
                                display: "block"
                            }
                        },
                        "@keyframes mui-auto-fill-cancel": {
                            from: {
                                display: "block"
                            }
                        }
                    }
                }),
                M = a.forwardRef(function(e, t) {
                    var r;
                    let u = (0, k.Z)({
                            props: e,
                            name: "MuiInputBase"
                        }),
                        {
                            "aria-describedby": l,
                            autoComplete: c,
                            autoFocus: f,
                            className: p,
                            components: h = {},
                            componentsProps: y = {},
                            defaultValue: m,
                            disabled: g,
                            disableInjectingGlobalStyles: b,
                            endAdornment: _,
                            fullWidth: I = !1,
                            id: x,
                            inputComponent: N = "input",
                            inputProps: B = {},
                            inputRef: R,
                            maxRows: M,
                            minRows: D,
                            multiline: F = !1,
                            name: V,
                            onBlur: j,
                            onChange: W,
                            onClick: K,
                            onFocus: G,
                            onKeyDown: $,
                            onKeyUp: z,
                            placeholder: X,
                            readOnly: q,
                            renderSuffix: Y,
                            rows: J,
                            slotProps: Q = {},
                            slots: ee = {},
                            startAdornment: et,
                            type: er = "text",
                            value: en
                        } = u,
                        ei = (0, n.Z)(u, C),
                        eo = null != B.value ? B.value : en,
                        {
                            current: ea
                        } = a.useRef(null != eo),
                        es = a.useRef(),
                        eu = a.useCallback(e => {}, []),
                        el = (0, P.Z)(es, R, B.ref, eu),
                        [ec, ef] = a.useState(!1),
                        ep = (0, T.Z)(),
                        eh = (0, w.Z)({
                            props: u,
                            muiFormControl: ep,
                            states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
                        });
                    eh.focused = ep ? ep.focused : ec, a.useEffect(() => {
                        !ep && g && ec && (ef(!1), j && j())
                    }, [ep, g, ec, j]);
                    let ed = ep && ep.onFilled,
                        ey = ep && ep.onEmpty,
                        em = a.useCallback(e => {
                            (0, A.vd)(e) ? ed && ed(): ey && ey()
                        }, [ed, ey]);
                    (0, O.Z)(() => {
                        ea && em({
                            value: eo
                        })
                    }, [eo, em, ea]), a.useEffect(() => {
                        em(es.current)
                    }, []);
                    let eg = N,
                        eb = B;
                    F && "input" === eg && (eb = J ? (0, i.Z)({
                        type: void 0,
                        minRows: J,
                        maxRows: J
                    }, eb) : (0, i.Z)({
                        type: void 0,
                        maxRows: M,
                        minRows: D
                    }, eb), eg = v), a.useEffect(() => {
                        ep && ep.setAdornedStart(!!et)
                    }, [ep, et]);
                    let ev = (0, i.Z)({}, u, {
                            color: eh.color || "primary",
                            disabled: eh.disabled,
                            endAdornment: _,
                            error: eh.error,
                            focused: eh.focused,
                            formControl: ep,
                            fullWidth: I,
                            hiddenLabel: eh.hiddenLabel,
                            multiline: F,
                            size: eh.size,
                            startAdornment: et,
                            type: er
                        }),
                        eE = U(ev),
                        ew = ee.root || h.Root || H,
                        eS = Q.root || y.root || {},
                        eT = ee.input || h.Input || L;
                    return eb = (0, i.Z)({}, eb, null != (r = Q.input) ? r : y.input), (0, d.jsxs)(a.Fragment, {
                        children: [!b && Z, (0, d.jsxs)(ew, (0, i.Z)({}, eS, !(0, E.X)(ew) && {
                            ownerState: (0, i.Z)({}, ev, eS.ownerState)
                        }, {
                            ref: t,
                            onClick: e => {
                                es.current && e.currentTarget === e.target && es.current.focus(), K && K(e)
                            }
                        }, ei, {
                            className: (0, s.Z)(eE.root, eS.className, p, q && "MuiInputBase-readOnly"),
                            children: [et, (0, d.jsx)(S.Z.Provider, {
                                value: null,
                                children: (0, d.jsx)(eT, (0, i.Z)({
                                    ownerState: ev,
                                    "aria-invalid": eh.error,
                                    "aria-describedby": l,
                                    autoComplete: c,
                                    autoFocus: f,
                                    defaultValue: m,
                                    disabled: eh.disabled,
                                    id: x,
                                    onAnimationStart: e => {
                                        em("mui-auto-fill-cancel" === e.animationName ? es.current : {
                                            value: "x"
                                        })
                                    },
                                    name: V,
                                    placeholder: X,
                                    readOnly: q,
                                    required: eh.required,
                                    rows: J,
                                    value: eo,
                                    onKeyDown: $,
                                    onKeyUp: z,
                                    type: er
                                }, eb, !(0, E.X)(eT) && {
                                    as: eg,
                                    ownerState: (0, i.Z)({}, ev, eb.ownerState)
                                }, {
                                    ref: el,
                                    className: (0, s.Z)(eE.input, eb.className, q && "MuiInputBase-readOnly"),
                                    onBlur: e => {
                                        j && j(e), B.onBlur && B.onBlur(e), ep && ep.onBlur ? ep.onBlur(e) : ef(!1)
                                    },
                                    onChange: (e, ...t) => {
                                        if (!ea) {
                                            let t = e.target || es.current;
                                            if (null == t) throw Error((0, o.Z)(1));
                                            em({
                                                value: t.value
                                            })
                                        }
                                        B.onChange && B.onChange(e, ...t), W && W(e, ...t)
                                    },
                                    onFocus: e => {
                                        if (eh.disabled) {
                                            e.stopPropagation();
                                            return
                                        }
                                        G && G(e), B.onFocus && B.onFocus(e), ep && ep.onFocus ? ep.onFocus(e) : ef(!0)
                                    }
                                }))
                            }), _, Y ? Y((0, i.Z)({}, eh, {
                                startAdornment: et
                            })) : null]
                        }))]
                    })
                });
            var D = M
        },
        97044: function(e, t, r) {
            "use strict";
            r.d(t, {
                u: function() {
                    return o
                }
            });
            var n = r(26520),
                i = r(25702);

            function o(e) {
                return (0, i.Z)("MuiInputBase", e)
            }
            let a = (0, n.Z)("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]);
            t.Z = a
        },
        5454: function(e, t, r) {
            "use strict";

            function n(e) {
                return null != e && !(Array.isArray(e) && 0 === e.length)
            }

            function i(e, t = !1) {
                return e && (n(e.value) && "" !== e.value || t && n(e.defaultValue) && "" !== e.defaultValue)
            }

            function o(e) {
                return e.startAdornment
            }
            r.d(t, {
                B7: function() {
                    return o
                },
                vd: function() {
                    return i
                }
            })
        },
        26931: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return H
                }
            });
            var n = r(20791),
                i = r(13428),
                o = r(2265),
                a = r(57042),
                s = r(27282),
                u = r(95137),
                l = r(96278),
                c = r(78136),
                f = r(62940),
                p = r(55095),
                h = r(88221),
                d = r(60878);

            function y(e, t) {
                t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden")
            }

            function m(e) {
                return parseInt((0, h.Z)(e).getComputedStyle(e).paddingRight, 10) || 0
            }

            function g(e, t, r, n, i) {
                let o = [t, r, ...n];
                [].forEach.call(e.children, e => {
                    let t = -1 === o.indexOf(e),
                        r = ! function(e) {
                            let t = -1 !== ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName),
                                r = "INPUT" === e.tagName && "hidden" === e.getAttribute("type");
                            return t || r
                        }(e);
                    t && r && y(e, i)
                })
            }

            function b(e, t) {
                let r = -1;
                return e.some((e, n) => !!t(e) && (r = n, !0)), r
            }
            class v {
                constructor() {
                    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = []
                }
                add(e, t) {
                    let r = this.modals.indexOf(e);
                    if (-1 !== r) return r;
                    r = this.modals.length, this.modals.push(e), e.modalRef && y(e.modalRef, !1);
                    let n = function(e) {
                        let t = [];
                        return [].forEach.call(e.children, e => {
                            "true" === e.getAttribute("aria-hidden") && t.push(e)
                        }), t
                    }(t);
                    g(t, e.mount, e.modalRef, n, !0);
                    let i = b(this.containers, e => e.container === t);
                    return -1 !== i ? this.containers[i].modals.push(e) : this.containers.push({
                        modals: [e],
                        container: t,
                        restore: null,
                        hiddenSiblings: n
                    }), r
                }
                mount(e, t) {
                    let r = b(this.containers, t => -1 !== t.modals.indexOf(e)),
                        n = this.containers[r];
                    n.restore || (n.restore = function(e, t) {
                        let r = [],
                            n = e.container;
                        if (!t.disableScrollLock) {
                            let e;
                            if (function(e) {
                                    let t = (0, l.Z)(e);
                                    return t.body === e ? (0, h.Z)(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight
                                }(n)) {
                                let e = (0, d.Z)((0, l.Z)(n));
                                r.push({
                                    value: n.style.paddingRight,
                                    property: "padding-right",
                                    el: n
                                }), n.style.paddingRight = `${m(n)+e}px`;
                                let t = (0, l.Z)(n).querySelectorAll(".mui-fixed");
                                [].forEach.call(t, t => {
                                    r.push({
                                        value: t.style.paddingRight,
                                        property: "padding-right",
                                        el: t
                                    }), t.style.paddingRight = `${m(t)+e}px`
                                })
                            }
                            if (n.parentNode instanceof DocumentFragment) e = (0, l.Z)(n).body;
                            else {
                                let t = n.parentElement,
                                    r = (0, h.Z)(n);
                                e = (null == t ? void 0 : t.nodeName) === "HTML" && "scroll" === r.getComputedStyle(t).overflowY ? t : n
                            }
                            r.push({
                                value: e.style.overflow,
                                property: "overflow",
                                el: e
                            }, {
                                value: e.style.overflowX,
                                property: "overflow-x",
                                el: e
                            }, {
                                value: e.style.overflowY,
                                property: "overflow-y",
                                el: e
                            }), e.style.overflow = "hidden"
                        }
                        return () => {
                            r.forEach(({
                                value: e,
                                el: t,
                                property: r
                            }) => {
                                e ? t.style.setProperty(r, e) : t.style.removeProperty(r)
                            })
                        }
                    }(n, t))
                }
                remove(e, t = !0) {
                    let r = this.modals.indexOf(e);
                    if (-1 === r) return r;
                    let n = b(this.containers, t => -1 !== t.modals.indexOf(e)),
                        i = this.containers[n];
                    if (i.modals.splice(i.modals.indexOf(e), 1), this.modals.splice(r, 1), 0 === i.modals.length) i.restore && i.restore(), e.modalRef && y(e.modalRef, t), g(i.container, e.mount, e.modalRef, i.hiddenSiblings, !1), this.containers.splice(n, 1);
                    else {
                        let e = i.modals[i.modals.length - 1];
                        e.modalRef && y(e.modalRef, !1)
                    }
                    return r
                }
                isTopModal(e) {
                    return this.modals.length > 0 && this.modals[this.modals.length - 1] === e
                }
            }
            let E = new v;
            var w = r(95600),
                S = r(15084),
                T = r(57379),
                _ = r(35843),
                k = r(87927),
                I = r(39350),
                P = r(26520),
                O = r(25702);

            function x(e) {
                return (0, O.Z)("MuiModal", e)
            }(0, P.Z)("MuiModal", ["root", "hidden", "backdrop"]);
            var A = r(57437);
            let N = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme"],
                C = e => {
                    let {
                        open: t,
                        exited: r,
                        classes: n
                    } = e;
                    return (0, w.Z)({
                        root: ["root", !t && r && "hidden"],
                        backdrop: ["backdrop"]
                    }, x, n)
                },
                B = (0, _.ZP)("div", {
                    name: "MuiModal",
                    slot: "Root",
                    overridesResolver: (e, t) => {
                        let {
                            ownerState: r
                        } = e;
                        return [t.root, !r.open && r.exited && t.hidden]
                    }
                })(({
                    theme: e,
                    ownerState: t
                }) => (0, i.Z)({
                    position: "fixed",
                    zIndex: (e.vars || e).zIndex.modal,
                    right: 0,
                    bottom: 0,
                    top: 0,
                    left: 0
                }, !t.open && t.exited && {
                    visibility: "hidden"
                })),
                R = (0, _.ZP)(I.Z, {
                    name: "MuiModal",
                    slot: "Backdrop",
                    overridesResolver: (e, t) => t.backdrop
                })({
                    zIndex: -1
                }),
                U = o.forwardRef(function(e, t) {
                    var r, h, d, m, g, b;
                    let v = (0, k.Z)({
                            name: "MuiModal",
                            props: e
                        }),
                        {
                            BackdropComponent: w = R,
                            BackdropProps: _,
                            className: I,
                            closeAfterTransition: P = !1,
                            children: O,
                            container: x,
                            component: U,
                            components: H = {},
                            componentsProps: L = {},
                            disableAutoFocus: Z = !1,
                            disableEnforceFocus: M = !1,
                            disableEscapeKeyDown: D = !1,
                            disablePortal: F = !1,
                            disableRestoreFocus: V = !1,
                            disableScrollLock: j = !1,
                            hideBackdrop: W = !1,
                            keepMounted: K = !1,
                            onBackdropClick: G,
                            open: $,
                            slotProps: z,
                            slots: X
                        } = v,
                        q = (0, n.Z)(v, N),
                        Y = (0, i.Z)({}, v, {
                            closeAfterTransition: P,
                            disableAutoFocus: Z,
                            disableEnforceFocus: M,
                            disableEscapeKeyDown: D,
                            disablePortal: F,
                            disableRestoreFocus: V,
                            disableScrollLock: j,
                            hideBackdrop: W,
                            keepMounted: K
                        }),
                        {
                            getRootProps: J,
                            getBackdropProps: Q,
                            getTransitionProps: ee,
                            portalRef: et,
                            isTopModal: er,
                            exited: en,
                            hasTransition: ei
                        } = function(e) {
                            let {
                                container: t,
                                disableEscapeKeyDown: r = !1,
                                disableScrollLock: n = !1,
                                manager: a = E,
                                closeAfterTransition: s = !1,
                                onTransitionEnter: h,
                                onTransitionExited: d,
                                children: m,
                                onClose: g,
                                open: b,
                                rootRef: v
                            } = e, w = o.useRef({}), S = o.useRef(null), T = o.useRef(null), _ = (0, u.Z)(T, v), [k, I] = o.useState(!b), P = !!m && m.props.hasOwnProperty("in"), O = !0;
                            ("false" === e["aria-hidden"] || !1 === e["aria-hidden"]) && (O = !1);
                            let x = () => (0, l.Z)(S.current),
                                A = () => (w.current.modalRef = T.current, w.current.mount = S.current, w.current),
                                N = () => {
                                    a.mount(A(), {
                                        disableScrollLock: n
                                    }), T.current && (T.current.scrollTop = 0)
                                },
                                C = (0, c.Z)(() => {
                                    let e = ("function" == typeof t ? t() : t) || x().body;
                                    a.add(A(), e), T.current && N()
                                }),
                                B = o.useCallback(() => a.isTopModal(A()), [a]),
                                R = (0, c.Z)(e => {
                                    S.current = e, e && (b && B() ? N() : T.current && y(T.current, O))
                                }),
                                U = o.useCallback(() => {
                                    a.remove(A(), O)
                                }, [O, a]);
                            o.useEffect(() => () => {
                                U()
                            }, [U]), o.useEffect(() => {
                                b ? C() : P && s || U()
                            }, [b, U, P, s, C]);
                            let H = e => t => {
                                    var n;
                                    null == (n = e.onKeyDown) || n.call(e, t), "Escape" === t.key && 229 !== t.which && B() && !r && (t.stopPropagation(), g && g(t, "escapeKeyDown"))
                                },
                                L = e => t => {
                                    var r;
                                    null == (r = e.onClick) || r.call(e, t), t.target === t.currentTarget && g && g(t, "backdropClick")
                                };
                            return {
                                getRootProps: (t = {}) => {
                                    let r = (0, p._)(e);
                                    delete r.onTransitionEnter, delete r.onTransitionExited;
                                    let n = (0, i.Z)({}, r, t);
                                    return (0, i.Z)({
                                        role: "presentation"
                                    }, n, {
                                        onKeyDown: H(n),
                                        ref: _
                                    })
                                },
                                getBackdropProps: (e = {}) => (0, i.Z)({
                                    "aria-hidden": !0
                                }, e, {
                                    onClick: L(e),
                                    open: b
                                }),
                                getTransitionProps: () => ({
                                    onEnter: (0, f.Z)(() => {
                                        I(!1), h && h()
                                    }, null == m ? void 0 : m.props.onEnter),
                                    onExited: (0, f.Z)(() => {
                                        I(!0), d && d(), s && U()
                                    }, null == m ? void 0 : m.props.onExited)
                                }),
                                rootRef: _,
                                portalRef: R,
                                isTopModal: B,
                                exited: k,
                                hasTransition: P
                            }
                        }((0, i.Z)({}, Y, {
                            rootRef: t
                        })),
                        eo = (0, i.Z)({}, Y, {
                            exited: en
                        }),
                        ea = C(eo),
                        es = {};
                    if (void 0 === O.props.tabIndex && (es.tabIndex = "-1"), ei) {
                        let {
                            onEnter: e,
                            onExited: t
                        } = ee();
                        es.onEnter = e, es.onExited = t
                    }
                    let eu = null != (r = null != (h = null == X ? void 0 : X.root) ? h : H.Root) ? r : B,
                        el = null != (d = null != (m = null == X ? void 0 : X.backdrop) ? m : H.Backdrop) ? d : w,
                        ec = null != (g = null == z ? void 0 : z.root) ? g : L.root,
                        ef = null != (b = null == z ? void 0 : z.backdrop) ? b : L.backdrop,
                        ep = (0, s.y)({
                            elementType: eu,
                            externalSlotProps: ec,
                            externalForwardedProps: q,
                            getSlotProps: J,
                            additionalProps: {
                                ref: t,
                                as: U
                            },
                            ownerState: eo,
                            className: (0, a.Z)(I, null == ec ? void 0 : ec.className, null == ea ? void 0 : ea.root, !eo.open && eo.exited && (null == ea ? void 0 : ea.hidden))
                        }),
                        eh = (0, s.y)({
                            elementType: el,
                            externalSlotProps: ef,
                            additionalProps: _,
                            getSlotProps: e => Q((0, i.Z)({}, e, {
                                onClick: t => {
                                    G && G(t), null != e && e.onClick && e.onClick(t)
                                }
                            })),
                            className: (0, a.Z)(null == ef ? void 0 : ef.className, null == _ ? void 0 : _.className, null == ea ? void 0 : ea.backdrop),
                            ownerState: eo
                        });
                    return K || $ || ei && !en ? (0, A.jsx)(T.h, {
                        ref: et,
                        container: x,
                        disablePortal: F,
                        children: (0, A.jsxs)(eu, (0, i.Z)({}, ep, {
                            children: [!W && w ? (0, A.jsx)(el, (0, i.Z)({}, eh)) : null, (0, A.jsx)(S.i, {
                                disableEnforceFocus: M,
                                disableAutoFocus: Z,
                                disableRestoreFocus: V,
                                isEnabled: er,
                                open: $,
                                children: o.cloneElement(O, es)
                            })]
                        }))
                    }) : null
                });
            var H = U
        },
        29872: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return E
                }
            });
            var n = r(20791),
                i = r(13428),
                o = r(2265),
                a = r(57042),
                s = r(95600),
                u = r(89975),
                l = r(35843),
                c = e => ((e < 1 ? 5.11916 * e ** 2 : 4.5 * Math.log(e + 1) + 2) / 100).toFixed(2),
                f = r(87927),
                p = r(26520),
                h = r(25702);

            function d(e) {
                return (0, h.Z)("MuiPaper", e)
            }(0, p.Z)("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
            var y = r(57437);
            let m = ["className", "component", "elevation", "square", "variant"],
                g = e => {
                    let {
                        square: t,
                        elevation: r,
                        variant: n,
                        classes: i
                    } = e, o = {
                        root: ["root", n, !t && "rounded", "elevation" === n && `elevation${r}`]
                    };
                    return (0, s.Z)(o, d, i)
                },
                b = (0, l.ZP)("div", {
                    name: "MuiPaper",
                    slot: "Root",
                    overridesResolver: (e, t) => {
                        let {
                            ownerState: r
                        } = e;
                        return [t.root, t[r.variant], !r.square && t.rounded, "elevation" === r.variant && t[`elevation${r.elevation}`]]
                    }
                })(({
                    theme: e,
                    ownerState: t
                }) => {
                    var r;
                    return (0, i.Z)({
                        backgroundColor: (e.vars || e).palette.background.paper,
                        color: (e.vars || e).palette.text.primary,
                        transition: e.transitions.create("box-shadow")
                    }, !t.square && {
                        borderRadius: e.shape.borderRadius
                    }, "outlined" === t.variant && {
                        border: `1px solid ${(e.vars||e).palette.divider}`
                    }, "elevation" === t.variant && (0, i.Z)({
                        boxShadow: (e.vars || e).shadows[t.elevation]
                    }, !e.vars && "dark" === e.palette.mode && {
                        backgroundImage: `linear-gradient(${(0,u.Fq)("#fff",c(t.elevation))}, ${(0,u.Fq)("#fff",c(t.elevation))})`
                    }, e.vars && {
                        backgroundImage: null == (r = e.vars.overlays) ? void 0 : r[t.elevation]
                    }))
                }),
                v = o.forwardRef(function(e, t) {
                    let r = (0, f.Z)({
                            props: e,
                            name: "MuiPaper"
                        }),
                        {
                            className: o,
                            component: s = "div",
                            elevation: u = 1,
                            square: l = !1,
                            variant: c = "elevation"
                        } = r,
                        p = (0, n.Z)(r, m),
                        h = (0, i.Z)({}, r, {
                            component: s,
                            elevation: u,
                            square: l,
                            variant: c
                        }),
                        d = g(h);
                    return (0, y.jsx)(b, (0, i.Z)({
                        as: s,
                        ownerState: h,
                        className: (0, a.Z)(d.root, o),
                        ref: t
                    }, p))
                });
            var E = v
        },
        8088: function(e, t, r) {
            "use strict";
            var n = r(13428),
                i = r(20791),
                o = r(2265),
                a = r(58731),
                s = r(80494),
                u = r(37663),
                l = r(41101),
                c = r(4439),
                f = r(26649),
                p = r(57437);
            let h = ["addEndListener", "appear", "children", "container", "direction", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];

            function d(e, t, r) {
                let n = "function" == typeof r ? r() : r,
                    i = function(e, t, r) {
                        let n;
                        let i = t.getBoundingClientRect(),
                            o = r && r.getBoundingClientRect(),
                            a = (0, f.Z)(t);
                        if (t.fakeTransform) n = t.fakeTransform;
                        else {
                            let e = a.getComputedStyle(t);
                            n = e.getPropertyValue("-webkit-transform") || e.getPropertyValue("transform")
                        }
                        let s = 0,
                            u = 0;
                        if (n && "none" !== n && "string" == typeof n) {
                            let e = n.split("(")[1].split(")")[0].split(",");
                            s = parseInt(e[4], 10), u = parseInt(e[5], 10)
                        }
                        return "left" === e ? o ? `translateX(${o.right+s-i.left}px)` : `translateX(${a.innerWidth+s-i.left}px)` : "right" === e ? o ? `translateX(-${i.right-o.left-s}px)` : `translateX(-${i.left+i.width-s}px)` : "up" === e ? o ? `translateY(${o.bottom+u-i.top}px)` : `translateY(${a.innerHeight+u-i.top}px)` : o ? `translateY(-${i.top-o.top+i.height-u}px)` : `translateY(-${i.top+i.height-u}px)`
                    }(e, t, n);
                i && (t.style.webkitTransform = i, t.style.transform = i)
            }
            let y = o.forwardRef(function(e, t) {
                let r = (0, l.Z)(),
                    y = {
                        enter: r.transitions.easing.easeOut,
                        exit: r.transitions.easing.sharp
                    },
                    m = {
                        enter: r.transitions.duration.enteringScreen,
                        exit: r.transitions.duration.leavingScreen
                    },
                    {
                        addEndListener: g,
                        appear: b = !0,
                        children: v,
                        container: E,
                        direction: w = "down",
                        easing: S = y,
                        in: T,
                        onEnter: _,
                        onEntered: k,
                        onEntering: I,
                        onExit: P,
                        onExited: O,
                        onExiting: x,
                        style: A,
                        timeout: N = m,
                        TransitionComponent: C = a.ZP
                    } = e,
                    B = (0, i.Z)(e, h),
                    R = o.useRef(null),
                    U = (0, u.Z)(v.ref, R, t),
                    H = e => t => {
                        e && (void 0 === t ? e(R.current) : e(R.current, t))
                    },
                    L = H((e, t) => {
                        d(w, e, E), (0, c.n)(e), _ && _(e, t)
                    }),
                    Z = H((e, t) => {
                        let i = (0, c.C)({
                            timeout: N,
                            style: A,
                            easing: S
                        }, {
                            mode: "enter"
                        });
                        e.style.webkitTransition = r.transitions.create("-webkit-transform", (0, n.Z)({}, i)), e.style.transition = r.transitions.create("transform", (0, n.Z)({}, i)), e.style.webkitTransform = "none", e.style.transform = "none", I && I(e, t)
                    }),
                    M = H(k),
                    D = H(x),
                    F = H(e => {
                        let t = (0, c.C)({
                            timeout: N,
                            style: A,
                            easing: S
                        }, {
                            mode: "exit"
                        });
                        e.style.webkitTransition = r.transitions.create("-webkit-transform", t), e.style.transition = r.transitions.create("transform", t), d(w, e, E), P && P(e)
                    }),
                    V = H(e => {
                        e.style.webkitTransition = "", e.style.transition = "", O && O(e)
                    }),
                    j = o.useCallback(() => {
                        R.current && d(w, R.current, E)
                    }, [w, E]);
                return o.useEffect(() => {
                    if (T || "down" === w || "right" === w) return;
                    let e = (0, s.Z)(() => {
                            R.current && d(w, R.current, E)
                        }),
                        t = (0, f.Z)(R.current);
                    return t.addEventListener("resize", e), () => {
                        e.clear(), t.removeEventListener("resize", e)
                    }
                }, [w, T, E]), o.useEffect(() => {
                    T || j()
                }, [T, j]), (0, p.jsx)(C, (0, n.Z)({
                    nodeRef: R,
                    onEnter: L,
                    onEntered: M,
                    onEntering: Z,
                    onExit: F,
                    onExited: V,
                    onExiting: D,
                    addEndListener: e => {
                        g && g(R.current, e)
                    },
                    appear: b,
                    in: T,
                    timeout: N
                }, B, {
                    children: (e, t) => o.cloneElement(v, (0, n.Z)({
                        ref: U,
                        style: (0, n.Z)({
                            visibility: "exited" !== e || T ? void 0 : "hidden"
                        }, A, v.props.style)
                    }, t))
                }))
            });
            t.Z = y
        },
        6785: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return v
                }
            });
            var n = r(13428),
                i = r(20791),
                o = r(2265),
                a = r(57042),
                s = r(95600),
                u = r(28702),
                l = r(87927),
                c = r(35843),
                f = r(26520),
                p = r(25702);

            function h(e) {
                return (0, p.Z)("MuiSvgIcon", e)
            }(0, f.Z)("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
            var d = r(57437);
            let y = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"],
                m = e => {
                    let {
                        color: t,
                        fontSize: r,
                        classes: n
                    } = e, i = {
                        root: ["root", "inherit" !== t && `color${(0,u.Z)(t)}`, `fontSize${(0,u.Z)(r)}`]
                    };
                    return (0, s.Z)(i, h, n)
                },
                g = (0, c.ZP)("svg", {
                    name: "MuiSvgIcon",
                    slot: "Root",
                    overridesResolver: (e, t) => {
                        let {
                            ownerState: r
                        } = e;
                        return [t.root, "inherit" !== r.color && t[`color${(0,u.Z)(r.color)}`], t[`fontSize${(0,u.Z)(r.fontSize)}`]]
                    }
                })(({
                    theme: e,
                    ownerState: t
                }) => {
                    var r, n, i, o, a, s, u, l, c, f, p, h, d;
                    return {
                        userSelect: "none",
                        width: "1em",
                        height: "1em",
                        display: "inline-block",
                        fill: t.hasSvgAsChild ? void 0 : "currentColor",
                        flexShrink: 0,
                        transition: null == (r = e.transitions) || null == (n = r.create) ? void 0 : n.call(r, "fill", {
                            duration: null == (i = e.transitions) || null == (i = i.duration) ? void 0 : i.shorter
                        }),
                        fontSize: ({
                            inherit: "inherit",
                            small: (null == (o = e.typography) || null == (a = o.pxToRem) ? void 0 : a.call(o, 20)) || "1.25rem",
                            medium: (null == (s = e.typography) || null == (u = s.pxToRem) ? void 0 : u.call(s, 24)) || "1.5rem",
                            large: (null == (l = e.typography) || null == (c = l.pxToRem) ? void 0 : c.call(l, 35)) || "2.1875rem"
                        })[t.fontSize],
                        color: null != (f = null == (p = (e.vars || e).palette) || null == (p = p[t.color]) ? void 0 : p.main) ? f : ({
                            action: null == (h = (e.vars || e).palette) || null == (h = h.action) ? void 0 : h.active,
                            disabled: null == (d = (e.vars || e).palette) || null == (d = d.action) ? void 0 : d.disabled,
                            inherit: void 0
                        })[t.color]
                    }
                }),
                b = o.forwardRef(function(e, t) {
                    let r = (0, l.Z)({
                            props: e,
                            name: "MuiSvgIcon"
                        }),
                        {
                            children: s,
                            className: u,
                            color: c = "inherit",
                            component: f = "svg",
                            fontSize: p = "medium",
                            htmlColor: h,
                            inheritViewBox: b = !1,
                            titleAccess: v,
                            viewBox: E = "0 0 24 24"
                        } = r,
                        w = (0, i.Z)(r, y),
                        S = o.isValidElement(s) && "svg" === s.type,
                        T = (0, n.Z)({}, r, {
                            color: c,
                            component: f,
                            fontSize: p,
                            instanceFontSize: e.fontSize,
                            inheritViewBox: b,
                            viewBox: E,
                            hasSvgAsChild: S
                        }),
                        _ = {};
                    b || (_.viewBox = E);
                    let k = m(T);
                    return (0, d.jsxs)(g, (0, n.Z)({
                        as: f,
                        className: (0, a.Z)(k.root, u),
                        focusable: "false",
                        color: h,
                        "aria-hidden": !v || void 0,
                        role: v ? "img" : void 0,
                        ref: t
                    }, _, w, S && s.props, {
                        ownerState: T,
                        children: [S ? s.props.children : s, v ? (0, d.jsx)("title", {
                            children: v
                        }) : null]
                    }))
                });
            b.muiName = "SvgIcon";
            var v = b
        },
        43226: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return T
                }
            });
            var n = r(20791),
                i = r(13428),
                o = r(2265),
                a = r(57042),
                s = r(43381),
                u = r(95600),
                l = r(35843),
                c = r(87927),
                f = r(28702),
                p = r(26520),
                h = r(25702);

            function d(e) {
                return (0, h.Z)("MuiTypography", e)
            }(0, p.Z)("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
            var y = r(57437);
            let m = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"],
                g = e => {
                    let {
                        align: t,
                        gutterBottom: r,
                        noWrap: n,
                        paragraph: i,
                        variant: o,
                        classes: a
                    } = e, s = {
                        root: ["root", o, "inherit" !== e.align && `align${(0,f.Z)(t)}`, r && "gutterBottom", n && "noWrap", i && "paragraph"]
                    };
                    return (0, u.Z)(s, d, a)
                },
                b = (0, l.ZP)("span", {
                    name: "MuiTypography",
                    slot: "Root",
                    overridesResolver: (e, t) => {
                        let {
                            ownerState: r
                        } = e;
                        return [t.root, r.variant && t[r.variant], "inherit" !== r.align && t[`align${(0,f.Z)(r.align)}`], r.noWrap && t.noWrap, r.gutterBottom && t.gutterBottom, r.paragraph && t.paragraph]
                    }
                })(({
                    theme: e,
                    ownerState: t
                }) => (0, i.Z)({
                    margin: 0
                }, "inherit" === t.variant && {
                    font: "inherit"
                }, "inherit" !== t.variant && e.typography[t.variant], "inherit" !== t.align && {
                    textAlign: t.align
                }, t.noWrap && {
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                }, t.gutterBottom && {
                    marginBottom: "0.35em"
                }, t.paragraph && {
                    marginBottom: 16
                })),
                v = {
                    h1: "h1",
                    h2: "h2",
                    h3: "h3",
                    h4: "h4",
                    h5: "h5",
                    h6: "h6",
                    subtitle1: "h6",
                    subtitle2: "h6",
                    body1: "p",
                    body2: "p",
                    inherit: "p"
                },
                E = {
                    primary: "primary.main",
                    textPrimary: "text.primary",
                    secondary: "secondary.main",
                    textSecondary: "text.secondary",
                    error: "error.main"
                },
                w = e => E[e] || e,
                S = o.forwardRef(function(e, t) {
                    let r = (0, c.Z)({
                            props: e,
                            name: "MuiTypography"
                        }),
                        o = w(r.color),
                        u = (0, s.Z)((0, i.Z)({}, r, {
                            color: o
                        })),
                        {
                            align: l = "inherit",
                            className: f,
                            component: p,
                            gutterBottom: h = !1,
                            noWrap: d = !1,
                            paragraph: E = !1,
                            variant: S = "body1",
                            variantMapping: T = v
                        } = u,
                        _ = (0, n.Z)(u, m),
                        k = (0, i.Z)({}, u, {
                            align: l,
                            color: o,
                            className: f,
                            component: p,
                            gutterBottom: h,
                            noWrap: d,
                            paragraph: E,
                            variant: S,
                            variantMapping: T
                        }),
                        I = p || (E ? "p" : T[S] || v[S]) || "span",
                        P = g(k);
                    return (0, y.jsx)(b, (0, i.Z)({
                        as: I,
                        ref: t,
                        ownerState: k,
                        className: (0, a.Z)(P.root, f)
                    }, _))
                });
            var T = S
        },
        35843: function(e, t, r) {
            "use strict";
            r.d(t, {
                Dz: function() {
                    return s
                },
                FO: function() {
                    return a
                }
            });
            var n = r(61047),
                i = r(53794),
                o = r(53469);
            let a = e => (0, n.x9)(e) && "classes" !== e,
                s = n.x9,
                u = (0, n.ZP)({
                    themeId: o.Z,
                    defaultTheme: i.Z,
                    rootShouldForwardProp: a
                });
            t.ZP = u
        },
        41101: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return a
                }
            }), r(2265);
            var n = r(95270),
                i = r(53794),
                o = r(53469);

            function a() {
                let e = (0, n.Z)(i.Z);
                return e[o.Z] || e
            }
        },
        4439: function(e, t, r) {
            "use strict";
            r.d(t, {
                C: function() {
                    return i
                },
                n: function() {
                    return n
                }
            });
            let n = e => e.scrollTop;

            function i(e, t) {
                var r, n;
                let {
                    timeout: i,
                    easing: o,
                    style: a = {}
                } = e;
                return {
                    duration: null != (r = a.transitionDuration) ? r : "number" == typeof i ? i : i[t.mode] || 0,
                    easing: null != (n = a.transitionTimingFunction) ? n : "object" == typeof o ? o[t.mode] : o,
                    delay: a.transitionDelay
                }
            }
        },
        22135: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return l
                }
            });
            var n, i = r(2265),
                o = r(44809),
                a = r(51529),
                s = r(57613);
            let u = (n || (n = r.t(i, 2))).useSyncExternalStore;

            function l(e, t = {}) {
                let r = (0, o.Z)(),
                    n = "undefined" != typeof window && void 0 !== window.matchMedia,
                    {
                        defaultMatches: l = !1,
                        matchMedia: c = n ? window.matchMedia : null,
                        ssrMatchMedia: f = null,
                        noSsr: p = !1
                    } = (0, a.Z)({
                        name: "MuiUseMediaQuery",
                        props: t,
                        theme: r
                    }),
                    h = "function" == typeof e ? e(r) : e;
                h = h.replace(/^@media( ?)/m, "");
                let d = (void 0 !== u ? function(e, t, r, n, o) {
                    let a = i.useCallback(() => t, [t]),
                        s = i.useMemo(() => {
                            if (o && r) return () => r(e).matches;
                            if (null !== n) {
                                let {
                                    matches: t
                                } = n(e);
                                return () => t
                            }
                            return a
                        }, [a, e, n, o, r]),
                        [l, c] = i.useMemo(() => {
                            if (null === r) return [a, () => () => {}];
                            let t = r(e);
                            return [() => t.matches, e => (t.addListener(e), () => {
                                t.removeListener(e)
                            })]
                        }, [a, r, e]),
                        f = u(c, l, s);
                    return f
                } : function(e, t, r, n, o) {
                    let [a, u] = i.useState(() => o && r ? r(e).matches : n ? n(e).matches : t);
                    return (0, s.Z)(() => {
                        let t = !0;
                        if (!r) return;
                        let n = r(e),
                            i = () => {
                                t && u(n.matches)
                            };
                        return i(), n.addListener(i), () => {
                            t = !1, n.removeListener(i)
                        }
                    }, [e, r]), a
                })(h, l, c, f, p);
                return d
            }
        },
        28702: function(e, t, r) {
            "use strict";
            var n = r(61380);
            t.Z = n.Z
        },
        38173: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return s
                }
            });
            var n = r(13428),
                i = r(2265),
                o = r(6785),
                a = r(57437);

            function s(e, t) {
                function r(r, i) {
                    return (0, a.jsx)(o.Z, (0, n.Z)({
                        "data-testid": `${t}Icon`,
                        ref: i
                    }, r, {
                        children: e
                    }))
                }
                return r.muiName = o.Z.muiName, i.memo(i.forwardRef(r))
            }
        },
        80494: function(e, t, r) {
            "use strict";
            var n = r(78078);
            t.Z = n.Z
        },
        43135: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                capitalize: function() {
                    return i.Z
                },
                createChainedFunction: function() {
                    return o
                },
                createSvgIcon: function() {
                    return a.Z
                },
                debounce: function() {
                    return s.Z
                },
                deprecatedPropType: function() {
                    return u
                },
                isMuiElement: function() {
                    return l.Z
                },
                ownerDocument: function() {
                    return c.Z
                },
                ownerWindow: function() {
                    return f.Z
                },
                requirePropFactory: function() {
                    return p
                },
                setRef: function() {
                    return h
                },
                unstable_ClassNameGenerator: function() {
                    return w
                },
                unstable_useEnhancedEffect: function() {
                    return d.Z
                },
                unstable_useId: function() {
                    return y.Z
                },
                unsupportedProp: function() {
                    return m
                },
                useControlled: function() {
                    return g.Z
                },
                useEventCallback: function() {
                    return b.Z
                },
                useForkRef: function() {
                    return v.Z
                },
                useIsFocusVisible: function() {
                    return E.Z
                }
            });
            var n = r(25097),
                i = r(28702),
                o = r(62940).Z,
                a = r(38173),
                s = r(80494),
                u = function(e, t) {
                    return () => null
                },
                l = r(10673),
                c = r(53931),
                f = r(26649);
            r(13428);
            var p = function(e, t) {
                    return () => null
                },
                h = r(13840).Z,
                d = r(57613),
                y = r(62916),
                m = function(e, t, r, n, i) {
                    return null
                },
                g = r(73292),
                b = r(96),
                v = r(37663),
                E = r(53308);
            let w = {
                configure: e => {
                    n.Z.configure(e)
                }
            }
        },
        10673: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return i
                }
            });
            var n = r(2265),
                i = function(e, t) {
                    var r, i;
                    return n.isValidElement(e) && -1 !== t.indexOf(null != (r = e.type.muiName) ? r : null == (i = e.type) || null == (i = i._payload) || null == (i = i.value) ? void 0 : i.muiName)
                }
        },
        53931: function(e, t, r) {
            "use strict";
            var n = r(96278);
            t.Z = n.Z
        },
        26649: function(e, t, r) {
            "use strict";
            var n = r(88221);
            t.Z = n.Z
        },
        73292: function(e, t, r) {
            "use strict";
            var n = r(34625);
            t.Z = n.Z
        },
        57613: function(e, t, r) {
            "use strict";
            var n = r(1091);
            t.Z = n.Z
        },
        96: function(e, t, r) {
            "use strict";
            var n = r(78136);
            t.Z = n.Z
        },
        37663: function(e, t, r) {
            "use strict";
            var n = r(95137);
            t.Z = n.Z
        },
        62916: function(e, t, r) {
            "use strict";
            var n = r(33449);
            t.Z = n.Z
        },
        53308: function(e, t, r) {
            "use strict";
            let n;
            r.d(t, {
                Z: function() {
                    return f
                }
            });
            var i = r(2265);
            let o = !0,
                a = !1,
                s = {
                    text: !0,
                    search: !0,
                    url: !0,
                    tel: !0,
                    email: !0,
                    password: !0,
                    number: !0,
                    date: !0,
                    month: !0,
                    week: !0,
                    time: !0,
                    datetime: !0,
                    "datetime-local": !0
                };

            function u(e) {
                e.metaKey || e.altKey || e.ctrlKey || (o = !0)
            }

            function l() {
                o = !1
            }

            function c() {
                "hidden" === this.visibilityState && a && (o = !0)
            }
            var f = function() {
                let e = i.useCallback(e => {
                        if (null != e) {
                            var t;
                            (t = e.ownerDocument).addEventListener("keydown", u, !0), t.addEventListener("mousedown", l, !0), t.addEventListener("pointerdown", l, !0), t.addEventListener("touchstart", l, !0), t.addEventListener("visibilitychange", c, !0)
                        }
                    }, []),
                    t = i.useRef(!1);
                return {
                    isFocusVisibleRef: t,
                    onFocus: function(e) {
                        return !! function(e) {
                            let {
                                target: t
                            } = e;
                            try {
                                return t.matches(":focus-visible")
                            } catch (e) {}
                            return o || function(e) {
                                let {
                                    type: t,
                                    tagName: r
                                } = e;
                                return "INPUT" === r && !!s[t] && !e.readOnly || "TEXTAREA" === r && !e.readOnly || !!e.isContentEditable
                            }(t)
                        }(e) && (t.current = !0, !0)
                    },
                    onBlur: function() {
                        return !!t.current && (a = !0, window.clearTimeout(n), n = window.setTimeout(() => {
                            a = !1
                        }, 100), t.current = !1, !0)
                    },
                    ref: e
                }
            }
        },
        89770: function(e, t, r) {
            "use strict";

            function n() {
                return (n = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            r.d(t, {
                ZP: function() {
                    return g
                },
                Co: function() {
                    return b
                }
            });
            var i = r(2265),
                o = r(44935),
                a = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
                s = (0, o.Z)(function(e) {
                    return a.test(e) || 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && 91 > e.charCodeAt(2)
                }),
                u = r(86375),
                l = r(94645),
                c = r(68654),
                f = r(7599),
                p = function(e) {
                    return "theme" !== e
                },
                h = function(e) {
                    return "string" == typeof e && e.charCodeAt(0) > 96 ? s : p
                },
                d = function(e, t, r) {
                    var n;
                    if (t) {
                        var i = t.shouldForwardProp;
                        n = e.__emotion_forwardProp && i ? function(t) {
                            return e.__emotion_forwardProp(t) && i(t)
                        } : i
                    }
                    return "function" != typeof n && r && (n = e.__emotion_forwardProp), n
                },
                y = function(e) {
                    var t = e.cache,
                        r = e.serialized,
                        n = e.isStringTag;
                    return (0, l.hC)(t, r, n), (0, f.L)(function() {
                        return (0, l.My)(t, r, n)
                    }), null
                },
                m = (function e(t, r) {
                    var o, a, s = t.__emotion_real === t,
                        f = s && t.__emotion_base || t;
                    void 0 !== r && (o = r.label, a = r.target);
                    var p = d(t, r, s),
                        m = p || h(f),
                        g = !m("as");
                    return function() {
                        var b = arguments,
                            v = s && void 0 !== t.__emotion_styles ? t.__emotion_styles.slice(0) : [];
                        if (void 0 !== o && v.push("label:" + o + ";"), null == b[0] || void 0 === b[0].raw) v.push.apply(v, b);
                        else {
                            v.push(b[0][0]);
                            for (var E = b.length, w = 1; w < E; w++) v.push(b[w], b[0][w])
                        }
                        var S = (0, u.w)(function(e, t, r) {
                            var n = g && e.as || f,
                                o = "",
                                s = [],
                                d = e;
                            if (null == e.theme) {
                                for (var b in d = {}, e) d[b] = e[b];
                                d.theme = i.useContext(u.T)
                            }
                            "string" == typeof e.className ? o = (0, l.fp)(t.registered, s, e.className) : null != e.className && (o = e.className + " ");
                            var E = (0, c.O)(v.concat(s), t.registered, d);
                            o += t.key + "-" + E.name, void 0 !== a && (o += " " + a);
                            var w = g && void 0 === p ? h(n) : m,
                                S = {};
                            for (var T in e)(!g || "as" !== T) && w(T) && (S[T] = e[T]);
                            return S.className = o, S.ref = r, i.createElement(i.Fragment, null, i.createElement(y, {
                                cache: t,
                                serialized: E,
                                isStringTag: "string" == typeof n
                            }), i.createElement(n, S))
                        });
                        return S.displayName = void 0 !== o ? o : "Styled(" + ("string" == typeof f ? f : f.displayName || f.name || "Component") + ")", S.defaultProps = t.defaultProps, S.__emotion_real = S, S.__emotion_base = f, S.__emotion_styles = v, S.__emotion_forwardProp = p, Object.defineProperty(S, "toString", {
                            value: function() {
                                return "." + a
                            }
                        }), S.withComponent = function(t, i) {
                            return e(t, n({}, r, i, {
                                shouldForwardProp: d(S, i, !0)
                            })).apply(void 0, v)
                        }, S
                    }
                }).bind();

            function g(e, t) {
                let r = m(e, t);
                return r
            }["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"].forEach(function(e) {
                m[e] = m(e)
            });
            let b = (e, t) => {
                Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles))
            }
        },
        61047: function(e, t, r) {
            "use strict";
            r.d(t, {
                ZP: function() {
                    return _
                },
                x9: function() {
                    return v
                }
            });
            var n = r(20791),
                i = r(13428),
                o = r(89770),
                a = r(15959),
                s = r(84775),
                u = r(61380);
            let l = ["variant"];

            function c(e) {
                return 0 === e.length
            }

            function f(e) {
                let {
                    variant: t
                } = e, r = (0, n.Z)(e, l), i = t || "";
                return Object.keys(r).sort().forEach(t => {
                    "color" === t ? i += c(i) ? e[t] : (0, u.Z)(e[t]) : i += `${c(i)?t:(0,u.Z)(t)}${(0,u.Z)(e[t].toString())}`
                }), i
            }
            var p = r(87947);
            let h = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"],
                d = (e, t) => t.components && t.components[e] && t.components[e].styleOverrides ? t.components[e].styleOverrides : null,
                y = e => {
                    let t = {};
                    return e && e.forEach(e => {
                        let r = f(e.props);
                        t[r] = e.style
                    }), t
                },
                m = (e, t) => {
                    let r = [];
                    return t && t.components && t.components[e] && t.components[e].variants && (r = t.components[e].variants), y(r)
                },
                g = (e, t, r) => {
                    let {
                        ownerState: n = {}
                    } = e, i = [];
                    return r && r.forEach(r => {
                        let o = !0;
                        Object.keys(r.props).forEach(t => {
                            n[t] !== r.props[t] && e[t] !== r.props[t] && (o = !1)
                        }), o && i.push(t[f(r.props)])
                    }), i
                },
                b = (e, t, r, n) => {
                    var i;
                    let o = null == r || null == (i = r.components) || null == (i = i[n]) ? void 0 : i.variants;
                    return g(e, t, o)
                };

            function v(e) {
                return "ownerState" !== e && "theme" !== e && "sx" !== e && "as" !== e
            }
            let E = (0, s.Z)(),
                w = e => e ? e.charAt(0).toLowerCase() + e.slice(1) : e;

            function S({
                defaultTheme: e,
                theme: t,
                themeId: r
            }) {
                return 0 === Object.keys(t).length ? e : t[r] || t
            }
            let T = ({
                styledArg: e,
                props: t,
                defaultTheme: r,
                themeId: n
            }) => {
                let o;
                let a = e((0, i.Z)({}, t, {
                    theme: S((0, i.Z)({}, t, {
                        defaultTheme: r,
                        themeId: n
                    }))
                }));
                if (a && a.variants && (o = a.variants, delete a.variants), o) {
                    let e = g(t, y(o), o);
                    return [a, ...e]
                }
                return a
            };

            function _(e = {}) {
                let {
                    themeId: t,
                    defaultTheme: r = E,
                    rootShouldForwardProp: s = v,
                    slotShouldForwardProp: u = v
                } = e, l = e => (0, p.Z)((0, i.Z)({}, e, {
                    theme: S((0, i.Z)({}, e, {
                        defaultTheme: r,
                        themeId: t
                    }))
                }));
                return l.__mui_systemSx = !0, (e, c = {}) => {
                    var f;
                    let p;
                    (0, o.Co)(e, e => e.filter(e => !(null != e && e.__mui_systemSx)));
                    let {
                        name: E,
                        slot: _,
                        skipVariantsResolver: k,
                        skipSx: I,
                        overridesResolver: P = (f = w(_)) ? (e, t) => t[f] : null
                    } = c, O = (0, n.Z)(c, h), x = void 0 !== k ? k : _ && "Root" !== _ && "root" !== _ || !1, A = I || !1, N = v;
                    "Root" === _ || "root" === _ ? N = s : _ ? N = u : "string" == typeof e && e.charCodeAt(0) > 96 && (N = void 0);
                    let C = (0, o.ZP)(e, (0, i.Z)({
                            shouldForwardProp: N,
                            label: p
                        }, O)),
                        B = (n, ...o) => {
                            let s = o ? o.map(e => {
                                    if ("function" == typeof e && e.__emotion_real !== e) return n => T({
                                        styledArg: e,
                                        props: n,
                                        defaultTheme: r,
                                        themeId: t
                                    });
                                    if ((0, a.P)(e)) {
                                        let t, r = e;
                                        return e && e.variants && (t = e.variants, delete r.variants, r = r => {
                                            let n = e,
                                                i = g(r, y(t), t);
                                            return i.forEach(e => {
                                                n = (0, a.Z)(n, e)
                                            }), n
                                        }), r
                                    }
                                    return e
                                }) : [],
                                u = n;
                            if ((0, a.P)(n)) {
                                let e;
                                n && n.variants && (e = n.variants, delete u.variants, u = t => {
                                    let r = n,
                                        i = g(t, y(e), e);
                                    return i.forEach(e => {
                                        r = (0, a.Z)(r, e)
                                    }), r
                                })
                            } else "function" == typeof n && n.__emotion_real !== n && (u = e => T({
                                styledArg: n,
                                props: e,
                                defaultTheme: r,
                                themeId: t
                            }));
                            E && P && s.push(e => {
                                let n = S((0, i.Z)({}, e, {
                                        defaultTheme: r,
                                        themeId: t
                                    })),
                                    o = d(E, n);
                                if (o) {
                                    let t = {};
                                    return Object.entries(o).forEach(([r, o]) => {
                                        t[r] = "function" == typeof o ? o((0, i.Z)({}, e, {
                                            theme: n
                                        })) : o
                                    }), P(e, t)
                                }
                                return null
                            }), E && !x && s.push(e => {
                                let n = S((0, i.Z)({}, e, {
                                    defaultTheme: r,
                                    themeId: t
                                }));
                                return b(e, m(E, n), n, E)
                            }), A || s.push(l);
                            let c = s.length - o.length;
                            if (Array.isArray(n) && c > 0) {
                                let e = Array(c).fill("");
                                (u = [...n, ...e]).raw = [...n.raw, ...e]
                            }
                            let f = C(u, ...s);
                            return e.muiName && (f.muiName = e.muiName), f
                        };
                    return C.withConfig && (B.withConfig = C.withConfig), B
                }
            }
        },
        43381: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return l
                }
            });
            var n = r(13428),
                i = r(20791),
                o = r(15959),
                a = r(58122);
            let s = ["sx"],
                u = e => {
                    var t, r;
                    let n = {
                            systemProps: {},
                            otherProps: {}
                        },
                        i = null != (t = null == e || null == (r = e.theme) ? void 0 : r.unstable_sxConfig) ? t : a.Z;
                    return Object.keys(e).forEach(t => {
                        i[t] ? n.systemProps[t] = e[t] : n.otherProps[t] = e[t]
                    }), n
                };

            function l(e) {
                let t;
                let {
                    sx: r
                } = e, a = (0, i.Z)(e, s), {
                    systemProps: l,
                    otherProps: c
                } = u(a);
                return t = Array.isArray(r) ? [l, ...r] : "function" == typeof r ? (...e) => {
                    let t = r(...e);
                    return (0, o.P)(t) ? (0, n.Z)({}, l, t) : l
                } : (0, n.Z)({}, l, r), (0, n.Z)({}, c, {
                    sx: t
                })
            }
        },
        25097: function(e, t) {
            "use strict";
            let r;
            let n = e => e,
                i = (r = n, {
                    configure(e) {
                        r = e
                    },
                    generate: e => r(e),
                    reset() {
                        r = n
                    }
                });
            t.Z = i
        },
        95600: function(e, t, r) {
            "use strict";

            function n(e, t, r) {
                let n = {};
                return Object.keys(e).forEach(i => {
                    n[i] = e[i].reduce((e, n) => {
                        if (n) {
                            let i = t(n);
                            "" !== i && e.push(i), r && r[n] && e.push(r[n])
                        }
                        return e
                    }, []).join(" ")
                }), n
            }
            r.d(t, {
                Z: function() {
                    return n
                }
            })
        },
        62940: function(e, t, r) {
            "use strict";

            function n(...e) {
                return e.reduce((e, t) => null == t ? e : function(...r) {
                    e.apply(this, r), t.apply(this, r)
                }, () => {})
            }
            r.d(t, {
                Z: function() {
                    return n
                }
            })
        },
        78078: function(e, t, r) {
            "use strict";

            function n(e, t = 166) {
                let r;

                function n(...i) {
                    clearTimeout(r), r = setTimeout(() => {
                        e.apply(this, i)
                    }, t)
                }
                return n.clear = () => {
                    clearTimeout(r)
                }, n
            }
            r.d(t, {
                Z: function() {
                    return n
                }
            })
        },
        25702: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return o
                }
            });
            var n = r(25097);
            let i = {
                active: "active",
                checked: "checked",
                completed: "completed",
                disabled: "disabled",
                error: "error",
                expanded: "expanded",
                focused: "focused",
                focusVisible: "focusVisible",
                open: "open",
                readOnly: "readOnly",
                required: "required",
                selected: "selected"
            };

            function o(e, t, r = "Mui") {
                let o = i[t];
                return o ? `${r}-${o}` : `${n.Z.generate(e)}-${t}`
            }
        },
        26520: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return i
                }
            });
            var n = r(25702);

            function i(e, t, r = "Mui") {
                let i = {};
                return t.forEach(t => {
                    i[t] = (0, n.Z)(e, t, r)
                }), i
            }
        },
        60878: function(e, t, r) {
            "use strict";

            function n(e) {
                let t = e.documentElement.clientWidth;
                return Math.abs(window.innerWidth - t)
            }
            r.d(t, {
                Z: function() {
                    return n
                }
            })
        },
        96278: function(e, t, r) {
            "use strict";

            function n(e) {
                return e && e.ownerDocument || document
            }
            r.d(t, {
                Z: function() {
                    return n
                }
            })
        },
        88221: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return i
                }
            });
            var n = r(96278);

            function i(e) {
                let t = (0, n.Z)(e);
                return t.defaultView || window
            }
        },
        13840: function(e, t, r) {
            "use strict";

            function n(e, t) {
                "function" == typeof e ? e(t) : e && (e.current = t)
            }
            r.d(t, {
                Z: function() {
                    return n
                }
            })
        },
        34625: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return i
                }
            });
            var n = r(2265);

            function i({
                controlled: e,
                default: t,
                name: r,
                state: i = "value"
            }) {
                let {
                    current: o
                } = n.useRef(void 0 !== e), [a, s] = n.useState(t), u = n.useCallback(e => {
                    o || s(e)
                }, []);
                return [o ? e : a, u]
            }
        },
        1091: function(e, t, r) {
            "use strict";
            var n = r(2265);
            let i = "undefined" != typeof window ? n.useLayoutEffect : n.useEffect;
            t.Z = i
        },
        78136: function(e, t, r) {
            "use strict";
            var n = r(2265),
                i = r(1091);
            t.Z = function(e) {
                let t = n.useRef(e);
                return (0, i.Z)(() => {
                    t.current = e
                }), n.useRef((...e) => (0, t.current)(...e)).current
            }
        },
        95137: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return o
                }
            });
            var n = r(2265),
                i = r(13840);

            function o(...e) {
                return n.useMemo(() => e.every(e => null == e) ? null : t => {
                    e.forEach(e => {
                        (0, i.Z)(e, t)
                    })
                }, e)
            }
        },
        33449: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return s
                }
            });
            var n, i = r(2265);
            let o = 0,
                a = (n || (n = r.t(i, 2)))["useId".toString()];

            function s(e) {
                if (void 0 !== a) {
                    let t = a();
                    return null != e ? e : t
                }
                return function(e) {
                    let [t, r] = i.useState(e), n = e || t;
                    return i.useEffect(() => {
                        null == t && (o += 1, r(`mui-${o}`))
                    }, [t]), n
                }(e)
            }
        },
        46656: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.bech32m = t.bech32 = void 0;
            let r = "qpzry9x8gf2tvdw0s3jn54khce6mua7l",
                n = {};
            for (let e = 0; e < r.length; e++) {
                let t = r.charAt(e);
                n[t] = e
            }

            function i(e) {
                let t = e >> 25;
                return (33554431 & e) << 5 ^ 996825010 & -(t >> 0 & 1) ^ 642813549 & -(t >> 1 & 1) ^ 513874426 & -(t >> 2 & 1) ^ 1027748829 & -(t >> 3 & 1) ^ 705979059 & -(t >> 4 & 1)
            }

            function o(e) {
                let t = 1;
                for (let r = 0; r < e.length; ++r) {
                    let n = e.charCodeAt(r);
                    if (n < 33 || n > 126) return "Invalid prefix (" + e + ")";
                    t = i(t) ^ n >> 5
                }
                t = i(t);
                for (let r = 0; r < e.length; ++r) {
                    let n = e.charCodeAt(r);
                    t = i(t) ^ 31 & n
                }
                return t
            }

            function a(e, t, r, n) {
                let i = 0,
                    o = 0,
                    a = (1 << r) - 1,
                    s = [];
                for (let n = 0; n < e.length; ++n)
                    for (i = i << t | e[n], o += t; o >= r;) s.push(i >> (o -= r) & a);
                if (n) o > 0 && s.push(i << r - o & a);
                else {
                    if (o >= t) return "Excess padding";
                    if (i << r - o & a) return "Non-zero padding"
                }
                return s
            }

            function s(e) {
                return a(e, 8, 5, !0)
            }

            function u(e) {
                let t = a(e, 5, 8, !1);
                if (Array.isArray(t)) return t
            }

            function l(e) {
                let t = a(e, 5, 8, !1);
                if (Array.isArray(t)) return t;
                throw Error(t)
            }

            function c(e) {
                let t;

                function a(e, r) {
                    if (r = r || 90, e.length < 8) return e + " too short";
                    if (e.length > r) return "Exceeds length limit";
                    let a = e.toLowerCase(),
                        s = e.toUpperCase();
                    if (e !== a && e !== s) return "Mixed-case string " + e;
                    e = a;
                    let u = e.lastIndexOf("1");
                    if (-1 === u) return "No separator character for " + e;
                    if (0 === u) return "Missing prefix for " + e;
                    let l = e.slice(0, u),
                        c = e.slice(u + 1);
                    if (c.length < 6) return "Data too short";
                    let f = o(l);
                    if ("string" == typeof f) return f;
                    let p = [];
                    for (let e = 0; e < c.length; ++e) {
                        let t = c.charAt(e),
                            r = n[t];
                        if (void 0 === r) return "Unknown character " + t;
                        f = i(f) ^ r, e + 6 >= c.length || p.push(r)
                    }
                    return f !== t ? "Invalid checksum for " + e : {
                        prefix: l,
                        words: p
                    }
                }
                return t = "bech32" === e ? 1 : 734539939, {
                    decodeUnsafe: function(e, t) {
                        let r = a(e, t);
                        if ("object" == typeof r) return r
                    },
                    decode: function(e, t) {
                        let r = a(e, t);
                        if ("object" == typeof r) return r;
                        throw Error(r)
                    },
                    encode: function(e, n, a) {
                        if (a = a || 90, e.length + 7 + n.length > a) throw TypeError("Exceeds length limit");
                        let s = o(e = e.toLowerCase());
                        if ("string" == typeof s) throw Error(s);
                        let u = e + "1";
                        for (let e = 0; e < n.length; ++e) {
                            let t = n[e];
                            if (t >> 5 != 0) throw Error("Non 5-bit word");
                            s = i(s) ^ t, u += r.charAt(t)
                        }
                        for (let e = 0; e < 6; ++e) s = i(s);
                        s ^= t;
                        for (let e = 0; e < 6; ++e) {
                            let t = s >> (5 - e) * 5 & 31;
                            u += r.charAt(t)
                        }
                        return u
                    },
                    toWords: s,
                    fromWordsUnsafe: u,
                    fromWords: l
                }
            }
            t.bech32 = c("bech32"), t.bech32m = c("bech32m")
        },
        70920: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let n = r(76583);

            function i(e, t, r) {
                return n => {
                    if (e.has(n)) return;
                    let i = r.filter(e => e.key.toString("hex") === n)[0];
                    t.push(i), e.add(n)
                }
            }

            function o(e) {
                return e.globalMap.unsignedTx
            }

            function a(e) {
                let t = new Set;
                return e.forEach(e => {
                    let r = e.key.toString("hex");
                    if (t.has(r)) throw Error("Combine: KeyValue Map keys should be unique");
                    t.add(r)
                }), t
            }
            t.combine = function(e) {
                let t = e[0],
                    r = n.psbtToKeyVals(t),
                    s = e.slice(1);
                if (0 === s.length) throw Error("Combine: Nothing to combine");
                let u = o(t);
                if (void 0 === u) throw Error("Combine: Self missing transaction");
                let l = a(r.globalKeyVals),
                    c = r.inputKeyVals.map(a),
                    f = r.outputKeyVals.map(a);
                for (let e of s) {
                    let t = o(e);
                    if (void 0 === t || !t.toBuffer().equals(u.toBuffer())) throw Error("Combine: One of the Psbts does not have the same transaction.");
                    let s = n.psbtToKeyVals(e),
                        p = a(s.globalKeyVals);
                    p.forEach(i(l, r.globalKeyVals, s.globalKeyVals));
                    let h = s.inputKeyVals.map(a);
                    h.forEach((e, t) => e.forEach(i(c[t], r.inputKeyVals[t], s.inputKeyVals[t])));
                    let d = s.outputKeyVals.map(a);
                    d.forEach((e, t) => e.forEach(i(f[t], r.outputKeyVals[t], s.outputKeyVals[t])))
                }
                return n.psbtFromKeyVals(u, {
                    globalMapKeyVals: r.globalKeyVals,
                    inputKeyVals: r.inputKeyVals,
                    outputKeyVals: r.outputKeyVals
                })
            }
        },
        87143: function(e, t, r) {
            "use strict";
            var n = r(67133).Buffer;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(38482),
                o = e => [...Array(e).keys()];
            t.decode = function(e) {
                if (e.key[0] !== i.GlobalTypes.GLOBAL_XPUB) throw Error("Decode Error: could not decode globalXpub with key 0x" + e.key.toString("hex"));
                if (79 !== e.key.length || ![2, 3].includes(e.key[46])) throw Error("Decode Error: globalXpub has invalid extended pubkey in key 0x" + e.key.toString("hex"));
                if (e.value.length / 4 % 1 != 0) throw Error("Decode Error: Global GLOBAL_XPUB value length should be multiple of 4");
                let t = e.key.slice(1),
                    r = {
                        masterFingerprint: e.value.slice(0, 4),
                        extendedPubkey: t,
                        path: "m"
                    };
                for (let t of o(e.value.length / 4 - 1)) {
                    let n = e.value.readUInt32LE(4 * t + 4),
                        i = !!(2147483648 & n),
                        o = 2147483647 & n;
                    r.path += "/" + o.toString(10) + (i ? "'" : "")
                }
                return r
            }, t.encode = function(e) {
                let t = n.from([i.GlobalTypes.GLOBAL_XPUB]),
                    r = n.concat([t, e.extendedPubkey]),
                    o = e.path.split("/"),
                    a = n.allocUnsafe(4 * o.length);
                e.masterFingerprint.copy(a, 0);
                let s = 4;
                return o.slice(1).forEach(e => {
                    let t = "'" === e.slice(-1),
                        r = 2147483647 & parseInt(t ? e.slice(0, -1) : e, 10);
                    t && (r += 2147483648), a.writeUInt32LE(r, s), s += 4
                }), {
                    key: r,
                    value: a
                }
            }, t.expected = "{ masterFingerprint: Buffer; extendedPubkey: Buffer; path: string; }", t.check = function(e) {
                let t = e.extendedPubkey,
                    r = e.masterFingerprint,
                    i = e.path;
                return n.isBuffer(t) && 78 === t.length && [2, 3].indexOf(t[45]) > -1 && n.isBuffer(r) && 4 === r.length && "string" == typeof i && !!i.match(/^m(\/\d+'?)*$/)
            }, t.canAddToArray = function(e, t, r) {
                let n = t.extendedPubkey.toString("hex");
                return !r.has(n) && (r.add(n), 0 === e.filter(e => e.extendedPubkey.equals(t.extendedPubkey)).length)
            }
        },
        52351: function(e, t, r) {
            "use strict";
            var n = r(67133).Buffer;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(38482);
            t.encode = function(e) {
                return {
                    key: n.from([i.GlobalTypes.UNSIGNED_TX]),
                    value: e.toBuffer()
                }
            }
        },
        56050: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let n = r(38482),
                i = r(87143),
                o = r(52351),
                a = r(57108),
                s = r(47246),
                u = r(89745),
                l = r(94547),
                c = r(7372),
                f = r(97368),
                p = r(62132),
                h = r(79432),
                d = r(33699),
                y = r(71076),
                m = r(34791),
                g = r(83523),
                b = r(97591),
                v = r(27351),
                E = r(7488),
                w = r(81853),
                S = r(71275),
                T = r(45244),
                _ = {
                    unsignedTx: o,
                    globalXpub: i,
                    checkPubkey: v.makeChecker([])
                };
            t.globals = _;
            let k = {
                nonWitnessUtxo: u,
                partialSig: l,
                sighashType: f,
                finalScriptSig: a,
                finalScriptWitness: s,
                porCommitment: c,
                witnessUtxo: m,
                bip32Derivation: b.makeConverter(n.InputTypes.BIP32_DERIVATION),
                redeemScript: E.makeConverter(n.InputTypes.REDEEM_SCRIPT),
                witnessScript: T.makeConverter(n.InputTypes.WITNESS_SCRIPT),
                checkPubkey: v.makeChecker([n.InputTypes.PARTIAL_SIG, n.InputTypes.BIP32_DERIVATION]),
                tapKeySig: p,
                tapScriptSig: y,
                tapLeafScript: h,
                tapBip32Derivation: w.makeConverter(n.InputTypes.TAP_BIP32_DERIVATION),
                tapInternalKey: S.makeConverter(n.InputTypes.TAP_INTERNAL_KEY),
                tapMerkleRoot: d
            };
            t.inputs = k;
            let I = {
                bip32Derivation: b.makeConverter(n.OutputTypes.BIP32_DERIVATION),
                redeemScript: E.makeConverter(n.OutputTypes.REDEEM_SCRIPT),
                witnessScript: T.makeConverter(n.OutputTypes.WITNESS_SCRIPT),
                checkPubkey: v.makeChecker([n.OutputTypes.BIP32_DERIVATION]),
                tapBip32Derivation: w.makeConverter(n.OutputTypes.TAP_BIP32_DERIVATION),
                tapTree: g,
                tapInternalKey: S.makeConverter(n.OutputTypes.TAP_INTERNAL_KEY)
            };
            t.outputs = I
        },
        57108: function(e, t, r) {
            "use strict";
            var n = r(67133).Buffer;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(38482);
            t.decode = function(e) {
                if (e.key[0] !== i.InputTypes.FINAL_SCRIPTSIG) throw Error("Decode Error: could not decode finalScriptSig with key 0x" + e.key.toString("hex"));
                return e.value
            }, t.encode = function(e) {
                let t = n.from([i.InputTypes.FINAL_SCRIPTSIG]);
                return {
                    key: t,
                    value: e
                }
            }, t.expected = "Buffer", t.check = function(e) {
                return n.isBuffer(e)
            }, t.canAdd = function(e, t) {
                return !!e && !!t && void 0 === e.finalScriptSig
            }
        },
        47246: function(e, t, r) {
            "use strict";
            var n = r(67133).Buffer;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(38482);
            t.decode = function(e) {
                if (e.key[0] !== i.InputTypes.FINAL_SCRIPTWITNESS) throw Error("Decode Error: could not decode finalScriptWitness with key 0x" + e.key.toString("hex"));
                return e.value
            }, t.encode = function(e) {
                let t = n.from([i.InputTypes.FINAL_SCRIPTWITNESS]);
                return {
                    key: t,
                    value: e
                }
            }, t.expected = "Buffer", t.check = function(e) {
                return n.isBuffer(e)
            }, t.canAdd = function(e, t) {
                return !!e && !!t && void 0 === e.finalScriptWitness
            }
        },
        89745: function(e, t, r) {
            "use strict";
            var n = r(67133).Buffer;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(38482);
            t.decode = function(e) {
                if (e.key[0] !== i.InputTypes.NON_WITNESS_UTXO) throw Error("Decode Error: could not decode nonWitnessUtxo with key 0x" + e.key.toString("hex"));
                return e.value
            }, t.encode = function(e) {
                return {
                    key: n.from([i.InputTypes.NON_WITNESS_UTXO]),
                    value: e
                }
            }, t.expected = "Buffer", t.check = function(e) {
                return n.isBuffer(e)
            }, t.canAdd = function(e, t) {
                return !!e && !!t && void 0 === e.nonWitnessUtxo
            }
        },
        94547: function(e, t, r) {
            "use strict";
            var n = r(67133).Buffer;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(38482);
            t.decode = function(e) {
                if (e.key[0] !== i.InputTypes.PARTIAL_SIG) throw Error("Decode Error: could not decode partialSig with key 0x" + e.key.toString("hex"));
                if (!(34 === e.key.length || 66 === e.key.length) || ![2, 3, 4].includes(e.key[1])) throw Error("Decode Error: partialSig has invalid pubkey in key 0x" + e.key.toString("hex"));
                let t = e.key.slice(1);
                return {
                    pubkey: t,
                    signature: e.value
                }
            }, t.encode = function(e) {
                let t = n.from([i.InputTypes.PARTIAL_SIG]);
                return {
                    key: n.concat([t, e.pubkey]),
                    value: e.signature
                }
            }, t.expected = "{ pubkey: Buffer; signature: Buffer; }", t.check = function(e) {
                return n.isBuffer(e.pubkey) && n.isBuffer(e.signature) && [33, 65].includes(e.pubkey.length) && [2, 3, 4].includes(e.pubkey[0]) && function(e) {
                    if (!n.isBuffer(e) || e.length < 9 || 48 !== e[0] || e.length !== e[1] + 3 || 2 !== e[2]) return !1;
                    let t = e[3];
                    if (t > 33 || t < 1 || 2 !== e[3 + t + 1]) return !1;
                    let r = e[3 + t + 2];
                    return !(r > 33) && !(r < 1) && e.length === 3 + t + 2 + r + 2
                }(e.signature)
            }, t.canAddToArray = function(e, t, r) {
                let n = t.pubkey.toString("hex");
                return !r.has(n) && (r.add(n), 0 === e.filter(e => e.pubkey.equals(t.pubkey)).length)
            }
        },
        7372: function(e, t, r) {
            "use strict";
            var n = r(67133).Buffer;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(38482);
            t.decode = function(e) {
                if (e.key[0] !== i.InputTypes.POR_COMMITMENT) throw Error("Decode Error: could not decode porCommitment with key 0x" + e.key.toString("hex"));
                return e.value.toString("utf8")
            }, t.encode = function(e) {
                let t = n.from([i.InputTypes.POR_COMMITMENT]);
                return {
                    key: t,
                    value: n.from(e, "utf8")
                }
            }, t.expected = "string", t.check = function(e) {
                return "string" == typeof e
            }, t.canAdd = function(e, t) {
                return !!e && !!t && void 0 === e.porCommitment
            }
        },
        97368: function(e, t, r) {
            "use strict";
            var n = r(67133).Buffer;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(38482);
            t.decode = function(e) {
                if (e.key[0] !== i.InputTypes.SIGHASH_TYPE) throw Error("Decode Error: could not decode sighashType with key 0x" + e.key.toString("hex"));
                return e.value.readUInt32LE(0)
            }, t.encode = function(e) {
                let t = n.from([i.InputTypes.SIGHASH_TYPE]),
                    r = n.allocUnsafe(4);
                return r.writeUInt32LE(e, 0), {
                    key: t,
                    value: r
                }
            }, t.expected = "number", t.check = function(e) {
                return "number" == typeof e
            }, t.canAdd = function(e, t) {
                return !!e && !!t && void 0 === e.sighashType
            }
        },
        62132: function(e, t, r) {
            "use strict";
            var n = r(67133).Buffer;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(38482);

            function o(e) {
                return n.isBuffer(e) && (64 === e.length || 65 === e.length)
            }
            t.decode = function(e) {
                if (e.key[0] !== i.InputTypes.TAP_KEY_SIG || 1 !== e.key.length) throw Error("Decode Error: could not decode tapKeySig with key 0x" + e.key.toString("hex"));
                if (!o(e.value)) throw Error("Decode Error: tapKeySig not a valid 64-65-byte BIP340 signature");
                return e.value
            }, t.encode = function(e) {
                let t = n.from([i.InputTypes.TAP_KEY_SIG]);
                return {
                    key: t,
                    value: e
                }
            }, t.expected = "Buffer", t.check = o, t.canAdd = function(e, t) {
                return !!e && !!t && void 0 === e.tapKeySig
            }
        },
        79432: function(e, t, r) {
            "use strict";
            var n = r(67133).Buffer;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(38482);
            t.decode = function(e) {
                if (e.key[0] !== i.InputTypes.TAP_LEAF_SCRIPT) throw Error("Decode Error: could not decode tapLeafScript with key 0x" + e.key.toString("hex"));
                if ((e.key.length - 2) % 32 != 0) throw Error("Decode Error: tapLeafScript has invalid control block in key 0x" + e.key.toString("hex"));
                let t = e.value[e.value.length - 1];
                if ((254 & e.key[1]) !== t) throw Error("Decode Error: tapLeafScript bad leaf version in key 0x" + e.key.toString("hex"));
                let r = e.value.slice(0, -1),
                    n = e.key.slice(1);
                return {
                    controlBlock: n,
                    script: r,
                    leafVersion: t
                }
            }, t.encode = function(e) {
                let t = n.from([i.InputTypes.TAP_LEAF_SCRIPT]),
                    r = n.from([e.leafVersion]);
                return {
                    key: n.concat([t, e.controlBlock]),
                    value: n.concat([e.script, r])
                }
            }, t.expected = "{ controlBlock: Buffer; leafVersion: number, script: Buffer; }", t.check = function(e) {
                return n.isBuffer(e.controlBlock) && (e.controlBlock.length - 1) % 32 == 0 && (254 & e.controlBlock[0]) === e.leafVersion && n.isBuffer(e.script)
            }, t.canAddToArray = function(e, t, r) {
                let n = t.controlBlock.toString("hex");
                return !r.has(n) && (r.add(n), 0 === e.filter(e => e.controlBlock.equals(t.controlBlock)).length)
            }
        },
        33699: function(e, t, r) {
            "use strict";
            var n = r(67133).Buffer;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(38482);

            function o(e) {
                return n.isBuffer(e) && 32 === e.length
            }
            t.decode = function(e) {
                if (e.key[0] !== i.InputTypes.TAP_MERKLE_ROOT || 1 !== e.key.length) throw Error("Decode Error: could not decode tapMerkleRoot with key 0x" + e.key.toString("hex"));
                if (!o(e.value)) throw Error("Decode Error: tapMerkleRoot not a 32-byte hash");
                return e.value
            }, t.encode = function(e) {
                let t = n.from([i.InputTypes.TAP_MERKLE_ROOT]);
                return {
                    key: t,
                    value: e
                }
            }, t.expected = "Buffer", t.check = o, t.canAdd = function(e, t) {
                return !!e && !!t && void 0 === e.tapMerkleRoot
            }
        },
        71076: function(e, t, r) {
            "use strict";
            var n = r(67133).Buffer;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(38482);
            t.decode = function(e) {
                if (e.key[0] !== i.InputTypes.TAP_SCRIPT_SIG) throw Error("Decode Error: could not decode tapScriptSig with key 0x" + e.key.toString("hex"));
                if (65 !== e.key.length) throw Error("Decode Error: tapScriptSig has invalid key 0x" + e.key.toString("hex"));
                if (64 !== e.value.length && 65 !== e.value.length) throw Error("Decode Error: tapScriptSig has invalid signature in key 0x" + e.key.toString("hex"));
                let t = e.key.slice(1, 33),
                    r = e.key.slice(33);
                return {
                    pubkey: t,
                    leafHash: r,
                    signature: e.value
                }
            }, t.encode = function(e) {
                let t = n.from([i.InputTypes.TAP_SCRIPT_SIG]);
                return {
                    key: n.concat([t, e.pubkey, e.leafHash]),
                    value: e.signature
                }
            }, t.expected = "{ pubkey: Buffer; leafHash: Buffer; signature: Buffer; }", t.check = function(e) {
                return n.isBuffer(e.pubkey) && n.isBuffer(e.leafHash) && n.isBuffer(e.signature) && 32 === e.pubkey.length && 32 === e.leafHash.length && (64 === e.signature.length || 65 === e.signature.length)
            }, t.canAddToArray = function(e, t, r) {
                let n = t.pubkey.toString("hex") + t.leafHash.toString("hex");
                return !r.has(n) && (r.add(n), 0 === e.filter(e => e.pubkey.equals(t.pubkey) && e.leafHash.equals(t.leafHash)).length)
            }
        },
        34791: function(e, t, r) {
            "use strict";
            var n = r(67133).Buffer;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(38482),
                o = r(74638),
                a = r(25756);
            t.decode = function(e) {
                if (e.key[0] !== i.InputTypes.WITNESS_UTXO) throw Error("Decode Error: could not decode witnessUtxo with key 0x" + e.key.toString("hex"));
                let t = o.readUInt64LE(e.value, 0),
                    r = 8,
                    n = a.decode(e.value, r);
                r += a.encodingLength(n);
                let s = e.value.slice(r);
                if (s.length !== n) throw Error("Decode Error: WITNESS_UTXO script is not proper length");
                return {
                    script: s,
                    value: t
                }
            }, t.encode = function(e) {
                let {
                    script: t,
                    value: r
                } = e, s = a.encodingLength(t.length), u = n.allocUnsafe(8 + s + t.length);
                return o.writeUInt64LE(u, r, 0), a.encode(t.length, u, 8), t.copy(u, 8 + s), {
                    key: n.from([i.InputTypes.WITNESS_UTXO]),
                    value: u
                }
            }, t.expected = "{ script: Buffer; value: number; }", t.check = function(e) {
                return n.isBuffer(e.script) && "number" == typeof e.value
            }, t.canAdd = function(e, t) {
                return !!e && !!t && void 0 === e.witnessUtxo
            }
        },
        83523: function(e, t, r) {
            "use strict";
            var n = r(67133).Buffer;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(38482),
                o = r(25756);
            t.decode = function(e) {
                if (e.key[0] !== i.OutputTypes.TAP_TREE || 1 !== e.key.length) throw Error("Decode Error: could not decode tapTree with key 0x" + e.key.toString("hex"));
                let t = 0,
                    r = [];
                for (; t < e.value.length;) {
                    let n = e.value[t++],
                        i = e.value[t++],
                        a = o.decode(e.value, t);
                    t += o.encodingLength(a), r.push({
                        depth: n,
                        leafVersion: i,
                        script: e.value.slice(t, t + a)
                    }), t += a
                }
                return {
                    leaves: r
                }
            }, t.encode = function(e) {
                let t = n.from([i.OutputTypes.TAP_TREE]),
                    r = [].concat(...e.leaves.map(e => [n.of(e.depth, e.leafVersion), o.encode(e.script.length), e.script]));
                return {
                    key: t,
                    value: n.concat(r)
                }
            }, t.expected = "{ leaves: [{ depth: number; leafVersion: number, script: Buffer; }] }", t.check = function(e) {
                return Array.isArray(e.leaves) && e.leaves.every(e => e.depth >= 0 && e.depth <= 128 && (254 & e.leafVersion) === e.leafVersion && n.isBuffer(e.script))
            }, t.canAdd = function(e, t) {
                return !!e && !!t && void 0 === e.tapTree
            }
        },
        97591: function(e, t, r) {
            "use strict";
            var n = r(67133).Buffer;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = e => [...Array(e).keys()],
                o = e => 33 === e.length && [2, 3].includes(e[0]) || 65 === e.length && 4 === e[0];
            t.makeConverter = function(e, t = o) {
                return {
                    decode: function(r) {
                        if (r.key[0] !== e) throw Error("Decode Error: could not decode bip32Derivation with key 0x" + r.key.toString("hex"));
                        let n = r.key.slice(1);
                        if (!t(n)) throw Error("Decode Error: bip32Derivation has invalid pubkey in key 0x" + r.key.toString("hex"));
                        if (r.value.length / 4 % 1 != 0) throw Error("Decode Error: Input BIP32_DERIVATION value length should be multiple of 4");
                        let o = {
                            masterFingerprint: r.value.slice(0, 4),
                            pubkey: n,
                            path: "m"
                        };
                        for (let e of i(r.value.length / 4 - 1)) {
                            let t = r.value.readUInt32LE(4 * e + 4),
                                n = !!(2147483648 & t),
                                i = 2147483647 & t;
                            o.path += "/" + i.toString(10) + (n ? "'" : "")
                        }
                        return o
                    },
                    encode: function(t) {
                        let r = n.from([e]),
                            i = n.concat([r, t.pubkey]),
                            o = t.path.split("/"),
                            a = n.allocUnsafe(4 * o.length);
                        t.masterFingerprint.copy(a, 0);
                        let s = 4;
                        return o.slice(1).forEach(e => {
                            let t = "'" === e.slice(-1),
                                r = 2147483647 & parseInt(t ? e.slice(0, -1) : e, 10);
                            t && (r += 2147483648), a.writeUInt32LE(r, s), s += 4
                        }), {
                            key: i,
                            value: a
                        }
                    },
                    check: function(e) {
                        return n.isBuffer(e.pubkey) && n.isBuffer(e.masterFingerprint) && "string" == typeof e.path && t(e.pubkey) && 4 === e.masterFingerprint.length
                    },
                    expected: "{ masterFingerprint: Buffer; pubkey: Buffer; path: string; }",
                    canAddToArray: function(e, t, r) {
                        let n = t.pubkey.toString("hex");
                        return !r.has(n) && (r.add(n), 0 === e.filter(e => e.pubkey.equals(t.pubkey)).length)
                    }
                }
            }
        },
        27351: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.makeChecker = function(e) {
                return function(t) {
                    let r;
                    if (e.includes(t.key[0]) && (!(33 === (r = t.key.slice(1)).length || 65 === r.length) || ![2, 3, 4].includes(r[0]))) throw Error("Format Error: invalid pubkey in key 0x" + t.key.toString("hex"));
                    return r
                }
            }
        },
        7488: function(e, t, r) {
            "use strict";
            var n = r(67133).Buffer;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.makeConverter = function(e) {
                return {
                    decode: function(t) {
                        if (t.key[0] !== e) throw Error("Decode Error: could not decode redeemScript with key 0x" + t.key.toString("hex"));
                        return t.value
                    },
                    encode: function(t) {
                        let r = n.from([e]);
                        return {
                            key: r,
                            value: t
                        }
                    },
                    check: function(e) {
                        return n.isBuffer(e)
                    },
                    expected: "Buffer",
                    canAdd: function(e, t) {
                        return !!e && !!t && void 0 === e.redeemScript
                    }
                }
            }
        },
        81853: function(e, t, r) {
            "use strict";
            var n = r(67133).Buffer;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(25756),
                o = r(97591),
                a = e => 32 === e.length;
            t.makeConverter = function(e) {
                let t = o.makeConverter(e, a);
                return {
                    decode: function(e) {
                        let r = i.decode(e.value),
                            n = i.encodingLength(r),
                            o = t.decode({
                                key: e.key,
                                value: e.value.slice(n + 32 * r)
                            }),
                            a = Array(r);
                        for (let t = 0, i = n; t < r; t++, i += 32) a[t] = e.value.slice(i, i + 32);
                        return Object.assign({}, o, {
                            leafHashes: a
                        })
                    },
                    encode: function(e) {
                        let r = t.encode(e),
                            o = i.encodingLength(e.leafHashes.length),
                            a = n.allocUnsafe(o);
                        i.encode(e.leafHashes.length, a);
                        let s = n.concat([a, ...e.leafHashes, r.value]);
                        return Object.assign({}, r, {
                            value: s
                        })
                    },
                    check: function(e) {
                        return Array.isArray(e.leafHashes) && e.leafHashes.every(e => n.isBuffer(e) && 32 === e.length) && t.check(e)
                    },
                    expected: "{ masterFingerprint: Buffer; pubkey: Buffer; path: string; leafHashes: Buffer[]; }",
                    canAddToArray: t.canAddToArray
                }
            }
        },
        71275: function(e, t, r) {
            "use strict";
            var n = r(67133).Buffer;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.makeConverter = function(e) {
                return {
                    decode: function(t) {
                        if (t.key[0] !== e || 1 !== t.key.length) throw Error("Decode Error: could not decode tapInternalKey with key 0x" + t.key.toString("hex"));
                        if (32 !== t.value.length) throw Error("Decode Error: tapInternalKey not a 32-byte x-only pubkey");
                        return t.value
                    },
                    encode: function(t) {
                        let r = n.from([e]);
                        return {
                            key: r,
                            value: t
                        }
                    },
                    check: function(e) {
                        return n.isBuffer(e) && 32 === e.length
                    },
                    expected: "Buffer",
                    canAdd: function(e, t) {
                        return !!e && !!t && void 0 === e.tapInternalKey
                    }
                }
            }
        },
        45244: function(e, t, r) {
            "use strict";
            var n = r(67133).Buffer;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.makeConverter = function(e) {
                return {
                    decode: function(t) {
                        if (t.key[0] !== e) throw Error("Decode Error: could not decode witnessScript with key 0x" + t.key.toString("hex"));
                        return t.value
                    },
                    encode: function(t) {
                        let r = n.from([e]);
                        return {
                            key: r,
                            value: t
                        }
                    },
                    check: function(e) {
                        return n.isBuffer(e)
                    },
                    expected: "Buffer",
                    canAdd: function(e, t) {
                        return !!e && !!t && void 0 === e.witnessScript
                    }
                }
            }
        },
        74638: function(e, t, r) {
            "use strict";
            var n = r(67133).Buffer;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(25756);

            function o(e) {
                let t = e.key.length,
                    r = e.value.length,
                    o = i.encodingLength(t),
                    a = i.encodingLength(r),
                    s = n.allocUnsafe(o + t + a + r);
                return i.encode(t, s, 0), e.key.copy(s, o), i.encode(r, s, o + t), e.value.copy(s, o + t + a), s
            }

            function a(e, t) {
                if ("number" != typeof e) throw Error("cannot write a non-number as a number");
                if (e < 0) throw Error("specified a negative value for writing an unsigned value");
                if (e > t) throw Error("RangeError: value out of range");
                if (Math.floor(e) !== e) throw Error("value has a fractional component")
            }
            t.range = e => [...Array(e).keys()], t.reverseBuffer = function(e) {
                if (e.length < 1) return e;
                let t = e.length - 1,
                    r = 0;
                for (let n = 0; n < e.length / 2; n++) r = e[n], e[n] = e[t], e[t] = r, t--;
                return e
            }, t.keyValsToBuffer = function(e) {
                let t = e.map(o);
                return t.push(n.from([0])), n.concat(t)
            }, t.keyValToBuffer = o, t.readUInt64LE = function(e, t) {
                let r = e.readUInt32LE(t),
                    n = e.readUInt32LE(t + 4);
                return a((n *= 4294967296) + r, 9007199254740991), n + r
            }, t.writeUInt64LE = function(e, t, r) {
                return a(t, 9007199254740991), e.writeInt32LE(-1 & t, r), e.writeUInt32LE(Math.floor(t / 4294967296), r + 4), r + 8
            }
        },
        25756: function(e, t, r) {
            "use strict";
            var n = r(67133).Buffer;

            function i(e) {
                if (e < 0 || e > 9007199254740991 || e % 1 != 0) throw RangeError("value out of range")
            }

            function o(e) {
                return i(e), e < 253 ? 1 : e <= 65535 ? 3 : e <= 4294967295 ? 5 : 9
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.encode = function e(t, r, a) {
                if (i(t), r || (r = n.allocUnsafe(o(t))), !n.isBuffer(r)) throw TypeError("buffer must be a Buffer instance");
                return a || (a = 0), t < 253 ? (r.writeUInt8(t, a), Object.assign(e, {
                    bytes: 1
                })) : t <= 65535 ? (r.writeUInt8(253, a), r.writeUInt16LE(t, a + 1), Object.assign(e, {
                    bytes: 3
                })) : t <= 4294967295 ? (r.writeUInt8(254, a), r.writeUInt32LE(t, a + 1), Object.assign(e, {
                    bytes: 5
                })) : (r.writeUInt8(255, a), r.writeUInt32LE(t >>> 0, a + 1), r.writeUInt32LE(t / 4294967296 | 0, a + 5), Object.assign(e, {
                    bytes: 9
                })), r
            }, t.decode = function e(t, r) {
                if (!n.isBuffer(t)) throw TypeError("buffer must be a Buffer instance");
                r || (r = 0);
                let o = t.readUInt8(r);
                if (o < 253) return Object.assign(e, {
                    bytes: 1
                }), o;
                if (253 === o) return Object.assign(e, {
                    bytes: 3
                }), t.readUInt16LE(r + 1);
                if (254 === o) return Object.assign(e, {
                    bytes: 5
                }), t.readUInt32LE(r + 1); {
                    Object.assign(e, {
                        bytes: 9
                    });
                    let n = t.readUInt32LE(r + 1),
                        o = t.readUInt32LE(r + 5),
                        a = 4294967296 * o + n;
                    return i(a), a
                }
            }, t.encodingLength = o
        },
        81610: function(e, t, r) {
            "use strict";
            var n = r(67133).Buffer;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(56050),
                o = r(74638),
                a = r(25756),
                s = r(38482);

            function u(e, t, r) {
                if (!t.equals(n.from([r]))) throw Error(`Format Error: Invalid ${e} key: ${t.toString("hex")}`)
            }

            function l(e, {
                globalMapKeyVals: t,
                inputKeyVals: r,
                outputKeyVals: n
            }) {
                let a = {
                        unsignedTx: e
                    },
                    l = 0;
                for (let e of t) switch (e.key[0]) {
                    case s.GlobalTypes.UNSIGNED_TX:
                        if (u("global", e.key, s.GlobalTypes.UNSIGNED_TX), l > 0) throw Error("Format Error: GlobalMap has multiple UNSIGNED_TX");
                        l++;
                        break;
                    case s.GlobalTypes.GLOBAL_XPUB:
                        void 0 === a.globalXpub && (a.globalXpub = []), a.globalXpub.push(i.globals.globalXpub.decode(e));
                        break;
                    default:
                        a.unknownKeyVals || (a.unknownKeyVals = []), a.unknownKeyVals.push(e)
                }
                let c = r.length,
                    f = n.length,
                    p = [],
                    h = [];
                for (let e of o.range(c)) {
                    let t = {};
                    for (let n of r[e]) switch (i.inputs.checkPubkey(n), n.key[0]) {
                        case s.InputTypes.NON_WITNESS_UTXO:
                            if (u("input", n.key, s.InputTypes.NON_WITNESS_UTXO), void 0 !== t.nonWitnessUtxo) throw Error("Format Error: Input has multiple NON_WITNESS_UTXO");
                            t.nonWitnessUtxo = i.inputs.nonWitnessUtxo.decode(n);
                            break;
                        case s.InputTypes.WITNESS_UTXO:
                            if (u("input", n.key, s.InputTypes.WITNESS_UTXO), void 0 !== t.witnessUtxo) throw Error("Format Error: Input has multiple WITNESS_UTXO");
                            t.witnessUtxo = i.inputs.witnessUtxo.decode(n);
                            break;
                        case s.InputTypes.PARTIAL_SIG:
                            void 0 === t.partialSig && (t.partialSig = []), t.partialSig.push(i.inputs.partialSig.decode(n));
                            break;
                        case s.InputTypes.SIGHASH_TYPE:
                            if (u("input", n.key, s.InputTypes.SIGHASH_TYPE), void 0 !== t.sighashType) throw Error("Format Error: Input has multiple SIGHASH_TYPE");
                            t.sighashType = i.inputs.sighashType.decode(n);
                            break;
                        case s.InputTypes.REDEEM_SCRIPT:
                            if (u("input", n.key, s.InputTypes.REDEEM_SCRIPT), void 0 !== t.redeemScript) throw Error("Format Error: Input has multiple REDEEM_SCRIPT");
                            t.redeemScript = i.inputs.redeemScript.decode(n);
                            break;
                        case s.InputTypes.WITNESS_SCRIPT:
                            if (u("input", n.key, s.InputTypes.WITNESS_SCRIPT), void 0 !== t.witnessScript) throw Error("Format Error: Input has multiple WITNESS_SCRIPT");
                            t.witnessScript = i.inputs.witnessScript.decode(n);
                            break;
                        case s.InputTypes.BIP32_DERIVATION:
                            void 0 === t.bip32Derivation && (t.bip32Derivation = []), t.bip32Derivation.push(i.inputs.bip32Derivation.decode(n));
                            break;
                        case s.InputTypes.FINAL_SCRIPTSIG:
                            u("input", n.key, s.InputTypes.FINAL_SCRIPTSIG), t.finalScriptSig = i.inputs.finalScriptSig.decode(n);
                            break;
                        case s.InputTypes.FINAL_SCRIPTWITNESS:
                            u("input", n.key, s.InputTypes.FINAL_SCRIPTWITNESS), t.finalScriptWitness = i.inputs.finalScriptWitness.decode(n);
                            break;
                        case s.InputTypes.POR_COMMITMENT:
                            u("input", n.key, s.InputTypes.POR_COMMITMENT), t.porCommitment = i.inputs.porCommitment.decode(n);
                            break;
                        case s.InputTypes.TAP_KEY_SIG:
                            u("input", n.key, s.InputTypes.TAP_KEY_SIG), t.tapKeySig = i.inputs.tapKeySig.decode(n);
                            break;
                        case s.InputTypes.TAP_SCRIPT_SIG:
                            void 0 === t.tapScriptSig && (t.tapScriptSig = []), t.tapScriptSig.push(i.inputs.tapScriptSig.decode(n));
                            break;
                        case s.InputTypes.TAP_LEAF_SCRIPT:
                            void 0 === t.tapLeafScript && (t.tapLeafScript = []), t.tapLeafScript.push(i.inputs.tapLeafScript.decode(n));
                            break;
                        case s.InputTypes.TAP_BIP32_DERIVATION:
                            void 0 === t.tapBip32Derivation && (t.tapBip32Derivation = []), t.tapBip32Derivation.push(i.inputs.tapBip32Derivation.decode(n));
                            break;
                        case s.InputTypes.TAP_INTERNAL_KEY:
                            u("input", n.key, s.InputTypes.TAP_INTERNAL_KEY), t.tapInternalKey = i.inputs.tapInternalKey.decode(n);
                            break;
                        case s.InputTypes.TAP_MERKLE_ROOT:
                            u("input", n.key, s.InputTypes.TAP_MERKLE_ROOT), t.tapMerkleRoot = i.inputs.tapMerkleRoot.decode(n);
                            break;
                        default:
                            t.unknownKeyVals || (t.unknownKeyVals = []), t.unknownKeyVals.push(n)
                    }
                    p.push(t)
                }
                for (let e of o.range(f)) {
                    let t = {};
                    for (let r of n[e]) switch (i.outputs.checkPubkey(r), r.key[0]) {
                        case s.OutputTypes.REDEEM_SCRIPT:
                            if (u("output", r.key, s.OutputTypes.REDEEM_SCRIPT), void 0 !== t.redeemScript) throw Error("Format Error: Output has multiple REDEEM_SCRIPT");
                            t.redeemScript = i.outputs.redeemScript.decode(r);
                            break;
                        case s.OutputTypes.WITNESS_SCRIPT:
                            if (u("output", r.key, s.OutputTypes.WITNESS_SCRIPT), void 0 !== t.witnessScript) throw Error("Format Error: Output has multiple WITNESS_SCRIPT");
                            t.witnessScript = i.outputs.witnessScript.decode(r);
                            break;
                        case s.OutputTypes.BIP32_DERIVATION:
                            void 0 === t.bip32Derivation && (t.bip32Derivation = []), t.bip32Derivation.push(i.outputs.bip32Derivation.decode(r));
                            break;
                        case s.OutputTypes.TAP_INTERNAL_KEY:
                            u("output", r.key, s.OutputTypes.TAP_INTERNAL_KEY), t.tapInternalKey = i.outputs.tapInternalKey.decode(r);
                            break;
                        case s.OutputTypes.TAP_TREE:
                            u("output", r.key, s.OutputTypes.TAP_TREE), t.tapTree = i.outputs.tapTree.decode(r);
                            break;
                        case s.OutputTypes.TAP_BIP32_DERIVATION:
                            void 0 === t.tapBip32Derivation && (t.tapBip32Derivation = []), t.tapBip32Derivation.push(i.outputs.tapBip32Derivation.decode(r));
                            break;
                        default:
                            t.unknownKeyVals || (t.unknownKeyVals = []), t.unknownKeyVals.push(r)
                    }
                    h.push(t)
                }
                return {
                    globalMap: a,
                    inputs: p,
                    outputs: h
                }
            }
            t.psbtFromBuffer = function(e, t) {
                let r = 0;

                function n() {
                    let t = a.decode(e, r);
                    r += a.encodingLength(t);
                    let n = e.slice(r, r + t);
                    return r += t, n
                }

                function i() {
                    let e = n(),
                        t = n();
                    return {
                        key: e,
                        value: t
                    }
                }

                function u() {
                    if (r >= e.length) throw Error("Format Error: Unexpected End of PSBT");
                    let t = 0 === e.readUInt8(r);
                    return t && r++, t
                }
                if (1886610036 !== function() {
                        let t = e.readUInt32BE(r);
                        return r += 4, t
                    }()) throw Error("Format Error: Invalid Magic Number");
                if (255 !== function() {
                        let t = e.readUInt8(r);
                        return r += 1, t
                    }()) throw Error("Format Error: Magic Number must be followed by 0xff separator");
                let c = [],
                    f = {};
                for (; !u();) {
                    let e = i(),
                        t = e.key.toString("hex");
                    if (f[t]) throw Error("Format Error: Keys must be unique for global keymap: key " + t);
                    f[t] = 1, c.push(e)
                }
                let p = c.filter(e => e.key[0] === s.GlobalTypes.UNSIGNED_TX);
                if (1 !== p.length) throw Error("Format Error: Only one UNSIGNED_TX allowed");
                let h = t(p[0].value),
                    {
                        inputCount: d,
                        outputCount: y
                    } = h.getInputOutputCounts(),
                    m = [],
                    g = [];
                for (let e of o.range(d)) {
                    let t = {},
                        r = [];
                    for (; !u();) {
                        let n = i(),
                            o = n.key.toString("hex");
                        if (t[o]) throw Error("Format Error: Keys must be unique for each input: input index " + e + " key " + o);
                        t[o] = 1, r.push(n)
                    }
                    m.push(r)
                }
                for (let e of o.range(y)) {
                    let t = {},
                        r = [];
                    for (; !u();) {
                        let n = i(),
                            o = n.key.toString("hex");
                        if (t[o]) throw Error("Format Error: Keys must be unique for each output: output index " + e + " key " + o);
                        t[o] = 1, r.push(n)
                    }
                    g.push(r)
                }
                return l(h, {
                    globalMapKeyVals: c,
                    inputKeyVals: m,
                    outputKeyVals: g
                })
            }, t.checkKeyBuffer = u, t.psbtFromKeyVals = l
        },
        76583: function(e, t, r) {
            "use strict";

            function n(e) {
                for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r])
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), n(r(81610)), n(r(92306))
        },
        92306: function(e, t, r) {
            "use strict";
            var n = r(67133).Buffer;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(56050),
                o = r(74638);
            t.psbtToBuffer = function({
                globalMap: e,
                inputs: t,
                outputs: r
            }) {
                let {
                    globalKeyVals: i,
                    inputKeyVals: a,
                    outputKeyVals: s
                } = u({
                    globalMap: e,
                    inputs: t,
                    outputs: r
                }), l = o.keyValsToBuffer(i), c = e => 0 === e.length ? [n.from([0])] : e.map(o.keyValsToBuffer), f = c(a), p = c(s), h = n.allocUnsafe(5);
                return h.writeUIntBE(482972169471, 0, 5), n.concat([h, l].concat(f, p))
            };
            let a = (e, t) => e.key.compare(t.key);

            function s(e, t) {
                let r = new Set,
                    n = Object.entries(e).reduce((e, [n, i]) => {
                        if ("unknownKeyVals" === n) return e;
                        let o = t[n];
                        if (void 0 === o) return e;
                        let a = (Array.isArray(i) ? i : [i]).map(o.encode),
                            s = a.map(e => e.key.toString("hex"));
                        return s.forEach(e => {
                            if (r.has(e)) throw Error("Serialize Error: Duplicate key: " + e);
                            r.add(e)
                        }), e.concat(a)
                    }, []),
                    i = e.unknownKeyVals ? e.unknownKeyVals.filter(e => !r.has(e.key.toString("hex"))) : [];
                return n.concat(i).sort(a)
            }

            function u({
                globalMap: e,
                inputs: t,
                outputs: r
            }) {
                return {
                    globalKeyVals: s(e, i.globals),
                    inputKeyVals: t.map(e => s(e, i.inputs)),
                    outputKeyVals: r.map(e => s(e, i.outputs))
                }
            }
            t.psbtToKeyVals = u
        },
        46046: function(e, t, r) {
            "use strict";
            var n = r(67133).Buffer;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(70920),
                o = r(76583),
                a = r(38482),
                s = r(21006);
            class u {
                constructor(e) {
                    this.inputs = [], this.outputs = [], this.globalMap = {
                        unsignedTx: e
                    }
                }
                static fromBase64(e, t) {
                    let r = n.from(e, "base64");
                    return this.fromBuffer(r, t)
                }
                static fromHex(e, t) {
                    let r = n.from(e, "hex");
                    return this.fromBuffer(r, t)
                }
                static fromBuffer(e, t) {
                    let r = o.psbtFromBuffer(e, t),
                        n = new this(r.globalMap.unsignedTx);
                    return Object.assign(n, r), n
                }
                toBase64() {
                    let e = this.toBuffer();
                    return e.toString("base64")
                }
                toHex() {
                    let e = this.toBuffer();
                    return e.toString("hex")
                }
                toBuffer() {
                    return o.psbtToBuffer(this)
                }
                updateGlobal(e) {
                    return s.updateGlobal(e, this.globalMap), this
                }
                updateInput(e, t) {
                    let r = s.checkForInput(this.inputs, e);
                    return s.updateInput(t, r), this
                }
                updateOutput(e, t) {
                    let r = s.checkForOutput(this.outputs, e);
                    return s.updateOutput(t, r), this
                }
                addUnknownKeyValToGlobal(e) {
                    return s.checkHasKey(e, this.globalMap.unknownKeyVals, s.getEnumLength(a.GlobalTypes)), this.globalMap.unknownKeyVals || (this.globalMap.unknownKeyVals = []), this.globalMap.unknownKeyVals.push(e), this
                }
                addUnknownKeyValToInput(e, t) {
                    let r = s.checkForInput(this.inputs, e);
                    return s.checkHasKey(t, r.unknownKeyVals, s.getEnumLength(a.InputTypes)), r.unknownKeyVals || (r.unknownKeyVals = []), r.unknownKeyVals.push(t), this
                }
                addUnknownKeyValToOutput(e, t) {
                    let r = s.checkForOutput(this.outputs, e);
                    return s.checkHasKey(t, r.unknownKeyVals, s.getEnumLength(a.OutputTypes)), r.unknownKeyVals || (r.unknownKeyVals = []), r.unknownKeyVals.push(t), this
                }
                addInput(e) {
                    this.globalMap.unsignedTx.addInput(e), this.inputs.push({
                        unknownKeyVals: []
                    });
                    let t = e.unknownKeyVals || [],
                        r = this.inputs.length - 1;
                    if (!Array.isArray(t)) throw Error("unknownKeyVals must be an Array");
                    return t.forEach(e => this.addUnknownKeyValToInput(r, e)), s.addInputAttributes(this.inputs, e), this
                }
                addOutput(e) {
                    this.globalMap.unsignedTx.addOutput(e), this.outputs.push({
                        unknownKeyVals: []
                    });
                    let t = e.unknownKeyVals || [],
                        r = this.outputs.length - 1;
                    if (!Array.isArray(t)) throw Error("unknownKeyVals must be an Array");
                    return t.forEach(e => this.addUnknownKeyValToOutput(r, e)), s.addOutputAttributes(this.outputs, e), this
                }
                clearFinalizedInput(e) {
                    let t = s.checkForInput(this.inputs, e);
                    for (let r of (s.inputCheckUncleanFinalized(e, t), Object.keys(t)))["witnessUtxo", "nonWitnessUtxo", "finalScriptSig", "finalScriptWitness", "unknownKeyVals"].includes(r) || delete t[r];
                    return this
                }
                combine(...e) {
                    let t = i.combine([this].concat(e));
                    return Object.assign(this, t), this
                }
                getTransaction() {
                    return this.globalMap.unsignedTx.toBuffer()
                }
            }
            t.Psbt = u
        },
        38482: function(e, t) {
            "use strict";
            var r, n, i;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), (r = t.GlobalTypes || (t.GlobalTypes = {}))[r.UNSIGNED_TX = 0] = "UNSIGNED_TX", r[r.GLOBAL_XPUB = 1] = "GLOBAL_XPUB", t.GLOBAL_TYPE_NAMES = ["unsignedTx", "globalXpub"], (n = t.InputTypes || (t.InputTypes = {}))[n.NON_WITNESS_UTXO = 0] = "NON_WITNESS_UTXO", n[n.WITNESS_UTXO = 1] = "WITNESS_UTXO", n[n.PARTIAL_SIG = 2] = "PARTIAL_SIG", n[n.SIGHASH_TYPE = 3] = "SIGHASH_TYPE", n[n.REDEEM_SCRIPT = 4] = "REDEEM_SCRIPT", n[n.WITNESS_SCRIPT = 5] = "WITNESS_SCRIPT", n[n.BIP32_DERIVATION = 6] = "BIP32_DERIVATION", n[n.FINAL_SCRIPTSIG = 7] = "FINAL_SCRIPTSIG", n[n.FINAL_SCRIPTWITNESS = 8] = "FINAL_SCRIPTWITNESS", n[n.POR_COMMITMENT = 9] = "POR_COMMITMENT", n[n.TAP_KEY_SIG = 19] = "TAP_KEY_SIG", n[n.TAP_SCRIPT_SIG = 20] = "TAP_SCRIPT_SIG", n[n.TAP_LEAF_SCRIPT = 21] = "TAP_LEAF_SCRIPT", n[n.TAP_BIP32_DERIVATION = 22] = "TAP_BIP32_DERIVATION", n[n.TAP_INTERNAL_KEY = 23] = "TAP_INTERNAL_KEY", n[n.TAP_MERKLE_ROOT = 24] = "TAP_MERKLE_ROOT", t.INPUT_TYPE_NAMES = ["nonWitnessUtxo", "witnessUtxo", "partialSig", "sighashType", "redeemScript", "witnessScript", "bip32Derivation", "finalScriptSig", "finalScriptWitness", "porCommitment", "tapKeySig", "tapScriptSig", "tapLeafScript", "tapBip32Derivation", "tapInternalKey", "tapMerkleRoot"], (i = t.OutputTypes || (t.OutputTypes = {}))[i.REDEEM_SCRIPT = 0] = "REDEEM_SCRIPT", i[i.WITNESS_SCRIPT = 1] = "WITNESS_SCRIPT", i[i.BIP32_DERIVATION = 2] = "BIP32_DERIVATION", i[i.TAP_INTERNAL_KEY = 5] = "TAP_INTERNAL_KEY", i[i.TAP_TREE = 6] = "TAP_TREE", i[i.TAP_BIP32_DERIVATION = 7] = "TAP_BIP32_DERIVATION", t.OUTPUT_TYPE_NAMES = ["redeemScript", "witnessScript", "bip32Derivation", "tapInternalKey", "tapTree", "tapBip32Derivation"]
        },
        21006: function(e, t, r) {
            "use strict";
            var n = r(67133).Buffer;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(56050);

            function o(e, t) {
                let r = e[t];
                if (void 0 === r) throw Error(`No input #${t}`);
                return r
            }

            function a(e, t) {
                let r = e[t];
                if (void 0 === r) throw Error(`No output #${t}`);
                return r
            }

            function s(e, t, r, n) {
                throw Error(`Data for ${e} key ${t} is incorrect: Expected ${r} and got ${JSON.stringify(n)}`)
            }

            function u(e) {
                return (t, r) => {
                    for (let n of Object.keys(t)) {
                        let o = t[n],
                            {
                                canAdd: a,
                                canAddToArray: u,
                                check: l,
                                expected: c
                            } = i[e + "s"][n] || {},
                            f = !!u;
                        if (l) {
                            if (f) {
                                if (!Array.isArray(o) || r[n] && !Array.isArray(r[n])) throw Error(`Key type ${n} must be an array`);
                                o.every(l) || s(e, n, c, o);
                                let t = r[n] || [],
                                    i = new Set;
                                if (!o.every(e => u(t, e, i))) throw Error("Can not add duplicate data to array");
                                r[n] = t.concat(o)
                            } else {
                                if (l(o) || s(e, n, c, o), !a(r, o)) throw Error(`Can not add duplicate data to ${e}`);
                                r[n] = o
                            }
                        }
                    }
                }
            }
            t.checkForInput = o, t.checkForOutput = a, t.checkHasKey = function(e, t, r) {
                if (e.key[0] < r) throw Error("Use the method for your specific key instead of addUnknownKeyVal*");
                if (t && 0 !== t.filter(t => t.key.equals(e.key)).length) throw Error(`Duplicate Key: ${e.key.toString("hex")}`)
            }, t.getEnumLength = function(e) {
                let t = 0;
                return Object.keys(e).forEach(e => {
                    Number(isNaN(Number(e))) && t++
                }), t
            }, t.inputCheckUncleanFinalized = function(e, t) {
                let r = !1;
                if (t.nonWitnessUtxo || t.witnessUtxo) {
                    let e = !!t.redeemScript,
                        n = !!t.witnessScript,
                        i = !e || !!t.finalScriptSig,
                        o = !n || !!t.finalScriptWitness,
                        a = !!t.finalScriptSig || !!t.finalScriptWitness;
                    r = i && o && a
                }
                if (!1 === r) throw Error(`Input #${e} has too much or too little data to clean`)
            }, t.updateGlobal = u("global"), t.updateInput = u("input"), t.updateOutput = u("output"), t.addInputAttributes = function(e, r) {
                let n = e.length - 1,
                    i = o(e, n);
                t.updateInput(r, i)
            }, t.addOutputAttributes = function(e, r) {
                let n = e.length - 1,
                    i = a(e, n);
                t.updateOutput(r, i)
            }, t.defaultVersionSetter = function(e, t) {
                if (!n.isBuffer(t) || t.length < 4) throw Error("Set Version: Invalid Transaction");
                return t.writeUInt32LE(e, 0), t
            }, t.defaultLocktimeSetter = function(e, t) {
                if (!n.isBuffer(t) || t.length < 4) throw Error("Set Locktime: Invalid Transaction");
                return t.writeUInt32LE(e, t.length - 4), t
            }
        },
        12122: function(e, t) {
            "use strict";

            function r(e) {
                if (!Number.isSafeInteger(e) || e < 0) throw Error(`Wrong positive integer: ${e}`)
            }

            function n(e) {
                if ("boolean" != typeof e) throw Error(`Expected boolean, not ${e}`)
            }

            function i(e, ...t) {
                if (!(e instanceof Uint8Array || null != e && "object" == typeof e && "Uint8Array" === e.constructor.name)) throw Error("Expected Uint8Array");
                if (t.length > 0 && !t.includes(e.length)) throw Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`)
            }

            function o(e) {
                if ("function" != typeof e || "function" != typeof e.create) throw Error("Hash should be wrapped by utils.wrapConstructor");
                r(e.outputLen), r(e.blockLen)
            }

            function a(e, t = !0) {
                if (e.destroyed) throw Error("Hash instance has been destroyed");
                if (t && e.finished) throw Error("Hash#digest() has already been called")
            }

            function s(e, t) {
                i(e);
                let r = t.outputLen;
                if (e.length < r) throw Error(`digestInto() expects output buffer of length at least ${r}`)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.output = t.exists = t.hash = t.bytes = t.bool = t.number = void 0, t.number = r, t.bool = n, t.bytes = i, t.hash = o, t.exists = a, t.output = s, t.default = {
                number: r,
                bool: n,
                bytes: i,
                hash: o,
                exists: a,
                output: s
            }
        },
        54581: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SHA2 = void 0;
            let n = r(12122),
                i = r(15327);
            class o extends i.Hash {
                constructor(e, t, r, n) {
                    super(), this.blockLen = e, this.outputLen = t, this.padOffset = r, this.isLE = n, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(e), this.view = (0, i.createView)(this.buffer)
                }
                update(e) {
                    (0, n.exists)(this);
                    let {
                        view: t,
                        buffer: r,
                        blockLen: o
                    } = this;
                    e = (0, i.toBytes)(e);
                    let a = e.length;
                    for (let n = 0; n < a;) {
                        let s = Math.min(o - this.pos, a - n);
                        if (s === o) {
                            let t = (0, i.createView)(e);
                            for (; o <= a - n; n += o) this.process(t, n);
                            continue
                        }
                        r.set(e.subarray(n, n + s), this.pos), this.pos += s, n += s, this.pos === o && (this.process(t, 0), this.pos = 0)
                    }
                    return this.length += e.length, this.roundClean(), this
                }
                digestInto(e) {
                    (0, n.exists)(this), (0, n.output)(e, this), this.finished = !0;
                    let {
                        buffer: t,
                        view: r,
                        blockLen: o,
                        isLE: a
                    } = this, {
                        pos: s
                    } = this;
                    t[s++] = 128, this.buffer.subarray(s).fill(0), this.padOffset > o - s && (this.process(r, 0), s = 0);
                    for (let e = s; e < o; e++) t[e] = 0;
                    ! function(e, t, r, n) {
                        if ("function" == typeof e.setBigUint64) return e.setBigUint64(t, r, n);
                        let i = BigInt(32),
                            o = BigInt(4294967295),
                            a = Number(r >> i & o),
                            s = Number(r & o),
                            u = n ? 4 : 0,
                            l = n ? 0 : 4;
                        e.setUint32(t + u, a, n), e.setUint32(t + l, s, n)
                    }(r, o - 8, BigInt(8 * this.length), a), this.process(r, 0);
                    let u = (0, i.createView)(e),
                        l = this.outputLen;
                    if (l % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
                    let c = l / 4,
                        f = this.get();
                    if (c > f.length) throw Error("_sha2: outputLen bigger than state");
                    for (let e = 0; e < c; e++) u.setUint32(4 * e, f[e], a)
                }
                digest() {
                    let {
                        buffer: e,
                        outputLen: t
                    } = this;
                    this.digestInto(e);
                    let r = e.slice(0, t);
                    return this.destroy(), r
                }
                _cloneInto(e) {
                    e || (e = new this.constructor), e.set(...this.get());
                    let {
                        blockLen: t,
                        buffer: r,
                        length: n,
                        finished: i,
                        destroyed: o,
                        pos: a
                    } = this;
                    return e.length = n, e.pos = a, e.finished = i, e.destroyed = o, n % t && e.buffer.set(r), e
                }
            }
            t.SHA2 = o
        },
        92113: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.crypto = void 0, t.crypto = "object" == typeof globalThis && "crypto" in globalThis ? globalThis.crypto : void 0
        },
        81851: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ripemd160 = t.RIPEMD160 = void 0;
            let n = r(54581),
                i = r(15327),
                o = new Uint8Array([7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8]),
                a = Uint8Array.from({
                    length: 16
                }, (e, t) => t),
                s = a.map(e => (9 * e + 5) % 16),
                u = [a],
                l = [s];
            for (let e = 0; e < 4; e++)
                for (let t of [u, l]) t.push(t[e].map(e => o[e]));
            let c = [
                    [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8],
                    [12, 13, 11, 15, 6, 9, 9, 7, 12, 15, 11, 13, 7, 8, 7, 7],
                    [13, 15, 14, 11, 7, 7, 6, 8, 13, 14, 13, 12, 5, 5, 6, 9],
                    [14, 11, 12, 14, 8, 6, 5, 5, 15, 12, 15, 14, 9, 9, 8, 6],
                    [15, 12, 13, 13, 9, 5, 8, 6, 14, 11, 12, 11, 8, 6, 5, 5]
                ].map(e => new Uint8Array(e)),
                f = u.map((e, t) => e.map(e => c[t][e])),
                p = l.map((e, t) => e.map(e => c[t][e])),
                h = new Uint32Array([0, 1518500249, 1859775393, 2400959708, 2840853838]),
                d = new Uint32Array([1352829926, 1548603684, 1836072691, 2053994217, 0]),
                y = (e, t) => e << t | e >>> 32 - t;

            function m(e, t, r, n) {
                return 0 === e ? t ^ r ^ n : 1 === e ? t & r | ~t & n : 2 === e ? (t | ~r) ^ n : 3 === e ? t & n | r & ~n : t ^ (r | ~n)
            }
            let g = new Uint32Array(16);
            class b extends n.SHA2 {
                constructor() {
                    super(64, 20, 8, !0), this.h0 = 1732584193, this.h1 = -271733879, this.h2 = -1732584194, this.h3 = 271733878, this.h4 = -1009589776
                }
                get() {
                    let {
                        h0: e,
                        h1: t,
                        h2: r,
                        h3: n,
                        h4: i
                    } = this;
                    return [e, t, r, n, i]
                }
                set(e, t, r, n, i) {
                    this.h0 = 0 | e, this.h1 = 0 | t, this.h2 = 0 | r, this.h3 = 0 | n, this.h4 = 0 | i
                }
                process(e, t) {
                    for (let r = 0; r < 16; r++, t += 4) g[r] = e.getUint32(t, !0);
                    let r = 0 | this.h0,
                        n = r,
                        i = 0 | this.h1,
                        o = i,
                        a = 0 | this.h2,
                        s = a,
                        c = 0 | this.h3,
                        b = c,
                        v = 0 | this.h4,
                        E = v;
                    for (let e = 0; e < 5; e++) {
                        let t = 4 - e,
                            w = h[e],
                            S = d[e],
                            T = u[e],
                            _ = l[e],
                            k = f[e],
                            I = p[e];
                        for (let t = 0; t < 16; t++) {
                            let n = y(r + m(e, i, a, c) + g[T[t]] + w, k[t]) + v | 0;
                            r = v, v = c, c = 0 | y(a, 10), a = i, i = n
                        }
                        for (let e = 0; e < 16; e++) {
                            let r = y(n + m(t, o, s, b) + g[_[e]] + S, I[e]) + E | 0;
                            n = E, E = b, b = 0 | y(s, 10), s = o, o = r
                        }
                    }
                    this.set(this.h1 + a + b | 0, this.h2 + c + E | 0, this.h3 + v + n | 0, this.h4 + r + o | 0, this.h0 + i + s | 0)
                }
                roundClean() {
                    g.fill(0)
                }
                destroy() {
                    this.destroyed = !0, this.buffer.fill(0), this.set(0, 0, 0, 0, 0)
                }
            }
            t.RIPEMD160 = b, t.ripemd160 = (0, i.wrapConstructor)(() => new b)
        },
        47033: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.sha1 = void 0;
            let n = r(54581),
                i = r(15327),
                o = (e, t) => e << t | e >>> 32 - t >>> 0,
                a = (e, t, r) => e & t ^ ~e & r,
                s = (e, t, r) => e & t ^ e & r ^ t & r,
                u = new Uint32Array([1732584193, 4023233417, 2562383102, 271733878, 3285377520]),
                l = new Uint32Array(80);
            class c extends n.SHA2 {
                constructor() {
                    super(64, 20, 8, !1), this.A = 0 | u[0], this.B = 0 | u[1], this.C = 0 | u[2], this.D = 0 | u[3], this.E = 0 | u[4]
                }
                get() {
                    let {
                        A: e,
                        B: t,
                        C: r,
                        D: n,
                        E: i
                    } = this;
                    return [e, t, r, n, i]
                }
                set(e, t, r, n, i) {
                    this.A = 0 | e, this.B = 0 | t, this.C = 0 | r, this.D = 0 | n, this.E = 0 | i
                }
                process(e, t) {
                    for (let r = 0; r < 16; r++, t += 4) l[r] = e.getUint32(t, !1);
                    for (let e = 16; e < 80; e++) l[e] = o(l[e - 3] ^ l[e - 8] ^ l[e - 14] ^ l[e - 16], 1);
                    let {
                        A: r,
                        B: n,
                        C: i,
                        D: u,
                        E: c
                    } = this;
                    for (let e = 0; e < 80; e++) {
                        let t, f;
                        e < 20 ? (t = a(n, i, u), f = 1518500249) : e < 40 ? (t = n ^ i ^ u, f = 1859775393) : e < 60 ? (t = s(n, i, u), f = 2400959708) : (t = n ^ i ^ u, f = 3395469782);
                        let p = o(r, 5) + t + c + f + l[e] | 0;
                        c = u, u = i, i = o(n, 30), n = r, r = p
                    }
                    r = r + this.A | 0, n = n + this.B | 0, i = i + this.C | 0, u = u + this.D | 0, c = c + this.E | 0, this.set(r, n, i, u, c)
                }
                roundClean() {
                    l.fill(0)
                }
                destroy() {
                    this.set(0, 0, 0, 0, 0), this.buffer.fill(0)
                }
            }
            t.sha1 = (0, i.wrapConstructor)(() => new c)
        },
        74289: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.sha224 = t.sha256 = void 0;
            let n = r(54581),
                i = r(15327),
                o = (e, t, r) => e & t ^ ~e & r,
                a = (e, t, r) => e & t ^ e & r ^ t & r,
                s = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]),
                u = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]),
                l = new Uint32Array(64);
            class c extends n.SHA2 {
                constructor() {
                    super(64, 32, 8, !1), this.A = 0 | u[0], this.B = 0 | u[1], this.C = 0 | u[2], this.D = 0 | u[3], this.E = 0 | u[4], this.F = 0 | u[5], this.G = 0 | u[6], this.H = 0 | u[7]
                }
                get() {
                    let {
                        A: e,
                        B: t,
                        C: r,
                        D: n,
                        E: i,
                        F: o,
                        G: a,
                        H: s
                    } = this;
                    return [e, t, r, n, i, o, a, s]
                }
                set(e, t, r, n, i, o, a, s) {
                    this.A = 0 | e, this.B = 0 | t, this.C = 0 | r, this.D = 0 | n, this.E = 0 | i, this.F = 0 | o, this.G = 0 | a, this.H = 0 | s
                }
                process(e, t) {
                    for (let r = 0; r < 16; r++, t += 4) l[r] = e.getUint32(t, !1);
                    for (let e = 16; e < 64; e++) {
                        let t = l[e - 15],
                            r = l[e - 2],
                            n = (0, i.rotr)(t, 7) ^ (0, i.rotr)(t, 18) ^ t >>> 3,
                            o = (0, i.rotr)(r, 17) ^ (0, i.rotr)(r, 19) ^ r >>> 10;
                        l[e] = o + l[e - 7] + n + l[e - 16] | 0
                    }
                    let {
                        A: r,
                        B: n,
                        C: u,
                        D: c,
                        E: f,
                        F: p,
                        G: h,
                        H: d
                    } = this;
                    for (let e = 0; e < 64; e++) {
                        let t = (0, i.rotr)(f, 6) ^ (0, i.rotr)(f, 11) ^ (0, i.rotr)(f, 25),
                            y = d + t + o(f, p, h) + s[e] + l[e] | 0,
                            m = (0, i.rotr)(r, 2) ^ (0, i.rotr)(r, 13) ^ (0, i.rotr)(r, 22),
                            g = m + a(r, n, u) | 0;
                        d = h, h = p, p = f, f = c + y | 0, c = u, u = n, n = r, r = y + g | 0
                    }
                    r = r + this.A | 0, n = n + this.B | 0, u = u + this.C | 0, c = c + this.D | 0, f = f + this.E | 0, p = p + this.F | 0, h = h + this.G | 0, d = d + this.H | 0, this.set(r, n, u, c, f, p, h, d)
                }
                roundClean() {
                    l.fill(0)
                }
                destroy() {
                    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0)
                }
            }
            class f extends c {
                constructor() {
                    super(), this.A = -1056596264, this.B = 914150663, this.C = 812702999, this.D = -150054599, this.E = -4191439, this.F = 1750603025, this.G = 1694076839, this.H = -1090891868, this.outputLen = 28
                }
            }
            t.sha256 = (0, i.wrapConstructor)(() => new c), t.sha224 = (0, i.wrapConstructor)(() => new f)
        },
        15327: function(e, t, r) {
            "use strict"; /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.randomBytes = t.wrapXOFConstructorWithOpts = t.wrapConstructorWithOpts = t.wrapConstructor = t.checkOpts = t.Hash = t.concatBytes = t.toBytes = t.utf8ToBytes = t.asyncLoop = t.nextTick = t.hexToBytes = t.bytesToHex = t.isLE = t.rotr = t.createView = t.u32 = t.u8 = void 0;
            let n = r(92113);

            function i(e) {
                return e instanceof Uint8Array || null != e && "object" == typeof e && "Uint8Array" === e.constructor.name
            }
            if (t.u8 = e => new Uint8Array(e.buffer, e.byteOffset, e.byteLength), t.u32 = e => new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)), t.createView = e => new DataView(e.buffer, e.byteOffset, e.byteLength), t.rotr = (e, t) => e << 32 - t | e >>> t, t.isLE = 68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0], !t.isLE) throw Error("Non little-endian hardware is not supported");
            let o = Array.from({
                length: 256
            }, (e, t) => t.toString(16).padStart(2, "0"));
            t.bytesToHex = function(e) {
                if (!i(e)) throw Error("Uint8Array expected");
                let t = "";
                for (let r = 0; r < e.length; r++) t += o[e[r]];
                return t
            };
            let a = {
                _0: 48,
                _9: 57,
                _A: 65,
                _F: 70,
                _a: 97,
                _f: 102
            };

            function s(e) {
                return e >= a._0 && e <= a._9 ? e - a._0 : e >= a._A && e <= a._F ? e - (a._A - 10) : e >= a._a && e <= a._f ? e - (a._a - 10) : void 0
            }
            t.hexToBytes = function(e) {
                if ("string" != typeof e) throw Error("hex string expected, got " + typeof e);
                let t = e.length,
                    r = t / 2;
                if (t % 2) throw Error("padded hex string expected, got unpadded hex of length " + t);
                let n = new Uint8Array(r);
                for (let t = 0, i = 0; t < r; t++, i += 2) {
                    let r = s(e.charCodeAt(i)),
                        o = s(e.charCodeAt(i + 1));
                    if (void 0 === r || void 0 === o) {
                        let t = e[i] + e[i + 1];
                        throw Error('hex string expected, got non-hex character "' + t + '" at index ' + i)
                    }
                    n[t] = 16 * r + o
                }
                return n
            };
            let u = async () => {};
            async function l(e, r, n) {
                let i = Date.now();
                for (let o = 0; o < e; o++) {
                    n(o);
                    let e = Date.now() - i;
                    e >= 0 && e < r || (await (0, t.nextTick)(), i += e)
                }
            }

            function c(e) {
                if ("string" != typeof e) throw Error(`utf8ToBytes expected string, got ${typeof e}`);
                return new Uint8Array(new TextEncoder().encode(e))
            }

            function f(e) {
                if ("string" == typeof e && (e = c(e)), !i(e)) throw Error(`expected Uint8Array, got ${typeof e}`);
                return e
            }
            t.nextTick = u, t.asyncLoop = l, t.utf8ToBytes = c, t.toBytes = f, t.concatBytes = function(...e) {
                let t = 0;
                for (let r = 0; r < e.length; r++) {
                    let n = e[r];
                    if (!i(n)) throw Error("Uint8Array expected");
                    t += n.length
                }
                let r = new Uint8Array(t);
                for (let t = 0, n = 0; t < e.length; t++) {
                    let i = e[t];
                    r.set(i, n), n += i.length
                }
                return r
            };
            class p {
                clone() {
                    return this._cloneInto()
                }
            }
            t.Hash = p;
            let h = {}.toString;
            t.checkOpts = function(e, t) {
                if (void 0 !== t && "[object Object]" !== h.call(t)) throw Error("Options should be object or undefined");
                let r = Object.assign(e, t);
                return r
            }, t.wrapConstructor = function(e) {
                let t = t => e().update(f(t)).digest(),
                    r = e();
                return t.outputLen = r.outputLen, t.blockLen = r.blockLen, t.create = () => e(), t
            }, t.wrapConstructorWithOpts = function(e) {
                let t = (t, r) => e(r).update(f(t)).digest(),
                    r = e({});
                return t.outputLen = r.outputLen, t.blockLen = r.blockLen, t.create = t => e(t), t
            }, t.wrapXOFConstructorWithOpts = function(e) {
                let t = (t, r) => e(r).update(f(t)).digest(),
                    r = e({});
                return t.outputLen = r.outputLen, t.blockLen = r.blockLen, t.create = t => e(t), t
            }, t.randomBytes = function(e = 32) {
                if (n.crypto && "function" == typeof n.crypto.getRandomValues) return n.crypto.getRandomValues(new Uint8Array(e));
                throw Error("crypto.getRandomValues must be defined")
            }
        },
        40734: function(e, t, r) {
            "use strict";
            var n = r(67133).Buffer;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.toOutputScript = t.fromOutputScript = t.toBech32 = t.toBase58Check = t.fromBech32 = t.fromBase58Check = void 0;
            let i = r(12341),
                o = r(24074),
                a = r(46395),
                s = r(14400),
                u = r(46656),
                l = r(12193),
                c = "WARNING: Sending to a future segwit version address can lead to loss of funds. End users MUST be warned carefully in the GUI and asked if they wish to proceed with caution. Wallets should verify the segwit version from the output of fromBech32, then decide when it is safe to use which version of segwit.";

            function f(e) {
                let t = n.from(l.decode(e));
                if (t.length < 21) throw TypeError(e + " is too short");
                if (t.length > 21) throw TypeError(e + " is too long");
                let r = t.readUInt8(0),
                    i = t.slice(1);
                return {
                    version: r,
                    hash: i
                }
            }

            function p(e) {
                let t, r;
                try {
                    t = u.bech32.decode(e)
                } catch (e) {}
                if (t) {
                    if (0 !== (r = t.words[0])) throw TypeError(e + " uses wrong encoding")
                } else if (0 === (r = (t = u.bech32m.decode(e)).words[0])) throw TypeError(e + " uses wrong encoding");
                let i = u.bech32.fromWords(t.words.slice(1));
                return {
                    version: r,
                    prefix: t.prefix,
                    data: n.from(i)
                }
            }

            function h(e, t, r) {
                let n = u.bech32.toWords(e);
                return n.unshift(t), 0 === t ? u.bech32.encode(r, n) : u.bech32m.encode(r, n)
            }
            t.fromBase58Check = f, t.fromBech32 = p, t.toBase58Check = function(e, t) {
                (0, s.typeforce)((0, s.tuple)(s.Hash160bit, s.UInt8), arguments);
                let r = n.allocUnsafe(21);
                return r.writeUInt8(t, 0), e.copy(r, 1), l.encode(r)
            }, t.toBech32 = h, t.fromOutputScript = function(e, t) {
                t = t || i.bitcoin;
                try {
                    return o.p2pkh({
                        output: e,
                        network: t
                    }).address
                } catch (e) {}
                try {
                    return o.p2sh({
                        output: e,
                        network: t
                    }).address
                } catch (e) {}
                try {
                    return o.p2wpkh({
                        output: e,
                        network: t
                    }).address
                } catch (e) {}
                try {
                    return o.p2wsh({
                        output: e,
                        network: t
                    }).address
                } catch (e) {}
                try {
                    return o.p2tr({
                        output: e,
                        network: t
                    }).address
                } catch (e) {}
                try {
                    return function(e, t) {
                        let r = e.slice(2);
                        if (r.length < 2 || r.length > 40) throw TypeError("Invalid program length for segwit address");
                        let n = e[0] - 80;
                        if (n < 2 || n > 16) throw TypeError("Invalid version for segwit address");
                        if (e[1] !== r.length) throw TypeError("Invalid script for segwit address");
                        return console.warn(c), h(r, n, t.bech32)
                    }(e, t)
                } catch (e) {}
                throw Error(a.toASM(e) + " has no matching Address")
            }, t.toOutputScript = function(e, t) {
                let r, n;
                t = t || i.bitcoin;
                try {
                    r = f(e)
                } catch (e) {}
                if (r) {
                    if (r.version === t.pubKeyHash) return o.p2pkh({
                        hash: r.hash
                    }).output;
                    if (r.version === t.scriptHash) return o.p2sh({
                        hash: r.hash
                    }).output
                } else {
                    try {
                        n = p(e)
                    } catch (e) {}
                    if (n) {
                        if (n.prefix !== t.bech32) throw Error(e + " has an invalid prefix");
                        if (0 === n.version) {
                            if (20 === n.data.length) return o.p2wpkh({
                                hash: n.data
                            }).output;
                            if (32 === n.data.length) return o.p2wsh({
                                hash: n.data
                            }).output
                        } else if (1 === n.version) {
                            if (32 === n.data.length) return o.p2tr({
                                pubkey: n.data
                            }).output
                        } else if (n.version >= 2 && n.version <= 16 && n.data.length >= 2 && n.data.length <= 40) return console.warn(c), a.compile([n.version + 80, n.data])
                    }
                }
                throw Error(e + " has no matching Script")
            }
        },
        462: function(e, t, r) {
            "use strict";
            var n = r(67133).Buffer;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.encode = t.decode = t.check = void 0, t.check = function(e) {
                if (e.length < 8 || e.length > 72 || 48 !== e[0] || e[1] !== e.length - 2 || 2 !== e[2]) return !1;
                let t = e[3];
                if (0 === t || 5 + t >= e.length || 2 !== e[4 + t]) return !1;
                let r = e[5 + t];
                return 0 !== r && 6 + t + r === e.length && !(128 & e[4]) && (!(t > 1) || 0 !== e[4] || !!(128 & e[5])) && !(128 & e[t + 6]) && (!(r > 1) || 0 !== e[t + 6] || !!(128 & e[t + 7]))
            }, t.decode = function(e) {
                if (e.length < 8) throw Error("DER sequence length is too short");
                if (e.length > 72) throw Error("DER sequence length is too long");
                if (48 !== e[0]) throw Error("Expected DER sequence");
                if (e[1] !== e.length - 2) throw Error("DER sequence length is invalid");
                if (2 !== e[2]) throw Error("Expected DER integer");
                let t = e[3];
                if (0 === t) throw Error("R length is zero");
                if (5 + t >= e.length) throw Error("R length is too long");
                if (2 !== e[4 + t]) throw Error("Expected DER integer (2)");
                let r = e[5 + t];
                if (0 === r) throw Error("S length is zero");
                if (6 + t + r !== e.length) throw Error("S length is invalid");
                if (128 & e[4]) throw Error("R value is negative");
                if (t > 1 && 0 === e[4] && !(128 & e[5])) throw Error("R value excessively padded");
                if (128 & e[t + 6]) throw Error("S value is negative");
                if (r > 1 && 0 === e[t + 6] && !(128 & e[t + 7])) throw Error("S value excessively padded");
                return {
                    r: e.slice(4, 4 + t),
                    s: e.slice(6 + t)
                }
            }, t.encode = function(e, t) {
                let r = e.length,
                    i = t.length;
                if (0 === r) throw Error("R length is zero");
                if (0 === i) throw Error("S length is zero");
                if (r > 33) throw Error("R length is too long");
                if (i > 33) throw Error("S length is too long");
                if (128 & e[0]) throw Error("R value is negative");
                if (128 & t[0]) throw Error("S value is negative");
                if (r > 1 && 0 === e[0] && !(128 & e[1])) throw Error("R value excessively padded");
                if (i > 1 && 0 === t[0] && !(128 & t[1])) throw Error("S value excessively padded");
                let o = n.allocUnsafe(6 + r + i);
                return o[0] = 48, o[1] = o.length - 2, o[2] = 2, o[3] = e.length, e.copy(o, 4), o[4 + r] = 2, o[5 + r] = t.length, t.copy(o, 6 + r), o
            }
        },
        13803: function(e, t, r) {
            "use strict";
            var n = r(67133).Buffer;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Block = void 0;
            let i = r(36610),
                o = r(7428),
                a = r(26402),
                s = r(70520),
                u = r(14400),
                {
                    typeforce: l
                } = u,
                c = TypeError("Cannot compute merkle root for zero transactions"),
                f = TypeError("Cannot compute witness commit for non-segwit block");
            class p {
                constructor() {
                    this.version = 1, this.prevHash = void 0, this.merkleRoot = void 0, this.timestamp = 0, this.witnessCommit = void 0, this.bits = 0, this.nonce = 0, this.transactions = void 0
                }
                static fromBuffer(e) {
                    if (e.length < 80) throw Error("Buffer too small (< 80 bytes)");
                    let t = new i.BufferReader(e),
                        r = new p;
                    if (r.version = t.readInt32(), r.prevHash = t.readSlice(32), r.merkleRoot = t.readSlice(32), r.timestamp = t.readUInt32(), r.bits = t.readUInt32(), r.nonce = t.readUInt32(), 80 === e.length) return r;
                    let n = () => {
                            let e = s.Transaction.fromBuffer(t.buffer.slice(t.offset), !0);
                            return t.offset += e.byteLength(), e
                        },
                        o = t.readVarInt();
                    r.transactions = [];
                    for (let e = 0; e < o; ++e) {
                        let e = n();
                        r.transactions.push(e)
                    }
                    let a = r.getWitnessCommit();
                    return a && (r.witnessCommit = a), r
                }
                static fromHex(e) {
                    return p.fromBuffer(n.from(e, "hex"))
                }
                static calculateTarget(e) {
                    let t = n.alloc(32, 0);
                    return t.writeUIntBE(8388607 & e, 29 - (((4278190080 & e) >> 24) - 3), 3), t
                }
                static calculateMerkleRoot(e, t) {
                    if (l([{
                            getHash: u.Function
                        }], e), 0 === e.length) throw c;
                    if (t && !h(e)) throw f;
                    let r = e.map(e => e.getHash(t)),
                        i = (0, a.fastMerkleRoot)(r, o.hash256);
                    return t ? o.hash256(n.concat([i, e[0].ins[0].witness[0]])) : i
                }
                getWitnessCommit() {
                    if (!h(this.transactions)) return null;
                    let e = this.transactions[0].outs.filter(e => e.script.slice(0, 6).equals(n.from("6a24aa21a9ed", "hex"))).map(e => e.script.slice(6, 38));
                    if (0 === e.length) return null;
                    let t = e[e.length - 1];
                    return t instanceof n && 32 === t.length ? t : null
                }
                hasWitnessCommit() {
                    return this.witnessCommit instanceof n && 32 === this.witnessCommit.length || null !== this.getWitnessCommit()
                }
                hasWitness() {
                    var e;
                    return (e = this.transactions) instanceof Array && e.some(e => "object" == typeof e && e.ins instanceof Array && e.ins.some(e => "object" == typeof e && e.witness instanceof Array && e.witness.length > 0))
                }
                weight() {
                    let e = this.byteLength(!1, !1),
                        t = this.byteLength(!1, !0);
                    return 3 * e + t
                }
                byteLength(e, t = !0) {
                    return e || !this.transactions ? 80 : 80 + i.varuint.encodingLength(this.transactions.length) + this.transactions.reduce((e, r) => e + r.byteLength(t), 0)
                }
                getHash() {
                    return o.hash256(this.toBuffer(!0))
                }
                getId() {
                    return (0, i.reverseBuffer)(this.getHash()).toString("hex")
                }
                getUTCDate() {
                    let e = new Date(0);
                    return e.setUTCSeconds(this.timestamp), e
                }
                toBuffer(e) {
                    let t = n.allocUnsafe(this.byteLength(e)),
                        r = new i.BufferWriter(t);
                    return r.writeInt32(this.version), r.writeSlice(this.prevHash), r.writeSlice(this.merkleRoot), r.writeUInt32(this.timestamp), r.writeUInt32(this.bits), r.writeUInt32(this.nonce), e || !this.transactions || (i.varuint.encode(this.transactions.length, t, r.offset), r.offset += i.varuint.encode.bytes, this.transactions.forEach(e => {
                        let n = e.byteLength();
                        e.toBuffer(t, r.offset), r.offset += n
                    })), t
                }
                toHex(e) {
                    return this.toBuffer(e).toString("hex")
                }
                checkTxRoots() {
                    let e = this.hasWitnessCommit();
                    return !(!e && this.hasWitness()) && this.__checkMerkleRoot() && (!e || this.__checkWitnessCommit())
                }
                checkProofOfWork() {
                    let e = (0, i.reverseBuffer)(this.getHash()),
                        t = p.calculateTarget(this.bits);
                    return 0 >= e.compare(t)
                }
                __checkMerkleRoot() {
                    if (!this.transactions) throw c;
                    let e = p.calculateMerkleRoot(this.transactions);
                    return 0 === this.merkleRoot.compare(e)
                }
                __checkWitnessCommit() {
                    if (!this.transactions) throw c;
                    if (!this.hasWitnessCommit()) throw f;
                    let e = p.calculateMerkleRoot(this.transactions, !0);
                    return 0 === this.witnessCommit.compare(e)
                }
            }

            function h(e) {
                return e instanceof Array && e[0] && e[0].ins && e[0].ins instanceof Array && e[0].ins[0] && e[0].ins[0].witness && e[0].ins[0].witness instanceof Array && e[0].ins[0].witness.length > 0
            }
            t.Block = p
        },
        36610: function(e, t, r) {
            "use strict";
            var n = r(67133).Buffer;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BufferReader = t.BufferWriter = t.cloneBuffer = t.reverseBuffer = t.writeUInt64LE = t.readUInt64LE = t.varuint = void 0;
            let i = r(14400),
                {
                    typeforce: o
                } = i,
                a = r(91227);

            function s(e, t) {
                if ("number" != typeof e) throw Error("cannot write a non-number as a number");
                if (e < 0) throw Error("specified a negative value for writing an unsigned value");
                if (e > t) throw Error("RangeError: value out of range");
                if (Math.floor(e) !== e) throw Error("value has a fractional component")
            }

            function u(e, t) {
                let r = e.readUInt32LE(t),
                    n = e.readUInt32LE(t + 4);
                return s((n *= 4294967296) + r, 9007199254740991), n + r
            }

            function l(e, t, r) {
                return s(t, 9007199254740991), e.writeInt32LE(-1 & t, r), e.writeUInt32LE(Math.floor(t / 4294967296), r + 4), r + 8
            }
            t.varuint = a, t.readUInt64LE = u, t.writeUInt64LE = l, t.reverseBuffer = function(e) {
                if (e.length < 1) return e;
                let t = e.length - 1,
                    r = 0;
                for (let n = 0; n < e.length / 2; n++) r = e[n], e[n] = e[t], e[t] = r, t--;
                return e
            }, t.cloneBuffer = function(e) {
                let t = n.allocUnsafe(e.length);
                return e.copy(t), t
            };
            class c {
                static withCapacity(e) {
                    return new c(n.alloc(e))
                }
                constructor(e, t = 0) {
                    this.buffer = e, this.offset = t, o(i.tuple(i.Buffer, i.UInt32), [e, t])
                }
                writeUInt8(e) {
                    this.offset = this.buffer.writeUInt8(e, this.offset)
                }
                writeInt32(e) {
                    this.offset = this.buffer.writeInt32LE(e, this.offset)
                }
                writeUInt32(e) {
                    this.offset = this.buffer.writeUInt32LE(e, this.offset)
                }
                writeUInt64(e) {
                    this.offset = l(this.buffer, e, this.offset)
                }
                writeVarInt(e) {
                    a.encode(e, this.buffer, this.offset), this.offset += a.encode.bytes
                }
                writeSlice(e) {
                    if (this.buffer.length < this.offset + e.length) throw Error("Cannot write slice out of bounds");
                    this.offset += e.copy(this.buffer, this.offset)
                }
                writeVarSlice(e) {
                    this.writeVarInt(e.length), this.writeSlice(e)
                }
                writeVector(e) {
                    this.writeVarInt(e.length), e.forEach(e => this.writeVarSlice(e))
                }
                end() {
                    if (this.buffer.length === this.offset) return this.buffer;
                    throw Error(`buffer size ${this.buffer.length}, offset ${this.offset}`)
                }
            }
            t.BufferWriter = c;
            class f {
                constructor(e, t = 0) {
                    this.buffer = e, this.offset = t, o(i.tuple(i.Buffer, i.UInt32), [e, t])
                }
                readUInt8() {
                    let e = this.buffer.readUInt8(this.offset);
                    return this.offset++, e
                }
                readInt32() {
                    let e = this.buffer.readInt32LE(this.offset);
                    return this.offset += 4, e
                }
                readUInt32() {
                    let e = this.buffer.readUInt32LE(this.offset);
                    return this.offset += 4, e
                }
                readUInt64() {
                    let e = u(this.buffer, this.offset);
                    return this.offset += 8, e
                }
                readVarInt() {
                    let e = a.decode(this.buffer, this.offset);
                    return this.offset += a.decode.bytes, e
                }
                readSlice(e) {
                    if (this.buffer.length < this.offset + e) throw Error("Cannot read slice out of bounds");
                    let t = this.buffer.slice(this.offset, this.offset + e);
                    return this.offset += e, t
                }
                readVarSlice() {
                    return this.readSlice(this.readVarInt())
                }
                readVector() {
                    let e = this.readVarInt(),
                        t = [];
                    for (let r = 0; r < e; r++) t.push(this.readVarSlice());
                    return t
                }
            }
            t.BufferReader = f
        },
        7428: function(e, t, r) {
            "use strict";
            var n = r(67133).Buffer;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.taggedHash = t.TAGGED_HASH_PREFIXES = t.TAGS = t.hash256 = t.hash160 = t.sha256 = t.sha1 = t.ripemd160 = void 0;
            let i = r(81851),
                o = r(47033),
                a = r(74289);

            function s(e) {
                return n.from((0, a.sha256)(Uint8Array.from(e)))
            }
            t.ripemd160 = function(e) {
                return n.from((0, i.ripemd160)(Uint8Array.from(e)))
            }, t.sha1 = function(e) {
                return n.from((0, o.sha1)(Uint8Array.from(e)))
            }, t.sha256 = s, t.hash160 = function(e) {
                return n.from((0, i.ripemd160)((0, a.sha256)(Uint8Array.from(e))))
            }, t.hash256 = function(e) {
                return n.from((0, a.sha256)((0, a.sha256)(Uint8Array.from(e))))
            }, t.TAGS = ["BIP0340/challenge", "BIP0340/aux", "BIP0340/nonce", "TapLeaf", "TapBranch", "TapSighash", "TapTweak", "KeyAgg list", "KeyAgg coefficient"], t.TAGGED_HASH_PREFIXES = {
                "BIP0340/challenge": n.from([123, 181, 45, 122, 159, 239, 88, 50, 62, 177, 191, 122, 64, 125, 179, 130, 210, 243, 242, 216, 27, 177, 34, 79, 73, 254, 81, 143, 109, 72, 211, 124, 123, 181, 45, 122, 159, 239, 88, 50, 62, 177, 191, 122, 64, 125, 179, 130, 210, 243, 242, 216, 27, 177, 34, 79, 73, 254, 81, 143, 109, 72, 211, 124]),
                "BIP0340/aux": n.from([241, 239, 78, 94, 192, 99, 202, 218, 109, 148, 202, 250, 157, 152, 126, 160, 105, 38, 88, 57, 236, 193, 31, 151, 45, 119, 165, 46, 216, 193, 204, 144, 241, 239, 78, 94, 192, 99, 202, 218, 109, 148, 202, 250, 157, 152, 126, 160, 105, 38, 88, 57, 236, 193, 31, 151, 45, 119, 165, 46, 216, 193, 204, 144]),
                "BIP0340/nonce": n.from([7, 73, 119, 52, 167, 155, 203, 53, 91, 155, 140, 125, 3, 79, 18, 28, 244, 52, 215, 62, 247, 45, 218, 25, 135, 0, 97, 251, 82, 191, 235, 47, 7, 73, 119, 52, 167, 155, 203, 53, 91, 155, 140, 125, 3, 79, 18, 28, 244, 52, 215, 62, 247, 45, 218, 25, 135, 0, 97, 251, 82, 191, 235, 47]),
                TapLeaf: n.from([174, 234, 143, 220, 66, 8, 152, 49, 5, 115, 75, 88, 8, 29, 30, 38, 56, 211, 95, 28, 181, 64, 8, 212, 211, 87, 202, 3, 190, 120, 233, 238, 174, 234, 143, 220, 66, 8, 152, 49, 5, 115, 75, 88, 8, 29, 30, 38, 56, 211, 95, 28, 181, 64, 8, 212, 211, 87, 202, 3, 190, 120, 233, 238]),
                TapBranch: n.from([25, 65, 161, 242, 229, 110, 185, 95, 162, 169, 241, 148, 190, 92, 1, 247, 33, 111, 51, 237, 130, 176, 145, 70, 52, 144, 208, 91, 245, 22, 160, 21, 25, 65, 161, 242, 229, 110, 185, 95, 162, 169, 241, 148, 190, 92, 1, 247, 33, 111, 51, 237, 130, 176, 145, 70, 52, 144, 208, 91, 245, 22, 160, 21]),
                TapSighash: n.from([244, 10, 72, 223, 75, 42, 112, 200, 180, 146, 75, 242, 101, 70, 97, 237, 61, 149, 253, 102, 163, 19, 235, 135, 35, 117, 151, 198, 40, 228, 160, 49, 244, 10, 72, 223, 75, 42, 112, 200, 180, 146, 75, 242, 101, 70, 97, 237, 61, 149, 253, 102, 163, 19, 235, 135, 35, 117, 151, 198, 40, 228, 160, 49]),
                TapTweak: n.from([232, 15, 225, 99, 156, 156, 160, 80, 227, 175, 27, 57, 193, 67, 198, 62, 66, 156, 188, 235, 21, 217, 64, 251, 181, 197, 161, 244, 175, 87, 197, 233, 232, 15, 225, 99, 156, 156, 160, 80, 227, 175, 27, 57, 193, 67, 198, 62, 66, 156, 188, 235, 21, 217, 64, 251, 181, 197, 161, 244, 175, 87, 197, 233]),
                "KeyAgg list": n.from([72, 28, 151, 28, 60, 11, 70, 215, 240, 178, 117, 174, 89, 141, 78, 44, 126, 215, 49, 156, 89, 74, 92, 110, 199, 158, 160, 212, 153, 2, 148, 240, 72, 28, 151, 28, 60, 11, 70, 215, 240, 178, 117, 174, 89, 141, 78, 44, 126, 215, 49, 156, 89, 74, 92, 110, 199, 158, 160, 212, 153, 2, 148, 240]),
                "KeyAgg coefficient": n.from([191, 201, 4, 3, 77, 28, 136, 232, 200, 14, 34, 229, 61, 36, 86, 109, 100, 130, 78, 214, 66, 114, 129, 192, 145, 0, 249, 77, 205, 82, 201, 129, 191, 201, 4, 3, 77, 28, 136, 232, 200, 14, 34, 229, 61, 36, 86, 109, 100, 130, 78, 214, 66, 114, 129, 192, 145, 0, 249, 77, 205, 82, 201, 129])
            }, t.taggedHash = function(e, r) {
                return s(n.concat([t.TAGGED_HASH_PREFIXES[e], r]))
            }
        },
        48587: function(e, t, r) {
            "use strict";
            var n = r(67133).Buffer;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getEccLib = t.initEccLib = void 0;
            let i = {};
            t.initEccLib = function(e) {
                e ? e !== i.eccLib && (a("function" == typeof e.isXOnlyPoint), a(e.isXOnlyPoint(o("79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"))), a(e.isXOnlyPoint(o("fffffffffffffffffffffffffffffffffffffffffffffffffffffffeeffffc2e"))), a(e.isXOnlyPoint(o("f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9"))), a(e.isXOnlyPoint(o("0000000000000000000000000000000000000000000000000000000000000001"))), a(!e.isXOnlyPoint(o("0000000000000000000000000000000000000000000000000000000000000000"))), a(!e.isXOnlyPoint(o("fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"))), a("function" == typeof e.xOnlyPointAddTweak), s.forEach(t => {
                    let r = e.xOnlyPointAddTweak(o(t.pubkey), o(t.tweak));
                    null === t.result ? a(null === r) : (a(null !== r), a(r.parity === t.parity), a(n.from(r.xOnlyPubkey).equals(o(t.result))))
                }), i.eccLib = e) : i.eccLib = e
            }, t.getEccLib = function() {
                if (!i.eccLib) throw Error("No ECC Library provided. You must call initEccLib() with a valid TinySecp256k1Interface instance");
                return i.eccLib
            };
            let o = e => n.from(e, "hex");

            function a(e) {
                if (!e) throw Error("ecc library invalid")
            }
            let s = [{
                pubkey: "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
                tweak: "fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364140",
                parity: -1,
                result: null
            }, {
                pubkey: "1617d38ed8d8657da4d4761e8057bc396ea9e4b9d29776d4be096016dbd2509b",
                tweak: "a8397a935f0dfceba6ba9618f6451ef4d80637abf4e6af2669fbc9de6a8fd2ac",
                parity: 1,
                result: "e478f99dab91052ab39a33ea35fd5e6e4933f4d28023cd597c9a1f6760346adf"
            }, {
                pubkey: "2c0b7cf95324a07d05398b240174dc0c2be444d96b159aa6c7f7b1e668680991",
                tweak: "823c3cd2142744b075a87eade7e1b8678ba308d566226a0056ca2b7a76f86b47",
                parity: 0,
                result: "9534f8dc8c6deda2dc007655981c78b49c5d96c778fbf363462a11ec9dfd948c"
            }]
        },
        99301: function(e, t, r) {
            "use strict";
            t.Lk = void 0;
            let n = r(40734);
            t.Lk = n, r(7428), r(12341), r(24074), r(46395), r(13803), r(35820), r(31639), r(70520), r(48587)
        },
        26402: function(e, t, r) {
            "use strict";
            var n = r(67133).Buffer;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.fastMerkleRoot = void 0, t.fastMerkleRoot = function(e, t) {
                if (!Array.isArray(e)) throw TypeError("Expected values Array");
                if ("function" != typeof t) throw TypeError("Expected digest Function");
                let r = e.length,
                    i = e.concat();
                for (; r > 1;) {
                    let e = 0;
                    for (let o = 0; o < r; o += 2, ++e) {
                        let a = i[o],
                            s = o + 1 === r ? a : i[o + 1],
                            u = n.concat([a, s]);
                        i[e] = t(u)
                    }
                    r = e
                }
                return i[0]
            }
        },
        12341: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.testnet = t.regtest = t.bitcoin = void 0, t.bitcoin = {
                messagePrefix: "\x18Bitcoin Signed Message:\n",
                bech32: "bc",
                bip32: {
                    public: 76067358,
                    private: 76066276
                },
                pubKeyHash: 0,
                scriptHash: 5,
                wif: 128
            }, t.regtest = {
                messagePrefix: "\x18Bitcoin Signed Message:\n",
                bech32: "bcrt",
                bip32: {
                    public: 70617039,
                    private: 70615956
                },
                pubKeyHash: 111,
                scriptHash: 196,
                wif: 239
            }, t.testnet = {
                messagePrefix: "\x18Bitcoin Signed Message:\n",
                bech32: "tb",
                bip32: {
                    public: 70617039,
                    private: 70615956
                },
                pubKeyHash: 111,
                scriptHash: 196,
                wif: 239
            }
        },
        31639: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.REVERSE_OPS = t.OPS = void 0;
            let r = {
                OP_FALSE: 0,
                OP_0: 0,
                OP_PUSHDATA1: 76,
                OP_PUSHDATA2: 77,
                OP_PUSHDATA4: 78,
                OP_1NEGATE: 79,
                OP_RESERVED: 80,
                OP_TRUE: 81,
                OP_1: 81,
                OP_2: 82,
                OP_3: 83,
                OP_4: 84,
                OP_5: 85,
                OP_6: 86,
                OP_7: 87,
                OP_8: 88,
                OP_9: 89,
                OP_10: 90,
                OP_11: 91,
                OP_12: 92,
                OP_13: 93,
                OP_14: 94,
                OP_15: 95,
                OP_16: 96,
                OP_NOP: 97,
                OP_VER: 98,
                OP_IF: 99,
                OP_NOTIF: 100,
                OP_VERIF: 101,
                OP_VERNOTIF: 102,
                OP_ELSE: 103,
                OP_ENDIF: 104,
                OP_VERIFY: 105,
                OP_RETURN: 106,
                OP_TOALTSTACK: 107,
                OP_FROMALTSTACK: 108,
                OP_2DROP: 109,
                OP_2DUP: 110,
                OP_3DUP: 111,
                OP_2OVER: 112,
                OP_2ROT: 113,
                OP_2SWAP: 114,
                OP_IFDUP: 115,
                OP_DEPTH: 116,
                OP_DROP: 117,
                OP_DUP: 118,
                OP_NIP: 119,
                OP_OVER: 120,
                OP_PICK: 121,
                OP_ROLL: 122,
                OP_ROT: 123,
                OP_SWAP: 124,
                OP_TUCK: 125,
                OP_CAT: 126,
                OP_SUBSTR: 127,
                OP_LEFT: 128,
                OP_RIGHT: 129,
                OP_SIZE: 130,
                OP_INVERT: 131,
                OP_AND: 132,
                OP_OR: 133,
                OP_XOR: 134,
                OP_EQUAL: 135,
                OP_EQUALVERIFY: 136,
                OP_RESERVED1: 137,
                OP_RESERVED2: 138,
                OP_1ADD: 139,
                OP_1SUB: 140,
                OP_2MUL: 141,
                OP_2DIV: 142,
                OP_NEGATE: 143,
                OP_ABS: 144,
                OP_NOT: 145,
                OP_0NOTEQUAL: 146,
                OP_ADD: 147,
                OP_SUB: 148,
                OP_MUL: 149,
                OP_DIV: 150,
                OP_MOD: 151,
                OP_LSHIFT: 152,
                OP_RSHIFT: 153,
                OP_BOOLAND: 154,
                OP_BOOLOR: 155,
                OP_NUMEQUAL: 156,
                OP_NUMEQUALVERIFY: 157,
                OP_NUMNOTEQUAL: 158,
                OP_LESSTHAN: 159,
                OP_GREATERTHAN: 160,
                OP_LESSTHANOREQUAL: 161,
                OP_GREATERTHANOREQUAL: 162,
                OP_MIN: 163,
                OP_MAX: 164,
                OP_WITHIN: 165,
                OP_RIPEMD160: 166,
                OP_SHA1: 167,
                OP_SHA256: 168,
                OP_HASH160: 169,
                OP_HASH256: 170,
                OP_CODESEPARATOR: 171,
                OP_CHECKSIG: 172,
                OP_CHECKSIGVERIFY: 173,
                OP_CHECKMULTISIG: 174,
                OP_CHECKMULTISIGVERIFY: 175,
                OP_NOP1: 176,
                OP_NOP2: 177,
                OP_CHECKLOCKTIMEVERIFY: 177,
                OP_NOP3: 178,
                OP_CHECKSEQUENCEVERIFY: 178,
                OP_NOP4: 179,
                OP_NOP5: 180,
                OP_NOP6: 181,
                OP_NOP7: 182,
                OP_NOP8: 183,
                OP_NOP9: 184,
                OP_NOP10: 185,
                OP_CHECKSIGADD: 186,
                OP_PUBKEYHASH: 253,
                OP_PUBKEY: 254,
                OP_INVALIDOPCODE: 255
            };
            t.OPS = r;
            let n = {};
            for (let e of (t.REVERSE_OPS = n, Object.keys(r))) {
                let t = r[e];
                n[t] = e
            }
        },
        59889: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.tweakKey = t.tapTweakHash = t.tapleafHash = t.findScriptPath = t.toHashTree = t.rootHashFromPath = t.MAX_TAPTREE_DEPTH = t.LEAF_VERSION_TAPSCRIPT = void 0;
            let n = r(67133),
                i = r(48587),
                o = r(7428),
                a = r(36610),
                s = r(14400);
            t.LEAF_VERSION_TAPSCRIPT = 192, t.MAX_TAPTREE_DEPTH = 128;
            let u = e => "left" in e && "right" in e;

            function l(e) {
                let r = e.version || t.LEAF_VERSION_TAPSCRIPT;
                return o.taggedHash("TapLeaf", n.Buffer.concat([n.Buffer.from([r]), function(e) {
                    let t = a.varuint.encodingLength(e.length),
                        r = n.Buffer.allocUnsafe(t);
                    return a.varuint.encode(e.length, r), n.Buffer.concat([r, e])
                }(e.output)]))
            }

            function c(e, t) {
                return o.taggedHash("TapTweak", n.Buffer.concat(t ? [e, t] : [e]))
            }

            function f(e, t) {
                return o.taggedHash("TapBranch", n.Buffer.concat([e, t]))
            }
            t.rootHashFromPath = function(e, t) {
                if (e.length < 33) throw TypeError(`The control-block length is too small. Got ${e.length}, expected min 33.`);
                let r = (e.length - 33) / 32,
                    n = t;
                for (let t = 0; t < r; t++) {
                    let r = e.slice(33 + 32 * t, 65 + 32 * t);
                    n = 0 > n.compare(r) ? f(n, r) : f(r, n)
                }
                return n
            }, t.toHashTree = function e(t) {
                if ((0, s.isTapleaf)(t)) return {
                    hash: l(t)
                };
                let r = [e(t[0]), e(t[1])];
                r.sort((e, t) => e.hash.compare(t.hash));
                let [n, i] = r;
                return {
                    hash: f(n.hash, i.hash),
                    left: n,
                    right: i
                }
            }, t.findScriptPath = function e(t, r) {
                if (u(t)) {
                    let n = e(t.left, r);
                    if (void 0 !== n) return [...n, t.right.hash];
                    let i = e(t.right, r);
                    if (void 0 !== i) return [...i, t.left.hash]
                } else if (t.hash.equals(r)) return []
            }, t.tapleafHash = l, t.tapTweakHash = c, t.tweakKey = function(e, t) {
                if (!n.Buffer.isBuffer(e) || 32 !== e.length || t && 32 !== t.length) return null;
                let r = c(e, t),
                    o = (0, i.getEccLib)().xOnlyPointAddTweak(e, r);
                return o && null !== o.xOnlyPubkey ? {
                    parity: o.parity,
                    x: n.Buffer.from(o.xOnlyPubkey)
                } : null
            }
        },
        77860: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.p2data = void 0;
            let n = r(12341),
                i = r(46395),
                o = r(14400),
                a = r(68051),
                s = i.OPS;
            t.p2data = function(e, t) {
                if (!e.data && !e.output) throw TypeError("Not enough data");
                t = Object.assign({
                    validate: !0
                }, t || {}), (0, o.typeforce)({
                    network: o.typeforce.maybe(o.typeforce.Object),
                    output: o.typeforce.maybe(o.typeforce.Buffer),
                    data: o.typeforce.maybe(o.typeforce.arrayOf(o.typeforce.Buffer))
                }, e);
                let r = e.network || n.bitcoin,
                    u = {
                        name: "embed",
                        network: r
                    };
                if (a.prop(u, "output", () => {
                        if (e.data) return i.compile([s.OP_RETURN].concat(e.data))
                    }), a.prop(u, "data", () => {
                        if (e.output) return i.decompile(e.output).slice(1)
                    }), t.validate && e.output) {
                    var l, c;
                    let t = i.decompile(e.output);
                    if (t[0] !== s.OP_RETURN || !t.slice(1).every(o.typeforce.Buffer)) throw TypeError("Output is invalid");
                    if (e.data && (l = e.data, c = u.data, !(l.length === c.length && l.every((e, t) => e.equals(c[t]))))) throw TypeError("Data mismatch")
                }
                return Object.assign(u, e)
            }
        },
        24074: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.p2tr = t.p2wsh = t.p2wpkh = t.p2sh = t.p2pkh = t.p2pk = t.p2ms = t.embed = void 0;
            let n = r(77860);
            Object.defineProperty(t, "embed", {
                enumerable: !0,
                get: function() {
                    return n.p2data
                }
            });
            let i = r(90533);
            Object.defineProperty(t, "p2ms", {
                enumerable: !0,
                get: function() {
                    return i.p2ms
                }
            });
            let o = r(13588);
            Object.defineProperty(t, "p2pk", {
                enumerable: !0,
                get: function() {
                    return o.p2pk
                }
            });
            let a = r(54789);
            Object.defineProperty(t, "p2pkh", {
                enumerable: !0,
                get: function() {
                    return a.p2pkh
                }
            });
            let s = r(98778);
            Object.defineProperty(t, "p2sh", {
                enumerable: !0,
                get: function() {
                    return s.p2sh
                }
            });
            let u = r(3620);
            Object.defineProperty(t, "p2wpkh", {
                enumerable: !0,
                get: function() {
                    return u.p2wpkh
                }
            });
            let l = r(51659);
            Object.defineProperty(t, "p2wsh", {
                enumerable: !0,
                get: function() {
                    return l.p2wsh
                }
            });
            let c = r(5329);
            Object.defineProperty(t, "p2tr", {
                enumerable: !0,
                get: function() {
                    return c.p2tr
                }
            })
        },
        68051: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.value = t.prop = void 0, t.prop = function(e, t, r) {
                Object.defineProperty(e, t, {
                    configurable: !0,
                    enumerable: !0,
                    get() {
                        let e = r.call(this);
                        return this[t] = e, e
                    },
                    set(e) {
                        Object.defineProperty(this, t, {
                            configurable: !0,
                            enumerable: !0,
                            value: e,
                            writable: !0
                        })
                    }
                })
            }, t.value = function(e) {
                let t;
                return () => void 0 !== t ? t : t = e()
            }
        },
        90533: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.p2ms = void 0;
            let n = r(12341),
                i = r(46395),
                o = r(14400),
                a = r(68051),
                s = i.OPS,
                u = s.OP_RESERVED;

            function l(e, t) {
                return e.length === t.length && e.every((e, r) => e.equals(t[r]))
            }
            t.p2ms = function(e, t) {
                if (!e.input && !e.output && !(e.pubkeys && void 0 !== e.m) && !e.signatures) throw TypeError("Not enough data");

                function r(e) {
                    return i.isCanonicalScriptSignature(e) || (t.allowIncomplete && e === s.OP_0) !== void 0
                }
                t = Object.assign({
                    validate: !0
                }, t || {}), (0, o.typeforce)({
                    network: o.typeforce.maybe(o.typeforce.Object),
                    m: o.typeforce.maybe(o.typeforce.Number),
                    n: o.typeforce.maybe(o.typeforce.Number),
                    output: o.typeforce.maybe(o.typeforce.Buffer),
                    pubkeys: o.typeforce.maybe(o.typeforce.arrayOf(o.isPoint)),
                    signatures: o.typeforce.maybe(o.typeforce.arrayOf(r)),
                    input: o.typeforce.maybe(o.typeforce.Buffer)
                }, e);
                let c = e.network || n.bitcoin,
                    f = {
                        network: c
                    },
                    p = [],
                    h = !1;

                function d(e) {
                    h || (h = !0, p = i.decompile(e), f.m = p[0] - u, f.n = p[p.length - 2] - u, f.pubkeys = p.slice(1, -2))
                }
                if (a.prop(f, "output", () => {
                        if (e.m && f.n && e.pubkeys) return i.compile([].concat(u + e.m, e.pubkeys, u + f.n, s.OP_CHECKMULTISIG))
                    }), a.prop(f, "m", () => {
                        if (f.output) return d(f.output), f.m
                    }), a.prop(f, "n", () => {
                        if (f.pubkeys) return f.pubkeys.length
                    }), a.prop(f, "pubkeys", () => {
                        if (e.output) return d(e.output), f.pubkeys
                    }), a.prop(f, "signatures", () => {
                        if (e.input) return i.decompile(e.input).slice(1)
                    }), a.prop(f, "input", () => {
                        if (e.signatures) return i.compile([s.OP_0].concat(e.signatures))
                    }), a.prop(f, "witness", () => {
                        if (f.input) return []
                    }), a.prop(f, "name", () => {
                        if (f.m && f.n) return `p2ms(${f.m} of ${f.n})`
                    }), t.validate) {
                    if (e.output) {
                        if (d(e.output), !o.typeforce.Number(p[0]) || !o.typeforce.Number(p[p.length - 2]) || p[p.length - 1] !== s.OP_CHECKMULTISIG || f.m <= 0 || f.n > 16 || f.m > f.n || f.n !== p.length - 3 || !f.pubkeys.every(e => (0, o.isPoint)(e))) throw TypeError("Output is invalid");
                        if (void 0 !== e.m && e.m !== f.m) throw TypeError("m mismatch");
                        if (void 0 !== e.n && e.n !== f.n) throw TypeError("n mismatch");
                        if (e.pubkeys && !l(e.pubkeys, f.pubkeys)) throw TypeError("Pubkeys mismatch")
                    }
                    if (e.pubkeys) {
                        if (void 0 !== e.n && e.n !== e.pubkeys.length) throw TypeError("Pubkey count mismatch");
                        if (f.n = e.pubkeys.length, f.n < f.m) throw TypeError("Pubkey count cannot be less than m")
                    }
                    if (e.signatures) {
                        if (e.signatures.length < f.m) throw TypeError("Not enough signatures provided");
                        if (e.signatures.length > f.m) throw TypeError("Too many signatures provided")
                    }
                    if (e.input) {
                        if (e.input[0] !== s.OP_0) throw TypeError("Input is invalid");
                        if (0 === f.signatures.length || !f.signatures.every(r)) throw TypeError("Input has invalid signature(s)");
                        if (e.signatures && !l(e.signatures, f.signatures)) throw TypeError("Signature mismatch");
                        if (void 0 !== e.m && e.m !== e.signatures.length) throw TypeError("Signature count mismatch")
                    }
                }
                return Object.assign(f, e)
            }
        },
        13588: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.p2pk = void 0;
            let n = r(12341),
                i = r(46395),
                o = r(14400),
                a = r(68051),
                s = i.OPS;
            t.p2pk = function(e, t) {
                if (!e.input && !e.output && !e.pubkey && !e.input && !e.signature) throw TypeError("Not enough data");
                t = Object.assign({
                    validate: !0
                }, t || {}), (0, o.typeforce)({
                    network: o.typeforce.maybe(o.typeforce.Object),
                    output: o.typeforce.maybe(o.typeforce.Buffer),
                    pubkey: o.typeforce.maybe(o.isPoint),
                    signature: o.typeforce.maybe(i.isCanonicalScriptSignature),
                    input: o.typeforce.maybe(o.typeforce.Buffer)
                }, e);
                let r = a.value(() => i.decompile(e.input)),
                    u = e.network || n.bitcoin,
                    l = {
                        name: "p2pk",
                        network: u
                    };
                if (a.prop(l, "output", () => {
                        if (e.pubkey) return i.compile([e.pubkey, s.OP_CHECKSIG])
                    }), a.prop(l, "pubkey", () => {
                        if (e.output) return e.output.slice(1, -1)
                    }), a.prop(l, "signature", () => {
                        if (e.input) return r()[0]
                    }), a.prop(l, "input", () => {
                        if (e.signature) return i.compile([e.signature])
                    }), a.prop(l, "witness", () => {
                        if (l.input) return []
                    }), t.validate) {
                    if (e.output) {
                        if (e.output[e.output.length - 1] !== s.OP_CHECKSIG) throw TypeError("Output is invalid");
                        if (!(0, o.isPoint)(l.pubkey)) throw TypeError("Output pubkey is invalid");
                        if (e.pubkey && !e.pubkey.equals(l.pubkey)) throw TypeError("Pubkey mismatch")
                    }
                    if (e.signature && e.input && !e.input.equals(l.input)) throw TypeError("Signature mismatch");
                    if (e.input) {
                        if (1 !== r().length) throw TypeError("Input is invalid");
                        if (!i.isCanonicalScriptSignature(l.signature)) throw TypeError("Input has invalid signature")
                    }
                }
                return Object.assign(l, e)
            }
        },
        54789: function(e, t, r) {
            "use strict";
            var n = r(67133).Buffer;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.p2pkh = void 0;
            let i = r(7428),
                o = r(12341),
                a = r(46395),
                s = r(14400),
                u = r(68051),
                l = r(12193),
                c = a.OPS;
            t.p2pkh = function(e, t) {
                if (!e.address && !e.hash && !e.output && !e.pubkey && !e.input) throw TypeError("Not enough data");
                t = Object.assign({
                    validate: !0
                }, t || {}), (0, s.typeforce)({
                    network: s.typeforce.maybe(s.typeforce.Object),
                    address: s.typeforce.maybe(s.typeforce.String),
                    hash: s.typeforce.maybe(s.typeforce.BufferN(20)),
                    output: s.typeforce.maybe(s.typeforce.BufferN(25)),
                    pubkey: s.typeforce.maybe(s.isPoint),
                    signature: s.typeforce.maybe(a.isCanonicalScriptSignature),
                    input: s.typeforce.maybe(s.typeforce.Buffer)
                }, e);
                let r = u.value(() => {
                        let t = n.from(l.decode(e.address)),
                            r = t.readUInt8(0),
                            i = t.slice(1);
                        return {
                            version: r,
                            hash: i
                        }
                    }),
                    f = u.value(() => a.decompile(e.input)),
                    p = e.network || o.bitcoin,
                    h = {
                        name: "p2pkh",
                        network: p
                    };
                if (u.prop(h, "address", () => {
                        if (!h.hash) return;
                        let e = n.allocUnsafe(21);
                        return e.writeUInt8(p.pubKeyHash, 0), h.hash.copy(e, 1), l.encode(e)
                    }), u.prop(h, "hash", () => e.output ? e.output.slice(3, 23) : e.address ? r().hash : e.pubkey || h.pubkey ? i.hash160(e.pubkey || h.pubkey) : void 0), u.prop(h, "output", () => {
                        if (h.hash) return a.compile([c.OP_DUP, c.OP_HASH160, h.hash, c.OP_EQUALVERIFY, c.OP_CHECKSIG])
                    }), u.prop(h, "pubkey", () => {
                        if (e.input) return f()[1]
                    }), u.prop(h, "signature", () => {
                        if (e.input) return f()[0]
                    }), u.prop(h, "input", () => {
                        if (e.pubkey && e.signature) return a.compile([e.signature, e.pubkey])
                    }), u.prop(h, "witness", () => {
                        if (h.input) return []
                    }), t.validate) {
                    let t = n.from([]);
                    if (e.address) {
                        if (r().version !== p.pubKeyHash) throw TypeError("Invalid version or Network mismatch");
                        if (20 !== r().hash.length) throw TypeError("Invalid address");
                        t = r().hash
                    }
                    if (e.hash) {
                        if (t.length > 0 && !t.equals(e.hash)) throw TypeError("Hash mismatch");
                        t = e.hash
                    }
                    if (e.output) {
                        if (25 !== e.output.length || e.output[0] !== c.OP_DUP || e.output[1] !== c.OP_HASH160 || 20 !== e.output[2] || e.output[23] !== c.OP_EQUALVERIFY || e.output[24] !== c.OP_CHECKSIG) throw TypeError("Output is invalid");
                        let r = e.output.slice(3, 23);
                        if (t.length > 0 && !t.equals(r)) throw TypeError("Hash mismatch");
                        t = r
                    }
                    if (e.pubkey) {
                        let r = i.hash160(e.pubkey);
                        if (t.length > 0 && !t.equals(r)) throw TypeError("Hash mismatch");
                        t = r
                    }
                    if (e.input) {
                        let r = f();
                        if (2 !== r.length) throw TypeError("Input is invalid");
                        if (!a.isCanonicalScriptSignature(r[0])) throw TypeError("Input has invalid signature");
                        if (!(0, s.isPoint)(r[1])) throw TypeError("Input has invalid pubkey");
                        if (e.signature && !e.signature.equals(r[0])) throw TypeError("Signature mismatch");
                        if (e.pubkey && !e.pubkey.equals(r[1])) throw TypeError("Pubkey mismatch");
                        let n = i.hash160(r[1]);
                        if (t.length > 0 && !t.equals(n)) throw TypeError("Hash mismatch")
                    }
                }
                return Object.assign(h, e)
            }
        },
        98778: function(e, t, r) {
            "use strict";
            var n = r(67133).Buffer;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.p2sh = void 0;
            let i = r(7428),
                o = r(12341),
                a = r(46395),
                s = r(14400),
                u = r(68051),
                l = r(12193),
                c = a.OPS;
            t.p2sh = function(e, t) {
                if (!e.address && !e.hash && !e.output && !e.redeem && !e.input) throw TypeError("Not enough data");
                t = Object.assign({
                    validate: !0
                }, t || {}), (0, s.typeforce)({
                    network: s.typeforce.maybe(s.typeforce.Object),
                    address: s.typeforce.maybe(s.typeforce.String),
                    hash: s.typeforce.maybe(s.typeforce.BufferN(20)),
                    output: s.typeforce.maybe(s.typeforce.BufferN(23)),
                    redeem: s.typeforce.maybe({
                        network: s.typeforce.maybe(s.typeforce.Object),
                        output: s.typeforce.maybe(s.typeforce.Buffer),
                        input: s.typeforce.maybe(s.typeforce.Buffer),
                        witness: s.typeforce.maybe(s.typeforce.arrayOf(s.typeforce.Buffer))
                    }),
                    input: s.typeforce.maybe(s.typeforce.Buffer),
                    witness: s.typeforce.maybe(s.typeforce.arrayOf(s.typeforce.Buffer))
                }, e);
                let r = e.network;
                r || (r = e.redeem && e.redeem.network || o.bitcoin);
                let f = {
                        network: r
                    },
                    p = u.value(() => {
                        let t = n.from(l.decode(e.address)),
                            r = t.readUInt8(0),
                            i = t.slice(1);
                        return {
                            version: r,
                            hash: i
                        }
                    }),
                    h = u.value(() => a.decompile(e.input)),
                    d = u.value(() => {
                        let t = h(),
                            i = t[t.length - 1];
                        return {
                            network: r,
                            output: i === c.OP_FALSE ? n.from([]) : i,
                            input: a.compile(t.slice(0, -1)),
                            witness: e.witness || []
                        }
                    });
                if (u.prop(f, "address", () => {
                        if (!f.hash) return;
                        let e = n.allocUnsafe(21);
                        return e.writeUInt8(f.network.scriptHash, 0), f.hash.copy(e, 1), l.encode(e)
                    }), u.prop(f, "hash", () => e.output ? e.output.slice(2, 22) : e.address ? p().hash : f.redeem && f.redeem.output ? i.hash160(f.redeem.output) : void 0), u.prop(f, "output", () => {
                        if (f.hash) return a.compile([c.OP_HASH160, f.hash, c.OP_EQUAL])
                    }), u.prop(f, "redeem", () => {
                        if (e.input) return d()
                    }), u.prop(f, "input", () => {
                        if (e.redeem && e.redeem.input && e.redeem.output) return a.compile([].concat(a.decompile(e.redeem.input), e.redeem.output))
                    }), u.prop(f, "witness", () => f.redeem && f.redeem.witness ? f.redeem.witness : f.input ? [] : void 0), u.prop(f, "name", () => {
                        let e = ["p2sh"];
                        return void 0 !== f.redeem && void 0 !== f.redeem.name && e.push(f.redeem.name), e.join("-")
                    }), t.validate) {
                    let t = n.from([]);
                    if (e.address) {
                        if (p().version !== r.scriptHash) throw TypeError("Invalid version or Network mismatch");
                        if (20 !== p().hash.length) throw TypeError("Invalid address");
                        t = p().hash
                    }
                    if (e.hash) {
                        if (t.length > 0 && !t.equals(e.hash)) throw TypeError("Hash mismatch");
                        t = e.hash
                    }
                    if (e.output) {
                        if (23 !== e.output.length || e.output[0] !== c.OP_HASH160 || 20 !== e.output[1] || e.output[22] !== c.OP_EQUAL) throw TypeError("Output is invalid");
                        let r = e.output.slice(2, 22);
                        if (t.length > 0 && !t.equals(r)) throw TypeError("Hash mismatch");
                        t = r
                    }
                    let o = e => {
                        if (e.output) {
                            let r = a.decompile(e.output);
                            if (!r || r.length < 1) throw TypeError("Redeem.output too short");
                            if (e.output.byteLength > 520) throw TypeError("Redeem.output unspendable if larger than 520 bytes");
                            if (a.countNonPushOnlyOPs(r) > 201) throw TypeError("Redeem.output unspendable with more than 201 non-push ops");
                            let n = i.hash160(e.output);
                            if (t.length > 0 && !t.equals(n)) throw TypeError("Hash mismatch");
                            t = n
                        }
                        if (e.input) {
                            let t = e.input.length > 0,
                                r = e.witness && e.witness.length > 0;
                            if (!t && !r) throw TypeError("Empty input");
                            if (t && r) throw TypeError("Input and witness provided");
                            if (t) {
                                let t = a.decompile(e.input);
                                if (!a.isPushOnly(t)) throw TypeError("Non push-only scriptSig")
                            }
                        }
                    };
                    if (e.input) {
                        let e = h();
                        if (!e || e.length < 1) throw TypeError("Input too short");
                        if (!n.isBuffer(d().output)) throw TypeError("Input is invalid");
                        o(d())
                    }
                    if (e.redeem) {
                        if (e.redeem.network && e.redeem.network !== r) throw TypeError("Network mismatch");
                        if (e.input) {
                            let t = d();
                            if (e.redeem.output && !e.redeem.output.equals(t.output)) throw TypeError("Redeem.output mismatch");
                            if (e.redeem.input && !e.redeem.input.equals(t.input)) throw TypeError("Redeem.input mismatch")
                        }
                        o(e.redeem)
                    }
                    if (e.witness) {
                        var y, m;
                        if (e.redeem && e.redeem.witness && (y = e.redeem.witness, m = e.witness, !(y.length === m.length && y.every((e, t) => e.equals(m[t]))))) throw TypeError("Witness and redeem.witness mismatch")
                    }
                }
                return Object.assign(f, e)
            }
        },
        5329: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.p2tr = void 0;
            let n = r(67133),
                i = r(12341),
                o = r(46395),
                a = r(14400),
                s = r(48587),
                u = r(59889),
                l = r(68051),
                c = r(46656),
                f = o.OPS;
            t.p2tr = function(e, t) {
                if (!e.address && !e.output && !e.pubkey && !e.internalPubkey && !(e.witness && e.witness.length > 1)) throw TypeError("Not enough data");
                t = Object.assign({
                    validate: !0
                }, t || {}), (0, a.typeforce)({
                    address: a.typeforce.maybe(a.typeforce.String),
                    input: a.typeforce.maybe(a.typeforce.BufferN(0)),
                    network: a.typeforce.maybe(a.typeforce.Object),
                    output: a.typeforce.maybe(a.typeforce.BufferN(34)),
                    internalPubkey: a.typeforce.maybe(a.typeforce.BufferN(32)),
                    hash: a.typeforce.maybe(a.typeforce.BufferN(32)),
                    pubkey: a.typeforce.maybe(a.typeforce.BufferN(32)),
                    signature: a.typeforce.maybe(a.typeforce.anyOf(a.typeforce.BufferN(64), a.typeforce.BufferN(65))),
                    witness: a.typeforce.maybe(a.typeforce.arrayOf(a.typeforce.Buffer)),
                    scriptTree: a.typeforce.maybe(a.isTaptree),
                    redeem: a.typeforce.maybe({
                        output: a.typeforce.maybe(a.typeforce.Buffer),
                        redeemVersion: a.typeforce.maybe(a.typeforce.Number),
                        witness: a.typeforce.maybe(a.typeforce.arrayOf(a.typeforce.Buffer))
                    }),
                    redeemVersion: a.typeforce.maybe(a.typeforce.Number)
                }, e);
                let r = l.value(() => {
                        let t = c.bech32m.decode(e.address),
                            r = t.words.shift(),
                            i = c.bech32m.fromWords(t.words);
                        return {
                            version: r,
                            prefix: t.prefix,
                            data: n.Buffer.from(i)
                        }
                    }),
                    p = l.value(() => {
                        if (e.witness && e.witness.length) return e.witness.length >= 2 && 80 === e.witness[e.witness.length - 1][0] ? e.witness.slice(0, -1) : e.witness.slice()
                    }),
                    h = l.value(() => e.scriptTree ? (0, u.toHashTree)(e.scriptTree) : e.hash ? {
                        hash: e.hash
                    } : void 0),
                    d = e.network || i.bitcoin,
                    y = {
                        name: "p2tr",
                        network: d
                    };
                if (l.prop(y, "address", () => {
                        if (!y.pubkey) return;
                        let e = c.bech32m.toWords(y.pubkey);
                        return e.unshift(1), c.bech32m.encode(d.bech32, e)
                    }), l.prop(y, "hash", () => {
                        let e = h();
                        if (e) return e.hash;
                        let t = p();
                        if (t && t.length > 1) {
                            let e = t[t.length - 1],
                                r = e[0] & a.TAPLEAF_VERSION_MASK,
                                n = t[t.length - 2],
                                i = (0, u.tapleafHash)({
                                    output: n,
                                    version: r
                                });
                            return (0, u.rootHashFromPath)(e, i)
                        }
                        return null
                    }), l.prop(y, "output", () => {
                        if (y.pubkey) return o.compile([f.OP_1, y.pubkey])
                    }), l.prop(y, "redeemVersion", () => e.redeemVersion ? e.redeemVersion : e.redeem && void 0 !== e.redeem.redeemVersion && null !== e.redeem.redeemVersion ? e.redeem.redeemVersion : u.LEAF_VERSION_TAPSCRIPT), l.prop(y, "redeem", () => {
                        let e = p();
                        if (e && !(e.length < 2)) return {
                            output: e[e.length - 2],
                            witness: e.slice(0, -2),
                            redeemVersion: e[e.length - 1][0] & a.TAPLEAF_VERSION_MASK
                        }
                    }), l.prop(y, "pubkey", () => {
                        if (e.pubkey) return e.pubkey;
                        if (e.output) return e.output.slice(2);
                        if (e.address) return r().data;
                        if (y.internalPubkey) {
                            let e = (0, u.tweakKey)(y.internalPubkey, y.hash);
                            if (e) return e.x
                        }
                    }), l.prop(y, "internalPubkey", () => {
                        if (e.internalPubkey) return e.internalPubkey;
                        let t = p();
                        if (t && t.length > 1) return t[t.length - 1].slice(1, 33)
                    }), l.prop(y, "signature", () => {
                        if (e.signature) return e.signature;
                        let t = p();
                        if (t && 1 === t.length) return t[0]
                    }), l.prop(y, "witness", () => {
                        if (e.witness) return e.witness;
                        let t = h();
                        if (t && e.redeem && e.redeem.output && e.internalPubkey) {
                            let r = (0, u.tapleafHash)({
                                    output: e.redeem.output,
                                    version: y.redeemVersion
                                }),
                                i = (0, u.findScriptPath)(t, r);
                            if (!i) return;
                            let o = (0, u.tweakKey)(e.internalPubkey, t.hash);
                            if (!o) return;
                            let a = n.Buffer.concat([n.Buffer.from([y.redeemVersion | o.parity]), e.internalPubkey].concat(i));
                            return [e.redeem.output, a]
                        }
                        if (e.signature) return [e.signature]
                    }), t.validate) {
                    let t = n.Buffer.from([]);
                    if (e.address) {
                        if (d && d.bech32 !== r().prefix) throw TypeError("Invalid prefix or Network mismatch");
                        if (1 !== r().version) throw TypeError("Invalid address version");
                        if (32 !== r().data.length) throw TypeError("Invalid address data");
                        t = r().data
                    }
                    if (e.pubkey) {
                        if (t.length > 0 && !t.equals(e.pubkey)) throw TypeError("Pubkey mismatch");
                        t = e.pubkey
                    }
                    if (e.output) {
                        if (34 !== e.output.length || e.output[0] !== f.OP_1 || 32 !== e.output[1]) throw TypeError("Output is invalid");
                        if (t.length > 0 && !t.equals(e.output.slice(2))) throw TypeError("Pubkey mismatch");
                        t = e.output.slice(2)
                    }
                    if (e.internalPubkey) {
                        let r = (0, u.tweakKey)(e.internalPubkey, y.hash);
                        if (t.length > 0 && !t.equals(r.x)) throw TypeError("Pubkey mismatch");
                        t = r.x
                    }
                    if (t && t.length && !(0, s.getEccLib)().isXOnlyPoint(t)) throw TypeError("Invalid pubkey for p2tr");
                    let i = h();
                    if (e.hash && i && !e.hash.equals(i.hash)) throw TypeError("Hash mismatch");
                    if (e.redeem && e.redeem.output && i) {
                        let t = (0, u.tapleafHash)({
                            output: e.redeem.output,
                            version: y.redeemVersion
                        });
                        if (!(0, u.findScriptPath)(i, t)) throw TypeError("Redeem script not in tree")
                    }
                    let l = p();
                    if (e.redeem && y.redeem) {
                        var m, g;
                        if (e.redeem.redeemVersion && e.redeem.redeemVersion !== y.redeem.redeemVersion) throw TypeError("Redeem.redeemVersion and witness mismatch");
                        if (e.redeem.output) {
                            if (0 === o.decompile(e.redeem.output).length) throw TypeError("Redeem.output is invalid");
                            if (y.redeem.output && !e.redeem.output.equals(y.redeem.output)) throw TypeError("Redeem.output and witness mismatch")
                        }
                        if (e.redeem.witness && y.redeem.witness && (m = e.redeem.witness, g = y.redeem.witness, !(m.length === g.length && m.every((e, t) => e.equals(g[t]))))) throw TypeError("Redeem.witness and witness mismatch")
                    }
                    if (l && l.length) {
                        if (1 === l.length) {
                            if (e.signature && !e.signature.equals(l[0])) throw TypeError("Signature mismatch")
                        } else {
                            let r = l[l.length - 1];
                            if (r.length < 33) throw TypeError(`The control-block length is too small. Got ${r.length}, expected min 33.`);
                            if ((r.length - 33) % 32 != 0) throw TypeError(`The control-block length of ${r.length} is incorrect!`);
                            let n = (r.length - 33) / 32;
                            if (n > 128) throw TypeError(`The script path is too long. Got ${n}, expected max 128.`);
                            let i = r.slice(1, 33);
                            if (e.internalPubkey && !e.internalPubkey.equals(i)) throw TypeError("Internal pubkey mismatch");
                            if (!(0, s.getEccLib)().isXOnlyPoint(i)) throw TypeError("Invalid internalPubkey for p2tr witness");
                            let o = r[0] & a.TAPLEAF_VERSION_MASK,
                                c = l[l.length - 2],
                                f = (0, u.tapleafHash)({
                                    output: c,
                                    version: o
                                }),
                                p = (0, u.rootHashFromPath)(r, f),
                                h = (0, u.tweakKey)(i, p);
                            if (!h) throw TypeError("Invalid outputKey for p2tr witness");
                            if (t.length && !t.equals(h.x)) throw TypeError("Pubkey mismatch for p2tr witness");
                            if (h.parity !== (1 & r[0])) throw Error("Incorrect parity")
                        }
                    }
                }
                return Object.assign(y, e)
            }
        },
        3620: function(e, t, r) {
            "use strict";
            var n = r(67133).Buffer;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.p2wpkh = void 0;
            let i = r(7428),
                o = r(12341),
                a = r(46395),
                s = r(14400),
                u = r(68051),
                l = r(46656),
                c = a.OPS,
                f = n.alloc(0);
            t.p2wpkh = function(e, t) {
                if (!e.address && !e.hash && !e.output && !e.pubkey && !e.witness) throw TypeError("Not enough data");
                t = Object.assign({
                    validate: !0
                }, t || {}), (0, s.typeforce)({
                    address: s.typeforce.maybe(s.typeforce.String),
                    hash: s.typeforce.maybe(s.typeforce.BufferN(20)),
                    input: s.typeforce.maybe(s.typeforce.BufferN(0)),
                    network: s.typeforce.maybe(s.typeforce.Object),
                    output: s.typeforce.maybe(s.typeforce.BufferN(22)),
                    pubkey: s.typeforce.maybe(s.isPoint),
                    signature: s.typeforce.maybe(a.isCanonicalScriptSignature),
                    witness: s.typeforce.maybe(s.typeforce.arrayOf(s.typeforce.Buffer))
                }, e);
                let r = u.value(() => {
                        let t = l.bech32.decode(e.address),
                            r = t.words.shift(),
                            i = l.bech32.fromWords(t.words);
                        return {
                            version: r,
                            prefix: t.prefix,
                            data: n.from(i)
                        }
                    }),
                    p = e.network || o.bitcoin,
                    h = {
                        name: "p2wpkh",
                        network: p
                    };
                if (u.prop(h, "address", () => {
                        if (!h.hash) return;
                        let e = l.bech32.toWords(h.hash);
                        return e.unshift(0), l.bech32.encode(p.bech32, e)
                    }), u.prop(h, "hash", () => e.output ? e.output.slice(2, 22) : e.address ? r().data : e.pubkey || h.pubkey ? i.hash160(e.pubkey || h.pubkey) : void 0), u.prop(h, "output", () => {
                        if (h.hash) return a.compile([c.OP_0, h.hash])
                    }), u.prop(h, "pubkey", () => e.pubkey ? e.pubkey : e.witness ? e.witness[1] : void 0), u.prop(h, "signature", () => {
                        if (e.witness) return e.witness[0]
                    }), u.prop(h, "input", () => {
                        if (h.witness) return f
                    }), u.prop(h, "witness", () => {
                        if (e.pubkey && e.signature) return [e.signature, e.pubkey]
                    }), t.validate) {
                    let t = n.from([]);
                    if (e.address) {
                        if (p && p.bech32 !== r().prefix) throw TypeError("Invalid prefix or Network mismatch");
                        if (0 !== r().version) throw TypeError("Invalid address version");
                        if (20 !== r().data.length) throw TypeError("Invalid address data");
                        t = r().data
                    }
                    if (e.hash) {
                        if (t.length > 0 && !t.equals(e.hash)) throw TypeError("Hash mismatch");
                        t = e.hash
                    }
                    if (e.output) {
                        if (22 !== e.output.length || e.output[0] !== c.OP_0 || 20 !== e.output[1]) throw TypeError("Output is invalid");
                        if (t.length > 0 && !t.equals(e.output.slice(2))) throw TypeError("Hash mismatch");
                        t = e.output.slice(2)
                    }
                    if (e.pubkey) {
                        let r = i.hash160(e.pubkey);
                        if (t.length > 0 && !t.equals(r)) throw TypeError("Hash mismatch");
                        if (t = r, !(0, s.isPoint)(e.pubkey) || 33 !== e.pubkey.length) throw TypeError("Invalid pubkey for p2wpkh")
                    }
                    if (e.witness) {
                        if (2 !== e.witness.length) throw TypeError("Witness is invalid");
                        if (!a.isCanonicalScriptSignature(e.witness[0])) throw TypeError("Witness has invalid signature");
                        if (!(0, s.isPoint)(e.witness[1]) || 33 !== e.witness[1].length) throw TypeError("Witness has invalid pubkey");
                        if (e.signature && !e.signature.equals(e.witness[0])) throw TypeError("Signature mismatch");
                        if (e.pubkey && !e.pubkey.equals(e.witness[1])) throw TypeError("Pubkey mismatch");
                        let r = i.hash160(e.witness[1]);
                        if (t.length > 0 && !t.equals(r)) throw TypeError("Hash mismatch")
                    }
                }
                return Object.assign(h, e)
            }
        },
        51659: function(e, t, r) {
            "use strict";
            var n = r(67133).Buffer;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.p2wsh = void 0;
            let i = r(7428),
                o = r(12341),
                a = r(46395),
                s = r(14400),
                u = r(68051),
                l = r(46656),
                c = a.OPS,
                f = n.alloc(0);

            function p(e) {
                return !!(n.isBuffer(e) && 65 === e.length && 4 === e[0] && (0, s.isPoint)(e))
            }
            t.p2wsh = function(e, t) {
                if (!e.address && !e.hash && !e.output && !e.redeem && !e.witness) throw TypeError("Not enough data");
                t = Object.assign({
                    validate: !0
                }, t || {}), (0, s.typeforce)({
                    network: s.typeforce.maybe(s.typeforce.Object),
                    address: s.typeforce.maybe(s.typeforce.String),
                    hash: s.typeforce.maybe(s.typeforce.BufferN(32)),
                    output: s.typeforce.maybe(s.typeforce.BufferN(34)),
                    redeem: s.typeforce.maybe({
                        input: s.typeforce.maybe(s.typeforce.Buffer),
                        network: s.typeforce.maybe(s.typeforce.Object),
                        output: s.typeforce.maybe(s.typeforce.Buffer),
                        witness: s.typeforce.maybe(s.typeforce.arrayOf(s.typeforce.Buffer))
                    }),
                    input: s.typeforce.maybe(s.typeforce.BufferN(0)),
                    witness: s.typeforce.maybe(s.typeforce.arrayOf(s.typeforce.Buffer))
                }, e);
                let r = u.value(() => {
                        let t = l.bech32.decode(e.address),
                            r = t.words.shift(),
                            i = l.bech32.fromWords(t.words);
                        return {
                            version: r,
                            prefix: t.prefix,
                            data: n.from(i)
                        }
                    }),
                    h = u.value(() => a.decompile(e.redeem.input)),
                    d = e.network;
                d || (d = e.redeem && e.redeem.network || o.bitcoin);
                let y = {
                    network: d
                };
                if (u.prop(y, "address", () => {
                        if (!y.hash) return;
                        let e = l.bech32.toWords(y.hash);
                        return e.unshift(0), l.bech32.encode(d.bech32, e)
                    }), u.prop(y, "hash", () => e.output ? e.output.slice(2) : e.address ? r().data : y.redeem && y.redeem.output ? i.sha256(y.redeem.output) : void 0), u.prop(y, "output", () => {
                        if (y.hash) return a.compile([c.OP_0, y.hash])
                    }), u.prop(y, "redeem", () => {
                        if (e.witness) return {
                            output: e.witness[e.witness.length - 1],
                            input: f,
                            witness: e.witness.slice(0, -1)
                        }
                    }), u.prop(y, "input", () => {
                        if (y.witness) return f
                    }), u.prop(y, "witness", () => {
                        if (e.redeem && e.redeem.input && e.redeem.input.length > 0 && e.redeem.output && e.redeem.output.length > 0) {
                            let t = a.toStack(h());
                            return y.redeem = Object.assign({
                                witness: t
                            }, e.redeem), y.redeem.input = f, [].concat(t, e.redeem.output)
                        }
                        if (e.redeem && e.redeem.output && e.redeem.witness) return [].concat(e.redeem.witness, e.redeem.output)
                    }), u.prop(y, "name", () => {
                        let e = ["p2wsh"];
                        return void 0 !== y.redeem && void 0 !== y.redeem.name && e.push(y.redeem.name), e.join("-")
                    }), t.validate) {
                    let t = n.from([]);
                    if (e.address) {
                        if (r().prefix !== d.bech32) throw TypeError("Invalid prefix or Network mismatch");
                        if (0 !== r().version) throw TypeError("Invalid address version");
                        if (32 !== r().data.length) throw TypeError("Invalid address data");
                        t = r().data
                    }
                    if (e.hash) {
                        if (t.length > 0 && !t.equals(e.hash)) throw TypeError("Hash mismatch");
                        t = e.hash
                    }
                    if (e.output) {
                        if (34 !== e.output.length || e.output[0] !== c.OP_0 || 32 !== e.output[1]) throw TypeError("Output is invalid");
                        let r = e.output.slice(2);
                        if (t.length > 0 && !t.equals(r)) throw TypeError("Hash mismatch");
                        t = r
                    }
                    if (e.redeem) {
                        var m, g;
                        if (e.redeem.network && e.redeem.network !== d) throw TypeError("Network mismatch");
                        if (e.redeem.input && e.redeem.input.length > 0 && e.redeem.witness && e.redeem.witness.length > 0) throw TypeError("Ambiguous witness source");
                        if (e.redeem.output) {
                            let r = a.decompile(e.redeem.output);
                            if (!r || r.length < 1) throw TypeError("Redeem.output is invalid");
                            if (e.redeem.output.byteLength > 3600) throw TypeError("Redeem.output unspendable if larger than 3600 bytes");
                            if (a.countNonPushOnlyOPs(r) > 201) throw TypeError("Redeem.output unspendable with more than 201 non-push ops");
                            let n = i.sha256(e.redeem.output);
                            if (t.length > 0 && !t.equals(n)) throw TypeError("Hash mismatch");
                            t = n
                        }
                        if (e.redeem.input && !a.isPushOnly(h())) throw TypeError("Non push-only scriptSig");
                        if (e.witness && e.redeem.witness && (m = e.witness, g = e.redeem.witness, !(m.length === g.length && m.every((e, t) => e.equals(g[t]))))) throw TypeError("Witness and redeem.witness mismatch");
                        if (e.redeem.input && h().some(p) || e.redeem.output && (a.decompile(e.redeem.output) || []).some(p)) throw TypeError("redeem.input or redeem.output contains uncompressed pubkey")
                    }
                    if (e.witness && e.witness.length > 0) {
                        let t = e.witness[e.witness.length - 1];
                        if (e.redeem && e.redeem.output && !e.redeem.output.equals(t)) throw TypeError("Witness and redeem.output mismatch");
                        if (e.witness.some(p) || (a.decompile(t) || []).some(p)) throw TypeError("Witness contains uncompressed pubkey")
                    }
                }
                return Object.assign(y, e)
            }
        },
        35820: function(e, t, r) {
            "use strict";
            var n = r(67133).Buffer;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Psbt = void 0;
            let i = r(46046),
                o = r(25756),
                a = r(21006),
                s = r(40734),
                u = r(36610),
                l = r(12341),
                c = r(24074),
                f = r(59889),
                p = r(46395),
                h = r(70520),
                d = r(22451),
                y = r(2514),
                m = {
                    network: l.bitcoin,
                    maximumFeeRate: 5e3
                };
            class g {
                static fromBase64(e, t = {}) {
                    let r = n.from(e, "base64");
                    return this.fromBuffer(r, t)
                }
                static fromHex(e, t = {}) {
                    let r = n.from(e, "hex");
                    return this.fromBuffer(r, t)
                }
                static fromBuffer(e, t = {}) {
                    let r = i.Psbt.fromBuffer(e, b),
                        n = new g(t, r);
                    return function(e, t) {
                        e.ins.forEach(e => {
                            P(t, e)
                        })
                    }(n.__CACHE.__TX, n.__CACHE), n
                }
                constructor(e = {}, t = new i.Psbt(new v)) {
                    this.data = t, this.opts = Object.assign({}, m, e), this.__CACHE = {
                        __NON_WITNESS_UTXO_TX_CACHE: [],
                        __NON_WITNESS_UTXO_BUF_CACHE: [],
                        __TX_IN_CACHE: {},
                        __TX: this.data.globalMap.unsignedTx.tx,
                        __UNSAFE_SIGN_NONSEGWIT: !1
                    }, 0 === this.data.inputs.length && this.setVersion(2);
                    let r = (e, t, r, n) => Object.defineProperty(e, t, {
                        enumerable: r,
                        writable: n
                    });
                    r(this, "__CACHE", !1, !0), r(this, "opts", !1, !0)
                }
                get inputCount() {
                    return this.data.inputs.length
                }
                get version() {
                    return this.__CACHE.__TX.version
                }
                set version(e) {
                    this.setVersion(e)
                }
                get locktime() {
                    return this.__CACHE.__TX.locktime
                }
                set locktime(e) {
                    this.setLocktime(e)
                }
                get txInputs() {
                    return this.__CACHE.__TX.ins.map(e => ({
                        hash: (0, u.cloneBuffer)(e.hash),
                        index: e.index,
                        sequence: e.sequence
                    }))
                }
                get txOutputs() {
                    return this.__CACHE.__TX.outs.map(e => {
                        let t;
                        try {
                            t = (0, s.fromOutputScript)(e.script, this.opts.network)
                        } catch (e) {}
                        return {
                            script: (0, u.cloneBuffer)(e.script),
                            value: e.value,
                            address: t
                        }
                    })
                }
                combine(...e) {
                    return this.data.combine(...e.map(e => e.data)), this
                }
                clone() {
                    let e = g.fromBuffer(this.data.toBuffer());
                    return e.opts = JSON.parse(JSON.stringify(this.opts)), e
                }
                setMaximumFeeRate(e) {
                    _(e), this.opts.maximumFeeRate = e
                }
                setVersion(e) {
                    _(e), k(this.data.inputs, "setVersion");
                    let t = this.__CACHE;
                    return t.__TX.version = e, t.__EXTRACTED_TX = void 0, this
                }
                setLocktime(e) {
                    _(e), k(this.data.inputs, "setLocktime");
                    let t = this.__CACHE;
                    return t.__TX.locktime = e, t.__EXTRACTED_TX = void 0, this
                }
                setInputSequence(e, t) {
                    _(t), k(this.data.inputs, "setInputSequence");
                    let r = this.__CACHE;
                    if (r.__TX.ins.length <= e) throw Error("Input index too high");
                    return r.__TX.ins[e].sequence = t, r.__EXTRACTED_TX = void 0, this
                }
                addInputs(e) {
                    return e.forEach(e => this.addInput(e)), this
                }
                addInput(e) {
                    if (arguments.length > 1 || !e || void 0 === e.hash || void 0 === e.index) throw Error("Invalid arguments for Psbt.addInput. Requires single object with at least [hash] and [index]");
                    (0, d.checkTaprootInputFields)(e, e, "addInput"), k(this.data.inputs, "addInput"), e.witnessScript && z(e.witnessScript);
                    let t = this.__CACHE;
                    this.data.addInput(e);
                    let r = t.__TX.ins[t.__TX.ins.length - 1];
                    P(t, r);
                    let n = this.data.inputs.length - 1,
                        i = this.data.inputs[n];
                    return i.nonWitnessUtxo && F(this.__CACHE, i, n), t.__FEE = void 0, t.__FEE_RATE = void 0, t.__EXTRACTED_TX = void 0, this
                }
                addOutputs(e) {
                    return e.forEach(e => this.addOutput(e)), this
                }
                addOutput(e) {
                    if (arguments.length > 1 || !e || void 0 === e.value || void 0 === e.address && void 0 === e.script) throw Error("Invalid arguments for Psbt.addOutput. Requires single object with at least [script or address] and [value]");
                    k(this.data.inputs, "addOutput");
                    let {
                        address: t
                    } = e;
                    if ("string" == typeof t) {
                        let {
                            network: r
                        } = this.opts, n = (0, s.toOutputScript)(t, r);
                        e = Object.assign(e, {
                            script: n
                        })
                    }(0, d.checkTaprootOutputFields)(e, e, "addOutput");
                    let r = this.__CACHE;
                    return this.data.addOutput(e), r.__FEE = void 0, r.__FEE_RATE = void 0, r.__EXTRACTED_TX = void 0, this
                }
                extractTransaction(e) {
                    if (!this.data.inputs.every(S)) throw Error("Not finalized");
                    let t = this.__CACHE;
                    if (e || function(e, t, r) {
                            let n = t.__FEE_RATE || e.getFeeRate(),
                                i = t.__EXTRACTED_TX.virtualSize();
                            if (n >= r.maximumFeeRate) throw Error(`Warning: You are paying around ${(n*i/1e8).toFixed(8)} in fees, which is ${n} satoshi per byte for a transaction with a VSize of ${i} bytes (segwit counted as 0.25 byte per byte). Use setMaximumFeeRate method to raise your threshold, or pass true to the first arg of extractTransaction.`)
                        }(this, t, this.opts), t.__EXTRACTED_TX) return t.__EXTRACTED_TX;
                    let r = t.__TX.clone();
                    return V(this.data.inputs, r, t, !0), r
                }
                getFeeRate() {
                    return N("__FEE_RATE", "fee rate", this.data.inputs, this.__CACHE)
                }
                getFee() {
                    return N("__FEE", "fee", this.data.inputs, this.__CACHE)
                }
                finalizeAllInputs() {
                    return (0, a.checkForInput)(this.data.inputs, 0), q(this.data.inputs.length).forEach(e => this.finalizeInput(e)), this
                }
                finalizeInput(e, t) {
                    let r = (0, a.checkForInput)(this.data.inputs, e);
                    return (0, d.isTaprootInput)(r) ? this._finalizeTaprootInput(e, r, void 0, t) : this._finalizeInput(e, r, t)
                }
                finalizeTaprootInput(e, t, r = d.tapScriptFinalizer) {
                    let n = (0, a.checkForInput)(this.data.inputs, e);
                    if ((0, d.isTaprootInput)(n)) return this._finalizeTaprootInput(e, n, t, r);
                    throw Error(`Cannot finalize input #${e}. Not Taproot.`)
                }
                _finalizeInput(e, t, r = C) {
                    let {
                        script: n,
                        isP2SH: i,
                        isP2WSH: o,
                        isSegwit: a
                    } = function(e, t, r) {
                        let n = r.__TX,
                            i = {
                                script: null,
                                isSegwit: !1,
                                isP2SH: !1,
                                isP2WSH: !1
                            };
                        if (i.isP2SH = !!t.redeemScript, i.isP2WSH = !!t.witnessScript, t.witnessScript) i.script = t.witnessScript;
                        else if (t.redeemScript) i.script = t.redeemScript;
                        else if (t.nonWitnessUtxo) {
                            let o = j(r, t, e),
                                a = n.ins[e].index;
                            i.script = o.outs[a].script
                        } else t.witnessUtxo && (i.script = t.witnessUtxo.script);
                        return (t.witnessScript || (0, y.isP2WPKH)(i.script)) && (i.isSegwit = !0), i
                    }(e, t, this.__CACHE);
                    if (!n) throw Error(`No script found for input #${e}`);
                    ! function(e) {
                        if (!e.sighashType || !e.partialSig) return;
                        let {
                            partialSig: t,
                            sighashType: r
                        } = e;
                        t.forEach(e => {
                            let {
                                hashType: t
                            } = p.signature.decode(e.signature);
                            if (r !== t) throw Error("Signature sighash does not match input sighash type")
                        })
                    }(t);
                    let {
                        finalScriptSig: s,
                        finalScriptWitness: u
                    } = r(e, t, n, a, i, o);
                    if (s && this.data.updateInput(e, {
                            finalScriptSig: s
                        }), u && this.data.updateInput(e, {
                            finalScriptWitness: u
                        }), !s && !u) throw Error(`Unknown error finalizing input #${e}`);
                    return this.data.clearFinalizedInput(e), this
                }
                _finalizeTaprootInput(e, t, r, n = d.tapScriptFinalizer) {
                    if (!t.witnessUtxo) throw Error(`Cannot finalize input #${e}. Missing withness utxo.`);
                    if (t.tapKeySig) {
                        let r = c.p2tr({
                                output: t.witnessUtxo.script,
                                signature: t.tapKeySig
                            }),
                            n = (0, y.witnessStackToScriptWitness)(r.witness);
                        this.data.updateInput(e, {
                            finalScriptWitness: n
                        })
                    } else {
                        let {
                            finalScriptWitness: i
                        } = n(e, t, r);
                        this.data.updateInput(e, {
                            finalScriptWitness: i
                        })
                    }
                    return this.data.clearFinalizedInput(e), this
                }
                getInputType(e) {
                    let t = (0, a.checkForInput)(this.data.inputs, e),
                        r = W(e, t, this.__CACHE),
                        i = $(r, e, "input", t.redeemScript || function(e) {
                            if (!e) return;
                            let t = p.decompile(e);
                            if (!t) return;
                            let r = t[t.length - 1];
                            if (!n.isBuffer(r) || G(r) || p.isCanonicalScriptSignature(r)) return;
                            let i = p.decompile(r);
                            if (i) return r
                        }(t.finalScriptSig), t.witnessScript || function(e) {
                            if (!e) return;
                            let t = D(e),
                                r = t[t.length - 1];
                            if (G(r)) return;
                            let n = p.decompile(r);
                            if (n) return r
                        }(t.finalScriptWitness)),
                        o = "raw" === i.type ? "" : i.type + "-",
                        s = X(i.meaningfulScript);
                    return o + s
                }
                inputHasPubkey(e, t) {
                    let r = (0, a.checkForInput)(this.data.inputs, e);
                    return function(e, t, r, n) {
                        let i = W(r, t, n),
                            {
                                meaningfulScript: o
                            } = $(i, r, "input", t.redeemScript, t.witnessScript);
                        return (0, y.pubkeyInScript)(e, o)
                    }(t, r, e, this.__CACHE)
                }
                inputHasHDKey(e, t) {
                    let r = (0, a.checkForInput)(this.data.inputs, e),
                        n = T(t);
                    return !!r.bip32Derivation && r.bip32Derivation.some(n)
                }
                outputHasPubkey(e, t) {
                    let r = (0, a.checkForOutput)(this.data.outputs, e);
                    return function(e, t, r, n) {
                        let i = n.__TX.outs[r].script,
                            {
                                meaningfulScript: o
                            } = $(i, r, "output", t.redeemScript, t.witnessScript);
                        return (0, y.pubkeyInScript)(e, o)
                    }(t, r, e, this.__CACHE)
                }
                outputHasHDKey(e, t) {
                    let r = (0, a.checkForOutput)(this.data.outputs, e),
                        n = T(t);
                    return !!r.bip32Derivation && r.bip32Derivation.some(n)
                }
                validateSignaturesOfAllInputs(e) {
                    (0, a.checkForInput)(this.data.inputs, 0);
                    let t = q(this.data.inputs.length).map(t => this.validateSignaturesOfInput(t, e));
                    return t.reduce((e, t) => !0 === t && e, !0)
                }
                validateSignaturesOfInput(e, t, r) {
                    let n = this.data.inputs[e];
                    return (0, d.isTaprootInput)(n) ? this.validateSignaturesOfTaprootInput(e, t, r) : this._validateSignaturesOfInput(e, t, r)
                }
                _validateSignaturesOfInput(e, t, r) {
                    let n, i, o;
                    let a = this.data.inputs[e],
                        s = (a || {}).partialSig;
                    if (!a || !s || s.length < 1) throw Error("No signatures to validate");
                    if ("function" != typeof t) throw Error("Need validator function to validate signatures");
                    let u = r ? s.filter(e => e.pubkey.equals(r)) : s;
                    if (u.length < 1) throw Error("No signatures for this pubkey");
                    let l = [];
                    for (let r of u) {
                        let s = p.signature.decode(r.signature),
                            {
                                hash: u,
                                script: c
                            } = o !== s.hashType ? R(e, Object.assign({}, a, {
                                sighashType: s.hashType
                            }), this.__CACHE, !0) : {
                                hash: n,
                                script: i
                            };
                        o = s.hashType, n = u, i = c, I(r.pubkey, c, "verify"), l.push(t(r.pubkey, u, s.signature))
                    }
                    return l.every(e => !0 === e)
                }
                validateSignaturesOfTaprootInput(e, t, r) {
                    let n = this.data.inputs[e],
                        i = (n || {}).tapKeySig,
                        o = (n || {}).tapScriptSig;
                    if (!n && !i && !(o && !o.length)) throw Error("No signatures to validate");
                    if ("function" != typeof t) throw Error("Need validator function to validate signatures");
                    r = r && (0, d.toXOnly)(r);
                    let a = r ? L(e, n, this.data.inputs, r, this.__CACHE) : function(e, t, r, n) {
                        let i = [];
                        if (t.tapInternalKey) {
                            let r = U(e, t, n);
                            r && i.push(r)
                        }
                        if (t.tapScriptSig) {
                            let e = t.tapScriptSig.map(e => e.pubkey);
                            i.push(...e)
                        }
                        let o = i.map(i => L(e, t, r, i, n));
                        return o.flat()
                    }(e, n, this.data.inputs, this.__CACHE);
                    if (!a.length) throw Error("No signatures for this pubkey");
                    let s = a.find(e => !e.leafHash),
                        u = 0;
                    if (i && s) {
                        let e = t(s.pubkey, s.hash, H(i));
                        if (!e) return !1;
                        u++
                    }
                    if (o)
                        for (let e of o) {
                            let r = a.find(t => e.pubkey.equals(t.pubkey));
                            if (r) {
                                let n = t(e.pubkey, r.hash, H(e.signature));
                                if (!n) return !1;
                                u++
                            }
                        }
                    return u > 0
                }
                signAllInputsHD(e, t = [h.Transaction.SIGHASH_ALL]) {
                    if (!e || !e.publicKey || !e.fingerprint) throw Error("Need HDSigner to sign input");
                    let r = [];
                    for (let n of q(this.data.inputs.length)) try {
                        this.signInputHD(n, e, t), r.push(!0)
                    } catch (e) {
                        r.push(!1)
                    }
                    if (r.every(e => !1 === e)) throw Error("No inputs were signed");
                    return this
                }
                signAllInputsHDAsync(e, t = [h.Transaction.SIGHASH_ALL]) {
                    return new Promise((r, n) => {
                        if (!e || !e.publicKey || !e.fingerprint) return n(Error("Need HDSigner to sign input"));
                        let i = [],
                            o = [];
                        for (let r of q(this.data.inputs.length)) o.push(this.signInputHDAsync(r, e, t).then(() => {
                            i.push(!0)
                        }, () => {
                            i.push(!1)
                        }));
                        return Promise.all(o).then(() => {
                            if (i.every(e => !1 === e)) return n(Error("No inputs were signed"));
                            r()
                        })
                    })
                }
                signInputHD(e, t, r = [h.Transaction.SIGHASH_ALL]) {
                    if (!t || !t.publicKey || !t.fingerprint) throw Error("Need HDSigner to sign input");
                    let n = M(e, this.data.inputs, t);
                    return n.forEach(t => this.signInput(e, t, r)), this
                }
                signInputHDAsync(e, t, r = [h.Transaction.SIGHASH_ALL]) {
                    return new Promise((n, i) => {
                        if (!t || !t.publicKey || !t.fingerprint) return i(Error("Need HDSigner to sign input"));
                        let o = M(e, this.data.inputs, t),
                            a = o.map(t => this.signInputAsync(e, t, r));
                        return Promise.all(a).then(() => {
                            n()
                        }).catch(i)
                    })
                }
                signAllInputs(e, t) {
                    if (!e || !e.publicKey) throw Error("Need Signer to sign input");
                    let r = [];
                    for (let n of q(this.data.inputs.length)) try {
                        this.signInput(n, e, t), r.push(!0)
                    } catch (e) {
                        r.push(!1)
                    }
                    if (r.every(e => !1 === e)) throw Error("No inputs were signed");
                    return this
                }
                signAllInputsAsync(e, t) {
                    return new Promise((r, n) => {
                        if (!e || !e.publicKey) return n(Error("Need Signer to sign input"));
                        let i = [],
                            o = [];
                        for (let [r] of this.data.inputs.entries()) o.push(this.signInputAsync(r, e, t).then(() => {
                            i.push(!0)
                        }, () => {
                            i.push(!1)
                        }));
                        return Promise.all(o).then(() => {
                            if (i.every(e => !1 === e)) return n(Error("No inputs were signed"));
                            r()
                        })
                    })
                }
                signInput(e, t, r) {
                    if (!t || !t.publicKey) throw Error("Need Signer to sign input");
                    let n = (0, a.checkForInput)(this.data.inputs, e);
                    return (0, d.isTaprootInput)(n) ? this._signTaprootInput(e, n, t, void 0, r) : this._signInput(e, t, r)
                }
                signTaprootInput(e, t, r, n) {
                    if (!t || !t.publicKey) throw Error("Need Signer to sign input");
                    let i = (0, a.checkForInput)(this.data.inputs, e);
                    if ((0, d.isTaprootInput)(i)) return this._signTaprootInput(e, i, t, r, n);
                    throw Error(`Input #${e} is not of type Taproot.`)
                }
                _signInput(e, t, r = [h.Transaction.SIGHASH_ALL]) {
                    let {
                        hash: n,
                        sighashType: i
                    } = B(this.data.inputs, e, t.publicKey, this.__CACHE, r), o = [{
                        pubkey: t.publicKey,
                        signature: p.signature.encode(t.sign(n), i)
                    }];
                    return this.data.updateInput(e, {
                        partialSig: o
                    }), this
                }
                _signTaprootInput(e, t, r, n, i = [h.Transaction.SIGHASH_DEFAULT]) {
                    let o = this.checkTaprootHashesForSig(e, t, r, n, i),
                        a = o.filter(e => !e.leafHash).map(e => (0, d.serializeTaprootSignature)(r.signSchnorr(e.hash), t.sighashType))[0],
                        s = o.filter(e => !!e.leafHash).map(e => ({
                            pubkey: (0, d.toXOnly)(r.publicKey),
                            signature: (0, d.serializeTaprootSignature)(r.signSchnorr(e.hash), t.sighashType),
                            leafHash: e.leafHash
                        }));
                    return a && this.data.updateInput(e, {
                        tapKeySig: a
                    }), s.length && this.data.updateInput(e, {
                        tapScriptSig: s
                    }), this
                }
                signInputAsync(e, t, r) {
                    return Promise.resolve().then(() => {
                        if (!t || !t.publicKey) throw Error("Need Signer to sign input");
                        let n = (0, a.checkForInput)(this.data.inputs, e);
                        return (0, d.isTaprootInput)(n) ? this._signTaprootInputAsync(e, n, t, void 0, r) : this._signInputAsync(e, t, r)
                    })
                }
                signTaprootInputAsync(e, t, r, n) {
                    return Promise.resolve().then(() => {
                        if (!t || !t.publicKey) throw Error("Need Signer to sign input");
                        let i = (0, a.checkForInput)(this.data.inputs, e);
                        if ((0, d.isTaprootInput)(i)) return this._signTaprootInputAsync(e, i, t, r, n);
                        throw Error(`Input #${e} is not of type Taproot.`)
                    })
                }
                _signInputAsync(e, t, r = [h.Transaction.SIGHASH_ALL]) {
                    let {
                        hash: n,
                        sighashType: i
                    } = B(this.data.inputs, e, t.publicKey, this.__CACHE, r);
                    return Promise.resolve(t.sign(n)).then(r => {
                        let n = [{
                            pubkey: t.publicKey,
                            signature: p.signature.encode(r, i)
                        }];
                        this.data.updateInput(e, {
                            partialSig: n
                        })
                    })
                }
                async _signTaprootInputAsync(e, t, r, n, i = [h.Transaction.SIGHASH_DEFAULT]) {
                    let o = this.checkTaprootHashesForSig(e, t, r, n, i),
                        a = [],
                        s = o.filter(e => !e.leafHash)[0];
                    if (s) {
                        let e = Promise.resolve(r.signSchnorr(s.hash)).then(e => ({
                            tapKeySig: (0, d.serializeTaprootSignature)(e, t.sighashType)
                        }));
                        a.push(e)
                    }
                    let u = o.filter(e => !!e.leafHash);
                    if (u.length) {
                        let e = u.map(e => Promise.resolve(r.signSchnorr(e.hash)).then(n => {
                            let i = [{
                                pubkey: (0, d.toXOnly)(r.publicKey),
                                signature: (0, d.serializeTaprootSignature)(n, t.sighashType),
                                leafHash: e.leafHash
                            }];
                            return {
                                tapScriptSig: i
                            }
                        }));
                        a.push(...e)
                    }
                    return Promise.all(a).then(t => {
                        t.forEach(t => this.data.updateInput(e, t))
                    })
                }
                checkTaprootHashesForSig(e, t, r, n, i) {
                    if ("function" != typeof r.signSchnorr) throw Error(`Need Schnorr Signer to sign taproot input #${e}.`);
                    let o = L(e, t, this.data.inputs, r.publicKey, this.__CACHE, n, i);
                    if (!o || !o.length) throw Error(`Can not sign for input #${e} with the key ${r.publicKey.toString("hex")}`);
                    return o
                }
                toBuffer() {
                    return E(this.__CACHE), this.data.toBuffer()
                }
                toHex() {
                    return E(this.__CACHE), this.data.toHex()
                }
                toBase64() {
                    return E(this.__CACHE), this.data.toBase64()
                }
                updateGlobal(e) {
                    return this.data.updateGlobal(e), this
                }
                updateInput(e, t) {
                    return t.witnessScript && z(t.witnessScript), (0, d.checkTaprootInputFields)(this.data.inputs[e], t, "updateInput"), this.data.updateInput(e, t), t.nonWitnessUtxo && F(this.__CACHE, this.data.inputs[e], e), this
                }
                updateOutput(e, t) {
                    let r = this.data.outputs[e];
                    return (0, d.checkTaprootOutputFields)(r, t, "updateOutput"), this.data.updateOutput(e, t), this
                }
                addUnknownKeyValToGlobal(e) {
                    return this.data.addUnknownKeyValToGlobal(e), this
                }
                addUnknownKeyValToInput(e, t) {
                    return this.data.addUnknownKeyValToInput(e, t), this
                }
                addUnknownKeyValToOutput(e, t) {
                    return this.data.addUnknownKeyValToOutput(e, t), this
                }
                clearFinalizedInput(e) {
                    return this.data.clearFinalizedInput(e), this
                }
            }
            t.Psbt = g;
            let b = e => new v(e);
            class v {
                constructor(e = n.from([2, 0, 0, 0, 0, 0, 0, 0, 0, 0])) {
                    this.tx = h.Transaction.fromBuffer(e),
                        function(e) {
                            let t = e.ins.every(e => e.script && 0 === e.script.length && e.witness && 0 === e.witness.length);
                            if (!t) throw Error("Format Error: Transaction ScriptSigs are not empty")
                        }(this.tx), Object.defineProperty(this, "tx", {
                            enumerable: !1,
                            writable: !0
                        })
                }
                getInputOutputCounts() {
                    return {
                        inputCount: this.tx.ins.length,
                        outputCount: this.tx.outs.length
                    }
                }
                addInput(e) {
                    if (void 0 === e.hash || void 0 === e.index || !n.isBuffer(e.hash) && "string" != typeof e.hash || "number" != typeof e.index) throw Error("Error adding input.");
                    let t = "string" == typeof e.hash ? (0, u.reverseBuffer)(n.from(e.hash, "hex")) : e.hash;
                    this.tx.addInput(t, e.index, e.sequence)
                }
                addOutput(e) {
                    if (void 0 === e.script || void 0 === e.value || !n.isBuffer(e.script) || "number" != typeof e.value) throw Error("Error adding output.");
                    this.tx.addOutput(e.script, e.value)
                }
                toBuffer() {
                    return this.tx.toBuffer()
                }
            }

            function E(e) {
                if (!1 !== e.__UNSAFE_SIGN_NONSEGWIT) throw Error("Not BIP174 compliant, can not export")
            }

            function w(e, t, r) {
                let n;
                if (!t) return !1;
                if ((n = r ? r.map(e => {
                        let r = function(e) {
                            if (65 === e.length) {
                                let t = 1 & e[64],
                                    r = e.slice(0, 33);
                                return r[0] = 2 | t, r
                            }
                            return e.slice()
                        }(e);
                        return t.find(e => e.pubkey.equals(r))
                    }).filter(e => !!e) : t).length > e) throw Error("Too many signatures");
                return n.length === e
            }

            function S(e) {
                return !!e.finalScriptSig || !!e.finalScriptWitness
            }

            function T(e) {
                return t => !!(t.masterFingerprint.equals(e.fingerprint) && e.derivePath(t.path).publicKey.equals(t.pubkey))
            }

            function _(e) {
                if ("number" != typeof e || e !== Math.floor(e) || e > 4294967295 || e < 0) throw Error("Invalid 32 bit integer")
            }

            function k(e, t) {
                e.forEach(e => {
                    let r = (0, d.isTaprootInput)(e) ? (0, d.checkTaprootInputForSigs)(e, t) : (0, y.checkInputForSig)(e, t);
                    if (r) throw Error("Can not modify transaction, signatures exist.")
                })
            }

            function I(e, t, r) {
                if (!(0, y.pubkeyInScript)(e, t)) throw Error(`Can not ${r} for this input with the key ${e.toString("hex")}`)
            }

            function P(e, t) {
                let r = (0, u.reverseBuffer)(n.from(t.hash)).toString("hex") + ":" + t.index;
                if (e.__TX_IN_CACHE[r]) throw Error("Duplicate input detected.");
                e.__TX_IN_CACHE[r] = 1
            }

            function O(e, t) {
                return (r, n, i, o) => {
                    let a = e({
                        redeem: {
                            output: i
                        }
                    }).output;
                    if (!n.equals(a)) throw Error(`${t} for ${o} #${r} doesn't match the scriptPubKey in the prevout`)
                }
            }
            let x = O(c.p2sh, "Redeem script"),
                A = O(c.p2wsh, "Witness script");

            function N(e, t, r, n) {
                let i;
                if (!r.every(S)) throw Error(`PSBT must be finalized to calculate ${t}`);
                if ("__FEE_RATE" === e && n.__FEE_RATE) return n.__FEE_RATE;
                if ("__FEE" === e && n.__FEE) return n.__FEE;
                let o = !0;
                return (n.__EXTRACTED_TX ? (i = n.__EXTRACTED_TX, o = !1) : i = n.__TX.clone(), V(r, i, n, o), "__FEE_RATE" === e) ? n.__FEE_RATE : "__FEE" === e ? n.__FEE : void 0
            }

            function C(e, t, r, n, i, o) {
                let a = X(r);
                if (! function(e, t, r) {
                        switch (r) {
                            case "pubkey":
                            case "pubkeyhash":
                            case "witnesspubkeyhash":
                                return w(1, e.partialSig);
                            case "multisig":
                                let n = c.p2ms({
                                    output: t
                                });
                                return w(n.m, e.partialSig, n.pubkeys);
                            default:
                                return !1
                        }
                    }(t, r, a)) throw Error(`Can not finalize input #${e}`);
                return function(e, t, r, n, i, o) {
                    let a, s;
                    let u = function(e, t, r) {
                            let n;
                            switch (t) {
                                case "multisig":
                                    let i = function(e, t) {
                                        let r = c.p2ms({
                                            output: e
                                        });
                                        return r.pubkeys.map(e => (t.filter(t => t.pubkey.equals(e))[0] || {}).signature).filter(e => !!e)
                                    }(e, r);
                                    n = c.p2ms({
                                        output: e,
                                        signatures: i
                                    });
                                    break;
                                case "pubkey":
                                    n = c.p2pk({
                                        output: e,
                                        signature: r[0].signature
                                    });
                                    break;
                                case "pubkeyhash":
                                    n = c.p2pkh({
                                        output: e,
                                        pubkey: r[0].pubkey,
                                        signature: r[0].signature
                                    });
                                    break;
                                case "witnesspubkeyhash":
                                    n = c.p2wpkh({
                                        output: e,
                                        pubkey: r[0].pubkey,
                                        signature: r[0].signature
                                    })
                            }
                            return n
                        }(e, t, r),
                        l = o ? c.p2wsh({
                            redeem: u
                        }) : null,
                        f = i ? c.p2sh({
                            redeem: l || u
                        }) : null;
                    return n ? (s = l ? (0, y.witnessStackToScriptWitness)(l.witness) : (0, y.witnessStackToScriptWitness)(u.witness), f && (a = f.input)) : a = f ? f.input : u.input, {
                        finalScriptSig: a,
                        finalScriptWitness: s
                    }
                }(r, a, t.partialSig, n, i, o)
            }

            function B(e, t, r, n, i) {
                let o = (0, a.checkForInput)(e, t),
                    {
                        hash: s,
                        sighashType: u,
                        script: l
                    } = R(t, o, n, !1, i);
                return I(r, l, "sign"), {
                    hash: s,
                    sighashType: u
                }
            }

            function R(e, t, r, n, i) {
                let o, a;
                let s = r.__TX,
                    u = t.sighashType || h.Transaction.SIGHASH_ALL;
                if (Z(u, i), t.nonWitnessUtxo) {
                    let n = j(r, t, e),
                        i = s.ins[e].hash,
                        o = n.getHash();
                    if (!i.equals(o)) throw Error(`Non-witness UTXO hash for input #${e} doesn't match the hash specified in the prevout`);
                    let u = s.ins[e].index;
                    a = n.outs[u]
                } else if (t.witnessUtxo) a = t.witnessUtxo;
                else throw Error("Need a Utxo input item for signing");
                let {
                    meaningfulScript: l,
                    type: f
                } = $(a.script, e, "input", t.redeemScript, t.witnessScript);
                if (["p2sh-p2wsh", "p2wsh"].indexOf(f) >= 0) o = s.hashForWitnessV0(e, l, a.value, u);
                else if ((0, y.isP2WPKH)(l)) {
                    let t = c.p2pkh({
                        hash: l.slice(2)
                    }).output;
                    o = s.hashForWitnessV0(e, t, a.value, u)
                } else {
                    if (void 0 === t.nonWitnessUtxo && !1 === r.__UNSAFE_SIGN_NONSEGWIT) throw Error(`Input #${e} has witnessUtxo but non-segwit script: ${l.toString("hex")}`);
                    n || !1 === r.__UNSAFE_SIGN_NONSEGWIT || console.warn("Warning: Signing non-segwit inputs without the full parent transaction means there is a chance that a miner could feed you incorrect information to trick you into paying large fees. This behavior is the same as Psbt's predecesor (TransactionBuilder - now removed) when signing non-segwit scripts. You are not able to export this Psbt with toBuffer|toBase64|toHex since it is not BIP174 compliant.\n*********************\nPROCEED WITH CAUTION!\n*********************"), o = s.hashForSignature(e, l, u)
                }
                return {
                    script: l,
                    sighashType: u,
                    hash: o
                }
            }

            function U(e, t, r) {
                let {
                    script: n
                } = K(e, t, r);
                return (0, y.isP2TR)(n) ? n.subarray(2, 34) : null
            }

            function H(e) {
                return 64 === e.length ? e : e.subarray(0, 64)
            }

            function L(e, t, r, i, o, a, s) {
                let u = o.__TX,
                    l = t.sighashType || h.Transaction.SIGHASH_DEFAULT;
                Z(l, s);
                let c = r.map((e, t) => K(t, e, o)),
                    p = c.map(e => e.script),
                    m = c.map(e => e.value),
                    g = [];
                if (t.tapInternalKey && !a) {
                    let r = U(e, t, o) || n.from([]);
                    if ((0, d.toXOnly)(i).equals(r)) {
                        let t = u.hashForWitnessV1(e, p, m, l);
                        g.push({
                            pubkey: i,
                            hash: t
                        })
                    }
                }
                let b = (t.tapLeafScript || []).filter(e => (0, y.pubkeyInScript)(i, e.script)).map(e => {
                    let t = (0, f.tapleafHash)({
                        output: e.script,
                        version: e.leafVersion
                    });
                    return Object.assign({
                        hash: t
                    }, e)
                }).filter(e => !a || a.equals(e.hash)).map(t => {
                    let r = u.hashForWitnessV1(e, p, m, h.Transaction.SIGHASH_DEFAULT, t.hash);
                    return {
                        pubkey: i,
                        hash: r,
                        leafHash: t.hash
                    }
                });
                return g.concat(b)
            }

            function Z(e, t) {
                if (t && 0 > t.indexOf(e)) {
                    let t = function(e) {
                        let t = e & h.Transaction.SIGHASH_ANYONECANPAY ? "SIGHASH_ANYONECANPAY | " : "";
                        switch (31 & e) {
                            case h.Transaction.SIGHASH_ALL:
                                t += "SIGHASH_ALL";
                                break;
                            case h.Transaction.SIGHASH_SINGLE:
                                t += "SIGHASH_SINGLE";
                                break;
                            case h.Transaction.SIGHASH_NONE:
                                t += "SIGHASH_NONE"
                        }
                        return t
                    }(e);
                    throw Error(`Sighash type is not allowed. Retry the sign method passing the sighashTypes array of whitelisted types. Sighash type: ${t}`)
                }
            }

            function M(e, t, r) {
                let n = (0, a.checkForInput)(t, e);
                if (!n.bip32Derivation || 0 === n.bip32Derivation.length) throw Error("Need bip32Derivation to sign with HD");
                let i = n.bip32Derivation.map(e => e.masterFingerprint.equals(r.fingerprint) ? e : void 0).filter(e => !!e);
                if (0 === i.length) throw Error("Need one bip32Derivation masterFingerprint to match the HDSigner fingerprint");
                let o = i.map(e => {
                    let t = r.derivePath(e.path);
                    if (!e.pubkey.equals(t.publicKey)) throw Error("pubkey did not match bip32Derivation");
                    return t
                });
                return o
            }

            function D(e) {
                let t = 0;

                function r() {
                    let r = o.decode(e, t);
                    return t += o.decode.bytes, r
                }
                return function() {
                    let n = r(),
                        i = [];
                    for (let o = 0; o < n; o++) i.push(function() {
                        var n;
                        return n = r(), t += n, e.slice(t - n, t)
                    }());
                    return i
                }()
            }

            function F(e, t, r) {
                e.__NON_WITNESS_UTXO_BUF_CACHE[r] = t.nonWitnessUtxo;
                let n = h.Transaction.fromBuffer(t.nonWitnessUtxo);
                e.__NON_WITNESS_UTXO_TX_CACHE[r] = n, delete t.nonWitnessUtxo, Object.defineProperty(t, "nonWitnessUtxo", {
                    enumerable: !0,
                    get() {
                        let t = e.__NON_WITNESS_UTXO_BUF_CACHE[r],
                            n = e.__NON_WITNESS_UTXO_TX_CACHE[r];
                        if (void 0 !== t) return t; {
                            let t = n.toBuffer();
                            return e.__NON_WITNESS_UTXO_BUF_CACHE[r] = t, t
                        }
                    },
                    set(t) {
                        e.__NON_WITNESS_UTXO_BUF_CACHE[r] = t
                    }
                })
            }

            function V(e, t, r, n) {
                let i = 0;
                e.forEach((e, o) => {
                    if (n && e.finalScriptSig && (t.ins[o].script = e.finalScriptSig), n && e.finalScriptWitness && (t.ins[o].witness = D(e.finalScriptWitness)), e.witnessUtxo) i += e.witnessUtxo.value;
                    else if (e.nonWitnessUtxo) {
                        let n = j(r, e, o),
                            a = t.ins[o].index,
                            s = n.outs[a];
                        i += s.value
                    }
                });
                let o = t.outs.reduce((e, t) => e + t.value, 0),
                    a = i - o;
                if (a < 0) throw Error("Outputs are spending more than Inputs");
                let s = t.virtualSize();
                r.__FEE = a, r.__EXTRACTED_TX = t, r.__FEE_RATE = Math.floor(a / s)
            }

            function j(e, t, r) {
                let n = e.__NON_WITNESS_UTXO_TX_CACHE;
                return n[r] || F(e, t, r), n[r]
            }

            function W(e, t, r) {
                let {
                    script: n
                } = K(e, t, r);
                return n
            }

            function K(e, t, r) {
                if (void 0 !== t.witnessUtxo) return {
                    script: t.witnessUtxo.script,
                    value: t.witnessUtxo.value
                };
                if (void 0 !== t.nonWitnessUtxo) {
                    let n = j(r, t, e),
                        i = n.outs[r.__TX.ins[e].index];
                    return {
                        script: i.script,
                        value: i.value
                    }
                }
                throw Error("Can't find pubkey in input without Utxo data")
            }

            function G(e) {
                return 33 === e.length && p.isCanonicalPubKey(e)
            }

            function $(e, t, r, n, i) {
                let o;
                let a = (0, y.isP2SHScript)(e),
                    s = a && n && (0, y.isP2WSHScript)(n),
                    u = (0, y.isP2WSHScript)(e);
                if (a && void 0 === n) throw Error("scriptPubkey is P2SH but redeemScript missing");
                if ((u || s) && void 0 === i) throw Error("scriptPubkey or redeemScript is P2WSH but witnessScript missing");
                return s ? (o = i, x(t, e, n, r), A(t, n, i, r), z(o)) : u ? (o = i, A(t, e, i, r), z(o)) : a ? (o = n, x(t, e, n, r)) : o = e, {
                    meaningfulScript: o,
                    type: s ? "p2sh-p2wsh" : a ? "p2sh" : u ? "p2wsh" : "raw"
                }
            }

            function z(e) {
                if ((0, y.isP2WPKH)(e) || (0, y.isP2SHScript)(e)) throw Error("P2WPKH or P2SH can not be contained within P2WSH")
            }

            function X(e) {
                return (0, y.isP2WPKH)(e) ? "witnesspubkeyhash" : (0, y.isP2PKH)(e) ? "pubkeyhash" : (0, y.isP2MS)(e) ? "multisig" : (0, y.isP2PK)(e) ? "pubkey" : "nonstandard"
            }

            function q(e) {
                return [...Array(e).keys()]
            }
        },
        22451: function(e, t, r) {
            "use strict";
            var n = r(67133).Buffer;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.checkTaprootInputForSigs = t.tapTreeFromList = t.tapTreeToList = t.tweakInternalPubKey = t.checkTaprootOutputFields = t.checkTaprootInputFields = t.isTaprootOutput = t.isTaprootInput = t.serializeTaprootSignature = t.tapScriptFinalizer = t.toXOnly = void 0;
            let i = r(14400),
                o = r(70520),
                a = r(2514),
                s = r(59889),
                u = r(24074),
                l = r(2514);

            function c(e) {
                return e && !!(e.tapInternalKey || e.tapMerkleRoot || e.tapLeafScript && e.tapLeafScript.length || e.tapBip32Derivation && e.tapBip32Derivation.length || e.witnessUtxo && (0, a.isP2TR)(e.witnessUtxo.script))
            }

            function f(e, t) {
                return e && !!(e.tapInternalKey || e.tapTree || e.tapBip32Derivation && e.tapBip32Derivation.length || t && (0, a.isP2TR)(t))
            }

            function p(e = []) {
                return 1 === e.length && 0 === e[0].depth ? {
                    output: e[0].script,
                    version: e[0].leafVersion
                } : function(e) {
                    let t;
                    for (let r of e)
                        if (!(t = function e(t, r, n = 0) {
                                if (n > s.MAX_TAPTREE_DEPTH) throw Error("Max taptree depth exceeded.");
                                if (t.depth === n) return r ? void 0 : {
                                    output: t.script,
                                    version: t.leafVersion
                                };
                                if ((0, i.isTapleaf)(r)) return;
                                let o = e(t, r && r[0], n + 1);
                                if (o) return [o, r && r[1]];
                                let a = e(t, r && r[1], n + 1);
                                if (a) return [r && r[0], a]
                            }(r, t))) throw Error("No room left to insert tapleaf in tree");
                    return t
                }(e)
            }

            function h(e) {
                return {
                    signature: e.slice(0, 64),
                    hashType: e.slice(64)[0] || o.Transaction.SIGHASH_DEFAULT
                }
            }

            function d(e, t) {
                if (!t) return !0;
                let r = (0, s.tapleafHash)({
                        output: e.script,
                        version: e.leafVersion
                    }),
                    n = (0, s.rootHashFromPath)(e.controlBlock, r);
                return n.equals(t)
            }

            function y(e) {
                return e && !!(e.redeemScript || e.witnessScript || e.bip32Derivation && e.bip32Derivation.length)
            }
            t.toXOnly = e => 32 === e.length ? e : e.slice(1, 33), t.tapScriptFinalizer = function(e, t, r) {
                let n = function(e, t, r) {
                    if (!e.tapScriptSig || !e.tapScriptSig.length) throw Error(`Can not finalize taproot input #${t}. No tapleaf script signature provided.`);
                    let n = (e.tapLeafScript || []).sort((e, t) => e.controlBlock.length - t.controlBlock.length).find(t => (function(e, t, r) {
                        let n = (0, s.tapleafHash)({
                                output: e.script,
                                version: e.leafVersion
                            }),
                            i = !r || r.equals(n);
                        return i && void 0 !== t.find(e => e.leafHash.equals(n))
                    })(t, e.tapScriptSig, r));
                    if (!n) throw Error(`Can not finalize taproot input #${t}. Signature for tapleaf script not found.`);
                    return n
                }(t, e, r);
                try {
                    let e = function(e, t) {
                            let r = (0, s.tapleafHash)({
                                output: t.script,
                                version: t.leafVersion
                            });
                            return (e.tapScriptSig || []).filter(e => e.leafHash.equals(r)).map(e => {
                                var r;
                                return r = t.script, Object.assign({
                                    positionInScript: (0, a.pubkeyPositionInScript)(e.pubkey, r)
                                }, e)
                            }).sort((e, t) => t.positionInScript - e.positionInScript).map(e => e.signature)
                        }(t, n),
                        r = e.concat(n.script).concat(n.controlBlock);
                    return {
                        finalScriptWitness: (0, a.witnessStackToScriptWitness)(r)
                    }
                } catch (t) {
                    throw Error(`Can not finalize taproot input #${e}: ${t}`)
                }
            }, t.serializeTaprootSignature = function(e, t) {
                let r = t ? n.from([t]) : n.from([]);
                return n.concat([e, r])
            }, t.isTaprootInput = c, t.isTaprootOutput = f, t.checkTaprootInputFields = function(e, t, r) {
                (function(e, t, r) {
                    let n = c(e) && y(t),
                        i = y(e) && c(t),
                        o = e === t && c(t) && y(t);
                    if (n || i || o) throw Error(`Invalid arguments for Psbt.${r}. Cannot use both taproot and non-taproot fields.`)
                })(e, t, r),
                function(e, t, r) {
                    if (t.tapMerkleRoot) {
                        let n = (t.tapLeafScript || []).every(e => d(e, t.tapMerkleRoot)),
                            i = (e.tapLeafScript || []).every(e => d(e, t.tapMerkleRoot));
                        if (!n || !i) throw Error(`Invalid arguments for Psbt.${r}. Tapleaf not part of taptree.`)
                    } else if (e.tapMerkleRoot) {
                        let n = (t.tapLeafScript || []).every(t => d(t, e.tapMerkleRoot));
                        if (!n) throw Error(`Invalid arguments for Psbt.${r}. Tapleaf not part of taptree.`)
                    }
                }(e, t, r)
            }, t.checkTaprootOutputFields = function(e, t, r) {
                (function(e, t, r) {
                    let n = f(e) && y(t),
                        i = y(e) && f(t),
                        o = e === t && f(t) && y(t);
                    if (n || i || o) throw Error(`Invalid arguments for Psbt.${r}. Cannot use both taproot and non-taproot fields.`)
                })(e, t, r),
                function(e, t) {
                    if (!t.tapTree && !t.tapInternalKey) return;
                    let r = t.tapInternalKey || e.tapInternalKey,
                        n = t.tapTree || e.tapTree;
                    if (r) {
                        let {
                            script: t
                        } = e, i = function(e, t) {
                            let r = t && p(t.leaves),
                                {
                                    output: n
                                } = (0, u.p2tr)({
                                    internalPubkey: e,
                                    scriptTree: r
                                });
                            return n
                        }(r, n);
                        if (t && !t.equals(i)) throw Error("Error adding output. Script or address missmatch.")
                    }
                }(e, t)
            }, t.tweakInternalPubKey = function(e, t) {
                let r = t.tapInternalKey,
                    n = r && (0, s.tweakKey)(r, t.tapMerkleRoot);
                if (!n) throw Error(`Cannot tweak tap internal key for input #${e}. Public key: ${r&&r.toString("hex")}`);
                return n.x
            }, t.tapTreeToList = function(e) {
                if (!(0, i.isTaptree)(e)) throw Error("Cannot convert taptree to tapleaf list. Expecting a tapree structure.");
                return function e(t, r = [], n = 0) {
                    if (n > s.MAX_TAPTREE_DEPTH) throw Error("Max taptree depth exceeded.");
                    return t ? ((0, i.isTapleaf)(t) ? r.push({
                        depth: n,
                        leafVersion: t.version || s.LEAF_VERSION_TAPSCRIPT,
                        script: t.output
                    }) : (t[0] && e(t[0], r, n + 1), t[1] && e(t[1], r, n + 1)), r) : []
                }(e)
            }, t.tapTreeFromList = p, t.checkTaprootInputForSigs = function(e, t) {
                let r = function(e) {
                    let t = [];
                    if (e.tapKeySig && t.push(e.tapKeySig), e.tapScriptSig && t.push(...e.tapScriptSig.map(e => e.signature)), !t.length) {
                        let r = function(e) {
                            if (!e) return;
                            let t = e.slice(2);
                            if (64 === t.length || 65 === t.length) return t
                        }(e.finalScriptWitness);
                        r && t.push(r)
                    }
                    return t
                }(e);
                return r.some(e => (0, l.signatureBlocksAction)(e, h, t))
            }
        },
        2514: function(e, t, r) {
            "use strict";
            var n = r(67133).Buffer;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.signatureBlocksAction = t.checkInputForSig = t.pubkeyInScript = t.pubkeyPositionInScript = t.witnessStackToScriptWitness = t.isP2TR = t.isP2SHScript = t.isP2WSHScript = t.isP2WPKH = t.isP2PKH = t.isP2PK = t.isP2MS = void 0;
            let i = r(25756),
                o = r(46395),
                a = r(70520),
                s = r(7428),
                u = r(24074);

            function l(e) {
                return t => {
                    try {
                        return e({
                            output: t
                        }), !0
                    } catch (e) {
                        return !1
                    }
                }
            }

            function c(e, t) {
                let r = (0, s.hash160)(e),
                    n = e.slice(1, 33),
                    i = o.decompile(t);
                if (null === i) throw Error("Unknown script error");
                return i.findIndex(t => "number" != typeof t && (t.equals(e) || t.equals(r) || t.equals(n)))
            }

            function f(e, t, r) {
                let {
                    hashType: n
                } = t(e), i = [], o = n & a.Transaction.SIGHASH_ANYONECANPAY;
                switch (o && i.push("addInput"), 31 & n) {
                    case a.Transaction.SIGHASH_ALL:
                        break;
                    case a.Transaction.SIGHASH_SINGLE:
                    case a.Transaction.SIGHASH_NONE:
                        i.push("addOutput"), i.push("setInputSequence")
                }
                return -1 === i.indexOf(r)
            }
            t.isP2MS = l(u.p2ms), t.isP2PK = l(u.p2pk), t.isP2PKH = l(u.p2pkh), t.isP2WPKH = l(u.p2wpkh), t.isP2WSHScript = l(u.p2wsh), t.isP2SHScript = l(u.p2sh), t.isP2TR = l(u.p2tr), t.witnessStackToScriptWitness = function(e) {
                let t = n.allocUnsafe(0);

                function r(e) {
                    let r = t.length,
                        o = i.encodingLength(e);
                    t = n.concat([t, n.allocUnsafe(o)]), i.encode(e, t, r)
                }
                return r(e.length), e.forEach(function(e) {
                    r(e.length), t = n.concat([t, n.from(e)])
                }), t
            }, t.pubkeyPositionInScript = c, t.pubkeyInScript = function(e, t) {
                return -1 !== c(e, t)
            }, t.checkInputForSig = function(e, t) {
                let r = function(e) {
                    let t = [];
                    if (0 === (e.partialSig || []).length) {
                        if (!e.finalScriptSig && !e.finalScriptWitness) return [];
                        t = function(e) {
                            let t = e.finalScriptSig && o.decompile(e.finalScriptSig) || [],
                                r = e.finalScriptWitness && o.decompile(e.finalScriptWitness) || [];
                            return t.concat(r).filter(e => n.isBuffer(e) && o.isCanonicalScriptSignature(e)).map(e => ({
                                signature: e
                            }))
                        }(e)
                    } else t = e.partialSig;
                    return t.map(e => e.signature)
                }(e);
                return r.some(e => f(e, o.signature.decode, t))
            }, t.signatureBlocksAction = f
        },
        49513: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.decode = t.encode = t.encodingLength = void 0;
            let n = r(31639);

            function i(e) {
                return e < n.OPS.OP_PUSHDATA1 ? 1 : e <= 255 ? 2 : e <= 65535 ? 3 : 5
            }
            t.encodingLength = i, t.encode = function(e, t, r) {
                let o = i(t);
                return 1 === o ? e.writeUInt8(t, r) : 2 === o ? (e.writeUInt8(n.OPS.OP_PUSHDATA1, r), e.writeUInt8(t, r + 1)) : 3 === o ? (e.writeUInt8(n.OPS.OP_PUSHDATA2, r), e.writeUInt16LE(t, r + 1)) : (e.writeUInt8(n.OPS.OP_PUSHDATA4, r), e.writeUInt32LE(t, r + 1)), o
            }, t.decode = function(e, t) {
                let r, i;
                let o = e.readUInt8(t);
                if (o < n.OPS.OP_PUSHDATA1) r = o, i = 1;
                else if (o === n.OPS.OP_PUSHDATA1) {
                    if (t + 2 > e.length) return null;
                    r = e.readUInt8(t + 1), i = 2
                } else if (o === n.OPS.OP_PUSHDATA2) {
                    if (t + 3 > e.length) return null;
                    r = e.readUInt16LE(t + 1), i = 3
                } else {
                    if (t + 5 > e.length) return null;
                    if (o !== n.OPS.OP_PUSHDATA4) throw Error("Unexpected opcode");
                    r = e.readUInt32LE(t + 1), i = 5
                }
                return {
                    opcode: o,
                    number: r,
                    size: i
                }
            }
        },
        46395: function(e, t, r) {
            "use strict";
            var n = r(67133).Buffer;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.signature = t.number = t.isCanonicalScriptSignature = t.isDefinedHashType = t.isCanonicalPubKey = t.toStack = t.fromASM = t.toASM = t.decompile = t.compile = t.countNonPushOnlyOPs = t.isPushOnly = t.OPS = void 0;
            let i = r(462),
                o = r(31639);
            Object.defineProperty(t, "OPS", {
                enumerable: !0,
                get: function() {
                    return o.OPS
                }
            });
            let a = r(49513),
                s = r(82726),
                u = r(281),
                l = r(14400),
                {
                    typeforce: c
                } = l,
                f = o.OPS.OP_RESERVED;

            function p(e) {
                return l.Buffer(e) || l.Number(e) && (e === o.OPS.OP_0 || e >= o.OPS.OP_1 && e <= o.OPS.OP_16 || e === o.OPS.OP_1NEGATE)
            }

            function h(e) {
                return l.Array(e) && e.every(p)
            }

            function d(e) {
                if (0 === e.length) return o.OPS.OP_0;
                if (1 === e.length) {
                    if (e[0] >= 1 && e[0] <= 16) return f + e[0];
                    if (129 === e[0]) return o.OPS.OP_1NEGATE
                }
            }

            function y(e) {
                return n.isBuffer(e)
            }

            function m(e) {
                return n.isBuffer(e)
            }

            function g(e) {
                if (y(e)) return e;
                c(l.Array, e);
                let t = e.reduce((e, t) => m(t) ? 1 === t.length && void 0 !== d(t) ? e + 1 : e + a.encodingLength(t.length) + t.length : e + 1, 0),
                    r = n.allocUnsafe(t),
                    i = 0;
                if (e.forEach(e => {
                        if (m(e)) {
                            let t = d(e);
                            if (void 0 !== t) {
                                r.writeUInt8(t, i), i += 1;
                                return
                            }
                            i += a.encode(r, e.length, i), e.copy(r, i), i += e.length
                        } else r.writeUInt8(e, i), i += 1
                    }), i !== r.length) throw Error("Could not decode chunks");
                return r
            }

            function b(e) {
                if (l.Array(e)) return e;
                c(l.Buffer, e);
                let t = [],
                    r = 0;
                for (; r < e.length;) {
                    let n = e[r];
                    if (n > o.OPS.OP_0 && n <= o.OPS.OP_PUSHDATA4) {
                        let n = a.decode(e, r);
                        if (null === n || (r += n.size) + n.number > e.length) return null;
                        let i = e.slice(r, r + n.number);
                        r += n.number;
                        let o = d(i);
                        void 0 !== o ? t.push(o) : t.push(i)
                    } else t.push(n), r += 1
                }
                return t
            }

            function v(e) {
                let t = -129 & e;
                return t > 0 && t < 4
            }
            t.isPushOnly = h, t.countNonPushOnlyOPs = function(e) {
                return e.length - e.filter(p).length
            }, t.compile = g, t.decompile = b, t.toASM = function(e) {
                return y(e) && (e = b(e)), e.map(e => {
                    if (m(e)) {
                        let t = d(e);
                        if (void 0 === t) return e.toString("hex");
                        e = t
                    }
                    return o.REVERSE_OPS[e]
                }).join(" ")
            }, t.fromASM = function(e) {
                return c(l.String, e), g(e.split(" ").map(e => void 0 !== o.OPS[e] ? o.OPS[e] : (c(l.Hex, e), n.from(e, "hex"))))
            }, t.toStack = function(e) {
                return c(h, e = b(e)), e.map(e => m(e) ? e : e === o.OPS.OP_0 ? n.allocUnsafe(0) : s.encode(e - f))
            }, t.isCanonicalPubKey = function(e) {
                return l.isPoint(e)
            }, t.isDefinedHashType = v, t.isCanonicalScriptSignature = function(e) {
                return !!(n.isBuffer(e) && v(e[e.length - 1])) && i.check(e.slice(0, -1))
            }, t.number = s, t.signature = u
        },
        82726: function(e, t, r) {
            "use strict";
            var n = r(67133).Buffer;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.encode = t.decode = void 0, t.decode = function(e, t, r) {
                t = t || 4, r = void 0 === r || r;
                let n = e.length;
                if (0 === n) return 0;
                if (n > t) throw TypeError("Script number overflow");
                if (r && (127 & e[n - 1]) == 0 && (n <= 1 || (128 & e[n - 2]) == 0)) throw Error("Non-minimally encoded script number");
                if (5 === n) {
                    let t = e.readUInt32LE(0),
                        r = e.readUInt8(4);
                    return 128 & r ? -((-129 & r) * 4294967296 + t) : 4294967296 * r + t
                }
                let i = 0;
                for (let t = 0; t < n; ++t) i |= e[t] << 8 * t;
                return 128 & e[n - 1] ? -(i & ~(128 << 8 * (n - 1))) : i
            }, t.encode = function(e) {
                var t;
                let r = Math.abs(e),
                    i = (t = r) > 2147483647 ? 5 : t > 8388607 ? 4 : t > 32767 ? 3 : t > 127 ? 2 : t > 0 ? 1 : 0,
                    o = n.allocUnsafe(i),
                    a = e < 0;
                for (let e = 0; e < i; ++e) o.writeUInt8(255 & r, e), r >>= 8;
                return 128 & o[i - 1] ? o.writeUInt8(a ? 128 : 0, i - 1) : a && (o[i - 1] |= 128), o
            }
        },
        281: function(e, t, r) {
            "use strict";
            var n = r(67133).Buffer;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.encode = t.decode = void 0;
            let i = r(462),
                o = r(14400),
                {
                    typeforce: a
                } = o,
                s = n.alloc(1, 0);

            function u(e) {
                let t = 0;
                for (; 0 === e[t];) ++t;
                return t === e.length ? s : 128 & (e = e.slice(t))[0] ? n.concat([s, e], 1 + e.length) : e
            }

            function l(e) {
                0 === e[0] && (e = e.slice(1));
                let t = n.alloc(32, 0),
                    r = Math.max(0, 32 - e.length);
                return e.copy(t, r), t
            }
            t.decode = function(e) {
                let t = e.readUInt8(e.length - 1),
                    r = -129 & t;
                if (r <= 0 || r >= 4) throw Error("Invalid hashType " + t);
                let o = i.decode(e.slice(0, -1)),
                    a = l(o.r),
                    s = l(o.s),
                    u = n.concat([a, s], 64);
                return {
                    signature: u,
                    hashType: t
                }
            }, t.encode = function(e, t) {
                a({
                    signature: o.BufferN(64),
                    hashType: o.UInt8
                }, {
                    signature: e,
                    hashType: t
                });
                let r = -129 & t;
                if (r <= 0 || r >= 4) throw Error("Invalid hashType " + t);
                let s = n.allocUnsafe(1);
                s.writeUInt8(t, 0);
                let l = u(e.slice(0, 32)),
                    c = u(e.slice(32, 64));
                return n.concat([i.encode(l, c), s])
            }
        },
        70520: function(e, t, r) {
            "use strict";
            var n = r(67133).Buffer;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Transaction = void 0;
            let i = r(36610),
                o = r(7428),
                a = r(46395),
                s = r(46395),
                u = r(14400),
                {
                    typeforce: l
                } = u;

            function c(e) {
                let t = e.length;
                return i.varuint.encodingLength(t) + t
            }
            let f = n.allocUnsafe(0),
                p = [],
                h = n.from("0000000000000000000000000000000000000000000000000000000000000000", "hex"),
                d = n.from("0000000000000000000000000000000000000000000000000000000000000001", "hex"),
                y = n.from("ffffffffffffffff", "hex"),
                m = {
                    script: f,
                    valueBuffer: y
                };
            class g {
                constructor() {
                    this.version = 1, this.locktime = 0, this.ins = [], this.outs = []
                }
                static fromBuffer(e, t) {
                    let r = new i.BufferReader(e),
                        n = new g;
                    n.version = r.readInt32();
                    let o = r.readUInt8(),
                        a = r.readUInt8(),
                        s = !1;
                    o === g.ADVANCED_TRANSACTION_MARKER && a === g.ADVANCED_TRANSACTION_FLAG ? s = !0 : r.offset -= 2;
                    let u = r.readVarInt();
                    for (let e = 0; e < u; ++e) n.ins.push({
                        hash: r.readSlice(32),
                        index: r.readUInt32(),
                        script: r.readVarSlice(),
                        sequence: r.readUInt32(),
                        witness: p
                    });
                    let l = r.readVarInt();
                    for (let e = 0; e < l; ++e) n.outs.push({
                        value: r.readUInt64(),
                        script: r.readVarSlice()
                    });
                    if (s) {
                        for (let e = 0; e < u; ++e) n.ins[e].witness = r.readVector();
                        if (!n.hasWitnesses()) throw Error("Transaction has superfluous witness data")
                    }
                    if (n.locktime = r.readUInt32(), t) return n;
                    if (r.offset !== e.length) throw Error("Transaction has unexpected data");
                    return n
                }
                static fromHex(e) {
                    return g.fromBuffer(n.from(e, "hex"), !1)
                }
                static isCoinbaseHash(e) {
                    l(u.Hash256bit, e);
                    for (let t = 0; t < 32; ++t)
                        if (0 !== e[t]) return !1;
                    return !0
                }
                isCoinbase() {
                    return 1 === this.ins.length && g.isCoinbaseHash(this.ins[0].hash)
                }
                addInput(e, t, r, n) {
                    return l(u.tuple(u.Hash256bit, u.UInt32, u.maybe(u.UInt32), u.maybe(u.Buffer)), arguments), u.Null(r) && (r = g.DEFAULT_SEQUENCE), this.ins.push({
                        hash: e,
                        index: t,
                        script: n || f,
                        sequence: r,
                        witness: p
                    }) - 1
                }
                addOutput(e, t) {
                    return l(u.tuple(u.Buffer, u.Satoshi), arguments), this.outs.push({
                        script: e,
                        value: t
                    }) - 1
                }
                hasWitnesses() {
                    return this.ins.some(e => 0 !== e.witness.length)
                }
                weight() {
                    let e = this.byteLength(!1),
                        t = this.byteLength(!0);
                    return 3 * e + t
                }
                virtualSize() {
                    return Math.ceil(this.weight() / 4)
                }
                byteLength(e = !0) {
                    let t = e && this.hasWitnesses();
                    return (t ? 10 : 8) + i.varuint.encodingLength(this.ins.length) + i.varuint.encodingLength(this.outs.length) + this.ins.reduce((e, t) => e + 40 + c(t.script), 0) + this.outs.reduce((e, t) => e + 8 + c(t.script), 0) + (t ? this.ins.reduce((e, t) => e + function(e) {
                        let t = e.length;
                        return i.varuint.encodingLength(t) + e.reduce((e, t) => e + c(t), 0)
                    }(t.witness), 0) : 0)
                }
                clone() {
                    let e = new g;
                    return e.version = this.version, e.locktime = this.locktime, e.ins = this.ins.map(e => ({
                        hash: e.hash,
                        index: e.index,
                        script: e.script,
                        sequence: e.sequence,
                        witness: e.witness
                    })), e.outs = this.outs.map(e => ({
                        script: e.script,
                        value: e.value
                    })), e
                }
                hashForSignature(e, t, r) {
                    if (l(u.tuple(u.UInt32, u.Buffer, u.Number), arguments), e >= this.ins.length) return d;
                    let i = a.compile(a.decompile(t).filter(e => e !== s.OPS.OP_CODESEPARATOR)),
                        c = this.clone();
                    if ((31 & r) === g.SIGHASH_NONE) c.outs = [], c.ins.forEach((t, r) => {
                        r !== e && (t.sequence = 0)
                    });
                    else if ((31 & r) === g.SIGHASH_SINGLE) {
                        if (e >= this.outs.length) return d;
                        c.outs.length = e + 1;
                        for (let t = 0; t < e; t++) c.outs[t] = m;
                        c.ins.forEach((t, r) => {
                            r !== e && (t.sequence = 0)
                        })
                    }
                    r & g.SIGHASH_ANYONECANPAY ? (c.ins = [c.ins[e]], c.ins[0].script = i) : (c.ins.forEach(e => {
                        e.script = f
                    }), c.ins[e].script = i);
                    let p = n.allocUnsafe(c.byteLength(!1) + 4);
                    return p.writeInt32LE(r, p.length - 4), c.__toBuffer(p, 0, !1), o.hash256(p)
                }
                hashForWitnessV1(e, t, r, a, s, p) {
                    if (l(u.tuple(u.UInt32, l.arrayOf(u.Buffer), l.arrayOf(u.Satoshi), u.UInt32), arguments), r.length !== this.ins.length || t.length !== this.ins.length) throw Error("Must supply prevout script and value for all inputs");
                    let h = a === g.SIGHASH_DEFAULT ? g.SIGHASH_ALL : a & g.SIGHASH_OUTPUT_MASK,
                        d = a & g.SIGHASH_INPUT_MASK,
                        y = d === g.SIGHASH_ANYONECANPAY,
                        m = h === g.SIGHASH_NONE,
                        b = h === g.SIGHASH_SINGLE,
                        v = f,
                        E = f,
                        w = f,
                        S = f,
                        T = f;
                    if (!y) {
                        let e = i.BufferWriter.withCapacity(36 * this.ins.length);
                        this.ins.forEach(t => {
                            e.writeSlice(t.hash), e.writeUInt32(t.index)
                        }), v = o.sha256(e.end()), e = i.BufferWriter.withCapacity(8 * this.ins.length), r.forEach(t => e.writeUInt64(t)), E = o.sha256(e.end()), e = i.BufferWriter.withCapacity(t.map(c).reduce((e, t) => e + t)), t.forEach(t => e.writeVarSlice(t)), w = o.sha256(e.end()), e = i.BufferWriter.withCapacity(4 * this.ins.length), this.ins.forEach(t => e.writeUInt32(t.sequence)), S = o.sha256(e.end())
                    }
                    if (m || b) {
                        if (b && e < this.outs.length) {
                            let t = this.outs[e],
                                r = i.BufferWriter.withCapacity(8 + c(t.script));
                            r.writeUInt64(t.value), r.writeVarSlice(t.script), T = o.sha256(r.end())
                        }
                    } else {
                        let e = this.outs.map(e => 8 + c(e.script)).reduce((e, t) => e + t),
                            t = i.BufferWriter.withCapacity(e);
                        this.outs.forEach(e => {
                            t.writeUInt64(e.value), t.writeVarSlice(e.script)
                        }), T = o.sha256(t.end())
                    }
                    let _ = (s ? 2 : 0) + (p ? 1 : 0),
                        k = 174 - (y ? 49 : 0) - (m ? 32 : 0) + (p ? 32 : 0) + (s ? 37 : 0),
                        I = i.BufferWriter.withCapacity(k);
                    if (I.writeUInt8(a), I.writeInt32(this.version), I.writeUInt32(this.locktime), I.writeSlice(v), I.writeSlice(E), I.writeSlice(w), I.writeSlice(S), m || b || I.writeSlice(T), I.writeUInt8(_), y) {
                        let n = this.ins[e];
                        I.writeSlice(n.hash), I.writeUInt32(n.index), I.writeUInt64(r[e]), I.writeVarSlice(t[e]), I.writeUInt32(n.sequence)
                    } else I.writeUInt32(e);
                    if (p) {
                        let e = i.BufferWriter.withCapacity(c(p));
                        e.writeVarSlice(p), I.writeSlice(o.sha256(e.end()))
                    }
                    return b && I.writeSlice(T), s && (I.writeSlice(s), I.writeUInt8(0), I.writeUInt32(4294967295)), o.taggedHash("TapSighash", n.concat([n.from([0]), I.end()]))
                }
                hashForWitnessV0(e, t, r, a) {
                    let s;
                    l(u.tuple(u.UInt32, u.Buffer, u.Satoshi, u.UInt32), arguments);
                    let f = n.from([]),
                        p = h,
                        d = h,
                        y = h;
                    if (a & g.SIGHASH_ANYONECANPAY || (f = n.allocUnsafe(36 * this.ins.length), s = new i.BufferWriter(f, 0), this.ins.forEach(e => {
                            s.writeSlice(e.hash), s.writeUInt32(e.index)
                        }), d = o.hash256(f)), a & g.SIGHASH_ANYONECANPAY || (31 & a) === g.SIGHASH_SINGLE || (31 & a) === g.SIGHASH_NONE || (f = n.allocUnsafe(4 * this.ins.length), s = new i.BufferWriter(f, 0), this.ins.forEach(e => {
                            s.writeUInt32(e.sequence)
                        }), y = o.hash256(f)), (31 & a) !== g.SIGHASH_SINGLE && (31 & a) !== g.SIGHASH_NONE) {
                        let e = this.outs.reduce((e, t) => e + 8 + c(t.script), 0);
                        f = n.allocUnsafe(e), s = new i.BufferWriter(f, 0), this.outs.forEach(e => {
                            s.writeUInt64(e.value), s.writeVarSlice(e.script)
                        }), p = o.hash256(f)
                    } else if ((31 & a) === g.SIGHASH_SINGLE && e < this.outs.length) {
                        let t = this.outs[e];
                        f = n.allocUnsafe(8 + c(t.script)), (s = new i.BufferWriter(f, 0)).writeUInt64(t.value), s.writeVarSlice(t.script), p = o.hash256(f)
                    }
                    f = n.allocUnsafe(156 + c(t)), s = new i.BufferWriter(f, 0);
                    let m = this.ins[e];
                    return s.writeInt32(this.version), s.writeSlice(d), s.writeSlice(y), s.writeSlice(m.hash), s.writeUInt32(m.index), s.writeVarSlice(t), s.writeUInt64(r), s.writeUInt32(m.sequence), s.writeSlice(p), s.writeUInt32(this.locktime), s.writeUInt32(a), o.hash256(f)
                }
                getHash(e) {
                    return e && this.isCoinbase() ? n.alloc(32, 0) : o.hash256(this.__toBuffer(void 0, void 0, e))
                }
                getId() {
                    return (0, i.reverseBuffer)(this.getHash(!1)).toString("hex")
                }
                toBuffer(e, t) {
                    return this.__toBuffer(e, t, !0)
                }
                toHex() {
                    return this.toBuffer(void 0, void 0).toString("hex")
                }
                setInputScript(e, t) {
                    l(u.tuple(u.Number, u.Buffer), arguments), this.ins[e].script = t
                }
                setWitness(e, t) {
                    l(u.tuple(u.Number, [u.Buffer]), arguments), this.ins[e].witness = t
                }
                __toBuffer(e, t, r = !1) {
                    e || (e = n.allocUnsafe(this.byteLength(r)));
                    let o = new i.BufferWriter(e, t || 0);
                    o.writeInt32(this.version);
                    let a = r && this.hasWitnesses();
                    return (a && (o.writeUInt8(g.ADVANCED_TRANSACTION_MARKER), o.writeUInt8(g.ADVANCED_TRANSACTION_FLAG)), o.writeVarInt(this.ins.length), this.ins.forEach(e => {
                        o.writeSlice(e.hash), o.writeUInt32(e.index), o.writeVarSlice(e.script), o.writeUInt32(e.sequence)
                    }), o.writeVarInt(this.outs.length), this.outs.forEach(e => {
                        void 0 !== e.value ? o.writeUInt64(e.value) : o.writeSlice(e.valueBuffer), o.writeVarSlice(e.script)
                    }), a && this.ins.forEach(e => {
                        o.writeVector(e.witness)
                    }), o.writeUInt32(this.locktime), void 0 !== t) ? e.slice(t, o.offset) : e
                }
            }
            t.Transaction = g, g.DEFAULT_SEQUENCE = 4294967295, g.SIGHASH_DEFAULT = 0, g.SIGHASH_ALL = 1, g.SIGHASH_NONE = 2, g.SIGHASH_SINGLE = 3, g.SIGHASH_ANYONECANPAY = 128, g.SIGHASH_OUTPUT_MASK = 3, g.SIGHASH_INPUT_MASK = 128, g.ADVANCED_TRANSACTION_MARKER = 0, g.ADVANCED_TRANSACTION_FLAG = 1
        },
        14400: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.oneOf = t.Null = t.BufferN = t.Function = t.UInt32 = t.UInt8 = t.tuple = t.maybe = t.Hex = t.Buffer = t.String = t.Boolean = t.Array = t.Number = t.Hash256bit = t.Hash160bit = t.Buffer256bit = t.isTaptree = t.isTapleaf = t.TAPLEAF_VERSION_MASK = t.Network = t.ECPoint = t.Satoshi = t.Signer = t.BIP32Path = t.UInt31 = t.isPoint = t.typeforce = void 0;
            let n = r(67133);
            t.typeforce = r(24594);
            let i = n.Buffer.alloc(32, 0),
                o = n.Buffer.from("fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f", "hex");

            function a(e) {
                return t.typeforce.String(e) && !!e.match(/^(m\/)?(\d+'?\/)*\d+'?$/)
            }
            t.isPoint = function(e) {
                if (!n.Buffer.isBuffer(e) || e.length < 33) return !1;
                let t = e[0],
                    r = e.slice(1, 33);
                if (0 === r.compare(i) || r.compare(o) >= 0) return !1;
                if ((2 === t || 3 === t) && 33 === e.length) return !0;
                let a = e.slice(33);
                return !(0 === a.compare(i) || a.compare(o) >= 0) && 4 === t && 65 === e.length
            }, t.UInt31 = function(e) {
                return t.typeforce.UInt32(e) && e <= 2147483647
            }, t.BIP32Path = a, a.toJSON = () => "BIP32 derivation path", t.Signer = function(e) {
                return (t.typeforce.Buffer(e.publicKey) || "function" == typeof e.getPublicKey) && "function" == typeof e.sign
            };
            let s = 21 * 1e14;

            function u(e) {
                return !!(e && "output" in e && n.Buffer.isBuffer(e.output)) && (void 0 === e.version || (e.version & t.TAPLEAF_VERSION_MASK) === e.version)
            }
            t.Satoshi = function(e) {
                return t.typeforce.UInt53(e) && e <= s
            }, t.ECPoint = t.typeforce.quacksLike("Point"), t.Network = t.typeforce.compile({
                messagePrefix: t.typeforce.oneOf(t.typeforce.Buffer, t.typeforce.String),
                bip32: {
                    public: t.typeforce.UInt32,
                    private: t.typeforce.UInt32
                },
                pubKeyHash: t.typeforce.UInt8,
                scriptHash: t.typeforce.UInt8,
                wif: t.typeforce.UInt8
            }), t.TAPLEAF_VERSION_MASK = 254, t.isTapleaf = u, t.isTaptree = function e(r) {
                return (0, t.Array)(r) ? 2 === r.length && r.every(t => e(t)) : u(r)
            }, t.Buffer256bit = t.typeforce.BufferN(32), t.Hash160bit = t.typeforce.BufferN(20), t.Hash256bit = t.typeforce.BufferN(32), t.Number = t.typeforce.Number, t.Array = t.typeforce.Array, t.Boolean = t.typeforce.Boolean, t.String = t.typeforce.String, t.Buffer = t.typeforce.Buffer, t.Hex = t.typeforce.Hex, t.maybe = t.typeforce.maybe, t.tuple = t.typeforce.tuple, t.UInt8 = t.typeforce.UInt8, t.UInt32 = t.typeforce.UInt32, t.Function = t.typeforce.Function, t.BufferN = t.typeforce.BufferN, t.Null = t.typeforce.Null, t.oneOf = t.typeforce.oneOf
        },
        11384: function(e, t, r) {
            "use strict";
            var n = r(57663);
            e.exports = function(e) {
                function t(t) {
                    var r = t.slice(0, -4),
                        n = t.slice(-4),
                        i = e(r);
                    if (!(n[0] ^ i[0] | n[1] ^ i[1] | n[2] ^ i[2] | n[3] ^ i[3])) return r
                }
                return {
                    encode: function(t) {
                        var r = Uint8Array.from(t),
                            i = e(r),
                            o = r.length + 4,
                            a = new Uint8Array(o);
                        return a.set(r, 0), a.set(i.subarray(0, 4), r.length), n.encode(a, o)
                    },
                    decode: function(r) {
                        var i = t(n.decode(r), e);
                        if (!i) throw Error("Invalid checksum");
                        return i
                    },
                    decodeUnsafe: function(e) {
                        var r = n.decodeUnsafe(e);
                        if (r) return t(r)
                    }
                }
            }
        },
        12193: function(e, t, r) {
            "use strict";
            var {
                sha256: n
            } = r(26553), i = r(11384);
            e.exports = i(function(e) {
                return n(n(e))
            })
        },
        70102: function(e, t) {
            "use strict";

            function r(e) {
                if (!Number.isSafeInteger(e) || e < 0) throw Error(`Wrong positive integer: ${e}`)
            }

            function n(e) {
                if ("boolean" != typeof e) throw Error(`Expected boolean, not ${e}`)
            }

            function i(e, ...t) {
                if (!(e instanceof Uint8Array || null != e && "object" == typeof e && "Uint8Array" === e.constructor.name)) throw Error("Expected Uint8Array");
                if (t.length > 0 && !t.includes(e.length)) throw Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`)
            }

            function o(e) {
                if ("function" != typeof e || "function" != typeof e.create) throw Error("Hash should be wrapped by utils.wrapConstructor");
                r(e.outputLen), r(e.blockLen)
            }

            function a(e, t = !0) {
                if (e.destroyed) throw Error("Hash instance has been destroyed");
                if (t && e.finished) throw Error("Hash#digest() has already been called")
            }

            function s(e, t) {
                i(e);
                let r = t.outputLen;
                if (e.length < r) throw Error(`digestInto() expects output buffer of length at least ${r}`)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.output = t.exists = t.hash = t.bytes = t.bool = t.number = void 0, t.number = r, t.bool = n, t.bytes = i, t.hash = o, t.exists = a, t.output = s, t.default = {
                number: r,
                bool: n,
                bytes: i,
                hash: o,
                exists: a,
                output: s
            }
        },
        68771: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SHA2 = void 0;
            let n = r(70102),
                i = r(37458);
            class o extends i.Hash {
                constructor(e, t, r, n) {
                    super(), this.blockLen = e, this.outputLen = t, this.padOffset = r, this.isLE = n, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(e), this.view = (0, i.createView)(this.buffer)
                }
                update(e) {
                    (0, n.exists)(this);
                    let {
                        view: t,
                        buffer: r,
                        blockLen: o
                    } = this;
                    e = (0, i.toBytes)(e);
                    let a = e.length;
                    for (let n = 0; n < a;) {
                        let s = Math.min(o - this.pos, a - n);
                        if (s === o) {
                            let t = (0, i.createView)(e);
                            for (; o <= a - n; n += o) this.process(t, n);
                            continue
                        }
                        r.set(e.subarray(n, n + s), this.pos), this.pos += s, n += s, this.pos === o && (this.process(t, 0), this.pos = 0)
                    }
                    return this.length += e.length, this.roundClean(), this
                }
                digestInto(e) {
                    (0, n.exists)(this), (0, n.output)(e, this), this.finished = !0;
                    let {
                        buffer: t,
                        view: r,
                        blockLen: o,
                        isLE: a
                    } = this, {
                        pos: s
                    } = this;
                    t[s++] = 128, this.buffer.subarray(s).fill(0), this.padOffset > o - s && (this.process(r, 0), s = 0);
                    for (let e = s; e < o; e++) t[e] = 0;
                    ! function(e, t, r, n) {
                        if ("function" == typeof e.setBigUint64) return e.setBigUint64(t, r, n);
                        let i = BigInt(32),
                            o = BigInt(4294967295),
                            a = Number(r >> i & o),
                            s = Number(r & o),
                            u = n ? 4 : 0,
                            l = n ? 0 : 4;
                        e.setUint32(t + u, a, n), e.setUint32(t + l, s, n)
                    }(r, o - 8, BigInt(8 * this.length), a), this.process(r, 0);
                    let u = (0, i.createView)(e),
                        l = this.outputLen;
                    if (l % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
                    let c = l / 4,
                        f = this.get();
                    if (c > f.length) throw Error("_sha2: outputLen bigger than state");
                    for (let e = 0; e < c; e++) u.setUint32(4 * e, f[e], a)
                }
                digest() {
                    let {
                        buffer: e,
                        outputLen: t
                    } = this;
                    this.digestInto(e);
                    let r = e.slice(0, t);
                    return this.destroy(), r
                }
                _cloneInto(e) {
                    e || (e = new this.constructor), e.set(...this.get());
                    let {
                        blockLen: t,
                        buffer: r,
                        length: n,
                        finished: i,
                        destroyed: o,
                        pos: a
                    } = this;
                    return e.length = n, e.pos = a, e.finished = i, e.destroyed = o, n % t && e.buffer.set(r), e
                }
            }
            t.SHA2 = o
        },
        72919: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.crypto = void 0, t.crypto = "object" == typeof globalThis && "crypto" in globalThis ? globalThis.crypto : void 0
        },
        26553: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.sha224 = t.sha256 = void 0;
            let n = r(68771),
                i = r(37458),
                o = (e, t, r) => e & t ^ ~e & r,
                a = (e, t, r) => e & t ^ e & r ^ t & r,
                s = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]),
                u = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]),
                l = new Uint32Array(64);
            class c extends n.SHA2 {
                constructor() {
                    super(64, 32, 8, !1), this.A = 0 | u[0], this.B = 0 | u[1], this.C = 0 | u[2], this.D = 0 | u[3], this.E = 0 | u[4], this.F = 0 | u[5], this.G = 0 | u[6], this.H = 0 | u[7]
                }
                get() {
                    let {
                        A: e,
                        B: t,
                        C: r,
                        D: n,
                        E: i,
                        F: o,
                        G: a,
                        H: s
                    } = this;
                    return [e, t, r, n, i, o, a, s]
                }
                set(e, t, r, n, i, o, a, s) {
                    this.A = 0 | e, this.B = 0 | t, this.C = 0 | r, this.D = 0 | n, this.E = 0 | i, this.F = 0 | o, this.G = 0 | a, this.H = 0 | s
                }
                process(e, t) {
                    for (let r = 0; r < 16; r++, t += 4) l[r] = e.getUint32(t, !1);
                    for (let e = 16; e < 64; e++) {
                        let t = l[e - 15],
                            r = l[e - 2],
                            n = (0, i.rotr)(t, 7) ^ (0, i.rotr)(t, 18) ^ t >>> 3,
                            o = (0, i.rotr)(r, 17) ^ (0, i.rotr)(r, 19) ^ r >>> 10;
                        l[e] = o + l[e - 7] + n + l[e - 16] | 0
                    }
                    let {
                        A: r,
                        B: n,
                        C: u,
                        D: c,
                        E: f,
                        F: p,
                        G: h,
                        H: d
                    } = this;
                    for (let e = 0; e < 64; e++) {
                        let t = (0, i.rotr)(f, 6) ^ (0, i.rotr)(f, 11) ^ (0, i.rotr)(f, 25),
                            y = d + t + o(f, p, h) + s[e] + l[e] | 0,
                            m = (0, i.rotr)(r, 2) ^ (0, i.rotr)(r, 13) ^ (0, i.rotr)(r, 22),
                            g = m + a(r, n, u) | 0;
                        d = h, h = p, p = f, f = c + y | 0, c = u, u = n, n = r, r = y + g | 0
                    }
                    r = r + this.A | 0, n = n + this.B | 0, u = u + this.C | 0, c = c + this.D | 0, f = f + this.E | 0, p = p + this.F | 0, h = h + this.G | 0, d = d + this.H | 0, this.set(r, n, u, c, f, p, h, d)
                }
                roundClean() {
                    l.fill(0)
                }
                destroy() {
                    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0)
                }
            }
            class f extends c {
                constructor() {
                    super(), this.A = -1056596264, this.B = 914150663, this.C = 812702999, this.D = -150054599, this.E = -4191439, this.F = 1750603025, this.G = 1694076839, this.H = -1090891868, this.outputLen = 28
                }
            }
            t.sha256 = (0, i.wrapConstructor)(() => new c), t.sha224 = (0, i.wrapConstructor)(() => new f)
        },
        37458: function(e, t, r) {
            "use strict"; /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.randomBytes = t.wrapXOFConstructorWithOpts = t.wrapConstructorWithOpts = t.wrapConstructor = t.checkOpts = t.Hash = t.concatBytes = t.toBytes = t.utf8ToBytes = t.asyncLoop = t.nextTick = t.hexToBytes = t.bytesToHex = t.isLE = t.rotr = t.createView = t.u32 = t.u8 = void 0;
            let n = r(72919);

            function i(e) {
                return e instanceof Uint8Array || null != e && "object" == typeof e && "Uint8Array" === e.constructor.name
            }
            if (t.u8 = e => new Uint8Array(e.buffer, e.byteOffset, e.byteLength), t.u32 = e => new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)), t.createView = e => new DataView(e.buffer, e.byteOffset, e.byteLength), t.rotr = (e, t) => e << 32 - t | e >>> t, t.isLE = 68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0], !t.isLE) throw Error("Non little-endian hardware is not supported");
            let o = Array.from({
                length: 256
            }, (e, t) => t.toString(16).padStart(2, "0"));
            t.bytesToHex = function(e) {
                if (!i(e)) throw Error("Uint8Array expected");
                let t = "";
                for (let r = 0; r < e.length; r++) t += o[e[r]];
                return t
            };
            let a = {
                _0: 48,
                _9: 57,
                _A: 65,
                _F: 70,
                _a: 97,
                _f: 102
            };

            function s(e) {
                return e >= a._0 && e <= a._9 ? e - a._0 : e >= a._A && e <= a._F ? e - (a._A - 10) : e >= a._a && e <= a._f ? e - (a._a - 10) : void 0
            }
            t.hexToBytes = function(e) {
                if ("string" != typeof e) throw Error("hex string expected, got " + typeof e);
                let t = e.length,
                    r = t / 2;
                if (t % 2) throw Error("padded hex string expected, got unpadded hex of length " + t);
                let n = new Uint8Array(r);
                for (let t = 0, i = 0; t < r; t++, i += 2) {
                    let r = s(e.charCodeAt(i)),
                        o = s(e.charCodeAt(i + 1));
                    if (void 0 === r || void 0 === o) {
                        let t = e[i] + e[i + 1];
                        throw Error('hex string expected, got non-hex character "' + t + '" at index ' + i)
                    }
                    n[t] = 16 * r + o
                }
                return n
            };
            let u = async () => {};
            async function l(e, r, n) {
                let i = Date.now();
                for (let o = 0; o < e; o++) {
                    n(o);
                    let e = Date.now() - i;
                    e >= 0 && e < r || (await (0, t.nextTick)(), i += e)
                }
            }

            function c(e) {
                if ("string" != typeof e) throw Error(`utf8ToBytes expected string, got ${typeof e}`);
                return new Uint8Array(new TextEncoder().encode(e))
            }

            function f(e) {
                if ("string" == typeof e && (e = c(e)), !i(e)) throw Error(`expected Uint8Array, got ${typeof e}`);
                return e
            }
            t.nextTick = u, t.asyncLoop = l, t.utf8ToBytes = c, t.toBytes = f, t.concatBytes = function(...e) {
                let t = 0;
                for (let r = 0; r < e.length; r++) {
                    let n = e[r];
                    if (!i(n)) throw Error("Uint8Array expected");
                    t += n.length
                }
                let r = new Uint8Array(t);
                for (let t = 0, n = 0; t < e.length; t++) {
                    let i = e[t];
                    r.set(i, n), n += i.length
                }
                return r
            };
            class p {
                clone() {
                    return this._cloneInto()
                }
            }
            t.Hash = p;
            let h = {}.toString;
            t.checkOpts = function(e, t) {
                if (void 0 !== t && "[object Object]" !== h.call(t)) throw Error("Options should be object or undefined");
                let r = Object.assign(e, t);
                return r
            }, t.wrapConstructor = function(e) {
                let t = t => e().update(f(t)).digest(),
                    r = e();
                return t.outputLen = r.outputLen, t.blockLen = r.blockLen, t.create = () => e(), t
            }, t.wrapConstructorWithOpts = function(e) {
                let t = (t, r) => e(r).update(f(t)).digest(),
                    r = e({});
                return t.outputLen = r.outputLen, t.blockLen = r.blockLen, t.create = t => e(t), t
            }, t.wrapXOFConstructorWithOpts = function(e) {
                let t = (t, r) => e(r).update(f(t)).digest(),
                    r = e({});
                return t.outputLen = r.outputLen, t.blockLen = r.blockLen, t.create = t => e(t), t
            }, t.randomBytes = function(e = 32) {
                if (n.crypto && "function" == typeof n.crypto.getRandomValues) return n.crypto.getRandomValues(new Uint8Array(e));
                throw Error("crypto.getRandomValues must be defined")
            }
        },
        10146: function(e) {
            "use strict";
            e.exports = function(e) {
                if (e.length >= 255) throw TypeError("Alphabet too long");
                for (var t = new Uint8Array(256), r = 0; r < t.length; r++) t[r] = 255;
                for (var n = 0; n < e.length; n++) {
                    var i = e.charAt(n),
                        o = i.charCodeAt(0);
                    if (255 !== t[o]) throw TypeError(i + " is ambiguous");
                    t[o] = n
                }
                var a = e.length,
                    s = e.charAt(0),
                    u = Math.log(a) / Math.log(256),
                    l = Math.log(256) / Math.log(a);

                function c(e) {
                    if ("string" != typeof e) throw TypeError("Expected String");
                    if (0 === e.length) return new Uint8Array;
                    for (var r = 0, n = 0, i = 0; e[r] === s;) n++, r++;
                    for (var o = (e.length - r) * u + 1 >>> 0, l = new Uint8Array(o); e[r];) {
                        var c = t[e.charCodeAt(r)];
                        if (255 === c) return;
                        for (var f = 0, p = o - 1;
                            (0 !== c || f < i) && -1 !== p; p--, f++) c += a * l[p] >>> 0, l[p] = c % 256 >>> 0, c = c / 256 >>> 0;
                        if (0 !== c) throw Error("Non-zero carry");
                        i = f, r++
                    }
                    for (var h = o - i; h !== o && 0 === l[h];) h++;
                    for (var d = new Uint8Array(n + (o - h)), y = n; h !== o;) d[y++] = l[h++];
                    return d
                }
                return {
                    encode: function(t) {
                        if (t instanceof Uint8Array || (ArrayBuffer.isView(t) ? t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : Array.isArray(t) && (t = Uint8Array.from(t))), !(t instanceof Uint8Array)) throw TypeError("Expected Uint8Array");
                        if (0 === t.length) return "";
                        for (var r = 0, n = 0, i = 0, o = t.length; i !== o && 0 === t[i];) i++, r++;
                        for (var u = (o - i) * l + 1 >>> 0, c = new Uint8Array(u); i !== o;) {
                            for (var f = t[i], p = 0, h = u - 1;
                                (0 !== f || p < n) && -1 !== h; h--, p++) f += 256 * c[h] >>> 0, c[h] = f % a >>> 0, f = f / a >>> 0;
                            if (0 !== f) throw Error("Non-zero carry");
                            n = p, i++
                        }
                        for (var d = u - n; d !== u && 0 === c[d];) d++;
                        for (var y = s.repeat(r); d < u; ++d) y += e.charAt(c[d]);
                        return y
                    },
                    decodeUnsafe: c,
                    decode: function(e) {
                        var t = c(e);
                        if (t) return t;
                        throw Error("Non-base" + a + " character")
                    }
                }
            }
        },
        57663: function(e, t, r) {
            let n = r(10146);
            e.exports = n("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")
        },
        24033: function(e, t, r) {
            e.exports = r(50094)
        },
        58731: function(e, t, r) {
            "use strict";
            r.d(t, {
                ZP: function() {
                    return m
                }
            });
            var n = r(68463),
                i = r(43154),
                o = r(2265),
                a = r(54887),
                s = {
                    disabled: !1
                },
                u = r(54439),
                l = "unmounted",
                c = "exited",
                f = "entering",
                p = "entered",
                h = "exiting",
                d = function(e) {
                    function t(t, r) {
                        n = e.call(this, t, r) || this;
                        var n, i, o = r && !r.isMounting ? t.enter : t.appear;
                        return n.appearStatus = null, t.in ? o ? (i = c, n.appearStatus = f) : i = p : i = t.unmountOnExit || t.mountOnEnter ? l : c, n.state = {
                            status: i
                        }, n.nextCallback = null, n
                    }(0, i.Z)(t, e), t.getDerivedStateFromProps = function(e, t) {
                        return e.in && t.status === l ? {
                            status: c
                        } : null
                    };
                    var r = t.prototype;
                    return r.componentDidMount = function() {
                        this.updateStatus(!0, this.appearStatus)
                    }, r.componentDidUpdate = function(e) {
                        var t = null;
                        if (e !== this.props) {
                            var r = this.state.status;
                            this.props.in ? r !== f && r !== p && (t = f) : (r === f || r === p) && (t = h)
                        }
                        this.updateStatus(!1, t)
                    }, r.componentWillUnmount = function() {
                        this.cancelNextCallback()
                    }, r.getTimeouts = function() {
                        var e, t, r, n = this.props.timeout;
                        return e = t = r = n, null != n && "number" != typeof n && (e = n.exit, t = n.enter, r = void 0 !== n.appear ? n.appear : t), {
                            exit: e,
                            enter: t,
                            appear: r
                        }
                    }, r.updateStatus = function(e, t) {
                        if (void 0 === e && (e = !1), null !== t) {
                            if (this.cancelNextCallback(), t === f) {
                                if (this.props.unmountOnExit || this.props.mountOnEnter) {
                                    var r = this.props.nodeRef ? this.props.nodeRef.current : a.findDOMNode(this);
                                    r && r.scrollTop
                                }
                                this.performEnter(e)
                            } else this.performExit()
                        } else this.props.unmountOnExit && this.state.status === c && this.setState({
                            status: l
                        })
                    }, r.performEnter = function(e) {
                        var t = this,
                            r = this.props.enter,
                            n = this.context ? this.context.isMounting : e,
                            i = this.props.nodeRef ? [n] : [a.findDOMNode(this), n],
                            o = i[0],
                            u = i[1],
                            l = this.getTimeouts(),
                            c = n ? l.appear : l.enter;
                        if (!e && !r || s.disabled) {
                            this.safeSetState({
                                status: p
                            }, function() {
                                t.props.onEntered(o)
                            });
                            return
                        }
                        this.props.onEnter(o, u), this.safeSetState({
                            status: f
                        }, function() {
                            t.props.onEntering(o, u), t.onTransitionEnd(c, function() {
                                t.safeSetState({
                                    status: p
                                }, function() {
                                    t.props.onEntered(o, u)
                                })
                            })
                        })
                    }, r.performExit = function() {
                        var e = this,
                            t = this.props.exit,
                            r = this.getTimeouts(),
                            n = this.props.nodeRef ? void 0 : a.findDOMNode(this);
                        if (!t || s.disabled) {
                            this.safeSetState({
                                status: c
                            }, function() {
                                e.props.onExited(n)
                            });
                            return
                        }
                        this.props.onExit(n), this.safeSetState({
                            status: h
                        }, function() {
                            e.props.onExiting(n), e.onTransitionEnd(r.exit, function() {
                                e.safeSetState({
                                    status: c
                                }, function() {
                                    e.props.onExited(n)
                                })
                            })
                        })
                    }, r.cancelNextCallback = function() {
                        null !== this.nextCallback && (this.nextCallback.cancel(), this.nextCallback = null)
                    }, r.safeSetState = function(e, t) {
                        t = this.setNextCallback(t), this.setState(e, t)
                    }, r.setNextCallback = function(e) {
                        var t = this,
                            r = !0;
                        return this.nextCallback = function(n) {
                            r && (r = !1, t.nextCallback = null, e(n))
                        }, this.nextCallback.cancel = function() {
                            r = !1
                        }, this.nextCallback
                    }, r.onTransitionEnd = function(e, t) {
                        this.setNextCallback(t);
                        var r = this.props.nodeRef ? this.props.nodeRef.current : a.findDOMNode(this),
                            n = null == e && !this.props.addEndListener;
                        if (!r || n) {
                            setTimeout(this.nextCallback, 0);
                            return
                        }
                        if (this.props.addEndListener) {
                            var i = this.props.nodeRef ? [this.nextCallback] : [r, this.nextCallback],
                                o = i[0],
                                s = i[1];
                            this.props.addEndListener(o, s)
                        }
                        null != e && setTimeout(this.nextCallback, e)
                    }, r.render = function() {
                        var e = this.state.status;
                        if (e === l) return null;
                        var t = this.props,
                            r = t.children,
                            i = (t.in, t.mountOnEnter, t.unmountOnExit, t.appear, t.enter, t.exit, t.timeout, t.addEndListener, t.onEnter, t.onEntering, t.onEntered, t.onExit, t.onExiting, t.onExited, t.nodeRef, (0, n.Z)(t, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]));
                        return o.createElement(u.Z.Provider, {
                            value: null
                        }, "function" == typeof r ? r(e, i) : o.cloneElement(o.Children.only(r), i))
                    }, t
                }(o.Component);

            function y() {}
            d.contextType = u.Z, d.propTypes = {}, d.defaultProps = { in: !1,
                mountOnEnter: !1,
                unmountOnExit: !1,
                appear: !1,
                enter: !0,
                exit: !0,
                onEnter: y,
                onEntering: y,
                onEntered: y,
                onExit: y,
                onExiting: y,
                onExited: y
            }, d.UNMOUNTED = l, d.EXITED = c, d.ENTERING = f, d.ENTERED = p, d.EXITING = h;
            var m = d
        },
        54439: function(e, t, r) {
            "use strict";
            var n = r(2265);
            t.Z = n.createContext(null)
        },
        37673: function(e, t) {
            "use strict";
            /**
             * @license React
             * react.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var r = Symbol.for("react.element"),
                n = (Symbol.for("react.portal"), Symbol.for("react.fragment"), Symbol.for("react.strict_mode"), Symbol.for("react.profiler"), Symbol.for("react.provider"), Symbol.for("react.context"), Symbol.for("react.forward_ref"), Symbol.for("react.suspense"), Symbol.for("react.memo"), Symbol.for("react.lazy"), {
                    isMounted: function() {
                        return !1
                    },
                    enqueueForceUpdate: function() {},
                    enqueueReplaceState: function() {},
                    enqueueSetState: function() {}
                }),
                i = Object.assign,
                o = {};

            function a(e, t, r) {
                this.props = e, this.context = t, this.refs = o, this.updater = r || n
            }

            function s() {}

            function u(e, t, r) {
                this.props = e, this.context = t, this.refs = o, this.updater = r || n
            }
            a.prototype.isReactComponent = {}, a.prototype.setState = function(e, t) {
                if ("object" != typeof e && "function" != typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                this.updater.enqueueSetState(this, e, t, "setState")
            }, a.prototype.forceUpdate = function(e) {
                this.updater.enqueueForceUpdate(this, e, "forceUpdate")
            }, s.prototype = a.prototype;
            var l = u.prototype = new s;
            l.constructor = u, i(l, a.prototype), l.isPureReactComponent = !0;
            var c = Object.prototype.hasOwnProperty,
                f = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };
            t.createElement = function(e, t, n) {
                var i, o = {},
                    a = null,
                    s = null;
                if (null != t)
                    for (i in void 0 !== t.ref && (s = t.ref), void 0 !== t.key && (a = "" + t.key), t) c.call(t, i) && !f.hasOwnProperty(i) && (o[i] = t[i]);
                var u = arguments.length - 2;
                if (1 === u) o.children = n;
                else if (1 < u) {
                    for (var l = Array(u), p = 0; p < u; p++) l[p] = arguments[p + 2];
                    o.children = l
                }
                if (e && e.defaultProps)
                    for (i in u = e.defaultProps) void 0 === o[i] && (o[i] = u[i]);
                return {
                    $$typeof: r,
                    type: e,
                    key: a,
                    ref: s,
                    props: o,
                    _owner: null
                }
            }
        },
        90952: function(e, t, r) {
            "use strict";
            e.exports = r(37673)
        },
        92336: function(e, t, r) { /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
            var n = r(67133),
                i = n.Buffer;

            function o(e, t) {
                for (var r in e) t[r] = e[r]
            }

            function a(e, t, r) {
                return i(e, t, r)
            }
            i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? e.exports = n : (o(n, t), t.Buffer = a), a.prototype = Object.create(i.prototype), o(i, a), a.from = function(e, t, r) {
                if ("number" == typeof e) throw TypeError("Argument must not be a number");
                return i(e, t, r)
            }, a.alloc = function(e, t, r) {
                if ("number" != typeof e) throw TypeError("Argument must be a number");
                var n = i(e);
                return void 0 !== t ? "string" == typeof r ? n.fill(t, r) : n.fill(t) : n.fill(0), n
            }, a.allocUnsafe = function(e) {
                if ("number" != typeof e) throw TypeError("Argument must be a number");
                return i(e)
            }, a.allocUnsafeSlow = function(e) {
                if ("number" != typeof e) throw TypeError("Argument must be a number");
                return n.SlowBuffer(e)
            }
        },
        15433: function(e, t, r) {
            var n = r(48462);

            function i(e) {
                return e.name || e.toString().match(/function (.*?)\s*\(/)[1]
            }

            function o(e) {
                return n.Nil(e) ? "" : i(e.constructor)
            }

            function a(e, t) {
                Error.captureStackTrace && Error.captureStackTrace(e, t)
            }

            function s(e) {
                return n.Function(e) ? e.toJSON ? e.toJSON() : i(e) : n.Array(e) ? "Array" : e && n.Object(e) ? "Object" : void 0 !== e ? e : ""
            }

            function u(e, t, r) {
                var i = n.Function(t) ? "" : n.String(t) ? JSON.stringify(t) : t && n.Object(t) ? "" : t;
                return "Expected " + s(e) + ", got" + ("" !== r ? " " + r : "") + ("" !== i ? " " + i : "")
            }

            function l(e, t, r) {
                r = r || o(t), this.message = u(e, t, r), a(this, l), this.__type = e, this.__value = t, this.__valueTypeName = r
            }

            function c(e, t, r, n, i) {
                if (e) {
                    var c, f;
                    i = i || o(n), this.message = (c = i, f = '" of type ', "key" === r && (f = '" with key type '), u('property "' + s(t) + f + s(e), n, c))
                } else this.message = 'Unexpected property "' + t + '"';
                a(this, l), this.__label = r, this.__property = t, this.__type = e, this.__value = n, this.__valueTypeName = i
            }
            l.prototype = Object.create(Error.prototype), l.prototype.constructor = l, c.prototype = Object.create(Error.prototype), c.prototype.constructor = l, e.exports = {
                TfTypeError: l,
                TfPropertyTypeError: c,
                tfCustomError: function(e, t) {
                    return new l(e, {}, t)
                },
                tfSubError: function(e, t, r) {
                    return e instanceof c ? (t = t + "." + e.__property, e = new c(e.__type, t, e.__label, e.__value, e.__valueTypeName)) : e instanceof l && (e = new c(e.__type, t, r, e.__value, e.__valueTypeName)), a(e), e
                },
                tfJSON: s,
                getValueTypeName: o
            }
        },
        80299: function(e, t, r) {
            var n = r(67133).Buffer,
                i = r(48462),
                o = r(15433);

            function a(e) {
                return n.isBuffer(e)
            }

            function s(e) {
                return "string" == typeof e && /^([0-9a-f]{2})+$/i.test(e)
            }

            function u(e, t) {
                var r = e.toJSON();

                function n(n) {
                    if (!e(n)) return !1;
                    if (n.length === t) return !0;
                    throw o.tfCustomError(r + "(Length: " + t + ")", r + "(Length: " + n.length + ")")
                }
                return n.toJSON = function() {
                    return r
                }, n
            }
            var l = u.bind(null, i.Array),
                c = u.bind(null, a),
                f = u.bind(null, s),
                p = {
                    ArrayN: l,
                    Buffer: a,
                    BufferN: c,
                    Finite: function(e) {
                        return "number" == typeof e && isFinite(e)
                    },
                    Hex: s,
                    HexN: f,
                    Int8: function(e) {
                        return e << 24 >> 24 === e
                    },
                    Int16: function(e) {
                        return e << 16 >> 16 === e
                    },
                    Int32: function(e) {
                        return (0 | e) === e
                    },
                    Int53: function(e) {
                        return "number" == typeof e && e >= -9007199254740991 && e <= 9007199254740991 && Math.floor(e) === e
                    },
                    Range: function(e, t, r) {
                        function n(n, i) {
                            return r(n, i) && n > e && n < t
                        }
                        return r = r || i.Number, n.toJSON = function() {
                            return `${r.toJSON()} between [${e}, ${t}]`
                        }, n
                    },
                    StringN: u.bind(null, i.String),
                    UInt8: function(e) {
                        return (255 & e) === e
                    },
                    UInt16: function(e) {
                        return (65535 & e) === e
                    },
                    UInt32: function(e) {
                        return e >>> 0 === e
                    },
                    UInt53: function(e) {
                        return "number" == typeof e && e >= 0 && e <= 9007199254740991 && Math.floor(e) === e
                    }
                };
            for (var h in p) p[h].toJSON = (function(e) {
                return e
            }).bind(null, h);
            e.exports = p
        },
        24594: function(e, t, r) {
            var n = r(15433),
                i = r(48462),
                o = n.tfJSON,
                a = n.TfTypeError,
                s = n.TfPropertyTypeError,
                u = n.tfSubError,
                l = n.getValueTypeName,
                c = {
                    arrayOf: function(e, t) {
                        function r(r, n) {
                            return !(!i.Array(r) || i.Nil(r)) && (void 0 === t.minLength || !(r.length < t.minLength)) && (void 0 === t.maxLength || !(r.length > t.maxLength)) && (void 0 === t.length || r.length === t.length) && r.every(function(t, r) {
                                try {
                                    return p(e, t, n)
                                } catch (e) {
                                    throw u(e, r)
                                }
                            })
                        }
                        return e = f(e), t = t || {}, r.toJSON = function() {
                            var r = "[" + o(e) + "]";
                            return void 0 !== t.length ? r += "{" + t.length + "}" : (void 0 !== t.minLength || void 0 !== t.maxLength) && (r += "{" + (void 0 === t.minLength ? 0 : t.minLength) + "," + (void 0 === t.maxLength ? 1 / 0 : t.maxLength) + "}"), r
                        }, r
                    },
                    maybe: function e(t) {
                        function r(r, n) {
                            return i.Nil(r) || t(r, n, e)
                        }
                        return t = f(t), r.toJSON = function() {
                            return "?" + o(t)
                        }, r
                    },
                    map: function(e, t) {
                        function r(r, n) {
                            if (!i.Object(r) || i.Nil(r)) return !1;
                            for (var o in r) {
                                try {
                                    t && p(t, o, n)
                                } catch (e) {
                                    throw u(e, o, "key")
                                }
                                try {
                                    var a = r[o];
                                    p(e, a, n)
                                } catch (e) {
                                    throw u(e, o)
                                }
                            }
                            return !0
                        }
                        return e = f(e), t && (t = f(t)), t ? r.toJSON = function() {
                            return "{" + o(t) + ": " + o(e) + "}"
                        } : r.toJSON = function() {
                            return "{" + o(e) + "}"
                        }, r
                    },
                    object: function(e) {
                        var t = {};
                        for (var r in e) t[r] = f(e[r]);

                        function n(e, r) {
                            if (!i.Object(e) || i.Nil(e)) return !1;
                            try {
                                for (n in t) {
                                    var n, o = t[n],
                                        a = e[n];
                                    p(o, a, r)
                                }
                            } catch (e) {
                                throw u(e, n)
                            }
                            if (r) {
                                for (n in e)
                                    if (!t[n]) throw new s(void 0, n)
                            }
                            return !0
                        }
                        return n.toJSON = function() {
                            return o(t)
                        }, n
                    },
                    anyOf: function() {
                        var e = [].slice.call(arguments).map(f);

                        function t(t, r) {
                            return e.some(function(e) {
                                try {
                                    return p(e, t, r)
                                } catch (e) {
                                    return !1
                                }
                            })
                        }
                        return t.toJSON = function() {
                            return e.map(o).join("|")
                        }, t
                    },
                    allOf: function() {
                        var e = [].slice.call(arguments).map(f);

                        function t(t, r) {
                            return e.every(function(e) {
                                try {
                                    return p(e, t, r)
                                } catch (e) {
                                    return !1
                                }
                            })
                        }
                        return t.toJSON = function() {
                            return e.map(o).join(" & ")
                        }, t
                    },
                    quacksLike: function(e) {
                        function t(t) {
                            return e === l(t)
                        }
                        return t.toJSON = function() {
                            return e
                        }, t
                    },
                    tuple: function() {
                        var e = [].slice.call(arguments).map(f);

                        function t(t, r) {
                            return !(i.Nil(t) || i.Nil(t.length)) && (!r || t.length === e.length) && e.every(function(e, n) {
                                try {
                                    return p(e, t[n], r)
                                } catch (e) {
                                    throw u(e, n)
                                }
                            })
                        }
                        return t.toJSON = function() {
                            return "(" + e.map(o).join(", ") + ")"
                        }, t
                    },
                    value: function(e) {
                        function t(t) {
                            return t === e
                        }
                        return t.toJSON = function() {
                            return e
                        }, t
                    }
                };

            function f(e) {
                if (i.String(e)) return "?" === e[0] ? c.maybe(e.slice(1)) : i[e] || c.quacksLike(e);
                if (e && i.Object(e)) {
                    if (i.Array(e)) {
                        if (1 !== e.length) throw TypeError("Expected compile() parameter of type Array of length 1");
                        return c.arrayOf(e[0])
                    }
                    return c.object(e)
                }
                return i.Function(e) ? e : c.value(e)
            }

            function p(e, t, r, n) {
                if (i.Function(e)) {
                    if (e(t, r)) return !0;
                    throw new a(n || e, t)
                }
                return p(f(e), t, r)
            }
            for (var h in c.oneOf = c.anyOf, i) p[h] = i[h];
            for (h in c) p[h] = c[h];
            var d = r(80299);
            for (h in d) p[h] = d[h];
            p.compile = f, p.TfTypeError = a, p.TfPropertyTypeError = s, e.exports = p
        },
        48462: function(e) {
            var t = {
                Array: function(e) {
                    return null != e && e.constructor === Array
                },
                Boolean: function(e) {
                    return "boolean" == typeof e
                },
                Function: function(e) {
                    return "function" == typeof e
                },
                Nil: function(e) {
                    return null == e
                },
                Number: function(e) {
                    return "number" == typeof e
                },
                Object: function(e) {
                    return "object" == typeof e
                },
                String: function(e) {
                    return "string" == typeof e
                },
                "": function() {
                    return !0
                }
            };
            for (var r in t.Null = t.Nil, t) t[r].toJSON = (function(e) {
                return e
            }).bind(null, r);
            e.exports = t
        },
        91227: function(e, t, r) {
            "use strict";
            var n = r(92336).Buffer;

            function i(e) {
                if (e < 0 || e > 9007199254740991 || e % 1 != 0) throw RangeError("value out of range")
            }

            function o(e) {
                return i(e), e < 253 ? 1 : e <= 65535 ? 3 : e <= 4294967295 ? 5 : 9
            }
            e.exports = {
                encode: function e(t, r, a) {
                    if (i(t), r || (r = n.allocUnsafe(o(t))), !n.isBuffer(r)) throw TypeError("buffer must be a Buffer instance");
                    return a || (a = 0), t < 253 ? (r.writeUInt8(t, a), e.bytes = 1) : t <= 65535 ? (r.writeUInt8(253, a), r.writeUInt16LE(t, a + 1), e.bytes = 3) : t <= 4294967295 ? (r.writeUInt8(254, a), r.writeUInt32LE(t, a + 1), e.bytes = 5) : (r.writeUInt8(255, a), r.writeUInt32LE(t >>> 0, a + 1), r.writeUInt32LE(t / 4294967296 | 0, a + 5), e.bytes = 9), r
                },
                decode: function e(t, r) {
                    if (!n.isBuffer(t)) throw TypeError("buffer must be a Buffer instance");
                    r || (r = 0);
                    var o = t.readUInt8(r);
                    if (o < 253) return e.bytes = 1, o;
                    if (253 === o) return e.bytes = 3, t.readUInt16LE(r + 1);
                    if (254 === o) return e.bytes = 5, t.readUInt32LE(r + 1);
                    e.bytes = 9;
                    var a = t.readUInt32LE(r + 1),
                        s = 4294967296 * t.readUInt32LE(r + 5) + a;
                    return i(s), s
                },
                encodingLength: o
            }
        },
        6093: function(e) {
            e.exports = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        57042: function(e, t, r) {
            "use strict";
            t.Z = function() {
                for (var e, t, r = 0, n = ""; r < arguments.length;)(e = arguments[r++]) && (t = function e(t) {
                    var r, n, i = "";
                    if ("string" == typeof t || "number" == typeof t) i += t;
                    else if ("object" == typeof t) {
                        if (Array.isArray(t))
                            for (r = 0; r < t.length; r++) t[r] && (n = e(t[r])) && (i && (i += " "), i += n);
                        else
                            for (r in t) t[r] && (i && (i += " "), i += r)
                    }
                    return i
                }(e)) && (n && (n += " "), n += t);
                return n
            }
        },
        43154: function(e, t, r) {
            "use strict";

            function n(e, t) {
                return (n = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function i(e, t) {
                e.prototype = Object.create(t.prototype), e.prototype.constructor = e, n(e, t)
            }
            r.d(t, {
                Z: function() {
                    return i
                }
            })
        },
        68463: function(e, t, r) {
            "use strict";

            function n(e, t) {
                if (null == e) return {};
                var r, n, i = {},
                    o = Object.keys(e);
                for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
                return i
            }
            r.d(t, {
                Z: function() {
                    return n
                }
            })
        }
    }
]);