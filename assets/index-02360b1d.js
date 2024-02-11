(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        r(i);
    new MutationObserver(i => {
        for (const l of i)
            if (l.type === "childList")
                for (const o of l.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(i) {
        const l = {};
        return i.integrity && (l.integrity = i.integrity),
            i.referrerPolicy && (l.referrerPolicy = i.referrerPolicy),
            i.crossOrigin === "use-credentials" ? l.credentials = "include" : i.crossOrigin === "anonymous" ? l.credentials = "omit" : l.credentials = "same-origin",
            l
    }
    function r(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const l = n(i);
        fetch(i.href, l)
    }
}
)();
var tr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ec(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var tc = {
    exports: {}
}
    , ll = {}
    , nc = {
        exports: {}
    }
    , A = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nr = Symbol.for("react.element")
    , ep = Symbol.for("react.portal")
    , tp = Symbol.for("react.fragment")
    , np = Symbol.for("react.strict_mode")
    , rp = Symbol.for("react.profiler")
    , ip = Symbol.for("react.provider")
    , lp = Symbol.for("react.context")
    , op = Symbol.for("react.forward_ref")
    , sp = Symbol.for("react.suspense")
    , ap = Symbol.for("react.memo")
    , up = Symbol.for("react.lazy")
    , wa = Symbol.iterator;
function cp(e) {
    return e === null || typeof e != "object" ? null : (e = wa && e[wa] || e["@@iterator"],
        typeof e == "function" ? e : null)
}
var rc = {
    isMounted: function () {
        return !1
    },
    enqueueForceUpdate: function () { },
    enqueueReplaceState: function () { },
    enqueueSetState: function () { }
}
    , ic = Object.assign
    , lc = {};
function Bn(e, t, n) {
    this.props = e,
        this.context = t,
        this.refs = lc,
        this.updater = n || rc
}
Bn.prototype.isReactComponent = {};
Bn.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
    ;
Bn.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
    ;
function oc() { }
oc.prototype = Bn.prototype;
function ms(e, t, n) {
    this.props = e,
        this.context = t,
        this.refs = lc,
        this.updater = n || rc
}
var hs = ms.prototype = new oc;
hs.constructor = ms;
ic(hs, Bn.prototype);
hs.isPureReactComponent = !0;
var Sa = Array.isArray
    , sc = Object.prototype.hasOwnProperty
    , vs = {
        current: null
    }
    , ac = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
function uc(e, t, n) {
    var r, i = {}, l = null, o = null;
    if (t != null)
        for (r in t.ref !== void 0 && (o = t.ref),
            t.key !== void 0 && (l = "" + t.key),
            t)
            sc.call(t, r) && !ac.hasOwnProperty(r) && (i[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1)
        i.children = n;
    else if (1 < a) {
        for (var s = Array(a), u = 0; u < a; u++)
            s[u] = arguments[u + 2];
        i.children = s
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps,
            a)
            i[r] === void 0 && (i[r] = a[r]);
    return {
        $$typeof: Nr,
        type: e,
        key: l,
        ref: o,
        props: i,
        _owner: vs.current
    }
}
function dp(e, t) {
    return {
        $$typeof: Nr,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function gs(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Nr
}
function fp(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function (n) {
        return t[n]
    })
}
var xa = /\/+/g;
function Ml(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? fp("" + e.key) : t.toString(36)
}
function hi(e, t, n, r, i) {
    var l = typeof e;
    (l === "undefined" || l === "boolean") && (e = null);
    var o = !1;
    if (e === null)
        o = !0;
    else
        switch (l) {
            case "string":
            case "number":
                o = !0;
                break;
            case "object":
                switch (e.$$typeof) {
                    case Nr:
                    case ep:
                        o = !0
                }
        }
    if (o)
        return o = e,
            i = i(o),
            e = r === "" ? "." + Ml(o, 0) : r,
            Sa(i) ? (n = "",
                e != null && (n = e.replace(xa, "$&/") + "/"),
                hi(i, t, n, "", function (u) {
                    return u
                })) : i != null && (gs(i) && (i = dp(i, n + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(xa, "$&/") + "/") + e)),
                    t.push(i)),
            1;
    if (o = 0,
        r = r === "" ? "." : r + ":",
        Sa(e))
        for (var a = 0; a < e.length; a++) {
            l = e[a];
            var s = r + Ml(l, a);
            o += hi(l, t, n, s, i)
        }
    else if (s = cp(e),
        typeof s == "function")
        for (e = s.call(e),
            a = 0; !(l = e.next()).done;)
            l = l.value,
                s = r + Ml(l, a++),
                o += hi(l, t, n, s, i);
    else if (l === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return o
}
function Gr(e, t, n) {
    if (e == null)
        return e;
    var r = []
        , i = 0;
    return hi(e, r, "", "", function (l) {
        return t.call(n, l, i++)
    }),
        r
}
function pp(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
            t.then(function (n) {
                (e._status === 0 || e._status === -1) && (e._status = 1,
                    e._result = n)
            }, function (n) {
                (e._status === 0 || e._status === -1) && (e._status = 2,
                    e._result = n)
            }),
            e._status === -1 && (e._status = 0,
                e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var Pe = {
    current: null
}
    , vi = {
        transition: null
    }
    , mp = {
        ReactCurrentDispatcher: Pe,
        ReactCurrentBatchConfig: vi,
        ReactCurrentOwner: vs
    };
A.Children = {
    map: Gr,
    forEach: function (e, t, n) {
        Gr(e, function () {
            t.apply(this, arguments)
        }, n)
    },
    count: function (e) {
        var t = 0;
        return Gr(e, function () {
            t++
        }),
            t
    },
    toArray: function (e) {
        return Gr(e, function (t) {
            return t
        }) || []
    },
    only: function (e) {
        if (!gs(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
A.Component = Bn;
A.Fragment = tp;
A.Profiler = rp;
A.PureComponent = ms;
A.StrictMode = np;
A.Suspense = sp;
A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mp;
A.cloneElement = function (e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = ic({}, e.props)
        , i = e.key
        , l = e.ref
        , o = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (l = t.ref,
            o = vs.current),
            t.key !== void 0 && (i = "" + t.key),
            e.type && e.type.defaultProps)
            var a = e.type.defaultProps;
        for (s in t)
            sc.call(t, s) && !ac.hasOwnProperty(s) && (r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s])
    }
    var s = arguments.length - 2;
    if (s === 1)
        r.children = n;
    else if (1 < s) {
        a = Array(s);
        for (var u = 0; u < s; u++)
            a[u] = arguments[u + 2];
        r.children = a
    }
    return {
        $$typeof: Nr,
        type: e.type,
        key: i,
        ref: l,
        props: r,
        _owner: o
    }
}
    ;
A.createContext = function (e) {
    return e = {
        $$typeof: lp,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
        e.Provider = {
            $$typeof: ip,
            _context: e
        },
        e.Consumer = e
}
    ;
A.createElement = uc;
A.createFactory = function (e) {
    var t = uc.bind(null, e);
    return t.type = e,
        t
}
    ;
A.createRef = function () {
    return {
        current: null
    }
}
    ;
A.forwardRef = function (e) {
    return {
        $$typeof: op,
        render: e
    }
}
    ;
A.isValidElement = gs;
A.lazy = function (e) {
    return {
        $$typeof: up,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: pp
    }
}
    ;
A.memo = function (e, t) {
    return {
        $$typeof: ap,
        type: e,
        compare: t === void 0 ? null : t
    }
}
    ;
A.startTransition = function (e) {
    var t = vi.transition;
    vi.transition = {};
    try {
        e()
    } finally {
        vi.transition = t
    }
}
    ;
A.unstable_act = function () {
    throw Error("act(...) is not supported in production builds of React.")
}
    ;
A.useCallback = function (e, t) {
    return Pe.current.useCallback(e, t)
}
    ;
A.useContext = function (e) {
    return Pe.current.useContext(e)
}
    ;
A.useDebugValue = function () { }
    ;
A.useDeferredValue = function (e) {
    return Pe.current.useDeferredValue(e)
}
    ;
A.useEffect = function (e, t) {
    return Pe.current.useEffect(e, t)
}
    ;
A.useId = function () {
    return Pe.current.useId()
}
    ;
A.useImperativeHandle = function (e, t, n) {
    return Pe.current.useImperativeHandle(e, t, n)
}
    ;
A.useInsertionEffect = function (e, t) {
    return Pe.current.useInsertionEffect(e, t)
}
    ;
A.useLayoutEffect = function (e, t) {
    return Pe.current.useLayoutEffect(e, t)
}
    ;
A.useMemo = function (e, t) {
    return Pe.current.useMemo(e, t)
}
    ;
A.useReducer = function (e, t, n) {
    return Pe.current.useReducer(e, t, n)
}
    ;
A.useRef = function (e) {
    return Pe.current.useRef(e)
}
    ;
A.useState = function (e) {
    return Pe.current.useState(e)
}
    ;
A.useSyncExternalStore = function (e, t, n) {
    return Pe.current.useSyncExternalStore(e, t, n)
}
    ;
A.useTransition = function () {
    return Pe.current.useTransition()
}
    ;
A.version = "18.2.0";
nc.exports = A;
var H = nc.exports;
const U = ec(H);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hp = H
    , vp = Symbol.for("react.element")
    , gp = Symbol.for("react.fragment")
    , yp = Object.prototype.hasOwnProperty
    , wp = hp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
    , Sp = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
function cc(e, t, n) {
    var r, i = {}, l = null, o = null;
    n !== void 0 && (l = "" + n),
        t.key !== void 0 && (l = "" + t.key),
        t.ref !== void 0 && (o = t.ref);
    for (r in t)
        yp.call(t, r) && !Sp.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
            t)
            i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: vp,
        type: e,
        key: l,
        ref: o,
        props: i,
        _owner: wp.current
    }
}
ll.Fragment = gp;
ll.jsx = cc;
ll.jsxs = cc;
tc.exports = ll;
var b = tc.exports
    , po = {}
    , dc = {
        exports: {}
    }
    , Be = {}
    , fc = {
        exports: {}
    }
    , pc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function (e) {
    function t(L, N) {
        var j = L.length;
        L.push(N);
        e: for (; 0 < j;) {
            var F = j - 1 >>> 1
                , V = L[F];
            if (0 < i(V, N))
                L[F] = N,
                    L[j] = V,
                    j = F;
            else
                break e
        }
    }
    function n(L) {
        return L.length === 0 ? null : L[0]
    }
    function r(L) {
        if (L.length === 0)
            return null;
        var N = L[0]
            , j = L.pop();
        if (j !== N) {
            L[0] = j;
            e: for (var F = 0, V = L.length, ke = V >>> 1; F < ke;) {
                var ae = 2 * (F + 1) - 1
                    , Me = L[ae]
                    , me = ae + 1
                    , ie = L[me];
                if (0 > i(Me, j))
                    me < V && 0 > i(ie, Me) ? (L[F] = ie,
                        L[me] = j,
                        F = me) : (L[F] = Me,
                            L[ae] = j,
                            F = ae);
                else if (me < V && 0 > i(ie, j))
                    L[F] = ie,
                        L[me] = j,
                        F = me;
                else
                    break e
            }
        }
        return N
    }
    function i(L, N) {
        var j = L.sortIndex - N.sortIndex;
        return j !== 0 ? j : L.id - N.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var l = performance;
        e.unstable_now = function () {
            return l.now()
        }
    } else {
        var o = Date
            , a = o.now();
        e.unstable_now = function () {
            return o.now() - a
        }
    }
    var s = []
        , u = []
        , d = 1
        , p = null
        , h = 3
        , v = !1
        , y = !1
        , w = !1
        , O = typeof setTimeout == "function" ? setTimeout : null
        , m = typeof clearTimeout == "function" ? clearTimeout : null
        , c = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function f(L) {
        for (var N = n(u); N !== null;) {
            if (N.callback === null)
                r(u);
            else if (N.startTime <= L)
                r(u),
                    N.sortIndex = N.expirationTime,
                    t(s, N);
            else
                break;
            N = n(u)
        }
    }
    function g(L) {
        if (w = !1,
            f(L),
            !y)
            if (n(s) !== null)
                y = !0,
                    $(S);
            else {
                var N = n(u);
                N !== null && pe(g, N.startTime - L)
            }
    }
    function S(L, N) {
        y = !1,
            w && (w = !1,
                m(k),
                k = -1),
            v = !0;
        var j = h;
        try {
            for (f(N),
                p = n(s); p !== null && (!(p.expirationTime > N) || L && !E());) {
                var F = p.callback;
                if (typeof F == "function") {
                    p.callback = null,
                        h = p.priorityLevel;
                    var V = F(p.expirationTime <= N);
                    N = e.unstable_now(),
                        typeof V == "function" ? p.callback = V : p === n(s) && r(s),
                        f(N)
                } else
                    r(s);
                p = n(s)
            }
            if (p !== null)
                var ke = !0;
            else {
                var ae = n(u);
                ae !== null && pe(g, ae.startTime - N),
                    ke = !1
            }
            return ke
        } finally {
            p = null,
                h = j,
                v = !1
        }
    }
    var x = !1
        , M = null
        , k = -1
        , C = 5
        , T = -1;
    function E() {
        return !(e.unstable_now() - T < C)
    }
    function _() {
        if (M !== null) {
            var L = e.unstable_now();
            T = L;
            var N = !0;
            try {
                N = M(!0, L)
            } finally {
                N ? P() : (x = !1,
                    M = null)
            }
        } else
            x = !1
    }
    var P;
    if (typeof c == "function")
        P = function () {
            c(_)
        }
            ;
    else if (typeof MessageChannel < "u") {
        var I = new MessageChannel
            , R = I.port2;
        I.port1.onmessage = _,
            P = function () {
                R.postMessage(null)
            }
    } else
        P = function () {
            O(_, 0)
        }
            ;
    function $(L) {
        M = L,
            x || (x = !0,
                P())
    }
    function pe(L, N) {
        k = O(function () {
            L(e.unstable_now())
        }, N)
    }
    e.unstable_IdlePriority = 5,
        e.unstable_ImmediatePriority = 1,
        e.unstable_LowPriority = 4,
        e.unstable_NormalPriority = 3,
        e.unstable_Profiling = null,
        e.unstable_UserBlockingPriority = 2,
        e.unstable_cancelCallback = function (L) {
            L.callback = null
        }
        ,
        e.unstable_continueExecution = function () {
            y || v || (y = !0,
                $(S))
        }
        ,
        e.unstable_forceFrameRate = function (L) {
            0 > L || 125 < L ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : C = 0 < L ? Math.floor(1e3 / L) : 5
        }
        ,
        e.unstable_getCurrentPriorityLevel = function () {
            return h
        }
        ,
        e.unstable_getFirstCallbackNode = function () {
            return n(s)
        }
        ,
        e.unstable_next = function (L) {
            switch (h) {
                case 1:
                case 2:
                case 3:
                    var N = 3;
                    break;
                default:
                    N = h
            }
            var j = h;
            h = N;
            try {
                return L()
            } finally {
                h = j
            }
        }
        ,
        e.unstable_pauseExecution = function () { }
        ,
        e.unstable_requestPaint = function () { }
        ,
        e.unstable_runWithPriority = function (L, N) {
            switch (L) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    L = 3
            }
            var j = h;
            h = L;
            try {
                return N()
            } finally {
                h = j
            }
        }
        ,
        e.unstable_scheduleCallback = function (L, N, j) {
            var F = e.unstable_now();
            switch (typeof j == "object" && j !== null ? (j = j.delay,
                j = typeof j == "number" && 0 < j ? F + j : F) : j = F,
            L) {
                case 1:
                    var V = -1;
                    break;
                case 2:
                    V = 250;
                    break;
                case 5:
                    V = 1073741823;
                    break;
                case 4:
                    V = 1e4;
                    break;
                default:
                    V = 5e3
            }
            return V = j + V,
                L = {
                    id: d++,
                    callback: N,
                    priorityLevel: L,
                    startTime: j,
                    expirationTime: V,
                    sortIndex: -1
                },
                j > F ? (L.sortIndex = j,
                    t(u, L),
                    n(s) === null && L === n(u) && (w ? (m(k),
                        k = -1) : w = !0,
                        pe(g, j - F))) : (L.sortIndex = V,
                            t(s, L),
                            y || v || (y = !0,
                                $(S))),
                L
        }
        ,
        e.unstable_shouldYield = E,
        e.unstable_wrapCallback = function (L) {
            var N = h;
            return function () {
                var j = h;
                h = N;
                try {
                    return L.apply(this, arguments)
                } finally {
                    h = j
                }
            }
        }
}
)(pc);
fc.exports = pc;
var xp = fc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mc = H
    , He = xp;
function z(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var hc = new Set
    , vr = {};
function pn(e, t) {
    jn(e, t),
        jn(e + "Capture", t)
}
function jn(e, t) {
    for (vr[e] = t,
        e = 0; e < t.length; e++)
        hc.add(t[e])
}
var St = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
    , mo = Object.prototype.hasOwnProperty
    , Ep = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
    , Ea = {}
    , Ta = {};
function Tp(e) {
    return mo.call(Ta, e) ? !0 : mo.call(Ea, e) ? !1 : Ep.test(e) ? Ta[e] = !0 : (Ea[e] = !0,
        !1)
}
function kp(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
                e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}
function _p(e, t, n, r) {
    if (t === null || typeof t > "u" || kp(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t
        }
    return !1
}
function Oe(e, t, n, r, i, l, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
        this.attributeName = r,
        this.attributeNamespace = i,
        this.mustUseProperty = n,
        this.propertyName = e,
        this.type = t,
        this.sanitizeURL = l,
        this.removeEmptyString = o
}
var we = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
    we[e] = new Oe(e, 0, !1, e, null, !1, !1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) {
    var t = e[0];
    we[t] = new Oe(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    we[e] = new Oe(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
    we[e] = new Oe(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
    we[e] = new Oe(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    we[e] = new Oe(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function (e) {
    we[e] = new Oe(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function (e) {
    we[e] = new Oe(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function (e) {
    we[e] = new Oe(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var ys = /[\-:]([a-z])/g;
function ws(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) {
    var t = e.replace(ys, ws);
    we[t] = new Oe(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
    var t = e.replace(ys, ws);
    we[t] = new Oe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(ys, ws);
    we[t] = new Oe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    we[e] = new Oe(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
we.xlinkHref = new Oe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
    we[e] = new Oe(e, 1, !1, e.toLowerCase(), null, !0, !0)
});
function Ss(e, t, n, r) {
    var i = we.hasOwnProperty(t) ? we[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (_p(t, n, i, r) && (n = null),
        r || i === null ? Tp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName,
            r = i.attributeNamespace,
            n === null ? e.removeAttribute(t) : (i = i.type,
                n = i === 3 || i === 4 && n === !0 ? "" : "" + n,
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var kt = mc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
    , Ur = Symbol.for("react.element")
    , vn = Symbol.for("react.portal")
    , gn = Symbol.for("react.fragment")
    , xs = Symbol.for("react.strict_mode")
    , ho = Symbol.for("react.profiler")
    , vc = Symbol.for("react.provider")
    , gc = Symbol.for("react.context")
    , Es = Symbol.for("react.forward_ref")
    , vo = Symbol.for("react.suspense")
    , go = Symbol.for("react.suspense_list")
    , Ts = Symbol.for("react.memo")
    , zt = Symbol.for("react.lazy")
    , yc = Symbol.for("react.offscreen")
    , ka = Symbol.iterator;
function Un(e) {
    return e === null || typeof e != "object" ? null : (e = ka && e[ka] || e["@@iterator"],
        typeof e == "function" ? e : null)
}
var re = Object.assign, Ll;
function nr(e) {
    if (Ll === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Ll = t && t[1] || ""
        }
    return `
` + Ll + e
}
var zl = !1;
function Il(e, t) {
    if (!e || zl)
        return "";
    zl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function () {
                throw Error()
            }
                ,
                Object.defineProperty(t.prototype, "props", {
                    set: function () {
                        throw Error()
                    }
                }),
                typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var i = u.stack.split(`
`), l = r.stack.split(`
`), o = i.length - 1, a = l.length - 1; 1 <= o && 0 <= a && i[o] !== l[a];)
                a--;
            for (; 1 <= o && 0 <= a; o--,
                a--)
                if (i[o] !== l[a]) {
                    if (o !== 1 || a !== 1)
                        do
                            if (o--,
                                a--,
                                0 > a || i[o] !== l[a]) {
                                var s = `
` + i[o].replace(" at new ", " at ");
                                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)),
                                    s
                            }
                        while (1 <= o && 0 <= a);
                    break
                }
        }
    } finally {
        zl = !1,
            Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? nr(e) : ""
}
function Cp(e) {
    switch (e.tag) {
        case 5:
            return nr(e.type);
        case 16:
            return nr("Lazy");
        case 13:
            return nr("Suspense");
        case 19:
            return nr("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = Il(e.type, !1),
                e;
        case 11:
            return e = Il(e.type.render, !1),
                e;
        case 1:
            return e = Il(e.type, !0),
                e;
        default:
            return ""
    }
}
function yo(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
        case gn:
            return "Fragment";
        case vn:
            return "Portal";
        case ho:
            return "Profiler";
        case xs:
            return "StrictMode";
        case vo:
            return "Suspense";
        case go:
            return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
            case gc:
                return (e.displayName || "Context") + ".Consumer";
            case vc:
                return (e._context.displayName || "Context") + ".Provider";
            case Es:
                var t = e.render;
                return e = e.displayName,
                    e || (e = t.displayName || t.name || "",
                        e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
                    e;
            case Ts:
                return t = e.displayName || null,
                    t !== null ? t : yo(e.type) || "Memo";
            case zt:
                t = e._payload,
                    e = e._init;
                try {
                    return yo(e(t))
                } catch { }
        }
    return null
}
function Pp(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render,
                e = e.displayName || e.name || "",
                t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return yo(t);
        case 8:
            return t === xs ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function")
                return t.displayName || t.name || null;
            if (typeof t == "string")
                return t
    }
    return null
}
function Qt(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}
function wc(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function Op(e) {
    var t = wc(e) ? "checked" : "value"
        , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
        , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get
            , l = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
                return i.call(this)
            },
            set: function (o) {
                r = "" + o,
                    l.call(this, o)
            }
        }),
            Object.defineProperty(e, t, {
                enumerable: n.enumerable
            }),
        {
            getValue: function () {
                return r
            },
            setValue: function (o) {
                r = "" + o
            },
            stopTracking: function () {
                e._valueTracker = null,
                    delete e[t]
            }
        }
    }
}
function Qr(e) {
    e._valueTracker || (e._valueTracker = Op(e))
}
function Sc(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
        , r = "";
    return e && (r = wc(e) ? e.checked ? "true" : "false" : e.value),
        e = r,
        e !== n ? (t.setValue(e),
            !0) : !1
}
function Mi(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
        typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function wo(e, t) {
    var n = t.checked;
    return re({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function _a(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
        , r = t.checked != null ? t.checked : t.defaultChecked;
    n = Qt(t.value != null ? t.value : n),
        e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
        }
}
function xc(e, t) {
    t = t.checked,
        t != null && Ss(e, "checked", t, !1)
}
function So(e, t) {
    xc(e, t);
    var n = Qt(t.value)
        , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? xo(e, t.type, n) : t.hasOwnProperty("defaultValue") && xo(e, t.type, Qt(t.defaultValue)),
        t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Ca(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
            n || t === e.value || (e.value = t),
            e.defaultValue = t
    }
    n = e.name,
        n !== "" && (e.name = ""),
        e.defaultChecked = !!e._wrapperState.initialChecked,
        n !== "" && (e.name = n)
}
function xo(e, t, n) {
    (t !== "number" || Mi(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var rr = Array.isArray;
function On(e, t, n, r) {
    if (e = e.options,
        t) {
        t = {};
        for (var i = 0; i < n.length; i++)
            t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++)
            i = t.hasOwnProperty("$" + e[n].value),
                e[n].selected !== i && (e[n].selected = i),
                i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Qt(n),
            t = null,
            i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0,
                    r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}
function Eo(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(z(91));
    return re({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Pa(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
            t = t.defaultValue,
            n != null) {
            if (t != null)
                throw Error(z(92));
            if (rr(n)) {
                if (1 < n.length)
                    throw Error(z(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
            n = t
    }
    e._wrapperState = {
        initialValue: Qt(n)
    }
}
function Ec(e, t) {
    var n = Qt(t.value)
        , r = Qt(t.defaultValue);
    n != null && (n = "" + n,
        n !== e.value && (e.value = n),
        t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        r != null && (e.defaultValue = "" + r)
}
function Oa(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Tc(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}
function To(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Tc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Yr, kc = function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i)
        })
    }
        : e
}(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
    else {
        for (Yr = Yr || document.createElement("div"),
            Yr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Yr.firstChild; e.firstChild;)
            e.removeChild(e.firstChild);
        for (; t.firstChild;)
            e.appendChild(t.firstChild)
    }
});
function gr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var or = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
    , Mp = ["Webkit", "ms", "Moz", "O"];
Object.keys(or).forEach(function (e) {
    Mp.forEach(function (t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
            or[t] = or[e]
    })
});
function _c(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || or.hasOwnProperty(e) && or[e] ? ("" + t).trim() : t + "px"
}
function Cc(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
                , i = _c(n, t[n], r);
            n === "float" && (n = "cssFloat"),
                r ? e.setProperty(n, i) : e[n] = i
        }
}
var Lp = re({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function ko(e, t) {
    if (t) {
        if (Lp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(z(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(z(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
                throw Error(z(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(z(62))
    }
}
function _o(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
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
var Co = null;
function ks(e) {
    return e = e.target || e.srcElement || window,
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
}
var Po = null
    , Mn = null
    , Ln = null;
function Ma(e) {
    if (e = Dr(e)) {
        if (typeof Po != "function")
            throw Error(z(280));
        var t = e.stateNode;
        t && (t = cl(t),
            Po(e.stateNode, e.type, t))
    }
}
function Pc(e) {
    Mn ? Ln ? Ln.push(e) : Ln = [e] : Mn = e
}
function Oc() {
    if (Mn) {
        var e = Mn
            , t = Ln;
        if (Ln = Mn = null,
            Ma(e),
            t)
            for (e = 0; e < t.length; e++)
                Ma(t[e])
    }
}
function Mc(e, t) {
    return e(t)
}
function Lc() { }
var Nl = !1;
function zc(e, t, n) {
    if (Nl)
        return e(t, n);
    Nl = !0;
    try {
        return Mc(e, t, n)
    } finally {
        Nl = !1,
            (Mn !== null || Ln !== null) && (Lc(),
                Oc())
    }
}
function yr(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = cl(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
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
            (r = !r.disabled) || (e = e.type,
                r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
                e = !r;
            break e;
        default:
            e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(z(231, t, typeof n));
    return n
}
var Oo = !1;
if (St)
    try {
        var Qn = {};
        Object.defineProperty(Qn, "passive", {
            get: function () {
                Oo = !0
            }
        }),
            window.addEventListener("test", Qn, Qn),
            window.removeEventListener("test", Qn, Qn)
    } catch {
        Oo = !1
    }
function zp(e, t, n, r, i, l, o, a, s) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (d) {
        this.onError(d)
    }
}
var sr = !1
    , Li = null
    , zi = !1
    , Mo = null
    , Ip = {
        onError: function (e) {
            sr = !0,
                Li = e
        }
    };
function Np(e, t, n, r, i, l, o, a, s) {
    sr = !1,
        Li = null,
        zp.apply(Ip, arguments)
}
function bp(e, t, n, r, i, l, o, a, s) {
    if (Np.apply(this, arguments),
        sr) {
        if (sr) {
            var u = Li;
            sr = !1,
                Li = null
        } else
            throw Error(z(198));
        zi || (zi = !0,
            Mo = u)
    }
}
function mn(e) {
    var t = e
        , n = e;
    if (e.alternate)
        for (; t.return;)
            t = t.return;
    else {
        e = t;
        do
            t = e,
                t.flags & 4098 && (n = t.return),
                e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function Ic(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
            e !== null && (t = e.memoizedState)),
            t !== null)
            return t.dehydrated
    }
    return null
}
function La(e) {
    if (mn(e) !== e)
        throw Error(z(188))
}
function jp(e) {
    var t = e.alternate;
    if (!t) {
        if (t = mn(e),
            t === null)
            throw Error(z(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ;) {
        var i = n.return;
        if (i === null)
            break;
        var l = i.alternate;
        if (l === null) {
            if (r = i.return,
                r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === l.child) {
            for (l = i.child; l;) {
                if (l === n)
                    return La(i),
                        e;
                if (l === r)
                    return La(i),
                        t;
                l = l.sibling
            }
            throw Error(z(188))
        }
        if (n.return !== r.return)
            n = i,
                r = l;
        else {
            for (var o = !1, a = i.child; a;) {
                if (a === n) {
                    o = !0,
                        n = i,
                        r = l;
                    break
                }
                if (a === r) {
                    o = !0,
                        r = i,
                        n = l;
                    break
                }
                a = a.sibling
            }
            if (!o) {
                for (a = l.child; a;) {
                    if (a === n) {
                        o = !0,
                            n = l,
                            r = i;
                        break
                    }
                    if (a === r) {
                        o = !0,
                            r = l,
                            n = i;
                        break
                    }
                    a = a.sibling
                }
                if (!o)
                    throw Error(z(189))
            }
        }
        if (n.alternate !== r)
            throw Error(z(190))
    }
    if (n.tag !== 3)
        throw Error(z(188));
    return n.stateNode.current === n ? e : t
}
function Nc(e) {
    return e = jp(e),
        e !== null ? bc(e) : null
}
function bc(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null;) {
        var t = bc(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var jc = He.unstable_scheduleCallback
    , za = He.unstable_cancelCallback
    , Dp = He.unstable_shouldYield
    , Rp = He.unstable_requestPaint
    , se = He.unstable_now
    , Ap = He.unstable_getCurrentPriorityLevel
    , _s = He.unstable_ImmediatePriority
    , Dc = He.unstable_UserBlockingPriority
    , Ii = He.unstable_NormalPriority
    , $p = He.unstable_LowPriority
    , Rc = He.unstable_IdlePriority
    , ol = null
    , ut = null;
function Fp(e) {
    if (ut && typeof ut.onCommitFiberRoot == "function")
        try {
            ut.onCommitFiberRoot(ol, e, void 0, (e.current.flags & 128) === 128)
        } catch { }
}
var tt = Math.clz32 ? Math.clz32 : Vp
    , Hp = Math.log
    , Bp = Math.LN2;
function Vp(e) {
    return e >>>= 0,
        e === 0 ? 32 : 31 - (Hp(e) / Bp | 0) | 0
}
var Xr = 64
    , qr = 4194304;
function ir(e) {
    switch (e & -e) {
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
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}
function Ni(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
        , i = e.suspendedLanes
        , l = e.pingedLanes
        , o = n & 268435455;
    if (o !== 0) {
        var a = o & ~i;
        a !== 0 ? r = ir(a) : (l &= o,
            l !== 0 && (r = ir(l)))
    } else
        o = n & ~i,
            o !== 0 ? r = ir(o) : l !== 0 && (r = ir(l));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r,
        l = t & -t,
        i >= l || i === 16 && (l & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
        t = e.entangledLanes,
        t !== 0)
        for (e = e.entanglements,
            t &= r; 0 < t;)
            n = 31 - tt(t),
                i = 1 << n,
                r |= e[n],
                t &= ~i;
    return r
}
function Wp(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
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
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}
function Gp(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, l = e.pendingLanes; 0 < l;) {
        var o = 31 - tt(l)
            , a = 1 << o
            , s = i[o];
        s === -1 ? (!(a & n) || a & r) && (i[o] = Wp(a, t)) : s <= t && (e.expiredLanes |= a),
            l &= ~a
    }
}
function Lo(e) {
    return e = e.pendingLanes & -1073741825,
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function Ac() {
    var e = Xr;
    return Xr <<= 1,
        !(Xr & 4194240) && (Xr = 64),
        e
}
function bl(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function br(e, t, n) {
    e.pendingLanes |= t,
        t !== 536870912 && (e.suspendedLanes = 0,
            e.pingedLanes = 0),
        e = e.eventTimes,
        t = 31 - tt(t),
        e[t] = n
}
function Up(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
        e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.expiredLanes &= t,
        e.mutableReadLanes &= t,
        e.entangledLanes &= t,
        t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var i = 31 - tt(n)
            , l = 1 << i;
        t[i] = 0,
            r[i] = -1,
            e[i] = -1,
            n &= ~l
    }
}
function Cs(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - tt(n)
            , i = 1 << r;
        i & t | e[r] & t && (e[r] |= t),
            n &= ~i
    }
}
var W = 0;
function $c(e) {
    return e &= -e,
        1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Fc, Ps, Hc, Bc, Vc, zo = !1, Kr = [], At = null, $t = null, Ft = null, wr = new Map, Sr = new Map, Nt = [], Qp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ia(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            At = null;
            break;
        case "dragenter":
        case "dragleave":
            $t = null;
            break;
        case "mouseover":
        case "mouseout":
            Ft = null;
            break;
        case "pointerover":
        case "pointerout":
            wr.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Sr.delete(t.pointerId)
    }
}
function Yn(e, t, n, r, i, l) {
    return e === null || e.nativeEvent !== l ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [i]
    },
        t !== null && (t = Dr(t),
            t !== null && Ps(t)),
        e) : (e.eventSystemFlags |= r,
            t = e.targetContainers,
            i !== null && t.indexOf(i) === -1 && t.push(i),
            e)
}
function Yp(e, t, n, r, i) {
    switch (t) {
        case "focusin":
            return At = Yn(At, e, t, n, r, i),
                !0;
        case "dragenter":
            return $t = Yn($t, e, t, n, r, i),
                !0;
        case "mouseover":
            return Ft = Yn(Ft, e, t, n, r, i),
                !0;
        case "pointerover":
            var l = i.pointerId;
            return wr.set(l, Yn(wr.get(l) || null, e, t, n, r, i)),
                !0;
        case "gotpointercapture":
            return l = i.pointerId,
                Sr.set(l, Yn(Sr.get(l) || null, e, t, n, r, i)),
                !0
    }
    return !1
}
function Wc(e) {
    var t = tn(e.target);
    if (t !== null) {
        var n = mn(t);
        if (n !== null) {
            if (t = n.tag,
                t === 13) {
                if (t = Ic(n),
                    t !== null) {
                    e.blockedOn = t,
                        Vc(e.priority, function () {
                            Hc(n)
                        });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function gi(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = Io(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            Co = r,
                n.target.dispatchEvent(r),
                Co = null
        } else
            return t = Dr(n),
                t !== null && Ps(t),
                e.blockedOn = n,
                !1;
        t.shift()
    }
    return !0
}
function Na(e, t, n) {
    gi(e) && n.delete(t)
}
function Xp() {
    zo = !1,
        At !== null && gi(At) && (At = null),
        $t !== null && gi($t) && ($t = null),
        Ft !== null && gi(Ft) && (Ft = null),
        wr.forEach(Na),
        Sr.forEach(Na)
}
function Xn(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
        zo || (zo = !0,
            He.unstable_scheduleCallback(He.unstable_NormalPriority, Xp)))
}
function xr(e) {
    function t(i) {
        return Xn(i, e)
    }
    if (0 < Kr.length) {
        Xn(Kr[0], e);
        for (var n = 1; n < Kr.length; n++) {
            var r = Kr[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (At !== null && Xn(At, e),
        $t !== null && Xn($t, e),
        Ft !== null && Xn(Ft, e),
        wr.forEach(t),
        Sr.forEach(t),
        n = 0; n < Nt.length; n++)
        r = Nt[n],
            r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Nt.length && (n = Nt[0],
        n.blockedOn === null);)
        Wc(n),
            n.blockedOn === null && Nt.shift()
}
var zn = kt.ReactCurrentBatchConfig
    , bi = !0;
function qp(e, t, n, r) {
    var i = W
        , l = zn.transition;
    zn.transition = null;
    try {
        W = 1,
            Os(e, t, n, r)
    } finally {
        W = i,
            zn.transition = l
    }
}
function Kp(e, t, n, r) {
    var i = W
        , l = zn.transition;
    zn.transition = null;
    try {
        W = 4,
            Os(e, t, n, r)
    } finally {
        W = i,
            zn.transition = l
    }
}
function Os(e, t, n, r) {
    if (bi) {
        var i = Io(e, t, n, r);
        if (i === null)
            Wl(e, t, r, ji, n),
                Ia(e, r);
        else if (Yp(i, e, t, n, r))
            r.stopPropagation();
        else if (Ia(e, r),
            t & 4 && -1 < Qp.indexOf(e)) {
            for (; i !== null;) {
                var l = Dr(i);
                if (l !== null && Fc(l),
                    l = Io(e, t, n, r),
                    l === null && Wl(e, t, r, ji, n),
                    l === i)
                    break;
                i = l
            }
            i !== null && r.stopPropagation()
        } else
            Wl(e, t, r, null, n)
    }
}
var ji = null;
function Io(e, t, n, r) {
    if (ji = null,
        e = ks(r),
        e = tn(e),
        e !== null)
        if (t = mn(e),
            t === null)
            e = null;
        else if (n = t.tag,
            n === 13) {
            if (e = Ic(t),
                e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return ji = e,
        null
}
function Gc(e) {
    switch (e) {
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
            return 1;
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
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (Ap()) {
                case _s:
                    return 1;
                case Dc:
                    return 4;
                case Ii:
                case $p:
                    return 16;
                case Rc:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var jt = null
    , Ms = null
    , yi = null;
function Uc() {
    if (yi)
        return yi;
    var e, t = Ms, n = t.length, r, i = "value" in jt ? jt.value : jt.textContent, l = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++)
        ;
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === i[l - r]; r++)
        ;
    return yi = i.slice(e, 1 < r ? 1 - r : void 0)
}
function wi(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode,
        e === 0 && t === 13 && (e = 13)) : e = t,
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
}
function Zr() {
    return !0
}
function ba() {
    return !1
}
function Ve(e) {
    function t(n, r, i, l, o) {
        this._reactName = n,
            this._targetInst = i,
            this.type = r,
            this.nativeEvent = l,
            this.target = o,
            this.currentTarget = null;
        for (var a in e)
            e.hasOwnProperty(a) && (n = e[a],
                this[a] = n ? n(l) : l[a]);
        return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? Zr : ba,
            this.isPropagationStopped = ba,
            this
    }
    return re(t.prototype, {
        preventDefault: function () {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
                this.isDefaultPrevented = Zr)
        },
        stopPropagation: function () {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
                this.isPropagationStopped = Zr)
        },
        persist: function () { },
        isPersistent: Zr
    }),
        t
}
var Vn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Ls = Ve(Vn), jr = re({}, Vn, {
    view: 0,
    detail: 0
}), Zp = Ve(jr), jl, Dl, qn, sl = re({}, jr, {
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
    getModifierState: zs,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function (e) {
        return "movementX" in e ? e.movementX : (e !== qn && (qn && e.type === "mousemove" ? (jl = e.screenX - qn.screenX,
            Dl = e.screenY - qn.screenY) : Dl = jl = 0,
            qn = e),
            jl)
    },
    movementY: function (e) {
        return "movementY" in e ? e.movementY : Dl
    }
}), ja = Ve(sl), Jp = re({}, sl, {
    dataTransfer: 0
}), em = Ve(Jp), tm = re({}, jr, {
    relatedTarget: 0
}), Rl = Ve(tm), nm = re({}, Vn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), rm = Ve(nm), im = re({}, Vn, {
    clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData
    }
}), lm = Ve(im), om = re({}, Vn, {
    data: 0
}), Da = Ve(om), sm = {
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
}, am = {
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
}, um = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function cm(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = um[e]) ? !!t[e] : !1
}
function zs() {
    return cm
}
var dm = re({}, jr, {
    key: function (e) {
        if (e.key) {
            var t = sm[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = wi(e),
            e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? am[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: zs,
    charCode: function (e) {
        return e.type === "keypress" ? wi(e) : 0
    },
    keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function (e) {
        return e.type === "keypress" ? wi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
    , fm = Ve(dm)
    , pm = re({}, sl, {
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
    })
    , Ra = Ve(pm)
    , mm = re({}, jr, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: zs
    })
    , hm = Ve(mm)
    , vm = re({}, Vn, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
    , gm = Ve(vm)
    , ym = re({}, sl, {
        deltaX: function (e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function (e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
    , wm = Ve(ym)
    , Sm = [9, 13, 27, 32]
    , Is = St && "CompositionEvent" in window
    , ar = null;
St && "documentMode" in document && (ar = document.documentMode);
var xm = St && "TextEvent" in window && !ar
    , Qc = St && (!Is || ar && 8 < ar && 11 >= ar)
    , Aa = String.fromCharCode(32)
    , $a = !1;
function Yc(e, t) {
    switch (e) {
        case "keyup":
            return Sm.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}
function Xc(e) {
    return e = e.detail,
        typeof e == "object" && "data" in e ? e.data : null
}
var yn = !1;
function Em(e, t) {
    switch (e) {
        case "compositionend":
            return Xc(t);
        case "keypress":
            return t.which !== 32 ? null : ($a = !0,
                Aa);
        case "textInput":
            return e = t.data,
                e === Aa && $a ? null : e;
        default:
            return null
    }
}
function Tm(e, t) {
    if (yn)
        return e === "compositionend" || !Is && Yc(e, t) ? (e = Uc(),
            yi = Ms = jt = null,
            yn = !1,
            e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length)
                    return t.char;
                if (t.which)
                    return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return Qc && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var km = {
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
function Fa(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!km[e.type] : t === "textarea"
}
function qc(e, t, n, r) {
    Pc(r),
        t = Di(t, "onChange"),
        0 < t.length && (n = new Ls("onChange", "change", null, n, r),
            e.push({
                event: n,
                listeners: t
            }))
}
var ur = null
    , Er = null;
function _m(e) {
    sd(e, 0)
}
function al(e) {
    var t = xn(e);
    if (Sc(t))
        return e
}
function Cm(e, t) {
    if (e === "change")
        return t
}
var Kc = !1;
if (St) {
    var Al;
    if (St) {
        var $l = "oninput" in document;
        if (!$l) {
            var Ha = document.createElement("div");
            Ha.setAttribute("oninput", "return;"),
                $l = typeof Ha.oninput == "function"
        }
        Al = $l
    } else
        Al = !1;
    Kc = Al && (!document.documentMode || 9 < document.documentMode)
}
function Ba() {
    ur && (ur.detachEvent("onpropertychange", Zc),
        Er = ur = null)
}
function Zc(e) {
    if (e.propertyName === "value" && al(Er)) {
        var t = [];
        qc(t, Er, e, ks(e)),
            zc(_m, t)
    }
}
function Pm(e, t, n) {
    e === "focusin" ? (Ba(),
        ur = t,
        Er = n,
        ur.attachEvent("onpropertychange", Zc)) : e === "focusout" && Ba()
}
function Om(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return al(Er)
}
function Mm(e, t) {
    if (e === "click")
        return al(t)
}
function Lm(e, t) {
    if (e === "input" || e === "change")
        return al(t)
}
function zm(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var rt = typeof Object.is == "function" ? Object.is : zm;
function Tr(e, t) {
    if (rt(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
        , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!mo.call(t, i) || !rt(e[i], t[i]))
            return !1
    }
    return !0
}
function Va(e) {
    for (; e && e.firstChild;)
        e = e.firstChild;
    return e
}
function Wa(e, t) {
    var n = Va(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
                e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Va(n)
    }
}
function Jc(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Jc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function ed() {
    for (var e = window, t = Mi(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Mi(e.document)
    }
    return t
}
function Ns(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function Im(e) {
    var t = ed()
        , n = e.focusedElem
        , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Jc(n.ownerDocument.documentElement, n)) {
        if (r !== null && Ns(n)) {
            if (t = r.start,
                e = r.end,
                e === void 0 && (e = t),
                "selectionStart" in n)
                n.selectionStart = t,
                    n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
                e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length
                    , l = Math.min(r.start, i);
                r = r.end === void 0 ? l : Math.min(r.end, i),
                    !e.extend && l > r && (i = r,
                        r = l,
                        l = i),
                    i = Wa(n, l);
                var o = Wa(n, r);
                i && o && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(),
                    t.setStart(i.node, i.offset),
                    e.removeAllRanges(),
                    l > r ? (e.addRange(t),
                        e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset),
                            e.addRange(t)))
            }
        }
        for (t = [],
            e = n; e = e.parentNode;)
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
            n = 0; n < t.length; n++)
            e = t[n],
                e.element.scrollLeft = e.left,
                e.element.scrollTop = e.top
    }
}
var Nm = St && "documentMode" in document && 11 >= document.documentMode
    , wn = null
    , No = null
    , cr = null
    , bo = !1;
function Ga(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    bo || wn == null || wn !== Mi(r) || (r = wn,
        "selectionStart" in r && Ns(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
        } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
            r = {
                anchorNode: r.anchorNode,
                anchorOffset: r.anchorOffset,
                focusNode: r.focusNode,
                focusOffset: r.focusOffset
            }),
        cr && Tr(cr, r) || (cr = r,
            r = Di(No, "onSelect"),
            0 < r.length && (t = new Ls("onSelect", "select", null, t, n),
                e.push({
                    event: t,
                    listeners: r
                }),
                t.target = wn)))
}
function Jr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
        n["Webkit" + e] = "webkit" + t,
        n["Moz" + e] = "moz" + t,
        n
}
var Sn = {
    animationend: Jr("Animation", "AnimationEnd"),
    animationiteration: Jr("Animation", "AnimationIteration"),
    animationstart: Jr("Animation", "AnimationStart"),
    transitionend: Jr("Transition", "TransitionEnd")
}
    , Fl = {}
    , td = {};
St && (td = document.createElement("div").style,
    "AnimationEvent" in window || (delete Sn.animationend.animation,
        delete Sn.animationiteration.animation,
        delete Sn.animationstart.animation),
    "TransitionEvent" in window || delete Sn.transitionend.transition);
function ul(e) {
    if (Fl[e])
        return Fl[e];
    if (!Sn[e])
        return e;
    var t = Sn[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in td)
            return Fl[e] = t[n];
    return e
}
var nd = ul("animationend")
    , rd = ul("animationiteration")
    , id = ul("animationstart")
    , ld = ul("transitionend")
    , od = new Map
    , Ua = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Xt(e, t) {
    od.set(e, t),
        pn(t, [e])
}
for (var Hl = 0; Hl < Ua.length; Hl++) {
    var Bl = Ua[Hl]
        , bm = Bl.toLowerCase()
        , jm = Bl[0].toUpperCase() + Bl.slice(1);
    Xt(bm, "on" + jm)
}
Xt(nd, "onAnimationEnd");
Xt(rd, "onAnimationIteration");
Xt(id, "onAnimationStart");
Xt("dblclick", "onDoubleClick");
Xt("focusin", "onFocus");
Xt("focusout", "onBlur");
Xt(ld, "onTransitionEnd");
jn("onMouseEnter", ["mouseout", "mouseover"]);
jn("onMouseLeave", ["mouseout", "mouseover"]);
jn("onPointerEnter", ["pointerout", "pointerover"]);
jn("onPointerLeave", ["pointerout", "pointerover"]);
pn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
pn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
pn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
pn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
pn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
pn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var lr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
    , Dm = new Set("cancel close invalid load scroll toggle".split(" ").concat(lr));
function Qa(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
        bp(r, t, void 0, e),
        e.currentTarget = null
}
function sd(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
            , i = r.event;
        r = r.listeners;
        e: {
            var l = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var a = r[o]
                        , s = a.instance
                        , u = a.currentTarget;
                    if (a = a.listener,
                        s !== l && i.isPropagationStopped())
                        break e;
                    Qa(i, a, u),
                        l = s
                }
            else
                for (o = 0; o < r.length; o++) {
                    if (a = r[o],
                        s = a.instance,
                        u = a.currentTarget,
                        a = a.listener,
                        s !== l && i.isPropagationStopped())
                        break e;
                    Qa(i, a, u),
                        l = s
                }
        }
    }
    if (zi)
        throw e = Mo,
        zi = !1,
        Mo = null,
        e
}
function Y(e, t) {
    var n = t[$o];
    n === void 0 && (n = t[$o] = new Set);
    var r = e + "__bubble";
    n.has(r) || (ad(t, e, 2, !1),
        n.add(r))
}
function Vl(e, t, n) {
    var r = 0;
    t && (r |= 4),
        ad(n, e, r, t)
}
var ei = "_reactListening" + Math.random().toString(36).slice(2);
function kr(e) {
    if (!e[ei]) {
        e[ei] = !0,
            hc.forEach(function (n) {
                n !== "selectionchange" && (Dm.has(n) || Vl(n, !1, e),
                    Vl(n, !0, e))
            });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[ei] || (t[ei] = !0,
            Vl("selectionchange", !1, t))
    }
}
function ad(e, t, n, r) {
    switch (Gc(t)) {
        case 1:
            var i = qp;
            break;
        case 4:
            i = Kp;
            break;
        default:
            i = Os
    }
    n = i.bind(null, t, n, e),
        i = void 0,
        !Oo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0),
        r ? i !== void 0 ? e.addEventListener(t, n, {
            capture: !0,
            passive: i
        }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
            passive: i
        }) : e.addEventListener(t, n, !1)
}
function Wl(e, t, n, r, i) {
    var l = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ;) {
            if (r === null)
                return;
            var o = r.tag;
            if (o === 3 || o === 4) {
                var a = r.stateNode.containerInfo;
                if (a === i || a.nodeType === 8 && a.parentNode === i)
                    break;
                if (o === 4)
                    for (o = r.return; o !== null;) {
                        var s = o.tag;
                        if ((s === 3 || s === 4) && (s = o.stateNode.containerInfo,
                            s === i || s.nodeType === 8 && s.parentNode === i))
                            return;
                        o = o.return
                    }
                for (; a !== null;) {
                    if (o = tn(a),
                        o === null)
                        return;
                    if (s = o.tag,
                        s === 5 || s === 6) {
                        r = l = o;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            r = r.return
        }
    zc(function () {
        var u = l
            , d = ks(n)
            , p = [];
        e: {
            var h = od.get(e);
            if (h !== void 0) {
                var v = Ls
                    , y = e;
                switch (e) {
                    case "keypress":
                        if (wi(n) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        v = fm;
                        break;
                    case "focusin":
                        y = "focus",
                            v = Rl;
                        break;
                    case "focusout":
                        y = "blur",
                            v = Rl;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        v = Rl;
                        break;
                    case "click":
                        if (n.button === 2)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        v = ja;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        v = em;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        v = hm;
                        break;
                    case nd:
                    case rd:
                    case id:
                        v = rm;
                        break;
                    case ld:
                        v = gm;
                        break;
                    case "scroll":
                        v = Zp;
                        break;
                    case "wheel":
                        v = wm;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        v = lm;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        v = Ra
                }
                var w = (t & 4) !== 0
                    , O = !w && e === "scroll"
                    , m = w ? h !== null ? h + "Capture" : null : h;
                w = [];
                for (var c = u, f; c !== null;) {
                    f = c;
                    var g = f.stateNode;
                    if (f.tag === 5 && g !== null && (f = g,
                        m !== null && (g = yr(c, m),
                            g != null && w.push(_r(c, g, f)))),
                        O)
                        break;
                    c = c.return
                }
                0 < w.length && (h = new v(h, y, null, n, d),
                    p.push({
                        event: h,
                        listeners: w
                    }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (h = e === "mouseover" || e === "pointerover",
                    v = e === "mouseout" || e === "pointerout",
                    h && n !== Co && (y = n.relatedTarget || n.fromElement) && (tn(y) || y[xt]))
                    break e;
                if ((v || h) && (h = d.window === d ? d : (h = d.ownerDocument) ? h.defaultView || h.parentWindow : window,
                    v ? (y = n.relatedTarget || n.toElement,
                        v = u,
                        y = y ? tn(y) : null,
                        y !== null && (O = mn(y),
                            y !== O || y.tag !== 5 && y.tag !== 6) && (y = null)) : (v = null,
                                y = u),
                    v !== y)) {
                    if (w = ja,
                        g = "onMouseLeave",
                        m = "onMouseEnter",
                        c = "mouse",
                        (e === "pointerout" || e === "pointerover") && (w = Ra,
                            g = "onPointerLeave",
                            m = "onPointerEnter",
                            c = "pointer"),
                        O = v == null ? h : xn(v),
                        f = y == null ? h : xn(y),
                        h = new w(g, c + "leave", v, n, d),
                        h.target = O,
                        h.relatedTarget = f,
                        g = null,
                        tn(d) === u && (w = new w(m, c + "enter", y, n, d),
                            w.target = f,
                            w.relatedTarget = O,
                            g = w),
                        O = g,
                        v && y)
                        t: {
                            for (w = v,
                                m = y,
                                c = 0,
                                f = w; f; f = hn(f))
                                c++;
                            for (f = 0,
                                g = m; g; g = hn(g))
                                f++;
                            for (; 0 < c - f;)
                                w = hn(w),
                                    c--;
                            for (; 0 < f - c;)
                                m = hn(m),
                                    f--;
                            for (; c--;) {
                                if (w === m || m !== null && w === m.alternate)
                                    break t;
                                w = hn(w),
                                    m = hn(m)
                            }
                            w = null
                        }
                    else
                        w = null;
                    v !== null && Ya(p, h, v, w, !1),
                        y !== null && O !== null && Ya(p, O, y, w, !0)
                }
            }
            e: {
                if (h = u ? xn(u) : window,
                    v = h.nodeName && h.nodeName.toLowerCase(),
                    v === "select" || v === "input" && h.type === "file")
                    var S = Cm;
                else if (Fa(h))
                    if (Kc)
                        S = Lm;
                    else {
                        S = Om;
                        var x = Pm
                    }
                else
                    (v = h.nodeName) && v.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (S = Mm);
                if (S && (S = S(e, u))) {
                    qc(p, S, n, d);
                    break e
                }
                x && x(e, h, u),
                    e === "focusout" && (x = h._wrapperState) && x.controlled && h.type === "number" && xo(h, "number", h.value)
            }
            switch (x = u ? xn(u) : window,
            e) {
                case "focusin":
                    (Fa(x) || x.contentEditable === "true") && (wn = x,
                        No = u,
                        cr = null);
                    break;
                case "focusout":
                    cr = No = wn = null;
                    break;
                case "mousedown":
                    bo = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    bo = !1,
                        Ga(p, n, d);
                    break;
                case "selectionchange":
                    if (Nm)
                        break;
                case "keydown":
                case "keyup":
                    Ga(p, n, d)
            }
            var M;
            if (Is)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var k = "onCompositionStart";
                            break e;
                        case "compositionend":
                            k = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            k = "onCompositionUpdate";
                            break e
                    }
                    k = void 0
                }
            else
                yn ? Yc(e, n) && (k = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
            k && (Qc && n.locale !== "ko" && (yn || k !== "onCompositionStart" ? k === "onCompositionEnd" && yn && (M = Uc()) : (jt = d,
                Ms = "value" in jt ? jt.value : jt.textContent,
                yn = !0)),
                x = Di(u, k),
                0 < x.length && (k = new Da(k, e, null, n, d),
                    p.push({
                        event: k,
                        listeners: x
                    }),
                    M ? k.data = M : (M = Xc(n),
                        M !== null && (k.data = M)))),
                (M = xm ? Em(e, n) : Tm(e, n)) && (u = Di(u, "onBeforeInput"),
                    0 < u.length && (d = new Da("onBeforeInput", "beforeinput", null, n, d),
                        p.push({
                            event: d,
                            listeners: u
                        }),
                        d.data = M))
        }
        sd(p, t)
    })
}
function _r(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function Di(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var i = e
            , l = i.stateNode;
        i.tag === 5 && l !== null && (i = l,
            l = yr(e, n),
            l != null && r.unshift(_r(e, l, i)),
            l = yr(e, t),
            l != null && r.push(_r(e, l, i))),
            e = e.return
    }
    return r
}
function hn(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Ya(e, t, n, r, i) {
    for (var l = t._reactName, o = []; n !== null && n !== r;) {
        var a = n
            , s = a.alternate
            , u = a.stateNode;
        if (s !== null && s === r)
            break;
        a.tag === 5 && u !== null && (a = u,
            i ? (s = yr(n, l),
                s != null && o.unshift(_r(n, s, a))) : i || (s = yr(n, l),
                    s != null && o.push(_r(n, s, a)))),
            n = n.return
    }
    o.length !== 0 && e.push({
        event: t,
        listeners: o
    })
}
var Rm = /\r\n?/g
    , Am = /\u0000|\uFFFD/g;
function Xa(e) {
    return (typeof e == "string" ? e : "" + e).replace(Rm, `
`).replace(Am, "")
}
function ti(e, t, n) {
    if (t = Xa(t),
        Xa(e) !== t && n)
        throw Error(z(425))
}
function Ri() { }
var jo = null
    , Do = null;
function Ro(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Ao = typeof setTimeout == "function" ? setTimeout : void 0
    , $m = typeof clearTimeout == "function" ? clearTimeout : void 0
    , qa = typeof Promise == "function" ? Promise : void 0
    , Fm = typeof queueMicrotask == "function" ? queueMicrotask : typeof qa < "u" ? function (e) {
        return qa.resolve(null).then(e).catch(Hm)
    }
        : Ao;
function Hm(e) {
    setTimeout(function () {
        throw e
    })
}
function Gl(e, t) {
    var n = t
        , r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n),
            i && i.nodeType === 8)
            if (n = i.data,
                n === "/$") {
                if (r === 0) {
                    e.removeChild(i),
                        xr(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    xr(t)
}
function Ht(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
                t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function Ka(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Wn = Math.random().toString(36).slice(2)
    , st = "__reactFiber$" + Wn
    , Cr = "__reactProps$" + Wn
    , xt = "__reactContainer$" + Wn
    , $o = "__reactEvents$" + Wn
    , Bm = "__reactListeners$" + Wn
    , Vm = "__reactHandles$" + Wn;
function tn(e) {
    var t = e[st];
    if (t)
        return t;
    for (var n = e.parentNode; n;) {
        if (t = n[xt] || n[st]) {
            if (n = t.alternate,
                t.child !== null || n !== null && n.child !== null)
                for (e = Ka(e); e !== null;) {
                    if (n = e[st])
                        return n;
                    e = Ka(e)
                }
            return t
        }
        e = n,
            n = e.parentNode
    }
    return null
}
function Dr(e) {
    return e = e[st] || e[xt],
        !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function xn(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(z(33))
}
function cl(e) {
    return e[Cr] || null
}
var Fo = []
    , En = -1;
function qt(e) {
    return {
        current: e
    }
}
function X(e) {
    0 > En || (e.current = Fo[En],
        Fo[En] = null,
        En--)
}
function Q(e, t) {
    En++,
        Fo[En] = e.current,
        e.current = t
}
var Yt = {}
    , Te = qt(Yt)
    , Ne = qt(!1)
    , sn = Yt;
function Dn(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return Yt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, l;
    for (l in n)
        i[l] = t[l];
    return r && (e = e.stateNode,
        e.__reactInternalMemoizedUnmaskedChildContext = t,
        e.__reactInternalMemoizedMaskedChildContext = i),
        i
}
function be(e) {
    return e = e.childContextTypes,
        e != null
}
function Ai() {
    X(Ne),
        X(Te)
}
function Za(e, t, n) {
    if (Te.current !== Yt)
        throw Error(z(168));
    Q(Te, t),
        Q(Ne, n)
}
function ud(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
        typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t))
            throw Error(z(108, Pp(e) || "Unknown", i));
    return re({}, n, r)
}
function $i(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Yt,
        sn = Te.current,
        Q(Te, e),
        Q(Ne, Ne.current),
        !0
}
function Ja(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(z(169));
    n ? (e = ud(e, t, sn),
        r.__reactInternalMemoizedMergedChildContext = e,
        X(Ne),
        X(Te),
        Q(Te, e)) : X(Ne),
        Q(Ne, n)
}
var ht = null
    , dl = !1
    , Ul = !1;
function cd(e) {
    ht === null ? ht = [e] : ht.push(e)
}
function Wm(e) {
    dl = !0,
        cd(e)
}
function Kt() {
    if (!Ul && ht !== null) {
        Ul = !0;
        var e = 0
            , t = W;
        try {
            var n = ht;
            for (W = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            ht = null,
                dl = !1
        } catch (i) {
            throw ht !== null && (ht = ht.slice(e + 1)),
            jc(_s, Kt),
            i
        } finally {
            W = t,
                Ul = !1
        }
    }
    return null
}
var Tn = []
    , kn = 0
    , Fi = null
    , Hi = 0
    , Ge = []
    , Ue = 0
    , an = null
    , vt = 1
    , gt = "";
function Jt(e, t) {
    Tn[kn++] = Hi,
        Tn[kn++] = Fi,
        Fi = e,
        Hi = t
}
function dd(e, t, n) {
    Ge[Ue++] = vt,
        Ge[Ue++] = gt,
        Ge[Ue++] = an,
        an = e;
    var r = vt;
    e = gt;
    var i = 32 - tt(r) - 1;
    r &= ~(1 << i),
        n += 1;
    var l = 32 - tt(t) + i;
    if (30 < l) {
        var o = i - i % 5;
        l = (r & (1 << o) - 1).toString(32),
            r >>= o,
            i -= o,
            vt = 1 << 32 - tt(t) + i | n << i | r,
            gt = l + e
    } else
        vt = 1 << l | n << i | r,
            gt = e
}
function bs(e) {
    e.return !== null && (Jt(e, 1),
        dd(e, 1, 0))
}
function js(e) {
    for (; e === Fi;)
        Fi = Tn[--kn],
            Tn[kn] = null,
            Hi = Tn[--kn],
            Tn[kn] = null;
    for (; e === an;)
        an = Ge[--Ue],
            Ge[Ue] = null,
            gt = Ge[--Ue],
            Ge[Ue] = null,
            vt = Ge[--Ue],
            Ge[Ue] = null
}
var Fe = null
    , $e = null
    , K = !1
    , et = null;
function fd(e, t) {
    var n = Qe(5, null, null, 0);
    n.elementType = "DELETED",
        n.stateNode = t,
        n.return = e,
        t = e.deletions,
        t === null ? (e.deletions = [n],
            e.flags |= 16) : t.push(n)
}
function eu(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
                t !== null ? (e.stateNode = t,
                    Fe = e,
                    $e = Ht(t.firstChild),
                    !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
                t !== null ? (e.stateNode = t,
                    Fe = e,
                    $e = null,
                    !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t,
                t !== null ? (n = an !== null ? {
                    id: vt,
                    overflow: gt
                } : null,
                    e.memoizedState = {
                        dehydrated: t,
                        treeContext: n,
                        retryLane: 1073741824
                    },
                    n = Qe(18, null, null, 0),
                    n.stateNode = t,
                    n.return = e,
                    e.child = n,
                    Fe = e,
                    $e = null,
                    !0) : !1;
        default:
            return !1
    }
}
function Ho(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Bo(e) {
    if (K) {
        var t = $e;
        if (t) {
            var n = t;
            if (!eu(e, t)) {
                if (Ho(e))
                    throw Error(z(418));
                t = Ht(n.nextSibling);
                var r = Fe;
                t && eu(e, t) ? fd(r, n) : (e.flags = e.flags & -4097 | 2,
                    K = !1,
                    Fe = e)
            }
        } else {
            if (Ho(e))
                throw Error(z(418));
            e.flags = e.flags & -4097 | 2,
                K = !1,
                Fe = e
        }
    }
}
function tu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)
        e = e.return;
    Fe = e
}
function ni(e) {
    if (e !== Fe)
        return !1;
    if (!K)
        return tu(e),
            K = !0,
            !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
        t = t !== "head" && t !== "body" && !Ro(e.type, e.memoizedProps)),
        t && (t = $e)) {
        if (Ho(e))
            throw pd(),
            Error(z(418));
        for (; t;)
            fd(e, t),
                t = Ht(t.nextSibling)
    }
    if (tu(e),
        e.tag === 13) {
        if (e = e.memoizedState,
            e = e !== null ? e.dehydrated : null,
            !e)
            throw Error(z(317));
        e: {
            for (e = e.nextSibling,
                t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            $e = Ht(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            $e = null
        }
    } else
        $e = Fe ? Ht(e.stateNode.nextSibling) : null;
    return !0
}
function pd() {
    for (var e = $e; e;)
        e = Ht(e.nextSibling)
}
function Rn() {
    $e = Fe = null,
        K = !1
}
function Ds(e) {
    et === null ? et = [e] : et.push(e)
}
var Gm = kt.ReactCurrentBatchConfig;
function Ze(e, t) {
    if (e && e.defaultProps) {
        t = re({}, t),
            e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
var Bi = qt(null)
    , Vi = null
    , _n = null
    , Rs = null;
function As() {
    Rs = _n = Vi = null
}
function $s(e) {
    var t = Bi.current;
    X(Bi),
        e._currentValue = t
}
function Vo(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
            r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
            e === n)
            break;
        e = e.return
    }
}
function In(e, t) {
    Vi = e,
        Rs = _n = null,
        e = e.dependencies,
        e !== null && e.firstContext !== null && (e.lanes & t && (Ie = !0),
            e.firstContext = null)
}
function Xe(e) {
    var t = e._currentValue;
    if (Rs !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
            _n === null) {
            if (Vi === null)
                throw Error(z(308));
            _n = e,
                Vi.dependencies = {
                    lanes: 0,
                    firstContext: e
                }
        } else
            _n = _n.next = e;
    return t
}
var nn = null;
function Fs(e) {
    nn === null ? nn = [e] : nn.push(e)
}
function md(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n,
        Fs(t)) : (n.next = i.next,
            i.next = n),
        t.interleaved = n,
        Et(e, r)
}
function Et(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
        n = e,
        e = e.return; e !== null;)
        e.childLanes |= t,
            n = e.alternate,
            n !== null && (n.childLanes |= t),
            n = e,
            e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var It = !1;
function Hs(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function hd(e, t) {
    e = e.updateQueue,
        t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
        })
}
function yt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Bt(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
        B & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next,
            i.next = t),
            r.pending = t,
            Et(e, n)
    }
    return i = r.interleaved,
        i === null ? (t.next = t,
            Fs(r)) : (t.next = i.next,
                i.next = t),
        r.interleaved = t,
        Et(e, n)
}
function Si(e, t, n) {
    if (t = t.updateQueue,
        t !== null && (t = t.shared,
            (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
            n |= r,
            t.lanes = n,
            Cs(e, n)
    }
}
function nu(e, t) {
    var n = e.updateQueue
        , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
        n === r)) {
        var i = null
            , l = null;
        if (n = n.firstBaseUpdate,
            n !== null) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                l === null ? i = l = o : l = l.next = o,
                    n = n.next
            } while (n !== null);
            l === null ? i = l = t : l = l.next = t
        } else
            i = l = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: l,
            shared: r.shared,
            effects: r.effects
        },
            e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
        e === null ? n.firstBaseUpdate = t : e.next = t,
        n.lastBaseUpdate = t
}
function Wi(e, t, n, r) {
    var i = e.updateQueue;
    It = !1;
    var l = i.firstBaseUpdate
        , o = i.lastBaseUpdate
        , a = i.shared.pending;
    if (a !== null) {
        i.shared.pending = null;
        var s = a
            , u = s.next;
        s.next = null,
            o === null ? l = u : o.next = u,
            o = s;
        var d = e.alternate;
        d !== null && (d = d.updateQueue,
            a = d.lastBaseUpdate,
            a !== o && (a === null ? d.firstBaseUpdate = u : a.next = u,
                d.lastBaseUpdate = s))
    }
    if (l !== null) {
        var p = i.baseState;
        o = 0,
            d = u = s = null,
            a = l;
        do {
            var h = a.lane
                , v = a.eventTime;
            if ((r & h) === h) {
                d !== null && (d = d.next = {
                    eventTime: v,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var y = e
                        , w = a;
                    switch (h = t,
                    v = n,
                    w.tag) {
                        case 1:
                            if (y = w.payload,
                                typeof y == "function") {
                                p = y.call(v, p, h);
                                break e
                            }
                            p = y;
                            break e;
                        case 3:
                            y.flags = y.flags & -65537 | 128;
                        case 0:
                            if (y = w.payload,
                                h = typeof y == "function" ? y.call(v, p, h) : y,
                                h == null)
                                break e;
                            p = re({}, p, h);
                            break e;
                        case 2:
                            It = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64,
                    h = i.effects,
                    h === null ? i.effects = [a] : h.push(a))
            } else
                v = {
                    eventTime: v,
                    lane: h,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                    d === null ? (u = d = v,
                        s = p) : d = d.next = v,
                    o |= h;
            if (a = a.next,
                a === null) {
                if (a = i.shared.pending,
                    a === null)
                    break;
                h = a,
                    a = h.next,
                    h.next = null,
                    i.lastBaseUpdate = h,
                    i.shared.pending = null
            }
        } while (1);
        if (d === null && (s = p),
            i.baseState = s,
            i.firstBaseUpdate = u,
            i.lastBaseUpdate = d,
            t = i.shared.interleaved,
            t !== null) {
            i = t;
            do
                o |= i.lane,
                    i = i.next;
            while (i !== t)
        } else
            l === null && (i.shared.lanes = 0);
        cn |= o,
            e.lanes = o,
            e.memoizedState = p
    }
}
function ru(e, t, n) {
    if (e = t.effects,
        t.effects = null,
        e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
                , i = r.callback;
            if (i !== null) {
                if (r.callback = null,
                    r = n,
                    typeof i != "function")
                    throw Error(z(191, i));
                i.call(r)
            }
        }
}
var vd = new mc.Component().refs;
function Wo(e, t, n, r) {
    t = e.memoizedState,
        n = n(r, t),
        n = n == null ? t : re({}, t, n),
        e.memoizedState = n,
        e.lanes === 0 && (e.updateQueue.baseState = n)
}
var fl = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? mn(e) === e : !1
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = Ce()
            , i = Wt(e)
            , l = yt(r, i);
        l.payload = t,
            n != null && (l.callback = n),
            t = Bt(e, l, i),
            t !== null && (nt(t, e, i, r),
                Si(t, e, i))
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = Ce()
            , i = Wt(e)
            , l = yt(r, i);
        l.tag = 1,
            l.payload = t,
            n != null && (l.callback = n),
            t = Bt(e, l, i),
            t !== null && (nt(t, e, i, r),
                Si(t, e, i))
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = Ce()
            , r = Wt(e)
            , i = yt(n, r);
        i.tag = 2,
            t != null && (i.callback = t),
            t = Bt(e, i, r),
            t !== null && (nt(t, e, r, n),
                Si(t, e, r))
    }
};
function iu(e, t, n, r, i, l, o) {
    return e = e.stateNode,
        typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, o) : t.prototype && t.prototype.isPureReactComponent ? !Tr(n, r) || !Tr(i, l) : !0
}
function gd(e, t, n) {
    var r = !1
        , i = Yt
        , l = t.contextType;
    return typeof l == "object" && l !== null ? l = Xe(l) : (i = be(t) ? sn : Te.current,
        r = t.contextTypes,
        l = (r = r != null) ? Dn(e, i) : Yt),
        t = new t(n, l),
        e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
        t.updater = fl,
        e.stateNode = t,
        t._reactInternals = e,
        r && (e = e.stateNode,
            e.__reactInternalMemoizedUnmaskedChildContext = i,
            e.__reactInternalMemoizedMaskedChildContext = l),
        t
}
function lu(e, t, n, r) {
    e = t.state,
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && fl.enqueueReplaceState(t, t.state, null)
}
function Go(e, t, n, r) {
    var i = e.stateNode;
    i.props = n,
        i.state = e.memoizedState,
        i.refs = vd,
        Hs(e);
    var l = t.contextType;
    typeof l == "object" && l !== null ? i.context = Xe(l) : (l = be(t) ? sn : Te.current,
        i.context = Dn(e, l)),
        i.state = e.memoizedState,
        l = t.getDerivedStateFromProps,
        typeof l == "function" && (Wo(e, t, l, n),
            i.state = e.memoizedState),
        typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state,
            typeof i.componentWillMount == "function" && i.componentWillMount(),
            typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
            t !== i.state && fl.enqueueReplaceState(i, i.state, null),
            Wi(e, n, i, r),
            i.state = e.memoizedState),
        typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}
function Kn(e, t, n) {
    if (e = n.ref,
        e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
                n) {
                if (n.tag !== 1)
                    throw Error(z(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(z(147, e));
            var i = r
                , l = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === l ? t.ref : (t = function (o) {
                var a = i.refs;
                a === vd && (a = i.refs = {}),
                    o === null ? delete a[l] : a[l] = o
            }
                ,
                t._stringRef = l,
                t)
        }
        if (typeof e != "string")
            throw Error(z(284));
        if (!n._owner)
            throw Error(z(290, e))
    }
    return e
}
function ri(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(z(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function ou(e) {
    var t = e._init;
    return t(e._payload)
}
function yd(e) {
    function t(m, c) {
        if (e) {
            var f = m.deletions;
            f === null ? (m.deletions = [c],
                m.flags |= 16) : f.push(c)
        }
    }
    function n(m, c) {
        if (!e)
            return null;
        for (; c !== null;)
            t(m, c),
                c = c.sibling;
        return null
    }
    function r(m, c) {
        for (m = new Map; c !== null;)
            c.key !== null ? m.set(c.key, c) : m.set(c.index, c),
                c = c.sibling;
        return m
    }
    function i(m, c) {
        return m = Gt(m, c),
            m.index = 0,
            m.sibling = null,
            m
    }
    function l(m, c, f) {
        return m.index = f,
            e ? (f = m.alternate,
                f !== null ? (f = f.index,
                    f < c ? (m.flags |= 2,
                        c) : f) : (m.flags |= 2,
                            c)) : (m.flags |= 1048576,
                                c)
    }
    function o(m) {
        return e && m.alternate === null && (m.flags |= 2),
            m
    }
    function a(m, c, f, g) {
        return c === null || c.tag !== 6 ? (c = Jl(f, m.mode, g),
            c.return = m,
            c) : (c = i(c, f),
                c.return = m,
                c)
    }
    function s(m, c, f, g) {
        var S = f.type;
        return S === gn ? d(m, c, f.props.children, g, f.key) : c !== null && (c.elementType === S || typeof S == "object" && S !== null && S.$$typeof === zt && ou(S) === c.type) ? (g = i(c, f.props),
            g.ref = Kn(m, c, f),
            g.return = m,
            g) : (g = Ci(f.type, f.key, f.props, null, m.mode, g),
                g.ref = Kn(m, c, f),
                g.return = m,
                g)
    }
    function u(m, c, f, g) {
        return c === null || c.tag !== 4 || c.stateNode.containerInfo !== f.containerInfo || c.stateNode.implementation !== f.implementation ? (c = eo(f, m.mode, g),
            c.return = m,
            c) : (c = i(c, f.children || []),
                c.return = m,
                c)
    }
    function d(m, c, f, g, S) {
        return c === null || c.tag !== 7 ? (c = on(f, m.mode, g, S),
            c.return = m,
            c) : (c = i(c, f),
                c.return = m,
                c)
    }
    function p(m, c, f) {
        if (typeof c == "string" && c !== "" || typeof c == "number")
            return c = Jl("" + c, m.mode, f),
                c.return = m,
                c;
        if (typeof c == "object" && c !== null) {
            switch (c.$$typeof) {
                case Ur:
                    return f = Ci(c.type, c.key, c.props, null, m.mode, f),
                        f.ref = Kn(m, null, c),
                        f.return = m,
                        f;
                case vn:
                    return c = eo(c, m.mode, f),
                        c.return = m,
                        c;
                case zt:
                    var g = c._init;
                    return p(m, g(c._payload), f)
            }
            if (rr(c) || Un(c))
                return c = on(c, m.mode, f, null),
                    c.return = m,
                    c;
            ri(m, c)
        }
        return null
    }
    function h(m, c, f, g) {
        var S = c !== null ? c.key : null;
        if (typeof f == "string" && f !== "" || typeof f == "number")
            return S !== null ? null : a(m, c, "" + f, g);
        if (typeof f == "object" && f !== null) {
            switch (f.$$typeof) {
                case Ur:
                    return f.key === S ? s(m, c, f, g) : null;
                case vn:
                    return f.key === S ? u(m, c, f, g) : null;
                case zt:
                    return S = f._init,
                        h(m, c, S(f._payload), g)
            }
            if (rr(f) || Un(f))
                return S !== null ? null : d(m, c, f, g, null);
            ri(m, f)
        }
        return null
    }
    function v(m, c, f, g, S) {
        if (typeof g == "string" && g !== "" || typeof g == "number")
            return m = m.get(f) || null,
                a(c, m, "" + g, S);
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
                case Ur:
                    return m = m.get(g.key === null ? f : g.key) || null,
                        s(c, m, g, S);
                case vn:
                    return m = m.get(g.key === null ? f : g.key) || null,
                        u(c, m, g, S);
                case zt:
                    var x = g._init;
                    return v(m, c, f, x(g._payload), S)
            }
            if (rr(g) || Un(g))
                return m = m.get(f) || null,
                    d(c, m, g, S, null);
            ri(c, g)
        }
        return null
    }
    function y(m, c, f, g) {
        for (var S = null, x = null, M = c, k = c = 0, C = null; M !== null && k < f.length; k++) {
            M.index > k ? (C = M,
                M = null) : C = M.sibling;
            var T = h(m, M, f[k], g);
            if (T === null) {
                M === null && (M = C);
                break
            }
            e && M && T.alternate === null && t(m, M),
                c = l(T, c, k),
                x === null ? S = T : x.sibling = T,
                x = T,
                M = C
        }
        if (k === f.length)
            return n(m, M),
                K && Jt(m, k),
                S;
        if (M === null) {
            for (; k < f.length; k++)
                M = p(m, f[k], g),
                    M !== null && (c = l(M, c, k),
                        x === null ? S = M : x.sibling = M,
                        x = M);
            return K && Jt(m, k),
                S
        }
        for (M = r(m, M); k < f.length; k++)
            C = v(M, m, k, f[k], g),
                C !== null && (e && C.alternate !== null && M.delete(C.key === null ? k : C.key),
                    c = l(C, c, k),
                    x === null ? S = C : x.sibling = C,
                    x = C);
        return e && M.forEach(function (E) {
            return t(m, E)
        }),
            K && Jt(m, k),
            S
    }
    function w(m, c, f, g) {
        var S = Un(f);
        if (typeof S != "function")
            throw Error(z(150));
        if (f = S.call(f),
            f == null)
            throw Error(z(151));
        for (var x = S = null, M = c, k = c = 0, C = null, T = f.next(); M !== null && !T.done; k++,
            T = f.next()) {
            M.index > k ? (C = M,
                M = null) : C = M.sibling;
            var E = h(m, M, T.value, g);
            if (E === null) {
                M === null && (M = C);
                break
            }
            e && M && E.alternate === null && t(m, M),
                c = l(E, c, k),
                x === null ? S = E : x.sibling = E,
                x = E,
                M = C
        }
        if (T.done)
            return n(m, M),
                K && Jt(m, k),
                S;
        if (M === null) {
            for (; !T.done; k++,
                T = f.next())
                T = p(m, T.value, g),
                    T !== null && (c = l(T, c, k),
                        x === null ? S = T : x.sibling = T,
                        x = T);
            return K && Jt(m, k),
                S
        }
        for (M = r(m, M); !T.done; k++,
            T = f.next())
            T = v(M, m, k, T.value, g),
                T !== null && (e && T.alternate !== null && M.delete(T.key === null ? k : T.key),
                    c = l(T, c, k),
                    x === null ? S = T : x.sibling = T,
                    x = T);
        return e && M.forEach(function (_) {
            return t(m, _)
        }),
            K && Jt(m, k),
            S
    }
    function O(m, c, f, g) {
        if (typeof f == "object" && f !== null && f.type === gn && f.key === null && (f = f.props.children),
            typeof f == "object" && f !== null) {
            switch (f.$$typeof) {
                case Ur:
                    e: {
                        for (var S = f.key, x = c; x !== null;) {
                            if (x.key === S) {
                                if (S = f.type,
                                    S === gn) {
                                    if (x.tag === 7) {
                                        n(m, x.sibling),
                                            c = i(x, f.props.children),
                                            c.return = m,
                                            m = c;
                                        break e
                                    }
                                } else if (x.elementType === S || typeof S == "object" && S !== null && S.$$typeof === zt && ou(S) === x.type) {
                                    n(m, x.sibling),
                                        c = i(x, f.props),
                                        c.ref = Kn(m, x, f),
                                        c.return = m,
                                        m = c;
                                    break e
                                }
                                n(m, x);
                                break
                            } else
                                t(m, x);
                            x = x.sibling
                        }
                        f.type === gn ? (c = on(f.props.children, m.mode, g, f.key),
                            c.return = m,
                            m = c) : (g = Ci(f.type, f.key, f.props, null, m.mode, g),
                                g.ref = Kn(m, c, f),
                                g.return = m,
                                m = g)
                    }
                    return o(m);
                case vn:
                    e: {
                        for (x = f.key; c !== null;) {
                            if (c.key === x)
                                if (c.tag === 4 && c.stateNode.containerInfo === f.containerInfo && c.stateNode.implementation === f.implementation) {
                                    n(m, c.sibling),
                                        c = i(c, f.children || []),
                                        c.return = m,
                                        m = c;
                                    break e
                                } else {
                                    n(m, c);
                                    break
                                }
                            else
                                t(m, c);
                            c = c.sibling
                        }
                        c = eo(f, m.mode, g),
                            c.return = m,
                            m = c
                    }
                    return o(m);
                case zt:
                    return x = f._init,
                        O(m, c, x(f._payload), g)
            }
            if (rr(f))
                return y(m, c, f, g);
            if (Un(f))
                return w(m, c, f, g);
            ri(m, f)
        }
        return typeof f == "string" && f !== "" || typeof f == "number" ? (f = "" + f,
            c !== null && c.tag === 6 ? (n(m, c.sibling),
                c = i(c, f),
                c.return = m,
                m = c) : (n(m, c),
                    c = Jl(f, m.mode, g),
                    c.return = m,
                    m = c),
            o(m)) : n(m, c)
    }
    return O
}
var An = yd(!0)
    , wd = yd(!1)
    , Rr = {}
    , ct = qt(Rr)
    , Pr = qt(Rr)
    , Or = qt(Rr);
function rn(e) {
    if (e === Rr)
        throw Error(z(174));
    return e
}
function Bs(e, t) {
    switch (Q(Or, t),
    Q(Pr, e),
    Q(ct, Rr),
    e = t.nodeType,
    e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : To(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t,
                t = e.namespaceURI || null,
                e = e.tagName,
                t = To(t, e)
    }
    X(ct),
        Q(ct, t)
}
function $n() {
    X(ct),
        X(Pr),
        X(Or)
}
function Sd(e) {
    rn(Or.current);
    var t = rn(ct.current)
        , n = To(t, e.type);
    t !== n && (Q(Pr, e),
        Q(ct, n))
}
function Vs(e) {
    Pr.current === e && (X(ct),
        X(Pr))
}
var te = qt(0);
function Gi(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
                n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
                t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
            t = t.sibling
    }
    return null
}
var Ql = [];
function Ws() {
    for (var e = 0; e < Ql.length; e++)
        Ql[e]._workInProgressVersionPrimary = null;
    Ql.length = 0
}
var xi = kt.ReactCurrentDispatcher
    , Yl = kt.ReactCurrentBatchConfig
    , un = 0
    , ne = null
    , de = null
    , he = null
    , Ui = !1
    , dr = !1
    , Mr = 0
    , Um = 0;
function Se() {
    throw Error(z(321))
}
function Gs(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!rt(e[n], t[n]))
            return !1;
    return !0
}
function Us(e, t, n, r, i, l) {
    if (un = l,
        ne = t,
        t.memoizedState = null,
        t.updateQueue = null,
        t.lanes = 0,
        xi.current = e === null || e.memoizedState === null ? qm : Km,
        e = n(r, i),
        dr) {
        l = 0;
        do {
            if (dr = !1,
                Mr = 0,
                25 <= l)
                throw Error(z(301));
            l += 1,
                he = de = null,
                t.updateQueue = null,
                xi.current = Zm,
                e = n(r, i)
        } while (dr)
    }
    if (xi.current = Qi,
        t = de !== null && de.next !== null,
        un = 0,
        he = de = ne = null,
        Ui = !1,
        t)
        throw Error(z(300));
    return e
}
function Qs() {
    var e = Mr !== 0;
    return Mr = 0,
        e
}
function lt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return he === null ? ne.memoizedState = he = e : he = he.next = e,
        he
}
function qe() {
    if (de === null) {
        var e = ne.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = de.next;
    var t = he === null ? ne.memoizedState : he.next;
    if (t !== null)
        he = t,
            de = e;
    else {
        if (e === null)
            throw Error(z(310));
        de = e,
            e = {
                memoizedState: de.memoizedState,
                baseState: de.baseState,
                baseQueue: de.baseQueue,
                queue: de.queue,
                next: null
            },
            he === null ? ne.memoizedState = he = e : he = he.next = e
    }
    return he
}
function Lr(e, t) {
    return typeof t == "function" ? t(e) : t
}
function Xl(e) {
    var t = qe()
        , n = t.queue;
    if (n === null)
        throw Error(z(311));
    n.lastRenderedReducer = e;
    var r = de
        , i = r.baseQueue
        , l = n.pending;
    if (l !== null) {
        if (i !== null) {
            var o = i.next;
            i.next = l.next,
                l.next = o
        }
        r.baseQueue = i = l,
            n.pending = null
    }
    if (i !== null) {
        l = i.next,
            r = r.baseState;
        var a = o = null
            , s = null
            , u = l;
        do {
            var d = u.lane;
            if ((un & d) === d)
                s !== null && (s = s.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                    r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var p = {
                    lane: d,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                s === null ? (a = s = p,
                    o = r) : s = s.next = p,
                    ne.lanes |= d,
                    cn |= d
            }
            u = u.next
        } while (u !== null && u !== l);
        s === null ? o = r : s.next = a,
            rt(r, t.memoizedState) || (Ie = !0),
            t.memoizedState = r,
            t.baseState = o,
            t.baseQueue = s,
            n.lastRenderedState = r
    }
    if (e = n.interleaved,
        e !== null) {
        i = e;
        do
            l = i.lane,
                ne.lanes |= l,
                cn |= l,
                i = i.next;
        while (i !== e)
    } else
        i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function ql(e) {
    var t = qe()
        , n = t.queue;
    if (n === null)
        throw Error(z(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
        , i = n.pending
        , l = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var o = i = i.next;
        do
            l = e(l, o.action),
                o = o.next;
        while (o !== i);
        rt(l, t.memoizedState) || (Ie = !0),
            t.memoizedState = l,
            t.baseQueue === null && (t.baseState = l),
            n.lastRenderedState = l
    }
    return [l, r]
}
function xd() { }
function Ed(e, t) {
    var n = ne
        , r = qe()
        , i = t()
        , l = !rt(r.memoizedState, i);
    if (l && (r.memoizedState = i,
        Ie = !0),
        r = r.queue,
        Ys(_d.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || l || he !== null && he.memoizedState.tag & 1) {
        if (n.flags |= 2048,
            zr(9, kd.bind(null, n, r, i, t), void 0, null),
            ve === null)
            throw Error(z(349));
        un & 30 || Td(n, t, i)
    }
    return i
}
function Td(e, t, n) {
    e.flags |= 16384,
        e = {
            getSnapshot: t,
            value: n
        },
        t = ne.updateQueue,
        t === null ? (t = {
            lastEffect: null,
            stores: null
        },
            ne.updateQueue = t,
            t.stores = [e]) : (n = t.stores,
                n === null ? t.stores = [e] : n.push(e))
}
function kd(e, t, n, r) {
    t.value = n,
        t.getSnapshot = r,
        Cd(t) && Pd(e)
}
function _d(e, t, n) {
    return n(function () {
        Cd(t) && Pd(e)
    })
}
function Cd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !rt(e, n)
    } catch {
        return !0
    }
}
function Pd(e) {
    var t = Et(e, 1);
    t !== null && nt(t, e, 1, -1)
}
function su(e) {
    var t = lt();
    return typeof e == "function" && (e = e()),
        t.memoizedState = t.baseState = e,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Lr,
            lastRenderedState: e
        },
        t.queue = e,
        e = e.dispatch = Xm.bind(null, ne, e),
        [t.memoizedState, e]
}
function zr(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
        t = ne.updateQueue,
        t === null ? (t = {
            lastEffect: null,
            stores: null
        },
            ne.updateQueue = t,
            t.lastEffect = e.next = e) : (n = t.lastEffect,
                n === null ? t.lastEffect = e.next = e : (r = n.next,
                    n.next = e,
                    e.next = r,
                    t.lastEffect = e)),
        e
}
function Od() {
    return qe().memoizedState
}
function Ei(e, t, n, r) {
    var i = lt();
    ne.flags |= e,
        i.memoizedState = zr(1 | t, n, void 0, r === void 0 ? null : r)
}
function pl(e, t, n, r) {
    var i = qe();
    r = r === void 0 ? null : r;
    var l = void 0;
    if (de !== null) {
        var o = de.memoizedState;
        if (l = o.destroy,
            r !== null && Gs(r, o.deps)) {
            i.memoizedState = zr(t, n, l, r);
            return
        }
    }
    ne.flags |= e,
        i.memoizedState = zr(1 | t, n, l, r)
}
function au(e, t) {
    return Ei(8390656, 8, e, t)
}
function Ys(e, t) {
    return pl(2048, 8, e, t)
}
function Md(e, t) {
    return pl(4, 2, e, t)
}
function Ld(e, t) {
    return pl(4, 4, e, t)
}
function zd(e, t) {
    if (typeof t == "function")
        return e = e(),
            t(e),
            function () {
                t(null)
            }
            ;
    if (t != null)
        return e = e(),
            t.current = e,
            function () {
                t.current = null
            }
}
function Id(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
        pl(4, 4, zd.bind(null, t, e), n)
}
function Xs() { }
function Nd(e, t) {
    var n = qe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Gs(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
        e)
}
function bd(e, t) {
    var n = qe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Gs(t, r[1]) ? r[0] : (e = e(),
        n.memoizedState = [e, t],
        e)
}
function jd(e, t, n) {
    return un & 21 ? (rt(n, t) || (n = Ac(),
        ne.lanes |= n,
        cn |= n,
        e.baseState = !0),
        t) : (e.baseState && (e.baseState = !1,
            Ie = !0),
            e.memoizedState = n)
}
function Qm(e, t) {
    var n = W;
    W = n !== 0 && 4 > n ? n : 4,
        e(!0);
    var r = Yl.transition;
    Yl.transition = {};
    try {
        e(!1),
            t()
    } finally {
        W = n,
            Yl.transition = r
    }
}
function Dd() {
    return qe().memoizedState
}
function Ym(e, t, n) {
    var r = Wt(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
        Rd(e))
        Ad(t, n);
    else if (n = md(e, t, n, r),
        n !== null) {
        var i = Ce();
        nt(n, e, r, i),
            $d(n, t, r)
    }
}
function Xm(e, t, n) {
    var r = Wt(e)
        , i = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (Rd(e))
        Ad(t, i);
    else {
        var l = e.alternate;
        if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer,
            l !== null))
            try {
                var o = t.lastRenderedState
                    , a = l(o, n);
                if (i.hasEagerState = !0,
                    i.eagerState = a,
                    rt(a, o)) {
                    var s = t.interleaved;
                    s === null ? (i.next = i,
                        Fs(t)) : (i.next = s.next,
                            s.next = i),
                        t.interleaved = i;
                    return
                }
            } catch { } finally { }
        n = md(e, t, i, r),
            n !== null && (i = Ce(),
                nt(n, e, r, i),
                $d(n, t, r))
    }
}
function Rd(e) {
    var t = e.alternate;
    return e === ne || t !== null && t === ne
}
function Ad(e, t) {
    dr = Ui = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
        n.next = t),
        e.pending = t
}
function $d(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
            n |= r,
            t.lanes = n,
            Cs(e, n)
    }
}
var Qi = {
    readContext: Xe,
    useCallback: Se,
    useContext: Se,
    useEffect: Se,
    useImperativeHandle: Se,
    useInsertionEffect: Se,
    useLayoutEffect: Se,
    useMemo: Se,
    useReducer: Se,
    useRef: Se,
    useState: Se,
    useDebugValue: Se,
    useDeferredValue: Se,
    useTransition: Se,
    useMutableSource: Se,
    useSyncExternalStore: Se,
    useId: Se,
    unstable_isNewReconciler: !1
}
    , qm = {
        readContext: Xe,
        useCallback: function (e, t) {
            return lt().memoizedState = [e, t === void 0 ? null : t],
                e
        },
        useContext: Xe,
        useEffect: au,
        useImperativeHandle: function (e, t, n) {
            return n = n != null ? n.concat([e]) : null,
                Ei(4194308, 4, zd.bind(null, t, e), n)
        },
        useLayoutEffect: function (e, t) {
            return Ei(4194308, 4, e, t)
        },
        useInsertionEffect: function (e, t) {
            return Ei(4, 2, e, t)
        },
        useMemo: function (e, t) {
            var n = lt();
            return t = t === void 0 ? null : t,
                e = e(),
                n.memoizedState = [e, t],
                e
        },
        useReducer: function (e, t, n) {
            var r = lt();
            return t = n !== void 0 ? n(t) : t,
                r.memoizedState = r.baseState = t,
                e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t
                },
                r.queue = e,
                e = e.dispatch = Ym.bind(null, ne, e),
                [r.memoizedState, e]
        },
        useRef: function (e) {
            var t = lt();
            return e = {
                current: e
            },
                t.memoizedState = e
        },
        useState: su,
        useDebugValue: Xs,
        useDeferredValue: function (e) {
            return lt().memoizedState = e
        },
        useTransition: function () {
            var e = su(!1)
                , t = e[0];
            return e = Qm.bind(null, e[1]),
                lt().memoizedState = e,
                [t, e]
        },
        useMutableSource: function () { },
        useSyncExternalStore: function (e, t, n) {
            var r = ne
                , i = lt();
            if (K) {
                if (n === void 0)
                    throw Error(z(407));
                n = n()
            } else {
                if (n = t(),
                    ve === null)
                    throw Error(z(349));
                un & 30 || Td(r, t, n)
            }
            i.memoizedState = n;
            var l = {
                value: n,
                getSnapshot: t
            };
            return i.queue = l,
                au(_d.bind(null, r, l, e), [e]),
                r.flags |= 2048,
                zr(9, kd.bind(null, r, l, n, t), void 0, null),
                n
        },
        useId: function () {
            var e = lt()
                , t = ve.identifierPrefix;
            if (K) {
                var n = gt
                    , r = vt;
                n = (r & ~(1 << 32 - tt(r) - 1)).toString(32) + n,
                    t = ":" + t + "R" + n,
                    n = Mr++,
                    0 < n && (t += "H" + n.toString(32)),
                    t += ":"
            } else
                n = Um++,
                    t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    }
    , Km = {
        readContext: Xe,
        useCallback: Nd,
        useContext: Xe,
        useEffect: Ys,
        useImperativeHandle: Id,
        useInsertionEffect: Md,
        useLayoutEffect: Ld,
        useMemo: bd,
        useReducer: Xl,
        useRef: Od,
        useState: function () {
            return Xl(Lr)
        },
        useDebugValue: Xs,
        useDeferredValue: function (e) {
            var t = qe();
            return jd(t, de.memoizedState, e)
        },
        useTransition: function () {
            var e = Xl(Lr)[0]
                , t = qe().memoizedState;
            return [e, t]
        },
        useMutableSource: xd,
        useSyncExternalStore: Ed,
        useId: Dd,
        unstable_isNewReconciler: !1
    }
    , Zm = {
        readContext: Xe,
        useCallback: Nd,
        useContext: Xe,
        useEffect: Ys,
        useImperativeHandle: Id,
        useInsertionEffect: Md,
        useLayoutEffect: Ld,
        useMemo: bd,
        useReducer: ql,
        useRef: Od,
        useState: function () {
            return ql(Lr)
        },
        useDebugValue: Xs,
        useDeferredValue: function (e) {
            var t = qe();
            return de === null ? t.memoizedState = e : jd(t, de.memoizedState, e)
        },
        useTransition: function () {
            var e = ql(Lr)[0]
                , t = qe().memoizedState;
            return [e, t]
        },
        useMutableSource: xd,
        useSyncExternalStore: Ed,
        useId: Dd,
        unstable_isNewReconciler: !1
    };
function Fn(e, t) {
    try {
        var n = ""
            , r = t;
        do
            n += Cp(r),
                r = r.return;
        while (r);
        var i = n
    } catch (l) {
        i = `
Error generating stack: ` + l.message + `
` + l.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}
function Kl(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function Uo(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function () {
            throw n
        })
    }
}
var Jm = typeof WeakMap == "function" ? WeakMap : Map;
function Fd(e, t, n) {
    n = yt(-1, n),
        n.tag = 3,
        n.payload = {
            element: null
        };
    var r = t.value;
    return n.callback = function () {
        Xi || (Xi = !0,
            ns = r),
            Uo(e, t)
    }
        ,
        n
}
function Hd(e, t, n) {
    n = yt(-1, n),
        n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function () {
            return r(i)
        }
            ,
            n.callback = function () {
                Uo(e, t)
            }
    }
    var l = e.stateNode;
    return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function () {
        Uo(e, t),
            typeof r != "function" && (Vt === null ? Vt = new Set([this]) : Vt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : ""
        })
    }
    ),
        n
}
function uu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Jm;
        var i = new Set;
        r.set(t, i)
    } else
        i = r.get(t),
            i === void 0 && (i = new Set,
                r.set(t, i));
    i.has(n) || (i.add(n),
        e = ph.bind(null, e, t, n),
        t.then(e, e))
}
function cu(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
            t = t !== null ? t.dehydrated !== null : !0),
            t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function du(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536,
        e.lanes = i,
        e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
            n.flags |= 131072,
            n.flags &= -52805,
            n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = yt(-1, 1),
                t.tag = 2,
                Bt(n, t, 1))),
            n.lanes |= 1),
            e)
}
var eh = kt.ReactCurrentOwner
    , Ie = !1;
function _e(e, t, n, r) {
    t.child = e === null ? wd(t, null, n, r) : An(t, e.child, n, r)
}
function fu(e, t, n, r, i) {
    n = n.render;
    var l = t.ref;
    return In(t, i),
        r = Us(e, t, n, r, l, i),
        n = Qs(),
        e !== null && !Ie ? (t.updateQueue = e.updateQueue,
            t.flags &= -2053,
            e.lanes &= ~i,
            Tt(e, t, i)) : (K && n && bs(t),
                t.flags |= 1,
                _e(e, t, r, i),
                t.child)
}
function pu(e, t, n, r, i) {
    if (e === null) {
        var l = n.type;
        return typeof l == "function" && !ra(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
            t.type = l,
            Bd(e, t, l, r, i)) : (e = Ci(n.type, null, r, t, t.mode, i),
                e.ref = t.ref,
                e.return = t,
                t.child = e)
    }
    if (l = e.child,
        !(e.lanes & i)) {
        var o = l.memoizedProps;
        if (n = n.compare,
            n = n !== null ? n : Tr,
            n(o, r) && e.ref === t.ref)
            return Tt(e, t, i)
    }
    return t.flags |= 1,
        e = Gt(l, r),
        e.ref = t.ref,
        e.return = t,
        t.child = e
}
function Bd(e, t, n, r, i) {
    if (e !== null) {
        var l = e.memoizedProps;
        if (Tr(l, r) && e.ref === t.ref)
            if (Ie = !1,
                t.pendingProps = r = l,
                (e.lanes & i) !== 0)
                e.flags & 131072 && (Ie = !0);
            else
                return t.lanes = e.lanes,
                    Tt(e, t, i)
    }
    return Qo(e, t, n, r, i)
}
function Vd(e, t, n) {
    var r = t.pendingProps
        , i = r.children
        , l = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
                Q(Pn, Re),
                Re |= n;
        else {
            if (!(n & 1073741824))
                return e = l !== null ? l.baseLanes | n : n,
                    t.lanes = t.childLanes = 1073741824,
                    t.memoizedState = {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null
                    },
                    t.updateQueue = null,
                    Q(Pn, Re),
                    Re |= e,
                    null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
                r = l !== null ? l.baseLanes : n,
                Q(Pn, Re),
                Re |= r
        }
    else
        l !== null ? (r = l.baseLanes | n,
            t.memoizedState = null) : r = n,
            Q(Pn, Re),
            Re |= r;
    return _e(e, t, i, n),
        t.child
}
function Wd(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
        t.flags |= 2097152)
}
function Qo(e, t, n, r, i) {
    var l = be(n) ? sn : Te.current;
    return l = Dn(t, l),
        In(t, i),
        n = Us(e, t, n, r, l, i),
        r = Qs(),
        e !== null && !Ie ? (t.updateQueue = e.updateQueue,
            t.flags &= -2053,
            e.lanes &= ~i,
            Tt(e, t, i)) : (K && r && bs(t),
                t.flags |= 1,
                _e(e, t, n, i),
                t.child)
}
function mu(e, t, n, r, i) {
    if (be(n)) {
        var l = !0;
        $i(t)
    } else
        l = !1;
    if (In(t, i),
        t.stateNode === null)
        Ti(e, t),
            gd(t, n, r),
            Go(t, n, r, i),
            r = !0;
    else if (e === null) {
        var o = t.stateNode
            , a = t.memoizedProps;
        o.props = a;
        var s = o.context
            , u = n.contextType;
        typeof u == "object" && u !== null ? u = Xe(u) : (u = be(n) ? sn : Te.current,
            u = Dn(t, u));
        var d = n.getDerivedStateFromProps
            , p = typeof d == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        p || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== r || s !== u) && lu(t, o, r, u),
            It = !1;
        var h = t.memoizedState;
        o.state = h,
            Wi(t, r, o, i),
            s = t.memoizedState,
            a !== r || h !== s || Ne.current || It ? (typeof d == "function" && (Wo(t, n, d, r),
                s = t.memoizedState),
                (a = It || iu(t, n, a, r, h, s, u)) ? (p || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(),
                    typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
                    typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
                        t.memoizedProps = r,
                        t.memoizedState = s),
                o.props = r,
                o.state = s,
                o.context = u,
                r = a) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
                    r = !1)
    } else {
        o = t.stateNode,
            hd(e, t),
            a = t.memoizedProps,
            u = t.type === t.elementType ? a : Ze(t.type, a),
            o.props = u,
            p = t.pendingProps,
            h = o.context,
            s = n.contextType,
            typeof s == "object" && s !== null ? s = Xe(s) : (s = be(n) ? sn : Te.current,
                s = Dn(t, s));
        var v = n.getDerivedStateFromProps;
        (d = typeof v == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== p || h !== s) && lu(t, o, r, s),
            It = !1,
            h = t.memoizedState,
            o.state = h,
            Wi(t, r, o, i);
        var y = t.memoizedState;
        a !== p || h !== y || Ne.current || It ? (typeof v == "function" && (Wo(t, n, v, r),
            y = t.memoizedState),
            (u = It || iu(t, n, u, r, h, y, s) || !1) ? (d || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, y, s),
                typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, y, s)),
                typeof o.componentDidUpdate == "function" && (t.flags |= 4),
                typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4),
                    typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024),
                    t.memoizedProps = r,
                    t.memoizedState = y),
            o.props = r,
            o.state = y,
            o.context = s,
            r = u) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4),
                typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024),
                r = !1)
    }
    return Yo(e, t, n, r, l, i)
}
function Yo(e, t, n, r, i, l) {
    Wd(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o)
        return i && Ja(t, n, !1),
            Tt(e, t, l);
    r = t.stateNode,
        eh.current = t;
    var a = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
        e !== null && o ? (t.child = An(t, e.child, null, l),
            t.child = An(t, null, a, l)) : _e(e, t, a, l),
        t.memoizedState = r.state,
        i && Ja(t, n, !0),
        t.child
}
function Gd(e) {
    var t = e.stateNode;
    t.pendingContext ? Za(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Za(e, t.context, !1),
        Bs(e, t.containerInfo)
}
function hu(e, t, n, r, i) {
    return Rn(),
        Ds(i),
        t.flags |= 256,
        _e(e, t, n, r),
        t.child
}
var Xo = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function qo(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function Ud(e, t, n) {
    var r = t.pendingProps, i = te.current, l = !1, o = (t.flags & 128) !== 0, a;
    if ((a = o) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
        a ? (l = !0,
            t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1),
        Q(te, i & 1),
        e === null)
        return Bo(t),
            e = t.memoizedState,
            e !== null && (e = e.dehydrated,
                e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
                    null) : (o = r.children,
                        e = r.fallback,
                        l ? (r = t.mode,
                            l = t.child,
                            o = {
                                mode: "hidden",
                                children: o
                            },
                            !(r & 1) && l !== null ? (l.childLanes = 0,
                                l.pendingProps = o) : l = vl(o, r, 0, null),
                            e = on(e, r, n, null),
                            l.return = t,
                            e.return = t,
                            l.sibling = e,
                            t.child = l,
                            t.child.memoizedState = qo(n),
                            t.memoizedState = Xo,
                            e) : qs(t, o));
    if (i = e.memoizedState,
        i !== null && (a = i.dehydrated,
            a !== null))
        return th(e, t, o, r, a, i, n);
    if (l) {
        l = r.fallback,
            o = t.mode,
            i = e.child,
            a = i.sibling;
        var s = {
            mode: "hidden",
            children: r.children
        };
        return !(o & 1) && t.child !== i ? (r = t.child,
            r.childLanes = 0,
            r.pendingProps = s,
            t.deletions = null) : (r = Gt(i, s),
                r.subtreeFlags = i.subtreeFlags & 14680064),
            a !== null ? l = Gt(a, l) : (l = on(l, o, n, null),
                l.flags |= 2),
            l.return = t,
            r.return = t,
            r.sibling = l,
            t.child = r,
            r = l,
            l = t.child,
            o = e.child.memoizedState,
            o = o === null ? qo(n) : {
                baseLanes: o.baseLanes | n,
                cachePool: null,
                transitions: o.transitions
            },
            l.memoizedState = o,
            l.childLanes = e.childLanes & ~n,
            t.memoizedState = Xo,
            r
    }
    return l = e.child,
        e = l.sibling,
        r = Gt(l, {
            mode: "visible",
            children: r.children
        }),
        !(t.mode & 1) && (r.lanes = n),
        r.return = t,
        r.sibling = null,
        e !== null && (n = t.deletions,
            n === null ? (t.deletions = [e],
                t.flags |= 16) : n.push(e)),
        t.child = r,
        t.memoizedState = null,
        r
}
function qs(e, t) {
    return t = vl({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
        t.return = e,
        e.child = t
}
function ii(e, t, n, r) {
    return r !== null && Ds(r),
        An(t, e.child, null, n),
        e = qs(t, t.pendingProps.children),
        e.flags |= 2,
        t.memoizedState = null,
        e
}
function th(e, t, n, r, i, l, o) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
            r = Kl(Error(z(422))),
            ii(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child,
                t.flags |= 128,
                null) : (l = r.fallback,
                    i = t.mode,
                    r = vl({
                        mode: "visible",
                        children: r.children
                    }, i, 0, null),
                    l = on(l, i, o, null),
                    l.flags |= 2,
                    r.return = t,
                    l.return = t,
                    r.sibling = l,
                    t.child = r,
                    t.mode & 1 && An(t, e.child, null, o),
                    t.child.memoizedState = qo(o),
                    t.memoizedState = Xo,
                    l);
    if (!(t.mode & 1))
        return ii(e, t, o, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset,
            r)
            var a = r.dgst;
        return r = a,
            l = Error(z(419)),
            r = Kl(l, r, void 0),
            ii(e, t, o, r)
    }
    if (a = (o & e.childLanes) !== 0,
        Ie || a) {
        if (r = ve,
            r !== null) {
            switch (o & -o) {
                case 4:
                    i = 2;
                    break;
                case 16:
                    i = 8;
                    break;
                case 64:
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
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    i = 32;
                    break;
                case 536870912:
                    i = 268435456;
                    break;
                default:
                    i = 0
            }
            i = i & (r.suspendedLanes | o) ? 0 : i,
                i !== 0 && i !== l.retryLane && (l.retryLane = i,
                    Et(e, i),
                    nt(r, e, i, -1))
        }
        return na(),
            r = Kl(Error(z(421))),
            ii(e, t, o, r)
    }
    return i.data === "$?" ? (t.flags |= 128,
        t.child = e.child,
        t = mh.bind(null, e),
        i._reactRetry = t,
        null) : (e = l.treeContext,
            $e = Ht(i.nextSibling),
            Fe = t,
            K = !0,
            et = null,
            e !== null && (Ge[Ue++] = vt,
                Ge[Ue++] = gt,
                Ge[Ue++] = an,
                vt = e.id,
                gt = e.overflow,
                an = t),
            t = qs(t, r.children),
            t.flags |= 4096,
            t)
}
function vu(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
        Vo(e.return, t, n)
}
function Zl(e, t, n, r, i) {
    var l = e.memoizedState;
    l === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (l.isBackwards = t,
        l.rendering = null,
        l.renderingStartTime = 0,
        l.last = r,
        l.tail = n,
        l.tailMode = i)
}
function Qd(e, t, n) {
    var r = t.pendingProps
        , i = r.revealOrder
        , l = r.tail;
    if (_e(e, t, r.children, n),
        r = te.current,
        r & 2)
        r = r & 1 | 2,
            t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null;) {
                if (e.tag === 13)
                    e.memoizedState !== null && vu(e, n, t);
                else if (e.tag === 19)
                    vu(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                        e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null;) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                    e = e.sibling
            }
        r &= 1
    }
    if (Q(te, r),
        !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (i) {
            case "forwards":
                for (n = t.child,
                    i = null; n !== null;)
                    e = n.alternate,
                        e !== null && Gi(e) === null && (i = n),
                        n = n.sibling;
                n = i,
                    n === null ? (i = t.child,
                        t.child = null) : (i = n.sibling,
                            n.sibling = null),
                    Zl(t, !1, i, n, l);
                break;
            case "backwards":
                for (n = null,
                    i = t.child,
                    t.child = null; i !== null;) {
                    if (e = i.alternate,
                        e !== null && Gi(e) === null) {
                        t.child = i;
                        break
                    }
                    e = i.sibling,
                        i.sibling = n,
                        n = i,
                        i = e
                }
                Zl(t, !0, n, null, l);
                break;
            case "together":
                Zl(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null
        }
    return t.child
}
function Ti(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
        t.alternate = null,
        t.flags |= 2)
}
function Tt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
        cn |= t.lanes,
        !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(z(153));
    if (t.child !== null) {
        for (e = t.child,
            n = Gt(e, e.pendingProps),
            t.child = n,
            n.return = t; e.sibling !== null;)
            e = e.sibling,
                n = n.sibling = Gt(e, e.pendingProps),
                n.return = t;
        n.sibling = null
    }
    return t.child
}
function nh(e, t, n) {
    switch (t.tag) {
        case 3:
            Gd(t),
                Rn();
            break;
        case 5:
            Sd(t);
            break;
        case 1:
            be(t.type) && $i(t);
            break;
        case 4:
            Bs(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context
                , i = t.memoizedProps.value;
            Q(Bi, r._currentValue),
                r._currentValue = i;
            break;
        case 13:
            if (r = t.memoizedState,
                r !== null)
                return r.dehydrated !== null ? (Q(te, te.current & 1),
                    t.flags |= 128,
                    null) : n & t.child.childLanes ? Ud(e, t, n) : (Q(te, te.current & 1),
                        e = Tt(e, t, n),
                        e !== null ? e.sibling : null);
            Q(te, te.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0,
                e.flags & 128) {
                if (r)
                    return Qd(e, t, n);
                t.flags |= 128
            }
            if (i = t.memoizedState,
                i !== null && (i.rendering = null,
                    i.tail = null,
                    i.lastEffect = null),
                Q(te, te.current),
                r)
                break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0,
                Vd(e, t, n)
    }
    return Tt(e, t, n)
}
var Yd, Ko, Xd, qd;
Yd = function (e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
                n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
            n = n.sibling
    }
}
    ;
Ko = function () { }
    ;
Xd = function (e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode,
            rn(ct.current);
        var l = null;
        switch (n) {
            case "input":
                i = wo(e, i),
                    r = wo(e, r),
                    l = [];
                break;
            case "select":
                i = re({}, i, {
                    value: void 0
                }),
                    r = re({}, r, {
                        value: void 0
                    }),
                    l = [];
                break;
            case "textarea":
                i = Eo(e, i),
                    r = Eo(e, r),
                    l = [];
                break;
            default:
                typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ri)
        }
        ko(n, r);
        var o;
        n = null;
        for (u in i)
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === "style") {
                    var a = i[u];
                    for (o in a)
                        a.hasOwnProperty(o) && (n || (n = {}),
                            n[o] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (vr.hasOwnProperty(u) ? l || (l = []) : (l = l || []).push(u, null));
        for (u in r) {
            var s = r[u];
            if (a = i != null ? i[u] : void 0,
                r.hasOwnProperty(u) && s !== a && (s != null || a != null))
                if (u === "style")
                    if (a) {
                        for (o in a)
                            !a.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (n || (n = {}),
                                n[o] = "");
                        for (o in s)
                            s.hasOwnProperty(o) && a[o] !== s[o] && (n || (n = {}),
                                n[o] = s[o])
                    } else
                        n || (l || (l = []),
                            l.push(u, n)),
                            n = s;
                else
                    u === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0,
                        a = a ? a.__html : void 0,
                        s != null && a !== s && (l = l || []).push(u, s)) : u === "children" ? typeof s != "string" && typeof s != "number" || (l = l || []).push(u, "" + s) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (vr.hasOwnProperty(u) ? (s != null && u === "onScroll" && Y("scroll", e),
                            l || a === s || (l = [])) : (l = l || []).push(u, s))
        }
        n && (l = l || []).push("style", n);
        var u = l;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
    ;
qd = function (e, t, n, r) {
    n !== r && (t.flags |= 4)
}
    ;
function Zn(e, t) {
    if (!K)
        switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null;)
                    t.alternate !== null && (n = t),
                        t = t.sibling;
                n === null ? e.tail = null : n.sibling = null;
                break;
            case "collapsed":
                n = e.tail;
                for (var r = null; n !== null;)
                    n.alternate !== null && (r = n),
                        n = n.sibling;
                r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function xe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
        , n = 0
        , r = 0;
    if (t)
        for (var i = e.child; i !== null;)
            n |= i.lanes | i.childLanes,
                r |= i.subtreeFlags & 14680064,
                r |= i.flags & 14680064,
                i.return = e,
                i = i.sibling;
    else
        for (i = e.child; i !== null;)
            n |= i.lanes | i.childLanes,
                r |= i.subtreeFlags,
                r |= i.flags,
                i.return = e,
                i = i.sibling;
    return e.subtreeFlags |= r,
        e.childLanes = n,
        t
}
function rh(e, t, n) {
    var r = t.pendingProps;
    switch (js(t),
    t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return xe(t),
                null;
        case 1:
            return be(t.type) && Ai(),
                xe(t),
                null;
        case 3:
            return r = t.stateNode,
                $n(),
                X(Ne),
                X(Te),
                Ws(),
                r.pendingContext && (r.context = r.pendingContext,
                    r.pendingContext = null),
                (e === null || e.child === null) && (ni(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
                    et !== null && (ls(et),
                        et = null))),
                Ko(e, t),
                xe(t),
                null;
        case 5:
            Vs(t);
            var i = rn(Or.current);
            if (n = t.type,
                e !== null && t.stateNode != null)
                Xd(e, t, n, r, i),
                    e.ref !== t.ref && (t.flags |= 512,
                        t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null)
                        throw Error(z(166));
                    return xe(t),
                        null
                }
                if (e = rn(ct.current),
                    ni(t)) {
                    r = t.stateNode,
                        n = t.type;
                    var l = t.memoizedProps;
                    switch (r[st] = t,
                    r[Cr] = l,
                    e = (t.mode & 1) !== 0,
                    n) {
                        case "dialog":
                            Y("cancel", r),
                                Y("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            Y("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (i = 0; i < lr.length; i++)
                                Y(lr[i], r);
                            break;
                        case "source":
                            Y("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            Y("error", r),
                                Y("load", r);
                            break;
                        case "details":
                            Y("toggle", r);
                            break;
                        case "input":
                            _a(r, l),
                                Y("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!l.multiple
                            },
                                Y("invalid", r);
                            break;
                        case "textarea":
                            Pa(r, l),
                                Y("invalid", r)
                    }
                    ko(n, l),
                        i = null;
                    for (var o in l)
                        if (l.hasOwnProperty(o)) {
                            var a = l[o];
                            o === "children" ? typeof a == "string" ? r.textContent !== a && (l.suppressHydrationWarning !== !0 && ti(r.textContent, a, e),
                                i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (l.suppressHydrationWarning !== !0 && ti(r.textContent, a, e),
                                    i = ["children", "" + a]) : vr.hasOwnProperty(o) && a != null && o === "onScroll" && Y("scroll", r)
                        }
                    switch (n) {
                        case "input":
                            Qr(r),
                                Ca(r, l, !0);
                            break;
                        case "textarea":
                            Qr(r),
                                Oa(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof l.onClick == "function" && (r.onclick = Ri)
                    }
                    r = i,
                        t.updateQueue = r,
                        r !== null && (t.flags |= 4)
                } else {
                    o = i.nodeType === 9 ? i : i.ownerDocument,
                        e === "http://www.w3.org/1999/xhtml" && (e = Tc(n)),
                        e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"),
                            e.innerHTML = "<script><\/script>",
                            e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, {
                                is: r.is
                            }) : (e = o.createElement(n),
                                n === "select" && (o = e,
                                    r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n),
                        e[st] = t,
                        e[Cr] = r,
                        Yd(e, t, !1, !1),
                        t.stateNode = e;
                    e: {
                        switch (o = _o(n, r),
                        n) {
                            case "dialog":
                                Y("cancel", e),
                                    Y("close", e),
                                    i = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                Y("load", e),
                                    i = r;
                                break;
                            case "video":
                            case "audio":
                                for (i = 0; i < lr.length; i++)
                                    Y(lr[i], e);
                                i = r;
                                break;
                            case "source":
                                Y("error", e),
                                    i = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                Y("error", e),
                                    Y("load", e),
                                    i = r;
                                break;
                            case "details":
                                Y("toggle", e),
                                    i = r;
                                break;
                            case "input":
                                _a(e, r),
                                    i = wo(e, r),
                                    Y("invalid", e);
                                break;
                            case "option":
                                i = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                },
                                    i = re({}, r, {
                                        value: void 0
                                    }),
                                    Y("invalid", e);
                                break;
                            case "textarea":
                                Pa(e, r),
                                    i = Eo(e, r),
                                    Y("invalid", e);
                                break;
                            default:
                                i = r
                        }
                        ko(n, i),
                            a = i;
                        for (l in a)
                            if (a.hasOwnProperty(l)) {
                                var s = a[l];
                                l === "style" ? Cc(e, s) : l === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0,
                                    s != null && kc(e, s)) : l === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && gr(e, s) : typeof s == "number" && gr(e, "" + s) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (vr.hasOwnProperty(l) ? s != null && l === "onScroll" && Y("scroll", e) : s != null && Ss(e, l, s, o))
                            }
                        switch (n) {
                            case "input":
                                Qr(e),
                                    Ca(e, r, !1);
                                break;
                            case "textarea":
                                Qr(e),
                                    Oa(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + Qt(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple,
                                    l = r.value,
                                    l != null ? On(e, !!r.multiple, l, !1) : r.defaultValue != null && On(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof i.onClick == "function" && (e.onclick = Ri)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512,
                    t.flags |= 2097152)
            }
            return xe(t),
                null;
        case 6:
            if (e && t.stateNode != null)
                qd(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null)
                    throw Error(z(166));
                if (n = rn(Or.current),
                    rn(ct.current),
                    ni(t)) {
                    if (r = t.stateNode,
                        n = t.memoizedProps,
                        r[st] = t,
                        (l = r.nodeValue !== n) && (e = Fe,
                            e !== null))
                        switch (e.tag) {
                            case 3:
                                ti(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 && ti(r.nodeValue, n, (e.mode & 1) !== 0)
                        }
                    l && (t.flags |= 4)
                } else
                    r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                        r[st] = t,
                        t.stateNode = r
            }
            return xe(t),
                null;
        case 13:
            if (X(te),
                r = t.memoizedState,
                e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (K && $e !== null && t.mode & 1 && !(t.flags & 128))
                    pd(),
                        Rn(),
                        t.flags |= 98560,
                        l = !1;
                else if (l = ni(t),
                    r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!l)
                            throw Error(z(318));
                        if (l = t.memoizedState,
                            l = l !== null ? l.dehydrated : null,
                            !l)
                            throw Error(z(317));
                        l[st] = t
                    } else
                        Rn(),
                            !(t.flags & 128) && (t.memoizedState = null),
                            t.flags |= 4;
                    xe(t),
                        l = !1
                } else
                    et !== null && (ls(et),
                        et = null),
                        l = !0;
                if (!l)
                    return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n,
                t) : (r = r !== null,
                    r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
                        t.mode & 1 && (e === null || te.current & 1 ? fe === 0 && (fe = 3) : na())),
                    t.updateQueue !== null && (t.flags |= 4),
                    xe(t),
                    null);
        case 4:
            return $n(),
                Ko(e, t),
                e === null && kr(t.stateNode.containerInfo),
                xe(t),
                null;
        case 10:
            return $s(t.type._context),
                xe(t),
                null;
        case 17:
            return be(t.type) && Ai(),
                xe(t),
                null;
        case 19:
            if (X(te),
                l = t.memoizedState,
                l === null)
                return xe(t),
                    null;
            if (r = (t.flags & 128) !== 0,
                o = l.rendering,
                o === null)
                if (r)
                    Zn(l, !1);
                else {
                    if (fe !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (o = Gi(e),
                                o !== null) {
                                for (t.flags |= 128,
                                    Zn(l, !1),
                                    r = o.updateQueue,
                                    r !== null && (t.updateQueue = r,
                                        t.flags |= 4),
                                    t.subtreeFlags = 0,
                                    r = n,
                                    n = t.child; n !== null;)
                                    l = n,
                                        e = r,
                                        l.flags &= 14680066,
                                        o = l.alternate,
                                        o === null ? (l.childLanes = 0,
                                            l.lanes = e,
                                            l.child = null,
                                            l.subtreeFlags = 0,
                                            l.memoizedProps = null,
                                            l.memoizedState = null,
                                            l.updateQueue = null,
                                            l.dependencies = null,
                                            l.stateNode = null) : (l.childLanes = o.childLanes,
                                                l.lanes = o.lanes,
                                                l.child = o.child,
                                                l.subtreeFlags = 0,
                                                l.deletions = null,
                                                l.memoizedProps = o.memoizedProps,
                                                l.memoizedState = o.memoizedState,
                                                l.updateQueue = o.updateQueue,
                                                l.type = o.type,
                                                e = o.dependencies,
                                                l.dependencies = e === null ? null : {
                                                    lanes: e.lanes,
                                                    firstContext: e.firstContext
                                                }),
                                        n = n.sibling;
                                return Q(te, te.current & 1 | 2),
                                    t.child
                            }
                            e = e.sibling
                        }
                    l.tail !== null && se() > Hn && (t.flags |= 128,
                        r = !0,
                        Zn(l, !1),
                        t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = Gi(o),
                        e !== null) {
                        if (t.flags |= 128,
                            r = !0,
                            n = e.updateQueue,
                            n !== null && (t.updateQueue = n,
                                t.flags |= 4),
                            Zn(l, !0),
                            l.tail === null && l.tailMode === "hidden" && !o.alternate && !K)
                            return xe(t),
                                null
                    } else
                        2 * se() - l.renderingStartTime > Hn && n !== 1073741824 && (t.flags |= 128,
                            r = !0,
                            Zn(l, !1),
                            t.lanes = 4194304);
                l.isBackwards ? (o.sibling = t.child,
                    t.child = o) : (n = l.last,
                        n !== null ? n.sibling = o : t.child = o,
                        l.last = o)
            }
            return l.tail !== null ? (t = l.tail,
                l.rendering = t,
                l.tail = t.sibling,
                l.renderingStartTime = se(),
                t.sibling = null,
                n = te.current,
                Q(te, r ? n & 1 | 2 : n & 1),
                t) : (xe(t),
                    null);
        case 22:
        case 23:
            return ta(),
                r = t.memoizedState !== null,
                e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
                r && t.mode & 1 ? Re & 1073741824 && (xe(t),
                    t.subtreeFlags & 6 && (t.flags |= 8192)) : xe(t),
                null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(z(156, t.tag))
}
function ih(e, t) {
    switch (js(t),
    t.tag) {
        case 1:
            return be(t.type) && Ai(),
                e = t.flags,
                e & 65536 ? (t.flags = e & -65537 | 128,
                    t) : null;
        case 3:
            return $n(),
                X(Ne),
                X(Te),
                Ws(),
                e = t.flags,
                e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
                    t) : null;
        case 5:
            return Vs(t),
                null;
        case 13:
            if (X(te),
                e = t.memoizedState,
                e !== null && e.dehydrated !== null) {
                if (t.alternate === null)
                    throw Error(z(340));
                Rn()
            }
            return e = t.flags,
                e & 65536 ? (t.flags = e & -65537 | 128,
                    t) : null;
        case 19:
            return X(te),
                null;
        case 4:
            return $n(),
                null;
        case 10:
            return $s(t.type._context),
                null;
        case 22:
        case 23:
            return ta(),
                null;
        case 24:
            return null;
        default:
            return null
    }
}
var li = !1
    , Ee = !1
    , lh = typeof WeakSet == "function" ? WeakSet : Set
    , D = null;
function Cn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                oe(e, t, r)
            }
        else
            n.current = null
}
function Zo(e, t, n) {
    try {
        n()
    } catch (r) {
        oe(e, t, r)
    }
}
var gu = !1;
function oh(e, t) {
    if (jo = bi,
        e = ed(),
        Ns(e)) {
        if ("selectionStart" in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset
                        , l = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                            l.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var o = 0
                        , a = -1
                        , s = -1
                        , u = 0
                        , d = 0
                        , p = e
                        , h = null;
                    t: for (; ;) {
                        for (var v; p !== n || i !== 0 && p.nodeType !== 3 || (a = o + i),
                            p !== l || r !== 0 && p.nodeType !== 3 || (s = o + r),
                            p.nodeType === 3 && (o += p.nodeValue.length),
                            (v = p.firstChild) !== null;)
                            h = p,
                                p = v;
                        for (; ;) {
                            if (p === e)
                                break t;
                            if (h === n && ++u === i && (a = o),
                                h === l && ++d === r && (s = o),
                                (v = p.nextSibling) !== null)
                                break;
                            p = h,
                                h = p.parentNode
                        }
                        p = v
                    }
                    n = a === -1 || s === -1 ? null : {
                        start: a,
                        end: s
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (Do = {
        focusedElem: e,
        selectionRange: n
    },
        bi = !1,
        D = t; D !== null;)
        if (t = D,
            e = t.child,
            (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
                D = e;
        else
            for (; D !== null;) {
                t = D;
                try {
                    var y = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (y !== null) {
                                    var w = y.memoizedProps
                                        , O = y.memoizedState
                                        , m = t.stateNode
                                        , c = m.getSnapshotBeforeUpdate(t.elementType === t.type ? w : Ze(t.type, w), O);
                                    m.__reactInternalSnapshotBeforeUpdate = c
                                }
                                break;
                            case 3:
                                var f = t.stateNode.containerInfo;
                                f.nodeType === 1 ? f.textContent = "" : f.nodeType === 9 && f.documentElement && f.removeChild(f.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(z(163))
                        }
                } catch (g) {
                    oe(t, t.return, g)
                }
                if (e = t.sibling,
                    e !== null) {
                    e.return = t.return,
                        D = e;
                    break
                }
                D = t.return
            }
    return y = gu,
        gu = !1,
        y
}
function fr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
        r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var l = i.destroy;
                i.destroy = void 0,
                    l !== void 0 && Zo(t, n, l)
            }
            i = i.next
        } while (i !== r)
    }
}
function ml(e, t) {
    if (t = t.updateQueue,
        t = t !== null ? t.lastEffect : null,
        t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function Jo(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function Kd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
        Kd(t)),
        e.child = null,
        e.deletions = null,
        e.sibling = null,
        e.tag === 5 && (t = e.stateNode,
            t !== null && (delete t[st],
                delete t[Cr],
                delete t[$o],
                delete t[Bm],
                delete t[Vm])),
        e.stateNode = null,
        e.return = null,
        e.dependencies = null,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.pendingProps = null,
        e.stateNode = null,
        e.updateQueue = null
}
function Zd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function yu(e) {
    e: for (; ;) {
        for (; e.sibling === null;) {
            if (e.return === null || Zd(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
            e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
                e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function es(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
            t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
                t.insertBefore(e, n)) : (t = n,
                    t.appendChild(e)),
                n = n._reactRootContainer,
                n != null || t.onclick !== null || (t.onclick = Ri));
    else if (r !== 4 && (e = e.child,
        e !== null))
        for (es(e, t, n),
            e = e.sibling; e !== null;)
            es(e, t, n),
                e = e.sibling
}
function ts(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
            t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
        e !== null))
        for (ts(e, t, n),
            e = e.sibling; e !== null;)
            ts(e, t, n),
                e = e.sibling
}
var ge = null
    , Je = !1;
function Ot(e, t, n) {
    for (n = n.child; n !== null;)
        Jd(e, t, n),
            n = n.sibling
}
function Jd(e, t, n) {
    if (ut && typeof ut.onCommitFiberUnmount == "function")
        try {
            ut.onCommitFiberUnmount(ol, n)
        } catch { }
    switch (n.tag) {
        case 5:
            Ee || Cn(n, t);
        case 6:
            var r = ge
                , i = Je;
            ge = null,
                Ot(e, t, n),
                ge = r,
                Je = i,
                ge !== null && (Je ? (e = ge,
                    n = n.stateNode,
                    e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ge.removeChild(n.stateNode));
            break;
        case 18:
            ge !== null && (Je ? (e = ge,
                n = n.stateNode,
                e.nodeType === 8 ? Gl(e.parentNode, n) : e.nodeType === 1 && Gl(e, n),
                xr(e)) : Gl(ge, n.stateNode));
            break;
        case 4:
            r = ge,
                i = Je,
                ge = n.stateNode.containerInfo,
                Je = !0,
                Ot(e, t, n),
                ge = r,
                Je = i;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Ee && (r = n.updateQueue,
                r !== null && (r = r.lastEffect,
                    r !== null))) {
                i = r = r.next;
                do {
                    var l = i
                        , o = l.destroy;
                    l = l.tag,
                        o !== void 0 && (l & 2 || l & 4) && Zo(n, t, o),
                        i = i.next
                } while (i !== r)
            }
            Ot(e, t, n);
            break;
        case 1:
            if (!Ee && (Cn(n, t),
                r = n.stateNode,
                typeof r.componentWillUnmount == "function"))
                try {
                    r.props = n.memoizedProps,
                        r.state = n.memoizedState,
                        r.componentWillUnmount()
                } catch (a) {
                    oe(n, t, a)
                }
            Ot(e, t, n);
            break;
        case 21:
            Ot(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (Ee = (r = Ee) || n.memoizedState !== null,
                Ot(e, t, n),
                Ee = r) : Ot(e, t, n);
            break;
        default:
            Ot(e, t, n)
    }
}
function wu(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new lh),
            t.forEach(function (r) {
                var i = hh.bind(null, e, r);
                n.has(r) || (n.add(r),
                    r.then(i, i))
            })
    }
}
function Ke(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var l = e
                    , o = t
                    , a = o;
                e: for (; a !== null;) {
                    switch (a.tag) {
                        case 5:
                            ge = a.stateNode,
                                Je = !1;
                            break e;
                        case 3:
                            ge = a.stateNode.containerInfo,
                                Je = !0;
                            break e;
                        case 4:
                            ge = a.stateNode.containerInfo,
                                Je = !0;
                            break e
                    }
                    a = a.return
                }
                if (ge === null)
                    throw Error(z(160));
                Jd(l, o, i),
                    ge = null,
                    Je = !1;
                var s = i.alternate;
                s !== null && (s.return = null),
                    i.return = null
            } catch (u) {
                oe(i, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;)
            ef(t, e),
                t = t.sibling
}
function ef(e, t) {
    var n = e.alternate
        , r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (Ke(t, e),
                it(e),
                r & 4) {
                try {
                    fr(3, e, e.return),
                        ml(3, e)
                } catch (w) {
                    oe(e, e.return, w)
                }
                try {
                    fr(5, e, e.return)
                } catch (w) {
                    oe(e, e.return, w)
                }
            }
            break;
        case 1:
            Ke(t, e),
                it(e),
                r & 512 && n !== null && Cn(n, n.return);
            break;
        case 5:
            if (Ke(t, e),
                it(e),
                r & 512 && n !== null && Cn(n, n.return),
                e.flags & 32) {
                var i = e.stateNode;
                try {
                    gr(i, "")
                } catch (w) {
                    oe(e, e.return, w)
                }
            }
            if (r & 4 && (i = e.stateNode,
                i != null)) {
                var l = e.memoizedProps
                    , o = n !== null ? n.memoizedProps : l
                    , a = e.type
                    , s = e.updateQueue;
                if (e.updateQueue = null,
                    s !== null)
                    try {
                        a === "input" && l.type === "radio" && l.name != null && xc(i, l),
                            _o(a, o);
                        var u = _o(a, l);
                        for (o = 0; o < s.length; o += 2) {
                            var d = s[o]
                                , p = s[o + 1];
                            d === "style" ? Cc(i, p) : d === "dangerouslySetInnerHTML" ? kc(i, p) : d === "children" ? gr(i, p) : Ss(i, d, p, u)
                        }
                        switch (a) {
                            case "input":
                                So(i, l);
                                break;
                            case "textarea":
                                Ec(i, l);
                                break;
                            case "select":
                                var h = i._wrapperState.wasMultiple;
                                i._wrapperState.wasMultiple = !!l.multiple;
                                var v = l.value;
                                v != null ? On(i, !!l.multiple, v, !1) : h !== !!l.multiple && (l.defaultValue != null ? On(i, !!l.multiple, l.defaultValue, !0) : On(i, !!l.multiple, l.multiple ? [] : "", !1))
                        }
                        i[Cr] = l
                    } catch (w) {
                        oe(e, e.return, w)
                    }
            }
            break;
        case 6:
            if (Ke(t, e),
                it(e),
                r & 4) {
                if (e.stateNode === null)
                    throw Error(z(162));
                i = e.stateNode,
                    l = e.memoizedProps;
                try {
                    i.nodeValue = l
                } catch (w) {
                    oe(e, e.return, w)
                }
            }
            break;
        case 3:
            if (Ke(t, e),
                it(e),
                r & 4 && n !== null && n.memoizedState.isDehydrated)
                try {
                    xr(t.containerInfo)
                } catch (w) {
                    oe(e, e.return, w)
                }
            break;
        case 4:
            Ke(t, e),
                it(e);
            break;
        case 13:
            Ke(t, e),
                it(e),
                i = e.child,
                i.flags & 8192 && (l = i.memoizedState !== null,
                    i.stateNode.isHidden = l,
                    !l || i.alternate !== null && i.alternate.memoizedState !== null || (Js = se())),
                r & 4 && wu(e);
            break;
        case 22:
            if (d = n !== null && n.memoizedState !== null,
                e.mode & 1 ? (Ee = (u = Ee) || d,
                    Ke(t, e),
                    Ee = u) : Ke(t, e),
                it(e),
                r & 8192) {
                if (u = e.memoizedState !== null,
                    (e.stateNode.isHidden = u) && !d && e.mode & 1)
                    for (D = e,
                        d = e.child; d !== null;) {
                        for (p = D = d; D !== null;) {
                            switch (h = D,
                            v = h.child,
                            h.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    fr(4, h, h.return);
                                    break;
                                case 1:
                                    Cn(h, h.return);
                                    var y = h.stateNode;
                                    if (typeof y.componentWillUnmount == "function") {
                                        r = h,
                                            n = h.return;
                                        try {
                                            t = r,
                                                y.props = t.memoizedProps,
                                                y.state = t.memoizedState,
                                                y.componentWillUnmount()
                                        } catch (w) {
                                            oe(r, n, w)
                                        }
                                    }
                                    break;
                                case 5:
                                    Cn(h, h.return);
                                    break;
                                case 22:
                                    if (h.memoizedState !== null) {
                                        xu(p);
                                        continue
                                    }
                            }
                            v !== null ? (v.return = h,
                                D = v) : xu(p)
                        }
                        d = d.sibling
                    }
                e: for (d = null,
                    p = e; ;) {
                    if (p.tag === 5) {
                        if (d === null) {
                            d = p;
                            try {
                                i = p.stateNode,
                                    u ? (l = i.style,
                                        typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (a = p.stateNode,
                                            s = p.memoizedProps.style,
                                            o = s != null && s.hasOwnProperty("display") ? s.display : null,
                                            a.style.display = _c("display", o))
                            } catch (w) {
                                oe(e, e.return, w)
                            }
                        }
                    } else if (p.tag === 6) {
                        if (d === null)
                            try {
                                p.stateNode.nodeValue = u ? "" : p.memoizedProps
                            } catch (w) {
                                oe(e, e.return, w)
                            }
                    } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e) && p.child !== null) {
                        p.child.return = p,
                            p = p.child;
                        continue
                    }
                    if (p === e)
                        break e;
                    for (; p.sibling === null;) {
                        if (p.return === null || p.return === e)
                            break e;
                        d === p && (d = null),
                            p = p.return
                    }
                    d === p && (d = null),
                        p.sibling.return = p.return,
                        p = p.sibling
                }
            }
            break;
        case 19:
            Ke(t, e),
                it(e),
                r & 4 && wu(e);
            break;
        case 21:
            break;
        default:
            Ke(t, e),
                it(e)
    }
}
function it(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (Zd(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(z(160))
            }
            switch (r.tag) {
                case 5:
                    var i = r.stateNode;
                    r.flags & 32 && (gr(i, ""),
                        r.flags &= -33);
                    var l = yu(e);
                    ts(e, l, i);
                    break;
                case 3:
                case 4:
                    var o = r.stateNode.containerInfo
                        , a = yu(e);
                    es(e, a, o);
                    break;
                default:
                    throw Error(z(161))
            }
        } catch (s) {
            oe(e, e.return, s)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function sh(e, t, n) {
    D = e,
        tf(e)
}
function tf(e, t, n) {
    for (var r = (e.mode & 1) !== 0; D !== null;) {
        var i = D
            , l = i.child;
        if (i.tag === 22 && r) {
            var o = i.memoizedState !== null || li;
            if (!o) {
                var a = i.alternate
                    , s = a !== null && a.memoizedState !== null || Ee;
                a = li;
                var u = Ee;
                if (li = o,
                    (Ee = s) && !u)
                    for (D = i; D !== null;)
                        o = D,
                            s = o.child,
                            o.tag === 22 && o.memoizedState !== null ? Eu(i) : s !== null ? (s.return = o,
                                D = s) : Eu(i);
                for (; l !== null;)
                    D = l,
                        tf(l),
                        l = l.sibling;
                D = i,
                    li = a,
                    Ee = u
            }
            Su(e)
        } else
            i.subtreeFlags & 8772 && l !== null ? (l.return = i,
                D = l) : Su(e)
    }
}
function Su(e) {
    for (; D !== null;) {
        var t = D;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Ee || ml(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !Ee)
                                if (n === null)
                                    r.componentDidMount();
                                else {
                                    var i = t.elementType === t.type ? n.memoizedProps : Ze(t.type, n.memoizedProps);
                                    r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                                }
                            var l = t.updateQueue;
                            l !== null && ru(t, l, r);
                            break;
                        case 3:
                            var o = t.updateQueue;
                            if (o !== null) {
                                if (n = null,
                                    t.child !== null)
                                    switch (t.child.tag) {
                                        case 5:
                                            n = t.child.stateNode;
                                            break;
                                        case 1:
                                            n = t.child.stateNode
                                    }
                                ru(t, o, n)
                            }
                            break;
                        case 5:
                            var a = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = a;
                                var s = t.memoizedProps;
                                switch (t.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        s.autoFocus && n.focus();
                                        break;
                                    case "img":
                                        s.src && (n.src = s.src)
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var u = t.alternate;
                                if (u !== null) {
                                    var d = u.memoizedState;
                                    if (d !== null) {
                                        var p = d.dehydrated;
                                        p !== null && xr(p)
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(z(163))
                    }
                Ee || t.flags & 512 && Jo(t)
            } catch (h) {
                oe(t, t.return, h)
            }
        }
        if (t === e) {
            D = null;
            break
        }
        if (n = t.sibling,
            n !== null) {
            n.return = t.return,
                D = n;
            break
        }
        D = t.return
    }
}
function xu(e) {
    for (; D !== null;) {
        var t = D;
        if (t === e) {
            D = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
                D = n;
            break
        }
        D = t.return
    }
}
function Eu(e) {
    for (; D !== null;) {
        var t = D;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        ml(4, t)
                    } catch (s) {
                        oe(t, n, s)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var i = t.return;
                        try {
                            r.componentDidMount()
                        } catch (s) {
                            oe(t, i, s)
                        }
                    }
                    var l = t.return;
                    try {
                        Jo(t)
                    } catch (s) {
                        oe(t, l, s)
                    }
                    break;
                case 5:
                    var o = t.return;
                    try {
                        Jo(t)
                    } catch (s) {
                        oe(t, o, s)
                    }
            }
        } catch (s) {
            oe(t, t.return, s)
        }
        if (t === e) {
            D = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return,
                D = a;
            break
        }
        D = t.return
    }
}
var ah = Math.ceil
    , Yi = kt.ReactCurrentDispatcher
    , Ks = kt.ReactCurrentOwner
    , Ye = kt.ReactCurrentBatchConfig
    , B = 0
    , ve = null
    , ue = null
    , ye = 0
    , Re = 0
    , Pn = qt(0)
    , fe = 0
    , Ir = null
    , cn = 0
    , hl = 0
    , Zs = 0
    , pr = null
    , ze = null
    , Js = 0
    , Hn = 1 / 0
    , mt = null
    , Xi = !1
    , ns = null
    , Vt = null
    , oi = !1
    , Dt = null
    , qi = 0
    , mr = 0
    , rs = null
    , ki = -1
    , _i = 0;
function Ce() {
    return B & 6 ? se() : ki !== -1 ? ki : ki = se()
}
function Wt(e) {
    return e.mode & 1 ? B & 2 && ye !== 0 ? ye & -ye : Gm.transition !== null ? (_i === 0 && (_i = Ac()),
        _i) : (e = W,
            e !== 0 || (e = window.event,
                e = e === void 0 ? 16 : Gc(e.type)),
            e) : 1
}
function nt(e, t, n, r) {
    if (50 < mr)
        throw mr = 0,
        rs = null,
        Error(z(185));
    br(e, n, r),
        (!(B & 2) || e !== ve) && (e === ve && (!(B & 2) && (hl |= n),
            fe === 4 && bt(e, ye)),
            je(e, r),
            n === 1 && B === 0 && !(t.mode & 1) && (Hn = se() + 500,
                dl && Kt()))
}
function je(e, t) {
    var n = e.callbackNode;
    Gp(e, t);
    var r = Ni(e, e === ve ? ye : 0);
    if (r === 0)
        n !== null && za(n),
            e.callbackNode = null,
            e.callbackPriority = 0;
    else if (t = r & -r,
        e.callbackPriority !== t) {
        if (n != null && za(n),
            t === 1)
            e.tag === 0 ? Wm(Tu.bind(null, e)) : cd(Tu.bind(null, e)),
                Fm(function () {
                    !(B & 6) && Kt()
                }),
                n = null;
        else {
            switch ($c(r)) {
                case 1:
                    n = _s;
                    break;
                case 4:
                    n = Dc;
                    break;
                case 16:
                    n = Ii;
                    break;
                case 536870912:
                    n = Rc;
                    break;
                default:
                    n = Ii
            }
            n = cf(n, nf.bind(null, e))
        }
        e.callbackPriority = t,
            e.callbackNode = n
    }
}
function nf(e, t) {
    if (ki = -1,
        _i = 0,
        B & 6)
        throw Error(z(327));
    var n = e.callbackNode;
    if (Nn() && e.callbackNode !== n)
        return null;
    var r = Ni(e, e === ve ? ye : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = Ki(e, r);
    else {
        t = r;
        var i = B;
        B |= 2;
        var l = lf();
        (ve !== e || ye !== t) && (mt = null,
            Hn = se() + 500,
            ln(e, t));
        do
            try {
                dh();
                break
            } catch (a) {
                rf(e, a)
            }
        while (1);
        As(),
            Yi.current = l,
            B = i,
            ue !== null ? t = 0 : (ve = null,
                ye = 0,
                t = fe)
    }
    if (t !== 0) {
        if (t === 2 && (i = Lo(e),
            i !== 0 && (r = i,
                t = is(e, i))),
            t === 1)
            throw n = Ir,
            ln(e, 0),
            bt(e, r),
            je(e, se()),
            n;
        if (t === 6)
            bt(e, r);
        else {
            if (i = e.current.alternate,
                !(r & 30) && !uh(i) && (t = Ki(e, r),
                    t === 2 && (l = Lo(e),
                        l !== 0 && (r = l,
                            t = is(e, l))),
                    t === 1))
                throw n = Ir,
                ln(e, 0),
                bt(e, r),
                je(e, se()),
                n;
            switch (e.finishedWork = i,
            e.finishedLanes = r,
            t) {
                case 0:
                case 1:
                    throw Error(z(345));
                case 2:
                    en(e, ze, mt);
                    break;
                case 3:
                    if (bt(e, r),
                        (r & 130023424) === r && (t = Js + 500 - se(),
                            10 < t)) {
                        if (Ni(e, 0) !== 0)
                            break;
                        if (i = e.suspendedLanes,
                            (i & r) !== r) {
                            Ce(),
                                e.pingedLanes |= e.suspendedLanes & i;
                            break
                        }
                        e.timeoutHandle = Ao(en.bind(null, e, ze, mt), t);
                        break
                    }
                    en(e, ze, mt);
                    break;
                case 4:
                    if (bt(e, r),
                        (r & 4194240) === r)
                        break;
                    for (t = e.eventTimes,
                        i = -1; 0 < r;) {
                        var o = 31 - tt(r);
                        l = 1 << o,
                            o = t[o],
                            o > i && (i = o),
                            r &= ~l
                    }
                    if (r = i,
                        r = se() - r,
                        r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * ah(r / 1960)) - r,
                        10 < r) {
                        e.timeoutHandle = Ao(en.bind(null, e, ze, mt), r);
                        break
                    }
                    en(e, ze, mt);
                    break;
                case 5:
                    en(e, ze, mt);
                    break;
                default:
                    throw Error(z(329))
            }
        }
    }
    return je(e, se()),
        e.callbackNode === n ? nf.bind(null, e) : null
}
function is(e, t) {
    var n = pr;
    return e.current.memoizedState.isDehydrated && (ln(e, t).flags |= 256),
        e = Ki(e, t),
        e !== 2 && (t = ze,
            ze = n,
            t !== null && ls(t)),
        e
}
function ls(e) {
    ze === null ? ze = e : ze.push.apply(ze, e)
}
function uh(e) {
    for (var t = e; ;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
                n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r]
                        , l = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!rt(l(), i))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
            t.subtreeFlags & 16384 && n !== null)
            n.return = t,
                t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
                t = t.sibling
        }
    }
    return !0
}
function bt(e, t) {
    for (t &= ~Zs,
        t &= ~hl,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes; 0 < t;) {
        var n = 31 - tt(t)
            , r = 1 << n;
        e[n] = -1,
            t &= ~r
    }
}
function Tu(e) {
    if (B & 6)
        throw Error(z(327));
    Nn();
    var t = Ni(e, 0);
    if (!(t & 1))
        return je(e, se()),
            null;
    var n = Ki(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Lo(e);
        r !== 0 && (t = r,
            n = is(e, r))
    }
    if (n === 1)
        throw n = Ir,
        ln(e, 0),
        bt(e, t),
        je(e, se()),
        n;
    if (n === 6)
        throw Error(z(345));
    return e.finishedWork = e.current.alternate,
        e.finishedLanes = t,
        en(e, ze, mt),
        je(e, se()),
        null
}
function ea(e, t) {
    var n = B;
    B |= 1;
    try {
        return e(t)
    } finally {
        B = n,
            B === 0 && (Hn = se() + 500,
                dl && Kt())
    }
}
function dn(e) {
    Dt !== null && Dt.tag === 0 && !(B & 6) && Nn();
    var t = B;
    B |= 1;
    var n = Ye.transition
        , r = W;
    try {
        if (Ye.transition = null,
            W = 1,
            e)
            return e()
    } finally {
        W = r,
            Ye.transition = n,
            B = t,
            !(B & 6) && Kt()
    }
}
function ta() {
    Re = Pn.current,
        X(Pn)
}
function ln(e, t) {
    e.finishedWork = null,
        e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
        $m(n)),
        ue !== null)
        for (n = ue.return; n !== null;) {
            var r = n;
            switch (js(r),
            r.tag) {
                case 1:
                    r = r.type.childContextTypes,
                        r != null && Ai();
                    break;
                case 3:
                    $n(),
                        X(Ne),
                        X(Te),
                        Ws();
                    break;
                case 5:
                    Vs(r);
                    break;
                case 4:
                    $n();
                    break;
                case 13:
                    X(te);
                    break;
                case 19:
                    X(te);
                    break;
                case 10:
                    $s(r.type._context);
                    break;
                case 22:
                case 23:
                    ta()
            }
            n = n.return
        }
    if (ve = e,
        ue = e = Gt(e.current, null),
        ye = Re = t,
        fe = 0,
        Ir = null,
        Zs = hl = cn = 0,
        ze = pr = null,
        nn !== null) {
        for (t = 0; t < nn.length; t++)
            if (n = nn[t],
                r = n.interleaved,
                r !== null) {
                n.interleaved = null;
                var i = r.next
                    , l = n.pending;
                if (l !== null) {
                    var o = l.next;
                    l.next = i,
                        r.next = o
                }
                n.pending = r
            }
        nn = null
    }
    return e
}
function rf(e, t) {
    do {
        var n = ue;
        try {
            if (As(),
                xi.current = Qi,
                Ui) {
                for (var r = ne.memoizedState; r !== null;) {
                    var i = r.queue;
                    i !== null && (i.pending = null),
                        r = r.next
                }
                Ui = !1
            }
            if (un = 0,
                he = de = ne = null,
                dr = !1,
                Mr = 0,
                Ks.current = null,
                n === null || n.return === null) {
                fe = 1,
                    Ir = t,
                    ue = null;
                break
            }
            e: {
                var l = e
                    , o = n.return
                    , a = n
                    , s = t;
                if (t = ye,
                    a.flags |= 32768,
                    s !== null && typeof s == "object" && typeof s.then == "function") {
                    var u = s
                        , d = a
                        , p = d.tag;
                    if (!(d.mode & 1) && (p === 0 || p === 11 || p === 15)) {
                        var h = d.alternate;
                        h ? (d.updateQueue = h.updateQueue,
                            d.memoizedState = h.memoizedState,
                            d.lanes = h.lanes) : (d.updateQueue = null,
                                d.memoizedState = null)
                    }
                    var v = cu(o);
                    if (v !== null) {
                        v.flags &= -257,
                            du(v, o, a, l, t),
                            v.mode & 1 && uu(l, u, t),
                            t = v,
                            s = u;
                        var y = t.updateQueue;
                        if (y === null) {
                            var w = new Set;
                            w.add(s),
                                t.updateQueue = w
                        } else
                            y.add(s);
                        break e
                    } else {
                        if (!(t & 1)) {
                            uu(l, u, t),
                                na();
                            break e
                        }
                        s = Error(z(426))
                    }
                } else if (K && a.mode & 1) {
                    var O = cu(o);
                    if (O !== null) {
                        !(O.flags & 65536) && (O.flags |= 256),
                            du(O, o, a, l, t),
                            Ds(Fn(s, a));
                        break e
                    }
                }
                l = s = Fn(s, a),
                    fe !== 4 && (fe = 2),
                    pr === null ? pr = [l] : pr.push(l),
                    l = o;
                do {
                    switch (l.tag) {
                        case 3:
                            l.flags |= 65536,
                                t &= -t,
                                l.lanes |= t;
                            var m = Fd(l, s, t);
                            nu(l, m);
                            break e;
                        case 1:
                            a = s;
                            var c = l.type
                                , f = l.stateNode;
                            if (!(l.flags & 128) && (typeof c.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (Vt === null || !Vt.has(f)))) {
                                l.flags |= 65536,
                                    t &= -t,
                                    l.lanes |= t;
                                var g = Hd(l, a, t);
                                nu(l, g);
                                break e
                            }
                    }
                    l = l.return
                } while (l !== null)
            }
            sf(n)
        } catch (S) {
            t = S,
                ue === n && n !== null && (ue = n = n.return);
            continue
        }
        break
    } while (1)
}
function lf() {
    var e = Yi.current;
    return Yi.current = Qi,
        e === null ? Qi : e
}
function na() {
    (fe === 0 || fe === 3 || fe === 2) && (fe = 4),
        ve === null || !(cn & 268435455) && !(hl & 268435455) || bt(ve, ye)
}
function Ki(e, t) {
    var n = B;
    B |= 2;
    var r = lf();
    (ve !== e || ye !== t) && (mt = null,
        ln(e, t));
    do
        try {
            ch();
            break
        } catch (i) {
            rf(e, i)
        }
    while (1);
    if (As(),
        B = n,
        Yi.current = r,
        ue !== null)
        throw Error(z(261));
    return ve = null,
        ye = 0,
        fe
}
function ch() {
    for (; ue !== null;)
        of(ue)
}
function dh() {
    for (; ue !== null && !Dp();)
        of(ue)
}
function of(e) {
    var t = uf(e.alternate, e, Re);
    e.memoizedProps = e.pendingProps,
        t === null ? sf(e) : ue = t,
        Ks.current = null
}
function sf(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
            t.flags & 32768) {
            if (n = ih(n, t),
                n !== null) {
                n.flags &= 32767,
                    ue = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                    e.subtreeFlags = 0,
                    e.deletions = null;
            else {
                fe = 6,
                    ue = null;
                return
            }
        } else if (n = rh(n, t, Re),
            n !== null) {
            ue = n;
            return
        }
        if (t = t.sibling,
            t !== null) {
            ue = t;
            return
        }
        ue = t = e
    } while (t !== null);
    fe === 0 && (fe = 5)
}
function en(e, t, n) {
    var r = W
        , i = Ye.transition;
    try {
        Ye.transition = null,
            W = 1,
            fh(e, t, n, r)
    } finally {
        Ye.transition = i,
            W = r
    }
    return null
}
function fh(e, t, n, r) {
    do
        Nn();
    while (Dt !== null);
    if (B & 6)
        throw Error(z(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
        e.finishedLanes = 0,
        n === e.current)
        throw Error(z(177));
    e.callbackNode = null,
        e.callbackPriority = 0;
    var l = n.lanes | n.childLanes;
    if (Up(e, l),
        e === ve && (ue = ve = null,
            ye = 0),
        !(n.subtreeFlags & 2064) && !(n.flags & 2064) || oi || (oi = !0,
            cf(Ii, function () {
                return Nn(),
                    null
            })),
        l = (n.flags & 15990) !== 0,
        n.subtreeFlags & 15990 || l) {
        l = Ye.transition,
            Ye.transition = null;
        var o = W;
        W = 1;
        var a = B;
        B |= 4,
            Ks.current = null,
            oh(e, n),
            ef(n, e),
            Im(Do),
            bi = !!jo,
            Do = jo = null,
            e.current = n,
            sh(n),
            Rp(),
            B = a,
            W = o,
            Ye.transition = l
    } else
        e.current = n;
    if (oi && (oi = !1,
        Dt = e,
        qi = i),
        l = e.pendingLanes,
        l === 0 && (Vt = null),
        Fp(n.stateNode),
        je(e, se()),
        t !== null)
        for (r = e.onRecoverableError,
            n = 0; n < t.length; n++)
            i = t[n],
                r(i.value, {
                    componentStack: i.stack,
                    digest: i.digest
                });
    if (Xi)
        throw Xi = !1,
        e = ns,
        ns = null,
        e;
    return qi & 1 && e.tag !== 0 && Nn(),
        l = e.pendingLanes,
        l & 1 ? e === rs ? mr++ : (mr = 0,
            rs = e) : mr = 0,
        Kt(),
        null
}
function Nn() {
    if (Dt !== null) {
        var e = $c(qi)
            , t = Ye.transition
            , n = W;
        try {
            if (Ye.transition = null,
                W = 16 > e ? 16 : e,
                Dt === null)
                var r = !1;
            else {
                if (e = Dt,
                    Dt = null,
                    qi = 0,
                    B & 6)
                    throw Error(z(331));
                var i = B;
                for (B |= 4,
                    D = e.current; D !== null;) {
                    var l = D
                        , o = l.child;
                    if (D.flags & 16) {
                        var a = l.deletions;
                        if (a !== null) {
                            for (var s = 0; s < a.length; s++) {
                                var u = a[s];
                                for (D = u; D !== null;) {
                                    var d = D;
                                    switch (d.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            fr(8, d, l)
                                    }
                                    var p = d.child;
                                    if (p !== null)
                                        p.return = d,
                                            D = p;
                                    else
                                        for (; D !== null;) {
                                            d = D;
                                            var h = d.sibling
                                                , v = d.return;
                                            if (Kd(d),
                                                d === u) {
                                                D = null;
                                                break
                                            }
                                            if (h !== null) {
                                                h.return = v,
                                                    D = h;
                                                break
                                            }
                                            D = v
                                        }
                                }
                            }
                            var y = l.alternate;
                            if (y !== null) {
                                var w = y.child;
                                if (w !== null) {
                                    y.child = null;
                                    do {
                                        var O = w.sibling;
                                        w.sibling = null,
                                            w = O
                                    } while (w !== null)
                                }
                            }
                            D = l
                        }
                    }
                    if (l.subtreeFlags & 2064 && o !== null)
                        o.return = l,
                            D = o;
                    else
                        e: for (; D !== null;) {
                            if (l = D,
                                l.flags & 2048)
                                switch (l.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        fr(9, l, l.return)
                                }
                            var m = l.sibling;
                            if (m !== null) {
                                m.return = l.return,
                                    D = m;
                                break e
                            }
                            D = l.return
                        }
                }
                var c = e.current;
                for (D = c; D !== null;) {
                    o = D;
                    var f = o.child;
                    if (o.subtreeFlags & 2064 && f !== null)
                        f.return = o,
                            D = f;
                    else
                        e: for (o = c; D !== null;) {
                            if (a = D,
                                a.flags & 2048)
                                try {
                                    switch (a.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            ml(9, a)
                                    }
                                } catch (S) {
                                    oe(a, a.return, S)
                                }
                            if (a === o) {
                                D = null;
                                break e
                            }
                            var g = a.sibling;
                            if (g !== null) {
                                g.return = a.return,
                                    D = g;
                                break e
                            }
                            D = a.return
                        }
                }
                if (B = i,
                    Kt(),
                    ut && typeof ut.onPostCommitFiberRoot == "function")
                    try {
                        ut.onPostCommitFiberRoot(ol, e)
                    } catch { }
                r = !0
            }
            return r
        } finally {
            W = n,
                Ye.transition = t
        }
    }
    return !1
}
function ku(e, t, n) {
    t = Fn(n, t),
        t = Fd(e, t, 1),
        e = Bt(e, t, 1),
        t = Ce(),
        e !== null && (br(e, 1, t),
            je(e, t))
}
function oe(e, t, n) {
    if (e.tag === 3)
        ku(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                ku(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Vt === null || !Vt.has(r))) {
                    e = Fn(n, e),
                        e = Hd(t, e, 1),
                        t = Bt(t, e, 1),
                        e = Ce(),
                        t !== null && (br(t, 1, e),
                            je(t, e));
                    break
                }
            }
            t = t.return
        }
}
function ph(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
        t = Ce(),
        e.pingedLanes |= e.suspendedLanes & n,
        ve === e && (ye & n) === n && (fe === 4 || fe === 3 && (ye & 130023424) === ye && 500 > se() - Js ? ln(e, 0) : Zs |= n),
        je(e, t)
}
function af(e, t) {
    t === 0 && (e.mode & 1 ? (t = qr,
        qr <<= 1,
        !(qr & 130023424) && (qr = 4194304)) : t = 1);
    var n = Ce();
    e = Et(e, t),
        e !== null && (br(e, t, n),
            je(e, n))
}
function mh(e) {
    var t = e.memoizedState
        , n = 0;
    t !== null && (n = t.retryLane),
        af(e, n)
}
function hh(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode
                , i = e.memoizedState;
            i !== null && (n = i.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(z(314))
    }
    r !== null && r.delete(t),
        af(e, n)
}
var uf;
uf = function (e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ne.current)
            Ie = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return Ie = !1,
                    nh(e, t, n);
            Ie = !!(e.flags & 131072)
        }
    else
        Ie = !1,
            K && t.flags & 1048576 && dd(t, Hi, t.index);
    switch (t.lanes = 0,
    t.tag) {
        case 2:
            var r = t.type;
            Ti(e, t),
                e = t.pendingProps;
            var i = Dn(t, Te.current);
            In(t, n),
                i = Us(null, t, r, e, i, n);
            var l = Qs();
            return t.flags |= 1,
                typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1,
                    t.memoizedState = null,
                    t.updateQueue = null,
                    be(r) ? (l = !0,
                        $i(t)) : l = !1,
                    t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
                    Hs(t),
                    i.updater = fl,
                    t.stateNode = i,
                    i._reactInternals = t,
                    Go(t, r, e, n),
                    t = Yo(null, t, r, !0, l, n)) : (t.tag = 0,
                        K && l && bs(t),
                        _e(null, t, i, n),
                        t = t.child),
                t;
        case 16:
            r = t.elementType;
            e: {
                switch (Ti(e, t),
                e = t.pendingProps,
                i = r._init,
                r = i(r._payload),
                t.type = r,
                i = t.tag = gh(r),
                e = Ze(r, e),
                i) {
                    case 0:
                        t = Qo(null, t, r, e, n);
                        break e;
                    case 1:
                        t = mu(null, t, r, e, n);
                        break e;
                    case 11:
                        t = fu(null, t, r, e, n);
                        break e;
                    case 14:
                        t = pu(null, t, r, Ze(r.type, e), n);
                        break e
                }
                throw Error(z(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type,
                i = t.pendingProps,
                i = t.elementType === r ? i : Ze(r, i),
                Qo(e, t, r, i, n);
        case 1:
            return r = t.type,
                i = t.pendingProps,
                i = t.elementType === r ? i : Ze(r, i),
                mu(e, t, r, i, n);
        case 3:
            e: {
                if (Gd(t),
                    e === null)
                    throw Error(z(387));
                r = t.pendingProps,
                    l = t.memoizedState,
                    i = l.element,
                    hd(e, t),
                    Wi(t, r, null, n);
                var o = t.memoizedState;
                if (r = o.element,
                    l.isDehydrated)
                    if (l = {
                        element: r,
                        isDehydrated: !1,
                        cache: o.cache,
                        pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                        transitions: o.transitions
                    },
                        t.updateQueue.baseState = l,
                        t.memoizedState = l,
                        t.flags & 256) {
                        i = Fn(Error(z(423)), t),
                            t = hu(e, t, r, n, i);
                        break e
                    } else if (r !== i) {
                        i = Fn(Error(z(424)), t),
                            t = hu(e, t, r, n, i);
                        break e
                    } else
                        for ($e = Ht(t.stateNode.containerInfo.firstChild),
                            Fe = t,
                            K = !0,
                            et = null,
                            n = wd(t, null, r, n),
                            t.child = n; n;)
                            n.flags = n.flags & -3 | 4096,
                                n = n.sibling;
                else {
                    if (Rn(),
                        r === i) {
                        t = Tt(e, t, n);
                        break e
                    }
                    _e(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return Sd(t),
                e === null && Bo(t),
                r = t.type,
                i = t.pendingProps,
                l = e !== null ? e.memoizedProps : null,
                o = i.children,
                Ro(r, i) ? o = null : l !== null && Ro(r, l) && (t.flags |= 32),
                Wd(e, t),
                _e(e, t, o, n),
                t.child;
        case 6:
            return e === null && Bo(t),
                null;
        case 13:
            return Ud(e, t, n);
        case 4:
            return Bs(t, t.stateNode.containerInfo),
                r = t.pendingProps,
                e === null ? t.child = An(t, null, r, n) : _e(e, t, r, n),
                t.child;
        case 11:
            return r = t.type,
                i = t.pendingProps,
                i = t.elementType === r ? i : Ze(r, i),
                fu(e, t, r, i, n);
        case 7:
            return _e(e, t, t.pendingProps, n),
                t.child;
        case 8:
            return _e(e, t, t.pendingProps.children, n),
                t.child;
        case 12:
            return _e(e, t, t.pendingProps.children, n),
                t.child;
        case 10:
            e: {
                if (r = t.type._context,
                    i = t.pendingProps,
                    l = t.memoizedProps,
                    o = i.value,
                    Q(Bi, r._currentValue),
                    r._currentValue = o,
                    l !== null)
                    if (rt(l.value, o)) {
                        if (l.children === i.children && !Ne.current) {
                            t = Tt(e, t, n);
                            break e
                        }
                    } else
                        for (l = t.child,
                            l !== null && (l.return = t); l !== null;) {
                            var a = l.dependencies;
                            if (a !== null) {
                                o = l.child;
                                for (var s = a.firstContext; s !== null;) {
                                    if (s.context === r) {
                                        if (l.tag === 1) {
                                            s = yt(-1, n & -n),
                                                s.tag = 2;
                                            var u = l.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var d = u.pending;
                                                d === null ? s.next = s : (s.next = d.next,
                                                    d.next = s),
                                                    u.pending = s
                                            }
                                        }
                                        l.lanes |= n,
                                            s = l.alternate,
                                            s !== null && (s.lanes |= n),
                                            Vo(l.return, n, t),
                                            a.lanes |= n;
                                        break
                                    }
                                    s = s.next
                                }
                            } else if (l.tag === 10)
                                o = l.type === t.type ? null : l.child;
                            else if (l.tag === 18) {
                                if (o = l.return,
                                    o === null)
                                    throw Error(z(341));
                                o.lanes |= n,
                                    a = o.alternate,
                                    a !== null && (a.lanes |= n),
                                    Vo(o, n, t),
                                    o = l.sibling
                            } else
                                o = l.child;
                            if (o !== null)
                                o.return = l;
                            else
                                for (o = l; o !== null;) {
                                    if (o === t) {
                                        o = null;
                                        break
                                    }
                                    if (l = o.sibling,
                                        l !== null) {
                                        l.return = o.return,
                                            o = l;
                                        break
                                    }
                                    o = o.return
                                }
                            l = o
                        }
                _e(e, t, i.children, n),
                    t = t.child
            }
            return t;
        case 9:
            return i = t.type,
                r = t.pendingProps.children,
                In(t, n),
                i = Xe(i),
                r = r(i),
                t.flags |= 1,
                _e(e, t, r, n),
                t.child;
        case 14:
            return r = t.type,
                i = Ze(r, t.pendingProps),
                i = Ze(r.type, i),
                pu(e, t, r, i, n);
        case 15:
            return Bd(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type,
                i = t.pendingProps,
                i = t.elementType === r ? i : Ze(r, i),
                Ti(e, t),
                t.tag = 1,
                be(r) ? (e = !0,
                    $i(t)) : e = !1,
                In(t, n),
                gd(t, r, i),
                Go(t, r, i, n),
                Yo(null, t, r, !0, e, n);
        case 19:
            return Qd(e, t, n);
        case 22:
            return Vd(e, t, n)
    }
    throw Error(z(156, t.tag))
}
    ;
function cf(e, t) {
    return jc(e, t)
}
function vh(e, t, n, r) {
    this.tag = e,
        this.key = n,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.ref = null,
        this.pendingProps = t,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = r,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
}
function Qe(e, t, n, r) {
    return new vh(e, t, n, r)
}
function ra(e) {
    return e = e.prototype,
        !(!e || !e.isReactComponent)
}
function gh(e) {
    if (typeof e == "function")
        return ra(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
            e === Es)
            return 11;
        if (e === Ts)
            return 14
    }
    return 2
}
function Gt(e, t) {
    var n = e.alternate;
    return n === null ? (n = Qe(e.tag, t, e.key, e.mode),
        n.elementType = e.elementType,
        n.type = e.type,
        n.stateNode = e.stateNode,
        n.alternate = e,
        e.alternate = n) : (n.pendingProps = t,
            n.type = e.type,
            n.flags = 0,
            n.subtreeFlags = 0,
            n.deletions = null),
        n.flags = e.flags & 14680064,
        n.childLanes = e.childLanes,
        n.lanes = e.lanes,
        n.child = e.child,
        n.memoizedProps = e.memoizedProps,
        n.memoizedState = e.memoizedState,
        n.updateQueue = e.updateQueue,
        t = e.dependencies,
        n.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        },
        n.sibling = e.sibling,
        n.index = e.index,
        n.ref = e.ref,
        n
}
function Ci(e, t, n, r, i, l) {
    var o = 2;
    if (r = e,
        typeof e == "function")
        ra(e) && (o = 1);
    else if (typeof e == "string")
        o = 5;
    else
        e: switch (e) {
            case gn:
                return on(n.children, i, l, t);
            case xs:
                o = 8,
                    i |= 8;
                break;
            case ho:
                return e = Qe(12, n, t, i | 2),
                    e.elementType = ho,
                    e.lanes = l,
                    e;
            case vo:
                return e = Qe(13, n, t, i),
                    e.elementType = vo,
                    e.lanes = l,
                    e;
            case go:
                return e = Qe(19, n, t, i),
                    e.elementType = go,
                    e.lanes = l,
                    e;
            case yc:
                return vl(n, i, l, t);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                        case vc:
                            o = 10;
                            break e;
                        case gc:
                            o = 9;
                            break e;
                        case Es:
                            o = 11;
                            break e;
                        case Ts:
                            o = 14;
                            break e;
                        case zt:
                            o = 16,
                                r = null;
                            break e
                    }
                throw Error(z(130, e == null ? e : typeof e, ""))
        }
    return t = Qe(o, n, t, i),
        t.elementType = e,
        t.type = r,
        t.lanes = l,
        t
}
function on(e, t, n, r) {
    return e = Qe(7, e, r, t),
        e.lanes = n,
        e
}
function vl(e, t, n, r) {
    return e = Qe(22, e, r, t),
        e.elementType = yc,
        e.lanes = n,
        e.stateNode = {
            isHidden: !1
        },
        e
}
function Jl(e, t, n) {
    return e = Qe(6, e, null, t),
        e.lanes = n,
        e
}
function eo(e, t, n) {
    return t = Qe(4, e.children !== null ? e.children : [], e.key, t),
        t.lanes = n,
        t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        },
        t
}
function yh(e, t, n, r, i) {
    this.tag = t,
        this.containerInfo = e,
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.pendingContext = this.context = null,
        this.callbackPriority = 0,
        this.eventTimes = bl(0),
        this.expirationTimes = bl(-1),
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = bl(0),
        this.identifierPrefix = r,
        this.onRecoverableError = i,
        this.mutableSourceEagerHydrationData = null
}
function ia(e, t, n, r, i, l, o, a, s) {
    return e = new yh(e, t, n, a, s),
        t === 1 ? (t = 1,
            l === !0 && (t |= 8)) : t = 0,
        l = Qe(3, null, null, t),
        e.current = l,
        l.stateNode = e,
        l.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        },
        Hs(l),
        e
}
function wh(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: vn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function df(e) {
    if (!e)
        return Yt;
    e = e._reactInternals;
    e: {
        if (mn(e) !== e || e.tag !== 1)
            throw Error(z(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (be(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(z(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (be(n))
            return ud(e, n, t)
    }
    return t
}
function ff(e, t, n, r, i, l, o, a, s) {
    return e = ia(n, r, !0, e, i, l, o, a, s),
        e.context = df(null),
        n = e.current,
        r = Ce(),
        i = Wt(n),
        l = yt(r, i),
        l.callback = t ?? null,
        Bt(n, l, i),
        e.current.lanes = i,
        br(e, i, r),
        je(e, r),
        e
}
function gl(e, t, n, r) {
    var i = t.current
        , l = Ce()
        , o = Wt(i);
    return n = df(n),
        t.context === null ? t.context = n : t.pendingContext = n,
        t = yt(l, o),
        t.payload = {
            element: e
        },
        r = r === void 0 ? null : r,
        r !== null && (t.callback = r),
        e = Bt(i, t, o),
        e !== null && (nt(e, i, o, l),
            Si(e, i, o)),
        o
}
function Zi(e) {
    if (e = e.current,
        !e.child)
        return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}
function _u(e, t) {
    if (e = e.memoizedState,
        e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function la(e, t) {
    _u(e, t),
        (e = e.alternate) && _u(e, t)
}
function Sh() {
    return null
}
var pf = typeof reportError == "function" ? reportError : function (e) {
    console.error(e)
}
    ;
function oa(e) {
    this._internalRoot = e
}
yl.prototype.render = oa.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(z(409));
    gl(e, t, null, null)
}
    ;
yl.prototype.unmount = oa.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        dn(function () {
            gl(null, e, null, null)
        }),
            t[xt] = null
    }
}
    ;
function yl(e) {
    this._internalRoot = e
}
yl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = Bc();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Nt.length && t !== 0 && t < Nt[n].priority; n++)
            ;
        Nt.splice(n, 0, e),
            n === 0 && Wc(e)
    }
}
    ;
function sa(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function wl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Cu() { }
function xh(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var l = r;
            r = function () {
                var u = Zi(o);
                l.call(u)
            }
        }
        var o = ff(t, r, e, 0, null, !1, !1, "", Cu);
        return e._reactRootContainer = o,
            e[xt] = o.current,
            kr(e.nodeType === 8 ? e.parentNode : e),
            dn(),
            o
    }
    for (; i = e.lastChild;)
        e.removeChild(i);
    if (typeof r == "function") {
        var a = r;
        r = function () {
            var u = Zi(s);
            a.call(u)
        }
    }
    var s = ia(e, 0, !1, null, null, !1, !1, "", Cu);
    return e._reactRootContainer = s,
        e[xt] = s.current,
        kr(e.nodeType === 8 ? e.parentNode : e),
        dn(function () {
            gl(t, s, n, r)
        }),
        s
}
function Sl(e, t, n, r, i) {
    var l = n._reactRootContainer;
    if (l) {
        var o = l;
        if (typeof i == "function") {
            var a = i;
            i = function () {
                var s = Zi(o);
                a.call(s)
            }
        }
        gl(t, o, e, i)
    } else
        o = xh(n, t, e, i, r);
    return Zi(o)
}
Fc = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = ir(t.pendingLanes);
                n !== 0 && (Cs(t, n | 1),
                    je(t, se()),
                    !(B & 6) && (Hn = se() + 500,
                        Kt()))
            }
            break;
        case 13:
            dn(function () {
                var r = Et(e, 1);
                if (r !== null) {
                    var i = Ce();
                    nt(r, e, 1, i)
                }
            }),
                la(e, 1)
    }
}
    ;
Ps = function (e) {
    if (e.tag === 13) {
        var t = Et(e, 134217728);
        if (t !== null) {
            var n = Ce();
            nt(t, e, 134217728, n)
        }
        la(e, 134217728)
    }
}
    ;
Hc = function (e) {
    if (e.tag === 13) {
        var t = Wt(e)
            , n = Et(e, t);
        if (n !== null) {
            var r = Ce();
            nt(n, e, t, r)
        }
        la(e, t)
    }
}
    ;
Bc = function () {
    return W
}
    ;
Vc = function (e, t) {
    var n = W;
    try {
        return W = e,
            t()
    } finally {
        W = n
    }
}
    ;
Po = function (e, t, n) {
    switch (t) {
        case "input":
            if (So(e, n),
                t = n.name,
                n.type === "radio" && t != null) {
                for (n = e; n.parentNode;)
                    n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
                    t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var i = cl(r);
                        if (!i)
                            throw Error(z(90));
                        Sc(r),
                            So(r, i)
                    }
                }
            }
            break;
        case "textarea":
            Ec(e, n);
            break;
        case "select":
            t = n.value,
                t != null && On(e, !!n.multiple, t, !1)
    }
}
    ;
Mc = ea;
Lc = dn;
var Eh = {
    usingClientEntryPoint: !1,
    Events: [Dr, xn, cl, Pc, Oc, ea]
}
    , Jn = {
        findFiberByHostInstance: tn,
        bundleType: 0,
        version: "18.2.0",
        rendererPackageName: "react-dom"
    }
    , Th = {
        bundleType: Jn.bundleType,
        version: Jn.version,
        rendererPackageName: Jn.rendererPackageName,
        rendererConfig: Jn.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: kt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return e = Nc(e),
                e === null ? null : e.stateNode
        },
        findFiberByHostInstance: Jn.findFiberByHostInstance || Sh,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var si = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!si.isDisabled && si.supportsFiber)
        try {
            ol = si.inject(Th),
                ut = si
        } catch { }
}
Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Eh;
Be.createPortal = function (e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!sa(t))
        throw Error(z(200));
    return wh(e, t, null, n)
}
    ;
Be.createRoot = function (e, t) {
    if (!sa(e))
        throw Error(z(299));
    var n = !1
        , r = ""
        , i = pf;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
        t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
        t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        t = ia(e, 1, !1, null, null, n, !1, r, i),
        e[xt] = t.current,
        kr(e.nodeType === 8 ? e.parentNode : e),
        new oa(t)
}
    ;
Be.findDOMNode = function (e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(z(188)) : (e = Object.keys(e).join(","),
            Error(z(268, e)));
    return e = Nc(t),
        e = e === null ? null : e.stateNode,
        e
}
    ;
Be.flushSync = function (e) {
    return dn(e)
}
    ;
Be.hydrate = function (e, t, n) {
    if (!wl(t))
        throw Error(z(200));
    return Sl(null, e, t, !0, n)
}
    ;
Be.hydrateRoot = function (e, t, n) {
    if (!sa(e))
        throw Error(z(405));
    var r = n != null && n.hydratedSources || null
        , i = !1
        , l = ""
        , o = pf;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0),
        n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
        n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
        t = ff(t, null, e, 1, n ?? null, i, !1, l, o),
        e[xt] = t.current,
        kr(e),
        r)
        for (e = 0; e < r.length; e++)
            n = r[e],
                i = n._getVersion,
                i = i(n._source),
                t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new yl(t)
}
    ;
Be.render = function (e, t, n) {
    if (!wl(t))
        throw Error(z(200));
    return Sl(null, e, t, !1, n)
}
    ;
Be.unmountComponentAtNode = function (e) {
    if (!wl(e))
        throw Error(z(40));
    return e._reactRootContainer ? (dn(function () {
        Sl(null, null, e, !1, function () {
            e._reactRootContainer = null,
                e[xt] = null
        })
    }),
        !0) : !1
}
    ;
Be.unstable_batchedUpdates = ea;
Be.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!wl(n))
        throw Error(z(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(z(38));
    return Sl(e, t, n, !1, r)
}
    ;
Be.version = "18.2.0-next-9e3b772b8-20220608";
function mf() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mf)
        } catch (e) {
            console.error(e)
        }
}
mf(),
    dc.exports = Be;
var hf = dc.exports
    , Pu = hf;
po.createRoot = Pu.createRoot,
    po.hydrateRoot = Pu.hydrateRoot;
var vf = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0
}
    , Ou = U.createContext && U.createContext(vf)
    , Ut = globalThis && globalThis.__assign || function () {
        return Ut = Object.assign || function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
                t = arguments[n];
                for (var i in t)
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
            return e
        }
            ,
            Ut.apply(this, arguments)
    }
    , kh = globalThis && globalThis.__rest || function (e, t) {
        var n = {};
        for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (e != null && typeof Object.getOwnPropertySymbols == "function")
            for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
                t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
        return n
    }
    ;
function gf(e) {
    return e && e.map(function (t, n) {
        return U.createElement(t.tag, Ut({
            key: n
        }, t.attr), gf(t.child))
    })
}
function xl(e) {
    return function (t) {
        return U.createElement(_h, Ut({
            attr: Ut({}, e.attr)
        }, t), gf(e.child))
    }
}
function _h(e) {
    var t = function (n) {
        var r = e.attr, i = e.size, l = e.title, o = kh(e, ["attr", "size", "title"]), a = i || n.size || "1em", s;
        return n.className && (s = n.className),
            e.className && (s = (s ? s + " " : "") + e.className),
            U.createElement("svg", Ut({
                stroke: "currentColor",
                fill: "currentColor",
                strokeWidth: "0"
            }, n.attr, r, o, {
                className: s,
                style: Ut(Ut({
                    color: e.color || n.color
                }, n.style), e.style),
                height: a,
                width: a,
                xmlns: "http://www.w3.org/2000/svg"
            }), l && U.createElement("title", null, l), e.children)
    };
    return Ou !== void 0 ? U.createElement(Ou.Consumer, null, function (n) {
        return t(n)
    }) : t(vf)
}
function Ch(e) {
    return xl({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"
            }
        }]
    })(e)
}
function Ph(e) {
    return xl({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                fill: "none",
                strokeLinecap: "round",
                strokeMiterlimit: "10",
                strokeWidth: "48",
                d: "M88 152h336M88 256h336M88 360h336"
            }
        }]
    })(e)
}
var le = {}
    , aa = {}
    , Ar = {}
    , $r = {}
    , yf = "Expected a function"
    , Mu = 0 / 0
    , Oh = "[object Symbol]"
    , Mh = /^\s+|\s+$/g
    , Lh = /^[-+]0x[0-9a-f]+$/i
    , zh = /^0b[01]+$/i
    , Ih = /^0o[0-7]+$/i
    , Nh = parseInt
    , bh = typeof tr == "object" && tr && tr.Object === Object && tr
    , jh = typeof self == "object" && self && self.Object === Object && self
    , Dh = bh || jh || Function("return this")()
    , Rh = Object.prototype
    , Ah = Rh.toString
    , $h = Math.max
    , Fh = Math.min
    , to = function () {
        return Dh.Date.now()
    };
function Hh(e, t, n) {
    var r, i, l, o, a, s, u = 0, d = !1, p = !1, h = !0;
    if (typeof e != "function")
        throw new TypeError(yf);
    t = Lu(t) || 0,
        Ji(n) && (d = !!n.leading,
            p = "maxWait" in n,
            l = p ? $h(Lu(n.maxWait) || 0, t) : l,
            h = "trailing" in n ? !!n.trailing : h);
    function v(x) {
        var M = r
            , k = i;
        return r = i = void 0,
            u = x,
            o = e.apply(k, M),
            o
    }
    function y(x) {
        return u = x,
            a = setTimeout(m, t),
            d ? v(x) : o
    }
    function w(x) {
        var M = x - s
            , k = x - u
            , C = t - M;
        return p ? Fh(C, l - k) : C
    }
    function O(x) {
        var M = x - s
            , k = x - u;
        return s === void 0 || M >= t || M < 0 || p && k >= l
    }
    function m() {
        var x = to();
        if (O(x))
            return c(x);
        a = setTimeout(m, w(x))
    }
    function c(x) {
        return a = void 0,
            h && r ? v(x) : (r = i = void 0,
                o)
    }
    function f() {
        a !== void 0 && clearTimeout(a),
            u = 0,
            r = s = i = a = void 0
    }
    function g() {
        return a === void 0 ? o : c(to())
    }
    function S() {
        var x = to()
            , M = O(x);
        if (r = arguments,
            i = this,
            s = x,
            M) {
            if (a === void 0)
                return y(s);
            if (p)
                return a = setTimeout(m, t),
                    v(s)
        }
        return a === void 0 && (a = setTimeout(m, t)),
            o
    }
    return S.cancel = f,
        S.flush = g,
        S
}
function Bh(e, t, n) {
    var r = !0
        , i = !0;
    if (typeof e != "function")
        throw new TypeError(yf);
    return Ji(n) && (r = "leading" in n ? !!n.leading : r,
        i = "trailing" in n ? !!n.trailing : i),
        Hh(e, t, {
            leading: r,
            maxWait: t,
            trailing: i
        })
}
function Ji(e) {
    var t = typeof e;
    return !!e && (t == "object" || t == "function")
}
function Vh(e) {
    return !!e && typeof e == "object"
}
function Wh(e) {
    return typeof e == "symbol" || Vh(e) && Ah.call(e) == Oh
}
function Lu(e) {
    if (typeof e == "number")
        return e;
    if (Wh(e))
        return Mu;
    if (Ji(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = Ji(t) ? t + "" : t
    }
    if (typeof e != "string")
        return e === 0 ? e : +e;
    e = e.replace(Mh, "");
    var n = zh.test(e);
    return n || Ih.test(e) ? Nh(e.slice(2), n ? 2 : 8) : Lh.test(e) ? Mu : +e
}
var Gh = Bh
    , Fr = {};
Object.defineProperty(Fr, "__esModule", {
    value: !0
});
Fr.addPassiveEventListener = function (t, n, r) {
    var i = function () {
        var l = !1;
        try {
            var o = Object.defineProperty({}, "passive", {
                get: function () {
                    l = !0
                }
            });
            window.addEventListener("test", null, o)
        } catch { }
        return l
    }();
    t.addEventListener(n, r, i ? {
        passive: !0
    } : !1)
}
    ;
Fr.removePassiveEventListener = function (t, n, r) {
    t.removeEventListener(n, r)
}
    ;
Object.defineProperty($r, "__esModule", {
    value: !0
});
var Uh = Gh
    , Qh = Xh(Uh)
    , Yh = Fr;
function Xh(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
var qh = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 66;
    return (0,
        Qh.default)(t, n)
}
    , J = {
        spyCallbacks: [],
        spySetState: [],
        scrollSpyContainers: [],
        mount: function (t, n) {
            if (t) {
                var r = qh(function (i) {
                    J.scrollHandler(t)
                }, n);
                J.scrollSpyContainers.push(t),
                    (0,
                        Yh.addPassiveEventListener)(t, "scroll", r)
            }
        },
        isMounted: function (t) {
            return J.scrollSpyContainers.indexOf(t) !== -1
        },
        currentPositionX: function (t) {
            if (t === document) {
                var n = window.pageYOffset !== void 0
                    , r = (document.compatMode || "") === "CSS1Compat";
                return n ? window.pageXOffset : r ? document.documentElement.scrollLeft : document.body.scrollLeft
            } else
                return t.scrollLeft
        },
        currentPositionY: function (t) {
            if (t === document) {
                var n = window.pageXOffset !== void 0
                    , r = (document.compatMode || "") === "CSS1Compat";
                return n ? window.pageYOffset : r ? document.documentElement.scrollTop : document.body.scrollTop
            } else
                return t.scrollTop
        },
        scrollHandler: function (t) {
            var n = J.scrollSpyContainers[J.scrollSpyContainers.indexOf(t)].spyCallbacks || [];
            n.forEach(function (r) {
                return r(J.currentPositionX(t), J.currentPositionY(t))
            })
        },
        addStateHandler: function (t) {
            J.spySetState.push(t)
        },
        addSpyHandler: function (t, n) {
            var r = J.scrollSpyContainers[J.scrollSpyContainers.indexOf(n)];
            r.spyCallbacks || (r.spyCallbacks = []),
                r.spyCallbacks.push(t),
                t(J.currentPositionX(n), J.currentPositionY(n))
        },
        updateStates: function () {
            J.spySetState.forEach(function (t) {
                return t()
            })
        },
        unmount: function (t, n) {
            J.scrollSpyContainers.forEach(function (r) {
                return r.spyCallbacks && r.spyCallbacks.length && r.spyCallbacks.indexOf(n) > -1 && r.spyCallbacks.splice(r.spyCallbacks.indexOf(n), 1)
            }),
                J.spySetState && J.spySetState.length && J.spySetState.indexOf(t) > -1 && J.spySetState.splice(J.spySetState.indexOf(t), 1),
                document.removeEventListener("scroll", J.scrollHandler)
        },
        update: function () {
            return J.scrollSpyContainers.forEach(function (t) {
                return J.scrollHandler(t)
            })
        }
    };
$r.default = J;
var Gn = {}
    , Hr = {};
Object.defineProperty(Hr, "__esModule", {
    value: !0
});
var Kh = function (t, n) {
    var r = t.indexOf("#") === 0 ? t.substring(1) : t
        , i = r ? "#" + r : ""
        , l = window && window.location
        , o = i ? l.pathname + l.search + i : l.pathname + l.search;
    n ? history.pushState(history.state, "", o) : history.replaceState(history.state, "", o)
}
    , Zh = function () {
        return window.location.hash.replace(/^#/, "")
    }
    , Jh = function (t) {
        return function (n) {
            return t.contains ? t != n && t.contains(n) : !!(t.compareDocumentPosition(n) & 16)
        }
    }
    , ev = function (t) {
        return getComputedStyle(t).position !== "static"
    }
    , no = function (t, n) {
        for (var r = t.offsetTop, i = t.offsetParent; i && !n(i);)
            r += i.offsetTop,
                i = i.offsetParent;
        return {
            offsetTop: r,
            offsetParent: i
        }
    }
    , tv = function (t, n, r) {
        if (r)
            return t === document ? n.getBoundingClientRect().left + (window.scrollX || window.pageXOffset) : getComputedStyle(t).position !== "static" ? n.offsetLeft : n.offsetLeft - t.offsetLeft;
        if (t === document)
            return n.getBoundingClientRect().top + (window.scrollY || window.pageYOffset);
        if (ev(t)) {
            if (n.offsetParent !== t) {
                var i = function (d) {
                    return d === t || d === document
                }
                    , l = no(n, i)
                    , o = l.offsetTop
                    , a = l.offsetParent;
                if (a !== t)
                    throw new Error("Seems containerElement is not an ancestor of the Element");
                return o
            }
            return n.offsetTop
        }
        if (n.offsetParent === t.offsetParent)
            return n.offsetTop - t.offsetTop;
        var s = function (d) {
            return d === document
        };
        return no(n, s).offsetTop - no(t, s).offsetTop
    };
Hr.default = {
    updateHash: Kh,
    getHash: Zh,
    filterElementInContainer: Jh,
    scrollOffset: tv
};
var El = {}
    , ua = {};
Object.defineProperty(ua, "__esModule", {
    value: !0
});
ua.default = {
    defaultEasing: function (t) {
        return t < .5 ? Math.pow(t * 2, 2) / 2 : 1 - Math.pow((1 - t) * 2, 2) / 2
    },
    linear: function (t) {
        return t
    },
    easeInQuad: function (t) {
        return t * t
    },
    easeOutQuad: function (t) {
        return t * (2 - t)
    },
    easeInOutQuad: function (t) {
        return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t
    },
    easeInCubic: function (t) {
        return t * t * t
    },
    easeOutCubic: function (t) {
        return --t * t * t + 1
    },
    easeInOutCubic: function (t) {
        return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
    },
    easeInQuart: function (t) {
        return t * t * t * t
    },
    easeOutQuart: function (t) {
        return 1 - --t * t * t * t
    },
    easeInOutQuart: function (t) {
        return t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t
    },
    easeInQuint: function (t) {
        return t * t * t * t * t
    },
    easeOutQuint: function (t) {
        return 1 + --t * t * t * t * t
    },
    easeInOutQuint: function (t) {
        return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t
    }
};
var ca = {};
Object.defineProperty(ca, "__esModule", {
    value: !0
});
var nv = Fr
    , rv = ["mousedown", "mousewheel", "touchmove", "keydown"];
ca.default = {
    subscribe: function (t) {
        return typeof document < "u" && rv.forEach(function (n) {
            return (0,
                nv.addPassiveEventListener)(document, n, t)
        })
    }
};
var Br = {};
Object.defineProperty(Br, "__esModule", {
    value: !0
});
var os = {
    registered: {},
    scrollEvent: {
        register: function (t, n) {
            os.registered[t] = n
        },
        remove: function (t) {
            os.registered[t] = null
        }
    }
};
Br.default = os;
Object.defineProperty(El, "__esModule", {
    value: !0
});
var iv = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
}
    , lv = Hr;
Tl(lv);
var ov = ua
    , zu = Tl(ov)
    , sv = ca
    , av = Tl(sv)
    , uv = Br
    , ot = Tl(uv);
function Tl(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
var wf = function (t) {
    return zu.default[t.smooth] || zu.default.defaultEasing
}
    , cv = function (t) {
        return typeof t == "function" ? t : function () {
            return t
        }
    }
    , dv = function () {
        if (typeof window < "u")
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame
    }
    , ss = function () {
        return dv() || function (e, t, n) {
            window.setTimeout(e, n || 1e3 / 60, new Date().getTime())
        }
    }()
    , Sf = function () {
        return {
            currentPosition: 0,
            startPosition: 0,
            targetPosition: 0,
            progress: 0,
            duration: 0,
            cancel: !1,
            target: null,
            containerElement: null,
            to: null,
            start: null,
            delta: null,
            percent: null,
            delayTimeout: null
        }
    }
    , xf = function (t) {
        var n = t.data.containerElement;
        if (n && n !== document && n !== document.body)
            return n.scrollLeft;
        var r = window.pageXOffset !== void 0
            , i = (document.compatMode || "") === "CSS1Compat";
        return r ? window.pageXOffset : i ? document.documentElement.scrollLeft : document.body.scrollLeft
    }
    , Ef = function (t) {
        var n = t.data.containerElement;
        if (n && n !== document && n !== document.body)
            return n.scrollTop;
        var r = window.pageXOffset !== void 0
            , i = (document.compatMode || "") === "CSS1Compat";
        return r ? window.pageYOffset : i ? document.documentElement.scrollTop : document.body.scrollTop
    }
    , fv = function (t) {
        var n = t.data.containerElement;
        if (n && n !== document && n !== document.body)
            return n.scrollWidth - n.offsetWidth;
        var r = document.body
            , i = document.documentElement;
        return Math.max(r.scrollWidth, r.offsetWidth, i.clientWidth, i.scrollWidth, i.offsetWidth)
    }
    , pv = function (t) {
        var n = t.data.containerElement;
        if (n && n !== document && n !== document.body)
            return n.scrollHeight - n.offsetHeight;
        var r = document.body
            , i = document.documentElement;
        return Math.max(r.scrollHeight, r.offsetHeight, i.clientHeight, i.scrollHeight, i.offsetHeight)
    }
    , mv = function e(t, n, r) {
        var i = n.data;
        if (!n.ignoreCancelEvents && i.cancel) {
            ot.default.registered.end && ot.default.registered.end(i.to, i.target, i.currentPositionY);
            return
        }
        if (i.delta = Math.round(i.targetPosition - i.startPosition),
            i.start === null && (i.start = r),
            i.progress = r - i.start,
            i.percent = i.progress >= i.duration ? 1 : t(i.progress / i.duration),
            i.currentPosition = i.startPosition + Math.ceil(i.delta * i.percent),
            i.containerElement && i.containerElement !== document && i.containerElement !== document.body ? n.horizontal ? i.containerElement.scrollLeft = i.currentPosition : i.containerElement.scrollTop = i.currentPosition : n.horizontal ? window.scrollTo(i.currentPosition, 0) : window.scrollTo(0, i.currentPosition),
            i.percent < 1) {
            var l = e.bind(null, t, n);
            ss.call(window, l);
            return
        }
        ot.default.registered.end && ot.default.registered.end(i.to, i.target, i.currentPosition)
    }
    , da = function (t) {
        t.data.containerElement = t ? t.containerId ? document.getElementById(t.containerId) : t.container && t.container.nodeType ? t.container : document : null
    }
    , Vr = function (t, n, r, i) {
        if (n.data = n.data || Sf(),
            window.clearTimeout(n.data.delayTimeout),
            av.default.subscribe(function () {
                n.data.cancel = !0
            }),
            da(n),
            n.data.start = null,
            n.data.cancel = !1,
            n.data.startPosition = n.horizontal ? xf(n) : Ef(n),
            n.data.targetPosition = n.absolute ? t : t + n.data.startPosition,
            n.data.startPosition === n.data.targetPosition) {
            ot.default.registered.end && ot.default.registered.end(n.data.to, n.data.target, n.data.currentPosition);
            return
        }
        n.data.delta = Math.round(n.data.targetPosition - n.data.startPosition),
            n.data.duration = cv(n.duration)(n.data.delta),
            n.data.duration = isNaN(parseFloat(n.data.duration)) ? 1e3 : parseFloat(n.data.duration),
            n.data.to = r,
            n.data.target = i;
        var l = wf(n)
            , o = mv.bind(null, l, n);
        if (n && n.delay > 0) {
            n.data.delayTimeout = window.setTimeout(function () {
                ot.default.registered.begin && ot.default.registered.begin(n.data.to, n.data.target),
                    ss.call(window, o)
            }, n.delay);
            return
        }
        ot.default.registered.begin && ot.default.registered.begin(n.data.to, n.data.target),
            ss.call(window, o)
    }
    , kl = function (t) {
        return t = iv({}, t),
            t.data = t.data || Sf(),
            t.absolute = !0,
            t
    }
    , hv = function (t) {
        Vr(0, kl(t))
    }
    , vv = function (t, n) {
        Vr(t, kl(n))
    }
    , gv = function (t) {
        t = kl(t),
            da(t),
            Vr(t.horizontal ? fv(t) : pv(t), t)
    }
    , yv = function (t, n) {
        n = kl(n),
            da(n);
        var r = n.horizontal ? xf(n) : Ef(n);
        Vr(t + r, n)
    };
El.default = {
    animateTopScroll: Vr,
    getAnimationType: wf,
    scrollToTop: hv,
    scrollToBottom: gv,
    scrollTo: vv,
    scrollMore: yv
};
Object.defineProperty(Gn, "__esModule", {
    value: !0
});
var wv = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
}
    , Sv = Hr
    , xv = fa(Sv)
    , Ev = El
    , Tv = fa(Ev)
    , kv = Br
    , ai = fa(kv);
function fa(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
var ui = {}
    , Iu = void 0;
Gn.default = {
    unmount: function () {
        ui = {}
    },
    register: function (t, n) {
        ui[t] = n
    },
    unregister: function (t) {
        delete ui[t]
    },
    get: function (t) {
        return ui[t] || document.getElementById(t) || document.getElementsByName(t)[0] || document.getElementsByClassName(t)[0]
    },
    setActiveLink: function (t) {
        return Iu = t
    },
    getActiveLink: function () {
        return Iu
    },
    scrollTo: function (t, n) {
        var r = this.get(t);
        if (!r) {
            console.warn("target Element not found");
            return
        }
        n = wv({}, n, {
            absolute: !1
        });
        var i = n.containerId
            , l = n.container
            , o = void 0;
        i ? o = document.getElementById(i) : l && l.nodeType ? o = l : o = document,
            n.absolute = !0;
        var a = n.horizontal
            , s = xv.default.scrollOffset(o, r, a) + (n.offset || 0);
        if (!n.smooth) {
            ai.default.registered.begin && ai.default.registered.begin(t, r),
                o === document ? n.horizontal ? window.scrollTo(s, 0) : window.scrollTo(0, s) : o.scrollTop = s,
                ai.default.registered.end && ai.default.registered.end(t, r);
            return
        }
        Tv.default.animateTopScroll(s, n, t, r)
    }
};
var Tf = {
    exports: {}
}
    , _v = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    , Cv = _v
    , Pv = Cv;
function kf() { }
function _f() { }
_f.resetWarningCache = kf;
var Ov = function () {
    function e(r, i, l, o, a, s) {
        if (s !== Pv) {
            var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw u.name = "Invariant Violation",
            u
        }
    }
    e.isRequired = e;
    function t() {
        return e
    }
    var n = {
        array: e,
        bigint: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: _f,
        resetWarningCache: kf
    };
    return n.PropTypes = n,
        n
};
Tf.exports = Ov();
var _l = Tf.exports
    , Cl = {};
Object.defineProperty(Cl, "__esModule", {
    value: !0
});
var Mv = Hr
    , ro = Lv(Mv);
function Lv(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
var zv = {
    mountFlag: !1,
    initialized: !1,
    scroller: null,
    containers: {},
    mount: function (t) {
        this.scroller = t,
            this.handleHashChange = this.handleHashChange.bind(this),
            window.addEventListener("hashchange", this.handleHashChange),
            this.initStateFromHash(),
            this.mountFlag = !0
    },
    mapContainer: function (t, n) {
        this.containers[t] = n
    },
    isMounted: function () {
        return this.mountFlag
    },
    isInitialized: function () {
        return this.initialized
    },
    initStateFromHash: function () {
        var t = this
            , n = this.getHash();
        n ? window.setTimeout(function () {
            t.scrollTo(n, !0),
                t.initialized = !0
        }, 10) : this.initialized = !0
    },
    scrollTo: function (t, n) {
        var r = this.scroller
            , i = r.get(t);
        if (i && (n || t !== r.getActiveLink())) {
            var l = this.containers[t] || document;
            r.scrollTo(t, {
                container: l
            })
        }
    },
    getHash: function () {
        return ro.default.getHash()
    },
    changeHash: function (t, n) {
        this.isInitialized() && ro.default.getHash() !== t && ro.default.updateHash(t, n)
    },
    handleHashChange: function () {
        this.scrollTo(this.getHash())
    },
    unmount: function () {
        this.scroller = null,
            this.containers = null,
            window.removeEventListener("hashchange", this.handleHashChange)
    }
};
Cl.default = zv;
Object.defineProperty(Ar, "__esModule", {
    value: !0
});
var ci = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
}
    , Iv = function () {
        function e(t, n) {
            for (var r = 0; r < n.length; r++) {
                var i = n[r];
                i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(t, i.key, i)
            }
        }
        return function (t, n, r) {
            return n && e(t.prototype, n),
                r && e(t, r),
                t
        }
    }()
    , Nv = H
    , Nu = Wr(Nv)
    , bv = $r
    , di = Wr(bv)
    , jv = Gn
    , Dv = Wr(jv)
    , Rv = _l
    , q = Wr(Rv)
    , Av = Cl
    , Mt = Wr(Av);
function Wr(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
function $v(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function Fv(e, t) {
    if (!e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e
}
function Hv(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
var bu = {
    to: q.default.string.isRequired,
    containerId: q.default.string,
    container: q.default.object,
    activeClass: q.default.string,
    activeStyle: q.default.object,
    spy: q.default.bool,
    horizontal: q.default.bool,
    smooth: q.default.oneOfType([q.default.bool, q.default.string]),
    offset: q.default.number,
    delay: q.default.number,
    isDynamic: q.default.bool,
    onClick: q.default.func,
    duration: q.default.oneOfType([q.default.number, q.default.func]),
    absolute: q.default.bool,
    onSetActive: q.default.func,
    onSetInactive: q.default.func,
    ignoreCancelEvents: q.default.bool,
    hashSpy: q.default.bool,
    saveHashHistory: q.default.bool,
    spyThrottle: q.default.number
};
Ar.default = function (e, t) {
    var n = t || Dv.default
        , r = function (l) {
            Hv(o, l);
            function o(a) {
                $v(this, o);
                var s = Fv(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, a));
                return i.call(s),
                    s.state = {
                        active: !1
                    },
                    s
            }
            return Iv(o, [{
                key: "getScrollSpyContainer",
                value: function () {
                    var s = this.props.containerId
                        , u = this.props.container;
                    return s && !u ? document.getElementById(s) : u && u.nodeType ? u : document
                }
            }, {
                key: "componentDidMount",
                value: function () {
                    if (this.props.spy || this.props.hashSpy) {
                        var s = this.getScrollSpyContainer();
                        di.default.isMounted(s) || di.default.mount(s, this.props.spyThrottle),
                            this.props.hashSpy && (Mt.default.isMounted() || Mt.default.mount(n),
                                Mt.default.mapContainer(this.props.to, s)),
                            di.default.addSpyHandler(this.spyHandler, s),
                            this.setState({
                                container: s
                            })
                    }
                }
            }, {
                key: "componentWillUnmount",
                value: function () {
                    di.default.unmount(this.stateHandler, this.spyHandler)
                }
            }, {
                key: "render",
                value: function () {
                    var s = "";
                    this.state && this.state.active ? s = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim() : s = this.props.className;
                    var u = {};
                    this.state && this.state.active ? u = ci({}, this.props.style, this.props.activeStyle) : u = ci({}, this.props.style);
                    var d = ci({}, this.props);
                    for (var p in bu)
                        d.hasOwnProperty(p) && delete d[p];
                    return d.className = s,
                        d.style = u,
                        d.onClick = this.handleClick,
                        Nu.default.createElement(e, d)
                }
            }]),
                o
        }(Nu.default.PureComponent)
        , i = function () {
            var o = this;
            this.scrollTo = function (a, s) {
                n.scrollTo(a, ci({}, o.state, s))
            }
                ,
                this.handleClick = function (a) {
                    o.props.onClick && o.props.onClick(a),
                        a.stopPropagation && a.stopPropagation(),
                        a.preventDefault && a.preventDefault(),
                        o.scrollTo(o.props.to, o.props)
                }
                ,
                this.spyHandler = function (a, s) {
                    var u = o.getScrollSpyContainer();
                    if (!(Mt.default.isMounted() && !Mt.default.isInitialized())) {
                        var d = o.props.horizontal
                            , p = o.props.to
                            , h = null
                            , v = void 0
                            , y = void 0;
                        if (d) {
                            var w = 0
                                , O = 0
                                , m = 0;
                            if (u.getBoundingClientRect) {
                                var c = u.getBoundingClientRect();
                                m = c.left
                            }
                            if (!h || o.props.isDynamic) {
                                if (h = n.get(p),
                                    !h)
                                    return;
                                var f = h.getBoundingClientRect();
                                w = f.left - m + a,
                                    O = w + f.width
                            }
                            var g = a - o.props.offset;
                            v = g >= Math.floor(w) && g < Math.floor(O),
                                y = g < Math.floor(w) || g >= Math.floor(O)
                        } else {
                            var S = 0
                                , x = 0
                                , M = 0;
                            if (u.getBoundingClientRect) {
                                var k = u.getBoundingClientRect();
                                M = k.top
                            }
                            if (!h || o.props.isDynamic) {
                                if (h = n.get(p),
                                    !h)
                                    return;
                                var C = h.getBoundingClientRect();
                                S = C.top - M + s,
                                    x = S + C.height
                            }
                            var T = s - o.props.offset;
                            v = T >= Math.floor(S) && T < Math.floor(x),
                                y = T < Math.floor(S) || T >= Math.floor(x)
                        }
                        var E = n.getActiveLink();
                        if (y) {
                            if (p === E && n.setActiveLink(void 0),
                                o.props.hashSpy && Mt.default.getHash() === p) {
                                var _ = o.props.saveHashHistory
                                    , P = _ === void 0 ? !1 : _;
                                Mt.default.changeHash("", P)
                            }
                            o.props.spy && o.state.active && (o.setState({
                                active: !1
                            }),
                                o.props.onSetInactive && o.props.onSetInactive(p, h))
                        }
                        if (v && (E !== p || o.state.active === !1)) {
                            n.setActiveLink(p);
                            var I = o.props.saveHashHistory
                                , R = I === void 0 ? !1 : I;
                            o.props.hashSpy && Mt.default.changeHash(p, R),
                                o.props.spy && (o.setState({
                                    active: !0
                                }),
                                    o.props.onSetActive && o.props.onSetActive(p, h))
                        }
                    }
                }
        };
    return r.propTypes = bu,
        r.defaultProps = {
            offset: 0
        },
        r
}
    ;
Object.defineProperty(aa, "__esModule", {
    value: !0
});
var Bv = H
    , ju = Cf(Bv)
    , Vv = Ar
    , Wv = Cf(Vv);
function Cf(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
function Gv(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function Du(e, t) {
    if (!e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e
}
function Uv(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
var Qv = function (e) {
    Uv(t, e);
    function t() {
        var n, r, i, l;
        Gv(this, t);
        for (var o = arguments.length, a = Array(o), s = 0; s < o; s++)
            a[s] = arguments[s];
        return l = (r = (i = Du(this, (n = t.__proto__ || Object.getPrototypeOf(t)).call.apply(n, [this].concat(a))),
            i),
            i.render = function () {
                return ju.default.createElement("a", i.props, i.props.children)
            }
            ,
            r),
            Du(i, l)
    }
    return t
}(ju.default.Component);
aa.default = (0,
    Wv.default)(Qv);
var pa = {};
Object.defineProperty(pa, "__esModule", {
    value: !0
});
var Yv = function () {
    function e(t, n) {
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value" in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
        }
    }
    return function (t, n, r) {
        return n && e(t.prototype, n),
            r && e(t, r),
            t
    }
}()
    , Xv = H
    , Ru = Pf(Xv)
    , qv = Ar
    , Kv = Pf(qv);
function Pf(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
function Zv(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function Jv(e, t) {
    if (!e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e
}
function eg(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
var tg = function (e) {
    eg(t, e);
    function t() {
        return Zv(this, t),
            Jv(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
    }
    return Yv(t, [{
        key: "render",
        value: function () {
            return Ru.default.createElement("input", this.props, this.props.children)
        }
    }]),
        t
}(Ru.default.Component);
pa.default = (0,
    Kv.default)(tg);
var ma = {}
    , Pl = {};
Object.defineProperty(Pl, "__esModule", {
    value: !0
});
var ng = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
}
    , rg = function () {
        function e(t, n) {
            for (var r = 0; r < n.length; r++) {
                var i = n[r];
                i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(t, i.key, i)
            }
        }
        return function (t, n, r) {
            return n && e(t.prototype, n),
                r && e(t, r),
                t
        }
    }()
    , ig = H
    , Au = Ol(ig)
    , lg = hf;
Ol(lg);
var og = Gn
    , $u = Ol(og)
    , sg = _l
    , Fu = Ol(sg);
function Ol(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
function ag(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function ug(e, t) {
    if (!e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e
}
function cg(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
Pl.default = function (e) {
    var t = function (n) {
        cg(r, n);
        function r(i) {
            ag(this, r);
            var l = ug(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, i));
            return l.childBindings = {
                domNode: null
            },
                l
        }
        return rg(r, [{
            key: "componentDidMount",
            value: function () {
                if (typeof window > "u")
                    return !1;
                this.registerElems(this.props.name)
            }
        }, {
            key: "componentDidUpdate",
            value: function (l) {
                this.props.name !== l.name && this.registerElems(this.props.name)
            }
        }, {
            key: "componentWillUnmount",
            value: function () {
                if (typeof window > "u")
                    return !1;
                $u.default.unregister(this.props.name)
            }
        }, {
            key: "registerElems",
            value: function (l) {
                $u.default.register(l, this.childBindings.domNode)
            }
        }, {
            key: "render",
            value: function () {
                return Au.default.createElement(e, ng({}, this.props, {
                    parentBindings: this.childBindings
                }))
            }
        }]),
            r
    }(Au.default.Component);
    return t.propTypes = {
        name: Fu.default.string,
        id: Fu.default.string
    },
        t
}
    ;
Object.defineProperty(ma, "__esModule", {
    value: !0
});
var Hu = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
}
    , dg = function () {
        function e(t, n) {
            for (var r = 0; r < n.length; r++) {
                var i = n[r];
                i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(t, i.key, i)
            }
        }
        return function (t, n, r) {
            return n && e(t.prototype, n),
                r && e(t, r),
                t
        }
    }()
    , fg = H
    , Bu = ha(fg)
    , pg = Pl
    , mg = ha(pg)
    , hg = _l
    , Vu = ha(hg);
function ha(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
function vg(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function gg(e, t) {
    if (!e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e
}
function yg(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
var Of = function (e) {
    yg(t, e);
    function t() {
        return vg(this, t),
            gg(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
    }
    return dg(t, [{
        key: "render",
        value: function () {
            var r = this
                , i = Hu({}, this.props);
            return i.parentBindings && delete i.parentBindings,
                Bu.default.createElement("div", Hu({}, i, {
                    ref: function (o) {
                        r.props.parentBindings.domNode = o
                    }
                }), this.props.children)
        }
    }]),
        t
}(Bu.default.Component);
Of.propTypes = {
    name: Vu.default.string,
    id: Vu.default.string
};
ma.default = (0,
    mg.default)(Of);
var io = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
}
    , Wu = function () {
        function e(t, n) {
            for (var r = 0; r < n.length; r++) {
                var i = n[r];
                i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(t, i.key, i)
            }
        }
        return function (t, n, r) {
            return n && e(t.prototype, n),
                r && e(t, r),
                t
        }
    }();
function Gu(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function Uu(e, t) {
    if (!e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e
}
function Qu(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
var fi = H
    , Zt = $r
    , lo = Gn
    , ee = _l
    , Lt = Cl
    , Yu = {
        to: ee.string.isRequired,
        containerId: ee.string,
        container: ee.object,
        activeClass: ee.string,
        spy: ee.bool,
        smooth: ee.oneOfType([ee.bool, ee.string]),
        offset: ee.number,
        delay: ee.number,
        isDynamic: ee.bool,
        onClick: ee.func,
        duration: ee.oneOfType([ee.number, ee.func]),
        absolute: ee.bool,
        onSetActive: ee.func,
        onSetInactive: ee.func,
        ignoreCancelEvents: ee.bool,
        hashSpy: ee.bool,
        spyThrottle: ee.number
    }
    , wg = {
        Scroll: function (t, n) {
            console.warn("Helpers.Scroll is deprecated since v1.7.0");
            var r = n || lo
                , i = function (o) {
                    Qu(a, o);
                    function a(s) {
                        Gu(this, a);
                        var u = Uu(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, s));
                        return l.call(u),
                            u.state = {
                                active: !1
                            },
                            u
                    }
                    return Wu(a, [{
                        key: "getScrollSpyContainer",
                        value: function () {
                            var u = this.props.containerId
                                , d = this.props.container;
                            return u ? document.getElementById(u) : d && d.nodeType ? d : document
                        }
                    }, {
                        key: "componentDidMount",
                        value: function () {
                            if (this.props.spy || this.props.hashSpy) {
                                var u = this.getScrollSpyContainer();
                                Zt.isMounted(u) || Zt.mount(u, this.props.spyThrottle),
                                    this.props.hashSpy && (Lt.isMounted() || Lt.mount(r),
                                        Lt.mapContainer(this.props.to, u)),
                                    this.props.spy && Zt.addStateHandler(this.stateHandler),
                                    Zt.addSpyHandler(this.spyHandler, u),
                                    this.setState({
                                        container: u
                                    })
                            }
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function () {
                            Zt.unmount(this.stateHandler, this.spyHandler)
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var u = "";
                            this.state && this.state.active ? u = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim() : u = this.props.className;
                            var d = io({}, this.props);
                            for (var p in Yu)
                                d.hasOwnProperty(p) && delete d[p];
                            return d.className = u,
                                d.onClick = this.handleClick,
                                fi.createElement(t, d)
                        }
                    }]),
                        a
                }(fi.Component)
                , l = function () {
                    var a = this;
                    this.scrollTo = function (s, u) {
                        r.scrollTo(s, io({}, a.state, u))
                    }
                        ,
                        this.handleClick = function (s) {
                            a.props.onClick && a.props.onClick(s),
                                s.stopPropagation && s.stopPropagation(),
                                s.preventDefault && s.preventDefault(),
                                a.scrollTo(a.props.to, a.props)
                        }
                        ,
                        this.stateHandler = function () {
                            r.getActiveLink() !== a.props.to && (a.state !== null && a.state.active && a.props.onSetInactive && a.props.onSetInactive(),
                                a.setState({
                                    active: !1
                                }))
                        }
                        ,
                        this.spyHandler = function (s) {
                            var u = a.getScrollSpyContainer();
                            if (!(Lt.isMounted() && !Lt.isInitialized())) {
                                var d = a.props.to
                                    , p = null
                                    , h = 0
                                    , v = 0
                                    , y = 0;
                                if (u.getBoundingClientRect) {
                                    var w = u.getBoundingClientRect();
                                    y = w.top
                                }
                                if (!p || a.props.isDynamic) {
                                    if (p = r.get(d),
                                        !p)
                                        return;
                                    var O = p.getBoundingClientRect();
                                    h = O.top - y + s,
                                        v = h + O.height
                                }
                                var m = s - a.props.offset
                                    , c = m >= Math.floor(h) && m < Math.floor(v)
                                    , f = m < Math.floor(h) || m >= Math.floor(v)
                                    , g = r.getActiveLink();
                                if (f)
                                    return d === g && r.setActiveLink(void 0),
                                        a.props.hashSpy && Lt.getHash() === d && Lt.changeHash(),
                                        a.props.spy && a.state.active && (a.setState({
                                            active: !1
                                        }),
                                            a.props.onSetInactive && a.props.onSetInactive()),
                                        Zt.updateStates();
                                if (c && g !== d)
                                    return r.setActiveLink(d),
                                        a.props.hashSpy && Lt.changeHash(d),
                                        a.props.spy && (a.setState({
                                            active: !0
                                        }),
                                            a.props.onSetActive && a.props.onSetActive(d)),
                                        Zt.updateStates()
                            }
                        }
                };
            return i.propTypes = Yu,
                i.defaultProps = {
                    offset: 0
                },
                i
        },
        Element: function (t) {
            console.warn("Helpers.Element is deprecated since v1.7.0");
            var n = function (r) {
                Qu(i, r);
                function i(l) {
                    Gu(this, i);
                    var o = Uu(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, l));
                    return o.childBindings = {
                        domNode: null
                    },
                        o
                }
                return Wu(i, [{
                    key: "componentDidMount",
                    value: function () {
                        if (typeof window > "u")
                            return !1;
                        this.registerElems(this.props.name)
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function (o) {
                        this.props.name !== o.name && this.registerElems(this.props.name)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function () {
                        if (typeof window > "u")
                            return !1;
                        lo.unregister(this.props.name)
                    }
                }, {
                    key: "registerElems",
                    value: function (o) {
                        lo.register(o, this.childBindings.domNode)
                    }
                }, {
                    key: "render",
                    value: function () {
                        return fi.createElement(t, io({}, this.props, {
                            parentBindings: this.childBindings
                        }))
                    }
                }]),
                    i
            }(fi.Component);
            return n.propTypes = {
                name: ee.string,
                id: ee.string
            },
                n
        }
    }
    , Sg = wg;
Object.defineProperty(le, "__esModule", {
    value: !0
});
le.Helpers = le.ScrollElement = le.ScrollLink = le.animateScroll = le.scrollSpy = le.Events = le.scroller = le.Element = le.Button = le.Link = void 0;
var xg = aa
    , Mf = dt(xg)
    , Eg = pa
    , Lf = dt(Eg)
    , Tg = ma
    , zf = dt(Tg)
    , kg = Gn
    , If = dt(kg)
    , _g = Br
    , Nf = dt(_g)
    , Cg = $r
    , bf = dt(Cg)
    , Pg = El
    , jf = dt(Pg)
    , Og = Ar
    , Df = dt(Og)
    , Mg = Pl
    , Rf = dt(Mg)
    , Lg = Sg
    , Af = dt(Lg);
function dt(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
le.Link = Mf.default;
le.Button = Lf.default;
le.Element = zf.default;
le.scroller = If.default;
le.Events = Nf.default;
le.scrollSpy = bf.default;
le.animateScroll = jf.default;
le.ScrollLink = Df.default;
le.ScrollElement = Rf.default;
le.Helpers = Af.default;
le.default = {
    Link: Mf.default,
    Button: Lf.default,
    Element: zf.default,
    scroller: If.default,
    Events: Nf.default,
    scrollSpy: bf.default,
    animateScroll: jf.default,
    ScrollLink: Df.default,
    ScrollElement: Rf.default,
    Helpers: Af.default
};
function as(e) {
    return xl({
        tag: "svg",
        attr: {
            viewBox: "0 0 448 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"
            }
        }]
    })(e)
}
function us(e) {
    return xl({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
            }
        }]
    })(e)
}
function zg() {
    const [e, t] = H.useState(!1)
        , n = () => {
            t(!e)
        }
        ;
    return b.jsxs(b.Fragment, {
        children: [b.jsx("nav", {
            className: "z-[100] bg-black  ",
            children: b.jsxs("div", {
                className: "container-wrapper border-none sm:border-2 border-[#fff] bg-black h-14 lg:h-16 2xl:h-20 rounded-2xl flex justify-between lg:justify-normal lg:grid lg:grid-cols-[1fr_16rem_1fr] gap-8 items-center",
                children: [b.jsxs("div", {
                    className: "items-center justify-between text-base font-medium text-white flex px-4 w-full sm:w-auto  sm:px-0 lg:flex",
                    children: [b.jsx("img", {
                        src: "/images/logo.png",
                        className: "h-[40px] sm:h-auto w-auto ",
                        alt: ""
                    }), b.jsx("button", {
                        className: "text-2xl text-white flex lg:hidden",
                        onClick: () => t(!0),
                        children: b.jsx(Ph, {})
                    })]
                }), b.jsx("div", {
                    className: "items-center justify-evenly text-base font-medium text-white hidden lg:flex",
                    children: b.jsxs("div", {
                        className: " flex justify-center gap-5 ",
                        children: [b.jsxs("a", {
                            href: "https://t.me/grecko404",
                            target: "_blank",
                            className: "  hover:bg-black  text-black hover:text-white bg-white rounded-full p-2 text-3xl ",
                            children: [" ", b.jsx(as, {})]
                        }), b.jsx("a", {
                            href: "https://twitter.com/Grecko404",
                            target: "_blank",
                            className: " hover:bg-black  text-black hover:text-white bg-white rounded-full p-2 text-3xl",
                            children: b.jsx(us, {})
                        })]
                    })
                })]
            })
        }), b.jsxs("div", {
            className: `fixed top-0 right-0 w-[16rem] h-screen z-[10000] bg-white border-l-4 border-primary pt-6 px-8 transition-all duration-300 ${e ? "translate-x-0" : "translate-x-[16rem]"}`,
            children: [b.jsxs("div", {
                className: "flex items-center justify-between mb-8 z-50",
                children: [b.jsx("img", {
                    src: "/images/logo.png",
                    className: "w-full max-w-[9rem]",
                    alt: ""
                }), b.jsx("button", {
                    className: "text-black text-2xl",
                    onClick: n,
                    children: b.jsx(Ch, {})
                })]
            }), b.jsx("div", {
                className: "space-y-5 flex flex-col text-left items-start text-black font-medium",
                children: b.jsxs("div", {
                    className: " flex justify-center gap-5 ",
                    children: [b.jsxs("a", {
                        href: "https://t.me/garbagesol",
                        target: "_blank",
                        className: "  hover:bg-black  text-black hover:text-white bg-white rounded-full p-2 text-4xl ",
                        children: [" ", b.jsx(as, {})]
                    }), b.jsx("a", {
                        href: "https://twitter.com/Grecko404",
                        target: "_blank",
                        className: " hover:bg-black  text-black hover:text-white bg-white rounded-full p-2 text-4xl",
                        children: b.jsx(us, {})
                    })]
                })
            })]
        }), b.jsx("div", {
            className: `black-screen z-[900] ${e ? "show" : ""}`,
            onClick: n
        })]
    })
}
function Ig() {
    return b.jsx("section", {
        className: "  bg-about pt-8 pb-16",
        children: b.jsx("div", {
            className: "container-wrapper text-center block ",
            children: b.jsxs("div", {
                children: [b.jsx("h1", {
                    className: " txt-s font-potta text-2xl sm:text-[45px] uppercase",
                    children: "ABOUT Grecko"
                }), b.jsxs("div", {
                    className: " hidden sm:flex flex-col sm:flex-row gap-4 items-center mt-5 justify-center",
                    children: [b.jsx("a", {
                        href: "https://t.me/grecko404",
                        target: "_blank",
                        className: " bg-[#fff] hover:bg-black  text-black hover:text-white font-potta text-xl sm:text-xl rounded-full border-2 px-14 pt-1 pb-1 ",
                        children: "Telegram"
                    }), b.jsx("a", {
                        href: "https://twitter.com/Grecko404",
                        target: "_blank",
                        className: " bg-[#fff] hover:bg-black  text-black hover:text-white font-potta text-xl sm:text-xl rounded-full border-2 px-14 pt-1 pb-1 ",
                        children: "Twitter"
                    })]
                }), b.jsx("p", {
                    className: " font-potta text-center text-base sm:text-[30px] max-w-5xl mx-auto lh-1_8 pt-3 sm:px-0 px-2",
                    children: `The ERC404 standard's Hybrid Asset Protocol (HAP) a dual capabilities by merging the liquidity and fungibility of ERC20 tokens with the uniqueness and collectibility of ERC721 NFTs. With a pioneering collection of 10,000 "Guardians," Grecko leverages the ERC404 standard, an avant-garde blend of the ERC20 and ERC721 standards, to bridge the gap between fungible liquidity and non-fungible uniqueness.`
                })]
            })
        })
    })
}
function Xu(e) {
    return e !== null && typeof e == "object" && "constructor" in e && e.constructor === Object
}
function va(e, t) {
    e === void 0 && (e = {}),
        t === void 0 && (t = {}),
        Object.keys(t).forEach(n => {
            typeof e[n] > "u" ? e[n] = t[n] : Xu(t[n]) && Xu(e[n]) && Object.keys(t[n]).length > 0 && va(e[n], t[n])
        }
        )
}
const $f = {
    body: {},
    addEventListener() { },
    removeEventListener() { },
    activeElement: {
        blur() { },
        nodeName: ""
    },
    querySelector() {
        return null
    },
    querySelectorAll() {
        return []
    },
    getElementById() {
        return null
    },
    createEvent() {
        return {
            initEvent() { }
        }
    },
    createElement() {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute() { },
            getElementsByTagName() {
                return []
            }
        }
    },
    createElementNS() {
        return {}
    },
    importNode() {
        return null
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
    }
};
function wt() {
    const e = typeof document < "u" ? document : {};
    return va(e, $f),
        e
}
const Ng = {
    document: $f,
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
        replaceState() { },
        pushState() { },
        go() { },
        back() { }
    },
    CustomEvent: function () {
        return this
    },
    addEventListener() { },
    removeEventListener() { },
    getComputedStyle() {
        return {
            getPropertyValue() {
                return ""
            }
        }
    },
    Image() { },
    Date() { },
    screen: {},
    setTimeout() { },
    clearTimeout() { },
    matchMedia() {
        return {}
    },
    requestAnimationFrame(e) {
        return typeof setTimeout > "u" ? (e(),
            null) : setTimeout(e, 0)
    },
    cancelAnimationFrame(e) {
        typeof setTimeout > "u" || clearTimeout(e)
    }
};
function We() {
    const e = typeof window < "u" ? window : {};
    return va(e, Ng),
        e
}
function bg(e) {
    return e === void 0 && (e = ""),
        e.trim().split(" ").filter(t => !!t.trim())
}
function jg(e) {
    const t = e;
    Object.keys(t).forEach(n => {
        try {
            t[n] = null
        } catch { }
        try {
            delete t[n]
        } catch { }
    }
    )
}
function cs(e, t) {
    return t === void 0 && (t = 0),
        setTimeout(e, t)
}
function el() {
    return Date.now()
}
function Dg(e) {
    const t = We();
    let n;
    return t.getComputedStyle && (n = t.getComputedStyle(e, null)),
        !n && e.currentStyle && (n = e.currentStyle),
        n || (n = e.style),
        n
}
function Rg(e, t) {
    t === void 0 && (t = "x");
    const n = We();
    let r, i, l;
    const o = Dg(e);
    return n.WebKitCSSMatrix ? (i = o.transform || o.webkitTransform,
        i.split(",").length > 6 && (i = i.split(", ").map(a => a.replace(",", ".")).join(", ")),
        l = new n.WebKitCSSMatrix(i === "none" ? "" : i)) : (l = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
            r = l.toString().split(",")),
        t === "x" && (n.WebKitCSSMatrix ? i = l.m41 : r.length === 16 ? i = parseFloat(r[12]) : i = parseFloat(r[4])),
        t === "y" && (n.WebKitCSSMatrix ? i = l.m42 : r.length === 16 ? i = parseFloat(r[13]) : i = parseFloat(r[5])),
        i || 0
}
function pi(e) {
    return typeof e == "object" && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object"
}
function Ag(e) {
    return typeof window < "u" && typeof window.HTMLElement < "u" ? e instanceof HTMLElement : e && (e.nodeType === 1 || e.nodeType === 11)
}
function Ae() {
    const e = Object(arguments.length <= 0 ? void 0 : arguments[0])
        , t = ["__proto__", "constructor", "prototype"];
    for (let n = 1; n < arguments.length; n += 1) {
        const r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
        if (r != null && !Ag(r)) {
            const i = Object.keys(Object(r)).filter(l => t.indexOf(l) < 0);
            for (let l = 0, o = i.length; l < o; l += 1) {
                const a = i[l]
                    , s = Object.getOwnPropertyDescriptor(r, a);
                s !== void 0 && s.enumerable && (pi(e[a]) && pi(r[a]) ? r[a].__swiper__ ? e[a] = r[a] : Ae(e[a], r[a]) : !pi(e[a]) && pi(r[a]) ? (e[a] = {},
                    r[a].__swiper__ ? e[a] = r[a] : Ae(e[a], r[a])) : e[a] = r[a])
            }
        }
    }
    return e
}
function mi(e, t, n) {
    e.style.setProperty(t, n)
}
function Ff(e) {
    let { swiper: t, targetPosition: n, side: r } = e;
    const i = We()
        , l = -t.translate;
    let o = null, a;
    const s = t.params.speed;
    t.wrapperEl.style.scrollSnapType = "none",
        i.cancelAnimationFrame(t.cssModeFrameID);
    const u = n > l ? "next" : "prev"
        , d = (h, v) => u === "next" && h >= v || u === "prev" && h <= v
        , p = () => {
            a = new Date().getTime(),
                o === null && (o = a);
            const h = Math.max(Math.min((a - o) / s, 1), 0)
                , v = .5 - Math.cos(h * Math.PI) / 2;
            let y = l + v * (n - l);
            if (d(y, n) && (y = n),
                t.wrapperEl.scrollTo({
                    [r]: y
                }),
                d(y, n)) {
                t.wrapperEl.style.overflow = "hidden",
                    t.wrapperEl.style.scrollSnapType = "",
                    setTimeout(() => {
                        t.wrapperEl.style.overflow = "",
                            t.wrapperEl.scrollTo({
                                [r]: y
                            })
                    }
                    ),
                    i.cancelAnimationFrame(t.cssModeFrameID);
                return
            }
            t.cssModeFrameID = i.requestAnimationFrame(p)
        }
        ;
    p()
}
function at(e, t) {
    return t === void 0 && (t = ""),
        [...e.children].filter(n => n.matches(t))
}
function tl(e) {
    try {
        console.warn(e);
        return
    } catch { }
}
function nl(e, t) {
    t === void 0 && (t = []);
    const n = document.createElement(e);
    return n.classList.add(...Array.isArray(t) ? t : bg(t)),
        n
}
function $g(e, t) {
    const n = [];
    for (; e.previousElementSibling;) {
        const r = e.previousElementSibling;
        t ? r.matches(t) && n.push(r) : n.push(r),
            e = r
    }
    return n
}
function Fg(e, t) {
    const n = [];
    for (; e.nextElementSibling;) {
        const r = e.nextElementSibling;
        t ? r.matches(t) && n.push(r) : n.push(r),
            e = r
    }
    return n
}
function Rt(e, t) {
    return We().getComputedStyle(e, null).getPropertyValue(t)
}
function rl(e) {
    let t = e, n;
    if (t) {
        for (n = 0; (t = t.previousSibling) !== null;)
            t.nodeType === 1 && (n += 1);
        return n
    }
}
function Hf(e, t) {
    const n = [];
    let r = e.parentElement;
    for (; r;)
        t ? r.matches(t) && n.push(r) : n.push(r),
            r = r.parentElement;
    return n
}
function ds(e, t, n) {
    const r = We();
    return n ? e[t === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(r.getComputedStyle(e, null).getPropertyValue(t === "width" ? "margin-right" : "margin-top")) + parseFloat(r.getComputedStyle(e, null).getPropertyValue(t === "width" ? "margin-left" : "margin-bottom")) : e.offsetWidth
}
let oo;
function Hg() {
    const e = We()
        , t = wt();
    return {
        smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
    }
}
function Bf() {
    return oo || (oo = Hg()),
        oo
}
let so;
function Bg(e) {
    let { userAgent: t } = e === void 0 ? {} : e;
    const n = Bf()
        , r = We()
        , i = r.navigator.platform
        , l = t || r.navigator.userAgent
        , o = {
            ios: !1,
            android: !1
        }
        , a = r.screen.width
        , s = r.screen.height
        , u = l.match(/(Android);?[\s\/]+([\d.]+)?/);
    let d = l.match(/(iPad).*OS\s([\d_]+)/);
    const p = l.match(/(iPod)(.*OS\s([\d_]+))?/)
        , h = !d && l.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
        , v = i === "Win32";
    let y = i === "MacIntel";
    const w = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    return !d && y && n.touch && w.indexOf(`${a}x${s}`) >= 0 && (d = l.match(/(Version)\/([\d.]+)/),
        d || (d = [0, 1, "13_0_0"]),
        y = !1),
        u && !v && (o.os = "android",
            o.android = !0),
        (d || h || p) && (o.os = "ios",
            o.ios = !0),
        o
}
function Vg(e) {
    return e === void 0 && (e = {}),
        so || (so = Bg(e)),
        so
}
let ao;
function Wg() {
    const e = We();
    let t = !1;
    function n() {
        const r = e.navigator.userAgent.toLowerCase();
        return r.indexOf("safari") >= 0 && r.indexOf("chrome") < 0 && r.indexOf("android") < 0
    }
    if (n()) {
        const r = String(e.navigator.userAgent);
        if (r.includes("Version/")) {
            const [i, l] = r.split("Version/")[1].split(" ")[0].split(".").map(o => Number(o));
            t = i < 16 || i === 16 && l < 2
        }
    }
    return {
        isSafari: t || n(),
        needPerspectiveFix: t,
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
    }
}
function Gg() {
    return ao || (ao = Wg()),
        ao
}
function Ug(e) {
    let { swiper: t, on: n, emit: r } = e;
    const i = We();
    let l = null
        , o = null;
    const a = () => {
        !t || t.destroyed || !t.initialized || (r("beforeResize"),
            r("resize"))
    }
        , s = () => {
            !t || t.destroyed || !t.initialized || (l = new ResizeObserver(p => {
                o = i.requestAnimationFrame(() => {
                    const { width: h, height: v } = t;
                    let y = h
                        , w = v;
                    p.forEach(O => {
                        let { contentBoxSize: m, contentRect: c, target: f } = O;
                        f && f !== t.el || (y = c ? c.width : (m[0] || m).inlineSize,
                            w = c ? c.height : (m[0] || m).blockSize)
                    }
                    ),
                        (y !== h || w !== v) && a()
                }
                )
            }
            ),
                l.observe(t.el))
        }
        , u = () => {
            o && i.cancelAnimationFrame(o),
                l && l.unobserve && t.el && (l.unobserve(t.el),
                    l = null)
        }
        , d = () => {
            !t || t.destroyed || !t.initialized || r("orientationchange")
        }
        ;
    n("init", () => {
        if (t.params.resizeObserver && typeof i.ResizeObserver < "u") {
            s();
            return
        }
        i.addEventListener("resize", a),
            i.addEventListener("orientationchange", d)
    }
    ),
        n("destroy", () => {
            u(),
                i.removeEventListener("resize", a),
                i.removeEventListener("orientationchange", d)
        }
        )
}
function Qg(e) {
    let { swiper: t, extendParams: n, on: r, emit: i } = e;
    const l = []
        , o = We()
        , a = function (d, p) {
            p === void 0 && (p = {});
            const h = o.MutationObserver || o.WebkitMutationObserver
                , v = new h(y => {
                    if (t.__preventObserver__)
                        return;
                    if (y.length === 1) {
                        i("observerUpdate", y[0]);
                        return
                    }
                    const w = function () {
                        i("observerUpdate", y[0])
                    };
                    o.requestAnimationFrame ? o.requestAnimationFrame(w) : o.setTimeout(w, 0)
                }
                );
            v.observe(d, {
                attributes: typeof p.attributes > "u" ? !0 : p.attributes,
                childList: typeof p.childList > "u" ? !0 : p.childList,
                characterData: typeof p.characterData > "u" ? !0 : p.characterData
            }),
                l.push(v)
        }
        , s = () => {
            if (t.params.observer) {
                if (t.params.observeParents) {
                    const d = Hf(t.hostEl);
                    for (let p = 0; p < d.length; p += 1)
                        a(d[p])
                }
                a(t.hostEl, {
                    childList: t.params.observeSlideChildren
                }),
                    a(t.wrapperEl, {
                        attributes: !1
                    })
            }
        }
        , u = () => {
            l.forEach(d => {
                d.disconnect()
            }
            ),
                l.splice(0, l.length)
        }
        ;
    n({
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
    }),
        r("init", s),
        r("destroy", u)
}
var Yg = {
    on(e, t, n) {
        const r = this;
        if (!r.eventsListeners || r.destroyed || typeof t != "function")
            return r;
        const i = n ? "unshift" : "push";
        return e.split(" ").forEach(l => {
            r.eventsListeners[l] || (r.eventsListeners[l] = []),
                r.eventsListeners[l][i](t)
        }
        ),
            r
    },
    once(e, t, n) {
        const r = this;
        if (!r.eventsListeners || r.destroyed || typeof t != "function")
            return r;
        function i() {
            r.off(e, i),
                i.__emitterProxy && delete i.__emitterProxy;
            for (var l = arguments.length, o = new Array(l), a = 0; a < l; a++)
                o[a] = arguments[a];
            t.apply(r, o)
        }
        return i.__emitterProxy = t,
            r.on(e, i, n)
    },
    onAny(e, t) {
        const n = this;
        if (!n.eventsListeners || n.destroyed || typeof e != "function")
            return n;
        const r = t ? "unshift" : "push";
        return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e),
            n
    },
    offAny(e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners)
            return t;
        const n = t.eventsAnyListeners.indexOf(e);
        return n >= 0 && t.eventsAnyListeners.splice(n, 1),
            t
    },
    off(e, t) {
        const n = this;
        return !n.eventsListeners || n.destroyed || !n.eventsListeners || e.split(" ").forEach(r => {
            typeof t > "u" ? n.eventsListeners[r] = [] : n.eventsListeners[r] && n.eventsListeners[r].forEach((i, l) => {
                (i === t || i.__emitterProxy && i.__emitterProxy === t) && n.eventsListeners[r].splice(l, 1)
            }
            )
        }
        ),
            n
    },
    emit() {
        const e = this;
        if (!e.eventsListeners || e.destroyed || !e.eventsListeners)
            return e;
        let t, n, r;
        for (var i = arguments.length, l = new Array(i), o = 0; o < i; o++)
            l[o] = arguments[o];
        return typeof l[0] == "string" || Array.isArray(l[0]) ? (t = l[0],
            n = l.slice(1, l.length),
            r = e) : (t = l[0].events,
                n = l[0].data,
                r = l[0].context || e),
            n.unshift(r),
            (Array.isArray(t) ? t : t.split(" ")).forEach(s => {
                e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach(u => {
                    u.apply(r, [s, ...n])
                }
                ),
                    e.eventsListeners && e.eventsListeners[s] && e.eventsListeners[s].forEach(u => {
                        u.apply(r, n)
                    }
                    )
            }
            ),
            e
    }
};
function Xg() {
    const e = this;
    let t, n;
    const r = e.el;
    typeof e.params.width < "u" && e.params.width !== null ? t = e.params.width : t = r.clientWidth,
        typeof e.params.height < "u" && e.params.height !== null ? n = e.params.height : n = r.clientHeight,
        !(t === 0 && e.isHorizontal() || n === 0 && e.isVertical()) && (t = t - parseInt(Rt(r, "padding-left") || 0, 10) - parseInt(Rt(r, "padding-right") || 0, 10),
            n = n - parseInt(Rt(r, "padding-top") || 0, 10) - parseInt(Rt(r, "padding-bottom") || 0, 10),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(n) && (n = 0),
            Object.assign(e, {
                width: t,
                height: n,
                size: e.isHorizontal() ? t : n
            }))
}
function qg() {
    const e = this;
    function t(T, E) {
        return parseFloat(T.getPropertyValue(e.getDirectionLabel(E)) || 0)
    }
    const n = e.params
        , { wrapperEl: r, slidesEl: i, size: l, rtlTranslate: o, wrongRTL: a } = e
        , s = e.virtual && n.virtual.enabled
        , u = s ? e.virtual.slides.length : e.slides.length
        , d = at(i, `.${e.params.slideClass}, swiper-slide`)
        , p = s ? e.virtual.slides.length : d.length;
    let h = [];
    const v = []
        , y = [];
    let w = n.slidesOffsetBefore;
    typeof w == "function" && (w = n.slidesOffsetBefore.call(e));
    let O = n.slidesOffsetAfter;
    typeof O == "function" && (O = n.slidesOffsetAfter.call(e));
    const m = e.snapGrid.length
        , c = e.slidesGrid.length;
    let f = n.spaceBetween
        , g = -w
        , S = 0
        , x = 0;
    if (typeof l > "u")
        return;
    typeof f == "string" && f.indexOf("%") >= 0 ? f = parseFloat(f.replace("%", "")) / 100 * l : typeof f == "string" && (f = parseFloat(f)),
        e.virtualSize = -f,
        d.forEach(T => {
            o ? T.style.marginLeft = "" : T.style.marginRight = "",
                T.style.marginBottom = "",
                T.style.marginTop = ""
        }
        ),
        n.centeredSlides && n.cssMode && (mi(r, "--swiper-centered-offset-before", ""),
            mi(r, "--swiper-centered-offset-after", ""));
    const M = n.grid && n.grid.rows > 1 && e.grid;
    M ? e.grid.initSlides(d) : e.grid && e.grid.unsetSlides();
    let k;
    const C = n.slidesPerView === "auto" && n.breakpoints && Object.keys(n.breakpoints).filter(T => typeof n.breakpoints[T].slidesPerView < "u").length > 0;
    for (let T = 0; T < p; T += 1) {
        k = 0;
        let E;
        if (d[T] && (E = d[T]),
            M && e.grid.updateSlide(T, E, d),
            !(d[T] && Rt(E, "display") === "none")) {
            if (n.slidesPerView === "auto") {
                C && (d[T].style[e.getDirectionLabel("width")] = "");
                const _ = getComputedStyle(E)
                    , P = E.style.transform
                    , I = E.style.webkitTransform;
                if (P && (E.style.transform = "none"),
                    I && (E.style.webkitTransform = "none"),
                    n.roundLengths)
                    k = e.isHorizontal() ? ds(E, "width", !0) : ds(E, "height", !0);
                else {
                    const R = t(_, "width")
                        , $ = t(_, "padding-left")
                        , pe = t(_, "padding-right")
                        , L = t(_, "margin-left")
                        , N = t(_, "margin-right")
                        , j = _.getPropertyValue("box-sizing");
                    if (j && j === "border-box")
                        k = R + L + N;
                    else {
                        const { clientWidth: F, offsetWidth: V } = E;
                        k = R + $ + pe + L + N + (V - F)
                    }
                }
                P && (E.style.transform = P),
                    I && (E.style.webkitTransform = I),
                    n.roundLengths && (k = Math.floor(k))
            } else
                k = (l - (n.slidesPerView - 1) * f) / n.slidesPerView,
                    n.roundLengths && (k = Math.floor(k)),
                    d[T] && (d[T].style[e.getDirectionLabel("width")] = `${k}px`);
            d[T] && (d[T].swiperSlideSize = k),
                y.push(k),
                n.centeredSlides ? (g = g + k / 2 + S / 2 + f,
                    S === 0 && T !== 0 && (g = g - l / 2 - f),
                    T === 0 && (g = g - l / 2 - f),
                    Math.abs(g) < 1 / 1e3 && (g = 0),
                    n.roundLengths && (g = Math.floor(g)),
                    x % n.slidesPerGroup === 0 && h.push(g),
                    v.push(g)) : (n.roundLengths && (g = Math.floor(g)),
                        (x - Math.min(e.params.slidesPerGroupSkip, x)) % e.params.slidesPerGroup === 0 && h.push(g),
                        v.push(g),
                        g = g + k + f),
                e.virtualSize += k + f,
                S = k,
                x += 1
        }
    }
    if (e.virtualSize = Math.max(e.virtualSize, l) + O,
        o && a && (n.effect === "slide" || n.effect === "coverflow") && (r.style.width = `${e.virtualSize + f}px`),
        n.setWrapperSize && (r.style[e.getDirectionLabel("width")] = `${e.virtualSize + f}px`),
        M && e.grid.updateWrapperSize(k, h),
        !n.centeredSlides) {
        const T = [];
        for (let E = 0; E < h.length; E += 1) {
            let _ = h[E];
            n.roundLengths && (_ = Math.floor(_)),
                h[E] <= e.virtualSize - l && T.push(_)
        }
        h = T,
            Math.floor(e.virtualSize - l) - Math.floor(h[h.length - 1]) > 1 && h.push(e.virtualSize - l)
    }
    if (s && n.loop) {
        const T = y[0] + f;
        if (n.slidesPerGroup > 1) {
            const E = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / n.slidesPerGroup)
                , _ = T * n.slidesPerGroup;
            for (let P = 0; P < E; P += 1)
                h.push(h[h.length - 1] + _)
        }
        for (let E = 0; E < e.virtual.slidesBefore + e.virtual.slidesAfter; E += 1)
            n.slidesPerGroup === 1 && h.push(h[h.length - 1] + T),
                v.push(v[v.length - 1] + T),
                e.virtualSize += T
    }
    if (h.length === 0 && (h = [0]),
        f !== 0) {
        const T = e.isHorizontal() && o ? "marginLeft" : e.getDirectionLabel("marginRight");
        d.filter((E, _) => !n.cssMode || n.loop ? !0 : _ !== d.length - 1).forEach(E => {
            E.style[T] = `${f}px`
        }
        )
    }
    if (n.centeredSlides && n.centeredSlidesBounds) {
        let T = 0;
        y.forEach(_ => {
            T += _ + (f || 0)
        }
        ),
            T -= f;
        const E = T - l;
        h = h.map(_ => _ <= 0 ? -w : _ > E ? E + O : _)
    }
    if (n.centerInsufficientSlides) {
        let T = 0;
        if (y.forEach(E => {
            T += E + (f || 0)
        }
        ),
            T -= f,
            T < l) {
            const E = (l - T) / 2;
            h.forEach((_, P) => {
                h[P] = _ - E
            }
            ),
                v.forEach((_, P) => {
                    v[P] = _ + E
                }
                )
        }
    }
    if (Object.assign(e, {
        slides: d,
        snapGrid: h,
        slidesGrid: v,
        slidesSizesGrid: y
    }),
        n.centeredSlides && n.cssMode && !n.centeredSlidesBounds) {
        mi(r, "--swiper-centered-offset-before", `${-h[0]}px`),
            mi(r, "--swiper-centered-offset-after", `${e.size / 2 - y[y.length - 1] / 2}px`);
        const T = -e.snapGrid[0]
            , E = -e.slidesGrid[0];
        e.snapGrid = e.snapGrid.map(_ => _ + T),
            e.slidesGrid = e.slidesGrid.map(_ => _ + E)
    }
    if (p !== u && e.emit("slidesLengthChange"),
        h.length !== m && (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
        v.length !== c && e.emit("slidesGridLengthChange"),
        n.watchSlidesProgress && e.updateSlidesOffset(),
        e.emit("slidesUpdated"),
        !s && !n.cssMode && (n.effect === "slide" || n.effect === "fade")) {
        const T = `${n.containerModifierClass}backface-hidden`
            , E = e.el.classList.contains(T);
        p <= n.maxBackfaceHiddenSlides ? E || e.el.classList.add(T) : E && e.el.classList.remove(T)
    }
}
function Kg(e) {
    const t = this
        , n = []
        , r = t.virtual && t.params.virtual.enabled;
    let i = 0, l;
    typeof e == "number" ? t.setTransition(e) : e === !0 && t.setTransition(t.params.speed);
    const o = a => r ? t.slides[t.getSlideIndexByData(a)] : t.slides[a];
    if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
        if (t.params.centeredSlides)
            (t.visibleSlides || []).forEach(a => {
                n.push(a)
            }
            );
        else
            for (l = 0; l < Math.ceil(t.params.slidesPerView); l += 1) {
                const a = t.activeIndex + l;
                if (a > t.slides.length && !r)
                    break;
                n.push(o(a))
            }
    else
        n.push(o(t.activeIndex));
    for (l = 0; l < n.length; l += 1)
        if (typeof n[l] < "u") {
            const a = n[l].offsetHeight;
            i = a > i ? a : i
        }
    (i || i === 0) && (t.wrapperEl.style.height = `${i}px`)
}
function Zg() {
    const e = this
        , t = e.slides
        , n = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
    for (let r = 0; r < t.length; r += 1)
        t[r].swiperSlideOffset = (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) - n - e.cssOverflowAdjustment()
}
function Jg(e) {
    e === void 0 && (e = this && this.translate || 0);
    const t = this
        , n = t.params
        , { slides: r, rtlTranslate: i, snapGrid: l } = t;
    if (r.length === 0)
        return;
    typeof r[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
    let o = -e;
    i && (o = e),
        r.forEach(s => {
            s.classList.remove(n.slideVisibleClass, n.slideFullyVisibleClass)
        }
        ),
        t.visibleSlidesIndexes = [],
        t.visibleSlides = [];
    let a = n.spaceBetween;
    typeof a == "string" && a.indexOf("%") >= 0 ? a = parseFloat(a.replace("%", "")) / 100 * t.size : typeof a == "string" && (a = parseFloat(a));
    for (let s = 0; s < r.length; s += 1) {
        const u = r[s];
        let d = u.swiperSlideOffset;
        n.cssMode && n.centeredSlides && (d -= r[0].swiperSlideOffset);
        const p = (o + (n.centeredSlides ? t.minTranslate() : 0) - d) / (u.swiperSlideSize + a)
            , h = (o - l[0] + (n.centeredSlides ? t.minTranslate() : 0) - d) / (u.swiperSlideSize + a)
            , v = -(o - d)
            , y = v + t.slidesSizesGrid[s]
            , w = v >= 0 && v <= t.size - t.slidesSizesGrid[s];
        (v >= 0 && v < t.size - 1 || y > 1 && y <= t.size || v <= 0 && y >= t.size) && (t.visibleSlides.push(u),
            t.visibleSlidesIndexes.push(s),
            r[s].classList.add(n.slideVisibleClass)),
            w && r[s].classList.add(n.slideFullyVisibleClass),
            u.progress = i ? -p : p,
            u.originalProgress = i ? -h : h
    }
}
function e0(e) {
    const t = this;
    if (typeof e > "u") {
        const d = t.rtlTranslate ? -1 : 1;
        e = t && t.translate && t.translate * d || 0
    }
    const n = t.params
        , r = t.maxTranslate() - t.minTranslate();
    let { progress: i, isBeginning: l, isEnd: o, progressLoop: a } = t;
    const s = l
        , u = o;
    if (r === 0)
        i = 0,
            l = !0,
            o = !0;
    else {
        i = (e - t.minTranslate()) / r;
        const d = Math.abs(e - t.minTranslate()) < 1
            , p = Math.abs(e - t.maxTranslate()) < 1;
        l = d || i <= 0,
            o = p || i >= 1,
            d && (i = 0),
            p && (i = 1)
    }
    if (n.loop) {
        const d = t.getSlideIndexByData(0)
            , p = t.getSlideIndexByData(t.slides.length - 1)
            , h = t.slidesGrid[d]
            , v = t.slidesGrid[p]
            , y = t.slidesGrid[t.slidesGrid.length - 1]
            , w = Math.abs(e);
        w >= h ? a = (w - h) / y : a = (w + y - v) / y,
            a > 1 && (a -= 1)
    }
    Object.assign(t, {
        progress: i,
        progressLoop: a,
        isBeginning: l,
        isEnd: o
    }),
        (n.watchSlidesProgress || n.centeredSlides && n.autoHeight) && t.updateSlidesProgress(e),
        l && !s && t.emit("reachBeginning toEdge"),
        o && !u && t.emit("reachEnd toEdge"),
        (s && !l || u && !o) && t.emit("fromEdge"),
        t.emit("progress", i)
}
function t0() {
    const e = this
        , { slides: t, params: n, slidesEl: r, activeIndex: i } = e
        , l = e.virtual && n.virtual.enabled
        , o = e.grid && n.grid && n.grid.rows > 1
        , a = p => at(r, `.${n.slideClass}${p}, swiper-slide${p}`)[0];
    t.forEach(p => {
        p.classList.remove(n.slideActiveClass, n.slideNextClass, n.slidePrevClass)
    }
    );
    let s, u, d;
    if (l)
        if (n.loop) {
            let p = i - e.virtual.slidesBefore;
            p < 0 && (p = e.virtual.slides.length + p),
                p >= e.virtual.slides.length && (p -= e.virtual.slides.length),
                s = a(`[data-swiper-slide-index="${p}"]`)
        } else
            s = a(`[data-swiper-slide-index="${i}"]`);
    else
        o ? (s = t.filter(p => p.column === i)[0],
            d = t.filter(p => p.column === i + 1)[0],
            u = t.filter(p => p.column === i - 1)[0]) : s = t[i];
    s && (s.classList.add(n.slideActiveClass),
        o ? (d && d.classList.add(n.slideNextClass),
            u && u.classList.add(n.slidePrevClass)) : (d = Fg(s, `.${n.slideClass}, swiper-slide`)[0],
                n.loop && !d && (d = t[0]),
                d && d.classList.add(n.slideNextClass),
                u = $g(s, `.${n.slideClass}, swiper-slide`)[0],
                n.loop && !u === 0 && (u = t[t.length - 1]),
                u && u.classList.add(n.slidePrevClass))),
        e.emitSlidesClasses()
}
const Pi = (e, t) => {
    if (!e || e.destroyed || !e.params)
        return;
    const n = () => e.isElement ? "swiper-slide" : `.${e.params.slideClass}`
        , r = t.closest(n());
    if (r) {
        let i = r.querySelector(`.${e.params.lazyPreloaderClass}`);
        !i && e.isElement && (r.shadowRoot ? i = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
            r.shadowRoot && (i = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),
                i && i.remove())
        }
        )),
            i && i.remove()
    }
}
    , uo = (e, t) => {
        if (!e.slides[t])
            return;
        const n = e.slides[t].querySelector('[loading="lazy"]');
        n && n.removeAttribute("loading")
    }
    , fs = e => {
        if (!e || e.destroyed || !e.params)
            return;
        let t = e.params.lazyPreloadPrevNext;
        const n = e.slides.length;
        if (!n || !t || t < 0)
            return;
        t = Math.min(t, n);
        const r = e.params.slidesPerView === "auto" ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView)
            , i = e.activeIndex;
        if (e.params.grid && e.params.grid.rows > 1) {
            const o = i
                , a = [o - t];
            a.push(...Array.from({
                length: t
            }).map((s, u) => o + r + u)),
                e.slides.forEach((s, u) => {
                    a.includes(s.column) && uo(e, u)
                }
                );
            return
        }
        const l = i + r - 1;
        if (e.params.rewind || e.params.loop)
            for (let o = i - t; o <= l + t; o += 1) {
                const a = (o % n + n) % n;
                (a < i || a > l) && uo(e, a)
            }
        else
            for (let o = Math.max(i - t, 0); o <= Math.min(l + t, n - 1); o += 1)
                o !== i && (o > l || o < i) && uo(e, o)
    }
    ;
function n0(e) {
    const { slidesGrid: t, params: n } = e
        , r = e.rtlTranslate ? e.translate : -e.translate;
    let i;
    for (let l = 0; l < t.length; l += 1)
        typeof t[l + 1] < "u" ? r >= t[l] && r < t[l + 1] - (t[l + 1] - t[l]) / 2 ? i = l : r >= t[l] && r < t[l + 1] && (i = l + 1) : r >= t[l] && (i = l);
    return n.normalizeSlideIndex && (i < 0 || typeof i > "u") && (i = 0),
        i
}
function r0(e) {
    const t = this
        , n = t.rtlTranslate ? t.translate : -t.translate
        , { snapGrid: r, params: i, activeIndex: l, realIndex: o, snapIndex: a } = t;
    let s = e, u;
    const d = v => {
        let y = v - t.virtual.slidesBefore;
        return y < 0 && (y = t.virtual.slides.length + y),
            y >= t.virtual.slides.length && (y -= t.virtual.slides.length),
            y
    }
        ;
    if (typeof s > "u" && (s = n0(t)),
        r.indexOf(n) >= 0)
        u = r.indexOf(n);
    else {
        const v = Math.min(i.slidesPerGroupSkip, s);
        u = v + Math.floor((s - v) / i.slidesPerGroup)
    }
    if (u >= r.length && (u = r.length - 1),
        s === l && !t.params.loop) {
        u !== a && (t.snapIndex = u,
            t.emit("snapIndexChange"));
        return
    }
    if (s === l && t.params.loop && t.virtual && t.params.virtual.enabled) {
        t.realIndex = d(s);
        return
    }
    const p = t.grid && i.grid && i.grid.rows > 1;
    let h;
    if (t.virtual && i.virtual.enabled && i.loop)
        h = d(s);
    else if (p) {
        const v = t.slides.filter(w => w.column === s)[0];
        let y = parseInt(v.getAttribute("data-swiper-slide-index"), 10);
        Number.isNaN(y) && (y = Math.max(t.slides.indexOf(v), 0)),
            h = Math.floor(y / i.grid.rows)
    } else if (t.slides[s]) {
        const v = t.slides[s].getAttribute("data-swiper-slide-index");
        v ? h = parseInt(v, 10) : h = s
    } else
        h = s;
    Object.assign(t, {
        previousSnapIndex: a,
        snapIndex: u,
        previousRealIndex: o,
        realIndex: h,
        previousIndex: l,
        activeIndex: s
    }),
        t.initialized && fs(t),
        t.emit("activeIndexChange"),
        t.emit("snapIndexChange"),
        (t.initialized || t.params.runCallbacksOnInit) && (o !== h && t.emit("realIndexChange"),
            t.emit("slideChange"))
}
function i0(e, t) {
    const n = this
        , r = n.params;
    let i = e.closest(`.${r.slideClass}, swiper-slide`);
    !i && n.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach(a => {
        !i && a.matches && a.matches(`.${r.slideClass}, swiper-slide`) && (i = a)
    }
    );
    let l = !1, o;
    if (i) {
        for (let a = 0; a < n.slides.length; a += 1)
            if (n.slides[a] === i) {
                l = !0,
                    o = a;
                break
            }
    }
    if (i && l)
        n.clickedSlide = i,
            n.virtual && n.params.virtual.enabled ? n.clickedIndex = parseInt(i.getAttribute("data-swiper-slide-index"), 10) : n.clickedIndex = o;
    else {
        n.clickedSlide = void 0,
            n.clickedIndex = void 0;
        return
    }
    r.slideToClickedSlide && n.clickedIndex !== void 0 && n.clickedIndex !== n.activeIndex && n.slideToClickedSlide()
}
var l0 = {
    updateSize: Xg,
    updateSlides: qg,
    updateAutoHeight: Kg,
    updateSlidesOffset: Zg,
    updateSlidesProgress: Jg,
    updateProgress: e0,
    updateSlidesClasses: t0,
    updateActiveIndex: r0,
    updateClickedSlide: i0
};
function o0(e) {
    e === void 0 && (e = this.isHorizontal() ? "x" : "y");
    const t = this
        , { params: n, rtlTranslate: r, translate: i, wrapperEl: l } = t;
    if (n.virtualTranslate)
        return r ? -i : i;
    if (n.cssMode)
        return i;
    let o = Rg(l, e);
    return o += t.cssOverflowAdjustment(),
        r && (o = -o),
        o || 0
}
function s0(e, t) {
    const n = this
        , { rtlTranslate: r, params: i, wrapperEl: l, progress: o } = n;
    let a = 0
        , s = 0;
    const u = 0;
    n.isHorizontal() ? a = r ? -e : e : s = e,
        i.roundLengths && (a = Math.floor(a),
            s = Math.floor(s)),
        n.previousTranslate = n.translate,
        n.translate = n.isHorizontal() ? a : s,
        i.cssMode ? l[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal() ? -a : -s : i.virtualTranslate || (n.isHorizontal() ? a -= n.cssOverflowAdjustment() : s -= n.cssOverflowAdjustment(),
            l.style.transform = `translate3d(${a}px, ${s}px, ${u}px)`);
    let d;
    const p = n.maxTranslate() - n.minTranslate();
    p === 0 ? d = 0 : d = (e - n.minTranslate()) / p,
        d !== o && n.updateProgress(e),
        n.emit("setTranslate", n.translate, t)
}
function a0() {
    return -this.snapGrid[0]
}
function u0() {
    return -this.snapGrid[this.snapGrid.length - 1]
}
function c0(e, t, n, r, i) {
    e === void 0 && (e = 0),
        t === void 0 && (t = this.params.speed),
        n === void 0 && (n = !0),
        r === void 0 && (r = !0);
    const l = this
        , { params: o, wrapperEl: a } = l;
    if (l.animating && o.preventInteractionOnTransition)
        return !1;
    const s = l.minTranslate()
        , u = l.maxTranslate();
    let d;
    if (r && e > s ? d = s : r && e < u ? d = u : d = e,
        l.updateProgress(d),
        o.cssMode) {
        const p = l.isHorizontal();
        if (t === 0)
            a[p ? "scrollLeft" : "scrollTop"] = -d;
        else {
            if (!l.support.smoothScroll)
                return Ff({
                    swiper: l,
                    targetPosition: -d,
                    side: p ? "left" : "top"
                }),
                    !0;
            a.scrollTo({
                [p ? "left" : "top"]: -d,
                behavior: "smooth"
            })
        }
        return !0
    }
    return t === 0 ? (l.setTransition(0),
        l.setTranslate(d),
        n && (l.emit("beforeTransitionStart", t, i),
            l.emit("transitionEnd"))) : (l.setTransition(t),
                l.setTranslate(d),
                n && (l.emit("beforeTransitionStart", t, i),
                    l.emit("transitionStart")),
                l.animating || (l.animating = !0,
                    l.onTranslateToWrapperTransitionEnd || (l.onTranslateToWrapperTransitionEnd = function (h) {
                        !l || l.destroyed || h.target === this && (l.wrapperEl.removeEventListener("transitionend", l.onTranslateToWrapperTransitionEnd),
                            l.onTranslateToWrapperTransitionEnd = null,
                            delete l.onTranslateToWrapperTransitionEnd,
                            n && l.emit("transitionEnd"))
                    }
                    ),
                    l.wrapperEl.addEventListener("transitionend", l.onTranslateToWrapperTransitionEnd))),
        !0
}
var d0 = {
    getTranslate: o0,
    setTranslate: s0,
    minTranslate: a0,
    maxTranslate: u0,
    translateTo: c0
};
function f0(e, t) {
    const n = this;
    n.params.cssMode || (n.wrapperEl.style.transitionDuration = `${e}ms`,
        n.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : ""),
        n.emit("setTransition", e, t)
}
function Vf(e) {
    let { swiper: t, runCallbacks: n, direction: r, step: i } = e;
    const { activeIndex: l, previousIndex: o } = t;
    let a = r;
    if (a || (l > o ? a = "next" : l < o ? a = "prev" : a = "reset"),
        t.emit(`transition${i}`),
        n && l !== o) {
        if (a === "reset") {
            t.emit(`slideResetTransition${i}`);
            return
        }
        t.emit(`slideChangeTransition${i}`),
            a === "next" ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`)
    }
}
function p0(e, t) {
    e === void 0 && (e = !0);
    const n = this
        , { params: r } = n;
    r.cssMode || (r.autoHeight && n.updateAutoHeight(),
        Vf({
            swiper: n,
            runCallbacks: e,
            direction: t,
            step: "Start"
        }))
}
function m0(e, t) {
    e === void 0 && (e = !0);
    const n = this
        , { params: r } = n;
    n.animating = !1,
        !r.cssMode && (n.setTransition(0),
            Vf({
                swiper: n,
                runCallbacks: e,
                direction: t,
                step: "End"
            }))
}
var h0 = {
    setTransition: f0,
    transitionStart: p0,
    transitionEnd: m0
};
function v0(e, t, n, r, i) {
    e === void 0 && (e = 0),
        t === void 0 && (t = this.params.speed),
        n === void 0 && (n = !0),
        typeof e == "string" && (e = parseInt(e, 10));
    const l = this;
    let o = e;
    o < 0 && (o = 0);
    const { params: a, snapGrid: s, slidesGrid: u, previousIndex: d, activeIndex: p, rtlTranslate: h, wrapperEl: v, enabled: y } = l;
    if (l.animating && a.preventInteractionOnTransition || !y && !r && !i)
        return !1;
    const w = Math.min(l.params.slidesPerGroupSkip, o);
    let O = w + Math.floor((o - w) / l.params.slidesPerGroup);
    O >= s.length && (O = s.length - 1);
    const m = -s[O];
    if (a.normalizeSlideIndex)
        for (let f = 0; f < u.length; f += 1) {
            const g = -Math.floor(m * 100)
                , S = Math.floor(u[f] * 100)
                , x = Math.floor(u[f + 1] * 100);
            typeof u[f + 1] < "u" ? g >= S && g < x - (x - S) / 2 ? o = f : g >= S && g < x && (o = f + 1) : g >= S && (o = f)
        }
    if (l.initialized && o !== p && (!l.allowSlideNext && (h ? m > l.translate && m > l.minTranslate() : m < l.translate && m < l.minTranslate()) || !l.allowSlidePrev && m > l.translate && m > l.maxTranslate() && (p || 0) !== o))
        return !1;
    o !== (d || 0) && n && l.emit("beforeSlideChangeStart"),
        l.updateProgress(m);
    let c;
    if (o > p ? c = "next" : o < p ? c = "prev" : c = "reset",
        h && -m === l.translate || !h && m === l.translate)
        return l.updateActiveIndex(o),
            a.autoHeight && l.updateAutoHeight(),
            l.updateSlidesClasses(),
            a.effect !== "slide" && l.setTranslate(m),
            c !== "reset" && (l.transitionStart(n, c),
                l.transitionEnd(n, c)),
            !1;
    if (a.cssMode) {
        const f = l.isHorizontal()
            , g = h ? m : -m;
        if (t === 0) {
            const S = l.virtual && l.params.virtual.enabled;
            S && (l.wrapperEl.style.scrollSnapType = "none",
                l._immediateVirtual = !0),
                S && !l._cssModeVirtualInitialSet && l.params.initialSlide > 0 ? (l._cssModeVirtualInitialSet = !0,
                    requestAnimationFrame(() => {
                        v[f ? "scrollLeft" : "scrollTop"] = g
                    }
                    )) : v[f ? "scrollLeft" : "scrollTop"] = g,
                S && requestAnimationFrame(() => {
                    l.wrapperEl.style.scrollSnapType = "",
                        l._immediateVirtual = !1
                }
                )
        } else {
            if (!l.support.smoothScroll)
                return Ff({
                    swiper: l,
                    targetPosition: g,
                    side: f ? "left" : "top"
                }),
                    !0;
            v.scrollTo({
                [f ? "left" : "top"]: g,
                behavior: "smooth"
            })
        }
        return !0
    }
    return l.setTransition(t),
        l.setTranslate(m),
        l.updateActiveIndex(o),
        l.updateSlidesClasses(),
        l.emit("beforeTransitionStart", t, r),
        l.transitionStart(n, c),
        t === 0 ? l.transitionEnd(n, c) : l.animating || (l.animating = !0,
            l.onSlideToWrapperTransitionEnd || (l.onSlideToWrapperTransitionEnd = function (g) {
                !l || l.destroyed || g.target === this && (l.wrapperEl.removeEventListener("transitionend", l.onSlideToWrapperTransitionEnd),
                    l.onSlideToWrapperTransitionEnd = null,
                    delete l.onSlideToWrapperTransitionEnd,
                    l.transitionEnd(n, c))
            }
            ),
            l.wrapperEl.addEventListener("transitionend", l.onSlideToWrapperTransitionEnd)),
        !0
}
function g0(e, t, n, r) {
    e === void 0 && (e = 0),
        t === void 0 && (t = this.params.speed),
        n === void 0 && (n = !0),
        typeof e == "string" && (e = parseInt(e, 10));
    const i = this
        , l = i.grid && i.params.grid && i.params.grid.rows > 1;
    let o = e;
    if (i.params.loop)
        if (i.virtual && i.params.virtual.enabled)
            o = o + i.virtual.slidesBefore;
        else {
            let a;
            if (l) {
                const h = o * i.params.grid.rows;
                a = i.slides.filter(v => v.getAttribute("data-swiper-slide-index") * 1 === h)[0].column
            } else
                a = i.getSlideIndexByData(o);
            const s = l ? Math.ceil(i.slides.length / i.params.grid.rows) : i.slides.length
                , { centeredSlides: u } = i.params;
            let d = i.params.slidesPerView;
            d === "auto" ? d = i.slidesPerViewDynamic() : (d = Math.ceil(parseFloat(i.params.slidesPerView, 10)),
                u && d % 2 === 0 && (d = d + 1));
            let p = s - a < d;
            if (u && (p = p || a < Math.ceil(d / 2)),
                p) {
                const h = u ? a < i.activeIndex ? "prev" : "next" : a - i.activeIndex - 1 < i.params.slidesPerView ? "next" : "prev";
                i.loopFix({
                    direction: h,
                    slideTo: !0,
                    activeSlideIndex: h === "next" ? a + 1 : a - s + 1,
                    slideRealIndex: h === "next" ? i.realIndex : void 0
                })
            }
            if (l) {
                const h = o * i.params.grid.rows;
                o = i.slides.filter(v => v.getAttribute("data-swiper-slide-index") * 1 === h)[0].column
            } else
                o = i.getSlideIndexByData(o)
        }
    return requestAnimationFrame(() => {
        i.slideTo(o, t, n, r)
    }
    ),
        i
}
function y0(e, t, n) {
    e === void 0 && (e = this.params.speed),
        t === void 0 && (t = !0);
    const r = this
        , { enabled: i, params: l, animating: o } = r;
    if (!i)
        return r;
    let a = l.slidesPerGroup;
    l.slidesPerView === "auto" && l.slidesPerGroup === 1 && l.slidesPerGroupAuto && (a = Math.max(r.slidesPerViewDynamic("current", !0), 1));
    const s = r.activeIndex < l.slidesPerGroupSkip ? 1 : a
        , u = r.virtual && l.virtual.enabled;
    if (l.loop) {
        if (o && !u && l.loopPreventsSliding)
            return !1;
        if (r.loopFix({
            direction: "next"
        }),
            r._clientLeft = r.wrapperEl.clientLeft,
            r.activeIndex === r.slides.length - 1 && l.cssMode)
            return requestAnimationFrame(() => {
                r.slideTo(r.activeIndex + s, e, t, n)
            }
            ),
                !0
    }
    return l.rewind && r.isEnd ? r.slideTo(0, e, t, n) : r.slideTo(r.activeIndex + s, e, t, n)
}
function w0(e, t, n) {
    e === void 0 && (e = this.params.speed),
        t === void 0 && (t = !0);
    const r = this
        , { params: i, snapGrid: l, slidesGrid: o, rtlTranslate: a, enabled: s, animating: u } = r;
    if (!s)
        return r;
    const d = r.virtual && i.virtual.enabled;
    if (i.loop) {
        if (u && !d && i.loopPreventsSliding)
            return !1;
        r.loopFix({
            direction: "prev"
        }),
            r._clientLeft = r.wrapperEl.clientLeft
    }
    const p = a ? r.translate : -r.translate;
    function h(m) {
        return m < 0 ? -Math.floor(Math.abs(m)) : Math.floor(m)
    }
    const v = h(p)
        , y = l.map(m => h(m));
    let w = l[y.indexOf(v) - 1];
    if (typeof w > "u" && i.cssMode) {
        let m;
        l.forEach((c, f) => {
            v >= c && (m = f)
        }
        ),
            typeof m < "u" && (w = l[m > 0 ? m - 1 : m])
    }
    let O = 0;
    if (typeof w < "u" && (O = o.indexOf(w),
        O < 0 && (O = r.activeIndex - 1),
        i.slidesPerView === "auto" && i.slidesPerGroup === 1 && i.slidesPerGroupAuto && (O = O - r.slidesPerViewDynamic("previous", !0) + 1,
            O = Math.max(O, 0))),
        i.rewind && r.isBeginning) {
        const m = r.params.virtual && r.params.virtual.enabled && r.virtual ? r.virtual.slides.length - 1 : r.slides.length - 1;
        return r.slideTo(m, e, t, n)
    } else if (i.loop && r.activeIndex === 0 && i.cssMode)
        return requestAnimationFrame(() => {
            r.slideTo(O, e, t, n)
        }
        ),
            !0;
    return r.slideTo(O, e, t, n)
}
function S0(e, t, n) {
    e === void 0 && (e = this.params.speed),
        t === void 0 && (t = !0);
    const r = this;
    return r.slideTo(r.activeIndex, e, t, n)
}
function x0(e, t, n, r) {
    e === void 0 && (e = this.params.speed),
        t === void 0 && (t = !0),
        r === void 0 && (r = .5);
    const i = this;
    let l = i.activeIndex;
    const o = Math.min(i.params.slidesPerGroupSkip, l)
        , a = o + Math.floor((l - o) / i.params.slidesPerGroup)
        , s = i.rtlTranslate ? i.translate : -i.translate;
    if (s >= i.snapGrid[a]) {
        const u = i.snapGrid[a]
            , d = i.snapGrid[a + 1];
        s - u > (d - u) * r && (l += i.params.slidesPerGroup)
    } else {
        const u = i.snapGrid[a - 1]
            , d = i.snapGrid[a];
        s - u <= (d - u) * r && (l -= i.params.slidesPerGroup)
    }
    return l = Math.max(l, 0),
        l = Math.min(l, i.slidesGrid.length - 1),
        i.slideTo(l, e, t, n)
}
function E0() {
    const e = this
        , { params: t, slidesEl: n } = e
        , r = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
    let i = e.clickedIndex, l;
    const o = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
    if (t.loop) {
        if (e.animating)
            return;
        l = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10),
            t.centeredSlides ? i < e.loopedSlides - r / 2 || i > e.slides.length - e.loopedSlides + r / 2 ? (e.loopFix(),
                i = e.getSlideIndex(at(n, `${o}[data-swiper-slide-index="${l}"]`)[0]),
                cs(() => {
                    e.slideTo(i)
                }
                )) : e.slideTo(i) : i > e.slides.length - r ? (e.loopFix(),
                    i = e.getSlideIndex(at(n, `${o}[data-swiper-slide-index="${l}"]`)[0]),
                    cs(() => {
                        e.slideTo(i)
                    }
                    )) : e.slideTo(i)
    } else
        e.slideTo(i)
}
var T0 = {
    slideTo: v0,
    slideToLoop: g0,
    slideNext: y0,
    slidePrev: w0,
    slideReset: S0,
    slideToClosest: x0,
    slideToClickedSlide: E0
};
function k0(e) {
    const t = this
        , { params: n, slidesEl: r } = t;
    if (!n.loop || t.virtual && t.params.virtual.enabled)
        return;
    const i = () => {
        at(r, `.${n.slideClass}, swiper-slide`).forEach((p, h) => {
            p.setAttribute("data-swiper-slide-index", h)
        }
        )
    }
        , l = t.grid && n.grid && n.grid.rows > 1
        , o = n.slidesPerGroup * (l ? n.grid.rows : 1)
        , a = t.slides.length % o !== 0
        , s = l && t.slides.length % n.grid.rows !== 0
        , u = d => {
            for (let p = 0; p < d; p += 1) {
                const h = t.isElement ? nl("swiper-slide", [n.slideBlankClass]) : nl("div", [n.slideClass, n.slideBlankClass]);
                t.slidesEl.append(h)
            }
        }
        ;
    if (a) {
        if (n.loopAddBlankSlides) {
            const d = o - t.slides.length % o;
            u(d),
                t.recalcSlides(),
                t.updateSlides()
        } else
            tl("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        i()
    } else if (s) {
        if (n.loopAddBlankSlides) {
            const d = n.grid.rows - t.slides.length % n.grid.rows;
            u(d),
                t.recalcSlides(),
                t.updateSlides()
        } else
            tl("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        i()
    } else
        i();
    t.loopFix({
        slideRealIndex: e,
        direction: n.centeredSlides ? void 0 : "next"
    })
}
function _0(e) {
    let { slideRealIndex: t, slideTo: n = !0, direction: r, setTranslate: i, activeSlideIndex: l, byController: o, byMousewheel: a } = e === void 0 ? {} : e;
    const s = this;
    if (!s.params.loop)
        return;
    s.emit("beforeLoopFix");
    const { slides: u, allowSlidePrev: d, allowSlideNext: p, slidesEl: h, params: v } = s
        , { centeredSlides: y } = v;
    if (s.allowSlidePrev = !0,
        s.allowSlideNext = !0,
        s.virtual && v.virtual.enabled) {
        n && (!v.centeredSlides && s.snapIndex === 0 ? s.slideTo(s.virtual.slides.length, 0, !1, !0) : v.centeredSlides && s.snapIndex < v.slidesPerView ? s.slideTo(s.virtual.slides.length + s.snapIndex, 0, !1, !0) : s.snapIndex === s.snapGrid.length - 1 && s.slideTo(s.virtual.slidesBefore, 0, !1, !0)),
            s.allowSlidePrev = d,
            s.allowSlideNext = p,
            s.emit("loopFix");
        return
    }
    let w = v.slidesPerView;
    w === "auto" ? w = s.slidesPerViewDynamic() : (w = Math.ceil(parseFloat(v.slidesPerView, 10)),
        y && w % 2 === 0 && (w = w + 1));
    const O = v.slidesPerGroupAuto ? w : v.slidesPerGroup;
    let m = O;
    m % O !== 0 && (m += O - m % O),
        m += v.loopAdditionalSlides,
        s.loopedSlides = m;
    const c = s.grid && v.grid && v.grid.rows > 1;
    u.length < w + m ? tl("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : c && v.grid.fill === "row" && tl("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
    const f = []
        , g = [];
    let S = s.activeIndex;
    typeof l > "u" ? l = s.getSlideIndex(u.filter(P => P.classList.contains(v.slideActiveClass))[0]) : S = l;
    const x = r === "next" || !r
        , M = r === "prev" || !r;
    let k = 0
        , C = 0;
    const T = c ? Math.ceil(u.length / v.grid.rows) : u.length
        , _ = (c ? u[l].column : l) + (y && typeof i > "u" ? -w / 2 + .5 : 0);
    if (_ < m) {
        k = Math.max(m - _, O);
        for (let P = 0; P < m - _; P += 1) {
            const I = P - Math.floor(P / T) * T;
            if (c) {
                const R = T - I - 1;
                for (let $ = u.length - 1; $ >= 0; $ -= 1)
                    u[$].column === R && f.push($)
            } else
                f.push(T - I - 1)
        }
    } else if (_ + w > T - m) {
        C = Math.max(_ - (T - m * 2), O);
        for (let P = 0; P < C; P += 1) {
            const I = P - Math.floor(P / T) * T;
            c ? u.forEach((R, $) => {
                R.column === I && g.push($)
            }
            ) : g.push(I)
        }
    }
    if (s.__preventObserver__ = !0,
        requestAnimationFrame(() => {
            s.__preventObserver__ = !1
        }
        ),
        M && f.forEach(P => {
            u[P].swiperLoopMoveDOM = !0,
                h.prepend(u[P]),
                u[P].swiperLoopMoveDOM = !1
        }
        ),
        x && g.forEach(P => {
            u[P].swiperLoopMoveDOM = !0,
                h.append(u[P]),
                u[P].swiperLoopMoveDOM = !1
        }
        ),
        s.recalcSlides(),
        v.slidesPerView === "auto" ? s.updateSlides() : c && (f.length > 0 && M || g.length > 0 && x) && s.slides.forEach((P, I) => {
            s.grid.updateSlide(I, P, s.slides)
        }
        ),
        v.watchSlidesProgress && s.updateSlidesOffset(),
        n) {
        if (f.length > 0 && M) {
            if (typeof t > "u") {
                const P = s.slidesGrid[S]
                    , R = s.slidesGrid[S + k] - P;
                a ? s.setTranslate(s.translate - R) : (s.slideTo(S + k, 0, !1, !0),
                    i && (s.touchEventsData.startTranslate = s.touchEventsData.startTranslate - R,
                        s.touchEventsData.currentTranslate = s.touchEventsData.currentTranslate - R))
            } else if (i) {
                const P = c ? f.length / v.grid.rows : f.length;
                s.slideTo(s.activeIndex + P, 0, !1, !0),
                    s.touchEventsData.currentTranslate = s.translate
            }
        } else if (g.length > 0 && x)
            if (typeof t > "u") {
                const P = s.slidesGrid[S]
                    , R = s.slidesGrid[S - C] - P;
                a ? s.setTranslate(s.translate - R) : (s.slideTo(S - C, 0, !1, !0),
                    i && (s.touchEventsData.startTranslate = s.touchEventsData.startTranslate - R,
                        s.touchEventsData.currentTranslate = s.touchEventsData.currentTranslate - R))
            } else {
                const P = c ? g.length / v.grid.rows : g.length;
                s.slideTo(s.activeIndex - P, 0, !1, !0)
            }
    }
    if (s.allowSlidePrev = d,
        s.allowSlideNext = p,
        s.controller && s.controller.control && !o) {
        const P = {
            slideRealIndex: t,
            direction: r,
            setTranslate: i,
            activeSlideIndex: l,
            byController: !0
        };
        Array.isArray(s.controller.control) ? s.controller.control.forEach(I => {
            !I.destroyed && I.params.loop && I.loopFix({
                ...P,
                slideTo: I.params.slidesPerView === v.slidesPerView ? n : !1
            })
        }
        ) : s.controller.control instanceof s.constructor && s.controller.control.params.loop && s.controller.control.loopFix({
            ...P,
            slideTo: s.controller.control.params.slidesPerView === v.slidesPerView ? n : !1
        })
    }
    s.emit("loopFix")
}
function C0() {
    const e = this
        , { params: t, slidesEl: n } = e;
    if (!t.loop || e.virtual && e.params.virtual.enabled)
        return;
    e.recalcSlides();
    const r = [];
    e.slides.forEach(i => {
        const l = typeof i.swiperSlideIndex > "u" ? i.getAttribute("data-swiper-slide-index") * 1 : i.swiperSlideIndex;
        r[l] = i
    }
    ),
        e.slides.forEach(i => {
            i.removeAttribute("data-swiper-slide-index")
        }
        ),
        r.forEach(i => {
            n.append(i)
        }
        ),
        e.recalcSlides(),
        e.slideTo(e.realIndex, 0)
}
var P0 = {
    loopCreate: k0,
    loopFix: _0,
    loopDestroy: C0
};
function O0(e) {
    const t = this;
    if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)
        return;
    const n = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
    t.isElement && (t.__preventObserver__ = !0),
        n.style.cursor = "move",
        n.style.cursor = e ? "grabbing" : "grab",
        t.isElement && requestAnimationFrame(() => {
            t.__preventObserver__ = !1
        }
        )
}
function M0() {
    const e = this;
    e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0),
        e[e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "",
        e.isElement && requestAnimationFrame(() => {
            e.__preventObserver__ = !1
        }
        ))
}
var L0 = {
    setGrabCursor: O0,
    unsetGrabCursor: M0
};
function z0(e, t) {
    t === void 0 && (t = this);
    function n(r) {
        if (!r || r === wt() || r === We())
            return null;
        r.assignedSlot && (r = r.assignedSlot);
        const i = r.closest(e);
        return !i && !r.getRootNode ? null : i || n(r.getRootNode().host)
    }
    return n(t)
}
function qu(e, t, n) {
    const r = We()
        , { params: i } = e
        , l = i.edgeSwipeDetection
        , o = i.edgeSwipeThreshold;
    return l && (n <= o || n >= r.innerWidth - o) ? l === "prevent" ? (t.preventDefault(),
        !0) : !1 : !0
}
function I0(e) {
    const t = this
        , n = wt();
    let r = e;
    r.originalEvent && (r = r.originalEvent);
    const i = t.touchEventsData;
    if (r.type === "pointerdown") {
        if (i.pointerId !== null && i.pointerId !== r.pointerId)
            return;
        i.pointerId = r.pointerId
    } else
        r.type === "touchstart" && r.targetTouches.length === 1 && (i.touchId = r.targetTouches[0].identifier);
    if (r.type === "touchstart") {
        qu(t, r, r.targetTouches[0].pageX);
        return
    }
    const { params: l, touches: o, enabled: a } = t;
    if (!a || !l.simulateTouch && r.pointerType === "mouse" || t.animating && l.preventInteractionOnTransition)
        return;
    !t.animating && l.cssMode && l.loop && t.loopFix();
    let s = r.target;
    if (l.touchEventsTarget === "wrapper" && !t.wrapperEl.contains(s) || "which" in r && r.which === 3 || "button" in r && r.button > 0 || i.isTouched && i.isMoved)
        return;
    const u = !!l.noSwipingClass && l.noSwipingClass !== ""
        , d = r.composedPath ? r.composedPath() : r.path;
    u && r.target && r.target.shadowRoot && d && (s = d[0]);
    const p = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`
        , h = !!(r.target && r.target.shadowRoot);
    if (l.noSwiping && (h ? z0(p, s) : s.closest(p))) {
        t.allowClick = !0;
        return
    }
    if (l.swipeHandler && !s.closest(l.swipeHandler))
        return;
    o.currentX = r.pageX,
        o.currentY = r.pageY;
    const v = o.currentX
        , y = o.currentY;
    if (!qu(t, r, v))
        return;
    Object.assign(i, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0
    }),
        o.startX = v,
        o.startY = y,
        i.touchStartTime = el(),
        t.allowClick = !0,
        t.updateSize(),
        t.swipeDirection = void 0,
        l.threshold > 0 && (i.allowThresholdMove = !1);
    let w = !0;
    s.matches(i.focusableElements) && (w = !1,
        s.nodeName === "SELECT" && (i.isTouched = !1)),
        n.activeElement && n.activeElement.matches(i.focusableElements) && n.activeElement !== s && n.activeElement.blur();
    const O = w && t.allowTouchMove && l.touchStartPreventDefault;
    (l.touchStartForcePreventDefault || O) && !s.isContentEditable && r.preventDefault(),
        l.freeMode && l.freeMode.enabled && t.freeMode && t.animating && !l.cssMode && t.freeMode.onTouchStart(),
        t.emit("touchStart", r)
}
function N0(e) {
    const t = wt()
        , n = this
        , r = n.touchEventsData
        , { params: i, touches: l, rtlTranslate: o, enabled: a } = n;
    if (!a || !i.simulateTouch && e.pointerType === "mouse")
        return;
    let s = e;
    if (s.originalEvent && (s = s.originalEvent),
        s.type === "pointermove" && (r.touchId !== null || s.pointerId !== r.pointerId))
        return;
    let u;
    if (s.type === "touchmove") {
        if (u = [...s.changedTouches].filter(x => x.identifier === r.touchId)[0],
            !u || u.identifier !== r.touchId)
            return
    } else
        u = s;
    if (!r.isTouched) {
        r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", s);
        return
    }
    const d = u.pageX
        , p = u.pageY;
    if (s.preventedByNestedSwiper) {
        l.startX = d,
            l.startY = p;
        return
    }
    if (!n.allowTouchMove) {
        s.target.matches(r.focusableElements) || (n.allowClick = !1),
            r.isTouched && (Object.assign(l, {
                startX: d,
                startY: p,
                currentX: d,
                currentY: p
            }),
                r.touchStartTime = el());
        return
    }
    if (i.touchReleaseOnEdges && !i.loop) {
        if (n.isVertical()) {
            if (p < l.startY && n.translate <= n.maxTranslate() || p > l.startY && n.translate >= n.minTranslate()) {
                r.isTouched = !1,
                    r.isMoved = !1;
                return
            }
        } else if (d < l.startX && n.translate <= n.maxTranslate() || d > l.startX && n.translate >= n.minTranslate())
            return
    }
    if (t.activeElement && s.target === t.activeElement && s.target.matches(r.focusableElements)) {
        r.isMoved = !0,
            n.allowClick = !1;
        return
    }
    r.allowTouchCallbacks && n.emit("touchMove", s),
        l.previousX = l.currentX,
        l.previousY = l.currentY,
        l.currentX = d,
        l.currentY = p;
    const h = l.currentX - l.startX
        , v = l.currentY - l.startY;
    if (n.params.threshold && Math.sqrt(h ** 2 + v ** 2) < n.params.threshold)
        return;
    if (typeof r.isScrolling > "u") {
        let x;
        n.isHorizontal() && l.currentY === l.startY || n.isVertical() && l.currentX === l.startX ? r.isScrolling = !1 : h * h + v * v >= 25 && (x = Math.atan2(Math.abs(v), Math.abs(h)) * 180 / Math.PI,
            r.isScrolling = n.isHorizontal() ? x > i.touchAngle : 90 - x > i.touchAngle)
    }
    if (r.isScrolling && n.emit("touchMoveOpposite", s),
        typeof r.startMoving > "u" && (l.currentX !== l.startX || l.currentY !== l.startY) && (r.startMoving = !0),
        r.isScrolling) {
        r.isTouched = !1;
        return
    }
    if (!r.startMoving)
        return;
    n.allowClick = !1,
        !i.cssMode && s.cancelable && s.preventDefault(),
        i.touchMoveStopPropagation && !i.nested && s.stopPropagation();
    let y = n.isHorizontal() ? h : v
        , w = n.isHorizontal() ? l.currentX - l.previousX : l.currentY - l.previousY;
    i.oneWayMovement && (y = Math.abs(y) * (o ? 1 : -1),
        w = Math.abs(w) * (o ? 1 : -1)),
        l.diff = y,
        y *= i.touchRatio,
        o && (y = -y,
            w = -w);
    const O = n.touchesDirection;
    n.swipeDirection = y > 0 ? "prev" : "next",
        n.touchesDirection = w > 0 ? "prev" : "next";
    const m = n.params.loop && !i.cssMode
        , c = n.touchesDirection === "next" && n.allowSlideNext || n.touchesDirection === "prev" && n.allowSlidePrev;
    if (!r.isMoved) {
        if (m && c && n.loopFix({
            direction: n.swipeDirection
        }),
            r.startTranslate = n.getTranslate(),
            n.setTransition(0),
            n.animating) {
            const x = new window.CustomEvent("transitionend", {
                bubbles: !0,
                cancelable: !0
            });
            n.wrapperEl.dispatchEvent(x)
        }
        r.allowMomentumBounce = !1,
            i.grabCursor && (n.allowSlideNext === !0 || n.allowSlidePrev === !0) && n.setGrabCursor(!0),
            n.emit("sliderFirstMove", s)
    }
    let f;
    if (new Date().getTime(),
        r.isMoved && r.allowThresholdMove && O !== n.touchesDirection && m && c && Math.abs(y) >= 1) {
        Object.assign(l, {
            startX: d,
            startY: p,
            currentX: d,
            currentY: p,
            startTranslate: r.currentTranslate
        }),
            r.loopSwapReset = !0,
            r.startTranslate = r.currentTranslate;
        return
    }
    n.emit("sliderMove", s),
        r.isMoved = !0,
        r.currentTranslate = y + r.startTranslate;
    let g = !0
        , S = i.resistanceRatio;
    if (i.touchReleaseOnEdges && (S = 0),
        y > 0 ? (m && c && !f && r.allowThresholdMove && r.currentTranslate > (i.centeredSlides ? n.minTranslate() - n.slidesSizesGrid[n.activeIndex + 1] : n.minTranslate()) && n.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0
        }),
            r.currentTranslate > n.minTranslate() && (g = !1,
                i.resistance && (r.currentTranslate = n.minTranslate() - 1 + (-n.minTranslate() + r.startTranslate + y) ** S))) : y < 0 && (m && c && !f && r.allowThresholdMove && r.currentTranslate < (i.centeredSlides ? n.maxTranslate() + n.slidesSizesGrid[n.slidesSizesGrid.length - 1] : n.maxTranslate()) && n.loopFix({
                    direction: "next",
                    setTranslate: !0,
                    activeSlideIndex: n.slides.length - (i.slidesPerView === "auto" ? n.slidesPerViewDynamic() : Math.ceil(parseFloat(i.slidesPerView, 10)))
                }),
                    r.currentTranslate < n.maxTranslate() && (g = !1,
                        i.resistance && (r.currentTranslate = n.maxTranslate() + 1 - (n.maxTranslate() - r.startTranslate - y) ** S))),
        g && (s.preventedByNestedSwiper = !0),
        !n.allowSlideNext && n.swipeDirection === "next" && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate),
        !n.allowSlidePrev && n.swipeDirection === "prev" && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate),
        !n.allowSlidePrev && !n.allowSlideNext && (r.currentTranslate = r.startTranslate),
        i.threshold > 0)
        if (Math.abs(y) > i.threshold || r.allowThresholdMove) {
            if (!r.allowThresholdMove) {
                r.allowThresholdMove = !0,
                    l.startX = l.currentX,
                    l.startY = l.currentY,
                    r.currentTranslate = r.startTranslate,
                    l.diff = n.isHorizontal() ? l.currentX - l.startX : l.currentY - l.startY;
                return
            }
        } else {
            r.currentTranslate = r.startTranslate;
            return
        }
    !i.followFinger || i.cssMode || ((i.freeMode && i.freeMode.enabled && n.freeMode || i.watchSlidesProgress) && (n.updateActiveIndex(),
        n.updateSlidesClasses()),
        i.freeMode && i.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
        n.updateProgress(r.currentTranslate),
        n.setTranslate(r.currentTranslate))
}
function b0(e) {
    const t = this
        , n = t.touchEventsData;
    let r = e;
    r.originalEvent && (r = r.originalEvent);
    let i;
    if (r.type === "touchend" || r.type === "touchcancel") {
        if (i = [...r.changedTouches].filter(S => S.identifier === n.touchId)[0],
            !i || i.identifier !== n.touchId)
            return
    } else {
        if (n.touchId !== null || r.pointerId !== n.pointerId)
            return;
        i = r
    }
    if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(r.type) && !(["pointercancel", "contextmenu"].includes(r.type) && (t.browser.isSafari || t.browser.isWebView)))
        return;
    n.pointerId = null,
        n.touchId = null;
    const { params: o, touches: a, rtlTranslate: s, slidesGrid: u, enabled: d } = t;
    if (!d || !o.simulateTouch && r.pointerType === "mouse")
        return;
    if (n.allowTouchCallbacks && t.emit("touchEnd", r),
        n.allowTouchCallbacks = !1,
        !n.isTouched) {
        n.isMoved && o.grabCursor && t.setGrabCursor(!1),
            n.isMoved = !1,
            n.startMoving = !1;
        return
    }
    o.grabCursor && n.isMoved && n.isTouched && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!1);
    const p = el()
        , h = p - n.touchStartTime;
    if (t.allowClick) {
        const S = r.path || r.composedPath && r.composedPath();
        t.updateClickedSlide(S && S[0] || r.target, S),
            t.emit("tap click", r),
            h < 300 && p - n.lastClickTime < 300 && t.emit("doubleTap doubleClick", r)
    }
    if (n.lastClickTime = el(),
        cs(() => {
            t.destroyed || (t.allowClick = !0)
        }
        ),
        !n.isTouched || !n.isMoved || !t.swipeDirection || a.diff === 0 && !n.loopSwapReset || n.currentTranslate === n.startTranslate && !n.loopSwapReset) {
        n.isTouched = !1,
            n.isMoved = !1,
            n.startMoving = !1;
        return
    }
    n.isTouched = !1,
        n.isMoved = !1,
        n.startMoving = !1;
    let v;
    if (o.followFinger ? v = s ? t.translate : -t.translate : v = -n.currentTranslate,
        o.cssMode)
        return;
    if (o.freeMode && o.freeMode.enabled) {
        t.freeMode.onTouchEnd({
            currentPos: v
        });
        return
    }
    const y = v >= -t.maxTranslate() && !t.params.loop;
    let w = 0
        , O = t.slidesSizesGrid[0];
    for (let S = 0; S < u.length; S += S < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup) {
        const x = S < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
        typeof u[S + x] < "u" ? (y || v >= u[S] && v < u[S + x]) && (w = S,
            O = u[S + x] - u[S]) : (y || v >= u[S]) && (w = S,
                O = u[u.length - 1] - u[u.length - 2])
    }
    let m = null
        , c = null;
    o.rewind && (t.isBeginning ? c = o.virtual && o.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (m = 0));
    const f = (v - u[w]) / O
        , g = w < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
    if (h > o.longSwipesMs) {
        if (!o.longSwipes) {
            t.slideTo(t.activeIndex);
            return
        }
        t.swipeDirection === "next" && (f >= o.longSwipesRatio ? t.slideTo(o.rewind && t.isEnd ? m : w + g) : t.slideTo(w)),
            t.swipeDirection === "prev" && (f > 1 - o.longSwipesRatio ? t.slideTo(w + g) : c !== null && f < 0 && Math.abs(f) > o.longSwipesRatio ? t.slideTo(c) : t.slideTo(w))
    } else {
        if (!o.shortSwipes) {
            t.slideTo(t.activeIndex);
            return
        }
        t.navigation && (r.target === t.navigation.nextEl || r.target === t.navigation.prevEl) ? r.target === t.navigation.nextEl ? t.slideTo(w + g) : t.slideTo(w) : (t.swipeDirection === "next" && t.slideTo(m !== null ? m : w + g),
            t.swipeDirection === "prev" && t.slideTo(c !== null ? c : w))
    }
}
function Ku() {
    const e = this
        , { params: t, el: n } = e;
    if (n && n.offsetWidth === 0)
        return;
    t.breakpoints && e.setBreakpoint();
    const { allowSlideNext: r, allowSlidePrev: i, snapGrid: l } = e
        , o = e.virtual && e.params.virtual.enabled;
    e.allowSlideNext = !0,
        e.allowSlidePrev = !0,
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses();
    const a = o && t.loop;
    (t.slidesPerView === "auto" || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides && !a ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.params.loop && !o ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0),
        e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout),
            e.autoplay.resizeTimeout = setTimeout(() => {
                e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
            }
                , 500)),
        e.allowSlidePrev = i,
        e.allowSlideNext = r,
        e.params.watchOverflow && l !== e.snapGrid && e.checkOverflow()
}
function j0(e) {
    const t = this;
    t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation && t.animating && (e.stopPropagation(),
            e.stopImmediatePropagation())))
}
function D0() {
    const e = this
        , { wrapperEl: t, rtlTranslate: n, enabled: r } = e;
    if (!r)
        return;
    e.previousTranslate = e.translate,
        e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop,
        e.translate === 0 && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
    let i;
    const l = e.maxTranslate() - e.minTranslate();
    l === 0 ? i = 0 : i = (e.translate - e.minTranslate()) / l,
        i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1)
}
function R0(e) {
    const t = this;
    Pi(t, e.target),
        !(t.params.cssMode || t.params.slidesPerView !== "auto" && !t.params.autoHeight) && t.update()
}
function A0() {
    const e = this;
    e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = !0,
        e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"))
}
const Wf = (e, t) => {
    const n = wt()
        , { params: r, el: i, wrapperEl: l, device: o } = e
        , a = !!r.nested
        , s = t === "on" ? "addEventListener" : "removeEventListener"
        , u = t;
    n[s]("touchstart", e.onDocumentTouchStart, {
        passive: !1,
        capture: a
    }),
        i[s]("touchstart", e.onTouchStart, {
            passive: !1
        }),
        i[s]("pointerdown", e.onTouchStart, {
            passive: !1
        }),
        n[s]("touchmove", e.onTouchMove, {
            passive: !1,
            capture: a
        }),
        n[s]("pointermove", e.onTouchMove, {
            passive: !1,
            capture: a
        }),
        n[s]("touchend", e.onTouchEnd, {
            passive: !0
        }),
        n[s]("pointerup", e.onTouchEnd, {
            passive: !0
        }),
        n[s]("pointercancel", e.onTouchEnd, {
            passive: !0
        }),
        n[s]("touchcancel", e.onTouchEnd, {
            passive: !0
        }),
        n[s]("pointerout", e.onTouchEnd, {
            passive: !0
        }),
        n[s]("pointerleave", e.onTouchEnd, {
            passive: !0
        }),
        n[s]("contextmenu", e.onTouchEnd, {
            passive: !0
        }),
        (r.preventClicks || r.preventClicksPropagation) && i[s]("click", e.onClick, !0),
        r.cssMode && l[s]("scroll", e.onScroll),
        r.updateOnWindowResize ? e[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Ku, !0) : e[u]("observerUpdate", Ku, !0),
        i[s]("load", e.onLoad, {
            capture: !0
        })
}
    ;
function $0() {
    const e = this
        , { params: t } = e;
    e.onTouchStart = I0.bind(e),
        e.onTouchMove = N0.bind(e),
        e.onTouchEnd = b0.bind(e),
        e.onDocumentTouchStart = A0.bind(e),
        t.cssMode && (e.onScroll = D0.bind(e)),
        e.onClick = j0.bind(e),
        e.onLoad = R0.bind(e),
        Wf(e, "on")
}
function F0() {
    Wf(this, "off")
}
var H0 = {
    attachEvents: $0,
    detachEvents: F0
};
const Zu = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function B0() {
    const e = this
        , { realIndex: t, initialized: n, params: r, el: i } = e
        , l = r.breakpoints;
    if (!l || l && Object.keys(l).length === 0)
        return;
    const o = e.getBreakpoint(l, e.params.breakpointsBase, e.el);
    if (!o || e.currentBreakpoint === o)
        return;
    const s = (o in l ? l[o] : void 0) || e.originalParams
        , u = Zu(e, r)
        , d = Zu(e, s)
        , p = r.enabled;
    u && !d ? (i.classList.remove(`${r.containerModifierClass}grid`, `${r.containerModifierClass}grid-column`),
        e.emitContainerClasses()) : !u && d && (i.classList.add(`${r.containerModifierClass}grid`),
            (s.grid.fill && s.grid.fill === "column" || !s.grid.fill && r.grid.fill === "column") && i.classList.add(`${r.containerModifierClass}grid-column`),
            e.emitContainerClasses()),
        ["navigation", "pagination", "scrollbar"].forEach(m => {
            if (typeof s[m] > "u")
                return;
            const c = r[m] && r[m].enabled
                , f = s[m] && s[m].enabled;
            c && !f && e[m].disable(),
                !c && f && e[m].enable()
        }
        );
    const h = s.direction && s.direction !== r.direction
        , v = r.loop && (s.slidesPerView !== r.slidesPerView || h)
        , y = r.loop;
    h && n && e.changeDirection(),
        Ae(e.params, s);
    const w = e.params.enabled
        , O = e.params.loop;
    Object.assign(e, {
        allowTouchMove: e.params.allowTouchMove,
        allowSlideNext: e.params.allowSlideNext,
        allowSlidePrev: e.params.allowSlidePrev
    }),
        p && !w ? e.disable() : !p && w && e.enable(),
        e.currentBreakpoint = o,
        e.emit("_beforeBreakpoint", s),
        n && (v ? (e.loopDestroy(),
            e.loopCreate(t),
            e.updateSlides()) : !y && O ? (e.loopCreate(t),
                e.updateSlides()) : y && !O && e.loopDestroy()),
        e.emit("breakpoint", s)
}
function V0(e, t, n) {
    if (t === void 0 && (t = "window"),
        !e || t === "container" && !n)
        return;
    let r = !1;
    const i = We()
        , l = t === "window" ? i.innerHeight : n.clientHeight
        , o = Object.keys(e).map(a => {
            if (typeof a == "string" && a.indexOf("@") === 0) {
                const s = parseFloat(a.substr(1));
                return {
                    value: l * s,
                    point: a
                }
            }
            return {
                value: a,
                point: a
            }
        }
        );
    o.sort((a, s) => parseInt(a.value, 10) - parseInt(s.value, 10));
    for (let a = 0; a < o.length; a += 1) {
        const { point: s, value: u } = o[a];
        t === "window" ? i.matchMedia(`(min-width: ${u}px)`).matches && (r = s) : u <= n.clientWidth && (r = s)
    }
    return r || "max"
}
var W0 = {
    setBreakpoint: B0,
    getBreakpoint: V0
};
function G0(e, t) {
    const n = [];
    return e.forEach(r => {
        typeof r == "object" ? Object.keys(r).forEach(i => {
            r[i] && n.push(t + i)
        }
        ) : typeof r == "string" && n.push(t + r)
    }
    ),
        n
}
function U0() {
    const e = this
        , { classNames: t, params: n, rtl: r, el: i, device: l } = e
        , o = G0(["initialized", n.direction, {
            "free-mode": e.params.freeMode && n.freeMode.enabled
        }, {
                autoheight: n.autoHeight
            }, {
                rtl: r
            }, {
                grid: n.grid && n.grid.rows > 1
            }, {
                "grid-column": n.grid && n.grid.rows > 1 && n.grid.fill === "column"
            }, {
                android: l.android
            }, {
                ios: l.ios
            }, {
                "css-mode": n.cssMode
            }, {
                centered: n.cssMode && n.centeredSlides
            }, {
                "watch-progress": n.watchSlidesProgress
            }], n.containerModifierClass);
    t.push(...o),
        i.classList.add(...t),
        e.emitContainerClasses()
}
function Q0() {
    const e = this
        , { el: t, classNames: n } = e;
    t.classList.remove(...n),
        e.emitContainerClasses()
}
var Y0 = {
    addClasses: U0,
    removeClasses: Q0
};
function X0() {
    const e = this
        , { isLocked: t, params: n } = e
        , { slidesOffsetBefore: r } = n;
    if (r) {
        const i = e.slides.length - 1
            , l = e.slidesGrid[i] + e.slidesSizesGrid[i] + r * 2;
        e.isLocked = e.size > l
    } else
        e.isLocked = e.snapGrid.length === 1;
    n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
        n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
        t && t !== e.isLocked && (e.isEnd = !1),
        t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
}
var q0 = {
    checkOverflow: X0
}
    , ps = {
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
function K0(e, t) {
    return function (r) {
        r === void 0 && (r = {});
        const i = Object.keys(r)[0]
            , l = r[i];
        if (typeof l != "object" || l === null) {
            Ae(t, r);
            return
        }
        if (e[i] === !0 && (e[i] = {
            enabled: !0
        }),
            i === "navigation" && e[i] && e[i].enabled && !e[i].prevEl && !e[i].nextEl && (e[i].auto = !0),
            ["pagination", "scrollbar"].indexOf(i) >= 0 && e[i] && e[i].enabled && !e[i].el && (e[i].auto = !0),
            !(i in e && "enabled" in l)) {
            Ae(t, r);
            return
        }
        typeof e[i] == "object" && !("enabled" in e[i]) && (e[i].enabled = !0),
            e[i] || (e[i] = {
                enabled: !1
            }),
            Ae(t, r)
    }
}
const co = {
    eventsEmitter: Yg,
    update: l0,
    translate: d0,
    transition: h0,
    slide: T0,
    loop: P0,
    grabCursor: L0,
    events: H0,
    breakpoints: W0,
    checkOverflow: q0,
    classes: Y0
}
    , fo = {};
let ga = class pt {
    constructor() {
        let t, n;
        for (var r = arguments.length, i = new Array(r), l = 0; l < r; l++)
            i[l] = arguments[l];
        i.length === 1 && i[0].constructor && Object.prototype.toString.call(i[0]).slice(8, -1) === "Object" ? n = i[0] : [t, n] = i,
            n || (n = {}),
            n = Ae({}, n),
            t && !n.el && (n.el = t);
        const o = wt();
        if (n.el && typeof n.el == "string" && o.querySelectorAll(n.el).length > 1) {
            const d = [];
            return o.querySelectorAll(n.el).forEach(p => {
                const h = Ae({}, n, {
                    el: p
                });
                d.push(new pt(h))
            }
            ),
                d
        }
        const a = this;
        a.__swiper__ = !0,
            a.support = Bf(),
            a.device = Vg({
                userAgent: n.userAgent
            }),
            a.browser = Gg(),
            a.eventsListeners = {},
            a.eventsAnyListeners = [],
            a.modules = [...a.__modules__],
            n.modules && Array.isArray(n.modules) && a.modules.push(...n.modules);
        const s = {};
        a.modules.forEach(d => {
            d({
                params: n,
                swiper: a,
                extendParams: K0(n, s),
                on: a.on.bind(a),
                once: a.once.bind(a),
                off: a.off.bind(a),
                emit: a.emit.bind(a)
            })
        }
        );
        const u = Ae({}, ps, s);
        return a.params = Ae({}, u, fo, n),
            a.originalParams = Ae({}, a.params),
            a.passedParams = Ae({}, n),
            a.params && a.params.on && Object.keys(a.params.on).forEach(d => {
                a.on(d, a.params.on[d])
            }
            ),
            a.params && a.params.onAny && a.onAny(a.params.onAny),
            Object.assign(a, {
                enabled: a.params.enabled,
                el: t,
                classNames: [],
                slides: [],
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal() {
                    return a.params.direction === "horizontal"
                },
                isVertical() {
                    return a.params.direction === "vertical"
                },
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
                    return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
                },
                allowSlideNext: a.params.allowSlideNext,
                allowSlidePrev: a.params.allowSlidePrev,
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: a.params.focusableElements,
                    lastClickTime: 0,
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    startMoving: void 0,
                    pointerId: null,
                    touchId: null
                },
                allowClick: !0,
                allowTouchMove: a.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                },
                imagesToLoad: [],
                imagesLoaded: 0
            }),
            a.emit("_swiper"),
            a.params.init && a.init(),
            a
    }
    getDirectionLabel(t) {
        return this.isHorizontal() ? t : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
        }[t]
    }
    getSlideIndex(t) {
        const { slidesEl: n, params: r } = this
            , i = at(n, `.${r.slideClass}, swiper-slide`)
            , l = rl(i[0]);
        return rl(t) - l
    }
    getSlideIndexByData(t) {
        return this.getSlideIndex(this.slides.filter(n => n.getAttribute("data-swiper-slide-index") * 1 === t)[0])
    }
    recalcSlides() {
        const t = this
            , { slidesEl: n, params: r } = t;
        t.slides = at(n, `.${r.slideClass}, swiper-slide`)
    }
    enable() {
        const t = this;
        t.enabled || (t.enabled = !0,
            t.params.grabCursor && t.setGrabCursor(),
            t.emit("enable"))
    }
    disable() {
        const t = this;
        t.enabled && (t.enabled = !1,
            t.params.grabCursor && t.unsetGrabCursor(),
            t.emit("disable"))
    }
    setProgress(t, n) {
        const r = this;
        t = Math.min(Math.max(t, 0), 1);
        const i = r.minTranslate()
            , o = (r.maxTranslate() - i) * t + i;
        r.translateTo(o, typeof n > "u" ? 0 : n),
            r.updateActiveIndex(),
            r.updateSlidesClasses()
    }
    emitContainerClasses() {
        const t = this;
        if (!t.params._emitClasses || !t.el)
            return;
        const n = t.el.className.split(" ").filter(r => r.indexOf("swiper") === 0 || r.indexOf(t.params.containerModifierClass) === 0);
        t.emit("_containerClasses", n.join(" "))
    }
    getSlideClasses(t) {
        const n = this;
        return n.destroyed ? "" : t.className.split(" ").filter(r => r.indexOf("swiper-slide") === 0 || r.indexOf(n.params.slideClass) === 0).join(" ")
    }
    emitSlidesClasses() {
        const t = this;
        if (!t.params._emitClasses || !t.el)
            return;
        const n = [];
        t.slides.forEach(r => {
            const i = t.getSlideClasses(r);
            n.push({
                slideEl: r,
                classNames: i
            }),
                t.emit("_slideClass", r, i)
        }
        ),
            t.emit("_slideClasses", n)
    }
    slidesPerViewDynamic(t, n) {
        t === void 0 && (t = "current"),
            n === void 0 && (n = !1);
        const r = this
            , { params: i, slides: l, slidesGrid: o, slidesSizesGrid: a, size: s, activeIndex: u } = r;
        let d = 1;
        if (typeof i.slidesPerView == "number")
            return i.slidesPerView;
        if (i.centeredSlides) {
            let p = l[u] ? l[u].swiperSlideSize : 0, h;
            for (let v = u + 1; v < l.length; v += 1)
                l[v] && !h && (p += l[v].swiperSlideSize,
                    d += 1,
                    p > s && (h = !0));
            for (let v = u - 1; v >= 0; v -= 1)
                l[v] && !h && (p += l[v].swiperSlideSize,
                    d += 1,
                    p > s && (h = !0))
        } else if (t === "current")
            for (let p = u + 1; p < l.length; p += 1)
                (n ? o[p] + a[p] - o[u] < s : o[p] - o[u] < s) && (d += 1);
        else
            for (let p = u - 1; p >= 0; p -= 1)
                o[u] - o[p] < s && (d += 1);
        return d
    }
    update() {
        const t = this;
        if (!t || t.destroyed)
            return;
        const { snapGrid: n, params: r } = t;
        r.breakpoints && t.setBreakpoint(),
            [...t.el.querySelectorAll('[loading="lazy"]')].forEach(o => {
                o.complete && Pi(t, o)
            }
            ),
            t.updateSize(),
            t.updateSlides(),
            t.updateProgress(),
            t.updateSlidesClasses();
        function i() {
            const o = t.rtlTranslate ? t.translate * -1 : t.translate
                , a = Math.min(Math.max(o, t.maxTranslate()), t.minTranslate());
            t.setTranslate(a),
                t.updateActiveIndex(),
                t.updateSlidesClasses()
        }
        let l;
        if (r.freeMode && r.freeMode.enabled && !r.cssMode)
            i(),
                r.autoHeight && t.updateAutoHeight();
        else {
            if ((r.slidesPerView === "auto" || r.slidesPerView > 1) && t.isEnd && !r.centeredSlides) {
                const o = t.virtual && r.virtual.enabled ? t.virtual.slides : t.slides;
                l = t.slideTo(o.length - 1, 0, !1, !0)
            } else
                l = t.slideTo(t.activeIndex, 0, !1, !0);
            l || i()
        }
        r.watchOverflow && n !== t.snapGrid && t.checkOverflow(),
            t.emit("update")
    }
    changeDirection(t, n) {
        n === void 0 && (n = !0);
        const r = this
            , i = r.params.direction;
        return t || (t = i === "horizontal" ? "vertical" : "horizontal"),
            t === i || t !== "horizontal" && t !== "vertical" || (r.el.classList.remove(`${r.params.containerModifierClass}${i}`),
                r.el.classList.add(`${r.params.containerModifierClass}${t}`),
                r.emitContainerClasses(),
                r.params.direction = t,
                r.slides.forEach(l => {
                    t === "vertical" ? l.style.width = "" : l.style.height = ""
                }
                ),
                r.emit("changeDirection"),
                n && r.update()),
            r
    }
    changeLanguageDirection(t) {
        const n = this;
        n.rtl && t === "rtl" || !n.rtl && t === "ltr" || (n.rtl = t === "rtl",
            n.rtlTranslate = n.params.direction === "horizontal" && n.rtl,
            n.rtl ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`),
                n.el.dir = "rtl") : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`),
                    n.el.dir = "ltr"),
            n.update())
    }
    mount(t) {
        const n = this;
        if (n.mounted)
            return !0;
        let r = t || n.params.el;
        if (typeof r == "string" && (r = document.querySelector(r)),
            !r)
            return !1;
        r.swiper = n,
            r.parentNode && r.parentNode.host && r.parentNode.host.nodeName === "SWIPER-CONTAINER" && (n.isElement = !0);
        const i = () => `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let o = (() => r && r.shadowRoot && r.shadowRoot.querySelector ? r.shadowRoot.querySelector(i()) : at(r, i())[0])();
        return !o && n.params.createElements && (o = nl("div", n.params.wrapperClass),
            r.append(o),
            at(r, `.${n.params.slideClass}`).forEach(a => {
                o.append(a)
            }
            )),
            Object.assign(n, {
                el: r,
                wrapperEl: o,
                slidesEl: n.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : o,
                hostEl: n.isElement ? r.parentNode.host : r,
                mounted: !0,
                rtl: r.dir.toLowerCase() === "rtl" || Rt(r, "direction") === "rtl",
                rtlTranslate: n.params.direction === "horizontal" && (r.dir.toLowerCase() === "rtl" || Rt(r, "direction") === "rtl"),
                wrongRTL: Rt(o, "display") === "-webkit-box"
            }),
            !0
    }
    init(t) {
        const n = this;
        if (n.initialized || n.mount(t) === !1)
            return n;
        n.emit("beforeInit"),
            n.params.breakpoints && n.setBreakpoint(),
            n.addClasses(),
            n.updateSize(),
            n.updateSlides(),
            n.params.watchOverflow && n.checkOverflow(),
            n.params.grabCursor && n.enabled && n.setGrabCursor(),
            n.params.loop && n.virtual && n.params.virtual.enabled ? n.slideTo(n.params.initialSlide + n.virtual.slidesBefore, 0, n.params.runCallbacksOnInit, !1, !0) : n.slideTo(n.params.initialSlide, 0, n.params.runCallbacksOnInit, !1, !0),
            n.params.loop && n.loopCreate(),
            n.attachEvents();
        const i = [...n.el.querySelectorAll('[loading="lazy"]')];
        return n.isElement && i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),
            i.forEach(l => {
                l.complete ? Pi(n, l) : l.addEventListener("load", o => {
                    Pi(n, o.target)
                }
                )
            }
            ),
            fs(n),
            n.initialized = !0,
            fs(n),
            n.emit("init"),
            n.emit("afterInit"),
            n
    }
    destroy(t, n) {
        t === void 0 && (t = !0),
            n === void 0 && (n = !0);
        const r = this
            , { params: i, el: l, wrapperEl: o, slides: a } = r;
        return typeof r.params > "u" || r.destroyed || (r.emit("beforeDestroy"),
            r.initialized = !1,
            r.detachEvents(),
            i.loop && r.loopDestroy(),
            n && (r.removeClasses(),
                l.removeAttribute("style"),
                o.removeAttribute("style"),
                a && a.length && a.forEach(s => {
                    s.classList.remove(i.slideVisibleClass, i.slideFullyVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass),
                        s.removeAttribute("style"),
                        s.removeAttribute("data-swiper-slide-index")
                }
                )),
            r.emit("destroy"),
            Object.keys(r.eventsListeners).forEach(s => {
                r.off(s)
            }
            ),
            t !== !1 && (r.el.swiper = null,
                jg(r)),
            r.destroyed = !0),
            null
    }
    static extendDefaults(t) {
        Ae(fo, t)
    }
    static get extendedDefaults() {
        return fo
    }
    static get defaults() {
        return ps
    }
    static installModule(t) {
        pt.prototype.__modules__ || (pt.prototype.__modules__ = []);
        const n = pt.prototype.__modules__;
        typeof t == "function" && n.indexOf(t) < 0 && n.push(t)
    }
    static use(t) {
        return Array.isArray(t) ? (t.forEach(n => pt.installModule(n)),
            pt) : (pt.installModule(t),
                pt)
    }
}
    ;
Object.keys(co).forEach(e => {
    Object.keys(co[e]).forEach(t => {
        ga.prototype[t] = co[e][t]
    }
    )
}
);
ga.use([Ug, Qg]);
const Gf = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "breakpointsBase", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopAdditionalSlides", "loopAddBlankSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideFullyVisibleClass", "slideNextClass", "slidePrevClass", "slideBlankClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];
function fn(e) {
    return typeof e == "object" && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object" && !e.__swiper__
}
function bn(e, t) {
    const n = ["__proto__", "constructor", "prototype"];
    Object.keys(t).filter(r => n.indexOf(r) < 0).forEach(r => {
        typeof e[r] > "u" ? e[r] = t[r] : fn(t[r]) && fn(e[r]) && Object.keys(t[r]).length > 0 ? t[r].__swiper__ ? e[r] = t[r] : bn(e[r], t[r]) : e[r] = t[r]
    }
    )
}
function Uf(e) {
    return e === void 0 && (e = {}),
        e.navigation && typeof e.navigation.nextEl > "u" && typeof e.navigation.prevEl > "u"
}
function Qf(e) {
    return e === void 0 && (e = {}),
        e.pagination && typeof e.pagination.el > "u"
}
function Yf(e) {
    return e === void 0 && (e = {}),
        e.scrollbar && typeof e.scrollbar.el > "u"
}
function Xf(e) {
    e === void 0 && (e = "");
    const t = e.split(" ").map(r => r.trim()).filter(r => !!r)
        , n = [];
    return t.forEach(r => {
        n.indexOf(r) < 0 && n.push(r)
    }
    ),
        n.join(" ")
}
function Z0(e) {
    return e === void 0 && (e = ""),
        e ? e.includes("swiper-wrapper") ? e : `swiper-wrapper ${e}` : "swiper-wrapper"
}
function J0(e) {
    let { swiper: t, slides: n, passedParams: r, changedParams: i, nextEl: l, prevEl: o, scrollbarEl: a, paginationEl: s } = e;
    const u = i.filter(C => C !== "children" && C !== "direction" && C !== "wrapperClass")
        , { params: d, pagination: p, navigation: h, scrollbar: v, virtual: y, thumbs: w } = t;
    let O, m, c, f, g, S, x, M;
    i.includes("thumbs") && r.thumbs && r.thumbs.swiper && d.thumbs && !d.thumbs.swiper && (O = !0),
        i.includes("controller") && r.controller && r.controller.control && d.controller && !d.controller.control && (m = !0),
        i.includes("pagination") && r.pagination && (r.pagination.el || s) && (d.pagination || d.pagination === !1) && p && !p.el && (c = !0),
        i.includes("scrollbar") && r.scrollbar && (r.scrollbar.el || a) && (d.scrollbar || d.scrollbar === !1) && v && !v.el && (f = !0),
        i.includes("navigation") && r.navigation && (r.navigation.prevEl || o) && (r.navigation.nextEl || l) && (d.navigation || d.navigation === !1) && h && !h.prevEl && !h.nextEl && (g = !0);
    const k = C => {
        t[C] && (t[C].destroy(),
            C === "navigation" ? (t.isElement && (t[C].prevEl.remove(),
                t[C].nextEl.remove()),
                d[C].prevEl = void 0,
                d[C].nextEl = void 0,
                t[C].prevEl = void 0,
                t[C].nextEl = void 0) : (t.isElement && t[C].el.remove(),
                    d[C].el = void 0,
                    t[C].el = void 0))
    }
        ;
    i.includes("loop") && t.isElement && (d.loop && !r.loop ? S = !0 : !d.loop && r.loop ? x = !0 : M = !0),
        u.forEach(C => {
            if (fn(d[C]) && fn(r[C]))
                Object.assign(d[C], r[C]),
                    (C === "navigation" || C === "pagination" || C === "scrollbar") && "enabled" in r[C] && !r[C].enabled && k(C);
            else {
                const T = r[C];
                (T === !0 || T === !1) && (C === "navigation" || C === "pagination" || C === "scrollbar") ? T === !1 && k(C) : d[C] = r[C]
            }
        }
        ),
        u.includes("controller") && !m && t.controller && t.controller.control && d.controller && d.controller.control && (t.controller.control = d.controller.control),
        i.includes("children") && n && y && d.virtual.enabled ? (y.slides = n,
            y.update(!0)) : i.includes("virtual") && y && d.virtual.enabled && (n && (y.slides = n),
                y.update(!0)),
        i.includes("children") && n && d.loop && (M = !0),
        O && w.init() && w.update(!0),
        m && (t.controller.control = d.controller.control),
        c && (t.isElement && (!s || typeof s == "string") && (s = document.createElement("div"),
            s.classList.add("swiper-pagination"),
            s.part.add("pagination"),
            t.el.appendChild(s)),
            s && (d.pagination.el = s),
            p.init(),
            p.render(),
            p.update()),
        f && (t.isElement && (!a || typeof a == "string") && (a = document.createElement("div"),
            a.classList.add("swiper-scrollbar"),
            a.part.add("scrollbar"),
            t.el.appendChild(a)),
            a && (d.scrollbar.el = a),
            v.init(),
            v.updateSize(),
            v.setTranslate()),
        g && (t.isElement && ((!l || typeof l == "string") && (l = document.createElement("div"),
            l.classList.add("swiper-button-next"),
            l.innerHTML = t.hostEl.constructor.nextButtonSvg,
            l.part.add("button-next"),
            t.el.appendChild(l)),
            (!o || typeof o == "string") && (o = document.createElement("div"),
                o.classList.add("swiper-button-prev"),
                o.innerHTML = t.hostEl.constructor.prevButtonSvg,
                o.part.add("button-prev"),
                t.el.appendChild(o))),
            l && (d.navigation.nextEl = l),
            o && (d.navigation.prevEl = o),
            h.init(),
            h.update()),
        i.includes("allowSlideNext") && (t.allowSlideNext = r.allowSlideNext),
        i.includes("allowSlidePrev") && (t.allowSlidePrev = r.allowSlidePrev),
        i.includes("direction") && t.changeDirection(r.direction, !1),
        (S || M) && t.loopDestroy(),
        (x || M) && t.loopCreate(),
        t.update()
}
function ey(e, t) {
    e === void 0 && (e = {}),
        t === void 0 && (t = !0);
    const n = {
        on: {}
    }
        , r = {}
        , i = {};
    bn(n, ps),
        n._emitClasses = !0,
        n.init = !1;
    const l = {}
        , o = Gf.map(s => s.replace(/_/, ""))
        , a = Object.assign({}, e);
    return Object.keys(a).forEach(s => {
        typeof e[s] > "u" || (o.indexOf(s) >= 0 ? fn(e[s]) ? (n[s] = {},
            i[s] = {},
            bn(n[s], e[s]),
            bn(i[s], e[s])) : (n[s] = e[s],
                i[s] = e[s]) : s.search(/on[A-Z]/) === 0 && typeof e[s] == "function" ? t ? r[`${s[2].toLowerCase()}${s.substr(3)}`] = e[s] : n.on[`${s[2].toLowerCase()}${s.substr(3)}`] = e[s] : l[s] = e[s])
    }
    ),
        ["navigation", "pagination", "scrollbar"].forEach(s => {
            n[s] === !0 && (n[s] = {}),
                n[s] === !1 && delete n[s]
        }
        ),
    {
        params: n,
        passedParams: i,
        rest: l,
        events: r
    }
}
function ty(e, t) {
    let { el: n, nextEl: r, prevEl: i, paginationEl: l, scrollbarEl: o, swiper: a } = e;
    Uf(t) && r && i && (a.params.navigation.nextEl = r,
        a.originalParams.navigation.nextEl = r,
        a.params.navigation.prevEl = i,
        a.originalParams.navigation.prevEl = i),
        Qf(t) && l && (a.params.pagination.el = l,
            a.originalParams.pagination.el = l),
        Yf(t) && o && (a.params.scrollbar.el = o,
            a.originalParams.scrollbar.el = o),
        a.init(n)
}
function ny(e, t, n, r, i) {
    const l = [];
    if (!t)
        return l;
    const o = s => {
        l.indexOf(s) < 0 && l.push(s)
    }
        ;
    if (n && r) {
        const s = r.map(i)
            , u = n.map(i);
        s.join("") !== u.join("") && o("children"),
            r.length !== n.length && o("children")
    }
    return Gf.filter(s => s[0] === "_").map(s => s.replace(/_/, "")).forEach(s => {
        if (s in e && s in t)
            if (fn(e[s]) && fn(t[s])) {
                const u = Object.keys(e[s])
                    , d = Object.keys(t[s]);
                u.length !== d.length ? o(s) : (u.forEach(p => {
                    e[s][p] !== t[s][p] && o(s)
                }
                ),
                    d.forEach(p => {
                        e[s][p] !== t[s][p] && o(s)
                    }
                    ))
            } else
                e[s] !== t[s] && o(s)
    }
    ),
        l
}
const ry = e => {
    !e || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses(),
        e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
}
    ;
function il() {
    return il = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
        ,
        il.apply(this, arguments)
}
function qf(e) {
    return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
}
function Kf(e) {
    const t = [];
    return U.Children.toArray(e).forEach(n => {
        qf(n) ? t.push(n) : n.props && n.props.children && Kf(n.props.children).forEach(r => t.push(r))
    }
    ),
        t
}
function iy(e) {
    const t = []
        , n = {
            "container-start": [],
            "container-end": [],
            "wrapper-start": [],
            "wrapper-end": []
        };
    return U.Children.toArray(e).forEach(r => {
        if (qf(r))
            t.push(r);
        else if (r.props && r.props.slot && n[r.props.slot])
            n[r.props.slot].push(r);
        else if (r.props && r.props.children) {
            const i = Kf(r.props.children);
            i.length > 0 ? i.forEach(l => t.push(l)) : n["container-end"].push(r)
        } else
            n["container-end"].push(r)
    }
    ),
    {
        slides: t,
        slots: n
    }
}
function ly(e, t, n) {
    if (!n)
        return null;
    const r = d => {
        let p = d;
        return d < 0 ? p = t.length + d : p >= t.length && (p = p - t.length),
            p
    }
        , i = e.isHorizontal() ? {
            [e.rtlTranslate ? "right" : "left"]: `${n.offset}px`
        } : {
            top: `${n.offset}px`
        }
        , { from: l, to: o } = n
        , a = e.params.loop ? -t.length : 0
        , s = e.params.loop ? t.length * 2 : t.length
        , u = [];
    for (let d = a; d < s; d += 1)
        d >= l && d <= o && u.push(t[r(d)]);
    return u.map((d, p) => U.cloneElement(d, {
        swiper: e,
        style: i,
        key: `slide-${p}`
    }))
}
function hr(e, t) {
    return typeof window > "u" ? H.useEffect(e, t) : H.useLayoutEffect(e, t)
}
const Ju = H.createContext(null)
    , oy = H.createContext(null)
    , Zf = H.forwardRef(function (e, t) {
        let { className: n, tag: r = "div", wrapperTag: i = "div", children: l, onSwiper: o, ...a } = e === void 0 ? {} : e
            , s = !1;
        const [u, d] = H.useState("swiper")
            , [p, h] = H.useState(null)
            , [v, y] = H.useState(!1)
            , w = H.useRef(!1)
            , O = H.useRef(null)
            , m = H.useRef(null)
            , c = H.useRef(null)
            , f = H.useRef(null)
            , g = H.useRef(null)
            , S = H.useRef(null)
            , x = H.useRef(null)
            , M = H.useRef(null)
            , { params: k, passedParams: C, rest: T, events: E } = ey(a)
            , { slides: _, slots: P } = iy(l)
            , I = () => {
                y(!v)
            }
            ;
        Object.assign(k.on, {
            _containerClasses(N, j) {
                d(j)
            }
        });
        const R = () => {
            Object.assign(k.on, E),
                s = !0;
            const N = {
                ...k
            };
            if (delete N.wrapperClass,
                m.current = new ga(N),
                m.current.virtual && m.current.params.virtual.enabled) {
                m.current.virtual.slides = _;
                const j = {
                    cache: !1,
                    slides: _,
                    renderExternal: h,
                    renderExternalUpdate: !1
                };
                bn(m.current.params.virtual, j),
                    bn(m.current.originalParams.virtual, j)
            }
        }
            ;
        O.current || R(),
            m.current && m.current.on("_beforeBreakpoint", I);
        const $ = () => {
            s || !E || !m.current || Object.keys(E).forEach(N => {
                m.current.on(N, E[N])
            }
            )
        }
            , pe = () => {
                !E || !m.current || Object.keys(E).forEach(N => {
                    m.current.off(N, E[N])
                }
                )
            }
            ;
        H.useEffect(() => () => {
            m.current && m.current.off("_beforeBreakpoint", I)
        }
        ),
            H.useEffect(() => {
                !w.current && m.current && (m.current.emitSlidesClasses(),
                    w.current = !0)
            }
            ),
            hr(() => {
                if (t && (t.current = O.current),
                    !!O.current)
                    return m.current.destroyed && R(),
                        ty({
                            el: O.current,
                            nextEl: g.current,
                            prevEl: S.current,
                            paginationEl: x.current,
                            scrollbarEl: M.current,
                            swiper: m.current
                        }, k),
                        o && o(m.current),
                        () => {
                            m.current && !m.current.destroyed && m.current.destroy(!0, !1)
                        }
            }
                , []),
            hr(() => {
                $();
                const N = ny(C, c.current, _, f.current, j => j.key);
                return c.current = C,
                    f.current = _,
                    N.length && m.current && !m.current.destroyed && J0({
                        swiper: m.current,
                        slides: _,
                        passedParams: C,
                        changedParams: N,
                        nextEl: g.current,
                        prevEl: S.current,
                        scrollbarEl: M.current,
                        paginationEl: x.current
                    }),
                    () => {
                        pe()
                    }
            }
            ),
            hr(() => {
                ry(m.current)
            }
                , [p]);
        function L() {
            return k.virtual ? ly(m.current, _, p) : _.map((N, j) => U.cloneElement(N, {
                swiper: m.current,
                swiperSlideIndex: j
            }))
        }
        return U.createElement(r, il({
            ref: O,
            className: Xf(`${u}${n ? ` ${n}` : ""}`)
        }, T), U.createElement(oy.Provider, {
            value: m.current
        }, P["container-start"], U.createElement(i, {
            className: Z0(k.wrapperClass)
        }, P["wrapper-start"], L(), P["wrapper-end"]), Uf(k) && U.createElement(U.Fragment, null, U.createElement("div", {
            ref: S,
            className: "swiper-button-prev"
        }), U.createElement("div", {
            ref: g,
            className: "swiper-button-next"
        })), Yf(k) && U.createElement("div", {
            ref: M,
            className: "swiper-scrollbar"
        }), Qf(k) && U.createElement("div", {
            ref: x,
            className: "swiper-pagination"
        }), P["container-end"]))
    });
Zf.displayName = "Swiper";
const Oi = H.forwardRef(function (e, t) {
    let { tag: n = "div", children: r, className: i = "", swiper: l, zoom: o, lazy: a, virtualIndex: s, swiperSlideIndex: u, ...d } = e === void 0 ? {} : e;
    const p = H.useRef(null)
        , [h, v] = H.useState("swiper-slide")
        , [y, w] = H.useState(!1);
    function O(g, S, x) {
        S === p.current && v(x)
    }
    hr(() => {
        if (typeof u < "u" && (p.current.swiperSlideIndex = u),
            t && (t.current = p.current),
            !(!p.current || !l)) {
            if (l.destroyed) {
                h !== "swiper-slide" && v("swiper-slide");
                return
            }
            return l.on("_slideClass", O),
                () => {
                    l && l.off("_slideClass", O)
                }
        }
    }
    ),
        hr(() => {
            l && p.current && !l.destroyed && v(l.getSlideClasses(p.current))
        }
            , [l]);
    const m = {
        isActive: h.indexOf("swiper-slide-active") >= 0,
        isVisible: h.indexOf("swiper-slide-visible") >= 0,
        isPrev: h.indexOf("swiper-slide-prev") >= 0,
        isNext: h.indexOf("swiper-slide-next") >= 0
    }
        , c = () => typeof r == "function" ? r(m) : r
        , f = () => {
            w(!0)
        }
        ;
    return U.createElement(n, il({
        ref: p,
        className: Xf(`${h}${i ? ` ${i}` : ""}`),
        "data-swiper-slide-index": s,
        onLoad: f
    }, d), o && U.createElement(Ju.Provider, {
        value: m
    }, U.createElement("div", {
        className: "swiper-zoom-container",
        "data-swiper-zoom": typeof o == "number" ? o : void 0
    }, c(), a && !y && U.createElement("div", {
        className: "swiper-lazy-preloader"
    }))), !o && U.createElement(Ju.Provider, {
        value: m
    }, c(), a && !y && U.createElement("div", {
        className: "swiper-lazy-preloader"
    })))
});
Oi.displayName = "SwiperSlide";
function sy(e, t, n, r) {
    return e.params.createElements && Object.keys(r).forEach(i => {
        if (!n[i] && n.auto === !0) {
            let l = at(e.el, `.${r[i]}`)[0];
            l || (l = nl("div", r[i]),
                l.className = r[i],
                e.el.append(l)),
                n[i] = l,
                t[i] = l
        }
    }
    ),
        n
}
function er(e) {
    return e === void 0 && (e = ""),
        `.${e.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`
}
function ay(e) {
    let { swiper: t, extendParams: n, on: r, emit: i } = e;
    const l = "swiper-pagination";
    n({
        pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: c => c,
            formatFractionTotal: c => c,
            bulletClass: `${l}-bullet`,
            bulletActiveClass: `${l}-bullet-active`,
            modifierClass: `${l}-`,
            currentClass: `${l}-current`,
            totalClass: `${l}-total`,
            hiddenClass: `${l}-hidden`,
            progressbarFillClass: `${l}-progressbar-fill`,
            progressbarOppositeClass: `${l}-progressbar-opposite`,
            clickableClass: `${l}-clickable`,
            lockClass: `${l}-lock`,
            horizontalClass: `${l}-horizontal`,
            verticalClass: `${l}-vertical`,
            paginationDisabledClass: `${l}-disabled`
        }
    }),
        t.pagination = {
            el: null,
            bullets: []
        };
    let o, a = 0;
    const s = c => (Array.isArray(c) ? c : [c]).filter(f => !!f);
    function u() {
        return !t.params.pagination.el || !t.pagination.el || Array.isArray(t.pagination.el) && t.pagination.el.length === 0
    }
    function d(c, f) {
        const { bulletActiveClass: g } = t.params.pagination;
        c && (c = c[`${f === "prev" ? "previous" : "next"}ElementSibling`],
            c && (c.classList.add(`${g}-${f}`),
                c = c[`${f === "prev" ? "previous" : "next"}ElementSibling`],
                c && c.classList.add(`${g}-${f}-${f}`)))
    }
    function p(c) {
        const f = c.target.closest(er(t.params.pagination.bulletClass));
        if (!f)
            return;
        c.preventDefault();
        const g = rl(f) * t.params.slidesPerGroup;
        if (t.params.loop) {
            if (t.realIndex === g)
                return;
            t.slideToLoop(g)
        } else
            t.slideTo(g)
    }
    function h() {
        const c = t.rtl
            , f = t.params.pagination;
        if (u())
            return;
        let g = t.pagination.el;
        g = s(g);
        let S, x;
        const M = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length
            , k = t.params.loop ? Math.ceil(M / t.params.slidesPerGroup) : t.snapGrid.length;
        if (t.params.loop ? (x = t.previousRealIndex || 0,
            S = t.params.slidesPerGroup > 1 ? Math.floor(t.realIndex / t.params.slidesPerGroup) : t.realIndex) : typeof t.snapIndex < "u" ? (S = t.snapIndex,
                x = t.previousSnapIndex) : (x = t.previousIndex || 0,
                    S = t.activeIndex || 0),
            f.type === "bullets" && t.pagination.bullets && t.pagination.bullets.length > 0) {
            const C = t.pagination.bullets;
            let T, E, _;
            if (f.dynamicBullets && (o = ds(C[0], t.isHorizontal() ? "width" : "height", !0),
                g.forEach(P => {
                    P.style[t.isHorizontal() ? "width" : "height"] = `${o * (f.dynamicMainBullets + 4)}px`
                }
                ),
                f.dynamicMainBullets > 1 && x !== void 0 && (a += S - (x || 0),
                    a > f.dynamicMainBullets - 1 ? a = f.dynamicMainBullets - 1 : a < 0 && (a = 0)),
                T = Math.max(S - a, 0),
                E = T + (Math.min(C.length, f.dynamicMainBullets) - 1),
                _ = (E + T) / 2),
                C.forEach(P => {
                    const I = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(R => `${f.bulletActiveClass}${R}`)].map(R => typeof R == "string" && R.includes(" ") ? R.split(" ") : R).flat();
                    P.classList.remove(...I)
                }
                ),
                g.length > 1)
                C.forEach(P => {
                    const I = rl(P);
                    I === S ? P.classList.add(...f.bulletActiveClass.split(" ")) : t.isElement && P.setAttribute("part", "bullet"),
                        f.dynamicBullets && (I >= T && I <= E && P.classList.add(...`${f.bulletActiveClass}-main`.split(" ")),
                            I === T && d(P, "prev"),
                            I === E && d(P, "next"))
                }
                );
            else {
                const P = C[S];
                if (P && P.classList.add(...f.bulletActiveClass.split(" ")),
                    t.isElement && C.forEach((I, R) => {
                        I.setAttribute("part", R === S ? "bullet-active" : "bullet")
                    }
                    ),
                    f.dynamicBullets) {
                    const I = C[T]
                        , R = C[E];
                    for (let $ = T; $ <= E; $ += 1)
                        C[$] && C[$].classList.add(...`${f.bulletActiveClass}-main`.split(" "));
                    d(I, "prev"),
                        d(R, "next")
                }
            }
            if (f.dynamicBullets) {
                const P = Math.min(C.length, f.dynamicMainBullets + 4)
                    , I = (o * P - o) / 2 - _ * o
                    , R = c ? "right" : "left";
                C.forEach($ => {
                    $.style[t.isHorizontal() ? R : "top"] = `${I}px`
                }
                )
            }
        }
        g.forEach((C, T) => {
            if (f.type === "fraction" && (C.querySelectorAll(er(f.currentClass)).forEach(E => {
                E.textContent = f.formatFractionCurrent(S + 1)
            }
            ),
                C.querySelectorAll(er(f.totalClass)).forEach(E => {
                    E.textContent = f.formatFractionTotal(k)
                }
                )),
                f.type === "progressbar") {
                let E;
                f.progressbarOpposite ? E = t.isHorizontal() ? "vertical" : "horizontal" : E = t.isHorizontal() ? "horizontal" : "vertical";
                const _ = (S + 1) / k;
                let P = 1
                    , I = 1;
                E === "horizontal" ? P = _ : I = _,
                    C.querySelectorAll(er(f.progressbarFillClass)).forEach(R => {
                        R.style.transform = `translate3d(0,0,0) scaleX(${P}) scaleY(${I})`,
                            R.style.transitionDuration = `${t.params.speed}ms`
                    }
                    )
            }
            f.type === "custom" && f.renderCustom ? (C.innerHTML = f.renderCustom(t, S + 1, k),
                T === 0 && i("paginationRender", C)) : (T === 0 && i("paginationRender", C),
                    i("paginationUpdate", C)),
                t.params.watchOverflow && t.enabled && C.classList[t.isLocked ? "add" : "remove"](f.lockClass)
        }
        )
    }
    function v() {
        const c = t.params.pagination;
        if (u())
            return;
        const f = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.grid && t.params.grid.rows > 1 ? t.slides.length / Math.ceil(t.params.grid.rows) : t.slides.length;
        let g = t.pagination.el;
        g = s(g);
        let S = "";
        if (c.type === "bullets") {
            let x = t.params.loop ? Math.ceil(f / t.params.slidesPerGroup) : t.snapGrid.length;
            t.params.freeMode && t.params.freeMode.enabled && x > f && (x = f);
            for (let M = 0; M < x; M += 1)
                c.renderBullet ? S += c.renderBullet.call(t, M, c.bulletClass) : S += `<${c.bulletElement} ${t.isElement ? 'part="bullet"' : ""} class="${c.bulletClass}"></${c.bulletElement}>`
        }
        c.type === "fraction" && (c.renderFraction ? S = c.renderFraction.call(t, c.currentClass, c.totalClass) : S = `<span class="${c.currentClass}"></span> / <span class="${c.totalClass}"></span>`),
            c.type === "progressbar" && (c.renderProgressbar ? S = c.renderProgressbar.call(t, c.progressbarFillClass) : S = `<span class="${c.progressbarFillClass}"></span>`),
            t.pagination.bullets = [],
            g.forEach(x => {
                c.type !== "custom" && (x.innerHTML = S || ""),
                    c.type === "bullets" && t.pagination.bullets.push(...x.querySelectorAll(er(c.bulletClass)))
            }
            ),
            c.type !== "custom" && i("paginationRender", g[0])
    }
    function y() {
        t.params.pagination = sy(t, t.originalParams.pagination, t.params.pagination, {
            el: "swiper-pagination"
        });
        const c = t.params.pagination;
        if (!c.el)
            return;
        let f;
        typeof c.el == "string" && t.isElement && (f = t.el.querySelector(c.el)),
            !f && typeof c.el == "string" && (f = [...document.querySelectorAll(c.el)]),
            f || (f = c.el),
            !(!f || f.length === 0) && (t.params.uniqueNavElements && typeof c.el == "string" && Array.isArray(f) && f.length > 1 && (f = [...t.el.querySelectorAll(c.el)],
                f.length > 1 && (f = f.filter(g => Hf(g, ".swiper")[0] === t.el)[0])),
                Array.isArray(f) && f.length === 1 && (f = f[0]),
                Object.assign(t.pagination, {
                    el: f
                }),
                f = s(f),
                f.forEach(g => {
                    c.type === "bullets" && c.clickable && g.classList.add(...(c.clickableClass || "").split(" ")),
                        g.classList.add(c.modifierClass + c.type),
                        g.classList.add(t.isHorizontal() ? c.horizontalClass : c.verticalClass),
                        c.type === "bullets" && c.dynamicBullets && (g.classList.add(`${c.modifierClass}${c.type}-dynamic`),
                            a = 0,
                            c.dynamicMainBullets < 1 && (c.dynamicMainBullets = 1)),
                        c.type === "progressbar" && c.progressbarOpposite && g.classList.add(c.progressbarOppositeClass),
                        c.clickable && g.addEventListener("click", p),
                        t.enabled || g.classList.add(c.lockClass)
                }
                ))
    }
    function w() {
        const c = t.params.pagination;
        if (u())
            return;
        let f = t.pagination.el;
        f && (f = s(f),
            f.forEach(g => {
                g.classList.remove(c.hiddenClass),
                    g.classList.remove(c.modifierClass + c.type),
                    g.classList.remove(t.isHorizontal() ? c.horizontalClass : c.verticalClass),
                    c.clickable && (g.classList.remove(...(c.clickableClass || "").split(" ")),
                        g.removeEventListener("click", p))
            }
            )),
            t.pagination.bullets && t.pagination.bullets.forEach(g => g.classList.remove(...c.bulletActiveClass.split(" ")))
    }
    r("changeDirection", () => {
        if (!t.pagination || !t.pagination.el)
            return;
        const c = t.params.pagination;
        let { el: f } = t.pagination;
        f = s(f),
            f.forEach(g => {
                g.classList.remove(c.horizontalClass, c.verticalClass),
                    g.classList.add(t.isHorizontal() ? c.horizontalClass : c.verticalClass)
            }
            )
    }
    ),
        r("init", () => {
            t.params.pagination.enabled === !1 ? m() : (y(),
                v(),
                h())
        }
        ),
        r("activeIndexChange", () => {
            typeof t.snapIndex > "u" && h()
        }
        ),
        r("snapIndexChange", () => {
            h()
        }
        ),
        r("snapGridLengthChange", () => {
            v(),
                h()
        }
        ),
        r("destroy", () => {
            w()
        }
        ),
        r("enable disable", () => {
            let { el: c } = t.pagination;
            c && (c = s(c),
                c.forEach(f => f.classList[t.enabled ? "remove" : "add"](t.params.pagination.lockClass)))
        }
        ),
        r("lock unlock", () => {
            h()
        }
        ),
        r("click", (c, f) => {
            const g = f.target
                , S = s(t.pagination.el);
            if (t.params.pagination.el && t.params.pagination.hideOnClick && S && S.length > 0 && !g.classList.contains(t.params.pagination.bulletClass)) {
                if (t.navigation && (t.navigation.nextEl && g === t.navigation.nextEl || t.navigation.prevEl && g === t.navigation.prevEl))
                    return;
                const x = S[0].classList.contains(t.params.pagination.hiddenClass);
                i(x === !0 ? "paginationShow" : "paginationHide"),
                    S.forEach(M => M.classList.toggle(t.params.pagination.hiddenClass))
            }
        }
        );
    const O = () => {
        t.el.classList.remove(t.params.pagination.paginationDisabledClass);
        let { el: c } = t.pagination;
        c && (c = s(c),
            c.forEach(f => f.classList.remove(t.params.pagination.paginationDisabledClass))),
            y(),
            v(),
            h()
    }
        , m = () => {
            t.el.classList.add(t.params.pagination.paginationDisabledClass);
            let { el: c } = t.pagination;
            c && (c = s(c),
                c.forEach(f => f.classList.add(t.params.pagination.paginationDisabledClass))),
                w()
        }
        ;
    Object.assign(t.pagination, {
        enable: O,
        disable: m,
        render: v,
        update: h,
        init: y,
        destroy: w
    })
}
function uy(e) {
    let { swiper: t, extendParams: n, on: r, emit: i, params: l } = e;
    t.autoplay = {
        running: !1,
        paused: !1,
        timeLeft: 0
    },
        n({
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
    let o, a, s = l && l.autoplay ? l.autoplay.delay : 3e3, u = l && l.autoplay ? l.autoplay.delay : 3e3, d, p = new Date().getTime(), h, v, y, w, O, m, c;
    function f(L) {
        !t || t.destroyed || !t.wrapperEl || L.target === t.wrapperEl && (t.wrapperEl.removeEventListener("transitionend", f),
            !c && T())
    }
    const g = () => {
        if (t.destroyed || !t.autoplay.running)
            return;
        t.autoplay.paused ? h = !0 : h && (u = d,
            h = !1);
        const L = t.autoplay.paused ? d : p + u - new Date().getTime();
        t.autoplay.timeLeft = L,
            i("autoplayTimeLeft", L, L / s),
            a = requestAnimationFrame(() => {
                g()
            }
            )
    }
        , S = () => {
            let L;
            return t.virtual && t.params.virtual.enabled ? L = t.slides.filter(j => j.classList.contains("swiper-slide-active"))[0] : L = t.slides[t.activeIndex],
                L ? parseInt(L.getAttribute("data-swiper-autoplay"), 10) : void 0
        }
        , x = L => {
            if (t.destroyed || !t.autoplay.running)
                return;
            cancelAnimationFrame(a),
                g();
            let N = typeof L > "u" ? t.params.autoplay.delay : L;
            s = t.params.autoplay.delay,
                u = t.params.autoplay.delay;
            const j = S();
            !Number.isNaN(j) && j > 0 && typeof L > "u" && (N = j,
                s = j,
                u = j),
                d = N;
            const F = t.params.speed
                , V = () => {
                    !t || t.destroyed || (t.params.autoplay.reverseDirection ? !t.isBeginning || t.params.loop || t.params.rewind ? (t.slidePrev(F, !0, !0),
                        i("autoplay")) : t.params.autoplay.stopOnLastSlide || (t.slideTo(t.slides.length - 1, F, !0, !0),
                            i("autoplay")) : !t.isEnd || t.params.loop || t.params.rewind ? (t.slideNext(F, !0, !0),
                                i("autoplay")) : t.params.autoplay.stopOnLastSlide || (t.slideTo(0, F, !0, !0),
                                    i("autoplay")),
                        t.params.cssMode && (p = new Date().getTime(),
                            requestAnimationFrame(() => {
                                x()
                            }
                            )))
                }
                ;
            return N > 0 ? (clearTimeout(o),
                o = setTimeout(() => {
                    V()
                }
                    , N)) : requestAnimationFrame(() => {
                        V()
                    }
                    ),
                N
        }
        , M = () => {
            p = new Date().getTime(),
                t.autoplay.running = !0,
                x(),
                i("autoplayStart")
        }
        , k = () => {
            t.autoplay.running = !1,
                clearTimeout(o),
                cancelAnimationFrame(a),
                i("autoplayStop")
        }
        , C = (L, N) => {
            if (t.destroyed || !t.autoplay.running)
                return;
            clearTimeout(o),
                L || (m = !0);
            const j = () => {
                i("autoplayPause"),
                    t.params.autoplay.waitForTransition ? t.wrapperEl.addEventListener("transitionend", f) : T()
            }
                ;
            if (t.autoplay.paused = !0,
                N) {
                O && (d = t.params.autoplay.delay),
                    O = !1,
                    j();
                return
            }
            d = (d || t.params.autoplay.delay) - (new Date().getTime() - p),
                !(t.isEnd && d < 0 && !t.params.loop) && (d < 0 && (d = 0),
                    j())
        }
        , T = () => {
            t.isEnd && d < 0 && !t.params.loop || t.destroyed || !t.autoplay.running || (p = new Date().getTime(),
                m ? (m = !1,
                    x(d)) : x(),
                t.autoplay.paused = !1,
                i("autoplayResume"))
        }
        , E = () => {
            if (t.destroyed || !t.autoplay.running)
                return;
            const L = wt();
            L.visibilityState === "hidden" && (m = !0,
                C(!0)),
                L.visibilityState === "visible" && T()
        }
        , _ = L => {
            L.pointerType === "mouse" && (m = !0,
                c = !0,
                !(t.animating || t.autoplay.paused) && C(!0))
        }
        , P = L => {
            L.pointerType === "mouse" && (c = !1,
                t.autoplay.paused && T())
        }
        , I = () => {
            t.params.autoplay.pauseOnMouseEnter && (t.el.addEventListener("pointerenter", _),
                t.el.addEventListener("pointerleave", P))
        }
        , R = () => {
            t.el.removeEventListener("pointerenter", _),
                t.el.removeEventListener("pointerleave", P)
        }
        , $ = () => {
            wt().addEventListener("visibilitychange", E)
        }
        , pe = () => {
            wt().removeEventListener("visibilitychange", E)
        }
        ;
    r("init", () => {
        t.params.autoplay.enabled && (I(),
            $(),
            M())
    }
    ),
        r("destroy", () => {
            R(),
                pe(),
                t.autoplay.running && k()
        }
        ),
        r("_freeModeStaticRelease", () => {
            (y || m) && T()
        }
        ),
        r("_freeModeNoMomentumRelease", () => {
            t.params.autoplay.disableOnInteraction ? k() : C(!0, !0)
        }
        ),
        r("beforeTransitionStart", (L, N, j) => {
            t.destroyed || !t.autoplay.running || (j || !t.params.autoplay.disableOnInteraction ? C(!0, !0) : k())
        }
        ),
        r("sliderFirstMove", () => {
            if (!(t.destroyed || !t.autoplay.running)) {
                if (t.params.autoplay.disableOnInteraction) {
                    k();
                    return
                }
                v = !0,
                    y = !1,
                    m = !1,
                    w = setTimeout(() => {
                        m = !0,
                            y = !0,
                            C(!0)
                    }
                        , 200)
            }
        }
        ),
        r("touchEnd", () => {
            if (!(t.destroyed || !t.autoplay.running || !v)) {
                if (clearTimeout(w),
                    clearTimeout(o),
                    t.params.autoplay.disableOnInteraction) {
                    y = !1,
                        v = !1;
                    return
                }
                y && t.params.cssMode && T(),
                    y = !1,
                    v = !1
            }
        }
        ),
        r("slideChange", () => {
            t.destroyed || !t.autoplay.running || (O = !0)
        }
        ),
        Object.assign(t.autoplay, {
            start: M,
            stop: k,
            pause: C,
            resume: T
        })
}
function cy() {
    return b.jsx("section", {
        className: "relative z-10 overflow-hidden bg-[#9EFF00]",
        children: b.jsxs("div", {
            className: "container-wrapper   pt-2 pb-0 lg:pt-0 lg:pb-6 lg:drop-shadow-[0_0_10rem_white]",
            children: [b.jsxs("div", {
                className: " text-center mt-4 sm:mt-10",
                children: [b.jsxs("h1", {
                    className: "text-center text-[#000] text-4xl  sm:text-7xl font-potta  pb-2 txt-s",
                    children: [" ", "Grecko-ERC404"]
                }), b.jsx("p", {
                    className: " font-potta text-lg sm:text-4xl mt-2",
                    children: "The Future of Hybrid Assets"
                })]
            }), b.jsxs("div", {
                className: "hidden sm:flex justify-between items-center mt-0 sm:mt-12 ",
                children: [b.jsx("img", {
                    src: "images/hero-img.png",
                    alt: "",
                    className: " mt-[5%]"
                }), b.jsxs("div", {
                    children: [b.jsx("img", {
                        src: "images/hero-img1.png",
                        alt: "",
                        className: " mx-auto floating"
                    }), b.jsx("div", {
                        className: " mt-4 flex flex-col sm:flex-row items-center gap-4 justify-center",
                        children: b.jsx("button", {
                            className: " bg-[#fff] hover:bg-black  text-black hover:text-white font-potta text-xl sm:text-3xl rounded-full border-2 px-14 pt-2 pb-3 mb-2 connectButton",
                            children: "Buy Now"
                        })
                    }), b.jsx("a", {
                        href: "https://",
                        className: " text-center font-semibold pt-8",
                        children: "Contract : "
                    })]
                }), b.jsx("img", {
                    src: "images/hero-img2.png",
                    alt: "",
                    className: "-mt-[10%]"
                })]
            }), b.jsxs("div", {
                className: "block lg:hidden sm:hidden",
                children: [b.jsxs(Zf, {
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: !1
                    },
                    pagination: {
                        clickable: !0
                    },
                    modules: [uy, ay],
                    className: "mySwiper",
                    children: [b.jsxs(Oi, {
                        children: [" ", b.jsx("img", {
                            src: "images/hero-img.png",
                            alt: "",
                            className: " mx-auto"
                        })]
                    }), b.jsxs(Oi, {
                        children: [" ", b.jsx("img", {
                            src: "images/hero-img1.png",
                            alt: "",
                            className: " mx-auto"
                        })]
                    }), b.jsxs(Oi, {
                        children: [" ", b.jsx("img", {
                            src: "images/hero-img2.png",
                            alt: "",
                            className: " mx-auto"
                        })]
                    })]
                }), b.jsxs("div", {
                    className: " flex flex-col justify-center",
                    children: [b.jsx("button", {
                        className: " bg-[#fff] hover:bg-black  text-black hover:text-white font-potta text-xl sm:text-3xl rounded-full border-2 px-14 pt-2 pb-3 w-[250px] mx-auto connectButton",
                        children: "Buy Now"
                    }), b.jsxs("div", {
                        className: " flex justify-center gap-5 mt-6  mb-4",
                        children: [b.jsxs("a", {
                            href: "https://t.me/grecko404",
                            target: "_blank",
                            className: "  hover:bg-black  text-black hover:text-white bg-white rounded-full p-2 text-3xl ",
                            children: [" ", b.jsx(as, {})]
                        }), b.jsx("a", {
                            href: "https://twitter.com/Grecko404",
                            target: "_blank",
                            className: " hover:bg-black  text-black hover:text-white bg-white rounded-full p-2 text-3xl",
                            children: b.jsx(us, {})
                        })]
                    }), b.jsx("a", {
                        href: "https://etherscan.io/address/",
                        className: " text-center text-xs font-semibold px-2",
                        children: "Contract : "
                    })]
                })]
            })]
        })
    })
}
function dy() {
    return b.jsx("div", {
        className: "flex flex-col",
        children: b.jsxs("main", {
            className: "flex-1",
            children: [b.jsxs("div", {
                className: "relative z-10",
                children: [b.jsx(zg, {}), b.jsx("div", {
                    className: " ",
                    children: b.jsx(cy, {})
                })]
            }), b.jsx("div", {
                className: "",
                id: "about",
                children: b.jsx(Ig, {})
            })]
        })
    })
}
var Jf = {
    exports: {}
};
(function (e, t) {
    (function (n, r) {
        e.exports = r()
    }
    )(tr, function () {
        return function (n) {
            function r(l) {
                if (i[l])
                    return i[l].exports;
                var o = i[l] = {
                    exports: {},
                    id: l,
                    loaded: !1
                };
                return n[l].call(o.exports, o, o.exports, r),
                    o.loaded = !0,
                    o.exports
            }
            var i = {};
            return r.m = n,
                r.c = i,
                r.p = "dist/",
                r(0)
        }([function (n, r, i) {
            function l(I) {
                return I && I.__esModule ? I : {
                    default: I
                }
            }
            var o = Object.assign || function (I) {
                for (var R = 1; R < arguments.length; R++) {
                    var $ = arguments[R];
                    for (var pe in $)
                        Object.prototype.hasOwnProperty.call($, pe) && (I[pe] = $[pe])
                }
                return I
            }
                , a = i(1)
                , s = (l(a),
                    i(6))
                , u = l(s)
                , d = i(7)
                , p = l(d)
                , h = i(8)
                , v = l(h)
                , y = i(9)
                , w = l(y)
                , O = i(10)
                , m = l(O)
                , c = i(11)
                , f = l(c)
                , g = i(14)
                , S = l(g)
                , x = []
                , M = !1
                , k = {
                    offset: 120,
                    delay: 0,
                    easing: "ease",
                    duration: 400,
                    disable: !1,
                    once: !1,
                    startEvent: "DOMContentLoaded",
                    throttleDelay: 99,
                    debounceDelay: 50,
                    disableMutationObserver: !1
                }
                , C = function () {
                    var I = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
                    if (I && (M = !0),
                        M)
                        return x = (0,
                            f.default)(x, k),
                            (0,
                                m.default)(x, k.once),
                            x
                }
                , T = function () {
                    x = (0,
                        S.default)(),
                        C()
                }
                , E = function () {
                    x.forEach(function (I, R) {
                        I.node.removeAttribute("data-aos"),
                            I.node.removeAttribute("data-aos-easing"),
                            I.node.removeAttribute("data-aos-duration"),
                            I.node.removeAttribute("data-aos-delay")
                    })
                }
                , _ = function (I) {
                    return I === !0 || I === "mobile" && w.default.mobile() || I === "phone" && w.default.phone() || I === "tablet" && w.default.tablet() || typeof I == "function" && I() === !0
                }
                , P = function (I) {
                    k = o(k, I),
                        x = (0,
                            S.default)();
                    var R = document.all && !window.atob;
                    return _(k.disable) || R ? E() : (k.disableMutationObserver || v.default.isSupported() || (console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),
                        k.disableMutationObserver = !0),
                        document.querySelector("body").setAttribute("data-aos-easing", k.easing),
                        document.querySelector("body").setAttribute("data-aos-duration", k.duration),
                        document.querySelector("body").setAttribute("data-aos-delay", k.delay),
                        k.startEvent === "DOMContentLoaded" && ["complete", "interactive"].indexOf(document.readyState) > -1 ? C(!0) : k.startEvent === "load" ? window.addEventListener(k.startEvent, function () {
                            C(!0)
                        }) : document.addEventListener(k.startEvent, function () {
                            C(!0)
                        }),
                        window.addEventListener("resize", (0,
                            p.default)(C, k.debounceDelay, !0)),
                        window.addEventListener("orientationchange", (0,
                            p.default)(C, k.debounceDelay, !0)),
                        window.addEventListener("scroll", (0,
                            u.default)(function () {
                                (0,
                                    m.default)(x, k.once)
                            }, k.throttleDelay)),
                        k.disableMutationObserver || v.default.ready("[data-aos]", T),
                        x)
                };
            n.exports = {
                init: P,
                refresh: C,
                refreshHard: T
            }
        }
            , function (n, r) { }
            , , , , , function (n, r) {
                (function (i) {
                    function l(_, P, I) {
                        function R(G) {
                            var Le = ae
                                , Pt = Me;
                            return ae = Me = void 0,
                                _t = G,
                                ie = _.apply(Pt, Le)
                        }
                        function $(G) {
                            return _t = G,
                                ce = setTimeout(N, P),
                                Ct ? R(G) : ie
                        }
                        function pe(G) {
                            var Le = G - De
                                , Pt = G - _t
                                , ya = P - Le;
                            return ft ? T(ya, me - Pt) : ya
                        }
                        function L(G) {
                            var Le = G - De
                                , Pt = G - _t;
                            return De === void 0 || Le >= P || Le < 0 || ft && Pt >= me
                        }
                        function N() {
                            var G = E();
                            return L(G) ? j(G) : void (ce = setTimeout(N, pe(G)))
                        }
                        function j(G) {
                            return ce = void 0,
                                Z && ae ? R(G) : (ae = Me = void 0,
                                    ie)
                        }
                        function F() {
                            ce !== void 0 && clearTimeout(ce),
                                _t = 0,
                                ae = De = Me = ce = void 0
                        }
                        function V() {
                            return ce === void 0 ? ie : j(E())
                        }
                        function ke() {
                            var G = E()
                                , Le = L(G);
                            if (ae = arguments,
                                Me = this,
                                De = G,
                                Le) {
                                if (ce === void 0)
                                    return $(De);
                                if (ft)
                                    return ce = setTimeout(N, P),
                                        R(De)
                            }
                            return ce === void 0 && (ce = setTimeout(N, P)),
                                ie
                        }
                        var ae, Me, me, ie, ce, De, _t = 0, Ct = !1, ft = !1, Z = !0;
                        if (typeof _ != "function")
                            throw new TypeError(h);
                        return P = d(P) || 0,
                            a(I) && (Ct = !!I.leading,
                                ft = "maxWait" in I,
                                me = ft ? C(d(I.maxWait) || 0, P) : me,
                                Z = "trailing" in I ? !!I.trailing : Z),
                            ke.cancel = F,
                            ke.flush = V,
                            ke
                    }
                    function o(_, P, I) {
                        var R = !0
                            , $ = !0;
                        if (typeof _ != "function")
                            throw new TypeError(h);
                        return a(I) && (R = "leading" in I ? !!I.leading : R,
                            $ = "trailing" in I ? !!I.trailing : $),
                            l(_, P, {
                                leading: R,
                                maxWait: P,
                                trailing: $
                            })
                    }
                    function a(_) {
                        var P = typeof _ > "u" ? "undefined" : p(_);
                        return !!_ && (P == "object" || P == "function")
                    }
                    function s(_) {
                        return !!_ && (typeof _ > "u" ? "undefined" : p(_)) == "object"
                    }
                    function u(_) {
                        return (typeof _ > "u" ? "undefined" : p(_)) == "symbol" || s(_) && k.call(_) == y
                    }
                    function d(_) {
                        if (typeof _ == "number")
                            return _;
                        if (u(_))
                            return v;
                        if (a(_)) {
                            var P = typeof _.valueOf == "function" ? _.valueOf() : _;
                            _ = a(P) ? P + "" : P
                        }
                        if (typeof _ != "string")
                            return _ === 0 ? _ : +_;
                        _ = _.replace(w, "");
                        var I = m.test(_);
                        return I || c.test(_) ? f(_.slice(2), I ? 2 : 8) : O.test(_) ? v : +_
                    }
                    var p = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (_) {
                        return typeof _
                    }
                        : function (_) {
                            return _ && typeof Symbol == "function" && _.constructor === Symbol && _ !== Symbol.prototype ? "symbol" : typeof _
                        }
                        , h = "Expected a function"
                        , v = NaN
                        , y = "[object Symbol]"
                        , w = /^\s+|\s+$/g
                        , O = /^[-+]0x[0-9a-f]+$/i
                        , m = /^0b[01]+$/i
                        , c = /^0o[0-7]+$/i
                        , f = parseInt
                        , g = (typeof i > "u" ? "undefined" : p(i)) == "object" && i && i.Object === Object && i
                        , S = (typeof self > "u" ? "undefined" : p(self)) == "object" && self && self.Object === Object && self
                        , x = g || S || Function("return this")()
                        , M = Object.prototype
                        , k = M.toString
                        , C = Math.max
                        , T = Math.min
                        , E = function () {
                            return x.Date.now()
                        };
                    n.exports = o
                }
                ).call(r, function () {
                    return this
                }())
            }
            , function (n, r) {
                (function (i) {
                    function l(E, _, P) {
                        function I(Z) {
                            var G = ke
                                , Le = ae;
                            return ke = ae = void 0,
                                De = Z,
                                me = E.apply(Le, G)
                        }
                        function R(Z) {
                            return De = Z,
                                ie = setTimeout(L, _),
                                _t ? I(Z) : me
                        }
                        function $(Z) {
                            var G = Z - ce
                                , Le = Z - De
                                , Pt = _ - G;
                            return Ct ? C(Pt, Me - Le) : Pt
                        }
                        function pe(Z) {
                            var G = Z - ce
                                , Le = Z - De;
                            return ce === void 0 || G >= _ || G < 0 || Ct && Le >= Me
                        }
                        function L() {
                            var Z = T();
                            return pe(Z) ? N(Z) : void (ie = setTimeout(L, $(Z)))
                        }
                        function N(Z) {
                            return ie = void 0,
                                ft && ke ? I(Z) : (ke = ae = void 0,
                                    me)
                        }
                        function j() {
                            ie !== void 0 && clearTimeout(ie),
                                De = 0,
                                ke = ce = ae = ie = void 0
                        }
                        function F() {
                            return ie === void 0 ? me : N(T())
                        }
                        function V() {
                            var Z = T()
                                , G = pe(Z);
                            if (ke = arguments,
                                ae = this,
                                ce = Z,
                                G) {
                                if (ie === void 0)
                                    return R(ce);
                                if (Ct)
                                    return ie = setTimeout(L, _),
                                        I(ce)
                            }
                            return ie === void 0 && (ie = setTimeout(L, _)),
                                me
                        }
                        var ke, ae, Me, me, ie, ce, De = 0, _t = !1, Ct = !1, ft = !0;
                        if (typeof E != "function")
                            throw new TypeError(p);
                        return _ = u(_) || 0,
                            o(P) && (_t = !!P.leading,
                                Ct = "maxWait" in P,
                                Me = Ct ? k(u(P.maxWait) || 0, _) : Me,
                                ft = "trailing" in P ? !!P.trailing : ft),
                            V.cancel = j,
                            V.flush = F,
                            V
                    }
                    function o(E) {
                        var _ = typeof E > "u" ? "undefined" : d(E);
                        return !!E && (_ == "object" || _ == "function")
                    }
                    function a(E) {
                        return !!E && (typeof E > "u" ? "undefined" : d(E)) == "object"
                    }
                    function s(E) {
                        return (typeof E > "u" ? "undefined" : d(E)) == "symbol" || a(E) && M.call(E) == v
                    }
                    function u(E) {
                        if (typeof E == "number")
                            return E;
                        if (s(E))
                            return h;
                        if (o(E)) {
                            var _ = typeof E.valueOf == "function" ? E.valueOf() : E;
                            E = o(_) ? _ + "" : _
                        }
                        if (typeof E != "string")
                            return E === 0 ? E : +E;
                        E = E.replace(y, "");
                        var P = O.test(E);
                        return P || m.test(E) ? c(E.slice(2), P ? 2 : 8) : w.test(E) ? h : +E
                    }
                    var d = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (E) {
                        return typeof E
                    }
                        : function (E) {
                            return E && typeof Symbol == "function" && E.constructor === Symbol && E !== Symbol.prototype ? "symbol" : typeof E
                        }
                        , p = "Expected a function"
                        , h = NaN
                        , v = "[object Symbol]"
                        , y = /^\s+|\s+$/g
                        , w = /^[-+]0x[0-9a-f]+$/i
                        , O = /^0b[01]+$/i
                        , m = /^0o[0-7]+$/i
                        , c = parseInt
                        , f = (typeof i > "u" ? "undefined" : d(i)) == "object" && i && i.Object === Object && i
                        , g = (typeof self > "u" ? "undefined" : d(self)) == "object" && self && self.Object === Object && self
                        , S = f || g || Function("return this")()
                        , x = Object.prototype
                        , M = x.toString
                        , k = Math.max
                        , C = Math.min
                        , T = function () {
                            return S.Date.now()
                        };
                    n.exports = l
                }
                ).call(r, function () {
                    return this
                }())
            }
            , function (n, r) {
                function i(d) {
                    var p = void 0
                        , h = void 0;
                    for (p = 0; p < d.length; p += 1)
                        if (h = d[p],
                            h.dataset && h.dataset.aos || h.children && i(h.children))
                            return !0;
                    return !1
                }
                function l() {
                    return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
                }
                function o() {
                    return !!l()
                }
                function a(d, p) {
                    var h = window.document
                        , v = l()
                        , y = new v(s);
                    u = p,
                        y.observe(h.documentElement, {
                            childList: !0,
                            subtree: !0,
                            removedNodes: !0
                        })
                }
                function s(d) {
                    d && d.forEach(function (p) {
                        var h = Array.prototype.slice.call(p.addedNodes)
                            , v = Array.prototype.slice.call(p.removedNodes)
                            , y = h.concat(v);
                        if (i(y))
                            return u()
                    })
                }
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var u = function () { };
                r.default = {
                    isSupported: o,
                    ready: a
                }
            }
            , function (n, r) {
                function i(h, v) {
                    if (!(h instanceof v))
                        throw new TypeError("Cannot call a class as a function")
                }
                function l() {
                    return navigator.userAgent || navigator.vendor || window.opera || ""
                }
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var o = function () {
                    function h(v, y) {
                        for (var w = 0; w < y.length; w++) {
                            var O = y[w];
                            O.enumerable = O.enumerable || !1,
                                O.configurable = !0,
                                "value" in O && (O.writable = !0),
                                Object.defineProperty(v, O.key, O)
                        }
                    }
                    return function (v, y, w) {
                        return y && h(v.prototype, y),
                            w && h(v, w),
                            v
                    }
                }()
                    , a = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i
                    , s = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
                    , u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i
                    , d = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
                    , p = function () {
                        function h() {
                            i(this, h)
                        }
                        return o(h, [{
                            key: "phone",
                            value: function () {
                                var v = l();
                                return !(!a.test(v) && !s.test(v.substr(0, 4)))
                            }
                        }, {
                            key: "mobile",
                            value: function () {
                                var v = l();
                                return !(!u.test(v) && !d.test(v.substr(0, 4)))
                            }
                        }, {
                            key: "tablet",
                            value: function () {
                                return this.mobile() && !this.phone()
                            }
                        }]),
                            h
                    }();
                r.default = new p
            }
            , function (n, r) {
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var i = function (o, a, s) {
                    var u = o.node.getAttribute("data-aos-once");
                    a > o.position ? o.node.classList.add("aos-animate") : typeof u < "u" && (u === "false" || !s && u !== "true") && o.node.classList.remove("aos-animate")
                }
                    , l = function (o, a) {
                        var s = window.pageYOffset
                            , u = window.innerHeight;
                        o.forEach(function (d, p) {
                            i(d, u + s, a)
                        })
                    };
                r.default = l
            }
            , function (n, r, i) {
                function l(u) {
                    return u && u.__esModule ? u : {
                        default: u
                    }
                }
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var o = i(12)
                    , a = l(o)
                    , s = function (u, d) {
                        return u.forEach(function (p, h) {
                            p.node.classList.add("aos-init"),
                                p.position = (0,
                                    a.default)(p.node, d.offset)
                        }),
                            u
                    };
                r.default = s
            }
            , function (n, r, i) {
                function l(u) {
                    return u && u.__esModule ? u : {
                        default: u
                    }
                }
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var o = i(13)
                    , a = l(o)
                    , s = function (u, d) {
                        var p = 0
                            , h = 0
                            , v = window.innerHeight
                            , y = {
                                offset: u.getAttribute("data-aos-offset"),
                                anchor: u.getAttribute("data-aos-anchor"),
                                anchorPlacement: u.getAttribute("data-aos-anchor-placement")
                            };
                        switch (y.offset && !isNaN(y.offset) && (h = parseInt(y.offset)),
                        y.anchor && document.querySelectorAll(y.anchor) && (u = document.querySelectorAll(y.anchor)[0]),
                        p = (0,
                            a.default)(u).top,
                        y.anchorPlacement) {
                            case "top-bottom":
                                break;
                            case "center-bottom":
                                p += u.offsetHeight / 2;
                                break;
                            case "bottom-bottom":
                                p += u.offsetHeight;
                                break;
                            case "top-center":
                                p += v / 2;
                                break;
                            case "bottom-center":
                                p += v / 2 + u.offsetHeight;
                                break;
                            case "center-center":
                                p += v / 2 + u.offsetHeight / 2;
                                break;
                            case "top-top":
                                p += v;
                                break;
                            case "bottom-top":
                                p += u.offsetHeight + v;
                                break;
                            case "center-top":
                                p += u.offsetHeight / 2 + v
                        }
                        return y.anchorPlacement || y.offset || isNaN(d) || (h = d),
                            p + h
                    };
                r.default = s
            }
            , function (n, r) {
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var i = function (l) {
                    for (var o = 0, a = 0; l && !isNaN(l.offsetLeft) && !isNaN(l.offsetTop);)
                        o += l.offsetLeft - (l.tagName != "BODY" ? l.scrollLeft : 0),
                            a += l.offsetTop - (l.tagName != "BODY" ? l.scrollTop : 0),
                            l = l.offsetParent;
                    return {
                        top: a,
                        left: o
                    }
                };
                r.default = i
            }
            , function (n, r) {
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var i = function (l) {
                    return l = l || document.querySelectorAll("[data-aos]"),
                        Array.prototype.map.call(l, function (o) {
                            return {
                                node: o
                            }
                        })
                };
                r.default = i
            }
        ])
    })
}
)(Jf);
var fy = Jf.exports;
const py = ec(fy);
py.init();
po.createRoot(document.getElementById("root")).render(b.jsx(U.StrictMode, {
    children: b.jsx(dy, {})
}));
