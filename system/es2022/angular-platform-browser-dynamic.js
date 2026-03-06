/* esm-bundle - @angular/platform-browser-dynamic@19.2.19 - system format - Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at https://angular.io/license */
System.register(['@angular/core', '@angular/compiler', '@angular/platform-browser'], (function (exports) {
    'use strict';
    var Version, i0, Injectable, createPlatformFactory, COMPILER_OPTIONS, CompilerFactory, ViewEncapsulation, Injector, Compiler, ResourceLoader, CompilerConfig, platformBrowser;
    return {
        setters: [function (module) {
            Version = module.Version;
            i0 = module;
            Injectable = module.Injectable;
            createPlatformFactory = module.createPlatformFactory;
            COMPILER_OPTIONS = module.COMPILER_OPTIONS;
            CompilerFactory = module.CompilerFactory;
            ViewEncapsulation = module.ViewEncapsulation;
            Injector = module.Injector;
            Compiler = module.Compiler;
        }, function (module) {
            ResourceLoader = module.ResourceLoader;
            CompilerConfig = module.CompilerConfig;
        }, function (module) {
            platformBrowser = module.platformBrowser;
        }],
        execute: (function () {

            /**
             * @license Angular v19.2.19
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
            const VERSION = exports("VERSION", new Version('19.2.19'));
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
            } exports("JitCompilerFactory", JitCompilerFactory);
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
            const INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS = exports("ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS", [{
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
            }]);
            /**
             * @publicApi
             */
            const platformBrowserDynamic = exports("platformBrowserDynamic", createPlatformFactory(platformBrowser, 'browserDynamic', INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS));

        })
    };
}));
//# sourceMappingURL=angular-platform-browser-dynamic.js.map
