(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [875], {
        69159: function() {},
        89214: function() {},
        85568: function() {},
        18971: function() {},
        85997: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return Z
                }
            });
            var r = n(57437),
                s = n(2265),
                o = n(91887),
                i = n(8088),
                c = n(89394),
                a = n(91797),
                d = n(43226),
                u = n(26337),
                l = n(96507),
                h = n(34857),
                p = n(33533),
                w = n(75706);
            let f = () => window && window.unisat,
                g = () => window && window.XverseProviders;
            var v = e => "Unisat" === e ? f() : "Xverse" === e && g(),
                b = n(42834),
                k = n(49050),
                x = n(75789);
            let y = s.forwardRef(function(e, t) {
                    return (0, r.jsx)(i.Z, {
                        direction: "down",
                        ref: t,
                        ...e
                    })
                }),
                m = o.ZP.create(e => {
                    let {
                        wallet: t
                    } = e, n = (0, o.dd)(), i = (0, s.useMemo)(() => "Unisat" === t ? "https://unisat.io/download" : "Xverse" === t ? "https://www.xverse.app/" : "", []);
                    return (0, r.jsxs)(c.Z, {
                        TransitionComponent: y,
                        open: n.visible,
                        onClose: () => n.hide(),
                        TransitionProps: {
                            onExited: () => n.remove()
                        },
                        sx: {
                            ".MuiPaper-root": {
                                borderRadius: "12px",
                                background: "white",
                                width: "600px"
                            }
                        },
                        children: [(0, r.jsx)(a.Z, {
                            sx: {
                                display: "flex",
                                justifyContent: "flex-end"
                            },
                            children: (0, r.jsx)(p.Z, {
                                onClick: () => n.hide(),
                                sx: {
                                    color: "black",
                                    cursor: "pointer"
                                }
                            })
                        }), (0, r.jsx)(u.Z, {
                            sx: {
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center"
                            },
                            children: (0, r.jsxs)(d.Z, {
                                children: ["Please Install ", (0, r.jsxs)("a", {
                                    target: "_blank",
                                    style: {
                                        color: x.lr
                                    },
                                    href: i,
                                    children: [t, " Wallet"]
                                }), " Plugin to Continue."]
                            })
                        }), (0, r.jsx)(b.Z, {
                            sx: {
                                display: "flex",
                                justifyContent: "center",
                                mb: "20px"
                            },
                            children: (0, r.jsx)(k.Z, {
                                sx: {
                                    background: "#000",
                                    color: "white",
                                    width: "140px",
                                    borderRadius: "70px",
                                    textTransform: "none",
                                    "&:hover": {
                                        background: "black"
                                    }
                                },
                                onClick: () => {
                                    n.hide()
                                },
                                color: "primary",
                                children: "Comfirm"
                            })
                        })]
                    })
                }),
                C = s.forwardRef(function(e, t) {
                    return (0, r.jsx)(i.Z, {
                        direction: "down",
                        ref: t,
                        ...e
                    })
                }),
                P = [{
                    key: "Unisat",
                    name: "UniSat Wallet",
                    logo: "/assets/unisat.svg"
                }, {
                    key: "Xverse",
                    name: "Xverse Wallet",
                    logo: "/assets/xverse.svg"
                }],
                j = o.ZP.create(() => {
                    let e = (0, o.dd)(),
                        t = (0, h.Z)(),
                        {
                            connect: n,
                            isConnected: s,
                            connectorName: i
                        } = (0, w.Ke)(),
                        f = async t => {
                            if (!v(t)) {
                                e.hide(), o.ZP.show(m, {
                                    wallet: t
                                });
                                return
                            }
                            let r = await n(t).catch(e => {});
                            r && r && e.hide()
                        };
                    return (0, r.jsxs)(c.Z, {
                        TransitionComponent: C,
                        open: e.visible,
                        onClose: () => e.hide(),
                        TransitionProps: {
                            onExited: () => e.remove()
                        },
                        sx: {
                            ".MuiPaper-root": {
                                borderRadius: "12px",
                                background: "white",
                                width: t ? "90vw" : "400px"
                            }
                        },
                        children: [(0, r.jsxs)(a.Z, {
                            sx: {
                                display: "flex",
                                justifyContent: "space-between"
                            },
                            children: [(0, r.jsx)(d.Z, {
                                sx: {
                                    fontSize: "20px",
                                    fontWeight: "bold"
                                },
                                children: "Choose Wallet"
                            }), (0, r.jsx)(p.Z, {
                                onClick: () => e.hide(),
                                sx: {
                                    color: "black",
                                    cursor: "pointer"
                                }
                            })]
                        }), (0, r.jsx)(u.Z, {
                            sx: {
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center"
                            },
                            children: (0, r.jsx)(l.Z, {
                                children: P.map(e => (0, r.jsxs)(l.Z, {
                                    display: "flex",
                                    gap: "20px",
                                    sx: {
                                        p: "10px 20px",
                                        border: "1px solid #888",
                                        borderRadius: "8px",
                                        mb: "20px",
                                        cursor: "pointer",
                                        background: "#fef9ed",
                                        alignItems: "center",
                                        "& .icon": {
                                            width: "30px",
                                            height: "30px"
                                        }
                                    },
                                    children: [(0, r.jsx)("img", {
                                        className: "icon",
                                        src: e.logo,
                                        alt: "logo"
                                    }), (0, r.jsxs)(l.Z, {
                                        sx: {
                                            fontSize: "20px",
                                            fontWeight: 600
                                        },
                                        onClick: () => f(e.key),
                                        children: [" ", e.name, " "]
                                    })]
                                }, e.key))
                            })
                        })]
                    })
                });
            var Z = j
        },
        40975: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return h
                }
            });
            var r = n(2265),
                s = n(55445),
                o = n(87364),
                i = n(16775),
                c = n(75789),
                a = n(64983);
            let d = new a.JSONRPCClient(e => fetch(c.$G, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(e)
                }).then(t => 200 === t.status ? t.json().then(e => d.receive(e)) : void 0 !== e.id ? Promise.reject(Error(t.statusText)) : void 0)),
                u = async e => d.request("eth_getBalance", [e, "latest"]);
            var l = n(90340),
                h = e => {
                    let [t, n] = (0, r.useState)(""), c = (0, s.Z)(e || ""), a = (0, r.useMemo)(() => e && (0, o.U)(e) ? e : e && c && (0, l.S)(e) ? c : "", [e, c]), d = async () => {
                        if ((0, o.U)(a)) {
                            let e = await u(a),
                                t = BigInt(e);
                            n((0, i.b)(t, 18))
                        }
                    };
                    return (0, r.useEffect)(() => {
                        a && d()
                    }, [a]), t
                }
        },
        34857: function(e, t, n) {
            "use strict";
            var r = n(22135);
            t.Z = () => {
                let e = (0, r.Z)("(max-width:750px)");
                return e
            }
        },
        55445: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            var r = n(75789);
            let s = async e => {
                let t = "".concat(r.bn, "/").concat(e),
                    n = await fetch(t);
                return n.json()
            };
            var o = n(2265),
                i = e => {
                    let [t, n] = (0, o.useState)(""), r = async () => {
                        if (e) {
                            let t = await s(e);
                            n(t.result)
                        }
                    };
                    return (0, o.useEffect)(() => {
                        e && r()
                    }, [e]), t
                }
        },
        90340: function(e, t, n) {
            "use strict";
            n.d(t, {
                S: function() {
                    return i
                },
                Y: function() {
                    return o
                }
            });
            var r = n(87364),
                s = n(99301);
            let o = e => !!((0, r.U)(e) || i(e));

            function i(e) {
                try {
                    return s.Lk.fromBech32(e), !0
                } catch (t) {
                    try {
                        return s.Lk.fromBase58Check(e), !0
                    } catch (e) {
                        return !1
                    }
                }
            }
        },
        75789: function(e, t, n) {
            "use strict";
            n.d(t, {
                $G: function() {
                    return a
                },
                CQ: function() {
                    return f
                },
                Fi: function() {
                    return y
                },
                Iq: function() {
                    return g
                },
                LZ: function() {
                    return C
                },
                Ls: function() {
                    return b
                },
                Pb: function() {
                    return w
                },
                Ut: function() {
                    return P
                },
                Ve: function() {
                    return o
                },
                bn: function() {
                    return c
                },
                g8: function() {
                    return h
                },
                lo: function() {
                    return u
                },
                lr: function() {
                    return p
                },
                mb: function() {
                    return v
                },
                r8: function() {
                    return s
                },
                rM: function() {
                    return m
                },
                tT: function() {
                    return l
                },
                ti: function() {
                    return d
                },
                tl: function() {
                    return x
                },
                wH: function() {
                    return k
                },
                z2: function() {
                    return i
                }
            });
            var r = n(43977);
            let s = !1,
                o = e => e ? e.slice(0, 6) + "..." + e.slice(-4) : "",
                i = e => (0, r.v)(e, 8),
                c = "https://b2-aa-registry-test.bsquared.network/1102",
                a = "https://haven-rpc.bsquared.network",
                d = "https://docs.bsquared.network/get_started/quick-start/faucet",
                u = "https://mempool.space/testnet/tx",
                l = "https://www.bsquared.network/B2.pdf ",
                h = s ? "https://task-dev.bsquared.network/leaderboard" : "https://task.bsquared.network/leaderboard",
                p = "#FFA728",
                w = s ? "https://bridge-api-dev.bsquared.network/api/v1/deposit/list" : "https://bridge-api.bsquared.network/api/v1/deposit/list",
                f = !1,
                g = s ? "https://eps-api-dev.bsquared.network/v1/faucet?is_aa=false&" : "https://task-openapi.bsquared.network/v1/faucet?is_aa=false&",
                v = "btcWallet",
                b = s ? "https://www-dev.bsquared.network" : "https://www.bsquared.network",
                k = s ? "http://test-b2.bsquared.network/" : "https://buzz.bsquared.network/",
                x = "https://blockheadz.bsquared.network/",
                y = s ? "https://buzz-api-dev.bsquared.network" : "https://buzz-api.bsquared.network",
                m = s ? "https://eps-api-dev.bsquared.network" : "https://task-openapi.bsquared.network",
                C = e => {
                    try {
                        localStorage.setItem(v, e)
                    } catch (e) {}
                },
                P = () => {
                    try {
                        localStorage.removeItem(v)
                    } catch (e) {}
                }
        },
        75706: function(e, t, n) {
            "use strict";
            n.d(t, {
                Dd: function() {
                    return k
                },
                Ke: function() {
                    return y
                }
            });
            var r = n(57437),
                s = n(2265);
            class o extends Error {
                constructor() {
                    super("Connector not found, probably because the plugin is not installed."), this.name = "ConnectorNotFoundError"
                }
            }
            class i extends Error {
                constructor() {
                    super("User rejected the request."), this.name = "UserRejectError"
                }
            }
            i.code = 4001;
            class c {
                getProvider() {
                    return void 0 === window.unisat ? new o : window.unisat
                }
                async connect() {
                    try {
                        let e = this.getProvider();
                        e.on && (e.on("accountsChanged", async t => {
                            if (t && t.length > 0) {
                                let n = await e.getPublicKey();
                                this.onAccountsChanged && this.onAccountsChanged(t[0], n)
                            } else e.removeAllListeners(), this.onDisconnect && this.onDisconnect()
                        }), e.on("networkChanged", e => {
                            this.onNetworkChanged && this.onNetworkChanged(e)
                        }));
                        let t = await e.requestAccounts();
                        await e.switchNetwork("testnet");
                        let n = await e.getPublicKey(),
                            r = await e.getNetwork();
                        return this.address = t[0], this.publicKey = n, {
                            address: t[0],
                            publicKey: n,
                            network: r
                        }
                    } catch (e) {
                        throw e
                    }
                }
                disconnect() {}
                constructor(e) {
                    this.signMessage = e => {
                        let t = this.getProvider();
                        return t.signMessage(e)
                    }, this.sendBitcoin = e => {
                        let t = this.getProvider();
                        return t.sendBitcoin(e.to, Number(e.amount))
                    }, this.name = "Unisat", this.onAccountsChanged = null == e ? void 0 : e.onAccountsChanged, this.onNetworkChanged = null == e ? void 0 : e.onNetworkChanged, this.onDisconnect = null == e ? void 0 : e.onDisconnect
                }
            }
            class a {
                getProvider() {
                    return void 0 === window.okxwallet.bitcoinTestnet ? new o : window.okxwallet.bitcoinTestnet
                }
                async connect() {
                    try {
                        let e = this.getProvider();
                        e.on && (e.on("connect", async e => {
                            let {
                                address: t,
                                compressedPublicKey: n
                            } = e;
                            t && n && this.onAccountsChanged && this.onAccountsChanged(t, n)
                        }), e.on("disconnect", async () => {
                            e.removeAllListeners(), this.onDisconnect && this.onDisconnect()
                        }));
                        let t = await e.connect(),
                            {
                                address: n,
                                compressedPublicKey: r
                            } = t;
                        return this.address = n, this.publicKey = r, {
                            address: n,
                            publicKey: r,
                            network: "testnet"
                        }
                    } catch (e) {
                        throw e
                    }
                }
                disconnect() {
                    let e = this.getProvider();
                    e.disconnect()
                }
                constructor(e) {
                    this.signMessage = e => {
                        let t = this.getProvider(),
                            {
                                address: n
                            } = t.selectedAccount;
                        return t.signMessage(e, {
                            from: n
                        })
                    }, this.sendBitcoin = e => {
                        let t = this.getProvider();
                        return t.send(e)
                    }, this.name = "OKX", this.onAccountsChanged = null == e ? void 0 : e.onAccountsChanged, this.onNetworkChanged = null == e ? void 0 : e.onNetworkChanged, this.onDisconnect = null == e ? void 0 : e.onDisconnect
                }
            }
            var d = n(46963),
                u = n(55852),
                l = n(39803),
                h = n(83706),
                p = n(63014);
            class w {
                getProvider() {
                    return void 0 === window.XverseProviders ? new o : window.XverseProviders
                }
                async connect() {
                    try {
                        return await (0, h.getAddress)({
                            payload: {
                                purposes: ["payment"],
                                message: "Address for receiving Ordinals and payments",
                                network: {
                                    type: "Testnet"
                                }
                            },
                            onFinish: e => {
                                let t = e.addresses[0];
                                this.address = t.address, this.publicKey = t.publicKey
                            },
                            onCancel: () => {
                                throw p.Am.error("User rejected!"), Error("User reject error!")
                            }
                        }), this.address, {
                            address: this.address || "",
                            publicKey: this.publicKey || "",
                            network: "testnet"
                        }
                    } catch (e) {
                        throw e
                    }
                }
                disconnect() {}
                constructor(e) {
                    this.signMessage = e => {
                        let t = this.getProvider();
                        return t.signMessage(e)
                    }, this.sendBitcoin = async e => {
                        let t = "",
                            n = {
                                payload: {
                                    network: {
                                        type: "Testnet"
                                    },
                                    recipients: [{
                                        address: e.to,
                                        amountSats: BigInt(e.amount)
                                    }],
                                    senderAddress: e.from
                                },
                                onFinish: e => {
                                    t = e
                                },
                                onCancel: () => {}
                            };
                        if (await (0, h.sendBtcTransaction)(n), !t) throw Error("failed");
                        return t
                    }, this.name = "Xverse", this.onAccountsChanged = null == e ? void 0 : e.onAccountsChanged, this.onNetworkChanged = null == e ? void 0 : e.onNetworkChanged, this.onDisconnect = null == e ? void 0 : e.onDisconnect
                }
            }
            var f = n(75789),
                g = n(67133).Buffer;
            let v = (0, s.createContext)(void 0),
                b = (e, t) => {
                    switch (t.type) {
                        case "on connect":
                            return { ...e,
                                isConnecting: !0,
                                connectorName: t.connectorName
                            };
                        case "connect failed":
                            return { ...e,
                                isConnecting: !1,
                                connectorName: void 0
                            };
                        case "connected":
                            return {
                                isConnecting: !1,
                                isConnected: !0,
                                connectorName: t.connectorName,
                                address: t.address,
                                publicKey: t.publicKey,
                                network: t.network
                            };
                        case "disconnected":
                            return {
                                isConnecting: !1,
                                isConnected: !1,
                                connectorName: void 0,
                                address: void 0,
                                publicKey: void 0,
                                network: void 0
                            };
                        case "account changed":
                            return { ...e,
                                address: t.address,
                                publicKey: t.publicKey
                            };
                        case "network changed":
                            return { ...e,
                                network: t.network
                            };
                        default:
                            throw Error("Unhandled action type")
                    }
                },
                k = e => {
                    let {
                        children: t
                    } = e, [n, o] = (0, s.useReducer)(b, {
                        isConnecting: !1,
                        isConnected: !1,
                        connectorName: void 0,
                        address: void 0,
                        publicKey: void 0,
                        network: void 0
                    });
                    return (0, r.jsx)(v.Provider, {
                        value: {
                            state: n,
                            dispatch: o
                        },
                        children: t
                    })
                },
                x = () => {
                    let e = (0, s.useContext)(v);
                    if (void 0 === e) throw Error("useBtc must be used within a BtcProvider");
                    return e
                },
                y = () => {
                    let e = x(),
                        {
                            publicKey: t,
                            connectorName: n,
                            address: r
                        } = e.state,
                        o = (0, s.useMemo)(() => ({
                            onAccountsChanged: (t, n) => {
                                e.dispatch({
                                    type: "account changed",
                                    address: t,
                                    publicKey: n
                                })
                            },
                            onNetworkChanged: t => {
                                e.dispatch({
                                    type: "network changed",
                                    network: t
                                })
                            },
                            onDisconnect: () => {
                                e.dispatch({
                                    type: "disconnected"
                                })
                            }
                        }), [e]),
                        i = (0, s.useMemo)(() => ({
                            Unisat: new c(o),
                            OKX: new a(o),
                            Xverse: new w(o)
                        }), [o]),
                        h = (0, s.useMemo)(() => {
                            if (e.state.connectorName) return i[e.state.connectorName]
                        }, [i, e.state.connectorName]),
                        p = (0, s.useCallback)(() => {
                            e.dispatch({
                                type: "disconnected"
                            }), null == h || h.disconnect(), (0, f.Ut)()
                        }, [h, e]),
                        v = (0, s.useCallback)(async t => {
                            try {
                                e.state.isConnected && p(), e.dispatch({
                                    type: "on connect",
                                    connectorName: t
                                });
                                let {
                                    address: n,
                                    publicKey: r,
                                    network: s
                                } = await i[t].connect();
                                return (0, f.LZ)(t), e.dispatch({
                                    type: "connected",
                                    connectorName: t,
                                    address: n,
                                    publicKey: r,
                                    network: s
                                }), !0
                            } catch (t) {
                                throw e.dispatch({
                                    type: "connect failed"
                                }), t
                            }
                        }, [i, e, p]),
                        b = (0, s.useMemo)(() => null == h ? void 0 : h.getProvider(), [h]),
                        k = (0, s.useCallback)(async e => null == h ? void 0 : h.signMessage(e), [h]),
                        y = (0, s.useCallback)(async e => null == h ? void 0 : h.sendBitcoin(e), [h]),
                        m = (0, s.useMemo)(() => {
                            if (!t) return;
                            let e = new d.ec("secp256k1"),
                                n = e.keyFromPublic(t, "hex"),
                                r = n.getPublic().encode("hex", !1).slice(2),
                                s = (0, u.w)(g.from(r, "hex")).slice(26);
                            return (0, l.K)("0x".concat(s))
                        }, [t]);
                    return { ...e.state,
                        ethAddress: m,
                        connect: v,
                        disconnect: p,
                        connector: h,
                        signMessage: k,
                        provider: b,
                        sendBitcoin: y
                    }
                }
        }
    }
]);