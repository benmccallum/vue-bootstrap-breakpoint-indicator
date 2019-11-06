!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("vue-bootstrap-breakpoint-indicator",[],t):"object"==typeof exports?exports["vue-bootstrap-breakpoint-indicator"]=t():e["vue-bootstrap-breakpoint-indicator"]=t()}(window,function(){return r={},o.m=n=[function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(5).default)("831a17fe",r,!1,{})},function(e,t,n){"use strict";var r=n(0);n.n(r).a},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,"\n#bootstrap-breakpoint-indicator {\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  background-color: #ccc;\n  font-size: .6rem;\n  margin: 2px;\n  padding: 2px 4px;\n  border-radius: 2px;\n  opacity: 0.5;\n}  \n",""])},function(e,t,n){"use strict";e.exports=function(n){var s=[];return s.toString=function(){return this.map(function(e){var t=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=function(e){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(n," */")}(r),i=r.sources.map(function(e){return"/*# sourceURL=".concat(r.sourceRoot).concat(e," */")});return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}(e,n);return e[2]?"@media ".concat(e[2],"{").concat(t,"}"):t}).join("")},s.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},r=0;r<this.length;r++){var o=this[r][0];null!=o&&(n[o]=!0)}for(var i=0;i<e.length;i++){var a=e[i];null!=a[0]&&n[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="(".concat(a[2],") and (").concat(t,")")),s.push(a))}},s}},function(e,t,n){"use strict";n.r(t);function r(){this.$createElement;return this._self._c,this._m(0)}r._withStripped=!0;var o={};n(1);var i=function(e,t,n,r,o,i,a,s){var c,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),a?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},u._ssrRegister=c):o&&(c=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(u.functional){u._injectStyles=c;var d=u.render;u.render=function(e,t){return c.call(t),d(e,t)}}else{var l=u.beforeCreate;u.beforeCreate=l?[].concat(l,c):[c]}return{exports:e,options:u}}(o,r,[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"bootstrap-breakpoint-indicator"}},[n("span",{staticClass:"d-inline-block d-sm-none"},[e._v("XS")]),e._v(" "),n("span",{staticClass:"d-none d-sm-inline-block d-md-none"},[e._v("SM")]),e._v(" "),n("span",{staticClass:"d-none d-md-inline-block d-lg-none"},[e._v("MD")]),e._v(" "),n("span",{staticClass:"d-none d-lg-inline-block d-xl-none"},[e._v("LG")]),e._v(" "),n("span",{staticClass:"d-none d-xl-inline-block"},[e._v("XL")])])}],!1,null,null,null);i.options.__file="src/BootstrapBreakpointIndicator.vue";t.default=i.exports},function(e,t,n){"use strict";function c(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=i[0],s={id:e+":"+o,css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}n.r(t),n.d(t,"default",function(){return v});var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u={},o=r&&(document.head||document.getElementsByTagName("head")[0]),i=null,a=0,d=!1,s=function(){},l=null,f="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(a,e,t,n){d=t,l=n||{};var s=c(a,e);return h(s),function(e){for(var t=[],n=0;n<s.length;n++){var r=s[n];(o=u[r.id]).refs--,t.push(o)}e?h(s=c(a,e)):s=[];for(n=0;n<t.length;n++){var o;if(0===(o=t[n]).refs){for(var i=0;i<o.parts.length;i++)o.parts[i]();delete u[o.id]}}}}function h(e){for(var t=0;t<e.length;t++){var n=e[t],r=u[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(m(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var i=[];for(o=0;o<n.parts.length;o++)i.push(m(n.parts[o]));u[n.id]={id:n.id,refs:1,parts:i}}}}function b(){var e=document.createElement("style");return e.type="text/css",o.appendChild(e),e}function m(t){var n,r,e=document.querySelector("style["+f+'~="'+t.id+'"]');if(e){if(d)return s;e.parentNode.removeChild(e)}if(p){var o=a++;e=i=i||b(),n=y.bind(null,e,o,!1),r=y.bind(null,e,o,!0)}else e=b(),n=function(e,t){var n=t.css,r=t.media,o=t.sourceMap;r&&e.setAttribute("media",r);l.ssrId&&e.setAttribute(f,t.id);o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,e),r=function(){e.parentNode.removeChild(e)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else r()}}var g,_=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function y(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=_(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}}],o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=4);function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}var n,r});