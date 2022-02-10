// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"h2tcR":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "9701b129d3a371e8";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"4ZiKG":[function(require,module,exports) {
var _jsSdk = require("@spotsize/js-sdk");
//Init spotsize with your organizationId
_jsSdk.init('{{YOUR_ORGANIZATION_ID}}');
console.log('Mobile:', _jsSdk.isMobile());
console.log('Android:', _jsSdk.isAndroid());
console.log('iOS:', _jsSdk.isIOS());
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const result = document.getElementById('result');
const qr = document.getElementById('qr');
const qrPreloader = document.getElementById('qrPreloader');
const error = document.getElementById('error');
button1.onclick = async ()=>{
    measure('{{MODEL_ID}}');
};
button2.onclick = async ()=>{
    measure([
        '{{MODEL_ID1}}',
        '{{MODEL_ID2}}'
    ]);
};
_jsSdk.events.onQRShown = ()=>{
    showElement(qrPreloader, false);
};
const measure = async (modelId)=>{
    error.innerText = '';
    result.innerHTML = '';
    showElement(qr, true);
    showElement(qrPreloader, true);
    try {
        // Pass 'true' to 'useMockData' to directly receive mocked data and bypass the actual scan flow
        const recommendation = await _jsSdk.start(modelId, qr, false);
        let str = '';
        const models = recommendation.models;
        for(let n in models){
            const model = models[n];
            str += `<strong>${model.modelId}</strong><br>`;
            for(let p in model.labels){
                const label = model.labels[p];
                str += `${label.labelCategory} ${label.labelNumber}<br>`;
            }
            str += '<br>';
        }
        showElement(qr, false);
        result.innerHTML = str;
    } catch (error1) {
        showElement(qr, false);
        console.log('Error', error1);
        error1.innerText = error1;
    }
};
const showElement = (element, show)=>{
    element.style.display = show ? 'block' : 'none';
};
showElement(qr, false);

},{"@spotsize/js-sdk":"fdA5e"}],"fdA5e":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "version", ()=>version
);
parcelHelpers.export(exports, "isMobile", ()=>_mobileCheck.isMobile
);
parcelHelpers.export(exports, "isIOS", ()=>_mobileCheck.isIOS
);
parcelHelpers.export(exports, "isAndroid", ()=>_mobileCheck.isAndroid
);
parcelHelpers.export(exports, "events", ()=>events
);
parcelHelpers.export(exports, "init", ()=>init
);
parcelHelpers.export(exports, "start", ()=>start
);
parcelHelpers.export(exports, "stop", ()=>stop
);
var _request = require("./request");
var _app = require("firebase/app");
var _qrCodeStyling = require("qr-code-styling");
var _qrCodeStylingDefault = parcelHelpers.interopDefault(_qrCodeStyling);
var _stompjs = require("@stomp/stompjs");
var _mobileCheck = require("./mobile-check");
const version = '1.1.2';
const __baseURL = 'https://api-staging.spotsize.io';
const __socketURL = 'wss://api-staging.spotsize.io/ws/recommendations';
const _qrId = 'sps-ckwz3cjnv00016g66jm0knh3t';
let _to;
let _window;
let _subscription0;
let _subscription1;
let _socketClient;
let _baseURL;
let _socketURL;
let _organizationId;
const firebaseConfig = {
    apiKey: 'AIzaSyDGjQwkdAZzVtUvNfKdgLg3neMqFhQY7_A',
    authDomain: 'spotsize.firebaseapp.com',
    projectId: 'spotsize',
    storageBucket: 'spotsize.appspot.com',
    messagingSenderId: '728636615727',
    appId: '1:728636615727:web:4a88778e478f2d9b856ada'
};
_app.initializeApp(firebaseConfig);
const events = {
    onQRShown: null,
    onQRRemoved: null,
    onStart: null,
    onStop: null,
    onError: null,
    onComplete: null
};
const init = (organizationId, useTestEnv)=>{
    _organizationId = organizationId;
    _baseURL = __baseURL;
    _socketURL = __socketURL;
    if (useTestEnv) {
        _baseURL = _baseURL.replace('api-staging', 'api-dev');
        _socketURL = _socketURL.replace('api-staging', 'api-dev');
    }
};
const start = (modelId, qrContainer, useMockData)=>{
    return new Promise(async (resolve, reject)=>{
        if (_mobileCheck.isAndroid()) return reject("Android is currently not yet supported.");
        if (_organizationId === undefined) {
            reject('organizationId is missing');
            return;
        }
        if (modelId === undefined) {
            reject('modelId is missing');
            return;
        }
        if (modelId.constructor === Array) {
            if (modelId.length === 0) {
                reject('modelId list is empty');
                return;
            }
        } else modelId = [
            modelId
        ];
        if (qrContainer === undefined) {
            reject('qrContainer is missing');
            return;
        }
        _window = undefined;
        removeQR();
        _request.cancelAllRequests();
        clearTimeout(_to);
        if (events.onStart) events.onStart();
        if (useMockData) {
            createQR('https://spotsize.io', qrContainer);
            _to = setTimeout(()=>{
                resolve(getMockData(modelIds));
            }, 1000);
            return;
        }
        try {
            let data;
            if (_mobileCheck.isMobile() && !_mobileCheck.isIPad()) {
                _window = window.open('', '_blank');
                data = await createIdAndLink(_organizationId, modelId);
                _window.location = data.link;
            } else {
                data = await createIdAndLink(_organizationId, modelId);
                createQR(data.link, qrContainer);
            }
            const recommendation = await getRecommendations(_organizationId, data.measurmentId);
            stop();
            if (events.onComplete) events.onComplete(recommendation);
            resolve(recommendation);
        } catch (error) {
            stop();
            if (events.onError) events.onError(error);
            reject(error);
        }
    });
};
const closePopUpWindow = ()=>{
    if (_window) _window.close();
    _window = undefined;
};
const stop = ()=>{
    removeQR();
    _request.cancelAllRequests();
    clearTimeout(_to);
    closePopUpWindow();
    if (events.onStop) events.onStop();
    if (_subscription0) _subscription0.unsubscribe();
    if (_subscription1) _subscription1.unsubscribe();
    if (_socketClient) _socketClient.deactivate();
};
const removeQR = ()=>{
    const element = document.getElementById(_qrId);
    if (element && element.parentElement) {
        element.remove();
        if (events.onQRRemoved) events.onQRRemoved();
    }
};
const createIdAndLink = (organizationId, modelIds)=>{
    return new Promise(async (resolve, reject)=>{
        try {
            const measurementData = await createMeasurement(organizationId);
            const linkData = await createLink(organizationId, measurementData.measurementId, modelIds);
            resolve({
                link: linkData.shortLink,
                measurmentId: measurementData.measurementId
            });
        } catch (error) {
            reject(error);
        }
    });
};
const createMeasurement = (organizationId)=>{
    const request = new _request.Request(`${_baseURL}/measurements`).post().json().header('Accept', 'application/vnd.spotsize.app-v1.0.0+json').header('organization-external-id', organizationId).body({
        organization: organizationId
    });
    return request.send();
};
const createLink = async (organizationId, measurementId, modelIds)=>{
    let href = location.href;
    if (_mobileCheck.isMobileSafari()) href = `${href.split('#')[0]}#sps${Date.now()}`;
    const data = {
        p: _mobileCheck.isMobile() ? 'm' : 'd',
        o: organizationId,
        m: measurementId,
        mo: modelIds,
        l: href,
        s: _mobileCheck.isMobileSafari()
    };
    const payload = btoa(JSON.stringify(data));
    const link = `https://spotsize.io/scan/${encodeURIComponent(payload)}`;
    //Android
    const apn = 'io.spotsize.spotsizeapp';
    //iOS
    const ibi = 'io.spotsize.spotsizeapp';
    const isi = '1567859533';
    //Preview
    const st = ' ';
    const sd = ' ';
    const si = '';
    const longDynamicLink = `https://usespotsize.page.link/?link=${link}&apn=${apn}&ibi=${ibi}&isi=${isi}&st=${st}&sd=${sd}&si=${si}`;
    const body = {
        longDynamicLink
    };
    const url = `https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=${firebaseConfig.apiKey}`;
    const request = new _request.Request(url).post().json().body(body);
    return request.send();
};
const getRecommendations = (organizationId, measurementId)=>{
    return new Promise((resolve, reject)=>{
        const client = _socketClient = new _stompjs.Client({
            brokerURL: _socketURL
        });
        client.onConnect = (frame)=>{
            _subscription0 = client.subscribe(`/topic/completed/${measurementId}`, (payload)=>{
                try {
                    resolve(JSON.parse(payload.body));
                } catch (error) {
                    reject('Payload error');
                }
            });
            _subscription1 = client.subscribe(`/topic/errors/${measurementId}`, (payload)=>{
                reject('Recommendation could not be created');
            });
        };
        client.onStompError = (frame)=>{
            reject('Socket error');
        };
        client.activate();
    });
};
const createQR = (link, container)=>{
    const qr = new _qrCodeStylingDefault.default({
        width: 1024,
        height: 1024,
        type: 'canvas',
        data: link,
        backgroundOptions: {
            color: 'rgba(0,0,0,0)'
        }
    });
    qr._canvas.style = 'height: 100%';
    qr._canvas.setAttribute('id', _qrId);
    qr.append(container);
    if (events.onQRShown) events.onQRShown();
};
const getMockData = (modelIds)=>{
    const data = {
        id: '00000000-0000-0000-0000-000000000000',
        createdAt: '2021-01-01T12:00:00.000',
        measurementId: '00000000-0000-0000-0000-000000000000',
        models: []
    };
    let id = 0;
    data.models = modelIds.map((modelId)=>{
        return {
            id: id++,
            modelId: modelId,
            audience: modelId.toLowerCase().indexOf('female') != -1 ? 'F' : 'M',
            sizeId: 5838,
            sizeClassId: 12,
            sizeClassIdent: 'PERFECT_FIT',
            brandName: modelId.split(' ')[0],
            brandId: 0,
            length: 260,
            width: 104,
            hasFeedback: false,
            labels: [
                {
                    'labelId': 46,
                    'labelNumber': '42',
                    'labelText': 'EU',
                    'labelCategory': 'EU'
                },
                {
                    'labelId': 47,
                    'labelNumber': '8',
                    'labelText': 'UK',
                    'labelCategory': 'UK'
                },
                {
                    'labelId': 48,
                    'labelNumber': '8,5',
                    'labelText': 'US',
                    'labelCategory': 'US'
                },
                {
                    'labelId': 50,
                    'labelNumber': '26,5',
                    'labelText': 'JP',
                    'labelCategory': 'JP'
                }
            ]
        };
    });
    return data;
};

},{"./request":"gRNBe","firebase/app":"5Ix3t","qr-code-styling":"4YFBI","@stomp/stompjs":"kAZGB","./mobile-check":"62Duu","@parcel/transformer-js/src/esmodule-helpers.js":"kVR2k"}],"gRNBe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cancelAllRequests", ()=>cancelAllRequests
);
parcelHelpers.export(exports, "Request", ()=>Request
);
let controller;
if (typeof AbortController != "undefined") controller = new AbortController();
const cancelAllRequests = ()=>{
    if (controller) {
        controller.abort();
        controller = new AbortController();
    }
};
class Request {
    constructor(url){
        this.url = url;
        this.options = {
            method: 'GET',
            headers: {
            },
            signal: controller.signal
        };
    }
    post() {
        this.options.method = 'POST';
        return this;
    }
    get() {
        this.options.method = 'GET';
        return this;
    }
    put() {
        this.options.method = 'PUT';
        return this;
    }
    json() {
        this.header('Content-Type', 'application/json');
        return this;
    }
    header(name, value) {
        this.options.headers[name] = value;
        return this;
    }
    body(payload) {
        this.options.body = JSON.stringify(payload);
        return this;
    }
    send() {
        return new Promise(async (resolve, reject)=>{
            try {
                const response = await fetch(this.url, this.options);
                if (!response.ok) {
                    reject(response.status);
                    return;
                }
                resolve(await response.json());
            } catch (error) {
                if (error.name.toLowerCase() != 'aborterror') reject(error);
            }
        });
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"kVR2k"}],"kVR2k":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"5Ix3t":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _app = require("@firebase/app");
parcelHelpers.exportAll(_app, exports);
var name = "firebase";
var version = "9.6.6";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ _app.registerVersion(name, version, 'app');

},{"@firebase/app":"39zOr","@parcel/transformer-js/src/esmodule-helpers.js":"kVR2k"}],"39zOr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FirebaseError", ()=>_util.FirebaseError
);
parcelHelpers.export(exports, "SDK_VERSION", ()=>SDK_VERSION
);
parcelHelpers.export(exports, "_DEFAULT_ENTRY_NAME", ()=>DEFAULT_ENTRY_NAME
);
parcelHelpers.export(exports, "_addComponent", ()=>_addComponent
);
parcelHelpers.export(exports, "_addOrOverwriteComponent", ()=>_addOrOverwriteComponent
);
parcelHelpers.export(exports, "_apps", ()=>_apps
);
parcelHelpers.export(exports, "_clearComponents", ()=>_clearComponents
);
parcelHelpers.export(exports, "_components", ()=>_components
);
parcelHelpers.export(exports, "_getProvider", ()=>_getProvider
);
parcelHelpers.export(exports, "_registerComponent", ()=>_registerComponent
);
parcelHelpers.export(exports, "_removeServiceInstance", ()=>_removeServiceInstance
);
parcelHelpers.export(exports, "deleteApp", ()=>deleteApp
);
parcelHelpers.export(exports, "getApp", ()=>getApp
);
parcelHelpers.export(exports, "getApps", ()=>getApps
);
parcelHelpers.export(exports, "initializeApp", ()=>initializeApp
);
parcelHelpers.export(exports, "onLog", ()=>onLog
);
parcelHelpers.export(exports, "registerVersion", ()=>registerVersion
);
parcelHelpers.export(exports, "setLogLevel", ()=>setLogLevel
);
var _component = require("@firebase/component");
var _logger = require("@firebase/logger");
var _util = require("@firebase/util");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class PlatformLoggerServiceImpl {
    constructor(container){
        this.container = container;
    }
    // In initial implementation, this will be called by installations on
    // auth token refresh, and installations will send this string.
    getPlatformInfoString() {
        const providers = this.container.getProviders();
        // Loop through providers and get library/version pairs from any that are
        // version components.
        return providers.map((provider)=>{
            if (isVersionServiceProvider(provider)) {
                const service = provider.getImmediate();
                return `${service.library}/${service.version}`;
            } else return null;
        }).filter((logString)=>logString
        ).join(' ');
    }
}
/**
 *
 * @param provider check if this provider provides a VersionService
 *
 * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
 * provides VersionService. The provider is not necessarily a 'app-version'
 * provider.
 */ function isVersionServiceProvider(provider) {
    const component = provider.getComponent();
    return (component === null || component === void 0 ? void 0 : component.type) === "VERSION" /* VERSION */ ;
}
const name$o = "@firebase/app";
const version$1 = "0.7.16";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const logger = new _logger.Logger('@firebase/app');
const name$n = "@firebase/app-compat";
const name$m = "@firebase/analytics-compat";
const name$l = "@firebase/analytics";
const name$k = "@firebase/app-check-compat";
const name$j = "@firebase/app-check";
const name$i = "@firebase/auth";
const name$h = "@firebase/auth-compat";
const name$g = "@firebase/database";
const name$f = "@firebase/database-compat";
const name$e = "@firebase/functions";
const name$d = "@firebase/functions-compat";
const name$c = "@firebase/installations";
const name$b = "@firebase/installations-compat";
const name$a = "@firebase/messaging";
const name$9 = "@firebase/messaging-compat";
const name$8 = "@firebase/performance";
const name$7 = "@firebase/performance-compat";
const name$6 = "@firebase/remote-config";
const name$5 = "@firebase/remote-config-compat";
const name$4 = "@firebase/storage";
const name$3 = "@firebase/storage-compat";
const name$2 = "@firebase/firestore";
const name$1 = "@firebase/firestore-compat";
const name = "firebase";
const version = "9.6.6";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The default app name
 *
 * @internal
 */ const DEFAULT_ENTRY_NAME = '[DEFAULT]';
const PLATFORM_LOG_STRING = {
    [name$o]: 'fire-core',
    [name$n]: 'fire-core-compat',
    [name$l]: 'fire-analytics',
    [name$m]: 'fire-analytics-compat',
    [name$j]: 'fire-app-check',
    [name$k]: 'fire-app-check-compat',
    [name$i]: 'fire-auth',
    [name$h]: 'fire-auth-compat',
    [name$g]: 'fire-rtdb',
    [name$f]: 'fire-rtdb-compat',
    [name$e]: 'fire-fn',
    [name$d]: 'fire-fn-compat',
    [name$c]: 'fire-iid',
    [name$b]: 'fire-iid-compat',
    [name$a]: 'fire-fcm',
    [name$9]: 'fire-fcm-compat',
    [name$8]: 'fire-perf',
    [name$7]: 'fire-perf-compat',
    [name$6]: 'fire-rc',
    [name$5]: 'fire-rc-compat',
    [name$4]: 'fire-gcs',
    [name$3]: 'fire-gcs-compat',
    [name$2]: 'fire-fst',
    [name$1]: 'fire-fst-compat',
    'fire-js': 'fire-js',
    [name]: 'fire-js-all'
};
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @internal
 */ const _apps = new Map();
/**
 * Registered components.
 *
 * @internal
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
const _components = new Map();
/**
 * @param component - the component being added to this app's container
 *
 * @internal
 */ function _addComponent(app, component) {
    try {
        app.container.addComponent(component);
    } catch (e) {
        logger.debug(`Component ${component.name} failed to register with FirebaseApp ${app.name}`, e);
    }
}
/**
 *
 * @internal
 */ function _addOrOverwriteComponent(app, component) {
    app.container.addOrOverwriteComponent(component);
}
/**
 *
 * @param component - the component to register
 * @returns whether or not the component is registered successfully
 *
 * @internal
 */ function _registerComponent(component) {
    const componentName = component.name;
    if (_components.has(componentName)) {
        logger.debug(`There were multiple attempts to register component ${componentName}.`);
        return false;
    }
    _components.set(componentName, component);
    // add the component to existing app instances
    for (const app of _apps.values())_addComponent(app, component);
    return true;
}
/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 *
 * @returns the provider for the service with the matching name
 *
 * @internal
 */ function _getProvider(app, name1) {
    return app.container.getProvider(name1);
}
/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 * @param instanceIdentifier - service instance identifier in case the service supports multiple instances
 *
 * @internal
 */ function _removeServiceInstance(app, name2, instanceIdentifier = DEFAULT_ENTRY_NAME) {
    _getProvider(app, name2).clearInstance(instanceIdentifier);
}
/**
 * Test only
 *
 * @internal
 */ function _clearComponents() {
    _components.clear();
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ERRORS = {
    ["no-app" /* NO_APP */ ]: "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",
    ["bad-app-name" /* BAD_APP_NAME */ ]: "Illegal App name: '{$appName}",
    ["duplicate-app" /* DUPLICATE_APP */ ]: "Firebase App named '{$appName}' already exists with different options or config",
    ["app-deleted" /* APP_DELETED */ ]: "Firebase App named '{$appName}' already deleted",
    ["invalid-app-argument" /* INVALID_APP_ARGUMENT */ ]: "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    ["invalid-log-argument" /* INVALID_LOG_ARGUMENT */ ]: 'First argument to `onLog` must be null or a function.'
};
const ERROR_FACTORY = new _util.ErrorFactory('app', 'Firebase', ERRORS);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class FirebaseAppImpl {
    constructor(options, config, container){
        this._isDeleted = false;
        this._options = Object.assign({
        }, options);
        this._config = Object.assign({
        }, config);
        this._name = config.name;
        this._automaticDataCollectionEnabled = config.automaticDataCollectionEnabled;
        this._container = container;
        this.container.addComponent(new _component.Component('app', ()=>this
        , "PUBLIC" /* PUBLIC */ ));
    }
    get automaticDataCollectionEnabled() {
        this.checkDestroyed();
        return this._automaticDataCollectionEnabled;
    }
    set automaticDataCollectionEnabled(val) {
        this.checkDestroyed();
        this._automaticDataCollectionEnabled = val;
    }
    get name() {
        this.checkDestroyed();
        return this._name;
    }
    get options() {
        this.checkDestroyed();
        return this._options;
    }
    get config() {
        this.checkDestroyed();
        return this._config;
    }
    get container() {
        return this._container;
    }
    get isDeleted() {
        return this._isDeleted;
    }
    set isDeleted(val) {
        this._isDeleted = val;
    }
    /**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */ checkDestroyed() {
        if (this.isDeleted) throw ERROR_FACTORY.create("app-deleted" /* APP_DELETED */ , {
            appName: this._name
        });
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The current SDK version.
 *
 * @public
 */ const SDK_VERSION = version;
function initializeApp(options, rawConfig = {
}) {
    if (typeof rawConfig !== 'object') {
        const name3 = rawConfig;
        rawConfig = {
            name: name3
        };
    }
    const config = Object.assign({
        name: DEFAULT_ENTRY_NAME,
        automaticDataCollectionEnabled: false
    }, rawConfig);
    const name4 = config.name;
    if (typeof name4 !== 'string' || !name4) throw ERROR_FACTORY.create("bad-app-name" /* BAD_APP_NAME */ , {
        appName: String(name4)
    });
    const existingApp = _apps.get(name4);
    if (existingApp) {
        // return the existing app if options and config deep equal the ones in the existing app.
        if (_util.deepEqual(options, existingApp.options) && _util.deepEqual(config, existingApp.config)) return existingApp;
        else throw ERROR_FACTORY.create("duplicate-app" /* DUPLICATE_APP */ , {
            appName: name4
        });
    }
    const container = new _component.ComponentContainer(name4);
    for (const component of _components.values())container.addComponent(component);
    const newApp = new FirebaseAppImpl(options, config, container);
    _apps.set(name4, newApp);
    return newApp;
}
/**
 * Retrieves a {@link @firebase/app#FirebaseApp} instance.
 *
 * When called with no arguments, the default app is returned. When an app name
 * is provided, the app corresponding to that name is returned.
 *
 * An exception is thrown if the app being retrieved has not yet been
 * initialized.
 *
 * @example
 * ```javascript
 * // Return the default app
 * const app = getApp();
 * ```
 *
 * @example
 * ```javascript
 * // Return a named app
 * const otherApp = getApp("otherApp");
 * ```
 *
 * @param name - Optional name of the app to return. If no name is
 *   provided, the default is `"[DEFAULT]"`.
 *
 * @returns The app corresponding to the provided app name.
 *   If no app name is provided, the default app is returned.
 *
 * @public
 */ function getApp(name5 = DEFAULT_ENTRY_NAME) {
    const app = _apps.get(name5);
    if (!app) throw ERROR_FACTORY.create("no-app" /* NO_APP */ , {
        appName: name5
    });
    return app;
}
/**
 * A (read-only) array of all initialized apps.
 * @public
 */ function getApps() {
    return Array.from(_apps.values());
}
/**
 * Renders this app unusable and frees the resources of all associated
 * services.
 *
 * @example
 * ```javascript
 * deleteApp(app)
 *   .then(function() {
 *     console.log("App deleted successfully");
 *   })
 *   .catch(function(error) {
 *     console.log("Error deleting app:", error);
 *   });
 * ```
 *
 * @public
 */ async function deleteApp(app) {
    const name6 = app.name;
    if (_apps.has(name6)) {
        _apps.delete(name6);
        await Promise.all(app.container.getProviders().map((provider)=>provider.delete()
        ));
        app.isDeleted = true;
    }
}
/**
 * Registers a library's name and version for platform logging purposes.
 * @param library - Name of 1p or 3p library (e.g. firestore, angularfire)
 * @param version - Current version of that library.
 * @param variant - Bundle variant, e.g., node, rn, etc.
 *
 * @public
 */ function registerVersion(libraryKeyOrName, version1, variant) {
    var _a;
    // TODO: We can use this check to whitelist strings when/if we set up
    // a good whitelist system.
    let library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;
    if (variant) library += `-${variant}`;
    const libraryMismatch = library.match(/\s|\//);
    const versionMismatch = version1.match(/\s|\//);
    if (libraryMismatch || versionMismatch) {
        const warning = [
            `Unable to register library "${library}" with version "${version1}":`
        ];
        if (libraryMismatch) warning.push(`library name "${library}" contains illegal characters (whitespace or "/")`);
        if (libraryMismatch && versionMismatch) warning.push('and');
        if (versionMismatch) warning.push(`version name "${version1}" contains illegal characters (whitespace or "/")`);
        logger.warn(warning.join(' '));
        return;
    }
    _registerComponent(new _component.Component(`${library}-version`, ()=>({
            library,
            version: version1
        })
    , "VERSION" /* VERSION */ ));
}
/**
 * Sets log handler for all Firebase SDKs.
 * @param logCallback - An optional custom log handler that executes user code whenever
 * the Firebase SDK makes a logging call.
 *
 * @public
 */ function onLog(logCallback, options) {
    if (logCallback !== null && typeof logCallback !== 'function') throw ERROR_FACTORY.create("invalid-log-argument" /* INVALID_LOG_ARGUMENT */ );
    _logger.setUserLogHandler(logCallback, options);
}
/**
 * Sets log level for all Firebase SDKs.
 *
 * All of the log types above the current log level are captured (i.e. if
 * you set the log level to `info`, errors are logged, but `debug` and
 * `verbose` logs are not).
 *
 * @public
 */ function setLogLevel(logLevel) {
    _logger.setLogLevel(logLevel);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function registerCoreComponents(variant) {
    _registerComponent(new _component.Component('platform-logger', (container)=>new PlatformLoggerServiceImpl(container)
    , "PRIVATE" /* PRIVATE */ ));
    // Register `app` package.
    registerVersion(name$o, version$1, variant);
    // BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
    registerVersion(name$o, version$1, 'esm2017');
    // Register platform SDK identifier (no version).
    registerVersion('fire-js', '');
}
/**
 * Firebase App
 *
 * @remarks This package coordinates the communication between the different Firebase components
 * @packageDocumentation
 */ registerCoreComponents('');

},{"@firebase/component":"a57uH","@firebase/logger":"FfmSN","@firebase/util":"dPeny","@parcel/transformer-js/src/esmodule-helpers.js":"kVR2k"}],"a57uH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Component", ()=>Component
);
parcelHelpers.export(exports, "ComponentContainer", ()=>ComponentContainer
);
parcelHelpers.export(exports, "Provider", ()=>Provider
);
var _util = require("@firebase/util");
/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */ class Component {
    /**
     *
     * @param name The public service name, e.g. app, auth, firestore, database
     * @param instanceFactory Service factory responsible for creating the public interface
     * @param type whether the service provided by the component is public or private
     */ constructor(name, instanceFactory, type){
        this.name = name;
        this.instanceFactory = instanceFactory;
        this.type = type;
        this.multipleInstances = false;
        /**
         * Properties to be added to the service namespace
         */ this.serviceProps = {
        };
        this.instantiationMode = "LAZY" /* LAZY */ ;
        this.onInstanceCreated = null;
    }
    setInstantiationMode(mode) {
        this.instantiationMode = mode;
        return this;
    }
    setMultipleInstances(multipleInstances) {
        this.multipleInstances = multipleInstances;
        return this;
    }
    setServiceProps(props) {
        this.serviceProps = props;
        return this;
    }
    setInstanceCreatedCallback(callback) {
        this.onInstanceCreated = callback;
        return this;
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const DEFAULT_ENTRY_NAME = '[DEFAULT]';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
 * NameServiceMapping[T] is an alias for the type of the instance
 */ class Provider {
    constructor(name, container){
        this.name = name;
        this.container = container;
        this.component = null;
        this.instances = new Map();
        this.instancesDeferred = new Map();
        this.instancesOptions = new Map();
        this.onInitCallbacks = new Map();
    }
    /**
     * @param identifier A provider can provide mulitple instances of a service
     * if this.component.multipleInstances is true.
     */ get(identifier) {
        // if multipleInstances is not supported, use the default name
        const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        if (!this.instancesDeferred.has(normalizedIdentifier)) {
            const deferred = new _util.Deferred();
            this.instancesDeferred.set(normalizedIdentifier, deferred);
            if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) // initialize the service if it can be auto-initialized
            try {
                const instance = this.getOrInitializeService({
                    instanceIdentifier: normalizedIdentifier
                });
                if (instance) deferred.resolve(instance);
            } catch (e) {
            // when the instance factory throws an exception during get(), it should not cause
            // a fatal error. We just return the unresolved promise in this case.
            }
        }
        return this.instancesDeferred.get(normalizedIdentifier).promise;
    }
    getImmediate(options) {
        var _a;
        // if multipleInstances is not supported, use the default name
        const normalizedIdentifier = this.normalizeInstanceIdentifier(options === null || options === void 0 ? void 0 : options.identifier);
        const optional = (_a = options === null || options === void 0 ? void 0 : options.optional) !== null && _a !== void 0 ? _a : false;
        if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) try {
            return this.getOrInitializeService({
                instanceIdentifier: normalizedIdentifier
            });
        } catch (e) {
            if (optional) return null;
            else throw e;
        }
        else {
            // In case a component is not initialized and should/can not be auto-initialized at the moment, return null if the optional flag is set, or throw
            if (optional) return null;
            else throw Error(`Service ${this.name} is not available`);
        }
    }
    getComponent() {
        return this.component;
    }
    setComponent(component) {
        if (component.name !== this.name) throw Error(`Mismatching Component ${component.name} for Provider ${this.name}.`);
        if (this.component) throw Error(`Component for ${this.name} has already been provided`);
        this.component = component;
        // return early without attempting to initialize the component if the component requires explicit initialization (calling `Provider.initialize()`)
        if (!this.shouldAutoInitialize()) return;
        // if the service is eager, initialize the default instance
        if (isComponentEager(component)) try {
            this.getOrInitializeService({
                instanceIdentifier: DEFAULT_ENTRY_NAME
            });
        } catch (e) {
        // when the instance factory for an eager Component throws an exception during the eager
        // initialization, it should not cause a fatal error.
        // TODO: Investigate if we need to make it configurable, because some component may want to cause
        // a fatal error in this case?
        }
        // Create service instances for the pending promises and resolve them
        // NOTE: if this.multipleInstances is false, only the default instance will be created
        // and all promises with resolve with it regardless of the identifier.
        for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()){
            const normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
            try {
                // `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
                const instance = this.getOrInitializeService({
                    instanceIdentifier: normalizedIdentifier
                });
                instanceDeferred.resolve(instance);
            } catch (e) {
            // when the instance factory throws an exception, it should not cause
            // a fatal error. We just leave the promise unresolved.
            }
        }
    }
    clearInstance(identifier = DEFAULT_ENTRY_NAME) {
        this.instancesDeferred.delete(identifier);
        this.instancesOptions.delete(identifier);
        this.instances.delete(identifier);
    }
    // app.delete() will call this method on every provider to delete the services
    // TODO: should we mark the provider as deleted?
    async delete() {
        const services = Array.from(this.instances.values());
        await Promise.all([
            ...services.filter((service)=>'INTERNAL' in service
            ) // legacy services
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .map((service)=>service.INTERNAL.delete()
            ),
            ...services.filter((service)=>'_delete' in service
            ) // modularized services
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .map((service)=>service._delete()
            )
        ]);
    }
    isComponentSet() {
        return this.component != null;
    }
    isInitialized(identifier = DEFAULT_ENTRY_NAME) {
        return this.instances.has(identifier);
    }
    getOptions(identifier = DEFAULT_ENTRY_NAME) {
        return this.instancesOptions.get(identifier) || {
        };
    }
    initialize(opts = {
    }) {
        const { options ={
        }  } = opts;
        const normalizedIdentifier = this.normalizeInstanceIdentifier(opts.instanceIdentifier);
        if (this.isInitialized(normalizedIdentifier)) throw Error(`${this.name}(${normalizedIdentifier}) has already been initialized`);
        if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`);
        const instance = this.getOrInitializeService({
            instanceIdentifier: normalizedIdentifier,
            options
        });
        // resolve any pending promise waiting for the service instance
        for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()){
            const normalizedDeferredIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
            if (normalizedIdentifier === normalizedDeferredIdentifier) instanceDeferred.resolve(instance);
        }
        return instance;
    }
    /**
     *
     * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
     * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
     *
     * @param identifier An optional instance identifier
     * @returns a function to unregister the callback
     */ onInit(callback, identifier) {
        var _a;
        const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        const existingCallbacks = (_a = this.onInitCallbacks.get(normalizedIdentifier)) !== null && _a !== void 0 ? _a : new Set();
        existingCallbacks.add(callback);
        this.onInitCallbacks.set(normalizedIdentifier, existingCallbacks);
        const existingInstance = this.instances.get(normalizedIdentifier);
        if (existingInstance) callback(existingInstance, normalizedIdentifier);
        return ()=>{
            existingCallbacks.delete(callback);
        };
    }
    /**
     * Invoke onInit callbacks synchronously
     * @param instance the service instance`
     */ invokeOnInitCallbacks(instance, identifier) {
        const callbacks = this.onInitCallbacks.get(identifier);
        if (!callbacks) return;
        for (const callback of callbacks)try {
            callback(instance, identifier);
        } catch (_a) {
        // ignore errors in the onInit callback
        }
    }
    getOrInitializeService({ instanceIdentifier , options ={
    }  }) {
        let instance = this.instances.get(instanceIdentifier);
        if (!instance && this.component) {
            instance = this.component.instanceFactory(this.container, {
                instanceIdentifier: normalizeIdentifierForFactory(instanceIdentifier),
                options
            });
            this.instances.set(instanceIdentifier, instance);
            this.instancesOptions.set(instanceIdentifier, options);
            /**
             * Invoke onInit listeners.
             * Note this.component.onInstanceCreated is different, which is used by the component creator,
             * while onInit listeners are registered by consumers of the provider.
             */ this.invokeOnInitCallbacks(instance, instanceIdentifier);
            /**
             * Order is important
             * onInstanceCreated() should be called after this.instances.set(instanceIdentifier, instance); which
             * makes `isInitialized()` return true.
             */ if (this.component.onInstanceCreated) try {
                this.component.onInstanceCreated(this.container, instanceIdentifier, instance);
            } catch (_a) {
            // ignore errors in the onInstanceCreatedCallback
            }
        }
        return instance || null;
    }
    normalizeInstanceIdentifier(identifier = DEFAULT_ENTRY_NAME) {
        if (this.component) return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
        else return identifier; // assume multiple instances are supported before the component is provided.
    }
    shouldAutoInitialize() {
        return !!this.component && this.component.instantiationMode !== "EXPLICIT" /* EXPLICIT */ ;
    }
}
// undefined should be passed to the service factory for the default instance
function normalizeIdentifierForFactory(identifier) {
    return identifier === DEFAULT_ENTRY_NAME ? undefined : identifier;
}
function isComponentEager(component) {
    return component.instantiationMode === "EAGER" /* EAGER */ ;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
 */ class ComponentContainer {
    constructor(name){
        this.name = name;
        this.providers = new Map();
    }
    /**
     *
     * @param component Component being added
     * @param overwrite When a component with the same name has already been registered,
     * if overwrite is true: overwrite the existing component with the new component and create a new
     * provider with the new component. It can be useful in tests where you want to use different mocks
     * for different tests.
     * if overwrite is false: throw an exception
     */ addComponent(component) {
        const provider = this.getProvider(component.name);
        if (provider.isComponentSet()) throw new Error(`Component ${component.name} has already been registered with ${this.name}`);
        provider.setComponent(component);
    }
    addOrOverwriteComponent(component) {
        const provider = this.getProvider(component.name);
        if (provider.isComponentSet()) // delete the existing provider from the container, so we can register the new component
        this.providers.delete(component.name);
        this.addComponent(component);
    }
    /**
     * getProvider provides a type safe interface where it can only be called with a field name
     * present in NameServiceMapping interface.
     *
     * Firebase SDKs providing services should extend NameServiceMapping interface to register
     * themselves.
     */ getProvider(name) {
        if (this.providers.has(name)) return this.providers.get(name);
        // create a Provider for a service that hasn't registered with Firebase
        const provider = new Provider(name, this);
        this.providers.set(name, provider);
        return provider;
    }
    getProviders() {
        return Array.from(this.providers.values());
    }
}

},{"@firebase/util":"dPeny","@parcel/transformer-js/src/esmodule-helpers.js":"kVR2k"}],"dPeny":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CONSTANTS", ()=>CONSTANTS
);
parcelHelpers.export(exports, "Deferred", ()=>Deferred
);
parcelHelpers.export(exports, "ErrorFactory", ()=>ErrorFactory
);
parcelHelpers.export(exports, "FirebaseError", ()=>FirebaseError
);
parcelHelpers.export(exports, "MAX_VALUE_MILLIS", ()=>MAX_VALUE_MILLIS
);
parcelHelpers.export(exports, "RANDOM_FACTOR", ()=>RANDOM_FACTOR
);
parcelHelpers.export(exports, "Sha1", ()=>Sha1
);
parcelHelpers.export(exports, "areCookiesEnabled", ()=>areCookiesEnabled
);
parcelHelpers.export(exports, "assert", ()=>assert
);
parcelHelpers.export(exports, "assertionError", ()=>assertionError
);
parcelHelpers.export(exports, "async", ()=>async
);
parcelHelpers.export(exports, "base64", ()=>base64
);
parcelHelpers.export(exports, "base64Decode", ()=>base64Decode
);
parcelHelpers.export(exports, "base64Encode", ()=>base64Encode
);
parcelHelpers.export(exports, "base64urlEncodeWithoutPadding", ()=>base64urlEncodeWithoutPadding
);
parcelHelpers.export(exports, "calculateBackoffMillis", ()=>calculateBackoffMillis
);
parcelHelpers.export(exports, "contains", ()=>contains
);
parcelHelpers.export(exports, "createMockUserToken", ()=>createMockUserToken
);
parcelHelpers.export(exports, "createSubscribe", ()=>createSubscribe
);
parcelHelpers.export(exports, "decode", ()=>decode
);
parcelHelpers.export(exports, "deepCopy", ()=>deepCopy
);
parcelHelpers.export(exports, "deepEqual", ()=>deepEqual
);
parcelHelpers.export(exports, "deepExtend", ()=>deepExtend
);
parcelHelpers.export(exports, "errorPrefix", ()=>errorPrefix
);
parcelHelpers.export(exports, "extractQuerystring", ()=>extractQuerystring
);
parcelHelpers.export(exports, "getGlobal", ()=>getGlobal
);
parcelHelpers.export(exports, "getModularInstance", ()=>getModularInstance
);
parcelHelpers.export(exports, "getUA", ()=>getUA
);
parcelHelpers.export(exports, "isAdmin", ()=>isAdmin
);
parcelHelpers.export(exports, "isBrowser", ()=>isBrowser
);
parcelHelpers.export(exports, "isBrowserExtension", ()=>isBrowserExtension
);
parcelHelpers.export(exports, "isElectron", ()=>isElectron
);
parcelHelpers.export(exports, "isEmpty", ()=>isEmpty
);
parcelHelpers.export(exports, "isIE", ()=>isIE
);
parcelHelpers.export(exports, "isIndexedDBAvailable", ()=>isIndexedDBAvailable
);
parcelHelpers.export(exports, "isMobileCordova", ()=>isMobileCordova
);
parcelHelpers.export(exports, "isNode", ()=>isNode
);
parcelHelpers.export(exports, "isNodeSdk", ()=>isNodeSdk
);
parcelHelpers.export(exports, "isReactNative", ()=>isReactNative
);
parcelHelpers.export(exports, "isSafari", ()=>isSafari
);
parcelHelpers.export(exports, "isUWP", ()=>isUWP
);
parcelHelpers.export(exports, "isValidFormat", ()=>isValidFormat
);
parcelHelpers.export(exports, "isValidTimestamp", ()=>isValidTimestamp
);
parcelHelpers.export(exports, "issuedAtTime", ()=>issuedAtTime
);
parcelHelpers.export(exports, "jsonEval", ()=>jsonEval
);
parcelHelpers.export(exports, "map", ()=>map
);
parcelHelpers.export(exports, "ordinal", ()=>ordinal
);
parcelHelpers.export(exports, "querystring", ()=>querystring
);
parcelHelpers.export(exports, "querystringDecode", ()=>querystringDecode
);
parcelHelpers.export(exports, "safeGet", ()=>safeGet
);
parcelHelpers.export(exports, "stringLength", ()=>stringLength
);
parcelHelpers.export(exports, "stringToByteArray", ()=>stringToByteArray
);
parcelHelpers.export(exports, "stringify", ()=>stringify
);
parcelHelpers.export(exports, "validateArgCount", ()=>validateArgCount
);
parcelHelpers.export(exports, "validateCallback", ()=>validateCallback
);
parcelHelpers.export(exports, "validateContextObject", ()=>validateContextObject
);
parcelHelpers.export(exports, "validateIndexedDBOpenable", ()=>validateIndexedDBOpenable
);
parcelHelpers.export(exports, "validateNamespace", ()=>validateNamespace
);
var global = arguments[3];
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
 */ const CONSTANTS = {
    /**
     * @define {boolean} Whether this is the client Node.js SDK.
     */ NODE_CLIENT: false,
    /**
     * @define {boolean} Whether this is the Admin Node.js SDK.
     */ NODE_ADMIN: false,
    /**
     * Firebase SDK Version
     */ SDK_VERSION: '${JSCORE_VERSION}'
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Throws an error if the provided assertion is falsy
 */ const assert = function(assertion, message) {
    if (!assertion) throw assertionError(message);
};
/**
 * Returns an Error object suitable for throwing.
 */ const assertionError = function(message) {
    return new Error('Firebase Database (' + CONSTANTS.SDK_VERSION + ') INTERNAL ASSERT FAILED: ' + message);
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const stringToByteArray$1 = function(str) {
    // TODO(user): Use native implementations if/when available
    const out = [];
    let p = 0;
    for(let i = 0; i < str.length; i++){
        let c = str.charCodeAt(i);
        if (c < 128) out[p++] = c;
        else if (c < 2048) {
            out[p++] = c >> 6 | 192;
            out[p++] = c & 63 | 128;
        } else if ((c & 64512) === 55296 && i + 1 < str.length && (str.charCodeAt(i + 1) & 64512) === 56320) {
            // Surrogate Pair
            c = 65536 + ((c & 1023) << 10) + (str.charCodeAt(++i) & 1023);
            out[p++] = c >> 18 | 240;
            out[p++] = c >> 12 & 63 | 128;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
        } else {
            out[p++] = c >> 12 | 224;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
        }
    }
    return out;
};
/**
 * Turns an array of numbers into the string given by the concatenation of the
 * characters to which the numbers correspond.
 * @param bytes Array of numbers representing characters.
 * @return Stringification of the array.
 */ const byteArrayToString = function(bytes) {
    // TODO(user): Use native implementations if/when available
    const out = [];
    let pos = 0, c = 0;
    while(pos < bytes.length){
        const c1 = bytes[pos++];
        if (c1 < 128) out[c++] = String.fromCharCode(c1);
        else if (c1 > 191 && c1 < 224) {
            const c2 = bytes[pos++];
            out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);
        } else if (c1 > 239 && c1 < 365) {
            // Surrogate Pair
            const c2 = bytes[pos++];
            const c3 = bytes[pos++];
            const c4 = bytes[pos++];
            const u = ((c1 & 7) << 18 | (c2 & 63) << 12 | (c3 & 63) << 6 | c4 & 63) - 65536;
            out[c++] = String.fromCharCode(55296 + (u >> 10));
            out[c++] = String.fromCharCode(56320 + (u & 1023));
        } else {
            const c2 = bytes[pos++];
            const c3 = bytes[pos++];
            out[c++] = String.fromCharCode((c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
        }
    }
    return out.join('');
};
// We define it as an object literal instead of a class because a class compiled down to es5 can't
// be treeshaked. https://github.com/rollup/rollup/issues/1691
// Static lookup maps, lazily populated by init_()
const base64 = {
    /**
     * Maps bytes to characters.
     */ byteToCharMap_: null,
    /**
     * Maps characters to bytes.
     */ charToByteMap_: null,
    /**
     * Maps bytes to websafe characters.
     * @private
     */ byteToCharMapWebSafe_: null,
    /**
     * Maps websafe characters to bytes.
     * @private
     */ charToByteMapWebSafe_: null,
    /**
     * Our default alphabet, shared between
     * ENCODED_VALS and ENCODED_VALS_WEBSAFE
     */ ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    /**
     * Our default alphabet. Value 64 (=) is special; it means "nothing."
     */ get ENCODED_VALS () {
        return this.ENCODED_VALS_BASE + '+/=';
    },
    /**
     * Our websafe alphabet.
     */ get ENCODED_VALS_WEBSAFE () {
        return this.ENCODED_VALS_BASE + '-_.';
    },
    /**
     * Whether this browser supports the atob and btoa functions. This extension
     * started at Mozilla but is now implemented by many browsers. We use the
     * ASSUME_* variables to avoid pulling in the full useragent detection library
     * but still allowing the standard per-browser compilations.
     *
     */ HAS_NATIVE_SUPPORT: typeof atob === 'function',
    /**
     * Base64-encode an array of bytes.
     *
     * @param input An array of bytes (numbers with
     *     value in [0, 255]) to encode.
     * @param webSafe Boolean indicating we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */ encodeByteArray (input, webSafe) {
        if (!Array.isArray(input)) throw Error('encodeByteArray takes an array as a parameter');
        this.init_();
        const byteToCharMap = webSafe ? this.byteToCharMapWebSafe_ : this.byteToCharMap_;
        const output = [];
        for(let i = 0; i < input.length; i += 3){
            const byte1 = input[i];
            const haveByte2 = i + 1 < input.length;
            const byte2 = haveByte2 ? input[i + 1] : 0;
            const haveByte3 = i + 2 < input.length;
            const byte3 = haveByte3 ? input[i + 2] : 0;
            const outByte1 = byte1 >> 2;
            const outByte2 = (byte1 & 3) << 4 | byte2 >> 4;
            let outByte3 = (byte2 & 15) << 2 | byte3 >> 6;
            let outByte4 = byte3 & 63;
            if (!haveByte3) {
                outByte4 = 64;
                if (!haveByte2) outByte3 = 64;
            }
            output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
        }
        return output.join('');
    },
    /**
     * Base64-encode a string.
     *
     * @param input A string to encode.
     * @param webSafe If true, we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */ encodeString (input, webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !webSafe) return btoa(input);
        return this.encodeByteArray(stringToByteArray$1(input), webSafe);
    },
    /**
     * Base64-decode a string.
     *
     * @param input to decode.
     * @param webSafe True if we should use the
     *     alternative alphabet.
     * @return string representing the decoded value.
     */ decodeString (input, webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !webSafe) return atob(input);
        return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
    },
    /**
     * Base64-decode a string.
     *
     * In base-64 decoding, groups of four characters are converted into three
     * bytes.  If the encoder did not apply padding, the input length may not
     * be a multiple of 4.
     *
     * In this case, the last group will have fewer than 4 characters, and
     * padding will be inferred.  If the group has one or two characters, it decodes
     * to one byte.  If the group has three characters, it decodes to two bytes.
     *
     * @param input Input to decode.
     * @param webSafe True if we should use the web-safe alphabet.
     * @return bytes representing the decoded value.
     */ decodeStringToByteArray (input, webSafe) {
        this.init_();
        const charToByteMap = webSafe ? this.charToByteMapWebSafe_ : this.charToByteMap_;
        const output = [];
        for(let i = 0; i < input.length;){
            const byte1 = charToByteMap[input.charAt(i++)];
            const haveByte2 = i < input.length;
            const byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
            ++i;
            const haveByte3 = i < input.length;
            const byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            const haveByte4 = i < input.length;
            const byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) throw Error();
            const outByte1 = byte1 << 2 | byte2 >> 4;
            output.push(outByte1);
            if (byte3 !== 64) {
                const outByte2 = byte2 << 4 & 240 | byte3 >> 2;
                output.push(outByte2);
                if (byte4 !== 64) {
                    const outByte3 = byte3 << 6 & 192 | byte4;
                    output.push(outByte3);
                }
            }
        }
        return output;
    },
    /**
     * Lazy static initialization function. Called before
     * accessing any of the static map variables.
     * @private
     */ init_ () {
        if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {
            };
            this.charToByteMap_ = {
            };
            this.byteToCharMapWebSafe_ = {
            };
            this.charToByteMapWebSafe_ = {
            };
            // We want quick mappings back and forth, so we precompute two maps.
            for(let i = 0; i < this.ENCODED_VALS.length; i++){
                this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
                this.charToByteMap_[this.byteToCharMap_[i]] = i;
                this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
                this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
                // Be forgiving when decoding and correctly decode both encodings.
                if (i >= this.ENCODED_VALS_BASE.length) {
                    this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
                    this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
                }
            }
        }
    }
};
/**
 * URL-safe base64 encoding
 */ const base64Encode = function(str) {
    const utf8Bytes = stringToByteArray$1(str);
    return base64.encodeByteArray(utf8Bytes, true);
};
/**
 * URL-safe base64 encoding (without "." padding in the end).
 * e.g. Used in JSON Web Token (JWT) parts.
 */ const base64urlEncodeWithoutPadding = function(str) {
    // Use base64url encoding and remove padding in the end (dot characters).
    return base64Encode(str).replace(/\./g, '');
};
/**
 * URL-safe base64 decoding
 *
 * NOTE: DO NOT use the global atob() function - it does NOT support the
 * base64Url variant encoding.
 *
 * @param str To be decoded
 * @return Decoded result, if possible
 */ const base64Decode = function(str) {
    try {
        return base64.decodeString(str, true);
    } catch (e) {
        console.error('base64Decode failed: ', e);
    }
    return null;
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Do a deep-copy of basic JavaScript Objects or Arrays.
 */ function deepCopy(value) {
    return deepExtend(undefined, value);
}
/**
 * Copy properties from source to target (recursively allows extension
 * of Objects and Arrays).  Scalar values in the target are over-written.
 * If target is undefined, an object of the appropriate type will be created
 * (and returned).
 *
 * We recursively copy all child properties of plain Objects in the source- so
 * that namespace- like dictionaries are merged.
 *
 * Note that the target can be a function, in which case the properties in
 * the source Object are copied onto it as static properties of the Function.
 *
 * Note: we don't merge __proto__ to prevent prototype pollution
 */ function deepExtend(target, source) {
    if (!(source instanceof Object)) return source;
    switch(source.constructor){
        case Date:
            // Treat Dates like scalars; if the target date object had any child
            // properties - they will be lost!
            const dateValue = source;
            return new Date(dateValue.getTime());
        case Object:
            if (target === undefined) target = {
            };
            break;
        case Array:
            // Always copy the array source and overwrite the target.
            target = [];
            break;
        default:
            // Not a plain Object - treat it as a scalar.
            return source;
    }
    for(const prop in source){
        // use isValidKey to guard against prototype pollution. See https://snyk.io/vuln/SNYK-JS-LODASH-450202
        if (!source.hasOwnProperty(prop) || !isValidKey(prop)) continue;
        target[prop] = deepExtend(target[prop], source[prop]);
    }
    return target;
}
function isValidKey(key) {
    return key !== '__proto__';
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Deferred {
    constructor(){
        this.reject = ()=>{
        };
        this.resolve = ()=>{
        };
        this.promise = new Promise((resolve, reject)=>{
            this.resolve = resolve;
            this.reject = reject;
        });
    }
    /**
     * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
     * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
     * and returns a node-style callback which will resolve or reject the Deferred's promise.
     */ wrapCallback(callback) {
        return (error, value)=>{
            if (error) this.reject(error);
            else this.resolve(value);
            if (typeof callback === 'function') {
                // Attaching noop handler just in case developer wasn't expecting
                // promises
                this.promise.catch(()=>{
                });
                // Some of our callbacks don't expect a value and our own tests
                // assert that the parameter length is 1
                if (callback.length === 1) callback(error);
                else callback(error, value);
            }
        };
    }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function createMockUserToken(token, projectId) {
    if (token.uid) throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
    // Unsecured JWTs use "none" as the algorithm.
    const header = {
        alg: 'none',
        type: 'JWT'
    };
    const project = projectId || 'demo-project';
    const iat = token.iat || 0;
    const sub = token.sub || token.user_id;
    if (!sub) throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
    const payload = Object.assign({
        // Set all required fields to decent defaults
        iss: `https://securetoken.google.com/${project}`,
        aud: project,
        iat,
        exp: iat + 3600,
        auth_time: iat,
        sub,
        user_id: sub,
        firebase: {
            sign_in_provider: 'custom',
            identities: {
            }
        }
    }, token);
    // Unsecured JWTs use the empty string as a signature.
    const signature = '';
    return [
        base64urlEncodeWithoutPadding(JSON.stringify(header)),
        base64urlEncodeWithoutPadding(JSON.stringify(payload)),
        signature
    ].join('.');
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return user agent string
 */ function getUA() {
    if (typeof navigator !== 'undefined' && typeof navigator['userAgent'] === 'string') return navigator['userAgent'];
    else return '';
}
/**
 * Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
 *
 * Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap
 * in the Ripple emulator) nor Cordova `onDeviceReady`, which would normally
 * wait for a callback.
 */ function isMobileCordova() {
    return typeof window !== 'undefined' && // @ts-ignore Setting up an broadly applicable index signature for Window
    // just to deal with this case would probably be a bad idea.
    !!(window['cordova'] || window['phonegap'] || window['PhoneGap']) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA());
}
/**
 * Detect Node.js.
 *
 * @return true if Node.js environment is detected.
 */ // Node detection logic from: https://github.com/iliakan/detect-node/
function isNode() {
    try {
        return Object.prototype.toString.call(global.process) === '[object process]';
    } catch (e) {
        return false;
    }
}
/**
 * Detect Browser Environment
 */ function isBrowser() {
    return typeof self === 'object' && self.self === self;
}
function isBrowserExtension() {
    const runtime = typeof chrome === 'object' ? chrome.runtime : typeof browser === 'object' ? browser.runtime : undefined;
    return typeof runtime === 'object' && runtime.id !== undefined;
}
/**
 * Detect React Native.
 *
 * @return true if ReactNative environment is detected.
 */ function isReactNative() {
    return typeof navigator === 'object' && navigator['product'] === 'ReactNative';
}
/** Detects Electron apps. */ function isElectron() {
    return getUA().indexOf('Electron/') >= 0;
}
/** Detects Internet Explorer. */ function isIE() {
    const ua = getUA();
    return ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0;
}
/** Detects Universal Windows Platform apps. */ function isUWP() {
    return getUA().indexOf('MSAppHost/') >= 0;
}
/**
 * Detect whether the current SDK build is the Node version.
 *
 * @return true if it's the Node SDK build.
 */ function isNodeSdk() {
    return CONSTANTS.NODE_CLIENT === true || CONSTANTS.NODE_ADMIN === true;
}
/** Returns true if we are running in Safari. */ function isSafari() {
    return !isNode() && navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome');
}
/**
 * This method checks if indexedDB is supported by current browser/service worker context
 * @return true if indexedDB is supported by current browser/service worker context
 */ function isIndexedDBAvailable() {
    return typeof indexedDB === 'object';
}
/**
 * This method validates browser/sw context for indexedDB by opening a dummy indexedDB database and reject
 * if errors occur during the database open operation.
 *
 * @throws exception if current browser/sw context can't run idb.open (ex: Safari iframe, Firefox
 * private browsing)
 */ function validateIndexedDBOpenable() {
    return new Promise((resolve, reject)=>{
        try {
            let preExist = true;
            const DB_CHECK_NAME = 'validate-browser-context-for-indexeddb-analytics-module';
            const request = self.indexedDB.open(DB_CHECK_NAME);
            request.onsuccess = ()=>{
                request.result.close();
                // delete database only when it doesn't pre-exist
                if (!preExist) self.indexedDB.deleteDatabase(DB_CHECK_NAME);
                resolve(true);
            };
            request.onupgradeneeded = ()=>{
                preExist = false;
            };
            request.onerror = ()=>{
                var _a;
                reject(((_a = request.error) === null || _a === void 0 ? void 0 : _a.message) || '');
            };
        } catch (error) {
            reject(error);
        }
    });
}
/**
 *
 * This method checks whether cookie is enabled within current browser
 * @return true if cookie is enabled within current browser
 */ function areCookiesEnabled() {
    if (typeof navigator === 'undefined' || !navigator.cookieEnabled) return false;
    return true;
}
/**
 * Polyfill for `globalThis` object.
 * @returns the `globalThis` object for the given environment.
 */ function getGlobal() {
    if (typeof self !== 'undefined') return self;
    if (typeof window !== 'undefined') return window;
    if (typeof global !== 'undefined') return global;
    throw new Error('Unable to locate global object.');
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @fileoverview Standardized Firebase Error.
 *
 * Usage:
 *
 *   // Typescript string literals for type-safe codes
 *   type Err =
 *     'unknown' |
 *     'object-not-found'
 *     ;
 *
 *   // Closure enum for type-safe error codes
 *   // at-enum {string}
 *   var Err = {
 *     UNKNOWN: 'unknown',
 *     OBJECT_NOT_FOUND: 'object-not-found',
 *   }
 *
 *   let errors: Map<Err, string> = {
 *     'generic-error': "Unknown error",
 *     'file-not-found': "Could not find file: {$file}",
 *   };
 *
 *   // Type-safe function - must pass a valid error code as param.
 *   let error = new ErrorFactory<Err>('service', 'Service', errors);
 *
 *   ...
 *   throw error.create(Err.GENERIC);
 *   ...
 *   throw error.create(Err.FILE_NOT_FOUND, {'file': fileName});
 *   ...
 *   // Service: Could not file file: foo.txt (service/file-not-found).
 *
 *   catch (e) {
 *     assert(e.message === "Could not find file: foo.txt.");
 *     if (e.code === 'service/file-not-found') {
 *       console.log("Could not read file: " + e['file']);
 *     }
 *   }
 */ const ERROR_NAME = 'FirebaseError';
// Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
class FirebaseError extends Error {
    constructor(/** The error code for this error. */ code, message, /** Custom data for this error. */ customData){
        super(message);
        this.code = code;
        this.customData = customData;
        /** The custom name for all FirebaseErrors. */ this.name = ERROR_NAME;
        // Fix For ES5
        // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(this, FirebaseError.prototype);
        // Maintains proper stack trace for where our error was thrown.
        // Only available on V8.
        if (Error.captureStackTrace) Error.captureStackTrace(this, ErrorFactory.prototype.create);
    }
}
class ErrorFactory {
    constructor(service, serviceName, errors){
        this.service = service;
        this.serviceName = serviceName;
        this.errors = errors;
    }
    create(code, ...data) {
        const customData = data[0] || {
        };
        const fullCode = `${this.service}/${code}`;
        const template = this.errors[code];
        const message = template ? replaceTemplate(template, customData) : 'Error';
        // Service Name: Error message (service/code).
        const fullMessage = `${this.serviceName}: ${message} (${fullCode}).`;
        const error = new FirebaseError(fullCode, fullMessage, customData);
        return error;
    }
}
function replaceTemplate(template, data) {
    return template.replace(PATTERN, (_, key)=>{
        const value = data[key];
        return value != null ? String(value) : `<${key}?>`;
    });
}
const PATTERN = /\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Evaluates a JSON string into a javascript object.
 *
 * @param {string} str A string containing JSON.
 * @return {*} The javascript object representing the specified JSON.
 */ function jsonEval(str) {
    return JSON.parse(str);
}
/**
 * Returns JSON representing a javascript object.
 * @param {*} data Javascript object to be stringified.
 * @return {string} The JSON contents of the object.
 */ function stringify(data) {
    return JSON.stringify(data);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Decodes a Firebase auth. token into constituent parts.
 *
 * Notes:
 * - May return with invalid / incomplete claims if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */ const decode = function(token) {
    let header = {
    }, claims = {
    }, data = {
    }, signature = '';
    try {
        const parts = token.split('.');
        header = jsonEval(base64Decode(parts[0]) || '');
        claims = jsonEval(base64Decode(parts[1]) || '');
        signature = parts[2];
        data = claims['d'] || {
        };
        delete claims['d'];
    } catch (e) {
    }
    return {
        header,
        claims,
        data,
        signature
    };
};
/**
 * Decodes a Firebase auth. token and checks the validity of its time-based claims. Will return true if the
 * token is within the time window authorized by the 'nbf' (not-before) and 'iat' (issued-at) claims.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */ const isValidTimestamp = function(token) {
    const claims = decode(token).claims;
    const now = Math.floor(new Date().getTime() / 1000);
    let validSince = 0, validUntil = 0;
    if (typeof claims === 'object') {
        if (claims.hasOwnProperty('nbf')) validSince = claims['nbf'];
        else if (claims.hasOwnProperty('iat')) validSince = claims['iat'];
        if (claims.hasOwnProperty('exp')) validUntil = claims['exp'];
        else // token will expire after 24h by default
        validUntil = validSince + 86400;
    }
    return !!now && !!validSince && !!validUntil && now >= validSince && now <= validUntil;
};
/**
 * Decodes a Firebase auth. token and returns its issued at time if valid, null otherwise.
 *
 * Notes:
 * - May return null if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */ const issuedAtTime = function(token) {
    const claims = decode(token).claims;
    if (typeof claims === 'object' && claims.hasOwnProperty('iat')) return claims['iat'];
    return null;
};
/**
 * Decodes a Firebase auth. token and checks the validity of its format. Expects a valid issued-at time.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */ const isValidFormat = function(token) {
    const decoded = decode(token), claims = decoded.claims;
    return !!claims && typeof claims === 'object' && claims.hasOwnProperty('iat');
};
/**
 * Attempts to peer into an auth token and determine if it's an admin auth token by looking at the claims portion.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */ const isAdmin = function(token) {
    const claims = decode(token).claims;
    return typeof claims === 'object' && claims['admin'] === true;
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function contains(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
function safeGet(obj, key) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) return obj[key];
    else return undefined;
}
function isEmpty(obj) {
    for(const key in obj){
        if (Object.prototype.hasOwnProperty.call(obj, key)) return false;
    }
    return true;
}
function map(obj, fn, contextObj) {
    const res = {
    };
    for(const key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) res[key] = fn.call(contextObj, obj[key], key, obj);
    return res;
}
/**
 * Deep equal two objects. Support Arrays and Objects.
 */ function deepEqual(a, b) {
    if (a === b) return true;
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    for (const k of aKeys){
        if (!bKeys.includes(k)) return false;
        const aProp = a[k];
        const bProp = b[k];
        if (isObject(aProp) && isObject(bProp)) {
            if (!deepEqual(aProp, bProp)) return false;
        } else if (aProp !== bProp) return false;
    }
    for (const k1 of bKeys){
        if (!aKeys.includes(k1)) return false;
    }
    return true;
}
function isObject(thing) {
    return thing !== null && typeof thing === 'object';
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
 * params object (e.g. {arg: 'val', arg2: 'val2'})
 * Note: You must prepend it with ? when adding it to a URL.
 */ function querystring(querystringParams) {
    const params = [];
    for (const [key, value] of Object.entries(querystringParams))if (Array.isArray(value)) value.forEach((arrayVal)=>{
        params.push(encodeURIComponent(key) + '=' + encodeURIComponent(arrayVal));
    });
    else params.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
    return params.length ? '&' + params.join('&') : '';
}
/**
 * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object
 * (e.g. {arg: 'val', arg2: 'val2'})
 */ function querystringDecode(querystring1) {
    const obj = {
    };
    const tokens = querystring1.replace(/^\?/, '').split('&');
    tokens.forEach((token)=>{
        if (token) {
            const [key, value] = token.split('=');
            obj[decodeURIComponent(key)] = decodeURIComponent(value);
        }
    });
    return obj;
}
/**
 * Extract the query string part of a URL, including the leading question mark (if present).
 */ function extractQuerystring(url) {
    const queryStart = url.indexOf('?');
    if (!queryStart) return '';
    const fragmentStart = url.indexOf('#', queryStart);
    return url.substring(queryStart, fragmentStart > 0 ? fragmentStart : undefined);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @fileoverview SHA-1 cryptographic hash.
 * Variable names follow the notation in FIPS PUB 180-3:
 * http://csrc.nist.gov/publications/fips/fips180-3/fips180-3_final.pdf.
 *
 * Usage:
 *   var sha1 = new sha1();
 *   sha1.update(bytes);
 *   var hash = sha1.digest();
 *
 * Performance:
 *   Chrome 23:   ~400 Mbit/s
 *   Firefox 16:  ~250 Mbit/s
 *
 */ /**
 * SHA-1 cryptographic hash constructor.
 *
 * The properties declared here are discussed in the above algorithm document.
 * @constructor
 * @final
 * @struct
 */ class Sha1 {
    constructor(){
        /**
         * Holds the previous values of accumulated variables a-e in the compress_
         * function.
         * @private
         */ this.chain_ = [];
        /**
         * A buffer holding the partially computed hash result.
         * @private
         */ this.buf_ = [];
        /**
         * An array of 80 bytes, each a part of the message to be hashed.  Referred to
         * as the message schedule in the docs.
         * @private
         */ this.W_ = [];
        /**
         * Contains data needed to pad messages less than 64 bytes.
         * @private
         */ this.pad_ = [];
        /**
         * @private {number}
         */ this.inbuf_ = 0;
        /**
         * @private {number}
         */ this.total_ = 0;
        this.blockSize = 64;
        this.pad_[0] = 128;
        for(let i = 1; i < this.blockSize; ++i)this.pad_[i] = 0;
        this.reset();
    }
    reset() {
        this.chain_[0] = 1732584193;
        this.chain_[1] = 4023233417;
        this.chain_[2] = 2562383102;
        this.chain_[3] = 271733878;
        this.chain_[4] = 3285377520;
        this.inbuf_ = 0;
        this.total_ = 0;
    }
    /**
     * Internal compress helper function.
     * @param buf Block to compress.
     * @param offset Offset of the block in the buffer.
     * @private
     */ compress_(buf, offset) {
        if (!offset) offset = 0;
        const W = this.W_;
        // get 16 big endian words
        if (typeof buf === 'string') for(let i = 0; i < 16; i++){
            // TODO(user): [bug 8140122] Recent versions of Safari for Mac OS and iOS
            // have a bug that turns the post-increment ++ operator into pre-increment
            // during JIT compilation.  We have code that depends heavily on SHA-1 for
            // correctness and which is affected by this bug, so I've removed all uses
            // of post-increment ++ in which the result value is used.  We can revert
            // this change once the Safari bug
            // (https://bugs.webkit.org/show_bug.cgi?id=109036) has been fixed and
            // most clients have been updated.
            W[i] = buf.charCodeAt(offset) << 24 | buf.charCodeAt(offset + 1) << 16 | buf.charCodeAt(offset + 2) << 8 | buf.charCodeAt(offset + 3);
            offset += 4;
        }
        else for(let i1 = 0; i1 < 16; i1++){
            W[i1] = buf[offset] << 24 | buf[offset + 1] << 16 | buf[offset + 2] << 8 | buf[offset + 3];
            offset += 4;
        }
        // expand to 80 words
        for(let i2 = 16; i2 < 80; i2++){
            const t = W[i2 - 3] ^ W[i2 - 8] ^ W[i2 - 14] ^ W[i2 - 16];
            W[i2] = (t << 1 | t >>> 31) & 4294967295;
        }
        let a = this.chain_[0];
        let b = this.chain_[1];
        let c = this.chain_[2];
        let d = this.chain_[3];
        let e = this.chain_[4];
        let f, k;
        // TODO(user): Try to unroll this loop to speed up the computation.
        for(let i3 = 0; i3 < 80; i3++){
            if (i3 < 40) {
                if (i3 < 20) {
                    f = d ^ b & (c ^ d);
                    k = 1518500249;
                } else {
                    f = b ^ c ^ d;
                    k = 1859775393;
                }
            } else if (i3 < 60) {
                f = b & c | d & (b | c);
                k = 2400959708;
            } else {
                f = b ^ c ^ d;
                k = 3395469782;
            }
            const t = (a << 5 | a >>> 27) + f + e + k + W[i3] & 4294967295;
            e = d;
            d = c;
            c = (b << 30 | b >>> 2) & 4294967295;
            b = a;
            a = t;
        }
        this.chain_[0] = this.chain_[0] + a & 4294967295;
        this.chain_[1] = this.chain_[1] + b & 4294967295;
        this.chain_[2] = this.chain_[2] + c & 4294967295;
        this.chain_[3] = this.chain_[3] + d & 4294967295;
        this.chain_[4] = this.chain_[4] + e & 4294967295;
    }
    update(bytes, length) {
        // TODO(johnlenz): tighten the function signature and remove this check
        if (bytes == null) return;
        if (length === undefined) length = bytes.length;
        const lengthMinusBlock = length - this.blockSize;
        let n = 0;
        // Using local instead of member variables gives ~5% speedup on Firefox 16.
        const buf = this.buf_;
        let inbuf = this.inbuf_;
        // The outer while loop should execute at most twice.
        while(n < length){
            // When we have no data in the block to top up, we can directly process the
            // input buffer (assuming it contains sufficient data). This gives ~25%
            // speedup on Chrome 23 and ~15% speedup on Firefox 16, but requires that
            // the data is provided in large chunks (or in multiples of 64 bytes).
            if (inbuf === 0) while(n <= lengthMinusBlock){
                this.compress_(bytes, n);
                n += this.blockSize;
            }
            if (typeof bytes === 'string') while(n < length){
                buf[inbuf] = bytes.charCodeAt(n);
                ++inbuf;
                ++n;
                if (inbuf === this.blockSize) {
                    this.compress_(buf);
                    inbuf = 0;
                    break;
                }
            }
            else while(n < length){
                buf[inbuf] = bytes[n];
                ++inbuf;
                ++n;
                if (inbuf === this.blockSize) {
                    this.compress_(buf);
                    inbuf = 0;
                    break;
                }
            }
        }
        this.inbuf_ = inbuf;
        this.total_ += length;
    }
    /** @override */ digest() {
        const digest = [];
        let totalBits = this.total_ * 8;
        // Add pad 0x80 0x00*.
        if (this.inbuf_ < 56) this.update(this.pad_, 56 - this.inbuf_);
        else this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
        // Add # bits.
        for(let i = this.blockSize - 1; i >= 56; i--){
            this.buf_[i] = totalBits & 255;
            totalBits /= 256; // Don't use bit-shifting here!
        }
        this.compress_(this.buf_);
        let n = 0;
        for(let i4 = 0; i4 < 5; i4++)for(let j = 24; j >= 0; j -= 8){
            digest[n] = this.chain_[i4] >> j & 255;
            ++n;
        }
        return digest;
    }
}
/**
 * Helper to make a Subscribe function (just like Promise helps make a
 * Thenable).
 *
 * @param executor Function which can make calls to a single Observer
 *     as a proxy.
 * @param onNoObservers Callback when count of Observers goes to zero.
 */ function createSubscribe(executor, onNoObservers) {
    const proxy = new ObserverProxy(executor, onNoObservers);
    return proxy.subscribe.bind(proxy);
}
/**
 * Implement fan-out for any number of Observers attached via a subscribe
 * function.
 */ class ObserverProxy {
    /**
     * @param executor Function which can make calls to a single Observer
     *     as a proxy.
     * @param onNoObservers Callback when count of Observers goes to zero.
     */ constructor(executor, onNoObservers){
        this.observers = [];
        this.unsubscribes = [];
        this.observerCount = 0;
        // Micro-task scheduling by calling task.then().
        this.task = Promise.resolve();
        this.finalized = false;
        this.onNoObservers = onNoObservers;
        // Call the executor asynchronously so subscribers that are called
        // synchronously after the creation of the subscribe function
        // can still receive the very first value generated in the executor.
        this.task.then(()=>{
            executor(this);
        }).catch((e)=>{
            this.error(e);
        });
    }
    next(value) {
        this.forEachObserver((observer)=>{
            observer.next(value);
        });
    }
    error(error) {
        this.forEachObserver((observer)=>{
            observer.error(error);
        });
        this.close(error);
    }
    complete() {
        this.forEachObserver((observer)=>{
            observer.complete();
        });
        this.close();
    }
    /**
     * Subscribe function that can be used to add an Observer to the fan-out list.
     *
     * - We require that no event is sent to a subscriber sychronously to their
     *   call to subscribe().
     */ subscribe(nextOrObserver, error, complete) {
        let observer;
        if (nextOrObserver === undefined && error === undefined && complete === undefined) throw new Error('Missing Observer.');
        // Assemble an Observer object when passed as callback functions.
        if (implementsAnyMethods(nextOrObserver, [
            'next',
            'error',
            'complete'
        ])) observer = nextOrObserver;
        else observer = {
            next: nextOrObserver,
            error,
            complete
        };
        if (observer.next === undefined) observer.next = noop;
        if (observer.error === undefined) observer.error = noop;
        if (observer.complete === undefined) observer.complete = noop;
        const unsub = this.unsubscribeOne.bind(this, this.observers.length);
        // Attempt to subscribe to a terminated Observable - we
        // just respond to the Observer with the final error or complete
        // event.
        if (this.finalized) // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(()=>{
            try {
                if (this.finalError) observer.error(this.finalError);
                else observer.complete();
            } catch (e) {
            // nothing
            }
            return;
        });
        this.observers.push(observer);
        return unsub;
    }
    // Unsubscribe is synchronous - we guarantee that no events are sent to
    // any unsubscribed Observer.
    unsubscribeOne(i) {
        if (this.observers === undefined || this.observers[i] === undefined) return;
        delete this.observers[i];
        this.observerCount -= 1;
        if (this.observerCount === 0 && this.onNoObservers !== undefined) this.onNoObservers(this);
    }
    forEachObserver(fn) {
        if (this.finalized) // Already closed by previous event....just eat the additional values.
        return;
        // Since sendOne calls asynchronously - there is no chance that
        // this.observers will become undefined.
        for(let i = 0; i < this.observers.length; i++)this.sendOne(i, fn);
    }
    // Call the Observer via one of it's callback function. We are careful to
    // confirm that the observe has not been unsubscribed since this asynchronous
    // function had been queued.
    sendOne(i, fn) {
        // Execute the callback asynchronously
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(()=>{
            if (this.observers !== undefined && this.observers[i] !== undefined) try {
                fn(this.observers[i]);
            } catch (e) {
                // Ignore exceptions raised in Observers or missing methods of an
                // Observer.
                // Log error to console. b/31404806
                if (typeof console !== 'undefined' && console.error) console.error(e);
            }
        });
    }
    close(err) {
        if (this.finalized) return;
        this.finalized = true;
        if (err !== undefined) this.finalError = err;
        // Proxy is no longer needed - garbage collect references
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(()=>{
            this.observers = undefined;
            this.onNoObservers = undefined;
        });
    }
}
/** Turn synchronous function into one called asynchronously. */ // eslint-disable-next-line @typescript-eslint/ban-types
function async(fn, onError) {
    return (...args)=>{
        Promise.resolve(true).then(()=>{
            fn(...args);
        }).catch((error)=>{
            if (onError) onError(error);
        });
    };
}
/**
 * Return true if the object passed in implements any of the named methods.
 */ function implementsAnyMethods(obj, methods) {
    if (typeof obj !== 'object' || obj === null) return false;
    for (const method of methods){
        if (method in obj && typeof obj[method] === 'function') return true;
    }
    return false;
}
function noop() {
// do nothing
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Check to make sure the appropriate number of arguments are provided for a public function.
 * Throws an error if it fails.
 *
 * @param fnName The function name
 * @param minCount The minimum number of arguments to allow for the function call
 * @param maxCount The maximum number of argument to allow for the function call
 * @param argCount The actual number of arguments provided.
 */ const validateArgCount = function(fnName, minCount, maxCount, argCount) {
    let argError;
    if (argCount < minCount) argError = 'at least ' + minCount;
    else if (argCount > maxCount) argError = maxCount === 0 ? 'none' : 'no more than ' + maxCount;
    if (argError) {
        const error = fnName + ' failed: Was called with ' + argCount + (argCount === 1 ? ' argument.' : ' arguments.') + ' Expects ' + argError + '.';
        throw new Error(error);
    }
};
/**
 * Generates a string to prefix an error message about failed argument validation
 *
 * @param fnName The function name
 * @param argName The name of the argument
 * @return The prefix to add to the error thrown for validation.
 */ function errorPrefix(fnName, argName) {
    return `${fnName} failed: ${argName} argument `;
}
/**
 * @param fnName
 * @param argumentNumber
 * @param namespace
 * @param optional
 */ function validateNamespace(fnName, namespace, optional) {
    if (optional && !namespace) return;
    if (typeof namespace !== 'string') //TODO: I should do more validation here. We only allow certain chars in namespaces.
    throw new Error(errorPrefix(fnName, 'namespace') + 'must be a valid firebase namespace.');
}
function validateCallback(fnName, argumentName, // eslint-disable-next-line @typescript-eslint/ban-types
callback, optional) {
    if (optional && !callback) return;
    if (typeof callback !== 'function') throw new Error(errorPrefix(fnName, argumentName) + 'must be a valid function.');
}
function validateContextObject(fnName, argumentName, context, optional) {
    if (optional && !context) return;
    if (typeof context !== 'object' || context === null) throw new Error(errorPrefix(fnName, argumentName) + 'must be a valid context object.');
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Code originally came from goog.crypt.stringToUtf8ByteArray, but for some reason they
// automatically replaced '\r\n' with '\n', and they didn't handle surrogate pairs,
// so it's been modified.
// Note that not all Unicode characters appear as single characters in JavaScript strings.
// fromCharCode returns the UTF-16 encoding of a character - so some Unicode characters
// use 2 characters in Javascript.  All 4-byte UTF-8 characters begin with a first
// character in the range 0xD800 - 0xDBFF (the first character of a so-called surrogate
// pair).
// See http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.3
/**
 * @param {string} str
 * @return {Array}
 */ const stringToByteArray = function(str) {
    const out = [];
    let p = 0;
    for(let i = 0; i < str.length; i++){
        let c = str.charCodeAt(i);
        // Is this the lead surrogate in a surrogate pair?
        if (c >= 55296 && c <= 56319) {
            const high = c - 55296; // the high 10 bits.
            i++;
            assert(i < str.length, 'Surrogate pair missing trail surrogate.');
            const low = str.charCodeAt(i) - 56320; // the low 10 bits.
            c = 65536 + (high << 10) + low;
        }
        if (c < 128) out[p++] = c;
        else if (c < 2048) {
            out[p++] = c >> 6 | 192;
            out[p++] = c & 63 | 128;
        } else if (c < 65536) {
            out[p++] = c >> 12 | 224;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
        } else {
            out[p++] = c >> 18 | 240;
            out[p++] = c >> 12 & 63 | 128;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
        }
    }
    return out;
};
/**
 * Calculate length without actually converting; useful for doing cheaper validation.
 * @param {string} str
 * @return {number}
 */ const stringLength = function(str) {
    let p = 0;
    for(let i = 0; i < str.length; i++){
        const c = str.charCodeAt(i);
        if (c < 128) p++;
        else if (c < 2048) p += 2;
        else if (c >= 55296 && c <= 56319) {
            // Lead surrogate of a surrogate pair.  The pair together will take 4 bytes to represent.
            p += 4;
            i++; // skip trail surrogate.
        } else p += 3;
    }
    return p;
};
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The amount of milliseconds to exponentially increase.
 */ const DEFAULT_INTERVAL_MILLIS = 1000;
/**
 * The factor to backoff by.
 * Should be a number greater than 1.
 */ const DEFAULT_BACKOFF_FACTOR = 2;
/**
 * The maximum milliseconds to increase to.
 *
 * <p>Visible for testing
 */ const MAX_VALUE_MILLIS = 14400000; // Four hours, like iOS and Android.
/**
 * The percentage of backoff time to randomize by.
 * See
 * http://go/safe-client-behavior#step-1-determine-the-appropriate-retry-interval-to-handle-spike-traffic
 * for context.
 *
 * <p>Visible for testing
 */ const RANDOM_FACTOR = 0.5;
/**
 * Based on the backoff method from
 * https://github.com/google/closure-library/blob/master/closure/goog/math/exponentialbackoff.js.
 * Extracted here so we don't need to pass metadata and a stateful ExponentialBackoff object around.
 */ function calculateBackoffMillis(backoffCount, intervalMillis = DEFAULT_INTERVAL_MILLIS, backoffFactor = DEFAULT_BACKOFF_FACTOR) {
    // Calculates an exponentially increasing value.
    // Deviation: calculates value from count and a constant interval, so we only need to save value
    // and count to restore state.
    const currBaseValue = intervalMillis * Math.pow(backoffFactor, backoffCount);
    // A random "fuzz" to avoid waves of retries.
    // Deviation: randomFactor is required.
    const randomWait = Math.round(// A fraction of the backoff value to add/subtract.
    // Deviation: changes multiplication order to improve readability.
    RANDOM_FACTOR * currBaseValue * (Math.random() - 0.5) * 2);
    // Limits backoff to max to avoid effectively permanent backoff.
    return Math.min(MAX_VALUE_MILLIS, currBaseValue + randomWait);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provide English ordinal letters after a number
 */ function ordinal(i) {
    if (!Number.isFinite(i)) return `${i}`;
    return i + indicator(i);
}
function indicator(i) {
    i = Math.abs(i);
    const cent = i % 100;
    if (cent >= 10 && cent <= 20) return 'th';
    const dec = i % 10;
    if (dec === 1) return 'st';
    if (dec === 2) return 'nd';
    if (dec === 3) return 'rd';
    return 'th';
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function getModularInstance(service) {
    if (service && service._delegate) return service._delegate;
    else return service;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"kVR2k"}],"FfmSN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LogLevel", ()=>LogLevel
);
parcelHelpers.export(exports, "Logger", ()=>Logger
);
parcelHelpers.export(exports, "setLogLevel", ()=>setLogLevel
);
parcelHelpers.export(exports, "setUserLogHandler", ()=>setUserLogHandler
);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A container for all of the Logger instances
 */ const instances = [];
/**
 * The JS SDK supports 5 log levels and also allows a user the ability to
 * silence the logs altogether.
 *
 * The order is a follows:
 * DEBUG < VERBOSE < INFO < WARN < ERROR
 *
 * All of the log types above the current log level will be captured (i.e. if
 * you set the log level to `INFO`, errors will still be logged, but `DEBUG` and
 * `VERBOSE` logs will not)
 */ var LogLevel;
(function(LogLevel1) {
    LogLevel1[LogLevel1["DEBUG"] = 0] = "DEBUG";
    LogLevel1[LogLevel1["VERBOSE"] = 1] = "VERBOSE";
    LogLevel1[LogLevel1["INFO"] = 2] = "INFO";
    LogLevel1[LogLevel1["WARN"] = 3] = "WARN";
    LogLevel1[LogLevel1["ERROR"] = 4] = "ERROR";
    LogLevel1[LogLevel1["SILENT"] = 5] = "SILENT";
})(LogLevel || (LogLevel = {
}));
const levelStringToEnum = {
    'debug': LogLevel.DEBUG,
    'verbose': LogLevel.VERBOSE,
    'info': LogLevel.INFO,
    'warn': LogLevel.WARN,
    'error': LogLevel.ERROR,
    'silent': LogLevel.SILENT
};
/**
 * The default log level
 */ const defaultLogLevel = LogLevel.INFO;
/**
 * By default, `console.debug` is not displayed in the developer console (in
 * chrome). To avoid forcing users to have to opt-in to these logs twice
 * (i.e. once for firebase, and once in the console), we are sending `DEBUG`
 * logs to the `console.log` function.
 */ const ConsoleMethod = {
    [LogLevel.DEBUG]: 'log',
    [LogLevel.VERBOSE]: 'log',
    [LogLevel.INFO]: 'info',
    [LogLevel.WARN]: 'warn',
    [LogLevel.ERROR]: 'error'
};
/**
 * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
 * messages on to their corresponding console counterparts (if the log method
 * is supported by the current log level)
 */ const defaultLogHandler = (instance, logType, ...args)=>{
    if (logType < instance.logLevel) return;
    const now = new Date().toISOString();
    const method = ConsoleMethod[logType];
    if (method) console[method](`[${now}]  ${instance.name}:`, ...args);
    else throw new Error(`Attempted to log a message with an invalid logType (value: ${logType})`);
};
class Logger {
    /**
     * Gives you an instance of a Logger to capture messages according to
     * Firebase's logging scheme.
     *
     * @param name The name that the logs will be associated with
     */ constructor(name){
        this.name = name;
        /**
         * The log level of the given Logger instance.
         */ this._logLevel = defaultLogLevel;
        /**
         * The main (internal) log handler for the Logger instance.
         * Can be set to a new function in internal package code but not by user.
         */ this._logHandler = defaultLogHandler;
        /**
         * The optional, additional, user-defined log handler for the Logger instance.
         */ this._userLogHandler = null;
        /**
         * Capture the current instance for later use
         */ instances.push(this);
    }
    get logLevel() {
        return this._logLevel;
    }
    set logLevel(val) {
        if (!(val in LogLevel)) throw new TypeError(`Invalid value "${val}" assigned to \`logLevel\``);
        this._logLevel = val;
    }
    // Workaround for setter/getter having to be the same type.
    setLogLevel(val) {
        this._logLevel = typeof val === 'string' ? levelStringToEnum[val] : val;
    }
    get logHandler() {
        return this._logHandler;
    }
    set logHandler(val) {
        if (typeof val !== 'function') throw new TypeError('Value assigned to `logHandler` must be a function');
        this._logHandler = val;
    }
    get userLogHandler() {
        return this._userLogHandler;
    }
    set userLogHandler(val) {
        this._userLogHandler = val;
    }
    /**
     * The functions below are all based on the `console` interface
     */ debug(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.DEBUG, ...args);
        this._logHandler(this, LogLevel.DEBUG, ...args);
    }
    log(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.VERBOSE, ...args);
        this._logHandler(this, LogLevel.VERBOSE, ...args);
    }
    info(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.INFO, ...args);
        this._logHandler(this, LogLevel.INFO, ...args);
    }
    warn(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.WARN, ...args);
        this._logHandler(this, LogLevel.WARN, ...args);
    }
    error(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.ERROR, ...args);
        this._logHandler(this, LogLevel.ERROR, ...args);
    }
}
function setLogLevel(level) {
    instances.forEach((inst)=>{
        inst.setLogLevel(level);
    });
}
function setUserLogHandler(logCallback, options) {
    for (const instance1 of instances){
        let customLogLevel = null;
        if (options && options.level) customLogLevel = levelStringToEnum[options.level];
        if (logCallback === null) instance1.userLogHandler = null;
        else instance1.userLogHandler = (instance, level, ...args)=>{
            const message = args.map((arg)=>{
                if (arg == null) return null;
                else if (typeof arg === 'string') return arg;
                else if (typeof arg === 'number' || typeof arg === 'boolean') return arg.toString();
                else if (arg instanceof Error) return arg.message;
                else try {
                    return JSON.stringify(arg);
                } catch (ignored) {
                    return null;
                }
            }).filter((arg)=>arg
            ).join(' ');
            if (level >= (customLogLevel !== null && customLogLevel !== void 0 ? customLogLevel : instance.logLevel)) logCallback({
                level: LogLevel[level].toLowerCase(),
                message,
                args,
                type: instance.name
            });
        };
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"kVR2k"}],"4YFBI":[function(require,module,exports) {
!function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.QRCodeStyling = e() : t.QRCodeStyling = e();
}(self, function() {
    return (()=>{
        var t1 = {
            192: (t2, e2)=>{
                var r2, n1, o1 = function() {
                    var t3 = function(t4, e4) {
                        var r4 = t4, n3 = a1[e4], o3 = null, i2 = 0, u2 = null, v2 = [], w2 = {
                        }, m = function(t5, e5) {
                            o3 = (function(t) {
                                for(var e = new Array(t), r = 0; r < t; r += 1){
                                    e[r] = new Array(t);
                                    for(var n = 0; n < t; n += 1)e[r][n] = null;
                                }
                                return e;
                            })(i2 = 4 * r4 + 17), b(0, 0), b(i2 - 7, 0), b(0, i2 - 7), x(), _(), M(t5, e5), r4 >= 7 && S(t5), null == u2 && (u2 = A(r4, n3, v2)), C(u2, e5);
                        }, b = function(t, e) {
                            for(var r = -1; r <= 7; r += 1)if (!(t + r <= -1 || i2 <= t + r)) for(var n = -1; n <= 7; n += 1)e + n <= -1 || i2 <= e + n || (o3[t + r][e + n] = 0 <= r && r <= 6 && (0 == n || 6 == n) || 0 <= n && n <= 6 && (0 == r || 6 == r) || 2 <= r && r <= 4 && 2 <= n && n <= 4);
                        }, _ = function() {
                            for(var t = 8; t < i2 - 8; t += 1)null == o3[t][6] && (o3[t][6] = t % 2 == 0);
                            for(var e = 8; e < i2 - 8; e += 1)null == o3[6][e] && (o3[6][e] = e % 2 == 0);
                        }, x = function() {
                            for(var t = s1.getPatternPosition(r4), e = 0; e < t.length; e += 1)for(var n = 0; n < t.length; n += 1){
                                var i = t[e], a = t[n];
                                if (null == o3[i][a]) for(var u = -2; u <= 2; u += 1)for(var h = -2; h <= 2; h += 1)o3[i + u][a + h] = -2 == u || 2 == u || -2 == h || 2 == h || 0 == u && 0 == h;
                            }
                        }, S = function(t) {
                            for(var e = s1.getBCHTypeNumber(r4), n = 0; n < 18; n += 1){
                                var a = !t && 1 == (e >> n & 1);
                                o3[Math.floor(n / 3)][n % 3 + i2 - 8 - 3] = a;
                            }
                            for(n = 0; n < 18; n += 1)a = !t && 1 == (e >> n & 1), o3[n % 3 + i2 - 8 - 3][Math.floor(n / 3)] = a;
                        }, M = function(t, e) {
                            for(var r = n3 << 3 | e, a = s1.getBCHTypeInfo(r), u = 0; u < 15; u += 1){
                                var h = !t && 1 == (a >> u & 1);
                                u < 6 ? o3[u][8] = h : u < 8 ? o3[u + 1][8] = h : o3[i2 - 15 + u][8] = h;
                            }
                            for(u = 0; u < 15; u += 1)h = !t && 1 == (a >> u & 1), u < 8 ? o3[8][i2 - u - 1] = h : u < 9 ? o3[8][15 - u - 1 + 1] = h : o3[8][15 - u - 1] = h;
                            o3[i2 - 8][8] = !t;
                        }, C = function(t, e) {
                            for(var r = -1, n = i2 - 1, a = 7, u = 0, h = s1.getMaskFunction(e), c = i2 - 1; c > 0; c -= 2)for(6 == c && (c -= 1);;){
                                for(var l = 0; l < 2; l += 1)if (null == o3[n][c - l]) {
                                    var d = !1;
                                    u < t.length && (d = 1 == (t[u] >>> a & 1)), h(n, c - l) && (d = !d), o3[n][c - l] = d, -1 == (a -= 1) && (u += 1, a = 7);
                                }
                                if ((n += r) < 0 || i2 <= n) {
                                    n -= r, r = -r;
                                    break;
                                }
                            }
                        }, A = function(t6, e6, r5) {
                            for(var n4 = c1.getRSBlocks(t6, e6), o4 = l1(), i3 = 0; i3 < r5.length; i3 += 1){
                                var a = r5[i3];
                                o4.put(a.getMode(), 4), o4.put(a.getLength(), s1.getLengthInBits(a.getMode(), t6)), a.write(o4);
                            }
                            var u3 = 0;
                            for(i3 = 0; i3 < n4.length; i3 += 1)u3 += n4[i3].dataCount;
                            if (o4.getLengthInBits() > 8 * u3) throw "code length overflow. (" + o4.getLengthInBits() + ">" + 8 * u3 + ")";
                            for(o4.getLengthInBits() + 4 <= 8 * u3 && o4.put(0, 4); o4.getLengthInBits() % 8 != 0;)o4.putBit(!1);
                            for(; !(o4.getLengthInBits() >= 8 * u3 || (o4.put(236, 8), o4.getLengthInBits() >= 8 * u3));)o4.put(17, 8);
                            return (function(t, e) {
                                for(var r = 0, n = 0, o = 0, i = new Array(e.length), a = new Array(e.length), u = 0; u < e.length; u += 1){
                                    var c = e[u].dataCount, l = e[u].totalCount - c;
                                    n = Math.max(n, c), o = Math.max(o, l), i[u] = new Array(c);
                                    for(var d = 0; d < i[u].length; d += 1)i[u][d] = 255 & t.getBuffer()[d + r];
                                    r += c;
                                    var f = s1.getErrorCorrectPolynomial(l), g = h1(i[u], f.getLength() - 1).mod(f);
                                    for(a[u] = new Array(f.getLength() - 1), d = 0; d < a[u].length; d += 1){
                                        var p = d + g.getLength() - a[u].length;
                                        a[u][d] = p >= 0 ? g.getAt(p) : 0;
                                    }
                                }
                                var v = 0;
                                for(d = 0; d < e.length; d += 1)v += e[d].totalCount;
                                var w = new Array(v), y = 0;
                                for(d = 0; d < n; d += 1)for(u = 0; u < e.length; u += 1)d < i[u].length && (w[y] = i[u][d], y += 1);
                                for(d = 0; d < o; d += 1)for(u = 0; u < e.length; u += 1)d < a[u].length && (w[y] = a[u][d], y += 1);
                                return w;
                            })(o4, n4);
                        };
                        w2.addData = function(t, e) {
                            var r = null;
                            switch(e = e || "Byte"){
                                case "Numeric":
                                    r = d1(t);
                                    break;
                                case "Alphanumeric":
                                    r = f1(t);
                                    break;
                                case "Byte":
                                    r = g1(t);
                                    break;
                                case "Kanji":
                                    r = p1(t);
                                    break;
                                default:
                                    throw "mode:" + e;
                            }
                            v2.push(r), u2 = null;
                        }, w2.isDark = function(t, e) {
                            if (t < 0 || i2 <= t || e < 0 || i2 <= e) throw t + "," + e;
                            return o3[t][e];
                        }, w2.getModuleCount = function() {
                            return i2;
                        }, w2.make = function() {
                            if (r4 < 1) {
                                for(var t = 1; t < 40; t++){
                                    for(var e = c1.getRSBlocks(t, n3), o = l1(), i = 0; i < v2.length; i++){
                                        var a = v2[i];
                                        o.put(a.getMode(), 4), o.put(a.getLength(), s1.getLengthInBits(a.getMode(), t)), a.write(o);
                                    }
                                    var u = 0;
                                    for(i = 0; i < e.length; i++)u += e[i].dataCount;
                                    if (o.getLengthInBits() <= 8 * u) break;
                                }
                                r4 = t;
                            }
                            m(!1, function() {
                                for(var t = 0, e = 0, r = 0; r < 8; r += 1){
                                    m(!0, r);
                                    var n = s1.getLostPoint(w2);
                                    (0 == r || t > n) && (t = n, e = r);
                                }
                                return e;
                            }());
                        }, w2.createTableTag = function(t, e) {
                            t = t || 2;
                            var r = "";
                            r += '<table style="', r += " border-width: 0px; border-style: none;", r += " border-collapse: collapse;", r += " padding: 0px; margin: " + (e = void 0 === e ? 4 * t : e) + "px;", r += '">', r += "<tbody>";
                            for(var n = 0; n < w2.getModuleCount(); n += 1){
                                r += "<tr>";
                                for(var o = 0; o < w2.getModuleCount(); o += 1)r += '<td style="', r += " border-width: 0px; border-style: none;", r += " border-collapse: collapse;", r += " padding: 0px; margin: 0px;", r += " width: " + t + "px;", r += " height: " + t + "px;", r += " background-color: ", r += w2.isDark(n, o) ? "#000000" : "#ffffff", r += ";", r += '"/>';
                                r += "</tr>";
                            }
                            return (r += "</tbody>") + "</table>";
                        }, w2.createSvgTag = function(t, e, r, n) {
                            var o = {
                            };
                            "object" == typeof arguments[0] && (t = (o = arguments[0]).cellSize, e = o.margin, r = o.alt, n = o.title), t = t || 2, e = void 0 === e ? 4 * t : e, (r = "string" == typeof r ? {
                                text: r
                            } : r || {
                            }).text = r.text || null, r.id = r.text ? r.id || "qrcode-description" : null, (n = "string" == typeof n ? {
                                text: n
                            } : n || {
                            }).text = n.text || null, n.id = n.text ? n.id || "qrcode-title" : null;
                            var i, a, s, u, h = w2.getModuleCount() * t + 2 * e, c = "";
                            for(u = "l" + t + ",0 0," + t + " -" + t + ",0 0,-" + t + "z ", c += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"', c += o.scalable ? "" : ' width="' + h + 'px" height="' + h + 'px"', c += ' viewBox="0 0 ' + h + " " + h + '" ', c += ' preserveAspectRatio="xMinYMin meet"', c += n.text || r.text ? ' role="img" aria-labelledby="' + k([
                                n.id,
                                r.id
                            ].join(" ").trim()) + '"' : "", c += ">", c += n.text ? '<title id="' + k(n.id) + '">' + k(n.text) + "</title>" : "", c += r.text ? '<description id="' + k(r.id) + '">' + k(r.text) + "</description>" : "", c += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>', c += '<path d="', a = 0; a < w2.getModuleCount(); a += 1)for(s = a * t + e, i = 0; i < w2.getModuleCount(); i += 1)w2.isDark(a, i) && (c += "M" + (i * t + e) + "," + s + u);
                            return (c += '" stroke="transparent" fill="black"/>') + "</svg>";
                        }, w2.createDataURL = function(t, e7) {
                            t = t || 2, e7 = void 0 === e7 ? 4 * t : e7;
                            var r6 = w2.getModuleCount() * t + 2 * e7, n = e7, o = r6 - e7;
                            return y1(r6, r6, function(e, r) {
                                if (n <= e && e < o && n <= r && r < o) {
                                    var i = Math.floor((e - n) / t), a = Math.floor((r - n) / t);
                                    return w2.isDark(a, i) ? 0 : 1;
                                }
                                return 1;
                            });
                        }, w2.createImgTag = function(t, e, r) {
                            t = t || 2, e = void 0 === e ? 4 * t : e;
                            var n = w2.getModuleCount() * t + 2 * e, o = "";
                            return o += "<img", o += ' src="', o += w2.createDataURL(t, e), o += '"', o += ' width="', o += n, o += '"', o += ' height="', o += n, o += '"', r && (o += ' alt="', o += k(r), o += '"'), o + "/>";
                        };
                        var k = function(t) {
                            for(var e = "", r = 0; r < t.length; r += 1){
                                var n = t.charAt(r);
                                switch(n){
                                    case "<":
                                        e += "&lt;";
                                        break;
                                    case ">":
                                        e += "&gt;";
                                        break;
                                    case "&":
                                        e += "&amp;";
                                        break;
                                    case '"':
                                        e += "&quot;";
                                        break;
                                    default:
                                        e += n;
                                }
                            }
                            return e;
                        };
                        return w2.createASCII = function(t7, e8) {
                            if ((t7 = t7 || 1) < 2) return (function(t) {
                                t = void 0 === t ? 2 : t;
                                var e, r, n, o, i, a = 1 * w2.getModuleCount() + 2 * t, s = t, u = a - t, h = {
                                    "██": "█",
                                    "█ ": "▀",
                                    " █": "▄",
                                    "  ": " "
                                }, c = {
                                    "██": "▀",
                                    "█ ": "▀",
                                    " █": " ",
                                    "  ": " "
                                }, l = "";
                                for(e = 0; e < a; e += 2){
                                    for(n = Math.floor((e - s) / 1), o = Math.floor((e + 1 - s) / 1), r = 0; r < a; r += 1)i = "█", s <= r && r < u && s <= e && e < u && w2.isDark(n, Math.floor((r - s) / 1)) && (i = " "), s <= r && r < u && s <= e + 1 && e + 1 < u && w2.isDark(o, Math.floor((r - s) / 1)) ? i += " " : i += "█", l += t < 1 && e + 1 >= u ? c[i] : h[i];
                                    l += "\n";
                                }
                                return a % 2 && t > 0 ? l.substring(0, l.length - a - 1) + Array(a + 1).join("▀") : l.substring(0, l.length - 1);
                            })(e8);
                            t7 -= 1, e8 = void 0 === e8 ? 2 * t7 : e8;
                            var r7, n5, o5, i4, a2 = w2.getModuleCount() * t7 + 2 * e8, s2 = e8, u4 = a2 - e8, h2 = Array(t7 + 1).join("██"), c2 = Array(t7 + 1).join("  "), l2 = "", d = "";
                            for(r7 = 0; r7 < a2; r7 += 1){
                                for(o5 = Math.floor((r7 - s2) / t7), d = "", n5 = 0; n5 < a2; n5 += 1)i4 = 1, s2 <= n5 && n5 < u4 && s2 <= r7 && r7 < u4 && w2.isDark(o5, Math.floor((n5 - s2) / t7)) && (i4 = 0), d += i4 ? h2 : c2;
                                for(o5 = 0; o5 < t7; o5 += 1)l2 += d + "\n";
                            }
                            return l2.substring(0, l2.length - 1);
                        }, w2.renderTo2dContext = function(t, e) {
                            e = e || 2;
                            for(var r = w2.getModuleCount(), n = 0; n < r; n++)for(var o = 0; o < r; o++)t.fillStyle = w2.isDark(n, o) ? "black" : "white", t.fillRect(n * e, o * e, e, e);
                        }, w2;
                    };
                    t3.stringToBytes = (t3.stringToBytesFuncs = {
                        default: function(t) {
                            for(var e = [], r = 0; r < t.length; r += 1){
                                var n = t.charCodeAt(r);
                                e.push(255 & n);
                            }
                            return e;
                        }
                    }).default, t3.createStringToBytes = function(t8, e9) {
                        var r8 = function() {
                            for(var r = w1(t8), n = function() {
                                var t = r.read();
                                if (-1 == t) throw "eof";
                                return t;
                            }, o = 0, i = {
                            };;){
                                var a = r.read();
                                if (-1 == a) break;
                                var s = n(), u = n() << 8 | n();
                                i[String.fromCharCode(a << 8 | s)] = u, o += 1;
                            }
                            if (o != e9) throw o + " != " + e9;
                            return i;
                        }(), n6 = "?".charCodeAt(0);
                        return function(t) {
                            for(var e = [], o = 0; o < t.length; o += 1){
                                var i = t.charCodeAt(o);
                                if (i < 128) e.push(i);
                                else {
                                    var a = r8[t.charAt(o)];
                                    "number" == typeof a ? (255 & a) == a ? e.push(a) : (e.push(a >>> 8), e.push(255 & a)) : e.push(n6);
                                }
                            }
                            return e;
                        };
                    };
                    var e3, r3, n2, o2, i1, a1 = {
                        L: 1,
                        M: 0,
                        Q: 3,
                        H: 2
                    }, s1 = (e3 = [
                        [],
                        [
                            6,
                            18
                        ],
                        [
                            6,
                            22
                        ],
                        [
                            6,
                            26
                        ],
                        [
                            6,
                            30
                        ],
                        [
                            6,
                            34
                        ],
                        [
                            6,
                            22,
                            38
                        ],
                        [
                            6,
                            24,
                            42
                        ],
                        [
                            6,
                            26,
                            46
                        ],
                        [
                            6,
                            28,
                            50
                        ],
                        [
                            6,
                            30,
                            54
                        ],
                        [
                            6,
                            32,
                            58
                        ],
                        [
                            6,
                            34,
                            62
                        ],
                        [
                            6,
                            26,
                            46,
                            66
                        ],
                        [
                            6,
                            26,
                            48,
                            70
                        ],
                        [
                            6,
                            26,
                            50,
                            74
                        ],
                        [
                            6,
                            30,
                            54,
                            78
                        ],
                        [
                            6,
                            30,
                            56,
                            82
                        ],
                        [
                            6,
                            30,
                            58,
                            86
                        ],
                        [
                            6,
                            34,
                            62,
                            90
                        ],
                        [
                            6,
                            28,
                            50,
                            72,
                            94
                        ],
                        [
                            6,
                            26,
                            50,
                            74,
                            98
                        ],
                        [
                            6,
                            30,
                            54,
                            78,
                            102
                        ],
                        [
                            6,
                            28,
                            54,
                            80,
                            106
                        ],
                        [
                            6,
                            32,
                            58,
                            84,
                            110
                        ],
                        [
                            6,
                            30,
                            58,
                            86,
                            114
                        ],
                        [
                            6,
                            34,
                            62,
                            90,
                            118
                        ],
                        [
                            6,
                            26,
                            50,
                            74,
                            98,
                            122
                        ],
                        [
                            6,
                            30,
                            54,
                            78,
                            102,
                            126
                        ],
                        [
                            6,
                            26,
                            52,
                            78,
                            104,
                            130
                        ],
                        [
                            6,
                            30,
                            56,
                            82,
                            108,
                            134
                        ],
                        [
                            6,
                            34,
                            60,
                            86,
                            112,
                            138
                        ],
                        [
                            6,
                            30,
                            58,
                            86,
                            114,
                            142
                        ],
                        [
                            6,
                            34,
                            62,
                            90,
                            118,
                            146
                        ],
                        [
                            6,
                            30,
                            54,
                            78,
                            102,
                            126,
                            150
                        ],
                        [
                            6,
                            24,
                            50,
                            76,
                            102,
                            128,
                            154
                        ],
                        [
                            6,
                            28,
                            54,
                            80,
                            106,
                            132,
                            158
                        ],
                        [
                            6,
                            32,
                            58,
                            84,
                            110,
                            136,
                            162
                        ],
                        [
                            6,
                            26,
                            54,
                            82,
                            110,
                            138,
                            166
                        ],
                        [
                            6,
                            30,
                            58,
                            86,
                            114,
                            142,
                            170
                        ]
                    ], r3 = 1335, n2 = 7973, i1 = function(t) {
                        for(var e = 0; 0 != t;)e += 1, t >>>= 1;
                        return e;
                    }, (o2 = {
                    }).getBCHTypeInfo = function(t) {
                        for(var e = t << 10; i1(e) - i1(r3) >= 0;)e ^= r3 << i1(e) - i1(r3);
                        return 21522 ^ (t << 10 | e);
                    }, o2.getBCHTypeNumber = function(t) {
                        for(var e = t << 12; i1(e) - i1(n2) >= 0;)e ^= n2 << i1(e) - i1(n2);
                        return t << 12 | e;
                    }, o2.getPatternPosition = function(t) {
                        return e3[t - 1];
                    }, o2.getMaskFunction = function(t9) {
                        switch(t9){
                            case 0:
                                return function(t, e) {
                                    return (t + e) % 2 == 0;
                                };
                            case 1:
                                return function(t, e) {
                                    return t % 2 == 0;
                                };
                            case 2:
                                return function(t, e) {
                                    return e % 3 == 0;
                                };
                            case 3:
                                return function(t, e) {
                                    return (t + e) % 3 == 0;
                                };
                            case 4:
                                return function(t, e) {
                                    return (Math.floor(t / 2) + Math.floor(e / 3)) % 2 == 0;
                                };
                            case 5:
                                return function(t, e) {
                                    return t * e % 2 + t * e % 3 == 0;
                                };
                            case 6:
                                return function(t, e) {
                                    return (t * e % 2 + t * e % 3) % 2 == 0;
                                };
                            case 7:
                                return function(t, e) {
                                    return (t * e % 3 + (t + e) % 2) % 2 == 0;
                                };
                            default:
                                throw "bad maskPattern:" + t9;
                        }
                    }, o2.getErrorCorrectPolynomial = function(t) {
                        for(var e = h1([
                            1
                        ], 0), r = 0; r < t; r += 1)e = e.multiply(h1([
                            1,
                            u1.gexp(r)
                        ], 0));
                        return e;
                    }, o2.getLengthInBits = function(t, e) {
                        if (1 <= e && e < 10) switch(t){
                            case 1:
                                return 10;
                            case 2:
                                return 9;
                            case 4:
                            case 8:
                                return 8;
                            default:
                                throw "mode:" + t;
                        }
                        else if (e < 27) switch(t){
                            case 1:
                                return 12;
                            case 2:
                                return 11;
                            case 4:
                                return 16;
                            case 8:
                                return 10;
                            default:
                                throw "mode:" + t;
                        }
                        else {
                            if (!(e < 41)) throw "type:" + e;
                            switch(t){
                                case 1:
                                    return 14;
                                case 2:
                                    return 13;
                                case 4:
                                    return 16;
                                case 8:
                                    return 12;
                                default:
                                    throw "mode:" + t;
                            }
                        }
                    }, o2.getLostPoint = function(t) {
                        for(var e = t.getModuleCount(), r = 0, n = 0; n < e; n += 1)for(var o = 0; o < e; o += 1){
                            for(var i = 0, a = t.isDark(n, o), s = -1; s <= 1; s += 1)if (!(n + s < 0 || e <= n + s)) for(var u = -1; u <= 1; u += 1)o + u < 0 || e <= o + u || 0 == s && 0 == u || a == t.isDark(n + s, o + u) && (i += 1);
                            i > 5 && (r += 3 + i - 5);
                        }
                        for(n = 0; n < e - 1; n += 1)for(o = 0; o < e - 1; o += 1){
                            var h = 0;
                            t.isDark(n, o) && (h += 1), t.isDark(n + 1, o) && (h += 1), t.isDark(n, o + 1) && (h += 1), t.isDark(n + 1, o + 1) && (h += 1), 0 != h && 4 != h || (r += 3);
                        }
                        for(n = 0; n < e; n += 1)for(o = 0; o < e - 6; o += 1)t.isDark(n, o) && !t.isDark(n, o + 1) && t.isDark(n, o + 2) && t.isDark(n, o + 3) && t.isDark(n, o + 4) && !t.isDark(n, o + 5) && t.isDark(n, o + 6) && (r += 40);
                        for(o = 0; o < e; o += 1)for(n = 0; n < e - 6; n += 1)t.isDark(n, o) && !t.isDark(n + 1, o) && t.isDark(n + 2, o) && t.isDark(n + 3, o) && t.isDark(n + 4, o) && !t.isDark(n + 5, o) && t.isDark(n + 6, o) && (r += 40);
                        var c = 0;
                        for(o = 0; o < e; o += 1)for(n = 0; n < e; n += 1)t.isDark(n, o) && (c += 1);
                        return r + Math.abs(100 * c / e / e - 50) / 5 * 10;
                    }, o2), u1 = function() {
                        for(var t10 = new Array(256), e10 = new Array(256), r = 0; r < 8; r += 1)t10[r] = 1 << r;
                        for(r = 8; r < 256; r += 1)t10[r] = t10[r - 4] ^ t10[r - 5] ^ t10[r - 6] ^ t10[r - 8];
                        for(r = 0; r < 255; r += 1)e10[t10[r]] = r;
                        return {
                            glog: function(t) {
                                if (t < 1) throw "glog(" + t + ")";
                                return e10[t];
                            },
                            gexp: function(e) {
                                for(; e < 0;)e += 255;
                                for(; e >= 256;)e -= 255;
                                return t10[e];
                            }
                        };
                    }();
                    function h1(t11, e11) {
                        if (void 0 === t11.length) throw t11.length + "/" + e11;
                        var r9 = function() {
                            for(var r = 0; r < t11.length && 0 == t11[r];)r += 1;
                            for(var n = new Array(t11.length - r + e11), o = 0; o < t11.length - r; o += 1)n[o] = t11[o + r];
                            return n;
                        }(), n7 = {
                            getAt: function(t) {
                                return r9[t];
                            },
                            getLength: function() {
                                return r9.length;
                            },
                            multiply: function(t) {
                                for(var e = new Array(n7.getLength() + t.getLength() - 1), r = 0; r < n7.getLength(); r += 1)for(var o = 0; o < t.getLength(); o += 1)e[r + o] ^= u1.gexp(u1.glog(n7.getAt(r)) + u1.glog(t.getAt(o)));
                                return h1(e, 0);
                            },
                            mod: function(t) {
                                if (n7.getLength() - t.getLength() < 0) return n7;
                                for(var e = u1.glog(n7.getAt(0)) - u1.glog(t.getAt(0)), r = new Array(n7.getLength()), o = 0; o < n7.getLength(); o += 1)r[o] = n7.getAt(o);
                                for(o = 0; o < t.getLength(); o += 1)r[o] ^= u1.gexp(u1.glog(t.getAt(o)) + e);
                                return h1(r, 0).mod(t);
                            }
                        };
                        return n7;
                    }
                    var c1 = function() {
                        var t12 = [
                            [
                                1,
                                26,
                                19
                            ],
                            [
                                1,
                                26,
                                16
                            ],
                            [
                                1,
                                26,
                                13
                            ],
                            [
                                1,
                                26,
                                9
                            ],
                            [
                                1,
                                44,
                                34
                            ],
                            [
                                1,
                                44,
                                28
                            ],
                            [
                                1,
                                44,
                                22
                            ],
                            [
                                1,
                                44,
                                16
                            ],
                            [
                                1,
                                70,
                                55
                            ],
                            [
                                1,
                                70,
                                44
                            ],
                            [
                                2,
                                35,
                                17
                            ],
                            [
                                2,
                                35,
                                13
                            ],
                            [
                                1,
                                100,
                                80
                            ],
                            [
                                2,
                                50,
                                32
                            ],
                            [
                                2,
                                50,
                                24
                            ],
                            [
                                4,
                                25,
                                9
                            ],
                            [
                                1,
                                134,
                                108
                            ],
                            [
                                2,
                                67,
                                43
                            ],
                            [
                                2,
                                33,
                                15,
                                2,
                                34,
                                16
                            ],
                            [
                                2,
                                33,
                                11,
                                2,
                                34,
                                12
                            ],
                            [
                                2,
                                86,
                                68
                            ],
                            [
                                4,
                                43,
                                27
                            ],
                            [
                                4,
                                43,
                                19
                            ],
                            [
                                4,
                                43,
                                15
                            ],
                            [
                                2,
                                98,
                                78
                            ],
                            [
                                4,
                                49,
                                31
                            ],
                            [
                                2,
                                32,
                                14,
                                4,
                                33,
                                15
                            ],
                            [
                                4,
                                39,
                                13,
                                1,
                                40,
                                14
                            ],
                            [
                                2,
                                121,
                                97
                            ],
                            [
                                2,
                                60,
                                38,
                                2,
                                61,
                                39
                            ],
                            [
                                4,
                                40,
                                18,
                                2,
                                41,
                                19
                            ],
                            [
                                4,
                                40,
                                14,
                                2,
                                41,
                                15
                            ],
                            [
                                2,
                                146,
                                116
                            ],
                            [
                                3,
                                58,
                                36,
                                2,
                                59,
                                37
                            ],
                            [
                                4,
                                36,
                                16,
                                4,
                                37,
                                17
                            ],
                            [
                                4,
                                36,
                                12,
                                4,
                                37,
                                13
                            ],
                            [
                                2,
                                86,
                                68,
                                2,
                                87,
                                69
                            ],
                            [
                                4,
                                69,
                                43,
                                1,
                                70,
                                44
                            ],
                            [
                                6,
                                43,
                                19,
                                2,
                                44,
                                20
                            ],
                            [
                                6,
                                43,
                                15,
                                2,
                                44,
                                16
                            ],
                            [
                                4,
                                101,
                                81
                            ],
                            [
                                1,
                                80,
                                50,
                                4,
                                81,
                                51
                            ],
                            [
                                4,
                                50,
                                22,
                                4,
                                51,
                                23
                            ],
                            [
                                3,
                                36,
                                12,
                                8,
                                37,
                                13
                            ],
                            [
                                2,
                                116,
                                92,
                                2,
                                117,
                                93
                            ],
                            [
                                6,
                                58,
                                36,
                                2,
                                59,
                                37
                            ],
                            [
                                4,
                                46,
                                20,
                                6,
                                47,
                                21
                            ],
                            [
                                7,
                                42,
                                14,
                                4,
                                43,
                                15
                            ],
                            [
                                4,
                                133,
                                107
                            ],
                            [
                                8,
                                59,
                                37,
                                1,
                                60,
                                38
                            ],
                            [
                                8,
                                44,
                                20,
                                4,
                                45,
                                21
                            ],
                            [
                                12,
                                33,
                                11,
                                4,
                                34,
                                12
                            ],
                            [
                                3,
                                145,
                                115,
                                1,
                                146,
                                116
                            ],
                            [
                                4,
                                64,
                                40,
                                5,
                                65,
                                41
                            ],
                            [
                                11,
                                36,
                                16,
                                5,
                                37,
                                17
                            ],
                            [
                                11,
                                36,
                                12,
                                5,
                                37,
                                13
                            ],
                            [
                                5,
                                109,
                                87,
                                1,
                                110,
                                88
                            ],
                            [
                                5,
                                65,
                                41,
                                5,
                                66,
                                42
                            ],
                            [
                                5,
                                54,
                                24,
                                7,
                                55,
                                25
                            ],
                            [
                                11,
                                36,
                                12,
                                7,
                                37,
                                13
                            ],
                            [
                                5,
                                122,
                                98,
                                1,
                                123,
                                99
                            ],
                            [
                                7,
                                73,
                                45,
                                3,
                                74,
                                46
                            ],
                            [
                                15,
                                43,
                                19,
                                2,
                                44,
                                20
                            ],
                            [
                                3,
                                45,
                                15,
                                13,
                                46,
                                16
                            ],
                            [
                                1,
                                135,
                                107,
                                5,
                                136,
                                108
                            ],
                            [
                                10,
                                74,
                                46,
                                1,
                                75,
                                47
                            ],
                            [
                                1,
                                50,
                                22,
                                15,
                                51,
                                23
                            ],
                            [
                                2,
                                42,
                                14,
                                17,
                                43,
                                15
                            ],
                            [
                                5,
                                150,
                                120,
                                1,
                                151,
                                121
                            ],
                            [
                                9,
                                69,
                                43,
                                4,
                                70,
                                44
                            ],
                            [
                                17,
                                50,
                                22,
                                1,
                                51,
                                23
                            ],
                            [
                                2,
                                42,
                                14,
                                19,
                                43,
                                15
                            ],
                            [
                                3,
                                141,
                                113,
                                4,
                                142,
                                114
                            ],
                            [
                                3,
                                70,
                                44,
                                11,
                                71,
                                45
                            ],
                            [
                                17,
                                47,
                                21,
                                4,
                                48,
                                22
                            ],
                            [
                                9,
                                39,
                                13,
                                16,
                                40,
                                14
                            ],
                            [
                                3,
                                135,
                                107,
                                5,
                                136,
                                108
                            ],
                            [
                                3,
                                67,
                                41,
                                13,
                                68,
                                42
                            ],
                            [
                                15,
                                54,
                                24,
                                5,
                                55,
                                25
                            ],
                            [
                                15,
                                43,
                                15,
                                10,
                                44,
                                16
                            ],
                            [
                                4,
                                144,
                                116,
                                4,
                                145,
                                117
                            ],
                            [
                                17,
                                68,
                                42
                            ],
                            [
                                17,
                                50,
                                22,
                                6,
                                51,
                                23
                            ],
                            [
                                19,
                                46,
                                16,
                                6,
                                47,
                                17
                            ],
                            [
                                2,
                                139,
                                111,
                                7,
                                140,
                                112
                            ],
                            [
                                17,
                                74,
                                46
                            ],
                            [
                                7,
                                54,
                                24,
                                16,
                                55,
                                25
                            ],
                            [
                                34,
                                37,
                                13
                            ],
                            [
                                4,
                                151,
                                121,
                                5,
                                152,
                                122
                            ],
                            [
                                4,
                                75,
                                47,
                                14,
                                76,
                                48
                            ],
                            [
                                11,
                                54,
                                24,
                                14,
                                55,
                                25
                            ],
                            [
                                16,
                                45,
                                15,
                                14,
                                46,
                                16
                            ],
                            [
                                6,
                                147,
                                117,
                                4,
                                148,
                                118
                            ],
                            [
                                6,
                                73,
                                45,
                                14,
                                74,
                                46
                            ],
                            [
                                11,
                                54,
                                24,
                                16,
                                55,
                                25
                            ],
                            [
                                30,
                                46,
                                16,
                                2,
                                47,
                                17
                            ],
                            [
                                8,
                                132,
                                106,
                                4,
                                133,
                                107
                            ],
                            [
                                8,
                                75,
                                47,
                                13,
                                76,
                                48
                            ],
                            [
                                7,
                                54,
                                24,
                                22,
                                55,
                                25
                            ],
                            [
                                22,
                                45,
                                15,
                                13,
                                46,
                                16
                            ],
                            [
                                10,
                                142,
                                114,
                                2,
                                143,
                                115
                            ],
                            [
                                19,
                                74,
                                46,
                                4,
                                75,
                                47
                            ],
                            [
                                28,
                                50,
                                22,
                                6,
                                51,
                                23
                            ],
                            [
                                33,
                                46,
                                16,
                                4,
                                47,
                                17
                            ],
                            [
                                8,
                                152,
                                122,
                                4,
                                153,
                                123
                            ],
                            [
                                22,
                                73,
                                45,
                                3,
                                74,
                                46
                            ],
                            [
                                8,
                                53,
                                23,
                                26,
                                54,
                                24
                            ],
                            [
                                12,
                                45,
                                15,
                                28,
                                46,
                                16
                            ],
                            [
                                3,
                                147,
                                117,
                                10,
                                148,
                                118
                            ],
                            [
                                3,
                                73,
                                45,
                                23,
                                74,
                                46
                            ],
                            [
                                4,
                                54,
                                24,
                                31,
                                55,
                                25
                            ],
                            [
                                11,
                                45,
                                15,
                                31,
                                46,
                                16
                            ],
                            [
                                7,
                                146,
                                116,
                                7,
                                147,
                                117
                            ],
                            [
                                21,
                                73,
                                45,
                                7,
                                74,
                                46
                            ],
                            [
                                1,
                                53,
                                23,
                                37,
                                54,
                                24
                            ],
                            [
                                19,
                                45,
                                15,
                                26,
                                46,
                                16
                            ],
                            [
                                5,
                                145,
                                115,
                                10,
                                146,
                                116
                            ],
                            [
                                19,
                                75,
                                47,
                                10,
                                76,
                                48
                            ],
                            [
                                15,
                                54,
                                24,
                                25,
                                55,
                                25
                            ],
                            [
                                23,
                                45,
                                15,
                                25,
                                46,
                                16
                            ],
                            [
                                13,
                                145,
                                115,
                                3,
                                146,
                                116
                            ],
                            [
                                2,
                                74,
                                46,
                                29,
                                75,
                                47
                            ],
                            [
                                42,
                                54,
                                24,
                                1,
                                55,
                                25
                            ],
                            [
                                23,
                                45,
                                15,
                                28,
                                46,
                                16
                            ],
                            [
                                17,
                                145,
                                115
                            ],
                            [
                                10,
                                74,
                                46,
                                23,
                                75,
                                47
                            ],
                            [
                                10,
                                54,
                                24,
                                35,
                                55,
                                25
                            ],
                            [
                                19,
                                45,
                                15,
                                35,
                                46,
                                16
                            ],
                            [
                                17,
                                145,
                                115,
                                1,
                                146,
                                116
                            ],
                            [
                                14,
                                74,
                                46,
                                21,
                                75,
                                47
                            ],
                            [
                                29,
                                54,
                                24,
                                19,
                                55,
                                25
                            ],
                            [
                                11,
                                45,
                                15,
                                46,
                                46,
                                16
                            ],
                            [
                                13,
                                145,
                                115,
                                6,
                                146,
                                116
                            ],
                            [
                                14,
                                74,
                                46,
                                23,
                                75,
                                47
                            ],
                            [
                                44,
                                54,
                                24,
                                7,
                                55,
                                25
                            ],
                            [
                                59,
                                46,
                                16,
                                1,
                                47,
                                17
                            ],
                            [
                                12,
                                151,
                                121,
                                7,
                                152,
                                122
                            ],
                            [
                                12,
                                75,
                                47,
                                26,
                                76,
                                48
                            ],
                            [
                                39,
                                54,
                                24,
                                14,
                                55,
                                25
                            ],
                            [
                                22,
                                45,
                                15,
                                41,
                                46,
                                16
                            ],
                            [
                                6,
                                151,
                                121,
                                14,
                                152,
                                122
                            ],
                            [
                                6,
                                75,
                                47,
                                34,
                                76,
                                48
                            ],
                            [
                                46,
                                54,
                                24,
                                10,
                                55,
                                25
                            ],
                            [
                                2,
                                45,
                                15,
                                64,
                                46,
                                16
                            ],
                            [
                                17,
                                152,
                                122,
                                4,
                                153,
                                123
                            ],
                            [
                                29,
                                74,
                                46,
                                14,
                                75,
                                47
                            ],
                            [
                                49,
                                54,
                                24,
                                10,
                                55,
                                25
                            ],
                            [
                                24,
                                45,
                                15,
                                46,
                                46,
                                16
                            ],
                            [
                                4,
                                152,
                                122,
                                18,
                                153,
                                123
                            ],
                            [
                                13,
                                74,
                                46,
                                32,
                                75,
                                47
                            ],
                            [
                                48,
                                54,
                                24,
                                14,
                                55,
                                25
                            ],
                            [
                                42,
                                45,
                                15,
                                32,
                                46,
                                16
                            ],
                            [
                                20,
                                147,
                                117,
                                4,
                                148,
                                118
                            ],
                            [
                                40,
                                75,
                                47,
                                7,
                                76,
                                48
                            ],
                            [
                                43,
                                54,
                                24,
                                22,
                                55,
                                25
                            ],
                            [
                                10,
                                45,
                                15,
                                67,
                                46,
                                16
                            ],
                            [
                                19,
                                148,
                                118,
                                6,
                                149,
                                119
                            ],
                            [
                                18,
                                75,
                                47,
                                31,
                                76,
                                48
                            ],
                            [
                                34,
                                54,
                                24,
                                34,
                                55,
                                25
                            ],
                            [
                                20,
                                45,
                                15,
                                61,
                                46,
                                16
                            ]
                        ], e12 = function(t, e) {
                            var r = {
                            };
                            return r.totalCount = t, r.dataCount = e, r;
                        }, r10 = {
                            getRSBlocks: function(r11, n) {
                                var o = function(e, r) {
                                    switch(r){
                                        case a1.L:
                                            return t12[4 * (e - 1) + 0];
                                        case a1.M:
                                            return t12[4 * (e - 1) + 1];
                                        case a1.Q:
                                            return t12[4 * (e - 1) + 2];
                                        case a1.H:
                                            return t12[4 * (e - 1) + 3];
                                        default:
                                            return;
                                    }
                                }(r11, n);
                                if (void 0 === o) throw "bad rs block @ typeNumber:" + r11 + "/errorCorrectionLevel:" + n;
                                for(var i = o.length / 3, s = [], u = 0; u < i; u += 1)for(var h = o[3 * u + 0], c = o[3 * u + 1], l = o[3 * u + 2], d = 0; d < h; d += 1)s.push(e12(c, l));
                                return s;
                            }
                        };
                        return r10;
                    }(), l1 = function() {
                        var t13 = [], e13 = 0, r12 = {
                            getBuffer: function() {
                                return t13;
                            },
                            getAt: function(e) {
                                var r = Math.floor(e / 8);
                                return 1 == (t13[r] >>> 7 - e % 8 & 1);
                            },
                            put: function(t, e) {
                                for(var n = 0; n < e; n += 1)r12.putBit(1 == (t >>> e - n - 1 & 1));
                            },
                            getLengthInBits: function() {
                                return e13;
                            },
                            putBit: function(r) {
                                var n = Math.floor(e13 / 8);
                                t13.length <= n && t13.push(0), r && (t13[n] |= 128 >>> e13 % 8), e13 += 1;
                            }
                        };
                        return r12;
                    }, d1 = function(t14) {
                        var e14 = t14, r13 = {
                            getMode: function() {
                                return 1;
                            },
                            getLength: function(t) {
                                return e14.length;
                            },
                            write: function(t) {
                                for(var r = e14, o = 0; o + 2 < r.length;)t.put(n(r.substring(o, o + 3)), 10), o += 3;
                                o < r.length && (r.length - o == 1 ? t.put(n(r.substring(o, o + 1)), 4) : r.length - o == 2 && t.put(n(r.substring(o, o + 2)), 7));
                            }
                        }, n = function(t) {
                            for(var e = 0, r = 0; r < t.length; r += 1)e = 10 * e + o6(t.charAt(r));
                            return e;
                        }, o6 = function(t) {
                            if ("0" <= t && t <= "9") return t.charCodeAt(0) - "0".charCodeAt(0);
                            throw "illegal char :" + t;
                        };
                        return r13;
                    }, f1 = function(t15) {
                        var e = t15, r14 = {
                            getMode: function() {
                                return 2;
                            },
                            getLength: function(t) {
                                return e.length;
                            },
                            write: function(t) {
                                for(var r = e, o = 0; o + 1 < r.length;)t.put(45 * n(r.charAt(o)) + n(r.charAt(o + 1)), 11), o += 2;
                                o < r.length && t.put(n(r.charAt(o)), 6);
                            }
                        }, n = function(t) {
                            if ("0" <= t && t <= "9") return t.charCodeAt(0) - "0".charCodeAt(0);
                            if ("A" <= t && t <= "Z") return t.charCodeAt(0) - "A".charCodeAt(0) + 10;
                            switch(t){
                                case " ":
                                    return 36;
                                case "$":
                                    return 37;
                                case "%":
                                    return 38;
                                case "*":
                                    return 39;
                                case "+":
                                    return 40;
                                case "-":
                                    return 41;
                                case ".":
                                    return 42;
                                case "/":
                                    return 43;
                                case ":":
                                    return 44;
                                default:
                                    throw "illegal char :" + t;
                            }
                        };
                        return r14;
                    }, g1 = function(e15) {
                        var r = t3.stringToBytes(e15);
                        return {
                            getMode: function() {
                                return 4;
                            },
                            getLength: function(t) {
                                return r.length;
                            },
                            write: function(t) {
                                for(var e = 0; e < r.length; e += 1)t.put(r[e], 8);
                            }
                        };
                    }, p1 = function(e16) {
                        var r15 = t3.stringToBytesFuncs.SJIS;
                        if (!r15) throw "sjis not supported.";
                        !function(t, e) {
                            var n = r15("友");
                            if (2 != n.length || 38726 != (n[0] << 8 | n[1])) throw "sjis not supported.";
                        }();
                        var n8 = r15(e16);
                        return {
                            getMode: function() {
                                return 8;
                            },
                            getLength: function(t) {
                                return ~~(n8.length / 2);
                            },
                            write: function(t) {
                                for(var e = n8, r = 0; r + 1 < e.length;){
                                    var o = (255 & e[r]) << 8 | 255 & e[r + 1];
                                    if (33088 <= o && o <= 40956) o -= 33088;
                                    else {
                                        if (!(57408 <= o && o <= 60351)) throw "illegal char at " + (r + 1) + "/" + o;
                                        o -= 49472;
                                    }
                                    o = 192 * (o >>> 8 & 255) + (255 & o), t.put(o, 13), r += 2;
                                }
                                if (r < e.length) throw "illegal char at " + (r + 1);
                            }
                        };
                    }, v1 = function() {
                        var t16 = [], e17 = {
                            writeByte: function(e) {
                                t16.push(255 & e);
                            },
                            writeShort: function(t) {
                                e17.writeByte(t), e17.writeByte(t >>> 8);
                            },
                            writeBytes: function(t, r, n) {
                                r = r || 0, n = n || t.length;
                                for(var o = 0; o < n; o += 1)e17.writeByte(t[o + r]);
                            },
                            writeString: function(t) {
                                for(var r = 0; r < t.length; r += 1)e17.writeByte(t.charCodeAt(r));
                            },
                            toByteArray: function() {
                                return t16;
                            },
                            toString: function() {
                                var e = "";
                                e += "[";
                                for(var r = 0; r < t16.length; r += 1)r > 0 && (e += ","), e += t16[r];
                                return e + "]";
                            }
                        };
                        return e17;
                    }, w1 = function(t17) {
                        var e = t17, r = 0, n = 0, o = 0, i5 = {
                            read: function() {
                                for(; o < 8;){
                                    if (r >= e.length) {
                                        if (0 == o) return -1;
                                        throw "unexpected end of file./" + o;
                                    }
                                    var t = e.charAt(r);
                                    if (r += 1, "=" == t) return o = 0, -1;
                                    t.match(/^\s$/) || (n = n << 6 | a(t.charCodeAt(0)), o += 6);
                                }
                                var i = n >>> o - 8 & 255;
                                return o -= 8, i;
                            }
                        }, a = function(t) {
                            if (65 <= t && t <= 90) return t - 65;
                            if (97 <= t && t <= 122) return t - 97 + 26;
                            if (48 <= t && t <= 57) return t - 48 + 52;
                            if (43 == t) return 62;
                            if (47 == t) return 63;
                            throw "c:" + t;
                        };
                        return i5;
                    }, y1 = function(t18, e18, r16) {
                        for(var n9 = function(t19, e19) {
                            var r17 = t19, n10 = e19, o8 = new Array(t19 * e19), i7 = {
                                setPixel: function(t, e, n) {
                                    o8[e * r17 + t] = n;
                                },
                                write: function(t) {
                                    t.writeString("GIF87a"), t.writeShort(r17), t.writeShort(n10), t.writeByte(128), t.writeByte(0), t.writeByte(0), t.writeByte(0), t.writeByte(0), t.writeByte(0), t.writeByte(255), t.writeByte(255), t.writeByte(255), t.writeString(","), t.writeShort(0), t.writeShort(0), t.writeShort(r17), t.writeShort(n10), t.writeByte(0);
                                    var e = a4(2);
                                    t.writeByte(2);
                                    for(var o = 0; e.length - o > 255;)t.writeByte(255), t.writeBytes(e, o, 255), o += 255;
                                    t.writeByte(e.length - o), t.writeBytes(e, o, e.length - o), t.writeByte(0), t.writeString(";");
                                }
                            }, a4 = function(t20) {
                                for(var e20 = 1 << t20, r = 1 + (1 << t20), n = t20 + 1, i = s(), a = 0; a < e20; a += 1)i.add(String.fromCharCode(a));
                                i.add(String.fromCharCode(e20)), i.add(String.fromCharCode(r));
                                var u, h, c, l = v1(), d = (u = l, h = 0, c = 0, {
                                    write: function(t, e) {
                                        if (t >>> e != 0) throw "length over";
                                        for(; h + e >= 8;)u.writeByte(255 & (t << h | c)), e -= 8 - h, t >>>= 8 - h, c = 0, h = 0;
                                        c |= t << h, h += e;
                                    },
                                    flush: function() {
                                        h > 0 && u.writeByte(c);
                                    }
                                });
                                d.write(e20, n);
                                var f = 0, g = String.fromCharCode(o8[f]);
                                for(f += 1; f < o8.length;){
                                    var p = String.fromCharCode(o8[f]);
                                    f += 1, i.contains(g + p) ? g += p : (d.write(i.indexOf(g), n), i.size() < 4095 && (i.size() == 1 << n && (n += 1), i.add(g + p)), g = p);
                                }
                                return d.write(i.indexOf(g), n), d.write(r, n), d.flush(), l.toByteArray();
                            }, s = function() {
                                var t = {
                                }, e = 0, r = {
                                    add: function(n) {
                                        if (r.contains(n)) throw "dup key:" + n;
                                        t[n] = e, e += 1;
                                    },
                                    size: function() {
                                        return e;
                                    },
                                    indexOf: function(e) {
                                        return t[e];
                                    },
                                    contains: function(e) {
                                        return void 0 !== t[e];
                                    }
                                };
                                return r;
                            };
                            return i7;
                        }(t18, e18), o7 = 0; o7 < e18; o7 += 1)for(var i6 = 0; i6 < t18; i6 += 1)n9.setPixel(i6, o7, r16(i6, o7));
                        var a3 = v1();
                        n9.write(a3);
                        for(var s3 = function() {
                            var t21 = 0, e = 0, r = 0, n11 = "", o9 = {
                            }, i = function(t) {
                                n11 += String.fromCharCode(a5(63 & t));
                            }, a5 = function(t) {
                                if (t < 0) ;
                                else {
                                    if (t < 26) return 65 + t;
                                    if (t < 52) return t - 26 + 97;
                                    if (t < 62) return t - 52 + 48;
                                    if (62 == t) return 43;
                                    if (63 == t) return 47;
                                }
                                throw "n:" + t;
                            };
                            return o9.writeByte = function(n) {
                                for(t21 = t21 << 8 | 255 & n, e += 8, r += 1; e >= 6;)i(t21 >>> e - 6), e -= 6;
                            }, o9.flush = function() {
                                if (e > 0 && (i(t21 << 6 - e), t21 = 0, e = 0), r % 3 != 0) for(var o = 3 - r % 3, a = 0; a < o; a += 1)n11 += "=";
                            }, o9.toString = function() {
                                return n11;
                            }, o9;
                        }(), u5 = a3.toByteArray(), h3 = 0; h3 < u5.length; h3 += 1)s3.writeByte(u5[h3]);
                        return s3.flush(), "data:image/gif;base64," + s3;
                    };
                    return t3;
                }();
                o1.stringToBytesFuncs["UTF-8"] = function(t22) {
                    return (function(t) {
                        for(var e = [], r = 0; r < t.length; r++){
                            var n = t.charCodeAt(r);
                            n < 128 ? e.push(n) : n < 2048 ? e.push(192 | n >> 6, 128 | 63 & n) : n < 55296 || n >= 57344 ? e.push(224 | n >> 12, 128 | n >> 6 & 63, 128 | 63 & n) : (r++, n = 65536 + ((1023 & n) << 10 | 1023 & t.charCodeAt(r)), e.push(240 | n >> 18, 128 | n >> 12 & 63, 128 | n >> 6 & 63, 128 | 63 & n));
                        }
                        return e;
                    })(t22);
                }, void 0 === (n1 = "function" == typeof (r2 = function() {
                    return o1;
                }) ? r2.apply(e2, []) : r2) || (t2.exports = n1);
            },
            676: (t23, e21, r18)=>{
                "use strict";
                r18.d(e21, {
                    default: ()=>q1
                });
                var n12 = function() {
                    return (n12 = Object.assign || function(t) {
                        for(var e, r = 1, n = arguments.length; r < n; r++)for(var o in e = arguments[r])Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                        return t;
                    }).apply(this, arguments);
                }, o10 = function() {
                    for(var t = 0, e = 0, r = arguments.length; e < r; e++)t += arguments[e].length;
                    var n = Array(t), o = 0;
                    for(e = 0; e < r; e++)for(var i = arguments[e], a = 0, s = i.length; a < s; a++, o++)n[o] = i[a];
                    return n;
                }, i8 = function(t) {
                    return !!t && "object" == typeof t && !Array.isArray(t);
                };
                function a6(t) {
                    for(var e = [], r19 = 1; r19 < arguments.length; r19++)e[r19 - 1] = arguments[r19];
                    if (!e.length) return t;
                    var s = e.shift();
                    return void 0 !== s && i8(t) && i8(s) ? (t = n12({
                    }, t), Object.keys(s).forEach(function(e) {
                        var r = t[e], n = s[e];
                        Array.isArray(r) && Array.isArray(n) ? t[e] = n : i8(r) && i8(n) ? t[e] = a6(Object.assign({
                        }, r), n) : t[e] = n;
                    }), a6.apply(void 0, o10([
                        t
                    ], e))) : t;
                }
                function s4(t, e) {
                    var r = document.createElement("a");
                    r.download = e, r.href = t, document.body.appendChild(r), r.click(), document.body.removeChild(r);
                }
                function u6(t24) {
                    var e22, r20, n13, o11;
                    return e22 = this, r20 = void 0, o11 = function() {
                        return (function(t25, e) {
                            var r, n, o, i9, a = {
                                label: 0,
                                sent: function() {
                                    if (1 & o[0]) throw o[1];
                                    return o[1];
                                },
                                trys: [],
                                ops: []
                            };
                            function s5(i10) {
                                return function(s) {
                                    return (function(i) {
                                        if (r) throw new TypeError("Generator is already executing.");
                                        for(; a;)try {
                                            if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                            switch(n = 0, o && (i = [
                                                2 & i[0],
                                                o.value
                                            ]), i[0]){
                                                case 0:
                                                case 1:
                                                    o = i;
                                                    break;
                                                case 4:
                                                    return a.label++, {
                                                        value: i[1],
                                                        done: !1
                                                    };
                                                case 5:
                                                    a.label++, n = i[1], i = [
                                                        0
                                                    ];
                                                    continue;
                                                case 7:
                                                    i = a.ops.pop(), a.trys.pop();
                                                    continue;
                                                default:
                                                    if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                        a = 0;
                                                        continue;
                                                    }
                                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                        a.label = i[1];
                                                        break;
                                                    }
                                                    if (6 === i[0] && a.label < o[1]) {
                                                        a.label = o[1], o = i;
                                                        break;
                                                    }
                                                    if (o && a.label < o[2]) {
                                                        a.label = o[2], a.ops.push(i);
                                                        break;
                                                    }
                                                    o[2] && a.ops.pop(), a.trys.pop();
                                                    continue;
                                            }
                                            i = e.call(t25, a);
                                        } catch (t) {
                                            i = [
                                                6,
                                                t
                                            ], n = 0;
                                        } finally{
                                            r = o = 0;
                                        }
                                        if (5 & i[0]) throw i[1];
                                        return {
                                            value: i[0] ? i[1] : void 0,
                                            done: !0
                                        };
                                    })([
                                        i10,
                                        s
                                    ]);
                                };
                            }
                            return i9 = {
                                next: s5(0),
                                throw: s5(1),
                                return: s5(2)
                            }, "function" == typeof Symbol && (i9[Symbol.iterator] = function() {
                                return this;
                            }), i9;
                        })(this, function(e23) {
                            return [
                                2,
                                new Promise(function(e) {
                                    var r = new XMLHttpRequest;
                                    r.onload = function() {
                                        var t = new FileReader;
                                        t.onloadend = function() {
                                            e(t.result);
                                        }, t.readAsDataURL(r.response);
                                    }, r.open("GET", t24), r.responseType = "blob", r.send();
                                })
                            ];
                        });
                    }, new (n13 = void 0, n13 = Promise)(function(t26, i) {
                        function a(t) {
                            try {
                                u(o11.next(t));
                            } catch (t27) {
                                i(t27);
                            }
                        }
                        function s(t) {
                            try {
                                u(o11.throw(t));
                            } catch (t28) {
                                i(t28);
                            }
                        }
                        function u(e) {
                            var r;
                            e.done ? t26(e.value) : (r = e.value, r instanceof n13 ? r : new n13(function(t) {
                                t(r);
                            })).then(a, s);
                        }
                        u((o11 = o11.apply(e22, r20 || [])).next());
                    });
                }
                const h4 = {
                    L: 0.07,
                    M: 0.15,
                    Q: 0.25,
                    H: 0.3
                };
                var c3 = function() {
                    return (c3 = Object.assign || function(t) {
                        for(var e, r = 1, n = arguments.length; r < n; r++)for(var o in e = arguments[r])Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                        return t;
                    }).apply(this, arguments);
                };
                const l3 = function() {
                    function t29(t) {
                        var e = t.svg, r = t.type;
                        this._svg = e, this._type = r;
                    }
                    return t29.prototype.draw = function(t, e, r, n) {
                        var o;
                        switch(this._type){
                            case "dots":
                                o = this._drawDot;
                                break;
                            case "classy":
                                o = this._drawClassy;
                                break;
                            case "classy-rounded":
                                o = this._drawClassyRounded;
                                break;
                            case "rounded":
                                o = this._drawRounded;
                                break;
                            case "extra-rounded":
                                o = this._drawExtraRounded;
                                break;
                            case "square":
                            default:
                                o = this._drawSquare;
                        }
                        o.call(this, {
                            x: t,
                            y: e,
                            size: r,
                            getNeighbor: n
                        });
                    }, t29.prototype._rotateFigure = function(t) {
                        var e, r = t.x, n = t.y, o = t.size, i = t.rotation, a = void 0 === i ? 0 : i, s = r + o / 2, u = n + o / 2;
                        (0, t.draw)(), null === (e = this._element) || void 0 === e || e.setAttribute("transform", "rotate(" + 180 * a / Math.PI + "," + s + "," + u + ")");
                    }, t29.prototype._basicDot = function(t) {
                        var e = this, r = t.size, n = t.x, o = t.y;
                        this._rotateFigure(c3(c3({
                        }, t), {
                            draw: function() {
                                e._element = document.createElementNS("http://www.w3.org/2000/svg", "circle"), e._element.setAttribute("cx", String(n + r / 2)), e._element.setAttribute("cy", String(o + r / 2)), e._element.setAttribute("r", String(r / 2));
                            }
                        }));
                    }, t29.prototype._basicSquare = function(t) {
                        var e = this, r = t.size, n = t.x, o = t.y;
                        this._rotateFigure(c3(c3({
                        }, t), {
                            draw: function() {
                                e._element = document.createElementNS("http://www.w3.org/2000/svg", "rect"), e._element.setAttribute("x", String(n)), e._element.setAttribute("y", String(o)), e._element.setAttribute("width", String(r)), e._element.setAttribute("height", String(r));
                            }
                        }));
                    }, t29.prototype._basicSideRounded = function(t) {
                        var e = this, r = t.size, n = t.x, o = t.y;
                        this._rotateFigure(c3(c3({
                        }, t), {
                            draw: function() {
                                e._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), e._element.setAttribute("d", "M " + n + " " + o + "v " + r + "h " + r / 2 + "a " + r / 2 + " " + r / 2 + ", 0, 0, 0, 0 " + -r);
                            }
                        }));
                    }, t29.prototype._basicCornerRounded = function(t) {
                        var e = this, r = t.size, n = t.x, o = t.y;
                        this._rotateFigure(c3(c3({
                        }, t), {
                            draw: function() {
                                e._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), e._element.setAttribute("d", "M " + n + " " + o + "v " + r + "h " + r + "v " + -r / 2 + "a " + r / 2 + " " + r / 2 + ", 0, 0, 0, " + -r / 2 + " " + -r / 2);
                            }
                        }));
                    }, t29.prototype._basicCornerExtraRounded = function(t) {
                        var e = this, r = t.size, n = t.x, o = t.y;
                        this._rotateFigure(c3(c3({
                        }, t), {
                            draw: function() {
                                e._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), e._element.setAttribute("d", "M " + n + " " + o + "v " + r + "h " + r + "a " + r + " " + r + ", 0, 0, 0, " + -r + " " + -r);
                            }
                        }));
                    }, t29.prototype._basicCornersRounded = function(t) {
                        var e = this, r = t.size, n = t.x, o = t.y;
                        this._rotateFigure(c3(c3({
                        }, t), {
                            draw: function() {
                                e._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), e._element.setAttribute("d", "M " + n + " " + o + "v " + r / 2 + "a " + r / 2 + " " + r / 2 + ", 0, 0, 0, " + r / 2 + " " + r / 2 + "h " + r / 2 + "v " + -r / 2 + "a " + r / 2 + " " + r / 2 + ", 0, 0, 0, " + -r / 2 + " " + -r / 2);
                            }
                        }));
                    }, t29.prototype._drawDot = function(t) {
                        var e = t.x, r = t.y, n = t.size;
                        this._basicDot({
                            x: e,
                            y: r,
                            size: n,
                            rotation: 0
                        });
                    }, t29.prototype._drawSquare = function(t) {
                        var e = t.x, r = t.y, n = t.size;
                        this._basicSquare({
                            x: e,
                            y: r,
                            size: n,
                            rotation: 0
                        });
                    }, t29.prototype._drawRounded = function(t) {
                        var e = t.x, r = t.y, n = t.size, o = t.getNeighbor, i = o ? +o(-1, 0) : 0, a = o ? +o(1, 0) : 0, s = o ? +o(0, -1) : 0, u = o ? +o(0, 1) : 0, h = i + a + s + u;
                        if (0 !== h) {
                            if (h > 2 || i && a || s && u) this._basicSquare({
                                x: e,
                                y: r,
                                size: n,
                                rotation: 0
                            });
                            else {
                                if (2 === h) {
                                    var c = 0;
                                    return i && s ? c = Math.PI / 2 : s && a ? c = Math.PI : a && u && (c = -Math.PI / 2), void this._basicCornerRounded({
                                        x: e,
                                        y: r,
                                        size: n,
                                        rotation: c
                                    });
                                }
                                if (1 === h) return c = 0, s ? c = Math.PI / 2 : a ? c = Math.PI : u && (c = -Math.PI / 2), void this._basicSideRounded({
                                    x: e,
                                    y: r,
                                    size: n,
                                    rotation: c
                                });
                            }
                        } else this._basicDot({
                            x: e,
                            y: r,
                            size: n,
                            rotation: 0
                        });
                    }, t29.prototype._drawExtraRounded = function(t) {
                        var e = t.x, r = t.y, n = t.size, o = t.getNeighbor, i = o ? +o(-1, 0) : 0, a = o ? +o(1, 0) : 0, s = o ? +o(0, -1) : 0, u = o ? +o(0, 1) : 0, h = i + a + s + u;
                        if (0 !== h) {
                            if (h > 2 || i && a || s && u) this._basicSquare({
                                x: e,
                                y: r,
                                size: n,
                                rotation: 0
                            });
                            else {
                                if (2 === h) {
                                    var c = 0;
                                    return i && s ? c = Math.PI / 2 : s && a ? c = Math.PI : a && u && (c = -Math.PI / 2), void this._basicCornerExtraRounded({
                                        x: e,
                                        y: r,
                                        size: n,
                                        rotation: c
                                    });
                                }
                                if (1 === h) return c = 0, s ? c = Math.PI / 2 : a ? c = Math.PI : u && (c = -Math.PI / 2), void this._basicSideRounded({
                                    x: e,
                                    y: r,
                                    size: n,
                                    rotation: c
                                });
                            }
                        } else this._basicDot({
                            x: e,
                            y: r,
                            size: n,
                            rotation: 0
                        });
                    }, t29.prototype._drawClassy = function(t) {
                        var e = t.x, r = t.y, n = t.size, o = t.getNeighbor, i = o ? +o(-1, 0) : 0, a = o ? +o(1, 0) : 0, s = o ? +o(0, -1) : 0, u = o ? +o(0, 1) : 0;
                        0 !== i + a + s + u ? i || s ? a || u ? this._basicSquare({
                            x: e,
                            y: r,
                            size: n,
                            rotation: 0
                        }) : this._basicCornerRounded({
                            x: e,
                            y: r,
                            size: n,
                            rotation: Math.PI / 2
                        }) : this._basicCornerRounded({
                            x: e,
                            y: r,
                            size: n,
                            rotation: -Math.PI / 2
                        }) : this._basicCornersRounded({
                            x: e,
                            y: r,
                            size: n,
                            rotation: Math.PI / 2
                        });
                    }, t29.prototype._drawClassyRounded = function(t) {
                        var e = t.x, r = t.y, n = t.size, o = t.getNeighbor, i = o ? +o(-1, 0) : 0, a = o ? +o(1, 0) : 0, s = o ? +o(0, -1) : 0, u = o ? +o(0, 1) : 0;
                        0 !== i + a + s + u ? i || s ? a || u ? this._basicSquare({
                            x: e,
                            y: r,
                            size: n,
                            rotation: 0
                        }) : this._basicCornerExtraRounded({
                            x: e,
                            y: r,
                            size: n,
                            rotation: Math.PI / 2
                        }) : this._basicCornerExtraRounded({
                            x: e,
                            y: r,
                            size: n,
                            rotation: -Math.PI / 2
                        }) : this._basicCornersRounded({
                            x: e,
                            y: r,
                            size: n,
                            rotation: Math.PI / 2
                        });
                    }, t29;
                }();
                var d2 = function() {
                    return (d2 = Object.assign || function(t) {
                        for(var e, r = 1, n = arguments.length; r < n; r++)for(var o in e = arguments[r])Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                        return t;
                    }).apply(this, arguments);
                };
                const f2 = function() {
                    function t30(t) {
                        var e = t.svg, r = t.type;
                        this._svg = e, this._type = r;
                    }
                    return t30.prototype.draw = function(t, e, r, n) {
                        var o;
                        switch(this._type){
                            case "square":
                                o = this._drawSquare;
                                break;
                            case "extra-rounded":
                                o = this._drawExtraRounded;
                                break;
                            case "dot":
                            default:
                                o = this._drawDot;
                        }
                        o.call(this, {
                            x: t,
                            y: e,
                            size: r,
                            rotation: n
                        });
                    }, t30.prototype._rotateFigure = function(t) {
                        var e, r = t.x, n = t.y, o = t.size, i = t.rotation, a = void 0 === i ? 0 : i, s = r + o / 2, u = n + o / 2;
                        (0, t.draw)(), null === (e = this._element) || void 0 === e || e.setAttribute("transform", "rotate(" + 180 * a / Math.PI + "," + s + "," + u + ")");
                    }, t30.prototype._basicDot = function(t) {
                        var e = this, r = t.size, n = t.x, o = t.y, i = r / 7;
                        this._rotateFigure(d2(d2({
                        }, t), {
                            draw: function() {
                                e._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), e._element.setAttribute("clip-rule", "evenodd"), e._element.setAttribute("d", "M " + (n + r / 2) + " " + o + "a " + r / 2 + " " + r / 2 + " 0 1 0 0.1 0zm 0 " + i + "a " + (r / 2 - i) + " " + (r / 2 - i) + " 0 1 1 -0.1 0Z");
                            }
                        }));
                    }, t30.prototype._basicSquare = function(t) {
                        var e = this, r = t.size, n = t.x, o = t.y, i = r / 7;
                        this._rotateFigure(d2(d2({
                        }, t), {
                            draw: function() {
                                e._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), e._element.setAttribute("clip-rule", "evenodd"), e._element.setAttribute("d", "M " + n + " " + o + "v " + r + "h " + r + "v " + -r + "zM " + (n + i) + " " + (o + i) + "h " + (r - 2 * i) + "v " + (r - 2 * i) + "h " + (2 * i - r) + "z");
                            }
                        }));
                    }, t30.prototype._basicExtraRounded = function(t) {
                        var e = this, r = t.size, n = t.x, o = t.y, i = r / 7;
                        this._rotateFigure(d2(d2({
                        }, t), {
                            draw: function() {
                                e._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), e._element.setAttribute("clip-rule", "evenodd"), e._element.setAttribute("d", "M " + n + " " + (o + 2.5 * i) + "v " + 2 * i + "a " + 2.5 * i + " " + 2.5 * i + ", 0, 0, 0, " + 2.5 * i + " " + 2.5 * i + "h " + 2 * i + "a " + 2.5 * i + " " + 2.5 * i + ", 0, 0, 0, " + 2.5 * i + " " + 2.5 * -i + "v " + -2 * i + "a " + 2.5 * i + " " + 2.5 * i + ", 0, 0, 0, " + 2.5 * -i + " " + 2.5 * -i + "h " + -2 * i + "a " + 2.5 * i + " " + 2.5 * i + ", 0, 0, 0, " + 2.5 * -i + " " + 2.5 * i + "M " + (n + 2.5 * i) + " " + (o + i) + "h " + 2 * i + "a " + 1.5 * i + " " + 1.5 * i + ", 0, 0, 1, " + 1.5 * i + " " + 1.5 * i + "v " + 2 * i + "a " + 1.5 * i + " " + 1.5 * i + ", 0, 0, 1, " + 1.5 * -i + " " + 1.5 * i + "h " + -2 * i + "a " + 1.5 * i + " " + 1.5 * i + ", 0, 0, 1, " + 1.5 * -i + " " + 1.5 * -i + "v " + -2 * i + "a " + 1.5 * i + " " + 1.5 * i + ", 0, 0, 1, " + 1.5 * i + " " + 1.5 * -i);
                            }
                        }));
                    }, t30.prototype._drawDot = function(t) {
                        var e = t.x, r = t.y, n = t.size, o = t.rotation;
                        this._basicDot({
                            x: e,
                            y: r,
                            size: n,
                            rotation: o
                        });
                    }, t30.prototype._drawSquare = function(t) {
                        var e = t.x, r = t.y, n = t.size, o = t.rotation;
                        this._basicSquare({
                            x: e,
                            y: r,
                            size: n,
                            rotation: o
                        });
                    }, t30.prototype._drawExtraRounded = function(t) {
                        var e = t.x, r = t.y, n = t.size, o = t.rotation;
                        this._basicExtraRounded({
                            x: e,
                            y: r,
                            size: n,
                            rotation: o
                        });
                    }, t30;
                }();
                var g2 = function() {
                    return (g2 = Object.assign || function(t) {
                        for(var e, r = 1, n = arguments.length; r < n; r++)for(var o in e = arguments[r])Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                        return t;
                    }).apply(this, arguments);
                };
                const p2 = function() {
                    function t31(t) {
                        var e = t.svg, r = t.type;
                        this._svg = e, this._type = r;
                    }
                    return t31.prototype.draw = function(t, e, r, n) {
                        var o;
                        switch(this._type){
                            case "square":
                                o = this._drawSquare;
                                break;
                            case "dot":
                            default:
                                o = this._drawDot;
                        }
                        o.call(this, {
                            x: t,
                            y: e,
                            size: r,
                            rotation: n
                        });
                    }, t31.prototype._rotateFigure = function(t) {
                        var e, r = t.x, n = t.y, o = t.size, i = t.rotation, a = void 0 === i ? 0 : i, s = r + o / 2, u = n + o / 2;
                        (0, t.draw)(), null === (e = this._element) || void 0 === e || e.setAttribute("transform", "rotate(" + 180 * a / Math.PI + "," + s + "," + u + ")");
                    }, t31.prototype._basicDot = function(t) {
                        var e = this, r = t.size, n = t.x, o = t.y;
                        this._rotateFigure(g2(g2({
                        }, t), {
                            draw: function() {
                                e._element = document.createElementNS("http://www.w3.org/2000/svg", "circle"), e._element.setAttribute("cx", String(n + r / 2)), e._element.setAttribute("cy", String(o + r / 2)), e._element.setAttribute("r", String(r / 2));
                            }
                        }));
                    }, t31.prototype._basicSquare = function(t) {
                        var e = this, r = t.size, n = t.x, o = t.y;
                        this._rotateFigure(g2(g2({
                        }, t), {
                            draw: function() {
                                e._element = document.createElementNS("http://www.w3.org/2000/svg", "rect"), e._element.setAttribute("x", String(n)), e._element.setAttribute("y", String(o)), e._element.setAttribute("width", String(r)), e._element.setAttribute("height", String(r));
                            }
                        }));
                    }, t31.prototype._drawDot = function(t) {
                        var e = t.x, r = t.y, n = t.size, o = t.rotation;
                        this._basicDot({
                            x: e,
                            y: r,
                            size: n,
                            rotation: o
                        });
                    }, t31.prototype._drawSquare = function(t) {
                        var e = t.x, r = t.y, n = t.size, o = t.rotation;
                        this._basicSquare({
                            x: e,
                            y: r,
                            size: n,
                            rotation: o
                        });
                    }, t31;
                }(), v3 = "circle";
                var w3 = function(t32, e24, r, n) {
                    return new (r || (r = Promise))(function(o, i) {
                        function a(t) {
                            try {
                                u(n.next(t));
                            } catch (t33) {
                                i(t33);
                            }
                        }
                        function s(t) {
                            try {
                                u(n.throw(t));
                            } catch (t34) {
                                i(t34);
                            }
                        }
                        function u(t35) {
                            var e;
                            t35.done ? o(t35.value) : (e = t35.value, e instanceof r ? e : new r(function(t) {
                                t(e);
                            })).then(a, s);
                        }
                        u((n = n.apply(t32, e24 || [])).next());
                    });
                }, y2 = function(t36, e) {
                    var r, n, o, i11, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1];
                        },
                        trys: [],
                        ops: []
                    };
                    function s6(i12) {
                        return function(s) {
                            return (function(i) {
                                if (r) throw new TypeError("Generator is already executing.");
                                for(; a;)try {
                                    if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                    switch(n = 0, o && (i = [
                                        2 & i[0],
                                        o.value
                                    ]), i[0]){
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: i[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, n = i[1], i = [
                                                0
                                            ];
                                            continue;
                                        case 7:
                                            i = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                a = 0;
                                                continue;
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break;
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break;
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break;
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue;
                                    }
                                    i = e.call(t36, a);
                                } catch (t) {
                                    i = [
                                        6,
                                        t
                                    ], n = 0;
                                } finally{
                                    r = o = 0;
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                };
                            })([
                                i12,
                                s
                            ]);
                        };
                    }
                    return i11 = {
                        next: s6(0),
                        throw: s6(1),
                        return: s6(2)
                    }, "function" == typeof Symbol && (i11[Symbol.iterator] = function() {
                        return this;
                    }), i11;
                }, m1 = [
                    [
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1
                    ],
                    [
                        1,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1
                    ],
                    [
                        1,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1
                    ],
                    [
                        1,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1
                    ],
                    [
                        1,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1
                    ],
                    [
                        1,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1
                    ],
                    [
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1
                    ]
                ], b1 = [
                    [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        0,
                        0,
                        1,
                        1,
                        1,
                        0,
                        0
                    ],
                    [
                        0,
                        0,
                        1,
                        1,
                        1,
                        0,
                        0
                    ],
                    [
                        0,
                        0,
                        1,
                        1,
                        1,
                        0,
                        0
                    ],
                    [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                ];
                const _1 = function() {
                    function t37(t) {
                        this._element = document.createElementNS("http://www.w3.org/2000/svg", "svg"), this._element.setAttribute("width", String(t.width)), this._element.setAttribute("height", String(t.height)), this._defs = document.createElementNS("http://www.w3.org/2000/svg", "defs"), this._element.appendChild(this._defs), this._options = t;
                    }
                    return Object.defineProperty(t37.prototype, "width", {
                        get: function() {
                            return this._options.width;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t37.prototype, "height", {
                        get: function() {
                            return this._options.height;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t37.prototype.getElement = function() {
                        return this._element;
                    }, t37.prototype.drawQR = function(t38) {
                        return w3(this, void 0, void 0, function() {
                            var e25, r21, n14, o12, i13, a7, s7, u7, c, l, d = this;
                            return y2(this, function(f) {
                                switch(f.label){
                                    case 0:
                                        return e25 = t38.getModuleCount(), r21 = Math.min(this._options.width, this._options.height) - 2 * this._options.margin, n14 = this._options.shape === v3 ? r21 / Math.sqrt(2) : r21, o12 = Math.floor(n14 / e25), i13 = {
                                            hideXDots: 0,
                                            hideYDots: 0,
                                            width: 0,
                                            height: 0
                                        }, this._qr = t38, this._options.image ? [
                                            4,
                                            this.loadImage()
                                        ] : [
                                            3,
                                            2
                                        ];
                                    case 1:
                                        if (f.sent(), !this._image) return [
                                            2
                                        ];
                                        a7 = this._options, s7 = a7.imageOptions, u7 = a7.qrOptions, c = s7.imageSize * h4[u7.errorCorrectionLevel], l = Math.floor(c * e25 * e25), i13 = (function(t) {
                                            var e = t.originalHeight, r = t.originalWidth, n = t.maxHiddenDots, o = t.maxHiddenAxisDots, i = t.dotSize, a = {
                                                x: 0,
                                                y: 0
                                            }, s = {
                                                x: 0,
                                                y: 0
                                            };
                                            if (e <= 0 || r <= 0 || n <= 0 || i <= 0) return {
                                                height: 0,
                                                width: 0,
                                                hideYDots: 0,
                                                hideXDots: 0
                                            };
                                            var u = e / r;
                                            return a.x = Math.floor(Math.sqrt(n / u)), a.x <= 0 && (a.x = 1), o && o < a.x && (a.x = o), a.x % 2 == 0 && a.x--, s.x = a.x * i, a.y = 1 + 2 * Math.ceil((a.x * u - 1) / 2), s.y = Math.round(s.x * u), (a.y * a.x > n || o && o < a.y) && (o && o < a.y ? (a.y = o, a.y % 2 == 0 && a.x--) : a.y -= 2, s.y = a.y * i, a.x = 1 + 2 * Math.ceil((a.y / u - 1) / 2), s.x = Math.round(s.y / u)), {
                                                height: s.y,
                                                width: s.x,
                                                hideYDots: a.y,
                                                hideXDots: a.x
                                            };
                                        })({
                                            originalWidth: this._image.width,
                                            originalHeight: this._image.height,
                                            maxHiddenDots: l,
                                            maxHiddenAxisDots: e25 - 14,
                                            dotSize: o12
                                        }), f.label = 2;
                                    case 2:
                                        return this.drawBackground(), this.drawDots(function(t, r) {
                                            var n, o, a, s, u, h;
                                            return !(d._options.imageOptions.hideBackgroundDots && t >= (e25 - i13.hideXDots) / 2 && t < (e25 + i13.hideXDots) / 2 && r >= (e25 - i13.hideYDots) / 2 && r < (e25 + i13.hideYDots) / 2 || (null === (n = m1[t]) || void 0 === n ? void 0 : n[r]) || (null === (o = m1[t - e25 + 7]) || void 0 === o ? void 0 : o[r]) || (null === (a = m1[t]) || void 0 === a ? void 0 : a[r - e25 + 7]) || (null === (s = b1[t]) || void 0 === s ? void 0 : s[r]) || (null === (u = b1[t - e25 + 7]) || void 0 === u ? void 0 : u[r]) || (null === (h = b1[t]) || void 0 === h ? void 0 : h[r - e25 + 7]));
                                        }), this.drawCorners(), this._options.image ? [
                                            4,
                                            this.drawImage({
                                                width: i13.width,
                                                height: i13.height,
                                                count: e25,
                                                dotSize: o12
                                            })
                                        ] : [
                                            3,
                                            4
                                        ];
                                    case 3:
                                        f.sent(), f.label = 4;
                                    case 4:
                                        return [
                                            2
                                        ];
                                }
                            });
                        });
                    }, t37.prototype.drawBackground = function() {
                        var t, e, r, n = this._element, o = this._options;
                        if (n) {
                            var i = null === (t = o.backgroundOptions) || void 0 === t ? void 0 : t.gradient, a = null === (e = o.backgroundOptions) || void 0 === e ? void 0 : e.color;
                            if ((i || a) && this._createColor({
                                options: i,
                                color: a,
                                additionalRotation: 0,
                                x: 0,
                                y: 0,
                                height: o.height,
                                width: o.width,
                                name: "background-color"
                            }), null === (r = o.backgroundOptions) || void 0 === r ? void 0 : r.round) {
                                var s = Math.min(o.width, o.height), u = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                                this._backgroundClipPath = document.createElementNS("http://www.w3.org/2000/svg", "clipPath"), this._backgroundClipPath.setAttribute("id", "clip-path-background-color"), this._defs.appendChild(this._backgroundClipPath), u.setAttribute("x", String((o.width - s) / 2)), u.setAttribute("y", String((o.height - s) / 2)), u.setAttribute("width", String(s)), u.setAttribute("height", String(s)), u.setAttribute("rx", String(s / 2 * o.backgroundOptions.round)), this._backgroundClipPath.appendChild(u);
                            }
                        }
                    }, t37.prototype.drawDots = function(t39) {
                        var e26, r22, n = this;
                        if (!this._qr) throw "QR code is not defined";
                        var o13 = this._options, i = this._qr.getModuleCount();
                        if (i > o13.width || i > o13.height) throw "The canvas is too small.";
                        var a8 = Math.min(o13.width, o13.height) - 2 * o13.margin, s = o13.shape === v3 ? a8 / Math.sqrt(2) : a8, u = Math.floor(s / i), h = Math.floor((o13.width - i * u) / 2), c = Math.floor((o13.height - i * u) / 2), d = new l3({
                            svg: this._element,
                            type: o13.dotsOptions.type
                        });
                        this._dotsClipPath = document.createElementNS("http://www.w3.org/2000/svg", "clipPath"), this._dotsClipPath.setAttribute("id", "clip-path-dot-color"), this._defs.appendChild(this._dotsClipPath), this._createColor({
                            options: null === (e26 = o13.dotsOptions) || void 0 === e26 ? void 0 : e26.gradient,
                            color: o13.dotsOptions.color,
                            additionalRotation: 0,
                            x: 0,
                            y: 0,
                            height: o13.height,
                            width: o13.width,
                            name: "dot-color"
                        });
                        for(var f = function(e) {
                            for(var o14 = function(o) {
                                return t39 && !t39(e, o) ? "continue" : (null === (r22 = g._qr) || void 0 === r22 ? void 0 : r22.isDark(e, o)) ? (d.draw(h + e * u, c + o * u, u, function(r, a) {
                                    return !(e + r < 0 || o + a < 0 || e + r >= i || o + a >= i) && !(t39 && !t39(e + r, o + a)) && !!n._qr && n._qr.isDark(e + r, o + a);
                                }), void (d._element && g._dotsClipPath && g._dotsClipPath.appendChild(d._element))) : "continue";
                            }, a9 = 0; a9 < i; a9++)o14(a9);
                        }, g = this, p = 0; p < i; p++)f(p);
                        if (o13.shape === v3) {
                            var w = Math.floor((a8 / u - i) / 2), y = i + 2 * w, m = h - w * u, b = c - w * u, _ = [], x = Math.floor(y / 2);
                            for(p = 0; p < y; p++){
                                _[p] = [];
                                for(var S = 0; S < y; S++)p >= w - 1 && p <= y - w && S >= w - 1 && S <= y - w || Math.sqrt((p - x) * (p - x) + (S - x) * (S - x)) > x ? _[p][S] = 0 : _[p][S] = this._qr.isDark(S - 2 * w < 0 ? S : S >= i ? S - 2 * w : S - w, p - 2 * w < 0 ? p : p >= i ? p - 2 * w : p - w) ? 1 : 0;
                            }
                            var M = function(t) {
                                for(var e27 = function(e) {
                                    if (!_[t][e]) return "continue";
                                    d.draw(m + t * u, b + e * u, u, function(r, n) {
                                        var o;
                                        return !!(null === (o = _[t + r]) || void 0 === o ? void 0 : o[e + n]);
                                    }), d._element && C._dotsClipPath && C._dotsClipPath.appendChild(d._element);
                                }, r = 0; r < y; r++)e27(r);
                            }, C = this;
                            for(p = 0; p < y; p++)M(p);
                        }
                    }, t37.prototype.drawCorners = function() {
                        var t40 = this;
                        if (!this._qr) throw "QR code is not defined";
                        var e28 = this._element, r23 = this._options;
                        if (!e28) throw "Element code is not defined";
                        var n = this._qr.getModuleCount(), o15 = Math.min(r23.width, r23.height) - 2 * r23.margin, i14 = r23.shape === v3 ? o15 / Math.sqrt(2) : o15, a = Math.floor(i14 / n), s = 7 * a, u = 3 * a, h = Math.floor((r23.width - n * a) / 2), c = Math.floor((r23.height - n * a) / 2);
                        [
                            [
                                0,
                                0,
                                0
                            ],
                            [
                                1,
                                0,
                                Math.PI / 2
                            ],
                            [
                                0,
                                1,
                                -Math.PI / 2
                            ]
                        ].forEach(function(e29) {
                            var o16, i, d, g, v, w, y, _, x, S, M, C, A = e29[0], k = e29[1], O = e29[2], D = h + A * a * (n - 7), P = c + k * a * (n - 7), z = t40._dotsClipPath, B = t40._dotsClipPath;
                            if (((null === (o16 = r23.cornersSquareOptions) || void 0 === o16 ? void 0 : o16.gradient) || (null === (i = r23.cornersSquareOptions) || void 0 === i ? void 0 : i.color)) && ((z = document.createElementNS("http://www.w3.org/2000/svg", "clipPath")).setAttribute("id", "clip-path-corners-square-color-" + A + "-" + k), t40._defs.appendChild(z), t40._cornersSquareClipPath = t40._cornersDotClipPath = B = z, t40._createColor({
                                options: null === (d = r23.cornersSquareOptions) || void 0 === d ? void 0 : d.gradient,
                                color: null === (g = r23.cornersSquareOptions) || void 0 === g ? void 0 : g.color,
                                additionalRotation: O,
                                x: D,
                                y: P,
                                height: s,
                                width: s,
                                name: "corners-square-color-" + A + "-" + k
                            })), null === (v = r23.cornersSquareOptions) || void 0 === v ? void 0 : v.type) {
                                var q = new f2({
                                    svg: t40._element,
                                    type: r23.cornersSquareOptions.type
                                });
                                q.draw(D, P, s, O), q._element && z && z.appendChild(q._element);
                            } else for(var I = new l3({
                                svg: t40._element,
                                type: r23.dotsOptions.type
                            }), E = function(t) {
                                for(var e30 = function(e) {
                                    if (!(null === (w = m1[t]) || void 0 === w ? void 0 : w[e])) return "continue";
                                    I.draw(D + t * a, P + e * a, a, function(r, n) {
                                        var o;
                                        return !!(null === (o = m1[t + r]) || void 0 === o ? void 0 : o[e + n]);
                                    }), I._element && z && z.appendChild(I._element);
                                }, r = 0; r < m1[t].length; r++)e30(r);
                            }, L = 0; L < m1.length; L++)E(L);
                            if (((null === (y = r23.cornersDotOptions) || void 0 === y ? void 0 : y.gradient) || (null === (_ = r23.cornersDotOptions) || void 0 === _ ? void 0 : _.color)) && ((B = document.createElementNS("http://www.w3.org/2000/svg", "clipPath")).setAttribute("id", "clip-path-corners-dot-color-" + A + "-" + k), t40._defs.appendChild(B), t40._cornersDotClipPath = B, t40._createColor({
                                options: null === (x = r23.cornersDotOptions) || void 0 === x ? void 0 : x.gradient,
                                color: null === (S = r23.cornersDotOptions) || void 0 === S ? void 0 : S.color,
                                additionalRotation: O,
                                x: D + 2 * a,
                                y: P + 2 * a,
                                height: u,
                                width: u,
                                name: "corners-dot-color-" + A + "-" + k
                            })), null === (M = r23.cornersDotOptions) || void 0 === M ? void 0 : M.type) {
                                var R = new p2({
                                    svg: t40._element,
                                    type: r23.cornersDotOptions.type
                                });
                                R.draw(D + 2 * a, P + 2 * a, u, O), R._element && B && B.appendChild(R._element);
                            } else {
                                I = new l3({
                                    svg: t40._element,
                                    type: r23.dotsOptions.type
                                });
                                var N = function(t) {
                                    for(var e31 = function(e) {
                                        if (!(null === (C = b1[t]) || void 0 === C ? void 0 : C[e])) return "continue";
                                        I.draw(D + t * a, P + e * a, a, function(r, n) {
                                            var o;
                                            return !!(null === (o = b1[t + r]) || void 0 === o ? void 0 : o[e + n]);
                                        }), I._element && B && B.appendChild(I._element);
                                    }, r = 0; r < b1[t].length; r++)e31(r);
                                };
                                for(L = 0; L < b1.length; L++)N(L);
                            }
                        });
                    }, t37.prototype.loadImage = function() {
                        var t = this;
                        return new Promise(function(e, r) {
                            var n = t._options, o = new Image;
                            if (!n.image) return r("Image is not defined");
                            "string" == typeof n.imageOptions.crossOrigin && (o.crossOrigin = n.imageOptions.crossOrigin), t._image = o, o.onload = function() {
                                e();
                            }, o.src = n.image;
                        });
                    }, t37.prototype.drawImage = function(t41) {
                        var e = t41.width, r = t41.height, n = t41.count, o = t41.dotSize;
                        return w3(this, void 0, void 0, function() {
                            var t, i, a, s, h, c, l, d, f;
                            return y2(this, function(g) {
                                switch(g.label){
                                    case 0:
                                        return t = this._options, i = Math.floor((t.width - n * o) / 2), a = Math.floor((t.height - n * o) / 2), s = i + t.imageOptions.margin + (n * o - e) / 2, h = a + t.imageOptions.margin + (n * o - r) / 2, c = e - 2 * t.imageOptions.margin, l = r - 2 * t.imageOptions.margin, (d = document.createElementNS("http://www.w3.org/2000/svg", "image")).setAttribute("x", String(s)), d.setAttribute("y", String(h)), d.setAttribute("width", c + "px"), d.setAttribute("height", l + "px"), [
                                            4,
                                            u6(t.image || "")
                                        ];
                                    case 1:
                                        return f = g.sent(), d.setAttribute("href", f || ""), this._element.appendChild(d), [
                                            2
                                        ];
                                }
                            });
                        });
                    }, t37.prototype._createColor = function(t42) {
                        var e32 = t42.options, r24 = t42.color, n15 = t42.additionalRotation, o = t42.x, i = t42.y, a = t42.height, s = t42.width, u = t42.name, h = s > a ? s : a, c = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                        if (c.setAttribute("x", String(o)), c.setAttribute("y", String(i)), c.setAttribute("height", String(a)), c.setAttribute("width", String(s)), c.setAttribute("clip-path", "url('#clip-path-" + u + "')"), e32) {
                            var l;
                            if ("radial" === e32.type) (l = document.createElementNS("http://www.w3.org/2000/svg", "radialGradient")).setAttribute("id", u), l.setAttribute("gradientUnits", "userSpaceOnUse"), l.setAttribute("fx", String(o + s / 2)), l.setAttribute("fy", String(i + a / 2)), l.setAttribute("cx", String(o + s / 2)), l.setAttribute("cy", String(i + a / 2)), l.setAttribute("r", String(h / 2));
                            else {
                                var d = ((e32.rotation || 0) + n15) % (2 * Math.PI), f = (d + 2 * Math.PI) % (2 * Math.PI), g = o + s / 2, p = i + a / 2, v = o + s / 2, w = i + a / 2;
                                f >= 0 && f <= 0.25 * Math.PI || f > 1.75 * Math.PI && f <= 2 * Math.PI ? (g -= s / 2, p -= a / 2 * Math.tan(d), v += s / 2, w += a / 2 * Math.tan(d)) : f > 0.25 * Math.PI && f <= 0.75 * Math.PI ? (p -= a / 2, g -= s / 2 / Math.tan(d), w += a / 2, v += s / 2 / Math.tan(d)) : f > 0.75 * Math.PI && f <= 1.25 * Math.PI ? (g += s / 2, p += a / 2 * Math.tan(d), v -= s / 2, w -= a / 2 * Math.tan(d)) : f > 1.25 * Math.PI && f <= 1.75 * Math.PI && (p += a / 2, g += s / 2 / Math.tan(d), w -= a / 2, v -= s / 2 / Math.tan(d)), (l = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient")).setAttribute("id", u), l.setAttribute("gradientUnits", "userSpaceOnUse"), l.setAttribute("x1", String(Math.round(g))), l.setAttribute("y1", String(Math.round(p))), l.setAttribute("x2", String(Math.round(v))), l.setAttribute("y2", String(Math.round(w)));
                            }
                            e32.colorStops.forEach(function(t) {
                                var e = t.offset, r = t.color, n = document.createElementNS("http://www.w3.org/2000/svg", "stop");
                                n.setAttribute("offset", 100 * e + "%"), n.setAttribute("stop-color", r), l.appendChild(n);
                            }), c.setAttribute("fill", "url('#" + u + "')"), this._defs.appendChild(l);
                        } else r24 && c.setAttribute("fill", r24);
                        this._element.appendChild(c);
                    }, t37;
                }(), x1 = "canvas";
                for(var S1 = {
                }, M1 = 0; M1 <= 40; M1++)S1[M1] = M1;
                const C1 = {
                    type: x1,
                    shape: "square",
                    width: 300,
                    height: 300,
                    data: "",
                    margin: 0,
                    qrOptions: {
                        typeNumber: S1[0],
                        mode: void 0,
                        errorCorrectionLevel: "Q"
                    },
                    imageOptions: {
                        hideBackgroundDots: !0,
                        imageSize: 0.4,
                        crossOrigin: void 0,
                        margin: 0
                    },
                    dotsOptions: {
                        type: "square",
                        color: "#000"
                    },
                    backgroundOptions: {
                        round: 0,
                        color: "#fff"
                    }
                };
                var A1 = function() {
                    return (A1 = Object.assign || function(t) {
                        for(var e, r = 1, n = arguments.length; r < n; r++)for(var o in e = arguments[r])Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                        return t;
                    }).apply(this, arguments);
                };
                function k1(t43) {
                    var e = A1({
                    }, t43);
                    if (!e.colorStops || !e.colorStops.length) throw "Field 'colorStops' is required in gradient";
                    return e.rotation ? e.rotation = Number(e.rotation) : e.rotation = 0, e.colorStops = e.colorStops.map(function(t) {
                        return A1(A1({
                        }, t), {
                            offset: Number(t.offset)
                        });
                    }), e;
                }
                function O1(t) {
                    var e = A1({
                    }, t);
                    return e.width = Number(e.width), e.height = Number(e.height), e.margin = Number(e.margin), e.imageOptions = A1(A1({
                    }, e.imageOptions), {
                        hideBackgroundDots: Boolean(e.imageOptions.hideBackgroundDots),
                        imageSize: Number(e.imageOptions.imageSize),
                        margin: Number(e.imageOptions.margin)
                    }), e.margin > Math.min(e.width, e.height) && (e.margin = Math.min(e.width, e.height)), e.dotsOptions = A1({
                    }, e.dotsOptions), e.dotsOptions.gradient && (e.dotsOptions.gradient = k1(e.dotsOptions.gradient)), e.cornersSquareOptions && (e.cornersSquareOptions = A1({
                    }, e.cornersSquareOptions), e.cornersSquareOptions.gradient && (e.cornersSquareOptions.gradient = k1(e.cornersSquareOptions.gradient))), e.cornersDotOptions && (e.cornersDotOptions = A1({
                    }, e.cornersDotOptions), e.cornersDotOptions.gradient && (e.cornersDotOptions.gradient = k1(e.cornersDotOptions.gradient))), e.backgroundOptions && (e.backgroundOptions = A1({
                    }, e.backgroundOptions), e.backgroundOptions.gradient && (e.backgroundOptions.gradient = k1(e.backgroundOptions.gradient))), e;
                }
                var D1 = r18(192), P1 = r18.n(D1), z1 = function(t44, e33, r, n) {
                    return new (r || (r = Promise))(function(o, i) {
                        function a(t) {
                            try {
                                u(n.next(t));
                            } catch (t45) {
                                i(t45);
                            }
                        }
                        function s(t) {
                            try {
                                u(n.throw(t));
                            } catch (t46) {
                                i(t46);
                            }
                        }
                        function u(t47) {
                            var e;
                            t47.done ? o(t47.value) : (e = t47.value, e instanceof r ? e : new r(function(t) {
                                t(e);
                            })).then(a, s);
                        }
                        u((n = n.apply(t44, e33 || [])).next());
                    });
                }, B1 = function(t48, e) {
                    var r, n, o, i15, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1];
                        },
                        trys: [],
                        ops: []
                    };
                    function s8(i16) {
                        return function(s) {
                            return (function(i) {
                                if (r) throw new TypeError("Generator is already executing.");
                                for(; a;)try {
                                    if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                    switch(n = 0, o && (i = [
                                        2 & i[0],
                                        o.value
                                    ]), i[0]){
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: i[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, n = i[1], i = [
                                                0
                                            ];
                                            continue;
                                        case 7:
                                            i = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                a = 0;
                                                continue;
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break;
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break;
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break;
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue;
                                    }
                                    i = e.call(t48, a);
                                } catch (t) {
                                    i = [
                                        6,
                                        t
                                    ], n = 0;
                                } finally{
                                    r = o = 0;
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                };
                            })([
                                i16,
                                s
                            ]);
                        };
                    }
                    return i15 = {
                        next: s8(0),
                        throw: s8(1),
                        return: s8(2)
                    }, "function" == typeof Symbol && (i15[Symbol.iterator] = function() {
                        return this;
                    }), i15;
                };
                const q1 = function() {
                    function t49(t) {
                        this._options = t ? O1(a6(C1, t)) : C1, this.update();
                    }
                    return t49._clearContainer = function(t) {
                        t && (t.innerHTML = "");
                    }, t49.prototype._setupSvg = function() {
                        var t = this;
                        if (this._qr) {
                            var e = new _1(this._options);
                            this._svg = e.getElement(), this._svgDrawingPromise = e.drawQR(this._qr).then(function() {
                                var r;
                                t._svg && (null === (r = t._extension) || void 0 === r || r.call(t, e.getElement(), t._options));
                            });
                        }
                    }, t49.prototype._setupCanvas = function() {
                        var t50, e = this;
                        this._qr && (this._canvas = document.createElement("canvas"), this._canvas.width = this._options.width, this._canvas.height = this._options.height, this._setupSvg(), this._canvasDrawingPromise = null === (t50 = this._svgDrawingPromise) || void 0 === t50 ? void 0 : t50.then(function() {
                            if (e._svg) {
                                var t51 = e._svg, r25 = (new XMLSerializer).serializeToString(t51), n16 = "data:image/svg+xml;base64," + btoa(r25), o = new Image;
                                return new Promise(function(t) {
                                    o.onload = function() {
                                        var r, n;
                                        null === (n = null === (r = e._canvas) || void 0 === r ? void 0 : r.getContext("2d")) || void 0 === n || n.drawImage(o, 0, 0), t();
                                    }, o.src = n16;
                                });
                            }
                        }));
                    }, t49.prototype._getElement = function(t) {
                        return void 0 === t && (t = "png"), z1(this, void 0, void 0, function() {
                            return B1(this, function(e) {
                                switch(e.label){
                                    case 0:
                                        if (!this._qr) throw "QR code is empty";
                                        return "svg" !== t.toLowerCase() ? [
                                            3,
                                            2
                                        ] : (this._svg && this._svgDrawingPromise || this._setupSvg(), [
                                            4,
                                            this._svgDrawingPromise
                                        ]);
                                    case 1:
                                        return e.sent(), [
                                            2,
                                            this._svg
                                        ];
                                    case 2:
                                        return this._canvas && this._canvasDrawingPromise || this._setupCanvas(), [
                                            4,
                                            this._canvasDrawingPromise
                                        ];
                                    case 3:
                                        return e.sent(), [
                                            2,
                                            this._canvas
                                        ];
                                }
                            });
                        });
                    }, t49.prototype.update = function(e) {
                        t49._clearContainer(this._container), this._options = e ? O1(a6(this._options, e)) : this._options, this._options.data && (this._qr = P1()(this._options.qrOptions.typeNumber, this._options.qrOptions.errorCorrectionLevel), this._qr.addData(this._options.data, this._options.qrOptions.mode || function(t) {
                            switch(!0){
                                case /^[0-9]*$/.test(t):
                                    return "Numeric";
                                case /^[0-9A-Z $%*+\-./:]*$/.test(t):
                                    return "Alphanumeric";
                                default:
                                    return "Byte";
                            }
                        }(this._options.data)), this._qr.make(), this._options.type === x1 ? this._setupCanvas() : this._setupSvg(), this.append(this._container));
                    }, t49.prototype.append = function(t) {
                        if (t) {
                            if ("function" != typeof t.appendChild) throw "Container should be a single DOM node";
                            this._options.type === x1 ? this._canvas && t.appendChild(this._canvas) : this._svg && t.appendChild(this._svg), this._container = t;
                        }
                    }, t49.prototype.applyExtension = function(t) {
                        if (!t) throw "Extension function should be defined.";
                        this._extension = t, this.update();
                    }, t49.prototype.deleteExtension = function() {
                        this._extension = void 0, this.update();
                    }, t49.prototype.getRawData = function(t) {
                        return void 0 === t && (t = "png"), z1(this, void 0, void 0, function() {
                            var e, r27, n;
                            return B1(this, function(o) {
                                switch(o.label){
                                    case 0:
                                        if (!this._qr) throw "QR code is empty";
                                        return [
                                            4,
                                            this._getElement(t)
                                        ];
                                    case 1:
                                        return (e = o.sent()) ? "svg" === t.toLowerCase() ? (r27 = new XMLSerializer, n = r27.serializeToString(e), [
                                            2,
                                            new Blob([
                                                '<?xml version="1.0" standalone="no"?>\r\n' + n
                                            ], {
                                                type: "image/svg+xml"
                                            })
                                        ]) : [
                                            2,
                                            new Promise(function(r) {
                                                return e.toBlob(r, "image/" + t, 1);
                                            })
                                        ] : [
                                            2,
                                            null
                                        ];
                                }
                            });
                        });
                    }, t49.prototype.download = function(t) {
                        return z1(this, void 0, void 0, function() {
                            var e, r, n, o, i;
                            return B1(this, function(a) {
                                switch(a.label){
                                    case 0:
                                        if (!this._qr) throw "QR code is empty";
                                        return e = "png", r = "qr", "string" == typeof t ? (e = t, console.warn("Extension is deprecated as argument for 'download' method, please pass object { name: '...', extension: '...' } as argument")) : "object" == typeof t && null !== t && (t.name && (r = t.name), t.extension && (e = t.extension)), [
                                            4,
                                            this._getElement(e)
                                        ];
                                    case 1:
                                        return (n = a.sent()) ? ("svg" === e.toLowerCase() ? (o = new XMLSerializer, i = '<?xml version="1.0" standalone="no"?>\r\n' + (i = o.serializeToString(n)), s4("data:image/svg+xml;charset=utf-8," + encodeURIComponent(i), r + ".svg")) : s4(n.toDataURL("image/" + e), r + "." + e), [
                                            2
                                        ]) : [
                                            2
                                        ];
                                }
                            });
                        });
                    }, t49;
                }();
            }
        }, e1 = {
        };
        function r1(n) {
            if (e1[n]) return e1[n].exports;
            var o = e1[n] = {
                exports: {
                }
            };
            return t1[n](o, o.exports, r1), o.exports;
        }
        return r1.n = (t)=>{
            var e = t && t.__esModule ? ()=>t.default
             : ()=>t
            ;
            return r1.d(e, {
                a: e
            }), e;
        }, r1.d = (t, e)=>{
            for(var n in e)r1.o(e, n) && !r1.o(t, n) && Object.defineProperty(t, n, {
                enumerable: !0,
                get: e[n]
            });
        }, r1.o = (t, e)=>Object.prototype.hasOwnProperty.call(t, e)
        , r1(676);
    })().default;
});

},{}],"kAZGB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _client = require("./client");
parcelHelpers.exportAll(_client, exports);
var _frameImpl = require("./frame-impl");
parcelHelpers.exportAll(_frameImpl, exports);
var _parser = require("./parser");
parcelHelpers.exportAll(_parser, exports);
var _stompConfig = require("./stomp-config");
parcelHelpers.exportAll(_stompConfig, exports);
var _stompHeaders = require("./stomp-headers");
parcelHelpers.exportAll(_stompHeaders, exports);
var _stompSubscription = require("./stomp-subscription");
parcelHelpers.exportAll(_stompSubscription, exports);
var _types = require("./types");
parcelHelpers.exportAll(_types, exports);
var _versions = require("./versions");
parcelHelpers.exportAll(_versions, exports);
// Compatibility code
var _compatClient = require("./compatibility/compat-client");
parcelHelpers.exportAll(_compatClient, exports);
var _stomp = require("./compatibility/stomp");
parcelHelpers.exportAll(_stomp, exports);

},{"./client":"irYAQ","./frame-impl":"1UN9e","./parser":"7jQAr","./stomp-config":"d1qLZ","./stomp-headers":"f2sTf","./stomp-subscription":"3IeQ2","./types":"be49Y","./versions":"6WtVG","./compatibility/compat-client":"kiyyd","./compatibility/stomp":"bBqwU","@parcel/transformer-js/src/esmodule-helpers.js":"kVR2k"}],"irYAQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * STOMP Client Class.
 *
 * Part of `@stomp/stompjs`.
 */ parcelHelpers.export(exports, "Client", ()=>Client
);
var _stompHandler = require("./stomp-handler");
var _types = require("./types");
var _versions = require("./versions");
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Client {
    /**
     * Create an instance.
     */ constructor(conf = {
    }){
        /**
         * STOMP versions to attempt during STOMP handshake. By default versions `1.0`, `1.1`, and `1.2` are attempted.
         *
         * Example:
         * ```javascript
         *        // Try only versions 1.0 and 1.1
         *        client.stompVersions = new Versions(['1.0', '1.1'])
         * ```
         */ this.stompVersions = _versions.Versions.default;
        /**
         * Will retry if Stomp connection is not established in specified milliseconds.
         * Default 0, which implies wait for ever.
         */ this.connectionTimeout = 0;
        /**
         *  automatically reconnect with delay in milliseconds, set to 0 to disable.
         */ this.reconnectDelay = 5000;
        /**
         * Incoming heartbeat interval in milliseconds. Set to 0 to disable.
         */ this.heartbeatIncoming = 10000;
        /**
         * Outgoing heartbeat interval in milliseconds. Set to 0 to disable.
         */ this.heartbeatOutgoing = 10000;
        /**
         * This switches on a non standard behavior while sending WebSocket packets.
         * It splits larger (text) packets into chunks of [maxWebSocketChunkSize]{@link Client#maxWebSocketChunkSize}.
         * Only Java Spring brokers seems to use this mode.
         *
         * WebSockets, by itself, split large (text) packets,
         * so it is not needed with a truly compliant STOMP/WebSocket broker.
         * Actually setting it for such broker will cause large messages to fail.
         *
         * `false` by default.
         *
         * Binary frames are never split.
         */ this.splitLargeFrames = false;
        /**
         * See [splitLargeFrames]{@link Client#splitLargeFrames}.
         * This has no effect if [splitLargeFrames]{@link Client#splitLargeFrames} is `false`.
         */ this.maxWebSocketChunkSize = 8192;
        /**
         * Usually the
         * [type of WebSocket frame]{@link https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send#Parameters}
         * is automatically decided by type of the payload.
         * Default is `false`, which should work with all compliant brokers.
         *
         * Set this flag to force binary frames.
         */ this.forceBinaryWSFrames = false;
        /**
         * A bug in ReactNative chops a string on occurrence of a NULL.
         * See issue [https://github.com/stomp-js/stompjs/issues/89]{@link https://github.com/stomp-js/stompjs/issues/89}.
         * This makes incoming WebSocket messages invalid STOMP packets.
         * Setting this flag attempts to reverse the damage by appending a NULL.
         * If the broker splits a large message into multiple WebSocket messages,
         * this flag will cause data loss and abnormal termination of connection.
         *
         * This is not an ideal solution, but a stop gap until the underlying issue is fixed at ReactNative library.
         */ this.appendMissingNULLonIncoming = false;
        /**
         * Activation state.
         *
         * It will usually be ACTIVE or INACTIVE.
         * When deactivating it may go from ACTIVE to INACTIVE without entering DEACTIVATING.
         */ this.state = _types.ActivationState.INACTIVE;
        // Dummy callbacks
        const noOp = ()=>{
        };
        this.debug = noOp;
        this.beforeConnect = noOp;
        this.onConnect = noOp;
        this.onDisconnect = noOp;
        this.onUnhandledMessage = noOp;
        this.onUnhandledReceipt = noOp;
        this.onUnhandledFrame = noOp;
        this.onStompError = noOp;
        this.onWebSocketClose = noOp;
        this.onWebSocketError = noOp;
        this.logRawCommunication = false;
        this.onChangeState = noOp;
        // These parameters would typically get proper values before connect is called
        this.connectHeaders = {
        };
        this._disconnectHeaders = {
        };
        // Apply configuration
        this.configure(conf);
    }
    /**
     * Underlying WebSocket instance, READONLY.
     */ get webSocket() {
        return this._stompHandler ? this._stompHandler._webSocket : undefined;
    }
    /**
     * Disconnection headers.
     */ get disconnectHeaders() {
        return this._disconnectHeaders;
    }
    set disconnectHeaders(value) {
        this._disconnectHeaders = value;
        if (this._stompHandler) this._stompHandler.disconnectHeaders = this._disconnectHeaders;
    }
    /**
     * `true` if there is a active connection with STOMP Broker
     */ get connected() {
        return !!this._stompHandler && this._stompHandler.connected;
    }
    /**
     * version of STOMP protocol negotiated with the server, READONLY
     */ get connectedVersion() {
        return this._stompHandler ? this._stompHandler.connectedVersion : undefined;
    }
    /**
     * if the client is active (connected or going to reconnect)
     */ get active() {
        return this.state === _types.ActivationState.ACTIVE;
    }
    _changeState(state) {
        this.state = state;
        this.onChangeState(state);
    }
    /**
     * Update configuration.
     */ configure(conf) {
        // bulk assign all properties to this
        Object.assign(this, conf);
    }
    /**
     * Initiate the connection with the broker.
     * If the connection breaks, as per [Client#reconnectDelay]{@link Client#reconnectDelay},
     * it will keep trying to reconnect.
     *
     * Call [Client#deactivate]{@link Client#deactivate} to disconnect and stop reconnection attempts.
     */ activate() {
        if (this.state === _types.ActivationState.DEACTIVATING) {
            this.debug('Still DEACTIVATING, please await call to deactivate before trying to re-activate');
            throw new Error('Still DEACTIVATING, can not activate now');
        }
        if (this.active) {
            this.debug('Already ACTIVE, ignoring request to activate');
            return;
        }
        this._changeState(_types.ActivationState.ACTIVE);
        this._connect();
    }
    _connect() {
        return __awaiter(this, void 0, void 0, function*() {
            if (this.connected) {
                this.debug('STOMP: already connected, nothing to do');
                return;
            }
            yield this.beforeConnect();
            if (!this.active) {
                this.debug('Client has been marked inactive, will not attempt to connect');
                return;
            }
            // setup connection watcher
            if (this.connectionTimeout > 0) {
                // clear first
                if (this._connectionWatcher) clearTimeout(this._connectionWatcher);
                this._connectionWatcher = setTimeout(()=>{
                    if (this.connected) return;
                    // Connection not established, close the underlying socket
                    // a reconnection will be attempted
                    this.debug(`Connection not established in ${this.connectionTimeout}ms, closing socket`);
                    this.forceDisconnect();
                }, this.connectionTimeout);
            }
            this.debug('Opening Web Socket...');
            // Get the actual WebSocket (or a similar object)
            const webSocket = this._createWebSocket();
            this._stompHandler = new _stompHandler.StompHandler(this, webSocket, {
                debug: this.debug,
                stompVersions: this.stompVersions,
                connectHeaders: this.connectHeaders,
                disconnectHeaders: this._disconnectHeaders,
                heartbeatIncoming: this.heartbeatIncoming,
                heartbeatOutgoing: this.heartbeatOutgoing,
                splitLargeFrames: this.splitLargeFrames,
                maxWebSocketChunkSize: this.maxWebSocketChunkSize,
                forceBinaryWSFrames: this.forceBinaryWSFrames,
                logRawCommunication: this.logRawCommunication,
                appendMissingNULLonIncoming: this.appendMissingNULLonIncoming,
                discardWebsocketOnCommFailure: this.discardWebsocketOnCommFailure,
                onConnect: (frame)=>{
                    // Successfully connected, stop the connection watcher
                    if (this._connectionWatcher) {
                        clearTimeout(this._connectionWatcher);
                        this._connectionWatcher = undefined;
                    }
                    if (!this.active) {
                        this.debug('STOMP got connected while deactivate was issued, will disconnect now');
                        this._disposeStompHandler();
                        return;
                    }
                    this.onConnect(frame);
                },
                onDisconnect: (frame)=>{
                    this.onDisconnect(frame);
                },
                onStompError: (frame)=>{
                    this.onStompError(frame);
                },
                onWebSocketClose: (evt)=>{
                    this._stompHandler = undefined; // a new one will be created in case of a reconnect
                    if (this.state === _types.ActivationState.DEACTIVATING) {
                        // Mark deactivation complete
                        this._resolveSocketClose();
                        this._resolveSocketClose = undefined;
                        this._changeState(_types.ActivationState.INACTIVE);
                    }
                    this.onWebSocketClose(evt);
                    // The callback is called before attempting to reconnect, this would allow the client
                    // to be `deactivated` in the callback.
                    if (this.active) this._schedule_reconnect();
                },
                onWebSocketError: (evt)=>{
                    this.onWebSocketError(evt);
                },
                onUnhandledMessage: (message)=>{
                    this.onUnhandledMessage(message);
                },
                onUnhandledReceipt: (frame)=>{
                    this.onUnhandledReceipt(frame);
                },
                onUnhandledFrame: (frame)=>{
                    this.onUnhandledFrame(frame);
                }
            });
            this._stompHandler.start();
        });
    }
    _createWebSocket() {
        let webSocket;
        if (this.webSocketFactory) webSocket = this.webSocketFactory();
        else webSocket = new WebSocket(this.brokerURL, this.stompVersions.protocolVersions());
        webSocket.binaryType = 'arraybuffer';
        return webSocket;
    }
    _schedule_reconnect() {
        if (this.reconnectDelay > 0) {
            this.debug(`STOMP: scheduling reconnection in ${this.reconnectDelay}ms`);
            this._reconnector = setTimeout(()=>{
                this._connect();
            }, this.reconnectDelay);
        }
    }
    /**
     * Disconnect if connected and stop auto reconnect loop.
     * Appropriate callbacks will be invoked if underlying STOMP connection was connected.
     *
     * This call is async, it will resolve immediately if there is no underlying active websocket,
     * otherwise, it will resolve after underlying websocket is properly disposed.
     *
     * To reactivate you can call [Client#activate]{@link Client#activate}.
     */ deactivate() {
        return __awaiter(this, void 0, void 0, function*() {
            let retPromise;
            if (this.state !== _types.ActivationState.ACTIVE) {
                this.debug(`Already ${_types.ActivationState[this.state]}, ignoring call to deactivate`);
                return Promise.resolve();
            }
            this._changeState(_types.ActivationState.DEACTIVATING);
            // Clear if a reconnection was scheduled
            if (this._reconnector) clearTimeout(this._reconnector);
            if (this._stompHandler && this.webSocket.readyState !== _types.StompSocketState.CLOSED) // we need to wait for underlying websocket to close
            retPromise = new Promise((resolve, reject)=>{
                this._resolveSocketClose = resolve;
            });
            else {
                // indicate that auto reconnect loop should terminate
                this._changeState(_types.ActivationState.INACTIVE);
                return Promise.resolve();
            }
            this._disposeStompHandler();
            return retPromise;
        });
    }
    /**
     * Force disconnect if there is an active connection by directly closing the underlying WebSocket.
     * This is different than a normal disconnect where a DISCONNECT sequence is carried out with the broker.
     * After forcing disconnect, automatic reconnect will be attempted.
     * To stop further reconnects call [Client#deactivate]{@link Client#deactivate} as well.
     */ forceDisconnect() {
        if (this._stompHandler) this._stompHandler.forceDisconnect();
    }
    _disposeStompHandler() {
        // Dispose STOMP Handler
        if (this._stompHandler) {
            this._stompHandler.dispose();
            this._stompHandler = null;
        }
    }
    /**
     * Send a message to a named destination. Refer to your STOMP broker documentation for types
     * and naming of destinations.
     *
     * STOMP protocol specifies and suggests some headers and also allows broker specific headers.
     *
     * `body` must be String.
     * You will need to covert the payload to string in case it is not string (e.g. JSON).
     *
     * To send a binary message body use binaryBody parameter. It should be a
     * [Uint8Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array).
     * Sometimes brokers may not support binary frames out of the box.
     * Please check your broker documentation.
     *
     * `content-length` header is automatically added to the STOMP Frame sent to the broker.
     * Set `skipContentLengthHeader` to indicate that `content-length` header should not be added.
     * For binary messages `content-length` header is always added.
     *
     * Caution: The broker will, most likely, report an error and disconnect if message body has NULL octet(s)
     * and `content-length` header is missing.
     *
     * ```javascript
     *        client.publish({destination: "/queue/test", headers: {priority: 9}, body: "Hello, STOMP"});
     *
     *        // Only destination is mandatory parameter
     *        client.publish({destination: "/queue/test", body: "Hello, STOMP"});
     *
     *        // Skip content-length header in the frame to the broker
     *        client.publish({"/queue/test", body: "Hello, STOMP", skipContentLengthHeader: true});
     *
     *        var binaryData = generateBinaryData(); // This need to be of type Uint8Array
     *        // setting content-type header is not mandatory, however a good practice
     *        client.publish({destination: '/topic/special', binaryBody: binaryData,
     *                         headers: {'content-type': 'application/octet-stream'}});
     * ```
     */ publish(params) {
        this._stompHandler.publish(params);
    }
    /**
     * STOMP brokers may carry out operation asynchronously and allow requesting for acknowledgement.
     * To request an acknowledgement, a `receipt` header needs to be sent with the actual request.
     * The value (say receipt-id) for this header needs to be unique for each use. Typically a sequence, a UUID, a
     * random number or a combination may be used.
     *
     * A complaint broker will send a RECEIPT frame when an operation has actually been completed.
     * The operation needs to be matched based in the value of the receipt-id.
     *
     * This method allow watching for a receipt and invoke the callback
     * when corresponding receipt has been received.
     *
     * The actual {@link FrameImpl} will be passed as parameter to the callback.
     *
     * Example:
     * ```javascript
     *        // Subscribing with acknowledgement
     *        let receiptId = randomText();
     *
     *        client.watchForReceipt(receiptId, function() {
     *          // Will be called after server acknowledges
     *        });
     *
     *        client.subscribe(TEST.destination, onMessage, {receipt: receiptId});
     *
     *
     *        // Publishing with acknowledgement
     *        receiptId = randomText();
     *
     *        client.watchForReceipt(receiptId, function() {
     *          // Will be called after server acknowledges
     *        });
     *        client.publish({destination: TEST.destination, headers: {receipt: receiptId}, body: msg});
     * ```
     */ watchForReceipt(receiptId, callback) {
        this._stompHandler.watchForReceipt(receiptId, callback);
    }
    /**
     * Subscribe to a STOMP Broker location. The callback will be invoked for each received message with
     * the {@link IMessage} as argument.
     *
     * Note: The library will generate an unique ID if there is none provided in the headers.
     *       To use your own ID, pass it using the headers argument.
     *
     * ```javascript
     *        callback = function(message) {
     *        // called when the client receives a STOMP message from the server
     *          if (message.body) {
     *            alert("got message with body " + message.body)
     *          } else {
     *            alert("got empty message");
     *          }
     *        });
     *
     *        var subscription = client.subscribe("/queue/test", callback);
     *
     *        // Explicit subscription id
     *        var mySubId = 'my-subscription-id-001';
     *        var subscription = client.subscribe(destination, callback, { id: mySubId });
     * ```
     */ subscribe(destination, callback, headers = {
    }) {
        return this._stompHandler.subscribe(destination, callback, headers);
    }
    /**
     * It is preferable to unsubscribe from a subscription by calling
     * `unsubscribe()` directly on {@link StompSubscription} returned by `client.subscribe()`:
     *
     * ```javascript
     *        var subscription = client.subscribe(destination, onmessage);
     *        // ...
     *        subscription.unsubscribe();
     * ```
     *
     * See: http://stomp.github.com/stomp-specification-1.2.html#UNSUBSCRIBE UNSUBSCRIBE Frame
     */ unsubscribe(id, headers = {
    }) {
        this._stompHandler.unsubscribe(id, headers);
    }
    /**
     * Start a transaction, the returned {@link ITransaction} has methods - [commit]{@link ITransaction#commit}
     * and [abort]{@link ITransaction#abort}.
     *
     * `transactionId` is optional, if not passed the library will generate it internally.
     */ begin(transactionId) {
        return this._stompHandler.begin(transactionId);
    }
    /**
     * Commit a transaction.
     *
     * It is preferable to commit a transaction by calling [commit]{@link ITransaction#commit} directly on
     * {@link ITransaction} returned by [client.begin]{@link Client#begin}.
     *
     * ```javascript
     *        var tx = client.begin(txId);
     *        //...
     *        tx.commit();
     * ```
     */ commit(transactionId) {
        this._stompHandler.commit(transactionId);
    }
    /**
     * Abort a transaction.
     * It is preferable to abort a transaction by calling [abort]{@link ITransaction#abort} directly on
     * {@link ITransaction} returned by [client.begin]{@link Client#begin}.
     *
     * ```javascript
     *        var tx = client.begin(txId);
     *        //...
     *        tx.abort();
     * ```
     */ abort(transactionId) {
        this._stompHandler.abort(transactionId);
    }
    /**
     * ACK a message. It is preferable to acknowledge a message by calling [ack]{@link IMessage#ack} directly
     * on the {@link IMessage} handled by a subscription callback:
     *
     * ```javascript
     *        var callback = function (message) {
     *          // process the message
     *          // acknowledge it
     *          message.ack();
     *        };
     *        client.subscribe(destination, callback, {'ack': 'client'});
     * ```
     */ ack(messageId, subscriptionId, headers = {
    }) {
        this._stompHandler.ack(messageId, subscriptionId, headers);
    }
    /**
     * NACK a message. It is preferable to acknowledge a message by calling [nack]{@link IMessage#nack} directly
     * on the {@link IMessage} handled by a subscription callback:
     *
     * ```javascript
     *        var callback = function (message) {
     *          // process the message
     *          // an error occurs, nack it
     *          message.nack();
     *        };
     *        client.subscribe(destination, callback, {'ack': 'client'});
     * ```
     */ nack(messageId, subscriptionId, headers = {
    }) {
        this._stompHandler.nack(messageId, subscriptionId, headers);
    }
}

},{"./stomp-handler":"jQazB","./types":"be49Y","./versions":"6WtVG","@parcel/transformer-js/src/esmodule-helpers.js":"kVR2k"}],"jQazB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The STOMP protocol handler
 *
 * Part of `@stomp/stompjs`.
 *
 * @internal
 */ parcelHelpers.export(exports, "StompHandler", ()=>StompHandler
);
var _byte = require("./byte");
var _frameImpl = require("./frame-impl");
var _parser = require("./parser");
var _types = require("./types");
var _versions = require("./versions");
var _augmentWebsocket = require("./augment-websocket");
class StompHandler {
    constructor(_client, _webSocket, config = {
    }){
        this._client = _client;
        this._webSocket = _webSocket;
        this._serverFrameHandlers = {
            // [CONNECTED Frame](http://stomp.github.com/stomp-specification-1.2.html#CONNECTED_Frame)
            CONNECTED: (frame)=>{
                this.debug(`connected to server ${frame.headers.server}`);
                this._connected = true;
                this._connectedVersion = frame.headers.version;
                // STOMP version 1.2 needs header values to be escaped
                if (this._connectedVersion === _versions.Versions.V1_2) this._escapeHeaderValues = true;
                this._setupHeartbeat(frame.headers);
                this.onConnect(frame);
            },
            // [MESSAGE Frame](http://stomp.github.com/stomp-specification-1.2.html#MESSAGE)
            MESSAGE: (frame)=>{
                // the callback is registered when the client calls
                // `subscribe()`.
                // If there is no registered subscription for the received message,
                // the default `onUnhandledMessage` callback is used that the client can set.
                // This is useful for subscriptions that are automatically created
                // on the browser side (e.g. [RabbitMQ's temporary
                // queues](http://www.rabbitmq.com/stomp.html)).
                const subscription = frame.headers.subscription;
                const onReceive = this._subscriptions[subscription] || this.onUnhandledMessage;
                // bless the frame to be a Message
                const message = frame;
                const client = this;
                const messageId = this._connectedVersion === _versions.Versions.V1_2 ? message.headers.ack : message.headers['message-id'];
                // add `ack()` and `nack()` methods directly to the returned frame
                // so that a simple call to `message.ack()` can acknowledge the message.
                message.ack = (headers = {
                })=>{
                    return client.ack(messageId, subscription, headers);
                };
                message.nack = (headers = {
                })=>{
                    return client.nack(messageId, subscription, headers);
                };
                onReceive(message);
            },
            // [RECEIPT Frame](http://stomp.github.com/stomp-specification-1.2.html#RECEIPT)
            RECEIPT: (frame)=>{
                const callback = this._receiptWatchers[frame.headers['receipt-id']];
                if (callback) {
                    callback(frame);
                    // Server will acknowledge only once, remove the callback
                    delete this._receiptWatchers[frame.headers['receipt-id']];
                } else this.onUnhandledReceipt(frame);
            },
            // [ERROR Frame](http://stomp.github.com/stomp-specification-1.2.html#ERROR)
            ERROR: (frame)=>{
                this.onStompError(frame);
            }
        };
        // used to index subscribers
        this._counter = 0;
        // subscription callbacks indexed by subscriber's ID
        this._subscriptions = {
        };
        // receipt-watchers indexed by receipts-ids
        this._receiptWatchers = {
        };
        this._partialData = '';
        this._escapeHeaderValues = false;
        this._lastServerActivityTS = Date.now();
        this.configure(config);
    }
    get connectedVersion() {
        return this._connectedVersion;
    }
    get connected() {
        return this._connected;
    }
    configure(conf) {
        // bulk assign all properties to this
        Object.assign(this, conf);
    }
    start() {
        const parser = new _parser.Parser(// On Frame
        (rawFrame)=>{
            const frame = _frameImpl.FrameImpl.fromRawFrame(rawFrame, this._escapeHeaderValues);
            // if this.logRawCommunication is set, the rawChunk is logged at this._webSocket.onmessage
            if (!this.logRawCommunication) this.debug(`<<< ${frame}`);
            const serverFrameHandler = this._serverFrameHandlers[frame.command] || this.onUnhandledFrame;
            serverFrameHandler(frame);
        }, // On Incoming Ping
        ()=>{
            this.debug('<<< PONG');
        });
        this._webSocket.onmessage = (evt)=>{
            this.debug('Received data');
            this._lastServerActivityTS = Date.now();
            if (this.logRawCommunication) {
                const rawChunkAsString = evt.data instanceof ArrayBuffer ? new TextDecoder().decode(evt.data) : evt.data;
                this.debug(`<<< ${rawChunkAsString}`);
            }
            parser.parseChunk(evt.data, this.appendMissingNULLonIncoming);
        };
        this._onclose = (closeEvent)=>{
            this.debug(`Connection closed to ${this._client.brokerURL}`);
            this._cleanUp();
            this.onWebSocketClose(closeEvent);
        };
        this._webSocket.onclose = this._onclose;
        this._webSocket.onerror = (errorEvent)=>{
            this.onWebSocketError(errorEvent);
        };
        this._webSocket.onopen = ()=>{
            // Clone before updating
            const connectHeaders = Object.assign({
            }, this.connectHeaders);
            this.debug('Web Socket Opened...');
            connectHeaders['accept-version'] = this.stompVersions.supportedVersions();
            connectHeaders['heart-beat'] = [
                this.heartbeatOutgoing,
                this.heartbeatIncoming, 
            ].join(',');
            this._transmit({
                command: 'CONNECT',
                headers: connectHeaders
            });
        };
    }
    _setupHeartbeat(headers) {
        if (headers.version !== _versions.Versions.V1_1 && headers.version !== _versions.Versions.V1_2) return;
        // It is valid for the server to not send this header
        // https://stomp.github.io/stomp-specification-1.2.html#Heart-beating
        if (!headers['heart-beat']) return;
        // heart-beat header received from the server looks like:
        //
        //     heart-beat: sx, sy
        const [serverOutgoing, serverIncoming] = headers['heart-beat'].split(',').map((v)=>parseInt(v, 10)
        );
        if (this.heartbeatOutgoing !== 0 && serverIncoming !== 0) {
            const ttl = Math.max(this.heartbeatOutgoing, serverIncoming);
            this.debug(`send PING every ${ttl}ms`);
            this._pinger = setInterval(()=>{
                if (this._webSocket.readyState === _types.StompSocketState.OPEN) {
                    this._webSocket.send(_byte.BYTE.LF);
                    this.debug('>>> PING');
                }
            }, ttl);
        }
        if (this.heartbeatIncoming !== 0 && serverOutgoing !== 0) {
            const ttl = Math.max(this.heartbeatIncoming, serverOutgoing);
            this.debug(`check PONG every ${ttl}ms`);
            this._ponger = setInterval(()=>{
                const delta = Date.now() - this._lastServerActivityTS;
                // We wait twice the TTL to be flexible on window's setInterval calls
                if (delta > ttl * 2) {
                    this.debug(`did not receive server activity for the last ${delta}ms`);
                    this._closeOrDiscardWebsocket();
                }
            }, ttl);
        }
    }
    _closeOrDiscardWebsocket() {
        if (this.discardWebsocketOnCommFailure) {
            this.debug('Discarding websocket, the underlying socket may linger for a while');
            this._discardWebsocket();
        } else {
            this.debug('Issuing close on the websocket');
            this._closeWebsocket();
        }
    }
    forceDisconnect() {
        if (this._webSocket) {
            if (this._webSocket.readyState === _types.StompSocketState.CONNECTING || this._webSocket.readyState === _types.StompSocketState.OPEN) this._closeOrDiscardWebsocket();
        }
    }
    _closeWebsocket() {
        this._webSocket.onmessage = ()=>{
        }; // ignore messages
        this._webSocket.close();
    }
    _discardWebsocket() {
        if (!this._webSocket.terminate) _augmentWebsocket.augmentWebsocket(this._webSocket, (msg)=>this.debug(msg)
        );
        this._webSocket.terminate();
    }
    _transmit(params) {
        const { command , headers , body , binaryBody , skipContentLengthHeader  } = params;
        const frame = new _frameImpl.FrameImpl({
            command,
            headers,
            body,
            binaryBody,
            escapeHeaderValues: this._escapeHeaderValues,
            skipContentLengthHeader
        });
        let rawChunk = frame.serialize();
        if (this.logRawCommunication) this.debug(`>>> ${rawChunk}`);
        else this.debug(`>>> ${frame}`);
        if (this.forceBinaryWSFrames && typeof rawChunk === 'string') rawChunk = new TextEncoder().encode(rawChunk);
        if (typeof rawChunk !== 'string' || !this.splitLargeFrames) this._webSocket.send(rawChunk);
        else {
            let out = rawChunk;
            while(out.length > 0){
                const chunk = out.substring(0, this.maxWebSocketChunkSize);
                out = out.substring(this.maxWebSocketChunkSize);
                this._webSocket.send(chunk);
                this.debug(`chunk sent = ${chunk.length}, remaining = ${out.length}`);
            }
        }
    }
    dispose() {
        if (this.connected) try {
            // clone before updating
            const disconnectHeaders = Object.assign({
            }, this.disconnectHeaders);
            if (!disconnectHeaders.receipt) disconnectHeaders.receipt = `close-${this._counter++}`;
            this.watchForReceipt(disconnectHeaders.receipt, (frame)=>{
                this._closeWebsocket();
                this._cleanUp();
                this.onDisconnect(frame);
            });
            this._transmit({
                command: 'DISCONNECT',
                headers: disconnectHeaders
            });
        } catch (error) {
            this.debug(`Ignoring error during disconnect ${error}`);
        }
        else if (this._webSocket.readyState === _types.StompSocketState.CONNECTING || this._webSocket.readyState === _types.StompSocketState.OPEN) this._closeWebsocket();
    }
    _cleanUp() {
        this._connected = false;
        if (this._pinger) clearInterval(this._pinger);
        if (this._ponger) clearInterval(this._ponger);
    }
    publish(params) {
        const { destination , headers , body , binaryBody , skipContentLengthHeader  } = params;
        const hdrs = Object.assign({
            destination
        }, headers);
        this._transmit({
            command: 'SEND',
            headers: hdrs,
            body,
            binaryBody,
            skipContentLengthHeader
        });
    }
    watchForReceipt(receiptId, callback) {
        this._receiptWatchers[receiptId] = callback;
    }
    subscribe(destination, callback, headers = {
    }) {
        headers = Object.assign({
        }, headers);
        if (!headers.id) headers.id = `sub-${this._counter++}`;
        headers.destination = destination;
        this._subscriptions[headers.id] = callback;
        this._transmit({
            command: 'SUBSCRIBE',
            headers
        });
        const client = this;
        return {
            id: headers.id,
            unsubscribe (hdrs) {
                return client.unsubscribe(headers.id, hdrs);
            }
        };
    }
    unsubscribe(id, headers = {
    }) {
        headers = Object.assign({
        }, headers);
        delete this._subscriptions[id];
        headers.id = id;
        this._transmit({
            command: 'UNSUBSCRIBE',
            headers
        });
    }
    begin(transactionId) {
        const txId = transactionId || `tx-${this._counter++}`;
        this._transmit({
            command: 'BEGIN',
            headers: {
                transaction: txId
            }
        });
        const client = this;
        return {
            id: txId,
            commit () {
                client.commit(txId);
            },
            abort () {
                client.abort(txId);
            }
        };
    }
    commit(transactionId) {
        this._transmit({
            command: 'COMMIT',
            headers: {
                transaction: transactionId
            }
        });
    }
    abort(transactionId) {
        this._transmit({
            command: 'ABORT',
            headers: {
                transaction: transactionId
            }
        });
    }
    ack(messageId, subscriptionId, headers = {
    }) {
        headers = Object.assign({
        }, headers);
        if (this._connectedVersion === _versions.Versions.V1_2) headers.id = messageId;
        else headers['message-id'] = messageId;
        headers.subscription = subscriptionId;
        this._transmit({
            command: 'ACK',
            headers
        });
    }
    nack(messageId, subscriptionId, headers = {
    }) {
        headers = Object.assign({
        }, headers);
        if (this._connectedVersion === _versions.Versions.V1_2) headers.id = messageId;
        else headers['message-id'] = messageId;
        headers.subscription = subscriptionId;
        return this._transmit({
            command: 'NACK',
            headers
        });
    }
}

},{"./byte":"jm3a5","./frame-impl":"1UN9e","./parser":"7jQAr","./types":"be49Y","./versions":"6WtVG","./augment-websocket":"hBAnG","@parcel/transformer-js/src/esmodule-helpers.js":"kVR2k"}],"jm3a5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BYTE", ()=>BYTE
);
const BYTE = {
    // LINEFEED byte (octet 10)
    LF: '\x0A',
    // NULL byte (octet 0)
    NULL: '\x00'
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"kVR2k"}],"1UN9e":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Frame class represents a STOMP frame.
 *
 * @internal
 */ parcelHelpers.export(exports, "FrameImpl", ()=>FrameImpl
);
var _byte = require("./byte");
class FrameImpl {
    /**
     * Frame constructor. `command`, `headers` and `body` are available as properties.
     *
     * @internal
     */ constructor(params){
        const { command , headers , body , binaryBody , escapeHeaderValues , skipContentLengthHeader ,  } = params;
        this.command = command;
        this.headers = Object.assign({
        }, headers || {
        });
        if (binaryBody) {
            this._binaryBody = binaryBody;
            this.isBinaryBody = true;
        } else {
            this._body = body || '';
            this.isBinaryBody = false;
        }
        this.escapeHeaderValues = escapeHeaderValues || false;
        this.skipContentLengthHeader = skipContentLengthHeader || false;
    }
    /**
     * body of the frame
     */ get body() {
        if (!this._body && this.isBinaryBody) this._body = new TextDecoder().decode(this._binaryBody);
        return this._body;
    }
    /**
     * body as Uint8Array
     */ get binaryBody() {
        if (!this._binaryBody && !this.isBinaryBody) this._binaryBody = new TextEncoder().encode(this._body);
        return this._binaryBody;
    }
    /**
     * deserialize a STOMP Frame from raw data.
     *
     * @internal
     */ static fromRawFrame(rawFrame, escapeHeaderValues) {
        const headers = {
        };
        const trim = (str)=>str.replace(/^\s+|\s+$/g, '')
        ;
        // In case of repeated headers, as per standards, first value need to be used
        for (const header of rawFrame.headers.reverse()){
            const idx = header.indexOf(':');
            const key = trim(header[0]);
            let value = trim(header[1]);
            if (escapeHeaderValues && rawFrame.command !== 'CONNECT' && rawFrame.command !== 'CONNECTED') value = FrameImpl.hdrValueUnEscape(value);
            headers[key] = value;
        }
        return new FrameImpl({
            command: rawFrame.command,
            headers,
            binaryBody: rawFrame.binaryBody,
            escapeHeaderValues
        });
    }
    /**
     * @internal
     */ toString() {
        return this.serializeCmdAndHeaders();
    }
    /**
     * serialize this Frame in a format suitable to be passed to WebSocket.
     * If the body is string the output will be string.
     * If the body is binary (i.e. of type Unit8Array) it will be serialized to ArrayBuffer.
     *
     * @internal
     */ serialize() {
        const cmdAndHeaders = this.serializeCmdAndHeaders();
        if (this.isBinaryBody) return FrameImpl.toUnit8Array(cmdAndHeaders, this._binaryBody).buffer;
        else return cmdAndHeaders + this._body + _byte.BYTE.NULL;
    }
    serializeCmdAndHeaders() {
        const lines = [
            this.command
        ];
        if (this.skipContentLengthHeader) delete this.headers['content-length'];
        for (const name of Object.keys(this.headers || {
        })){
            const value = this.headers[name];
            if (this.escapeHeaderValues && this.command !== 'CONNECT' && this.command !== 'CONNECTED') lines.push(`${name}:${FrameImpl.hdrValueEscape(`${value}`)}`);
            else lines.push(`${name}:${value}`);
        }
        if (this.isBinaryBody || !this.isBodyEmpty() && !this.skipContentLengthHeader) lines.push(`content-length:${this.bodyLength()}`);
        return lines.join(_byte.BYTE.LF) + _byte.BYTE.LF + _byte.BYTE.LF;
    }
    isBodyEmpty() {
        return this.bodyLength() === 0;
    }
    bodyLength() {
        const binaryBody = this.binaryBody;
        return binaryBody ? binaryBody.length : 0;
    }
    /**
     * Compute the size of a UTF-8 string by counting its number of bytes
     * (and not the number of characters composing the string)
     */ static sizeOfUTF8(s) {
        return s ? new TextEncoder().encode(s).length : 0;
    }
    static toUnit8Array(cmdAndHeaders, binaryBody) {
        const uint8CmdAndHeaders = new TextEncoder().encode(cmdAndHeaders);
        const nullTerminator = new Uint8Array([
            0
        ]);
        const uint8Frame = new Uint8Array(uint8CmdAndHeaders.length + binaryBody.length + nullTerminator.length);
        uint8Frame.set(uint8CmdAndHeaders);
        uint8Frame.set(binaryBody, uint8CmdAndHeaders.length);
        uint8Frame.set(nullTerminator, uint8CmdAndHeaders.length + binaryBody.length);
        return uint8Frame;
    }
    /**
     * Serialize a STOMP frame as per STOMP standards, suitable to be sent to the STOMP broker.
     *
     * @internal
     */ static marshall(params) {
        const frame = new FrameImpl(params);
        return frame.serialize();
    }
    /**
     *  Escape header values
     */ static hdrValueEscape(str) {
        return str.replace(/\\/g, '\\\\').replace(/\r/g, '\\r').replace(/\n/g, '\\n').replace(/:/g, '\\c');
    }
    /**
     * UnEscape header values
     */ static hdrValueUnEscape(str) {
        return str.replace(/\\r/g, '\r').replace(/\\n/g, '\n').replace(/\\c/g, ':').replace(/\\\\/g, '\\');
    }
}

},{"./byte":"jm3a5","@parcel/transformer-js/src/esmodule-helpers.js":"kVR2k"}],"7jQAr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * This is an evented, rec descent parser.
 * A stream of Octets can be passed and whenever it recognizes
 * a complete Frame or an incoming ping it will invoke the registered callbacks.
 *
 * All incoming Octets are fed into _onByte function.
 * Depending on current state the _onByte function keeps changing.
 * Depending on the state it keeps accumulating into _token and _results.
 * State is indicated by current value of _onByte, all states are named as _collect.
 *
 * STOMP standards https://stomp.github.io/stomp-specification-1.2.html
 * imply that all lengths are considered in bytes (instead of string lengths).
 * So, before actual parsing, if the incoming data is String it is converted to Octets.
 * This allows faithful implementation of the protocol and allows NULL Octets to be present in the body.
 *
 * There is no peek function on the incoming data.
 * When a state change occurs based on an Octet without consuming the Octet,
 * the Octet, after state change, is fed again (_reinjectByte).
 * This became possible as the state change can be determined by inspecting just one Octet.
 *
 * There are two modes to collect the body, if content-length header is there then it by counting Octets
 * otherwise it is determined by NULL terminator.
 *
 * Following the standards, the command and headers are converted to Strings
 * and the body is returned as Octets.
 * Headers are returned as an array and not as Hash - to allow multiple occurrence of an header.
 *
 * This parser does not use Regular Expressions as that can only operate on Strings.
 *
 * It handles if multiple STOMP frames are given as one chunk, a frame is split into multiple chunks, or
 * any combination there of. The parser remembers its state (any partial frame) and continues when a new chunk
 * is pushed.
 *
 * Typically the higher level function will convert headers to Hash, handle unescaping of header values
 * (which is protocol version specific), and convert body to text.
 *
 * Check the parser.spec.js to understand cases that this parser is supposed to handle.
 *
 * Part of `@stomp/stompjs`.
 *
 * @internal
 */ parcelHelpers.export(exports, "Parser", ()=>Parser
);
/**
 * @internal
 */ const NULL = 0;
/**
 * @internal
 */ const LF = 10;
/**
 * @internal
 */ const CR = 13;
/**
 * @internal
 */ const COLON = 58;
class Parser {
    constructor(onFrame, onIncomingPing){
        this.onFrame = onFrame;
        this.onIncomingPing = onIncomingPing;
        this._encoder = new TextEncoder();
        this._decoder = new TextDecoder();
        this._token = [];
        this._initState();
    }
    parseChunk(segment, appendMissingNULLonIncoming = false) {
        let chunk;
        if (segment instanceof ArrayBuffer) chunk = new Uint8Array(segment);
        else chunk = this._encoder.encode(segment);
        // See https://github.com/stomp-js/stompjs/issues/89
        // Remove when underlying issue is fixed.
        //
        // Send a NULL byte, if the last byte of a Text frame was not NULL.F
        if (appendMissingNULLonIncoming && chunk[chunk.length - 1] !== 0) {
            const chunkWithNull = new Uint8Array(chunk.length + 1);
            chunkWithNull.set(chunk, 0);
            chunkWithNull[chunk.length] = 0;
            chunk = chunkWithNull;
        }
        // tslint:disable-next-line:prefer-for-of
        for(let i = 0; i < chunk.length; i++){
            const byte = chunk[i];
            this._onByte(byte);
        }
    }
    // The following implements a simple Rec Descent Parser.
    // The grammar is simple and just one byte tells what should be the next state
    _collectFrame(byte) {
        if (byte === NULL) // Ignore
        return;
        if (byte === CR) // Ignore CR
        return;
        if (byte === LF) {
            // Incoming Ping
            this.onIncomingPing();
            return;
        }
        this._onByte = this._collectCommand;
        this._reinjectByte(byte);
    }
    _collectCommand(byte) {
        if (byte === CR) // Ignore CR
        return;
        if (byte === LF) {
            this._results.command = this._consumeTokenAsUTF8();
            this._onByte = this._collectHeaders;
            return;
        }
        this._consumeByte(byte);
    }
    _collectHeaders(byte) {
        if (byte === CR) // Ignore CR
        return;
        if (byte === LF) {
            this._setupCollectBody();
            return;
        }
        this._onByte = this._collectHeaderKey;
        this._reinjectByte(byte);
    }
    _reinjectByte(byte) {
        this._onByte(byte);
    }
    _collectHeaderKey(byte) {
        if (byte === COLON) {
            this._headerKey = this._consumeTokenAsUTF8();
            this._onByte = this._collectHeaderValue;
            return;
        }
        this._consumeByte(byte);
    }
    _collectHeaderValue(byte) {
        if (byte === CR) // Ignore CR
        return;
        if (byte === LF) {
            this._results.headers.push([
                this._headerKey,
                this._consumeTokenAsUTF8()
            ]);
            this._headerKey = undefined;
            this._onByte = this._collectHeaders;
            return;
        }
        this._consumeByte(byte);
    }
    _setupCollectBody() {
        const contentLengthHeader = this._results.headers.filter((header)=>{
            return header[0] === 'content-length';
        })[0];
        if (contentLengthHeader) {
            this._bodyBytesRemaining = parseInt(contentLengthHeader[1], 10);
            this._onByte = this._collectBodyFixedSize;
        } else this._onByte = this._collectBodyNullTerminated;
    }
    _collectBodyNullTerminated(byte) {
        if (byte === NULL) {
            this._retrievedBody();
            return;
        }
        this._consumeByte(byte);
    }
    _collectBodyFixedSize(byte) {
        // It is post decrement, so that we discard the trailing NULL octet
        if ((this._bodyBytesRemaining--) === 0) {
            this._retrievedBody();
            return;
        }
        this._consumeByte(byte);
    }
    _retrievedBody() {
        this._results.binaryBody = this._consumeTokenAsRaw();
        this.onFrame(this._results);
        this._initState();
    }
    // Rec Descent Parser helpers
    _consumeByte(byte) {
        this._token.push(byte);
    }
    _consumeTokenAsUTF8() {
        return this._decoder.decode(this._consumeTokenAsRaw());
    }
    _consumeTokenAsRaw() {
        const rawResult = new Uint8Array(this._token);
        this._token = [];
        return rawResult;
    }
    _initState() {
        this._results = {
            command: undefined,
            headers: [],
            binaryBody: undefined
        };
        this._token = [];
        this._headerKey = undefined;
        this._onByte = this._collectFrame;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"kVR2k"}],"be49Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StompSocketState", ()=>StompSocketState
);
parcelHelpers.export(exports, "ActivationState", ()=>ActivationState
);
var StompSocketState;
(function(StompSocketState1) {
    StompSocketState1[StompSocketState1["CONNECTING"] = 0] = "CONNECTING";
    StompSocketState1[StompSocketState1["OPEN"] = 1] = "OPEN";
    StompSocketState1[StompSocketState1["CLOSING"] = 2] = "CLOSING";
    StompSocketState1[StompSocketState1["CLOSED"] = 3] = "CLOSED";
})(StompSocketState || (StompSocketState = {
}));
var ActivationState;
(function(ActivationState1) {
    ActivationState1[ActivationState1["ACTIVE"] = 0] = "ACTIVE";
    ActivationState1[ActivationState1["DEACTIVATING"] = 1] = "DEACTIVATING";
    ActivationState1[ActivationState1["INACTIVE"] = 2] = "INACTIVE";
})(ActivationState || (ActivationState = {
}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"kVR2k"}],"6WtVG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Supported STOMP versions
 *
 * Part of `@stomp/stompjs`.
 */ parcelHelpers.export(exports, "Versions", ()=>Versions
);
class Versions {
    /**
     * Takes an array of string of versions, typical elements '1.0', '1.1', or '1.2'
     *
     * You will an instance if this class if you want to override supported versions to be declared during
     * STOMP handshake.
     */ constructor(versions){
        this.versions = versions;
    }
    /**
     * Used as part of CONNECT STOMP Frame
     */ supportedVersions() {
        return this.versions.join(',');
    }
    /**
     * Used while creating a WebSocket
     */ protocolVersions() {
        return this.versions.map((x)=>`v${x.replace('.', '')}.stomp`
        );
    }
}
/**
 * Indicates protocol version 1.0
 */ Versions.V1_0 = '1.0';
/**
 * Indicates protocol version 1.1
 */ Versions.V1_1 = '1.1';
/**
 * Indicates protocol version 1.2
 */ Versions.V1_2 = '1.2';
/**
 * @internal
 */ Versions.default = new Versions([
    Versions.V1_0,
    Versions.V1_1,
    Versions.V1_2, 
]);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"kVR2k"}],"hBAnG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @internal
 */ parcelHelpers.export(exports, "augmentWebsocket", ()=>augmentWebsocket
);
function augmentWebsocket(webSocket, debug) {
    webSocket.terminate = function() {
        const noOp = ()=>{
        };
        // set all callbacks to no op
        this.onerror = noOp;
        this.onmessage = noOp;
        this.onopen = noOp;
        const ts = new Date();
        const origOnClose = this.onclose;
        // Track delay in actual closure of the socket
        this.onclose = (closeEvent)=>{
            const delay = new Date().getTime() - ts.getTime();
            debug(`Discarded socket closed after ${delay}ms, with code/reason: ${closeEvent.code}/${closeEvent.reason}`);
        };
        this.close();
        origOnClose.call(this, {
            code: 4001,
            reason: 'Heartbeat failure, discarding the socket',
            wasClean: false
        });
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"kVR2k"}],"d1qLZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Configuration options for STOMP Client, each key corresponds to
 * field by the same name in {@link Client}. This can be passed to
 * the constructor of {@link Client} or to [Client#configure]{@link Client#configure}.
 *
 * There used to be a class with the same name in `@stomp/ng2-stompjs`, which has been replaced by
 * {@link RxStompConfig} and {@link InjectableRxStompConfig}.
 *
 * Part of `@stomp/stompjs`.
 */ parcelHelpers.export(exports, "StompConfig", ()=>StompConfig
);
class StompConfig {
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"kVR2k"}],"f2sTf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * STOMP headers. Many functions calls will accept headers as parameters.
 * The headers sent by Broker will be available as [IFrame#headers]{@link IFrame#headers}.
 *
 * `key` and `value` must be valid strings.
 * In addition, `key` must not contain `CR`, `LF`, or `:`.
 *
 * Part of `@stomp/stompjs`.
 */ parcelHelpers.export(exports, "StompHeaders", ()=>StompHeaders
);
class StompHeaders {
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"kVR2k"}],"3IeQ2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Call [Client#subscribe]{@link Client#subscribe} to create a StompSubscription.
 *
 * Part of `@stomp/stompjs`.
 */ parcelHelpers.export(exports, "StompSubscription", ()=>StompSubscription
);
class StompSubscription {
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"kVR2k"}],"kiyyd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Available for backward compatibility, please shift to using {@link Client}.
 *
 * **Deprecated**
 *
 * Part of `@stomp/stompjs`.
 *
 * To upgrade, please follow the [Upgrade Guide](../additional-documentation/upgrading.html)
 */ parcelHelpers.export(exports, "CompatClient", ()=>CompatClient
);
var _client = require("../client");
var _heartbeatInfo = require("./heartbeat-info");
class CompatClient extends _client.Client {
    /**
     * Available for backward compatibility, please shift to using {@link Client}
     * and [Client#webSocketFactory]{@link Client#webSocketFactory}.
     *
     * **Deprecated**
     *
     * @internal
     */ constructor(webSocketFactory){
        super();
        /**
         * It is no op now. No longer needed. Large packets work out of the box.
         */ this.maxWebSocketFrameSize = 16384;
        this._heartbeatInfo = new _heartbeatInfo.HeartbeatInfo(this);
        this.reconnect_delay = 0;
        this.webSocketFactory = webSocketFactory;
        // Default from previous version
        this.debug = (...message)=>{
            console.log(...message);
        };
    }
    _parseConnect(...args) {
        let closeEventCallback;
        let connectCallback;
        let errorCallback;
        let headers = {
        };
        if (args.length < 2) throw new Error('Connect requires at least 2 arguments');
        if (typeof args[1] === 'function') [headers, connectCallback, errorCallback, closeEventCallback] = args;
        else switch(args.length){
            case 6:
                [headers.login, headers.passcode, connectCallback, errorCallback, closeEventCallback, headers.host, ] = args;
                break;
            default:
                [headers.login, headers.passcode, connectCallback, errorCallback, closeEventCallback, ] = args;
        }
        return [
            headers,
            connectCallback,
            errorCallback,
            closeEventCallback
        ];
    }
    /**
     * Available for backward compatibility, please shift to using [Client#activate]{@link Client#activate}.
     *
     * **Deprecated**
     *
     * The `connect` method accepts different number of arguments and types. See the Overloads list. Use the
     * version with headers to pass your broker specific options.
     *
     * overloads:
     * - connect(headers, connectCallback)
     * - connect(headers, connectCallback, errorCallback)
     * - connect(login, passcode, connectCallback)
     * - connect(login, passcode, connectCallback, errorCallback)
     * - connect(login, passcode, connectCallback, errorCallback, closeEventCallback)
     * - connect(login, passcode, connectCallback, errorCallback, closeEventCallback, host)
     *
     * params:
     * - headers, see [Client#connectHeaders]{@link Client#connectHeaders}
     * - connectCallback, see [Client#onConnect]{@link Client#onConnect}
     * - errorCallback, see [Client#onStompError]{@link Client#onStompError}
     * - closeEventCallback, see [Client#onWebSocketClose]{@link Client#onWebSocketClose}
     * - login [String], see [Client#connectHeaders](../classes/Client.html#connectHeaders)
     * - passcode [String], [Client#connectHeaders](../classes/Client.html#connectHeaders)
     * - host [String], see [Client#connectHeaders](../classes/Client.html#connectHeaders)
     *
     * To upgrade, please follow the [Upgrade Guide](../additional-documentation/upgrading.html)
     */ connect(...args) {
        const out = this._parseConnect(...args);
        if (out[0]) this.connectHeaders = out[0];
        if (out[1]) this.onConnect = out[1];
        if (out[2]) this.onStompError = out[2];
        if (out[3]) this.onWebSocketClose = out[3];
        super.activate();
    }
    /**
     * Available for backward compatibility, please shift to using [Client#deactivate]{@link Client#deactivate}.
     *
     * **Deprecated**
     *
     * See:
     * [Client#onDisconnect]{@link Client#onDisconnect}, and
     * [Client#disconnectHeaders]{@link Client#disconnectHeaders}
     *
     * To upgrade, please follow the [Upgrade Guide](../additional-documentation/upgrading.html)
     */ disconnect(disconnectCallback, headers = {
    }) {
        if (disconnectCallback) this.onDisconnect = disconnectCallback;
        this.disconnectHeaders = headers;
        super.deactivate();
    }
    /**
     * Available for backward compatibility, use [Client#publish]{@link Client#publish}.
     *
     * Send a message to a named destination. Refer to your STOMP broker documentation for types
     * and naming of destinations. The headers will, typically, be available to the subscriber.
     * However, there may be special purpose headers corresponding to your STOMP broker.
     *
     *  **Deprecated**, use [Client#publish]{@link Client#publish}
     *
     * Note: Body must be String. You will need to covert the payload to string in case it is not string (e.g. JSON)
     *
     * ```javascript
     *        client.send("/queue/test", {priority: 9}, "Hello, STOMP");
     *
     *        // If you want to send a message with a body, you must also pass the headers argument.
     *        client.send("/queue/test", {}, "Hello, STOMP");
     * ```
     *
     * To upgrade, please follow the [Upgrade Guide](../additional-documentation/upgrading.html)
     */ send(destination, headers = {
    }, body = '') {
        headers = Object.assign({
        }, headers);
        const skipContentLengthHeader = headers['content-length'] === false;
        if (skipContentLengthHeader) delete headers['content-length'];
        this.publish({
            destination,
            headers: headers,
            body,
            skipContentLengthHeader
        });
    }
    /**
     * Available for backward compatibility, renamed to [Client#reconnectDelay]{@link Client#reconnectDelay}.
     *
     * **Deprecated**
     */ set reconnect_delay(value) {
        this.reconnectDelay = value;
    }
    /**
     * Available for backward compatibility, renamed to [Client#webSocket]{@link Client#webSocket}.
     *
     * **Deprecated**
     */ get ws() {
        return this.webSocket;
    }
    /**
     * Available for backward compatibility, renamed to [Client#connectedVersion]{@link Client#connectedVersion}.
     *
     * **Deprecated**
     */ get version() {
        return this.connectedVersion;
    }
    /**
     * Available for backward compatibility, renamed to [Client#onUnhandledMessage]{@link Client#onUnhandledMessage}.
     *
     * **Deprecated**
     */ get onreceive() {
        return this.onUnhandledMessage;
    }
    /**
     * Available for backward compatibility, renamed to [Client#onUnhandledMessage]{@link Client#onUnhandledMessage}.
     *
     * **Deprecated**
     */ set onreceive(value) {
        this.onUnhandledMessage = value;
    }
    /**
     * Available for backward compatibility, renamed to [Client#onUnhandledReceipt]{@link Client#onUnhandledReceipt}.
     * Prefer using [Client#watchForReceipt]{@link Client#watchForReceipt}.
     *
     * **Deprecated**
     */ get onreceipt() {
        return this.onUnhandledReceipt;
    }
    /**
     * Available for backward compatibility, renamed to [Client#onUnhandledReceipt]{@link Client#onUnhandledReceipt}.
     *
     * **Deprecated**
     */ set onreceipt(value) {
        this.onUnhandledReceipt = value;
    }
    /**
     * Available for backward compatibility, renamed to [Client#heartbeatIncoming]{@link Client#heartbeatIncoming}
     * [Client#heartbeatOutgoing]{@link Client#heartbeatOutgoing}.
     *
     * **Deprecated**
     */ get heartbeat() {
        return this._heartbeatInfo;
    }
    /**
     * Available for backward compatibility, renamed to [Client#heartbeatIncoming]{@link Client#heartbeatIncoming}
     * [Client#heartbeatOutgoing]{@link Client#heartbeatOutgoing}.
     *
     * **Deprecated**
     */ set heartbeat(value) {
        this.heartbeatIncoming = value.incoming;
        this.heartbeatOutgoing = value.outgoing;
    }
}

},{"../client":"irYAQ","./heartbeat-info":"asu4r","@parcel/transformer-js/src/esmodule-helpers.js":"kVR2k"}],"asu4r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Part of `@stomp/stompjs`.
 *
 * @internal
 */ parcelHelpers.export(exports, "HeartbeatInfo", ()=>HeartbeatInfo
);
class HeartbeatInfo {
    constructor(client){
        this.client = client;
    }
    get outgoing() {
        return this.client.heartbeatOutgoing;
    }
    set outgoing(value) {
        this.client.heartbeatOutgoing = value;
    }
    get incoming() {
        return this.client.heartbeatIncoming;
    }
    set incoming(value) {
        this.client.heartbeatIncoming = value;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"kVR2k"}],"bBqwU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * STOMP Class, acts like a factory to create {@link Client}.
 *
 * Part of `@stomp/stompjs`.
 *
 * **Deprecated**
 *
 * It will be removed in next major version. Please switch to {@link Client}.
 */ parcelHelpers.export(exports, "Stomp", ()=>Stomp
);
var _versions = require("../versions");
var _compatClient = require("./compat-client");
class Stomp {
    /**
     * This method creates a WebSocket client that is connected to
     * the STOMP server located at the url.
     *
     * ```javascript
     *        var url = "ws://localhost:61614/stomp";
     *        var client = Stomp.client(url);
     * ```
     *
     * **Deprecated**
     *
     * It will be removed in next major version. Please switch to {@link Client}
     * using [Client#brokerURL]{@link Client#brokerURL}.
     */ static client(url, protocols) {
        // This is a hack to allow another implementation than the standard
        // HTML5 WebSocket class.
        //
        // It is possible to use another class by calling
        //
        //     Stomp.WebSocketClass = MozWebSocket
        //
        // *prior* to call `Stomp.client()`.
        //
        // This hack is deprecated and `Stomp.over()` method should be used
        // instead.
        // See remarks on the function Stomp.over
        if (protocols == null) protocols = _versions.Versions.default.protocolVersions();
        const wsFn = ()=>{
            const klass = Stomp.WebSocketClass || WebSocket;
            return new klass(url, protocols);
        };
        return new _compatClient.CompatClient(wsFn);
    }
    /**
     * This method is an alternative to [Stomp#client]{@link Stomp#client} to let the user
     * specify the WebSocket to use (either a standard HTML5 WebSocket or
     * a similar object).
     *
     * In order to support reconnection, the function Client._connect should be callable more than once.
     * While reconnecting
     * a new instance of underlying transport (TCP Socket, WebSocket or SockJS) will be needed. So, this function
     * alternatively allows passing a function that should return a new instance of the underlying socket.
     *
     * ```javascript
     *        var client = Stomp.over(function(){
     *          return new WebSocket('ws://localhost:15674/ws')
     *        });
     * ```
     *
     * **Deprecated**
     *
     * It will be removed in next major version. Please switch to {@link Client}
     * using [Client#webSocketFactory]{@link Client#webSocketFactory}.
     */ static over(ws) {
        let wsFn;
        if (typeof ws === 'function') wsFn = ws;
        else {
            console.warn("Stomp.over did not receive a factory, auto reconnect will not work. Please see https://stomp-js.github.io/api-docs/latest/classes/Stomp.html#over");
            wsFn = ()=>ws
            ;
        }
        return new _compatClient.CompatClient(wsFn);
    }
}
/**
 * In case you need to use a non standard class for WebSocket.
 *
 * For example when using within NodeJS environment:
 *
 * ```javascript
 *        StompJs = require('../../esm5/');
 *        Stomp = StompJs.Stomp;
 *        Stomp.WebSocketClass = require('websocket').w3cwebsocket;
 * ```
 *
 * **Deprecated**
 *
 *
 * It will be removed in next major version. Please switch to {@link Client}
 * using [Client#webSocketFactory]{@link Client#webSocketFactory}.
 */ // tslint:disable-next-line:variable-name
Stomp.WebSocketClass = null;

},{"../versions":"6WtVG","./compat-client":"kiyyd","@parcel/transformer-js/src/esmodule-helpers.js":"kVR2k"}],"62Duu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isMobile", ()=>isMobile
);
parcelHelpers.export(exports, "isAndroid", ()=>isAndroid
);
parcelHelpers.export(exports, "isIOS", ()=>isIOS
);
parcelHelpers.export(exports, "isMobileSafari", ()=>isMobileSafari
);
parcelHelpers.export(exports, "isIPad", ()=>isIPad
);
const isMobile = ()=>{
    return isAndroid() || isIOS();
};
const isAndroid = ()=>{
    return getPlatform() === 'android';
};
const isIOS = ()=>{
    return getPlatform() === 'ios';
};
const isMobileSafari = ()=>{
    return /iP(ad|hone|od).+Version\/[\d\.]+.*Safari/i.test(navigator.userAgent);
};
const isIPad = ()=>{
    const ua = navigator.userAgent.toLowerCase();
    if (ua.includes('ipad')) return true;
    if (ua.includes('iphone')) return false;
    if (ua.includes('mac') && 'ontouchend' in document) return true;
    return false;
};
const getPlatform = ()=>{
    const userAgent = window.navigator.userAgent;
    const platform = window.navigator.platform;
    const iosPlatforms = [
        'iPhone',
        'iPad',
        'iPod'
    ];
    const macosPlatforms = [
        'Macintosh',
        'MacIntel',
        'MacPPC',
        'Mac68K'
    ];
    const touchPoints = navigator.maxTouchPoints && navigator.maxTouchPoints > 2;
    if ((iosPlatforms.indexOf(platform) !== -1 || macosPlatforms.indexOf(platform) !== -1) && touchPoints) return 'ios';
    if (/Android/.test(userAgent) && touchPoints) return 'android';
    return 'desktop';
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"kVR2k"}]},["h2tcR","4ZiKG"], "4ZiKG", "parcelRequire94c2")

//# sourceMappingURL=index.d3a371e8.js.map
