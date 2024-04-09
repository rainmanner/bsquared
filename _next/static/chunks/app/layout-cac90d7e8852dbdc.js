(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [185], {
        69159: function() {},
        89214: function() {},
        85568: function() {},
        18971: function() {},
        79903: function(e, t, n) {
            Promise.resolve().then(n.t.bind(n, 58325, 23)), Promise.resolve().then(n.t.bind(n, 66927, 23)), Promise.resolve().then(n.bind(n, 51770)), Promise.resolve().then(n.t.bind(n, 73994, 23)), Promise.resolve().then(n.bind(n, 83366)), Promise.resolve().then(n.bind(n, 69850)), Promise.resolve().then(n.t.bind(n, 12035, 23))
        },
        83366: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AOSInit: function() {
                    return i
                }
            });
            var r = n(2265),
                s = n(76365),
                o = n.n(s);
            n(27026);
            let i = () => ((0, r.useEffect)(() => {
                o().init({
                    easing: "ease-out-quad",
                    duration: 1e3,
                    once: !0
                })
            }, []), null)
        },
        69850: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Providers: function() {
                    return g
                }
            });
            var r = n(57437);
            n(2265);
            var s = n(98595),
                o = n(33948),
                i = n(9253),
                c = n(91887),
                a = n(3857),
                u = n(68757),
                d = n(15900),
                l = n(92486),
                h = n(40209),
                p = n(36151),
                w = n(75706),
                v = n(63014);

            function g(e) {
                let {
                    children: t
                } = e, n = (0, s.Z)({
                    palette: {
                        mode: "light"
                    },
                    typography: {
                        fontFamily: "Titillium Web,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Hanson"
                    }
                }), {
                    chains: g,
                    publicClient: b,
                    webSocketPublicClient: f
                } = (0, u.QB)([h.Yy], [(0, i.I)()], {
                    pollingInterval: 8e5
                }), k = (0, d._g)({
                    autoConnect: !0,
                    connectors: [new l.i({
                        chains: g
                    })],
                    publicClient: b,
                    webSocketPublicClient: f
                }), m = (0, p.t)();
                return (0, r.jsx)(o.Z, {
                    theme: n,
                    children: (0, r.jsx)(d.eM, {
                        config: k,
                        children: (0, r.jsx)(w.Dd, {
                            children: (0, r.jsxs)(c.ZP.Provider, {
                                children: [(0, r.jsx)(a.ZP, {}), (0, r.jsx)(v.Ix, {
                                    position: "top-right",
                                    autoClose: 3e3,
                                    hideProgressBar: !1,
                                    newestOnTop: !1,
                                    closeOnClick: !0,
                                    rtl: !1,
                                    pauseOnFocusLoss: !0,
                                    draggable: !0,
                                    pauseOnHover: !0,
                                    theme: "light"
                                }), m && t]
                            })
                        })
                    })
                })
            }
            n(83343)
        },
        40209: function(e, t, n) {
            "use strict";
            n.d(t, {
                Yy: function() {
                    return o
                },
                ri: function() {
                    return i
                }
            });
            var r = n(75789),
                s = n(71186);
            let o = (0, s.a)({
                    id: 1102,
                    name: "B2Haven",
                    network: "B2Haven",
                    nativeCurrency: {
                        decimals: 18,
                        name: "BTC",
                        symbol: "BTC"
                    },
                    rpcUrls: {
                        public: {
                            http: ["https://roles-rpc.bsquared.network/"]
                        },
                        default: {
                            http: ["https://roles-rpc.bsquared.network/"]
                        }
                    },
                    blockExplorers: {
                        etherscan: {
                            name: "B2Haven",
                            url: "https://testnet-role.bsquared.network/"
                        },
                        default: {
                            name: "B2Haven",
                            url: "https://testnet-role.bsquared.network/"
                        }
                    },
                    contracts: {}
                }),
                i = r.r8 ? "tb1q8mxmujnzlhsdx4jkqdy0mx93t3ytt2sw4wselv" : "tb1qvppxl2n983fk2qhq5rf4vkxshgje5cak863dhp"
        },
        36151: function(e, t, n) {
            "use strict";
            n.d(t, {
                t: function() {
                    return s
                }
            });
            var r = n(2265);
            let s = () => {
                let e = (0, r.useRef)(!1);
                return (0, r.useEffect)(() => (e.current = !0, () => {
                    e.current = !1
                }), []), e
            }
        },
        75789: function(e, t, n) {
            "use strict";
            n.d(t, {
                $G: function() {
                    return a
                },
                CQ: function() {
                    return v
                },
                Fi: function() {
                    return y
                },
                Iq: function() {
                    return g
                },
                LZ: function() {
                    return q
                },
                Ls: function() {
                    return f
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
                    return d
                },
                lr: function() {
                    return p
                },
                mb: function() {
                    return b
                },
                r8: function() {
                    return s
                },
                rM: function() {
                    return C
                },
                tT: function() {
                    return l
                },
                ti: function() {
                    return u
                },
                tl: function() {
                    return m
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
                u = "https://docs.bsquared.network/get_started/quick-start/faucet",
                d = "https://mempool.space/testnet/tx",
                l = "https://www.bsquared.network/B2.pdf ",
                h = s ? "https://task-dev.bsquared.network/leaderboard" : "https://task.bsquared.network/leaderboard",
                p = "#FFA728",
                w = s ? "https://bridge-api-dev.bsquared.network/api/v1/deposit/list" : "https://bridge-api.bsquared.network/api/v1/deposit/list",
                v = !1,
                g = s ? "https://eps-api-dev.bsquared.network/v1/faucet?is_aa=false&" : "https://task-openapi.bsquared.network/v1/faucet?is_aa=false&",
                b = "btcWallet",
                f = s ? "https://www-dev.bsquared.network" : "https://www.bsquared.network",
                k = s ? "http://test-b2.bsquared.network/" : "https://buzz.bsquared.network/",
                m = "https://blockheadz.bsquared.network/",
                y = s ? "https://buzz-api-dev.bsquared.network" : "https://buzz-api.bsquared.network",
                C = s ? "https://eps-api-dev.bsquared.network" : "https://task-openapi.bsquared.network",
                q = e => {
                    try {
                        localStorage.setItem(b, e)
                    } catch (e) {}
                },
                P = () => {
                    try {
                        localStorage.removeItem(b)
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
            var u = n(46963),
                d = n(55852),
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
            var v = n(75789),
                g = n(67133).Buffer;
            let b = (0, s.createContext)(void 0),
                f = (e, t) => {
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
                    } = e, [n, o] = (0, s.useReducer)(f, {
                        isConnecting: !1,
                        isConnected: !1,
                        connectorName: void 0,
                        address: void 0,
                        publicKey: void 0,
                        network: void 0
                    });
                    return (0, r.jsx)(b.Provider, {
                        value: {
                            state: n,
                            dispatch: o
                        },
                        children: t
                    })
                },
                m = () => {
                    let e = (0, s.useContext)(b);
                    if (void 0 === e) throw Error("useBtc must be used within a BtcProvider");
                    return e
                },
                y = () => {
                    let e = m(),
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
                            }), null == h || h.disconnect(), (0, v.Ut)()
                        }, [h, e]),
                        b = (0, s.useCallback)(async t => {
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
                                return (0, v.LZ)(t), e.dispatch({
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
                        f = (0, s.useMemo)(() => null == h ? void 0 : h.getProvider(), [h]),
                        k = (0, s.useCallback)(async e => null == h ? void 0 : h.signMessage(e), [h]),
                        y = (0, s.useCallback)(async e => null == h ? void 0 : h.sendBitcoin(e), [h]),
                        C = (0, s.useMemo)(() => {
                            if (!t) return;
                            let e = new u.ec("secp256k1"),
                                n = e.keyFromPublic(t, "hex"),
                                r = n.getPublic().encode("hex", !1).slice(2),
                                s = (0, d.w)(g.from(r, "hex")).slice(26);
                            return (0, l.K)("0x".concat(s))
                        }, [t]);
                    return { ...e.state,
                        ethAddress: C,
                        connect: b,
                        disconnect: p,
                        connector: h,
                        signMessage: k,
                        provider: f,
                        sendBitcoin: y
                    }
                }
        },
        12035: function() {}
    },
    function(e) {
        e.O(0, [846, 251, 536, 900, 45, 971, 472, 744], function() {
            return e(e.s = 79903)
        }), _N_E = e.O()
    }
]);