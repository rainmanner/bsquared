(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [536], {
        45999: function(e, t, r) {
            "use strict";
            let i, n; /*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) */
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.utils = t.schnorr = t.verify = t.signSync = t.sign = t.getSharedSecret = t.recoverPublicKey = t.getPublicKey = t.Signature = t.Point = t.CURVE = void 0;
            let f = r(69159),
                a = BigInt(0),
                o = BigInt(1),
                s = BigInt(2),
                d = BigInt(3),
                c = BigInt(8),
                h = Object.freeze({
                    a: a,
                    b: BigInt(7),
                    P: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),
                    n: BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),
                    h: o,
                    Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
                    Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
                    beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee")
                });
            t.CURVE = h;
            let u = (e, t) => (e + t / s) / t,
                l = {
                    beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
                    splitScalar(e) {
                        let {
                            n: t
                        } = h, r = BigInt("0x3086d221a7d46bcde86c90e49284eb15"), i = -o * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"), n = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"), f = BigInt("0x100000000000000000000000000000000"), a = u(r * e, t), s = u(-i * e, t), d = T(e - a * r - s * n, t), c = T(-a * i - s * r, t), l = d > f, b = c > f;
                        if (l && (d = t - d), b && (c = t - c), d > f || c > f) throw Error("splitScalarEndo: Endomorphism failed, k=" + e);
                        return {
                            k1neg: l,
                            k1: d,
                            k2neg: b,
                            k2: c
                        }
                    }
                };

            function b(e) {
                let {
                    a: t,
                    b: r
                } = h, i = T(e * e), n = T(i * e);
                return T(n + t * e + r)
            }
            let p = h.a === a;
            class y extends Error {
                constructor(e) {
                    super(e)
                }
            }

            function m(e) {
                if (!(e instanceof g)) throw TypeError("JacobianPoint expected")
            }
            class g {
                constructor(e, t, r) {
                    this.x = e, this.y = t, this.z = r
                }
                static fromAffine(e) {
                    if (!(e instanceof M)) throw TypeError("JacobianPoint#fromAffine: expected Point");
                    return e.equals(M.ZERO) ? g.ZERO : new g(e.x, e.y, o)
                }
                static toAffineBatch(e) {
                    let t = function(e, t = h.P) {
                        let r = Array(e.length),
                            i = e.reduce((e, i, n) => i === a ? e : (r[n] = e, T(e * i, t)), o),
                            n = L(i, t);
                        return e.reduceRight((e, i, n) => i === a ? e : (r[n] = T(e * r[n], t), T(e * i, t)), n), r
                    }(e.map(e => e.z));
                    return e.map((e, r) => e.toAffine(t[r]))
                }
                static normalizeZ(e) {
                    return g.toAffineBatch(e).map(g.fromAffine)
                }
                equals(e) {
                    m(e);
                    let {
                        x: t,
                        y: r,
                        z: i
                    } = this, {
                        x: n,
                        y: f,
                        z: a
                    } = e, o = T(i * i), s = T(a * a), d = T(t * s), c = T(n * o), h = T(T(r * a) * s), u = T(T(f * i) * o);
                    return d === c && h === u
                }
                negate() {
                    return new g(this.x, T(-this.y), this.z)
                }
                double() {
                    let {
                        x: e,
                        y: t,
                        z: r
                    } = this, i = T(e * e), n = T(t * t), f = T(n * n), a = e + n, o = T(s * (T(a * a) - i - f)), h = T(d * i), u = T(h * h), l = T(u - s * o), b = T(h * (o - l) - c * f), p = T(s * t * r);
                    return new g(l, b, p)
                }
                add(e) {
                    m(e);
                    let {
                        x: t,
                        y: r,
                        z: i
                    } = this, {
                        x: n,
                        y: f,
                        z: o
                    } = e;
                    if (n === a || f === a) return this;
                    if (t === a || r === a) return e;
                    let d = T(i * i),
                        c = T(o * o),
                        h = T(t * c),
                        u = T(n * d),
                        l = T(T(r * o) * c),
                        b = T(T(f * i) * d),
                        p = T(u - h),
                        y = T(b - l);
                    if (p === a) return y === a ? this.double() : g.ZERO;
                    let v = T(p * p),
                        w = T(p * v),
                        M = T(h * v),
                        S = T(y * y - w - s * M),
                        _ = T(y * (M - S) - l * w),
                        x = T(i * o * p);
                    return new g(S, _, x)
                }
                subtract(e) {
                    return this.add(e.negate())
                }
                multiplyUnsafe(e) {
                    let t = g.ZERO;
                    if ("bigint" == typeof e && e === a) return t;
                    let r = C(e);
                    if (r === o) return this;
                    if (!p) {
                        let e = t,
                            i = this;
                        for (; r > a;) r & o && (e = e.add(i)), i = i.double(), r >>= o;
                        return e
                    }
                    let {
                        k1neg: i,
                        k1: n,
                        k2neg: f,
                        k2: s
                    } = l.splitScalar(r), d = t, c = t, h = this;
                    for (; n > a || s > a;) n & o && (d = d.add(h)), s & o && (c = c.add(h)), h = h.double(), n >>= o, s >>= o;
                    return i && (d = d.negate()), f && (c = c.negate()), c = new g(T(c.x * l.beta), c.y, c.z), d.add(c)
                }
                precomputeWindow(e) {
                    let t = p ? 128 / e + 1 : 256 / e + 1,
                        r = [],
                        i = this,
                        n = i;
                    for (let f = 0; f < t; f++) {
                        n = i, r.push(n);
                        for (let t = 1; t < 2 ** (e - 1); t++) n = n.add(i), r.push(n);
                        i = n.double()
                    }
                    return r
                }
                wNAF(e, t) {
                    !t && this.equals(g.BASE) && (t = M.BASE);
                    let r = t && t._WINDOW_SIZE || 1;
                    if (256 % r) throw Error("Point#wNAF: Invalid precomputation window, must be power of 2");
                    let i = t && w.get(t);
                    !i && (i = this.precomputeWindow(r), t && 1 !== r && (i = g.normalizeZ(i), w.set(t, i)));
                    let n = g.ZERO,
                        f = g.BASE,
                        a = 1 + (p ? 128 / r : 256 / r),
                        s = 2 ** (r - 1),
                        d = BigInt(2 ** r - 1),
                        c = 2 ** r,
                        h = BigInt(r);
                    for (let t = 0; t < a; t++) {
                        let r = t * s,
                            a = Number(e & d);
                        e >>= h, a > s && (a -= c, e += o);
                        let u = r + Math.abs(a) - 1,
                            l = t % 2 != 0,
                            b = a < 0;
                        0 === a ? f = f.add(v(l, i[r])) : n = n.add(v(b, i[u]))
                    }
                    return {
                        p: n,
                        f
                    }
                }
                multiply(e, t) {
                    let r, i, n = C(e);
                    if (p) {
                        let {
                            k1neg: e,
                            k1: f,
                            k2neg: a,
                            k2: o
                        } = l.splitScalar(n), {
                            p: s,
                            f: d
                        } = this.wNAF(f, t), {
                            p: c,
                            f: h
                        } = this.wNAF(o, t);
                        s = v(e, s), c = new g(T((c = v(a, c)).x * l.beta), c.y, c.z), r = s.add(c), i = d.add(h)
                    } else {
                        let {
                            p: e,
                            f
                        } = this.wNAF(n, t);
                        r = e, i = f
                    }
                    return g.normalizeZ([r, i])[0]
                }
                toAffine(e) {
                    let {
                        x: t,
                        y: r,
                        z: i
                    } = this, n = this.equals(g.ZERO);
                    null == e && (e = n ? c : L(i));
                    let f = e,
                        a = T(f * f),
                        s = T(a * f),
                        d = T(t * a),
                        h = T(r * s),
                        u = T(i * f);
                    if (n) return M.ZERO;
                    if (u !== o) throw Error("invZ was invalid");
                    return new M(d, h)
                }
            }

            function v(e, t) {
                let r = t.negate();
                return e ? r : t
            }
            g.BASE = new g(h.Gx, h.Gy, o), g.ZERO = new g(a, o, a);
            let w = new WeakMap;
            class M {
                constructor(e, t) {
                    this.x = e, this.y = t
                }
                _setWindowSize(e) {
                    this._WINDOW_SIZE = e, w.delete(this)
                }
                hasEvenY() {
                    return this.y % s === a
                }
                static fromCompressedHex(e) {
                    let t = 32 === e.length,
                        r = q(t ? e : e.subarray(1));
                    if (!F(r)) throw Error("Point is not on curve");
                    let i = b(r),
                        n = function(e) {
                            let {
                                P: t
                            } = h, r = BigInt(6), i = BigInt(11), n = BigInt(22), f = BigInt(23), a = BigInt(44), o = BigInt(88), c = e * e * e % t, u = c * c * e % t, l = N(u, d) * u % t, b = N(l, d) * u % t, p = N(b, s) * c % t, y = N(p, i) * p % t, m = N(y, n) * y % t, g = N(m, a) * m % t, v = N(g, o) * g % t, w = N(v, a) * m % t, M = N(w, d) * u % t, S = N(M, f) * y % t, _ = N(S, r) * c % t, x = N(_, s);
                            if (x * x % t !== e) throw Error("Cannot find square root");
                            return x
                        }(i),
                        f = (n & o) === o;
                    if (t) f && (n = T(-n));
                    else {
                        let t = (1 & e[0]) == 1;
                        t !== f && (n = T(-n))
                    }
                    let a = new M(r, n);
                    return a.assertValidity(), a
                }
                static fromUncompressedHex(e) {
                    let t = q(e.subarray(1, 33)),
                        r = q(e.subarray(33, 65)),
                        i = new M(t, r);
                    return i.assertValidity(), i
                }
                static fromHex(e) {
                    let t = j(e),
                        r = t.length,
                        i = t[0];
                    if (32 === r || 33 === r && (2 === i || 3 === i)) return this.fromCompressedHex(t);
                    if (65 === r && 4 === i) return this.fromUncompressedHex(t);
                    throw Error(`Point.fromHex: received invalid point. Expected 32-33 compressed bytes or 65 uncompressed bytes, not ${r}`)
                }
                static fromPrivateKey(e) {
                    return M.BASE.multiply(K(e))
                }
                static fromSignature(e, t, r) {
                    let {
                        r: i,
                        s: n
                    } = J(t);
                    if (![0, 1, 2, 3].includes(r)) throw Error("Cannot recover: invalid recovery bit");
                    let f = U(j(e)),
                        {
                            n: a
                        } = h,
                        o = 2 === r || 3 === r ? i + a : i,
                        s = L(o, a),
                        d = T(-f * s, a),
                        c = T(n * s, a),
                        u = 1 & r ? "03" : "02",
                        l = M.fromHex(u + z(o)),
                        b = M.BASE.multiplyAndAddUnsafe(l, d, c);
                    if (!b) throw Error("Cannot recover signature: point at infinify");
                    return b.assertValidity(), b
                }
                toRawBytes(e = !1) {
                    return R(this.toHex(e))
                }
                toHex(e = !1) {
                    let t = z(this.x);
                    if (!e) return `04${t}${z(this.y)}`; {
                        let e = this.hasEvenY() ? "02" : "03";
                        return `${e}${t}`
                    }
                }
                toHexX() {
                    return this.toHex(!0).slice(2)
                }
                toRawX() {
                    return this.toRawBytes(!0).slice(1)
                }
                assertValidity() {
                    let e = "Point is not on elliptic curve",
                        {
                            x: t,
                            y: r
                        } = this;
                    if (!F(t) || !F(r)) throw Error(e);
                    let i = T(r * r),
                        n = b(t);
                    if (T(i - n) !== a) throw Error(e)
                }
                equals(e) {
                    return this.x === e.x && this.y === e.y
                }
                negate() {
                    return new M(this.x, T(-this.y))
                }
                double() {
                    return g.fromAffine(this).double().toAffine()
                }
                add(e) {
                    return g.fromAffine(this).add(g.fromAffine(e)).toAffine()
                }
                subtract(e) {
                    return this.add(e.negate())
                }
                multiply(e) {
                    return g.fromAffine(this).multiply(e, this).toAffine()
                }
                multiplyAndAddUnsafe(e, t, r) {
                    let i = g.fromAffine(this),
                        n = t === a || t === o || this !== M.BASE ? i.multiplyUnsafe(t) : i.multiply(t),
                        f = g.fromAffine(e).multiplyUnsafe(r),
                        s = n.add(f);
                    return s.equals(g.ZERO) ? void 0 : s.toAffine()
                }
            }

            function S(e) {
                return Number.parseInt(e[0], 16) >= 8 ? "00" + e : e
            }

            function _(e) {
                if (e.length < 2 || 2 !== e[0]) throw Error(`Invalid signature integer tag: ${I(e)}`);
                let t = e[1],
                    r = e.subarray(2, t + 2);
                if (!t || r.length !== t) throw Error("Invalid signature integer: wrong length");
                if (0 === r[0] && r[1] <= 127) throw Error("Invalid signature integer: trailing length");
                return {
                    data: q(r),
                    left: e.subarray(t + 2)
                }
            }
            t.Point = M, M.BASE = new M(h.Gx, h.Gy), M.ZERO = new M(a, a);
            class x {
                constructor(e, t) {
                    this.r = e, this.s = t, this.assertValidity()
                }
                static fromCompact(e) {
                    let t = e instanceof Uint8Array,
                        r = "Signature.fromCompact";
                    if ("string" != typeof e && !t) throw TypeError(`${r}: Expected string or Uint8Array`);
                    let i = t ? I(e) : e;
                    if (128 !== i.length) throw Error(`${r}: Expected 64-byte hex`);
                    return new x(k(i.slice(0, 64)), k(i.slice(64, 128)))
                }
                static fromDER(e) {
                    let t = e instanceof Uint8Array;
                    if ("string" != typeof e && !t) throw TypeError("Signature.fromDER: Expected string or Uint8Array");
                    let {
                        r,
                        s: i
                    } = function(e) {
                        if (e.length < 2 || 48 != e[0]) throw Error(`Invalid signature tag: ${I(e)}`);
                        if (e[1] !== e.length - 2) throw Error("Invalid signature: incorrect length");
                        let {
                            data: t,
                            left: r
                        } = _(e.subarray(2)), {
                            data: i,
                            left: n
                        } = _(r);
                        if (n.length) throw Error(`Invalid signature: left bytes after parsing: ${I(n)}`);
                        return {
                            r: t,
                            s: i
                        }
                    }(t ? e : R(e));
                    return new x(r, i)
                }
                static fromHex(e) {
                    return this.fromDER(e)
                }
                assertValidity() {
                    let {
                        r: e,
                        s: t
                    } = this;
                    if (!$(e)) throw Error("Invalid Signature: r must be 0 < r < n");
                    if (!$(t)) throw Error("Invalid Signature: s must be 0 < s < n")
                }
                hasHighS() {
                    let e = h.n >> o;
                    return this.s > e
                }
                normalizeS() {
                    return this.hasHighS() ? new x(this.r, T(-this.s, h.n)) : this
                }
                toDERRawBytes() {
                    return R(this.toDERHex())
                }
                toDERHex() {
                    let e = S(B(this.s)),
                        t = S(B(this.r)),
                        r = e.length / 2,
                        i = t.length / 2,
                        n = B(r),
                        f = B(i),
                        a = B(i + r + 4);
                    return `30${a}02${f}${t}02${n}${e}`
                }
                toRawBytes() {
                    return this.toDERRawBytes()
                }
                toHex() {
                    return this.toDERHex()
                }
                toCompactRawBytes() {
                    return R(this.toCompactHex())
                }
                toCompactHex() {
                    return z(this.r) + z(this.s)
                }
            }

            function A(...e) {
                if (!e.every(e => e instanceof Uint8Array)) throw Error("Uint8Array list expected");
                if (1 === e.length) return e[0];
                let t = e.reduce((e, t) => e + t.length, 0),
                    r = new Uint8Array(t);
                for (let t = 0, i = 0; t < e.length; t++) {
                    let n = e[t];
                    r.set(n, i), i += n.length
                }
                return r
            }
            t.Signature = x;
            let E = Array.from({
                length: 256
            }, (e, t) => t.toString(16).padStart(2, "0"));

            function I(e) {
                if (!(e instanceof Uint8Array)) throw Error("Expected Uint8Array");
                let t = "";
                for (let r = 0; r < e.length; r++) t += E[e[r]];
                return t
            }
            let P = BigInt("0x10000000000000000000000000000000000000000000000000000000000000000");

            function z(e) {
                if ("bigint" != typeof e) throw Error("Expected bigint");
                if (!(a <= e && e < P)) throw Error("Expected number 0 <= n < 2^256");
                return e.toString(16).padStart(64, "0")
            }

            function O(e) {
                let t = R(z(e));
                if (32 !== t.length) throw Error("Error: expected 32 bytes");
                return t
            }

            function B(e) {
                let t = e.toString(16);
                return 1 & t.length ? `0${t}` : t
            }

            function k(e) {
                if ("string" != typeof e) throw TypeError("hexToNumber: expected string, got " + typeof e);
                return BigInt(`0x${e}`)
            }

            function R(e) {
                if ("string" != typeof e) throw TypeError("hexToBytes: expected string, got " + typeof e);
                if (e.length % 2) throw Error("hexToBytes: received invalid unpadded hex" + e.length);
                let t = new Uint8Array(e.length / 2);
                for (let r = 0; r < t.length; r++) {
                    let i = 2 * r,
                        n = e.slice(i, i + 2),
                        f = Number.parseInt(n, 16);
                    if (Number.isNaN(f) || f < 0) throw Error("Invalid byte sequence");
                    t[r] = f
                }
                return t
            }

            function q(e) {
                return k(I(e))
            }

            function j(e) {
                return e instanceof Uint8Array ? Uint8Array.from(e) : R(e)
            }

            function C(e) {
                if ("number" == typeof e && Number.isSafeInteger(e) && e > 0) return BigInt(e);
                if ("bigint" == typeof e && $(e)) return e;
                throw TypeError("Expected valid private scalar: 0 < scalar < curve.n")
            }

            function T(e, t = h.P) {
                let r = e % t;
                return r >= a ? r : t + r
            }

            function N(e, t) {
                let {
                    P: r
                } = h, i = e;
                for (; t-- > a;) i *= i, i %= r;
                return i
            }

            function L(e, t = h.P) {
                if (e === a || t <= a) throw Error(`invert: expected positive integers, got n=${e} mod=${t}`);
                let r = T(e, t),
                    i = t,
                    n = a,
                    f = o,
                    s = o,
                    d = a;
                for (; r !== a;) {
                    let e = i / r,
                        t = i % r,
                        a = n - s * e,
                        o = f - d * e;
                    i = r, r = t, n = s, f = d, s = a, d = o
                }
                let c = i;
                if (c !== o) throw Error("invert: does not exist");
                return T(n, t)
            }

            function U(e, t = !1) {
                let r = function(e) {
                    let t = 8 * e.length - 256,
                        r = q(e);
                    return t > 0 ? r >> BigInt(t) : r
                }(e);
                if (t) return r;
                let {
                    n: i
                } = h;
                return r >= i ? r - i : r
            }
            class H {
                constructor(e, t) {
                    if (this.hashLen = e, this.qByteLen = t, "number" != typeof e || e < 2) throw Error("hashLen must be a number");
                    if ("number" != typeof t || t < 2) throw Error("qByteLen must be a number");
                    this.v = new Uint8Array(e).fill(1), this.k = new Uint8Array(e).fill(0), this.counter = 0
                }
                hmac(...e) {
                    return t.utils.hmacSha256(this.k, ...e)
                }
                hmacSync(...e) {
                    return n(this.k, ...e)
                }
                checkSync() {
                    if ("function" != typeof n) throw new y("hmacSha256Sync needs to be set")
                }
                incr() {
                    if (this.counter >= 1e3) throw Error("Tried 1,000 k values for sign(), all were invalid");
                    this.counter += 1
                }
                async reseed(e = new Uint8Array) {
                    this.k = await this.hmac(this.v, Uint8Array.from([0]), e), this.v = await this.hmac(this.v), 0 !== e.length && (this.k = await this.hmac(this.v, Uint8Array.from([1]), e), this.v = await this.hmac(this.v))
                }
                reseedSync(e = new Uint8Array) {
                    this.checkSync(), this.k = this.hmacSync(this.v, Uint8Array.from([0]), e), this.v = this.hmacSync(this.v), 0 !== e.length && (this.k = this.hmacSync(this.v, Uint8Array.from([1]), e), this.v = this.hmacSync(this.v))
                }
                async generate() {
                    this.incr();
                    let e = 0,
                        t = [];
                    for (; e < this.qByteLen;) {
                        this.v = await this.hmac(this.v);
                        let r = this.v.slice();
                        t.push(r), e += this.v.length
                    }
                    return A(...t)
                }
                generateSync() {
                    this.checkSync(), this.incr();
                    let e = 0,
                        t = [];
                    for (; e < this.qByteLen;) {
                        this.v = this.hmacSync(this.v);
                        let r = this.v.slice();
                        t.push(r), e += this.v.length
                    }
                    return A(...t)
                }
            }

            function $(e) {
                return a < e && e < h.n
            }

            function F(e) {
                return a < e && e < h.P
            }

            function D(e, t, r, i = !0) {
                let {
                    n
                } = h, f = U(e, !0);
                if (!$(f)) return;
                let s = L(f, n),
                    d = M.BASE.multiply(f),
                    c = T(d.x, n);
                if (c === a) return;
                let u = T(s * T(t + r * c, n), n);
                if (u === a) return;
                let l = new x(c, u),
                    b = (d.x === l.r ? 0 : 2) | Number(d.y & o);
                return i && l.hasHighS() && (l = l.normalizeS(), b ^= 1), {
                    sig: l,
                    recovery: b
                }
            }

            function K(e) {
                let t;
                if ("bigint" == typeof e) t = e;
                else if ("number" == typeof e && Number.isSafeInteger(e) && e > 0) t = BigInt(e);
                else if ("string" == typeof e) {
                    if (64 !== e.length) throw Error("Expected 32 bytes of private key");
                    t = k(e)
                } else if (e instanceof Uint8Array) {
                    if (32 !== e.length) throw Error("Expected 32 bytes of private key");
                    t = q(e)
                } else throw TypeError("Expected valid private key");
                if (!$(t)) throw Error("Expected private key: 0 < key < n");
                return t
            }

            function V(e) {
                return e instanceof M ? (e.assertValidity(), e) : M.fromHex(e)
            }

            function J(e) {
                if (e instanceof x) return e.assertValidity(), e;
                try {
                    return x.fromDER(e)
                } catch (t) {
                    return x.fromCompact(e)
                }
            }

            function W(e) {
                let t = e instanceof Uint8Array,
                    r = "string" == typeof e,
                    i = (t || r) && e.length;
                return t ? 33 === i || 65 === i : r ? 66 === i || 130 === i : e instanceof M
            }

            function Z(e) {
                let t = e.length > 32 ? e.slice(0, 32) : e;
                return q(t)
            }

            function X(e, r, i) {
                if (null == e) throw Error(`sign: expected valid message hash, not "${e}"`);
                let n = j(e),
                    f = K(r),
                    o = [O(f), function(e) {
                        var t;
                        let r = Z(e),
                            i = T(r, h.n);
                        return O(i < a ? r : i)
                    }(n)];
                if (null != i) {
                    !0 === i && (i = t.utils.randomBytes(32));
                    let e = j(i);
                    if (32 !== e.length) throw Error("sign: Expected 32 bytes of extra data");
                    o.push(e)
                }
                let s = A(...o),
                    d = Z(n);
                return {
                    seed: s,
                    m: d,
                    d: f
                }
            }

            function G(e, t) {
                let {
                    sig: r,
                    recovery: i
                } = e, {
                    der: n,
                    recovered: f
                } = Object.assign({
                    canonical: !0,
                    der: !0
                }, t), a = n ? r.toDERRawBytes() : r.toCompactRawBytes();
                return f ? [a, i] : a
            }
            async function Y(e, t, r = {}) {
                let i;
                let {
                    seed: n,
                    m: f,
                    d: a
                } = X(e, t, r.extraEntropy), o = new H(32, 32);
                for (await o.reseed(n); !(i = D(await o.generate(), f, a, r.canonical));) await o.reseed();
                return G(i, r)
            }
            t.getPublicKey = function(e, t = !1) {
                return M.fromPrivateKey(e).toRawBytes(t)
            }, t.recoverPublicKey = function(e, t, r, i = !1) {
                return M.fromSignature(e, t, r).toRawBytes(i)
            }, t.getSharedSecret = function(e, t, r = !1) {
                if (W(e)) throw TypeError("getSharedSecret: first arg must be private key");
                if (!W(t)) throw TypeError("getSharedSecret: second arg must be public key");
                let i = V(t);
                return i.assertValidity(), i.multiply(K(e)).toRawBytes(r)
            }, t.sign = Y, t.signSync = function(e, t, r = {}) {
                let i;
                let {
                    seed: n,
                    m: f,
                    d: a
                } = X(e, t, r.extraEntropy), o = new H(32, 32);
                for (o.reseedSync(n); !(i = D(o.generateSync(), f, a, r.canonical));) o.reseedSync();
                return G(i, r)
            };
            let Q = {
                strict: !0
            };

            function ee(e) {
                return T(q(e), h.n)
            }
            t.verify = function(e, t, r, i = Q) {
                let n, f;
                try {
                    n = J(e), t = j(t)
                } catch (e) {
                    return !1
                }
                let {
                    r: a,
                    s: o
                } = n;
                if (i.strict && n.hasHighS()) return !1;
                let s = U(t);
                try {
                    f = V(r)
                } catch (e) {
                    return !1
                }
                let {
                    n: d
                } = h, c = L(o, d), u = T(s * c, d), l = T(a * c, d), b = M.BASE.multiplyAndAddUnsafe(f, u, l);
                if (!b) return !1;
                let p = T(b.x, d);
                return p === a
            };
            class et {
                constructor(e, t) {
                    this.r = e, this.s = t, this.assertValidity()
                }
                static fromHex(e) {
                    let t = j(e);
                    if (64 !== t.length) throw TypeError(`SchnorrSignature.fromHex: expected 64 bytes, not ${t.length}`);
                    let r = q(t.subarray(0, 32)),
                        i = q(t.subarray(32, 64));
                    return new et(r, i)
                }
                assertValidity() {
                    let {
                        r: e,
                        s: t
                    } = this;
                    if (!F(e) || !$(t)) throw Error("Invalid signature")
                }
                toHex() {
                    return z(this.r) + z(this.s)
                }
                toRawBytes() {
                    return R(this.toHex())
                }
            }
            class er {
                constructor(e, r, i = t.utils.randomBytes()) {
                    if (null == e) throw TypeError(`sign: Expected valid message, not "${e}"`);
                    this.m = j(e);
                    let {
                        x: n,
                        scalar: f
                    } = this.getScalar(K(r));
                    if (this.px = n, this.d = f, this.rand = j(i), 32 !== this.rand.length) throw TypeError("sign: Expected 32 bytes of aux randomness")
                }
                getScalar(e) {
                    let t = M.fromPrivateKey(e),
                        r = t.hasEvenY() ? e : h.n - e;
                    return {
                        point: t,
                        scalar: r,
                        x: t.toRawX()
                    }
                }
                initNonce(e, t) {
                    return O(e ^ q(t))
                }
                finalizeNonce(e) {
                    let t = T(q(e), h.n);
                    if (t === a) throw Error("sign: Creation of signature failed. k is zero");
                    let {
                        point: r,
                        x: i,
                        scalar: n
                    } = this.getScalar(t);
                    return {
                        R: r,
                        rx: i,
                        k: n
                    }
                }
                finalizeSig(e, t, r, i) {
                    return new et(e.x, T(t + r * i, h.n)).toRawBytes()
                }
                error() {
                    throw Error("sign: Invalid signature produced")
                }
                async calc() {
                    let {
                        m: e,
                        d: r,
                        px: i,
                        rand: n
                    } = this, f = t.utils.taggedHash, a = this.initNonce(r, await f(ed.aux, n)), {
                        R: o,
                        rx: s,
                        k: d
                    } = this.finalizeNonce(await f(ed.nonce, a, i, e)), c = ee(await f(ed.challenge, s, i, e)), h = this.finalizeSig(o, d, c, r);
                    return await ea(h, e, i) || this.error(), h
                }
                calcSync() {
                    let {
                        m: e,
                        d: r,
                        px: i,
                        rand: n
                    } = this, f = t.utils.taggedHashSync, a = this.initNonce(r, f(ed.aux, n)), {
                        R: o,
                        rx: s,
                        k: d
                    } = this.finalizeNonce(f(ed.nonce, a, i, e)), c = ee(f(ed.challenge, s, i, e)), h = this.finalizeSig(o, d, c, r);
                    return eo(h, e, i) || this.error(), h
                }
            }
            async function ei(e, t, r) {
                return new er(e, t, r).calc()
            }

            function en(e, t, r) {
                let i = e instanceof et,
                    n = i ? e : et.fromHex(e);
                return i && n.assertValidity(), { ...n,
                    m: j(t),
                    P: V(r)
                }
            }

            function ef(e, t, r, i) {
                let n = M.BASE.multiplyAndAddUnsafe(t, K(r), T(-i, h.n));
                return !!(n && n.hasEvenY()) && n.x === e
            }
            async function ea(e, r, i) {
                try {
                    let {
                        r: n,
                        s: f,
                        m: a,
                        P: o
                    } = en(e, r, i), s = ee(await t.utils.taggedHash(ed.challenge, O(n), o.toRawX(), a));
                    return ef(n, o, f, s)
                } catch (e) {
                    return !1
                }
            }

            function eo(e, r, i) {
                try {
                    let {
                        r: n,
                        s: f,
                        m: a,
                        P: o
                    } = en(e, r, i), s = ee(t.utils.taggedHashSync(ed.challenge, O(n), o.toRawX(), a));
                    return ef(n, o, f, s)
                } catch (e) {
                    if (e instanceof y) throw e;
                    return !1
                }
            }
            t.schnorr = {
                Signature: et,
                getPublicKey: function(e) {
                    return M.fromPrivateKey(e).toRawX()
                },
                sign: ei,
                verify: ea,
                signSync: function(e, t, r) {
                    return new er(e, t, r).calcSync()
                },
                verifySync: eo
            }, M.BASE._setWindowSize(8);
            let es = {
                    node: f,
                    web: "object" == typeof self && "crypto" in self ? self.crypto : void 0
                },
                ed = {
                    challenge: "BIP0340/challenge",
                    aux: "BIP0340/aux",
                    nonce: "BIP0340/nonce"
                },
                ec = {};
            t.utils = {
                bytesToHex: I,
                hexToBytes: R,
                concatBytes: A,
                mod: T,
                invert: L,
                isValidPrivateKey(e) {
                    try {
                        return K(e), !0
                    } catch (e) {
                        return !1
                    }
                },
                _bigintTo32Bytes: O,
                _normalizePrivateKey: K,
                hashToPrivateKey: e => {
                    if ((e = j(e)).length < 40 || e.length > 1024) throw Error("Expected valid bytes of private key as per FIPS 186");
                    let t = T(q(e), h.n - o) + o;
                    return O(t)
                },
                randomBytes: (e = 32) => {
                    if (es.web) return es.web.getRandomValues(new Uint8Array(e));
                    if (es.node) {
                        let {
                            randomBytes: t
                        } = es.node;
                        return Uint8Array.from(t(e))
                    }
                    throw Error("The environment doesn't have randomBytes function")
                },
                randomPrivateKey: () => t.utils.hashToPrivateKey(t.utils.randomBytes(40)),
                precompute(e = 8, t = M.BASE) {
                    let r = t === M.BASE ? t : new M(t.x, t.y);
                    return r._setWindowSize(e), r.multiply(d), r
                },
                sha256: async (...e) => {
                    if (es.web) {
                        let t = await es.web.subtle.digest("SHA-256", A(...e));
                        return new Uint8Array(t)
                    }
                    if (es.node) {
                        let {
                            createHash: t
                        } = es.node, r = t("sha256");
                        return e.forEach(e => r.update(e)), Uint8Array.from(r.digest())
                    }
                    throw Error("The environment doesn't have sha256 function")
                },
                hmacSha256: async (e, ...t) => {
                    if (es.web) {
                        let r = await es.web.subtle.importKey("raw", e, {
                                name: "HMAC",
                                hash: {
                                    name: "SHA-256"
                                }
                            }, !1, ["sign"]),
                            i = A(...t),
                            n = await es.web.subtle.sign("HMAC", r, i);
                        return new Uint8Array(n)
                    }
                    if (es.node) {
                        let {
                            createHmac: r
                        } = es.node, i = r("sha256", e);
                        return t.forEach(e => i.update(e)), Uint8Array.from(i.digest())
                    }
                    throw Error("The environment doesn't have hmac-sha256 function")
                },
                sha256Sync: void 0,
                hmacSha256Sync: void 0,
                taggedHash: async (e, ...r) => {
                    let i = ec[e];
                    if (void 0 === i) {
                        let r = await t.utils.sha256(Uint8Array.from(e, e => e.charCodeAt(0)));
                        i = A(r, r), ec[e] = i
                    }
                    return t.utils.sha256(i, ...r)
                },
                taggedHashSync: (e, ...t) => {
                    if ("function" != typeof i) throw new y("sha256Sync is undefined, you need to set it");
                    let r = ec[e];
                    if (void 0 === r) {
                        let t = i(Uint8Array.from(e, e => e.charCodeAt(0)));
                        r = A(t, t), ec[e] = r
                    }
                    return i(r, ...t)
                },
                _JacobianPoint: g
            }, Object.defineProperties(t.utils, {
                sha256Sync: {
                    configurable: !1,
                    get: () => i,
                    set(e) {
                        i || (i = e)
                    }
                },
                hmacSha256Sync: {
                    configurable: !1,
                    get: () => n,
                    set(e) {
                        n || (n = e)
                    }
                }
            })
        },
        67029: function(e, t, r) {
            var i;

            function n(e) {
                this.rand = e
            }
            if (e.exports = function(e) {
                    return i || (i = new n(null)), i.generate(e)
                }, e.exports.Rand = n, n.prototype.generate = function(e) {
                    return this._rand(e)
                }, n.prototype._rand = function(e) {
                    if (this.rand.getBytes) return this.rand.getBytes(e);
                    for (var t = new Uint8Array(e), r = 0; r < t.length; r++) t[r] = this.rand.getByte();
                    return t
                }, "object" == typeof self) self.crypto && self.crypto.getRandomValues ? n.prototype._rand = function(e) {
                var t = new Uint8Array(e);
                return self.crypto.getRandomValues(t), t
            } : self.msCrypto && self.msCrypto.getRandomValues ? n.prototype._rand = function(e) {
                var t = new Uint8Array(e);
                return self.msCrypto.getRandomValues(t), t
            } : "object" == typeof window && (n.prototype._rand = function() {
                throw Error("Not implemented yet")
            });
            else try {
                var f = r(89214);
                if ("function" != typeof f.randomBytes) throw Error("Not supported");
                n.prototype._rand = function(e) {
                    return f.randomBytes(e)
                }
            } catch (e) {}
        },
        46963: function(e, t, r) {
            "use strict";
            t.version = r(58274).i8, t.utils = r(22664), t.rand = r(67029), t.curve = r(31062), t.curves = r(13303), t.ec = r(84650), t.eddsa = r(85576)
        },
        57154: function(e, t, r) {
            "use strict";
            var i = r(49489),
                n = r(22664),
                f = n.getNAF,
                a = n.getJSF,
                o = n.assert;

            function s(e, t) {
                this.type = e, this.p = new i(t.p, 16), this.red = t.prime ? i.red(t.prime) : i.mont(this.p), this.zero = new i(0).toRed(this.red), this.one = new i(1).toRed(this.red), this.two = new i(2).toRed(this.red), this.n = t.n && new i(t.n, 16), this.g = t.g && this.pointFromJSON(t.g, t.gRed), this._wnafT1 = [, , , , ], this._wnafT2 = [, , , , ], this._wnafT3 = [, , , , ], this._wnafT4 = [, , , , ], this._bitLength = this.n ? this.n.bitLength() : 0;
                var r = this.n && this.p.div(this.n);
                !r || r.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red))
            }

            function d(e, t) {
                this.curve = e, this.type = t, this.precomputed = null
            }
            e.exports = s, s.prototype.point = function() {
                throw Error("Not implemented")
            }, s.prototype.validate = function() {
                throw Error("Not implemented")
            }, s.prototype._fixedNafMul = function(e, t) {
                o(e.precomputed);
                var r, i, n = e._getDoubles(),
                    a = f(t, 1, this._bitLength),
                    s = (1 << n.step + 1) - (n.step % 2 == 0 ? 2 : 1);
                s /= 3;
                var d = [];
                for (r = 0; r < a.length; r += n.step) {
                    i = 0;
                    for (var c = r + n.step - 1; c >= r; c--) i = (i << 1) + a[c];
                    d.push(i)
                }
                for (var h = this.jpoint(null, null, null), u = this.jpoint(null, null, null), l = s; l > 0; l--) {
                    for (r = 0; r < d.length; r++)(i = d[r]) === l ? u = u.mixedAdd(n.points[r]) : i === -l && (u = u.mixedAdd(n.points[r].neg()));
                    h = h.add(u)
                }
                return h.toP()
            }, s.prototype._wnafMul = function(e, t) {
                var r = 4,
                    i = e._getNAFPoints(r);
                r = i.wnd;
                for (var n = i.points, a = f(t, r, this._bitLength), s = this.jpoint(null, null, null), d = a.length - 1; d >= 0; d--) {
                    for (var c = 0; d >= 0 && 0 === a[d]; d--) c++;
                    if (d >= 0 && c++, s = s.dblp(c), d < 0) break;
                    var h = a[d];
                    o(0 !== h), s = "affine" === e.type ? h > 0 ? s.mixedAdd(n[h - 1 >> 1]) : s.mixedAdd(n[-h - 1 >> 1].neg()) : h > 0 ? s.add(n[h - 1 >> 1]) : s.add(n[-h - 1 >> 1].neg())
                }
                return "affine" === e.type ? s.toP() : s
            }, s.prototype._wnafMulAdd = function(e, t, r, i, n) {
                var o, s, d, c = this._wnafT1,
                    h = this._wnafT2,
                    u = this._wnafT3,
                    l = 0;
                for (o = 0; o < i; o++) {
                    var b = (d = t[o])._getNAFPoints(e);
                    c[o] = b.wnd, h[o] = b.points
                }
                for (o = i - 1; o >= 1; o -= 2) {
                    var p = o - 1,
                        y = o;
                    if (1 !== c[p] || 1 !== c[y]) {
                        u[p] = f(r[p], c[p], this._bitLength), u[y] = f(r[y], c[y], this._bitLength), l = Math.max(u[p].length, l), l = Math.max(u[y].length, l);
                        continue
                    }
                    var m = [t[p], null, null, t[y]];
                    0 === t[p].y.cmp(t[y].y) ? (m[1] = t[p].add(t[y]), m[2] = t[p].toJ().mixedAdd(t[y].neg())) : 0 === t[p].y.cmp(t[y].y.redNeg()) ? (m[1] = t[p].toJ().mixedAdd(t[y]), m[2] = t[p].add(t[y].neg())) : (m[1] = t[p].toJ().mixedAdd(t[y]), m[2] = t[p].toJ().mixedAdd(t[y].neg()));
                    var g = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                        v = a(r[p], r[y]);
                    for (s = 0, l = Math.max(v[0].length, l), u[p] = Array(l), u[y] = Array(l); s < l; s++) {
                        var w = 0 | v[0][s],
                            M = 0 | v[1][s];
                        u[p][s] = g[(w + 1) * 3 + (M + 1)], u[y][s] = 0, h[p] = m
                    }
                }
                var S = this.jpoint(null, null, null),
                    _ = this._wnafT4;
                for (o = l; o >= 0; o--) {
                    for (var x = 0; o >= 0;) {
                        var A = !0;
                        for (s = 0; s < i; s++) _[s] = 0 | u[s][o], 0 !== _[s] && (A = !1);
                        if (!A) break;
                        x++, o--
                    }
                    if (o >= 0 && x++, S = S.dblp(x), o < 0) break;
                    for (s = 0; s < i; s++) {
                        var E = _[s];
                        0 !== E && (E > 0 ? d = h[s][E - 1 >> 1] : E < 0 && (d = h[s][-E - 1 >> 1].neg()), S = "affine" === d.type ? S.mixedAdd(d) : S.add(d))
                    }
                }
                for (o = 0; o < i; o++) h[o] = null;
                return n ? S : S.toP()
            }, s.BasePoint = d, d.prototype.eq = function() {
                throw Error("Not implemented")
            }, d.prototype.validate = function() {
                return this.curve.validate(this)
            }, s.prototype.decodePoint = function(e, t) {
                e = n.toArray(e, t);
                var r = this.p.byteLength();
                if ((4 === e[0] || 6 === e[0] || 7 === e[0]) && e.length - 1 == 2 * r) return 6 === e[0] ? o(e[e.length - 1] % 2 == 0) : 7 === e[0] && o(e[e.length - 1] % 2 == 1), this.point(e.slice(1, 1 + r), e.slice(1 + r, 1 + 2 * r));
                if ((2 === e[0] || 3 === e[0]) && e.length - 1 === r) return this.pointFromX(e.slice(1, 1 + r), 3 === e[0]);
                throw Error("Unknown point format")
            }, d.prototype.encodeCompressed = function(e) {
                return this.encode(e, !0)
            }, d.prototype._encode = function(e) {
                var t = this.curve.p.byteLength(),
                    r = this.getX().toArray("be", t);
                return e ? [this.getY().isEven() ? 2 : 3].concat(r) : [4].concat(r, this.getY().toArray("be", t))
            }, d.prototype.encode = function(e, t) {
                return n.encode(this._encode(t), e)
            }, d.prototype.precompute = function(e) {
                if (this.precomputed) return this;
                var t = {
                    doubles: null,
                    naf: null,
                    beta: null
                };
                return t.naf = this._getNAFPoints(8), t.doubles = this._getDoubles(4, e), t.beta = this._getBeta(), this.precomputed = t, this
            }, d.prototype._hasDoubles = function(e) {
                if (!this.precomputed) return !1;
                var t = this.precomputed.doubles;
                return !!t && t.points.length >= Math.ceil((e.bitLength() + 1) / t.step)
            }, d.prototype._getDoubles = function(e, t) {
                if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
                for (var r = [this], i = this, n = 0; n < t; n += e) {
                    for (var f = 0; f < e; f++) i = i.dbl();
                    r.push(i)
                }
                return {
                    step: e,
                    points: r
                }
            }, d.prototype._getNAFPoints = function(e) {
                if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
                for (var t = [this], r = (1 << e) - 1, i = 1 === r ? null : this.dbl(), n = 1; n < r; n++) t[n] = t[n - 1].add(i);
                return {
                    wnd: e,
                    points: t
                }
            }, d.prototype._getBeta = function() {
                return null
            }, d.prototype.dblp = function(e) {
                for (var t = this, r = 0; r < e; r++) t = t.dbl();
                return t
            }
        },
        32037: function(e, t, r) {
            "use strict";
            var i = r(22664),
                n = r(49489),
                f = r(75335),
                a = r(57154),
                o = i.assert;

            function s(e) {
                this.twisted = (0 | e.a) != 1, this.mOneA = this.twisted && (0 | e.a) == -1, this.extended = this.mOneA, a.call(this, "edwards", e), this.a = new n(e.a, 16).umod(this.red.m), this.a = this.a.toRed(this.red), this.c = new n(e.c, 16).toRed(this.red), this.c2 = this.c.redSqr(), this.d = new n(e.d, 16).toRed(this.red), this.dd = this.d.redAdd(this.d), o(!this.twisted || 0 === this.c.fromRed().cmpn(1)), this.oneC = (0 | e.c) == 1
            }

            function d(e, t, r, i, f) {
                a.BasePoint.call(this, e, "projective"), null === t && null === r && null === i ? (this.x = this.curve.zero, this.y = this.curve.one, this.z = this.curve.one, this.t = this.curve.zero, this.zOne = !0) : (this.x = new n(t, 16), this.y = new n(r, 16), this.z = i ? new n(i, 16) : this.curve.one, this.t = f && new n(f, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)), this.zOne = this.z === this.curve.one, !this.curve.extended || this.t || (this.t = this.x.redMul(this.y), this.zOne || (this.t = this.t.redMul(this.z.redInvm()))))
            }
            f(s, a), e.exports = s, s.prototype._mulA = function(e) {
                return this.mOneA ? e.redNeg() : this.a.redMul(e)
            }, s.prototype._mulC = function(e) {
                return this.oneC ? e : this.c.redMul(e)
            }, s.prototype.jpoint = function(e, t, r, i) {
                return this.point(e, t, r, i)
            }, s.prototype.pointFromX = function(e, t) {
                (e = new n(e, 16)).red || (e = e.toRed(this.red));
                var r = e.redSqr(),
                    i = this.c2.redSub(this.a.redMul(r)),
                    f = this.one.redSub(this.c2.redMul(this.d).redMul(r)),
                    a = i.redMul(f.redInvm()),
                    o = a.redSqrt();
                if (0 !== o.redSqr().redSub(a).cmp(this.zero)) throw Error("invalid point");
                var s = o.fromRed().isOdd();
                return (t && !s || !t && s) && (o = o.redNeg()), this.point(e, o)
            }, s.prototype.pointFromY = function(e, t) {
                (e = new n(e, 16)).red || (e = e.toRed(this.red));
                var r = e.redSqr(),
                    i = r.redSub(this.c2),
                    f = r.redMul(this.d).redMul(this.c2).redSub(this.a),
                    a = i.redMul(f.redInvm());
                if (0 === a.cmp(this.zero)) {
                    if (!t) return this.point(this.zero, e);
                    throw Error("invalid point")
                }
                var o = a.redSqrt();
                if (0 !== o.redSqr().redSub(a).cmp(this.zero)) throw Error("invalid point");
                return o.fromRed().isOdd() !== t && (o = o.redNeg()), this.point(o, e)
            }, s.prototype.validate = function(e) {
                if (e.isInfinity()) return !0;
                e.normalize();
                var t = e.x.redSqr(),
                    r = e.y.redSqr(),
                    i = t.redMul(this.a).redAdd(r),
                    n = this.c2.redMul(this.one.redAdd(this.d.redMul(t).redMul(r)));
                return 0 === i.cmp(n)
            }, f(d, a.BasePoint), s.prototype.pointFromJSON = function(e) {
                return d.fromJSON(this, e)
            }, s.prototype.point = function(e, t, r, i) {
                return new d(this, e, t, r, i)
            }, d.fromJSON = function(e, t) {
                return new d(e, t[0], t[1], t[2])
            }, d.prototype.inspect = function() {
                return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
            }, d.prototype.isInfinity = function() {
                return 0 === this.x.cmpn(0) && (0 === this.y.cmp(this.z) || this.zOne && 0 === this.y.cmp(this.curve.c))
            }, d.prototype._extDbl = function() {
                var e = this.x.redSqr(),
                    t = this.y.redSqr(),
                    r = this.z.redSqr();
                r = r.redIAdd(r);
                var i = this.curve._mulA(e),
                    n = this.x.redAdd(this.y).redSqr().redISub(e).redISub(t),
                    f = i.redAdd(t),
                    a = f.redSub(r),
                    o = i.redSub(t),
                    s = n.redMul(a),
                    d = f.redMul(o),
                    c = n.redMul(o),
                    h = a.redMul(f);
                return this.curve.point(s, d, h, c)
            }, d.prototype._projDbl = function() {
                var e, t, r, i, n, f, a = this.x.redAdd(this.y).redSqr(),
                    o = this.x.redSqr(),
                    s = this.y.redSqr();
                if (this.curve.twisted) {
                    var d = (i = this.curve._mulA(o)).redAdd(s);
                    this.zOne ? (e = a.redSub(o).redSub(s).redMul(d.redSub(this.curve.two)), t = d.redMul(i.redSub(s)), r = d.redSqr().redSub(d).redSub(d)) : (n = this.z.redSqr(), f = d.redSub(n).redISub(n), e = a.redSub(o).redISub(s).redMul(f), t = d.redMul(i.redSub(s)), r = d.redMul(f))
                } else i = o.redAdd(s), n = this.curve._mulC(this.z).redSqr(), f = i.redSub(n).redSub(n), e = this.curve._mulC(a.redISub(i)).redMul(f), t = this.curve._mulC(i).redMul(o.redISub(s)), r = i.redMul(f);
                return this.curve.point(e, t, r)
            }, d.prototype.dbl = function() {
                return this.isInfinity() ? this : this.curve.extended ? this._extDbl() : this._projDbl()
            }, d.prototype._extAdd = function(e) {
                var t = this.y.redSub(this.x).redMul(e.y.redSub(e.x)),
                    r = this.y.redAdd(this.x).redMul(e.y.redAdd(e.x)),
                    i = this.t.redMul(this.curve.dd).redMul(e.t),
                    n = this.z.redMul(e.z.redAdd(e.z)),
                    f = r.redSub(t),
                    a = n.redSub(i),
                    o = n.redAdd(i),
                    s = r.redAdd(t),
                    d = f.redMul(a),
                    c = o.redMul(s),
                    h = f.redMul(s),
                    u = a.redMul(o);
                return this.curve.point(d, c, u, h)
            }, d.prototype._projAdd = function(e) {
                var t, r, i = this.z.redMul(e.z),
                    n = i.redSqr(),
                    f = this.x.redMul(e.x),
                    a = this.y.redMul(e.y),
                    o = this.curve.d.redMul(f).redMul(a),
                    s = n.redSub(o),
                    d = n.redAdd(o),
                    c = this.x.redAdd(this.y).redMul(e.x.redAdd(e.y)).redISub(f).redISub(a),
                    h = i.redMul(s).redMul(c);
                return this.curve.twisted ? (t = i.redMul(d).redMul(a.redSub(this.curve._mulA(f))), r = s.redMul(d)) : (t = i.redMul(d).redMul(a.redSub(f)), r = this.curve._mulC(s).redMul(d)), this.curve.point(h, t, r)
            }, d.prototype.add = function(e) {
                return this.isInfinity() ? e : e.isInfinity() ? this : this.curve.extended ? this._extAdd(e) : this._projAdd(e)
            }, d.prototype.mul = function(e) {
                return this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve._wnafMul(this, e)
            }, d.prototype.mulAdd = function(e, t, r) {
                return this.curve._wnafMulAdd(1, [this, t], [e, r], 2, !1)
            }, d.prototype.jmulAdd = function(e, t, r) {
                return this.curve._wnafMulAdd(1, [this, t], [e, r], 2, !0)
            }, d.prototype.normalize = function() {
                if (this.zOne) return this;
                var e = this.z.redInvm();
                return this.x = this.x.redMul(e), this.y = this.y.redMul(e), this.t && (this.t = this.t.redMul(e)), this.z = this.curve.one, this.zOne = !0, this
            }, d.prototype.neg = function() {
                return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg())
            }, d.prototype.getX = function() {
                return this.normalize(), this.x.fromRed()
            }, d.prototype.getY = function() {
                return this.normalize(), this.y.fromRed()
            }, d.prototype.eq = function(e) {
                return this === e || 0 === this.getX().cmp(e.getX()) && 0 === this.getY().cmp(e.getY())
            }, d.prototype.eqXToP = function(e) {
                var t = e.toRed(this.curve.red).redMul(this.z);
                if (0 === this.x.cmp(t)) return !0;
                for (var r = e.clone(), i = this.curve.redN.redMul(this.z);;) {
                    if (r.iadd(this.curve.n), r.cmp(this.curve.p) >= 0) return !1;
                    if (t.redIAdd(i), 0 === this.x.cmp(t)) return !0
                }
            }, d.prototype.toP = d.prototype.normalize, d.prototype.mixedAdd = d.prototype.add
        },
        31062: function(e, t, r) {
            "use strict";
            t.base = r(57154), t.short = r(26443), t.mont = r(11158), t.edwards = r(32037)
        },
        11158: function(e, t, r) {
            "use strict";
            var i = r(49489),
                n = r(75335),
                f = r(57154),
                a = r(22664);

            function o(e) {
                f.call(this, "mont", e), this.a = new i(e.a, 16).toRed(this.red), this.b = new i(e.b, 16).toRed(this.red), this.i4 = new i(4).toRed(this.red).redInvm(), this.two = new i(2).toRed(this.red), this.a24 = this.i4.redMul(this.a.redAdd(this.two))
            }

            function s(e, t, r) {
                f.BasePoint.call(this, e, "projective"), null === t && null === r ? (this.x = this.curve.one, this.z = this.curve.zero) : (this.x = new i(t, 16), this.z = new i(r, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)))
            }
            n(o, f), e.exports = o, o.prototype.validate = function(e) {
                var t = e.normalize().x,
                    r = t.redSqr(),
                    i = r.redMul(t).redAdd(r.redMul(this.a)).redAdd(t);
                return 0 === i.redSqrt().redSqr().cmp(i)
            }, n(s, f.BasePoint), o.prototype.decodePoint = function(e, t) {
                return this.point(a.toArray(e, t), 1)
            }, o.prototype.point = function(e, t) {
                return new s(this, e, t)
            }, o.prototype.pointFromJSON = function(e) {
                return s.fromJSON(this, e)
            }, s.prototype.precompute = function() {}, s.prototype._encode = function() {
                return this.getX().toArray("be", this.curve.p.byteLength())
            }, s.fromJSON = function(e, t) {
                return new s(e, t[0], t[1] || e.one)
            }, s.prototype.inspect = function() {
                return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
            }, s.prototype.isInfinity = function() {
                return 0 === this.z.cmpn(0)
            }, s.prototype.dbl = function() {
                var e = this.x.redAdd(this.z).redSqr(),
                    t = this.x.redSub(this.z).redSqr(),
                    r = e.redSub(t),
                    i = e.redMul(t),
                    n = r.redMul(t.redAdd(this.curve.a24.redMul(r)));
                return this.curve.point(i, n)
            }, s.prototype.add = function() {
                throw Error("Not supported on Montgomery curve")
            }, s.prototype.diffAdd = function(e, t) {
                var r = this.x.redAdd(this.z),
                    i = this.x.redSub(this.z),
                    n = e.x.redAdd(e.z),
                    f = e.x.redSub(e.z).redMul(r),
                    a = n.redMul(i),
                    o = t.z.redMul(f.redAdd(a).redSqr()),
                    s = t.x.redMul(f.redISub(a).redSqr());
                return this.curve.point(o, s)
            }, s.prototype.mul = function(e) {
                for (var t = e.clone(), r = this, i = this.curve.point(null, null), n = []; 0 !== t.cmpn(0); t.iushrn(1)) n.push(t.andln(1));
                for (var f = n.length - 1; f >= 0; f--) 0 === n[f] ? (r = r.diffAdd(i, this), i = i.dbl()) : (i = r.diffAdd(i, this), r = r.dbl());
                return i
            }, s.prototype.mulAdd = function() {
                throw Error("Not supported on Montgomery curve")
            }, s.prototype.jumlAdd = function() {
                throw Error("Not supported on Montgomery curve")
            }, s.prototype.eq = function(e) {
                return 0 === this.getX().cmp(e.getX())
            }, s.prototype.normalize = function() {
                return this.x = this.x.redMul(this.z.redInvm()), this.z = this.curve.one, this
            }, s.prototype.getX = function() {
                return this.normalize(), this.x.fromRed()
            }
        },
        26443: function(e, t, r) {
            "use strict";
            var i = r(22664),
                n = r(49489),
                f = r(75335),
                a = r(57154),
                o = i.assert;

            function s(e) {
                a.call(this, "short", e), this.a = new n(e.a, 16).toRed(this.red), this.b = new n(e.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(e), this._endoWnafT1 = [, , , , ], this._endoWnafT2 = [, , , , ]
            }

            function d(e, t, r, i) {
                a.BasePoint.call(this, e, "affine"), null === t && null === r ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new n(t, 16), this.y = new n(r, 16), i && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1)
            }

            function c(e, t, r, i) {
                a.BasePoint.call(this, e, "jacobian"), null === t && null === r && null === i ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new n(0)) : (this.x = new n(t, 16), this.y = new n(r, 16), this.z = new n(i, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one
            }
            f(s, a), e.exports = s, s.prototype._getEndomorphism = function(e) {
                if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
                    if (e.beta) t = new n(e.beta, 16).toRed(this.red);
                    else {
                        var t, r, i, f = this._getEndoRoots(this.p);
                        t = (t = 0 > f[0].cmp(f[1]) ? f[0] : f[1]).toRed(this.red)
                    }
                    if (e.lambda) r = new n(e.lambda, 16);
                    else {
                        var a = this._getEndoRoots(this.n);
                        0 === this.g.mul(a[0]).x.cmp(this.g.x.redMul(t)) ? r = a[0] : (r = a[1], o(0 === this.g.mul(r).x.cmp(this.g.x.redMul(t))))
                    }
                    return i = e.basis ? e.basis.map(function(e) {
                        return {
                            a: new n(e.a, 16),
                            b: new n(e.b, 16)
                        }
                    }) : this._getEndoBasis(r), {
                        beta: t,
                        lambda: r,
                        basis: i
                    }
                }
            }, s.prototype._getEndoRoots = function(e) {
                var t = e === this.p ? this.red : n.mont(e),
                    r = new n(2).toRed(t).redInvm(),
                    i = r.redNeg(),
                    f = new n(3).toRed(t).redNeg().redSqrt().redMul(r);
                return [i.redAdd(f).fromRed(), i.redSub(f).fromRed()]
            }, s.prototype._getEndoBasis = function(e) {
                for (var t, r, i, f, a, o, s, d, c, h = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), u = e, l = this.n.clone(), b = new n(1), p = new n(0), y = new n(0), m = new n(1), g = 0; 0 !== u.cmpn(0);) {
                    var v = l.div(u);
                    d = l.sub(v.mul(u)), c = y.sub(v.mul(b));
                    var w = m.sub(v.mul(p));
                    if (!i && 0 > d.cmp(h)) t = s.neg(), r = b, i = d.neg(), f = c;
                    else if (i && 2 == ++g) break;
                    s = d, l = u, u = d, y = b, b = c, m = p, p = w
                }
                a = d.neg(), o = c;
                var M = i.sqr().add(f.sqr());
                return a.sqr().add(o.sqr()).cmp(M) >= 0 && (a = t, o = r), i.negative && (i = i.neg(), f = f.neg()), a.negative && (a = a.neg(), o = o.neg()), [{
                    a: i,
                    b: f
                }, {
                    a: a,
                    b: o
                }]
            }, s.prototype._endoSplit = function(e) {
                var t = this.endo.basis,
                    r = t[0],
                    i = t[1],
                    n = i.b.mul(e).divRound(this.n),
                    f = r.b.neg().mul(e).divRound(this.n),
                    a = n.mul(r.a),
                    o = f.mul(i.a),
                    s = n.mul(r.b),
                    d = f.mul(i.b);
                return {
                    k1: e.sub(a).sub(o),
                    k2: s.add(d).neg()
                }
            }, s.prototype.pointFromX = function(e, t) {
                (e = new n(e, 16)).red || (e = e.toRed(this.red));
                var r = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b),
                    i = r.redSqrt();
                if (0 !== i.redSqr().redSub(r).cmp(this.zero)) throw Error("invalid point");
                var f = i.fromRed().isOdd();
                return (t && !f || !t && f) && (i = i.redNeg()), this.point(e, i)
            }, s.prototype.validate = function(e) {
                if (e.inf) return !0;
                var t = e.x,
                    r = e.y,
                    i = this.a.redMul(t),
                    n = t.redSqr().redMul(t).redIAdd(i).redIAdd(this.b);
                return 0 === r.redSqr().redISub(n).cmpn(0)
            }, s.prototype._endoWnafMulAdd = function(e, t, r) {
                for (var i = this._endoWnafT1, n = this._endoWnafT2, f = 0; f < e.length; f++) {
                    var a = this._endoSplit(t[f]),
                        o = e[f],
                        s = o._getBeta();
                    a.k1.negative && (a.k1.ineg(), o = o.neg(!0)), a.k2.negative && (a.k2.ineg(), s = s.neg(!0)), i[2 * f] = o, i[2 * f + 1] = s, n[2 * f] = a.k1, n[2 * f + 1] = a.k2
                }
                for (var d = this._wnafMulAdd(1, i, n, 2 * f, r), c = 0; c < 2 * f; c++) i[c] = null, n[c] = null;
                return d
            }, f(d, a.BasePoint), s.prototype.point = function(e, t, r) {
                return new d(this, e, t, r)
            }, s.prototype.pointFromJSON = function(e, t) {
                return d.fromJSON(this, e, t)
            }, d.prototype._getBeta = function() {
                if (this.curve.endo) {
                    var e = this.precomputed;
                    if (e && e.beta) return e.beta;
                    var t = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
                    if (e) {
                        var r = this.curve,
                            i = function(e) {
                                return r.point(e.x.redMul(r.endo.beta), e.y)
                            };
                        e.beta = t, t.precomputed = {
                            beta: null,
                            naf: e.naf && {
                                wnd: e.naf.wnd,
                                points: e.naf.points.map(i)
                            },
                            doubles: e.doubles && {
                                step: e.doubles.step,
                                points: e.doubles.points.map(i)
                            }
                        }
                    }
                    return t
                }
            }, d.prototype.toJSON = function() {
                return this.precomputed ? [this.x, this.y, this.precomputed && {
                    doubles: this.precomputed.doubles && {
                        step: this.precomputed.doubles.step,
                        points: this.precomputed.doubles.points.slice(1)
                    },
                    naf: this.precomputed.naf && {
                        wnd: this.precomputed.naf.wnd,
                        points: this.precomputed.naf.points.slice(1)
                    }
                }] : [this.x, this.y]
            }, d.fromJSON = function(e, t, r) {
                "string" == typeof t && (t = JSON.parse(t));
                var i = e.point(t[0], t[1], r);
                if (!t[2]) return i;

                function n(t) {
                    return e.point(t[0], t[1], r)
                }
                var f = t[2];
                return i.precomputed = {
                    beta: null,
                    doubles: f.doubles && {
                        step: f.doubles.step,
                        points: [i].concat(f.doubles.points.map(n))
                    },
                    naf: f.naf && {
                        wnd: f.naf.wnd,
                        points: [i].concat(f.naf.points.map(n))
                    }
                }, i
            }, d.prototype.inspect = function() {
                return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
            }, d.prototype.isInfinity = function() {
                return this.inf
            }, d.prototype.add = function(e) {
                if (this.inf) return e;
                if (e.inf) return this;
                if (this.eq(e)) return this.dbl();
                if (this.neg().eq(e) || 0 === this.x.cmp(e.x)) return this.curve.point(null, null);
                var t = this.y.redSub(e.y);
                0 !== t.cmpn(0) && (t = t.redMul(this.x.redSub(e.x).redInvm()));
                var r = t.redSqr().redISub(this.x).redISub(e.x),
                    i = t.redMul(this.x.redSub(r)).redISub(this.y);
                return this.curve.point(r, i)
            }, d.prototype.dbl = function() {
                if (this.inf) return this;
                var e = this.y.redAdd(this.y);
                if (0 === e.cmpn(0)) return this.curve.point(null, null);
                var t = this.curve.a,
                    r = this.x.redSqr(),
                    i = e.redInvm(),
                    n = r.redAdd(r).redIAdd(r).redIAdd(t).redMul(i),
                    f = n.redSqr().redISub(this.x.redAdd(this.x)),
                    a = n.redMul(this.x.redSub(f)).redISub(this.y);
                return this.curve.point(f, a)
            }, d.prototype.getX = function() {
                return this.x.fromRed()
            }, d.prototype.getY = function() {
                return this.y.fromRed()
            }, d.prototype.mul = function(e) {
                return (e = new n(e, 16), this.isInfinity()) ? this : this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [e]) : this.curve._wnafMul(this, e)
            }, d.prototype.mulAdd = function(e, t, r) {
                var i = [this, t],
                    n = [e, r];
                return this.curve.endo ? this.curve._endoWnafMulAdd(i, n) : this.curve._wnafMulAdd(1, i, n, 2)
            }, d.prototype.jmulAdd = function(e, t, r) {
                var i = [this, t],
                    n = [e, r];
                return this.curve.endo ? this.curve._endoWnafMulAdd(i, n, !0) : this.curve._wnafMulAdd(1, i, n, 2, !0)
            }, d.prototype.eq = function(e) {
                return this === e || this.inf === e.inf && (this.inf || 0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y))
            }, d.prototype.neg = function(e) {
                if (this.inf) return this;
                var t = this.curve.point(this.x, this.y.redNeg());
                if (e && this.precomputed) {
                    var r = this.precomputed,
                        i = function(e) {
                            return e.neg()
                        };
                    t.precomputed = {
                        naf: r.naf && {
                            wnd: r.naf.wnd,
                            points: r.naf.points.map(i)
                        },
                        doubles: r.doubles && {
                            step: r.doubles.step,
                            points: r.doubles.points.map(i)
                        }
                    }
                }
                return t
            }, d.prototype.toJ = function() {
                return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one)
            }, f(c, a.BasePoint), s.prototype.jpoint = function(e, t, r) {
                return new c(this, e, t, r)
            }, c.prototype.toP = function() {
                if (this.isInfinity()) return this.curve.point(null, null);
                var e = this.z.redInvm(),
                    t = e.redSqr(),
                    r = this.x.redMul(t),
                    i = this.y.redMul(t).redMul(e);
                return this.curve.point(r, i)
            }, c.prototype.neg = function() {
                return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
            }, c.prototype.add = function(e) {
                if (this.isInfinity()) return e;
                if (e.isInfinity()) return this;
                var t = e.z.redSqr(),
                    r = this.z.redSqr(),
                    i = this.x.redMul(t),
                    n = e.x.redMul(r),
                    f = this.y.redMul(t.redMul(e.z)),
                    a = e.y.redMul(r.redMul(this.z)),
                    o = i.redSub(n),
                    s = f.redSub(a);
                if (0 === o.cmpn(0)) return 0 !== s.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                var d = o.redSqr(),
                    c = d.redMul(o),
                    h = i.redMul(d),
                    u = s.redSqr().redIAdd(c).redISub(h).redISub(h),
                    l = s.redMul(h.redISub(u)).redISub(f.redMul(c)),
                    b = this.z.redMul(e.z).redMul(o);
                return this.curve.jpoint(u, l, b)
            }, c.prototype.mixedAdd = function(e) {
                if (this.isInfinity()) return e.toJ();
                if (e.isInfinity()) return this;
                var t = this.z.redSqr(),
                    r = this.x,
                    i = e.x.redMul(t),
                    n = this.y,
                    f = e.y.redMul(t).redMul(this.z),
                    a = r.redSub(i),
                    o = n.redSub(f);
                if (0 === a.cmpn(0)) return 0 !== o.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                var s = a.redSqr(),
                    d = s.redMul(a),
                    c = r.redMul(s),
                    h = o.redSqr().redIAdd(d).redISub(c).redISub(c),
                    u = o.redMul(c.redISub(h)).redISub(n.redMul(d)),
                    l = this.z.redMul(a);
                return this.curve.jpoint(h, u, l)
            }, c.prototype.dblp = function(e) {
                if (0 === e || this.isInfinity()) return this;
                if (!e) return this.dbl();
                if (this.curve.zeroA || this.curve.threeA) {
                    var t, r = this;
                    for (t = 0; t < e; t++) r = r.dbl();
                    return r
                }
                var i = this.curve.a,
                    n = this.curve.tinv,
                    f = this.x,
                    a = this.y,
                    o = this.z,
                    s = o.redSqr().redSqr(),
                    d = a.redAdd(a);
                for (t = 0; t < e; t++) {
                    var c = f.redSqr(),
                        h = d.redSqr(),
                        u = h.redSqr(),
                        l = c.redAdd(c).redIAdd(c).redIAdd(i.redMul(s)),
                        b = f.redMul(h),
                        p = l.redSqr().redISub(b.redAdd(b)),
                        y = b.redISub(p),
                        m = l.redMul(y);
                    m = m.redIAdd(m).redISub(u);
                    var g = d.redMul(o);
                    t + 1 < e && (s = s.redMul(u)), f = p, o = g, d = m
                }
                return this.curve.jpoint(f, d.redMul(n), o)
            }, c.prototype.dbl = function() {
                return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
            }, c.prototype._zeroDbl = function() {
                if (this.zOne) {
                    var e, t, r, i = this.x.redSqr(),
                        n = this.y.redSqr(),
                        f = n.redSqr(),
                        a = this.x.redAdd(n).redSqr().redISub(i).redISub(f);
                    a = a.redIAdd(a);
                    var o = i.redAdd(i).redIAdd(i),
                        s = o.redSqr().redISub(a).redISub(a),
                        d = f.redIAdd(f);
                    d = (d = d.redIAdd(d)).redIAdd(d), e = s, t = o.redMul(a.redISub(s)).redISub(d), r = this.y.redAdd(this.y)
                } else {
                    var c = this.x.redSqr(),
                        h = this.y.redSqr(),
                        u = h.redSqr(),
                        l = this.x.redAdd(h).redSqr().redISub(c).redISub(u);
                    l = l.redIAdd(l);
                    var b = c.redAdd(c).redIAdd(c),
                        p = b.redSqr(),
                        y = u.redIAdd(u);
                    y = (y = y.redIAdd(y)).redIAdd(y), e = p.redISub(l).redISub(l), t = b.redMul(l.redISub(e)).redISub(y), r = (r = this.y.redMul(this.z)).redIAdd(r)
                }
                return this.curve.jpoint(e, t, r)
            }, c.prototype._threeDbl = function() {
                if (this.zOne) {
                    var e, t, r, i = this.x.redSqr(),
                        n = this.y.redSqr(),
                        f = n.redSqr(),
                        a = this.x.redAdd(n).redSqr().redISub(i).redISub(f);
                    a = a.redIAdd(a);
                    var o = i.redAdd(i).redIAdd(i).redIAdd(this.curve.a),
                        s = o.redSqr().redISub(a).redISub(a);
                    e = s;
                    var d = f.redIAdd(f);
                    d = (d = d.redIAdd(d)).redIAdd(d), t = o.redMul(a.redISub(s)).redISub(d), r = this.y.redAdd(this.y)
                } else {
                    var c = this.z.redSqr(),
                        h = this.y.redSqr(),
                        u = this.x.redMul(h),
                        l = this.x.redSub(c).redMul(this.x.redAdd(c));
                    l = l.redAdd(l).redIAdd(l);
                    var b = u.redIAdd(u),
                        p = (b = b.redIAdd(b)).redAdd(b);
                    e = l.redSqr().redISub(p), r = this.y.redAdd(this.z).redSqr().redISub(h).redISub(c);
                    var y = h.redSqr();
                    y = (y = (y = y.redIAdd(y)).redIAdd(y)).redIAdd(y), t = l.redMul(b.redISub(e)).redISub(y)
                }
                return this.curve.jpoint(e, t, r)
            }, c.prototype._dbl = function() {
                var e = this.curve.a,
                    t = this.x,
                    r = this.y,
                    i = this.z,
                    n = i.redSqr().redSqr(),
                    f = t.redSqr(),
                    a = r.redSqr(),
                    o = f.redAdd(f).redIAdd(f).redIAdd(e.redMul(n)),
                    s = t.redAdd(t),
                    d = (s = s.redIAdd(s)).redMul(a),
                    c = o.redSqr().redISub(d.redAdd(d)),
                    h = d.redISub(c),
                    u = a.redSqr();
                u = (u = (u = u.redIAdd(u)).redIAdd(u)).redIAdd(u);
                var l = o.redMul(h).redISub(u),
                    b = r.redAdd(r).redMul(i);
                return this.curve.jpoint(c, l, b)
            }, c.prototype.trpl = function() {
                if (!this.curve.zeroA) return this.dbl().add(this);
                var e = this.x.redSqr(),
                    t = this.y.redSqr(),
                    r = this.z.redSqr(),
                    i = t.redSqr(),
                    n = e.redAdd(e).redIAdd(e),
                    f = n.redSqr(),
                    a = this.x.redAdd(t).redSqr().redISub(e).redISub(i),
                    o = (a = (a = (a = a.redIAdd(a)).redAdd(a).redIAdd(a)).redISub(f)).redSqr(),
                    s = i.redIAdd(i);
                s = (s = (s = s.redIAdd(s)).redIAdd(s)).redIAdd(s);
                var d = n.redIAdd(a).redSqr().redISub(f).redISub(o).redISub(s),
                    c = t.redMul(d);
                c = (c = c.redIAdd(c)).redIAdd(c);
                var h = this.x.redMul(o).redISub(c);
                h = (h = h.redIAdd(h)).redIAdd(h);
                var u = this.y.redMul(d.redMul(s.redISub(d)).redISub(a.redMul(o)));
                u = (u = (u = u.redIAdd(u)).redIAdd(u)).redIAdd(u);
                var l = this.z.redAdd(a).redSqr().redISub(r).redISub(o);
                return this.curve.jpoint(h, u, l)
            }, c.prototype.mul = function(e, t) {
                return e = new n(e, t), this.curve._wnafMul(this, e)
            }, c.prototype.eq = function(e) {
                if ("affine" === e.type) return this.eq(e.toJ());
                if (this === e) return !0;
                var t = this.z.redSqr(),
                    r = e.z.redSqr();
                if (0 !== this.x.redMul(r).redISub(e.x.redMul(t)).cmpn(0)) return !1;
                var i = t.redMul(this.z),
                    n = r.redMul(e.z);
                return 0 === this.y.redMul(n).redISub(e.y.redMul(i)).cmpn(0)
            }, c.prototype.eqXToP = function(e) {
                var t = this.z.redSqr(),
                    r = e.toRed(this.curve.red).redMul(t);
                if (0 === this.x.cmp(r)) return !0;
                for (var i = e.clone(), n = this.curve.redN.redMul(t);;) {
                    if (i.iadd(this.curve.n), i.cmp(this.curve.p) >= 0) return !1;
                    if (r.redIAdd(n), 0 === this.x.cmp(r)) return !0
                }
            }, c.prototype.inspect = function() {
                return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
            }, c.prototype.isInfinity = function() {
                return 0 === this.z.cmpn(0)
            }
        },
        13303: function(e, t, r) {
            "use strict";
            var i, n = r(55336),
                f = r(31062),
                a = r(22664).assert;

            function o(e) {
                "short" === e.type ? this.curve = new f.short(e) : "edwards" === e.type ? this.curve = new f.edwards(e) : this.curve = new f.mont(e), this.g = this.curve.g, this.n = this.curve.n, this.hash = e.hash, a(this.g.validate(), "Invalid curve"), a(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
            }

            function s(e, r) {
                Object.defineProperty(t, e, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        var i = new o(r);
                        return Object.defineProperty(t, e, {
                            configurable: !0,
                            enumerable: !0,
                            value: i
                        }), i
                    }
                })
            }
            t.PresetCurve = o, s("p192", {
                type: "short",
                prime: "p192",
                p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
                a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
                b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
                n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
                hash: n.sha256,
                gRed: !1,
                g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
            }), s("p224", {
                type: "short",
                prime: "p224",
                p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
                a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
                b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
                n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
                hash: n.sha256,
                gRed: !1,
                g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
            }), s("p256", {
                type: "short",
                prime: null,
                p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
                a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
                b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
                n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
                hash: n.sha256,
                gRed: !1,
                g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
            }), s("p384", {
                type: "short",
                prime: null,
                p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
                a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
                b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
                n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
                hash: n.sha384,
                gRed: !1,
                g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]
            }), s("p521", {
                type: "short",
                prime: null,
                p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
                a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
                b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
                n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
                hash: n.sha512,
                gRed: !1,
                g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]
            }), s("curve25519", {
                type: "mont",
                prime: "p25519",
                p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                a: "76d06",
                b: "1",
                n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                hash: n.sha256,
                gRed: !1,
                g: ["9"]
            }), s("ed25519", {
                type: "edwards",
                prime: "p25519",
                p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                a: "-1",
                c: "1",
                d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
                n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                hash: n.sha256,
                gRed: !1,
                g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
            });
            try {
                i = r(42076)
            } catch (e) {
                i = void 0
            }
            s("secp256k1", {
                type: "short",
                prime: "k256",
                p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
                a: "0",
                b: "7",
                n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
                h: "1",
                hash: n.sha256,
                beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
                lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
                basis: [{
                    a: "3086d221a7d46bcde86c90e49284eb15",
                    b: "-e4437ed6010e88286f547fa90abfe4c3"
                }, {
                    a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                    b: "3086d221a7d46bcde86c90e49284eb15"
                }],
                gRed: !1,
                g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", i]
            })
        },
        84650: function(e, t, r) {
            "use strict";
            var i = r(49489),
                n = r(83715),
                f = r(22664),
                a = r(13303),
                o = r(67029),
                s = f.assert,
                d = r(66040),
                c = r(89239);

            function h(e) {
                if (!(this instanceof h)) return new h(e);
                "string" == typeof e && (s(Object.prototype.hasOwnProperty.call(a, e), "Unknown curve " + e), e = a[e]), e instanceof a.PresetCurve && (e = {
                    curve: e
                }), this.curve = e.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = e.curve.g, this.g.precompute(e.curve.n.bitLength() + 1), this.hash = e.hash || e.curve.hash
            }
            e.exports = h, h.prototype.keyPair = function(e) {
                return new d(this, e)
            }, h.prototype.keyFromPrivate = function(e, t) {
                return d.fromPrivate(this, e, t)
            }, h.prototype.keyFromPublic = function(e, t) {
                return d.fromPublic(this, e, t)
            }, h.prototype.genKeyPair = function(e) {
                e || (e = {});
                for (var t = new n({
                        hash: this.hash,
                        pers: e.pers,
                        persEnc: e.persEnc || "utf8",
                        entropy: e.entropy || o(this.hash.hmacStrength),
                        entropyEnc: e.entropy && e.entropyEnc || "utf8",
                        nonce: this.n.toArray()
                    }), r = this.n.byteLength(), f = this.n.sub(new i(2));;) {
                    var a = new i(t.generate(r));
                    if (!(a.cmp(f) > 0)) return a.iaddn(1), this.keyFromPrivate(a)
                }
            }, h.prototype._truncateToN = function(e, t) {
                var r = 8 * e.byteLength() - this.n.bitLength();
                return (r > 0 && (e = e.ushrn(r)), !t && e.cmp(this.n) >= 0) ? e.sub(this.n) : e
            }, h.prototype.sign = function(e, t, r, f) {
                "object" == typeof r && (f = r, r = null), f || (f = {}), t = this.keyFromPrivate(t, r), e = this._truncateToN(new i(e, 16));
                for (var a = this.n.byteLength(), o = t.getPrivate().toArray("be", a), s = e.toArray("be", a), d = new n({
                        hash: this.hash,
                        entropy: o,
                        nonce: s,
                        pers: f.pers,
                        persEnc: f.persEnc || "utf8"
                    }), h = this.n.sub(new i(1)), u = 0;; u++) {
                    var l = f.k ? f.k(u) : new i(d.generate(this.n.byteLength()));
                    if (!(0 >= (l = this._truncateToN(l, !0)).cmpn(1) || l.cmp(h) >= 0)) {
                        var b = this.g.mul(l);
                        if (!b.isInfinity()) {
                            var p = b.getX(),
                                y = p.umod(this.n);
                            if (0 !== y.cmpn(0)) {
                                var m = l.invm(this.n).mul(y.mul(t.getPrivate()).iadd(e));
                                if (0 !== (m = m.umod(this.n)).cmpn(0)) {
                                    var g = (b.getY().isOdd() ? 1 : 0) | (0 !== p.cmp(y) ? 2 : 0);
                                    return f.canonical && m.cmp(this.nh) > 0 && (m = this.n.sub(m), g ^= 1), new c({
                                        r: y,
                                        s: m,
                                        recoveryParam: g
                                    })
                                }
                            }
                        }
                    }
                }
            }, h.prototype.verify = function(e, t, r, n) {
                e = this._truncateToN(new i(e, 16)), r = this.keyFromPublic(r, n);
                var f, a = (t = new c(t, "hex")).r,
                    o = t.s;
                if (0 > a.cmpn(1) || a.cmp(this.n) >= 0 || 0 > o.cmpn(1) || o.cmp(this.n) >= 0) return !1;
                var s = o.invm(this.n),
                    d = s.mul(e).umod(this.n),
                    h = s.mul(a).umod(this.n);
                return this.curve._maxwellTrick ? !(f = this.g.jmulAdd(d, r.getPublic(), h)).isInfinity() && f.eqXToP(a) : !(f = this.g.mulAdd(d, r.getPublic(), h)).isInfinity() && 0 === f.getX().umod(this.n).cmp(a)
            }, h.prototype.recoverPubKey = function(e, t, r, n) {
                s((3 & r) === r, "The recovery param is more than two bits"), t = new c(t, n);
                var f = this.n,
                    a = new i(e),
                    o = t.r,
                    d = t.s,
                    h = 1 & r,
                    u = r >> 1;
                if (o.cmp(this.curve.p.umod(this.curve.n)) >= 0 && u) throw Error("Unable to find sencond key candinate");
                o = u ? this.curve.pointFromX(o.add(this.curve.n), h) : this.curve.pointFromX(o, h);
                var l = t.r.invm(f),
                    b = f.sub(a).mul(l).umod(f),
                    p = d.mul(l).umod(f);
                return this.g.mulAdd(b, o, p)
            }, h.prototype.getKeyRecoveryParam = function(e, t, r, i) {
                if (null !== (t = new c(t, i)).recoveryParam) return t.recoveryParam;
                for (var n, f = 0; f < 4; f++) {
                    try {
                        n = this.recoverPubKey(e, t, f)
                    } catch (e) {
                        continue
                    }
                    if (n.eq(r)) return f
                }
                throw Error("Unable to find valid recovery factor")
            }
        },
        66040: function(e, t, r) {
            "use strict";
            var i = r(49489),
                n = r(22664).assert;

            function f(e, t) {
                this.ec = e, this.priv = null, this.pub = null, t.priv && this._importPrivate(t.priv, t.privEnc), t.pub && this._importPublic(t.pub, t.pubEnc)
            }
            e.exports = f, f.fromPublic = function(e, t, r) {
                return t instanceof f ? t : new f(e, {
                    pub: t,
                    pubEnc: r
                })
            }, f.fromPrivate = function(e, t, r) {
                return t instanceof f ? t : new f(e, {
                    priv: t,
                    privEnc: r
                })
            }, f.prototype.validate = function() {
                var e = this.getPublic();
                return e.isInfinity() ? {
                    result: !1,
                    reason: "Invalid public key"
                } : e.validate() ? e.mul(this.ec.curve.n).isInfinity() ? {
                    result: !0,
                    reason: null
                } : {
                    result: !1,
                    reason: "Public key * N != O"
                } : {
                    result: !1,
                    reason: "Public key is not a point"
                }
            }, f.prototype.getPublic = function(e, t) {
                return ("string" == typeof e && (t = e, e = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), t) ? this.pub.encode(t, e) : this.pub
            }, f.prototype.getPrivate = function(e) {
                return "hex" === e ? this.priv.toString(16, 2) : this.priv
            }, f.prototype._importPrivate = function(e, t) {
                this.priv = new i(e, t || 16), this.priv = this.priv.umod(this.ec.curve.n)
            }, f.prototype._importPublic = function(e, t) {
                if (e.x || e.y) {
                    "mont" === this.ec.curve.type ? n(e.x, "Need x coordinate") : ("short" === this.ec.curve.type || "edwards" === this.ec.curve.type) && n(e.x && e.y, "Need both x and y coordinate"), this.pub = this.ec.curve.point(e.x, e.y);
                    return
                }
                this.pub = this.ec.curve.decodePoint(e, t)
            }, f.prototype.derive = function(e) {
                return e.validate() || n(e.validate(), "public point not validated"), e.mul(this.priv).getX()
            }, f.prototype.sign = function(e, t, r) {
                return this.ec.sign(e, this, t, r)
            }, f.prototype.verify = function(e, t) {
                return this.ec.verify(e, t, this)
            }, f.prototype.inspect = function() {
                return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
            }
        },
        89239: function(e, t, r) {
            "use strict";
            var i = r(49489),
                n = r(22664),
                f = n.assert;

            function a(e, t) {
                if (e instanceof a) return e;
                this._importDER(e, t) || (f(e.r && e.s, "Signature without r or s"), this.r = new i(e.r, 16), this.s = new i(e.s, 16), void 0 === e.recoveryParam ? this.recoveryParam = null : this.recoveryParam = e.recoveryParam)
            }

            function o() {
                this.place = 0
            }

            function s(e, t) {
                var r = e[t.place++];
                if (!(128 & r)) return r;
                var i = 15 & r;
                if (0 === i || i > 4) return !1;
                for (var n = 0, f = 0, a = t.place; f < i; f++, a++) n <<= 8, n |= e[a], n >>>= 0;
                return !(n <= 127) && (t.place = a, n)
            }

            function d(e) {
                for (var t = 0, r = e.length - 1; !e[t] && !(128 & e[t + 1]) && t < r;) t++;
                return 0 === t ? e : e.slice(t)
            }

            function c(e, t) {
                if (t < 128) {
                    e.push(t);
                    return
                }
                var r = 1 + (Math.log(t) / Math.LN2 >>> 3);
                for (e.push(128 | r); --r;) e.push(t >>> (r << 3) & 255);
                e.push(t)
            }
            e.exports = a, a.prototype._importDER = function(e, t) {
                e = n.toArray(e, t);
                var r = new o;
                if (48 !== e[r.place++]) return !1;
                var f = s(e, r);
                if (!1 === f || f + r.place !== e.length || 2 !== e[r.place++]) return !1;
                var a = s(e, r);
                if (!1 === a) return !1;
                var d = e.slice(r.place, a + r.place);
                if (r.place += a, 2 !== e[r.place++]) return !1;
                var c = s(e, r);
                if (!1 === c || e.length !== c + r.place) return !1;
                var h = e.slice(r.place, c + r.place);
                if (0 === d[0]) {
                    if (!(128 & d[1])) return !1;
                    d = d.slice(1)
                }
                if (0 === h[0]) {
                    if (!(128 & h[1])) return !1;
                    h = h.slice(1)
                }
                return this.r = new i(d), this.s = new i(h), this.recoveryParam = null, !0
            }, a.prototype.toDER = function(e) {
                var t = this.r.toArray(),
                    r = this.s.toArray();
                for (128 & t[0] && (t = [0].concat(t)), 128 & r[0] && (r = [0].concat(r)), t = d(t), r = d(r); !r[0] && !(128 & r[1]);) r = r.slice(1);
                var i = [2];
                c(i, t.length), (i = i.concat(t)).push(2), c(i, r.length);
                var f = i.concat(r),
                    a = [48];
                return c(a, f.length), a = a.concat(f), n.encode(a, e)
            }
        },
        85576: function(e, t, r) {
            "use strict";
            var i = r(55336),
                n = r(13303),
                f = r(22664),
                a = f.assert,
                o = f.parseBytes,
                s = r(74804),
                d = r(10083);

            function c(e) {
                if (a("ed25519" === e, "only tested with ed25519 so far"), !(this instanceof c)) return new c(e);
                e = n[e].curve, this.curve = e, this.g = e.g, this.g.precompute(e.n.bitLength() + 1), this.pointClass = e.point().constructor, this.encodingLength = Math.ceil(e.n.bitLength() / 8), this.hash = i.sha512
            }
            e.exports = c, c.prototype.sign = function(e, t) {
                e = o(e);
                var r = this.keyFromSecret(t),
                    i = this.hashInt(r.messagePrefix(), e),
                    n = this.g.mul(i),
                    f = this.encodePoint(n),
                    a = this.hashInt(f, r.pubBytes(), e).mul(r.priv()),
                    s = i.add(a).umod(this.curve.n);
                return this.makeSignature({
                    R: n,
                    S: s,
                    Rencoded: f
                })
            }, c.prototype.verify = function(e, t, r) {
                e = o(e), t = this.makeSignature(t);
                var i = this.keyFromPublic(r),
                    n = this.hashInt(t.Rencoded(), i.pubBytes(), e),
                    f = this.g.mul(t.S());
                return t.R().add(i.pub().mul(n)).eq(f)
            }, c.prototype.hashInt = function() {
                for (var e = this.hash(), t = 0; t < arguments.length; t++) e.update(arguments[t]);
                return f.intFromLE(e.digest()).umod(this.curve.n)
            }, c.prototype.keyFromPublic = function(e) {
                return s.fromPublic(this, e)
            }, c.prototype.keyFromSecret = function(e) {
                return s.fromSecret(this, e)
            }, c.prototype.makeSignature = function(e) {
                return e instanceof d ? e : new d(this, e)
            }, c.prototype.encodePoint = function(e) {
                var t = e.getY().toArray("le", this.encodingLength);
                return t[this.encodingLength - 1] |= e.getX().isOdd() ? 128 : 0, t
            }, c.prototype.decodePoint = function(e) {
                var t = (e = f.parseBytes(e)).length - 1,
                    r = e.slice(0, t).concat(-129 & e[t]),
                    i = (128 & e[t]) != 0,
                    n = f.intFromLE(r);
                return this.curve.pointFromY(n, i)
            }, c.prototype.encodeInt = function(e) {
                return e.toArray("le", this.encodingLength)
            }, c.prototype.decodeInt = function(e) {
                return f.intFromLE(e)
            }, c.prototype.isPoint = function(e) {
                return e instanceof this.pointClass
            }
        },
        74804: function(e, t, r) {
            "use strict";
            var i = r(22664),
                n = i.assert,
                f = i.parseBytes,
                a = i.cachedProperty;

            function o(e, t) {
                this.eddsa = e, this._secret = f(t.secret), e.isPoint(t.pub) ? this._pub = t.pub : this._pubBytes = f(t.pub)
            }
            o.fromPublic = function(e, t) {
                return t instanceof o ? t : new o(e, {
                    pub: t
                })
            }, o.fromSecret = function(e, t) {
                return t instanceof o ? t : new o(e, {
                    secret: t
                })
            }, o.prototype.secret = function() {
                return this._secret
            }, a(o, "pubBytes", function() {
                return this.eddsa.encodePoint(this.pub())
            }), a(o, "pub", function() {
                return this._pubBytes ? this.eddsa.decodePoint(this._pubBytes) : this.eddsa.g.mul(this.priv())
            }), a(o, "privBytes", function() {
                var e = this.eddsa,
                    t = this.hash(),
                    r = e.encodingLength - 1,
                    i = t.slice(0, e.encodingLength);
                return i[0] &= 248, i[r] &= 127, i[r] |= 64, i
            }), a(o, "priv", function() {
                return this.eddsa.decodeInt(this.privBytes())
            }), a(o, "hash", function() {
                return this.eddsa.hash().update(this.secret()).digest()
            }), a(o, "messagePrefix", function() {
                return this.hash().slice(this.eddsa.encodingLength)
            }), o.prototype.sign = function(e) {
                return n(this._secret, "KeyPair can only verify"), this.eddsa.sign(e, this)
            }, o.prototype.verify = function(e, t) {
                return this.eddsa.verify(e, t, this)
            }, o.prototype.getSecret = function(e) {
                return n(this._secret, "KeyPair is public only"), i.encode(this.secret(), e)
            }, o.prototype.getPublic = function(e) {
                return i.encode(this.pubBytes(), e)
            }, e.exports = o
        },
        10083: function(e, t, r) {
            "use strict";
            var i = r(49489),
                n = r(22664),
                f = n.assert,
                a = n.cachedProperty,
                o = n.parseBytes;

            function s(e, t) {
                this.eddsa = e, "object" != typeof t && (t = o(t)), Array.isArray(t) && (t = {
                    R: t.slice(0, e.encodingLength),
                    S: t.slice(e.encodingLength)
                }), f(t.R && t.S, "Signature without R or S"), e.isPoint(t.R) && (this._R = t.R), t.S instanceof i && (this._S = t.S), this._Rencoded = Array.isArray(t.R) ? t.R : t.Rencoded, this._Sencoded = Array.isArray(t.S) ? t.S : t.Sencoded
            }
            a(s, "S", function() {
                return this.eddsa.decodeInt(this.Sencoded())
            }), a(s, "R", function() {
                return this.eddsa.decodePoint(this.Rencoded())
            }), a(s, "Rencoded", function() {
                return this.eddsa.encodePoint(this.R())
            }), a(s, "Sencoded", function() {
                return this.eddsa.encodeInt(this.S())
            }), s.prototype.toBytes = function() {
                return this.Rencoded().concat(this.Sencoded())
            }, s.prototype.toHex = function() {
                return n.encode(this.toBytes(), "hex").toUpperCase()
            }, e.exports = s
        },
        42076: function(e) {
            e.exports = {
                doubles: {
                    step: 4,
                    points: [
                        ["e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a", "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"],
                        ["8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508", "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"],
                        ["175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739", "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"],
                        ["363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640", "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"],
                        ["8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c", "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"],
                        ["723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda", "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"],
                        ["eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa", "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"],
                        ["100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0", "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"],
                        ["e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d", "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"],
                        ["feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d", "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"],
                        ["da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1", "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"],
                        ["53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0", "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"],
                        ["8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047", "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"],
                        ["385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862", "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"],
                        ["6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7", "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"],
                        ["3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd", "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"],
                        ["85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83", "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"],
                        ["948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a", "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"],
                        ["6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8", "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"],
                        ["e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d", "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"],
                        ["e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725", "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"],
                        ["213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754", "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"],
                        ["4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c", "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"],
                        ["fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6", "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"],
                        ["76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39", "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"],
                        ["c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891", "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"],
                        ["d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b", "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"],
                        ["b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03", "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"],
                        ["e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d", "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"],
                        ["a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070", "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"],
                        ["90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4", "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"],
                        ["8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da", "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"],
                        ["e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11", "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"],
                        ["8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e", "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"],
                        ["e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41", "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"],
                        ["b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef", "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"],
                        ["d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8", "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"],
                        ["324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d", "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"],
                        ["4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96", "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"],
                        ["9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd", "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"],
                        ["6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5", "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"],
                        ["a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266", "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"],
                        ["7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71", "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"],
                        ["928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac", "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"],
                        ["85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751", "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"],
                        ["ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e", "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"],
                        ["827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241", "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"],
                        ["eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3", "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"],
                        ["e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f", "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"],
                        ["1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19", "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"],
                        ["146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be", "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"],
                        ["fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9", "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"],
                        ["da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2", "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"],
                        ["a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13", "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"],
                        ["174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c", "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"],
                        ["959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba", "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"],
                        ["d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151", "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"],
                        ["64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073", "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"],
                        ["8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458", "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"],
                        ["13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b", "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"],
                        ["bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366", "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"],
                        ["8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa", "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"],
                        ["8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0", "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"],
                        ["dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787", "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"],
                        ["f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e", "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"]
                    ]
                },
                naf: {
                    wnd: 7,
                    points: [
                        ["f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9", "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"],
                        ["2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4", "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"],
                        ["5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc", "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"],
                        ["acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe", "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"],
                        ["774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb", "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"],
                        ["f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8", "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"],
                        ["d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e", "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"],
                        ["defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34", "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"],
                        ["2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c", "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"],
                        ["352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5", "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"],
                        ["2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f", "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"],
                        ["9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714", "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"],
                        ["daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729", "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"],
                        ["c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db", "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"],
                        ["6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4", "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"],
                        ["1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5", "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"],
                        ["605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479", "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"],
                        ["62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d", "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"],
                        ["80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f", "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"],
                        ["7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb", "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"],
                        ["d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9", "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"],
                        ["49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963", "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"],
                        ["77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74", "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"],
                        ["f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530", "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"],
                        ["463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b", "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"],
                        ["f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247", "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"],
                        ["caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1", "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"],
                        ["2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120", "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"],
                        ["7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435", "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"],
                        ["754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18", "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"],
                        ["e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8", "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"],
                        ["186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb", "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"],
                        ["df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f", "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"],
                        ["5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143", "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"],
                        ["290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba", "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"],
                        ["af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45", "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"],
                        ["766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a", "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"],
                        ["59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e", "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"],
                        ["f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8", "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"],
                        ["7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c", "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"],
                        ["948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519", "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"],
                        ["7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab", "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"],
                        ["3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca", "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"],
                        ["d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf", "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"],
                        ["1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610", "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"],
                        ["733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4", "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"],
                        ["15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c", "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"],
                        ["a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940", "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"],
                        ["e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980", "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"],
                        ["311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3", "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"],
                        ["34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf", "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"],
                        ["f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63", "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"],
                        ["d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448", "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"],
                        ["32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf", "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"],
                        ["7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5", "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"],
                        ["ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6", "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"],
                        ["16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5", "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"],
                        ["eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99", "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"],
                        ["78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51", "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"],
                        ["494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5", "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"],
                        ["a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5", "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"],
                        ["c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997", "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"],
                        ["841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881", "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"],
                        ["5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5", "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"],
                        ["36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66", "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"],
                        ["336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726", "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"],
                        ["8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede", "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"],
                        ["1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94", "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"],
                        ["85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31", "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"],
                        ["29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51", "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"],
                        ["a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252", "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"],
                        ["4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5", "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"],
                        ["d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b", "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"],
                        ["ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4", "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"],
                        ["af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f", "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"],
                        ["e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889", "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"],
                        ["591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246", "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"],
                        ["11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984", "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"],
                        ["3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a", "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"],
                        ["cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030", "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"],
                        ["c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197", "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"],
                        ["c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593", "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"],
                        ["a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef", "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"],
                        ["347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38", "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"],
                        ["da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a", "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"],
                        ["c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111", "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"],
                        ["4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502", "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"],
                        ["3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea", "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"],
                        ["cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26", "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"],
                        ["b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986", "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"],
                        ["d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e", "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"],
                        ["48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4", "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"],
                        ["dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda", "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"],
                        ["6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859", "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"],
                        ["e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f", "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"],
                        ["eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c", "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"],
                        ["13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942", "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"],
                        ["ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a", "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"],
                        ["b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80", "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"],
                        ["ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d", "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"],
                        ["8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1", "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"],
                        ["52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63", "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"],
                        ["e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352", "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"],
                        ["7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193", "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"],
                        ["5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00", "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"],
                        ["32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58", "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"],
                        ["e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7", "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"],
                        ["8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8", "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"],
                        ["4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e", "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"],
                        ["3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d", "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"],
                        ["674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b", "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"],
                        ["d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f", "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"],
                        ["30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6", "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"],
                        ["be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297", "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"],
                        ["93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a", "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"],
                        ["b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c", "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"],
                        ["d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52", "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"],
                        ["d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb", "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"],
                        ["463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065", "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"],
                        ["7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917", "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"],
                        ["74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9", "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"],
                        ["30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3", "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"],
                        ["9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57", "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"],
                        ["176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66", "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"],
                        ["75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8", "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"],
                        ["809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721", "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"],
                        ["1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180", "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"]
                    ]
                }
            }
        },
        22664: function(e, t, r) {
            "use strict";
            var i = r(49489),
                n = r(8786),
                f = r(28280);
            t.assert = n, t.toArray = f.toArray, t.zero2 = f.zero2, t.toHex = f.toHex, t.encode = f.encode, t.getNAF = function(e, t, r) {
                var i = Array(Math.max(e.bitLength(), r) + 1);
                i.fill(0);
                for (var n = 1 << t + 1, f = e.clone(), a = 0; a < i.length; a++) {
                    var o, s = f.andln(n - 1);
                    f.isOdd() ? (o = s > (n >> 1) - 1 ? (n >> 1) - s : s, f.isubn(o)) : o = 0, i[a] = o, f.iushrn(1)
                }
                return i
            }, t.getJSF = function(e, t) {
                var r = [
                    [],
                    []
                ];
                e = e.clone(), t = t.clone();
                for (var i = 0, n = 0; e.cmpn(-i) > 0 || t.cmpn(-n) > 0;) {
                    var f, a, o, s = e.andln(3) + i & 3,
                        d = t.andln(3) + n & 3;
                    3 === s && (s = -1), 3 === d && (d = -1), a = (1 & s) == 0 ? 0 : (3 == (f = e.andln(7) + i & 7) || 5 === f) && 2 === d ? -s : s, r[0].push(a), o = (1 & d) == 0 ? 0 : (3 == (f = t.andln(7) + n & 7) || 5 === f) && 2 === s ? -d : d, r[1].push(o), 2 * i === a + 1 && (i = 1 - i), 2 * n === o + 1 && (n = 1 - n), e.iushrn(1), t.iushrn(1)
                }
                return r
            }, t.cachedProperty = function(e, t, r) {
                var i = "_" + t;
                e.prototype[t] = function() {
                    return void 0 !== this[i] ? this[i] : this[i] = r.call(this)
                }
            }, t.parseBytes = function(e) {
                return "string" == typeof e ? t.toArray(e, "hex") : e
            }, t.intFromLE = function(e) {
                return new i(e, "hex", "le")
            }
        },
        49489: function(e, t, r) {
            ! function(e, t) {
                "use strict";

                function i(e, t) {
                    if (!e) throw Error(t || "Assertion failed")
                }

                function n(e, t) {
                    e.super_ = t;
                    var r = function() {};
                    r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
                }

                function f(e, t, r) {
                    if (f.isBN(e)) return e;
                    this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== e && (("le" === t || "be" === t) && (r = t, t = 10), this._init(e || 0, t || 10, r || "be"))
                }
                "object" == typeof e ? e.exports = f : t.BN = f, f.BN = f, f.wordSize = 26;
                try {
                    d = "undefined" != typeof window && void 0 !== window.Buffer ? window.Buffer : r(85568).Buffer
                } catch (e) {}

                function a(e, t) {
                    var r = e.charCodeAt(t);
                    return r >= 65 && r <= 70 ? r - 55 : r >= 97 && r <= 102 ? r - 87 : r - 48 & 15
                }

                function o(e, t, r) {
                    var i = a(e, r);
                    return r - 1 >= t && (i |= a(e, r - 1) << 4), i
                }

                function s(e, t, r, i) {
                    for (var n = 0, f = Math.min(e.length, r), a = t; a < f; a++) {
                        var o = e.charCodeAt(a) - 48;
                        n *= i, o >= 49 ? n += o - 49 + 10 : o >= 17 ? n += o - 17 + 10 : n += o
                    }
                    return n
                }
                f.isBN = function(e) {
                    return e instanceof f || null !== e && "object" == typeof e && e.constructor.wordSize === f.wordSize && Array.isArray(e.words)
                }, f.max = function(e, t) {
                    return e.cmp(t) > 0 ? e : t
                }, f.min = function(e, t) {
                    return 0 > e.cmp(t) ? e : t
                }, f.prototype._init = function(e, t, r) {
                    if ("number" == typeof e) return this._initNumber(e, t, r);
                    if ("object" == typeof e) return this._initArray(e, t, r);
                    "hex" === t && (t = 16), i(t === (0 | t) && t >= 2 && t <= 36);
                    var n = 0;
                    "-" === (e = e.toString().replace(/\s+/g, ""))[0] && (n++, this.negative = 1), n < e.length && (16 === t ? this._parseHex(e, n, r) : (this._parseBase(e, t, n), "le" === r && this._initArray(this.toArray(), t, r)))
                }, f.prototype._initNumber = function(e, t, r) {
                    e < 0 && (this.negative = 1, e = -e), e < 67108864 ? (this.words = [67108863 & e], this.length = 1) : e < 4503599627370496 ? (this.words = [67108863 & e, e / 67108864 & 67108863], this.length = 2) : (i(e < 9007199254740992), this.words = [67108863 & e, e / 67108864 & 67108863, 1], this.length = 3), "le" === r && this._initArray(this.toArray(), t, r)
                }, f.prototype._initArray = function(e, t, r) {
                    if (i("number" == typeof e.length), e.length <= 0) return this.words = [0], this.length = 1, this;
                    this.length = Math.ceil(e.length / 3), this.words = Array(this.length);
                    for (var n, f, a = 0; a < this.length; a++) this.words[a] = 0;
                    var o = 0;
                    if ("be" === r)
                        for (a = e.length - 1, n = 0; a >= 0; a -= 3) f = e[a] | e[a - 1] << 8 | e[a - 2] << 16, this.words[n] |= f << o & 67108863, this.words[n + 1] = f >>> 26 - o & 67108863, (o += 24) >= 26 && (o -= 26, n++);
                    else if ("le" === r)
                        for (a = 0, n = 0; a < e.length; a += 3) f = e[a] | e[a + 1] << 8 | e[a + 2] << 16, this.words[n] |= f << o & 67108863, this.words[n + 1] = f >>> 26 - o & 67108863, (o += 24) >= 26 && (o -= 26, n++);
                    return this.strip()
                }, f.prototype._parseHex = function(e, t, r) {
                    this.length = Math.ceil((e.length - t) / 6), this.words = Array(this.length);
                    for (var i, n = 0; n < this.length; n++) this.words[n] = 0;
                    var f = 0,
                        a = 0;
                    if ("be" === r)
                        for (n = e.length - 1; n >= t; n -= 2) i = o(e, t, n) << f, this.words[a] |= 67108863 & i, f >= 18 ? (f -= 18, a += 1, this.words[a] |= i >>> 26) : f += 8;
                    else
                        for (n = (e.length - t) % 2 == 0 ? t + 1 : t; n < e.length; n += 2) i = o(e, t, n) << f, this.words[a] |= 67108863 & i, f >= 18 ? (f -= 18, a += 1, this.words[a] |= i >>> 26) : f += 8;
                    this.strip()
                }, f.prototype._parseBase = function(e, t, r) {
                    this.words = [0], this.length = 1;
                    for (var i = 0, n = 1; n <= 67108863; n *= t) i++;
                    i--, n = n / t | 0;
                    for (var f = e.length - r, a = f % i, o = Math.min(f, f - a) + r, d = 0, c = r; c < o; c += i) d = s(e, c, c + i, t), this.imuln(n), this.words[0] + d < 67108864 ? this.words[0] += d : this._iaddn(d);
                    if (0 !== a) {
                        var h = 1;
                        for (d = s(e, c, e.length, t), c = 0; c < a; c++) h *= t;
                        this.imuln(h), this.words[0] + d < 67108864 ? this.words[0] += d : this._iaddn(d)
                    }
                    this.strip()
                }, f.prototype.copy = function(e) {
                    e.words = Array(this.length);
                    for (var t = 0; t < this.length; t++) e.words[t] = this.words[t];
                    e.length = this.length, e.negative = this.negative, e.red = this.red
                }, f.prototype.clone = function() {
                    var e = new f(null);
                    return this.copy(e), e
                }, f.prototype._expand = function(e) {
                    for (; this.length < e;) this.words[this.length++] = 0;
                    return this
                }, f.prototype.strip = function() {
                    for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                    return this._normSign()
                }, f.prototype._normSign = function() {
                    return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
                }, f.prototype.inspect = function() {
                    return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                };
                var d, c = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                    h = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                    u = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

                function l(e, t, r) {
                    r.negative = t.negative ^ e.negative;
                    var i = e.length + t.length | 0;
                    r.length = i, i = i - 1 | 0;
                    var n = 0 | e.words[0],
                        f = 0 | t.words[0],
                        a = n * f,
                        o = 67108863 & a,
                        s = a / 67108864 | 0;
                    r.words[0] = o;
                    for (var d = 1; d < i; d++) {
                        for (var c = s >>> 26, h = 67108863 & s, u = Math.min(d, t.length - 1), l = Math.max(0, d - e.length + 1); l <= u; l++) {
                            var b = d - l | 0;
                            c += (a = (n = 0 | e.words[b]) * (f = 0 | t.words[l]) + h) / 67108864 | 0, h = 67108863 & a
                        }
                        r.words[d] = 0 | h, s = 0 | c
                    }
                    return 0 !== s ? r.words[d] = 0 | s : r.length--, r.strip()
                }
                f.prototype.toString = function(e, t) {
                    if (t = 0 | t || 1, 16 === (e = e || 10) || "hex" === e) {
                        r = "";
                        for (var r, n = 0, f = 0, a = 0; a < this.length; a++) {
                            var o = this.words[a],
                                s = ((o << n | f) & 16777215).toString(16);
                            r = 0 != (f = o >>> 24 - n & 16777215) || a !== this.length - 1 ? c[6 - s.length] + s + r : s + r, (n += 2) >= 26 && (n -= 26, a--)
                        }
                        for (0 !== f && (r = f.toString(16) + r); r.length % t != 0;) r = "0" + r;
                        return 0 !== this.negative && (r = "-" + r), r
                    }
                    if (e === (0 | e) && e >= 2 && e <= 36) {
                        var d = h[e],
                            l = u[e];
                        r = "";
                        var b = this.clone();
                        for (b.negative = 0; !b.isZero();) {
                            var p = b.modn(l).toString(e);
                            r = (b = b.idivn(l)).isZero() ? p + r : c[d - p.length] + p + r
                        }
                        for (this.isZero() && (r = "0" + r); r.length % t != 0;) r = "0" + r;
                        return 0 !== this.negative && (r = "-" + r), r
                    }
                    i(!1, "Base should be between 2 and 36")
                }, f.prototype.toNumber = function() {
                    var e = this.words[0];
                    return 2 === this.length ? e += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? e += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && i(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -e : e
                }, f.prototype.toJSON = function() {
                    return this.toString(16)
                }, f.prototype.toBuffer = function(e, t) {
                    return i(void 0 !== d), this.toArrayLike(d, e, t)
                }, f.prototype.toArray = function(e, t) {
                    return this.toArrayLike(Array, e, t)
                }, f.prototype.toArrayLike = function(e, t, r) {
                    var n, f, a = this.byteLength(),
                        o = r || Math.max(1, a);
                    i(a <= o, "byte array longer than desired length"), i(o > 0, "Requested array length <= 0"), this.strip();
                    var s = new e(o),
                        d = this.clone();
                    if ("le" === t) {
                        for (f = 0; !d.isZero(); f++) n = d.andln(255), d.iushrn(8), s[f] = n;
                        for (; f < o; f++) s[f] = 0
                    } else {
                        for (f = 0; f < o - a; f++) s[f] = 0;
                        for (f = 0; !d.isZero(); f++) n = d.andln(255), d.iushrn(8), s[o - f - 1] = n
                    }
                    return s
                }, Math.clz32 ? f.prototype._countBits = function(e) {
                    return 32 - Math.clz32(e)
                } : f.prototype._countBits = function(e) {
                    var t = e,
                        r = 0;
                    return t >= 4096 && (r += 13, t >>>= 13), t >= 64 && (r += 7, t >>>= 7), t >= 8 && (r += 4, t >>>= 4), t >= 2 && (r += 2, t >>>= 2), r + t
                }, f.prototype._zeroBits = function(e) {
                    if (0 === e) return 26;
                    var t = e,
                        r = 0;
                    return (8191 & t) == 0 && (r += 13, t >>>= 13), (127 & t) == 0 && (r += 7, t >>>= 7), (15 & t) == 0 && (r += 4, t >>>= 4), (3 & t) == 0 && (r += 2, t >>>= 2), (1 & t) == 0 && r++, r
                }, f.prototype.bitLength = function() {
                    var e = this.words[this.length - 1],
                        t = this._countBits(e);
                    return (this.length - 1) * 26 + t
                }, f.prototype.zeroBits = function() {
                    if (this.isZero()) return 0;
                    for (var e = 0, t = 0; t < this.length; t++) {
                        var r = this._zeroBits(this.words[t]);
                        if (e += r, 26 !== r) break
                    }
                    return e
                }, f.prototype.byteLength = function() {
                    return Math.ceil(this.bitLength() / 8)
                }, f.prototype.toTwos = function(e) {
                    return 0 !== this.negative ? this.abs().inotn(e).iaddn(1) : this.clone()
                }, f.prototype.fromTwos = function(e) {
                    return this.testn(e - 1) ? this.notn(e).iaddn(1).ineg() : this.clone()
                }, f.prototype.isNeg = function() {
                    return 0 !== this.negative
                }, f.prototype.neg = function() {
                    return this.clone().ineg()
                }, f.prototype.ineg = function() {
                    return this.isZero() || (this.negative ^= 1), this
                }, f.prototype.iuor = function(e) {
                    for (; this.length < e.length;) this.words[this.length++] = 0;
                    for (var t = 0; t < e.length; t++) this.words[t] = this.words[t] | e.words[t];
                    return this.strip()
                }, f.prototype.ior = function(e) {
                    return i((this.negative | e.negative) == 0), this.iuor(e)
                }, f.prototype.or = function(e) {
                    return this.length > e.length ? this.clone().ior(e) : e.clone().ior(this)
                }, f.prototype.uor = function(e) {
                    return this.length > e.length ? this.clone().iuor(e) : e.clone().iuor(this)
                }, f.prototype.iuand = function(e) {
                    var t;
                    t = this.length > e.length ? e : this;
                    for (var r = 0; r < t.length; r++) this.words[r] = this.words[r] & e.words[r];
                    return this.length = t.length, this.strip()
                }, f.prototype.iand = function(e) {
                    return i((this.negative | e.negative) == 0), this.iuand(e)
                }, f.prototype.and = function(e) {
                    return this.length > e.length ? this.clone().iand(e) : e.clone().iand(this)
                }, f.prototype.uand = function(e) {
                    return this.length > e.length ? this.clone().iuand(e) : e.clone().iuand(this)
                }, f.prototype.iuxor = function(e) {
                    this.length > e.length ? (t = this, r = e) : (t = e, r = this);
                    for (var t, r, i = 0; i < r.length; i++) this.words[i] = t.words[i] ^ r.words[i];
                    if (this !== t)
                        for (; i < t.length; i++) this.words[i] = t.words[i];
                    return this.length = t.length, this.strip()
                }, f.prototype.ixor = function(e) {
                    return i((this.negative | e.negative) == 0), this.iuxor(e)
                }, f.prototype.xor = function(e) {
                    return this.length > e.length ? this.clone().ixor(e) : e.clone().ixor(this)
                }, f.prototype.uxor = function(e) {
                    return this.length > e.length ? this.clone().iuxor(e) : e.clone().iuxor(this)
                }, f.prototype.inotn = function(e) {
                    i("number" == typeof e && e >= 0);
                    var t = 0 | Math.ceil(e / 26),
                        r = e % 26;
                    this._expand(t), r > 0 && t--;
                    for (var n = 0; n < t; n++) this.words[n] = 67108863 & ~this.words[n];
                    return r > 0 && (this.words[n] = ~this.words[n] & 67108863 >> 26 - r), this.strip()
                }, f.prototype.notn = function(e) {
                    return this.clone().inotn(e)
                }, f.prototype.setn = function(e, t) {
                    i("number" == typeof e && e >= 0);
                    var r = e / 26 | 0,
                        n = e % 26;
                    return this._expand(r + 1), t ? this.words[r] = this.words[r] | 1 << n : this.words[r] = this.words[r] & ~(1 << n), this.strip()
                }, f.prototype.iadd = function(e) {
                    if (0 !== this.negative && 0 === e.negative) return this.negative = 0, t = this.isub(e), this.negative ^= 1, this._normSign();
                    if (0 === this.negative && 0 !== e.negative) return e.negative = 0, t = this.isub(e), e.negative = 1, t._normSign();
                    this.length > e.length ? (r = this, i = e) : (r = e, i = this);
                    for (var t, r, i, n = 0, f = 0; f < i.length; f++) t = (0 | r.words[f]) + (0 | i.words[f]) + n, this.words[f] = 67108863 & t, n = t >>> 26;
                    for (; 0 !== n && f < r.length; f++) t = (0 | r.words[f]) + n, this.words[f] = 67108863 & t, n = t >>> 26;
                    if (this.length = r.length, 0 !== n) this.words[this.length] = n, this.length++;
                    else if (r !== this)
                        for (; f < r.length; f++) this.words[f] = r.words[f];
                    return this
                }, f.prototype.add = function(e) {
                    var t;
                    return 0 !== e.negative && 0 === this.negative ? (e.negative = 0, t = this.sub(e), e.negative ^= 1, t) : 0 === e.negative && 0 !== this.negative ? (this.negative = 0, t = e.sub(this), this.negative = 1, t) : this.length > e.length ? this.clone().iadd(e) : e.clone().iadd(this)
                }, f.prototype.isub = function(e) {
                    if (0 !== e.negative) {
                        e.negative = 0;
                        var t, r, i = this.iadd(e);
                        return e.negative = 1, i._normSign()
                    }
                    if (0 !== this.negative) return this.negative = 0, this.iadd(e), this.negative = 1, this._normSign();
                    var n = this.cmp(e);
                    if (0 === n) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                    n > 0 ? (t = this, r = e) : (t = e, r = this);
                    for (var f = 0, a = 0; a < r.length; a++) f = (i = (0 | t.words[a]) - (0 | r.words[a]) + f) >> 26, this.words[a] = 67108863 & i;
                    for (; 0 !== f && a < t.length; a++) f = (i = (0 | t.words[a]) + f) >> 26, this.words[a] = 67108863 & i;
                    if (0 === f && a < t.length && t !== this)
                        for (; a < t.length; a++) this.words[a] = t.words[a];
                    return this.length = Math.max(this.length, a), t !== this && (this.negative = 1), this.strip()
                }, f.prototype.sub = function(e) {
                    return this.clone().isub(e)
                };
                var b = function(e, t, r) {
                    var i, n, f, a = e.words,
                        o = t.words,
                        s = r.words,
                        d = 0,
                        c = 0 | a[0],
                        h = 8191 & c,
                        u = c >>> 13,
                        l = 0 | a[1],
                        b = 8191 & l,
                        p = l >>> 13,
                        y = 0 | a[2],
                        m = 8191 & y,
                        g = y >>> 13,
                        v = 0 | a[3],
                        w = 8191 & v,
                        M = v >>> 13,
                        S = 0 | a[4],
                        _ = 8191 & S,
                        x = S >>> 13,
                        A = 0 | a[5],
                        E = 8191 & A,
                        I = A >>> 13,
                        P = 0 | a[6],
                        z = 8191 & P,
                        O = P >>> 13,
                        B = 0 | a[7],
                        k = 8191 & B,
                        R = B >>> 13,
                        q = 0 | a[8],
                        j = 8191 & q,
                        C = q >>> 13,
                        T = 0 | a[9],
                        N = 8191 & T,
                        L = T >>> 13,
                        U = 0 | o[0],
                        H = 8191 & U,
                        $ = U >>> 13,
                        F = 0 | o[1],
                        D = 8191 & F,
                        K = F >>> 13,
                        V = 0 | o[2],
                        J = 8191 & V,
                        W = V >>> 13,
                        Z = 0 | o[3],
                        X = 8191 & Z,
                        G = Z >>> 13,
                        Y = 0 | o[4],
                        Q = 8191 & Y,
                        ee = Y >>> 13,
                        et = 0 | o[5],
                        er = 8191 & et,
                        ei = et >>> 13,
                        en = 0 | o[6],
                        ef = 8191 & en,
                        ea = en >>> 13,
                        eo = 0 | o[7],
                        es = 8191 & eo,
                        ed = eo >>> 13,
                        ec = 0 | o[8],
                        eh = 8191 & ec,
                        eu = ec >>> 13,
                        el = 0 | o[9],
                        eb = 8191 & el,
                        ep = el >>> 13;
                    r.negative = e.negative ^ t.negative, r.length = 19;
                    var ey = (d + (i = Math.imul(h, H)) | 0) + ((8191 & (n = (n = Math.imul(h, $)) + Math.imul(u, H) | 0)) << 13) | 0;
                    d = ((f = Math.imul(u, $)) + (n >>> 13) | 0) + (ey >>> 26) | 0, ey &= 67108863, i = Math.imul(b, H), n = (n = Math.imul(b, $)) + Math.imul(p, H) | 0, f = Math.imul(p, $);
                    var em = (d + (i = i + Math.imul(h, D) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(h, K) | 0) + Math.imul(u, D) | 0)) << 13) | 0;
                    d = ((f = f + Math.imul(u, K) | 0) + (n >>> 13) | 0) + (em >>> 26) | 0, em &= 67108863, i = Math.imul(m, H), n = (n = Math.imul(m, $)) + Math.imul(g, H) | 0, f = Math.imul(g, $), i = i + Math.imul(b, D) | 0, n = (n = n + Math.imul(b, K) | 0) + Math.imul(p, D) | 0, f = f + Math.imul(p, K) | 0;
                    var eg = (d + (i = i + Math.imul(h, J) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(h, W) | 0) + Math.imul(u, J) | 0)) << 13) | 0;
                    d = ((f = f + Math.imul(u, W) | 0) + (n >>> 13) | 0) + (eg >>> 26) | 0, eg &= 67108863, i = Math.imul(w, H), n = (n = Math.imul(w, $)) + Math.imul(M, H) | 0, f = Math.imul(M, $), i = i + Math.imul(m, D) | 0, n = (n = n + Math.imul(m, K) | 0) + Math.imul(g, D) | 0, f = f + Math.imul(g, K) | 0, i = i + Math.imul(b, J) | 0, n = (n = n + Math.imul(b, W) | 0) + Math.imul(p, J) | 0, f = f + Math.imul(p, W) | 0;
                    var ev = (d + (i = i + Math.imul(h, X) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(h, G) | 0) + Math.imul(u, X) | 0)) << 13) | 0;
                    d = ((f = f + Math.imul(u, G) | 0) + (n >>> 13) | 0) + (ev >>> 26) | 0, ev &= 67108863, i = Math.imul(_, H), n = (n = Math.imul(_, $)) + Math.imul(x, H) | 0, f = Math.imul(x, $), i = i + Math.imul(w, D) | 0, n = (n = n + Math.imul(w, K) | 0) + Math.imul(M, D) | 0, f = f + Math.imul(M, K) | 0, i = i + Math.imul(m, J) | 0, n = (n = n + Math.imul(m, W) | 0) + Math.imul(g, J) | 0, f = f + Math.imul(g, W) | 0, i = i + Math.imul(b, X) | 0, n = (n = n + Math.imul(b, G) | 0) + Math.imul(p, X) | 0, f = f + Math.imul(p, G) | 0;
                    var ew = (d + (i = i + Math.imul(h, Q) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(h, ee) | 0) + Math.imul(u, Q) | 0)) << 13) | 0;
                    d = ((f = f + Math.imul(u, ee) | 0) + (n >>> 13) | 0) + (ew >>> 26) | 0, ew &= 67108863, i = Math.imul(E, H), n = (n = Math.imul(E, $)) + Math.imul(I, H) | 0, f = Math.imul(I, $), i = i + Math.imul(_, D) | 0, n = (n = n + Math.imul(_, K) | 0) + Math.imul(x, D) | 0, f = f + Math.imul(x, K) | 0, i = i + Math.imul(w, J) | 0, n = (n = n + Math.imul(w, W) | 0) + Math.imul(M, J) | 0, f = f + Math.imul(M, W) | 0, i = i + Math.imul(m, X) | 0, n = (n = n + Math.imul(m, G) | 0) + Math.imul(g, X) | 0, f = f + Math.imul(g, G) | 0, i = i + Math.imul(b, Q) | 0, n = (n = n + Math.imul(b, ee) | 0) + Math.imul(p, Q) | 0, f = f + Math.imul(p, ee) | 0;
                    var eM = (d + (i = i + Math.imul(h, er) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(h, ei) | 0) + Math.imul(u, er) | 0)) << 13) | 0;
                    d = ((f = f + Math.imul(u, ei) | 0) + (n >>> 13) | 0) + (eM >>> 26) | 0, eM &= 67108863, i = Math.imul(z, H), n = (n = Math.imul(z, $)) + Math.imul(O, H) | 0, f = Math.imul(O, $), i = i + Math.imul(E, D) | 0, n = (n = n + Math.imul(E, K) | 0) + Math.imul(I, D) | 0, f = f + Math.imul(I, K) | 0, i = i + Math.imul(_, J) | 0, n = (n = n + Math.imul(_, W) | 0) + Math.imul(x, J) | 0, f = f + Math.imul(x, W) | 0, i = i + Math.imul(w, X) | 0, n = (n = n + Math.imul(w, G) | 0) + Math.imul(M, X) | 0, f = f + Math.imul(M, G) | 0, i = i + Math.imul(m, Q) | 0, n = (n = n + Math.imul(m, ee) | 0) + Math.imul(g, Q) | 0, f = f + Math.imul(g, ee) | 0, i = i + Math.imul(b, er) | 0, n = (n = n + Math.imul(b, ei) | 0) + Math.imul(p, er) | 0, f = f + Math.imul(p, ei) | 0;
                    var eS = (d + (i = i + Math.imul(h, ef) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(h, ea) | 0) + Math.imul(u, ef) | 0)) << 13) | 0;
                    d = ((f = f + Math.imul(u, ea) | 0) + (n >>> 13) | 0) + (eS >>> 26) | 0, eS &= 67108863, i = Math.imul(k, H), n = (n = Math.imul(k, $)) + Math.imul(R, H) | 0, f = Math.imul(R, $), i = i + Math.imul(z, D) | 0, n = (n = n + Math.imul(z, K) | 0) + Math.imul(O, D) | 0, f = f + Math.imul(O, K) | 0, i = i + Math.imul(E, J) | 0, n = (n = n + Math.imul(E, W) | 0) + Math.imul(I, J) | 0, f = f + Math.imul(I, W) | 0, i = i + Math.imul(_, X) | 0, n = (n = n + Math.imul(_, G) | 0) + Math.imul(x, X) | 0, f = f + Math.imul(x, G) | 0, i = i + Math.imul(w, Q) | 0, n = (n = n + Math.imul(w, ee) | 0) + Math.imul(M, Q) | 0, f = f + Math.imul(M, ee) | 0, i = i + Math.imul(m, er) | 0, n = (n = n + Math.imul(m, ei) | 0) + Math.imul(g, er) | 0, f = f + Math.imul(g, ei) | 0, i = i + Math.imul(b, ef) | 0, n = (n = n + Math.imul(b, ea) | 0) + Math.imul(p, ef) | 0, f = f + Math.imul(p, ea) | 0;
                    var e_ = (d + (i = i + Math.imul(h, es) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(h, ed) | 0) + Math.imul(u, es) | 0)) << 13) | 0;
                    d = ((f = f + Math.imul(u, ed) | 0) + (n >>> 13) | 0) + (e_ >>> 26) | 0, e_ &= 67108863, i = Math.imul(j, H), n = (n = Math.imul(j, $)) + Math.imul(C, H) | 0, f = Math.imul(C, $), i = i + Math.imul(k, D) | 0, n = (n = n + Math.imul(k, K) | 0) + Math.imul(R, D) | 0, f = f + Math.imul(R, K) | 0, i = i + Math.imul(z, J) | 0, n = (n = n + Math.imul(z, W) | 0) + Math.imul(O, J) | 0, f = f + Math.imul(O, W) | 0, i = i + Math.imul(E, X) | 0, n = (n = n + Math.imul(E, G) | 0) + Math.imul(I, X) | 0, f = f + Math.imul(I, G) | 0, i = i + Math.imul(_, Q) | 0, n = (n = n + Math.imul(_, ee) | 0) + Math.imul(x, Q) | 0, f = f + Math.imul(x, ee) | 0, i = i + Math.imul(w, er) | 0, n = (n = n + Math.imul(w, ei) | 0) + Math.imul(M, er) | 0, f = f + Math.imul(M, ei) | 0, i = i + Math.imul(m, ef) | 0, n = (n = n + Math.imul(m, ea) | 0) + Math.imul(g, ef) | 0, f = f + Math.imul(g, ea) | 0, i = i + Math.imul(b, es) | 0, n = (n = n + Math.imul(b, ed) | 0) + Math.imul(p, es) | 0, f = f + Math.imul(p, ed) | 0;
                    var ex = (d + (i = i + Math.imul(h, eh) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(h, eu) | 0) + Math.imul(u, eh) | 0)) << 13) | 0;
                    d = ((f = f + Math.imul(u, eu) | 0) + (n >>> 13) | 0) + (ex >>> 26) | 0, ex &= 67108863, i = Math.imul(N, H), n = (n = Math.imul(N, $)) + Math.imul(L, H) | 0, f = Math.imul(L, $), i = i + Math.imul(j, D) | 0, n = (n = n + Math.imul(j, K) | 0) + Math.imul(C, D) | 0, f = f + Math.imul(C, K) | 0, i = i + Math.imul(k, J) | 0, n = (n = n + Math.imul(k, W) | 0) + Math.imul(R, J) | 0, f = f + Math.imul(R, W) | 0, i = i + Math.imul(z, X) | 0, n = (n = n + Math.imul(z, G) | 0) + Math.imul(O, X) | 0, f = f + Math.imul(O, G) | 0, i = i + Math.imul(E, Q) | 0, n = (n = n + Math.imul(E, ee) | 0) + Math.imul(I, Q) | 0, f = f + Math.imul(I, ee) | 0, i = i + Math.imul(_, er) | 0, n = (n = n + Math.imul(_, ei) | 0) + Math.imul(x, er) | 0, f = f + Math.imul(x, ei) | 0, i = i + Math.imul(w, ef) | 0, n = (n = n + Math.imul(w, ea) | 0) + Math.imul(M, ef) | 0, f = f + Math.imul(M, ea) | 0, i = i + Math.imul(m, es) | 0, n = (n = n + Math.imul(m, ed) | 0) + Math.imul(g, es) | 0, f = f + Math.imul(g, ed) | 0, i = i + Math.imul(b, eh) | 0, n = (n = n + Math.imul(b, eu) | 0) + Math.imul(p, eh) | 0, f = f + Math.imul(p, eu) | 0;
                    var eA = (d + (i = i + Math.imul(h, eb) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(h, ep) | 0) + Math.imul(u, eb) | 0)) << 13) | 0;
                    d = ((f = f + Math.imul(u, ep) | 0) + (n >>> 13) | 0) + (eA >>> 26) | 0, eA &= 67108863, i = Math.imul(N, D), n = (n = Math.imul(N, K)) + Math.imul(L, D) | 0, f = Math.imul(L, K), i = i + Math.imul(j, J) | 0, n = (n = n + Math.imul(j, W) | 0) + Math.imul(C, J) | 0, f = f + Math.imul(C, W) | 0, i = i + Math.imul(k, X) | 0, n = (n = n + Math.imul(k, G) | 0) + Math.imul(R, X) | 0, f = f + Math.imul(R, G) | 0, i = i + Math.imul(z, Q) | 0, n = (n = n + Math.imul(z, ee) | 0) + Math.imul(O, Q) | 0, f = f + Math.imul(O, ee) | 0, i = i + Math.imul(E, er) | 0, n = (n = n + Math.imul(E, ei) | 0) + Math.imul(I, er) | 0, f = f + Math.imul(I, ei) | 0, i = i + Math.imul(_, ef) | 0, n = (n = n + Math.imul(_, ea) | 0) + Math.imul(x, ef) | 0, f = f + Math.imul(x, ea) | 0, i = i + Math.imul(w, es) | 0, n = (n = n + Math.imul(w, ed) | 0) + Math.imul(M, es) | 0, f = f + Math.imul(M, ed) | 0, i = i + Math.imul(m, eh) | 0, n = (n = n + Math.imul(m, eu) | 0) + Math.imul(g, eh) | 0, f = f + Math.imul(g, eu) | 0;
                    var eE = (d + (i = i + Math.imul(b, eb) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(b, ep) | 0) + Math.imul(p, eb) | 0)) << 13) | 0;
                    d = ((f = f + Math.imul(p, ep) | 0) + (n >>> 13) | 0) + (eE >>> 26) | 0, eE &= 67108863, i = Math.imul(N, J), n = (n = Math.imul(N, W)) + Math.imul(L, J) | 0, f = Math.imul(L, W), i = i + Math.imul(j, X) | 0, n = (n = n + Math.imul(j, G) | 0) + Math.imul(C, X) | 0, f = f + Math.imul(C, G) | 0, i = i + Math.imul(k, Q) | 0, n = (n = n + Math.imul(k, ee) | 0) + Math.imul(R, Q) | 0, f = f + Math.imul(R, ee) | 0, i = i + Math.imul(z, er) | 0, n = (n = n + Math.imul(z, ei) | 0) + Math.imul(O, er) | 0, f = f + Math.imul(O, ei) | 0, i = i + Math.imul(E, ef) | 0, n = (n = n + Math.imul(E, ea) | 0) + Math.imul(I, ef) | 0, f = f + Math.imul(I, ea) | 0, i = i + Math.imul(_, es) | 0, n = (n = n + Math.imul(_, ed) | 0) + Math.imul(x, es) | 0, f = f + Math.imul(x, ed) | 0, i = i + Math.imul(w, eh) | 0, n = (n = n + Math.imul(w, eu) | 0) + Math.imul(M, eh) | 0, f = f + Math.imul(M, eu) | 0;
                    var eI = (d + (i = i + Math.imul(m, eb) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(m, ep) | 0) + Math.imul(g, eb) | 0)) << 13) | 0;
                    d = ((f = f + Math.imul(g, ep) | 0) + (n >>> 13) | 0) + (eI >>> 26) | 0, eI &= 67108863, i = Math.imul(N, X), n = (n = Math.imul(N, G)) + Math.imul(L, X) | 0, f = Math.imul(L, G), i = i + Math.imul(j, Q) | 0, n = (n = n + Math.imul(j, ee) | 0) + Math.imul(C, Q) | 0, f = f + Math.imul(C, ee) | 0, i = i + Math.imul(k, er) | 0, n = (n = n + Math.imul(k, ei) | 0) + Math.imul(R, er) | 0, f = f + Math.imul(R, ei) | 0, i = i + Math.imul(z, ef) | 0, n = (n = n + Math.imul(z, ea) | 0) + Math.imul(O, ef) | 0, f = f + Math.imul(O, ea) | 0, i = i + Math.imul(E, es) | 0, n = (n = n + Math.imul(E, ed) | 0) + Math.imul(I, es) | 0, f = f + Math.imul(I, ed) | 0, i = i + Math.imul(_, eh) | 0, n = (n = n + Math.imul(_, eu) | 0) + Math.imul(x, eh) | 0, f = f + Math.imul(x, eu) | 0;
                    var eP = (d + (i = i + Math.imul(w, eb) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(w, ep) | 0) + Math.imul(M, eb) | 0)) << 13) | 0;
                    d = ((f = f + Math.imul(M, ep) | 0) + (n >>> 13) | 0) + (eP >>> 26) | 0, eP &= 67108863, i = Math.imul(N, Q), n = (n = Math.imul(N, ee)) + Math.imul(L, Q) | 0, f = Math.imul(L, ee), i = i + Math.imul(j, er) | 0, n = (n = n + Math.imul(j, ei) | 0) + Math.imul(C, er) | 0, f = f + Math.imul(C, ei) | 0, i = i + Math.imul(k, ef) | 0, n = (n = n + Math.imul(k, ea) | 0) + Math.imul(R, ef) | 0, f = f + Math.imul(R, ea) | 0, i = i + Math.imul(z, es) | 0, n = (n = n + Math.imul(z, ed) | 0) + Math.imul(O, es) | 0, f = f + Math.imul(O, ed) | 0, i = i + Math.imul(E, eh) | 0, n = (n = n + Math.imul(E, eu) | 0) + Math.imul(I, eh) | 0, f = f + Math.imul(I, eu) | 0;
                    var ez = (d + (i = i + Math.imul(_, eb) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(_, ep) | 0) + Math.imul(x, eb) | 0)) << 13) | 0;
                    d = ((f = f + Math.imul(x, ep) | 0) + (n >>> 13) | 0) + (ez >>> 26) | 0, ez &= 67108863, i = Math.imul(N, er), n = (n = Math.imul(N, ei)) + Math.imul(L, er) | 0, f = Math.imul(L, ei), i = i + Math.imul(j, ef) | 0, n = (n = n + Math.imul(j, ea) | 0) + Math.imul(C, ef) | 0, f = f + Math.imul(C, ea) | 0, i = i + Math.imul(k, es) | 0, n = (n = n + Math.imul(k, ed) | 0) + Math.imul(R, es) | 0, f = f + Math.imul(R, ed) | 0, i = i + Math.imul(z, eh) | 0, n = (n = n + Math.imul(z, eu) | 0) + Math.imul(O, eh) | 0, f = f + Math.imul(O, eu) | 0;
                    var eO = (d + (i = i + Math.imul(E, eb) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(E, ep) | 0) + Math.imul(I, eb) | 0)) << 13) | 0;
                    d = ((f = f + Math.imul(I, ep) | 0) + (n >>> 13) | 0) + (eO >>> 26) | 0, eO &= 67108863, i = Math.imul(N, ef), n = (n = Math.imul(N, ea)) + Math.imul(L, ef) | 0, f = Math.imul(L, ea), i = i + Math.imul(j, es) | 0, n = (n = n + Math.imul(j, ed) | 0) + Math.imul(C, es) | 0, f = f + Math.imul(C, ed) | 0, i = i + Math.imul(k, eh) | 0, n = (n = n + Math.imul(k, eu) | 0) + Math.imul(R, eh) | 0, f = f + Math.imul(R, eu) | 0;
                    var eB = (d + (i = i + Math.imul(z, eb) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(z, ep) | 0) + Math.imul(O, eb) | 0)) << 13) | 0;
                    d = ((f = f + Math.imul(O, ep) | 0) + (n >>> 13) | 0) + (eB >>> 26) | 0, eB &= 67108863, i = Math.imul(N, es), n = (n = Math.imul(N, ed)) + Math.imul(L, es) | 0, f = Math.imul(L, ed), i = i + Math.imul(j, eh) | 0, n = (n = n + Math.imul(j, eu) | 0) + Math.imul(C, eh) | 0, f = f + Math.imul(C, eu) | 0;
                    var ek = (d + (i = i + Math.imul(k, eb) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(k, ep) | 0) + Math.imul(R, eb) | 0)) << 13) | 0;
                    d = ((f = f + Math.imul(R, ep) | 0) + (n >>> 13) | 0) + (ek >>> 26) | 0, ek &= 67108863, i = Math.imul(N, eh), n = (n = Math.imul(N, eu)) + Math.imul(L, eh) | 0, f = Math.imul(L, eu);
                    var eR = (d + (i = i + Math.imul(j, eb) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(j, ep) | 0) + Math.imul(C, eb) | 0)) << 13) | 0;
                    d = ((f = f + Math.imul(C, ep) | 0) + (n >>> 13) | 0) + (eR >>> 26) | 0, eR &= 67108863;
                    var eq = (d + (i = Math.imul(N, eb)) | 0) + ((8191 & (n = (n = Math.imul(N, ep)) + Math.imul(L, eb) | 0)) << 13) | 0;
                    return d = ((f = Math.imul(L, ep)) + (n >>> 13) | 0) + (eq >>> 26) | 0, eq &= 67108863, s[0] = ey, s[1] = em, s[2] = eg, s[3] = ev, s[4] = ew, s[5] = eM, s[6] = eS, s[7] = e_, s[8] = ex, s[9] = eA, s[10] = eE, s[11] = eI, s[12] = eP, s[13] = ez, s[14] = eO, s[15] = eB, s[16] = ek, s[17] = eR, s[18] = eq, 0 !== d && (s[19] = d, r.length++), r
                };

                function p(e, t, r) {
                    return new y().mulp(e, t, r)
                }

                function y(e, t) {
                    this.x = e, this.y = t
                }
                Math.imul || (b = l), f.prototype.mulTo = function(e, t) {
                    var r = this.length + e.length;
                    return 10 === this.length && 10 === e.length ? b(this, e, t) : r < 63 ? l(this, e, t) : r < 1024 ? function(e, t, r) {
                        r.negative = t.negative ^ e.negative, r.length = e.length + t.length;
                        for (var i = 0, n = 0, f = 0; f < r.length - 1; f++) {
                            var a = n;
                            n = 0;
                            for (var o = 67108863 & i, s = Math.min(f, t.length - 1), d = Math.max(0, f - e.length + 1); d <= s; d++) {
                                var c = f - d,
                                    h = (0 | e.words[c]) * (0 | t.words[d]),
                                    u = 67108863 & h;
                                a = a + (h / 67108864 | 0) | 0, o = 67108863 & (u = u + o | 0), n += (a = a + (u >>> 26) | 0) >>> 26, a &= 67108863
                            }
                            r.words[f] = o, i = a, a = n
                        }
                        return 0 !== i ? r.words[f] = i : r.length--, r.strip()
                    }(this, e, t) : p(this, e, t)
                }, y.prototype.makeRBT = function(e) {
                    for (var t = Array(e), r = f.prototype._countBits(e) - 1, i = 0; i < e; i++) t[i] = this.revBin(i, r, e);
                    return t
                }, y.prototype.revBin = function(e, t, r) {
                    if (0 === e || e === r - 1) return e;
                    for (var i = 0, n = 0; n < t; n++) i |= (1 & e) << t - n - 1, e >>= 1;
                    return i
                }, y.prototype.permute = function(e, t, r, i, n, f) {
                    for (var a = 0; a < f; a++) i[a] = t[e[a]], n[a] = r[e[a]]
                }, y.prototype.transform = function(e, t, r, i, n, f) {
                    this.permute(f, e, t, r, i, n);
                    for (var a = 1; a < n; a <<= 1)
                        for (var o = a << 1, s = Math.cos(2 * Math.PI / o), d = Math.sin(2 * Math.PI / o), c = 0; c < n; c += o)
                            for (var h = s, u = d, l = 0; l < a; l++) {
                                var b = r[c + l],
                                    p = i[c + l],
                                    y = r[c + l + a],
                                    m = i[c + l + a],
                                    g = h * y - u * m;
                                m = h * m + u * y, y = g, r[c + l] = b + y, i[c + l] = p + m, r[c + l + a] = b - y, i[c + l + a] = p - m, l !== o && (g = s * h - d * u, u = s * u + d * h, h = g)
                            }
                }, y.prototype.guessLen13b = function(e, t) {
                    var r = 1 | Math.max(t, e),
                        i = 1 & r,
                        n = 0;
                    for (r = r / 2 | 0; r; r >>>= 1) n++;
                    return 1 << n + 1 + i
                }, y.prototype.conjugate = function(e, t, r) {
                    if (!(r <= 1))
                        for (var i = 0; i < r / 2; i++) {
                            var n = e[i];
                            e[i] = e[r - i - 1], e[r - i - 1] = n, n = t[i], t[i] = -t[r - i - 1], t[r - i - 1] = -n
                        }
                }, y.prototype.normalize13b = function(e, t) {
                    for (var r = 0, i = 0; i < t / 2; i++) {
                        var n = 8192 * Math.round(e[2 * i + 1] / t) + Math.round(e[2 * i] / t) + r;
                        e[i] = 67108863 & n, r = n < 67108864 ? 0 : n / 67108864 | 0
                    }
                    return e
                }, y.prototype.convert13b = function(e, t, r, n) {
                    for (var f = 0, a = 0; a < t; a++) f += 0 | e[a], r[2 * a] = 8191 & f, f >>>= 13, r[2 * a + 1] = 8191 & f, f >>>= 13;
                    for (a = 2 * t; a < n; ++a) r[a] = 0;
                    i(0 === f), i((-8192 & f) == 0)
                }, y.prototype.stub = function(e) {
                    for (var t = Array(e), r = 0; r < e; r++) t[r] = 0;
                    return t
                }, y.prototype.mulp = function(e, t, r) {
                    var i = 2 * this.guessLen13b(e.length, t.length),
                        n = this.makeRBT(i),
                        f = this.stub(i),
                        a = Array(i),
                        o = Array(i),
                        s = Array(i),
                        d = Array(i),
                        c = Array(i),
                        h = Array(i),
                        u = r.words;
                    u.length = i, this.convert13b(e.words, e.length, a, i), this.convert13b(t.words, t.length, d, i), this.transform(a, f, o, s, i, n), this.transform(d, f, c, h, i, n);
                    for (var l = 0; l < i; l++) {
                        var b = o[l] * c[l] - s[l] * h[l];
                        s[l] = o[l] * h[l] + s[l] * c[l], o[l] = b
                    }
                    return this.conjugate(o, s, i), this.transform(o, s, u, f, i, n), this.conjugate(u, f, i), this.normalize13b(u, i), r.negative = e.negative ^ t.negative, r.length = e.length + t.length, r.strip()
                }, f.prototype.mul = function(e) {
                    var t = new f(null);
                    return t.words = Array(this.length + e.length), this.mulTo(e, t)
                }, f.prototype.mulf = function(e) {
                    var t = new f(null);
                    return t.words = Array(this.length + e.length), p(this, e, t)
                }, f.prototype.imul = function(e) {
                    return this.clone().mulTo(e, this)
                }, f.prototype.imuln = function(e) {
                    i("number" == typeof e), i(e < 67108864);
                    for (var t = 0, r = 0; r < this.length; r++) {
                        var n = (0 | this.words[r]) * e,
                            f = (67108863 & n) + (67108863 & t);
                        t >>= 26, t += (n / 67108864 | 0) + (f >>> 26), this.words[r] = 67108863 & f
                    }
                    return 0 !== t && (this.words[r] = t, this.length++), this
                }, f.prototype.muln = function(e) {
                    return this.clone().imuln(e)
                }, f.prototype.sqr = function() {
                    return this.mul(this)
                }, f.prototype.isqr = function() {
                    return this.imul(this.clone())
                }, f.prototype.pow = function(e) {
                    var t = function(e) {
                        for (var t = Array(e.bitLength()), r = 0; r < t.length; r++) {
                            var i = r / 26 | 0,
                                n = r % 26;
                            t[r] = (e.words[i] & 1 << n) >>> n
                        }
                        return t
                    }(e);
                    if (0 === t.length) return new f(1);
                    for (var r = this, i = 0; i < t.length && 0 === t[i]; i++, r = r.sqr());
                    if (++i < t.length)
                        for (var n = r.sqr(); i < t.length; i++, n = n.sqr()) 0 !== t[i] && (r = r.mul(n));
                    return r
                }, f.prototype.iushln = function(e) {
                    i("number" == typeof e && e >= 0);
                    var t, r = e % 26,
                        n = (e - r) / 26,
                        f = 67108863 >>> 26 - r << 26 - r;
                    if (0 !== r) {
                        var a = 0;
                        for (t = 0; t < this.length; t++) {
                            var o = this.words[t] & f,
                                s = (0 | this.words[t]) - o << r;
                            this.words[t] = s | a, a = o >>> 26 - r
                        }
                        a && (this.words[t] = a, this.length++)
                    }
                    if (0 !== n) {
                        for (t = this.length - 1; t >= 0; t--) this.words[t + n] = this.words[t];
                        for (t = 0; t < n; t++) this.words[t] = 0;
                        this.length += n
                    }
                    return this.strip()
                }, f.prototype.ishln = function(e) {
                    return i(0 === this.negative), this.iushln(e)
                }, f.prototype.iushrn = function(e, t, r) {
                    i("number" == typeof e && e >= 0), n = t ? (t - t % 26) / 26 : 0;
                    var n, f = e % 26,
                        a = Math.min((e - f) / 26, this.length),
                        o = 67108863 ^ 67108863 >>> f << f;
                    if (n -= a, n = Math.max(0, n), r) {
                        for (var s = 0; s < a; s++) r.words[s] = this.words[s];
                        r.length = a
                    }
                    if (0 === a);
                    else if (this.length > a)
                        for (this.length -= a, s = 0; s < this.length; s++) this.words[s] = this.words[s + a];
                    else this.words[0] = 0, this.length = 1;
                    var d = 0;
                    for (s = this.length - 1; s >= 0 && (0 !== d || s >= n); s--) {
                        var c = 0 | this.words[s];
                        this.words[s] = d << 26 - f | c >>> f, d = c & o
                    }
                    return r && 0 !== d && (r.words[r.length++] = d), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip()
                }, f.prototype.ishrn = function(e, t, r) {
                    return i(0 === this.negative), this.iushrn(e, t, r)
                }, f.prototype.shln = function(e) {
                    return this.clone().ishln(e)
                }, f.prototype.ushln = function(e) {
                    return this.clone().iushln(e)
                }, f.prototype.shrn = function(e) {
                    return this.clone().ishrn(e)
                }, f.prototype.ushrn = function(e) {
                    return this.clone().iushrn(e)
                }, f.prototype.testn = function(e) {
                    i("number" == typeof e && e >= 0);
                    var t = e % 26,
                        r = (e - t) / 26;
                    return !(this.length <= r) && !!(this.words[r] & 1 << t)
                }, f.prototype.imaskn = function(e) {
                    i("number" == typeof e && e >= 0);
                    var t = e % 26,
                        r = (e - t) / 26;
                    return (i(0 === this.negative, "imaskn works only with positive numbers"), this.length <= r) ? this : (0 !== t && r++, this.length = Math.min(r, this.length), 0 !== t && (this.words[this.length - 1] &= 67108863 ^ 67108863 >>> t << t), this.strip())
                }, f.prototype.maskn = function(e) {
                    return this.clone().imaskn(e)
                }, f.prototype.iaddn = function(e) {
                    return (i("number" == typeof e), i(e < 67108864), e < 0) ? this.isubn(-e) : 0 !== this.negative ? (1 === this.length && (0 | this.words[0]) < e ? (this.words[0] = e - (0 | this.words[0]), this.negative = 0) : (this.negative = 0, this.isubn(e), this.negative = 1), this) : this._iaddn(e)
                }, f.prototype._iaddn = function(e) {
                    this.words[0] += e;
                    for (var t = 0; t < this.length && this.words[t] >= 67108864; t++) this.words[t] -= 67108864, t === this.length - 1 ? this.words[t + 1] = 1 : this.words[t + 1]++;
                    return this.length = Math.max(this.length, t + 1), this
                }, f.prototype.isubn = function(e) {
                    if (i("number" == typeof e), i(e < 67108864), e < 0) return this.iaddn(-e);
                    if (0 !== this.negative) return this.negative = 0, this.iaddn(e), this.negative = 1, this;
                    if (this.words[0] -= e, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                    else
                        for (var t = 0; t < this.length && this.words[t] < 0; t++) this.words[t] += 67108864, this.words[t + 1] -= 1;
                    return this.strip()
                }, f.prototype.addn = function(e) {
                    return this.clone().iaddn(e)
                }, f.prototype.subn = function(e) {
                    return this.clone().isubn(e)
                }, f.prototype.iabs = function() {
                    return this.negative = 0, this
                }, f.prototype.abs = function() {
                    return this.clone().iabs()
                }, f.prototype._ishlnsubmul = function(e, t, r) {
                    var n, f, a = e.length + r;
                    this._expand(a);
                    var o = 0;
                    for (n = 0; n < e.length; n++) {
                        f = (0 | this.words[n + r]) + o;
                        var s = (0 | e.words[n]) * t;
                        f -= 67108863 & s, o = (f >> 26) - (s / 67108864 | 0), this.words[n + r] = 67108863 & f
                    }
                    for (; n < this.length - r; n++) o = (f = (0 | this.words[n + r]) + o) >> 26, this.words[n + r] = 67108863 & f;
                    if (0 === o) return this.strip();
                    for (i(-1 === o), o = 0, n = 0; n < this.length; n++) o = (f = -(0 | this.words[n]) + o) >> 26, this.words[n] = 67108863 & f;
                    return this.negative = 1, this.strip()
                }, f.prototype._wordDiv = function(e, t) {
                    var r, i = this.length - e.length,
                        n = this.clone(),
                        a = e,
                        o = 0 | a.words[a.length - 1];
                    0 != (i = 26 - this._countBits(o)) && (a = a.ushln(i), n.iushln(i), o = 0 | a.words[a.length - 1]);
                    var s = n.length - a.length;
                    if ("mod" !== t) {
                        (r = new f(null)).length = s + 1, r.words = Array(r.length);
                        for (var d = 0; d < r.length; d++) r.words[d] = 0
                    }
                    var c = n.clone()._ishlnsubmul(a, 1, s);
                    0 === c.negative && (n = c, r && (r.words[s] = 1));
                    for (var h = s - 1; h >= 0; h--) {
                        var u = (0 | n.words[a.length + h]) * 67108864 + (0 | n.words[a.length + h - 1]);
                        for (u = Math.min(u / o | 0, 67108863), n._ishlnsubmul(a, u, h); 0 !== n.negative;) u--, n.negative = 0, n._ishlnsubmul(a, 1, h), n.isZero() || (n.negative ^= 1);
                        r && (r.words[h] = u)
                    }
                    return r && r.strip(), n.strip(), "div" !== t && 0 !== i && n.iushrn(i), {
                        div: r || null,
                        mod: n
                    }
                }, f.prototype.divmod = function(e, t, r) {
                    var n, a, o;
                    return (i(!e.isZero()), this.isZero()) ? {
                        div: new f(0),
                        mod: new f(0)
                    } : 0 !== this.negative && 0 === e.negative ? (o = this.neg().divmod(e, t), "mod" !== t && (n = o.div.neg()), "div" !== t && (a = o.mod.neg(), r && 0 !== a.negative && a.iadd(e)), {
                        div: n,
                        mod: a
                    }) : 0 === this.negative && 0 !== e.negative ? (o = this.divmod(e.neg(), t), "mod" !== t && (n = o.div.neg()), {
                        div: n,
                        mod: o.mod
                    }) : (this.negative & e.negative) != 0 ? (o = this.neg().divmod(e.neg(), t), "div" !== t && (a = o.mod.neg(), r && 0 !== a.negative && a.isub(e)), {
                        div: o.div,
                        mod: a
                    }) : e.length > this.length || 0 > this.cmp(e) ? {
                        div: new f(0),
                        mod: this
                    } : 1 === e.length ? "div" === t ? {
                        div: this.divn(e.words[0]),
                        mod: null
                    } : "mod" === t ? {
                        div: null,
                        mod: new f(this.modn(e.words[0]))
                    } : {
                        div: this.divn(e.words[0]),
                        mod: new f(this.modn(e.words[0]))
                    } : this._wordDiv(e, t)
                }, f.prototype.div = function(e) {
                    return this.divmod(e, "div", !1).div
                }, f.prototype.mod = function(e) {
                    return this.divmod(e, "mod", !1).mod
                }, f.prototype.umod = function(e) {
                    return this.divmod(e, "mod", !0).mod
                }, f.prototype.divRound = function(e) {
                    var t = this.divmod(e);
                    if (t.mod.isZero()) return t.div;
                    var r = 0 !== t.div.negative ? t.mod.isub(e) : t.mod,
                        i = e.ushrn(1),
                        n = e.andln(1),
                        f = r.cmp(i);
                    return f < 0 || 1 === n && 0 === f ? t.div : 0 !== t.div.negative ? t.div.isubn(1) : t.div.iaddn(1)
                }, f.prototype.modn = function(e) {
                    i(e <= 67108863);
                    for (var t = 67108864 % e, r = 0, n = this.length - 1; n >= 0; n--) r = (t * r + (0 | this.words[n])) % e;
                    return r
                }, f.prototype.idivn = function(e) {
                    i(e <= 67108863);
                    for (var t = 0, r = this.length - 1; r >= 0; r--) {
                        var n = (0 | this.words[r]) + 67108864 * t;
                        this.words[r] = n / e | 0, t = n % e
                    }
                    return this.strip()
                }, f.prototype.divn = function(e) {
                    return this.clone().idivn(e)
                }, f.prototype.egcd = function(e) {
                    i(0 === e.negative), i(!e.isZero());
                    var t = this,
                        r = e.clone();
                    t = 0 !== t.negative ? t.umod(e) : t.clone();
                    for (var n = new f(1), a = new f(0), o = new f(0), s = new f(1), d = 0; t.isEven() && r.isEven();) t.iushrn(1), r.iushrn(1), ++d;
                    for (var c = r.clone(), h = t.clone(); !t.isZero();) {
                        for (var u = 0, l = 1;
                            (t.words[0] & l) == 0 && u < 26; ++u, l <<= 1);
                        if (u > 0)
                            for (t.iushrn(u); u-- > 0;)(n.isOdd() || a.isOdd()) && (n.iadd(c), a.isub(h)), n.iushrn(1), a.iushrn(1);
                        for (var b = 0, p = 1;
                            (r.words[0] & p) == 0 && b < 26; ++b, p <<= 1);
                        if (b > 0)
                            for (r.iushrn(b); b-- > 0;)(o.isOdd() || s.isOdd()) && (o.iadd(c), s.isub(h)), o.iushrn(1), s.iushrn(1);
                        t.cmp(r) >= 0 ? (t.isub(r), n.isub(o), a.isub(s)) : (r.isub(t), o.isub(n), s.isub(a))
                    }
                    return {
                        a: o,
                        b: s,
                        gcd: r.iushln(d)
                    }
                }, f.prototype._invmp = function(e) {
                    i(0 === e.negative), i(!e.isZero());
                    var t, r = this,
                        n = e.clone();
                    r = 0 !== r.negative ? r.umod(e) : r.clone();
                    for (var a = new f(1), o = new f(0), s = n.clone(); r.cmpn(1) > 0 && n.cmpn(1) > 0;) {
                        for (var d = 0, c = 1;
                            (r.words[0] & c) == 0 && d < 26; ++d, c <<= 1);
                        if (d > 0)
                            for (r.iushrn(d); d-- > 0;) a.isOdd() && a.iadd(s), a.iushrn(1);
                        for (var h = 0, u = 1;
                            (n.words[0] & u) == 0 && h < 26; ++h, u <<= 1);
                        if (h > 0)
                            for (n.iushrn(h); h-- > 0;) o.isOdd() && o.iadd(s), o.iushrn(1);
                        r.cmp(n) >= 0 ? (r.isub(n), a.isub(o)) : (n.isub(r), o.isub(a))
                    }
                    return 0 > (t = 0 === r.cmpn(1) ? a : o).cmpn(0) && t.iadd(e), t
                }, f.prototype.gcd = function(e) {
                    if (this.isZero()) return e.abs();
                    if (e.isZero()) return this.abs();
                    var t = this.clone(),
                        r = e.clone();
                    t.negative = 0, r.negative = 0;
                    for (var i = 0; t.isEven() && r.isEven(); i++) t.iushrn(1), r.iushrn(1);
                    for (;;) {
                        for (; t.isEven();) t.iushrn(1);
                        for (; r.isEven();) r.iushrn(1);
                        var n = t.cmp(r);
                        if (n < 0) {
                            var f = t;
                            t = r, r = f
                        } else if (0 === n || 0 === r.cmpn(1)) break;
                        t.isub(r)
                    }
                    return r.iushln(i)
                }, f.prototype.invm = function(e) {
                    return this.egcd(e).a.umod(e)
                }, f.prototype.isEven = function() {
                    return (1 & this.words[0]) == 0
                }, f.prototype.isOdd = function() {
                    return (1 & this.words[0]) == 1
                }, f.prototype.andln = function(e) {
                    return this.words[0] & e
                }, f.prototype.bincn = function(e) {
                    i("number" == typeof e);
                    var t = e % 26,
                        r = (e - t) / 26,
                        n = 1 << t;
                    if (this.length <= r) return this._expand(r + 1), this.words[r] |= n, this;
                    for (var f = n, a = r; 0 !== f && a < this.length; a++) {
                        var o = 0 | this.words[a];
                        o += f, f = o >>> 26, o &= 67108863, this.words[a] = o
                    }
                    return 0 !== f && (this.words[a] = f, this.length++), this
                }, f.prototype.isZero = function() {
                    return 1 === this.length && 0 === this.words[0]
                }, f.prototype.cmpn = function(e) {
                    var t, r = e < 0;
                    if (0 !== this.negative && !r) return -1;
                    if (0 === this.negative && r) return 1;
                    if (this.strip(), this.length > 1) t = 1;
                    else {
                        r && (e = -e), i(e <= 67108863, "Number is too big");
                        var n = 0 | this.words[0];
                        t = n === e ? 0 : n < e ? -1 : 1
                    }
                    return 0 !== this.negative ? 0 | -t : t
                }, f.prototype.cmp = function(e) {
                    if (0 !== this.negative && 0 === e.negative) return -1;
                    if (0 === this.negative && 0 !== e.negative) return 1;
                    var t = this.ucmp(e);
                    return 0 !== this.negative ? 0 | -t : t
                }, f.prototype.ucmp = function(e) {
                    if (this.length > e.length) return 1;
                    if (this.length < e.length) return -1;
                    for (var t = 0, r = this.length - 1; r >= 0; r--) {
                        var i = 0 | this.words[r],
                            n = 0 | e.words[r];
                        if (i !== n) {
                            i < n ? t = -1 : i > n && (t = 1);
                            break
                        }
                    }
                    return t
                }, f.prototype.gtn = function(e) {
                    return 1 === this.cmpn(e)
                }, f.prototype.gt = function(e) {
                    return 1 === this.cmp(e)
                }, f.prototype.gten = function(e) {
                    return this.cmpn(e) >= 0
                }, f.prototype.gte = function(e) {
                    return this.cmp(e) >= 0
                }, f.prototype.ltn = function(e) {
                    return -1 === this.cmpn(e)
                }, f.prototype.lt = function(e) {
                    return -1 === this.cmp(e)
                }, f.prototype.lten = function(e) {
                    return 0 >= this.cmpn(e)
                }, f.prototype.lte = function(e) {
                    return 0 >= this.cmp(e)
                }, f.prototype.eqn = function(e) {
                    return 0 === this.cmpn(e)
                }, f.prototype.eq = function(e) {
                    return 0 === this.cmp(e)
                }, f.red = function(e) {
                    return new _(e)
                }, f.prototype.toRed = function(e) {
                    return i(!this.red, "Already a number in reduction context"), i(0 === this.negative, "red works only with positives"), e.convertTo(this)._forceRed(e)
                }, f.prototype.fromRed = function() {
                    return i(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                }, f.prototype._forceRed = function(e) {
                    return this.red = e, this
                }, f.prototype.forceRed = function(e) {
                    return i(!this.red, "Already a number in reduction context"), this._forceRed(e)
                }, f.prototype.redAdd = function(e) {
                    return i(this.red, "redAdd works only with red numbers"), this.red.add(this, e)
                }, f.prototype.redIAdd = function(e) {
                    return i(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, e)
                }, f.prototype.redSub = function(e) {
                    return i(this.red, "redSub works only with red numbers"), this.red.sub(this, e)
                }, f.prototype.redISub = function(e) {
                    return i(this.red, "redISub works only with red numbers"), this.red.isub(this, e)
                }, f.prototype.redShl = function(e) {
                    return i(this.red, "redShl works only with red numbers"), this.red.shl(this, e)
                }, f.prototype.redMul = function(e) {
                    return i(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.mul(this, e)
                }, f.prototype.redIMul = function(e) {
                    return i(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.imul(this, e)
                }, f.prototype.redSqr = function() {
                    return i(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                }, f.prototype.redISqr = function() {
                    return i(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                }, f.prototype.redSqrt = function() {
                    return i(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                }, f.prototype.redInvm = function() {
                    return i(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                }, f.prototype.redNeg = function() {
                    return i(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                }, f.prototype.redPow = function(e) {
                    return i(this.red && !e.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, e)
                };
                var m = {
                    k256: null,
                    p224: null,
                    p192: null,
                    p25519: null
                };

                function g(e, t) {
                    this.name = e, this.p = new f(t, 16), this.n = this.p.bitLength(), this.k = new f(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                }

                function v() {
                    g.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                }

                function w() {
                    g.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                }

                function M() {
                    g.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                }

                function S() {
                    g.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                }

                function _(e) {
                    if ("string" == typeof e) {
                        var t = f._prime(e);
                        this.m = t.p, this.prime = t
                    } else i(e.gtn(1), "modulus must be greater than 1"), this.m = e, this.prime = null
                }

                function x(e) {
                    _.call(this, e), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new f(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                }
                g.prototype._tmp = function() {
                    var e = new f(null);
                    return e.words = Array(Math.ceil(this.n / 13)), e
                }, g.prototype.ireduce = function(e) {
                    var t, r = e;
                    do this.split(r, this.tmp), t = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength(); while (t > this.n);
                    var i = t < this.n ? -1 : r.ucmp(this.p);
                    return 0 === i ? (r.words[0] = 0, r.length = 1) : i > 0 ? r.isub(this.p) : void 0 !== r.strip ? r.strip() : r._strip(), r
                }, g.prototype.split = function(e, t) {
                    e.iushrn(this.n, 0, t)
                }, g.prototype.imulK = function(e) {
                    return e.imul(this.k)
                }, n(v, g), v.prototype.split = function(e, t) {
                    for (var r = Math.min(e.length, 9), i = 0; i < r; i++) t.words[i] = e.words[i];
                    if (t.length = r, e.length <= 9) {
                        e.words[0] = 0, e.length = 1;
                        return
                    }
                    var n = e.words[9];
                    for (i = 10, t.words[t.length++] = 4194303 & n; i < e.length; i++) {
                        var f = 0 | e.words[i];
                        e.words[i - 10] = (4194303 & f) << 4 | n >>> 22, n = f
                    }
                    n >>>= 22, e.words[i - 10] = n, 0 === n && e.length > 10 ? e.length -= 10 : e.length -= 9
                }, v.prototype.imulK = function(e) {
                    e.words[e.length] = 0, e.words[e.length + 1] = 0, e.length += 2;
                    for (var t = 0, r = 0; r < e.length; r++) {
                        var i = 0 | e.words[r];
                        t += 977 * i, e.words[r] = 67108863 & t, t = 64 * i + (t / 67108864 | 0)
                    }
                    return 0 === e.words[e.length - 1] && (e.length--, 0 === e.words[e.length - 1] && e.length--), e
                }, n(w, g), n(M, g), n(S, g), S.prototype.imulK = function(e) {
                    for (var t = 0, r = 0; r < e.length; r++) {
                        var i = (0 | e.words[r]) * 19 + t,
                            n = 67108863 & i;
                        i >>>= 26, e.words[r] = n, t = i
                    }
                    return 0 !== t && (e.words[e.length++] = t), e
                }, f._prime = function(e) {
                    var t;
                    if (m[e]) return m[e];
                    if ("k256" === e) t = new v;
                    else if ("p224" === e) t = new w;
                    else if ("p192" === e) t = new M;
                    else if ("p25519" === e) t = new S;
                    else throw Error("Unknown prime " + e);
                    return m[e] = t, t
                }, _.prototype._verify1 = function(e) {
                    i(0 === e.negative, "red works only with positives"), i(e.red, "red works only with red numbers")
                }, _.prototype._verify2 = function(e, t) {
                    i((e.negative | t.negative) == 0, "red works only with positives"), i(e.red && e.red === t.red, "red works only with red numbers")
                }, _.prototype.imod = function(e) {
                    return this.prime ? this.prime.ireduce(e)._forceRed(this) : e.umod(this.m)._forceRed(this)
                }, _.prototype.neg = function(e) {
                    return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this)
                }, _.prototype.add = function(e, t) {
                    this._verify2(e, t);
                    var r = e.add(t);
                    return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this)
                }, _.prototype.iadd = function(e, t) {
                    this._verify2(e, t);
                    var r = e.iadd(t);
                    return r.cmp(this.m) >= 0 && r.isub(this.m), r
                }, _.prototype.sub = function(e, t) {
                    this._verify2(e, t);
                    var r = e.sub(t);
                    return 0 > r.cmpn(0) && r.iadd(this.m), r._forceRed(this)
                }, _.prototype.isub = function(e, t) {
                    this._verify2(e, t);
                    var r = e.isub(t);
                    return 0 > r.cmpn(0) && r.iadd(this.m), r
                }, _.prototype.shl = function(e, t) {
                    return this._verify1(e), this.imod(e.ushln(t))
                }, _.prototype.imul = function(e, t) {
                    return this._verify2(e, t), this.imod(e.imul(t))
                }, _.prototype.mul = function(e, t) {
                    return this._verify2(e, t), this.imod(e.mul(t))
                }, _.prototype.isqr = function(e) {
                    return this.imul(e, e.clone())
                }, _.prototype.sqr = function(e) {
                    return this.mul(e, e)
                }, _.prototype.sqrt = function(e) {
                    if (e.isZero()) return e.clone();
                    var t = this.m.andln(3);
                    if (i(t % 2 == 1), 3 === t) {
                        var r = this.m.add(new f(1)).iushrn(2);
                        return this.pow(e, r)
                    }
                    for (var n = this.m.subn(1), a = 0; !n.isZero() && 0 === n.andln(1);) a++, n.iushrn(1);
                    i(!n.isZero());
                    var o = new f(1).toRed(this),
                        s = o.redNeg(),
                        d = this.m.subn(1).iushrn(1),
                        c = this.m.bitLength();
                    for (c = new f(2 * c * c).toRed(this); 0 !== this.pow(c, d).cmp(s);) c.redIAdd(s);
                    for (var h = this.pow(c, n), u = this.pow(e, n.addn(1).iushrn(1)), l = this.pow(e, n), b = a; 0 !== l.cmp(o);) {
                        for (var p = l, y = 0; 0 !== p.cmp(o); y++) p = p.redSqr();
                        i(y < b);
                        var m = this.pow(h, new f(1).iushln(b - y - 1));
                        u = u.redMul(m), h = m.redSqr(), l = l.redMul(h), b = y
                    }
                    return u
                }, _.prototype.invm = function(e) {
                    var t = e._invmp(this.m);
                    return 0 !== t.negative ? (t.negative = 0, this.imod(t).redNeg()) : this.imod(t)
                }, _.prototype.pow = function(e, t) {
                    if (t.isZero()) return new f(1).toRed(this);
                    if (0 === t.cmpn(1)) return e.clone();
                    var r = Array(16);
                    r[0] = new f(1).toRed(this), r[1] = e;
                    for (var i = 2; i < r.length; i++) r[i] = this.mul(r[i - 1], e);
                    var n = r[0],
                        a = 0,
                        o = 0,
                        s = t.bitLength() % 26;
                    for (0 === s && (s = 26), i = t.length - 1; i >= 0; i--) {
                        for (var d = t.words[i], c = s - 1; c >= 0; c--) {
                            var h = d >> c & 1;
                            if (n !== r[0] && (n = this.sqr(n)), 0 === h && 0 === a) {
                                o = 0;
                                continue
                            }
                            a <<= 1, a |= h, (4 == ++o || 0 === i && 0 === c) && (n = this.mul(n, r[a]), o = 0, a = 0)
                        }
                        s = 26
                    }
                    return n
                }, _.prototype.convertTo = function(e) {
                    var t = e.umod(this.m);
                    return t === e ? t.clone() : t
                }, _.prototype.convertFrom = function(e) {
                    var t = e.clone();
                    return t.red = null, t
                }, f.mont = function(e) {
                    return new x(e)
                }, n(x, _), x.prototype.convertTo = function(e) {
                    return this.imod(e.ushln(this.shift))
                }, x.prototype.convertFrom = function(e) {
                    var t = this.imod(e.mul(this.rinv));
                    return t.red = null, t
                }, x.prototype.imul = function(e, t) {
                    if (e.isZero() || t.isZero()) return e.words[0] = 0, e.length = 1, e;
                    var r = e.imul(t),
                        i = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        n = r.isub(i).iushrn(this.shift),
                        f = n;
                    return n.cmp(this.m) >= 0 ? f = n.isub(this.m) : 0 > n.cmpn(0) && (f = n.iadd(this.m)), f._forceRed(this)
                }, x.prototype.mul = function(e, t) {
                    if (e.isZero() || t.isZero()) return new f(0)._forceRed(this);
                    var r = e.mul(t),
                        i = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        n = r.isub(i).iushrn(this.shift),
                        a = n;
                    return n.cmp(this.m) >= 0 ? a = n.isub(this.m) : 0 > n.cmpn(0) && (a = n.iadd(this.m)), a._forceRed(this)
                }, x.prototype.invm = function(e) {
                    return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this)
                }
            }(e = r.nmd(e), this)
        },
        55336: function(e, t, r) {
            t.utils = r(65794), t.common = r(49619), t.sha = r(53610), t.ripemd = r(17721), t.hmac = r(56432), t.sha1 = t.sha.sha1, t.sha256 = t.sha.sha256, t.sha224 = t.sha.sha224, t.sha384 = t.sha.sha384, t.sha512 = t.sha.sha512, t.ripemd160 = t.ripemd.ripemd160
        },
        49619: function(e, t, r) {
            "use strict";
            var i = r(65794),
                n = r(8786);

            function f() {
                this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32
            }
            t.BlockHash = f, f.prototype.update = function(e, t) {
                if (e = i.toArray(e, t), this.pending ? this.pending = this.pending.concat(e) : this.pending = e, this.pendingTotal += e.length, this.pending.length >= this._delta8) {
                    var r = (e = this.pending).length % this._delta8;
                    this.pending = e.slice(e.length - r, e.length), 0 === this.pending.length && (this.pending = null), e = i.join32(e, 0, e.length - r, this.endian);
                    for (var n = 0; n < e.length; n += this._delta32) this._update(e, n, n + this._delta32)
                }
                return this
            }, f.prototype.digest = function(e) {
                return this.update(this._pad()), n(null === this.pending), this._digest(e)
            }, f.prototype._pad = function() {
                var e = this.pendingTotal,
                    t = this._delta8,
                    r = t - (e + this.padLength) % t,
                    i = Array(r + this.padLength);
                i[0] = 128;
                for (var n = 1; n < r; n++) i[n] = 0;
                if (e <<= 3, "big" === this.endian) {
                    for (var f = 8; f < this.padLength; f++) i[n++] = 0;
                    i[n++] = 0, i[n++] = 0, i[n++] = 0, i[n++] = 0, i[n++] = e >>> 24 & 255, i[n++] = e >>> 16 & 255, i[n++] = e >>> 8 & 255, i[n++] = 255 & e
                } else
                    for (f = 8, i[n++] = 255 & e, i[n++] = e >>> 8 & 255, i[n++] = e >>> 16 & 255, i[n++] = e >>> 24 & 255, i[n++] = 0, i[n++] = 0, i[n++] = 0, i[n++] = 0; f < this.padLength; f++) i[n++] = 0;
                return i
            }
        },
        56432: function(e, t, r) {
            "use strict";
            var i = r(65794),
                n = r(8786);

            function f(e, t, r) {
                if (!(this instanceof f)) return new f(e, t, r);
                this.Hash = e, this.blockSize = e.blockSize / 8, this.outSize = e.outSize / 8, this.inner = null, this.outer = null, this._init(i.toArray(t, r))
            }
            e.exports = f, f.prototype._init = function(e) {
                e.length > this.blockSize && (e = new this.Hash().update(e).digest()), n(e.length <= this.blockSize);
                for (var t = e.length; t < this.blockSize; t++) e.push(0);
                for (t = 0; t < e.length; t++) e[t] ^= 54;
                for (t = 0, this.inner = new this.Hash().update(e); t < e.length; t++) e[t] ^= 106;
                this.outer = new this.Hash().update(e)
            }, f.prototype.update = function(e, t) {
                return this.inner.update(e, t), this
            }, f.prototype.digest = function(e) {
                return this.outer.update(this.inner.digest()), this.outer.digest(e)
            }
        },
        17721: function(e, t, r) {
            "use strict";
            var i = r(65794),
                n = r(49619),
                f = i.rotl32,
                a = i.sum32,
                o = i.sum32_3,
                s = i.sum32_4,
                d = n.BlockHash;

            function c() {
                if (!(this instanceof c)) return new c;
                d.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little"
            }

            function h(e, t, r, i) {
                return e <= 15 ? t ^ r ^ i : e <= 31 ? t & r | ~t & i : e <= 47 ? (t | ~r) ^ i : e <= 63 ? t & i | r & ~i : t ^ (r | ~i)
            }
            i.inherits(c, d), t.ripemd160 = c, c.blockSize = 512, c.outSize = 160, c.hmacStrength = 192, c.padLength = 64, c.prototype._update = function(e, t) {
                for (var r = this.h[0], i = this.h[1], n = this.h[2], d = this.h[3], c = this.h[4], y = r, m = i, g = n, v = d, w = c, M = 0; M < 80; M++) {
                    var S, _, x = a(f(s(r, h(M, i, n, d), e[u[M] + t], (S = M) <= 15 ? 0 : S <= 31 ? 1518500249 : S <= 47 ? 1859775393 : S <= 63 ? 2400959708 : 2840853838), b[M]), c);
                    r = c, c = d, d = f(n, 10), n = i, i = x, x = a(f(s(y, h(79 - M, m, g, v), e[l[M] + t], (_ = M) <= 15 ? 1352829926 : _ <= 31 ? 1548603684 : _ <= 47 ? 1836072691 : _ <= 63 ? 2053994217 : 0), p[M]), w), y = w, w = v, v = f(g, 10), g = m, m = x
                }
                x = o(this.h[1], n, v), this.h[1] = o(this.h[2], d, w), this.h[2] = o(this.h[3], c, y), this.h[3] = o(this.h[4], r, m), this.h[4] = o(this.h[0], i, g), this.h[0] = x
            }, c.prototype._digest = function(e) {
                return "hex" === e ? i.toHex32(this.h, "little") : i.split32(this.h, "little")
            };
            var u = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
                l = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
                b = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
                p = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]
        },
        53610: function(e, t, r) {
            "use strict";
            t.sha1 = r(22490), t.sha224 = r(10627), t.sha256 = r(78101), t.sha384 = r(11629), t.sha512 = r(20368)
        },
        22490: function(e, t, r) {
            "use strict";
            var i = r(65794),
                n = r(49619),
                f = r(52770),
                a = i.rotl32,
                o = i.sum32,
                s = i.sum32_5,
                d = f.ft_1,
                c = n.BlockHash,
                h = [1518500249, 1859775393, 2400959708, 3395469782];

            function u() {
                if (!(this instanceof u)) return new u;
                c.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.W = Array(80)
            }
            i.inherits(u, c), e.exports = u, u.blockSize = 512, u.outSize = 160, u.hmacStrength = 80, u.padLength = 64, u.prototype._update = function(e, t) {
                for (var r = this.W, i = 0; i < 16; i++) r[i] = e[t + i];
                for (; i < r.length; i++) r[i] = a(r[i - 3] ^ r[i - 8] ^ r[i - 14] ^ r[i - 16], 1);
                var n = this.h[0],
                    f = this.h[1],
                    c = this.h[2],
                    u = this.h[3],
                    l = this.h[4];
                for (i = 0; i < r.length; i++) {
                    var b = ~~(i / 20),
                        p = s(a(n, 5), d(b, f, c, u), l, r[i], h[b]);
                    l = u, u = c, c = a(f, 30), f = n, n = p
                }
                this.h[0] = o(this.h[0], n), this.h[1] = o(this.h[1], f), this.h[2] = o(this.h[2], c), this.h[3] = o(this.h[3], u), this.h[4] = o(this.h[4], l)
            }, u.prototype._digest = function(e) {
                return "hex" === e ? i.toHex32(this.h, "big") : i.split32(this.h, "big")
            }
        },
        10627: function(e, t, r) {
            "use strict";
            var i = r(65794),
                n = r(78101);

            function f() {
                if (!(this instanceof f)) return new f;
                n.call(this), this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]
            }
            i.inherits(f, n), e.exports = f, f.blockSize = 512, f.outSize = 224, f.hmacStrength = 192, f.padLength = 64, f.prototype._digest = function(e) {
                return "hex" === e ? i.toHex32(this.h.slice(0, 7), "big") : i.split32(this.h.slice(0, 7), "big")
            }
        },
        78101: function(e, t, r) {
            "use strict";
            var i = r(65794),
                n = r(49619),
                f = r(52770),
                a = r(8786),
                o = i.sum32,
                s = i.sum32_4,
                d = i.sum32_5,
                c = f.ch32,
                h = f.maj32,
                u = f.s0_256,
                l = f.s1_256,
                b = f.g0_256,
                p = f.g1_256,
                y = n.BlockHash,
                m = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];

            function g() {
                if (!(this instanceof g)) return new g;
                y.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = m, this.W = Array(64)
            }
            i.inherits(g, y), e.exports = g, g.blockSize = 512, g.outSize = 256, g.hmacStrength = 192, g.padLength = 64, g.prototype._update = function(e, t) {
                for (var r = this.W, i = 0; i < 16; i++) r[i] = e[t + i];
                for (; i < r.length; i++) r[i] = s(p(r[i - 2]), r[i - 7], b(r[i - 15]), r[i - 16]);
                var n = this.h[0],
                    f = this.h[1],
                    y = this.h[2],
                    m = this.h[3],
                    g = this.h[4],
                    v = this.h[5],
                    w = this.h[6],
                    M = this.h[7];
                for (a(this.k.length === r.length), i = 0; i < r.length; i++) {
                    var S = d(M, l(g), c(g, v, w), this.k[i], r[i]),
                        _ = o(u(n), h(n, f, y));
                    M = w, w = v, v = g, g = o(m, S), m = y, y = f, f = n, n = o(S, _)
                }
                this.h[0] = o(this.h[0], n), this.h[1] = o(this.h[1], f), this.h[2] = o(this.h[2], y), this.h[3] = o(this.h[3], m), this.h[4] = o(this.h[4], g), this.h[5] = o(this.h[5], v), this.h[6] = o(this.h[6], w), this.h[7] = o(this.h[7], M)
            }, g.prototype._digest = function(e) {
                return "hex" === e ? i.toHex32(this.h, "big") : i.split32(this.h, "big")
            }
        },
        11629: function(e, t, r) {
            "use strict";
            var i = r(65794),
                n = r(20368);

            function f() {
                if (!(this instanceof f)) return new f;
                n.call(this), this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428]
            }
            i.inherits(f, n), e.exports = f, f.blockSize = 1024, f.outSize = 384, f.hmacStrength = 192, f.padLength = 128, f.prototype._digest = function(e) {
                return "hex" === e ? i.toHex32(this.h.slice(0, 12), "big") : i.split32(this.h.slice(0, 12), "big")
            }
        },
        20368: function(e, t, r) {
            "use strict";
            var i = r(65794),
                n = r(49619),
                f = r(8786),
                a = i.rotr64_hi,
                o = i.rotr64_lo,
                s = i.shr64_hi,
                d = i.shr64_lo,
                c = i.sum64,
                h = i.sum64_hi,
                u = i.sum64_lo,
                l = i.sum64_4_hi,
                b = i.sum64_4_lo,
                p = i.sum64_5_hi,
                y = i.sum64_5_lo,
                m = n.BlockHash,
                g = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];

            function v() {
                if (!(this instanceof v)) return new v;
                m.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = g, this.W = Array(160)
            }
            i.inherits(v, m), e.exports = v, v.blockSize = 1024, v.outSize = 512, v.hmacStrength = 192, v.padLength = 128, v.prototype._prepareBlock = function(e, t) {
                for (var r = this.W, i = 0; i < 32; i++) r[i] = e[t + i];
                for (; i < r.length; i += 2) {
                    var n = function(e, t) {
                            var r = a(e, t, 19) ^ a(t, e, 29) ^ s(e, t, 6);
                            return r < 0 && (r += 4294967296), r
                        }(r[i - 4], r[i - 3]),
                        f = function(e, t) {
                            var r = o(e, t, 19) ^ o(t, e, 29) ^ d(e, t, 6);
                            return r < 0 && (r += 4294967296), r
                        }(r[i - 4], r[i - 3]),
                        c = r[i - 14],
                        h = r[i - 13],
                        u = function(e, t) {
                            var r = a(e, t, 1) ^ a(e, t, 8) ^ s(e, t, 7);
                            return r < 0 && (r += 4294967296), r
                        }(r[i - 30], r[i - 29]),
                        p = function(e, t) {
                            var r = o(e, t, 1) ^ o(e, t, 8) ^ d(e, t, 7);
                            return r < 0 && (r += 4294967296), r
                        }(r[i - 30], r[i - 29]),
                        y = r[i - 32],
                        m = r[i - 31];
                    r[i] = l(n, f, c, h, u, p, y, m), r[i + 1] = b(n, f, c, h, u, p, y, m)
                }
            }, v.prototype._update = function(e, t) {
                this._prepareBlock(e, t);
                var r = this.W,
                    i = this.h[0],
                    n = this.h[1],
                    s = this.h[2],
                    d = this.h[3],
                    l = this.h[4],
                    b = this.h[5],
                    m = this.h[6],
                    g = this.h[7],
                    v = this.h[8],
                    w = this.h[9],
                    M = this.h[10],
                    S = this.h[11],
                    _ = this.h[12],
                    x = this.h[13],
                    A = this.h[14],
                    E = this.h[15];
                f(this.k.length === r.length);
                for (var I = 0; I < r.length; I += 2) {
                    var P = A,
                        z = E,
                        O = function(e, t) {
                            var r = a(e, t, 14) ^ a(e, t, 18) ^ a(t, e, 9);
                            return r < 0 && (r += 4294967296), r
                        }(v, w),
                        B = function(e, t) {
                            var r = o(e, t, 14) ^ o(e, t, 18) ^ o(t, e, 9);
                            return r < 0 && (r += 4294967296), r
                        }(v, w),
                        k = function(e, t, r, i, n) {
                            var f = e & r ^ ~e & n;
                            return f < 0 && (f += 4294967296), f
                        }(v, 0, M, 0, _, x),
                        R = function(e, t, r, i, n, f) {
                            var a = t & i ^ ~t & f;
                            return a < 0 && (a += 4294967296), a
                        }(0, w, 0, S, 0, x),
                        q = this.k[I],
                        j = this.k[I + 1],
                        C = r[I],
                        T = r[I + 1],
                        N = p(P, z, O, B, k, R, q, j, C, T),
                        L = y(P, z, O, B, k, R, q, j, C, T);
                    P = function(e, t) {
                        var r = a(e, t, 28) ^ a(t, e, 2) ^ a(t, e, 7);
                        return r < 0 && (r += 4294967296), r
                    }(i, n);
                    var U = h(P, z = function(e, t) {
                            var r = o(e, t, 28) ^ o(t, e, 2) ^ o(t, e, 7);
                            return r < 0 && (r += 4294967296), r
                        }(i, n), O = function(e, t, r, i, n) {
                            var f = e & r ^ e & n ^ r & n;
                            return f < 0 && (f += 4294967296), f
                        }(i, 0, s, 0, l, b), B = function(e, t, r, i, n, f) {
                            var a = t & i ^ t & f ^ i & f;
                            return a < 0 && (a += 4294967296), a
                        }(0, n, 0, d, 0, b)),
                        H = u(P, z, O, B);
                    A = _, E = x, _ = M, x = S, M = v, S = w, v = h(m, g, N, L), w = u(g, g, N, L), m = l, g = b, l = s, b = d, s = i, d = n, i = h(N, L, U, H), n = u(N, L, U, H)
                }
                c(this.h, 0, i, n), c(this.h, 2, s, d), c(this.h, 4, l, b), c(this.h, 6, m, g), c(this.h, 8, v, w), c(this.h, 10, M, S), c(this.h, 12, _, x), c(this.h, 14, A, E)
            }, v.prototype._digest = function(e) {
                return "hex" === e ? i.toHex32(this.h, "big") : i.split32(this.h, "big")
            }
        },
        52770: function(e, t, r) {
            "use strict";
            var i = r(65794).rotr32;

            function n(e, t, r) {
                return e & t ^ e & r ^ t & r
            }
            t.ft_1 = function(e, t, r, i) {
                return 0 === e ? t & r ^ ~t & i : 1 === e || 3 === e ? t ^ r ^ i : 2 === e ? n(t, r, i) : void 0
            }, t.ch32 = function(e, t, r) {
                return e & t ^ ~e & r
            }, t.maj32 = n, t.p32 = function(e, t, r) {
                return e ^ t ^ r
            }, t.s0_256 = function(e) {
                return i(e, 2) ^ i(e, 13) ^ i(e, 22)
            }, t.s1_256 = function(e) {
                return i(e, 6) ^ i(e, 11) ^ i(e, 25)
            }, t.g0_256 = function(e) {
                return i(e, 7) ^ i(e, 18) ^ e >>> 3
            }, t.g1_256 = function(e) {
                return i(e, 17) ^ i(e, 19) ^ e >>> 10
            }
        },
        65794: function(e, t, r) {
            "use strict";
            var i = r(8786),
                n = r(75335);

            function f(e) {
                return (e >>> 24 | e >>> 8 & 65280 | e << 8 & 16711680 | (255 & e) << 24) >>> 0
            }

            function a(e) {
                return 1 === e.length ? "0" + e : e
            }

            function o(e) {
                if (7 === e.length) return "0" + e;
                if (6 === e.length) return "00" + e;
                if (5 === e.length) return "000" + e;
                if (4 === e.length) return "0000" + e;
                if (3 === e.length) return "00000" + e;
                if (2 === e.length) return "000000" + e;
                if (1 === e.length) return "0000000" + e;
                else return e
            }
            t.inherits = n, t.toArray = function(e, t) {
                if (Array.isArray(e)) return e.slice();
                if (!e) return [];
                var r = [];
                if ("string" == typeof e) {
                    if (t) {
                        if ("hex" === t)
                            for ((e = e.replace(/[^a-z0-9]+/ig, "")).length % 2 != 0 && (e = "0" + e), n = 0; n < e.length; n += 2) r.push(parseInt(e[n] + e[n + 1], 16))
                    } else
                        for (var i = 0, n = 0; n < e.length; n++) {
                            var f, a, o = e.charCodeAt(n);
                            o < 128 ? r[i++] = o : (o < 2048 ? r[i++] = o >> 6 | 192 : ((f = e, a = n, (64512 & f.charCodeAt(a)) != 55296 || a < 0 || a + 1 >= f.length ? 1 : (64512 & f.charCodeAt(a + 1)) != 56320) ? r[i++] = o >> 12 | 224 : (o = 65536 + ((1023 & o) << 10) + (1023 & e.charCodeAt(++n)), r[i++] = o >> 18 | 240, r[i++] = o >> 12 & 63 | 128), r[i++] = o >> 6 & 63 | 128), r[i++] = 63 & o | 128)
                        }
                } else
                    for (n = 0; n < e.length; n++) r[n] = 0 | e[n];
                return r
            }, t.toHex = function(e) {
                for (var t = "", r = 0; r < e.length; r++) t += a(e[r].toString(16));
                return t
            }, t.htonl = f, t.toHex32 = function(e, t) {
                for (var r = "", i = 0; i < e.length; i++) {
                    var n = e[i];
                    "little" === t && (n = f(n)), r += o(n.toString(16))
                }
                return r
            }, t.zero2 = a, t.zero8 = o, t.join32 = function(e, t, r, n) {
                var f, a = r - t;
                i(a % 4 == 0);
                for (var o = Array(a / 4), s = 0, d = t; s < o.length; s++, d += 4) f = "big" === n ? e[d] << 24 | e[d + 1] << 16 | e[d + 2] << 8 | e[d + 3] : e[d + 3] << 24 | e[d + 2] << 16 | e[d + 1] << 8 | e[d], o[s] = f >>> 0;
                return o
            }, t.split32 = function(e, t) {
                for (var r = Array(4 * e.length), i = 0, n = 0; i < e.length; i++, n += 4) {
                    var f = e[i];
                    "big" === t ? (r[n] = f >>> 24, r[n + 1] = f >>> 16 & 255, r[n + 2] = f >>> 8 & 255, r[n + 3] = 255 & f) : (r[n + 3] = f >>> 24, r[n + 2] = f >>> 16 & 255, r[n + 1] = f >>> 8 & 255, r[n] = 255 & f)
                }
                return r
            }, t.rotr32 = function(e, t) {
                return e >>> t | e << 32 - t
            }, t.rotl32 = function(e, t) {
                return e << t | e >>> 32 - t
            }, t.sum32 = function(e, t) {
                return e + t >>> 0
            }, t.sum32_3 = function(e, t, r) {
                return e + t + r >>> 0
            }, t.sum32_4 = function(e, t, r, i) {
                return e + t + r + i >>> 0
            }, t.sum32_5 = function(e, t, r, i, n) {
                return e + t + r + i + n >>> 0
            }, t.sum64 = function(e, t, r, i) {
                var n = e[t],
                    f = i + e[t + 1] >>> 0;
                e[t] = (f < i ? 1 : 0) + r + n >>> 0, e[t + 1] = f
            }, t.sum64_hi = function(e, t, r, i) {
                return (t + i >>> 0 < t ? 1 : 0) + e + r >>> 0
            }, t.sum64_lo = function(e, t, r, i) {
                return t + i >>> 0
            }, t.sum64_4_hi = function(e, t, r, i, n, f, a, o) {
                var s, d = t;
                return e + r + n + a + (0 + ((d = d + i >>> 0) < t ? 1 : 0) + ((d = d + f >>> 0) < f ? 1 : 0) + ((d = d + o >>> 0) < o ? 1 : 0)) >>> 0
            }, t.sum64_4_lo = function(e, t, r, i, n, f, a, o) {
                return t + i + f + o >>> 0
            }, t.sum64_5_hi = function(e, t, r, i, n, f, a, o, s, d) {
                var c, h = t;
                return e + r + n + a + s + (0 + ((h = h + i >>> 0) < t ? 1 : 0) + ((h = h + f >>> 0) < f ? 1 : 0) + ((h = h + o >>> 0) < o ? 1 : 0) + ((h = h + d >>> 0) < d ? 1 : 0)) >>> 0
            }, t.sum64_5_lo = function(e, t, r, i, n, f, a, o, s, d) {
                return t + i + f + o + d >>> 0
            }, t.rotr64_hi = function(e, t, r) {
                return (t << 32 - r | e >>> r) >>> 0
            }, t.rotr64_lo = function(e, t, r) {
                return (e << 32 - r | t >>> r) >>> 0
            }, t.shr64_hi = function(e, t, r) {
                return e >>> r
            }, t.shr64_lo = function(e, t, r) {
                return (e << 32 - r | t >>> r) >>> 0
            }
        },
        83715: function(e, t, r) {
            "use strict";
            var i = r(55336),
                n = r(28280),
                f = r(8786);

            function a(e) {
                if (!(this instanceof a)) return new a(e);
                this.hash = e.hash, this.predResist = !!e.predResist, this.outLen = this.hash.outSize, this.minEntropy = e.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
                var t = n.toArray(e.entropy, e.entropyEnc || "hex"),
                    r = n.toArray(e.nonce, e.nonceEnc || "hex"),
                    i = n.toArray(e.pers, e.persEnc || "hex");
                f(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(t, r, i)
            }
            e.exports = a, a.prototype._init = function(e, t, r) {
                var i = e.concat(t).concat(r);
                this.K = Array(this.outLen / 8), this.V = Array(this.outLen / 8);
                for (var n = 0; n < this.V.length; n++) this.K[n] = 0, this.V[n] = 1;
                this._update(i), this._reseed = 1, this.reseedInterval = 281474976710656
            }, a.prototype._hmac = function() {
                return new i.hmac(this.hash, this.K)
            }, a.prototype._update = function(e) {
                var t = this._hmac().update(this.V).update([0]);
                e && (t = t.update(e)), this.K = t.digest(), this.V = this._hmac().update(this.V).digest(), e && (this.K = this._hmac().update(this.V).update([1]).update(e).digest(), this.V = this._hmac().update(this.V).digest())
            }, a.prototype.reseed = function(e, t, r, i) {
                "string" != typeof t && (i = r, r = t, t = null), e = n.toArray(e, t), r = n.toArray(r, i), f(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(e.concat(r || [])), this._reseed = 1
            }, a.prototype.generate = function(e, t, r, i) {
                if (this._reseed > this.reseedInterval) throw Error("Reseed is required");
                "string" != typeof t && (i = r, r = t, t = null), r && (r = n.toArray(r, i || "hex"), this._update(r));
                for (var f = []; f.length < e;) this.V = this._hmac().update(this.V).digest(), f = f.concat(this.V);
                var a = f.slice(0, e);
                return this._update(r), this._reseed++, n.encode(a, t)
            }
        },
        75335: function(e) {
            "function" == typeof Object.create ? e.exports = function(e, t) {
                t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }))
            } : e.exports = function(e, t) {
                if (t) {
                    e.super_ = t;
                    var r = function() {};
                    r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
                }
            }
        },
        55674: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.decode = t.encode = t.unescape = t.escape = t.pad = void 0;
            let i = r(34699);

            function n(e) {
                return `${e}${"=".repeat(4-(e.length%4||4))}`
            }

            function f(e) {
                return e.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
            }

            function a(e) {
                return n(e).replace(/-/g, "+").replace(/_/g, "/")
            }
            t.pad = n, t.escape = f, t.unescape = a, t.encode = function(e) {
                return f((0, i.fromByteArray)(new TextEncoder().encode(e)))
            }, t.decode = function(e) {
                return new TextDecoder().decode((0, i.toByteArray)(n(a(e))))
            }
        },
        35078: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.cryptoClients = t.SECP256K1Client = void 0;
            let i = r(72965);
            Object.defineProperty(t, "SECP256K1Client", {
                enumerable: !0,
                get: function() {
                    return i.SECP256K1Client
                }
            });
            let n = {
                ES256K: i.SECP256K1Client
            };
            t.cryptoClients = n
        },
        72965: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SECP256K1Client = void 0;
            let i = r(12572),
                n = r(5571),
                f = r(45999),
                a = r(81192),
                o = r(31474),
                s = r(59786);
            f.utils.hmacSha256Sync = (e, ...t) => {
                let r = i.hmac.create(n.sha256, e);
                return t.forEach(e => r.update(e)), r.digest()
            };
            class d {
                static derivePublicKey(e, t = !0) {
                    return 66 === e.length && (e = e.slice(0, 64)), e.length < 64 && (e = e.padStart(64, "0")), (0, s.bytesToHex)(f.getPublicKey(e, t))
                }
                static signHash(e, t, r = "jose") {
                    if (!e || !t) throw new o.MissingParametersError("a signing input hash and private key are all required");
                    let i = f.signSync(e, t.slice(0, 64), {
                        der: !0,
                        canonical: !1
                    });
                    if ("der" === r) return (0, s.bytesToHex)(i);
                    if ("jose" === r) return (0, a.derToJose)(i, "ES256");
                    throw Error("Invalid signature format")
                }
                static loadSignature(e) {
                    return (0, a.joseToDer)(e, "ES256")
                }
                static verifyHash(e, t, r) {
                    if (!e || !t || !r) throw new o.MissingParametersError("a signing input hash, der signature, and public key are all required");
                    return f.verify(t, e, r, {
                        strict: !1
                    })
                }
            }
            t.SECP256K1Client = d, d.algorithmName = "ES256K"
        },
        85666: function(e, t, r) {
            "use strict";
            var i = this && this.__awaiter || function(e, t, r, i) {
                return new(r || (r = Promise))(function(n, f) {
                    function a(e) {
                        try {
                            s(i.next(e))
                        } catch (e) {
                            f(e)
                        }
                    }

                    function o(e) {
                        try {
                            s(i.throw(e))
                        } catch (e) {
                            f(e)
                        }
                    }

                    function s(e) {
                        var t;
                        e.done ? n(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                            e(t)
                        })).then(a, o)
                    }
                    s((i = i.apply(e, t || [])).next())
                })
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.hashSha256Async = t.hashSha256 = void 0;
            let n = r(5571);

            function f(e) {
                return (0, n.sha256)(e)
            }
            t.hashSha256 = f, t.hashSha256Async = function(e) {
                return i(this, void 0, void 0, function*() {
                    try {
                        let t = "undefined" != typeof crypto && void 0 !== crypto.subtle;
                        if (t) {
                            let t = "string" == typeof e ? new TextEncoder().encode(e) : e,
                                r = yield crypto.subtle.digest("SHA-256", t);
                            return new Uint8Array(r)
                        } {
                            let t = r(18971);
                            if (!t.createHash) throw Error("`crypto` module does not contain `createHash`");
                            return Promise.resolve(t.createHash("sha256").update(e).digest())
                        }
                    } catch (t) {
                        return console.log(t), console.log('Crypto lib not found. Neither the global `crypto.subtle` Web Crypto API, nor the or the Node.js `require("crypto").createHash` module is available. Falling back to JS implementation.'), Promise.resolve(f(e))
                    }
                })
            }
        },
        28063: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.decodeToken = void 0;
            let i = r(55674);
            t.decodeToken = function(e) {
                if ("string" == typeof e) {
                    let t = e.split("."),
                        r = JSON.parse(i.decode(t[0])),
                        n = JSON.parse(i.decode(t[1])),
                        f = t[2];
                    return {
                        header: r,
                        payload: n,
                        signature: f
                    }
                }
                if ("object" == typeof e) {
                    if ("string" != typeof e.payload) throw Error("Expected token payload to be a base64 or json string");
                    let t = e.payload;
                    "{" !== e.payload[0] && (t = i.decode(t));
                    let r = [];
                    return e.header.map(e => {
                        let t = JSON.parse(i.decode(e));
                        r.push(t)
                    }), {
                        header: r,
                        payload: JSON.parse(t),
                        signature: e.signature
                    }
                }
            }
        },
        81192: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.joseToDer = t.derToJose = void 0;
            let i = r(34699),
                n = r(55674);

            function f(e) {
                return (e / 8 | 0) + (e % 8 == 0 ? 0 : 1)
            }
            let a = {
                ES256: f(256),
                ES384: f(384),
                ES512: f(521)
            };

            function o(e) {
                let t = a[e];
                if (t) return t;
                throw Error(`Unknown algorithm "${e}"`)
            }

            function s(e) {
                if (e instanceof Uint8Array) return e;
                if ("string" == typeof e) return (0, i.toByteArray)((0, n.pad)(e));
                throw TypeError("ECDSA signature must be a Base64 string or a Uint8Array")
            }

            function d(e, t, r) {
                let i = 0;
                for (; t + i < r && 0 === e[t + i];) ++i;
                let n = e[t + i] >= 128;
                return n && --i, i
            }
            t.derToJose = function(e, t) {
                let r = s(e),
                    f = o(t),
                    a = f + 1,
                    d = r.length,
                    c = 0;
                if (48 !== r[c++]) throw Error('Could not find expected "seq"');
                let h = r[c++];
                if (129 === h && (h = r[c++]), d - c < h) throw Error(`"seq" specified length of "${h}", only "${d-c}" remaining`);
                if (2 !== r[c++]) throw Error('Could not find expected "int" for "r"');
                let u = r[c++];
                if (d - c - 2 < u) throw Error(`"r" specified length of "${u}", only "${d-c-2}" available`);
                if (a < u) throw Error(`"r" specified length of "${u}", max of "${a}" is acceptable`);
                let l = c;
                if (c += u, 2 !== r[c++]) throw Error('Could not find expected "int" for "s"');
                let b = r[c++];
                if (d - c !== b) throw Error(`"s" specified length of "${b}", expected "${d-c}"`);
                if (a < b) throw Error(`"s" specified length of "${b}", max of "${a}" is acceptable`);
                let p = c;
                if ((c += b) !== d) throw Error(`Expected to consume entire array, but "${d-c}" bytes remain`);
                let y = f - u,
                    m = f - b,
                    g = new Uint8Array(y + u + m + b);
                for (c = 0; c < y; ++c) g[c] = 0;
                g.set(r.subarray(l + Math.max(-y, 0), l + u), c), c = f;
                for (let e = c; c < e + m; ++c) g[c] = 0;
                return g.set(r.subarray(p + Math.max(-m, 0), p + b), c), (0, n.escape)((0, i.fromByteArray)(g))
            }, t.joseToDer = function(e, t) {
                e = s(e);
                let r = o(t),
                    i = e.length;
                if (i !== 2 * r) throw TypeError(`"${t}" signatures must be "${2*r}" bytes, saw "${i}"`);
                let n = d(e, 0, r),
                    f = d(e, r, e.length),
                    a = r - n,
                    c = r - f,
                    h = 2 + a + 1 + 1 + c,
                    u = h < 128,
                    l = new Uint8Array((u ? 2 : 3) + h),
                    b = 0;
                return l[b++] = 48, u ? l[b++] = h : (l[b++] = 129, l[b++] = 255 & h), l[b++] = 2, l[b++] = a, n < 0 ? (l[b++] = 0, l.set(e.subarray(0, r), b), b += r) : (l.set(e.subarray(n, r), b), b += r - n), l[b++] = 2, l[b++] = c, f < 0 ? (l[b++] = 0, l.set(e.subarray(r), b)) : l.set(e.subarray(r + f), b), l
            }
        },
        31474: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.InvalidTokenError = t.MissingParametersError = void 0;
            class r extends Error {
                constructor(e) {
                    super(), this.name = "MissingParametersError", this.message = e || ""
                }
            }
            t.MissingParametersError = r;
            class i extends Error {
                constructor(e) {
                    super(), this.name = "InvalidTokenError", this.message = e || ""
                }
            }
            t.InvalidTokenError = i
        },
        23139: function(e, t, r) {
            "use strict";
            var i = this && this.__createBinding || (Object.create ? function(e, t, r, i) {
                    void 0 === i && (i = r);
                    var n = Object.getOwnPropertyDescriptor(t, r);
                    (!n || ("get" in n ? !t.__esModule : n.writable || n.configurable)) && (n = {
                        enumerable: !0,
                        get: function() {
                            return t[r]
                        }
                    }), Object.defineProperty(e, i, n)
                } : function(e, t, r, i) {
                    void 0 === i && (i = r), e[i] = t[r]
                }),
                n = this && this.__exportStar || function(e, t) {
                    for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || i(t, e, r)
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), n(r(83455), t), n(r(31567), t), n(r(28063), t), n(r(31474), t), n(r(35078), t)
        },
        83455: function(e, t, r) {
            "use strict";
            var i = this && this.__awaiter || function(e, t, r, i) {
                return new(r || (r = Promise))(function(n, f) {
                    function a(e) {
                        try {
                            s(i.next(e))
                        } catch (e) {
                            f(e)
                        }
                    }

                    function o(e) {
                        try {
                            s(i.throw(e))
                        } catch (e) {
                            f(e)
                        }
                    }

                    function s(e) {
                        var t;
                        e.done ? n(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                            e(t)
                        })).then(a, o)
                    }
                    s((i = i.apply(e, t || [])).next())
                })
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TokenSigner = t.createUnsecuredToken = void 0;
            let n = r(55674),
                f = r(35078),
                a = r(31474),
                o = r(85666);

            function s(e, t) {
                let r = [],
                    i = n.encode(JSON.stringify(t));
                r.push(i);
                let f = n.encode(JSON.stringify(e));
                r.push(f);
                let a = r.join(".");
                return a
            }
            t.createUnsecuredToken = function(e) {
                return s(e, {
                    typ: "JWT",
                    alg: "none"
                }) + "."
            };
            class d {
                constructor(e, t) {
                    if (!(e && t)) throw new a.MissingParametersError("a signing algorithm and private key are required");
                    if ("string" != typeof e) throw Error("signing algorithm parameter must be a string");
                    if (e = e.toUpperCase(), !f.cryptoClients.hasOwnProperty(e)) throw Error("invalid signing algorithm");
                    this.tokenType = "JWT", this.cryptoClient = f.cryptoClients[e], this.rawPrivateKey = t
                }
                header(e = {}) {
                    let t = {
                        typ: this.tokenType,
                        alg: this.cryptoClient.algorithmName
                    };
                    return Object.assign({}, t, e)
                }
                sign(e, t = !1, r = {}) {
                    let i = this.header(r),
                        n = s(e, i),
                        f = (0, o.hashSha256)(n);
                    return this.createWithSignedHash(e, t, i, n, f)
                }
                signAsync(e, t = !1, r = {}) {
                    return i(this, void 0, void 0, function*() {
                        let i = this.header(r),
                            n = s(e, i),
                            f = yield(0, o.hashSha256Async)(n);
                        return this.createWithSignedHash(e, t, i, n, f)
                    })
                }
                createWithSignedHash(e, t, r, i, f) {
                    let a = this.cryptoClient.signHash(f, this.rawPrivateKey);
                    if (!t) return [i, a].join("."); {
                        let t = {
                            header: [n.encode(JSON.stringify(r))],
                            payload: JSON.stringify(e),
                            signature: [a]
                        };
                        return t
                    }
                }
            }
            t.TokenSigner = d
        },
        31567: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TokenVerifier = void 0;
            let i = r(55674),
                n = r(35078),
                f = r(31474),
                a = r(85666);
            class o {
                constructor(e, t) {
                    if (!(e && t)) throw new f.MissingParametersError("a signing algorithm and public key are required");
                    if ("string" != typeof e) throw "signing algorithm parameter must be a string";
                    if (e = e.toUpperCase(), !n.cryptoClients.hasOwnProperty(e)) throw "invalid signing algorithm";
                    this.tokenType = "JWT", this.cryptoClient = n.cryptoClients[e], this.rawPublicKey = t
                }
                verify(e) {
                    return "string" == typeof e ? this.verifyCompact(e, !1) : "object" == typeof e && this.verifyExpanded(e, !1)
                }
                verifyAsync(e) {
                    return "string" == typeof e ? this.verifyCompact(e, !0) : "object" == typeof e ? this.verifyExpanded(e, !0) : Promise.resolve(!1)
                }
                verifyCompact(e, t) {
                    let r = e.split("."),
                        i = r[0] + "." + r[1],
                        n = e => {
                            let t = this.cryptoClient.loadSignature(r[2]);
                            return this.cryptoClient.verifyHash(e, t, this.rawPublicKey)
                        };
                    if (t) return (0, a.hashSha256Async)(i).then(e => n(e)); {
                        let e = (0, a.hashSha256)(i);
                        return n(e)
                    }
                }
                verifyExpanded(e, t) {
                    let r = [e.header.join("."), i.encode(e.payload)].join("."),
                        n = !0,
                        f = t => (e.signature.map(e => {
                            let r = this.cryptoClient.loadSignature(e),
                                i = this.cryptoClient.verifyHash(t, r, this.rawPublicKey);
                            i || (n = !1)
                        }), n);
                    if (t) return (0, a.hashSha256Async)(r).then(e => f(e)); {
                        let e = (0, a.hashSha256)(r);
                        return f(e)
                    }
                }
            }
            t.TokenVerifier = o
        },
        73902: function(e, t) {
            "use strict";

            function r(e) {
                if (!Number.isSafeInteger(e) || e < 0) throw Error(`Wrong positive integer: ${e}`)
            }

            function i(e) {
                if ("boolean" != typeof e) throw Error(`Expected boolean, not ${e}`)
            }

            function n(e, ...t) {
                if (!(e instanceof Uint8Array || null != e && "object" == typeof e && "Uint8Array" === e.constructor.name)) throw Error("Expected Uint8Array");
                if (t.length > 0 && !t.includes(e.length)) throw Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`)
            }

            function f(e) {
                if ("function" != typeof e || "function" != typeof e.create) throw Error("Hash should be wrapped by utils.wrapConstructor");
                r(e.outputLen), r(e.blockLen)
            }

            function a(e, t = !0) {
                if (e.destroyed) throw Error("Hash instance has been destroyed");
                if (t && e.finished) throw Error("Hash#digest() has already been called")
            }

            function o(e, t) {
                n(e);
                let r = t.outputLen;
                if (e.length < r) throw Error(`digestInto() expects output buffer of length at least ${r}`)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.output = t.exists = t.hash = t.bytes = t.bool = t.number = void 0, t.number = r, t.bool = i, t.bytes = n, t.hash = f, t.exists = a, t.output = o, t.default = {
                number: r,
                bool: i,
                bytes: n,
                hash: f,
                exists: a,
                output: o
            }
        },
        32223: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SHA2 = void 0;
            let i = r(73902),
                n = r(59786);
            class f extends n.Hash {
                constructor(e, t, r, i) {
                    super(), this.blockLen = e, this.outputLen = t, this.padOffset = r, this.isLE = i, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(e), this.view = (0, n.createView)(this.buffer)
                }
                update(e) {
                    (0, i.exists)(this);
                    let {
                        view: t,
                        buffer: r,
                        blockLen: f
                    } = this;
                    e = (0, n.toBytes)(e);
                    let a = e.length;
                    for (let i = 0; i < a;) {
                        let o = Math.min(f - this.pos, a - i);
                        if (o === f) {
                            let t = (0, n.createView)(e);
                            for (; f <= a - i; i += f) this.process(t, i);
                            continue
                        }
                        r.set(e.subarray(i, i + o), this.pos), this.pos += o, i += o, this.pos === f && (this.process(t, 0), this.pos = 0)
                    }
                    return this.length += e.length, this.roundClean(), this
                }
                digestInto(e) {
                    (0, i.exists)(this), (0, i.output)(e, this), this.finished = !0;
                    let {
                        buffer: t,
                        view: r,
                        blockLen: f,
                        isLE: a
                    } = this, {
                        pos: o
                    } = this;
                    t[o++] = 128, this.buffer.subarray(o).fill(0), this.padOffset > f - o && (this.process(r, 0), o = 0);
                    for (let e = o; e < f; e++) t[e] = 0;
                    ! function(e, t, r, i) {
                        if ("function" == typeof e.setBigUint64) return e.setBigUint64(t, r, i);
                        let n = BigInt(32),
                            f = BigInt(4294967295),
                            a = Number(r >> n & f),
                            o = Number(r & f),
                            s = i ? 4 : 0,
                            d = i ? 0 : 4;
                        e.setUint32(t + s, a, i), e.setUint32(t + d, o, i)
                    }(r, f - 8, BigInt(8 * this.length), a), this.process(r, 0);
                    let s = (0, n.createView)(e),
                        d = this.outputLen;
                    if (d % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
                    let c = d / 4,
                        h = this.get();
                    if (c > h.length) throw Error("_sha2: outputLen bigger than state");
                    for (let e = 0; e < c; e++) s.setUint32(4 * e, h[e], a)
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
                        length: i,
                        finished: n,
                        destroyed: f,
                        pos: a
                    } = this;
                    return e.length = i, e.pos = a, e.finished = n, e.destroyed = f, i % t && e.buffer.set(r), e
                }
            }
            t.SHA2 = f
        },
        82206: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.crypto = void 0, t.crypto = "object" == typeof globalThis && "crypto" in globalThis ? globalThis.crypto : void 0
        },
        12572: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.hmac = t.HMAC = void 0;
            let i = r(73902),
                n = r(59786);
            class f extends n.Hash {
                constructor(e, t) {
                    super(), this.finished = !1, this.destroyed = !1, (0, i.hash)(e);
                    let r = (0, n.toBytes)(t);
                    if (this.iHash = e.create(), "function" != typeof this.iHash.update) throw Error("Expected instance of class which extends utils.Hash");
                    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
                    let f = this.blockLen,
                        a = new Uint8Array(f);
                    a.set(r.length > f ? e.create().update(r).digest() : r);
                    for (let e = 0; e < a.length; e++) a[e] ^= 54;
                    this.iHash.update(a), this.oHash = e.create();
                    for (let e = 0; e < a.length; e++) a[e] ^= 106;
                    this.oHash.update(a), a.fill(0)
                }
                update(e) {
                    return (0, i.exists)(this), this.iHash.update(e), this
                }
                digestInto(e) {
                    (0, i.exists)(this), (0, i.bytes)(e, this.outputLen), this.finished = !0, this.iHash.digestInto(e), this.oHash.update(e), this.oHash.digestInto(e), this.destroy()
                }
                digest() {
                    let e = new Uint8Array(this.oHash.outputLen);
                    return this.digestInto(e), e
                }
                _cloneInto(e) {
                    e || (e = Object.create(Object.getPrototypeOf(this), {}));
                    let {
                        oHash: t,
                        iHash: r,
                        finished: i,
                        destroyed: n,
                        blockLen: f,
                        outputLen: a
                    } = this;
                    return e.finished = i, e.destroyed = n, e.blockLen = f, e.outputLen = a, e.oHash = t._cloneInto(e.oHash), e.iHash = r._cloneInto(e.iHash), e
                }
                destroy() {
                    this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy()
                }
            }
            t.HMAC = f, t.hmac = (e, t, r) => new f(e, t).update(r).digest(), t.hmac.create = (e, t) => new f(e, t)
        },
        5571: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.sha224 = t.sha256 = void 0;
            let i = r(32223),
                n = r(59786),
                f = (e, t, r) => e & t ^ ~e & r,
                a = (e, t, r) => e & t ^ e & r ^ t & r,
                o = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]),
                s = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]),
                d = new Uint32Array(64);
            class c extends i.SHA2 {
                constructor() {
                    super(64, 32, 8, !1), this.A = 0 | s[0], this.B = 0 | s[1], this.C = 0 | s[2], this.D = 0 | s[3], this.E = 0 | s[4], this.F = 0 | s[5], this.G = 0 | s[6], this.H = 0 | s[7]
                }
                get() {
                    let {
                        A: e,
                        B: t,
                        C: r,
                        D: i,
                        E: n,
                        F: f,
                        G: a,
                        H: o
                    } = this;
                    return [e, t, r, i, n, f, a, o]
                }
                set(e, t, r, i, n, f, a, o) {
                    this.A = 0 | e, this.B = 0 | t, this.C = 0 | r, this.D = 0 | i, this.E = 0 | n, this.F = 0 | f, this.G = 0 | a, this.H = 0 | o
                }
                process(e, t) {
                    for (let r = 0; r < 16; r++, t += 4) d[r] = e.getUint32(t, !1);
                    for (let e = 16; e < 64; e++) {
                        let t = d[e - 15],
                            r = d[e - 2],
                            i = (0, n.rotr)(t, 7) ^ (0, n.rotr)(t, 18) ^ t >>> 3,
                            f = (0, n.rotr)(r, 17) ^ (0, n.rotr)(r, 19) ^ r >>> 10;
                        d[e] = f + d[e - 7] + i + d[e - 16] | 0
                    }
                    let {
                        A: r,
                        B: i,
                        C: s,
                        D: c,
                        E: h,
                        F: u,
                        G: l,
                        H: b
                    } = this;
                    for (let e = 0; e < 64; e++) {
                        let t = (0, n.rotr)(h, 6) ^ (0, n.rotr)(h, 11) ^ (0, n.rotr)(h, 25),
                            p = b + t + f(h, u, l) + o[e] + d[e] | 0,
                            y = (0, n.rotr)(r, 2) ^ (0, n.rotr)(r, 13) ^ (0, n.rotr)(r, 22),
                            m = y + a(r, i, s) | 0;
                        b = l, l = u, u = h, h = c + p | 0, c = s, s = i, i = r, r = p + m | 0
                    }
                    r = r + this.A | 0, i = i + this.B | 0, s = s + this.C | 0, c = c + this.D | 0, h = h + this.E | 0, u = u + this.F | 0, l = l + this.G | 0, b = b + this.H | 0, this.set(r, i, s, c, h, u, l, b)
                }
                roundClean() {
                    d.fill(0)
                }
                destroy() {
                    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0)
                }
            }
            class h extends c {
                constructor() {
                    super(), this.A = -1056596264, this.B = 914150663, this.C = 812702999, this.D = -150054599, this.E = -4191439, this.F = 1750603025, this.G = 1694076839, this.H = -1090891868, this.outputLen = 28
                }
            }
            t.sha256 = (0, n.wrapConstructor)(() => new c), t.sha224 = (0, n.wrapConstructor)(() => new h)
        },
        59786: function(e, t, r) {
            "use strict"; /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.randomBytes = t.wrapXOFConstructorWithOpts = t.wrapConstructorWithOpts = t.wrapConstructor = t.checkOpts = t.Hash = t.concatBytes = t.toBytes = t.utf8ToBytes = t.asyncLoop = t.nextTick = t.hexToBytes = t.bytesToHex = t.isLE = t.rotr = t.createView = t.u32 = t.u8 = void 0;
            let i = r(82206);

            function n(e) {
                return e instanceof Uint8Array || null != e && "object" == typeof e && "Uint8Array" === e.constructor.name
            }
            if (t.u8 = e => new Uint8Array(e.buffer, e.byteOffset, e.byteLength), t.u32 = e => new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)), t.createView = e => new DataView(e.buffer, e.byteOffset, e.byteLength), t.rotr = (e, t) => e << 32 - t | e >>> t, t.isLE = 68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0], !t.isLE) throw Error("Non little-endian hardware is not supported");
            let f = Array.from({
                length: 256
            }, (e, t) => t.toString(16).padStart(2, "0"));
            t.bytesToHex = function(e) {
                if (!n(e)) throw Error("Uint8Array expected");
                let t = "";
                for (let r = 0; r < e.length; r++) t += f[e[r]];
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

            function o(e) {
                return e >= a._0 && e <= a._9 ? e - a._0 : e >= a._A && e <= a._F ? e - (a._A - 10) : e >= a._a && e <= a._f ? e - (a._a - 10) : void 0
            }
            t.hexToBytes = function(e) {
                if ("string" != typeof e) throw Error("hex string expected, got " + typeof e);
                let t = e.length,
                    r = t / 2;
                if (t % 2) throw Error("padded hex string expected, got unpadded hex of length " + t);
                let i = new Uint8Array(r);
                for (let t = 0, n = 0; t < r; t++, n += 2) {
                    let r = o(e.charCodeAt(n)),
                        f = o(e.charCodeAt(n + 1));
                    if (void 0 === r || void 0 === f) {
                        let t = e[n] + e[n + 1];
                        throw Error('hex string expected, got non-hex character "' + t + '" at index ' + n)
                    }
                    i[t] = 16 * r + f
                }
                return i
            };
            let s = async () => {};
            async function d(e, r, i) {
                let n = Date.now();
                for (let f = 0; f < e; f++) {
                    i(f);
                    let e = Date.now() - n;
                    e >= 0 && e < r || (await (0, t.nextTick)(), n += e)
                }
            }

            function c(e) {
                if ("string" != typeof e) throw Error(`utf8ToBytes expected string, got ${typeof e}`);
                return new Uint8Array(new TextEncoder().encode(e))
            }

            function h(e) {
                if ("string" == typeof e && (e = c(e)), !n(e)) throw Error(`expected Uint8Array, got ${typeof e}`);
                return e
            }
            t.nextTick = s, t.asyncLoop = d, t.utf8ToBytes = c, t.toBytes = h, t.concatBytes = function(...e) {
                let t = 0;
                for (let r = 0; r < e.length; r++) {
                    let i = e[r];
                    if (!n(i)) throw Error("Uint8Array expected");
                    t += i.length
                }
                let r = new Uint8Array(t);
                for (let t = 0, i = 0; t < e.length; t++) {
                    let n = e[t];
                    r.set(n, i), i += n.length
                }
                return r
            };
            class u {
                clone() {
                    return this._cloneInto()
                }
            }
            t.Hash = u;
            let l = {}.toString;
            t.checkOpts = function(e, t) {
                if (void 0 !== t && "[object Object]" !== l.call(t)) throw Error("Options should be object or undefined");
                let r = Object.assign(e, t);
                return r
            }, t.wrapConstructor = function(e) {
                let t = t => e().update(h(t)).digest(),
                    r = e();
                return t.outputLen = r.outputLen, t.blockLen = r.blockLen, t.create = () => e(), t
            }, t.wrapConstructorWithOpts = function(e) {
                let t = (t, r) => e(r).update(h(t)).digest(),
                    r = e({});
                return t.outputLen = r.outputLen, t.blockLen = r.blockLen, t.create = t => e(t), t
            }, t.wrapXOFConstructorWithOpts = function(e) {
                let t = (t, r) => e(r).update(h(t)).digest(),
                    r = e({});
                return t.outputLen = r.outputLen, t.blockLen = r.blockLen, t.create = t => e(t), t
            }, t.randomBytes = function(e = 32) {
                if (i.crypto && "function" == typeof i.crypto.getRandomValues) return i.crypto.getRandomValues(new Uint8Array(e));
                throw Error("crypto.getRandomValues must be defined")
            }
        },
        8786: function(e) {
            function t(e, t) {
                if (!e) throw Error(t || "Assertion failed")
            }
            e.exports = t, t.equal = function(e, t, r) {
                if (e != t) throw Error(r || "Assertion failed: " + e + " != " + t)
            }
        },
        28280: function(e, t) {
            "use strict";

            function r(e) {
                return 1 === e.length ? "0" + e : e
            }

            function i(e) {
                for (var t = "", i = 0; i < e.length; i++) t += r(e[i].toString(16));
                return t
            }
            t.toArray = function(e, t) {
                if (Array.isArray(e)) return e.slice();
                if (!e) return [];
                var r = [];
                if ("string" != typeof e) {
                    for (var i = 0; i < e.length; i++) r[i] = 0 | e[i];
                    return r
                }
                if ("hex" === t) {
                    (e = e.replace(/[^a-z0-9]+/ig, "")).length % 2 != 0 && (e = "0" + e);
                    for (var i = 0; i < e.length; i += 2) r.push(parseInt(e[i] + e[i + 1], 16))
                } else
                    for (var i = 0; i < e.length; i++) {
                        var n = e.charCodeAt(i),
                            f = n >> 8,
                            a = 255 & n;
                        f ? r.push(f, a) : r.push(a)
                    }
                return r
            }, t.zero2 = r, t.toHex = i, t.encode = function(e, t) {
                return "hex" === t ? i(e) : e
            }
        },
        45883: function(e, t, r) {
            "use strict";
            var i = this && this.__createBinding || (Object.create ? function(e, t, r, i) {
                    void 0 === i && (i = r);
                    var n = Object.getOwnPropertyDescriptor(t, r);
                    (!n || ("get" in n ? !t.__esModule : n.writable || n.configurable)) && (n = {
                        enumerable: !0,
                        get: function() {
                            return t[r]
                        }
                    }), Object.defineProperty(e, i, n)
                } : function(e, t, r, i) {
                    void 0 === i && (i = r), e[i] = t[r]
                }),
                n = this && this.__exportStar || function(e, t) {
                    for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || i(t, e, r)
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getAddress = void 0;
            let f = r(23139),
                a = r(41365),
                o = async e => {
                    let t = await (0, a.getProviderOrThrow)(e.getProvider),
                        {
                            purposes: r
                        } = e.payload;
                    if (!r) throw Error("Address purposes are required");
                    try {
                        let r = (0, f.createUnsecuredToken)(e.payload),
                            i = await t.connect(r);
                        e.onFinish ? .(i)
                    } catch (t) {
                        console.error("[Connect] Error during address request", t), e.onCancel ? .()
                    }
                };
            t.getAddress = o, n(r(63305), t)
        },
        63305: function(e, t) {
            "use strict";
            var r;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.AddressPurpose = void 0, (r = t.AddressPurpose || (t.AddressPurpose = {})).Ordinals = "ordinals", r.Payment = "payment"
        },
        60361: function(e, t, r) {
            "use strict";
            var i = this && this.__createBinding || (Object.create ? function(e, t, r, i) {
                    void 0 === i && (i = r);
                    var n = Object.getOwnPropertyDescriptor(t, r);
                    (!n || ("get" in n ? !t.__esModule : n.writable || n.configurable)) && (n = {
                        enumerable: !0,
                        get: function() {
                            return t[r]
                        }
                    }), Object.defineProperty(e, i, n)
                } : function(e, t, r, i) {
                    void 0 === i && (i = r), e[i] = t[r]
                }),
                n = this && this.__exportStar || function(e, t) {
                    for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || i(t, e, r)
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.callWalletPopup = void 0;
            let f = r(23139),
                a = r(41365),
                o = async e => {
                    let t = await (0, a.getProviderOrThrow)(e.getProvider),
                        {
                            method: r
                        } = e.payload;
                    if (!r) throw Error("A wallet method is required");
                    let i = (0, f.createUnsecuredToken)(e.payload);
                    try {
                        let r = await t.call(i);
                        e.onFinish ? .(r)
                    } catch (t) {
                        console.error("[Connect] Error during call request", t), e.onCancel ? .()
                    }
                };
            t.callWalletPopup = o, n(r(96106), t)
        },
        96106: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        16667: function(e, t, r) {
            "use strict";
            var i = this && this.__createBinding || (Object.create ? function(e, t, r, i) {
                    void 0 === i && (i = r);
                    var n = Object.getOwnPropertyDescriptor(t, r);
                    (!n || ("get" in n ? !t.__esModule : n.writable || n.configurable)) && (n = {
                        enumerable: !0,
                        get: function() {
                            return t[r]
                        }
                    }), Object.defineProperty(e, i, n)
                } : function(e, t, r, i) {
                    void 0 === i && (i = r), e[i] = t[r]
                }),
                n = this && this.__exportStar || function(e, t) {
                    for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || i(t, e, r)
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getCapabilities = void 0;
            let f = r(23139),
                a = r(41365),
                o = (e, t) => {
                    let r = r => !!(e[r] && (!t || t.has(r))),
                        i = {
                            call: r("call"),
                            connect: r("connect"),
                            signMessage: r("signMessage"),
                            signTransaction: r("signTransaction"),
                            sendBtcTransaction: r("sendBtcTransaction"),
                            createInscription: r("createInscription")
                        };
                    return Object.entries(i).reduce((e, [t, r]) => r ? [...e, t] : e, [])
                },
                s = async e => {
                    let t = await (0, a.getProviderOrThrow)(e.getProvider),
                        r = (0, f.createUnsecuredToken)(e.payload);
                    if (t.getCapabilities) try {
                        let i = await t.getCapabilities(r);
                        e.onFinish ? .(o(t, new Set(i)))
                    } catch (e) {
                        console.error("[Connect] Error during capabilities request", e)
                    }
                    try {
                        let r = o(t);
                        e.onFinish ? .(r)
                    } catch (t) {
                        console.error("[Connect] Error during capabilities request", t), e.onCancel ? .()
                    }
                };
            t.getCapabilities = s, n(r(78386), t)
        },
        78386: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        83706: function(e, t, r) {
            "use strict";
            var i = this && this.__createBinding || (Object.create ? function(e, t, r, i) {
                    void 0 === i && (i = r);
                    var n = Object.getOwnPropertyDescriptor(t, r);
                    (!n || ("get" in n ? !t.__esModule : n.writable || n.configurable)) && (n = {
                        enumerable: !0,
                        get: function() {
                            return t[r]
                        }
                    }), Object.defineProperty(e, i, n)
                } : function(e, t, r, i) {
                    void 0 === i && (i = r), e[i] = t[r]
                }),
                n = this && this.__exportStar || function(e, t) {
                    for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || i(t, e, r)
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), n(r(45883), t), n(r(60361), t), n(r(16667), t), n(r(72073), t), n(r(2971), t), n(r(41365), t), n(r(84118), t), n(r(1905), t)
        },
        90551: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createInscription = t.validateInscriptionPayload = void 0;
            let i = r(23139),
                n = r(41365);
            t.validateInscriptionPayload = e => {
                let {
                    contentType: t,
                    content: r,
                    payloadType: i,
                    network: n,
                    appFeeAddress: f,
                    appFee: a
                } = e;
                if (!/^[a-z]+\/[a-z0-9\-\.\+]+(?=;.*|$)/.test(t)) throw Error("Invalid content type detected");
                if (!r || 0 === r.length) throw Error("Empty content not allowed");
                if (!i || "BASE_64" !== i && "PLAIN_TEXT" !== i) throw Error("Empty invalid payloadType specified");
                if (r.length > ("Mainnet" === n.type ? 4e5 : 6e4)) throw Error("Content too large");
                if ((f ? .length ? ? 0) > 0 && (a ? ? 0) <= 0) throw Error("Invalid combination of app fee address and fee provided")
            };
            let f = async e => {
                let {
                    getProvider: r
                } = e, f = await (0, n.getProviderOrThrow)(r);
                (0, t.validateInscriptionPayload)(e.payload);
                try {
                    let t = (0, i.createUnsecuredToken)(e.payload),
                        r = await f.createInscription(t);
                    e.onFinish ? .(r)
                } catch (t) {
                    console.error("[Connect] Error during create inscription", t), e.onCancel ? .()
                }
            };
            t.createInscription = f
        },
        72073: function(e, t, r) {
            "use strict";
            var i = this && this.__createBinding || (Object.create ? function(e, t, r, i) {
                    void 0 === i && (i = r);
                    var n = Object.getOwnPropertyDescriptor(t, r);
                    (!n || ("get" in n ? !t.__esModule : n.writable || n.configurable)) && (n = {
                        enumerable: !0,
                        get: function() {
                            return t[r]
                        }
                    }), Object.defineProperty(e, i, n)
                } : function(e, t, r, i) {
                    void 0 === i && (i = r), e[i] = t[r]
                }),
                n = this && this.__exportStar || function(e, t) {
                    for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || i(t, e, r)
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), n(r(90551), t), n(r(89639), t)
        },
        89639: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        2971: function(e, t, r) {
            "use strict";
            var i = this && this.__createBinding || (Object.create ? function(e, t, r, i) {
                    void 0 === i && (i = r);
                    var n = Object.getOwnPropertyDescriptor(t, r);
                    (!n || ("get" in n ? !t.__esModule : n.writable || n.configurable)) && (n = {
                        enumerable: !0,
                        get: function() {
                            return t[r]
                        }
                    }), Object.defineProperty(e, i, n)
                } : function(e, t, r, i) {
                    void 0 === i && (i = r), e[i] = t[r]
                }),
                n = this && this.__exportStar || function(e, t) {
                    for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || i(t, e, r)
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.signMessage = void 0;
            let f = r(23139),
                a = r(41365),
                o = async e => {
                    let t = await (0, a.getProviderOrThrow)(e.getProvider),
                        {
                            address: r,
                            message: i
                        } = e.payload;
                    if (!r) throw Error("An address is required to sign a message");
                    if (!i) throw Error("A message to be signed is required");
                    try {
                        let r = (0, f.createUnsecuredToken)(e.payload),
                            i = await t.signMessage(r);
                        e.onFinish ? .(i)
                    } catch (t) {
                        console.error("[Connect] Error during sign message request", t), e.onCancel ? .()
                    }
                };
            t.signMessage = o, n(r(17842), t)
        },
        17842: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        41365: function(e, t, r) {
            "use strict";
            var i = this && this.__createBinding || (Object.create ? function(e, t, r, i) {
                    void 0 === i && (i = r);
                    var n = Object.getOwnPropertyDescriptor(t, r);
                    (!n || ("get" in n ? !t.__esModule : n.writable || n.configurable)) && (n = {
                        enumerable: !0,
                        get: function() {
                            return t[r]
                        }
                    }), Object.defineProperty(e, i, n)
                } : function(e, t, r, i) {
                    void 0 === i && (i = r), e[i] = t[r]
                }),
                n = this && this.__exportStar || function(e, t) {
                    for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || i(t, e, r)
                };
            async function f(e) {
                let t = await e ? .() || window.BitcoinProvider;
                if (!t) throw Error("No Bitcoin wallet installed");
                return t
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getProviderOrThrow = void 0, t.getProviderOrThrow = f, n(r(83700), t)
        },
        83700: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        84118: function(e, t, r) {
            "use strict";
            var i = this && this.__createBinding || (Object.create ? function(e, t, r, i) {
                    void 0 === i && (i = r);
                    var n = Object.getOwnPropertyDescriptor(t, r);
                    (!n || ("get" in n ? !t.__esModule : n.writable || n.configurable)) && (n = {
                        enumerable: !0,
                        get: function() {
                            return t[r]
                        }
                    }), Object.defineProperty(e, i, n)
                } : function(e, t, r, i) {
                    void 0 === i && (i = r), e[i] = t[r]
                }),
                n = this && this.__exportStar || function(e, t) {
                    for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || i(t, e, r)
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), n(r(8828), t), n(r(70740), t), n(r(54307), t)
        },
        8828: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.sendBtcTransaction = void 0;
            let i = r(23139),
                n = r(41365),
                f = e => e.map(e => {
                    let {
                        address: t,
                        amountSats: r
                    } = e;
                    return {
                        address: t,
                        amountSats: r.toString()
                    }
                }),
                a = async e => {
                    let t = await (0, n.getProviderOrThrow)(e.getProvider),
                        {
                            recipients: r,
                            senderAddress: a,
                            network: o,
                            message: s
                        } = e.payload;
                    if (!r || 0 === r.length) throw Error("At least one recipient is required");
                    if (r.some(e => "string" != typeof e.address || "bigint" != typeof e.amountSats)) throw Error("Incorrect recipient format");
                    if (!a) throw Error("The sender address is required");
                    try {
                        let n = f(r),
                            d = (0, i.createUnsecuredToken)({
                                network: o,
                                senderAddress: a,
                                message: s,
                                recipients: n
                            }),
                            c = await t.sendBtcTransaction(d);
                        e.onFinish ? .(c)
                    } catch (t) {
                        console.error("[Connect] Error during send BTC transaction request", t), e.onCancel ? .()
                    }
                };
            t.sendBtcTransaction = a
        },
        70740: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.signTransaction = void 0;
            let i = r(23139),
                n = r(41365),
                f = async e => {
                    let t = await (0, n.getProviderOrThrow)(e.getProvider),
                        {
                            psbtBase64: r,
                            inputsToSign: f
                        } = e.payload;
                    if (!r) throw Error("A value for psbtBase64 representing the tx hash is required");
                    if (!f) throw Error("An array specifying the inputs to be signed by the wallet is required");
                    try {
                        let r = (0, i.createUnsecuredToken)(e.payload),
                            n = await t.signTransaction(r);
                        e.onFinish ? .(n)
                    } catch (t) {
                        console.error("[Connect] Error during sign transaction request", t), e.onCancel ? .()
                    }
                };
            t.signTransaction = f
        },
        54307: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        1905: function(e, t) {
            "use strict";
            var r;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BitcoinNetworkType = void 0, (r = t.BitcoinNetworkType || (t.BitcoinNetworkType = {})).Mainnet = "Mainnet", r.Testnet = "Testnet"
        },
        21485: function(e, t, r) {
            "use strict";
            r.d(t, {
                b: function() {
                    return n
                }
            });
            var i = r(95950);
            class n extends i.G {
                constructor({
                    address: e
                }) {
                    super(`Address "${e}" is invalid.`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidAddressError"
                    })
                }
            }
        },
        95950: function(e, t, r) {
            "use strict";
            r.d(t, {
                G: function() {
                    return n
                }
            });
            var i = r(66291);
            class n extends Error {
                constructor(e, t = {}) {
                    super(), Object.defineProperty(this, "details", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "docsPath", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "metaMessages", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "shortMessage", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ViemError"
                    }), Object.defineProperty(this, "version", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: (0, i.bo)()
                    });
                    let r = t.cause instanceof n ? t.cause.details : t.cause ? .message ? t.cause.message : t.details,
                        f = t.cause instanceof n && t.cause.docsPath || t.docsPath;
                    this.message = [e || "An error occurred.", "", ...t.metaMessages ? [...t.metaMessages, ""] : [], ...f ? [`Docs: https://viem.sh${f}.html${t.docsSlug?`#${t.docsSlug}`:""}`] : [], ...r ? [`Details: ${r}`] : [], `Version: ${this.version}`].join("\n"), t.cause && (this.cause = t.cause), this.details = r, this.docsPath = f, this.metaMessages = t.metaMessages, this.shortMessage = e
                }
                walk(e) {
                    return function e(t, r) {
                        return r ? .(t) ? t : t && "object" == typeof t && "cause" in t ? e(t.cause, r) : r ? null : t
                    }(this, e)
                }
            }
        },
        741: function(e, t, r) {
            "use strict";
            r.d(t, {
                $: function() {
                    return f
                },
                m: function() {
                    return n
                }
            });
            var i = r(95950);
            class n extends i.G {
                constructor({
                    offset: e,
                    position: t,
                    size: r
                }) {
                    super(`Slice ${"start"===t?"starting":"ending"} at offset "${e}" is out-of-bounds (size: ${r}).`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "SliceOffsetOutOfBoundsError"
                    })
                }
            }
            class f extends i.G {
                constructor({
                    size: e,
                    targetSize: t,
                    type: r
                }) {
                    super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (${e}) exceeds padding size (${t}).`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "SizeExceedsPaddingSizeError"
                    })
                }
            }
        },
        86714: function(e, t, r) {
            "use strict";
            r.d(t, {
                Cd: function() {
                    return f
                },
                J5: function() {
                    return n
                },
                M6: function() {
                    return a
                }
            });
            var i = r(95950);
            class n extends i.G {
                constructor({
                    max: e,
                    min: t,
                    signed: r,
                    size: i,
                    value: n
                }) {
                    super(`Number "${n}" is not in safe ${i?`${8*i}-bit ${r?"signed":"unsigned"} `:""}integer range ${e?`(${t} to ${e})`:`(above ${t})`}`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "IntegerOutOfRangeError"
                    })
                }
            }
            class f extends i.G {
                constructor(e) {
                    super(`Hex value "${e}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidHexBooleanError"
                    })
                }
            }
            class a extends i.G {
                constructor({
                    givenSize: e,
                    maxSize: t
                }) {
                    super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "SizeOverflowError"
                    })
                }
            }
        },
        66291: function(e, t, r) {
            "use strict";
            r.d(t, {
                CR: function() {
                    return i
                },
                Gr: function() {
                    return n
                },
                bo: function() {
                    return f
                }
            });
            let i = e => e,
                n = e => e,
                f = () => "viem@1.19.9"
        },
        39803: function(e, t, r) {
            "use strict";
            r.d(t, {
                K: function() {
                    return s
                },
                x: function() {
                    return o
                }
            });
            var i = r(21485),
                n = r(56728),
                f = r(55852),
                a = r(87364);

            function o(e, t) {
                let r = t ? `${t}${e.toLowerCase()}` : e.substring(2).toLowerCase(),
                    i = (0, f.w)((0, n.qX)(r), "bytes"),
                    a = (t ? r.substring(`${t}0x`.length) : r).split("");
                for (let e = 0; e < 40; e += 2) i[e >> 1] >> 4 >= 8 && a[e] && (a[e] = a[e].toUpperCase()), (15 & i[e >> 1]) >= 8 && a[e + 1] && (a[e + 1] = a[e + 1].toUpperCase());
                return `0x${a.join("")}`
            }

            function s(e, t) {
                if (!(0, a.U)(e)) throw new i.b({
                    address: e
                });
                return o(e, t)
            }
        },
        45008: function(e, t, r) {
            "use strict";

            function i(e, {
                strict: t = !0
            } = {}) {
                return !!e && "string" == typeof e && (t ? /^0x[0-9a-fA-F]*$/.test(e) : e.startsWith("0x"))
            }
            r.d(t, {
                v: function() {
                    return i
                }
            })
        },
        99725: function(e, t, r) {
            "use strict";
            r.d(t, {
                gc: function() {
                    return f
                },
                vk: function() {
                    return n
                }
            });
            var i = r(741);

            function n(e, {
                dir: t,
                size: r = 32
            } = {}) {
                return "string" == typeof e ? f(e, {
                    dir: t,
                    size: r
                }) : function(e, {
                    dir: t,
                    size: r = 32
                } = {}) {
                    if (null === r) return e;
                    if (e.length > r) throw new i.$({
                        size: e.length,
                        targetSize: r,
                        type: "bytes"
                    });
                    let n = new Uint8Array(r);
                    for (let i = 0; i < r; i++) {
                        let f = "right" === t;
                        n[f ? i : r - i - 1] = e[f ? i : e.length - i - 1]
                    }
                    return n
                }(e, {
                    dir: t,
                    size: r
                })
            }

            function f(e, {
                dir: t,
                size: r = 32
            } = {}) {
                if (null === r) return e;
                let n = e.replace("0x", "");
                if (n.length > 2 * r) throw new i.$({
                    size: Math.ceil(n.length / 2),
                    targetSize: r,
                    type: "hex"
                });
                return `0x${n["right"===t?"padEnd":"padStart"](2*r,"0")}`
            }
        },
        39868: function(e, t, r) {
            "use strict";
            r.d(t, {
                d: function() {
                    return n
                }
            });
            var i = r(45008);

            function n(e) {
                return (0, i.v)(e, {
                    strict: !1
                }) ? Math.ceil((e.length - 2) / 2) : e.length
            }
        },
        94973: function(e, t, r) {
            "use strict";

            function i(e, {
                dir: t = "left"
            } = {}) {
                let r = "string" == typeof e ? e.replace("0x", "") : e,
                    i = 0;
                for (let e = 0; e < r.length - 1 && "0" === r["left" === t ? e : r.length - e - 1].toString(); e++) i++;
                return (r = "left" === t ? r.slice(i) : r.slice(0, r.length - i), "string" == typeof e) ? (1 === r.length && "right" === t && (r = `${r}0`), `0x${r.length%2==1?`0${r}`:r}`) : r
            }
            r.d(t, {
                f: function() {
                    return i
                }
            })
        },
        30838: function(e, t, r) {
            "use strict";
            r.d(t, {
                XA: function() {
                    return d
                },
                Yf: function() {
                    return o
                },
                ly: function() {
                    return c
                },
                rR: function() {
                    return h
                },
                y_: function() {
                    return s
                }
            });
            var i = r(86714),
                n = r(39868),
                f = r(94973),
                a = r(56728);

            function o(e, {
                size: t
            }) {
                if ((0, n.d)(e) > t) throw new i.M6({
                    givenSize: (0, n.d)(e),
                    maxSize: t
                })
            }

            function s(e, t = {}) {
                let {
                    signed: r
                } = t;
                t.size && o(e, {
                    size: t.size
                });
                let i = BigInt(e);
                if (!r) return i;
                let n = (e.length - 2) / 2,
                    f = (1 n << 8 n * BigInt(n) - 1 n) - 1 n;
                return i <= f ? i : i - BigInt(`0x${"f".padStart(2*n,"f")}`) - 1 n
            }

            function d(e, t = {}) {
                let r = e;
                if (t.size && (o(r, {
                        size: t.size
                    }), r = (0, f.f)(r)), "0x00" === (0, f.f)(r)) return !1;
                if ("0x01" === (0, f.f)(r)) return !0;
                throw new i.Cd(r)
            }

            function c(e, t = {}) {
                return Number(s(e, t))
            }

            function h(e, t = {}) {
                let r = (0, a.nr)(e);
                return t.size && (o(r, {
                    size: t.size
                }), r = (0, f.f)(r, {
                    dir: "right"
                })), new TextDecoder().decode(r)
            }
        },
        56728: function(e, t, r) {
            "use strict";
            r.d(t, {
                O0: function() {
                    return d
                },
                nr: function() {
                    return u
                },
                qX: function() {
                    return l
                }
            });
            var i = r(95950),
                n = r(45008),
                f = r(99725),
                a = r(30838),
                o = r(21693);
            let s = new TextEncoder;

            function d(e, t = {}) {
                return "number" == typeof e || "bigint" == typeof e ? function(e, t) {
                    let r = (0, o.eC)(e, t);
                    return u(r)
                }(e, t) : "boolean" == typeof e ? function(e, t = {}) {
                    let r = new Uint8Array(1);
                    return (r[0] = Number(e), "number" == typeof t.size) ? ((0, a.Yf)(r, {
                        size: t.size
                    }), (0, f.vk)(r, {
                        size: t.size
                    })) : r
                }(e, t) : (0, n.v)(e) ? u(e, t) : l(e, t)
            }
            let c = {
                zero: 48,
                nine: 57,
                A: 65,
                F: 70,
                a: 97,
                f: 102
            };

            function h(e) {
                return e >= c.zero && e <= c.nine ? e - c.zero : e >= c.A && e <= c.F ? e - (c.A - 10) : e >= c.a && e <= c.f ? e - (c.a - 10) : void 0
            }

            function u(e, t = {}) {
                let r = e;
                t.size && ((0, a.Yf)(r, {
                    size: t.size
                }), r = (0, f.vk)(r, {
                    dir: "right",
                    size: t.size
                }));
                let n = r.slice(2);
                n.length % 2 && (n = `0${n}`);
                let o = n.length / 2,
                    s = new Uint8Array(o);
                for (let e = 0, t = 0; e < o; e++) {
                    let r = h(n.charCodeAt(t++)),
                        f = h(n.charCodeAt(t++));
                    if (void 0 === r || void 0 === f) throw new i.G(`Invalid byte sequence ("${n[t-2]}${n[t-1]}" in "${n}").`);
                    s[e] = 16 * r + f
                }
                return s
            }

            function l(e, t = {}) {
                let r = s.encode(e);
                return "number" == typeof t.size ? ((0, a.Yf)(r, {
                    size: t.size
                }), (0, f.vk)(r, {
                    dir: "right",
                    size: t.size
                })) : r
            }
        },
        21693: function(e, t, r) {
            "use strict";
            r.d(t, {
                $G: function() {
                    return u
                },
                C4: function() {
                    return s
                },
                NC: function() {
                    return o
                },
                ci: function() {
                    return d
                },
                eC: function() {
                    return c
                }
            });
            var i = r(86714),
                n = r(99725),
                f = r(30838);
            let a = Array.from({
                length: 256
            }, (e, t) => t.toString(16).padStart(2, "0"));

            function o(e, t = {}) {
                return "number" == typeof e || "bigint" == typeof e ? c(e, t) : "string" == typeof e ? u(e, t) : "boolean" == typeof e ? s(e, t) : d(e, t)
            }

            function s(e, t = {}) {
                let r = `0x${Number(e)}`;
                return "number" == typeof t.size ? ((0, f.Yf)(r, {
                    size: t.size
                }), (0, n.vk)(r, {
                    size: t.size
                })) : r
            }

            function d(e, t = {}) {
                let r = "";
                for (let t = 0; t < e.length; t++) r += a[e[t]];
                let i = `0x${r}`;
                return "number" == typeof t.size ? ((0, f.Yf)(i, {
                    size: t.size
                }), (0, n.vk)(i, {
                    dir: "right",
                    size: t.size
                })) : i
            }

            function c(e, t = {}) {
                let r;
                let {
                    signed: f,
                    size: a
                } = t, o = BigInt(e);
                a ? r = f ? (1 n << 8 n * BigInt(a) - 1 n) - 1 n : 2 n ** (8 n * BigInt(a)) - 1 n : "number" == typeof e && (r = BigInt(Number.MAX_SAFE_INTEGER));
                let s = "bigint" == typeof r && f ? -r - 1 n : 0;
                if (r && o > r || o < s) {
                    let t = "bigint" == typeof e ? "n" : "";
                    throw new i.J5({
                        max: r ? `${r}${t}` : void 0,
                        min: `${s}${t}`,
                        signed: f,
                        size: a,
                        value: `${e}${t}`
                    })
                }
                let d = `0x${(f&&o<0?(1n<<BigInt(8*a))+BigInt(o):o).toString(16)}`;
                return a ? (0, n.vk)(d, {
                    size: a
                }) : d
            }
            let h = new TextEncoder;

            function u(e, t = {}) {
                let r = h.encode(e);
                return d(r, t)
            }
        },
        55852: function(e, t, r) {
            "use strict";

            function i(e) {
                if (!Number.isSafeInteger(e) || e < 0) throw Error(`Wrong positive integer: ${e}`)
            }

            function n(e, ...t) {
                if (!(e instanceof Uint8Array)) throw Error("Expected Uint8Array");
                if (t.length > 0 && !t.includes(e.length)) throw Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`)
            }

            function f(e, t = !0) {
                if (e.destroyed) throw Error("Hash instance has been destroyed");
                if (t && e.finished) throw Error("Hash#digest() has already been called")
            }
            r.d(t, {
                w: function() {
                    return j
                }
            });
            let a = BigInt(4294967296 - 1),
                o = BigInt(32),
                s = (e, t, r) => e << r | t >>> 32 - r,
                d = (e, t, r) => t << r | e >>> 32 - r,
                c = (e, t, r) => t << r - 32 | e >>> 64 - r,
                h = (e, t, r) => e << r - 32 | t >>> 64 - r,
                u = e => e instanceof Uint8Array,
                l = e => new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)),
                b = 68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0];
            if (!b) throw Error("Non little-endian hardware is not supported");

            function p(e) {
                if ("string" == typeof e && (e = function(e) {
                        if ("string" != typeof e) throw Error(`utf8ToBytes expected string, got ${typeof e}`);
                        return new Uint8Array(new TextEncoder().encode(e))
                    }(e)), !u(e)) throw Error(`expected Uint8Array, got ${typeof e}`);
                return e
            }
            class y {
                clone() {
                    return this._cloneInto()
                }
            }
            let [m, g, v] = [
                [],
                [],
                []
            ], w = BigInt(0), M = BigInt(1), S = BigInt(2), _ = BigInt(7), x = BigInt(256), A = BigInt(113);
            for (let e = 0, t = M, r = 1, i = 0; e < 24; e++) {
                [r, i] = [i, (2 * r + 3 * i) % 5], m.push(2 * (5 * i + r)), g.push((e + 1) * (e + 2) / 2 % 64);
                let n = w;
                for (let e = 0; e < 7; e++)(t = (t << M ^ (t >> _) * A) % x) & S && (n ^= M << (M << BigInt(e)) - M);
                v.push(n)
            }
            let [E, I] = function(e, t = !1) {
                let r = new Uint32Array(e.length),
                    i = new Uint32Array(e.length);
                for (let n = 0; n < e.length; n++) {
                    let {
                        h: f,
                        l: s
                    } = function(e, t = !1) {
                        return t ? {
                            h: Number(e & a),
                            l: Number(e >> o & a)
                        } : {
                            h: 0 | Number(e >> o & a),
                            l: 0 | Number(e & a)
                        }
                    }(e[n], t);
                    [r[n], i[n]] = [f, s]
                }
                return [r, i]
            }(v, !0), P = (e, t, r) => r > 32 ? c(e, t, r) : s(e, t, r), z = (e, t, r) => r > 32 ? h(e, t, r) : d(e, t, r);
            class O extends y {
                constructor(e, t, r, n = !1, f = 24) {
                    if (super(), this.blockLen = e, this.suffix = t, this.outputLen = r, this.enableXOF = n, this.rounds = f, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, i(r), 0 >= this.blockLen || this.blockLen >= 200) throw Error("Sha3 supports only keccak-f1600 function");
                    this.state = new Uint8Array(200), this.state32 = l(this.state)
                }
                keccak() {
                    ! function(e, t = 24) {
                        let r = new Uint32Array(10);
                        for (let i = 24 - t; i < 24; i++) {
                            for (let t = 0; t < 10; t++) r[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
                            for (let t = 0; t < 10; t += 2) {
                                let i = (t + 8) % 10,
                                    n = (t + 2) % 10,
                                    f = r[n],
                                    a = r[n + 1],
                                    o = P(f, a, 1) ^ r[i],
                                    s = z(f, a, 1) ^ r[i + 1];
                                for (let r = 0; r < 50; r += 10) e[t + r] ^= o, e[t + r + 1] ^= s
                            }
                            let t = e[2],
                                n = e[3];
                            for (let r = 0; r < 24; r++) {
                                let i = g[r],
                                    f = P(t, n, i),
                                    a = z(t, n, i),
                                    o = m[r];
                                t = e[o], n = e[o + 1], e[o] = f, e[o + 1] = a
                            }
                            for (let t = 0; t < 50; t += 10) {
                                for (let i = 0; i < 10; i++) r[i] = e[t + i];
                                for (let i = 0; i < 10; i++) e[t + i] ^= ~r[(i + 2) % 10] & r[(i + 4) % 10]
                            }
                            e[0] ^= E[i], e[1] ^= I[i]
                        }
                        r.fill(0)
                    }(this.state32, this.rounds), this.posOut = 0, this.pos = 0
                }
                update(e) {
                    f(this);
                    let {
                        blockLen: t,
                        state: r
                    } = this;
                    e = p(e);
                    let i = e.length;
                    for (let n = 0; n < i;) {
                        let f = Math.min(t - this.pos, i - n);
                        for (let t = 0; t < f; t++) r[this.pos++] ^= e[n++];
                        this.pos === t && this.keccak()
                    }
                    return this
                }
                finish() {
                    if (this.finished) return;
                    this.finished = !0;
                    let {
                        state: e,
                        suffix: t,
                        pos: r,
                        blockLen: i
                    } = this;
                    e[r] ^= t, (128 & t) != 0 && r === i - 1 && this.keccak(), e[i - 1] ^= 128, this.keccak()
                }
                writeInto(e) {
                    f(this, !1), n(e), this.finish();
                    let t = this.state,
                        {
                            blockLen: r
                        } = this;
                    for (let i = 0, n = e.length; i < n;) {
                        this.posOut >= r && this.keccak();
                        let f = Math.min(r - this.posOut, n - i);
                        e.set(t.subarray(this.posOut, this.posOut + f), i), this.posOut += f, i += f
                    }
                    return e
                }
                xofInto(e) {
                    if (!this.enableXOF) throw Error("XOF is not possible for this instance");
                    return this.writeInto(e)
                }
                xof(e) {
                    return i(e), this.xofInto(new Uint8Array(e))
                }
                digestInto(e) {
                    if (! function(e, t) {
                            n(e);
                            let r = t.outputLen;
                            if (e.length < r) throw Error(`digestInto() expects output buffer of length at least ${r}`)
                        }(e, this), this.finished) throw Error("digest() was already called");
                    return this.writeInto(e), this.destroy(), e
                }
                digest() {
                    return this.digestInto(new Uint8Array(this.outputLen))
                }
                destroy() {
                    this.destroyed = !0, this.state.fill(0)
                }
                _cloneInto(e) {
                    let {
                        blockLen: t,
                        suffix: r,
                        outputLen: i,
                        rounds: n,
                        enableXOF: f
                    } = this;
                    return e || (e = new O(t, r, i, f, n)), e.state32.set(this.state32), e.pos = this.pos, e.posOut = this.posOut, e.finished = this.finished, e.rounds = n, e.suffix = r, e.outputLen = i, e.enableXOF = f, e.destroyed = this.destroyed, e
                }
            }
            let B = function(e) {
                let t = t => e().update(p(t)).digest(),
                    r = e();
                return t.outputLen = r.outputLen, t.blockLen = r.blockLen, t.create = () => e(), t
            }(() => new O(136, 1, 32));
            var k = r(45008),
                R = r(56728),
                q = r(21693);

            function j(e, t) {
                let r = B((0, k.v)(e, {
                    strict: !1
                }) ? (0, R.O0)(e) : e);
                return "bytes" === (t || "hex") ? r : (0, q.NC)(r)
            }
        },
        16775: function(e, t, r) {
            "use strict";

            function i(e, t) {
                let r = e.toString(),
                    i = r.startsWith("-");
                i && (r = r.slice(1));
                let [n, f] = [(r = r.padStart(t, "0")).slice(0, r.length - t), r.slice(r.length - t)];
                return f = f.replace(/(0+)$/, ""), `${i?"-":""}${n||"0"}${f?`.${f}`:""}`
            }
            r.d(t, {
                b: function() {
                    return i
                }
            })
        },
        58274: function(e) {
            "use strict";
            e.exports = {
                i8: "6.5.4"
            }
        }
    }
]);