const __debug = true;
const Name = "baby-sitter";
const LogPrefix = `[${Name}]:`;

 function isNil(value) {
  return value == null;
}

 function isFunction(funktion) {
  return typeof funktion === "function";
}

 function uuid() {
  if (typeof crypto === "object") {
    if (typeof crypto.randomUUID === "function") {
      return crypto.randomUUID();
    }
    if (
      typeof crypto.getRandomValues === "function" &&
      typeof Uint8Array === "function"
    ) {
      const callback = (c) => {
        const num = Number(c);
        return (
          num ^
          (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (num / 4)))
        ).toString(16);
      };
      // ts-ignore
      return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, callback);
    }
  }
  let timestamp = new Date().getTime();
  let perforNow =
    (typeof performance !== "undefined" &&
      performance.now &&
      performance.now() * 1000) ||
    0;
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    let random = Math.random() * 16;
    if (timestamp > 0) {
      random = (timestamp + random) % 16 | 0;
      timestamp = Math.floor(timestamp / 16);
    } else {
      random = (perforNow + random) % 16 | 0;
      perforNow = Math.floor(perforNow / 16);
    }
    return (c === "x" ? random : (random & 0x3) | 0x8).toString(16);
  });
}

 function getDid() {
  let did = "";
  try {
    did = localStorage.getItem("__baby_did");
    if (!did) {
      did = uuid();
      localStorage.setItem("__baby_did", did);
    }
  } catch (error) {}
  return did;
}

 function defineProperty(obj, name, value) {
  Object.defineProperty(obj, name, {
    // 兼容其它框架, 都可以 hook 指定的 api !
    configurable: true,
    enumerable: true,
    writable: true,
    value: value,
  });
}

 function wrap(nodule, name, wrapper) {
  if (!nodule || !nodule[name]) {
    logE(`No Function '${name}' 2  Wrap`);
    return;
  }

  if (!wrapper) {
    logE("No Wrapper function");
    return;
  }

  if (!isFunction(nodule[name]) || !isFunction(wrapper)) {
    logE("Original And Wrapper must be a function");
    return;
  }

  var original = nodule[name];
  var wrapped = wrapper(original, name);

  defineProperty(wrapped, "__original", original);
  defineProperty(wrapped, "__unwrap", function () {
    if (nodule[name] === wrapped) defineProperty(nodule, name, original);
  });
  defineProperty(wrapped, "__wrapped", true);

  defineProperty(nodule, name, wrapped);
  return wrapped;
}

 function record(type, data) {
  // queue
  fetch("http://localhost:2333", {
    method: "POST",
    body: JSON.stringify({ evts: [{ type, data }], did: getDid(), v: "0.0.1" }),
  });
}

 function log(...args) {
  if (!__debug) {
    return;
  }
  console.log.apply(console, [LogPrefix, ...args]);
}

 function logE(...args) {
  console.error.apply(console, [LogPrefix, ...args]);
}
