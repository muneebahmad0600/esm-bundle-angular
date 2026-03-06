/* esm-bundle - @angular/platform-browser/animations@19.2.19 - system format - Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at https://angular.io/license */
System.register(['@angular/core', '@angular/animations/browser', '@angular/common'], (function (exports) {
  'use strict';
  var InjectionToken, _RuntimeError, i0, Injectable, Inject, APP_ID, CSP_NONCE, PLATFORM_ID, Optional, ViewEncapsulation, _TracingService, RendererStyleFlags2, createPlatformFactory, platformCore, PLATFORM_INITIALIZER, _INJECTOR_SCOPE, ErrorHandler, RendererFactory2, inject, ApplicationModule, _TESTABILITY_GETTER, NgZone, TestabilityRegistry, Testability, _TESTABILITY, NgModule, _setDocument, _global, ANIMATION_MODULE_TYPE, _performanceMarkFeature, _AnimationEngine, i1, NoopAnimationDriver, AnimationDriver, _AnimationStyleNormalizer, _WebAnimationsDriver, _WebAnimationsStyleNormalizer, _AnimationRendererFactory, isPlatformServer, DOCUMENT, _getDOM, _PLATFORM_BROWSER_ID, XhrFactory, CommonModule, _DomAdapter, _setRootDomAdapter, _parseCookieValue;
  return {
    setters: [function (module) {
      InjectionToken = module.InjectionToken;
      _RuntimeError = module.ɵRuntimeError;
      i0 = module;
      Injectable = module.Injectable;
      Inject = module.Inject;
      APP_ID = module.APP_ID;
      CSP_NONCE = module.CSP_NONCE;
      PLATFORM_ID = module.PLATFORM_ID;
      Optional = module.Optional;
      ViewEncapsulation = module.ViewEncapsulation;
      _TracingService = module.ɵTracingService;
      RendererStyleFlags2 = module.RendererStyleFlags2;
      createPlatformFactory = module.createPlatformFactory;
      platformCore = module.platformCore;
      PLATFORM_INITIALIZER = module.PLATFORM_INITIALIZER;
      _INJECTOR_SCOPE = module.ɵINJECTOR_SCOPE;
      ErrorHandler = module.ErrorHandler;
      RendererFactory2 = module.RendererFactory2;
      inject = module.inject;
      ApplicationModule = module.ApplicationModule;
      _TESTABILITY_GETTER = module.ɵTESTABILITY_GETTER;
      NgZone = module.NgZone;
      TestabilityRegistry = module.TestabilityRegistry;
      Testability = module.Testability;
      _TESTABILITY = module.ɵTESTABILITY;
      NgModule = module.NgModule;
      _setDocument = module.ɵsetDocument;
      _global = module.ɵglobal;
      ANIMATION_MODULE_TYPE = module.ANIMATION_MODULE_TYPE;
      _performanceMarkFeature = module.ɵperformanceMarkFeature;
      exports("ANIMATION_MODULE_TYPE", module.ANIMATION_MODULE_TYPE);
    }, function (module) {
      _AnimationEngine = module.ɵAnimationEngine;
      i1 = module;
      NoopAnimationDriver = module.NoopAnimationDriver;
      AnimationDriver = module.AnimationDriver;
      _AnimationStyleNormalizer = module.ɵAnimationStyleNormalizer;
      _WebAnimationsDriver = module.ɵWebAnimationsDriver;
      _WebAnimationsStyleNormalizer = module.ɵWebAnimationsStyleNormalizer;
      _AnimationRendererFactory = module.ɵAnimationRendererFactory;
    }, function (module) {
      isPlatformServer = module.isPlatformServer;
      DOCUMENT = module.DOCUMENT;
      _getDOM = module.ɵgetDOM;
      _PLATFORM_BROWSER_ID = module.ɵPLATFORM_BROWSER_ID;
      XhrFactory = module.XhrFactory;
      CommonModule = module.CommonModule;
      _DomAdapter = module.ɵDomAdapter;
      _setRootDomAdapter = module.ɵsetRootDomAdapter;
      _parseCookieValue = module.ɵparseCookieValue;
    }],
    execute: (function () {

      exports({
        provideAnimations: provideAnimations,
        provideNoopAnimations: provideNoopAnimations
      });

      /**
       * @license Angular v19.2.19
       * (c) 2010-2025 Google LLC. https://angular.io/
       * License: MIT
       */


      /**
       * The injection token for plugins of the `EventManager` service.
       *
       * @publicApi
       */
      const EVENT_MANAGER_PLUGINS = new InjectionToken(ngDevMode ? 'EventManagerPlugins' : '');
      /**
       * An injectable service that provides event management for Angular
       * through a browser plug-in.
       *
       * @publicApi
       */
      class EventManager {
        _zone;
        _plugins;
        _eventNameToPlugin = new Map();
        /**
         * Initializes an instance of the event-manager service.
         */
        constructor(plugins, _zone) {
          this._zone = _zone;
          plugins.forEach(plugin => {
            plugin.manager = this;
          });
          this._plugins = plugins.slice().reverse();
        }
        /**
         * Registers a handler for a specific element and event.
         *
         * @param element The HTML element to receive event notifications.
         * @param eventName The name of the event to listen for.
         * @param handler A function to call when the notification occurs. Receives the
         * event object as an argument.
         * @param options Options that configure how the event listener is bound.
         * @returns  A callback function that can be used to remove the handler.
         */
        addEventListener(element, eventName, handler, options) {
          const plugin = this._findPluginFor(eventName);
          return plugin.addEventListener(element, eventName, handler, options);
        }
        /**
         * Retrieves the compilation zone in which event listeners are registered.
         */
        getZone() {
          return this._zone;
        }
        /** @internal */
        _findPluginFor(eventName) {
          let plugin = this._eventNameToPlugin.get(eventName);
          if (plugin) {
            return plugin;
          }
          const plugins = this._plugins;
          plugin = plugins.find(plugin => plugin.supports(eventName));
          if (!plugin) {
            throw new _RuntimeError(5101 /* RuntimeErrorCode.NO_PLUGIN_FOR_EVENT */, (typeof ngDevMode === 'undefined' || ngDevMode) && `No event manager plugin found for event ${eventName}`);
          }
          this._eventNameToPlugin.set(eventName, plugin);
          return plugin;
        }
        static ɵfac = function EventManager_Factory(__ngFactoryType__) {
          return new (__ngFactoryType__ || EventManager)(i0.ɵɵinject(EVENT_MANAGER_PLUGINS), i0.ɵɵinject(i0.NgZone));
        };
        static ɵprov = /* @__PURE__ */i0.ɵɵdefineInjectable({
          token: EventManager,
          factory: EventManager.ɵfac
        });
      }
      (() => {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EventManager, [{
          type: Injectable
        }], () => [{
          type: undefined,
          decorators: [{
            type: Inject,
            args: [EVENT_MANAGER_PLUGINS]
          }]
        }, {
          type: i0.NgZone
        }], null);
      })();
      /**
       * The plugin definition for the `EventManager` class
       *
       * It can be used as a base class to create custom manager plugins, i.e. you can create your own
       * class that extends the `EventManagerPlugin` one.
       *
       * @publicApi
       */
      class EventManagerPlugin {
        _doc;
        // TODO: remove (has some usage in G3)
        constructor(_doc) {
          this._doc = _doc;
        }
        // Using non-null assertion because it's set by EventManager's constructor
        manager;
      }

      /** The style elements attribute name used to set value of `APP_ID` token. */
      const APP_ID_ATTRIBUTE_NAME = 'ng-app-id';
      /**
       * Removes all provided elements from the document.
       * @param elements An array of HTML Elements.
       */
      function removeElements(elements) {
        for (const element of elements) {
          element.remove();
        }
      }
      /**
       * Creates a `style` element with the provided inline style content.
       * @param style A string of the inline style content.
       * @param doc A DOM Document to use to create the element.
       * @returns An HTMLStyleElement instance.
       */
      function createStyleElement(style, doc) {
        const styleElement = doc.createElement('style');
        styleElement.textContent = style;
        return styleElement;
      }
      /**
       * Searches a DOM document's head element for style elements with a matching application
       * identifier attribute (`ng-app-id`) to the provide identifier and adds usage records for each.
       * @param doc An HTML DOM document instance.
       * @param appId A string containing an Angular application identifer.
       * @param inline A Map object for tracking inline (defined via `styles` in component decorator) style usage.
       * @param external A Map object for tracking external (defined via `styleUrls` in component decorator) style usage.
       */
      function addServerStyles(doc, appId, inline, external) {
        const elements = doc.head?.querySelectorAll(`style[${APP_ID_ATTRIBUTE_NAME}="${appId}"],link[${APP_ID_ATTRIBUTE_NAME}="${appId}"]`);
        if (elements) {
          for (const styleElement of elements) {
            styleElement.removeAttribute(APP_ID_ATTRIBUTE_NAME);
            if (styleElement instanceof HTMLLinkElement) {
              // Only use filename from href
              // The href is build time generated with a unique value to prevent duplicates.
              external.set(styleElement.href.slice(styleElement.href.lastIndexOf('/') + 1), {
                usage: 0,
                elements: [styleElement]
              });
            } else if (styleElement.textContent) {
              inline.set(styleElement.textContent, {
                usage: 0,
                elements: [styleElement]
              });
            }
          }
        }
      }
      /**
       * Creates a `link` element for the provided external style URL.
       * @param url A string of the URL for the stylesheet.
       * @param doc A DOM Document to use to create the element.
       * @returns An HTMLLinkElement instance.
       */
      function createLinkElement(url, doc) {
        const linkElement = doc.createElement('link');
        linkElement.setAttribute('rel', 'stylesheet');
        linkElement.setAttribute('href', url);
        return linkElement;
      }
      class SharedStylesHost {
        doc;
        appId;
        nonce;
        /**
         * Provides usage information for active inline style content and associated HTML <style> elements.
         * Embedded styles typically originate from the `styles` metadata of a rendered component.
         */
        inline = new Map();
        /**
         * Provides usage information for active external style URLs and the associated HTML <link> elements.
         * External styles typically originate from the `ɵɵExternalStylesFeature` of a rendered component.
         */
        external = new Map();
        /**
         * Set of host DOM nodes that will have styles attached.
         */
        hosts = new Set();
        /**
         * Whether the application code is currently executing on a server.
         */
        isServer;
        constructor(doc, appId, nonce, platformId = {}) {
          this.doc = doc;
          this.appId = appId;
          this.nonce = nonce;
          this.isServer = isPlatformServer(platformId);
          addServerStyles(doc, appId, this.inline, this.external);
          this.hosts.add(doc.head);
        }
        /**
         * Adds embedded styles to the DOM via HTML `style` elements.
         * @param styles An array of style content strings.
         */
        addStyles(styles, urls) {
          for (const value of styles) {
            this.addUsage(value, this.inline, createStyleElement);
          }
          urls?.forEach(value => this.addUsage(value, this.external, createLinkElement));
        }
        /**
         * Removes embedded styles from the DOM that were added as HTML `style` elements.
         * @param styles An array of style content strings.
         */
        removeStyles(styles, urls) {
          for (const value of styles) {
            this.removeUsage(value, this.inline);
          }
          urls?.forEach(value => this.removeUsage(value, this.external));
        }
        addUsage(value, usages, creator) {
          // Attempt to get any current usage of the value
          const record = usages.get(value);
          // If existing, just increment the usage count
          if (record) {
            if ((typeof ngDevMode === 'undefined' || ngDevMode) && record.usage === 0) {
              // A usage count of zero indicates a preexisting server generated style.
              // This attribute is solely used for debugging purposes of SSR style reuse.
              record.elements.forEach(element => element.setAttribute('ng-style-reused', ''));
            }
            record.usage++;
          } else {
            // Otherwise, create an entry to track the elements and add element for each host
            usages.set(value, {
              usage: 1,
              elements: [...this.hosts].map(host => this.addElement(host, creator(value, this.doc)))
            });
          }
        }
        removeUsage(value, usages) {
          // Attempt to get any current usage of the value
          const record = usages.get(value);
          // If there is a record, reduce the usage count and if no longer used,
          // remove from DOM and delete usage record.
          if (record) {
            record.usage--;
            if (record.usage <= 0) {
              removeElements(record.elements);
              usages.delete(value);
            }
          }
        }
        ngOnDestroy() {
          for (const [, {
            elements
          }] of [...this.inline, ...this.external]) {
            removeElements(elements);
          }
          this.hosts.clear();
        }
        /**
         * Adds a host node to the set of style hosts and adds all existing style usage to
         * the newly added host node.
         *
         * This is currently only used for Shadow DOM encapsulation mode.
         */
        addHost(hostNode) {
          this.hosts.add(hostNode);
          // Add existing styles to new host
          for (const [style, {
            elements
          }] of this.inline) {
            elements.push(this.addElement(hostNode, createStyleElement(style, this.doc)));
          }
          for (const [url, {
            elements
          }] of this.external) {
            elements.push(this.addElement(hostNode, createLinkElement(url, this.doc)));
          }
        }
        removeHost(hostNode) {
          this.hosts.delete(hostNode);
        }
        addElement(host, element) {
          // Add a nonce if present
          if (this.nonce) {
            element.setAttribute('nonce', this.nonce);
          }
          // Add application identifier when on the server to support client-side reuse
          if (this.isServer) {
            element.setAttribute(APP_ID_ATTRIBUTE_NAME, this.appId);
          }
          // Insert the element into the DOM with the host node as parent
          return host.appendChild(element);
        }
        static ɵfac = function SharedStylesHost_Factory(__ngFactoryType__) {
          return new (__ngFactoryType__ || SharedStylesHost)(i0.ɵɵinject(DOCUMENT), i0.ɵɵinject(APP_ID), i0.ɵɵinject(CSP_NONCE, 8), i0.ɵɵinject(PLATFORM_ID));
        };
        static ɵprov = /* @__PURE__ */i0.ɵɵdefineInjectable({
          token: SharedStylesHost,
          factory: SharedStylesHost.ɵfac
        });
      }
      (() => {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SharedStylesHost, [{
          type: Injectable
        }], () => [{
          type: Document,
          decorators: [{
            type: Inject,
            args: [DOCUMENT]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: Inject,
            args: [APP_ID]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: Inject,
            args: [CSP_NONCE]
          }, {
            type: Optional
          }]
        }, {
          type: undefined,
          decorators: [{
            type: Inject,
            args: [PLATFORM_ID]
          }]
        }], null);
      })();
      const NAMESPACE_URIS = {
        'svg': 'http://www.w3.org/2000/svg',
        'xhtml': 'http://www.w3.org/1999/xhtml',
        'xlink': 'http://www.w3.org/1999/xlink',
        'xml': 'http://www.w3.org/XML/1998/namespace',
        'xmlns': 'http://www.w3.org/2000/xmlns/',
        'math': 'http://www.w3.org/1998/Math/MathML'
      };
      const COMPONENT_REGEX = /%COMP%/g;
      const SOURCEMAP_URL_REGEXP = /\/\*#\s*sourceMappingURL=(.+?)\s*\*\//;
      const PROTOCOL_REGEXP = /^https?:/;
      const COMPONENT_VARIABLE = '%COMP%';
      const HOST_ATTR = `_nghost-${COMPONENT_VARIABLE}`;
      const CONTENT_ATTR = `_ngcontent-${COMPONENT_VARIABLE}`;
      /**
       * The default value for the `REMOVE_STYLES_ON_COMPONENT_DESTROY` DI token.
       */
      const REMOVE_STYLES_ON_COMPONENT_DESTROY_DEFAULT = true;
      /**
       * A DI token that indicates whether styles
       * of destroyed components should be removed from DOM.
       *
       * By default, the value is set to `true`.
       * @publicApi
       */
      const REMOVE_STYLES_ON_COMPONENT_DESTROY = new InjectionToken(ngDevMode ? 'RemoveStylesOnCompDestroy' : '', {
        providedIn: 'root',
        factory: () => REMOVE_STYLES_ON_COMPONENT_DESTROY_DEFAULT
      });
      function shimContentAttribute(componentShortId) {
        return CONTENT_ATTR.replace(COMPONENT_REGEX, componentShortId);
      }
      function shimHostAttribute(componentShortId) {
        return HOST_ATTR.replace(COMPONENT_REGEX, componentShortId);
      }
      function shimStylesContent(compId, styles) {
        return styles.map(s => s.replace(COMPONENT_REGEX, compId));
      }
      /**
       * Prepends a baseHref to the `sourceMappingURL` within the provided CSS content.
       * If the `sourceMappingURL` contains an inline (encoded) map, the function skips processing.
       *
       * @note For inline stylesheets, the `sourceMappingURL` is relative to the page's origin
       * and not the provided baseHref. This function is needed as when accessing the page with a URL
       * containing two or more segments.
       * For example, if the baseHref is set to `/`, and you visit a URL like `http://localhost/foo/bar`,
       * the map would be requested from `http://localhost/foo/bar/comp.css.map` instead of what you'd expect,
       * which is `http://localhost/comp.css.map`. This behavior is corrected by modifying the `sourceMappingURL`
       * to ensure external source maps are loaded relative to the baseHref.
       *

       * @param baseHref - The base URL to prepend to the `sourceMappingURL`.
       * @param styles - An array of CSS content strings, each potentially containing a `sourceMappingURL`.
       * @returns The updated array of CSS content strings with modified `sourceMappingURL` values,
       * or the original content if no modification is needed.
       */
      function addBaseHrefToCssSourceMap(baseHref, styles) {
        if (!baseHref) {
          return styles;
        }
        const absoluteBaseHrefUrl = new URL(baseHref, 'http://localhost');
        return styles.map(cssContent => {
          if (!cssContent.includes('sourceMappingURL=')) {
            return cssContent;
          }
          return cssContent.replace(SOURCEMAP_URL_REGEXP, (_, sourceMapUrl) => {
            if (sourceMapUrl[0] === '/' || sourceMapUrl.startsWith('data:') || PROTOCOL_REGEXP.test(sourceMapUrl)) {
              return `/*# sourceMappingURL=${sourceMapUrl} */`;
            }
            const {
              pathname: resolvedSourceMapUrl
            } = new URL(sourceMapUrl, absoluteBaseHrefUrl);
            return `/*# sourceMappingURL=${resolvedSourceMapUrl} */`;
          });
        });
      }
      class DomRendererFactory2 {
        eventManager;
        sharedStylesHost;
        appId;
        removeStylesOnCompDestroy;
        doc;
        platformId;
        ngZone;
        nonce;
        tracingService;
        rendererByCompId = new Map();
        defaultRenderer;
        platformIsServer;
        constructor(eventManager, sharedStylesHost, appId, removeStylesOnCompDestroy, doc, platformId, ngZone, nonce = null, tracingService = null) {
          this.eventManager = eventManager;
          this.sharedStylesHost = sharedStylesHost;
          this.appId = appId;
          this.removeStylesOnCompDestroy = removeStylesOnCompDestroy;
          this.doc = doc;
          this.platformId = platformId;
          this.ngZone = ngZone;
          this.nonce = nonce;
          this.tracingService = tracingService;
          this.platformIsServer = isPlatformServer(platformId);
          this.defaultRenderer = new DefaultDomRenderer2(eventManager, doc, ngZone, this.platformIsServer, this.tracingService);
        }
        createRenderer(element, type) {
          if (!element || !type) {
            return this.defaultRenderer;
          }
          if (this.platformIsServer && type.encapsulation === ViewEncapsulation.ShadowDom) {
            // Domino does not support shadow DOM.
            type = {
              ...type,
              encapsulation: ViewEncapsulation.Emulated
            };
          }
          const renderer = this.getOrCreateRenderer(element, type);
          // Renderers have different logic due to different encapsulation behaviours.
          // Ex: for emulated, an attribute is added to the element.
          if (renderer instanceof EmulatedEncapsulationDomRenderer2) {
            renderer.applyToHost(element);
          } else if (renderer instanceof NoneEncapsulationDomRenderer) {
            renderer.applyStyles();
          }
          return renderer;
        }
        getOrCreateRenderer(element, type) {
          const rendererByCompId = this.rendererByCompId;
          let renderer = rendererByCompId.get(type.id);
          if (!renderer) {
            const doc = this.doc;
            const ngZone = this.ngZone;
            const eventManager = this.eventManager;
            const sharedStylesHost = this.sharedStylesHost;
            const removeStylesOnCompDestroy = this.removeStylesOnCompDestroy;
            const platformIsServer = this.platformIsServer;
            const tracingService = this.tracingService;
            switch (type.encapsulation) {
              case ViewEncapsulation.Emulated:
                renderer = new EmulatedEncapsulationDomRenderer2(eventManager, sharedStylesHost, type, this.appId, removeStylesOnCompDestroy, doc, ngZone, platformIsServer, tracingService);
                break;
              case ViewEncapsulation.ShadowDom:
                return new ShadowDomRenderer(eventManager, sharedStylesHost, element, type, doc, ngZone, this.nonce, platformIsServer, tracingService);
              default:
                renderer = new NoneEncapsulationDomRenderer(eventManager, sharedStylesHost, type, removeStylesOnCompDestroy, doc, ngZone, platformIsServer, tracingService);
                break;
            }
            rendererByCompId.set(type.id, renderer);
          }
          return renderer;
        }
        ngOnDestroy() {
          this.rendererByCompId.clear();
        }
        /**
         * Used during HMR to clear any cached data about a component.
         * @param componentId ID of the component that is being replaced.
         */
        componentReplaced(componentId) {
          this.rendererByCompId.delete(componentId);
        }
        static ɵfac = function DomRendererFactory2_Factory(__ngFactoryType__) {
          return new (__ngFactoryType__ || DomRendererFactory2)(i0.ɵɵinject(EventManager), i0.ɵɵinject(SharedStylesHost), i0.ɵɵinject(APP_ID), i0.ɵɵinject(REMOVE_STYLES_ON_COMPONENT_DESTROY), i0.ɵɵinject(DOCUMENT), i0.ɵɵinject(PLATFORM_ID), i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(CSP_NONCE), i0.ɵɵinject(_TracingService, 8));
        };
        static ɵprov = /* @__PURE__ */i0.ɵɵdefineInjectable({
          token: DomRendererFactory2,
          factory: DomRendererFactory2.ɵfac
        });
      }
      (() => {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DomRendererFactory2, [{
          type: Injectable
        }], () => [{
          type: EventManager
        }, {
          type: SharedStylesHost
        }, {
          type: undefined,
          decorators: [{
            type: Inject,
            args: [APP_ID]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: Inject,
            args: [REMOVE_STYLES_ON_COMPONENT_DESTROY]
          }]
        }, {
          type: Document,
          decorators: [{
            type: Inject,
            args: [DOCUMENT]
          }]
        }, {
          type: Object,
          decorators: [{
            type: Inject,
            args: [PLATFORM_ID]
          }]
        }, {
          type: i0.NgZone
        }, {
          type: undefined,
          decorators: [{
            type: Inject,
            args: [CSP_NONCE]
          }]
        }, {
          type: i0.ɵTracingService,
          decorators: [{
            type: Inject,
            args: [_TracingService]
          }, {
            type: Optional
          }]
        }], null);
      })();
      class DefaultDomRenderer2 {
        eventManager;
        doc;
        ngZone;
        platformIsServer;
        tracingService;
        data = Object.create(null);
        /**
         * By default this renderer throws when encountering synthetic properties
         * This can be disabled for example by the AsyncAnimationRendererFactory
         */
        throwOnSyntheticProps = true;
        constructor(eventManager, doc, ngZone, platformIsServer, tracingService) {
          this.eventManager = eventManager;
          this.doc = doc;
          this.ngZone = ngZone;
          this.platformIsServer = platformIsServer;
          this.tracingService = tracingService;
        }
        destroy() {}
        destroyNode = null;
        createElement(name, namespace) {
          if (namespace) {
            // TODO: `|| namespace` was added in
            // https://github.com/angular/angular/commit/2b9cc8503d48173492c29f5a271b61126104fbdb to
            // support how Ivy passed around the namespace URI rather than short name at the time. It did
            // not, however extend the support to other parts of the system (setAttribute, setAttribute,
            // and the ServerRenderer). We should decide what exactly the semantics for dealing with
            // namespaces should be and make it consistent.
            // Related issues:
            // https://github.com/angular/angular/issues/44028
            // https://github.com/angular/angular/issues/44883
            return this.doc.createElementNS(NAMESPACE_URIS[namespace] || namespace, name);
          }
          return this.doc.createElement(name);
        }
        createComment(value) {
          return this.doc.createComment(value);
        }
        createText(value) {
          return this.doc.createTextNode(value);
        }
        appendChild(parent, newChild) {
          const targetParent = isTemplateNode(parent) ? parent.content : parent;
          targetParent.appendChild(newChild);
        }
        insertBefore(parent, newChild, refChild) {
          if (parent) {
            const targetParent = isTemplateNode(parent) ? parent.content : parent;
            targetParent.insertBefore(newChild, refChild);
          }
        }
        removeChild(_parent, oldChild) {
          oldChild.remove();
        }
        selectRootElement(selectorOrNode, preserveContent) {
          let el = typeof selectorOrNode === 'string' ? this.doc.querySelector(selectorOrNode) : selectorOrNode;
          if (!el) {
            throw new _RuntimeError(-5104 /* RuntimeErrorCode.ROOT_NODE_NOT_FOUND */, (typeof ngDevMode === 'undefined' || ngDevMode) && `The selector "${selectorOrNode}" did not match any elements`);
          }
          if (!preserveContent) {
            el.textContent = '';
          }
          return el;
        }
        parentNode(node) {
          return node.parentNode;
        }
        nextSibling(node) {
          return node.nextSibling;
        }
        setAttribute(el, name, value, namespace) {
          if (namespace) {
            name = namespace + ':' + name;
            const namespaceUri = NAMESPACE_URIS[namespace];
            if (namespaceUri) {
              el.setAttributeNS(namespaceUri, name, value);
            } else {
              el.setAttribute(name, value);
            }
          } else {
            el.setAttribute(name, value);
          }
        }
        removeAttribute(el, name, namespace) {
          if (namespace) {
            const namespaceUri = NAMESPACE_URIS[namespace];
            if (namespaceUri) {
              el.removeAttributeNS(namespaceUri, name);
            } else {
              el.removeAttribute(`${namespace}:${name}`);
            }
          } else {
            el.removeAttribute(name);
          }
        }
        addClass(el, name) {
          el.classList.add(name);
        }
        removeClass(el, name) {
          el.classList.remove(name);
        }
        setStyle(el, style, value, flags) {
          if (flags & (RendererStyleFlags2.DashCase | RendererStyleFlags2.Important)) {
            el.style.setProperty(style, value, flags & RendererStyleFlags2.Important ? 'important' : '');
          } else {
            el.style[style] = value;
          }
        }
        removeStyle(el, style, flags) {
          if (flags & RendererStyleFlags2.DashCase) {
            // removeProperty has no effect when used on camelCased properties.
            el.style.removeProperty(style);
          } else {
            el.style[style] = '';
          }
        }
        setProperty(el, name, value) {
          if (el == null) {
            return;
          }
          (typeof ngDevMode === 'undefined' || ngDevMode) && this.throwOnSyntheticProps && checkNoSyntheticProp(name, 'property');
          el[name] = value;
        }
        setValue(node, value) {
          node.nodeValue = value;
        }
        listen(target, event, callback, options) {
          (typeof ngDevMode === 'undefined' || ngDevMode) && this.throwOnSyntheticProps && checkNoSyntheticProp(event, 'listener');
          if (typeof target === 'string') {
            target = _getDOM().getGlobalEventTarget(this.doc, target);
            if (!target) {
              throw new _RuntimeError(5102 /* RuntimeErrorCode.UNSUPPORTED_EVENT_TARGET */, (typeof ngDevMode === 'undefined' || ngDevMode) && `Unsupported event target ${target} for event ${event}`);
            }
          }
          let wrappedCallback = this.decoratePreventDefault(callback);
          if (this.tracingService?.wrapEventListener) {
            wrappedCallback = this.tracingService.wrapEventListener(target, event, wrappedCallback);
          }
          return this.eventManager.addEventListener(target, event, wrappedCallback, options);
        }
        decoratePreventDefault(eventHandler) {
          // `DebugNode.triggerEventHandler` needs to know if the listener was created with
          // decoratePreventDefault or is a listener added outside the Angular context so it can handle
          // the two differently. In the first case, the special '__ngUnwrap__' token is passed to the
          // unwrap the listener (see below).
          return event => {
            // Ivy uses '__ngUnwrap__' as a special token that allows us to unwrap the function
            // so that it can be invoked programmatically by `DebugNode.triggerEventHandler`. The
            // debug_node can inspect the listener toString contents for the existence of this special
            // token. Because the token is a string literal, it is ensured to not be modified by compiled
            // code.
            if (event === '__ngUnwrap__') {
              return eventHandler;
            }
            // Run the event handler inside the ngZone because event handlers are not patched
            // by Zone on the server. This is required only for tests.
            const allowDefaultBehavior = this.platformIsServer ? this.ngZone.runGuarded(() => eventHandler(event)) : eventHandler(event);
            if (allowDefaultBehavior === false) {
              event.preventDefault();
            }
            return undefined;
          };
        }
      }
      const AT_CHARCODE = (() => '@'.charCodeAt(0))();
      function checkNoSyntheticProp(name, nameKind) {
        if (name.charCodeAt(0) === AT_CHARCODE) {
          throw new _RuntimeError(5105 /* RuntimeErrorCode.UNEXPECTED_SYNTHETIC_PROPERTY */, `Unexpected synthetic ${nameKind} ${name} found. Please make sure that:
  - Make sure \`provideAnimationsAsync()\`, \`provideAnimations()\` or \`provideNoopAnimations()\` call was added to a list of providers used to bootstrap an application.
  - There is a corresponding animation configuration named \`${name}\` defined in the \`animations\` field of the \`@Component\` decorator (see https://angular.dev/api/core/Component#animations).`);
        }
      }
      function isTemplateNode(node) {
        return node.tagName === 'TEMPLATE' && node.content !== undefined;
      }
      class ShadowDomRenderer extends DefaultDomRenderer2 {
        sharedStylesHost;
        hostEl;
        shadowRoot;
        constructor(eventManager, sharedStylesHost, hostEl, component, doc, ngZone, nonce, platformIsServer, tracingService) {
          super(eventManager, doc, ngZone, platformIsServer, tracingService);
          this.sharedStylesHost = sharedStylesHost;
          this.hostEl = hostEl;
          this.shadowRoot = hostEl.attachShadow({
            mode: 'open'
          });
          this.sharedStylesHost.addHost(this.shadowRoot);
          let styles = component.styles;
          if (ngDevMode) {
            // We only do this in development, as for production users should not add CSS sourcemaps to components.
            const baseHref = _getDOM().getBaseHref(doc) ?? '';
            styles = addBaseHrefToCssSourceMap(baseHref, styles);
          }
          styles = shimStylesContent(component.id, styles);
          for (const style of styles) {
            const styleEl = document.createElement('style');
            if (nonce) {
              styleEl.setAttribute('nonce', nonce);
            }
            styleEl.textContent = style;
            this.shadowRoot.appendChild(styleEl);
          }
          // Apply any external component styles to the shadow root for the component's element.
          // The ShadowDOM renderer uses an alternative execution path for component styles that
          // does not use the SharedStylesHost that other encapsulation modes leverage. Much like
          // the manual addition of embedded styles directly above, any external stylesheets
          // must be manually added here to ensure ShadowDOM components are correctly styled.
          // TODO: Consider reworking the DOM Renderers to consolidate style handling.
          const styleUrls = component.getExternalStyles?.();
          if (styleUrls) {
            for (const styleUrl of styleUrls) {
              const linkEl = createLinkElement(styleUrl, doc);
              if (nonce) {
                linkEl.setAttribute('nonce', nonce);
              }
              this.shadowRoot.appendChild(linkEl);
            }
          }
        }
        nodeOrShadowRoot(node) {
          return node === this.hostEl ? this.shadowRoot : node;
        }
        appendChild(parent, newChild) {
          return super.appendChild(this.nodeOrShadowRoot(parent), newChild);
        }
        insertBefore(parent, newChild, refChild) {
          return super.insertBefore(this.nodeOrShadowRoot(parent), newChild, refChild);
        }
        removeChild(_parent, oldChild) {
          return super.removeChild(null, oldChild);
        }
        parentNode(node) {
          return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(node)));
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
      }
      class NoneEncapsulationDomRenderer extends DefaultDomRenderer2 {
        sharedStylesHost;
        removeStylesOnCompDestroy;
        styles;
        styleUrls;
        constructor(eventManager, sharedStylesHost, component, removeStylesOnCompDestroy, doc, ngZone, platformIsServer, tracingService, compId) {
          super(eventManager, doc, ngZone, platformIsServer, tracingService);
          this.sharedStylesHost = sharedStylesHost;
          this.removeStylesOnCompDestroy = removeStylesOnCompDestroy;
          let styles = component.styles;
          if (ngDevMode) {
            // We only do this in development, as for production users should not add CSS sourcemaps to components.
            const baseHref = _getDOM().getBaseHref(doc) ?? '';
            styles = addBaseHrefToCssSourceMap(baseHref, styles);
          }
          this.styles = compId ? shimStylesContent(compId, styles) : styles;
          this.styleUrls = component.getExternalStyles?.(compId);
        }
        applyStyles() {
          this.sharedStylesHost.addStyles(this.styles, this.styleUrls);
        }
        destroy() {
          if (!this.removeStylesOnCompDestroy) {
            return;
          }
          this.sharedStylesHost.removeStyles(this.styles, this.styleUrls);
        }
      }
      class EmulatedEncapsulationDomRenderer2 extends NoneEncapsulationDomRenderer {
        contentAttr;
        hostAttr;
        constructor(eventManager, sharedStylesHost, component, appId, removeStylesOnCompDestroy, doc, ngZone, platformIsServer, tracingService) {
          const compId = appId + '-' + component.id;
          super(eventManager, sharedStylesHost, component, removeStylesOnCompDestroy, doc, ngZone, platformIsServer, tracingService, compId);
          this.contentAttr = shimContentAttribute(compId);
          this.hostAttr = shimHostAttribute(compId);
        }
        applyToHost(element) {
          this.applyStyles();
          this.setAttribute(element, this.hostAttr, '');
        }
        createElement(parent, name) {
          const el = super.createElement(parent, name);
          super.setAttribute(el, this.contentAttr, '');
          return el;
        }
      }

      /**
       * @license Angular v19.2.19
       * (c) 2010-2025 Google LLC. https://angular.io/
       * License: MIT
       */


      /**
       * A `DomAdapter` powered by full browser DOM APIs.
       *
       * @security Tread carefully! Interacting with the DOM directly is dangerous and
       * can introduce XSS risks.
       */
      class BrowserDomAdapter extends _DomAdapter {
        supportsDOMEvents = true;
        static makeCurrent() {
          _setRootDomAdapter(new BrowserDomAdapter());
        }
        onAndCancel(el, evt, listener, options) {
          el.addEventListener(evt, listener, options);
          return () => {
            el.removeEventListener(evt, listener, options);
          };
        }
        dispatchEvent(el, evt) {
          el.dispatchEvent(evt);
        }
        remove(node) {
          node.remove();
        }
        createElement(tagName, doc) {
          doc = doc || this.getDefaultDocument();
          return doc.createElement(tagName);
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument('fakeTitle');
        }
        getDefaultDocument() {
          return document;
        }
        isElementNode(node) {
          return node.nodeType === Node.ELEMENT_NODE;
        }
        isShadowRoot(node) {
          return node instanceof DocumentFragment;
        }
        /** @deprecated No longer being used in Ivy code. To be removed in version 14. */
        getGlobalEventTarget(doc, target) {
          if (target === 'window') {
            return window;
          }
          if (target === 'document') {
            return doc;
          }
          if (target === 'body') {
            return doc.body;
          }
          return null;
        }
        getBaseHref(doc) {
          const href = getBaseElementHref();
          return href == null ? null : relativePath(href);
        }
        resetBaseElement() {
          baseElement = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        getCookie(name) {
          return _parseCookieValue(document.cookie, name);
        }
      }
      let baseElement = null;
      function getBaseElementHref() {
        baseElement = baseElement || document.head.querySelector('base');
        return baseElement ? baseElement.getAttribute('href') : null;
      }
      function relativePath(url) {
        // The base URL doesn't really matter, we just need it so relative paths have something
        // to resolve against. In the browser `HTMLBaseElement.href` is always absolute.
        return new URL(url, document.baseURI).pathname;
      }
      class BrowserGetTestability {
        addToWindow(registry) {
          _global['getAngularTestability'] = (elem, findInAncestors = true) => {
            const testability = registry.findTestabilityInTree(elem, findInAncestors);
            if (testability == null) {
              throw new _RuntimeError(5103 /* RuntimeErrorCode.TESTABILITY_NOT_FOUND */, (typeof ngDevMode === 'undefined' || ngDevMode) && 'Could not find testability for element.');
            }
            return testability;
          };
          _global['getAllAngularTestabilities'] = () => registry.getAllTestabilities();
          _global['getAllAngularRootElements'] = () => registry.getAllRootElements();
          const whenAllStable = callback => {
            const testabilities = _global['getAllAngularTestabilities']();
            let count = testabilities.length;
            const decrement = function () {
              count--;
              if (count == 0) {
                callback();
              }
            };
            testabilities.forEach(testability => {
              testability.whenStable(decrement);
            });
          };
          if (!_global['frameworkStabilizers']) {
            _global['frameworkStabilizers'] = [];
          }
          _global['frameworkStabilizers'].push(whenAllStable);
        }
        findTestabilityInTree(registry, elem, findInAncestors) {
          if (elem == null) {
            return null;
          }
          const t = registry.getTestability(elem);
          if (t != null) {
            return t;
          } else if (!findInAncestors) {
            return null;
          }
          if (_getDOM().isShadowRoot(elem)) {
            return this.findTestabilityInTree(registry, elem.host, true);
          }
          return this.findTestabilityInTree(registry, elem.parentElement, true);
        }
      }

      /**
       * A factory for `HttpXhrBackend` that uses the `XMLHttpRequest` browser API.
       */
      class BrowserXhr {
        build() {
          return new XMLHttpRequest();
        }
        static ɵfac = function BrowserXhr_Factory(__ngFactoryType__) {
          return new (__ngFactoryType__ || BrowserXhr)();
        };
        static ɵprov = /* @__PURE__ */i0.ɵɵdefineInjectable({
          token: BrowserXhr,
          factory: BrowserXhr.ɵfac
        });
      }
      (() => {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BrowserXhr, [{
          type: Injectable
        }], null, null);
      })();
      class DomEventsPlugin extends EventManagerPlugin {
        constructor(doc) {
          super(doc);
        }
        // This plugin should come last in the list of plugins, because it accepts all
        // events.
        supports(eventName) {
          return true;
        }
        addEventListener(element, eventName, handler, options) {
          element.addEventListener(eventName, handler, options);
          return () => this.removeEventListener(element, eventName, handler, options);
        }
        removeEventListener(target, eventName, callback, options) {
          return target.removeEventListener(eventName, callback, options);
        }
        static ɵfac = function DomEventsPlugin_Factory(__ngFactoryType__) {
          return new (__ngFactoryType__ || DomEventsPlugin)(i0.ɵɵinject(DOCUMENT));
        };
        static ɵprov = /* @__PURE__ */i0.ɵɵdefineInjectable({
          token: DomEventsPlugin,
          factory: DomEventsPlugin.ɵfac
        });
      }
      (() => {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DomEventsPlugin, [{
          type: Injectable
        }], () => [{
          type: undefined,
          decorators: [{
            type: Inject,
            args: [DOCUMENT]
          }]
        }], null);
      })();

      /**
       * Defines supported modifiers for key events.
       */
      const MODIFIER_KEYS = ['alt', 'control', 'meta', 'shift'];
      // The following values are here for cross-browser compatibility and to match the W3C standard
      // cf https://www.w3.org/TR/DOM-Level-3-Events-key/
      const _keyMap = {
        '\b': 'Backspace',
        '\t': 'Tab',
        '\x7F': 'Delete',
        '\x1B': 'Escape',
        'Del': 'Delete',
        'Esc': 'Escape',
        'Left': 'ArrowLeft',
        'Right': 'ArrowRight',
        'Up': 'ArrowUp',
        'Down': 'ArrowDown',
        'Menu': 'ContextMenu',
        'Scroll': 'ScrollLock',
        'Win': 'OS'
      };
      /**
       * Retrieves modifiers from key-event objects.
       */
      const MODIFIER_KEY_GETTERS = {
        'alt': event => event.altKey,
        'control': event => event.ctrlKey,
        'meta': event => event.metaKey,
        'shift': event => event.shiftKey
      };
      /**
       * A browser plug-in that provides support for handling of key events in Angular.
       */
      class KeyEventsPlugin extends EventManagerPlugin {
        /**
         * Initializes an instance of the browser plug-in.
         * @param doc The document in which key events will be detected.
         */
        constructor(doc) {
          super(doc);
        }
        /**
         * Reports whether a named key event is supported.
         * @param eventName The event name to query.
         * @return True if the named key event is supported.
         */
        supports(eventName) {
          return KeyEventsPlugin.parseEventName(eventName) != null;
        }
        /**
         * Registers a handler for a specific element and key event.
         * @param element The HTML element to receive event notifications.
         * @param eventName The name of the key event to listen for.
         * @param handler A function to call when the notification occurs. Receives the
         * event object as an argument.
         * @returns The key event that was registered.
         */
        addEventListener(element, eventName, handler, options) {
          const parsedEvent = KeyEventsPlugin.parseEventName(eventName);
          const outsideHandler = KeyEventsPlugin.eventCallback(parsedEvent['fullKey'], handler, this.manager.getZone());
          return this.manager.getZone().runOutsideAngular(() => {
            return _getDOM().onAndCancel(element, parsedEvent['domEventName'], outsideHandler, options);
          });
        }
        /**
         * Parses the user provided full keyboard event definition and normalizes it for
         * later internal use. It ensures the string is all lowercase, converts special
         * characters to a standard spelling, and orders all the values consistently.
         *
         * @param eventName The name of the key event to listen for.
         * @returns an object with the full, normalized string, and the dom event name
         * or null in the case when the event doesn't match a keyboard event.
         */
        static parseEventName(eventName) {
          const parts = eventName.toLowerCase().split('.');
          const domEventName = parts.shift();
          if (parts.length === 0 || !(domEventName === 'keydown' || domEventName === 'keyup')) {
            return null;
          }
          const key = KeyEventsPlugin._normalizeKey(parts.pop());
          let fullKey = '';
          let codeIX = parts.indexOf('code');
          if (codeIX > -1) {
            parts.splice(codeIX, 1);
            fullKey = 'code.';
          }
          MODIFIER_KEYS.forEach(modifierName => {
            const index = parts.indexOf(modifierName);
            if (index > -1) {
              parts.splice(index, 1);
              fullKey += modifierName + '.';
            }
          });
          fullKey += key;
          if (parts.length != 0 || key.length === 0) {
            // returning null instead of throwing to let another plugin process the event
            return null;
          }
          // NOTE: Please don't rewrite this as so, as it will break JSCompiler property renaming.
          //       The code must remain in the `result['domEventName']` form.
          // return {domEventName, fullKey};
          const result = {};
          result['domEventName'] = domEventName;
          result['fullKey'] = fullKey;
          return result;
        }
        /**
         * Determines whether the actual keys pressed match the configured key code string.
         * The `fullKeyCode` event is normalized in the `parseEventName` method when the
         * event is attached to the DOM during the `addEventListener` call. This is unseen
         * by the end user and is normalized for internal consistency and parsing.
         *
         * @param event The keyboard event.
         * @param fullKeyCode The normalized user defined expected key event string
         * @returns boolean.
         */
        static matchEventFullKeyCode(event, fullKeyCode) {
          let keycode = _keyMap[event.key] || event.key;
          let key = '';
          if (fullKeyCode.indexOf('code.') > -1) {
            keycode = event.code;
            key = 'code.';
          }
          // the keycode could be unidentified so we have to check here
          if (keycode == null || !keycode) return false;
          keycode = keycode.toLowerCase();
          if (keycode === ' ') {
            keycode = 'space'; // for readability
          } else if (keycode === '.') {
            keycode = 'dot'; // because '.' is used as a separator in event names
          }
          MODIFIER_KEYS.forEach(modifierName => {
            if (modifierName !== keycode) {
              const modifierGetter = MODIFIER_KEY_GETTERS[modifierName];
              if (modifierGetter(event)) {
                key += modifierName + '.';
              }
            }
          });
          key += keycode;
          return key === fullKeyCode;
        }
        /**
         * Configures a handler callback for a key event.
         * @param fullKey The event name that combines all simultaneous keystrokes.
         * @param handler The function that responds to the key event.
         * @param zone The zone in which the event occurred.
         * @returns A callback function.
         */
        static eventCallback(fullKey, handler, zone) {
          return event => {
            if (KeyEventsPlugin.matchEventFullKeyCode(event, fullKey)) {
              zone.runGuarded(() => handler(event));
            }
          };
        }
        /** @internal */
        static _normalizeKey(keyName) {
          return keyName === 'esc' ? 'escape' : keyName;
        }
        static ɵfac = function KeyEventsPlugin_Factory(__ngFactoryType__) {
          return new (__ngFactoryType__ || KeyEventsPlugin)(i0.ɵɵinject(DOCUMENT));
        };
        static ɵprov = /* @__PURE__ */i0.ɵɵdefineInjectable({
          token: KeyEventsPlugin,
          factory: KeyEventsPlugin.ɵfac
        });
      }
      (() => {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(KeyEventsPlugin, [{
          type: Injectable
        }], () => [{
          type: undefined,
          decorators: [{
            type: Inject,
            args: [DOCUMENT]
          }]
        }], null);
      })();
      function initDomAdapter() {
        BrowserDomAdapter.makeCurrent();
      }
      function errorHandler() {
        return new ErrorHandler();
      }
      function _document() {
        // Tell ivy about the global document
        _setDocument(document);
        return document;
      }
      const INTERNAL_BROWSER_PLATFORM_PROVIDERS = [{
        provide: PLATFORM_ID,
        useValue: _PLATFORM_BROWSER_ID
      }, {
        provide: PLATFORM_INITIALIZER,
        useValue: initDomAdapter,
        multi: true
      }, {
        provide: DOCUMENT,
        useFactory: _document
      }];
      /**
       * A factory function that returns a `PlatformRef` instance associated with browser service
       * providers.
       *
       * @publicApi
       */
      createPlatformFactory(platformCore, 'browser', INTERNAL_BROWSER_PLATFORM_PROVIDERS);
      /**
       * Internal marker to signal whether providers from the `BrowserModule` are already present in DI.
       * This is needed to avoid loading `BrowserModule` providers twice. We can't rely on the
       * `BrowserModule` presence itself, since the standalone-based bootstrap just imports
       * `BrowserModule` providers without referencing the module itself.
       */
      const BROWSER_MODULE_PROVIDERS_MARKER = new InjectionToken(typeof ngDevMode === 'undefined' || ngDevMode ? 'BrowserModule Providers Marker' : '');
      const TESTABILITY_PROVIDERS = [{
        provide: _TESTABILITY_GETTER,
        useClass: BrowserGetTestability
      }, {
        provide: _TESTABILITY,
        useClass: Testability,
        deps: [NgZone, TestabilityRegistry, _TESTABILITY_GETTER]
      }, {
        provide: Testability,
        // Also provide as `Testability` for backwards-compatibility.
        useClass: Testability,
        deps: [NgZone, TestabilityRegistry, _TESTABILITY_GETTER]
      }];
      const BROWSER_MODULE_PROVIDERS = [{
        provide: _INJECTOR_SCOPE,
        useValue: 'root'
      }, {
        provide: ErrorHandler,
        useFactory: errorHandler
      }, {
        provide: EVENT_MANAGER_PLUGINS,
        useClass: DomEventsPlugin,
        multi: true,
        deps: [DOCUMENT]
      }, {
        provide: EVENT_MANAGER_PLUGINS,
        useClass: KeyEventsPlugin,
        multi: true,
        deps: [DOCUMENT]
      }, DomRendererFactory2, SharedStylesHost, EventManager, {
        provide: RendererFactory2,
        useExisting: DomRendererFactory2
      }, {
        provide: XhrFactory,
        useClass: BrowserXhr
      }, typeof ngDevMode === 'undefined' || ngDevMode ? {
        provide: BROWSER_MODULE_PROVIDERS_MARKER,
        useValue: true
      } : []];
      /**
       * Exports required infrastructure for all Angular apps.
       * Included by default in all Angular apps created with the CLI
       * `new` command.
       * Re-exports `CommonModule` and `ApplicationModule`, making their
       * exports and providers available to all apps.
       *
       * @publicApi
       */
      class BrowserModule {
        constructor() {
          if (typeof ngDevMode === 'undefined' || ngDevMode) {
            const providersAlreadyPresent = inject(BROWSER_MODULE_PROVIDERS_MARKER, {
              optional: true,
              skipSelf: true
            });
            if (providersAlreadyPresent) {
              throw new _RuntimeError(5100 /* RuntimeErrorCode.BROWSER_MODULE_ALREADY_LOADED */, `Providers from the \`BrowserModule\` have already been loaded. If you need access ` + `to common directives such as NgIf and NgFor, import the \`CommonModule\` instead.`);
            }
          }
        }
        static ɵfac = function BrowserModule_Factory(__ngFactoryType__) {
          return new (__ngFactoryType__ || BrowserModule)();
        };
        static ɵmod = /* @__PURE__ */i0.ɵɵdefineNgModule({
          type: BrowserModule
        });
        static ɵinj = /* @__PURE__ */i0.ɵɵdefineInjector({
          providers: [...BROWSER_MODULE_PROVIDERS, ...TESTABILITY_PROVIDERS],
          imports: [CommonModule, ApplicationModule]
        });
      }
      (() => {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BrowserModule, [{
          type: NgModule,
          args: [{
            providers: [...BROWSER_MODULE_PROVIDERS, ...TESTABILITY_PROVIDERS],
            exports: [CommonModule, ApplicationModule]
          }]
        }], () => [], null);
      })();

      /**
       * @license Angular v19.2.19
       * (c) 2010-2025 Google LLC. https://angular.io/
       * License: MIT
       */

      class InjectableAnimationEngine extends _AnimationEngine {
        // The `ApplicationRef` is injected here explicitly to force the dependency ordering.
        // Since the `ApplicationRef` should be created earlier before the `AnimationEngine`, they
        // both have `ngOnDestroy` hooks and `flush()` must be called after all views are destroyed.
        constructor(doc, driver, normalizer) {
          super(doc, driver, normalizer);
        }
        ngOnDestroy() {
          this.flush();
        }
        static ɵfac = function InjectableAnimationEngine_Factory(__ngFactoryType__) {
          return new (__ngFactoryType__ || InjectableAnimationEngine)(i0.ɵɵinject(DOCUMENT), i0.ɵɵinject(i1.AnimationDriver), i0.ɵɵinject(i1.ɵAnimationStyleNormalizer));
        };
        static ɵprov = /* @__PURE__ */i0.ɵɵdefineInjectable({
          token: InjectableAnimationEngine,
          factory: InjectableAnimationEngine.ɵfac
        });
      } exports("ɵInjectableAnimationEngine", InjectableAnimationEngine);
      (() => {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InjectableAnimationEngine, [{
          type: Injectable
        }], () => [{
          type: Document,
          decorators: [{
            type: Inject,
            args: [DOCUMENT]
          }]
        }, {
          type: i1.AnimationDriver
        }, {
          type: i1.ɵAnimationStyleNormalizer
        }], null);
      })();
      function instantiateDefaultStyleNormalizer() {
        return new _WebAnimationsStyleNormalizer();
      }
      function instantiateRendererFactory(renderer, engine, zone) {
        return new _AnimationRendererFactory(renderer, engine, zone);
      }
      const SHARED_ANIMATION_PROVIDERS = [{
        provide: _AnimationStyleNormalizer,
        useFactory: instantiateDefaultStyleNormalizer
      }, {
        provide: _AnimationEngine,
        useClass: InjectableAnimationEngine
      }, {
        provide: RendererFactory2,
        useFactory: instantiateRendererFactory,
        deps: [DomRendererFactory2, _AnimationEngine, NgZone]
      }];
      /**
       * Separate providers from the actual module so that we can do a local modification in Google3 to
       * include them in the BrowserTestingModule.
       */
      const BROWSER_NOOP_ANIMATIONS_PROVIDERS = [{
        provide: AnimationDriver,
        useClass: NoopAnimationDriver
      }, {
        provide: ANIMATION_MODULE_TYPE,
        useValue: 'NoopAnimations'
      }, ...SHARED_ANIMATION_PROVIDERS];
      /**
       * Separate providers from the actual module so that we can do a local modification in Google3 to
       * include them in the BrowserModule.
       */
      const BROWSER_ANIMATIONS_PROVIDERS = [
      // Note: the `ngServerMode` happen inside factories to give the variable time to initialize.
      {
        provide: AnimationDriver,
        useFactory: () => typeof ngServerMode !== 'undefined' && ngServerMode ? new NoopAnimationDriver() : new _WebAnimationsDriver()
      }, {
        provide: ANIMATION_MODULE_TYPE,
        useFactory: () => typeof ngServerMode !== 'undefined' && ngServerMode ? 'NoopAnimations' : 'BrowserAnimations'
      }, ...SHARED_ANIMATION_PROVIDERS];

      /**
       * Exports `BrowserModule` with additional dependency-injection providers
       * for use with animations. See [Animations](guide/animations).
       * @publicApi
       */
      class BrowserAnimationsModule {
        /**
         * Configures the module based on the specified object.
         *
         * @param config Object used to configure the behavior of the `BrowserAnimationsModule`.
         * @see {@link BrowserAnimationsModuleConfig}
         *
         * @usageNotes
         * When registering the `BrowserAnimationsModule`, you can use the `withConfig`
         * function as follows:
         * ```ts
         * @NgModule({
         *   imports: [BrowserAnimationsModule.withConfig(config)]
         * })
         * class MyNgModule {}
         * ```
         */
        static withConfig(config) {
          return {
            ngModule: BrowserAnimationsModule,
            providers: config.disableAnimations ? BROWSER_NOOP_ANIMATIONS_PROVIDERS : BROWSER_ANIMATIONS_PROVIDERS
          };
        }
        static ɵfac = function BrowserAnimationsModule_Factory(__ngFactoryType__) {
          return new (__ngFactoryType__ || BrowserAnimationsModule)();
        };
        static ɵmod = /* @__PURE__ */i0.ɵɵdefineNgModule({
          type: BrowserAnimationsModule
        });
        static ɵinj = /* @__PURE__ */i0.ɵɵdefineInjector({
          providers: BROWSER_ANIMATIONS_PROVIDERS,
          imports: [BrowserModule]
        });
      } exports("BrowserAnimationsModule", BrowserAnimationsModule);
      (() => {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BrowserAnimationsModule, [{
          type: NgModule,
          args: [{
            exports: [BrowserModule],
            providers: BROWSER_ANIMATIONS_PROVIDERS
          }]
        }], null, null);
      })();
      /**
       * Returns the set of dependency-injection providers
       * to enable animations in an application. See [animations guide](guide/animations)
       * to learn more about animations in Angular.
       *
       * @usageNotes
       *
       * The function is useful when you want to enable animations in an application
       * bootstrapped using the `bootstrapApplication` function. In this scenario there
       * is no need to import the `BrowserAnimationsModule` NgModule at all, just add
       * providers returned by this function to the `providers` list as show below.
       *
       * ```ts
       * bootstrapApplication(RootComponent, {
       *   providers: [
       *     provideAnimations()
       *   ]
       * });
       * ```
       *
       * @publicApi
       */
      function provideAnimations() {
        _performanceMarkFeature('NgEagerAnimations');
        // Return a copy to prevent changes to the original array in case any in-place
        // alterations are performed to the `provideAnimations` call results in app code.
        return [...BROWSER_ANIMATIONS_PROVIDERS];
      }
      /**
       * A null player that must be imported to allow disabling of animations.
       * @publicApi
       */
      class NoopAnimationsModule {
        static ɵfac = function NoopAnimationsModule_Factory(__ngFactoryType__) {
          return new (__ngFactoryType__ || NoopAnimationsModule)();
        };
        static ɵmod = /* @__PURE__ */i0.ɵɵdefineNgModule({
          type: NoopAnimationsModule
        });
        static ɵinj = /* @__PURE__ */i0.ɵɵdefineInjector({
          providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS,
          imports: [BrowserModule]
        });
      } exports("NoopAnimationsModule", NoopAnimationsModule);
      (() => {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NoopAnimationsModule, [{
          type: NgModule,
          args: [{
            exports: [BrowserModule],
            providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS
          }]
        }], null, null);
      })();
      /**
       * Returns the set of dependency-injection providers
       * to disable animations in an application. See [animations guide](guide/animations)
       * to learn more about animations in Angular.
       *
       * @usageNotes
       *
       * The function is useful when you want to bootstrap an application using
       * the `bootstrapApplication` function, but you need to disable animations
       * (for example, when running tests).
       *
       * ```ts
       * bootstrapApplication(RootComponent, {
       *   providers: [
       *     provideNoopAnimations()
       *   ]
       * });
       * ```
       *
       * @publicApi
       */
      function provideNoopAnimations() {
        // Return a copy to prevent changes to the original array in case any in-place
        // alterations are performed to the `provideNoopAnimations` call results in app code.
        return [...BROWSER_NOOP_ANIMATIONS_PROVIDERS];
      }

    })
  };
}));
//# sourceMappingURL=angular-platform-browser-animations.js.map
