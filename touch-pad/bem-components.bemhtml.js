!function(e){var t=function(e){function t(e){e=e||this,ct=e.mods,ot=e.elemMods,it=e.elem,at=e.block,nt=e._mode;try{return r(e,ut)}catch(t){throw t.xjstContext=e,t}}function r(e,t){var r=nt;if("content"===r){var n=Q(e,t);if(n!==t)return n}else if("attrs"===r){var n=W(e,t);if(n!==t)return n}else{if("mix"===r){var r=at;if("textarea"===r){if(!it)return{elem:"control"}}else if("button"===r){if(!it)return{elem:"control"}}else if("menu"===r){if(!it)return[{elem:"control"}]}else if("radio-group"===r){if(!it)return[{block:"control-group"}]}else if("modal"===r){if(!it)return{block:"popup",js:{zIndexGroupLevel:e.ctx.zIndexGroupLevel||20},mods:{autoclosable:ct.autoclosable}}}else if("link"===r){if(!it)return[{elem:"control"}]}else if("checkbox-group"===r){if(!it)return[{block:"control-group"}]}else if("page"===r&&!it&&0===(128&e.__$a1)){var n=L(e,t);if(n!==t)return n}return void 0}if("tag"===r){var n=et(e,t);if(n!==t)return n}else{if("js"===r){var a=lt[at];return a&&(a=a(rt(e),t),a!==t)?a:void 0}if("default"===r){var n=tt(e,t);if(n!==t)return n}else{if("bem"===r){var r=at;if("page"===r){var r=it;if("js"===r)return!1;if("link"===r)return!1;if("css"===r)return!1;if("head"===r)return!1;if("favicon"===r)return!1;if("meta"===r)return!1}else if("ua"===r&&!it)return!1;return void 0}if("cls"===r)return void 0;if(""===r){if(e.ctx&&e.ctx._vow&&0===(4096&e.__$a1)){var n=J(e,t);if(n!==t)return n}if(e.isSimple(e.ctx)){var n=U(e,t);if(n!==t)return n}if(!e.ctx){var n=V(e,t);if(n!==t)return n}if(e.isArray(e.ctx)){var n=X(e,t);if(n!==t)return n}var n=Y(e,t);if(n!==t)return n}}}}}function n(e){var t=e.ctx,r=ct;return[{block:"button",mods:{togglable:"radio-check"===r.mode?"check":"radio",checked:r.checked,disabled:r.disabled,theme:r.theme,size:r.size},title:t.title,content:[t.icon,"undefined"!=typeof t.text?{elem:"text",content:t.text}:""]},{block:"radio",elem:"control",checked:r.checked,disabled:r.disabled,name:t.name,val:t.val}]}function a(e){var t=e.ctx;return[{elem:"box",content:{elem:"control",checked:ct.checked,disabled:ct.disabled,name:t.name,val:t.val}},t.text]}function i(e,t){var n=e._checkedOptions.map(function(e){return{elem:"control",val:e.val}});return n.push(function(){var n,a=e.__$a0;return e.__$a0=32|e.__$a0,n=r(e,t),e.__$a0=a,n}()),n}function o(e){var t=e._checkedOptions;return[{elem:"text",content:1===t.length?t[0].text:t.reduce(function(e,t){return e+(e?", ":"")+(t.checkedText||t.text)},"")||e._select.text}]}function c(e){var t=e.ctx,r=[t.icon];return"text"in t&&r.push({elem:"text",content:t.text}),r}function u(e){var t=ct,r=e.ctx,n="undefined"!=typeof r.val;return(r.options||[]).map(function(e,a){return[!!a&&!t.type&&{tag:"br"},{block:"radio",mods:{type:t.type,mode:t.mode,theme:t.theme,size:t.size,checked:n&&r.val===e.val,disabled:e.disabled||t.disabled},name:r.name,val:e.val,text:e.text,title:e.title,icon:e.icon}]})}function l(e){var t=e.ctx.content;if(Array.isArray(t))return t;var r=e.isSimple(t)?{block:"button",text:t}:t;if("button"===r.block){var n=r.mods||(r.mods={}),a=ct;n.size||(n.size=a.size),n.theme||(n.theme=a.theme),n.disabled=a.disabled}return r}function f(e){var t=e.ctx.content;if(Array.isArray(t))return t;var r=e.isSimple(t)?{block:"link",mods:{pseudo:!0},content:t}:t;if("link"===r.block){var n=r.mods||(r.mods={}),a=ct;n.theme||(n.theme=a.theme),n.disabled=a.disabled}return r}function _(e){var t=e.ctx.popup;(e.isSimple(t)||"popup"!==t.block)&&(t={block:"popup",content:t});var r=t.mods||(t.mods={});return r.theme||(r.theme=ct.theme),r.hasOwnProperty("autoclosable")||(r.autoclosable=!0),r.target="anchor",[{elem:"switcher",content:e.ctx.switcher},t]}function s(e){var t=ct,r=e.ctx,n=r.val,a="undefined"!=typeof n;if(a&&!Array.isArray(n))throw Error("checkbox-group: val must be an array");return(r.options||[]).map(function(e,i){return[!!i&&!t.type&&{tag:"br"},{block:"checkbox",mods:{type:t.type,theme:t.theme,size:t.size,checked:a&&n.indexOf(e.val)>-1,disabled:e.disabled||t.disabled},name:r.name,val:e.val,text:e.text,title:e.title,icon:e.icon}]})}function d(e){var t=e.ctx,r=ct;return[{block:"button",mods:{togglable:"check",checked:r.checked,disabled:r.disabled,theme:r.theme,size:r.size},title:t.title,content:[t.icon,"undefined"!=typeof t.text?{elem:"text",content:t.text}:""]},{block:"checkbox",elem:"control",checked:r.checked,disabled:r.disabled,name:t.name,val:t.val}]}function v(e){var t=e.ctx,r=ct;return[{elem:"box",content:{elem:"control",checked:r.checked,disabled:r.disabled,name:t.name,val:t.val}},t.text]}function m(e){var t=e.ctx,r=t.button;e.isSimple(r)&&(r={block:"button",tag:"span",text:r});var n=ct,a=r.mods||(r.mods={});return["size","theme","disabled","focused"].forEach(function(e){a[e]||(a[e]=n[e])}),[r,{elem:"no-file",content:e.ctx.noFileText}]}function p(e){var t=e.ctx,r={id:t.id,name:t.name,tabindex:t.tabIndex,placeholder:t.placeholder};return t.autocomplete===!1&&(r.autocomplete="off"),ct.disabled&&(r.disabled="disabled"),r}function h(e){var t=e.ctx,r={type:"radio",autocomplete:"off",name:t.name,value:t.val};return t.checked&&(r.checked="checked"),t.disabled&&(r.disabled="disabled"),r}function b(e,t){var n=e.ctx,a={};return n.target&&(a.target=n.target),ct.disabled?a["aria-disabled"]=!0:a.href=n.url,e.extend(function(){var n,a=e.__$a0;return e.__$a0=536870912|e.__$a0,n=r(e,t),e.__$a0=a,n}(),a)}function x(e,t){var n=e.ctx,a={type:ct.type||"button",name:n.name,value:n.val};return ct.disabled&&(a.disabled="disabled"),e.extend(function(){var n,a=e.__$a1;return e.__$a1=4|e.__$a1,n=r(e,t),e.__$a1=a,n}(),a)}function $(e){var t=e.ctx,r={role:"button",tabindex:t.tabIndex,id:t.id,title:t.title};return ct.disabled&&!e._isRealButton&&(r["aria-disabled"]=!0),r}function k(){var e={role:"menu"};return ct.disabled||(e.tabindex=0),e}function y(e){var t,r=e.ctx,n={};return ct.disabled||(r.url?(n.href=r.url,t=r.tabIndex):t=r.tabIndex||0),"undefined"==typeof t||(n.tabindex=t),r.title&&(n.title=r.title),r.target&&(n.target=r.target),n}function g(e){var t=e._input,r={id:t.id,name:t.name,value:t.val,maxlength:t.maxLength,tabindex:t.tabIndex,placeholder:t.placeholder};return t.autocomplete===!1&&(r.autocomplete="off"),ct.disabled&&(r.disabled="disabled"),r}function w(e,t){var n=e.ctx;return e.extend(function(){var n,a=e.__$a0;return e.__$a0=33554432|e.__$a0,n=r(e,t),e.__$a0=a,n}(),{src:n.url,width:n.width,height:n.height,alt:n.alt,title:n.title})}function I(e){var t={type:"checkbox",autocomplete:"off"},r=e.ctx;return t.name=r.name,t.value=r.val,r.checked&&(t.checked="checked"),r.disabled&&(t.disabled="disabled"),t}function O(e){var t={type:"file"},r=e._attach;return r&&(t.name=r.name,r.mods&&r.mods.disabled&&(t.disabled="disabled"),r.tabIndex&&(t.tabindex=r.tabIndex)),t}function M(e){var t={"aria-hidden":"true"},r=e.ctx.url;return r&&(t.style="background-image:url("+r+")"),t}function E(e){var t={};return e.ctx.url?t.src=e.ctx.url:e._nonceCsp&&(t.nonce=e._nonceCsp),t}function L(e,t){var n=function(){var n,a=e.__$a1;return e.__$a1=128|e.__$a1,n=r(e,t),e.__$a1=a,n}(),a=[{block:"ua",attrs:{nonce:e._nonceCsp},js:!0}];return n?a.concat(n):a}function z(e,t){var n=e._checkedOptions,a=e._firstOption;a&&!n.length&&(a.checked=!0,n=[a]);var i,o=e._checkedOption;e._checkedOption=n[0];var c,u=e.__$a0;return e.__$a0=4|e.__$a0,c=r(e,t),e.__$a0=u,i=c,e._checkedOption=o,i}function j(e,t){var n,a=ct,i=nt;nt="";var o=e.ctx;e.ctx={block:"button",mix:{block:at,elem:it},mods:{size:a.size,theme:a.theme,view:a.view,focused:a.focused,disabled:a.disabled,checked:"radio"!==a.mode&&!!e._checkedOptions.length},id:e._select.id,tabIndex:e._select.tabIndex,content:[function(){var n,a=nt;return nt="content",n=r(e,t),nt=a,n}(),{block:"icon",mix:{block:"select",elem:"tick"}}]};var c,u=e.__$a0;return e.__$a0=256|e.__$a0,c=r(e,t),e.__$a0=u,n=c,nt=i,e.ctx=o,n}function A(e,t){var n,a=ct,i=function(e){var t={block:"menu-item",mods:{disabled:a.disabled||e.disabled},val:e.val,js:{checkedText:e.checkedText},content:e.text};return e.icon&&(t.js.text=e.text,t.content=[e.icon,t.content]),t},o=nt;nt="";var c=e.ctx;e.ctx={block:"menu",mix:{block:at,elem:it},mods:{size:a.size,theme:a.theme,disabled:a.disabled,mode:a.mode},val:e._select.val,attrs:{tabindex:void 0},content:e._select.options.map(function(e){return e.group?{elem:"group",title:e.title,content:e.group.map(i)}:i(e)})};var u,l=e.__$a0;return e.__$a0=128|e.__$a0,u=r(e,t),e.__$a0=l,n=u,nt=o,e.ctx=c,n}function N(e,t){if(!ct.mode)throw Error("Can't build select without mode modifier");var n,a=e.ctx,i="undefined"!=typeof a.val,o="check"===ct.mode,c=[],u=function(e){return i&&(o?a.val.indexOf(e)>-1:a.val===e)},l=function(e){for(var t,r=0;t=e[r++];)t.group?l(t.group):(n||(n=t),u(t.val)&&(t.checked=!0,c.push(t)))};l(a.options);var f,_=e._select;e._select=e.ctx;var s=e._checkedOptions;e._checkedOptions=c;var d=e._firstOption;e._firstOption=n;var v,m=e.__$a0;return e.__$a0=1024|e.__$a0,v=r(e,t),e.__$a0=m,f=v,e._select=_,e._checkedOptions=s,e._firstOption=d,f}function B(e,t){var n,a=function(){var n,a=nt;return nt="tag",n=r(e,t),nt=a,n}(),i="button"===a&&(!ct.type||"submit"===ct.type),o=e._isRealButton;e._isRealButton=i;var c,u=e.__$a1;return e.__$a1=8|e.__$a1,c=r(e,t),e.__$a1=u,n=c,e._isRealButton=o,n}function C(e,t){(e._firstItem.mods||(e._firstItem.mods={})).checked=!0;var n,a=e.__$a0;return e.__$a0=32768|e.__$a0,n=r(e,t),e.__$a0=a,n}function T(e,t){var n,a=e.ctx,i=ct,o=[];if(a.content){var c="undefined"!=typeof a.val,u=function(e){return c&&("check"===i.mode?a.val.indexOf(e)>-1:a.val===e)},l=function(e){for(var t,r=0;t=e[r++];)"menu-item"===t.block?(n||(n=t),u(t.val)&&((t.mods=t.mods||{}).checked=!0,o.push(t))):t.content&&l(t.content)};if(!e.isArray(a.content))throw Error("menu: content must be an array of the menu items");l(a.content)}var f,_=e._firstItem;e._firstItem=n;var s=e._checkedItems;e._checkedItems=o;var d=e._menuMods;e._menuMods={theme:i.theme,disabled:i.disabled};var v,m=e.__$a0;return e.__$a0=1048576|e.__$a0,v=r(e,t),e.__$a0=m,f=v,e._firstItem=_,e._checkedItems=s,e._menuMods=d,f}function S(e,t){if("button"!==ct.type)throw Error("Modifier mode=radio-check can be only with modifier type=button");var n,a=e.__$a0;return e.__$a0=2048|e.__$a0,n=r(e,t),e.__$a0=a,n}function D(e,t){delete e._menuItemDisabled,ct.disabled=!0;var n,a=e.__$a0;return e.__$a0=8192|e.__$a0,n=r(e,t),e.__$a0=a,n}function R(e,t){var n=e.ctx;"object"==typeof n.url&&(n.url=e.reapply(n.url));var a,i=e.__$a0;return e.__$a0=134217728|e.__$a0,a=r(e,t),e.__$a0=i,a}function P(e,t){var n=ct;n.theme=n.theme||e._menuMods.theme,n.disabled=n.disabled||e._menuMods.disabled;var a,i=e.__$a0;return e.__$a0=524288|e.__$a0,a=r(e,t),e.__$a0=i,a}function G(e,t){var n,a=e.ctx,i=nt;nt="";var o=e.ctx;e.ctx=[a.src16&&{elem:"link",attrs:{rel:"shortcut icon",href:a.src16}},a.src114&&{elem:"link",attrs:{rel:"apple-touch-icon-precomposed",sizes:"114x114",href:a.src114}},a.src72&&{elem:"link",attrs:{rel:"apple-touch-icon-precomposed",sizes:"72x72",href:a.src72}},a.src57&&{elem:"link",attrs:{rel:"apple-touch-icon-precomposed",href:a.src57}}];var c,u=e.__$a1;return e.__$a1=32|e.__$a1,c=r(e,t),e.__$a1=u,n=c,nt=i,e.ctx=o,n}function H(e,t){var n=e.ctx;e._nonceCsp=n.nonce;var a,i=e._pageInit;e._pageInit=!0;var o,c=nt;nt="";var u=e.ctx;e.ctx=[n.doctype||"<!DOCTYPE html>",{tag:"html",cls:"ua_js_no",content:[{elem:"head",content:[{tag:"meta",attrs:{charset:"utf-8"}},n.uaCompatible===!1?"":{tag:"meta",attrs:{"http-equiv":"X-UA-Compatible",content:n.uaCompatible||"IE=edge"}},{tag:"title",content:n.title},{block:"ua",attrs:{nonce:n.nonce}},n.head,n.styles,n.favicon?{elem:"favicon",url:n.favicon}:""]},n]}];var l,f=e.__$a1;return e.__$a1=2048|e.__$a1,l=r(e,t),e.__$a1=f,o=l,nt=c,e.ctx=u,a=o,e._pageInit=i,a}function q(t){if(!t.ctx)return"";var r=t.ctx,n=r.keyset,a=r.key,i=r.params||{};return n||a?(("undefined"==typeof r.content||null!==r.content)&&(i.content=e.apply(r.content)),void t._buf.push(BEM.I18N(n,a,i))):""}function F(e,t){var n,a,i,o,c=e.BEM.INTERNAL,u=e.ctx,l=e._str;e._str="";var f,_=at,s=nt;if(nt="tag",f=r(e,t),nt=s,a=f,"undefined"!=typeof a||(a=u.tag),"undefined"!=typeof a||(a="div"),a){var d,v;if(_&&u.js!==!1){var m,p=nt;nt="js",m=r(e,t),nt=p,v=m,v=v?e.extend(u.js,v===!0?{}:v):u.js===!0?{}:u.js,v&&((d={})[c.buildClass(_,u.elem)]=v)}e._str+="<"+a;var h,b=nt;nt="bem",h=r(e,t),nt=b,n=h,"undefined"!=typeof n||(n="undefined"!=typeof u.bem?u.bem:u.block||u.elem);var x,$=nt;nt="cls",x=r(e,t),nt=$;var k=x;k||(k=u.cls);var y=u.block&&d&&!u.elem;if(n||k){if(e._str+=' class="',n){e._str+=c.buildClasses(_,u.elem,u.elemMods||u.mods);var g,w=nt;nt="mix",g=r(e,t),nt=w;var I=g;if(u.mix&&(I=I?[].concat(I,u.mix):u.mix),I){var O={},M=function(e,t){return(e||"")+"__"+(t||"")};O[M(_,it)]=!0,e.isArray(I)||(I=[I]);for(var E=0;E<I.length;E++){var L=I[E];"string"==typeof L&&(L={block:L});var z=L.block&&(_!==u.block||L.block!==_)||L.elem,j=L.block||L._block||at,A=L.elem||L._elem||it;if(z&&(e._str+=" "),e._str+=c[z?"buildClasses":"buildModsClasses"](j,L.elem||L._elem||(L.block?void 0:it),L.elemMods||L.mods),L.js&&((d||(d={}))[c.buildClass(j,L.elem)]=L.js===!0?{}:L.js,y||(y=j&&!L.elem)),z&&!O[M(j,A)]){O[M(j,A)]=!0;var N,B=nt;nt="mix";var C=at;at=j;var T=it;it=A,N=r(e,t),nt=B,at=C,it=T;var S=N;if(S){Array.isArray(S)||(S=[S]);for(var D=0;D<S.length;D++){var R=S[D];(R.block||R.elem)&&O[M(R.block,R.elem)]||(R._block=j,R._elem=A,I.splice(E+1,0,R))}}}}}}k&&(e._str+=n?" "+k:k),e._str+=y?' i-bem"':'"'}n&&d&&(e._str+=" data-bem='"+e.jsAttrEscape(JSON.stringify(d))+"'");var P,G=nt;nt="attrs",P=r(e,t),nt=G;var H=P;if(H=e.extend(H,u.attrs)){var q,F;for(q in H)F=H[q],"undefined"!=typeof F&&(e._str+=" "+q+'="'+e.attrEscape(e.isSimple(F)?F:e.reapply(F))+'"')}}if(e.isShortTag(a))e._str+="/>";else{a&&(e._str+=">");var J,U=nt;nt="content",J=r(e,t),nt=U;var V=J;if(V||0===V){e._resetApplyNext(rt(e)),n=_||it;var X,Y=nt;nt="";var Z=e._notNewList;e._notNewList=!1;var K=e.position;e.position=n?1:e.position;var Q=e._listLength;e._listLength=n?1:e._listLength;var W=e.ctx;e.ctx=V,X=r(e,t),nt=Y,e._notNewList=Z,e.position=K,e._listLength=Q,e.ctx=W}a&&(e._str+="</"+a+">")}i=e._str,o=void 0,e._str=l,e._buf.push(i)}function J(e,t){var n,a=nt;nt="";var i=e.ctx;e.ctx=e.ctx._value;var o,c=e.__$a1;e.__$a1=4096|e.__$a1,o=r(e,t),e.__$a1=c,n=o,nt=a,e.ctx=i}function U(e){e._listLength--;var t=e.ctx;(t&&t!==!0||0===t)&&(e._str+=t+"")}function V(e){e._listLength--}function X(e,t){var n=e.ctx,a=n.length,i=0,o=e.position,c=e._notNewList;for(c?e._listLength+=a-1:(e.position=0,e._listLength=a),e._notNewList=!0;a>i;)(function(){var a,o=e.ctx;return e.ctx=n[i++],a=r(e,t),e.ctx=o,a})();c||(e.position=o)}function Y(e,t){e.ctx||(e.ctx={});var n,a=e.ctx.block,i=e.ctx.elem,o=e._currBlock||at,c=nt;nt="default";var u=at;at=a||(i?o:void 0);var l=e._currBlock;e._currBlock=a||i?void 0:o;var f=it;it=i;var _=ct;ct=a?e.ctx.mods||(e.ctx.mods={}):ct;var s=ot;ot=e.ctx.elemMods||{},at||it?e.position=(e.position||0)+1:e._listLength--,r(e,t),n=void 0,nt=c,at=u,e._currBlock=l,it=f,ct=_,ot=s}function Z(e){var t=e.ctx;return{name:t.name,optionsMaxHeight:t.optionsMaxHeight}}function K(e){var t=e.ctx;return{mainOffset:t.mainOffset,secondaryOffset:t.secondaryOffset,viewportOffset:t.viewportOffset,directions:t.directions,zIndexGroupLevel:t.zIndexGroupLevel}}function Q(e,t){var p=at;if("progressbar"===p){var p=!it;if(p)return ct&&"simple"===ct.theme&&0===(1&e.__$a0)?[{elem:"box",content:function(){var n,a=e.__$a0;return e.__$a0=1|e.__$a0,n=r(e,t),e.__$a0=a,n}()},{elem:"text",content:e.ctx.val||0}]:"undefined"!=typeof e.ctx.content?e.ctx.content:{elem:"bar",attrs:{style:"width:"+(e.ctx.val||0)+"%"}}}else if("textarea"===p){if(!it)return e.ctx.val}else if("radio"===p){var p=!it;if(p){if(ct&&"button"===ct.type){var h=n(e,t);if(h!==t)return h}var h=a(e,t);if(h!==t)return h}}else if("select"===p){if("button"===it&&ct&&"radio"===ct.mode)return[{elem:"text",content:e._checkedOption.text}];var p=!it;if(p){var p=ct;if(p){var p=ct.mode;if("radio"===p){if(0===(2&e.__$a0))return[{elem:"control",val:e._checkedOption.val},function(){var n,a=e.__$a0;return e.__$a0=2|e.__$a0,n=r(e,t),e.__$a0=a,n}()]}else if("radio-check"===p&&e._checkedOptions[0]&&0===(8&e.__$a0))return[{elem:"control",val:e._checkedOptions[0].val},function(){var n,a=e.__$a0;return e.__$a0=8|e.__$a0,n=r(e,t),e.__$a0=a,n}()]}}if("button"===it&&ct&&"radio-check"===ct.mode)return[{elem:"text",content:(e._checkedOptions[0]||e._select).text}];if(!it&&ct&&"check"===ct.mode&&e._checkedOptions[0]&&0===(32&e.__$a0)){var h=i(e,t);if(h!==t)return h}if("button"===it&&ct&&"check"===ct.mode){var h=o(e,t);if(h!==t)return h}if(!it)return[{elem:"button"},{block:"popup",mods:{target:"anchor",theme:ct.theme,autoclosable:!0},directions:["bottom-left","bottom-right","top-left","top-right"],content:{block:at,mods:ct,elem:"menu"}}]}else if("button"===p){var p=!it;if(p){if(e._attach&&0===(1&e.__$a1))return[{block:"attach",elem:"control"},function(){var n,a=e.__$a1;return e.__$a1=1|e.__$a1,n=r(e,t),e.__$a1=a,n}()];if("undefined"!=typeof e.ctx.content)return e.ctx.content;var h=c(e,t);if(h!==t)return h}}else if("menu"===p){if("group"===it&&"undefined"!=typeof e.ctx.title&&0===(65536&e.__$a0))return[{elem:"group-title",content:e.ctx.title},function(){var n,a=e.__$a0;return e.__$a0=65536|e.__$a0,n=r(e,t),e.__$a0=a,n}()]}else if("radio-group"===p){if(!it){var h=u(e,t);if(h!==t)return h}}else if("modal"===p){if(!it&&0===(4096&e.__$a0))return{elem:"table",content:{elem:"cell",content:{elem:"content",content:function(){var n,a=e.__$a0;return e.__$a0=4096|e.__$a0,n=r(e,t),e.__$a0=a,n}()}}}}else if("input"===p){if("box"===it&&ct&&ct["has-clear"]===!0)return[e.ctx.content,{elem:"clear"}];if(!it)return{elem:"box",content:{elem:"control"}}}else if("dropdown"===p){var p=it;if("switcher"===p){var p=ct;if(p){var p=ct.switcher;if("button"===p){var h=l(e,t);if(h!==t)return h}else if("link"===p){var h=f(e,t);if(h!==t)return h}}}if(!it){var h=_(e,t);if(h!==t)return h}}else if("checkbox-group"===p){if(!it){var h=s(e,t);if(h!==t)return h}}else if("checkbox"===p){var p=!it;if(p){if(ct&&"button"===ct.type){var h=d(e,t);if(h!==t)return h}var h=v(e,t);if(h!==t)return h}}else if("attach"===p){if(!it){var h=m(e,t);if(h!==t)return h}}else if("page"===p){if("head"===it&&0===(256&e.__$a1))return[function(){var n,a=e.__$a1;return e.__$a1=256|e.__$a1,n=r(e,t),e.__$a1=a,n}(),{elem:"meta",attrs:{name:"viewport",content:"width=device-width,"+(e._zoom?"initial-scale=1":"maximum-scale=1,initial-scale=1,user-scalable=0")}},{elem:"meta",attrs:{name:"format-detection",content:"telephone=no"}},{elem:"link",attrs:{name:"apple-mobile-web-app-capable",content:"yes"}}];if(!it&&0===(1024&e.__$a1))return[function(){var n,a=e.__$a1;return e.__$a1=1024|e.__$a1,n=r(e,t),e.__$a1=a,n}(),e.ctx.scripts]}else if("ua"===p){var p=!it;if(p)return 0===(64&e.__$a1)?[function(){var n,a=e.__$a1;return e.__$a1=64|e.__$a1,n=r(e,t),e.__$a1=a,n}(),"(function(d,n){","d.documentElement.className+=",'" ua_svg_"+(d[n]&&d[n]("http://www.w3.org/2000/svg","svg").createSVGRect?"yes":"no");','})(document,"createElementNS");']:["(function(e,c){",'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");','})(document.documentElement,"className");']}return e.ctx.content}function W(e,t){var n=at;if("textarea"===n){if(!it){var a=p(e,t);if(a!==t)return a}}else if("radio"===n){if("control"===it){var a=h(e,t);if(a!==t)return a}}else if("select"===n){if("control"===it)return{type:"hidden",name:e._select.name,value:e.ctx.val,disabled:ct.disabled?"disabled":void 0}}else if("button"===n){var n=!it;if(n){if(ct&&"link"===ct.type&&0===(536870912&e.__$a0)){var a=b(e,t);if(a!==t)return a}if(e._isRealButton&&0===(4&e.__$a1)){var a=x(e,t);if(a!==t)return a}var a=$(e,t);if(a!==t)return a}}else if("menu"===n){var n=it;if("group-title"===n)return{role:"presentation"};if("group"===n){if("undefined"!=typeof e.ctx.title&&0===(131072&e.__$a0)){var a=e.extend(function(){var n,a=e.__$a0;return e.__$a0=131072|e.__$a0,n=r(e,t),e.__$a0=a,n}(),{"aria-label":e.ctx.title});if(a!==t)return a}return{role:"group"}}if(!it){var a=k(e,t);if(a!==t)return a}}else if("link"===n){if(!it){var a=y(e,t);if(a!==t)return a}}else if("menu-item"===n){if(!it)return{role:"menuitem"}}else if("input"===n){var n=it;if("control"===n){var n=ct;if(n){var n=ct.type;if("search"===n){if(0===(2097152&e.__$a0)){var a=e.extend(function(){var n,a=e.__$a0;return e.__$a0=2097152|e.__$a0,n=r(e,t),e.__$a0=a,n}(),{type:"search"});if(a!==t)return a}}else if("password"===n&&0===(4194304&e.__$a0)){var a=e.extend(function(){var n,a=e.__$a0;return e.__$a0=4194304|e.__$a0,n=r(e,t),e.__$a0=a,n}(),{type:"password"});if(a!==t)return a}}if(0===(8388608&e.__$a0)){var a=e.extend({autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:"false"},function(){var n,a=e.__$a0;return e.__$a0=8388608|e.__$a0,n=r(e,t),e.__$a0=a,n}());if(a!==t)return a}var a=g(e,t);if(a!==t)return a}}else if("image"===n){var n=!it;if(n){if("undefined"==typeof e.ctx.content&&0===(33554432&e.__$a0)){var a=w(e,t);if(a!==t)return a}return{role:"img"}}}else if("checkbox"===n){if("control"===it){var a=I(e,t);if(a!==t)return a}}else if("attach"===n){if("control"===it){var a=O(e,t);if(a!==t)return a}}else if("icon"===n){if(!it){var a=M(e,t);if(a!==t)return a}}else if("page"===n){var n=it;if("js"===n){var a=E(e,t);if(a!==t)return a}else if("css"===n){if(e.ctx.url)return{rel:"stylesheet",href:e.ctx.url}}else if("favicon"===n)return{rel:"shortcut icon",href:e.ctx.url}}return void 0}function et(e,t){var r=at;if("textarea"===r){if(!it)return"textarea"}else if("spin"===r){if(!it)return"span"}else if("radio"===r){var r=it;if("control"===r)return"input";if("box"===r)return"span";if(!it)return"label"}else if("select"===r){if("control"===it)return"input"}else if("button"===r){var r=!it;if(r){if(ct&&"link"===ct.type)return"a";if(e._attach)return"span"}if("text"===it)return"span";if(!it)return e.ctx.tag||"button"}else if("radio-group"===r){if(!it)return"span"}else if("link"===r){var r=!it;if(r)return ct&&ct.pseudo===!0&&!e.ctx.url?"span":"a"}else if("input"===r){var r=it;if("control"===r)return"input";if("box"===r)return"span";if("clear"===r)return"i";if(!it)return"span"}else if("image"===r){var r=!it;if(r)return"undefined"==typeof e.ctx.content?"img":"span"}else if("dropdown"===r){if("switcher"===it)return!1}else if("checkbox-group"===r){if(!it)return"span"}else if("checkbox"===r){var r=it;if("control"===r)return"input";if("box"===r)return"span";if(!it)return"label"}else if("attach"===r){var r=it;if("control"===r)return"input";if("clear"===r)return"i";if("text"===r)return"span";if("file"===r)return"span";if("no-file"===r)return"span";if(!it)return"span"}else if("icon"===r){if(!it)return"i"}else if("page"===r){var r=it;if("js"===r)return"script";if("link"===r)return"link";if("css"===r)return e.ctx.url?"link":"style";if("head"===r)return"head";if("favicon"===r)return"link";if("meta"===r)return"meta";if(!it)return"body"}else if("ua"===r&&!it)return"script";return void 0}function tt(e,t){var n=at;if("select"===n){if(!it&&ct&&"radio"===ct.mode&&e._checkedOptions&&0===(4&e.__$a0)){var a=z(e,t);if(a!==t)return a}var n=it;if("button"===n){if(0===(256&e.__$a0)){var a=j(e,t);if(a!==t)return a}}else if("menu"===n&&0===(128&e.__$a0)){var a=A(e,t);if(a!==t)return a}if(!it&&!e._select&&0===(1024&e.__$a0)){var a=N(e,t);if(a!==t)return a}}else if("button"===n){if(!it&&0===(8&e.__$a1)){var a=B(e,t);if(a!==t)return a}}else if("menu"===n){var n=!it;if(n){if(ct&&"radio"===ct.mode&&e._firstItem&&e._checkedItems&&!e._checkedItems.length&&0===(32768&e.__$a0)){var a=C(e,t);if(a!==t)return a}if(0===(1048576&e.__$a0)){var a=T(e,t);if(a!==t)return a}}}else if("radio-group"===n){if(!it&&ct&&"radio-check"===ct.mode&&0===(2048&e.__$a0)){var a=S(e,t);if(a!==t)return a}}else if("link"===n){var n=!it;if(n){if(e._menuItemDisabled&&0===(8192&e.__$a0)){var a=D(e,t);if(a!==t)return a}if(0===(134217728&e.__$a0)){var a=R(e,t);if(a!==t)return a}}}else if("menu-item"===n){var n=!it;if(n){if(ct&&ct&&"link"===ct.type&&ct.disabled===!0&&!e._menuItemDisabled&&0===(16384&e.__$a0)){var i,o=e._menuItemDisabled;e._menuItemDisabled=!0;var c,u=e.__$a0;e.__$a0=16384|e.__$a0,c=r(e,t),e.__$a0=u,i=c,e._menuItemDisabled=o;var a=i;if(a!==t)return a}if(e._menuMods&&0===(524288&e.__$a0)){var a=P(e,t);if(a!==t)return a}}}else if("input"===n){if(!it&&0===(16777216&e.__$a0)){var l,f=e._input;e._input=e.ctx;var _,s=e.__$a0;e.__$a0=16777216|e.__$a0,_=r(e,t),e.__$a0=s,l=_,e._input=f;var a=l;if(a!==t)return a}}else if("attach"===n){if(!it&&0===(16&e.__$a1)){var d,v=e._attach;e._attach=e.ctx;var m,p=e.__$a1;e.__$a1=16|e.__$a1,m=r(e,t),e.__$a1=p,d=m,e._attach=v;var a=d;if(a!==t)return a}}else if("page"===n){if("icon"===it&&0===(32&e.__$a1)){var a=G(e,t);if(a!==t)return a}var n=!it;if(n){if(0===(512&e.__$a1)){var h,b=e._zoom;e._zoom=e.ctx.zoom;var x,$=e.__$a1;e.__$a1=512|e.__$a1,x=r(e,t),e.__$a1=$,h=x,e._zoom=b;var a=h;if(a!==t)return a}if(!e._pageInit&&0===(2048&e.__$a1)){var a=H(e,t);if(a!==t)return a}}}else if("i-bem"===n&&"i18n"===it){var a=q(e,t);if(a!==t)return a}var a=F(e,t);return a!==t?a:t}function rt(e){return e._mode=nt,e.block=at,e.elem=it,e.elemMods=ot,e.mods=ct,e}var nt="",at="",it="",ot=null,ct=null,ut={};e.apply=t,[function(e,t){function r(e,t){this.ctx="undefined"==typeof e?"":e,this.apply=t,this._str="";var r=this;this._buf={push:function(){var e=o.call(arguments).join("");r._str+=e},join:function(){return this._str}},this._=this,this._start=!0,this._mode="",this._listLength=0,this._notNewList=!1,this.position=0,this.block=n,this.elem=n,this.mods=n,this.elemMods=n,this._resetApplyNext=l}var n,a={},i=Object.prototype.toString,o=Array.prototype.slice,c=Array.isArray||function(e){return"[object Array]"===i.call(e)},u={area:1,base:1,br:1,col:1,command:1,embed:1,hr:1,img:1,input:1,keygen:1,link:1,meta:1,param:1,source:1,wbr:1},l=t.resetApplyNext||function(){};!function(e){function t(e,t){var r=i+e;return t!==!0&&(r+=i+t),r}function r(e,r,n){var a=e;return n&&(a+=t(r,n)),a}function a(e,n,a,i){var c=r(e)+o+n;return i&&(c+=t(a,i)),c}var i="_",o="__",c="[a-zA-Z0-9-]+";e.INTERNAL={NAME_PATTERN:c,MOD_DELIM:i,ELEM_DELIM:o,buildModPostfix:t,buildClass:function(e,t,i,o){var c=typeof i;if("string"===c||"boolean"===c){var u=typeof o;"string"!==u&&"boolean"!==u&&(o=i,i=t,t=n)}else"undefined"!==c?i=n:t&&"string"!=typeof t&&(t=n);return t||i?t?a(e,t,i,o):r(e,i,o):e},buildModsClasses:function(e,t,n){var i="";if(n){var o;for(o in n)if(n.hasOwnProperty(o)){var c=n[o];(c||0===c)&&("boolean"!=typeof c&&(c+=""),i+=" "+(t?a(e,t,o,c):r(e,o,c)))}}return i},buildClasses:function(e,t,n){var i="";return i+=t?a(e,t):r(e),i+=this.buildModsClasses(e,t,n)}}}(a),t.BEMContext=r,r.prototype.isArray=c,r.prototype.isSimple=function(e){if(!e||e===!0)return!0;var t=typeof e;return"string"===t||"number"===t},r.prototype.isShortTag=function(e){return u.hasOwnProperty(e)},r.prototype.extend=function(e,t){if(!e||!t)return e||t;var r,n={};for(r in e)e.hasOwnProperty(r)&&(n[r]=e[r]);for(r in t)t.hasOwnProperty(r)&&(n[r]=t[r]);return n};var f=0,_=+new Date,s="__"+_,d=function(){return"uniq"+_+ ++f};r.prototype.identify=function(e,t){return e?t||e[s]?e[s]:e[s]=d():d()},r.prototype.xmlEscape=function(e){return(e+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},r.prototype.attrEscape=function(e){return(e+"").replace(/&/g,"&amp;").replace(/"/g,"&quot;")},r.prototype.jsAttrEscape=function(e){return(e+"").replace(/&/g,"&amp;").replace(/'/g,"&#39;")},r.prototype.BEM=a,r.prototype.isFirst=function(){return 1===this.position},r.prototype.isLast=function(){return this.position===this._listLength},r.prototype.generateId=function(){return this.identify(this.ctx)};var v=e.apply;e.apply=r.apply=function(e){var t=new r(e||this,v);return t.apply(),t._str},r.prototype.reapply=r.apply},function(){!function(e,t){if(!t.I18N){e.BEM=t;var r=e.BEM.I18N=function(e,t){return t};r.keyset=function(){return r},r.key=function(e){return e},r.lang=function(){}}}(this,"undefined"==typeof BEM?{}:BEM)}].forEach(function(t){t(e,this)},{recordExtensions:function(e){e.__$a0=0,e._checkedOption=void 0,e._mode=void 0,e.ctx=void 0,e._select=void 0,e._checkedOptions=void 0,e._firstOption=void 0,e._menuItemDisabled=void 0,e._firstItem=void 0,e._checkedItems=void 0,e._menuMods=void 0,e._input=void 0,e.__$a1=0,e._isRealButton=void 0,e._attach=void 0,e._zoom=void 0,e._pageInit=void 0,e._str=void 0,e.block=void 0,e.elem=void 0,e._notNewList=void 0,e.position=void 0,e._listLength=void 0,e._currBlock=void 0,e.mods=void 0,e.elemMods=void 0},resetApplyNext:function(e){e.__$a0=0,e.__$a1=0}});var lt={progressbar:function(e,t){return it?t:{val:e.ctx.val||0}},textarea:function(e,t){return it?t:!0},radio:function(e,t){return it?t:!0},select:function(e,t){var n=!it;if(n){var n=ct;if(n){var n=ct.mode;if("radio-check"===n){if(0===(16&e.__$a0)){var a=e.extend(function(){var n,a=e.__$a0;return e.__$a0=16|e.__$a0,n=r(e,t),e.__$a0=a,n}(),{text:e.ctx.text});if(a!==t)return a}}else if("check"===n&&0===(64&e.__$a0)){var a=e.extend(function(){var n,a=e.__$a0;return e.__$a0=64|e.__$a0,n=r(e,t),e.__$a0=a,n}(),{text:e.ctx.text});if(a!==t)return a}if(ct.focused===!0&&0===(512&e.__$a0)){var a=e.extend(function(){var n,a=e.__$a0;return e.__$a0=512|e.__$a0,n=r(e,t),e.__$a0=a,n}(),{live:!1});if(a!==t)return a}}var a=Z(e,t);if(a!==t)return a}return t},button:function(e,t){var n=!it;if(n){var n=ct;if(n){if(ct&&"link"===ct.type&&ct.disabled===!0&&0===(268435456&e.__$a0)){var a=e.extend(function(){var n,a=e.__$a0;return e.__$a0=268435456|e.__$a0,n=r(e,t),e.__$a0=a,n}(),{url:e.ctx.url});if(a!==t)return a}if(ct.focused===!0&&0===(2&e.__$a1)){var a=e.extend(function(){var n,a=e.__$a1;return e.__$a1=2|e.__$a1,n=r(e,t),e.__$a1=a,n}(),{live:!1});if(a!==t)return a}}return!0}return t},menu:function(e,t){var n=!it;if(n){if(ct&&ct.focused===!0&&0===(262144&e.__$a0)){var a=e.extend(function(){var n,a=e.__$a0;return e.__$a0=262144|e.__$a0,n=r(e,t),e.__$a0=a,n}(),{live:!1});if(a!==t)return a}return!0}return t},"radio-group":function(e,t){return it?t:!0},modal:function(e,t){return it?t:!0},link:function(e,t){var n=!it;if(n){if(ct&&ct.disabled===!0&&0===(67108864&e.__$a0)){var a=e.extend(function(){var n,a=e.__$a0;return e.__$a0=67108864|e.__$a0,n=r(e,t),e.__$a0=a,n}(),{url:e.ctx.url});if(a!==t)return a}return!0}return t},"menu-item":function(e,t){return it?t:{val:e.ctx.val}},input:function(e,t){return it?t:!0},dropdown:function(e,t){return it?t:!0},popup:function(e,t){if(!it){var r=K(e,t);if(r!==t)return r}return t},"checkbox-group":function(e,t){return it?t:!0},checkbox:function(e,t){return it?t:!0},attach:function(e,t){return it?t:!0},ua:function(e,t){return it?t:!0}};return e},r=!0;"object"==typeof exports&&(exports.BEMHTML=t({}),r=!1),"object"==typeof modules&&(modules.define("BEMHTML",function(e){e(t({}))}),r=!1),r&&(e.BEMHTML=t({}))}(this);