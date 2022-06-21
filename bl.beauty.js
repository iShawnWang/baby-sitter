'use strict';
!function() {
  /**
   * @param {!Object} t
   * @param {!Object} n
   * @param {!NodeList} r
   * @return {?}
   */
  function e(t, n, r) {
    /**
     * @param {string} o
     * @param {?} u
     * @return {?}
     */
    function s(o, u) {
      if (!n[o]) {
        if (!t[o]) {
          var a = "function" == typeof require && require;
          if (!u && a) {
            return a(o, true);
          }
          if (i) {
            return i(o, true);
          }
          /** @type {!Error} */
          var f = new Error("Cannot find module '" + o + "'");
          throw f.code = "MODULE_NOT_FOUND", f;
        }
        var u = n[o] = {
          exports : {}
        };
        t[o][0].call(u.exports, function(e) {
          return s(t[o][1][e] || e);
        }, u, u.exports, e, t, n, r);
      }
      return n[o].exports;
    }
    var i = "function" == typeof require && require;
    /** @type {number} */
    var o = 0;
    for (; o < r.length; o++) {
      s(r[o]);
    }
    return s;
  }
  return e;
}()({
  1 : [function($, context, canCreateDiscussions) {
    var self = $("./util");
    var addCompanions = $("./common/sendBeacon");
    /** @type {string} */
    var pid = "aokcdqn3ly@e629dabd48a9933";
    /**
     * @param {?} o
     * @param {!Object} s
     * @return {?}
     */
    var start = function(o, s) {
      var c;
      {
        if ("error" !== s.t || !(c = o.$a1[0]) || "error" !== c.t || s.msg !== c.msg) {
          if ("behavior" === s.t) {
            var pagingEndRow = o.$a1 && o.$a1.length;
            if (pagingEndRow > 0 && "behavior" === o.$a1[pagingEndRow - 1].t) {
              var imageDataArr = s.behavior || [];
              o.$a1[pagingEndRow - 1].behavior.concat(imageDataArr);
            } else {
              o.$a1.push(s);
            }
          } else {
            o.$a1.unshift(s);
          }
          return o.$a2(function() {
            o.$a3 = self.delay(function() {
              o.$a4();
            }, o.$a1[0] && "error" === o.$a1[0].t ? 3e3 : -1);
          }), true;
        }
        c.times++;
      }
    };
    /**
     * @param {!Object} value
     * @return {?}
     */
    var init = function(value) {
      return this.ver = "1.8.30", this._conf = self.ext({}, init.dftCon), this.$a5 = {}, this.$a1 = [], this.$a6 = [], this.sdkFlag = true, this.hash = self.seq(), this.$a7(), this.setConfig(value), this.rip = self.getRandIP(), this.record = 999, this["EagleEye-TraceID"] = this.getTraceId()["EagleEye-TraceID"], this._common = {}, this;
    };
    init.dftCon = {
      sample : 1,
      pvSample : 1,
      tag : "",
      imgUrl : "https://arms-retcode.aliyuncs.com/r.png?",
      region : null,
      ignore : {
        ignoreUrls : [],
        ignoreApis : [],
        ignoreErrors : [/^Script error\.?$/],
        ignoreResErrors : []
      },
      release : undefined,
      environment : "prod"
    };
    init.prototype = {
      constructor : init,
      $a2 : function(saveNotifs) {
        return saveNotifs();
      },
      $a8 : function() {
        var start = this._conf.page;
        return self.$a9(start, [], start + "");
      },
      setPage : function() {
      },
      setConfig : function(data) {
        if (data && "object" == typeof data) {
          self.$aa(data);
          data = this.$ab(data);
          this._conf = self.ext({}, this._conf, data);
        }
      },
      $ab : function(data) {
        var token = data.region;
        var imgUrl = data.imgUrl;
        if (token) {
          var style = self.regionMap[token];
          return data.imgUrl = style || self.defaultImgUrl, data;
        }
        return imgUrl && (data.imgUrl = imgUrl), data;
      },
      $ac : function(a) {
        if (this.getConfig("debug")) {
          return true;
        }
        var m = self.regionMap;
        /** @type {boolean} */
        var r = false;
        var p;
        for (p in m) {
          if (m[p] === a) {
            /** @type {boolean} */
            r = true;
            break;
          }
        }
        return !r && self.warn("[retcode] invalid url: " + a), r;
      },
      $ad : function() {
      },
      $ae : function(html) {
        addCompanions(html, this.getConfig("imgUrl"));
      },
      $af : function() {
      },
      $ag : function() {
        return {};
      },
      setCommonInfo : function(data) {
        if (data && "object" == typeof data) {
          this._common = self.ext({}, this._common, data);
        }
      },
      $a7 : function() {
        this.pageview = self.uu();
        /** @type {number} */
        this.sBegin = Date.now();
      },
      $ah : function() {
        if (this.username) {
          return this.username;
        }
        var request = this._conf;
        var headers = request && request.setUsername;
        if ("function" == typeof headers) {
          try {
            var user = headers();
            if ("string" == typeof user) {
              /** @type {string} */
              user = user.substr(0, 40);
              /** @type {string} */
              this.username = user;
            }
          } catch (facetName) {
            self.warn("[arms] setUsername fail", facetName);
          }
        }
        return this.username;
      },
      getTraceId : function() {
        var padding = this.rip;
        /** @type {number} */
        var negative = Date.now();
        var value = self.getSortNum(this.record);
        var key = padding + negative + value + self.getRandNum(this._conf.pid);
        return this["EagleEye-TraceID"] = key, this.record = value, {
          "EagleEye-TraceID" : key
        };
      },
      getUberTraceId : function(duration) {
        var geometry = this.rip;
        /** @type {number} */
        var digits = Date.now();
        var result = self.getSortNum(this.record);
        var globalFetchId = self.getRandNum(this._conf.pid);
        var id = geometry + digits + result + self.getNum(2) + globalFetchId;
        var posUpdate = id.substring(0, 16);
        return duration = duration ? "1" : "0", {
          "uber-trace-id" : id + ":" + posUpdate + ":0:" + duration,
          traceId : id
        };
      },
      getPageviewId : function() {
        return {
          "EagleEye-SessionID" : this.pageview
        };
      },
      getConfig : function(name) {
        return name ? this._conf[name] : self.ext({}, this._conf);
      },
      $ai : function(event) {
        return 1 === event || ("boolean" == typeof this.$a5[event] ? this.$a5[event] : (this.$a5[event] = self.pick(event), this.$a5[event]));
      },
      $a4 : function(zoomAware) {
        var result;
        clearTimeout(this.$a3);
        /** @type {null} */
        this.$a3 = null;
        var r = this._conf && "function" == typeof this._conf.sendRequest;
        for (; result = this.$a1.pop();) {
          if ("res" === result.t) {
            this.$af(result, "res");
          } else {
            if ("error" === result.t) {
              this.$af(result, "err");
            } else {
              if ("api" === result.t) {
                this.$af(result, "apiSnapshot");
              } else {
                if ("behavior" === result.t) {
                  this.$af(result, "behavior");
                } else {
                  if ("health" === result.t && !r && window && window.navigator && "function" == typeof window.navigator.sendBeacon) {
                    this.$ae(result);
                  } else {
                    this.$ad(result);
                  }
                }
              }
            }
          }
        }
        return zoomAware && this.$aj(), this;
      },
      $aj : function() {
        var tOutResp;
        clearTimeout(this.$ak);
        /** @type {null} */
        this.$ak = null;
        for (; tOutResp = this.$a6.pop();) {
          this.$af(tOutResp, "err");
        }
        return this;
      },
      _lg : function(name, data, c, list) {
        var options = this._conf;
        var text = this.$a8();
        var p = options.ignore || {};
        var u = p.ignoreErrors;
        var b = p.ignoreResErrors;
        var opts = p.ignoreUrls;
        var row = p.ignoreApis;
        if (this._isRobot) {
          return this;
        }
        if (self.$al(text, opts) || self.$al(self.decode(text), opts)) {
          return this;
        }
        if ("error" === name && (self.$al(data.msg, u) || self.$al(self.decode(data.msg), u))) {
          return this;
        }
        if ("resourceError" === name && (self.$al(data.src, b) || self.$al(self.decode(data.src), b))) {
          return this;
        }
        if ("api" === name && (self.$al(data.api, row) || self.$al(self.decode(data.api), row))) {
          return this;
        }
        if (!this.$ac(options.imgUrl)) {
          return this;
        }
        if (!data || options.disabled || !options.pid) {
          return this;
        }
        if (0 === list) {
          return this;
        }
        var dl = data.dl;
        return delete data.dl, data = self.ext({
          t : name,
          times : 1,
          page : text,
          tag : options.tag || "",
          release : options.release || "",
          environment : options.environment,
          begin : Date.now(),
          c1 : options.c1,
          c2 : options.c2,
          c3 : options.c3
        }, data, this.$ag(), this._common, {
          pid : options.pid,
          _v : this.ver,
          pv_id : this.pageview,
          username : this.$ah(),
          sampling : c || 1,
          dl : dl,
          z : self.seq()
        }), 1 === list ? start(this, data) : c && !this.$ai(c) ? this : start(this, data);
      },
      _self : function(name, data, timeout) {
        var me = this;
        var opts = me._conf;
        if ("error" !== name) {
          return me;
        }
        if (!me.$ac(opts.imgUrl)) {
          return me;
        }
        if (!data || opts.disabled || !opts.pid) {
          return me;
        }
        if (timeout && !me.$ai(timeout)) {
          return me;
        }
        data = self.ext({
          t : name,
          times : 1,
          page : self.selfErrPage,
          tag : opts.pid,
          begin : Date.now()
        }, data, {
          pid : pid,
          _v : me.ver,
          sampling : timeout || 1,
          z : self.seq()
        });
        var req = me.$a6[0];
        if (req) {
          req.times++;
          try {
            if (req.err && data.err && req.err.msg_raw && data.err.msg_raw) {
              if (req.err.msg_raw.split("&").indexOf(data.err.msg_raw) < 0 && req.err.msg_raw.length < 1e3) {
                req.err.msg_raw += "&" + data.err.msg_raw;
              }
            }
          } catch (c) {
          }
        } else {
          me.$a6.unshift(data);
          me.$a2(function() {
            if (me.sdkFlag) {
              /** @type {boolean} */
              me.sdkFlag = false;
              me.$ak = self.delay(function() {
                me.$aj();
              }, 1e4);
            }
          });
        }
      },
      custom : function(obj, name) {
        if (!obj || "object" != typeof obj) {
          return this;
        }
        /** @type {boolean} */
        var after = false;
        var context = {
          begin : Date.now()
        };
        return self.each(obj, function(object, status) {
          return !(after = status && status.length <= 20) && self.warn("[retcode] invalid key: " + status), context["x-" + status] = object, after;
        }), after ? this._lg("custom", context, name || 1) : this;
      }
    };
    /** @type {function(!Object): ?} */
    context.exports = init;
  }, {
    "./common/sendBeacon" : 12,
    "./util" : 16
  }],
  2 : [function(norm, mixin, canCreateDiscussions) {
    var n = norm("../util");
    /**
     * @param {!Function} text
     * @param {!Object} window
     * @return {undefined}
     */
    mixin.exports = function(text, window) {
      /** @type {!Array} */
      var r = [];
      /** @type {null} */
      var self = null;
      var data = window && window.location && window.location.href;
      /** @type {number} */
      var _takingTooLongTimeout = 0;
      var click_timeout_id = undefined;
      /** @type {null} */
      var lastTrackInfoUrl = null;
      /**
       * @param {!Object} result
       * @param {string} name
       * @param {!Function} callback
       * @return {undefined}
       */
      var callback = function(result, name, callback) {
        if (null !== result) {
          var entity = result[name];
          result[name] = callback(entity);
        }
      };
      /**
       * @param {!Element} self
       * @return {?}
       */
      var func = function(self) {
        var klass;
        var multiRows;
        var key;
        var node;
        var i;
        /** @type {!Array} */
        var components = [];
        if (!self || "string" != typeof self.tagName) {
          return "";
        }
        if (components.push(self.tagName.toLowerCase()), "string" == typeof self.id && components.push("#".concat(self.id)), "string" == typeof(klass = self.className)) {
          multiRows = klass.split(/\s+/);
          /** @type {number} */
          i = 0;
          for (; i < multiRows.length; i++) {
            components.push(".".concat(multiRows[i]));
          }
        }
        /** @type {!Array} */
        var attrWhitelist = ["type", "name", "title", "alt", "data-arms-attr"];
        /** @type {number} */
        i = 0;
        for (; i < attrWhitelist.length; i++) {
          key = attrWhitelist[i];
          if ("string" == typeof(node = self.getAttribute(key))) {
            components.push("[".concat(key, '="').concat(node, '"]'));
          }
        }
        return components.join("");
      };
      /**
       * @param {string} event
       * @param {?} t
       * @return {?}
       */
      var start = function(event, t) {
        return function(trackInfoUrl) {
          if (trackInfoUrl && trackInfoUrl !== lastTrackInfoUrl) {
            /** @type {!Object} */
            lastTrackInfoUrl = trackInfoUrl;
            var n;
            try {
              n = trackInfoUrl.target;
            } catch (u) {
              /** @type {string} */
              n = "<unknown>";
            }
            if (0 !== n.length) {
              var obj = {
                type : "ui.".concat(event),
                data : {
                  message : function(e) {
                    if (!e || 1 !== e.nodeType) {
                      return "";
                    }
                    var t = e || null;
                    /** @type {!Array} */
                    var values = [];
                    /** @type {number} */
                    var n = 0;
                    /** @type {number} */
                    var a = 0;
                    /** @type {number} */
                    var i = " > ".length;
                    /** @type {string} */
                    var result = "";
                    for (; t && n++ < 5 && !("html" === (result = func(t)) || n > 1 && a + values.length * i + result.length >= 80);) {
                      values.push(result);
                      a = a + result.length;
                      t = t.parentNode;
                    }
                    return values.reverse().join(" > ");
                  }(n)
                },
                timestamp : Date.now()
              };
              if ("click" === event) {
                if (_takingTooLongTimeout) {
                  clearTimeout(_takingTooLongTimeout);
                }
                if (t) {
                  /** @type {number} */
                  _takingTooLongTimeout = setTimeout(function() {
                    if (self) {
                      self.addBehavior(obj);
                    }
                  }, 0);
                } else {
                  if (self) {
                    self.addBehavior(obj);
                  }
                }
              } else {
                if ("keypress" === event) {
                  if (!click_timeout_id) {
                    if (self) {
                      self.addBehavior(obj);
                    }
                  }
                  clearTimeout(click_timeout_id);
                  /** @type {number} */
                  click_timeout_id = setTimeout(function() {
                    click_timeout_id = undefined;
                  }, 100);
                }
              }
            }
          }
        };
      };
      /**
       * @return {undefined}
       */
      var init = function() {
        if (function() {
          var chrome = window && window.chrome;
          var result = chrome && chrome.app && chrome.app.runtime;
          /** @type {boolean} */
          var canCreate = "history" in window && !!window.history.pushState && !!window.history.replaceState;
          return !result && canCreate;
        }()) {
          /**
           * @param {string} user
           * @param {string} index
           * @return {undefined}
           */
          var cb = function(user, index) {
            var obj = {
              type : "navigation",
              data : {
                from : user,
                to : index
              }
            };
            if (self) {
              self.addBehavior(obj);
            }
            /** @type {string} */
            data = index;
          };
          var cached = window.onpopstate;
          /**
           * @return {?}
           */
          window.onpopstate = function() {
            /** @type {number} */
            var length = arguments.length;
            /** @type {!Array} */
            var arr = new Array(length);
            /** @type {number} */
            var i = 0;
            for (; i < length; i++) {
              arr[i] = arguments[i];
            }
            var n = window.location.href;
            if (cb(data, n), cached) {
              return cached.apply(this, arr);
            }
          };
          /**
           * @param {!Function} fToRetry
           * @return {?}
           */
          var retry = function(fToRetry) {
            return function() {
              /** @type {number} */
              var length$2 = arguments.length;
              /** @type {!Array} */
              var args = new Array(length$2);
              /** @type {number} */
              var i$2 = 0;
              for (; i$2 < length$2; i$2++) {
                args[i$2] = arguments[i$2];
              }
              var err = args.length > 2 ? args[2] : undefined;
              return err && cb(data, String(err)), fToRetry.apply(this, args);
            };
          };
          callback(window.history, "pushState", retry);
          callback(window.history, "replaceState", retry);
        }
      };
      n.ext(text.prototype, {
        addBehavior : function(params) {
          if (this.getConfig("behavior") && params && "object" == typeof params) {
            var options = {};
            var i = params.data || {};
            if (params.type) {
              options = i;
            } else {
              if ("string" != typeof i.name || "string" != typeof i.message) {
                return;
              }
              /** @type {string} */
              options.name = i.name.substr(0, 20);
              /** @type {string} */
              options.message = i.message.substr(0, 200);
            }
            if (options.message) {
              options.message = n.encode(options.message);
            }
            var result = {
              type : params.type || "custom",
              data : options || {},
              timestamp : params.timestamp || Date.now(),
              page : params.page || window && window.location && window.location.pathname
            };
            return r.push(result), r = r.slice(-100);
          }
        },
        getBehavior : function() {
          return r || [];
        },
        setBehavior : function(n) {
          return n && (r = n), r;
        },
        reportBehavior : function(callback) {
          var self = this;
          if (self.getConfig("behavior")) {
            if (self.$am) {
              clearTimeout(self.$am);
              self.$am = undefined;
            }
            /** @type {number} */
            self.$am = setTimeout(function() {
              if (r && r.length > 0) {
                self.behavior(r);
                /** @type {!Array} */
                r = [];
                self.$am = undefined;
                if (callback && "function" == typeof callback) {
                  callback();
                }
              }
            }, 0);
          }
        },
        $an : function() {
          if (!this.hasInitBehavior && !self) {
            try {
              !function() {
                if (document && document.referrer && document.location) {
                  /** @type {string} */
                  var referrer = document.referrer;
                  /** @type {string} */
                  var file = document.location.href;
                  if ("" !== referrer) {
                    var obj = {
                      type : "navigation",
                      data : {
                        from : referrer,
                        to : file
                      }
                    };
                    /** @type {string} */
                    data = file;
                    if (self) {
                      self.addBehavior(obj);
                    }
                  }
                }
              }();
              if (window && window.document && window.document.addEventListener) {
                window.document.addEventListener("click", start("click"), false);
                window.document.addEventListener("keypress", start("keypress"), false);
              }
              init();
              if (this.getConfig("enableConsole")) {
                (function() {
                  if (window && window.console) {
                    /** @type {!Array} */
                    var methods = ["debug", "info", "warn", "log", "error", "assert"];
                    /** @type {number} */
                    var i = 0;
                    for (; i < methods.length; i++) {
                      var name = methods[i];
                      if (window.console[name] && "function" == typeof window.console[name]) {
                        callback(window.console, name, function(gen34_options) {
                          var type = name;
                          return function() {
                            /** @type {number} */
                            var arglen = arguments.length;
                            /** @type {!Array} */
                            var args = new Array(arglen);
                            /** @type {number} */
                            var i = 0;
                            for (; i < arglen; i++) {
                              args[i] = arguments[i];
                            }
                            var obj = {
                              type : "console",
                              data : {
                                level : type,
                                message : args
                              }
                            };
                            if (self && self.addBehavior(obj), "error" === type) {
                              /** @type {number} */
                              var i = 0;
                              for (; i < args.length; i++) {
                                var err = args[i];
                                if (err && err.message && err.stack && self) {
                                  self.errorHandler(new ErrorEvent("error", {
                                    error : err,
                                    message : err.message
                                  }));
                                }
                              }
                            }
                            if (gen34_options) {
                              Function.prototype.apply.call(gen34_options, window.console, args);
                            }
                          };
                        });
                      }
                    }
                  }
                })();
              }
            } catch (scale) {
              n.warn("[arms] error in initBehavior", scale);
            }
            self = this;
            /** @type {boolean} */
            this.hasInitBehavior = true;
          }
          return this;
        }
      });
    };
  }, {
    "../util" : 16
  }],
  3 : [function(require, module, canCreateDiscussions) {
    var $ = require("../util");
    var parent = require("../reporter");
    var orig_onKeyDown = require("../common/sender");
    var update = require("../common/post");
    var host = $.win;
    var doc = host.document;
    /** @type {!RegExp} */
    var UNWRAPPED_FUNC = /^(error|api|speed|sum|avg|percent|custom|msg|setPage|setConfig|behavior|performance)$/;
    /**
     * @param {!Object} item
     * @return {?}
     */
    var self = function(item) {
      var self = this;
      return parent.call(self, item), self._initialPage = item.page && $.$a9(item.page, [], item.page + "") || null, self._isRobot = $.isRobot(), self._health = {
        errcount : 0,
        apisucc : 0,
        apifail : 0
      }, self.$ao = function(obj, callback) {
        if ("error" === obj) {
          self._health.errcount++;
        } else {
          if ("api" === obj) {
            self._health[callback.success ? "apisucc" : "apifail"]++;
          }
        }
      }, false !== item.enableInstanceAutoSend && (self.$ap(), self.$aq(), self.$ar(1e4), self._conf && self._conf.behavior && "function" == typeof self.$an && self.$an()), Object.defineProperty && host.addEventListener && Object.defineProperty(self, "pipe", {
        set : self.$as
      }), self;
    };
    self.prototype = $.$at(parent.prototype);
    $.ext(parent._root.dftCon, {
      uid : null,
      setUsername : null,
      ignoreUrlPath : null,
      ignoreApiPath : null,
      urlHelper : [{
        rule : /\/([a-z\-_]+)?\d{2,20}/g,
        target : "/$1**"
      }, /\/$/],
      apiHelper : {
        rule : /\/([a-z\-_]+)?\d{2,20}/g,
        target : "/$1**"
      },
      ignoreUrlCase : true,
      imgUrl : "https://arms-retcode.aliyuncs.com/r.png?",
      disableHook : false,
      autoSendPv : true,
      autoSendPerf : true,
      enableSPA : false,
      enableLinkTrace : false,
      linkType : "arms",
      enableApiCors : false,
      sendResource : true,
      behavior : true,
      enableConsole : false,
      parseHash : function(hash) {
        return (hash ? $.$av(hash.replace(/^#\/?/, "")) : "") || "[index]";
      },
      parseResponse : function(data) {
        if (!data || "object" != typeof data) {
          return {};
        }
        var code = data.code;
        var response = data.msg || data.message || data.subMsg || data.errorMsg || data.ret || data.errorResponse || "";
        return "object" == typeof response && (code = code || response.code, response = response.msg || response.message || response.info || response.ret || JSON.stringify(response)), {
          msg : response,
          code : code,
          success : true
        };
      }
    });
    $.ext(self.prototype, {
      constructor : self,
      _super : parent,
      $a2 : function(saveNotifs) {
        var readyModel = this;
        if (readyModel.hasReady) {
          return saveNotifs();
        }
        if ("complete" === doc.readyState) {
          /** @type {boolean} */
          readyModel.hasReady = true;
          saveNotifs();
        } else {
          $.on(host, "load", function() {
            /** @type {boolean} */
            readyModel.hasReady = true;
            saveNotifs();
          }, true);
        }
      },
      $a8 : function(tryAnonymous) {
        var self = this._conf;
        var value = self.page;
        /** @type {!Location} */
        var url = location;
        /** @type {string} */
        var term = url.host + url.pathname;
        return value && !tryAnonymous ? $.$a9(value, [], value + "") : this._initialPage || $.$au(self.ignoreUrlCase ? term.toLowerCase() : term, self.ignoreUrlPath ? self.ignoreUrlPath : self.urlHelper);
      },
      setPage : function(name, url) {
        var self = this;
        var rules = self.$aw;
        if (false !== url) {
          if (!name || name === rules) {
            return self;
          }
          /** @type {string} */
          self.$aw = name;
          clearTimeout(self.$ax);
          self.$ay(1);
          self.$a7();
          /** @type {number} */
          self.$ax = setTimeout(function() {
            self.$az();
          }, 10);
        } else {
          /** @type {string} */
          self.$aw = name;
        }
        return self._conf.page = name, self;
      },
      setConfig : function(data, options) {
        if (data && "object" == typeof data) {
          $.$aa(data);
          data = this.$ab(data);
          var oldData = this._conf;
          if (this._conf = $.ext({}, oldData, data), !options) {
            /** @type {string} */
            var key = "disableHook";
            if (key in data && oldData[key] !== data[key]) {
              if (data[key]) {
                this.removeHook();
              } else {
                this.addHook();
              }
            }
            if ((key = "enableSPA") in data && oldData[key] !== data[key]) {
              this.$b0(data[key]);
            }
          }
        }
      },
      $ad : function(e) {
        orig_onKeyDown(e, this.getConfig("imgUrl"));
      },
      $af : function(data, id) {
        var dom = {};
        dom[id] = data[id];
        delete data[id];
        /** @type {string} */
        var slackMessage = "";
        if ("object" == typeof data) {
          slackMessage = $.serialize(data);
        }
        update(dom, this.getConfig("imgUrl") + slackMessage + "&post_res=");
      },
      $as : function(n) {
        var t = this;
        if (!n || !n.length) {
          return t;
        }
        try {
          if ("Array" === $.T(n[0])) {
            return $.each(n, function(settings) {
              return t.$as(settings);
            });
          }
          if ("Array" !== $.T(n)) {
            return t;
          }
          var methodName = n.shift();
          if (!UNWRAPPED_FUNC.test(methodName)) {
            return t;
          }
          t[methodName].apply(t, n);
        } catch (e) {
          return $.warn("[retcode] error in sendPipe", e), t;
        }
      },
      $b1 : function() {
        var item = $.ext({}, this._health);
        /** @type {number} */
        item.healthy = item.errcount > 0 ? 0 : 1;
        /** @type {number} */
        item.begin = Date.now();
        /** @type {number} */
        var x_menu_item_current = item.begin - this.sBegin;
        /** @type {number} */
        item.stay = x_menu_item_current;
        this._lg("health", item, 1);
        this._health = {
          errcount : 0,
          apisucc : 0,
          apifail : 0
        };
      },
      createInstance : function(e) {
        e = $.ext({
          pid : this._conf.pid
        }, e);
        var this_area = this.__proto__.constructor(e);
        return e.page && this_area.$az(), this_area;
      }
    });
    require("./behavior")(self, host);
    require("./handler")(self, host, doc);
    require("./fmp")(self, host, doc);
    require("./hook")(self, host);
    require("./hack")(self, host);
    self._super = parent;
    self._root = parent._root;
    /** @type {function(!Object): ?} */
    parent.Browser = self;
    /** @type {function(!Object): ?} */
    module.exports = self;
  }, {
    "../common/post" : 10,
    "../common/sender" : 13,
    "../reporter" : 15,
    "../util" : 16,
    "./behavior" : 2,
    "./fmp" : 4,
    "./hack" : 5,
    "./handler" : 6,
    "./hook" : 7
  }],
  4 : [function(context, mixin, canCreateDiscussions) {
    var that = context("../util");
    /** @type {number} */
    var timeout = 500;
    /**
     * @param {!Function} module
     * @param {!Object} window
     * @param {(Document|Element)} widget
     * @return {undefined}
     */
    mixin.exports = function(module, window, widget) {
      /**
       * @param {!Element} o
       * @param {number} value
       * @param {boolean} error
       * @return {?}
       */
      function callback(o, value, error) {
        /** @type {number} */
        var b = 0;
        var method = o.tagName;
        if ("SCRIPT" !== method && "STYLE" !== method && "META" !== method && "HEAD" !== method) {
          var step = o.children ? o.children.length : 0;
          if (step > 0) {
            var c = o.children;
            /** @type {number} */
            var index = step - 1;
            for (; index >= 0; index--) {
              b = b + callback(c[index], value + 1, b > 0);
            }
          }
          if (b <= 0 && !error) {
            if (!(o.getBoundingClientRect && o.getBoundingClientRect().top < minMarginTop)) {
              return 0;
            }
          }
          b = b + (1 + 0.5 * value);
        }
        return b;
      }
      /**
       * @param {!Array} arr
       * @return {?}
       */
      function prepend(arr) {
        /** @type {number} */
        var i = 1;
        for (; i < arr.length; i++) {
          if (arr[i].score < arr[i - 1].score) {
            return arr.splice(i, 1), prepend(arr);
          }
        }
        return arr;
      }
      var minMarginTop = window.innerHeight || 0;
      /** @type {!Array} */
      var arr = [];
      /** @type {null} */
      var reverseIsSingle = null;
      /** @type {number} */
      var reverseValue = 0;
      that.ext(module.prototype, {
        $ar : function(e) {
          var me = this;
          if (!me._conf || !me._conf.useFmp) {
            return null;
          }
          if (!window.MutationObserver) {
            return that.warn("[retcode] first meaningful paint can not be retrieved"), me.$b2(), null;
          }
          that.on(window, "beforeunload", function() {
            me.$b3(0, true);
          });
          var OriginalMutationObserver = window.MutationObserver;
          return (reverseIsSingle = new OriginalMutationObserver(function() {
            !function(a) {
              /** @type {number} */
              var t = Date.now() - a;
              var n = widget.querySelector("body");
              if (n) {
                /** @type {number} */
                var result = 0;
                result = result + callback(n, 1, false);
                arr.push({
                  score : result,
                  t : t
                });
              } else {
                arr.push({
                  score : 0,
                  t : t
                });
              }
            }(me._startTime);
          })).observe(document, {
            childList : true,
            subtree : true
          }), reverseValue = 1, me.$a2(function() {
            me.$b3(e);
          }), reverseIsSingle;
        },
        $b3 : function(e, islongclick) {
          var me = this;
          if (reverseIsSingle && reverseValue) {
            if (me.$b4 && (clearTimeout(me.$b4), me.$b4 = null), islongclick || !function(inset, b) {
              /** @type {number} */
              var r = Date.now() - inset;
              return !(r > b || r - (arr && arr.length && arr[arr.length - 1].t || 0) > 2 * timeout);
            }(me._startTime, e)) {
              reverseIsSingle.disconnect();
              /** @type {number} */
              reverseValue = 0;
              arr = prepend(arr);
              /** @type {null} */
              var data = null;
              /** @type {number} */
              var i = 1;
              for (; i < arr.length; i++) {
                if (arr[i].t >= arr[i - 1].t) {
                  /** @type {number} */
                  var maxFrameLength = arr[i].score - arr[i - 1].score;
                  if (!data || data.rate <= maxFrameLength) {
                    data = {
                      t : arr[i].t,
                      rate : maxFrameLength
                    };
                  }
                }
              }
              if (data && data.t > 0 && data.t < 36e5) {
                me.$b2({
                  fmp : data.t
                });
              } else {
                me.$b2();
              }
            } else {
              me.$b4 = that.delay(function() {
                me.$b3(e);
              }, timeout);
            }
          }
        }
      });
    };
  }, {
    "../util" : 16
  }],
  5 : [function(require, mixin, canCreateDiscussions) {
    /**
     * @param {!Function} module
     * @param {!Window} global
     * @return {undefined}
     */
    mixin.exports = function(module, global) {
      var util = require("../util");
      var t = global.history || {};
      var doc = global.document;
      /**
       * @param {string} type
       * @param {!Object} data
       * @return {undefined}
       */
      var dispatchEvent = function(type, data) {
        var e;
        if (global.CustomEvent) {
          /** @type {!CustomEvent} */
          e = new CustomEvent(type, {
            detail : data
          });
        } else {
          (e = doc.createEvent("HTMLEvents")).initEvent(type, false, true);
          /** @type {!Object} */
          e.detail = data;
        }
        global.dispatchEvent(e);
      };
      /**
       * @param {string} name
       * @return {undefined}
       */
      var expect = function(name) {
        var a = t[name];
        if ("function" == typeof a) {
          /**
           * @param {?} canCreateDiscussions
           * @param {?} i
           * @param {string} url
           * @return {?}
           */
          t[name] = function(canCreateDiscussions, i, url) {
            var c = 1 === arguments.length ? [arguments[0]] : Array.apply(null, arguments);
            /** @type {string} */
            var currentURL = location.href;
            var schema = a.apply(t, c);
            if (!url || "string" != typeof url) {
              return schema;
            }
            if (url === currentURL) {
              return schema;
            }
            try {
              /** @type {!Array<string>} */
              var node = currentURL.split("#");
              /** @type {!Array<string>} */
              var units = url.split("#");
              var correctedSlug = util.$av(node[0]);
              var value = util.$av(units[0]);
              /** @type {string} */
              var settingsWindowId = node[1] && node[1].replace(/^\/?(.*)/, "$1");
              /** @type {string} */
              var key = units[1] && units[1].replace(/^\/?(.*)/, "$1");
              if (correctedSlug !== value) {
                dispatchEvent("historystatechange", value);
              } else {
                if (settingsWindowId !== key) {
                  dispatchEvent("historystatechange", key);
                }
              }
            } catch (signal) {
              util.warn("[retcode] error in " + name + ": " + signal);
            }
            return schema;
          };
          t[name].toString = util.$b5(name);
        }
      };
      util.ext(module.prototype, {
        $b6 : function() {
          return this.$b7 ? this : (expect("pushState"), expect("replaceState"), this.$b7 = true, this);
        }
      });
    };
  }, {
    "../util" : 16
  }],
  6 : [function(exec, mixin, canCreateDiscussions) {
    /**
     * @param {!Function} module
     * @param {!Window} window
     * @param {!Object} options
     * @return {?}
     */
    mixin.exports = function(module, window, options) {
      var test = exec("../util");
      var convert = exec("../common/res");
      var p = exec("../common/perf");
      /** @type {null} */
      var connection = null;
      var doc = options.documentElement;
      var scaledGridCellHeight = window.innerWidth || doc.clientWidth || options.body.clientWidth;
      var px = window.innerHeight || doc.clientHeight || options.body.clientHeight;
      var data = window.navigator.connection;
      var params = {
        sr : screen.width + "x" + screen.height,
        vp : scaledGridCellHeight + "x" + px,
        ct : data ? data.effectiveType || data.type : ""
      };
      var sms = {};
      /**
       * @param {string} label
       * @param {string} type
       * @param {number} _
       * @param {string} text
       * @param {string} appendix
       * @return {?}
       */
      var write = function(label, type, _, text, appendix) {
        if (type === undefined) {
          var pattern;
          var data;
          if (!sms[label]) {
            /** @type {!RegExp} */
            pattern = new RegExp(label + "=([^;]+)");
            try {
              /** @type {(Array<string>|null)} */
              data = pattern.exec(options.cookie);
            } catch (f) {
              return test.warn("[retcode] can not get cookie:", f), null;
            }
            if (data) {
              /** @type {string} */
              sms[label] = data[1];
            }
          }
          return sms[label];
        }
        /** @type {string} */
        var result = label + "=" + type;
        if (text) {
          /** @type {string} */
          result = result + ("; domain=" + text);
        }
        /** @type {string} */
        result = result + ("; path=" + (appendix || "/"));
        if (_) {
          /** @type {string} */
          result = result + ("; max-age=" + _);
        }
        try {
          return options.cookie = result, !!options.cookie;
        } catch (f) {
          return test.warn("[retcode] can not set cookie: ", f), false;
        }
      };
      /**
       * @param {?} that
       * @return {?}
       */
      var init = function(that) {
        var t = that._conf.uid || write("_nk_") || write("_bl_uid");
        if (!t) {
          t = test.uu();
          if (!write("_bl_uid", t, 15552e3)) {
            return null;
          }
        }
        return t;
      };
      return test.ext(module.prototype, {
        activeErrHandler : function(addedRenderer) {
          return connection && !addedRenderer ? this : (connection = this, this);
        },
        errorHandler : function(event) {
          if (!event) {
            return this;
          }
          var eventStr = event.type;
          if ("error" === eventStr) {
            var oDom = event.target || event.srcElement;
            if (!(!oDom || !oDom.tagName || event.message || event.filename || event.lineno || event.colno)) {
              this.$b8(event);
            } else {
              this.error(event.error || {
                message : event.message
              }, event);
            }
          } else {
            if ("unhandledrejection" === eventStr && test.T(event.reason, "Error") && test.$b9(event.reason)) {
              this.error(event.reason);
            }
          }
          try {
            if (this.getConfig("behavior") && this.reportBehavior) {
              this.reportBehavior();
            }
          } catch (e) {
          }
          return this;
        },
        $b8 : function(event) {
          var t = this;
          var r = event.target || event.srcElement;
          try {
            var e = t.$ba(r);
            /** @type {string} */
            var node_name = "string" == typeof r.tagName ? r.tagName.toLowerCase() : "";
            var x = t.$bb(r, 5);
            return t._lg("resourceError", {
              src : e && e.substring(0, 1e3),
              node_name : node_name,
              xpath : x
            }), t;
          } catch (e) {
            return test.warn("[ARMS] $b8 error :", e), t;
          }
        },
        $ba : function(node) {
          var resizewidth = node.src || node.href;
          try {
            if (!resizewidth) {
              /** @type {boolean} */
              var reverseIsSingle = "object" === ("string" == typeof node.tagName ? node.tagName.toLowerCase() : "");
              var reverseValue = node.getAttribute("classid") && "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" === node.getAttribute("classid").toLowerCase() || "application/x-shockwave-flash" === node.getAttribute("type");
              if (reverseIsSingle && reverseValue) {
                resizewidth = node.getAttribute("data") || node.getAttribute("codebase");
              }
              if (!resizewidth) {
                resizewidth = node.outerHTML || node.innerHTML;
              }
            }
          } catch (a) {
            /** @type {string} */
            resizewidth = "";
          }
          return resizewidth;
        },
        $bb : function(node, t) {
          /** @type {string} */
          var klass = node.id ? "#" + node.id : "";
          /** @type {string} */
          var suffix = "string" == typeof node.className ? "." + node.className.split(" ").join(".") : "";
          /** @type {string} */
          var prefix_base = ("string" == typeof node.tagName ? node.tagName.toLowerCase() : "") + klass + suffix;
          return node.parentNode && node.parentNode.tagName && t - 1 != 0 ? this.$bb(node.parentNode, t - 1) + " > " + prefix_base : prefix_base;
        },
        $b2 : function(index) {
          var results = this;
          results.$a2(function() {
            var res = p();
            if (res && res.load && res.load > 0) {
              res.page = results.$a8(true);
              if (index) {
                res = test.ext(res, index);
              }
              /** @type {boolean} */
              res.autoSend = true;
              results.performance(res);
            }
          });
        },
        $bc : function(d) {
          var scope = this;
          scope.$a2(function() {
            var data = convert();
            if (data && data.load && data.load > 0) {
              if (!(data.load && data.load <= 2e3 || data.load && data.load <= 8e3 && Math.random() > 0.05)) {
                data.page = scope.$a8(true);
                /** @type {string} */
                data.dl = location.href;
                if (d) {
                  data = test.ext(data, d);
                }
                scope._lg("res", data, scope.getConfig("sample"));
              }
            }
          });
        },
        $az : function() {
          var query = this;
          query.$a2(function() {
            var user = function(name) {
              var userid = init(name);
              var e_total = window.devicePixelRatio || 1;
              return {
                uid : userid,
                dt : options.title,
                dl : location.href,
                dr : options.referrer,
                dpr : e_total.toFixed(2),
                de : (options.characterSet || options.defaultCharset || "").toLowerCase(),
                ul : doc.lang,
                begin : Date.now()
              };
            }(query);
            if (user && user.uid) {
              query._lg("pv", user, query.getConfig("pvSample"));
            }
          });
        },
        $ag : function() {
          return params.uid = init(this), params.sid = function(event) {
            if (event.session) {
              return event.session;
            }
            var x;
            try {
              if ("object" == typeof window && "object" == typeof sessionStorage && "function" == typeof sessionStorage.getItem) {
                return "string" == typeof(x = sessionStorage.getItem("_bl_sid")) ? (event.session = x, x) : (x = test.uu(), event.session = x, "function" == typeof sessionStorage.setItem && sessionStorage.setItem("_bl_sid", x), x);
              }
            } catch (r) {
              test.warn("[ARMS] getSid error :", r);
            }
            return event.session = x = test.uu(), x;
          }(this), params;
        },
        $ay : function(shouldAutoStop) {
          /** @type {number} */
          var t = Date.now();
          if (t - this._lastUnload < 200) {
            return this;
          }
          /** @type {number} */
          this._lastUnload = t;
          this.$b1(shouldAutoStop);
          if (this.$bd) {
            this._lg("speed", this.$bd);
            /** @type {null} */
            this.$bd = null;
            clearTimeout(this.$be);
          }
          this.$a4(true);
        },
        $b0 : function(canCreateDiscussions) {
          var self = this;
          if (!canCreateDiscussions ^ self.$bf) {
            return self;
          }
          if (canCreateDiscussions) {
            self.$b6();
            /**
             * @param {boolean} hide
             * @return {undefined}
             */
            self.$bf = function(hide) {
              var currentPage = self._conf.parseHash(location.hash);
              if (currentPage) {
                self.setPage(currentPage, false !== hide);
              }
            };
            /**
             * @param {!Object} e
             * @return {undefined}
             */
            self.$bg = function(e) {
              var currentPage = self._conf.parseHash(e.detail);
              if (currentPage) {
                self.setPage(currentPage);
              }
            };
            test.on(window, "hashchange", self.$bf);
            test.on(window, "historystatechange", self.$bg);
            self.$bf(false);
          } else {
            test.off(window, "hashchange", self.$bf);
            test.off(window, "historystatechange", self.$bg);
            /** @type {null} */
            self.$bf = null;
            /** @type {null} */
            self.$bg = null;
          }
        },
        $ap : function() {
          var me = this;
          if (me.$bh) {
            return me;
          }
          var conf = me._conf;
          return test.on(window, "beforeunload", function() {
            me.$ay(0);
          }), me.$b0(conf.enableSPA), me.activeErrHandler(false), me.$bh = true, me;
        }
      }), test.on(window, "error", function(event) {
        if (connection) {
          connection.errorHandler(event);
        }
      }, false, true).on(window, "unhandledrejection", function(event) {
        if (connection) {
          connection.errorHandler(event);
        }
      }), module;
    };
  }, {
    "../common/perf" : 9,
    "../common/res" : 11,
    "../util" : 16
  }],
  7 : [function(setEndField, mixin, canCreateDiscussions) {
    /**
     * @param {!Function} b
     * @param {!Object} a
     * @return {?}
     */
    mixin.exports = function(b, a) {
      var d = setEndField("../util");
      /** @type {null} */
      var parent = null;
      var click = d.getCurDomain();
      /**
       * @param {!Object} self
       * @param {!Function} url
       * @param {!Object} msg
       * @param {?} e
       * @param {string} n
       * @param {string} data
       * @param {number} next
       * @param {number} x
       * @param {string} y
       * @param {string} i
       * @param {string} t
       * @param {!Object} p
       * @param {number} title
       * @return {?}
       */
      var fn = function(self, url, msg, e, n, data, next, x, y, i, t, p, title) {
        var el = d.J(n) || null;
        var options = d.$a9(url, [el, e], null);
        if (!options) {
          return false;
        }
        var files = options.code || data;
        var callback = !("success" in options) || options.success;
        self.api(msg, callback, next, files, options.msg, x, y, i, t, click, p, title);
      };
      /** @type {string} */
      var k = "fetch";
      /** @type {string} */
      var j = "__oFetch_";
      /** @type {string} */
      var i = "__oXMLHttpRequest_";
      /** @type {string} */
      var name = "XMLHttpRequest";
      return d.ext(b.prototype, {
        removeHook : function(name, guid) {
          return parent && (guid || this === parent) ? (a[j] && (a[k] = a[j], delete a[j]), a[i] && (a[name] = a[i], delete a[i]), parent = null, this) : this;
        },
        addHook : function(path) {
          return !path && parent ? this : (parent || (function() {
            if ("function" == typeof a[k]) {
              var v = a[k];
              a[j] = v;
              /**
               * @param {!Object} data
               * @param {!Object} options
               * @return {?}
               */
              a[k] = function(data, options) {
                var args = 1 === arguments.length ? [arguments[0]] : Array.apply(null, arguments);
                var self = parent;
                if (!self || !self.api) {
                  return v.apply(a, args);
                }
                if (options && ("HEAD" === options.method || "no-cors" === options.mode)) {
                  return v.apply(a, args);
                }
                /** @type {number} */
                var col = Date.now();
                var conf = self._conf;
                var value = (data && "string" != typeof data ? data.url : data) || "";
                var el = value;
                value = d.$av(value);
                var g = (conf.ignore || {}).ignoreApis;
                if (!d.$bi(value, true) || d.$al(value, g)) {
                  return v.apply(a, args);
                }
                value = d.$au(value, conf.ignoreApiPath ? conf.ignoreApiPath : conf.apiHelper);
                var filesPatterns = conf.enableLinkTrace;
                /** @type {string} */
                var y = "";
                /** @type {string} */
                var name = "";
                var check = self.getConfig("pid");
                /** @type {null} */
                var response_ = null;
                var length = self.getConfig("sample");
                var linkTypeIndex = self.getConfig("linkType");
                /** @type {number} */
                var title = 1;
                if (length && !self.$ai(length) && (title = 0), filesPatterns) {
                  /** @type {string} */
                  var b = "";
                  try {
                    /** @type {string} */
                    b = location.origin ? location.origin : location.protocol + "//" + location.hostname + (location.port ? ":" + location.port : "");
                  } catch (j) {
                    /** @type {string} */
                    b = "";
                  }
                  var offset = d.checkSameOrigin(el, b);
                  if (self.getConfig("enableApiCors") || offset) {
                    if (data && "string" != typeof data) {
                      try {
                        if (args[0].headers && "function" == typeof args[0].headers.get && "function" == typeof args[0].headers.append) {
                          switch(linkTypeIndex) {
                            case "tracing":
                              var data = args[0].headers.get("uber-trace-id");
                              if (data) {
                                y = data.split(":")[0];
                              } else {
                                data = self.getUberTraceId(title);
                                args[0].headers.append("uber-trace-id", data["uber-trace-id"]);
                                y = data.traceId;
                              }
                              name = self.pageview;
                              break;
                            default:
                              var horzY = args[0].headers.get("EagleEye-TraceID");
                              var shortUri = args[0].headers.get("EagleEye-SessionID");
                              var k = args[0].headers.get("EagleEye-pAppName");
                              if (horzY) {
                                y = horzY;
                              } else {
                                y = self.getTraceId()["EagleEye-TraceID"];
                                args[0].headers.append("EagleEye-TraceID", y);
                              }
                              if (shortUri) {
                                name = shortUri;
                              } else {
                                name = self.getPageviewId()["EagleEye-SessionID"];
                                args[0].headers.append("EagleEye-SessionID", name);
                              }
                              if (!k) {
                                args[0].headers.append("EagleEye-pAppName", check);
                              }
                          }
                        }
                      } catch (args) {
                        d.warn("[retcode] fetch failed to set header, exception is :\n" + args);
                      }
                    }
                    if (options) {
                      switch(options.headers = options.headers ? options.headers : {}, linkTypeIndex) {
                        case "tracing":
                          if (options.headers["uber-trace-id"]) {
                            y = options.headers["uber-trace-id"].split(":")[0];
                          } else {
                            var props = self.getUberTraceId(title);
                            options.headers["uber-trace-id"] = props["uber-trace-id"];
                            y = props.traceId;
                          }
                          name = self.getPageviewId()["EagleEye-SessionID"];
                          break;
                        default:
                          if (options.headers["EagleEye-TraceID"]) {
                            y = options.headers["EagleEye-TraceID"];
                          } else {
                            y = self.getTraceId()["EagleEye-TraceID"];
                            options.headers["EagleEye-TraceID"] = y;
                          }
                          if (options.headers["EagleEye-SessionID"]) {
                            name = options.headers["EagleEye-SessionID"];
                          } else {
                            name = self.getPageviewId()["EagleEye-SessionID"];
                            options.headers["EagleEye-SessionID"] = name;
                          }
                          if (!options.headers["EagleEye-pAppName"]) {
                            options.headers["EagleEye-pAppName"] = check;
                          }
                      }
                    }
                  }
                }
                return v.apply(a, args).then(function(n) {
                  if (!self || !self.api) {
                    return n;
                  }
                  try {
                    if (!n || "function" != typeof n.clone) {
                      return n;
                    }
                    var res = n.clone();
                    var obj = res.headers;
                    if (obj && "function" == typeof obj.get) {
                      var header = obj.get("content-type");
                      if (header && !/(text)|(json)/.test(header)) {
                        return n;
                      }
                      if (!y) {
                        var r = d.parseFetchHeaders(obj);
                        if ("object" == typeof r && r["eagleeye-traceid"]) {
                          y = r["eagleeye-traceid"];
                          /** @type {string} */
                          response_ = "response";
                        }
                      }
                    }
                    /** @type {number} */
                    var callback = Date.now() - col;
                    return res.text().then(function(user) {
                      var result = d.getFetchSnapshot(args, user, obj);
                      if (res.ok) {
                        fn(self, conf.parseResponse, value, el, user, res.status || 200, callback, col, y, name, result, response_, title);
                      } else {
                        self.api(value, false, callback, res.status || 404, res.statusText, col, y, name, result, click, response_, title);
                      }
                    }), n;
                  } catch (t) {
                    return d.warn("[ARMS] fetch response error :", t), n;
                  }
                })["catch"](function(data) {
                  if (!self || !self.api) {
                    throw data;
                  }
                  /** @type {number} */
                  var formData = Date.now() - col;
                  throw self.api(value, false, formData, data.name || "Error", data.message, col, y, name, {}, click), data;
                });
              };
              a[k].toString = d.$b5(k);
            }
          }(), function() {
            if ("function" == typeof a[name]) {
              var e;
              var t = a[name];
              a[i] = t;
              /**
               * @param {?} b
               * @return {?}
               */
              var init = function(b) {
                var xhr = new t(b);
                var that = parent;
                if (!that || !that.api || !xhr.addEventListener) {
                  return xhr;
                }
                var index;
                var msg;
                var data;
                /** @type {function(): undefined} */
                var _send = xhr.send;
                /** @type {function(string, string): undefined} */
                var open = xhr.open;
                var self = xhr.setRequestHeader;
                var options = that._conf;
                var v = (options.ignore || {}).ignoreApis;
                var tile = that.getConfig("enableLinkTrace");
                /** @type {string} */
                var i = "";
                /** @type {string} */
                var name = "";
                /** @type {string} */
                var r = "";
                /** @type {null} */
                var response_ = null;
                var length = that.getConfig("sample");
                var linkTypeIndex = that.getConfig("linkType");
                /** @type {number} */
                var array = 1;
                return length && !that.$ai(length) && (array = 0), xhr.open = function(name, source) {
                  /** @type {string} */
                  e = name;
                  var message = 1 === arguments.length ? [arguments[0]] : Array.apply(null, arguments);
                  open.apply(xhr, message);
                  data = source || "";
                  msg = d.$av(data);
                  var shouldAvoid = !d.$bi(msg, true) || d.$al(msg, v);
                  if (msg = msg ? d.$au(msg, options.ignoreApiPath ? options.ignoreApiPath : options.apiHelper) : "", !shouldAvoid && tile) {
                    /** @type {string} */
                    var offset = "";
                    try {
                      /** @type {string} */
                      offset = location.origin ? location.origin : location.protocol + "//" + location.hostname + (location.port ? ":" + location.port : "");
                    } catch (w) {
                      /** @type {string} */
                      offset = "";
                    }
                    var lookupOrder = d.checkSameOrigin(data, offset);
                    if ((that.getConfig("enableApiCors") || lookupOrder) && self && "function" == typeof self) {
                      switch(linkTypeIndex) {
                        case "tracing":
                          var result = that.getUberTraceId(array);
                          self.apply(xhr, ["uber-trace-id", result["uber-trace-id"]]);
                          i = result.traceId;
                          name = that.getPageviewId()["EagleEye-SessionID"];
                          break;
                        default:
                          i = that.getTraceId()["EagleEye-TraceID"];
                          self.apply(xhr, ["EagleEye-TraceID", i]);
                          name = that.getPageviewId()["EagleEye-SessionID"];
                          self.apply(xhr, ["EagleEye-SessionID", name]);
                          r = that.getConfig("pid");
                          self.apply(xhr, ["EagleEye-pAppName", r]);
                      }
                    }
                  }
                }, xhr.send = function() {
                  /** @type {number} */
                  index = Date.now();
                  var body = 1 === arguments.length ? [arguments[0]] : Array.apply(null, arguments);
                  _send.apply(xhr, body);
                }, d.on(xhr, "readystatechange", function() {
                  if (msg && 4 === xhr.readyState) {
                    /** @type {number} */
                    var callback = Date.now() - index;
                    var result = d.getXhrSnapshot(data, e, xhr);
                    if (!i) {
                      var s = d.parseXhrHeaders("function" == typeof xhr.getAllResponseHeaders && xhr.getAllResponseHeaders() || "");
                      if ("object" == typeof s && s["eagleeye-traceid"]) {
                        i = s["eagleeye-traceid"];
                        /** @type {string} */
                        response_ = "response";
                      }
                    }
                    if (xhr.status >= 200 && xhr.status <= 299) {
                      var cb = xhr.status || 200;
                      if ("function" == typeof xhr.getResponseHeader) {
                        var result = xhr.getResponseHeader("Content-Type");
                        if (result && !/(text)|(json)/.test(result)) {
                          return;
                        }
                      }
                      if (xhr.responseType && "text" !== xhr.responseType) {
                        that.api(msg, true, callback, cb, "", index, i, name, {}, click, response_, array);
                      } else {
                        fn(that, options.parseResponse, msg, data, xhr.responseText, cb, callback, index, i, name, result, response_, array);
                      }
                    } else {
                      that.api(msg, false, callback, xhr.status || "FAILED", xhr.statusText, index, i, name, result, click, response_, array);
                    }
                  }
                }), xhr;
              };
              init.prototype = t.prototype;
              /** @type {function(?): ?} */
              a[name] = init;
              a[name].toString = d.$b5(name);
            }
          }()), parent = this, this);
        },
        $aq : function() {
          return this.$bj ? this : (this.getConfig("disableHook") || this.addHook(), this.$bj = true, this);
        }
      }), b;
    };
  }, {
    "../util" : 16
  }],
  8 : [function(canCreateDiscussions, isSlidingUp, params1) {
    /** @type {!Array} */
    params1.TIMING_KEYS = ["", "fetchStart", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "requestStart", "responseStart", "responseEnd", "", "domInteractive", "", "domContentLoadedEventEnd", "", "loadEventStart", "", "msFirstPaint", "secureConnectionStart"];
  }, {}],
  9 : [function(pointFromEvent, mixin, canCreateDiscussions) {
    var p = pointFromEvent("../util");
    var args = pointFromEvent("./constants").TIMING_KEYS;
    /**
     * @return {?}
     */
    mixin.exports = function() {
      var window = p.win || {};
      var performance = window.performance;
      if (!performance || "object" != typeof performance) {
        return null;
      }
      var options = {};
      var values = performance.timing || {};
      /** @type {number} */
      var total = Date.now();
      /** @type {number} */
      var s = 1;
      if ("function" == typeof window.PerformanceNavigationTiming) {
        var inputValues = performance.getEntriesByType("navigation")[0];
        if (inputValues) {
          values = inputValues;
          /** @type {number} */
          s = 2;
        }
      }
      p.each({
        dns : [3, 2],
        tcp : [5, 4],
        ssl : [5, 17],
        ttfb : [7, 6],
        trans : [8, 7],
        dom : [10, 8],
        res : [14, 12],
        firstbyte : [7, 2],
        fpt : [8, 1],
        tti : [10, 1],
        ready : [12, 1],
        load : [14, 1]
      }, function(allowedProps, feature) {
        var width = values[args[allowedProps[1]]];
        var height = values[args[allowedProps[0]]];
        if (2 === s || width > 0 && height > 0) {
          /** @type {number} */
          var value = Math.round(height - width);
          if (value >= 0 && value < 6e5) {
            /** @type {number} */
            options[feature] = value;
          }
        }
      });
      var data = window.navigator.connection;
      var kermit = performance.navigation || {};
      options.ct = data ? data.effectiveType || data.type : "";
      var value = data ? data.downlink || data.downlinkMax || data.bandwidth || null : null;
      if ((value = value > 999 ? 999 : value) && (options.bandwidth = value), options.navtype = 1 === kermit.type ? "Reload" : "Other", 1 === s && values[args[16]] > 0 && values[args[1]] > 0) {
        /** @type {number} */
        var posInSet = values[args[16]] - values[args[1]];
        if (posInSet >= 0 && posInSet < 36e5) {
          /** @type {number} */
          options.fpt = posInSet;
        }
      }
      return 1 === s && values[args[1]] > 0 ? options.begin = values[args[1]] : 2 === s && options.load > 0 ? options.begin = total - options.load : options.begin = total, options;
    };
  }, {
    "../util" : 16,
    "./constants" : 8
  }],
  10 : [function(require, mixin, canCreateDiscussions) {
    var log = require("../util");
    /** @type {(Window|{})} */
    var root = "object" == typeof window ? window : {};
    var fn = root.__oXMLHttpRequest_ || root.XMLHttpRequest;
    /** @type {(!Function|undefined)} */
    fn = "function" == typeof fn ? fn : undefined;
    /**
     * @param {!Object} obj
     * @param {string} t
     * @return {undefined}
     */
    mixin.exports = function(obj, t) {
      try {
        var req = new fn;
        req.open("POST", t, true);
        req.setRequestHeader("Content-Type", "text/plain");
        req.send(JSON.stringify(obj));
      } catch (new_config_file) {
        log.warn("[retcode] Failed to log, exception is :\n" + new_config_file);
      }
    };
  }, {
    "../util" : 16
  }],
  11 : [function($, mixin, canCreateDiscussions) {
    var self = $("../util");
    var img_envs = $("./constants").TIMING_KEYS;
    /**
     * @return {?}
     */
    mixin.exports = function() {
      var win = self.win || {};
      var performance = win.performance;
      if (!performance || "object" != typeof performance || "function" != typeof performance.getEntriesByType) {
        return null;
      }
      var r = {};
      var interestingPoint = performance.timing || {};
      var d = performance.getEntriesByType("resource") || [];
      if (r.begin = interestingPoint[img_envs[1]] || Date.now(), "function" == typeof win.PerformanceNavigationTiming) {
        var viewportCenter = performance.getEntriesByType("navigation")[0];
        if (viewportCenter) {
          interestingPoint = viewportCenter;
        }
      }
      return self.each({
        dom : [10, 8],
        load : [14, 1]
      }, function(env_data, i) {
        var _lastleft = interestingPoint[img_envs[env_data[1]]];
        var bbcx = interestingPoint[img_envs[env_data[0]]];
        if (_lastleft > 0 && bbcx > 0) {
          /** @type {number} */
          var h = Math.round(bbcx - _lastleft);
          if (h >= 0 && h < 6e5) {
            /** @type {number} */
            r[i] = h;
          }
        }
      }), r.res = JSON.stringify(d), r;
    };
  }, {
    "../util" : 16,
    "./constants" : 8
  }],
  12 : [function(defaults, mixin, canCreateDiscussions) {
    var opts = defaults("../util");
    /**
     * @param {!Object} value
     * @param {(Object|number)} prefix
     * @return {undefined}
     */
    mixin.exports = function(value, prefix) {
      if ("object" == typeof value) {
        value = opts.serialize(value);
      }
      var path = prefix + value;
      if (window && window.navigator && "function" == typeof window.navigator.sendBeacon) {
        window.navigator.sendBeacon(path, "&post_res=");
      } else {
        opts.warn("[arms] navigator.sendBeacon not surported");
      }
    };
  }, {
    "../util" : 16
  }],
  13 : [function(uninterpolate, mixin, canCreateDiscussions) {
    var u = uninterpolate("../util");
    /** @type {(Window|{})} */
    var root = "object" == typeof window ? window : {};
    var callback = root.__oFetch_ || root.fetch;
    /** @type {(!Function|undefined)} */
    callback = "function" == typeof callback ? callback : undefined;
    /**
     * @param {!Object} data
     * @param {(Object|number)} t
     * @return {?}
     */
    mixin.exports = function(data, t) {
      /** @type {number} */
      var v = -1;
      if ("object" == typeof data) {
        v = data.z;
        data = u.serialize(data);
      }
      var id = t + data;
      if (callback) {
        return callback(id, {
          method : "HEAD",
          mode : "no-cors"
        })["catch"](u.noop);
      }
      if (root.document && root.document.createElement) {
        /** @type {string} */
        var i = "__request_hold_" + v;
        /** @type {!Image} */
        var c = root[i] = new Image;
        /** @type {function(): undefined} */
        c.onload = c.onerror = function() {
          root[i] = undefined;
        };
        c.src = id;
        /** @type {null} */
        c = null;
      }
    };
  }, {
    "../util" : 16
  }],
  14 : [function(require, module, canCreateDiscussions) {
    /**
     * @param {?} source
     * @param {!Object} callback
     * @return {?}
     */
    function init(source, callback) {
      var me = result[name] = new Uint8Array(source);
      me.$as(callback);
      var conf = me._conf;
      return false !== conf.autoSendPv && me.$az(), conf && conf.useFmp || me.$b2(), conf && conf.sendResource && me.$bc(), result[type] = true, me;
    }
    /** @type {!Window} */
    var result = window;
    var Uint8Array = result.BrowserLogger = require("./biz.browser/clazz");
    var name = require("./util").key;
    /** @type {string} */
    var type = "__hasInitBlSdk";
    /**
     * @param {?} instance
     * @param {!Object} action
     * @return {?}
     */
    Uint8Array.singleton = function(instance, action) {
      return result[type] ? result[name] : init(instance, action);
    };
    /**
     * @param {boolean} data
     * @return {?}
     */
    Uint8Array.createExtraInstance = function(data) {
      if (data && "object" == typeof data && true !== data.enableInstanceAutoSend) {
        /** @type {boolean} */
        data.enableInstanceAutoSend = false;
      }
      var that = new Uint8Array(data);
      var conf = that._conf;
      return conf.enableInstanceAutoSend && (false !== conf.autoSendPv && that.$az(), conf && conf.useFmp || that.$b2(), conf && conf.sendResource && that.$bc()), that;
    };
    if ("object" == typeof window && !!window.navigator && result[name]) {
      Uint8Array.bl = function() {
        if (result[type]) {
          return result[name];
        }
        var color = {};
        /** @type {!Array} */
        var opts = [];
        return name in result && (color = result[name].config || {}, opts = result[name].pipe || []), init(color, opts);
      }(result.__hasInitBlSdk);
    }
    module.exports = Uint8Array;
  }, {
    "./biz.browser/clazz" : 3,
    "./util" : 16
  }],
  15 : [function($, context, canCreateDiscussions) {
    var self = $("./util");
    var config = $("./base");
    /** @type {!Array} */
    var args = ["api", "success", "time", "code", "msg", "trace", "traceId", "begin", "pv_id", "sid", "seq", "domain", "flag"];
    /**
     * @param {!Object} name
     * @return {?}
     */
    var extend = function(name) {
      var groups = (name.key || "default").split("::");
      return groups.length > 1 ? self.ext(name, {
        group : groups[0],
        key : groups[1]
      }) : self.ext(name, {
        group : "default_group",
        key : groups[0]
      });
    };
    /**
     * @param {!Object} obj
     * @return {?}
     */
    var init = function(obj) {
      config.call(this, obj);
      var value;
      try {
        /** @type {number} */
        value = "object" == typeof performance ? performance.timing.fetchStart : Date.now();
      } catch (r) {
        /** @type {number} */
        value = Date.now();
      }
      return this._startTime = value, this;
    };
    init.prototype = self.$at(config.prototype);
    self.ext(config.dftCon, {
      startTime : null
    });
    self.ext(init.prototype, {
      constructor : init,
      _super : config,
      sum : function(a, b, col) {
        try {
          var eq = self.$bk(a, b, 1);
          return this._lg("sum", extend(eq), col);
        } catch (i) {
          self.warn("[retcode] can not get parseStatData: " + i);
        }
      },
      avg : function(f, a, b) {
        try {
          var link = self.$bk(f, a, 0);
          return this._lg("avg", extend(link), b);
        } catch (i) {
          self.warn("[retcode] can not get parseStatData: " + i);
        }
      },
      percent : function(i, total, value, extra) {
        try {
          return this._lg("percent", extend({
            key : i,
            subkey : total,
            val : value || 0,
            begin : Date.now()
          }), extra);
        } catch (i) {
          self.warn("[retcode] can not get parseStatData: " + i);
        }
      },
      msg : function(obj, prop) {
        if (obj && !(obj.length > 180)) {
          return this.custom({
            msg : obj
          }, prop);
        }
      },
      error : function(data, value) {
        if (!data) {
          return self.warn("[retcode] invalid param e: " + data), this;
        }
        if (1 === arguments.length) {
          if ("string" == typeof data) {
            data = {
              message : data
            };
            value = {};
          }
          if ("object" == typeof data) {
            value = data = data.error || data;
          }
        } else {
          if ("string" == typeof data) {
            data = {
              message : data
            };
          }
          if ("object" != typeof value) {
            value = {};
          }
        }
        var cid = data.name || "CustomError";
        var a = data.message || "";
        var err = data.stack || "";
        value = value || {};
        /** @type {string} */
        var common = "object" == typeof location && "string" == typeof location.href && location.href.substring(0, 500) || "";
        if (self.$bl(a, value.filename)) {
          /** @type {!RegExp} */
          var b = /^Script error\.?$/;
          var a = data.msg || data.message;
          if (self.$al(a, b) || self.$al(self.decode(a), b)) {
            return this;
          }
          var result = {
            msg : self.selfErrKey,
            err : {
              msg_raw : self.encode(data.msg || data.message)
            }
          };
          return this._self("error", result, 1);
        }
        var params = {
          begin : Date.now(),
          cate : cid,
          msg : a && a.substring(0, 1e3),
          stack : err && err.substring(0, 1e3),
          file : self.$bm(value.filename || ""),
          line : value.lineno || "",
          col : value.colno || "",
          err : {
            msg_raw : self.encode(a),
            stack_raw : self.encode(err)
          },
          dl : common
        };
        /** @type {!Array} */
        var parts = ["tag", "c1", "c2", "c3"];
        /** @type {number} */
        var i = 0;
        for (; i < parts.length; i++) {
          var name = parts[i];
          if (value[name]) {
            params[name] = value[name];
          }
        }
        var handleMin = (this.getConfig("ignore") || {}).ignoreErrors;
        return self.$al(params.msg, handleMin) || self.$al(self.decode(params.msg), handleMin) ? this : (this.$ao && this.$ao("error", params), this._lg("error", params, 1));
      },
      behavior : function(data) {
        if (data) {
          var encodedStr = "object" == typeof data && data.behavior ? data : {
            behavior : data
          };
          return this.$ao && this.$ao("behavior", encodedStr), this._lg("behavior", encodedStr, 1);
        }
      },
      api : function(data, parameters, method, t, what, i, id, el, f, url, p, value) {
        if (!data) {
          return self.warn("[retcode] api is null"), this;
        }
        if (data = "string" == typeof data ? {
          api : data,
          success : parameters,
          time : method,
          code : t,
          msg : what,
          begin : i,
          traceId : id,
          pv_id : el,
          apiSnapshot : f,
          domain : url,
          flag : value
        } : self.sub(data, args), !self.$bi(data.api, true)) {
          return this;
        }
        data.code = data.code || "";
        var n = data.msg || "";
        if (n = "string" == typeof n ? n.substring(0, 1e3) : n, data.msg = n, data.success = data.success ? 1 : 0, data.time = +data.time, data.begin = data.begin, data.traceId = data.traceId || "", data.pv_id = data.pv_id || "", data.domain = data.domain || "", data.flag = data.flag, data.dl = "object" == typeof location && "string" == typeof location.href && location.href.substring(0, 500) || "", data.success ? data.apiSnapshot && delete data.apiSnapshot : data.apiSnapshot = f, p && (data.traceOrigin =
        p), !data.api || isNaN(data.time)) {
          return self.warn("[retcode] invalid time or api"), this;
        }
        var d = (this.getConfig("ignore") || {}).ignoreApis;
        return self.$al(data.api, d) || self.$al(self.decode(data.api), d) ? this : (this.$ao && this.$ao("api", data), this._lg("api", data, data.success && this.getConfig("sample"), data.flag));
      },
      speed : function(type, i, txt) {
        var config = this;
        var length = this.getConfig("startTime") || this._startTime;
        return /^s(\d|1[0])$/.test(type) ? (i = "number" != typeof i ? Date.now() - length : i >= length ? i - length : i, config.$bd = config.$bd || {}, config.$bd[type] = i, config.$bd.begin = length, clearTimeout(config.$be), config.$be = setTimeout(function() {
          if (!txt) {
            config.$bd.page = config.$a8(true);
          }
          config._lg("speed", config.$bd);
          /** @type {null} */
          config.$bd = null;
        }, 5e3), config) : (self.warn("[retcode] invalid point: " + type), config);
      },
      performance : function(options) {
        if (options && "object" == typeof options && !this.$bn) {
          var context = {};
          var files = {};
          var timeout = this.getConfig("autoSendPerf");
          if (options.autoSend && timeout) {
            return files = self.ext(this.$bo || {}, options), this.$bn = true, this._lg("perf", files, this.getConfig("sample"));
          }
          if (options.autoSend && !timeout) {
            return delete options.autoSend, this.$bo ? (files = self.ext(this.$bo || {}, options), this.$bn = true, this._lg("perf", files, this.getConfig("sample"))) : void(this.$bo = options);
          }
          var index;
          for (index in options) {
            if (/^t([1-9]|1[0])$/.test(index) || "ctti" === index || "cfpt" === index) {
              context[index] = options[index];
            }
          }
          if (true === options.autoSend || !timeout && (timeout || this.$bo)) {
            return true !== options.autoSend && false === timeout && this.$bo ? (context = self.ext(this.$bo || {}, context), this.$bn = true, this._lg("perf", context, this.getConfig("sample"))) : void 0;
          }
          this.$bo = self.ext(this.$bo || {}, context);
        }
      },
      resource : function(item, id) {
        if (!item || !self.isPlainObject(item)) {
          return self.warn("[arms] invalid param data: " + item), this;
        }
        /** @type {!Array<string>} */
        var test = Object.keys(item);
        /** @type {!Array} */
        var events = ["begin", "dom", "load", "res", "dl"];
        /** @type {boolean} */
        var i = false;
        var p;
        for (p in events) {
          if (test.indexOf(events[p]) < 0) {
            /** @type {boolean} */
            i = true;
            break;
          }
        }
        if (i) {
          return self.warn("[arms] lack param data: " + item), this;
        }
        var data = {
          begin : item.begin || Date.now(),
          dom : item.dom || "",
          load : item.load || "",
          res : self.isArray(item.res) ? JSON.stringify(item.res) : JSON.stringify([]),
          dl : item.dl || ""
        };
        return this._lg("res", data, id);
      },
      event : function(data, mode) {
        if ("object" == typeof data && data && data.key) {
          var r = {};
          /** @type {!Array} */
          var types = ["key", "success", "time", "c1", "c2", "c3"];
          var k;
          for (k in data) {
            if (types.indexOf(k) > -1) {
              r[k] = data[k];
            }
          }
          /** @type {number} */
          r.success = false === data.success ? 0 : 1;
          this._lg("event", r, mode);
        }
      }
    });
    init._super = config;
    init._root = config;
    /** @type {function(!Object): ?} */
    config.Reporter = init;
    /** @type {function(!Object): ?} */
    context.exports = init;
  }, {
    "./base" : 1,
    "./util" : 16
  }],
  16 : [function(canCreateDiscussions, module, isSlidingUp) {
    /** @type {function(): number} */
    Date.now = Date.now || function() {
      return (new Date).getTime();
    };
    /** @type {number} */
    var _code_count = Date.now();
    /**
     * @return {undefined}
     */
    var root = function() {
    };
    var _ = {
      noop : root,
      warn : function() {
        /** @type {!Function} */
        var parentNode = "object" == typeof console ? console.warn : root;
        try {
          var options = {
            warn : parentNode
          };
          options.warn.call(options);
        } catch (r) {
          return root;
        }
        return parentNode;
      }(),
      key : "__bl",
      selfErrKey : "ARMS_SDK_ERROR",
      selfErrPage : "ARMSSDK",
      win : "object" == typeof window && window.document ? window : undefined,
      regionMap : {
        cn : "https://arms-retcode.aliyuncs.com/r.png?",
        sg : "https://arms-retcode-sg.aliyuncs.com/r.png?",
        sg_2 : "https://retcode-sg-lazada.arms.aliyuncs.com/r.png?",
        daily : "http://arms-retcode-daily.alibaba.net/r.png?",
        daily_2 : "https://arms-retcode-daily.alibaba.net/r.png?",
        us : "https://retcode-us-west-1.arms.aliyuncs.com/r.png?",
        tw : "https://arms-retcode.orientalgame.com.tw/r.png?",
        tw_sg : "https://arms-retcode-sg.orientalgame.com.tw/r.png?",
        hz_finance : "https://arms-retcode-hz-finance.aliyuncs.com/r.png?"
      },
      defaultImgUrl : "https://arms-retcode.aliyuncs.com/r.png?",
      $at : function(proto) {
        if (Object.create) {
          return Object.create(proto);
        }
        /**
         * @return {undefined}
         */
        var Bridge = function() {
        };
        return Bridge.prototype = proto, new Bridge;
      },
      each : function(obj, iterator) {
        /** @type {number} */
        var i = 0;
        var n = obj.length;
        if (this.T(obj, "Array")) {
          for (; i < n && false !== iterator.call(obj[i], obj[i], i); i++) {
          }
        } else {
          for (i in obj) {
            if (false === iterator.call(obj[i], obj[i], i)) {
              break;
            }
          }
        }
        return obj;
      },
      $a9 : function(b, rect, top) {
        if ("function" != typeof b) {
          return top;
        }
        try {
          return b.apply(this, rect);
        } catch (n) {
          return top;
        }
      },
      T : function(s, type) {
        /** @type {string} */
        var name = Object.prototype.toString.call(s).substring(8).replace("]", "");
        return type ? name === type : name;
      },
      $au : function(t, n) {
        if (!t) {
          return "";
        }
        if (!n) {
          return t;
        }
        var assert = this;
        var type = assert.T(n);
        return "Function" === type ? assert.$a9(n, [t], t) : "Array" === type ? (this.each(n, function(start) {
          t = assert.$au(t, start);
        }), t) : "Object" === type ? t.replace(n.rule, n.target || "") : t.replace(n, "");
      },
      $al : function(content, node) {
        if (!content || !node) {
          return false;
        }
        if ((this.isString(node) || node.source || "Function" === this.T(node)) && (node = [node]), !this.isArray(node)) {
          return this.warn("[arms] invalid rules of ignore config, (list of) String/RegExp/Funcitons are available"), false;
        }
        var val;
        /** @type {!Array} */
        var data = [];
        /** @type {number} */
        var i = 0;
        var lc = node.length;
        for (; i < lc; i++) {
          if (val = node[i], this.isString(val)) {
            data.push(val.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1"));
          } else {
            if (val && val.source) {
              data.push(val.source);
            } else {
              if (val && "Function" === this.T(val) && true === this.$a9(val, [content], false)) {
                return true;
              }
            }
          }
        }
        /** @type {!RegExp} */
        var rule = new RegExp(data.join("|"), "i");
        return !!(data.length && rule.test && rule.test(content));
      },
      J : function(a) {
        if (!a || "string" != typeof a) {
          return a;
        }
        /** @type {null} */
        var d = null;
        try {
          /** @type {*} */
          d = JSON.parse(a);
        } catch (r) {
        }
        return d;
      },
      pick : function(value) {
        return 1 === value || 1 === Math.ceil(Math.random() * value);
      },
      $aa : function(row) {
        if ("sample" in row) {
          var right = row.sample;
          var position = right;
          if (right && /^\d+(\.\d+)?%$/.test(right)) {
            /** @type {number} */
            position = parseInt(100 / parseFloat(right));
          }
          if (0 < position && 1 > position) {
            /** @type {number} */
            position = parseInt(1 / position);
          }
          if (position >= 1 && position <= 100) {
            row.sample = position;
          } else {
            delete row.sample;
          }
        }
        return row;
      },
      on : function(element, type, fn, selector, capture) {
        return element.addEventListener ? (capture = capture || false, element.addEventListener(type, function wrappedCallback(event) {
          if (selector) {
            element.removeEventListener(type, wrappedCallback, capture);
          }
          fn.call(this, event);
        }, capture)) : element.attachEvent && element.attachEvent("on" + type, function eventHandler(event) {
          if (selector) {
            element.detachEvent("on" + type, eventHandler);
          }
          fn.call(this, event);
        }), this;
      },
      off : function(elem, event, handler) {
        return handler ? (elem.removeEventListener ? elem.removeEventListener(event, handler) : elem.detachEvent && elem.detachEvent(event, handler), this) : this;
      },
      delay : function(func, timeout) {
        return -1 === timeout ? (func(), null) : setTimeout(func, timeout || 0);
      },
      ext : function(fn) {
        /** @type {number} */
        var i__7286__auto___11343 = 1;
        /** @type {number} */
        var len__7285__auto___11342 = arguments.length;
        for (; i__7286__auto___11343 < len__7285__auto___11342; i__7286__auto___11343++) {
          var options = arguments[i__7286__auto___11343];
          var name;
          for (name in options) {
            if (Object.prototype.hasOwnProperty.call(options, name)) {
              fn[name] = options[name];
            }
          }
        }
        return fn;
      },
      sub : function(array, values) {
        var inputsToClear = {};
        return this.each(array, function(el, i) {
          if (-1 !== values.indexOf(i)) {
            inputsToClear[i] = el;
          }
        }), inputsToClear;
      },
      uu : function() {
        var i;
        var h;
        /** @type {number} */
        var name = 20;
        /** @type {!Array} */
        var table = new Array(name);
        /** @type {!Array<string>} */
        var data = Date.now().toString(36).split("");
        for (; name-- > 0;) {
          /** @type {string} */
          h = (i = 36 * Math.random() | 0).toString(36);
          /** @type {string} */
          table[name] = i % 3 ? h : h.toUpperCase();
        }
        /** @type {number} */
        var j = 0;
        for (; j < 8; j++) {
          table.splice(3 * j + 2, 0, data[j]);
        }
        return table.join("");
      },
      seq : function() {
        return (_code_count++).toString(36);
      },
      decode : function(string) {
        try {
          /** @type {string} */
          string = decodeURIComponent(string);
        } catch (t) {
        }
        return string;
      },
      encode : function(key, prefix) {
        try {
          /** @type {string} */
          key = prefix ? encodeURIComponent(key).replace(/\(/g, "%28").replace(/\)/g, "%29") : encodeURIComponent(key);
        } catch (r) {
        }
        return key;
      },
      serialize : function(value) {
        value = value || {};
        /** @type {!Array} */
        var drilldownLevelLabels = [];
        var i;
        for (i in value) {
          if (Object.prototype.hasOwnProperty.call(value, i) && value[i] !== undefined) {
            drilldownLevelLabels.push(i + "=" + this.encode(value[i], "msg" === i));
          }
        }
        return drilldownLevelLabels.join("&");
      },
      $bi : function(data, options) {
        if (!data || "string" != typeof data) {
          return false;
        }
        /** @type {boolean} */
        var out = /arms-retcode[\w-]*\.aliyuncs/.test(data);
        return !out && options && (out = /(\.png)|(\.gif)|(alicdn\.com)|(mmstat\.com)/.test(data)), !out;
      },
      $b9 : function(importError) {
        return !(!importError || !importError.message) && !/failed[\w\s]+fetch/i.test(importError.message);
      },
      $av : function(data) {
        return data && "string" == typeof data ? data.replace(/^(https?:)?\/\//, "").replace(/\?.*$/, "") : "";
      },
      $bm : function(data) {
        return data && "string" == typeof data ? data.replace(/\?.*$/, "") : "";
      },
      $b5 : function(propName) {
        return function() {
          return propName + "() { [native code] }";
        };
      },
      checkSameOrigin : function(key, text) {
        if (!text || !key) {
          return false;
        }
        var r = "//" + text.split("/")[2];
        return key === text || key.slice(0, text.length + 1) === text + "/" || key === r || key.slice(0, r.length + 1) === r + "/" || !/^(\/\/|http:|https:).*/.test(key);
      },
      getRandIP : function() {
        /** @type {!Array} */
        var e = [];
        /** @type {number} */
        var fixWheelDelta = 0;
        for (; fixWheelDelta < 4; fixWheelDelta++) {
          /** @type {number} */
          var counter = Math.floor(256 * Math.random());
          /** @type {string} */
          e[fixWheelDelta] = (counter > 15 ? "" : "0") + counter.toString(16);
        }
        return e.join("").replace(/^0/, "1");
      },
      getSortNum : function(i) {
        return i ? (i = i + 1) >= 1e3 && i <= 9999 ? i : i < 1e3 ? i + 1e3 : i % 1e4 + 1e3 : 1e3;
      },
      getRandNum : function(string) {
        return string && "string" == typeof string ? string.length < 5 ? this.getNum(5) : string.substring(string.length - 5) : this.getNum(5);
      },
      getNum : function(num) {
        /** @type {!Array} */
        var t = [];
        /** @type {number} */
        var j = 0;
        for (; j < num; j++) {
          /** @type {number} */
          var default_favicon = Math.floor(16 * Math.random());
          /** @type {string} */
          t[j] = default_favicon.toString(16);
        }
        return t.join("");
      },
      getCurDomain : function() {
        return location && location.hostname || "";
      },
      parseFetchHeaders : function(arr) {
        if (!arr) {
          return {};
        }
        var keys = {};
        try {
          if ("function" == typeof arr.keys) {
            var deletedChar = arr.keys();
            var n = deletedChar.next();
            for (; !n.done;) {
              var i = n.value;
              keys[i] = arr.get(i);
              n = deletedChar.next();
            }
          } else {
            /** @type {!Object} */
            keys = arr;
          }
        } catch (i) {
          keys = {};
        }
        return keys;
      },
      parseXhrHeaders : function(url) {
        if (!url && "string" != typeof url) {
          return {};
        }
        var t = {};
        try {
          var assetsDirsGroups = url.split("\r\n");
          t = assetsDirsGroups.reduce(function(res, clusterShardData) {
            var r = clusterShardData.split(": ");
            return res[r[0]] = r[1], res;
          }, {});
        } catch (n) {
          t = {};
        }
        return t;
      },
      getQuerys : function(match) {
        if (!match) {
          return "";
        }
        var t21 = {};
        /** @type {!Array} */
        var xminIds = [];
        /** @type {string} */
        var name = "";
        /** @type {string} */
        var a = "";
        try {
          /** @type {!Array} */
          var layers = [];
          if (match.indexOf("?") >= 0 && (layers = match.substring(match.indexOf("?") + 1, match.length).split("&")), layers.length > 0) {
            var i;
            for (i in layers) {
              name = (xminIds = layers[i].split("="))[0];
              a = xminIds[1];
              t21[name] = a;
            }
          }
        } catch (s) {
          t21 = {};
        }
        return t21;
      },
      getFetchSnapshot : function(data, value, cc) {
        var message;
        var a;
        try {
          var values = (data && "string" != typeof data[0] ? data[0].url : data[0]) || "";
          var opts = (data && "string" != typeof data[0] ? data[0] : data[1]) || {};
          var nominatimQuery = "POST" === opts.method.toUpperCase() ? opts.body : this.getQuerys(values);
          message = {
            originApi : values,
            method : opts.method || "unknown",
            params : nominatimQuery,
            response : value || "",
            reqHeaders : this.parseFetchHeaders(opts.headers || null),
            resHeaders : this.parseFetchHeaders(cc)
          };
          /** @type {string} */
          a = "function" == typeof encodeURIComponent && JSON && encodeURIComponent(JSON.stringify(message)) || "{}";
        } catch (c) {
          /** @type {string} */
          a = "{}";
        }
        return a;
      },
      getXhrSnapshot : function(url, method, response) {
        if (!url || !method || !response) {
          return {};
        }
        var data;
        var a;
        try {
          /** @type {string} */
          var result = "";
          if ("" === response.responseType || "text" === response.responseType) {
            result = response.responseText;
          } else {
            if ("document" === response.responseType) {
              result = response.responseXML;
            }
          }
          data = {
            originApi : url,
            method : method,
            params : this.getQuerys(url),
            response : result,
            reqHeaders : {},
            resHeaders : this.parseXhrHeaders("function" == typeof response.getAllResponseHeaders && response.getAllResponseHeaders() || "")
          };
          /** @type {string} */
          a = "function" == typeof encodeURIComponent && JSON && encodeURIComponent(JSON.stringify(data)) || "{}";
        } catch (o) {
          /** @type {string} */
          a = "{}";
        }
        return a;
      },
      isRobot : function() {
        /** @type {!Array} */
        var bots = ["nuhk", "googlebot/", "googlebot-image", "yammybot", "openbot", "slurp", "msnbot", "ask jeeves/teoma", "ia_archiver", "baiduspider", "bingbot/", "adsbot"];
        if (!navigator || "string" != typeof navigator.userAgent) {
          return false;
        }
        try {
          /** @type {string} */
          var t = navigator.userAgent.toLowerCase();
          /** @type {number} */
          var i = 0;
          for (; i < bots.length; i++) {
            var port = bots[i];
            if (t.lastIndexOf(port) >= 0) {
              return true;
            }
          }
        } catch (a) {
          this.warn("[arms] useragent parse error");
        }
        return false;
      },
      isFunction : function(value) {
        return "function" == typeof value;
      },
      isPlainObject : function(obj) {
        return "[object Object]" === Object.prototype.toString.call(obj);
      },
      isString : function(obj) {
        return "[object String]" === Object.prototype.toString.call(obj);
      },
      isArray : function(obj) {
        return "[object Array]" === Object.prototype.toString.call(obj);
      },
      joinRegExp : function(array) {
        var value;
        /** @type {!Array} */
        var defaultParts = [];
        /** @type {number} */
        var l = 0;
        var i = array.length;
        for (; l < i; l++) {
          value = array[l];
          if (this.isString(value)) {
            defaultParts.push(value.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1"));
          } else {
            if (value && value.source) {
              defaultParts.push(value.source);
            }
          }
        }
        return new RegExp(defaultParts.join("|"), "i");
      },
      reWriteMethod : function(data, key, reducer) {
        if (null !== data) {
          var values = data[key];
          data[key] = reducer(values);
        }
      },
      $bl : function(e, yes) {
        if (!e && !yes) {
          return false;
        }
        if ((new RegExp(this.selfErrKey, "i")).test(e)) {
          return true;
        }
        return !!this.$al(yes, [/retcode.alicdn.com\/retcode\/bl.js/, /g.alicdn.com\/retcode\/cloud-sdk\/bl.js/, /laz-g-cdn.alicdn.com\/retcode\/cloud-sdk\/bl.js/, /local.taobao.com:8880\/build\/bl/]);
      },
      $bq : function(all) {
        return {
          msg : all,
          message : this.selfErrKey
        };
      },
      $bk : function(key, instance, err) {
        var n = {};
        try {
          n = this.isPlainObject(key) ? this.ext({
            key : key.key || "default",
            val : key.val || key.value || err
          }, key, {
            begin : Date.now()
          }) : {
            key : key || "default",
            val : instance || err,
            begin : Date.now()
          };
        } catch (value) {
          this.warn("[retcode] baseLog error: " + value);
        }
        return n;
      }
    };
    module.exports = _;
  }, {}]
}, {}, [14]);
