!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define("cookie",[],o):"object"==typeof exports?exports.cookie=o():e.cookie=o()}(self,(function(){return(()=>{"use strict";var e={839:(e,o,t)=>{function n(e){return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[-.+*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null}function r(e,o,t,n,r,c){if(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))return!1;let s="";if(t)switch(t.constructor){case Number:s=t===1/0?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+t;break;case String:s="; expires="+t;break;case Date:s="; expires="+t.toUTCString()}return document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(o)+s+(r?"; domain="+r:"")+(n?"; path="+n:"")+(c?"; secure":""),!0}function c(e,o,t){return!(!e||!s(e)||(document.cookie=encodeURIComponent(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(t?"; domain="+t:"")+(o?"; path="+o:""),0))}function s(e){return new RegExp("(?:^|;\\s*)"+encodeURIComponent(e).replace(/[-.+*]/g,"\\$&")+"\\s*\\=").test(document.cookie)}function i(){const e=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"");if(""===e)return[];{let o=e.split(/\s*(?:\=[^;]*)?;\s*/);for(let e=0;e<o.length;e++)o[e]=decodeURIComponent(o[e]);return o}}function u(){const e=i();for(const o of e)c(o)}t.r(o),t.d(o,{getItem:()=>n,setItem:()=>r,removeItem:()=>c,has:()=>s,keys:()=>i,clear:()=>u,default:()=>p});const p={setItem:r,getItem:n,removeItem:c,has:s,keys:i,clear:u}}},o={};function t(n){if(o[n])return o[n].exports;var r=o[n]={exports:{}};return e[n](r,r.exports,t),r.exports}return t.d=(e,o)=>{for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})},t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t(839)})()}));
//# sourceMappingURL=cookie.js.map