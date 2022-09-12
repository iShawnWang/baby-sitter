'use strict';
!function() {
  /**
   * @param {!Array} data
   * @param {number} progress
   * @return {?}
   */
  function done(data, progress) {
    var value = "function" == typeof Symbol && data[Symbol.iterator];
    if (!value) {
      return data;
    }
    var result;
    var mockConsole;
    var entry = value.call(data);
    /** @type {!Array} */
    var collector = [];
    try {
      for (; (void 0 === progress || 0 < progress--) && !(result = entry.next()).done;) {
        collector.push(result.value);
      }
    } catch (Console_error) {
      mockConsole = {
        error : Console_error
      };
    } finally {
      try {
        if (result && !result.done && (value = entry.return)) {
          value.call(entry);
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
   * @param {!Object} value
   * @return {?}
   */
  function string(value) {
    return value;
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
   * @param {!Function} obj
   * @return {?}
   */
  function isArray(obj) {
    return "function" == typeof obj;
  }
  /**
   * @param {boolean} value
   * @return {?}
   */
  function isFinite(value) {
    return "number" == typeof value;
  }
  /**
   * @param {!Object} str
   * @return {?}
   */
  function isString(str) {
    return "string" == typeof str;
  }
  /**
   * @param {!Array} actual
   * @return {?}
   */
  function isEmpty(actual) {
    return "undefined" != typeof Event && function(impromptuInstance, Impromptu) {
      try {
        return impromptuInstance instanceof Impromptu;
      } catch (n) {
        return;
      }
    }(actual, Event);
  }
  /**
   * @param {!Array} data
   * @param {(Object|string)} result
   * @return {?}
   */
  function replace(data, result) {
    var key;
    var r;
    var obj = extend({}, data);
    for (key in result) {
      /** @type {string} */
      r = key;
      if (Object.prototype.hasOwnProperty.call(result, r) && void 0 !== result[key]) {
        if (callback(result[key]) && copy(result[key])) {
          obj[key] = replace(callback(data[key]) ? data[key] : {}, result[key]);
        } else {
          if (isObject(result[key]) && isObject(data[key])) {
            obj[key] = function merge(value, name) {
              value = isObject(value) ? value : [];
              name = isObject(name) ? name : [];
              return Array.prototype.concat.call(value, name).map(function(value) {
                return value instanceof RegExp ? value : callback(value) && copy(value) ? replace({}, value) : isObject(value) ? merge([], value) : value;
              });
            }(data[key], result[key]);
          } else {
            obj[key] = result[key];
          }
        }
      }
    }
    return obj;
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
  function shallowCopy(obj, x) {
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
    var json = a.slice(1);
    for (; b && 0 < json.length;) {
      b = b[i];
      i = (cookie = done(json))[0];
      json = cookie.slice(1);
    }
    if (b) {
      return val(b, i);
    }
  }
  /**
   * @param {!NodeList} obj
   * @return {?}
   */
  function toString(obj) {
    return isObject(obj) && obj.length ? function(s) {
      /** @type {!Array} */
      var defaultParts = [];
      var g = s.length;
      /** @type {number} */
      var c = 0;
      for (; c < g; c++) {
        var params = s[c];
        if (isString(params)) {
          defaultParts.push(params.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"));
        } else {
          if (params && params.source) {
            defaultParts.push(params.source);
          }
        }
      }
      return new RegExp(defaultParts.join("|"), "i");
    }(obj) : null;
  }
  /**
   * @param {!Object} value
   * @return {?}
   */
  function parseInt(value) {
    try {
      return isString(value) ? value : JSON.stringify(value);
    } catch (creative_size) {
      return "[FAILED_TO_STRINGIFY]:" + String(creative_size);
    }
  }
  /**
   * @param {!Object} data
   * @param {string} name
   * @param {!Function} callback
   * @return {?}
   */
  function request(data, name, callback) {
    return function() {
      /** @type {!Array} */
      var buffer = [];
      /** @type {number} */
      var i = 0;
      for (; i < arguments.length; i++) {
        buffer[i] = arguments[i];
      }
      if (!data) {
        return b;
      }
      var a = data[name];
      var r = callback.apply(void 0, fn([a], done(buffer), false));
      var value = r;
      return isArray(value) && (value = function() {
        /** @type {!Array} */
        var f = [];
        /** @type {number} */
        var i = 0;
        for (; i < arguments.length; i++) {
          f[i] = arguments[i];
        }
        try {
          return r.apply(this, f);
        } catch (n) {
          return isArray(a) && a.apply(this, f);
        }
      }), data[name] = value, function(fireCallback) {
        if (!(fireCallback && value !== data[name])) {
          data[name] = a;
        }
      };
    };
  }
  /**
   * @param {!Object} message
   * @param {string} name
   * @param {!Function} type
   * @return {?}
   */
  function require(message, name, type) {
    return function() {
      /** @type {!Array} */
      var buffer = [];
      /** @type {number} */
      var i = 0;
      for (; i < arguments.length; i++) {
        buffer[i] = arguments[i];
      }
      message[name] = type.apply(void 0, fn([message[name]], done(buffer), false));
    };
  }
  /**
   * @return {undefined}
   */
  function add() {
    /** @type {!Array} */
    var buffer = [];
    /** @type {number} */
    var i = 0;
    for (; i < arguments.length; i++) {
      buffer[i] = arguments[i];
    }
    console.warn.apply(console, fn(["[SDK]", Date.now(), ("" + nextGuid++).padStart(8, " ")], done(buffer), false));
  }
  /**
   * @param {!NodeList} callbacks
   * @return {?}
   */
  function then(callbacks) {
    return function(jpegEncoded) {
      /** @type {!Array} */
      var result = jpegEncoded;
      /** @type {number} */
      var i = 0;
      for (; i < callbacks.length && result; i++) {
        try {
          result = callbacks[i](result);
        } catch (rightCollapseNode) {
          _process(rightCollapseNode);
        }
      }
      return result;
    };
  }
  /**
   * @return {?}
   */
  function template() {
    var upperCaseAlphabet = function() {
      /** @type {!Array} */
      var result = new Array(16);
      /** @type {number} */
      var e = 0;
      /** @type {number} */
      var indexIn = 0;
      for (; indexIn < 16; indexIn++) {
        if (0 == (3 & indexIn)) {
          /** @type {number} */
          e = 4294967296 * Math.random();
        }
        /** @type {number} */
        result[indexIn] = e >>> ((3 & indexIn) << 3) & 255;
      }
      return result;
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
  function clone() {
    return apply() && window.location;
  }
  /**
   * @return {?}
   */
  function debug() {
    if (apply() && callback(window.performance)) {
      return window.performance;
    }
  }
  /**
   * @return {?}
   */
  function encode() {
    if ("function" == typeof XMLHttpRequest && isArray(XMLHttpRequest)) {
      return XMLHttpRequest;
    }
  }
  /**
   * @return {?}
   */
  function goFetch() {
    try {
      return new Headers, new Request(""), new Response, window.fetch;
    } catch (n) {
    }
  }
  /**
   * @return {?}
   */
  function compile() {
    if (apply() && isArray(window.MutationObserver)) {
      return window.MutationObserver;
    }
  }
  /**
   * @return {?}
   */
  function map() {
    if (apply() && isArray(window.PerformanceObserver)) {
      return window.PerformanceObserver;
    }
  }
  /**
   * @return {?}
   */
  function func() {
    var result = debug();
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
  function toJSON() {
    var fontAwesomeLink = apply() && clone();
    return null == fontAwesomeLink ? void 0 : fontAwesomeLink.href;
  }
  /**
   * @param {string} a
   * @return {?}
   */
  function parse(a) {
    try {
      var e;
      /** @type {string} */
      var t = a;
      /** @type {!Array} */
      var r = [];
      /** @type {number} */
      var o = 0;
      /** @type {number} */
      var i = 0;
      /** @type {number} */
      var channelCount = " > ".length;
      for (; t && o++ < 5 && !("html" === (e = function(result) {
        var compare_string;
        var key;
        var clearChatButton;
        var idx;
        /** @type {string} */
        var action = result;
        /** @type {!Array} */
        var signatureString = [];
        if (!action || !action.tagName) {
          return "";
        }
        signatureString.push(action.tagName.toLowerCase());
        if (action.id) {
          signatureString.push("#" + action.id);
        }
        result = action.className;
        if (result && isString(result)) {
          compare_string = result.split(/\s+/);
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
          if (clearChatButton = action.getAttribute(key)) {
            signatureString.push("[" + key + '="' + clearChatButton + '"]');
          }
        }
        return signatureString.join("");
      }(t)) || 1 < o && 80 <= i + r.length * channelCount + e.length);) {
        r.push(e);
        i = i + e.length;
        t = t.parentNode;
      }
      return r.reverse().join(" > ");
    } catch (n) {
      return auto;
    }
  }
  /**
   * @param {number} callback
   * @return {?}
   */
  function error(callback) {
    /**
     * @param {string} name
     * @param {?} callback
     * @return {?}
     */
    function wrap(name, callback) {
      var last;
      return function(elem) {
        fn = void 0;
        if (elem && last !== elem) {
          callback({
            event : last = elem,
            name : name
          });
        }
      };
    }
    var fn;
    return [wrap, function(options) {
      return function(context) {
        var target;
        try {
          target = context.target;
        } catch (n) {
          return;
        }
        var htmlElementName = target && target.tagName;
        if (htmlElementName && ("INPUT" === htmlElementName || "TEXTAREA" === htmlElementName || target.isContentEditable)) {
          if (!fn) {
            wrap("input", options)(context);
          }
          clearTimeout(fn);
          fn = window.setTimeout(function() {
            fn = void 0;
          }, callback);
        }
      };
    }];
  }
  /**
   * @param {?} callback
   * @param {string} type
   * @return {?}
   */
  function assert(callback, type) {
    return function(channelErr) {
      if (type) {
        try {
          callback(channelErr);
        } catch (n) {
        }
      }
    };
  }
  /**
   * @param {!Function} function_top
   * @return {undefined}
   */
  function initialize(function_top) {
    var tag = apply();
    var root = join();
    if (tag && root) {
      if ("complete" !== root.readyState) {
        tag.addEventListener("load", function() {
          setTimeout(function() {
            function_top();
          }, 0);
        }, false);
      } else {
        function_top();
      }
    }
  }
  /**
   * @param {!Function} cb
   * @return {undefined}
   */
  function change(cb) {
    var change;
    if ("hidden" !== document.visibilityState) {
      /**
       * @return {undefined}
       */
      change = function() {
        if ("hidden" === document.visibilityState) {
          cb();
          removeEventListener("visibilitychange", change, true);
        }
      };
      addEventListener("visibilitychange", change, true);
    } else {
      cb();
    }
  }
  /**
   * @param {string} b
   * @param {!Object} a
   * @return {?}
   */
  function expect(b, a) {
    return !(!b || !a) && (inlineAttributeCommentRegex.test(b) || inlineAttributeIgnoreCommentRegex.test(a));
  }
  /**
   * @param {!Object} request
   * @param {?} date
   * @param {!Object} cb
   * @return {?}
   */
  function handler(request, date, cb) {
    var method = request._method;
    var headers = request._reqHeaders;
    var url = request._url;
    var data = request._start;
    var err = request._data;
    data = {
      api : "xhr",
      request : {
        url : getText(url),
        method : (method || "").toLowerCase(),
        headers : headers,
        timestamp : data
      },
      response : {
        status : request.status || 0,
        is_custom_error : false,
        timing : cb(request.responseURL),
        timestamp : Date.now()
      },
      duration : Date.now() - data
    };
    if ("function" == typeof request.getAllResponseHeaders) {
      data.response.headers = isString(s = request.getAllResponseHeaders()) && s ? s.split("\r\n").reduce(function(kLabels, c) {
        var n;
        return isString(c) && (c = (n = done(c.split(": "), 2))[0], n = n[1], expect(c, n) || (kLabels[c.toLowerCase()] = n)), kLabels;
      }, {}) : {};
    }
    var s = data.response.status;
    return date.collectBodyOnError && 400 <= s && (data.request.body = err ? "" + err : void 0, data.response.body = request.response ? "" + request.response : void 0), data;
  }
  /**
   * @param {!Function} result
   * @param {!Object} value
   * @return {?}
   */
  function checkResult(result, value) {
    return !!(result = toString(result || [])) && result.test(value);
  }
  /**
   * @param {!Array} data
   * @return {?}
   */
  function ok(data) {
    var $ = done(test(data), 5)[4];
    return function(selector) {
      return $(selector).pop();
    };
  }
  /**
   * @param {!Function} o
   * @return {?}
   */
  function success(o) {
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
      var item = result[0];
      result = result[1];
      return expect(item, result) || (this._reqHeaders[item.toLowerCase()] = result), o && o.apply(this, f);
    };
  }
  /**
   * @param {!Function} t
   * @param {?} type
   * @param {!Object} options
   * @param {number} listener
   * @return {?}
   */
  function load(t, type, options, listener) {
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
      return cb = listener, require(response = this, "onreadystatechange", function(callback, config, dispatch) {
        return function() {
          /** @type {!Array} */
          var args = [];
          /** @type {number} */
          var i = 0;
          for (; i < arguments.length; i++) {
            args[i] = arguments[i];
          }
          try {
            if (4 === this.readyState && !checkResult(config.ignoreUrls, response._url) && dispatch) {
              dispatch({
                ev_type : "http",
                payload : handler(response, config, cb)
              });
            }
          } catch (modModuleList) {
            each(modModuleList);
          }
          return callback && callback.apply(this, args);
        };
      })(type, type.hookCbAtReq(options)), this._start = Date.now(), this._data = null == obj ? void 0 : obj[0], t.apply(this, obj);
    };
  }
  /**
   * @param {!Function} callback
   * @return {?}
   */
  function fetch(callback) {
    return function() {
      var urls;
      /** @type {!Array} */
      var results = [];
      /** @type {number} */
      var i = 0;
      for (; i < arguments.length; i++) {
        results[i] = arguments[i];
      }
      return urls = done(results, 2), this._method = urls[0], this._url = urls[1], callback.apply(this, results);
    };
  }
  /**
   * @param {!Object} service
   * @param {number} callback
   * @param {number} options
   * @param {?} next
   * @return {undefined}
   */
  function exec(service, callback, options, next) {
    require(service, "open", fetch)();
    require(service, "setRequestHeader", success)();
    require(service, "send", load)(callback, options, next);
  }
  /**
   * @param {!Object} obj
   * @param {string} item
   * @param {number} data
   * @return {?}
   */
  function wrap(obj, item, data) {
    item = null === (obj = obj.config()) || void 0 === obj ? void 0 : obj.plugins[item];
    return callback(item) ? extend(extend({}, data), item) : !!item && data;
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
    return effects.reduce(function(a, options) {
      return (new object(options)).forEach(function(val, s) {
        return !expect(s, val) && (a[s] = val);
      }), a;
    }, {});
  }
  /**
   * @param {!Object} config
   * @param {!Object} method
   * @param {!Function} data
   * @return {?}
   */
  function getScript(config, method, data) {
    return has(config, data) ? config.body : null == method ? void 0 : method.body;
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
   * @param {?} resolve
   * @param {?} opts
   * @param {!Object} db
   * @param {number} options
   * @param {!Function} data
   * @param {?} callback
   * @return {?}
   */
  function create(resolve, opts, db, options, data, callback) {
    return function(item, method) {
      var active;
      var okfunc;
      var val;
      var value = resolve(item, method = void 0 === method ? {} : method);
      val = (okfunc = false, val = "", val = has(active = item, data) ? active.url : active, val = !(okfunc = void 0 !== okfunc && okfunc) && isString(val) ? val.split("?")[0] : val);
      if (!function(type) {
        if (isString(type)) {
          var externalTypes = done(type.split(":"), 2);
          type = externalTypes[0];
          return !externalTypes[1] || "http" === type || "https" === type;
        }
      }(val) || checkResult(opts.ignoreUrls, val)) {
        return value;
      }
      var put = opts.hookCbAtReq(db);
      var info = {
        api : "fetch",
        request : get(item instanceof data ? item.url : item, item, method, data),
        response : {
          is_custom_error : false
        },
        duration : 0
      };
      try {
        info.request.headers = assign(options, item.headers, method.headers);
      } catch (formOrder) {
        each(formOrder);
      }
      /**
       * @return {undefined}
       */
      var upload = function() {
        if (put) {
          put({
            ev_type : "http",
            payload : info
          });
        }
      };
      return value.then(function(res) {
        var el;
        try {
          info.response.status = res.status || 0;
          info.response.headers = assign(options, res.headers);
          /** @type {number} */
          info.duration = Date.now() - info.request.timestamp;
          if (opts.collectBodyOnError && 400 <= res.status) {
            info.request.body = null === (el = getScript(item, method, data)) || void 0 === el ? void 0 : el.toString();
          }
          setTimeout(function() {
            info.response.timing = callback(res.url);
            upload();
          }, 100);
        } catch (formOrder) {
          each(formOrder);
        }
      }, function() {
        var el;
        try {
          /** @type {number} */
          info.response.status = 0;
          /** @type {number} */
          info.duration = Date.now() - info.request.timestamp;
          if (opts.collectBodyOnError) {
            info.request.body = null === (el = getScript(item, method, data)) || void 0 === el ? void 0 : el.toString();
          }
        } catch (formOrder) {
          each(formOrder);
        }
        upload();
      }), value;
    };
  }
  /**
   * @param {!Array} name
   * @return {?}
   */
  function list(name) {
    var value;
    var v;
    var options;
    return !function(o) {
      switch(Object.prototype.toString.call(o)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMError]":
        case "[object DOMException]":
          return 1;
        default:
          return o instanceof Error;
      }
    }(name) ? (copy(name) || isEmpty(name) || isString(name)) && (value = {
      message : parseInt(name)
    }) : (options = fields, value = (v = name) && callback(v) ? options.reduce(function(array, i) {
      return array[i] = v[i], array;
    }, {}) : v), value;
  }
  /**
   * @param {!Object} opts
   * @return {?}
   */
  function filter(opts) {
    return list(opts.error);
  }
  /**
   * @param {!Object} e
   * @return {?}
   */
  function render(e) {
    var info;
    try {
      var message = void 0;
      if ("reason" in e ? message = e.reason : "detail" in e && "reason" in e.detail && (message = e.detail.reason), message) {
        var data = list(message);
        return extend(extend({}, data), {
          name : null !== (info = data && data.name) && void 0 !== info ? info : "UnhandledRejection"
        });
      }
    } catch (n) {
    }
  }
  /**
   * @param {!Array} x
   * @return {?}
   */
  function h(x) {
    return "[object ErrorEvent]" === Object.prototype.toString.call(x) ? filter(x) : ("[object PromiseRejectionEvent]" === Object.prototype.toString.call(x) ? render : list)(x);
  }
  /**
   * @param {!Function} e
   * @return {?}
   */
  function invoke(e) {
    /**
     * @param {!Object} data
     * @return {?}
     */
    function wrap(data) {
      return isArray(data) ? data._w_ || (data._w_ = function() {
        try {
          return (data.handleEvent || data).apply(this, [].map.call(arguments, wrap));
        } catch (a) {
          throw g && e(list(a)), a;
        }
      }) : data;
    }
    /** @type {boolean} */
    var g = true;
    return methods.forEach(function(module) {
      return window[module] && require(window, module, function(callback) {
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
    }), require(XMLHttpRequest.prototype, "send", function(fToRetry) {
      return function() {
        var library = this;
        /** @type {!Array} */
        var args = [];
        /** @type {number} */
        var i = 0;
        for (; i < arguments.length; i++) {
          args[i] = arguments[i];
        }
        return props.forEach(function(mod) {
          return library[mod] && require(library, mod, wrap)();
        }), fToRetry.apply(this, args);
      };
    })(), eventTargets.forEach(function(obj) {
      obj = window[obj].prototype;
      if (obj[parent]) {
        require(obj, parent, function(callback) {
          return function(args, self, extra) {
            try {
              var f = self.handleEvent;
              if (isArray(f)) {
                self.handleEvent = wrap(f);
              }
            } catch (n) {
            }
            return callback && callback.call(this, args, wrap(self), extra);
          };
        })();
        require(obj, "removeEventListener", function(ctx) {
          return function(n, right, fontHeight) {
            return null != right && right._w_ && ctx.call(this, n, right._w_, fontHeight), ctx.call(this, n, right, fontHeight);
          };
        })();
      }
    }), function() {
      return g = false;
    };
  }
  /**
   * @param {string} token1
   * @param {string} token2
   * @return {?}
   */
  function reject(token1, token2) {
    return token1 && token2 && token1 === token2;
  }
  /**
   * @return {?}
   */
  function some() {
    var callback;
    return function(to) {
      try {
        if (error = callback, !(!(e = to) || !error) && !(!reject(e.message, error.message) && !reject(e.stack, error.stack))) {
          return void(callback = to);
        }
      } catch (formOrder) {
        each(formOrder);
      }
      var e;
      var error;
      return callback = to;
    };
  }
  /**
   * @param {string} attr
   * @return {?}
   */
  function setAttribute(attr) {
    return attr = "link" === (target = attr).tagName.toLowerCase() ? "href" : "src", isArray(target.getAttribute) ? target.getAttribute(attr) || "" : target[attr] || "";
    var target;
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
   * @param {string} clientId
   * @return {?}
   */
  function register(clientId) {
    return {
      ev_type : "performance",
      payload : clientId
    };
  }
  /**
   * @param {!Array} value
   * @param {!Array} name
   * @return {?}
   */
  function execute(value, name) {
    return void 0 === value && (value = map()), void 0 === name && (name = debug()), function(n, result) {
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
      var apply = done(call(result), 1)[0];
      if (!name || !value) {
        return cal.isSupport = false, void apply(cal);
      }
      result = (0, done(test(name), 3)[2])(artistTrack)[0];
      if (result) {
        stop(result);
      } else {
        (0, done(push(value, stop, true), 1)[0])(artistTrack);
      }
    };
  }
  /**
   * @param {!Array} res
   * @return {?}
   */
  function setup(res) {
    return void 0 === res && (res = map()), function(value, values) {
      value = value.precollect;
      var options = $("lcp", 0);
      var r = done(call(values), 1)[0];
      if (!res) {
        return options.isSupport = false, void r(options);
      }
      (value.entries || []).forEach(function(attrs) {
        var entryType = attrs.entryType;
        attrs = attrs.startTime;
        if (entryType === which) {
          /** @type {!Object} */
          options.value = attrs;
        }
      });
      values = done(push(res, function(d) {
        d = d.startTime;
        /** @type {!Object} */
        options.value = d;
      }), 2);
      value = values[0];
      var med = values[1];
      value(which);
      /**
       * @return {undefined}
       */
      var callback = function() {
        med();
        pointerEvents.forEach(function(type) {
          window.removeEventListener(type, update, true);
        });
      };
      /**
       * @return {undefined}
       */
      var update = function() {
        r(options);
        callback();
      };
      pointerEvents.forEach(function(n) {
        window.addEventListener(n, update, true);
      });
      change(function() {
        /** @type {boolean} */
        options.isSupport = false;
        update();
      });
      addEventListener(function() {
        /** @type {boolean} */
        options.isBounced = true;
        update();
      });
    };
  }
  /**
   * @param {!Array} result
   * @param {!Array} value
   * @return {?}
   */
  function expand(result, value) {
    return void 0 === result && (result = map()), void 0 === value && (value = debug()), function(item, cb) {
      var r = item.metricName;
      var name = item.entryName;
      var s = $(r, 0);
      var split = done(call(cb), 1)[0];
      if (!value || !result) {
        return s.isSupport = false, void split(s);
      }
      var func;
      /**
       * @param {string} t
       * @return {undefined}
       */
      var callback = function(t) {
        t = t.startTime;
        /** @type {string} */
        s.value = t;
        split(s);
      };
      r = (0, done(test(value), 5)[4])(name)[0];
      if (r) {
        callback(r);
      } else {
        r = (cb = done(push(result, function(m) {
          if (m.name === name) {
            callback(m);
            func();
          }
        }), 2))[0];
        func = cb[1];
        r("paint");
        change(function() {
          /** @type {boolean} */
          s.isSupport = false;
          split(s);
          func();
        });
        addEventListener(function() {
          /** @type {boolean} */
          s.isBounced = true;
          split(s);
          func();
        });
      }
    };
  }
  /**
   * @param {!Array} result
   * @param {!Array} error
   * @return {?}
   */
  function save(result, error) {
    return void 0 === result && (result = map()), void 0 === error && (error = debug()), function(cookie, value) {
      var s = $("mpfid", 0);
      var cb = done(call(value), 1)[0];
      if (!result) {
        return s.isSupport = false, cb(s), [b];
      }
      /** @type {!Array} */
      var colorDist = [];
      value = cookie.precollect;
      if (value) {
        (value.entries || []).forEach(function(n) {
          if (n.entryType === type) {
            colorDist.push(n);
          }
        });
      }
      cookie = done(push(result, function(n) {
        return colorDist.push(n);
      }), 2);
      value = cookie[0];
      var uid = cookie[1];
      value(type);
      return [function() {
        uid();
        var watchState = (0, done(test(error), 5)[4])(entryName)[0];
        var ri = watchState && watchState.startTime || 0;
        s.value = colorDist.reduce(function(li, e) {
          var r = e.duration;
          e = e.startTime;
          return li < r && ri < e ? r : li;
        }, 0);
        cb(s);
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
  function update(data, callback) {
    /** @type {!Array} */
    var html = ["img", "script", "iframe", "link", "audio", "video", "source"];
    var resolve = (data = done(log(data, function(mutations) {
      /** @type {number} */
      var i = 0;
      for (; i < mutations.length; i++) {
        if ("childList" === mutations[i].type && function add(children, url) {
          /** @type {number} */
          var i = 0;
          for (; i < children.length; i++) {
            if (resolve(url, children[i].nodeName.toLowerCase()) || children[i].children && add(children[i].children, url)) {
              return 1;
            }
          }
        }(mutations[i].addedNodes, html) || "attributes" === mutations[i].type && resolve(html, mutations[i].target.nodeName.toLowerCase())) {
          callback(mutations[i]);
        }
      }
    }), 2))[0];
    return [function() {
      return resolve(document, {
        attributes : true,
        childList : true,
        subtree : true,
        attributeFilter : ["href", "src"]
      });
    }, data[1]];
  }
  /**
   * @param {!Object} now
   * @return {?}
   */
  function calculateBars(now) {
    now = (last = now || {}).domContentLoadedEventEnd;
    var last = last.navigationStart;
    return now ? now - (void 0 === last ? 0 : last) : null;
  }
  /**
   * @param {!Function} render
   * @return {?}
   */
  function step(render) {
    return function() {
      /** @type {!Array} */
      var args = [];
      /** @type {number} */
      var i = 0;
      for (; i < arguments.length; i++) {
        args[i] = arguments[i];
      }
      return this._method = args[0], render.apply(this, args);
    };
  }
  /**
   * @param {!Function} fn
   * @param {?} bubble
   * @param {?} callback
   * @return {?}
   */
  function addEvent(fn, bubble, callback) {
    /** @type {number} */
    var verifyProducts = 0;
    return function() {
      /** @type {!Array} */
      var specialized = [];
      /** @type {number} */
      var i = 0;
      for (; i < arguments.length; i++) {
        specialized[i] = arguments[i];
      }
      if ("GET" !== this._method) {
        return fn.apply(this, specialized);
      }
      var storeProducts = verifyProducts = verifyProducts + 2;
      return bubble(storeProducts, Date.now()), request(this, "onreadystatechange", function(compare) {
        return function(otherCards) {
          if (compare) {
            compare.call(this, otherCards);
          }
          if (4 === this.readyState) {
            callback(storeProducts);
          }
        };
      })(), fn.apply(this, specialized);
    };
  }
  /**
   * @param {!Function} _
   * @param {?} t
   * @param {?} f
   * @return {?}
   */
  function all(_, t, f) {
    /** @type {number} */
    var b = 1;
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
        var a = b = b + 2;
        t(a, Date.now());
        _.apply(void 0, fn([], done(obj), false)).then(function(notifications) {
          f(a);
          saveNotifs(notifications);
        }, function(proto) {
          f(a, proto);
          addListenerOrObserver(proto);
        });
      });
    };
  }
  /**
   * @param {number} key
   * @param {number} index
   * @param {?} values
   * @param {?} value
   * @return {?}
   */
  function send(key, index, values, value) {
    return function(header, saveNotifs, wrongCredsCallback) {
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
        }(callback), caller_line, wrongCredsCallback);
      }
      var returnNodes;
      var identifierPositions;
      var r;
      var v;
      var comboHashes;
      var html;
      var updateDevicesAfterDelay;
      var msg;
      var l = done([returnNodes = [], identifierPositions = [], function(allDoneCb, continuation_proxy) {
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
      var zoom = l[0];
      var caller_line = l[1];
      var next = l[2];
      var cb = done((r = key, v = index, cb = done([comboHashes = {}, function(hashId, combo) {
        return comboHashes[hashId] = combo;
      }, function(hashId) {
        return delete comboHashes[hashId];
      }], 3), timer = cb[0], l = cb[1], cb = cb[2], html = v && request(v.prototype, "open", step)(), updateDevicesAfterDelay = v && request(v.prototype, "send", addEvent)(l, cb), msg = r && request(r, "fetch", all)(l, cb), [timer, function() {
        if (html) {
          html(true);
        }
        if (updateDevicesAfterDelay) {
          updateDevicesAfterDelay(true);
        }
        if (msg) {
          msg(true);
        }
      }]), 2);
      var callback = cb[0];
      var b = cb[1];
      var timer = done(value && update(value, function() {
        return saveNotifs(wrongCredsCallback() + 5E3);
      }) || [], 2);
      cb = timer[0];
      var initSortMenu = timer[1];
      if (cb) {
        cb();
      }
      timer = done(push(values, next(function(o) {
        var s = o.startTime;
        o = o.duration;
        return saveNotifs(s + o + 5E3);
      }, function() {
        return saveNotifs(get() + 5E3);
      }), false, function() {
        return zoom.notSupport = true;
      }), 2);
      cb = timer[0];
      var handleTimeoutPacket = timer[1];
      return cb("longtask", "resource"), header.forEach(next()), [zoom, function() {
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
      if (!isArray(h.getBoundingClientRect)) {
        return 0;
      }
      size = h.getBoundingClientRect() || {};
      h = size.top;
      size = size.height;
      if (h > window.innerHeight || size <= 0) {
        return 0;
      }
    }
    return value + 1 + .5 * zIndex;
  }
  /**
   * @param {!Object} window
   * @param {!Object} document
   * @param {!Array} name
   * @param {!Array} query
   * @param {!Array} error
   * @return {?}
   */
  function run(window, document, name, query, error) {
    if (void 0 === window && (window = apply()), void 0 === document && (document = join()), void 0 === name && (name = map()), void 0 === query && (query = compile()), void 0 === error && (error = debug()), document && window) {
      return function(options, dispatch) {
        /**
         * @return {undefined}
         */
        function success() {
          if (_takingTooLongTimeout) {
            clearTimeout(_takingTooLongTimeout);
          }
          _takingTooLongTimeout = window.setTimeout(function() {
            res(function() {
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
          }, 1E3);
        }
        var e;
        var response;
        var _takingTooLongTimeout;
        var handleAuthorizedState;
        var u;
        var beatTime;
        var width = options.threshold;
        var thumbnail = options.screenshot;
        var key = options.rootSelector;
        var readOnlyFn = options.autoDetect;
        var className = options.ssUrl;
        var res = schedule(window);
        var depthOfPath = done(test(error), 2)[1];
        /** @type {number} */
        var now = 0;
        /** @type {boolean} */
        var isRoot = false;
        /**
         * @param {!Blob} data
         * @return {undefined}
         */
        var callback = function(data) {
          if (e && dispatch) {
            dispatch({
              ev_type : "blank_screen",
              payload : {
                timestamp : e[0],
                score : e[1],
                screenshot : data,
                error : response
              }
            });
          }
        };
        /** @type {function(): undefined} */
        var gotoNewOfflinePage = (handleAuthorizedState = function() {
          if (e && !isRoot) {
            /** @type {boolean} */
            isRoot = true;
            go();
            if (thumbnail) {
              cleanup(callback, className, window, document);
            } else {
              callback();
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
                handleAuthorizedState();
              }
            }, depthOfPath() > maxDepth ? timeout : HOVER_DELAY);
          }
        });
        addEventListener(function() {
          if (!isRoot) {
            callback();
          }
        });
        /**
         * @return {undefined}
         */
        var go = function() {
          clearTimeout(_takingTooLongTimeout);
          if (f) {
            f();
          }
          if (originalSuccess) {
            originalSuccess();
          }
        };
        var handler = done(log(query, success), 2);
        var func = handler[0];
        var f = handler[1];
        options = done(push(name, function(n, canCreateDiscussions, inRevIdx) {
          return _takingTooLongTimeout && 1 < inRevIdx.length && success();
        }), 2);
        handler = options[0];
        var originalSuccess = options[1];
        return readOnlyFn && (func(null === (func = join()) || void 0 === func ? void 0 : func.body, {
          subtree : true,
          childList : true
        }), handler("longtask", "resource"), success()), [go, function(key) {
          if (!isRoot) {
            /** @type {number} */
            now = Date.now();
            if (response && now - response.timestamp > radius2) {
              response = void 0;
            }
            response = makeRequest(response, key);
          }
        }, success];
      };
    }
  }
  /**
   * @param {!Object} response
   * @return {undefined}
   */
  function read(response) {
    var self;
    var value;
    value = args;
    (self = response).on("init", function() {
      var func;
      var fn;
      var callback;
      var cb = wrap(self, zoom, value);
      if (cb) {
        cb = done(setTimeout(run, cb, self.report.bind(self)), 3);
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
   * @param {!Object} ident
   * @return {?}
   */
  function getIndex(ident) {
    return (null == ident ? void 0 : ident.effectiveType) || (null == ident ? void 0 : ident.type) || "";
  }
  /**
   * @param {!Object} config
   * @param {number} val
   * @return {?}
   */
  function append(config, val) {
    var state = config.common || {};
    return state.sample_rate = val, config.common = state, config;
  }
  /**
   * @param {boolean} value
   * @param {?} i
   * @param {!Function} fn
   * @param {number} a
   * @param {!Function} func
   * @return {?}
   */
  function set(value, i, fn, a, func) {
    return value ? (d = func(a, i), function() {
      return d;
    }) : function() {
      return fn(i);
    };
    var d;
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
    return function(val, match, operator) {
      switch(operator) {
        case "eq":
          return resolve(match, val);
        case "neq":
          return !resolve(match, val);
        case "gt":
          return val > match[0];
        case "gte":
          return val >= match[0];
        case "lt":
          return val < match[0];
        case "lte":
          return val <= match[0];
        case "regex":
          return Boolean(val.match(new RegExp(match.join("|"))));
        case "not_regex":
          return !val.match(new RegExp(match.join("|")));
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
   * @param {!Object} value
   * @return {?}
   */
  function check(name, value) {
    try {
      return "rule" === value.type ? format(name, value.field, value.op, value.values) : "and" === value.type ? value.children.every(function(JohnDoe) {
        return check(name, JohnDoe);
      }) : value.children.some(function(JohnDoe) {
        return check(name, JohnDoe);
      });
    } catch (formOrder) {
      return each(formOrder), false;
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
      get : b,
      post : b
    };
  }
  /**
   * @param {!Object} c
   * @return {?}
   */
  function init(c) {
    /**
     * @return {undefined}
     */
    function b() {
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
     * @param {!Object} data
     * @return {undefined}
     */
    function send(data) {
      $http.post(Q.getEndpoint(), clean([data]));
    }
    var wait;
    var transport;
    var endpoint;
    var value;
    var val;
    var _SERVICE_TAKING_TOO_LONG;
    var d;
    var _takingTooLongTimeout;
    var Q = (transport = (wait = c).transport, endpoint = c.endpoint, value = c.size, val = void 0 === value ? 10 : value, _SERVICE_TAKING_TOO_LONG = void 0 === (wait = c.wait) ? 1E3 : wait, d = [], _takingTooLongTimeout = 0, {
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
        /** @type {string} */
        endpoint = url;
      },
      send : function(data) {
        d.push(data);
        if (d.length >= val) {
          b.call(this);
        }
        clearTimeout(_takingTooLongTimeout);
        /** @type {number} */
        _takingTooLongTimeout = setTimeout(b.bind(this), _SERVICE_TAKING_TOO_LONG);
      },
      flush : function() {
        clearTimeout(_takingTooLongTimeout);
        b.call(this);
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
    return addEventListener(function() {
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
      userId : template(),
      deviceId : template(),
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
   * @param {!Object} options
   * @param {!Object} context
   * @return {?}
   */
  function find(options, context) {
    if (!options || !context) {
      return options || context;
    }
    var res = extend(extend({}, options), context);
    return res.include_users = fn(fn([], done(options.include_users || []), false), done(context.include_users || []), false), res.rules = fn(fn([], done(Object.keys(options.rules || {})), false), done(Object.keys(context.rules || {})), false).reduce(function(deps, name) {
      var rules;
      return name in deps || (name in (options.rules || {}) && name in (context.rules || {}) ? (deps[name] = extend(extend({}, options.rules[name]), context.rules[name]), deps[name].conditional_sample_rules = fn(fn([], done(options.rules[name].conditional_sample_rules || []), false), done(context.rules[name].conditional_sample_rules || []), false)) : deps[name] = (null === (rules = options.rules) || void 0 === rules ? void 0 : rules[name]) || (null === (rules = context.rules) || void 0 === rules ?
      void 0 : rules[name])), deps;
    }, {}), res;
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
     * @param {!Function} listener
     * @return {undefined}
     */
    removeEventListenerFn = function(type, listener) {
      /** @type {number} */
      var i = 0;
      for (; i < eventListeners.length;) {
        var eventListener = eventListeners[i];
        if (eventListener.object === this && eventListener.type === type && eventListener.listener === listener) {
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
    Element.prototype.removeEventListener = removeEventListenerFn;
    if (HTMLDocument && !HTMLDocument.prototype.addEventListener) {
      /** @type {function(string, !Function): undefined} */
      HTMLDocument.prototype.addEventListener = addEventListenerFn;
      /** @type {function(string, !Function): undefined} */
      HTMLDocument.prototype.removeEventListener = removeEventListenerFn;
    }
    if (Window && !Window.prototype.addEventListener) {
      /** @type {function(string, !Function): undefined} */
      Window.prototype.addEventListener = addEventListenerFn;
      /** @type {function(string, !Function): undefined} */
      Window.prototype.removeEventListener = removeEventListenerFn;
    }
  }
  /** @type {!Array} */
  var events = ["init", "start", "config", "beforeDestroy", "provide", "report", "beforeBuild", "build", "beforeSend", "send", "beforeConfig"];
  /**
   * @return {undefined}
   */
  var b = function() {
  };
  var _ = Object.prototype;
  /** @type {number} */
  var _clientIdCounter = 0;
  /**
   * @return {undefined}
   */
  var _process = function() {
    /** @type {!Array} */
    var buffer = [];
    /** @type {number} */
    var i = 0;
    for (; i < arguments.length; i++) {
      buffer[i] = arguments[i];
    }
    console.error.apply(console, fn(["[SDK]", Date.now(), ("" + _clientIdCounter++).padStart(8, " ")], done(buffer), false));
  };
  /** @type {number} */
  var nextGuid = 0;
  /**
   * @param {?} upper
   * @return {?}
   */
  var range = function(upper) {
    return Math.random() < Number(upper);
  };
  /**
   * @param {?} i
   * @param {?} n
   * @return {?}
   */
  var name = function(i, n) {
    return i < Number(n);
  };
  /**
   * @param {!Object} _
   * @return {undefined}
   */
  var factory = function(_) {
    var o;
    var r;
    var me;
    var plugins = (o = {}, r = {}, me = {
      set : function(k, v) {
        return o[k] = v, r[k] = parseInt(v), me;
      },
      merge : function(a) {
        return o = extend(extend({}, o), a), Object.keys(a).forEach(function(dim) {
          r[dim] = parseInt(a[dim]);
        }), me;
      },
      delete : function(entity) {
        return delete o[entity], delete r[entity], me;
      },
      clear : function() {
        return o = {}, r = {}, me;
      },
      get : function(code) {
        return r[code];
      },
      toString : function() {
        return extend({}, r);
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
  var remove = function(obj, i, t) {
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
          return result = f, n = d, lines = [].slice.call(list, 1), v(result, n, function(options, name) {
            if (options && name in options && isArray(options[name])) {
              try {
                return options[name].apply(options, lines);
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
    for (key in request(obj, "provide", function(fn) {
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
        root[component].forEach(function(body) {
          var result = done(body);
          body = result[0];
          result = result.slice(1);
          if (null != t) {
            t(obj, body, result);
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
  var each = function() {
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
   * @param {!Object} item
   * @param {string} event
   * @return {?}
   */
  var log = function(item, event) {
    var config = item && new item(event);
    return [function(content, done) {
      if (config && content) {
        config.observe(content, done);
      }
    }, function() {
      return config && config.disconnect();
    }];
  };
  /**
   * @param {!Object} options
   * @return {?}
   */
  var test = function(options) {
    var ti = options && options.timing || void 0;
    return [ti, function() {
      return options && options.now ? options.now() : (Date.now ? Date.now() : +new Date) - (ti && ti.navigationStart || 0);
    }, function(comparator) {
      var model = (options || {}).getEntriesByType;
      return isArray(model) && model.call(options, comparator) || [];
    }, function() {
      var fn = (options || {}).clearResourceTimings;
      if (isArray(fn)) {
        fn.call(options);
      }
    }, function(comparator) {
      var model = (options || {}).getEntriesByName;
      return isArray(model) && model.call(options, comparator) || [];
    }];
  };
  /**
   * @param {!Object} value
   * @param {!Function} o
   * @param {boolean} name
   * @param {!Function} handler
   * @return {?}
   */
  var push = function(value, o, name, handler) {
    var observer = value && new value(function(prop, a) {
      if (prop.getEntries) {
        prop.getEntries().forEach(function(n, context, data) {
          return o(n, context, data, a);
        });
      } else {
        if (handler) {
          handler();
        }
      }
      if (name) {
        a.disconnect();
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
      if (!value || !observer) {
        return handler && handler();
      }
      try {
        testModules.forEach(function(n) {
          if (-1 < value.supportedEntryTypes.indexOf(n)) {
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
          return handler && handler();
        }
      }
    }, function() {
      return observer && observer.disconnect();
    }];
  };
  /**
   * @param {!Function} callback
   * @param {number} name
   * @param {!Function} cb
   * @param {!Array} res
   * @return {?}
   */
  var setTimeout = function(callback, name, cb, res) {
    if (void 0 === name) {
      name = {};
    }
    if (void 0 === res) {
      /** @type {!Array} */
      res = [];
    }
    try {
      var handler = callback.apply(void 0, fn([], done(res), false));
      return handler && handler(name, cb) || [];
    } catch (formOrder) {
      return each(formOrder), [];
    }
  };
  /**
   * @param {!Object} issue
   * @return {?}
   */
  var f = function(issue) {
    var params = {
      url : toJSON(),
      timestamp : Date.now()
    };
    var val = issue.config();
    return null != val && val.pid && (params.pid = val.pid), null != issue && issue.context && (params.context = issue.context.toString()), params;
  };
  /**
   * @param {!Object} t
   * @param {!Function} value
   * @return {?}
   */
  var forEach = function(t, value) {
    return function(callbackFn) {
      /**
       * @param {!Object} result
       * @return {?}
       */
      function next(result) {
        return result.overrides = value, result;
      }
      t.on("report", next);
      callbackFn();
      t.off("report", next);
    };
  };
  /** @type {string} */
  var auto = "<unknown>";
  /**
   * @param {!Function} func
   * @return {?}
   */
  var call = function(func) {
    /** @type {boolean} */
    var t = false;
    return [function(ldata) {
      if (!t) {
        /** @type {boolean} */
        t = true;
        if (func) {
          func(ldata);
        }
      }
    }];
  };
  /**
   * @param {!Function} name
   * @return {undefined}
   */
  var addEventListener = function(name) {
    var onclickEdition = done(call(name), 1)[0];
    ["unload", "beforeunload", "pagehide"].forEach(function(type) {
      addEventListener(type, onclickEdition);
    });
  };
  /** @type {!RegExp} */
  var inlineAttributeCommentRegex = new RegExp("(cookie|auth|jwt|token|key|ticket|secret|credential|session|password)", "i");
  /** @type {!RegExp} */
  var inlineAttributeIgnoreCommentRegex = new RegExp("(bearer|session)", "i");
  /**
   * @param {!Array} load
   * @param {!Array} error
   * @return {?}
   */
  var open = function(load, error) {
    if (void 0 === load && (load = encode() && apply()), void 0 === error && (error = debug()), load) {
      var action = ok(error);
      return function(a, index) {
        var registration1;
        if (!!a.autoWrap) {
          if (registration1 = XMLHttpRequest && XMLHttpRequest.prototype) {
            exec(registration1, a, index, action);
          }
        }
        return [function(n, k, value) {
          /**
           * @return {?}
           */
          function l() {
            var e = new r;
            return exec(e, b, title, callback), e;
          }
          return b = k = void 0 === k ? a : k, title = value = void 0 === value ? index : value, callback = action, l.prototype = new (r = n), ["DONE", "HEADERS_RECIEVED", "LOADING", "OPENED", "UNSENT"].forEach(function(n) {
            l[n] = r[n];
          }), l;
          var r;
          var b;
          var title;
          var callback;
        }];
      };
    }
  };
  /**
   * @param {!Object} result
   * @param {string} cb
   * @return {?}
   */
  var process = function(result, cb) {
    var app = result.config();
    var data = {
      url : toJSON(),
      pid : app.pid,
      view_id : app.viewId
    };
    return function(context) {
      result.report(extend(extend({}, context), {
        overrides : extend(extend({}, data), cb && cb(context) || {})
      }));
    };
  };
  /** @type {string} */
  var path = "ajax";
  var j = {
    autoWrap : true,
    hookCbAtReq : string,
    ignoreUrls : [],
    collectBodyOnError : false
  };
  /**
   * @param {!Object} connection
   * @return {?}
   */
  var stop = function(connection) {
    return function(typed) {
      if (!typed) {
        return typed;
      }
      var app = connection.config();
      var data = {
        url : toJSON(),
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
      return function(a, canCreateDiscussions) {
        var callback;
        var data = a.maxBreadcrumbs;
        var u = a.onAddBreadcrumb;
        var trans = a.onMaxBreadcrumbs;
        var foo = a.dom;
        var next = done(error(100), 2);
        a = next[0];
        next = next[1];
        data = done(function(index, action, transform) {
          if (void 0 === index) {
            /** @type {number} */
            index = 20;
          }
          if (void 0 === action) {
            /** @type {function(!Object): ?} */
            action = string;
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
          var out = [];
          return [function() {
            return out;
          }, function(value) {
            if (action(value)) {
              value = extend(extend({}, value), {
                timestamp : value.timestamp || Date.now()
              });
              out = 0 <= index && out.length + 1 > index ? transform(fn(fn([], done(out), false), [value], false), index) : fn(fn([], done(out), false), [value], false);
            }
          }];
        }(data, u, trans), 2);
        u = data[0];
        trans = data[1];
        /** @type {function(!Object): undefined} */
        data = (callback = trans, function(response) {
          var reqErr;
          try {
            reqErr = response.event.target ? parse(response.event.target) : parse(response.event);
          } catch (n) {
            /** @type {string} */
            reqErr = "<unknown>";
          }
          if (0 !== reqErr.length) {
            callback({
              type : "dom",
              category : "ui." + response.name,
              message : reqErr
            });
          }
        });
        /** @type {!Array} */
        var item = [];
        if (foo) {
          item.push(a("click", assert(data, "dom")));
          item.push(next(assert(data, "dom")));
          list.addEventListener("click", item[0]);
          list.addEventListener("keypress", item[1]);
        }
        return [u, trans, function() {
          list.removeEventListener("click", item[0]);
          list.removeEventListener("keypress", item[1]);
        }];
      };
    }
  };
  /** @type {string} */
  var str = "breadcrumb";
  var options = {
    maxBreadcrumbs : 20,
    dom : true
  };
  /**
   * @param {number} name
   * @param {number} options
   * @param {number} data
   * @param {!Array} callback
   * @return {?}
   */
  var onLoad = function(name, options, data, callback) {
    if (void 0 === name && (name = goFetch() && apply()), void 0 === options && (options = window.Headers), void 0 === data && (data = window.Request), void 0 === callback && (callback = debug()), name && options && data) {
      var cb = ok(callback);
      return function(val, undefined) {
        if (val.autoWrap) {
          require(name, "fetch", create)(val, undefined, options, data, cb);
        }
        return [function(results, value, a) {
          return create(results, value = void 0 === value ? val : value, a = void 0 === a ? undefined : a, options, data, cb);
        }];
      };
    }
  };
  /** @type {string} */
  var url = "fetch";
  var context = {
    autoWrap : true,
    hookCbAtReq : string,
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
  var parent = "addEventListener";
  /**
   * @param {number} window
   * @return {?}
   */
  var listen = function(window) {
    if (window = void 0 === window ? apply() : window) {
      return function(opts, c) {
        var handleMessage;
        var f;
        var fn = opts.ignoreErrors;
        var onerror = opts.onerror;
        var onunhandledrejection = opts.onunhandledrejection;
        var s = opts.dedupe;
        opts = opts.captureGlobalAsync;
        var str = toString(fn);
        /** @type {!Array} */
        var reactiveFunctions = [];
        var parseInt = some();
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
          window.addEventListener("error", handleMessage = function(n) {
            return l(filter(n));
          });
          reactiveFunctions.push(function() {
            return window.removeEventListener("error", handleMessage);
          });
        }
        if (onunhandledrejection) {
          window.addEventListener("unhandledrejection", f = function(row) {
            debugger
            return l(render(row));
          });
          reactiveFunctions.push(function() {
            return window.removeEventListener("unhandledrejection", f);
          });
        }
        if (opts) {
          reactiveFunctions.push(invoke(l));
        }
        return [function(n, e, f) {
          return l(h(n), e, f);
        }, function() {
          reactiveFunctions.forEach(function(saveNotifs) {
            return saveNotifs();
          });
        }];
      };
    }
  };
  /** @type {string} */
  var text = "jsError";
  var req = {
    ignoreErrors : [],
    onerror : true,
    onunhandledrejection : true,
    captureGlobalAsync : false,
    dedupe : true
  };
  /**
   * @param {number} self
   * @param {number} opts
   * @param {!Array} options
   * @return {?}
   */
  var main = function(self, opts, options) {
    if (void 0 === self && (self = apply()), void 0 === opts && (opts = clone()), void 0 === options && (options = apply() && window.history), self && opts) {
      return function(config, dispatch) {
        var translated;
        var i;
        var rtval;
        var resolve;
        var save;
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
        var add = "manual" === name ? function() {
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
        }, func || (i = opts.href, null !== (rtval = callback(i)) && void 0 !== rtval ? rtval : add(i)), add(opts.href), config), 2);
        var setter = cb[0];
        func = cb[1];
        config = setter.bind(null, "user_set");
        if ("manual" !== name) {
          resolve = done((set = function(key, value) {
            return setter(key, add(value), callback(value));
          }, lastTrackInfoUrl = "", [function(manyArray, trackInfoUrl) {
            if (trackInfoUrl !== lastTrackInfoUrl) {
              set(manyArray, lastTrackInfoUrl = trackInfoUrl);
            }
          }]), 1)[0];
          /**
           * @return {?}
           */
          save = function() {
            return resolve("history", opts.href);
          };
          if (options) {
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
                  value.apply(options, args);
                } finally {
                  save();
                }
              };
            };
            failureRecaps.push(request(options, "pushState", cb)(), request(options, "replaceState", cb)());
          }
          if ("hash" === name) {
            /**
             * @return {?}
             */
            render = function() {
              return resolve("hash", opts.href);
            };
            self.addEventListener("hashchange", render, true);
            failureRecaps.push(function() {
              return self.removeEventListener("hashchange", render, true);
            });
          } else {
            self.addEventListener("popstate", save, true);
            failureRecaps.push(function() {
              return self.removeEventListener("popstate", save, true);
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
  var descWidth = "pageview";
  var branch = {
    sendInit : true,
    routeMode : "history"
  };
  /** @type {string} */
  var categoryId = "resource";
  /** @type {!Array} */
  var result = ["xmlhttprequest", "fetch", "beacon"];
  /**
   * @param {!Array} error
   * @param {!Array} res
   * @param {!Array} t
   * @return {?}
   */
  var end = function(error, res, t) {
    if (void 0 === error && (error = debug()), void 0 === res && (res = map()), void 0 === t && (t = func()), error) {
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
            return !(resolve(null != data ? data : result, res.initiatorType) || null != doc && doc.test(res.name));
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
        var selectCategory = done(test(error), 3)[2];
        initialize(function() {
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
          cb = done(push(res, function(n, a, t) {
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
  var p = "resource";
  var opts = {
    ignoreUrls : [],
    slowSessionThreshold : 4E3
  };
  /**
   * @param {!Array} object
   * @param {!Array} name
   * @param {number} url
   * @return {?}
   */
  var connect = function(object, name, url) {
    if (void 0 === object && (object = apply()), void 0 === name && (name = debug()), void 0 === url && (url = null === location || void 0 === location ? void 0 : location.href), object) {
      return function(options, dispatch) {
        var fn = options.ignoreUrls;
        var t = toString(options.includeUrls);
        var str = toString(fn);
        var sequence_values = done(test(name), 5)[4];
        /**
         * @param {!Object} options
         * @return {undefined}
         */
        var render = function(options) {
          var path;
          var value;
          var text;
          var _ref1;
          if (!(url && options.url === url)) {
            if ((t && t.test(options.url) || !str || !str.test(options.url)) && (options.url || options.xpath && options.xpath !== auto)) {
              value = sequence_values;
              text = (path = options).url;
              _ref1 = options.tagName;
              path = options.xpath;
              text = getText(text);
              value = value(text)[0];
              value = {
                type : _ref1.toLowerCase(),
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
        };
        /**
         * @param {!Object} id
         * @return {undefined}
         */
        var init = function(id) {
          id = id || object.event;
          if (!!id) {
            if (id = function(result) {
              var context = result.target || result.srcElement;
              if (context) {
                var key = context.tagName;
                if (key && isString(key)) {
                  result = setAttribute(context);
                  return {
                    url : result,
                    tagName : key,
                    xpath : result ? void 0 : parse(context)
                  };
                }
              }
            }(id)) {
              render(id);
            }
          }
        };
        object.addEventListener("error", init, true);
        return [render, function() {
          object.removeEventListener("error", init, true);
        }];
      };
    }
  };
  /** @type {string} */
  var parameter = "resourceError";
  var i = {
    includeUrls : [],
    ignoreUrls : []
  };
  var defaults = {
    isSupport : true,
    isPolyfill : false,
    isBounced : false,
    isCustom : false,
    type : "perf"
  };
  /** @type {string} */
  var artistTrack = "first-input";
  /** @type {string} */
  var which = "largest-contentful-paint";
  /** @type {!Array} */
  var pointerEvents = ["keydown", "click"];
  /** @type {string} */
  var entryName = "first-contentful-paint";
  /** @type {string} */
  var type = "longtask";
  /**
   * @param {!Object} options
   * @return {?}
   */
  var wrapper = function(options) {
    return void 0 === options && (options = debug()), function(params, next) {
      var scrollHeightObserver;
      var findLocation;
      var gotoNewOfflinePage;
      var memId = params.precollect;
      var filePath = params.fp;
      var inserted_text = params.fcp;
      var cheevo = params.lcp;
      var fid = params.fid;
      var optimization_info = params.mpfid;
      var values = params.timing;
      /**
       * @param {string} state
       * @return {undefined}
       */
      params = function(state) {
        if (next) {
          next({
            ev_type : "performance",
            payload : state
          });
        }
      };
      if (filePath) {
        setTimeout(expand, {
          metricName : "fp",
          entryName : "first-paint"
        }, params);
      }
      if (inserted_text) {
        setTimeout(expand, {
          metricName : "fcp",
          entryName : entryName
        }, params);
      }
      if (cheevo) {
        setTimeout(setup, {
          precollect : memId
        }, params);
      }
      if (fid) {
        setTimeout(execute, 0, params);
      }
      if (optimization_info) {
        scrollHeightObserver = done(setTimeout(save, {
          precollect : memId
        }, params), 1)[0];
        initialize(function() {
          return setTimeout(scrollHeightObserver, 200);
        });
      }
      if (values) {
        findLocation = done(test(options), 3)[2];
        gotoNewOfflinePage = done(call(function(n) {
          var timing = options && options.timing || void 0;
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
        initialize(function() {
          gotoNewOfflinePage(false);
        });
        addEventListener(function() {
          gotoNewOfflinePage(true);
        });
      }
    };
  };
  /** @type {string} */
  var grid = "layout-shift";
  /**
   * @param {!Array} result
   * @return {?}
   */
  var close = function(result) {
    return void 0 === result && (result = map()), function(cb, callback) {
      /**
       * @param {string} n
       * @return {undefined}
       */
      function value(n) {
        var nodeMinPrice = n.hadRecentInput;
        n = n.value;
        if (!nodeMinPrice) {
          ret.value += n;
        }
      }
      var func = done(cb, 1)[0];
      var ret = $("cls", 0);
      if (!result) {
        return ret.isSupport = false, [function() {
          return callback && callback(ret);
        }, b];
      }
      (func.entries || []).forEach(function(item) {
        if (item.entryType === grid) {
          value(item);
        }
      });
      cb = done(push(result, value), 2);
      func = cb[0];
      cb = cb[1];
      return func(grid), [function() {
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
   * @param {!Array} values
   * @return {?}
   */
  var animate = function(values) {
    return void 0 === values && (values = map()), function(v, fn) {
      /**
       * @param {!Array} result
       * @return {undefined}
       */
      function step(result) {
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
      if (v.length && step(v), !values) {
        return [b];
      }
      data = done(push(values, function(n) {
        return step([n]);
      }, false), 2);
      v = data[0];
      data = data[1];
      return v(control), [data];
    };
  };
  /**
   * @return {?}
   */
  var draw = function() {
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
      var ready = function() {
        f(Date.now() - x);
        /** @type {number} */
        x = 0;
      };
      return addEventListener(function() {
        if (x) {
          /** @type {boolean} */
          select.isBounced = true;
          ready();
        }
      }), [function() {
        /** @type {number} */
        x = Date.now();
      }, ready];
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
   * @param {number} value
   * @param {!Array} options
   * @param {number} file
   * @return {?}
   */
  var exports = function(name, callback, value, options, file) {
    return void 0 === name && (name = encode()), void 0 === callback && (callback = goFetch() && apply()), void 0 === value && (value = map()), void 0 === options && (options = compile()), void 0 === file && (file = debug()), function(result, check, write, cb) {
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
      var createIsSearchQueryChangedFunction = done(call(function(sessionId) {
        sessionId = register(sessionId);
        if (check) {
          check(sessionId);
        }
      }), 1)[0];
      if (!(name && callback && value && file)) {
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
      data = done(test(file), 5);
      var text = data[0];
      var id = data[1];
      var updateIsBeat = data[4];
      result = done(fun(id), 3);
      data = result[0];
      var buildCompleted = result[1];
      var res = result[2];
      errors = done(send(callback, name, value, options)(errors ? [] : deg, res, id), 3);
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
          if (oy - ay < 5E3) {
            return null;
          }
          o = 0 === o.length ? tmp : o[o.length - 1].end;
          return oy - o < 5E3 ? null : Math.max(o, hatWidth);
        }((e ? e.startTime : calculateBars(text)) || 0, bindingDefinitions || calculateBars(text) || 0, x(), id() + (callback ? 0 : 5E3), err);
        return callback ? e ? (onChildOutput(), void callback(e)) : res(id() + 1E3) : (onChildOutput(), e);
      };
      if (cb && cb(err, res, status), err.notSupport) {
        return status.isSupport = false, createIsSearchQueryChangedFunction(status), [function() {
          return 0;
        }];
      }
      cb = err[err.length - 1];
      data(function() {
        return update(select);
      }, Math.max(x() + 5E3, cb ? cb.end : 0));
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
   * @param {number} data
   * @param {!Array} element
   * @param {!Object} y
   * @param {!Array} immediate
   * @param {!Object} name
   * @return {?}
   */
  var bind = function(data, element, y, immediate, name) {
    var payload;
    return void 0 === data && (data = join()), void 0 === element && (element = compile()), void 0 === y && (y = null === (payload = func()) || void 0 === payload ? void 0 : payload.navigationStart), void 0 === immediate && (immediate = function() {
      if (apply() && "requestAnimationFrame" in window) {
        return window.requestAnimationFrame;
      }
    }()), void 0 === name && (name = function() {
      if (apply() && "cancelAnimationFrame" in window) {
        return window.cancelAnimationFrame;
      }
    }()), function(a, check) {
      /**
       * @return {?}
       */
      function next() {
        return res.push({
          time : Date.now() - height,
          score : position(data && data.body, 1, false, width)
        });
      }
      var mouseDownOnDragHandler = a.renderType;
      var s = $("fmp", 0);
      /**
       * @param {string} sessionId
       * @return {undefined}
       */
      var cb = function(sessionId) {
        sessionId = register(sessionId);
        if (check) {
          check(sessionId);
        }
      };
      if ("SSR" === mouseDownOnDragHandler) {
        return setTimeout(expand, {
          metricName : "fmp",
          entryName : entryName
        }, cb), [b];
      }
      var errf = done(call(cb), 1)[0];
      if (!data || !element || !y) {
        return s.isSupport = false, errf(s), [b];
      }
      var widget;
      var item;
      var getItemAtIndex;
      var cls;
      /** @type {number} */
      var height = Date.now();
      /** @type {!Array} */
      var res = [];
      var initFiatRateService = done((widget = data, a = name, mouseDownOnDragHandler = true, getItemAtIndex = !isArray(cb = immediate) || mouseDownOnDragHandler && widget && widget.hidden ? function(iteratee) {
        return iteratee(0), 0;
      } : cb, cls = isArray(a) ? a : b, [function(i) {
        if (item) {
          cls(item);
        }
        item = getItemAtIndex(i);
      }, getItemAtIndex, cls]), 1)[0];
      cb = done(log(element, function() {
        return initFiatRateService(next);
      }), 2);
      a = cb[0];
      var func = cb[1];
      /** @type {number} */
      cb = height - (y || 0);
      return a(data, {
        subtree : true,
        childList : true
      }), [function(part) {
        if (void 0 === part) {
          /** @type {number} */
          part = 0;
        }
        func();
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
        errf(s);
      }.bind(null, cb)];
    };
  };
  /** @type {string} */
  var max = "fmp";
  var arg = {
    renderType : "CSR"
  };
  /** @type {!Array} */
  var IGNORE_TAGS = ["SCRIPT", "STYLE", "META", "HEAD"];
  /** @type {!Array} */
  var utils = ["js_error", "http", "resource_error"];
  /** @type {number} */
  var maxDepth = 1E4;
  /** @type {number} */
  var HOVER_DELAY = 8E3;
  /** @type {number} */
  var timeout = 2E3;
  /** @type {number} */
  var radius2 = 1E4;
  /**
   * @param {!Object} self
   * @return {?}
   */
  var schedule = function(self) {
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
   * @param {!Object} item
   * @param {!Object} self
   * @param {!Object} context
   * @return {?}
   */
  var cleanup = function(callback, item, self, context) {
    /**
     * @return {undefined}
     */
    function next() {
      schedule(self)(function() {
        self.html2canvas(context.body, {
          scale : 360 / self.innerWidth
        }).then(function(canvas) {
          callback(canvas.toDataURL("image/jpeg", .1));
        });
      });
    }
    if (apply() && "Promise" in window && Promise && self && context) {
      if (self.html2canvas) {
        return next();
      }
      var res = context.createElement("script");
      /** @type {!Object} */
      res.src = item;
      if (null !== (item = context.head) && void 0 !== item) {
        item.appendChild(res);
      }
      /** @type {function(): undefined} */
      res.onload = next;
    }
  };
  /** @type {string} */
  var zoom = "blankScreen";
  var args = {
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
    if (data && callback(data) && data.name && isString(data.name)) {
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
          values[i] = parseInt(categories[i]);
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
  var parseNode = function(data) {
    if (data && callback(data) && data.content && isString(data.content)) {
      var node = {
        content : parseInt(data.content),
        type : "log",
        level : "info"
      };
      if ("level" in data && (node.level = data.level), "extra" in data && callback(data.extra)) {
        var i;
        var values = data.extra;
        var res = {};
        var result = {};
        for (i in values) {
          if (isFinite(values[i])) {
            res[i] = values[i];
          } else {
            result[i] = parseInt(values[i]);
          }
        }
        node.metrics = res;
        node.categories = result;
      }
      return node;
    }
  };
  /**
   * @param {!Object} _
   * @return {undefined}
   */
  var getData = function(_) {
    var a = select();
    var index = getIndex(a);
    if (a) {
      /**
       * @return {undefined}
       */
      a.onchange = function() {
        index = getIndex(a);
      };
    }
    _.on("report", function(data) {
      return extend(extend({}, data), {
        extra : extend(extend({}, data.extra || {}), {
          network_type : index
        })
      });
    });
  };
  /**
   * @param {string} app
   * @param {number} v
   * @param {!Function} options
   * @param {!Function} value
   * @return {?}
   */
  var validate = function(app, v, options, value) {
    if (!v) {
      return string;
    }
    var i = v.sample_rate;
    var item = v.include_users;
    var p = v.sample_granularity;
    var w = v.rules;
    v = v.r;
    v = void 0 === v ? Math.random() : v;
    if (resolve(item, app)) {
      return function(header) {
        return append(header, 1);
      };
    }
    var o;
    var r;
    var num_channels;
    var index;
    var props;
    var cb;
    var _obj;
    /** @type {boolean} */
    p = "session" === p;
    var result = set(p, i, options, v, value);
    var obj = (o = w, r = p, num_channels = i, index = options, props = v, cb = value, _obj = {}, Object.keys(o).forEach(function(i) {
      var d = o[i];
      var enable = d.enable;
      var sample_rate = d.sample_rate;
      d = d.conditional_sample_rules;
      if (enable) {
        _obj[i] = {
          enable : enable,
          sample_rate : sample_rate,
          effectiveSampleRate : sample_rate * num_channels,
          hit : set(r, sample_rate, index, props, cb)
        };
        if (d) {
          _obj[i].conditional_hit_rules = d.map(function(filters) {
            var sample_rate = filters.sample_rate;
            filters = filters.filter;
            return {
              sample_rate : sample_rate,
              hit : set(r, sample_rate, index, props, cb),
              effectiveSampleRate : sample_rate * num_channels,
              filter : filters
            };
          });
        }
      } else {
        _obj[i] = {
          enable : enable,
          hit : function() {
            return false;
          },
          sample_rate : 0,
          effectiveSampleRate : 0
        };
      }
    }), _obj);
    return function(item) {
      if (!result()) {
        return false;
      }
      if (!(item.ev_type in obj)) {
        return append(item, i);
      }
      if (!obj[item.ev_type].enable) {
        return false;
      }
      if (null !== (info = item.common) && void 0 !== info && info.sample_rate) {
        return item;
      }
      var info = obj[item.ev_type];
      var s = info.conditional_hit_rules;
      if (s) {
        /** @type {number} */
        var i = 0;
        for (; i < s.length; i++) {
          if (check(item, s[i].filter)) {
            return !!s[i].hit() && append(item, s[i].effectiveSampleRate);
          }
        }
      }
      return !!info.hit() && append(item, info.effectiveSampleRate);
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
    var a = options.success;
    var id = void 0 === a ? b : a;
    a = options.fail;
    var callback = void 0 === a ? b : a;
    a = options.getResponseText;
    var max = void 0 === a ? b : a;
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
      if (null != max) {
        max(this.responseText);
      }
      try {
        var result;
        if (this.responseText) {
          /** @type {*} */
          result = JSON.parse(this.responseText);
          id(result);
        } else {
          id({});
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
    var item = encode();
    return item ? {
      get : function(data) {
        ajax("GET", data, item);
      },
      post : function(data) {
        ajax("POST", data, item);
      }
    } : {
      get : b,
      post : b
    };
  };
  var colWidths = {
    build : function(data) {
      return {
        ev_type : data.ev_type,
        payload : data.payload,
        common : extend(extend({}, data.extra || {}), data.overrides || {})
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
  var action = template;
  /**
   * @param {!Object} data
   * @return {?}
   */
  var constructor = function(data) {
    /**
     * @return {undefined}
     */
    function done() {
      var defaults = extend(extend(extend({}, data), config || {}), opts);
      defaults.plugins = function() {
        /** @type {!Array} */
        var a = [];
        /** @type {number} */
        var i = 0;
        for (; i < arguments.length; i++) {
          a[i] = arguments[i];
        }
        var result = {};
        /** @type {number} */
        var d = 0;
        for (; d < a.length;) {
          result = replace(result, a[d++]);
        }
        return result;
      }(data.plugins, (null == config ? void 0 : config.plugins) || {}, opts.plugins || {});
      defaults.sample = find(find(data.sample, null == config ? void 0 : config.sample), opts.sample);
      options = defaults;
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
    var opts = {};
    /** @type {function(): undefined} */
    var f = b;
    /** @type {function(): undefined} */
    var val = b;
    return {
      getConfig : function() {
        return options;
      },
      setConfig : function(data) {
        var url;
        var cb;
        return opts = extend(extend({}, opts), data || {}), done(), autoReview || (autoReview = data, options.useLocalConfig ? (config = {}, f()) : fields ? add() : (url = options.domain, data = options.aid, cb = function(options) {
          /** @type {string} */
          fields = options;
          add();
        }, api().get({
          withCredentials : true,
          url : function(s, idTo) {
            return void 0 === idTo && (idTo = columnIds), (s && 0 <= s.indexOf("//") ? "" : "https://") + s + idTo;
          }(url) + "?aid=" + data,
          success : function(tree) {
            cb(tree.data || {});
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
  var method;
  var provider;
  var obj;
  var key;
  var val;
  var cb;
  var server;
  var self;
  var client;
  var node;
  var params;
  var left;
  var a;
  var me;
  var ref;
  var model;
  var data;
  var undefined;
  /**
   * @param {!Object} _
   * @return {undefined}
   */
  var sync = function(_) {
    _.on("report", function(value) {
      return options = value, value = {
        url : toJSON(),
        timestamp : Date.now()
      }, extend(extend({}, options), {
        extra : extend(extend({}, value), options.extra || {})
      });
      var options;
    });
  };
  var value = {
    sri : "reportSri",
    st : "reportResourceError",
    err : "captureException"
  };
  /**
   * @param {?} b
   * @return {?}
   */
  var eq = function(b) {
    return Object.keys(b).reduce(function(n, nodeType) {
      return n[nodeType] = [], n;
    }, {});
  };
  /**
   * @param {!Object} map
   * @return {?}
   */
  var createTest = function(map) {
    return Object.keys(map).reduce(function(r, k) {
      return r[map[k]] = k, r;
    }, {});
  };
  /**
   * @param {!Object} obj
   * @param {!Object} v
   * @param {!Object} str
   * @return {?}
   */
  var combine = function(obj, v, str) {
    return function(i, asset, x, ref) {
      if (void 0 === x) {
        /** @type {number} */
        x = Date.now();
      }
      if (void 0 === ref) {
        /** @type {string} */
        ref = location.href;
      }
      ref = extend(extend({}, f(obj)), {
        url : ref,
        timestamp : x
      });
      if (v[i]) {
        if (obj[str[i]]) {
          forEach(obj, ref)(function() {
            obj[str[i]](asset);
          });
        } else {
          if (null !== (x = v[i]) && void 0 !== x) {
            x.push([asset, ref]);
          }
        }
      }
    };
  };
  /**
   * @param {!Object} fn
   * @param {!Object} obj
   * @param {!Object} result
   * @return {?}
   */
  var hook = function(fn, obj, result) {
    return function(i) {
      var OPTIONS;
      if (i in result) {
        if (null !== (OPTIONS = obj[result[i]]) && void 0 !== OPTIONS) {
          OPTIONS.forEach(function(value) {
            value = done(value, 2);
            var f = value[0];
            value = value[1];
            forEach(fn, value)(function() {
              fn[i](f);
            });
          });
        }
        /** @type {null} */
        obj[result[i]] = null;
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
   * @param {!Object} event
   * @return {undefined}
   */
  var handle = function(event) {
    event.on("beforeBuild", function(data) {
      return options = data, $stateParams = event.config(), (data = {}).aid = $stateParams.aid, data.pid = $stateParams.pid, data.view_id = $stateParams.viewId, data.user_id = $stateParams.userId, extend(extend({}, options), {
        extra : extend(extend({}, data), options.extra || {})
      });
      var options;
      var $stateParams;
    });
  };
  /**
   * @param {!Object} msg
   * @return {undefined}
   */
  var next = function(msg) {
    msg.on("start", function() {
      var name;
      var config = msg.config();
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
        sversion : "1.2.1",
        soffset : config || 0
      };
      /** @type {string} */
      var b = "";
      for (name in options) {
        /** @type {string} */
        b = b + ("&" + name + "=" + options[name]);
      }
      config = msg.getSender();
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
      sessionId : action(),
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
  var target = (undefined = function(value) {
    /** @type {({})} */
    var result = void 0 === value ? {} : value;
    var courseSections = result.createSender;
    value = result.builder;
    result = result.createDefaultConfig;
    var data = function(_) {
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
        args[name].forEach(function(val) {
          try {
            val.apply(void 0, fn([], done(list), false));
          } catch (n) {
          }
        });
        if (val1) {
          /** @type {number} */
          args[name].length = 0;
        }
      }
      var b;
      var ref;
      var builder = _.builder;
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
      var args = {};
      events.forEach(function(callbackArgumentIndex) {
        return args[callbackArgumentIndex] = [];
      });
      /** @type {boolean} */
      var a = false;
      /** @type {boolean} */
      var inputId = false;
      /** @type {!Array} */
      var torrentIds = [];
      /** @type {!Array} */
      var opts = [];
      var options = {
        getBuilder : function() {
          return builder;
        },
        getSender : function() {
          return b;
        },
        getPreStartQueue : function() {
          return torrentIds;
        },
        init : function(data) {
          if (a) {
            add("already inited");
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
            add("cannot provide " + name + ", reserved");
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
                  torrentIds.forEach(function(n) {
                    return e.build(n);
                  });
                  /** @type {!Array} */
                  torrentIds = [];
                });
              }
            }
          }
        },
        report : function(arg) {
          if (!!arg) {
            if (arg = then(args.report)(arg)) {
              if (inputId) {
                this.build(arg);
              } else {
                torrentIds.push(arg);
              }
            }
          }
        },
        build : function(type) {
          if (!!inputId) {
            if (type = then(args.beforeBuild)(type)) {
              if (!!(type = builder.build(type))) {
                if (type = then(args.build)(type)) {
                  this.send(type);
                }
              }
            }
          }
        },
        send : function(data) {
          if (!!inputId) {
            if (data = then(args.beforeSend)(data)) {
              b.send(data);
              debug("send", false, data);
            }
          }
        },
        destroy : function() {
          debug("beforeDestroy", true);
        },
        on : function(type, listener) {
          if ("init" === type && a || "start" === type && inputId) {
            listener();
          } else {
            if (args[type]) {
              args[type].push(listener);
            }
          }
        },
        off : function(i, options) {
          if (args[i]) {
            args[i] = shallowCopy(args[i], options);
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
      createSender : void 0 === courseSections ? function(self) {
        return init({
          size : multipartSize,
          endpoint : getPath(self.domain),
          transport : api()
        });
      } : courseSections,
      builder : void 0 === value ? colWidths : value,
      createDefaultConfig : void 0 === result ? notify : result,
      createConfigManager : constructor
    });
    factory(data);
    App(data);
    handle(data);
    sync(data);
    getData(data);
    next(data);
    var model;
    result = remove(data, f, function(tResult, children, t) {
      return forEach(tResult, children)(function() {
        var i = done(t);
        var method = i[0];
        i = i.slice(1);
        data[method].apply(data, fn([], done(i), false));
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
  }(method = void 0 === method ? {} : method), (provider = undefined).on("start", function() {
    var data = provider.config();
    var id = data.userId;
    data = data.sample;
    data = validate(id, data, range, name);
    provider.on("build", data);
  }), obj = undefined, val = eq(key = void 0 === key ? value : key), method = createTest(key), cb = combine(obj, val, key), null !== (key = obj.p) && void 0 !== key && key.a && "observe" in obj.p.a && obj.p.a.observe(function(options) {
    var result = done(options, 5);
    result[0];
    var existsGlobal = result[1];
    var mergedConfig = result[2];
    options = result[3];
    result = result[4];
    cb(existsGlobal, mergedConfig, options, result);
  }), obj.on("init", function() {
    var ref;
    if (null !== (ref = obj.p) && void 0 !== ref) {
      ref.a.forEach(function(options) {
        var result = done(options, 5);
        result[0];
        var existsGlobal = result[1];
        var mergedConfig = result[2];
        options = result[3];
        result = result[4];
        cb(existsGlobal, mergedConfig, options, result);
      });
    }
    if (obj.p && obj.p.a) {
      /** @type {number} */
      obj.p.a.length = 0;
    }
  }), obj.provide("precollect", cb), obj.on("provide", hook(obj, val, method)), (server = undefined).provide("sendEvent", function(text) {
    text = decode(text);
    if (text) {
      server.report({
        ev_type : cssFormat,
        payload : text,
        extra : {
          timestamp : Date.now()
        }
      });
    }
  }), server.provide("sendLog", function(node) {
    node = parseNode(node);
    if (node) {
      server.report({
        ev_type : cssFormat,
        payload : node,
        extra : {
          timestamp : Date.now()
        }
      });
    }
  }), (self = undefined).on("init", function() {
    var event;
    var data = wrap(self, descWidth, branch);
    if (data) {
      data = done(setTimeout(main, extend(extend({}, data), {
        initPid : null === (data = self.config()) || void 0 === data ? void 0 : data.pid,
        onPidUpdate : function(pid) {
          self.set({
            pid : pid,
            viewId : pid + "_" + Date.now(),
            actionId : void 0
          });
        }
      }), self.report.bind(self)), 2);
      event = data[0];
      data = data[1];
      self.on("config", function() {
        event(self.config().pid);
      });
      self.on("beforeDestroy", data);
      self.provide("sendPageview", event);
    }
  }), (client = undefined).on("init", function() {
    var indentPresHandled;
    var data = wrap(client, path, j);
    if (data) {
      /** @type {boolean} */
      indentPresHandled = false;
      data = done(setTimeout(open, extend(extend({}, data), {
        hookCbAtReq : stop(client)
      }), function(n) {
        return !indentPresHandled && client.report(n);
      }), 1)[0];
      client.on("beforeDestroy", function() {
        /** @type {boolean} */
        indentPresHandled = true;
      });
      client.provide("wrapXhr", data);
    }
  }), (node = undefined).on("init", function() {
    var verifyEnumerable;
    var instance = wrap(node, url, context);
    if (instance) {
      /** @type {boolean} */
      verifyEnumerable = false;
      instance = done(setTimeout(onLoad, extend(extend({}, instance), {
        hookCbAtReq : stop(node)
      }), function(callee) {
        return !verifyEnumerable && node.report(callee);
      }), 1)[0];
      node.on("beforeDestroy", function() {
        /** @type {boolean} */
        verifyEnumerable = true;
      });
      node.provide("wrapFetch", instance);
    }
  }), (params = undefined).on("init", function() {
    var desc;
    var data = wrap(params, widgetDataKey, {});
    if (data) {
      desc = params.pp || Error;
      setTimeout(exports, extend(extend({}, data), {
        precollect : desc
      }), process(params));
    }
  }), (left = undefined).on("init", function() {
    var scrollHeightObserver;
    var l = wrap(left, max, arg);
    if (l) {
      scrollHeightObserver = done(setTimeout(bind, l, process(left)), 1)[0];
      initialize(function() {
        return setTimeout(scrollHeightObserver, 200);
      });
    }
  }), (a = undefined).on("init", function() {
    var callback;
    var cb;
    var l = wrap(a, str, options);
    if (l) {
      l = (cb = done(setTimeout(start, l, b), 3))[0];
      callback = cb[1];
      cb = cb[2];
      a.on("report", function(event) {
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
      a.on("beforeDestroy", cb);
      a.provide("getBreadcrumbs", l);
      a.provide("addBreadcrumb", callback);
    }
  }), (me = undefined).on("init", function() {
    window.removeEventListener("error", me.pcErr, true);
    window.removeEventListener("unhandledrejection", me.pcRej, true);
    var cb;
    var result = wrap(me, text, req);
    if (result) {
      result = (cb = done(setTimeout(listen, result, function(data) {
        if (me.getBreadcrumbs) {
          data.payload.breadcrumbs = me.getBreadcrumbs();
        }
        me.report(data);
      }), 2))[0];
      cb = cb[1];
      me.on("beforeDestroy", cb);
      me.provide("captureException", result);
    }
  }), (ref = undefined).on("init", function() {
    var opts = ref.pp || Error;
    if (null !== (target = opts.observer) && void 0 !== target) {
      target.disconnect();
    }
    var report;
    var target;
    var cb;
    var item;
    var root;
    var data = wrap(ref, processedItem, message);
    if (data) {
      setTimeout(wrapper, extend(extend({}, data), {
        precollect : opts
      }), process(ref));
      target = (cb = done(setTimeout(draw, 0, report = function(order) {
        ref.report({
          ev_type : "performance",
          payload : order
        });
      }), 2))[0];
      cb = cb[1];
      ref.provide("performanceInit", target);
      ref.provide("performanceSend", cb);
      if (data.longtask) {
        cb = done(setTimeout(animate, {
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
        item = toJSON();
        data = done(setTimeout(close, [opts], function(commentPayload) {
          ref.report({
            ev_type : "performance",
            payload : commentPayload,
            overrides : {
              url : item
            }
          });
        }), 2);
        root = data[0];
        data = data[1];
        ref.on("beforeConfig", function(options) {
          if (options.viewId && options.viewId !== (null === (options = ref.config()) || void 0 === options ? void 0 : options.viewId)) {
            root();
            item = toJSON();
          }
        });
        ref.on("beforeDestroy", data);
        addEventListener(root);
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
  }), (model = undefined).on("init", function() {
    var cb;
    var result = wrap(model, parameter, i);
    if (result) {
      result = (cb = done(setTimeout(connect, result, model.report.bind(model)), 2))[0];
      cb = cb[1];
      model.on("beforeDestroy", cb);
      model.provide("reportResourceError", result);
    }
  }), (data = undefined).on("init", function() {
    var l = wrap(data, p, opts);
    if (l) {
      l = done(setTimeout(end, l, function(d) {
        var b = done(d, 2);
        d = b[0];
        b = b[1];
        data.report(b ? extend(extend({}, d), {
          extra : {
            sample_rate : 1
          }
        }) : d);
      }), 1)[0];
      data.on("beforeDestroy", l);
    }
  }), read(undefined), undefined);
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
  var removeEventListenerFn;
  var element;
  var x;
  var y;
  var res = apply();
  var addEventListenerFn = getCurrentScript();
  if (res && addEventListenerFn) {
    removeEventListenerFn = (null == (removeEventListenerFn = res[addEventListenerFn]) ? void 0 : removeEventListenerFn.q) || [];
    res[addEventListenerFn] = target;
    removeEventListenerFn.forEach(function(obj) {
      var element;
      var out;
      /** @type {!Object} */
      out = obj;
      obj = extend(extend({}, f(element = target)), {
        url : out.pop(),
        timestamp : out.pop()
      });
      forEach(element, obj)(function() {
        element.apply(void 0, fn([], done(out), false));
      });
    });
    /** @type {number} */
    removeEventListenerFn.length = 0;
    if (target.p) {
      if ("observe" in target.p.a) {
        console.warn("global precollect queue already updated");
      }
      target.p.a = (x = target.p.a, y = [], x.observe = function(query) {
        y.push(query);
      }, x.push = function() {
        var _Object$getPrototypeO;
        /** @type {!Array} */
        var out = [];
        /** @type {number} */
        var i = 0;
        for (; i < arguments.length; i++) {
          out[i] = arguments[i];
        }
        return out.forEach(function(appid) {
          y.forEach(function(t) {
            return t(appid);
          });
        }), (_Object$getPrototypeO = [].push).call.apply(_Object$getPrototypeO, fn([x], done(out), false));
      }, x);
      if (element = target.precollect) {
        target.provide("precollect", function() {
          /** @type {!Array} */
          var buffer = [];
          /** @type {number} */
          var i = 0;
          for (; i < arguments.length; i++) {
            buffer[i] = arguments[i];
          }
          return target.p.a.push(fn(["precollect"], done(buffer), false)), element.apply(void 0, fn([], done(buffer), false));
        });
      }
    }
  }
}();
