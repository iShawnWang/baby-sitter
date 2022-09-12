!(function () {
  "use strict";
  var c,
    u,
    l = function () {
      return (l =
        Object.assign ||
        function (n) {
          for (var e, t = 1, r = arguments.length; t < r; t++)
            for (var o in (e = arguments[t]))
              Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
          return n;
        }).apply(this, arguments);
    };
  function j(n, e) {
    var t = "function" == typeof Symbol && n[Symbol.iterator];
    if (!t) return n;
    var r,
      o,
      i = t.call(n),
      u = [];
    try {
      for (; (void 0 === e || 0 < e--) && !(r = i.next()).done; )
        u.push(r.value);
    } catch (n) {
      o = { error: n };
    } finally {
      try {
        r && !r.done && (t = i.return) && t.call(i);
      } finally {
        if (o) throw o.error;
      }
    }
    return u;
  }
  function g(n, e, t) {
    if (t || 2 === arguments.length)
      for (var r, o = 0, i = e.length; o < i; o++)
        (!r && o in e) ||
          ((r = r || Array.prototype.slice.call(e, 0, o))[o] = e[o]);
    return n.concat(r || Array.prototype.slice.call(e));
  }
  "object" == typeof document &&
    ("currentScript" in (c = document) ||
      Object.defineProperty(c, "currentScript", {
        get: function () {
          try {
            throw new Error();
          } catch (n) {
            var e = 0,
              t = /.*at [^(]*\((.*):(.+):(.+)\)$/gi.exec(n.stack),
              r = (t && t[1]) || !1,
              o = (t && t[2]) || 0,
              i = c.location.href.replace(c.location.hash, ""),
              u = "",
              a = c.getElementsByTagName("script");
            for (
              r === i &&
              ((t = c.documentElement.outerHTML),
              (o = new RegExp(
                "(?:[^\\n]+?\\n){0," +
                  (o - 2) +
                  "}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*",
                "i"
              )),
              (u = t.replace(o, "$1").trim()));
              e < a.length;
              e++
            ) {
              if ("interactive" === a[e].readyState) return a[e];
              if (a[e].src === r) return a[e];
              if (r === i && a[e].innerHTML && a[e].innerHTML.trim() === u)
                return a[e];
            }
            return null;
          }
        },
      })),
    "undefined" == typeof Element ||
      Element.prototype.addEventListener ||
      ((u = []),
      (pr = function (n, e) {
        for (var t = 0; t < u.length; ) {
          var r = u[t];
          if (r.object === this && r.type === n && r.listener === e) {
            "DOMContentLoaded" === n
              ? this.detachEvent("onreadystatechange", r.wrapper)
              : this.detachEvent("on" + n, r.wrapper),
              u.splice(t, 1);
            break;
          }
          ++t;
        }
      }),
      (Element.prototype.addEventListener = yr =
        function (n, e) {
          function t(n) {
            (n.target = n.srcElement),
              (n.currentTarget = i),
              void 0 !== e.handleEvent ? e.handleEvent(n) : e.call(i, n);
          }
          var r,
            o,
            i = this;
          "DOMContentLoaded" === n
            ? ((r = function (n) {
                "complete" === document.readyState && t(n);
              }),
              document.attachEvent("onreadystatechange", r),
              u.push({ object: this, type: n, listener: e, wrapper: r }),
              "complete" === document.readyState &&
                (((o = new Event()).srcElement = window), r(o)))
            : (this.attachEvent("on" + n, t),
              u.push({ object: this, type: n, listener: e, wrapper: t }));
        }),
      (Element.prototype.removeEventListener = pr),
      HTMLDocument &&
        !HTMLDocument.prototype.addEventListener &&
        ((HTMLDocument.prototype.addEventListener = yr),
        (HTMLDocument.prototype.removeEventListener = pr)),
      Window &&
        !Window.prototype.addEventListener &&
        ((Window.prototype.addEventListener = yr),
        (Window.prototype.removeEventListener = pr)));
  function p(n) {
    return JSON.stringify({ ev_type: "batch", list: n });
  }
  var y = [
      "init",
      "start",
      "config",
      "beforeDestroy",
      "provide",
      "report",
      "beforeBuild",
      "build",
      "beforeSend",
      "send",
      "beforeConfig",
    ],
    b = function () {};
  function w(n) {
    return n;
  }
  function E(n) {
    return "object" == typeof n && null !== n;
  }
  var e = Object.prototype;
  function i(n) {
    if (E(n)) {
      if ("function" != typeof Object.getPrototypeOf)
        return "[object Object]" === e.toString.call(n);
      n = Object.getPrototypeOf(n);
      return n === e || null === n;
    }
  }
  function a(n) {
    return "[object Array]" === e.toString.call(n);
  }
  function _(n) {
    return "function" == typeof n;
  }
  function f(n) {
    return "number" == typeof n;
  }
  function h(n) {
    return "string" == typeof n;
  }
  function o(n) {
    return (
      "undefined" != typeof Event &&
      (function (n, e) {
        try {
          return n instanceof e;
        } catch (n) {
          return;
        }
      })(n, Event)
    );
  }
  function d(n, e) {
    var t,
      r,
      o = l({}, n);
    for (t in e)
      (r = t),
        Object.prototype.hasOwnProperty.call(e, r) &&
          void 0 !== e[t] &&
          (E(e[t]) && i(e[t])
            ? (o[t] = d(E(n[t]) ? n[t] : {}, e[t]))
            : a(e[t]) && a(n[t])
            ? (o[t] = (function e(n, t) {
                n = a(n) ? n : [];
                t = a(t) ? t : [];
                return Array.prototype.concat.call(n, t).map(function (n) {
                  return n instanceof RegExp
                    ? n
                    : E(n) && i(n)
                    ? d({}, n)
                    : a(n)
                    ? e([], n)
                    : n;
                });
              })(n[t], e[t]))
            : (o[t] = e[t]));
    return o;
  }
  function S(n, e) {
    if (!a(n)) return !1;
    if (0 === n.length) return !1;
    for (var t = 0; t < n.length; ) {
      if (n[t] === e) return !0;
      t++;
    }
    return !1;
  }
  function T(n, e) {
    if (!a(n)) return n;
    var t = n.indexOf(e);
    if (0 <= t) {
      e = n.slice();
      return e.splice(t, 1), e;
    }
    return n;
  }
  function v(n, e, t) {
    for (
      var r, o = (e = j(e.split(".")))[0], i = e.slice(1);
      n && 0 < i.length;

    )
      (n = n[o]), (o = (r = j(i))[0]), (i = r.slice(1));
    if (n) return t(n, o);
  }
  function m(n) {
    return a(n) && n.length
      ? (function (n) {
          for (var e = [], t = n.length, r = 0; r < t; r++) {
            var o = n[r];
            h(o)
              ? e.push(o.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"))
              : o && o.source && e.push(o.source);
          }
          return new RegExp(e.join("|"), "i");
        })(n)
      : null;
  }
  function s(n) {
    try {
      return h(n) ? n : JSON.stringify(n);
    } catch (n) {
      return "[FAILED_TO_STRINGIFY]:" + String(n);
    }
  }
  function L(i, u, a) {
    return function () {
      for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
      if (!i) return b;
      var t = i[u],
        r = a.apply(void 0, g([t], j(n), !1)),
        o = r;
      return (
        _(o) &&
          (o = function () {
            for (var e = [], n = 0; n < arguments.length; n++)
              e[n] = arguments[n];
            try {
              return r.apply(this, e);
            } catch (n) {
              return _(t) && t.apply(this, e);
            }
          }),
        (i[u] = o),
        function (n) {
          (n && o !== i[u]) || (i[u] = t);
        }
      );
    };
  }
  function D(t, r, o) {
    return function () {
      for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
      t[r] = o.apply(void 0, g([t[r]], j(n), !1));
    };
  }
  function x() {
    for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
    console.warn.apply(
      console,
      g(["[SDK]", Date.now(), ("" + r++).padStart(8, " ")], j(n), !1)
    );
  }
  function R(r) {
    return function (n) {
      for (var e = n, t = 0; t < r.length && e; t++)
        try {
          e = r[t](e);
        } catch (n) {
          C(n);
        }
      return e;
    };
  }
  var t = 0,
    C = function () {
      for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
      console.error.apply(
        console,
        g(["[SDK]", Date.now(), ("" + t++).padStart(8, " ")], j(n), !1)
      );
    },
    r = 0,
    k = function (n) {
      return Math.random() < Number(n);
    },
    O = function (n, e) {
      return n < Number(e);
    };
  function N() {
    var n = (function () {
      for (var n = new Array(16), e = 0, t = 0; t < 16; t++)
        0 == (3 & t) && (e = 4294967296 * Math.random()),
          (n[t] = (e >>> ((3 & t) << 3)) & 255);
      return n;
    })();
    return (
      (n[6] = (15 & n[6]) | 64),
      (n[8] = (63 & n[8]) | 128),
      (function (n) {
        for (var e = [], t = 0; t < 256; ++t)
          e[t] = (t + 256).toString(16).substr(1);
        var r = 0,
          o = e;
        return [
          o[n[r++]],
          o[n[r++]],
          o[n[r++]],
          o[n[r++]],
          "-",
          o[n[r++]],
          o[n[r++]],
          "-",
          o[n[r++]],
          o[n[r++]],
          "-",
          o[n[r++]],
          o[n[r++]],
          "-",
          o[n[r++]],
          o[n[r++]],
          o[n[r++]],
          o[n[r++]],
          o[n[+r]],
          o[n[15]],
        ].join("");
      })(n)
    );
  }
  var q = function (n) {
      var t,
        r,
        o,
        e =
          ((t = {}),
          (r = {}),
          (o = {
            set: function (n, e) {
              return (t[n] = e), (r[n] = s(e)), o;
            },
            merge: function (e) {
              return (
                (t = l(l({}, t), e)),
                Object.keys(e).forEach(function (n) {
                  r[n] = s(e[n]);
                }),
                o
              );
            },
            delete: function (n) {
              return delete t[n], delete r[n], o;
            },
            clear: function () {
              return (t = {}), (r = {}), o;
            },
            get: function (n) {
              return r[n];
            },
            toString: function () {
              return l({}, r);
            },
          }));
      n.provide("context", e),
        n.on("report", function (n) {
          return n.extra || (n.extra = {}), (n.extra.context = e.toString()), n;
        });
    },
    I = function (a, c, t) {
      function f() {
        for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
        var t = n[0];
        if (t) {
          var r = t.split(".")[0];
          if (r in f)
            return (
              (i = f),
              (u = t),
              (o = [].slice.call(n, 1)),
              v(i, u, function (n, e) {
                if (n && e in n && _(n[e]))
                  try {
                    return n[e].apply(n, o);
                  } catch (n) {
                    return;
                  }
              })
            );
          var o,
            i = s[r] || [],
            u =
              null !== (u = null == c ? void 0 : c(a)) && void 0 !== u ? u : {};
          i.push(g([u], j(n), !1)), void (s[r] = i);
        }
      }
      var n,
        s = {};
      for (n in (L(a, "provide", function (t) {
        return function (n, e) {
          (f[n] = e), t.call(a, n, e);
        };
      })(),
      a))
        Object.prototype.hasOwnProperty.call(a, n) && (f[n] = a[n]);
      return (
        a.on("provide", function (n) {
          s[n] &&
            (s[n].forEach(function (n) {
              var e = j(n),
                n = e[0],
                e = e.slice(1);
              null != t && t(a, n, e);
            }),
            (s[n] = null));
        }),
        f
      );
    };
  function A() {
    if ("object" == typeof window && E(window)) return window;
  }
  function M() {
    if ("object" == typeof document && E(document)) return document;
  }
  function B() {
    return A() && window.location;
  }
  function H() {
    if (A() && E(window.performance)) return window.performance;
  }
  function P() {
    if ("function" == typeof XMLHttpRequest && _(XMLHttpRequest))
      return XMLHttpRequest;
  }
  function U() {
    try {
      return new Headers(), new Request(""), new Response(), window.fetch;
    } catch (n) {}
  }
  function W() {
    if (A() && _(window.MutationObserver)) return window.MutationObserver;
  }
  function n() {
    if (A() && _(window.PerformanceObserver)) return window.PerformanceObserver;
  }
  function G() {
    var n = H();
    if (n && E(n.timing)) return n.timing;
  }
  function F() {
    var n = (function () {
      if (A() && "navigator" in window) return window.navigator;
    })();
    if (n) return n.connection || n.mozConnection || n.webkitConnection;
  }
  var X = function () {
      for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
      var t = (function (n) {
        if (n)
          return (
            n.__SLARDAR_REGISTRY__ ||
              (n.__SLARDAR_REGISTRY__ = {
                Slardar: { plugins: [], errors: [] },
              }),
            n.__SLARDAR_REGISTRY__.Slardar
          );
      })(A());
      t && (t.errors || (t.errors = []), t.errors.push(n));
    },
    z = function (n, e) {
      var t = n && new n(e);
      return [
        function (n, e) {
          t && n && t.observe(n, e);
        },
        function () {
          return t && t.disconnect();
        },
      ];
    },
    Y = function (t) {
      var n = (t && t.timing) || void 0;
      return [
        n,
        function () {
          return t && t.now
            ? t.now()
            : (Date.now ? Date.now() : +new Date()) -
                ((n && n.navigationStart) || 0);
        },
        function (n) {
          var e = (t || {}).getEntriesByType;
          return (_(e) && e.call(t, n)) || [];
        },
        function () {
          var n = (t || {}).clearResourceTimings;
          _(n) && n.call(t);
        },
        function (n) {
          var e = (t || {}).getEntriesByName;
          return (_(e) && e.call(t, n)) || [];
        },
      ];
    },
    J = function (t, o, e, i) {
      var r =
        t &&
        new t(function (n, r) {
          n.getEntries
            ? n.getEntries().forEach(function (n, e, t) {
                return o(n, e, t, r);
              })
            : i && i(),
            e && r.disconnect();
        });
      return [
        function () {
          for (var e = [], n = 0; n < arguments.length; n++)
            e[n] = arguments[n];
          if (!t || !r) return i && i();
          try {
            e.forEach(function (n) {
              -1 < t.supportedEntryTypes.indexOf(n) &&
                r.observe({ type: n, buffered: !1 });
            });
          } catch (n) {
            try {
              r.observe({ entryTypes: e });
            } catch (n) {
              return i && i();
            }
          }
        },
        function () {
          return r && r.disconnect();
        },
      ];
    },
    $ = function (n, e, t, r) {
      void 0 === e && (e = {}), void 0 === r && (r = []);
      try {
        var o = n.apply(void 0, g([], j(r), !1));
        return (o && o(e, t)) || [];
      } catch (n) {
        return X(n), [];
      }
    };
  function V(n) {
    var e = M();
    if (!e || !n) return "";
    e = e.createElement("a");
    return (e.href = n), e.href;
  }
  function K(n) {
    var e = M();
    if (!e || !n)
      return {
        url: n,
        protocol: "",
        domain: "",
        query: "",
        path: "",
        hash: "",
      };
    e = e.createElement("a");
    e.href = n;
    n = e.pathname || "/";
    return (
      "/" !== n[0] && (n = "/" + n),
      {
        url: e.href,
        protocol: e.protocol.slice(0, -1),
        domain: e.hostname,
        query: e.search.substring(1),
        path: n,
        hash: e.hash,
      }
    );
  }
  function Q() {
    var n = A() && B();
    return null == n ? void 0 : n.href;
  }
  var Z = function (n) {
      var e = { url: Q(), timestamp: Date.now() },
        t = n.config();
      return (
        null != t && t.pid && (e.pid = t.pid),
        null != n && n.context && (e.context = n.context.toString()),
        e
      );
    },
    nn = function (t, r) {
      return function (n) {
        function e(n) {
          return (n.overrides = r), n;
        }
        t.on("report", e), n(), t.off("report", e);
      };
    },
    en = "<unknown>";
  function tn(n) {
    try {
      for (
        var e, t = n, r = [], o = 0, i = 0, u = " > ".length;
        t &&
        o++ < 5 &&
        !(
          "html" ===
            (e = (function (n) {
              var e,
                t,
                r,
                o,
                i = n,
                u = [];
              if (!i || !i.tagName) return "";
              u.push(i.tagName.toLowerCase()), i.id && u.push("#" + i.id);
              n = i.className;
              if (n && h(n))
                for (e = n.split(/\s+/), o = 0; o < e.length; o++)
                  u.push("." + e[o]);
              var a = ["type", "name", "title", "alt"];
              for (o = 0; o < a.length; o++)
                (t = a[o]),
                  (r = i.getAttribute(t)) && u.push("[" + t + '="' + r + '"]');
              return u.join("");
            })(t)) ||
          (1 < o && 80 <= i + r.length * u + e.length)
        );

      )
        r.push(e), (i += e.length), (t = t.parentNode);
      return r.reverse().join(" > ");
    } catch (n) {
      return en;
    }
  }
  function rn(o) {
    function i(e, t) {
      var r;
      return function (n) {
        (u = void 0), n && r !== n && t({ event: (r = n), name: e });
      };
    }
    var u;
    return [
      i,
      function (r) {
        return function (n) {
          var e;
          try {
            e = n.target;
          } catch (n) {
            return;
          }
          var t = e && e.tagName;
          t &&
            ("INPUT" === t || "TEXTAREA" === t || e.isContentEditable) &&
            (u || i("input", r)(n),
            clearTimeout(u),
            (u = window.setTimeout(function () {
              u = void 0;
            }, o)));
        };
      },
    ];
  }
  function on(e, t) {
    return function (n) {
      if (t)
        try {
          e(n);
        } catch (n) {}
    };
  }
  function un(n) {
    var e = A(),
      t = M();
    e &&
      t &&
      ("complete" !== t.readyState
        ? e.addEventListener(
            "load",
            function () {
              setTimeout(function () {
                n();
              }, 0);
            },
            !1
          )
        : n());
  }
  function an(n) {
    var e;
    "hidden" !== document.visibilityState
      ? ((e = function () {
          "hidden" === document.visibilityState &&
            (n(), removeEventListener("visibilitychange", e, !0));
        }),
        addEventListener("visibilitychange", e, !0))
      : n();
  }
  function cn(n, e) {
    return !(!n || !e) && (ln.test(n) || dn.test(e));
  }
  var fn = function (e) {
      var t = !1;
      return [
        function (n) {
          t || ((t = !0), e && e(n));
        },
      ];
    },
    sn = function (n) {
      var e = j(fn(n), 1)[0];
      ["unload", "beforeunload", "pagehide"].forEach(function (n) {
        addEventListener(n, e);
      });
    },
    ln = new RegExp(
      "(cookie|auth|jwt|token|key|ticket|secret|credential|session|password)",
      "i"
    ),
    dn = new RegExp("(bearer|session)", "i");
  function pn(n, e, t) {
    var r = n._method,
      o = n._reqHeaders,
      i = n._url,
      u = n._start,
      a = n._data,
      t = {
        api: "xhr",
        request: {
          url: V(i),
          method: (r || "").toLowerCase(),
          headers: o,
          timestamp: u,
        },
        response: {
          status: n.status || 0,
          is_custom_error: !1,
          timing: t(n.responseURL),
          timestamp: Date.now(),
        },
        duration: Date.now() - u,
      };
    "function" == typeof n.getAllResponseHeaders &&
      (t.response.headers =
        h((c = n.getAllResponseHeaders())) && c
          ? c.split("\r\n").reduce(function (n, e) {
              var t;
              return (
                h(e) &&
                  ((e = (t = j(e.split(": "), 2))[0]),
                  (t = t[1]),
                  cn(e, t) || (n[e.toLowerCase()] = t)),
                n
              );
            }, {})
          : {});
    var u = t.response.status,
      c = e.collectBodyOnError,
      e = e.extraExtractor;
    try {
      var f = null == e ? void 0 : e(n.response, t);
      f && (t.extra = f),
        f && (t.response.is_custom_error = !0),
        c &&
          400 <= u &&
          ((t.request.body = a ? "" + a : void 0),
          (t.response.body = n.response ? "" + n.response : void 0));
    } catch (n) {}
    return t;
  }
  function vn(n, e) {
    return !!(n = m(n || [])) && n.test(e);
  }
  function hn(n) {
    var e = j(Y(n), 5)[4];
    return function (n) {
      return e(n).pop();
    };
  }
  function mn(o) {
    return function () {
      for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
      this._reqHeaders = this._reqHeaders || {};
      var t = j(n, 2),
        r = t[0],
        t = t[1];
      return (
        cn(r, t) || (this._reqHeaders[r.toLowerCase()] = t),
        o && o.apply(this, n)
      );
    };
  }
  function gn(t, r, o, a) {
    return function () {
      for (var i, u, n = [], e = 0; e < arguments.length; e++)
        n[e] = arguments[e];
      return (
        (u = a),
        D((i = this), "onreadystatechange", function (t, r, o) {
          return function () {
            for (var n = [], e = 0; e < arguments.length; e++)
              n[e] = arguments[e];
            try {
              4 === this.readyState &&
                !vn(r.ignoreUrls, i._url) &&
                o &&
                o({ ev_type: "http", payload: pn(i, r, u) });
            } catch (n) {
              X(n);
            }
            return t && t.apply(this, n);
          };
        })(r, r.hookCbAtReq(o)),
        (this._start = Date.now()),
        (this._data = null == n ? void 0 : n[0]),
        t.apply(this, n)
      );
    };
  }
  function yn(r) {
    return function () {
      for (var n, e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return (
        (n = j(e, 2)),
        (this._method = n[0]),
        (this._url = n[1]),
        r.apply(this, e)
      );
    };
  }
  function wn(n, e, t, r) {
    D(n, "open", yn)(),
      D(n, "setRequestHeader", mn)(),
      D(n, "send", gn)(e, t, r);
  }
  var bn = function (n, e) {
    if ((void 0 === n && (n = P() && A()), void 0 === e && (e = H()), n)) {
      var s = hn(e);
      return function (c, f) {
        var n;
        !c.autoWrap ||
          ((n = XMLHttpRequest && XMLHttpRequest.prototype) && wn(n, c, f, s));
        return [
          function (n, e, t) {
            return (
              (i = e = void 0 === e ? c : e),
              (u = t = void 0 === t ? f : t),
              (a = s),
              (r.prototype = new (o = n)()),
              [
                "DONE",
                "HEADERS_RECIEVED",
                "LOADING",
                "OPENED",
                "UNSENT",
              ].forEach(function (n) {
                r[n] = o[n];
              }),
              r
            );
            function r() {
              var n = new o();
              return wn(n, i, u, a), n;
            }
            var o, i, u, a;
          },
        ];
      };
    }
  };
  function En(n, e, t) {
    e = null === (n = n.config()) || void 0 === n ? void 0 : n.plugins[e];
    return E(e) ? l(l({}, t), e) : !!e && t;
  }
  var _n = function (e, t) {
      var n = e.config(),
        r = { url: Q(), pid: n.pid, view_id: n.viewId };
      return function (n) {
        e.report(l(l({}, n), { overrides: l(l({}, r), (t && t(n)) || {}) }));
      };
    },
    Sn = "ajax",
    Tn = {
      autoWrap: !0,
      hookCbAtReq: w,
      ignoreUrls: [],
      collectBodyOnError: !1,
    },
    Dn = function (r) {
      return function (e) {
        if (!e) return e;
        var n = r.config(),
          t = { url: Q(), pid: n.pid, view_id: n.viewId };
        return function (n) {
          e(
            l(l({}, n), {
              overrides: l(l({}, t), {
                timestamp: n.payload.request.timestamp,
              }),
            })
          );
        };
      };
    };
  var Ln = function (f) {
      if ((f = void 0 === f ? M() : f))
        return function (n, e) {
          var t,
            r = n.maxBreadcrumbs,
            o = n.onAddBreadcrumb,
            i = n.onMaxBreadcrumbs,
            u = n.dom,
            a = j(rn(100), 2),
            n = a[0],
            a = a[1],
            r = j(
              (function (e, t, r) {
                void 0 === e && (e = 20),
                  void 0 === t && (t = w),
                  void 0 === r &&
                    (r = function (n, e) {
                      return n.slice(-e);
                    });
                var o = [];
                return [
                  function () {
                    return o;
                  },
                  function (n) {
                    t(n) &&
                      ((n = l(l({}, n), {
                        timestamp: n.timestamp || Date.now(),
                      })),
                      (o =
                        0 <= e && o.length + 1 > e
                          ? r(g(g([], j(o), !1), [n], !1), e)
                          : g(g([], j(o), !1), [n], !1)));
                  },
                ];
              })(r, o, i),
              2
            ),
            o = r[0],
            i = r[1],
            r =
              ((t = i),
              function (n) {
                var e;
                try {
                  e = n.event.target ? tn(n.event.target) : tn(n.event);
                } catch (n) {
                  e = "<unknown>";
                }
                0 !== e.length &&
                  t({ type: "dom", category: "ui." + n.name, message: e });
              }),
            c = [];
          u &&
            (c.push(n("click", on(r, "dom"))),
            c.push(a(on(r, "dom"))),
            f.addEventListener("click", c[0]),
            f.addEventListener("keypress", c[1]));
          return [
            o,
            i,
            function () {
              f.removeEventListener("click", c[0]),
                f.removeEventListener("keypress", c[1]);
            },
          ];
        };
    },
    xn = "breadcrumb",
    Rn = { maxBreadcrumbs: 20, dom: !0 };
  function Cn(n, e) {
    return n instanceof e;
  }
  function jn(e) {
    for (var n = [], t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
    return n.reduce(function (t, n) {
      return (
        new e(n).forEach(function (n, e) {
          return !cn(e, n) && (t[e] = n);
        }),
        t
      );
    }, {});
  }
  function kn(n, e, t) {
    return Cn(n, t) ? n.body : null == e ? void 0 : e.body;
  }
  function On(n, e, t, r) {
    return {
      method: (function (n, e, t) {
        e = (e && e.method) || "get";
        return (e = Cn(n, t) ? n.method || e : e).toLowerCase();
      })(e, t, r),
      timestamp: Date.now(),
      url: V(n),
    };
  }
  function Nn(f, s, l, d, p, v) {
    return function (o, i) {
      var n,
        e,
        t,
        r = f(o, (i = void 0 === i ? {} : i)),
        t =
          ((e = !1),
          (t = ""),
          (t = Cn((n = o), p) ? n.url : n),
          (t = !(e = void 0 !== e && e) && h(t) ? t.split("?")[0] : t));
      if (
        !(function (n) {
          if (h(n)) {
            var e = j(n.split(":"), 2),
              n = e[0];
            return !e[1] || "http" === n || "https" === n;
          }
        })(t) ||
        vn(s.ignoreUrls, t)
      )
        return r;
      var u = s.hookCbAtReq(l),
        a = {
          api: "fetch",
          request: On(o instanceof p ? o.url : o, o, i, p),
          response: { is_custom_error: !1 },
          duration: 0,
        };
      try {
        a.request.headers = jn(d, o.headers, i.headers);
      } catch (n) {
        X(n);
      }
      var c = function () {
        u && u({ ev_type: "http", payload: a });
      };
      return (
        r.then(
          function (n) {
            var e;
            try {
              (a.response.status = n.status || 0),
                (a.response.headers = jn(d, n.headers)),
                (a.duration = Date.now() - a.request.timestamp);
              var t = s.collectBodyOnError,
                r = s.extraExtractor;
              try {
                r &&
                  n
                    .clone()
                    .json()
                    .then(function (n) {
                      n = r(n, a);
                      n && ((a.extra = n), (a.response.is_custom_error = !0));
                    });
              } catch (n) {}
              t &&
                400 <= n.status &&
                (a.request.body =
                  null === (e = kn(o, i, p)) || void 0 === e
                    ? void 0
                    : e.toString());
              setTimeout(function () {
                (a.response.timing = v(n.url)), c();
              }, 100);
            } catch (n) {
              X(n);
            }
          },
          function () {
            var n;
            try {
              (a.response.status = 0),
                (a.duration = Date.now() - a.request.timestamp),
                s.collectBodyOnError &&
                  (a.request.body =
                    null === (n = kn(o, i, p)) || void 0 === n
                      ? void 0
                      : n.toString());
            } catch (n) {
              X(n);
            }
            c();
          }
        ),
        r
      );
    };
  }
  var qn = function (n, i, u, e) {
      if (
        (void 0 === n && (n = U() && A()),
        void 0 === i && (i = window.Headers),
        void 0 === u && (u = window.Request),
        void 0 === e && (e = H()),
        n && i && u)
      ) {
        var a = hn(e);
        return function (r, o) {
          r.autoWrap && D(n, "fetch", Nn)(r, o, i, u, a);
          return [
            function (n, e, t) {
              return Nn(
                n,
                (e = void 0 === e ? r : e),
                (t = void 0 === t ? o : t),
                i,
                u,
                a
              );
            },
          ];
        };
      }
    },
    In = "fetch",
    An = {
      autoWrap: !0,
      hookCbAtReq: w,
      ignoreUrls: [],
      collectBodyOnError: !1,
    };
  function Mn(n) {
    var e, t, r;
    return (
      !(function (n) {
        switch (Object.prototype.toString.call(n)) {
          case "[object Error]":
          case "[object Exception]":
          case "[object DOMError]":
          case "[object DOMException]":
            return 1;
          default:
            return n instanceof Error;
        }
      })(n)
        ? (i(n) || o(n) || h(n)) && (e = { message: s(n) })
        : ((r = Fn),
          (e =
            (t = n) && E(t)
              ? r.reduce(function (n, e) {
                  return (n[e] = t[e]), n;
                }, {})
              : t)),
      e
    );
  }
  function Bn(n) {
    return Mn(n.error);
  }
  function Hn(n) {
    var e;
    try {
      var t = void 0;
      if (
        ("reason" in n
          ? (t = n.reason)
          : "detail" in n && "reason" in n.detail && (t = n.detail.reason),
        t)
      ) {
        var r = Mn(t);
        return l(l({}, r), {
          name:
            null !== (e = r && r.name) && void 0 !== e
              ? e
              : "UnhandledRejection",
        });
      }
    } catch (n) {}
  }
  function Pn(n) {
    return "[object ErrorEvent]" === Object.prototype.toString.call(n)
      ? Bn(n)
      : ("[object PromiseRejectionEvent]" === Object.prototype.toString.call(n)
          ? Hn
          : Mn)(n);
  }
  function Un(e) {
    function i(n) {
      return _(n)
        ? n._w_ ||
            (n._w_ = function () {
              try {
                return (n.handleEvent || n).apply(
                  this,
                  [].map.call(arguments, i)
                );
              } catch (n) {
                throw (t && e(Mn(n)), n);
              }
            })
        : n;
    }
    var t = !0;
    return (
      zn.forEach(function (n) {
        return (
          window[n] &&
          D(window, n, function (r) {
            return function (n) {
              for (var e = [], t = 1; t < arguments.length; t++)
                e[t - 1] = arguments[t];
              return r && r.call.apply(r, g([this, i(n)], j(e), !1));
            };
          })()
        );
      }),
      D(XMLHttpRequest.prototype, "send", function (r) {
        return function () {
          for (var e = this, n = [], t = 0; t < arguments.length; t++)
            n[t] = arguments[t];
          return (
            Yn.forEach(function (n) {
              return e[n] && D(e, n, i)();
            }),
            r.apply(this, n)
          );
        };
      })(),
      Xn.forEach(function (n) {
        n = window[n] && window[n].prototype;
        n &&
          n[Jn] &&
          (D(n, Jn, function (o) {
            return function (n, e, t) {
              try {
                var r = e.handleEvent;
                _(r) && (e.handleEvent = i(r));
              } catch (n) {}
              return o && o.call(this, n, i(e), t);
            };
          })(),
          D(n, "removeEventListener", function (r) {
            return function (n, e, t) {
              return (
                null != e && e._w_ && r.call(this, n, e._w_, t),
                r.call(this, n, e, t)
              );
            };
          })());
      }),
      function () {
        return (t = !1);
      }
    );
  }
  function Wn(n, e) {
    return n && e && n === e;
  }
  function Gn() {
    var r;
    return function (n) {
      try {
        if (
          ((t = r),
          !(!(e = n) || !t) &&
            !(!Wn(e.message, t.message) && !Wn(e.stack, t.stack)))
        )
          return void (r = n);
      } catch (n) {
        X(n);
      }
      var e, t;
      return (r = n);
    };
  }
  var Fn = ["name", "message", "stack", "filename", "lineno", "colno"],
    Xn = [
      "EventTarget",
      "Window",
      "Node",
      "ApplicationCache",
      "ChannelMergerNode",
      "EventSource",
      "FileReader",
      "HTMLUnknownElement",
      "IDBDatabase",
      "IDBRequest",
      "IDBTransaction",
      "MessagePort",
      "Notification",
      "SVGElementInstance",
      "Screen",
      "TextTrack",
      "TextTrackCue",
      "TextTrackList",
      "WebSocket",
      "Worker",
      "XMLHttpRequest",
      "XMLHttpRequestEventTarget",
      "XMLHttpRequestUpload",
    ],
    zn = [
      "setTimeout",
      "setInterval",
      "requestAnimationFrame",
      "requestIdleCallback",
    ],
    Yn = ["onload", "onerror", "onprogress", "onreadystatechange"],
    Jn = "addEventListener",
    $n = function (d) {
      if ((d = void 0 === d ? A() : d))
        return function (n, r) {
          var e,
            t,
            o = n.ignoreErrors,
            i = n.onerror,
            u = n.onunhandledrejection,
            a = n.dedupe,
            n = n.captureGlobalAsync,
            c = m(o),
            f = [],
            s = Gn(),
            l = function (n, e, t) {
              n = a ? s(n) : n;
              r &&
                n &&
                ((c && c.test(n.message)) ||
                  r({
                    ev_type: "js_error",
                    payload: { error: n, breadcrumbs: [], extra: e, react: t },
                  }));
            };
          i &&
            (d.addEventListener(
              "error",
              (e = function (n) {
                return l(Bn(n));
              })
            ),
            f.push(function () {
              return d.removeEventListener("error", e);
            })),
            u &&
              (d.addEventListener(
                "unhandledrejection",
                (t = function (n) {
                  debugger
                  return l(Hn(n));
                })
              ),
              f.push(function () {
                return d.removeEventListener("unhandledrejection", t);
              })),
            n && f.push(Un(l));
          return [
            function (n, e, t) {
              return l(Pn(n), e, t);
            },
            function () {
              f.forEach(function (n) {
                return n();
              });
            },
          ];
        };
    },
    Vn = "jsError",
    Kn = {
      ignoreErrors: [],
      onerror: !0,
      onunhandledrejection: !0,
      captureGlobalAsync: !1,
      dedupe: !0,
    };
  var Qn = function (y, w, b) {
      if (
        (void 0 === y && (y = A()),
        void 0 === w && (w = B()),
        void 0 === b && (b = A() && window.history),
        y && w)
      )
        return function (n, t) {
          var r,
            e,
            o,
            i,
            u,
            a,
            c,
            f,
            s = n.sendInit,
            l = n.initPid,
            d = n.routeMode,
            p = n.extractPid,
            n = n.onPidUpdate,
            v = [],
            h =
              "manual" === d
                ? function () {
                    return "";
                  }
                : ((r = d),
                  function (n) {
                    var e;
                    return "hash" === r
                      ? (null === (e = K(n).hash) || void 0 === e
                          ? void 0
                          : e.replace(/^#/, "")) || "/"
                      : K(n).path;
                  }),
            m = p || function () {},
            p = j(
              (function (r, n, e, o) {
                var i = e,
                  u = n;
                o && o(n);
                return [
                  function (n, e, t) {
                    "user_set" !== n && e !== i
                      ? ((i = e), (u = null != t ? t : i), o && o(u), r(n, u))
                      : "user_set" === n &&
                        e !== u &&
                        ((u = e), o && o(u), r(n, u));
                  },
                  function () {
                    n && r("init", n);
                  },
                ];
              })(
                function (n, e) {
                  t &&
                    t({ ev_type: "pageview", payload: { pid: e, source: n } });
                },
                l ||
                  ((e = w.href),
                  null !== (o = m(e)) && void 0 !== o ? o : h(e)),
                h(w.href),
                n
              ),
              2
            ),
            g = p[0],
            l = p[1],
            n = g.bind(null, "user_set");
          "manual" !== d &&
            ((i = j(
              ((c = function (n, e) {
                return g(n, h(e), m(e));
              }),
              (f = ""),
              [
                function (n, e) {
                  e !== f && c(n, (f = e));
                },
              ]),
              1
            )[0]),
            (u = function () {
              return i("history", w.href);
            }),
            b &&
              ((p = function (t) {
                return function () {
                  for (var n = [], e = 0; e < arguments.length; e++)
                    n[e] = arguments[e];
                  try {
                    t.apply(b, n);
                  } finally {
                    u();
                  }
                };
              }),
              v.push(L(b, "pushState", p)(), L(b, "replaceState", p)())),
            "hash" === d
              ? ((a = function () {
                  return i("hash", w.href);
                }),
                y.addEventListener("hashchange", a, !0),
                v.push(function () {
                  return y.removeEventListener("hashchange", a, !0);
                }))
              : (y.addEventListener("popstate", u, !0),
                v.push(function () {
                  return y.removeEventListener("popstate", u, !0);
                })));
          return (
            s && l(),
            [
              n,
              function () {
                v.forEach(function (n) {
                  return n();
                });
              },
            ]
          );
        };
    },
    Zn = "pageview",
    ne = { sendInit: !0, routeMode: "history" };
  var ee = "resource",
    te = ["xmlhttprequest", "fetch", "beacon"],
    re = function (f, s, l) {
      if (
        (void 0 === f && (f = H()),
        void 0 === s && (s = n()),
        void 0 === l && (l = G()),
        f)
      )
        return function (n, t) {
          var e = n.ignoreUrls,
            r = n.slowSessionThreshold,
            o = n.ignoreTypes,
            i = m(e),
            u = [],
            a = function (n, e) {
              void 0 === e && (e = !1),
                (n = n.filter(function (n) {
                  return !(
                    S(null != o ? o : te, n.initiatorType) ||
                    (null != i && i.test(n.name))
                  );
                })),
                t &&
                  n.length &&
                  n.forEach(function (n) {
                    t([{ ev_type: "resource", payload: n }, e]);
                  });
            },
            c = j(Y(f), 3)[2];
          un(function () {
            var n, e;
            a(
              c(ee),
              (function () {
                if (!l) return !1;
                var n = l.loadEventEnd - l.navigationStart;
                return r < n;
              })()
            ),
              (n = j(
                J(s, function (n, e, t) {
                  return 0 === e && a(t);
                }),
                2
              )),
              (e = n[0]),
              (n = n[1]),
              e(ee),
              u.push(n);
          });
          return [
            function () {
              u.forEach(function (n) {
                return n();
              });
            },
          ];
        };
    },
    oe = "resource",
    ie = { ignoreUrls: [], slowSessionThreshold: 4e3 };
  function ue(n) {
    return (
      (n = "link" === (e = n).tagName.toLowerCase() ? "href" : "src"),
      _(e.getAttribute) ? e.getAttribute(n) || "" : e[n] || ""
    );
    var e;
  }
  var ae = function (l, d, p) {
      if (
        (void 0 === l && (l = A()),
        void 0 === d && (d = H()),
        void 0 === p &&
          (p =
            null === location || void 0 === location ? void 0 : location.href),
        l)
      )
        return function (n, i) {
          var e = n.ignoreUrls,
            t = n.includeUrls,
            u = n.dedupe,
            a = m(t),
            c = m(e),
            f = j(Y(d), 5)[4],
            s = void 0,
            r = function (n) {
              var e, t, r, o;
              (p && n.url === p) ||
                (a && !a.test(n.url)) ||
                (c && c.test(n.url)) ||
                ((n.url || (n.xpath && n.xpath !== en)) &&
                  ((u && n.url === s) ||
                    ((s = n.url),
                    (t = f),
                    (r = (e = n).url),
                    (o = n.tagName),
                    (e = n.xpath),
                    (r = V(r)),
                    (t = t(r)[0]),
                    (t = {
                      type: o.toLowerCase(),
                      url: r,
                      xpath: e,
                      timing: t,
                    }),
                    i && i({ ev_type: "resource_error", payload: t }))));
            },
            o = function (n) {
              n = n || l.event;
              !n ||
                ((n = (function (n) {
                  var e = n.target || n.srcElement;
                  if (e) {
                    var t = e.tagName;
                    if (t && h(t)) {
                      n = ue(e);
                      return { url: n, tagName: t, xpath: n ? void 0 : tn(e) };
                    }
                  }
                })(n)) &&
                  r(n));
            };
          l.addEventListener("error", o, !0);
          return [
            r,
            function () {
              l.removeEventListener("error", o, !0);
            },
          ];
        };
    },
    ce = "resourceError",
    fe = { includeUrls: [], ignoreUrls: [], dedupe: !0 };
  function se(n, e) {
    return l({ name: n, value: e }, me);
  }
  function le(n) {
    return { ev_type: "performance", payload: n };
  }
  function de(i, u) {
    return (
      void 0 === i && (i = n()),
      void 0 === u && (u = H()),
      function (n, e) {
        var t = se("fid", 0),
          r = j(fn(e), 1)[0];
        if (!u || !i) return (t.isSupport = !1), void r(t);
        function o(n) {
          var e = n.processingStart,
            n = n.startTime;
          (t.value = e - n), r(t);
        }
        e = (0, j(Y(u), 3)[2])(ge)[0];
        e ? o(e) : (0, j(J(i, o, !0), 1)[0])(ge);
      }
    );
  }
  function pe(a) {
    return (
      void 0 === a && (a = n()),
      function (n, e) {
        var n = n.precollect,
          t = se("lcp", 0),
          r = j(fn(e), 1)[0];
        if (!a) return (t.isSupport = !1), void r(t);
        (n.entries || []).forEach(function (n) {
          var e = n.entryType,
            n = n.startTime;
          e === ye && (t.value = n);
        });
        var e = j(
            J(a, function (n) {
              n = n.startTime;
              t.value = n;
            }),
            2
          ),
          n = e[0],
          o = e[1];
        n(ye);
        var i = function () {
            o(),
              we.forEach(function (n) {
                window.removeEventListener(n, u, !0);
              });
          },
          u = function () {
            r(t), i();
          };
        we.forEach(function (n) {
          window.addEventListener(n, u, !0);
        });
        an(function () {
          (t.isSupport = !1), u();
        });
        sn(function () {
          (t.isBounced = !0), u();
        });
      }
    );
  }
  function ve(c, f) {
    return (
      void 0 === c && (c = n()),
      void 0 === f && (f = H()),
      function (n, e) {
        var t = n.metricName,
          r = n.entryName,
          o = se(t, 0),
          i = j(fn(e), 1)[0];
        if (!f || !c) return (o.isSupport = !1), void i(o);
        var u,
          a = function (n) {
            n = n.startTime;
            (o.value = n), i(o);
          },
          t = (0, j(Y(f), 5)[4])(r)[0];
        t
          ? a(t)
          : ((t = (e = j(
              J(c, function (n) {
                n.name === r && (a(n), u());
              }),
              2
            ))[0]),
            (u = e[1]),
            t("paint"),
            an(function () {
              (o.isSupport = !1), i(o), u();
            }),
            sn(function () {
              (o.isBounced = !0), i(o), u();
            }));
      }
    );
  }
  function he(r, a) {
    return (
      void 0 === r && (r = n()),
      void 0 === a && (a = H()),
      function (n, e) {
        var t = se("mpfid", 0),
          o = j(fn(e), 1)[0];
        if (!r) return (t.isSupport = !1), o(t), [b];
        var i = [],
          e = n.precollect;
        e &&
          (e.entries || []).forEach(function (n) {
            n.entryType === Ee && i.push(n);
          });
        var n = j(
            J(r, function (n) {
              return i.push(n);
            }),
            2
          ),
          e = n[0],
          u = n[1];
        e(Ee);
        return [
          function () {
            u();
            var n = (0, j(Y(a), 5)[4])(be)[0],
              r = (n && n.startTime) || 0;
            (t.value = i.reduce(function (n, e) {
              var t = e.duration,
                e = e.startTime;
              return n < t && r < e ? t : n;
            }, 0)),
              o(t);
          },
        ];
      }
    );
  }
  var me = {
      isSupport: !0,
      isPolyfill: !1,
      isBounced: !1,
      isCustom: !1,
      type: "perf",
    },
    ge = "first-input",
    ye = "largest-contentful-paint",
    we = ["keydown", "click"],
    be = "first-contentful-paint",
    Ee = "longtask",
    _e = function (d) {
      return (
        void 0 === d && (d = H()),
        function (n, r) {
          var e,
            o,
            t,
            i = n.precollect,
            u = n.fp,
            a = n.fcp,
            c = n.lcp,
            f = n.fid,
            s = n.mpfid,
            l = n.timing,
            n = function (n) {
              r && r({ ev_type: "performance", payload: n });
            };
          u && $(ve, { metricName: "fp", entryName: "first-paint" }, n),
            a && $(ve, { metricName: "fcp", entryName: be }, n),
            c && $(pe, { precollect: i }, n),
            f && $(de, 0, n),
            s &&
              ((e = j($(he, { precollect: i }, n), 1)[0]),
              un(function () {
                return setTimeout(e, 200);
              })),
            l &&
              ((o = j(Y(d), 3)[2]),
              (t = j(
                fn(function (n) {
                  var e = (d && d.timing) || void 0,
                    t = o("navigation")[0];
                  r &&
                    r({
                      ev_type: "performance_timing",
                      payload: {
                        isBounced: n,
                        timing: e,
                        navigation_timing: t,
                      },
                    });
                }),
                1
              )[0]),
              un(function () {
                t(!1);
              }),
              sn(function () {
                t(!0);
              }));
        }
      );
    },
    Se = "layout-shift",
    Te = function (i) {
      return (
        void 0 === i && (i = n()),
        function (n, e) {
          var t = j(n, 1)[0],
            r = se("cls", 0);
          if (!i)
            return (
              (r.isSupport = !1),
              [
                function () {
                  return e && e(r);
                },
                b,
              ]
            );
          function o(n) {
            var e = n.hadRecentInput,
              n = n.value;
            e || (r.value += n);
          }
          (t.entries || []).forEach(function (n) {
            n.entryType === Se && o(n);
          });
          (n = j(J(i, o), 2)), (t = n[0]), (n = n[1]);
          return (
            t(Se),
            [
              function () {
                e && e(r), (r = se("cls", 0));
              },
              n,
            ]
          );
        }
      );
    },
    De = "longtask",
    Le = function (o) {
      return (
        void 0 === o && (o = n()),
        function (n, e) {
          function t(n) {
            e && e({ longtasks: n, type: "pref" });
          }
          var r = (n.precollect || {}).entries,
            n = (void 0 === r ? [] : r).filter(function (n) {
              return n.entryType === De;
            });
          if ((n.length && t(n), !o)) return [b];
          (r = j(
            J(
              o,
              function (n) {
                return t([n]);
              },
              !1
            ),
            2
          )),
            (n = r[0]),
            (r = r[1]);
          return n(De), [r];
        }
      );
    },
    xe = function () {
      return function (n, e) {
        var t = 0,
          r = se("spa_load", 0),
          o = function (n) {
            (r.value = n), e && e(r);
          },
          i = function () {
            o(Date.now() - t), (t = 0);
          };
        return (
          sn(function () {
            t && ((r.isBounced = !0), i());
          }),
          [
            function () {
              t = Date.now();
            },
            i,
          ]
        );
      };
    },
    Re = "performance",
    Ce = { entries: [], observer: void 0 },
    je = {
      fp: !0,
      fcp: !0,
      fid: !0,
      mpfid: !0,
      lcp: !0,
      cls: !0,
      timing: !0,
      longtask: !0,
    };
  function ke(e) {
    function t(n) {
      n < o || !r || (u(), (i = window.setTimeout(r, n - e())), (o = n));
    }
    var r,
      o = -1 / 0,
      i = void 0,
      u = function () {
        return window.clearTimeout(i);
      };
    return [
      function (n, e) {
        (r = n), t(e);
      },
      function () {
        u(), (r = void 0);
      },
      t,
    ];
  }
  function Oe(n, t) {
    var r = ["img", "script", "iframe", "link", "audio", "video", "source"],
      e = (n = j(
        z(n, function (n) {
          for (var e = 0; e < n.length; e++)
            (("childList" === n[e].type &&
              (function n(e, t) {
                for (var r = 0; r < e.length; r++)
                  if (
                    S(t, e[r].nodeName.toLowerCase()) ||
                    (e[r].children && n(e[r].children, t))
                  )
                    return 1;
              })(n[e].addedNodes, r)) ||
              ("attributes" === n[e].type &&
                S(r, n[e].target.nodeName.toLowerCase()))) &&
              t(n[e]);
        }),
        2
      ))[0];
    return [
      function () {
        return e(document, {
          attributes: !0,
          childList: !0,
          subtree: !0,
          attributeFilter: ["href", "src"],
        });
      },
      n[1],
    ];
  }
  function Ne(n) {
    var n = (e = n || {}).domContentLoadedEventEnd,
      e = e.navigationStart;
    return n ? n - (void 0 === e ? 0 : e) : null;
  }
  function qe(t) {
    return function () {
      for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
      return (this._method = n[0]), t.apply(this, n);
    };
  }
  function Ie(r, o, i) {
    var u = 0;
    return function () {
      for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
      if ("GET" !== this._method) return r.apply(this, n);
      var t = (u += 2);
      return (
        o(t, Date.now()),
        L(this, "onreadystatechange", function (e) {
          return function (n) {
            e && e.call(this, n), 4 === this.readyState && i(t);
          };
        })(),
        r.apply(this, n)
      );
    };
  }
  function Ae(i, u, a) {
    var c = 1;
    return function () {
      for (var n, o = [], e = 0; e < arguments.length; e++) o[e] = arguments[e];
      return "GET" !==
        ((null === (n = o[0]) || void 0 === n ? void 0 : n.method) ||
          (null === (n = o[1]) || void 0 === n ? void 0 : n.method) ||
          "GET")
        ? i.apply(void 0, g([], j(o), !1))
        : new Promise(function (e, t) {
            var r = (c += 2);
            u(r, Date.now()),
              i.apply(void 0, g([], j(o), !1)).then(
                function (n) {
                  a(r), e(n);
                },
                function (n) {
                  a(r, n), t(n);
                }
              );
          });
    };
  }
  function Me(_, S, T, D) {
    return function (n, t, e) {
      var c,
        f,
        r,
        o,
        i,
        u,
        a,
        s,
        l = j(
          [
            (c = []),
            (f = []),
            function (u, a) {
              return function (n) {
                var e = n.startTime,
                  t = n.duration,
                  r = n.fetchStart,
                  o = n.responseEnd,
                  i = n.entryType;
                "longtask" === i
                  ? ((n.start = e), (n.end = e + t), c.push(n), u && u(n))
                  : "resource" === i &&
                    (f.push({ start: r, end: o }), a && a(n));
              };
            },
          ],
          3
        ),
        d = l[0],
        p = l[1],
        v = l[2],
        h = j(
          ((r = _),
          (o = S),
          (h = j(
            [
              (i = {}),
              function (n, e) {
                return (i[n] = e);
              },
              function (n) {
                return delete i[n];
              },
            ],
            3
          )),
          (y = h[0]),
          (l = h[1]),
          (h = h[2]),
          (u = o && L(o.prototype, "open", qe)()),
          (a = o && L(o.prototype, "send", Ie)(l, h)),
          (s = r && L(r, "fetch", Ae)(l, h)),
          [
            y,
            function () {
              u && u(!0), a && a(!0), s && s(!0);
            },
          ]),
          2
        ),
        m = h[0],
        g = h[1],
        y = j(
          (D &&
            Oe(D, function () {
              return t(e() + 5e3);
            })) ||
            [],
          2
        ),
        h = y[0],
        w = y[1];
      h && h();
      function b() {
        return (function (n, e, t) {
          if (2 < n.length) return t();
          for (var r = [], o = 0; o < e.length; o++)
            r.push([e[o].start, 0], [e[o].end, 1]);
          for (o = 0; o < n.length; o++) r.push([n[o], 0]);
          r.sort(function (n, e) {
            return n[0] - e[0];
          });
          for (var i = n.length, o = r.length - 1; 0 <= o; o--) {
            var u = j(r[o], 2),
              a = u[0];
            switch (u[1]) {
              case 0:
                i--;
                break;
              case 1:
                if (2 < ++i) return a;
            }
          }
          return 0;
        })(
          (function (n) {
            for (var e = Object.keys(n), t = [], r = 0; r < e.length; r++) {
              var o = n[e[r]];
              "number" == typeof o && t.push(o);
            }
            return t;
          })(m),
          p,
          e
        );
      }
      var y = j(
          J(
            T,
            v(
              function (n) {
                var e = n.startTime,
                  n = n.duration;
                return t(e + n + 5e3);
              },
              function () {
                return t(b() + 5e3);
              }
            ),
            !1,
            function () {
              return (d.notSupport = !0);
            }
          ),
          2
        ),
        h = y[0],
        E = y[1];
      return (
        h("longtask", "resource"),
        n.forEach(v()),
        [
          d,
          function () {
            g(), E(), w && w();
          },
          b,
        ]
      );
    };
  }
  var Be = function (_, S, T, D, L) {
      return (
        void 0 === _ && (_ = P()),
        void 0 === S && (S = U() && A()),
        void 0 === T && (T = n()),
        void 0 === D && (D = W()),
        void 0 === L && (L = H()),
        function (n, e, t, r) {
          var o = se("tti", 0),
            i = j(
              fn(function (n) {
                n = le(n);
                e && e(n);
              }),
              1
            )[0];
          if (!(_ && S && T && L))
            return (
              (o.isSupport = !1),
              i(o),
              [
                function () {
                  return 0;
                },
              ]
            );
          var u = n.precollect,
            a = n.isAsync,
            a = void 0 === a ? 0 : a,
            n = n.minValue,
            c = void 0 === n ? null : n,
            n = u || {},
            u = n.entries,
            f = void 0 === u ? [] : u,
            s = n.observer,
            u = j(Y(L), 5),
            l = u[0],
            d = u[1],
            p = u[4],
            n = j(ke(d), 3),
            u = n[0],
            v = n[1],
            h = n[2],
            a = j(Me(S, _, T, D)(a ? [] : f, h, d), 3),
            m = a[0],
            g = a[1],
            y = a[2],
            w = function () {
              v(), g(), t && t(), s && s.disconnect(), (f.length = 0);
            },
            b = function (n) {
              var e = p("first-contentful-paint")[0],
                e = (function (n, e, t, r, o) {
                  if (r - t < 5e3) return null;
                  o = 0 === o.length ? n : o[o.length - 1].end;
                  return r - o < 5e3 ? null : Math.max(o, e);
                })(
                  (e ? e.startTime : Ne(l)) || 0,
                  c || Ne(l) || 0,
                  y(),
                  d() + (n ? 0 : 5e3),
                  m
                );
              return n ? (e ? (w(), void n(e)) : h(d() + 1e3)) : (w(), e);
            };
          if ((r && r(m, h, o), m.notSupport))
            return (
              (o.isSupport = !1),
              i(o),
              [
                function () {
                  return 0;
                },
              ]
            );
          function E(n) {
            (o.value = n), i(o);
          }
          r = m[m.length - 1];
          u(function () {
            return b(E);
          }, Math.max(y() + 5e3, r ? r.end : 0));
          return [
            function () {
              return b() || 0;
            },
          ];
        }
      );
    },
    He = "tti";
  function Pe(n, t, e, r) {
    if (!n || -1 < r.indexOf(n.tagName)) return 0;
    var o = n.children;
    if (
      (o = [].slice.call(void 0 === o ? [] : o).reduceRight(function (n, e) {
        return n + Pe(e, t + 1, 0 < n, r);
      }, 0)) <= 0 &&
      !e
    ) {
      if (!_(n.getBoundingClientRect)) return 0;
      (e = n.getBoundingClientRect() || {}), (n = e.top), (e = e.height);
      if (n > window.innerHeight || e <= 0) return 0;
    }
    return o + 1 + 0.5 * t;
  }
  var Ue = ["SCRIPT", "STYLE", "META", "HEAD"],
    We = function (h, m, g, y, w) {
      var n;
      return (
        void 0 === h && (h = M()),
        void 0 === m && (m = W()),
        void 0 === g &&
          (g = null === (n = G()) || void 0 === n ? void 0 : n.navigationStart),
        void 0 === y &&
          (y = (function () {
            if (A() && "requestAnimationFrame" in window)
              return window.requestAnimationFrame;
          })()),
        void 0 === w &&
          (w = (function () {
            if (A() && "cancelAnimationFrame" in window)
              return window.cancelAnimationFrame;
          })()),
        function (n, e) {
          var t = n.renderType,
            r = se("fmp", 0),
            o = function (n) {
              n = le(n);
              e && e(n);
            };
          if ("SSR" === t)
            return $(ve, { metricName: "fmp", entryName: be }, o), [b];
          var i = j(fn(o), 1)[0];
          if (!h || !m || !g) return (r.isSupport = !1), i(r), [b];
          function u() {
            return d.push({
              time: Date.now() - l,
              score: Pe(h && h.body, 1, !1, Ue),
            });
          }
          var a,
            c,
            f,
            s,
            l = Date.now(),
            d = [],
            p = j(
              ((a = h),
              (n = w),
              (t = !0),
              (f =
                !_((o = y)) || (t && a && a.hidden)
                  ? function (n) {
                      return n(0), 0;
                    }
                  : o),
              (s = _(n) ? n : b),
              [
                function (n) {
                  c && s(c), (c = f(n));
                },
                f,
                s,
              ]),
              1
            )[0],
            o = j(
              z(m, function () {
                return p(u);
              }),
              2
            ),
            n = o[0],
            v = o[1],
            o = l - (g || 0);
          return (
            n(h, { subtree: !0, childList: !0 }),
            [
              function (n) {
                void 0 === n && (n = 0), v();
                var e,
                  t,
                  e =
                    ((e = (t = j(void 0 === (e = d) ? [] : e))[0]),
                    ((t = t.slice(1)) &&
                      t.reduce(
                        function (n, e) {
                          var t = j(n, 2),
                            r = t[0],
                            n = t[1],
                            t = e.score - r.score;
                          return [
                            e,
                            e.time >= r.time && n.rate < t
                              ? { time: e.time, rate: t }
                              : n,
                          ];
                        },
                        [e, { time: null == e ? void 0 : e.time, rate: 0 }]
                      )[1].time) ||
                      0);
                (r.value = e ? e + n : 0), i(r);
              }.bind(null, o),
            ]
          );
        }
      );
    },
    Ge = "fmp",
    Fe = { renderType: "CSR" };
  function Xe(D, L, x, R, C) {
    if (
      (void 0 === D && (D = A()),
      void 0 === L && (L = M()),
      void 0 === x && (x = n()),
      void 0 === R && (R = W()),
      void 0 === C && (C = H()),
      L && D)
    )
      return function (n, e) {
        var t,
          r,
          o,
          i,
          u,
          a,
          c = n.threshold,
          f = n.screenshot,
          s = n.rootSelector,
          l = n.autoDetect,
          d = n.ssUrl,
          p = Qe(D),
          v = j(Y(C), 2)[1],
          h = 0,
          m = !1,
          g = function (n) {
            t &&
              e &&
              e({
                ev_type: "blank_screen",
                payload: {
                  timestamp: t[0],
                  score: t[1],
                  screenshot: n,
                  error: r,
                },
              });
          },
          y =
            ((i = function () {
              t && !m && ((m = !0), b(), f ? et(g, d, D, L) : g());
            }),
            function () {
              u ||
                ((a = Date.now()),
                (u = D.setTimeout(
                  function () {
                    (u = 0), a < h || i();
                  },
                  v() > Je ? Ve : $e
                )));
            });
        sn(function () {
          m || g();
        });
        function w() {
          o && clearTimeout(o),
            (o = D.setTimeout(function () {
              p(function () {
                D.requestAnimationFrame(function () {
                  var n = s ? L.querySelector(s) : L.body;
                  n &&
                    ((n = nt(n, 0, 0, c)) < c
                      ? ((t = [Date.now(), n]), y())
                      : (t = void 0));
                });
              });
            }, 1e3));
        }
        var b = function () {
            clearTimeout(o), S && S(), T && T();
          },
          E = j(z(R, w), 2),
          _ = E[0],
          S = E[1],
          n = j(
            J(x, function (n, e, t) {
              return o && 1 < t.length && w();
            }),
            2
          ),
          E = n[0],
          T = n[1];
        return (
          l &&
            (_(null === (_ = M()) || void 0 === _ ? void 0 : _.body, {
              subtree: !0,
              childList: !0,
            }),
            E("longtask", "resource"),
            w()),
          [
            b,
            function (n) {
              m ||
                ((h = Date.now()),
                r && h - r.timestamp > Ke && (r = void 0),
                (r = Ze(r, n)));
            },
            w,
          ]
        );
      };
  }
  var ze = ["SCRIPT", "STYLE", "META", "HEAD"],
    Ye = ["js_error", "http", "resource_error"],
    Je = 1e4,
    $e = 8e3,
    Ve = 2e3,
    Ke = 1e4,
    Qe = function (e) {
      return (
        e.requestIdleCallback ||
        function (n) {
          return e.setTimeout(n, 1);
        }
      );
    },
    Ze = function (n, e) {
      if (-1 === Ye.indexOf(e.ev_type)) return n;
      if ("http" === e.ev_type && e.payload.response.status < 400) return n;
      if (n && Ye.indexOf(n.type) < Ye.indexOf(e.ev_type)) return n;
      var t = "";
      switch (e.ev_type) {
        case "js_error":
          t = e.payload.error.message;
          break;
        case "http":
          t = e.payload.request.url;
          break;
        case "resource_error":
          t = e.payload.url;
      }
      return { type: e.ev_type, message: t, timestamp: Date.now() };
    },
    nt = function (t, r, n, o, i) {
      if (
        (void 0 === r && (r = 0),
        void 0 === n && (n = 0),
        void 0 === o && (o = 1.5),
        void 0 === i && (i = ze),
        !t || -1 < i.indexOf(t.tagName) || o <= n || 4 < r)
      )
        return n;
      var e = (function () {
        if (!r) return 0;
        var n = t.getBoundingClientRect(),
          e = n.top,
          n = n.height;
        return e > innerHeight || n <= 0 ? 0 : 1 / Math.pow(2, r - 1);
      })();
      return [].reduceRight.call(
        t.children,
        function (n, e) {
          return nt(e, r + 1, n, o, i);
        },
        n + e
      );
    },
    et = function (e, n, t, r) {
      if (A() && "Promise" in window && Promise && t && r) {
        if (t.html2canvas) return i();
        var o = r.createElement("script");
        (o.src = n),
          null !== (n = r.head) && void 0 !== n && n.appendChild(o),
          (o.onload = i);
      }
      function i() {
        Qe(t)(function () {
          t.html2canvas(r.body, { scale: 360 / t.innerWidth }).then(function (
            n
          ) {
            e(n.toDataURL("image/jpeg", 0.1));
          });
        });
      }
    },
    tt = "blankScreen";
  var rt = {
    autoDetect: !0,
    threshold: 1.5,
    screenshot: !0,
    ssUrl: "https://apm.volccdn.com/mars-web/apmplus/web/html2canvas.min.js",
  };
  function ot(n) {
    var o, i;
    (i = rt),
      (o = n).on("init", function () {
        var n,
          e,
          t,
          r = En(o, tt, i);
        r &&
          ((r = j($(Xe, r, o.report.bind(o)), 3)),
          (n = r[0]),
          (e = r[1]),
          (r = r[2]),
          o.on(
            "report",
            (t = function (n) {
              return e(n), n;
            })
          ),
          o.on("beforeDestroy", function () {
            n(), o.off("report", t);
          }),
          o.provide("detectBlankScreen", r));
      });
  }
  var it = "custom",
    ut = function (n) {
      if (n && E(n) && n.name && h(n.name)) {
        var e = { name: n.name, type: "event" };
        if ("metrics" in n && E(n.metrics)) {
          var t = n.metrics,
            r = {};
          for (o in t) f(t[o]) && (r[o] = t[o]);
          e.metrics = r;
        }
        if ("categories" in n && E(n.categories)) {
          var o,
            i = n.categories,
            u = {};
          for (o in i) u[o] = s(i[o]);
          e.categories = u;
        }
        return e;
      }
    },
    at = function (n) {
      if (n && E(n) && n.content && h(n.content)) {
        var e = { content: s(n.content), type: "log", level: "info" };
        if (("level" in n && (e.level = n.level), "extra" in n && E(n.extra))) {
          var t,
            r = n.extra,
            o = {},
            i = {};
          for (t in r) f(r[t]) ? (o[t] = r[t]) : (i[t] = s(r[t]));
          (e.metrics = o), (e.categories = i);
        }
        return e;
      }
    };
  function ct(n) {
    return (
      (null == n ? void 0 : n.effectiveType) ||
      (null == n ? void 0 : n.type) ||
      ""
    );
  }
  function ft(n, e) {
    var t = n.common || {};
    return (t.sample_rate = e), (n.common = t), n;
  }
  function st(n, e, t, r, o) {
    return n
      ? ((i = o(r, e)),
        function () {
          return i;
        })
      : function () {
          return t(e);
        };
    var i;
  }
  function lt(n, e, t, r) {
    if (
      void 0 ===
      (n = v(n, e, function (n, e) {
        return n[e];
      }))
    )
      return !1;
    var o,
      e = "boolean" == typeof n ? "bool" : f(n) ? "number" : "string";
    return (function (n, e, t) {
      switch (t) {
        case "eq":
          return S(e, n);
        case "neq":
          return !S(e, n);
        case "gt":
          return n > e[0];
        case "gte":
          return n >= e[0];
        case "lt":
          return n < e[0];
        case "lte":
          return n <= e[0];
        case "regex":
          return Boolean(n.match(new RegExp(e.join("|"))));
        case "not_regex":
          return !n.match(new RegExp(e.join("|")));
        default:
          return !1;
      }
    })(
      n,
      ((o = e),
      r.map(function (n) {
        switch (o) {
          case "number":
            return Number(n);
          case "boolean":
            return "1" === n;
          default:
            return String(n);
        }
      })),
      t
    );
  }
  function dt(e, n) {
    try {
      return "rule" === n.type
        ? lt(e, n.field, n.op, n.values)
        : "and" === n.type
        ? n.children.every(function (n) {
            return dt(e, n);
          })
        : n.children.some(function (n) {
            return dt(e, n);
          });
    } catch (n) {
      return X(n), !1;
    }
  }
  function pt() {
    var t = A();
    return t && t.navigator.sendBeacon
      ? {
          get: function () {},
          post: function (n, e) {
            t.navigator.sendBeacon(n, e);
          },
        }
      : { get: b, post: b };
  }
  var vt = function (n) {
      var e = F(),
        t = ct(e);
      e &&
        (e.onchange = function () {
          t = ct(e);
        }),
        n.on("report", function (n) {
          return l(l({}, n), {
            extra: l(l({}, n.extra || {}), { network_type: t }),
          });
        });
    },
    ht = function (n, e, t, r) {
      if (!e) return w;
      var o = e.sample_rate,
        i = e.include_users,
        u = e.sample_granularity,
        a = e.rules,
        e = e.r,
        e = void 0 === e ? Math.random() : e;
      if (S(i, n))
        return function (n) {
          return ft(n, 1);
        };
      var c,
        f,
        s,
        l,
        d,
        p,
        v,
        u = "session" === u,
        h = st(u, o, t, e, r),
        m =
          ((c = a),
          (f = u),
          (s = o),
          (l = t),
          (d = e),
          (p = r),
          (v = {}),
          Object.keys(c).forEach(function (n) {
            var e = c[n],
              t = e.enable,
              r = e.sample_rate,
              e = e.conditional_sample_rules;
            t
              ? ((v[n] = {
                  enable: t,
                  sample_rate: r,
                  effectiveSampleRate: r * s,
                  hit: st(f, r, l, d, p),
                }),
                e &&
                  (v[n].conditional_hit_rules = e.map(function (n) {
                    var e = n.sample_rate,
                      n = n.filter;
                    return {
                      sample_rate: e,
                      hit: st(f, e, l, d, p),
                      effectiveSampleRate: e * s,
                      filter: n,
                    };
                  })))
              : (v[n] = {
                  enable: t,
                  hit: function () {
                    return !1;
                  },
                  sample_rate: 0,
                  effectiveSampleRate: 0,
                });
          }),
          v);
      return function (n) {
        if (!h()) return !1;
        if (!(n.ev_type in m)) return ft(n, o);
        if (!m[n.ev_type].enable) return !1;
        if (null !== (e = n.common) && void 0 !== e && e.sample_rate) return n;
        var e = m[n.ev_type],
          t = e.conditional_hit_rules;
        if (t)
          for (var r = 0; r < t.length; r++)
            if (dt(n, t[r].filter))
              return !!t[r].hit() && ft(n, t[r].effectiveSampleRate);
        return !!e.hit() && ft(n, e.effectiveSampleRate);
      };
    },
    mt = function (n, e, t) {
      var r = e.url,
        o = e.data,
        i = e.success,
        u = void 0 === i ? b : i,
        i = e.fail,
        a = void 0 === i ? b : i,
        i = e.getResponseText,
        c = void 0 === i ? b : i,
        e = e.withCredentials,
        e = void 0 !== e && e,
        t = new t();
      (t.withCredentials = e),
        t.open(n, r, !0),
        t.setRequestHeader("Content-Type", "application/json"),
        (t.onload = function () {
          null != c && c(this.responseText);
          try {
            var n;
            this.responseText
              ? ((n = JSON.parse(this.responseText)), u(n))
              : u({});
          } catch (n) {
            a(n);
          }
        }),
        (t.onerror = function () {
          a(new Error("Network request failed"));
        }),
        (t.onabort = function () {
          a(new Error("Network request aborted"));
        }),
        t.send(o);
    },
    gt = function () {
      var e = P();
      return e
        ? {
            get: function (n) {
              mt("GET", n, e);
            },
            post: function (n) {
              mt("POST", n, e);
            },
          }
        : { get: b, post: b };
    };
  function yt(n) {
    var e,
      t,
      r,
      o,
      i,
      u,
      a,
      c,
      f =
        ((t = (e = n).transport),
        (r = n.endpoint),
        (o = n.size),
        (i = void 0 === o ? 10 : o),
        (u = void 0 === (e = n.wait) ? 1e3 : e),
        (a = []),
        (c = 0),
        {
          getSize: function () {
            return i;
          },
          getWait: function () {
            return u;
          },
          setSize: function (n) {
            i = n;
          },
          setWait: function (n) {
            u = n;
          },
          getEndpoint: function () {
            return r;
          },
          setEndpoint: function (n) {
            r = n;
          },
          send: function (n) {
            a.push(n),
              a.length >= i && s.call(this),
              clearTimeout(c),
              (c = setTimeout(s.bind(this), u));
          },
          flush: function () {
            clearTimeout(c), s.call(this);
          },
          getBatchData: function () {
            return a.length ? p(a) : "";
          },
          clear: function () {
            clearTimeout(c), (a = []);
          },
        });
    function s() {
      a.length && (t.post({ url: r, data: this.getBatchData() }), (a = []));
    }
    function l(n) {
      d.post(f.getEndpoint(), p([n]));
    }
    var d = pt();
    return (
      sn(function () {
        var n = f.getBatchData();
        n && (d.post(f.getEndpoint(), n), f.clear()), (f.send = l);
      }),
      f
    );
  }
  var wt = {
    build: function (n) {
      return {
        ev_type: n.ev_type,
        payload: n.payload,
        common: l(l({}, n.extra || {}), n.overrides || {}),
      };
    },
  };
  function bt(n) {
    var e,
      t = n.plugins || {};
    for (e in t) t[e] && !E(t[e]) && (t[e] = {});
    return l(l({}, n), { plugins: t });
  }
  function Et(n) {
    return E(n) && "aid" in n;
  }
  function _t(n) {
    return l({}, n);
  }
  function St() {
    var n = A(),
      e = M();
    if (n && e)
      return (
        (null ===
          (e =
            null ===
              (e =
                null === (e = e.currentScript) || void 0 === e
                  ? void 0
                  : e.getAttribute("src")) || void 0 === e
              ? void 0
              : e.match(/globalName=(.+)$/)) || void 0 === e
          ? void 0
          : e[1]) || xt
      );
  }
  function Tt(n) {
    return "APMPLUS" + n;
  }
  function Dt(n) {
    return (
      (function (n) {
        try {
          var e = localStorage.getItem(n),
            t = e;
          return (t = e && "string" == typeof e ? JSON.parse(e) : t);
        } catch (n) {
          return;
        }
      })(Tt(n)) || { userId: N(), deviceId: N(), r: Math.random() }
    );
  }
  function Lt(n) {
    var e = n.aid,
      t = n.userId,
      r = n.deviceId,
      n = n.sample;
    !(function (n, e) {
      try {
        var t = "string" == typeof e ? e : JSON.stringify(e);
        localStorage.setItem(n, t);
      } catch (n) {}
    })(Tt(e), { userId: t, deviceId: r, r: n.r });
  }
  var xt = "APM_PLUS_WEB",
    Rt = "/settings/get/webpro",
    Ct = "/monitor_web/collect",
    jt = [Ct, Rt],
    kt = {
      sample_rate: 1,
      include_users: [],
      sample_granularity: "session",
      rules: {},
    },
    Ot = 20,
    Nt = function (n, e) {
      return (
        void 0 === e && (e = Ct),
        (n && 0 <= n.indexOf("//") ? "" : "https://") + n + e
      );
    },
    qt = N,
    It = function (e) {
      var r,
        o,
        i,
        u = e,
        a = {},
        c = b,
        t = b;
      return {
        getConfig: function () {
          return u;
        },
        setConfig: function (n) {
          var e, t;
          return (
            (a = l(l({}, a), n || {})),
            f(),
            r ||
              ((r = n),
              u.useLocalConfig
                ? ((i = {}), c())
                : o
                ? s()
                : ((e = u.domain),
                  (n = u.aid),
                  (t = function (n) {
                    (o = n), s();
                  }),
                  gt().get({
                    withCredentials: !0,
                    url:
                      (function (n, e) {
                        return (
                          void 0 === e && (e = Rt),
                          (n && 0 <= n.indexOf("//") ? "" : "https://") + n + e
                        );
                      })(e) +
                      "?aid=" +
                      n,
                    success: function (n) {
                      t(n.data || {});
                    },
                    fail: function () {
                      t();
                    },
                  }))),
            u
          );
        },
        onChange: function (n) {
          t = n;
        },
        onReady: function (n) {
          (c = function () {
            !(function () {
              e.userId !== u.userId && ((e.sample.r = Math.random()), f());
              Lt(u);
            })(),
              n();
          }),
            i && c();
        },
      };
      function f() {
        var n = l(l(l({}, e), i || {}), a);
        (n.plugins = (function () {
          for (var n = [], e = 0; e < arguments.length; e++)
            n[e] = arguments[e];
          for (var t = {}, r = 0; r < n.length; ) t = d(t, n[r++]);
          return t;
        })(e.plugins, (null == i ? void 0 : i.plugins) || {}, a.plugins || {})),
          (n.sample = At(
            At(e.sample, null == i ? void 0 : i.sample),
            a.sample
          )),
          (u = n),
          t();
      }
      function s() {
        (i = (function (n) {
          if (!n) return {};
          var e = n.sample,
            t = n.timestamp;
          if (!e) return {};
          var r = e.sample_rate,
            n = e.sample_granularity;
          return {
            sample: {
              include_users: e.include_users,
              sample_rate: r,
              sample_granularity: n,
              rules: e.rules.reduce(function (n, e) {
                var t = e.name,
                  r = e.enable,
                  o = e.sample_rate,
                  e = e.conditional_sample_rules;
                return (
                  (n[t] = {
                    enable: r,
                    sample_rate: o,
                    conditional_sample_rules: e,
                  }),
                  n
                );
              }, {}),
            },
            serverTimestamp: t,
          };
        })(o)),
          f(),
          c();
      }
    };
  function At(r, o) {
    if (!r || !o) return r || o;
    var n = l(l({}, r), o);
    return (
      (n.include_users = g(
        g([], j(r.include_users || []), !1),
        j(o.include_users || []),
        !1
      )),
      (n.rules = g(
        g([], j(Object.keys(r.rules || {})), !1),
        j(Object.keys(o.rules || {})),
        !1
      ).reduce(function (n, e) {
        var t;
        return (
          e in n ||
            (e in (r.rules || {}) && e in (o.rules || {})
              ? ((n[e] = l(l({}, r.rules[e]), o.rules[e])),
                (n[e].conditional_sample_rules = g(
                  g([], j(r.rules[e].conditional_sample_rules || []), !1),
                  j(o.rules[e].conditional_sample_rules || []),
                  !1
                )))
              : (n[e] =
                  (null === (t = r.rules) || void 0 === t ? void 0 : t[e]) ||
                  (null === (t = o.rules) || void 0 === t ? void 0 : t[e]))),
          n
        );
      }, {})),
      n
    );
  }
  var Mt,
    Bt,
    Ht,
    Pt,
    Ut,
    Wt,
    Gt,
    Ft,
    Xt,
    zt,
    Yt,
    Jt,
    $t,
    Vt,
    Kt,
    Qt,
    Zt,
    nr,
    er = function (n) {
      n.on("report", function (n) {
        return (
          (e = n),
          (n = { url: Q(), timestamp: Date.now() }),
          l(l({}, e), { extra: l(l({}, n), e.extra || {}) })
        );
        var e;
      });
    },
    tr = {
      sri: "reportSri",
      st: "reportResourceError",
      err: "captureException",
    },
    rr = function (n) {
      return Object.keys(n).reduce(function (n, e) {
        return (n[e] = []), n;
      }, {});
    },
    or = function (t) {
      return Object.keys(t).reduce(function (n, e) {
        return (n[t[e]] = e), n;
      }, {});
    },
    ir = function (o, i, u) {
      return function (n, e, t, r) {
        void 0 === t && (t = Date.now()), void 0 === r && (r = location.href);
        r = l(l({}, Z(o)), { url: r, timestamp: t });
        i[n] &&
          (o[u[n]]
            ? nn(
                o,
                r
              )(function () {
                o[u[n]](e);
              })
            : null !== (t = i[n]) && void 0 !== t && t.push([e, r]));
      };
    },
    ur = function (r, e, o) {
      return function (t) {
        var n;
        t in o &&
          (null !== (n = e[o[t]]) &&
            void 0 !== n &&
            n.forEach(function (n) {
              var n = j(n, 2),
                e = n[0],
                n = n[1];
              nn(
                r,
                n
              )(function () {
                r[t](e);
              });
            }),
          (e[o[t]] = null));
      };
    },
    ar = function (t) {
      var r,
        o = !1;
      t.on("init", function () {
        (r = new Date().getTime()),
          t.on("config", function () {
            var n,
              e =
                null === (n = t.config()) || void 0 === n
                  ? void 0
                  : n.serverTimestamp;
            isNaN(e) ||
              Number(e) <= 0 ||
              o ||
              ((o = !0),
              (n = new Date().getTime()) - r < 700 &&
                e &&
                ((n = e - (n + r) / 2), isNaN(n) || t.set({ offset: n })));
          });
      });
    },
    cr = function (r) {
      r.on("beforeBuild", function (n) {
        return (
          (e = n),
          (t = r.config()),
          ((n = {}).aid = t.aid),
          (n.pid = t.pid),
          (n.view_id = t.viewId),
          (n.user_id = t.userId),
          l(l({}, e), { extra: l(l({}, n), e.extra || {}) })
        );
        var e, t;
      });
    },
    fr = function (c) {
      c.on("start", function () {
        var n,
          e = c.config(),
          t = e.deviceId,
          r = e.sessionId,
          o = e.release,
          i = e.env,
          e = e.offset,
          u = {
            did: t,
            sid: r,
            release: o,
            env: i,
            sname: xt,
            sversion: "1.2.4",
            soffset: e || 0,
          },
          a = "";
        for (n in u) a += "&" + n + "=" + u[n];
        e = c.getSender();
        e.setEndpoint(e.getEndpoint() + a.replace("&", "?"));
      });
    },
    sr = function (n) {
      n = Dt(n.aid);
      return {
        aid: 0,
        pid: "",
        viewId: "__" + Date.now(),
        userId: n.userId,
        deviceId: n.deviceId,
        sessionId: qt(),
        domain: "apmplus.volces.com",
        plugins: {
          ajax: { ignoreUrls: jt },
          fetch: { ignoreUrls: jt },
          breadcrumb: {},
          pageview: {},
          jsError: {},
          resource: {},
          resourceError: {},
          performance: {},
          tti: {},
          fmp: {},
          blankScreen: !1,
        },
        release: "",
        env: "production",
        sample: l(l({}, kt), { r: n.r }),
      };
    },
    lr =
      ((nr = (function (n) {
        var e = void 0 === n ? {} : n,
          t = e.createSender,
          n = e.builder,
          e = e.createDefaultConfig,
          r = (function (n) {
            var t,
              r,
              e = n.builder,
              o = n.createSender,
              i = n.createDefaultConfig,
              u = n.createConfigManager,
              a = n.userConfigNormalizer,
              c = n.initConfigNormalizer,
              f = n.validateInitConfig,
              s = {};
            y.forEach(function (n) {
              return (s[n] = []);
            });
            var l = !1,
              d = !1,
              p = [],
              v = [],
              h = {
                getBuilder: function () {
                  return e;
                },
                getSender: function () {
                  return t;
                },
                getPreStartQueue: function () {
                  return p;
                },
                init: function (n) {
                  if (l) x("already inited");
                  else {
                    if (!(n && E(n) && f(n)))
                      throw new Error("invalid InitConfig, init failed");
                    var e = i(n);
                    if (!e) throw new Error("defaultConfig missing");
                    n = c(n);
                    if (
                      ((r = u(e)).setConfig(n),
                      r.onChange(function () {
                        m("config");
                      }),
                      !(t = o(r.getConfig())))
                    )
                      throw new Error("sender missing");
                    m("init", (l = !0));
                  }
                },
                set: function (n) {
                  l &&
                    n &&
                    E(n) &&
                    (m("beforeConfig", !1, n), null != r && r.setConfig(n));
                },
                config: function (n) {
                  if (l)
                    return (
                      n &&
                        E(n) &&
                        (m("beforeConfig", !1, n),
                        null != r && r.setConfig(a(n))),
                      null == r ? void 0 : r.getConfig()
                    );
                },
                provide: function (n, e) {
                  S(v, n)
                    ? x("cannot provide " + n + ", reserved")
                    : ((h[n] = e), m("provide", !1, n));
                },
                start: function () {
                  var e = this;
                  l &&
                    (d ||
                      (null != r &&
                        r.onReady(function () {
                          m("start", (d = !0)),
                            p.forEach(function (n) {
                              return e.build(n);
                            }),
                            (p = []);
                        })));
                },
                report: function (n) {
                  !n ||
                    ((n = R(s.report)(n)) && (d ? this.build(n) : p.push(n)));
                },
                build: function (n) {
                  !d ||
                    ((n = R(s.beforeBuild)(n)) &&
                      (!(n = e.build(n)) ||
                        ((n = R(s.build)(n)) && this.send(n))));
                },
                send: function (n) {
                  !d ||
                    ((n = R(s.beforeSend)(n)) && (t.send(n), m("send", !1, n)));
                },
                destroy: function () {
                  m("beforeDestroy", !0);
                },
                on: function (n, e) {
                  ("init" === n && l) || ("start" === n && d)
                    ? e()
                    : s[n] && s[n].push(e);
                },
                off: function (n, e) {
                  s[n] && (s[n] = T(s[n], e));
                },
              },
              v = Object.keys(h);
            return h;
            function m(n, e) {
              void 0 === e && (e = !1);
              for (var t = [], r = 2; r < arguments.length; r++)
                t[r - 2] = arguments[r];
              s[n].forEach(function (n) {
                try {
                  n.apply(void 0, g([], j(t), !1));
                } catch (n) {}
              }),
                e && (s[n].length = 0);
            }
          })({
            validateInitConfig: Et,
            initConfigNormalizer: bt,
            userConfigNormalizer: _t,
            createSender:
              void 0 === t
                ? function (n) {
                    return yt({
                      size: Ot,
                      endpoint: Nt(n.domain),
                      transport: gt(),
                    });
                  }
                : t,
            builder: void 0 === n ? wt : n,
            createDefaultConfig: void 0 === e ? sr : e,
            createConfigManager: It,
          });
        q(r), ar(r), cr(r), er(r), vt(r), fr(r);
        var o,
          e = I(r, Z, function (n, e, t) {
            return nn(
              n,
              e
            )(function () {
              var n = j(t),
                e = n[0],
                n = n.slice(1);
              r[e].apply(r, g([], j(n), !1));
            });
          });
        return (
          (o = e).on("init", function () {
            var e = [],
              n = o.config();
            n &&
              n.integrations &&
              n.integrations.forEach(function (n) {
                S(e, n.name) ||
                  (e.push(n.name),
                  n.setup(o),
                  n.tearDown && o.on("beforeDestroy", n.tearDown));
              });
          }),
          e
        );
      })((Mt = void 0 === Mt ? {} : Mt))),
      (Bt = nr).on("start", function () {
        var n = Bt.config(),
          e = n.userId,
          n = n.sample,
          n = ht(e, n, k, O);
        Bt.on("build", n);
      }),
      (Ht = nr),
      (Ut = rr((Pt = void 0 === Pt ? tr : Pt))),
      (Mt = or(Pt)),
      (Wt = ir(Ht, Ut, Pt)),
      null !== (Pt = Ht.p) &&
        void 0 !== Pt &&
        Pt.a &&
        "observe" in Ht.p.a &&
        Ht.p.a.observe(function (n) {
          var e = j(n, 5);
          e[0];
          var t = e[1],
            r = e[2],
            n = e[3],
            e = e[4];
          Wt(t, r, n, e);
        }),
      Ht.on("init", function () {
        var n;
        null !== (n = Ht.p) &&
          void 0 !== n &&
          n.a.forEach(function (n) {
            var e = j(n, 5);
            e[0];
            var t = e[1],
              r = e[2],
              n = e[3],
              e = e[4];
            Wt(t, r, n, e);
          }),
          Ht.p && Ht.p.a && (Ht.p.a.length = 0);
      }),
      Ht.provide("precollect", Wt),
      Ht.on("provide", ur(Ht, Ut, Mt)),
      (Gt = nr).provide("sendEvent", function (n) {
        n = ut(n);
        n &&
          Gt.report({
            ev_type: it,
            payload: n,
            extra: { timestamp: Date.now() },
          });
      }),
      Gt.provide("sendLog", function (n) {
        n = at(n);
        n &&
          Gt.report({
            ev_type: it,
            payload: n,
            extra: { timestamp: Date.now() },
          });
      }),
      (Ft = nr).on("init", function () {
        var n,
          e = En(Ft, Zn, ne);
        e &&
          ((e = j(
            $(
              Qn,
              l(l({}, e), {
                initPid:
                  null === (e = Ft.config()) || void 0 === e ? void 0 : e.pid,
                onPidUpdate: function (n) {
                  Ft.set({
                    pid: n,
                    viewId: n + "_" + Date.now(),
                    actionId: void 0,
                  });
                },
              }),
              Ft.report.bind(Ft)
            ),
            2
          )),
          (n = e[0]),
          (e = e[1]),
          Ft.on("config", function () {
            n(Ft.config().pid);
          }),
          Ft.on("beforeDestroy", e),
          Ft.provide("sendPageview", n));
      }),
      (Xt = nr).on("init", function () {
        var e,
          n = En(Xt, Sn, Tn);
        n &&
          ((e = !1),
          (n = j(
            $(bn, l(l({}, n), { hookCbAtReq: Dn(Xt) }), function (n) {
              return !e && Xt.report(n);
            }),
            1
          )[0]),
          Xt.on("beforeDestroy", function () {
            e = !0;
          }),
          Xt.provide("wrapXhr", n));
      }),
      (zt = nr).on("init", function () {
        var e,
          n = En(zt, In, An);
        n &&
          ((e = !1),
          (n = j(
            $(qn, l(l({}, n), { hookCbAtReq: Dn(zt) }), function (n) {
              return !e && zt.report(n);
            }),
            1
          )[0]),
          zt.on("beforeDestroy", function () {
            e = !0;
          }),
          zt.provide("wrapFetch", n));
      }),
      (Yt = nr).on("init", function () {
        var n,
          e = En(Yt, He, {});
        e && ((n = Yt.pp || Ce), $(Be, l(l({}, e), { precollect: n }), _n(Yt)));
      }),
      (Jt = nr).on("init", function () {
        var n,
          e = En(Jt, Ge, Fe);
        e &&
          ((n = j($(We, e, _n(Jt)), 1)[0]),
          un(function () {
            return setTimeout(n, 200);
          }));
      }),
      ($t = nr).on("init", function () {
        var e,
          n,
          t = En($t, xn, Rn);
        t &&
          ((t = (n = j($(Ln, t, b), 3))[0]),
          (e = n[1]),
          (n = n[2]),
          $t.on("report", function (n) {
            return (
              "http" === n.ev_type &&
                e({
                  type: "http",
                  category: n.payload.api,
                  message: "",
                  data: {
                    method: n.payload.request.method,
                    url: n.payload.request.url,
                    status_code: String(n.payload.response.status),
                  },
                  timestamp: n.payload.request.timestamp,
                }),
              n
            );
          }),
          $t.on("beforeDestroy", n),
          $t.provide("getBreadcrumbs", t),
          $t.provide("addBreadcrumb", e));
      }),
      (Vt = nr).on("init", function () {
        window.removeEventListener("error", Vt.pcErr, !0),
          window.removeEventListener("unhandledrejection", Vt.pcRej, !0);
        var n,
          e = En(Vt, Vn, Kn);
        e &&
          ((e = (n = j(
            $($n, e, function (n) {
              Vt.getBreadcrumbs &&
                (n.payload.breadcrumbs = Vt.getBreadcrumbs()),
                Vt.report(n);
            }),
            2
          ))[0]),
          (n = n[1]),
          Vt.on("beforeDestroy", n),
          Vt.provide("captureException", e));
      }),
      (Kt = nr).on("init", function () {
        var n = Kt.pp || Ce;
        null !== (t = n.observer) && void 0 !== t && t.disconnect();
        var e,
          t,
          r,
          o,
          i,
          u = En(Kt, Re, je);
        u &&
          ($(_e, l(l({}, u), { precollect: n }), _n(Kt)),
          (t = (r = j(
            $(
              xe,
              0,
              (e = function (n) {
                Kt.report({ ev_type: "performance", payload: n });
              })
            ),
            2
          ))[0]),
          (r = r[1]),
          Kt.provide("performanceInit", t),
          Kt.provide("performanceSend", r),
          u.longtask &&
            ((r = j(
              $(Le, { precollect: n }, function (n) {
                Kt.report({ ev_type: "performance_longtask", payload: n });
              }),
              1
            )[0]),
            Kt.on("beforeDestroy", r)),
          u.cls &&
            ((o = Q()),
            (u = j(
              $(Te, [n], function (n) {
                Kt.report({
                  ev_type: "performance",
                  payload: n,
                  overrides: { url: o },
                });
              }),
              2
            )),
            (i = u[0]),
            (u = u[1]),
            Kt.on("beforeConfig", function (n) {
              n.viewId &&
                n.viewId !==
                  (null === (n = Kt.config()) || void 0 === n
                    ? void 0
                    : n.viewId) &&
                (i(), (o = Q()));
            }),
            Kt.on("beforeDestroy", u),
            sn(i)),
          (n.entries.length = 0),
          Kt.provide("sendCustomPerfMetric", function (n) {
            n = l(l(l({}, me), n), { isCustom: !0 });
            e(n);
          }));
      }),
      (Qt = nr).on("init", function () {
        var n,
          e = En(Qt, ce, fe);
        e &&
          ((e = (n = j($(ae, e, Qt.report.bind(Qt)), 2))[0]),
          (n = n[1]),
          Qt.on("beforeDestroy", n),
          Qt.provide("reportResourceError", e));
      }),
      (Zt = nr).on("init", function () {
        var n = En(Zt, oe, ie);
        n &&
          ((n = j(
            $(re, n, function (n) {
              var e = j(n, 2),
                n = e[0],
                e = e[1];
              Zt.report(e ? l(l({}, n), { extra: { sample_rate: 1 } }) : n);
            }),
            1
          )[0]),
          Zt.on("beforeDestroy", n));
      }),
      ot(nr),
      nr),
    dr = (function () {
      var n = A(),
        e = St();
      if (n && e) return n[e];
    })();
  dr &&
    ["p", "pp", "pcErr", "pcRej"].forEach(function (n) {
      lr.provide(n, dr[n]);
    });
  var pr,
    vr,
    hr,
    mr,
    gr = A(),
    yr = St();
  gr &&
    yr &&
    ((pr = (null == (pr = gr[yr]) ? void 0 : pr.q) || []),
    (gr[yr] = lr),
    pr.forEach(function (n) {
      var e, t;
      (t = n),
        (n = l(l({}, Z((e = lr))), { url: t.pop(), timestamp: t.pop() })),
        nn(
          e,
          n
        )(function () {
          e.apply(void 0, g([], j(t), !1));
        });
    }),
    (pr.length = 0),
    lr.p &&
      ("observe" in lr.p.a &&
        console.warn("global precollect queue already updated"),
      (lr.p.a =
        ((hr = lr.p.a),
        (mr = []),
        (hr.observe = function (n) {
          mr.push(n);
        }),
        (hr.push = function () {
          for (var n, e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          return (
            e.forEach(function (e) {
              mr.forEach(function (n) {
                return n(e);
              });
            }),
            (n = [].push).call.apply(n, g([hr], j(e), !1))
          );
        }),
        hr)),
      (vr = lr.precollect) &&
        lr.provide("precollect", function () {
          for (var n = [], e = 0; e < arguments.length; e++)
            n[e] = arguments[e];
          return (
            lr.p.a.push(g(["precollect"], j(n), !1)),
            vr.apply(void 0, g([], j(n), !1))
          );
        })));
})();
