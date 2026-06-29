(function() {
    const l = document.createElement("link").relList;
    if (l && l.supports && l.supports("modulepreload")) return;
    for (const c of document.querySelectorAll('link[rel="modulepreload"]')) o(c);
    new MutationObserver(c => {
        for (const h of c)
            if (h.type === "childList")
                for (const d of h.addedNodes) d.tagName === "LINK" && d.rel === "modulepreload" && o(d)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function r(c) {
        const h = {};
        return c.integrity && (h.integrity = c.integrity), c.referrerPolicy && (h.referrerPolicy = c.referrerPolicy), c.crossOrigin === "use-credentials" ? h.credentials = "include" : c.crossOrigin === "anonymous" ? h.credentials = "omit" : h.credentials = "same-origin", h
    }

    function o(c) {
        if (c.ep) return;
        c.ep = !0;
        const h = r(c);
        fetch(c.href, h)
    }
})();
var zu = {
        exports: {}
    },
    ul = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var a0;

function Z1() {
    if (a0) return ul;
    a0 = 1;
    var a = Symbol.for("react.transitional.element"),
        l = Symbol.for("react.fragment");

    function r(o, c, h) {
        var d = null;
        if (h !== void 0 && (d = "" + h), c.key !== void 0 && (d = "" + c.key), "key" in c) {
            h = {};
            for (var p in c) p !== "key" && (h[p] = c[p])
        } else h = c;
        return c = h.ref, {
            $$typeof: a,
            type: o,
            key: d,
            ref: c !== void 0 ? c : null,
            props: h
        }
    }
    return ul.Fragment = l, ul.jsx = r, ul.jsxs = r, ul
}
var i0;

function Q1() {
    return i0 || (i0 = 1, zu.exports = Z1()), zu.exports
}
var y = Q1(),
    _u = {
        exports: {}
    },
    ot = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l0;

function J1() {
    if (l0) return ot;
    l0 = 1;
    var a = Symbol.for("react.transitional.element"),
        l = Symbol.for("react.portal"),
        r = Symbol.for("react.fragment"),
        o = Symbol.for("react.strict_mode"),
        c = Symbol.for("react.profiler"),
        h = Symbol.for("react.consumer"),
        d = Symbol.for("react.context"),
        p = Symbol.for("react.forward_ref"),
        v = Symbol.for("react.suspense"),
        m = Symbol.for("react.memo"),
        x = Symbol.for("react.lazy"),
        b = Symbol.for("react.activity"),
        S = Symbol.iterator;

    function j(E) {
        return E === null || typeof E != "object" ? null : (E = S && E[S] || E["@@iterator"], typeof E == "function" ? E : null)
    }
    var M = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        z = Object.assign,
        B = {};

    function k(E, U, Q) {
        this.props = E, this.context = U, this.refs = B, this.updater = Q || M
    }
    k.prototype.isReactComponent = {}, k.prototype.setState = function(E, U) {
        if (typeof E != "object" && typeof E != "function" && E != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, E, U, "setState")
    }, k.prototype.forceUpdate = function(E) {
        this.updater.enqueueForceUpdate(this, E, "forceUpdate")
    };

    function G() {}
    G.prototype = k.prototype;

    function H(E, U, Q) {
        this.props = E, this.context = U, this.refs = B, this.updater = Q || M
    }
    var q = H.prototype = new G;
    q.constructor = H, z(q, k.prototype), q.isPureReactComponent = !0;
    var $ = Array.isArray;

    function at() {}
    var Z = {
            H: null,
            A: null,
            T: null,
            S: null
        },
        J = Object.prototype.hasOwnProperty;

    function rt(E, U, Q) {
        var et = Q.ref;
        return {
            $$typeof: a,
            type: E,
            key: U,
            ref: et !== void 0 ? et : null,
            props: Q
        }
    }

    function Y(E, U) {
        return rt(E.type, U, E.props)
    }

    function I(E) {
        return typeof E == "object" && E !== null && E.$$typeof === a
    }

    function tt(E) {
        var U = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + E.replace(/[=:]/g, function(Q) {
            return U[Q]
        })
    }
    var st = /\/+/g;

    function ut(E, U) {
        return typeof E == "object" && E !== null && E.key != null ? tt("" + E.key) : U.toString(36)
    }

    function Mt(E) {
        switch (E.status) {
            case "fulfilled":
                return E.value;
            case "rejected":
                throw E.reason;
            default:
                switch (typeof E.status == "string" ? E.then(at, at) : (E.status = "pending", E.then(function(U) {
                        E.status === "pending" && (E.status = "fulfilled", E.value = U)
                    }, function(U) {
                        E.status === "pending" && (E.status = "rejected", E.reason = U)
                    })), E.status) {
                    case "fulfilled":
                        return E.value;
                    case "rejected":
                        throw E.reason
                }
        }
        throw E
    }

    function O(E, U, Q, et, ct) {
        var mt = typeof E;
        (mt === "undefined" || mt === "boolean") && (E = null);
        var Et = !1;
        if (E === null) Et = !0;
        else switch (mt) {
            case "bigint":
            case "string":
            case "number":
                Et = !0;
                break;
            case "object":
                switch (E.$$typeof) {
                    case a:
                    case l:
                        Et = !0;
                        break;
                    case x:
                        return Et = E._init, O(Et(E._payload), U, Q, et, ct)
                }
        }
        if (Et) return ct = ct(E), Et = et === "" ? "." + ut(E, 0) : et, $(ct) ? (Q = "", Et != null && (Q = Et.replace(st, "$&/") + "/"), O(ct, U, Q, "", function(yi) {
            return yi
        })) : ct != null && (I(ct) && (ct = Y(ct, Q + (ct.key == null || E && E.key === ct.key ? "" : ("" + ct.key).replace(st, "$&/") + "/") + Et)), U.push(ct)), 1;
        Et = 0;
        var oe = et === "" ? "." : et + ":";
        if ($(E))
            for (var Yt = 0; Yt < E.length; Yt++) et = E[Yt], mt = oe + ut(et, Yt), Et += O(et, U, Q, mt, ct);
        else if (Yt = j(E), typeof Yt == "function")
            for (E = Yt.call(E), Yt = 0; !(et = E.next()).done;) et = et.value, mt = oe + ut(et, Yt++), Et += O(et, U, Q, mt, ct);
        else if (mt === "object") {
            if (typeof E.then == "function") return O(Mt(E), U, Q, et, ct);
            throw U = String(E), Error("Objects are not valid as a React child (found: " + (U === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : U) + "). If you meant to render a collection of children, use an array instead.")
        }
        return Et
    }

    function K(E, U, Q) {
        if (E == null) return E;
        var et = [],
            ct = 0;
        return O(E, et, "", "", function(mt) {
            return U.call(Q, mt, ct++)
        }), et
    }

    function F(E) {
        if (E._status === -1) {
            var U = E._result;
            U = U(), U.then(function(Q) {
                (E._status === 0 || E._status === -1) && (E._status = 1, E._result = Q)
            }, function(Q) {
                (E._status === 0 || E._status === -1) && (E._status = 2, E._result = Q)
            }), E._status === -1 && (E._status = 0, E._result = U)
        }
        if (E._status === 1) return E._result.default;
        throw E._result
    }
    var dt = typeof reportError == "function" ? reportError : function(E) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                var U = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message: typeof E == "object" && E !== null && typeof E.message == "string" ? String(E.message) : String(E),
                    error: E
                });
                if (!window.dispatchEvent(U)) return
            } else if (typeof process == "object" && typeof process.emit == "function") {
                process.emit("uncaughtException", E);
                return
            }
            console.error(E)
        },
        xt = {
            map: K,
            forEach: function(E, U, Q) {
                K(E, function() {
                    U.apply(this, arguments)
                }, Q)
            },
            count: function(E) {
                var U = 0;
                return K(E, function() {
                    U++
                }), U
            },
            toArray: function(E) {
                return K(E, function(U) {
                    return U
                }) || []
            },
            only: function(E) {
                if (!I(E)) throw Error("React.Children.only expected to receive a single React element child.");
                return E
            }
        };
    return ot.Activity = b, ot.Children = xt, ot.Component = k, ot.Fragment = r, ot.Profiler = c, ot.PureComponent = H, ot.StrictMode = o, ot.Suspense = v, ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Z, ot.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(E) {
            return Z.H.useMemoCache(E)
        }
    }, ot.cache = function(E) {
        return function() {
            return E.apply(null, arguments)
        }
    }, ot.cacheSignal = function() {
        return null
    }, ot.cloneElement = function(E, U, Q) {
        if (E == null) throw Error("The argument must be a React element, but you passed " + E + ".");
        var et = z({}, E.props),
            ct = E.key;
        if (U != null)
            for (mt in U.key !== void 0 && (ct = "" + U.key), U) !J.call(U, mt) || mt === "key" || mt === "__self" || mt === "__source" || mt === "ref" && U.ref === void 0 || (et[mt] = U[mt]);
        var mt = arguments.length - 2;
        if (mt === 1) et.children = Q;
        else if (1 < mt) {
            for (var Et = Array(mt), oe = 0; oe < mt; oe++) Et[oe] = arguments[oe + 2];
            et.children = Et
        }
        return rt(E.type, ct, et)
    }, ot.createContext = function(E) {
        return E = {
            $$typeof: d,
            _currentValue: E,
            _currentValue2: E,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        }, E.Provider = E, E.Consumer = {
            $$typeof: h,
            _context: E
        }, E
    }, ot.createElement = function(E, U, Q) {
        var et, ct = {},
            mt = null;
        if (U != null)
            for (et in U.key !== void 0 && (mt = "" + U.key), U) J.call(U, et) && et !== "key" && et !== "__self" && et !== "__source" && (ct[et] = U[et]);
        var Et = arguments.length - 2;
        if (Et === 1) ct.children = Q;
        else if (1 < Et) {
            for (var oe = Array(Et), Yt = 0; Yt < Et; Yt++) oe[Yt] = arguments[Yt + 2];
            ct.children = oe
        }
        if (E && E.defaultProps)
            for (et in Et = E.defaultProps, Et) ct[et] === void 0 && (ct[et] = Et[et]);
        return rt(E, mt, ct)
    }, ot.createRef = function() {
        return {
            current: null
        }
    }, ot.forwardRef = function(E) {
        return {
            $$typeof: p,
            render: E
        }
    }, ot.isValidElement = I, ot.lazy = function(E) {
        return {
            $$typeof: x,
            _payload: {
                _status: -1,
                _result: E
            },
            _init: F
        }
    }, ot.memo = function(E, U) {
        return {
            $$typeof: m,
            type: E,
            compare: U === void 0 ? null : U
        }
    }, ot.startTransition = function(E) {
        var U = Z.T,
            Q = {};
        Z.T = Q;
        try {
            var et = E(),
                ct = Z.S;
            ct !== null && ct(Q, et), typeof et == "object" && et !== null && typeof et.then == "function" && et.then(at, dt)
        } catch (mt) {
            dt(mt)
        } finally {
            U !== null && Q.types !== null && (U.types = Q.types), Z.T = U
        }
    }, ot.unstable_useCacheRefresh = function() {
        return Z.H.useCacheRefresh()
    }, ot.use = function(E) {
        return Z.H.use(E)
    }, ot.useActionState = function(E, U, Q) {
        return Z.H.useActionState(E, U, Q)
    }, ot.useCallback = function(E, U) {
        return Z.H.useCallback(E, U)
    }, ot.useContext = function(E) {
        return Z.H.useContext(E)
    }, ot.useDebugValue = function() {}, ot.useDeferredValue = function(E, U) {
        return Z.H.useDeferredValue(E, U)
    }, ot.useEffect = function(E, U) {
        return Z.H.useEffect(E, U)
    }, ot.useEffectEvent = function(E) {
        return Z.H.useEffectEvent(E)
    }, ot.useId = function() {
        return Z.H.useId()
    }, ot.useImperativeHandle = function(E, U, Q) {
        return Z.H.useImperativeHandle(E, U, Q)
    }, ot.useInsertionEffect = function(E, U) {
        return Z.H.useInsertionEffect(E, U)
    }, ot.useLayoutEffect = function(E, U) {
        return Z.H.useLayoutEffect(E, U)
    }, ot.useMemo = function(E, U) {
        return Z.H.useMemo(E, U)
    }, ot.useOptimistic = function(E, U) {
        return Z.H.useOptimistic(E, U)
    }, ot.useReducer = function(E, U, Q) {
        return Z.H.useReducer(E, U, Q)
    }, ot.useRef = function(E) {
        return Z.H.useRef(E)
    }, ot.useState = function(E) {
        return Z.H.useState(E)
    }, ot.useSyncExternalStore = function(E, U, Q) {
        return Z.H.useSyncExternalStore(E, U, Q)
    }, ot.useTransition = function() {
        return Z.H.useTransition()
    }, ot.version = "19.2.7", ot
}
var s0;

function Nc() {
    return s0 || (s0 = 1, _u.exports = J1()), _u.exports
}
var X = Nc(),
    Vu = {
        exports: {}
    },
    cl = {},
    ku = {
        exports: {}
    },
    Lu = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var o0;

function F1() {
    return o0 || (o0 = 1, (function(a) {
        function l(O, K) {
            var F = O.length;
            O.push(K);
            t: for (; 0 < F;) {
                var dt = F - 1 >>> 1,
                    xt = O[dt];
                if (0 < c(xt, K)) O[dt] = K, O[F] = xt, F = dt;
                else break t
            }
        }

        function r(O) {
            return O.length === 0 ? null : O[0]
        }

        function o(O) {
            if (O.length === 0) return null;
            var K = O[0],
                F = O.pop();
            if (F !== K) {
                O[0] = F;
                t: for (var dt = 0, xt = O.length, E = xt >>> 1; dt < E;) {
                    var U = 2 * (dt + 1) - 1,
                        Q = O[U],
                        et = U + 1,
                        ct = O[et];
                    if (0 > c(Q, F)) et < xt && 0 > c(ct, Q) ? (O[dt] = ct, O[et] = F, dt = et) : (O[dt] = Q, O[U] = F, dt = U);
                    else if (et < xt && 0 > c(ct, F)) O[dt] = ct, O[et] = F, dt = et;
                    else break t
                }
            }
            return K
        }

        function c(O, K) {
            var F = O.sortIndex - K.sortIndex;
            return F !== 0 ? F : O.id - K.id
        }
        if (a.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
            var h = performance;
            a.unstable_now = function() {
                return h.now()
            }
        } else {
            var d = Date,
                p = d.now();
            a.unstable_now = function() {
                return d.now() - p
            }
        }
        var v = [],
            m = [],
            x = 1,
            b = null,
            S = 3,
            j = !1,
            M = !1,
            z = !1,
            B = !1,
            k = typeof setTimeout == "function" ? setTimeout : null,
            G = typeof clearTimeout == "function" ? clearTimeout : null,
            H = typeof setImmediate < "u" ? setImmediate : null;

        function q(O) {
            for (var K = r(m); K !== null;) {
                if (K.callback === null) o(m);
                else if (K.startTime <= O) o(m), K.sortIndex = K.expirationTime, l(v, K);
                else break;
                K = r(m)
            }
        }

        function $(O) {
            if (z = !1, q(O), !M)
                if (r(v) !== null) M = !0, at || (at = !0, tt());
                else {
                    var K = r(m);
                    K !== null && Mt($, K.startTime - O)
                }
        }
        var at = !1,
            Z = -1,
            J = 5,
            rt = -1;

        function Y() {
            return B ? !0 : !(a.unstable_now() - rt < J)
        }

        function I() {
            if (B = !1, at) {
                var O = a.unstable_now();
                rt = O;
                var K = !0;
                try {
                    t: {
                        M = !1,
                        z && (z = !1, G(Z), Z = -1),
                        j = !0;
                        var F = S;
                        try {
                            e: {
                                for (q(O), b = r(v); b !== null && !(b.expirationTime > O && Y());) {
                                    var dt = b.callback;
                                    if (typeof dt == "function") {
                                        b.callback = null, S = b.priorityLevel;
                                        var xt = dt(b.expirationTime <= O);
                                        if (O = a.unstable_now(), typeof xt == "function") {
                                            b.callback = xt, q(O), K = !0;
                                            break e
                                        }
                                        b === r(v) && o(v), q(O)
                                    } else o(v);
                                    b = r(v)
                                }
                                if (b !== null) K = !0;
                                else {
                                    var E = r(m);
                                    E !== null && Mt($, E.startTime - O), K = !1
                                }
                            }
                            break t
                        }
                        finally {
                            b = null, S = F, j = !1
                        }
                        K = void 0
                    }
                }
                finally {
                    K ? tt() : at = !1
                }
            }
        }
        var tt;
        if (typeof H == "function") tt = function() {
            H(I)
        };
        else if (typeof MessageChannel < "u") {
            var st = new MessageChannel,
                ut = st.port2;
            st.port1.onmessage = I, tt = function() {
                ut.postMessage(null)
            }
        } else tt = function() {
            k(I, 0)
        };

        function Mt(O, K) {
            Z = k(function() {
                O(a.unstable_now())
            }, K)
        }
        a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function(O) {
            O.callback = null
        }, a.unstable_forceFrameRate = function(O) {
            0 > O || 125 < O ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : J = 0 < O ? Math.floor(1e3 / O) : 5
        }, a.unstable_getCurrentPriorityLevel = function() {
            return S
        }, a.unstable_next = function(O) {
            switch (S) {
                case 1:
                case 2:
                case 3:
                    var K = 3;
                    break;
                default:
                    K = S
            }
            var F = S;
            S = K;
            try {
                return O()
            } finally {
                S = F
            }
        }, a.unstable_requestPaint = function() {
            B = !0
        }, a.unstable_runWithPriority = function(O, K) {
            switch (O) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    O = 3
            }
            var F = S;
            S = O;
            try {
                return K()
            } finally {
                S = F
            }
        }, a.unstable_scheduleCallback = function(O, K, F) {
            var dt = a.unstable_now();
            switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? dt + F : dt) : F = dt, O) {
                case 1:
                    var xt = -1;
                    break;
                case 2:
                    xt = 250;
                    break;
                case 5:
                    xt = 1073741823;
                    break;
                case 4:
                    xt = 1e4;
                    break;
                default:
                    xt = 5e3
            }
            return xt = F + xt, O = {
                id: x++,
                callback: K,
                priorityLevel: O,
                startTime: F,
                expirationTime: xt,
                sortIndex: -1
            }, F > dt ? (O.sortIndex = F, l(m, O), r(v) === null && O === r(m) && (z ? (G(Z), Z = -1) : z = !0, Mt($, F - dt))) : (O.sortIndex = xt, l(v, O), M || j || (M = !0, at || (at = !0, tt()))), O
        }, a.unstable_shouldYield = Y, a.unstable_wrapCallback = function(O) {
            var K = S;
            return function() {
                var F = S;
                S = K;
                try {
                    return O.apply(this, arguments)
                } finally {
                    S = F
                }
            }
        }
    })(Lu)), Lu
}
var r0;

function P1() {
    return r0 || (r0 = 1, ku.exports = F1()), ku.exports
}
var Uu = {
        exports: {}
    },
    se = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var u0;

function W1() {
    if (u0) return se;
    u0 = 1;
    var a = Nc();

    function l(v) {
        var m = "https://react.dev/errors/" + v;
        if (1 < arguments.length) {
            m += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var x = 2; x < arguments.length; x++) m += "&args[]=" + encodeURIComponent(arguments[x])
        }
        return "Minified React error #" + v + "; visit " + m + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function r() {}
    var o = {
            d: {
                f: r,
                r: function() {
                    throw Error(l(522))
                },
                D: r,
                C: r,
                L: r,
                m: r,
                X: r,
                S: r,
                M: r
            },
            p: 0,
            findDOMNode: null
        },
        c = Symbol.for("react.portal");

    function h(v, m, x) {
        var b = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: c,
            key: b == null ? null : "" + b,
            children: v,
            containerInfo: m,
            implementation: x
        }
    }
    var d = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

    function p(v, m) {
        if (v === "font") return "";
        if (typeof m == "string") return m === "use-credentials" ? m : ""
    }
    return se.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, se.createPortal = function(v, m) {
        var x = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11) throw Error(l(299));
        return h(v, m, null, x)
    }, se.flushSync = function(v) {
        var m = d.T,
            x = o.p;
        try {
            if (d.T = null, o.p = 2, v) return v()
        } finally {
            d.T = m, o.p = x, o.d.f()
        }
    }, se.preconnect = function(v, m) {
        typeof v == "string" && (m ? (m = m.crossOrigin, m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null, o.d.C(v, m))
    }, se.prefetchDNS = function(v) {
        typeof v == "string" && o.d.D(v)
    }, se.preinit = function(v, m) {
        if (typeof v == "string" && m && typeof m.as == "string") {
            var x = m.as,
                b = p(x, m.crossOrigin),
                S = typeof m.integrity == "string" ? m.integrity : void 0,
                j = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
            x === "style" ? o.d.S(v, typeof m.precedence == "string" ? m.precedence : void 0, {
                crossOrigin: b,
                integrity: S,
                fetchPriority: j
            }) : x === "script" && o.d.X(v, {
                crossOrigin: b,
                integrity: S,
                fetchPriority: j,
                nonce: typeof m.nonce == "string" ? m.nonce : void 0
            })
        }
    }, se.preinitModule = function(v, m) {
        if (typeof v == "string")
            if (typeof m == "object" && m !== null) {
                if (m.as == null || m.as === "script") {
                    var x = p(m.as, m.crossOrigin);
                    o.d.M(v, {
                        crossOrigin: x,
                        integrity: typeof m.integrity == "string" ? m.integrity : void 0,
                        nonce: typeof m.nonce == "string" ? m.nonce : void 0
                    })
                }
            } else m == null && o.d.M(v)
    }, se.preload = function(v, m) {
        if (typeof v == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
            var x = m.as,
                b = p(x, m.crossOrigin);
            o.d.L(v, x, {
                crossOrigin: b,
                integrity: typeof m.integrity == "string" ? m.integrity : void 0,
                nonce: typeof m.nonce == "string" ? m.nonce : void 0,
                type: typeof m.type == "string" ? m.type : void 0,
                fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
                referrerPolicy: typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
                imageSrcSet: typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
                imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
                media: typeof m.media == "string" ? m.media : void 0
            })
        }
    }, se.preloadModule = function(v, m) {
        if (typeof v == "string")
            if (m) {
                var x = p(m.as, m.crossOrigin);
                o.d.m(v, {
                    as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
                    crossOrigin: x,
                    integrity: typeof m.integrity == "string" ? m.integrity : void 0
                })
            } else o.d.m(v)
    }, se.requestFormReset = function(v) {
        o.d.r(v)
    }, se.unstable_batchedUpdates = function(v, m) {
        return v(m)
    }, se.useFormState = function(v, m, x) {
        return d.H.useFormState(v, m, x)
    }, se.useFormStatus = function() {
        return d.H.useHostTransitionStatus()
    }, se.version = "19.2.7", se
}
var c0;

function $1() {
    if (c0) return Uu.exports;
    c0 = 1;

    function a() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)
        } catch (l) {
            console.error(l)
        }
    }
    return a(), Uu.exports = W1(), Uu.exports
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f0;

function I1() {
    if (f0) return cl;
    f0 = 1;
    var a = P1(),
        l = Nc(),
        r = $1();

    function o(t) {
        var e = "https://react.dev/errors/" + t;
        if (1 < arguments.length) {
            e += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++) e += "&args[]=" + encodeURIComponent(arguments[n])
        }
        return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function c(t) {
        return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
    }

    function h(t) {
        var e = t,
            n = t;
        if (t.alternate)
            for (; e.return;) e = e.return;
        else {
            t = e;
            do e = t, (e.flags & 4098) !== 0 && (n = e.return), t = e.return; while (t)
        }
        return e.tag === 3 ? n : null
    }

    function d(t) {
        if (t.tag === 13) {
            var e = t.memoizedState;
            if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated
        }
        return null
    }

    function p(t) {
        if (t.tag === 31) {
            var e = t.memoizedState;
            if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated
        }
        return null
    }

    function v(t) {
        if (h(t) !== t) throw Error(o(188))
    }

    function m(t) {
        var e = t.alternate;
        if (!e) {
            if (e = h(t), e === null) throw Error(o(188));
            return e !== t ? null : t
        }
        for (var n = t, i = e;;) {
            var s = n.return;
            if (s === null) break;
            var u = s.alternate;
            if (u === null) {
                if (i = s.return, i !== null) {
                    n = i;
                    continue
                }
                break
            }
            if (s.child === u.child) {
                for (u = s.child; u;) {
                    if (u === n) return v(s), t;
                    if (u === i) return v(s), e;
                    u = u.sibling
                }
                throw Error(o(188))
            }
            if (n.return !== i.return) n = s, i = u;
            else {
                for (var f = !1, g = s.child; g;) {
                    if (g === n) {
                        f = !0, n = s, i = u;
                        break
                    }
                    if (g === i) {
                        f = !0, i = s, n = u;
                        break
                    }
                    g = g.sibling
                }
                if (!f) {
                    for (g = u.child; g;) {
                        if (g === n) {
                            f = !0, n = u, i = s;
                            break
                        }
                        if (g === i) {
                            f = !0, i = u, n = s;
                            break
                        }
                        g = g.sibling
                    }
                    if (!f) throw Error(o(189))
                }
            }
            if (n.alternate !== i) throw Error(o(190))
        }
        if (n.tag !== 3) throw Error(o(188));
        return n.stateNode.current === n ? t : e
    }

    function x(t) {
        var e = t.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6) return t;
        for (t = t.child; t !== null;) {
            if (e = x(t), e !== null) return e;
            t = t.sibling
        }
        return null
    }
    var b = Object.assign,
        S = Symbol.for("react.element"),
        j = Symbol.for("react.transitional.element"),
        M = Symbol.for("react.portal"),
        z = Symbol.for("react.fragment"),
        B = Symbol.for("react.strict_mode"),
        k = Symbol.for("react.profiler"),
        G = Symbol.for("react.consumer"),
        H = Symbol.for("react.context"),
        q = Symbol.for("react.forward_ref"),
        $ = Symbol.for("react.suspense"),
        at = Symbol.for("react.suspense_list"),
        Z = Symbol.for("react.memo"),
        J = Symbol.for("react.lazy"),
        rt = Symbol.for("react.activity"),
        Y = Symbol.for("react.memo_cache_sentinel"),
        I = Symbol.iterator;

    function tt(t) {
        return t === null || typeof t != "object" ? null : (t = I && t[I] || t["@@iterator"], typeof t == "function" ? t : null)
    }
    var st = Symbol.for("react.client.reference");

    function ut(t) {
        if (t == null) return null;
        if (typeof t == "function") return t.$$typeof === st ? null : t.displayName || t.name || null;
        if (typeof t == "string") return t;
        switch (t) {
            case z:
                return "Fragment";
            case k:
                return "Profiler";
            case B:
                return "StrictMode";
            case $:
                return "Suspense";
            case at:
                return "SuspenseList";
            case rt:
                return "Activity"
        }
        if (typeof t == "object") switch (t.$$typeof) {
            case M:
                return "Portal";
            case H:
                return t.displayName || "Context";
            case G:
                return (t._context.displayName || "Context") + ".Consumer";
            case q:
                var e = t.render;
                return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
            case Z:
                return e = t.displayName || null, e !== null ? e : ut(t.type) || "Memo";
            case J:
                e = t._payload, t = t._init;
                try {
                    return ut(t(e))
                } catch {}
        }
        return null
    }
    var Mt = Array.isArray,
        O = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        K = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        F = {
            pending: !1,
            data: null,
            method: null,
            action: null
        },
        dt = [],
        xt = -1;

    function E(t) {
        return {
            current: t
        }
    }

    function U(t) {
        0 > xt || (t.current = dt[xt], dt[xt] = null, xt--)
    }

    function Q(t, e) {
        xt++, dt[xt] = t.current, t.current = e
    }
    var et = E(null),
        ct = E(null),
        mt = E(null),
        Et = E(null);

    function oe(t, e) {
        switch (Q(mt, e), Q(ct, t), Q(et, null), e.nodeType) {
            case 9:
            case 11:
                t = (t = e.documentElement) && (t = t.namespaceURI) ? Nm(t) : 0;
                break;
            default:
                if (t = e.tagName, e = e.namespaceURI) e = Nm(e), t = wm(e, t);
                else switch (t) {
                    case "svg":
                        t = 1;
                        break;
                    case "math":
                        t = 2;
                        break;
                    default:
                        t = 0
                }
        }
        U(et), Q(et, t)
    }

    function Yt() {
        U(et), U(ct), U(mt)
    }

    function yi(t) {
        t.memoizedState !== null && Q(Et, t);
        var e = et.current,
            n = wm(e, t.type);
        e !== n && (Q(ct, t), Q(et, n))
    }

    function Ml(t) {
        ct.current === t && (U(et), U(ct)), Et.current === t && (U(Et), ll._currentValue = F)
    }
    var po, ef;

    function Wn(t) {
        if (po === void 0) try {
            throw Error()
        } catch (n) {
            var e = n.stack.trim().match(/\n( *(at )?)/);
            po = e && e[1] || "", ef = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : ""
        }
        return `
` + po + t + ef
    }
    var yo = !1;

    function go(t, e) {
        if (!t || yo) return "";
        yo = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var i = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (e) {
                            var L = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(L.prototype, "props", {
                                    set: function() {
                                        throw Error()
                                    }
                                }), typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(L, [])
                                } catch (R) {
                                    var C = R
                                }
                                Reflect.construct(t, [], L)
                            } else {
                                try {
                                    L.call()
                                } catch (R) {
                                    C = R
                                }
                                t.call(L.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (R) {
                                C = R
                            }(L = t()) && typeof L.catch == "function" && L.catch(function() {})
                        }
                    } catch (R) {
                        if (R && C && typeof R.stack == "string") return [R.stack, C.stack]
                    }
                    return [null, null]
                }
            };
            i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var s = Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot, "name");
            s && s.configurable && Object.defineProperty(i.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var u = i.DetermineComponentFrameRoot(),
                f = u[0],
                g = u[1];
            if (f && g) {
                var T = f.split(`
`),
                    D = g.split(`
`);
                for (s = i = 0; i < T.length && !T[i].includes("DetermineComponentFrameRoot");) i++;
                for (; s < D.length && !D[s].includes("DetermineComponentFrameRoot");) s++;
                if (i === T.length || s === D.length)
                    for (i = T.length - 1, s = D.length - 1; 1 <= i && 0 <= s && T[i] !== D[s];) s--;
                for (; 1 <= i && 0 <= s; i--, s--)
                    if (T[i] !== D[s]) {
                        if (i !== 1 || s !== 1)
                            do
                                if (i--, s--, 0 > s || T[i] !== D[s]) {
                                    var _ = `
` + T[i].replace(" at new ", " at ");
                                    return t.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", t.displayName)), _
                                } while (1 <= i && 0 <= s);
                        break
                    }
            }
        } finally {
            yo = !1, Error.prepareStackTrace = n
        }
        return (n = t ? t.displayName || t.name : "") ? Wn(n) : ""
    }

    function Ag(t, e) {
        switch (t.tag) {
            case 26:
            case 27:
            case 5:
                return Wn(t.type);
            case 16:
                return Wn("Lazy");
            case 13:
                return t.child !== e && e !== null ? Wn("Suspense Fallback") : Wn("Suspense");
            case 19:
                return Wn("SuspenseList");
            case 0:
            case 15:
                return go(t.type, !1);
            case 11:
                return go(t.type.render, !1);
            case 1:
                return go(t.type, !0);
            case 31:
                return Wn("Activity");
            default:
                return ""
        }
    }

    function nf(t) {
        try {
            var e = "",
                n = null;
            do e += Ag(t, n), n = t, t = t.return; while (t);
            return e
        } catch (i) {
            return `
Error generating stack: ` + i.message + `
` + i.stack
        }
    }
    var vo = Object.prototype.hasOwnProperty,
        xo = a.unstable_scheduleCallback,
        bo = a.unstable_cancelCallback,
        Eg = a.unstable_shouldYield,
        Mg = a.unstable_requestPaint,
        ve = a.unstable_now,
        Ng = a.unstable_getCurrentPriorityLevel,
        af = a.unstable_ImmediatePriority,
        lf = a.unstable_UserBlockingPriority,
        Nl = a.unstable_NormalPriority,
        wg = a.unstable_LowPriority,
        sf = a.unstable_IdlePriority,
        Dg = a.log,
        jg = a.unstable_setDisableYieldValue,
        gi = null,
        xe = null;

    function Sn(t) {
        if (typeof Dg == "function" && jg(t), xe && typeof xe.setStrictMode == "function") try {
            xe.setStrictMode(gi, t)
        } catch {}
    }
    var be = Math.clz32 ? Math.clz32 : Og,
        Cg = Math.log,
        Rg = Math.LN2;

    function Og(t) {
        return t >>>= 0, t === 0 ? 32 : 31 - (Cg(t) / Rg | 0) | 0
    }
    var wl = 256,
        Dl = 262144,
        jl = 4194304;

    function $n(t) {
        var e = t & 42;
        if (e !== 0) return e;
        switch (t & -t) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
                return 64;
            case 128:
                return 128;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
                return t & 261888;
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return t & 3932160;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return t & 62914560;
            case 67108864:
                return 67108864;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 0;
            default:
                return t
        }
    }

    function Cl(t, e, n) {
        var i = t.pendingLanes;
        if (i === 0) return 0;
        var s = 0,
            u = t.suspendedLanes,
            f = t.pingedLanes;
        t = t.warmLanes;
        var g = i & 134217727;
        return g !== 0 ? (i = g & ~u, i !== 0 ? s = $n(i) : (f &= g, f !== 0 ? s = $n(f) : n || (n = g & ~t, n !== 0 && (s = $n(n))))) : (g = i & ~u, g !== 0 ? s = $n(g) : f !== 0 ? s = $n(f) : n || (n = i & ~t, n !== 0 && (s = $n(n)))), s === 0 ? 0 : e !== 0 && e !== s && (e & u) === 0 && (u = s & -s, n = e & -e, u >= n || u === 32 && (n & 4194048) !== 0) ? e : s
    }

    function vi(t, e) {
        return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0
    }

    function zg(t, e) {
        switch (t) {
            case 1:
            case 2:
            case 4:
            case 8:
            case 64:
                return e + 250;
            case 16:
            case 32:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return e + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return -1;
            case 67108864:
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1
        }
    }

    function of() {
        var t = jl;
        return jl <<= 1, (jl & 62914560) === 0 && (jl = 4194304), t
    }

    function So(t) {
        for (var e = [], n = 0; 31 > n; n++) e.push(t);
        return e
    }

    function xi(t, e) {
        t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0)
    }

    function _g(t, e, n, i, s, u) {
        var f = t.pendingLanes;
        t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= n, t.entangledLanes &= n, t.errorRecoveryDisabledLanes &= n, t.shellSuspendCounter = 0;
        var g = t.entanglements,
            T = t.expirationTimes,
            D = t.hiddenUpdates;
        for (n = f & ~n; 0 < n;) {
            var _ = 31 - be(n),
                L = 1 << _;
            g[_] = 0, T[_] = -1;
            var C = D[_];
            if (C !== null)
                for (D[_] = null, _ = 0; _ < C.length; _++) {
                    var R = C[_];
                    R !== null && (R.lane &= -536870913)
                }
            n &= ~L
        }
        i !== 0 && rf(t, i, 0), u !== 0 && s === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(f & ~e))
    }

    function rf(t, e, n) {
        t.pendingLanes |= e, t.suspendedLanes &= ~e;
        var i = 31 - be(e);
        t.entangledLanes |= e, t.entanglements[i] = t.entanglements[i] | 1073741824 | n & 261930
    }

    function uf(t, e) {
        var n = t.entangledLanes |= e;
        for (t = t.entanglements; n;) {
            var i = 31 - be(n),
                s = 1 << i;
            s & e | t[i] & e && (t[i] |= e), n &= ~s
        }
    }

    function cf(t, e) {
        var n = e & -e;
        return n = (n & 42) !== 0 ? 1 : To(n), (n & (t.suspendedLanes | e)) !== 0 ? 0 : n
    }

    function To(t) {
        switch (t) {
            case 2:
                t = 1;
                break;
            case 8:
                t = 4;
                break;
            case 32:
                t = 16;
                break;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                t = 128;
                break;
            case 268435456:
                t = 134217728;
                break;
            default:
                t = 0
        }
        return t
    }

    function Ao(t) {
        return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }

    function ff() {
        var t = K.p;
        return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Pm(t.type))
    }

    function df(t, e) {
        var n = K.p;
        try {
            return K.p = t, e()
        } finally {
            K.p = n
        }
    }
    var Tn = Math.random().toString(36).slice(2),
        It = "__reactFiber$" + Tn,
        fe = "__reactProps$" + Tn,
        Ta = "__reactContainer$" + Tn,
        Eo = "__reactEvents$" + Tn,
        Vg = "__reactListeners$" + Tn,
        kg = "__reactHandles$" + Tn,
        hf = "__reactResources$" + Tn,
        bi = "__reactMarker$" + Tn;

    function Mo(t) {
        delete t[It], delete t[fe], delete t[Eo], delete t[Vg], delete t[kg]
    }

    function Aa(t) {
        var e = t[It];
        if (e) return e;
        for (var n = t.parentNode; n;) {
            if (e = n[Ta] || n[It]) {
                if (n = e.alternate, e.child !== null || n !== null && n.child !== null)
                    for (t = _m(t); t !== null;) {
                        if (n = t[It]) return n;
                        t = _m(t)
                    }
                return e
            }
            t = n, n = t.parentNode
        }
        return null
    }

    function Ea(t) {
        if (t = t[It] || t[Ta]) {
            var e = t.tag;
            if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3) return t
        }
        return null
    }

    function Si(t) {
        var e = t.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
        throw Error(o(33))
    }

    function Ma(t) {
        var e = t[hf];
        return e || (e = t[hf] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }), e
    }

    function Wt(t) {
        t[bi] = !0
    }
    var mf = new Set,
        pf = {};

    function In(t, e) {
        Na(t, e), Na(t + "Capture", e)
    }

    function Na(t, e) {
        for (pf[t] = e, t = 0; t < e.length; t++) mf.add(e[t])
    }
    var Lg = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
        yf = {},
        gf = {};

    function Ug(t) {
        return vo.call(gf, t) ? !0 : vo.call(yf, t) ? !1 : Lg.test(t) ? gf[t] = !0 : (yf[t] = !0, !1)
    }

    function Rl(t, e, n) {
        if (Ug(e))
            if (n === null) t.removeAttribute(e);
            else {
                switch (typeof n) {
                    case "undefined":
                    case "function":
                    case "symbol":
                        t.removeAttribute(e);
                        return;
                    case "boolean":
                        var i = e.toLowerCase().slice(0, 5);
                        if (i !== "data-" && i !== "aria-") {
                            t.removeAttribute(e);
                            return
                        }
                }
                t.setAttribute(e, "" + n)
            }
    }

    function Ol(t, e, n) {
        if (n === null) t.removeAttribute(e);
        else {
            switch (typeof n) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    t.removeAttribute(e);
                    return
            }
            t.setAttribute(e, "" + n)
        }
    }

    function en(t, e, n, i) {
        if (i === null) t.removeAttribute(n);
        else {
            switch (typeof i) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    t.removeAttribute(n);
                    return
            }
            t.setAttributeNS(e, n, "" + i)
        }
    }

    function je(t) {
        switch (typeof t) {
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return t;
            case "object":
                return t;
            default:
                return ""
        }
    }

    function vf(t) {
        var e = t.type;
        return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
    }

    function Bg(t, e, n) {
        var i = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
        if (!t.hasOwnProperty(e) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
            var s = i.get,
                u = i.set;
            return Object.defineProperty(t, e, {
                configurable: !0,
                get: function() {
                    return s.call(this)
                },
                set: function(f) {
                    n = "" + f, u.call(this, f)
                }
            }), Object.defineProperty(t, e, {
                enumerable: i.enumerable
            }), {
                getValue: function() {
                    return n
                },
                setValue: function(f) {
                    n = "" + f
                },
                stopTracking: function() {
                    t._valueTracker = null, delete t[e]
                }
            }
        }
    }

    function No(t) {
        if (!t._valueTracker) {
            var e = vf(t) ? "checked" : "value";
            t._valueTracker = Bg(t, e, "" + t[e])
        }
    }

    function xf(t) {
        if (!t) return !1;
        var e = t._valueTracker;
        if (!e) return !0;
        var n = e.getValue(),
            i = "";
        return t && (i = vf(t) ? t.checked ? "true" : "false" : t.value), t = i, t !== n ? (e.setValue(t), !0) : !1
    }

    function zl(t) {
        if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
        try {
            return t.activeElement || t.body
        } catch {
            return t.body
        }
    }
    var Hg = /[\n"\\]/g;

    function Ce(t) {
        return t.replace(Hg, function(e) {
            return "\\" + e.charCodeAt(0).toString(16) + " "
        })
    }

    function wo(t, e, n, i, s, u, f, g) {
        t.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? t.type = f : t.removeAttribute("type"), e != null ? f === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + je(e)) : t.value !== "" + je(e) && (t.value = "" + je(e)) : f !== "submit" && f !== "reset" || t.removeAttribute("value"), e != null ? Do(t, f, je(e)) : n != null ? Do(t, f, je(n)) : i != null && t.removeAttribute("value"), s == null && u != null && (t.defaultChecked = !!u), s != null && (t.checked = s && typeof s != "function" && typeof s != "symbol"), g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? t.name = "" + je(g) : t.removeAttribute("name")
    }

    function bf(t, e, n, i, s, u, f, g) {
        if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), e != null || n != null) {
            if (!(u !== "submit" && u !== "reset" || e != null)) {
                No(t);
                return
            }
            n = n != null ? "" + je(n) : "", e = e != null ? "" + je(e) : n, g || e === t.value || (t.value = e), t.defaultValue = e
        }
        i = i ?? s, i = typeof i != "function" && typeof i != "symbol" && !!i, t.checked = g ? t.checked : !!i, t.defaultChecked = !!i, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (t.name = f), No(t)
    }

    function Do(t, e, n) {
        e === "number" && zl(t.ownerDocument) === t || t.defaultValue === "" + n || (t.defaultValue = "" + n)
    }

    function wa(t, e, n, i) {
        if (t = t.options, e) {
            e = {};
            for (var s = 0; s < n.length; s++) e["$" + n[s]] = !0;
            for (n = 0; n < t.length; n++) s = e.hasOwnProperty("$" + t[n].value), t[n].selected !== s && (t[n].selected = s), s && i && (t[n].defaultSelected = !0)
        } else {
            for (n = "" + je(n), e = null, s = 0; s < t.length; s++) {
                if (t[s].value === n) {
                    t[s].selected = !0, i && (t[s].defaultSelected = !0);
                    return
                }
                e !== null || t[s].disabled || (e = t[s])
            }
            e !== null && (e.selected = !0)
        }
    }

    function Sf(t, e, n) {
        if (e != null && (e = "" + je(e), e !== t.value && (t.value = e), n == null)) {
            t.defaultValue !== e && (t.defaultValue = e);
            return
        }
        t.defaultValue = n != null ? "" + je(n) : ""
    }

    function Tf(t, e, n, i) {
        if (e == null) {
            if (i != null) {
                if (n != null) throw Error(o(92));
                if (Mt(i)) {
                    if (1 < i.length) throw Error(o(93));
                    i = i[0]
                }
                n = i
            }
            n == null && (n = ""), e = n
        }
        n = je(e), t.defaultValue = n, i = t.textContent, i === n && i !== "" && i !== null && (t.value = i), No(t)
    }

    function Da(t, e) {
        if (e) {
            var n = t.firstChild;
            if (n && n === t.lastChild && n.nodeType === 3) {
                n.nodeValue = e;
                return
            }
        }
        t.textContent = e
    }
    var Yg = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

    function Af(t, e, n) {
        var i = e.indexOf("--") === 0;
        n == null || typeof n == "boolean" || n === "" ? i ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : i ? t.setProperty(e, n) : typeof n != "number" || n === 0 || Yg.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px"
    }

    function Ef(t, e, n) {
        if (e != null && typeof e != "object") throw Error(o(62));
        if (t = t.style, n != null) {
            for (var i in n) !n.hasOwnProperty(i) || e != null && e.hasOwnProperty(i) || (i.indexOf("--") === 0 ? t.setProperty(i, "") : i === "float" ? t.cssFloat = "" : t[i] = "");
            for (var s in e) i = e[s], e.hasOwnProperty(s) && n[s] !== i && Af(t, s, i)
        } else
            for (var u in e) e.hasOwnProperty(u) && Af(t, u, e[u])
    }

    function jo(t) {
        if (t.indexOf("-") === -1) return !1;
        switch (t) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
        }
    }
    var qg = new Map([
            ["acceptCharset", "accept-charset"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
            ["crossOrigin", "crossorigin"],
            ["accentHeight", "accent-height"],
            ["alignmentBaseline", "alignment-baseline"],
            ["arabicForm", "arabic-form"],
            ["baselineShift", "baseline-shift"],
            ["capHeight", "cap-height"],
            ["clipPath", "clip-path"],
            ["clipRule", "clip-rule"],
            ["colorInterpolation", "color-interpolation"],
            ["colorInterpolationFilters", "color-interpolation-filters"],
            ["colorProfile", "color-profile"],
            ["colorRendering", "color-rendering"],
            ["dominantBaseline", "dominant-baseline"],
            ["enableBackground", "enable-background"],
            ["fillOpacity", "fill-opacity"],
            ["fillRule", "fill-rule"],
            ["floodColor", "flood-color"],
            ["floodOpacity", "flood-opacity"],
            ["fontFamily", "font-family"],
            ["fontSize", "font-size"],
            ["fontSizeAdjust", "font-size-adjust"],
            ["fontStretch", "font-stretch"],
            ["fontStyle", "font-style"],
            ["fontVariant", "font-variant"],
            ["fontWeight", "font-weight"],
            ["glyphName", "glyph-name"],
            ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
            ["glyphOrientationVertical", "glyph-orientation-vertical"],
            ["horizAdvX", "horiz-adv-x"],
            ["horizOriginX", "horiz-origin-x"],
            ["imageRendering", "image-rendering"],
            ["letterSpacing", "letter-spacing"],
            ["lightingColor", "lighting-color"],
            ["markerEnd", "marker-end"],
            ["markerMid", "marker-mid"],
            ["markerStart", "marker-start"],
            ["overlinePosition", "overline-position"],
            ["overlineThickness", "overline-thickness"],
            ["paintOrder", "paint-order"],
            ["panose-1", "panose-1"],
            ["pointerEvents", "pointer-events"],
            ["renderingIntent", "rendering-intent"],
            ["shapeRendering", "shape-rendering"],
            ["stopColor", "stop-color"],
            ["stopOpacity", "stop-opacity"],
            ["strikethroughPosition", "strikethrough-position"],
            ["strikethroughThickness", "strikethrough-thickness"],
            ["strokeDasharray", "stroke-dasharray"],
            ["strokeDashoffset", "stroke-dashoffset"],
            ["strokeLinecap", "stroke-linecap"],
            ["strokeLinejoin", "stroke-linejoin"],
            ["strokeMiterlimit", "stroke-miterlimit"],
            ["strokeOpacity", "stroke-opacity"],
            ["strokeWidth", "stroke-width"],
            ["textAnchor", "text-anchor"],
            ["textDecoration", "text-decoration"],
            ["textRendering", "text-rendering"],
            ["transformOrigin", "transform-origin"],
            ["underlinePosition", "underline-position"],
            ["underlineThickness", "underline-thickness"],
            ["unicodeBidi", "unicode-bidi"],
            ["unicodeRange", "unicode-range"],
            ["unitsPerEm", "units-per-em"],
            ["vAlphabetic", "v-alphabetic"],
            ["vHanging", "v-hanging"],
            ["vIdeographic", "v-ideographic"],
            ["vMathematical", "v-mathematical"],
            ["vectorEffect", "vector-effect"],
            ["vertAdvY", "vert-adv-y"],
            ["vertOriginX", "vert-origin-x"],
            ["vertOriginY", "vert-origin-y"],
            ["wordSpacing", "word-spacing"],
            ["writingMode", "writing-mode"],
            ["xmlnsXlink", "xmlns:xlink"],
            ["xHeight", "x-height"]
        ]),
        Gg = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

    function _l(t) {
        return Gg.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t
    }

    function nn() {}
    var Co = null;

    function Ro(t) {
        return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t
    }
    var ja = null,
        Ca = null;

    function Mf(t) {
        var e = Ea(t);
        if (e && (t = e.stateNode)) {
            var n = t[fe] || null;
            t: switch (t = e.stateNode, e.type) {
                case "input":
                    if (wo(t, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), e = n.name, n.type === "radio" && e != null) {
                        for (n = t; n.parentNode;) n = n.parentNode;
                        for (n = n.querySelectorAll('input[name="' + Ce("" + e) + '"][type="radio"]'), e = 0; e < n.length; e++) {
                            var i = n[e];
                            if (i !== t && i.form === t.form) {
                                var s = i[fe] || null;
                                if (!s) throw Error(o(90));
                                wo(i, s.value, s.defaultValue, s.defaultValue, s.checked, s.defaultChecked, s.type, s.name)
                            }
                        }
                        for (e = 0; e < n.length; e++) i = n[e], i.form === t.form && xf(i)
                    }
                    break t;
                case "textarea":
                    Sf(t, n.value, n.defaultValue);
                    break t;
                case "select":
                    e = n.value, e != null && wa(t, !!n.multiple, e, !1)
            }
        }
    }
    var Oo = !1;

    function Nf(t, e, n) {
        if (Oo) return t(e, n);
        Oo = !0;
        try {
            var i = t(e);
            return i
        } finally {
            if (Oo = !1, (ja !== null || Ca !== null) && (Ss(), ja && (e = ja, t = Ca, Ca = ja = null, Mf(e), t)))
                for (e = 0; e < t.length; e++) Mf(t[e])
        }
    }

    function Ti(t, e) {
        var n = t.stateNode;
        if (n === null) return null;
        var i = n[fe] || null;
        if (i === null) return null;
        n = i[e];
        t: switch (e) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (i = !i.disabled) || (t = t.type, i = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !i;
                break t;
            default:
                t = !1
        }
        if (t) return null;
        if (n && typeof n != "function") throw Error(o(231, e, typeof n));
        return n
    }
    var an = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        zo = !1;
    if (an) try {
        var Ai = {};
        Object.defineProperty(Ai, "passive", {
            get: function() {
                zo = !0
            }
        }), window.addEventListener("test", Ai, Ai), window.removeEventListener("test", Ai, Ai)
    } catch {
        zo = !1
    }
    var An = null,
        _o = null,
        Vl = null;

    function wf() {
        if (Vl) return Vl;
        var t, e = _o,
            n = e.length,
            i, s = "value" in An ? An.value : An.textContent,
            u = s.length;
        for (t = 0; t < n && e[t] === s[t]; t++);
        var f = n - t;
        for (i = 1; i <= f && e[n - i] === s[u - i]; i++);
        return Vl = s.slice(t, 1 < i ? 1 - i : void 0)
    }

    function kl(t) {
        var e = t.keyCode;
        return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0
    }

    function Ll() {
        return !0
    }

    function Df() {
        return !1
    }

    function de(t) {
        function e(n, i, s, u, f) {
            this._reactName = n, this._targetInst = s, this.type = i, this.nativeEvent = u, this.target = f, this.currentTarget = null;
            for (var g in t) t.hasOwnProperty(g) && (n = t[g], this[g] = n ? n(u) : u[g]);
            return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Ll : Df, this.isPropagationStopped = Df, this
        }
        return b(e.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ll)
            },
            stopPropagation: function() {
                var n = this.nativeEvent;
                n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ll)
            },
            persist: function() {},
            isPersistent: Ll
        }), e
    }
    var ta = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(t) {
                return t.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0
        },
        Ul = de(ta),
        Ei = b({}, ta, {
            view: 0,
            detail: 0
        }),
        Xg = de(Ei),
        Vo, ko, Mi, Bl = b({}, Ei, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Uo,
            button: 0,
            buttons: 0,
            relatedTarget: function(t) {
                return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
            },
            movementX: function(t) {
                return "movementX" in t ? t.movementX : (t !== Mi && (Mi && t.type === "mousemove" ? (Vo = t.screenX - Mi.screenX, ko = t.screenY - Mi.screenY) : ko = Vo = 0, Mi = t), Vo)
            },
            movementY: function(t) {
                return "movementY" in t ? t.movementY : ko
            }
        }),
        jf = de(Bl),
        Kg = b({}, Bl, {
            dataTransfer: 0
        }),
        Zg = de(Kg),
        Qg = b({}, Ei, {
            relatedTarget: 0
        }),
        Lo = de(Qg),
        Jg = b({}, ta, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        Fg = de(Jg),
        Pg = b({}, ta, {
            clipboardData: function(t) {
                return "clipboardData" in t ? t.clipboardData : window.clipboardData
            }
        }),
        Wg = de(Pg),
        $g = b({}, ta, {
            data: 0
        }),
        Cf = de($g),
        Ig = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        },
        tv = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        },
        ev = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function nv(t) {
        var e = this.nativeEvent;
        return e.getModifierState ? e.getModifierState(t) : (t = ev[t]) ? !!e[t] : !1
    }

    function Uo() {
        return nv
    }
    var av = b({}, Ei, {
            key: function(t) {
                if (t.key) {
                    var e = Ig[t.key] || t.key;
                    if (e !== "Unidentified") return e
                }
                return t.type === "keypress" ? (t = kl(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? tv[t.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Uo,
            charCode: function(t) {
                return t.type === "keypress" ? kl(t) : 0
            },
            keyCode: function(t) {
                return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
            },
            which: function(t) {
                return t.type === "keypress" ? kl(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
            }
        }),
        iv = de(av),
        lv = b({}, Bl, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        }),
        Rf = de(lv),
        sv = b({}, Ei, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: Uo
        }),
        ov = de(sv),
        rv = b({}, ta, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        uv = de(rv),
        cv = b({}, Bl, {
            deltaX: function(t) {
                return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0
            },
            deltaY: function(t) {
                return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        }),
        fv = de(cv),
        dv = b({}, ta, {
            newState: 0,
            oldState: 0
        }),
        hv = de(dv),
        mv = [9, 13, 27, 32],
        Bo = an && "CompositionEvent" in window,
        Ni = null;
    an && "documentMode" in document && (Ni = document.documentMode);
    var pv = an && "TextEvent" in window && !Ni,
        Of = an && (!Bo || Ni && 8 < Ni && 11 >= Ni),
        zf = " ",
        _f = !1;

    function Vf(t, e) {
        switch (t) {
            case "keyup":
                return mv.indexOf(e.keyCode) !== -1;
            case "keydown":
                return e.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1
        }
    }

    function kf(t) {
        return t = t.detail, typeof t == "object" && "data" in t ? t.data : null
    }
    var Ra = !1;

    function yv(t, e) {
        switch (t) {
            case "compositionend":
                return kf(e);
            case "keypress":
                return e.which !== 32 ? null : (_f = !0, zf);
            case "textInput":
                return t = e.data, t === zf && _f ? null : t;
            default:
                return null
        }
    }

    function gv(t, e) {
        if (Ra) return t === "compositionend" || !Bo && Vf(t, e) ? (t = wf(), Vl = _o = An = null, Ra = !1, t) : null;
        switch (t) {
            case "paste":
                return null;
            case "keypress":
                if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
                    if (e.char && 1 < e.char.length) return e.char;
                    if (e.which) return String.fromCharCode(e.which)
                }
                return null;
            case "compositionend":
                return Of && e.locale !== "ko" ? null : e.data;
            default:
                return null
        }
    }
    var vv = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };

    function Lf(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return e === "input" ? !!vv[t.type] : e === "textarea"
    }

    function Uf(t, e, n, i) {
        ja ? Ca ? Ca.push(i) : Ca = [i] : ja = i, e = Ds(e, "onChange"), 0 < e.length && (n = new Ul("onChange", "change", null, n, i), t.push({
            event: n,
            listeners: e
        }))
    }
    var wi = null,
        Di = null;

    function xv(t) {
        bm(t, 0)
    }

    function Hl(t) {
        var e = Si(t);
        if (xf(e)) return t
    }

    function Bf(t, e) {
        if (t === "change") return e
    }
    var Hf = !1;
    if (an) {
        var Ho;
        if (an) {
            var Yo = "oninput" in document;
            if (!Yo) {
                var Yf = document.createElement("div");
                Yf.setAttribute("oninput", "return;"), Yo = typeof Yf.oninput == "function"
            }
            Ho = Yo
        } else Ho = !1;
        Hf = Ho && (!document.documentMode || 9 < document.documentMode)
    }

    function qf() {
        wi && (wi.detachEvent("onpropertychange", Gf), Di = wi = null)
    }

    function Gf(t) {
        if (t.propertyName === "value" && Hl(Di)) {
            var e = [];
            Uf(e, Di, t, Ro(t)), Nf(xv, e)
        }
    }

    function bv(t, e, n) {
        t === "focusin" ? (qf(), wi = e, Di = n, wi.attachEvent("onpropertychange", Gf)) : t === "focusout" && qf()
    }

    function Sv(t) {
        if (t === "selectionchange" || t === "keyup" || t === "keydown") return Hl(Di)
    }

    function Tv(t, e) {
        if (t === "click") return Hl(e)
    }

    function Av(t, e) {
        if (t === "input" || t === "change") return Hl(e)
    }

    function Ev(t, e) {
        return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
    }
    var Se = typeof Object.is == "function" ? Object.is : Ev;

    function ji(t, e) {
        if (Se(t, e)) return !0;
        if (typeof t != "object" || t === null || typeof e != "object" || e === null) return !1;
        var n = Object.keys(t),
            i = Object.keys(e);
        if (n.length !== i.length) return !1;
        for (i = 0; i < n.length; i++) {
            var s = n[i];
            if (!vo.call(e, s) || !Se(t[s], e[s])) return !1
        }
        return !0
    }

    function Xf(t) {
        for (; t && t.firstChild;) t = t.firstChild;
        return t
    }

    function Kf(t, e) {
        var n = Xf(t);
        t = 0;
        for (var i; n;) {
            if (n.nodeType === 3) {
                if (i = t + n.textContent.length, t <= e && i >= e) return {
                    node: n,
                    offset: e - t
                };
                t = i
            }
            t: {
                for (; n;) {
                    if (n.nextSibling) {
                        n = n.nextSibling;
                        break t
                    }
                    n = n.parentNode
                }
                n = void 0
            }
            n = Xf(n)
        }
    }

    function Zf(t, e) {
        return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Zf(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1
    }

    function Qf(t) {
        t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
        for (var e = zl(t.document); e instanceof t.HTMLIFrameElement;) {
            try {
                var n = typeof e.contentWindow.location.href == "string"
            } catch {
                n = !1
            }
            if (n) t = e.contentWindow;
            else break;
            e = zl(t.document)
        }
        return e
    }

    function qo(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true")
    }
    var Mv = an && "documentMode" in document && 11 >= document.documentMode,
        Oa = null,
        Go = null,
        Ci = null,
        Xo = !1;

    function Jf(t, e, n) {
        var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        Xo || Oa == null || Oa !== zl(i) || (i = Oa, "selectionStart" in i && qo(i) ? i = {
            start: i.selectionStart,
            end: i.selectionEnd
        } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
            anchorNode: i.anchorNode,
            anchorOffset: i.anchorOffset,
            focusNode: i.focusNode,
            focusOffset: i.focusOffset
        }), Ci && ji(Ci, i) || (Ci = i, i = Ds(Go, "onSelect"), 0 < i.length && (e = new Ul("onSelect", "select", null, e, n), t.push({
            event: e,
            listeners: i
        }), e.target = Oa)))
    }

    function ea(t, e) {
        var n = {};
        return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n
    }
    var za = {
            animationend: ea("Animation", "AnimationEnd"),
            animationiteration: ea("Animation", "AnimationIteration"),
            animationstart: ea("Animation", "AnimationStart"),
            transitionrun: ea("Transition", "TransitionRun"),
            transitionstart: ea("Transition", "TransitionStart"),
            transitioncancel: ea("Transition", "TransitionCancel"),
            transitionend: ea("Transition", "TransitionEnd")
        },
        Ko = {},
        Ff = {};
    an && (Ff = document.createElement("div").style, "AnimationEvent" in window || (delete za.animationend.animation, delete za.animationiteration.animation, delete za.animationstart.animation), "TransitionEvent" in window || delete za.transitionend.transition);

    function na(t) {
        if (Ko[t]) return Ko[t];
        if (!za[t]) return t;
        var e = za[t],
            n;
        for (n in e)
            if (e.hasOwnProperty(n) && n in Ff) return Ko[t] = e[n];
        return t
    }
    var Pf = na("animationend"),
        Wf = na("animationiteration"),
        $f = na("animationstart"),
        Nv = na("transitionrun"),
        wv = na("transitionstart"),
        Dv = na("transitioncancel"),
        If = na("transitionend"),
        td = new Map,
        Zo = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Zo.push("scrollEnd");

    function Ye(t, e) {
        td.set(t, e), In(e, [t])
    }
    var Yl = typeof reportError == "function" ? reportError : function(t) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                var e = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
                    error: t
                });
                if (!window.dispatchEvent(e)) return
            } else if (typeof process == "object" && typeof process.emit == "function") {
                process.emit("uncaughtException", t);
                return
            }
            console.error(t)
        },
        Re = [],
        _a = 0,
        Qo = 0;

    function ql() {
        for (var t = _a, e = Qo = _a = 0; e < t;) {
            var n = Re[e];
            Re[e++] = null;
            var i = Re[e];
            Re[e++] = null;
            var s = Re[e];
            Re[e++] = null;
            var u = Re[e];
            if (Re[e++] = null, i !== null && s !== null) {
                var f = i.pending;
                f === null ? s.next = s : (s.next = f.next, f.next = s), i.pending = s
            }
            u !== 0 && ed(n, s, u)
        }
    }

    function Gl(t, e, n, i) {
        Re[_a++] = t, Re[_a++] = e, Re[_a++] = n, Re[_a++] = i, Qo |= i, t.lanes |= i, t = t.alternate, t !== null && (t.lanes |= i)
    }

    function Jo(t, e, n, i) {
        return Gl(t, e, n, i), Xl(t)
    }

    function aa(t, e) {
        return Gl(t, null, null, e), Xl(t)
    }

    function ed(t, e, n) {
        t.lanes |= n;
        var i = t.alternate;
        i !== null && (i.lanes |= n);
        for (var s = !1, u = t.return; u !== null;) u.childLanes |= n, i = u.alternate, i !== null && (i.childLanes |= n), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (s = !0)), t = u, u = u.return;
        return t.tag === 3 ? (u = t.stateNode, s && e !== null && (s = 31 - be(n), t = u.hiddenUpdates, i = t[s], i === null ? t[s] = [e] : i.push(e), e.lane = n | 536870912), u) : null
    }

    function Xl(t) {
        if (50 < $i) throw $i = 0, au = null, Error(o(185));
        for (var e = t.return; e !== null;) t = e, e = t.return;
        return t.tag === 3 ? t.stateNode : null
    }
    var Va = {};

    function jv(t, e, n, i) {
        this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
    }

    function Te(t, e, n, i) {
        return new jv(t, e, n, i)
    }

    function Fo(t) {
        return t = t.prototype, !(!t || !t.isReactComponent)
    }

    function ln(t, e) {
        var n = t.alternate;
        return n === null ? (n = Te(t.tag, e, t.key, t.mode), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 65011712, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : {
            lanes: e.lanes,
            firstContext: e.firstContext
        }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n.refCleanup = t.refCleanup, n
    }

    function nd(t, e) {
        t.flags &= 65011714;
        var n = t.alternate;
        return n === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = n.childLanes, t.lanes = n.lanes, t.child = n.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = n.memoizedProps, t.memoizedState = n.memoizedState, t.updateQueue = n.updateQueue, t.type = n.type, e = n.dependencies, t.dependencies = e === null ? null : {
            lanes: e.lanes,
            firstContext: e.firstContext
        }), t
    }

    function Kl(t, e, n, i, s, u) {
        var f = 0;
        if (i = t, typeof t == "function") Fo(t) && (f = 1);
        else if (typeof t == "string") f = _1(t, n, et.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
        else t: switch (t) {
            case rt:
                return t = Te(31, n, e, s), t.elementType = rt, t.lanes = u, t;
            case z:
                return ia(n.children, s, u, e);
            case B:
                f = 8, s |= 24;
                break;
            case k:
                return t = Te(12, n, e, s | 2), t.elementType = k, t.lanes = u, t;
            case $:
                return t = Te(13, n, e, s), t.elementType = $, t.lanes = u, t;
            case at:
                return t = Te(19, n, e, s), t.elementType = at, t.lanes = u, t;
            default:
                if (typeof t == "object" && t !== null) switch (t.$$typeof) {
                    case H:
                        f = 10;
                        break t;
                    case G:
                        f = 9;
                        break t;
                    case q:
                        f = 11;
                        break t;
                    case Z:
                        f = 14;
                        break t;
                    case J:
                        f = 16, i = null;
                        break t
                }
                f = 29, n = Error(o(130, t === null ? "null" : typeof t, "")), i = null
        }
        return e = Te(f, n, e, s), e.elementType = t, e.type = i, e.lanes = u, e
    }

    function ia(t, e, n, i) {
        return t = Te(7, t, i, e), t.lanes = n, t
    }

    function Po(t, e, n) {
        return t = Te(6, t, null, e), t.lanes = n, t
    }

    function ad(t) {
        var e = Te(18, null, null, 0);
        return e.stateNode = t, e
    }

    function Wo(t, e, n) {
        return e = Te(4, t.children !== null ? t.children : [], t.key, e), e.lanes = n, e.stateNode = {
            containerInfo: t.containerInfo,
            pendingChildren: null,
            implementation: t.implementation
        }, e
    }
    var id = new WeakMap;

    function Oe(t, e) {
        if (typeof t == "object" && t !== null) {
            var n = id.get(t);
            return n !== void 0 ? n : (e = {
                value: t,
                source: e,
                stack: nf(e)
            }, id.set(t, e), e)
        }
        return {
            value: t,
            source: e,
            stack: nf(e)
        }
    }
    var ka = [],
        La = 0,
        Zl = null,
        Ri = 0,
        ze = [],
        _e = 0,
        En = null,
        Qe = 1,
        Je = "";

    function sn(t, e) {
        ka[La++] = Ri, ka[La++] = Zl, Zl = t, Ri = e
    }

    function ld(t, e, n) {
        ze[_e++] = Qe, ze[_e++] = Je, ze[_e++] = En, En = t;
        var i = Qe;
        t = Je;
        var s = 32 - be(i) - 1;
        i &= ~(1 << s), n += 1;
        var u = 32 - be(e) + s;
        if (30 < u) {
            var f = s - s % 5;
            u = (i & (1 << f) - 1).toString(32), i >>= f, s -= f, Qe = 1 << 32 - be(e) + s | n << s | i, Je = u + t
        } else Qe = 1 << u | n << s | i, Je = t
    }

    function $o(t) {
        t.return !== null && (sn(t, 1), ld(t, 1, 0))
    }

    function Io(t) {
        for (; t === Zl;) Zl = ka[--La], ka[La] = null, Ri = ka[--La], ka[La] = null;
        for (; t === En;) En = ze[--_e], ze[_e] = null, Je = ze[--_e], ze[_e] = null, Qe = ze[--_e], ze[_e] = null
    }

    function sd(t, e) {
        ze[_e++] = Qe, ze[_e++] = Je, ze[_e++] = En, Qe = e.id, Je = e.overflow, En = t
    }
    var te = null,
        Vt = null,
        bt = !1,
        Mn = null,
        Ve = !1,
        tr = Error(o(519));

    function Nn(t) {
        var e = Error(o(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
        throw Oi(Oe(e, t)), tr
    }

    function od(t) {
        var e = t.stateNode,
            n = t.type,
            i = t.memoizedProps;
        switch (e[It] = t, e[fe] = i, n) {
            case "dialog":
                yt("cancel", e), yt("close", e);
                break;
            case "iframe":
            case "object":
            case "embed":
                yt("load", e);
                break;
            case "video":
            case "audio":
                for (n = 0; n < tl.length; n++) yt(tl[n], e);
                break;
            case "source":
                yt("error", e);
                break;
            case "img":
            case "image":
            case "link":
                yt("error", e), yt("load", e);
                break;
            case "details":
                yt("toggle", e);
                break;
            case "input":
                yt("invalid", e), bf(e, i.value, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name, !0);
                break;
            case "select":
                yt("invalid", e);
                break;
            case "textarea":
                yt("invalid", e), Tf(e, i.value, i.defaultValue, i.children)
        }
        n = i.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || i.suppressHydrationWarning === !0 || Em(e.textContent, n) ? (i.popover != null && (yt("beforetoggle", e), yt("toggle", e)), i.onScroll != null && yt("scroll", e), i.onScrollEnd != null && yt("scrollend", e), i.onClick != null && (e.onclick = nn), e = !0) : e = !1, e || Nn(t, !0)
    }

    function rd(t) {
        for (te = t.return; te;) switch (te.tag) {
            case 5:
            case 31:
            case 13:
                Ve = !1;
                return;
            case 27:
            case 3:
                Ve = !0;
                return;
            default:
                te = te.return
        }
    }

    function Ua(t) {
        if (t !== te) return !1;
        if (!bt) return rd(t), bt = !0, !1;
        var e = t.tag,
            n;
        if ((n = e !== 3 && e !== 27) && ((n = e === 5) && (n = t.type, n = !(n !== "form" && n !== "button") || vu(t.type, t.memoizedProps)), n = !n), n && Vt && Nn(t), rd(t), e === 13) {
            if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(317));
            Vt = zm(t)
        } else if (e === 31) {
            if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(317));
            Vt = zm(t)
        } else e === 27 ? (e = Vt, Hn(t.type) ? (t = Au, Au = null, Vt = t) : Vt = e) : Vt = te ? Le(t.stateNode.nextSibling) : null;
        return !0
    }

    function la() {
        Vt = te = null, bt = !1
    }

    function er() {
        var t = Mn;
        return t !== null && (ye === null ? ye = t : ye.push.apply(ye, t), Mn = null), t
    }

    function Oi(t) {
        Mn === null ? Mn = [t] : Mn.push(t)
    }
    var nr = E(null),
        sa = null,
        on = null;

    function wn(t, e, n) {
        Q(nr, e._currentValue), e._currentValue = n
    }

    function rn(t) {
        t._currentValue = nr.current, U(nr)
    }

    function ar(t, e, n) {
        for (; t !== null;) {
            var i = t.alternate;
            if ((t.childLanes & e) !== e ? (t.childLanes |= e, i !== null && (i.childLanes |= e)) : i !== null && (i.childLanes & e) !== e && (i.childLanes |= e), t === n) break;
            t = t.return
        }
    }

    function ir(t, e, n, i) {
        var s = t.child;
        for (s !== null && (s.return = t); s !== null;) {
            var u = s.dependencies;
            if (u !== null) {
                var f = s.child;
                u = u.firstContext;
                t: for (; u !== null;) {
                    var g = u;
                    u = s;
                    for (var T = 0; T < e.length; T++)
                        if (g.context === e[T]) {
                            u.lanes |= n, g = u.alternate, g !== null && (g.lanes |= n), ar(u.return, n, t), i || (f = null);
                            break t
                        } u = g.next
                }
            } else if (s.tag === 18) {
                if (f = s.return, f === null) throw Error(o(341));
                f.lanes |= n, u = f.alternate, u !== null && (u.lanes |= n), ar(f, n, t), f = null
            } else f = s.child;
            if (f !== null) f.return = s;
            else
                for (f = s; f !== null;) {
                    if (f === t) {
                        f = null;
                        break
                    }
                    if (s = f.sibling, s !== null) {
                        s.return = f.return, f = s;
                        break
                    }
                    f = f.return
                }
            s = f
        }
    }

    function Ba(t, e, n, i) {
        t = null;
        for (var s = e, u = !1; s !== null;) {
            if (!u) {
                if ((s.flags & 524288) !== 0) u = !0;
                else if ((s.flags & 262144) !== 0) break
            }
            if (s.tag === 10) {
                var f = s.alternate;
                if (f === null) throw Error(o(387));
                if (f = f.memoizedProps, f !== null) {
                    var g = s.type;
                    Se(s.pendingProps.value, f.value) || (t !== null ? t.push(g) : t = [g])
                }
            } else if (s === Et.current) {
                if (f = s.alternate, f === null) throw Error(o(387));
                f.memoizedState.memoizedState !== s.memoizedState.memoizedState && (t !== null ? t.push(ll) : t = [ll])
            }
            s = s.return
        }
        t !== null && ir(e, t, n, i), e.flags |= 262144
    }

    function Ql(t) {
        for (t = t.firstContext; t !== null;) {
            if (!Se(t.context._currentValue, t.memoizedValue)) return !0;
            t = t.next
        }
        return !1
    }

    function oa(t) {
        sa = t, on = null, t = t.dependencies, t !== null && (t.firstContext = null)
    }

    function ee(t) {
        return ud(sa, t)
    }

    function Jl(t, e) {
        return sa === null && oa(t), ud(t, e)
    }

    function ud(t, e) {
        var n = e._currentValue;
        if (e = {
                context: e,
                memoizedValue: n,
                next: null
            }, on === null) {
            if (t === null) throw Error(o(308));
            on = e, t.dependencies = {
                lanes: 0,
                firstContext: e
            }, t.flags |= 524288
        } else on = on.next = e;
        return n
    }
    var Cv = typeof AbortController < "u" ? AbortController : function() {
            var t = [],
                e = this.signal = {
                    aborted: !1,
                    addEventListener: function(n, i) {
                        t.push(i)
                    }
                };
            this.abort = function() {
                e.aborted = !0, t.forEach(function(n) {
                    return n()
                })
            }
        },
        Rv = a.unstable_scheduleCallback,
        Ov = a.unstable_NormalPriority,
        Xt = {
            $$typeof: H,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };

    function lr() {
        return {
            controller: new Cv,
            data: new Map,
            refCount: 0
        }
    }

    function zi(t) {
        t.refCount--, t.refCount === 0 && Rv(Ov, function() {
            t.controller.abort()
        })
    }
    var _i = null,
        sr = 0,
        Ha = 0,
        Ya = null;

    function zv(t, e) {
        if (_i === null) {
            var n = _i = [];
            sr = 0, Ha = uu(), Ya = {
                status: "pending",
                value: void 0,
                then: function(i) {
                    n.push(i)
                }
            }
        }
        return sr++, e.then(cd, cd), e
    }

    function cd() {
        if (--sr === 0 && _i !== null) {
            Ya !== null && (Ya.status = "fulfilled");
            var t = _i;
            _i = null, Ha = 0, Ya = null;
            for (var e = 0; e < t.length; e++)(0, t[e])()
        }
    }

    function _v(t, e) {
        var n = [],
            i = {
                status: "pending",
                value: null,
                reason: null,
                then: function(s) {
                    n.push(s)
                }
            };
        return t.then(function() {
            i.status = "fulfilled", i.value = e;
            for (var s = 0; s < n.length; s++)(0, n[s])(e)
        }, function(s) {
            for (i.status = "rejected", i.reason = s, s = 0; s < n.length; s++)(0, n[s])(void 0)
        }), i
    }
    var fd = O.S;
    O.S = function(t, e) {
        Jh = ve(), typeof e == "object" && e !== null && typeof e.then == "function" && zv(t, e), fd !== null && fd(t, e)
    };
    var ra = E(null);

    function or() {
        var t = ra.current;
        return t !== null ? t : Rt.pooledCache
    }

    function Fl(t, e) {
        e === null ? Q(ra, ra.current) : Q(ra, e.pool)
    }

    function dd() {
        var t = or();
        return t === null ? null : {
            parent: Xt._currentValue,
            pool: t
        }
    }
    var qa = Error(o(460)),
        rr = Error(o(474)),
        Pl = Error(o(542)),
        Wl = {
            then: function() {}
        };

    function hd(t) {
        return t = t.status, t === "fulfilled" || t === "rejected"
    }

    function md(t, e, n) {
        switch (n = t[n], n === void 0 ? t.push(e) : n !== e && (e.then(nn, nn), e = n), e.status) {
            case "fulfilled":
                return e.value;
            case "rejected":
                throw t = e.reason, yd(t), t;
            default:
                if (typeof e.status == "string") e.then(nn, nn);
                else {
                    if (t = Rt, t !== null && 100 < t.shellSuspendCounter) throw Error(o(482));
                    t = e, t.status = "pending", t.then(function(i) {
                        if (e.status === "pending") {
                            var s = e;
                            s.status = "fulfilled", s.value = i
                        }
                    }, function(i) {
                        if (e.status === "pending") {
                            var s = e;
                            s.status = "rejected", s.reason = i
                        }
                    })
                }
                switch (e.status) {
                    case "fulfilled":
                        return e.value;
                    case "rejected":
                        throw t = e.reason, yd(t), t
                }
                throw ca = e, qa
        }
    }

    function ua(t) {
        try {
            var e = t._init;
            return e(t._payload)
        } catch (n) {
            throw n !== null && typeof n == "object" && typeof n.then == "function" ? (ca = n, qa) : n
        }
    }
    var ca = null;

    function pd() {
        if (ca === null) throw Error(o(459));
        var t = ca;
        return ca = null, t
    }

    function yd(t) {
        if (t === qa || t === Pl) throw Error(o(483))
    }
    var Ga = null,
        Vi = 0;

    function $l(t) {
        var e = Vi;
        return Vi += 1, Ga === null && (Ga = []), md(Ga, t, e)
    }

    function ki(t, e) {
        e = e.props.ref, t.ref = e !== void 0 ? e : null
    }

    function Il(t, e) {
        throw e.$$typeof === S ? Error(o(525)) : (t = Object.prototype.toString.call(e), Error(o(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)))
    }

    function gd(t) {
        function e(N, A) {
            if (t) {
                var w = N.deletions;
                w === null ? (N.deletions = [A], N.flags |= 16) : w.push(A)
            }
        }

        function n(N, A) {
            if (!t) return null;
            for (; A !== null;) e(N, A), A = A.sibling;
            return null
        }

        function i(N) {
            for (var A = new Map; N !== null;) N.key !== null ? A.set(N.key, N) : A.set(N.index, N), N = N.sibling;
            return A
        }

        function s(N, A) {
            return N = ln(N, A), N.index = 0, N.sibling = null, N
        }

        function u(N, A, w) {
            return N.index = w, t ? (w = N.alternate, w !== null ? (w = w.index, w < A ? (N.flags |= 67108866, A) : w) : (N.flags |= 67108866, A)) : (N.flags |= 1048576, A)
        }

        function f(N) {
            return t && N.alternate === null && (N.flags |= 67108866), N
        }

        function g(N, A, w, V) {
            return A === null || A.tag !== 6 ? (A = Po(w, N.mode, V), A.return = N, A) : (A = s(A, w), A.return = N, A)
        }

        function T(N, A, w, V) {
            var it = w.type;
            return it === z ? _(N, A, w.props.children, V, w.key) : A !== null && (A.elementType === it || typeof it == "object" && it !== null && it.$$typeof === J && ua(it) === A.type) ? (A = s(A, w.props), ki(A, w), A.return = N, A) : (A = Kl(w.type, w.key, w.props, null, N.mode, V), ki(A, w), A.return = N, A)
        }

        function D(N, A, w, V) {
            return A === null || A.tag !== 4 || A.stateNode.containerInfo !== w.containerInfo || A.stateNode.implementation !== w.implementation ? (A = Wo(w, N.mode, V), A.return = N, A) : (A = s(A, w.children || []), A.return = N, A)
        }

        function _(N, A, w, V, it) {
            return A === null || A.tag !== 7 ? (A = ia(w, N.mode, V, it), A.return = N, A) : (A = s(A, w), A.return = N, A)
        }

        function L(N, A, w) {
            if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint") return A = Po("" + A, N.mode, w), A.return = N, A;
            if (typeof A == "object" && A !== null) {
                switch (A.$$typeof) {
                    case j:
                        return w = Kl(A.type, A.key, A.props, null, N.mode, w), ki(w, A), w.return = N, w;
                    case M:
                        return A = Wo(A, N.mode, w), A.return = N, A;
                    case J:
                        return A = ua(A), L(N, A, w)
                }
                if (Mt(A) || tt(A)) return A = ia(A, N.mode, w, null), A.return = N, A;
                if (typeof A.then == "function") return L(N, $l(A), w);
                if (A.$$typeof === H) return L(N, Jl(N, A), w);
                Il(N, A)
            }
            return null
        }

        function C(N, A, w, V) {
            var it = A !== null ? A.key : null;
            if (typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint") return it !== null ? null : g(N, A, "" + w, V);
            if (typeof w == "object" && w !== null) {
                switch (w.$$typeof) {
                    case j:
                        return w.key === it ? T(N, A, w, V) : null;
                    case M:
                        return w.key === it ? D(N, A, w, V) : null;
                    case J:
                        return w = ua(w), C(N, A, w, V)
                }
                if (Mt(w) || tt(w)) return it !== null ? null : _(N, A, w, V, null);
                if (typeof w.then == "function") return C(N, A, $l(w), V);
                if (w.$$typeof === H) return C(N, A, Jl(N, w), V);
                Il(N, w)
            }
            return null
        }

        function R(N, A, w, V, it) {
            if (typeof V == "string" && V !== "" || typeof V == "number" || typeof V == "bigint") return N = N.get(w) || null, g(A, N, "" + V, it);
            if (typeof V == "object" && V !== null) {
                switch (V.$$typeof) {
                    case j:
                        return N = N.get(V.key === null ? w : V.key) || null, T(A, N, V, it);
                    case M:
                        return N = N.get(V.key === null ? w : V.key) || null, D(A, N, V, it);
                    case J:
                        return V = ua(V), R(N, A, w, V, it)
                }
                if (Mt(V) || tt(V)) return N = N.get(w) || null, _(A, N, V, it, null);
                if (typeof V.then == "function") return R(N, A, w, $l(V), it);
                if (V.$$typeof === H) return R(N, A, w, Jl(A, V), it);
                Il(A, V)
            }
            return null
        }

        function P(N, A, w, V) {
            for (var it = null, St = null, nt = A, ht = A = 0, vt = null; nt !== null && ht < w.length; ht++) {
                nt.index > ht ? (vt = nt, nt = null) : vt = nt.sibling;
                var Tt = C(N, nt, w[ht], V);
                if (Tt === null) {
                    nt === null && (nt = vt);
                    break
                }
                t && nt && Tt.alternate === null && e(N, nt), A = u(Tt, A, ht), St === null ? it = Tt : St.sibling = Tt, St = Tt, nt = vt
            }
            if (ht === w.length) return n(N, nt), bt && sn(N, ht), it;
            if (nt === null) {
                for (; ht < w.length; ht++) nt = L(N, w[ht], V), nt !== null && (A = u(nt, A, ht), St === null ? it = nt : St.sibling = nt, St = nt);
                return bt && sn(N, ht), it
            }
            for (nt = i(nt); ht < w.length; ht++) vt = R(nt, N, ht, w[ht], V), vt !== null && (t && vt.alternate !== null && nt.delete(vt.key === null ? ht : vt.key), A = u(vt, A, ht), St === null ? it = vt : St.sibling = vt, St = vt);
            return t && nt.forEach(function(Kn) {
                return e(N, Kn)
            }), bt && sn(N, ht), it
        }

        function lt(N, A, w, V) {
            if (w == null) throw Error(o(151));
            for (var it = null, St = null, nt = A, ht = A = 0, vt = null, Tt = w.next(); nt !== null && !Tt.done; ht++, Tt = w.next()) {
                nt.index > ht ? (vt = nt, nt = null) : vt = nt.sibling;
                var Kn = C(N, nt, Tt.value, V);
                if (Kn === null) {
                    nt === null && (nt = vt);
                    break
                }
                t && nt && Kn.alternate === null && e(N, nt), A = u(Kn, A, ht), St === null ? it = Kn : St.sibling = Kn, St = Kn, nt = vt
            }
            if (Tt.done) return n(N, nt), bt && sn(N, ht), it;
            if (nt === null) {
                for (; !Tt.done; ht++, Tt = w.next()) Tt = L(N, Tt.value, V), Tt !== null && (A = u(Tt, A, ht), St === null ? it = Tt : St.sibling = Tt, St = Tt);
                return bt && sn(N, ht), it
            }
            for (nt = i(nt); !Tt.done; ht++, Tt = w.next()) Tt = R(nt, N, ht, Tt.value, V), Tt !== null && (t && Tt.alternate !== null && nt.delete(Tt.key === null ? ht : Tt.key), A = u(Tt, A, ht), St === null ? it = Tt : St.sibling = Tt, St = Tt);
            return t && nt.forEach(function(K1) {
                return e(N, K1)
            }), bt && sn(N, ht), it
        }

        function Ct(N, A, w, V) {
            if (typeof w == "object" && w !== null && w.type === z && w.key === null && (w = w.props.children), typeof w == "object" && w !== null) {
                switch (w.$$typeof) {
                    case j:
                        t: {
                            for (var it = w.key; A !== null;) {
                                if (A.key === it) {
                                    if (it = w.type, it === z) {
                                        if (A.tag === 7) {
                                            n(N, A.sibling), V = s(A, w.props.children), V.return = N, N = V;
                                            break t
                                        }
                                    } else if (A.elementType === it || typeof it == "object" && it !== null && it.$$typeof === J && ua(it) === A.type) {
                                        n(N, A.sibling), V = s(A, w.props), ki(V, w), V.return = N, N = V;
                                        break t
                                    }
                                    n(N, A);
                                    break
                                } else e(N, A);
                                A = A.sibling
                            }
                            w.type === z ? (V = ia(w.props.children, N.mode, V, w.key), V.return = N, N = V) : (V = Kl(w.type, w.key, w.props, null, N.mode, V), ki(V, w), V.return = N, N = V)
                        }
                        return f(N);
                    case M:
                        t: {
                            for (it = w.key; A !== null;) {
                                if (A.key === it)
                                    if (A.tag === 4 && A.stateNode.containerInfo === w.containerInfo && A.stateNode.implementation === w.implementation) {
                                        n(N, A.sibling), V = s(A, w.children || []), V.return = N, N = V;
                                        break t
                                    } else {
                                        n(N, A);
                                        break
                                    }
                                else e(N, A);
                                A = A.sibling
                            }
                            V = Wo(w, N.mode, V),
                            V.return = N,
                            N = V
                        }
                        return f(N);
                    case J:
                        return w = ua(w), Ct(N, A, w, V)
                }
                if (Mt(w)) return P(N, A, w, V);
                if (tt(w)) {
                    if (it = tt(w), typeof it != "function") throw Error(o(150));
                    return w = it.call(w), lt(N, A, w, V)
                }
                if (typeof w.then == "function") return Ct(N, A, $l(w), V);
                if (w.$$typeof === H) return Ct(N, A, Jl(N, w), V);
                Il(N, w)
            }
            return typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint" ? (w = "" + w, A !== null && A.tag === 6 ? (n(N, A.sibling), V = s(A, w), V.return = N, N = V) : (n(N, A), V = Po(w, N.mode, V), V.return = N, N = V), f(N)) : n(N, A)
        }
        return function(N, A, w, V) {
            try {
                Vi = 0;
                var it = Ct(N, A, w, V);
                return Ga = null, it
            } catch (nt) {
                if (nt === qa || nt === Pl) throw nt;
                var St = Te(29, nt, null, N.mode);
                return St.lanes = V, St.return = N, St
            } finally {}
        }
    }
    var fa = gd(!0),
        vd = gd(!1),
        Dn = !1;

    function ur(t) {
        t.updateQueue = {
            baseState: t.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }

    function cr(t, e) {
        t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
            baseState: t.baseState,
            firstBaseUpdate: t.firstBaseUpdate,
            lastBaseUpdate: t.lastBaseUpdate,
            shared: t.shared,
            callbacks: null
        })
    }

    function jn(t) {
        return {
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }

    function Cn(t, e, n) {
        var i = t.updateQueue;
        if (i === null) return null;
        if (i = i.shared, (At & 2) !== 0) {
            var s = i.pending;
            return s === null ? e.next = e : (e.next = s.next, s.next = e), i.pending = e, e = Xl(t), ed(t, null, n), e
        }
        return Gl(t, i, e, n), Xl(t)
    }

    function Li(t, e, n) {
        if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194048) !== 0)) {
            var i = e.lanes;
            i &= t.pendingLanes, n |= i, e.lanes = n, uf(t, n)
        }
    }

    function fr(t, e) {
        var n = t.updateQueue,
            i = t.alternate;
        if (i !== null && (i = i.updateQueue, n === i)) {
            var s = null,
                u = null;
            if (n = n.firstBaseUpdate, n !== null) {
                do {
                    var f = {
                        lane: n.lane,
                        tag: n.tag,
                        payload: n.payload,
                        callback: null,
                        next: null
                    };
                    u === null ? s = u = f : u = u.next = f, n = n.next
                } while (n !== null);
                u === null ? s = u = e : u = u.next = e
            } else s = u = e;
            n = {
                baseState: i.baseState,
                firstBaseUpdate: s,
                lastBaseUpdate: u,
                shared: i.shared,
                callbacks: i.callbacks
            }, t.updateQueue = n;
            return
        }
        t = n.lastBaseUpdate, t === null ? n.firstBaseUpdate = e : t.next = e, n.lastBaseUpdate = e
    }
    var dr = !1;

    function Ui() {
        if (dr) {
            var t = Ya;
            if (t !== null) throw t
        }
    }

    function Bi(t, e, n, i) {
        dr = !1;
        var s = t.updateQueue;
        Dn = !1;
        var u = s.firstBaseUpdate,
            f = s.lastBaseUpdate,
            g = s.shared.pending;
        if (g !== null) {
            s.shared.pending = null;
            var T = g,
                D = T.next;
            T.next = null, f === null ? u = D : f.next = D, f = T;
            var _ = t.alternate;
            _ !== null && (_ = _.updateQueue, g = _.lastBaseUpdate, g !== f && (g === null ? _.firstBaseUpdate = D : g.next = D, _.lastBaseUpdate = T))
        }
        if (u !== null) {
            var L = s.baseState;
            f = 0, _ = D = T = null, g = u;
            do {
                var C = g.lane & -536870913,
                    R = C !== g.lane;
                if (R ? (gt & C) === C : (i & C) === C) {
                    C !== 0 && C === Ha && (dr = !0), _ !== null && (_ = _.next = {
                        lane: 0,
                        tag: g.tag,
                        payload: g.payload,
                        callback: null,
                        next: null
                    });
                    t: {
                        var P = t,
                            lt = g;C = e;
                        var Ct = n;
                        switch (lt.tag) {
                            case 1:
                                if (P = lt.payload, typeof P == "function") {
                                    L = P.call(Ct, L, C);
                                    break t
                                }
                                L = P;
                                break t;
                            case 3:
                                P.flags = P.flags & -65537 | 128;
                            case 0:
                                if (P = lt.payload, C = typeof P == "function" ? P.call(Ct, L, C) : P, C == null) break t;
                                L = b({}, L, C);
                                break t;
                            case 2:
                                Dn = !0
                        }
                    }
                    C = g.callback, C !== null && (t.flags |= 64, R && (t.flags |= 8192), R = s.callbacks, R === null ? s.callbacks = [C] : R.push(C))
                } else R = {
                    lane: C,
                    tag: g.tag,
                    payload: g.payload,
                    callback: g.callback,
                    next: null
                }, _ === null ? (D = _ = R, T = L) : _ = _.next = R, f |= C;
                if (g = g.next, g === null) {
                    if (g = s.shared.pending, g === null) break;
                    R = g, g = R.next, R.next = null, s.lastBaseUpdate = R, s.shared.pending = null
                }
            } while (!0);
            _ === null && (T = L), s.baseState = T, s.firstBaseUpdate = D, s.lastBaseUpdate = _, u === null && (s.shared.lanes = 0), Vn |= f, t.lanes = f, t.memoizedState = L
        }
    }

    function xd(t, e) {
        if (typeof t != "function") throw Error(o(191, t));
        t.call(e)
    }

    function bd(t, e) {
        var n = t.callbacks;
        if (n !== null)
            for (t.callbacks = null, t = 0; t < n.length; t++) xd(n[t], e)
    }
    var Xa = E(null),
        ts = E(0);

    function Sd(t, e) {
        t = gn, Q(ts, t), Q(Xa, e), gn = t | e.baseLanes
    }

    function hr() {
        Q(ts, gn), Q(Xa, Xa.current)
    }

    function mr() {
        gn = ts.current, U(Xa), U(ts)
    }
    var Ae = E(null),
        ke = null;

    function Rn(t) {
        var e = t.alternate;
        Q(qt, qt.current & 1), Q(Ae, t), ke === null && (e === null || Xa.current !== null || e.memoizedState !== null) && (ke = t)
    }

    function pr(t) {
        Q(qt, qt.current), Q(Ae, t), ke === null && (ke = t)
    }

    function Td(t) {
        t.tag === 22 ? (Q(qt, qt.current), Q(Ae, t), ke === null && (ke = t)) : On()
    }

    function On() {
        Q(qt, qt.current), Q(Ae, Ae.current)
    }

    function Ee(t) {
        U(Ae), ke === t && (ke = null), U(qt)
    }
    var qt = E(0);

    function es(t) {
        for (var e = t; e !== null;) {
            if (e.tag === 13) {
                var n = e.memoizedState;
                if (n !== null && (n = n.dehydrated, n === null || Su(n) || Tu(n))) return e
            } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
                if ((e.flags & 128) !== 0) return e
            } else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) return null;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        return null
    }
    var un = 0,
        ft = null,
        Dt = null,
        Kt = null,
        ns = !1,
        Ka = !1,
        da = !1,
        as = 0,
        Hi = 0,
        Za = null,
        Vv = 0;

    function Ut() {
        throw Error(o(321))
    }

    function yr(t, e) {
        if (e === null) return !1;
        for (var n = 0; n < e.length && n < t.length; n++)
            if (!Se(t[n], e[n])) return !1;
        return !0
    }

    function gr(t, e, n, i, s, u) {
        return un = u, ft = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, O.H = t === null || t.memoizedState === null ? lh : Or, da = !1, u = n(i, s), da = !1, Ka && (u = Ed(e, n, i, s)), Ad(t), u
    }

    function Ad(t) {
        O.H = Gi;
        var e = Dt !== null && Dt.next !== null;
        if (un = 0, Kt = Dt = ft = null, ns = !1, Hi = 0, Za = null, e) throw Error(o(300));
        t === null || Zt || (t = t.dependencies, t !== null && Ql(t) && (Zt = !0))
    }

    function Ed(t, e, n, i) {
        ft = t;
        var s = 0;
        do {
            if (Ka && (Za = null), Hi = 0, Ka = !1, 25 <= s) throw Error(o(301));
            if (s += 1, Kt = Dt = null, t.updateQueue != null) {
                var u = t.updateQueue;
                u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0)
            }
            O.H = sh, u = e(n, i)
        } while (Ka);
        return u
    }

    function kv() {
        var t = O.H,
            e = t.useState()[0];
        return e = typeof e.then == "function" ? Yi(e) : e, t = t.useState()[0], (Dt !== null ? Dt.memoizedState : null) !== t && (ft.flags |= 1024), e
    }

    function vr() {
        var t = as !== 0;
        return as = 0, t
    }

    function xr(t, e, n) {
        e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~n
    }

    function br(t) {
        if (ns) {
            for (t = t.memoizedState; t !== null;) {
                var e = t.queue;
                e !== null && (e.pending = null), t = t.next
            }
            ns = !1
        }
        un = 0, Kt = Dt = ft = null, Ka = !1, Hi = as = 0, Za = null
    }

    function re() {
        var t = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Kt === null ? ft.memoizedState = Kt = t : Kt = Kt.next = t, Kt
    }

    function Gt() {
        if (Dt === null) {
            var t = ft.alternate;
            t = t !== null ? t.memoizedState : null
        } else t = Dt.next;
        var e = Kt === null ? ft.memoizedState : Kt.next;
        if (e !== null) Kt = e, Dt = t;
        else {
            if (t === null) throw ft.alternate === null ? Error(o(467)) : Error(o(310));
            Dt = t, t = {
                memoizedState: Dt.memoizedState,
                baseState: Dt.baseState,
                baseQueue: Dt.baseQueue,
                queue: Dt.queue,
                next: null
            }, Kt === null ? ft.memoizedState = Kt = t : Kt = Kt.next = t
        }
        return Kt
    }

    function is() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }

    function Yi(t) {
        var e = Hi;
        return Hi += 1, Za === null && (Za = []), t = md(Za, t, e), e = ft, (Kt === null ? e.memoizedState : Kt.next) === null && (e = e.alternate, O.H = e === null || e.memoizedState === null ? lh : Or), t
    }

    function ls(t) {
        if (t !== null && typeof t == "object") {
            if (typeof t.then == "function") return Yi(t);
            if (t.$$typeof === H) return ee(t)
        }
        throw Error(o(438, String(t)))
    }

    function Sr(t) {
        var e = null,
            n = ft.updateQueue;
        if (n !== null && (e = n.memoCache), e == null) {
            var i = ft.alternate;
            i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (e = {
                data: i.data.map(function(s) {
                    return s.slice()
                }),
                index: 0
            })))
        }
        if (e == null && (e = {
                data: [],
                index: 0
            }), n === null && (n = is(), ft.updateQueue = n), n.memoCache = e, n = e.data[e.index], n === void 0)
            for (n = e.data[e.index] = Array(t), i = 0; i < t; i++) n[i] = Y;
        return e.index++, n
    }

    function cn(t, e) {
        return typeof e == "function" ? e(t) : e
    }

    function ss(t) {
        var e = Gt();
        return Tr(e, Dt, t)
    }

    function Tr(t, e, n) {
        var i = t.queue;
        if (i === null) throw Error(o(311));
        i.lastRenderedReducer = n;
        var s = t.baseQueue,
            u = i.pending;
        if (u !== null) {
            if (s !== null) {
                var f = s.next;
                s.next = u.next, u.next = f
            }
            e.baseQueue = s = u, i.pending = null
        }
        if (u = t.baseState, s === null) t.memoizedState = u;
        else {
            e = s.next;
            var g = f = null,
                T = null,
                D = e,
                _ = !1;
            do {
                var L = D.lane & -536870913;
                if (L !== D.lane ? (gt & L) === L : (un & L) === L) {
                    var C = D.revertLane;
                    if (C === 0) T !== null && (T = T.next = {
                        lane: 0,
                        revertLane: 0,
                        gesture: null,
                        action: D.action,
                        hasEagerState: D.hasEagerState,
                        eagerState: D.eagerState,
                        next: null
                    }), L === Ha && (_ = !0);
                    else if ((un & C) === C) {
                        D = D.next, C === Ha && (_ = !0);
                        continue
                    } else L = {
                        lane: 0,
                        revertLane: D.revertLane,
                        gesture: null,
                        action: D.action,
                        hasEagerState: D.hasEagerState,
                        eagerState: D.eagerState,
                        next: null
                    }, T === null ? (g = T = L, f = u) : T = T.next = L, ft.lanes |= C, Vn |= C;
                    L = D.action, da && n(u, L), u = D.hasEagerState ? D.eagerState : n(u, L)
                } else C = {
                    lane: L,
                    revertLane: D.revertLane,
                    gesture: D.gesture,
                    action: D.action,
                    hasEagerState: D.hasEagerState,
                    eagerState: D.eagerState,
                    next: null
                }, T === null ? (g = T = C, f = u) : T = T.next = C, ft.lanes |= L, Vn |= L;
                D = D.next
            } while (D !== null && D !== e);
            if (T === null ? f = u : T.next = g, !Se(u, t.memoizedState) && (Zt = !0, _ && (n = Ya, n !== null))) throw n;
            t.memoizedState = u, t.baseState = f, t.baseQueue = T, i.lastRenderedState = u
        }
        return s === null && (i.lanes = 0), [t.memoizedState, i.dispatch]
    }

    function Ar(t) {
        var e = Gt(),
            n = e.queue;
        if (n === null) throw Error(o(311));
        n.lastRenderedReducer = t;
        var i = n.dispatch,
            s = n.pending,
            u = e.memoizedState;
        if (s !== null) {
            n.pending = null;
            var f = s = s.next;
            do u = t(u, f.action), f = f.next; while (f !== s);
            Se(u, e.memoizedState) || (Zt = !0), e.memoizedState = u, e.baseQueue === null && (e.baseState = u), n.lastRenderedState = u
        }
        return [u, i]
    }

    function Md(t, e, n) {
        var i = ft,
            s = Gt(),
            u = bt;
        if (u) {
            if (n === void 0) throw Error(o(407));
            n = n()
        } else n = e();
        var f = !Se((Dt || s).memoizedState, n);
        if (f && (s.memoizedState = n, Zt = !0), s = s.queue, Nr(Dd.bind(null, i, s, t), [t]), s.getSnapshot !== e || f || Kt !== null && Kt.memoizedState.tag & 1) {
            if (i.flags |= 2048, Qa(9, {
                    destroy: void 0
                }, wd.bind(null, i, s, n, e), null), Rt === null) throw Error(o(349));
            u || (un & 127) !== 0 || Nd(i, e, n)
        }
        return n
    }

    function Nd(t, e, n) {
        t.flags |= 16384, t = {
            getSnapshot: e,
            value: n
        }, e = ft.updateQueue, e === null ? (e = is(), ft.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t))
    }

    function wd(t, e, n, i) {
        e.value = n, e.getSnapshot = i, jd(e) && Cd(t)
    }

    function Dd(t, e, n) {
        return n(function() {
            jd(e) && Cd(t)
        })
    }

    function jd(t) {
        var e = t.getSnapshot;
        t = t.value;
        try {
            var n = e();
            return !Se(t, n)
        } catch {
            return !0
        }
    }

    function Cd(t) {
        var e = aa(t, 2);
        e !== null && ge(e, t, 2)
    }

    function Er(t) {
        var e = re();
        if (typeof t == "function") {
            var n = t;
            if (t = n(), da) {
                Sn(!0);
                try {
                    n()
                } finally {
                    Sn(!1)
                }
            }
        }
        return e.memoizedState = e.baseState = t, e.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: cn,
            lastRenderedState: t
        }, e
    }

    function Rd(t, e, n, i) {
        return t.baseState = n, Tr(t, Dt, typeof i == "function" ? i : cn)
    }

    function Lv(t, e, n, i, s) {
        if (us(t)) throw Error(o(485));
        if (t = e.action, t !== null) {
            var u = {
                payload: s,
                action: t,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(f) {
                    u.listeners.push(f)
                }
            };
            O.T !== null ? n(!0) : u.isTransition = !1, i(u), n = e.pending, n === null ? (u.next = e.pending = u, Od(e, u)) : (u.next = n.next, e.pending = n.next = u)
        }
    }

    function Od(t, e) {
        var n = e.action,
            i = e.payload,
            s = t.state;
        if (e.isTransition) {
            var u = O.T,
                f = {};
            O.T = f;
            try {
                var g = n(s, i),
                    T = O.S;
                T !== null && T(f, g), zd(t, e, g)
            } catch (D) {
                Mr(t, e, D)
            } finally {
                u !== null && f.types !== null && (u.types = f.types), O.T = u
            }
        } else try {
            u = n(s, i), zd(t, e, u)
        } catch (D) {
            Mr(t, e, D)
        }
    }

    function zd(t, e, n) {
        n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(function(i) {
            _d(t, e, i)
        }, function(i) {
            return Mr(t, e, i)
        }) : _d(t, e, n)
    }

    function _d(t, e, n) {
        e.status = "fulfilled", e.value = n, Vd(e), t.state = n, e = t.pending, e !== null && (n = e.next, n === e ? t.pending = null : (n = n.next, e.next = n, Od(t, n)))
    }

    function Mr(t, e, n) {
        var i = t.pending;
        if (t.pending = null, i !== null) {
            i = i.next;
            do e.status = "rejected", e.reason = n, Vd(e), e = e.next; while (e !== i)
        }
        t.action = null
    }

    function Vd(t) {
        t = t.listeners;
        for (var e = 0; e < t.length; e++)(0, t[e])()
    }

    function kd(t, e) {
        return e
    }

    function Ld(t, e) {
        if (bt) {
            var n = Rt.formState;
            if (n !== null) {
                t: {
                    var i = ft;
                    if (bt) {
                        if (Vt) {
                            e: {
                                for (var s = Vt, u = Ve; s.nodeType !== 8;) {
                                    if (!u) {
                                        s = null;
                                        break e
                                    }
                                    if (s = Le(s.nextSibling), s === null) {
                                        s = null;
                                        break e
                                    }
                                }
                                u = s.data,
                                s = u === "F!" || u === "F" ? s : null
                            }
                            if (s) {
                                Vt = Le(s.nextSibling), i = s.data === "F!";
                                break t
                            }
                        }
                        Nn(i)
                    }
                    i = !1
                }
                i && (e = n[0])
            }
        }
        return n = re(), n.memoizedState = n.baseState = e, i = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: kd,
            lastRenderedState: e
        }, n.queue = i, n = nh.bind(null, ft, i), i.dispatch = n, i = Er(!1), u = Rr.bind(null, ft, !1, i.queue), i = re(), s = {
            state: e,
            dispatch: null,
            action: t,
            pending: null
        }, i.queue = s, n = Lv.bind(null, ft, s, u, n), s.dispatch = n, i.memoizedState = t, [e, n, !1]
    }

    function Ud(t) {
        var e = Gt();
        return Bd(e, Dt, t)
    }

    function Bd(t, e, n) {
        if (e = Tr(t, e, kd)[0], t = ss(cn)[0], typeof e == "object" && e !== null && typeof e.then == "function") try {
            var i = Yi(e)
        } catch (f) {
            throw f === qa ? Pl : f
        } else i = e;
        e = Gt();
        var s = e.queue,
            u = s.dispatch;
        return n !== e.memoizedState && (ft.flags |= 2048, Qa(9, {
            destroy: void 0
        }, Uv.bind(null, s, n), null)), [i, u, t]
    }

    function Uv(t, e) {
        t.action = e
    }

    function Hd(t) {
        var e = Gt(),
            n = Dt;
        if (n !== null) return Bd(e, n, t);
        Gt(), e = e.memoizedState, n = Gt();
        var i = n.queue.dispatch;
        return n.memoizedState = t, [e, i, !1]
    }

    function Qa(t, e, n, i) {
        return t = {
            tag: t,
            create: n,
            deps: i,
            inst: e,
            next: null
        }, e = ft.updateQueue, e === null && (e = is(), ft.updateQueue = e), n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (i = n.next, n.next = t, t.next = i, e.lastEffect = t), t
    }

    function Yd() {
        return Gt().memoizedState
    }

    function os(t, e, n, i) {
        var s = re();
        ft.flags |= t, s.memoizedState = Qa(1 | e, {
            destroy: void 0
        }, n, i === void 0 ? null : i)
    }

    function rs(t, e, n, i) {
        var s = Gt();
        i = i === void 0 ? null : i;
        var u = s.memoizedState.inst;
        Dt !== null && i !== null && yr(i, Dt.memoizedState.deps) ? s.memoizedState = Qa(e, u, n, i) : (ft.flags |= t, s.memoizedState = Qa(1 | e, u, n, i))
    }

    function qd(t, e) {
        os(8390656, 8, t, e)
    }

    function Nr(t, e) {
        rs(2048, 8, t, e)
    }

    function Bv(t) {
        ft.flags |= 4;
        var e = ft.updateQueue;
        if (e === null) e = is(), ft.updateQueue = e, e.events = [t];
        else {
            var n = e.events;
            n === null ? e.events = [t] : n.push(t)
        }
    }

    function Gd(t) {
        var e = Gt().memoizedState;
        return Bv({
                ref: e,
                nextImpl: t
            }),
            function() {
                if ((At & 2) !== 0) throw Error(o(440));
                return e.impl.apply(void 0, arguments)
            }
    }

    function Xd(t, e) {
        return rs(4, 2, t, e)
    }

    function Kd(t, e) {
        return rs(4, 4, t, e)
    }

    function Zd(t, e) {
        if (typeof e == "function") {
            t = t();
            var n = e(t);
            return function() {
                typeof n == "function" ? n() : e(null)
            }
        }
        if (e != null) return t = t(), e.current = t,
            function() {
                e.current = null
            }
    }

    function Qd(t, e, n) {
        n = n != null ? n.concat([t]) : null, rs(4, 4, Zd.bind(null, e, t), n)
    }

    function wr() {}

    function Jd(t, e) {
        var n = Gt();
        e = e === void 0 ? null : e;
        var i = n.memoizedState;
        return e !== null && yr(e, i[1]) ? i[0] : (n.memoizedState = [t, e], t)
    }

    function Fd(t, e) {
        var n = Gt();
        e = e === void 0 ? null : e;
        var i = n.memoizedState;
        if (e !== null && yr(e, i[1])) return i[0];
        if (i = t(), da) {
            Sn(!0);
            try {
                t()
            } finally {
                Sn(!1)
            }
        }
        return n.memoizedState = [i, e], i
    }

    function Dr(t, e, n) {
        return n === void 0 || (un & 1073741824) !== 0 && (gt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = n, t = Ph(), ft.lanes |= t, Vn |= t, n)
    }

    function Pd(t, e, n, i) {
        return Se(n, e) ? n : Xa.current !== null ? (t = Dr(t, n, i), Se(t, e) || (Zt = !0), t) : (un & 42) === 0 || (un & 1073741824) !== 0 && (gt & 261930) === 0 ? (Zt = !0, t.memoizedState = n) : (t = Ph(), ft.lanes |= t, Vn |= t, e)
    }

    function Wd(t, e, n, i, s) {
        var u = K.p;
        K.p = u !== 0 && 8 > u ? u : 8;
        var f = O.T,
            g = {};
        O.T = g, Rr(t, !1, e, n);
        try {
            var T = s(),
                D = O.S;
            if (D !== null && D(g, T), T !== null && typeof T == "object" && typeof T.then == "function") {
                var _ = _v(T, i);
                qi(t, e, _, we(t))
            } else qi(t, e, i, we(t))
        } catch (L) {
            qi(t, e, {
                then: function() {},
                status: "rejected",
                reason: L
            }, we())
        } finally {
            K.p = u, f !== null && g.types !== null && (f.types = g.types), O.T = f
        }
    }

    function Hv() {}

    function jr(t, e, n, i) {
        if (t.tag !== 5) throw Error(o(476));
        var s = $d(t).queue;
        Wd(t, s, e, F, n === null ? Hv : function() {
            return Id(t), n(i)
        })
    }

    function $d(t) {
        var e = t.memoizedState;
        if (e !== null) return e;
        e = {
            memoizedState: F,
            baseState: F,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: cn,
                lastRenderedState: F
            },
            next: null
        };
        var n = {};
        return e.next = {
            memoizedState: n,
            baseState: n,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: cn,
                lastRenderedState: n
            },
            next: null
        }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e
    }

    function Id(t) {
        var e = $d(t);
        e.next === null && (e = t.alternate.memoizedState), qi(t, e.next.queue, {}, we())
    }

    function Cr() {
        return ee(ll)
    }

    function th() {
        return Gt().memoizedState
    }

    function eh() {
        return Gt().memoizedState
    }

    function Yv(t) {
        for (var e = t.return; e !== null;) {
            switch (e.tag) {
                case 24:
                case 3:
                    var n = we();
                    t = jn(n);
                    var i = Cn(e, t, n);
                    i !== null && (ge(i, e, n), Li(i, e, n)), e = {
                        cache: lr()
                    }, t.payload = e;
                    return
            }
            e = e.return
        }
    }

    function qv(t, e, n) {
        var i = we();
        n = {
            lane: i,
            revertLane: 0,
            gesture: null,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, us(t) ? ah(e, n) : (n = Jo(t, e, n, i), n !== null && (ge(n, t, i), ih(n, e, i)))
    }

    function nh(t, e, n) {
        var i = we();
        qi(t, e, n, i)
    }

    function qi(t, e, n, i) {
        var s = {
            lane: i,
            revertLane: 0,
            gesture: null,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (us(t)) ah(e, s);
        else {
            var u = t.alternate;
            if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer, u !== null)) try {
                var f = e.lastRenderedState,
                    g = u(f, n);
                if (s.hasEagerState = !0, s.eagerState = g, Se(g, f)) return Gl(t, e, s, 0), Rt === null && ql(), !1
            } catch {} finally {}
            if (n = Jo(t, e, s, i), n !== null) return ge(n, t, i), ih(n, e, i), !0
        }
        return !1
    }

    function Rr(t, e, n, i) {
        if (i = {
                lane: 2,
                revertLane: uu(),
                gesture: null,
                action: i,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, us(t)) {
            if (e) throw Error(o(479))
        } else e = Jo(t, n, i, 2), e !== null && ge(e, t, 2)
    }

    function us(t) {
        var e = t.alternate;
        return t === ft || e !== null && e === ft
    }

    function ah(t, e) {
        Ka = ns = !0;
        var n = t.pending;
        n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e
    }

    function ih(t, e, n) {
        if ((n & 4194048) !== 0) {
            var i = e.lanes;
            i &= t.pendingLanes, n |= i, e.lanes = n, uf(t, n)
        }
    }
    var Gi = {
        readContext: ee,
        use: ls,
        useCallback: Ut,
        useContext: Ut,
        useEffect: Ut,
        useImperativeHandle: Ut,
        useLayoutEffect: Ut,
        useInsertionEffect: Ut,
        useMemo: Ut,
        useReducer: Ut,
        useRef: Ut,
        useState: Ut,
        useDebugValue: Ut,
        useDeferredValue: Ut,
        useTransition: Ut,
        useSyncExternalStore: Ut,
        useId: Ut,
        useHostTransitionStatus: Ut,
        useFormState: Ut,
        useActionState: Ut,
        useOptimistic: Ut,
        useMemoCache: Ut,
        useCacheRefresh: Ut
    };
    Gi.useEffectEvent = Ut;
    var lh = {
            readContext: ee,
            use: ls,
            useCallback: function(t, e) {
                return re().memoizedState = [t, e === void 0 ? null : e], t
            },
            useContext: ee,
            useEffect: qd,
            useImperativeHandle: function(t, e, n) {
                n = n != null ? n.concat([t]) : null, os(4194308, 4, Zd.bind(null, e, t), n)
            },
            useLayoutEffect: function(t, e) {
                return os(4194308, 4, t, e)
            },
            useInsertionEffect: function(t, e) {
                os(4, 2, t, e)
            },
            useMemo: function(t, e) {
                var n = re();
                e = e === void 0 ? null : e;
                var i = t();
                if (da) {
                    Sn(!0);
                    try {
                        t()
                    } finally {
                        Sn(!1)
                    }
                }
                return n.memoizedState = [i, e], i
            },
            useReducer: function(t, e, n) {
                var i = re();
                if (n !== void 0) {
                    var s = n(e);
                    if (da) {
                        Sn(!0);
                        try {
                            n(e)
                        } finally {
                            Sn(!1)
                        }
                    }
                } else s = e;
                return i.memoizedState = i.baseState = s, t = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: t,
                    lastRenderedState: s
                }, i.queue = t, t = t.dispatch = qv.bind(null, ft, t), [i.memoizedState, t]
            },
            useRef: function(t) {
                var e = re();
                return t = {
                    current: t
                }, e.memoizedState = t
            },
            useState: function(t) {
                t = Er(t);
                var e = t.queue,
                    n = nh.bind(null, ft, e);
                return e.dispatch = n, [t.memoizedState, n]
            },
            useDebugValue: wr,
            useDeferredValue: function(t, e) {
                var n = re();
                return Dr(n, t, e)
            },
            useTransition: function() {
                var t = Er(!1);
                return t = Wd.bind(null, ft, t.queue, !0, !1), re().memoizedState = t, [!1, t]
            },
            useSyncExternalStore: function(t, e, n) {
                var i = ft,
                    s = re();
                if (bt) {
                    if (n === void 0) throw Error(o(407));
                    n = n()
                } else {
                    if (n = e(), Rt === null) throw Error(o(349));
                    (gt & 127) !== 0 || Nd(i, e, n)
                }
                s.memoizedState = n;
                var u = {
                    value: n,
                    getSnapshot: e
                };
                return s.queue = u, qd(Dd.bind(null, i, u, t), [t]), i.flags |= 2048, Qa(9, {
                    destroy: void 0
                }, wd.bind(null, i, u, n, e), null), n
            },
            useId: function() {
                var t = re(),
                    e = Rt.identifierPrefix;
                if (bt) {
                    var n = Je,
                        i = Qe;
                    n = (i & ~(1 << 32 - be(i) - 1)).toString(32) + n, e = "_" + e + "R_" + n, n = as++, 0 < n && (e += "H" + n.toString(32)), e += "_"
                } else n = Vv++, e = "_" + e + "r_" + n.toString(32) + "_";
                return t.memoizedState = e
            },
            useHostTransitionStatus: Cr,
            useFormState: Ld,
            useActionState: Ld,
            useOptimistic: function(t) {
                var e = re();
                e.memoizedState = e.baseState = t;
                var n = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: null,
                    lastRenderedState: null
                };
                return e.queue = n, e = Rr.bind(null, ft, !0, n), n.dispatch = e, [t, e]
            },
            useMemoCache: Sr,
            useCacheRefresh: function() {
                return re().memoizedState = Yv.bind(null, ft)
            },
            useEffectEvent: function(t) {
                var e = re(),
                    n = {
                        impl: t
                    };
                return e.memoizedState = n,
                    function() {
                        if ((At & 2) !== 0) throw Error(o(440));
                        return n.impl.apply(void 0, arguments)
                    }
            }
        },
        Or = {
            readContext: ee,
            use: ls,
            useCallback: Jd,
            useContext: ee,
            useEffect: Nr,
            useImperativeHandle: Qd,
            useInsertionEffect: Xd,
            useLayoutEffect: Kd,
            useMemo: Fd,
            useReducer: ss,
            useRef: Yd,
            useState: function() {
                return ss(cn)
            },
            useDebugValue: wr,
            useDeferredValue: function(t, e) {
                var n = Gt();
                return Pd(n, Dt.memoizedState, t, e)
            },
            useTransition: function() {
                var t = ss(cn)[0],
                    e = Gt().memoizedState;
                return [typeof t == "boolean" ? t : Yi(t), e]
            },
            useSyncExternalStore: Md,
            useId: th,
            useHostTransitionStatus: Cr,
            useFormState: Ud,
            useActionState: Ud,
            useOptimistic: function(t, e) {
                var n = Gt();
                return Rd(n, Dt, t, e)
            },
            useMemoCache: Sr,
            useCacheRefresh: eh
        };
    Or.useEffectEvent = Gd;
    var sh = {
        readContext: ee,
        use: ls,
        useCallback: Jd,
        useContext: ee,
        useEffect: Nr,
        useImperativeHandle: Qd,
        useInsertionEffect: Xd,
        useLayoutEffect: Kd,
        useMemo: Fd,
        useReducer: Ar,
        useRef: Yd,
        useState: function() {
            return Ar(cn)
        },
        useDebugValue: wr,
        useDeferredValue: function(t, e) {
            var n = Gt();
            return Dt === null ? Dr(n, t, e) : Pd(n, Dt.memoizedState, t, e)
        },
        useTransition: function() {
            var t = Ar(cn)[0],
                e = Gt().memoizedState;
            return [typeof t == "boolean" ? t : Yi(t), e]
        },
        useSyncExternalStore: Md,
        useId: th,
        useHostTransitionStatus: Cr,
        useFormState: Hd,
        useActionState: Hd,
        useOptimistic: function(t, e) {
            var n = Gt();
            return Dt !== null ? Rd(n, Dt, t, e) : (n.baseState = t, [t, n.queue.dispatch])
        },
        useMemoCache: Sr,
        useCacheRefresh: eh
    };
    sh.useEffectEvent = Gd;

    function zr(t, e, n, i) {
        e = t.memoizedState, n = n(i, e), n = n == null ? e : b({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n)
    }
    var _r = {
        enqueueSetState: function(t, e, n) {
            t = t._reactInternals;
            var i = we(),
                s = jn(i);
            s.payload = e, n != null && (s.callback = n), e = Cn(t, s, i), e !== null && (ge(e, t, i), Li(e, t, i))
        },
        enqueueReplaceState: function(t, e, n) {
            t = t._reactInternals;
            var i = we(),
                s = jn(i);
            s.tag = 1, s.payload = e, n != null && (s.callback = n), e = Cn(t, s, i), e !== null && (ge(e, t, i), Li(e, t, i))
        },
        enqueueForceUpdate: function(t, e) {
            t = t._reactInternals;
            var n = we(),
                i = jn(n);
            i.tag = 2, e != null && (i.callback = e), e = Cn(t, i, n), e !== null && (ge(e, t, n), Li(e, t, n))
        }
    };

    function oh(t, e, n, i, s, u, f) {
        return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(i, u, f) : e.prototype && e.prototype.isPureReactComponent ? !ji(n, i) || !ji(s, u) : !0
    }

    function rh(t, e, n, i) {
        t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, i), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, i), e.state !== t && _r.enqueueReplaceState(e, e.state, null)
    }

    function ha(t, e) {
        var n = e;
        if ("ref" in e) {
            n = {};
            for (var i in e) i !== "ref" && (n[i] = e[i])
        }
        if (t = t.defaultProps) {
            n === e && (n = b({}, n));
            for (var s in t) n[s] === void 0 && (n[s] = t[s])
        }
        return n
    }

    function uh(t) {
        Yl(t)
    }

    function ch(t) {
        console.error(t)
    }

    function fh(t) {
        Yl(t)
    }

    function cs(t, e) {
        try {
            var n = t.onUncaughtError;
            n(e.value, {
                componentStack: e.stack
            })
        } catch (i) {
            setTimeout(function() {
                throw i
            })
        }
    }

    function dh(t, e, n) {
        try {
            var i = t.onCaughtError;
            i(n.value, {
                componentStack: n.stack,
                errorBoundary: e.tag === 1 ? e.stateNode : null
            })
        } catch (s) {
            setTimeout(function() {
                throw s
            })
        }
    }

    function Vr(t, e, n) {
        return n = jn(n), n.tag = 3, n.payload = {
            element: null
        }, n.callback = function() {
            cs(t, e)
        }, n
    }

    function hh(t) {
        return t = jn(t), t.tag = 3, t
    }

    function mh(t, e, n, i) {
        var s = n.type.getDerivedStateFromError;
        if (typeof s == "function") {
            var u = i.value;
            t.payload = function() {
                return s(u)
            }, t.callback = function() {
                dh(e, n, i)
            }
        }
        var f = n.stateNode;
        f !== null && typeof f.componentDidCatch == "function" && (t.callback = function() {
            dh(e, n, i), typeof s != "function" && (kn === null ? kn = new Set([this]) : kn.add(this));
            var g = i.stack;
            this.componentDidCatch(i.value, {
                componentStack: g !== null ? g : ""
            })
        })
    }

    function Gv(t, e, n, i, s) {
        if (n.flags |= 32768, i !== null && typeof i == "object" && typeof i.then == "function") {
            if (e = n.alternate, e !== null && Ba(e, n, s, !0), n = Ae.current, n !== null) {
                switch (n.tag) {
                    case 31:
                    case 13:
                        return ke === null ? Ts() : n.alternate === null && Bt === 0 && (Bt = 3), n.flags &= -257, n.flags |= 65536, n.lanes = s, i === Wl ? n.flags |= 16384 : (e = n.updateQueue, e === null ? n.updateQueue = new Set([i]) : e.add(i), su(t, i, s)), !1;
                    case 22:
                        return n.flags |= 65536, i === Wl ? n.flags |= 16384 : (e = n.updateQueue, e === null ? (e = {
                            transitions: null,
                            markerInstances: null,
                            retryQueue: new Set([i])
                        }, n.updateQueue = e) : (n = e.retryQueue, n === null ? e.retryQueue = new Set([i]) : n.add(i)), su(t, i, s)), !1
                }
                throw Error(o(435, n.tag))
            }
            return su(t, i, s), Ts(), !1
        }
        if (bt) return e = Ae.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = s, i !== tr && (t = Error(o(422), {
            cause: i
        }), Oi(Oe(t, n)))) : (i !== tr && (e = Error(o(423), {
            cause: i
        }), Oi(Oe(e, n))), t = t.current.alternate, t.flags |= 65536, s &= -s, t.lanes |= s, i = Oe(i, n), s = Vr(t.stateNode, i, s), fr(t, s), Bt !== 4 && (Bt = 2)), !1;
        var u = Error(o(520), {
            cause: i
        });
        if (u = Oe(u, n), Wi === null ? Wi = [u] : Wi.push(u), Bt !== 4 && (Bt = 2), e === null) return !0;
        i = Oe(i, n), n = e;
        do {
            switch (n.tag) {
                case 3:
                    return n.flags |= 65536, t = s & -s, n.lanes |= t, t = Vr(n.stateNode, i, t), fr(n, t), !1;
                case 1:
                    if (e = n.type, u = n.stateNode, (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (kn === null || !kn.has(u)))) return n.flags |= 65536, s &= -s, n.lanes |= s, s = hh(s), mh(s, t, n, i), fr(n, s), !1
            }
            n = n.return
        } while (n !== null);
        return !1
    }
    var kr = Error(o(461)),
        Zt = !1;

    function ne(t, e, n, i) {
        e.child = t === null ? vd(e, null, n, i) : fa(e, t.child, n, i)
    }

    function ph(t, e, n, i, s) {
        n = n.render;
        var u = e.ref;
        if ("ref" in i) {
            var f = {};
            for (var g in i) g !== "ref" && (f[g] = i[g])
        } else f = i;
        return oa(e), i = gr(t, e, n, f, u, s), g = vr(), t !== null && !Zt ? (xr(t, e, s), fn(t, e, s)) : (bt && g && $o(e), e.flags |= 1, ne(t, e, i, s), e.child)
    }

    function yh(t, e, n, i, s) {
        if (t === null) {
            var u = n.type;
            return typeof u == "function" && !Fo(u) && u.defaultProps === void 0 && n.compare === null ? (e.tag = 15, e.type = u, gh(t, e, u, i, s)) : (t = Kl(n.type, null, i, e, e.mode, s), t.ref = e.ref, t.return = e, e.child = t)
        }
        if (u = t.child, !Xr(t, s)) {
            var f = u.memoizedProps;
            if (n = n.compare, n = n !== null ? n : ji, n(f, i) && t.ref === e.ref) return fn(t, e, s)
        }
        return e.flags |= 1, t = ln(u, i), t.ref = e.ref, t.return = e, e.child = t
    }

    function gh(t, e, n, i, s) {
        if (t !== null) {
            var u = t.memoizedProps;
            if (ji(u, i) && t.ref === e.ref)
                if (Zt = !1, e.pendingProps = i = u, Xr(t, s))(t.flags & 131072) !== 0 && (Zt = !0);
                else return e.lanes = t.lanes, fn(t, e, s)
        }
        return Lr(t, e, n, i, s)
    }

    function vh(t, e, n, i) {
        var s = i.children,
            u = t !== null ? t.memoizedState : null;
        if (t === null && e.stateNode === null && (e.stateNode = {
                _visibility: 1,
                _pendingMarkers: null,
                _retryCache: null,
                _transitions: null
            }), i.mode === "hidden") {
            if ((e.flags & 128) !== 0) {
                if (u = u !== null ? u.baseLanes | n : n, t !== null) {
                    for (i = e.child = t.child, s = 0; i !== null;) s = s | i.lanes | i.childLanes, i = i.sibling;
                    i = s & ~u
                } else i = 0, e.child = null;
                return xh(t, e, u, n, i)
            }
            if ((n & 536870912) !== 0) e.memoizedState = {
                baseLanes: 0,
                cachePool: null
            }, t !== null && Fl(e, u !== null ? u.cachePool : null), u !== null ? Sd(e, u) : hr(), Td(e);
            else return i = e.lanes = 536870912, xh(t, e, u !== null ? u.baseLanes | n : n, n, i)
        } else u !== null ? (Fl(e, u.cachePool), Sd(e, u), On(), e.memoizedState = null) : (t !== null && Fl(e, null), hr(), On());
        return ne(t, e, s, n), e.child
    }

    function Xi(t, e) {
        return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }), e.sibling
    }

    function xh(t, e, n, i, s) {
        var u = or();
        return u = u === null ? null : {
            parent: Xt._currentValue,
            pool: u
        }, e.memoizedState = {
            baseLanes: n,
            cachePool: u
        }, t !== null && Fl(e, null), hr(), Td(e), t !== null && Ba(t, e, i, !0), e.childLanes = s, null
    }

    function fs(t, e) {
        return e = hs({
            mode: e.mode,
            children: e.children
        }, t.mode), e.ref = t.ref, t.child = e, e.return = t, e
    }

    function bh(t, e, n) {
        return fa(e, t.child, null, n), t = fs(e, e.pendingProps), t.flags |= 2, Ee(e), e.memoizedState = null, t
    }

    function Xv(t, e, n) {
        var i = e.pendingProps,
            s = (e.flags & 128) !== 0;
        if (e.flags &= -129, t === null) {
            if (bt) {
                if (i.mode === "hidden") return t = fs(e, i), e.lanes = 536870912, Xi(null, t);
                if (pr(e), (t = Vt) ? (t = Om(t, Ve), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
                        dehydrated: t,
                        treeContext: En !== null ? {
                            id: Qe,
                            overflow: Je
                        } : null,
                        retryLane: 536870912,
                        hydrationErrors: null
                    }, n = ad(t), n.return = e, e.child = n, te = e, Vt = null)) : t = null, t === null) throw Nn(e);
                return e.lanes = 536870912, null
            }
            return fs(e, i)
        }
        var u = t.memoizedState;
        if (u !== null) {
            var f = u.dehydrated;
            if (pr(e), s)
                if (e.flags & 256) e.flags &= -257, e = bh(t, e, n);
                else if (e.memoizedState !== null) e.child = t.child, e.flags |= 128, e = null;
            else throw Error(o(558));
            else if (Zt || Ba(t, e, n, !1), s = (n & t.childLanes) !== 0, Zt || s) {
                if (i = Rt, i !== null && (f = cf(i, n), f !== 0 && f !== u.retryLane)) throw u.retryLane = f, aa(t, f), ge(i, t, f), kr;
                Ts(), e = bh(t, e, n)
            } else t = u.treeContext, Vt = Le(f.nextSibling), te = e, bt = !0, Mn = null, Ve = !1, t !== null && sd(e, t), e = fs(e, i), e.flags |= 4096;
            return e
        }
        return t = ln(t.child, {
            mode: i.mode,
            children: i.children
        }), t.ref = e.ref, e.child = t, t.return = e, t
    }

    function ds(t, e) {
        var n = e.ref;
        if (n === null) t !== null && t.ref !== null && (e.flags |= 4194816);
        else {
            if (typeof n != "function" && typeof n != "object") throw Error(o(284));
            (t === null || t.ref !== n) && (e.flags |= 4194816)
        }
    }

    function Lr(t, e, n, i, s) {
        return oa(e), n = gr(t, e, n, i, void 0, s), i = vr(), t !== null && !Zt ? (xr(t, e, s), fn(t, e, s)) : (bt && i && $o(e), e.flags |= 1, ne(t, e, n, s), e.child)
    }

    function Sh(t, e, n, i, s, u) {
        return oa(e), e.updateQueue = null, n = Ed(e, i, n, s), Ad(t), i = vr(), t !== null && !Zt ? (xr(t, e, u), fn(t, e, u)) : (bt && i && $o(e), e.flags |= 1, ne(t, e, n, u), e.child)
    }

    function Th(t, e, n, i, s) {
        if (oa(e), e.stateNode === null) {
            var u = Va,
                f = n.contextType;
            typeof f == "object" && f !== null && (u = ee(f)), u = new n(i, u), e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = _r, e.stateNode = u, u._reactInternals = e, u = e.stateNode, u.props = i, u.state = e.memoizedState, u.refs = {}, ur(e), f = n.contextType, u.context = typeof f == "object" && f !== null ? ee(f) : Va, u.state = e.memoizedState, f = n.getDerivedStateFromProps, typeof f == "function" && (zr(e, n, f, i), u.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (f = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), f !== u.state && _r.enqueueReplaceState(u, u.state, null), Bi(e, i, u, s), Ui(), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308), i = !0
        } else if (t === null) {
            u = e.stateNode;
            var g = e.memoizedProps,
                T = ha(n, g);
            u.props = T;
            var D = u.context,
                _ = n.contextType;
            f = Va, typeof _ == "object" && _ !== null && (f = ee(_));
            var L = n.getDerivedStateFromProps;
            _ = typeof L == "function" || typeof u.getSnapshotBeforeUpdate == "function", g = e.pendingProps !== g, _ || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (g || D !== f) && rh(e, u, i, f), Dn = !1;
            var C = e.memoizedState;
            u.state = C, Bi(e, i, u, s), Ui(), D = e.memoizedState, g || C !== D || Dn ? (typeof L == "function" && (zr(e, n, L, i), D = e.memoizedState), (T = Dn || oh(e, n, T, i, C, D, f)) ? (_ || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = i, e.memoizedState = D), u.props = i, u.state = D, u.context = f, i = T) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), i = !1)
        } else {
            u = e.stateNode, cr(t, e), f = e.memoizedProps, _ = ha(n, f), u.props = _, L = e.pendingProps, C = u.context, D = n.contextType, T = Va, typeof D == "object" && D !== null && (T = ee(D)), g = n.getDerivedStateFromProps, (D = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (f !== L || C !== T) && rh(e, u, i, T), Dn = !1, C = e.memoizedState, u.state = C, Bi(e, i, u, s), Ui();
            var R = e.memoizedState;
            f !== L || C !== R || Dn || t !== null && t.dependencies !== null && Ql(t.dependencies) ? (typeof g == "function" && (zr(e, n, g, i), R = e.memoizedState), (_ = Dn || oh(e, n, _, i, C, R, T) || t !== null && t.dependencies !== null && Ql(t.dependencies)) ? (D || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(i, R, T), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(i, R, T)), typeof u.componentDidUpdate == "function" && (e.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || f === t.memoizedProps && C === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && C === t.memoizedState || (e.flags |= 1024), e.memoizedProps = i, e.memoizedState = R), u.props = i, u.state = R, u.context = T, i = _) : (typeof u.componentDidUpdate != "function" || f === t.memoizedProps && C === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && C === t.memoizedState || (e.flags |= 1024), i = !1)
        }
        return u = i, ds(t, e), i = (e.flags & 128) !== 0, u || i ? (u = e.stateNode, n = i && typeof n.getDerivedStateFromError != "function" ? null : u.render(), e.flags |= 1, t !== null && i ? (e.child = fa(e, t.child, null, s), e.child = fa(e, null, n, s)) : ne(t, e, n, s), e.memoizedState = u.state, t = e.child) : t = fn(t, e, s), t
    }

    function Ah(t, e, n, i) {
        return la(), e.flags |= 256, ne(t, e, n, i), e.child
    }
    var Ur = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };

    function Br(t) {
        return {
            baseLanes: t,
            cachePool: dd()
        }
    }

    function Hr(t, e, n) {
        return t = t !== null ? t.childLanes & ~n : 0, e && (t |= Ne), t
    }

    function Eh(t, e, n) {
        var i = e.pendingProps,
            s = !1,
            u = (e.flags & 128) !== 0,
            f;
        if ((f = u) || (f = t !== null && t.memoizedState === null ? !1 : (qt.current & 2) !== 0), f && (s = !0, e.flags &= -129), f = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
            if (bt) {
                if (s ? Rn(e) : On(), (t = Vt) ? (t = Om(t, Ve), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
                        dehydrated: t,
                        treeContext: En !== null ? {
                            id: Qe,
                            overflow: Je
                        } : null,
                        retryLane: 536870912,
                        hydrationErrors: null
                    }, n = ad(t), n.return = e, e.child = n, te = e, Vt = null)) : t = null, t === null) throw Nn(e);
                return Tu(t) ? e.lanes = 32 : e.lanes = 536870912, null
            }
            var g = i.children;
            return i = i.fallback, s ? (On(), s = e.mode, g = hs({
                mode: "hidden",
                children: g
            }, s), i = ia(i, s, n, null), g.return = e, i.return = e, g.sibling = i, e.child = g, i = e.child, i.memoizedState = Br(n), i.childLanes = Hr(t, f, n), e.memoizedState = Ur, Xi(null, i)) : (Rn(e), Yr(e, g))
        }
        var T = t.memoizedState;
        if (T !== null && (g = T.dehydrated, g !== null)) {
            if (u) e.flags & 256 ? (Rn(e), e.flags &= -257, e = qr(t, e, n)) : e.memoizedState !== null ? (On(), e.child = t.child, e.flags |= 128, e = null) : (On(), g = i.fallback, s = e.mode, i = hs({
                mode: "visible",
                children: i.children
            }, s), g = ia(g, s, n, null), g.flags |= 2, i.return = e, g.return = e, i.sibling = g, e.child = i, fa(e, t.child, null, n), i = e.child, i.memoizedState = Br(n), i.childLanes = Hr(t, f, n), e.memoizedState = Ur, e = Xi(null, i));
            else if (Rn(e), Tu(g)) {
                if (f = g.nextSibling && g.nextSibling.dataset, f) var D = f.dgst;
                f = D, i = Error(o(419)), i.stack = "", i.digest = f, Oi({
                    value: i,
                    source: null,
                    stack: null
                }), e = qr(t, e, n)
            } else if (Zt || Ba(t, e, n, !1), f = (n & t.childLanes) !== 0, Zt || f) {
                if (f = Rt, f !== null && (i = cf(f, n), i !== 0 && i !== T.retryLane)) throw T.retryLane = i, aa(t, i), ge(f, t, i), kr;
                Su(g) || Ts(), e = qr(t, e, n)
            } else Su(g) ? (e.flags |= 192, e.child = t.child, e = null) : (t = T.treeContext, Vt = Le(g.nextSibling), te = e, bt = !0, Mn = null, Ve = !1, t !== null && sd(e, t), e = Yr(e, i.children), e.flags |= 4096);
            return e
        }
        return s ? (On(), g = i.fallback, s = e.mode, T = t.child, D = T.sibling, i = ln(T, {
            mode: "hidden",
            children: i.children
        }), i.subtreeFlags = T.subtreeFlags & 65011712, D !== null ? g = ln(D, g) : (g = ia(g, s, n, null), g.flags |= 2), g.return = e, i.return = e, i.sibling = g, e.child = i, Xi(null, i), i = e.child, g = t.child.memoizedState, g === null ? g = Br(n) : (s = g.cachePool, s !== null ? (T = Xt._currentValue, s = s.parent !== T ? {
            parent: T,
            pool: T
        } : s) : s = dd(), g = {
            baseLanes: g.baseLanes | n,
            cachePool: s
        }), i.memoizedState = g, i.childLanes = Hr(t, f, n), e.memoizedState = Ur, Xi(t.child, i)) : (Rn(e), n = t.child, t = n.sibling, n = ln(n, {
            mode: "visible",
            children: i.children
        }), n.return = e, n.sibling = null, t !== null && (f = e.deletions, f === null ? (e.deletions = [t], e.flags |= 16) : f.push(t)), e.child = n, e.memoizedState = null, n)
    }

    function Yr(t, e) {
        return e = hs({
            mode: "visible",
            children: e
        }, t.mode), e.return = t, t.child = e
    }

    function hs(t, e) {
        return t = Te(22, t, null, e), t.lanes = 0, t
    }

    function qr(t, e, n) {
        return fa(e, t.child, null, n), t = Yr(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t
    }

    function Mh(t, e, n) {
        t.lanes |= e;
        var i = t.alternate;
        i !== null && (i.lanes |= e), ar(t.return, e, n)
    }

    function Gr(t, e, n, i, s, u) {
        var f = t.memoizedState;
        f === null ? t.memoizedState = {
            isBackwards: e,
            rendering: null,
            renderingStartTime: 0,
            last: i,
            tail: n,
            tailMode: s,
            treeForkCount: u
        } : (f.isBackwards = e, f.rendering = null, f.renderingStartTime = 0, f.last = i, f.tail = n, f.tailMode = s, f.treeForkCount = u)
    }

    function Nh(t, e, n) {
        var i = e.pendingProps,
            s = i.revealOrder,
            u = i.tail;
        i = i.children;
        var f = qt.current,
            g = (f & 2) !== 0;
        if (g ? (f = f & 1 | 2, e.flags |= 128) : f &= 1, Q(qt, f), ne(t, e, i, n), i = bt ? Ri : 0, !g && t !== null && (t.flags & 128) !== 0) t: for (t = e.child; t !== null;) {
            if (t.tag === 13) t.memoizedState !== null && Mh(t, n, e);
            else if (t.tag === 19) Mh(t, n, e);
            else if (t.child !== null) {
                t.child.return = t, t = t.child;
                continue
            }
            if (t === e) break t;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) break t;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
        switch (s) {
            case "forwards":
                for (n = e.child, s = null; n !== null;) t = n.alternate, t !== null && es(t) === null && (s = n), n = n.sibling;
                n = s, n === null ? (s = e.child, e.child = null) : (s = n.sibling, n.sibling = null), Gr(e, !1, s, n, u, i);
                break;
            case "backwards":
            case "unstable_legacy-backwards":
                for (n = null, s = e.child, e.child = null; s !== null;) {
                    if (t = s.alternate, t !== null && es(t) === null) {
                        e.child = s;
                        break
                    }
                    t = s.sibling, s.sibling = n, n = s, s = t
                }
                Gr(e, !0, n, null, u, i);
                break;
            case "together":
                Gr(e, !1, null, null, void 0, i);
                break;
            default:
                e.memoizedState = null
        }
        return e.child
    }

    function fn(t, e, n) {
        if (t !== null && (e.dependencies = t.dependencies), Vn |= e.lanes, (n & e.childLanes) === 0)
            if (t !== null) {
                if (Ba(t, e, n, !1), (n & e.childLanes) === 0) return null
            } else return null;
        if (t !== null && e.child !== t.child) throw Error(o(153));
        if (e.child !== null) {
            for (t = e.child, n = ln(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null;) t = t.sibling, n = n.sibling = ln(t, t.pendingProps), n.return = e;
            n.sibling = null
        }
        return e.child
    }

    function Xr(t, e) {
        return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Ql(t)))
    }

    function Kv(t, e, n) {
        switch (e.tag) {
            case 3:
                oe(e, e.stateNode.containerInfo), wn(e, Xt, t.memoizedState.cache), la();
                break;
            case 27:
            case 5:
                yi(e);
                break;
            case 4:
                oe(e, e.stateNode.containerInfo);
                break;
            case 10:
                wn(e, e.type, e.memoizedProps.value);
                break;
            case 31:
                if (e.memoizedState !== null) return e.flags |= 128, pr(e), null;
                break;
            case 13:
                var i = e.memoizedState;
                if (i !== null) return i.dehydrated !== null ? (Rn(e), e.flags |= 128, null) : (n & e.child.childLanes) !== 0 ? Eh(t, e, n) : (Rn(e), t = fn(t, e, n), t !== null ? t.sibling : null);
                Rn(e);
                break;
            case 19:
                var s = (t.flags & 128) !== 0;
                if (i = (n & e.childLanes) !== 0, i || (Ba(t, e, n, !1), i = (n & e.childLanes) !== 0), s) {
                    if (i) return Nh(t, e, n);
                    e.flags |= 128
                }
                if (s = e.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), Q(qt, qt.current), i) break;
                return null;
            case 22:
                return e.lanes = 0, vh(t, e, n, e.pendingProps);
            case 24:
                wn(e, Xt, t.memoizedState.cache)
        }
        return fn(t, e, n)
    }

    function wh(t, e, n) {
        if (t !== null)
            if (t.memoizedProps !== e.pendingProps) Zt = !0;
            else {
                if (!Xr(t, n) && (e.flags & 128) === 0) return Zt = !1, Kv(t, e, n);
                Zt = (t.flags & 131072) !== 0
            }
        else Zt = !1, bt && (e.flags & 1048576) !== 0 && ld(e, Ri, e.index);
        switch (e.lanes = 0, e.tag) {
            case 16:
                t: {
                    var i = e.pendingProps;
                    if (t = ua(e.elementType), e.type = t, typeof t == "function") Fo(t) ? (i = ha(t, i), e.tag = 1, e = Th(null, e, t, i, n)) : (e.tag = 0, e = Lr(null, e, t, i, n));
                    else {
                        if (t != null) {
                            var s = t.$$typeof;
                            if (s === q) {
                                e.tag = 11, e = ph(null, e, t, i, n);
                                break t
                            } else if (s === Z) {
                                e.tag = 14, e = yh(null, e, t, i, n);
                                break t
                            }
                        }
                        throw e = ut(t) || t, Error(o(306, e, ""))
                    }
                }
                return e;
            case 0:
                return Lr(t, e, e.type, e.pendingProps, n);
            case 1:
                return i = e.type, s = ha(i, e.pendingProps), Th(t, e, i, s, n);
            case 3:
                t: {
                    if (oe(e, e.stateNode.containerInfo), t === null) throw Error(o(387));i = e.pendingProps;
                    var u = e.memoizedState;s = u.element,
                    cr(t, e),
                    Bi(e, i, null, n);
                    var f = e.memoizedState;
                    if (i = f.cache, wn(e, Xt, i), i !== u.cache && ir(e, [Xt], n, !0), Ui(), i = f.element, u.isDehydrated)
                        if (u = {
                                element: i,
                                isDehydrated: !1,
                                cache: f.cache
                            }, e.updateQueue.baseState = u, e.memoizedState = u, e.flags & 256) {
                            e = Ah(t, e, i, n);
                            break t
                        } else if (i !== s) {
                        s = Oe(Error(o(424)), e), Oi(s), e = Ah(t, e, i, n);
                        break t
                    } else {
                        switch (t = e.stateNode.containerInfo, t.nodeType) {
                            case 9:
                                t = t.body;
                                break;
                            default:
                                t = t.nodeName === "HTML" ? t.ownerDocument.body : t
                        }
                        for (Vt = Le(t.firstChild), te = e, bt = !0, Mn = null, Ve = !0, n = vd(e, null, i, n), e.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling
                    } else {
                        if (la(), i === s) {
                            e = fn(t, e, n);
                            break t
                        }
                        ne(t, e, i, n)
                    }
                    e = e.child
                }
                return e;
            case 26:
                return ds(t, e), t === null ? (n = Um(e.type, null, e.pendingProps, null)) ? e.memoizedState = n : bt || (n = e.type, t = e.pendingProps, i = js(mt.current).createElement(n), i[It] = e, i[fe] = t, ae(i, n, t), Wt(i), e.stateNode = i) : e.memoizedState = Um(e.type, t.memoizedProps, e.pendingProps, t.memoizedState), null;
            case 27:
                return yi(e), t === null && bt && (i = e.stateNode = Vm(e.type, e.pendingProps, mt.current), te = e, Ve = !0, s = Vt, Hn(e.type) ? (Au = s, Vt = Le(i.firstChild)) : Vt = s), ne(t, e, e.pendingProps.children, n), ds(t, e), t === null && (e.flags |= 4194304), e.child;
            case 5:
                return t === null && bt && ((s = i = Vt) && (i = S1(i, e.type, e.pendingProps, Ve), i !== null ? (e.stateNode = i, te = e, Vt = Le(i.firstChild), Ve = !1, s = !0) : s = !1), s || Nn(e)), yi(e), s = e.type, u = e.pendingProps, f = t !== null ? t.memoizedProps : null, i = u.children, vu(s, u) ? i = null : f !== null && vu(s, f) && (e.flags |= 32), e.memoizedState !== null && (s = gr(t, e, kv, null, null, n), ll._currentValue = s), ds(t, e), ne(t, e, i, n), e.child;
            case 6:
                return t === null && bt && ((t = n = Vt) && (n = T1(n, e.pendingProps, Ve), n !== null ? (e.stateNode = n, te = e, Vt = null, t = !0) : t = !1), t || Nn(e)), null;
            case 13:
                return Eh(t, e, n);
            case 4:
                return oe(e, e.stateNode.containerInfo), i = e.pendingProps, t === null ? e.child = fa(e, null, i, n) : ne(t, e, i, n), e.child;
            case 11:
                return ph(t, e, e.type, e.pendingProps, n);
            case 7:
                return ne(t, e, e.pendingProps, n), e.child;
            case 8:
                return ne(t, e, e.pendingProps.children, n), e.child;
            case 12:
                return ne(t, e, e.pendingProps.children, n), e.child;
            case 10:
                return i = e.pendingProps, wn(e, e.type, i.value), ne(t, e, i.children, n), e.child;
            case 9:
                return s = e.type._context, i = e.pendingProps.children, oa(e), s = ee(s), i = i(s), e.flags |= 1, ne(t, e, i, n), e.child;
            case 14:
                return yh(t, e, e.type, e.pendingProps, n);
            case 15:
                return gh(t, e, e.type, e.pendingProps, n);
            case 19:
                return Nh(t, e, n);
            case 31:
                return Xv(t, e, n);
            case 22:
                return vh(t, e, n, e.pendingProps);
            case 24:
                return oa(e), i = ee(Xt), t === null ? (s = or(), s === null && (s = Rt, u = lr(), s.pooledCache = u, u.refCount++, u !== null && (s.pooledCacheLanes |= n), s = u), e.memoizedState = {
                    parent: i,
                    cache: s
                }, ur(e), wn(e, Xt, s)) : ((t.lanes & n) !== 0 && (cr(t, e), Bi(e, null, null, n), Ui()), s = t.memoizedState, u = e.memoizedState, s.parent !== i ? (s = {
                    parent: i,
                    cache: i
                }, e.memoizedState = s, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = s), wn(e, Xt, i)) : (i = u.cache, wn(e, Xt, i), i !== s.cache && ir(e, [Xt], n, !0))), ne(t, e, e.pendingProps.children, n), e.child;
            case 29:
                throw e.pendingProps
        }
        throw Error(o(156, e.tag))
    }

    function dn(t) {
        t.flags |= 4
    }

    function Kr(t, e, n, i, s) {
        if ((e = (t.mode & 32) !== 0) && (e = !1), e) {
            if (t.flags |= 16777216, (s & 335544128) === s)
                if (t.stateNode.complete) t.flags |= 8192;
                else if (tm()) t.flags |= 8192;
            else throw ca = Wl, rr
        } else t.flags &= -16777217
    }

    function Dh(t, e) {
        if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0) t.flags &= -16777217;
        else if (t.flags |= 16777216, !Gm(e))
            if (tm()) t.flags |= 8192;
            else throw ca = Wl, rr
    }

    function ms(t, e) {
        e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? of() : 536870912, t.lanes |= e, Wa |= e)
    }

    function Ki(t, e) {
        if (!bt) switch (t.tailMode) {
            case "hidden":
                e = t.tail;
                for (var n = null; e !== null;) e.alternate !== null && (n = e), e = e.sibling;
                n === null ? t.tail = null : n.sibling = null;
                break;
            case "collapsed":
                n = t.tail;
                for (var i = null; n !== null;) n.alternate !== null && (i = n), n = n.sibling;
                i === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : i.sibling = null
        }
    }

    function kt(t) {
        var e = t.alternate !== null && t.alternate.child === t.child,
            n = 0,
            i = 0;
        if (e)
            for (var s = t.child; s !== null;) n |= s.lanes | s.childLanes, i |= s.subtreeFlags & 65011712, i |= s.flags & 65011712, s.return = t, s = s.sibling;
        else
            for (s = t.child; s !== null;) n |= s.lanes | s.childLanes, i |= s.subtreeFlags, i |= s.flags, s.return = t, s = s.sibling;
        return t.subtreeFlags |= i, t.childLanes = n, e
    }

    function Zv(t, e, n) {
        var i = e.pendingProps;
        switch (Io(e), e.tag) {
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return kt(e), null;
            case 1:
                return kt(e), null;
            case 3:
                return n = e.stateNode, i = null, t !== null && (i = t.memoizedState.cache), e.memoizedState.cache !== i && (e.flags |= 2048), rn(Xt), Yt(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (t === null || t.child === null) && (Ua(e) ? dn(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, er())), kt(e), null;
            case 26:
                var s = e.type,
                    u = e.memoizedState;
                return t === null ? (dn(e), u !== null ? (kt(e), Dh(e, u)) : (kt(e), Kr(e, s, null, i, n))) : u ? u !== t.memoizedState ? (dn(e), kt(e), Dh(e, u)) : (kt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== i && dn(e), kt(e), Kr(e, s, t, i, n)), null;
            case 27:
                if (Ml(e), n = mt.current, s = e.type, t !== null && e.stateNode != null) t.memoizedProps !== i && dn(e);
                else {
                    if (!i) {
                        if (e.stateNode === null) throw Error(o(166));
                        return kt(e), null
                    }
                    t = et.current, Ua(e) ? od(e) : (t = Vm(s, i, n), e.stateNode = t, dn(e))
                }
                return kt(e), null;
            case 5:
                if (Ml(e), s = e.type, t !== null && e.stateNode != null) t.memoizedProps !== i && dn(e);
                else {
                    if (!i) {
                        if (e.stateNode === null) throw Error(o(166));
                        return kt(e), null
                    }
                    if (u = et.current, Ua(e)) od(e);
                    else {
                        var f = js(mt.current);
                        switch (u) {
                            case 1:
                                u = f.createElementNS("http://www.w3.org/2000/svg", s);
                                break;
                            case 2:
                                u = f.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                                break;
                            default:
                                switch (s) {
                                    case "svg":
                                        u = f.createElementNS("http://www.w3.org/2000/svg", s);
                                        break;
                                    case "math":
                                        u = f.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                                        break;
                                    case "script":
                                        u = f.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(u.firstChild);
                                        break;
                                    case "select":
                                        u = typeof i.is == "string" ? f.createElement("select", {
                                            is: i.is
                                        }) : f.createElement("select"), i.multiple ? u.multiple = !0 : i.size && (u.size = i.size);
                                        break;
                                    default:
                                        u = typeof i.is == "string" ? f.createElement(s, {
                                            is: i.is
                                        }) : f.createElement(s)
                                }
                        }
                        u[It] = e, u[fe] = i;
                        t: for (f = e.child; f !== null;) {
                            if (f.tag === 5 || f.tag === 6) u.appendChild(f.stateNode);
                            else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                                f.child.return = f, f = f.child;
                                continue
                            }
                            if (f === e) break t;
                            for (; f.sibling === null;) {
                                if (f.return === null || f.return === e) break t;
                                f = f.return
                            }
                            f.sibling.return = f.return, f = f.sibling
                        }
                        e.stateNode = u;
                        t: switch (ae(u, s, i), s) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                i = !!i.autoFocus;
                                break t;
                            case "img":
                                i = !0;
                                break t;
                            default:
                                i = !1
                        }
                        i && dn(e)
                    }
                }
                return kt(e), Kr(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, n), null;
            case 6:
                if (t && e.stateNode != null) t.memoizedProps !== i && dn(e);
                else {
                    if (typeof i != "string" && e.stateNode === null) throw Error(o(166));
                    if (t = mt.current, Ua(e)) {
                        if (t = e.stateNode, n = e.memoizedProps, i = null, s = te, s !== null) switch (s.tag) {
                            case 27:
                            case 5:
                                i = s.memoizedProps
                        }
                        t[It] = e, t = !!(t.nodeValue === n || i !== null && i.suppressHydrationWarning === !0 || Em(t.nodeValue, n)), t || Nn(e, !0)
                    } else t = js(t).createTextNode(i), t[It] = e, e.stateNode = t
                }
                return kt(e), null;
            case 31:
                if (n = e.memoizedState, t === null || t.memoizedState !== null) {
                    if (i = Ua(e), n !== null) {
                        if (t === null) {
                            if (!i) throw Error(o(318));
                            if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(557));
                            t[It] = e
                        } else la(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
                        kt(e), t = !1
                    } else n = er(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), t = !0;
                    if (!t) return e.flags & 256 ? (Ee(e), e) : (Ee(e), null);
                    if ((e.flags & 128) !== 0) throw Error(o(558))
                }
                return kt(e), null;
            case 13:
                if (i = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
                    if (s = Ua(e), i !== null && i.dehydrated !== null) {
                        if (t === null) {
                            if (!s) throw Error(o(318));
                            if (s = e.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(o(317));
                            s[It] = e
                        } else la(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
                        kt(e), s = !1
                    } else s = er(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = s), s = !0;
                    if (!s) return e.flags & 256 ? (Ee(e), e) : (Ee(e), null)
                }
                return Ee(e), (e.flags & 128) !== 0 ? (e.lanes = n, e) : (n = i !== null, t = t !== null && t.memoizedState !== null, n && (i = e.child, s = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (s = i.alternate.memoizedState.cachePool.pool), u = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (u = i.memoizedState.cachePool.pool), u !== s && (i.flags |= 2048)), n !== t && n && (e.child.flags |= 8192), ms(e, e.updateQueue), kt(e), null);
            case 4:
                return Yt(), t === null && hu(e.stateNode.containerInfo), kt(e), null;
            case 10:
                return rn(e.type), kt(e), null;
            case 19:
                if (U(qt), i = e.memoizedState, i === null) return kt(e), null;
                if (s = (e.flags & 128) !== 0, u = i.rendering, u === null)
                    if (s) Ki(i, !1);
                    else {
                        if (Bt !== 0 || t !== null && (t.flags & 128) !== 0)
                            for (t = e.child; t !== null;) {
                                if (u = es(t), u !== null) {
                                    for (e.flags |= 128, Ki(i, !1), t = u.updateQueue, e.updateQueue = t, ms(e, t), e.subtreeFlags = 0, t = n, n = e.child; n !== null;) nd(n, t), n = n.sibling;
                                    return Q(qt, qt.current & 1 | 2), bt && sn(e, i.treeForkCount), e.child
                                }
                                t = t.sibling
                            }
                        i.tail !== null && ve() > xs && (e.flags |= 128, s = !0, Ki(i, !1), e.lanes = 4194304)
                    }
                else {
                    if (!s)
                        if (t = es(u), t !== null) {
                            if (e.flags |= 128, s = !0, t = t.updateQueue, e.updateQueue = t, ms(e, t), Ki(i, !0), i.tail === null && i.tailMode === "hidden" && !u.alternate && !bt) return kt(e), null
                        } else 2 * ve() - i.renderingStartTime > xs && n !== 536870912 && (e.flags |= 128, s = !0, Ki(i, !1), e.lanes = 4194304);
                    i.isBackwards ? (u.sibling = e.child, e.child = u) : (t = i.last, t !== null ? t.sibling = u : e.child = u, i.last = u)
                }
                return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = ve(), t.sibling = null, n = qt.current, Q(qt, s ? n & 1 | 2 : n & 1), bt && sn(e, i.treeForkCount), t) : (kt(e), null);
            case 22:
            case 23:
                return Ee(e), mr(), i = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== i && (e.flags |= 8192) : i && (e.flags |= 8192), i ? (n & 536870912) !== 0 && (e.flags & 128) === 0 && (kt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : kt(e), n = e.updateQueue, n !== null && ms(e, n.retryQueue), n = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), i = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool), i !== n && (e.flags |= 2048), t !== null && U(ra), null;
            case 24:
                return n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), rn(Xt), kt(e), null;
            case 25:
                return null;
            case 30:
                return null
        }
        throw Error(o(156, e.tag))
    }

    function Qv(t, e) {
        switch (Io(e), e.tag) {
            case 1:
                return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
            case 3:
                return rn(Xt), Yt(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
            case 26:
            case 27:
            case 5:
                return Ml(e), null;
            case 31:
                if (e.memoizedState !== null) {
                    if (Ee(e), e.alternate === null) throw Error(o(340));
                    la()
                }
                return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
            case 13:
                if (Ee(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
                    if (e.alternate === null) throw Error(o(340));
                    la()
                }
                return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
            case 19:
                return U(qt), null;
            case 4:
                return Yt(), null;
            case 10:
                return rn(e.type), null;
            case 22:
            case 23:
                return Ee(e), mr(), t !== null && U(ra), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
            case 24:
                return rn(Xt), null;
            case 25:
                return null;
            default:
                return null
        }
    }

    function jh(t, e) {
        switch (Io(e), e.tag) {
            case 3:
                rn(Xt), Yt();
                break;
            case 26:
            case 27:
            case 5:
                Ml(e);
                break;
            case 4:
                Yt();
                break;
            case 31:
                e.memoizedState !== null && Ee(e);
                break;
            case 13:
                Ee(e);
                break;
            case 19:
                U(qt);
                break;
            case 10:
                rn(e.type);
                break;
            case 22:
            case 23:
                Ee(e), mr(), t !== null && U(ra);
                break;
            case 24:
                rn(Xt)
        }
    }

    function Zi(t, e) {
        try {
            var n = e.updateQueue,
                i = n !== null ? n.lastEffect : null;
            if (i !== null) {
                var s = i.next;
                n = s;
                do {
                    if ((n.tag & t) === t) {
                        i = void 0;
                        var u = n.create,
                            f = n.inst;
                        i = u(), f.destroy = i
                    }
                    n = n.next
                } while (n !== s)
            }
        } catch (g) {
            wt(e, e.return, g)
        }
    }

    function zn(t, e, n) {
        try {
            var i = e.updateQueue,
                s = i !== null ? i.lastEffect : null;
            if (s !== null) {
                var u = s.next;
                i = u;
                do {
                    if ((i.tag & t) === t) {
                        var f = i.inst,
                            g = f.destroy;
                        if (g !== void 0) {
                            f.destroy = void 0, s = e;
                            var T = n,
                                D = g;
                            try {
                                D()
                            } catch (_) {
                                wt(s, T, _)
                            }
                        }
                    }
                    i = i.next
                } while (i !== u)
            }
        } catch (_) {
            wt(e, e.return, _)
        }
    }

    function Ch(t) {
        var e = t.updateQueue;
        if (e !== null) {
            var n = t.stateNode;
            try {
                bd(e, n)
            } catch (i) {
                wt(t, t.return, i)
            }
        }
    }

    function Rh(t, e, n) {
        n.props = ha(t.type, t.memoizedProps), n.state = t.memoizedState;
        try {
            n.componentWillUnmount()
        } catch (i) {
            wt(t, e, i)
        }
    }

    function Qi(t, e) {
        try {
            var n = t.ref;
            if (n !== null) {
                switch (t.tag) {
                    case 26:
                    case 27:
                    case 5:
                        var i = t.stateNode;
                        break;
                    case 30:
                        i = t.stateNode;
                        break;
                    default:
                        i = t.stateNode
                }
                typeof n == "function" ? t.refCleanup = n(i) : n.current = i
            }
        } catch (s) {
            wt(t, e, s)
        }
    }

    function Fe(t, e) {
        var n = t.ref,
            i = t.refCleanup;
        if (n !== null)
            if (typeof i == "function") try {
                i()
            } catch (s) {
                wt(t, e, s)
            } finally {
                t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null)
            } else if (typeof n == "function") try {
                n(null)
            } catch (s) {
                wt(t, e, s)
            } else n.current = null
    }

    function Oh(t) {
        var e = t.type,
            n = t.memoizedProps,
            i = t.stateNode;
        try {
            t: switch (e) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                    n.autoFocus && i.focus();
                    break t;
                case "img":
                    n.src ? i.src = n.src : n.srcSet && (i.srcset = n.srcSet)
            }
        }
        catch (s) {
            wt(t, t.return, s)
        }
    }

    function Zr(t, e, n) {
        try {
            var i = t.stateNode;
            p1(i, t.type, n, e), i[fe] = e
        } catch (s) {
            wt(t, t.return, s)
        }
    }

    function zh(t) {
        return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Hn(t.type) || t.tag === 4
    }

    function Qr(t) {
        t: for (;;) {
            for (; t.sibling === null;) {
                if (t.return === null || zh(t.return)) return null;
                t = t.return
            }
            for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18;) {
                if (t.tag === 27 && Hn(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
                t.child.return = t, t = t.child
            }
            if (!(t.flags & 2)) return t.stateNode
        }
    }

    function Jr(t, e, n) {
        var i = t.tag;
        if (i === 5 || i === 6) t = t.stateNode, e ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(t, e) : (e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, e.appendChild(t), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = nn));
        else if (i !== 4 && (i === 27 && Hn(t.type) && (n = t.stateNode, e = null), t = t.child, t !== null))
            for (Jr(t, e, n), t = t.sibling; t !== null;) Jr(t, e, n), t = t.sibling
    }

    function ps(t, e, n) {
        var i = t.tag;
        if (i === 5 || i === 6) t = t.stateNode, e ? n.insertBefore(t, e) : n.appendChild(t);
        else if (i !== 4 && (i === 27 && Hn(t.type) && (n = t.stateNode), t = t.child, t !== null))
            for (ps(t, e, n), t = t.sibling; t !== null;) ps(t, e, n), t = t.sibling
    }

    function _h(t) {
        var e = t.stateNode,
            n = t.memoizedProps;
        try {
            for (var i = t.type, s = e.attributes; s.length;) e.removeAttributeNode(s[0]);
            ae(e, i, n), e[It] = t, e[fe] = n
        } catch (u) {
            wt(t, t.return, u)
        }
    }
    var hn = !1,
        Qt = !1,
        Fr = !1,
        Vh = typeof WeakSet == "function" ? WeakSet : Set,
        $t = null;

    function Jv(t, e) {
        if (t = t.containerInfo, yu = ks, t = Qf(t), qo(t)) {
            if ("selectionStart" in t) var n = {
                start: t.selectionStart,
                end: t.selectionEnd
            };
            else t: {
                n = (n = t.ownerDocument) && n.defaultView || window;
                var i = n.getSelection && n.getSelection();
                if (i && i.rangeCount !== 0) {
                    n = i.anchorNode;
                    var s = i.anchorOffset,
                        u = i.focusNode;
                    i = i.focusOffset;
                    try {
                        n.nodeType, u.nodeType
                    } catch {
                        n = null;
                        break t
                    }
                    var f = 0,
                        g = -1,
                        T = -1,
                        D = 0,
                        _ = 0,
                        L = t,
                        C = null;
                    e: for (;;) {
                        for (var R; L !== n || s !== 0 && L.nodeType !== 3 || (g = f + s), L !== u || i !== 0 && L.nodeType !== 3 || (T = f + i), L.nodeType === 3 && (f += L.nodeValue.length), (R = L.firstChild) !== null;) C = L, L = R;
                        for (;;) {
                            if (L === t) break e;
                            if (C === n && ++D === s && (g = f), C === u && ++_ === i && (T = f), (R = L.nextSibling) !== null) break;
                            L = C, C = L.parentNode
                        }
                        L = R
                    }
                    n = g === -1 || T === -1 ? null : {
                        start: g,
                        end: T
                    }
                } else n = null
            }
            n = n || {
                start: 0,
                end: 0
            }
        } else n = null;
        for (gu = {
                focusedElem: t,
                selectionRange: n
            }, ks = !1, $t = e; $t !== null;)
            if (e = $t, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null) t.return = e, $t = t;
            else
                for (; $t !== null;) {
                    switch (e = $t, u = e.alternate, t = e.flags, e.tag) {
                        case 0:
                            if ((t & 4) !== 0 && (t = e.updateQueue, t = t !== null ? t.events : null, t !== null))
                                for (n = 0; n < t.length; n++) s = t[n], s.ref.impl = s.nextImpl;
                            break;
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if ((t & 1024) !== 0 && u !== null) {
                                t = void 0, n = e, s = u.memoizedProps, u = u.memoizedState, i = n.stateNode;
                                try {
                                    var P = ha(n.type, s);
                                    t = i.getSnapshotBeforeUpdate(P, u), i.__reactInternalSnapshotBeforeUpdate = t
                                } catch (lt) {
                                    wt(n, n.return, lt)
                                }
                            }
                            break;
                        case 3:
                            if ((t & 1024) !== 0) {
                                if (t = e.stateNode.containerInfo, n = t.nodeType, n === 9) bu(t);
                                else if (n === 1) switch (t.nodeName) {
                                    case "HEAD":
                                    case "HTML":
                                    case "BODY":
                                        bu(t);
                                        break;
                                    default:
                                        t.textContent = ""
                                }
                            }
                            break;
                        case 5:
                        case 26:
                        case 27:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            if ((t & 1024) !== 0) throw Error(o(163))
                    }
                    if (t = e.sibling, t !== null) {
                        t.return = e.return, $t = t;
                        break
                    }
                    $t = e.return
                }
    }

    function kh(t, e, n) {
        var i = n.flags;
        switch (n.tag) {
            case 0:
            case 11:
            case 15:
                pn(t, n), i & 4 && Zi(5, n);
                break;
            case 1:
                if (pn(t, n), i & 4)
                    if (t = n.stateNode, e === null) try {
                        t.componentDidMount()
                    } catch (f) {
                        wt(n, n.return, f)
                    } else {
                        var s = ha(n.type, e.memoizedProps);
                        e = e.memoizedState;
                        try {
                            t.componentDidUpdate(s, e, t.__reactInternalSnapshotBeforeUpdate)
                        } catch (f) {
                            wt(n, n.return, f)
                        }
                    }
                i & 64 && Ch(n), i & 512 && Qi(n, n.return);
                break;
            case 3:
                if (pn(t, n), i & 64 && (t = n.updateQueue, t !== null)) {
                    if (e = null, n.child !== null) switch (n.child.tag) {
                        case 27:
                        case 5:
                            e = n.child.stateNode;
                            break;
                        case 1:
                            e = n.child.stateNode
                    }
                    try {
                        bd(t, e)
                    } catch (f) {
                        wt(n, n.return, f)
                    }
                }
                break;
            case 27:
                e === null && i & 4 && _h(n);
            case 26:
            case 5:
                pn(t, n), e === null && i & 4 && Oh(n), i & 512 && Qi(n, n.return);
                break;
            case 12:
                pn(t, n);
                break;
            case 31:
                pn(t, n), i & 4 && Bh(t, n);
                break;
            case 13:
                pn(t, n), i & 4 && Hh(t, n), i & 64 && (t = n.memoizedState, t !== null && (t = t.dehydrated, t !== null && (n = a1.bind(null, n), A1(t, n))));
                break;
            case 22:
                if (i = n.memoizedState !== null || hn, !i) {
                    e = e !== null && e.memoizedState !== null || Qt, s = hn;
                    var u = Qt;
                    hn = i, (Qt = e) && !u ? yn(t, n, (n.subtreeFlags & 8772) !== 0) : pn(t, n), hn = s, Qt = u
                }
                break;
            case 30:
                break;
            default:
                pn(t, n)
        }
    }

    function Lh(t) {
        var e = t.alternate;
        e !== null && (t.alternate = null, Lh(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Mo(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null
    }
    var Lt = null,
        he = !1;

    function mn(t, e, n) {
        for (n = n.child; n !== null;) Uh(t, e, n), n = n.sibling
    }

    function Uh(t, e, n) {
        if (xe && typeof xe.onCommitFiberUnmount == "function") try {
            xe.onCommitFiberUnmount(gi, n)
        } catch {}
        switch (n.tag) {
            case 26:
                Qt || Fe(n, e), mn(t, e, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
                break;
            case 27:
                Qt || Fe(n, e);
                var i = Lt,
                    s = he;
                Hn(n.type) && (Lt = n.stateNode, he = !1), mn(t, e, n), nl(n.stateNode), Lt = i, he = s;
                break;
            case 5:
                Qt || Fe(n, e);
            case 6:
                if (i = Lt, s = he, Lt = null, mn(t, e, n), Lt = i, he = s, Lt !== null)
                    if (he) try {
                        (Lt.nodeType === 9 ? Lt.body : Lt.nodeName === "HTML" ? Lt.ownerDocument.body : Lt).removeChild(n.stateNode)
                    } catch (u) {
                        wt(n, e, u)
                    } else try {
                        Lt.removeChild(n.stateNode)
                    } catch (u) {
                        wt(n, e, u)
                    }
                break;
            case 18:
                Lt !== null && (he ? (t = Lt, Cm(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, n.stateNode), li(t)) : Cm(Lt, n.stateNode));
                break;
            case 4:
                i = Lt, s = he, Lt = n.stateNode.containerInfo, he = !0, mn(t, e, n), Lt = i, he = s;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                zn(2, n, e), Qt || zn(4, n, e), mn(t, e, n);
                break;
            case 1:
                Qt || (Fe(n, e), i = n.stateNode, typeof i.componentWillUnmount == "function" && Rh(n, e, i)), mn(t, e, n);
                break;
            case 21:
                mn(t, e, n);
                break;
            case 22:
                Qt = (i = Qt) || n.memoizedState !== null, mn(t, e, n), Qt = i;
                break;
            default:
                mn(t, e, n)
        }
    }

    function Bh(t, e) {
        if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
            t = t.dehydrated;
            try {
                li(t)
            } catch (n) {
                wt(e, e.return, n)
            }
        }
    }

    function Hh(t, e) {
        if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
            li(t)
        } catch (n) {
            wt(e, e.return, n)
        }
    }

    function Fv(t) {
        switch (t.tag) {
            case 31:
            case 13:
            case 19:
                var e = t.stateNode;
                return e === null && (e = t.stateNode = new Vh), e;
            case 22:
                return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Vh), e;
            default:
                throw Error(o(435, t.tag))
        }
    }

    function ys(t, e) {
        var n = Fv(t);
        e.forEach(function(i) {
            if (!n.has(i)) {
                n.add(i);
                var s = i1.bind(null, t, i);
                i.then(s, s)
            }
        })
    }

    function me(t, e) {
        var n = e.deletions;
        if (n !== null)
            for (var i = 0; i < n.length; i++) {
                var s = n[i],
                    u = t,
                    f = e,
                    g = f;
                t: for (; g !== null;) {
                    switch (g.tag) {
                        case 27:
                            if (Hn(g.type)) {
                                Lt = g.stateNode, he = !1;
                                break t
                            }
                            break;
                        case 5:
                            Lt = g.stateNode, he = !1;
                            break t;
                        case 3:
                        case 4:
                            Lt = g.stateNode.containerInfo, he = !0;
                            break t
                    }
                    g = g.return
                }
                if (Lt === null) throw Error(o(160));
                Uh(u, f, s), Lt = null, he = !1, u = s.alternate, u !== null && (u.return = null), s.return = null
            }
        if (e.subtreeFlags & 13886)
            for (e = e.child; e !== null;) Yh(e, t), e = e.sibling
    }
    var qe = null;

    function Yh(t, e) {
        var n = t.alternate,
            i = t.flags;
        switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                me(e, t), pe(t), i & 4 && (zn(3, t, t.return), Zi(3, t), zn(5, t, t.return));
                break;
            case 1:
                me(e, t), pe(t), i & 512 && (Qt || n === null || Fe(n, n.return)), i & 64 && hn && (t = t.updateQueue, t !== null && (i = t.callbacks, i !== null && (n = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = n === null ? i : n.concat(i))));
                break;
            case 26:
                var s = qe;
                if (me(e, t), pe(t), i & 512 && (Qt || n === null || Fe(n, n.return)), i & 4) {
                    var u = n !== null ? n.memoizedState : null;
                    if (i = t.memoizedState, n === null)
                        if (i === null)
                            if (t.stateNode === null) {
                                t: {
                                    i = t.type,
                                    n = t.memoizedProps,
                                    s = s.ownerDocument || s;e: switch (i) {
                                        case "title":
                                            u = s.getElementsByTagName("title")[0], (!u || u[bi] || u[It] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = s.createElement(i), s.head.insertBefore(u, s.querySelector("head > title"))), ae(u, i, n), u[It] = t, Wt(u), i = u;
                                            break t;
                                        case "link":
                                            var f = Ym("link", "href", s).get(i + (n.href || ""));
                                            if (f) {
                                                for (var g = 0; g < f.length; g++)
                                                    if (u = f[g], u.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && u.getAttribute("rel") === (n.rel == null ? null : n.rel) && u.getAttribute("title") === (n.title == null ? null : n.title) && u.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                                                        f.splice(g, 1);
                                                        break e
                                                    }
                                            }
                                            u = s.createElement(i), ae(u, i, n), s.head.appendChild(u);
                                            break;
                                        case "meta":
                                            if (f = Ym("meta", "content", s).get(i + (n.content || ""))) {
                                                for (g = 0; g < f.length; g++)
                                                    if (u = f[g], u.getAttribute("content") === (n.content == null ? null : "" + n.content) && u.getAttribute("name") === (n.name == null ? null : n.name) && u.getAttribute("property") === (n.property == null ? null : n.property) && u.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && u.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                                                        f.splice(g, 1);
                                                        break e
                                                    }
                                            }
                                            u = s.createElement(i), ae(u, i, n), s.head.appendChild(u);
                                            break;
                                        default:
                                            throw Error(o(468, i))
                                    }
                                    u[It] = t,
                                    Wt(u),
                                    i = u
                                }
                                t.stateNode = i
                            }
                    else qm(s, t.type, t.stateNode);
                    else t.stateNode = Hm(s, i, t.memoizedProps);
                    else u !== i ? (u === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : u.count--, i === null ? qm(s, t.type, t.stateNode) : Hm(s, i, t.memoizedProps)) : i === null && t.stateNode !== null && Zr(t, t.memoizedProps, n.memoizedProps)
                }
                break;
            case 27:
                me(e, t), pe(t), i & 512 && (Qt || n === null || Fe(n, n.return)), n !== null && i & 4 && Zr(t, t.memoizedProps, n.memoizedProps);
                break;
            case 5:
                if (me(e, t), pe(t), i & 512 && (Qt || n === null || Fe(n, n.return)), t.flags & 32) {
                    s = t.stateNode;
                    try {
                        Da(s, "")
                    } catch (P) {
                        wt(t, t.return, P)
                    }
                }
                i & 4 && t.stateNode != null && (s = t.memoizedProps, Zr(t, s, n !== null ? n.memoizedProps : s)), i & 1024 && (Fr = !0);
                break;
            case 6:
                if (me(e, t), pe(t), i & 4) {
                    if (t.stateNode === null) throw Error(o(162));
                    i = t.memoizedProps, n = t.stateNode;
                    try {
                        n.nodeValue = i
                    } catch (P) {
                        wt(t, t.return, P)
                    }
                }
                break;
            case 3:
                if (Os = null, s = qe, qe = Cs(e.containerInfo), me(e, t), qe = s, pe(t), i & 4 && n !== null && n.memoizedState.isDehydrated) try {
                    li(e.containerInfo)
                } catch (P) {
                    wt(t, t.return, P)
                }
                Fr && (Fr = !1, qh(t));
                break;
            case 4:
                i = qe, qe = Cs(t.stateNode.containerInfo), me(e, t), pe(t), qe = i;
                break;
            case 12:
                me(e, t), pe(t);
                break;
            case 31:
                me(e, t), pe(t), i & 4 && (i = t.updateQueue, i !== null && (t.updateQueue = null, ys(t, i)));
                break;
            case 13:
                me(e, t), pe(t), t.child.flags & 8192 && t.memoizedState !== null != (n !== null && n.memoizedState !== null) && (vs = ve()), i & 4 && (i = t.updateQueue, i !== null && (t.updateQueue = null, ys(t, i)));
                break;
            case 22:
                s = t.memoizedState !== null;
                var T = n !== null && n.memoizedState !== null,
                    D = hn,
                    _ = Qt;
                if (hn = D || s, Qt = _ || T, me(e, t), Qt = _, hn = D, pe(t), i & 8192) t: for (e = t.stateNode, e._visibility = s ? e._visibility & -2 : e._visibility | 1, s && (n === null || T || hn || Qt || ma(t)), n = null, e = t;;) {
                    if (e.tag === 5 || e.tag === 26) {
                        if (n === null) {
                            T = n = e;
                            try {
                                if (u = T.stateNode, s) f = u.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                                else {
                                    g = T.stateNode;
                                    var L = T.memoizedProps.style,
                                        C = L != null && L.hasOwnProperty("display") ? L.display : null;
                                    g.style.display = C == null || typeof C == "boolean" ? "" : ("" + C).trim()
                                }
                            } catch (P) {
                                wt(T, T.return, P)
                            }
                        }
                    } else if (e.tag === 6) {
                        if (n === null) {
                            T = e;
                            try {
                                T.stateNode.nodeValue = s ? "" : T.memoizedProps
                            } catch (P) {
                                wt(T, T.return, P)
                            }
                        }
                    } else if (e.tag === 18) {
                        if (n === null) {
                            T = e;
                            try {
                                var R = T.stateNode;
                                s ? Rm(R, !0) : Rm(T.stateNode, !1)
                            } catch (P) {
                                wt(T, T.return, P)
                            }
                        }
                    } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
                        e.child.return = e, e = e.child;
                        continue
                    }
                    if (e === t) break t;
                    for (; e.sibling === null;) {
                        if (e.return === null || e.return === t) break t;
                        n === e && (n = null), e = e.return
                    }
                    n === e && (n = null), e.sibling.return = e.return, e = e.sibling
                }
                i & 4 && (i = t.updateQueue, i !== null && (n = i.retryQueue, n !== null && (i.retryQueue = null, ys(t, n))));
                break;
            case 19:
                me(e, t), pe(t), i & 4 && (i = t.updateQueue, i !== null && (t.updateQueue = null, ys(t, i)));
                break;
            case 30:
                break;
            case 21:
                break;
            default:
                me(e, t), pe(t)
        }
    }

    function pe(t) {
        var e = t.flags;
        if (e & 2) {
            try {
                for (var n, i = t.return; i !== null;) {
                    if (zh(i)) {
                        n = i;
                        break
                    }
                    i = i.return
                }
                if (n == null) throw Error(o(160));
                switch (n.tag) {
                    case 27:
                        var s = n.stateNode,
                            u = Qr(t);
                        ps(t, u, s);
                        break;
                    case 5:
                        var f = n.stateNode;
                        n.flags & 32 && (Da(f, ""), n.flags &= -33);
                        var g = Qr(t);
                        ps(t, g, f);
                        break;
                    case 3:
                    case 4:
                        var T = n.stateNode.containerInfo,
                            D = Qr(t);
                        Jr(t, D, T);
                        break;
                    default:
                        throw Error(o(161))
                }
            } catch (_) {
                wt(t, t.return, _)
            }
            t.flags &= -3
        }
        e & 4096 && (t.flags &= -4097)
    }

    function qh(t) {
        if (t.subtreeFlags & 1024)
            for (t = t.child; t !== null;) {
                var e = t;
                qh(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling
            }
    }

    function pn(t, e) {
        if (e.subtreeFlags & 8772)
            for (e = e.child; e !== null;) kh(t, e.alternate, e), e = e.sibling
    }

    function ma(t) {
        for (t = t.child; t !== null;) {
            var e = t;
            switch (e.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    zn(4, e, e.return), ma(e);
                    break;
                case 1:
                    Fe(e, e.return);
                    var n = e.stateNode;
                    typeof n.componentWillUnmount == "function" && Rh(e, e.return, n), ma(e);
                    break;
                case 27:
                    nl(e.stateNode);
                case 26:
                case 5:
                    Fe(e, e.return), ma(e);
                    break;
                case 22:
                    e.memoizedState === null && ma(e);
                    break;
                case 30:
                    ma(e);
                    break;
                default:
                    ma(e)
            }
            t = t.sibling
        }
    }

    function yn(t, e, n) {
        for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null;) {
            var i = e.alternate,
                s = t,
                u = e,
                f = u.flags;
            switch (u.tag) {
                case 0:
                case 11:
                case 15:
                    yn(s, u, n), Zi(4, u);
                    break;
                case 1:
                    if (yn(s, u, n), i = u, s = i.stateNode, typeof s.componentDidMount == "function") try {
                        s.componentDidMount()
                    } catch (D) {
                        wt(i, i.return, D)
                    }
                    if (i = u, s = i.updateQueue, s !== null) {
                        var g = i.stateNode;
                        try {
                            var T = s.shared.hiddenCallbacks;
                            if (T !== null)
                                for (s.shared.hiddenCallbacks = null, s = 0; s < T.length; s++) xd(T[s], g)
                        } catch (D) {
                            wt(i, i.return, D)
                        }
                    }
                    n && f & 64 && Ch(u), Qi(u, u.return);
                    break;
                case 27:
                    _h(u);
                case 26:
                case 5:
                    yn(s, u, n), n && i === null && f & 4 && Oh(u), Qi(u, u.return);
                    break;
                case 12:
                    yn(s, u, n);
                    break;
                case 31:
                    yn(s, u, n), n && f & 4 && Bh(s, u);
                    break;
                case 13:
                    yn(s, u, n), n && f & 4 && Hh(s, u);
                    break;
                case 22:
                    u.memoizedState === null && yn(s, u, n), Qi(u, u.return);
                    break;
                case 30:
                    break;
                default:
                    yn(s, u, n)
            }
            e = e.sibling
        }
    }

    function Pr(t, e) {
        var n = null;
        t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== n && (t != null && t.refCount++, n != null && zi(n))
    }

    function Wr(t, e) {
        t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && zi(t))
    }

    function Ge(t, e, n, i) {
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null;) Gh(t, e, n, i), e = e.sibling
    }

    function Gh(t, e, n, i) {
        var s = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 15:
                Ge(t, e, n, i), s & 2048 && Zi(9, e);
                break;
            case 1:
                Ge(t, e, n, i);
                break;
            case 3:
                Ge(t, e, n, i), s & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && zi(t)));
                break;
            case 12:
                if (s & 2048) {
                    Ge(t, e, n, i), t = e.stateNode;
                    try {
                        var u = e.memoizedProps,
                            f = u.id,
                            g = u.onPostCommit;
                        typeof g == "function" && g(f, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0)
                    } catch (T) {
                        wt(e, e.return, T)
                    }
                } else Ge(t, e, n, i);
                break;
            case 31:
                Ge(t, e, n, i);
                break;
            case 13:
                Ge(t, e, n, i);
                break;
            case 23:
                break;
            case 22:
                u = e.stateNode, f = e.alternate, e.memoizedState !== null ? u._visibility & 2 ? Ge(t, e, n, i) : Ji(t, e) : u._visibility & 2 ? Ge(t, e, n, i) : (u._visibility |= 2, Ja(t, e, n, i, (e.subtreeFlags & 10256) !== 0 || !1)), s & 2048 && Pr(f, e);
                break;
            case 24:
                Ge(t, e, n, i), s & 2048 && Wr(e.alternate, e);
                break;
            default:
                Ge(t, e, n, i)
        }
    }

    function Ja(t, e, n, i, s) {
        for (s = s && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null;) {
            var u = t,
                f = e,
                g = n,
                T = i,
                D = f.flags;
            switch (f.tag) {
                case 0:
                case 11:
                case 15:
                    Ja(u, f, g, T, s), Zi(8, f);
                    break;
                case 23:
                    break;
                case 22:
                    var _ = f.stateNode;
                    f.memoizedState !== null ? _._visibility & 2 ? Ja(u, f, g, T, s) : Ji(u, f) : (_._visibility |= 2, Ja(u, f, g, T, s)), s && D & 2048 && Pr(f.alternate, f);
                    break;
                case 24:
                    Ja(u, f, g, T, s), s && D & 2048 && Wr(f.alternate, f);
                    break;
                default:
                    Ja(u, f, g, T, s)
            }
            e = e.sibling
        }
    }

    function Ji(t, e) {
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null;) {
                var n = t,
                    i = e,
                    s = i.flags;
                switch (i.tag) {
                    case 22:
                        Ji(n, i), s & 2048 && Pr(i.alternate, i);
                        break;
                    case 24:
                        Ji(n, i), s & 2048 && Wr(i.alternate, i);
                        break;
                    default:
                        Ji(n, i)
                }
                e = e.sibling
            }
    }
    var Fi = 8192;

    function Fa(t, e, n) {
        if (t.subtreeFlags & Fi)
            for (t = t.child; t !== null;) Xh(t, e, n), t = t.sibling
    }

    function Xh(t, e, n) {
        switch (t.tag) {
            case 26:
                Fa(t, e, n), t.flags & Fi && t.memoizedState !== null && V1(n, qe, t.memoizedState, t.memoizedProps);
                break;
            case 5:
                Fa(t, e, n);
                break;
            case 3:
            case 4:
                var i = qe;
                qe = Cs(t.stateNode.containerInfo), Fa(t, e, n), qe = i;
                break;
            case 22:
                t.memoizedState === null && (i = t.alternate, i !== null && i.memoizedState !== null ? (i = Fi, Fi = 16777216, Fa(t, e, n), Fi = i) : Fa(t, e, n));
                break;
            default:
                Fa(t, e, n)
        }
    }

    function Kh(t) {
        var e = t.alternate;
        if (e !== null && (t = e.child, t !== null)) {
            e.child = null;
            do e = t.sibling, t.sibling = null, t = e; while (t !== null)
        }
    }

    function Pi(t) {
        var e = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (e !== null)
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    $t = i, Qh(i, t)
                }
            Kh(t)
        }
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null;) Zh(t), t = t.sibling
    }

    function Zh(t) {
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                Pi(t), t.flags & 2048 && zn(9, t, t.return);
                break;
            case 3:
                Pi(t);
                break;
            case 12:
                Pi(t);
                break;
            case 22:
                var e = t.stateNode;
                t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, gs(t)) : Pi(t);
                break;
            default:
                Pi(t)
        }
    }

    function gs(t) {
        var e = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (e !== null)
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    $t = i, Qh(i, t)
                }
            Kh(t)
        }
        for (t = t.child; t !== null;) {
            switch (e = t, e.tag) {
                case 0:
                case 11:
                case 15:
                    zn(8, e, e.return), gs(e);
                    break;
                case 22:
                    n = e.stateNode, n._visibility & 2 && (n._visibility &= -3, gs(e));
                    break;
                default:
                    gs(e)
            }
            t = t.sibling
        }
    }

    function Qh(t, e) {
        for (; $t !== null;) {
            var n = $t;
            switch (n.tag) {
                case 0:
                case 11:
                case 15:
                    zn(8, n, e);
                    break;
                case 23:
                case 22:
                    if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
                        var i = n.memoizedState.cachePool.pool;
                        i != null && i.refCount++
                    }
                    break;
                case 24:
                    zi(n.memoizedState.cache)
            }
            if (i = n.child, i !== null) i.return = n, $t = i;
            else t: for (n = t; $t !== null;) {
                i = $t;
                var s = i.sibling,
                    u = i.return;
                if (Lh(i), i === n) {
                    $t = null;
                    break t
                }
                if (s !== null) {
                    s.return = u, $t = s;
                    break t
                }
                $t = u
            }
        }
    }
    var Pv = {
            getCacheForType: function(t) {
                var e = ee(Xt),
                    n = e.data.get(t);
                return n === void 0 && (n = t(), e.data.set(t, n)), n
            },
            cacheSignal: function() {
                return ee(Xt).controller.signal
            }
        },
        Wv = typeof WeakMap == "function" ? WeakMap : Map,
        At = 0,
        Rt = null,
        pt = null,
        gt = 0,
        Nt = 0,
        Me = null,
        _n = !1,
        Pa = !1,
        $r = !1,
        gn = 0,
        Bt = 0,
        Vn = 0,
        pa = 0,
        Ir = 0,
        Ne = 0,
        Wa = 0,
        Wi = null,
        ye = null,
        tu = !1,
        vs = 0,
        Jh = 0,
        xs = 1 / 0,
        bs = null,
        kn = null,
        Ft = 0,
        Ln = null,
        $a = null,
        vn = 0,
        eu = 0,
        nu = null,
        Fh = null,
        $i = 0,
        au = null;

    function we() {
        return (At & 2) !== 0 && gt !== 0 ? gt & -gt : O.T !== null ? uu() : ff()
    }

    function Ph() {
        if (Ne === 0)
            if ((gt & 536870912) === 0 || bt) {
                var t = Dl;
                Dl <<= 1, (Dl & 3932160) === 0 && (Dl = 262144), Ne = t
            } else Ne = 536870912;
        return t = Ae.current, t !== null && (t.flags |= 32), Ne
    }

    function ge(t, e, n) {
        (t === Rt && (Nt === 2 || Nt === 9) || t.cancelPendingCommit !== null) && (Ia(t, 0), Un(t, gt, Ne, !1)), xi(t, n), ((At & 2) === 0 || t !== Rt) && (t === Rt && ((At & 2) === 0 && (pa |= n), Bt === 4 && Un(t, gt, Ne, !1)), Pe(t))
    }

    function Wh(t, e, n) {
        if ((At & 6) !== 0) throw Error(o(327));
        var i = !n && (e & 127) === 0 && (e & t.expiredLanes) === 0 || vi(t, e),
            s = i ? t1(t, e) : lu(t, e, !0),
            u = i;
        do {
            if (s === 0) {
                Pa && !i && Un(t, e, 0, !1);
                break
            } else {
                if (n = t.current.alternate, u && !$v(n)) {
                    s = lu(t, e, !1), u = !1;
                    continue
                }
                if (s === 2) {
                    if (u = e, t.errorRecoveryDisabledLanes & u) var f = 0;
                    else f = t.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
                    if (f !== 0) {
                        e = f;
                        t: {
                            var g = t;s = Wi;
                            var T = g.current.memoizedState.isDehydrated;
                            if (T && (Ia(g, f).flags |= 256), f = lu(g, f, !1), f !== 2) {
                                if ($r && !T) {
                                    g.errorRecoveryDisabledLanes |= u, pa |= u, s = 4;
                                    break t
                                }
                                u = ye, ye = s, u !== null && (ye === null ? ye = u : ye.push.apply(ye, u))
                            }
                            s = f
                        }
                        if (u = !1, s !== 2) continue
                    }
                }
                if (s === 1) {
                    Ia(t, 0), Un(t, e, 0, !0);
                    break
                }
                t: {
                    switch (i = t, u = s, u) {
                        case 0:
                        case 1:
                            throw Error(o(345));
                        case 4:
                            if ((e & 4194048) !== e) break;
                        case 6:
                            Un(i, e, Ne, !_n);
                            break t;
                        case 2:
                            ye = null;
                            break;
                        case 3:
                        case 5:
                            break;
                        default:
                            throw Error(o(329))
                    }
                    if ((e & 62914560) === e && (s = vs + 300 - ve(), 10 < s)) {
                        if (Un(i, e, Ne, !_n), Cl(i, 0, !0) !== 0) break t;
                        vn = e, i.timeoutHandle = Dm($h.bind(null, i, n, ye, bs, tu, e, Ne, pa, Wa, _n, u, "Throttled", -0, 0), s);
                        break t
                    }
                    $h(i, n, ye, bs, tu, e, Ne, pa, Wa, _n, u, null, -0, 0)
                }
            }
            break
        } while (!0);
        Pe(t)
    }

    function $h(t, e, n, i, s, u, f, g, T, D, _, L, C, R) {
        if (t.timeoutHandle = -1, L = e.subtreeFlags, L & 8192 || (L & 16785408) === 16785408) {
            L = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: nn
            }, Xh(e, u, L);
            var P = (u & 62914560) === u ? vs - ve() : (u & 4194048) === u ? Jh - ve() : 0;
            if (P = k1(L, P), P !== null) {
                vn = u, t.cancelPendingCommit = P(sm.bind(null, t, e, u, n, i, s, f, g, T, _, L, null, C, R)), Un(t, u, f, !D);
                return
            }
        }
        sm(t, e, u, n, i, s, f, g, T)
    }

    function $v(t) {
        for (var e = t;;) {
            var n = e.tag;
            if ((n === 0 || n === 11 || n === 15) && e.flags & 16384 && (n = e.updateQueue, n !== null && (n = n.stores, n !== null)))
                for (var i = 0; i < n.length; i++) {
                    var s = n[i],
                        u = s.getSnapshot;
                    s = s.value;
                    try {
                        if (!Se(u(), s)) return !1
                    } catch {
                        return !1
                    }
                }
            if (n = e.child, e.subtreeFlags & 16384 && n !== null) n.return = e, e = n;
            else {
                if (e === t) break;
                for (; e.sibling === null;) {
                    if (e.return === null || e.return === t) return !0;
                    e = e.return
                }
                e.sibling.return = e.return, e = e.sibling
            }
        }
        return !0
    }

    function Un(t, e, n, i) {
        e &= ~Ir, e &= ~pa, t.suspendedLanes |= e, t.pingedLanes &= ~e, i && (t.warmLanes |= e), i = t.expirationTimes;
        for (var s = e; 0 < s;) {
            var u = 31 - be(s),
                f = 1 << u;
            i[u] = -1, s &= ~f
        }
        n !== 0 && rf(t, n, e)
    }

    function Ss() {
        return (At & 6) === 0 ? (Ii(0), !1) : !0
    }

    function iu() {
        if (pt !== null) {
            if (Nt === 0) var t = pt.return;
            else t = pt, on = sa = null, br(t), Ga = null, Vi = 0, t = pt;
            for (; t !== null;) jh(t.alternate, t), t = t.return;
            pt = null
        }
    }

    function Ia(t, e) {
        var n = t.timeoutHandle;
        n !== -1 && (t.timeoutHandle = -1, v1(n)), n = t.cancelPendingCommit, n !== null && (t.cancelPendingCommit = null, n()), vn = 0, iu(), Rt = t, pt = n = ln(t.current, null), gt = e, Nt = 0, Me = null, _n = !1, Pa = vi(t, e), $r = !1, Wa = Ne = Ir = pa = Vn = Bt = 0, ye = Wi = null, tu = !1, (e & 8) !== 0 && (e |= e & 32);
        var i = t.entangledLanes;
        if (i !== 0)
            for (t = t.entanglements, i &= e; 0 < i;) {
                var s = 31 - be(i),
                    u = 1 << s;
                e |= t[s], i &= ~u
            }
        return gn = e, ql(), n
    }

    function Ih(t, e) {
        ft = null, O.H = Gi, e === qa || e === Pl ? (e = pd(), Nt = 3) : e === rr ? (e = pd(), Nt = 4) : Nt = e === kr ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, Me = e, pt === null && (Bt = 1, cs(t, Oe(e, t.current)))
    }

    function tm() {
        var t = Ae.current;
        return t === null ? !0 : (gt & 4194048) === gt ? ke === null : (gt & 62914560) === gt || (gt & 536870912) !== 0 ? t === ke : !1
    }

    function em() {
        var t = O.H;
        return O.H = Gi, t === null ? Gi : t
    }

    function nm() {
        var t = O.A;
        return O.A = Pv, t
    }

    function Ts() {
        Bt = 4, _n || (gt & 4194048) !== gt && Ae.current !== null || (Pa = !0), (Vn & 134217727) === 0 && (pa & 134217727) === 0 || Rt === null || Un(Rt, gt, Ne, !1)
    }

    function lu(t, e, n) {
        var i = At;
        At |= 2;
        var s = em(),
            u = nm();
        (Rt !== t || gt !== e) && (bs = null, Ia(t, e)), e = !1;
        var f = Bt;
        t: do try {
                if (Nt !== 0 && pt !== null) {
                    var g = pt,
                        T = Me;
                    switch (Nt) {
                        case 8:
                            iu(), f = 6;
                            break t;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            Ae.current === null && (e = !0);
                            var D = Nt;
                            if (Nt = 0, Me = null, ti(t, g, T, D), n && Pa) {
                                f = 0;
                                break t
                            }
                            break;
                        default:
                            D = Nt, Nt = 0, Me = null, ti(t, g, T, D)
                    }
                }
                Iv(), f = Bt;
                break
            } catch (_) {
                Ih(t, _)
            }
            while (!0);
            return e && t.shellSuspendCounter++, on = sa = null, At = i, O.H = s, O.A = u, pt === null && (Rt = null, gt = 0, ql()), f
    }

    function Iv() {
        for (; pt !== null;) am(pt)
    }

    function t1(t, e) {
        var n = At;
        At |= 2;
        var i = em(),
            s = nm();
        Rt !== t || gt !== e ? (bs = null, xs = ve() + 500, Ia(t, e)) : Pa = vi(t, e);
        t: do try {
                if (Nt !== 0 && pt !== null) {
                    e = pt;
                    var u = Me;
                    e: switch (Nt) {
                        case 1:
                            Nt = 0, Me = null, ti(t, e, u, 1);
                            break;
                        case 2:
                        case 9:
                            if (hd(u)) {
                                Nt = 0, Me = null, im(e);
                                break
                            }
                            e = function() {
                                Nt !== 2 && Nt !== 9 || Rt !== t || (Nt = 7), Pe(t)
                            }, u.then(e, e);
                            break t;
                        case 3:
                            Nt = 7;
                            break t;
                        case 4:
                            Nt = 5;
                            break t;
                        case 7:
                            hd(u) ? (Nt = 0, Me = null, im(e)) : (Nt = 0, Me = null, ti(t, e, u, 7));
                            break;
                        case 5:
                            var f = null;
                            switch (pt.tag) {
                                case 26:
                                    f = pt.memoizedState;
                                case 5:
                                case 27:
                                    var g = pt;
                                    if (f ? Gm(f) : g.stateNode.complete) {
                                        Nt = 0, Me = null;
                                        var T = g.sibling;
                                        if (T !== null) pt = T;
                                        else {
                                            var D = g.return;
                                            D !== null ? (pt = D, As(D)) : pt = null
                                        }
                                        break e
                                    }
                            }
                            Nt = 0, Me = null, ti(t, e, u, 5);
                            break;
                        case 6:
                            Nt = 0, Me = null, ti(t, e, u, 6);
                            break;
                        case 8:
                            iu(), Bt = 6;
                            break t;
                        default:
                            throw Error(o(462))
                    }
                }
                e1();
                break
            } catch (_) {
                Ih(t, _)
            }
            while (!0);
            return on = sa = null, O.H = i, O.A = s, At = n, pt !== null ? 0 : (Rt = null, gt = 0, ql(), Bt)
    }

    function e1() {
        for (; pt !== null && !Eg();) am(pt)
    }

    function am(t) {
        var e = wh(t.alternate, t, gn);
        t.memoizedProps = t.pendingProps, e === null ? As(t) : pt = e
    }

    function im(t) {
        var e = t,
            n = e.alternate;
        switch (e.tag) {
            case 15:
            case 0:
                e = Sh(n, e, e.pendingProps, e.type, void 0, gt);
                break;
            case 11:
                e = Sh(n, e, e.pendingProps, e.type.render, e.ref, gt);
                break;
            case 5:
                br(e);
            default:
                jh(n, e), e = pt = nd(e, gn), e = wh(n, e, gn)
        }
        t.memoizedProps = t.pendingProps, e === null ? As(t) : pt = e
    }

    function ti(t, e, n, i) {
        on = sa = null, br(e), Ga = null, Vi = 0;
        var s = e.return;
        try {
            if (Gv(t, s, e, n, gt)) {
                Bt = 1, cs(t, Oe(n, t.current)), pt = null;
                return
            }
        } catch (u) {
            if (s !== null) throw pt = s, u;
            Bt = 1, cs(t, Oe(n, t.current)), pt = null;
            return
        }
        e.flags & 32768 ? (bt || i === 1 ? t = !0 : Pa || (gt & 536870912) !== 0 ? t = !1 : (_n = t = !0, (i === 2 || i === 9 || i === 3 || i === 6) && (i = Ae.current, i !== null && i.tag === 13 && (i.flags |= 16384))), lm(e, t)) : As(e)
    }

    function As(t) {
        var e = t;
        do {
            if ((e.flags & 32768) !== 0) {
                lm(e, _n);
                return
            }
            t = e.return;
            var n = Zv(e.alternate, e, gn);
            if (n !== null) {
                pt = n;
                return
            }
            if (e = e.sibling, e !== null) {
                pt = e;
                return
            }
            pt = e = t
        } while (e !== null);
        Bt === 0 && (Bt = 5)
    }

    function lm(t, e) {
        do {
            var n = Qv(t.alternate, t);
            if (n !== null) {
                n.flags &= 32767, pt = n;
                return
            }
            if (n = t.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !e && (t = t.sibling, t !== null)) {
                pt = t;
                return
            }
            pt = t = n
        } while (t !== null);
        Bt = 6, pt = null
    }

    function sm(t, e, n, i, s, u, f, g, T) {
        t.cancelPendingCommit = null;
        do Es(); while (Ft !== 0);
        if ((At & 6) !== 0) throw Error(o(327));
        if (e !== null) {
            if (e === t.current) throw Error(o(177));
            if (u = e.lanes | e.childLanes, u |= Qo, _g(t, n, u, f, g, T), t === Rt && (pt = Rt = null, gt = 0), $a = e, Ln = t, vn = n, eu = u, nu = s, Fh = i, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, l1(Nl, function() {
                    return fm(), null
                })) : (t.callbackNode = null, t.callbackPriority = 0), i = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || i) {
                i = O.T, O.T = null, s = K.p, K.p = 2, f = At, At |= 4;
                try {
                    Jv(t, e, n)
                } finally {
                    At = f, K.p = s, O.T = i
                }
            }
            Ft = 1, om(), rm(), um()
        }
    }

    function om() {
        if (Ft === 1) {
            Ft = 0;
            var t = Ln,
                e = $a,
                n = (e.flags & 13878) !== 0;
            if ((e.subtreeFlags & 13878) !== 0 || n) {
                n = O.T, O.T = null;
                var i = K.p;
                K.p = 2;
                var s = At;
                At |= 4;
                try {
                    Yh(e, t);
                    var u = gu,
                        f = Qf(t.containerInfo),
                        g = u.focusedElem,
                        T = u.selectionRange;
                    if (f !== g && g && g.ownerDocument && Zf(g.ownerDocument.documentElement, g)) {
                        if (T !== null && qo(g)) {
                            var D = T.start,
                                _ = T.end;
                            if (_ === void 0 && (_ = D), "selectionStart" in g) g.selectionStart = D, g.selectionEnd = Math.min(_, g.value.length);
                            else {
                                var L = g.ownerDocument || document,
                                    C = L && L.defaultView || window;
                                if (C.getSelection) {
                                    var R = C.getSelection(),
                                        P = g.textContent.length,
                                        lt = Math.min(T.start, P),
                                        Ct = T.end === void 0 ? lt : Math.min(T.end, P);
                                    !R.extend && lt > Ct && (f = Ct, Ct = lt, lt = f);
                                    var N = Kf(g, lt),
                                        A = Kf(g, Ct);
                                    if (N && A && (R.rangeCount !== 1 || R.anchorNode !== N.node || R.anchorOffset !== N.offset || R.focusNode !== A.node || R.focusOffset !== A.offset)) {
                                        var w = L.createRange();
                                        w.setStart(N.node, N.offset), R.removeAllRanges(), lt > Ct ? (R.addRange(w), R.extend(A.node, A.offset)) : (w.setEnd(A.node, A.offset), R.addRange(w))
                                    }
                                }
                            }
                        }
                        for (L = [], R = g; R = R.parentNode;) R.nodeType === 1 && L.push({
                            element: R,
                            left: R.scrollLeft,
                            top: R.scrollTop
                        });
                        for (typeof g.focus == "function" && g.focus(), g = 0; g < L.length; g++) {
                            var V = L[g];
                            V.element.scrollLeft = V.left, V.element.scrollTop = V.top
                        }
                    }
                    ks = !!yu, gu = yu = null
                } finally {
                    At = s, K.p = i, O.T = n
                }
            }
            t.current = e, Ft = 2
        }
    }

    function rm() {
        if (Ft === 2) {
            Ft = 0;
            var t = Ln,
                e = $a,
                n = (e.flags & 8772) !== 0;
            if ((e.subtreeFlags & 8772) !== 0 || n) {
                n = O.T, O.T = null;
                var i = K.p;
                K.p = 2;
                var s = At;
                At |= 4;
                try {
                    kh(t, e.alternate, e)
                } finally {
                    At = s, K.p = i, O.T = n
                }
            }
            Ft = 3
        }
    }

    function um() {
        if (Ft === 4 || Ft === 3) {
            Ft = 0, Mg();
            var t = Ln,
                e = $a,
                n = vn,
                i = Fh;
            (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Ft = 5 : (Ft = 0, $a = Ln = null, cm(t, t.pendingLanes));
            var s = t.pendingLanes;
            if (s === 0 && (kn = null), Ao(n), e = e.stateNode, xe && typeof xe.onCommitFiberRoot == "function") try {
                xe.onCommitFiberRoot(gi, e, void 0, (e.current.flags & 128) === 128)
            } catch {}
            if (i !== null) {
                e = O.T, s = K.p, K.p = 2, O.T = null;
                try {
                    for (var u = t.onRecoverableError, f = 0; f < i.length; f++) {
                        var g = i[f];
                        u(g.value, {
                            componentStack: g.stack
                        })
                    }
                } finally {
                    O.T = e, K.p = s
                }
            }(vn & 3) !== 0 && Es(), Pe(t), s = t.pendingLanes, (n & 261930) !== 0 && (s & 42) !== 0 ? t === au ? $i++ : ($i = 0, au = t) : $i = 0, Ii(0)
        }
    }

    function cm(t, e) {
        (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, zi(e)))
    }

    function Es() {
        return om(), rm(), um(), fm()
    }

    function fm() {
        if (Ft !== 5) return !1;
        var t = Ln,
            e = eu;
        eu = 0;
        var n = Ao(vn),
            i = O.T,
            s = K.p;
        try {
            K.p = 32 > n ? 32 : n, O.T = null, n = nu, nu = null;
            var u = Ln,
                f = vn;
            if (Ft = 0, $a = Ln = null, vn = 0, (At & 6) !== 0) throw Error(o(331));
            var g = At;
            if (At |= 4, Zh(u.current), Gh(u, u.current, f, n), At = g, Ii(0, !1), xe && typeof xe.onPostCommitFiberRoot == "function") try {
                xe.onPostCommitFiberRoot(gi, u)
            } catch {}
            return !0
        } finally {
            K.p = s, O.T = i, cm(t, e)
        }
    }

    function dm(t, e, n) {
        e = Oe(n, e), e = Vr(t.stateNode, e, 2), t = Cn(t, e, 2), t !== null && (xi(t, 2), Pe(t))
    }

    function wt(t, e, n) {
        if (t.tag === 3) dm(t, t, n);
        else
            for (; e !== null;) {
                if (e.tag === 3) {
                    dm(e, t, n);
                    break
                } else if (e.tag === 1) {
                    var i = e.stateNode;
                    if (typeof e.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (kn === null || !kn.has(i))) {
                        t = Oe(n, t), n = hh(2), i = Cn(e, n, 2), i !== null && (mh(n, i, e, t), xi(i, 2), Pe(i));
                        break
                    }
                }
                e = e.return
            }
    }

    function su(t, e, n) {
        var i = t.pingCache;
        if (i === null) {
            i = t.pingCache = new Wv;
            var s = new Set;
            i.set(e, s)
        } else s = i.get(e), s === void 0 && (s = new Set, i.set(e, s));
        s.has(n) || ($r = !0, s.add(n), t = n1.bind(null, t, e, n), e.then(t, t))
    }

    function n1(t, e, n) {
        var i = t.pingCache;
        i !== null && i.delete(e), t.pingedLanes |= t.suspendedLanes & n, t.warmLanes &= ~n, Rt === t && (gt & n) === n && (Bt === 4 || Bt === 3 && (gt & 62914560) === gt && 300 > ve() - vs ? (At & 2) === 0 && Ia(t, 0) : Ir |= n, Wa === gt && (Wa = 0)), Pe(t)
    }

    function hm(t, e) {
        e === 0 && (e = of()), t = aa(t, e), t !== null && (xi(t, e), Pe(t))
    }

    function a1(t) {
        var e = t.memoizedState,
            n = 0;
        e !== null && (n = e.retryLane), hm(t, n)
    }

    function i1(t, e) {
        var n = 0;
        switch (t.tag) {
            case 31:
            case 13:
                var i = t.stateNode,
                    s = t.memoizedState;
                s !== null && (n = s.retryLane);
                break;
            case 19:
                i = t.stateNode;
                break;
            case 22:
                i = t.stateNode._retryCache;
                break;
            default:
                throw Error(o(314))
        }
        i !== null && i.delete(e), hm(t, n)
    }

    function l1(t, e) {
        return xo(t, e)
    }
    var Ms = null,
        ei = null,
        ou = !1,
        Ns = !1,
        ru = !1,
        Bn = 0;

    function Pe(t) {
        t !== ei && t.next === null && (ei === null ? Ms = ei = t : ei = ei.next = t), Ns = !0, ou || (ou = !0, o1())
    }

    function Ii(t, e) {
        if (!ru && Ns) {
            ru = !0;
            do
                for (var n = !1, i = Ms; i !== null;) {
                    if (t !== 0) {
                        var s = i.pendingLanes;
                        if (s === 0) var u = 0;
                        else {
                            var f = i.suspendedLanes,
                                g = i.pingedLanes;
                            u = (1 << 31 - be(42 | t) + 1) - 1, u &= s & ~(f & ~g), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0
                        }
                        u !== 0 && (n = !0, gm(i, u))
                    } else u = gt, u = Cl(i, i === Rt ? u : 0, i.cancelPendingCommit !== null || i.timeoutHandle !== -1), (u & 3) === 0 || vi(i, u) || (n = !0, gm(i, u));
                    i = i.next
                }
            while (n);
            ru = !1
        }
    }

    function s1() {
        mm()
    }

    function mm() {
        Ns = ou = !1;
        var t = 0;
        Bn !== 0 && g1() && (t = Bn);
        for (var e = ve(), n = null, i = Ms; i !== null;) {
            var s = i.next,
                u = pm(i, e);
            u === 0 ? (i.next = null, n === null ? Ms = s : n.next = s, s === null && (ei = n)) : (n = i, (t !== 0 || (u & 3) !== 0) && (Ns = !0)), i = s
        }
        Ft !== 0 && Ft !== 5 || Ii(t), Bn !== 0 && (Bn = 0)
    }

    function pm(t, e) {
        for (var n = t.suspendedLanes, i = t.pingedLanes, s = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u;) {
            var f = 31 - be(u),
                g = 1 << f,
                T = s[f];
            T === -1 ? ((g & n) === 0 || (g & i) !== 0) && (s[f] = zg(g, e)) : T <= e && (t.expiredLanes |= g), u &= ~g
        }
        if (e = Rt, n = gt, n = Cl(t, t === e ? n : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), i = t.callbackNode, n === 0 || t === e && (Nt === 2 || Nt === 9) || t.cancelPendingCommit !== null) return i !== null && i !== null && bo(i), t.callbackNode = null, t.callbackPriority = 0;
        if ((n & 3) === 0 || vi(t, n)) {
            if (e = n & -n, e === t.callbackPriority) return e;
            switch (i !== null && bo(i), Ao(n)) {
                case 2:
                case 8:
                    n = lf;
                    break;
                case 32:
                    n = Nl;
                    break;
                case 268435456:
                    n = sf;
                    break;
                default:
                    n = Nl
            }
            return i = ym.bind(null, t), n = xo(n, i), t.callbackPriority = e, t.callbackNode = n, e
        }
        return i !== null && i !== null && bo(i), t.callbackPriority = 2, t.callbackNode = null, 2
    }

    function ym(t, e) {
        if (Ft !== 0 && Ft !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
        var n = t.callbackNode;
        if (Es() && t.callbackNode !== n) return null;
        var i = gt;
        return i = Cl(t, t === Rt ? i : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), i === 0 ? null : (Wh(t, i, e), pm(t, ve()), t.callbackNode != null && t.callbackNode === n ? ym.bind(null, t) : null)
    }

    function gm(t, e) {
        if (Es()) return null;
        Wh(t, e, !0)
    }

    function o1() {
        x1(function() {
            (At & 6) !== 0 ? xo(af, s1) : mm()
        })
    }

    function uu() {
        if (Bn === 0) {
            var t = Ha;
            t === 0 && (t = wl, wl <<= 1, (wl & 261888) === 0 && (wl = 256)), Bn = t
        }
        return Bn
    }

    function vm(t) {
        return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : _l("" + t)
    }

    function xm(t, e) {
        var n = e.ownerDocument.createElement("input");
        return n.name = e.name, n.value = e.value, t.id && n.setAttribute("form", t.id), e.parentNode.insertBefore(n, e), t = new FormData(t), n.parentNode.removeChild(n), t
    }

    function r1(t, e, n, i, s) {
        if (e === "submit" && n && n.stateNode === s) {
            var u = vm((s[fe] || null).action),
                f = i.submitter;
            f && (e = (e = f[fe] || null) ? vm(e.formAction) : f.getAttribute("formAction"), e !== null && (u = e, f = null));
            var g = new Ul("action", "action", null, i, s);
            t.push({
                event: g,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (i.defaultPrevented) {
                            if (Bn !== 0) {
                                var T = f ? xm(s, f) : new FormData(s);
                                jr(n, {
                                    pending: !0,
                                    data: T,
                                    method: s.method,
                                    action: u
                                }, null, T)
                            }
                        } else typeof u == "function" && (g.preventDefault(), T = f ? xm(s, f) : new FormData(s), jr(n, {
                            pending: !0,
                            data: T,
                            method: s.method,
                            action: u
                        }, u, T))
                    },
                    currentTarget: s
                }]
            })
        }
    }
    for (var cu = 0; cu < Zo.length; cu++) {
        var fu = Zo[cu],
            u1 = fu.toLowerCase(),
            c1 = fu[0].toUpperCase() + fu.slice(1);
        Ye(u1, "on" + c1)
    }
    Ye(Pf, "onAnimationEnd"), Ye(Wf, "onAnimationIteration"), Ye($f, "onAnimationStart"), Ye("dblclick", "onDoubleClick"), Ye("focusin", "onFocus"), Ye("focusout", "onBlur"), Ye(Nv, "onTransitionRun"), Ye(wv, "onTransitionStart"), Ye(Dv, "onTransitionCancel"), Ye(If, "onTransitionEnd"), Na("onMouseEnter", ["mouseout", "mouseover"]), Na("onMouseLeave", ["mouseout", "mouseover"]), Na("onPointerEnter", ["pointerout", "pointerover"]), Na("onPointerLeave", ["pointerout", "pointerover"]), In("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), In("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), In("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), In("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), In("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), In("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var tl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        f1 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(tl));

    function bm(t, e) {
        e = (e & 4) !== 0;
        for (var n = 0; n < t.length; n++) {
            var i = t[n],
                s = i.event;
            i = i.listeners;
            t: {
                var u = void 0;
                if (e)
                    for (var f = i.length - 1; 0 <= f; f--) {
                        var g = i[f],
                            T = g.instance,
                            D = g.currentTarget;
                        if (g = g.listener, T !== u && s.isPropagationStopped()) break t;
                        u = g, s.currentTarget = D;
                        try {
                            u(s)
                        } catch (_) {
                            Yl(_)
                        }
                        s.currentTarget = null, u = T
                    } else
                        for (f = 0; f < i.length; f++) {
                            if (g = i[f], T = g.instance, D = g.currentTarget, g = g.listener, T !== u && s.isPropagationStopped()) break t;
                            u = g, s.currentTarget = D;
                            try {
                                u(s)
                            } catch (_) {
                                Yl(_)
                            }
                            s.currentTarget = null, u = T
                        }
            }
        }
    }

    function yt(t, e) {
        var n = e[Eo];
        n === void 0 && (n = e[Eo] = new Set);
        var i = t + "__bubble";
        n.has(i) || (Sm(e, t, 2, !1), n.add(i))
    }

    function du(t, e, n) {
        var i = 0;
        e && (i |= 4), Sm(n, t, i, e)
    }
    var ws = "_reactListening" + Math.random().toString(36).slice(2);

    function hu(t) {
        if (!t[ws]) {
            t[ws] = !0, mf.forEach(function(n) {
                n !== "selectionchange" && (f1.has(n) || du(n, !1, t), du(n, !0, t))
            });
            var e = t.nodeType === 9 ? t : t.ownerDocument;
            e === null || e[ws] || (e[ws] = !0, du("selectionchange", !1, e))
        }
    }

    function Sm(t, e, n, i) {
        switch (Pm(e)) {
            case 2:
                var s = B1;
                break;
            case 8:
                s = H1;
                break;
            default:
                s = Du
        }
        n = s.bind(null, e, n, t), s = void 0, !zo || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (s = !0), i ? s !== void 0 ? t.addEventListener(e, n, {
            capture: !0,
            passive: s
        }) : t.addEventListener(e, n, !0) : s !== void 0 ? t.addEventListener(e, n, {
            passive: s
        }) : t.addEventListener(e, n, !1)
    }

    function mu(t, e, n, i, s) {
        var u = i;
        if ((e & 1) === 0 && (e & 2) === 0 && i !== null) t: for (;;) {
            if (i === null) return;
            var f = i.tag;
            if (f === 3 || f === 4) {
                var g = i.stateNode.containerInfo;
                if (g === s) break;
                if (f === 4)
                    for (f = i.return; f !== null;) {
                        var T = f.tag;
                        if ((T === 3 || T === 4) && f.stateNode.containerInfo === s) return;
                        f = f.return
                    }
                for (; g !== null;) {
                    if (f = Aa(g), f === null) return;
                    if (T = f.tag, T === 5 || T === 6 || T === 26 || T === 27) {
                        i = u = f;
                        continue t
                    }
                    g = g.parentNode
                }
            }
            i = i.return
        }
        Nf(function() {
            var D = u,
                _ = Ro(n),
                L = [];
            t: {
                var C = td.get(t);
                if (C !== void 0) {
                    var R = Ul,
                        P = t;
                    switch (t) {
                        case "keypress":
                            if (kl(n) === 0) break t;
                        case "keydown":
                        case "keyup":
                            R = iv;
                            break;
                        case "focusin":
                            P = "focus", R = Lo;
                            break;
                        case "focusout":
                            P = "blur", R = Lo;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            R = Lo;
                            break;
                        case "click":
                            if (n.button === 2) break t;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            R = jf;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            R = Zg;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            R = ov;
                            break;
                        case Pf:
                        case Wf:
                        case $f:
                            R = Fg;
                            break;
                        case If:
                            R = uv;
                            break;
                        case "scroll":
                        case "scrollend":
                            R = Xg;
                            break;
                        case "wheel":
                            R = fv;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            R = Wg;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            R = Rf;
                            break;
                        case "toggle":
                        case "beforetoggle":
                            R = hv
                    }
                    var lt = (e & 4) !== 0,
                        Ct = !lt && (t === "scroll" || t === "scrollend"),
                        N = lt ? C !== null ? C + "Capture" : null : C;
                    lt = [];
                    for (var A = D, w; A !== null;) {
                        var V = A;
                        if (w = V.stateNode, V = V.tag, V !== 5 && V !== 26 && V !== 27 || w === null || N === null || (V = Ti(A, N), V != null && lt.push(el(A, V, w))), Ct) break;
                        A = A.return
                    }
                    0 < lt.length && (C = new R(C, P, null, n, _), L.push({
                        event: C,
                        listeners: lt
                    }))
                }
            }
            if ((e & 7) === 0) {
                t: {
                    if (C = t === "mouseover" || t === "pointerover", R = t === "mouseout" || t === "pointerout", C && n !== Co && (P = n.relatedTarget || n.fromElement) && (Aa(P) || P[Ta])) break t;
                    if ((R || C) && (C = _.window === _ ? _ : (C = _.ownerDocument) ? C.defaultView || C.parentWindow : window, R ? (P = n.relatedTarget || n.toElement, R = D, P = P ? Aa(P) : null, P !== null && (Ct = h(P), lt = P.tag, P !== Ct || lt !== 5 && lt !== 27 && lt !== 6) && (P = null)) : (R = null, P = D), R !== P)) {
                        if (lt = jf, V = "onMouseLeave", N = "onMouseEnter", A = "mouse", (t === "pointerout" || t === "pointerover") && (lt = Rf, V = "onPointerLeave", N = "onPointerEnter", A = "pointer"), Ct = R == null ? C : Si(R), w = P == null ? C : Si(P), C = new lt(V, A + "leave", R, n, _), C.target = Ct, C.relatedTarget = w, V = null, Aa(_) === D && (lt = new lt(N, A + "enter", P, n, _), lt.target = w, lt.relatedTarget = Ct, V = lt), Ct = V, R && P) e: {
                            for (lt = d1, N = R, A = P, w = 0, V = N; V; V = lt(V)) w++;V = 0;
                            for (var it = A; it; it = lt(it)) V++;
                            for (; 0 < w - V;) N = lt(N),
                            w--;
                            for (; 0 < V - w;) A = lt(A),
                            V--;
                            for (; w--;) {
                                if (N === A || A !== null && N === A.alternate) {
                                    lt = N;
                                    break e
                                }
                                N = lt(N), A = lt(A)
                            }
                            lt = null
                        }
                        else lt = null;
                        R !== null && Tm(L, C, R, lt, !1), P !== null && Ct !== null && Tm(L, Ct, P, lt, !0)
                    }
                }
                t: {
                    if (C = D ? Si(D) : window, R = C.nodeName && C.nodeName.toLowerCase(), R === "select" || R === "input" && C.type === "file") var St = Bf;
                    else if (Lf(C))
                        if (Hf) St = Av;
                        else {
                            St = Sv;
                            var nt = bv
                        }
                    else R = C.nodeName,
                    !R || R.toLowerCase() !== "input" || C.type !== "checkbox" && C.type !== "radio" ? D && jo(D.elementType) && (St = Bf) : St = Tv;
                    if (St && (St = St(t, D))) {
                        Uf(L, St, n, _);
                        break t
                    }
                    nt && nt(t, C, D),
                    t === "focusout" && D && C.type === "number" && D.memoizedProps.value != null && Do(C, "number", C.value)
                }
                switch (nt = D ? Si(D) : window, t) {
                    case "focusin":
                        (Lf(nt) || nt.contentEditable === "true") && (Oa = nt, Go = D, Ci = null);
                        break;
                    case "focusout":
                        Ci = Go = Oa = null;
                        break;
                    case "mousedown":
                        Xo = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        Xo = !1, Jf(L, n, _);
                        break;
                    case "selectionchange":
                        if (Mv) break;
                    case "keydown":
                    case "keyup":
                        Jf(L, n, _)
                }
                var ht;
                if (Bo) t: {
                    switch (t) {
                        case "compositionstart":
                            var vt = "onCompositionStart";
                            break t;
                        case "compositionend":
                            vt = "onCompositionEnd";
                            break t;
                        case "compositionupdate":
                            vt = "onCompositionUpdate";
                            break t
                    }
                    vt = void 0
                }
                else Ra ? Vf(t, n) && (vt = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (vt = "onCompositionStart");vt && (Of && n.locale !== "ko" && (Ra || vt !== "onCompositionStart" ? vt === "onCompositionEnd" && Ra && (ht = wf()) : (An = _, _o = "value" in An ? An.value : An.textContent, Ra = !0)), nt = Ds(D, vt), 0 < nt.length && (vt = new Cf(vt, t, null, n, _), L.push({
                    event: vt,
                    listeners: nt
                }), ht ? vt.data = ht : (ht = kf(n), ht !== null && (vt.data = ht)))),
                (ht = pv ? yv(t, n) : gv(t, n)) && (vt = Ds(D, "onBeforeInput"), 0 < vt.length && (nt = new Cf("onBeforeInput", "beforeinput", null, n, _), L.push({
                    event: nt,
                    listeners: vt
                }), nt.data = ht)),
                r1(L, t, D, n, _)
            }
            bm(L, e)
        })
    }

    function el(t, e, n) {
        return {
            instance: t,
            listener: e,
            currentTarget: n
        }
    }

    function Ds(t, e) {
        for (var n = e + "Capture", i = []; t !== null;) {
            var s = t,
                u = s.stateNode;
            if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || u === null || (s = Ti(t, n), s != null && i.unshift(el(t, s, u)), s = Ti(t, e), s != null && i.push(el(t, s, u))), t.tag === 3) return i;
            t = t.return
        }
        return []
    }

    function d1(t) {
        if (t === null) return null;
        do t = t.return; while (t && t.tag !== 5 && t.tag !== 27);
        return t || null
    }

    function Tm(t, e, n, i, s) {
        for (var u = e._reactName, f = []; n !== null && n !== i;) {
            var g = n,
                T = g.alternate,
                D = g.stateNode;
            if (g = g.tag, T !== null && T === i) break;
            g !== 5 && g !== 26 && g !== 27 || D === null || (T = D, s ? (D = Ti(n, u), D != null && f.unshift(el(n, D, T))) : s || (D = Ti(n, u), D != null && f.push(el(n, D, T)))), n = n.return
        }
        f.length !== 0 && t.push({
            event: e,
            listeners: f
        })
    }
    var h1 = /\r\n?/g,
        m1 = /\u0000|\uFFFD/g;

    function Am(t) {
        return (typeof t == "string" ? t : "" + t).replace(h1, `
`).replace(m1, "")
    }

    function Em(t, e) {
        return e = Am(e), Am(t) === e
    }

    function jt(t, e, n, i, s, u) {
        switch (n) {
            case "children":
                typeof i == "string" ? e === "body" || e === "textarea" && i === "" || Da(t, i) : (typeof i == "number" || typeof i == "bigint") && e !== "body" && Da(t, "" + i);
                break;
            case "className":
                Ol(t, "class", i);
                break;
            case "tabIndex":
                Ol(t, "tabindex", i);
                break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
                Ol(t, n, i);
                break;
            case "style":
                Ef(t, i, u);
                break;
            case "data":
                if (e !== "object") {
                    Ol(t, "data", i);
                    break
                }
            case "src":
            case "href":
                if (i === "" && (e !== "a" || n !== "href")) {
                    t.removeAttribute(n);
                    break
                }
                if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
                    t.removeAttribute(n);
                    break
                }
                i = _l("" + i), t.setAttribute(n, i);
                break;
            case "action":
            case "formAction":
                if (typeof i == "function") {
                    t.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                    break
                } else typeof u == "function" && (n === "formAction" ? (e !== "input" && jt(t, e, "name", s.name, s, null), jt(t, e, "formEncType", s.formEncType, s, null), jt(t, e, "formMethod", s.formMethod, s, null), jt(t, e, "formTarget", s.formTarget, s, null)) : (jt(t, e, "encType", s.encType, s, null), jt(t, e, "method", s.method, s, null), jt(t, e, "target", s.target, s, null)));
                if (i == null || typeof i == "symbol" || typeof i == "boolean") {
                    t.removeAttribute(n);
                    break
                }
                i = _l("" + i), t.setAttribute(n, i);
                break;
            case "onClick":
                i != null && (t.onclick = nn);
                break;
            case "onScroll":
                i != null && yt("scroll", t);
                break;
            case "onScrollEnd":
                i != null && yt("scrollend", t);
                break;
            case "dangerouslySetInnerHTML":
                if (i != null) {
                    if (typeof i != "object" || !("__html" in i)) throw Error(o(61));
                    if (n = i.__html, n != null) {
                        if (s.children != null) throw Error(o(60));
                        t.innerHTML = n
                    }
                }
                break;
            case "multiple":
                t.multiple = i && typeof i != "function" && typeof i != "symbol";
                break;
            case "muted":
                t.muted = i && typeof i != "function" && typeof i != "symbol";
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
                break;
            case "autoFocus":
                break;
            case "xlinkHref":
                if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
                    t.removeAttribute("xlink:href");
                    break
                }
                n = _l("" + i), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
                break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
                i != null && typeof i != "function" && typeof i != "symbol" ? t.setAttribute(n, "" + i) : t.removeAttribute(n);
                break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
                i && typeof i != "function" && typeof i != "symbol" ? t.setAttribute(n, "") : t.removeAttribute(n);
                break;
            case "capture":
            case "download":
                i === !0 ? t.setAttribute(n, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? t.setAttribute(n, i) : t.removeAttribute(n);
                break;
            case "cols":
            case "rows":
            case "size":
            case "span":
                i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? t.setAttribute(n, i) : t.removeAttribute(n);
                break;
            case "rowSpan":
            case "start":
                i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? t.removeAttribute(n) : t.setAttribute(n, i);
                break;
            case "popover":
                yt("beforetoggle", t), yt("toggle", t), Rl(t, "popover", i);
                break;
            case "xlinkActuate":
                en(t, "http://www.w3.org/1999/xlink", "xlink:actuate", i);
                break;
            case "xlinkArcrole":
                en(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", i);
                break;
            case "xlinkRole":
                en(t, "http://www.w3.org/1999/xlink", "xlink:role", i);
                break;
            case "xlinkShow":
                en(t, "http://www.w3.org/1999/xlink", "xlink:show", i);
                break;
            case "xlinkTitle":
                en(t, "http://www.w3.org/1999/xlink", "xlink:title", i);
                break;
            case "xlinkType":
                en(t, "http://www.w3.org/1999/xlink", "xlink:type", i);
                break;
            case "xmlBase":
                en(t, "http://www.w3.org/XML/1998/namespace", "xml:base", i);
                break;
            case "xmlLang":
                en(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", i);
                break;
            case "xmlSpace":
                en(t, "http://www.w3.org/XML/1998/namespace", "xml:space", i);
                break;
            case "is":
                Rl(t, "is", i);
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = qg.get(n) || n, Rl(t, n, i))
        }
    }

    function pu(t, e, n, i, s, u) {
        switch (n) {
            case "style":
                Ef(t, i, u);
                break;
            case "dangerouslySetInnerHTML":
                if (i != null) {
                    if (typeof i != "object" || !("__html" in i)) throw Error(o(61));
                    if (n = i.__html, n != null) {
                        if (s.children != null) throw Error(o(60));
                        t.innerHTML = n
                    }
                }
                break;
            case "children":
                typeof i == "string" ? Da(t, i) : (typeof i == "number" || typeof i == "bigint") && Da(t, "" + i);
                break;
            case "onScroll":
                i != null && yt("scroll", t);
                break;
            case "onScrollEnd":
                i != null && yt("scrollend", t);
                break;
            case "onClick":
                i != null && (t.onclick = nn);
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref":
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                if (!pf.hasOwnProperty(n)) t: {
                    if (n[0] === "o" && n[1] === "n" && (s = n.endsWith("Capture"), e = n.slice(2, s ? n.length - 7 : void 0), u = t[fe] || null, u = u != null ? u[n] : null, typeof u == "function" && t.removeEventListener(e, u, s), typeof i == "function")) {
                        typeof u != "function" && u !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)), t.addEventListener(e, i, s);
                        break t
                    }
                    n in t ? t[n] = i : i === !0 ? t.setAttribute(n, "") : Rl(t, n, i)
                }
        }
    }

    function ae(t, e, n) {
        switch (e) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "img":
                yt("error", t), yt("load", t);
                var i = !1,
                    s = !1,
                    u;
                for (u in n)
                    if (n.hasOwnProperty(u)) {
                        var f = n[u];
                        if (f != null) switch (u) {
                            case "src":
                                i = !0;
                                break;
                            case "srcSet":
                                s = !0;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(o(137, e));
                            default:
                                jt(t, e, u, f, n, null)
                        }
                    } s && jt(t, e, "srcSet", n.srcSet, n, null), i && jt(t, e, "src", n.src, n, null);
                return;
            case "input":
                yt("invalid", t);
                var g = u = f = s = null,
                    T = null,
                    D = null;
                for (i in n)
                    if (n.hasOwnProperty(i)) {
                        var _ = n[i];
                        if (_ != null) switch (i) {
                            case "name":
                                s = _;
                                break;
                            case "type":
                                f = _;
                                break;
                            case "checked":
                                T = _;
                                break;
                            case "defaultChecked":
                                D = _;
                                break;
                            case "value":
                                u = _;
                                break;
                            case "defaultValue":
                                g = _;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (_ != null) throw Error(o(137, e));
                                break;
                            default:
                                jt(t, e, i, _, n, null)
                        }
                    } bf(t, u, g, T, D, f, s, !1);
                return;
            case "select":
                yt("invalid", t), i = f = u = null;
                for (s in n)
                    if (n.hasOwnProperty(s) && (g = n[s], g != null)) switch (s) {
                        case "value":
                            u = g;
                            break;
                        case "defaultValue":
                            f = g;
                            break;
                        case "multiple":
                            i = g;
                        default:
                            jt(t, e, s, g, n, null)
                    }
                e = u, n = f, t.multiple = !!i, e != null ? wa(t, !!i, e, !1) : n != null && wa(t, !!i, n, !0);
                return;
            case "textarea":
                yt("invalid", t), u = s = i = null;
                for (f in n)
                    if (n.hasOwnProperty(f) && (g = n[f], g != null)) switch (f) {
                        case "value":
                            i = g;
                            break;
                        case "defaultValue":
                            s = g;
                            break;
                        case "children":
                            u = g;
                            break;
                        case "dangerouslySetInnerHTML":
                            if (g != null) throw Error(o(91));
                            break;
                        default:
                            jt(t, e, f, g, n, null)
                    }
                Tf(t, i, s, u);
                return;
            case "option":
                for (T in n)
                    if (n.hasOwnProperty(T) && (i = n[T], i != null)) switch (T) {
                        case "selected":
                            t.selected = i && typeof i != "function" && typeof i != "symbol";
                            break;
                        default:
                            jt(t, e, T, i, n, null)
                    }
                return;
            case "dialog":
                yt("beforetoggle", t), yt("toggle", t), yt("cancel", t), yt("close", t);
                break;
            case "iframe":
            case "object":
                yt("load", t);
                break;
            case "video":
            case "audio":
                for (i = 0; i < tl.length; i++) yt(tl[i], t);
                break;
            case "image":
                yt("error", t), yt("load", t);
                break;
            case "details":
                yt("toggle", t);
                break;
            case "embed":
            case "source":
            case "link":
                yt("error", t), yt("load", t);
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
                for (D in n)
                    if (n.hasOwnProperty(D) && (i = n[D], i != null)) switch (D) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(o(137, e));
                        default:
                            jt(t, e, D, i, n, null)
                    }
                return;
            default:
                if (jo(e)) {
                    for (_ in n) n.hasOwnProperty(_) && (i = n[_], i !== void 0 && pu(t, e, _, i, n, void 0));
                    return
                }
        }
        for (g in n) n.hasOwnProperty(g) && (i = n[g], i != null && jt(t, e, g, i, n, null))
    }

    function p1(t, e, n, i) {
        switch (e) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "input":
                var s = null,
                    u = null,
                    f = null,
                    g = null,
                    T = null,
                    D = null,
                    _ = null;
                for (R in n) {
                    var L = n[R];
                    if (n.hasOwnProperty(R) && L != null) switch (R) {
                        case "checked":
                            break;
                        case "value":
                            break;
                        case "defaultValue":
                            T = L;
                        default:
                            i.hasOwnProperty(R) || jt(t, e, R, null, i, L)
                    }
                }
                for (var C in i) {
                    var R = i[C];
                    if (L = n[C], i.hasOwnProperty(C) && (R != null || L != null)) switch (C) {
                        case "type":
                            u = R;
                            break;
                        case "name":
                            s = R;
                            break;
                        case "checked":
                            D = R;
                            break;
                        case "defaultChecked":
                            _ = R;
                            break;
                        case "value":
                            f = R;
                            break;
                        case "defaultValue":
                            g = R;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (R != null) throw Error(o(137, e));
                            break;
                        default:
                            R !== L && jt(t, e, C, R, i, L)
                    }
                }
                wo(t, f, g, T, D, _, u, s);
                return;
            case "select":
                R = f = g = C = null;
                for (u in n)
                    if (T = n[u], n.hasOwnProperty(u) && T != null) switch (u) {
                        case "value":
                            break;
                        case "multiple":
                            R = T;
                        default:
                            i.hasOwnProperty(u) || jt(t, e, u, null, i, T)
                    }
                for (s in i)
                    if (u = i[s], T = n[s], i.hasOwnProperty(s) && (u != null || T != null)) switch (s) {
                        case "value":
                            C = u;
                            break;
                        case "defaultValue":
                            g = u;
                            break;
                        case "multiple":
                            f = u;
                        default:
                            u !== T && jt(t, e, s, u, i, T)
                    }
                e = g, n = f, i = R, C != null ? wa(t, !!n, C, !1) : !!i != !!n && (e != null ? wa(t, !!n, e, !0) : wa(t, !!n, n ? [] : "", !1));
                return;
            case "textarea":
                R = C = null;
                for (g in n)
                    if (s = n[g], n.hasOwnProperty(g) && s != null && !i.hasOwnProperty(g)) switch (g) {
                        case "value":
                            break;
                        case "children":
                            break;
                        default:
                            jt(t, e, g, null, i, s)
                    }
                for (f in i)
                    if (s = i[f], u = n[f], i.hasOwnProperty(f) && (s != null || u != null)) switch (f) {
                        case "value":
                            C = s;
                            break;
                        case "defaultValue":
                            R = s;
                            break;
                        case "children":
                            break;
                        case "dangerouslySetInnerHTML":
                            if (s != null) throw Error(o(91));
                            break;
                        default:
                            s !== u && jt(t, e, f, s, i, u)
                    }
                Sf(t, C, R);
                return;
            case "option":
                for (var P in n)
                    if (C = n[P], n.hasOwnProperty(P) && C != null && !i.hasOwnProperty(P)) switch (P) {
                        case "selected":
                            t.selected = !1;
                            break;
                        default:
                            jt(t, e, P, null, i, C)
                    }
                for (T in i)
                    if (C = i[T], R = n[T], i.hasOwnProperty(T) && C !== R && (C != null || R != null)) switch (T) {
                        case "selected":
                            t.selected = C && typeof C != "function" && typeof C != "symbol";
                            break;
                        default:
                            jt(t, e, T, C, i, R)
                    }
                return;
            case "img":
            case "link":
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr":
            case "menuitem":
                for (var lt in n) C = n[lt], n.hasOwnProperty(lt) && C != null && !i.hasOwnProperty(lt) && jt(t, e, lt, null, i, C);
                for (D in i)
                    if (C = i[D], R = n[D], i.hasOwnProperty(D) && C !== R && (C != null || R != null)) switch (D) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (C != null) throw Error(o(137, e));
                            break;
                        default:
                            jt(t, e, D, C, i, R)
                    }
                return;
            default:
                if (jo(e)) {
                    for (var Ct in n) C = n[Ct], n.hasOwnProperty(Ct) && C !== void 0 && !i.hasOwnProperty(Ct) && pu(t, e, Ct, void 0, i, C);
                    for (_ in i) C = i[_], R = n[_], !i.hasOwnProperty(_) || C === R || C === void 0 && R === void 0 || pu(t, e, _, C, i, R);
                    return
                }
        }
        for (var N in n) C = n[N], n.hasOwnProperty(N) && C != null && !i.hasOwnProperty(N) && jt(t, e, N, null, i, C);
        for (L in i) C = i[L], R = n[L], !i.hasOwnProperty(L) || C === R || C == null && R == null || jt(t, e, L, C, i, R)
    }

    function Mm(t) {
        switch (t) {
            case "css":
            case "script":
            case "font":
            case "img":
            case "image":
            case "input":
            case "link":
                return !0;
            default:
                return !1
        }
    }

    function y1() {
        if (typeof performance.getEntriesByType == "function") {
            for (var t = 0, e = 0, n = performance.getEntriesByType("resource"), i = 0; i < n.length; i++) {
                var s = n[i],
                    u = s.transferSize,
                    f = s.initiatorType,
                    g = s.duration;
                if (u && g && Mm(f)) {
                    for (f = 0, g = s.responseEnd, i += 1; i < n.length; i++) {
                        var T = n[i],
                            D = T.startTime;
                        if (D > g) break;
                        var _ = T.transferSize,
                            L = T.initiatorType;
                        _ && Mm(L) && (T = T.responseEnd, f += _ * (T < g ? 1 : (g - D) / (T - D)))
                    }
                    if (--i, e += 8 * (u + f) / (s.duration / 1e3), t++, 10 < t) break
                }
            }
            if (0 < t) return e / t / 1e6
        }
        return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5
    }
    var yu = null,
        gu = null;

    function js(t) {
        return t.nodeType === 9 ? t : t.ownerDocument
    }

    function Nm(t) {
        switch (t) {
            case "http://www.w3.org/2000/svg":
                return 1;
            case "http://www.w3.org/1998/Math/MathML":
                return 2;
            default:
                return 0
        }
    }

    function wm(t, e) {
        if (t === 0) switch (e) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
        }
        return t === 1 && e === "foreignObject" ? 0 : t
    }

    function vu(t, e) {
        return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
    }
    var xu = null;

    function g1() {
        var t = window.event;
        return t && t.type === "popstate" ? t === xu ? !1 : (xu = t, !0) : (xu = null, !1)
    }
    var Dm = typeof setTimeout == "function" ? setTimeout : void 0,
        v1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
        jm = typeof Promise == "function" ? Promise : void 0,
        x1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof jm < "u" ? function(t) {
            return jm.resolve(null).then(t).catch(b1)
        } : Dm;

    function b1(t) {
        setTimeout(function() {
            throw t
        })
    }

    function Hn(t) {
        return t === "head"
    }

    function Cm(t, e) {
        var n = e,
            i = 0;
        do {
            var s = n.nextSibling;
            if (t.removeChild(n), s && s.nodeType === 8)
                if (n = s.data, n === "/$" || n === "/&") {
                    if (i === 0) {
                        t.removeChild(s), li(e);
                        return
                    }
                    i--
                } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&") i++;
            else if (n === "html") nl(t.ownerDocument.documentElement);
            else if (n === "head") {
                n = t.ownerDocument.head, nl(n);
                for (var u = n.firstChild; u;) {
                    var f = u.nextSibling,
                        g = u.nodeName;
                    u[bi] || g === "SCRIPT" || g === "STYLE" || g === "LINK" && u.rel.toLowerCase() === "stylesheet" || n.removeChild(u), u = f
                }
            } else n === "body" && nl(t.ownerDocument.body);
            n = s
        } while (n);
        li(e)
    }

    function Rm(t, e) {
        var n = t;
        t = 0;
        do {
            var i = n.nextSibling;
            if (n.nodeType === 1 ? e ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (e ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), i && i.nodeType === 8)
                if (n = i.data, n === "/$") {
                    if (t === 0) break;
                    t--
                } else n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || t++;
            n = i
        } while (n)
    }

    function bu(t) {
        var e = t.firstChild;
        for (e && e.nodeType === 10 && (e = e.nextSibling); e;) {
            var n = e;
            switch (e = e.nextSibling, n.nodeName) {
                case "HTML":
                case "HEAD":
                case "BODY":
                    bu(n), Mo(n);
                    continue;
                case "SCRIPT":
                case "STYLE":
                    continue;
                case "LINK":
                    if (n.rel.toLowerCase() === "stylesheet") continue
            }
            t.removeChild(n)
        }
    }

    function S1(t, e, n, i) {
        for (; t.nodeType === 1;) {
            var s = n;
            if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
                if (!i && (t.nodeName !== "INPUT" || t.type !== "hidden")) break
            } else if (i) {
                if (!t[bi]) switch (e) {
                    case "meta":
                        if (!t.hasAttribute("itemprop")) break;
                        return t;
                    case "link":
                        if (u = t.getAttribute("rel"), u === "stylesheet" && t.hasAttribute("data-precedence")) break;
                        if (u !== s.rel || t.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || t.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || t.getAttribute("title") !== (s.title == null ? null : s.title)) break;
                        return t;
                    case "style":
                        if (t.hasAttribute("data-precedence")) break;
                        return t;
                    case "script":
                        if (u = t.getAttribute("src"), (u !== (s.src == null ? null : s.src) || t.getAttribute("type") !== (s.type == null ? null : s.type) || t.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && u && t.hasAttribute("async") && !t.hasAttribute("itemprop")) break;
                        return t;
                    default:
                        return t
                }
            } else if (e === "input" && t.type === "hidden") {
                var u = s.name == null ? null : "" + s.name;
                if (s.type === "hidden" && t.getAttribute("name") === u) return t
            } else return t;
            if (t = Le(t.nextSibling), t === null) break
        }
        return null
    }

    function T1(t, e, n) {
        if (e === "") return null;
        for (; t.nodeType !== 3;)
            if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = Le(t.nextSibling), t === null)) return null;
        return t
    }

    function Om(t, e) {
        for (; t.nodeType !== 8;)
            if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Le(t.nextSibling), t === null)) return null;
        return t
    }

    function Su(t) {
        return t.data === "$?" || t.data === "$~"
    }

    function Tu(t) {
        return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading"
    }

    function A1(t, e) {
        var n = t.ownerDocument;
        if (t.data === "$~") t._reactRetry = e;
        else if (t.data !== "$?" || n.readyState !== "loading") e();
        else {
            var i = function() {
                e(), n.removeEventListener("DOMContentLoaded", i)
            };
            n.addEventListener("DOMContentLoaded", i), t._reactRetry = i
        }
    }

    function Le(t) {
        for (; t != null; t = t.nextSibling) {
            var e = t.nodeType;
            if (e === 1 || e === 3) break;
            if (e === 8) {
                if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F") break;
                if (e === "/$" || e === "/&") return null
            }
        }
        return t
    }
    var Au = null;

    function zm(t) {
        t = t.nextSibling;
        for (var e = 0; t;) {
            if (t.nodeType === 8) {
                var n = t.data;
                if (n === "/$" || n === "/&") {
                    if (e === 0) return Le(t.nextSibling);
                    e--
                } else n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || e++
            }
            t = t.nextSibling
        }
        return null
    }

    function _m(t) {
        t = t.previousSibling;
        for (var e = 0; t;) {
            if (t.nodeType === 8) {
                var n = t.data;
                if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
                    if (e === 0) return t;
                    e--
                } else n !== "/$" && n !== "/&" || e++
            }
            t = t.previousSibling
        }
        return null
    }

    function Vm(t, e, n) {
        switch (e = js(n), t) {
            case "html":
                if (t = e.documentElement, !t) throw Error(o(452));
                return t;
            case "head":
                if (t = e.head, !t) throw Error(o(453));
                return t;
            case "body":
                if (t = e.body, !t) throw Error(o(454));
                return t;
            default:
                throw Error(o(451))
        }
    }

    function nl(t) {
        for (var e = t.attributes; e.length;) t.removeAttributeNode(e[0]);
        Mo(t)
    }
    var Ue = new Map,
        km = new Set;

    function Cs(t) {
        return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument
    }
    var xn = K.d;
    K.d = {
        f: E1,
        r: M1,
        D: N1,
        C: w1,
        L: D1,
        m: j1,
        X: R1,
        S: C1,
        M: O1
    };

    function E1() {
        var t = xn.f(),
            e = Ss();
        return t || e
    }

    function M1(t) {
        var e = Ea(t);
        e !== null && e.tag === 5 && e.type === "form" ? Id(e) : xn.r(t)
    }
    var ni = typeof document > "u" ? null : document;

    function Lm(t, e, n) {
        var i = ni;
        if (i && typeof e == "string" && e) {
            var s = Ce(e);
            s = 'link[rel="' + t + '"][href="' + s + '"]', typeof n == "string" && (s += '[crossorigin="' + n + '"]'), km.has(s) || (km.add(s), t = {
                rel: t,
                crossOrigin: n,
                href: e
            }, i.querySelector(s) === null && (e = i.createElement("link"), ae(e, "link", t), Wt(e), i.head.appendChild(e)))
        }
    }

    function N1(t) {
        xn.D(t), Lm("dns-prefetch", t, null)
    }

    function w1(t, e) {
        xn.C(t, e), Lm("preconnect", t, e)
    }

    function D1(t, e, n) {
        xn.L(t, e, n);
        var i = ni;
        if (i && t && e) {
            var s = 'link[rel="preload"][as="' + Ce(e) + '"]';
            e === "image" && n && n.imageSrcSet ? (s += '[imagesrcset="' + Ce(n.imageSrcSet) + '"]', typeof n.imageSizes == "string" && (s += '[imagesizes="' + Ce(n.imageSizes) + '"]')) : s += '[href="' + Ce(t) + '"]';
            var u = s;
            switch (e) {
                case "style":
                    u = ai(t);
                    break;
                case "script":
                    u = ii(t)
            }
            Ue.has(u) || (t = b({
                rel: "preload",
                href: e === "image" && n && n.imageSrcSet ? void 0 : t,
                as: e
            }, n), Ue.set(u, t), i.querySelector(s) !== null || e === "style" && i.querySelector(al(u)) || e === "script" && i.querySelector(il(u)) || (e = i.createElement("link"), ae(e, "link", t), Wt(e), i.head.appendChild(e)))
        }
    }

    function j1(t, e) {
        xn.m(t, e);
        var n = ni;
        if (n && t) {
            var i = e && typeof e.as == "string" ? e.as : "script",
                s = 'link[rel="modulepreload"][as="' + Ce(i) + '"][href="' + Ce(t) + '"]',
                u = s;
            switch (i) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    u = ii(t)
            }
            if (!Ue.has(u) && (t = b({
                    rel: "modulepreload",
                    href: t
                }, e), Ue.set(u, t), n.querySelector(s) === null)) {
                switch (i) {
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        if (n.querySelector(il(u))) return
                }
                i = n.createElement("link"), ae(i, "link", t), Wt(i), n.head.appendChild(i)
            }
        }
    }

    function C1(t, e, n) {
        xn.S(t, e, n);
        var i = ni;
        if (i && t) {
            var s = Ma(i).hoistableStyles,
                u = ai(t);
            e = e || "default";
            var f = s.get(u);
            if (!f) {
                var g = {
                    loading: 0,
                    preload: null
                };
                if (f = i.querySelector(al(u))) g.loading = 5;
                else {
                    t = b({
                        rel: "stylesheet",
                        href: t,
                        "data-precedence": e
                    }, n), (n = Ue.get(u)) && Eu(t, n);
                    var T = f = i.createElement("link");
                    Wt(T), ae(T, "link", t), T._p = new Promise(function(D, _) {
                        T.onload = D, T.onerror = _
                    }), T.addEventListener("load", function() {
                        g.loading |= 1
                    }), T.addEventListener("error", function() {
                        g.loading |= 2
                    }), g.loading |= 4, Rs(f, e, i)
                }
                f = {
                    type: "stylesheet",
                    instance: f,
                    count: 1,
                    state: g
                }, s.set(u, f)
            }
        }
    }

    function R1(t, e) {
        xn.X(t, e);
        var n = ni;
        if (n && t) {
            var i = Ma(n).hoistableScripts,
                s = ii(t),
                u = i.get(s);
            u || (u = n.querySelector(il(s)), u || (t = b({
                src: t,
                async: !0
            }, e), (e = Ue.get(s)) && Mu(t, e), u = n.createElement("script"), Wt(u), ae(u, "link", t), n.head.appendChild(u)), u = {
                type: "script",
                instance: u,
                count: 1,
                state: null
            }, i.set(s, u))
        }
    }

    function O1(t, e) {
        xn.M(t, e);
        var n = ni;
        if (n && t) {
            var i = Ma(n).hoistableScripts,
                s = ii(t),
                u = i.get(s);
            u || (u = n.querySelector(il(s)), u || (t = b({
                src: t,
                async: !0,
                type: "module"
            }, e), (e = Ue.get(s)) && Mu(t, e), u = n.createElement("script"), Wt(u), ae(u, "link", t), n.head.appendChild(u)), u = {
                type: "script",
                instance: u,
                count: 1,
                state: null
            }, i.set(s, u))
        }
    }

    function Um(t, e, n, i) {
        var s = (s = mt.current) ? Cs(s) : null;
        if (!s) throw Error(o(446));
        switch (t) {
            case "meta":
            case "title":
                return null;
            case "style":
                return typeof n.precedence == "string" && typeof n.href == "string" ? (e = ai(n.href), n = Ma(s).hoistableStyles, i = n.get(e), i || (i = {
                    type: "style",
                    instance: null,
                    count: 0,
                    state: null
                }, n.set(e, i)), i) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            case "link":
                if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
                    t = ai(n.href);
                    var u = Ma(s).hoistableStyles,
                        f = u.get(t);
                    if (f || (s = s.ownerDocument || s, f = {
                            type: "stylesheet",
                            instance: null,
                            count: 0,
                            state: {
                                loading: 0,
                                preload: null
                            }
                        }, u.set(t, f), (u = s.querySelector(al(t))) && !u._p && (f.instance = u, f.state.loading = 5), Ue.has(t) || (n = {
                            rel: "preload",
                            as: "style",
                            href: n.href,
                            crossOrigin: n.crossOrigin,
                            integrity: n.integrity,
                            media: n.media,
                            hrefLang: n.hrefLang,
                            referrerPolicy: n.referrerPolicy
                        }, Ue.set(t, n), u || z1(s, t, n, f.state))), e && i === null) throw Error(o(528, ""));
                    return f
                }
                if (e && i !== null) throw Error(o(529, ""));
                return null;
            case "script":
                return e = n.async, n = n.src, typeof n == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = ii(n), n = Ma(s).hoistableScripts, i = n.get(e), i || (i = {
                    type: "script",
                    instance: null,
                    count: 0,
                    state: null
                }, n.set(e, i)), i) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            default:
                throw Error(o(444, t))
        }
    }

    function ai(t) {
        return 'href="' + Ce(t) + '"'
    }

    function al(t) {
        return 'link[rel="stylesheet"][' + t + "]"
    }

    function Bm(t) {
        return b({}, t, {
            "data-precedence": t.precedence,
            precedence: null
        })
    }

    function z1(t, e, n, i) {
        t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? i.loading = 1 : (e = t.createElement("link"), i.preload = e, e.addEventListener("load", function() {
            return i.loading |= 1
        }), e.addEventListener("error", function() {
            return i.loading |= 2
        }), ae(e, "link", n), Wt(e), t.head.appendChild(e))
    }

    function ii(t) {
        return '[src="' + Ce(t) + '"]'
    }

    function il(t) {
        return "script[async]" + t
    }

    function Hm(t, e, n) {
        if (e.count++, e.instance === null) switch (e.type) {
            case "style":
                var i = t.querySelector('style[data-href~="' + Ce(n.href) + '"]');
                if (i) return e.instance = i, Wt(i), i;
                var s = b({}, n, {
                    "data-href": n.href,
                    "data-precedence": n.precedence,
                    href: null,
                    precedence: null
                });
                return i = (t.ownerDocument || t).createElement("style"), Wt(i), ae(i, "style", s), Rs(i, n.precedence, t), e.instance = i;
            case "stylesheet":
                s = ai(n.href);
                var u = t.querySelector(al(s));
                if (u) return e.state.loading |= 4, e.instance = u, Wt(u), u;
                i = Bm(n), (s = Ue.get(s)) && Eu(i, s), u = (t.ownerDocument || t).createElement("link"), Wt(u);
                var f = u;
                return f._p = new Promise(function(g, T) {
                    f.onload = g, f.onerror = T
                }), ae(u, "link", i), e.state.loading |= 4, Rs(u, n.precedence, t), e.instance = u;
            case "script":
                return u = ii(n.src), (s = t.querySelector(il(u))) ? (e.instance = s, Wt(s), s) : (i = n, (s = Ue.get(u)) && (i = b({}, n), Mu(i, s)), t = t.ownerDocument || t, s = t.createElement("script"), Wt(s), ae(s, "link", i), t.head.appendChild(s), e.instance = s);
            case "void":
                return null;
            default:
                throw Error(o(443, e.type))
        } else e.type === "stylesheet" && (e.state.loading & 4) === 0 && (i = e.instance, e.state.loading |= 4, Rs(i, n.precedence, t));
        return e.instance
    }

    function Rs(t, e, n) {
        for (var i = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), s = i.length ? i[i.length - 1] : null, u = s, f = 0; f < i.length; f++) {
            var g = i[f];
            if (g.dataset.precedence === e) u = g;
            else if (u !== s) break
        }
        u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = n.nodeType === 9 ? n.head : n, e.insertBefore(t, e.firstChild))
    }

    function Eu(t, e) {
        t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title)
    }

    function Mu(t, e) {
        t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity)
    }
    var Os = null;

    function Ym(t, e, n) {
        if (Os === null) {
            var i = new Map,
                s = Os = new Map;
            s.set(n, i)
        } else s = Os, i = s.get(n), i || (i = new Map, s.set(n, i));
        if (i.has(t)) return i;
        for (i.set(t, null), n = n.getElementsByTagName(t), s = 0; s < n.length; s++) {
            var u = n[s];
            if (!(u[bi] || u[It] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
                var f = u.getAttribute(e) || "";
                f = t + f;
                var g = i.get(f);
                g ? g.push(u) : i.set(f, [u])
            }
        }
        return i
    }

    function qm(t, e, n) {
        t = t.ownerDocument || t, t.head.insertBefore(n, e === "title" ? t.querySelector("head > title") : null)
    }

    function _1(t, e, n) {
        if (n === 1 || e.itemProp != null) return !1;
        switch (t) {
            case "meta":
            case "title":
                return !0;
            case "style":
                if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "") break;
                return !0;
            case "link":
                if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError) break;
                switch (e.rel) {
                    case "stylesheet":
                        return t = e.disabled, typeof e.precedence == "string" && t == null;
                    default:
                        return !0
                }
            case "script":
                if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string") return !0
        }
        return !1
    }

    function Gm(t) {
        return !(t.type === "stylesheet" && (t.state.loading & 3) === 0)
    }

    function V1(t, e, n, i) {
        if (n.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (n.state.loading & 4) === 0) {
            if (n.instance === null) {
                var s = ai(i.href),
                    u = e.querySelector(al(s));
                if (u) {
                    e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = zs.bind(t), e.then(t, t)), n.state.loading |= 4, n.instance = u, Wt(u);
                    return
                }
                u = e.ownerDocument || e, i = Bm(i), (s = Ue.get(s)) && Eu(i, s), u = u.createElement("link"), Wt(u);
                var f = u;
                f._p = new Promise(function(g, T) {
                    f.onload = g, f.onerror = T
                }), ae(u, "link", i), n.instance = u
            }
            t.stylesheets === null && (t.stylesheets = new Map), t.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (t.count++, n = zs.bind(t), e.addEventListener("load", n), e.addEventListener("error", n))
        }
    }
    var Nu = 0;

    function k1(t, e) {
        return t.stylesheets && t.count === 0 && Vs(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(n) {
            var i = setTimeout(function() {
                if (t.stylesheets && Vs(t, t.stylesheets), t.unsuspend) {
                    var u = t.unsuspend;
                    t.unsuspend = null, u()
                }
            }, 6e4 + e);
            0 < t.imgBytes && Nu === 0 && (Nu = 62500 * y1());
            var s = setTimeout(function() {
                if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && Vs(t, t.stylesheets), t.unsuspend)) {
                    var u = t.unsuspend;
                    t.unsuspend = null, u()
                }
            }, (t.imgBytes > Nu ? 50 : 800) + e);
            return t.unsuspend = n,
                function() {
                    t.unsuspend = null, clearTimeout(i), clearTimeout(s)
                }
        } : null
    }

    function zs() {
        if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
            if (this.stylesheets) Vs(this, this.stylesheets);
            else if (this.unsuspend) {
                var t = this.unsuspend;
                this.unsuspend = null, t()
            }
        }
    }
    var _s = null;

    function Vs(t, e) {
        t.stylesheets = null, t.unsuspend !== null && (t.count++, _s = new Map, e.forEach(L1, t), _s = null, zs.call(t))
    }

    function L1(t, e) {
        if (!(e.state.loading & 4)) {
            var n = _s.get(t);
            if (n) var i = n.get(null);
            else {
                n = new Map, _s.set(t, n);
                for (var s = t.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < s.length; u++) {
                    var f = s[u];
                    (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (n.set(f.dataset.precedence, f), i = f)
                }
                i && n.set(null, i)
            }
            s = e.instance, f = s.getAttribute("data-precedence"), u = n.get(f) || i, u === i && n.set(null, s), n.set(f, s), this.count++, i = zs.bind(this), s.addEventListener("load", i), s.addEventListener("error", i), u ? u.parentNode.insertBefore(s, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(s, t.firstChild)), e.state.loading |= 4
        }
    }
    var ll = {
        $$typeof: H,
        Provider: null,
        Consumer: null,
        _currentValue: F,
        _currentValue2: F,
        _threadCount: 0
    };

    function U1(t, e, n, i, s, u, f, g, T) {
        this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = So(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = So(0), this.hiddenUpdates = So(null), this.identifierPrefix = i, this.onUncaughtError = s, this.onCaughtError = u, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = T, this.incompleteTransitions = new Map
    }

    function Xm(t, e, n, i, s, u, f, g, T, D, _, L) {
        return t = new U1(t, e, n, f, T, D, _, L, g), e = 1, u === !0 && (e |= 24), u = Te(3, null, null, e), t.current = u, u.stateNode = t, e = lr(), e.refCount++, t.pooledCache = e, e.refCount++, u.memoizedState = {
            element: i,
            isDehydrated: n,
            cache: e
        }, ur(u), t
    }

    function Km(t) {
        return t ? (t = Va, t) : Va
    }

    function Zm(t, e, n, i, s, u) {
        s = Km(s), i.context === null ? i.context = s : i.pendingContext = s, i = jn(e), i.payload = {
            element: n
        }, u = u === void 0 ? null : u, u !== null && (i.callback = u), n = Cn(t, i, e), n !== null && (ge(n, t, e), Li(n, t, e))
    }

    function Qm(t, e) {
        if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
            var n = t.retryLane;
            t.retryLane = n !== 0 && n < e ? n : e
        }
    }

    function wu(t, e) {
        Qm(t, e), (t = t.alternate) && Qm(t, e)
    }

    function Jm(t) {
        if (t.tag === 13 || t.tag === 31) {
            var e = aa(t, 67108864);
            e !== null && ge(e, t, 67108864), wu(t, 67108864)
        }
    }

    function Fm(t) {
        if (t.tag === 13 || t.tag === 31) {
            var e = we();
            e = To(e);
            var n = aa(t, e);
            n !== null && ge(n, t, e), wu(t, e)
        }
    }
    var ks = !0;

    function B1(t, e, n, i) {
        var s = O.T;
        O.T = null;
        var u = K.p;
        try {
            K.p = 2, Du(t, e, n, i)
        } finally {
            K.p = u, O.T = s
        }
    }

    function H1(t, e, n, i) {
        var s = O.T;
        O.T = null;
        var u = K.p;
        try {
            K.p = 8, Du(t, e, n, i)
        } finally {
            K.p = u, O.T = s
        }
    }

    function Du(t, e, n, i) {
        if (ks) {
            var s = ju(i);
            if (s === null) mu(t, e, i, Ls, n), Wm(t, i);
            else if (q1(s, t, e, n, i)) i.stopPropagation();
            else if (Wm(t, i), e & 4 && -1 < Y1.indexOf(t)) {
                for (; s !== null;) {
                    var u = Ea(s);
                    if (u !== null) switch (u.tag) {
                        case 3:
                            if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                                var f = $n(u.pendingLanes);
                                if (f !== 0) {
                                    var g = u;
                                    for (g.pendingLanes |= 2, g.entangledLanes |= 2; f;) {
                                        var T = 1 << 31 - be(f);
                                        g.entanglements[1] |= T, f &= ~T
                                    }
                                    Pe(u), (At & 6) === 0 && (xs = ve() + 500, Ii(0))
                                }
                            }
                            break;
                        case 31:
                        case 13:
                            g = aa(u, 2), g !== null && ge(g, u, 2), Ss(), wu(u, 2)
                    }
                    if (u = ju(i), u === null && mu(t, e, i, Ls, n), u === s) break;
                    s = u
                }
                s !== null && i.stopPropagation()
            } else mu(t, e, i, null, n)
        }
    }

    function ju(t) {
        return t = Ro(t), Cu(t)
    }
    var Ls = null;

    function Cu(t) {
        if (Ls = null, t = Aa(t), t !== null) {
            var e = h(t);
            if (e === null) t = null;
            else {
                var n = e.tag;
                if (n === 13) {
                    if (t = d(e), t !== null) return t;
                    t = null
                } else if (n === 31) {
                    if (t = p(e), t !== null) return t;
                    t = null
                } else if (n === 3) {
                    if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
                    t = null
                } else e !== t && (t = null)
            }
        }
        return Ls = t, null
    }

    function Pm(t) {
        switch (t) {
            case "beforetoggle":
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "toggle":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
                return 2;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 8;
            case "message":
                switch (Ng()) {
                    case af:
                        return 2;
                    case lf:
                        return 8;
                    case Nl:
                    case wg:
                        return 32;
                    case sf:
                        return 268435456;
                    default:
                        return 32
                }
            default:
                return 32
        }
    }
    var Ru = !1,
        Yn = null,
        qn = null,
        Gn = null,
        sl = new Map,
        ol = new Map,
        Xn = [],
        Y1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

    function Wm(t, e) {
        switch (t) {
            case "focusin":
            case "focusout":
                Yn = null;
                break;
            case "dragenter":
            case "dragleave":
                qn = null;
                break;
            case "mouseover":
            case "mouseout":
                Gn = null;
                break;
            case "pointerover":
            case "pointerout":
                sl.delete(e.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                ol.delete(e.pointerId)
        }
    }

    function rl(t, e, n, i, s, u) {
        return t === null || t.nativeEvent !== u ? (t = {
            blockedOn: e,
            domEventName: n,
            eventSystemFlags: i,
            nativeEvent: u,
            targetContainers: [s]
        }, e !== null && (e = Ea(e), e !== null && Jm(e)), t) : (t.eventSystemFlags |= i, e = t.targetContainers, s !== null && e.indexOf(s) === -1 && e.push(s), t)
    }

    function q1(t, e, n, i, s) {
        switch (e) {
            case "focusin":
                return Yn = rl(Yn, t, e, n, i, s), !0;
            case "dragenter":
                return qn = rl(qn, t, e, n, i, s), !0;
            case "mouseover":
                return Gn = rl(Gn, t, e, n, i, s), !0;
            case "pointerover":
                var u = s.pointerId;
                return sl.set(u, rl(sl.get(u) || null, t, e, n, i, s)), !0;
            case "gotpointercapture":
                return u = s.pointerId, ol.set(u, rl(ol.get(u) || null, t, e, n, i, s)), !0
        }
        return !1
    }

    function $m(t) {
        var e = Aa(t.target);
        if (e !== null) {
            var n = h(e);
            if (n !== null) {
                if (e = n.tag, e === 13) {
                    if (e = d(n), e !== null) {
                        t.blockedOn = e, df(t.priority, function() {
                            Fm(n)
                        });
                        return
                    }
                } else if (e === 31) {
                    if (e = p(n), e !== null) {
                        t.blockedOn = e, df(t.priority, function() {
                            Fm(n)
                        });
                        return
                    }
                } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                    t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                    return
                }
            }
        }
        t.blockedOn = null
    }

    function Us(t) {
        if (t.blockedOn !== null) return !1;
        for (var e = t.targetContainers; 0 < e.length;) {
            var n = ju(t.nativeEvent);
            if (n === null) {
                n = t.nativeEvent;
                var i = new n.constructor(n.type, n);
                Co = i, n.target.dispatchEvent(i), Co = null
            } else return e = Ea(n), e !== null && Jm(e), t.blockedOn = n, !1;
            e.shift()
        }
        return !0
    }

    function Im(t, e, n) {
        Us(t) && n.delete(e)
    }

    function G1() {
        Ru = !1, Yn !== null && Us(Yn) && (Yn = null), qn !== null && Us(qn) && (qn = null), Gn !== null && Us(Gn) && (Gn = null), sl.forEach(Im), ol.forEach(Im)
    }

    function Bs(t, e) {
        t.blockedOn === e && (t.blockedOn = null, Ru || (Ru = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, G1)))
    }
    var Hs = null;

    function t0(t) {
        Hs !== t && (Hs = t, a.unstable_scheduleCallback(a.unstable_NormalPriority, function() {
            Hs === t && (Hs = null);
            for (var e = 0; e < t.length; e += 3) {
                var n = t[e],
                    i = t[e + 1],
                    s = t[e + 2];
                if (typeof i != "function") {
                    if (Cu(i || n) === null) continue;
                    break
                }
                var u = Ea(n);
                u !== null && (t.splice(e, 3), e -= 3, jr(u, {
                    pending: !0,
                    data: s,
                    method: n.method,
                    action: i
                }, i, s))
            }
        }))
    }

    function li(t) {
        function e(T) {
            return Bs(T, t)
        }
        Yn !== null && Bs(Yn, t), qn !== null && Bs(qn, t), Gn !== null && Bs(Gn, t), sl.forEach(e), ol.forEach(e);
        for (var n = 0; n < Xn.length; n++) {
            var i = Xn[n];
            i.blockedOn === t && (i.blockedOn = null)
        }
        for (; 0 < Xn.length && (n = Xn[0], n.blockedOn === null);) $m(n), n.blockedOn === null && Xn.shift();
        if (n = (t.ownerDocument || t).$$reactFormReplay, n != null)
            for (i = 0; i < n.length; i += 3) {
                var s = n[i],
                    u = n[i + 1],
                    f = s[fe] || null;
                if (typeof u == "function") f || t0(n);
                else if (f) {
                    var g = null;
                    if (u && u.hasAttribute("formAction")) {
                        if (s = u, f = u[fe] || null) g = f.formAction;
                        else if (Cu(s) !== null) continue
                    } else g = f.action;
                    typeof g == "function" ? n[i + 1] = g : (n.splice(i, 3), i -= 3), t0(n)
                }
            }
    }

    function e0() {
        function t(u) {
            u.canIntercept && u.info === "react-transition" && u.intercept({
                handler: function() {
                    return new Promise(function(f) {
                        return s = f
                    })
                },
                focusReset: "manual",
                scroll: "manual"
            })
        }

        function e() {
            s !== null && (s(), s = null), i || setTimeout(n, 20)
        }

        function n() {
            if (!i && !navigation.transition) {
                var u = navigation.currentEntry;
                u && u.url != null && navigation.navigate(u.url, {
                    state: u.getState(),
                    info: "react-transition",
                    history: "replace"
                })
            }
        }
        if (typeof navigation == "object") {
            var i = !1,
                s = null;
            return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(n, 100),
                function() {
                    i = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), s !== null && (s(), s = null)
                }
        }
    }

    function Ou(t) {
        this._internalRoot = t
    }
    Ys.prototype.render = Ou.prototype.render = function(t) {
        var e = this._internalRoot;
        if (e === null) throw Error(o(409));
        var n = e.current,
            i = we();
        Zm(n, i, t, e, null, null)
    }, Ys.prototype.unmount = Ou.prototype.unmount = function() {
        var t = this._internalRoot;
        if (t !== null) {
            this._internalRoot = null;
            var e = t.containerInfo;
            Zm(t.current, 2, null, t, null, null), Ss(), e[Ta] = null
        }
    };

    function Ys(t) {
        this._internalRoot = t
    }
    Ys.prototype.unstable_scheduleHydration = function(t) {
        if (t) {
            var e = ff();
            t = {
                blockedOn: null,
                target: t,
                priority: e
            };
            for (var n = 0; n < Xn.length && e !== 0 && e < Xn[n].priority; n++);
            Xn.splice(n, 0, t), n === 0 && $m(t)
        }
    };
    var n0 = l.version;
    if (n0 !== "19.2.7") throw Error(o(527, n0, "19.2.7"));
    K.findDOMNode = function(t) {
        var e = t._reactInternals;
        if (e === void 0) throw typeof t.render == "function" ? Error(o(188)) : (t = Object.keys(t).join(","), Error(o(268, t)));
        return t = m(e), t = t !== null ? x(t) : null, t = t === null ? null : t.stateNode, t
    };
    var X1 = {
        bundleType: 0,
        version: "19.2.7",
        rendererPackageName: "react-dom",
        currentDispatcherRef: O,
        reconcilerVersion: "19.2.7"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var qs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!qs.isDisabled && qs.supportsFiber) try {
            gi = qs.inject(X1), xe = qs
        } catch {}
    }
    return cl.createRoot = function(t, e) {
        if (!c(t)) throw Error(o(299));
        var n = !1,
            i = "",
            s = uh,
            u = ch,
            f = fh;
        return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (i = e.identifierPrefix), e.onUncaughtError !== void 0 && (s = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (f = e.onRecoverableError)), e = Xm(t, 1, !1, null, null, n, i, null, s, u, f, e0), t[Ta] = e.current, hu(t), new Ou(e)
    }, cl.hydrateRoot = function(t, e, n) {
        if (!c(t)) throw Error(o(299));
        var i = !1,
            s = "",
            u = uh,
            f = ch,
            g = fh,
            T = null;
        return n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onUncaughtError !== void 0 && (u = n.onUncaughtError), n.onCaughtError !== void 0 && (f = n.onCaughtError), n.onRecoverableError !== void 0 && (g = n.onRecoverableError), n.formState !== void 0 && (T = n.formState)), e = Xm(t, 1, !0, e, n ?? null, i, s, T, u, f, g, e0), e.context = Km(null), n = e.current, i = we(), i = To(i), s = jn(i), s.callback = null, Cn(n, s, i), n = i, e.current.lanes = n, xi(e, n), Pe(e), t[Ta] = e.current, hu(t), new Ys(e)
    }, cl.version = "19.2.7", cl
}
var d0;

function tx() {
    if (d0) return Vu.exports;
    d0 = 1;

    function a() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)
        } catch (l) {
            console.error(l)
        }
    }
    return a(), Vu.exports = I1(), Vu.exports
}
var ex = tx();
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nx = a => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    ax = a => a.replace(/^([A-Z])|[\s-_]+(\w)/g, (l, r, o) => o ? o.toUpperCase() : r.toLowerCase()),
    h0 = a => {
        const l = ax(a);
        return l.charAt(0).toUpperCase() + l.slice(1)
    },
    Op = (...a) => a.filter((l, r, o) => !!l && l.trim() !== "" && o.indexOf(l) === r).join(" ").trim(),
    ix = a => {
        for (const l in a)
            if (l.startsWith("aria-") || l === "role" || l === "title") return !0
    };
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var lx = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sx = X.forwardRef(({
    color: a = "currentColor",
    size: l = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: c = "",
    children: h,
    iconNode: d,
    ...p
}, v) => X.createElement("svg", {
    ref: v,
    ...lx,
    width: l,
    height: l,
    stroke: a,
    strokeWidth: o ? Number(r) * 24 / Number(l) : r,
    className: Op("lucide", c),
    ...!h && !ix(p) && {
        "aria-hidden": "true"
    },
    ...p
}, [...d.map(([m, x]) => X.createElement(m, x)), ...Array.isArray(h) ? h : [h]]));
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _t = (a, l) => {
    const r = X.forwardRef(({
        className: o,
        ...c
    }, h) => X.createElement(sx, {
        ref: h,
        iconNode: l,
        className: Op(`lucide-${nx(h0(a))}`, `lucide-${a}`, o),
        ...c
    }));
    return r.displayName = h0(a), r
};
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ox = [
        ["path", {
            d: "M12 5v14",
            key: "s699le"
        }],
        ["path", {
            d: "m19 12-7 7-7-7",
            key: "1idqje"
        }]
    ],
    rx = _t("arrow-down", ox);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ux = [
        ["path", {
            d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
            key: "1yiouv"
        }],
        ["circle", {
            cx: "12",
            cy: "8",
            r: "6",
            key: "1vp47v"
        }]
    ],
    cx = _t("award", ux);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fx = [
        ["path", {
            d: "m11 10 3 3",
            key: "fzmg1i"
        }],
        ["path", {
            d: "M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z",
            key: "p4q2r7"
        }],
        ["path", {
            d: "M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031",
            key: "wy6l02"
        }]
    ],
    zp = _t("brush", fx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dx = [
        ["path", {
            d: "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",
            key: "18u6gg"
        }],
        ["circle", {
            cx: "12",
            cy: "13",
            r: "3",
            key: "1vg3eu"
        }]
    ],
    hx = _t("camera", dx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mx = [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }],
        ["path", {
            d: "m9 12 2 2 4-4",
            key: "dzmm74"
        }]
    ],
    px = _t("circle-check", mx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yx = [
        ["path", {
            d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",
            key: "9ktpf1"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }]
    ],
    _p = _t("compass", yx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gx = [
        ["path", {
            d: "M12 20v2",
            key: "1lh1kg"
        }],
        ["path", {
            d: "M12 2v2",
            key: "tus03m"
        }],
        ["path", {
            d: "M17 20v2",
            key: "1rnc9c"
        }],
        ["path", {
            d: "M17 2v2",
            key: "11trls"
        }],
        ["path", {
            d: "M2 12h2",
            key: "1t8f8n"
        }],
        ["path", {
            d: "M2 17h2",
            key: "7oei6x"
        }],
        ["path", {
            d: "M2 7h2",
            key: "asdhe0"
        }],
        ["path", {
            d: "M20 12h2",
            key: "1q8mjw"
        }],
        ["path", {
            d: "M20 17h2",
            key: "1fpfkl"
        }],
        ["path", {
            d: "M20 7h2",
            key: "1o8tra"
        }],
        ["path", {
            d: "M7 20v2",
            key: "4gnj0m"
        }],
        ["path", {
            d: "M7 2v2",
            key: "1i4yhu"
        }],
        ["rect", {
            x: "4",
            y: "4",
            width: "16",
            height: "16",
            rx: "2",
            key: "1vbyd7"
        }],
        ["rect", {
            x: "8",
            y: "8",
            width: "8",
            height: "8",
            rx: "1",
            key: "z9xiuo"
        }]
    ],
    vx = _t("cpu", gx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xx = [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }],
        ["line", {
            x1: "22",
            x2: "18",
            y1: "12",
            y2: "12",
            key: "l9bcsi"
        }],
        ["line", {
            x1: "6",
            x2: "2",
            y1: "12",
            y2: "12",
            key: "13hhkx"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "6",
            y2: "2",
            key: "10w3f3"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "22",
            y2: "18",
            key: "15g9kq"
        }]
    ],
    wc = _t("crosshair", xx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bx = [
        ["path", {
            d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
            key: "ct8e1f"
        }],
        ["path", {
            d: "M14.084 14.158a3 3 0 0 1-4.242-4.242",
            key: "151rxh"
        }],
        ["path", {
            d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
            key: "13bj9a"
        }],
        ["path", {
            d: "m2 2 20 20",
            key: "1ooewy"
        }]
    ],
    Sx = _t("eye-off", bx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tx = [
        ["path", {
            d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
            key: "1nclc0"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "3",
            key: "1v7zrd"
        }]
    ],
    Ax = _t("eye", Tx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ex = [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            key: "afitv7"
        }],
        ["path", {
            d: "M7 3v18",
            key: "bbkbws"
        }],
        ["path", {
            d: "M3 7.5h4",
            key: "zfgn84"
        }],
        ["path", {
            d: "M3 12h18",
            key: "1i2n21"
        }],
        ["path", {
            d: "M3 16.5h4",
            key: "1230mu"
        }],
        ["path", {
            d: "M17 3v18",
            key: "in4fa5"
        }],
        ["path", {
            d: "M17 7.5h4",
            key: "myr1c1"
        }],
        ["path", {
            d: "M17 16.5h4",
            key: "go4c1d"
        }]
    ],
    Vp = _t("film", Ex);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mx = [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            key: "afitv7"
        }],
        ["path", {
            d: "M3 9h18",
            key: "1pudct"
        }],
        ["path", {
            d: "M3 15h18",
            key: "5xshup"
        }],
        ["path", {
            d: "M9 3v18",
            key: "fh3hqa"
        }],
        ["path", {
            d: "M15 3v18",
            key: "14nvp0"
        }]
    ],
    Nx = _t("grid-3x3", Mx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wx = [
        ["path", {
            d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
            key: "zw3jo"
        }],
        ["path", {
            d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
            key: "1wduqc"
        }],
        ["path", {
            d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
            key: "kqbvx6"
        }]
    ],
    kp = _t("layers", wx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dx = [
        ["path", {
            d: "M9 17H7A5 5 0 0 1 7 7h2",
            key: "8i5ue5"
        }],
        ["path", {
            d: "M15 7h2a5 5 0 1 1 0 10h-2",
            key: "1b9ql8"
        }],
        ["line", {
            x1: "8",
            x2: "16",
            y1: "12",
            y2: "12",
            key: "1jonct"
        }]
    ],
    jx = _t("link-2", Dx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cx = [
        ["path", {
            d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
            key: "c2jq9f"
        }],
        ["rect", {
            width: "4",
            height: "12",
            x: "2",
            y: "9",
            key: "mk3on5"
        }],
        ["circle", {
            cx: "4",
            cy: "4",
            r: "2",
            key: "bt5ra8"
        }]
    ],
    Rx = _t("linkedin", Cx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ox = [
        ["path", {
            d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
            key: "132q7q"
        }],
        ["rect", {
            x: "2",
            y: "4",
            width: "20",
            height: "16",
            rx: "2",
            key: "izxlao"
        }]
    ],
    zx = _t("mail", Ox);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _x = [
        ["path", {
            d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
            key: "v9h5vc"
        }],
        ["path", {
            d: "M21 3v5h-5",
            key: "1q7to0"
        }],
        ["path", {
            d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
            key: "3uifl3"
        }],
        ["path", {
            d: "M8 16H3v5",
            key: "1cv678"
        }]
    ],
    Vx = _t("refresh-cw", _x);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kx = [
        ["path", {
            d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
            key: "1357e3"
        }],
        ["path", {
            d: "M3 3v5h5",
            key: "1xhq8a"
        }]
    ],
    Lx = _t("rotate-ccw", kx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ux = [
        ["path", {
            d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
            key: "1c8476"
        }],
        ["path", {
            d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",
            key: "1ydtos"
        }],
        ["path", {
            d: "M7 3v4a1 1 0 0 0 1 1h7",
            key: "t51u73"
        }]
    ],
    Bx = _t("save", Ux);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hx = [
        ["path", {
            d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
            key: "1s2grr"
        }],
        ["path", {
            d: "M20 2v4",
            key: "1rf3ol"
        }],
        ["path", {
            d: "M22 4h-4",
            key: "gwowj6"
        }],
        ["circle", {
            cx: "4",
            cy: "20",
            r: "2",
            key: "6kqj1y"
        }]
    ],
    Lp = _t("sparkles", Hx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yx = [
        ["path", {
            d: "M12 19h8",
            key: "baeox8"
        }],
        ["path", {
            d: "m4 17 6-6-6-6",
            key: "1yngyt"
        }]
    ],
    qx = _t("terminal", Yx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gx = [
        ["path", {
            d: "M10 11v6",
            key: "nco0om"
        }],
        ["path", {
            d: "M14 11v6",
            key: "outv1u"
        }],
        ["path", {
            d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
            key: "miytrc"
        }],
        ["path", {
            d: "M3 6h18",
            key: "d0wm0j"
        }],
        ["path", {
            d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
            key: "e791ji"
        }]
    ],
    Xx = _t("trash-2", Gx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kx = [
        ["path", {
            d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
            key: "975kel"
        }],
        ["circle", {
            cx: "12",
            cy: "7",
            r: "4",
            key: "17ys0d"
        }]
    ],
    Zx = _t("user", Kx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qx = [
        ["path", {
            d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
            key: "ftymec"
        }],
        ["rect", {
            x: "2",
            y: "6",
            width: "14",
            height: "12",
            rx: "2",
            key: "158x01"
        }]
    ],
    m0 = _t("video", Qx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jx = [
        ["path", {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }],
        ["path", {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }]
    ],
    Fx = _t("x", Jx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Px = [
        ["path", {
            d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",
            key: "1q2vi4"
        }],
        ["path", {
            d: "m10 15 5-3-5-3z",
            key: "1jp15x"
        }]
    ],
    Dc = _t("youtube", Px);
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
const p0 = {
        artistName: "NATTAWUT BOONMEE",
        title: "Paint / Compositor",
        bio: "Hi, I'm a VFX Artist with 2+ years of production experience in feature films, television series, and commercial productions. Experienced in Nuke compositing, digital paint, cleanup, de-aging, camera tracking, rotoanim, and CG integration.",
        youtubeUrl: "https://youtu.be/7LExDbzEYe4",
        heroVideoUrl: "/assets/vfxreel2026_low.mp4",
        email: "nattawut.boonmm@gmail.com",
        linkedin: "",
        artstation: "",
        experience: "2+ Years in Feature & Commercial VFX"
    },/*
    Wx = [{
        name: "Nebula Lasers (Default)",
        url: "https://assets.mixkit.co/videos/preview/mixkit-abstract-laser-lights-background-loop-41851-large.mp4"
    }, {
        name: "Digital Grid",
        url: "https://assets.mixkit.co/videos/preview/mixkit-grid-of-blue-lights-looping-background-41838-large.mp4"
    }, {
        name: "Star Space",
        url: "https://assets.mixkit.co/videos/preview/mixkit-stars-in-space-background-loop-40079-large.mp4"
    }, {
        name: "Cyber Runway",
        url: "https://assets.mixkit.co/videos/preview/mixkit-retro-cyberpunk-grid-background-40058-large.mp4"
    }], */
    y0 = [{
        id: "proj_comp_01",
        title: "In Memoriam",
        category: "composite",
        description: "I worked on compositing, and scene building. And this is the master shot of this short film. We wanted to make it fantasy more than other shots. The hardest part is the flickering lights.",
        software: ["Nuke (Comp)", "Houdini (Terrain)", "Maya (Lighting)"],
        beforeImage: "../assets/inmem/8bf.jpg",
        afterImage: "../assets/inmem/8.jpg",
        role: "Compositor",
        client: "",
        breakdownSteps: ["N/A"]
    }, {
        id: "proj_comp_02",
        title: "In Memoriam",
        category: "composite",
        description: "This shot depicts a man slowly drowning in the deep ocean as he is swarmed by a mass of leeches.",
        software: ["Nuke"],
        beforeImage: "../assets/inmem/18_bf.jpg",
        afterImage: "../assets/inmem/18.jpg",
        role: "compositor",
        client: "",
        breakdownSteps: ["N/A"]
    }, {
        id: "proj_comp_03",
        title: "In Memoriam",
        category: "composite",
        description: "I worked on compositite and build the scene and lighting.",
        software: ["Nuke", "Maya"],
        beforeImage: "../assets/inmem/19bf.jpeg",
        afterImage: "../assets/inmem/19.jpeg",
        role: "compositor",
        client: "",
        breakdownSteps: ["N/A"]
    }, {
        id: "proj_comp_04",
        title: "Union",
        category: "composite",
        description: "This was a test shot I made while I was in school to test camera and scene integration before my final project. I also used it to test rendering in Isotropix's Clarisse.",
        software: ["Nuke", "Maya", "Clarisse"],
        beforeImage: "../assets/union/first_ft.png",
        afterImage: "../assets/union/thevillage_LS_02_graded03.png",
        role: "Generalist",
        client: "",
        breakdownSteps: ["N/A"]
    }, {
        id: "proj_comp_05",
        title: "In Memoriam",
        category: "composite",
        description: "I worked on compositite and build the scene and lighting.",
        software: ["Nuke", "Maya",],
        beforeImage: "../assets/inmem/20bf.jpg",
        afterImage: "../assets/inmem/20.jpg",
        role: "compositor",
        client: "",
        breakdownSteps: ["N/A"]
    }, {
        id: "proj_track_01",
        title: "Wire Removal - MV ล้านปีแสง - Zom Marie",
        category: "tracking",
        description: "Cam support for wire removal.",
        software: ["Syntheyes"],
        beforeImage: "",
        afterImage: "../assets/trk_zom01.mp4",
        role: "Camera",
        client: "",
        breakdownSteps: ["N/A"]
    }, {
        id: "proj_track_02",
        title: "Psycho-T (Thesis Project)",
        category: "tracking",
        description: "CG : Cut Arm",
        software: ["Syntheyes"],
        beforeImage: "",
        afterImage: "../assets/trk_psychot01.mp4",
        role: "Camera",
        client: "",
        breakdownSteps: ["N/A"]
    }, {
        id: "proj_track_03",
        title: "My Test Project",
        category: "tracking",
        description: "Just testing world-building in SynthEyes",
        software: ["Syntheyes"],
        beforeImage: "",
        afterImage: "../assets/trk_siam01.mp4",
        role: "Camera",
        client: "",
        breakdownSteps: ["N/A"]
    }, {
        id: "proj_paint_01",
        title: "Wire Removal - MV ล้านปีแสง - Zom Marie",
        category: "paint",
        description: "Remove the fishing line attached to the flowers.",
        software: ["Nuke", "Silhouette", "SynthEyes (Cam support)"],
        beforeImage: "../assets/zom/zmr1bf.jpg",
        afterImage: "../assets/zom/zmr1.jpg",
        role: "Digital Paint & Roto Artist",
        client: "Velcurve Studio",
        breakdownSteps: ["N/A"]
    },/* {
        id: "proj_paint_02",
        title: "Project 'Overpass': Industrial Warehouse Wire Cleanup",
        category: "paint",
        description: "High-end digital clean plate paint-out for a complex stunt wire set. Rebuilt intricate industrial steel girders and concrete pillars located behind multiple safety harness wires, preserving original shadows and moving environmental particulate haze.",
        software: ["Foundry Nuke", "Silhouette FX", "Adobe Photoshop"],
        beforeImage: "/src/assets/images/paint_stunt_harness_1782571733870.jpg",
        afterImage: "/src/assets/images/paint_stunt_clean_1782571795364.jpg",
        role: "Lead Paint Artist",
        client: "Vanguard Studios",
        breakdownSteps: ["Automated and manual paint-out of orange safety cables and support rigs", "Dynamic reconstruction of complex steel structures and industrial scaffolding", "Restoration of subtle smoke and particulate haze across wire-crossed areas", "Roto-masking of leaping stunt actors across detailed background zones", "Ensuring color temperature and dynamic noise values remain intact on pristine regions"]
    },*/ {
        id: "proj_other_01",
        title: "In Memroriam",
        category: "other",
        description: "Made world, Layout, Look Dev, and Lighting",
        software: ["Houdini (Terrain)", "Maya", "Redshift", "Clarrise", "Mari"],
        beforeImage: "",
        afterImage: "../assets/inmem/16.jpg",
        role: "Compositor",
        client: "",
        breakdownSteps: ["N/A"]
    }, {
        id: "proj_other_02",
        title: "In Memroriam",
        category: "other",
        description: "World Building, Composite",
        software: ["Houdini (Terrain)", "Nuke"],
        beforeImage: "",
        afterImage: "../assets/inmem/9.jpg",
        role: "Compositor",
        client: "",
        breakdownSteps: ["N/A"]
    }, {
        id: "proj_other_03",
        title: "In Memroriam",
        category: "other",
        description: "World Building, Composite",
        software: ["Houdini (Terrain)", "Nuke"],
        beforeImage: "",
        afterImage: "../assets/inmem/11.jpg",
        role: "Compositor",
        client: "",
        breakdownSteps: ["N/A"]
    }, {
        id: "proj_other_04",
        title: "City Car (Personal Project)",
        category: "other",
        description: "I made layout, lighting, render, and composite. This is a personal testing project for learing Clarisse.",
        software: ["Houdini, Clarisse, Nuke"],
        beforeImage: "",
        afterImage: "../assets/city_car_graded_v01_plated.jpg",
        role: "Compositor",
        client: "",
        breakdownSteps: ["N/A"]
    }];

function $x({
    config: a,
    onOpenSettings: l
}) {
    const [r, o] = X.useState(!1);
    X.useEffect(() => {
        const h = () => {
            o(window.scrollY > 50)
        };
        return window.addEventListener("scroll", h), () => window.removeEventListener("scroll", h)
    }, []);
    const c = h => {
        const d = document.getElementById(h);
        if (d) {
            const m = d.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({
                top: m,
                behavior: "smooth"
            })
        }
    };
    return y.jsx("header", {
        id: "main-header",
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${r?"bg-[#07080b]/90 backdrop-blur-md border-neutral-950 py-3 shadow-xl":"bg-transparent border-transparent py-5"}`,
        children: y.jsxs("div", {
            className: "max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between",
            children: [y.jsxs("div", {
                onClick: () => window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                }),
                className: "flex items-center gap-3 cursor-pointer select-none group",
                children: [y.jsx("div", {
                    className: "h-7 w-7 bg-white flex items-center justify-center text-black font-black text-xs font-mono tracking-tighter",
                    children: "Ω"
                }), y.jsxs("div", {
                    className: "flex flex-col",
                    children: [y.jsx("span", {
                        className: "font-sans font-black italic text-sm tracking-[0.25em] text-white uppercase group-hover:text-neutral-400 transition-colors",
                        children: a.artistName
                    })]
                })]
            }), /*y.jsxs("nav", {
                className: "hidden md:flex items-center gap-6 lg:gap-8 font-mono text-[10px] tracking-[0.25em] text-neutral-400",
                children: [y.jsxs("button", {
                    onClick: () => c("composite"),
                    className: "flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer group",
                    children: [y.jsx(kp, {
                        className: "h-3.5 w-3.5 text-neutral-600 group-hover:text-white transition-colors"
                    }), "COMP"]
                }), y.jsxs("button", {
                    onClick: () => c("tracking"),
                    className: "flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer group",
                    children: [y.jsx(wc, {
                        className: "h-3.5 w-3.5 text-neutral-600 group-hover:text-white transition-colors"
                    }), "TRACKING"]
                }), y.jsxs("button", {
                    onClick: () => c("paint"),
                    className: "flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer group",
                    children: [y.jsx(zp, {
                        className: "h-3.5 w-3.5 text-neutral-600 group-hover:text-white transition-colors"
                    }), "PAINT"]
                }), y.jsxs("button", {
                    onClick: () => c("other"),
                    className: "flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer group",
                    children: [y.jsx(_p, {
                        className: "h-3.5 w-3.5 text-neutral-600 group-hover:text-white transition-colors"
                    }), "OTHER"]
                })]
            }),*/ y.jsxs("div", {
                className: "flex items-center gap-4",
                children: [y.jsxs("a", {
                    href: a.youtubeUrl,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "bg-white hover:bg-neutral-200 text-black px-4 py-2 rounded-full font-mono text-[9px] tracking-[0.25em] uppercase flex items-center gap-1.5 transition-all font-bold",
                    children: [y.jsx(Dc, {
                        className: "h-4 w-4 text-black fill-current"
                    }), y.jsx("span", {
                        className: "hidden lg:inline",
                        children: "WATCH REEL"
                    }),]
                }), ]
            }), ]
        })
    })
}
const Up = X.createContext({});

function Ix(a) {
    const l = X.useRef(null);
    return l.current === null && (l.current = a()), l.current
}
const tb = typeof window < "u",
    eb = tb ? X.useLayoutEffect : X.useEffect,
    jc = X.createContext(null);

function Cc(a, l) {
    a.indexOf(l) === -1 && a.push(l)
}

function to(a, l) {
    const r = a.indexOf(l);
    r > -1 && a.splice(r, 1)
}
const tn = (a, l, r) => r > l ? l : r < a ? a : r;
let Rc = () => {};
const Jn = {},
    Bp = a => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a),
    Hp = a => typeof a == "object" && a !== null,
    Yp = a => /^0[^.\s]+$/u.test(a);

function qp(a) {
    let l;
    return () => (l === void 0 && (l = a()), l)
}
const He = a => a,
    Sl = (...a) => a.reduce((l, r) => o => r(l(o))),
    gl = (a, l, r) => {
        const o = l - a;
        return o ? (r - a) / o : 1
    };
class Oc {
    constructor() {
        this.subscriptions = []
    }
    add(l) {
        return Cc(this.subscriptions, l), () => to(this.subscriptions, l)
    }
    notify(l, r, o) {
        const c = this.subscriptions.length;
        if (c)
            if (c === 1) this.subscriptions[0](l, r, o);
            else
                for (let h = 0; h < c; h++) {
                    const d = this.subscriptions[h];
                    d && d(l, r, o)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const De = a => a * 1e3,
    Be = a => a / 1e3,
    Gp = (a, l) => l ? a * (1e3 / l) : 0,
    Xp = (a, l, r) => (((1 - 3 * r + 3 * l) * a + (3 * r - 6 * l)) * a + 3 * l) * a,
    nb = 1e-7,
    ab = 12;

function ib(a, l, r, o, c) {
    let h, d, p = 0;
    do d = l + (r - l) / 2, h = Xp(d, o, c) - a, h > 0 ? r = d : l = d; while (Math.abs(h) > nb && ++p < ab);
    return d
}

function Tl(a, l, r, o) {
    if (a === l && r === o) return He;
    const c = h => ib(h, 0, 1, a, r);
    return h => h === 0 || h === 1 ? h : Xp(c(h), l, o)
}
const Kp = a => l => l <= .5 ? a(2 * l) / 2 : (2 - a(2 * (1 - l))) / 2,
    Zp = a => l => 1 - a(1 - l),
    Qp = Tl(.33, 1.53, .69, .99),
    zc = Zp(Qp),
    Jp = Kp(zc),
    Fp = a => a >= 1 ? 1 : (a *= 2) < 1 ? .5 * zc(a) : .5 * (2 - Math.pow(2, -10 * (a - 1))),
    _c = a => 1 - Math.sin(Math.acos(a)),
    Pp = Zp(_c),
    Wp = Kp(_c),
    lb = Tl(.42, 0, 1, 1),
    sb = Tl(0, 0, .58, 1),
    $p = Tl(.42, 0, .58, 1),
    ob = a => Array.isArray(a) && typeof a[0] != "number",
    Ip = a => Array.isArray(a) && typeof a[0] == "number",
    rb = {
        linear: He,
        easeIn: lb,
        easeInOut: $p,
        easeOut: sb,
        circIn: _c,
        circInOut: Wp,
        circOut: Pp,
        backIn: zc,
        backInOut: Jp,
        backOut: Qp,
        anticipate: Fp
    },
    ub = a => typeof a == "string",
    g0 = a => {
        if (Ip(a)) {
            Rc(a.length === 4);
            const [l, r, o, c] = a;
            return Tl(l, r, o, c)
        } else if (ub(a)) return rb[a];
        return a
    },
    Gs = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];

function cb(a) {
    let l = new Set,
        r = new Set,
        o = !1,
        c = !1;
    const h = new WeakSet;
    let d = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };

    function p(m) {
        h.has(m) && (v.schedule(m), a()), m(d)
    }
    const v = {
        schedule: (m, x = !1, b = !1) => {
            const j = b && o ? l : r;
            return x && h.add(m), j.add(m), m
        },
        cancel: m => {
            r.delete(m), h.delete(m)
        },
        process: m => {
            if (d = m, o) {
                c = !0;
                return
            }
            o = !0;
            const x = l;
            l = r, r = x, l.forEach(p), l.clear(), o = !1, c && (c = !1, v.process(m))
        }
    };
    return v
}
const fb = 40;

function ty(a, l) {
    let r = !1,
        o = !0;
    const c = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        },
        h = () => r = !0,
        d = Gs.reduce((H, q) => (H[q] = cb(h), H), {}),
        {
            setup: p,
            read: v,
            resolveKeyframes: m,
            preUpdate: x,
            update: b,
            preRender: S,
            render: j,
            postRender: M
        } = d,
        z = () => {
            const H = Jn.useManualTiming,
                q = H ? c.timestamp : performance.now();
            r = !1, H || (c.delta = o ? 1e3 / 60 : Math.max(Math.min(q - c.timestamp, fb), 1)), c.timestamp = q, c.isProcessing = !0, p.process(c), v.process(c), m.process(c), x.process(c), b.process(c), S.process(c), j.process(c), M.process(c), c.isProcessing = !1, r && l && (o = !1, a(z))
        },
        B = () => {
            r = !0, o = !0, c.isProcessing || a(z)
        };
    return {
        schedule: Gs.reduce((H, q) => {
            const $ = d[q];
            return H[q] = (at, Z = !1, J = !1) => (r || B(), $.schedule(at, Z, J)), H
        }, {}),
        cancel: H => {
            for (let q = 0; q < Gs.length; q++) d[Gs[q]].cancel(H)
        },
        state: c,
        steps: d
    }
}
const {
    schedule: zt,
    cancel: Fn,
    state: ie,
    steps: Bu
} = ty(typeof requestAnimationFrame < "u" ? requestAnimationFrame : He, !0);
let Qs;

function db() {
    Qs = void 0
}
const ue = {
        now: () => (Qs === void 0 && ue.set(ie.isProcessing || Jn.useManualTiming ? ie.timestamp : performance.now()), Qs),
        set: a => {
            Qs = a, queueMicrotask(db)
        }
    },
    ey = a => l => typeof l == "string" && l.startsWith(a),
    ny = ey("--"),
    hb = ey("var(--"),
    Vc = a => hb(a) ? mb.test(a.split("/*")[0].trim()) : !1,
    mb = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;

function v0(a) {
    return typeof a != "string" ? !1 : a.split("/*")[0].includes("var(--")
}
const hi = {
        test: a => typeof a == "number",
        parse: parseFloat,
        transform: a => a
    },
    vl = {
        ...hi,
        transform: a => tn(0, 1, a)
    },
    Xs = {
        ...hi,
        default: 1
    },
    hl = a => Math.round(a * 1e5) / 1e5,
    kc = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

function pb(a) {
    return a == null
}
const yb = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
    Lc = (a, l) => r => !!(typeof r == "string" && yb.test(r) && r.startsWith(a) || l && !pb(r) && Object.prototype.hasOwnProperty.call(r, l)),
    ay = (a, l, r) => o => {
        if (typeof o != "string") return o;
        const [c, h, d, p] = o.match(kc);
        return {
            [a]: parseFloat(c),
            [l]: parseFloat(h),
            [r]: parseFloat(d),
            alpha: p !== void 0 ? parseFloat(p) : 1
        }
    },
    gb = a => tn(0, 255, a),
    Hu = {
        ...hi,
        transform: a => Math.round(gb(a))
    },
    va = {
        test: Lc("rgb", "red"),
        parse: ay("red", "green", "blue"),
        transform: ({
            red: a,
            green: l,
            blue: r,
            alpha: o = 1
        }) => "rgba(" + Hu.transform(a) + ", " + Hu.transform(l) + ", " + Hu.transform(r) + ", " + hl(vl.transform(o)) + ")"
    };

function vb(a) {
    let l = "",
        r = "",
        o = "",
        c = "";
    return a.length > 5 ? (l = a.substring(1, 3), r = a.substring(3, 5), o = a.substring(5, 7), c = a.substring(7, 9)) : (l = a.substring(1, 2), r = a.substring(2, 3), o = a.substring(3, 4), c = a.substring(4, 5), l += l, r += r, o += o, c += c), {
        red: parseInt(l, 16),
        green: parseInt(r, 16),
        blue: parseInt(o, 16),
        alpha: c ? parseInt(c, 16) / 255 : 1
    }
}
const ec = {
        test: Lc("#"),
        parse: vb,
        transform: va.transform
    },
    Al = a => ({
        test: l => typeof l == "string" && l.endsWith(a) && l.split(" ").length === 1,
        parse: parseFloat,
        transform: l => `${l}${a}`
    }),
    bn = Al("deg"),
    Ie = Al("%"),
    W = Al("px"),
    xb = Al("vh"),
    bb = Al("vw"),
    x0 = {
        ...Ie,
        parse: a => Ie.parse(a) / 100,
        transform: a => Ie.transform(a * 100)
    },
    ri = {
        test: Lc("hsl", "hue"),
        parse: ay("hue", "saturation", "lightness"),
        transform: ({
            hue: a,
            saturation: l,
            lightness: r,
            alpha: o = 1
        }) => "hsla(" + Math.round(a) + ", " + Ie.transform(hl(l)) + ", " + Ie.transform(hl(r)) + ", " + hl(vl.transform(o)) + ")"
    },
    Jt = {
        test: a => va.test(a) || ec.test(a) || ri.test(a),
        parse: a => va.test(a) ? va.parse(a) : ri.test(a) ? ri.parse(a) : ec.parse(a),
        transform: a => typeof a == "string" ? a : a.hasOwnProperty("red") ? va.transform(a) : ri.transform(a),
        getAnimatableNone: a => {
            const l = Jt.parse(a);
            return l.alpha = 0, Jt.transform(l)
        }
    },
    Sb = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

function Tb(a) {
    var l, r;
    return isNaN(a) && typeof a == "string" && (((l = a.match(kc)) == null ? void 0 : l.length) || 0) + (((r = a.match(Sb)) == null ? void 0 : r.length) || 0) > 0
}
const iy = "number",
    ly = "color",
    Ab = "var",
    Eb = "var(",
    b0 = "${}",
    Mb = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

function fi(a) {
    const l = a.toString(),
        r = [],
        o = {
            color: [],
            number: [],
            var: []
        },
        c = [];
    let h = 0;
    const p = l.replace(Mb, v => (Jt.test(v) ? (o.color.push(h), c.push(ly), r.push(Jt.parse(v))) : v.startsWith(Eb) ? (o.var.push(h), c.push(Ab), r.push(v)) : (o.number.push(h), c.push(iy), r.push(parseFloat(v))), ++h, b0)).split(b0);
    return {
        values: r,
        split: p,
        indexes: o,
        types: c
    }
}

function Nb(a) {
    return fi(a).values
}

function sy({
    split: a,
    types: l
}) {
    const r = a.length;
    return o => {
        let c = "";
        for (let h = 0; h < r; h++)
            if (c += a[h], o[h] !== void 0) {
                const d = l[h];
                d === iy ? c += hl(o[h]) : d === ly ? c += Jt.transform(o[h]) : c += o[h]
            } return c
    }
}

function wb(a) {
    return sy(fi(a))
}
const Db = a => typeof a == "number" ? 0 : Jt.test(a) ? Jt.getAnimatableNone(a) : a,
    jb = (a, l) => typeof a == "number" ? l != null && l.trim().endsWith("/") ? a : 0 : Db(a);

function Cb(a) {
    const l = fi(a);
    return sy(l)(l.values.map((o, c) => jb(o, l.split[c])))
}
const Ze = {
    test: Tb,
    parse: Nb,
    createTransformer: wb,
    getAnimatableNone: Cb
};

function Yu(a, l, r) {
    return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? a + (l - a) * 6 * r : r < 1 / 2 ? l : r < 2 / 3 ? a + (l - a) * (2 / 3 - r) * 6 : a
}

function Rb({
    hue: a,
    saturation: l,
    lightness: r,
    alpha: o
}) {
    a /= 360, l /= 100, r /= 100;
    let c = 0,
        h = 0,
        d = 0;
    if (!l) c = h = d = r;
    else {
        const p = r < .5 ? r * (1 + l) : r + l - r * l,
            v = 2 * r - p;
        c = Yu(v, p, a + 1 / 3), h = Yu(v, p, a), d = Yu(v, p, a - 1 / 3)
    }
    return {
        red: Math.round(c * 255),
        green: Math.round(h * 255),
        blue: Math.round(d * 255),
        alpha: o
    }
}

function eo(a, l) {
    return r => r > 0 ? l : a
}
const Ot = (a, l, r) => a + (l - a) * r,
    qu = (a, l, r) => {
        const o = a * a,
            c = r * (l * l - o) + o;
        return c < 0 ? 0 : Math.sqrt(c)
    },
    Ob = [ec, va, ri],
    zb = a => Ob.find(l => l.test(a));

function S0(a) {
    const l = zb(a);
    if (!l) return !1;
    let r = l.parse(a);
    return l === ri && (r = Rb(r)), r
}
const T0 = (a, l) => {
        const r = S0(a),
            o = S0(l);
        if (!r || !o) return eo(a, l);
        const c = {
            ...r
        };
        return h => (c.red = qu(r.red, o.red, h), c.green = qu(r.green, o.green, h), c.blue = qu(r.blue, o.blue, h), c.alpha = Ot(r.alpha, o.alpha, h), va.transform(c))
    },
    nc = new Set(["none", "hidden"]);

function _b(a, l) {
    return nc.has(a) ? r => r <= 0 ? a : l : r => r >= 1 ? l : a
}

function Vb(a, l) {
    return r => Ot(a, l, r)
}

function Uc(a) {
    return typeof a == "number" ? Vb : typeof a == "string" ? Vc(a) ? eo : Jt.test(a) ? T0 : Ub : Array.isArray(a) ? oy : typeof a == "object" ? Jt.test(a) ? T0 : kb : eo
}

function oy(a, l) {
    const r = [...a],
        o = r.length,
        c = a.map((h, d) => Uc(h)(h, l[d]));
    return h => {
        for (let d = 0; d < o; d++) r[d] = c[d](h);
        return r
    }
}

function kb(a, l) {
    const r = {
            ...a,
            ...l
        },
        o = {};
    for (const c in r) a[c] !== void 0 && l[c] !== void 0 && (o[c] = Uc(a[c])(a[c], l[c]));
    return c => {
        for (const h in o) r[h] = o[h](c);
        return r
    }
}

function Lb(a, l) {
    const r = [],
        o = {
            color: 0,
            var: 0,
            number: 0
        };
    for (let c = 0; c < l.values.length; c++) {
        const h = l.types[c],
            d = a.indexes[h][o[h]],
            p = a.values[d] ?? 0;
        r[c] = p, o[h]++
    }
    return r
}
const Ub = (a, l) => {
    const r = Ze.createTransformer(l),
        o = fi(a),
        c = fi(l);
    return o.indexes.var.length === c.indexes.var.length && o.indexes.color.length === c.indexes.color.length && o.indexes.number.length >= c.indexes.number.length ? nc.has(a) && !c.values.length || nc.has(l) && !o.values.length ? _b(a, l) : Sl(oy(Lb(o, c), c.values), r) : eo(a, l)
};

function ry(a, l, r) {
    return typeof a == "number" && typeof l == "number" && typeof r == "number" ? Ot(a, l, r) : Uc(a)(a, l)
}
const Bb = a => {
        const l = ({
            timestamp: r
        }) => a(r);
        return {
            start: (r = !0) => zt.update(l, r),
            stop: () => Fn(l),
            now: () => ie.isProcessing ? ie.timestamp : ue.now()
        }
    },
    uy = (a, l, r = 10) => {
        let o = "";
        const c = Math.max(Math.round(l / r), 2);
        for (let h = 0; h < c; h++) o += Math.round(a(h / (c - 1)) * 1e4) / 1e4 + ", ";
        return `linear(${o.substring(0,o.length-2)})`
    },
    no = 2e4;

function Bc(a) {
    let l = 0;
    const r = 50;
    let o = a.next(l);
    for (; !o.done && l < no;) l += r, o = a.next(l);
    return l >= no ? 1 / 0 : l
}

function Hb(a, l = 100, r) {
    const o = r({
            ...a,
            keyframes: [0, l]
        }),
        c = Math.min(Bc(o), no);
    return {
        type: "keyframes",
        ease: h => o.next(c * h).value / l,
        duration: Be(c)
    }
}
const Ht = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
};

function ac(a, l) {
    return a * Math.sqrt(1 - l * l)
}
const Yb = 12;

function qb(a, l, r) {
    let o = r;
    for (let c = 1; c < Yb; c++) o = o - a(o) / l(o);
    return o
}
const Gu = .001;

function Gb({
    duration: a = Ht.duration,
    bounce: l = Ht.bounce,
    velocity: r = Ht.velocity,
    mass: o = Ht.mass
}) {
    let c, h, d = 1 - l;
    d = tn(Ht.minDamping, Ht.maxDamping, d), a = tn(Ht.minDuration, Ht.maxDuration, Be(a)), d < 1 ? (c = m => {
        const x = m * d,
            b = x * a,
            S = x - r,
            j = ac(m, d),
            M = Math.exp(-b);
        return Gu - S / j * M
    }, h = m => {
        const b = m * d * a,
            S = b * r + r,
            j = Math.pow(d, 2) * Math.pow(m, 2) * a,
            M = Math.exp(-b),
            z = ac(Math.pow(m, 2), d);
        return (-c(m) + Gu > 0 ? -1 : 1) * ((S - j) * M) / z
    }) : (c = m => {
        const x = Math.exp(-m * a),
            b = (m - r) * a + 1;
        return -Gu + x * b
    }, h = m => {
        const x = Math.exp(-m * a),
            b = (r - m) * (a * a);
        return x * b
    });
    const p = 5 / a,
        v = qb(c, h, p);
    if (a = De(a), isNaN(v)) return {
        stiffness: Ht.stiffness,
        damping: Ht.damping,
        duration: a
    };
    {
        const m = Math.pow(v, 2) * o;
        return {
            stiffness: m,
            damping: d * 2 * Math.sqrt(o * m),
            duration: a
        }
    }
}
const Xb = ["duration", "bounce"],
    Kb = ["stiffness", "damping", "mass"];

function A0(a, l) {
    return l.some(r => a[r] !== void 0)
}

function Zb(a) {
    let l = {
        velocity: Ht.velocity,
        stiffness: Ht.stiffness,
        damping: Ht.damping,
        mass: Ht.mass,
        isResolvedFromDuration: !1,
        ...a
    };
    if (!A0(a, Kb) && A0(a, Xb))
        if (l.velocity = 0, a.visualDuration) {
            const r = a.visualDuration,
                o = 2 * Math.PI / (r * 1.2),
                c = o * o,
                h = 2 * tn(.05, 1, 1 - (a.bounce || 0)) * Math.sqrt(c);
            l = {
                ...l,
                mass: Ht.mass,
                stiffness: c,
                damping: h
            }
        } else {
            const r = Gb({
                ...a,
                velocity: 0
            });
            l = {
                ...l,
                ...r,
                mass: Ht.mass
            }, l.isResolvedFromDuration = !0
        } return l
}

function ao(a = Ht.visualDuration, l = Ht.bounce) {
    const r = typeof a != "object" ? {
        visualDuration: a,
        keyframes: [0, 1],
        bounce: l
    } : a;
    let {
        restSpeed: o,
        restDelta: c
    } = r;
    const h = r.keyframes[0],
        d = r.keyframes[r.keyframes.length - 1],
        p = {
            done: !1,
            value: h
        },
        {
            stiffness: v,
            damping: m,
            mass: x,
            duration: b,
            velocity: S,
            isResolvedFromDuration: j
        } = Zb({
            ...r,
            velocity: -Be(r.velocity || 0)
        }),
        M = S || 0,
        z = m / (2 * Math.sqrt(v * x)),
        B = d - h,
        k = Be(Math.sqrt(v / x)),
        G = Math.abs(B) < 5;
    o || (o = G ? Ht.restSpeed.granular : Ht.restSpeed.default), c || (c = G ? Ht.restDelta.granular : Ht.restDelta.default);
    let H, q, $, at, Z, J;
    if (z < 1) $ = ac(k, z), at = (M + z * k * B) / $, H = Y => {
        const I = Math.exp(-z * k * Y);
        return d - I * (at * Math.sin($ * Y) + B * Math.cos($ * Y))
    }, Z = z * k * at + B * $, J = z * k * B - at * $, q = Y => Math.exp(-z * k * Y) * (Z * Math.sin($ * Y) + J * Math.cos($ * Y));
    else if (z === 1) {
        H = I => d - Math.exp(-k * I) * (B + (M + k * B) * I);
        const Y = M + k * B;
        q = I => Math.exp(-k * I) * (k * Y * I - M)
    } else {
        const Y = k * Math.sqrt(z * z - 1);
        H = ut => {
            const Mt = Math.exp(-z * k * ut),
                O = Math.min(Y * ut, 300);
            return d - Mt * ((M + z * k * B) * Math.sinh(O) + Y * B * Math.cosh(O)) / Y
        };
        const I = (M + z * k * B) / Y,
            tt = z * k * I - B * Y,
            st = z * k * B - I * Y;
        q = ut => {
            const Mt = Math.exp(-z * k * ut),
                O = Math.min(Y * ut, 300);
            return Mt * (tt * Math.sinh(O) + st * Math.cosh(O))
        }
    }
    const rt = {
        calculatedDuration: j && b || null,
        velocity: Y => De(q(Y)),
        next: Y => {
            if (!j && z < 1) {
                const tt = Math.exp(-z * k * Y),
                    st = Math.sin($ * Y),
                    ut = Math.cos($ * Y),
                    Mt = d - tt * (at * st + B * ut),
                    O = De(tt * (Z * st + J * ut));
                return p.done = Math.abs(O) <= o && Math.abs(d - Mt) <= c, p.value = p.done ? d : Mt, p
            }
            const I = H(Y);
            if (j) p.done = Y >= b;
            else {
                const tt = De(q(Y));
                p.done = Math.abs(tt) <= o && Math.abs(d - I) <= c
            }
            return p.value = p.done ? d : I, p
        },
        toString: () => {
            const Y = Math.min(Bc(rt), no),
                I = uy(tt => rt.next(Y * tt).value, Y, 30);
            return Y + "ms " + I
        },
        toTransition: () => {}
    };
    return rt
}
ao.applyToOptions = a => {
    const l = Hb(a, 100, ao);
    return a.ease = l.ease, a.duration = De(l.duration), a.type = "keyframes", a
};
const Qb = 5;

function cy(a, l, r) {
    const o = Math.max(l - Qb, 0);
    return Gp(r - a(o), l - o)
}

function ic({
    keyframes: a,
    velocity: l = 0,
    power: r = .8,
    timeConstant: o = 325,
    bounceDamping: c = 10,
    bounceStiffness: h = 500,
    modifyTarget: d,
    min: p,
    max: v,
    restDelta: m = .5,
    restSpeed: x
}) {
    const b = a[0],
        S = {
            done: !1,
            value: b
        },
        j = J => p !== void 0 && J < p || v !== void 0 && J > v,
        M = J => p === void 0 ? v : v === void 0 || Math.abs(p - J) < Math.abs(v - J) ? p : v;
    let z = r * l;
    const B = b + z,
        k = d === void 0 ? B : d(B);
    k !== B && (z = k - b);
    const G = J => -z * Math.exp(-J / o),
        H = J => k + G(J),
        q = J => {
            const rt = G(J),
                Y = H(J);
            S.done = Math.abs(rt) <= m, S.value = S.done ? k : Y
        };
    let $, at;
    const Z = J => {
        j(S.value) && ($ = J, at = ao({
            keyframes: [S.value, M(S.value)],
            velocity: cy(H, J, S.value),
            damping: c,
            stiffness: h,
            restDelta: m,
            restSpeed: x
        }))
    };
    return Z(0), {
        calculatedDuration: null,
        next: J => {
            let rt = !1;
            return !at && $ === void 0 && (rt = !0, q(J), Z(J)), $ !== void 0 && J >= $ ? at.next(J - $) : (!rt && q(J), S)
        }
    }
}

function Jb(a, l, r) {
    const o = [],
        c = r || Jn.mix || ry,
        h = a.length - 1;
    for (let d = 0; d < h; d++) {
        let p = c(a[d], a[d + 1]);
        if (l) {
            const v = Array.isArray(l) ? l[d] || He : l;
            p = Sl(v, p)
        }
        o.push(p)
    }
    return o
}

function Fb(a, l, {
    clamp: r = !0,
    ease: o,
    mixer: c
} = {}) {
    const h = a.length;
    if (Rc(h === l.length), h === 1) return () => l[0];
    if (h === 2 && l[0] === l[1]) return () => l[1];
    const d = a[0] === a[1];
    a[0] > a[h - 1] && (a = [...a].reverse(), l = [...l].reverse());
    const p = Jb(l, o, c),
        v = p.length,
        m = x => {
            if (d && x < a[0]) return l[0];
            let b = 0;
            if (v > 1)
                for (; b < a.length - 2 && !(x < a[b + 1]); b++);
            const S = gl(a[b], a[b + 1], x);
            return p[b](S)
        };
    return r ? x => m(tn(a[0], a[h - 1], x)) : m
}

function Pb(a, l) {
    const r = a[a.length - 1];
    for (let o = 1; o <= l; o++) {
        const c = gl(0, l, o);
        a.push(Ot(r, 1, c))
    }
}

function Wb(a) {
    const l = [0];
    return Pb(l, a.length - 1), l
}

function $b(a, l) {
    return a.map(r => r * l)
}

function Ib(a, l) {
    return a.map(() => l || $p).splice(0, a.length - 1)
}

function ml({
    duration: a = 300,
    keyframes: l,
    times: r,
    ease: o = "easeInOut"
}) {
    const c = ob(o) ? o.map(g0) : g0(o),
        h = {
            done: !1,
            value: l[0]
        },
        d = $b(r && r.length === l.length ? r : Wb(l), a),
        p = Fb(d, l, {
            ease: Array.isArray(c) ? c : Ib(l, c)
        });
    return {
        calculatedDuration: a,
        next: v => (h.value = p(v), h.done = v >= a, h)
    }
}
const t2 = a => a !== null;

function co(a, {
    repeat: l,
    repeatType: r = "loop"
}, o, c = 1) {
    const h = a.filter(t2),
        p = c < 0 || l && r !== "loop" && l % 2 === 1 ? 0 : h.length - 1;
    return !p || o === void 0 ? h[p] : o
}
const e2 = {
    decay: ic,
    inertia: ic,
    tween: ml,
    keyframes: ml,
    spring: ao
};

function fy(a) {
    typeof a.type == "string" && (a.type = e2[a.type])
}
class Hc {
    constructor() {
        this.updateFinished()
    }
    get finished() {
        return this._finished
    }
    updateFinished() {
        this._finished = new Promise(l => {
            this.resolve = l
        })
    }
    notifyFinished() {
        this.resolve()
    }
    then(l, r) {
        return this.finished.then(l, r)
    }
}
const n2 = a => a / 100;
class io extends Hc {
    constructor(l) {
        super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
            done: !1,
            value: void 0
        }, this.stop = () => {
            var o, c;
            const {
                motionValue: r
            } = this.options;
            r && r.updatedAt !== ue.now() && this.tick(ue.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), (c = (o = this.options).onStop) == null || c.call(o))
        }, this.options = l, this.initAnimation(), this.play(), l.autoplay === !1 && this.pause()
    }
    initAnimation() {
        const {
            options: l
        } = this;
        fy(l);
        const {
            type: r = ml,
            repeat: o = 0,
            repeatDelay: c = 0,
            repeatType: h,
            velocity: d = 0
        } = l;
        let {
            keyframes: p
        } = l;
        const v = r || ml;
        v !== ml && typeof p[0] != "number" && (this.mixKeyframes = Sl(n2, ry(p[0], p[1])), p = [0, 100]);
        const m = v({
            ...l,
            keyframes: p
        });
        h === "mirror" && (this.mirroredGenerator = v({
            ...l,
            keyframes: [...p].reverse(),
            velocity: -d
        })), m.calculatedDuration === null && (m.calculatedDuration = Bc(m));
        const {
            calculatedDuration: x
        } = m;
        this.calculatedDuration = x, this.resolvedDuration = x + c, this.totalDuration = this.resolvedDuration * (o + 1) - c, this.generator = m
    }
    updateTime(l) {
        const r = Math.round(l - this.startTime) * this.playbackSpeed;
        this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = r
    }
    tick(l, r = !1) {
        const {
            generator: o,
            totalDuration: c,
            mixKeyframes: h,
            mirroredGenerator: d,
            resolvedDuration: p,
            calculatedDuration: v
        } = this;
        if (this.startTime === null) return o.next(0);
        const {
            delay: m = 0,
            keyframes: x,
            repeat: b,
            repeatType: S,
            repeatDelay: j,
            type: M,
            onUpdate: z,
            finalKeyframe: B
        } = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, l) : this.speed < 0 && (this.startTime = Math.min(l - c / this.speed, this.startTime)), r ? this.currentTime = l : this.updateTime(l);
        const k = this.currentTime - m * (this.playbackSpeed >= 0 ? 1 : -1),
            G = this.playbackSpeed >= 0 ? k < 0 : k > c;
        this.currentTime = Math.max(k, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
        let H = this.currentTime,
            q = o;
        if (b) {
            const J = Math.min(this.currentTime, c) / p;
            let rt = Math.floor(J),
                Y = J % 1;
            !Y && J >= 1 && (Y = 1), Y === 1 && rt--, rt = Math.min(rt, b + 1), !!(rt % 2) && (S === "reverse" ? (Y = 1 - Y, j && (Y -= j / p)) : S === "mirror" && (q = d)), H = tn(0, 1, Y) * p
        }
        let $;
        G ? (this.delayState.value = x[0], $ = this.delayState) : $ = q.next(H), h && !G && ($.value = h($.value));
        let {
            done: at
        } = $;
        !G && v !== null && (at = this.playbackSpeed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
        const Z = this.holdTime === null && (this.state === "finished" || this.state === "running" && at);
        return Z && M !== ic && ($.value = co(x, this.options, B, this.speed)), z && z($.value), Z && this.finish(), $
    }
    then(l, r) {
        return this.finished.then(l, r)
    }
    get duration() {
        return Be(this.calculatedDuration)
    }
    get iterationDuration() {
        const {
            delay: l = 0
        } = this.options || {};
        return this.duration + Be(l)
    }
    get time() {
        return Be(this.currentTime)
    }
    set time(l) {
        l = De(l), this.currentTime = l, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = l : this.driver && (this.startTime = this.driver.now() - l / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = l, this.tick(l))
    }
    getGeneratorVelocity() {
        const l = this.currentTime;
        if (l <= 0) return this.options.velocity || 0;
        if (this.generator.velocity) return this.generator.velocity(l);
        const r = this.generator.next(l).value;
        return cy(o => this.generator.next(o).value, l, r)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(l) {
        const r = this.playbackSpeed !== l;
        r && this.driver && this.updateTime(ue.now()), this.playbackSpeed = l, r && this.driver && (this.time = Be(this.currentTime))
    }
    play() {
        var c, h;
        if (this.isStopped) return;
        const {
            driver: l = Bb,
            startTime: r
        } = this.options;
        this.driver || (this.driver = l(d => this.tick(d))), (h = (c = this.options).onPlay) == null || h.call(c);
        const o = this.driver.now();
        this.state === "finished" ? (this.updateFinished(), this.startTime = o) : this.holdTime !== null ? this.startTime = o - this.holdTime : this.startTime || (this.startTime = r ?? o), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start()
    }
    pause() {
        this.state = "paused", this.updateTime(ue.now()), this.holdTime = this.currentTime
    }
    complete() {
        this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null
    }
    finish() {
        var l, r;
        this.notifyFinished(), this.teardown(), this.state = "finished", (r = (l = this.options).onComplete) == null || r.call(l)
    }
    cancel() {
        var l, r;
        this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), (r = (l = this.options).onCancel) == null || r.call(l)
    }
    teardown() {
        this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null
    }
    stopDriver() {
        this.driver && (this.driver.stop(), this.driver = void 0)
    }
    sample(l) {
        return this.startTime = 0, this.tick(l, !0)
    }
    attachTimeline(l) {
        var r;
        return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), (r = this.driver) == null || r.stop(), l.observe(this)
    }
}

function a2(a) {
    for (let l = 1; l < a.length; l++) a[l] ?? (a[l] = a[l - 1])
}
const xa = a => a * 180 / Math.PI,
    lc = a => {
        const l = xa(Math.atan2(a[1], a[0]));
        return sc(l)
    },
    i2 = {
        x: 4,
        y: 5,
        translateX: 4,
        translateY: 5,
        scaleX: 0,
        scaleY: 3,
        scale: a => (Math.abs(a[0]) + Math.abs(a[3])) / 2,
        rotate: lc,
        rotateZ: lc,
        skewX: a => xa(Math.atan(a[1])),
        skewY: a => xa(Math.atan(a[2])),
        skew: a => (Math.abs(a[1]) + Math.abs(a[2])) / 2
    },
    sc = a => (a = a % 360, a < 0 && (a += 360), a),
    E0 = lc,
    M0 = a => Math.sqrt(a[0] * a[0] + a[1] * a[1]),
    N0 = a => Math.sqrt(a[4] * a[4] + a[5] * a[5]),
    l2 = {
        x: 12,
        y: 13,
        z: 14,
        translateX: 12,
        translateY: 13,
        translateZ: 14,
        scaleX: M0,
        scaleY: N0,
        scale: a => (M0(a) + N0(a)) / 2,
        rotateX: a => sc(xa(Math.atan2(a[6], a[5]))),
        rotateY: a => sc(xa(Math.atan2(-a[2], a[0]))),
        rotateZ: E0,
        rotate: E0,
        skewX: a => xa(Math.atan(a[4])),
        skewY: a => xa(Math.atan(a[1])),
        skew: a => (Math.abs(a[1]) + Math.abs(a[4])) / 2
    };

function oc(a) {
    return a.includes("scale") ? 1 : 0
}

function rc(a, l) {
    if (!a || a === "none") return oc(l);
    const r = a.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let o, c;
    if (r) o = l2, c = r;
    else {
        const p = a.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        o = i2, c = p
    }
    if (!c) return oc(l);
    const h = o[l],
        d = c[1].split(",").map(o2);
    return typeof h == "function" ? h(d) : d[h]
}
const s2 = (a, l) => {
    const {
        transform: r = "none"
    } = getComputedStyle(a);
    return rc(r, l)
};

function o2(a) {
    return parseFloat(a.trim())
}
const mi = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
    pi = new Set([...mi, "pathRotation"]),
    w0 = a => a === hi || a === W,
    r2 = new Set(["x", "y", "z"]),
    u2 = mi.filter(a => !r2.has(a));

function c2(a) {
    const l = [];
    return u2.forEach(r => {
        const o = a.getValue(r);
        o !== void 0 && (l.push([r, o.get()]), o.set(r.startsWith("scale") ? 1 : 0))
    }), l
}
const Qn = {
    width: ({
        x: a
    }, {
        paddingLeft: l = "0",
        paddingRight: r = "0",
        boxSizing: o
    }) => {
        const c = a.max - a.min;
        return o === "border-box" ? c : c - parseFloat(l) - parseFloat(r)
    },
    height: ({
        y: a
    }, {
        paddingTop: l = "0",
        paddingBottom: r = "0",
        boxSizing: o
    }) => {
        const c = a.max - a.min;
        return o === "border-box" ? c : c - parseFloat(l) - parseFloat(r)
    },
    top: (a, {
        top: l
    }) => parseFloat(l),
    left: (a, {
        left: l
    }) => parseFloat(l),
    bottom: ({
        y: a
    }, {
        top: l
    }) => parseFloat(l) + (a.max - a.min),
    right: ({
        x: a
    }, {
        left: l
    }) => parseFloat(l) + (a.max - a.min),
    x: (a, {
        transform: l
    }) => rc(l, "x"),
    y: (a, {
        transform: l
    }) => rc(l, "y")
};
Qn.translateX = Qn.x;
Qn.translateY = Qn.y;
const ba = new Set;
let uc = !1,
    cc = !1,
    fc = !1;

function dy() {
    if (cc) {
        const a = Array.from(ba).filter(o => o.needsMeasurement),
            l = new Set(a.map(o => o.element)),
            r = new Map;
        l.forEach(o => {
            const c = c2(o);
            c.length && (r.set(o, c), o.render())
        }), a.forEach(o => o.measureInitialState()), l.forEach(o => {
            o.render();
            const c = r.get(o);
            c && c.forEach(([h, d]) => {
                var p;
                (p = o.getValue(h)) == null || p.set(d)
            })
        }), a.forEach(o => o.measureEndState()), a.forEach(o => {
            o.suspendedScrollY !== void 0 && window.scrollTo(0, o.suspendedScrollY)
        })
    }
    cc = !1, uc = !1, ba.forEach(a => a.complete(fc)), ba.clear()
}

function hy() {
    ba.forEach(a => {
        a.readKeyframes(), a.needsMeasurement && (cc = !0)
    })
}

function f2() {
    fc = !0, hy(), dy(), fc = !1
}
class Yc {
    constructor(l, r, o, c, h, d = !1) {
        this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...l], this.onComplete = r, this.name = o, this.motionValue = c, this.element = h, this.isAsync = d
    }
    scheduleResolve() {
        this.state = "scheduled", this.isAsync ? (ba.add(this), uc || (uc = !0, zt.read(hy), zt.resolveKeyframes(dy))) : (this.readKeyframes(), this.complete())
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: l,
            name: r,
            element: o,
            motionValue: c
        } = this;
        if (l[0] === null) {
            const h = c == null ? void 0 : c.get(),
                d = l[l.length - 1];
            if (h !== void 0) l[0] = h;
            else if (o && r) {
                const p = o.readValue(r, d);
                p != null && (l[0] = p)
            }
            l[0] === void 0 && (l[0] = d), c && h === void 0 && c.set(l[0])
        }
        a2(l)
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete(l = !1) {
        this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, l), ba.delete(this)
    }
    cancel() {
        this.state === "scheduled" && (ba.delete(this), this.state = "pending")
    }
    resume() {
        this.state === "pending" && this.scheduleResolve()
    }
}
const d2 = a => a.startsWith("--");

function my(a, l, r) {
    d2(l) ? a.style.setProperty(l, r) : a.style[l] = r
}
const h2 = {};

function py(a, l) {
    const r = qp(a);
    return () => h2[l] ?? r()
}
const m2 = py(() => window.ScrollTimeline !== void 0, "scrollTimeline"),
    yy = py(() => {
        try {
            document.createElement("div").animate({
                opacity: 0
            }, {
                easing: "linear(0, 1)"
            })
        } catch {
            return !1
        }
        return !0
    }, "linearEasing"),
    dl = ([a, l, r, o]) => `cubic-bezier(${a}, ${l}, ${r}, ${o})`,
    D0 = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: dl([0, .65, .55, 1]),
        circOut: dl([.55, 0, 1, .45]),
        backIn: dl([.31, .01, .66, -.59]),
        backOut: dl([.33, 1.53, .69, .99])
    };

function gy(a, l) {
    if (a) return typeof a == "function" ? yy() ? uy(a, l) : "ease-out" : Ip(a) ? dl(a) : Array.isArray(a) ? a.map(r => gy(r, l) || D0.easeOut) : D0[a]
}

function p2(a, l, r, {
    delay: o = 0,
    duration: c = 300,
    repeat: h = 0,
    repeatType: d = "loop",
    ease: p = "easeOut",
    times: v
} = {}, m = void 0) {
    const x = {
        [l]: r
    };
    v && (x.offset = v);
    const b = gy(p, c);
    Array.isArray(b) && (x.easing = b);
    const S = {
        delay: o,
        duration: c,
        easing: Array.isArray(b) ? "linear" : b,
        fill: "both",
        iterations: h + 1,
        direction: d === "reverse" ? "alternate" : "normal"
    };
    return m && (S.pseudoElement = m), a.animate(x, S)
}

function vy(a) {
    return typeof a == "function" && "applyToOptions" in a
}

function y2({
    type: a,
    ...l
}) {
    return vy(a) && yy() ? a.applyToOptions(l) : (l.duration ?? (l.duration = 300), l.ease ?? (l.ease = "easeOut"), l)
}
class xy extends Hc {
    constructor(l) {
        if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !l) return;
        const {
            element: r,
            name: o,
            keyframes: c,
            pseudoElement: h,
            allowFlatten: d = !1,
            finalKeyframe: p,
            onComplete: v
        } = l;
        this.isPseudoElement = !!h, this.allowFlatten = d, this.options = l, Rc(typeof l.type != "string");
        const m = y2(l);
        this.animation = p2(r, o, c, m, h), m.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
            if (this.finishedTime = this.time, !h) {
                const x = co(c, this.options, p, this.speed);
                this.updateMotionValue && this.updateMotionValue(x), my(r, o, x), this.animation.cancel()
            }
            v == null || v(), this.notifyFinished()
        }
    }
    play() {
        this.isStopped || (this.manualStartTime = null, this.animation.play(), this.state === "finished" && this.updateFinished())
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        var l, r;
        (r = (l = this.animation).finish) == null || r.call(l)
    }
    cancel() {
        try {
            this.animation.cancel()
        } catch {}
    }
    stop() {
        if (this.isStopped) return;
        this.isStopped = !0;
        const {
            state: l
        } = this;
        l === "idle" || l === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel())
    }
    commitStyles() {
        var r, o, c;
        const l = (r = this.options) == null ? void 0 : r.element;
        !this.isPseudoElement && (l != null && l.isConnected) && ((c = (o = this.animation).commitStyles) == null || c.call(o))
    }
    get duration() {
        var r, o;
        const l = ((o = (r = this.animation.effect) == null ? void 0 : r.getComputedTiming) == null ? void 0 : o.call(r).duration) || 0;
        return Be(Number(l))
    }
    get iterationDuration() {
        const {
            delay: l = 0
        } = this.options || {};
        return this.duration + Be(l)
    }
    get time() {
        return Be(Number(this.animation.currentTime) || 0)
    }
    set time(l) {
        const r = this.finishedTime !== null;
        this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = De(l), r && this.animation.pause()
    }
    get speed() {
        return this.animation.playbackRate
    }
    set speed(l) {
        l < 0 && (this.finishedTime = null), this.animation.playbackRate = l
    }
    get state() {
        return this.finishedTime !== null ? "finished" : this.animation.playState
    }
    get startTime() {
        return this.manualStartTime ?? Number(this.animation.startTime)
    }
    set startTime(l) {
        this.manualStartTime = this.animation.startTime = l
    }
    attachTimeline({
        timeline: l,
        rangeStart: r,
        rangeEnd: o,
        observe: c
    }) {
        var h;
        return this.allowFlatten && ((h = this.animation.effect) == null || h.updateTiming({
            easing: "linear"
        })), this.animation.onfinish = null, l && m2() ? (this.animation.timeline = l, r && (this.animation.rangeStart = r), o && (this.animation.rangeEnd = o), He) : c(this)
    }
}
const by = {
    anticipate: Fp,
    backInOut: Jp,
    circInOut: Wp
};

function g2(a) {
    return a in by
}

function v2(a) {
    typeof a.ease == "string" && g2(a.ease) && (a.ease = by[a.ease])
}
const Xu = 10;
class x2 extends xy {
    constructor(l) {
        v2(l), fy(l), super(l), l.startTime !== void 0 && l.autoplay !== !1 && (this.startTime = l.startTime), this.options = l
    }
    updateMotionValue(l) {
        const {
            motionValue: r,
            onUpdate: o,
            onComplete: c,
            element: h,
            ...d
        } = this.options;
        if (!r) return;
        if (l !== void 0) {
            r.set(l);
            return
        }
        const p = new io({
                ...d,
                autoplay: !1
            }),
            v = Math.max(Xu, ue.now() - this.startTime),
            m = tn(0, Xu, v - Xu),
            x = p.sample(v).value,
            {
                name: b
            } = this.options;
        h && b && my(h, b, x), r.setWithVelocity(p.sample(Math.max(0, v - m)).value, x, m), p.stop()
    }
}
const j0 = (a, l) => l === "zIndex" ? !1 : !!(typeof a == "number" || Array.isArray(a) || typeof a == "string" && (Ze.test(a) || a === "0") && !a.startsWith("url("));

function b2(a) {
    const l = a[0];
    if (a.length === 1) return !0;
    for (let r = 0; r < a.length; r++)
        if (a[r] !== l) return !0
}

function S2(a, l, r, o) {
    const c = a[0];
    if (c === null) return !1;
    if (l === "display" || l === "visibility") return !0;
    const h = a[a.length - 1],
        d = j0(c, l),
        p = j0(h, l);
    return !d || !p ? !1 : b2(a) || (r === "spring" || vy(r)) && o
}

function dc(a) {
    a.duration = 0, a.type = "keyframes"
}
const Sy = new Set(["opacity", "clipPath", "filter", "transform"]),
    T2 = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;

function A2(a) {
    for (let l = 0; l < a.length; l++)
        if (typeof a[l] == "string" && T2.test(a[l])) return !0;
    return !1
}
const E2 = new Set(["color", "backgroundColor", "outlineColor", "fill", "stroke", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor"]),
    M2 = qp(() => Object.hasOwnProperty.call(Element.prototype, "animate"));

function N2(a) {
    var b;
    const {
        motionValue: l,
        name: r,
        repeatDelay: o,
        repeatType: c,
        damping: h,
        type: d,
        keyframes: p
    } = a;
    if (!(((b = l == null ? void 0 : l.owner) == null ? void 0 : b.current) instanceof HTMLElement)) return !1;
    const {
        onUpdate: m,
        transformTemplate: x
    } = l.owner.getProps();
    return M2() && r && (Sy.has(r) || E2.has(r) && A2(p)) && (r !== "transform" || !x) && !m && !o && c !== "mirror" && h !== 0 && d !== "inertia"
}
const w2 = 40;
class D2 extends Hc {
    constructor({
        autoplay: l = !0,
        delay: r = 0,
        type: o = "keyframes",
        repeat: c = 0,
        repeatDelay: h = 0,
        repeatType: d = "loop",
        keyframes: p,
        name: v,
        motionValue: m,
        element: x,
        ...b
    }) {
        var M;
        super(), this.stop = () => {
            var z, B;
            this._animation && (this._animation.stop(), (z = this.stopTimeline) == null || z.call(this)), (B = this.keyframeResolver) == null || B.cancel()
        }, this.createdAt = ue.now();
        const S = {
                autoplay: l,
                delay: r,
                type: o,
                repeat: c,
                repeatDelay: h,
                repeatType: d,
                name: v,
                motionValue: m,
                element: x,
                ...b
            },
            j = (x == null ? void 0 : x.KeyframeResolver) || Yc;
        this.keyframeResolver = new j(p, (z, B, k) => this.onKeyframesResolved(z, B, S, !k), v, m, x), (M = this.keyframeResolver) == null || M.scheduleResolve()
    }
    onKeyframesResolved(l, r, o, c) {
        var k, G;
        this.keyframeResolver = void 0;
        const {
            name: h,
            type: d,
            velocity: p,
            delay: v,
            isHandoff: m,
            onUpdate: x
        } = o;
        this.resolvedAt = ue.now();
        let b = !0;
        S2(l, h, d, p) || (b = !1, (Jn.instantAnimations || !v) && (x == null || x(co(l, o, r))), l[0] = l[l.length - 1], dc(o), o.repeat = 0);
        const j = {
                startTime: c ? this.resolvedAt ? this.resolvedAt - this.createdAt > w2 ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
                finalKeyframe: r,
                ...o,
                keyframes: l
            },
            M = b && !m && N2(j),
            z = (G = (k = j.motionValue) == null ? void 0 : k.owner) == null ? void 0 : G.current;
        let B;
        if (M) try {
            B = new x2({
                ...j,
                element: z
            })
        } catch {
            B = new io(j)
        } else B = new io(j);
        B.finished.then(() => {
            this.notifyFinished()
        }).catch(He), this.pendingTimeline && (this.stopTimeline = B.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = B
    }
    get finished() {
        return this._animation ? this.animation.finished : this._finished
    }
    then(l, r) {
        return this.finished.finally(l).then(() => {})
    }
    get animation() {
        var l;
        return this._animation || ((l = this.keyframeResolver) == null || l.resume(), f2()), this._animation
    }
    get duration() {
        return this.animation.duration
    }
    get iterationDuration() {
        return this.animation.iterationDuration
    }
    get time() {
        return this.animation.time
    }
    set time(l) {
        this.animation.time = l
    }
    get speed() {
        return this.animation.speed
    }
    get state() {
        return this.animation.state
    }
    set speed(l) {
        this.animation.speed = l
    }
    get startTime() {
        return this.animation.startTime
    }
    attachTimeline(l) {
        return this._animation ? this.stopTimeline = this.animation.attachTimeline(l) : this.pendingTimeline = l, () => this.stop()
    }
    play() {
        this.animation.play()
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        this.animation.complete()
    }
    cancel() {
        var l;
        this._animation && this.animation.cancel(), (l = this.keyframeResolver) == null || l.cancel()
    }
}

function Ty(a, l, r, o = 0, c = 1) {
    const h = Array.from(a).sort((m, x) => m.sortNodePosition(x)).indexOf(l),
        d = a.size,
        p = (d - 1) * o;
    return typeof r == "function" ? r(h, d) : c === 1 ? h * o : p - h * o
}
const C0 = 30,
    j2 = a => !isNaN(parseFloat(a));
class C2 {
    constructor(l, r = {}) {
        this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = o => {
            var h;
            const c = ue.now();
            if (this.updatedAt !== c && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(o), this.current !== this.prev && ((h = this.events.change) == null || h.notify(this.current), this.dependents))
                for (const d of this.dependents) d.dirty()
        }, this.hasAnimated = !1, this.setCurrent(l), this.owner = r.owner
    }
    setCurrent(l) {
        this.current = l, this.updatedAt = ue.now(), this.canTrackVelocity === null && l !== void 0 && (this.canTrackVelocity = j2(this.current))
    }
    setPrevFrameValue(l = this.current) {
        this.prevFrameValue = l, this.prevUpdatedAt = this.updatedAt
    }
    onChange(l) {
        return this.on("change", l)
    }
    on(l, r) {
        this.events[l] || (this.events[l] = new Oc);
        const o = this.events[l].add(r);
        return l === "change" ? () => {
            o(), zt.read(() => {
                this.events.change.getSize() || this.stop()
            })
        } : o
    }
    clearListeners() {
        for (const l in this.events) this.events[l].clear()
    }
    attach(l, r) {
        this.passiveEffect = l, this.stopPassiveEffect = r
    }
    set(l) {
        this.passiveEffect ? this.passiveEffect(l, this.updateAndNotify) : this.updateAndNotify(l)
    }
    setWithVelocity(l, r, o) {
        this.set(r), this.prev = void 0, this.prevFrameValue = l, this.prevUpdatedAt = this.updatedAt - o
    }
    jump(l, r = !0) {
        this.updateAndNotify(l), this.prev = l, this.prevUpdatedAt = this.prevFrameValue = void 0, r && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
    dirty() {
        var l;
        (l = this.events.change) == null || l.notify(this.current)
    }
    addDependent(l) {
        this.dependents || (this.dependents = new Set), this.dependents.add(l)
    }
    removeDependent(l) {
        this.dependents && this.dependents.delete(l)
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const l = ue.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || l - this.updatedAt > C0) return 0;
        const r = Math.min(this.updatedAt - this.prevUpdatedAt, C0);
        return Gp(parseFloat(this.current) - parseFloat(this.prevFrameValue), r)
    }
    start(l) {
        return this.stop(), new Promise(r => {
            this.hasAnimated = !0, this.animation = l(r), this.events.animationStart && this.events.animationStart.notify()
        }).then(() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
        })
    }
    stop() {
        this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        var l, r;
        (l = this.dependents) == null || l.clear(), (r = this.events.destroy) == null || r.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
}

function di(a, l) {
    return new C2(a, l)
}

function Ay(a, l) {
    if (a != null && a.inherit && l) {
        const {
            inherit: r,
            ...o
        } = a;
        return {
            ...l,
            ...o
        }
    }
    return a
}

function qc(a, l) {
    const r = (a == null ? void 0 : a[l]) ?? (a == null ? void 0 : a.default) ?? a;
    return r !== a ? Ay(r, a) : r
}
const R2 = {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restSpeed: 10
    },
    O2 = a => ({
        type: "spring",
        stiffness: 550,
        damping: a === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    }),
    z2 = {
        type: "keyframes",
        duration: .8
    },
    _2 = {
        type: "keyframes",
        ease: [.25, .1, .35, 1],
        duration: .3
    },
    V2 = (a, {
        keyframes: l
    }) => l.length > 2 ? z2 : pi.has(a) ? a.startsWith("scale") ? O2(l[1]) : R2 : _2,
    k2 = new Set(["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from", "elapsed"]);

function L2(a) {
    for (const l in a)
        if (!k2.has(l)) return !0;
    return !1
}
const Gc = (a, l, r, o = {}, c, h) => d => {
        const p = qc(o, a) || {},
            v = p.delay || o.delay || 0;
        let {
            elapsed: m = 0
        } = o;
        m = m - De(v);
        const x = {
            keyframes: Array.isArray(r) ? r : [null, r],
            ease: "easeOut",
            velocity: l.getVelocity(),
            ...p,
            delay: -m,
            onUpdate: S => {
                l.set(S), p.onUpdate && p.onUpdate(S)
            },
            onComplete: () => {
                d(), p.onComplete && p.onComplete()
            },
            name: a,
            motionValue: l,
            element: h ? void 0 : c
        };
        L2(p) || Object.assign(x, V2(a, x)), x.duration && (x.duration = De(x.duration)), x.repeatDelay && (x.repeatDelay = De(x.repeatDelay)), x.from !== void 0 && (x.keyframes[0] = x.from);
        let b = !1;
        if ((x.type === !1 || x.duration === 0 && !x.repeatDelay) && (dc(x), x.delay === 0 && (b = !0)), (Jn.instantAnimations || Jn.skipAnimations || c != null && c.shouldSkipAnimations || p.skipAnimations) && (b = !0, dc(x), x.delay = 0), x.allowFlatten = !p.type && !p.ease, b && !h && l.get() !== void 0) {
            const S = co(x.keyframes, p);
            if (S !== void 0) {
                zt.update(() => {
                    x.onUpdate(S), x.onComplete()
                });
                return
            }
        }
        return p.isSync ? new io(x) : new D2(x)
    },
    U2 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

function B2(a) {
    const l = U2.exec(a);
    if (!l) return [, ];
    const [, r, o, c] = l;
    return [`--${r??o}`, c]
}

function Ey(a, l, r = 1) {
    const [o, c] = B2(a);
    if (!o) return;
    const h = window.getComputedStyle(l).getPropertyValue(o);
    if (h) {
        const d = h.trim();
        return Bp(d) ? parseFloat(d) : d
    }
    return Vc(c) ? Ey(c, l, r + 1) : c
}

function R0(a) {
    const l = [{}, {}];
    return a == null || a.values.forEach((r, o) => {
        l[0][o] = r.get(), l[1][o] = r.getVelocity()
    }), l
}

function Xc(a, l, r, o) {
    if (typeof l == "function") {
        const [c, h] = R0(o);
        l = l(r !== void 0 ? r : a.custom, c, h)
    }
    if (typeof l == "string" && (l = a.variants && a.variants[l]), typeof l == "function") {
        const [c, h] = R0(o);
        l = l(r !== void 0 ? r : a.custom, c, h)
    }
    return l
}

function Sa(a, l, r) {
    const o = a.getProps();
    return Xc(o, l, r !== void 0 ? r : o.custom, a)
}
const My = new Set(["width", "height", "top", "left", "right", "bottom", ...mi]),
    hc = a => Array.isArray(a);

function H2(a, l, r) {
    a.hasValue(l) ? a.getValue(l).set(r) : a.addValue(l, di(r))
}

function Y2(a) {
    return hc(a) ? a[a.length - 1] || 0 : a
}

function q2(a, l) {
    const r = Sa(a, l);
    let {
        transitionEnd: o = {},
        transition: c = {},
        ...h
    } = r || {};
    h = {
        ...h,
        ...o
    };
    for (const d in h) {
        const p = Y2(h[d]);
        H2(a, d, p)
    }
}
const le = a => !!(a && a.getVelocity);

function G2(a) {
    return !!(le(a) && a.add)
}

function mc(a, l) {
    const r = a.getValue("willChange");
    if (G2(r)) return r.add(l);
    if (!r && Jn.WillChange) {
        const o = new Jn.WillChange("auto");
        a.addValue("willChange", o), o.add(l)
    }
}

function Kc(a) {
    return a.replace(/([A-Z])/g, l => `-${l.toLowerCase()}`)
}
const X2 = "framerAppearId",
    Ny = "data-" + Kc(X2);

function wy(a) {
    return a.props[Ny]
}

function K2({
    protectedKeys: a,
    needsAnimating: l
}, r) {
    const o = a.hasOwnProperty(r) && l[r] !== !0;
    return l[r] = !1, o
}

function Dy(a, l, {
    delay: r = 0,
    transitionOverride: o,
    type: c
} = {}) {
    let {
        transition: h,
        transitionEnd: d,
        ...p
    } = l;
    const v = a.getDefaultTransition();
    h = h ? Ay(h, v) : v;
    const m = h == null ? void 0 : h.reduceMotion,
        x = h == null ? void 0 : h.skipAnimations;
    o && (h = o);
    const b = [],
        S = c && a.animationState && a.animationState.getState()[c],
        j = h == null ? void 0 : h.path;
    j && j.animateVisualElement(a, p, h, r, b);
    for (const M in p) {
        const z = a.getValue(M, a.latestValues[M] ?? null),
            B = p[M];
        if (B === void 0 || S && K2(S, M)) continue;
        const k = {
            delay: r,
            ...qc(h || {}, M)
        };
        x && (k.skipAnimations = !0);
        const G = z.get();
        if (G !== void 0 && !z.isAnimating() && !Array.isArray(B) && B === G && !k.velocity) {
            zt.update(() => z.set(B));
            continue
        }
        let H = !1;
        if (window.MotionHandoffAnimation) {
            const at = wy(a);
            if (at) {
                const Z = window.MotionHandoffAnimation(at, M, zt);
                Z !== null && (k.startTime = Z, H = !0)
            }
        }
        mc(a, M);
        const q = m ?? a.shouldReduceMotion;
        z.start(Gc(M, z, B, q && My.has(M) ? {
            type: !1
        } : k, a, H));
        const $ = z.animation;
        $ && b.push($)
    }
    if (d) {
        const M = () => zt.update(() => {
            d && q2(a, d)
        });
        b.length ? Promise.all(b).then(M) : M()
    }
    return b
}

function pc(a, l, r = {}) {
    var v;
    const o = Sa(a, l, r.type === "exit" ? (v = a.presenceContext) == null ? void 0 : v.custom : void 0);
    let {
        transition: c = a.getDefaultTransition() || {}
    } = o || {};
    r.transitionOverride && (c = r.transitionOverride);
    const h = o ? () => Promise.all(Dy(a, o, r)) : () => Promise.resolve(),
        d = a.variantChildren && a.variantChildren.size ? (m = 0) => {
            const {
                delayChildren: x = 0,
                staggerChildren: b,
                staggerDirection: S
            } = c;
            return Z2(a, l, m, x, b, S, r)
        } : () => Promise.resolve(),
        {
            when: p
        } = c;
    if (p) {
        const [m, x] = p === "beforeChildren" ? [h, d] : [d, h];
        return m().then(() => x())
    } else return Promise.all([h(), d(r.delay)])
}

function Z2(a, l, r = 0, o = 0, c = 0, h = 1, d) {
    const p = [];
    for (const v of a.variantChildren) v.notify("AnimationStart", l), p.push(pc(v, l, {
        ...d,
        delay: r + (typeof o == "function" ? 0 : o) + Ty(a.variantChildren, v, o, c, h)
    }).then(() => v.notify("AnimationComplete", l)));
    return Promise.all(p)
}

function Q2(a, l, r = {}) {
    a.notify("AnimationStart", l);
    let o;
    if (Array.isArray(l)) {
        const c = l.map(h => pc(a, h, r));
        o = Promise.all(c)
    } else if (typeof l == "string") o = pc(a, l, r);
    else {
        const c = typeof l == "function" ? Sa(a, l, r.custom) : l;
        o = Promise.all(Dy(a, c, r))
    }
    return o.then(() => {
        a.notify("AnimationComplete", l)
    })
}
const J2 = {
        test: a => a === "auto",
        parse: a => a
    },
    jy = a => l => l.test(a),
    Cy = [hi, W, Ie, bn, bb, xb, J2],
    O0 = a => Cy.find(jy(a));

function F2(a) {
    return typeof a == "number" ? a === 0 : a !== null ? a === "none" || a === "0" || Yp(a) : !0
}
const P2 = new Set(["brightness", "contrast", "saturate", "opacity"]);

function W2(a) {
    const [l, r] = a.slice(0, -1).split("(");
    if (l === "drop-shadow") return a;
    const [o] = r.match(kc) || [];
    if (!o) return a;
    const c = r.replace(o, "");
    let h = P2.has(l) ? 1 : 0;
    return o !== r && (h *= 100), l + "(" + h + c + ")"
}
const $2 = /\b([a-z-]*)\(.*?\)/gu,
    yc = {
        ...Ze,
        getAnimatableNone: a => {
            const l = a.match($2);
            return l ? l.map(W2).join(" ") : a
        }
    },
    gc = {
        ...Ze,
        getAnimatableNone: a => {
            const l = Ze.parse(a);
            return Ze.createTransformer(a)(l.map(o => typeof o == "number" ? 0 : typeof o == "object" ? {
                ...o,
                alpha: 1
            } : o))
        }
    },
    z0 = {
        ...hi,
        transform: Math.round
    },
    I2 = {
        rotate: bn,
        pathRotation: bn,
        rotateX: bn,
        rotateY: bn,
        rotateZ: bn,
        scale: Xs,
        scaleX: Xs,
        scaleY: Xs,
        scaleZ: Xs,
        skew: bn,
        skewX: bn,
        skewY: bn,
        distance: W,
        translateX: W,
        translateY: W,
        translateZ: W,
        x: W,
        y: W,
        z: W,
        perspective: W,
        transformPerspective: W,
        opacity: vl,
        originX: x0,
        originY: x0,
        originZ: W
    },
    lo = {
        borderWidth: W,
        borderTopWidth: W,
        borderRightWidth: W,
        borderBottomWidth: W,
        borderLeftWidth: W,
        borderRadius: W,
        borderTopLeftRadius: W,
        borderTopRightRadius: W,
        borderBottomRightRadius: W,
        borderBottomLeftRadius: W,
        width: W,
        maxWidth: W,
        height: W,
        maxHeight: W,
        top: W,
        right: W,
        bottom: W,
        left: W,
        inset: W,
        insetBlock: W,
        insetBlockStart: W,
        insetBlockEnd: W,
        insetInline: W,
        insetInlineStart: W,
        insetInlineEnd: W,
        padding: W,
        paddingTop: W,
        paddingRight: W,
        paddingBottom: W,
        paddingLeft: W,
        paddingBlock: W,
        paddingBlockStart: W,
        paddingBlockEnd: W,
        paddingInline: W,
        paddingInlineStart: W,
        paddingInlineEnd: W,
        margin: W,
        marginTop: W,
        marginRight: W,
        marginBottom: W,
        marginLeft: W,
        marginBlock: W,
        marginBlockStart: W,
        marginBlockEnd: W,
        marginInline: W,
        marginInlineStart: W,
        marginInlineEnd: W,
        fontSize: W,
        backgroundPositionX: W,
        backgroundPositionY: W,
        ...I2,
        zIndex: z0,
        fillOpacity: vl,
        strokeOpacity: vl,
        numOctaves: z0
    },
    tS = {
        ...lo,
        color: Jt,
        backgroundColor: Jt,
        outlineColor: Jt,
        fill: Jt,
        stroke: Jt,
        borderColor: Jt,
        borderTopColor: Jt,
        borderRightColor: Jt,
        borderBottomColor: Jt,
        borderLeftColor: Jt,
        filter: yc,
        WebkitFilter: yc,
        mask: gc,
        WebkitMask: gc
    },
    Ry = a => tS[a],
    eS = new Set([yc, gc]);

function Oy(a, l) {
    let r = Ry(a);
    return eS.has(r) || (r = Ze), r.getAnimatableNone ? r.getAnimatableNone(l) : void 0
}
const nS = new Set(["auto", "none", "0"]);

function aS(a, l, r) {
    let o = 0,
        c;
    for (; o < a.length && !c;) {
        const h = a[o];
        typeof h == "string" && !nS.has(h) && fi(h).values.length && (c = a[o]), o++
    }
    if (c && r)
        for (const h of l) a[h] = Oy(r, c)
}
class iS extends Yc {
    constructor(l, r, o, c, h) {
        super(l, r, o, c, h, !0)
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: l,
            element: r,
            name: o
        } = this;
        if (!r || !r.current) return;
        super.readKeyframes();
        for (let x = 0; x < l.length; x++) {
            let b = l[x];
            if (typeof b == "string" && (b = b.trim(), Vc(b))) {
                const S = Ey(b, r.current);
                S !== void 0 && (l[x] = S), x === l.length - 1 && (this.finalKeyframe = b)
            }
        }
        if (this.resolveNoneKeyframes(), !My.has(o) || l.length !== 2) return;
        const [c, h] = l, d = O0(c), p = O0(h), v = v0(c), m = v0(h);
        if (v !== m && Qn[o]) {
            this.needsMeasurement = !0;
            return
        }
        if (d !== p)
            if (w0(d) && w0(p))
                for (let x = 0; x < l.length; x++) {
                    const b = l[x];
                    typeof b == "string" && (l[x] = parseFloat(b))
                } else Qn[o] && (this.needsMeasurement = !0)
    }
    resolveNoneKeyframes() {
        const {
            unresolvedKeyframes: l,
            name: r
        } = this, o = [];
        for (let c = 0; c < l.length; c++)(l[c] === null || F2(l[c])) && o.push(c);
        o.length && aS(l, o, r)
    }
    measureInitialState() {
        const {
            element: l,
            unresolvedKeyframes: r,
            name: o
        } = this;
        if (!l || !l.current) return;
        o === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Qn[o](l.measureViewportBox(), window.getComputedStyle(l.current)), r[0] = this.measuredOrigin;
        const c = r[r.length - 1];
        c !== void 0 && l.getValue(o, c).jump(c, !1)
    }
    measureEndState() {
        var p;
        const {
            element: l,
            name: r,
            unresolvedKeyframes: o
        } = this;
        if (!l || !l.current) return;
        const c = l.getValue(r);
        c && c.jump(this.measuredOrigin, !1);
        const h = o.length - 1,
            d = o[h];
        o[h] = Qn[r](l.measureViewportBox(), window.getComputedStyle(l.current)), d !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = d), (p = this.removedTransforms) != null && p.length && this.removedTransforms.forEach(([v, m]) => {
            l.getValue(v).set(m)
        }), this.resolveNoneKeyframes()
    }
}

function zy(a, l, r) {
    if (a == null) return [];
    if (a instanceof EventTarget) return [a];
    if (typeof a == "string") {
        let o = document;
        const c = (r == null ? void 0 : r[a]) ?? o.querySelectorAll(a);
        return c ? Array.from(c) : []
    }
    return Array.from(a).filter(o => o != null)
}
const vc = (a, l) => l && typeof a == "number" ? l.transform(a) : a;

function lS(a) {
    return Hp(a) && "offsetHeight" in a && !("ownerSVGElement" in a)
}
const {
    schedule: Zc
} = ty(queueMicrotask, !1), Ke = {
    x: !1,
    y: !1
};

function _y() {
    return Ke.x || Ke.y
}

function sS(a) {
    return a === "x" || a === "y" ? Ke[a] ? null : (Ke[a] = !0, () => {
        Ke[a] = !1
    }) : Ke.x || Ke.y ? null : (Ke.x = Ke.y = !0, () => {
        Ke.x = Ke.y = !1
    })
}

function Vy(a, l) {
    const r = zy(a),
        o = new AbortController,
        c = {
            passive: !0,
            ...l,
            signal: o.signal
        };
    return [r, c, () => o.abort()]
}

function oS(a) {
    return !(a.pointerType === "touch" || _y())
}

function rS(a, l, r = {}) {
    const [o, c, h] = Vy(a, r);
    return o.forEach(d => {
        let p = !1,
            v = !1,
            m;
        const x = () => {
                d.removeEventListener("pointerleave", M)
            },
            b = B => {
                m && (m(B), m = void 0), x()
            },
            S = B => {
                p = !1, window.removeEventListener("pointerup", S), window.removeEventListener("pointercancel", S), v && (v = !1, b(B))
            },
            j = () => {
                p = !0, window.addEventListener("pointerup", S, c), window.addEventListener("pointercancel", S, c)
            },
            M = B => {
                if (B.pointerType !== "touch") {
                    if (p) {
                        v = !0;
                        return
                    }
                    b(B)
                }
            },
            z = B => {
                if (!oS(B)) return;
                v = !1;
                const k = l(d, B);
                typeof k == "function" && (m = k, d.addEventListener("pointerleave", M, c))
            };
        d.addEventListener("pointerenter", z, c), d.addEventListener("pointerdown", j, c)
    }), h
}
const ky = (a, l) => l ? a === l ? !0 : ky(a, l.parentElement) : !1,
    Qc = a => a.pointerType === "mouse" ? typeof a.button != "number" || a.button <= 0 : a.isPrimary !== !1,
    uS = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);

function cS(a) {
    return uS.has(a.tagName) || a.isContentEditable === !0
}
const fS = new Set(["INPUT", "SELECT", "TEXTAREA"]);

function dS(a) {
    return fS.has(a.tagName) || a.isContentEditable === !0
}
const Js = new WeakSet;

function _0(a) {
    return l => {
        l.key === "Enter" && a(l)
    }
}

function Ku(a, l) {
    a.dispatchEvent(new PointerEvent("pointer" + l, {
        isPrimary: !0,
        bubbles: !0
    }))
}
const hS = (a, l) => {
    const r = a.currentTarget;
    if (!r) return;
    const o = _0(() => {
        if (Js.has(r)) return;
        Ku(r, "down");
        const c = _0(() => {
                Ku(r, "up")
            }),
            h = () => Ku(r, "cancel");
        r.addEventListener("keyup", c, l), r.addEventListener("blur", h, l)
    });
    r.addEventListener("keydown", o, l), r.addEventListener("blur", () => r.removeEventListener("keydown", o), l)
};

function V0(a) {
    return Qc(a) && !_y()
}
const k0 = new WeakSet;

function mS(a, l, r = {}) {
    const [o, c, h] = Vy(a, r), d = p => {
        const v = p.currentTarget;
        if (!V0(p) || k0.has(p)) return;
        Js.add(v), r.stopPropagation && k0.add(p);
        const m = l(v, p),
            x = {
                ...c,
                capture: !0
            },
            b = (M, z) => {
                window.removeEventListener("pointerup", S, x), window.removeEventListener("pointercancel", j, x), Js.has(v) && Js.delete(v), V0(M) && typeof m == "function" && m(M, {
                    success: z
                })
            },
            S = M => {
                b(M, v === window || v === document || r.useGlobalTarget || ky(v, M.target))
            },
            j = M => {
                b(M, !1)
            };
        window.addEventListener("pointerup", S, x), window.addEventListener("pointercancel", j, x)
    };
    return o.forEach(p => {
        (r.useGlobalTarget ? window : p).addEventListener("pointerdown", d, c), lS(p) && (p.addEventListener("focus", m => hS(m, c)), !cS(p) && !p.hasAttribute("tabindex") && (p.tabIndex = 0))
    }), h
}

function Jc(a) {
    return Hp(a) && "ownerSVGElement" in a
}
const Fs = new WeakMap;
let Zn;
const Ly = (a, l, r) => (o, c) => c && c[0] ? c[0][a + "Size"] : Jc(o) && "getBBox" in o ? o.getBBox()[l] : o[r],
    pS = Ly("inline", "width", "offsetWidth"),
    yS = Ly("block", "height", "offsetHeight");

function gS({
    target: a,
    borderBoxSize: l
}) {
    var r;
    (r = Fs.get(a)) == null || r.forEach(o => {
        o(a, {
            get width() {
                return pS(a, l)
            },
            get height() {
                return yS(a, l)
            }
        })
    })
}

function vS(a) {
    a.forEach(gS)
}

function xS() {
    typeof ResizeObserver > "u" || (Zn = new ResizeObserver(vS))
}

function bS(a, l) {
    Zn || xS();
    const r = zy(a);
    return r.forEach(o => {
        let c = Fs.get(o);
        c || (c = new Set, Fs.set(o, c)), c.add(l), Zn == null || Zn.observe(o)
    }), () => {
        r.forEach(o => {
            const c = Fs.get(o);
            c == null || c.delete(l), c != null && c.size || Zn == null || Zn.unobserve(o)
        })
    }
}
const Ps = new Set;
let ui;

function SS() {
    ui = () => {
        const a = {
            get width() {
                return window.innerWidth
            },
            get height() {
                return window.innerHeight
            }
        };
        Ps.forEach(l => l(a))
    }, window.addEventListener("resize", ui)
}

function TS(a) {
    return Ps.add(a), ui || SS(), () => {
        Ps.delete(a), !Ps.size && typeof ui == "function" && (window.removeEventListener("resize", ui), ui = void 0)
    }
}

function L0(a, l) {
    return typeof a == "function" ? TS(a) : bS(a, l)
}

function AS(a) {
    return Jc(a) && a.tagName === "svg"
}
const ES = [...Cy, Jt, Ze],
    MS = a => ES.find(jy(a)),
    U0 = () => ({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    }),
    ci = () => ({
        x: U0(),
        y: U0()
    }),
    B0 = () => ({
        min: 0,
        max: 0
    }),
    Pt = () => ({
        x: B0(),
        y: B0()
    }),
    NS = new WeakMap;

function fo(a) {
    return a !== null && typeof a == "object" && typeof a.start == "function"
}

function xl(a) {
    return typeof a == "string" || Array.isArray(a)
}
const Fc = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
    Pc = ["initial", ...Fc];

function ho(a) {
    return fo(a.animate) || Pc.some(l => xl(a[l]))
}

function Uy(a) {
    return !!(ho(a) || a.variants)
}

function wS(a, l, r) {
    for (const o in l) {
        const c = l[o],
            h = r[o];
        if (le(c)) a.addValue(o, c);
        else if (le(h)) a.addValue(o, di(c, {
            owner: a
        }));
        else if (h !== c)
            if (a.hasValue(o)) {
                const d = a.getValue(o);
                d.liveStyle === !0 ? d.jump(c) : d.hasAnimated || d.set(c)
            } else {
                const d = a.getStaticValue(o);
                a.addValue(o, di(d !== void 0 ? d : c, {
                    owner: a
                }))
            }
    }
    for (const o in r) l[o] === void 0 && a.removeValue(o);
    return l
}
const xc = {
        current: null
    },
    By = {
        current: !1
    },
    DS = typeof window < "u";

function jS() {
    if (By.current = !0, !!DS)
        if (window.matchMedia) {
            const a = window.matchMedia("(prefers-reduced-motion)"),
                l = () => xc.current = a.matches;
            a.addEventListener("change", l), l()
        } else xc.current = !1
}
const H0 = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
let so = {};

function Hy(a) {
    so = a
}

function CS() {
    return so
}
class RS {
    scrapeMotionValuesFromProps(l, r, o) {
        return {}
    }
    constructor({
        parent: l,
        props: r,
        presenceContext: o,
        reducedMotionConfig: c,
        skipAnimations: h,
        blockInitialAnimation: d,
        visualState: p
    }, v = {}) {
        this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = new Map, this.KeyframeResolver = Yc, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }, this.renderScheduledAt = 0, this.scheduleRender = () => {
            const j = ue.now();
            this.renderScheduledAt < j && (this.renderScheduledAt = j, zt.render(this.render, !1, !0))
        };
        const {
            latestValues: m,
            renderState: x
        } = p;
        this.latestValues = m, this.baseTarget = {
            ...m
        }, this.initialValues = r.initial ? {
            ...m
        } : {}, this.renderState = x, this.parent = l, this.props = r, this.presenceContext = o, this.depth = l ? l.depth + 1 : 0, this.reducedMotionConfig = c, this.skipAnimationsConfig = h, this.options = v, this.blockInitialAnimation = !!d, this.isControllingVariants = ho(r), this.isVariantNode = Uy(r), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(l && l.current);
        const {
            willChange: b,
            ...S
        } = this.scrapeMotionValuesFromProps(r, {}, this);
        for (const j in S) {
            const M = S[j];
            m[j] !== void 0 && le(M) && M.set(m[j])
        }
    }
    mount(l) {
        var r, o;
        if (this.hasBeenMounted)
            for (const c in this.initialValues)(r = this.values.get(c)) == null || r.jump(this.initialValues[c]), this.latestValues[c] = this.initialValues[c];
        this.current = l, NS.set(l, this), this.projection && !this.projection.instance && this.projection.mount(l), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((c, h) => this.bindToMotionValue(h, c)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (By.current || jS(), this.shouldReduceMotion = xc.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, (o = this.parent) == null || o.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0
    }
    unmount() {
        var l;
        this.projection && this.projection.unmount(), Fn(this.notifyUpdate), Fn(this.render), this.valueSubscriptions.forEach(r => r()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), (l = this.parent) == null || l.removeChild(this);
        for (const r in this.events) this.events[r].clear();
        for (const r in this.features) {
            const o = this.features[r];
            o && (o.unmount(), o.isMounted = !1)
        }
        this.current = null
    }
    addChild(l) {
        this.children.add(l), this.enteringChildren ?? (this.enteringChildren = new Set), this.enteringChildren.add(l)
    }
    removeChild(l) {
        this.children.delete(l), this.enteringChildren && this.enteringChildren.delete(l)
    }
    bindToMotionValue(l, r) {
        if (this.valueSubscriptions.has(l) && this.valueSubscriptions.get(l)(), r.accelerate && Sy.has(l) && this.current instanceof HTMLElement) {
            const {
                factory: d,
                keyframes: p,
                times: v,
                ease: m,
                duration: x
            } = r.accelerate, b = new xy({
                element: this.current,
                name: l,
                keyframes: p,
                times: v,
                ease: m,
                duration: De(x)
            }), S = d(b);
            this.valueSubscriptions.set(l, () => {
                S(), b.cancel()
            });
            return
        }
        const o = pi.has(l);
        o && this.onBindTransform && this.onBindTransform();
        const c = r.on("change", d => {
            this.latestValues[l] = d, this.props.onUpdate && zt.preRender(this.notifyUpdate), o && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender()
        });
        let h;
        typeof window < "u" && window.MotionCheckAppearSync && (h = window.MotionCheckAppearSync(this, l, r)), this.valueSubscriptions.set(l, () => {
            c(), h && h()
        })
    }
    sortNodePosition(l) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== l.type ? 0 : this.sortInstanceNodePosition(this.current, l.current)
    }
    updateFeatures() {
        let l = "animation";
        for (l in so) {
            const r = so[l];
            if (!r) continue;
            const {
                isEnabled: o,
                Feature: c
            } = r;
            if (!this.features[l] && c && o(this.props) && (this.features[l] = new c(this)), this.features[l]) {
                const h = this.features[l];
                h.isMounted ? h.update() : (h.mount(), h.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Pt()
    }
    getStaticValue(l) {
        return this.latestValues[l]
    }
    setStaticValue(l, r) {
        this.latestValues[l] = r
    }
    update(l, r) {
        (l.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = l, this.prevPresenceContext = this.presenceContext, this.presenceContext = r;
        for (let o = 0; o < H0.length; o++) {
            const c = H0[o];
            this.propEventSubscriptions[c] && (this.propEventSubscriptions[c](), delete this.propEventSubscriptions[c]);
            const h = "on" + c,
                d = l[h];
            d && (this.propEventSubscriptions[c] = this.on(c, d))
        }
        this.prevMotionValues = wS(this, this.scrapeMotionValuesFromProps(l, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(l) {
        return this.props.variants ? this.props.variants[l] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(l) {
        const r = this.getClosestVariantNode();
        if (r) return r.variantChildren && r.variantChildren.add(l), () => r.variantChildren.delete(l)
    }
    addValue(l, r) {
        const o = this.values.get(l);
        r !== o && (o && this.removeValue(l), this.bindToMotionValue(l, r), this.values.set(l, r), this.latestValues[l] = r.get())
    }
    removeValue(l) {
        this.values.delete(l);
        const r = this.valueSubscriptions.get(l);
        r && (r(), this.valueSubscriptions.delete(l)), delete this.latestValues[l], this.removeValueFromRenderState(l, this.renderState)
    }
    hasValue(l) {
        return this.values.has(l)
    }
    getValue(l, r) {
        if (this.props.values && this.props.values[l]) return this.props.values[l];
        let o = this.values.get(l);
        return o === void 0 && r !== void 0 && (o = di(r === null ? void 0 : r, {
            owner: this
        }), this.addValue(l, o)), o
    }
    readValue(l, r) {
        let o = this.latestValues[l] !== void 0 || !this.current ? this.latestValues[l] : this.getBaseTargetFromProps(this.props, l) ?? this.readValueFromInstance(this.current, l, this.options);
        return o != null && (typeof o == "string" && (Bp(o) || Yp(o)) ? o = parseFloat(o) : !MS(o) && Ze.test(r) && (o = Oy(l, r)), this.setBaseTarget(l, le(o) ? o.get() : o)), le(o) ? o.get() : o
    }
    setBaseTarget(l, r) {
        this.baseTarget[l] = r
    }
    getBaseTarget(l) {
        var h;
        const {
            initial: r
        } = this.props;
        let o;
        if (typeof r == "string" || typeof r == "object") {
            const d = Xc(this.props, r, (h = this.presenceContext) == null ? void 0 : h.custom);
            d && (o = d[l])
        }
        if (r && o !== void 0) return o;
        const c = this.getBaseTargetFromProps(this.props, l);
        return c !== void 0 && !le(c) ? c : this.initialValues[l] !== void 0 && o === void 0 ? void 0 : this.baseTarget[l]
    }
    on(l, r) {
        return this.events[l] || (this.events[l] = new Oc), this.events[l].add(r)
    }
    notify(l, ...r) {
        this.events[l] && this.events[l].notify(...r)
    }
    scheduleRenderMicrotask() {
        Zc.render(this.render)
    }
}
class Yy extends RS {
    constructor() {
        super(...arguments), this.KeyframeResolver = iS
    }
    sortInstanceNodePosition(l, r) {
        return l.compareDocumentPosition(r) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(l, r) {
        const o = l.style;
        return o ? o[r] : void 0
    }
    removeValueFromRenderState(l, {
        vars: r,
        style: o
    }) {
        delete r[l], delete o[l]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(), delete this.childSubscription);
        const {
            children: l
        } = this.props;
        le(l) && (this.childSubscription = l.on("change", r => {
            this.current && (this.current.textContent = `${r}`)
        }))
    }
}
class Pn {
    constructor(l) {
        this.isMounted = !1, this.node = l
    }
    update() {}
}

function qy({
    top: a,
    left: l,
    right: r,
    bottom: o
}) {
    return {
        x: {
            min: l,
            max: r
        },
        y: {
            min: a,
            max: o
        }
    }
}

function OS({
    x: a,
    y: l
}) {
    return {
        top: l.min,
        right: a.max,
        bottom: l.max,
        left: a.min
    }
}

function zS(a, l) {
    if (!l) return a;
    const r = l({
            x: a.left,
            y: a.top
        }),
        o = l({
            x: a.right,
            y: a.bottom
        });
    return {
        top: r.y,
        left: r.x,
        bottom: o.y,
        right: o.x
    }
}

function Zu(a) {
    return a === void 0 || a === 1
}

function bc({
    scale: a,
    scaleX: l,
    scaleY: r
}) {
    return !Zu(a) || !Zu(l) || !Zu(r)
}

function ga(a) {
    return bc(a) || Gy(a) || a.z || a.rotate || a.rotateX || a.rotateY || a.skewX || a.skewY
}

function Gy(a) {
    return Y0(a.x) || Y0(a.y)
}

function Y0(a) {
    return a && a !== "0%"
}

function oo(a, l, r) {
    const o = a - r,
        c = l * o;
    return r + c
}

function q0(a, l, r, o, c) {
    return c !== void 0 && (a = oo(a, c, o)), oo(a, r, o) + l
}

function Sc(a, l = 0, r = 1, o, c) {
    a.min = q0(a.min, l, r, o, c), a.max = q0(a.max, l, r, o, c)
}

function Xy(a, {
    x: l,
    y: r
}) {
    Sc(a.x, l.translate, l.scale, l.originPoint), Sc(a.y, r.translate, r.scale, r.originPoint)
}
const G0 = .999999999999,
    X0 = 1.0000000000001;

function _S(a, l, r, o = !1) {
    var p;
    const c = r.length;
    if (!c) return;
    l.x = l.y = 1;
    let h, d;
    for (let v = 0; v < c; v++) {
        h = r[v], d = h.projectionDelta;
        const {
            visualElement: m
        } = h.options;
        m && m.props.style && m.props.style.display === "contents" || (o && h.options.layoutScroll && h.scroll && h !== h.root && ($e(a.x, -h.scroll.offset.x), $e(a.y, -h.scroll.offset.y)), d && (l.x *= d.x.scale, l.y *= d.y.scale, Xy(a, d)), o && ga(h.latestValues) && Ws(a, h.latestValues, (p = h.layout) == null ? void 0 : p.layoutBox))
    }
    l.x < X0 && l.x > G0 && (l.x = 1), l.y < X0 && l.y > G0 && (l.y = 1)
}

function $e(a, l) {
    a.min += l, a.max += l
}

function K0(a, l, r, o, c = .5) {
    const h = Ot(a.min, a.max, c);
    Sc(a, l, r, h, o)
}

function Z0(a, l) {
    return typeof a == "string" ? parseFloat(a) / 100 * (l.max - l.min) : a
}

function Ws(a, l, r) {
    const o = r ?? a;
    K0(a.x, Z0(l.x, o.x), l.scaleX, l.scale, l.originX), K0(a.y, Z0(l.y, o.y), l.scaleY, l.scale, l.originY)
}

function Ky(a, l) {
    return qy(zS(a.getBoundingClientRect(), l))
}

function VS(a, l, r) {
    const o = Ky(a, r),
        {
            scroll: c
        } = l;
    return c && ($e(o.x, c.offset.x), $e(o.y, c.offset.y)), o
}
const kS = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
    },
    LS = mi.length;

function US(a, l, r) {
    let o = "",
        c = !0;
    for (let d = 0; d < LS; d++) {
        const p = mi[d],
            v = a[p];
        if (v === void 0) continue;
        let m = !0;
        if (typeof v == "number") m = v === (p.startsWith("scale") ? 1 : 0);
        else {
            const x = parseFloat(v);
            m = p.startsWith("scale") ? x === 1 : x === 0
        }
        if (!m || r) {
            const x = vc(v, lo[p]);
            if (!m) {
                c = !1;
                const b = kS[p] || p;
                o += `${b}(${x}) `
            }
            r && (l[p] = x)
        }
    }
    const h = a.pathRotation;
    return h && (c = !1, o += `rotate(${vc(h,lo.pathRotation)}) `), o = o.trim(), r ? o = r(l, c ? "" : o) : c && (o = "none"), o
}

function Wc(a, l, r) {
    const {
        style: o,
        vars: c,
        transformOrigin: h
    } = a;
    let d = !1,
        p = !1;
    for (const v in l) {
        const m = l[v];
        if (pi.has(v)) {
            d = !0;
            continue
        } else if (ny(v)) {
            c[v] = m;
            continue
        } else {
            const x = vc(m, lo[v]);
            v.startsWith("origin") ? (p = !0, h[v] = x) : o[v] = x
        }
    }
    if (l.transform || (d || r ? o.transform = US(l, a.transform, r) : o.transform && (o.transform = "none")), p) {
        const {
            originX: v = "50%",
            originY: m = "50%",
            originZ: x = 0
        } = h;
        o.transformOrigin = `${v} ${m} ${x}`
    }
}

function Zy(a, {
    style: l,
    vars: r
}, o, c) {
    const h = a.style;
    let d;
    for (d in l) h[d] = l[d];
    c == null || c.applyProjectionStyles(h, o);
    for (d in r) h.setProperty(d, r[d])
}

function Q0(a, l) {
    return l.max === l.min ? 0 : a / (l.max - l.min) * 100
}
const fl = {
        correct: (a, l) => {
            if (!l.target) return a;
            if (typeof a == "string")
                if (W.test(a)) a = parseFloat(a);
                else return a;
            const r = Q0(a, l.target.x),
                o = Q0(a, l.target.y);
            return `${r}% ${o}%`
        }
    },
    BS = {
        correct: (a, {
            treeScale: l,
            projectionDelta: r
        }) => {
            const o = a,
                c = Ze.parse(a);
            if (c.length > 5) return o;
            const h = Ze.createTransformer(a),
                d = typeof c[0] != "number" ? 1 : 0,
                p = r.x.scale * l.x,
                v = r.y.scale * l.y;
            c[0 + d] /= p, c[1 + d] /= v;
            const m = Ot(p, v, .5);
            return typeof c[2 + d] == "number" && (c[2 + d] /= m), typeof c[3 + d] == "number" && (c[3 + d] /= m), h(c)
        }
    },
    Tc = {
        borderRadius: {
            ...fl,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
        },
        borderTopLeftRadius: fl,
        borderTopRightRadius: fl,
        borderBottomLeftRadius: fl,
        borderBottomRightRadius: fl,
        boxShadow: BS
    };

function Qy(a, {
    layout: l,
    layoutId: r
}) {
    return pi.has(a) || a.startsWith("origin") || (l || r !== void 0) && (!!Tc[a] || a === "opacity")
}

function $c(a, l, r) {
    var d;
    const o = a.style,
        c = l == null ? void 0 : l.style,
        h = {};
    if (!o) return h;
    for (const p in o)(le(o[p]) || c && le(c[p]) || Qy(p, a) || ((d = r == null ? void 0 : r.getValue(p)) == null ? void 0 : d.liveStyle) !== void 0) && (h[p] = o[p]);
    return h
}

function HS(a) {
    return window.getComputedStyle(a)
}
class YS extends Yy {
    constructor() {
        super(...arguments), this.type = "html", this.renderInstance = Zy
    }
    readValueFromInstance(l, r) {
        var o;
        if (pi.has(r)) return (o = this.projection) != null && o.isProjecting ? oc(r) : s2(l, r);
        {
            const c = HS(l),
                h = (ny(r) ? c.getPropertyValue(r) : c[r]) || 0;
            return typeof h == "string" ? h.trim() : h
        }
    }
    measureInstanceViewportBox(l, {
        transformPagePoint: r
    }) {
        return Ky(l, r)
    }
    build(l, r, o) {
        Wc(l, r, o.transformTemplate)
    }
    scrapeMotionValuesFromProps(l, r, o) {
        return $c(l, r, o)
    }
}
const qS = {
        offset: "stroke-dashoffset",
        array: "stroke-dasharray"
    },
    GS = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };

function XS(a, l, r = 1, o = 0, c = !0) {
    a.pathLength = 1;
    const h = c ? qS : GS;
    a[h.offset] = `${-o}`, a[h.array] = `${l} ${r}`
}
const KS = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];

function Jy(a, {
    attrX: l,
    attrY: r,
    attrScale: o,
    pathLength: c,
    pathSpacing: h = 1,
    pathOffset: d = 0,
    ...p
}, v, m, x) {
    if (Wc(a, p, m), v) {
        a.style.viewBox && (a.attrs.viewBox = a.style.viewBox);
        return
    }
    a.attrs = a.style, a.style = {};
    const {
        attrs: b,
        style: S
    } = a;
    b.transform && (S.transform = b.transform, delete b.transform), (S.transform || b.transformOrigin) && (S.transformOrigin = b.transformOrigin ?? "50% 50%", delete b.transformOrigin), S.transform && (S.transformBox = (x == null ? void 0 : x.transformBox) ?? "fill-box", delete b.transformBox);
    for (const j of KS) b[j] !== void 0 && (S[j] = b[j], delete b[j]);
    l !== void 0 && (b.x = l), r !== void 0 && (b.y = r), o !== void 0 && (b.scale = o), c !== void 0 && XS(b, c, h, d, !1)
}
const Fy = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]),
    Py = a => typeof a == "string" && a.toLowerCase() === "svg";

function ZS(a, l, r, o) {
    Zy(a, l, void 0, o);
    for (const c in l.attrs) a.setAttribute(Fy.has(c) ? c : Kc(c), l.attrs[c])
}

function Wy(a, l, r) {
    const o = $c(a, l, r);
    for (const c in a)
        if (le(a[c]) || le(l[c])) {
            const h = mi.indexOf(c) !== -1 ? "attr" + c.charAt(0).toUpperCase() + c.substring(1) : c;
            o[h] = a[c]
        } return o
}
class QS extends Yy {
    constructor() {
        super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Pt
    }
    getBaseTargetFromProps(l, r) {
        return l[r]
    }
    readValueFromInstance(l, r) {
        if (pi.has(r)) {
            const o = Ry(r);
            return o && o.default || 0
        }
        return r = Fy.has(r) ? r : Kc(r), l.getAttribute(r)
    }
    scrapeMotionValuesFromProps(l, r, o) {
        return Wy(l, r, o)
    }
    build(l, r, o) {
        Jy(l, r, this.isSVGTag, o.transformTemplate, o.style)
    }
    renderInstance(l, r, o, c) {
        ZS(l, r, o, c)
    }
    mount(l) {
        this.isSVGTag = Py(l.tagName), super.mount(l)
    }
}
const JS = Pc.length;

function $y(a) {
    if (!a) return;
    if (!a.isControllingVariants) {
        const r = a.parent ? $y(a.parent) || {} : {};
        return a.props.initial !== void 0 && (r.initial = a.props.initial), r
    }
    const l = {};
    for (let r = 0; r < JS; r++) {
        const o = Pc[r],
            c = a.props[o];
        (xl(c) || c === !1) && (l[o] = c)
    }
    return l
}

function Iy(a, l) {
    if (!Array.isArray(l)) return !1;
    const r = l.length;
    if (r !== a.length) return !1;
    for (let o = 0; o < r; o++)
        if (l[o] !== a[o]) return !1;
    return !0
}
const FS = [...Fc].reverse(),
    PS = Fc.length;

function WS(a) {
    return l => Promise.all(l.map(({
        animation: r,
        options: o
    }) => Q2(a, r, o)))
}

function $S(a) {
    let l = WS(a),
        r = J0(),
        o = !0,
        c = !1;
    const h = m => (x, b) => {
        var j;
        const S = Sa(a, b, m === "exit" ? (j = a.presenceContext) == null ? void 0 : j.custom : void 0);
        if (S) {
            const {
                transition: M,
                transitionEnd: z,
                ...B
            } = S;
            x = {
                ...x,
                ...B,
                ...z
            }
        }
        return x
    };

    function d(m) {
        l = m(a)
    }

    function p(m) {
        const {
            props: x
        } = a, b = $y(a.parent) || {}, S = [], j = new Set;
        let M = {},
            z = 1 / 0;
        for (let k = 0; k < PS; k++) {
            const G = FS[k],
                H = r[G],
                q = x[G] !== void 0 ? x[G] : b[G],
                $ = xl(q),
                at = G === m ? H.isActive : null;
            at === !1 && (z = k);
            let Z = q === b[G] && q !== x[G] && $;
            if (Z && (o || c) && a.manuallyAnimateOnMount && (Z = !1), H.protectedKeys = {
                    ...M
                }, !H.isActive && at === null || !q && !H.prevProp || fo(q) || typeof q == "boolean") continue;
            if (G === "exit" && H.isActive && at !== !0) {
                H.prevResolvedValues && (M = {
                    ...M,
                    ...H.prevResolvedValues
                });
                continue
            }
            const J = IS(H.prevProp, q);
            let rt = J || G === m && H.isActive && !Z && $ || k > z && $,
                Y = !1;
            const I = Array.isArray(q) ? q : [q];
            let tt = I.reduce(h(G), {});
            at === !1 && (tt = {});
            const {
                prevResolvedValues: st = {}
            } = H, ut = {
                ...st,
                ...tt
            }, Mt = F => {
                rt = !0, j.has(F) && (Y = !0, j.delete(F)), H.needsAnimating[F] = !0;
                const dt = a.getValue(F);
                dt && (dt.liveStyle = !1)
            };
            for (const F in ut) {
                const dt = tt[F],
                    xt = st[F];
                if (M.hasOwnProperty(F)) continue;
                let E = !1;
                hc(dt) && hc(xt) ? E = !Iy(dt, xt) || J : E = dt !== xt, E ? dt != null ? Mt(F) : j.add(F) : dt !== void 0 && j.has(F) ? Mt(F) : H.protectedKeys[F] = !0
            }
            H.prevProp = q, H.prevResolvedValues = tt, H.isActive && (M = {
                ...M,
                ...tt
            }), (o || c) && a.blockInitialAnimation && (rt = !1);
            const O = Z && J;
            rt && (!O || Y) && S.push(...I.map(F => {
                const dt = {
                    type: G
                };
                if (typeof F == "string" && (o || c) && !O && a.manuallyAnimateOnMount && a.parent) {
                    const {
                        parent: xt
                    } = a, E = Sa(xt, F);
                    if (xt.enteringChildren && E) {
                        const {
                            delayChildren: U
                        } = E.transition || {};
                        dt.delay = Ty(xt.enteringChildren, a, U)
                    }
                }
                return {
                    animation: F,
                    options: dt
                }
            }))
        }
        if (j.size) {
            const k = {};
            if (typeof x.initial != "boolean") {
                const G = Sa(a, Array.isArray(x.initial) ? x.initial[0] : x.initial);
                G && G.transition && (k.transition = G.transition)
            }
            j.forEach(G => {
                const H = a.getBaseTarget(G),
                    q = a.getValue(G);
                q && (q.liveStyle = !0), k[G] = H ?? null
            }), S.push({
                animation: k
            })
        }
        let B = !!S.length;
        return o && (x.initial === !1 || x.initial === x.animate) && !a.manuallyAnimateOnMount && (B = !1), o = !1, c = !1, B ? l(S) : Promise.resolve()
    }

    function v(m, x) {
        var S;
        if (r[m].isActive === x) return Promise.resolve();
        (S = a.variantChildren) == null || S.forEach(j => {
            var M;
            return (M = j.animationState) == null ? void 0 : M.setActive(m, x)
        }), r[m].isActive = x;
        const b = p(m);
        for (const j in r) r[j].protectedKeys = {};
        return b
    }
    return {
        animateChanges: p,
        setActive: v,
        setAnimateFunction: d,
        getState: () => r,
        reset: () => {
            r = J0(), c = !0
        }
    }
}

function IS(a, l) {
    return typeof l == "string" ? l !== a : Array.isArray(l) ? !Iy(l, a) : !1
}

function ya(a = !1) {
    return {
        isActive: a,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}

function J0() {
    return {
        animate: ya(!0),
        whileInView: ya(),
        whileHover: ya(),
        whileTap: ya(),
        whileDrag: ya(),
        whileFocus: ya(),
        exit: ya()
    }
}

function Ac(a, l) {
    a.min = l.min, a.max = l.max
}

function Xe(a, l) {
    Ac(a.x, l.x), Ac(a.y, l.y)
}

function F0(a, l) {
    a.translate = l.translate, a.scale = l.scale, a.originPoint = l.originPoint, a.origin = l.origin
}
const tg = 1e-4,
    tT = 1 - tg,
    eT = 1 + tg,
    eg = .01,
    nT = 0 - eg,
    aT = 0 + eg;

function ce(a) {
    return a.max - a.min
}

function iT(a, l, r) {
    return Math.abs(a - l) <= r
}

function P0(a, l, r, o = .5) {
    a.origin = o, a.originPoint = Ot(l.min, l.max, a.origin), a.scale = ce(r) / ce(l), a.translate = Ot(r.min, r.max, a.origin) - a.originPoint, (a.scale >= tT && a.scale <= eT || isNaN(a.scale)) && (a.scale = 1), (a.translate >= nT && a.translate <= aT || isNaN(a.translate)) && (a.translate = 0)
}

function pl(a, l, r, o) {
    P0(a.x, l.x, r.x, o ? o.originX : void 0), P0(a.y, l.y, r.y, o ? o.originY : void 0)
}

function W0(a, l, r, o = 0) {
    const c = o ? Ot(r.min, r.max, o) : r.min;
    a.min = c + l.min, a.max = a.min + ce(l)
}

function lT(a, l, r, o) {
    W0(a.x, l.x, r.x, o == null ? void 0 : o.x), W0(a.y, l.y, r.y, o == null ? void 0 : o.y)
}

function $0(a, l, r, o = 0) {
    const c = o ? Ot(r.min, r.max, o) : r.min;
    a.min = l.min - c, a.max = a.min + ce(l)
}

function ro(a, l, r, o) {
    $0(a.x, l.x, r.x, o == null ? void 0 : o.x), $0(a.y, l.y, r.y, o == null ? void 0 : o.y)
}

function I0(a, l, r, o, c) {
    return a -= l, a = oo(a, 1 / r, o), c !== void 0 && (a = oo(a, 1 / c, o)), a
}

function sT(a, l = 0, r = 1, o = .5, c, h = a, d = a) {
    if (Ie.test(l) && (l = parseFloat(l), l = Ot(d.min, d.max, l / 100) - d.min), typeof l != "number") return;
    let p = Ot(h.min, h.max, o);
    a === h && (p -= l), a.min = I0(a.min, l, r, p, c), a.max = I0(a.max, l, r, p, c)
}

function tp(a, l, [r, o, c], h, d) {
    sT(a, l[r], l[o], l[c], l.scale, h, d)
}
const oT = ["x", "scaleX", "originX"],
    rT = ["y", "scaleY", "originY"];

function ep(a, l, r, o) {
    tp(a.x, l, oT, r ? r.x : void 0, o ? o.x : void 0), tp(a.y, l, rT, r ? r.y : void 0, o ? o.y : void 0)
}

function np(a) {
    return a.translate === 0 && a.scale === 1
}

function ng(a) {
    return np(a.x) && np(a.y)
}

function ap(a, l) {
    return a.min === l.min && a.max === l.max
}

function uT(a, l) {
    return ap(a.x, l.x) && ap(a.y, l.y)
}

function ip(a, l) {
    return Math.round(a.min) === Math.round(l.min) && Math.round(a.max) === Math.round(l.max)
}

function ag(a, l) {
    return ip(a.x, l.x) && ip(a.y, l.y)
}

function lp(a) {
    return ce(a.x) / ce(a.y)
}

function sp(a, l) {
    return a.translate === l.translate && a.scale === l.scale && a.originPoint === l.originPoint
}

function We(a) {
    return [a("x"), a("y")]
}

function cT(a, l, r) {
    let o = "";
    const c = a.x.translate / l.x,
        h = a.y.translate / l.y,
        d = (r == null ? void 0 : r.z) || 0;
    if ((c || h || d) && (o = `translate3d(${c}px, ${h}px, ${d}px) `), (l.x !== 1 || l.y !== 1) && (o += `scale(${1/l.x}, ${1/l.y}) `), r) {
        const {
            transformPerspective: m,
            rotate: x,
            pathRotation: b,
            rotateX: S,
            rotateY: j,
            skewX: M,
            skewY: z
        } = r;
        m && (o = `perspective(${m}px) ${o}`), x && (o += `rotate(${x}deg) `), b && (o += `rotate(${b}deg) `), S && (o += `rotateX(${S}deg) `), j && (o += `rotateY(${j}deg) `), M && (o += `skewX(${M}deg) `), z && (o += `skewY(${z}deg) `)
    }
    const p = a.x.scale * l.x,
        v = a.y.scale * l.y;
    return (p !== 1 || v !== 1) && (o += `scale(${p}, ${v})`), o || "none"
}
const ig = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"],
    fT = ig.length,
    op = a => typeof a == "string" ? parseFloat(a) : a,
    rp = a => typeof a == "number" || W.test(a);

function dT(a, l, r, o, c, h) {
    c ? (a.opacity = Ot(0, r.opacity ?? 1, hT(o)), a.opacityExit = Ot(l.opacity ?? 1, 0, mT(o))) : h && (a.opacity = Ot(l.opacity ?? 1, r.opacity ?? 1, o));
    for (let d = 0; d < fT; d++) {
        const p = ig[d];
        let v = up(l, p),
            m = up(r, p);
        if (v === void 0 && m === void 0) continue;
        v || (v = 0), m || (m = 0), v === 0 || m === 0 || rp(v) === rp(m) ? (a[p] = Math.max(Ot(op(v), op(m), o), 0), (Ie.test(m) || Ie.test(v)) && (a[p] += "%")) : a[p] = m
    }(l.rotate || r.rotate) && (a.rotate = Ot(l.rotate || 0, r.rotate || 0, o))
}

function up(a, l) {
    return a[l] !== void 0 ? a[l] : a.borderRadius
}
const hT = lg(0, .5, Pp),
    mT = lg(.5, .95, He);

function lg(a, l, r) {
    return o => o < a ? 0 : o > l ? 1 : r(gl(a, l, o))
}

function pT(a, l, r) {
    const o = le(a) ? a : di(a);
    return o.start(Gc("", o, l, r)), o.animation
}

function bl(a, l, r, o = {
    passive: !0
}) {
    return a.addEventListener(l, r, o), () => a.removeEventListener(l, r, o)
}
const yT = (a, l) => a.depth - l.depth;
class gT {
    constructor() {
        this.children = [], this.isDirty = !1
    }
    add(l) {
        Cc(this.children, l), this.isDirty = !0
    }
    remove(l) {
        to(this.children, l), this.isDirty = !0
    }
    forEach(l) {
        this.isDirty && this.children.sort(yT), this.isDirty = !1, this.children.forEach(l)
    }
}

function vT(a, l) {
    const r = ue.now(),
        o = ({
            timestamp: c
        }) => {
            const h = c - r;
            h >= l && (Fn(o), a(h - l))
        };
    return zt.setup(o, !0), () => Fn(o)
}

function $s(a) {
    return le(a) ? a.get() : a
}
class xT {
    constructor() {
        this.members = []
    }
    add(l) {
        Cc(this.members, l);
        for (let r = this.members.length - 1; r >= 0; r--) {
            const o = this.members[r];
            if (o === l || o === this.lead || o === this.prevLead) continue;
            const c = o.instance;
            (!c || c.isConnected === !1) && !o.snapshot && (to(this.members, o), o.unmount())
        }
        l.scheduleRender()
    }
    remove(l) {
        if (to(this.members, l), l === this.prevLead && (this.prevLead = void 0), l === this.lead) {
            const r = this.members[this.members.length - 1];
            r && this.promote(r)
        }
    }
    relegate(l) {
        var r;
        for (let o = this.members.indexOf(l) - 1; o >= 0; o--) {
            const c = this.members[o];
            if (c.isPresent !== !1 && ((r = c.instance) == null ? void 0 : r.isConnected) !== !1) return this.promote(c), !0
        }
        return !1
    }
    promote(l, r) {
        var c;
        const o = this.lead;
        if (l !== o && (this.prevLead = o, this.lead = l, l.show(), o)) {
            o.updateSnapshot(), l.scheduleRender();
            const {
                layoutDependency: h
            } = o.options, {
                layoutDependency: d
            } = l.options;
            (h === void 0 || h !== d) && (l.resumeFrom = o, r && (o.preserveOpacity = !0), o.snapshot && (l.snapshot = o.snapshot, l.snapshot.latestValues = o.animationValues || o.latestValues), (c = l.root) != null && c.isUpdating && (l.isLayoutDirty = !0)), l.options.crossfade === !1 && o.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(l => {
            var r, o, c, h, d;
            (o = (r = l.options).onExitComplete) == null || o.call(r), (d = (c = l.resumingFrom) == null ? void 0 : (h = c.options).onExitComplete) == null || d.call(h)
        })
    }
    scheduleRender() {
        this.members.forEach(l => l.instance && l.scheduleRender(!1))
    }
    removeLeadSnapshot() {
        var l;
        (l = this.lead) != null && l.snapshot && (this.lead.snapshot = void 0)
    }
}
const Is = {
        hasAnimatedSinceResize: !0,
        hasEverUpdated: !1
    },
    Qu = ["", "X", "Y", "Z"],
    bT = 1e3;
let ST = 0;

function Ju(a, l, r, o) {
    const {
        latestValues: c
    } = l;
    c[a] && (r[a] = c[a], l.setStaticValue(a, 0), o && (o[a] = 0))
}

function sg(a) {
    if (a.hasCheckedOptimisedAppear = !0, a.root === a) return;
    const {
        visualElement: l
    } = a.options;
    if (!l) return;
    const r = wy(l);
    if (window.MotionHasOptimisedAnimation(r, "transform")) {
        const {
            layout: c,
            layoutId: h
        } = a.options;
        window.MotionCancelOptimisedAnimation(r, "transform", zt, !(c || h))
    }
    const {
        parent: o
    } = a;
    o && !o.hasCheckedOptimisedAppear && sg(o)
}

function og({
    attachResizeListener: a,
    defaultParent: l,
    measureScroll: r,
    checkIsScrollRoot: o,
    resetTransform: c
}) {
    return class {
        constructor(d = {}, p = l == null ? void 0 : l()) {
            this.id = ST++, this.animationId = 0, this.animationCommitId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                x: 1,
                y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
                this.projectionUpdateScheduled = !1, this.nodes.forEach(ET), this.nodes.forEach(CT), this.nodes.forEach(RT), this.nodes.forEach(MT)
            }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = d, this.root = p ? p.root || p : this, this.path = p ? [...p.path, p] : [], this.parent = p, this.depth = p ? p.depth + 1 : 0;
            for (let v = 0; v < this.path.length; v++) this.path[v].shouldResetTransform = !0;
            this.root === this && (this.nodes = new gT)
        }
        addEventListener(d, p) {
            return this.eventHandlers.has(d) || this.eventHandlers.set(d, new Oc), this.eventHandlers.get(d).add(p)
        }
        notifyListeners(d, ...p) {
            const v = this.eventHandlers.get(d);
            v && v.notify(...p)
        }
        hasListeners(d) {
            return this.eventHandlers.has(d)
        }
        mount(d) {
            if (this.instance) return;
            this.isSVG = Jc(d) && !AS(d), this.instance = d;
            const {
                layoutId: p,
                layout: v,
                visualElement: m
            } = this.options;
            if (m && !m.current && m.mount(d), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (v || p) && (this.isLayoutDirty = !0), a) {
                let x, b = 0;
                const S = () => this.root.updateBlockedByResize = !1;
                zt.read(() => {
                    b = window.innerWidth
                }), a(d, () => {
                    const j = window.innerWidth;
                    j !== b && (b = j, this.root.updateBlockedByResize = !0, x && x(), x = vT(S, 250), Is.hasAnimatedSinceResize && (Is.hasAnimatedSinceResize = !1, this.nodes.forEach(dp)))
                })
            }
            p && this.root.registerSharedNode(p, this), this.options.animate !== !1 && m && (p || v) && this.addEventListener("didUpdate", ({
                delta: x,
                hasLayoutChanged: b,
                hasRelativeLayoutChanged: S,
                layout: j
            }) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0, this.relativeTarget = void 0;
                    return
                }
                const M = this.options.transition || m.getDefaultTransition() || kT,
                    {
                        onLayoutAnimationStart: z,
                        onLayoutAnimationComplete: B
                    } = m.getProps(),
                    k = !this.targetLayout || !ag(this.targetLayout, j),
                    G = !b && S;
                if (this.options.layoutRoot || this.resumeFrom || G || b && (k || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
                    const H = {
                        ...qc(M, "layout"),
                        onPlay: z,
                        onComplete: B
                    };
                    (m.shouldReduceMotion || this.options.layoutRoot) && (H.delay = 0, H.type = !1), this.startAnimation(H), this.setAnimationOrigin(x, G, H.path)
                } else b || dp(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = j
            })
        }
        unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const d = this.getStack();
            d && d.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), Fn(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(OT), this.animationId++)
        }
        getTransformTemplate() {
            const {
                visualElement: d
            } = this.options;
            return d && d.getProps().transformTemplate
        }
        willUpdate(d = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && sg(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let x = 0; x < this.path.length; x++) {
                const b = this.path[x];
                b.shouldResetTransform = !0, (typeof b.latestValues.x == "string" || typeof b.latestValues.y == "string") && (b.isLayoutDirty = !0), b.updateScroll("snapshot"), b.options.layoutRoot && b.willUpdate(!1)
            }
            const {
                layoutId: p,
                layout: v
            } = this.options;
            if (p === void 0 && !v) return;
            const m = this.getTransformTemplate();
            this.prevTransformTemplateValue = m ? m(this.latestValues, "") : void 0, this.updateSnapshot(), d && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                const v = this.updateBlockedByResize;
                this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), v && this.nodes.forEach(wT), this.nodes.forEach(cp);
                return
            }
            if (this.animationId <= this.animationCommitId) {
                this.nodes.forEach(fp);
                return
            }
            this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(DT), this.nodes.forEach(jT), this.nodes.forEach(TT), this.nodes.forEach(AT)) : this.nodes.forEach(fp), this.clearAllSnapshots();
            const p = ue.now();
            ie.delta = tn(0, 1e3 / 60, p - ie.timestamp), ie.timestamp = p, ie.isProcessing = !0, Bu.update.process(ie), Bu.preRender.process(ie), Bu.render.process(ie), ie.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, Zc.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(NT), this.sharedNodes.forEach(zT)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, zt.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            zt.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !ce(this.snapshot.measuredBox.x) && !ce(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let v = 0; v < this.path.length; v++) this.path[v].updateScroll();
            const d = this.layout;
            this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected || (this.layoutCorrected = Pt()), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            const {
                visualElement: p
            } = this.options;
            p && p.notify("LayoutMeasure", this.layout.layoutBox, d ? d.layoutBox : void 0)
        }
        updateScroll(d = "measure") {
            let p = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === d && (p = !1), p && this.instance) {
                const v = o(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: d,
                    isRoot: v,
                    offset: r(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : v
                }
            }
        }
        resetTransform() {
            if (!c) return;
            const d = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                p = this.projectionDelta && !ng(this.projectionDelta),
                v = this.getTransformTemplate(),
                m = v ? v(this.latestValues, "") : void 0,
                x = m !== this.prevTransformTemplateValue;
            d && this.instance && (p || ga(this.latestValues) || x) && (c(this.instance, m), this.shouldResetTransform = !1, this.scheduleRender())
        }
        measure(d = !0) {
            const p = this.measurePageBox();
            let v = this.removeElementScroll(p);
            return d && (v = this.removeTransform(v)), LT(v), {
                animationId: this.root.animationId,
                measuredBox: p,
                layoutBox: v,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var m;
            const {
                visualElement: d
            } = this.options;
            if (!d) return Pt();
            const p = d.measureViewportBox();
            if (!(((m = this.scroll) == null ? void 0 : m.wasRoot) || this.path.some(UT))) {
                const {
                    scroll: x
                } = this.root;
                x && ($e(p.x, x.offset.x), $e(p.y, x.offset.y))
            }
            return p
        }
        removeElementScroll(d) {
            var v;
            const p = Pt();
            if (Xe(p, d), (v = this.scroll) != null && v.wasRoot) return p;
            for (let m = 0; m < this.path.length; m++) {
                const x = this.path[m],
                    {
                        scroll: b,
                        options: S
                    } = x;
                x !== this.root && b && S.layoutScroll && (b.wasRoot && Xe(p, d), $e(p.x, b.offset.x), $e(p.y, b.offset.y))
            }
            return p
        }
        applyTransform(d, p = !1, v) {
            var x, b;
            const m = v || Pt();
            Xe(m, d);
            for (let S = 0; S < this.path.length; S++) {
                const j = this.path[S];
                !p && j.options.layoutScroll && j.scroll && j !== j.root && ($e(m.x, -j.scroll.offset.x), $e(m.y, -j.scroll.offset.y)), ga(j.latestValues) && Ws(m, j.latestValues, (x = j.layout) == null ? void 0 : x.layoutBox)
            }
            return ga(this.latestValues) && Ws(m, this.latestValues, (b = this.layout) == null ? void 0 : b.layoutBox), m
        }
        removeTransform(d) {
            var v;
            const p = Pt();
            Xe(p, d);
            for (let m = 0; m < this.path.length; m++) {
                const x = this.path[m];
                if (!ga(x.latestValues)) continue;
                let b;
                x.instance && (bc(x.latestValues) && x.updateSnapshot(), b = Pt(), Xe(b, x.measurePageBox())), ep(p, x.latestValues, (v = x.snapshot) == null ? void 0 : v.layoutBox, b)
            }
            return ga(this.latestValues) && ep(p, this.latestValues), p
        }
        setTargetDelta(d) {
            this.targetDelta = d, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
        }
        setOptions(d) {
            this.options = {
                ...this.options,
                ...d,
                crossfade: d.crossfade !== void 0 ? d.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ie.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(d = !1) {
            var j;
            const p = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = p.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = p.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = p.isSharedProjectionDirty);
            const v = !!this.resumingFrom || this !== p;
            if (!(d || v && this.isSharedProjectionDirty || this.isProjectionDirty || (j = this.parent) != null && j.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
            const {
                layout: x,
                layoutId: b
            } = this.options;
            if (!this.layout || !(x || b)) return;
            this.resolvedRelativeTargetAt = ie.timestamp;
            const S = this.getClosestProjectingParent();
            S && this.linkedParentVersion !== S.layoutVersion && !S.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && S && S.layout ? this.createRelativeTarget(S, this.layout.layoutBox, S.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = Pt(), this.targetWithTransforms = Pt()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), lT(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : Xe(this.target, this.layout.layoutBox), Xy(this.target, this.targetDelta)) : Xe(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && S && !!S.resumingFrom == !!this.resumingFrom && !S.options.layoutScroll && S.target && this.animationProgress !== 1 ? this.createRelativeTarget(S, this.target, S.target) : this.relativeParent = this.relativeTarget = void 0))
        }
        getClosestProjectingParent() {
            if (!(!this.parent || bc(this.parent.latestValues) || Gy(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        createRelativeTarget(d, p, v) {
            this.relativeParent = d, this.linkedParentVersion = d.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Pt(), this.relativeTargetOrigin = Pt(), ro(this.relativeTargetOrigin, p, v, this.options.layoutAnchor || void 0), Xe(this.relativeTarget, this.relativeTargetOrigin)
        }
        removeRelativeTarget() {
            this.relativeParent = this.relativeTarget = void 0
        }
        calcProjection() {
            var M;
            const d = this.getLead(),
                p = !!this.resumingFrom || this !== d;
            let v = !0;
            if ((this.isProjectionDirty || (M = this.parent) != null && M.isProjectionDirty) && (v = !1), p && (this.isSharedProjectionDirty || this.isTransformDirty) && (v = !1), this.resolvedRelativeTargetAt === ie.timestamp && (v = !1), v) return;
            const {
                layout: m,
                layoutId: x
            } = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(m || x)) return;
            Xe(this.layoutCorrected, this.layout.layoutBox);
            const b = this.treeScale.x,
                S = this.treeScale.y;
            _S(this.layoutCorrected, this.treeScale, this.path, p), d.layout && !d.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (d.target = d.layout.layoutBox, d.targetWithTransforms = Pt());
            const {
                target: j
            } = d;
            if (!j) {
                this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                return
            }!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (F0(this.prevProjectionDelta.x, this.projectionDelta.x), F0(this.prevProjectionDelta.y, this.projectionDelta.y)), pl(this.projectionDelta, this.layoutCorrected, j, this.latestValues), (this.treeScale.x !== b || this.treeScale.y !== S || !sp(this.projectionDelta.x, this.prevProjectionDelta.x) || !sp(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", j))
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(d = !0) {
            var p;
            if ((p = this.options.visualElement) == null || p.scheduleRender(), d) {
                const v = this.getStack();
                v && v.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = ci(), this.projectionDelta = ci(), this.projectionDeltaWithTransform = ci()
        }
        setAnimationOrigin(d, p = !1, v) {
            const m = this.snapshot,
                x = m ? m.latestValues : {},
                b = {
                    ...this.latestValues
                },
                S = ci();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !p;
            const j = Pt(),
                M = m ? m.source : void 0,
                z = this.layout ? this.layout.source : void 0,
                B = M !== z,
                k = this.getStack(),
                G = !k || k.members.length <= 1,
                H = !!(B && !G && this.options.crossfade === !0 && !this.path.some(VT));
            this.animationProgress = 0;
            let q;
            const $ = v == null ? void 0 : v.interpolateProjection(d);
            this.mixTargetDelta = at => {
                const Z = at / 1e3,
                    J = $ == null ? void 0 : $(Z);
                J ? (S.x.translate = J.x, S.x.scale = Ot(d.x.scale, 1, Z), S.x.origin = d.x.origin, S.x.originPoint = d.x.originPoint, S.y.translate = J.y, S.y.scale = Ot(d.y.scale, 1, Z), S.y.origin = d.y.origin, S.y.originPoint = d.y.originPoint) : (hp(S.x, d.x, Z), hp(S.y, d.y, Z)), this.setTargetDelta(S), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (ro(j, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), _T(this.relativeTarget, this.relativeTargetOrigin, j, Z), q && uT(this.relativeTarget, q) && (this.isProjectionDirty = !1), q || (q = Pt()), Xe(q, this.relativeTarget)), B && (this.animationValues = b, dT(b, x, this.latestValues, Z, H, G)), J && J.rotate !== void 0 && (this.animationValues || (this.animationValues = b), this.animationValues.pathRotation = J.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = Z
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(d) {
            var p, v, m;
            this.notifyListeners("animationStart"), (p = this.currentAnimation) == null || p.stop(), (m = (v = this.resumingFrom) == null ? void 0 : v.currentAnimation) == null || m.stop(), this.pendingAnimation && (Fn(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = zt.update(() => {
                Is.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = di(0)), this.motionValue.jump(0, !1), this.currentAnimation = pT(this.motionValue, [0, 1e3], {
                    ...d,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: x => {
                        this.mixTargetDelta(x), d.onUpdate && d.onUpdate(x)
                    },
                    onComplete: () => {
                        d.onComplete && d.onComplete(), this.completeAnimation()
                    }
                }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            })
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            const d = this.getStack();
            d && d.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(bT), this.currentAnimation.stop()), this.completeAnimation()
        }
        applyTransformsToTarget() {
            const d = this.getLead();
            let {
                targetWithTransforms: p,
                target: v,
                layout: m,
                latestValues: x
            } = d;
            if (!(!p || !v || !m)) {
                if (this !== d && this.layout && m && rg(this.options.animationType, this.layout.layoutBox, m.layoutBox)) {
                    v = this.target || Pt();
                    const b = ce(this.layout.layoutBox.x);
                    v.x.min = d.target.x.min, v.x.max = v.x.min + b;
                    const S = ce(this.layout.layoutBox.y);
                    v.y.min = d.target.y.min, v.y.max = v.y.min + S
                }
                Xe(p, v), Ws(p, x), pl(this.projectionDeltaWithTransform, this.layoutCorrected, p, x)
            }
        }
        registerSharedNode(d, p) {
            this.sharedNodes.has(d) || this.sharedNodes.set(d, new xT), this.sharedNodes.get(d).add(p);
            const m = p.options.initialPromotionConfig;
            p.promote({
                transition: m ? m.transition : void 0,
                preserveFollowOpacity: m && m.shouldPreserveFollowOpacity ? m.shouldPreserveFollowOpacity(p) : void 0
            })
        }
        isLead() {
            const d = this.getStack();
            return d ? d.lead === this : !0
        }
        getLead() {
            var p;
            const {
                layoutId: d
            } = this.options;
            return d ? ((p = this.getStack()) == null ? void 0 : p.lead) || this : this
        }
        getPrevLead() {
            var p;
            const {
                layoutId: d
            } = this.options;
            return d ? (p = this.getStack()) == null ? void 0 : p.prevLead : void 0
        }
        getStack() {
            const {
                layoutId: d
            } = this.options;
            if (d) return this.root.sharedNodes.get(d)
        }
        promote({
            needsReset: d,
            transition: p,
            preserveFollowOpacity: v
        } = {}) {
            const m = this.getStack();
            m && m.promote(this, v), d && (this.projectionDelta = void 0, this.needsReset = !0), p && this.setOptions({
                transition: p
            })
        }
        relegate() {
            const d = this.getStack();
            return d ? d.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {
                visualElement: d
            } = this.options;
            if (!d) return;
            let p = !1;
            const {
                latestValues: v
            } = d;
            if ((v.z || v.rotate || v.rotateX || v.rotateY || v.rotateZ || v.skewX || v.skewY) && (p = !0), !p) return;
            const m = {};
            v.z && Ju("z", d, m, this.animationValues);
            for (let x = 0; x < Qu.length; x++) Ju(`rotate${Qu[x]}`, d, m, this.animationValues), Ju(`skew${Qu[x]}`, d, m, this.animationValues);
            d.render();
            for (const x in m) d.setStaticValue(x, m[x]), this.animationValues && (this.animationValues[x] = m[x]);
            d.scheduleRender()
        }
        applyProjectionStyles(d, p) {
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) {
                d.visibility = "hidden";
                return
            }
            const v = this.getTransformTemplate();
            if (this.needsReset) {
                this.needsReset = !1, d.visibility = "", d.opacity = "", d.pointerEvents = $s(p == null ? void 0 : p.pointerEvents) || "", d.transform = v ? v(this.latestValues, "") : "none";
                return
            }
            const m = this.getLead();
            if (!this.projectionDelta || !this.layout || !m.target) {
                this.options.layoutId && (d.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, d.pointerEvents = $s(p == null ? void 0 : p.pointerEvents) || ""), this.hasProjected && !ga(this.latestValues) && (d.transform = v ? v({}, "") : "none", this.hasProjected = !1);
                return
            }
            d.visibility = "";
            const x = m.animationValues || m.latestValues;
            this.applyTransformsToTarget();
            let b = cT(this.projectionDeltaWithTransform, this.treeScale, x);
            v && (b = v(x, b)), d.transform = b;
            const {
                x: S,
                y: j
            } = this.projectionDelta;
            d.transformOrigin = `${S.origin*100}% ${j.origin*100}% 0`, m.animationValues ? d.opacity = m === this ? x.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : x.opacityExit : d.opacity = m === this ? x.opacity !== void 0 ? x.opacity : "" : x.opacityExit !== void 0 ? x.opacityExit : 0;
            for (const M in Tc) {
                if (x[M] === void 0) continue;
                const {
                    correct: z,
                    applyTo: B,
                    isCSSVariable: k
                } = Tc[M], G = b === "none" ? x[M] : z(x[M], m);
                if (B) {
                    const H = B.length;
                    for (let q = 0; q < H; q++) d[B[q]] = G
                } else k ? this.options.visualElement.renderState.vars[M] = G : d[M] = G
            }
            this.options.layoutId && (d.pointerEvents = m === this ? $s(p == null ? void 0 : p.pointerEvents) || "" : "none")
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(d => {
                var p;
                return (p = d.currentAnimation) == null ? void 0 : p.stop()
            }), this.root.nodes.forEach(cp), this.root.sharedNodes.clear()
        }
    }
}

function TT(a) {
    a.updateLayout()
}

function AT(a) {
    var r;
    const l = ((r = a.resumeFrom) == null ? void 0 : r.snapshot) || a.snapshot;
    if (a.isLead() && a.layout && l && a.hasListeners("didUpdate")) {
        const {
            layoutBox: o,
            measuredBox: c
        } = a.layout, {
            animationType: h
        } = a.options, d = l.source !== a.layout.source;
        if (h === "size") We(b => {
            const S = d ? l.measuredBox[b] : l.layoutBox[b],
                j = ce(S);
            S.min = o[b].min, S.max = S.min + j
        });
        else if (h === "x" || h === "y") {
            const b = h === "x" ? "y" : "x";
            Ac(d ? l.measuredBox[b] : l.layoutBox[b], o[b])
        } else rg(h, l.layoutBox, o) && We(b => {
            const S = d ? l.measuredBox[b] : l.layoutBox[b],
                j = ce(o[b]);
            S.max = S.min + j, a.relativeTarget && !a.currentAnimation && (a.isProjectionDirty = !0, a.relativeTarget[b].max = a.relativeTarget[b].min + j)
        });
        const p = ci();
        pl(p, o, l.layoutBox);
        const v = ci();
        d ? pl(v, a.applyTransform(c, !0), l.measuredBox) : pl(v, o, l.layoutBox);
        const m = !ng(p);
        let x = !1;
        if (!a.resumeFrom) {
            const b = a.getClosestProjectingParent();
            if (b && !b.resumeFrom) {
                const {
                    snapshot: S,
                    layout: j
                } = b;
                if (S && j) {
                    const M = a.options.layoutAnchor || void 0,
                        z = Pt();
                    ro(z, l.layoutBox, S.layoutBox, M);
                    const B = Pt();
                    ro(B, o, j.layoutBox, M), ag(z, B) || (x = !0), b.options.layoutRoot && (a.relativeTarget = B, a.relativeTargetOrigin = z, a.relativeParent = b)
                }
            }
        }
        a.notifyListeners("didUpdate", {
            layout: o,
            snapshot: l,
            delta: v,
            layoutDelta: p,
            hasLayoutChanged: m,
            hasRelativeLayoutChanged: x
        })
    } else if (a.isLead()) {
        const {
            onExitComplete: o
        } = a.options;
        o && o()
    }
    a.options.transition = void 0
}

function ET(a) {
    a.parent && (a.isProjecting() || (a.isProjectionDirty = a.parent.isProjectionDirty), a.isSharedProjectionDirty || (a.isSharedProjectionDirty = !!(a.isProjectionDirty || a.parent.isProjectionDirty || a.parent.isSharedProjectionDirty)), a.isTransformDirty || (a.isTransformDirty = a.parent.isTransformDirty))
}

function MT(a) {
    a.isProjectionDirty = a.isSharedProjectionDirty = a.isTransformDirty = !1
}

function NT(a) {
    a.clearSnapshot()
}

function cp(a) {
    a.clearMeasurements()
}

function wT(a) {
    a.isLayoutDirty = !0, a.updateLayout()
}

function fp(a) {
    a.isLayoutDirty = !1
}

function DT(a) {
    a.isAnimationBlocked && a.layout && !a.isLayoutDirty && (a.snapshot = a.layout, a.isLayoutDirty = !0)
}

function jT(a) {
    const {
        visualElement: l
    } = a.options;
    l && l.getProps().onBeforeLayoutMeasure && l.notify("BeforeLayoutMeasure"), a.resetTransform()
}

function dp(a) {
    a.finishAnimation(), a.targetDelta = a.relativeTarget = a.target = void 0, a.isProjectionDirty = !0
}

function CT(a) {
    a.resolveTargetDelta()
}

function RT(a) {
    a.calcProjection()
}

function OT(a) {
    a.resetSkewAndRotation()
}

function zT(a) {
    a.removeLeadSnapshot()
}

function hp(a, l, r) {
    a.translate = Ot(l.translate, 0, r), a.scale = Ot(l.scale, 1, r), a.origin = l.origin, a.originPoint = l.originPoint
}

function mp(a, l, r, o) {
    a.min = Ot(l.min, r.min, o), a.max = Ot(l.max, r.max, o)
}

function _T(a, l, r, o) {
    mp(a.x, l.x, r.x, o), mp(a.y, l.y, r.y, o)
}

function VT(a) {
    return a.animationValues && a.animationValues.opacityExit !== void 0
}
const kT = {
        duration: .45,
        ease: [.4, 0, .1, 1]
    },
    pp = a => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(a),
    yp = pp("applewebkit/") && !pp("chrome/") ? Math.round : He;

function gp(a) {
    a.min = yp(a.min), a.max = yp(a.max)
}

function LT(a) {
    gp(a.x), gp(a.y)
}

function rg(a, l, r) {
    return a === "position" || a === "preserve-aspect" && !iT(lp(l), lp(r), .2)
}

function UT(a) {
    var l;
    return a !== a.root && ((l = a.scroll) == null ? void 0 : l.wasRoot)
}
const BT = og({
        attachResizeListener: (a, l) => bl(a, "resize", l),
        measureScroll: () => {
            var a, l;
            return {
                x: document.documentElement.scrollLeft || ((a = document.body) == null ? void 0 : a.scrollLeft) || 0,
                y: document.documentElement.scrollTop || ((l = document.body) == null ? void 0 : l.scrollTop) || 0
            }
        },
        checkIsScrollRoot: () => !0
    }),
    Fu = {
        current: void 0
    },
    ug = og({
        measureScroll: a => ({
            x: a.scrollLeft,
            y: a.scrollTop
        }),
        defaultParent: () => {
            if (!Fu.current) {
                const a = new BT({});
                a.mount(window), a.setOptions({
                    layoutScroll: !0
                }), Fu.current = a
            }
            return Fu.current
        },
        resetTransform: (a, l) => {
            a.style.transform = l !== void 0 ? l : "none"
        },
        checkIsScrollRoot: a => window.getComputedStyle(a).position === "fixed"
    }),
    cg = X.createContext({
        transformPagePoint: a => a,
        isStatic: !1,
        reducedMotion: "never"
    });

function HT(a = !0) {
    const l = X.useContext(jc);
    if (l === null) return [!0, null];
    const {
        isPresent: r,
        onExitComplete: o,
        register: c
    } = l, h = X.useId();
    X.useEffect(() => {
        if (a) return c(h)
    }, [a]);
    const d = X.useCallback(() => a && o && o(h), [h, o, a]);
    return !r && o ? [!1, d] : [!0]
}
const fg = X.createContext({
        strict: !1
    }),
    vp = {
        animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"]
    };
let xp = !1;

function YT() {
    if (xp) return;
    const a = {};
    for (const l in vp) a[l] = {
        isEnabled: r => vp[l].some(o => !!r[o])
    };
    Hy(a), xp = !0
}

function dg() {
    return YT(), CS()
}

function qT(a) {
    const l = dg();
    for (const r in a) l[r] = {
        ...l[r],
        ...a[r]
    };
    Hy(l)
}
const GT = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "propagate", "ignoreStrict", "viewport"]);

function uo(a) {
    return a.startsWith("while") || a.startsWith("drag") && a !== "draggable" || a.startsWith("layout") || a.startsWith("onTap") || a.startsWith("onPan") || a.startsWith("onLayout") || GT.has(a)
}
let hg = a => !uo(a);

function XT(a) {
    typeof a == "function" && (hg = l => l.startsWith("on") ? !uo(l) : a(l))
}
try {
    XT(require("@emotion/is-prop-valid").default)
} catch {}

function KT(a, l, r) {
    const o = {};
    for (const c in a) c === "values" && typeof a.values == "object" || le(a[c]) || (hg(c) || r === !0 && uo(c) || !l && !uo(c) || a.draggable && c.startsWith("onDrag")) && (o[c] = a[c]);
    return o
}
const mo = X.createContext({});

function ZT(a, l) {
    if (ho(a)) {
        const {
            initial: r,
            animate: o
        } = a;
        return {
            initial: r === !1 || xl(r) ? r : void 0,
            animate: xl(o) ? o : void 0
        }
    }
    return a.inherit !== !1 ? l : {}
}

function QT(a) {
    const {
        initial: l,
        animate: r
    } = ZT(a, X.useContext(mo));
    return X.useMemo(() => ({
        initial: l,
        animate: r
    }), [bp(l), bp(r)])
}

function bp(a) {
    return Array.isArray(a) ? a.join(" ") : a
}
const Ic = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});

function mg(a, l, r) {
    for (const o in l) !le(l[o]) && !Qy(o, r) && (a[o] = l[o])
}

function JT({
    transformTemplate: a
}, l) {
    return X.useMemo(() => {
        const r = Ic();
        return Wc(r, l, a), Object.assign({}, r.vars, r.style)
    }, [l])
}

function FT(a, l) {
    const r = a.style || {},
        o = {};
    return mg(o, r, a), Object.assign(o, JT(a, l)), o
}

function PT(a, l) {
    const r = {},
        o = FT(a, l);
    return a.drag && a.dragListener !== !1 && (r.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = a.drag === !0 ? "none" : `pan-${a.drag==="x"?"y":"x"}`), a.tabIndex === void 0 && (a.onTap || a.onTapStart || a.whileTap) && (r.tabIndex = 0), r.style = o, r
}
const pg = () => ({
    ...Ic(),
    attrs: {}
});

function WT(a, l, r, o) {
    const c = X.useMemo(() => {
        const h = pg();
        return Jy(h, l, Py(o), a.transformTemplate, a.style), {
            ...h.attrs,
            style: {
                ...h.style
            }
        }
    }, [l]);
    if (a.style) {
        const h = {};
        mg(h, a.style, a), c.style = {
            ...h,
            ...c.style
        }
    }
    return c
}
const $T = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function tf(a) {
    return typeof a != "string" || a.includes("-") ? !1 : !!($T.indexOf(a) > -1 || /[A-Z]/u.test(a))
}

function IT(a, l, r, {
    latestValues: o
}, c, h = !1, d) {
    const v = (d ?? tf(a) ? WT : PT)(l, o, c, a),
        m = KT(l, typeof a == "string", h),
        x = a !== X.Fragment ? {
            ...m,
            ...v,
            ref: r
        } : {},
        {
            children: b
        } = l,
        S = X.useMemo(() => le(b) ? b.get() : b, [b]);
    return X.createElement(a, {
        ...x,
        children: S
    })
}

function t5({
    scrapeMotionValuesFromProps: a,
    createRenderState: l
}, r, o, c) {
    return {
        latestValues: e5(r, o, c, a),
        renderState: l()
    }
}

function e5(a, l, r, o) {
    const c = {},
        h = o(a, {});
    for (const S in h) c[S] = $s(h[S]);
    let {
        initial: d,
        animate: p
    } = a;
    const v = ho(a),
        m = Uy(a);
    l && m && !v && a.inherit !== !1 && (d === void 0 && (d = l.initial), p === void 0 && (p = l.animate));
    let x = r ? r.initial === !1 : !1;
    x = x || d === !1;
    const b = x ? p : d;
    if (b && typeof b != "boolean" && !fo(b)) {
        const S = Array.isArray(b) ? b : [b];
        for (let j = 0; j < S.length; j++) {
            const M = Xc(a, S[j]);
            if (M) {
                const {
                    transitionEnd: z,
                    transition: B,
                    ...k
                } = M;
                for (const G in k) {
                    let H = k[G];
                    if (Array.isArray(H)) {
                        const q = x ? H.length - 1 : 0;
                        H = H[q]
                    }
                    H !== null && (c[G] = H)
                }
                for (const G in z) c[G] = z[G]
            }
        }
    }
    return c
}
const yg = a => (l, r) => {
        const o = X.useContext(mo),
            c = X.useContext(jc),
            h = () => t5(a, l, o, c);
        return r ? h() : Ix(h)
    },
    n5 = yg({
        scrapeMotionValuesFromProps: $c,
        createRenderState: Ic
    }),
    a5 = yg({
        scrapeMotionValuesFromProps: Wy,
        createRenderState: pg
    }),
    i5 = Symbol.for("motionComponentSymbol");

function l5(a, l, r) {
    const o = X.useRef(r);
    X.useInsertionEffect(() => {
        o.current = r
    });
    const c = X.useRef(null);
    return X.useCallback(h => {
        var p;
        h && ((p = a.onMount) == null || p.call(a, h)), l && (h ? l.mount(h) : l.unmount());
        const d = o.current;
        if (typeof d == "function")
            if (h) {
                const v = d(h);
                typeof v == "function" && (c.current = v)
            } else c.current ? (c.current(), c.current = null) : d(h);
        else d && (d.current = h)
    }, [l])
}
const gg = X.createContext({});

function oi(a) {
    return a && typeof a == "object" && Object.prototype.hasOwnProperty.call(a, "current")
}

function s5(a, l, r, o, c, h) {
    var H, q;
    const {
        visualElement: d
    } = X.useContext(mo), p = X.useContext(fg), v = X.useContext(jc), m = X.useContext(cg), x = m.reducedMotion, b = m.skipAnimations, S = X.useRef(null), j = X.useRef(!1);
    o = o || p.renderer, !S.current && o && (S.current = o(a, {
        visualState: l,
        parent: d,
        props: r,
        presenceContext: v,
        blockInitialAnimation: v ? v.initial === !1 : !1,
        reducedMotionConfig: x,
        skipAnimations: b,
        isSVG: h
    }), j.current && S.current && (S.current.manuallyAnimateOnMount = !0));
    const M = S.current,
        z = X.useContext(gg);
    M && !M.projection && c && (M.type === "html" || M.type === "svg") && o5(S.current, r, c, z);
    const B = X.useRef(!1);
    X.useInsertionEffect(() => {
        M && B.current && M.update(r, v)
    });
    const k = r[Ny],
        G = X.useRef(!!k && typeof window < "u" && !((H = window.MotionHandoffIsComplete) != null && H.call(window, k)) && ((q = window.MotionHasOptimisedAnimation) == null ? void 0 : q.call(window, k)));
    return eb(() => {
        j.current = !0, M && (B.current = !0, window.MotionIsMounted = !0, M.updateFeatures(), M.scheduleRenderMicrotask(), G.current && M.animationState && M.animationState.animateChanges())
    }), X.useEffect(() => {
        M && (!G.current && M.animationState && M.animationState.animateChanges(), G.current && (queueMicrotask(() => {
            var $;
            ($ = window.MotionHandoffMarkAsComplete) == null || $.call(window, k)
        }), G.current = !1), M.enteringChildren = void 0)
    }), M
}

function o5(a, l, r, o) {
    const {
        layoutId: c,
        layout: h,
        drag: d,
        dragConstraints: p,
        layoutScroll: v,
        layoutRoot: m,
        layoutAnchor: x,
        layoutCrossfade: b
    } = l;
    a.projection = new r(a.latestValues, l["data-framer-portal-id"] ? void 0 : vg(a.parent)), a.projection.setOptions({
        layoutId: c,
        layout: h,
        alwaysMeasureLayout: !!d || p && oi(p),
        visualElement: a,
        animationType: typeof h == "string" ? h : "both",
        initialPromotionConfig: o,
        crossfade: b,
        layoutScroll: v,
        layoutRoot: m,
        layoutAnchor: x
    })
}

function vg(a) {
    if (a) return a.options.allowProjection !== !1 ? a.projection : vg(a.parent)
}

function Pu(a, {
    forwardMotionProps: l = !1,
    type: r
} = {}, o, c) {
    o && qT(o);
    const h = r ? r === "svg" : tf(a),
        d = h ? a5 : n5;

    function p(m, x) {
        let b;
        const S = {
                ...X.useContext(cg),
                ...m,
                layoutId: r5(m)
            },
            {
                isStatic: j
            } = S,
            M = QT(m),
            z = d(m, j);
        if (!j && typeof window < "u") {
            u5();
            const B = c5(S);
            b = B.MeasureLayout, M.visualElement = s5(a, z, S, c, B.ProjectionNode, h)
        }
        return y.jsxs(mo.Provider, {
            value: M,
            children: [b && M.visualElement ? y.jsx(b, {
                visualElement: M.visualElement,
                ...S
            }) : null, IT(a, m, l5(z, M.visualElement, x), z, j, l, h)]
        })
    }
    p.displayName = `motion.${typeof a=="string"?a:`create(${a.displayName??a.name??""})`}`;
    const v = X.forwardRef(p);
    return v[i5] = a, v
}

function r5({
    layoutId: a
}) {
    const l = X.useContext(Up).id;
    return l && a !== void 0 ? l + "-" + a : a
}

function u5(a, l) {
    X.useContext(fg).strict
}

function c5(a) {
    const l = dg(),
        {
            drag: r,
            layout: o
        } = l;
    if (!r && !o) return {};
    const c = {
        ...r,
        ...o
    };
    return {
        MeasureLayout: r != null && r.isEnabled(a) || o != null && o.isEnabled(a) ? c.MeasureLayout : void 0,
        ProjectionNode: c.ProjectionNode
    }
}

function f5(a, l) {
    if (typeof Proxy > "u") return Pu;
    const r = new Map,
        o = (h, d) => Pu(h, d, a, l),
        c = (h, d) => o(h, d);
    return new Proxy(c, {
        get: (h, d) => d === "create" ? o : (r.has(d) || r.set(d, Pu(d, void 0, a, l)), r.get(d))
    })
}
const d5 = (a, l) => l.isSVG ?? tf(a) ? new QS(l) : new YS(l, {
    allowProjection: a !== X.Fragment
});
class h5 extends Pn {
    constructor(l) {
        super(l), l.animationState || (l.animationState = $S(l))
    }
    updateAnimationControlsSubscription() {
        const {
            animate: l
        } = this.node.getProps();
        fo(l) && (this.unmountControls = l.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {
            animate: l
        } = this.node.getProps(), {
            animate: r
        } = this.node.prevProps || {};
        l !== r && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var l;
        this.node.animationState.reset(), (l = this.unmountControls) == null || l.call(this)
    }
}
let m5 = 0;
class p5 extends Pn {
    constructor() {
        super(...arguments), this.id = m5++, this.isExitComplete = !1
    }
    update() {
        var h;
        if (!this.node.presenceContext) return;
        const {
            isPresent: l,
            onExitComplete: r
        } = this.node.presenceContext, {
            isPresent: o
        } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || l === o) return;
        if (l && o === !1) {
            if (this.isExitComplete) {
                const {
                    initial: d,
                    custom: p
                } = this.node.getProps();
                if (typeof d == "string" || typeof d == "object" && d !== null && !Array.isArray(d)) {
                    const v = Sa(this.node, d, p);
                    if (v) {
                        const {
                            transition: m,
                            transitionEnd: x,
                            ...b
                        } = v;
                        for (const S in b)(h = this.node.getValue(S)) == null || h.jump(b[S])
                    }
                }
                this.node.animationState.reset(), this.node.animationState.animateChanges()
            } else this.node.animationState.setActive("exit", !1);
            this.isExitComplete = !1;
            return
        }
        const c = this.node.animationState.setActive("exit", !l);
        r && !l && c.then(() => {
            this.isExitComplete = !0, r(this.id)
        })
    }
    mount() {
        const {
            register: l,
            onExitComplete: r
        } = this.node.presenceContext || {};
        r && r(this.id), l && (this.unmount = l(this.id))
    }
    unmount() {}
}
const y5 = {
    animation: {
        Feature: h5
    },
    exit: {
        Feature: p5
    }
};

function El(a) {
    return {
        point: {
            x: a.pageX,
            y: a.pageY
        }
    }
}
const g5 = a => l => Qc(l) && a(l, El(l));

function yl(a, l, r, o) {
    return bl(a, l, g5(r), o)
}
const xg = ({
        current: a
    }) => a ? a.ownerDocument.defaultView : null,
    Sp = (a, l) => Math.abs(a - l);

function v5(a, l) {
    const r = Sp(a.x, l.x),
        o = Sp(a.y, l.y);
    return Math.sqrt(r ** 2 + o ** 2)
}
const Tp = new Set(["auto", "scroll"]);
class bg {
    constructor(l, r, {
        transformPagePoint: o,
        contextWindow: c = window,
        dragSnapToOrigin: h = !1,
        distanceThreshold: d = 3,
        element: p
    } = {}) {
        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = new Map, this.removeScrollListeners = null, this.onElementScroll = M => {
                this.handleScroll(M.target)
            }, this.onWindowScroll = () => {
                this.handleScroll(window)
            }, this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                this.lastRawMoveEventInfo && (this.lastMoveEventInfo = Ks(this.lastRawMoveEventInfo, this.transformPagePoint));
                const M = Wu(this.lastMoveEventInfo, this.history),
                    z = this.startEvent !== null,
                    B = v5(M.offset, {
                        x: 0,
                        y: 0
                    }) >= this.distanceThreshold;
                if (!z && !B) return;
                const {
                    point: k
                } = M, {
                    timestamp: G
                } = ie;
                this.history.push({
                    ...k,
                    timestamp: G
                });
                const {
                    onStart: H,
                    onMove: q
                } = this.handlers;
                z || (H && H(this.lastMoveEvent, M), this.startEvent = this.lastMoveEvent), q && q(this.lastMoveEvent, M)
            }, this.handlePointerMove = (M, z) => {
                this.lastMoveEvent = M, this.lastRawMoveEventInfo = z, this.lastMoveEventInfo = Ks(z, this.transformPagePoint), zt.update(this.updatePoint, !0)
            }, this.handlePointerUp = (M, z) => {
                this.end();
                const {
                    onEnd: B,
                    onSessionEnd: k,
                    resumeAnimation: G
                } = this.handlers;
                if ((this.dragSnapToOrigin || !this.startEvent) && G && G(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const H = Wu(M.type === "pointercancel" ? this.lastMoveEventInfo : Ks(z, this.transformPagePoint), this.history);
                this.startEvent && B && B(M, H), k && k(M, H)
            }, !Qc(l)) return;
        this.dragSnapToOrigin = h, this.handlers = r, this.transformPagePoint = o, this.distanceThreshold = d, this.contextWindow = c || window;
        const v = El(l),
            m = Ks(v, this.transformPagePoint),
            {
                point: x
            } = m,
            {
                timestamp: b
            } = ie;
        this.history = [{
            ...x,
            timestamp: b
        }];
        const {
            onSessionStart: S
        } = r;
        S && S(l, Wu(m, this.history));
        const j = {
            passive: !0,
            capture: !0
        };
        this.removeListeners = Sl(yl(this.contextWindow, "pointermove", this.handlePointerMove, j), yl(this.contextWindow, "pointerup", this.handlePointerUp, j), yl(this.contextWindow, "pointercancel", this.handlePointerUp, j)), p && this.startScrollTracking(p)
    }
    startScrollTracking(l) {
        let r = l.parentElement;
        for (; r;) {
            const o = getComputedStyle(r);
            (Tp.has(o.overflowX) || Tp.has(o.overflowY)) && this.scrollPositions.set(r, {
                x: r.scrollLeft,
                y: r.scrollTop
            }), r = r.parentElement
        }
        this.scrollPositions.set(window, {
            x: window.scrollX,
            y: window.scrollY
        }), window.addEventListener("scroll", this.onElementScroll, {
            capture: !0
        }), window.addEventListener("scroll", this.onWindowScroll), this.removeScrollListeners = () => {
            window.removeEventListener("scroll", this.onElementScroll, {
                capture: !0
            }), window.removeEventListener("scroll", this.onWindowScroll)
        }
    }
    handleScroll(l) {
        const r = this.scrollPositions.get(l);
        if (!r) return;
        const o = l === window,
            c = o ? {
                x: window.scrollX,
                y: window.scrollY
            } : {
                x: l.scrollLeft,
                y: l.scrollTop
            },
            h = {
                x: c.x - r.x,
                y: c.y - r.y
            };
        h.x === 0 && h.y === 0 || (o ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += h.x, this.lastMoveEventInfo.point.y += h.y) : this.history.length > 0 && (this.history[0].x -= h.x, this.history[0].y -= h.y), this.scrollPositions.set(l, c), zt.update(this.updatePoint, !0))
    }
    updateHandlers(l) {
        this.handlers = l
    }
    end() {
        this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), Fn(this.updatePoint)
    }
}

function Ks(a, l) {
    return l ? {
        point: l(a.point)
    } : a
}

function Ap(a, l) {
    return {
        x: a.x - l.x,
        y: a.y - l.y
    }
}

function Wu({
    point: a
}, l) {
    return {
        point: a,
        delta: Ap(a, Sg(l)),
        offset: Ap(a, x5(l)),
        velocity: b5(l, .1)
    }
}

function x5(a) {
    return a[0]
}

function Sg(a) {
    return a[a.length - 1]
}

function b5(a, l) {
    if (a.length < 2) return {
        x: 0,
        y: 0
    };
    let r = a.length - 1,
        o = null;
    const c = Sg(a);
    for (; r >= 0 && (o = a[r], !(c.timestamp - o.timestamp > De(l)));) r--;
    if (!o) return {
        x: 0,
        y: 0
    };
    o === a[0] && a.length > 2 && c.timestamp - o.timestamp > De(l) * 2 && (o = a[1]);
    const h = Be(c.timestamp - o.timestamp);
    if (h === 0) return {
        x: 0,
        y: 0
    };
    const d = {
        x: (c.x - o.x) / h,
        y: (c.y - o.y) / h
    };
    return d.x === 1 / 0 && (d.x = 0), d.y === 1 / 0 && (d.y = 0), d
}

function S5(a, {
    min: l,
    max: r
}, o) {
    return l !== void 0 && a < l ? a = o ? Ot(l, a, o.min) : Math.max(a, l) : r !== void 0 && a > r && (a = o ? Ot(r, a, o.max) : Math.min(a, r)), a
}

function Ep(a, l, r) {
    return {
        min: l !== void 0 ? a.min + l : void 0,
        max: r !== void 0 ? a.max + r - (a.max - a.min) : void 0
    }
}

function T5(a, {
    top: l,
    left: r,
    bottom: o,
    right: c
}) {
    return {
        x: Ep(a.x, r, c),
        y: Ep(a.y, l, o)
    }
}

function Mp(a, l) {
    let r = l.min - a.min,
        o = l.max - a.max;
    return l.max - l.min < a.max - a.min && ([r, o] = [o, r]), {
        min: r,
        max: o
    }
}

function A5(a, l) {
    return {
        x: Mp(a.x, l.x),
        y: Mp(a.y, l.y)
    }
}

function E5(a, l) {
    let r = .5;
    const o = ce(a),
        c = ce(l);
    return c > o ? r = gl(l.min, l.max - o, a.min) : o > c && (r = gl(a.min, a.max - c, l.min)), tn(0, 1, r)
}

function M5(a, l) {
    const r = {};
    return l.min !== void 0 && (r.min = l.min - a.min), l.max !== void 0 && (r.max = l.max - a.min), r
}
const Ec = .35;

function N5(a = Ec) {
    return a === !1 ? a = 0 : a === !0 && (a = Ec), {
        x: Np(a, "left", "right"),
        y: Np(a, "top", "bottom")
    }
}

function Np(a, l, r) {
    return {
        min: wp(a, l),
        max: wp(a, r)
    }
}

function wp(a, l) {
    return typeof a == "number" ? a : a[l] || 0
}
const w5 = new WeakMap;
class D5 {
    constructor(l) {
        this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Pt(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = l
    }
    start(l, {
        snapToCursor: r = !1,
        distanceThreshold: o
    } = {}) {
        const {
            presenceContext: c
        } = this.visualElement;
        if (c && c.isPresent === !1) return;
        const h = b => {
                r && this.snapToCursor(El(b).point), this.stopAnimation()
            },
            d = (b, S) => {
                const {
                    drag: j,
                    dragPropagation: M,
                    onDragStart: z
                } = this.getProps();
                if (j && !M && (this.openDragLock && this.openDragLock(), this.openDragLock = sS(j), !this.openDragLock)) return;
                this.latestPointerEvent = b, this.latestPanInfo = S, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), We(k => {
                    let G = this.getAxisMotionValue(k).get() || 0;
                    if (Ie.test(G)) {
                        const {
                            projection: H
                        } = this.visualElement;
                        if (H && H.layout) {
                            const q = H.layout.layoutBox[k];
                            q && (G = ce(q) * (parseFloat(G) / 100))
                        }
                    }
                    this.originPoint[k] = G
                }), z && zt.update(() => z(b, S), !1, !0), mc(this.visualElement, "transform");
                const {
                    animationState: B
                } = this.visualElement;
                B && B.setActive("whileDrag", !0)
            },
            p = (b, S) => {
                this.latestPointerEvent = b, this.latestPanInfo = S;
                const {
                    dragPropagation: j,
                    dragDirectionLock: M,
                    onDirectionLock: z,
                    onDrag: B
                } = this.getProps();
                if (!j && !this.openDragLock) return;
                const {
                    offset: k
                } = S;
                if (M && this.currentDirection === null) {
                    this.currentDirection = C5(k), this.currentDirection !== null && z && z(this.currentDirection);
                    return
                }
                this.updateAxis("x", S.point, k), this.updateAxis("y", S.point, k), this.visualElement.render(), B && zt.update(() => B(b, S), !1, !0)
            },
            v = (b, S) => {
                this.latestPointerEvent = b, this.latestPanInfo = S, this.stop(b, S), this.latestPointerEvent = null, this.latestPanInfo = null
            },
            m = () => {
                const {
                    dragSnapToOrigin: b
                } = this.getProps();
                (b || this.constraints) && this.startAnimation({
                    x: 0,
                    y: 0
                })
            },
            {
                dragSnapToOrigin: x
            } = this.getProps();
        this.panSession = new bg(l, {
            onSessionStart: h,
            onStart: d,
            onMove: p,
            onSessionEnd: v,
            resumeAnimation: m
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: x,
            distanceThreshold: o,
            contextWindow: xg(this.visualElement),
            element: this.visualElement.current
        })
    }
    stop(l, r) {
        const o = l || this.latestPointerEvent,
            c = r || this.latestPanInfo,
            h = this.isDragging;
        if (this.cancel(), !h || !c || !o) return;
        const {
            velocity: d
        } = c;
        this.startAnimation(d);
        const {
            onDragEnd: p
        } = this.getProps();
        p && zt.postRender(() => p(o, c))
    }
    cancel() {
        this.isDragging = !1;
        const {
            projection: l,
            animationState: r
        } = this.visualElement;
        l && (l.isAnimationBlocked = !1), this.endPanSession();
        const {
            dragPropagation: o
        } = this.getProps();
        !o && this.openDragLock && (this.openDragLock(), this.openDragLock = null), r && r.setActive("whileDrag", !1)
    }
    endPanSession() {
        this.panSession && this.panSession.end(), this.panSession = void 0
    }
    updateAxis(l, r, o) {
        const {
            drag: c
        } = this.getProps();
        if (!o || !Zs(l, c, this.currentDirection)) return;
        const h = this.getAxisMotionValue(l);
        let d = this.originPoint[l] + o[l];
        this.constraints && this.constraints[l] && (d = S5(d, this.constraints[l], this.elastic[l])), h.set(d)
    }
    resolveConstraints() {
        var h;
        const {
            dragConstraints: l,
            dragElastic: r
        } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (h = this.visualElement.projection) == null ? void 0 : h.layout, c = this.constraints;
        l && oi(l) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : l && o ? this.constraints = T5(o.layoutBox, l) : this.constraints = !1, this.elastic = N5(r), c !== this.constraints && !oi(l) && o && this.constraints && !this.hasMutatedConstraints && We(d => {
            this.constraints !== !1 && this.getAxisMotionValue(d) && (this.constraints[d] = M5(o.layoutBox[d], this.constraints[d]))
        })
    }
    resolveRefConstraints() {
        const {
            dragConstraints: l,
            onMeasureDragConstraints: r
        } = this.getProps();
        if (!l || !oi(l)) return !1;
        const o = l.current,
            {
                projection: c
            } = this.visualElement;
        if (!c || !c.layout) return !1;
        c.root && (c.root.scroll = void 0, c.root.updateScroll());
        const h = VS(o, c.root, this.visualElement.getTransformPagePoint());
        let d = A5(c.layout.layoutBox, h);
        if (r) {
            const p = r(OS(d));
            this.hasMutatedConstraints = !!p, p && (d = qy(p))
        }
        return d
    }
    startAnimation(l) {
        const {
            drag: r,
            dragMomentum: o,
            dragElastic: c,
            dragTransition: h,
            dragSnapToOrigin: d,
            onDragTransitionEnd: p
        } = this.getProps(), v = this.constraints || {}, m = We(x => {
            if (!Zs(x, r, this.currentDirection)) return;
            let b = v && v[x] || {};
            (d === !0 || d === x) && (b = {
                min: 0,
                max: 0
            });
            const S = c ? 200 : 1e6,
                j = c ? 40 : 1e7,
                M = {
                    type: "inertia",
                    velocity: o ? l[x] : 0,
                    bounceStiffness: S,
                    bounceDamping: j,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                    ...h,
                    ...b
                };
            return this.startAxisValueAnimation(x, M)
        });
        return Promise.all(m).then(p)
    }
    startAxisValueAnimation(l, r) {
        const o = this.getAxisMotionValue(l);
        return mc(this.visualElement, l), o.start(Gc(l, o, 0, r, this.visualElement, !1))
    }
    stopAnimation() {
        We(l => this.getAxisMotionValue(l).stop())
    }
    getAxisMotionValue(l) {
        const r = `_drag${l.toUpperCase()}`,
            c = this.visualElement.getProps()[r];
        return c || this.visualElement.getValue(l, this.visualElement.latestValues[l] ?? 0)
    }
    snapToCursor(l) {
        We(r => {
            const {
                drag: o
            } = this.getProps();
            if (!Zs(r, o, this.currentDirection)) return;
            const {
                projection: c
            } = this.visualElement, h = this.getAxisMotionValue(r);
            if (c && c.layout) {
                const {
                    min: d,
                    max: p
                } = c.layout.layoutBox[r], v = h.get() || 0;
                h.set(l[r] - Ot(d, p, .5) + v)
            }
        })
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const {
            drag: l,
            dragConstraints: r
        } = this.getProps(), {
            projection: o
        } = this.visualElement;
        if (!oi(r) || !o || !this.constraints) return;
        this.stopAnimation();
        const c = {
            x: 0,
            y: 0
        };
        We(d => {
            const p = this.getAxisMotionValue(d);
            if (p && this.constraints !== !1) {
                const v = p.get();
                c[d] = E5({
                    min: v,
                    max: v
                }, this.constraints[d])
            }
        });
        const {
            transformTemplate: h
        } = this.visualElement.getProps();
        this.visualElement.current.style.transform = h ? h({}, "") : "none", o.root && o.root.updateScroll(), o.updateLayout(), this.constraints = !1, this.resolveConstraints(), We(d => {
            if (!Zs(d, l, null)) return;
            const p = this.getAxisMotionValue(d),
                {
                    min: v,
                    max: m
                } = this.constraints[d];
            p.set(Ot(v, m, c[d]))
        }), this.visualElement.render()
    }
    addListeners() {
        if (!this.visualElement.current) return;
        w5.set(this.visualElement, this);
        const l = this.visualElement.current,
            r = yl(l, "pointerdown", m => {
                const {
                    drag: x,
                    dragListener: b = !0
                } = this.getProps(), S = m.target, j = S !== l && dS(S);
                x && b && !j && this.start(m)
            });
        let o;
        const c = () => {
                const {
                    dragConstraints: m
                } = this.getProps();
                oi(m) && m.current && (this.constraints = this.resolveRefConstraints(), o || (o = j5(l, m.current, () => this.scalePositionWithinConstraints())))
            },
            {
                projection: h
            } = this.visualElement,
            d = h.addEventListener("measure", c);
        h && !h.layout && (h.root && h.root.updateScroll(), h.updateLayout()), zt.read(c);
        const p = bl(window, "resize", () => this.scalePositionWithinConstraints()),
            v = h.addEventListener("didUpdate", (({
                delta: m,
                hasLayoutChanged: x
            }) => {
                this.isDragging && x && (We(b => {
                    const S = this.getAxisMotionValue(b);
                    S && (this.originPoint[b] += m[b].translate, S.set(S.get() + m[b].translate))
                }), this.visualElement.render())
            }));
        return () => {
            p(), r(), d(), v && v(), o && o()
        }
    }
    getProps() {
        const l = this.visualElement.getProps(),
            {
                drag: r = !1,
                dragDirectionLock: o = !1,
                dragPropagation: c = !1,
                dragConstraints: h = !1,
                dragElastic: d = Ec,
                dragMomentum: p = !0
            } = l;
        return {
            ...l,
            drag: r,
            dragDirectionLock: o,
            dragPropagation: c,
            dragConstraints: h,
            dragElastic: d,
            dragMomentum: p
        }
    }
}

function Dp(a) {
    let l = !0;
    return () => {
        if (l) {
            l = !1;
            return
        }
        a()
    }
}

function j5(a, l, r) {
    const o = L0(a, Dp(r)),
        c = L0(l, Dp(r));
    return () => {
        o(), c()
    }
}

function Zs(a, l, r) {
    return (l === !0 || l === a) && (r === null || r === a)
}

function C5(a, l = 10) {
    let r = null;
    return Math.abs(a.y) > l ? r = "y" : Math.abs(a.x) > l && (r = "x"), r
}
class R5 extends Pn {
    constructor(l) {
        super(l), this.removeGroupControls = He, this.removeListeners = He, this.controls = new D5(l)
    }
    mount() {
        const {
            dragControls: l
        } = this.node.getProps();
        l && (this.removeGroupControls = l.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || He
    }
    update() {
        const {
            dragControls: l
        } = this.node.getProps(), {
            dragControls: r
        } = this.node.prevProps || {};
        l !== r && (this.removeGroupControls(), l && (this.removeGroupControls = l.subscribe(this.controls)))
    }
    unmount() {
        this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession()
    }
}
const $u = a => (l, r) => {
    a && zt.update(() => a(l, r), !1, !0)
};
class O5 extends Pn {
    constructor() {
        super(...arguments), this.removePointerDownListener = He
    }
    onPointerDown(l) {
        this.session = new bg(l, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: xg(this.node)
        })
    }
    createPanHandlers() {
        const {
            onPanSessionStart: l,
            onPanStart: r,
            onPan: o,
            onPanEnd: c
        } = this.node.getProps();
        return {
            onSessionStart: $u(l),
            onStart: $u(r),
            onMove: $u(o),
            onEnd: (h, d) => {
                delete this.session, c && zt.postRender(() => c(h, d))
            }
        }
    }
    mount() {
        this.removePointerDownListener = yl(this.node.current, "pointerdown", l => this.onPointerDown(l))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(), this.session && this.session.end()
    }
}
let Iu = !1;
class z5 extends X.Component {
    componentDidMount() {
        const {
            visualElement: l,
            layoutGroup: r,
            switchLayoutGroup: o,
            layoutId: c
        } = this.props, {
            projection: h
        } = l;
        h && (r.group && r.group.add(h), o && o.register && c && o.register(h), Iu && h.root.didUpdate(), h.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }), h.setOptions({
            ...h.options,
            layoutDependency: this.props.layoutDependency,
            onExitComplete: () => this.safeToRemove()
        })), Is.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(l) {
        const {
            layoutDependency: r,
            visualElement: o,
            drag: c,
            isPresent: h
        } = this.props, {
            projection: d
        } = o;
        return d && (d.isPresent = h, l.layoutDependency !== r && d.setOptions({
            ...d.options,
            layoutDependency: r
        }), Iu = !0, c || l.layoutDependency !== r || r === void 0 || l.isPresent !== h ? d.willUpdate() : this.safeToRemove(), l.isPresent !== h && (h ? d.promote() : d.relegate() || zt.postRender(() => {
            const p = d.getStack();
            (!p || !p.members.length) && this.safeToRemove()
        }))), null
    }
    componentDidUpdate() {
        const {
            visualElement: l,
            layoutAnchor: r
        } = this.props, {
            projection: o
        } = l;
        o && (o.options.layoutAnchor = r, o.root.didUpdate(), Zc.postRender(() => {
            !o.currentAnimation && o.isLead() && this.safeToRemove()
        }))
    }
    componentWillUnmount() {
        const {
            visualElement: l,
            layoutGroup: r,
            switchLayoutGroup: o
        } = this.props, {
            projection: c
        } = l;
        Iu = !0, c && (c.scheduleCheckAfterUnmount(), r && r.group && r.group.remove(c), o && o.deregister && o.deregister(c))
    }
    safeToRemove() {
        const {
            safeToRemove: l
        } = this.props;
        l && l()
    }
    render() {
        return null
    }
}

function Tg(a) {
    const [l, r] = HT(), o = X.useContext(Up);
    return y.jsx(z5, {
        ...a,
        layoutGroup: o,
        switchLayoutGroup: X.useContext(gg),
        isPresent: l,
        safeToRemove: r
    })
}
const _5 = {
    pan: {
        Feature: O5
    },
    drag: {
        Feature: R5,
        ProjectionNode: ug,
        MeasureLayout: Tg
    }
};

function jp(a, l, r) {
    const {
        props: o
    } = a;
    a.animationState && o.whileHover && a.animationState.setActive("whileHover", r === "Start");
    const c = "onHover" + r,
        h = o[c];
    h && zt.postRender(() => h(l, El(l)))
}
class V5 extends Pn {
    mount() {
        const {
            current: l
        } = this.node;
        l && (this.unmount = rS(l, (r, o) => (jp(this.node, o, "Start"), c => jp(this.node, c, "End"))))
    }
    unmount() {}
}
class k5 extends Pn {
    constructor() {
        super(...arguments), this.isActive = !1
    }
    onFocus() {
        let l = !1;
        try {
            l = this.node.current.matches(":focus-visible")
        } catch {
            l = !0
        }!l || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
    }
    mount() {
        this.unmount = Sl(bl(this.node.current, "focus", () => this.onFocus()), bl(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}

function Cp(a, l, r) {
    const {
        props: o
    } = a;
    if (a.current instanceof HTMLButtonElement && a.current.disabled) return;
    a.animationState && o.whileTap && a.animationState.setActive("whileTap", r === "Start");
    const c = "onTap" + (r === "End" ? "" : r),
        h = o[c];
    h && zt.postRender(() => h(l, El(l)))
}
class L5 extends Pn {
    mount() {
        const {
            current: l
        } = this.node;
        if (!l) return;
        const {
            globalTapTarget: r,
            propagate: o
        } = this.node.props;
        this.unmount = mS(l, (c, h) => (Cp(this.node, h, "Start"), (d, {
            success: p
        }) => Cp(this.node, d, p ? "End" : "Cancel")), {
            useGlobalTarget: r,
            stopPropagation: (o == null ? void 0 : o.tap) === !1
        })
    }
    unmount() {}
}
const Mc = new WeakMap,
    tc = new WeakMap,
    U5 = a => {
        const l = Mc.get(a.target);
        l && l(a)
    },
    B5 = a => {
        a.forEach(U5)
    };

function H5({
    root: a,
    ...l
}) {
    const r = a || document;
    tc.has(r) || tc.set(r, {});
    const o = tc.get(r),
        c = JSON.stringify(l);
    return o[c] || (o[c] = new IntersectionObserver(B5, {
        root: a,
        ...l
    })), o[c]
}

function Y5(a, l, r) {
    const o = H5(l);
    return Mc.set(a, r), o.observe(a), () => {
        Mc.delete(a), o.unobserve(a)
    }
}
const q5 = {
    some: 0,
    all: 1
};
class G5 extends Pn {
    constructor() {
        super(...arguments), this.hasEnteredView = !1, this.isInView = !1
    }
    startObserver() {
        var v;
        (v = this.stopObserver) == null || v.call(this);
        const {
            viewport: l = {}
        } = this.node.getProps(), {
            root: r,
            margin: o,
            amount: c = "some",
            once: h
        } = l, d = {
            root: r ? r.current : void 0,
            rootMargin: o,
            threshold: typeof c == "number" ? c : q5[c]
        }, p = m => {
            const {
                isIntersecting: x
            } = m;
            if (this.isInView === x || (this.isInView = x, h && !x && this.hasEnteredView)) return;
            x && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", x);
            const {
                onViewportEnter: b,
                onViewportLeave: S
            } = this.node.getProps(), j = x ? b : S;
            j && j(m)
        };
        this.stopObserver = Y5(this.node.current, d, p)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u") return;
        const {
            props: l,
            prevProps: r
        } = this.node;
        ["amount", "margin", "root"].some(X5(l, r)) && this.startObserver()
    }
    unmount() {
        var l;
        (l = this.stopObserver) == null || l.call(this), this.hasEnteredView = !1, this.isInView = !1
    }
}

function X5({
    viewport: a = {}
}, {
    viewport: l = {}
} = {}) {
    return r => a[r] !== l[r]
}
const K5 = {
        inView: {
            Feature: G5
        },
        tap: {
            Feature: L5
        },
        focus: {
            Feature: k5
        },
        hover: {
            Feature: V5
        }
    },
    Z5 = {
        layout: {
            ProjectionNode: ug,
            MeasureLayout: Tg
        }
    },
    Q5 = {
        ...y5,
        ...K5,
        ..._5,
        ...Z5
    },
    J5 = f5(Q5, d5),
    si = J5;

function F5({
    config: a,
    onExploreClick: l
}) {
    const [r, o] = X.useState(!1), c = X.useRef(null);
    return X.useEffect(() => {
        c.current && c.current.play().catch(() => {})
    }, [a.heroVideoUrl]), y.jsxs("section", {
        id: "hero",
        className: "relative w-full h-[85vh] sm:h-screen bg-black overflow-hidden flex items-center justify-center",
        children: [r ? y.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-br from-neutral-950 via-slate-900 to-neutral-950 opacity-85"
        }) : y.jsx("video", {
            ref: c,
            src: a.heroVideoUrl,
            autoPlay: !0,
            loop: !0,
            muted: !0,
            playsInline: !0,
            onError: () => o(!0),
            className: "absolute inset-0 w-full h-full object-cover opacity-60 scale-105 pointer-events-none transition-opacity duration-1000"
        }), y.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-t from-[#07080b] via-transparent to-black/40 z-10"
        }), y.jsx("div", {
            className: "absolute inset-0 bg-black/45 z-10"
        }), y.jsx("div", {
            className: "absolute inset-0 radial-vignette pointer-events-none z-10"
        }), y.jsx("div", {
            className: "absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-10"
        }), y.jsx("div", {
            className: "absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none z-10"
        }), y.jsx("div", {
            className: "absolute inset-0 artistic-radial-grid pointer-events-none opacity-40 z-10"
        }), y.jsx("span", {
            className: "absolute -top-10 left-4 text-[130px] sm:text-[180px] font-black text-white/[0.03] select-none leading-none tracking-tighter italic pointer-events-none z-10",
            children: ""
        }), y.jsx("div", {
            className: "absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none z-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"
        }), y.jsxs("div", {
            className: "relative z-20 max-w-5xl mx-auto px-6 sm:px-12 text-center flex flex-col items-center justify-center h-full pt-16",
            children: [y.jsxs(si.div, {
                initial: {
                    opacity: 0,
                    y: -20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .8
                },            
            }), y.jsxs(si.div, {
                initial: {
                    opacity: 0,
                    filter: "blur(10px)"
                },
                animate: {
                    opacity: 1,
                    filter: "blur(0px)"
                },
                transition: {
                    duration: 1,
                    delay: .2
                },
                className: "space-y-4",
                children: [y.jsx("span", {
                    className: "text-[10px] uppercase tracking-[0.4em] text-neutral-500 block mb-2 font-mono",
                    children: ""
                }), y.jsxs("h1", {
                    className: "text-5xl sm:text-7xl md:text-8xl font-black italic tracking-tighter leading-none text-white select-none uppercase",
                    children: [a.artistName.split(" ")[0], " ", y.jsx("span", {
                        className: "text-transparent text-stroke",
                        children: a.artistName.split(" ").slice(1).join(" ") || "BOONMEE"
                    })]
                })]
            }), y.jsx(si.p, {
                initial: {
                    opacity: 0,
                    y: 15
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .8,
                    delay: .4
                },
                className: "text-neutral-400 font-mono text-xs sm:text-sm tracking-[0.3em] mt-6 uppercase font-medium",
                children: a.title
            }), y.jsx(si.p, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    duration: 1,
                    delay: .6
                },
                className: "text-neutral-400 max-w-xl text-xs sm:text-sm md:text-base font-sans font-light leading-relaxed mt-6 text-center",
                children: a.bio
            }), y.jsxs(si.div, {
                initial: {
                    opacity: 0,
                    scale: .95
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                transition: {
                    duration: .8,
                    delay: .7
                },
                className: "flex flex-wrap justify-center items-center gap-4 sm:gap-8 mt-8 border-y border-neutral-800/40 py-3.5 w-full max-w-xl text-neutral-500",
                children: [y.jsxs("div", {
                    className: "text-center font-mono text-[9px] sm:text-[10px] tracking-[0.2em] uppercase",
                    children: ["EXP // ", y.jsx("span", {
                        className: "text-neutral-300 font-bold",
                        children: a.experience
                    })]
                }), y.jsx("div", {
                    className: "h-3 w-[1px] bg-neutral-800 hidden sm:block"
                }), y.jsxs("div", {
                    className: "text-center font-mono text-[9px] sm:text-[10px] tracking-[0.2em] uppercase",
                    children: ["", y.jsx("span", {
                        className: "text-neutral-300 font-bold",
                        children: "NUKE"
                    })]
                })]
            }), y.jsxs(si.div, {
                initial: {
                    opacity: 0,
                    y: 25
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .8,
                    delay: .8
                },
                className: "flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 w-full sm:w-auto",
                children: [y.jsxs("a", {
                    href: a.youtubeUrl,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    id: "youtube-reel-button",
                    className: "group relative flex items-center justify-center gap-3 bg-white hover:bg-neutral-200 text-black font-sans font-bold text-xs tracking-[0.2em] uppercase px-10 py-5 rounded-full cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto",
                    children: [y.jsx(Dc, {
                        className: "h-4.5 w-4.5 text-black fill-current"
                    }), y.jsx("span", {
                        children: "Watch Reel on YouTube"
                    })]
                }), y.jsxs("button", {
                    onClick: l,
                    className: "group flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-800/80 border border-neutral-800 hover:border-neutral-700 text-neutral-400 hover:text-white font-sans font-bold text-xs tracking-[0.2em] uppercase px-8 py-5 rounded-full cursor-pointer transition-all duration-300 w-full sm:w-auto",
                    children: [y.jsx("span", {
                        children: "Explore My Works"
                    }), y.jsx(rx, {
                        className: "h-3.5 w-3.5 text-neutral-500 group-hover:text-white transition-colors animate-bounce"
                    })]
                }), ]
            })]
        }), y.jsxs("div", {
            className: "absolute bottom-6 left-6 right-6 z-20 flex justify-between items-center text-[10px] font-mono text-neutral-500 pointer-events-none hidden md:flex",
            children: [y.jsxs("div", {
                className: "flex items-center gap-2",
                children: [y.jsx("span", {
                    className: ""
                }), y.jsx("span", {
                    children: ""
                })]
            }), y.jsx("div", {
                children: y.jsx("span", {
                    children: ""
                })
            })]
        })]
    })
}

function Rp({
    beforeImage: a,
    afterImage: l,
    beforeLabel: r = "",
    afterLabel: o = "",
    heightClass: c = "aspect-[16/9] w-full",
    projectId: h
}) {
    var G;
    const [d, p] = X.useState(50), [v, m] = X.useState(!1), x = X.useRef(null), b = X.useCallback(H => {
        if (!x.current) return;
        const q = x.current.getBoundingClientRect(),
            $ = H - q.left,
            at = Math.max(0, Math.min(100, $ / q.width * 100));
        p(at)
    }, []), S = X.useCallback(H => {
        v && H.touches.length > 0 && b(H.touches[0].clientX)
    }, [v, b]), j = X.useCallback(H => {
        v && b(H.clientX)
    }, [v, b]), M = X.useCallback(() => {
        m(!1)
    }, []);
    X.useEffect(() => (v && (window.addEventListener("mousemove", j), window.addEventListener("mouseup", M), window.addEventListener("touchmove", S), window.addEventListener("touchend", M)), () => {
        window.removeEventListener("mousemove", j), window.removeEventListener("mouseup", M), window.removeEventListener("touchmove", S), window.removeEventListener("touchend", M)
    }), [v, j, M, S]);
    const z = H => {
            H.preventDefault(), m(!0)
        },
        B = H => {
            m(!0)
        },
        k = H => {
            v || b(H.clientX)
        };
    return y.jsxs("div", {
        id: `slider-${h||"default"}`,
        ref: x,
        className: `relative select-none overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 shadow-2xl cursor-ew-resize ${c}`,
        onClick: k,
        children: [y.jsx("img", {
            src: l,
            alt: "",
            className: "absolute inset-0 h-full w-full object-cover pointer-events-none",
            referrerPolicy: "no-referrer"
        }), y.jsx("div", {
            className: "absolute inset-0 overflow-hidden pointer-events-none",
            style: {
                width: `${d}%`
            },
            children: y.jsx("img", {
                src: a,
                alt: "",
                className: "absolute inset-0 h-full w-full object-cover max-w-none",
                style: {
                    width: ((G = x.current) == null ? void 0 : G.getBoundingClientRect().width) || "100vw"
                },
                referrerPolicy: "no-referrer"
            })
        }),
        y.jsx("div", {
            className: "absolute inset-y-0 z-20 w-[2px] bg-sky-500 cursor-ew-resize group",
            style: {
                left: `${d}%`
            },
            onMouseDown: z,
            onTouchStart: B,
            children: y.jsx("div", {
                className: "absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900 border-2 border-sky-500 text-sky-400 shadow-xl transition-all duration-150 group-hover:scale-110 active:scale-95",
                children: y.jsxs("div", {
                    className: "flex gap-0.5 items-center justify-center",
                    children: [y.jsx("span", {
                        className: "text-[10px] font-bold",
                        children: "◀"
                    }), y.jsx("span", {
                        className: "text-[10px] font-bold",
                        children: "▶"
                    })]
                })
            })
        }), ]
    })
}

function P5({
    backgroundImage: a,
    projectId: l
}) {
    const [r, o] = X.useState(!0), [c, h] = X.useState(!0), [d, p] = X.useState(.24), [v, m] = X.useState(48), [x, b] = X.useState(35), [S, j] = X.useState({
        x: 10.4,
        y: -2.3,
        z: 25.8
    }), [M, z] = X.useState([]), B = X.useRef(null), k = X.useRef(null);
    X.useEffect(() => {
        z([{
            id: 1,
            x: 25,
            y: 72,
            status: "keyframe",
            label: "P_Road_Edge_L",
            driftX: .1,
            driftY: .05
        }, {
            id: 2,
            x: 73,
            y: 75,
            status: "solved",
            label: "P_Road_Edge_R",
            driftX: -.08,
            driftY: .04
        }, {
            id: 3,
            x: 45,
            y: 68,
            status: "solved",
            label: "P_Center_Dashed",
            driftX: 0,
            driftY: .08
        }, {
            id: 4,
            x: 15,
            y: 48,
            status: "solved",
            label: "P_Horizon_L",
            driftX: .02,
            driftY: .01
        }, {
            id: 5,
            x: 82,
            y: 52,
            status: "solved",
            label: "P_Horizon_R",
            driftX: -.01,
            driftY: .02
        }, {
            id: 6,
            x: 38,
            y: 84,
            status: "lost",
            label: "P_Asphalt_Noise",
            driftX: .15,
            driftY: .12
        }, {
            id: 7,
            x: 58,
            y: 62,
            status: "solved",
            label: "P_Crack_01",
            driftX: -.04,
            driftY: .06
        }, {
            id: 8,
            x: 50,
            y: 46,
            status: "keyframe",
            label: "P_Horizon_Mid",
            driftX: 0,
            driftY: .01
        }, {
            id: 9,
            x: 32,
            y: 55,
            status: "solved",
            label: "P_Mountain_Peak_1",
            driftX: .01,
            driftY: -.01
        }, {
            id: 10,
            x: 67,
            y: 53,
            status: "solved",
            label: "P_Mountain_Peak_2",
            driftX: -.01,
            driftY: -.01
        }, {
            id: 11,
            x: 48,
            y: 92,
            status: "solved",
            label: "P_Fore_Asphalt",
            driftX: -.05,
            driftY: .18
        }, {
            id: 12,
            x: 88,
            y: 81,
            status: "keyframe",
            label: "P_Foreground_Bush",
            driftX: -.12,
            driftY: .14
        }])
    }, []), X.useEffect(() => {
        let q = Date.now();
        const $ = () => {
            if (!r) {
                k.current = requestAnimationFrame($);
                return
            }
            const at = Date.now(),
                Z = (at - q) / 1e3;
            q = at, j(J => ({
                x: Number((J.x + Math.sin(at / 1500) * Z * .4).toFixed(2)),
                y: Number((J.y + Math.cos(at / 1e3) * Z * .2).toFixed(2)),
                z: Number((J.z + Math.sin(at / 2e3) * Z * .1).toFixed(2))
            })), p(J => {
                const rt = (Math.random() - .5) * .02;
                return Number(Math.max(.18, Math.min(.29, J + rt)).toFixed(4))
            }), z(J => J.map(rt => {
                let Y = Math.sin(at / 800 + rt.id) * rt.driftX * .8,
                    I = Math.cos(at / 600 + rt.id) * rt.driftY * .8;
                rt.status === "lost" && (Y += (Math.random() - .5) * .25, I += (Math.random() - .5) * .25);
                let tt = rt.x + Y,
                    st = rt.y + I;
                return (tt < 5 || tt > 95) && (tt = rt.x - Y), (st < 5 || st > 95) && (st = rt.y - I), {
                    ...rt,
                    x: tt,
                    y: st
                }
            })), k.current = requestAnimationFrame($)
        };
        return r && (k.current = requestAnimationFrame($)), () => {
            k.current && cancelAnimationFrame(k.current)
        }
    }, [r]);
    const G = () => {
            o(!r)
        },
        H = () => {
            o(!1), setTimeout(() => {
                p(.18 + Math.random() * .05), m(40 + Math.floor(Math.random() * 15)), b([28, 35, 50, 85][Math.floor(Math.random() * 4)]), o(!0)
            }, 600)
        };
        return y.jsxs("div", {
            id: `tracking-demo-${l||"default"}`,
            ref: B,
            className: "relative w-full aspect-[16/9] bg-neutral-950 border border-neutral-800 rounded-xl overflow-hidden select-none",
            children: y.jsx("video", {
                src: a,
                autoPlay: true,
                muted: true,
                loop: true,
                playsInline: true,
                className: "w-full h-full object-cover"
            })
        })
        }

function W5({
    isOpen: a,
    onClose: l,
    config: r,
    onSaveConfig: o,
    projects: c,
    onSaveProjects: h,
    onReset: d
}) {
    const [p, v] = X.useState("profile"), [m, x] = X.useState({
        ...r
    }), [b, S] = X.useState([...c]), [j, M] = X.useState(!1);
    if (!a) return null;
    const z = Y => {
            const {
                name: I,
                value: tt
            } = Y.target;
            x(st => ({
                ...st,
                [I]: tt
            }))
        },
        B = Y => {
            x(I => ({
                ...I,
                heroVideoUrl: Y
            }))
        },
        k = (Y, I, tt) => {
            S(st => st.map(ut => ut.id === Y ? {
                ...ut,
                [I]: tt
            } : ut))
        },
        G = (Y, I, tt) => {
            const st = b.find(Mt => Mt.id === Y);
            if (!st) return;
            const ut = [...st.software];
            ut[I] = tt, k(Y, "software", ut)
        },
        H = Y => {
            const I = b.find(st => st.id === Y);
            if (!I) return;
            const tt = [...I.software, "New Tool"];
            k(Y, "software", tt)
        },
        q = (Y, I) => {
            const tt = b.find(ut => ut.id === Y);
            if (!tt) return;
            const st = tt.software.filter((ut, Mt) => Mt !== I);
            k(Y, "software", st)
        },
        $ = (Y, I, tt) => {
            const st = b.find(Mt => Mt.id === Y);
            if (!st || !st.breakdownSteps) return;
            const ut = [...st.breakdownSteps];
            ut[I] = tt, k(Y, "breakdownSteps", ut)
        },
        at = Y => {
            const I = b.find(ut => ut.id === Y);
            if (!I) return;
            const st = [...I.breakdownSteps || [], "Added breakdown step detail"];
            k(Y, "breakdownSteps", st)
        },
        Z = (Y, I) => {
            const tt = b.find(ut => ut.id === Y);
            if (!tt || !tt.breakdownSteps) return;
            const st = tt.breakdownSteps.filter((ut, Mt) => Mt !== I);
            k(Y, "breakdownSteps", st)
        },
        J = () => {
            o(m), h(b), M(!0), setTimeout(() => {
                M(!1)
            }, 2500)
        },
        rt = () => {
            window.confirm("Are you sure you want to reset all customizations back to defaults?") && (d(), l())
        };
    return y.jsxs("div", {
        className: "fixed inset-0 z-50 flex justify-end",
        children: [y.jsx("div", {
            className: "absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity",
            onClick: l
        }), y.jsxs("div", {
            className: "relative w-full max-w-lg bg-[#0c0d12] border-l border-neutral-900 h-full flex flex-col shadow-2xl z-10 overflow-hidden",
            children: [y.jsxs("div", {
                className: "px-6 py-5 border-b border-neutral-900 flex items-center justify-between bg-neutral-950",
                children: [y.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [y.jsx(Lp, {
                        className: "h-5 w-5 text-sky-400"
                    }), y.jsxs("div", {
                        children: [y.jsx("h2", {
                            className: "text-sm font-sans font-black tracking-wider text-white uppercase",
                            children: "PORTFOLIO EDITOR"
                        }), y.jsx("p", {
                            className: "text-[10px] font-mono text-neutral-500",
                            children: "TAILOR THE DEMO AS YOUR PERSONAL SITE"
                        })]
                    })]
                }), y.jsx("button", {
                    onClick: l,
                    className: "p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white cursor-pointer",
                    children: y.jsx(Fx, {
                        className: "h-4 w-4"
                    })
                })]
            }), y.jsxs("div", {
                className: "grid grid-cols-3 border-b border-neutral-900 text-xs font-mono bg-neutral-950/40",
                children: [y.jsx("button", {
                    onClick: () => v("profile"),
                    className: `py-3.5 border-b-2 text-center tracking-wider transition-all cursor-pointer ${p==="profile"?"border-sky-500 text-sky-400 bg-sky-950/10":"border-transparent text-neutral-500 hover:text-neutral-300"}`,
                    children: y.jsxs("span", {
                        className: "flex justify-center items-center gap-1.5",
                        children: [y.jsx(Zx, {
                            className: "h-3.5 w-3.5"
                        }), "BIOGRAPHY"]
                    })
                }), y.jsx("button", {
                    onClick: () => v("reel"),
                    className: `py-3.5 border-b-2 text-center tracking-wider transition-all cursor-pointer ${p==="reel"?"border-red-500 text-red-400 bg-red-950/10":"border-transparent text-neutral-500 hover:text-neutral-300"}`,
                    children: y.jsxs("span", {
                        className: "flex justify-center items-center gap-1.5",
                        children: [y.jsx(Vp, {
                            className: "h-3.5 w-3.5"
                        }), "SHOWREEL"]
                    })
                }), y.jsx("button", {
                    onClick: () => v("projects"),
                    className: `py-3.5 border-b-2 text-center tracking-wider transition-all cursor-pointer ${p==="projects"?"border-emerald-500 text-emerald-400 bg-emerald-950/10":"border-transparent text-neutral-500 hover:text-neutral-300"}`,
                    children: y.jsxs("span", {
                        className: "flex justify-center items-center gap-1.5",
                        children: [y.jsx(m0, {
                            className: "h-3.5 w-3.5"
                        }), "BREAKDOWNS"]
                    })
                })]
            }), y.jsxs("div", {
                className: "flex-1 overflow-y-auto p-6 space-y-6",
                children: [p === "profile" && y.jsxs("div", {
                    className: "space-y-5",
                    children: [y.jsxs("div", {
                        children: [y.jsx("label", {
                            className: "block text-[10px] font-mono tracking-wider text-neutral-400 uppercase mb-1.5",
                            children: "Artist Full Name"
                        }), y.jsx("input", {
                            type: "text",
                            name: "artistName",
                            value: m.artistName,
                            onChange: z,
                            className: "w-full bg-neutral-900/60 border border-neutral-800 rounded px-3 py-2 text-sm text-neutral-100 font-sans focus:outline-none focus:border-sky-500"
                        })]
                    }), y.jsxs("div", {
                        children: [y.jsx("label", {
                            className: "block text-[10px] font-mono tracking-wider text-neutral-400 uppercase mb-1.5",
                            children: "Professional Title"
                        }), y.jsx("input", {
                            type: "text",
                            name: "title",
                            value: m.title,
                            onChange: z,
                            className: "w-full bg-neutral-900/60 border border-neutral-800 rounded px-3 py-2 text-sm text-neutral-100 font-sans focus:outline-none focus:border-sky-500"
                        })]
                    }), y.jsxs("div", {
                        children: [y.jsx("label", {
                            className: "block text-[10px] font-mono tracking-wider text-neutral-400 uppercase mb-1.5",
                            children: "Industry Experience / Stat"
                        }), y.jsx("input", {
                            type: "text",
                            name: "experience",
                            value: m.experience,
                            onChange: z,
                            placeholder: "e.g. 6+ Years in Feature VFX",
                            className: "w-full bg-neutral-900/60 border border-neutral-800 rounded px-3 py-2 text-sm text-neutral-100 font-sans focus:outline-none focus:border-sky-500"
                        })]
                    }), y.jsxs("div", {
                        children: [y.jsx("label", {
                            className: "block text-[10px] font-mono tracking-wider text-neutral-400 uppercase mb-1.5",
                            children: "Artist Bio / Pitch Description"
                        }), y.jsx("textarea", {
                            name: "bio",
                            rows: 4,
                            value: m.bio,
                            onChange: z,
                            className: "w-full bg-neutral-900/60 border border-neutral-800 rounded px-3 py-2 text-xs text-neutral-100 font-sans leading-relaxed focus:outline-none focus:border-sky-500 resize-none"
                        })]
                    }), y.jsxs("div", {
                        className: "border-t border-neutral-900 pt-5 space-y-4",
                        children: [y.jsxs("div", {
                            className: "text-[10px] font-mono tracking-wider text-neutral-400 uppercase flex items-center gap-1",
                            children: [y.jsx(jx, {
                                className: "h-3.5 w-3.5 text-neutral-500"
                            }), "CONTACTS & PROFESSIONAL PROFILE LINKS"]
                        }), y.jsxs("div", {
                            children: [y.jsx("label", {
                                className: "block text-[9px] font-mono text-neutral-500 mb-1",
                                children: "Direct Email Address"
                            }), y.jsx("input", {
                                type: "email",
                                name: "email",
                                value: m.email,
                                onChange: z,
                                className: "w-full bg-neutral-900/60 border border-neutral-800 rounded px-3 py-2 text-xs text-neutral-200 font-mono focus:outline-none focus:border-sky-500"
                            })]
                        }), y.jsxs("div", {
                            children: [y.jsx("label", {
                                className: "block text-[9px] font-mono text-neutral-500 mb-1",
                                children: "LinkedIn URL"
                            }), y.jsx("input", {
                                type: "text",
                                name: "linkedin",
                                value: m.linkedin,
                                onChange: z,
                                className: "w-full bg-neutral-900/60 border border-neutral-800 rounded px-3 py-2 text-xs text-neutral-200 font-mono focus:outline-none focus:border-sky-500"
                            })]
                        }), y.jsxs("div", {
                            children: [y.jsx("label", {
                                className: "block text-[9px] font-mono text-neutral-500 mb-1",
                                children: "ArtStation URL"
                            }), y.jsx("input", {
                                type: "text",
                                name: "artstation",
                                value: m.artstation,
                                onChange: z,
                                className: "w-full bg-neutral-900/60 border border-neutral-800 rounded px-3 py-2 text-xs text-neutral-200 font-mono focus:outline-none focus:border-sky-500"
                            })]
                        })]
                    })]
                }), p === "reel" && y.jsxs("div", {
                    className: "space-y-5",
                    children: [y.jsxs("div", {
                        children: [y.jsx("label", {
                            className: "block text-[10px] font-mono tracking-wider text-neutral-400 uppercase mb-1.5",
                            children: "VFX Demo Reel Link (YouTube / Vimeo)"
                        }), y.jsx("input", {
                            type: "text",
                            name: "youtubeUrl",
                            value: m.youtubeUrl,
                            onChange: z,
                            className: "w-full bg-neutral-900/60 border border-neutral-800 rounded px-3 py-2 text-sm text-neutral-100 font-sans focus:outline-none focus:border-red-500",
                            placeholder: "https://youtube.com/..."
                        }), y.jsx("p", {
                            className: "text-[9px] font-mono text-neutral-500 mt-1",
                            children: "Clicking the YouTube button in the header and hero will direct viewers here."
                        })]
                    }), y.jsxs("div", {
                        className: "border-t border-neutral-900 pt-5 space-y-4",
                        children: [y.jsxs("div", {
                            className: "text-[10px] font-mono tracking-wider text-neutral-400 uppercase flex items-center gap-1.5",
                            children: [y.jsx(m0, {
                                className: "h-3.5 w-3.5 text-neutral-400"
                            }), "BACKGROUND SHOWREEL LOOP"]
                        }), y.jsxs("div", {
                            children: [y.jsx("label", {
                                className: "block text-[9px] font-mono text-neutral-500 mb-2",
                                children: "Select a cinematic stock looping background:"
                            }), y.jsx("div", {
                                className: "grid grid-cols-2 gap-2",
                                children: Wx.map(Y => {
                                    const I = m.heroVideoUrl === Y.url;
                                    return y.jsx("button", {
                                        type: "button",
                                        onClick: () => B(Y.url),
                                        className: `px-3 py-2 rounded border text-left font-mono text-[10px] transition-all cursor-pointer ${I?"bg-sky-950/40 border-sky-500 text-sky-400 font-bold":"bg-neutral-900/50 border-neutral-800 text-neutral-400 hover:border-neutral-700 hover:text-neutral-300"}`,
                                        children: Y.name
                                    }, Y.name)
                                })
                            })]
                        }), y.jsxs("div", {
                            children: [y.jsx("label", {
                                className: "block text-[9px] font-mono text-neutral-500 mb-1",
                                children: "Or input your own direct MP4 Video URL:"
                            }), y.jsx("input", {
                                type: "text",
                                name: "heroVideoUrl",
                                value: m.heroVideoUrl,
                                onChange: z,
                                className: "w-full bg-neutral-900/60 border border-neutral-800 rounded px-3 py-2 text-xs text-neutral-200 font-mono focus:outline-none focus:border-sky-500",
                                placeholder: "..assets/vfxreel2026_low.mp4"
                            }), y.jsx("p", {
                                className: "text-[9px] font-mono text-neutral-500 mt-1",
                                children: "Ensure it points directly to an .mp4 file. Self-hosting or direct asset storage link is recommended for HTML5 players."
                            })]
                        })]
                    })]
                }), p === "projects" && y.jsxs("div", {
                    className: "space-y-6",
                    children: [y.jsx("div", {
                        className: "p-3 bg-neutral-950 border border-neutral-900 rounded text-[10px] font-mono text-neutral-400 leading-normal",
                        children: "Each of the four core requested portfolio categories is configured here. Modify descriptions, client names, roles, or software tags dynamically."
                    }), b.map(Y => {
                        let I = "text-sky-400";
                        return Y.category === "tracking" && (I = "text-amber-400"), Y.category === "paint" && (I = "text-emerald-400"), Y.category === "other" && (I = "text-indigo-400"), y.jsxs("div", {
                            className: "border border-neutral-800/80 bg-neutral-950/30 rounded-xl p-4 space-y-4",
                            children: [y.jsxs("div", {
                                className: "flex items-center justify-between border-b border-neutral-900 pb-2",
                                children: [y.jsx("h3", {
                                    className: "font-sans font-bold text-xs text-white uppercase",
                                    children: Y.title
                                }), y.jsx("span", {
                                    className: `text-[9px] font-mono tracking-widest font-bold uppercase ${I}`,
                                    children: Y.category
                                })]
                            }), y.jsxs("div", {
                                className: "grid grid-cols-2 gap-3",
                                children: [y.jsxs("div", {
                                    children: [y.jsx("label", {
                                        className: "block text-[8px] font-mono text-neutral-500 mb-1",
                                        children: "Role on Project"
                                    }), y.jsx("input", {
                                        type: "text",
                                        value: Y.role,
                                        onChange: tt => k(Y.id, "role", tt.target.value),
                                        className: "w-full bg-neutral-900/80 border border-neutral-800 rounded px-2.5 py-1.5 text-xs text-neutral-200"
                                    })]
                                }), y.jsxs("div", {
                                    children: [y.jsx("label", {
                                        className: "block text-[8px] font-mono text-neutral-500 mb-1",
                                        children: "Client / Production Co."
                                    }), y.jsx("input", {
                                        type: "text",
                                        value: Y.client || "",
                                        onChange: tt => k(Y.id, "client", tt.target.value),
                                        className: "w-full bg-neutral-900/80 border border-neutral-800 rounded px-2.5 py-1.5 text-xs text-neutral-200"
                                    })]
                                })]
                            }), y.jsxs("div", {
                                children: [y.jsx("label", {
                                    className: "block text-[8px] font-mono text-neutral-500 mb-1",
                                    children: "Breakdown Description"
                                }), y.jsx("textarea", {
                                    value: Y.description,
                                    rows: 3,
                                    onChange: tt => k(Y.id, "description", tt.target.value),
                                    className: "w-full bg-neutral-900/80 border border-neutral-800 rounded px-2.5 py-1.5 text-xs text-neutral-200 resize-none leading-relaxed"
                                })]
                            }), y.jsxs("div", {
                                children: [y.jsxs("div", {
                                    className: "flex items-center justify-between mb-1",
                                    children: [y.jsx("label", {
                                        className: "block text-[8px] font-mono text-neutral-500",
                                        children: "Software Pipeline Tools"
                                    }), y.jsx("button", {
                                        type: "button",
                                        onClick: () => H(Y.id),
                                        className: "text-[8px] font-mono text-sky-400 flex items-center gap-0.5 hover:underline cursor-pointer",
                                        children: "+ ADD TOOL"
                                    })]
                                }), y.jsx("div", {
                                    className: "flex flex-wrap gap-1.5 p-2 bg-neutral-900/30 border border-neutral-800/60 rounded",
                                    children: Y.software.map((tt, st) => y.jsxs("div", {
                                        className: "flex items-center gap-1 bg-neutral-900 px-2 py-1 rounded text-[9px] font-mono border border-neutral-800",
                                        children: [y.jsx("input", {
                                            type: "text",
                                            value: tt,
                                            onChange: ut => G(Y.id, st, ut.target.value),
                                            className: "bg-transparent border-none text-neutral-200 w-16 focus:outline-none"
                                        }), y.jsx("button", {
                                            type: "button",
                                            onClick: () => q(Y.id, st),
                                            className: "text-neutral-500 hover:text-red-400 cursor-pointer text-[10px]",
                                            children: "×"
                                        })]
                                    }, st))
                                })]
                            }), y.jsxs("div", {
                                children: [y.jsxs("div", {
                                    className: "flex items-center justify-between mb-1.5",
                                    children: [y.jsx("label", {
                                        className: "block text-[8px] font-mono text-neutral-500",
                                        children: "VFX Pipeline Steps"
                                    }), y.jsx("button", {
                                        type: "button",
                                        onClick: () => at(Y.id),
                                        className: "text-[8px] font-mono text-sky-400 flex items-center gap-0.5 hover:underline cursor-pointer",
                                        children: "+ ADD PIPELINE STEP"
                                    })]
                                }), y.jsx("div", {
                                    className: "space-y-1.5",
                                    children: (Y.breakdownSteps || []).map((tt, st) => y.jsxs("div", {
                                        className: "flex gap-2 items-center",
                                        children: [y.jsxs("span", {
                                            className: "text-[10px] font-mono text-neutral-600",
                                            children: ["0", st + 1, "."]
                                        }), y.jsx("input", {
                                            type: "text",
                                            value: tt,
                                            onChange: ut => $(Y.id, st, ut.target.value),
                                            className: "flex-1 bg-neutral-900/80 border border-neutral-800 rounded px-2 py-1 text-[11px] text-neutral-300"
                                        }), y.jsx("button", {
                                            type: "button",
                                            onClick: () => Z(Y.id, st),
                                            className: "p-1 rounded bg-neutral-900 border border-neutral-800 hover:border-red-950 text-neutral-500 hover:text-red-400 cursor-pointer",
                                            children: y.jsx(Xx, {
                                                className: "h-3.5 w-3.5"
                                            })
                                        })]
                                    }, st))
                                })]
                            })]
                        }, Y.id)
                    })]
                })]
            }), y.jsxs("div", {
                className: "p-4 border-t border-neutral-900 bg-neutral-950 flex gap-3 items-center justify-between",
                children: [y.jsxs("button", {
                    type: "button",
                    onClick: rt,
                    className: "px-3.5 py-2 text-xs font-mono border border-neutral-800 hover:border-neutral-700 bg-neutral-900 text-neutral-400 hover:text-white rounded-lg flex items-center gap-1.5 cursor-pointer transition-all active:scale-95",
                    children: [y.jsx(Lx, {
                        className: "h-3.5 w-3.5"
                    }), "RESET DEFAULTS"]
                }), y.jsxs("button", {
                    type: "button",
                    onClick: J,
                    className: "flex-1 px-4 py-2.5 text-xs font-sans font-bold tracking-wider uppercase border border-sky-500/30 bg-sky-500 hover:bg-sky-600 text-white rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95",
                    children: [y.jsx(Bx, {
                        className: "h-4 w-4"
                    }), "SAVE CUSTOMIZATIONS"]
                })]
            }), j && y.jsxs("div", {
                className: "absolute top-20 left-6 right-6 z-50 bg-emerald-500/90 backdrop-blur border border-emerald-400/30 text-white px-4 py-3 rounded-lg shadow-xl flex items-center gap-2 justify-center font-sans font-bold text-xs animate-bounce",
                children: [y.jsx(px, {
                    className: "h-4 w-4 text-white"
                }), "CHANGES COMMITTED LIVE TO BROWSER STORAGE!"]
            })]
        })]
    })
}

function $5() {
    const [a, l] = X.useState(p0), [r, o] = X.useState(y0), [c, h] = X.useState(!1), [d, p] = X.useState("all");
    X.useEffect(() => {
        const S = localStorage.getItem("vfx_portfolio_config"),
            j = localStorage.getItem("vfx_portfolio_projects");
        if (S) try {
            l(JSON.parse(S))
        } catch (M) {
            console.error("Error parsing saved configuration", M)
        }
        if (j) try {
            o(JSON.parse(j))
        } catch (M) {
            console.error("Error parsing saved projects", M)
        }
    }, []);
    const v = S => {
            l(S), localStorage.setItem("vfx_portfolio_config", JSON.stringify(S))
        },
        m = S => {
            o(S), localStorage.setItem("vfx_portfolio_projects", JSON.stringify(S))
        },
        x = () => {
            l(p0), o(y0), localStorage.removeItem("vfx_portfolio_config"), localStorage.removeItem("vfx_portfolio_projects")
        },
        b = () => {
            const S = document.getElementById("portfolio-grid");
            S && S.scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        };
    return y.jsxs("div", {
        className: "min-h-screen bg-[#07080b] text-neutral-100 font-sans selection:bg-sky-500 selection:text-white overflow-x-hidden antialiased",
        children: [y.jsxs("div", {
            className: "fixed inset-0 pointer-events-none z-0",
            children: [y.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-tr from-[#050608] via-[#0b0c10] to-[#12131a] opacity-95"
            }), y.jsx("div", {
                className: "absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[130px]"
            }), y.jsx("div", {
                className: "absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-900/10 rounded-full blur-[130px]"
            }), y.jsx("div", {
                className: "absolute inset-0 artistic-radial-grid opacity-30"
            })]
        }), y.jsx($x, {
            config: a,
            onOpenSettings: () => h(!0)
        }), y.jsx(F5, {
            config: a,
            onExploreClick: b
        }), y.jsxs("main", {
            id: "portfolio-grid",
            className: "relative z-10 max-w-7xl mx-auto px-6 sm:px-12 py-24",
            children: [y.jsxs("div", {
                className: "flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-950 pb-12 mb-20",
                children: [y.jsxs("div", {
                    children: [y.jsxs("div", {
                        className: "flex items-center gap-1.5 text-[10px] font-mono tracking-[0.4em] text-neutral-500 uppercase mb-4",
                    }), y.jsxs("h2", {
                        className: "text-3xl sm:text-5xl font-sans font-black italic tracking-tighter text-white uppercase leading-none",
                        children: ["VFX WORK ", y.jsx("span", {
                            className: "text-transparent text-stroke",
                            children: ""
                        })]
                    })]
                }), y.jsx("div", {
                    className: "flex flex-wrap gap-2 font-mono text-[9px] tracking-[0.2em]",
                    children: ["all", "composite", "tracking", "paint", "other"].map(S => {
                        const j = d === S;
                        return y.jsx("button", {
                            onClick: () => p(S),
                            className: `px-5 py-3 rounded-full border uppercase transition-all cursor-pointer ${j?"bg-white border-white text-black font-bold shadow-xl shadow-white/5":"bg-neutral-900/40 border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700"}`,
                            children: S === "all" ? "SHOW ALL SECTIONS" : S
                        }, S)
                    })
                })]
            }), y.jsx("div", {
                className: "space-y-32",
                children: r.filter(S => d === "all" || S.category === d).map((S, j) => {
                    let M = y.jsx(kp, {
                            className: "h-4 w-4"
                        }),
                        z = {
                            badge: "bg-sky-500/10 border-sky-500/20 text-sky-400",
                            accentText: "text-sky-400"
                        };
                    S.category === "tracking" ? (M = y.jsx(wc, {
                        className: "h-4 w-4"
                    }), z = {
                        badge: "bg-amber-500/10 border-amber-500/20 text-amber-400",
                        accentText: "text-amber-400",
                        glow: "shadow-amber-500/5",
                        border: "border-amber-500/20"
                    }) : S.category === "paint" ? (M = y.jsx(zp, {
                        className: "h-4 w-4"
                    }), z = {
                        badge: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
                        accentText: "text-emerald-400",
                        glow: "shadow-emerald-500/5",
                        border: "border-emerald-500/20"
                    }) : S.category === "other" && (M = y.jsx(_p, {
                        className: "h-4 w-4"
                    }), z = {
                        badge: "bg-indigo-500/10 border-indigo-500/20 text-indigo-400",
                        accentText: "text-indigo-400",
                        glow: "shadow-indigo-500/5",
                        border: "border-indigo-500/20"
                    });
                    const B = j % 2 === 0;
                    return y.jsxs("section", {
                        id: S.category,
                        className: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start scroll-mt-24",
                        children: [y.jsxs("div", {
                            className: `lg:col-span-7 ${B?"lg:order-1":"lg:order-2"}`,
                            children: [S.category === "composite" && y.jsx(Rp, {
                                beforeImage: S.beforeImage,
                                afterImage: S.afterImage,
                                beforeLabel: "",
                                afterLabel: "",
                                projectId: S.id
                            }), S.category === "tracking" && y.jsx(P5, {
                                backgroundImage: S.afterImage,
                                projectId: S.id
                            }), S.category === "paint" && y.jsx(Rp, {
                                beforeImage: S.beforeImage,
                                afterImage: S.afterImage,
                                beforeLabel: "",
                                afterLabel: "",
                                projectId: S.id
                            }), S.category === "other" && y.jsxs("div", {
                                className: "relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-neutral-800 shadow-2xl group cursor-pointer bg-neutral-950",
                                children: [y.jsx("img", {
                                    src: S.afterImage,
                                    alt: S.title,
                                    className: "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",
                                    referrerPolicy: "no-referrer"
                                }), y.jsx("div", {
                                    className: "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"
                                }), y.jsx("div", {
                                    className: "absolute top-4 left-4 z-10 pointer-events-none rounded bg-black/80 px-2.5 py-1 text-[10px] font-mono tracking-wider text-neutral-400 border border-neutral-800",
                                    children: ""
                                }), y.jsx("div", {
                                    className: "absolute bottom-4 left-4 z-10 pointer-events-none",
                                    children: y.jsx("span", {
                                        className: "text-[10px] font-mono tracking-widest text-indigo-400 bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-900/40 mr-2 uppercase",
                                        children: ""
                                    })
                                })]
                            })]
                        }), y.jsxs("div", {
                            className: `lg:col-span-5 flex flex-col justify-center space-y-6 ${B?"lg:order-2":"lg:order-1"}`,
                            children: [y.jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [y.jsxs("div", {
                                    className: `flex items-center gap-1.5 px-3 py-1 rounded border text-[10px] font-mono tracking-widest font-bold uppercase ${z.badge}`,
                                    children: [M, S.category]
                                }), y.jsx("span", {
                                    className: "h-[1px] flex-1 bg-neutral-900"
                                })]
                            }), y.jsxs("div", {
                                children: [y.jsx("h3", {
                                    className: "text-2xl sm:text-3.5xl font-sans font-black italic tracking-tighter text-white uppercase leading-tight",
                                    children: S.title
                                }), y.jsxs("div", {
                                    className: "flex gap-4 mt-3 text-[10px] font-mono text-neutral-500 uppercase",
                                    children: [y.jsxs("div", {
                                        children: ["ROLE: ", y.jsx("span", {
                                            className: "text-neutral-300 font-bold",
                                            children: S.role
                                        })]
                                    }), S.client && y.jsxs(y.Fragment, {
                                        children: [y.jsx("div", {
                                            className: "text-neutral-800",
                                            children: "|"
                                        }), y.jsxs("div", {
                                            children: ["CLIENT: ", y.jsx("span", {
                                                className: "text-neutral-300 font-bold",
                                                children: S.client
                                            })]
                                        })]
                                    })]
                                })]
                            }), y.jsx("p", {
                                className: "text-neutral-400 text-xs sm:text-sm leading-relaxed",
                                children: S.description
                            }), S.breakdownSteps && S.breakdownSteps.length > 0 && y.jsxs("div", {
                                className: "space-y-3 bg-neutral-950/40 p-4 rounded-xl border border-neutral-900/80",
                                children: [y.jsxs("h4", {
                                    className: "text-[10px] font-mono tracking-widest text-neutral-500 uppercase flex items-center gap-1",
                                    children: [y.jsx(qx, {
                                        className: "h-3.5 w-3.5"
                                    }), "Workflow"]
                                }), y.jsx("div", {
                                    className: "space-y-2.5",
                                    children: S.breakdownSteps.map((k, G) => y.jsxs("div", {
                                        className: "flex gap-2.5 text-xs text-neutral-300",
                                        children: [y.jsxs("span", {
                                            className: `font-mono text-[10px] font-bold ${z.accentText}`,
                                            children: ["0", G + 1]
                                        }), y.jsx("p", {
                                            className: "leading-normal",
                                            children: k
                                        })]
                                    }, G))
                                })]
                            }), y.jsxs("div", {
                                className: "space-y-2",
                                children: [y.jsx("div", {
                                    className: "text-[9px] font-mono tracking-widest text-neutral-500 uppercase",
                                    children: "SOFTWARE USED"
                                }), y.jsx("div", {
                                    className: "flex flex-wrap gap-1.5",
                                    children: S.software.map((k, G) => y.jsx("span", {
                                        className: "bg-neutral-900/70 text-neutral-300 border border-neutral-800 px-2.5 py-1 rounded text-[10px] font-mono tracking-wide",
                                        children: k
                                    }, G))
                                })]
                            })]
                        })]
                    }, S.id)
                })
            }),/* y.jsxs("section", {
                id: "contact",
                className: "relative mt-44 rounded-3xl overflow-hidden border border-neutral-950 bg-neutral-950/40 py-20 px-6 sm:px-12 text-center max-w-4xl mx-auto shadow-3xl",
                children: [y.jsx("div", {
                    className: "absolute inset-0 bg-gradient-to-t from-white/[0.02] via-transparent to-transparent pointer-events-none"
                }), y.jsxs("div", {
                    className: "relative z-10 flex flex-col items-center max-w-xl mx-auto",
                    children: [y.jsx("div", {
                        className: "h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6",
                        children: y.jsx(cx, {
                            className: "h-5 w-5 text-white"
                        })
                    }), y.jsxs("h3", {
                        className: "text-3xl sm:text-4xl font-sans font-black italic tracking-tighter text-white uppercase leading-none",
                        children: ["LET'S CRAFT THE ", y.jsx("span", {
                            className: "text-transparent text-stroke-subtle",
                            children: "IMPOSSIBLE"
                        })]
                    }), y.jsx("p", {
                        className: "text-neutral-400 text-xs sm:text-sm mt-5 leading-relaxed font-light",
                        children: "Available for remote and on-set technical direction, advanced clean plate compositing, camera tracking consultation, or episodic feature contract bookings. Get in touch to discuss pipeline workflows."
                    }), y.jsxs("div", {
                        className: "flex flex-col sm:flex-row justify-center gap-4 mt-10 w-full",
                        children: [y.jsxs("a", {
                            href: `mailto:${a.email}`,
                            className: "bg-white hover:bg-neutral-200 text-black font-sans font-bold text-xs tracking-[0.2em] uppercase px-8 py-4.5 rounded-full flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-103 active:scale-97",
                            children: [y.jsx(zx, {
                                className: "h-4 w-4"
                            }), y.jsx("span", {
                                children: "Email Enquiries"
                            })]
                        }), y.jsxs("a", {
                            href: a.youtubeUrl,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 hover:text-white font-sans font-bold text-xs tracking-[0.2em] uppercase px-8 py-4.5 rounded-full flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-103",
                            children: [y.jsx(Dc, {
                                className: "h-4 w-4 fill-current"
                            }), y.jsx("span", {
                                children: "Showreel Playlist"
                            })]
                        })]
                    }), y.jsxs("div", {
                        className: "flex items-center gap-6 mt-12 text-neutral-500 text-xs font-mono",
                        children: [y.jsxs("a", {
                            href: a.linkedin,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "hover:text-white transition-colors flex items-center gap-1.5 tracking-[0.2em]",
                            children: [y.jsx(Rx, {
                                className: "h-3.5 w-3.5"
                            }), "LINKEDIN"]
                        }), y.jsx("span", {
                            className: "text-neutral-800",
                            children: "|"
                        }), y.jsxs("a", {
                            href: a.artstation,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "hover:text-white transition-colors flex items-center gap-1.5 tracking-[0.2em]",
                            children: [y.jsx(Nx, {
                                className: "h-3.5 w-3.5"
                            }), "ARTSTATION"]
                        })]
                    })]
                })]
            })*/]
        }), y.jsx("footer", {
            className: "relative border-t border-neutral-950 bg-[#050608]/80 py-16 px-6 sm:px-12 z-10",
            children: y.jsxs("div", {
                className: "max-w-7xl mx-auto space-y-12",
                children: [y.jsxs("div", {
                    className: "grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 border-b border-neutral-900/60 pb-12",
                    children: [y.jsxs("div", {
                        className: "group cursor-default",
                        children: [y.jsx("span", {
                            className: "block text-[9px] uppercase tracking-[0.4em] text-neutral-600 mb-3 font-mono",
                            children: " / "
                        }), y.jsx("div", {
                            className: "h-[1px] w-full bg-neutral-900 group-hover:bg-neutral-600 transition-colors"
                        }), y.jsx("p", {
                            className: "text-[10px] text-neutral-500 uppercase tracking-widest mt-2 font-mono",
                            children: " /  "
                        })]
                    }), y.jsxs("div", {
                        className: "group cursor-default",
                        children: [y.jsx("span", {
                            className: "block text-[9px] uppercase tracking-[0.4em] text-neutral-600 mb-3 font-mono",
                            children: " / "
                        }), y.jsx("div", {
                            className: "h-[1px] w-full bg-neutral-900 group-hover:bg-neutral-600 transition-colors"
                        }), y.jsx("p", {
                            className: "text-[10px] text-neutral-500 uppercase tracking-widest mt-2 font-mono",
                            children: " / "
                        })]
                    }), y.jsxs("div", {
                        className: "group cursor-default",
                        children: [y.jsx("span", {
                            className: "block text-[9px] uppercase tracking-[0.4em] text-neutral-600 mb-3 font-mono",
                            children: " / "
                        }), y.jsx("div", {
                            className: "h-[1px] w-full bg-neutral-900 group-hover:bg-neutral-600 transition-colors"
                        }), y.jsx("p", {
                            className: "text-[10px] text-neutral-500 uppercase tracking-widest mt-2 font-mono",
                            children: "  / "
                        })]
                    }), y.jsxs("div", {
                        className: "group cursor-default",
                        children: [y.jsx("span", {
                            className: "block text-[9px] uppercase tracking-[0.4em] text-neutral-600 mb-3 font-mono",
                            children: " / "
                        }), y.jsx("div", {
                            className: "h-[1px] w-full bg-neutral-900 group-hover:bg-neutral-600 transition-colors"
                        }), y.jsx("p", {
                            className: "text-[10px] text-neutral-500 uppercase tracking-widest mt-2 font-mono",
                            children: " "
                        })]
                    })]
                }), y.jsxs("div", {
                    className: "flex flex-col md:flex-row justify-between items-center gap-6",
                    children: [y.jsxs("div", {
                        className: "flex flex-col items-center md:items-start text-center md:text-left",
                        children: [y.jsx("span", {
                            className: "font-sans font-black italic text-sm tracking-[0.3em] text-white uppercase",
                            children: a.artistName
                        }), y.jsxs("span", {
                            className: "text-[9px] font-mono tracking-widest text-neutral-600 uppercase mt-1",
                            children: ["COMPOSTOR"]
                        })]
                    }), y.jsxs("div", {
                        className: "flex gap-4 text-[10px] font-mono text-neutral-600 uppercase tracking-[0.2em]",
                        children: [y.jsx("span", {
                            children: ""
                        }), y.jsx("span", {
                            className: "text-neutral-900",
                            children: "•"
                        }), y.jsx("span", {
                            children: ""
                        })]
                    })]
                })]
            })
        }), y.jsx(W5, {
            isOpen: c,
            onClose: () => h(!1),
            config: a,
            onSaveConfig: v,
            projects: r,
            onSaveProjects: m,
            onReset: x
        })]
    })
}
ex.createRoot(document.getElementById("root")).render(y.jsx(X.StrictMode, {
    children: y.jsx($5, {})
}));