!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequirefc13;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequirefc13=r);var i=r("6JpON"),u=document.querySelector(".form");function f(e,n){return new Promise((function(t,o){var r=Math.random()>.3;setTimeout((function(){r?t("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")):o("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}),n)}))}u.addEventListener("submit",(function(n){n.preventDefault();var t=Number(u.elements.delay.value),o=Number(u.elements.step.value),r=Number(u.elements.amount.value);u.reset();for(var l=1;l<=r;l+=1)f(l,t).then((function(n){e(i).Notify.success(n)})).catch((function(n){e(i).Notify.failure(n)})),t+=o}))}();
//# sourceMappingURL=03-promises.993ac32f.js.map