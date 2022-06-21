'use strict';
/** @type {!Array} */
var a0_0x3397 = ["object", "res", "forEach", "Converting circular structure to JSON", "request", "isFiltered", "monitorMethodCall", "stack", "releaseStage", "@babel/helpers - typeof", "function", "dataType", "number", "prototype", "notifierUrl", "belong", "sendToFundebug", "defineProperty", "setUserInfo", "silentBehavior", "userInfo", "errMsg", "getTime", "copyWithoutCircle", "breadcrumbs", "silentHttp", "indexOf", "silent", "isSampled", "\u8930\u64b2\u5a07\u9422\u3125\u76ac\u7ecb\u5b2a\u7c2d\u93bb\u638d\u6b22\u93c3\u8bb9\u7d1d\u5bf0\ue1bb\u4fca\u7ec2\u4f79\ue11bFundebug\u95b2\u5d85\u5553App/Page/wx\u7edb\u590a\u53cf\u705e\u20ac\u9359\u6a40\u567a\u951b\u5c83\ue1ec\u6d63\u8de8\u6564fundebug.init\u704f\u5516ilentInject(https://docs.fundebug.com/notifier/wxjs/customize/silentinject.html)\u7481\u53e5\u8d1ftrue\u951b\u5c7d\u82df\u6d63\u8de8\u6564fundebug.notifyError(https://docs.fundebug.com/notifier/wxjs/api/notifyerror.html)\u6d93\u5a43\u59e4onError\u93b9\u66e1\u5e4f\u9428\u52ef\u654a\u7487\ue218\u20ac\u509d\ue1db\u93af\u5470\ue1ec\u93cc\u30e7\u6e45Fundebug\u93c2\u56e8\u3002(https://docs.fundebug.com/notifier/wxjs/other/non_writable.html)",
"message", "url", "fundebug.notifyHttpError()\u8e47\u5474\u300f\u93b8\u56e7\u757ereq\u9359\u509b\u669f!", "type", "httpError", "call", "name", "\u7487\u8702\u5a07\u9422\u2562undebug.init(https://docs.fundebug.com/notifier/wxjs/api/init.html)\u95b0\u5d87\u7586apikey!", "query", "constructor", "error", "test", "bind", "exports", "metaData", "statusCode"];
(function(data, i) {
  /**
   * @param {number} isLE
   * @return {undefined}
   */
  var write = function(isLE) {
    for (; --isLE;) {
      data["push"](data["shift"]());
    }
  };
  write(++i);
})(a0_0x3397, 400);
/**
 * @param {string} e
 * @param {?} islongclick
 * @return {?}
 */
var a0_0x38b2 = function(e, islongclick) {
  /** @type {number} */
  e = e - 0;
  var canvas = a0_0x3397[e];
  return canvas;
};
module["exports"] = function(l) {
  /**
   * @param {string} r
   * @return {?}
   */
  function a(r) {
    if (n[r]) {
      return n[r]["exports"];
    }
    var m = n[r] = {
      i : r,
      l : false,
      exports : {}
    };
    return l[r][a0_0x38b2("0x3")](m[a0_0x38b2("0xb")], m, m["exports"], a), m["l"] = true, m["exports"];
  }
  var n = {};
  return a["m"] = l, a["c"] = n, a["d"] = function(b, xhr, value) {
    var desc = {};
    /** @type {boolean} */
    desc["enumerable"] = true;
    desc["get"] = value;
    if (!a["o"](b, xhr)) {
      Object[a0_0x38b2("0x1f")](b, xhr, desc);
    }
  }, a["r"] = function(obj) {
    var desc = {};
    /** @type {string} */
    desc["value"] = "Module";
    var valuesHash = {};
    /** @type {boolean} */
    valuesHash["value"] = true;
    if ("undefined" != typeof Symbol && Symbol["toStringTag"]) {
      Object["defineProperty"](obj, Symbol["toStringTag"], desc);
    }
    Object["defineProperty"](obj, "__esModule", valuesHash);
  }, a["t"] = function(value, canCreateDiscussions) {
    if (1 & canCreateDiscussions && (value = a(value)), 8 & canCreateDiscussions) {
      return value;
    }
    if (4 & canCreateDiscussions && "object" == typeof value && value && value["__esModule"]) {
      return value;
    }
    var e = Object["create"](null);
    var desc = {};
    /** @type {boolean} */
    desc["enumerable"] = true;
    /** @type {string} */
    desc["value"] = value;
    if (a["r"](e), Object[a0_0x38b2("0x1f")](e, "default", desc), 2 & canCreateDiscussions && "string" != typeof value) {
      var xhr;
      for (xhr in value) {
        a["d"](e, xhr, function(subel) {
          return value[subel];
        }[a0_0x38b2("0xa")](null, xhr));
      }
    }
    return e;
  }, a["n"] = function(exports) {
    /** @type {function(): ?} */
    var e = exports && exports["__esModule"] ? function() {
      return exports["default"];
    } : function() {
      return exports;
    };
    return a["d"](e, "a", e), e;
  }, a["o"] = function(PL$16, PL$3) {
    return Object["prototype"]["hasOwnProperty"]["call"](PL$16, PL$3);
  }, a["p"] = "", a(a["s"] = 0);
}([function(gridSettings, canCreateDiscussions, $) {
  var trigger = $(1);
  var factory = $(11);
  var callback = $(12);
  var normalizeOption = $(13);
  var getValue = $(14);
  var val = $(15);
  var settings = {};
  /** @type {!Array} */
  var value = [];
  var i = {};
  settings["init"] = trigger(i, value, settings);
  settings["test"] = factory(i, value, settings);
  settings["notify"] = callback(i, value, settings);
  settings["notifyError"] = normalizeOption(i, value, settings);
  settings["notifyHttpError"] = getValue(i, value, settings);
  settings["set"] = val(i, value, settings);
  gridSettings["exports"] = settings;
}, function(module, canCreateDiscussions, _$$mdAnimate_) {
  /**
   * @param {!Object} args
   * @return {?}
   */
  function stringify(args) {
    "@babel/helpers - typeof";
    return (stringify = "function" == typeof Symbol && "symbol" == typeof Symbol["iterator"] ? function(jumpToNext) {
      return typeof jumpToNext;
    } : function(obj) {
      return obj && "function" == typeof Symbol && obj["constructor"] === Symbol && obj !== Symbol["prototype"] ? "symbol" : typeof obj;
    })(args);
  }
  var coveredByRange = _$$mdAnimate_(2);
  var ensureStartEnd = _$$mdAnimate_(8);
  var wrapAsync3 = _$$mdAnimate_(9);
  var wrapAsync2 = _$$mdAnimate_(10);
  /**
   * @param {!Object} action
   * @param {?} end
   * @param {!Object} someData
   * @return {?}
   */
  module["exports"] = function(action, end, someData) {
    return function(args) {
      if (args && a0_0x38b2("0xe") === stringify(args)) {
        ["apikey", "appVersion", a0_0x38b2("0x16"), "metaData", "filters", "silent", "silentHttpHeader", "monitorHttpData", "httpTimeout", "monitorMethodCall", "monitorMethodArguments", "methodWhitelist", "setUserInfo", "sampleRate", "silentBehavior", "silentApp", "silentPage", "callback", a0_0x38b2("0x1c"), "silentInject", "silentConsole", "monitorConsoleError", "monitorResponse"]["forEach"](function(index) {
          action[index] = args[index];
        });
        if (!args["notifierUrl"]) {
          /** @type {string} */
          action["notifierUrl"] = "https://fundebug.com/wxjs/";
        }
        if (!(args["silentConsole"] || args["silentBehavior"])) {
          wrapAsync3(action, end, someData);
        }
        var product = wx["getLaunchOptionsSync"]()["scene"];
        if (!(args["silentInject"] || args["silent"])) {
          coveredByRange(action, end, someData);
          ensureStartEnd(action, end);
          if (!(1154 == product || args[a0_0x38b2("0x27")])) {
            wrapAsync2(action, end, someData);
          }
        }
        if (args["setSystemInfo"]) {
          wx["getSystemInfo"]({
            success : function(opts) {
              action["systemInfo"] = opts;
            },
            fail : function(errtype) {
            }
          });
        }
        if (someData["userInfo"]) {
          action["userInfo"] = someData["userInfo"];
        } else {
          if (action[a0_0x38b2("0x20")]) {
            wx["getUserInfo"]({
              success : function(o) {
                action["userInfo"] = o["userInfo"];
              },
              fail : function(errtype) {
              }
            });
          }
        }
      }
    };
  };
}, function(module, canCreateDiscussions, __webpack_require__) {
  var a = __webpack_require__(3);
  var filters = __webpack_require__(4);
  var component = __webpack_require__(7);
  /**
   * @param {!Object} name
   * @param {?} event
   * @param {?} oCsv
   * @return {undefined}
   */
  module["exports"] = function(name, event, oCsv) {
    var args = {};
    /**
     * @param {!Object} cache
     * @return {undefined}
     */
    args["onLaunch"] = function(cache) {
      name["scene"] = cache && cache["scene"];
      var result = {};
      /** @type {string} */
      result["type"] = "function";
      result["time"] = (new Date)["getTime"]();
      /** @type {string} */
      result["belong"] = "App";
      /** @type {string} */
      result["method"] = "onLaunch";
      result["path"] = cache && cache["path"];
      result["query"] = cache && cache[a0_0x38b2("0x6")];
      result["scene"] = cache && cache["scene"];
      var t = result;
      a["captureBreadcrumb"](event, t, name["silentBehavior"]);
    };
    /**
     * @param {!Object} cache
     * @return {undefined}
     */
    args["onShow"] = function(cache) {
      name["scene"] = cache && cache["scene"];
      var result = {};
      /** @type {string} */
      result["type"] = "function";
      result["time"] = (new Date)["getTime"]();
      /** @type {string} */
      result[a0_0x38b2("0x1d")] = "App";
      /** @type {string} */
      result["method"] = "onShow";
      result["path"] = cache && cache["path"];
      result["query"] = cache && cache["query"];
      result["scene"] = cache && cache["scene"];
      var t = result;
      a["captureBreadcrumb"](event, t, name["silentBehavior"]);
    };
    /**
     * @return {undefined}
     */
    args["onHide"] = function() {
      var result = {};
      /** @type {string} */
      result["type"] = "function";
      result["time"] = (new Date)["getTime"]();
      /** @type {string} */
      result["belong"] = "App";
      /** @type {string} */
      result["method"] = "onHide";
      result["route"] = name["currentPage"] && name["currentPage"]["route"];
      result["options"] = name["currentPage"] && name["currentPage"]["options"];
      var t = result;
      a["captureBreadcrumb"](event, t, name["silentBehavior"]);
    };
    /**
     * @param {?} error
     * @return {undefined}
     */
    args["onError"] = function(error) {
      if (error) {
        var data = component["getEvent"](name, event, oCsv);
        data["error"] = error;
        /** @type {string} */
        data["type"] = "uncaught";
        filters["sendToFundebug"](data, name);
      }
    };
    var PL$15 = args;
    var shaForPacked = App;
    /**
     * @param {number} folder
     * @return {undefined}
     */
    App = function(folder) {
      Object["keys"](PL$15)["forEach"](function(maxAtomIndex) {
        var _base;
        var i;
        var PL$11;
        var f;
        PL$11 = PL$15[i = maxAtomIndex];
        f = (_base = folder)[i];
        /**
         * @return {?}
         */
        _base[i] = function() {
          try {
            PL$11["apply"](this, arguments);
          } catch (record) {
            console["error"](record);
          }
          return f && f["apply"](this, arguments);
        };
      });
      shaForPacked(folder);
    };
  };
}, function(isSlidingUp, canCreateDiscussions) {
  /**
   * @param {!Object} data
   * @param {?} value
   * @param {?} canCreateDiscussions
   * @return {undefined}
   */
  canCreateDiscussions["captureBreadcrumb"] = function(data, value, canCreateDiscussions) {
    if (!canCreateDiscussions) {
      data["push"](value);
      if (20 < data["length"]) {
        data["shift"]();
      }
    }
  };
  /**
   * @return {?}
   */
  canCreateDiscussions["getCurrentPage"] = function() {
    var pages = getCurrentPages();
    if (pages["length"]) {
      return pages[pages["length"] - 1];
    }
  };
  /**
   * @param {number} e
   * @return {?}
   */
  canCreateDiscussions[a0_0x38b2("0x2a")] = function(e) {
    return !e && 0 !== e || (e = parseFloat(e), !!isNaN(e) || Math["random"]() <= e);
  };
}, function(isSlidingUp, canCreateDiscussions, $) {
  var obj = $(5);
  var find = $(3);
  var node = $(6);
  /** @type {number} */
  var from = 50;
  /** @type {number} */
  var to = 5;
  /**
   * @param {!Object} prop
   * @param {!Object} options
   * @return {undefined}
   */
  canCreateDiscussions["sendToFundebug"] = function(prop, options) {
    if (!options["silent"]) {
      prop["metaData"] = node["copyWithoutCircle"](prop["metaData"]);
      if (function(args) {
        if (!args["apikey"]) {
          return void console["error"](a0_0x38b2("0x5"));
        }
        return !(!from || !to || (from--, to--, 0));
      }(prop)) {
        setTimeout(function() {
          if (options["callback"] && "function" == typeof options["callback"]) {
            var item = Object["assign"]({}, prop);
            delete item[a0_0x38b2("0x26")];
            options["callback"](item);
          }
          if (!obj["isFiltered"](prop, options["filters"])) {
            if (find["isSampled"](options["sampleRate"])) {
              wx[a0_0x38b2("0x12")]({
                url : options["notifierUrl"],
                method : "POST",
                data : prop,
                complete : function() {
                  to++;
                }
              });
            }
          }
        }, 3E3);
      }
    }
  };
}, function(isSlidingUp, canCreateDiscussions) {
  /**
   * @param {!Object} obj
   * @param {!Object} target
   * @return {?}
   */
  function test(obj, target) {
    if (!obj) {
      return false;
    }
    if (!target) {
      return false;
    }
    if (Object["keys"] && !Object["keys"](target)["length"]) {
      return false;
    }
    var key;
    for (key in target) {
      if (target["hasOwnProperty"](key)) {
        if (target[key]["constructor"] === RegExp) {
          if (!target[key][a0_0x38b2("0x9")](obj[key])) {
            return false;
          }
        } else {
          if (target[key]["constructor"] === Object) {
            if (!test(obj[key], target[key])) {
              return false;
            }
          } else {
            if (target[key][a0_0x38b2("0x7")] !== String || "inexistence" !== target[key]) {
              return false;
            }
            if (obj["hasOwnProperty"](key)) {
              return false;
            }
          }
        }
      }
    }
    return true;
  }
  /**
   * @param {!Object} t
   * @param {!Object} values
   * @return {?}
   */
  canCreateDiscussions[a0_0x38b2("0x13")] = function(t, values) {
    if (!values || !values["length"]) {
      return false;
    }
    /** @type {number} */
    var i = 0;
    for (; i < values["length"]; i++) {
      if (test(t, values[i])) {
        return true;
      }
    }
    return false;
  };
}, function(isSlidingUp, canCreateDiscussions) {
  /**
   * @param {!Object} str
   * @param {number} _
   * @return {?}
   */
  function init(str, _) {
    return function(data) {
      if (Array["isArray"](data)) {
        return data;
      }
    }(str) || function(data, method) {
      var options = null == data ? null : "undefined" != typeof Symbol && data[Symbol["iterator"]] || data["@@iterator"];
      if (null == options) {
        return;
      }
      var PL$18;
      var o;
      /** @type {!Array} */
      var PL$21 = [];
      /** @type {boolean} */
      var match = true;
      /** @type {boolean} */
      var u = false;
      try {
        options = options["call"](data);
        for (; !(match = (PL$18 = options["next"]())["done"]) && (PL$21["push"](PL$18["value"]), !method || PL$21["length"] !== method); match = true) {
        }
      } catch (tObj) {
        /** @type {boolean} */
        u = true;
        o = tObj;
      } finally {
        try {
          if (!(match || null == options["return"])) {
            options["return"]();
          }
        } finally {
          if (u) {
            throw o;
          }
        }
      }
      return PL$21;
    }(str, _) || function(data, method) {
      if (!data) {
        return;
      }
      if ("string" == typeof data) {
        return wrap(data, method);
      }
      var value = Object["prototype"]["toString"]["call"](data)["slice"](8, -1);
      if ("Object" === value && data["constructor"]) {
        value = data["constructor"]["name"];
      }
      if ("Map" === value || "Set" === value) {
        return Array["from"](data);
      }
      if ("Arguments" === value || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/["test"](value)) {
        return wrap(data, method);
      }
    }(str, _) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  /**
   * @param {!Object} o
   * @param {number} t
   * @return {?}
   */
  function wrap(o, t) {
    if (null == t || t > o["length"]) {
      t = o["length"];
    }
    /** @type {number} */
    var k = 0;
    /** @type {!Array} */
    var r = new Array(t);
    for (; k < t; k++) {
      r[k] = o[k];
    }
    return r;
  }
  /**
   * @param {!Object} cb
   * @return {?}
   */
  function next(cb) {
    "@babel/helpers - typeof";
    return (next = "function" == typeof Symbol && "symbol" == typeof Symbol["iterator"] ? function(values) {
      return typeof values;
    } : function(obj) {
      return obj && a0_0x38b2("0x18") == typeof Symbol && obj["constructor"] === Symbol && obj !== Symbol["prototype"] ? "symbol" : typeof obj;
    })(cb);
  }
  /** @type {boolean} */
  var accessor = false;
  try {
    var data = wx["getSystemInfoSync"]();
    if ("ios" === data["platform"]) {
      if (parseInt(data["system"]["match"](/iOS (\d+)\./)[1]) < 11) {
        /** @type {boolean} */
        accessor = true;
      }
    }
  } catch (record) {
    console["error"](record);
  }
  /**
   * @param {!Object} value
   * @return {?}
   */
  canCreateDiscussions["copyWithoutCircle"] = function(value) {
    return value && "object" === next(value) && function(message) {
      try {
        JSON["stringify"](message);
      } catch (anAsyncResult) {
        return -1 !== anAsyncResult[a0_0x38b2("0x2c")][a0_0x38b2("0x28")](a0_0x38b2("0x11")) || -1 !== anAsyncResult["message"]["indexOf"]("JSON.stringify cannot serialize cyclic structures");
      }
      return false;
    }(value) ? accessor ? {} : function build(obj, options) {
      try {
        var object = {};
        return Object["entries"](obj)["forEach"](function(url) {
          var parameters = init(url, 2);
          var name = parameters[0];
          var value = parameters[1];
          if ("object" === next(value) && null !== value) {
            if (options["has"](value)) {
              /** @type {string} */
              object[name] = "property removed because of circular structure";
            } else {
              if (10 < options["size"]) {
                /** @type {string} */
                object[name] = "property removed to avoid deep recursion";
              } else {
                options["add"](value);
                object[name] = build(value, options);
              }
            }
          } else {
            object[name] = value;
          }
        }), object;
      } catch (e) {
        return obj;
      }
    }(value, new Set([value])) : value;
  };
}, function(canCreateDiscussions, component, unescape) {
  var tileY1 = {};
  /** @type {string} */
  tileY1["notifierVersion"] = "1.7.2";
  var s_utf8 = unescape(3);
  var path = unescape(6);
  var row = tileY1;
  /**
   * @param {!Object} params
   * @param {?} rowHead
   * @param {!Object} comparisons
   * @return {?}
   */
  component["getEvent"] = function(params, rowHead, comparisons) {
    return row["scene"] = params["scene"], row["apikey"] = params["apikey"], row["appVersion"] = params["appVersion"], row["releaseStage"] = params["releaseStage"], row[a0_0x38b2("0xc")] = comparisons["metaData"] || params["metaData"], row["breadcrumbs"] = rowHead, row["time"] = (new Date)["getTime"](), params["silentApp"] || (row["App"] = path["copyWithoutCircle"](getApp())), params["silentPage"] || (row["Page"] = path["copyWithoutCircle"](s_utf8["getCurrentPage"]())), row["systemInfo"] = params["systemInfo"],
    row[a0_0x38b2("0x22")] = params["userInfo"], commandOverall(), params["setLocation"] && deviceOnePost(), row;
  };
  /**
   * @return {?}
   */
  var commandOverall = function() {
    var expectedStats = {};
    /**
     * @param {!Object} match
     * @return {undefined}
     */
    expectedStats["success"] = function(match) {
      row["networkType"] = match["networkType"];
    };
    /**
     * @param {?} canCreateDiscussions
     * @return {undefined}
     */
    expectedStats["fail"] = function(canCreateDiscussions) {
    };
    return wx["getNetworkType"](expectedStats);
  };
  /**
   * @return {?}
   */
  var deviceOnePost = function() {
    var result = {};
    /** @type {string} */
    result["type"] = "wgs84";
    /**
     * @param {?} rowHead
     * @return {undefined}
     */
    result["success"] = function(rowHead) {
      row["locationInfo"] = rowHead;
    };
    /**
     * @param {?} canCreateDiscussions
     * @return {undefined}
     */
    result["fail"] = function(canCreateDiscussions) {
    };
    return wx["getLocation"](result);
  };
}, function(module, canCreateDiscussions, unitToColor) {
  var c = unitToColor(3);
  /**
   * @param {!Object} sections
   * @param {?} aBody
   * @return {undefined}
   */
  module["exports"] = function(sections, aBody) {
    /**
     * @param {!Object} d
     * @param {string} value
     * @return {undefined}
     */
    function show(d, value) {
      var f = d[value];
      /**
       * @return {?}
       */
      d[value] = function() {
        try {
          if (!("onLoad" !== value && "onShow" !== value)) {
            sections["currentPage"] = c["getCurrentPage"]();
          }
          var data = {};
          /** @type {string} */
          data["type"] = "function";
          data["time"] = (new Date)["getTime"]();
          /** @type {string} */
          data["belong"] = "Page";
          /** @type {string} */
          data["method"] = value;
          data["route"] = sections["currentPage"] && sections["currentPage"]["route"];
          data["options"] = sections["currentPage"] && sections["currentPage"]["options"];
          var val = data;
          if ("onLoad" === value) {
            /** @type {!Arguments} */
            val["args"] = arguments;
          }
          if (sections["monitorMethodArguments"] && !get(opDef, value)) {
            /** @type {!Arguments} */
            val["args"] = arguments;
          }
          if (function(value) {
            var a = sections["methodWhitelist"];
            var b = sections["methodBlacklist"];
            if ("onPageScroll" === value) {
              return false;
            }
            return a && a["length"] ? Boolean(get(a, value)) : !b || !b["length"] || Boolean(!get(b, value));
          }(value)) {
            c["captureBreadcrumb"](aBody, val, sections[a0_0x38b2("0x21")]);
          }
        } catch (record) {
          console["error"](record);
        }
        return f && f["apply"](this, arguments);
      };
    }
    /**
     * @param {!Object} obj
     * @param {string} data
     * @return {?}
     */
    function get(obj, data) {
      /** @type {number} */
      var i = 0;
      for (; i < obj["length"]; i++) {
        if (obj[i] === data) {
          return true;
        }
      }
      return false;
    }
    /** @type {!Array} */
    var opDef = ["onLoad", "onShow", "onReady", "onHide", "onUnload", "onPullDownRefresh", "onReachBottom", "onShareAppMessage"];
    var add = Page;
    /**
     * @param {!Object} json
     * @return {undefined}
     */
    Page = function(json) {
      opDef[a0_0x38b2("0x10")](function(name) {
        if (json[name]) {
          show(json, name);
        }
      });
      if (sections[a0_0x38b2("0x14")]) {
        Object["keys"](json)["forEach"](function(type) {
          if (!("function" != typeof json[type] || get(opDef, type))) {
            show(json, type);
          }
        });
      }
      add(json);
    };
  };
}, function(module, canCreateDiscussions, require) {
  var parsers = require(3);
  var search = require(6);
  var window = require(4);
  var component = require(7);
  /**
   * @param {!Object} name
   * @param {?} data
   * @param {?} callback
   * @return {undefined}
   */
  module["exports"] = function(name, data, callback) {
    ["log", "error", "info", "warn"]["forEach"](function(delegate2) {
      var method;
      var f;
      /** @type {string} */
      method = delegate2;
      f = console[method];
      /**
       * @return {undefined}
       */
      console[method] = function() {
        try {
          var info = {};
          /** @type {string} */
          info["type"] = "console";
          info["time"] = (new Date)["getTime"]();
          info["method"] = method;
          info["args"] = search[a0_0x38b2("0x25")](arguments);
          var type = info;
          parsers["captureBreadcrumb"](data, type);
        } catch (record) {
          console["error"](record);
        }
        if ("error" === method && arguments[0] && /^\[non-writable\] modification of global variable ".+" is not allowed when using plugins at app\.json\.$/["test"](arguments[0])) {
          if (f) {
            f["apply"](this, arguments);
          }
          console["error"](a0_0x38b2("0x2b"));
        } else {
          if (name["monitorConsoleError"] && arguments[0]) {
            var result = component["getEvent"](name, data, callback);
            var time = arguments[0]["stack"];
            if ("{}" != time && "" != time && null != time) {
              result["error"] = time;
              /** @type {string} */
              result[a0_0x38b2("0x1")] = "consoleError";
              window["sendToFundebug"](result, name);
            }
          }
          if (f) {
            f["apply"](this, arguments);
          }
        }
      };
    });
  };
}, function(module, canCreateDiscussions, __webpack_require__) {
  var events = __webpack_require__(3);
  var filters = __webpack_require__(4);
  var component = __webpack_require__(7);
  __webpack_require__(6);
  /**
   * @param {!Object} name
   * @param {?} data
   * @param {?} aIsRemote
   * @return {undefined}
   */
  module["exports"] = function(name, data, aIsRemote) {
    /**
     * @param {!Object} value
     * @param {string} action
     * @param {?} start
     * @return {undefined}
     */
    function cb(value, action, start) {
      var f = value[action];
      /**
       * @return {?}
       */
      value[action] = function() {
        try {
          var e = arguments[0];
          var stream = function(data) {
            var options = {};
            options["url"] = data[a0_0x38b2("0x2d")];
            options["data"] = data["data"];
            options["header"] = data["header"];
            options["method"] = data["method"];
            options["dataType"] = data[a0_0x38b2("0x19")];
            options["responseType"] = data["responseType"];
            var result = options;
            if (name["silentHttpHeader"]) {
              delete result["header"];
            }
            if (!name["monitorHttpData"]) {
              delete result["data"];
            }
            return result;
          }(value);
          /** @type {number} */
          var end = (new Date)[a0_0x38b2("0x24")]() - start;
          !function(version, res, date) {
            if (function(match, a) {
              if (!/^2\d\d$/["test"](match)) {
                return true;
              }
              var c = name["httpTimeout"];
              if (a0_0x38b2("0x1a") == typeof c && c < a) {
                return true;
              }
              return false;
            }(res[a0_0x38b2("0xd")], date)) {
              var item = component["getEvent"](name, data, aIsRemote);
              /** @type {string} */
              item["type"] = "httpError";
              item["req"] = version;
              if (name["monitorResponse"]) {
                /** @type {!Object} */
                item["res"] = res;
              } else {
                item["res"] = {
                  statusCode : res["statusCode"],
                  errMsg : res["errMsg"]
                };
              }
              /** @type {number} */
              item["elapsedTime"] = date;
              filters["sendToFundebug"](item, name);
            }
          }(stream, e, end);
          (function(req, response, v, cur) {
            var res = {};
            /** @type {string} */
            res["type"] = "http";
            res["time"] = v;
            res["req"] = req;
            /** @type {number} */
            res["elapsedTime"] = cur;
            var args = res;
            if (name["monitorResponse"]) {
              /** @type {!Object} */
              args["res"] = response;
            } else {
              args[a0_0x38b2("0xf")] = {
                statusCode : response["statusCode"],
                errMsg : response[a0_0x38b2("0x23")]
              };
            }
            events["captureBreadcrumb"](data, args, name[a0_0x38b2("0x21")]);
          })(stream, e, start, end);
        } catch (record) {
          console["error"](record);
        }
        return f && f["apply"](this, arguments);
      };
    }
    var obj = Object["assign"]({}, wx);
    var m = obj["request"];
    Object["defineProperty"](obj, "request", {
      writable : true,
      enumerable : true,
      configurable : true,
      value : function(e) {
        try {
          if (e && !/fundebug\.com\/wxjs/["test"](e["url"])) {
            var args = (new Date)["getTime"]();
            cb(e, "success", args);
            cb(e, "fail", args);
          }
        } catch (record) {
          console["error"](record);
        }
        return m(e);
      }
    });
    wx = obj;
  };
}, function(module, canCreateDiscussions, require) {
  var transforms = require(4);
  var component = require(7);
  /**
   * @param {?} name
   * @param {?} data
   * @param {?} callback
   * @return {?}
   */
  module["exports"] = function(name, data, callback) {
    return function(val, schema) {
      try {
        if (name[a0_0x38b2("0x29")]) {
          return;
        }
        if (val && "string" != typeof val) {
          return void console["error"]("fundebug.test()\u9428\u5235ame\u9359\u509b\u669f\u7eeb\u8bf2\u7037\u8e47\u5474\u300f\u6d93\u7c0atring!");
        }
        if (schema && "string" != typeof schema) {
          return void console["error"]("fundebug.test()\u9428\u5234essage\u9359\u509b\u669f\u7eeb\u8bf2\u7037\u8e47\u5474\u300f\u6d93\u7c0atring!");
        }
        var entry = component["getEvent"](name, data, callback);
        /** @type {string} */
        entry["type"] = "test";
        entry["name"] = val || "Test";
        entry["message"] = schema || "Hello, Fundebug!";
        transforms["sendToFundebug"](entry, name);
      } catch (previousState) {
        console[a0_0x38b2("0x8")](previousState);
      }
    };
  };
}, function(module, canCreateDiscussions, __webpack_require__) {
  /**
   * @param {!Object} header
   * @return {?}
   */
  function stringify(header) {
    "@babel/helpers - typeof";
    return (stringify = "function" == typeof Symbol && "symbol" == typeof Symbol["iterator"] ? function(header) {
      return typeof header;
    } : function(obj) {
      return obj && "function" == typeof Symbol && obj["constructor"] === Symbol && obj !== Symbol["prototype"] ? "symbol" : typeof obj;
    })(header);
  }
  var events = __webpack_require__(4);
  var component = __webpack_require__(7);
  /**
   * @param {!Object} args
   * @param {?} ecModel
   * @param {?} oCsv
   * @return {?}
   */
  module["exports"] = function(args, ecModel, oCsv) {
    return function(url, v, date) {
      try {
        if (args["silent"]) {
          return;
        }
        if (!url) {
          return void console["error"]("fundebug.notify()\u8e47\u5474\u300f\u93b8\u56e7\u757ename\u9359\u509b\u669f!");
        }
        if ("string" != typeof url) {
          return void console["error"]("fundebug.notify()\u9428\u5235ame\u9359\u509b\u669f\u7eeb\u8bf2\u7037\u8e47\u5474\u300f\u6d93\u7c0atring!");
        }
        if (v && "string" != typeof v) {
          return void console["error"]("fundebug.notify()\u9428\u5234essage\u9359\u509b\u669f\u7eeb\u8bf2\u7037\u8e47\u5474\u300f\u6d93\u7c0atring!");
        }
        if (date && a0_0x38b2("0xe") !== stringify(date)) {
          return void console["error"]("fundebug.notify()\u9428\u523cption\u9359\u509b\u669f\u7eeb\u8bf2\u7037\u8e47\u5474\u300f\u6d93\u7c05bject!");
        }
        var data = component["getEvent"](args, ecModel, oCsv);
        /** @type {string} */
        data["type"] = "notification";
        /** @type {string} */
        data["name"] = url;
        /** @type {boolean} */
        data["message"] = v;
        if (date && date["metaData"]) {
          data[a0_0x38b2("0xc")] = date["metaData"];
        }
        events["sendToFundebug"](data, args);
      } catch (record) {
        console["error"](record);
      }
    };
  };
}, function(module, canCreateDiscussions, require) {
  /**
   * @param {!Object} subject
   * @return {?}
   */
  function type(subject) {
    "@babel/helpers - typeof";
    return (type = a0_0x38b2("0x18") == typeof Symbol && "symbol" == typeof Symbol["iterator"] ? function(name0) {
      return typeof name0;
    } : function(obj) {
      return obj && "function" == typeof Symbol && obj[a0_0x38b2("0x7")] === Symbol && obj !== Symbol["prototype"] ? "symbol" : typeof obj;
    })(subject);
  }
  var $ = require(4);
  var component = require(7);
  /**
   * @param {!Object} name
   * @param {?} args
   * @param {?} callback
   * @return {?}
   */
  module["exports"] = function(name, args, callback) {
    return function(e, object) {
      try {
        if (name["silent"]) {
          return;
        }
        if (!e) {
          return void console[a0_0x38b2("0x8")]("fundebug.notifyError()\u8e47\u5474\u300f\u93b8\u56e7\u757eerror\u9359\u509b\u669f!");
        }
        if (object && "object" !== type(object)) {
          return void console["error"]("fundebug.notifyError()\u9428\u523cption\u9359\u509b\u669f\u7eeb\u8bf2\u7037\u8e47\u5474\u300f\u6d93\u7c05bject!");
        }
        var ret = component["getEvent"](name, args, callback);
        if (e instanceof Error) {
          ret["error"] = {
            name : e[a0_0x38b2("0x4")],
            message : e["message"],
            stack : e[a0_0x38b2("0x15")]
          };
        } else {
          /** @type {!Object} */
          ret["error"] = e;
        }
        /** @type {string} */
        ret["type"] = "caught";
        if (object) {
          if (object["name"]) {
            ret["name"] = object["name"];
          }
          if (object[a0_0x38b2("0xc")]) {
            ret["metaData"] = object["metaData"];
          }
        }
        $[a0_0x38b2("0x1e")](ret, name);
      } catch (record) {
        console["error"](record);
      }
    };
  };
}, function(module, canCreateDiscussions, require) {
  /**
   * @param {!Object} array
   * @return {?}
   */
  function stringify(array) {
    a0_0x38b2("0x17");
    return (stringify = "function" == typeof Symbol && "symbol" == typeof Symbol["iterator"] ? function(type) {
      return typeof type;
    } : function(obj) {
      return obj && "function" == typeof Symbol && obj["constructor"] === Symbol && obj !== Symbol[a0_0x38b2("0x1b")] ? "symbol" : typeof obj;
    })(array);
  }
  var prop = require(4);
  var component = require(7);
  /**
   * @param {!Object} name
   * @param {?} args
   * @param {?} replaceElemIdStr
   * @return {?}
   */
  module["exports"] = function(name, args, replaceElemIdStr) {
    return function(array, data, object) {
      try {
        if (name["silent"]) {
          return;
        }
        if (!array) {
          return void console["error"](a0_0x38b2("0x0"));
        }
        if (!data) {
          return void console["error"]("fundebug.notifyHttpError()\u8e47\u5474\u300f\u93b8\u56e7\u757eres\u9359\u509b\u669f!");
        }
        if (array && a0_0x38b2("0xe") !== stringify(array)) {
          return void console["error"]("fundebug.notifyHttpError()\u9428\u5245eq\u9359\u509b\u669f\u7eeb\u8bf2\u7037\u8e47\u5474\u300f\u6d93\u7c05bject!");
        }
        if (data && "object" !== stringify(data)) {
          return void console["error"]("fundebug.notifyHttpError()\u9428\u5245es\u9359\u509b\u669f\u7eeb\u8bf2\u7037\u8e47\u5474\u300f\u6d93\u7c05bject!");
        }
        if (object && "object" !== stringify(object)) {
          return void console["error"]("fundebug.notifyHttpError()\u9428\u523cption\u9359\u509b\u669f\u7eeb\u8bf2\u7037\u8e47\u5474\u300f\u6d93\u7c05bject!");
        }
        var obj = component["getEvent"](name, args, replaceElemIdStr);
        obj["type"] = a0_0x38b2("0x2");
        /** @type {!Object} */
        obj["req"] = array;
        /** @type {!Object} */
        obj["res"] = data;
        if (object && object["metaData"]) {
          obj["metaData"] = object["metaData"];
        }
        prop["sendToFundebug"](obj, name);
      } catch (record) {
        console["error"](record);
      }
    };
  };
}, function(module, canCreateDiscussions) {
  /**
   * @param {!Object} obj
   * @return {?}
   */
  function type(obj) {
    a0_0x38b2("0x17");
    return (type = "function" == typeof Symbol && "symbol" == typeof Symbol["iterator"] ? function(errorText) {
      return typeof errorText;
    } : function(obj) {
      return obj && "function" == typeof Symbol && obj["constructor"] === Symbol && obj !== Symbol["prototype"] ? "symbol" : typeof obj;
    })(obj);
  }
  /**
   * @param {!Object} soFar
   * @param {?} canCreateDiscussions
   * @param {?} isSlidingUp
   * @return {?}
   */
  module["exports"] = function(soFar, canCreateDiscussions, isSlidingUp) {
    return function(obj) {
      if (obj && "object" === type(obj)) {
        ["appVersion", "releaseStage", "metaData", "filters", a0_0x38b2("0x29"), "silentHttpHeader", "monitorHttpData", "httpTimeout", "monitorMethodCall", "monitorMethodArguments", "methodWhitelist", "setUserInfo", "sampleRate", "silentBehavior", "silentApp", "silentPage", "callback", "silentResponse", "monitorConsoleError", "monitorResponse"]["forEach"](function(key) {
          if (null != obj[key]) {
            soFar[key] = obj[key];
          }
        });
      }
    };
  };
}]);
