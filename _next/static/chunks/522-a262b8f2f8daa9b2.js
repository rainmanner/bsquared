(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [522], {
        28874: function(e, t, r) {
            "use strict";
            r.d(t, {
                ZP: function() {
                    return C
                }
            });
            var i = r(20791),
                n = r(13428),
                s = r(2265),
                a = r(57042),
                o = r(65425),
                l = r(43381),
                d = r(95600),
                u = r(35843),
                c = r(87927),
                p = r(41101);
            let f = s.createContext();
            var h = r(26520),
                m = r(25702);

            function v(e) {
                return (0, m.Z)("MuiGrid", e)
            }
            let g = ["auto", !0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                y = (0, h.Z)("MuiGrid", ["root", "container", "item", "zeroMinWidth", ...[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(e => `spacing-xs-${e}`), ...["column-reverse", "column", "row-reverse", "row"].map(e => `direction-xs-${e}`), ...["nowrap", "wrap-reverse", "wrap"].map(e => `wrap-xs-${e}`), ...g.map(e => `grid-xs-${e}`), ...g.map(e => `grid-sm-${e}`), ...g.map(e => `grid-md-${e}`), ...g.map(e => `grid-lg-${e}`), ...g.map(e => `grid-xl-${e}`)]);
            var b = r(57437);
            let w = ["className", "columns", "columnSpacing", "component", "container", "direction", "item", "rowSpacing", "spacing", "wrap", "zeroMinWidth"];

            function S(e) {
                let t = parseFloat(e);
                return `${t}${String(e).replace(String(t),"")||"px"}`
            }

            function x({
                breakpoints: e,
                values: t
            }) {
                let r = "";
                Object.keys(t).forEach(e => {
                    "" === r && 0 !== t[e] && (r = e)
                });
                let i = Object.keys(e).sort((t, r) => e[t] - e[r]);
                return i.slice(0, i.indexOf(r))
            }
            let T = (0, u.ZP)("div", {
                    name: "MuiGrid",
                    slot: "Root",
                    overridesResolver: (e, t) => {
                        let {
                            ownerState: r
                        } = e, {
                            container: i,
                            direction: n,
                            item: s,
                            spacing: a,
                            wrap: o,
                            zeroMinWidth: l,
                            breakpoints: d
                        } = r, u = [];
                        i && (u = function(e, t, r = {}) {
                            if (!e || e <= 0) return [];
                            if ("string" == typeof e && !Number.isNaN(Number(e)) || "number" == typeof e) return [r[`spacing-xs-${String(e)}`]];
                            let i = [];
                            return t.forEach(t => {
                                let n = e[t];
                                Number(n) > 0 && i.push(r[`spacing-${t}-${String(n)}`])
                            }), i
                        }(a, d, t));
                        let c = [];
                        return d.forEach(e => {
                            let i = r[e];
                            i && c.push(t[`grid-${e}-${String(i)}`])
                        }), [t.root, i && t.container, s && t.item, l && t.zeroMinWidth, ...u, "row" !== n && t[`direction-xs-${String(n)}`], "wrap" !== o && t[`wrap-xs-${String(o)}`], ...c]
                    }
                })(({
                    ownerState: e
                }) => (0, n.Z)({
                    boxSizing: "border-box"
                }, e.container && {
                    display: "flex",
                    flexWrap: "wrap",
                    width: "100%"
                }, e.item && {
                    margin: 0
                }, e.zeroMinWidth && {
                    minWidth: 0
                }, "wrap" !== e.wrap && {
                    flexWrap: e.wrap
                }), function({
                    theme: e,
                    ownerState: t
                }) {
                    let r = (0, o.P$)({
                        values: t.direction,
                        breakpoints: e.breakpoints.values
                    });
                    return (0, o.k9)({
                        theme: e
                    }, r, e => {
                        let t = {
                            flexDirection: e
                        };
                        return 0 === e.indexOf("column") && (t[`& > .${y.item}`] = {
                            maxWidth: "none"
                        }), t
                    })
                }, function({
                    theme: e,
                    ownerState: t
                }) {
                    let {
                        container: r,
                        rowSpacing: i
                    } = t, n = {};
                    if (r && 0 !== i) {
                        let t;
                        let r = (0, o.P$)({
                            values: i,
                            breakpoints: e.breakpoints.values
                        });
                        "object" == typeof r && (t = x({
                            breakpoints: e.breakpoints.values,
                            values: r
                        })), n = (0, o.k9)({
                            theme: e
                        }, r, (r, i) => {
                            var n;
                            let s = e.spacing(r);
                            return "0px" !== s ? {
                                marginTop: `-${S(s)}`,
                                [`& > .${y.item}`]: {
                                    paddingTop: S(s)
                                }
                            } : null != (n = t) && n.includes(i) ? {} : {
                                marginTop: 0,
                                [`& > .${y.item}`]: {
                                    paddingTop: 0
                                }
                            }
                        })
                    }
                    return n
                }, function({
                    theme: e,
                    ownerState: t
                }) {
                    let {
                        container: r,
                        columnSpacing: i
                    } = t, n = {};
                    if (r && 0 !== i) {
                        let t;
                        let r = (0, o.P$)({
                            values: i,
                            breakpoints: e.breakpoints.values
                        });
                        "object" == typeof r && (t = x({
                            breakpoints: e.breakpoints.values,
                            values: r
                        })), n = (0, o.k9)({
                            theme: e
                        }, r, (r, i) => {
                            var n;
                            let s = e.spacing(r);
                            return "0px" !== s ? {
                                width: `calc(100% + ${S(s)})`,
                                marginLeft: `-${S(s)}`,
                                [`& > .${y.item}`]: {
                                    paddingLeft: S(s)
                                }
                            } : null != (n = t) && n.includes(i) ? {} : {
                                width: "100%",
                                marginLeft: 0,
                                [`& > .${y.item}`]: {
                                    paddingLeft: 0
                                }
                            }
                        })
                    }
                    return n
                }, function({
                    theme: e,
                    ownerState: t
                }) {
                    let r;
                    return e.breakpoints.keys.reduce((i, s) => {
                        let a = {};
                        if (t[s] && (r = t[s]), !r) return i;
                        if (!0 === r) a = {
                            flexBasis: 0,
                            flexGrow: 1,
                            maxWidth: "100%"
                        };
                        else if ("auto" === r) a = {
                            flexBasis: "auto",
                            flexGrow: 0,
                            flexShrink: 0,
                            maxWidth: "none",
                            width: "auto"
                        };
                        else {
                            let l = (0, o.P$)({
                                    values: t.columns,
                                    breakpoints: e.breakpoints.values
                                }),
                                d = "object" == typeof l ? l[s] : l;
                            if (null == d) return i;
                            let u = `${Math.round(r/d*1e8)/1e6}%`,
                                c = {};
                            if (t.container && t.item && 0 !== t.columnSpacing) {
                                let r = e.spacing(t.columnSpacing);
                                if ("0px" !== r) {
                                    let e = `calc(${u} + ${S(r)})`;
                                    c = {
                                        flexBasis: e,
                                        maxWidth: e
                                    }
                                }
                            }
                            a = (0, n.Z)({
                                flexBasis: u,
                                flexGrow: 0,
                                maxWidth: u
                            }, c)
                        }
                        return 0 === e.breakpoints.values[s] ? Object.assign(i, a) : i[e.breakpoints.up(s)] = a, i
                    }, {})
                }),
                E = e => {
                    let {
                        classes: t,
                        container: r,
                        direction: i,
                        item: n,
                        spacing: s,
                        wrap: a,
                        zeroMinWidth: o,
                        breakpoints: l
                    } = e, u = [];
                    r && (u = function(e, t) {
                        if (!e || e <= 0) return [];
                        if ("string" == typeof e && !Number.isNaN(Number(e)) || "number" == typeof e) return [`spacing-xs-${String(e)}`];
                        let r = [];
                        return t.forEach(t => {
                            let i = e[t];
                            if (Number(i) > 0) {
                                let e = `spacing-${t}-${String(i)}`;
                                r.push(e)
                            }
                        }), r
                    }(s, l));
                    let c = [];
                    l.forEach(t => {
                        let r = e[t];
                        r && c.push(`grid-${t}-${String(r)}`)
                    });
                    let p = {
                        root: ["root", r && "container", n && "item", o && "zeroMinWidth", ...u, "row" !== i && `direction-xs-${String(i)}`, "wrap" !== a && `wrap-xs-${String(a)}`, ...c]
                    };
                    return (0, d.Z)(p, v, t)
                },
                _ = s.forwardRef(function(e, t) {
                    let r = (0, c.Z)({
                            props: e,
                            name: "MuiGrid"
                        }),
                        {
                            breakpoints: o
                        } = (0, p.Z)(),
                        d = (0, l.Z)(r),
                        {
                            className: u,
                            columns: h,
                            columnSpacing: m,
                            component: v = "div",
                            container: g = !1,
                            direction: y = "row",
                            item: S = !1,
                            rowSpacing: x,
                            spacing: _ = 0,
                            wrap: C = "wrap",
                            zeroMinWidth: P = !1
                        } = d,
                        O = (0, i.Z)(d, w),
                        M = x || _,
                        k = m || _,
                        A = s.useContext(f),
                        j = g ? h || 12 : A,
                        L = {},
                        I = (0, n.Z)({}, O);
                    o.keys.forEach(e => {
                        null != O[e] && (L[e] = O[e], delete I[e])
                    });
                    let z = (0, n.Z)({}, d, {
                            columns: j,
                            container: g,
                            direction: y,
                            item: S,
                            rowSpacing: M,
                            columnSpacing: k,
                            wrap: C,
                            zeroMinWidth: P,
                            spacing: _
                        }, L, {
                            breakpoints: o.keys
                        }),
                        N = E(z);
                    return (0, b.jsx)(f.Provider, {
                        value: j,
                        children: (0, b.jsx)(T, (0, n.Z)({
                            ownerState: z,
                            className: (0, a.Z)(N.root, u),
                            as: v,
                            ref: t
                        }, I))
                    })
                });
            var C = _
        },
        90413: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "Image", {
                enumerable: !0,
                get: function() {
                    return Image
                }
            });
            let i = r(21024),
                n = r(68533),
                s = n._(r(2265)),
                a = i._(r(54887)),
                o = i._(r(35793)),
                l = r(7929),
                d = r(17727),
                u = r(47327);
            r(92637);
            let c = r(36304),
                p = i._(r(69950)),
                f = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image/",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !0
                };

            function h(e, t, r, i, n, s) {
                let a = null == e ? void 0 : e.src;
                if (!e || e["data-loaded-src"] === a) return;
                e["data-loaded-src"] = a;
                let o = "decode" in e ? e.decode() : Promise.resolve();
                o.catch(() => {}).then(() => {
                    if (e.parentElement && e.isConnected) {
                        if ("empty" !== t && n(!0), null == r ? void 0 : r.current) {
                            let t = new Event("load");
                            Object.defineProperty(t, "target", {
                                writable: !1,
                                value: e
                            });
                            let i = !1,
                                n = !1;
                            r.current({ ...t,
                                nativeEvent: t,
                                currentTarget: e,
                                target: e,
                                isDefaultPrevented: () => i,
                                isPropagationStopped: () => n,
                                persist: () => {},
                                preventDefault: () => {
                                    i = !0, t.preventDefault()
                                },
                                stopPropagation: () => {
                                    n = !0, t.stopPropagation()
                                }
                            })
                        }(null == i ? void 0 : i.current) && i.current(e)
                    }
                })
            }

            function m(e) {
                let [t, r] = s.version.split(".", 2), i = parseInt(t, 10), n = parseInt(r, 10);
                return i > 18 || 18 === i && n >= 3 ? {
                    fetchPriority: e
                } : {
                    fetchpriority: e
                }
            }
            let v = (0, s.forwardRef)((e, t) => {
                let {
                    src: r,
                    srcSet: i,
                    sizes: n,
                    height: a,
                    width: o,
                    decoding: l,
                    className: d,
                    style: u,
                    fetchPriority: c,
                    placeholder: p,
                    loading: f,
                    unoptimized: v,
                    fill: g,
                    onLoadRef: y,
                    onLoadingCompleteRef: b,
                    setBlurComplete: w,
                    setShowAltText: S,
                    onLoad: x,
                    onError: T,
                    ...E
                } = e;
                return s.default.createElement("img", { ...E,
                    ...m(c),
                    loading: f,
                    width: o,
                    height: a,
                    decoding: l,
                    "data-nimg": g ? "fill" : "1",
                    className: d,
                    style: u,
                    sizes: n,
                    srcSet: i,
                    src: r,
                    ref: (0, s.useCallback)(e => {
                        t && ("function" == typeof t ? t(e) : "object" == typeof t && (t.current = e)), e && (T && (e.src = e.src), e.complete && h(e, p, y, b, w, v))
                    }, [r, p, y, b, w, T, v, t]),
                    onLoad: e => {
                        let t = e.currentTarget;
                        h(t, p, y, b, w, v)
                    },
                    onError: e => {
                        S(!0), "empty" !== p && w(!0), T && T(e)
                    }
                })
            });

            function g(e) {
                let {
                    isAppRouter: t,
                    imgAttributes: r
                } = e, i = {
                    as: "image",
                    imageSrcSet: r.srcSet,
                    imageSizes: r.sizes,
                    crossOrigin: r.crossOrigin,
                    referrerPolicy: r.referrerPolicy,
                    ...m(r.fetchPriority)
                };
                return t && a.default.preload ? (a.default.preload(r.src, i), null) : s.default.createElement(o.default, null, s.default.createElement("link", {
                    key: "__nimg-" + r.src + r.srcSet + r.sizes,
                    rel: "preload",
                    href: r.srcSet ? void 0 : r.src,
                    ...i
                }))
            }
            let Image = (0, s.forwardRef)((e, t) => {
                let r = (0, s.useContext)(c.RouterContext),
                    i = (0, s.useContext)(u.ImageConfigContext),
                    n = (0, s.useMemo)(() => {
                        let e = f || i || d.imageConfigDefault,
                            t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
                            r = e.deviceSizes.sort((e, t) => e - t);
                        return { ...e,
                            allSizes: t,
                            deviceSizes: r
                        }
                    }, [i]),
                    {
                        onLoad: a,
                        onLoadingComplete: o
                    } = e,
                    h = (0, s.useRef)(a);
                (0, s.useEffect)(() => {
                    h.current = a
                }, [a]);
                let m = (0, s.useRef)(o);
                (0, s.useEffect)(() => {
                    m.current = o
                }, [o]);
                let [y, b] = (0, s.useState)(!1), [w, S] = (0, s.useState)(!1), {
                    props: x,
                    meta: T
                } = (0, l.getImgProps)(e, {
                    defaultLoader: p.default,
                    imgConf: n,
                    blurComplete: y,
                    showAltText: w
                });
                return s.default.createElement(s.default.Fragment, null, s.default.createElement(v, { ...x,
                    unoptimized: T.unoptimized,
                    placeholder: T.placeholder,
                    fill: T.fill,
                    onLoadRef: h,
                    onLoadingCompleteRef: m,
                    setBlurComplete: b,
                    setShowAltText: S,
                    ref: t
                }), T.priority ? s.default.createElement(g, {
                    isAppRouter: !r,
                    imgAttributes: x
                }) : null)
            });
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        28569: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "AmpStateContext", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let i = r(21024),
                n = i._(r(2265)),
                s = n.default.createContext({})
        },
        94472: function(e, t) {
            "use strict";

            function r(e) {
                let {
                    ampFirst: t = !1,
                    hybrid: r = !1,
                    hasQuery: i = !1
                } = void 0 === e ? {} : e;
                return t || r && i
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "isInAmpMode", {
                enumerable: !0,
                get: function() {
                    return r
                }
            })
        },
        7929: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getImgProps", {
                enumerable: !0,
                get: function() {
                    return o
                }
            }), r(92637);
            let i = r(61511),
                n = r(17727);

            function s(e) {
                return void 0 !== e.default
            }

            function a(e) {
                return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
            }

            function o(e, t) {
                var r;
                let o, l, d, {
                        src: u,
                        sizes: c,
                        unoptimized: p = !1,
                        priority: f = !1,
                        loading: h,
                        className: m,
                        quality: v,
                        width: g,
                        height: y,
                        fill: b = !1,
                        style: w,
                        onLoad: S,
                        onLoadingComplete: x,
                        placeholder: T = "empty",
                        blurDataURL: E,
                        fetchPriority: _,
                        layout: C,
                        objectFit: P,
                        objectPosition: O,
                        lazyBoundary: M,
                        lazyRoot: k,
                        ...A
                    } = e,
                    {
                        imgConf: j,
                        showAltText: L,
                        blurComplete: I,
                        defaultLoader: z
                    } = t,
                    N = j || n.imageConfigDefault;
                if ("allSizes" in N) o = N;
                else {
                    let e = [...N.deviceSizes, ...N.imageSizes].sort((e, t) => e - t),
                        t = N.deviceSizes.sort((e, t) => e - t);
                    o = { ...N,
                        allSizes: e,
                        deviceSizes: t
                    }
                }
                let D = A.loader || z;
                delete A.loader, delete A.srcSet;
                let $ = "__next_img_default" in D;
                if ($) {
                    if ("custom" === o.loader) throw Error('Image with src "' + u + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
                } else {
                    let e = D;
                    D = t => {
                        let {
                            config: r,
                            ...i
                        } = t;
                        return e(i)
                    }
                }
                if (C) {
                    "fill" === C && (b = !0);
                    let e = {
                        intrinsic: {
                            maxWidth: "100%",
                            height: "auto"
                        },
                        responsive: {
                            width: "100%",
                            height: "auto"
                        }
                    }[C];
                    e && (w = { ...w,
                        ...e
                    });
                    let t = {
                        responsive: "100vw",
                        fill: "100vw"
                    }[C];
                    t && !c && (c = t)
                }
                let R = "",
                    F = a(g),
                    G = a(y);
                if ("object" == typeof(r = u) && (s(r) || void 0 !== r.src)) {
                    let e = s(u) ? u.default : u;
                    if (!e.src) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(e));
                    if (!e.height || !e.width) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(e));
                    if (l = e.blurWidth, d = e.blurHeight, E = E || e.blurDataURL, R = e.src, !b) {
                        if (F || G) {
                            if (F && !G) {
                                let t = F / e.width;
                                G = Math.round(e.height * t)
                            } else if (!F && G) {
                                let t = G / e.height;
                                F = Math.round(e.width * t)
                            }
                        } else F = e.width, G = e.height
                    }
                }
                let V = !f && ("lazy" === h || void 0 === h);
                (!(u = "string" == typeof u ? u : R) || u.startsWith("data:") || u.startsWith("blob:")) && (p = !0, V = !1), o.unoptimized && (p = !0), $ && u.endsWith(".svg") && !o.dangerouslyAllowSVG && (p = !0), f && (_ = "high");
                let B = a(v),
                    H = Object.assign(b ? {
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        objectFit: P,
                        objectPosition: O
                    } : {}, L ? {} : {
                        color: "transparent"
                    }, w),
                    W = I || "empty" === T ? null : "blur" === T ? 'url("data:image/svg+xml;charset=utf-8,' + (0, i.getImageBlurSvg)({
                        widthInt: F,
                        heightInt: G,
                        blurWidth: l,
                        blurHeight: d,
                        blurDataURL: E || "",
                        objectFit: H.objectFit
                    }) + '")' : 'url("' + T + '")',
                    q = W ? {
                        backgroundSize: H.objectFit || "cover",
                        backgroundPosition: H.objectPosition || "50% 50%",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: W
                    } : {},
                    Y = function(e) {
                        let {
                            config: t,
                            src: r,
                            unoptimized: i,
                            width: n,
                            quality: s,
                            sizes: a,
                            loader: o
                        } = e;
                        if (i) return {
                            src: r,
                            srcSet: void 0,
                            sizes: void 0
                        };
                        let {
                            widths: l,
                            kind: d
                        } = function(e, t, r) {
                            let {
                                deviceSizes: i,
                                allSizes: n
                            } = e;
                            if (r) {
                                let e = /(^|\s)(1?\d?\d)vw/g,
                                    t = [];
                                for (let i; i = e.exec(r); i) t.push(parseInt(i[2]));
                                if (t.length) {
                                    let e = .01 * Math.min(...t);
                                    return {
                                        widths: n.filter(t => t >= i[0] * e),
                                        kind: "w"
                                    }
                                }
                                return {
                                    widths: n,
                                    kind: "w"
                                }
                            }
                            if ("number" != typeof t) return {
                                widths: i,
                                kind: "w"
                            };
                            let s = [...new Set([t, 2 * t].map(e => n.find(t => t >= e) || n[n.length - 1]))];
                            return {
                                widths: s,
                                kind: "x"
                            }
                        }(t, n, a), u = l.length - 1;
                        return {
                            sizes: a || "w" !== d ? a : "100vw",
                            srcSet: l.map((e, i) => o({
                                config: t,
                                src: r,
                                quality: s,
                                width: e
                            }) + " " + ("w" === d ? e : i + 1) + d).join(", "),
                            src: o({
                                config: t,
                                src: r,
                                quality: s,
                                width: l[u]
                            })
                        }
                    }({
                        config: o,
                        src: u,
                        unoptimized: p,
                        width: F,
                        quality: B,
                        sizes: c,
                        loader: D
                    }),
                    U = { ...A,
                        loading: V ? "lazy" : h,
                        fetchPriority: _,
                        width: F,
                        height: G,
                        decoding: "async",
                        className: m,
                        style: { ...H,
                            ...q
                        },
                        sizes: Y.sizes,
                        srcSet: Y.srcSet,
                        src: Y.src
                    },
                    X = {
                        unoptimized: p,
                        priority: f,
                        placeholder: T,
                        fill: b
                    };
                return {
                    props: U,
                    meta: X
                }
            }
        },
        35793: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    defaultHead: function() {
                        return u
                    },
                    default: function() {
                        return h
                    }
                });
            let i = r(21024),
                n = r(68533),
                s = n._(r(2265)),
                a = i._(r(80110)),
                o = r(28569),
                l = r(61852),
                d = r(94472);

            function u(e) {
                void 0 === e && (e = !1);
                let t = [s.default.createElement("meta", {
                    charSet: "utf-8"
                })];
                return e || t.push(s.default.createElement("meta", {
                    name: "viewport",
                    content: "width=device-width"
                })), t
            }

            function c(e, t) {
                return "string" == typeof t || "number" == typeof t ? e : t.type === s.default.Fragment ? e.concat(s.default.Children.toArray(t.props.children).reduce((e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
            }
            r(92637);
            let p = ["name", "httpEquiv", "charSet", "itemProp"];

            function f(e, t) {
                let {
                    inAmpMode: r
                } = t;
                return e.reduce(c, []).reverse().concat(u(r).reverse()).filter(function() {
                    let e = new Set,
                        t = new Set,
                        r = new Set,
                        i = {};
                    return n => {
                        let s = !0,
                            a = !1;
                        if (n.key && "number" != typeof n.key && n.key.indexOf("$") > 0) {
                            a = !0;
                            let t = n.key.slice(n.key.indexOf("$") + 1);
                            e.has(t) ? s = !1 : e.add(t)
                        }
                        switch (n.type) {
                            case "title":
                            case "base":
                                t.has(n.type) ? s = !1 : t.add(n.type);
                                break;
                            case "meta":
                                for (let e = 0, t = p.length; e < t; e++) {
                                    let t = p[e];
                                    if (n.props.hasOwnProperty(t)) {
                                        if ("charSet" === t) r.has(t) ? s = !1 : r.add(t);
                                        else {
                                            let e = n.props[t],
                                                r = i[t] || new Set;
                                            ("name" !== t || !a) && r.has(e) ? s = !1 : (r.add(e), i[t] = r)
                                        }
                                    }
                                }
                        }
                        return s
                    }
                }()).reverse().map((e, t) => {
                    let i = e.key || t;
                    if (!r && "link" === e.type && e.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(t => e.props.href.startsWith(t))) {
                        let t = { ...e.props || {}
                        };
                        return t["data-href"] = t.href, t.href = void 0, t["data-optimized-fonts"] = !0, s.default.cloneElement(e, t)
                    }
                    return s.default.cloneElement(e, {
                        key: i
                    })
                })
            }
            let h = function(e) {
                let {
                    children: t
                } = e, r = (0, s.useContext)(o.AmpStateContext), i = (0, s.useContext)(l.HeadManagerContext);
                return s.default.createElement(a.default, {
                    reduceComponentsToState: f,
                    headManager: i,
                    inAmpMode: (0, d.isInAmpMode)(r)
                }, t)
            };
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        61511: function(e, t) {
            "use strict";

            function r(e) {
                let {
                    widthInt: t,
                    heightInt: r,
                    blurWidth: i,
                    blurHeight: n,
                    blurDataURL: s,
                    objectFit: a
                } = e, o = i ? 40 * i : t, l = n ? 40 * n : r, d = o && l ? "viewBox='0 0 " + o + " " + l + "'" : "";
                return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + d + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (d ? "none" : "contain" === a ? "xMidYMid" : "cover" === a ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + s + "'/%3E%3C/svg%3E"
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getImageBlurSvg", {
                enumerable: !0,
                get: function() {
                    return r
                }
            })
        },
        47327: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ImageConfigContext", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let i = r(21024),
                n = i._(r(2265)),
                s = r(17727),
                a = n.default.createContext(s.imageConfigDefault)
        },
        17727: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    VALID_LOADERS: function() {
                        return r
                    },
                    imageConfigDefault: function() {
                        return i
                    }
                });
            let r = ["default", "imgix", "cloudinary", "akamai", "custom"],
                i = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    loaderFile: "",
                    domains: [],
                    disableStaticImages: !1,
                    minimumCacheTTL: 60,
                    formats: ["image/webp"],
                    dangerouslyAllowSVG: !1,
                    contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
                    contentDispositionType: "inline",
                    remotePatterns: [],
                    unoptimized: !1
                }
        },
        80679: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    unstable_getImgProps: function() {
                        return l
                    },
                    default: function() {
                        return d
                    }
                });
            let i = r(21024),
                n = r(7929),
                s = r(92637),
                a = r(90413),
                o = i._(r(69950)),
                l = e => {
                    (0, s.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");
                    let {
                        props: t
                    } = (0, n.getImgProps)(e, {
                        defaultLoader: o.default,
                        imgConf: {
                            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                            path: "/_next/image/",
                            loader: "default",
                            dangerouslyAllowSVG: !1,
                            unoptimized: !0
                        }
                    });
                    for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
                    return {
                        props: t
                    }
                },
                d = a.Image
        },
        69950: function(e, t) {
            "use strict";

            function r(e) {
                let {
                    config: t,
                    src: r,
                    width: i,
                    quality: n
                } = e;
                return t.path + "?url=" + encodeURIComponent(r) + "&w=" + i + "&q=" + (n || 75)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return i
                }
            }), r.__next_img_default = !0;
            let i = r
        },
        80110: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let i = r(2265),
                n = i.useLayoutEffect,
                s = i.useEffect;

            function a(e) {
                let {
                    headManager: t,
                    reduceComponentsToState: r
                } = e;

                function a() {
                    if (t && t.mountedInstances) {
                        let n = i.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                        t.updateHead(r(n, e))
                    }
                }
                return n(() => {
                    var r;
                    return null == t || null == (r = t.mountedInstances) || r.add(e.children), () => {
                        var r;
                        null == t || null == (r = t.mountedInstances) || r.delete(e.children)
                    }
                }), n(() => (t && (t._pendingUpdate = a), () => {
                    t && (t._pendingUpdate = a)
                })), s(() => (t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null), () => {
                    t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null)
                })), null
            }
        },
        92637: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "warnOnce", {
                enumerable: !0,
                get: function() {
                    return r
                }
            });
            let r = e => {}
        },
        38020: function() {},
        16691: function(e, t, r) {
            e.exports = r(80679)
        },
        25566: function(e) {
            var t, r, i, n = e.exports = {};

            function s() {
                throw Error("setTimeout has not been defined")
            }

            function a() {
                throw Error("clearTimeout has not been defined")
            }

            function o(e) {
                if (t === setTimeout) return setTimeout(e, 0);
                if ((t === s || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
                try {
                    return t(e, 0)
                } catch (r) {
                    try {
                        return t.call(null, e, 0)
                    } catch (r) {
                        return t.call(this, e, 0)
                    }
                }
            }! function() {
                try {
                    t = "function" == typeof setTimeout ? setTimeout : s
                } catch (e) {
                    t = s
                }
                try {
                    r = "function" == typeof clearTimeout ? clearTimeout : a
                } catch (e) {
                    r = a
                }
            }();
            var l = [],
                d = !1,
                u = -1;

            function c() {
                d && i && (d = !1, i.length ? l = i.concat(l) : u = -1, l.length && p())
            }

            function p() {
                if (!d) {
                    var e = o(c);
                    d = !0;
                    for (var t = l.length; t;) {
                        for (i = l, l = []; ++u < t;) i && i[u].run();
                        u = -1, t = l.length
                    }
                    i = null, d = !1,
                        function(e) {
                            if (r === clearTimeout) return clearTimeout(e);
                            if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                            try {
                                r(e)
                            } catch (t) {
                                try {
                                    return r.call(null, e)
                                } catch (t) {
                                    return r.call(this, e)
                                }
                            }
                        }(e)
                }
            }

            function f(e, t) {
                this.fun = e, this.array = t
            }

            function h() {}
            n.nextTick = function(e) {
                var t = Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                l.push(new f(e, t)), 1 !== l.length || d || o(p)
            }, f.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = h, n.addListener = h, n.once = h, n.off = h, n.removeListener = h, n.removeAllListeners = h, n.emit = h, n.prependListener = h, n.prependOnceListener = h, n.listeners = function(e) {
                return []
            }, n.binding = function(e) {
                throw Error("process.binding is not supported")
            }, n.cwd = function() {
                return "/"
            }, n.chdir = function(e) {
                throw Error("process.chdir is not supported")
            }, n.umask = function() {
                return 0
            }
        },
        8455: function(e, t, r) {
            var i, n = r(25566);
            "undefined" != typeof self && self, e.exports = (i = r(2265), (() => {
                var e = {
                        7403: (e, t, r) => {
                            "use strict";
                            r.d(t, {
                                default: () => C
                            });
                            var i = r(4087),
                                n = r.n(i);
                            let s = function(e) {
                                    return new RegExp(/<[a-z][\s\S]*>/i).test(e)
                                },
                                a = function(e, t) {
                                    return Math.floor(Math.random() * (t - e + 1)) + e
                                };
                            var o = "TYPE_CHARACTER",
                                l = "REMOVE_CHARACTER",
                                d = "REMOVE_ALL",
                                u = "REMOVE_LAST_VISIBLE_NODE",
                                c = "PAUSE_FOR",
                                p = "CALL_FUNCTION",
                                f = "ADD_HTML_TAG_ELEMENT",
                                h = "CHANGE_DELETE_SPEED",
                                m = "CHANGE_DELAY",
                                v = "CHANGE_CURSOR",
                                g = "PASTE_STRING",
                                y = "HTML_TAG";

                            function b(e) {
                                return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                                })(e)
                            }

                            function w(e, t) {
                                var r = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var i = Object.getOwnPropertySymbols(e);
                                    t && (i = i.filter(function(t) {
                                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                                    })), r.push.apply(r, i)
                                }
                                return r
                            }

                            function S(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? w(Object(r), !0).forEach(function(t) {
                                        E(e, t, r[t])
                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : w(Object(r)).forEach(function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                    })
                                }
                                return e
                            }

                            function x(e) {
                                return function(e) {
                                    if (Array.isArray(e)) return T(e)
                                }(e) || function(e) {
                                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                                }(e) || function(e, t) {
                                    if (e) {
                                        if ("string" == typeof e) return T(e, t);
                                        var r = Object.prototype.toString.call(e).slice(8, -1);
                                        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? T(e, t) : void 0
                                    }
                                }(e) || function() {
                                    throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }()
                            }

                            function T(e, t) {
                                (null == t || t > e.length) && (t = e.length);
                                for (var r = 0, i = Array(t); r < t; r++) i[r] = e[r];
                                return i
                            }

                            function E(e, t, r) {
                                return (t = _(t)) in e ? Object.defineProperty(e, t, {
                                    value: r,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : e[t] = r, e
                            }

                            function _(e) {
                                var t = function(e, t) {
                                    if ("object" !== b(e) || null === e) return e;
                                    var r = e[Symbol.toPrimitive];
                                    if (void 0 !== r) {
                                        var i = r.call(e, "string");
                                        if ("object" !== b(i)) return i;
                                        throw TypeError("@@toPrimitive must return a primitive value.")
                                    }
                                    return String(e)
                                }(e);
                                return "symbol" === b(t) ? t : String(t)
                            }
                            let C = function() {
                                var e;

                                function t(e, r) {
                                    var b = this;
                                    if (function(e, t) {
                                            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                                        }(this, t), E(this, "state", {
                                            cursorAnimation: null,
                                            lastFrameTime: null,
                                            pauseUntil: null,
                                            eventQueue: [],
                                            eventLoop: null,
                                            eventLoopPaused: !1,
                                            reverseCalledEvents: [],
                                            calledEvents: [],
                                            visibleNodes: [],
                                            initialOptions: null,
                                            elements: {
                                                container: null,
                                                wrapper: document.createElement("span"),
                                                cursor: document.createElement("span")
                                            }
                                        }), E(this, "options", {
                                            strings: null,
                                            cursor: "|",
                                            delay: "natural",
                                            pauseFor: 1500,
                                            deleteSpeed: "natural",
                                            loop: !1,
                                            autoStart: !1,
                                            devMode: !1,
                                            skipAddStyles: !1,
                                            wrapperClassName: "Typewriter__wrapper",
                                            cursorClassName: "Typewriter__cursor",
                                            stringSplitter: null,
                                            onCreateTextNode: null,
                                            onRemoveNode: null
                                        }), E(this, "setupWrapperElement", function() {
                                            b.state.elements.container && (b.state.elements.wrapper.className = b.options.wrapperClassName, b.state.elements.cursor.className = b.options.cursorClassName, b.state.elements.cursor.innerHTML = b.options.cursor, b.state.elements.container.innerHTML = "", b.state.elements.container.appendChild(b.state.elements.wrapper), b.state.elements.container.appendChild(b.state.elements.cursor))
                                        }), E(this, "start", function() {
                                            return b.state.eventLoopPaused = !1, b.runEventLoop(), b
                                        }), E(this, "pause", function() {
                                            return b.state.eventLoopPaused = !0, b
                                        }), E(this, "stop", function() {
                                            return b.state.eventLoop && ((0, i.cancel)(b.state.eventLoop), b.state.eventLoop = null), b
                                        }), E(this, "pauseFor", function(e) {
                                            return b.addEventToQueue(c, {
                                                ms: e
                                            }), b
                                        }), E(this, "typeOutAllStrings", function() {
                                            return "string" == typeof b.options.strings ? b.typeString(b.options.strings).pauseFor(b.options.pauseFor) : b.options.strings.forEach(function(e) {
                                                b.typeString(e).pauseFor(b.options.pauseFor).deleteAll(b.options.deleteSpeed)
                                            }), b
                                        }), E(this, "typeString", function(e) {
                                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                                            if (s(e)) return b.typeOutHTMLString(e, t);
                                            if (e) {
                                                var r = (b.options || {}).stringSplitter,
                                                    i = "function" == typeof r ? r(e) : e.split("");
                                                b.typeCharacters(i, t)
                                            }
                                            return b
                                        }), E(this, "pasteString", function(e) {
                                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                                            return s(e) ? b.typeOutHTMLString(e, t, !0) : (e && b.addEventToQueue(g, {
                                                character: e,
                                                node: t
                                            }), b)
                                        }), E(this, "typeOutHTMLString", function(e) {
                                            var t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                                i = arguments.length > 2 ? arguments[2] : void 0,
                                                n = ((t = document.createElement("div")).innerHTML = e, t.childNodes);
                                            if (n.length > 0)
                                                for (var s = 0; s < n.length; s++) {
                                                    var a = n[s],
                                                        o = a.innerHTML;
                                                    a && 3 !== a.nodeType ? (a.innerHTML = "", b.addEventToQueue(f, {
                                                        node: a,
                                                        parentNode: r
                                                    }), i ? b.pasteString(o, a) : b.typeString(o, a)) : a.textContent && (i ? b.pasteString(a.textContent, r) : b.typeString(a.textContent, r))
                                                }
                                            return b
                                        }), E(this, "deleteAll", function() {
                                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "natural";
                                            return b.addEventToQueue(d, {
                                                speed: e
                                            }), b
                                        }), E(this, "changeDeleteSpeed", function(e) {
                                            if (!e) throw Error("Must provide new delete speed");
                                            return b.addEventToQueue(h, {
                                                speed: e
                                            }), b
                                        }), E(this, "changeDelay", function(e) {
                                            if (!e) throw Error("Must provide new delay");
                                            return b.addEventToQueue(m, {
                                                delay: e
                                            }), b
                                        }), E(this, "changeCursor", function(e) {
                                            if (!e) throw Error("Must provide new cursor");
                                            return b.addEventToQueue(v, {
                                                cursor: e
                                            }), b
                                        }), E(this, "deleteChars", function(e) {
                                            if (!e) throw Error("Must provide amount of characters to delete");
                                            for (var t = 0; t < e; t++) b.addEventToQueue(l);
                                            return b
                                        }), E(this, "callFunction", function(e, t) {
                                            if (!e || "function" != typeof e) throw Error("Callback must be a function");
                                            return b.addEventToQueue(p, {
                                                cb: e,
                                                thisArg: t
                                            }), b
                                        }), E(this, "typeCharacters", function(e) {
                                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                                            if (!e || !Array.isArray(e)) throw Error("Characters must be an array");
                                            return e.forEach(function(e) {
                                                b.addEventToQueue(o, {
                                                    character: e,
                                                    node: t
                                                })
                                            }), b
                                        }), E(this, "removeCharacters", function(e) {
                                            if (!e || !Array.isArray(e)) throw Error("Characters must be an array");
                                            return e.forEach(function() {
                                                b.addEventToQueue(l)
                                            }), b
                                        }), E(this, "addEventToQueue", function(e, t) {
                                            var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                            return b.addEventToStateProperty(e, t, r, "eventQueue")
                                        }), E(this, "addReverseCalledEvent", function(e, t) {
                                            var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                            return b.options.loop ? b.addEventToStateProperty(e, t, r, "reverseCalledEvents") : b
                                        }), E(this, "addEventToStateProperty", function(e, t) {
                                            var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                                                i = arguments.length > 3 ? arguments[3] : void 0,
                                                n = {
                                                    eventName: e,
                                                    eventArgs: t || {}
                                                };
                                            return b.state[i] = r ? [n].concat(x(b.state[i])) : [].concat(x(b.state[i]), [n]), b
                                        }), E(this, "runEventLoop", function() {
                                            b.state.lastFrameTime || (b.state.lastFrameTime = Date.now());
                                            var e = Date.now(),
                                                t = e - b.state.lastFrameTime;
                                            if (!b.state.eventQueue.length) {
                                                if (!b.options.loop) return;
                                                b.state.eventQueue = x(b.state.calledEvents), b.state.calledEvents = [], b.options = S({}, b.state.initialOptions)
                                            }
                                            if (b.state.eventLoop = n()(b.runEventLoop), !b.state.eventLoopPaused) {
                                                if (b.state.pauseUntil) {
                                                    if (e < b.state.pauseUntil) return;
                                                    b.state.pauseUntil = null
                                                }
                                                var r, i = x(b.state.eventQueue),
                                                    s = i.shift();
                                                if (!(t <= (r = s.eventName === u || s.eventName === l ? "natural" === b.options.deleteSpeed ? a(40, 80) : b.options.deleteSpeed : "natural" === b.options.delay ? a(120, 160) : b.options.delay))) {
                                                    var w = s.eventName,
                                                        T = s.eventArgs;
                                                    switch (b.logInDevMode({
                                                        currentEvent: s,
                                                        state: b.state,
                                                        delay: r
                                                    }), w) {
                                                        case g:
                                                        case o:
                                                            var E = T.character,
                                                                _ = T.node,
                                                                C = document.createTextNode(E),
                                                                P = C;
                                                            b.options.onCreateTextNode && "function" == typeof b.options.onCreateTextNode && (P = b.options.onCreateTextNode(E, C)), P && (_ ? _.appendChild(P) : b.state.elements.wrapper.appendChild(P)), b.state.visibleNodes = [].concat(x(b.state.visibleNodes), [{
                                                                type: "TEXT_NODE",
                                                                character: E,
                                                                node: P
                                                            }]);
                                                            break;
                                                        case l:
                                                            i.unshift({
                                                                eventName: u,
                                                                eventArgs: {
                                                                    removingCharacterNode: !0
                                                                }
                                                            });
                                                            break;
                                                        case c:
                                                            var O = s.eventArgs.ms;
                                                            b.state.pauseUntil = Date.now() + parseInt(O);
                                                            break;
                                                        case p:
                                                            var M = s.eventArgs,
                                                                k = M.cb,
                                                                A = M.thisArg;
                                                            k.call(A, {
                                                                elements: b.state.elements
                                                            });
                                                            break;
                                                        case f:
                                                            var j = s.eventArgs,
                                                                L = j.node,
                                                                I = j.parentNode;
                                                            I ? I.appendChild(L) : b.state.elements.wrapper.appendChild(L), b.state.visibleNodes = [].concat(x(b.state.visibleNodes), [{
                                                                type: y,
                                                                node: L,
                                                                parentNode: I || b.state.elements.wrapper
                                                            }]);
                                                            break;
                                                        case d:
                                                            var z = b.state.visibleNodes,
                                                                N = T.speed,
                                                                D = [];
                                                            N && D.push({
                                                                eventName: h,
                                                                eventArgs: {
                                                                    speed: N,
                                                                    temp: !0
                                                                }
                                                            });
                                                            for (var $ = 0, R = z.length; $ < R; $++) D.push({
                                                                eventName: u,
                                                                eventArgs: {
                                                                    removingCharacterNode: !1
                                                                }
                                                            });
                                                            N && D.push({
                                                                eventName: h,
                                                                eventArgs: {
                                                                    speed: b.options.deleteSpeed,
                                                                    temp: !0
                                                                }
                                                            }), i.unshift.apply(i, D);
                                                            break;
                                                        case u:
                                                            var F = s.eventArgs.removingCharacterNode;
                                                            if (b.state.visibleNodes.length) {
                                                                var G = b.state.visibleNodes.pop(),
                                                                    V = G.type,
                                                                    B = G.node,
                                                                    H = G.character;
                                                                b.options.onRemoveNode && "function" == typeof b.options.onRemoveNode && b.options.onRemoveNode({
                                                                    node: B,
                                                                    character: H
                                                                }), B && B.parentNode.removeChild(B), V === y && F && i.unshift({
                                                                    eventName: u,
                                                                    eventArgs: {}
                                                                })
                                                            }
                                                            break;
                                                        case h:
                                                            b.options.deleteSpeed = s.eventArgs.speed;
                                                            break;
                                                        case m:
                                                            b.options.delay = s.eventArgs.delay;
                                                            break;
                                                        case v:
                                                            b.options.cursor = s.eventArgs.cursor, b.state.elements.cursor.innerHTML = s.eventArgs.cursor
                                                    }
                                                    b.options.loop && (s.eventName === u || s.eventArgs && s.eventArgs.temp || (b.state.calledEvents = [].concat(x(b.state.calledEvents), [s]))), b.state.eventQueue = i, b.state.lastFrameTime = e
                                                }
                                            }
                                        }), e) {
                                        if ("string" == typeof e) {
                                            var w = document.querySelector(e);
                                            if (!w) throw Error("Could not find container element");
                                            this.state.elements.container = w
                                        } else this.state.elements.container = e
                                    }
                                    r && (this.options = S(S({}, this.options), r)), this.state.initialOptions = S({}, this.options), this.init()
                                }
                                return e = [{
                                        key: "init",
                                        value: function() {
                                            var e;
                                            this.setupWrapperElement(), this.addEventToQueue(v, {
                                                cursor: this.options.cursor
                                            }, !0), this.addEventToQueue(d, null, !0), !window || window.___TYPEWRITER_JS_STYLES_ADDED___ || this.options.skipAddStyles || ((e = document.createElement("style")).appendChild(document.createTextNode(".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}")), document.head.appendChild(e), window.___TYPEWRITER_JS_STYLES_ADDED___ = !0), !0 === this.options.autoStart && this.options.strings && this.typeOutAllStrings().start()
                                        }
                                    }, {
                                        key: "logInDevMode",
                                        value: function(e) {
                                            this.options.devMode && console.log(e)
                                        }
                                    }],
                                    function(e, t) {
                                        for (var r = 0; r < t.length; r++) {
                                            var i = t[r];
                                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, _(i.key), i)
                                        }
                                    }(t.prototype, e), Object.defineProperty(t, "prototype", {
                                        writable: !1
                                    }), t
                            }()
                        },
                        8552: (e, t, r) => {
                            var i = r(852)(r(5639), "DataView");
                            e.exports = i
                        },
                        1989: (e, t, r) => {
                            var i = r(1789),
                                n = r(401),
                                s = r(7667),
                                a = r(1327),
                                o = r(1866);

                            function l(e) {
                                var t = -1,
                                    r = null == e ? 0 : e.length;
                                for (this.clear(); ++t < r;) {
                                    var i = e[t];
                                    this.set(i[0], i[1])
                                }
                            }
                            l.prototype.clear = i, l.prototype.delete = n, l.prototype.get = s, l.prototype.has = a, l.prototype.set = o, e.exports = l
                        },
                        8407: (e, t, r) => {
                            var i = r(7040),
                                n = r(4125),
                                s = r(2117),
                                a = r(7518),
                                o = r(4705);

                            function l(e) {
                                var t = -1,
                                    r = null == e ? 0 : e.length;
                                for (this.clear(); ++t < r;) {
                                    var i = e[t];
                                    this.set(i[0], i[1])
                                }
                            }
                            l.prototype.clear = i, l.prototype.delete = n, l.prototype.get = s, l.prototype.has = a, l.prototype.set = o, e.exports = l
                        },
                        7071: (e, t, r) => {
                            var i = r(852)(r(5639), "Map");
                            e.exports = i
                        },
                        3369: (e, t, r) => {
                            var i = r(4785),
                                n = r(1285),
                                s = r(6e3),
                                a = r(9916),
                                o = r(5265);

                            function l(e) {
                                var t = -1,
                                    r = null == e ? 0 : e.length;
                                for (this.clear(); ++t < r;) {
                                    var i = e[t];
                                    this.set(i[0], i[1])
                                }
                            }
                            l.prototype.clear = i, l.prototype.delete = n, l.prototype.get = s, l.prototype.has = a, l.prototype.set = o, e.exports = l
                        },
                        3818: (e, t, r) => {
                            var i = r(852)(r(5639), "Promise");
                            e.exports = i
                        },
                        8525: (e, t, r) => {
                            var i = r(852)(r(5639), "Set");
                            e.exports = i
                        },
                        8668: (e, t, r) => {
                            var i = r(3369),
                                n = r(619),
                                s = r(2385);

                            function a(e) {
                                var t = -1,
                                    r = null == e ? 0 : e.length;
                                for (this.__data__ = new i; ++t < r;) this.add(e[t])
                            }
                            a.prototype.add = a.prototype.push = n, a.prototype.has = s, e.exports = a
                        },
                        6384: (e, t, r) => {
                            var i = r(8407),
                                n = r(7465),
                                s = r(3779),
                                a = r(7599),
                                o = r(4758),
                                l = r(4309);

                            function d(e) {
                                var t = this.__data__ = new i(e);
                                this.size = t.size
                            }
                            d.prototype.clear = n, d.prototype.delete = s, d.prototype.get = a, d.prototype.has = o, d.prototype.set = l, e.exports = d
                        },
                        2705: (e, t, r) => {
                            var i = r(5639).Symbol;
                            e.exports = i
                        },
                        1149: (e, t, r) => {
                            var i = r(5639).Uint8Array;
                            e.exports = i
                        },
                        577: (e, t, r) => {
                            var i = r(852)(r(5639), "WeakMap");
                            e.exports = i
                        },
                        4963: e => {
                            e.exports = function(e, t) {
                                for (var r = -1, i = null == e ? 0 : e.length, n = 0, s = []; ++r < i;) {
                                    var a = e[r];
                                    t(a, r, e) && (s[n++] = a)
                                }
                                return s
                            }
                        },
                        4636: (e, t, r) => {
                            var i = r(2545),
                                n = r(5694),
                                s = r(1469),
                                a = r(4144),
                                o = r(5776),
                                l = r(6719),
                                d = Object.prototype.hasOwnProperty;
                            e.exports = function(e, t) {
                                var r = s(e),
                                    u = !r && n(e),
                                    c = !r && !u && a(e),
                                    p = !r && !u && !c && l(e),
                                    f = r || u || c || p,
                                    h = f ? i(e.length, String) : [],
                                    m = h.length;
                                for (var v in e) !t && !d.call(e, v) || f && ("length" == v || c && ("offset" == v || "parent" == v) || p && ("buffer" == v || "byteLength" == v || "byteOffset" == v) || o(v, m)) || h.push(v);
                                return h
                            }
                        },
                        2488: e => {
                            e.exports = function(e, t) {
                                for (var r = -1, i = t.length, n = e.length; ++r < i;) e[n + r] = t[r];
                                return e
                            }
                        },
                        2908: e => {
                            e.exports = function(e, t) {
                                for (var r = -1, i = null == e ? 0 : e.length; ++r < i;)
                                    if (t(e[r], r, e)) return !0;
                                return !1
                            }
                        },
                        8470: (e, t, r) => {
                            var i = r(7813);
                            e.exports = function(e, t) {
                                for (var r = e.length; r--;)
                                    if (i(e[r][0], t)) return r;
                                return -1
                            }
                        },
                        8866: (e, t, r) => {
                            var i = r(2488),
                                n = r(1469);
                            e.exports = function(e, t, r) {
                                var s = t(e);
                                return n(e) ? s : i(s, r(e))
                            }
                        },
                        4239: (e, t, r) => {
                            var i = r(2705),
                                n = r(9607),
                                s = r(2333),
                                a = i ? i.toStringTag : void 0;
                            e.exports = function(e) {
                                return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : a && a in Object(e) ? n(e) : s(e)
                            }
                        },
                        9454: (e, t, r) => {
                            var i = r(4239),
                                n = r(7005);
                            e.exports = function(e) {
                                return n(e) && "[object Arguments]" == i(e)
                            }
                        },
                        939: (e, t, r) => {
                            var i = r(2492),
                                n = r(7005);
                            e.exports = function e(t, r, s, a, o) {
                                return t === r || (null != t && null != r && (n(t) || n(r)) ? i(t, r, s, a, e, o) : t != t && r != r)
                            }
                        },
                        2492: (e, t, r) => {
                            var i = r(6384),
                                n = r(7114),
                                s = r(8351),
                                a = r(6096),
                                o = r(4160),
                                l = r(1469),
                                d = r(4144),
                                u = r(6719),
                                c = "[object Arguments]",
                                p = "[object Array]",
                                f = "[object Object]",
                                h = Object.prototype.hasOwnProperty;
                            e.exports = function(e, t, r, m, v, g) {
                                var y = l(e),
                                    b = l(t),
                                    w = y ? p : o(e),
                                    S = b ? p : o(t),
                                    x = (w = w == c ? f : w) == f,
                                    T = (S = S == c ? f : S) == f,
                                    E = w == S;
                                if (E && d(e)) {
                                    if (!d(t)) return !1;
                                    y = !0, x = !1
                                }
                                if (E && !x) return g || (g = new i), y || u(e) ? n(e, t, r, m, v, g) : s(e, t, w, r, m, v, g);
                                if (!(1 & r)) {
                                    var _ = x && h.call(e, "__wrapped__"),
                                        C = T && h.call(t, "__wrapped__");
                                    if (_ || C) {
                                        var P = _ ? e.value() : e,
                                            O = C ? t.value() : t;
                                        return g || (g = new i), v(P, O, r, m, g)
                                    }
                                }
                                return !!E && (g || (g = new i), a(e, t, r, m, v, g))
                            }
                        },
                        8458: (e, t, r) => {
                            var i = r(3560),
                                n = r(5346),
                                s = r(3218),
                                a = r(346),
                                o = /^\[object .+?Constructor\]$/,
                                l = Object.prototype,
                                d = Function.prototype.toString,
                                u = l.hasOwnProperty,
                                c = RegExp("^" + d.call(u).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
                            e.exports = function(e) {
                                return !(!s(e) || n(e)) && (i(e) ? c : o).test(a(e))
                            }
                        },
                        8749: (e, t, r) => {
                            var i = r(4239),
                                n = r(1780),
                                s = r(7005),
                                a = {};
                            a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, e.exports = function(e) {
                                return s(e) && n(e.length) && !!a[i(e)]
                            }
                        },
                        280: (e, t, r) => {
                            var i = r(5726),
                                n = r(6916),
                                s = Object.prototype.hasOwnProperty;
                            e.exports = function(e) {
                                if (!i(e)) return n(e);
                                var t = [];
                                for (var r in Object(e)) s.call(e, r) && "constructor" != r && t.push(r);
                                return t
                            }
                        },
                        2545: e => {
                            e.exports = function(e, t) {
                                for (var r = -1, i = Array(e); ++r < e;) i[r] = t(r);
                                return i
                            }
                        },
                        1717: e => {
                            e.exports = function(e) {
                                return function(t) {
                                    return e(t)
                                }
                            }
                        },
                        4757: e => {
                            e.exports = function(e, t) {
                                return e.has(t)
                            }
                        },
                        4429: (e, t, r) => {
                            var i = r(5639)["__core-js_shared__"];
                            e.exports = i
                        },
                        7114: (e, t, r) => {
                            var i = r(8668),
                                n = r(2908),
                                s = r(4757);
                            e.exports = function(e, t, r, a, o, l) {
                                var d = 1 & r,
                                    u = e.length,
                                    c = t.length;
                                if (u != c && !(d && c > u)) return !1;
                                var p = l.get(e),
                                    f = l.get(t);
                                if (p && f) return p == t && f == e;
                                var h = -1,
                                    m = !0,
                                    v = 2 & r ? new i : void 0;
                                for (l.set(e, t), l.set(t, e); ++h < u;) {
                                    var g = e[h],
                                        y = t[h];
                                    if (a) var b = d ? a(y, g, h, t, e, l) : a(g, y, h, e, t, l);
                                    if (void 0 !== b) {
                                        if (b) continue;
                                        m = !1;
                                        break
                                    }
                                    if (v) {
                                        if (!n(t, function(e, t) {
                                                if (!s(v, t) && (g === e || o(g, e, r, a, l))) return v.push(t)
                                            })) {
                                            m = !1;
                                            break
                                        }
                                    } else if (g !== y && !o(g, y, r, a, l)) {
                                        m = !1;
                                        break
                                    }
                                }
                                return l.delete(e), l.delete(t), m
                            }
                        },
                        8351: (e, t, r) => {
                            var i = r(2705),
                                n = r(1149),
                                s = r(7813),
                                a = r(7114),
                                o = r(8776),
                                l = r(1814),
                                d = i ? i.prototype : void 0,
                                u = d ? d.valueOf : void 0;
                            e.exports = function(e, t, r, i, d, c, p) {
                                switch (r) {
                                    case "[object DataView]":
                                        if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
                                        e = e.buffer, t = t.buffer;
                                    case "[object ArrayBuffer]":
                                        return !(e.byteLength != t.byteLength || !c(new n(e), new n(t)));
                                    case "[object Boolean]":
                                    case "[object Date]":
                                    case "[object Number]":
                                        return s(+e, +t);
                                    case "[object Error]":
                                        return e.name == t.name && e.message == t.message;
                                    case "[object RegExp]":
                                    case "[object String]":
                                        return e == t + "";
                                    case "[object Map]":
                                        var f = o;
                                    case "[object Set]":
                                        var h = 1 & i;
                                        if (f || (f = l), e.size != t.size && !h) break;
                                        var m = p.get(e);
                                        if (m) return m == t;
                                        i |= 2, p.set(e, t);
                                        var v = a(f(e), f(t), i, d, c, p);
                                        return p.delete(e), v;
                                    case "[object Symbol]":
                                        if (u) return u.call(e) == u.call(t)
                                }
                                return !1
                            }
                        },
                        6096: (e, t, r) => {
                            var i = r(8234),
                                n = Object.prototype.hasOwnProperty;
                            e.exports = function(e, t, r, s, a, o) {
                                var l = 1 & r,
                                    d = i(e),
                                    u = d.length;
                                if (u != i(t).length && !l) return !1;
                                for (var c = u; c--;) {
                                    var p = d[c];
                                    if (!(l ? p in t : n.call(t, p))) return !1
                                }
                                var f = o.get(e),
                                    h = o.get(t);
                                if (f && h) return f == t && h == e;
                                var m = !0;
                                o.set(e, t), o.set(t, e);
                                for (var v = l; ++c < u;) {
                                    var g = e[p = d[c]],
                                        y = t[p];
                                    if (s) var b = l ? s(y, g, p, t, e, o) : s(g, y, p, e, t, o);
                                    if (!(void 0 === b ? g === y || a(g, y, r, s, o) : b)) {
                                        m = !1;
                                        break
                                    }
                                    v || (v = "constructor" == p)
                                }
                                if (m && !v) {
                                    var w = e.constructor,
                                        S = t.constructor;
                                    w == S || !("constructor" in e) || !("constructor" in t) || "function" == typeof w && w instanceof w && "function" == typeof S && S instanceof S || (m = !1)
                                }
                                return o.delete(e), o.delete(t), m
                            }
                        },
                        1957: (e, t, r) => {
                            var i = "object" == typeof r.g && r.g && r.g.Object === Object && r.g;
                            e.exports = i
                        },
                        8234: (e, t, r) => {
                            var i = r(8866),
                                n = r(9551),
                                s = r(3674);
                            e.exports = function(e) {
                                return i(e, s, n)
                            }
                        },
                        5050: (e, t, r) => {
                            var i = r(7019);
                            e.exports = function(e, t) {
                                var r = e.__data__;
                                return i(t) ? r["string" == typeof t ? "string" : "hash"] : r.map
                            }
                        },
                        852: (e, t, r) => {
                            var i = r(8458),
                                n = r(7801);
                            e.exports = function(e, t) {
                                var r = n(e, t);
                                return i(r) ? r : void 0
                            }
                        },
                        9607: (e, t, r) => {
                            var i = r(2705),
                                n = Object.prototype,
                                s = n.hasOwnProperty,
                                a = n.toString,
                                o = i ? i.toStringTag : void 0;
                            e.exports = function(e) {
                                var t = s.call(e, o),
                                    r = e[o];
                                try {
                                    e[o] = void 0;
                                    var i = !0
                                } catch (e) {}
                                var n = a.call(e);
                                return i && (t ? e[o] = r : delete e[o]), n
                            }
                        },
                        9551: (e, t, r) => {
                            var i = r(4963),
                                n = r(479),
                                s = Object.prototype.propertyIsEnumerable,
                                a = Object.getOwnPropertySymbols,
                                o = a ? function(e) {
                                    return null == e ? [] : i(a(e = Object(e)), function(t) {
                                        return s.call(e, t)
                                    })
                                } : n;
                            e.exports = o
                        },
                        4160: (e, t, r) => {
                            var i = r(8552),
                                n = r(7071),
                                s = r(3818),
                                a = r(8525),
                                o = r(577),
                                l = r(4239),
                                d = r(346),
                                u = "[object Map]",
                                c = "[object Promise]",
                                p = "[object Set]",
                                f = "[object WeakMap]",
                                h = "[object DataView]",
                                m = d(i),
                                v = d(n),
                                g = d(s),
                                y = d(a),
                                b = d(o),
                                w = l;
                            (i && w(new i(new ArrayBuffer(1))) != h || n && w(new n) != u || s && w(s.resolve()) != c || a && w(new a) != p || o && w(new o) != f) && (w = function(e) {
                                var t = l(e),
                                    r = "[object Object]" == t ? e.constructor : void 0,
                                    i = r ? d(r) : "";
                                if (i) switch (i) {
                                    case m:
                                        return h;
                                    case v:
                                        return u;
                                    case g:
                                        return c;
                                    case y:
                                        return p;
                                    case b:
                                        return f
                                }
                                return t
                            }), e.exports = w
                        },
                        7801: e => {
                            e.exports = function(e, t) {
                                return null == e ? void 0 : e[t]
                            }
                        },
                        1789: (e, t, r) => {
                            var i = r(4536);
                            e.exports = function() {
                                this.__data__ = i ? i(null) : {}, this.size = 0
                            }
                        },
                        401: e => {
                            e.exports = function(e) {
                                var t = this.has(e) && delete this.__data__[e];
                                return this.size -= t ? 1 : 0, t
                            }
                        },
                        7667: (e, t, r) => {
                            var i = r(4536),
                                n = Object.prototype.hasOwnProperty;
                            e.exports = function(e) {
                                var t = this.__data__;
                                if (i) {
                                    var r = t[e];
                                    return "__lodash_hash_undefined__" === r ? void 0 : r
                                }
                                return n.call(t, e) ? t[e] : void 0
                            }
                        },
                        1327: (e, t, r) => {
                            var i = r(4536),
                                n = Object.prototype.hasOwnProperty;
                            e.exports = function(e) {
                                var t = this.__data__;
                                return i ? void 0 !== t[e] : n.call(t, e)
                            }
                        },
                        1866: (e, t, r) => {
                            var i = r(4536);
                            e.exports = function(e, t) {
                                var r = this.__data__;
                                return this.size += this.has(e) ? 0 : 1, r[e] = i && void 0 === t ? "__lodash_hash_undefined__" : t, this
                            }
                        },
                        5776: e => {
                            var t = /^(?:0|[1-9]\d*)$/;
                            e.exports = function(e, r) {
                                var i = typeof e;
                                return !!(r = null == r ? 9007199254740991 : r) && ("number" == i || "symbol" != i && t.test(e)) && e > -1 && e % 1 == 0 && e < r
                            }
                        },
                        7019: e => {
                            e.exports = function(e) {
                                var t = typeof e;
                                return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
                            }
                        },
                        5346: (e, t, r) => {
                            var i, n = r(4429),
                                s = (i = /[^.]+$/.exec(n && n.keys && n.keys.IE_PROTO || "")) ? "Symbol(src)_1." + i : "";
                            e.exports = function(e) {
                                return !!s && s in e
                            }
                        },
                        5726: e => {
                            var t = Object.prototype;
                            e.exports = function(e) {
                                var r = e && e.constructor;
                                return e === ("function" == typeof r && r.prototype || t)
                            }
                        },
                        7040: e => {
                            e.exports = function() {
                                this.__data__ = [], this.size = 0
                            }
                        },
                        4125: (e, t, r) => {
                            var i = r(8470),
                                n = Array.prototype.splice;
                            e.exports = function(e) {
                                var t = this.__data__,
                                    r = i(t, e);
                                return !(r < 0 || (r == t.length - 1 ? t.pop() : n.call(t, r, 1), --this.size, 0))
                            }
                        },
                        2117: (e, t, r) => {
                            var i = r(8470);
                            e.exports = function(e) {
                                var t = this.__data__,
                                    r = i(t, e);
                                return r < 0 ? void 0 : t[r][1]
                            }
                        },
                        7518: (e, t, r) => {
                            var i = r(8470);
                            e.exports = function(e) {
                                return i(this.__data__, e) > -1
                            }
                        },
                        4705: (e, t, r) => {
                            var i = r(8470);
                            e.exports = function(e, t) {
                                var r = this.__data__,
                                    n = i(r, e);
                                return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
                            }
                        },
                        4785: (e, t, r) => {
                            var i = r(1989),
                                n = r(8407),
                                s = r(7071);
                            e.exports = function() {
                                this.size = 0, this.__data__ = {
                                    hash: new i,
                                    map: new(s || n),
                                    string: new i
                                }
                            }
                        },
                        1285: (e, t, r) => {
                            var i = r(5050);
                            e.exports = function(e) {
                                var t = i(this, e).delete(e);
                                return this.size -= t ? 1 : 0, t
                            }
                        },
                        6e3: (e, t, r) => {
                            var i = r(5050);
                            e.exports = function(e) {
                                return i(this, e).get(e)
                            }
                        },
                        9916: (e, t, r) => {
                            var i = r(5050);
                            e.exports = function(e) {
                                return i(this, e).has(e)
                            }
                        },
                        5265: (e, t, r) => {
                            var i = r(5050);
                            e.exports = function(e, t) {
                                var r = i(this, e),
                                    n = r.size;
                                return r.set(e, t), this.size += r.size == n ? 0 : 1, this
                            }
                        },
                        8776: e => {
                            e.exports = function(e) {
                                var t = -1,
                                    r = Array(e.size);
                                return e.forEach(function(e, i) {
                                    r[++t] = [i, e]
                                }), r
                            }
                        },
                        4536: (e, t, r) => {
                            var i = r(852)(Object, "create");
                            e.exports = i
                        },
                        6916: (e, t, r) => {
                            var i = r(5569)(Object.keys, Object);
                            e.exports = i
                        },
                        1167: (e, t, r) => {
                            e = r.nmd(e);
                            var i = r(1957),
                                n = t && !t.nodeType && t,
                                s = n && e && !e.nodeType && e,
                                a = s && s.exports === n && i.process,
                                o = function() {
                                    try {
                                        return s && s.require && s.require("util").types || a && a.binding && a.binding("util")
                                    } catch (e) {}
                                }();
                            e.exports = o
                        },
                        2333: e => {
                            var t = Object.prototype.toString;
                            e.exports = function(e) {
                                return t.call(e)
                            }
                        },
                        5569: e => {
                            e.exports = function(e, t) {
                                return function(r) {
                                    return e(t(r))
                                }
                            }
                        },
                        5639: (e, t, r) => {
                            var i = r(1957),
                                n = "object" == typeof self && self && self.Object === Object && self,
                                s = i || n || Function("return this")();
                            e.exports = s
                        },
                        619: e => {
                            e.exports = function(e) {
                                return this.__data__.set(e, "__lodash_hash_undefined__"), this
                            }
                        },
                        2385: e => {
                            e.exports = function(e) {
                                return this.__data__.has(e)
                            }
                        },
                        1814: e => {
                            e.exports = function(e) {
                                var t = -1,
                                    r = Array(e.size);
                                return e.forEach(function(e) {
                                    r[++t] = e
                                }), r
                            }
                        },
                        7465: (e, t, r) => {
                            var i = r(8407);
                            e.exports = function() {
                                this.__data__ = new i, this.size = 0
                            }
                        },
                        3779: e => {
                            e.exports = function(e) {
                                var t = this.__data__,
                                    r = t.delete(e);
                                return this.size = t.size, r
                            }
                        },
                        7599: e => {
                            e.exports = function(e) {
                                return this.__data__.get(e)
                            }
                        },
                        4758: e => {
                            e.exports = function(e) {
                                return this.__data__.has(e)
                            }
                        },
                        4309: (e, t, r) => {
                            var i = r(8407),
                                n = r(7071),
                                s = r(3369);
                            e.exports = function(e, t) {
                                var r = this.__data__;
                                if (r instanceof i) {
                                    var a = r.__data__;
                                    if (!n || a.length < 199) return a.push([e, t]), this.size = ++r.size, this;
                                    r = this.__data__ = new s(a)
                                }
                                return r.set(e, t), this.size = r.size, this
                            }
                        },
                        346: e => {
                            var t = Function.prototype.toString;
                            e.exports = function(e) {
                                if (null != e) {
                                    try {
                                        return t.call(e)
                                    } catch (e) {}
                                    try {
                                        return e + ""
                                    } catch (e) {}
                                }
                                return ""
                            }
                        },
                        7813: e => {
                            e.exports = function(e, t) {
                                return e === t || e != e && t != t
                            }
                        },
                        5694: (e, t, r) => {
                            var i = r(9454),
                                n = r(7005),
                                s = Object.prototype,
                                a = s.hasOwnProperty,
                                o = s.propertyIsEnumerable,
                                l = i(function() {
                                    return arguments
                                }()) ? i : function(e) {
                                    return n(e) && a.call(e, "callee") && !o.call(e, "callee")
                                };
                            e.exports = l
                        },
                        1469: e => {
                            var t = Array.isArray;
                            e.exports = t
                        },
                        8612: (e, t, r) => {
                            var i = r(3560),
                                n = r(1780);
                            e.exports = function(e) {
                                return null != e && n(e.length) && !i(e)
                            }
                        },
                        4144: (e, t, r) => {
                            e = r.nmd(e);
                            var i = r(5639),
                                n = r(5062),
                                s = t && !t.nodeType && t,
                                a = s && e && !e.nodeType && e,
                                o = a && a.exports === s ? i.Buffer : void 0,
                                l = (o ? o.isBuffer : void 0) || n;
                            e.exports = l
                        },
                        8446: (e, t, r) => {
                            var i = r(939);
                            e.exports = function(e, t) {
                                return i(e, t)
                            }
                        },
                        3560: (e, t, r) => {
                            var i = r(4239),
                                n = r(3218);
                            e.exports = function(e) {
                                if (!n(e)) return !1;
                                var t = i(e);
                                return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
                            }
                        },
                        1780: e => {
                            e.exports = function(e) {
                                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
                            }
                        },
                        3218: e => {
                            e.exports = function(e) {
                                var t = typeof e;
                                return null != e && ("object" == t || "function" == t)
                            }
                        },
                        7005: e => {
                            e.exports = function(e) {
                                return null != e && "object" == typeof e
                            }
                        },
                        6719: (e, t, r) => {
                            var i = r(8749),
                                n = r(1717),
                                s = r(1167),
                                a = s && s.isTypedArray,
                                o = a ? n(a) : i;
                            e.exports = o
                        },
                        3674: (e, t, r) => {
                            var i = r(4636),
                                n = r(280),
                                s = r(8612);
                            e.exports = function(e) {
                                return s(e) ? i(e) : n(e)
                            }
                        },
                        479: e => {
                            e.exports = function() {
                                return []
                            }
                        },
                        5062: e => {
                            e.exports = function() {
                                return !1
                            }
                        },
                        75: function(e) {
                            (function() {
                                var t, r, i, s;
                                "undefined" != typeof performance && null !== performance && performance.now ? e.exports = function() {
                                    return performance.now()
                                } : null != n && n.hrtime ? (e.exports = function() {
                                    return (t() - s) / 1e6
                                }, r = n.hrtime, s = (t = function() {
                                    var e;
                                    return 1e9 * (e = r())[0] + e[1]
                                })() - 1e9 * n.uptime()) : Date.now ? (e.exports = function() {
                                    return Date.now() - i
                                }, i = Date.now()) : (e.exports = function() {
                                    return (new Date).getTime() - i
                                }, i = (new Date).getTime())
                            }).call(this)
                        },
                        4087: (e, t, r) => {
                            for (var i = r(75), n = "undefined" == typeof window ? r.g : window, s = ["moz", "webkit"], a = "AnimationFrame", o = n["request" + a], l = n["cancel" + a] || n["cancelRequest" + a], d = 0; !o && d < s.length; d++) o = n[s[d] + "Request" + a], l = n[s[d] + "Cancel" + a] || n[s[d] + "CancelRequest" + a];
                            if (!o || !l) {
                                var u = 0,
                                    c = 0,
                                    p = [];
                                o = function(e) {
                                    if (0 === p.length) {
                                        var t = i(),
                                            r = Math.max(0, 16.666666666666668 - (t - u));
                                        u = r + t, setTimeout(function() {
                                            var e = p.slice(0);
                                            p.length = 0;
                                            for (var t = 0; t < e.length; t++)
                                                if (!e[t].cancelled) try {
                                                    e[t].callback(u)
                                                } catch (e) {
                                                    setTimeout(function() {
                                                        throw e
                                                    }, 0)
                                                }
                                        }, Math.round(r))
                                    }
                                    return p.push({
                                        handle: ++c,
                                        callback: e,
                                        cancelled: !1
                                    }), c
                                }, l = function(e) {
                                    for (var t = 0; t < p.length; t++) p[t].handle === e && (p[t].cancelled = !0)
                                }
                            }
                            e.exports = function(e) {
                                return o.call(n, e)
                            }, e.exports.cancel = function() {
                                l.apply(n, arguments)
                            }, e.exports.polyfill = function(e) {
                                e || (e = n), e.requestAnimationFrame = o, e.cancelAnimationFrame = l
                            }
                        },
                        8156: e => {
                            "use strict";
                            e.exports = i
                        }
                    },
                    t = {};

                function r(i) {
                    var n = t[i];
                    if (void 0 !== n) return n.exports;
                    var s = t[i] = {
                        id: i,
                        loaded: !1,
                        exports: {}
                    };
                    return e[i].call(s.exports, s, s.exports, r), s.loaded = !0, s.exports
                }
                r.n = e => {
                    var t = e && e.__esModule ? () => e.default : () => e;
                    return r.d(t, {
                        a: t
                    }), t
                }, r.d = (e, t) => {
                    for (var i in t) r.o(t, i) && !r.o(e, i) && Object.defineProperty(e, i, {
                        enumerable: !0,
                        get: t[i]
                    })
                }, r.g = function() {
                    if ("object" == typeof globalThis) return globalThis;
                    try {
                        return this || Function("return this")()
                    } catch (e) {
                        if ("object" == typeof window) return window
                    }
                }(), r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), r.nmd = e => (e.paths = [], e.children || (e.children = []), e);
                var s = {};
                return (() => {
                    "use strict";
                    r.d(s, {
                        default: () => f
                    });
                    var e = r(8156),
                        t = r.n(e),
                        i = r(7403),
                        n = r(8446),
                        a = r.n(n);

                    function o(e) {
                        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }

                    function l(e, t) {
                        return (l = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                            return e.__proto__ = t, e
                        })(e, t)
                    }

                    function d(e) {
                        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }

                    function u(e) {
                        return (u = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                            return e.__proto__ || Object.getPrototypeOf(e)
                        })(e)
                    }

                    function c(e) {
                        var t = function(e, t) {
                            if ("object" !== o(e) || null === e) return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                                var i = r.call(e, "string");
                                if ("object" !== o(i)) return i;
                                throw TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return String(e)
                        }(e);
                        return "symbol" === o(t) ? t : String(t)
                    }
                    var p = function(e) {
                        ! function(e, t) {
                            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), Object.defineProperty(e, "prototype", {
                                writable: !1
                            }), t && l(e, t)
                        }(p, e);
                        var r, n, s = (n = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                            } catch (e) {
                                return !1
                            }
                        }(), function() {
                            var e, t = u(p);
                            if (n) {
                                var r = u(this).constructor;
                                e = Reflect.construct(t, arguments, r)
                            } else e = t.apply(this, arguments);
                            return function(e, t) {
                                if (t && ("object" === o(t) || "function" == typeof t)) return t;
                                if (void 0 !== t) throw TypeError("Derived constructors may only return object or undefined");
                                return d(e)
                            }(this, e)
                        });

                        function p() {
                            var e, t, r, i;
                            ! function(e, t) {
                                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                            }(this, p);
                            for (var n = arguments.length, a = Array(n), o = 0; o < n; o++) a[o] = arguments[o];
                            return t = d(e = s.call.apply(s, [this].concat(a))), i = {
                                instance: null
                            }, (r = c(r = "state")) in t ? Object.defineProperty(t, r, {
                                value: i,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : t[r] = i, e
                        }
                        return r = [{
                                key: "componentDidMount",
                                value: function() {
                                    var e = this,
                                        t = new i.default(this.typewriter, this.props.options);
                                    this.setState({
                                        instance: t
                                    }, function() {
                                        var r = e.props.onInit;
                                        r && r(t)
                                    })
                                }
                            }, {
                                key: "componentDidUpdate",
                                value: function(e) {
                                    a()(this.props.options, e.options) || this.setState({
                                        instance: new i.default(this.typewriter, this.props.options)
                                    })
                                }
                            }, {
                                key: "componentWillUnmount",
                                value: function() {
                                    this.state.instance && this.state.instance.stop()
                                }
                            }, {
                                key: "render",
                                value: function() {
                                    var e = this,
                                        r = this.props.component;
                                    return t().createElement(r, {
                                        ref: function(t) {
                                            return e.typewriter = t
                                        },
                                        className: "Typewriter",
                                        "data-testid": "typewriter-wrapper"
                                    })
                                }
                            }],
                            function(e, t) {
                                for (var r = 0; r < t.length; r++) {
                                    var i = t[r];
                                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, c(i.key), i)
                                }
                            }(p.prototype, r), Object.defineProperty(p, "prototype", {
                                writable: !1
                            }), p
                    }(e.Component);
                    p.defaultProps = {
                        component: "div"
                    };
                    let f = p
                })(), s.default
            })())
        },
        51533: function(e, t, r) {
            "use strict";
            r.d(t, {
                pt: function() {
                    return n
                }
            });
            var i = r(19280);

            function n(e) {
                let t, r, n, s, a, o, l, d, u, c, {
                    swiper: p,
                    extendParams: f,
                    on: h,
                    emit: m,
                    params: v
                } = e;
                p.autoplay = {
                    running: !1,
                    paused: !1,
                    timeLeft: 0
                }, f({
                    autoplay: {
                        enabled: !1,
                        delay: 3e3,
                        waitForTransition: !0,
                        disableOnInteraction: !1,
                        stopOnLastSlide: !1,
                        reverseDirection: !1,
                        pauseOnMouseEnter: !1
                    }
                });
                let g = v && v.autoplay ? v.autoplay.delay : 3e3,
                    y = v && v.autoplay ? v.autoplay.delay : 3e3,
                    b = new Date().getTime();

                function w(e) {
                    p && !p.destroyed && p.wrapperEl && e.target === p.wrapperEl && (p.wrapperEl.removeEventListener("transitionend", w), !c && P())
                }
                let S = () => {
                        if (p.destroyed || !p.autoplay.running) return;
                        p.autoplay.paused ? s = !0 : s && (y = n, s = !1);
                        let e = p.autoplay.paused ? n : b + y - new Date().getTime();
                        p.autoplay.timeLeft = e, m("autoplayTimeLeft", e, e / g), r = requestAnimationFrame(() => {
                            S()
                        })
                    },
                    x = () => {
                        let e;
                        if (!(e = p.virtual && p.params.virtual.enabled ? p.slides.filter(e => e.classList.contains("swiper-slide-active"))[0] : p.slides[p.activeIndex])) return;
                        let t = parseInt(e.getAttribute("data-swiper-autoplay"), 10);
                        return t
                    },
                    T = e => {
                        if (p.destroyed || !p.autoplay.running) return;
                        cancelAnimationFrame(r), S();
                        let i = void 0 === e ? p.params.autoplay.delay : e;
                        g = p.params.autoplay.delay, y = p.params.autoplay.delay;
                        let s = x();
                        !Number.isNaN(s) && s > 0 && void 0 === e && (i = s, g = s, y = s), n = i;
                        let a = p.params.speed,
                            o = () => {
                                p && !p.destroyed && (p.params.autoplay.reverseDirection ? !p.isBeginning || p.params.loop || p.params.rewind ? (p.slidePrev(a, !0, !0), m("autoplay")) : p.params.autoplay.stopOnLastSlide || (p.slideTo(p.slides.length - 1, a, !0, !0), m("autoplay")) : !p.isEnd || p.params.loop || p.params.rewind ? (p.slideNext(a, !0, !0), m("autoplay")) : p.params.autoplay.stopOnLastSlide || (p.slideTo(0, a, !0, !0), m("autoplay")), p.params.cssMode && (b = new Date().getTime(), requestAnimationFrame(() => {
                                    T()
                                })))
                            };
                        return i > 0 ? (clearTimeout(t), t = setTimeout(() => {
                            o()
                        }, i)) : requestAnimationFrame(() => {
                            o()
                        }), i
                    },
                    E = () => {
                        b = new Date().getTime(), p.autoplay.running = !0, T(), m("autoplayStart")
                    },
                    _ = () => {
                        p.autoplay.running = !1, clearTimeout(t), cancelAnimationFrame(r), m("autoplayStop")
                    },
                    C = (e, r) => {
                        if (p.destroyed || !p.autoplay.running) return;
                        clearTimeout(t), e || (u = !0);
                        let i = () => {
                            m("autoplayPause"), p.params.autoplay.waitForTransition ? p.wrapperEl.addEventListener("transitionend", w) : P()
                        };
                        if (p.autoplay.paused = !0, r) {
                            d && (n = p.params.autoplay.delay), d = !1, i();
                            return
                        }
                        let s = n || p.params.autoplay.delay;
                        n = s - (new Date().getTime() - b), p.isEnd && n < 0 && !p.params.loop || (n < 0 && (n = 0), i())
                    },
                    P = () => {
                        p.isEnd && n < 0 && !p.params.loop || p.destroyed || !p.autoplay.running || (b = new Date().getTime(), u ? (u = !1, T(n)) : T(), p.autoplay.paused = !1, m("autoplayResume"))
                    },
                    O = () => {
                        if (p.destroyed || !p.autoplay.running) return;
                        let e = (0, i.g)();
                        "hidden" === e.visibilityState && (u = !0, C(!0)), "visible" === e.visibilityState && P()
                    },
                    M = e => {
                        "mouse" === e.pointerType && (u = !0, c = !0, p.animating || p.autoplay.paused || C(!0))
                    },
                    k = e => {
                        "mouse" === e.pointerType && (c = !1, p.autoplay.paused && P())
                    },
                    A = () => {
                        p.params.autoplay.pauseOnMouseEnter && (p.el.addEventListener("pointerenter", M), p.el.addEventListener("pointerleave", k))
                    },
                    j = () => {
                        p.el.removeEventListener("pointerenter", M), p.el.removeEventListener("pointerleave", k)
                    },
                    L = () => {
                        let e = (0, i.g)();
                        e.addEventListener("visibilitychange", O)
                    },
                    I = () => {
                        let e = (0, i.g)();
                        e.removeEventListener("visibilitychange", O)
                    };
                h("init", () => {
                    p.params.autoplay.enabled && (A(), L(), E())
                }), h("destroy", () => {
                    j(), I(), p.autoplay.running && _()
                }), h("_freeModeStaticRelease", () => {
                    (o || u) && P()
                }), h("_freeModeNoMomentumRelease", () => {
                    p.params.autoplay.disableOnInteraction ? _() : C(!0, !0)
                }), h("beforeTransitionStart", (e, t, r) => {
                    !p.destroyed && p.autoplay.running && (r || !p.params.autoplay.disableOnInteraction ? C(!0, !0) : _())
                }), h("sliderFirstMove", () => {
                    if (!p.destroyed && p.autoplay.running) {
                        if (p.params.autoplay.disableOnInteraction) {
                            _();
                            return
                        }
                        a = !0, o = !1, u = !1, l = setTimeout(() => {
                            u = !0, o = !0, C(!0)
                        }, 200)
                    }
                }), h("touchEnd", () => {
                    if (!p.destroyed && p.autoplay.running && a) {
                        if (clearTimeout(l), clearTimeout(t), p.params.autoplay.disableOnInteraction) {
                            o = !1, a = !1;
                            return
                        }
                        o && p.params.cssMode && P(), o = !1, a = !1
                    }
                }), h("slideChange", () => {
                    !p.destroyed && p.autoplay.running && (d = !0)
                }), Object.assign(p.autoplay, {
                    start: E,
                    stop: _,
                    pause: C,
                    resume: P
                })
            }
            r(11439)
        },
        19280: function(e, t, r) {
            "use strict";

            function i(e) {
                return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
            }

            function n(e, t) {
                void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach(r => {
                    void 0 === e[r] ? e[r] = t[r] : i(t[r]) && i(e[r]) && Object.keys(t[r]).length > 0 && n(e[r], t[r])
                })
            }
            r.d(t, {
                a: function() {
                    return l
                },
                g: function() {
                    return a
                }
            });
            let s = {
                body: {},
                addEventListener() {},
                removeEventListener() {},
                activeElement: {
                    blur() {},
                    nodeName: ""
                },
                querySelector: () => null,
                querySelectorAll: () => [],
                getElementById: () => null,
                createEvent: () => ({
                    initEvent() {}
                }),
                createElement: () => ({
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName: () => []
                }),
                createElementNS: () => ({}),
                importNode: () => null,
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                }
            };

            function a() {
                let e = "undefined" != typeof document ? document : {};
                return n(e, s), e
            }
            let o = {
                document: s,
                navigator: {
                    userAgent: ""
                },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                },
                history: {
                    replaceState() {},
                    pushState() {},
                    go() {},
                    back() {}
                },
                CustomEvent: function() {
                    return this
                },
                addEventListener() {},
                removeEventListener() {},
                getComputedStyle: () => ({
                    getPropertyValue: () => ""
                }),
                Image() {},
                Date() {},
                screen: {},
                setTimeout() {},
                clearTimeout() {},
                matchMedia: () => ({}),
                requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
                cancelAnimationFrame(e) {
                    "undefined" != typeof setTimeout && clearTimeout(e)
                }
            };

            function l() {
                let e = "undefined" != typeof window ? window : {};
                return n(e, o), e
            }
        },
        11439: function(e, t, r) {
            "use strict";
            r.d(t, {
                a: function() {
                    return y
                },
                c: function() {
                    return f
                },
                d: function() {
                    return a
                },
                e: function() {
                    return c
                },
                f: function() {
                    return b
                },
                g: function() {
                    return g
                },
                i: function() {
                    return o
                },
                m: function() {
                    return v
                },
                n: function() {
                    return s
                },
                o: function() {
                    return m
                },
                p: function() {
                    return h
                },
                q: function() {
                    return u
                },
                r: function() {
                    return p
                },
                s: function() {
                    return d
                },
                t: function() {
                    return function e() {
                        let t = Object(arguments.length <= 0 ? void 0 : arguments[0]),
                            r = ["__proto__", "constructor", "prototype"];
                        for (let i = 1; i < arguments.length; i += 1) {
                            let n = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                            if (null != n && ("undefined" != typeof window && void 0 !== window.HTMLElement ? !(n instanceof HTMLElement) : !n || 1 !== n.nodeType && 11 !== n.nodeType)) {
                                let i = Object.keys(Object(n)).filter(e => 0 > r.indexOf(e));
                                for (let r = 0, s = i.length; r < s; r += 1) {
                                    let s = i[r],
                                        a = Object.getOwnPropertyDescriptor(n, s);
                                    void 0 !== a && a.enumerable && (l(t[s]) && l(n[s]) ? n[s].__swiper__ ? t[s] = n[s] : e(t[s], n[s]) : !l(t[s]) && l(n[s]) ? (t[s] = {}, n[s].__swiper__ ? t[s] = n[s] : e(t[s], n[s])) : t[s] = n[s])
                                }
                            }
                        }
                        return t
                    }
                },
                u: function() {
                    return n
                }
            });
            var i = r(19280);

            function n(e) {
                Object.keys(e).forEach(t => {
                    try {
                        e[t] = null
                    } catch (e) {}
                    try {
                        delete e[t]
                    } catch (e) {}
                })
            }

            function s(e, t) {
                return void 0 === t && (t = 0), setTimeout(e, t)
            }

            function a() {
                return Date.now()
            }

            function o(e, t) {
                let r, n, s;
                void 0 === t && (t = "x");
                let a = (0, i.a)(),
                    o = function(e) {
                        let t;
                        let r = (0, i.a)();
                        return r.getComputedStyle && (t = r.getComputedStyle(e, null)), !t && e.currentStyle && (t = e.currentStyle), t || (t = e.style), t
                    }(e);
                return a.WebKitCSSMatrix ? ((n = o.transform || o.webkitTransform).split(",").length > 6 && (n = n.split(", ").map(e => e.replace(",", ".")).join(", ")), s = new a.WebKitCSSMatrix("none" === n ? "" : n)) : r = (s = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (n = a.WebKitCSSMatrix ? s.m41 : 16 === r.length ? parseFloat(r[12]) : parseFloat(r[4])), "y" === t && (n = a.WebKitCSSMatrix ? s.m42 : 16 === r.length ? parseFloat(r[13]) : parseFloat(r[5])), n || 0
            }

            function l(e) {
                return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
            }

            function d(e, t, r) {
                e.style.setProperty(t, r)
            }

            function u(e) {
                let t, {
                        swiper: r,
                        targetPosition: n,
                        side: s
                    } = e,
                    a = (0, i.a)(),
                    o = -r.translate,
                    l = null,
                    d = r.params.speed;
                r.wrapperEl.style.scrollSnapType = "none", a.cancelAnimationFrame(r.cssModeFrameID);
                let u = n > o ? "next" : "prev",
                    c = (e, t) => "next" === u && e >= t || "prev" === u && e <= t,
                    p = () => {
                        t = new Date().getTime(), null === l && (l = t);
                        let e = Math.max(Math.min((t - l) / d, 1), 0),
                            i = o + (.5 - Math.cos(e * Math.PI) / 2) * (n - o);
                        if (c(i, n) && (i = n), r.wrapperEl.scrollTo({
                                [s]: i
                            }), c(i, n)) {
                            r.wrapperEl.style.overflow = "hidden", r.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
                                r.wrapperEl.style.overflow = "", r.wrapperEl.scrollTo({
                                    [s]: i
                                })
                            }), a.cancelAnimationFrame(r.cssModeFrameID);
                            return
                        }
                        r.cssModeFrameID = a.requestAnimationFrame(p)
                    };
                p()
            }

            function c(e, t) {
                return void 0 === t && (t = ""), [...e.children].filter(e => e.matches(t))
            }

            function p(e) {
                try {
                    console.warn(e);
                    return
                } catch (e) {}
            }

            function f(e, t) {
                var r;
                void 0 === t && (t = []);
                let i = document.createElement(e);
                return i.classList.add(...Array.isArray(t) ? t : (void 0 === (r = t) && (r = ""), r.trim().split(" ").filter(e => !!e.trim()))), i
            }

            function h(e, t) {
                let r = [];
                for (; e.previousElementSibling;) {
                    let i = e.previousElementSibling;
                    t ? i.matches(t) && r.push(i) : r.push(i), e = i
                }
                return r
            }

            function m(e, t) {
                let r = [];
                for (; e.nextElementSibling;) {
                    let i = e.nextElementSibling;
                    t ? i.matches(t) && r.push(i) : r.push(i), e = i
                }
                return r
            }

            function v(e, t) {
                let r = (0, i.a)();
                return r.getComputedStyle(e, null).getPropertyValue(t)
            }

            function g(e) {
                let t, r = e;
                if (r) {
                    for (t = 0; null !== (r = r.previousSibling);) 1 === r.nodeType && (t += 1);
                    return t
                }
            }

            function y(e, t) {
                let r = [],
                    i = e.parentElement;
                for (; i;) t ? i.matches(t) && r.push(i) : r.push(i), i = i.parentElement;
                return r
            }

            function b(e, t, r) {
                let n = (0, i.a)();
                return r ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(n.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(n.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
            }
        },
        28278: function(e, t, r) {
            "use strict";
            let i, n, s;
            r.d(t, {
                tq: function() {
                    return V
                },
                o5: function() {
                    return B
                }
            });
            var a = r(2265),
                o = r(19280),
                l = r(11439);

            function d() {
                return i || (i = function() {
                    let e = (0, o.a)(),
                        t = (0, o.g)();
                    return {
                        smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
                        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
                    }
                }()), i
            }
            let u = (e, t) => {
                    if (!e || e.destroyed || !e.params) return;
                    let r = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
                    if (r) {
                        let t = r.querySelector(`.${e.params.lazyPreloaderClass}`);
                        !t && e.isElement && (r.shadowRoot ? t = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
                            r.shadowRoot && (t = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`)) && t.remove()
                        })), t && t.remove()
                    }
                },
                c = (e, t) => {
                    if (!e.slides[t]) return;
                    let r = e.slides[t].querySelector('[loading="lazy"]');
                    r && r.removeAttribute("loading")
                },
                p = e => {
                    if (!e || e.destroyed || !e.params) return;
                    let t = e.params.lazyPreloadPrevNext,
                        r = e.slides.length;
                    if (!r || !t || t < 0) return;
                    t = Math.min(t, r);
                    let i = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
                        n = e.activeIndex;
                    if (e.params.grid && e.params.grid.rows > 1) {
                        let r = [n - t];
                        r.push(...Array.from({
                            length: t
                        }).map((e, t) => n + i + t)), e.slides.forEach((t, i) => {
                            r.includes(t.column) && c(e, i)
                        });
                        return
                    }
                    let s = n + i - 1;
                    if (e.params.rewind || e.params.loop)
                        for (let i = n - t; i <= s + t; i += 1) {
                            let t = (i % r + r) % r;
                            (t < n || t > s) && c(e, t)
                        } else
                            for (let i = Math.max(n - t, 0); i <= Math.min(s + t, r - 1); i += 1) i !== n && (i > s || i < n) && c(e, i)
                };

            function f(e) {
                let {
                    swiper: t,
                    runCallbacks: r,
                    direction: i,
                    step: n
                } = e, {
                    activeIndex: s,
                    previousIndex: a
                } = t, o = i;
                if (o || (o = s > a ? "next" : s < a ? "prev" : "reset"), t.emit(`transition${n}`), r && s !== a) {
                    if ("reset" === o) {
                        t.emit(`slideResetTransition${n}`);
                        return
                    }
                    t.emit(`slideChangeTransition${n}`), "next" === o ? t.emit(`slideNextTransition${n}`) : t.emit(`slidePrevTransition${n}`)
                }
            }

            function h(e, t, r) {
                let i = (0, o.a)(),
                    {
                        params: n
                    } = e,
                    s = n.edgeSwipeDetection,
                    a = n.edgeSwipeThreshold;
                return !s || !(r <= a) && !(r >= i.innerWidth - a) || "prevent" === s && (t.preventDefault(), !0)
            }

            function m(e) {
                let t = (0, o.g)(),
                    r = e;
                r.originalEvent && (r = r.originalEvent);
                let i = this.touchEventsData;
                if ("pointerdown" === r.type) {
                    if (null !== i.pointerId && i.pointerId !== r.pointerId) return;
                    i.pointerId = r.pointerId
                } else "touchstart" === r.type && 1 === r.targetTouches.length && (i.touchId = r.targetTouches[0].identifier);
                if ("touchstart" === r.type) {
                    h(this, r, r.targetTouches[0].pageX);
                    return
                }
                let {
                    params: n,
                    touches: s,
                    enabled: a
                } = this;
                if (!a || !n.simulateTouch && "mouse" === r.pointerType || this.animating && n.preventInteractionOnTransition) return;
                !this.animating && n.cssMode && n.loop && this.loopFix();
                let d = r.target;
                if ("wrapper" === n.touchEventsTarget && !this.wrapperEl.contains(d) || "which" in r && 3 === r.which || "button" in r && r.button > 0 || i.isTouched && i.isMoved) return;
                let u = !!n.noSwipingClass && "" !== n.noSwipingClass,
                    c = r.composedPath ? r.composedPath() : r.path;
                u && r.target && r.target.shadowRoot && c && (d = c[0]);
                let p = n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`,
                    f = !!(r.target && r.target.shadowRoot);
                if (n.noSwiping && (f ? function(e, t) {
                        return void 0 === t && (t = this),
                            function t(r) {
                                if (!r || r === (0, o.g)() || r === (0, o.a)()) return null;
                                r.assignedSlot && (r = r.assignedSlot);
                                let i = r.closest(e);
                                return i || r.getRootNode ? i || t(r.getRootNode().host) : null
                            }(t)
                    }(p, d) : d.closest(p))) {
                    this.allowClick = !0;
                    return
                }
                if (n.swipeHandler && !d.closest(n.swipeHandler)) return;
                s.currentX = r.pageX, s.currentY = r.pageY;
                let m = s.currentX,
                    v = s.currentY;
                if (!h(this, r, m)) return;
                Object.assign(i, {
                    isTouched: !0,
                    isMoved: !1,
                    allowTouchCallbacks: !0,
                    isScrolling: void 0,
                    startMoving: void 0
                }), s.startX = m, s.startY = v, i.touchStartTime = (0, l.d)(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, n.threshold > 0 && (i.allowThresholdMove = !1);
                let g = !0;
                d.matches(i.focusableElements) && (g = !1, "SELECT" === d.nodeName && (i.isTouched = !1)), t.activeElement && t.activeElement.matches(i.focusableElements) && t.activeElement !== d && t.activeElement.blur();
                let y = g && this.allowTouchMove && n.touchStartPreventDefault;
                (n.touchStartForcePreventDefault || y) && !d.isContentEditable && r.preventDefault(), n.freeMode && n.freeMode.enabled && this.freeMode && this.animating && !n.cssMode && this.freeMode.onTouchStart(), this.emit("touchStart", r)
            }

            function v(e) {
                let t, r;
                let i = (0, o.g)(),
                    n = this.touchEventsData,
                    {
                        params: s,
                        touches: a,
                        rtlTranslate: d,
                        enabled: u
                    } = this;
                if (!u || !s.simulateTouch && "mouse" === e.pointerType) return;
                let c = e;
                if (c.originalEvent && (c = c.originalEvent), "pointermove" === c.type) {
                    if (null !== n.touchId) return;
                    let e = c.pointerId;
                    if (e !== n.pointerId) return
                }
                if ("touchmove" === c.type) {
                    if (!(t = [...c.changedTouches].filter(e => e.identifier === n.touchId)[0]) || t.identifier !== n.touchId) return
                } else t = c;
                if (!n.isTouched) {
                    n.startMoving && n.isScrolling && this.emit("touchMoveOpposite", c);
                    return
                }
                let p = t.pageX,
                    f = t.pageY;
                if (c.preventedByNestedSwiper) {
                    a.startX = p, a.startY = f;
                    return
                }
                if (!this.allowTouchMove) {
                    c.target.matches(n.focusableElements) || (this.allowClick = !1), n.isTouched && (Object.assign(a, {
                        startX: p,
                        startY: f,
                        currentX: p,
                        currentY: f
                    }), n.touchStartTime = (0, l.d)());
                    return
                }
                if (s.touchReleaseOnEdges && !s.loop) {
                    if (this.isVertical()) {
                        if (f < a.startY && this.translate <= this.maxTranslate() || f > a.startY && this.translate >= this.minTranslate()) {
                            n.isTouched = !1, n.isMoved = !1;
                            return
                        }
                    } else if (p < a.startX && this.translate <= this.maxTranslate() || p > a.startX && this.translate >= this.minTranslate()) return
                }
                if (i.activeElement && c.target === i.activeElement && c.target.matches(n.focusableElements)) {
                    n.isMoved = !0, this.allowClick = !1;
                    return
                }
                n.allowTouchCallbacks && this.emit("touchMove", c), a.previousX = a.currentX, a.previousY = a.currentY, a.currentX = p, a.currentY = f;
                let h = a.currentX - a.startX,
                    m = a.currentY - a.startY;
                if (this.params.threshold && Math.sqrt(h ** 2 + m ** 2) < this.params.threshold) return;
                if (void 0 === n.isScrolling) {
                    let e;
                    this.isHorizontal() && a.currentY === a.startY || this.isVertical() && a.currentX === a.startX ? n.isScrolling = !1 : h * h + m * m >= 25 && (e = 180 * Math.atan2(Math.abs(m), Math.abs(h)) / Math.PI, n.isScrolling = this.isHorizontal() ? e > s.touchAngle : 90 - e > s.touchAngle)
                }
                if (n.isScrolling && this.emit("touchMoveOpposite", c), void 0 === n.startMoving && (a.currentX !== a.startX || a.currentY !== a.startY) && (n.startMoving = !0), n.isScrolling) {
                    n.isTouched = !1;
                    return
                }
                if (!n.startMoving) return;
                this.allowClick = !1, !s.cssMode && c.cancelable && c.preventDefault(), s.touchMoveStopPropagation && !s.nested && c.stopPropagation();
                let v = this.isHorizontal() ? h : m,
                    g = this.isHorizontal() ? a.currentX - a.previousX : a.currentY - a.previousY;
                s.oneWayMovement && (v = Math.abs(v) * (d ? 1 : -1), g = Math.abs(g) * (d ? 1 : -1)), a.diff = v, v *= s.touchRatio, d && (v = -v, g = -g);
                let y = this.touchesDirection;
                this.swipeDirection = v > 0 ? "prev" : "next", this.touchesDirection = g > 0 ? "prev" : "next";
                let b = this.params.loop && !s.cssMode,
                    w = "next" === this.touchesDirection && this.allowSlideNext || "prev" === this.touchesDirection && this.allowSlidePrev;
                if (!n.isMoved) {
                    if (b && w && this.loopFix({
                            direction: this.swipeDirection
                        }), n.startTranslate = this.getTranslate(), this.setTransition(0), this.animating) {
                        let e = new window.CustomEvent("transitionend", {
                            bubbles: !0,
                            cancelable: !0
                        });
                        this.wrapperEl.dispatchEvent(e)
                    }
                    n.allowMomentumBounce = !1, s.grabCursor && (!0 === this.allowSlideNext || !0 === this.allowSlidePrev) && this.setGrabCursor(!0), this.emit("sliderFirstMove", c)
                }
                if (new Date().getTime(), n.isMoved && n.allowThresholdMove && y !== this.touchesDirection && b && w && Math.abs(v) >= 1) {
                    Object.assign(a, {
                        startX: p,
                        startY: f,
                        currentX: p,
                        currentY: f,
                        startTranslate: n.currentTranslate
                    }), n.loopSwapReset = !0, n.startTranslate = n.currentTranslate;
                    return
                }
                this.emit("sliderMove", c), n.isMoved = !0, n.currentTranslate = v + n.startTranslate;
                let S = !0,
                    x = s.resistanceRatio;
                if (s.touchReleaseOnEdges && (x = 0), v > 0 ? (b && w && !r && n.allowThresholdMove && n.currentTranslate > (s.centeredSlides ? this.minTranslate() - this.slidesSizesGrid[this.activeIndex + 1] : this.minTranslate()) && this.loopFix({
                        direction: "prev",
                        setTranslate: !0,
                        activeSlideIndex: 0
                    }), n.currentTranslate > this.minTranslate() && (S = !1, s.resistance && (n.currentTranslate = this.minTranslate() - 1 + (-this.minTranslate() + n.startTranslate + v) ** x))) : v < 0 && (b && w && !r && n.allowThresholdMove && n.currentTranslate < (s.centeredSlides ? this.maxTranslate() + this.slidesSizesGrid[this.slidesSizesGrid.length - 1] : this.maxTranslate()) && this.loopFix({
                        direction: "next",
                        setTranslate: !0,
                        activeSlideIndex: this.slides.length - ("auto" === s.slidesPerView ? this.slidesPerViewDynamic() : Math.ceil(parseFloat(s.slidesPerView, 10)))
                    }), n.currentTranslate < this.maxTranslate() && (S = !1, s.resistance && (n.currentTranslate = this.maxTranslate() + 1 - (this.maxTranslate() - n.startTranslate - v) ** x))), S && (c.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && n.currentTranslate < n.startTranslate && (n.currentTranslate = n.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && n.currentTranslate > n.startTranslate && (n.currentTranslate = n.startTranslate), this.allowSlidePrev || this.allowSlideNext || (n.currentTranslate = n.startTranslate), s.threshold > 0) {
                    if (Math.abs(v) > s.threshold || n.allowThresholdMove) {
                        if (!n.allowThresholdMove) {
                            n.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, n.currentTranslate = n.startTranslate, a.diff = this.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY;
                            return
                        }
                    } else {
                        n.currentTranslate = n.startTranslate;
                        return
                    }
                }
                s.followFinger && !s.cssMode && ((s.freeMode && s.freeMode.enabled && this.freeMode || s.watchSlidesProgress) && (this.updateActiveIndex(), this.updateSlidesClasses()), s.freeMode && s.freeMode.enabled && this.freeMode && this.freeMode.onTouchMove(), this.updateProgress(n.currentTranslate), this.setTranslate(n.currentTranslate))
            }

            function g(e) {
                let t, r;
                let i = this,
                    n = i.touchEventsData,
                    s = e;
                s.originalEvent && (s = s.originalEvent);
                let a = "touchend" === s.type || "touchcancel" === s.type;
                if (a) {
                    if (!(t = [...s.changedTouches].filter(e => e.identifier === n.touchId)[0]) || t.identifier !== n.touchId) return
                } else {
                    if (null !== n.touchId || s.pointerId !== n.pointerId) return;
                    t = s
                }
                if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(s.type)) {
                    let e = ["pointercancel", "contextmenu"].includes(s.type) && (i.browser.isSafari || i.browser.isWebView);
                    if (!e) return
                }
                n.pointerId = null, n.touchId = null;
                let {
                    params: o,
                    touches: d,
                    rtlTranslate: u,
                    slidesGrid: c,
                    enabled: p
                } = i;
                if (!p || !o.simulateTouch && "mouse" === s.pointerType) return;
                if (n.allowTouchCallbacks && i.emit("touchEnd", s), n.allowTouchCallbacks = !1, !n.isTouched) {
                    n.isMoved && o.grabCursor && i.setGrabCursor(!1), n.isMoved = !1, n.startMoving = !1;
                    return
                }
                o.grabCursor && n.isMoved && n.isTouched && (!0 === i.allowSlideNext || !0 === i.allowSlidePrev) && i.setGrabCursor(!1);
                let f = (0, l.d)(),
                    h = f - n.touchStartTime;
                if (i.allowClick) {
                    let e = s.path || s.composedPath && s.composedPath();
                    i.updateClickedSlide(e && e[0] || s.target, e), i.emit("tap click", s), h < 300 && f - n.lastClickTime < 300 && i.emit("doubleTap doubleClick", s)
                }
                if (n.lastClickTime = (0, l.d)(), (0, l.n)(() => {
                        i.destroyed || (i.allowClick = !0)
                    }), !n.isTouched || !n.isMoved || !i.swipeDirection || 0 === d.diff && !n.loopSwapReset || n.currentTranslate === n.startTranslate && !n.loopSwapReset) {
                    n.isTouched = !1, n.isMoved = !1, n.startMoving = !1;
                    return
                }
                if (n.isTouched = !1, n.isMoved = !1, n.startMoving = !1, r = o.followFinger ? u ? i.translate : -i.translate : -n.currentTranslate, o.cssMode) return;
                if (o.freeMode && o.freeMode.enabled) {
                    i.freeMode.onTouchEnd({
                        currentPos: r
                    });
                    return
                }
                let m = r >= -i.maxTranslate() && !i.params.loop,
                    v = 0,
                    g = i.slidesSizesGrid[0];
                for (let e = 0; e < c.length; e += e < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup) {
                    let t = e < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
                    void 0 !== c[e + t] ? (m || r >= c[e] && r < c[e + t]) && (v = e, g = c[e + t] - c[e]) : (m || r >= c[e]) && (v = e, g = c[c.length - 1] - c[c.length - 2])
                }
                let y = null,
                    b = null;
                o.rewind && (i.isBeginning ? b = o.virtual && o.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1 : i.isEnd && (y = 0));
                let w = (r - c[v]) / g,
                    S = v < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
                if (h > o.longSwipesMs) {
                    if (!o.longSwipes) {
                        i.slideTo(i.activeIndex);
                        return
                    }
                    "next" === i.swipeDirection && (w >= o.longSwipesRatio ? i.slideTo(o.rewind && i.isEnd ? y : v + S) : i.slideTo(v)), "prev" === i.swipeDirection && (w > 1 - o.longSwipesRatio ? i.slideTo(v + S) : null !== b && w < 0 && Math.abs(w) > o.longSwipesRatio ? i.slideTo(b) : i.slideTo(v))
                } else {
                    if (!o.shortSwipes) {
                        i.slideTo(i.activeIndex);
                        return
                    }
                    let e = i.navigation && (s.target === i.navigation.nextEl || s.target === i.navigation.prevEl);
                    e ? s.target === i.navigation.nextEl ? i.slideTo(v + S) : i.slideTo(v) : ("next" === i.swipeDirection && i.slideTo(null !== y ? y : v + S), "prev" === i.swipeDirection && i.slideTo(null !== b ? b : v))
                }
            }

            function y() {
                let e = this,
                    {
                        params: t,
                        el: r
                    } = e;
                if (r && 0 === r.offsetWidth) return;
                t.breakpoints && e.setBreakpoint();
                let {
                    allowSlideNext: i,
                    allowSlidePrev: n,
                    snapGrid: s
                } = e, a = e.virtual && e.params.virtual.enabled;
                e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
                let o = a && t.loop;
                "auto" !== t.slidesPerView && !(t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || o ? e.params.loop && !a ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout(() => {
                    e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
                }, 500)), e.allowSlidePrev = n, e.allowSlideNext = i, e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow()
            }

            function b(e) {
                this.enabled && !this.allowClick && (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
            }

            function w() {
                let {
                    wrapperEl: e,
                    rtlTranslate: t,
                    enabled: r
                } = this;
                if (!r) return;
                this.previousTranslate = this.translate, this.isHorizontal() ? this.translate = -e.scrollLeft : this.translate = -e.scrollTop, 0 === this.translate && (this.translate = 0), this.updateActiveIndex(), this.updateSlidesClasses();
                let i = this.maxTranslate() - this.minTranslate();
                (0 === i ? 0 : (this.translate - this.minTranslate()) / i) !== this.progress && this.updateProgress(t ? -this.translate : this.translate), this.emit("setTranslate", this.translate, !1)
            }

            function S(e) {
                u(this, e.target), !this.params.cssMode && ("auto" === this.params.slidesPerView || this.params.autoHeight) && this.update()
            }

            function x() {
                !this.documentTouchHandlerProceeded && (this.documentTouchHandlerProceeded = !0, this.params.touchReleaseOnEdges && (this.el.style.touchAction = "auto"))
            }
            let T = (e, t) => {
                    let r = (0, o.g)(),
                        {
                            params: i,
                            el: n,
                            wrapperEl: s,
                            device: a
                        } = e,
                        l = !!i.nested,
                        d = "on" === t ? "addEventListener" : "removeEventListener";
                    r[d]("touchstart", e.onDocumentTouchStart, {
                        passive: !1,
                        capture: l
                    }), n[d]("touchstart", e.onTouchStart, {
                        passive: !1
                    }), n[d]("pointerdown", e.onTouchStart, {
                        passive: !1
                    }), r[d]("touchmove", e.onTouchMove, {
                        passive: !1,
                        capture: l
                    }), r[d]("pointermove", e.onTouchMove, {
                        passive: !1,
                        capture: l
                    }), r[d]("touchend", e.onTouchEnd, {
                        passive: !0
                    }), r[d]("pointerup", e.onTouchEnd, {
                        passive: !0
                    }), r[d]("pointercancel", e.onTouchEnd, {
                        passive: !0
                    }), r[d]("touchcancel", e.onTouchEnd, {
                        passive: !0
                    }), r[d]("pointerout", e.onTouchEnd, {
                        passive: !0
                    }), r[d]("pointerleave", e.onTouchEnd, {
                        passive: !0
                    }), r[d]("contextmenu", e.onTouchEnd, {
                        passive: !0
                    }), (i.preventClicks || i.preventClicksPropagation) && n[d]("click", e.onClick, !0), i.cssMode && s[d]("scroll", e.onScroll), i.updateOnWindowResize ? e[t](a.ios || a.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", y, !0) : e[t]("observerUpdate", y, !0), n[d]("load", e.onLoad, {
                        capture: !0
                    })
                },
                E = (e, t) => e.grid && t.grid && t.grid.rows > 1;
            var _ = {
                init: !0,
                direction: "horizontal",
                oneWayMovement: !1,
                touchEventsTarget: "wrapper",
                initialSlide: 0,
                speed: 300,
                cssMode: !1,
                updateOnWindowResize: !0,
                resizeObserver: !0,
                nested: !1,
                createElements: !1,
                eventsPrefix: "swiper",
                enabled: !0,
                focusableElements: "input, select, option, textarea, button, video, label",
                width: null,
                height: null,
                preventInteractionOnTransition: !1,
                userAgent: null,
                url: null,
                edgeSwipeDetection: !1,
                edgeSwipeThreshold: 20,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                breakpointsBase: "window",
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerGroup: 1,
                slidesPerGroupSkip: 0,
                slidesPerGroupAuto: !1,
                centeredSlides: !1,
                centeredSlidesBounds: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                centerInsufficientSlides: !1,
                watchOverflow: !0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 5,
                touchMoveStopPropagation: !1,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,
                watchSlidesProgress: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                loop: !1,
                loopAddBlankSlides: !0,
                loopAdditionalSlides: 0,
                loopPreventsSliding: !0,
                rewind: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                maxBackfaceHiddenSlides: 10,
                containerModifierClass: "swiper-",
                slideClass: "swiper-slide",
                slideBlankClass: "swiper-slide-blank",
                slideActiveClass: "swiper-slide-active",
                slideVisibleClass: "swiper-slide-visible",
                slideFullyVisibleClass: "swiper-slide-fully-visible",
                slideNextClass: "swiper-slide-next",
                slidePrevClass: "swiper-slide-prev",
                wrapperClass: "swiper-wrapper",
                lazyPreloaderClass: "swiper-lazy-preloader",
                lazyPreloadPrevNext: 0,
                runCallbacksOnInit: !0,
                _emitClasses: !1
            };
            let C = {
                    eventsEmitter: {
                        on(e, t, r) {
                            let i = this;
                            if (!i.eventsListeners || i.destroyed || "function" != typeof t) return i;
                            let n = r ? "unshift" : "push";
                            return e.split(" ").forEach(e => {
                                i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][n](t)
                            }), i
                        },
                        once(e, t, r) {
                            let i = this;
                            if (!i.eventsListeners || i.destroyed || "function" != typeof t) return i;

                            function n() {
                                i.off(e, n), n.__emitterProxy && delete n.__emitterProxy;
                                for (var r = arguments.length, s = Array(r), a = 0; a < r; a++) s[a] = arguments[a];
                                t.apply(i, s)
                            }
                            return n.__emitterProxy = t, i.on(e, n, r)
                        },
                        onAny(e, t) {
                            return !this.eventsListeners || this.destroyed || "function" != typeof e || 0 > this.eventsAnyListeners.indexOf(e) && this.eventsAnyListeners[t ? "unshift" : "push"](e), this
                        },
                        offAny(e) {
                            if (!this.eventsListeners || this.destroyed || !this.eventsAnyListeners) return this;
                            let t = this.eventsAnyListeners.indexOf(e);
                            return t >= 0 && this.eventsAnyListeners.splice(t, 1), this
                        },
                        off(e, t) {
                            let r = this;
                            return r.eventsListeners && !r.destroyed && r.eventsListeners && e.split(" ").forEach(e => {
                                void 0 === t ? r.eventsListeners[e] = [] : r.eventsListeners[e] && r.eventsListeners[e].forEach((i, n) => {
                                    (i === t || i.__emitterProxy && i.__emitterProxy === t) && r.eventsListeners[e].splice(n, 1)
                                })
                            }), r
                        },
                        emit() {
                            let e, t, r;
                            let i = this;
                            if (!i.eventsListeners || i.destroyed || !i.eventsListeners) return i;
                            for (var n = arguments.length, s = Array(n), a = 0; a < n; a++) s[a] = arguments[a];
                            "string" == typeof s[0] || Array.isArray(s[0]) ? (e = s[0], t = s.slice(1, s.length), r = i) : (e = s[0].events, t = s[0].data, r = s[0].context || i), t.unshift(r);
                            let o = Array.isArray(e) ? e : e.split(" ");
                            return o.forEach(e => {
                                i.eventsAnyListeners && i.eventsAnyListeners.length && i.eventsAnyListeners.forEach(i => {
                                    i.apply(r, [e, ...t])
                                }), i.eventsListeners && i.eventsListeners[e] && i.eventsListeners[e].forEach(e => {
                                    e.apply(r, t)
                                })
                            }), i
                        }
                    },
                    update: {
                        updateSize: function() {
                            let e, t;
                            let r = this.el;
                            e = void 0 !== this.params.width && null !== this.params.width ? this.params.width : r.clientWidth, t = void 0 !== this.params.height && null !== this.params.height ? this.params.height : r.clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt((0, l.m)(r, "padding-left") || 0, 10) - parseInt((0, l.m)(r, "padding-right") || 0, 10), t = t - parseInt((0, l.m)(r, "padding-top") || 0, 10) - parseInt((0, l.m)(r, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), Object.assign(this, {
                                width: e,
                                height: t,
                                size: this.isHorizontal() ? e : t
                            }))
                        },
                        updateSlides: function() {
                            let e;
                            let t = this;

                            function r(e, r) {
                                return parseFloat(e.getPropertyValue(t.getDirectionLabel(r)) || 0)
                            }
                            let i = t.params,
                                {
                                    wrapperEl: n,
                                    slidesEl: s,
                                    size: a,
                                    rtlTranslate: o,
                                    wrongRTL: d
                                } = t,
                                u = t.virtual && i.virtual.enabled,
                                c = u ? t.virtual.slides.length : t.slides.length,
                                p = (0, l.e)(s, `.${t.params.slideClass}, swiper-slide`),
                                f = u ? t.virtual.slides.length : p.length,
                                h = [],
                                m = [],
                                v = [],
                                g = i.slidesOffsetBefore;
                            "function" == typeof g && (g = i.slidesOffsetBefore.call(t));
                            let y = i.slidesOffsetAfter;
                            "function" == typeof y && (y = i.slidesOffsetAfter.call(t));
                            let b = t.snapGrid.length,
                                w = t.slidesGrid.length,
                                S = i.spaceBetween,
                                x = -g,
                                T = 0,
                                E = 0;
                            if (void 0 === a) return;
                            "string" == typeof S && S.indexOf("%") >= 0 ? S = parseFloat(S.replace("%", "")) / 100 * a : "string" == typeof S && (S = parseFloat(S)), t.virtualSize = -S, p.forEach(e => {
                                o ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
                            }), i.centeredSlides && i.cssMode && ((0, l.s)(n, "--swiper-centered-offset-before", ""), (0, l.s)(n, "--swiper-centered-offset-after", ""));
                            let _ = i.grid && i.grid.rows > 1 && t.grid;
                            _ ? t.grid.initSlides(p) : t.grid && t.grid.unsetSlides();
                            let C = "auto" === i.slidesPerView && i.breakpoints && Object.keys(i.breakpoints).filter(e => void 0 !== i.breakpoints[e].slidesPerView).length > 0;
                            for (let n = 0; n < f; n += 1) {
                                let s;
                                if (e = 0, p[n] && (s = p[n]), _ && t.grid.updateSlide(n, s, p), !p[n] || "none" !== (0, l.m)(s, "display")) {
                                    if ("auto" === i.slidesPerView) {
                                        C && (p[n].style[t.getDirectionLabel("width")] = "");
                                        let a = getComputedStyle(s),
                                            o = s.style.transform,
                                            d = s.style.webkitTransform;
                                        if (o && (s.style.transform = "none"), d && (s.style.webkitTransform = "none"), i.roundLengths) e = t.isHorizontal() ? (0, l.f)(s, "width", !0) : (0, l.f)(s, "height", !0);
                                        else {
                                            let t = r(a, "width"),
                                                i = r(a, "padding-left"),
                                                n = r(a, "padding-right"),
                                                o = r(a, "margin-left"),
                                                l = r(a, "margin-right"),
                                                d = a.getPropertyValue("box-sizing");
                                            if (d && "border-box" === d) e = t + o + l;
                                            else {
                                                let {
                                                    clientWidth: r,
                                                    offsetWidth: a
                                                } = s;
                                                e = t + i + n + o + l + (a - r)
                                            }
                                        }
                                        o && (s.style.transform = o), d && (s.style.webkitTransform = d), i.roundLengths && (e = Math.floor(e))
                                    } else e = (a - (i.slidesPerView - 1) * S) / i.slidesPerView, i.roundLengths && (e = Math.floor(e)), p[n] && (p[n].style[t.getDirectionLabel("width")] = `${e}px`);
                                    p[n] && (p[n].swiperSlideSize = e), v.push(e), i.centeredSlides ? (x = x + e / 2 + T / 2 + S, 0 === T && 0 !== n && (x = x - a / 2 - S), 0 === n && (x = x - a / 2 - S), .001 > Math.abs(x) && (x = 0), i.roundLengths && (x = Math.floor(x)), E % i.slidesPerGroup == 0 && h.push(x), m.push(x)) : (i.roundLengths && (x = Math.floor(x)), (E - Math.min(t.params.slidesPerGroupSkip, E)) % t.params.slidesPerGroup == 0 && h.push(x), m.push(x), x = x + e + S), t.virtualSize += e + S, T = e, E += 1
                                }
                            }
                            if (t.virtualSize = Math.max(t.virtualSize, a) + y, o && d && ("slide" === i.effect || "coverflow" === i.effect) && (n.style.width = `${t.virtualSize+S}px`), i.setWrapperSize && (n.style[t.getDirectionLabel("width")] = `${t.virtualSize+S}px`), _ && t.grid.updateWrapperSize(e, h), !i.centeredSlides) {
                                let e = [];
                                for (let r = 0; r < h.length; r += 1) {
                                    let n = h[r];
                                    i.roundLengths && (n = Math.floor(n)), h[r] <= t.virtualSize - a && e.push(n)
                                }
                                h = e, Math.floor(t.virtualSize - a) - Math.floor(h[h.length - 1]) > 1 && h.push(t.virtualSize - a)
                            }
                            if (u && i.loop) {
                                let e = v[0] + S;
                                if (i.slidesPerGroup > 1) {
                                    let r = Math.ceil((t.virtual.slidesBefore + t.virtual.slidesAfter) / i.slidesPerGroup),
                                        n = e * i.slidesPerGroup;
                                    for (let e = 0; e < r; e += 1) h.push(h[h.length - 1] + n)
                                }
                                for (let r = 0; r < t.virtual.slidesBefore + t.virtual.slidesAfter; r += 1) 1 === i.slidesPerGroup && h.push(h[h.length - 1] + e), m.push(m[m.length - 1] + e), t.virtualSize += e
                            }
                            if (0 === h.length && (h = [0]), 0 !== S) {
                                let e = t.isHorizontal() && o ? "marginLeft" : t.getDirectionLabel("marginRight");
                                p.filter((e, t) => !i.cssMode || !!i.loop || t !== p.length - 1).forEach(t => {
                                    t.style[e] = `${S}px`
                                })
                            }
                            if (i.centeredSlides && i.centeredSlidesBounds) {
                                let e = 0;
                                v.forEach(t => {
                                    e += t + (S || 0)
                                }), e -= S;
                                let t = e - a;
                                h = h.map(e => e <= 0 ? -g : e > t ? t + y : e)
                            }
                            if (i.centerInsufficientSlides) {
                                let e = 0;
                                if (v.forEach(t => {
                                        e += t + (S || 0)
                                    }), (e -= S) < a) {
                                    let t = (a - e) / 2;
                                    h.forEach((e, r) => {
                                        h[r] = e - t
                                    }), m.forEach((e, r) => {
                                        m[r] = e + t
                                    })
                                }
                            }
                            if (Object.assign(t, {
                                    slides: p,
                                    snapGrid: h,
                                    slidesGrid: m,
                                    slidesSizesGrid: v
                                }), i.centeredSlides && i.cssMode && !i.centeredSlidesBounds) {
                                (0, l.s)(n, "--swiper-centered-offset-before", `${-h[0]}px`), (0, l.s)(n, "--swiper-centered-offset-after", `${t.size/2-v[v.length-1]/2}px`);
                                let e = -t.snapGrid[0],
                                    r = -t.slidesGrid[0];
                                t.snapGrid = t.snapGrid.map(t => t + e), t.slidesGrid = t.slidesGrid.map(e => e + r)
                            }
                            if (f !== c && t.emit("slidesLengthChange"), h.length !== b && (t.params.watchOverflow && t.checkOverflow(), t.emit("snapGridLengthChange")), m.length !== w && t.emit("slidesGridLengthChange"), i.watchSlidesProgress && t.updateSlidesOffset(), t.emit("slidesUpdated"), !u && !i.cssMode && ("slide" === i.effect || "fade" === i.effect)) {
                                let e = `${i.containerModifierClass}backface-hidden`,
                                    r = t.el.classList.contains(e);
                                f <= i.maxBackfaceHiddenSlides ? r || t.el.classList.add(e) : r && t.el.classList.remove(e)
                            }
                        },
                        updateAutoHeight: function(e) {
                            let t;
                            let r = this,
                                i = [],
                                n = r.virtual && r.params.virtual.enabled,
                                s = 0;
                            "number" == typeof e ? r.setTransition(e) : !0 === e && r.setTransition(r.params.speed);
                            let a = e => n ? r.slides[r.getSlideIndexByData(e)] : r.slides[e];
                            if ("auto" !== r.params.slidesPerView && r.params.slidesPerView > 1) {
                                if (r.params.centeredSlides)(r.visibleSlides || []).forEach(e => {
                                    i.push(e)
                                });
                                else
                                    for (t = 0; t < Math.ceil(r.params.slidesPerView); t += 1) {
                                        let e = r.activeIndex + t;
                                        if (e > r.slides.length && !n) break;
                                        i.push(a(e))
                                    }
                            } else i.push(a(r.activeIndex));
                            for (t = 0; t < i.length; t += 1)
                                if (void 0 !== i[t]) {
                                    let e = i[t].offsetHeight;
                                    s = e > s ? e : s
                                }(s || 0 === s) && (r.wrapperEl.style.height = `${s}px`)
                        },
                        updateSlidesOffset: function() {
                            let e = this.slides,
                                t = this.isElement ? this.isHorizontal() ? this.wrapperEl.offsetLeft : this.wrapperEl.offsetTop : 0;
                            for (let r = 0; r < e.length; r += 1) e[r].swiperSlideOffset = (this.isHorizontal() ? e[r].offsetLeft : e[r].offsetTop) - t - this.cssOverflowAdjustment()
                        },
                        updateSlidesProgress: function(e) {
                            void 0 === e && (e = this && this.translate || 0);
                            let t = this.params,
                                {
                                    slides: r,
                                    rtlTranslate: i,
                                    snapGrid: n
                                } = this;
                            if (0 === r.length) return;
                            void 0 === r[0].swiperSlideOffset && this.updateSlidesOffset();
                            let s = -e;
                            i && (s = e), r.forEach(e => {
                                e.classList.remove(t.slideVisibleClass, t.slideFullyVisibleClass)
                            }), this.visibleSlidesIndexes = [], this.visibleSlides = [];
                            let a = t.spaceBetween;
                            "string" == typeof a && a.indexOf("%") >= 0 ? a = parseFloat(a.replace("%", "")) / 100 * this.size : "string" == typeof a && (a = parseFloat(a));
                            for (let e = 0; e < r.length; e += 1) {
                                let o = r[e],
                                    l = o.swiperSlideOffset;
                                t.cssMode && t.centeredSlides && (l -= r[0].swiperSlideOffset);
                                let d = (s + (t.centeredSlides ? this.minTranslate() : 0) - l) / (o.swiperSlideSize + a),
                                    u = (s - n[0] + (t.centeredSlides ? this.minTranslate() : 0) - l) / (o.swiperSlideSize + a),
                                    c = -(s - l),
                                    p = c + this.slidesSizesGrid[e],
                                    f = c >= 0 && c <= this.size - this.slidesSizesGrid[e],
                                    h = c >= 0 && c < this.size - 1 || p > 1 && p <= this.size || c <= 0 && p >= this.size;
                                h && (this.visibleSlides.push(o), this.visibleSlidesIndexes.push(e), r[e].classList.add(t.slideVisibleClass)), f && r[e].classList.add(t.slideFullyVisibleClass), o.progress = i ? -d : d, o.originalProgress = i ? -u : u
                            }
                        },
                        updateProgress: function(e) {
                            if (void 0 === e) {
                                let t = this.rtlTranslate ? -1 : 1;
                                e = this && this.translate && this.translate * t || 0
                            }
                            let t = this.params,
                                r = this.maxTranslate() - this.minTranslate(),
                                {
                                    progress: i,
                                    isBeginning: n,
                                    isEnd: s,
                                    progressLoop: a
                                } = this,
                                o = n,
                                l = s;
                            if (0 === r) i = 0, n = !0, s = !0;
                            else {
                                i = (e - this.minTranslate()) / r;
                                let t = 1 > Math.abs(e - this.minTranslate()),
                                    a = 1 > Math.abs(e - this.maxTranslate());
                                n = t || i <= 0, s = a || i >= 1, t && (i = 0), a && (i = 1)
                            }
                            if (t.loop) {
                                let t = this.getSlideIndexByData(0),
                                    r = this.getSlideIndexByData(this.slides.length - 1),
                                    i = this.slidesGrid[t],
                                    n = this.slidesGrid[r],
                                    s = this.slidesGrid[this.slidesGrid.length - 1],
                                    o = Math.abs(e);
                                (a = o >= i ? (o - i) / s : (o + s - n) / s) > 1 && (a -= 1)
                            }
                            Object.assign(this, {
                                progress: i,
                                progressLoop: a,
                                isBeginning: n,
                                isEnd: s
                            }), (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && this.updateSlidesProgress(e), n && !o && this.emit("reachBeginning toEdge"), s && !l && this.emit("reachEnd toEdge"), (o && !n || l && !s) && this.emit("fromEdge"), this.emit("progress", i)
                        },
                        updateSlidesClasses: function() {
                            let e, t, r;
                            let {
                                slides: i,
                                params: n,
                                slidesEl: s,
                                activeIndex: a
                            } = this, o = this.virtual && n.virtual.enabled, d = this.grid && n.grid && n.grid.rows > 1, u = e => (0, l.e)(s, `.${n.slideClass}${e}, swiper-slide${e}`)[0];
                            if (i.forEach(e => {
                                    e.classList.remove(n.slideActiveClass, n.slideNextClass, n.slidePrevClass)
                                }), o) {
                                if (n.loop) {
                                    let t = a - this.virtual.slidesBefore;
                                    t < 0 && (t = this.virtual.slides.length + t), t >= this.virtual.slides.length && (t -= this.virtual.slides.length), e = u(`[data-swiper-slide-index="${t}"]`)
                                } else e = u(`[data-swiper-slide-index="${a}"]`)
                            } else d ? (e = i.filter(e => e.column === a)[0], r = i.filter(e => e.column === a + 1)[0], t = i.filter(e => e.column === a - 1)[0]) : e = i[a];
                            e && (e.classList.add(n.slideActiveClass), d ? r && r.classList.add(n.slideNextClass) : (r = (0, l.o)(e, `.${n.slideClass}, swiper-slide`)[0], n.loop && !r && (r = i[0]), r && r.classList.add(n.slideNextClass), t = (0, l.p)(e, `.${n.slideClass}, swiper-slide`)[0], n.loop), t && t.classList.add(n.slidePrevClass)), this.emitSlidesClasses()
                        },
                        updateActiveIndex: function(e) {
                            let t, r;
                            let i = this,
                                n = i.rtlTranslate ? i.translate : -i.translate,
                                {
                                    snapGrid: s,
                                    params: a,
                                    activeIndex: o,
                                    realIndex: l,
                                    snapIndex: d
                                } = i,
                                u = e,
                                c = e => {
                                    let t = e - i.virtual.slidesBefore;
                                    return t < 0 && (t = i.virtual.slides.length + t), t >= i.virtual.slides.length && (t -= i.virtual.slides.length), t
                                };
                            if (void 0 === u && (u = function(e) {
                                    let t;
                                    let {
                                        slidesGrid: r,
                                        params: i
                                    } = e, n = e.rtlTranslate ? e.translate : -e.translate;
                                    for (let e = 0; e < r.length; e += 1) void 0 !== r[e + 1] ? n >= r[e] && n < r[e + 1] - (r[e + 1] - r[e]) / 2 ? t = e : n >= r[e] && n < r[e + 1] && (t = e + 1) : n >= r[e] && (t = e);
                                    return i.normalizeSlideIndex && (t < 0 || void 0 === t) && (t = 0), t
                                }(i)), s.indexOf(n) >= 0) t = s.indexOf(n);
                            else {
                                let e = Math.min(a.slidesPerGroupSkip, u);
                                t = e + Math.floor((u - e) / a.slidesPerGroup)
                            }
                            if (t >= s.length && (t = s.length - 1), u === o && !i.params.loop) {
                                t !== d && (i.snapIndex = t, i.emit("snapIndexChange"));
                                return
                            }
                            if (u === o && i.params.loop && i.virtual && i.params.virtual.enabled) {
                                i.realIndex = c(u);
                                return
                            }
                            let f = i.grid && a.grid && a.grid.rows > 1;
                            if (i.virtual && a.virtual.enabled && a.loop) r = c(u);
                            else if (f) {
                                let e = i.slides.filter(e => e.column === u)[0],
                                    t = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
                                Number.isNaN(t) && (t = Math.max(i.slides.indexOf(e), 0)), r = Math.floor(t / a.grid.rows)
                            } else if (i.slides[u]) {
                                let e = i.slides[u].getAttribute("data-swiper-slide-index");
                                r = e ? parseInt(e, 10) : u
                            } else r = u;
                            Object.assign(i, {
                                previousSnapIndex: d,
                                snapIndex: t,
                                previousRealIndex: l,
                                realIndex: r,
                                previousIndex: o,
                                activeIndex: u
                            }), i.initialized && p(i), i.emit("activeIndexChange"), i.emit("snapIndexChange"), (i.initialized || i.params.runCallbacksOnInit) && (l !== r && i.emit("realIndexChange"), i.emit("slideChange"))
                        },
                        updateClickedSlide: function(e, t) {
                            let r;
                            let i = this.params,
                                n = e.closest(`.${i.slideClass}, swiper-slide`);
                            !n && this.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach(e => {
                                !n && e.matches && e.matches(`.${i.slideClass}, swiper-slide`) && (n = e)
                            });
                            let s = !1;
                            if (n) {
                                for (let e = 0; e < this.slides.length; e += 1)
                                    if (this.slides[e] === n) {
                                        s = !0, r = e;
                                        break
                                    }
                            }
                            if (n && s) this.clickedSlide = n, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(n.getAttribute("data-swiper-slide-index"), 10) : this.clickedIndex = r;
                            else {
                                this.clickedSlide = void 0, this.clickedIndex = void 0;
                                return
                            }
                            i.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
                        }
                    },
                    translate: {
                        getTranslate: function(e) {
                            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                            let {
                                params: t,
                                rtlTranslate: r,
                                translate: i,
                                wrapperEl: n
                            } = this;
                            if (t.virtualTranslate) return r ? -i : i;
                            if (t.cssMode) return i;
                            let s = (0, l.i)(n, e);
                            return s += this.cssOverflowAdjustment(), r && (s = -s), s || 0
                        },
                        setTranslate: function(e, t) {
                            let {
                                rtlTranslate: r,
                                params: i,
                                wrapperEl: n,
                                progress: s
                            } = this, a = 0, o = 0;
                            this.isHorizontal() ? a = r ? -e : e : o = e, i.roundLengths && (a = Math.floor(a), o = Math.floor(o)), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? a : o, i.cssMode ? n[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -a : -o : i.virtualTranslate || (this.isHorizontal() ? a -= this.cssOverflowAdjustment() : o -= this.cssOverflowAdjustment(), n.style.transform = `translate3d(${a}px, ${o}px, 0px)`);
                            let l = this.maxTranslate() - this.minTranslate();
                            (0 === l ? 0 : (e - this.minTranslate()) / l) !== s && this.updateProgress(e), this.emit("setTranslate", this.translate, t)
                        },
                        minTranslate: function() {
                            return -this.snapGrid[0]
                        },
                        maxTranslate: function() {
                            return -this.snapGrid[this.snapGrid.length - 1]
                        },
                        translateTo: function(e, t, r, i, n) {
                            let s;
                            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === r && (r = !0), void 0 === i && (i = !0);
                            let a = this,
                                {
                                    params: o,
                                    wrapperEl: d
                                } = a;
                            if (a.animating && o.preventInteractionOnTransition) return !1;
                            let u = a.minTranslate(),
                                c = a.maxTranslate();
                            if (s = i && e > u ? u : i && e < c ? c : e, a.updateProgress(s), o.cssMode) {
                                let e = a.isHorizontal();
                                if (0 === t) d[e ? "scrollLeft" : "scrollTop"] = -s;
                                else {
                                    if (!a.support.smoothScroll) return (0, l.q)({
                                        swiper: a,
                                        targetPosition: -s,
                                        side: e ? "left" : "top"
                                    }), !0;
                                    d.scrollTo({
                                        [e ? "left" : "top"]: -s,
                                        behavior: "smooth"
                                    })
                                }
                                return !0
                            }
                            return 0 === t ? (a.setTransition(0), a.setTranslate(s), r && (a.emit("beforeTransitionStart", t, n), a.emit("transitionEnd"))) : (a.setTransition(t), a.setTranslate(s), r && (a.emit("beforeTransitionStart", t, n), a.emit("transitionStart")), a.animating || (a.animating = !0, a.onTranslateToWrapperTransitionEnd || (a.onTranslateToWrapperTransitionEnd = function(e) {
                                a && !a.destroyed && e.target === this && (a.wrapperEl.removeEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.onTranslateToWrapperTransitionEnd = null, delete a.onTranslateToWrapperTransitionEnd, r && a.emit("transitionEnd"))
                            }), a.wrapperEl.addEventListener("transitionend", a.onTranslateToWrapperTransitionEnd))), !0
                        }
                    },
                    transition: {
                        setTransition: function(e, t) {
                            this.params.cssMode || (this.wrapperEl.style.transitionDuration = `${e}ms`, this.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""), this.emit("setTransition", e, t)
                        },
                        transitionStart: function(e, t) {
                            void 0 === e && (e = !0);
                            let {
                                params: r
                            } = this;
                            r.cssMode || (r.autoHeight && this.updateAutoHeight(), f({
                                swiper: this,
                                runCallbacks: e,
                                direction: t,
                                step: "Start"
                            }))
                        },
                        transitionEnd: function(e, t) {
                            void 0 === e && (e = !0);
                            let {
                                params: r
                            } = this;
                            this.animating = !1, r.cssMode || (this.setTransition(0), f({
                                swiper: this,
                                runCallbacks: e,
                                direction: t,
                                step: "End"
                            }))
                        }
                    },
                    slide: {
                        slideTo: function(e, t, r, i, n) {
                            let s;
                            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === r && (r = !0), "string" == typeof e && (e = parseInt(e, 10));
                            let a = this,
                                o = e;
                            o < 0 && (o = 0);
                            let {
                                params: d,
                                snapGrid: u,
                                slidesGrid: c,
                                previousIndex: p,
                                activeIndex: f,
                                rtlTranslate: h,
                                wrapperEl: m,
                                enabled: v
                            } = a;
                            if (a.animating && d.preventInteractionOnTransition || !v && !i && !n) return !1;
                            let g = Math.min(a.params.slidesPerGroupSkip, o),
                                y = g + Math.floor((o - g) / a.params.slidesPerGroup);
                            y >= u.length && (y = u.length - 1);
                            let b = -u[y];
                            if (d.normalizeSlideIndex)
                                for (let e = 0; e < c.length; e += 1) {
                                    let t = -Math.floor(100 * b),
                                        r = Math.floor(100 * c[e]),
                                        i = Math.floor(100 * c[e + 1]);
                                    void 0 !== c[e + 1] ? t >= r && t < i - (i - r) / 2 ? o = e : t >= r && t < i && (o = e + 1) : t >= r && (o = e)
                                }
                            if (a.initialized && o !== f && (!a.allowSlideNext && (h ? b > a.translate && b > a.minTranslate() : b < a.translate && b < a.minTranslate()) || !a.allowSlidePrev && b > a.translate && b > a.maxTranslate() && (f || 0) !== o)) return !1;
                            if (o !== (p || 0) && r && a.emit("beforeSlideChangeStart"), a.updateProgress(b), s = o > f ? "next" : o < f ? "prev" : "reset", h && -b === a.translate || !h && b === a.translate) return a.updateActiveIndex(o), d.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== d.effect && a.setTranslate(b), "reset" !== s && (a.transitionStart(r, s), a.transitionEnd(r, s)), !1;
                            if (d.cssMode) {
                                let e = a.isHorizontal(),
                                    r = h ? b : -b;
                                if (0 === t) {
                                    let t = a.virtual && a.params.virtual.enabled;
                                    t && (a.wrapperEl.style.scrollSnapType = "none", a._immediateVirtual = !0), t && !a._cssModeVirtualInitialSet && a.params.initialSlide > 0 ? (a._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
                                        m[e ? "scrollLeft" : "scrollTop"] = r
                                    })) : m[e ? "scrollLeft" : "scrollTop"] = r, t && requestAnimationFrame(() => {
                                        a.wrapperEl.style.scrollSnapType = "", a._immediateVirtual = !1
                                    })
                                } else {
                                    if (!a.support.smoothScroll) return (0, l.q)({
                                        swiper: a,
                                        targetPosition: r,
                                        side: e ? "left" : "top"
                                    }), !0;
                                    m.scrollTo({
                                        [e ? "left" : "top"]: r,
                                        behavior: "smooth"
                                    })
                                }
                                return !0
                            }
                            return a.setTransition(t), a.setTranslate(b), a.updateActiveIndex(o), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, i), a.transitionStart(r, s), 0 === t ? a.transitionEnd(r, s) : a.animating || (a.animating = !0, a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function(e) {
                                a && !a.destroyed && e.target === this && (a.wrapperEl.removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.onSlideToWrapperTransitionEnd = null, delete a.onSlideToWrapperTransitionEnd, a.transitionEnd(r, s))
                            }), a.wrapperEl.addEventListener("transitionend", a.onSlideToWrapperTransitionEnd)), !0
                        },
                        slideToLoop: function(e, t, r, i) {
                            if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === r && (r = !0), "string" == typeof e) {
                                let t = parseInt(e, 10);
                                e = t
                            }
                            let n = this,
                                s = n.grid && n.params.grid && n.params.grid.rows > 1,
                                a = e;
                            if (n.params.loop) {
                                if (n.virtual && n.params.virtual.enabled) a += n.virtual.slidesBefore;
                                else {
                                    let e;
                                    if (s) {
                                        let t = a * n.params.grid.rows;
                                        e = n.slides.filter(e => 1 * e.getAttribute("data-swiper-slide-index") === t)[0].column
                                    } else e = n.getSlideIndexByData(a);
                                    let t = s ? Math.ceil(n.slides.length / n.params.grid.rows) : n.slides.length,
                                        {
                                            centeredSlides: r
                                        } = n.params,
                                        i = n.params.slidesPerView;
                                    "auto" === i ? i = n.slidesPerViewDynamic() : (i = Math.ceil(parseFloat(n.params.slidesPerView, 10)), r && i % 2 == 0 && (i += 1));
                                    let o = t - e < i;
                                    if (r && (o = o || e < Math.ceil(i / 2)), o) {
                                        let i = r ? e < n.activeIndex ? "prev" : "next" : e - n.activeIndex - 1 < n.params.slidesPerView ? "next" : "prev";
                                        n.loopFix({
                                            direction: i,
                                            slideTo: !0,
                                            activeSlideIndex: "next" === i ? e + 1 : e - t + 1,
                                            slideRealIndex: "next" === i ? n.realIndex : void 0
                                        })
                                    }
                                    if (s) {
                                        let e = a * n.params.grid.rows;
                                        a = n.slides.filter(t => 1 * t.getAttribute("data-swiper-slide-index") === e)[0].column
                                    } else a = n.getSlideIndexByData(a)
                                }
                            }
                            return requestAnimationFrame(() => {
                                n.slideTo(a, t, r, i)
                            }), n
                        },
                        slideNext: function(e, t, r) {
                            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                            let i = this,
                                {
                                    enabled: n,
                                    params: s,
                                    animating: a
                                } = i;
                            if (!n) return i;
                            let o = s.slidesPerGroup;
                            "auto" === s.slidesPerView && 1 === s.slidesPerGroup && s.slidesPerGroupAuto && (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
                            let l = i.activeIndex < s.slidesPerGroupSkip ? 1 : o,
                                d = i.virtual && s.virtual.enabled;
                            if (s.loop) {
                                if (a && !d && s.loopPreventsSliding) return !1;
                                if (i.loopFix({
                                        direction: "next"
                                    }), i._clientLeft = i.wrapperEl.clientLeft, i.activeIndex === i.slides.length - 1 && s.cssMode) return requestAnimationFrame(() => {
                                    i.slideTo(i.activeIndex + l, e, t, r)
                                }), !0
                            }
                            return s.rewind && i.isEnd ? i.slideTo(0, e, t, r) : i.slideTo(i.activeIndex + l, e, t, r)
                        },
                        slidePrev: function(e, t, r) {
                            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                            let i = this,
                                {
                                    params: n,
                                    snapGrid: s,
                                    slidesGrid: a,
                                    rtlTranslate: o,
                                    enabled: l,
                                    animating: d
                                } = i;
                            if (!l) return i;
                            let u = i.virtual && n.virtual.enabled;
                            if (n.loop) {
                                if (d && !u && n.loopPreventsSliding) return !1;
                                i.loopFix({
                                    direction: "prev"
                                }), i._clientLeft = i.wrapperEl.clientLeft
                            }
                            let c = o ? i.translate : -i.translate;

                            function p(e) {
                                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                            }
                            let f = p(c),
                                h = s.map(e => p(e)),
                                m = s[h.indexOf(f) - 1];
                            if (void 0 === m && n.cssMode) {
                                let e;
                                s.forEach((t, r) => {
                                    f >= t && (e = r)
                                }), void 0 !== e && (m = s[e > 0 ? e - 1 : e])
                            }
                            let v = 0;
                            if (void 0 !== m && ((v = a.indexOf(m)) < 0 && (v = i.activeIndex - 1), "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (v = Math.max(v = v - i.slidesPerViewDynamic("previous", !0) + 1, 0))), n.rewind && i.isBeginning) {
                                let n = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
                                return i.slideTo(n, e, t, r)
                            }
                            return n.loop && 0 === i.activeIndex && n.cssMode ? (requestAnimationFrame(() => {
                                i.slideTo(v, e, t, r)
                            }), !0) : i.slideTo(v, e, t, r)
                        },
                        slideReset: function(e, t, r) {
                            return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, r)
                        },
                        slideToClosest: function(e, t, r, i) {
                            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === i && (i = .5);
                            let n = this.activeIndex,
                                s = Math.min(this.params.slidesPerGroupSkip, n),
                                a = s + Math.floor((n - s) / this.params.slidesPerGroup),
                                o = this.rtlTranslate ? this.translate : -this.translate;
                            if (o >= this.snapGrid[a]) {
                                let e = this.snapGrid[a],
                                    t = this.snapGrid[a + 1];
                                o - e > (t - e) * i && (n += this.params.slidesPerGroup)
                            } else {
                                let e = this.snapGrid[a - 1],
                                    t = this.snapGrid[a];
                                o - e <= (t - e) * i && (n -= this.params.slidesPerGroup)
                            }
                            return n = Math.min(n = Math.max(n, 0), this.slidesGrid.length - 1), this.slideTo(n, e, t, r)
                        },
                        slideToClickedSlide: function() {
                            let e;
                            let t = this,
                                {
                                    params: r,
                                    slidesEl: i
                                } = t,
                                n = "auto" === r.slidesPerView ? t.slidesPerViewDynamic() : r.slidesPerView,
                                s = t.clickedIndex,
                                a = t.isElement ? "swiper-slide" : `.${r.slideClass}`;
                            if (r.loop) {
                                if (t.animating) return;
                                e = parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"), 10), r.centeredSlides ? s < t.loopedSlides - n / 2 || s > t.slides.length - t.loopedSlides + n / 2 ? (t.loopFix(), s = t.getSlideIndex((0, l.e)(i, `${a}[data-swiper-slide-index="${e}"]`)[0]), (0, l.n)(() => {
                                    t.slideTo(s)
                                })) : t.slideTo(s) : s > t.slides.length - n ? (t.loopFix(), s = t.getSlideIndex((0, l.e)(i, `${a}[data-swiper-slide-index="${e}"]`)[0]), (0, l.n)(() => {
                                    t.slideTo(s)
                                })) : t.slideTo(s)
                            } else t.slideTo(s)
                        }
                    },
                    loop: {
                        loopCreate: function(e) {
                            let t = this,
                                {
                                    params: r,
                                    slidesEl: i
                                } = t;
                            if (!r.loop || t.virtual && t.params.virtual.enabled) return;
                            let n = () => {
                                    let e = (0, l.e)(i, `.${r.slideClass}, swiper-slide`);
                                    e.forEach((e, t) => {
                                        e.setAttribute("data-swiper-slide-index", t)
                                    })
                                },
                                s = t.grid && r.grid && r.grid.rows > 1,
                                a = r.slidesPerGroup * (s ? r.grid.rows : 1),
                                o = t.slides.length % a != 0,
                                d = s && t.slides.length % r.grid.rows != 0,
                                u = e => {
                                    for (let i = 0; i < e; i += 1) {
                                        let e = t.isElement ? (0, l.c)("swiper-slide", [r.slideBlankClass]) : (0, l.c)("div", [r.slideClass, r.slideBlankClass]);
                                        t.slidesEl.append(e)
                                    }
                                };
                            if (o) {
                                if (r.loopAddBlankSlides) {
                                    let e = a - t.slides.length % a;
                                    u(e), t.recalcSlides(), t.updateSlides()
                                } else(0, l.r)("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
                                n()
                            } else if (d) {
                                if (r.loopAddBlankSlides) {
                                    let e = r.grid.rows - t.slides.length % r.grid.rows;
                                    u(e), t.recalcSlides(), t.updateSlides()
                                } else(0, l.r)("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
                                n()
                            } else n();
                            t.loopFix({
                                slideRealIndex: e,
                                direction: r.centeredSlides ? void 0 : "next"
                            })
                        },
                        loopFix: function(e) {
                            let {
                                slideRealIndex: t,
                                slideTo: r = !0,
                                direction: i,
                                setTranslate: n,
                                activeSlideIndex: s,
                                byController: a,
                                byMousewheel: o
                            } = void 0 === e ? {} : e, d = this;
                            if (!d.params.loop) return;
                            d.emit("beforeLoopFix");
                            let {
                                slides: u,
                                allowSlidePrev: c,
                                allowSlideNext: p,
                                slidesEl: f,
                                params: h
                            } = d, {
                                centeredSlides: m
                            } = h;
                            if (d.allowSlidePrev = !0, d.allowSlideNext = !0, d.virtual && h.virtual.enabled) {
                                r && (h.centeredSlides || 0 !== d.snapIndex ? h.centeredSlides && d.snapIndex < h.slidesPerView ? d.slideTo(d.virtual.slides.length + d.snapIndex, 0, !1, !0) : d.snapIndex === d.snapGrid.length - 1 && d.slideTo(d.virtual.slidesBefore, 0, !1, !0) : d.slideTo(d.virtual.slides.length, 0, !1, !0)), d.allowSlidePrev = c, d.allowSlideNext = p, d.emit("loopFix");
                                return
                            }
                            let v = h.slidesPerView;
                            "auto" === v ? v = d.slidesPerViewDynamic() : (v = Math.ceil(parseFloat(h.slidesPerView, 10)), m && v % 2 == 0 && (v += 1));
                            let g = h.slidesPerGroupAuto ? v : h.slidesPerGroup,
                                y = g;
                            y % g != 0 && (y += g - y % g), y += h.loopAdditionalSlides, d.loopedSlides = y;
                            let b = d.grid && h.grid && h.grid.rows > 1;
                            u.length < v + y ? (0, l.r)("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : b && "row" === h.grid.fill && (0, l.r)("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
                            let w = [],
                                S = [],
                                x = d.activeIndex;
                            void 0 === s ? s = d.getSlideIndex(u.filter(e => e.classList.contains(h.slideActiveClass))[0]) : x = s;
                            let T = "next" === i || !i,
                                E = "prev" === i || !i,
                                _ = 0,
                                C = 0,
                                P = b ? Math.ceil(u.length / h.grid.rows) : u.length,
                                O = b ? u[s].column : s,
                                M = O + (m && void 0 === n ? -v / 2 + .5 : 0);
                            if (M < y) {
                                _ = Math.max(y - M, g);
                                for (let e = 0; e < y - M; e += 1) {
                                    let t = e - Math.floor(e / P) * P;
                                    if (b) {
                                        let e = P - t - 1;
                                        for (let t = u.length - 1; t >= 0; t -= 1) u[t].column === e && w.push(t)
                                    } else w.push(P - t - 1)
                                }
                            } else if (M + v > P - y) {
                                C = Math.max(M - (P - 2 * y), g);
                                for (let e = 0; e < C; e += 1) {
                                    let t = e - Math.floor(e / P) * P;
                                    b ? u.forEach((e, r) => {
                                        e.column === t && S.push(r)
                                    }) : S.push(t)
                                }
                            }
                            if (d.__preventObserver__ = !0, requestAnimationFrame(() => {
                                    d.__preventObserver__ = !1
                                }), E && w.forEach(e => {
                                    u[e].swiperLoopMoveDOM = !0, f.prepend(u[e]), u[e].swiperLoopMoveDOM = !1
                                }), T && S.forEach(e => {
                                    u[e].swiperLoopMoveDOM = !0, f.append(u[e]), u[e].swiperLoopMoveDOM = !1
                                }), d.recalcSlides(), "auto" === h.slidesPerView ? d.updateSlides() : b && (w.length > 0 && E || S.length > 0 && T) && d.slides.forEach((e, t) => {
                                    d.grid.updateSlide(t, e, d.slides)
                                }), h.watchSlidesProgress && d.updateSlidesOffset(), r) {
                                if (w.length > 0 && E) {
                                    if (void 0 === t) {
                                        let e = d.slidesGrid[x],
                                            t = d.slidesGrid[x + _],
                                            r = t - e;
                                        o ? d.setTranslate(d.translate - r) : (d.slideTo(x + _, 0, !1, !0), n && (d.touchEventsData.startTranslate = d.touchEventsData.startTranslate - r, d.touchEventsData.currentTranslate = d.touchEventsData.currentTranslate - r))
                                    } else if (n) {
                                        let e = b ? w.length / h.grid.rows : w.length;
                                        d.slideTo(d.activeIndex + e, 0, !1, !0), d.touchEventsData.currentTranslate = d.translate
                                    }
                                } else if (S.length > 0 && T) {
                                    if (void 0 === t) {
                                        let e = d.slidesGrid[x],
                                            t = d.slidesGrid[x - C],
                                            r = t - e;
                                        o ? d.setTranslate(d.translate - r) : (d.slideTo(x - C, 0, !1, !0), n && (d.touchEventsData.startTranslate = d.touchEventsData.startTranslate - r, d.touchEventsData.currentTranslate = d.touchEventsData.currentTranslate - r))
                                    } else {
                                        let e = b ? S.length / h.grid.rows : S.length;
                                        d.slideTo(d.activeIndex - e, 0, !1, !0)
                                    }
                                }
                            }
                            if (d.allowSlidePrev = c, d.allowSlideNext = p, d.controller && d.controller.control && !a) {
                                let e = {
                                    slideRealIndex: t,
                                    direction: i,
                                    setTranslate: n,
                                    activeSlideIndex: s,
                                    byController: !0
                                };
                                Array.isArray(d.controller.control) ? d.controller.control.forEach(t => {
                                    !t.destroyed && t.params.loop && t.loopFix({ ...e,
                                        slideTo: t.params.slidesPerView === h.slidesPerView && r
                                    })
                                }) : d.controller.control instanceof d.constructor && d.controller.control.params.loop && d.controller.control.loopFix({ ...e,
                                    slideTo: d.controller.control.params.slidesPerView === h.slidesPerView && r
                                })
                            }
                            d.emit("loopFix")
                        },
                        loopDestroy: function() {
                            let {
                                params: e,
                                slidesEl: t
                            } = this;
                            if (!e.loop || this.virtual && this.params.virtual.enabled) return;
                            this.recalcSlides();
                            let r = [];
                            this.slides.forEach(e => {
                                let t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
                                r[t] = e
                            }), this.slides.forEach(e => {
                                e.removeAttribute("data-swiper-slide-index")
                            }), r.forEach(e => {
                                t.append(e)
                            }), this.recalcSlides(), this.slideTo(this.realIndex, 0)
                        }
                    },
                    grabCursor: {
                        setGrabCursor: function(e) {
                            let t = this;
                            if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                            let r = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                            t.isElement && (t.__preventObserver__ = !0), r.style.cursor = "move", r.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame(() => {
                                t.__preventObserver__ = !1
                            })
                        },
                        unsetGrabCursor: function() {
                            let e = this;
                            e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame(() => {
                                e.__preventObserver__ = !1
                            }))
                        }
                    },
                    events: {
                        attachEvents: function() {
                            let {
                                params: e
                            } = this;
                            this.onTouchStart = m.bind(this), this.onTouchMove = v.bind(this), this.onTouchEnd = g.bind(this), this.onDocumentTouchStart = x.bind(this), e.cssMode && (this.onScroll = w.bind(this)), this.onClick = b.bind(this), this.onLoad = S.bind(this), T(this, "on")
                        },
                        detachEvents: function() {
                            T(this, "off")
                        }
                    },
                    breakpoints: {
                        setBreakpoint: function() {
                            let e = this,
                                {
                                    realIndex: t,
                                    initialized: r,
                                    params: i,
                                    el: n
                                } = e,
                                s = i.breakpoints;
                            if (!s || s && 0 === Object.keys(s).length) return;
                            let a = e.getBreakpoint(s, e.params.breakpointsBase, e.el);
                            if (!a || e.currentBreakpoint === a) return;
                            let o = a in s ? s[a] : void 0,
                                d = o || e.originalParams,
                                u = E(e, i),
                                c = E(e, d),
                                p = i.enabled;
                            u && !c ? (n.classList.remove(`${i.containerModifierClass}grid`, `${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !u && c && (n.classList.add(`${i.containerModifierClass}grid`), (d.grid.fill && "column" === d.grid.fill || !d.grid.fill && "column" === i.grid.fill) && n.classList.add(`${i.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach(t => {
                                if (void 0 === d[t]) return;
                                let r = i[t] && i[t].enabled,
                                    n = d[t] && d[t].enabled;
                                r && !n && e[t].disable(), !r && n && e[t].enable()
                            });
                            let f = d.direction && d.direction !== i.direction,
                                h = i.loop && (d.slidesPerView !== i.slidesPerView || f),
                                m = i.loop;
                            f && r && e.changeDirection(), (0, l.t)(e.params, d);
                            let v = e.params.enabled,
                                g = e.params.loop;
                            Object.assign(e, {
                                allowTouchMove: e.params.allowTouchMove,
                                allowSlideNext: e.params.allowSlideNext,
                                allowSlidePrev: e.params.allowSlidePrev
                            }), p && !v ? e.disable() : !p && v && e.enable(), e.currentBreakpoint = a, e.emit("_beforeBreakpoint", d), r && (h ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !m && g ? (e.loopCreate(t), e.updateSlides()) : m && !g && e.loopDestroy()), e.emit("breakpoint", d)
                        },
                        getBreakpoint: function(e, t, r) {
                            if (void 0 === t && (t = "window"), !e || "container" === t && !r) return;
                            let i = !1,
                                n = (0, o.a)(),
                                s = "window" === t ? n.innerHeight : r.clientHeight,
                                a = Object.keys(e).map(e => {
                                    if ("string" == typeof e && 0 === e.indexOf("@")) {
                                        let t = parseFloat(e.substr(1));
                                        return {
                                            value: s * t,
                                            point: e
                                        }
                                    }
                                    return {
                                        value: e,
                                        point: e
                                    }
                                });
                            a.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
                            for (let e = 0; e < a.length; e += 1) {
                                let {
                                    point: s,
                                    value: o
                                } = a[e];
                                "window" === t ? n.matchMedia(`(min-width: ${o}px)`).matches && (i = s) : o <= r.clientWidth && (i = s)
                            }
                            return i || "max"
                        }
                    },
                    checkOverflow: {
                        checkOverflow: function() {
                            let {
                                isLocked: e,
                                params: t
                            } = this, {
                                slidesOffsetBefore: r
                            } = t;
                            if (r) {
                                let e = this.slides.length - 1,
                                    t = this.slidesGrid[e] + this.slidesSizesGrid[e] + 2 * r;
                                this.isLocked = this.size > t
                            } else this.isLocked = 1 === this.snapGrid.length;
                            !0 === t.allowSlideNext && (this.allowSlideNext = !this.isLocked), !0 === t.allowSlidePrev && (this.allowSlidePrev = !this.isLocked), e && e !== this.isLocked && (this.isEnd = !1), e !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock")
                        }
                    },
                    classes: {
                        addClasses: function() {
                            let {
                                classNames: e,
                                params: t,
                                rtl: r,
                                el: i,
                                device: n
                            } = this, s = function(e, t) {
                                let r = [];
                                return e.forEach(e => {
                                    "object" == typeof e ? Object.keys(e).forEach(i => {
                                        e[i] && r.push(t + i)
                                    }) : "string" == typeof e && r.push(t + e)
                                }), r
                            }(["initialized", t.direction, {
                                "free-mode": this.params.freeMode && t.freeMode.enabled
                            }, {
                                autoheight: t.autoHeight
                            }, {
                                rtl: r
                            }, {
                                grid: t.grid && t.grid.rows > 1
                            }, {
                                "grid-column": t.grid && t.grid.rows > 1 && "column" === t.grid.fill
                            }, {
                                android: n.android
                            }, {
                                ios: n.ios
                            }, {
                                "css-mode": t.cssMode
                            }, {
                                centered: t.cssMode && t.centeredSlides
                            }, {
                                "watch-progress": t.watchSlidesProgress
                            }], t.containerModifierClass);
                            e.push(...s), i.classList.add(...e), this.emitContainerClasses()
                        },
                        removeClasses: function() {
                            let {
                                el: e,
                                classNames: t
                            } = this;
                            e.classList.remove(...t), this.emitContainerClasses()
                        }
                    }
                },
                P = {};
            class O {
                constructor() {
                    let e, t;
                    for (var r, i = arguments.length, a = Array(i), u = 0; u < i; u++) a[u] = arguments[u];
                    1 === a.length && a[0].constructor && "Object" === Object.prototype.toString.call(a[0]).slice(8, -1) ? t = a[0] : [e, t] = a, t || (t = {}), t = (0, l.t)({}, t), e && !t.el && (t.el = e);
                    let c = (0, o.g)();
                    if (t.el && "string" == typeof t.el && c.querySelectorAll(t.el).length > 1) {
                        let e = [];
                        return c.querySelectorAll(t.el).forEach(r => {
                            let i = (0, l.t)({}, t, {
                                el: r
                            });
                            e.push(new O(i))
                        }), e
                    }
                    let p = this;
                    p.__swiper__ = !0, p.support = d(), p.device = (r = {
                        userAgent: t.userAgent
                    }, n || (n = function(e) {
                        let {
                            userAgent: t
                        } = void 0 === e ? {} : e, r = d(), i = (0, o.a)(), n = i.navigator.platform, s = t || i.navigator.userAgent, a = {
                            ios: !1,
                            android: !1
                        }, l = i.screen.width, u = i.screen.height, c = s.match(/(Android);?[\s\/]+([\d.]+)?/), p = s.match(/(iPad).*OS\s([\d_]+)/), f = s.match(/(iPod)(.*OS\s([\d_]+))?/), h = !p && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/), m = "MacIntel" === n;
                        return !p && m && r.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${l}x${u}`) >= 0 && ((p = s.match(/(Version)\/([\d.]+)/)) || (p = [0, 1, "13_0_0"]), m = !1), c && "Win32" !== n && (a.os = "android", a.android = !0), (p || h || f) && (a.os = "ios", a.ios = !0), a
                    }(r)), n), p.browser = (s || (s = function() {
                        let e = (0, o.a)(),
                            t = !1;

                        function r() {
                            let t = e.navigator.userAgent.toLowerCase();
                            return t.indexOf("safari") >= 0 && 0 > t.indexOf("chrome") && 0 > t.indexOf("android")
                        }
                        if (r()) {
                            let r = String(e.navigator.userAgent);
                            if (r.includes("Version/")) {
                                let [e, i] = r.split("Version/")[1].split(" ")[0].split(".").map(e => Number(e));
                                t = e < 16 || 16 === e && i < 2
                            }
                        }
                        return {
                            isSafari: t || r(),
                            needPerspectiveFix: t,
                            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
                        }
                    }()), s), p.eventsListeners = {}, p.eventsAnyListeners = [], p.modules = [...p.__modules__], t.modules && Array.isArray(t.modules) && p.modules.push(...t.modules);
                    let f = {};
                    p.modules.forEach(e => {
                        var r;
                        e({
                            params: t,
                            swiper: p,
                            extendParams: (r = t, function(e) {
                                void 0 === e && (e = {});
                                let t = Object.keys(e)[0],
                                    i = e[t];
                                if ("object" != typeof i || null === i || (!0 === r[t] && (r[t] = {
                                        enabled: !0
                                    }), "navigation" === t && r[t] && r[t].enabled && !r[t].prevEl && !r[t].nextEl && (r[t].auto = !0), ["pagination", "scrollbar"].indexOf(t) >= 0 && r[t] && r[t].enabled && !r[t].el && (r[t].auto = !0), !(t in r && "enabled" in i))) {
                                    (0, l.t)(f, e);
                                    return
                                }
                                "object" != typeof r[t] || "enabled" in r[t] || (r[t].enabled = !0), r[t] || (r[t] = {
                                    enabled: !1
                                }), (0, l.t)(f, e)
                            }),
                            on: p.on.bind(p),
                            once: p.once.bind(p),
                            off: p.off.bind(p),
                            emit: p.emit.bind(p)
                        })
                    });
                    let h = (0, l.t)({}, _, f);
                    return p.params = (0, l.t)({}, h, P, t), p.originalParams = (0, l.t)({}, p.params), p.passedParams = (0, l.t)({}, t), p.params && p.params.on && Object.keys(p.params.on).forEach(e => {
                        p.on(e, p.params.on[e])
                    }), p.params && p.params.onAny && p.onAny(p.params.onAny), Object.assign(p, {
                        enabled: p.params.enabled,
                        el: e,
                        classNames: [],
                        slides: [],
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: () => "horizontal" === p.params.direction,
                        isVertical: () => "vertical" === p.params.direction,
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        cssOverflowAdjustment() {
                            return 8388608 * Math.trunc(this.translate / 8388608)
                        },
                        allowSlideNext: p.params.allowSlideNext,
                        allowSlidePrev: p.params.allowSlidePrev,
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            focusableElements: p.params.focusableElements,
                            lastClickTime: 0,
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            startMoving: void 0,
                            pointerId: null,
                            touchId: null
                        },
                        allowClick: !0,
                        allowTouchMove: p.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), p.emit("_swiper"), p.params.init && p.init(), p
                }
                getDirectionLabel(e) {
                    return this.isHorizontal() ? e : ({
                        width: "height",
                        "margin-top": "margin-left",
                        "margin-bottom ": "margin-right",
                        "margin-left": "margin-top",
                        "margin-right": "margin-bottom",
                        "padding-left": "padding-top",
                        "padding-right": "padding-bottom",
                        marginRight: "marginBottom"
                    })[e]
                }
                getSlideIndex(e) {
                    let {
                        slidesEl: t,
                        params: r
                    } = this, i = (0, l.e)(t, `.${r.slideClass}, swiper-slide`), n = (0, l.g)(i[0]);
                    return (0, l.g)(e) - n
                }
                getSlideIndexByData(e) {
                    return this.getSlideIndex(this.slides.filter(t => 1 * t.getAttribute("data-swiper-slide-index") === e)[0])
                }
                recalcSlides() {
                    let {
                        slidesEl: e,
                        params: t
                    } = this;
                    this.slides = (0, l.e)(e, `.${t.slideClass}, swiper-slide`)
                }
                enable() {
                    this.enabled || (this.enabled = !0, this.params.grabCursor && this.setGrabCursor(), this.emit("enable"))
                }
                disable() {
                    this.enabled && (this.enabled = !1, this.params.grabCursor && this.unsetGrabCursor(), this.emit("disable"))
                }
                setProgress(e, t) {
                    e = Math.min(Math.max(e, 0), 1);
                    let r = this.minTranslate(),
                        i = this.maxTranslate(),
                        n = (i - r) * e + r;
                    this.translateTo(n, void 0 === t ? 0 : t), this.updateActiveIndex(), this.updateSlidesClasses()
                }
                emitContainerClasses() {
                    let e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    let t = e.el.className.split(" ").filter(t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass));
                    e.emit("_containerClasses", t.join(" "))
                }
                getSlideClasses(e) {
                    let t = this;
                    return t.destroyed ? "" : e.className.split(" ").filter(e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)).join(" ")
                }
                emitSlidesClasses() {
                    let e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    let t = [];
                    e.slides.forEach(r => {
                        let i = e.getSlideClasses(r);
                        t.push({
                            slideEl: r,
                            classNames: i
                        }), e.emit("_slideClass", r, i)
                    }), e.emit("_slideClasses", t)
                }
                slidesPerViewDynamic(e, t) {
                    void 0 === e && (e = "current"), void 0 === t && (t = !1);
                    let {
                        params: r,
                        slides: i,
                        slidesGrid: n,
                        slidesSizesGrid: s,
                        size: a,
                        activeIndex: o
                    } = this, l = 1;
                    if ("number" == typeof r.slidesPerView) return r.slidesPerView;
                    if (r.centeredSlides) {
                        let e, t = i[o] ? i[o].swiperSlideSize : 0;
                        for (let r = o + 1; r < i.length; r += 1) i[r] && !e && (t += i[r].swiperSlideSize, l += 1, t > a && (e = !0));
                        for (let r = o - 1; r >= 0; r -= 1) i[r] && !e && (t += i[r].swiperSlideSize, l += 1, t > a && (e = !0))
                    } else if ("current" === e)
                        for (let e = o + 1; e < i.length; e += 1) {
                            let r = t ? n[e] + s[e] - n[o] < a : n[e] - n[o] < a;
                            r && (l += 1)
                        } else
                            for (let e = o - 1; e >= 0; e -= 1) {
                                let t = n[o] - n[e] < a;
                                t && (l += 1)
                            }
                    return l
                }
                update() {
                    let e;
                    let t = this;
                    if (!t || t.destroyed) return;
                    let {
                        snapGrid: r,
                        params: i
                    } = t;

                    function n() {
                        let e = t.rtlTranslate ? -1 * t.translate : t.translate,
                            r = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
                        t.setTranslate(r), t.updateActiveIndex(), t.updateSlidesClasses()
                    }
                    if (i.breakpoints && t.setBreakpoint(), [...t.el.querySelectorAll('[loading="lazy"]')].forEach(e => {
                            e.complete && u(t, e)
                        }), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), i.freeMode && i.freeMode.enabled && !i.cssMode) n(), i.autoHeight && t.updateAutoHeight();
                    else {
                        if (("auto" === i.slidesPerView || i.slidesPerView > 1) && t.isEnd && !i.centeredSlides) {
                            let r = t.virtual && i.virtual.enabled ? t.virtual.slides : t.slides;
                            e = t.slideTo(r.length - 1, 0, !1, !0)
                        } else e = t.slideTo(t.activeIndex, 0, !1, !0);
                        e || n()
                    }
                    i.watchOverflow && r !== t.snapGrid && t.checkOverflow(), t.emit("update")
                }
                changeDirection(e, t) {
                    void 0 === t && (t = !0);
                    let r = this.params.direction;
                    return e || (e = "horizontal" === r ? "vertical" : "horizontal"), e === r || "horizontal" !== e && "vertical" !== e || (this.el.classList.remove(`${this.params.containerModifierClass}${r}`), this.el.classList.add(`${this.params.containerModifierClass}${e}`), this.emitContainerClasses(), this.params.direction = e, this.slides.forEach(t => {
                        "vertical" === e ? t.style.width = "" : t.style.height = ""
                    }), this.emit("changeDirection"), t && this.update()), this
                }
                changeLanguageDirection(e) {
                    (!this.rtl || "rtl" !== e) && (this.rtl || "ltr" !== e) && (this.rtl = "rtl" === e, this.rtlTranslate = "horizontal" === this.params.direction && this.rtl, this.rtl ? (this.el.classList.add(`${this.params.containerModifierClass}rtl`), this.el.dir = "rtl") : (this.el.classList.remove(`${this.params.containerModifierClass}rtl`), this.el.dir = "ltr"), this.update())
                }
                mount(e) {
                    let t = this;
                    if (t.mounted) return !0;
                    let r = e || t.params.el;
                    if ("string" == typeof r && (r = document.querySelector(r)), !r) return !1;
                    r.swiper = t, r.parentNode && r.parentNode.host && "SWIPER-CONTAINER" === r.parentNode.host.nodeName && (t.isElement = !0);
                    let i = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`,
                        n = (() => {
                            if (r && r.shadowRoot && r.shadowRoot.querySelector) {
                                let e = r.shadowRoot.querySelector(i());
                                return e
                            }
                            return (0, l.e)(r, i())[0]
                        })();
                    return !n && t.params.createElements && (n = (0, l.c)("div", t.params.wrapperClass), r.append(n), (0, l.e)(r, `.${t.params.slideClass}`).forEach(e => {
                        n.append(e)
                    })), Object.assign(t, {
                        el: r,
                        wrapperEl: n,
                        slidesEl: t.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : n,
                        hostEl: t.isElement ? r.parentNode.host : r,
                        mounted: !0,
                        rtl: "rtl" === r.dir.toLowerCase() || "rtl" === (0, l.m)(r, "direction"),
                        rtlTranslate: "horizontal" === t.params.direction && ("rtl" === r.dir.toLowerCase() || "rtl" === (0, l.m)(r, "direction")),
                        wrongRTL: "-webkit-box" === (0, l.m)(n, "display")
                    }), !0
                }
                init(e) {
                    let t = this;
                    if (t.initialized) return t;
                    let r = t.mount(e);
                    if (!1 === r) return t;
                    t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
                    let i = [...t.el.querySelectorAll('[loading="lazy"]')];
                    return t.isElement && i.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), i.forEach(e => {
                        e.complete ? u(t, e) : e.addEventListener("load", e => {
                            u(t, e.target)
                        })
                    }), p(t), t.initialized = !0, p(t), t.emit("init"), t.emit("afterInit"), t
                }
                destroy(e, t) {
                    void 0 === e && (e = !0), void 0 === t && (t = !0);
                    let r = this,
                        {
                            params: i,
                            el: n,
                            wrapperEl: s,
                            slides: a
                        } = r;
                    return void 0 === r.params || r.destroyed || (r.emit("beforeDestroy"), r.initialized = !1, r.detachEvents(), i.loop && r.loopDestroy(), t && (r.removeClasses(), n.removeAttribute("style"), s.removeAttribute("style"), a && a.length && a.forEach(e => {
                        e.classList.remove(i.slideVisibleClass, i.slideFullyVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
                    })), r.emit("destroy"), Object.keys(r.eventsListeners).forEach(e => {
                        r.off(e)
                    }), !1 !== e && (r.el.swiper = null, (0, l.u)(r)), r.destroyed = !0), null
                }
                static extendDefaults(e) {
                    (0, l.t)(P, e)
                }
                static get extendedDefaults() {
                    return P
                }
                static get defaults() {
                    return _
                }
                static installModule(e) {
                    O.prototype.__modules__ || (O.prototype.__modules__ = []);
                    let t = O.prototype.__modules__;
                    "function" == typeof e && 0 > t.indexOf(e) && t.push(e)
                }
                static use(e) {
                    return Array.isArray(e) ? e.forEach(e => O.installModule(e)) : O.installModule(e), O
                }
            }
            Object.keys(C).forEach(e => {
                Object.keys(C[e]).forEach(t => {
                    O.prototype[t] = C[e][t]
                })
            }), O.use([function(e) {
                let {
                    swiper: t,
                    on: r,
                    emit: i
                } = e, n = (0, o.a)(), s = null, a = null, l = () => {
                    t && !t.destroyed && t.initialized && (i("beforeResize"), i("resize"))
                }, d = () => {
                    t && !t.destroyed && t.initialized && (s = new ResizeObserver(e => {
                        a = n.requestAnimationFrame(() => {
                            let {
                                width: r,
                                height: i
                            } = t, n = r, s = i;
                            e.forEach(e => {
                                let {
                                    contentBoxSize: r,
                                    contentRect: i,
                                    target: a
                                } = e;
                                a && a !== t.el || (n = i ? i.width : (r[0] || r).inlineSize, s = i ? i.height : (r[0] || r).blockSize)
                            }), (n !== r || s !== i) && l()
                        })
                    })).observe(t.el)
                }, u = () => {
                    a && n.cancelAnimationFrame(a), s && s.unobserve && t.el && (s.unobserve(t.el), s = null)
                }, c = () => {
                    t && !t.destroyed && t.initialized && i("orientationchange")
                };
                r("init", () => {
                    if (t.params.resizeObserver && void 0 !== n.ResizeObserver) {
                        d();
                        return
                    }
                    n.addEventListener("resize", l), n.addEventListener("orientationchange", c)
                }), r("destroy", () => {
                    u(), n.removeEventListener("resize", l), n.removeEventListener("orientationchange", c)
                })
            }, function(e) {
                let {
                    swiper: t,
                    extendParams: r,
                    on: i,
                    emit: n
                } = e, s = [], a = (0, o.a)(), d = function(e, r) {
                    void 0 === r && (r = {});
                    let i = a.MutationObserver || a.WebkitMutationObserver,
                        o = new i(e => {
                            if (t.__preventObserver__) return;
                            if (1 === e.length) {
                                n("observerUpdate", e[0]);
                                return
                            }
                            let r = function() {
                                n("observerUpdate", e[0])
                            };
                            a.requestAnimationFrame ? a.requestAnimationFrame(r) : a.setTimeout(r, 0)
                        });
                    o.observe(e, {
                        attributes: void 0 === r.attributes || r.attributes,
                        childList: void 0 === r.childList || r.childList,
                        characterData: void 0 === r.characterData || r.characterData
                    }), s.push(o)
                };
                r({
                    observer: !1,
                    observeParents: !1,
                    observeSlideChildren: !1
                }), i("init", () => {
                    if (t.params.observer) {
                        if (t.params.observeParents) {
                            let e = (0, l.a)(t.hostEl);
                            for (let t = 0; t < e.length; t += 1) d(e[t])
                        }
                        d(t.hostEl, {
                            childList: t.params.observeSlideChildren
                        }), d(t.wrapperEl, {
                            attributes: !1
                        })
                    }
                }), i("destroy", () => {
                    s.forEach(e => {
                        e.disconnect()
                    }), s.splice(0, s.length)
                })
            }]);
            let M = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "breakpointsBase", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopAdditionalSlides", "loopAddBlankSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideFullyVisibleClass", "slideNextClass", "slidePrevClass", "slideBlankClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];

            function k(e) {
                return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1) && !e.__swiper__
            }

            function A(e, t) {
                let r = ["__proto__", "constructor", "prototype"];
                Object.keys(t).filter(e => 0 > r.indexOf(e)).forEach(r => {
                    void 0 === e[r] ? e[r] = t[r] : k(t[r]) && k(e[r]) && Object.keys(t[r]).length > 0 ? t[r].__swiper__ ? e[r] = t[r] : A(e[r], t[r]) : e[r] = t[r]
                })
            }

            function j(e) {
                return void 0 === e && (e = {}), e.navigation && void 0 === e.navigation.nextEl && void 0 === e.navigation.prevEl
            }

            function L(e) {
                return void 0 === e && (e = {}), e.pagination && void 0 === e.pagination.el
            }

            function I(e) {
                return void 0 === e && (e = {}), e.scrollbar && void 0 === e.scrollbar.el
            }

            function z(e) {
                void 0 === e && (e = "");
                let t = e.split(" ").map(e => e.trim()).filter(e => !!e),
                    r = [];
                return t.forEach(e => {
                    0 > r.indexOf(e) && r.push(e)
                }), r.join(" ")
            }
            let N = e => {
                e && !e.destroyed && e.params.virtual && (!e.params.virtual || e.params.virtual.enabled) && (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
            };

            function D() {
                return (D = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
                    }
                    return e
                }).apply(this, arguments)
            }

            function $(e) {
                return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
            }

            function R(e, t) {
                return "undefined" == typeof window ? (0, a.useEffect)(e, t) : (0, a.useLayoutEffect)(e, t)
            }
            let F = (0, a.createContext)(null),
                G = (0, a.createContext)(null),
                V = (0, a.forwardRef)(function(e, t) {
                    var r;
                    let {
                        className: i,
                        tag: n = "div",
                        wrapperTag: s = "div",
                        children: o,
                        onSwiper: l,
                        ...d
                    } = void 0 === e ? {} : e, u = !1, [c, p] = (0, a.useState)("swiper"), [f, h] = (0, a.useState)(null), [m, v] = (0, a.useState)(!1), g = (0, a.useRef)(!1), y = (0, a.useRef)(null), b = (0, a.useRef)(null), w = (0, a.useRef)(null), S = (0, a.useRef)(null), x = (0, a.useRef)(null), T = (0, a.useRef)(null), E = (0, a.useRef)(null), C = (0, a.useRef)(null), {
                        params: P,
                        passedParams: F,
                        rest: V,
                        events: B
                    } = function(e, t) {
                        void 0 === e && (e = {}), void 0 === t && (t = !0);
                        let r = {
                                on: {}
                            },
                            i = {},
                            n = {};
                        A(r, _), r._emitClasses = !0, r.init = !1;
                        let s = {},
                            a = M.map(e => e.replace(/_/, "")),
                            o = Object.assign({}, e);
                        return Object.keys(o).forEach(o => {
                            void 0 !== e[o] && (a.indexOf(o) >= 0 ? k(e[o]) ? (r[o] = {}, n[o] = {}, A(r[o], e[o]), A(n[o], e[o])) : (r[o] = e[o], n[o] = e[o]) : 0 === o.search(/on[A-Z]/) && "function" == typeof e[o] ? t ? i[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o] : r.on[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o] : s[o] = e[o])
                        }), ["navigation", "pagination", "scrollbar"].forEach(e => {
                            !0 === r[e] && (r[e] = {}), !1 === r[e] && delete r[e]
                        }), {
                            params: r,
                            passedParams: n,
                            rest: s,
                            events: i
                        }
                    }(d), {
                        slides: H,
                        slots: W
                    } = function(e) {
                        let t = [],
                            r = {
                                "container-start": [],
                                "container-end": [],
                                "wrapper-start": [],
                                "wrapper-end": []
                            };
                        return a.Children.toArray(e).forEach(e => {
                            if ($(e)) t.push(e);
                            else if (e.props && e.props.slot && r[e.props.slot]) r[e.props.slot].push(e);
                            else if (e.props && e.props.children) {
                                let i = function e(t) {
                                    let r = [];
                                    return a.Children.toArray(t).forEach(t => {
                                        $(t) ? r.push(t) : t.props && t.props.children && e(t.props.children).forEach(e => r.push(e))
                                    }), r
                                }(e.props.children);
                                i.length > 0 ? i.forEach(e => t.push(e)) : r["container-end"].push(e)
                            } else r["container-end"].push(e)
                        }), {
                            slides: t,
                            slots: r
                        }
                    }(o), q = () => {
                        v(!m)
                    };
                    Object.assign(P.on, {
                        _containerClasses(e, t) {
                            p(t)
                        }
                    });
                    let Y = () => {
                        Object.assign(P.on, B), u = !0;
                        let e = { ...P
                        };
                        if (delete e.wrapperClass, b.current = new O(e), b.current.virtual && b.current.params.virtual.enabled) {
                            b.current.virtual.slides = H;
                            let e = {
                                cache: !1,
                                slides: H,
                                renderExternal: h,
                                renderExternalUpdate: !1
                            };
                            A(b.current.params.virtual, e), A(b.current.originalParams.virtual, e)
                        }
                    };
                    y.current || Y(), b.current && b.current.on("_beforeBreakpoint", q);
                    let U = () => {
                            !u && B && b.current && Object.keys(B).forEach(e => {
                                b.current.on(e, B[e])
                            })
                        },
                        X = () => {
                            B && b.current && Object.keys(B).forEach(e => {
                                b.current.off(e, B[e])
                            })
                        };
                    return (0, a.useEffect)(() => () => {
                        b.current && b.current.off("_beforeBreakpoint", q)
                    }), (0, a.useEffect)(() => {
                        !g.current && b.current && (b.current.emitSlidesClasses(), g.current = !0)
                    }), R(() => {
                        if (t && (t.current = y.current), y.current) return b.current.destroyed && Y(),
                            function(e, t) {
                                let {
                                    el: r,
                                    nextEl: i,
                                    prevEl: n,
                                    paginationEl: s,
                                    scrollbarEl: a,
                                    swiper: o
                                } = e;
                                j(t) && i && n && (o.params.navigation.nextEl = i, o.originalParams.navigation.nextEl = i, o.params.navigation.prevEl = n, o.originalParams.navigation.prevEl = n), L(t) && s && (o.params.pagination.el = s, o.originalParams.pagination.el = s), I(t) && a && (o.params.scrollbar.el = a, o.originalParams.scrollbar.el = a), o.init(r)
                            }({
                                el: y.current,
                                nextEl: x.current,
                                prevEl: T.current,
                                paginationEl: E.current,
                                scrollbarEl: C.current,
                                swiper: b.current
                            }, P), l && l(b.current), () => {
                                b.current && !b.current.destroyed && b.current.destroy(!0, !1)
                            }
                    }, []), R(() => {
                        U();
                        let e = function(e, t, r, i, n) {
                            let s = [];
                            if (!t) return s;
                            let a = e => {
                                0 > s.indexOf(e) && s.push(e)
                            };
                            if (r && i) {
                                let e = i.map(n),
                                    t = r.map(n);
                                e.join("") !== t.join("") && a("children"), i.length !== r.length && a("children")
                            }
                            let o = M.filter(e => "_" === e[0]).map(e => e.replace(/_/, ""));
                            return o.forEach(r => {
                                if (r in e && r in t) {
                                    if (k(e[r]) && k(t[r])) {
                                        let i = Object.keys(e[r]),
                                            n = Object.keys(t[r]);
                                        i.length !== n.length ? a(r) : (i.forEach(i => {
                                            e[r][i] !== t[r][i] && a(r)
                                        }), n.forEach(i => {
                                            e[r][i] !== t[r][i] && a(r)
                                        }))
                                    } else e[r] !== t[r] && a(r)
                                }
                            }), s
                        }(F, w.current, H, S.current, e => e.key);
                        return w.current = F, S.current = H, e.length && b.current && !b.current.destroyed && function(e) {
                            let t, r, i, n, s, a, o, l, {
                                    swiper: d,
                                    slides: u,
                                    passedParams: c,
                                    changedParams: p,
                                    nextEl: f,
                                    prevEl: h,
                                    scrollbarEl: m,
                                    paginationEl: v
                                } = e,
                                g = p.filter(e => "children" !== e && "direction" !== e && "wrapperClass" !== e),
                                {
                                    params: y,
                                    pagination: b,
                                    navigation: w,
                                    scrollbar: S,
                                    virtual: x,
                                    thumbs: T
                                } = d;
                            p.includes("thumbs") && c.thumbs && c.thumbs.swiper && y.thumbs && !y.thumbs.swiper && (t = !0), p.includes("controller") && c.controller && c.controller.control && y.controller && !y.controller.control && (r = !0), p.includes("pagination") && c.pagination && (c.pagination.el || v) && (y.pagination || !1 === y.pagination) && b && !b.el && (i = !0), p.includes("scrollbar") && c.scrollbar && (c.scrollbar.el || m) && (y.scrollbar || !1 === y.scrollbar) && S && !S.el && (n = !0), p.includes("navigation") && c.navigation && (c.navigation.prevEl || h) && (c.navigation.nextEl || f) && (y.navigation || !1 === y.navigation) && w && !w.prevEl && !w.nextEl && (s = !0);
                            let E = e => {
                                d[e] && (d[e].destroy(), "navigation" === e ? (d.isElement && (d[e].prevEl.remove(), d[e].nextEl.remove()), y[e].prevEl = void 0, y[e].nextEl = void 0, d[e].prevEl = void 0, d[e].nextEl = void 0) : (d.isElement && d[e].el.remove(), y[e].el = void 0, d[e].el = void 0))
                            };
                            if (p.includes("loop") && d.isElement && (y.loop && !c.loop ? a = !0 : !y.loop && c.loop ? o = !0 : l = !0), g.forEach(e => {
                                    if (k(y[e]) && k(c[e])) Object.assign(y[e], c[e]), ("navigation" === e || "pagination" === e || "scrollbar" === e) && "enabled" in c[e] && !c[e].enabled && E(e);
                                    else {
                                        let t = c[e];
                                        (!0 === t || !1 === t) && ("navigation" === e || "pagination" === e || "scrollbar" === e) ? !1 === t && E(e): y[e] = c[e]
                                    }
                                }), g.includes("controller") && !r && d.controller && d.controller.control && y.controller && y.controller.control && (d.controller.control = y.controller.control), p.includes("children") && u && x && y.virtual.enabled ? (x.slides = u, x.update(!0)) : p.includes("virtual") && x && y.virtual.enabled && (u && (x.slides = u), x.update(!0)), p.includes("children") && u && y.loop && (l = !0), t) {
                                let e = T.init();
                                e && T.update(!0)
                            }
                            r && (d.controller.control = y.controller.control), i && (d.isElement && (!v || "string" == typeof v) && ((v = document.createElement("div")).classList.add("swiper-pagination"), v.part.add("pagination"), d.el.appendChild(v)), v && (y.pagination.el = v), b.init(), b.render(), b.update()), n && (d.isElement && (!m || "string" == typeof m) && ((m = document.createElement("div")).classList.add("swiper-scrollbar"), m.part.add("scrollbar"), d.el.appendChild(m)), m && (y.scrollbar.el = m), S.init(), S.updateSize(), S.setTranslate()), s && (d.isElement && (f && "string" != typeof f || ((f = document.createElement("div")).classList.add("swiper-button-next"), f.innerHTML = d.hostEl.constructor.nextButtonSvg, f.part.add("button-next"), d.el.appendChild(f)), h && "string" != typeof h || ((h = document.createElement("div")).classList.add("swiper-button-prev"), h.innerHTML = d.hostEl.constructor.prevButtonSvg, h.part.add("button-prev"), d.el.appendChild(h))), f && (y.navigation.nextEl = f), h && (y.navigation.prevEl = h), w.init(), w.update()), p.includes("allowSlideNext") && (d.allowSlideNext = c.allowSlideNext), p.includes("allowSlidePrev") && (d.allowSlidePrev = c.allowSlidePrev), p.includes("direction") && d.changeDirection(c.direction, !1), (a || l) && d.loopDestroy(), (o || l) && d.loopCreate(), d.update()
                        }({
                            swiper: b.current,
                            slides: H,
                            passedParams: F,
                            changedParams: e,
                            nextEl: x.current,
                            prevEl: T.current,
                            scrollbarEl: C.current,
                            paginationEl: E.current
                        }), () => {
                            X()
                        }
                    }), R(() => {
                        N(b.current)
                    }, [f]), a.createElement(n, D({
                        ref: y,
                        className: z(`${c}${i?` ${i}`:""}`)
                    }, V), a.createElement(G.Provider, {
                        value: b.current
                    }, W["container-start"], a.createElement(s, {
                        className: (void 0 === (r = P.wrapperClass) && (r = ""), r) ? r.includes("swiper-wrapper") ? r : `swiper-wrapper ${r}` : "swiper-wrapper"
                    }, W["wrapper-start"], P.virtual ? function(e, t, r) {
                        if (!r) return null;
                        let i = e => {
                                let r = e;
                                return e < 0 ? r = t.length + e : r >= t.length && (r -= t.length), r
                            },
                            n = e.isHorizontal() ? {
                                [e.rtlTranslate ? "right" : "left"]: `${r.offset}px`
                            } : {
                                top: `${r.offset}px`
                            },
                            {
                                from: s,
                                to: o
                            } = r,
                            l = e.params.loop ? -t.length : 0,
                            d = e.params.loop ? 2 * t.length : t.length,
                            u = [];
                        for (let e = l; e < d; e += 1) e >= s && e <= o && u.push(t[i(e)]);
                        return u.map((t, r) => a.cloneElement(t, {
                            swiper: e,
                            style: n,
                            key: `slide-${r}`
                        }))
                    }(b.current, H, f) : H.map((e, t) => a.cloneElement(e, {
                        swiper: b.current,
                        swiperSlideIndex: t
                    })), W["wrapper-end"]), j(P) && a.createElement(a.Fragment, null, a.createElement("div", {
                        ref: T,
                        className: "swiper-button-prev"
                    }), a.createElement("div", {
                        ref: x,
                        className: "swiper-button-next"
                    })), I(P) && a.createElement("div", {
                        ref: C,
                        className: "swiper-scrollbar"
                    }), L(P) && a.createElement("div", {
                        ref: E,
                        className: "swiper-pagination"
                    }), W["container-end"]))
                });
            V.displayName = "Swiper";
            let B = (0, a.forwardRef)(function(e, t) {
                let {
                    tag: r = "div",
                    children: i,
                    className: n = "",
                    swiper: s,
                    zoom: o,
                    lazy: l,
                    virtualIndex: d,
                    swiperSlideIndex: u,
                    ...c
                } = void 0 === e ? {} : e, p = (0, a.useRef)(null), [f, h] = (0, a.useState)("swiper-slide"), [m, v] = (0, a.useState)(!1);

                function g(e, t, r) {
                    t === p.current && h(r)
                }
                R(() => {
                    if (void 0 !== u && (p.current.swiperSlideIndex = u), t && (t.current = p.current), p.current && s) {
                        if (s.destroyed) {
                            "swiper-slide" !== f && h("swiper-slide");
                            return
                        }
                        return s.on("_slideClass", g), () => {
                            s && s.off("_slideClass", g)
                        }
                    }
                }), R(() => {
                    s && p.current && !s.destroyed && h(s.getSlideClasses(p.current))
                }, [s]);
                let y = {
                        isActive: f.indexOf("swiper-slide-active") >= 0,
                        isVisible: f.indexOf("swiper-slide-visible") >= 0,
                        isPrev: f.indexOf("swiper-slide-prev") >= 0,
                        isNext: f.indexOf("swiper-slide-next") >= 0
                    },
                    b = () => "function" == typeof i ? i(y) : i;
                return a.createElement(r, D({
                    ref: p,
                    className: z(`${f}${n?` ${n}`:""}`),
                    "data-swiper-slide-index": d,
                    onLoad: () => {
                        v(!0)
                    }
                }, c), o && a.createElement(F.Provider, {
                    value: y
                }, a.createElement("div", {
                    className: "swiper-zoom-container",
                    "data-swiper-zoom": "number" == typeof o ? o : void 0
                }, b(), l && !m && a.createElement("div", {
                    className: "swiper-lazy-preloader"
                }))), !o && a.createElement(F.Provider, {
                    value: y
                }, b(), l && !m && a.createElement("div", {
                    className: "swiper-lazy-preloader"
                })))
            });
            B.displayName = "SwiperSlide"
        }
    }
]);