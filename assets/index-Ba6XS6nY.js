function Zp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function Nc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var em={exports:{}},$s={},tm={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $a=Symbol.for("react.element"),E0=Symbol.for("react.portal"),S0=Symbol.for("react.fragment"),k0=Symbol.for("react.strict_mode"),b0=Symbol.for("react.profiler"),x0=Symbol.for("react.provider"),I0=Symbol.for("react.context"),C0=Symbol.for("react.forward_ref"),T0=Symbol.for("react.suspense"),P0=Symbol.for("react.memo"),R0=Symbol.for("react.lazy"),yd=Symbol.iterator;function O0(e){return e===null||typeof e!="object"?null:(e=yd&&e[yd]||e["@@iterator"],typeof e=="function"?e:null)}var nm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},rm=Object.assign,im={};function ki(e,t,n){this.props=e,this.context=t,this.refs=im,this.updater=n||nm}ki.prototype.isReactComponent={};ki.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ki.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function am(){}am.prototype=ki.prototype;function Ac(e,t,n){this.props=e,this.context=t,this.refs=im,this.updater=n||nm}var Lc=Ac.prototype=new am;Lc.constructor=Ac;rm(Lc,ki.prototype);Lc.isPureReactComponent=!0;var wd=Array.isArray,om=Object.prototype.hasOwnProperty,Dc={current:null},sm={key:!0,ref:!0,__self:!0,__source:!0};function lm(e,t,n){var r,i={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)om.call(t,r)&&!sm.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:$a,type:e,key:a,ref:o,props:i,_owner:Dc.current}}function N0(e,t){return{$$typeof:$a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Mc(e){return typeof e=="object"&&e!==null&&e.$$typeof===$a}function A0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var _d=/\/+/g;function _l(e,t){return typeof e=="object"&&e!==null&&e.key!=null?A0(""+e.key):t.toString(36)}function Uo(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case $a:case E0:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+_l(o,0):r,wd(i)?(n="",e!=null&&(n=e.replace(_d,"$&/")+"/"),Uo(i,t,n,"",function(u){return u})):i!=null&&(Mc(i)&&(i=N0(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(_d,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",wd(e))for(var s=0;s<e.length;s++){a=e[s];var l=r+_l(a,s);o+=Uo(a,t,n,l,i)}else if(l=O0(e),typeof l=="function")for(e=l.call(e),s=0;!(a=e.next()).done;)a=a.value,l=r+_l(a,s++),o+=Uo(a,t,n,l,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function uo(e,t,n){if(e==null)return e;var r=[],i=0;return Uo(e,r,"","",function(a){return t.call(n,a,i++)}),r}function L0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var We={current:null},Fo={transition:null},D0={ReactCurrentDispatcher:We,ReactCurrentBatchConfig:Fo,ReactCurrentOwner:Dc};q.Children={map:uo,forEach:function(e,t,n){uo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return uo(e,function(){t++}),t},toArray:function(e){return uo(e,function(t){return t})||[]},only:function(e){if(!Mc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};q.Component=ki;q.Fragment=S0;q.Profiler=b0;q.PureComponent=Ac;q.StrictMode=k0;q.Suspense=T0;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D0;q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=rm({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=Dc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)om.call(t,l)&&!sm.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:$a,type:e.type,key:i,ref:a,props:r,_owner:o}};q.createContext=function(e){return e={$$typeof:I0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:x0,_context:e},e.Consumer=e};q.createElement=lm;q.createFactory=function(e){var t=lm.bind(null,e);return t.type=e,t};q.createRef=function(){return{current:null}};q.forwardRef=function(e){return{$$typeof:C0,render:e}};q.isValidElement=Mc;q.lazy=function(e){return{$$typeof:R0,_payload:{_status:-1,_result:e},_init:L0}};q.memo=function(e,t){return{$$typeof:P0,type:e,compare:t===void 0?null:t}};q.startTransition=function(e){var t=Fo.transition;Fo.transition={};try{e()}finally{Fo.transition=t}};q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};q.useCallback=function(e,t){return We.current.useCallback(e,t)};q.useContext=function(e){return We.current.useContext(e)};q.useDebugValue=function(){};q.useDeferredValue=function(e){return We.current.useDeferredValue(e)};q.useEffect=function(e,t){return We.current.useEffect(e,t)};q.useId=function(){return We.current.useId()};q.useImperativeHandle=function(e,t,n){return We.current.useImperativeHandle(e,t,n)};q.useInsertionEffect=function(e,t){return We.current.useInsertionEffect(e,t)};q.useLayoutEffect=function(e,t){return We.current.useLayoutEffect(e,t)};q.useMemo=function(e,t){return We.current.useMemo(e,t)};q.useReducer=function(e,t,n){return We.current.useReducer(e,t,n)};q.useRef=function(e){return We.current.useRef(e)};q.useState=function(e){return We.current.useState(e)};q.useSyncExternalStore=function(e,t,n){return We.current.useSyncExternalStore(e,t,n)};q.useTransition=function(){return We.current.useTransition()};q.version="18.2.0";tm.exports=q;var b=tm.exports;const Bs=Nc(b),M0=Zp({__proto__:null,default:Bs},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j0=b,U0=Symbol.for("react.element"),F0=Symbol.for("react.fragment"),z0=Object.prototype.hasOwnProperty,$0=j0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,B0={key:!0,ref:!0,__self:!0,__source:!0};function um(e,t,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)z0.call(t,r)&&!B0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:U0,type:e,key:a,ref:o,props:i,_owner:$0.current}}$s.Fragment=F0;$s.jsx=um;$s.jsxs=um;em.exports=$s;var S=em.exports,su={},cm={exports:{}},ot={},fm={exports:{}},dm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,B){var V=R.length;R.push(B);e:for(;0<V;){var te=V-1>>>1,ne=R[te];if(0<i(ne,B))R[te]=B,R[V]=ne,V=te;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var B=R[0],V=R.pop();if(V!==B){R[0]=V;e:for(var te=0,ne=R.length,_t=ne>>>1;te<_t;){var Je=2*(te+1)-1,Ze=R[Je],$e=Je+1,ut=R[$e];if(0>i(Ze,V))$e<ne&&0>i(ut,Ze)?(R[te]=ut,R[$e]=V,te=$e):(R[te]=Ze,R[Je]=V,te=Je);else if($e<ne&&0>i(ut,V))R[te]=ut,R[$e]=V,te=$e;else break e}}return B}function i(R,B){var V=R.sortIndex-B.sortIndex;return V!==0?V:R.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var l=[],u=[],c=1,f=null,d=3,g=!1,w=!1,_=!1,I=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(R){for(var B=n(u);B!==null;){if(B.callback===null)r(u);else if(B.startTime<=R)r(u),B.sortIndex=B.expirationTime,t(l,B);else break;B=n(u)}}function k(R){if(_=!1,m(R),!w)if(n(l)!==null)w=!0,mn(C);else{var B=n(u);B!==null&&vn(k,B.startTime-R)}}function C(R,B){w=!1,_&&(_=!1,p(O),O=-1),g=!0;var V=d;try{for(m(B),f=n(l);f!==null&&(!(f.expirationTime>B)||R&&!X());){var te=f.callback;if(typeof te=="function"){f.callback=null,d=f.priorityLevel;var ne=te(f.expirationTime<=B);B=e.unstable_now(),typeof ne=="function"?f.callback=ne:f===n(l)&&r(l),m(B)}else r(l);f=n(l)}if(f!==null)var _t=!0;else{var Je=n(u);Je!==null&&vn(k,Je.startTime-B),_t=!1}return _t}finally{f=null,d=V,g=!1}}var N=!1,v=null,O=-1,D=5,A=-1;function X(){return!(e.unstable_now()-A<D)}function we(){if(v!==null){var R=e.unstable_now();A=R;var B=!0;try{B=v(!0,R)}finally{B?de():(N=!1,v=null)}}else N=!1}var de;if(typeof h=="function")de=function(){h(we)};else if(typeof MessageChannel<"u"){var Pe=new MessageChannel,wt=Pe.port2;Pe.port1.onmessage=we,de=function(){wt.postMessage(null)}}else de=function(){I(we,0)};function mn(R){v=R,N||(N=!0,de())}function vn(R,B){O=I(function(){R(e.unstable_now())},B)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){w||g||(w=!0,mn(C))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(R){switch(d){case 1:case 2:case 3:var B=3;break;default:B=d}var V=d;d=B;try{return R()}finally{d=V}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,B){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var V=d;d=R;try{return B()}finally{d=V}},e.unstable_scheduleCallback=function(R,B,V){var te=e.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?te+V:te):V=te,R){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=V+ne,R={id:c++,callback:B,priorityLevel:R,startTime:V,expirationTime:ne,sortIndex:-1},V>te?(R.sortIndex=V,t(u,R),n(l)===null&&R===n(u)&&(_?(p(O),O=-1):_=!0,vn(k,V-te))):(R.sortIndex=ne,t(l,R),w||g||(w=!0,mn(C))),R},e.unstable_shouldYield=X,e.unstable_wrapCallback=function(R){var B=d;return function(){var V=d;d=B;try{return R.apply(this,arguments)}finally{d=V}}}})(dm);fm.exports=dm;var H0=fm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hm=b,at=H0;function T(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pm=new Set,da={};function Tr(e,t){di(e,t),di(e+"Capture",t)}function di(e,t){for(da[e]=t,e=0;e<t.length;e++)pm.add(t[e])}var tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lu=Object.prototype.hasOwnProperty,V0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ed={},Sd={};function W0(e){return lu.call(Sd,e)?!0:lu.call(Ed,e)?!1:V0.test(e)?Sd[e]=!0:(Ed[e]=!0,!1)}function K0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Y0(e,t,n,r){if(t===null||typeof t>"u"||K0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ke(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var De={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){De[e]=new Ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];De[t]=new Ke(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){De[e]=new Ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){De[e]=new Ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){De[e]=new Ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){De[e]=new Ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){De[e]=new Ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){De[e]=new Ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){De[e]=new Ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var jc=/[\-:]([a-z])/g;function Uc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(jc,Uc);De[t]=new Ke(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(jc,Uc);De[t]=new Ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(jc,Uc);De[t]=new Ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){De[e]=new Ke(e,1,!1,e.toLowerCase(),null,!1,!1)});De.xlinkHref=new Ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){De[e]=new Ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function Fc(e,t,n,r){var i=De.hasOwnProperty(t)?De[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Y0(t,n,i,r)&&(n=null),r||i===null?W0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var fn=hm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,co=Symbol.for("react.element"),Ur=Symbol.for("react.portal"),Fr=Symbol.for("react.fragment"),zc=Symbol.for("react.strict_mode"),uu=Symbol.for("react.profiler"),mm=Symbol.for("react.provider"),vm=Symbol.for("react.context"),$c=Symbol.for("react.forward_ref"),cu=Symbol.for("react.suspense"),fu=Symbol.for("react.suspense_list"),Bc=Symbol.for("react.memo"),bn=Symbol.for("react.lazy"),gm=Symbol.for("react.offscreen"),kd=Symbol.iterator;function Di(e){return e===null||typeof e!="object"?null:(e=kd&&e[kd]||e["@@iterator"],typeof e=="function"?e:null)}var ve=Object.assign,El;function Ki(e){if(El===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);El=t&&t[1]||""}return`
`+El+e}var Sl=!1;function kl(e,t){if(!e||Sl)return"";Sl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=s);break}}}finally{Sl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ki(e):""}function G0(e){switch(e.tag){case 5:return Ki(e.type);case 16:return Ki("Lazy");case 13:return Ki("Suspense");case 19:return Ki("SuspenseList");case 0:case 2:case 15:return e=kl(e.type,!1),e;case 11:return e=kl(e.type.render,!1),e;case 1:return e=kl(e.type,!0),e;default:return""}}function du(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Fr:return"Fragment";case Ur:return"Portal";case uu:return"Profiler";case zc:return"StrictMode";case cu:return"Suspense";case fu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case vm:return(e.displayName||"Context")+".Consumer";case mm:return(e._context.displayName||"Context")+".Provider";case $c:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Bc:return t=e.displayName||null,t!==null?t:du(e.type)||"Memo";case bn:t=e._payload,e=e._init;try{return du(e(t))}catch{}}return null}function Q0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return du(t);case 8:return t===zc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Wn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ym(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function q0(e){var t=ym(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function fo(e){e._valueTracker||(e._valueTracker=q0(e))}function wm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ym(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function as(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function hu(e,t){var n=t.checked;return ve({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function bd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Wn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function _m(e,t){t=t.checked,t!=null&&Fc(e,"checked",t,!1)}function pu(e,t){_m(e,t);var n=Wn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?mu(e,t.type,n):t.hasOwnProperty("defaultValue")&&mu(e,t.type,Wn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function xd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function mu(e,t,n){(t!=="number"||as(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Yi=Array.isArray;function ti(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Wn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function vu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(T(91));return ve({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Id(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(T(92));if(Yi(n)){if(1<n.length)throw Error(T(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Wn(n)}}function Em(e,t){var n=Wn(t.value),r=Wn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Cd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Sm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Sm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ho,km=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ho=ho||document.createElement("div"),ho.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ho.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ha(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Zi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},X0=["Webkit","ms","Moz","O"];Object.keys(Zi).forEach(function(e){X0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Zi[t]=Zi[e]})});function bm(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Zi.hasOwnProperty(e)&&Zi[e]?(""+t).trim():t+"px"}function xm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=bm(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var J0=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yu(e,t){if(t){if(J0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(T(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(T(61))}if(t.style!=null&&typeof t.style!="object")throw Error(T(62))}}function wu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _u=null;function Hc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Eu=null,ni=null,ri=null;function Td(e){if(e=Va(e)){if(typeof Eu!="function")throw Error(T(280));var t=e.stateNode;t&&(t=Ys(t),Eu(e.stateNode,e.type,t))}}function Im(e){ni?ri?ri.push(e):ri=[e]:ni=e}function Cm(){if(ni){var e=ni,t=ri;if(ri=ni=null,Td(e),t)for(e=0;e<t.length;e++)Td(t[e])}}function Tm(e,t){return e(t)}function Pm(){}var bl=!1;function Rm(e,t,n){if(bl)return e(t,n);bl=!0;try{return Tm(e,t,n)}finally{bl=!1,(ni!==null||ri!==null)&&(Pm(),Cm())}}function pa(e,t){var n=e.stateNode;if(n===null)return null;var r=Ys(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(T(231,t,typeof n));return n}var Su=!1;if(tn)try{var Mi={};Object.defineProperty(Mi,"passive",{get:function(){Su=!0}}),window.addEventListener("test",Mi,Mi),window.removeEventListener("test",Mi,Mi)}catch{Su=!1}function Z0(e,t,n,r,i,a,o,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var ea=!1,os=null,ss=!1,ku=null,e1={onError:function(e){ea=!0,os=e}};function t1(e,t,n,r,i,a,o,s,l){ea=!1,os=null,Z0.apply(e1,arguments)}function n1(e,t,n,r,i,a,o,s,l){if(t1.apply(this,arguments),ea){if(ea){var u=os;ea=!1,os=null}else throw Error(T(198));ss||(ss=!0,ku=u)}}function Pr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Om(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Pd(e){if(Pr(e)!==e)throw Error(T(188))}function r1(e){var t=e.alternate;if(!t){if(t=Pr(e),t===null)throw Error(T(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return Pd(i),e;if(a===r)return Pd(i),t;a=a.sibling}throw Error(T(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=a;break}if(s===r){o=!0,r=i,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,r=i;break}if(s===r){o=!0,r=a,n=i;break}s=s.sibling}if(!o)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?e:t}function Nm(e){return e=r1(e),e!==null?Am(e):null}function Am(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Am(e);if(t!==null)return t;e=e.sibling}return null}var Lm=at.unstable_scheduleCallback,Rd=at.unstable_cancelCallback,i1=at.unstable_shouldYield,a1=at.unstable_requestPaint,Ee=at.unstable_now,o1=at.unstable_getCurrentPriorityLevel,Vc=at.unstable_ImmediatePriority,Dm=at.unstable_UserBlockingPriority,ls=at.unstable_NormalPriority,s1=at.unstable_LowPriority,Mm=at.unstable_IdlePriority,Hs=null,Ft=null;function l1(e){if(Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(Hs,e,void 0,(e.current.flags&128)===128)}catch{}}var Tt=Math.clz32?Math.clz32:f1,u1=Math.log,c1=Math.LN2;function f1(e){return e>>>=0,e===0?32:31-(u1(e)/c1|0)|0}var po=64,mo=4194304;function Gi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function us(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=Gi(s):(a&=o,a!==0&&(r=Gi(a)))}else o=n&~i,o!==0?r=Gi(o):a!==0&&(r=Gi(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Tt(t),i=1<<n,r|=e[n],t&=~i;return r}function d1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function h1(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Tt(a),s=1<<o,l=i[o];l===-1?(!(s&n)||s&r)&&(i[o]=d1(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}function bu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function jm(){var e=po;return po<<=1,!(po&4194240)&&(po=64),e}function xl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ba(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Tt(t),e[t]=n}function p1(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Tt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Wc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Tt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ee=0;function Um(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Fm,Kc,zm,$m,Bm,xu=!1,vo=[],Dn=null,Mn=null,jn=null,ma=new Map,va=new Map,In=[],m1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Od(e,t){switch(e){case"focusin":case"focusout":Dn=null;break;case"dragenter":case"dragleave":Mn=null;break;case"mouseover":case"mouseout":jn=null;break;case"pointerover":case"pointerout":ma.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":va.delete(t.pointerId)}}function ji(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Va(t),t!==null&&Kc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function v1(e,t,n,r,i){switch(t){case"focusin":return Dn=ji(Dn,e,t,n,r,i),!0;case"dragenter":return Mn=ji(Mn,e,t,n,r,i),!0;case"mouseover":return jn=ji(jn,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return ma.set(a,ji(ma.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,va.set(a,ji(va.get(a)||null,e,t,n,r,i)),!0}return!1}function Hm(e){var t=lr(e.target);if(t!==null){var n=Pr(t);if(n!==null){if(t=n.tag,t===13){if(t=Om(n),t!==null){e.blockedOn=t,Bm(e.priority,function(){zm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Iu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);_u=r,n.target.dispatchEvent(r),_u=null}else return t=Va(n),t!==null&&Kc(t),e.blockedOn=n,!1;t.shift()}return!0}function Nd(e,t,n){zo(e)&&n.delete(t)}function g1(){xu=!1,Dn!==null&&zo(Dn)&&(Dn=null),Mn!==null&&zo(Mn)&&(Mn=null),jn!==null&&zo(jn)&&(jn=null),ma.forEach(Nd),va.forEach(Nd)}function Ui(e,t){e.blockedOn===t&&(e.blockedOn=null,xu||(xu=!0,at.unstable_scheduleCallback(at.unstable_NormalPriority,g1)))}function ga(e){function t(i){return Ui(i,e)}if(0<vo.length){Ui(vo[0],e);for(var n=1;n<vo.length;n++){var r=vo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Dn!==null&&Ui(Dn,e),Mn!==null&&Ui(Mn,e),jn!==null&&Ui(jn,e),ma.forEach(t),va.forEach(t),n=0;n<In.length;n++)r=In[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<In.length&&(n=In[0],n.blockedOn===null);)Hm(n),n.blockedOn===null&&In.shift()}var ii=fn.ReactCurrentBatchConfig,cs=!0;function y1(e,t,n,r){var i=ee,a=ii.transition;ii.transition=null;try{ee=1,Yc(e,t,n,r)}finally{ee=i,ii.transition=a}}function w1(e,t,n,r){var i=ee,a=ii.transition;ii.transition=null;try{ee=4,Yc(e,t,n,r)}finally{ee=i,ii.transition=a}}function Yc(e,t,n,r){if(cs){var i=Iu(e,t,n,r);if(i===null)Dl(e,t,r,fs,n),Od(e,r);else if(v1(i,e,t,n,r))r.stopPropagation();else if(Od(e,r),t&4&&-1<m1.indexOf(e)){for(;i!==null;){var a=Va(i);if(a!==null&&Fm(a),a=Iu(e,t,n,r),a===null&&Dl(e,t,r,fs,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Dl(e,t,r,null,n)}}var fs=null;function Iu(e,t,n,r){if(fs=null,e=Hc(r),e=lr(e),e!==null)if(t=Pr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Om(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return fs=e,null}function Vm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(o1()){case Vc:return 1;case Dm:return 4;case ls:case s1:return 16;case Mm:return 536870912;default:return 16}default:return 16}}var An=null,Gc=null,$o=null;function Wm(){if($o)return $o;var e,t=Gc,n=t.length,r,i="value"in An?An.value:An.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return $o=i.slice(e,1<r?1-r:void 0)}function Bo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function go(){return!0}function Ad(){return!1}function st(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?go:Ad,this.isPropagationStopped=Ad,this}return ve(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=go)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=go)},persist:function(){},isPersistent:go}),t}var bi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qc=st(bi),Ha=ve({},bi,{view:0,detail:0}),_1=st(Ha),Il,Cl,Fi,Vs=ve({},Ha,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fi&&(Fi&&e.type==="mousemove"?(Il=e.screenX-Fi.screenX,Cl=e.screenY-Fi.screenY):Cl=Il=0,Fi=e),Il)},movementY:function(e){return"movementY"in e?e.movementY:Cl}}),Ld=st(Vs),E1=ve({},Vs,{dataTransfer:0}),S1=st(E1),k1=ve({},Ha,{relatedTarget:0}),Tl=st(k1),b1=ve({},bi,{animationName:0,elapsedTime:0,pseudoElement:0}),x1=st(b1),I1=ve({},bi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),C1=st(I1),T1=ve({},bi,{data:0}),Dd=st(T1),P1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},R1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},O1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function N1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=O1[e])?!!t[e]:!1}function qc(){return N1}var A1=ve({},Ha,{key:function(e){if(e.key){var t=P1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Bo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?R1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qc,charCode:function(e){return e.type==="keypress"?Bo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Bo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),L1=st(A1),D1=ve({},Vs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Md=st(D1),M1=ve({},Ha,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qc}),j1=st(M1),U1=ve({},bi,{propertyName:0,elapsedTime:0,pseudoElement:0}),F1=st(U1),z1=ve({},Vs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$1=st(z1),B1=[9,13,27,32],Xc=tn&&"CompositionEvent"in window,ta=null;tn&&"documentMode"in document&&(ta=document.documentMode);var H1=tn&&"TextEvent"in window&&!ta,Km=tn&&(!Xc||ta&&8<ta&&11>=ta),jd=" ",Ud=!1;function Ym(e,t){switch(e){case"keyup":return B1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var zr=!1;function V1(e,t){switch(e){case"compositionend":return Gm(t);case"keypress":return t.which!==32?null:(Ud=!0,jd);case"textInput":return e=t.data,e===jd&&Ud?null:e;default:return null}}function W1(e,t){if(zr)return e==="compositionend"||!Xc&&Ym(e,t)?(e=Wm(),$o=Gc=An=null,zr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Km&&t.locale!=="ko"?null:t.data;default:return null}}var K1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!K1[e.type]:t==="textarea"}function Qm(e,t,n,r){Im(r),t=ds(t,"onChange"),0<t.length&&(n=new Qc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var na=null,ya=null;function Y1(e){ov(e,0)}function Ws(e){var t=Hr(e);if(wm(t))return e}function G1(e,t){if(e==="change")return t}var qm=!1;if(tn){var Pl;if(tn){var Rl="oninput"in document;if(!Rl){var zd=document.createElement("div");zd.setAttribute("oninput","return;"),Rl=typeof zd.oninput=="function"}Pl=Rl}else Pl=!1;qm=Pl&&(!document.documentMode||9<document.documentMode)}function $d(){na&&(na.detachEvent("onpropertychange",Xm),ya=na=null)}function Xm(e){if(e.propertyName==="value"&&Ws(ya)){var t=[];Qm(t,ya,e,Hc(e)),Rm(Y1,t)}}function Q1(e,t,n){e==="focusin"?($d(),na=t,ya=n,na.attachEvent("onpropertychange",Xm)):e==="focusout"&&$d()}function q1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ws(ya)}function X1(e,t){if(e==="click")return Ws(t)}function J1(e,t){if(e==="input"||e==="change")return Ws(t)}function Z1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Rt=typeof Object.is=="function"?Object.is:Z1;function wa(e,t){if(Rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!lu.call(t,i)||!Rt(e[i],t[i]))return!1}return!0}function Bd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hd(e,t){var n=Bd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bd(n)}}function Jm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Jm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Zm(){for(var e=window,t=as();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=as(e.document)}return t}function Jc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ew(e){var t=Zm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Jm(n.ownerDocument.documentElement,n)){if(r!==null&&Jc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Hd(n,a);var o=Hd(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var tw=tn&&"documentMode"in document&&11>=document.documentMode,$r=null,Cu=null,ra=null,Tu=!1;function Vd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Tu||$r==null||$r!==as(r)||(r=$r,"selectionStart"in r&&Jc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ra&&wa(ra,r)||(ra=r,r=ds(Cu,"onSelect"),0<r.length&&(t=new Qc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=$r)))}function yo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Br={animationend:yo("Animation","AnimationEnd"),animationiteration:yo("Animation","AnimationIteration"),animationstart:yo("Animation","AnimationStart"),transitionend:yo("Transition","TransitionEnd")},Ol={},ev={};tn&&(ev=document.createElement("div").style,"AnimationEvent"in window||(delete Br.animationend.animation,delete Br.animationiteration.animation,delete Br.animationstart.animation),"TransitionEvent"in window||delete Br.transitionend.transition);function Ks(e){if(Ol[e])return Ol[e];if(!Br[e])return e;var t=Br[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ev)return Ol[e]=t[n];return e}var tv=Ks("animationend"),nv=Ks("animationiteration"),rv=Ks("animationstart"),iv=Ks("transitionend"),av=new Map,Wd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qn(e,t){av.set(e,t),Tr(t,[e])}for(var Nl=0;Nl<Wd.length;Nl++){var Al=Wd[Nl],nw=Al.toLowerCase(),rw=Al[0].toUpperCase()+Al.slice(1);qn(nw,"on"+rw)}qn(tv,"onAnimationEnd");qn(nv,"onAnimationIteration");qn(rv,"onAnimationStart");qn("dblclick","onDoubleClick");qn("focusin","onFocus");qn("focusout","onBlur");qn(iv,"onTransitionEnd");di("onMouseEnter",["mouseout","mouseover"]);di("onMouseLeave",["mouseout","mouseover"]);di("onPointerEnter",["pointerout","pointerover"]);di("onPointerLeave",["pointerout","pointerover"]);Tr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qi));function Kd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,n1(r,t,void 0,e),e.currentTarget=null}function ov(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;Kd(i,s,u),a=l}else for(o=0;o<r.length;o++){if(s=r[o],l=s.instance,u=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;Kd(i,s,u),a=l}}}if(ss)throw e=ku,ss=!1,ku=null,e}function ae(e,t){var n=t[Au];n===void 0&&(n=t[Au]=new Set);var r=e+"__bubble";n.has(r)||(sv(t,e,2,!1),n.add(r))}function Ll(e,t,n){var r=0;t&&(r|=4),sv(n,e,r,t)}var wo="_reactListening"+Math.random().toString(36).slice(2);function _a(e){if(!e[wo]){e[wo]=!0,pm.forEach(function(n){n!=="selectionchange"&&(iw.has(n)||Ll(n,!1,e),Ll(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[wo]||(t[wo]=!0,Ll("selectionchange",!1,t))}}function sv(e,t,n,r){switch(Vm(t)){case 1:var i=y1;break;case 4:i=w1;break;default:i=Yc}n=i.bind(null,t,n,e),i=void 0,!Su||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Dl(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;s!==null;){if(o=lr(s),o===null)return;if(l=o.tag,l===5||l===6){r=a=o;continue e}s=s.parentNode}}r=r.return}Rm(function(){var u=a,c=Hc(n),f=[];e:{var d=av.get(e);if(d!==void 0){var g=Qc,w=e;switch(e){case"keypress":if(Bo(n)===0)break e;case"keydown":case"keyup":g=L1;break;case"focusin":w="focus",g=Tl;break;case"focusout":w="blur",g=Tl;break;case"beforeblur":case"afterblur":g=Tl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Ld;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=S1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=j1;break;case tv:case nv:case rv:g=x1;break;case iv:g=F1;break;case"scroll":g=_1;break;case"wheel":g=$1;break;case"copy":case"cut":case"paste":g=C1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Md}var _=(t&4)!==0,I=!_&&e==="scroll",p=_?d!==null?d+"Capture":null:d;_=[];for(var h=u,m;h!==null;){m=h;var k=m.stateNode;if(m.tag===5&&k!==null&&(m=k,p!==null&&(k=pa(h,p),k!=null&&_.push(Ea(h,k,m)))),I)break;h=h.return}0<_.length&&(d=new g(d,w,null,n,c),f.push({event:d,listeners:_}))}}if(!(t&7)){e:{if(d=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",d&&n!==_u&&(w=n.relatedTarget||n.fromElement)&&(lr(w)||w[nn]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(w=n.relatedTarget||n.toElement,g=u,w=w?lr(w):null,w!==null&&(I=Pr(w),w!==I||w.tag!==5&&w.tag!==6)&&(w=null)):(g=null,w=u),g!==w)){if(_=Ld,k="onMouseLeave",p="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(_=Md,k="onPointerLeave",p="onPointerEnter",h="pointer"),I=g==null?d:Hr(g),m=w==null?d:Hr(w),d=new _(k,h+"leave",g,n,c),d.target=I,d.relatedTarget=m,k=null,lr(c)===u&&(_=new _(p,h+"enter",w,n,c),_.target=m,_.relatedTarget=I,k=_),I=k,g&&w)t:{for(_=g,p=w,h=0,m=_;m;m=Mr(m))h++;for(m=0,k=p;k;k=Mr(k))m++;for(;0<h-m;)_=Mr(_),h--;for(;0<m-h;)p=Mr(p),m--;for(;h--;){if(_===p||p!==null&&_===p.alternate)break t;_=Mr(_),p=Mr(p)}_=null}else _=null;g!==null&&Yd(f,d,g,_,!1),w!==null&&I!==null&&Yd(f,I,w,_,!0)}}e:{if(d=u?Hr(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var C=G1;else if(Fd(d))if(qm)C=J1;else{C=q1;var N=Q1}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=X1);if(C&&(C=C(e,u))){Qm(f,C,n,c);break e}N&&N(e,d,u),e==="focusout"&&(N=d._wrapperState)&&N.controlled&&d.type==="number"&&mu(d,"number",d.value)}switch(N=u?Hr(u):window,e){case"focusin":(Fd(N)||N.contentEditable==="true")&&($r=N,Cu=u,ra=null);break;case"focusout":ra=Cu=$r=null;break;case"mousedown":Tu=!0;break;case"contextmenu":case"mouseup":case"dragend":Tu=!1,Vd(f,n,c);break;case"selectionchange":if(tw)break;case"keydown":case"keyup":Vd(f,n,c)}var v;if(Xc)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else zr?Ym(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Km&&n.locale!=="ko"&&(zr||O!=="onCompositionStart"?O==="onCompositionEnd"&&zr&&(v=Wm()):(An=c,Gc="value"in An?An.value:An.textContent,zr=!0)),N=ds(u,O),0<N.length&&(O=new Dd(O,e,null,n,c),f.push({event:O,listeners:N}),v?O.data=v:(v=Gm(n),v!==null&&(O.data=v)))),(v=H1?V1(e,n):W1(e,n))&&(u=ds(u,"onBeforeInput"),0<u.length&&(c=new Dd("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=v))}ov(f,t)})}function Ea(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ds(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=pa(e,n),a!=null&&r.unshift(Ea(e,a,i)),a=pa(e,t),a!=null&&r.push(Ea(e,a,i))),e=e.return}return r}function Mr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Yd(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=pa(n,a),l!=null&&o.unshift(Ea(n,l,s))):i||(l=pa(n,a),l!=null&&o.push(Ea(n,l,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var aw=/\r\n?/g,ow=/\u0000|\uFFFD/g;function Gd(e){return(typeof e=="string"?e:""+e).replace(aw,`
`).replace(ow,"")}function _o(e,t,n){if(t=Gd(t),Gd(e)!==t&&n)throw Error(T(425))}function hs(){}var Pu=null,Ru=null;function Ou(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Nu=typeof setTimeout=="function"?setTimeout:void 0,sw=typeof clearTimeout=="function"?clearTimeout:void 0,Qd=typeof Promise=="function"?Promise:void 0,lw=typeof queueMicrotask=="function"?queueMicrotask:typeof Qd<"u"?function(e){return Qd.resolve(null).then(e).catch(uw)}:Nu;function uw(e){setTimeout(function(){throw e})}function Ml(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ga(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ga(t)}function Un(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function qd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var xi=Math.random().toString(36).slice(2),Mt="__reactFiber$"+xi,Sa="__reactProps$"+xi,nn="__reactContainer$"+xi,Au="__reactEvents$"+xi,cw="__reactListeners$"+xi,fw="__reactHandles$"+xi;function lr(e){var t=e[Mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[nn]||n[Mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=qd(e);e!==null;){if(n=e[Mt])return n;e=qd(e)}return t}e=n,n=e.parentNode}return null}function Va(e){return e=e[Mt]||e[nn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Hr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function Ys(e){return e[Sa]||null}var Lu=[],Vr=-1;function Xn(e){return{current:e}}function se(e){0>Vr||(e.current=Lu[Vr],Lu[Vr]=null,Vr--)}function ie(e,t){Vr++,Lu[Vr]=e.current,e.current=t}var Kn={},Fe=Xn(Kn),Qe=Xn(!1),gr=Kn;function hi(e,t){var n=e.type.contextTypes;if(!n)return Kn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function qe(e){return e=e.childContextTypes,e!=null}function ps(){se(Qe),se(Fe)}function Xd(e,t,n){if(Fe.current!==Kn)throw Error(T(168));ie(Fe,t),ie(Qe,n)}function lv(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(T(108,Q0(e)||"Unknown",i));return ve({},n,r)}function ms(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Kn,gr=Fe.current,ie(Fe,e),ie(Qe,Qe.current),!0}function Jd(e,t,n){var r=e.stateNode;if(!r)throw Error(T(169));n?(e=lv(e,t,gr),r.__reactInternalMemoizedMergedChildContext=e,se(Qe),se(Fe),ie(Fe,e)):se(Qe),ie(Qe,n)}var Kt=null,Gs=!1,jl=!1;function uv(e){Kt===null?Kt=[e]:Kt.push(e)}function dw(e){Gs=!0,uv(e)}function Jn(){if(!jl&&Kt!==null){jl=!0;var e=0,t=ee;try{var n=Kt;for(ee=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Kt=null,Gs=!1}catch(i){throw Kt!==null&&(Kt=Kt.slice(e+1)),Lm(Vc,Jn),i}finally{ee=t,jl=!1}}return null}var Wr=[],Kr=0,vs=null,gs=0,dt=[],ht=0,yr=null,Yt=1,Gt="";function ar(e,t){Wr[Kr++]=gs,Wr[Kr++]=vs,vs=e,gs=t}function cv(e,t,n){dt[ht++]=Yt,dt[ht++]=Gt,dt[ht++]=yr,yr=e;var r=Yt;e=Gt;var i=32-Tt(r)-1;r&=~(1<<i),n+=1;var a=32-Tt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Yt=1<<32-Tt(t)+i|n<<i|r,Gt=a+e}else Yt=1<<a|n<<i|r,Gt=e}function Zc(e){e.return!==null&&(ar(e,1),cv(e,1,0))}function ef(e){for(;e===vs;)vs=Wr[--Kr],Wr[Kr]=null,gs=Wr[--Kr],Wr[Kr]=null;for(;e===yr;)yr=dt[--ht],dt[ht]=null,Gt=dt[--ht],dt[ht]=null,Yt=dt[--ht],dt[ht]=null}var it=null,nt=null,fe=!1,xt=null;function fv(e,t){var n=mt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Zd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,it=e,nt=Un(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,it=e,nt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=yr!==null?{id:Yt,overflow:Gt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=mt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,it=e,nt=null,!0):!1;default:return!1}}function Du(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Mu(e){if(fe){var t=nt;if(t){var n=t;if(!Zd(e,t)){if(Du(e))throw Error(T(418));t=Un(n.nextSibling);var r=it;t&&Zd(e,t)?fv(r,n):(e.flags=e.flags&-4097|2,fe=!1,it=e)}}else{if(Du(e))throw Error(T(418));e.flags=e.flags&-4097|2,fe=!1,it=e}}}function eh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;it=e}function Eo(e){if(e!==it)return!1;if(!fe)return eh(e),fe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ou(e.type,e.memoizedProps)),t&&(t=nt)){if(Du(e))throw dv(),Error(T(418));for(;t;)fv(e,t),t=Un(t.nextSibling)}if(eh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){nt=Un(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}nt=null}}else nt=it?Un(e.stateNode.nextSibling):null;return!0}function dv(){for(var e=nt;e;)e=Un(e.nextSibling)}function pi(){nt=it=null,fe=!1}function tf(e){xt===null?xt=[e]:xt.push(e)}var hw=fn.ReactCurrentBatchConfig;function St(e,t){if(e&&e.defaultProps){t=ve({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ys=Xn(null),ws=null,Yr=null,nf=null;function rf(){nf=Yr=ws=null}function af(e){var t=ys.current;se(ys),e._currentValue=t}function ju(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ai(e,t){ws=e,nf=Yr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ge=!0),e.firstContext=null)}function gt(e){var t=e._currentValue;if(nf!==e)if(e={context:e,memoizedValue:t,next:null},Yr===null){if(ws===null)throw Error(T(308));Yr=e,ws.dependencies={lanes:0,firstContext:e}}else Yr=Yr.next=e;return t}var ur=null;function of(e){ur===null?ur=[e]:ur.push(e)}function hv(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,of(t)):(n.next=i.next,i.next=n),t.interleaved=n,rn(e,r)}function rn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var xn=!1;function sf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pv(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Jt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Fn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Z&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,rn(e,n)}return i=r.interleaved,i===null?(t.next=t,of(r)):(t.next=i.next,i.next=t),r.interleaved=t,rn(e,n)}function Ho(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Wc(e,n)}}function th(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function _s(e,t,n,r){var i=e.updateQueue;xn=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,o===null?a=u:o.next=u,o=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==o&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(a!==null){var f=i.baseState;o=0,c=u=l=null,s=a;do{var d=s.lane,g=s.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:g,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,_=s;switch(d=t,g=n,_.tag){case 1:if(w=_.payload,typeof w=="function"){f=w.call(g,f,d);break e}f=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=_.payload,d=typeof w=="function"?w.call(g,f,d):w,d==null)break e;f=ve({},f,d);break e;case 2:xn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[s]:d.push(s))}else g={eventTime:g,lane:d,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=g,l=f):c=c.next=g,o|=d;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;d=s,s=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);_r|=o,e.lanes=o,e.memoizedState=f}}function nh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(T(191,i));i.call(r)}}}var mv=new hm.Component().refs;function Uu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ve({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Qs={isMounted:function(e){return(e=e._reactInternals)?Pr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ve(),i=$n(e),a=Jt(r,i);a.payload=t,n!=null&&(a.callback=n),t=Fn(e,a,i),t!==null&&(Pt(t,e,i,r),Ho(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ve(),i=$n(e),a=Jt(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Fn(e,a,i),t!==null&&(Pt(t,e,i,r),Ho(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ve(),r=$n(e),i=Jt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Fn(e,i,r),t!==null&&(Pt(t,e,r,n),Ho(t,e,r))}};function rh(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!wa(n,r)||!wa(i,a):!0}function vv(e,t,n){var r=!1,i=Kn,a=t.contextType;return typeof a=="object"&&a!==null?a=gt(a):(i=qe(t)?gr:Fe.current,r=t.contextTypes,a=(r=r!=null)?hi(e,i):Kn),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Qs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function ih(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Qs.enqueueReplaceState(t,t.state,null)}function Fu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=mv,sf(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=gt(a):(a=qe(t)?gr:Fe.current,i.context=hi(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Uu(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Qs.enqueueReplaceState(i,i.state,null),_s(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function zi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var s=i.refs;s===mv&&(s=i.refs={}),o===null?delete s[a]:s[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,e))}return e}function So(e,t){throw e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ah(e){var t=e._init;return t(e._payload)}function gv(e){function t(p,h){if(e){var m=p.deletions;m===null?(p.deletions=[h],p.flags|=16):m.push(h)}}function n(p,h){if(!e)return null;for(;h!==null;)t(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=Bn(p,h),p.index=0,p.sibling=null,p}function a(p,h,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<h?(p.flags|=2,h):m):(p.flags|=2,h)):(p.flags|=1048576,h)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,h,m,k){return h===null||h.tag!==6?(h=Vl(m,p.mode,k),h.return=p,h):(h=i(h,m),h.return=p,h)}function l(p,h,m,k){var C=m.type;return C===Fr?c(p,h,m.props.children,k,m.key):h!==null&&(h.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===bn&&ah(C)===h.type)?(k=i(h,m.props),k.ref=zi(p,h,m),k.return=p,k):(k=Qo(m.type,m.key,m.props,null,p.mode,k),k.ref=zi(p,h,m),k.return=p,k)}function u(p,h,m,k){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=Wl(m,p.mode,k),h.return=p,h):(h=i(h,m.children||[]),h.return=p,h)}function c(p,h,m,k,C){return h===null||h.tag!==7?(h=vr(m,p.mode,k,C),h.return=p,h):(h=i(h,m),h.return=p,h)}function f(p,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Vl(""+h,p.mode,m),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case co:return m=Qo(h.type,h.key,h.props,null,p.mode,m),m.ref=zi(p,null,h),m.return=p,m;case Ur:return h=Wl(h,p.mode,m),h.return=p,h;case bn:var k=h._init;return f(p,k(h._payload),m)}if(Yi(h)||Di(h))return h=vr(h,p.mode,m,null),h.return=p,h;So(p,h)}return null}function d(p,h,m,k){var C=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return C!==null?null:s(p,h,""+m,k);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case co:return m.key===C?l(p,h,m,k):null;case Ur:return m.key===C?u(p,h,m,k):null;case bn:return C=m._init,d(p,h,C(m._payload),k)}if(Yi(m)||Di(m))return C!==null?null:c(p,h,m,k,null);So(p,m)}return null}function g(p,h,m,k,C){if(typeof k=="string"&&k!==""||typeof k=="number")return p=p.get(m)||null,s(h,p,""+k,C);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case co:return p=p.get(k.key===null?m:k.key)||null,l(h,p,k,C);case Ur:return p=p.get(k.key===null?m:k.key)||null,u(h,p,k,C);case bn:var N=k._init;return g(p,h,m,N(k._payload),C)}if(Yi(k)||Di(k))return p=p.get(m)||null,c(h,p,k,C,null);So(h,k)}return null}function w(p,h,m,k){for(var C=null,N=null,v=h,O=h=0,D=null;v!==null&&O<m.length;O++){v.index>O?(D=v,v=null):D=v.sibling;var A=d(p,v,m[O],k);if(A===null){v===null&&(v=D);break}e&&v&&A.alternate===null&&t(p,v),h=a(A,h,O),N===null?C=A:N.sibling=A,N=A,v=D}if(O===m.length)return n(p,v),fe&&ar(p,O),C;if(v===null){for(;O<m.length;O++)v=f(p,m[O],k),v!==null&&(h=a(v,h,O),N===null?C=v:N.sibling=v,N=v);return fe&&ar(p,O),C}for(v=r(p,v);O<m.length;O++)D=g(v,p,O,m[O],k),D!==null&&(e&&D.alternate!==null&&v.delete(D.key===null?O:D.key),h=a(D,h,O),N===null?C=D:N.sibling=D,N=D);return e&&v.forEach(function(X){return t(p,X)}),fe&&ar(p,O),C}function _(p,h,m,k){var C=Di(m);if(typeof C!="function")throw Error(T(150));if(m=C.call(m),m==null)throw Error(T(151));for(var N=C=null,v=h,O=h=0,D=null,A=m.next();v!==null&&!A.done;O++,A=m.next()){v.index>O?(D=v,v=null):D=v.sibling;var X=d(p,v,A.value,k);if(X===null){v===null&&(v=D);break}e&&v&&X.alternate===null&&t(p,v),h=a(X,h,O),N===null?C=X:N.sibling=X,N=X,v=D}if(A.done)return n(p,v),fe&&ar(p,O),C;if(v===null){for(;!A.done;O++,A=m.next())A=f(p,A.value,k),A!==null&&(h=a(A,h,O),N===null?C=A:N.sibling=A,N=A);return fe&&ar(p,O),C}for(v=r(p,v);!A.done;O++,A=m.next())A=g(v,p,O,A.value,k),A!==null&&(e&&A.alternate!==null&&v.delete(A.key===null?O:A.key),h=a(A,h,O),N===null?C=A:N.sibling=A,N=A);return e&&v.forEach(function(we){return t(p,we)}),fe&&ar(p,O),C}function I(p,h,m,k){if(typeof m=="object"&&m!==null&&m.type===Fr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case co:e:{for(var C=m.key,N=h;N!==null;){if(N.key===C){if(C=m.type,C===Fr){if(N.tag===7){n(p,N.sibling),h=i(N,m.props.children),h.return=p,p=h;break e}}else if(N.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===bn&&ah(C)===N.type){n(p,N.sibling),h=i(N,m.props),h.ref=zi(p,N,m),h.return=p,p=h;break e}n(p,N);break}else t(p,N);N=N.sibling}m.type===Fr?(h=vr(m.props.children,p.mode,k,m.key),h.return=p,p=h):(k=Qo(m.type,m.key,m.props,null,p.mode,k),k.ref=zi(p,h,m),k.return=p,p=k)}return o(p);case Ur:e:{for(N=m.key;h!==null;){if(h.key===N)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(p,h.sibling),h=i(h,m.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else t(p,h);h=h.sibling}h=Wl(m,p.mode,k),h.return=p,p=h}return o(p);case bn:return N=m._init,I(p,h,N(m._payload),k)}if(Yi(m))return w(p,h,m,k);if(Di(m))return _(p,h,m,k);So(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,m),h.return=p,p=h):(n(p,h),h=Vl(m,p.mode,k),h.return=p,p=h),o(p)):n(p,h)}return I}var mi=gv(!0),yv=gv(!1),Wa={},zt=Xn(Wa),ka=Xn(Wa),ba=Xn(Wa);function cr(e){if(e===Wa)throw Error(T(174));return e}function lf(e,t){switch(ie(ba,t),ie(ka,e),ie(zt,Wa),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:gu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=gu(t,e)}se(zt),ie(zt,t)}function vi(){se(zt),se(ka),se(ba)}function wv(e){cr(ba.current);var t=cr(zt.current),n=gu(t,e.type);t!==n&&(ie(ka,e),ie(zt,n))}function uf(e){ka.current===e&&(se(zt),se(ka))}var pe=Xn(0);function Es(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ul=[];function cf(){for(var e=0;e<Ul.length;e++)Ul[e]._workInProgressVersionPrimary=null;Ul.length=0}var Vo=fn.ReactCurrentDispatcher,Fl=fn.ReactCurrentBatchConfig,wr=0,me=null,ke=null,Ce=null,Ss=!1,ia=!1,xa=0,pw=0;function Me(){throw Error(T(321))}function ff(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Rt(e[n],t[n]))return!1;return!0}function df(e,t,n,r,i,a){if(wr=a,me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Vo.current=e===null||e.memoizedState===null?yw:ww,e=n(r,i),ia){a=0;do{if(ia=!1,xa=0,25<=a)throw Error(T(301));a+=1,Ce=ke=null,t.updateQueue=null,Vo.current=_w,e=n(r,i)}while(ia)}if(Vo.current=ks,t=ke!==null&&ke.next!==null,wr=0,Ce=ke=me=null,Ss=!1,t)throw Error(T(300));return e}function hf(){var e=xa!==0;return xa=0,e}function Lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?me.memoizedState=Ce=e:Ce=Ce.next=e,Ce}function yt(){if(ke===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var t=Ce===null?me.memoizedState:Ce.next;if(t!==null)Ce=t,ke=e;else{if(e===null)throw Error(T(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},Ce===null?me.memoizedState=Ce=e:Ce=Ce.next=e}return Ce}function Ia(e,t){return typeof t=="function"?t(e):t}function zl(e){var t=yt(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=ke,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var s=o=null,l=null,u=a;do{var c=u.lane;if((wr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=f,o=r):l=l.next=f,me.lanes|=c,_r|=c}u=u.next}while(u!==null&&u!==a);l===null?o=r:l.next=s,Rt(r,t.memoizedState)||(Ge=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,me.lanes|=a,_r|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function $l(e){var t=yt(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);Rt(a,t.memoizedState)||(Ge=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function _v(){}function Ev(e,t){var n=me,r=yt(),i=t(),a=!Rt(r.memoizedState,i);if(a&&(r.memoizedState=i,Ge=!0),r=r.queue,pf(bv.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Ce!==null&&Ce.memoizedState.tag&1){if(n.flags|=2048,Ca(9,kv.bind(null,n,r,i,t),void 0,null),Te===null)throw Error(T(349));wr&30||Sv(n,t,i)}return i}function Sv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function kv(e,t,n,r){t.value=n,t.getSnapshot=r,xv(t)&&Iv(e)}function bv(e,t,n){return n(function(){xv(t)&&Iv(e)})}function xv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Rt(e,n)}catch{return!0}}function Iv(e){var t=rn(e,1);t!==null&&Pt(t,e,1,-1)}function oh(e){var t=Lt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ia,lastRenderedState:e},t.queue=e,e=e.dispatch=gw.bind(null,me,e),[t.memoizedState,e]}function Ca(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Cv(){return yt().memoizedState}function Wo(e,t,n,r){var i=Lt();me.flags|=e,i.memoizedState=Ca(1|t,n,void 0,r===void 0?null:r)}function qs(e,t,n,r){var i=yt();r=r===void 0?null:r;var a=void 0;if(ke!==null){var o=ke.memoizedState;if(a=o.destroy,r!==null&&ff(r,o.deps)){i.memoizedState=Ca(t,n,a,r);return}}me.flags|=e,i.memoizedState=Ca(1|t,n,a,r)}function sh(e,t){return Wo(8390656,8,e,t)}function pf(e,t){return qs(2048,8,e,t)}function Tv(e,t){return qs(4,2,e,t)}function Pv(e,t){return qs(4,4,e,t)}function Rv(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ov(e,t,n){return n=n!=null?n.concat([e]):null,qs(4,4,Rv.bind(null,t,e),n)}function mf(){}function Nv(e,t){var n=yt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ff(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Av(e,t){var n=yt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ff(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Lv(e,t,n){return wr&21?(Rt(n,t)||(n=jm(),me.lanes|=n,_r|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ge=!0),e.memoizedState=n)}function mw(e,t){var n=ee;ee=n!==0&&4>n?n:4,e(!0);var r=Fl.transition;Fl.transition={};try{e(!1),t()}finally{ee=n,Fl.transition=r}}function Dv(){return yt().memoizedState}function vw(e,t,n){var r=$n(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Mv(e))jv(t,n);else if(n=hv(e,t,n,r),n!==null){var i=Ve();Pt(n,e,r,i),Uv(n,t,r)}}function gw(e,t,n){var r=$n(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Mv(e))jv(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Rt(s,o)){var l=t.interleaved;l===null?(i.next=i,of(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=hv(e,t,i,r),n!==null&&(i=Ve(),Pt(n,e,r,i),Uv(n,t,r))}}function Mv(e){var t=e.alternate;return e===me||t!==null&&t===me}function jv(e,t){ia=Ss=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Uv(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Wc(e,n)}}var ks={readContext:gt,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useInsertionEffect:Me,useLayoutEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useMutableSource:Me,useSyncExternalStore:Me,useId:Me,unstable_isNewReconciler:!1},yw={readContext:gt,useCallback:function(e,t){return Lt().memoizedState=[e,t===void 0?null:t],e},useContext:gt,useEffect:sh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Wo(4194308,4,Rv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Wo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Wo(4,2,e,t)},useMemo:function(e,t){var n=Lt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Lt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=vw.bind(null,me,e),[r.memoizedState,e]},useRef:function(e){var t=Lt();return e={current:e},t.memoizedState=e},useState:oh,useDebugValue:mf,useDeferredValue:function(e){return Lt().memoizedState=e},useTransition:function(){var e=oh(!1),t=e[0];return e=mw.bind(null,e[1]),Lt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=me,i=Lt();if(fe){if(n===void 0)throw Error(T(407));n=n()}else{if(n=t(),Te===null)throw Error(T(349));wr&30||Sv(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,sh(bv.bind(null,r,a,e),[e]),r.flags|=2048,Ca(9,kv.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Lt(),t=Te.identifierPrefix;if(fe){var n=Gt,r=Yt;n=(r&~(1<<32-Tt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=xa++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=pw++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ww={readContext:gt,useCallback:Nv,useContext:gt,useEffect:pf,useImperativeHandle:Ov,useInsertionEffect:Tv,useLayoutEffect:Pv,useMemo:Av,useReducer:zl,useRef:Cv,useState:function(){return zl(Ia)},useDebugValue:mf,useDeferredValue:function(e){var t=yt();return Lv(t,ke.memoizedState,e)},useTransition:function(){var e=zl(Ia)[0],t=yt().memoizedState;return[e,t]},useMutableSource:_v,useSyncExternalStore:Ev,useId:Dv,unstable_isNewReconciler:!1},_w={readContext:gt,useCallback:Nv,useContext:gt,useEffect:pf,useImperativeHandle:Ov,useInsertionEffect:Tv,useLayoutEffect:Pv,useMemo:Av,useReducer:$l,useRef:Cv,useState:function(){return $l(Ia)},useDebugValue:mf,useDeferredValue:function(e){var t=yt();return ke===null?t.memoizedState=e:Lv(t,ke.memoizedState,e)},useTransition:function(){var e=$l(Ia)[0],t=yt().memoizedState;return[e,t]},useMutableSource:_v,useSyncExternalStore:Ev,useId:Dv,unstable_isNewReconciler:!1};function gi(e,t){try{var n="",r=t;do n+=G0(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function Bl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function zu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Ew=typeof WeakMap=="function"?WeakMap:Map;function Fv(e,t,n){n=Jt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){xs||(xs=!0,qu=r),zu(e,t)},n}function zv(e,t,n){n=Jt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){zu(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){zu(e,t),typeof r!="function"&&(zn===null?zn=new Set([this]):zn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function lh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ew;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Dw.bind(null,e,t,n),t.then(e,e))}function uh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ch(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Jt(-1,1),t.tag=2,Fn(n,t,1))),n.lanes|=1),e)}var Sw=fn.ReactCurrentOwner,Ge=!1;function He(e,t,n,r){t.child=e===null?yv(t,null,n,r):mi(t,e.child,n,r)}function fh(e,t,n,r,i){n=n.render;var a=t.ref;return ai(t,i),r=df(e,t,n,r,a,i),n=hf(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,an(e,t,i)):(fe&&n&&Zc(t),t.flags|=1,He(e,t,r,i),t.child)}function dh(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!kf(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,$v(e,t,a,r,i)):(e=Qo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:wa,n(o,r)&&e.ref===t.ref)return an(e,t,i)}return t.flags|=1,e=Bn(a,r),e.ref=t.ref,e.return=t,t.child=e}function $v(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(wa(a,r)&&e.ref===t.ref)if(Ge=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Ge=!0);else return t.lanes=e.lanes,an(e,t,i)}return $u(e,t,n,r,i)}function Bv(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(Qr,tt),tt|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ie(Qr,tt),tt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,ie(Qr,tt),tt|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,ie(Qr,tt),tt|=r;return He(e,t,i,n),t.child}function Hv(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function $u(e,t,n,r,i){var a=qe(n)?gr:Fe.current;return a=hi(t,a),ai(t,i),n=df(e,t,n,r,a,i),r=hf(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,an(e,t,i)):(fe&&r&&Zc(t),t.flags|=1,He(e,t,n,i),t.child)}function hh(e,t,n,r,i){if(qe(n)){var a=!0;ms(t)}else a=!1;if(ai(t,i),t.stateNode===null)Ko(e,t),vv(t,n,r),Fu(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=gt(u):(u=qe(n)?gr:Fe.current,u=hi(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||l!==u)&&ih(t,o,r,u),xn=!1;var d=t.memoizedState;o.state=d,_s(t,r,o,i),l=t.memoizedState,s!==r||d!==l||Qe.current||xn?(typeof c=="function"&&(Uu(t,n,c,r),l=t.memoizedState),(s=xn||rh(t,n,s,r,d,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,pv(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:St(t.type,s),o.props=u,f=t.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=gt(l):(l=qe(n)?gr:Fe.current,l=hi(t,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==f||d!==l)&&ih(t,o,r,l),xn=!1,d=t.memoizedState,o.state=d,_s(t,r,o,i);var w=t.memoizedState;s!==f||d!==w||Qe.current||xn?(typeof g=="function"&&(Uu(t,n,g,r),w=t.memoizedState),(u=xn||rh(t,n,u,r,d,w,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),o.props=r,o.state=w,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return Bu(e,t,n,r,a,i)}function Bu(e,t,n,r,i,a){Hv(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Jd(t,n,!1),an(e,t,a);r=t.stateNode,Sw.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=mi(t,e.child,null,a),t.child=mi(t,null,s,a)):He(e,t,s,a),t.memoizedState=r.state,i&&Jd(t,n,!0),t.child}function Vv(e){var t=e.stateNode;t.pendingContext?Xd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Xd(e,t.context,!1),lf(e,t.containerInfo)}function ph(e,t,n,r,i){return pi(),tf(i),t.flags|=256,He(e,t,n,r),t.child}var Hu={dehydrated:null,treeContext:null,retryLane:0};function Vu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Wv(e,t,n){var r=t.pendingProps,i=pe.current,a=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ie(pe,i&1),e===null)return Mu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Zs(o,r,0,null),e=vr(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Vu(n),t.memoizedState=Hu,e):vf(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return kw(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Bn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?a=Bn(s,a):(a=vr(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?Vu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Hu,r}return a=e.child,e=a.sibling,r=Bn(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function vf(e,t){return t=Zs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ko(e,t,n,r){return r!==null&&tf(r),mi(t,e.child,null,n),e=vf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function kw(e,t,n,r,i,a,o){if(n)return t.flags&256?(t.flags&=-257,r=Bl(Error(T(422))),ko(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Zs({mode:"visible",children:r.children},i,0,null),a=vr(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&mi(t,e.child,null,o),t.child.memoizedState=Vu(o),t.memoizedState=Hu,a);if(!(t.mode&1))return ko(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,a=Error(T(419)),r=Bl(a,r,void 0),ko(e,t,o,r)}if(s=(o&e.childLanes)!==0,Ge||s){if(r=Te,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,rn(e,i),Pt(r,e,i,-1))}return Sf(),r=Bl(Error(T(421))),ko(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Mw.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,nt=Un(i.nextSibling),it=t,fe=!0,xt=null,e!==null&&(dt[ht++]=Yt,dt[ht++]=Gt,dt[ht++]=yr,Yt=e.id,Gt=e.overflow,yr=t),t=vf(t,r.children),t.flags|=4096,t)}function mh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ju(e.return,t,n)}function Hl(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function Kv(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(He(e,t,r.children,n),r=pe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&mh(e,n,t);else if(e.tag===19)mh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ie(pe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Es(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Hl(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Es(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Hl(t,!0,n,null,a);break;case"together":Hl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ko(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function an(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),_r|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,n=Bn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Bn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function bw(e,t,n){switch(t.tag){case 3:Vv(t),pi();break;case 5:wv(t);break;case 1:qe(t.type)&&ms(t);break;case 4:lf(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ie(ys,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ie(pe,pe.current&1),t.flags|=128,null):n&t.child.childLanes?Wv(e,t,n):(ie(pe,pe.current&1),e=an(e,t,n),e!==null?e.sibling:null);ie(pe,pe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Kv(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ie(pe,pe.current),r)break;return null;case 22:case 23:return t.lanes=0,Bv(e,t,n)}return an(e,t,n)}var Yv,Wu,Gv,Qv;Yv=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wu=function(){};Gv=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,cr(zt.current);var a=null;switch(n){case"input":i=hu(e,i),r=hu(e,r),a=[];break;case"select":i=ve({},i,{value:void 0}),r=ve({},r,{value:void 0}),a=[];break;case"textarea":i=vu(e,i),r=vu(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=hs)}yu(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(da.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(a||(a=[]),a.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(da.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ae("scroll",e),a||s===l||(a=[])):(a=a||[]).push(u,l))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};Qv=function(e,t,n,r){n!==r&&(t.flags|=4)};function $i(e,t){if(!fe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function je(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function xw(e,t,n){var r=t.pendingProps;switch(ef(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(t),null;case 1:return qe(t.type)&&ps(),je(t),null;case 3:return r=t.stateNode,vi(),se(Qe),se(Fe),cf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Eo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,xt!==null&&(Zu(xt),xt=null))),Wu(e,t),je(t),null;case 5:uf(t);var i=cr(ba.current);if(n=t.type,e!==null&&t.stateNode!=null)Gv(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(T(166));return je(t),null}if(e=cr(zt.current),Eo(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Mt]=t,r[Sa]=a,e=(t.mode&1)!==0,n){case"dialog":ae("cancel",r),ae("close",r);break;case"iframe":case"object":case"embed":ae("load",r);break;case"video":case"audio":for(i=0;i<Qi.length;i++)ae(Qi[i],r);break;case"source":ae("error",r);break;case"img":case"image":case"link":ae("error",r),ae("load",r);break;case"details":ae("toggle",r);break;case"input":bd(r,a),ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},ae("invalid",r);break;case"textarea":Id(r,a),ae("invalid",r)}yu(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?r.textContent!==s&&(a.suppressHydrationWarning!==!0&&_o(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&_o(r.textContent,s,e),i=["children",""+s]):da.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&ae("scroll",r)}switch(n){case"input":fo(r),xd(r,a,!0);break;case"textarea":fo(r),Cd(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=hs)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Sm(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Mt]=t,e[Sa]=r,Yv(e,t,!1,!1),t.stateNode=e;e:{switch(o=wu(n,r),n){case"dialog":ae("cancel",e),ae("close",e),i=r;break;case"iframe":case"object":case"embed":ae("load",e),i=r;break;case"video":case"audio":for(i=0;i<Qi.length;i++)ae(Qi[i],e);i=r;break;case"source":ae("error",e),i=r;break;case"img":case"image":case"link":ae("error",e),ae("load",e),i=r;break;case"details":ae("toggle",e),i=r;break;case"input":bd(e,r),i=hu(e,r),ae("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ve({},r,{value:void 0}),ae("invalid",e);break;case"textarea":Id(e,r),i=vu(e,r),ae("invalid",e);break;default:i=r}yu(n,i),s=i;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?xm(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&km(e,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ha(e,l):typeof l=="number"&&ha(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(da.hasOwnProperty(a)?l!=null&&a==="onScroll"&&ae("scroll",e):l!=null&&Fc(e,a,l,o))}switch(n){case"input":fo(e),xd(e,r,!1);break;case"textarea":fo(e),Cd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Wn(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?ti(e,!!r.multiple,a,!1):r.defaultValue!=null&&ti(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=hs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return je(t),null;case 6:if(e&&t.stateNode!=null)Qv(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(T(166));if(n=cr(ba.current),cr(zt.current),Eo(t)){if(r=t.stateNode,n=t.memoizedProps,r[Mt]=t,(a=r.nodeValue!==n)&&(e=it,e!==null))switch(e.tag){case 3:_o(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&_o(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Mt]=t,t.stateNode=r}return je(t),null;case 13:if(se(pe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(fe&&nt!==null&&t.mode&1&&!(t.flags&128))dv(),pi(),t.flags|=98560,a=!1;else if(a=Eo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(T(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(T(317));a[Mt]=t}else pi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;je(t),a=!1}else xt!==null&&(Zu(xt),xt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||pe.current&1?be===0&&(be=3):Sf())),t.updateQueue!==null&&(t.flags|=4),je(t),null);case 4:return vi(),Wu(e,t),e===null&&_a(t.stateNode.containerInfo),je(t),null;case 10:return af(t.type._context),je(t),null;case 17:return qe(t.type)&&ps(),je(t),null;case 19:if(se(pe),a=t.memoizedState,a===null)return je(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)$i(a,!1);else{if(be!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Es(e),o!==null){for(t.flags|=128,$i(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ie(pe,pe.current&1|2),t.child}e=e.sibling}a.tail!==null&&Ee()>yi&&(t.flags|=128,r=!0,$i(a,!1),t.lanes=4194304)}else{if(!r)if(e=Es(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),$i(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!fe)return je(t),null}else 2*Ee()-a.renderingStartTime>yi&&n!==1073741824&&(t.flags|=128,r=!0,$i(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Ee(),t.sibling=null,n=pe.current,ie(pe,r?n&1|2:n&1),t):(je(t),null);case 22:case 23:return Ef(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?tt&1073741824&&(je(t),t.subtreeFlags&6&&(t.flags|=8192)):je(t),null;case 24:return null;case 25:return null}throw Error(T(156,t.tag))}function Iw(e,t){switch(ef(t),t.tag){case 1:return qe(t.type)&&ps(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return vi(),se(Qe),se(Fe),cf(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return uf(t),null;case 13:if(se(pe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));pi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return se(pe),null;case 4:return vi(),null;case 10:return af(t.type._context),null;case 22:case 23:return Ef(),null;case 24:return null;default:return null}}var bo=!1,Ue=!1,Cw=typeof WeakSet=="function"?WeakSet:Set,M=null;function Gr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ge(e,t,r)}else n.current=null}function Ku(e,t,n){try{n()}catch(r){ge(e,t,r)}}var vh=!1;function Tw(e,t){if(Pu=cs,e=Zm(),Jc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,s=-1,l=-1,u=0,c=0,f=e,d=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(s=o+i),f!==a||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)d=f,f=g;for(;;){if(f===e)break t;if(d===n&&++u===i&&(s=o),d===a&&++c===r&&(l=o),(g=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=g}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ru={focusedElem:e,selectionRange:n},cs=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var _=w.memoizedProps,I=w.memoizedState,p=t.stateNode,h=p.getSnapshotBeforeUpdate(t.elementType===t.type?_:St(t.type,_),I);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(k){ge(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return w=vh,vh=!1,w}function aa(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&Ku(t,n,a)}i=i.next}while(i!==r)}}function Xs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Yu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function qv(e){var t=e.alternate;t!==null&&(e.alternate=null,qv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Mt],delete t[Sa],delete t[Au],delete t[cw],delete t[fw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Xv(e){return e.tag===5||e.tag===3||e.tag===4}function gh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Gu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=hs));else if(r!==4&&(e=e.child,e!==null))for(Gu(e,t,n),e=e.sibling;e!==null;)Gu(e,t,n),e=e.sibling}function Qu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Qu(e,t,n),e=e.sibling;e!==null;)Qu(e,t,n),e=e.sibling}var Ae=null,kt=!1;function _n(e,t,n){for(n=n.child;n!==null;)Jv(e,t,n),n=n.sibling}function Jv(e,t,n){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(Hs,n)}catch{}switch(n.tag){case 5:Ue||Gr(n,t);case 6:var r=Ae,i=kt;Ae=null,_n(e,t,n),Ae=r,kt=i,Ae!==null&&(kt?(e=Ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ae.removeChild(n.stateNode));break;case 18:Ae!==null&&(kt?(e=Ae,n=n.stateNode,e.nodeType===8?Ml(e.parentNode,n):e.nodeType===1&&Ml(e,n),ga(e)):Ml(Ae,n.stateNode));break;case 4:r=Ae,i=kt,Ae=n.stateNode.containerInfo,kt=!0,_n(e,t,n),Ae=r,kt=i;break;case 0:case 11:case 14:case 15:if(!Ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&Ku(n,t,o),i=i.next}while(i!==r)}_n(e,t,n);break;case 1:if(!Ue&&(Gr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ge(n,t,s)}_n(e,t,n);break;case 21:_n(e,t,n);break;case 22:n.mode&1?(Ue=(r=Ue)||n.memoizedState!==null,_n(e,t,n),Ue=r):_n(e,t,n);break;default:_n(e,t,n)}}function yh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Cw),t.forEach(function(r){var i=jw.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Et(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:Ae=s.stateNode,kt=!1;break e;case 3:Ae=s.stateNode.containerInfo,kt=!0;break e;case 4:Ae=s.stateNode.containerInfo,kt=!0;break e}s=s.return}if(Ae===null)throw Error(T(160));Jv(a,o,i),Ae=null,kt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ge(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Zv(t,e),t=t.sibling}function Zv(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Et(t,e),At(e),r&4){try{aa(3,e,e.return),Xs(3,e)}catch(_){ge(e,e.return,_)}try{aa(5,e,e.return)}catch(_){ge(e,e.return,_)}}break;case 1:Et(t,e),At(e),r&512&&n!==null&&Gr(n,n.return);break;case 5:if(Et(t,e),At(e),r&512&&n!==null&&Gr(n,n.return),e.flags&32){var i=e.stateNode;try{ha(i,"")}catch(_){ge(e,e.return,_)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&_m(i,a),wu(s,o);var u=wu(s,a);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?xm(i,f):c==="dangerouslySetInnerHTML"?km(i,f):c==="children"?ha(i,f):Fc(i,c,f,u)}switch(s){case"input":pu(i,a);break;case"textarea":Em(i,a);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var g=a.value;g!=null?ti(i,!!a.multiple,g,!1):d!==!!a.multiple&&(a.defaultValue!=null?ti(i,!!a.multiple,a.defaultValue,!0):ti(i,!!a.multiple,a.multiple?[]:"",!1))}i[Sa]=a}catch(_){ge(e,e.return,_)}}break;case 6:if(Et(t,e),At(e),r&4){if(e.stateNode===null)throw Error(T(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(_){ge(e,e.return,_)}}break;case 3:if(Et(t,e),At(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ga(t.containerInfo)}catch(_){ge(e,e.return,_)}break;case 4:Et(t,e),At(e);break;case 13:Et(t,e),At(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(wf=Ee())),r&4&&yh(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Ue=(u=Ue)||c,Et(t,e),Ue=u):Et(t,e),At(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(M=e,c=e.child;c!==null;){for(f=M=c;M!==null;){switch(d=M,g=d.child,d.tag){case 0:case 11:case 14:case 15:aa(4,d,d.return);break;case 1:Gr(d,d.return);var w=d.stateNode;if(typeof w.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(_){ge(r,n,_)}}break;case 5:Gr(d,d.return);break;case 22:if(d.memoizedState!==null){_h(f);continue}}g!==null?(g.return=d,M=g):_h(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=bm("display",o))}catch(_){ge(e,e.return,_)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(_){ge(e,e.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Et(t,e),At(e),r&4&&yh(e);break;case 21:break;default:Et(t,e),At(e)}}function At(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Xv(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ha(i,""),r.flags&=-33);var a=gh(e);Qu(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=gh(e);Gu(e,s,o);break;default:throw Error(T(161))}}catch(l){ge(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Pw(e,t,n){M=e,eg(e)}function eg(e,t,n){for(var r=(e.mode&1)!==0;M!==null;){var i=M,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||bo;if(!o){var s=i.alternate,l=s!==null&&s.memoizedState!==null||Ue;s=bo;var u=Ue;if(bo=o,(Ue=l)&&!u)for(M=i;M!==null;)o=M,l=o.child,o.tag===22&&o.memoizedState!==null?Eh(i):l!==null?(l.return=o,M=l):Eh(i);for(;a!==null;)M=a,eg(a),a=a.sibling;M=i,bo=s,Ue=u}wh(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,M=a):wh(e)}}function wh(e){for(;M!==null;){var t=M;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ue||Xs(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ue)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:St(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&nh(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}nh(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&ga(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}Ue||t.flags&512&&Yu(t)}catch(d){ge(t,t.return,d)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function _h(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function Eh(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Xs(4,t)}catch(l){ge(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ge(t,i,l)}}var a=t.return;try{Yu(t)}catch(l){ge(t,a,l)}break;case 5:var o=t.return;try{Yu(t)}catch(l){ge(t,o,l)}}}catch(l){ge(t,t.return,l)}if(t===e){M=null;break}var s=t.sibling;if(s!==null){s.return=t.return,M=s;break}M=t.return}}var Rw=Math.ceil,bs=fn.ReactCurrentDispatcher,gf=fn.ReactCurrentOwner,vt=fn.ReactCurrentBatchConfig,Z=0,Te=null,Se=null,Le=0,tt=0,Qr=Xn(0),be=0,Ta=null,_r=0,Js=0,yf=0,oa=null,Ye=null,wf=0,yi=1/0,Wt=null,xs=!1,qu=null,zn=null,xo=!1,Ln=null,Is=0,sa=0,Xu=null,Yo=-1,Go=0;function Ve(){return Z&6?Ee():Yo!==-1?Yo:Yo=Ee()}function $n(e){return e.mode&1?Z&2&&Le!==0?Le&-Le:hw.transition!==null?(Go===0&&(Go=jm()),Go):(e=ee,e!==0||(e=window.event,e=e===void 0?16:Vm(e.type)),e):1}function Pt(e,t,n,r){if(50<sa)throw sa=0,Xu=null,Error(T(185));Ba(e,n,r),(!(Z&2)||e!==Te)&&(e===Te&&(!(Z&2)&&(Js|=n),be===4&&Cn(e,Le)),Xe(e,r),n===1&&Z===0&&!(t.mode&1)&&(yi=Ee()+500,Gs&&Jn()))}function Xe(e,t){var n=e.callbackNode;h1(e,t);var r=us(e,e===Te?Le:0);if(r===0)n!==null&&Rd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Rd(n),t===1)e.tag===0?dw(Sh.bind(null,e)):uv(Sh.bind(null,e)),lw(function(){!(Z&6)&&Jn()}),n=null;else{switch(Um(r)){case 1:n=Vc;break;case 4:n=Dm;break;case 16:n=ls;break;case 536870912:n=Mm;break;default:n=ls}n=lg(n,tg.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function tg(e,t){if(Yo=-1,Go=0,Z&6)throw Error(T(327));var n=e.callbackNode;if(oi()&&e.callbackNode!==n)return null;var r=us(e,e===Te?Le:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Cs(e,r);else{t=r;var i=Z;Z|=2;var a=rg();(Te!==e||Le!==t)&&(Wt=null,yi=Ee()+500,mr(e,t));do try{Aw();break}catch(s){ng(e,s)}while(!0);rf(),bs.current=a,Z=i,Se!==null?t=0:(Te=null,Le=0,t=be)}if(t!==0){if(t===2&&(i=bu(e),i!==0&&(r=i,t=Ju(e,i))),t===1)throw n=Ta,mr(e,0),Cn(e,r),Xe(e,Ee()),n;if(t===6)Cn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Ow(i)&&(t=Cs(e,r),t===2&&(a=bu(e),a!==0&&(r=a,t=Ju(e,a))),t===1))throw n=Ta,mr(e,0),Cn(e,r),Xe(e,Ee()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(T(345));case 2:or(e,Ye,Wt);break;case 3:if(Cn(e,r),(r&130023424)===r&&(t=wf+500-Ee(),10<t)){if(us(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ve(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Nu(or.bind(null,e,Ye,Wt),t);break}or(e,Ye,Wt);break;case 4:if(Cn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Tt(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=Ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Rw(r/1960))-r,10<r){e.timeoutHandle=Nu(or.bind(null,e,Ye,Wt),r);break}or(e,Ye,Wt);break;case 5:or(e,Ye,Wt);break;default:throw Error(T(329))}}}return Xe(e,Ee()),e.callbackNode===n?tg.bind(null,e):null}function Ju(e,t){var n=oa;return e.current.memoizedState.isDehydrated&&(mr(e,t).flags|=256),e=Cs(e,t),e!==2&&(t=Ye,Ye=n,t!==null&&Zu(t)),e}function Zu(e){Ye===null?Ye=e:Ye.push.apply(Ye,e)}function Ow(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Rt(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Cn(e,t){for(t&=~yf,t&=~Js,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Tt(t),r=1<<n;e[n]=-1,t&=~r}}function Sh(e){if(Z&6)throw Error(T(327));oi();var t=us(e,0);if(!(t&1))return Xe(e,Ee()),null;var n=Cs(e,t);if(e.tag!==0&&n===2){var r=bu(e);r!==0&&(t=r,n=Ju(e,r))}if(n===1)throw n=Ta,mr(e,0),Cn(e,t),Xe(e,Ee()),n;if(n===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,or(e,Ye,Wt),Xe(e,Ee()),null}function _f(e,t){var n=Z;Z|=1;try{return e(t)}finally{Z=n,Z===0&&(yi=Ee()+500,Gs&&Jn())}}function Er(e){Ln!==null&&Ln.tag===0&&!(Z&6)&&oi();var t=Z;Z|=1;var n=vt.transition,r=ee;try{if(vt.transition=null,ee=1,e)return e()}finally{ee=r,vt.transition=n,Z=t,!(Z&6)&&Jn()}}function Ef(){tt=Qr.current,se(Qr)}function mr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,sw(n)),Se!==null)for(n=Se.return;n!==null;){var r=n;switch(ef(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ps();break;case 3:vi(),se(Qe),se(Fe),cf();break;case 5:uf(r);break;case 4:vi();break;case 13:se(pe);break;case 19:se(pe);break;case 10:af(r.type._context);break;case 22:case 23:Ef()}n=n.return}if(Te=e,Se=e=Bn(e.current,null),Le=tt=t,be=0,Ta=null,yf=Js=_r=0,Ye=oa=null,ur!==null){for(t=0;t<ur.length;t++)if(n=ur[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}ur=null}return e}function ng(e,t){do{var n=Se;try{if(rf(),Vo.current=ks,Ss){for(var r=me.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ss=!1}if(wr=0,Ce=ke=me=null,ia=!1,xa=0,gf.current=null,n===null||n.return===null){be=1,Ta=t,Se=null;break}e:{var a=e,o=n.return,s=n,l=t;if(t=Le,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=uh(o);if(g!==null){g.flags&=-257,ch(g,o,s,a,t),g.mode&1&&lh(a,u,t),t=g,l=u;var w=t.updateQueue;if(w===null){var _=new Set;_.add(l),t.updateQueue=_}else w.add(l);break e}else{if(!(t&1)){lh(a,u,t),Sf();break e}l=Error(T(426))}}else if(fe&&s.mode&1){var I=uh(o);if(I!==null){!(I.flags&65536)&&(I.flags|=256),ch(I,o,s,a,t),tf(gi(l,s));break e}}a=l=gi(l,s),be!==4&&(be=2),oa===null?oa=[a]:oa.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var p=Fv(a,l,t);th(a,p);break e;case 1:s=l;var h=a.type,m=a.stateNode;if(!(a.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(zn===null||!zn.has(m)))){a.flags|=65536,t&=-t,a.lanes|=t;var k=zv(a,s,t);th(a,k);break e}}a=a.return}while(a!==null)}ag(n)}catch(C){t=C,Se===n&&n!==null&&(Se=n=n.return);continue}break}while(!0)}function rg(){var e=bs.current;return bs.current=ks,e===null?ks:e}function Sf(){(be===0||be===3||be===2)&&(be=4),Te===null||!(_r&268435455)&&!(Js&268435455)||Cn(Te,Le)}function Cs(e,t){var n=Z;Z|=2;var r=rg();(Te!==e||Le!==t)&&(Wt=null,mr(e,t));do try{Nw();break}catch(i){ng(e,i)}while(!0);if(rf(),Z=n,bs.current=r,Se!==null)throw Error(T(261));return Te=null,Le=0,be}function Nw(){for(;Se!==null;)ig(Se)}function Aw(){for(;Se!==null&&!i1();)ig(Se)}function ig(e){var t=sg(e.alternate,e,tt);e.memoizedProps=e.pendingProps,t===null?ag(e):Se=t,gf.current=null}function ag(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Iw(n,t),n!==null){n.flags&=32767,Se=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{be=6,Se=null;return}}else if(n=xw(n,t,tt),n!==null){Se=n;return}if(t=t.sibling,t!==null){Se=t;return}Se=t=e}while(t!==null);be===0&&(be=5)}function or(e,t,n){var r=ee,i=vt.transition;try{vt.transition=null,ee=1,Lw(e,t,n,r)}finally{vt.transition=i,ee=r}return null}function Lw(e,t,n,r){do oi();while(Ln!==null);if(Z&6)throw Error(T(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(p1(e,a),e===Te&&(Se=Te=null,Le=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||xo||(xo=!0,lg(ls,function(){return oi(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=vt.transition,vt.transition=null;var o=ee;ee=1;var s=Z;Z|=4,gf.current=null,Tw(e,n),Zv(n,e),ew(Ru),cs=!!Pu,Ru=Pu=null,e.current=n,Pw(n),a1(),Z=s,ee=o,vt.transition=a}else e.current=n;if(xo&&(xo=!1,Ln=e,Is=i),a=e.pendingLanes,a===0&&(zn=null),l1(n.stateNode),Xe(e,Ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(xs)throw xs=!1,e=qu,qu=null,e;return Is&1&&e.tag!==0&&oi(),a=e.pendingLanes,a&1?e===Xu?sa++:(sa=0,Xu=e):sa=0,Jn(),null}function oi(){if(Ln!==null){var e=Um(Is),t=vt.transition,n=ee;try{if(vt.transition=null,ee=16>e?16:e,Ln===null)var r=!1;else{if(e=Ln,Ln=null,Is=0,Z&6)throw Error(T(331));var i=Z;for(Z|=4,M=e.current;M!==null;){var a=M,o=a.child;if(M.flags&16){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(M=u;M!==null;){var c=M;switch(c.tag){case 0:case 11:case 15:aa(8,c,a)}var f=c.child;if(f!==null)f.return=c,M=f;else for(;M!==null;){c=M;var d=c.sibling,g=c.return;if(qv(c),c===u){M=null;break}if(d!==null){d.return=g,M=d;break}M=g}}}var w=a.alternate;if(w!==null){var _=w.child;if(_!==null){w.child=null;do{var I=_.sibling;_.sibling=null,_=I}while(_!==null)}}M=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,M=o;else e:for(;M!==null;){if(a=M,a.flags&2048)switch(a.tag){case 0:case 11:case 15:aa(9,a,a.return)}var p=a.sibling;if(p!==null){p.return=a.return,M=p;break e}M=a.return}}var h=e.current;for(M=h;M!==null;){o=M;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,M=m;else e:for(o=h;M!==null;){if(s=M,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Xs(9,s)}}catch(C){ge(s,s.return,C)}if(s===o){M=null;break e}var k=s.sibling;if(k!==null){k.return=s.return,M=k;break e}M=s.return}}if(Z=i,Jn(),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(Hs,e)}catch{}r=!0}return r}finally{ee=n,vt.transition=t}}return!1}function kh(e,t,n){t=gi(n,t),t=Fv(e,t,1),e=Fn(e,t,1),t=Ve(),e!==null&&(Ba(e,1,t),Xe(e,t))}function ge(e,t,n){if(e.tag===3)kh(e,e,n);else for(;t!==null;){if(t.tag===3){kh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(zn===null||!zn.has(r))){e=gi(n,e),e=zv(t,e,1),t=Fn(t,e,1),e=Ve(),t!==null&&(Ba(t,1,e),Xe(t,e));break}}t=t.return}}function Dw(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ve(),e.pingedLanes|=e.suspendedLanes&n,Te===e&&(Le&n)===n&&(be===4||be===3&&(Le&130023424)===Le&&500>Ee()-wf?mr(e,0):yf|=n),Xe(e,t)}function og(e,t){t===0&&(e.mode&1?(t=mo,mo<<=1,!(mo&130023424)&&(mo=4194304)):t=1);var n=Ve();e=rn(e,t),e!==null&&(Ba(e,t,n),Xe(e,n))}function Mw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),og(e,n)}function jw(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(t),og(e,n)}var sg;sg=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Qe.current)Ge=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ge=!1,bw(e,t,n);Ge=!!(e.flags&131072)}else Ge=!1,fe&&t.flags&1048576&&cv(t,gs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ko(e,t),e=t.pendingProps;var i=hi(t,Fe.current);ai(t,n),i=df(null,t,r,e,i,n);var a=hf();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,qe(r)?(a=!0,ms(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,sf(t),i.updater=Qs,t.stateNode=i,i._reactInternals=t,Fu(t,r,e,n),t=Bu(null,t,r,!0,a,n)):(t.tag=0,fe&&a&&Zc(t),He(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ko(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Fw(r),e=St(r,e),i){case 0:t=$u(null,t,r,e,n);break e;case 1:t=hh(null,t,r,e,n);break e;case 11:t=fh(null,t,r,e,n);break e;case 14:t=dh(null,t,r,St(r.type,e),n);break e}throw Error(T(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:St(r,i),$u(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:St(r,i),hh(e,t,r,i,n);case 3:e:{if(Vv(t),e===null)throw Error(T(387));r=t.pendingProps,a=t.memoizedState,i=a.element,pv(e,t),_s(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=gi(Error(T(423)),t),t=ph(e,t,r,n,i);break e}else if(r!==i){i=gi(Error(T(424)),t),t=ph(e,t,r,n,i);break e}else for(nt=Un(t.stateNode.containerInfo.firstChild),it=t,fe=!0,xt=null,n=yv(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(pi(),r===i){t=an(e,t,n);break e}He(e,t,r,n)}t=t.child}return t;case 5:return wv(t),e===null&&Mu(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,Ou(r,i)?o=null:a!==null&&Ou(r,a)&&(t.flags|=32),Hv(e,t),He(e,t,o,n),t.child;case 6:return e===null&&Mu(t),null;case 13:return Wv(e,t,n);case 4:return lf(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=mi(t,null,r,n):He(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:St(r,i),fh(e,t,r,i,n);case 7:return He(e,t,t.pendingProps,n),t.child;case 8:return He(e,t,t.pendingProps.children,n),t.child;case 12:return He(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,ie(ys,r._currentValue),r._currentValue=o,a!==null)if(Rt(a.value,o)){if(a.children===i.children&&!Qe.current){t=an(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(a.tag===1){l=Jt(-1,n&-n),l.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),ju(a.return,n,t),s.lanes|=n;break}l=l.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(T(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),ju(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}He(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ai(t,n),i=gt(i),r=r(i),t.flags|=1,He(e,t,r,n),t.child;case 14:return r=t.type,i=St(r,t.pendingProps),i=St(r.type,i),dh(e,t,r,i,n);case 15:return $v(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:St(r,i),Ko(e,t),t.tag=1,qe(r)?(e=!0,ms(t)):e=!1,ai(t,n),vv(t,r,i),Fu(t,r,i,n),Bu(null,t,r,!0,e,n);case 19:return Kv(e,t,n);case 22:return Bv(e,t,n)}throw Error(T(156,t.tag))};function lg(e,t){return Lm(e,t)}function Uw(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mt(e,t,n,r){return new Uw(e,t,n,r)}function kf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fw(e){if(typeof e=="function")return kf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===$c)return 11;if(e===Bc)return 14}return 2}function Bn(e,t){var n=e.alternate;return n===null?(n=mt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Qo(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")kf(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Fr:return vr(n.children,i,a,t);case zc:o=8,i|=8;break;case uu:return e=mt(12,n,t,i|2),e.elementType=uu,e.lanes=a,e;case cu:return e=mt(13,n,t,i),e.elementType=cu,e.lanes=a,e;case fu:return e=mt(19,n,t,i),e.elementType=fu,e.lanes=a,e;case gm:return Zs(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case mm:o=10;break e;case vm:o=9;break e;case $c:o=11;break e;case Bc:o=14;break e;case bn:o=16,r=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return t=mt(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function vr(e,t,n,r){return e=mt(7,e,r,t),e.lanes=n,e}function Zs(e,t,n,r){return e=mt(22,e,r,t),e.elementType=gm,e.lanes=n,e.stateNode={isHidden:!1},e}function Vl(e,t,n){return e=mt(6,e,null,t),e.lanes=n,e}function Wl(e,t,n){return t=mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function zw(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xl(0),this.expirationTimes=xl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function bf(e,t,n,r,i,a,o,s,l){return e=new zw(e,t,n,s,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=mt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},sf(a),e}function $w(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ur,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ug(e){if(!e)return Kn;e=e._reactInternals;e:{if(Pr(e)!==e||e.tag!==1)throw Error(T(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(T(171))}if(e.tag===1){var n=e.type;if(qe(n))return lv(e,n,t)}return t}function cg(e,t,n,r,i,a,o,s,l){return e=bf(n,r,!0,e,i,a,o,s,l),e.context=ug(null),n=e.current,r=Ve(),i=$n(n),a=Jt(r,i),a.callback=t??null,Fn(n,a,i),e.current.lanes=i,Ba(e,i,r),Xe(e,r),e}function el(e,t,n,r){var i=t.current,a=Ve(),o=$n(i);return n=ug(n),t.context===null?t.context=n:t.pendingContext=n,t=Jt(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Fn(i,t,o),e!==null&&(Pt(e,i,o,a),Ho(e,i,o)),o}function Ts(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function bh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function xf(e,t){bh(e,t),(e=e.alternate)&&bh(e,t)}function Bw(){return null}var fg=typeof reportError=="function"?reportError:function(e){console.error(e)};function If(e){this._internalRoot=e}tl.prototype.render=If.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));el(e,t,null,null)};tl.prototype.unmount=If.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Er(function(){el(null,e,null,null)}),t[nn]=null}};function tl(e){this._internalRoot=e}tl.prototype.unstable_scheduleHydration=function(e){if(e){var t=$m();e={blockedOn:null,target:e,priority:t};for(var n=0;n<In.length&&t!==0&&t<In[n].priority;n++);In.splice(n,0,e),n===0&&Hm(e)}};function Cf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function nl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function xh(){}function Hw(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var u=Ts(o);a.call(u)}}var o=cg(t,r,e,0,null,!1,!1,"",xh);return e._reactRootContainer=o,e[nn]=o.current,_a(e.nodeType===8?e.parentNode:e),Er(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=Ts(l);s.call(u)}}var l=bf(e,0,!1,null,null,!1,!1,"",xh);return e._reactRootContainer=l,e[nn]=l.current,_a(e.nodeType===8?e.parentNode:e),Er(function(){el(t,l,n,r)}),l}function rl(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var s=i;i=function(){var l=Ts(o);s.call(l)}}el(t,o,e,i)}else o=Hw(n,t,e,i,r);return Ts(o)}Fm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Gi(t.pendingLanes);n!==0&&(Wc(t,n|1),Xe(t,Ee()),!(Z&6)&&(yi=Ee()+500,Jn()))}break;case 13:Er(function(){var r=rn(e,1);if(r!==null){var i=Ve();Pt(r,e,1,i)}}),xf(e,1)}};Kc=function(e){if(e.tag===13){var t=rn(e,134217728);if(t!==null){var n=Ve();Pt(t,e,134217728,n)}xf(e,134217728)}};zm=function(e){if(e.tag===13){var t=$n(e),n=rn(e,t);if(n!==null){var r=Ve();Pt(n,e,t,r)}xf(e,t)}};$m=function(){return ee};Bm=function(e,t){var n=ee;try{return ee=e,t()}finally{ee=n}};Eu=function(e,t,n){switch(t){case"input":if(pu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ys(r);if(!i)throw Error(T(90));wm(r),pu(r,i)}}}break;case"textarea":Em(e,n);break;case"select":t=n.value,t!=null&&ti(e,!!n.multiple,t,!1)}};Tm=_f;Pm=Er;var Vw={usingClientEntryPoint:!1,Events:[Va,Hr,Ys,Im,Cm,_f]},Bi={findFiberByHostInstance:lr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Ww={bundleType:Bi.bundleType,version:Bi.version,rendererPackageName:Bi.rendererPackageName,rendererConfig:Bi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Nm(e),e===null?null:e.stateNode},findFiberByHostInstance:Bi.findFiberByHostInstance||Bw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Io=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Io.isDisabled&&Io.supportsFiber)try{Hs=Io.inject(Ww),Ft=Io}catch{}}ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vw;ot.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cf(t))throw Error(T(200));return $w(e,t,null,n)};ot.createRoot=function(e,t){if(!Cf(e))throw Error(T(299));var n=!1,r="",i=fg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=bf(e,1,!1,null,null,n,!1,r,i),e[nn]=t.current,_a(e.nodeType===8?e.parentNode:e),new If(t)};ot.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=Nm(t),e=e===null?null:e.stateNode,e};ot.flushSync=function(e){return Er(e)};ot.hydrate=function(e,t,n){if(!nl(t))throw Error(T(200));return rl(null,e,t,!0,n)};ot.hydrateRoot=function(e,t,n){if(!Cf(e))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=fg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=cg(t,null,e,1,n??null,i,!1,a,o),e[nn]=t.current,_a(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new tl(t)};ot.render=function(e,t,n){if(!nl(t))throw Error(T(200));return rl(null,e,t,!1,n)};ot.unmountComponentAtNode=function(e){if(!nl(e))throw Error(T(40));return e._reactRootContainer?(Er(function(){rl(null,null,e,!1,function(){e._reactRootContainer=null,e[nn]=null})}),!0):!1};ot.unstable_batchedUpdates=_f;ot.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!nl(n))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return rl(e,t,n,!1,r)};ot.version="18.2.0-next-9e3b772b8-20220608";function dg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dg)}catch(e){console.error(e)}}dg(),cm.exports=ot;var Tf=cm.exports;const Kw=Nc(Tf),Yw=Zp({__proto__:null,default:Kw},[Tf]);var Ih=Tf;su.createRoot=Ih.createRoot,su.hydrateRoot=Ih.hydrateRoot;/**
 * @remix-run/router v1.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function he(){return he=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},he.apply(this,arguments)}var _e;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(_e||(_e={}));const Ch="popstate";function Gw(e){e===void 0&&(e={});function t(r,i){let{pathname:a,search:o,hash:s}=r.location;return Pa("",{pathname:a,search:o,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Sr(i)}return qw(t,n,null,e)}function G(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function wi(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Qw(){return Math.random().toString(36).substr(2,8)}function Th(e,t){return{usr:e.state,key:e.key,idx:t}}function Pa(e,t,n,r){return n===void 0&&(n=null),he({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?dn(t):t,{state:n,key:t&&t.key||r||Qw()})}function Sr(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function dn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function qw(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=_e.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(he({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function f(){s=_e.Pop;let I=c(),p=I==null?null:I-u;u=I,l&&l({action:s,location:_.location,delta:p})}function d(I,p){s=_e.Push;let h=Pa(_.location,I,p);n&&n(h,I),u=c()+1;let m=Th(h,u),k=_.createHref(h);try{o.pushState(m,"",k)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(k)}a&&l&&l({action:s,location:_.location,delta:1})}function g(I,p){s=_e.Replace;let h=Pa(_.location,I,p);n&&n(h,I),u=c();let m=Th(h,u),k=_.createHref(h);o.replaceState(m,"",k),a&&l&&l({action:s,location:_.location,delta:0})}function w(I){let p=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof I=="string"?I:Sr(I);return h=h.replace(/ $/,"%20"),G(p,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,p)}let _={get action(){return s},get location(){return e(i,o)},listen(I){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Ch,f),l=I,()=>{i.removeEventListener(Ch,f),l=null}},createHref(I){return t(i,I)},createURL:w,encodeLocation(I){let p=w(I);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:d,replace:g,go(I){return o.go(I)}};return _}var ce;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ce||(ce={}));const Xw=new Set(["lazy","caseSensitive","path","id","index","children"]);function Jw(e){return e.index===!0}function ec(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((i,a)=>{let o=[...n,a],s=typeof i.id=="string"?i.id:o.join("-");if(G(i.index!==!0||!i.children,"Cannot specify children on an index route"),G(!r[s],'Found a route id collision on id "'+s+`".  Route id's must be globally unique within Data Router usages`),Jw(i)){let l=he({},i,t(i),{id:s});return r[s]=l,l}else{let l=he({},i,t(i),{id:s,children:void 0});return r[s]=l,i.children&&(l.children=ec(i.children,t,o,r)),l}})}function qr(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?dn(t):t,i=Ii(r.pathname||"/",n);if(i==null)return null;let a=hg(e);e_(a);let o=null;for(let s=0;o==null&&s<a.length;++s){let l=d_(i);o=u_(a[s],l)}return o}function Zw(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],handle:n.handle}}function hg(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(a,o,s)=>{let l={relativePath:s===void 0?a.path||"":s,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};l.relativePath.startsWith("/")&&(G(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Zt([r,l.relativePath]),c=n.concat(l);a.children&&a.children.length>0&&(G(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),hg(a.children,t,c,u)),!(a.path==null&&!a.index)&&t.push({path:u,score:s_(u,a.index),routesMeta:c})};return e.forEach((a,o)=>{var s;if(a.path===""||!((s=a.path)!=null&&s.includes("?")))i(a,o);else for(let l of pg(a.path))i(a,o,l)}),t}function pg(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let o=pg(r.join("/")),s=[];return s.push(...o.map(l=>l===""?a:[a,l].join("/"))),i&&s.push(...o),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function e_(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:l_(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const t_=/^:[\w-]+$/,n_=3,r_=2,i_=1,a_=10,o_=-2,Ph=e=>e==="*";function s_(e,t){let n=e.split("/"),r=n.length;return n.some(Ph)&&(r+=o_),t&&(r+=r_),n.filter(i=>!Ph(i)).reduce((i,a)=>i+(t_.test(a)?n_:a===""?i_:a_),r)}function l_(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function u_(e,t){let{routesMeta:n}=e,r={},i="/",a=[];for(let o=0;o<n.length;++o){let s=n[o],l=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=c_({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=s.route;a.push({params:r,pathname:Zt([i,c.pathname]),pathnameBase:m_(Zt([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=Zt([i,c.pathnameBase]))}return a}function c_(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=f_(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,c,f)=>{let{paramName:d,isOptional:g}=c;if(d==="*"){let _=s[f]||"";o=a.slice(0,a.length-_.length).replace(/(.)\/+$/,"$1")}const w=s[f];return g&&!w?u[d]=void 0:u[d]=(w||"").replace(/%2F/g,"/"),u},{}),pathname:a,pathnameBase:o,pattern:e}}function f_(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),wi(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,l)=>(r.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function d_(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return wi(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Ii(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function h_(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?dn(e):e;return{pathname:n?n.startsWith("/")?n:p_(n,t):t,search:v_(r),hash:g_(i)}}function p_(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Kl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function mg(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Pf(e,t){let n=mg(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Rf(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=dn(e):(i=he({},e),G(!i.pathname||!i.pathname.includes("?"),Kl("?","pathname","search",i)),G(!i.pathname||!i.pathname.includes("#"),Kl("#","pathname","hash",i)),G(!i.search||!i.search.includes("#"),Kl("#","search","hash",i)));let a=e===""||i.pathname==="",o=a?"/":i.pathname,s;if(o==null)s=n;else{let f=t.length-1;if(!r&&o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),f-=1;i.pathname=d.join("/")}s=f>=0?t[f]:"/"}let l=h_(i,s),u=o&&o!=="/"&&o.endsWith("/"),c=(a||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Zt=e=>e.join("/").replace(/\/\/+/g,"/"),m_=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),v_=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,g_=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Of{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Nf(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const vg=["post","put","patch","delete"],y_=new Set(vg),w_=["get",...vg],__=new Set(w_),E_=new Set([301,302,303,307,308]),S_=new Set([307,308]),Yl={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},k_={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Hi={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Af=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,b_=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),gg="remix-router-transitions";function x_(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;G(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(e.mapRouteProperties)i=e.mapRouteProperties;else if(e.detectErrorBoundary){let y=e.detectErrorBoundary;i=E=>({hasErrorBoundary:y(E)})}else i=b_;let a={},o=ec(e.routes,i,void 0,a),s,l=e.basename||"/",u=e.unstable_dataStrategy||P_,c=he({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,unstable_skipActionErrorRevalidation:!1},e.future),f=null,d=new Set,g=null,w=null,_=null,I=e.hydrationData!=null,p=qr(o,e.history.location,l),h=null;if(p==null){let y=ft(404,{pathname:e.history.location.pathname}),{matches:E,route:x}=Fh(o);p=E,h={[x.id]:y}}let m,k=p.some(y=>y.route.lazy),C=p.some(y=>y.route.loader);if(k)m=!1;else if(!C)m=!0;else if(c.v7_partialHydration){let y=e.hydrationData?e.hydrationData.loaderData:null,E=e.hydrationData?e.hydrationData.errors:null,x=P=>P.route.loader?typeof P.route.loader=="function"&&P.route.loader.hydrate===!0?!1:y&&y[P.route.id]!==void 0||E&&E[P.route.id]!==void 0:!0;if(E){let P=p.findIndex(j=>E[j.route.id]!==void 0);m=p.slice(0,P+1).every(x)}else m=p.every(x)}else m=e.hydrationData!=null;let N,v={historyAction:e.history.action,location:e.history.location,matches:p,initialized:m,navigation:Yl,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||h,fetchers:new Map,blockers:new Map},O=_e.Pop,D=!1,A,X=!1,we=new Map,de=null,Pe=!1,wt=!1,mn=[],vn=[],R=new Map,B=0,V=-1,te=new Map,ne=new Set,_t=new Map,Je=new Map,Ze=new Set,$e=new Map,ut=new Map,gl=!1;function o0(){if(f=e.history.listen(y=>{let{action:E,location:x,delta:P}=y;if(gl){gl=!1;return}wi(ut.size===0||P!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let j=pd({currentLocation:v.location,nextLocation:x,historyAction:E});if(j&&P!=null){gl=!0,e.history.go(P*-1),ao(j,{state:"blocked",location:x,proceed(){ao(j,{state:"proceeding",proceed:void 0,reset:void 0,location:x}),e.history.go(P)},reset(){let K=new Map(v.blockers);K.set(j,Hi),et({blockers:K})}});return}return ir(E,x)}),n){$_(t,we);let y=()=>B_(t,we);t.addEventListener("pagehide",y),de=()=>t.removeEventListener("pagehide",y)}return v.initialized||ir(_e.Pop,v.location,{initialHydration:!0}),N}function s0(){f&&f(),de&&de(),d.clear(),A&&A.abort(),v.fetchers.forEach((y,E)=>io(E)),v.blockers.forEach((y,E)=>hd(E))}function l0(y){return d.add(y),()=>d.delete(y)}function et(y,E){E===void 0&&(E={}),v=he({},v,y);let x=[],P=[];c.v7_fetcherPersist&&v.fetchers.forEach((j,K)=>{j.state==="idle"&&(Ze.has(K)?P.push(K):x.push(K))}),[...d].forEach(j=>j(v,{deletedFetchers:P,unstable_viewTransitionOpts:E.viewTransitionOpts,unstable_flushSync:E.flushSync===!0})),c.v7_fetcherPersist&&(x.forEach(j=>v.fetchers.delete(j)),P.forEach(j=>io(j)))}function Pi(y,E,x){var P,j;let{flushSync:K}=x===void 0?{}:x,z=v.actionData!=null&&v.navigation.formMethod!=null&&bt(v.navigation.formMethod)&&v.navigation.state==="loading"&&((P=y.state)==null?void 0:P._isRedirect)!==!0,U;E.actionData?Object.keys(E.actionData).length>0?U=E.actionData:U=null:z?U=v.actionData:U=null;let Y=E.loaderData?jh(v.loaderData,E.loaderData,E.matches||[],E.errors):v.loaderData,W=v.blockers;W.size>0&&(W=new Map(W),W.forEach((H,ue)=>W.set(ue,Hi)));let Re=D===!0||v.navigation.formMethod!=null&&bt(v.navigation.formMethod)&&((j=y.state)==null?void 0:j._isRedirect)!==!0;s&&(o=s,s=void 0),Pe||O===_e.Pop||(O===_e.Push?e.history.push(y,y.state):O===_e.Replace&&e.history.replace(y,y.state));let Oe;if(O===_e.Pop){let H=we.get(v.location.pathname);H&&H.has(y.pathname)?Oe={currentLocation:v.location,nextLocation:y}:we.has(y.pathname)&&(Oe={currentLocation:y,nextLocation:v.location})}else if(X){let H=we.get(v.location.pathname);H?H.add(y.pathname):(H=new Set([y.pathname]),we.set(v.location.pathname,H)),Oe={currentLocation:v.location,nextLocation:y}}et(he({},E,{actionData:U,loaderData:Y,historyAction:O,location:y,initialized:!0,navigation:Yl,revalidation:"idle",restoreScrollPosition:vd(y,E.matches||v.matches),preventScrollReset:Re,blockers:W}),{viewTransitionOpts:Oe,flushSync:K===!0}),O=_e.Pop,D=!1,X=!1,Pe=!1,wt=!1,mn=[],vn=[]}async function sd(y,E){if(typeof y=="number"){e.history.go(y);return}let x=tc(v.location,v.matches,l,c.v7_prependBasename,y,c.v7_relativeSplatPath,E==null?void 0:E.fromRouteId,E==null?void 0:E.relative),{path:P,submission:j,error:K}=Rh(c.v7_normalizeFormMethod,!1,x,E),z=v.location,U=Pa(v.location,P,E&&E.state);U=he({},U,e.history.encodeLocation(U));let Y=E&&E.replace!=null?E.replace:void 0,W=_e.Push;Y===!0?W=_e.Replace:Y===!1||j!=null&&bt(j.formMethod)&&j.formAction===v.location.pathname+v.location.search&&(W=_e.Replace);let Re=E&&"preventScrollReset"in E?E.preventScrollReset===!0:void 0,Oe=(E&&E.unstable_flushSync)===!0,H=pd({currentLocation:z,nextLocation:U,historyAction:W});if(H){ao(H,{state:"blocked",location:U,proceed(){ao(H,{state:"proceeding",proceed:void 0,reset:void 0,location:U}),sd(y,E)},reset(){let ue=new Map(v.blockers);ue.set(H,Hi),et({blockers:ue})}});return}return await ir(W,U,{submission:j,pendingError:K,preventScrollReset:Re,replace:E&&E.replace,enableViewTransition:E&&E.unstable_viewTransition,flushSync:Oe})}function u0(){if(yl(),et({revalidation:"loading"}),v.navigation.state!=="submitting"){if(v.navigation.state==="idle"){ir(v.historyAction,v.location,{startUninterruptedRevalidation:!0});return}ir(O||v.historyAction,v.navigation.location,{overrideNavigation:v.navigation})}}async function ir(y,E,x){A&&A.abort(),A=null,O=y,Pe=(x&&x.startUninterruptedRevalidation)===!0,y0(v.location,v.matches),D=(x&&x.preventScrollReset)===!0,X=(x&&x.enableViewTransition)===!0;let P=s||o,j=x&&x.overrideNavigation,K=qr(P,E,l),z=(x&&x.flushSync)===!0;if(!K){let H=ft(404,{pathname:E.pathname}),{matches:ue,route:Ie}=Fh(P);wl(),Pi(E,{matches:ue,loaderData:{},errors:{[Ie.id]:H}},{flushSync:z});return}if(v.initialized&&!wt&&D_(v.location,E)&&!(x&&x.submission&&bt(x.submission.formMethod))){Pi(E,{matches:K},{flushSync:z});return}A=new AbortController;let U=jr(e.history,E,A.signal,x&&x.submission),Y;if(x&&x.pendingError)Y=[la(K).route.id,{type:ce.error,error:x.pendingError}];else if(x&&x.submission&&bt(x.submission.formMethod)){let H=await c0(U,E,x.submission,K,{replace:x.replace,flushSync:z});if(H.shortCircuited)return;Y=H.pendingActionResult,j=Gl(E,x.submission),z=!1,U=jr(e.history,U.url,U.signal)}let{shortCircuited:W,loaderData:Re,errors:Oe}=await f0(U,E,K,j,x&&x.submission,x&&x.fetcherSubmission,x&&x.replace,x&&x.initialHydration===!0,z,Y);W||(A=null,Pi(E,he({matches:K},Uh(Y),{loaderData:Re,errors:Oe})))}async function c0(y,E,x,P,j){j===void 0&&(j={}),yl();let K=F_(E,x);et({navigation:K},{flushSync:j.flushSync===!0});let z,U=rc(P,E);if(!U.route.action&&!U.route.lazy)z={type:ce.error,error:ft(405,{method:y.method,pathname:E.pathname,routeId:U.route.id})};else if(z=(await Oi("action",y,[U],P))[0],y.signal.aborted)return{shortCircuited:!0};if(dr(z)){let Y;return j&&j.replace!=null?Y=j.replace:Y=Lh(z.response.headers.get("Location"),new URL(y.url),l)===v.location.pathname+v.location.search,await Ri(y,z,{submission:x,replace:Y}),{shortCircuited:!0}}if(fr(z))throw ft(400,{type:"defer-action"});if(pt(z)){let Y=la(P,U.route.id);return(j&&j.replace)!==!0&&(O=_e.Push),{pendingActionResult:[Y.route.id,z]}}return{pendingActionResult:[U.route.id,z]}}async function f0(y,E,x,P,j,K,z,U,Y,W){let Re=P||Gl(E,j),Oe=j||K||Bh(Re),H=s||o,[ue,Ie]=Oh(e.history,v,x,Oe,E,c.v7_partialHydration&&U===!0,c.unstable_skipActionErrorRevalidation,wt,mn,vn,Ze,_t,ne,H,l,W);if(wl(J=>!(x&&x.some(Be=>Be.route.id===J))||ue&&ue.some(Be=>Be.route.id===J)),V=++B,ue.length===0&&Ie.length===0){let J=fd();return Pi(E,he({matches:x,loaderData:{},errors:W&&pt(W[1])?{[W[0]]:W[1].error}:null},Uh(W),J?{fetchers:new Map(v.fetchers)}:{}),{flushSync:Y}),{shortCircuited:!0}}if(!Pe&&(!c.v7_partialHydration||!U)){Ie.forEach(Be=>{let ct=v.fetchers.get(Be.key),Ne=Vi(void 0,ct?ct.data:void 0);v.fetchers.set(Be.key,Ne)});let J;W&&!pt(W[1])?J={[W[0]]:W[1].data}:v.actionData&&(Object.keys(v.actionData).length===0?J=null:J=v.actionData),et(he({navigation:Re},J!==void 0?{actionData:J}:{},Ie.length>0?{fetchers:new Map(v.fetchers)}:{}),{flushSync:Y})}Ie.forEach(J=>{R.has(J.key)&&yn(J.key),J.controller&&R.set(J.key,J.controller)});let Ai=()=>Ie.forEach(J=>yn(J.key));A&&A.signal.addEventListener("abort",Ai);let{loaderResults:wn,fetcherResults:Ar}=await ld(v.matches,x,ue,Ie,y);if(y.signal.aborted)return{shortCircuited:!0};A&&A.signal.removeEventListener("abort",Ai),Ie.forEach(J=>R.delete(J.key));let Lr=zh([...wn,...Ar]);if(Lr){if(Lr.idx>=ue.length){let J=Ie[Lr.idx-ue.length].key;ne.add(J)}return await Ri(y,Lr.result,{replace:z}),{shortCircuited:!0}}let{loaderData:Dr,errors:Nt}=Mh(v,x,ue,wn,W,Ie,Ar,$e);$e.forEach((J,Be)=>{J.subscribe(ct=>{(ct||J.done)&&$e.delete(Be)})}),c.v7_partialHydration&&U&&v.errors&&Object.entries(v.errors).filter(J=>{let[Be]=J;return!ue.some(ct=>ct.route.id===Be)}).forEach(J=>{let[Be,ct]=J;Nt=Object.assign(Nt||{},{[Be]:ct})});let oo=fd(),so=dd(V),lo=oo||so||Ie.length>0;return he({loaderData:Dr,errors:Nt},lo?{fetchers:new Map(v.fetchers)}:{})}function d0(y,E,x,P){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");R.has(y)&&yn(y);let j=(P&&P.unstable_flushSync)===!0,K=s||o,z=tc(v.location,v.matches,l,c.v7_prependBasename,x,c.v7_relativeSplatPath,E,P==null?void 0:P.relative),U=qr(K,z,l);if(!U){Ni(y,E,ft(404,{pathname:z}),{flushSync:j});return}let{path:Y,submission:W,error:Re}=Rh(c.v7_normalizeFormMethod,!0,z,P);if(Re){Ni(y,E,Re,{flushSync:j});return}let Oe=rc(U,Y);if(D=(P&&P.preventScrollReset)===!0,W&&bt(W.formMethod)){h0(y,E,Y,Oe,U,j,W);return}_t.set(y,{routeId:E,path:Y}),p0(y,E,Y,Oe,U,j,W)}async function h0(y,E,x,P,j,K,z){if(yl(),_t.delete(y),!P.route.action&&!P.route.lazy){let Ne=ft(405,{method:z.formMethod,pathname:x,routeId:E});Ni(y,E,Ne,{flushSync:K});return}let U=v.fetchers.get(y);gn(y,z_(z,U),{flushSync:K});let Y=new AbortController,W=jr(e.history,x,Y.signal,z);R.set(y,Y);let Re=B,H=(await Oi("action",W,[P],j))[0];if(W.signal.aborted){R.get(y)===Y&&R.delete(y);return}if(c.v7_fetcherPersist&&Ze.has(y)){if(dr(H)||pt(H)){gn(y,kn(void 0));return}}else{if(dr(H))if(R.delete(y),V>Re){gn(y,kn(void 0));return}else return ne.add(y),gn(y,Vi(z)),Ri(W,H,{fetcherSubmission:z});if(pt(H)){Ni(y,E,H.error);return}}if(fr(H))throw ft(400,{type:"defer-action"});let ue=v.navigation.location||v.location,Ie=jr(e.history,ue,Y.signal),Ai=s||o,wn=v.navigation.state!=="idle"?qr(Ai,v.navigation.location,l):v.matches;G(wn,"Didn't find any matches after fetcher action");let Ar=++B;te.set(y,Ar);let Lr=Vi(z,H.data);v.fetchers.set(y,Lr);let[Dr,Nt]=Oh(e.history,v,wn,z,ue,!1,c.unstable_skipActionErrorRevalidation,wt,mn,vn,Ze,_t,ne,Ai,l,[P.route.id,H]);Nt.filter(Ne=>Ne.key!==y).forEach(Ne=>{let Li=Ne.key,gd=v.fetchers.get(Li),_0=Vi(void 0,gd?gd.data:void 0);v.fetchers.set(Li,_0),R.has(Li)&&yn(Li),Ne.controller&&R.set(Li,Ne.controller)}),et({fetchers:new Map(v.fetchers)});let oo=()=>Nt.forEach(Ne=>yn(Ne.key));Y.signal.addEventListener("abort",oo);let{loaderResults:so,fetcherResults:lo}=await ld(v.matches,wn,Dr,Nt,Ie);if(Y.signal.aborted)return;Y.signal.removeEventListener("abort",oo),te.delete(y),R.delete(y),Nt.forEach(Ne=>R.delete(Ne.key));let J=zh([...so,...lo]);if(J){if(J.idx>=Dr.length){let Ne=Nt[J.idx-Dr.length].key;ne.add(Ne)}return Ri(Ie,J.result)}let{loaderData:Be,errors:ct}=Mh(v,v.matches,Dr,so,void 0,Nt,lo,$e);if(v.fetchers.has(y)){let Ne=kn(H.data);v.fetchers.set(y,Ne)}dd(Ar),v.navigation.state==="loading"&&Ar>V?(G(O,"Expected pending action"),A&&A.abort(),Pi(v.navigation.location,{matches:wn,loaderData:Be,errors:ct,fetchers:new Map(v.fetchers)})):(et({errors:ct,loaderData:jh(v.loaderData,Be,wn,ct),fetchers:new Map(v.fetchers)}),wt=!1)}async function p0(y,E,x,P,j,K,z){let U=v.fetchers.get(y);gn(y,Vi(z,U?U.data:void 0),{flushSync:K});let Y=new AbortController,W=jr(e.history,x,Y.signal);R.set(y,Y);let Re=B,H=(await Oi("loader",W,[P],j))[0];if(fr(H)&&(H=await Eg(H,W.signal,!0)||H),R.get(y)===Y&&R.delete(y),!W.signal.aborted){if(Ze.has(y)){gn(y,kn(void 0));return}if(dr(H))if(V>Re){gn(y,kn(void 0));return}else{ne.add(y),await Ri(W,H);return}if(pt(H)){Ni(y,E,H.error);return}G(!fr(H),"Unhandled fetcher deferred data"),gn(y,kn(H.data))}}async function Ri(y,E,x){let{submission:P,fetcherSubmission:j,replace:K}=x===void 0?{}:x;E.response.headers.has("X-Remix-Revalidate")&&(wt=!0);let z=E.response.headers.get("Location");G(z,"Expected a Location header on the redirect Response"),z=Lh(z,new URL(y.url),l);let U=Pa(v.location,z,{_isRedirect:!0});if(n){let ue=!1;if(E.response.headers.has("X-Remix-Reload-Document"))ue=!0;else if(Af.test(z)){const Ie=e.history.createURL(z);ue=Ie.origin!==t.location.origin||Ii(Ie.pathname,l)==null}if(ue){K?t.location.replace(z):t.location.assign(z);return}}A=null;let Y=K===!0?_e.Replace:_e.Push,{formMethod:W,formAction:Re,formEncType:Oe}=v.navigation;!P&&!j&&W&&Re&&Oe&&(P=Bh(v.navigation));let H=P||j;if(S_.has(E.response.status)&&H&&bt(H.formMethod))await ir(Y,U,{submission:he({},H,{formAction:z}),preventScrollReset:D});else{let ue=Gl(U,P);await ir(Y,U,{overrideNavigation:ue,fetcherSubmission:j,preventScrollReset:D})}}async function Oi(y,E,x,P){try{let j=await R_(u,y,E,x,P,a,i);return await Promise.all(j.map((K,z)=>{if(M_(K)){let U=K.result;return{type:ce.redirect,response:A_(U,E,x[z].route.id,P,l,c.v7_relativeSplatPath)}}return N_(K)}))}catch(j){return x.map(()=>({type:ce.error,error:j}))}}async function ld(y,E,x,P,j){let[K,...z]=await Promise.all([x.length?Oi("loader",j,x,E):[],...P.map(U=>{if(U.matches&&U.match&&U.controller){let Y=jr(e.history,U.path,U.controller.signal);return Oi("loader",Y,[U.match],U.matches).then(W=>W[0])}else return Promise.resolve({type:ce.error,error:ft(404,{pathname:U.path})})})]);return await Promise.all([$h(y,x,K,K.map(()=>j.signal),!1,v.loaderData),$h(y,P.map(U=>U.match),z,P.map(U=>U.controller?U.controller.signal:null),!0)]),{loaderResults:K,fetcherResults:z}}function yl(){wt=!0,mn.push(...wl()),_t.forEach((y,E)=>{R.has(E)&&(vn.push(E),yn(E))})}function gn(y,E,x){x===void 0&&(x={}),v.fetchers.set(y,E),et({fetchers:new Map(v.fetchers)},{flushSync:(x&&x.flushSync)===!0})}function Ni(y,E,x,P){P===void 0&&(P={});let j=la(v.matches,E);io(y),et({errors:{[j.route.id]:x},fetchers:new Map(v.fetchers)},{flushSync:(P&&P.flushSync)===!0})}function ud(y){return c.v7_fetcherPersist&&(Je.set(y,(Je.get(y)||0)+1),Ze.has(y)&&Ze.delete(y)),v.fetchers.get(y)||k_}function io(y){let E=v.fetchers.get(y);R.has(y)&&!(E&&E.state==="loading"&&te.has(y))&&yn(y),_t.delete(y),te.delete(y),ne.delete(y),Ze.delete(y),v.fetchers.delete(y)}function m0(y){if(c.v7_fetcherPersist){let E=(Je.get(y)||0)-1;E<=0?(Je.delete(y),Ze.add(y)):Je.set(y,E)}else io(y);et({fetchers:new Map(v.fetchers)})}function yn(y){let E=R.get(y);G(E,"Expected fetch controller: "+y),E.abort(),R.delete(y)}function cd(y){for(let E of y){let x=ud(E),P=kn(x.data);v.fetchers.set(E,P)}}function fd(){let y=[],E=!1;for(let x of ne){let P=v.fetchers.get(x);G(P,"Expected fetcher: "+x),P.state==="loading"&&(ne.delete(x),y.push(x),E=!0)}return cd(y),E}function dd(y){let E=[];for(let[x,P]of te)if(P<y){let j=v.fetchers.get(x);G(j,"Expected fetcher: "+x),j.state==="loading"&&(yn(x),te.delete(x),E.push(x))}return cd(E),E.length>0}function v0(y,E){let x=v.blockers.get(y)||Hi;return ut.get(y)!==E&&ut.set(y,E),x}function hd(y){v.blockers.delete(y),ut.delete(y)}function ao(y,E){let x=v.blockers.get(y)||Hi;G(x.state==="unblocked"&&E.state==="blocked"||x.state==="blocked"&&E.state==="blocked"||x.state==="blocked"&&E.state==="proceeding"||x.state==="blocked"&&E.state==="unblocked"||x.state==="proceeding"&&E.state==="unblocked","Invalid blocker state transition: "+x.state+" -> "+E.state);let P=new Map(v.blockers);P.set(y,E),et({blockers:P})}function pd(y){let{currentLocation:E,nextLocation:x,historyAction:P}=y;if(ut.size===0)return;ut.size>1&&wi(!1,"A router only supports one blocker at a time");let j=Array.from(ut.entries()),[K,z]=j[j.length-1],U=v.blockers.get(K);if(!(U&&U.state==="proceeding")&&z({currentLocation:E,nextLocation:x,historyAction:P}))return K}function wl(y){let E=[];return $e.forEach((x,P)=>{(!y||y(P))&&(x.cancel(),E.push(P),$e.delete(P))}),E}function g0(y,E,x){if(g=y,_=E,w=x||null,!I&&v.navigation===Yl){I=!0;let P=vd(v.location,v.matches);P!=null&&et({restoreScrollPosition:P})}return()=>{g=null,_=null,w=null}}function md(y,E){return w&&w(y,E.map(P=>Zw(P,v.loaderData)))||y.key}function y0(y,E){if(g&&_){let x=md(y,E);g[x]=_()}}function vd(y,E){if(g){let x=md(y,E),P=g[x];if(typeof P=="number")return P}return null}function w0(y){a={},s=ec(y,i,void 0,a)}return N={get basename(){return l},get future(){return c},get state(){return v},get routes(){return o},get window(){return t},initialize:o0,subscribe:l0,enableScrollRestoration:g0,navigate:sd,fetch:d0,revalidate:u0,createHref:y=>e.history.createHref(y),encodeLocation:y=>e.history.encodeLocation(y),getFetcher:ud,deleteFetcher:m0,dispose:s0,getBlocker:v0,deleteBlocker:hd,_internalFetchControllers:R,_internalActiveDeferreds:$e,_internalSetRoutes:w0},N}function I_(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function tc(e,t,n,r,i,a,o,s){let l,u;if(o){l=[];for(let f of t)if(l.push(f),f.route.id===o){u=f;break}}else l=t,u=t[t.length-1];let c=Rf(i||".",Pf(l,a),Ii(e.pathname,n)||e.pathname,s==="path");return i==null&&(c.search=e.search,c.hash=e.hash),(i==null||i===""||i===".")&&u&&u.route.index&&!Lf(c.search)&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(c.pathname=c.pathname==="/"?n:Zt([n,c.pathname])),Sr(c)}function Rh(e,t,n,r){if(!r||!I_(r))return{path:n};if(r.formMethod&&!U_(r.formMethod))return{path:n,error:ft(405,{method:r.formMethod})};let i=()=>({path:n,error:ft(400,{type:"invalid-body"})}),a=r.formMethod||"get",o=e?a.toUpperCase():a.toLowerCase(),s=wg(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!bt(o))return i();let d=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((g,w)=>{let[_,I]=w;return""+g+_+"="+I+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:s,formEncType:r.formEncType,formData:void 0,json:void 0,text:d}}}else if(r.formEncType==="application/json"){if(!bt(o))return i();try{let d=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:s,formEncType:r.formEncType,formData:void 0,json:d,text:void 0}}}catch{return i()}}}G(typeof FormData=="function","FormData is not available in this environment");let l,u;if(r.formData)l=nc(r.formData),u=r.formData;else if(r.body instanceof FormData)l=nc(r.body),u=r.body;else if(r.body instanceof URLSearchParams)l=r.body,u=Dh(l);else if(r.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(r.body),u=Dh(l)}catch{return i()}let c={formMethod:o,formAction:s,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(bt(c.formMethod))return{path:n,submission:c};let f=dn(n);return t&&f.search&&Lf(f.search)&&l.append("index",""),f.search="?"+l,{path:Sr(f),submission:c}}function C_(e,t){let n=e;if(t){let r=e.findIndex(i=>i.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function Oh(e,t,n,r,i,a,o,s,l,u,c,f,d,g,w,_){let I=_?pt(_[1])?_[1].error:_[1].data:void 0,p=e.createURL(t.location),h=e.createURL(i),m=_&&pt(_[1])?_[0]:void 0,k=m?C_(n,m):n,C=_?_[1].statusCode:void 0,N=o&&C&&C>=400,v=k.filter((D,A)=>{let{route:X}=D;if(X.lazy)return!0;if(X.loader==null)return!1;if(a)return typeof X.loader!="function"||X.loader.hydrate?!0:t.loaderData[X.id]===void 0&&(!t.errors||t.errors[X.id]===void 0);if(T_(t.loaderData,t.matches[A],D)||l.some(Pe=>Pe===D.route.id))return!0;let we=t.matches[A],de=D;return Nh(D,he({currentUrl:p,currentParams:we.params,nextUrl:h,nextParams:de.params},r,{actionResult:I,unstable_actionStatus:C,defaultShouldRevalidate:N?!1:s||p.pathname+p.search===h.pathname+h.search||p.search!==h.search||yg(we,de)}))}),O=[];return f.forEach((D,A)=>{if(a||!n.some(wt=>wt.route.id===D.routeId)||c.has(A))return;let X=qr(g,D.path,w);if(!X){O.push({key:A,routeId:D.routeId,path:D.path,matches:null,match:null,controller:null});return}let we=t.fetchers.get(A),de=rc(X,D.path),Pe=!1;d.has(A)?Pe=!1:u.includes(A)?Pe=!0:we&&we.state!=="idle"&&we.data===void 0?Pe=s:Pe=Nh(de,he({currentUrl:p,currentParams:t.matches[t.matches.length-1].params,nextUrl:h,nextParams:n[n.length-1].params},r,{actionResult:I,unstable_actionStatus:C,defaultShouldRevalidate:N?!1:s})),Pe&&O.push({key:A,routeId:D.routeId,path:D.path,matches:X,match:de,controller:new AbortController})}),[v,O]}function T_(e,t,n){let r=!t||n.route.id!==t.route.id,i=e[n.route.id]===void 0;return r||i}function yg(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function Nh(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function Ah(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let i=n[e.id];G(i,"No route found in manifest");let a={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";wi(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!Xw.has(o)&&(a[o]=r[o])}Object.assign(i,a),Object.assign(i,he({},t(i),{lazy:void 0}))}function P_(e){return Promise.all(e.matches.map(t=>t.resolve()))}async function R_(e,t,n,r,i,a,o,s){let l=r.reduce((f,d)=>f.add(d.route.id),new Set),u=new Set,c=await e({matches:i.map(f=>{let d=l.has(f.route.id);return he({},f,{shouldLoad:d,resolve:w=>(u.add(f.route.id),d?O_(t,n,f,a,o,w,s):Promise.resolve({type:ce.data,result:void 0}))})}),request:n,params:i[0].params,context:s});return i.forEach(f=>G(u.has(f.route.id),'`match.resolve()` was not called for route id "'+f.route.id+'". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.')),c.filter((f,d)=>l.has(i[d].route.id))}async function O_(e,t,n,r,i,a,o){let s,l,u=c=>{let f,d=new Promise((_,I)=>f=I);l=()=>f(),t.signal.addEventListener("abort",l);let g=_=>typeof c!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+e+'" [routeId: '+n.route.id+"]"))):c({request:t,params:n.params,context:o},..._!==void 0?[_]:[]),w;return a?w=a(_=>g(_)):w=(async()=>{try{return{type:"data",result:await g()}}catch(_){return{type:"error",result:_}}})(),Promise.race([w,d])};try{let c=n.route[e];if(n.route.lazy)if(c){let f,[d]=await Promise.all([u(c).catch(g=>{f=g}),Ah(n.route,i,r)]);if(f!==void 0)throw f;s=d}else if(await Ah(n.route,i,r),c=n.route[e],c)s=await u(c);else if(e==="action"){let f=new URL(t.url),d=f.pathname+f.search;throw ft(405,{method:t.method,pathname:d,routeId:n.route.id})}else return{type:ce.data,result:void 0};else if(c)s=await u(c);else{let f=new URL(t.url),d=f.pathname+f.search;throw ft(404,{pathname:d})}G(s.result!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(c){return{type:ce.error,result:c}}finally{l&&t.signal.removeEventListener("abort",l)}return s}async function N_(e){let{result:t,type:n,status:r}=e;if(_g(t)){let o;try{let s=t.headers.get("Content-Type");s&&/\bapplication\/json\b/.test(s)?t.body==null?o=null:o=await t.json():o=await t.text()}catch(s){return{type:ce.error,error:s}}return n===ce.error?{type:ce.error,error:new Of(t.status,t.statusText,o),statusCode:t.status,headers:t.headers}:{type:ce.data,data:o,statusCode:t.status,headers:t.headers}}if(n===ce.error)return{type:ce.error,error:t,statusCode:Nf(t)?t.status:r};if(j_(t)){var i,a;return{type:ce.deferred,deferredData:t,statusCode:(i=t.init)==null?void 0:i.status,headers:((a=t.init)==null?void 0:a.headers)&&new Headers(t.init.headers)}}return{type:ce.data,data:t,statusCode:r}}function A_(e,t,n,r,i,a){let o=e.headers.get("Location");if(G(o,"Redirects returned/thrown from loaders/actions must have a Location header"),!Af.test(o)){let s=r.slice(0,r.findIndex(l=>l.route.id===n)+1);o=tc(new URL(t.url),s,i,!0,o,a),e.headers.set("Location",o)}return e}function Lh(e,t,n){if(Af.test(e)){let r=e,i=r.startsWith("//")?new URL(t.protocol+r):new URL(r),a=Ii(i.pathname,n)!=null;if(i.origin===t.origin&&a)return i.pathname+i.search+i.hash}return e}function jr(e,t,n,r){let i=e.createURL(wg(t)).toString(),a={signal:n};if(r&&bt(r.formMethod)){let{formMethod:o,formEncType:s}=r;a.method=o.toUpperCase(),s==="application/json"?(a.headers=new Headers({"Content-Type":s}),a.body=JSON.stringify(r.json)):s==="text/plain"?a.body=r.text:s==="application/x-www-form-urlencoded"&&r.formData?a.body=nc(r.formData):a.body=r.formData}return new Request(i,a)}function nc(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function Dh(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function L_(e,t,n,r,i,a){let o={},s=null,l,u=!1,c={},f=r&&pt(r[1])?r[1].error:void 0;return n.forEach((d,g)=>{let w=t[g].route.id;if(G(!dr(d),"Cannot handle redirect results in processLoaderData"),pt(d)){let _=d.error;if(f!==void 0&&(_=f,f=void 0),s=s||{},a)s[w]=_;else{let I=la(e,w);s[I.route.id]==null&&(s[I.route.id]=_)}o[w]=void 0,u||(u=!0,l=Nf(d.error)?d.error.status:500),d.headers&&(c[w]=d.headers)}else fr(d)?(i.set(w,d.deferredData),o[w]=d.deferredData.data,d.statusCode!=null&&d.statusCode!==200&&!u&&(l=d.statusCode),d.headers&&(c[w]=d.headers)):(o[w]=d.data,d.statusCode&&d.statusCode!==200&&!u&&(l=d.statusCode),d.headers&&(c[w]=d.headers))}),f!==void 0&&r&&(s={[r[0]]:f},o[r[0]]=void 0),{loaderData:o,errors:s,statusCode:l||200,loaderHeaders:c}}function Mh(e,t,n,r,i,a,o,s){let{loaderData:l,errors:u}=L_(t,n,r,i,s,!1);for(let c=0;c<a.length;c++){let{key:f,match:d,controller:g}=a[c];G(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let w=o[c];if(!(g&&g.signal.aborted))if(pt(w)){let _=la(e.matches,d==null?void 0:d.route.id);u&&u[_.route.id]||(u=he({},u,{[_.route.id]:w.error})),e.fetchers.delete(f)}else if(dr(w))G(!1,"Unhandled fetcher revalidation redirect");else if(fr(w))G(!1,"Unhandled fetcher deferred data");else{let _=kn(w.data);e.fetchers.set(f,_)}}return{loaderData:l,errors:u}}function jh(e,t,n,r){let i=he({},t);for(let a of n){let o=a.route.id;if(t.hasOwnProperty(o)?t[o]!==void 0&&(i[o]=t[o]):e[o]!==void 0&&a.route.loader&&(i[o]=e[o]),r&&r.hasOwnProperty(o))break}return i}function Uh(e){return e?pt(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function la(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function Fh(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function ft(e,t){let{pathname:n,routeId:r,method:i,type:a}=t===void 0?{}:t,o="Unknown Server Error",s="Unknown @remix-run/router error";return e===400?(o="Bad Request",i&&n&&r?s="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":a==="defer-action"?s="defer() is not supported in actions":a==="invalid-body"&&(s="Unable to encode submission body")):e===403?(o="Forbidden",s='Route "'+r+'" does not match URL "'+n+'"'):e===404?(o="Not Found",s='No route matches URL "'+n+'"'):e===405&&(o="Method Not Allowed",i&&n&&r?s="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(s='Invalid request method "'+i.toUpperCase()+'"')),new Of(e||500,o,new Error(s),!0)}function zh(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(dr(n))return{result:n,idx:t}}}function wg(e){let t=typeof e=="string"?dn(e):e;return Sr(he({},t,{hash:""}))}function D_(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function M_(e){return _g(e.result)&&E_.has(e.result.status)}function fr(e){return e.type===ce.deferred}function pt(e){return e.type===ce.error}function dr(e){return(e&&e.type)===ce.redirect}function j_(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function _g(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function U_(e){return __.has(e.toLowerCase())}function bt(e){return y_.has(e.toLowerCase())}async function $h(e,t,n,r,i,a){for(let o=0;o<n.length;o++){let s=n[o],l=t[o];if(!l)continue;let u=e.find(f=>f.route.id===l.route.id),c=u!=null&&!yg(u,l)&&(a&&a[l.route.id])!==void 0;if(fr(s)&&(i||c)){let f=r[o];G(f,"Expected an AbortSignal for revalidating fetcher deferred result"),await Eg(s,f,i).then(d=>{d&&(n[o]=d||n[o])})}}}async function Eg(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:ce.data,data:e.deferredData.unwrappedData}}catch(i){return{type:ce.error,error:i}}return{type:ce.data,data:e.deferredData.data}}}function Lf(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function rc(e,t){let n=typeof t=="string"?dn(t).search:t.search;if(e[e.length-1].route.index&&Lf(n||""))return e[e.length-1];let r=mg(e);return r[r.length-1]}function Bh(e){let{formMethod:t,formAction:n,formEncType:r,text:i,formData:a,json:o}=e;if(!(!t||!n||!r)){if(i!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(a!=null)return{formMethod:t,formAction:n,formEncType:r,formData:a,json:void 0,text:void 0};if(o!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function Gl(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function F_(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function Vi(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function z_(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function kn(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function $_(e,t){try{let n=e.sessionStorage.getItem(gg);if(n){let r=JSON.parse(n);for(let[i,a]of Object.entries(r||{}))a&&Array.isArray(a)&&t.set(i,new Set(a||[]))}}catch{}}function B_(e,t){if(t.size>0){let n={};for(let[r,i]of t)n[r]=[...i];try{e.sessionStorage.setItem(gg,JSON.stringify(n))}catch(r){wi(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ra(){return Ra=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ra.apply(this,arguments)}const il=b.createContext(null),Sg=b.createContext(null),Rr=b.createContext(null),al=b.createContext(null),Zn=b.createContext({outlet:null,matches:[],isDataRoute:!1}),kg=b.createContext(null);function H_(e,t){let{relative:n}=t===void 0?{}:t;Ka()||G(!1);let{basename:r,navigator:i}=b.useContext(Rr),{hash:a,pathname:o,search:s}=xg(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Zt([r,o])),i.createHref({pathname:l,search:s,hash:a})}function Ka(){return b.useContext(al)!=null}function ol(){return Ka()||G(!1),b.useContext(al).location}function bg(e){b.useContext(Rr).static||b.useLayoutEffect(e)}function V_(){let{isDataRoute:e}=b.useContext(Zn);return e?iE():W_()}function W_(){Ka()||G(!1);let e=b.useContext(il),{basename:t,future:n,navigator:r}=b.useContext(Rr),{matches:i}=b.useContext(Zn),{pathname:a}=ol(),o=JSON.stringify(Pf(i,n.v7_relativeSplatPath)),s=b.useRef(!1);return bg(()=>{s.current=!0}),b.useCallback(function(u,c){if(c===void 0&&(c={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let f=Rf(u,JSON.parse(o),a,c.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Zt([t,f.pathname])),(c.replace?r.replace:r.push)(f,c.state,c)},[t,r,o,a,e])}const K_=b.createContext(null);function Y_(e){let t=b.useContext(Zn).outlet;return t&&b.createElement(K_.Provider,{value:e},t)}function xg(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=b.useContext(Rr),{matches:i}=b.useContext(Zn),{pathname:a}=ol(),o=JSON.stringify(Pf(i,r.v7_relativeSplatPath));return b.useMemo(()=>Rf(e,JSON.parse(o),a,n==="path"),[e,o,a,n])}function G_(e,t,n,r){Ka()||G(!1);let{navigator:i}=b.useContext(Rr),{matches:a}=b.useContext(Zn),o=a[a.length-1],s=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=ol(),c;if(t){var f;let I=typeof t=="string"?dn(t):t;l==="/"||(f=I.pathname)!=null&&f.startsWith(l)||G(!1),c=I}else c=u;let d=c.pathname||"/",g=d;if(l!=="/"){let I=l.replace(/^\//,"").split("/");g="/"+d.replace(/^\//,"").split("/").slice(I.length).join("/")}let w=qr(e,{pathname:g}),_=Z_(w&&w.map(I=>Object.assign({},I,{params:Object.assign({},s,I.params),pathname:Zt([l,i.encodeLocation?i.encodeLocation(I.pathname).pathname:I.pathname]),pathnameBase:I.pathnameBase==="/"?l:Zt([l,i.encodeLocation?i.encodeLocation(I.pathnameBase).pathname:I.pathnameBase])})),a,n,r);return t&&_?b.createElement(al.Provider,{value:{location:Ra({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:_e.Pop}},_):_}function Q_(){let e=rE(),t=Nf(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:i},n):null,null)}const q_=b.createElement(Q_,null);class X_ extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?b.createElement(Zn.Provider,{value:this.props.routeContext},b.createElement(kg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function J_(e){let{routeContext:t,match:n,children:r}=e,i=b.useContext(il);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(Zn.Provider,{value:t},r)}function Z_(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var a;if((a=n)!=null&&a.errors)e=n.matches;else return null}let o=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let c=o.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id])!==void 0);c>=0||G(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let f=o[c];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=c),f.route.id){let{loaderData:d,errors:g}=n,w=f.route.loader&&d[f.route.id]===void 0&&(!g||g[f.route.id]===void 0);if(f.route.lazy||w){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,f,d)=>{let g,w=!1,_=null,I=null;n&&(g=s&&f.route.id?s[f.route.id]:void 0,_=f.route.errorElement||q_,l&&(u<0&&d===0?(aE("route-fallback",!1),w=!0,I=null):u===d&&(w=!0,I=f.route.hydrateFallbackElement||null)));let p=t.concat(o.slice(0,d+1)),h=()=>{let m;return g?m=_:w?m=I:f.route.Component?m=b.createElement(f.route.Component,null):f.route.element?m=f.route.element:m=c,b.createElement(J_,{match:f,routeContext:{outlet:c,matches:p,isDataRoute:n!=null},children:m})};return n&&(f.route.ErrorBoundary||f.route.errorElement||d===0)?b.createElement(X_,{location:n.location,revalidation:n.revalidation,component:_,error:g,children:h(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):h()},null)}var Ig=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Ig||{}),_i=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(_i||{});function eE(e){let t=b.useContext(il);return t||G(!1),t}function Cg(e){let t=b.useContext(Sg);return t||G(!1),t}function tE(e){let t=b.useContext(Zn);return t||G(!1),t}function Df(e){let t=tE(),n=t.matches[t.matches.length-1];return n.route.id||G(!1),n.route.id}function nE(){let e=Cg(_i.UseLoaderData),t=Df(_i.UseLoaderData);if(e.errors&&e.errors[t]!=null){console.error("You cannot `useLoaderData` in an errorElement (routeId: "+t+")");return}return e.loaderData[t]}function rE(){var e;let t=b.useContext(kg),n=Cg(_i.UseRouteError),r=Df(_i.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function iE(){let{router:e}=eE(Ig.UseNavigateStable),t=Df(_i.UseNavigateStable),n=b.useRef(!1);return bg(()=>{n.current=!0}),b.useCallback(function(i,a){a===void 0&&(a={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Ra({fromRouteId:t},a)))},[e,t])}const Hh={};function aE(e,t,n){!t&&!Hh[e]&&(Hh[e]=!0)}function oE(e){return Y_(e.context)}function sE(e){let{basename:t="/",children:n=null,location:r,navigationType:i=_e.Pop,navigator:a,static:o=!1,future:s}=e;Ka()&&G(!1);let l=t.replace(/^\/*/,"/"),u=b.useMemo(()=>({basename:l,navigator:a,static:o,future:Ra({v7_relativeSplatPath:!1},s)}),[l,s,a,o]);typeof r=="string"&&(r=dn(r));let{pathname:c="/",search:f="",hash:d="",state:g=null,key:w="default"}=r,_=b.useMemo(()=>{let I=Ii(c,l);return I==null?null:{location:{pathname:I,search:f,hash:d,state:g,key:w},navigationType:i}},[l,c,f,d,g,w,i]);return _==null?null:b.createElement(Rr.Provider,{value:u},b.createElement(al.Provider,{children:n,value:_}))}new Promise(()=>{});function lE(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:b.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:b.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:b.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oa(){return Oa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Oa.apply(this,arguments)}function uE(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function cE(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function fE(e,t){return e.button===0&&(!t||t==="_self")&&!cE(e)}const dE=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],hE="6";try{window.__reactRouterVersion=hE}catch{}function pE(e,t){return x_({basename:t==null?void 0:t.basename,future:Oa({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:Gw({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||mE(),routes:e,mapRouteProperties:lE,unstable_dataStrategy:t==null?void 0:t.unstable_dataStrategy,window:t==null?void 0:t.window}).initialize()}function mE(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Oa({},t,{errors:vE(t.errors)})),t}function vE(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,i]of t)if(i&&i.__type==="RouteErrorResponse")n[r]=new Of(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let a=window[i.__subType];if(typeof a=="function")try{let o=new a(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let a=new Error(i.message);a.stack="",n[r]=a}}else n[r]=i;return n}const gE=b.createContext({isTransitioning:!1}),yE=b.createContext(new Map),wE="startTransition",Vh=M0[wE],_E="flushSync",Wh=Yw[_E];function EE(e){Vh?Vh(e):e()}function Wi(e){Wh?Wh(e):e()}let SE=class{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}};function kE(e){let{fallbackElement:t,router:n,future:r}=e,[i,a]=b.useState(n.state),[o,s]=b.useState(),[l,u]=b.useState({isTransitioning:!1}),[c,f]=b.useState(),[d,g]=b.useState(),[w,_]=b.useState(),I=b.useRef(new Map),{v7_startTransition:p}=r||{},h=b.useCallback(v=>{p?EE(v):v()},[p]),m=b.useCallback((v,O)=>{let{deletedFetchers:D,unstable_flushSync:A,unstable_viewTransitionOpts:X}=O;D.forEach(de=>I.current.delete(de)),v.fetchers.forEach((de,Pe)=>{de.data!==void 0&&I.current.set(Pe,de.data)});let we=n.window==null||typeof n.window.document.startViewTransition!="function";if(!X||we){A?Wi(()=>a(v)):h(()=>a(v));return}if(A){Wi(()=>{d&&(c&&c.resolve(),d.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:X.currentLocation,nextLocation:X.nextLocation})});let de=n.window.document.startViewTransition(()=>{Wi(()=>a(v))});de.finished.finally(()=>{Wi(()=>{f(void 0),g(void 0),s(void 0),u({isTransitioning:!1})})}),Wi(()=>g(de));return}d?(c&&c.resolve(),d.skipTransition(),_({state:v,currentLocation:X.currentLocation,nextLocation:X.nextLocation})):(s(v),u({isTransitioning:!0,flushSync:!1,currentLocation:X.currentLocation,nextLocation:X.nextLocation}))},[n.window,d,c,I,h]);b.useLayoutEffect(()=>n.subscribe(m),[n,m]),b.useEffect(()=>{l.isTransitioning&&!l.flushSync&&f(new SE)},[l]),b.useEffect(()=>{if(c&&o&&n.window){let v=o,O=c.promise,D=n.window.document.startViewTransition(async()=>{h(()=>a(v)),await O});D.finished.finally(()=>{f(void 0),g(void 0),s(void 0),u({isTransitioning:!1})}),g(D)}},[h,o,c,n.window]),b.useEffect(()=>{c&&o&&i.location.key===o.location.key&&c.resolve()},[c,d,i.location,o]),b.useEffect(()=>{!l.isTransitioning&&w&&(s(w.state),u({isTransitioning:!0,flushSync:!1,currentLocation:w.currentLocation,nextLocation:w.nextLocation}),_(void 0))},[l.isTransitioning,w]),b.useEffect(()=>{},[]);let k=b.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:v=>n.navigate(v),push:(v,O,D)=>n.navigate(v,{state:O,preventScrollReset:D==null?void 0:D.preventScrollReset}),replace:(v,O,D)=>n.navigate(v,{replace:!0,state:O,preventScrollReset:D==null?void 0:D.preventScrollReset})}),[n]),C=n.basename||"/",N=b.useMemo(()=>({router:n,navigator:k,static:!1,basename:C}),[n,k,C]);return b.createElement(b.Fragment,null,b.createElement(il.Provider,{value:N},b.createElement(Sg.Provider,{value:i},b.createElement(yE.Provider,{value:I.current},b.createElement(gE.Provider,{value:l},b.createElement(sE,{basename:C,location:i.location,navigationType:i.historyAction,navigator:k,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},i.initialized||n.future.v7_partialHydration?b.createElement(bE,{routes:n.routes,future:n.future,state:i}):t))))),null)}function bE(e){let{routes:t,future:n,state:r}=e;return G_(t,void 0,r,n)}const xE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",IE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,It=b.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:a,replace:o,state:s,target:l,to:u,preventScrollReset:c,unstable_viewTransition:f}=t,d=uE(t,dE),{basename:g}=b.useContext(Rr),w,_=!1;if(typeof u=="string"&&IE.test(u)&&(w=u,xE))try{let m=new URL(window.location.href),k=u.startsWith("//")?new URL(m.protocol+u):new URL(u),C=Ii(k.pathname,g);k.origin===m.origin&&C!=null?u=C+k.search+k.hash:_=!0}catch{}let I=H_(u,{relative:i}),p=CE(u,{replace:o,state:s,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:f});function h(m){r&&r(m),m.defaultPrevented||p(m)}return b.createElement("a",Oa({},d,{href:w||I,onClick:_||a?r:h,ref:n,target:l}))});var Kh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Kh||(Kh={}));var Yh;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Yh||(Yh={}));function CE(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:o,unstable_viewTransition:s}=t===void 0?{}:t,l=V_(),u=ol(),c=xg(e,{relative:o});return b.useCallback(f=>{if(fE(f,n)){f.preventDefault();let d=r!==void 0?r:Sr(u)===Sr(c);l(e,{replace:d,state:i,preventScrollReset:a,relative:o,unstable_viewTransition:s})}},[u,l,c,r,i,n,e,a,o,s])}const TE="/react-ecommerce-website/assets/Logo-D1qizes3.svg";var Gh={};/**
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
 */const Tg=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},PE=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=e[n++];t[r++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=e[n++],o=e[n++],s=e[n++],l=((i&7)<<18|(a&63)<<12|(o&63)<<6|s&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const a=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(a&63)<<6|o&63)}}return t.join("")},Pg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const a=e[i],o=i+1<e.length,s=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=a>>2,f=(a&3)<<4|s>>4;let d=(s&15)<<2|u>>6,g=u&63;l||(g=64,o||(d=64)),r.push(n[c],n[f],n[d],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Tg(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):PE(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const a=n[e.charAt(i++)],s=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,a==null||s==null||u==null||f==null)throw new RE;const d=a<<2|s>>4;if(r.push(d),u!==64){const g=s<<4&240|u>>2;if(r.push(g),f!==64){const w=u<<6&192|f;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class RE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const OE=function(e){const t=Tg(e);return Pg.encodeByteArray(t,!0)},Rg=function(e){return OE(e).replace(/\./g,"")},Og=function(e){try{return Pg.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
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
 */function NE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const AE=()=>NE().__FIREBASE_DEFAULTS__,LE=()=>{if(typeof process>"u"||typeof Gh>"u")return;const e=Gh.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},DE=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Og(e[1]);return t&&JSON.parse(t)},Mf=()=>{try{return AE()||LE()||DE()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},ME=e=>{var t,n;return(n=(t=Mf())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Ng=()=>{var e;return(e=Mf())===null||e===void 0?void 0:e.config},Ag=e=>{var t;return(t=Mf())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class jE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function UE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ze())}function FE(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function zE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $E(){const e=ze();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function BE(){try{return typeof indexedDB=="object"}catch{return!1}}function HE(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var a;t(((a=i.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){t(n)}})}/**
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
 */const VE="FirebaseError";class er extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=VE,Object.setPrototypeOf(this,er.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ya.prototype.create)}}class Ya{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,a=this.errors[t],o=a?WE(a,r):"Error",s=`${this.serviceName}: ${o} (${i}).`;return new er(i,s,r)}}function WE(e,t){return e.replace(KE,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const KE=/\{\$([^}]+)}/g;function YE(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Ps(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const a=e[i],o=t[i];if(Qh(a)&&Qh(o)){if(!Ps(a,o))return!1}else if(a!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Qh(e){return e!==null&&typeof e=="object"}/**
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
 */function Ga(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function qi(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,a]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(a)}}),t}function Xi(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function GE(e,t){const n=new QE(e,t);return n.subscribe.bind(n)}class QE{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");qE(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Ql),i.error===void 0&&(i.error=Ql),i.complete===void 0&&(i.complete=Ql);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),a}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qE(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Ql(){}/**
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
 */function hn(e){return e&&e._delegate?e._delegate:e}class Ei{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const sr="[DEFAULT]";/**
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
 */class XE{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new jE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(i)return null;throw a}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(ZE(t))try{this.getOrInitializeService({instanceIdentifier:sr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:i});r.resolve(a)}catch{}}}}clearInstance(t=sr){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=sr){return this.instances.has(t)}getOptions(t=sr){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[a,o]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(a);r===s&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),a=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;a.add(t),this.onInitCallbacks.set(i,a);const o=this.instances.get(i);return o&&t(o,i),()=>{a.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:JE(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=sr){return this.component?this.component.multipleInstances?t:sr:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function JE(e){return e===sr?void 0:e}function ZE(e){return e.instantiationMode==="EAGER"}/**
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
 */class eS{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new XE(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var re;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(re||(re={}));const tS={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},nS=re.INFO,rS={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},iS=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=rS[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Lg{constructor(t){this.name=t,this._logLevel=nS,this._logHandler=iS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in re))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?tS[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...t),this._logHandler(this,re.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...t),this._logHandler(this,re.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,re.INFO,...t),this._logHandler(this,re.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,re.WARN,...t),this._logHandler(this,re.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...t),this._logHandler(this,re.ERROR,...t)}}const aS=(e,t)=>t.some(n=>e instanceof n);let qh,Xh;function oS(){return qh||(qh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sS(){return Xh||(Xh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dg=new WeakMap,ic=new WeakMap,Mg=new WeakMap,ql=new WeakMap,jf=new WeakMap;function lS(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",a),e.removeEventListener("error",o)},a=()=>{n(Hn(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",a),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Dg.set(n,e)}).catch(()=>{}),jf.set(t,e),t}function uS(e){if(ic.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",o),e.removeEventListener("abort",o)},a=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",a),e.addEventListener("error",o),e.addEventListener("abort",o)});ic.set(e,t)}let ac={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ic.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Mg.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Hn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function cS(e){ac=e(ac)}function fS(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Xl(this),t,...n);return Mg.set(r,t.sort?t.sort():[t]),Hn(r)}:sS().includes(e)?function(...t){return e.apply(Xl(this),t),Hn(Dg.get(this))}:function(...t){return Hn(e.apply(Xl(this),t))}}function dS(e){return typeof e=="function"?fS(e):(e instanceof IDBTransaction&&uS(e),aS(e,oS())?new Proxy(e,ac):e)}function Hn(e){if(e instanceof IDBRequest)return lS(e);if(ql.has(e))return ql.get(e);const t=dS(e);return t!==e&&(ql.set(e,t),jf.set(t,e)),t}const Xl=e=>jf.get(e);function hS(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){const o=indexedDB.open(e,t),s=Hn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Hn(o.result),l.oldVersion,l.newVersion,Hn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),s.then(l=>{a&&l.addEventListener("close",()=>a()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),s}const pS=["get","getKey","getAll","getAllKeys","count"],mS=["put","add","delete","clear"],Jl=new Map;function Jh(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Jl.get(t))return Jl.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=mS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||pS.includes(n)))return;const a=async function(o,...s){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(s.shift())),(await Promise.all([u[n](...s),i&&l.done]))[0]};return Jl.set(t,a),a}cS(e=>({...e,get:(t,n,r)=>Jh(t,n)||e.get(t,n,r),has:(t,n)=>!!Jh(t,n)||e.has(t,n)}));/**
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
 */class vS{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(gS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function gS(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const oc="@firebase/app",Zh="0.10.5";/**
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
 */const kr=new Lg("@firebase/app"),yS="@firebase/app-compat",wS="@firebase/analytics-compat",_S="@firebase/analytics",ES="@firebase/app-check-compat",SS="@firebase/app-check",kS="@firebase/auth",bS="@firebase/auth-compat",xS="@firebase/database",IS="@firebase/database-compat",CS="@firebase/functions",TS="@firebase/functions-compat",PS="@firebase/installations",RS="@firebase/installations-compat",OS="@firebase/messaging",NS="@firebase/messaging-compat",AS="@firebase/performance",LS="@firebase/performance-compat",DS="@firebase/remote-config",MS="@firebase/remote-config-compat",jS="@firebase/storage",US="@firebase/storage-compat",FS="@firebase/firestore",zS="@firebase/vertexai-preview",$S="@firebase/firestore-compat",BS="firebase",HS="10.12.2";/**
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
 */const sc="[DEFAULT]",VS={[oc]:"fire-core",[yS]:"fire-core-compat",[_S]:"fire-analytics",[wS]:"fire-analytics-compat",[SS]:"fire-app-check",[ES]:"fire-app-check-compat",[kS]:"fire-auth",[bS]:"fire-auth-compat",[xS]:"fire-rtdb",[IS]:"fire-rtdb-compat",[CS]:"fire-fn",[TS]:"fire-fn-compat",[PS]:"fire-iid",[RS]:"fire-iid-compat",[OS]:"fire-fcm",[NS]:"fire-fcm-compat",[AS]:"fire-perf",[LS]:"fire-perf-compat",[DS]:"fire-rc",[MS]:"fire-rc-compat",[jS]:"fire-gcs",[US]:"fire-gcs-compat",[FS]:"fire-fst",[$S]:"fire-fst-compat",[zS]:"fire-vertex","fire-js":"fire-js",[BS]:"fire-js-all"};/**
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
 */const Rs=new Map,WS=new Map,lc=new Map;function ep(e,t){try{e.container.addComponent(t)}catch(n){kr.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Na(e){const t=e.name;if(lc.has(t))return kr.debug(`There were multiple attempts to register component ${t}.`),!1;lc.set(t,e);for(const n of Rs.values())ep(n,e);for(const n of WS.values())ep(n,e);return!0}function jg(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function jt(e){return e.settings!==void 0}/**
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
 */const KS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Vn=new Ya("app","Firebase",KS);/**
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
 */class YS{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ei("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Vn.create("app-deleted",{appName:this._name})}}/**
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
 */const Qa=HS;function Ug(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:sc,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Vn.create("bad-app-name",{appName:String(i)});if(n||(n=Ng()),!n)throw Vn.create("no-options");const a=Rs.get(i);if(a){if(Ps(n,a.options)&&Ps(r,a.config))return a;throw Vn.create("duplicate-app",{appName:i})}const o=new eS(i);for(const l of lc.values())o.addComponent(l);const s=new YS(n,r,o);return Rs.set(i,s),s}function GS(e=sc){const t=Rs.get(e);if(!t&&e===sc&&Ng())return Ug();if(!t)throw Vn.create("no-app",{appName:e});return t}function si(e,t,n){var r;let i=(r=VS[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){const s=[`Unable to register library "${i}" with version "${t}":`];a&&s.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&o&&s.push("and"),o&&s.push(`version name "${t}" contains illegal characters (whitespace or "/")`),kr.warn(s.join(" "));return}Na(new Ei(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const QS="firebase-heartbeat-database",qS=1,Aa="firebase-heartbeat-store";let Zl=null;function Fg(){return Zl||(Zl=hS(QS,qS,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Aa)}catch(n){console.warn(n)}}}}).catch(e=>{throw Vn.create("idb-open",{originalErrorMessage:e.message})})),Zl}async function XS(e){try{const n=(await Fg()).transaction(Aa),r=await n.objectStore(Aa).get(zg(e));return await n.done,r}catch(t){if(t instanceof er)kr.warn(t.message);else{const n=Vn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});kr.warn(n.message)}}}async function tp(e,t){try{const r=(await Fg()).transaction(Aa,"readwrite");await r.objectStore(Aa).put(t,zg(e)),await r.done}catch(n){if(n instanceof er)kr.warn(n.message);else{const r=Vn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});kr.warn(r.message)}}}function zg(e){return`${e.name}!${e.options.appId}`}/**
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
 */const JS=1024,ZS=30*24*60*60*1e3;class ek{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new nk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=np();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(o=>o.date===a)))return this._heartbeatsCache.heartbeats.push({date:a,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const s=new Date(o.date).valueOf();return Date.now()-s<=ZS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=np(),{heartbeatsToSend:r,unsentEntries:i}=tk(this._heartbeatsCache.heartbeats),a=Rg(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}}function np(){return new Date().toISOString().substring(0,10)}function tk(e,t=JS){const n=[];let r=e.slice();for(const i of e){const a=n.find(o=>o.agent===i.agent);if(a){if(a.dates.push(i.date),rp(n)>t){a.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),rp(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class nk{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return BE()?HE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await XS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return tp(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return tp(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function rp(e){return Rg(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function rk(e){Na(new Ei("platform-logger",t=>new vS(t),"PRIVATE")),Na(new Ei("heartbeat",t=>new ek(t),"PRIVATE")),si(oc,Zh,e),si(oc,Zh,"esm2017"),si("fire-js","")}rk("");function Uf(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function $g(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ik=$g,Bg=new Ya("auth","Firebase",$g());/**
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
 */const Os=new Lg("@firebase/auth");function ak(e,...t){Os.logLevel<=re.WARN&&Os.warn(`Auth (${Qa}): ${e}`,...t)}function qo(e,...t){Os.logLevel<=re.ERROR&&Os.error(`Auth (${Qa}): ${e}`,...t)}/**
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
 */function Ot(e,...t){throw Ff(e,...t)}function $t(e,...t){return Ff(e,...t)}function Hg(e,t,n){const r=Object.assign(Object.assign({},ik()),{[t]:n});return new Ya("auth","Firebase",r).create(t,{appName:e.name})}function en(e){return Hg(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ff(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Bg.create(e,...t)}function $(e,t,...n){if(!e)throw Ff(t,...n)}function Qt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw qo(t),new Error(t)}function on(e,t){e||Qt(t)}/**
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
 */function uc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function ok(){return ip()==="http:"||ip()==="https:"}function ip(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function sk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ok()||FE()||"connection"in navigator)?navigator.onLine:!0}function lk(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class qa{constructor(t,n){this.shortDelay=t,this.longDelay=n,on(n>t,"Short delay should be less than long delay!"),this.isMobile=UE()||zE()}get(){return sk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function zf(e,t){on(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class Vg{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Qt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Qt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Qt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const uk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ck=new qa(3e4,6e4);function tr(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function nr(e,t,n,r,i={}){return Wg(e,i,async()=>{let a={},o={};r&&(t==="GET"?o=r:a={body:JSON.stringify(r)});const s=Ga(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),Vg.fetch()(Kg(e,e.config.apiHost,n,s),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},a))})}async function Wg(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},uk),t);try{const i=new dk(e),a=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await a.json();if("needConfirmation"in o)throw Co(e,"account-exists-with-different-credential",o);if(a.ok&&!("errorMessage"in o))return o;{const s=a.ok?o.errorMessage:o.error.message,[l,u]=s.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Co(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Co(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw Co(e,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Hg(e,c,u);Ot(e,c)}}catch(i){if(i instanceof er)throw i;Ot(e,"network-request-failed",{message:String(i)})}}async function Xa(e,t,n,r,i={}){const a=await nr(e,t,n,r,i);return"mfaPendingCredential"in a&&Ot(e,"multi-factor-auth-required",{_serverResponse:a}),a}function Kg(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?zf(e.config,i):`${e.config.apiScheme}://${i}`}function fk(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class dk{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r($t(this.auth,"network-request-failed")),ck.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Co(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=$t(e,t,r);return i.customData._tokenResponse=n,i}function ap(e){return e!==void 0&&e.enterprise!==void 0}class hk{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return fk(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function pk(e,t){return nr(e,"GET","/v2/recaptchaConfig",tr(e,t))}/**
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
 */async function mk(e,t){return nr(e,"POST","/v1/accounts:delete",t)}async function Yg(e,t){return nr(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function ua(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function vk(e,t=!1){const n=hn(e),r=await n.getIdToken(t),i=$f(r);$(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,o=a==null?void 0:a.sign_in_provider;return{claims:i,token:r,authTime:ua(eu(i.auth_time)),issuedAtTime:ua(eu(i.iat)),expirationTime:ua(eu(i.exp)),signInProvider:o||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function eu(e){return Number(e)*1e3}function $f(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return qo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Og(n);return i?JSON.parse(i):(qo("Failed to decode base64 JWT payload"),null)}catch(i){return qo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function op(e){const t=$f(e);return $(t,"internal-error"),$(typeof t.exp<"u","internal-error"),$(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function La(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof er&&gk(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function gk({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class yk{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class cc{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ua(this.lastLoginAt),this.creationTime=ua(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ns(e){var t;const n=e.auth,r=await e.getIdToken(),i=await La(e,Yg(n,{idToken:r}));$(i==null?void 0:i.users.length,n,"internal-error");const a=i.users[0];e._notifyReloadListener(a);const o=!((t=a.providerUserInfo)===null||t===void 0)&&t.length?Gg(a.providerUserInfo):[],s=_k(e.providerData,o),l=e.isAnonymous,u=!(e.email&&a.passwordHash)&&!(s!=null&&s.length),c=l?u:!1,f={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:s,metadata:new cc(a.createdAt,a.lastLoginAt),isAnonymous:c};Object.assign(e,f)}async function wk(e){const t=hn(e);await Ns(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function _k(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Gg(e){return e.map(t=>{var{providerId:n}=t,r=Uf(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Ek(e,t){const n=await Wg(e,{},async()=>{const r=Ga({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:a}=e.config,o=Kg(e,i,"/v1/token",`key=${a}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",Vg.fetch()(o,{method:"POST",headers:s,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Sk(e,t){return nr(e,"POST","/v2/accounts:revokeToken",tr(e,t))}/**
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
 */class li{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){$(t.idToken,"internal-error"),$(typeof t.idToken<"u","internal-error"),$(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):op(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){$(t.length!==0,"internal-error");const n=op(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:($(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:a}=await Ek(t,n);this.updateTokensAndExpiration(r,i,Number(a))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:a}=n,o=new li;return r&&($(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&($(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),a&&($(typeof a=="number","internal-error",{appName:t}),o.expirationTime=a),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new li,this.toJSON())}_performRefresh(){return Qt("not implemented")}}/**
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
 */function En(e,t){$(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class qt{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,a=Uf(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new yk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new cc(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(t){const n=await La(this,this.stsTokenManager.getToken(this.auth,t));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return vk(this,t)}reload(){return wk(this)}_assign(t){this!==t&&($(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new qt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Ns(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(jt(this.auth.app))return Promise.reject(en(this.auth));const t=await this.getIdToken();return await La(this,mk(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,a,o,s,l,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(a=n.phoneNumber)!==null&&a!==void 0?a:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(s=n.tenantId)!==null&&s!==void 0?s:void 0,I=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:k,isAnonymous:C,providerData:N,stsTokenManager:v}=n;$(m&&v,t,"internal-error");const O=li.fromJSON(this.name,v);$(typeof m=="string",t,"internal-error"),En(f,t.name),En(d,t.name),$(typeof k=="boolean",t,"internal-error"),$(typeof C=="boolean",t,"internal-error"),En(g,t.name),En(w,t.name),En(_,t.name),En(I,t.name),En(p,t.name),En(h,t.name);const D=new qt({uid:m,auth:t,email:d,emailVerified:k,displayName:f,isAnonymous:C,photoURL:w,phoneNumber:g,tenantId:_,stsTokenManager:O,createdAt:p,lastLoginAt:h});return N&&Array.isArray(N)&&(D.providerData=N.map(A=>Object.assign({},A))),I&&(D._redirectEventId=I),D}static async _fromIdTokenResponse(t,n,r=!1){const i=new li;i.updateFromServerResponse(n);const a=new qt({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Ns(a),a}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];$(i.localId!==void 0,"internal-error");const a=i.providerUserInfo!==void 0?Gg(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(a!=null&&a.length),s=new li;s.updateFromIdToken(r);const l=new qt({uid:i.localId,auth:t,stsTokenManager:s,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new cc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(a!=null&&a.length)};return Object.assign(l,u),l}}/**
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
 */const sp=new Map;function Xt(e){on(e instanceof Function,"Expected a class definition");let t=sp.get(e);return t?(on(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,sp.set(e,t),t)}/**
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
 */class Qg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Qg.type="NONE";const lp=Qg;/**
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
 */function Xo(e,t,n){return`firebase:${e}:${t}:${n}`}class ui{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:a}=this.auth;this.fullUserKey=Xo(this.userKey,i.apiKey,a),this.fullPersistenceKey=Xo("persistence",i.apiKey,a),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?qt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new ui(Xt(lp),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let a=i[0]||Xt(lp);const o=Xo(r,t.config.apiKey,t.name);let s=null;for(const u of n)try{const c=await u._get(o);if(c){const f=qt._fromJSON(t,c);u!==a&&(s=f),a=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!a._shouldAllowMigration||!l.length?new ui(a,t,r):(a=l[0],s&&await a._set(o,s.toJSON()),await Promise.all(n.map(async u=>{if(u!==a)try{await u._remove(o)}catch{}})),new ui(a,t,r))}}/**
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
 */function up(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Jg(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(qg(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ey(t))return"Blackberry";if(ty(t))return"Webos";if(Bf(t))return"Safari";if((t.includes("chrome/")||Xg(t))&&!t.includes("edge/"))return"Chrome";if(Zg(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function qg(e=ze()){return/firefox\//i.test(e)}function Bf(e=ze()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Xg(e=ze()){return/crios\//i.test(e)}function Jg(e=ze()){return/iemobile/i.test(e)}function Zg(e=ze()){return/android/i.test(e)}function ey(e=ze()){return/blackberry/i.test(e)}function ty(e=ze()){return/webos/i.test(e)}function sl(e=ze()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function kk(e=ze()){var t;return sl(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function bk(){return $E()&&document.documentMode===10}function ny(e=ze()){return sl(e)||Zg(e)||ty(e)||ey(e)||/windows phone/i.test(e)||Jg(e)}function xk(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function ry(e,t=[]){let n;switch(e){case"Browser":n=up(ze());break;case"Worker":n=`${up(ze())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Qa}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Ik{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=a=>new Promise((o,s)=>{try{const l=t(a);o(l)}catch(l){s(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function Ck(e,t={}){return nr(e,"GET","/v2/passwordPolicy",tr(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const Tk=6;class Pk{constructor(t){var n,r,i,a;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Tk,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(a=t.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,a,o,s;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsUppercaseLetter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsNonAlphanumericCharacter)!==null&&s!==void 0?s:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,a){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=a))}}/**
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
 */class Rk{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cp(this),this.idTokenSubscription=new cp(this),this.beforeStateQueue=new Ik(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Bg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Xt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ui.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Yg(this,{idToken:t}),r=await qt._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(jt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(s=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(s,s))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,a=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===s)&&(l!=null&&l.user)&&(i=l.user,a=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Ns(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=lk()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(jt(this.app))return Promise.reject(en(this));const n=t?hn(t):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&$(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return jt(this.app)?Promise.reject(en(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return jt(this.app)?Promise.reject(en(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Xt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Ck(this),n=new Pk(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Ya("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Sk(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Xt(t)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await ui.create(this,[Xt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const a=typeof n=="function"?n:n.next.bind(n);let o=!1;const s=this._isInitialized?Promise.resolve():this._initializationPromise;if($(s,this,"internal-error"),s.then(()=>{o||a(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=t.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=ry(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&ak(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Or(e){return hn(e)}class cp{constructor(t){this.auth=t,this.observer=null,this.addObserver=GE(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ll={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ok(e){ll=e}function iy(e){return ll.loadJS(e)}function Nk(){return ll.recaptchaEnterpriseScript}function Ak(){return ll.gapiScript}function Lk(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const Dk="recaptcha-enterprise",Mk="NO_RECAPTCHA";class jk{constructor(t){this.type=Dk,this.auth=Or(t)}async verify(t="verify",n=!1){async function r(a){if(!n){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(o,s)=>{pk(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)s(new Error("recaptcha Enterprise site key undefined"));else{const u=new hk(l);return a.tenantId==null?a._agentRecaptchaConfig=u:a._tenantRecaptchaConfigs[a.tenantId]=u,o(u.siteKey)}}).catch(l=>{s(l)})})}function i(a,o,s){const l=window.grecaptcha;ap(l)?l.enterprise.ready(()=>{l.enterprise.execute(a,{action:t}).then(u=>{o(u)}).catch(()=>{o(Mk)})}):s(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((a,o)=>{r(this.auth).then(s=>{if(!n&&ap(window.grecaptcha))i(s,a,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Nk();l.length!==0&&(l+=s),iy(l).then(()=>{i(s,a,o)}).catch(u=>{o(u)})}}).catch(s=>{o(s)})})}}async function fp(e,t,n,r=!1){const i=new jk(e);let a;try{a=await i.verify(n)}catch{a=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:a}):Object.assign(o,{captchaResponse:a}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function fc(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await fp(e,t,n,n==="getOobCode");return r(e,a)}else return r(e,t).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await fp(e,t,n,n==="getOobCode");return r(e,o)}else return Promise.reject(a)})}/**
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
 */function Uk(e,t){const n=jg(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),a=n.getOptions();if(Ps(a,t??{}))return i;Ot(i,"already-initialized")}return n.initialize({options:t})}function Fk(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Xt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function zk(e,t,n){const r=Or(e);$(r._canInitEmulator,r,"emulator-config-failed"),$(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),a=ay(t),{host:o,port:s}=$k(t),l=s===null?"":`:${s}`;r.config.emulator={url:`${a}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:s,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Bk()}function ay(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function $k(e){const t=ay(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const a=i[1];return{host:a,port:dp(r.substr(a.length+1))}}else{const[a,o]=r.split(":");return{host:a,port:dp(o)}}}function dp(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Bk(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class Hf{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Qt("not implemented")}_getIdTokenResponse(t){return Qt("not implemented")}_linkToIdToken(t,n){return Qt("not implemented")}_getReauthenticationResolver(t){return Qt("not implemented")}}async function Hk(e,t){return nr(e,"POST","/v1/accounts:signUp",t)}/**
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
 */async function Vk(e,t){return Xa(e,"POST","/v1/accounts:signInWithPassword",tr(e,t))}/**
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
 */async function Wk(e,t){return Xa(e,"POST","/v1/accounts:signInWithEmailLink",tr(e,t))}async function Kk(e,t){return Xa(e,"POST","/v1/accounts:signInWithEmailLink",tr(e,t))}/**
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
 */class Da extends Hf{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Da(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Da(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fc(t,n,"signInWithPassword",Vk);case"emailLink":return Wk(t,{email:this._email,oobCode:this._password});default:Ot(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fc(t,r,"signUpPassword",Hk);case"emailLink":return Kk(t,{idToken:n,email:this._email,oobCode:this._password});default:Ot(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function ci(e,t){return Xa(e,"POST","/v1/accounts:signInWithIdp",tr(e,t))}/**
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
 */const Yk="http://localhost";class br extends Hf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new br(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Ot("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,a=Uf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new br(r,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return ci(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,ci(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,ci(t,n)}buildRequest(){const t={requestUri:Yk,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Ga(n)}return t}}/**
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
 */function Gk(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Qk(e){const t=qi(Xi(e)).link,n=t?qi(Xi(t)).deep_link_id:null,r=qi(Xi(e)).deep_link_id;return(r?qi(Xi(r)).link:null)||r||n||t||e}class Vf{constructor(t){var n,r,i,a,o,s;const l=qi(Xi(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,f=Gk((i=l.mode)!==null&&i!==void 0?i:null);$(u&&c&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=c,this.continueUrl=(a=l.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(s=l.tenantId)!==null&&s!==void 0?s:null}static parseLink(t){const n=Qk(t);try{return new Vf(n)}catch{return null}}}/**
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
 */class Ci{constructor(){this.providerId=Ci.PROVIDER_ID}static credential(t,n){return Da._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Vf.parseLink(n);return $(r,"argument-error"),Da._fromEmailAndCode(t,r.code,r.tenantId)}}Ci.PROVIDER_ID="password";Ci.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ci.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class oy{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ja extends oy{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Tn extends Ja{constructor(){super("facebook.com")}static credential(t){return br._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Tn.credentialFromTaggedObject(t)}static credentialFromError(t){return Tn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Tn.credential(t.oauthAccessToken)}catch{return null}}}Tn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Tn.PROVIDER_ID="facebook.com";/**
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
 */class Pn extends Ja{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return br._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Pn.credentialFromTaggedObject(t)}static credentialFromError(t){return Pn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Pn.credential(n,r)}catch{return null}}}Pn.GOOGLE_SIGN_IN_METHOD="google.com";Pn.PROVIDER_ID="google.com";/**
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
 */class Rn extends Ja{constructor(){super("github.com")}static credential(t){return br._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Rn.credentialFromTaggedObject(t)}static credentialFromError(t){return Rn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Rn.credential(t.oauthAccessToken)}catch{return null}}}Rn.GITHUB_SIGN_IN_METHOD="github.com";Rn.PROVIDER_ID="github.com";/**
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
 */class On extends Ja{constructor(){super("twitter.com")}static credential(t,n){return br._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return On.credentialFromTaggedObject(t)}static credentialFromError(t){return On.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return On.credential(n,r)}catch{return null}}}On.TWITTER_SIGN_IN_METHOD="twitter.com";On.PROVIDER_ID="twitter.com";/**
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
 */async function qk(e,t){return Xa(e,"POST","/v1/accounts:signUp",tr(e,t))}/**
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
 */class xr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const a=await qt._fromIdTokenResponse(t,r,i),o=hp(r);return new xr({user:a,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=hp(r);return new xr({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function hp(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class As extends er{constructor(t,n,r,i){var a;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,As.prototype),this.customData={appName:t.name,tenantId:(a=t.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new As(t,n,r,i)}}function sy(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?As._fromErrorAndOperation(e,a,t,r):a})}async function Xk(e,t,n=!1){const r=await La(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return xr._forOperation(e,"link",r)}/**
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
 */async function Jk(e,t,n=!1){const{auth:r}=e;if(jt(r.app))return Promise.reject(en(r));const i="reauthenticate";try{const a=await La(e,sy(r,i,t,e),n);$(a.idToken,r,"internal-error");const o=$f(a.idToken);$(o,r,"internal-error");const{sub:s}=o;return $(e.uid===s,r,"user-mismatch"),xr._forOperation(e,i,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Ot(r,"user-mismatch"),a}}/**
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
 */async function ly(e,t,n=!1){if(jt(e.app))return Promise.reject(en(e));const r="signIn",i=await sy(e,r,t),a=await xr._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(a.user),a}async function Zk(e,t){return ly(Or(e),t)}/**
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
 */async function uy(e){const t=Or(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function eb(e,t,n){if(jt(e.app))return Promise.reject(en(e));const r=Or(e),o=await fc(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",qk).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&uy(e),l}),s=await xr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(s.user),s}function tb(e,t,n){return jt(e.app)?Promise.reject(en(e)):Zk(hn(e),Ci.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&uy(e),r})}function nb(e,t,n,r){return hn(e).onIdTokenChanged(t,n,r)}function rb(e,t,n){return hn(e).beforeAuthStateChanged(t,n)}function ib(e,t,n,r){return hn(e).onAuthStateChanged(t,n,r)}function ab(e){return hn(e).signOut()}const Ls="__sak";/**
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
 */class cy{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ls,"1"),this.storage.removeItem(Ls),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function ob(){const e=ze();return Bf(e)||sl(e)}const sb=1e3,lb=10;class fy extends cy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ob()&&xk(),this.fallbackToPolling=ny(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,s,l)=>{this.notifyListeners(o,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},a=this.storage.getItem(r);bk()&&a!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,lb):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},sb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}fy.type="LOCAL";const ub=fy;/**
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
 */class dy extends cy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}dy.type="SESSION";const hy=dy;/**
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
 */function cb(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ul{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new ul(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:a}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const s=Array.from(o).map(async u=>u(n.origin,a)),l=await cb(s);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ul.receivers=[];/**
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
 */function Wf(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class fb{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,o;return new Promise((s,l)=>{const u=Wf("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const d=f;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),a=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),s(d.data.response);break;default:clearTimeout(c),clearTimeout(a),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Bt(){return window}function db(e){Bt().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function py(){return typeof Bt().WorkerGlobalScope<"u"&&typeof Bt().importScripts=="function"}async function hb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pb(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function mb(){return py()?self:null}/**
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
 */const my="firebaseLocalStorageDb",vb=1,Ds="firebaseLocalStorage",vy="fbase_key";class Za{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function cl(e,t){return e.transaction([Ds],t?"readwrite":"readonly").objectStore(Ds)}function gb(){const e=indexedDB.deleteDatabase(my);return new Za(e).toPromise()}function dc(){const e=indexedDB.open(my,vb);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Ds,{keyPath:vy})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Ds)?t(r):(r.close(),await gb(),t(await dc()))})})}async function pp(e,t,n){const r=cl(e,!0).put({[vy]:t,value:n});return new Za(r).toPromise()}async function yb(e,t){const n=cl(e,!1).get(t),r=await new Za(n).toPromise();return r===void 0?null:r.value}function mp(e,t){const n=cl(e,!0).delete(t);return new Za(n).toPromise()}const wb=800,_b=3;class gy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await dc(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>_b)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return py()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ul._getInstance(mb()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await hb(),!this.activeServiceWorker)return;this.sender=new fb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||pb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await dc();return await pp(t,Ls,"1"),await mp(t,Ls),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>pp(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>yb(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>mp(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const a=cl(i,!1).getAll();return new Za(a).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:a}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}gy.type="LOCAL";const Eb=gy;new qa(3e4,6e4);/**
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
 */function Sb(e,t){return t?Xt(t):($(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Kf extends Hf{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return ci(t,this._buildIdpRequest())}_linkToIdToken(t,n){return ci(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return ci(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function kb(e){return ly(e.auth,new Kf(e),e.bypassAuthState)}function bb(e){const{auth:t,user:n}=e;return $(n,t,"internal-error"),Jk(n,new Kf(e),e.bypassAuthState)}async function xb(e){const{auth:t,user:n}=e;return $(n,t,"internal-error"),Xk(n,new Kf(e),e.bypassAuthState)}/**
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
 */class yy{constructor(t,n,r,i,a=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:a,error:o,type:s}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return kb;case"linkViaPopup":case"linkViaRedirect":return xb;case"reauthViaPopup":case"reauthViaRedirect":return bb;default:Ot(this.auth,"internal-error")}}resolve(t){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Ib=new qa(2e3,1e4);class Xr extends yy{constructor(t,n,r,i,a){super(t,n,i,a),this.provider=r,this.authWindow=null,this.pollId=null,Xr.currentPopupAction&&Xr.currentPopupAction.cancel(),Xr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return $(t,this.auth,"internal-error"),t}async onExecution(){on(this.filter.length===1,"Popup operations only handle one event");const t=Wf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject($t(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject($t(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($t(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Ib.get())};t()}}Xr.currentPopupAction=null;/**
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
 */const Cb="pendingRedirect",Jo=new Map;class Tb extends yy{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Jo.get(this.auth._key());if(!t){try{const r=await Pb(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Jo.set(this.auth._key(),t)}return this.bypassAuthState||Jo.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Pb(e,t){const n=Nb(t),r=Ob(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Rb(e,t){Jo.set(e._key(),t)}function Ob(e){return Xt(e._redirectPersistence)}function Nb(e){return Xo(Cb,e.config.apiKey,e.name)}async function Ab(e,t,n=!1){if(jt(e.app))return Promise.reject(en(e));const r=Or(e),i=Sb(r,t),o=await new Tb(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
 */const Lb=10*60*1e3;class Db{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Mb(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!wy(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError($t(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Lb&&this.cachedEventUids.clear(),this.cachedEventUids.has(vp(t))}saveEventToCache(t){this.cachedEventUids.add(vp(t)),this.lastProcessedEventTime=Date.now()}}function vp(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function wy({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Mb(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wy(e);default:return!1}}/**
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
 */async function jb(e,t={}){return nr(e,"GET","/v1/projects",t)}/**
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
 */const Ub=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Fb=/^https?/;async function zb(e){if(e.config.emulator)return;const{authorizedDomains:t}=await jb(e);for(const n of t)try{if($b(n))return}catch{}Ot(e,"unauthorized-domain")}function $b(e){const t=uc(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Fb.test(n))return!1;if(Ub.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Bb=new qa(3e4,6e4);function gp(){const e=Bt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Hb(e){return new Promise((t,n)=>{var r,i,a;function o(){gp(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{gp(),n($t(e,"network-request-failed"))},timeout:Bb.get()})}if(!((i=(r=Bt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((a=Bt().gapi)===null||a===void 0)&&a.load)o();else{const s=Lk("iframefcb");return Bt()[s]=()=>{gapi.load?o():n($t(e,"network-request-failed"))},iy(`${Ak()}?onload=${s}`).catch(l=>n(l))}}).catch(t=>{throw Zo=null,t})}let Zo=null;function Vb(e){return Zo=Zo||Hb(e),Zo}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Wb=new qa(5e3,15e3),Kb="__/auth/iframe",Yb="emulator/auth/iframe",Gb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Qb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qb(e){const t=e.config;$(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?zf(t,Yb):`https://${e.config.authDomain}/${Kb}`,r={apiKey:t.apiKey,appName:e.name,v:Qa},i=Qb.get(e.config.apiHost);i&&(r.eid=i);const a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${Ga(r).slice(1)}`}async function Xb(e){const t=await Vb(e),n=Bt().gapi;return $(n,e,"internal-error"),t.open({where:document.body,url:qb(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Gb,dontclear:!0},r=>new Promise(async(i,a)=>{await r.restyle({setHideOnLeave:!1});const o=$t(e,"network-request-failed"),s=Bt().setTimeout(()=>{a(o)},Wb.get());function l(){Bt().clearTimeout(s),i(r)}r.ping(l).then(l,()=>{a(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Jb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Zb=500,e2=600,t2="_blank",n2="http://localhost";class yp{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function r2(e,t,n,r=Zb,i=e2){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let s="";const l=Object.assign(Object.assign({},Jb),{width:r.toString(),height:i.toString(),top:a,left:o}),u=ze().toLowerCase();n&&(s=Xg(u)?t2:n),qg(u)&&(t=t||n2,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[g,w])=>`${d}${g}=${w},`,"");if(kk(u)&&s!=="_self")return i2(t||"",s),new yp(null);const f=window.open(t||"",s,c);$(f,e,"popup-blocked");try{f.focus()}catch{}return new yp(f)}function i2(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const a2="__/auth/handler",o2="emulator/auth/handler",s2=encodeURIComponent("fac");async function wp(e,t,n,r,i,a){$(e.config.authDomain,e,"auth-domain-config-required"),$(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Qa,eventId:i};if(t instanceof oy){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",YE(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,f]of Object.entries(a||{}))o[c]=f}if(t instanceof Ja){const c=t.getScopes().filter(f=>f!=="");c.length>0&&(o.scopes=c.join(","))}e.tenantId&&(o.tid=e.tenantId);const s=o;for(const c of Object.keys(s))s[c]===void 0&&delete s[c];const l=await e._getAppCheckToken(),u=l?`#${s2}=${encodeURIComponent(l)}`:"";return`${l2(e)}?${Ga(s).slice(1)}${u}`}function l2({config:e}){return e.emulator?zf(e,o2):`https://${e.authDomain}/${a2}`}/**
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
 */const tu="webStorageSupport";class u2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hy,this._completeRedirectFn=Ab,this._overrideRedirectResult=Rb}async _openPopup(t,n,r,i){var a;on((a=this.eventManagers[t._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const o=await wp(t,n,r,uc(),i);return r2(t,o,Wf())}async _openRedirect(t,n,r,i){await this._originValidation(t);const a=await wp(t,n,r,uc(),i);return db(a),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:a}=this.eventManagers[n];return i?Promise.resolve(i):(on(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await Xb(t),r=new Db(t);return n.register("authEvent",i=>($(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(tu,{type:tu},i=>{var a;const o=(a=i==null?void 0:i[0])===null||a===void 0?void 0:a[tu];o!==void 0&&n(!!o),Ot(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=zb(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return ny()||Bf()||sl()}}const c2=u2;var _p="@firebase/auth",Ep="1.7.4";/**
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
 */class f2{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function d2(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function h2(e){Na(new Ei("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),a=t.getProvider("app-check-internal"),{apiKey:o,authDomain:s}=r.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ry(e)},u=new Rk(r,i,a,l);return Fk(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Na(new Ei("auth-internal",t=>{const n=Or(t.getProvider("auth").getImmediate());return(r=>new f2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),si(_p,Ep,d2(e)),si(_p,Ep,"esm2017")}/**
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
 */const p2=5*60,m2=Ag("authIdTokenMaxAge")||p2;let Sp=null;const v2=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>m2)return;const i=n==null?void 0:n.token;Sp!==i&&(Sp=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function g2(e=GS()){const t=jg(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Uk(e,{popupRedirectResolver:c2,persistence:[Eb,ub,hy]}),r=Ag("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const o=v2(a.toString());rb(n,o,()=>o(n.currentUser)),nb(n,s=>o(s))}}const i=ME("auth");return i&&zk(n,`http://${i}`),n}function y2(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}Ok({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const a=$t("internal-error");a.customData=i,n(a)},r.type="text/javascript",r.charset="UTF-8",y2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});h2("Browser");var w2="firebase",_2="10.12.2";/**
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
 */si(w2,_2,"app");const E2={apiKey:"AIzaSyA19fYlLgkMFcQuZXcvrIHc4CjXAkEixoU",authDomain:"react-ecommerce-website-auth.firebaseapp.com",projectId:"react-ecommerce-website-auth",storageBucket:"react-ecommerce-website-auth.appspot.com",messagingSenderId:"372064301595",appId:"1:372064301595:web:cc26f8af7de2d8418fbebe"},S2=Ug(E2),Yf=b.createContext(""),k2=({children:e})=>{const[t,n]=b.useState(null),r=g2(S2),i=(l,u)=>eb(r,l,u),a=(l,u)=>tb(r,l,u),o=()=>ab(r);b.useEffect(()=>{const l=ib(r,u=>{n(u)});return()=>{l()}},[]),console.log(t);const s={user:t,createUser:i,signIn:a,logOut:o};return S.jsx(Yf.Provider,{value:s,children:e})},b2=()=>{const{user:e,logOut:t}=b.useContext(Yf);return S.jsxs("div",{className:"header",children:[S.jsx("img",{src:TE,alt:""}),S.jsxs("ul",{className:"listing",children:[S.jsx(It,{to:"/react-ecommerce-website/",children:S.jsx("span",{children:"Shop"})}),S.jsx(It,{to:"/react-ecommerce-website/order",children:S.jsx("span",{children:"Order"})}),S.jsx(It,{to:"/react-ecommerce-website/manage",children:S.jsx("span",{children:"Manage Inventory"})}),S.jsx(It,{to:"/react-ecommerce-website/login",children:S.jsx("span",{children:"Login"})}),S.jsx(It,{to:"/react-ecommerce-website/signup",children:S.jsx("span",{children:"SignUp"})}),S.jsx("div",{style:{background:"gray",padding:"4px",borderRadius:"2px"},children:e?S.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"15px"},children:[S.jsx(It,{to:"/react-ecommerce-website/",children:S.jsx("span",{children:e.email})}),S.jsx("button",{onClick:t,children:"SignOut"})]}):""})]})]})};let x2={data:""},I2=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||x2,C2=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,T2=/\/\*[^]*?\*\/|  +/g,kp=/\n+/g,Nn=(e,t)=>{let n="",r="",i="";for(let a in e){let o=e[a];a[0]=="@"?a[1]=="i"?n=a+" "+o+";":r+=a[1]=="f"?Nn(o,a):a+"{"+Nn(o,a[1]=="k"?"":t)+"}":typeof o=="object"?r+=Nn(o,t?t.replace(/([^,])+/g,s=>a.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,s):s?s+" "+l:l)):a):o!=null&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=Nn.p?Nn.p(a,o):a+":"+o+";")}return n+(t&&i?t+"{"+i+"}":i)+r},Vt={},_y=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+_y(e[n]);return t}return e},P2=(e,t,n,r,i)=>{let a=_y(e),o=Vt[a]||(Vt[a]=(l=>{let u=0,c=11;for(;u<l.length;)c=101*c+l.charCodeAt(u++)>>>0;return"go"+c})(a));if(!Vt[o]){let l=a!==e?e:(u=>{let c,f,d=[{}];for(;c=C2.exec(u.replace(T2,""));)c[4]?d.shift():c[3]?(f=c[3].replace(kp," ").trim(),d.unshift(d[0][f]=d[0][f]||{})):d[0][c[1]]=c[2].replace(kp," ").trim();return d[0]})(e);Vt[o]=Nn(i?{["@keyframes "+o]:l}:l,n?"":"."+o)}let s=n&&Vt.g?Vt.g:null;return n&&(Vt.g=Vt[o]),((l,u,c,f)=>{f?u.data=u.data.replace(f,l):u.data.indexOf(l)===-1&&(u.data=c?l+u.data:u.data+l)})(Vt[o],t,r,s),o},R2=(e,t,n)=>e.reduce((r,i,a)=>{let o=t[a];if(o&&o.call){let s=o(n),l=s&&s.props&&s.props.className||/^go/.test(s)&&s;o=l?"."+l:s&&typeof s=="object"?s.props?"":Nn(s,""):s===!1?"":s}return r+i+(o??"")},"");function fl(e){let t=this||{},n=e.call?e(t.p):e;return P2(n.unshift?n.raw?R2(n,[].slice.call(arguments,1),t.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(t.p):i),{}):n,I2(t.target),t.g,t.o,t.k)}let Ey,hc,pc;fl.bind({g:1});let sn=fl.bind({k:1});function O2(e,t,n,r){Nn.p=t,Ey=e,hc=n,pc=r}function rr(e,t){let n=this||{};return function(){let r=arguments;function i(a,o){let s=Object.assign({},a),l=s.className||i.className;n.p=Object.assign({theme:hc&&hc()},s),n.o=/ *go\d+/.test(l),s.className=fl.apply(n,r)+(l?" "+l:""),t&&(s.ref=o);let u=e;return e[0]&&(u=s.as||e,delete s.as),pc&&u[0]&&pc(s),Ey(u,s)}return t?t(i):i}}var N2=e=>typeof e=="function",Ms=(e,t)=>N2(e)?e(t):e,A2=(()=>{let e=0;return()=>(++e).toString()})(),Sy=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),L2=20,es=new Map,D2=1e3,bp=e=>{if(es.has(e))return;let t=setTimeout(()=>{es.delete(e),Nr({type:4,toastId:e})},D2);es.set(e,t)},M2=e=>{let t=es.get(e);t&&clearTimeout(t)},mc=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,L2)};case 1:return t.toast.id&&M2(t.toast.id),{...e,toasts:e.toasts.map(a=>a.id===t.toast.id?{...a,...t.toast}:a)};case 2:let{toast:n}=t;return e.toasts.find(a=>a.id===n.id)?mc(e,{type:1,toast:n}):mc(e,{type:0,toast:n});case 3:let{toastId:r}=t;return r?bp(r):e.toasts.forEach(a=>{bp(a.id)}),{...e,toasts:e.toasts.map(a=>a.id===r||r===void 0?{...a,visible:!1}:a)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(a=>a.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+i}))}}},ts=[],ns={toasts:[],pausedAt:void 0},Nr=e=>{ns=mc(ns,e),ts.forEach(t=>{t(ns)})},j2={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},U2=(e={})=>{let[t,n]=b.useState(ns);b.useEffect(()=>(ts.push(n),()=>{let i=ts.indexOf(n);i>-1&&ts.splice(i,1)}),[t]);let r=t.toasts.map(i=>{var a,o;return{...e,...e[i.type],...i,duration:i.duration||((a=e[i.type])==null?void 0:a.duration)||(e==null?void 0:e.duration)||j2[i.type],style:{...e.style,...(o=e[i.type])==null?void 0:o.style,...i.style}}});return{...t,toasts:r}},F2=(e,t="blank",n)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(n==null?void 0:n.id)||A2()}),eo=e=>(t,n)=>{let r=F2(t,e,n);return Nr({type:2,toast:r}),r.id},rt=(e,t)=>eo("blank")(e,t);rt.error=eo("error");rt.success=eo("success");rt.loading=eo("loading");rt.custom=eo("custom");rt.dismiss=e=>{Nr({type:3,toastId:e})};rt.remove=e=>Nr({type:4,toastId:e});rt.promise=(e,t,n)=>{let r=rt.loading(t.loading,{...n,...n==null?void 0:n.loading});return e.then(i=>(rt.success(Ms(t.success,i),{id:r,...n,...n==null?void 0:n.success}),i)).catch(i=>{rt.error(Ms(t.error,i),{id:r,...n,...n==null?void 0:n.error})}),e};var z2=(e,t)=>{Nr({type:1,toast:{id:e,height:t}})},$2=()=>{Nr({type:5,time:Date.now()})},B2=e=>{let{toasts:t,pausedAt:n}=U2(e);b.useEffect(()=>{if(n)return;let a=Date.now(),o=t.map(s=>{if(s.duration===1/0)return;let l=(s.duration||0)+s.pauseDuration-(a-s.createdAt);if(l<0){s.visible&&rt.dismiss(s.id);return}return setTimeout(()=>rt.dismiss(s.id),l)});return()=>{o.forEach(s=>s&&clearTimeout(s))}},[t,n]);let r=b.useCallback(()=>{n&&Nr({type:6,time:Date.now()})},[n]),i=b.useCallback((a,o)=>{let{reverseOrder:s=!1,gutter:l=8,defaultPosition:u}=o||{},c=t.filter(g=>(g.position||u)===(a.position||u)&&g.height),f=c.findIndex(g=>g.id===a.id),d=c.filter((g,w)=>w<f&&g.visible).length;return c.filter(g=>g.visible).slice(...s?[d+1]:[0,d]).reduce((g,w)=>g+(w.height||0)+l,0)},[t]);return{toasts:t,handlers:{updateHeight:z2,startPause:$2,endPause:r,calculateOffset:i}}},H2=sn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,V2=sn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,W2=sn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,K2=rr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${H2} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${V2} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${W2} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Y2=sn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,G2=rr("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Y2} 1s linear infinite;
`,Q2=sn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,q2=sn`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,X2=rr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Q2} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${q2} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,J2=rr("div")`
  position: absolute;
`,Z2=rr("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,ex=sn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,tx=rr("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${ex} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,nx=({toast:e})=>{let{icon:t,type:n,iconTheme:r}=e;return t!==void 0?typeof t=="string"?b.createElement(tx,null,t):t:n==="blank"?null:b.createElement(Z2,null,b.createElement(G2,{...r}),n!=="loading"&&b.createElement(J2,null,n==="error"?b.createElement(K2,{...r}):b.createElement(X2,{...r})))},rx=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ix=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,ax="0%{opacity:0;} 100%{opacity:1;}",ox="0%{opacity:1;} 100%{opacity:0;}",sx=rr("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,lx=rr("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ux=(e,t)=>{let n=e.includes("top")?1:-1,[r,i]=Sy()?[ax,ox]:[rx(n),ix(n)];return{animation:t?`${sn(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${sn(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},cx=b.memo(({toast:e,position:t,style:n,children:r})=>{let i=e.height?ux(e.position||t||"top-center",e.visible):{opacity:0},a=b.createElement(nx,{toast:e}),o=b.createElement(lx,{...e.ariaProps},Ms(e.message,e));return b.createElement(sx,{className:e.className,style:{...i,...n,...e.style}},typeof r=="function"?r({icon:a,message:o}):b.createElement(b.Fragment,null,a,o))});O2(b.createElement);var fx=({id:e,className:t,style:n,onHeightUpdate:r,children:i})=>{let a=b.useCallback(o=>{if(o){let s=()=>{let l=o.getBoundingClientRect().height;r(e,l)};s(),new MutationObserver(s).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return b.createElement("div",{ref:a,className:t,style:n},i)},dx=(e,t)=>{let n=e.includes("top"),r=n?{top:0}:{bottom:0},i=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Sy()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(n?1:-1)}px)`,...r,...i}},hx=fl`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,To=16,px=({reverseOrder:e,position:t="top-center",toastOptions:n,gutter:r,children:i,containerStyle:a,containerClassName:o})=>{let{toasts:s,handlers:l}=B2(n);return b.createElement("div",{style:{position:"fixed",zIndex:9999,top:To,left:To,right:To,bottom:To,pointerEvents:"none",...a},className:o,onMouseEnter:l.startPause,onMouseLeave:l.endPause},s.map(u=>{let c=u.position||t,f=l.calculateOffset(u,{reverseOrder:e,gutter:r,defaultPosition:t}),d=dx(c,f);return b.createElement(fx,{id:u.id,key:u.id,onHeightUpdate:l.updateHeight,className:u.visible?hx:"",style:d},u.type==="custom"?Ms(u.message,u):i?i(u):b.createElement(cx,{toast:u,position:c}))}))},mx=rt;const vx=()=>S.jsxs("div",{children:[S.jsx(b2,{}),S.jsx(oE,{}),S.jsx(px,{})]});function xp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?xp(Object(n),!0).forEach(function(r){xe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):xp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function js(e){"@babel/helpers - typeof";return js=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},js(e)}function gx(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ip(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function yx(e,t,n){return t&&Ip(e.prototype,t),n&&Ip(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function xe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Gf(e,t){return _x(e)||Sx(e,t)||ky(e,t)||bx()}function to(e){return wx(e)||Ex(e)||ky(e)||kx()}function wx(e){if(Array.isArray(e))return vc(e)}function _x(e){if(Array.isArray(e))return e}function Ex(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Sx(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,s;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(l){a=!0,s=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw s}}return r}}function ky(e,t){if(e){if(typeof e=="string")return vc(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return vc(e,t)}}function vc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function kx(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Cp=function(){},Qf={},by={},xy=null,Iy={mark:Cp,measure:Cp};try{typeof window<"u"&&(Qf=window),typeof document<"u"&&(by=document),typeof MutationObserver<"u"&&(xy=MutationObserver),typeof performance<"u"&&(Iy=performance)}catch{}var xx=Qf.navigator||{},Tp=xx.userAgent,Pp=Tp===void 0?"":Tp,Yn=Qf,le=by,Rp=xy,Po=Iy;Yn.document;var pn=!!le.documentElement&&!!le.head&&typeof le.addEventListener=="function"&&typeof le.createElement=="function",Cy=~Pp.indexOf("MSIE")||~Pp.indexOf("Trident/"),Ro,Oo,No,Ao,Lo,ln="___FONT_AWESOME___",gc=16,Ty="fa",Py="svg-inline--fa",Ir="data-fa-i2svg",yc="data-fa-pseudo-element",Ix="data-fa-pseudo-element-pending",qf="data-prefix",Xf="data-icon",Op="fontawesome-i2svg",Cx="async",Tx=["HTML","HEAD","STYLE","SCRIPT"],Ry=function(){try{return!0}catch{return!1}}(),oe="classic",ye="sharp",Jf=[oe,ye];function no(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[oe]}})}var Ma=no((Ro={},xe(Ro,oe,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),xe(Ro,ye,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Ro)),ja=no((Oo={},xe(Oo,oe,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),xe(Oo,ye,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Oo)),Ua=no((No={},xe(No,oe,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),xe(No,ye,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),No)),Px=no((Ao={},xe(Ao,oe,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),xe(Ao,ye,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Ao)),Rx=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Oy="fa-layers-text",Ox=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Nx=no((Lo={},xe(Lo,oe,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),xe(Lo,ye,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Lo)),Ny=[1,2,3,4,5,6,7,8,9,10],Ax=Ny.concat([11,12,13,14,15,16,17,18,19,20]),Lx=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],hr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Fa=new Set;Object.keys(ja[oe]).map(Fa.add.bind(Fa));Object.keys(ja[ye]).map(Fa.add.bind(Fa));var Dx=[].concat(Jf,to(Fa),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",hr.GROUP,hr.SWAP_OPACITY,hr.PRIMARY,hr.SECONDARY]).concat(Ny.map(function(e){return"".concat(e,"x")})).concat(Ax.map(function(e){return"w-".concat(e)})),ca=Yn.FontAwesomeConfig||{};function Mx(e){var t=le.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function jx(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(le&&typeof le.querySelector=="function"){var Ux=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ux.forEach(function(e){var t=Gf(e,2),n=t[0],r=t[1],i=jx(Mx(n));i!=null&&(ca[r]=i)})}var Ay={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ty,replacementClass:Py,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ca.familyPrefix&&(ca.cssPrefix=ca.familyPrefix);var Si=L(L({},Ay),ca);Si.autoReplaceSvg||(Si.observeMutations=!1);var F={};Object.keys(Ay).forEach(function(e){Object.defineProperty(F,e,{enumerable:!0,set:function(n){Si[e]=n,fa.forEach(function(r){return r(F)})},get:function(){return Si[e]}})});Object.defineProperty(F,"familyPrefix",{enumerable:!0,set:function(t){Si.cssPrefix=t,fa.forEach(function(n){return n(F)})},get:function(){return Si.cssPrefix}});Yn.FontAwesomeConfig=F;var fa=[];function Fx(e){return fa.push(e),function(){fa.splice(fa.indexOf(e),1)}}var Sn=gc,Ut={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function zx(e){if(!(!e||!pn)){var t=le.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=le.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return le.head.insertBefore(t,r),e}}var $x="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function za(){for(var e=12,t="";e-- >0;)t+=$x[Math.random()*62|0];return t}function Ti(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Zf(e){return e.classList?Ti(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Ly(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Bx(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Ly(e[n]),'" ')},"").trim()}function dl(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ed(e){return e.size!==Ut.size||e.x!==Ut.x||e.y!==Ut.y||e.rotate!==Ut.rotate||e.flipX||e.flipY}function Hx(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function Vx(e){var t=e.transform,n=e.width,r=n===void 0?gc:n,i=e.height,a=i===void 0?gc:i,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Cy?l+="translate(".concat(t.x/Sn-r/2,"em, ").concat(t.y/Sn-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Sn,"em), calc(-50% + ").concat(t.y/Sn,"em)) "):l+="translate(".concat(t.x/Sn,"em, ").concat(t.y/Sn,"em) "),l+="scale(".concat(t.size/Sn*(t.flipX?-1:1),", ").concat(t.size/Sn*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Wx=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Dy(){var e=Ty,t=Py,n=F.cssPrefix,r=F.replacementClass,i=Wx;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var Np=!1;function nu(){F.autoAddCss&&!Np&&(zx(Dy()),Np=!0)}var Kx={mixout:function(){return{dom:{css:Dy,insertCss:nu}}},hooks:function(){return{beforeDOMElementCreation:function(){nu()},beforeI2svg:function(){nu()}}}},un=Yn||{};un[ln]||(un[ln]={});un[ln].styles||(un[ln].styles={});un[ln].hooks||(un[ln].hooks={});un[ln].shims||(un[ln].shims=[]);var Ct=un[ln],My=[],Yx=function e(){le.removeEventListener("DOMContentLoaded",e),Us=1,My.map(function(t){return t()})},Us=!1;pn&&(Us=(le.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(le.readyState),Us||le.addEventListener("DOMContentLoaded",Yx));function Gx(e){pn&&(Us?setTimeout(e,0):My.push(e))}function ro(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?Ly(e):"<".concat(t," ").concat(Bx(r),">").concat(a.map(ro).join(""),"</").concat(t,">")}function Ap(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Qx=function(t,n){return function(r,i,a,o){return t.call(n,r,i,a,o)}},ru=function(t,n,r,i){var a=Object.keys(t),o=a.length,s=i!==void 0?Qx(n,i):n,l,u,c;for(r===void 0?(l=1,c=t[a[0]]):(l=0,c=r);l<o;l++)u=a[l],c=s(c,t[u],u,t);return c};function qx(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function wc(e){var t=qx(e);return t.length===1?t[0].toString(16):null}function Xx(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Lp(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function _c(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=Lp(t);typeof Ct.hooks.addPack=="function"&&!i?Ct.hooks.addPack(e,Lp(t)):Ct.styles[e]=L(L({},Ct.styles[e]||{}),a),e==="fas"&&_c("fa",t)}var Do,Mo,jo,Jr=Ct.styles,Jx=Ct.shims,Zx=(Do={},xe(Do,oe,Object.values(Ua[oe])),xe(Do,ye,Object.values(Ua[ye])),Do),td=null,jy={},Uy={},Fy={},zy={},$y={},eI=(Mo={},xe(Mo,oe,Object.keys(Ma[oe])),xe(Mo,ye,Object.keys(Ma[ye])),Mo);function tI(e){return~Dx.indexOf(e)}function nI(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!tI(i)?i:null}var By=function(){var t=function(a){return ru(Jr,function(o,s,l){return o[l]=ru(s,a,{}),o},{})};jy=t(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var s=a[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=o})}return i}),Uy=t(function(i,a,o){if(i[o]=o,a[2]){var s=a[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=o})}return i}),$y=t(function(i,a,o){var s=a[2];return i[o]=o,s.forEach(function(l){i[l]=o}),i});var n="far"in Jr||F.autoFetchSvg,r=ru(Jx,function(i,a){var o=a[0],s=a[1],l=a[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(i.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});Fy=r.names,zy=r.unicodes,td=hl(F.styleDefault,{family:F.familyDefault})};Fx(function(e){td=hl(e.styleDefault,{family:F.familyDefault})});By();function nd(e,t){return(jy[e]||{})[t]}function rI(e,t){return(Uy[e]||{})[t]}function pr(e,t){return($y[e]||{})[t]}function Hy(e){return Fy[e]||{prefix:null,iconName:null}}function iI(e){var t=zy[e],n=nd("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Gn(){return td}var rd=function(){return{prefix:null,iconName:null,rest:[]}};function hl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?oe:n,i=Ma[r][e],a=ja[r][e]||ja[r][i],o=e in Ct.styles?e:null;return a||o||null}var Dp=(jo={},xe(jo,oe,Object.keys(Ua[oe])),xe(jo,ye,Object.keys(Ua[ye])),jo);function pl(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(t={},xe(t,oe,"".concat(F.cssPrefix,"-").concat(oe)),xe(t,ye,"".concat(F.cssPrefix,"-").concat(ye)),t),o=null,s=oe;(e.includes(a[oe])||e.some(function(u){return Dp[oe].includes(u)}))&&(s=oe),(e.includes(a[ye])||e.some(function(u){return Dp[ye].includes(u)}))&&(s=ye);var l=e.reduce(function(u,c){var f=nI(F.cssPrefix,c);if(Jr[c]?(c=Zx[s].includes(c)?Px[s][c]:c,o=c,u.prefix=c):eI[s].indexOf(c)>-1?(o=c,u.prefix=hl(c,{family:s})):f?u.iconName=f:c!==F.replacementClass&&c!==a[oe]&&c!==a[ye]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var d=o==="fa"?Hy(u.iconName):{},g=pr(u.prefix,u.iconName);d.prefix&&(o=null),u.iconName=d.iconName||g||u.iconName,u.prefix=d.prefix||u.prefix,u.prefix==="far"&&!Jr.far&&Jr.fas&&!F.autoFetchSvg&&(u.prefix="fas")}return u},rd());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===ye&&(Jr.fass||F.autoFetchSvg)&&(l.prefix="fass",l.iconName=pr(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Gn()||"fas"),l}var aI=function(){function e(){gx(this,e),this.definitions={}}return yx(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=L(L({},n.definitions[s]||{}),o[s]),_c(s,o[s]);var l=Ua[oe][s];l&&_c(l,o[s]),By()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],s=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[s][f]=u)}),n[s][l]=u}),n}}]),e}(),Mp=[],Zr={},fi={},oI=Object.keys(fi);function sI(e,t){var n=t.mixoutsTo;return Mp=e,Zr={},Object.keys(fi).forEach(function(r){oI.indexOf(r)===-1&&delete fi[r]}),Mp.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),js(i[o])==="object"&&Object.keys(i[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){Zr[o]||(Zr[o]=[]),Zr[o].push(a[o])})}r.provides&&r.provides(fi)}),n}function Ec(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=Zr[e]||[];return a.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Cr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Zr[e]||[];i.forEach(function(a){a.apply(null,n)})}function cn(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return fi[e]?fi[e].apply(null,t):void 0}function Sc(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Gn();if(t)return t=pr(n,t)||t,Ap(Vy.definitions,n,t)||Ap(Ct.styles,n,t)}var Vy=new aI,lI=function(){F.autoReplaceSvg=!1,F.observeMutations=!1,Cr("noAuto")},uI={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return pn?(Cr("beforeI2svg",t),cn("pseudoElements2svg",t),cn("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;F.autoReplaceSvg===!1&&(F.autoReplaceSvg=!0),F.observeMutations=!0,Gx(function(){fI({autoReplaceSvgRoot:n}),Cr("watch",t)})}},cI={icon:function(t){if(t===null)return null;if(js(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:pr(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=hl(t[0]);return{prefix:r,iconName:pr(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(F.cssPrefix,"-"))>-1||t.match(Rx))){var i=pl(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||Gn(),iconName:pr(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=Gn();return{prefix:a,iconName:pr(a,t)||t}}}},lt={noAuto:lI,config:F,dom:uI,parse:cI,library:Vy,findIconDefinition:Sc,toHtml:ro},fI=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?le:n;(Object.keys(Ct.styles).length>0||F.autoFetchSvg)&&pn&&F.autoReplaceSvg&&lt.dom.i2svg({node:r})};function ml(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return ro(r)})}}),Object.defineProperty(e,"node",{get:function(){if(pn){var r=le.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function dI(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(ed(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};i.style=dl(L(L({},a),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function hI(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?"".concat(t,"-").concat(F.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:L(L({},i),{},{id:o}),children:r}]}]}function id(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,c=e.titleId,f=e.extra,d=e.watchable,g=d===void 0?!1:d,w=r.found?r:n,_=w.width,I=w.height,p=i==="fak",h=[F.replacementClass,a?"".concat(F.cssPrefix,"-").concat(a):""].filter(function(D){return f.classes.indexOf(D)===-1}).filter(function(D){return D!==""||!!D}).concat(f.classes).join(" "),m={children:[],attributes:L(L({},f.attributes),{},{"data-prefix":i,"data-icon":a,class:h,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(I)})},k=p&&!~f.classes.indexOf("fa-fw")?{width:"".concat(_/I*16*.0625,"em")}:{};g&&(m.attributes[Ir]=""),l&&(m.children.push({tag:"title",attributes:{id:m.attributes["aria-labelledby"]||"title-".concat(c||za())},children:[l]}),delete m.attributes.title);var C=L(L({},m),{},{prefix:i,iconName:a,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:L(L({},k),f.styles)}),N=r.found&&n.found?cn("generateAbstractMask",C)||{children:[],attributes:{}}:cn("generateAbstractIcon",C)||{children:[],attributes:{}},v=N.children,O=N.attributes;return C.children=v,C.attributes=O,s?hI(C):dI(C)}function jp(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=L(L(L({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});l&&(u[Ir]="");var c=L({},o.styles);ed(i)&&(c.transform=Vx({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=dl(c);f.length>0&&(u.style=f);var d=[];return d.push({tag:"span",attributes:u,children:[t]}),a&&d.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),d}function pI(e){var t=e.content,n=e.title,r=e.extra,i=L(L(L({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=dl(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var iu=Ct.styles;function kc(e){var t=e[0],n=e[1],r=e.slice(4),i=Gf(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(F.cssPrefix,"-").concat(hr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(hr.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(hr.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}var mI={found:!1,width:512,height:512};function vI(e,t){!Ry&&!F.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function bc(e,t){var n=t;return t==="fa"&&F.styleDefault!==null&&(t=Gn()),new Promise(function(r,i){if(cn("missingIconAbstract"),n==="fa"){var a=Hy(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&iu[t]&&iu[t][e]){var o=iu[t][e];return r(kc(o))}vI(e,t),r(L(L({},mI),{},{icon:F.showMissingIcons&&e?cn("missingIconAbstract")||{}:{}}))})}var Up=function(){},xc=F.measurePerformance&&Po&&Po.mark&&Po.measure?Po:{mark:Up,measure:Up},Ji='FA "6.5.2"',gI=function(t){return xc.mark("".concat(Ji," ").concat(t," begins")),function(){return Wy(t)}},Wy=function(t){xc.mark("".concat(Ji," ").concat(t," ends")),xc.measure("".concat(Ji," ").concat(t),"".concat(Ji," ").concat(t," begins"),"".concat(Ji," ").concat(t," ends"))},ad={begin:gI,end:Wy},rs=function(){};function Fp(e){var t=e.getAttribute?e.getAttribute(Ir):null;return typeof t=="string"}function yI(e){var t=e.getAttribute?e.getAttribute(qf):null,n=e.getAttribute?e.getAttribute(Xf):null;return t&&n}function wI(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(F.replacementClass)}function _I(){if(F.autoReplaceSvg===!0)return is.replace;var e=is[F.autoReplaceSvg];return e||is.replace}function EI(e){return le.createElementNS("http://www.w3.org/2000/svg",e)}function SI(e){return le.createElement(e)}function Ky(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?EI:SI:n;if(typeof e=="string")return le.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var a=e.children||[];return a.forEach(function(o){i.appendChild(Ky(o,{ceFn:r}))}),i}function kI(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var is={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(Ky(i),n)}),n.getAttribute(Ir)===null&&F.keepOriginalSource){var r=le.createComment(kI(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Zf(n).indexOf(F.replacementClass))return is.replace(t);var i=new RegExp("".concat(F.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(s,l){return l===F.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(s){return ro(s)}).join(`
`);n.setAttribute(Ir,""),n.innerHTML=o}};function zp(e){e()}function Yy(e,t){var n=typeof t=="function"?t:rs;if(e.length===0)n();else{var r=zp;F.mutateApproach===Cx&&(r=Yn.requestAnimationFrame||zp),r(function(){var i=_I(),a=ad.begin("mutate");e.map(i),a(),n()})}}var od=!1;function Gy(){od=!0}function Ic(){od=!1}var Fs=null;function $p(e){if(Rp&&F.observeMutations){var t=e.treeCallback,n=t===void 0?rs:t,r=e.nodeCallback,i=r===void 0?rs:r,a=e.pseudoElementsCallback,o=a===void 0?rs:a,s=e.observeMutationsRoot,l=s===void 0?le:s;Fs=new Rp(function(u){if(!od){var c=Gn();Ti(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Fp(f.addedNodes[0])&&(F.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&F.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&Fp(f.target)&&~Lx.indexOf(f.attributeName))if(f.attributeName==="class"&&yI(f.target)){var d=pl(Zf(f.target)),g=d.prefix,w=d.iconName;f.target.setAttribute(qf,g||c),w&&f.target.setAttribute(Xf,w)}else wI(f.target)&&i(f.target)})}}),pn&&Fs.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function bI(){Fs&&Fs.disconnect()}function xI(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function II(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=pl(Zf(e));return i.prefix||(i.prefix=Gn()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=rI(i.prefix,e.innerText)||nd(i.prefix,wc(e.innerText))),!i.iconName&&F.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function CI(e){var t=Ti(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return F.autoA11y&&(n?t["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(r||za()):(t["aria-hidden"]="true",t.focusable="false")),t}function TI(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ut,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Bp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=II(e),r=n.iconName,i=n.prefix,a=n.rest,o=CI(e),s=Ec("parseNodeAttributes",{},e),l=t.styleParser?xI(e):[];return L({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:Ut,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},s)}var PI=Ct.styles;function Qy(e){var t=F.autoReplaceSvg==="nest"?Bp(e,{styleParser:!1}):Bp(e);return~t.extra.classes.indexOf(Oy)?cn("generateLayersText",e,t):cn("generateSvgReplacementMutation",e,t)}var Qn=new Set;Jf.map(function(e){Qn.add("fa-".concat(e))});Object.keys(Ma[oe]).map(Qn.add.bind(Qn));Object.keys(Ma[ye]).map(Qn.add.bind(Qn));Qn=to(Qn);function Hp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!pn)return Promise.resolve();var n=le.documentElement.classList,r=function(f){return n.add("".concat(Op,"-").concat(f))},i=function(f){return n.remove("".concat(Op,"-").concat(f))},a=F.autoFetchSvg?Qn:Jf.map(function(c){return"fa-".concat(c)}).concat(Object.keys(PI));a.includes("fa")||a.push("fa");var o=[".".concat(Oy,":not([").concat(Ir,"])")].concat(a.map(function(c){return".".concat(c,":not([").concat(Ir,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Ti(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();var l=ad.begin("onTree"),u=s.reduce(function(c,f){try{var d=Qy(f);d&&c.push(d)}catch(g){Ry||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(d){Yy(d,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(d){l(),f(d)})})}function RI(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Qy(e).then(function(n){n&&Yy([n],t)})}function OI(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Sc(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Sc(i||{})),e(r,L(L({},n),{},{mask:i}))}}var NI=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Ut:r,a=n.symbol,o=a===void 0?!1:a,s=n.mask,l=s===void 0?null:s,u=n.maskId,c=u===void 0?null:u,f=n.title,d=f===void 0?null:f,g=n.titleId,w=g===void 0?null:g,_=n.classes,I=_===void 0?[]:_,p=n.attributes,h=p===void 0?{}:p,m=n.styles,k=m===void 0?{}:m;if(t){var C=t.prefix,N=t.iconName,v=t.icon;return ml(L({type:"icon"},t),function(){return Cr("beforeDOMElementCreation",{iconDefinition:t,params:n}),F.autoA11y&&(d?h["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(w||za()):(h["aria-hidden"]="true",h.focusable="false")),id({icons:{main:kc(v),mask:l?kc(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:N,transform:L(L({},Ut),i),symbol:o,title:d,maskId:c,titleId:w,extra:{attributes:h,styles:k,classes:I}})})}},AI={mixout:function(){return{icon:OI(NI)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Hp,n.nodeCallback=RI,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?le:r,a=n.callback,o=a===void 0?function(){}:a;return Hp(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,d=r.extra;return new Promise(function(g,w){Promise.all([bc(i,s),c.iconName?bc(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(_){var I=Gf(_,2),p=I[0],h=I[1];g([n,id({icons:{main:p,mask:h},prefix:s,iconName:i,transform:l,symbol:u,maskId:f,title:a,titleId:o,extra:d,watchable:!0})])}).catch(w)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,s=n.styles,l=dl(s);l.length>0&&(i.style=l);var u;return ed(o)&&(u=cn("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(u||a.icon),{children:r,attributes:i}}}},LI={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return ml({type:"layer"},function(){Cr("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(F.cssPrefix,"-layers")].concat(to(a)).join(" ")},children:o}]})}}}},DI={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return ml({type:"counter",content:n},function(){return Cr("beforeDOMElementCreation",{content:n,params:r}),pI({content:n.toString(),title:a,extra:{attributes:u,styles:f,classes:["".concat(F.cssPrefix,"-layers-counter")].concat(to(s))}})})}}}},MI={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?Ut:i,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,d=r.styles,g=d===void 0?{}:d;return ml({type:"text",content:n},function(){return Cr("beforeDOMElementCreation",{content:n,params:r}),jp({content:n,transform:L(L({},Ut),a),title:s,extra:{attributes:f,styles:g,classes:["".concat(F.cssPrefix,"-layers-text")].concat(to(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,s=null,l=null;if(Cy){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/u,l=c.height/u}return F.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,jp({content:n.innerHTML,width:s,height:l,transform:a,title:i,extra:o,watchable:!0})])}}},jI=new RegExp('"',"ug"),Vp=[1105920,1112319];function UI(e){var t=e.replace(jI,""),n=Xx(t,0),r=n>=Vp[0]&&n<=Vp[1],i=t.length===2?t[0]===t[1]:!1;return{value:wc(i?t[0]:t),isSecondary:r||i}}function Wp(e,t){var n="".concat(Ix).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=Ti(e.children),o=a.filter(function(v){return v.getAttribute(yc)===t})[0],s=Yn.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Ox),u=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var f=s.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?ye:oe,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?ja[d][l[2].toLowerCase()]:Nx[d][u],w=UI(f),_=w.value,I=w.isSecondary,p=l[0].startsWith("FontAwesome"),h=nd(g,_),m=h;if(p){var k=iI(_);k.iconName&&k.prefix&&(h=k.iconName,g=k.prefix)}if(h&&!I&&(!o||o.getAttribute(qf)!==g||o.getAttribute(Xf)!==m)){e.setAttribute(n,m),o&&e.removeChild(o);var C=TI(),N=C.extra;N.attributes[yc]=t,bc(h,g).then(function(v){var O=id(L(L({},C),{},{icons:{main:v,mask:rd()},prefix:g,iconName:m,extra:N,watchable:!0})),D=le.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(D,e.firstChild):e.appendChild(D),D.outerHTML=O.map(function(A){return ro(A)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function FI(e){return Promise.all([Wp(e,"::before"),Wp(e,"::after")])}function zI(e){return e.parentNode!==document.head&&!~Tx.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(yc)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Kp(e){if(pn)return new Promise(function(t,n){var r=Ti(e.querySelectorAll("*")).filter(zI).map(FI),i=ad.begin("searchPseudoElements");Gy(),Promise.all(r).then(function(){i(),Ic(),t()}).catch(function(){i(),Ic(),n()})})}var $I={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Kp,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?le:r;F.searchPseudoElements&&Kp(i)}}},Yp=!1,BI={mixout:function(){return{dom:{unwatch:function(){Gy(),Yp=!0}}}},hooks:function(){return{bootstrap:function(){$p(Ec("mutationObserverCallbacks",{}))},noAuto:function(){bI()},watch:function(n){var r=n.observeMutationsRoot;Yp?Ic():$p(Ec("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Gp=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],s=a.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},HI={mixout:function(){return{parse:{transform:function(n){return Gp(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Gp(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},d={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:f,path:d};return{tag:"g",attributes:L({},g.outer),children:[{tag:"g",attributes:L({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:L(L({},r.icon.attributes),g.path)}]}]}}}},au={x:0,y:0,width:"100%",height:"100%"};function Qp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function VI(e){return e.tag==="g"?e.children:[e]}var WI={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?pl(i.split(" ").map(function(o){return o.trim()})):rd();return a.prefix||(a.prefix=Gn()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,s=n.maskId,l=n.transform,u=a.width,c=a.icon,f=o.width,d=o.icon,g=Hx({transform:l,containerWidth:f,iconWidth:u}),w={tag:"rect",attributes:L(L({},au),{},{fill:"white"})},_=c.children?{children:c.children.map(Qp)}:{},I={tag:"g",attributes:L({},g.inner),children:[Qp(L({tag:c.tag,attributes:L(L({},c.attributes),g.path)},_))]},p={tag:"g",attributes:L({},g.outer),children:[I]},h="mask-".concat(s||za()),m="clip-".concat(s||za()),k={tag:"mask",attributes:L(L({},au),{},{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,p]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:m},children:VI(d)},k]};return r.push(C,{tag:"rect",attributes:L({fill:"currentColor","clip-path":"url(#".concat(m,")"),mask:"url(#".concat(h,")")},au)}),{children:r,attributes:i}}}},KI={provides:function(t){var n=!1;Yn.matchMedia&&(n=Yn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:L(L({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=L(L({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:L(L({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:L(L({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:L(L({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:L(L({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:L(L({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:L(L({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:L(L({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},YI={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},GI=[Kx,AI,LI,DI,MI,$I,BI,HI,WI,KI,YI];sI(GI,{mixoutsTo:lt});lt.noAuto;lt.config;lt.library;lt.dom;var Cc=lt.parse;lt.findIconDefinition;lt.toHtml;var QI=lt.icon;lt.layer;lt.text;lt.counter;var qy={exports:{}},qI="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",XI=qI,JI=XI;function Xy(){}function Jy(){}Jy.resetWarningCache=Xy;var ZI=function(){function e(r,i,a,o,s,l){if(l!==JI){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Jy,resetWarningCache:Xy};return n.PropTypes=n,n};qy.exports=ZI();var eC=qy.exports;const Q=Nc(eC);function qp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Dt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?qp(Object(n),!0).forEach(function(r){ei(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function zs(e){"@babel/helpers - typeof";return zs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},zs(e)}function ei(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function tC(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function nC(e,t){if(e==null)return{};var n=tC(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Tc(e){return rC(e)||iC(e)||aC(e)||oC()}function rC(e){if(Array.isArray(e))return Pc(e)}function iC(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function aC(e,t){if(e){if(typeof e=="string")return Pc(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Pc(e,t)}}function Pc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function oC(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function sC(e){var t,n=e.beat,r=e.fade,i=e.beatFade,a=e.bounce,o=e.shake,s=e.flash,l=e.spin,u=e.spinPulse,c=e.spinReverse,f=e.pulse,d=e.fixedWidth,g=e.inverse,w=e.border,_=e.listItem,I=e.flip,p=e.size,h=e.rotation,m=e.pull,k=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":a,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":d,"fa-inverse":g,"fa-border":w,"fa-li":_,"fa-flip":I===!0,"fa-flip-horizontal":I==="horizontal"||I==="both","fa-flip-vertical":I==="vertical"||I==="both"},ei(t,"fa-".concat(p),typeof p<"u"&&p!==null),ei(t,"fa-rotate-".concat(h),typeof h<"u"&&h!==null&&h!==0),ei(t,"fa-pull-".concat(m),typeof m<"u"&&m!==null),ei(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(k).map(function(C){return k[C]?C:null}).filter(function(C){return C})}function lC(e){return e=e-0,e===e}function Zy(e){return lC(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var uC=["style"];function cC(e){return e.charAt(0).toUpperCase()+e.slice(1)}function fC(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=Zy(n.slice(0,r)),a=n.slice(r+1).trim();return i.startsWith("webkit")?t[cC(i)]=a:t[i]=a,t},{})}function e0(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return e0(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,u){var c=t.attributes[u];switch(u){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=fC(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[Zy(u)]=c}return l},{attrs:{}}),a=n.style,o=a===void 0?{}:a,s=nC(n,uC);return i.attrs.style=Dt(Dt({},i.attrs.style),o),e.apply(void 0,[t.tag,Dt(Dt({},i.attrs),s)].concat(Tc(r)))}var t0=!1;try{t0=!0}catch{}function dC(){if(!t0&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Xp(e){if(e&&zs(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Cc.icon)return Cc.icon(e);if(e===null)return null;if(e&&zs(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function ou(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ei({},e,t):{}}var Jp={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Ht=Bs.forwardRef(function(e,t){var n=Dt(Dt({},Jp),e),r=n.icon,i=n.mask,a=n.symbol,o=n.className,s=n.title,l=n.titleId,u=n.maskId,c=Xp(r),f=ou("classes",[].concat(Tc(sC(n)),Tc((o||"").split(" ")))),d=ou("transform",typeof n.transform=="string"?Cc.transform(n.transform):n.transform),g=ou("mask",Xp(i)),w=QI(c,Dt(Dt(Dt(Dt({},f),d),g),{},{symbol:a,title:s,titleId:l,maskId:u}));if(!w)return dC("Could not find icon",c),null;var _=w.abstract,I={ref:t};return Object.keys(n).forEach(function(p){Jp.hasOwnProperty(p)||(I[p]=n[p])}),hC(_[0],I)});Ht.displayName="FontAwesomeIcon";Ht.propTypes={beat:Q.bool,border:Q.bool,beatFade:Q.bool,bounce:Q.bool,className:Q.string,fade:Q.bool,flash:Q.bool,mask:Q.oneOfType([Q.object,Q.array,Q.string]),maskId:Q.string,fixedWidth:Q.bool,inverse:Q.bool,flip:Q.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Q.oneOfType([Q.object,Q.array,Q.string]),listItem:Q.bool,pull:Q.oneOf(["right","left"]),pulse:Q.bool,rotation:Q.oneOf([0,90,180,270]),shake:Q.bool,size:Q.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Q.bool,spinPulse:Q.bool,spinReverse:Q.bool,symbol:Q.oneOfType([Q.bool,Q.string]),title:Q.string,titleId:Q.string,transform:Q.oneOfType([Q.string,Q.object]),swapOpacity:Q.bool};var hC=e0.bind(null,Bs.createElement),pC={prefix:"fas",iconName:"cart-plus",icon:[576,512,[],"f217","M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z"]},Rc={prefix:"fas",iconName:"eye-slash",icon:[640,512,[],"f070","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]},mC={prefix:"fas",iconName:"circle-right",icon:[512,512,[61838,"arrow-alt-circle-right"],"f35a","M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 135.1l99.9 107.1c3.5 3.8 5.5 8.7 5.5 13.8s-2 10.1-5.5 13.8L294.6 376.9c-4.2 4.5-10.1 7.1-16.3 7.1C266 384 256 374 256 361.7l0-57.7-96 0c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32l96 0 0-57.7c0-12.3 10-22.3 22.3-22.3c6.2 0 12.1 2.6 16.3 7.1z"]},n0=mC,Oc={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},vC={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]},gC={prefix:"fas",iconName:"delete-left",icon:[576,512,[9003,"backspace"],"f55a","M576 128c0-35.3-28.7-64-64-64H205.3c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7H512c35.3 0 64-28.7 64-64V128zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"]};const yC=e=>{const{name:t,img:n,price:r,seller:i,ratings:a}=e.product,o=e.addedProduct;return S.jsxs("div",{className:"shoes",children:[S.jsx("img",{src:n,alt:""}),S.jsxs("div",{className:"shoes-text-style",children:[S.jsx("h4",{children:t}),S.jsxs("p",{children:["Price: ",r]}),S.jsxs("div",{className:"shoes-info",children:[S.jsxs("p",{children:["Manufacturer: ",i]}),S.jsxs("p",{children:["Ratings: ",a," star"]})]})]}),S.jsxs("button",{onClick:()=>o(e.product),className:"add-to-cart-btn",children:["Add to Cart ",S.jsx(Ht,{icon:pC})]})]})},r0=({cart:e,handleClearCart:t,children:n})=>{let r=0,i=0,a=0;for(const l of e)r=r+l.price*l.quantity,i=i+l.shipping*l.quantity,a=a+l.quantity;const o=r*7/100,s=r+i+o;return S.jsxs("div",{className:"cart",children:[S.jsx("h2",{children:"Order Summary"}),S.jsxs("div",{className:"cart-style",children:[S.jsxs("p",{children:["Selected Items :$",a]}),S.jsxs("p",{children:["Total Price :$",r]}),S.jsxs("p",{children:["Total Shipping Charge:$",i]}),S.jsxs("p",{children:["Tax:$",o.toFixed(2)]}),S.jsxs("h3",{children:["Grand Total:$",s.toFixed(2)]})]}),S.jsxs("div",{className:"cart-btn",children:[S.jsxs("button",{onClick:t,className:"clear-cart btn",children:["Clear cart ",S.jsx(Ht,{icon:gC})]}),n]})]})},wC=e=>{let t=vl();const n=t[e];if(!n)t[e]=1;else{const r=n+1;t[e]=r}localStorage.setItem("shopping-cart",JSON.stringify(t))},_C=e=>{const t=vl();e in t&&(delete t[e],localStorage.setItem("shopping-cart",JSON.stringify(t)))},vl=()=>{let e={};const t=localStorage.getItem("shopping-cart");return t&&(e=JSON.parse(t)),e},i0=()=>{localStorage.removeItem("shopping-cart")},EC=()=>{const[e,t]=b.useState([]);b.useEffect(()=>{fetch("products.json").then(o=>o.json()).then(o=>t(o))},[]),b.useEffect(()=>{const o=vl(),s=[];for(const l in o){const u=e.find(c=>c.id===l);if(u){const c=o[l];u.quantity=c,s.push(u)}}r(s)},[e]);const[n,r]=b.useState([]),i=o=>{let s=[];const l=n.find(u=>u.id===o.id);l?(l.quantity=l.quantity+1,s=[...n.filter(c=>c.id!==o.id),l]):(o.quantity=1,s=[...n,o]),r(s),wC(o.id)},a=()=>{r([]),i0()};return S.jsxs("div",{className:"grid-cart",children:[S.jsx("div",{className:"grid",children:e.map(o=>S.jsx(yC,{product:o,addedProduct:i},o.id))}),S.jsx("div",{children:S.jsx(r0,{cart:n,handleClearCart:a,children:S.jsx(It,{to:"/react-ecommerce-website/order",children:S.jsxs("button",{className:"review-cart btn",children:["Review Order ",S.jsx(Ht,{icon:n0})]})})})})]})},SC=({products:e,handleRemoveItems:t})=>S.jsxs("div",{className:"reviewProduct",children:[S.jsx("img",{className:"reviewProductImg",src:e.img,alt:""}),S.jsxs("div",{className:"reviewProductDetails",children:[S.jsxs("div",{className:"reviewProductLevel",children:[S.jsx("p",{className:"reviewProductHead",children:e.name}),S.jsxs("p",{children:["Price:",S.jsxs("span",{style:{color:"#F90"},children:["$",e.price]})]}),S.jsxs("div",{style:{display:"flex"},children:[S.jsxs("p",{children:["Shipping Charge:",S.jsxs("span",{style:{color:"#F90"},children:["$",e.shipping]})]}),S.jsxs("p",{style:{paddingLeft:"20px"},children:["Quantity:",S.jsx("span",{style:{color:"#F90"},children:e.quantity}),"pcs"]})]})]}),S.jsx("div",{onClick:()=>t(e.id),className:"deletebtn",children:S.jsx(Ht,{style:{width:"20px",height:"20px",color:"#EB5757"},icon:vC})})]})]}),kC=()=>{const e=nE(),[t,n]=b.useState(e),r=a=>{console.log(a);const o=t.filter(s=>s.id!==a);n(o),_C(a)},i=()=>{n([]),i0()};return S.jsxs("div",{className:"grid-cart",children:[S.jsx("div",{children:t.map(a=>S.jsx(SC,{products:a,handleRemoveItems:r},a.id))}),S.jsx("div",{className:"cart",children:S.jsx(r0,{cart:t,handleClearCart:i,children:S.jsx(It,{to:"/react-ecommerce-website/checkout",children:S.jsxs("button",{className:"review-cart btn",children:["Proceed Checkout ",S.jsx(Ht,{icon:n0})]})})})})]})},a0="/react-ecommerce-website/assets/Logo-google-icon-PNG-DAPkRTA5.png",bC=()=>{const[e,t]=b.useState(!1);return S.jsx("div",{style:{marginTop:"50px"},children:S.jsxs("div",{className:"login-container",children:[S.jsx("h2",{children:"Login"}),S.jsxs("form",{className:"login-form",children:[S.jsxs("label",{children:["Email",S.jsx("input",{type:"email",name:"email",required:!0})]}),S.jsxs("label",{className:"password-container",children:["Password",S.jsxs("div",{className:"input-icon-container",children:[S.jsx("input",{type:e?"text":"password",name:"password",required:!0}),S.jsx(Ht,{icon:e?Oc:Rc,onClick:()=>t(!e),className:"password-icon"})]})]}),S.jsx("button",{type:"submit",className:"login-button",children:"Login"}),S.jsxs("p",{children:["New to Ema-john?  ",S.jsx(It,{to:"/react-ecommerce-website/signup",children:S.jsx("span",{style:{color:"#F90"},children:" Create New Account"})})]}),S.jsx("div",{className:"or-separator",children:S.jsx("span",{children:"or"})}),S.jsxs("button",{type:"button",className:"google-button",children:[S.jsx("img",{src:a0,alt:"Google logo"})," Continue with Google"]})]})]})})},xC=()=>S.jsx("div",{children:S.jsx("p",{children:"This is manage page"})}),IC=async()=>{const t=await(await fetch("products.json")).json(),n=vl(),r=[];for(const i in n){const a=t.find(o=>o.id===i);if(a){const o=n[i];a.quantity=o,r.push(a)}}return r},CC=()=>S.jsx("div",{children:S.jsx("p",{children:"This is checkout page"})}),TC=()=>S.jsxs("div",{style:{textAlign:"center",marginTop:"50px"},children:[S.jsx("h1",{style:{fontSize:"2em",color:"#333"},children:"404 | Nothing here to see"}),S.jsx(It,{to:"/react-ecommerce-website/",children:S.jsx("button",{style:{marginTop:"20px",padding:"10px 20px",fontSize:"1em",color:"#fff",backgroundColor:"#007BFF",border:"none",borderRadius:"5px",cursor:"pointer"},children:"Go Back Home"})})]}),PC=()=>{const[e,t]=b.useState(!1),[n,r]=b.useState(!1),[i,a]=b.useState(""),{createUser:o}=b.useContext(Yf),s=l=>{l.preventDefault();const u=l.target,c=u.email.value,f=u.password.value,d=u.confirm_password.value;if(console.log(u,c,f,d),/(?=.*[a-z])/.test(f))if(/(?=.*[A-Z])/.test(f))if(/(?=.*\d)/.test(f))if(/(?=.*[@$!%*?&])/.test(f))if(/^.{8,16}$/.test(f))if(f!==d){a("Password don't match"),setTimeout(()=>a(""),3e3);return}else a("");else{a("minimum 8 characters, maximum 16 characters"),setTimeout(()=>a(""),3e3);return}else{a("at least one special character [@$!%*?&]"),setTimeout(()=>a(""),3e3);return}else{a("at least one digit [0-9]"),setTimeout(()=>a(""),3e3);return}else{a("at least one capital letter [A-Z]"),setTimeout(()=>a(""),3e3);return}else{a("at least one small letter [a-z]"),setTimeout(()=>a(""),3e3);return}o(c,f).then(g=>{const w=g.user;console.log(w),mx.success("Account created successfully!")}).catch(g=>{const w=g.message;console.log(w)})};return S.jsx("div",{style:{marginTop:"50px"},children:S.jsxs("div",{className:"signup-container",children:[S.jsx("h2",{children:"Sign Up"}),S.jsxs("form",{onSubmit:s,className:"signup-form",children:[S.jsxs("label",{children:["Email",S.jsx("input",{type:"email",name:"email",required:!0})]}),S.jsxs("label",{className:"password-container",children:["Password",S.jsxs("div",{className:"input-icon-container",children:[S.jsx("input",{type:e?"text":"password",name:"password",required:!0}),S.jsx(Ht,{icon:e?Oc:Rc,onClick:()=>t(!e),className:"password-icon"})]})]}),S.jsxs("label",{className:"password-container",children:["Confirm Password",S.jsxs("div",{className:"input-icon-container",children:[S.jsx("input",{type:n?"text":"password",name:"confirm_password",required:!0}),S.jsx(Ht,{icon:n?Oc:Rc,onClick:()=>r(!n),className:"password-icon"})]})]}),S.jsx("button",{type:"submit",className:"signup-button",children:"Sign Up"}),S.jsxs("p",{children:["Already have an account? ",S.jsx(It,{to:"/react-ecommerce-website/login",children:S.jsx("span",{style:{color:"#F90"},children:"Login"})})]}),S.jsx("div",{className:"or-separator",children:S.jsx("span",{children:"or"})}),S.jsxs("button",{type:"button",className:"google-button",children:[S.jsx("img",{src:a0,alt:"Google logo"})," Continue with Google"]})]}),S.jsx("span",{style:{color:"red",opacity:"0.7",textAlign:"start"},children:i})]})})},RC=pE([{path:"/react-ecommerce-website/",element:S.jsx(vx,{}),children:[{path:"/react-ecommerce-website/",element:S.jsx(EC,{})},{path:"/react-ecommerce-website/order",element:S.jsx(kC,{}),loader:IC},{path:"/react-ecommerce-website/manage",element:S.jsx(xC,{})},{path:"/react-ecommerce-website/login",element:S.jsx(bC,{})},{path:"/react-ecommerce-website/signup",element:S.jsx(PC,{})},{path:"/react-ecommerce-website/checkout",element:S.jsx(CC,{})},{path:"*",element:S.jsx(TC,{})}]}]);su.createRoot(document.getElementById("root")).render(S.jsx(Bs.StrictMode,{children:S.jsx(k2,{children:S.jsx(kE,{router:RC})})}));
