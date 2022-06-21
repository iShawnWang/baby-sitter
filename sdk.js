// 工具函数

function isNil(value) {
  return value == null
}

const __debug = true

function log(msg){
  if(!__debug){
    return
  }

  console.log(msg)
}

// 实现

window.onload = () => {
    let timing = performance.timing || performance.getEntriesByType('navigation')
    if(Array.isArray(timing) && timing.length > 0){
      timing = timing[0]
    }
    log(timing)
    const calc = (a,b) => {
      if(!isNil(a) && !isNil(b) && a > 0 && b > 0){
        return a-b
      }else {
        return 0
      }
    }
    const Redirect = calc(timing.redirectEnd , timing.redirectStart)
    const DNS =  calc(timing.domainLookupEnd , timing.domainLookupStart)
    const TCP =  calc( timing.connectEnd , timing.connectStart)
    const SSL =  calc(timing.connectEnd , timing.secureConnectionStart)
    const Request =  calc(timing.responseStart , timing.requestStart)
    const Response =  calc(timing.responseEnd , timing.responseStart)
    const Load =  calc(timing.loadEventEnd , timing.navigationStart)
    const DomReady =  calc(timing.domContentLoaded , timing.fetchStart)
    const DomParse =  calc(timing.domInteractive , timing.responseEnd)
    const Processing =  calc(timing.domComplete , timing.domLoading)
    const ResourceLoad =  calc(timing.loadEventStart , timing.domContentLoaded)
    const TTFB =  calc(timing.responseStart , timing.navigationStart)

    log({
      Redirect,
      DNS,
      TCP,
      SSL,
      Request,
      Response,
      Load,
      DomReady,
      DomParse,
      Processing,
      ResourceLoad,
      TTFB
    })
}
const resourceBb = new PerformanceObserver((entries) => {
  log("resource:", entries.getEntries())
})

resourceBb.observe({entryTypes: ['resource']})

const navigationOb = new PerformanceObserver((entries) => {
  log("navigation:", entries.getEntries())
})

navigationOb.observe({entryTypes: ['navigation']})

const measureOb = new PerformanceObserver((entries) => {
  log("measure:", entries.getEntries())
})

measureOb.observe({entryTypes: ['measure']})

const paintOb = new PerformanceObserver((entries) => {
  log("paint:", entries.getEntries())
})

paintOb.observe({entryTypes: ['paint']})

if ("PerformanceLongTaskTiming" in window) {
  /** @type {!PerformanceObserver} */
  const logtaskOb = new PerformanceObserver(function (entries) {
    log("logtask:", entries.getEntries())
  });
  logtaskOb.observe({
    entryTypes: [
      "longtask",
      "largest-contentful-paint",
      "layout-shift",
    ],
  });
}

window.onerror = (event, source, lineno, colno, error)=> {
  log(event, source, lineno, colno, error)
}

window.onunhandledrejection = event => {
  log(`UNHANDLED PROMISE REJECTION: ${event.reason}`);
};