!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=18)}([function(e,t,n){var r=n(10);e.exports=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){r(e,t,n[t])})}return e}},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(t){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=r=function(e){return n(e)}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},r(t)}e.exports=r},function(e,t,n){var r=n(3),o=n(7);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t}},function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},function(e,t,n){var r=n(11);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t,n){var r=n(15),o=n(16),i=n(17);e.exports=function(e,t){return r(e)||o(e,t)||i()}},function(e,t,n){var r=n(12),o=n(13),i=n(14);e.exports=function(e){return r(e)||o(e)||i()}},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},function(e,t,n){"use strict";n.r(t);var r=n(3),o=n.n(r),i=n(0),a=n.n(i),s=n(1),u=n.n(s),l=n(2),c=n.n(l),f=n(4),p=n.n(f),g=n(5),h=n.n(g),d=n(6),v=n.n(d),y=n(7),m=n.n(y),b=n(9),x=n.n(b),k={type:"logger",log:function(e){this.output("log",e)},warn:function(e){this.output("warn",e)},error:function(e){this.output("error",e)},output:function(e,t){var n;console&&console[e]&&(n=console)[e].apply(n,x()(t))}},S=new(function(){function e(t){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};u()(this,e),this.init(t,n)}return c()(e,[{key:"init",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||k,this.options=t,this.debug=t.debug}},{key:"setDebug",value:function(e){this.debug=e}},{key:"log",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"log","",!0)}},{key:"warn",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"warn","",!0)}},{key:"error",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"error","")}},{key:"deprecate",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}},{key:"forward",value:function(e,t,n,r){return r&&!this.debug?null:("string"==typeof e[0]&&(e[0]="".concat(n).concat(this.prefix," ").concat(e[0])),this.logger[t](e))}},{key:"create",value:function(t){return new e(this.logger,a()({},{prefix:"".concat(this.prefix,":").concat(t,":")},this.options))}}]),e}()),w=function(){function e(){u()(this,e),this.observers={}}return c()(e,[{key:"on",value:function(e,t){var n=this;return e.split(" ").forEach(function(e){n.observers[e]=n.observers[e]||[],n.observers[e].push(t)}),this}},{key:"off",value:function(e,t){var n=this;this.observers[e]&&this.observers[e].forEach(function(){if(t){var r=n.observers[e].indexOf(t);-1<r&&n.observers[e].splice(r,1)}else delete n.observers[e]})}},{key:"emit",value:function(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this.observers[e]&&[].concat(this.observers[e]).forEach(function(e){e.apply(void 0,n)}),this.observers["*"]&&[].concat(this.observers["*"]).forEach(function(t){t.apply(t,[e].concat(n))})}}]),e}();function O(){var e,t,n=new Promise(function(n,r){e=n,t=r});return n.resolve=e,n.reject=t,n}function j(e){return null==e?"":""+e}function R(e,t,n){function r(e){return e&&-1<e.indexOf("###")?e.replace(/###/g,"."):e}function o(){return!e||"string"==typeof e}for(var i="string"!=typeof t?[].concat(t):t.split(".");1<i.length;){if(o())return{};var a=r(i.shift());!e[a]&&n&&(e[a]=new n),e=e[a]}return o()?{}:{obj:e,k:r(i.shift())}}function L(e,t,n){var r=R(e,t,Object);r.obj[r.k]=n}function N(e,t){var n=R(e,t),r=n.obj,o=n.k;if(r)return r[o]}function P(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var C={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function E(e){return"string"==typeof e?e.replace(/[&<>"'\/]/g,function(e){return C[e]}):e}var F=function(e){function t(e){var n,r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{ns:["translation"],defaultNS:"translation"};return u()(this,t),(n=p()(this,h()(t).call(this))).data=e||{},n.options=r,void 0===n.options.keySeparator&&(n.options.keySeparator="."),n}return v()(t,e),c()(t,[{key:"addNamespaces",value:function(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}},{key:"removeNamespaces",value:function(e){var t=this.options.ns.indexOf(e);-1<t&&this.options.ns.splice(t,1)}},{key:"getResource",value:function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},o=void 0!==r.keySeparator?r.keySeparator:this.options.keySeparator,i=[e,t];return n&&"string"!=typeof n&&(i=i.concat(n)),n&&"string"==typeof n&&(i=i.concat(o?n.split(o):n)),-1<e.indexOf(".")&&(i=e.split(".")),N(this.data,i)}},{key:"addResource",value:function(e,t,n,r){var o=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{silent:!1},i=this.options.keySeparator;void 0===i&&(i=".");var a=[e,t];n&&(a=a.concat(i?n.split(i):n)),-1<e.indexOf(".")&&(r=t,t=(a=e.split("."))[1]),this.addNamespaces(t),L(this.data,a,r),o.silent||this.emit("added",e,t,n,r)}},{key:"addResources",value:function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{silent:!1};for(var o in n)"string"!=typeof n[o]&&"[object Array]"!==Object.prototype.toString.apply(n[o])||this.addResource(e,t,o,n[o],{silent:!0});r.silent||this.emit("added",e,t,n)}},{key:"addResourceBundle",value:function(e,t,n,r,o){var i=5<arguments.length&&void 0!==arguments[5]?arguments[5]:{silent:!1},s=[e,t];-1<e.indexOf(".")&&(r=n,n=t,t=(s=e.split("."))[1]),this.addNamespaces(t);var u=N(this.data,s)||{};r?function e(t,n,r){for(var o in n)o in t?"string"==typeof t[o]||t[o]instanceof String||"string"==typeof n[o]||n[o]instanceof String?r&&(t[o]=n[o]):e(t[o],n[o],r):t[o]=n[o];return t}(u,n,o):u=a()({},u,n),L(this.data,s,u),i.silent||this.emit("added",e,t,n)}},{key:"removeResourceBundle",value:function(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}},{key:"hasResourceBundle",value:function(e,t){return void 0!==this.getResource(e,t)}},{key:"getResourceBundle",value:function(e,t){return t||(t=this.options.defaultNS),"v1"===this.options.compatibilityAPI?a()({},{},this.getResource(e,t)):this.getResource(e,t)}},{key:"getDataByLanguage",value:function(e){return this.data[e]}},{key:"toJSON",value:function(){return this.data}}]),t}(w),A={processors:{},addPostProcessor:function(e){this.processors[e.name]=e},handle:function(e,t,n,r,o){var i=this;return e.forEach(function(e){i.processors[e]&&(t=i.processors[e].process(t,n,r,o))}),t}},T=function(e){function t(e){var n,r,o,i,a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return u()(this,t),n=p()(this,h()(t).call(this)),r=["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat"],o=e,i=m()(m()(n)),r.forEach(function(e){o[e]&&(i[e]=o[e])}),n.options=a,void 0===n.options.keySeparator&&(n.options.keySeparator="."),n.logger=S.create("translator"),n}return v()(t,e),c()(t,[{key:"changeLanguage",value:function(e){e&&(this.language=e)}},{key:"exists",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{interpolation:{}},n=this.resolve(e,t);return n&&void 0!==n.res}},{key:"extractFromKey",value:function(e,t){var n=t.nsSeparator||this.options.nsSeparator;void 0===n&&(n=":");var r=void 0!==t.keySeparator?t.keySeparator:this.options.keySeparator,o=t.ns||this.options.defaultNS;if(n&&-1<e.indexOf(n)){var i=e.split(n);(n!==r||n===r&&-1<this.options.ns.indexOf(i[0]))&&(o=i.shift()),e=i.join(r)}return"string"==typeof o&&(o=[o]),{key:e,namespaces:o}}},{key:"translate",value:function(e,t){var n=this;if("object"!==o()(t)&&this.options.overloadTranslationOptionHandler&&(t=this.options.overloadTranslationOptionHandler(arguments)),t||(t={}),null==e)return"";Array.isArray(e)||(e=[String(e)]);var r=void 0!==t.keySeparator?t.keySeparator:this.options.keySeparator,i=this.extractFromKey(e[e.length-1],t),s=i.key,u=i.namespaces,l=u[u.length-1],c=t.lng||this.language,f=t.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(c&&"cimode"===c.toLowerCase()){if(f){var p=t.nsSeparator||this.options.nsSeparator;return l+p+s}return s}var g=this.resolve(e,t),h=g&&g.res,d=g&&g.usedKey||s,v=g&&g.exactUsedKey||s,y=Object.prototype.toString.apply(h),m=void 0!==t.joinArrays?t.joinArrays:this.options.joinArrays,b=!this.i18nFormat||this.i18nFormat.handleAsObject;if(b&&h&&"string"!=typeof h&&"boolean"!=typeof h&&"number"!=typeof h&&["[object Number]","[object Function]","[object RegExp]"].indexOf(y)<0&&("string"!=typeof m||"[object Array]"!==y)){if(!t.returnObjects&&!this.options.returnObjects)return this.logger.warn("accessing an object - but returnObjects options is not enabled!"),this.options.returnedObjectHandler?this.options.returnedObjectHandler(d,h,t):"key '".concat(s," (").concat(this.language,")' returned an object instead of string.");if(r){var x="[object Array]"===y,k=x?[]:{},S=x?v:d;for(var w in h)if(Object.prototype.hasOwnProperty.call(h,w)){var O="".concat(S).concat(r).concat(w);k[w]=this.translate(O,a()({},t,{joinArrays:!1,ns:u})),k[w]===O&&(k[w]=h[w])}h=k}}else if(b&&"string"==typeof m&&"[object Array]"===y)(h=h.join(m))&&(h=this.extendTranslation(h,e,t));else{var j=!1,R=!1;if(!this.isValidLookup(h)&&void 0!==t.defaultValue){if(j=!0,void 0!==t.count){var L=this.pluralResolver.getSuffix(c,t.count);h=t["defaultValue".concat(L)]}h||(h=t.defaultValue)}this.isValidLookup(h)||(R=!0,h=s);var N=t.defaultValue&&t.defaultValue!==h&&this.options.updateMissing;if(R||j||N){this.logger.log(N?"updateKey":"missingKey",c,l,s,N?t.defaultValue:h);var P=[],C=this.languageUtils.getFallbackCodes(this.options.fallbackLng,t.lng||this.language);if("fallback"===this.options.saveMissingTo&&C&&C[0])for(var E=0;E<C.length;E++)P.push(C[E]);else"all"===this.options.saveMissingTo?P=this.languageUtils.toResolveHierarchy(t.lng||this.language):P.push(t.lng||this.language);var F=function(e,r){n.options.missingKeyHandler?n.options.missingKeyHandler(e,l,r,N?t.defaultValue:h,N,t):n.backendConnector&&n.backendConnector.saveMissing&&n.backendConnector.saveMissing(e,l,r,N?t.defaultValue:h,N,t),n.emit("missingKey",e,l,r,h)};if(this.options.saveMissing){var A=void 0!==t.count&&"string"!=typeof t.count;this.options.saveMissingPlurals&&A?P.forEach(function(e){n.pluralResolver.getPluralFormsOfKey(e,s).forEach(function(t){return F([e],t)})}):F(P,s)}}h=this.extendTranslation(h,e,t,g),R&&h===s&&this.options.appendNamespaceToMissingKey&&(h="".concat(l,":").concat(s)),R&&this.options.parseMissingKeyHandler&&(h=this.options.parseMissingKeyHandler(h))}return h}},{key:"extendTranslation",value:function(e,t,n,r){var o=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,n,r.usedLng,r.usedNS,r.usedKey,{resolved:r});else if(!n.skipInterpolation){n.interpolation&&this.interpolator.init(a()({},n,{interpolation:a()({},this.options.interpolation,n.interpolation)}));var i=n.replace&&"string"!=typeof n.replace?n.replace:n;this.options.interpolation.defaultVariables&&(i=a()({},this.options.interpolation.defaultVariables,i)),e=this.interpolator.interpolate(e,i,n.lng||this.language,n),!1!==n.nest&&(e=this.interpolator.nest(e,function(){return o.translate.apply(o,arguments)},n)),n.interpolation&&this.interpolator.reset()}var s=n.postProcess||this.options.postProcess,u="string"==typeof s?[s]:s;return null!=e&&u&&u.length&&!1!==n.applyPostProcessor&&(e=A.handle(u,e,t,n,this)),e}},{key:"resolve",value:function(e){var t,n,r,o,i,a=this,s=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return"string"==typeof e&&(e=[e]),e.forEach(function(e){if(!a.isValidLookup(t)){var u=a.extractFromKey(e,s),l=u.key;n=l;var c=u.namespaces;a.options.fallbackNS&&(c=c.concat(a.options.fallbackNS));var f=void 0!==s.count&&"string"!=typeof s.count,p=void 0!==s.context&&"string"==typeof s.context&&""!==s.context,g=s.lngs?s.lngs:a.languageUtils.toResolveHierarchy(s.lng||a.language,s.fallbackLng);c.forEach(function(e){a.isValidLookup(t)||(i=e,g.forEach(function(n){if(!a.isValidLookup(t)){o=n;var i,u,c=l,g=[c];for(a.i18nFormat&&a.i18nFormat.addLookupKeys?a.i18nFormat.addLookupKeys(g,l,n,e,s):(f&&(i=a.pluralResolver.getSuffix(n,s.count)),f&&p&&g.push(c+i),p&&g.push(c+="".concat(a.options.contextSeparator).concat(s.context)),f&&g.push(c+=i));u=g.pop();)a.isValidLookup(t)||(r=u,t=a.getResource(n,e,u,s))}}))})}}),{res:t,usedKey:n,exactUsedKey:r,usedLng:o,usedNS:i}}},{key:"isValidLookup",value:function(e){return!(void 0===e||!this.options.returnNull&&null===e||!this.options.returnEmptyString&&""===e)}},{key:"getResource",value:function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,t,n,r):this.resourceStore.getResource(e,t,n,r)}}]),t}(w);function V(e){return e.charAt(0).toUpperCase()+e.slice(1)}var U=function(){function e(t){u()(this,e),this.options=t,this.whitelist=this.options.whitelist||!1,this.logger=S.create("languageUtils")}return c()(e,[{key:"getScriptPartFromCode",value:function(e){if(!e||e.indexOf("-")<0)return null;var t=e.split("-");return 2===t.length?null:(t.pop(),this.formatLanguageCode(t.join("-")))}},{key:"getLanguagePartFromCode",value:function(e){if(!e||e.indexOf("-")<0)return e;var t=e.split("-");return this.formatLanguageCode(t[0])}},{key:"formatLanguageCode",value:function(e){if("string"==typeof e&&-1<e.indexOf("-")){var t=["hans","hant","latn","cyrl","cans","mong","arab"],n=e.split("-");return this.options.lowerCaseLng?n=n.map(function(e){return e.toLowerCase()}):2===n.length?(n[0]=n[0].toLowerCase(),n[1]=n[1].toUpperCase(),-1<t.indexOf(n[1].toLowerCase())&&(n[1]=V(n[1].toLowerCase()))):3===n.length&&(n[0]=n[0].toLowerCase(),2===n[1].length&&(n[1]=n[1].toUpperCase()),"sgn"!==n[0]&&2===n[2].length&&(n[2]=n[2].toUpperCase()),-1<t.indexOf(n[1].toLowerCase())&&(n[1]=V(n[1].toLowerCase())),-1<t.indexOf(n[2].toLowerCase())&&(n[2]=V(n[2].toLowerCase()))),n.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}},{key:"isWhitelisted",value:function(e){return("languageOnly"===this.options.load||this.options.nonExplicitWhitelist)&&(e=this.getLanguagePartFromCode(e)),!this.whitelist||!this.whitelist.length||-1<this.whitelist.indexOf(e)}},{key:"getFallbackCodes",value:function(e,t){if(!e)return[];if("string"==typeof e&&(e=[e]),"[object Array]"===Object.prototype.toString.apply(e))return e;if(!t)return e.default||[];var n=e[t];return n||(n=e[this.getScriptPartFromCode(t)]),n||(n=e[this.formatLanguageCode(t)]),n||(n=e.default),n||[]}},{key:"toResolveHierarchy",value:function(e,t){var n=this,r=this.getFallbackCodes(t||this.options.fallbackLng||[],e),o=[],i=function(e){e&&(n.isWhitelisted(e)?o.push(e):n.logger.warn("rejecting non-whitelisted language code: ".concat(e)))};return"string"==typeof e&&-1<e.indexOf("-")?("languageOnly"!==this.options.load&&i(this.formatLanguageCode(e)),"languageOnly"!==this.options.load&&"currentOnly"!==this.options.load&&i(this.getScriptPartFromCode(e)),"currentOnly"!==this.options.load&&i(this.getLanguagePartFromCode(e))):"string"==typeof e&&i(this.formatLanguageCode(e)),r.forEach(function(e){o.indexOf(e)<0&&i(n.formatLanguageCode(e))}),o}}]),e}(),I=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","id","ja","jbo","ka","kk","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he"],nr:[1,2,20,21],fc:22}],M={1:function(e){return Number(1<e)},2:function(e){return Number(1!=e)},3:function(e){return 0},4:function(e){return Number(e%10==1&&e%100!=11?0:2<=e%10&&e%10<=4&&(e%100<10||20<=e%100)?1:2)},5:function(e){return Number(0===e?0:1==e?1:2==e?2:3<=e%100&&e%100<=10?3:11<=e%100?4:5)},6:function(e){return Number(1==e?0:2<=e&&e<=4?1:2)},7:function(e){return Number(1==e?0:2<=e%10&&e%10<=4&&(e%100<10||20<=e%100)?1:2)},8:function(e){return Number(1==e?0:2==e?1:8!=e&&11!=e?2:3)},9:function(e){return Number(2<=e)},10:function(e){return Number(1==e?0:2==e?1:e<7?2:e<11?3:4)},11:function(e){return Number(1==e||11==e?0:2==e||12==e?1:2<e&&e<20?2:3)},12:function(e){return Number(e%10!=1||e%100==11)},13:function(e){return Number(0!==e)},14:function(e){return Number(1==e?0:2==e?1:3==e?2:3)},15:function(e){return Number(e%10==1&&e%100!=11?0:2<=e%10&&(e%100<10||20<=e%100)?1:2)},16:function(e){return Number(e%10==1&&e%100!=11?0:0!==e?1:2)},17:function(e){return Number(1==e||e%10==1?0:1)},18:function(e){return Number(0==e?0:1==e?1:2)},19:function(e){return Number(1==e?0:0===e||1<e%100&&e%100<11?1:10<e%100&&e%100<20?2:3)},20:function(e){return Number(1==e?0:0===e||0<e%100&&e%100<20?1:2)},21:function(e){return Number(e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0)},22:function(e){return Number(1===e?0:2===e?1:(e<0||10<e)&&e%10==0?2:3)}},D=function(){function e(t){var n,r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};u()(this,e),this.languageUtils=t,this.options=r,this.logger=S.create("pluralResolver"),this.rules=(n={},I.forEach(function(e){e.lngs.forEach(function(t){n[t]={numbers:e.nr,plurals:M[e.fc]}})}),n)}return c()(e,[{key:"addRule",value:function(e,t){this.rules[e]=t}},{key:"getRule",value:function(e){return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}},{key:"needsPlural",value:function(e){var t=this.getRule(e);return t&&1<t.numbers.length}},{key:"getPluralFormsOfKey",value:function(e,t){var n=this,r=[],o=this.getRule(e);return o&&o.numbers.forEach(function(o){var i=n.getSuffix(e,o);r.push("".concat(t).concat(i))}),r}},{key:"getSuffix",value:function(e,t){var n=this,r=this.getRule(e);if(r){var o=r.noAbs?r.plurals(t):r.plurals(Math.abs(t)),i=r.numbers[o];this.options.simplifyPluralSuffix&&2===r.numbers.length&&1===r.numbers[0]&&(2===i?i="plural":1===i&&(i=""));var a=function(){return n.options.prepend&&i.toString()?n.options.prepend+i.toString():i.toString()};return"v1"===this.options.compatibilityJSON?1===i?"":"number"==typeof i?"_plural_".concat(i.toString()):a():"v2"===this.options.compatibilityJSON?a():this.options.simplifyPluralSuffix&&2===r.numbers.length&&1===r.numbers[0]?a():this.options.prepend&&o.toString()?this.options.prepend+o.toString():o.toString()}return this.logger.warn("no plural rule found for: ".concat(e)),""}}]),e}(),K=function(){function e(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};u()(this,e),this.logger=S.create("interpolator"),this.init(t,!0)}return c()(e,[{key:"init",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};(1<arguments.length?arguments[1]:void 0)&&(this.options=e,this.format=e.interpolation&&e.interpolation.format||function(e){return e}),e.interpolation||(e.interpolation={escapeValue:!0});var t=e.interpolation;this.escape=void 0!==t.escape?t.escape:E,this.escapeValue=void 0===t.escapeValue||t.escapeValue,this.useRawValueToEscape=void 0!==t.useRawValueToEscape&&t.useRawValueToEscape,this.prefix=t.prefix?P(t.prefix):t.prefixEscaped||"{{",this.suffix=t.suffix?P(t.suffix):t.suffixEscaped||"}}",this.formatSeparator=t.formatSeparator?t.formatSeparator:t.formatSeparator||",",this.unescapePrefix=t.unescapeSuffix?"":t.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":t.unescapeSuffix||"",this.nestingPrefix=t.nestingPrefix?P(t.nestingPrefix):t.nestingPrefixEscaped||P("$t("),this.nestingSuffix=t.nestingSuffix?P(t.nestingSuffix):t.nestingSuffixEscaped||P(")"),this.maxReplaces=t.maxReplaces?t.maxReplaces:1e3,this.resetRegExp()}},{key:"reset",value:function(){this.options&&this.init(this.options)}},{key:"resetRegExp",value:function(){var e="".concat(this.prefix,"(.+?)").concat(this.suffix);this.regexp=new RegExp(e,"g");var t="".concat(this.prefix).concat(this.unescapePrefix,"(.+?)").concat(this.unescapeSuffix).concat(this.suffix);this.regexpUnescape=new RegExp(t,"g");var n="".concat(this.nestingPrefix,"(.+?)").concat(this.nestingSuffix);this.nestingRegexp=new RegExp(n,"g")}},{key:"interpolate",value:function(e,t,n,r){var o,i,a,s=this;function u(e){return e.replace(/\$/g,"$$$$")}var l=function(e){if(e.indexOf(s.formatSeparator)<0)return N(t,e);var r=e.split(s.formatSeparator),o=r.shift().trim(),i=r.join(s.formatSeparator).trim();return s.format(N(t,o),i,n)};this.resetRegExp();var c=r&&r.missingInterpolationHandler||this.options.missingInterpolationHandler;for(a=0;(o=this.regexpUnescape.exec(e))&&(i=l(o[1].trim()),e=e.replace(o[0],i),this.regexpUnescape.lastIndex=0,!(++a>=this.maxReplaces)););for(a=0;o=this.regexp.exec(e);){if(void 0===(i=l(o[1].trim())))if("function"==typeof c){var f=c(e,o,r);i="string"==typeof f?f:""}else this.logger.warn("missed to pass in variable ".concat(o[1]," for interpolating ").concat(e)),i="";else"string"==typeof i||this.useRawValueToEscape||(i=j(i));if(i=this.escapeValue?u(this.escape(i)):u(i),e=e.replace(o[0],i),this.regexp.lastIndex=0,++a>=this.maxReplaces)break}return e}},{key:"nest",value:function(e,t){var n,r,o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},i=a()({},o);function s(e,t){if(e.indexOf(",")<0)return e;var n=e.split(",");e=n.shift();var r=n.join(",");r=(r=this.interpolate(r,i)).replace(/'/g,'"');try{i=JSON.parse(r),t&&(i=a()({},t,i))}catch(t){this.logger.error("failed parsing options string in nesting for key ".concat(e),t)}return e}for(i.applyPostProcessor=!1;n=this.nestingRegexp.exec(e);){if((r=t(s.call(this,n[1].trim(),i),i))&&n[0]===e&&"string"!=typeof r)return r;"string"!=typeof r&&(r=j(r)),r||(this.logger.warn("missed to resolve ".concat(n[1]," for nesting ").concat(e)),r=""),e=e.replace(n[0],r),this.regexp.lastIndex=0}return e}}]),e}(),H=n(8),_=n.n(H),B=function(e){function t(e,n,r){var o,i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{};return u()(this,t),(o=p()(this,h()(t).call(this))).backend=e,o.store=n,o.languageUtils=r.languageUtils,o.options=i,o.logger=S.create("backendConnector"),o.state={},o.queue=[],o.backend&&o.backend.init&&o.backend.init(r,i.backend,i),o}return v()(t,e),c()(t,[{key:"queueLoad",value:function(e,t,n,r){var o=this,i=[],a=[],s=[],u=[];return e.forEach(function(e){var r=!0;t.forEach(function(t){var s="".concat(e,"|").concat(t);!n.reload&&o.store.hasResourceBundle(e,t)?o.state[s]=2:o.state[s]<0||(1===o.state[s]?a.indexOf(s)<0&&a.push(s):(o.state[s]=1,r=!1,a.indexOf(s)<0&&a.push(s),i.indexOf(s)<0&&i.push(s),u.indexOf(t)<0&&u.push(t)))}),r||s.push(e)}),(i.length||a.length)&&this.queue.push({pending:a,loaded:{},errors:[],callback:r}),{toLoad:i,pending:a,toLoadLanguages:s,toLoadNamespaces:u}}},{key:"loaded",value:function(e,t,n){var r=e.split("|"),o=_()(r,2),i=o[0],a=o[1];t&&this.emit("failedLoading",i,a,t),n&&this.store.addResourceBundle(i,a,n),this.state[e]=t?-1:2;var s={};this.queue.forEach(function(n){var r,o,u,l,c;r=n.loaded,o=a,(l=(u=R(r,[i],Object)).obj)[c=u.k]=l[c]||[],l[c].push(o),function(e,t){for(var n=e.indexOf(t);-1!==n;)e.splice(n,1),n=e.indexOf(t)}(n.pending,e),t&&n.errors.push(t),0!==n.pending.length||n.done||(Object.keys(n.loaded).forEach(function(e){s[e]||(s[e]=[]),n.loaded[e].length&&n.loaded[e].forEach(function(t){s[e].indexOf(t)<0&&s[e].push(t)})}),n.done=!0,n.errors.length?n.callback(n.errors):n.callback())}),this.emit("loaded",s),this.queue=this.queue.filter(function(e){return!e.done})}},{key:"read",value:function(e,t,n){var r=this,o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:0,i=4<arguments.length&&void 0!==arguments[4]?arguments[4]:250,a=5<arguments.length?arguments[5]:void 0;return e.length?this.backend[n](e,t,function(s,u){s&&u&&o<5?setTimeout(function(){r.read.call(r,e,t,n,o+1,2*i,a)},i):a(s,u)}):a(null,{})}},{key:"prepareLoading",value:function(e,t){var n=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},o=3<arguments.length?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),o&&o();"string"==typeof e&&(e=this.languageUtils.toResolveHierarchy(e)),"string"==typeof t&&(t=[t]);var i=this.queueLoad(e,t,r,o);if(!i.toLoad.length)return i.pending.length||o(),null;i.toLoad.forEach(function(e){n.loadOne(e)})}},{key:"load",value:function(e,t,n){this.prepareLoading(e,t,{},n)}},{key:"reload",value:function(e,t,n){this.prepareLoading(e,t,{reload:!0},n)}},{key:"loadOne",value:function(e){var t=this,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",r=e.split("|"),o=_()(r,2),i=o[0],a=o[1];this.read(i,a,"read",null,null,function(r,o){r&&t.logger.warn("".concat(n,"loading namespace ").concat(a," for language ").concat(i," failed"),r),!r&&o&&t.logger.log("".concat(n,"loaded namespace ").concat(a," for language ").concat(i),o),t.loaded(e,r,o)})}},{key:"saveMissing",value:function(e,t,n,r,o){var i=5<arguments.length&&void 0!==arguments[5]?arguments[5]:{};this.backend&&this.backend.create&&this.backend.create(e,t,n,r,null,a()({},i,{isUpdate:o})),e&&e[0]&&this.store.addResource(e[0],t,n,r)}}]),t}(w);function q(e){return"string"==typeof e.ns&&(e.ns=[e.ns]),"string"==typeof e.fallbackLng&&(e.fallbackLng=[e.fallbackLng]),"string"==typeof e.fallbackNS&&(e.fallbackNS=[e.fallbackNS]),e.whitelist&&e.whitelist.indexOf("cimode")<0&&(e.whitelist=e.whitelist.concat(["cimode"])),e}function z(){}var $=new(function(e){function t(){var e,n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},r=1<arguments.length?arguments[1]:void 0;if(u()(this,t),(e=p()(this,h()(t).call(this))).options=q(n),e.services={},e.logger=S,e.modules={external:[]},r&&!e.isInitialized&&!n.isClone){if(!e.options.initImmediate)return e.init(n,r),p()(e,m()(m()(e)));setTimeout(function(){e.init(n,r)},0)}return e}return v()(t,e),c()(t,[{key:"init",value:function(){var e=this,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},n=1<arguments.length?arguments[1]:void 0;function r(e){return e?"function"==typeof e?new e:e:null}if("function"==typeof t&&(n=t,t={}),this.options=a()({},{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,whitelist:!1,nonExplicitWhitelist:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,returnNull:!0,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:function(){},parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(e){var t={};if("object"===o()(e[1])&&(t=e[1]),"string"==typeof e[1]&&(t.defaultValue=e[1]),"string"==typeof e[2]&&(t.tDescription=e[2]),"object"===o()(e[2])||"object"===o()(e[3])){var n=e[3]||e[2];Object.keys(n).forEach(function(e){t[e]=n[e]})}return t},interpolation:{escapeValue:!0,format:function(e,t,n){return e},prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",maxReplaces:1e3}},this.options,q(t)),this.format=this.options.interpolation.format,n||(n=z),!this.options.isClone){this.modules.logger?S.init(r(this.modules.logger),this.options):S.init(null,this.options);var i=new U(this.options);this.store=new F(this.options.resources,this.options);var s=this.services;s.logger=S,s.resourceStore=this.store,s.languageUtils=i,s.pluralResolver=new D(i,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),s.interpolator=new K(this.options),s.backendConnector=new B(r(this.modules.backend),s.resourceStore,s,this.options),s.backendConnector.on("*",function(t){for(var n=arguments.length,r=new Array(1<n?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];e.emit.apply(e,[t].concat(r))}),this.modules.languageDetector&&(s.languageDetector=r(this.modules.languageDetector),s.languageDetector.init(s,this.options.detection,this.options)),this.modules.i18nFormat&&(s.i18nFormat=r(this.modules.i18nFormat),s.i18nFormat.init&&s.i18nFormat.init(this)),this.translator=new T(this.services,this.options),this.translator.on("*",function(t){for(var n=arguments.length,r=new Array(1<n?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];e.emit.apply(e,[t].concat(r))}),this.modules.external.forEach(function(t){t.init&&t.init(e)})}["getResource","addResource","addResources","addResourceBundle","removeResourceBundle","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(function(t){e[t]=function(){var n;return(n=e.store)[t].apply(n,arguments)}});var u=O(),l=function(){e.changeLanguage(e.options.lng,function(t,r){e.isInitialized=!0,e.logger.log("initialized",e.options),e.emit("initialized",e.options),u.resolve(r),n(t,r)})};return this.options.resources||!this.options.initImmediate?l():setTimeout(l,0),u}},{key:"loadResources",value:function(){var e=this,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:z;if(!this.options.resources||this.options.partialBundledLanguages){if(this.language&&"cimode"===this.language.toLowerCase())return t();var n=[],r=function(t){t&&e.services.languageUtils.toResolveHierarchy(t).forEach(function(e){n.indexOf(e)<0&&n.push(e)})};this.language?r(this.language):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(function(e){return r(e)}),this.options.preload&&this.options.preload.forEach(function(e){return r(e)}),this.services.backendConnector.load(n,this.options.ns,t)}else t(null)}},{key:"reloadResources",value:function(e,t,n){var r=O();return e||(e=this.languages),t||(t=this.options.ns),n||(n=z),this.services.backendConnector.reload(e,t,function(e){r.resolve(),n(e)}),r}},{key:"use",value:function(e){return"backend"===e.type&&(this.modules.backend=e),("logger"===e.type||e.log&&e.warn&&e.error)&&(this.modules.logger=e),"languageDetector"===e.type&&(this.modules.languageDetector=e),"i18nFormat"===e.type&&(this.modules.i18nFormat=e),"postProcessor"===e.type&&A.addPostProcessor(e),"3rdParty"===e.type&&this.modules.external.push(e),this}},{key:"changeLanguage",value:function(e,t){var n=this,r=O(),o=function(e){e&&(n.language=e,n.languages=n.services.languageUtils.toResolveHierarchy(e),n.translator.language||n.translator.changeLanguage(e),n.services.languageDetector&&n.services.languageDetector.cacheUserLanguage(e)),n.loadResources(function(o){var i,a;i=o,a=e,n.translator.changeLanguage(a),a&&(n.emit("languageChanged",a),n.logger.log("languageChanged",a)),r.resolve(function(){return n.t.apply(n,arguments)}),t&&t(i,function(){return n.t.apply(n,arguments)})})};return e||!this.services.languageDetector||this.services.languageDetector.async?!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect(o):o(e):o(this.services.languageDetector.detect()),r}},{key:"getFixedT",value:function(e,t){var n=this,r=function e(t,r){var i=a()({},r);if("object"!==o()(r)){for(var s=arguments.length,u=new Array(2<s?s-2:0),l=2;l<s;l++)u[l-2]=arguments[l];i=n.options.overloadTranslationOptionHandler([t,r].concat(u))}return i.lng=i.lng||e.lng,i.lngs=i.lngs||e.lngs,i.ns=i.ns||e.ns,n.t(t,i)};return"string"==typeof e?r.lng=e:r.lngs=e,r.ns=t,r}},{key:"t",value:function(){var e;return this.translator&&(e=this.translator).translate.apply(e,arguments)}},{key:"exists",value:function(){var e;return this.translator&&(e=this.translator).exists.apply(e,arguments)}},{key:"setDefaultNamespace",value:function(e){this.options.defaultNS=e}},{key:"loadNamespaces",value:function(e,t){var n=this,r=O();return this.options.ns?("string"==typeof e&&(e=[e]),e.forEach(function(e){n.options.ns.indexOf(e)<0&&n.options.ns.push(e)}),this.loadResources(function(e){r.resolve(),t&&t(e)}),r):(t&&t(),Promise.resolve())}},{key:"loadLanguages",value:function(e,t){var n=O();"string"==typeof e&&(e=[e]);var r=this.options.preload||[],o=e.filter(function(e){return r.indexOf(e)<0});return o.length?(this.options.preload=r.concat(o),this.loadResources(function(e){n.resolve(),t&&t(e)}),n):(t&&t(),Promise.resolve())}},{key:"dir",value:function(e){return e||(e=this.languages&&0<this.languages.length?this.languages[0]:this.language),e?0<=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam"].indexOf(this.services.languageUtils.getLanguagePartFromCode(e))?"rtl":"ltr":"rtl"}},{key:"createInstance",value:function(){return new t(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},1<arguments.length?arguments[1]:void 0)}},{key:"cloneInstance",value:function(){var e=this,n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:z,o=a()({},this.options,n,{isClone:!0}),i=new t(o);return["store","services","language"].forEach(function(t){i[t]=e[t]}),i.translator=new T(i.services,i.options),i.translator.on("*",function(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];i.emit.apply(i,[e].concat(n))}),i.init(o,r),i.translator.options=i.options,i}}]),t}(w));n.d(t,"changeLanguage",function(){return J}),n.d(t,"cloneInstance",function(){return W}),n.d(t,"createInstance",function(){return G}),n.d(t,"dir",function(){return Q}),n.d(t,"exists",function(){return X}),n.d(t,"getFixedT",function(){return Y}),n.d(t,"init",function(){return Z}),n.d(t,"loadLanguages",function(){return ee}),n.d(t,"loadNamespaces",function(){return te}),n.d(t,"loadResources",function(){return ne}),n.d(t,"off",function(){return re}),n.d(t,"on",function(){return oe}),n.d(t,"setDefaultNamespace",function(){return ie}),n.d(t,"t",function(){return ae}),n.d(t,"use",function(){return se}),t.default=$;var J=$.changeLanguage.bind($),W=$.cloneInstance.bind($),G=$.createInstance.bind($),Q=$.dir.bind($),X=$.exists.bind($),Y=$.getFixedT.bind($),Z=$.init.bind($),ee=$.loadLanguages.bind($),te=$.loadNamespaces.bind($),ne=$.loadResources.bind($),re=$.off.bind($),oe=$.on.bind($),ie=$.setDefaultNamespace.bind($),ae=$.t.bind($),se=$.use.bind($)}])});
//# sourceMappingURL=index.js.map