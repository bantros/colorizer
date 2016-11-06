!function(t){function n(i){if(e[i])return e[i].exports;var o=e[i]={exports:{},id:i,loaded:!1};return t[i].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var e={};return n.m=t,n.c=e,n.p="",n(0)}([function(t,n,e){e(1),e(2),t.exports=e(3)},function(t,n,e){"use strict";var i=e(2),o=e(3);!function(){document.documentElement.className="js",i.Colorizer.init(),o.Reader.init()}();var a=e(4);a.load({custom:{families:["Apercu"]}})},function(t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=n.Colorizer={swatchPanel:document.getElementsByClassName("swatch__panel"),btnAction:document.getElementsByClassName("btn--action"),btnSwatch:document.getElementsByClassName("btn--swatch"),hexMultiply:["15a29c","e6625e","1fde91","00ffcb","f4c7ee","fec8be"],hexLighten:["293571","15a29c","083ea7","864bff","008fd3","20ad65"],init:function(){this.render()},createSwatchList:function(){for(var t=0;t<e.hexMultiply.length;t++)document.getElementById("js-swatch__multiply").insertAdjacentHTML("beforeend",'<div class="swatch__item"><button class="btn  btn--swatch" style="background-color:#'+e.hexMultiply[t]+'" data-blend="multiply" data-color="'+e.hexMultiply[t]+'"></button></div>');for(var n=0;n<e.hexLighten.length;n++)document.getElementById("js-swatch__lighten").insertAdjacentHTML("beforeend",'<div class="swatch__item"><button class="btn  btn--swatch" style="background-color:#'+e.hexLighten[n]+'" data-blend="lighten" data-color="'+e.hexLighten[n]+'"></button></div>')},toggleSwatchOverlay:function(){for(var t=this.dataset.target,n=0;n<e.btnAction.length;n++)e.btnAction[n].classList.remove("is-active");this.classList.add("is-active"),document.getElementById("js-swatch").classList.add("is-active");for(var n=0;n<e.swatchPanel.length;n++)e.swatchPanel[n].style.setProperty("display","none");"multiply"===t?document.getElementById("js-swatch__multiply").style.setProperty("display","flex"):"lighten"===t&&document.getElementById("js-swatch__lighten").style.setProperty("display","flex")},updateBlendMode:function(){var t=this.dataset.blend,n=this.dataset.color;"multiply"===t?document.documentElement.style.setProperty("--blend-multiply","#"+n):"lighten"===t&&document.documentElement.style.setProperty("--blend-lighten","#"+n)},render:function(){e.createSwatchList();for(var t=0;t<e.btnAction.length;t++)e.btnAction[t].addEventListener("click",e.toggleSwatchOverlay,!1);for(var t=0;t<e.btnSwatch.length;t++)e.btnSwatch[t].addEventListener("click",e.updateBlendMode,!1)}}},function(t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=n.Reader={input:document.getElementById("js-input__file"),image:document.getElementById("js-colorizer__image"),init:function(){this.render()},handleFileUpload:function(){var t=void 0,n=void 0;t=new FileReader,n=e.input.files[0],n&&t.readAsDataURL(n),t.addEventListener("load",function(){e.image.src=t.result},!1)},render:function(){e.input.addEventListener("change",e.handleFileUpload,!1)}}},function(t,n,e){var i;!function(){function o(t,n,e){return t.call.apply(t.bind,arguments)}function a(t,n,e){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(e,i),t.apply(n,e)}}return function(){return t.apply(n,arguments)}}function s(t,n,e){return s=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?o:a,s.apply(null,arguments)}function r(t,n){this.a=t,this.m=n||t,this.c=this.m.document}function c(t,n,e,i){if(n=t.c.createElement(n),e)for(var o in e)e.hasOwnProperty(o)&&("style"==o?n.style.cssText=e[o]:n.setAttribute(o,e[o]));return i&&n.appendChild(t.c.createTextNode(i)),n}function l(t,n,e){t=t.c.getElementsByTagName(n)[0],t||(t=document.documentElement),t.insertBefore(e,t.lastChild)}function h(t){t.parentNode&&t.parentNode.removeChild(t)}function f(t,n,e){n=n||[],e=e||[];for(var i=t.className.split(/\s+/),o=0;o<n.length;o+=1){for(var a=!1,s=0;s<i.length;s+=1)if(n[o]===i[s]){a=!0;break}a||i.push(n[o])}for(n=[],o=0;o<i.length;o+=1){for(a=!1,s=0;s<e.length;s+=1)if(i[o]===e[s]){a=!0;break}a||n.push(i[o])}t.className=n.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function u(t,n){for(var e=t.className.split(/\s+/),i=0,o=e.length;i<o;i++)if(e[i]==n)return!0;return!1}function d(t){if("string"==typeof t.f)return t.f;var n=t.m.location.protocol;return"about:"==n&&(n=t.a.location.protocol),"https:"==n?"https:":"http:"}function p(t){return t.m.location.hostname||t.a.location.hostname}function g(t,n,e){function i(){r&&o&&a&&(r(s),r=null)}n=c(t,"link",{rel:"stylesheet",href:n,media:"all"});var o=!1,a=!0,s=null,r=e||null;rt?(n.onload=function(){o=!0,i()},n.onerror=function(){o=!0,s=Error("Stylesheet failed to load"),i()}):setTimeout(function(){o=!0,i()},0),l(t,"head",n)}function m(t,n,e,i){var o=t.c.getElementsByTagName("head")[0];if(o){var a=c(t,"script",{src:n}),s=!1;return a.onload=a.onreadystatechange=function(){s||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(s=!0,e&&e(null),a.onload=a.onreadystatechange=null,"HEAD"==a.parentNode.tagName&&o.removeChild(a))},o.appendChild(a),setTimeout(function(){s||(s=!0,e&&e(Error("Script load timeout")))},i||5e3),a}return null}function v(){this.a=0,this.c=null}function y(t){return t.a++,function(){t.a--,b(t)}}function w(t,n){t.c=n,b(t)}function b(t){0==t.a&&t.c&&(t.c(),t.c=null)}function _(t){this.a=t||"-"}function x(t,n){this.c=t,this.f=4,this.a="n";var e=(n||"n4").match(/^([nio])([1-9])$/i);e&&(this.a=e[1],this.f=parseInt(e[2],10))}function j(t){return S(t)+" "+(t.f+"00")+" 300px "+E(t.c)}function E(t){var n=[];t=t.split(/,\s*/);for(var e=0;e<t.length;e++){var i=t[e].replace(/['"]/g,"");-1!=i.indexOf(" ")||/^\d/.test(i)?n.push("'"+i+"'"):n.push(i)}return n.join(",")}function k(t){return t.a+t.f}function S(t){var n="normal";return"o"===t.a?n="oblique":"i"===t.a&&(n="italic"),n}function T(t){var n=4,e="n",i=null;return t&&((i=t.match(/(normal|oblique|italic)/i))&&i[1]&&(e=i[1].substr(0,1).toLowerCase()),(i=t.match(/([1-9]00|normal|bold)/i))&&i[1]&&(/bold/i.test(i[1])?n=7:/[1-9]00/.test(i[1])&&(n=parseInt(i[1].substr(0,1),10)))),e+n}function A(t,n){this.c=t,this.f=t.m.document.documentElement,this.h=n,this.a=new _("-"),this.j=!1!==n.events,this.g=!1!==n.classes}function L(t){t.g&&f(t.f,[t.a.c("wf","loading")]),C(t,"loading")}function B(t){if(t.g){var n=u(t.f,t.a.c("wf","active")),e=[],i=[t.a.c("wf","loading")];n||e.push(t.a.c("wf","inactive")),f(t.f,e,i)}C(t,"inactive")}function C(t,n,e){t.j&&t.h[n]&&(e?t.h[n](e.c,k(e)):t.h[n]())}function P(){this.c={}}function N(t,n,e){var i,o=[];for(i in n)if(n.hasOwnProperty(i)){var a=t.c[i];a&&o.push(a(n[i],e))}return o}function I(t,n){this.c=t,this.f=n,this.a=c(this.c,"span",{"aria-hidden":"true"},this.f)}function M(t){l(t.c,"body",t.a)}function O(t){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+E(t.c)+";"+("font-style:"+S(t)+";font-weight:"+(t.f+"00")+";")}function F(t,n,e,i,o,a){this.g=t,this.j=n,this.a=i,this.c=e,this.f=o||3e3,this.h=a||void 0}function W(t,n,e,i,o,a,s){this.v=t,this.B=n,this.c=e,this.a=i,this.s=s||"BESbswy",this.f={},this.w=o||3e3,this.u=a||null,this.o=this.j=this.h=this.g=null,this.g=new I(this.c,this.s),this.h=new I(this.c,this.s),this.j=new I(this.c,this.s),this.o=new I(this.c,this.s),t=new x(this.a.c+",serif",k(this.a)),t=O(t),this.g.a.style.cssText=t,t=new x(this.a.c+",sans-serif",k(this.a)),t=O(t),this.h.a.style.cssText=t,t=new x("serif",k(this.a)),t=O(t),this.j.a.style.cssText=t,t=new x("sans-serif",k(this.a)),t=O(t),this.o.a.style.cssText=t,M(this.g),M(this.h),M(this.j),M(this.o)}function D(){if(null===lt){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);lt=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))}return lt}function R(t,n,e){for(var i in ct)if(ct.hasOwnProperty(i)&&n===t.f[ct[i]]&&e===t.f[ct[i]])return!0;return!1}function z(t){var n,e=t.g.a.offsetWidth,i=t.h.a.offsetWidth;(n=e===t.f.serif&&i===t.f["sans-serif"])||(n=D()&&R(t,e,i)),n?st()-t.A>=t.w?D()&&R(t,e,i)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?U(t,t.v):U(t,t.B):H(t):U(t,t.v)}function H(t){setTimeout(s(function(){z(this)},t),50)}function U(t,n){setTimeout(s(function(){h(this.g.a),h(this.h.a),h(this.j.a),h(this.o.a),n(this.a)},t),0)}function $(t,n,e){this.c=t,this.a=n,this.f=0,this.o=this.j=!1,this.s=e}function q(t){0==--t.f&&t.j&&(t.o?(t=t.a,t.g&&f(t.f,[t.a.c("wf","active")],[t.a.c("wf","loading"),t.a.c("wf","inactive")]),C(t,"active")):B(t.a))}function G(t){this.j=t,this.a=new P,this.h=0,this.f=this.g=!0}function K(t,n,e,i,o){var a=0==--t.h;(t.f||t.g)&&setTimeout(function(){var t=o||null,r=i||null||{};if(0===e.length&&a)B(n.a);else{n.f+=e.length,a&&(n.j=a);var c,l=[];for(c=0;c<e.length;c++){var h=e[c],u=r[h.c],d=n.a,p=h;d.g&&f(d.f,[d.a.c("wf",p.c,k(p).toString(),"loading")]),C(d,"fontloading",p),d=null,null===ht&&(ht=!!window.FontFace&&(!(p=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent))||42<parseInt(p[1],10))),d=ht?new F(s(n.g,n),s(n.h,n),n.c,h,n.s,u):new W(s(n.g,n),s(n.h,n),n.c,h,n.s,t,u),l.push(d)}for(c=0;c<l.length;c++)l[c].start()}},0)}function J(t,n,e){var i=[],o=e.timeout;L(n);var i=N(t.a,e,t.c),a=new $(t.c,n,o);for(t.h=i.length,n=0,e=i.length;n<e;n++)i[n].load(function(n,e,i){K(t,a,n,e,i)})}function Q(t,n){this.c=t,this.a=n}function V(t,n,e){var i=d(t.c);return t=(t.a.api||"fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/,""),i+"//"+t+"/"+n+".js"+(e?"?v="+e:"")}function X(t,n){this.c=t,this.a=n}function Y(t,n,e){t?this.c=t:this.c=n+ft,this.a=[],this.f=[],this.g=e||""}function Z(t,n){for(var e=n.length,i=0;i<e;i++){var o=n[i].split(":");3==o.length&&t.f.push(o.pop());var a="";2==o.length&&""!=o[1]&&(a=":"),t.a.push(o.join(a))}}function tt(t){if(0==t.a.length)throw Error("No fonts to load!");if(-1!=t.c.indexOf("kit="))return t.c;for(var n=t.a.length,e=[],i=0;i<n;i++)e.push(t.a[i].replace(/ /g,"+"));return n=t.c+"?family="+e.join("%7C"),0<t.f.length&&(n+="&subset="+t.f.join(",")),0<t.g.length&&(n+="&text="+encodeURIComponent(t.g)),n}function nt(t){this.f=t,this.a=[],this.c={}}function et(t){for(var n=t.f.length,e=0;e<n;e++){var i=t.f[e].split(":"),o=i[0].replace(/\+/g," "),a=["n4"];if(2<=i.length){var s,r=i[1];if(s=[],r)for(var r=r.split(","),c=r.length,l=0;l<c;l++){var h;if(h=r[l],h.match(/^[\w-]+$/)){var f=gt.exec(h.toLowerCase());if(null==f)h="";else{if(h=f[2],h=null==h||""==h?"n":pt[h],f=f[1],null==f||""==f)f="4";else var u=dt[f],f=u?u:isNaN(f)?"4":f.substr(0,1);h=[h,f].join("")}}else h="";h&&s.push(h)}0<s.length&&(a=s),3==i.length&&(i=i[2],s=[],i=i?i.split(","):s,0<i.length&&(i=ut[i[0]])&&(t.c[o]=i))}for(t.c[o]||(i=ut[o])&&(t.c[o]=i),i=0;i<a.length;i+=1)t.a.push(new x(o,a[i]))}}function it(t,n){this.c=t,this.a=n}function ot(t,n){this.c=t,this.a=n}function at(t,n){this.c=t,this.f=n,this.a=[]}var st=Date.now||function(){return+new Date},rt=!!window.FontFace;_.prototype.c=function(t){for(var n=[],e=0;e<arguments.length;e++)n.push(arguments[e].replace(/[\W_]+/g,"").toLowerCase());return n.join(this.a)},F.prototype.start=function(){var t=this.c.m.document,n=this,e=st(),i=new Promise(function(i,o){function a(){st()-e>=n.f?o():t.fonts.load(j(n.a),n.h).then(function(t){1<=t.length?i():setTimeout(a,25)},function(){o()})}a()}),o=new Promise(function(t,e){setTimeout(e,n.f)});Promise.race([o,i]).then(function(){n.g(n.a)},function(){n.j(n.a)})};var ct={D:"serif",C:"sans-serif"},lt=null;W.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.o.a.offsetWidth,this.A=st(),z(this)};var ht=null;$.prototype.g=function(t){var n=this.a;n.g&&f(n.f,[n.a.c("wf",t.c,k(t).toString(),"active")],[n.a.c("wf",t.c,k(t).toString(),"loading"),n.a.c("wf",t.c,k(t).toString(),"inactive")]),C(n,"fontactive",t),this.o=!0,q(this)},$.prototype.h=function(t){var n=this.a;if(n.g){var e=u(n.f,n.a.c("wf",t.c,k(t).toString(),"active")),i=[],o=[n.a.c("wf",t.c,k(t).toString(),"loading")];e||i.push(n.a.c("wf",t.c,k(t).toString(),"inactive")),f(n.f,i,o)}C(n,"fontinactive",t),q(this)},G.prototype.load=function(t){this.c=new r(this.j,t.context||this.j),this.g=!1!==t.events,this.f=!1!==t.classes,J(this,new A(this.c,t),t)},Q.prototype.load=function(t){function n(){if(a["__mti_fntLst"+i]){var e,o=a["__mti_fntLst"+i](),s=[];if(o)for(var r=0;r<o.length;r++){var c=o[r].fontfamily;void 0!=o[r].fontStyle&&void 0!=o[r].fontWeight?(e=o[r].fontStyle+o[r].fontWeight,s.push(new x(c,e))):s.push(new x(c))}t(s)}else setTimeout(function(){n()},50)}var e=this,i=e.a.projectId,o=e.a.version;if(i){var a=e.c.m;m(this.c,V(e,i,o),function(o){o?t([]):(a["__MonotypeConfiguration__"+i]=function(){return e.a},n())}).id="__MonotypeAPIScript__"+i}else t([])},X.prototype.load=function(t){var n,e,i=this.a.urls||[],o=this.a.families||[],a=this.a.testStrings||{},s=new v;for(n=0,e=i.length;n<e;n++)g(this.c,i[n],y(s));var r=[];for(n=0,e=o.length;n<e;n++)if(i=o[n].split(":"),i[1])for(var c=i[1].split(","),l=0;l<c.length;l+=1)r.push(new x(i[0],c[l]));else r.push(new x(i[0]));w(s,function(){t(r,a)})};var ft="//fonts.googleapis.com/css",ut={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},dt={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},pt={i:"i",italic:"i",n:"n",normal:"n"},gt=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/,mt={Arimo:!0,Cousine:!0,Tinos:!0};it.prototype.load=function(t){var n=new v,e=this.c,i=new Y(this.a.api,d(e),this.a.text),o=this.a.families;Z(i,o);var a=new nt(o);et(a),g(e,tt(i),y(n)),w(n,function(){t(a.a,a.c,mt)})},ot.prototype.load=function(t){var n=this.a.id,e=this.c.m;n?m(this.c,(this.a.api||"https://use.typekit.net")+"/"+n+".js",function(n){if(n)t([]);else if(e.Typekit&&e.Typekit.config&&e.Typekit.config.fn){n=e.Typekit.config.fn;for(var i=[],o=0;o<n.length;o+=2)for(var a=n[o],s=n[o+1],r=0;r<s.length;r++)i.push(new x(a,s[r]));try{e.Typekit.load({events:!1,classes:!1,async:!0})}catch(t){}t(i)}},2e3):t([])},at.prototype.load=function(t){var n=this.f.id,e=this.c.m,i=this;n?(e.__webfontfontdeckmodule__||(e.__webfontfontdeckmodule__={}),e.__webfontfontdeckmodule__[n]=function(n,e){for(var o=0,a=e.fonts.length;o<a;++o){var s=e.fonts[o];i.a.push(new x(s.name,T("font-weight:"+s.weight+";font-style:"+s.style)))}t(i.a)},m(this.c,d(this.c)+(this.f.api||"//f.fontdeck.com/s/css/js/")+p(this.c)+"/"+n+".js",function(n){n&&t([])})):t([])};var vt=new G(window);vt.a.c.custom=function(t,n){return new X(n,t)},vt.a.c.fontdeck=function(t,n){return new at(n,t)},vt.a.c.monotype=function(t,n){return new Q(n,t)},vt.a.c.typekit=function(t,n){return new ot(n,t)},vt.a.c.google=function(t,n){return new it(n,t)};var yt={load:s(vt.load,vt)};i=function(){return yt}.call(n,e,n,t),!(void 0!==i&&(t.exports=i))}()}]);