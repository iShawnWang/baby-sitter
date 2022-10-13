'use strict';
!function() {
  /**
   * @param {!Array} value
   * @param {number} manifest
   * @return {?}
   */
  function done(value, manifest) {
    var msg = "function" == typeof Symbol && value[Symbol.iterator];
    if (!msg) {
      return value;
    }
    var result;
    var mockConsole;
    var data = msg.call(value);
    /** @type {!Array} */
    var collector = [];
    try {
      for (; (void 0 === manifest || 0 < manifest--) && !(result = data.next()).done;) {
        collector.push(result.value);
      }
    } catch (Console_error) {
      mockConsole = {
        error : Console_error
      };
    } finally {
      try {
        if (result && !result.done && (msg = data.return)) {
          msg.call(data);
        }
      } finally {
        if (mockConsole) {
          throw mockConsole.error;
        }
      }
    }
    return collector;
  }
  /**
   * @param {!Array} self
   * @param {!Array} obj
   * @param {string} indicate
   * @return {?}
   */
  function fn(self, obj, indicate) {
    if (indicate || 2 === arguments.length) {
      var attrs;
      /** @type {number} */
      var key = 0;
      var length = obj.length;
      for (; key < length; key++) {
        if (!(!attrs && key in obj)) {
          (attrs = attrs || Array.prototype.slice.call(obj, 0, key))[key] = obj[key];
        }
      }
    }
    return self.concat(attrs || Array.prototype.slice.call(obj));
  }
  /**
   * @param {!Array} endpoints
   * @return {?}
   */
  function clean(endpoints) {
    return JSON.stringify({
      ev_type : "batch",
      list : endpoints
    });
  }
  /**
   * @param {!Object} data
   * @return {?}
   */
  function noop(data) {
    return data;
  }
  /**
   * @param {!Object} t
   * @return {?}
   */
  function callback(t) {
    return "object" == typeof t && null !== t;
  }
  /**
   * @param {!Object} value
   * @return {?}
   */
  function copy(value) {
    if (callback(value)) {
      if ("function" != typeof Object.getPrototypeOf) {
        return "[object Object]" === _.toString.call(value);
      }
      /** @type {(Object|null)} */
      value = Object.getPrototypeOf(value);
      return value === _ || null === value;
    }
  }
  /**
   * @param {!Object} obj
   * @return {?}
   */
  function isObject(obj) {
    return "[object Array]" === _.toString.call(obj);
  }
  /**
   * @param {!Function} value
   * @return {?}
   */
  function isFunction(value) {
    return "function" == typeof value;
  }
  /**
   * @param {boolean} value
   * @return {?}
   */
  function isFinite(value) {
    return "number" == typeof value;
  }
  /**
   * @param {!Object} obj
   * @return {?}
   */
  function isArray(obj) {
    return "string" == typeof obj;
  }
  /**
   * @param {!Array} date
   * @return {?}
   */
  function n(date) {
    return "undefined" != typeof Event && function(impromptuInstance, Impromptu) {
      try {
        return impromptuInstance instanceof Impromptu;
      } catch (n) {
        return;
      }
    }(date, Event);
  }
  /**
   * @param {!Array} data
   * @param {(Object|string)} obj
   * @return {?}
   */
  function parse(data, obj) {
    var key;
    var r;
    var res = extend({}, data);
    for (key in obj) {
      /** @type {string} */
      r = key;
      if (Object.prototype.hasOwnProperty.call(obj, r) && void 0 !== obj[key]) {
        if (callback(obj[key]) && copy(obj[key])) {
          res[key] = parse(callback(data[key]) ? data[key] : {}, obj[key]);
        } else {
          if (isObject(obj[key]) && isObject(data[key])) {
            res[key] = function merge(value, obj) {
              value = isObject(value) ? value : [];
              obj = isObject(obj) ? obj : [];
              return Array.prototype.concat.call(value, obj).map(function(value) {
                return value instanceof RegExp ? value : callback(value) && copy(value) ? parse({}, value) : isObject(value) ? merge([], value) : value;
              });
            }(data[key], obj[key]);
          } else {
            res[key] = obj[key];
          }
        }
      }
    }
    return res;
  }
  /**
   * @param {!Object} key
   * @param {string} type
   * @return {?}
   */
  function resolve(key, type) {
    if (!isObject(key)) {
      return false;
    }
    if (0 === key.length) {
      return false;
    }
    /** @type {number} */
    var j = 0;
    for (; j < key.length;) {
      if (key[j] === type) {
        return true;
      }
      j++;
    }
    return false;
  }
  /**
   * @param {!Array} obj
   * @param {string} x
   * @return {?}
   */
  function trim(obj, x) {
    if (!isObject(obj)) {
      return obj;
    }
    var a = obj.indexOf(x);
    if (0 <= a) {
      x = obj.slice();
      return x.splice(a, 1), x;
    }
    return obj;
  }
  /**
   * @param {string} b
   * @param {string} a
   * @param {!Function} val
   * @return {?}
   */
  function v(b, a, val) {
    var cookie;
    var i = (a = done(a.split(".")))[0];
    var res = a.slice(1);
    for (; b && 0 < res.length;) {
      b = b[i];
      i = (cookie = done(res))[0];
      res = cookie.slice(1);
    }
    if (b) {
      return val(b, i);
    }
  }
  /**
   * @param {!NodeList} value
   * @return {?}
   */
  function toString(value) {
    return isObject(value) && value.length ? function(params) {
      /** @type {!Array} */
      var defaultParts = [];
      var actual_count = params.length;
      /** @type {number} */
      var i = 0;
      for (; i < actual_count; i++) {
        var value = params[i];
        if (isArray(value)) {
          defaultParts.push(value.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"));
        } else {
          if (value && value.source) {
            defaultParts.push(value.source);
          }
        }
      }
      return new RegExp(defaultParts.join("|"), "i");
    }(value) : null;
  }
  /**
   * @param {!Object} value
   * @return {?}
   */
  function stringify(value) {
    try {
      return isArray(value) ? value : JSON.stringify(value);
    } catch (creative_size) {
      return "[FAILED_TO_STRINGIFY]:" + String(creative_size);
    }
  }
  /**
   * @param {!Object} p
   * @param {string} name
   * @param {!Function} f
   * @return {?}
   */
  function map(p, name, f) {
    return function() {
      /** @type {!Array} */
      var list = [];
      /** @type {number} */
      var i = 0;
      for (; i < arguments.length; i++) {
        list[i] = arguments[i];
      }
      if (!p) {
        return undefined;
      }
      var a = p[name];
      var t = f.apply(void 0, fn([a], done(list), false));
      var value = t;
      return isFunction(value) && (value = function() {
        /** @type {!Array} */
        var value = [];
        /** @type {number} */
        var i = 0;
        for (; i < arguments.length; i++) {
          value[i] = arguments[i];
        }
        try {
          return t.apply(this, value);
        } catch (n) {
          return isFunction(a) && a.apply(this, value);
        }
      }), p[name] = value, function(fireCallback) {
        if (!(fireCallback && value !== p[name])) {
          p[name] = a;
        }
      };
    };
  }
  /**
   * @param {!Object} src
   * @param {string} name
   * @param {!Function} callback
   * @return {?}
   */
  function inject(src, name, callback) {
    return function() {
      /** @type {!Array} */
      var list = [];
      /** @type {number} */
      var i = 0;
      for (; i < arguments.length; i++) {
        list[i] = arguments[i];
      }
      src[name] = callback.apply(void 0, fn([src[name]], done(list), false));
    };
  }
  /**
   * @return {undefined}
   */
  function reject() {
    /** @type {!Array} */
    var list = [];
    /** @type {number} */
    var i = 0;
    for (; i < arguments.length; i++) {
      list[i] = arguments[i];
    }
    console.warn.apply(console, fn(["[SDK]", Date.now(), ("" + nextGuid++).padStart(8, " ")], done(list), false));
  }
  /**
   * @param {!NodeList} s
   * @return {?}
   */
  function debug(s) {
    return function(argV) {
      /** @type {!Array} */
      var v = argV;
      /** @type {number} */
      var i = 0;
      for (; i < s.length && v; i++) {
        try {
          v = s[i](v);
        } catch (shouldBeRequestLine) {
          inspect(shouldBeRequestLine);
        }
      }
      return v;
    };
  }
  /**
   * @return {?}
   */
  function mobileLogin() {
    var upperCaseAlphabet = function() {
      /** @type {!Array} */
      var value = new Array(16);
      /** @type {number} */
      var e = 0;
      /** @type {number} */
      var lastPropName = 0;
      for (; lastPropName < 16; lastPropName++) {
        if (0 == (3 & lastPropName)) {
          /** @type {number} */
          e = 4294967296 * Math.random();
        }
        /** @type {number} */
        value[lastPropName] = e >>> ((3 & lastPropName) << 3) & 255;
      }
      return value;
    }();
    return upperCaseAlphabet[6] = 15 & upperCaseAlphabet[6] | 64, upperCaseAlphabet[8] = 63 & upperCaseAlphabet[8] | 128, function(keys) {
      /** @type {!Array} */
      var test = [];
      /** @type {number} */
      var j = 0;
      for (; j < 256; ++j) {
        /** @type {string} */
        test[j] = (j + 256).toString(16).substr(1);
      }
      /** @type {number} */
      var i = 0;
      /** @type {!Array} */
      var repo = test;
      return [repo[keys[i++]], repo[keys[i++]], repo[keys[i++]], repo[keys[i++]], "-", repo[keys[i++]], repo[keys[i++]], "-", repo[keys[i++]], repo[keys[i++]], "-", repo[keys[i++]], repo[keys[i++]], "-", repo[keys[i++]], repo[keys[i++]], repo[keys[i++]], repo[keys[i++]], repo[keys[+i]], repo[keys[15]]].join("");
    }(upperCaseAlphabet);
  }
  /**
   * @return {?}
   */
  function apply() {
    if ("object" == typeof window && callback(window)) {
      return window;
    }
  }
  /**
   * @return {?}
   */
  function join() {
    if ("object" == typeof document && callback(document)) {
      return document;
    }
  }
  /**
   * @return {?}
   */
  function error() {
    return apply() && window.location;
  }
  /**
   * @return {?}
   */
  function match() {
    if (apply() && callback(window.performance)) {
      return window.performance;
    }
  }
  /**
   * @return {?}
   */
  function check() {
    if ("function" == typeof XMLHttpRequest && isFunction(XMLHttpRequest)) {
      return XMLHttpRequest;
    }
  }
  /**
   * @return {?}
   */
  function handleRequest() {
    try {
      return new Headers, new Request(""), new Response, window.fetch;
    } catch (n) {
    }
  }
  /**
   * @return {?}
   */
  function def() {
    if (apply() && isFunction(window.MutationObserver)) {
      return window.MutationObserver;
    }
  }
  /**
   * @return {?}
   */
  function clone() {
    if (apply() && isFunction(window.PerformanceObserver)) {
      return window.PerformanceObserver;
    }
  }
  /**
   * @return {?}
   */
  function getTime() {
    var result = match();
    if (result && callback(result.timing)) {
      return result.timing;
    }
  }
  /**
   * @return {?}
   */
  function select() {
    var nav = function() {
      if (apply() && "navigator" in window) {
        return window.navigator;
      }
    }();
    if (nav) {
      return nav.connection || nav.mozConnection || nav.webkitConnection;
    }
  }
  /**
   * @param {string} src
   * @return {?}
   */
  function getText(src) {
    var s = join();
    if (!s || !src) {
      return "";
    }
    s = s.createElement("a");
    return s.href = src, s.href;
  }
  /**
   * @param {string} path
   * @return {?}
   */
  function parseURL(path) {
    var url = join();
    if (!url || !path) {
      return {
        url : path,
        protocol : "",
        domain : "",
        query : "",
        path : "",
        hash : ""
      };
    }
    url = url.createElement("a");
    /** @type {string} */
    url.href = path;
    path = url.pathname || "/";
    return "/" !== path[0] && (path = "/" + path), {
      url : url.href,
      protocol : url.protocol.slice(0, -1),
      domain : url.hostname,
      query : url.search.substring(1),
      path : path,
      hash : url.hash
    };
  }
  /**
   * @return {?}
   */
  function emit() {
    var fontAwesomeLink = apply() && error();
    return null == fontAwesomeLink ? void 0 : fontAwesomeLink.href;
  }
  /**
   * @param {string} context
   * @return {?}
   */
  function run(context) {
    try {
      var e;
      /** @type {string} */
      var parent = context;
      /** @type {!Array} */
      var r = [];
      /** @type {number} */
      var o = 0;
      /** @type {number} */
      var i = 0;
      /** @type {number} */
      var channelCount = " > ".length;
      for (; parent && o++ < 5 && !("html" === (e = function(value) {
        var compare_string;
        var key;
        var clearChatButton;
        var idx;
        /** @type {string} */
        var i = value;
        /** @type {!Array} */
        var signatureString = [];
        if (!i || !i.tagName) {
          return "";
        }
        signatureString.push(i.tagName.toLowerCase());
        if (i.id) {
          signatureString.push("#" + i.id);
        }
        value = i.className;
        if (value && isArray(value)) {
          compare_string = value.split(/\s+/);
          /** @type {number} */
          idx = 0;
          for (; idx < compare_string.length; idx++) {
            signatureString.push("." + compare_string[idx]);
          }
        }
        /** @type {!Array} */
        var props = ["type", "name", "title", "alt"];
        /** @type {number} */
        idx = 0;
        for (; idx < props.length; idx++) {
          key = props[idx];
          if (clearChatButton = i.getAttribute(key)) {
            signatureString.push("[" + key + '="' + clearChatButton + '"]');
          }
        }
        return signatureString.join("");
      }(parent)) || 1 < o && 80 <= i + r.length * channelCount + e.length);) {
        r.push(e);
        i = i + e.length;
        parent = parent.parentNode;
      }
      return r.reverse().join(" > ");
    } catch (n) {
      return value;
    }
  }
  /**
   * @param {number} i
   * @return {?}
   */
  function pipe(i) {
    /**
     * @param {string} name
     * @param {?} cb
     * @return {?}
     */
    function pipe(name, cb) {
      var last;
      return function(elem) {
        _takingTooLongTimeout = void 0;
        if (elem && last !== elem) {
          cb({
            event : last = elem,
            name : name
          });
        }
      };
    }
    var _takingTooLongTimeout;
    return [pipe, function(options) {
      return function(context) {
        var target;
        try {
          target = context.target;
        } catch (n) {
          return;
        }
        var htmlElementName = target && target.tagName;
        if (htmlElementName && ("INPUT" === htmlElementName || "TEXTAREA" === htmlElementName || target.isContentEditable)) {
          if (!_takingTooLongTimeout) {
            pipe("input", options)(context);
          }
          clearTimeout(_takingTooLongTimeout);
          _takingTooLongTimeout = window.setTimeout(function() {
            _takingTooLongTimeout = void 0;
          }, i);
        }
      };
    }];
  }
  /**
   * @param {?} callback
   * @param {string} selector
   * @return {?}
   */
  function compare(callback, selector) {
    return function(channelErr) {
      if (selector) {
        try {
          callback(channelErr);
        } catch (n) {
        }
      }
    };
  }
  /**
   * @param {!Function} clearColor
   * @return {undefined}
   */
  function clear(clearColor) {
    var tag = apply();
    var root = join();
    if (tag && root) {
      if ("complete" !== root.readyState) {
        tag.addEventListener("load", function() {
          setTimeout(function() {
            clearColor();
          }, 0);
        }, false);
      } else {
        clearColor();
      }
    }
  }
  /**
   * @param {!Function} callback
   * @return {undefined}
   */
  function ready(callback) {
    var init;
    if ("hidden" !== document.visibilityState) {
      /**
       * @return {undefined}
       */
      init = function() {
        if ("hidden" === document.visibilityState) {
          callback();
          removeEventListener("visibilitychange", init, true);
        }
      };
      addEventListener("visibilitychange", init, true);
    } else {
      callback();
    }
  }
  /**
   * @param {string} a
   * @param {!Object} b
   * @return {?}
   */
  function ok(a, b) {
    return !(!a || !b) && (inlineAttributeCommentRegex.test(a) || inlineAttributeIgnoreCommentRegex.test(b));
  }
  /**
   * @param {!Object} request
   * @param {string} handler
   * @param {!Object} data
   * @return {?}
   */
  function update(request, handler, data) {
    var method = request._method;
    var headers = request._reqHeaders;
    var url = request._url;
    var start = request._start;
    var err = request._data;
    data = {
      api : "xhr",
      request : {
        url : getText(url),
        method : (method || "").toLowerCase(),
        headers : headers,
        timestamp : start
      },
      response : {
        status : request.status || 0,
        is_custom_error : false,
        timing : data(request.responseURL),
        timestamp : Date.now()
      },
      duration : Date.now() - start
    };
    if ("function" == typeof request.getAllResponseHeaders) {
      data.response.headers = isArray(args = request.getAllResponseHeaders()) && args ? args.split("\r\n").reduce(function(model_colors, b) {
        var a;
        return isArray(b) && (b = (a = done(b.split(": "), 2))[0], a = a[1], ok(b, a) || (model_colors[b.toLowerCase()] = a)), model_colors;
      }, {}) : {};
    }
    start = data.response.status;
    var args = handler.collectBodyOnError;
    handler = handler.extraExtractor;
    try {
      var body = null == handler ? void 0 : handler(request.response, data);
      if (body) {
        data.extra = body;
      }
      if (body) {
        /** @type {boolean} */
        data.response.is_custom_error = true;
      }
      if (args && 400 <= start) {
        /** @type {(string|undefined)} */
        data.request.body = err ? "" + err : void 0;
        /** @type {(string|undefined)} */
        data.response.body = request.response ? "" + request.response : void 0;
      }
    } catch (n) {
    }
    return data;
  }
  /**
   * @param {!Function} text
   * @param {!Object} group
   * @return {?}
   */
  function mergeExtensions(text, group) {
    return !!(text = toString(text || [])) && text.test(group);
  }
  /**
   * @param {!Array} name
   * @return {?}
   */
  function f(name) {
    var split = done(next(name), 5)[4];
    return function(url) {
      return split(url).pop();
    };
  }
  /**
   * @param {!Function} o
   * @return {?}
   */
  function build(o) {
    return function() {
      /** @type {!Array} */
      var f = [];
      /** @type {number} */
      var i = 0;
      for (; i < arguments.length; i++) {
        f[i] = arguments[i];
      }
      this._reqHeaders = this._reqHeaders || {};
      var result = done(f, 2);
      var r = result[0];
      result = result[1];
      return ok(r, result) || (this._reqHeaders[r.toLowerCase()] = result), o && o.apply(this, f);
    };
  }
  /**
   * @param {!Function} fn
   * @param {?} buffer
   * @param {!Object} filename
   * @param {number} index
   * @return {?}
   */
  function validate(fn, buffer, filename, index) {
    return function() {
      var response;
      var cb;
      /** @type {!Array} */
      var obj = [];
      /** @type {number} */
      var i = 0;
      for (; i < arguments.length; i++) {
        obj[i] = arguments[i];
      }
      return cb = index, inject(response = this, "onreadystatechange", function(callback, options, dispatch) {
        return function() {
          /** @type {!Array} */
          var args = [];
          /** @type {number} */
          var i = 0;
          for (; i < arguments.length; i++) {
            args[i] = arguments[i];
          }
          try {
            if (4 === this.readyState && !mergeExtensions(options.ignoreUrls, response._url) && dispatch) {
              dispatch({
                ev_type : "http",
                payload : update(response, options, cb)
              });
            }
          } catch (delayFn) {
            expect(delayFn);
          }
          return callback && callback.apply(this, args);
        };
      })(buffer, buffer.hookCbAtReq(filename)), this._start = Date.now(), this._data = null == obj ? void 0 : obj[0], fn.apply(this, obj);
    };
  }
  /**
   * @param {!Function} fn
   * @return {?}
   */
  function Promise(fn) {
    return function() {
      var urls;
      /** @type {!Array} */
      var results = [];
      /** @type {number} */
      var i = 0;
      for (; i < arguments.length; i++) {
        results[i] = arguments[i];
      }
      return urls = done(results, 2), this._method = urls[0], this._url = urls[1], fn.apply(this, results);
    };
  }
  /**
   * @param {!Object} app
   * @param {number} type
   * @param {number} res
   * @param {?} status
   * @return {undefined}
   */
  function equal(app, type, res, status) {
    inject(app, "open", Promise)();
    inject(app, "setRequestHeader", build)();
    inject(app, "send", validate)(type, res, status);
  }
  /**
   * @param {!Object} context
   * @param {string} item
   * @param {number} value
   * @return {?}
   */
  function wrap(context, item, value) {
    item = null === (context = context.config()) || void 0 === context ? void 0 : context.plugins[item];
    return callback(item) ? extend(extend({}, value), item) : !!item && value;
  }
  /**
   * @param {!Object} b
   * @param {!Function} a
   * @return {?}
   */
  function has(b, a) {
    return b instanceof a;
  }
  /**
   * @param {?} object
   * @return {?}
   */
  function assign(object) {
    /** @type {!Array} */
    var effects = [];
    /** @type {number} */
    var i = 1;
    for (; i < arguments.length; i++) {
      effects[i - 1] = arguments[i];
    }
    return effects.reduce(function(exists, options) {
      return (new object(options)).forEach(function(f, k) {
        return !ok(k, f) && (exists[k] = f);
      }), exists;
    }, {});
  }
  /**
   * @param {!Object} options
   * @param {!Object} context
   * @param {!Function} f
   * @return {?}
   */
  function first(options, context, f) {
    return has(options, f) ? options.body : null == context ? void 0 : context.body;
  }
  /**
   * @param {string} name
   * @param {!Object} config
   * @param {boolean} task
   * @param {!Function} event
   * @return {?}
   */
  function get(name, config, task, event) {
    return {
      method : function(options, callback, f) {
        callback = callback && callback.method || "get";
        return (callback = has(options, f) ? options.method || callback : callback).toLowerCase();
      }(config, task, event),
      timestamp : Date.now(),
      url : getText(name)
    };
  }
  /**
   * @param {?} f
   * @param {?} options
   * @param {!Object} data
   * @param {number} query
   * @param {!Function} c
   * @param {?} callback
   * @return {?}
   */
  function load(f, options, data, query, c, callback) {
    return function(value, method) {
      var val;
      var maskset;
      var opts;
      var result = f(value, method = void 0 === method ? {} : method);
      opts = (maskset = false, opts = "", opts = has(val = value, c) ? val.url : val, opts = !(maskset = void 0 !== maskset && maskset) && isArray(opts) ? opts.split("?")[0] : opts);
      if (!function(schema) {
        if (isArray(schema)) {
          var result = done(schema.split(":"), 2);
          schema = result[0];
          return !result[1] || "http" === schema || "https" === schema;
        }
      }(opts) || mergeExtensions(options.ignoreUrls, opts)) {
        return result;
      }
      var put = options.hookCbAtReq(data);
      var item = {
        api : "fetch",
        request : get(value instanceof c ? value.url : value, value, method, c),
        response : {
          is_custom_error : false
        },
        duration : 0
      };
      try {
        item.request.headers = assign(query, value.headers, method.headers);
      } catch (delayFn) {
        expect(delayFn);
      }
      /**
       * @return {undefined}
       */
      var parse = function() {
        if (put) {
          put({
            ev_type : "http",
            payload : item
          });
        }
      };
      return result.then(function(res) {
        var el;
        try {
          item.response.status = res.status || 0;
          item.response.headers = assign(query, res.headers);
          /** @type {number} */
          item.duration = Date.now() - item.request.timestamp;
          var pagesToDisplay = options.collectBodyOnError;
          var merge = options.extraExtractor;
          try {
            if (merge) {
              res.clone().json().then(function(data) {
                data = merge(data, item);
                if (data) {
                  /** @type {!Object} */
                  item.extra = data;
                  /** @type {boolean} */
                  item.response.is_custom_error = true;
                }
              });
            }
          } catch (n) {
          }
          if (pagesToDisplay && 400 <= res.status) {
            item.request.body = null === (el = first(value, method, c)) || void 0 === el ? void 0 : el.toString();
          }
          setTimeout(function() {
            item.response.timing = callback(res.url);
            parse();
          }, 100);
        } catch (delayFn) {
          expect(delayFn);
        }
      }, function() {
        var el;
        try {
          /** @type {number} */
          item.response.status = 0;
          /** @type {number} */
          item.duration = Date.now() - item.request.timestamp;
          if (options.collectBodyOnError) {
            item.request.body = null === (el = first(value, method, c)) || void 0 === el ? void 0 : el.toString();
          }
        } catch (delayFn) {
          expect(delayFn);
        }
        parse();
      }), result;
    };
  }
  /**
   * @param {!Array} o
   * @return {?}
   */
  function find(o) {
    var value;
    var m;
    var options;
    return !function(date) {
      switch(Object.prototype.toString.call(date)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMError]":
        case "[object DOMException]":
          return 1;
        default:
          return date instanceof Error;
      }
    }(o) ? (copy(o) || n(o) || isArray(o)) && (value = {
      message : stringify(o)
    }) : (options = fields, value = (m = o) && callback(m) ? options.reduce(function(options, k) {
      return options[k] = m[k], options;
    }, {}) : m), value;
  }
  /**
   * @param {!Object} type
   * @return {?}
   */
  function e(type) {
    return find(type.error);
  }
  /**
   * @param {!Object} result
   * @return {?}
   */
  function handler(result) {
    var info;
    try {
      var message = void 0;
      if ("reason" in result ? message = result.reason : "detail" in result && "reason" in result.detail && (message = result.detail.reason), message) {
        var data = find(message);
        return extend(extend({}, data), {
          name : null !== (info = data && data.name) && void 0 !== info ? info : "UnhandledRejection"
        });
      }
    } catch (n) {
    }
  }
  /**
   * @param {!Array} b
   * @return {?}
   */
  function g(b) {
    return "[object ErrorEvent]" === Object.prototype.toString.call(b) ? e(b) : ("[object PromiseRejectionEvent]" === Object.prototype.toString.call(b) ? handler : find)(b);
  }
  /**
   * @param {!Function} test
   * @return {?}
   */
  function create(test) {
    /**
     * @param {!Object} fn
     * @return {?}
     */
    function wrap(fn) {
      return isFunction(fn) ? fn._w_ || (fn._w_ = function() {
        try {
          return (fn.handleEvent || fn).apply(this, [].map.call(arguments, wrap));
        } catch (value) {
          throw sprite && test(find(value)), value;
        }
      }) : fn;
    }
    /** @type {boolean} */
    var sprite = true;
    return methods.forEach(function(property) {
      return window[property] && inject(window, property, function(callback) {
        return function(n) {
          /** @type {!Array} */
          var list = [];
          /** @type {number} */
          var i = 1;
          for (; i < arguments.length; i++) {
            list[i - 1] = arguments[i];
          }
          return callback && callback.call.apply(callback, fn([this, wrap(n)], done(list), false));
        };
      })();
    }), inject(XMLHttpRequest.prototype, "send", function(fToRetry) {
      return function() {
        var tokens = this;
        /** @type {!Array} */
        var args = [];
        /** @type {number} */
        var i = 0;
        for (; i < arguments.length; i++) {
          args[i] = arguments[i];
        }
        return props.forEach(function(current) {
          return tokens[current] && inject(tokens, current, wrap)();
        }), fToRetry.apply(this, args);
      };
    })(), eventTargets.forEach(function(api) {
      api = window[api] && window[api].prototype;
      if (api && api[property]) {
        inject(api, property, function(callback) {
          return function(args, self, extra) {
            try {
              var fn = self.handleEvent;
              if (isFunction(fn)) {
                self.handleEvent = wrap(fn);
              }
            } catch (n) {
            }
            return callback && callback.call(this, args, wrap(self), extra);
          };
        })();
        inject(api, "removeEventListener", function(ctx) {
          return function(n, right, fontHeight) {
            return null != right && right._w_ && ctx.call(this, n, right._w_, fontHeight), ctx.call(this, n, right, fontHeight);
          };
        })();
      }
    }), function() {
      return sprite = false;
    };
  }
  /**
   * @param {string} token1
   * @param {string} token2
   * @return {?}
   */
  function logger(token1, token2) {
    return token1 && token2 && token1 === token2;
  }
  /**
   * @return {?}
   */
  function connect() {
    var result;
    return function(wrapped) {
      try {
        if (err = result, !(!(e = wrapped) || !err) && !(!logger(e.message, err.message) && !logger(e.stack, err.stack))) {
          return void(result = wrapped);
        }
      } catch (delayFn) {
        expect(delayFn);
      }
      var e;
      var err;
      return result = wrapped;
    };
  }
  /**
   * @param {string} attr
   * @return {?}
   */
  function template(attr) {
    return attr = "link" === (el = attr).tagName.toLowerCase() ? "href" : "src", isFunction(el.getAttribute) ? el.getAttribute(attr) || "" : el[attr] || "";
    var el;
  }
  /**
   * @param {string} str
   * @param {number} id
   * @return {?}
   */
  function $(str, id) {
    return extend({
      name : str,
      value : id
    }, defaults);
  }
  /**
   * @param {string} value
   * @return {?}
   */
  function register(value) {
    return {
      ev_type : "performance",
      payload : value
    };
  }
  /**
   * @param {!Array} options
   * @param {!Array} name
   * @return {?}
   */
  function link(options, name) {
    return void 0 === options && (options = clone()), void 0 === name && (name = match()), function(n, e) {
      /**
       * @param {!Object} t
       * @return {undefined}
       */
      function stop(t) {
        var value = t.processingStart;
        t = t.startTime;
        /** @type {number} */
        cal.value = value - t;
        apply(cal);
      }
      var cal = $("fid", 0);
      var apply = done(push(e), 1)[0];
      if (!name || !options) {
        return cal.isSupport = false, void apply(cal);
      }
      e = (0, done(next(name), 3)[2])(GET_AUTH_URL_TIMEOUT)[0];
      if (e) {
        stop(e);
      } else {
        (0, done(forEach(options, stop, true), 1)[0])(GET_AUTH_URL_TIMEOUT);
      }
    };
  }
  /**
   * @param {!Array} options
   * @return {?}
   */
  function plugin(options) {
    return void 0 === options && (options = clone()), function(keys, error) {
      keys = keys.precollect;
      var tag = $("lcp", 0);
      var split = done(push(error), 1)[0];
      if (!options) {
        return tag.isSupport = false, void split(tag);
      }
      (keys.entries || []).forEach(function(attrs) {
        var entryType = attrs.entryType;
        attrs = attrs.startTime;
        if (entryType === buffer) {
          /** @type {!Object} */
          tag.value = attrs;
        }
      });
      error = done(forEach(options, function(value) {
        value = value.startTime;
        /** @type {!Object} */
        tag.value = value;
      }), 2);
      keys = error[0];
      var convertMathArrayToAsmjs = error[1];
      keys(buffer);
      /**
       * @return {undefined}
       */
      var convert = function() {
        convertMathArrayToAsmjs();
        pointerEvents.forEach(function(type) {
          window.removeEventListener(type, fn, true);
        });
      };
      /**
       * @return {undefined}
       */
      var fn = function() {
        split(tag);
        convert();
      };
      pointerEvents.forEach(function(n) {
        window.addEventListener(n, fn, true);
      });
      ready(function() {
        /** @type {boolean} */
        tag.isSupport = false;
        fn();
      });
      on(function() {
        /** @type {boolean} */
        tag.isBounced = true;
        fn();
      });
    };
  }
  /**
   * @param {!Array} options
   * @param {!Array} results
   * @return {?}
   */
  function test(options, results) {
    return void 0 === options && (options = clone()), void 0 === results && (results = match()), function(item, e) {
      var start = item.metricName;
      var name = item.entryName;
      var s = $(start, 0);
      var postMessage = done(push(e), 1)[0];
      if (!results || !options) {
        return s.isSupport = false, void postMessage(s);
      }
      var v0;
      /**
       * @param {!Object} t
       * @return {undefined}
       */
      var draw = function(t) {
        t = t.startTime;
        /** @type {!Object} */
        s.value = t;
        postMessage(s);
      };
      start = (0, done(next(results), 5)[4])(name)[0];
      if (start) {
        draw(start);
      } else {
        start = (e = done(forEach(options, function(e) {
          if (e.name === name) {
            draw(e);
            v0();
          }
        }), 2))[0];
        v0 = e[1];
        start("paint");
        ready(function() {
          /** @type {boolean} */
          s.isSupport = false;
          postMessage(s);
          v0();
        });
        on(function() {
          /** @type {boolean} */
          s.isBounced = true;
          postMessage(s);
          v0();
        });
      }
    };
  }
  /**
   * @param {!Array} options
   * @param {!Array} result
   * @return {?}
   */
  function query(options, result) {
    return void 0 === options && (options = clone()), void 0 === result && (result = match()), function(cookie, e) {
      var s = $("mpfid", 0);
      var sequence = done(push(e), 1)[0];
      if (!options) {
        return s.isSupport = false, sequence(s), [undefined];
      }
      /** @type {!Array} */
      var colorDist = [];
      e = cookie.precollect;
      if (e) {
        (e.entries || []).forEach(function(n) {
          if (n.entryType === div) {
            colorDist.push(n);
          }
        });
      }
      cookie = done(forEach(options, function(n) {
        return colorDist.push(n);
      }), 2);
      e = cookie[0];
      var uid = cookie[1];
      e(div);
      return [function() {
        uid();
        var watchState = (0, done(next(result), 5)[4])(entryName)[0];
        var ri = watchState && watchState.startTime || 0;
        s.value = colorDist.reduce(function(li, e) {
          var r = e.duration;
          e = e.startTime;
          return li < r && ri < e ? r : li;
        }, 0);
        sequence(s);
      }];
    };
  }
  /**
   * @param {?} e
   * @return {?}
   */
  function fun(e) {
    /**
     * @param {string} s
     * @return {undefined}
     */
    function cb(s) {
      if (!(s < start || !value)) {
        load();
        i = window.setTimeout(value, s - e());
        /** @type {string} */
        start = s;
      }
    }
    var value;
    /** @type {number} */
    var start = -1 / 0;
    var i = void 0;
    /**
     * @return {?}
     */
    var load = function() {
      return window.clearTimeout(i);
    };
    return [function(optInitialValue, s) {
      /** @type {!Function} */
      value = optInitialValue;
      cb(s);
    }, function() {
      load();
      value = void 0;
    }, cb];
  }
  /**
   * @param {!Array} data
   * @param {!Function} callback
   * @return {?}
   */
  function render(data, callback) {
    /** @type {!Array} */
    var html = ["img", "script", "iframe", "link", "audio", "video", "source"];
    var createElement = (data = done(log(data, function(mutations) {
      /** @type {number} */
      var i = 0;
      for (; i < mutations.length; i++) {
        if ("childList" === mutations[i].type && function process(result, lang) {
          /** @type {number} */
          var i = 0;
          for (; i < result.length; i++) {
            if (resolve(lang, result[i].nodeName.toLowerCase()) || result[i].children && process(result[i].children, lang)) {
              return 1;
            }
          }
        }(mutations[i].addedNodes, html) || "attributes" === mutations[i].type && resolve(html, mutations[i].target.nodeName.toLowerCase())) {
          callback(mutations[i]);
        }
      }
    }), 2))[0];
    return [function() {
      return createElement(document, {
        attributes : true,
        childList : true,
        subtree : true,
        attributeFilter : ["href", "src"]
      });
    }, data[1]];
  }
  /**
   * @param {number} now
   * @return {?}
   */
  function calculateBars(now) {
    now = (last = now || {}).domContentLoadedEventEnd;
    var last = last.navigationStart;
    return now ? now - (void 0 === last ? 0 : last) : null;
  }
  /**
   * @param {!Function} callback
   * @return {?}
   */
  function h(callback) {
    return function() {
      /** @type {!Array} */
      var argumentsArray = [];
      /** @type {number} */
      var i = 0;
      for (; i < arguments.length; i++) {
        argumentsArray[i] = arguments[i];
      }
      return this._method = argumentsArray[0], callback.apply(this, argumentsArray);
    };
  }
  /**
   * @param {!Function} animate
   * @param {?} callback
   * @param {?} page
   * @return {?}
   */
  function show(animate, callback, page) {
    /** @type {number} */
    var value = 0;
    return function() {
      /** @type {!Array} */
      var element = [];
      /** @type {number} */
      var i = 0;
      for (; i < arguments.length; i++) {
        element[i] = arguments[i];
      }
      if ("GET" !== this._method) {
        return animate.apply(this, element);
      }
      var next = value = value + 2;
      return callback(next, Date.now()), map(this, "onreadystatechange", function(compare) {
        return function(otherCards) {
          if (compare) {
            compare.call(this, otherCards);
          }
          if (4 === this.readyState) {
            page(next);
          }
        };
      })(), animate.apply(this, element);
    };
  }
  /**
   * @param {!Function} _
   * @param {?} c
   * @param {?} f
   * @return {?}
   */
  function write(_, c, f) {
    /** @type {number} */
    var g = 1;
    return function() {
      var iface;
      /** @type {!Array} */
      var obj = [];
      /** @type {number} */
      var i = 0;
      for (; i < arguments.length; i++) {
        obj[i] = arguments[i];
      }
      return "GET" !== ((null === (iface = obj[0]) || void 0 === iface ? void 0 : iface.method) || (null === (iface = obj[1]) || void 0 === iface ? void 0 : iface.method) || "GET") ? _.apply(void 0, fn([], done(obj), false)) : new Promise(function(saveNotifs, addListenerOrObserver) {
        var r = g = g + 2;
        c(r, Date.now());
        _.apply(void 0, fn([], done(obj), false)).then(function(notifications) {
          f(r);
          saveNotifs(notifications);
        }, function(proto) {
          f(r, proto);
          addListenerOrObserver(proto);
        });
      });
    };
  }
  /**
   * @param {number} result
   * @param {number} value
   * @param {?} input
   * @param {?} data
   * @return {?}
   */
  function report(result, value, input, data) {
    return function(events, saveNotifs, wrongCredsCallback) {
      /**
       * @return {?}
       */
      function get() {
        return function(aAttributes, decision, Calendar) {
          if (2 < aAttributes.length) {
            return Calendar();
          }
          /** @type {!Array} */
          var suggestions = [];
          /** @type {number} */
          var i = 0;
          for (; i < decision.length; i++) {
            suggestions.push([decision[i].start, 0], [decision[i].end, 1]);
          }
          /** @type {number} */
          i = 0;
          for (; i < aAttributes.length; i++) {
            suggestions.push([aAttributes[i], 0]);
          }
          suggestions.sort(function(subtractor, subtractee) {
            return subtractor[0] - subtractee[0];
          });
          var nAttributes = aAttributes.length;
          /** @type {number} */
          i = suggestions.length - 1;
          for (; 0 <= i; i--) {
            var tiledImageBRs = done(suggestions[i], 2);
            var tiledImageBR = tiledImageBRs[0];
            switch(tiledImageBRs[1]) {
              case 0:
                nAttributes--;
                break;
              case 1:
                if (2 < ++nAttributes) {
                  return tiledImageBR;
                }
            }
          }
          return 0;
        }(function(data) {
          /** @type {!Array<string>} */
          var props2 = Object.keys(data);
          /** @type {!Array} */
          var destination = [];
          /** @type {number} */
          var i = 0;
          for (; i < props2.length; i++) {
            var buffer = data[props2[i]];
            if ("number" == typeof buffer) {
              destination.push(buffer);
            }
          }
          return destination;
        }(callback), res, wrongCredsCallback);
      }
      var returnNodes;
      var identifierPositions;
      var parent;
      var el;
      var comboHashes;
      var hit;
      var next;
      var ret;
      var state = done([returnNodes = [], identifierPositions = [], function(allDoneCb, continuation_proxy) {
        return function(result) {
          var index = result.startTime;
          var length = result.duration;
          var start = result.fetchStart;
          var re = result.responseEnd;
          var accounts = result.entryType;
          if ("longtask" === accounts) {
            result.start = index;
            result.end = index + length;
            returnNodes.push(result);
            if (allDoneCb) {
              allDoneCb(result);
            }
          } else {
            if ("resource" === accounts) {
              identifierPositions.push({
                start : start,
                end : re
              });
              if (continuation_proxy) {
                continuation_proxy(result);
              }
            }
          }
        };
      }], 3);
      var cssPropState = state[0];
      var res = state[1];
      var dispatch = state[2];
      var cb = done((parent = result, el = value, cb = done([comboHashes = {}, function(hashId, combo) {
        return comboHashes[hashId] = combo;
      }, function(hashId) {
        return delete comboHashes[hashId];
      }], 3), timer = cb[0], state = cb[1], cb = cb[2], hit = el && map(el.prototype, "open", h)(), next = el && map(el.prototype, "send", show)(state, cb), ret = parent && map(parent, "fetch", write)(state, cb), [timer, function() {
        if (hit) {
          hit(true);
        }
        if (next) {
          next(true);
        }
        if (ret) {
          ret(true);
        }
      }]), 2);
      var callback = cb[0];
      var b = cb[1];
      var timer = done(data && render(data, function() {
        return saveNotifs(wrongCredsCallback() + 5e3);
      }) || [], 2);
      cb = timer[0];
      var initSortMenu = timer[1];
      if (cb) {
        cb();
      }
      timer = done(forEach(input, dispatch(function(o) {
        var s = o.startTime;
        o = o.duration;
        return saveNotifs(s + o + 5e3);
      }, function() {
        return saveNotifs(get() + 5e3);
      }), false, function() {
        return cssPropState.notSupport = true;
      }), 2);
      cb = timer[0];
      var handleTimeoutPacket = timer[1];
      return cb("longtask", "resource"), events.forEach(dispatch()), [cssPropState, function() {
        b();
        handleTimeoutPacket();
        if (initSortMenu) {
          initSortMenu();
        }
      }, get];
    };
  }
  /**
   * @param {!Object} h
   * @param {number} zIndex
   * @param {number} size
   * @param {!Array} width
   * @return {?}
   */
  function position(h, zIndex, size, width) {
    if (!h || -1 < width.indexOf(h.tagName)) {
      return 0;
    }
    var value = h.children;
    if ((value = [].slice.call(void 0 === value ? [] : value).reduceRight(function(object, value) {
      return object + position(value, zIndex + 1, 0 < object, width);
    }, 0)) <= 0 && !size) {
      if (!isFunction(h.getBoundingClientRect)) {
        return 0;
      }
      size = h.getBoundingClientRect() || {};
      h = size.top;
      size = size.height;
      if (h > window.innerHeight || size <= 0) {
        return 0;
      }
    }
    return value + 1 + 0.5 * zIndex;
  }
  /**
   * @param {!Object} window
   * @param {!Object} document
   * @param {!Array} data
   * @param {!Array} query
   * @param {!Array} result
   * @return {?}
   */
  function close(window, document, data, query, result) {
    if (void 0 === window && (window = apply()), void 0 === document && (document = join()), void 0 === data && (data = clone()), void 0 === query && (query = def()), void 0 === result && (result = match()), document && window) {
      return function(options, resolve) {
        /**
         * @return {undefined}
         */
        function quit() {
          if (_takingTooLongTimeout) {
            clearTimeout(_takingTooLongTimeout);
          }
          _takingTooLongTimeout = window.setTimeout(function() {
            callback(function() {
              window.requestAnimationFrame(function() {
                var value = key ? document.querySelector(key) : document.body;
                if (value) {
                  if ((value = getValue(value, 0, 0, width)) < width) {
                    /** @type {!Array} */
                    e = [Date.now(), value];
                    gotoNewOfflinePage();
                  } else {
                    e = void 0;
                  }
                }
              });
            });
          }, 1e3);
        }
        var e;
        var response;
        var _takingTooLongTimeout;
        var check;
        var u;
        var beatTime;
        var width = options.threshold;
        var thumbnail = options.screenshot;
        var key = options.rootSelector;
        var readOnlyFn = options.autoDetect;
        var res = options.ssUrl;
        var callback = addListener(window);
        var depthOfPath = done(next(result), 2)[1];
        /** @type {number} */
        var now = 0;
        /** @type {boolean} */
        var isRoot = false;
        /**
         * @param {!Blob} result
         * @return {undefined}
         */
        var wait = function(result) {
          if (e && resolve) {
            resolve({
              ev_type : "blank_screen",
              payload : {
                timestamp : e[0],
                score : e[1],
                screenshot : result,
                error : response
              }
            });
          }
        };
        /** @type {function(): undefined} */
        var gotoNewOfflinePage = (check = function() {
          if (e && !isRoot) {
            /** @type {boolean} */
            isRoot = true;
            cleanup();
            if (thumbnail) {
              cb(wait, res, window, document);
            } else {
              wait();
            }
          }
        }, function() {
          if (!u) {
            /** @type {number} */
            beatTime = Date.now();
            u = window.setTimeout(function() {
              /** @type {number} */
              u = 0;
              if (!(beatTime < now)) {
                check();
              }
            }, depthOfPath() > maxDepth ? timeout : HOVER_DELAY);
          }
        });
        on(function() {
          if (!isRoot) {
            wait();
          }
        });
        /**
         * @return {undefined}
         */
        var cleanup = function() {
          clearTimeout(_takingTooLongTimeout);
          if (f) {
            f();
          }
          if (originalSuccess) {
            originalSuccess();
          }
        };
        var handler = done(log(query, quit), 2);
        var func = handler[0];
        var f = handler[1];
        options = done(forEach(data, function(n, canCreateDiscussions, inRevIdx) {
          return _takingTooLongTimeout && 1 < inRevIdx.length && quit();
        }), 2);
        handler = options[0];
        var originalSuccess = options[1];
        return readOnlyFn && (func(null === (func = join()) || void 0 === func ? void 0 : func.body, {
          subtree : true,
          childList : true
        }), handler("longtask", "resource"), quit()), [cleanup, function(key) {
          if (!isRoot) {
            /** @type {number} */
            now = Date.now();
            if (response && now - response.timestamp > radius2) {
              response = void 0;
            }
            response = makeRequest(response, key);
          }
        }, quit];
      };
    }
  }
  /**
   * @param {!Object} callback
   * @return {undefined}
   */
  function execute(callback) {
    var self;
    var value;
    value = values;
    (self = callback).on("init", function() {
      var func;
      var fn;
      var callback;
      var cb = wrap(self, type, value);
      if (cb) {
        cb = done(require(close, cb, self.report.bind(self)), 3);
        func = cb[0];
        fn = cb[1];
        cb = cb[2];
        self.on("report", callback = function(res) {
          return fn(res), res;
        });
        self.on("beforeDestroy", function() {
          func();
          self.off("report", callback);
        });
        self.provide("detectBlankScreen", cb);
      }
    });
  }
  /**
   * @param {!Object} elem
   * @return {?}
   */
  function appendChild(elem) {
    return (null == elem ? void 0 : elem.effectiveType) || (null == elem ? void 0 : elem.type) || "";
  }
  /**
   * @param {!Object} options
   * @param {number} f
   * @return {?}
   */
  function setTimeout(options, f) {
    var d = options.common || {};
    return d.sample_rate = f, options.common = d, options;
  }
  /**
   * @param {boolean} s
   * @param {?} i
   * @param {!Function} func
   * @param {number} arg
   * @param {!Function} callback
   * @return {?}
   */
  function exec(s, i, func, arg, callback) {
    return s ? (result = callback(arg, i), function() {
      return result;
    }) : function() {
      return func(i);
    };
    var result;
  }
  /**
   * @param {boolean} props
   * @param {string} value
   * @param {?} query
   * @param {?} substitutions
   * @return {?}
   */
  function format(props, value, query, substitutions) {
    if (void 0 === (props = v(props, value, function(n, nodeType) {
      return n[nodeType];
    }))) {
      return false;
    }
    var type;
    /** @type {string} */
    value = "boolean" == typeof props ? "bool" : isFinite(props) ? "number" : "string";
    return function(x, r, operator) {
      switch(operator) {
        case "eq":
          return resolve(r, x);
        case "neq":
          return !resolve(r, x);
        case "gt":
          return x > r[0];
        case "gte":
          return x >= r[0];
        case "lt":
          return x < r[0];
        case "lte":
          return x <= r[0];
        case "regex":
          return Boolean(x.match(new RegExp(r.join("|"))));
        case "not_regex":
          return !x.match(new RegExp(r.join("|")));
        default:
          return false;
      }
    }(props, (type = value, substitutions.map(function(aPrefValue) {
      switch(type) {
        case "number":
          return Number(aPrefValue);
        case "boolean":
          return "1" === aPrefValue;
        default:
          return String(aPrefValue);
      }
    })), query);
  }
  /**
   * @param {!Object} name
   * @param {!Object} options
   * @return {?}
   */
  function filter(name, options) {
    try {
      return "rule" === options.type ? format(name, options.field, options.op, options.values) : "and" === options.type ? options.children.every(function(Standard) {
        return filter(name, Standard);
      }) : options.children.some(function(Standard) {
        return filter(name, Standard);
      });
    } catch (delayFn) {
      return expect(delayFn), false;
    }
  }
  /**
   * @return {?}
   */
  function configure() {
    var window = apply();
    return window && window.navigator.sendBeacon ? {
      get : function() {
      },
      post : function(url, data) {
        window.navigator.sendBeacon(url, data);
      }
    } : {
      get : undefined,
      post : undefined
    };
  }
  /**
   * @param {!Object} options
   * @return {?}
   */
  function send(options) {
    /**
     * @return {undefined}
     */
    function onLoadComplete() {
      if (d.length) {
        transport.post({
          url : endpoint,
          data : this.getBatchData()
        });
        /** @type {!Array} */
        d = [];
      }
    }
    /**
     * @param {!Object} type
     * @return {undefined}
     */
    function send(type) {
      $http.post(Q.getEndpoint(), clean([type]));
    }
    var wait;
    var transport;
    var endpoint;
    var value;
    var val;
    var _SERVICE_TAKING_TOO_LONG;
    var d;
    var _takingTooLongTimeout;
    var Q = (transport = (wait = options).transport, endpoint = options.endpoint, value = options.size, val = void 0 === value ? 10 : value, _SERVICE_TAKING_TOO_LONG = void 0 === (wait = options.wait) ? 1e3 : wait, d = [], _takingTooLongTimeout = 0, {
      getSize : function() {
        return val;
      },
      getWait : function() {
        return _SERVICE_TAKING_TOO_LONG;
      },
      setSize : function(img) {
        /** @type {number} */
        val = img;
      },
      setWait : function(callback) {
        /** @type {!Object} */
        _SERVICE_TAKING_TOO_LONG = callback;
      },
      getEndpoint : function() {
        return endpoint;
      },
      setEndpoint : function(url) {
        endpoint = url;
      },
      send : function(obj) {
        d.push(obj);
        if (d.length >= val) {
          onLoadComplete.call(this);
        }
        clearTimeout(_takingTooLongTimeout);
        /** @type {number} */
        _takingTooLongTimeout = setTimeout(onLoadComplete.bind(this), _SERVICE_TAKING_TOO_LONG);
      },
      flush : function() {
        clearTimeout(_takingTooLongTimeout);
        onLoadComplete.call(this);
      },
      getBatchData : function() {
        return d.length ? clean(d) : "";
      },
      clear : function() {
        clearTimeout(_takingTooLongTimeout);
        /** @type {!Array} */
        d = [];
      }
    });
    var $http = configure();
    return on(function() {
      var cardData = Q.getBatchData();
      if (cardData) {
        $http.post(Q.getEndpoint(), cardData);
        Q.clear();
      }
      /** @type {function(!Object): undefined} */
      Q.send = send;
    }), Q;
  }
  /**
   * @param {!Object} data
   * @return {?}
   */
  function responseStatusSuccess(data) {
    var token;
    var nodes = data.plugins || {};
    for (token in nodes) {
      if (nodes[token] && !callback(nodes[token])) {
        nodes[token] = {};
      }
    }
    return extend(extend({}, data), {
      plugins : nodes
    });
  }
  /**
   * @param {!Object} data
   * @return {?}
   */
  function decryptDownload(data) {
    return callback(data) && "aid" in data;
  }
  /**
   * @param {!Object} message
   * @return {?}
   */
  function responseStatusError(message) {
    return extend({}, message);
  }
  /**
   * @return {?}
   */
  function getCurrentScript() {
    var console = apply();
    var script = join();
    if (console && script) {
      return (null === (script = null === (script = null === (script = script.currentScript) || void 0 === script ? void 0 : script.getAttribute("src")) || void 0 === script ? void 0 : script.match(/globalName=(.+)$/)) || void 0 === script ? void 0 : script[1]) || sname;
    }
  }
  /**
   * @param {string} options
   * @return {?}
   */
  function handleSmallerThan100(options) {
    return "APMPLUS" + options;
  }
  /**
   * @param {string} n
   * @return {?}
   */
  function merge(n) {
    return function(o) {
      try {
        var string = localStorage.getItem(o);
        var rec = string;
        return rec = string && "string" == typeof string ? JSON.parse(string) : rec;
      } catch (n) {
        return;
      }
    }(handleSmallerThan100(n)) || {
      userId : mobileLogin(),
      deviceId : mobileLogin(),
      r : Math.random()
    };
  }
  /**
   * @param {!Object} result
   * @return {undefined}
   */
  function loop(result) {
    var id = result.aid;
    var userId = result.userId;
    var deviceId = result.deviceId;
    result = result.sample;
    !function(aBundle, cast) {
      try {
        /** @type {(string|{deviceId: ?, r: ?, userId: ?})} */
        var name = "string" == typeof cast ? cast : JSON.stringify(cast);
        localStorage.setItem(aBundle, name);
      } catch (n) {
      }
    }(handleSmallerThan100(id), {
      userId : userId,
      deviceId : deviceId,
      r : result.r
    });
  }
  /**
   * @param {!Object} context
   * @param {!Object} params
   * @return {?}
   */
  function add(context, params) {
    if (!context || !params) {
      return context || params;
    }
    var env = extend(extend({}, context), params);
    return env.include_users = fn(fn([], done(context.include_users || []), false), done(params.include_users || []), false), env.rules = fn(fn([], done(Object.keys(context.rules || {})), false), done(Object.keys(params.rules || {})), false).reduce(function(to, key) {
      var rules;
      return key in to || (key in (context.rules || {}) && key in (params.rules || {}) ? (to[key] = extend(extend({}, context.rules[key]), params.rules[key]), to[key].conditional_sample_rules = fn(fn([], done(context.rules[key].conditional_sample_rules || []), false), done(params.rules[key].conditional_sample_rules || []), false)) : to[key] = (null === (rules = context.rules) || void 0 === rules ? void 0 : rules[key]) || (null === (rules = params.rules) || void 0 === rules ? void 0 : rules[key])),
      to;
    }, {}), env;
  }
  var doc;
  var eventListeners;
  /**
   * @return {?}
   */
  var extend = function() {
    return (extend = Object.assign || function(result) {
      var src;
      /** @type {number} */
      var i__7286__auto___11343 = 1;
      /** @type {number} */
      var len__7285__auto___11342 = arguments.length;
      for (; i__7286__auto___11343 < len__7285__auto___11342; i__7286__auto___11343++) {
        var prop;
        for (prop in src = arguments[i__7286__auto___11343]) {
          if (Object.prototype.hasOwnProperty.call(src, prop)) {
            result[prop] = src[prop];
          }
        }
      }
      return result;
    }).apply(this, arguments);
  };
  if ("object" == typeof document) {
    if (!("currentScript" in (doc = document))) {
      Object.defineProperty(doc, "currentScript", {
        get : function() {
          try {
            throw new Error;
          } catch (error) {
            /** @type {number} */
            var i = 0;
            /** @type {(Array<string>|null)} */
            var data = /.*at [^(]*\((.*):(.+):(.+)\)$/gi.exec(error.stack);
            /** @type {(boolean|string)} */
            var imgUrl = data && data[1] || false;
            /** @type {(number|string)} */
            var src = data && data[2] || 0;
            var memberAvatarUrl = doc.location.href.replace(doc.location.hash, "");
            /** @type {string} */
            var th_field = "";
            var scripts = doc.getElementsByTagName("script");
            if (imgUrl === memberAvatarUrl) {
              data = doc.documentElement.outerHTML;
              /** @type {!RegExp} */
              src = new RegExp("(?:[^\\n]+?\\n){0," + (src - 2) + "}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*", "i");
              th_field = data.replace(src, "$1").trim();
            }
            for (; i < scripts.length; i++) {
              if ("interactive" === scripts[i].readyState) {
                return scripts[i];
              }
              if (scripts[i].src === imgUrl) {
                return scripts[i];
              }
              if (imgUrl === memberAvatarUrl && scripts[i].innerHTML && scripts[i].innerHTML.trim() === th_field) {
                return scripts[i];
              }
            }
            return null;
          }
        }
      });
    }
  }
  if (!("undefined" == typeof Element || Element.prototype.addEventListener)) {
    /** @type {!Array} */
    eventListeners = [];
    /**
     * @param {string} type
     * @param {!Function} fn
     * @return {undefined}
     */
    remove = function(type, fn) {
      /** @type {number} */
      var i = 0;
      for (; i < eventListeners.length;) {
        var eventListener = eventListeners[i];
        if (eventListener.object === this && eventListener.type === type && eventListener.listener === fn) {
          if ("DOMContentLoaded" === type) {
            this.detachEvent("onreadystatechange", eventListener.wrapper);
          } else {
            this.detachEvent("on" + type, eventListener.wrapper);
          }
          eventListeners.splice(i, 1);
          break;
        }
        ++i;
      }
    };
    /** @type {function(string, !Function): undefined} */
    Element.prototype.addEventListener = addEventListenerFn = function(type, listener) {
      /**
       * @param {!Object} event
       * @return {undefined}
       */
      function wrapper(event) {
        event.target = event.srcElement;
        event.currentTarget = elem;
        if (void 0 !== listener.handleEvent) {
          listener.handleEvent(event);
        } else {
          listener.call(elem, event);
        }
      }
      var done;
      var e;
      var elem = this;
      if ("DOMContentLoaded" === type) {
        /**
         * @param {!Object} fn
         * @return {undefined}
         */
        done = function(fn) {
          if ("complete" === document.readyState) {
            wrapper(fn);
          }
        };
        document.attachEvent("onreadystatechange", done);
        eventListeners.push({
          object : this,
          type : type,
          listener : listener,
          wrapper : done
        });
        if ("complete" === document.readyState) {
          /** @type {!Window} */
          (e = new Event).srcElement = window;
          done(e);
        }
      } else {
        this.attachEvent("on" + type, wrapper);
        eventListeners.push({
          object : this,
          type : type,
          listener : listener,
          wrapper : wrapper
        });
      }
    };
    /** @type {function(string, !Function): undefined} */
    Element.prototype.removeEventListener = remove;
    if (HTMLDocument && !HTMLDocument.prototype.addEventListener) {
      /** @type {function(string, !Function): undefined} */
      HTMLDocument.prototype.addEventListener = addEventListenerFn;
      /** @type {function(string, !Function): undefined} */
      HTMLDocument.prototype.removeEventListener = remove;
    }
    if (Window && !Window.prototype.addEventListener) {
      /** @type {function(string, !Function): undefined} */
      Window.prototype.addEventListener = addEventListenerFn;
      /** @type {function(string, !Function): undefined} */
      Window.prototype.removeEventListener = remove;
    }
  }
  /** @type {!Array} */
  var events = ["init", "start", "config", "beforeDestroy", "provide", "report", "beforeBuild", "build", "beforeSend", "send", "beforeConfig"];
  /**
   * @return {undefined}
   */
  var undefined = function() {
  };
  var _ = Object.prototype;
  /** @type {number} */
  var _clientIdCounter = 0;
  /**
   * @return {undefined}
   */
  var inspect = function() {
    /** @type {!Array} */
    var list = [];
    /** @type {number} */
    var i = 0;
    for (; i < arguments.length; i++) {
      list[i] = arguments[i];
    }
    console.error.apply(console, fn(["[SDK]", Date.now(), ("" + _clientIdCounter++).padStart(8, " ")], done(list), false));
  };
  /** @type {number} */
  var nextGuid = 0;
  /**
   * @param {?} part
   * @return {?}
   */
  var id = function(part) {
    return Math.random() < Number(part);
  };
  /**
   * @param {?} i
   * @param {?} level
   * @return {?}
   */
  var step = function(i, level) {
    return i < Number(level);
  };
  /**
   * @param {!Object} _
   * @return {undefined}
   */
  var factory = function(_) {
    var data;
    var obj;
    var me;
    var plugins = (data = {}, obj = {}, me = {
      set : function(prop, val) {
        return data[prop] = val, obj[prop] = stringify(val), me;
      },
      merge : function(source) {
        return data = extend(extend({}, data), source), Object.keys(source).forEach(function(key) {
          obj[key] = stringify(source[key]);
        }), me;
      },
      delete : function(setName) {
        return delete data[setName], delete obj[setName], me;
      },
      clear : function() {
        return data = {}, obj = {}, me;
      },
      get : function(i) {
        return obj[i];
      },
      toString : function() {
        return extend({}, obj);
      }
    });
    _.provide("context", plugins);
    _.on("report", function(instance) {
      return instance.extra || (instance.extra = {}), instance.extra.context = plugins.toString(), instance;
    });
  };
  /**
   * @param {!Object} obj
   * @param {string} i
   * @param {string} t
   * @return {?}
   */
  var set = function(obj, i, t) {
    /**
     * @return {?}
     */
    function f() {
      /** @type {!Array} */
      var list = [];
      /** @type {number} */
      var i = 0;
      for (; i < arguments.length; i++) {
        list[i] = arguments[i];
      }
      var d = list[0];
      if (d) {
        var name = d.split(".")[0];
        if (name in f) {
          return result = f, n = d, lines = [].slice.call(list, 1), v(result, n, function(obj, prop) {
            if (obj && prop in obj && isFunction(obj[prop])) {
              try {
                return obj[prop].apply(obj, lines);
              } catch (n) {
                return;
              }
            }
          });
        }
        var lines;
        var result = root[name] || [];
        var n = null !== (n = null == i ? void 0 : i(obj)) && void 0 !== n ? n : {};
        result.push(fn([n], done(list), false));
        void(root[name] = result);
      }
    }
    var key;
    var root = {};
    for (key in map(obj, "provide", function(fn) {
      return function(i, elem) {
        f[i] = elem;
        fn.call(obj, i, elem);
      };
    })(), obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        f[key] = obj[key];
      }
    }
    return obj.on("provide", function(component) {
      if (root[component]) {
        root[component].forEach(function(context) {
          var path = done(context);
          context = path[0];
          path = path.slice(1);
          if (null != t) {
            t(obj, context, path);
          }
        });
        /** @type {null} */
        root[component] = null;
      }
    }), f;
  };
  /**
   * @return {undefined}
   */
  var expect = function() {
    /** @type {!Array} */
    var newItems = [];
    /** @type {number} */
    var i = 0;
    for (; i < arguments.length; i++) {
      newItems[i] = arguments[i];
    }
    var parse_env = function(n) {
      if (n) {
        return n.__SLARDAR_REGISTRY__ || (n.__SLARDAR_REGISTRY__ = {
          Slardar : {
            plugins : [],
            errors : []
          }
        }), n.__SLARDAR_REGISTRY__.Slardar;
      }
    }(apply());
    if (parse_env) {
      if (!parse_env.errors) {
        /** @type {!Array} */
        parse_env.errors = [];
      }
      parse_env.errors.push(newItems);
    }
  };
  /**
   * @param {!Object} type
   * @param {string} text
   * @return {?}
   */
  var log = function(type, text) {
    var p = type && new type(text);
    return [function(c, f) {
      if (p && c) {
        p.observe(c, f);
      }
    }, function() {
      return p && p.disconnect();
    }];
  };
  /**
   * @param {!Object} data
   * @return {?}
   */
  var next = function(data) {
    var ti = data && data.timing || void 0;
    return [ti, function() {
      return data && data.now ? data.now() : (Date.now ? Date.now() : +new Date) - (ti && ti.navigationStart || 0);
    }, function(obj) {
      var c = (data || {}).getEntriesByType;
      return isFunction(c) && c.call(data, obj) || [];
    }, function() {
      var requester = (data || {}).clearResourceTimings;
      if (isFunction(requester)) {
        requester.call(data);
      }
    }, function(obj) {
      var c = (data || {}).getEntriesByName;
      return isFunction(c) && c.call(data, obj) || [];
    }];
  };
  /**
   * @param {!Object} scope
   * @param {!Function} callback
   * @param {boolean} index
   * @param {!Function} fn
   * @return {?}
   */
  var forEach = function(scope, callback, index, fn) {
    var observer = scope && new scope(function(prop, t) {
      if (prop.getEntries) {
        prop.getEntries().forEach(function(identifierPositions, exisObj, gmInstance) {
          return callback(identifierPositions, exisObj, gmInstance, t);
        });
      } else {
        if (fn) {
          fn();
        }
      }
      if (index) {
        t.disconnect();
      }
    });
    return [function() {
      /** @type {!Array} */
      var testModules = [];
      /** @type {number} */
      var i = 0;
      for (; i < arguments.length; i++) {
        testModules[i] = arguments[i];
      }
      if (!scope || !observer) {
        return fn && fn();
      }
      try {
        testModules.forEach(function(n) {
          if (-1 < scope.supportedEntryTypes.indexOf(n)) {
            observer.observe({
              type : n,
              buffered : false
            });
          }
        });
      } catch (n) {
        try {
          observer.observe({
            entryTypes : testModules
          });
        } catch (n) {
          return fn && fn();
        }
      }
    }, function() {
      return observer && observer.disconnect();
    }];
  };
  /**
   * @param {!Function} type
   * @param {number} name
   * @param {!Function} url
   * @param {!Array} id
   * @return {?}
   */
  var require = function(type, name, url, id) {
    if (void 0 === name) {
      name = {};
    }
    if (void 0 === id) {
      /** @type {!Array} */
      id = [];
    }
    try {
      var init = type.apply(void 0, fn([], done(id), false));
      return init && init(name, url) || [];
    } catch (delayFn) {
      return expect(delayFn), [];
    }
  };
  /**
   * @param {!Object} options
   * @return {?}
   */
  var end = function(options) {
    var params = {
      url : emit(),
      timestamp : Date.now()
    };
    var val = options.config();
    return null != val && val.pid && (params.pid = val.pid), null != options && options.context && (params.context = options.context.toString()), params;
  };
  /**
   * @param {!Object} t
   * @param {!Object} type
   * @return {?}
   */
  var func = function(t, type) {
    return function(refreshFunc) {
      /**
       * @param {!Object} array
       * @return {?}
       */
      function method(array) {
        return array.overrides = type, array;
      }
      t.on("report", method);
      refreshFunc();
      t.off("report", method);
    };
  };
  /** @type {string} */
  var value = "<unknown>";
  /**
   * @param {!Function} fn
   * @return {?}
   */
  var push = function(fn) {
    /** @type {boolean} */
    var t = false;
    return [function(responce) {
      if (!t) {
        /** @type {boolean} */
        t = true;
        if (fn) {
          fn(responce);
        }
      }
    }];
  };
  /**
   * @param {!Function} name
   * @return {undefined}
   */
  var on = function(name) {
    var onclickEdition = done(push(name), 1)[0];
    ["unload", "beforeunload", "pagehide"].forEach(function(type) {
      addEventListener(type, onclickEdition);
    });
  };
  /** @type {!RegExp} */
  var inlineAttributeCommentRegex = new RegExp("(cookie|auth|jwt|token|key|ticket|secret|credential|session|password)", "i");
  /** @type {!RegExp} */
  var inlineAttributeIgnoreCommentRegex = new RegExp("(bearer|session)", "i");
  /**
   * @param {!Array} actual
   * @param {!Array} id
   * @return {?}
   */
  var result = function(actual, id) {
    if (void 0 === actual && (actual = check() && apply()), void 0 === id && (id = match()), actual) {
      var ns = f(id);
      return function(s2, undefined) {
        var focusApp;
        if (!!s2.autoWrap) {
          if (focusApp = XMLHttpRequest && XMLHttpRequest.prototype) {
            equal(focusApp, s2, undefined, ns);
          }
        }
        return [function(time, b, value) {
          /**
           * @return {?}
           */
          function sub_arr() {
            var n = new timeArray;
            return equal(n, a, key, query), n;
          }
          return a = b = void 0 === b ? s2 : b, key = value = void 0 === value ? undefined : value, query = ns, sub_arr.prototype = new (timeArray = time), ["DONE", "HEADERS_RECIEVED", "LOADING", "OPENED", "UNSENT"].forEach(function(n) {
            sub_arr[n] = timeArray[n];
          }), sub_arr;
          var timeArray;
          var a;
          var key;
          var query;
        }];
      };
    }
  };
  /**
   * @param {!Object} e
   * @param {string} callback
   * @return {?}
   */
  var onRelease = function(e, callback) {
    var app = e.config();
    var data = {
      url : emit(),
      pid : app.pid,
      view_id : app.viewId
    };
    return function(context) {
      e.report(extend(extend({}, context), {
        overrides : extend(extend({}, data), callback && callback(context) || {})
      }));
    };
  };
  /** @type {string} */
  var addVScroll = "ajax";
  var instance = {
    autoWrap : true,
    hookCbAtReq : noop,
    ignoreUrls : [],
    collectBodyOnError : false
  };
  /**
   * @param {!Object} object
   * @return {?}
   */
  var stop = function(object) {
    return function(typed) {
      if (!typed) {
        return typed;
      }
      var app = object.config();
      var data = {
        url : emit(),
        pid : app.pid,
        view_id : app.viewId
      };
      return function(options) {
        typed(extend(extend({}, options), {
          overrides : extend(extend({}, data), {
            timestamp : options.payload.request.timestamp
          })
        }));
      };
    };
  };
  /**
   * @param {number} list
   * @return {?}
   */
  var start = function(list) {
    if (list = void 0 === list ? join() : list) {
      return function(header, canCreateDiscussions) {
        var callback;
        var name = header.maxBreadcrumbs;
        var value = header.onAddBreadcrumb;
        var id = header.onMaxBreadcrumbs;
        var headerEl = header.dom;
        var get = done(pipe(100), 2);
        header = get[0];
        get = get[1];
        name = done(function(index, defaultValue, transform) {
          if (void 0 === index) {
            /** @type {number} */
            index = 20;
          }
          if (void 0 === defaultValue) {
            /** @type {function(!Object): ?} */
            defaultValue = noop;
          }
          if (void 0 === transform) {
            /**
             * @param {string} context
             * @param {number} offset
             * @return {?}
             */
            transform = function(context, offset) {
              return context.slice(-offset);
            };
          }
          /** @type {!Array} */
          var base64 = [];
          return [function() {
            return base64;
          }, function(value) {
            if (defaultValue(value)) {
              value = extend(extend({}, value), {
                timestamp : value.timestamp || Date.now()
              });
              base64 = 0 <= index && base64.length + 1 > index ? transform(fn(fn([], done(base64), false), [value], false), index) : fn(fn([], done(base64), false), [value], false);
            }
          }];
        }(name, value, id), 2);
        value = name[0];
        id = name[1];
        /** @type {function(!Object): undefined} */
        name = (callback = id, function(e) {
          var reqErr;
          try {
            reqErr = e.event.target ? run(e.event.target) : run(e.event);
          } catch (n) {
            /** @type {string} */
            reqErr = "<unknown>";
          }
          if (0 !== reqErr.length) {
            callback({
              type : "dom",
              category : "ui." + e.name,
              message : reqErr
            });
          }
        });
        /** @type {!Array} */
        var item = [];
        if (headerEl) {
          item.push(header("click", compare(name, "dom")));
          item.push(get(compare(name, "dom")));
          list.addEventListener("click", item[0]);
          list.addEventListener("keypress", item[1]);
        }
        return [value, id, function() {
          list.removeEventListener("click", item[0]);
          list.removeEventListener("keypress", item[1]);
        }];
      };
    }
  };
  /** @type {string} */
  var x = "breadcrumb";
  var data = {
    maxBreadcrumbs : 20,
    dom : true
  };
  /**
   * @param {number} options
   * @param {number} name
   * @param {number} callback
   * @param {!Array} id
   * @return {?}
   */
  var request = function(options, name, callback, id) {
    if (void 0 === options && (options = handleRequest() && apply()), void 0 === name && (name = window.Headers), void 0 === callback && (callback = window.Request), void 0 === id && (id = match()), options && name && callback) {
      var ns = f(id);
      return function(undefined, res) {
        if (undefined.autoWrap) {
          inject(options, "fetch", load)(undefined, res, name, callback, ns);
        }
        return [function(e, value, data) {
          return load(e, value = void 0 === value ? undefined : value, data = void 0 === data ? res : data, name, callback, ns);
        }];
      };
    }
  };
  /** @type {string} */
  var url = "fetch";
  var frame = {
    autoWrap : true,
    hookCbAtReq : noop,
    ignoreUrls : [],
    collectBodyOnError : false
  };
  /** @type {!Array} */
  var fields = ["name", "message", "stack", "filename", "lineno", "colno"];
  /** @type {!Array} */
  var eventTargets = ["EventTarget", "Window", "Node", "ApplicationCache", "ChannelMergerNode", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "MessagePort", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
  /** @type {!Array} */
  var methods = ["setTimeout", "setInterval", "requestAnimationFrame", "requestIdleCallback"];
  /** @type {!Array} */
  var props = ["onload", "onerror", "onprogress", "onreadystatechange"];
  /** @type {string} */
  var property = "addEventListener";
  /**
   * @param {number} window
   * @return {?}
   */
  var bind = function(window) {
    if (window = void 0 === window ? apply() : window) {
      return function(opts, c) {
        var f;
        var handleMessage;
        var fn = opts.ignoreErrors;
        var onerror = opts.onerror;
        var onunhandledrejection = opts.onunhandledrejection;
        var s = opts.dedupe;
        opts = opts.captureGlobalAsync;
        var str = toString(fn);
        /** @type {!Array} */
        var links = [];
        var parseInt = connect();
        /**
         * @param {string} n
         * @param {!Object} event
         * @param {?} data
         * @return {undefined}
         */
        var l = function(n, event, data) {
          n = s ? parseInt(n) : n;
          if (c && n) {
            if (!(str && str.test(n.message))) {
              c({
                ev_type : "js_error",
                payload : {
                  error : n,
                  breadcrumbs : [],
                  extra : event,
                  react : data
                }
              });
            }
          }
        };
        if (onerror) {
          window.addEventListener("error", f = function(n) {
            return l(e(n));
          });
          links.push(function() {
            return window.removeEventListener("error", f);
          });
        }
        if (onunhandledrejection) {
          window.addEventListener("unhandledrejection", handleMessage = function(n) {
            debugger;
            return l(handler(n));
          });
          links.push(function() {
            return window.removeEventListener("unhandledrejection", handleMessage);
          });
        }
        if (opts) {
          links.push(create(l));
        }
        return [function(n, e, f) {
          return l(g(n), e, f);
        }, function() {
          links.forEach(function(saveNotifs) {
            return saveNotifs();
          });
        }];
      };
    }
  };
  /** @type {string} */
  var parameter = "jsError";
  var req = {
    ignoreErrors : [],
    onerror : true,
    onunhandledrejection : true,
    captureGlobalAsync : false,
    dedupe : true
  };
  /**
   * @param {number} el
   * @param {number} options
   * @param {!Array} f
   * @return {?}
   */
  var main = function(el, options, f) {
    if (void 0 === el && (el = apply()), void 0 === options && (options = error()), void 0 === f && (f = apply() && window.history), el && options) {
      return function(config, dispatch) {
        var translated;
        var i;
        var rtval;
        var $;
        var init;
        var render;
        var set;
        var lastTrackInfoUrl;
        var res = config.sendInit;
        var func = config.initPid;
        var name = config.routeMode;
        var cb = config.extractPid;
        config = config.onPidUpdate;
        /** @type {!Array} */
        var failureRecaps = [];
        /** @type {!Function} */
        var remove = "manual" === name ? function() {
          return "";
        } : (translated = name, function(url) {
          var _currentHash;
          return "hash" === translated ? (null === (_currentHash = parseURL(url).hash) || void 0 === _currentHash ? void 0 : _currentHash.replace(/^#/, "")) || "/" : parseURL(url).path;
        });
        var callback = cb || function() {
        };
        cb = done(function(log, n, modstatus, func) {
          /** @type {string} */
          var lastTrackInfoUrl = modstatus;
          /** @type {string} */
          var i = n;
          if (func) {
            func(n);
          }
          return [function(init, trackInfoUrl, fromIndex) {
            if ("user_set" !== init && trackInfoUrl !== lastTrackInfoUrl) {
              /** @type {string} */
              lastTrackInfoUrl = trackInfoUrl;
              i = null != fromIndex ? fromIndex : lastTrackInfoUrl;
              if (func) {
                func(i);
              }
              log(init, i);
            } else {
              if ("user_set" === init && trackInfoUrl !== i) {
                /** @type {string} */
                i = trackInfoUrl;
                if (func) {
                  func(i);
                }
                log(init, i);
              }
            }
          }, function() {
            if (n) {
              log("init", n);
            }
          }];
        }(function(event, id) {
          if (dispatch) {
            dispatch({
              ev_type : "pageview",
              payload : {
                pid : id,
                source : event
              }
            });
          }
        }, func || (i = options.href, null !== (rtval = callback(i)) && void 0 !== rtval ? rtval : remove(i)), remove(options.href), config), 2);
        var setter = cb[0];
        func = cb[1];
        config = setter.bind(null, "user_set");
        if ("manual" !== name) {
          $ = done((set = function(o, value) {
            return setter(o, remove(value), callback(value));
          }, lastTrackInfoUrl = "", [function(n, trackInfoUrl) {
            if (trackInfoUrl !== lastTrackInfoUrl) {
              set(n, lastTrackInfoUrl = trackInfoUrl);
            }
          }]), 1)[0];
          /**
           * @return {?}
           */
          init = function() {
            return $("history", options.href);
          };
          if (f) {
            /**
             * @param {!Function} value
             * @return {?}
             */
            cb = function(value) {
              return function() {
                /** @type {!Array} */
                var args = [];
                /** @type {number} */
                var i = 0;
                for (; i < arguments.length; i++) {
                  args[i] = arguments[i];
                }
                try {
                  value.apply(f, args);
                } finally {
                  init();
                }
              };
            };
            failureRecaps.push(map(f, "pushState", cb)(), map(f, "replaceState", cb)());
          }
          if ("hash" === name) {
            /**
             * @return {?}
             */
            render = function() {
              return $("hash", options.href);
            };
            el.addEventListener("hashchange", render, true);
            failureRecaps.push(function() {
              return el.removeEventListener("hashchange", render, true);
            });
          } else {
            el.addEventListener("popstate", init, true);
            failureRecaps.push(function() {
              return el.removeEventListener("popstate", init, true);
            });
          }
        }
        return res && func(), [config, function() {
          failureRecaps.forEach(function(saveNotifs) {
            return saveNotifs();
          });
        }];
      };
    }
  };
  /** @type {string} */
  var input = "pageview";
  var branch = {
    sendInit : true,
    routeMode : "history"
  };
  /** @type {string} */
  var categoryId = "resource";
  /** @type {!Array} */
  var validRequestTypes = ["xmlhttprequest", "fetch", "beacon"];
  /**
   * @param {!Array} name
   * @param {!Array} options
   * @param {!Array} t
   * @return {?}
   */
  var action = function(name, options, t) {
    if (void 0 === name && (name = match()), void 0 === options && (options = clone()), void 0 === t && (t = getTime()), name) {
      return function(options, handler) {
        var assertion = options.ignoreUrls;
        var total = options.slowSessionThreshold;
        var data = options.ignoreTypes;
        var doc = toString(assertion);
        /** @type {!Array} */
        var syncCbs = [];
        /**
         * @param {!Array} cls
         * @param {!Array} timeout
         * @return {undefined}
         */
        var dispatch = function(cls, timeout) {
          if (void 0 === timeout) {
            /** @type {boolean} */
            timeout = false;
          }
          cls = cls.filter(function(res) {
            return !(resolve(null != data ? data : validRequestTypes, res.initiatorType) || null != doc && doc.test(res.name));
          });
          if (handler && cls.length) {
            cls.forEach(function(commentPayload) {
              handler([{
                ev_type : "resource",
                payload : commentPayload
              }, timeout]);
            });
          }
        };
        var selectCategory = done(next(name), 3)[2];
        clear(function() {
          var cb;
          var getCategoryWithIndex;
          dispatch(selectCategory(categoryId), function() {
            if (!t) {
              return false;
            }
            /** @type {number} */
            var total_icons = t.loadEventEnd - t.navigationStart;
            return total < total_icons;
          }());
          cb = done(forEach(options, function(n, a, t) {
            return 0 === a && dispatch(t);
          }), 2);
          getCategoryWithIndex = cb[0];
          cb = cb[1];
          getCategoryWithIndex(categoryId);
          syncCbs.push(cb);
        });
        return [function() {
          syncCbs.forEach(function(saveNotifs) {
            return saveNotifs();
          });
        }];
      };
    }
  };
  /** @type {string} */
  var path = "resource";
  var size = {
    ignoreUrls : [],
    slowSessionThreshold : 4e3
  };
  /**
   * @param {!Array} window
   * @param {!Array} name
   * @param {number} url
   * @return {?}
   */
  var setup = function(window, name, url) {
    if (void 0 === window && (window = apply()), void 0 === name && (name = match()), void 0 === url && (url = null === location || void 0 === location ? void 0 : location.href), window) {
      return function(options, dispatch) {
        var fn = options.ignoreUrls;
        var predicate = options.includeUrls;
        var dedupe = options.dedupe;
        var result = toString(predicate);
        var str = toString(fn);
        var sequence_values = done(next(name), 5)[4];
        var url = void 0;
        /**
         * @param {!Object} item
         * @return {undefined}
         */
        var handle = function(item) {
          var path;
          var value;
          var text;
          var name;
          if (!(url && item.url === url || result && !result.test(item.url) || str && str.test(item.url))) {
            if (item.url || item.xpath && item.xpath !== value) {
              if (!(dedupe && item.url === url)) {
                url = item.url;
                value = sequence_values;
                text = (path = item).url;
                name = item.tagName;
                path = item.xpath;
                text = getText(text);
                value = value(text)[0];
                value = {
                  type : name.toLowerCase(),
                  url : text,
                  xpath : path,
                  timing : value
                };
                if (dispatch) {
                  dispatch({
                    ev_type : "resource_error",
                    payload : value
                  });
                }
              }
            }
          }
        };
        /**
         * @param {!Object} e
         * @return {undefined}
         */
        var init = function(e) {
          e = e || window.event;
          if (!!e) {
            if (e = function(result) {
              var context = result.target || result.srcElement;
              if (context) {
                var key = context.tagName;
                if (key && isArray(key)) {
                  result = template(context);
                  return {
                    url : result,
                    tagName : key,
                    xpath : result ? void 0 : run(context)
                  };
                }
              }
            }(e)) {
              handle(e);
            }
          }
        };
        window.addEventListener("error", init, true);
        return [handle, function() {
          window.removeEventListener("error", init, true);
        }];
      };
    }
  };
  /** @type {string} */
  var str = "resourceError";
  var options = {
    includeUrls : [],
    ignoreUrls : [],
    dedupe : true
  };
  var defaults = {
    isSupport : true,
    isPolyfill : false,
    isBounced : false,
    isCustom : false,
    type : "perf"
  };
  /** @type {string} */
  var GET_AUTH_URL_TIMEOUT = "first-input";
  /** @type {string} */
  var buffer = "largest-contentful-paint";
  /** @type {!Array} */
  var pointerEvents = ["keydown", "click"];
  /** @type {string} */
  var entryName = "first-contentful-paint";
  /** @type {string} */
  var div = "longtask";
  /**
   * @param {string} result
   * @return {?}
   */
  var wrapper = function(result) {
    return void 0 === result && (result = match()), function(id, next) {
      var scrollHeightObserver;
      var findLocation;
      var gotoNewOfflinePage;
      var iframe = id.precollect;
      var me = id.fp;
      var dims = id.fcp;
      var terminatingEntry = id.lcp;
      var fid = id.fid;
      var name = id.mpfid;
      var timing = id.timing;
      /**
       * @param {string} data
       * @return {undefined}
       */
      id = function(data) {
        if (next) {
          next({
            ev_type : "performance",
            payload : data
          });
        }
      };
      if (me) {
        require(test, {
          metricName : "fp",
          entryName : "first-paint"
        }, id);
      }
      if (dims) {
        require(test, {
          metricName : "fcp",
          entryName : entryName
        }, id);
      }
      if (terminatingEntry) {
        require(plugin, {
          precollect : iframe
        }, id);
      }
      if (fid) {
        require(link, 0, id);
      }
      if (name) {
        scrollHeightObserver = done(require(query, {
          precollect : iframe
        }, id), 1)[0];
        clear(function() {
          return setTimeout(scrollHeightObserver, 200);
        });
      }
      if (timing) {
        findLocation = done(next(result), 3)[2];
        gotoNewOfflinePage = done(push(function(n) {
          var timing = result && result.timing || void 0;
          var t = findLocation("navigation")[0];
          if (next) {
            next({
              ev_type : "performance_timing",
              payload : {
                isBounced : n,
                timing : timing,
                navigation_timing : t
              }
            });
          }
        }), 1)[0];
        clear(function() {
          gotoNewOfflinePage(false);
        });
        on(function() {
          gotoNewOfflinePage(true);
        });
      }
    };
  };
  /** @type {string} */
  var menu = "layout-shift";
  /**
   * @param {!Array} options
   * @return {?}
   */
  var process = function(options) {
    return void 0 === options && (options = clone()), function(cb, callback) {
      /**
       * @param {string} n
       * @return {undefined}
       */
      function action(n) {
        var nodeMinPrice = n.hadRecentInput;
        n = n.value;
        if (!nodeMinPrice) {
          ret.value += n;
        }
      }
      var func = done(cb, 1)[0];
      var ret = $("cls", 0);
      if (!options) {
        return ret.isSupport = false, [function() {
          return callback && callback(ret);
        }, undefined];
      }
      (func.entries || []).forEach(function(e) {
        if (e.entryType === menu) {
          action(e);
        }
      });
      cb = done(forEach(options, action), 2);
      func = cb[0];
      cb = cb[1];
      return func(menu), [function() {
        if (callback) {
          callback(ret);
        }
        ret = $("cls", 0);
      }, cb];
    };
  };
  /** @type {string} */
  var control = "longtask";
  /**
   * @param {!Array} options
   * @return {?}
   */
  var sync = function(options) {
    return void 0 === options && (options = clone()), function(v, fn) {
      /**
       * @param {!Array} result
       * @return {undefined}
       */
      function cb(result) {
        if (fn) {
          fn({
            longtasks : result,
            type : "pref"
          });
        }
      }
      var data = (v.precollect || {}).entries;
      v = (void 0 === data ? [] : data).filter(function(options) {
        return options.entryType === control;
      });
      if (v.length && cb(v), !options) {
        return [undefined];
      }
      data = done(forEach(options, function(error) {
        return cb([error]);
      }, false), 2);
      v = data[0];
      data = data[1];
      return v(control), [data];
    };
  };
  /**
   * @return {?}
   */
  var keyboard = function() {
    return function(n, e) {
      /** @type {number} */
      var x = 0;
      var select = $("spa_load", 0);
      /**
       * @param {number} name
       * @return {undefined}
       */
      var f = function(name) {
        /** @type {number} */
        select.value = name;
        if (e) {
          e(select);
        }
      };
      /**
       * @return {undefined}
       */
      var go = function() {
        f(Date.now() - x);
        /** @type {number} */
        x = 0;
      };
      return on(function() {
        if (x) {
          /** @type {boolean} */
          select.isBounced = true;
          go();
        }
      }), [function() {
        /** @type {number} */
        x = Date.now();
      }, go];
    };
  };
  /** @type {string} */
  var processedItem = "performance";
  var Error = {
    entries : [],
    observer : void 0
  };
  var message = {
    fp : true,
    fcp : true,
    fid : true,
    mpfid : true,
    lcp : true,
    cls : true,
    timing : true,
    longtask : true
  };
  /**
   * @param {number} name
   * @param {number} callback
   * @param {number} options
   * @param {!Array} type
   * @param {number} results
   * @return {?}
   */
  var exports = function(name, callback, options, type, results) {
    return void 0 === name && (name = check()), void 0 === callback && (callback = handleRequest() && apply()), void 0 === options && (options = clone()), void 0 === type && (type = def()), void 0 === results && (results = match()), function(result, check, write, cb) {
      /**
       * @param {string} data
       * @return {undefined}
       */
      function select(data) {
        /** @type {string} */
        status.value = data;
        createIsSearchQueryChangedFunction(status);
      }
      var status = $("tti", 0);
      var createIsSearchQueryChangedFunction = done(push(function(sessionId) {
        sessionId = register(sessionId);
        if (check) {
          check(sessionId);
        }
      }), 1)[0];
      if (!(name && callback && options && results)) {
        return status.isSupport = false, createIsSearchQueryChangedFunction(status), [function() {
          return 0;
        }];
      }
      var data = result.precollect;
      var errors = result.isAsync;
      errors = void 0 === errors ? 0 : errors;
      result = result.minValue;
      var bindingDefinitions = void 0 === result ? null : result;
      result = data || {};
      data = result.entries;
      var deg = void 0 === data ? [] : data;
      var observer = result.observer;
      data = done(next(results), 5);
      var text = data[0];
      var id = data[1];
      var updateIsBeat = data[4];
      result = done(fun(id), 3);
      data = result[0];
      var buildCompleted = result[1];
      var res = result[2];
      errors = done(report(callback, name, options, type)(errors ? [] : deg, res, id), 3);
      var err = errors[0];
      var buildStarted = errors[1];
      var x = errors[2];
      /**
       * @return {undefined}
       */
      var onChildOutput = function() {
        buildCompleted();
        buildStarted();
        if (write) {
          write();
        }
        if (observer) {
          observer.disconnect();
        }
        /** @type {number} */
        deg.length = 0;
      };
      /**
       * @param {string} callback
       * @return {?}
       */
      var update = function(callback) {
        var e = updateIsBeat("first-contentful-paint")[0];
        e = function(tmp, hatWidth, ay, oy, o) {
          if (oy - ay < 5e3) {
            return null;
          }
          o = 0 === o.length ? tmp : o[o.length - 1].end;
          return oy - o < 5e3 ? null : Math.max(o, hatWidth);
        }((e ? e.startTime : calculateBars(text)) || 0, bindingDefinitions || calculateBars(text) || 0, x(), id() + (callback ? 0 : 5e3), err);
        return callback ? e ? (onChildOutput(), void callback(e)) : res(id() + 1e3) : (onChildOutput(), e);
      };
      if (cb && cb(err, res, status), err.notSupport) {
        return status.isSupport = false, createIsSearchQueryChangedFunction(status), [function() {
          return 0;
        }];
      }
      cb = err[err.length - 1];
      data(function() {
        return update(select);
      }, Math.max(x() + 5e3, cb ? cb.end : 0));
      return [function() {
        return update() || 0;
      }];
    };
  };
  /** @type {string} */
  var widgetDataKey = "tti";
  /** @type {!Array} */
  var width = ["SCRIPT", "STYLE", "META", "HEAD"];
  /**
   * @param {number} name
   * @param {!Array} options
   * @param {string} time
   * @param {!Array} error
   * @param {!Object} url
   * @return {?}
   */
  var initialize = function(name, options, time, error, url) {
    var t;
    return void 0 === name && (name = join()), void 0 === options && (options = def()), void 0 === time && (time = null === (t = getTime()) || void 0 === t ? void 0 : t.navigationStart), void 0 === error && (error = function() {
      if (apply() && "requestAnimationFrame" in window) {
        return window.requestAnimationFrame;
      }
    }()), void 0 === url && (url = function() {
      if (apply() && "cancelAnimationFrame" in window) {
        return window.cancelAnimationFrame;
      }
    }()), function(fn, C) {
      /**
       * @return {?}
       */
      function next() {
        return res.push({
          time : Date.now() - now,
          score : position(name && name.body, 1, false, width)
        });
      }
      var mouseDownOnDragHandler = fn.renderType;
      var s = $("fmp", 0);
      /**
       * @param {string} i
       * @return {undefined}
       */
      var e = function(i) {
        i = register(i);
        if (C) {
          C(i);
        }
      };
      if ("SSR" === mouseDownOnDragHandler) {
        return require(test, {
          metricName : "fmp",
          entryName : entryName
        }, e), [undefined];
      }
      var updateHoldStat = done(push(e), 1)[0];
      if (!name || !options || !time) {
        return s.isSupport = false, updateHoldStat(s), [undefined];
      }
      var widget;
      var v;
      var o;
      var renderFn;
      /** @type {number} */
      var now = Date.now();
      /** @type {!Array} */
      var res = [];
      var initFiatRateService = done((widget = name, fn = url, mouseDownOnDragHandler = true, o = !isFunction(e = error) || mouseDownOnDragHandler && widget && widget.hidden ? function(iteratee) {
        return iteratee(0), 0;
      } : e, renderFn = isFunction(fn) ? fn : undefined, [function(n) {
        if (v) {
          renderFn(v);
        }
        v = o(n);
      }, o, renderFn]), 1)[0];
      e = done(log(options, function() {
        return initFiatRateService(next);
      }), 2);
      fn = e[0];
      var evts = e[1];
      /** @type {number} */
      e = now - (time || 0);
      return fn(name, {
        subtree : true,
        childList : true
      }), [function(part) {
        if (void 0 === part) {
          /** @type {number} */
          part = 0;
        }
        evts();
        var result;
        var contexts;
        result = (result = (contexts = done(void 0 === (result = res) ? [] : result))[0], (contexts = contexts.slice(1)) && contexts.reduce(function(result, b) {
          var t = done(result, 2);
          var a = t[0];
          result = t[1];
          /** @type {number} */
          t = b.score - a.score;
          return [b, b.time >= a.time && result.rate < t ? {
            time : b.time,
            rate : t
          } : result];
        }, [result, {
          time : null == result ? void 0 : result.time,
          rate : 0
        }])[1].time || 0);
        s.value = result ? result + part : 0;
        updateHoldStat(s);
      }.bind(null, e)];
    };
  };
  /** @type {string} */
  var definition = "fmp";
  var j = {
    renderType : "CSR"
  };
  /** @type {!Array} */
  var IGNORE_TAGS = ["SCRIPT", "STYLE", "META", "HEAD"];
  /** @type {!Array} */
  var utils = ["js_error", "http", "resource_error"];
  /** @type {number} */
  var maxDepth = 1e4;
  /** @type {number} */
  var HOVER_DELAY = 8e3;
  /** @type {number} */
  var timeout = 2e3;
  /** @type {number} */
  var radius2 = 1e4;
  /**
   * @param {!Object} self
   * @return {?}
   */
  var addListener = function(self) {
    return self.requestIdleCallback || function(n) {
      return self.setTimeout(n, 1);
    };
  };
  /**
   * @param {!Object} url
   * @param {!Object} settings
   * @return {?}
   */
  var makeRequest = function(url, settings) {
    if (-1 === utils.indexOf(settings.ev_type)) {
      return url;
    }
    if ("http" === settings.ev_type && settings.payload.response.status < 400) {
      return url;
    }
    if (url && utils.indexOf(url.type) < utils.indexOf(settings.ev_type)) {
      return url;
    }
    /** @type {string} */
    var str = "";
    switch(settings.ev_type) {
      case "js_error":
        str = settings.payload.error.message;
        break;
      case "http":
        str = settings.payload.request.url;
        break;
      case "resource_error":
        str = settings.payload.url;
    }
    return {
      type : settings.ev_type,
      message : str,
      timestamp : Date.now()
    };
  };
  /**
   * @param {!Element} obj
   * @param {number} level
   * @param {number} i
   * @param {number} name
   * @param {!Array} result
   * @return {?}
   */
  var getValue = function(obj, level, i, name, result) {
    if (void 0 === level && (level = 0), void 0 === i && (i = 0), void 0 === name && (name = 1.5), void 0 === result && (result = IGNORE_TAGS), !obj || -1 < result.indexOf(obj.tagName) || name <= i || 4 < level) {
      return i;
    }
    var indent = function() {
      if (!level) {
        return 0;
      }
      var val = obj.getBoundingClientRect();
      var height = val.top;
      val = val.height;
      return height > innerHeight || val <= 0 ? 0 : 1 / Math.pow(2, level - 1);
    }();
    return [].reduceRight.call(obj.children, function(f, typeArgs) {
      return getValue(typeArgs, level + 1, f, name, result);
    }, i + indent);
  };
  /**
   * @param {!Function} callback
   * @param {!Object} node
   * @param {!Object} self
   * @param {!Object} doc
   * @return {?}
   */
  var cb = function(callback, node, self, doc) {
    /**
     * @return {undefined}
     */
    function success() {
      addListener(self)(function() {
        self.html2canvas(doc.body, {
          scale : 360 / self.innerWidth
        }).then(function(canvas) {
          callback(canvas.toDataURL("image/jpeg", 0.1));
        });
      });
    }
    if (apply() && "Promise" in window && Promise && self && doc) {
      if (self.html2canvas) {
        return success();
      }
      var g = doc.createElement("script");
      /** @type {!Object} */
      g.src = node;
      if (null !== (node = doc.head) && void 0 !== node) {
        node.appendChild(g);
      }
      /** @type {function(): undefined} */
      g.onload = success;
    }
  };
  /** @type {string} */
  var type = "blankScreen";
  var values = {
    autoDetect : true,
    threshold : 1.5,
    screenshot : true,
    ssUrl : "https://apm.volccdn.com/mars-web/apmplus/web/html2canvas.min.js"
  };
  /** @type {string} */
  var cssFormat = "custom";
  /**
   * @param {!Object} data
   * @return {?}
   */
  var decode = function(data) {
    if (data && callback(data) && data.name && isArray(data.name)) {
      var result = {
        name : data.name,
        type : "event"
      };
      if ("metrics" in data && callback(data.metrics)) {
        var stats = data.metrics;
        var values = {};
        for (i in stats) {
          if (isFinite(stats[i])) {
            values[i] = stats[i];
          }
        }
        result.metrics = values;
      }
      if ("categories" in data && callback(data.categories)) {
        var i;
        var categories = data.categories;
        var values = {};
        for (i in categories) {
          values[i] = stringify(categories[i]);
        }
        result.categories = values;
      }
      return result;
    }
  };
  /**
   * @param {!Object} data
   * @return {?}
   */
  var list = function(data) {
    if (data && callback(data) && data.content && isArray(data.content)) {
      var item = {
        content : stringify(data.content),
        type : "log",
        level : "info"
      };
      if ("level" in data && (item.level = data.level), "extra" in data && callback(data.extra)) {
        var i;
        var values = data.extra;
        var res = {};
        var result = {};
        for (i in values) {
          if (isFinite(values[i])) {
            res[i] = values[i];
          } else {
            result[i] = stringify(values[i]);
          }
        }
        item.metrics = res;
        item.categories = result;
      }
      return item;
    }
  };
  /**
   * @param {!Object} conn
   * @return {undefined}
   */
  var success = function(conn) {
    var input = select();
    var result = appendChild(input);
    if (input) {
      /**
       * @return {undefined}
       */
      input.onchange = function() {
        result = appendChild(input);
      };
    }
    conn.on("report", function(data) {
      return extend(extend({}, data), {
        extra : extend(extend({}, data.extra || {}), {
          network_type : result
        })
      });
    });
  };
  /**
   * @param {string} m
   * @param {number} b
   * @param {!Function} name
   * @param {!Function} type
   * @return {?}
   */
  var init = function(m, b, name, type) {
    if (!b) {
      return noop;
    }
    var val = b.sample_rate;
    var i = b.include_users;
    var p = b.sample_granularity;
    var w = b.rules;
    b = b.r;
    b = void 0 === b ? Math.random() : b;
    if (resolve(i, m)) {
      return function(data) {
        return setTimeout(data, 1);
      };
    }
    var o;
    var r;
    var num_channels;
    var a;
    var cb;
    var args;
    var _data;
    /** @type {boolean} */
    p = "session" === p;
    var result = exec(p, val, name, b, type);
    var data = (o = w, r = p, num_channels = val, a = name, cb = b, args = type, _data = {}, Object.keys(o).forEach(function(i) {
      var d = o[i];
      var enable = d.enable;
      var sample_rate = d.sample_rate;
      d = d.conditional_sample_rules;
      if (enable) {
        _data[i] = {
          enable : enable,
          sample_rate : sample_rate,
          effectiveSampleRate : sample_rate * num_channels,
          hit : exec(r, sample_rate, a, cb, args)
        };
        if (d) {
          _data[i].conditional_hit_rules = d.map(function(filters) {
            var sample_rate = filters.sample_rate;
            filters = filters.filter;
            return {
              sample_rate : sample_rate,
              hit : exec(r, sample_rate, a, cb, args),
              effectiveSampleRate : sample_rate * num_channels,
              filter : filters
            };
          });
        }
      } else {
        _data[i] = {
          enable : enable,
          hit : function() {
            return false;
          },
          sample_rate : 0,
          effectiveSampleRate : 0
        };
      }
    }), _data);
    return function(self) {
      if (!result()) {
        return false;
      }
      if (!(self.ev_type in data)) {
        return setTimeout(self, val);
      }
      if (!data[self.ev_type].enable) {
        return false;
      }
      if (null !== (base = self.common) && void 0 !== base && base.sample_rate) {
        return self;
      }
      var base = data[self.ev_type];
      var array = base.conditional_hit_rules;
      if (array) {
        /** @type {number} */
        var i = 0;
        for (; i < array.length; i++) {
          if (filter(self, array[i].filter)) {
            return !!array[i].hit() && setTimeout(self, array[i].effectiveSampleRate);
          }
        }
      }
      return !!base.hit() && setTimeout(self, base.effectiveSampleRate);
    };
  };
  /**
   * @param {string} type
   * @param {!Object} options
   * @param {!Object} xhr
   * @return {undefined}
   */
  var ajax = function(type, options, xhr) {
    var onlineURL = options.url;
    var o = options.data;
    var fn = options.success;
    var iterator = void 0 === fn ? undefined : fn;
    fn = options.fail;
    var callback = void 0 === fn ? undefined : fn;
    fn = options.getResponseText;
    var compile = void 0 === fn ? undefined : fn;
    options = options.withCredentials;
    options = void 0 !== options && options;
    xhr = new xhr;
    /** @type {!Object} */
    xhr.withCredentials = options;
    xhr.open(type, onlineURL, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    /**
     * @return {undefined}
     */
    xhr.onload = function() {
      if (null != compile) {
        compile(this.responseText);
      }
      try {
        var items;
        if (this.responseText) {
          /** @type {*} */
          items = JSON.parse(this.responseText);
          iterator(items);
        } else {
          iterator({});
        }
      } catch (n) {
        callback(n);
      }
    };
    /**
     * @return {undefined}
     */
    xhr.onerror = function() {
      callback(new Error("Network request failed"));
    };
    /**
     * @return {undefined}
     */
    xhr.onabort = function() {
      callback(new Error("Network request aborted"));
    };
    xhr.send(o);
  };
  /**
   * @return {?}
   */
  var api = function() {
    var error = check();
    return error ? {
      get : function(data) {
        ajax("GET", data, error);
      },
      post : function(data) {
        ajax("POST", data, error);
      }
    } : {
      get : undefined,
      post : undefined
    };
  };
  var fragments = {
    build : function(options) {
      return {
        ev_type : options.ev_type,
        payload : options.payload,
        common : extend(extend({}, options.extra || {}), options.overrides || {})
      };
    }
  };
  /** @type {string} */
  var sname = "APM_PLUS_WEB";
  /** @type {string} */
  var columnIds = "/settings/get/webpro";
  /** @type {string} */
  var el = "/monitor_web/collect";
  /** @type {!Array} */
  var nodeList = [el, columnIds];
  var defaultConfig = {
    sample_rate : 1,
    include_users : [],
    sample_granularity : "session",
    rules : {}
  };
  /** @type {number} */
  var multipartSize = 20;
  /**
   * @param {string} prefix
   * @param {number} id
   * @return {?}
   */
  var getPath = function(prefix, id) {
    return void 0 === id && (id = el), (prefix && 0 <= prefix.indexOf("//") ? "" : "https://") + prefix + id;
  };
  /** @type {function(): ?} */
  var getSessionId = mobileLogin;
  /**
   * @param {!Object} data
   * @return {?}
   */
  var constructor = function(data) {
    /**
     * @return {undefined}
     */
    function done() {
      var opts = extend(extend(extend({}, data), config || {}), defaults);
      opts.plugins = function() {
        /** @type {!Array} */
        var a = [];
        /** @type {number} */
        var i = 0;
        for (; i < arguments.length; i++) {
          a[i] = arguments[i];
        }
        var x = {};
        /** @type {number} */
        var d = 0;
        for (; d < a.length;) {
          x = parse(x, a[d++]);
        }
        return x;
      }(data.plugins, (null == config ? void 0 : config.plugins) || {}, defaults.plugins || {});
      opts.sample = add(add(data.sample, null == config ? void 0 : config.sample), defaults.sample);
      options = opts;
      val();
    }
    /**
     * @return {undefined}
     */
    function add() {
      config = function(result) {
        if (!result) {
          return {};
        }
        var info = result.sample;
        var now = result.timestamp;
        if (!info) {
          return {};
        }
        var sample_rate = info.sample_rate;
        result = info.sample_granularity;
        return {
          sample : {
            include_users : info.include_users,
            sample_rate : sample_rate,
            sample_granularity : result,
            rules : info.rules.reduce(function(serverElements, d) {
              var i = d.name;
              var enable = d.enable;
              var sample_rate = d.sample_rate;
              d = d.conditional_sample_rules;
              return serverElements[i] = {
                enable : enable,
                sample_rate : sample_rate,
                conditional_sample_rules : d
              }, serverElements;
            }, {})
          },
          serverTimestamp : now
        };
      }(fields);
      done();
      f();
    }
    var autoReview;
    var fields;
    var config;
    /** @type {!Object} */
    var options = data;
    var defaults = {};
    /** @type {function(): undefined} */
    var f = undefined;
    /** @type {function(): undefined} */
    var val = undefined;
    return {
      getConfig : function() {
        return options;
      },
      setConfig : function(data) {
        var url;
        var cb;
        return defaults = extend(extend({}, defaults), data || {}), done(), autoReview || (autoReview = data, options.useLocalConfig ? (config = {}, f()) : fields ? add() : (url = options.domain, data = options.aid, cb = function(options) {
          /** @type {string} */
          fields = options;
          add();
        }, api().get({
          withCredentials : true,
          url : function(s, idTo) {
            return void 0 === idTo && (idTo = columnIds), (s && 0 <= s.indexOf("//") ? "" : "https://") + s + idTo;
          }(url) + "?aid=" + data,
          success : function(i) {
            cb(i.data || {});
          },
          fail : function() {
            cb();
          }
        }))), options;
      },
      onChange : function(newval) {
        /** @type {!Object} */
        val = newval;
      },
      onReady : function(onFilesLoaded) {
        /**
         * @return {undefined}
         */
        f = function() {
          !function() {
            if (data.userId !== options.userId) {
              /** @type {number} */
              data.sample.r = Math.random();
              done();
            }
            loop(options);
          }();
          onFilesLoaded();
        };
        if (config) {
          f();
        }
      }
    };
  };
  var index;
  var _ref;
  var obj;
  var key;
  var track;
  var plugins;
  var results;
  var context;
  var model;
  var me;
  var params;
  var elem;
  var listener;
  var that;
  var ref;
  var node;
  var self;
  var args;
  /**
   * @param {!Object} conn
   * @return {undefined}
   */
  var open = function(conn) {
    conn.on("report", function(value) {
      return options = value, value = {
        url : emit(),
        timestamp : Date.now()
      }, extend(extend({}, options), {
        extra : extend(extend({}, value), options.extra || {})
      });
      var options;
    });
  };
  var i = {
    sri : "reportSri",
    st : "reportResourceError",
    err : "captureException"
  };
  /**
   * @param {?} b
   * @return {?}
   */
  var mergeOptions = function(b) {
    return Object.keys(b).reduce(function(n, nodeType) {
      return n[nodeType] = [], n;
    }, {});
  };
  /**
   * @param {!Object} v
   * @return {?}
   */
  var serializeDate = function(v) {
    return Object.keys(v).reduce(function(r, k) {
      return r[v[k]] = k, r;
    }, {});
  };
  /**
   * @param {!Object} data
   * @param {!Object} obj
   * @param {!Object} id
   * @return {?}
   */
  var walk = function(data, obj, id) {
    return function(i, value, result, x) {
      if (void 0 === result) {
        /** @type {number} */
        result = Date.now();
      }
      if (void 0 === x) {
        /** @type {string} */
        x = location.href;
      }
      x = extend(extend({}, end(data)), {
        url : x,
        timestamp : result
      });
      if (obj[i]) {
        if (data[id[i]]) {
          func(data, x)(function() {
            data[id[i]](value);
          });
        } else {
          if (null !== (result = obj[i]) && void 0 !== result) {
            result.push([value, x]);
          }
        }
      }
    };
  };
  /**
   * @param {!Object} client
   * @param {!Object} data
   * @param {!Object} params
   * @return {?}
   */
  var stream = function(client, data, params) {
    return function(i) {
      var a;
      if (i in params) {
        if (null !== (a = data[params[i]]) && void 0 !== a) {
          a.forEach(function(s) {
            s = done(s, 2);
            var entry = s[0];
            s = s[1];
            func(client, s)(function() {
              client[i](entry);
            });
          });
        }
        /** @type {null} */
        data[params[i]] = null;
      }
    };
  };
  /**
   * @param {!Object} client
   * @return {undefined}
   */
  var App = function(client) {
    var step;
    /** @type {boolean} */
    var o = false;
    client.on("init", function() {
      /** @type {number} */
      step = (new Date).getTime();
      client.on("config", function() {
        var a;
        var time = null === (a = client.config()) || void 0 === a ? void 0 : a.serverTimestamp;
        if (!(isNaN(time) || Number(time) <= 0 || o)) {
          /** @type {boolean} */
          o = true;
          if ((a = (new Date).getTime()) - step < 700 && time) {
            /** @type {number} */
            a = time - (a + step) / 2;
            if (!isNaN(a)) {
              client.set({
                offset : a
              });
            }
          }
        }
      });
    });
  };
  /**
   * @param {!Object} handlers
   * @return {undefined}
   */
  var handle = function(handlers) {
    handlers.on("beforeBuild", function(data) {
      return options = data, $stateParams = handlers.config(), (data = {}).aid = $stateParams.aid, data.pid = $stateParams.pid, data.view_id = $stateParams.viewId, data.user_id = $stateParams.userId, extend(extend({}, options), {
        extra : extend(extend({}, data), options.extra || {})
      });
      var options;
      var $stateParams;
    });
  };
  /**
   * @param {!Object} event
   * @return {undefined}
   */
  var fetch = function(event) {
    event.on("start", function() {
      var name;
      var config = event.config();
      var deviceId = config.deviceId;
      var id = config.sessionId;
      var release = config.release;
      var env = config.env;
      config = config.offset;
      var options = {
        did : deviceId,
        sid : id,
        release : release,
        env : env,
        sname : sname,
        sversion : "1.2.4",
        soffset : config || 0
      };
      /** @type {string} */
      var b = "";
      for (name in options) {
        /** @type {string} */
        b = b + ("&" + name + "=" + options[name]);
      }
      config = event.getSender();
      config.setEndpoint(config.getEndpoint() + b.replace("&", "?"));
    });
  };
  /**
   * @param {!Object} data
   * @return {?}
   */
  var notify = function(data) {
    data = merge(data.aid);
    return {
      aid : 0,
      pid : "",
      viewId : "__" + Date.now(),
      userId : data.userId,
      deviceId : data.deviceId,
      sessionId : getSessionId(),
      domain : "apmplus.volces.com",
      plugins : {
        ajax : {
          ignoreUrls : nodeList
        },
        fetch : {
          ignoreUrls : nodeList
        },
        breadcrumb : {},
        pageview : {},
        jsError : {},
        resource : {},
        resourceError : {},
        performance : {},
        tti : {},
        fmp : {},
        blankScreen : false
      },
      release : "",
      env : "production",
      sample : extend(extend({}, defaultConfig), {
        r : data.r
      })
    };
  };
  var target = (args = function(value) {
    /** @type {({})} */
    var result = void 0 === value ? {} : value;
    var persistedDto = result.createSender;
    value = result.builder;
    result = result.createDefaultConfig;
    var options = function(_) {
      /**
       * @param {string} name
       * @param {number} val1
       * @return {undefined}
       */
      function debug(name, val1) {
        if (void 0 === val1) {
          /** @type {boolean} */
          val1 = false;
        }
        /** @type {!Array} */
        var list = [];
        /** @type {number} */
        var i = 2;
        for (; i < arguments.length; i++) {
          list[i - 2] = arguments[i];
        }
        obj[name].forEach(function(val) {
          try {
            val.apply(void 0, fn([], done(list), false));
          } catch (n) {
          }
        });
        if (val1) {
          /** @type {number} */
          obj[name].length = 0;
        }
      }
      var b;
      var ref;
      var self = _.builder;
      var _css = _.createSender;
      var func = _.createDefaultConfig;
      /** @type {function(!Object): ?} */
      var parse = _.createConfigManager;
      /** @type {function(!Object): ?} */
      var normalize = _.userConfigNormalizer;
      /** @type {function(!Object): ?} */
      var _clone = _.initConfigNormalizer;
      /** @type {function(!Object): ?} */
      var isArray = _.validateInitConfig;
      var obj = {};
      events.forEach(function(sourcePropKey) {
        return obj[sourcePropKey] = [];
      });
      /** @type {boolean} */
      var a = false;
      /** @type {boolean} */
      var inputId = false;
      /** @type {!Array} */
      var p = [];
      /** @type {!Array} */
      var opts = [];
      var options = {
        getBuilder : function() {
          return self;
        },
        getSender : function() {
          return b;
        },
        getPreStartQueue : function() {
          return p;
        },
        init : function(data) {
          if (a) {
            reject("already inited");
          } else {
            if (!(data && callback(data) && isArray(data))) {
              throw new Error("invalid InitConfig, init failed");
            }
            var value = func(data);
            if (!value) {
              throw new Error("defaultConfig missing");
            }
            data = _clone(data);
            if ((ref = parse(value)).setConfig(data), ref.onChange(function() {
              debug("config");
            }), !(b = _css(ref.getConfig()))) {
              throw new Error("sender missing");
            }
            debug("init", a = true);
          }
        },
        set : function(b) {
          if (a && b && callback(b)) {
            debug("beforeConfig", false, b);
            if (null != ref) {
              ref.setConfig(b);
            }
          }
        },
        config : function(data) {
          if (a) {
            return data && callback(data) && (debug("beforeConfig", false, data), null != ref && ref.setConfig(normalize(data))), null == ref ? void 0 : ref.getConfig();
          }
        },
        provide : function(name, type) {
          if (resolve(opts, name)) {
            reject("cannot provide " + name + ", reserved");
          } else {
            /** @type {!Function} */
            options[name] = type;
            debug("provide", false, name);
          }
        },
        start : function() {
          var e = this;
          if (a) {
            if (!inputId) {
              if (null != ref) {
                ref.onReady(function() {
                  debug("start", inputId = true);
                  p.forEach(function(n) {
                    return e.build(n);
                  });
                  /** @type {!Array} */
                  p = [];
                });
              }
            }
          }
        },
        report : function(data) {
          if (!!data) {
            if (data = debug(obj.report)(data)) {
              if (inputId) {
                this.build(data);
              } else {
                p.push(data);
              }
            }
          }
        },
        build : function(data) {
          if (!!inputId) {
            if (data = debug(obj.beforeBuild)(data)) {
              if (!!(data = self.build(data))) {
                if (data = debug(obj.build)(data)) {
                  this.send(data);
                }
              }
            }
          }
        },
        send : function(data) {
          if (!!inputId) {
            if (data = debug(obj.beforeSend)(data)) {
              b.send(data);
              debug("send", false, data);
            }
          }
        },
        destroy : function() {
          debug("beforeDestroy", true);
        },
        on : function(type, callback) {
          if ("init" === type && a || "start" === type && inputId) {
            callback();
          } else {
            if (obj[type]) {
              obj[type].push(callback);
            }
          }
        },
        off : function(key, opts) {
          if (obj[key]) {
            obj[key] = trim(obj[key], opts);
          }
        }
      };
      /** @type {!Array<string>} */
      opts = Object.keys(options);
      return options;
    }({
      validateInitConfig : decryptDownload,
      initConfigNormalizer : responseStatusSuccess,
      userConfigNormalizer : responseStatusError,
      createSender : void 0 === persistedDto ? function(self) {
        return send({
          size : multipartSize,
          endpoint : getPath(self.domain),
          transport : api()
        });
      } : persistedDto,
      builder : void 0 === value ? fragments : value,
      createDefaultConfig : void 0 === result ? notify : result,
      createConfigManager : constructor
    });
    factory(options);
    App(options);
    handle(options);
    open(options);
    success(options);
    fetch(options);
    var model;
    result = set(options, end, function(n, functions, t) {
      return func(n, functions)(function() {
        var i = done(t);
        var method = i[0];
        i = i.slice(1);
        options[method].apply(options, fn([], done(i), false));
      });
    });
    return (model = result).on("init", function() {
      /** @type {!Array} */
      var e = [];
      var opts = model.config();
      if (opts && opts.integrations) {
        opts.integrations.forEach(function(self) {
          if (!resolve(e, self.name)) {
            e.push(self.name);
            self.setup(model);
            if (self.tearDown) {
              model.on("beforeDestroy", self.tearDown);
            }
          }
        });
      }
    }), result;
  }(index = void 0 === index ? {} : index), (_ref = args).on("start", function() {
    var data = _ref.config();
    var source = data.userId;
    data = data.sample;
    data = init(source, data, id, step);
    _ref.on("build", data);
  }), obj = args, track = mergeOptions(key = void 0 === key ? i : key), index = serializeDate(key), plugins = walk(obj, track, key), null !== (key = obj.p) && void 0 !== key && key.a && "observe" in obj.p.a && obj.p.a.observe(function(options) {
    var result = done(options, 5);
    result[0];
    var dirname = result[1];
    var existsGlobal = result[2];
    options = result[3];
    result = result[4];
    plugins(dirname, existsGlobal, options, result);
  }), obj.on("init", function() {
    var ref;
    if (null !== (ref = obj.p) && void 0 !== ref) {
      ref.a.forEach(function(options) {
        var result = done(options, 5);
        result[0];
        var dirname = result[1];
        var existsGlobal = result[2];
        options = result[3];
        result = result[4];
        plugins(dirname, existsGlobal, options, result);
      });
    }
    if (obj.p && obj.p.a) {
      /** @type {number} */
      obj.p.a.length = 0;
    }
  }), obj.provide("precollect", plugins), obj.on("provide", stream(obj, track, index)), (results = args).provide("sendEvent", function(text) {
    text = decode(text);
    if (text) {
      results.report({
        ev_type : cssFormat,
        payload : text,
        extra : {
          timestamp : Date.now()
        }
      });
    }
  }), results.provide("sendLog", function(args) {
    args = list(args);
    if (args) {
      results.report({
        ev_type : cssFormat,
        payload : args,
        extra : {
          timestamp : Date.now()
        }
      });
    }
  }), (context = args).on("init", function() {
    var event;
    var data = wrap(context, input, branch);
    if (data) {
      data = done(require(main, extend(extend({}, data), {
        initPid : null === (data = context.config()) || void 0 === data ? void 0 : data.pid,
        onPidUpdate : function(pid) {
          context.set({
            pid : pid,
            viewId : pid + "_" + Date.now(),
            actionId : void 0
          });
        }
      }), context.report.bind(context)), 2);
      event = data[0];
      data = data[1];
      context.on("config", function() {
        event(context.config().pid);
      });
      context.on("beforeDestroy", data);
      context.provide("sendPageview", event);
    }
  }), (model = args).on("init", function() {
    var ignorePlaceholders;
    var data = wrap(model, addVScroll, instance);
    if (data) {
      /** @type {boolean} */
      ignorePlaceholders = false;
      data = done(require(result, extend(extend({}, data), {
        hookCbAtReq : stop(model)
      }), function(comment) {
        return !ignorePlaceholders && model.report(comment);
      }), 1)[0];
      model.on("beforeDestroy", function() {
        /** @type {boolean} */
        ignorePlaceholders = true;
      });
      model.provide("wrapXhr", data);
    }
  }), (me = args).on("init", function() {
    var headPartIsFound;
    var result = wrap(me, url, frame);
    if (result) {
      /** @type {boolean} */
      headPartIsFound = false;
      result = done(require(request, extend(extend({}, result), {
        hookCbAtReq : stop(me)
      }), function(part) {
        return !headPartIsFound && me.report(part);
      }), 1)[0];
      me.on("beforeDestroy", function() {
        /** @type {boolean} */
        headPartIsFound = true;
      });
      me.provide("wrapFetch", result);
    }
  }), (params = args).on("init", function() {
    var desc;
    var data = wrap(params, widgetDataKey, {});
    if (data) {
      desc = params.pp || Error;
      require(exports, extend(extend({}, data), {
        precollect : desc
      }), onRelease(params));
    }
  }), (elem = args).on("init", function() {
    var scrollHeightObserver;
    var value = wrap(elem, definition, j);
    if (value) {
      scrollHeightObserver = done(require(initialize, value, onRelease(elem)), 1)[0];
      clear(function() {
        return setTimeout(scrollHeightObserver, 200);
      });
    }
  }), (listener = args).on("init", function() {
    var callback;
    var cb;
    var result = wrap(listener, x, data);
    if (result) {
      result = (cb = done(require(start, result, undefined), 3))[0];
      callback = cb[1];
      cb = cb[2];
      listener.on("report", function(event) {
        return "http" === event.ev_type && callback({
          type : "http",
          category : event.payload.api,
          message : "",
          data : {
            method : event.payload.request.method,
            url : event.payload.request.url,
            status_code : String(event.payload.response.status)
          },
          timestamp : event.payload.request.timestamp
        }), event;
      });
      listener.on("beforeDestroy", cb);
      listener.provide("getBreadcrumbs", result);
      listener.provide("addBreadcrumb", callback);
    }
  }), (that = args).on("init", function() {
    window.removeEventListener("error", that.pcErr, true);
    window.removeEventListener("unhandledrejection", that.pcRej, true);
    var cb;
    var result = wrap(that, parameter, req);
    if (result) {
      result = (cb = done(require(bind, result, function(data) {
        if (that.getBreadcrumbs) {
          data.payload.breadcrumbs = that.getBreadcrumbs();
        }
        that.report(data);
      }), 2))[0];
      cb = cb[1];
      that.on("beforeDestroy", cb);
      that.provide("captureException", result);
    }
  }), (ref = args).on("init", function() {
    var opts = ref.pp || Error;
    if (null !== (target = opts.observer) && void 0 !== target) {
      target.disconnect();
    }
    var report;
    var target;
    var cb;
    var e;
    var type;
    var data = wrap(ref, processedItem, message);
    if (data) {
      require(wrapper, extend(extend({}, data), {
        precollect : opts
      }), onRelease(ref));
      target = (cb = done(require(keyboard, 0, report = function(order) {
        ref.report({
          ev_type : "performance",
          payload : order
        });
      }), 2))[0];
      cb = cb[1];
      ref.provide("performanceInit", target);
      ref.provide("performanceSend", cb);
      if (data.longtask) {
        cb = done(require(sync, {
          precollect : opts
        }, function(commentPayload) {
          ref.report({
            ev_type : "performance_longtask",
            payload : commentPayload
          });
        }), 1)[0];
        ref.on("beforeDestroy", cb);
      }
      if (data.cls) {
        e = emit();
        data = done(require(process, [opts], function(commentPayload) {
          ref.report({
            ev_type : "performance",
            payload : commentPayload,
            overrides : {
              url : e
            }
          });
        }), 2);
        type = data[0];
        data = data[1];
        ref.on("beforeConfig", function(options) {
          if (options.viewId && options.viewId !== (null === (options = ref.config()) || void 0 === options ? void 0 : options.viewId)) {
            type();
            e = emit();
          }
        });
        ref.on("beforeDestroy", data);
        on(type);
      }
      /** @type {number} */
      opts.entries.length = 0;
      ref.provide("sendCustomPerfMetric", function(data) {
        data = extend(extend(extend({}, defaults), data), {
          isCustom : true
        });
        report(data);
      });
    }
  }), (node = args).on("init", function() {
    var cb;
    var l = wrap(node, str, options);
    if (l) {
      l = (cb = done(require(setup, l, node.report.bind(node)), 2))[0];
      cb = cb[1];
      node.on("beforeDestroy", cb);
      node.provide("reportResourceError", l);
    }
  }), (self = args).on("init", function() {
    var data = wrap(self, path, size);
    if (data) {
      data = done(require(action, data, function(data) {
        var result = done(data, 2);
        data = result[0];
        result = result[1];
        self.report(result ? extend(extend({}, data), {
          extra : {
            sample_rate : 1
          }
        }) : data);
      }), 1)[0];
      self.on("beforeDestroy", data);
    }
  }), execute(args), args);
  var valueOrObs = function() {
    var ret = apply();
    var cur = getCurrentScript();
    if (ret && cur) {
      return ret[cur];
    }
  }();
  if (valueOrObs) {
    ["p", "pp", "pcErr", "pcRej"].forEach(function(name) {
      target.provide(name, valueOrObs[name]);
    });
  }
  var remove;
  var element;
  var a;
  var b;
  var res = apply();
  var addEventListenerFn = getCurrentScript();
  if (res && addEventListenerFn) {
    remove = (null == (remove = res[addEventListenerFn]) ? void 0 : remove.q) || [];
    res[addEventListenerFn] = target;
    remove.forEach(function(o) {
      var element;
      var next;
      /** @type {!Array} */
      next = o;
      o = extend(extend({}, end(element = target)), {
        url : next.pop(),
        timestamp : next.pop()
      });
      func(element, o)(function() {
        element.apply(void 0, fn([], done(next), false));
      });
    });
    /** @type {number} */
    remove.length = 0;
    if (target.p) {
      if ("observe" in target.p.a) {
        console.warn("global precollect queue already updated");
      }
      target.p.a = (a = target.p.a, b = [], a.observe = function(children) {
        b.push(children);
      }, a.push = function() {
        var _Object$getPrototypeO;
        /** @type {!Array} */
        var list = [];
        /** @type {number} */
        var i = 0;
        for (; i < arguments.length; i++) {
          list[i] = arguments[i];
        }
        return list.forEach(function(appid) {
          b.forEach(function(t) {
            return t(appid);
          });
        }), (_Object$getPrototypeO = [].push).call.apply(_Object$getPrototypeO, fn([a], done(list), false));
      }, a);
      if (element = target.precollect) {
        target.provide("precollect", function() {
          /** @type {!Array} */
          var list = [];
          /** @type {number} */
          var i = 0;
          for (; i < arguments.length; i++) {
            list[i] = arguments[i];
          }
          return target.p.a.push(fn(["precollect"], done(list), false)), element.apply(void 0, fn([], done(list), false));
        });
      }
    }
  }
}();
