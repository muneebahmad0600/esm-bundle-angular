/* esm-bundle - @angular/platform-browser-dynamic@19.2.20 - es format - Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at https://angular.io/license */
import * as i0 from '@angular/core';
import { Version, Injectable, createPlatformFactory, COMPILER_OPTIONS, CompilerFactory, ViewEncapsulation, Injector, Compiler } from '@angular/core';
import { ResourceLoader, CompilerConfig } from '@angular/compiler';
import { platformBrowser } from '@angular/platform-browser';

/**
 * @license Angular v19.2.20
 * (c) 2010-2025 Google LLC. https://angular.io/
 * License: MIT
 */


/**
 * @module
 * @description
 * Entry point for all public APIs of the platform-browser-dynamic package.
 */
/**
 * @publicApi
 */
const VERSION = new Version('19.2.20');
const COMPILER_PROVIDERS = [{
  provide: Compiler,
  useFactory: () => new Compiler()
}];
/**
 * @publicApi
 *
 * @deprecated
 * Ivy JIT mode doesn't require accessing this symbol.
 */
class JitCompilerFactory {
  _defaultOptions;
  /** @internal */
  constructor(defaultOptions) {
    const compilerOptions = {
      defaultEncapsulation: ViewEncapsulation.Emulated
    };
    this._defaultOptions = [compilerOptions, ...defaultOptions];
  }
  createCompiler(options = []) {
    const opts = _mergeOptions(this._defaultOptions.concat(options));
    const injector = Injector.create({
      providers: [COMPILER_PROVIDERS, {
        provide: CompilerConfig,
        useFactory: () => {
          return new CompilerConfig({
            defaultEncapsulation: opts.defaultEncapsulation,
            preserveWhitespaces: opts.preserveWhitespaces
          });
        },
        deps: []
      }, opts.providers]
    });
    return injector.get(Compiler);
  }
}
function _mergeOptions(optionsArr) {
  return {
    defaultEncapsulation: _lastDefined(optionsArr.map(options => options.defaultEncapsulation)),
    providers: _mergeArrays(optionsArr.map(options => options.providers)),
    preserveWhitespaces: _lastDefined(optionsArr.map(options => options.preserveWhitespaces))
  };
}
function _lastDefined(args) {
  for (let i = args.length - 1; i >= 0; i--) {
    if (args[i] !== undefined) {
      return args[i];
    }
  }
  return undefined;
}
function _mergeArrays(parts) {
  const result = [];
  parts.forEach(part => part && result.push(...part));
  return result;
}
class ResourceLoaderImpl extends ResourceLoader {
  get(url) {
    let resolve;
    let reject;
    const promise = new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    });
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'text';
    xhr.onload = function () {
      const response = xhr.response;
      let status = xhr.status;
      // fix status code when it is 0 (0 status is undocumented).
      // Occurs when accessing file resources or on Android 4.1 stock browser
      // while retrieving files from application cache.
      if (status === 0) {
        status = response ? 200 : 0;
      }
      if (200 <= status && status <= 300) {
        resolve(response);
      } else {
        reject(`Failed to load ${url}`);
      }
    };
    xhr.onerror = function () {
      reject(`Failed to load ${url}`);
    };
    xhr.send();
    return promise;
  }
  static ɵfac = /* @__PURE__ */(() => {
    let ɵResourceLoaderImpl_BaseFactory;
    return function ResourceLoaderImpl_Factory(__ngFactoryType__) {
      return (ɵResourceLoaderImpl_BaseFactory || (ɵResourceLoaderImpl_BaseFactory = i0.ɵɵgetInheritedFactory(ResourceLoaderImpl)))(__ngFactoryType__ || ResourceLoaderImpl);
    };
  })();
  static ɵprov = /* @__PURE__ */i0.ɵɵdefineInjectable({
    token: ResourceLoaderImpl,
    factory: ResourceLoaderImpl.ɵfac
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ResourceLoaderImpl, [{
    type: Injectable
  }], null, null);
})();
const INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS = [{
  provide: COMPILER_OPTIONS,
  useValue: {
    providers: [{
      provide: ResourceLoader,
      useClass: ResourceLoaderImpl,
      deps: []
    }]
  },
  multi: true
}, {
  provide: CompilerFactory,
  useClass: JitCompilerFactory,
  deps: [COMPILER_OPTIONS]
}];
/**
 * @publicApi
 */
const platformBrowserDynamic = createPlatformFactory(platformBrowser, 'browserDynamic', INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS);

export { JitCompilerFactory, VERSION, platformBrowserDynamic, INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS as ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS };
//# sourceMappingURL=angular-platform-browser-dynamic.js.map
