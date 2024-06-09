function em(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function Dc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var tm={exports:{}},Hs={},nm={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ha=Symbol.for("react.element"),k0=Symbol.for("react.portal"),b0=Symbol.for("react.fragment"),x0=Symbol.for("react.strict_mode"),I0=Symbol.for("react.profiler"),C0=Symbol.for("react.provider"),T0=Symbol.for("react.context"),P0=Symbol.for("react.forward_ref"),R0=Symbol.for("react.suspense"),O0=Symbol.for("react.memo"),N0=Symbol.for("react.lazy"),wd=Symbol.iterator;function A0(e){return e===null||typeof e!="object"?null:(e=wd&&e[wd]||e["@@iterator"],typeof e=="function"?e:null)}var rm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},im=Object.assign,am={};function bi(e,t,n){this.props=e,this.context=t,this.refs=am,this.updater=n||rm}bi.prototype.isReactComponent={};bi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};bi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function om(){}om.prototype=bi.prototype;function Mc(e,t,n){this.props=e,this.context=t,this.refs=am,this.updater=n||rm}var jc=Mc.prototype=new om;jc.constructor=Mc;im(jc,bi.prototype);jc.isPureReactComponent=!0;var _d=Array.isArray,sm=Object.prototype.hasOwnProperty,Uc={current:null},lm={key:!0,ref:!0,__self:!0,__source:!0};function um(e,t,n){var r,i={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)sm.call(t,r)&&!lm.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Ha,type:e,key:a,ref:o,props:i,_owner:Uc.current}}function L0(e,t){return{$$typeof:Ha,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Fc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ha}function D0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Sd=/\/+/g;function kl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?D0(""+e.key):t.toString(36)}function zo(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Ha:case k0:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+kl(o,0):r,_d(i)?(n="",e!=null&&(n=e.replace(Sd,"$&/")+"/"),zo(i,t,n,"",function(u){return u})):i!=null&&(Fc(i)&&(i=L0(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Sd,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",_d(e))for(var s=0;s<e.length;s++){a=e[s];var l=r+kl(a,s);o+=zo(a,t,n,l,i)}else if(l=A0(e),typeof l=="function")for(e=l.call(e),s=0;!(a=e.next()).done;)a=a.value,l=r+kl(a,s++),o+=zo(a,t,n,l,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function fo(e,t,n){if(e==null)return e;var r=[],i=0;return zo(e,r,"","",function(a){return t.call(n,a,i++)}),r}function M0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var We={current:null},$o={transition:null},j0={ReactCurrentDispatcher:We,ReactCurrentBatchConfig:$o,ReactCurrentOwner:Uc};q.Children={map:fo,forEach:function(e,t,n){fo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return fo(e,function(){t++}),t},toArray:function(e){return fo(e,function(t){return t})||[]},only:function(e){if(!Fc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};q.Component=bi;q.Fragment=b0;q.Profiler=I0;q.PureComponent=Mc;q.StrictMode=x0;q.Suspense=R0;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j0;q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=im({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=Uc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)sm.call(t,l)&&!lm.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Ha,type:e.type,key:i,ref:a,props:r,_owner:o}};q.createContext=function(e){return e={$$typeof:T0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:C0,_context:e},e.Consumer=e};q.createElement=um;q.createFactory=function(e){var t=um.bind(null,e);return t.type=e,t};q.createRef=function(){return{current:null}};q.forwardRef=function(e){return{$$typeof:P0,render:e}};q.isValidElement=Fc;q.lazy=function(e){return{$$typeof:N0,_payload:{_status:-1,_result:e},_init:M0}};q.memo=function(e,t){return{$$typeof:O0,type:e,compare:t===void 0?null:t}};q.startTransition=function(e){var t=$o.transition;$o.transition={};try{e()}finally{$o.transition=t}};q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};q.useCallback=function(e,t){return We.current.useCallback(e,t)};q.useContext=function(e){return We.current.useContext(e)};q.useDebugValue=function(){};q.useDeferredValue=function(e){return We.current.useDeferredValue(e)};q.useEffect=function(e,t){return We.current.useEffect(e,t)};q.useId=function(){return We.current.useId()};q.useImperativeHandle=function(e,t,n){return We.current.useImperativeHandle(e,t,n)};q.useInsertionEffect=function(e,t){return We.current.useInsertionEffect(e,t)};q.useLayoutEffect=function(e,t){return We.current.useLayoutEffect(e,t)};q.useMemo=function(e,t){return We.current.useMemo(e,t)};q.useReducer=function(e,t,n){return We.current.useReducer(e,t,n)};q.useRef=function(e){return We.current.useRef(e)};q.useState=function(e){return We.current.useState(e)};q.useSyncExternalStore=function(e,t,n){return We.current.useSyncExternalStore(e,t,n)};q.useTransition=function(){return We.current.useTransition()};q.version="18.2.0";nm.exports=q;var k=nm.exports;const Vs=Dc(k),U0=em({__proto__:null,default:Vs},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F0=k,z0=Symbol.for("react.element"),$0=Symbol.for("react.fragment"),B0=Object.prototype.hasOwnProperty,H0=F0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,V0={key:!0,ref:!0,__self:!0,__source:!0};function cm(e,t,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)B0.call(t,r)&&!V0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:z0,type:e,key:a,ref:o,props:i,_owner:H0.current}}Hs.Fragment=$0;Hs.jsx=cm;Hs.jsxs=cm;tm.exports=Hs;var S=tm.exports,cu={},fm={exports:{}},ot={},dm={exports:{}},hm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,B){var V=R.length;R.push(B);e:for(;0<V;){var te=V-1>>>1,ne=R[te];if(0<i(ne,B))R[te]=B,R[V]=ne,V=te;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var B=R[0],V=R.pop();if(V!==B){R[0]=V;e:for(var te=0,ne=R.length,_t=ne>>>1;te<_t;){var Je=2*(te+1)-1,Ze=R[Je],$e=Je+1,ut=R[$e];if(0>i(Ze,V))$e<ne&&0>i(ut,Ze)?(R[te]=ut,R[$e]=V,te=$e):(R[te]=Ze,R[Je]=V,te=Je);else if($e<ne&&0>i(ut,V))R[te]=ut,R[$e]=V,te=$e;else break e}}return B}function i(R,B){var V=R.sortIndex-B.sortIndex;return V!==0?V:R.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var l=[],u=[],c=1,f=null,d=3,v=!1,w=!1,_=!1,x=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(R){for(var B=n(u);B!==null;){if(B.callback===null)r(u);else if(B.startTime<=R)r(u),B.sortIndex=B.expirationTime,t(l,B);else break;B=n(u)}}function b(R){if(_=!1,m(R),!w)if(n(l)!==null)w=!0,gn(C);else{var B=n(u);B!==null&&vn(b,B.startTime-R)}}function C(R,B){w=!1,_&&(_=!1,p(O),O=-1),v=!0;var V=d;try{for(m(B),f=n(l);f!==null&&(!(f.expirationTime>B)||R&&!X());){var te=f.callback;if(typeof te=="function"){f.callback=null,d=f.priorityLevel;var ne=te(f.expirationTime<=B);B=e.unstable_now(),typeof ne=="function"?f.callback=ne:f===n(l)&&r(l),m(B)}else r(l);f=n(l)}if(f!==null)var _t=!0;else{var Je=n(u);Je!==null&&vn(b,Je.startTime-B),_t=!1}return _t}finally{f=null,d=V,v=!1}}var N=!1,g=null,O=-1,D=5,A=-1;function X(){return!(e.unstable_now()-A<D)}function we(){if(g!==null){var R=e.unstable_now();A=R;var B=!0;try{B=g(!0,R)}finally{B?de():(N=!1,g=null)}}else N=!1}var de;if(typeof h=="function")de=function(){h(we)};else if(typeof MessageChannel<"u"){var Pe=new MessageChannel,wt=Pe.port2;Pe.port1.onmessage=we,de=function(){wt.postMessage(null)}}else de=function(){x(we,0)};function gn(R){g=R,N||(N=!0,de())}function vn(R,B){O=x(function(){R(e.unstable_now())},B)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){w||v||(w=!0,gn(C))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(R){switch(d){case 1:case 2:case 3:var B=3;break;default:B=d}var V=d;d=B;try{return R()}finally{d=V}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,B){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var V=d;d=R;try{return B()}finally{d=V}},e.unstable_scheduleCallback=function(R,B,V){var te=e.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?te+V:te):V=te,R){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=V+ne,R={id:c++,callback:B,priorityLevel:R,startTime:V,expirationTime:ne,sortIndex:-1},V>te?(R.sortIndex=V,t(u,R),n(l)===null&&R===n(u)&&(_?(p(O),O=-1):_=!0,vn(b,V-te))):(R.sortIndex=ne,t(l,R),w||v||(w=!0,gn(C))),R},e.unstable_shouldYield=X,e.unstable_wrapCallback=function(R){var B=d;return function(){var V=d;d=B;try{return R.apply(this,arguments)}finally{d=V}}}})(hm);dm.exports=hm;var W0=dm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pm=k,at=W0;function T(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var mm=new Set,pa={};function Pr(e,t){hi(e,t),hi(e+"Capture",t)}function hi(e,t){for(pa[e]=t,e=0;e<t.length;e++)mm.add(t[e])}var tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fu=Object.prototype.hasOwnProperty,K0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ed={},kd={};function Y0(e){return fu.call(kd,e)?!0:fu.call(Ed,e)?!1:K0.test(e)?kd[e]=!0:(Ed[e]=!0,!1)}function G0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Q0(e,t,n,r){if(t===null||typeof t>"u"||G0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ke(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var De={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){De[e]=new Ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];De[t]=new Ke(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){De[e]=new Ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){De[e]=new Ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){De[e]=new Ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){De[e]=new Ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){De[e]=new Ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){De[e]=new Ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){De[e]=new Ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var zc=/[\-:]([a-z])/g;function $c(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(zc,$c);De[t]=new Ke(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(zc,$c);De[t]=new Ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(zc,$c);De[t]=new Ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){De[e]=new Ke(e,1,!1,e.toLowerCase(),null,!1,!1)});De.xlinkHref=new Ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){De[e]=new Ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function Bc(e,t,n,r){var i=De.hasOwnProperty(t)?De[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Q0(t,n,i,r)&&(n=null),r||i===null?Y0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var fn=pm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ho=Symbol.for("react.element"),Fr=Symbol.for("react.portal"),zr=Symbol.for("react.fragment"),Hc=Symbol.for("react.strict_mode"),du=Symbol.for("react.profiler"),gm=Symbol.for("react.provider"),vm=Symbol.for("react.context"),Vc=Symbol.for("react.forward_ref"),hu=Symbol.for("react.suspense"),pu=Symbol.for("react.suspense_list"),Wc=Symbol.for("react.memo"),xn=Symbol.for("react.lazy"),ym=Symbol.for("react.offscreen"),bd=Symbol.iterator;function ji(e){return e===null||typeof e!="object"?null:(e=bd&&e[bd]||e["@@iterator"],typeof e=="function"?e:null)}var ge=Object.assign,bl;function Gi(e){if(bl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);bl=t&&t[1]||""}return`
`+bl+e}var xl=!1;function Il(e,t){if(!e||xl)return"";xl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=s);break}}}finally{xl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Gi(e):""}function q0(e){switch(e.tag){case 5:return Gi(e.type);case 16:return Gi("Lazy");case 13:return Gi("Suspense");case 19:return Gi("SuspenseList");case 0:case 2:case 15:return e=Il(e.type,!1),e;case 11:return e=Il(e.type.render,!1),e;case 1:return e=Il(e.type,!0),e;default:return""}}function mu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case zr:return"Fragment";case Fr:return"Portal";case du:return"Profiler";case Hc:return"StrictMode";case hu:return"Suspense";case pu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case vm:return(e.displayName||"Context")+".Consumer";case gm:return(e._context.displayName||"Context")+".Provider";case Vc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Wc:return t=e.displayName||null,t!==null?t:mu(e.type)||"Memo";case xn:t=e._payload,e=e._init;try{return mu(e(t))}catch{}}return null}function X0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return mu(t);case 8:return t===Hc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Kn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function J0(e){var t=wm(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function po(e){e._valueTracker||(e._valueTracker=J0(e))}function _m(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=wm(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ss(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function gu(e,t){var n=t.checked;return ge({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function xd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Kn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Sm(e,t){t=t.checked,t!=null&&Bc(e,"checked",t,!1)}function vu(e,t){Sm(e,t);var n=Kn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?yu(e,t.type,n):t.hasOwnProperty("defaultValue")&&yu(e,t.type,Kn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Id(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function yu(e,t,n){(t!=="number"||ss(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Qi=Array.isArray;function ni(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Kn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function wu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(T(91));return ge({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Cd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(T(92));if(Qi(n)){if(1<n.length)throw Error(T(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Kn(n)}}function Em(e,t){var n=Kn(t.value),r=Kn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Td(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function km(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _u(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?km(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var mo,bm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(mo=mo||document.createElement("div"),mo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=mo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ma(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ta={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Z0=["Webkit","ms","Moz","O"];Object.keys(ta).forEach(function(e){Z0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ta[t]=ta[e]})});function xm(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ta.hasOwnProperty(e)&&ta[e]?(""+t).trim():t+"px"}function Im(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=xm(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var e1=ge({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Su(e,t){if(t){if(e1[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(T(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(T(61))}if(t.style!=null&&typeof t.style!="object")throw Error(T(62))}}function Eu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ku=null;function Kc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bu=null,ri=null,ii=null;function Pd(e){if(e=Ka(e)){if(typeof bu!="function")throw Error(T(280));var t=e.stateNode;t&&(t=Qs(t),bu(e.stateNode,e.type,t))}}function Cm(e){ri?ii?ii.push(e):ii=[e]:ri=e}function Tm(){if(ri){var e=ri,t=ii;if(ii=ri=null,Pd(e),t)for(e=0;e<t.length;e++)Pd(t[e])}}function Pm(e,t){return e(t)}function Rm(){}var Cl=!1;function Om(e,t,n){if(Cl)return e(t,n);Cl=!0;try{return Pm(e,t,n)}finally{Cl=!1,(ri!==null||ii!==null)&&(Rm(),Tm())}}function ga(e,t){var n=e.stateNode;if(n===null)return null;var r=Qs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(T(231,t,typeof n));return n}var xu=!1;if(tn)try{var Ui={};Object.defineProperty(Ui,"passive",{get:function(){xu=!0}}),window.addEventListener("test",Ui,Ui),window.removeEventListener("test",Ui,Ui)}catch{xu=!1}function t1(e,t,n,r,i,a,o,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var na=!1,ls=null,us=!1,Iu=null,n1={onError:function(e){na=!0,ls=e}};function r1(e,t,n,r,i,a,o,s,l){na=!1,ls=null,t1.apply(n1,arguments)}function i1(e,t,n,r,i,a,o,s,l){if(r1.apply(this,arguments),na){if(na){var u=ls;na=!1,ls=null}else throw Error(T(198));us||(us=!0,Iu=u)}}function Rr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Nm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Rd(e){if(Rr(e)!==e)throw Error(T(188))}function a1(e){var t=e.alternate;if(!t){if(t=Rr(e),t===null)throw Error(T(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return Rd(i),e;if(a===r)return Rd(i),t;a=a.sibling}throw Error(T(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=a;break}if(s===r){o=!0,r=i,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,r=i;break}if(s===r){o=!0,r=a,n=i;break}s=s.sibling}if(!o)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?e:t}function Am(e){return e=a1(e),e!==null?Lm(e):null}function Lm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Lm(e);if(t!==null)return t;e=e.sibling}return null}var Dm=at.unstable_scheduleCallback,Od=at.unstable_cancelCallback,o1=at.unstable_shouldYield,s1=at.unstable_requestPaint,Se=at.unstable_now,l1=at.unstable_getCurrentPriorityLevel,Yc=at.unstable_ImmediatePriority,Mm=at.unstable_UserBlockingPriority,cs=at.unstable_NormalPriority,u1=at.unstable_LowPriority,jm=at.unstable_IdlePriority,Ws=null,Ft=null;function c1(e){if(Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(Ws,e,void 0,(e.current.flags&128)===128)}catch{}}var Tt=Math.clz32?Math.clz32:h1,f1=Math.log,d1=Math.LN2;function h1(e){return e>>>=0,e===0?32:31-(f1(e)/d1|0)|0}var go=64,vo=4194304;function qi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function fs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=qi(s):(a&=o,a!==0&&(r=qi(a)))}else o=n&~i,o!==0?r=qi(o):a!==0&&(r=qi(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Tt(t),i=1<<n,r|=e[n],t&=~i;return r}function p1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function m1(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Tt(a),s=1<<o,l=i[o];l===-1?(!(s&n)||s&r)&&(i[o]=p1(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}function Cu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Um(){var e=go;return go<<=1,!(go&4194240)&&(go=64),e}function Tl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Va(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Tt(t),e[t]=n}function g1(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Tt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Gc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Tt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ee=0;function Fm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var zm,Qc,$m,Bm,Hm,Tu=!1,yo=[],Mn=null,jn=null,Un=null,va=new Map,ya=new Map,Cn=[],v1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nd(e,t){switch(e){case"focusin":case"focusout":Mn=null;break;case"dragenter":case"dragleave":jn=null;break;case"mouseover":case"mouseout":Un=null;break;case"pointerover":case"pointerout":va.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ya.delete(t.pointerId)}}function Fi(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ka(t),t!==null&&Qc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function y1(e,t,n,r,i){switch(t){case"focusin":return Mn=Fi(Mn,e,t,n,r,i),!0;case"dragenter":return jn=Fi(jn,e,t,n,r,i),!0;case"mouseover":return Un=Fi(Un,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return va.set(a,Fi(va.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,ya.set(a,Fi(ya.get(a)||null,e,t,n,r,i)),!0}return!1}function Vm(e){var t=ur(e.target);if(t!==null){var n=Rr(t);if(n!==null){if(t=n.tag,t===13){if(t=Nm(n),t!==null){e.blockedOn=t,Hm(e.priority,function(){$m(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Bo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Pu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ku=r,n.target.dispatchEvent(r),ku=null}else return t=Ka(n),t!==null&&Qc(t),e.blockedOn=n,!1;t.shift()}return!0}function Ad(e,t,n){Bo(e)&&n.delete(t)}function w1(){Tu=!1,Mn!==null&&Bo(Mn)&&(Mn=null),jn!==null&&Bo(jn)&&(jn=null),Un!==null&&Bo(Un)&&(Un=null),va.forEach(Ad),ya.forEach(Ad)}function zi(e,t){e.blockedOn===t&&(e.blockedOn=null,Tu||(Tu=!0,at.unstable_scheduleCallback(at.unstable_NormalPriority,w1)))}function wa(e){function t(i){return zi(i,e)}if(0<yo.length){zi(yo[0],e);for(var n=1;n<yo.length;n++){var r=yo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Mn!==null&&zi(Mn,e),jn!==null&&zi(jn,e),Un!==null&&zi(Un,e),va.forEach(t),ya.forEach(t),n=0;n<Cn.length;n++)r=Cn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Cn.length&&(n=Cn[0],n.blockedOn===null);)Vm(n),n.blockedOn===null&&Cn.shift()}var ai=fn.ReactCurrentBatchConfig,ds=!0;function _1(e,t,n,r){var i=ee,a=ai.transition;ai.transition=null;try{ee=1,qc(e,t,n,r)}finally{ee=i,ai.transition=a}}function S1(e,t,n,r){var i=ee,a=ai.transition;ai.transition=null;try{ee=4,qc(e,t,n,r)}finally{ee=i,ai.transition=a}}function qc(e,t,n,r){if(ds){var i=Pu(e,t,n,r);if(i===null)Ul(e,t,r,hs,n),Nd(e,r);else if(y1(i,e,t,n,r))r.stopPropagation();else if(Nd(e,r),t&4&&-1<v1.indexOf(e)){for(;i!==null;){var a=Ka(i);if(a!==null&&zm(a),a=Pu(e,t,n,r),a===null&&Ul(e,t,r,hs,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Ul(e,t,r,null,n)}}var hs=null;function Pu(e,t,n,r){if(hs=null,e=Kc(r),e=ur(e),e!==null)if(t=Rr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Nm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return hs=e,null}function Wm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(l1()){case Yc:return 1;case Mm:return 4;case cs:case u1:return 16;case jm:return 536870912;default:return 16}default:return 16}}var Ln=null,Xc=null,Ho=null;function Km(){if(Ho)return Ho;var e,t=Xc,n=t.length,r,i="value"in Ln?Ln.value:Ln.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Ho=i.slice(e,1<r?1-r:void 0)}function Vo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wo(){return!0}function Ld(){return!1}function st(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?wo:Ld,this.isPropagationStopped=Ld,this}return ge(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wo)},persist:function(){},isPersistent:wo}),t}var xi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jc=st(xi),Wa=ge({},xi,{view:0,detail:0}),E1=st(Wa),Pl,Rl,$i,Ks=ge({},Wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$i&&($i&&e.type==="mousemove"?(Pl=e.screenX-$i.screenX,Rl=e.screenY-$i.screenY):Rl=Pl=0,$i=e),Pl)},movementY:function(e){return"movementY"in e?e.movementY:Rl}}),Dd=st(Ks),k1=ge({},Ks,{dataTransfer:0}),b1=st(k1),x1=ge({},Wa,{relatedTarget:0}),Ol=st(x1),I1=ge({},xi,{animationName:0,elapsedTime:0,pseudoElement:0}),C1=st(I1),T1=ge({},xi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),P1=st(T1),R1=ge({},xi,{data:0}),Md=st(R1),O1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},N1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},A1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function L1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=A1[e])?!!t[e]:!1}function Zc(){return L1}var D1=ge({},Wa,{key:function(e){if(e.key){var t=O1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?N1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zc,charCode:function(e){return e.type==="keypress"?Vo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),M1=st(D1),j1=ge({},Ks,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jd=st(j1),U1=ge({},Wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zc}),F1=st(U1),z1=ge({},xi,{propertyName:0,elapsedTime:0,pseudoElement:0}),$1=st(z1),B1=ge({},Ks,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),H1=st(B1),V1=[9,13,27,32],ef=tn&&"CompositionEvent"in window,ra=null;tn&&"documentMode"in document&&(ra=document.documentMode);var W1=tn&&"TextEvent"in window&&!ra,Ym=tn&&(!ef||ra&&8<ra&&11>=ra),Ud=" ",Fd=!1;function Gm(e,t){switch(e){case"keyup":return V1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $r=!1;function K1(e,t){switch(e){case"compositionend":return Qm(t);case"keypress":return t.which!==32?null:(Fd=!0,Ud);case"textInput":return e=t.data,e===Ud&&Fd?null:e;default:return null}}function Y1(e,t){if($r)return e==="compositionend"||!ef&&Gm(e,t)?(e=Km(),Ho=Xc=Ln=null,$r=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ym&&t.locale!=="ko"?null:t.data;default:return null}}var G1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!G1[e.type]:t==="textarea"}function qm(e,t,n,r){Cm(r),t=ps(t,"onChange"),0<t.length&&(n=new Jc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ia=null,_a=null;function Q1(e){sg(e,0)}function Ys(e){var t=Vr(e);if(_m(t))return e}function q1(e,t){if(e==="change")return t}var Xm=!1;if(tn){var Nl;if(tn){var Al="oninput"in document;if(!Al){var $d=document.createElement("div");$d.setAttribute("oninput","return;"),Al=typeof $d.oninput=="function"}Nl=Al}else Nl=!1;Xm=Nl&&(!document.documentMode||9<document.documentMode)}function Bd(){ia&&(ia.detachEvent("onpropertychange",Jm),_a=ia=null)}function Jm(e){if(e.propertyName==="value"&&Ys(_a)){var t=[];qm(t,_a,e,Kc(e)),Om(Q1,t)}}function X1(e,t,n){e==="focusin"?(Bd(),ia=t,_a=n,ia.attachEvent("onpropertychange",Jm)):e==="focusout"&&Bd()}function J1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ys(_a)}function Z1(e,t){if(e==="click")return Ys(t)}function ew(e,t){if(e==="input"||e==="change")return Ys(t)}function tw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Rt=typeof Object.is=="function"?Object.is:tw;function Sa(e,t){if(Rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!fu.call(t,i)||!Rt(e[i],t[i]))return!1}return!0}function Hd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vd(e,t){var n=Hd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hd(n)}}function Zm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Zm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function eg(){for(var e=window,t=ss();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ss(e.document)}return t}function tf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function nw(e){var t=eg(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Zm(n.ownerDocument.documentElement,n)){if(r!==null&&tf(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Vd(n,a);var o=Vd(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var rw=tn&&"documentMode"in document&&11>=document.documentMode,Br=null,Ru=null,aa=null,Ou=!1;function Wd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ou||Br==null||Br!==ss(r)||(r=Br,"selectionStart"in r&&tf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),aa&&Sa(aa,r)||(aa=r,r=ps(Ru,"onSelect"),0<r.length&&(t=new Jc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Br)))}function _o(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Hr={animationend:_o("Animation","AnimationEnd"),animationiteration:_o("Animation","AnimationIteration"),animationstart:_o("Animation","AnimationStart"),transitionend:_o("Transition","TransitionEnd")},Ll={},tg={};tn&&(tg=document.createElement("div").style,"AnimationEvent"in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),"TransitionEvent"in window||delete Hr.transitionend.transition);function Gs(e){if(Ll[e])return Ll[e];if(!Hr[e])return e;var t=Hr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in tg)return Ll[e]=t[n];return e}var ng=Gs("animationend"),rg=Gs("animationiteration"),ig=Gs("animationstart"),ag=Gs("transitionend"),og=new Map,Kd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xn(e,t){og.set(e,t),Pr(t,[e])}for(var Dl=0;Dl<Kd.length;Dl++){var Ml=Kd[Dl],iw=Ml.toLowerCase(),aw=Ml[0].toUpperCase()+Ml.slice(1);Xn(iw,"on"+aw)}Xn(ng,"onAnimationEnd");Xn(rg,"onAnimationIteration");Xn(ig,"onAnimationStart");Xn("dblclick","onDoubleClick");Xn("focusin","onFocus");Xn("focusout","onBlur");Xn(ag,"onTransitionEnd");hi("onMouseEnter",["mouseout","mouseover"]);hi("onMouseLeave",["mouseout","mouseover"]);hi("onPointerEnter",["pointerout","pointerover"]);hi("onPointerLeave",["pointerout","pointerover"]);Pr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ow=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xi));function Yd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,i1(r,t,void 0,e),e.currentTarget=null}function sg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;Yd(i,s,u),a=l}else for(o=0;o<r.length;o++){if(s=r[o],l=s.instance,u=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;Yd(i,s,u),a=l}}}if(us)throw e=Iu,us=!1,Iu=null,e}function ae(e,t){var n=t[Mu];n===void 0&&(n=t[Mu]=new Set);var r=e+"__bubble";n.has(r)||(lg(t,e,2,!1),n.add(r))}function jl(e,t,n){var r=0;t&&(r|=4),lg(n,e,r,t)}var So="_reactListening"+Math.random().toString(36).slice(2);function Ea(e){if(!e[So]){e[So]=!0,mm.forEach(function(n){n!=="selectionchange"&&(ow.has(n)||jl(n,!1,e),jl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[So]||(t[So]=!0,jl("selectionchange",!1,t))}}function lg(e,t,n,r){switch(Wm(t)){case 1:var i=_1;break;case 4:i=S1;break;default:i=qc}n=i.bind(null,t,n,e),i=void 0,!xu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ul(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;s!==null;){if(o=ur(s),o===null)return;if(l=o.tag,l===5||l===6){r=a=o;continue e}s=s.parentNode}}r=r.return}Om(function(){var u=a,c=Kc(n),f=[];e:{var d=og.get(e);if(d!==void 0){var v=Jc,w=e;switch(e){case"keypress":if(Vo(n)===0)break e;case"keydown":case"keyup":v=M1;break;case"focusin":w="focus",v=Ol;break;case"focusout":w="blur",v=Ol;break;case"beforeblur":case"afterblur":v=Ol;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Dd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=b1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=F1;break;case ng:case rg:case ig:v=C1;break;case ag:v=$1;break;case"scroll":v=E1;break;case"wheel":v=H1;break;case"copy":case"cut":case"paste":v=P1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=jd}var _=(t&4)!==0,x=!_&&e==="scroll",p=_?d!==null?d+"Capture":null:d;_=[];for(var h=u,m;h!==null;){m=h;var b=m.stateNode;if(m.tag===5&&b!==null&&(m=b,p!==null&&(b=ga(h,p),b!=null&&_.push(ka(h,b,m)))),x)break;h=h.return}0<_.length&&(d=new v(d,w,null,n,c),f.push({event:d,listeners:_}))}}if(!(t&7)){e:{if(d=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",d&&n!==ku&&(w=n.relatedTarget||n.fromElement)&&(ur(w)||w[nn]))break e;if((v||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,v?(w=n.relatedTarget||n.toElement,v=u,w=w?ur(w):null,w!==null&&(x=Rr(w),w!==x||w.tag!==5&&w.tag!==6)&&(w=null)):(v=null,w=u),v!==w)){if(_=Dd,b="onMouseLeave",p="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(_=jd,b="onPointerLeave",p="onPointerEnter",h="pointer"),x=v==null?d:Vr(v),m=w==null?d:Vr(w),d=new _(b,h+"leave",v,n,c),d.target=x,d.relatedTarget=m,b=null,ur(c)===u&&(_=new _(p,h+"enter",w,n,c),_.target=m,_.relatedTarget=x,b=_),x=b,v&&w)t:{for(_=v,p=w,h=0,m=_;m;m=jr(m))h++;for(m=0,b=p;b;b=jr(b))m++;for(;0<h-m;)_=jr(_),h--;for(;0<m-h;)p=jr(p),m--;for(;h--;){if(_===p||p!==null&&_===p.alternate)break t;_=jr(_),p=jr(p)}_=null}else _=null;v!==null&&Gd(f,d,v,_,!1),w!==null&&x!==null&&Gd(f,x,w,_,!0)}}e:{if(d=u?Vr(u):window,v=d.nodeName&&d.nodeName.toLowerCase(),v==="select"||v==="input"&&d.type==="file")var C=q1;else if(zd(d))if(Xm)C=ew;else{C=J1;var N=X1}else(v=d.nodeName)&&v.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=Z1);if(C&&(C=C(e,u))){qm(f,C,n,c);break e}N&&N(e,d,u),e==="focusout"&&(N=d._wrapperState)&&N.controlled&&d.type==="number"&&yu(d,"number",d.value)}switch(N=u?Vr(u):window,e){case"focusin":(zd(N)||N.contentEditable==="true")&&(Br=N,Ru=u,aa=null);break;case"focusout":aa=Ru=Br=null;break;case"mousedown":Ou=!0;break;case"contextmenu":case"mouseup":case"dragend":Ou=!1,Wd(f,n,c);break;case"selectionchange":if(rw)break;case"keydown":case"keyup":Wd(f,n,c)}var g;if(ef)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else $r?Gm(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Ym&&n.locale!=="ko"&&($r||O!=="onCompositionStart"?O==="onCompositionEnd"&&$r&&(g=Km()):(Ln=c,Xc="value"in Ln?Ln.value:Ln.textContent,$r=!0)),N=ps(u,O),0<N.length&&(O=new Md(O,e,null,n,c),f.push({event:O,listeners:N}),g?O.data=g:(g=Qm(n),g!==null&&(O.data=g)))),(g=W1?K1(e,n):Y1(e,n))&&(u=ps(u,"onBeforeInput"),0<u.length&&(c=new Md("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=g))}sg(f,t)})}function ka(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ps(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=ga(e,n),a!=null&&r.unshift(ka(e,a,i)),a=ga(e,t),a!=null&&r.push(ka(e,a,i))),e=e.return}return r}function jr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Gd(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=ga(n,a),l!=null&&o.unshift(ka(n,l,s))):i||(l=ga(n,a),l!=null&&o.push(ka(n,l,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var sw=/\r\n?/g,lw=/\u0000|\uFFFD/g;function Qd(e){return(typeof e=="string"?e:""+e).replace(sw,`
`).replace(lw,"")}function Eo(e,t,n){if(t=Qd(t),Qd(e)!==t&&n)throw Error(T(425))}function ms(){}var Nu=null,Au=null;function Lu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Du=typeof setTimeout=="function"?setTimeout:void 0,uw=typeof clearTimeout=="function"?clearTimeout:void 0,qd=typeof Promise=="function"?Promise:void 0,cw=typeof queueMicrotask=="function"?queueMicrotask:typeof qd<"u"?function(e){return qd.resolve(null).then(e).catch(fw)}:Du;function fw(e){setTimeout(function(){throw e})}function Fl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),wa(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);wa(t)}function Fn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Xd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ii=Math.random().toString(36).slice(2),Mt="__reactFiber$"+Ii,ba="__reactProps$"+Ii,nn="__reactContainer$"+Ii,Mu="__reactEvents$"+Ii,dw="__reactListeners$"+Ii,hw="__reactHandles$"+Ii;function ur(e){var t=e[Mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[nn]||n[Mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Xd(e);e!==null;){if(n=e[Mt])return n;e=Xd(e)}return t}e=n,n=e.parentNode}return null}function Ka(e){return e=e[Mt]||e[nn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Vr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function Qs(e){return e[ba]||null}var ju=[],Wr=-1;function Jn(e){return{current:e}}function se(e){0>Wr||(e.current=ju[Wr],ju[Wr]=null,Wr--)}function ie(e,t){Wr++,ju[Wr]=e.current,e.current=t}var Yn={},Fe=Jn(Yn),Qe=Jn(!1),yr=Yn;function pi(e,t){var n=e.type.contextTypes;if(!n)return Yn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function qe(e){return e=e.childContextTypes,e!=null}function gs(){se(Qe),se(Fe)}function Jd(e,t,n){if(Fe.current!==Yn)throw Error(T(168));ie(Fe,t),ie(Qe,n)}function ug(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(T(108,X0(e)||"Unknown",i));return ge({},n,r)}function vs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Yn,yr=Fe.current,ie(Fe,e),ie(Qe,Qe.current),!0}function Zd(e,t,n){var r=e.stateNode;if(!r)throw Error(T(169));n?(e=ug(e,t,yr),r.__reactInternalMemoizedMergedChildContext=e,se(Qe),se(Fe),ie(Fe,e)):se(Qe),ie(Qe,n)}var Kt=null,qs=!1,zl=!1;function cg(e){Kt===null?Kt=[e]:Kt.push(e)}function pw(e){qs=!0,cg(e)}function Zn(){if(!zl&&Kt!==null){zl=!0;var e=0,t=ee;try{var n=Kt;for(ee=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Kt=null,qs=!1}catch(i){throw Kt!==null&&(Kt=Kt.slice(e+1)),Dm(Yc,Zn),i}finally{ee=t,zl=!1}}return null}var Kr=[],Yr=0,ys=null,ws=0,dt=[],ht=0,wr=null,Yt=1,Gt="";function or(e,t){Kr[Yr++]=ws,Kr[Yr++]=ys,ys=e,ws=t}function fg(e,t,n){dt[ht++]=Yt,dt[ht++]=Gt,dt[ht++]=wr,wr=e;var r=Yt;e=Gt;var i=32-Tt(r)-1;r&=~(1<<i),n+=1;var a=32-Tt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Yt=1<<32-Tt(t)+i|n<<i|r,Gt=a+e}else Yt=1<<a|n<<i|r,Gt=e}function nf(e){e.return!==null&&(or(e,1),fg(e,1,0))}function rf(e){for(;e===ys;)ys=Kr[--Yr],Kr[Yr]=null,ws=Kr[--Yr],Kr[Yr]=null;for(;e===wr;)wr=dt[--ht],dt[ht]=null,Gt=dt[--ht],dt[ht]=null,Yt=dt[--ht],dt[ht]=null}var it=null,nt=null,fe=!1,xt=null;function dg(e,t){var n=mt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function eh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,it=e,nt=Fn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,it=e,nt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=wr!==null?{id:Yt,overflow:Gt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=mt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,it=e,nt=null,!0):!1;default:return!1}}function Uu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Fu(e){if(fe){var t=nt;if(t){var n=t;if(!eh(e,t)){if(Uu(e))throw Error(T(418));t=Fn(n.nextSibling);var r=it;t&&eh(e,t)?dg(r,n):(e.flags=e.flags&-4097|2,fe=!1,it=e)}}else{if(Uu(e))throw Error(T(418));e.flags=e.flags&-4097|2,fe=!1,it=e}}}function th(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;it=e}function ko(e){if(e!==it)return!1;if(!fe)return th(e),fe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Lu(e.type,e.memoizedProps)),t&&(t=nt)){if(Uu(e))throw hg(),Error(T(418));for(;t;)dg(e,t),t=Fn(t.nextSibling)}if(th(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){nt=Fn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}nt=null}}else nt=it?Fn(e.stateNode.nextSibling):null;return!0}function hg(){for(var e=nt;e;)e=Fn(e.nextSibling)}function mi(){nt=it=null,fe=!1}function af(e){xt===null?xt=[e]:xt.push(e)}var mw=fn.ReactCurrentBatchConfig;function Et(e,t){if(e&&e.defaultProps){t=ge({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var _s=Jn(null),Ss=null,Gr=null,of=null;function sf(){of=Gr=Ss=null}function lf(e){var t=_s.current;se(_s),e._currentValue=t}function zu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function oi(e,t){Ss=e,of=Gr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ge=!0),e.firstContext=null)}function vt(e){var t=e._currentValue;if(of!==e)if(e={context:e,memoizedValue:t,next:null},Gr===null){if(Ss===null)throw Error(T(308));Gr=e,Ss.dependencies={lanes:0,firstContext:e}}else Gr=Gr.next=e;return t}var cr=null;function uf(e){cr===null?cr=[e]:cr.push(e)}function pg(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,uf(t)):(n.next=i.next,i.next=n),t.interleaved=n,rn(e,r)}function rn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var In=!1;function cf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Jt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function zn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Z&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,rn(e,n)}return i=r.interleaved,i===null?(t.next=t,uf(r)):(t.next=i.next,i.next=t),r.interleaved=t,rn(e,n)}function Wo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Gc(e,n)}}function nh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Es(e,t,n,r){var i=e.updateQueue;In=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,o===null?a=u:o.next=u,o=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==o&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(a!==null){var f=i.baseState;o=0,c=u=l=null,s=a;do{var d=s.lane,v=s.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,_=s;switch(d=t,v=n,_.tag){case 1:if(w=_.payload,typeof w=="function"){f=w.call(v,f,d);break e}f=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=_.payload,d=typeof w=="function"?w.call(v,f,d):w,d==null)break e;f=ge({},f,d);break e;case 2:In=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[s]:d.push(s))}else v={eventTime:v,lane:d,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=v,l=f):c=c.next=v,o|=d;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;d=s,s=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Sr|=o,e.lanes=o,e.memoizedState=f}}function rh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(T(191,i));i.call(r)}}}var gg=new pm.Component().refs;function $u(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ge({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Xs={isMounted:function(e){return(e=e._reactInternals)?Rr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ve(),i=Bn(e),a=Jt(r,i);a.payload=t,n!=null&&(a.callback=n),t=zn(e,a,i),t!==null&&(Pt(t,e,i,r),Wo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ve(),i=Bn(e),a=Jt(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=zn(e,a,i),t!==null&&(Pt(t,e,i,r),Wo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ve(),r=Bn(e),i=Jt(n,r);i.tag=2,t!=null&&(i.callback=t),t=zn(e,i,r),t!==null&&(Pt(t,e,r,n),Wo(t,e,r))}};function ih(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Sa(n,r)||!Sa(i,a):!0}function vg(e,t,n){var r=!1,i=Yn,a=t.contextType;return typeof a=="object"&&a!==null?a=vt(a):(i=qe(t)?yr:Fe.current,r=t.contextTypes,a=(r=r!=null)?pi(e,i):Yn),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Xs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function ah(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Xs.enqueueReplaceState(t,t.state,null)}function Bu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=gg,cf(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=vt(a):(a=qe(t)?yr:Fe.current,i.context=pi(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&($u(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Xs.enqueueReplaceState(i,i.state,null),Es(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Bi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var s=i.refs;s===gg&&(s=i.refs={}),o===null?delete s[a]:s[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,e))}return e}function bo(e,t){throw e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function oh(e){var t=e._init;return t(e._payload)}function yg(e){function t(p,h){if(e){var m=p.deletions;m===null?(p.deletions=[h],p.flags|=16):m.push(h)}}function n(p,h){if(!e)return null;for(;h!==null;)t(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=Hn(p,h),p.index=0,p.sibling=null,p}function a(p,h,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<h?(p.flags|=2,h):m):(p.flags|=2,h)):(p.flags|=1048576,h)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,h,m,b){return h===null||h.tag!==6?(h=Yl(m,p.mode,b),h.return=p,h):(h=i(h,m),h.return=p,h)}function l(p,h,m,b){var C=m.type;return C===zr?c(p,h,m.props.children,b,m.key):h!==null&&(h.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===xn&&oh(C)===h.type)?(b=i(h,m.props),b.ref=Bi(p,h,m),b.return=p,b):(b=Xo(m.type,m.key,m.props,null,p.mode,b),b.ref=Bi(p,h,m),b.return=p,b)}function u(p,h,m,b){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=Gl(m,p.mode,b),h.return=p,h):(h=i(h,m.children||[]),h.return=p,h)}function c(p,h,m,b,C){return h===null||h.tag!==7?(h=vr(m,p.mode,b,C),h.return=p,h):(h=i(h,m),h.return=p,h)}function f(p,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Yl(""+h,p.mode,m),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ho:return m=Xo(h.type,h.key,h.props,null,p.mode,m),m.ref=Bi(p,null,h),m.return=p,m;case Fr:return h=Gl(h,p.mode,m),h.return=p,h;case xn:var b=h._init;return f(p,b(h._payload),m)}if(Qi(h)||ji(h))return h=vr(h,p.mode,m,null),h.return=p,h;bo(p,h)}return null}function d(p,h,m,b){var C=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return C!==null?null:s(p,h,""+m,b);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ho:return m.key===C?l(p,h,m,b):null;case Fr:return m.key===C?u(p,h,m,b):null;case xn:return C=m._init,d(p,h,C(m._payload),b)}if(Qi(m)||ji(m))return C!==null?null:c(p,h,m,b,null);bo(p,m)}return null}function v(p,h,m,b,C){if(typeof b=="string"&&b!==""||typeof b=="number")return p=p.get(m)||null,s(h,p,""+b,C);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ho:return p=p.get(b.key===null?m:b.key)||null,l(h,p,b,C);case Fr:return p=p.get(b.key===null?m:b.key)||null,u(h,p,b,C);case xn:var N=b._init;return v(p,h,m,N(b._payload),C)}if(Qi(b)||ji(b))return p=p.get(m)||null,c(h,p,b,C,null);bo(h,b)}return null}function w(p,h,m,b){for(var C=null,N=null,g=h,O=h=0,D=null;g!==null&&O<m.length;O++){g.index>O?(D=g,g=null):D=g.sibling;var A=d(p,g,m[O],b);if(A===null){g===null&&(g=D);break}e&&g&&A.alternate===null&&t(p,g),h=a(A,h,O),N===null?C=A:N.sibling=A,N=A,g=D}if(O===m.length)return n(p,g),fe&&or(p,O),C;if(g===null){for(;O<m.length;O++)g=f(p,m[O],b),g!==null&&(h=a(g,h,O),N===null?C=g:N.sibling=g,N=g);return fe&&or(p,O),C}for(g=r(p,g);O<m.length;O++)D=v(g,p,O,m[O],b),D!==null&&(e&&D.alternate!==null&&g.delete(D.key===null?O:D.key),h=a(D,h,O),N===null?C=D:N.sibling=D,N=D);return e&&g.forEach(function(X){return t(p,X)}),fe&&or(p,O),C}function _(p,h,m,b){var C=ji(m);if(typeof C!="function")throw Error(T(150));if(m=C.call(m),m==null)throw Error(T(151));for(var N=C=null,g=h,O=h=0,D=null,A=m.next();g!==null&&!A.done;O++,A=m.next()){g.index>O?(D=g,g=null):D=g.sibling;var X=d(p,g,A.value,b);if(X===null){g===null&&(g=D);break}e&&g&&X.alternate===null&&t(p,g),h=a(X,h,O),N===null?C=X:N.sibling=X,N=X,g=D}if(A.done)return n(p,g),fe&&or(p,O),C;if(g===null){for(;!A.done;O++,A=m.next())A=f(p,A.value,b),A!==null&&(h=a(A,h,O),N===null?C=A:N.sibling=A,N=A);return fe&&or(p,O),C}for(g=r(p,g);!A.done;O++,A=m.next())A=v(g,p,O,A.value,b),A!==null&&(e&&A.alternate!==null&&g.delete(A.key===null?O:A.key),h=a(A,h,O),N===null?C=A:N.sibling=A,N=A);return e&&g.forEach(function(we){return t(p,we)}),fe&&or(p,O),C}function x(p,h,m,b){if(typeof m=="object"&&m!==null&&m.type===zr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ho:e:{for(var C=m.key,N=h;N!==null;){if(N.key===C){if(C=m.type,C===zr){if(N.tag===7){n(p,N.sibling),h=i(N,m.props.children),h.return=p,p=h;break e}}else if(N.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===xn&&oh(C)===N.type){n(p,N.sibling),h=i(N,m.props),h.ref=Bi(p,N,m),h.return=p,p=h;break e}n(p,N);break}else t(p,N);N=N.sibling}m.type===zr?(h=vr(m.props.children,p.mode,b,m.key),h.return=p,p=h):(b=Xo(m.type,m.key,m.props,null,p.mode,b),b.ref=Bi(p,h,m),b.return=p,p=b)}return o(p);case Fr:e:{for(N=m.key;h!==null;){if(h.key===N)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(p,h.sibling),h=i(h,m.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else t(p,h);h=h.sibling}h=Gl(m,p.mode,b),h.return=p,p=h}return o(p);case xn:return N=m._init,x(p,h,N(m._payload),b)}if(Qi(m))return w(p,h,m,b);if(ji(m))return _(p,h,m,b);bo(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,m),h.return=p,p=h):(n(p,h),h=Yl(m,p.mode,b),h.return=p,p=h),o(p)):n(p,h)}return x}var gi=yg(!0),wg=yg(!1),Ya={},zt=Jn(Ya),xa=Jn(Ya),Ia=Jn(Ya);function fr(e){if(e===Ya)throw Error(T(174));return e}function ff(e,t){switch(ie(Ia,t),ie(xa,e),ie(zt,Ya),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:_u(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=_u(t,e)}se(zt),ie(zt,t)}function vi(){se(zt),se(xa),se(Ia)}function _g(e){fr(Ia.current);var t=fr(zt.current),n=_u(t,e.type);t!==n&&(ie(xa,e),ie(zt,n))}function df(e){xa.current===e&&(se(zt),se(xa))}var pe=Jn(0);function ks(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var $l=[];function hf(){for(var e=0;e<$l.length;e++)$l[e]._workInProgressVersionPrimary=null;$l.length=0}var Ko=fn.ReactCurrentDispatcher,Bl=fn.ReactCurrentBatchConfig,_r=0,me=null,ke=null,Ce=null,bs=!1,oa=!1,Ca=0,gw=0;function Me(){throw Error(T(321))}function pf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Rt(e[n],t[n]))return!1;return!0}function mf(e,t,n,r,i,a){if(_r=a,me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ko.current=e===null||e.memoizedState===null?_w:Sw,e=n(r,i),oa){a=0;do{if(oa=!1,Ca=0,25<=a)throw Error(T(301));a+=1,Ce=ke=null,t.updateQueue=null,Ko.current=Ew,e=n(r,i)}while(oa)}if(Ko.current=xs,t=ke!==null&&ke.next!==null,_r=0,Ce=ke=me=null,bs=!1,t)throw Error(T(300));return e}function gf(){var e=Ca!==0;return Ca=0,e}function Lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?me.memoizedState=Ce=e:Ce=Ce.next=e,Ce}function yt(){if(ke===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var t=Ce===null?me.memoizedState:Ce.next;if(t!==null)Ce=t,ke=e;else{if(e===null)throw Error(T(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},Ce===null?me.memoizedState=Ce=e:Ce=Ce.next=e}return Ce}function Ta(e,t){return typeof t=="function"?t(e):t}function Hl(e){var t=yt(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=ke,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var s=o=null,l=null,u=a;do{var c=u.lane;if((_r&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=f,o=r):l=l.next=f,me.lanes|=c,Sr|=c}u=u.next}while(u!==null&&u!==a);l===null?o=r:l.next=s,Rt(r,t.memoizedState)||(Ge=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,me.lanes|=a,Sr|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Vl(e){var t=yt(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);Rt(a,t.memoizedState)||(Ge=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Sg(){}function Eg(e,t){var n=me,r=yt(),i=t(),a=!Rt(r.memoizedState,i);if(a&&(r.memoizedState=i,Ge=!0),r=r.queue,vf(xg.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Ce!==null&&Ce.memoizedState.tag&1){if(n.flags|=2048,Pa(9,bg.bind(null,n,r,i,t),void 0,null),Te===null)throw Error(T(349));_r&30||kg(n,t,i)}return i}function kg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function bg(e,t,n,r){t.value=n,t.getSnapshot=r,Ig(t)&&Cg(e)}function xg(e,t,n){return n(function(){Ig(t)&&Cg(e)})}function Ig(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Rt(e,n)}catch{return!0}}function Cg(e){var t=rn(e,1);t!==null&&Pt(t,e,1,-1)}function sh(e){var t=Lt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:e},t.queue=e,e=e.dispatch=ww.bind(null,me,e),[t.memoizedState,e]}function Pa(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Tg(){return yt().memoizedState}function Yo(e,t,n,r){var i=Lt();me.flags|=e,i.memoizedState=Pa(1|t,n,void 0,r===void 0?null:r)}function Js(e,t,n,r){var i=yt();r=r===void 0?null:r;var a=void 0;if(ke!==null){var o=ke.memoizedState;if(a=o.destroy,r!==null&&pf(r,o.deps)){i.memoizedState=Pa(t,n,a,r);return}}me.flags|=e,i.memoizedState=Pa(1|t,n,a,r)}function lh(e,t){return Yo(8390656,8,e,t)}function vf(e,t){return Js(2048,8,e,t)}function Pg(e,t){return Js(4,2,e,t)}function Rg(e,t){return Js(4,4,e,t)}function Og(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ng(e,t,n){return n=n!=null?n.concat([e]):null,Js(4,4,Og.bind(null,t,e),n)}function yf(){}function Ag(e,t){var n=yt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&pf(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Lg(e,t){var n=yt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&pf(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Dg(e,t,n){return _r&21?(Rt(n,t)||(n=Um(),me.lanes|=n,Sr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ge=!0),e.memoizedState=n)}function vw(e,t){var n=ee;ee=n!==0&&4>n?n:4,e(!0);var r=Bl.transition;Bl.transition={};try{e(!1),t()}finally{ee=n,Bl.transition=r}}function Mg(){return yt().memoizedState}function yw(e,t,n){var r=Bn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},jg(e))Ug(t,n);else if(n=pg(e,t,n,r),n!==null){var i=Ve();Pt(n,e,r,i),Fg(n,t,r)}}function ww(e,t,n){var r=Bn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(jg(e))Ug(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Rt(s,o)){var l=t.interleaved;l===null?(i.next=i,uf(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=pg(e,t,i,r),n!==null&&(i=Ve(),Pt(n,e,r,i),Fg(n,t,r))}}function jg(e){var t=e.alternate;return e===me||t!==null&&t===me}function Ug(e,t){oa=bs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Fg(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Gc(e,n)}}var xs={readContext:vt,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useInsertionEffect:Me,useLayoutEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useMutableSource:Me,useSyncExternalStore:Me,useId:Me,unstable_isNewReconciler:!1},_w={readContext:vt,useCallback:function(e,t){return Lt().memoizedState=[e,t===void 0?null:t],e},useContext:vt,useEffect:lh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Yo(4194308,4,Og.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Yo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Yo(4,2,e,t)},useMemo:function(e,t){var n=Lt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Lt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=yw.bind(null,me,e),[r.memoizedState,e]},useRef:function(e){var t=Lt();return e={current:e},t.memoizedState=e},useState:sh,useDebugValue:yf,useDeferredValue:function(e){return Lt().memoizedState=e},useTransition:function(){var e=sh(!1),t=e[0];return e=vw.bind(null,e[1]),Lt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=me,i=Lt();if(fe){if(n===void 0)throw Error(T(407));n=n()}else{if(n=t(),Te===null)throw Error(T(349));_r&30||kg(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,lh(xg.bind(null,r,a,e),[e]),r.flags|=2048,Pa(9,bg.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Lt(),t=Te.identifierPrefix;if(fe){var n=Gt,r=Yt;n=(r&~(1<<32-Tt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ca++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=gw++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Sw={readContext:vt,useCallback:Ag,useContext:vt,useEffect:vf,useImperativeHandle:Ng,useInsertionEffect:Pg,useLayoutEffect:Rg,useMemo:Lg,useReducer:Hl,useRef:Tg,useState:function(){return Hl(Ta)},useDebugValue:yf,useDeferredValue:function(e){var t=yt();return Dg(t,ke.memoizedState,e)},useTransition:function(){var e=Hl(Ta)[0],t=yt().memoizedState;return[e,t]},useMutableSource:Sg,useSyncExternalStore:Eg,useId:Mg,unstable_isNewReconciler:!1},Ew={readContext:vt,useCallback:Ag,useContext:vt,useEffect:vf,useImperativeHandle:Ng,useInsertionEffect:Pg,useLayoutEffect:Rg,useMemo:Lg,useReducer:Vl,useRef:Tg,useState:function(){return Vl(Ta)},useDebugValue:yf,useDeferredValue:function(e){var t=yt();return ke===null?t.memoizedState=e:Dg(t,ke.memoizedState,e)},useTransition:function(){var e=Vl(Ta)[0],t=yt().memoizedState;return[e,t]},useMutableSource:Sg,useSyncExternalStore:Eg,useId:Mg,unstable_isNewReconciler:!1};function yi(e,t){try{var n="",r=t;do n+=q0(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function Wl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Hu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var kw=typeof WeakMap=="function"?WeakMap:Map;function zg(e,t,n){n=Jt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Cs||(Cs=!0,Zu=r),Hu(e,t)},n}function $g(e,t,n){n=Jt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Hu(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Hu(e,t),typeof r!="function"&&($n===null?$n=new Set([this]):$n.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function uh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new kw;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=jw.bind(null,e,t,n),t.then(e,e))}function ch(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function fh(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Jt(-1,1),t.tag=2,zn(n,t,1))),n.lanes|=1),e)}var bw=fn.ReactCurrentOwner,Ge=!1;function He(e,t,n,r){t.child=e===null?wg(t,null,n,r):gi(t,e.child,n,r)}function dh(e,t,n,r,i){n=n.render;var a=t.ref;return oi(t,i),r=mf(e,t,n,r,a,i),n=gf(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,an(e,t,i)):(fe&&n&&nf(t),t.flags|=1,He(e,t,r,i),t.child)}function hh(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!If(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Bg(e,t,a,r,i)):(e=Xo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:Sa,n(o,r)&&e.ref===t.ref)return an(e,t,i)}return t.flags|=1,e=Hn(a,r),e.ref=t.ref,e.return=t,t.child=e}function Bg(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Sa(a,r)&&e.ref===t.ref)if(Ge=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Ge=!0);else return t.lanes=e.lanes,an(e,t,i)}return Vu(e,t,n,r,i)}function Hg(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(qr,tt),tt|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ie(qr,tt),tt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,ie(qr,tt),tt|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,ie(qr,tt),tt|=r;return He(e,t,i,n),t.child}function Vg(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Vu(e,t,n,r,i){var a=qe(n)?yr:Fe.current;return a=pi(t,a),oi(t,i),n=mf(e,t,n,r,a,i),r=gf(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,an(e,t,i)):(fe&&r&&nf(t),t.flags|=1,He(e,t,n,i),t.child)}function ph(e,t,n,r,i){if(qe(n)){var a=!0;vs(t)}else a=!1;if(oi(t,i),t.stateNode===null)Go(e,t),vg(t,n,r),Bu(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=vt(u):(u=qe(n)?yr:Fe.current,u=pi(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||l!==u)&&ah(t,o,r,u),In=!1;var d=t.memoizedState;o.state=d,Es(t,r,o,i),l=t.memoizedState,s!==r||d!==l||Qe.current||In?(typeof c=="function"&&($u(t,n,c,r),l=t.memoizedState),(s=In||ih(t,n,s,r,d,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,mg(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Et(t.type,s),o.props=u,f=t.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=vt(l):(l=qe(n)?yr:Fe.current,l=pi(t,l));var v=n.getDerivedStateFromProps;(c=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==f||d!==l)&&ah(t,o,r,l),In=!1,d=t.memoizedState,o.state=d,Es(t,r,o,i);var w=t.memoizedState;s!==f||d!==w||Qe.current||In?(typeof v=="function"&&($u(t,n,v,r),w=t.memoizedState),(u=In||ih(t,n,u,r,d,w,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),o.props=r,o.state=w,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return Wu(e,t,n,r,a,i)}function Wu(e,t,n,r,i,a){Vg(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Zd(t,n,!1),an(e,t,a);r=t.stateNode,bw.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=gi(t,e.child,null,a),t.child=gi(t,null,s,a)):He(e,t,s,a),t.memoizedState=r.state,i&&Zd(t,n,!0),t.child}function Wg(e){var t=e.stateNode;t.pendingContext?Jd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Jd(e,t.context,!1),ff(e,t.containerInfo)}function mh(e,t,n,r,i){return mi(),af(i),t.flags|=256,He(e,t,n,r),t.child}var Ku={dehydrated:null,treeContext:null,retryLane:0};function Yu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Kg(e,t,n){var r=t.pendingProps,i=pe.current,a=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ie(pe,i&1),e===null)return Fu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=tl(o,r,0,null),e=vr(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Yu(n),t.memoizedState=Ku,e):wf(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return xw(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Hn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?a=Hn(s,a):(a=vr(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?Yu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Ku,r}return a=e.child,e=a.sibling,r=Hn(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function wf(e,t){return t=tl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function xo(e,t,n,r){return r!==null&&af(r),gi(t,e.child,null,n),e=wf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function xw(e,t,n,r,i,a,o){if(n)return t.flags&256?(t.flags&=-257,r=Wl(Error(T(422))),xo(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=tl({mode:"visible",children:r.children},i,0,null),a=vr(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&gi(t,e.child,null,o),t.child.memoizedState=Yu(o),t.memoizedState=Ku,a);if(!(t.mode&1))return xo(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,a=Error(T(419)),r=Wl(a,r,void 0),xo(e,t,o,r)}if(s=(o&e.childLanes)!==0,Ge||s){if(r=Te,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,rn(e,i),Pt(r,e,i,-1))}return xf(),r=Wl(Error(T(421))),xo(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Uw.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,nt=Fn(i.nextSibling),it=t,fe=!0,xt=null,e!==null&&(dt[ht++]=Yt,dt[ht++]=Gt,dt[ht++]=wr,Yt=e.id,Gt=e.overflow,wr=t),t=wf(t,r.children),t.flags|=4096,t)}function gh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),zu(e.return,t,n)}function Kl(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function Yg(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(He(e,t,r.children,n),r=pe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gh(e,n,t);else if(e.tag===19)gh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ie(pe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ks(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Kl(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ks(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Kl(t,!0,n,null,a);break;case"together":Kl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Go(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function an(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Sr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,n=Hn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Hn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Iw(e,t,n){switch(t.tag){case 3:Wg(t),mi();break;case 5:_g(t);break;case 1:qe(t.type)&&vs(t);break;case 4:ff(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ie(_s,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ie(pe,pe.current&1),t.flags|=128,null):n&t.child.childLanes?Kg(e,t,n):(ie(pe,pe.current&1),e=an(e,t,n),e!==null?e.sibling:null);ie(pe,pe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Yg(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ie(pe,pe.current),r)break;return null;case 22:case 23:return t.lanes=0,Hg(e,t,n)}return an(e,t,n)}var Gg,Gu,Qg,qg;Gg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Gu=function(){};Qg=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,fr(zt.current);var a=null;switch(n){case"input":i=gu(e,i),r=gu(e,r),a=[];break;case"select":i=ge({},i,{value:void 0}),r=ge({},r,{value:void 0}),a=[];break;case"textarea":i=wu(e,i),r=wu(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ms)}Su(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(pa.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(a||(a=[]),a.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(pa.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ae("scroll",e),a||s===l||(a=[])):(a=a||[]).push(u,l))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};qg=function(e,t,n,r){n!==r&&(t.flags|=4)};function Hi(e,t){if(!fe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function je(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Cw(e,t,n){var r=t.pendingProps;switch(rf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(t),null;case 1:return qe(t.type)&&gs(),je(t),null;case 3:return r=t.stateNode,vi(),se(Qe),se(Fe),hf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ko(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,xt!==null&&(nc(xt),xt=null))),Gu(e,t),je(t),null;case 5:df(t);var i=fr(Ia.current);if(n=t.type,e!==null&&t.stateNode!=null)Qg(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(T(166));return je(t),null}if(e=fr(zt.current),ko(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Mt]=t,r[ba]=a,e=(t.mode&1)!==0,n){case"dialog":ae("cancel",r),ae("close",r);break;case"iframe":case"object":case"embed":ae("load",r);break;case"video":case"audio":for(i=0;i<Xi.length;i++)ae(Xi[i],r);break;case"source":ae("error",r);break;case"img":case"image":case"link":ae("error",r),ae("load",r);break;case"details":ae("toggle",r);break;case"input":xd(r,a),ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},ae("invalid",r);break;case"textarea":Cd(r,a),ae("invalid",r)}Su(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?r.textContent!==s&&(a.suppressHydrationWarning!==!0&&Eo(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&Eo(r.textContent,s,e),i=["children",""+s]):pa.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&ae("scroll",r)}switch(n){case"input":po(r),Id(r,a,!0);break;case"textarea":po(r),Td(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=ms)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=km(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Mt]=t,e[ba]=r,Gg(e,t,!1,!1),t.stateNode=e;e:{switch(o=Eu(n,r),n){case"dialog":ae("cancel",e),ae("close",e),i=r;break;case"iframe":case"object":case"embed":ae("load",e),i=r;break;case"video":case"audio":for(i=0;i<Xi.length;i++)ae(Xi[i],e);i=r;break;case"source":ae("error",e),i=r;break;case"img":case"image":case"link":ae("error",e),ae("load",e),i=r;break;case"details":ae("toggle",e),i=r;break;case"input":xd(e,r),i=gu(e,r),ae("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ge({},r,{value:void 0}),ae("invalid",e);break;case"textarea":Cd(e,r),i=wu(e,r),ae("invalid",e);break;default:i=r}Su(n,i),s=i;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?Im(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&bm(e,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ma(e,l):typeof l=="number"&&ma(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(pa.hasOwnProperty(a)?l!=null&&a==="onScroll"&&ae("scroll",e):l!=null&&Bc(e,a,l,o))}switch(n){case"input":po(e),Id(e,r,!1);break;case"textarea":po(e),Td(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Kn(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?ni(e,!!r.multiple,a,!1):r.defaultValue!=null&&ni(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ms)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return je(t),null;case 6:if(e&&t.stateNode!=null)qg(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(T(166));if(n=fr(Ia.current),fr(zt.current),ko(t)){if(r=t.stateNode,n=t.memoizedProps,r[Mt]=t,(a=r.nodeValue!==n)&&(e=it,e!==null))switch(e.tag){case 3:Eo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Eo(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Mt]=t,t.stateNode=r}return je(t),null;case 13:if(se(pe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(fe&&nt!==null&&t.mode&1&&!(t.flags&128))hg(),mi(),t.flags|=98560,a=!1;else if(a=ko(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(T(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(T(317));a[Mt]=t}else mi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;je(t),a=!1}else xt!==null&&(nc(xt),xt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||pe.current&1?be===0&&(be=3):xf())),t.updateQueue!==null&&(t.flags|=4),je(t),null);case 4:return vi(),Gu(e,t),e===null&&Ea(t.stateNode.containerInfo),je(t),null;case 10:return lf(t.type._context),je(t),null;case 17:return qe(t.type)&&gs(),je(t),null;case 19:if(se(pe),a=t.memoizedState,a===null)return je(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)Hi(a,!1);else{if(be!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=ks(e),o!==null){for(t.flags|=128,Hi(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ie(pe,pe.current&1|2),t.child}e=e.sibling}a.tail!==null&&Se()>wi&&(t.flags|=128,r=!0,Hi(a,!1),t.lanes=4194304)}else{if(!r)if(e=ks(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Hi(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!fe)return je(t),null}else 2*Se()-a.renderingStartTime>wi&&n!==1073741824&&(t.flags|=128,r=!0,Hi(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Se(),t.sibling=null,n=pe.current,ie(pe,r?n&1|2:n&1),t):(je(t),null);case 22:case 23:return bf(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?tt&1073741824&&(je(t),t.subtreeFlags&6&&(t.flags|=8192)):je(t),null;case 24:return null;case 25:return null}throw Error(T(156,t.tag))}function Tw(e,t){switch(rf(t),t.tag){case 1:return qe(t.type)&&gs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return vi(),se(Qe),se(Fe),hf(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return df(t),null;case 13:if(se(pe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));mi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return se(pe),null;case 4:return vi(),null;case 10:return lf(t.type._context),null;case 22:case 23:return bf(),null;case 24:return null;default:return null}}var Io=!1,Ue=!1,Pw=typeof WeakSet=="function"?WeakSet:Set,M=null;function Qr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ve(e,t,r)}else n.current=null}function Qu(e,t,n){try{n()}catch(r){ve(e,t,r)}}var vh=!1;function Rw(e,t){if(Nu=ds,e=eg(),tf(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,s=-1,l=-1,u=0,c=0,f=e,d=null;t:for(;;){for(var v;f!==n||i!==0&&f.nodeType!==3||(s=o+i),f!==a||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(v=f.firstChild)!==null;)d=f,f=v;for(;;){if(f===e)break t;if(d===n&&++u===i&&(s=o),d===a&&++c===r&&(l=o),(v=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=v}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Au={focusedElem:e,selectionRange:n},ds=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var _=w.memoizedProps,x=w.memoizedState,p=t.stateNode,h=p.getSnapshotBeforeUpdate(t.elementType===t.type?_:Et(t.type,_),x);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(b){ve(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return w=vh,vh=!1,w}function sa(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&Qu(t,n,a)}i=i.next}while(i!==r)}}function Zs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function qu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Xg(e){var t=e.alternate;t!==null&&(e.alternate=null,Xg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Mt],delete t[ba],delete t[Mu],delete t[dw],delete t[hw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Jg(e){return e.tag===5||e.tag===3||e.tag===4}function yh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Jg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ms));else if(r!==4&&(e=e.child,e!==null))for(Xu(e,t,n),e=e.sibling;e!==null;)Xu(e,t,n),e=e.sibling}function Ju(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ju(e,t,n),e=e.sibling;e!==null;)Ju(e,t,n),e=e.sibling}var Ae=null,kt=!1;function Sn(e,t,n){for(n=n.child;n!==null;)Zg(e,t,n),n=n.sibling}function Zg(e,t,n){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(Ws,n)}catch{}switch(n.tag){case 5:Ue||Qr(n,t);case 6:var r=Ae,i=kt;Ae=null,Sn(e,t,n),Ae=r,kt=i,Ae!==null&&(kt?(e=Ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ae.removeChild(n.stateNode));break;case 18:Ae!==null&&(kt?(e=Ae,n=n.stateNode,e.nodeType===8?Fl(e.parentNode,n):e.nodeType===1&&Fl(e,n),wa(e)):Fl(Ae,n.stateNode));break;case 4:r=Ae,i=kt,Ae=n.stateNode.containerInfo,kt=!0,Sn(e,t,n),Ae=r,kt=i;break;case 0:case 11:case 14:case 15:if(!Ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&Qu(n,t,o),i=i.next}while(i!==r)}Sn(e,t,n);break;case 1:if(!Ue&&(Qr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ve(n,t,s)}Sn(e,t,n);break;case 21:Sn(e,t,n);break;case 22:n.mode&1?(Ue=(r=Ue)||n.memoizedState!==null,Sn(e,t,n),Ue=r):Sn(e,t,n);break;default:Sn(e,t,n)}}function wh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Pw),t.forEach(function(r){var i=Fw.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function St(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:Ae=s.stateNode,kt=!1;break e;case 3:Ae=s.stateNode.containerInfo,kt=!0;break e;case 4:Ae=s.stateNode.containerInfo,kt=!0;break e}s=s.return}if(Ae===null)throw Error(T(160));Zg(a,o,i),Ae=null,kt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ve(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ev(t,e),t=t.sibling}function ev(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(St(t,e),At(e),r&4){try{sa(3,e,e.return),Zs(3,e)}catch(_){ve(e,e.return,_)}try{sa(5,e,e.return)}catch(_){ve(e,e.return,_)}}break;case 1:St(t,e),At(e),r&512&&n!==null&&Qr(n,n.return);break;case 5:if(St(t,e),At(e),r&512&&n!==null&&Qr(n,n.return),e.flags&32){var i=e.stateNode;try{ma(i,"")}catch(_){ve(e,e.return,_)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&Sm(i,a),Eu(s,o);var u=Eu(s,a);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?Im(i,f):c==="dangerouslySetInnerHTML"?bm(i,f):c==="children"?ma(i,f):Bc(i,c,f,u)}switch(s){case"input":vu(i,a);break;case"textarea":Em(i,a);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var v=a.value;v!=null?ni(i,!!a.multiple,v,!1):d!==!!a.multiple&&(a.defaultValue!=null?ni(i,!!a.multiple,a.defaultValue,!0):ni(i,!!a.multiple,a.multiple?[]:"",!1))}i[ba]=a}catch(_){ve(e,e.return,_)}}break;case 6:if(St(t,e),At(e),r&4){if(e.stateNode===null)throw Error(T(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(_){ve(e,e.return,_)}}break;case 3:if(St(t,e),At(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{wa(t.containerInfo)}catch(_){ve(e,e.return,_)}break;case 4:St(t,e),At(e);break;case 13:St(t,e),At(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Ef=Se())),r&4&&wh(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Ue=(u=Ue)||c,St(t,e),Ue=u):St(t,e),At(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(M=e,c=e.child;c!==null;){for(f=M=c;M!==null;){switch(d=M,v=d.child,d.tag){case 0:case 11:case 14:case 15:sa(4,d,d.return);break;case 1:Qr(d,d.return);var w=d.stateNode;if(typeof w.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(_){ve(r,n,_)}}break;case 5:Qr(d,d.return);break;case 22:if(d.memoizedState!==null){Sh(f);continue}}v!==null?(v.return=d,M=v):Sh(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=xm("display",o))}catch(_){ve(e,e.return,_)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(_){ve(e,e.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:St(t,e),At(e),r&4&&wh(e);break;case 21:break;default:St(t,e),At(e)}}function At(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Jg(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ma(i,""),r.flags&=-33);var a=yh(e);Ju(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=yh(e);Xu(e,s,o);break;default:throw Error(T(161))}}catch(l){ve(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ow(e,t,n){M=e,tv(e)}function tv(e,t,n){for(var r=(e.mode&1)!==0;M!==null;){var i=M,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Io;if(!o){var s=i.alternate,l=s!==null&&s.memoizedState!==null||Ue;s=Io;var u=Ue;if(Io=o,(Ue=l)&&!u)for(M=i;M!==null;)o=M,l=o.child,o.tag===22&&o.memoizedState!==null?Eh(i):l!==null?(l.return=o,M=l):Eh(i);for(;a!==null;)M=a,tv(a),a=a.sibling;M=i,Io=s,Ue=u}_h(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,M=a):_h(e)}}function _h(e){for(;M!==null;){var t=M;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ue||Zs(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ue)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Et(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&rh(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}rh(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&wa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}Ue||t.flags&512&&qu(t)}catch(d){ve(t,t.return,d)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function Sh(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function Eh(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Zs(4,t)}catch(l){ve(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ve(t,i,l)}}var a=t.return;try{qu(t)}catch(l){ve(t,a,l)}break;case 5:var o=t.return;try{qu(t)}catch(l){ve(t,o,l)}}}catch(l){ve(t,t.return,l)}if(t===e){M=null;break}var s=t.sibling;if(s!==null){s.return=t.return,M=s;break}M=t.return}}var Nw=Math.ceil,Is=fn.ReactCurrentDispatcher,_f=fn.ReactCurrentOwner,gt=fn.ReactCurrentBatchConfig,Z=0,Te=null,Ee=null,Le=0,tt=0,qr=Jn(0),be=0,Ra=null,Sr=0,el=0,Sf=0,la=null,Ye=null,Ef=0,wi=1/0,Wt=null,Cs=!1,Zu=null,$n=null,Co=!1,Dn=null,Ts=0,ua=0,ec=null,Qo=-1,qo=0;function Ve(){return Z&6?Se():Qo!==-1?Qo:Qo=Se()}function Bn(e){return e.mode&1?Z&2&&Le!==0?Le&-Le:mw.transition!==null?(qo===0&&(qo=Um()),qo):(e=ee,e!==0||(e=window.event,e=e===void 0?16:Wm(e.type)),e):1}function Pt(e,t,n,r){if(50<ua)throw ua=0,ec=null,Error(T(185));Va(e,n,r),(!(Z&2)||e!==Te)&&(e===Te&&(!(Z&2)&&(el|=n),be===4&&Tn(e,Le)),Xe(e,r),n===1&&Z===0&&!(t.mode&1)&&(wi=Se()+500,qs&&Zn()))}function Xe(e,t){var n=e.callbackNode;m1(e,t);var r=fs(e,e===Te?Le:0);if(r===0)n!==null&&Od(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Od(n),t===1)e.tag===0?pw(kh.bind(null,e)):cg(kh.bind(null,e)),cw(function(){!(Z&6)&&Zn()}),n=null;else{switch(Fm(r)){case 1:n=Yc;break;case 4:n=Mm;break;case 16:n=cs;break;case 536870912:n=jm;break;default:n=cs}n=uv(n,nv.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function nv(e,t){if(Qo=-1,qo=0,Z&6)throw Error(T(327));var n=e.callbackNode;if(si()&&e.callbackNode!==n)return null;var r=fs(e,e===Te?Le:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ps(e,r);else{t=r;var i=Z;Z|=2;var a=iv();(Te!==e||Le!==t)&&(Wt=null,wi=Se()+500,gr(e,t));do try{Dw();break}catch(s){rv(e,s)}while(!0);sf(),Is.current=a,Z=i,Ee!==null?t=0:(Te=null,Le=0,t=be)}if(t!==0){if(t===2&&(i=Cu(e),i!==0&&(r=i,t=tc(e,i))),t===1)throw n=Ra,gr(e,0),Tn(e,r),Xe(e,Se()),n;if(t===6)Tn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Aw(i)&&(t=Ps(e,r),t===2&&(a=Cu(e),a!==0&&(r=a,t=tc(e,a))),t===1))throw n=Ra,gr(e,0),Tn(e,r),Xe(e,Se()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(T(345));case 2:sr(e,Ye,Wt);break;case 3:if(Tn(e,r),(r&130023424)===r&&(t=Ef+500-Se(),10<t)){if(fs(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ve(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Du(sr.bind(null,e,Ye,Wt),t);break}sr(e,Ye,Wt);break;case 4:if(Tn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Tt(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=Se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Nw(r/1960))-r,10<r){e.timeoutHandle=Du(sr.bind(null,e,Ye,Wt),r);break}sr(e,Ye,Wt);break;case 5:sr(e,Ye,Wt);break;default:throw Error(T(329))}}}return Xe(e,Se()),e.callbackNode===n?nv.bind(null,e):null}function tc(e,t){var n=la;return e.current.memoizedState.isDehydrated&&(gr(e,t).flags|=256),e=Ps(e,t),e!==2&&(t=Ye,Ye=n,t!==null&&nc(t)),e}function nc(e){Ye===null?Ye=e:Ye.push.apply(Ye,e)}function Aw(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Rt(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Tn(e,t){for(t&=~Sf,t&=~el,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Tt(t),r=1<<n;e[n]=-1,t&=~r}}function kh(e){if(Z&6)throw Error(T(327));si();var t=fs(e,0);if(!(t&1))return Xe(e,Se()),null;var n=Ps(e,t);if(e.tag!==0&&n===2){var r=Cu(e);r!==0&&(t=r,n=tc(e,r))}if(n===1)throw n=Ra,gr(e,0),Tn(e,t),Xe(e,Se()),n;if(n===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,sr(e,Ye,Wt),Xe(e,Se()),null}function kf(e,t){var n=Z;Z|=1;try{return e(t)}finally{Z=n,Z===0&&(wi=Se()+500,qs&&Zn())}}function Er(e){Dn!==null&&Dn.tag===0&&!(Z&6)&&si();var t=Z;Z|=1;var n=gt.transition,r=ee;try{if(gt.transition=null,ee=1,e)return e()}finally{ee=r,gt.transition=n,Z=t,!(Z&6)&&Zn()}}function bf(){tt=qr.current,se(qr)}function gr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,uw(n)),Ee!==null)for(n=Ee.return;n!==null;){var r=n;switch(rf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&gs();break;case 3:vi(),se(Qe),se(Fe),hf();break;case 5:df(r);break;case 4:vi();break;case 13:se(pe);break;case 19:se(pe);break;case 10:lf(r.type._context);break;case 22:case 23:bf()}n=n.return}if(Te=e,Ee=e=Hn(e.current,null),Le=tt=t,be=0,Ra=null,Sf=el=Sr=0,Ye=la=null,cr!==null){for(t=0;t<cr.length;t++)if(n=cr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}cr=null}return e}function rv(e,t){do{var n=Ee;try{if(sf(),Ko.current=xs,bs){for(var r=me.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}bs=!1}if(_r=0,Ce=ke=me=null,oa=!1,Ca=0,_f.current=null,n===null||n.return===null){be=1,Ra=t,Ee=null;break}e:{var a=e,o=n.return,s=n,l=t;if(t=Le,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var v=ch(o);if(v!==null){v.flags&=-257,fh(v,o,s,a,t),v.mode&1&&uh(a,u,t),t=v,l=u;var w=t.updateQueue;if(w===null){var _=new Set;_.add(l),t.updateQueue=_}else w.add(l);break e}else{if(!(t&1)){uh(a,u,t),xf();break e}l=Error(T(426))}}else if(fe&&s.mode&1){var x=ch(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),fh(x,o,s,a,t),af(yi(l,s));break e}}a=l=yi(l,s),be!==4&&(be=2),la===null?la=[a]:la.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var p=zg(a,l,t);nh(a,p);break e;case 1:s=l;var h=a.type,m=a.stateNode;if(!(a.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&($n===null||!$n.has(m)))){a.flags|=65536,t&=-t,a.lanes|=t;var b=$g(a,s,t);nh(a,b);break e}}a=a.return}while(a!==null)}ov(n)}catch(C){t=C,Ee===n&&n!==null&&(Ee=n=n.return);continue}break}while(!0)}function iv(){var e=Is.current;return Is.current=xs,e===null?xs:e}function xf(){(be===0||be===3||be===2)&&(be=4),Te===null||!(Sr&268435455)&&!(el&268435455)||Tn(Te,Le)}function Ps(e,t){var n=Z;Z|=2;var r=iv();(Te!==e||Le!==t)&&(Wt=null,gr(e,t));do try{Lw();break}catch(i){rv(e,i)}while(!0);if(sf(),Z=n,Is.current=r,Ee!==null)throw Error(T(261));return Te=null,Le=0,be}function Lw(){for(;Ee!==null;)av(Ee)}function Dw(){for(;Ee!==null&&!o1();)av(Ee)}function av(e){var t=lv(e.alternate,e,tt);e.memoizedProps=e.pendingProps,t===null?ov(e):Ee=t,_f.current=null}function ov(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Tw(n,t),n!==null){n.flags&=32767,Ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{be=6,Ee=null;return}}else if(n=Cw(n,t,tt),n!==null){Ee=n;return}if(t=t.sibling,t!==null){Ee=t;return}Ee=t=e}while(t!==null);be===0&&(be=5)}function sr(e,t,n){var r=ee,i=gt.transition;try{gt.transition=null,ee=1,Mw(e,t,n,r)}finally{gt.transition=i,ee=r}return null}function Mw(e,t,n,r){do si();while(Dn!==null);if(Z&6)throw Error(T(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(g1(e,a),e===Te&&(Ee=Te=null,Le=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Co||(Co=!0,uv(cs,function(){return si(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=gt.transition,gt.transition=null;var o=ee;ee=1;var s=Z;Z|=4,_f.current=null,Rw(e,n),ev(n,e),nw(Au),ds=!!Nu,Au=Nu=null,e.current=n,Ow(n),s1(),Z=s,ee=o,gt.transition=a}else e.current=n;if(Co&&(Co=!1,Dn=e,Ts=i),a=e.pendingLanes,a===0&&($n=null),c1(n.stateNode),Xe(e,Se()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Cs)throw Cs=!1,e=Zu,Zu=null,e;return Ts&1&&e.tag!==0&&si(),a=e.pendingLanes,a&1?e===ec?ua++:(ua=0,ec=e):ua=0,Zn(),null}function si(){if(Dn!==null){var e=Fm(Ts),t=gt.transition,n=ee;try{if(gt.transition=null,ee=16>e?16:e,Dn===null)var r=!1;else{if(e=Dn,Dn=null,Ts=0,Z&6)throw Error(T(331));var i=Z;for(Z|=4,M=e.current;M!==null;){var a=M,o=a.child;if(M.flags&16){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(M=u;M!==null;){var c=M;switch(c.tag){case 0:case 11:case 15:sa(8,c,a)}var f=c.child;if(f!==null)f.return=c,M=f;else for(;M!==null;){c=M;var d=c.sibling,v=c.return;if(Xg(c),c===u){M=null;break}if(d!==null){d.return=v,M=d;break}M=v}}}var w=a.alternate;if(w!==null){var _=w.child;if(_!==null){w.child=null;do{var x=_.sibling;_.sibling=null,_=x}while(_!==null)}}M=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,M=o;else e:for(;M!==null;){if(a=M,a.flags&2048)switch(a.tag){case 0:case 11:case 15:sa(9,a,a.return)}var p=a.sibling;if(p!==null){p.return=a.return,M=p;break e}M=a.return}}var h=e.current;for(M=h;M!==null;){o=M;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,M=m;else e:for(o=h;M!==null;){if(s=M,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Zs(9,s)}}catch(C){ve(s,s.return,C)}if(s===o){M=null;break e}var b=s.sibling;if(b!==null){b.return=s.return,M=b;break e}M=s.return}}if(Z=i,Zn(),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(Ws,e)}catch{}r=!0}return r}finally{ee=n,gt.transition=t}}return!1}function bh(e,t,n){t=yi(n,t),t=zg(e,t,1),e=zn(e,t,1),t=Ve(),e!==null&&(Va(e,1,t),Xe(e,t))}function ve(e,t,n){if(e.tag===3)bh(e,e,n);else for(;t!==null;){if(t.tag===3){bh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($n===null||!$n.has(r))){e=yi(n,e),e=$g(t,e,1),t=zn(t,e,1),e=Ve(),t!==null&&(Va(t,1,e),Xe(t,e));break}}t=t.return}}function jw(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ve(),e.pingedLanes|=e.suspendedLanes&n,Te===e&&(Le&n)===n&&(be===4||be===3&&(Le&130023424)===Le&&500>Se()-Ef?gr(e,0):Sf|=n),Xe(e,t)}function sv(e,t){t===0&&(e.mode&1?(t=vo,vo<<=1,!(vo&130023424)&&(vo=4194304)):t=1);var n=Ve();e=rn(e,t),e!==null&&(Va(e,t,n),Xe(e,n))}function Uw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),sv(e,n)}function Fw(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(t),sv(e,n)}var lv;lv=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Qe.current)Ge=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ge=!1,Iw(e,t,n);Ge=!!(e.flags&131072)}else Ge=!1,fe&&t.flags&1048576&&fg(t,ws,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Go(e,t),e=t.pendingProps;var i=pi(t,Fe.current);oi(t,n),i=mf(null,t,r,e,i,n);var a=gf();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,qe(r)?(a=!0,vs(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,cf(t),i.updater=Xs,t.stateNode=i,i._reactInternals=t,Bu(t,r,e,n),t=Wu(null,t,r,!0,a,n)):(t.tag=0,fe&&a&&nf(t),He(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Go(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=$w(r),e=Et(r,e),i){case 0:t=Vu(null,t,r,e,n);break e;case 1:t=ph(null,t,r,e,n);break e;case 11:t=dh(null,t,r,e,n);break e;case 14:t=hh(null,t,r,Et(r.type,e),n);break e}throw Error(T(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Et(r,i),Vu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Et(r,i),ph(e,t,r,i,n);case 3:e:{if(Wg(t),e===null)throw Error(T(387));r=t.pendingProps,a=t.memoizedState,i=a.element,mg(e,t),Es(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=yi(Error(T(423)),t),t=mh(e,t,r,n,i);break e}else if(r!==i){i=yi(Error(T(424)),t),t=mh(e,t,r,n,i);break e}else for(nt=Fn(t.stateNode.containerInfo.firstChild),it=t,fe=!0,xt=null,n=wg(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(mi(),r===i){t=an(e,t,n);break e}He(e,t,r,n)}t=t.child}return t;case 5:return _g(t),e===null&&Fu(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,Lu(r,i)?o=null:a!==null&&Lu(r,a)&&(t.flags|=32),Vg(e,t),He(e,t,o,n),t.child;case 6:return e===null&&Fu(t),null;case 13:return Kg(e,t,n);case 4:return ff(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=gi(t,null,r,n):He(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Et(r,i),dh(e,t,r,i,n);case 7:return He(e,t,t.pendingProps,n),t.child;case 8:return He(e,t,t.pendingProps.children,n),t.child;case 12:return He(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,ie(_s,r._currentValue),r._currentValue=o,a!==null)if(Rt(a.value,o)){if(a.children===i.children&&!Qe.current){t=an(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(a.tag===1){l=Jt(-1,n&-n),l.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),zu(a.return,n,t),s.lanes|=n;break}l=l.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(T(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),zu(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}He(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,oi(t,n),i=vt(i),r=r(i),t.flags|=1,He(e,t,r,n),t.child;case 14:return r=t.type,i=Et(r,t.pendingProps),i=Et(r.type,i),hh(e,t,r,i,n);case 15:return Bg(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Et(r,i),Go(e,t),t.tag=1,qe(r)?(e=!0,vs(t)):e=!1,oi(t,n),vg(t,r,i),Bu(t,r,i,n),Wu(null,t,r,!0,e,n);case 19:return Yg(e,t,n);case 22:return Hg(e,t,n)}throw Error(T(156,t.tag))};function uv(e,t){return Dm(e,t)}function zw(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mt(e,t,n,r){return new zw(e,t,n,r)}function If(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $w(e){if(typeof e=="function")return If(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Vc)return 11;if(e===Wc)return 14}return 2}function Hn(e,t){var n=e.alternate;return n===null?(n=mt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xo(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")If(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case zr:return vr(n.children,i,a,t);case Hc:o=8,i|=8;break;case du:return e=mt(12,n,t,i|2),e.elementType=du,e.lanes=a,e;case hu:return e=mt(13,n,t,i),e.elementType=hu,e.lanes=a,e;case pu:return e=mt(19,n,t,i),e.elementType=pu,e.lanes=a,e;case ym:return tl(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case gm:o=10;break e;case vm:o=9;break e;case Vc:o=11;break e;case Wc:o=14;break e;case xn:o=16,r=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return t=mt(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function vr(e,t,n,r){return e=mt(7,e,r,t),e.lanes=n,e}function tl(e,t,n,r){return e=mt(22,e,r,t),e.elementType=ym,e.lanes=n,e.stateNode={isHidden:!1},e}function Yl(e,t,n){return e=mt(6,e,null,t),e.lanes=n,e}function Gl(e,t,n){return t=mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Bw(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tl(0),this.expirationTimes=Tl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Cf(e,t,n,r,i,a,o,s,l){return e=new Bw(e,t,n,s,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=mt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},cf(a),e}function Hw(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function cv(e){if(!e)return Yn;e=e._reactInternals;e:{if(Rr(e)!==e||e.tag!==1)throw Error(T(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(T(171))}if(e.tag===1){var n=e.type;if(qe(n))return ug(e,n,t)}return t}function fv(e,t,n,r,i,a,o,s,l){return e=Cf(n,r,!0,e,i,a,o,s,l),e.context=cv(null),n=e.current,r=Ve(),i=Bn(n),a=Jt(r,i),a.callback=t??null,zn(n,a,i),e.current.lanes=i,Va(e,i,r),Xe(e,r),e}function nl(e,t,n,r){var i=t.current,a=Ve(),o=Bn(i);return n=cv(n),t.context===null?t.context=n:t.pendingContext=n,t=Jt(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=zn(i,t,o),e!==null&&(Pt(e,i,o,a),Wo(e,i,o)),o}function Rs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function xh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Tf(e,t){xh(e,t),(e=e.alternate)&&xh(e,t)}function Vw(){return null}var dv=typeof reportError=="function"?reportError:function(e){console.error(e)};function Pf(e){this._internalRoot=e}rl.prototype.render=Pf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));nl(e,t,null,null)};rl.prototype.unmount=Pf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Er(function(){nl(null,e,null,null)}),t[nn]=null}};function rl(e){this._internalRoot=e}rl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Bm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Cn.length&&t!==0&&t<Cn[n].priority;n++);Cn.splice(n,0,e),n===0&&Vm(e)}};function Rf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function il(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ih(){}function Ww(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var u=Rs(o);a.call(u)}}var o=fv(t,r,e,0,null,!1,!1,"",Ih);return e._reactRootContainer=o,e[nn]=o.current,Ea(e.nodeType===8?e.parentNode:e),Er(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=Rs(l);s.call(u)}}var l=Cf(e,0,!1,null,null,!1,!1,"",Ih);return e._reactRootContainer=l,e[nn]=l.current,Ea(e.nodeType===8?e.parentNode:e),Er(function(){nl(t,l,n,r)}),l}function al(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var s=i;i=function(){var l=Rs(o);s.call(l)}}nl(t,o,e,i)}else o=Ww(n,t,e,i,r);return Rs(o)}zm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=qi(t.pendingLanes);n!==0&&(Gc(t,n|1),Xe(t,Se()),!(Z&6)&&(wi=Se()+500,Zn()))}break;case 13:Er(function(){var r=rn(e,1);if(r!==null){var i=Ve();Pt(r,e,1,i)}}),Tf(e,1)}};Qc=function(e){if(e.tag===13){var t=rn(e,134217728);if(t!==null){var n=Ve();Pt(t,e,134217728,n)}Tf(e,134217728)}};$m=function(e){if(e.tag===13){var t=Bn(e),n=rn(e,t);if(n!==null){var r=Ve();Pt(n,e,t,r)}Tf(e,t)}};Bm=function(){return ee};Hm=function(e,t){var n=ee;try{return ee=e,t()}finally{ee=n}};bu=function(e,t,n){switch(t){case"input":if(vu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Qs(r);if(!i)throw Error(T(90));_m(r),vu(r,i)}}}break;case"textarea":Em(e,n);break;case"select":t=n.value,t!=null&&ni(e,!!n.multiple,t,!1)}};Pm=kf;Rm=Er;var Kw={usingClientEntryPoint:!1,Events:[Ka,Vr,Qs,Cm,Tm,kf]},Vi={findFiberByHostInstance:ur,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Yw={bundleType:Vi.bundleType,version:Vi.version,rendererPackageName:Vi.rendererPackageName,rendererConfig:Vi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Am(e),e===null?null:e.stateNode},findFiberByHostInstance:Vi.findFiberByHostInstance||Vw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var To=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!To.isDisabled&&To.supportsFiber)try{Ws=To.inject(Yw),Ft=To}catch{}}ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kw;ot.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rf(t))throw Error(T(200));return Hw(e,t,null,n)};ot.createRoot=function(e,t){if(!Rf(e))throw Error(T(299));var n=!1,r="",i=dv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Cf(e,1,!1,null,null,n,!1,r,i),e[nn]=t.current,Ea(e.nodeType===8?e.parentNode:e),new Pf(t)};ot.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=Am(t),e=e===null?null:e.stateNode,e};ot.flushSync=function(e){return Er(e)};ot.hydrate=function(e,t,n){if(!il(t))throw Error(T(200));return al(null,e,t,!0,n)};ot.hydrateRoot=function(e,t,n){if(!Rf(e))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=dv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=fv(t,null,e,1,n??null,i,!1,a,o),e[nn]=t.current,Ea(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new rl(t)};ot.render=function(e,t,n){if(!il(t))throw Error(T(200));return al(null,e,t,!1,n)};ot.unmountComponentAtNode=function(e){if(!il(e))throw Error(T(40));return e._reactRootContainer?(Er(function(){al(null,null,e,!1,function(){e._reactRootContainer=null,e[nn]=null})}),!0):!1};ot.unstable_batchedUpdates=kf;ot.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!il(n))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return al(e,t,n,!1,r)};ot.version="18.2.0-next-9e3b772b8-20220608";function hv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hv)}catch(e){console.error(e)}}hv(),fm.exports=ot;var Of=fm.exports;const Gw=Dc(Of),Qw=em({__proto__:null,default:Gw},[Of]);var Ch=Of;cu.createRoot=Ch.createRoot,cu.hydrateRoot=Ch.hydrateRoot;/**
 * @remix-run/router v1.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function he(){return he=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},he.apply(this,arguments)}var _e;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(_e||(_e={}));const Th="popstate";function qw(e){e===void 0&&(e={});function t(r,i){let{pathname:a,search:o,hash:s}=r.location;return Oa("",{pathname:a,search:o,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:kr(i)}return Jw(t,n,null,e)}function G(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function _i(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Xw(){return Math.random().toString(36).substr(2,8)}function Ph(e,t){return{usr:e.state,key:e.key,idx:t}}function Oa(e,t,n,r){return n===void 0&&(n=null),he({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?dn(t):t,{state:n,key:t&&t.key||r||Xw()})}function kr(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function dn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Jw(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=_e.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(he({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function f(){s=_e.Pop;let x=c(),p=x==null?null:x-u;u=x,l&&l({action:s,location:_.location,delta:p})}function d(x,p){s=_e.Push;let h=Oa(_.location,x,p);n&&n(h,x),u=c()+1;let m=Ph(h,u),b=_.createHref(h);try{o.pushState(m,"",b)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(b)}a&&l&&l({action:s,location:_.location,delta:1})}function v(x,p){s=_e.Replace;let h=Oa(_.location,x,p);n&&n(h,x),u=c();let m=Ph(h,u),b=_.createHref(h);o.replaceState(m,"",b),a&&l&&l({action:s,location:_.location,delta:0})}function w(x){let p=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof x=="string"?x:kr(x);return h=h.replace(/ $/,"%20"),G(p,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,p)}let _={get action(){return s},get location(){return e(i,o)},listen(x){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Th,f),l=x,()=>{i.removeEventListener(Th,f),l=null}},createHref(x){return t(i,x)},createURL:w,encodeLocation(x){let p=w(x);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:d,replace:v,go(x){return o.go(x)}};return _}var ce;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ce||(ce={}));const Zw=new Set(["lazy","caseSensitive","path","id","index","children"]);function e_(e){return e.index===!0}function rc(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((i,a)=>{let o=[...n,a],s=typeof i.id=="string"?i.id:o.join("-");if(G(i.index!==!0||!i.children,"Cannot specify children on an index route"),G(!r[s],'Found a route id collision on id "'+s+`".  Route id's must be globally unique within Data Router usages`),e_(i)){let l=he({},i,t(i),{id:s});return r[s]=l,l}else{let l=he({},i,t(i),{id:s,children:void 0});return r[s]=l,i.children&&(l.children=rc(i.children,t,o,r)),l}})}function Xr(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?dn(t):t,i=Ci(r.pathname||"/",n);if(i==null)return null;let a=pv(e);n_(a);let o=null;for(let s=0;o==null&&s<a.length;++s){let l=p_(i);o=f_(a[s],l)}return o}function t_(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],handle:n.handle}}function pv(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(a,o,s)=>{let l={relativePath:s===void 0?a.path||"":s,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};l.relativePath.startsWith("/")&&(G(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Zt([r,l.relativePath]),c=n.concat(l);a.children&&a.children.length>0&&(G(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),pv(a.children,t,c,u)),!(a.path==null&&!a.index)&&t.push({path:u,score:u_(u,a.index),routesMeta:c})};return e.forEach((a,o)=>{var s;if(a.path===""||!((s=a.path)!=null&&s.includes("?")))i(a,o);else for(let l of mv(a.path))i(a,o,l)}),t}function mv(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let o=mv(r.join("/")),s=[];return s.push(...o.map(l=>l===""?a:[a,l].join("/"))),i&&s.push(...o),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function n_(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:c_(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const r_=/^:[\w-]+$/,i_=3,a_=2,o_=1,s_=10,l_=-2,Rh=e=>e==="*";function u_(e,t){let n=e.split("/"),r=n.length;return n.some(Rh)&&(r+=l_),t&&(r+=a_),n.filter(i=>!Rh(i)).reduce((i,a)=>i+(r_.test(a)?i_:a===""?o_:s_),r)}function c_(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function f_(e,t){let{routesMeta:n}=e,r={},i="/",a=[];for(let o=0;o<n.length;++o){let s=n[o],l=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=d_({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=s.route;a.push({params:r,pathname:Zt([i,c.pathname]),pathnameBase:v_(Zt([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=Zt([i,c.pathnameBase]))}return a}function d_(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=h_(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,c,f)=>{let{paramName:d,isOptional:v}=c;if(d==="*"){let _=s[f]||"";o=a.slice(0,a.length-_.length).replace(/(.)\/+$/,"$1")}const w=s[f];return v&&!w?u[d]=void 0:u[d]=(w||"").replace(/%2F/g,"/"),u},{}),pathname:a,pathnameBase:o,pattern:e}}function h_(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),_i(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,l)=>(r.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function p_(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return _i(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Ci(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function m_(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?dn(e):e;return{pathname:n?n.startsWith("/")?n:g_(n,t):t,search:y_(r),hash:w_(i)}}function g_(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ql(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function gv(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ol(e,t){let n=gv(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function sl(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=dn(e):(i=he({},e),G(!i.pathname||!i.pathname.includes("?"),Ql("?","pathname","search",i)),G(!i.pathname||!i.pathname.includes("#"),Ql("#","pathname","hash",i)),G(!i.search||!i.search.includes("#"),Ql("#","search","hash",i)));let a=e===""||i.pathname==="",o=a?"/":i.pathname,s;if(o==null)s=n;else{let f=t.length-1;if(!r&&o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),f-=1;i.pathname=d.join("/")}s=f>=0?t[f]:"/"}let l=m_(i,s),u=o&&o!=="/"&&o.endsWith("/"),c=(a||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Zt=e=>e.join("/").replace(/\/\/+/g,"/"),v_=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),y_=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,w_=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Nf{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Af(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const vv=["post","put","patch","delete"],__=new Set(vv),S_=["get",...vv],E_=new Set(S_),k_=new Set([301,302,303,307,308]),b_=new Set([307,308]),ql={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},x_={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Wi={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Lf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,I_=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),yv="remix-router-transitions";function C_(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;G(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(e.mapRouteProperties)i=e.mapRouteProperties;else if(e.detectErrorBoundary){let y=e.detectErrorBoundary;i=E=>({hasErrorBoundary:y(E)})}else i=I_;let a={},o=rc(e.routes,i,void 0,a),s,l=e.basename||"/",u=e.unstable_dataStrategy||O_,c=he({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,unstable_skipActionErrorRevalidation:!1},e.future),f=null,d=new Set,v=null,w=null,_=null,x=e.hydrationData!=null,p=Xr(o,e.history.location,l),h=null;if(p==null){let y=ft(404,{pathname:e.history.location.pathname}),{matches:E,route:I}=zh(o);p=E,h={[I.id]:y}}let m,b=p.some(y=>y.route.lazy),C=p.some(y=>y.route.loader);if(b)m=!1;else if(!C)m=!0;else if(c.v7_partialHydration){let y=e.hydrationData?e.hydrationData.loaderData:null,E=e.hydrationData?e.hydrationData.errors:null,I=P=>P.route.loader?typeof P.route.loader=="function"&&P.route.loader.hydrate===!0?!1:y&&y[P.route.id]!==void 0||E&&E[P.route.id]!==void 0:!0;if(E){let P=p.findIndex(j=>E[j.route.id]!==void 0);m=p.slice(0,P+1).every(I)}else m=p.every(I)}else m=e.hydrationData!=null;let N,g={historyAction:e.history.action,location:e.history.location,matches:p,initialized:m,navigation:ql,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||h,fetchers:new Map,blockers:new Map},O=_e.Pop,D=!1,A,X=!1,we=new Map,de=null,Pe=!1,wt=!1,gn=[],vn=[],R=new Map,B=0,V=-1,te=new Map,ne=new Set,_t=new Map,Je=new Map,Ze=new Set,$e=new Map,ut=new Map,_l=!1;function l0(){if(f=e.history.listen(y=>{let{action:E,location:I,delta:P}=y;if(_l){_l=!1;return}_i(ut.size===0||P!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let j=md({currentLocation:g.location,nextLocation:I,historyAction:E});if(j&&P!=null){_l=!0,e.history.go(P*-1),so(j,{state:"blocked",location:I,proceed(){so(j,{state:"proceeding",proceed:void 0,reset:void 0,location:I}),e.history.go(P)},reset(){let K=new Map(g.blockers);K.set(j,Wi),et({blockers:K})}});return}return ar(E,I)}),n){H_(t,we);let y=()=>V_(t,we);t.addEventListener("pagehide",y),de=()=>t.removeEventListener("pagehide",y)}return g.initialized||ar(_e.Pop,g.location,{initialHydration:!0}),N}function u0(){f&&f(),de&&de(),d.clear(),A&&A.abort(),g.fetchers.forEach((y,E)=>oo(E)),g.blockers.forEach((y,E)=>pd(E))}function c0(y){return d.add(y),()=>d.delete(y)}function et(y,E){E===void 0&&(E={}),g=he({},g,y);let I=[],P=[];c.v7_fetcherPersist&&g.fetchers.forEach((j,K)=>{j.state==="idle"&&(Ze.has(K)?P.push(K):I.push(K))}),[...d].forEach(j=>j(g,{deletedFetchers:P,unstable_viewTransitionOpts:E.viewTransitionOpts,unstable_flushSync:E.flushSync===!0})),c.v7_fetcherPersist&&(I.forEach(j=>g.fetchers.delete(j)),P.forEach(j=>oo(j)))}function Oi(y,E,I){var P,j;let{flushSync:K}=I===void 0?{}:I,z=g.actionData!=null&&g.navigation.formMethod!=null&&bt(g.navigation.formMethod)&&g.navigation.state==="loading"&&((P=y.state)==null?void 0:P._isRedirect)!==!0,U;E.actionData?Object.keys(E.actionData).length>0?U=E.actionData:U=null:z?U=g.actionData:U=null;let Y=E.loaderData?Uh(g.loaderData,E.loaderData,E.matches||[],E.errors):g.loaderData,W=g.blockers;W.size>0&&(W=new Map(W),W.forEach((H,ue)=>W.set(ue,Wi)));let Re=D===!0||g.navigation.formMethod!=null&&bt(g.navigation.formMethod)&&((j=y.state)==null?void 0:j._isRedirect)!==!0;s&&(o=s,s=void 0),Pe||O===_e.Pop||(O===_e.Push?e.history.push(y,y.state):O===_e.Replace&&e.history.replace(y,y.state));let Oe;if(O===_e.Pop){let H=we.get(g.location.pathname);H&&H.has(y.pathname)?Oe={currentLocation:g.location,nextLocation:y}:we.has(y.pathname)&&(Oe={currentLocation:y,nextLocation:g.location})}else if(X){let H=we.get(g.location.pathname);H?H.add(y.pathname):(H=new Set([y.pathname]),we.set(g.location.pathname,H)),Oe={currentLocation:g.location,nextLocation:y}}et(he({},E,{actionData:U,loaderData:Y,historyAction:O,location:y,initialized:!0,navigation:ql,revalidation:"idle",restoreScrollPosition:vd(y,E.matches||g.matches),preventScrollReset:Re,blockers:W}),{viewTransitionOpts:Oe,flushSync:K===!0}),O=_e.Pop,D=!1,X=!1,Pe=!1,wt=!1,gn=[],vn=[]}async function ld(y,E){if(typeof y=="number"){e.history.go(y);return}let I=ic(g.location,g.matches,l,c.v7_prependBasename,y,c.v7_relativeSplatPath,E==null?void 0:E.fromRouteId,E==null?void 0:E.relative),{path:P,submission:j,error:K}=Oh(c.v7_normalizeFormMethod,!1,I,E),z=g.location,U=Oa(g.location,P,E&&E.state);U=he({},U,e.history.encodeLocation(U));let Y=E&&E.replace!=null?E.replace:void 0,W=_e.Push;Y===!0?W=_e.Replace:Y===!1||j!=null&&bt(j.formMethod)&&j.formAction===g.location.pathname+g.location.search&&(W=_e.Replace);let Re=E&&"preventScrollReset"in E?E.preventScrollReset===!0:void 0,Oe=(E&&E.unstable_flushSync)===!0,H=md({currentLocation:z,nextLocation:U,historyAction:W});if(H){so(H,{state:"blocked",location:U,proceed(){so(H,{state:"proceeding",proceed:void 0,reset:void 0,location:U}),ld(y,E)},reset(){let ue=new Map(g.blockers);ue.set(H,Wi),et({blockers:ue})}});return}return await ar(W,U,{submission:j,pendingError:K,preventScrollReset:Re,replace:E&&E.replace,enableViewTransition:E&&E.unstable_viewTransition,flushSync:Oe})}function f0(){if(Sl(),et({revalidation:"loading"}),g.navigation.state!=="submitting"){if(g.navigation.state==="idle"){ar(g.historyAction,g.location,{startUninterruptedRevalidation:!0});return}ar(O||g.historyAction,g.navigation.location,{overrideNavigation:g.navigation})}}async function ar(y,E,I){A&&A.abort(),A=null,O=y,Pe=(I&&I.startUninterruptedRevalidation)===!0,_0(g.location,g.matches),D=(I&&I.preventScrollReset)===!0,X=(I&&I.enableViewTransition)===!0;let P=s||o,j=I&&I.overrideNavigation,K=Xr(P,E,l),z=(I&&I.flushSync)===!0;if(!K){let H=ft(404,{pathname:E.pathname}),{matches:ue,route:Ie}=zh(P);El(),Oi(E,{matches:ue,loaderData:{},errors:{[Ie.id]:H}},{flushSync:z});return}if(g.initialized&&!wt&&j_(g.location,E)&&!(I&&I.submission&&bt(I.submission.formMethod))){Oi(E,{matches:K},{flushSync:z});return}A=new AbortController;let U=Ur(e.history,E,A.signal,I&&I.submission),Y;if(I&&I.pendingError)Y=[ca(K).route.id,{type:ce.error,error:I.pendingError}];else if(I&&I.submission&&bt(I.submission.formMethod)){let H=await d0(U,E,I.submission,K,{replace:I.replace,flushSync:z});if(H.shortCircuited)return;Y=H.pendingActionResult,j=Xl(E,I.submission),z=!1,U=Ur(e.history,U.url,U.signal)}let{shortCircuited:W,loaderData:Re,errors:Oe}=await h0(U,E,K,j,I&&I.submission,I&&I.fetcherSubmission,I&&I.replace,I&&I.initialHydration===!0,z,Y);W||(A=null,Oi(E,he({matches:K},Fh(Y),{loaderData:Re,errors:Oe})))}async function d0(y,E,I,P,j){j===void 0&&(j={}),Sl();let K=$_(E,I);et({navigation:K},{flushSync:j.flushSync===!0});let z,U=oc(P,E);if(!U.route.action&&!U.route.lazy)z={type:ce.error,error:ft(405,{method:y.method,pathname:E.pathname,routeId:U.route.id})};else if(z=(await Ai("action",y,[U],P))[0],y.signal.aborted)return{shortCircuited:!0};if(hr(z)){let Y;return j&&j.replace!=null?Y=j.replace:Y=Dh(z.response.headers.get("Location"),new URL(y.url),l)===g.location.pathname+g.location.search,await Ni(y,z,{submission:I,replace:Y}),{shortCircuited:!0}}if(dr(z))throw ft(400,{type:"defer-action"});if(pt(z)){let Y=ca(P,U.route.id);return(j&&j.replace)!==!0&&(O=_e.Push),{pendingActionResult:[Y.route.id,z]}}return{pendingActionResult:[U.route.id,z]}}async function h0(y,E,I,P,j,K,z,U,Y,W){let Re=P||Xl(E,j),Oe=j||K||Hh(Re),H=s||o,[ue,Ie]=Nh(e.history,g,I,Oe,E,c.v7_partialHydration&&U===!0,c.unstable_skipActionErrorRevalidation,wt,gn,vn,Ze,_t,ne,H,l,W);if(El(J=>!(I&&I.some(Be=>Be.route.id===J))||ue&&ue.some(Be=>Be.route.id===J)),V=++B,ue.length===0&&Ie.length===0){let J=dd();return Oi(E,he({matches:I,loaderData:{},errors:W&&pt(W[1])?{[W[0]]:W[1].error}:null},Fh(W),J?{fetchers:new Map(g.fetchers)}:{}),{flushSync:Y}),{shortCircuited:!0}}if(!Pe&&(!c.v7_partialHydration||!U)){Ie.forEach(Be=>{let ct=g.fetchers.get(Be.key),Ne=Ki(void 0,ct?ct.data:void 0);g.fetchers.set(Be.key,Ne)});let J;W&&!pt(W[1])?J={[W[0]]:W[1].data}:g.actionData&&(Object.keys(g.actionData).length===0?J=null:J=g.actionData),et(he({navigation:Re},J!==void 0?{actionData:J}:{},Ie.length>0?{fetchers:new Map(g.fetchers)}:{}),{flushSync:Y})}Ie.forEach(J=>{R.has(J.key)&&wn(J.key),J.controller&&R.set(J.key,J.controller)});let Di=()=>Ie.forEach(J=>wn(J.key));A&&A.signal.addEventListener("abort",Di);let{loaderResults:_n,fetcherResults:Lr}=await ud(g.matches,I,ue,Ie,y);if(y.signal.aborted)return{shortCircuited:!0};A&&A.signal.removeEventListener("abort",Di),Ie.forEach(J=>R.delete(J.key));let Dr=$h([..._n,...Lr]);if(Dr){if(Dr.idx>=ue.length){let J=Ie[Dr.idx-ue.length].key;ne.add(J)}return await Ni(y,Dr.result,{replace:z}),{shortCircuited:!0}}let{loaderData:Mr,errors:Nt}=jh(g,I,ue,_n,W,Ie,Lr,$e);$e.forEach((J,Be)=>{J.subscribe(ct=>{(ct||J.done)&&$e.delete(Be)})}),c.v7_partialHydration&&U&&g.errors&&Object.entries(g.errors).filter(J=>{let[Be]=J;return!ue.some(ct=>ct.route.id===Be)}).forEach(J=>{let[Be,ct]=J;Nt=Object.assign(Nt||{},{[Be]:ct})});let lo=dd(),uo=hd(V),co=lo||uo||Ie.length>0;return he({loaderData:Mr,errors:Nt},co?{fetchers:new Map(g.fetchers)}:{})}function p0(y,E,I,P){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");R.has(y)&&wn(y);let j=(P&&P.unstable_flushSync)===!0,K=s||o,z=ic(g.location,g.matches,l,c.v7_prependBasename,I,c.v7_relativeSplatPath,E,P==null?void 0:P.relative),U=Xr(K,z,l);if(!U){Li(y,E,ft(404,{pathname:z}),{flushSync:j});return}let{path:Y,submission:W,error:Re}=Oh(c.v7_normalizeFormMethod,!0,z,P);if(Re){Li(y,E,Re,{flushSync:j});return}let Oe=oc(U,Y);if(D=(P&&P.preventScrollReset)===!0,W&&bt(W.formMethod)){m0(y,E,Y,Oe,U,j,W);return}_t.set(y,{routeId:E,path:Y}),g0(y,E,Y,Oe,U,j,W)}async function m0(y,E,I,P,j,K,z){if(Sl(),_t.delete(y),!P.route.action&&!P.route.lazy){let Ne=ft(405,{method:z.formMethod,pathname:I,routeId:E});Li(y,E,Ne,{flushSync:K});return}let U=g.fetchers.get(y);yn(y,B_(z,U),{flushSync:K});let Y=new AbortController,W=Ur(e.history,I,Y.signal,z);R.set(y,Y);let Re=B,H=(await Ai("action",W,[P],j))[0];if(W.signal.aborted){R.get(y)===Y&&R.delete(y);return}if(c.v7_fetcherPersist&&Ze.has(y)){if(hr(H)||pt(H)){yn(y,bn(void 0));return}}else{if(hr(H))if(R.delete(y),V>Re){yn(y,bn(void 0));return}else return ne.add(y),yn(y,Ki(z)),Ni(W,H,{fetcherSubmission:z});if(pt(H)){Li(y,E,H.error);return}}if(dr(H))throw ft(400,{type:"defer-action"});let ue=g.navigation.location||g.location,Ie=Ur(e.history,ue,Y.signal),Di=s||o,_n=g.navigation.state!=="idle"?Xr(Di,g.navigation.location,l):g.matches;G(_n,"Didn't find any matches after fetcher action");let Lr=++B;te.set(y,Lr);let Dr=Ki(z,H.data);g.fetchers.set(y,Dr);let[Mr,Nt]=Nh(e.history,g,_n,z,ue,!1,c.unstable_skipActionErrorRevalidation,wt,gn,vn,Ze,_t,ne,Di,l,[P.route.id,H]);Nt.filter(Ne=>Ne.key!==y).forEach(Ne=>{let Mi=Ne.key,yd=g.fetchers.get(Mi),E0=Ki(void 0,yd?yd.data:void 0);g.fetchers.set(Mi,E0),R.has(Mi)&&wn(Mi),Ne.controller&&R.set(Mi,Ne.controller)}),et({fetchers:new Map(g.fetchers)});let lo=()=>Nt.forEach(Ne=>wn(Ne.key));Y.signal.addEventListener("abort",lo);let{loaderResults:uo,fetcherResults:co}=await ud(g.matches,_n,Mr,Nt,Ie);if(Y.signal.aborted)return;Y.signal.removeEventListener("abort",lo),te.delete(y),R.delete(y),Nt.forEach(Ne=>R.delete(Ne.key));let J=$h([...uo,...co]);if(J){if(J.idx>=Mr.length){let Ne=Nt[J.idx-Mr.length].key;ne.add(Ne)}return Ni(Ie,J.result)}let{loaderData:Be,errors:ct}=jh(g,g.matches,Mr,uo,void 0,Nt,co,$e);if(g.fetchers.has(y)){let Ne=bn(H.data);g.fetchers.set(y,Ne)}hd(Lr),g.navigation.state==="loading"&&Lr>V?(G(O,"Expected pending action"),A&&A.abort(),Oi(g.navigation.location,{matches:_n,loaderData:Be,errors:ct,fetchers:new Map(g.fetchers)})):(et({errors:ct,loaderData:Uh(g.loaderData,Be,_n,ct),fetchers:new Map(g.fetchers)}),wt=!1)}async function g0(y,E,I,P,j,K,z){let U=g.fetchers.get(y);yn(y,Ki(z,U?U.data:void 0),{flushSync:K});let Y=new AbortController,W=Ur(e.history,I,Y.signal);R.set(y,Y);let Re=B,H=(await Ai("loader",W,[P],j))[0];if(dr(H)&&(H=await Ev(H,W.signal,!0)||H),R.get(y)===Y&&R.delete(y),!W.signal.aborted){if(Ze.has(y)){yn(y,bn(void 0));return}if(hr(H))if(V>Re){yn(y,bn(void 0));return}else{ne.add(y),await Ni(W,H);return}if(pt(H)){Li(y,E,H.error);return}G(!dr(H),"Unhandled fetcher deferred data"),yn(y,bn(H.data))}}async function Ni(y,E,I){let{submission:P,fetcherSubmission:j,replace:K}=I===void 0?{}:I;E.response.headers.has("X-Remix-Revalidate")&&(wt=!0);let z=E.response.headers.get("Location");G(z,"Expected a Location header on the redirect Response"),z=Dh(z,new URL(y.url),l);let U=Oa(g.location,z,{_isRedirect:!0});if(n){let ue=!1;if(E.response.headers.has("X-Remix-Reload-Document"))ue=!0;else if(Lf.test(z)){const Ie=e.history.createURL(z);ue=Ie.origin!==t.location.origin||Ci(Ie.pathname,l)==null}if(ue){K?t.location.replace(z):t.location.assign(z);return}}A=null;let Y=K===!0?_e.Replace:_e.Push,{formMethod:W,formAction:Re,formEncType:Oe}=g.navigation;!P&&!j&&W&&Re&&Oe&&(P=Hh(g.navigation));let H=P||j;if(b_.has(E.response.status)&&H&&bt(H.formMethod))await ar(Y,U,{submission:he({},H,{formAction:z}),preventScrollReset:D});else{let ue=Xl(U,P);await ar(Y,U,{overrideNavigation:ue,fetcherSubmission:j,preventScrollReset:D})}}async function Ai(y,E,I,P){try{let j=await N_(u,y,E,I,P,a,i);return await Promise.all(j.map((K,z)=>{if(U_(K)){let U=K.result;return{type:ce.redirect,response:D_(U,E,I[z].route.id,P,l,c.v7_relativeSplatPath)}}return L_(K)}))}catch(j){return I.map(()=>({type:ce.error,error:j}))}}async function ud(y,E,I,P,j){let[K,...z]=await Promise.all([I.length?Ai("loader",j,I,E):[],...P.map(U=>{if(U.matches&&U.match&&U.controller){let Y=Ur(e.history,U.path,U.controller.signal);return Ai("loader",Y,[U.match],U.matches).then(W=>W[0])}else return Promise.resolve({type:ce.error,error:ft(404,{pathname:U.path})})})]);return await Promise.all([Bh(y,I,K,K.map(()=>j.signal),!1,g.loaderData),Bh(y,P.map(U=>U.match),z,P.map(U=>U.controller?U.controller.signal:null),!0)]),{loaderResults:K,fetcherResults:z}}function Sl(){wt=!0,gn.push(...El()),_t.forEach((y,E)=>{R.has(E)&&(vn.push(E),wn(E))})}function yn(y,E,I){I===void 0&&(I={}),g.fetchers.set(y,E),et({fetchers:new Map(g.fetchers)},{flushSync:(I&&I.flushSync)===!0})}function Li(y,E,I,P){P===void 0&&(P={});let j=ca(g.matches,E);oo(y),et({errors:{[j.route.id]:I},fetchers:new Map(g.fetchers)},{flushSync:(P&&P.flushSync)===!0})}function cd(y){return c.v7_fetcherPersist&&(Je.set(y,(Je.get(y)||0)+1),Ze.has(y)&&Ze.delete(y)),g.fetchers.get(y)||x_}function oo(y){let E=g.fetchers.get(y);R.has(y)&&!(E&&E.state==="loading"&&te.has(y))&&wn(y),_t.delete(y),te.delete(y),ne.delete(y),Ze.delete(y),g.fetchers.delete(y)}function v0(y){if(c.v7_fetcherPersist){let E=(Je.get(y)||0)-1;E<=0?(Je.delete(y),Ze.add(y)):Je.set(y,E)}else oo(y);et({fetchers:new Map(g.fetchers)})}function wn(y){let E=R.get(y);G(E,"Expected fetch controller: "+y),E.abort(),R.delete(y)}function fd(y){for(let E of y){let I=cd(E),P=bn(I.data);g.fetchers.set(E,P)}}function dd(){let y=[],E=!1;for(let I of ne){let P=g.fetchers.get(I);G(P,"Expected fetcher: "+I),P.state==="loading"&&(ne.delete(I),y.push(I),E=!0)}return fd(y),E}function hd(y){let E=[];for(let[I,P]of te)if(P<y){let j=g.fetchers.get(I);G(j,"Expected fetcher: "+I),j.state==="loading"&&(wn(I),te.delete(I),E.push(I))}return fd(E),E.length>0}function y0(y,E){let I=g.blockers.get(y)||Wi;return ut.get(y)!==E&&ut.set(y,E),I}function pd(y){g.blockers.delete(y),ut.delete(y)}function so(y,E){let I=g.blockers.get(y)||Wi;G(I.state==="unblocked"&&E.state==="blocked"||I.state==="blocked"&&E.state==="blocked"||I.state==="blocked"&&E.state==="proceeding"||I.state==="blocked"&&E.state==="unblocked"||I.state==="proceeding"&&E.state==="unblocked","Invalid blocker state transition: "+I.state+" -> "+E.state);let P=new Map(g.blockers);P.set(y,E),et({blockers:P})}function md(y){let{currentLocation:E,nextLocation:I,historyAction:P}=y;if(ut.size===0)return;ut.size>1&&_i(!1,"A router only supports one blocker at a time");let j=Array.from(ut.entries()),[K,z]=j[j.length-1],U=g.blockers.get(K);if(!(U&&U.state==="proceeding")&&z({currentLocation:E,nextLocation:I,historyAction:P}))return K}function El(y){let E=[];return $e.forEach((I,P)=>{(!y||y(P))&&(I.cancel(),E.push(P),$e.delete(P))}),E}function w0(y,E,I){if(v=y,_=E,w=I||null,!x&&g.navigation===ql){x=!0;let P=vd(g.location,g.matches);P!=null&&et({restoreScrollPosition:P})}return()=>{v=null,_=null,w=null}}function gd(y,E){return w&&w(y,E.map(P=>t_(P,g.loaderData)))||y.key}function _0(y,E){if(v&&_){let I=gd(y,E);v[I]=_()}}function vd(y,E){if(v){let I=gd(y,E),P=v[I];if(typeof P=="number")return P}return null}function S0(y){a={},s=rc(y,i,void 0,a)}return N={get basename(){return l},get future(){return c},get state(){return g},get routes(){return o},get window(){return t},initialize:l0,subscribe:c0,enableScrollRestoration:w0,navigate:ld,fetch:p0,revalidate:f0,createHref:y=>e.history.createHref(y),encodeLocation:y=>e.history.encodeLocation(y),getFetcher:cd,deleteFetcher:v0,dispose:u0,getBlocker:y0,deleteBlocker:pd,_internalFetchControllers:R,_internalActiveDeferreds:$e,_internalSetRoutes:S0},N}function T_(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function ic(e,t,n,r,i,a,o,s){let l,u;if(o){l=[];for(let f of t)if(l.push(f),f.route.id===o){u=f;break}}else l=t,u=t[t.length-1];let c=sl(i||".",ol(l,a),Ci(e.pathname,n)||e.pathname,s==="path");return i==null&&(c.search=e.search,c.hash=e.hash),(i==null||i===""||i===".")&&u&&u.route.index&&!Df(c.search)&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(c.pathname=c.pathname==="/"?n:Zt([n,c.pathname])),kr(c)}function Oh(e,t,n,r){if(!r||!T_(r))return{path:n};if(r.formMethod&&!z_(r.formMethod))return{path:n,error:ft(405,{method:r.formMethod})};let i=()=>({path:n,error:ft(400,{type:"invalid-body"})}),a=r.formMethod||"get",o=e?a.toUpperCase():a.toLowerCase(),s=_v(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!bt(o))return i();let d=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((v,w)=>{let[_,x]=w;return""+v+_+"="+x+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:s,formEncType:r.formEncType,formData:void 0,json:void 0,text:d}}}else if(r.formEncType==="application/json"){if(!bt(o))return i();try{let d=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:s,formEncType:r.formEncType,formData:void 0,json:d,text:void 0}}}catch{return i()}}}G(typeof FormData=="function","FormData is not available in this environment");let l,u;if(r.formData)l=ac(r.formData),u=r.formData;else if(r.body instanceof FormData)l=ac(r.body),u=r.body;else if(r.body instanceof URLSearchParams)l=r.body,u=Mh(l);else if(r.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(r.body),u=Mh(l)}catch{return i()}let c={formMethod:o,formAction:s,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(bt(c.formMethod))return{path:n,submission:c};let f=dn(n);return t&&f.search&&Df(f.search)&&l.append("index",""),f.search="?"+l,{path:kr(f),submission:c}}function P_(e,t){let n=e;if(t){let r=e.findIndex(i=>i.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function Nh(e,t,n,r,i,a,o,s,l,u,c,f,d,v,w,_){let x=_?pt(_[1])?_[1].error:_[1].data:void 0,p=e.createURL(t.location),h=e.createURL(i),m=_&&pt(_[1])?_[0]:void 0,b=m?P_(n,m):n,C=_?_[1].statusCode:void 0,N=o&&C&&C>=400,g=b.filter((D,A)=>{let{route:X}=D;if(X.lazy)return!0;if(X.loader==null)return!1;if(a)return typeof X.loader!="function"||X.loader.hydrate?!0:t.loaderData[X.id]===void 0&&(!t.errors||t.errors[X.id]===void 0);if(R_(t.loaderData,t.matches[A],D)||l.some(Pe=>Pe===D.route.id))return!0;let we=t.matches[A],de=D;return Ah(D,he({currentUrl:p,currentParams:we.params,nextUrl:h,nextParams:de.params},r,{actionResult:x,unstable_actionStatus:C,defaultShouldRevalidate:N?!1:s||p.pathname+p.search===h.pathname+h.search||p.search!==h.search||wv(we,de)}))}),O=[];return f.forEach((D,A)=>{if(a||!n.some(wt=>wt.route.id===D.routeId)||c.has(A))return;let X=Xr(v,D.path,w);if(!X){O.push({key:A,routeId:D.routeId,path:D.path,matches:null,match:null,controller:null});return}let we=t.fetchers.get(A),de=oc(X,D.path),Pe=!1;d.has(A)?Pe=!1:u.includes(A)?Pe=!0:we&&we.state!=="idle"&&we.data===void 0?Pe=s:Pe=Ah(de,he({currentUrl:p,currentParams:t.matches[t.matches.length-1].params,nextUrl:h,nextParams:n[n.length-1].params},r,{actionResult:x,unstable_actionStatus:C,defaultShouldRevalidate:N?!1:s})),Pe&&O.push({key:A,routeId:D.routeId,path:D.path,matches:X,match:de,controller:new AbortController})}),[g,O]}function R_(e,t,n){let r=!t||n.route.id!==t.route.id,i=e[n.route.id]===void 0;return r||i}function wv(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function Ah(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function Lh(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let i=n[e.id];G(i,"No route found in manifest");let a={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";_i(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!Zw.has(o)&&(a[o]=r[o])}Object.assign(i,a),Object.assign(i,he({},t(i),{lazy:void 0}))}function O_(e){return Promise.all(e.matches.map(t=>t.resolve()))}async function N_(e,t,n,r,i,a,o,s){let l=r.reduce((f,d)=>f.add(d.route.id),new Set),u=new Set,c=await e({matches:i.map(f=>{let d=l.has(f.route.id);return he({},f,{shouldLoad:d,resolve:w=>(u.add(f.route.id),d?A_(t,n,f,a,o,w,s):Promise.resolve({type:ce.data,result:void 0}))})}),request:n,params:i[0].params,context:s});return i.forEach(f=>G(u.has(f.route.id),'`match.resolve()` was not called for route id "'+f.route.id+'". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.')),c.filter((f,d)=>l.has(i[d].route.id))}async function A_(e,t,n,r,i,a,o){let s,l,u=c=>{let f,d=new Promise((_,x)=>f=x);l=()=>f(),t.signal.addEventListener("abort",l);let v=_=>typeof c!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+e+'" [routeId: '+n.route.id+"]"))):c({request:t,params:n.params,context:o},..._!==void 0?[_]:[]),w;return a?w=a(_=>v(_)):w=(async()=>{try{return{type:"data",result:await v()}}catch(_){return{type:"error",result:_}}})(),Promise.race([w,d])};try{let c=n.route[e];if(n.route.lazy)if(c){let f,[d]=await Promise.all([u(c).catch(v=>{f=v}),Lh(n.route,i,r)]);if(f!==void 0)throw f;s=d}else if(await Lh(n.route,i,r),c=n.route[e],c)s=await u(c);else if(e==="action"){let f=new URL(t.url),d=f.pathname+f.search;throw ft(405,{method:t.method,pathname:d,routeId:n.route.id})}else return{type:ce.data,result:void 0};else if(c)s=await u(c);else{let f=new URL(t.url),d=f.pathname+f.search;throw ft(404,{pathname:d})}G(s.result!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(c){return{type:ce.error,result:c}}finally{l&&t.signal.removeEventListener("abort",l)}return s}async function L_(e){let{result:t,type:n,status:r}=e;if(Sv(t)){let o;try{let s=t.headers.get("Content-Type");s&&/\bapplication\/json\b/.test(s)?t.body==null?o=null:o=await t.json():o=await t.text()}catch(s){return{type:ce.error,error:s}}return n===ce.error?{type:ce.error,error:new Nf(t.status,t.statusText,o),statusCode:t.status,headers:t.headers}:{type:ce.data,data:o,statusCode:t.status,headers:t.headers}}if(n===ce.error)return{type:ce.error,error:t,statusCode:Af(t)?t.status:r};if(F_(t)){var i,a;return{type:ce.deferred,deferredData:t,statusCode:(i=t.init)==null?void 0:i.status,headers:((a=t.init)==null?void 0:a.headers)&&new Headers(t.init.headers)}}return{type:ce.data,data:t,statusCode:r}}function D_(e,t,n,r,i,a){let o=e.headers.get("Location");if(G(o,"Redirects returned/thrown from loaders/actions must have a Location header"),!Lf.test(o)){let s=r.slice(0,r.findIndex(l=>l.route.id===n)+1);o=ic(new URL(t.url),s,i,!0,o,a),e.headers.set("Location",o)}return e}function Dh(e,t,n){if(Lf.test(e)){let r=e,i=r.startsWith("//")?new URL(t.protocol+r):new URL(r),a=Ci(i.pathname,n)!=null;if(i.origin===t.origin&&a)return i.pathname+i.search+i.hash}return e}function Ur(e,t,n,r){let i=e.createURL(_v(t)).toString(),a={signal:n};if(r&&bt(r.formMethod)){let{formMethod:o,formEncType:s}=r;a.method=o.toUpperCase(),s==="application/json"?(a.headers=new Headers({"Content-Type":s}),a.body=JSON.stringify(r.json)):s==="text/plain"?a.body=r.text:s==="application/x-www-form-urlencoded"&&r.formData?a.body=ac(r.formData):a.body=r.formData}return new Request(i,a)}function ac(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function Mh(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function M_(e,t,n,r,i,a){let o={},s=null,l,u=!1,c={},f=r&&pt(r[1])?r[1].error:void 0;return n.forEach((d,v)=>{let w=t[v].route.id;if(G(!hr(d),"Cannot handle redirect results in processLoaderData"),pt(d)){let _=d.error;if(f!==void 0&&(_=f,f=void 0),s=s||{},a)s[w]=_;else{let x=ca(e,w);s[x.route.id]==null&&(s[x.route.id]=_)}o[w]=void 0,u||(u=!0,l=Af(d.error)?d.error.status:500),d.headers&&(c[w]=d.headers)}else dr(d)?(i.set(w,d.deferredData),o[w]=d.deferredData.data,d.statusCode!=null&&d.statusCode!==200&&!u&&(l=d.statusCode),d.headers&&(c[w]=d.headers)):(o[w]=d.data,d.statusCode&&d.statusCode!==200&&!u&&(l=d.statusCode),d.headers&&(c[w]=d.headers))}),f!==void 0&&r&&(s={[r[0]]:f},o[r[0]]=void 0),{loaderData:o,errors:s,statusCode:l||200,loaderHeaders:c}}function jh(e,t,n,r,i,a,o,s){let{loaderData:l,errors:u}=M_(t,n,r,i,s,!1);for(let c=0;c<a.length;c++){let{key:f,match:d,controller:v}=a[c];G(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let w=o[c];if(!(v&&v.signal.aborted))if(pt(w)){let _=ca(e.matches,d==null?void 0:d.route.id);u&&u[_.route.id]||(u=he({},u,{[_.route.id]:w.error})),e.fetchers.delete(f)}else if(hr(w))G(!1,"Unhandled fetcher revalidation redirect");else if(dr(w))G(!1,"Unhandled fetcher deferred data");else{let _=bn(w.data);e.fetchers.set(f,_)}}return{loaderData:l,errors:u}}function Uh(e,t,n,r){let i=he({},t);for(let a of n){let o=a.route.id;if(t.hasOwnProperty(o)?t[o]!==void 0&&(i[o]=t[o]):e[o]!==void 0&&a.route.loader&&(i[o]=e[o]),r&&r.hasOwnProperty(o))break}return i}function Fh(e){return e?pt(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function ca(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function zh(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function ft(e,t){let{pathname:n,routeId:r,method:i,type:a}=t===void 0?{}:t,o="Unknown Server Error",s="Unknown @remix-run/router error";return e===400?(o="Bad Request",i&&n&&r?s="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":a==="defer-action"?s="defer() is not supported in actions":a==="invalid-body"&&(s="Unable to encode submission body")):e===403?(o="Forbidden",s='Route "'+r+'" does not match URL "'+n+'"'):e===404?(o="Not Found",s='No route matches URL "'+n+'"'):e===405&&(o="Method Not Allowed",i&&n&&r?s="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(s='Invalid request method "'+i.toUpperCase()+'"')),new Nf(e||500,o,new Error(s),!0)}function $h(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(hr(n))return{result:n,idx:t}}}function _v(e){let t=typeof e=="string"?dn(e):e;return kr(he({},t,{hash:""}))}function j_(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function U_(e){return Sv(e.result)&&k_.has(e.result.status)}function dr(e){return e.type===ce.deferred}function pt(e){return e.type===ce.error}function hr(e){return(e&&e.type)===ce.redirect}function F_(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function Sv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function z_(e){return E_.has(e.toLowerCase())}function bt(e){return __.has(e.toLowerCase())}async function Bh(e,t,n,r,i,a){for(let o=0;o<n.length;o++){let s=n[o],l=t[o];if(!l)continue;let u=e.find(f=>f.route.id===l.route.id),c=u!=null&&!wv(u,l)&&(a&&a[l.route.id])!==void 0;if(dr(s)&&(i||c)){let f=r[o];G(f,"Expected an AbortSignal for revalidating fetcher deferred result"),await Ev(s,f,i).then(d=>{d&&(n[o]=d||n[o])})}}}async function Ev(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:ce.data,data:e.deferredData.unwrappedData}}catch(i){return{type:ce.error,error:i}}return{type:ce.data,data:e.deferredData.data}}}function Df(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function oc(e,t){let n=typeof t=="string"?dn(t).search:t.search;if(e[e.length-1].route.index&&Df(n||""))return e[e.length-1];let r=gv(e);return r[r.length-1]}function Hh(e){let{formMethod:t,formAction:n,formEncType:r,text:i,formData:a,json:o}=e;if(!(!t||!n||!r)){if(i!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(a!=null)return{formMethod:t,formAction:n,formEncType:r,formData:a,json:void 0,text:void 0};if(o!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function Xl(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function $_(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function Ki(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function B_(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function bn(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function H_(e,t){try{let n=e.sessionStorage.getItem(yv);if(n){let r=JSON.parse(n);for(let[i,a]of Object.entries(r||{}))a&&Array.isArray(a)&&t.set(i,new Set(a||[]))}}catch{}}function V_(e,t){if(t.size>0){let n={};for(let[r,i]of t)n[r]=[...i];try{e.sessionStorage.setItem(yv,JSON.stringify(n))}catch(r){_i(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Na(){return Na=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Na.apply(this,arguments)}const ll=k.createContext(null),kv=k.createContext(null),er=k.createContext(null),ul=k.createContext(null),hn=k.createContext({outlet:null,matches:[],isDataRoute:!1}),bv=k.createContext(null);function W_(e,t){let{relative:n}=t===void 0?{}:t;Ti()||G(!1);let{basename:r,navigator:i}=k.useContext(er),{hash:a,pathname:o,search:s}=Iv(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Zt([r,o])),i.createHref({pathname:l,search:s,hash:a})}function Ti(){return k.useContext(ul)!=null}function Or(){return Ti()||G(!1),k.useContext(ul).location}function xv(e){k.useContext(er).static||k.useLayoutEffect(e)}function Mf(){let{isDataRoute:e}=k.useContext(hn);return e?aS():K_()}function K_(){Ti()||G(!1);let e=k.useContext(ll),{basename:t,future:n,navigator:r}=k.useContext(er),{matches:i}=k.useContext(hn),{pathname:a}=Or(),o=JSON.stringify(ol(i,n.v7_relativeSplatPath)),s=k.useRef(!1);return xv(()=>{s.current=!0}),k.useCallback(function(u,c){if(c===void 0&&(c={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let f=sl(u,JSON.parse(o),a,c.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Zt([t,f.pathname])),(c.replace?r.replace:r.push)(f,c.state,c)},[t,r,o,a,e])}const Y_=k.createContext(null);function G_(e){let t=k.useContext(hn).outlet;return t&&k.createElement(Y_.Provider,{value:e},t)}function Iv(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=k.useContext(er),{matches:i}=k.useContext(hn),{pathname:a}=Or(),o=JSON.stringify(ol(i,r.v7_relativeSplatPath));return k.useMemo(()=>sl(e,JSON.parse(o),a,n==="path"),[e,o,a,n])}function Q_(e,t,n,r){Ti()||G(!1);let{navigator:i}=k.useContext(er),{matches:a}=k.useContext(hn),o=a[a.length-1],s=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Or(),c;if(t){var f;let x=typeof t=="string"?dn(t):t;l==="/"||(f=x.pathname)!=null&&f.startsWith(l)||G(!1),c=x}else c=u;let d=c.pathname||"/",v=d;if(l!=="/"){let x=l.replace(/^\//,"").split("/");v="/"+d.replace(/^\//,"").split("/").slice(x.length).join("/")}let w=Xr(e,{pathname:v}),_=eS(w&&w.map(x=>Object.assign({},x,{params:Object.assign({},s,x.params),pathname:Zt([l,i.encodeLocation?i.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?l:Zt([l,i.encodeLocation?i.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),a,n,r);return t&&_?k.createElement(ul.Provider,{value:{location:Na({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:_e.Pop}},_):_}function q_(){let e=iS(),t=Af(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:i},n):null,null)}const X_=k.createElement(q_,null);class J_ extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?k.createElement(hn.Provider,{value:this.props.routeContext},k.createElement(bv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Z_(e){let{routeContext:t,match:n,children:r}=e,i=k.useContext(ll);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(hn.Provider,{value:t},r)}function eS(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var a;if((a=n)!=null&&a.errors)e=n.matches;else return null}let o=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let c=o.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id])!==void 0);c>=0||G(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let f=o[c];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=c),f.route.id){let{loaderData:d,errors:v}=n,w=f.route.loader&&d[f.route.id]===void 0&&(!v||v[f.route.id]===void 0);if(f.route.lazy||w){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,f,d)=>{let v,w=!1,_=null,x=null;n&&(v=s&&f.route.id?s[f.route.id]:void 0,_=f.route.errorElement||X_,l&&(u<0&&d===0?(oS("route-fallback",!1),w=!0,x=null):u===d&&(w=!0,x=f.route.hydrateFallbackElement||null)));let p=t.concat(o.slice(0,d+1)),h=()=>{let m;return v?m=_:w?m=x:f.route.Component?m=k.createElement(f.route.Component,null):f.route.element?m=f.route.element:m=c,k.createElement(Z_,{match:f,routeContext:{outlet:c,matches:p,isDataRoute:n!=null},children:m})};return n&&(f.route.ErrorBoundary||f.route.errorElement||d===0)?k.createElement(J_,{location:n.location,revalidation:n.revalidation,component:_,error:v,children:h(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):h()},null)}var Cv=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Cv||{}),Si=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Si||{});function tS(e){let t=k.useContext(ll);return t||G(!1),t}function Tv(e){let t=k.useContext(kv);return t||G(!1),t}function nS(e){let t=k.useContext(hn);return t||G(!1),t}function jf(e){let t=nS(),n=t.matches[t.matches.length-1];return n.route.id||G(!1),n.route.id}function rS(){let e=Tv(Si.UseLoaderData),t=jf(Si.UseLoaderData);if(e.errors&&e.errors[t]!=null){console.error("You cannot `useLoaderData` in an errorElement (routeId: "+t+")");return}return e.loaderData[t]}function iS(){var e;let t=k.useContext(bv),n=Tv(Si.UseRouteError),r=jf(Si.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function aS(){let{router:e}=tS(Cv.UseNavigateStable),t=jf(Si.UseNavigateStable),n=k.useRef(!1);return xv(()=>{n.current=!0}),k.useCallback(function(i,a){a===void 0&&(a={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Na({fromRouteId:t},a)))},[e,t])}const Vh={};function oS(e,t,n){!t&&!Vh[e]&&(Vh[e]=!0)}function sS(e){let{to:t,replace:n,state:r,relative:i}=e;Ti()||G(!1);let{future:a,static:o}=k.useContext(er),{matches:s}=k.useContext(hn),{pathname:l}=Or(),u=Mf(),c=sl(t,ol(s,a.v7_relativeSplatPath),l,i==="path"),f=JSON.stringify(c);return k.useEffect(()=>u(JSON.parse(f),{replace:n,state:r,relative:i}),[u,f,i,n,r]),null}function lS(e){return G_(e.context)}function uS(e){let{basename:t="/",children:n=null,location:r,navigationType:i=_e.Pop,navigator:a,static:o=!1,future:s}=e;Ti()&&G(!1);let l=t.replace(/^\/*/,"/"),u=k.useMemo(()=>({basename:l,navigator:a,static:o,future:Na({v7_relativeSplatPath:!1},s)}),[l,s,a,o]);typeof r=="string"&&(r=dn(r));let{pathname:c="/",search:f="",hash:d="",state:v=null,key:w="default"}=r,_=k.useMemo(()=>{let x=Ci(c,l);return x==null?null:{location:{pathname:x,search:f,hash:d,state:v,key:w},navigationType:i}},[l,c,f,d,v,w,i]);return _==null?null:k.createElement(er.Provider,{value:u},k.createElement(ul.Provider,{children:n,value:_}))}new Promise(()=>{});function cS(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:k.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:k.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:k.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Aa(){return Aa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Aa.apply(this,arguments)}function fS(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function dS(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function hS(e,t){return e.button===0&&(!t||t==="_self")&&!dS(e)}const pS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],mS="6";try{window.__reactRouterVersion=mS}catch{}function gS(e,t){return C_({basename:t==null?void 0:t.basename,future:Aa({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:qw({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||vS(),routes:e,mapRouteProperties:cS,unstable_dataStrategy:t==null?void 0:t.unstable_dataStrategy,window:t==null?void 0:t.window}).initialize()}function vS(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Aa({},t,{errors:yS(t.errors)})),t}function yS(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,i]of t)if(i&&i.__type==="RouteErrorResponse")n[r]=new Nf(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let a=window[i.__subType];if(typeof a=="function")try{let o=new a(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let a=new Error(i.message);a.stack="",n[r]=a}}else n[r]=i;return n}const wS=k.createContext({isTransitioning:!1}),_S=k.createContext(new Map),SS="startTransition",Wh=U0[SS],ES="flushSync",Kh=Qw[ES];function kS(e){Wh?Wh(e):e()}function Yi(e){Kh?Kh(e):e()}let bS=class{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}};function xS(e){let{fallbackElement:t,router:n,future:r}=e,[i,a]=k.useState(n.state),[o,s]=k.useState(),[l,u]=k.useState({isTransitioning:!1}),[c,f]=k.useState(),[d,v]=k.useState(),[w,_]=k.useState(),x=k.useRef(new Map),{v7_startTransition:p}=r||{},h=k.useCallback(g=>{p?kS(g):g()},[p]),m=k.useCallback((g,O)=>{let{deletedFetchers:D,unstable_flushSync:A,unstable_viewTransitionOpts:X}=O;D.forEach(de=>x.current.delete(de)),g.fetchers.forEach((de,Pe)=>{de.data!==void 0&&x.current.set(Pe,de.data)});let we=n.window==null||typeof n.window.document.startViewTransition!="function";if(!X||we){A?Yi(()=>a(g)):h(()=>a(g));return}if(A){Yi(()=>{d&&(c&&c.resolve(),d.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:X.currentLocation,nextLocation:X.nextLocation})});let de=n.window.document.startViewTransition(()=>{Yi(()=>a(g))});de.finished.finally(()=>{Yi(()=>{f(void 0),v(void 0),s(void 0),u({isTransitioning:!1})})}),Yi(()=>v(de));return}d?(c&&c.resolve(),d.skipTransition(),_({state:g,currentLocation:X.currentLocation,nextLocation:X.nextLocation})):(s(g),u({isTransitioning:!0,flushSync:!1,currentLocation:X.currentLocation,nextLocation:X.nextLocation}))},[n.window,d,c,x,h]);k.useLayoutEffect(()=>n.subscribe(m),[n,m]),k.useEffect(()=>{l.isTransitioning&&!l.flushSync&&f(new bS)},[l]),k.useEffect(()=>{if(c&&o&&n.window){let g=o,O=c.promise,D=n.window.document.startViewTransition(async()=>{h(()=>a(g)),await O});D.finished.finally(()=>{f(void 0),v(void 0),s(void 0),u({isTransitioning:!1})}),v(D)}},[h,o,c,n.window]),k.useEffect(()=>{c&&o&&i.location.key===o.location.key&&c.resolve()},[c,d,i.location,o]),k.useEffect(()=>{!l.isTransitioning&&w&&(s(w.state),u({isTransitioning:!0,flushSync:!1,currentLocation:w.currentLocation,nextLocation:w.nextLocation}),_(void 0))},[l.isTransitioning,w]),k.useEffect(()=>{},[]);let b=k.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:g=>n.navigate(g),push:(g,O,D)=>n.navigate(g,{state:O,preventScrollReset:D==null?void 0:D.preventScrollReset}),replace:(g,O,D)=>n.navigate(g,{replace:!0,state:O,preventScrollReset:D==null?void 0:D.preventScrollReset})}),[n]),C=n.basename||"/",N=k.useMemo(()=>({router:n,navigator:b,static:!1,basename:C}),[n,b,C]);return k.createElement(k.Fragment,null,k.createElement(ll.Provider,{value:N},k.createElement(kv.Provider,{value:i},k.createElement(_S.Provider,{value:x.current},k.createElement(wS.Provider,{value:l},k.createElement(uS,{basename:C,location:i.location,navigationType:i.historyAction,navigator:b,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},i.initialized||n.future.v7_partialHydration?k.createElement(IS,{routes:n.routes,future:n.future,state:i}):t))))),null)}function IS(e){let{routes:t,future:n,state:r}=e;return Q_(t,void 0,r,n)}const CS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",TS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,It=k.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:a,replace:o,state:s,target:l,to:u,preventScrollReset:c,unstable_viewTransition:f}=t,d=fS(t,pS),{basename:v}=k.useContext(er),w,_=!1;if(typeof u=="string"&&TS.test(u)&&(w=u,CS))try{let m=new URL(window.location.href),b=u.startsWith("//")?new URL(m.protocol+u):new URL(u),C=Ci(b.pathname,v);b.origin===m.origin&&C!=null?u=C+b.search+b.hash:_=!0}catch{}let x=W_(u,{relative:i}),p=PS(u,{replace:o,state:s,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:f});function h(m){r&&r(m),m.defaultPrevented||p(m)}return k.createElement("a",Aa({},d,{href:w||x,onClick:_||a?r:h,ref:n,target:l}))});var Yh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Yh||(Yh={}));var Gh;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Gh||(Gh={}));function PS(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:o,unstable_viewTransition:s}=t===void 0?{}:t,l=Mf(),u=Or(),c=Iv(e,{relative:o});return k.useCallback(f=>{if(hS(f,n)){f.preventDefault();let d=r!==void 0?r:kr(u)===kr(c);l(e,{replace:d,state:i,preventScrollReset:a,relative:o,unstable_viewTransition:s})}},[u,l,c,r,i,n,e,a,o,s])}const RS="/react-ecommerce-website/assets/Logo-D1qizes3.svg";var Qh={};/**
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
 */const Pv=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},OS=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=e[n++];t[r++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=e[n++],o=e[n++],s=e[n++],l=((i&7)<<18|(a&63)<<12|(o&63)<<6|s&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const a=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(a&63)<<6|o&63)}}return t.join("")},Rv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const a=e[i],o=i+1<e.length,s=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=a>>2,f=(a&3)<<4|s>>4;let d=(s&15)<<2|u>>6,v=u&63;l||(v=64,o||(d=64)),r.push(n[c],n[f],n[d],n[v])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Pv(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):OS(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const a=n[e.charAt(i++)],s=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,a==null||s==null||u==null||f==null)throw new NS;const d=a<<2|s>>4;if(r.push(d),u!==64){const v=s<<4&240|u>>2;if(r.push(v),f!==64){const w=u<<6&192|f;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class NS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const AS=function(e){const t=Pv(e);return Rv.encodeByteArray(t,!0)},Ov=function(e){return AS(e).replace(/\./g,"")},Nv=function(e){try{return Rv.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function LS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const DS=()=>LS().__FIREBASE_DEFAULTS__,MS=()=>{if(typeof process>"u"||typeof Qh>"u")return;const e=Qh.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},jS=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Nv(e[1]);return t&&JSON.parse(t)},Uf=()=>{try{return DS()||MS()||jS()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},US=e=>{var t,n;return(n=(t=Uf())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Av=()=>{var e;return(e=Uf())===null||e===void 0?void 0:e.config},Lv=e=>{var t;return(t=Uf())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class FS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ze())}function $S(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function BS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function HS(){const e=ze();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function VS(){try{return typeof indexedDB=="object"}catch{return!1}}function WS(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var a;t(((a=i.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){t(n)}})}/**
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
 */const KS="FirebaseError";class tr extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=KS,Object.setPrototypeOf(this,tr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ga.prototype.create)}}class Ga{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,a=this.errors[t],o=a?YS(a,r):"Error",s=`${this.serviceName}: ${o} (${i}).`;return new tr(i,s,r)}}function YS(e,t){return e.replace(GS,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const GS=/\{\$([^}]+)}/g;function QS(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Os(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const a=e[i],o=t[i];if(qh(a)&&qh(o)){if(!Os(a,o))return!1}else if(a!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function qh(e){return e!==null&&typeof e=="object"}/**
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
 */function Qa(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Ji(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,a]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(a)}}),t}function Zi(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function qS(e,t){const n=new XS(e,t);return n.subscribe.bind(n)}class XS{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");JS(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Jl),i.error===void 0&&(i.error=Jl),i.complete===void 0&&(i.complete=Jl);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),a}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function JS(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Jl(){}/**
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
 */function pn(e){return e&&e._delegate?e._delegate:e}class Ei{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const lr="[DEFAULT]";/**
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
 */class ZS{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new FS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(i)return null;throw a}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(tE(t))try{this.getOrInitializeService({instanceIdentifier:lr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:i});r.resolve(a)}catch{}}}}clearInstance(t=lr){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=lr){return this.instances.has(t)}getOptions(t=lr){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[a,o]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(a);r===s&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),a=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;a.add(t),this.onInitCallbacks.set(i,a);const o=this.instances.get(i);return o&&t(o,i),()=>{a.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:eE(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=lr){return this.component?this.component.multipleInstances?t:lr:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function eE(e){return e===lr?void 0:e}function tE(e){return e.instantiationMode==="EAGER"}/**
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
 */class nE{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new ZS(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var re;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(re||(re={}));const rE={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},iE=re.INFO,aE={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},oE=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=aE[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Dv{constructor(t){this.name=t,this._logLevel=iE,this._logHandler=oE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in re))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?rE[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...t),this._logHandler(this,re.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...t),this._logHandler(this,re.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,re.INFO,...t),this._logHandler(this,re.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,re.WARN,...t),this._logHandler(this,re.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...t),this._logHandler(this,re.ERROR,...t)}}const sE=(e,t)=>t.some(n=>e instanceof n);let Xh,Jh;function lE(){return Xh||(Xh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uE(){return Jh||(Jh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Mv=new WeakMap,sc=new WeakMap,jv=new WeakMap,Zl=new WeakMap,Ff=new WeakMap;function cE(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",a),e.removeEventListener("error",o)},a=()=>{n(Vn(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",a),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Mv.set(n,e)}).catch(()=>{}),Ff.set(t,e),t}function fE(e){if(sc.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",o),e.removeEventListener("abort",o)},a=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",a),e.addEventListener("error",o),e.addEventListener("abort",o)});sc.set(e,t)}let lc={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return sc.get(e);if(t==="objectStoreNames")return e.objectStoreNames||jv.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Vn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function dE(e){lc=e(lc)}function hE(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(eu(this),t,...n);return jv.set(r,t.sort?t.sort():[t]),Vn(r)}:uE().includes(e)?function(...t){return e.apply(eu(this),t),Vn(Mv.get(this))}:function(...t){return Vn(e.apply(eu(this),t))}}function pE(e){return typeof e=="function"?hE(e):(e instanceof IDBTransaction&&fE(e),sE(e,lE())?new Proxy(e,lc):e)}function Vn(e){if(e instanceof IDBRequest)return cE(e);if(Zl.has(e))return Zl.get(e);const t=pE(e);return t!==e&&(Zl.set(e,t),Ff.set(t,e)),t}const eu=e=>Ff.get(e);function mE(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){const o=indexedDB.open(e,t),s=Vn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Vn(o.result),l.oldVersion,l.newVersion,Vn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),s.then(l=>{a&&l.addEventListener("close",()=>a()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),s}const gE=["get","getKey","getAll","getAllKeys","count"],vE=["put","add","delete","clear"],tu=new Map;function Zh(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(tu.get(t))return tu.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=vE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||gE.includes(n)))return;const a=async function(o,...s){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(s.shift())),(await Promise.all([u[n](...s),i&&l.done]))[0]};return tu.set(t,a),a}dE(e=>({...e,get:(t,n,r)=>Zh(t,n)||e.get(t,n,r),has:(t,n)=>!!Zh(t,n)||e.has(t,n)}));/**
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
 */class yE{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function wE(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const uc="@firebase/app",ep="0.10.5";/**
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
 */const br=new Dv("@firebase/app"),_E="@firebase/app-compat",SE="@firebase/analytics-compat",EE="@firebase/analytics",kE="@firebase/app-check-compat",bE="@firebase/app-check",xE="@firebase/auth",IE="@firebase/auth-compat",CE="@firebase/database",TE="@firebase/database-compat",PE="@firebase/functions",RE="@firebase/functions-compat",OE="@firebase/installations",NE="@firebase/installations-compat",AE="@firebase/messaging",LE="@firebase/messaging-compat",DE="@firebase/performance",ME="@firebase/performance-compat",jE="@firebase/remote-config",UE="@firebase/remote-config-compat",FE="@firebase/storage",zE="@firebase/storage-compat",$E="@firebase/firestore",BE="@firebase/vertexai-preview",HE="@firebase/firestore-compat",VE="firebase",WE="10.12.2";/**
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
 */const cc="[DEFAULT]",KE={[uc]:"fire-core",[_E]:"fire-core-compat",[EE]:"fire-analytics",[SE]:"fire-analytics-compat",[bE]:"fire-app-check",[kE]:"fire-app-check-compat",[xE]:"fire-auth",[IE]:"fire-auth-compat",[CE]:"fire-rtdb",[TE]:"fire-rtdb-compat",[PE]:"fire-fn",[RE]:"fire-fn-compat",[OE]:"fire-iid",[NE]:"fire-iid-compat",[AE]:"fire-fcm",[LE]:"fire-fcm-compat",[DE]:"fire-perf",[ME]:"fire-perf-compat",[jE]:"fire-rc",[UE]:"fire-rc-compat",[FE]:"fire-gcs",[zE]:"fire-gcs-compat",[$E]:"fire-fst",[HE]:"fire-fst-compat",[BE]:"fire-vertex","fire-js":"fire-js",[VE]:"fire-js-all"};/**
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
 */const Ns=new Map,YE=new Map,fc=new Map;function tp(e,t){try{e.container.addComponent(t)}catch(n){br.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function La(e){const t=e.name;if(fc.has(t))return br.debug(`There were multiple attempts to register component ${t}.`),!1;fc.set(t,e);for(const n of Ns.values())tp(n,e);for(const n of YE.values())tp(n,e);return!0}function Uv(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function jt(e){return e.settings!==void 0}/**
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
 */const GE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Wn=new Ga("app","Firebase",GE);/**
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
 */class QE{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ei("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Wn.create("app-deleted",{appName:this._name})}}/**
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
 */const qa=WE;function Fv(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:cc,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Wn.create("bad-app-name",{appName:String(i)});if(n||(n=Av()),!n)throw Wn.create("no-options");const a=Ns.get(i);if(a){if(Os(n,a.options)&&Os(r,a.config))return a;throw Wn.create("duplicate-app",{appName:i})}const o=new nE(i);for(const l of fc.values())o.addComponent(l);const s=new QE(n,r,o);return Ns.set(i,s),s}function qE(e=cc){const t=Ns.get(e);if(!t&&e===cc&&Av())return Fv();if(!t)throw Wn.create("no-app",{appName:e});return t}function li(e,t,n){var r;let i=(r=KE[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){const s=[`Unable to register library "${i}" with version "${t}":`];a&&s.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&o&&s.push("and"),o&&s.push(`version name "${t}" contains illegal characters (whitespace or "/")`),br.warn(s.join(" "));return}La(new Ei(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const XE="firebase-heartbeat-database",JE=1,Da="firebase-heartbeat-store";let nu=null;function zv(){return nu||(nu=mE(XE,JE,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Da)}catch(n){console.warn(n)}}}}).catch(e=>{throw Wn.create("idb-open",{originalErrorMessage:e.message})})),nu}async function ZE(e){try{const n=(await zv()).transaction(Da),r=await n.objectStore(Da).get($v(e));return await n.done,r}catch(t){if(t instanceof tr)br.warn(t.message);else{const n=Wn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});br.warn(n.message)}}}async function np(e,t){try{const r=(await zv()).transaction(Da,"readwrite");await r.objectStore(Da).put(t,$v(e)),await r.done}catch(n){if(n instanceof tr)br.warn(n.message);else{const r=Wn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});br.warn(r.message)}}}function $v(e){return`${e.name}!${e.options.appId}`}/**
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
 */const ek=1024,tk=30*24*60*60*1e3;class nk{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ik(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=rp();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(o=>o.date===a)))return this._heartbeatsCache.heartbeats.push({date:a,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const s=new Date(o.date).valueOf();return Date.now()-s<=tk}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=rp(),{heartbeatsToSend:r,unsentEntries:i}=rk(this._heartbeatsCache.heartbeats),a=Ov(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}}function rp(){return new Date().toISOString().substring(0,10)}function rk(e,t=ek){const n=[];let r=e.slice();for(const i of e){const a=n.find(o=>o.agent===i.agent);if(a){if(a.dates.push(i.date),ip(n)>t){a.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ip(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ik{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return VS()?WS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ZE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return np(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return np(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function ip(e){return Ov(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function ak(e){La(new Ei("platform-logger",t=>new yE(t),"PRIVATE")),La(new Ei("heartbeat",t=>new nk(t),"PRIVATE")),li(uc,ep,e),li(uc,ep,"esm2017"),li("fire-js","")}ak("");function zf(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Bv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ok=Bv,Hv=new Ga("auth","Firebase",Bv());/**
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
 */const As=new Dv("@firebase/auth");function sk(e,...t){As.logLevel<=re.WARN&&As.warn(`Auth (${qa}): ${e}`,...t)}function Jo(e,...t){As.logLevel<=re.ERROR&&As.error(`Auth (${qa}): ${e}`,...t)}/**
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
 */function Ot(e,...t){throw $f(e,...t)}function $t(e,...t){return $f(e,...t)}function Vv(e,t,n){const r=Object.assign(Object.assign({},ok()),{[t]:n});return new Ga("auth","Firebase",r).create(t,{appName:e.name})}function en(e){return Vv(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function $f(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Hv.create(e,...t)}function $(e,t,...n){if(!e)throw $f(t,...n)}function Qt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Jo(t),new Error(t)}function on(e,t){e||Qt(t)}/**
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
 */function dc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function lk(){return ap()==="http:"||ap()==="https:"}function ap(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function uk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lk()||$S()||"connection"in navigator)?navigator.onLine:!0}function ck(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Xa{constructor(t,n){this.shortDelay=t,this.longDelay=n,on(n>t,"Short delay should be less than long delay!"),this.isMobile=zS()||BS()}get(){return uk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Bf(e,t){on(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class Wv{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Qt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Qt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Qt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const fk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const dk=new Xa(3e4,6e4);function nr(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function rr(e,t,n,r,i={}){return Kv(e,i,async()=>{let a={},o={};r&&(t==="GET"?o=r:a={body:JSON.stringify(r)});const s=Qa(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),Wv.fetch()(Yv(e,e.config.apiHost,n,s),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},a))})}async function Kv(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},fk),t);try{const i=new pk(e),a=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await a.json();if("needConfirmation"in o)throw Po(e,"account-exists-with-different-credential",o);if(a.ok&&!("errorMessage"in o))return o;{const s=a.ok?o.errorMessage:o.error.message,[l,u]=s.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Po(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Po(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw Po(e,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Vv(e,c,u);Ot(e,c)}}catch(i){if(i instanceof tr)throw i;Ot(e,"network-request-failed",{message:String(i)})}}async function Ja(e,t,n,r,i={}){const a=await rr(e,t,n,r,i);return"mfaPendingCredential"in a&&Ot(e,"multi-factor-auth-required",{_serverResponse:a}),a}function Yv(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Bf(e.config,i):`${e.config.apiScheme}://${i}`}function hk(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class pk{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r($t(this.auth,"network-request-failed")),dk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Po(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=$t(e,t,r);return i.customData._tokenResponse=n,i}function op(e){return e!==void 0&&e.enterprise!==void 0}class mk{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return hk(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function gk(e,t){return rr(e,"GET","/v2/recaptchaConfig",nr(e,t))}/**
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
 */async function vk(e,t){return rr(e,"POST","/v1/accounts:delete",t)}async function Gv(e,t){return rr(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function fa(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function yk(e,t=!1){const n=pn(e),r=await n.getIdToken(t),i=Hf(r);$(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,o=a==null?void 0:a.sign_in_provider;return{claims:i,token:r,authTime:fa(ru(i.auth_time)),issuedAtTime:fa(ru(i.iat)),expirationTime:fa(ru(i.exp)),signInProvider:o||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function ru(e){return Number(e)*1e3}function Hf(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Jo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Nv(n);return i?JSON.parse(i):(Jo("Failed to decode base64 JWT payload"),null)}catch(i){return Jo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function sp(e){const t=Hf(e);return $(t,"internal-error"),$(typeof t.exp<"u","internal-error"),$(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Ma(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof tr&&wk(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function wk({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class _k{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class hc{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=fa(this.lastLoginAt),this.creationTime=fa(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ls(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Ma(e,Gv(n,{idToken:r}));$(i==null?void 0:i.users.length,n,"internal-error");const a=i.users[0];e._notifyReloadListener(a);const o=!((t=a.providerUserInfo)===null||t===void 0)&&t.length?Qv(a.providerUserInfo):[],s=Ek(e.providerData,o),l=e.isAnonymous,u=!(e.email&&a.passwordHash)&&!(s!=null&&s.length),c=l?u:!1,f={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:s,metadata:new hc(a.createdAt,a.lastLoginAt),isAnonymous:c};Object.assign(e,f)}async function Sk(e){const t=pn(e);await Ls(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Ek(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Qv(e){return e.map(t=>{var{providerId:n}=t,r=zf(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function kk(e,t){const n=await Kv(e,{},async()=>{const r=Qa({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:a}=e.config,o=Yv(e,i,"/v1/token",`key=${a}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",Wv.fetch()(o,{method:"POST",headers:s,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function bk(e,t){return rr(e,"POST","/v2/accounts:revokeToken",nr(e,t))}/**
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
 */class ui{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){$(t.idToken,"internal-error"),$(typeof t.idToken<"u","internal-error"),$(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):sp(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){$(t.length!==0,"internal-error");const n=sp(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:($(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:a}=await kk(t,n);this.updateTokensAndExpiration(r,i,Number(a))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:a}=n,o=new ui;return r&&($(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&($(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),a&&($(typeof a=="number","internal-error",{appName:t}),o.expirationTime=a),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ui,this.toJSON())}_performRefresh(){return Qt("not implemented")}}/**
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
 */function En(e,t){$(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class qt{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,a=zf(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _k(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new hc(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(t){const n=await Ma(this,this.stsTokenManager.getToken(this.auth,t));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return yk(this,t)}reload(){return Sk(this)}_assign(t){this!==t&&($(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new qt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Ls(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(jt(this.auth.app))return Promise.reject(en(this.auth));const t=await this.getIdToken();return await Ma(this,vk(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,a,o,s,l,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,v=(a=n.phoneNumber)!==null&&a!==void 0?a:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(s=n.tenantId)!==null&&s!==void 0?s:void 0,x=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:b,isAnonymous:C,providerData:N,stsTokenManager:g}=n;$(m&&g,t,"internal-error");const O=ui.fromJSON(this.name,g);$(typeof m=="string",t,"internal-error"),En(f,t.name),En(d,t.name),$(typeof b=="boolean",t,"internal-error"),$(typeof C=="boolean",t,"internal-error"),En(v,t.name),En(w,t.name),En(_,t.name),En(x,t.name),En(p,t.name),En(h,t.name);const D=new qt({uid:m,auth:t,email:d,emailVerified:b,displayName:f,isAnonymous:C,photoURL:w,phoneNumber:v,tenantId:_,stsTokenManager:O,createdAt:p,lastLoginAt:h});return N&&Array.isArray(N)&&(D.providerData=N.map(A=>Object.assign({},A))),x&&(D._redirectEventId=x),D}static async _fromIdTokenResponse(t,n,r=!1){const i=new ui;i.updateFromServerResponse(n);const a=new qt({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Ls(a),a}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];$(i.localId!==void 0,"internal-error");const a=i.providerUserInfo!==void 0?Qv(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(a!=null&&a.length),s=new ui;s.updateFromIdToken(r);const l=new qt({uid:i.localId,auth:t,stsTokenManager:s,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new hc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(a!=null&&a.length)};return Object.assign(l,u),l}}/**
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
 */const lp=new Map;function Xt(e){on(e instanceof Function,"Expected a class definition");let t=lp.get(e);return t?(on(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,lp.set(e,t),t)}/**
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
 */class qv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}qv.type="NONE";const up=qv;/**
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
 */function Zo(e,t,n){return`firebase:${e}:${t}:${n}`}class ci{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:a}=this.auth;this.fullUserKey=Zo(this.userKey,i.apiKey,a),this.fullPersistenceKey=Zo("persistence",i.apiKey,a),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?qt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new ci(Xt(up),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let a=i[0]||Xt(up);const o=Zo(r,t.config.apiKey,t.name);let s=null;for(const u of n)try{const c=await u._get(o);if(c){const f=qt._fromJSON(t,c);u!==a&&(s=f),a=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!a._shouldAllowMigration||!l.length?new ci(a,t,r):(a=l[0],s&&await a._set(o,s.toJSON()),await Promise.all(n.map(async u=>{if(u!==a)try{await u._remove(o)}catch{}})),new ci(a,t,r))}}/**
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
 */function cp(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Zv(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Xv(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ty(t))return"Blackberry";if(ny(t))return"Webos";if(Vf(t))return"Safari";if((t.includes("chrome/")||Jv(t))&&!t.includes("edge/"))return"Chrome";if(ey(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Xv(e=ze()){return/firefox\//i.test(e)}function Vf(e=ze()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Jv(e=ze()){return/crios\//i.test(e)}function Zv(e=ze()){return/iemobile/i.test(e)}function ey(e=ze()){return/android/i.test(e)}function ty(e=ze()){return/blackberry/i.test(e)}function ny(e=ze()){return/webos/i.test(e)}function cl(e=ze()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function xk(e=ze()){var t;return cl(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Ik(){return HS()&&document.documentMode===10}function ry(e=ze()){return cl(e)||ey(e)||ny(e)||ty(e)||/windows phone/i.test(e)||Zv(e)}function Ck(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function iy(e,t=[]){let n;switch(e){case"Browser":n=cp(ze());break;case"Worker":n=`${cp(ze())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${qa}/${r}`}/**
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
 */class Tk{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=a=>new Promise((o,s)=>{try{const l=t(a);o(l)}catch(l){s(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Pk(e,t={}){return rr(e,"GET","/v2/passwordPolicy",nr(e,t))}/**
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
 */const Rk=6;class Ok{constructor(t){var n,r,i,a;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Rk,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(a=t.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,a,o,s;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsUppercaseLetter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsNonAlphanumericCharacter)!==null&&s!==void 0?s:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,a){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=a))}}/**
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
 */class Nk{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fp(this),this.idTokenSubscription=new fp(this),this.beforeStateQueue=new Tk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Hv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Xt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ci.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Gv(this,{idToken:t}),r=await qt._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(jt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(s=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(s,s))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,a=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===s)&&(l!=null&&l.user)&&(i=l.user,a=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Ls(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=ck()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(jt(this.app))return Promise.reject(en(this));const n=t?pn(t):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&$(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return jt(this.app)?Promise.reject(en(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return jt(this.app)?Promise.reject(en(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Xt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Pk(this),n=new Ok(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Ga("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await bk(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Xt(t)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await ci.create(this,[Xt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const a=typeof n=="function"?n:n.next.bind(n);let o=!1;const s=this._isInitialized?Promise.resolve():this._initializationPromise;if($(s,this,"internal-error"),s.then(()=>{o||a(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=t.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=iy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&sk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Nr(e){return pn(e)}class fp{constructor(t){this.auth=t,this.observer=null,this.addObserver=qS(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let fl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ak(e){fl=e}function ay(e){return fl.loadJS(e)}function Lk(){return fl.recaptchaEnterpriseScript}function Dk(){return fl.gapiScript}function Mk(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const jk="recaptcha-enterprise",Uk="NO_RECAPTCHA";class Fk{constructor(t){this.type=jk,this.auth=Nr(t)}async verify(t="verify",n=!1){async function r(a){if(!n){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(o,s)=>{gk(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)s(new Error("recaptcha Enterprise site key undefined"));else{const u=new mk(l);return a.tenantId==null?a._agentRecaptchaConfig=u:a._tenantRecaptchaConfigs[a.tenantId]=u,o(u.siteKey)}}).catch(l=>{s(l)})})}function i(a,o,s){const l=window.grecaptcha;op(l)?l.enterprise.ready(()=>{l.enterprise.execute(a,{action:t}).then(u=>{o(u)}).catch(()=>{o(Uk)})}):s(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((a,o)=>{r(this.auth).then(s=>{if(!n&&op(window.grecaptcha))i(s,a,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Lk();l.length!==0&&(l+=s),ay(l).then(()=>{i(s,a,o)}).catch(u=>{o(u)})}}).catch(s=>{o(s)})})}}async function dp(e,t,n,r=!1){const i=new Fk(e);let a;try{a=await i.verify(n)}catch{a=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:a}):Object.assign(o,{captchaResponse:a}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function pc(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await dp(e,t,n,n==="getOobCode");return r(e,a)}else return r(e,t).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await dp(e,t,n,n==="getOobCode");return r(e,o)}else return Promise.reject(a)})}/**
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
 */function zk(e,t){const n=Uv(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),a=n.getOptions();if(Os(a,t??{}))return i;Ot(i,"already-initialized")}return n.initialize({options:t})}function $k(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Xt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Bk(e,t,n){const r=Nr(e);$(r._canInitEmulator,r,"emulator-config-failed"),$(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),a=oy(t),{host:o,port:s}=Hk(t),l=s===null?"":`:${s}`;r.config.emulator={url:`${a}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:s,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Vk()}function oy(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Hk(e){const t=oy(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const a=i[1];return{host:a,port:hp(r.substr(a.length+1))}}else{const[a,o]=r.split(":");return{host:a,port:hp(o)}}}function hp(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Vk(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class Wf{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Qt("not implemented")}_getIdTokenResponse(t){return Qt("not implemented")}_linkToIdToken(t,n){return Qt("not implemented")}_getReauthenticationResolver(t){return Qt("not implemented")}}async function Wk(e,t){return rr(e,"POST","/v1/accounts:signUp",t)}/**
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
 */async function Kk(e,t){return Ja(e,"POST","/v1/accounts:signInWithPassword",nr(e,t))}/**
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
 */async function Yk(e,t){return Ja(e,"POST","/v1/accounts:signInWithEmailLink",nr(e,t))}async function Gk(e,t){return Ja(e,"POST","/v1/accounts:signInWithEmailLink",nr(e,t))}/**
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
 */class ja extends Wf{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new ja(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new ja(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pc(t,n,"signInWithPassword",Kk);case"emailLink":return Yk(t,{email:this._email,oobCode:this._password});default:Ot(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pc(t,r,"signUpPassword",Wk);case"emailLink":return Gk(t,{idToken:n,email:this._email,oobCode:this._password});default:Ot(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function fi(e,t){return Ja(e,"POST","/v1/accounts:signInWithIdp",nr(e,t))}/**
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
 */const Qk="http://localhost";class xr extends Wf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new xr(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Ot("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,a=zf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new xr(r,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return fi(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,fi(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,fi(t,n)}buildRequest(){const t={requestUri:Qk,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Qa(n)}return t}}/**
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
 */function qk(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Xk(e){const t=Ji(Zi(e)).link,n=t?Ji(Zi(t)).deep_link_id:null,r=Ji(Zi(e)).deep_link_id;return(r?Ji(Zi(r)).link:null)||r||n||t||e}class Kf{constructor(t){var n,r,i,a,o,s;const l=Ji(Zi(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,f=qk((i=l.mode)!==null&&i!==void 0?i:null);$(u&&c&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=c,this.continueUrl=(a=l.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(s=l.tenantId)!==null&&s!==void 0?s:null}static parseLink(t){const n=Xk(t);try{return new Kf(n)}catch{return null}}}/**
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
 */class Pi{constructor(){this.providerId=Pi.PROVIDER_ID}static credential(t,n){return ja._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Kf.parseLink(n);return $(r,"argument-error"),ja._fromEmailAndCode(t,r.code,r.tenantId)}}Pi.PROVIDER_ID="password";Pi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Pi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class sy{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Za extends sy{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Pn extends Za{constructor(){super("facebook.com")}static credential(t){return xr._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Pn.credentialFromTaggedObject(t)}static credentialFromError(t){return Pn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Pn.credential(t.oauthAccessToken)}catch{return null}}}Pn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pn.PROVIDER_ID="facebook.com";/**
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
 */class Rn extends Za{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return xr._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Rn.credentialFromTaggedObject(t)}static credentialFromError(t){return Rn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Rn.credential(n,r)}catch{return null}}}Rn.GOOGLE_SIGN_IN_METHOD="google.com";Rn.PROVIDER_ID="google.com";/**
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
 */class On extends Za{constructor(){super("github.com")}static credential(t){return xr._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return On.credentialFromTaggedObject(t)}static credentialFromError(t){return On.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return On.credential(t.oauthAccessToken)}catch{return null}}}On.GITHUB_SIGN_IN_METHOD="github.com";On.PROVIDER_ID="github.com";/**
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
 */class Nn extends Za{constructor(){super("twitter.com")}static credential(t,n){return xr._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Nn.credentialFromTaggedObject(t)}static credentialFromError(t){return Nn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Nn.credential(n,r)}catch{return null}}}Nn.TWITTER_SIGN_IN_METHOD="twitter.com";Nn.PROVIDER_ID="twitter.com";/**
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
 */async function Jk(e,t){return Ja(e,"POST","/v1/accounts:signUp",nr(e,t))}/**
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
 */class Ir{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const a=await qt._fromIdTokenResponse(t,r,i),o=pp(r);return new Ir({user:a,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=pp(r);return new Ir({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function pp(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class Ds extends tr{constructor(t,n,r,i){var a;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ds.prototype),this.customData={appName:t.name,tenantId:(a=t.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Ds(t,n,r,i)}}function ly(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Ds._fromErrorAndOperation(e,a,t,r):a})}async function Zk(e,t,n=!1){const r=await Ma(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ir._forOperation(e,"link",r)}/**
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
 */async function eb(e,t,n=!1){const{auth:r}=e;if(jt(r.app))return Promise.reject(en(r));const i="reauthenticate";try{const a=await Ma(e,ly(r,i,t,e),n);$(a.idToken,r,"internal-error");const o=Hf(a.idToken);$(o,r,"internal-error");const{sub:s}=o;return $(e.uid===s,r,"user-mismatch"),Ir._forOperation(e,i,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Ot(r,"user-mismatch"),a}}/**
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
 */async function uy(e,t,n=!1){if(jt(e.app))return Promise.reject(en(e));const r="signIn",i=await ly(e,r,t),a=await Ir._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(a.user),a}async function tb(e,t){return uy(Nr(e),t)}/**
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
 */async function cy(e){const t=Nr(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function nb(e,t,n){if(jt(e.app))return Promise.reject(en(e));const r=Nr(e),o=await pc(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Jk).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&cy(e),l}),s=await Ir._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(s.user),s}function rb(e,t,n){return jt(e.app)?Promise.reject(en(e)):tb(pn(e),Pi.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&cy(e),r})}function ib(e,t,n,r){return pn(e).onIdTokenChanged(t,n,r)}function ab(e,t,n){return pn(e).beforeAuthStateChanged(t,n)}function ob(e,t,n,r){return pn(e).onAuthStateChanged(t,n,r)}function sb(e){return pn(e).signOut()}const Ms="__sak";/**
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
 */class fy{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ms,"1"),this.storage.removeItem(Ms),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function lb(){const e=ze();return Vf(e)||cl(e)}const ub=1e3,cb=10;class dy extends fy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=lb()&&Ck(),this.fallbackToPolling=ry(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,s,l)=>{this.notifyListeners(o,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},a=this.storage.getItem(r);Ik()&&a!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,cb):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},ub)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}dy.type="LOCAL";const fb=dy;/**
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
 */class hy extends fy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}hy.type="SESSION";const py=hy;/**
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
 */function db(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class dl{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new dl(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:a}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const s=Array.from(o).map(async u=>u(n.origin,a)),l=await db(s);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}dl.receivers=[];/**
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
 */function Yf(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class hb{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,o;return new Promise((s,l)=>{const u=Yf("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const d=f;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),a=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),s(d.data.response);break;default:clearTimeout(c),clearTimeout(a),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Bt(){return window}function pb(e){Bt().location.href=e}/**
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
 */function my(){return typeof Bt().WorkerGlobalScope<"u"&&typeof Bt().importScripts=="function"}async function mb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gb(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function vb(){return my()?self:null}/**
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
 */const gy="firebaseLocalStorageDb",yb=1,js="firebaseLocalStorage",vy="fbase_key";class eo{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function hl(e,t){return e.transaction([js],t?"readwrite":"readonly").objectStore(js)}function wb(){const e=indexedDB.deleteDatabase(gy);return new eo(e).toPromise()}function mc(){const e=indexedDB.open(gy,yb);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(js,{keyPath:vy})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(js)?t(r):(r.close(),await wb(),t(await mc()))})})}async function mp(e,t,n){const r=hl(e,!0).put({[vy]:t,value:n});return new eo(r).toPromise()}async function _b(e,t){const n=hl(e,!1).get(t),r=await new eo(n).toPromise();return r===void 0?null:r.value}function gp(e,t){const n=hl(e,!0).delete(t);return new eo(n).toPromise()}const Sb=800,Eb=3;class yy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await mc(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>Eb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return my()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=dl._getInstance(vb()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await mb(),!this.activeServiceWorker)return;this.sender=new hb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||gb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await mc();return await mp(t,Ms,"1"),await gp(t,Ms),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>mp(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>_b(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>gp(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const a=hl(i,!1).getAll();return new eo(a).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:a}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Sb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}yy.type="LOCAL";const kb=yy;new Xa(3e4,6e4);/**
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
 */function bb(e,t){return t?Xt(t):($(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Gf extends Wf{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return fi(t,this._buildIdpRequest())}_linkToIdToken(t,n){return fi(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return fi(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function xb(e){return uy(e.auth,new Gf(e),e.bypassAuthState)}function Ib(e){const{auth:t,user:n}=e;return $(n,t,"internal-error"),eb(n,new Gf(e),e.bypassAuthState)}async function Cb(e){const{auth:t,user:n}=e;return $(n,t,"internal-error"),Zk(n,new Gf(e),e.bypassAuthState)}/**
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
 */class wy{constructor(t,n,r,i,a=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:a,error:o,type:s}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return xb;case"linkViaPopup":case"linkViaRedirect":return Cb;case"reauthViaPopup":case"reauthViaRedirect":return Ib;default:Ot(this.auth,"internal-error")}}resolve(t){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Tb=new Xa(2e3,1e4);class Jr extends wy{constructor(t,n,r,i,a){super(t,n,i,a),this.provider=r,this.authWindow=null,this.pollId=null,Jr.currentPopupAction&&Jr.currentPopupAction.cancel(),Jr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return $(t,this.auth,"internal-error"),t}async onExecution(){on(this.filter.length===1,"Popup operations only handle one event");const t=Yf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject($t(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject($t(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($t(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Tb.get())};t()}}Jr.currentPopupAction=null;/**
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
 */const Pb="pendingRedirect",es=new Map;class Rb extends wy{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=es.get(this.auth._key());if(!t){try{const r=await Ob(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}es.set(this.auth._key(),t)}return this.bypassAuthState||es.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ob(e,t){const n=Lb(t),r=Ab(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Nb(e,t){es.set(e._key(),t)}function Ab(e){return Xt(e._redirectPersistence)}function Lb(e){return Zo(Pb,e.config.apiKey,e.name)}async function Db(e,t,n=!1){if(jt(e.app))return Promise.reject(en(e));const r=Nr(e),i=bb(r,t),o=await new Rb(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
 */const Mb=10*60*1e3;class jb{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Ub(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!_y(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError($t(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Mb&&this.cachedEventUids.clear(),this.cachedEventUids.has(vp(t))}saveEventToCache(t){this.cachedEventUids.add(vp(t)),this.lastProcessedEventTime=Date.now()}}function vp(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function _y({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Ub(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _y(e);default:return!1}}/**
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
 */async function Fb(e,t={}){return rr(e,"GET","/v1/projects",t)}/**
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
 */const zb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$b=/^https?/;async function Bb(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Fb(e);for(const n of t)try{if(Hb(n))return}catch{}Ot(e,"unauthorized-domain")}function Hb(e){const t=dc(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!$b.test(n))return!1;if(zb.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Vb=new Xa(3e4,6e4);function yp(){const e=Bt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Wb(e){return new Promise((t,n)=>{var r,i,a;function o(){yp(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{yp(),n($t(e,"network-request-failed"))},timeout:Vb.get()})}if(!((i=(r=Bt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((a=Bt().gapi)===null||a===void 0)&&a.load)o();else{const s=Mk("iframefcb");return Bt()[s]=()=>{gapi.load?o():n($t(e,"network-request-failed"))},ay(`${Dk()}?onload=${s}`).catch(l=>n(l))}}).catch(t=>{throw ts=null,t})}let ts=null;function Kb(e){return ts=ts||Wb(e),ts}/**
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
 */const Yb=new Xa(5e3,15e3),Gb="__/auth/iframe",Qb="emulator/auth/iframe",qb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Xb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Jb(e){const t=e.config;$(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Bf(t,Qb):`https://${e.config.authDomain}/${Gb}`,r={apiKey:t.apiKey,appName:e.name,v:qa},i=Xb.get(e.config.apiHost);i&&(r.eid=i);const a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${Qa(r).slice(1)}`}async function Zb(e){const t=await Kb(e),n=Bt().gapi;return $(n,e,"internal-error"),t.open({where:document.body,url:Jb(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qb,dontclear:!0},r=>new Promise(async(i,a)=>{await r.restyle({setHideOnLeave:!1});const o=$t(e,"network-request-failed"),s=Bt().setTimeout(()=>{a(o)},Yb.get());function l(){Bt().clearTimeout(s),i(r)}r.ping(l).then(l,()=>{a(o)})}))}/**
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
 */const ex={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tx=500,nx=600,rx="_blank",ix="http://localhost";class wp{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ax(e,t,n,r=tx,i=nx){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let s="";const l=Object.assign(Object.assign({},ex),{width:r.toString(),height:i.toString(),top:a,left:o}),u=ze().toLowerCase();n&&(s=Jv(u)?rx:n),Xv(u)&&(t=t||ix,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[v,w])=>`${d}${v}=${w},`,"");if(xk(u)&&s!=="_self")return ox(t||"",s),new wp(null);const f=window.open(t||"",s,c);$(f,e,"popup-blocked");try{f.focus()}catch{}return new wp(f)}function ox(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const sx="__/auth/handler",lx="emulator/auth/handler",ux=encodeURIComponent("fac");async function _p(e,t,n,r,i,a){$(e.config.authDomain,e,"auth-domain-config-required"),$(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:qa,eventId:i};if(t instanceof sy){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",QS(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,f]of Object.entries(a||{}))o[c]=f}if(t instanceof Za){const c=t.getScopes().filter(f=>f!=="");c.length>0&&(o.scopes=c.join(","))}e.tenantId&&(o.tid=e.tenantId);const s=o;for(const c of Object.keys(s))s[c]===void 0&&delete s[c];const l=await e._getAppCheckToken(),u=l?`#${ux}=${encodeURIComponent(l)}`:"";return`${cx(e)}?${Qa(s).slice(1)}${u}`}function cx({config:e}){return e.emulator?Bf(e,lx):`https://${e.authDomain}/${sx}`}/**
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
 */const iu="webStorageSupport";class fx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=py,this._completeRedirectFn=Db,this._overrideRedirectResult=Nb}async _openPopup(t,n,r,i){var a;on((a=this.eventManagers[t._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const o=await _p(t,n,r,dc(),i);return ax(t,o,Yf())}async _openRedirect(t,n,r,i){await this._originValidation(t);const a=await _p(t,n,r,dc(),i);return pb(a),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:a}=this.eventManagers[n];return i?Promise.resolve(i):(on(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await Zb(t),r=new jb(t);return n.register("authEvent",i=>($(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(iu,{type:iu},i=>{var a;const o=(a=i==null?void 0:i[0])===null||a===void 0?void 0:a[iu];o!==void 0&&n(!!o),Ot(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Bb(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return ry()||Vf()||cl()}}const dx=fx;var Sp="@firebase/auth",Ep="1.7.4";/**
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
 */class hx{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function px(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function mx(e){La(new Ei("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),a=t.getProvider("app-check-internal"),{apiKey:o,authDomain:s}=r.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:iy(e)},u=new Nk(r,i,a,l);return $k(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),La(new Ei("auth-internal",t=>{const n=Nr(t.getProvider("auth").getImmediate());return(r=>new hx(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),li(Sp,Ep,px(e)),li(Sp,Ep,"esm2017")}/**
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
 */const gx=5*60,vx=Lv("authIdTokenMaxAge")||gx;let kp=null;const yx=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>vx)return;const i=n==null?void 0:n.token;kp!==i&&(kp=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function wx(e=qE()){const t=Uv(e,"auth");if(t.isInitialized())return t.getImmediate();const n=zk(e,{popupRedirectResolver:dx,persistence:[kb,fb,py]}),r=Lv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const o=yx(a.toString());ab(n,o,()=>o(n.currentUser)),ib(n,s=>o(s))}}const i=US("auth");return i&&Bk(n,`http://${i}`),n}function _x(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}Ak({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const a=$t("internal-error");a.customData=i,n(a)},r.type="text/javascript",r.charset="UTF-8",_x().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});mx("Browser");var Sx="firebase",Ex="10.12.2";/**
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
 */li(Sx,Ex,"app");const kx={apiKey:"AIzaSyA19fYlLgkMFcQuZXcvrIHc4CjXAkEixoU",authDomain:"react-ecommerce-website-auth.firebaseapp.com",projectId:"react-ecommerce-website-auth",storageBucket:"react-ecommerce-website-auth.appspot.com",messagingSenderId:"372064301595",appId:"1:372064301595:web:cc26f8af7de2d8418fbebe"},bx=Fv(kx),to=k.createContext(""),xx=({children:e})=>{const[t,n]=k.useState(null),[r,i]=k.useState(!0),a=wx(bx),o=(c,f)=>(i(!0),nb(a,c,f)),s=(c,f)=>(i(!0),rb(a,c,f)),l=()=>sb(a);k.useEffect(()=>{const c=ob(a,f=>{n(f),i(!1)});return()=>{c()}},[]),console.log(t);const u={user:t,createUser:o,signIn:s,logOut:l,loading:r};return S.jsx(to.Provider,{value:u,children:e})},Ix=()=>{const{user:e,logOut:t}=k.useContext(to);return S.jsxs("div",{className:"header",children:[S.jsx("img",{src:RS,alt:""}),S.jsxs("ul",{className:"listing",children:[S.jsx(It,{to:"/react-ecommerce-website/",children:S.jsx("span",{children:"Shop"})}),S.jsx(It,{to:"/react-ecommerce-website/order",children:S.jsx("span",{children:"Order"})}),S.jsx(It,{to:"/react-ecommerce-website/manage",children:S.jsx("span",{children:"Manage Inventory"})}),S.jsx(It,{to:"/react-ecommerce-website/login",children:S.jsx("span",{children:"Login"})}),S.jsx(It,{to:"/react-ecommerce-website/signup",children:S.jsx("span",{children:"SignUp"})}),S.jsx("div",{style:{background:"gray",padding:"4px",borderRadius:"2px"},children:e?S.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"15px"},children:[S.jsx(It,{to:"/react-ecommerce-website/",children:S.jsx("span",{children:e.email})}),S.jsx("button",{onClick:t,children:"SignOut"})]}):""})]})]})};let Cx={data:""},Tx=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||Cx,Px=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Rx=/\/\*[^]*?\*\/|  +/g,bp=/\n+/g,An=(e,t)=>{let n="",r="",i="";for(let a in e){let o=e[a];a[0]=="@"?a[1]=="i"?n=a+" "+o+";":r+=a[1]=="f"?An(o,a):a+"{"+An(o,a[1]=="k"?"":t)+"}":typeof o=="object"?r+=An(o,t?t.replace(/([^,])+/g,s=>a.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,s):s?s+" "+l:l)):a):o!=null&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=An.p?An.p(a,o):a+":"+o+";")}return n+(t&&i?t+"{"+i+"}":i)+r},Vt={},Sy=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+Sy(e[n]);return t}return e},Ox=(e,t,n,r,i)=>{let a=Sy(e),o=Vt[a]||(Vt[a]=(l=>{let u=0,c=11;for(;u<l.length;)c=101*c+l.charCodeAt(u++)>>>0;return"go"+c})(a));if(!Vt[o]){let l=a!==e?e:(u=>{let c,f,d=[{}];for(;c=Px.exec(u.replace(Rx,""));)c[4]?d.shift():c[3]?(f=c[3].replace(bp," ").trim(),d.unshift(d[0][f]=d[0][f]||{})):d[0][c[1]]=c[2].replace(bp," ").trim();return d[0]})(e);Vt[o]=An(i?{["@keyframes "+o]:l}:l,n?"":"."+o)}let s=n&&Vt.g?Vt.g:null;return n&&(Vt.g=Vt[o]),((l,u,c,f)=>{f?u.data=u.data.replace(f,l):u.data.indexOf(l)===-1&&(u.data=c?l+u.data:u.data+l)})(Vt[o],t,r,s),o},Nx=(e,t,n)=>e.reduce((r,i,a)=>{let o=t[a];if(o&&o.call){let s=o(n),l=s&&s.props&&s.props.className||/^go/.test(s)&&s;o=l?"."+l:s&&typeof s=="object"?s.props?"":An(s,""):s===!1?"":s}return r+i+(o??"")},"");function pl(e){let t=this||{},n=e.call?e(t.p):e;return Ox(n.unshift?n.raw?Nx(n,[].slice.call(arguments,1),t.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(t.p):i),{}):n,Tx(t.target),t.g,t.o,t.k)}let Ey,gc,vc;pl.bind({g:1});let sn=pl.bind({k:1});function Ax(e,t,n,r){An.p=t,Ey=e,gc=n,vc=r}function ir(e,t){let n=this||{};return function(){let r=arguments;function i(a,o){let s=Object.assign({},a),l=s.className||i.className;n.p=Object.assign({theme:gc&&gc()},s),n.o=/ *go\d+/.test(l),s.className=pl.apply(n,r)+(l?" "+l:""),t&&(s.ref=o);let u=e;return e[0]&&(u=s.as||e,delete s.as),vc&&u[0]&&vc(s),Ey(u,s)}return t?t(i):i}}var Lx=e=>typeof e=="function",Us=(e,t)=>Lx(e)?e(t):e,Dx=(()=>{let e=0;return()=>(++e).toString()})(),ky=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),Mx=20,ns=new Map,jx=1e3,xp=e=>{if(ns.has(e))return;let t=setTimeout(()=>{ns.delete(e),Ar({type:4,toastId:e})},jx);ns.set(e,t)},Ux=e=>{let t=ns.get(e);t&&clearTimeout(t)},yc=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,Mx)};case 1:return t.toast.id&&Ux(t.toast.id),{...e,toasts:e.toasts.map(a=>a.id===t.toast.id?{...a,...t.toast}:a)};case 2:let{toast:n}=t;return e.toasts.find(a=>a.id===n.id)?yc(e,{type:1,toast:n}):yc(e,{type:0,toast:n});case 3:let{toastId:r}=t;return r?xp(r):e.toasts.forEach(a=>{xp(a.id)}),{...e,toasts:e.toasts.map(a=>a.id===r||r===void 0?{...a,visible:!1}:a)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(a=>a.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+i}))}}},rs=[],is={toasts:[],pausedAt:void 0},Ar=e=>{is=yc(is,e),rs.forEach(t=>{t(is)})},Fx={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},zx=(e={})=>{let[t,n]=k.useState(is);k.useEffect(()=>(rs.push(n),()=>{let i=rs.indexOf(n);i>-1&&rs.splice(i,1)}),[t]);let r=t.toasts.map(i=>{var a,o;return{...e,...e[i.type],...i,duration:i.duration||((a=e[i.type])==null?void 0:a.duration)||(e==null?void 0:e.duration)||Fx[i.type],style:{...e.style,...(o=e[i.type])==null?void 0:o.style,...i.style}}});return{...t,toasts:r}},$x=(e,t="blank",n)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(n==null?void 0:n.id)||Dx()}),no=e=>(t,n)=>{let r=$x(t,e,n);return Ar({type:2,toast:r}),r.id},rt=(e,t)=>no("blank")(e,t);rt.error=no("error");rt.success=no("success");rt.loading=no("loading");rt.custom=no("custom");rt.dismiss=e=>{Ar({type:3,toastId:e})};rt.remove=e=>Ar({type:4,toastId:e});rt.promise=(e,t,n)=>{let r=rt.loading(t.loading,{...n,...n==null?void 0:n.loading});return e.then(i=>(rt.success(Us(t.success,i),{id:r,...n,...n==null?void 0:n.success}),i)).catch(i=>{rt.error(Us(t.error,i),{id:r,...n,...n==null?void 0:n.error})}),e};var Bx=(e,t)=>{Ar({type:1,toast:{id:e,height:t}})},Hx=()=>{Ar({type:5,time:Date.now()})},Vx=e=>{let{toasts:t,pausedAt:n}=zx(e);k.useEffect(()=>{if(n)return;let a=Date.now(),o=t.map(s=>{if(s.duration===1/0)return;let l=(s.duration||0)+s.pauseDuration-(a-s.createdAt);if(l<0){s.visible&&rt.dismiss(s.id);return}return setTimeout(()=>rt.dismiss(s.id),l)});return()=>{o.forEach(s=>s&&clearTimeout(s))}},[t,n]);let r=k.useCallback(()=>{n&&Ar({type:6,time:Date.now()})},[n]),i=k.useCallback((a,o)=>{let{reverseOrder:s=!1,gutter:l=8,defaultPosition:u}=o||{},c=t.filter(v=>(v.position||u)===(a.position||u)&&v.height),f=c.findIndex(v=>v.id===a.id),d=c.filter((v,w)=>w<f&&v.visible).length;return c.filter(v=>v.visible).slice(...s?[d+1]:[0,d]).reduce((v,w)=>v+(w.height||0)+l,0)},[t]);return{toasts:t,handlers:{updateHeight:Bx,startPause:Hx,endPause:r,calculateOffset:i}}},Wx=sn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Kx=sn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Yx=sn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Gx=ir("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Wx} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Kx} 0.15s ease-out forwards;
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
    animation: ${Yx} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Qx=sn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,qx=ir("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Qx} 1s linear infinite;
`,Xx=sn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Jx=sn`
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
}`,Zx=ir("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Xx} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Jx} 0.2s ease-out forwards;
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
`,e2=ir("div")`
  position: absolute;
`,t2=ir("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,n2=sn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,r2=ir("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${n2} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,i2=({toast:e})=>{let{icon:t,type:n,iconTheme:r}=e;return t!==void 0?typeof t=="string"?k.createElement(r2,null,t):t:n==="blank"?null:k.createElement(t2,null,k.createElement(qx,{...r}),n!=="loading"&&k.createElement(e2,null,n==="error"?k.createElement(Gx,{...r}):k.createElement(Zx,{...r})))},a2=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,o2=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,s2="0%{opacity:0;} 100%{opacity:1;}",l2="0%{opacity:1;} 100%{opacity:0;}",u2=ir("div")`
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
`,c2=ir("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,f2=(e,t)=>{let n=e.includes("top")?1:-1,[r,i]=ky()?[s2,l2]:[a2(n),o2(n)];return{animation:t?`${sn(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${sn(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},d2=k.memo(({toast:e,position:t,style:n,children:r})=>{let i=e.height?f2(e.position||t||"top-center",e.visible):{opacity:0},a=k.createElement(i2,{toast:e}),o=k.createElement(c2,{...e.ariaProps},Us(e.message,e));return k.createElement(u2,{className:e.className,style:{...i,...n,...e.style}},typeof r=="function"?r({icon:a,message:o}):k.createElement(k.Fragment,null,a,o))});Ax(k.createElement);var h2=({id:e,className:t,style:n,onHeightUpdate:r,children:i})=>{let a=k.useCallback(o=>{if(o){let s=()=>{let l=o.getBoundingClientRect().height;r(e,l)};s(),new MutationObserver(s).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return k.createElement("div",{ref:a,className:t,style:n},i)},p2=(e,t)=>{let n=e.includes("top"),r=n?{top:0}:{bottom:0},i=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:ky()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(n?1:-1)}px)`,...r,...i}},m2=pl`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Ro=16,g2=({reverseOrder:e,position:t="top-center",toastOptions:n,gutter:r,children:i,containerStyle:a,containerClassName:o})=>{let{toasts:s,handlers:l}=Vx(n);return k.createElement("div",{style:{position:"fixed",zIndex:9999,top:Ro,left:Ro,right:Ro,bottom:Ro,pointerEvents:"none",...a},className:o,onMouseEnter:l.startPause,onMouseLeave:l.endPause},s.map(u=>{let c=u.position||t,f=l.calculateOffset(u,{reverseOrder:e,gutter:r,defaultPosition:t}),d=p2(c,f);return k.createElement(h2,{id:u.id,key:u.id,onHeightUpdate:l.updateHeight,className:u.visible?m2:"",style:d},u.type==="custom"?Us(u.message,u):i?i(u):k.createElement(d2,{toast:u,position:c}))}))},by=rt;const v2=()=>S.jsxs("div",{children:[S.jsx(Ix,{}),S.jsx(lS,{}),S.jsx(g2,{})]});function Ip(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ip(Object(n),!0).forEach(function(r){xe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ip(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Fs(e){"@babel/helpers - typeof";return Fs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Fs(e)}function y2(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Cp(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w2(e,t,n){return t&&Cp(e.prototype,t),n&&Cp(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function xe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Qf(e,t){return S2(e)||k2(e,t)||xy(e,t)||x2()}function ro(e){return _2(e)||E2(e)||xy(e)||b2()}function _2(e){if(Array.isArray(e))return wc(e)}function S2(e){if(Array.isArray(e))return e}function E2(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function k2(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,s;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(l){a=!0,s=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw s}}return r}}function xy(e,t){if(e){if(typeof e=="string")return wc(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return wc(e,t)}}function wc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function b2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x2(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Tp=function(){},qf={},Iy={},Cy=null,Ty={mark:Tp,measure:Tp};try{typeof window<"u"&&(qf=window),typeof document<"u"&&(Iy=document),typeof MutationObserver<"u"&&(Cy=MutationObserver),typeof performance<"u"&&(Ty=performance)}catch{}var I2=qf.navigator||{},Pp=I2.userAgent,Rp=Pp===void 0?"":Pp,Gn=qf,le=Iy,Op=Cy,Oo=Ty;Gn.document;var mn=!!le.documentElement&&!!le.head&&typeof le.addEventListener=="function"&&typeof le.createElement=="function",Py=~Rp.indexOf("MSIE")||~Rp.indexOf("Trident/"),No,Ao,Lo,Do,Mo,ln="___FONT_AWESOME___",_c=16,Ry="fa",Oy="svg-inline--fa",Cr="data-fa-i2svg",Sc="data-fa-pseudo-element",C2="data-fa-pseudo-element-pending",Xf="data-prefix",Jf="data-icon",Np="fontawesome-i2svg",T2="async",P2=["HTML","HEAD","STYLE","SCRIPT"],Ny=function(){try{return!0}catch{return!1}}(),oe="classic",ye="sharp",Zf=[oe,ye];function io(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[oe]}})}var Ua=io((No={},xe(No,oe,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),xe(No,ye,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),No)),Fa=io((Ao={},xe(Ao,oe,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),xe(Ao,ye,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Ao)),za=io((Lo={},xe(Lo,oe,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),xe(Lo,ye,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Lo)),R2=io((Do={},xe(Do,oe,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),xe(Do,ye,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Do)),O2=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Ay="fa-layers-text",N2=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,A2=io((Mo={},xe(Mo,oe,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),xe(Mo,ye,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Mo)),Ly=[1,2,3,4,5,6,7,8,9,10],L2=Ly.concat([11,12,13,14,15,16,17,18,19,20]),D2=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],pr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},$a=new Set;Object.keys(Fa[oe]).map($a.add.bind($a));Object.keys(Fa[ye]).map($a.add.bind($a));var M2=[].concat(Zf,ro($a),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",pr.GROUP,pr.SWAP_OPACITY,pr.PRIMARY,pr.SECONDARY]).concat(Ly.map(function(e){return"".concat(e,"x")})).concat(L2.map(function(e){return"w-".concat(e)})),da=Gn.FontAwesomeConfig||{};function j2(e){var t=le.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function U2(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(le&&typeof le.querySelector=="function"){var F2=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];F2.forEach(function(e){var t=Qf(e,2),n=t[0],r=t[1],i=U2(j2(n));i!=null&&(da[r]=i)})}var Dy={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ry,replacementClass:Oy,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};da.familyPrefix&&(da.cssPrefix=da.familyPrefix);var ki=L(L({},Dy),da);ki.autoReplaceSvg||(ki.observeMutations=!1);var F={};Object.keys(Dy).forEach(function(e){Object.defineProperty(F,e,{enumerable:!0,set:function(n){ki[e]=n,ha.forEach(function(r){return r(F)})},get:function(){return ki[e]}})});Object.defineProperty(F,"familyPrefix",{enumerable:!0,set:function(t){ki.cssPrefix=t,ha.forEach(function(n){return n(F)})},get:function(){return ki.cssPrefix}});Gn.FontAwesomeConfig=F;var ha=[];function z2(e){return ha.push(e),function(){ha.splice(ha.indexOf(e),1)}}var kn=_c,Ut={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function $2(e){if(!(!e||!mn)){var t=le.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=le.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return le.head.insertBefore(t,r),e}}var B2="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ba(){for(var e=12,t="";e-- >0;)t+=B2[Math.random()*62|0];return t}function Ri(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ed(e){return e.classList?Ri(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function My(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function H2(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(My(e[n]),'" ')},"").trim()}function ml(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function td(e){return e.size!==Ut.size||e.x!==Ut.x||e.y!==Ut.y||e.rotate!==Ut.rotate||e.flipX||e.flipY}function V2(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function W2(e){var t=e.transform,n=e.width,r=n===void 0?_c:n,i=e.height,a=i===void 0?_c:i,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Py?l+="translate(".concat(t.x/kn-r/2,"em, ").concat(t.y/kn-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/kn,"em), calc(-50% + ").concat(t.y/kn,"em)) "):l+="translate(".concat(t.x/kn,"em, ").concat(t.y/kn,"em) "),l+="scale(".concat(t.size/kn*(t.flipX?-1:1),", ").concat(t.size/kn*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var K2=`:root, :host {
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
}`;function jy(){var e=Ry,t=Oy,n=F.cssPrefix,r=F.replacementClass,i=K2;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var Ap=!1;function au(){F.autoAddCss&&!Ap&&($2(jy()),Ap=!0)}var Y2={mixout:function(){return{dom:{css:jy,insertCss:au}}},hooks:function(){return{beforeDOMElementCreation:function(){au()},beforeI2svg:function(){au()}}}},un=Gn||{};un[ln]||(un[ln]={});un[ln].styles||(un[ln].styles={});un[ln].hooks||(un[ln].hooks={});un[ln].shims||(un[ln].shims=[]);var Ct=un[ln],Uy=[],G2=function e(){le.removeEventListener("DOMContentLoaded",e),zs=1,Uy.map(function(t){return t()})},zs=!1;mn&&(zs=(le.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(le.readyState),zs||le.addEventListener("DOMContentLoaded",G2));function Q2(e){mn&&(zs?setTimeout(e,0):Uy.push(e))}function ao(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?My(e):"<".concat(t," ").concat(H2(r),">").concat(a.map(ao).join(""),"</").concat(t,">")}function Lp(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var q2=function(t,n){return function(r,i,a,o){return t.call(n,r,i,a,o)}},ou=function(t,n,r,i){var a=Object.keys(t),o=a.length,s=i!==void 0?q2(n,i):n,l,u,c;for(r===void 0?(l=1,c=t[a[0]]):(l=0,c=r);l<o;l++)u=a[l],c=s(c,t[u],u,t);return c};function X2(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Ec(e){var t=X2(e);return t.length===1?t[0].toString(16):null}function J2(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Dp(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function kc(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=Dp(t);typeof Ct.hooks.addPack=="function"&&!i?Ct.hooks.addPack(e,Dp(t)):Ct.styles[e]=L(L({},Ct.styles[e]||{}),a),e==="fas"&&kc("fa",t)}var jo,Uo,Fo,Zr=Ct.styles,Z2=Ct.shims,eI=(jo={},xe(jo,oe,Object.values(za[oe])),xe(jo,ye,Object.values(za[ye])),jo),nd=null,Fy={},zy={},$y={},By={},Hy={},tI=(Uo={},xe(Uo,oe,Object.keys(Ua[oe])),xe(Uo,ye,Object.keys(Ua[ye])),Uo);function nI(e){return~M2.indexOf(e)}function rI(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!nI(i)?i:null}var Vy=function(){var t=function(a){return ou(Zr,function(o,s,l){return o[l]=ou(s,a,{}),o},{})};Fy=t(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var s=a[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=o})}return i}),zy=t(function(i,a,o){if(i[o]=o,a[2]){var s=a[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=o})}return i}),Hy=t(function(i,a,o){var s=a[2];return i[o]=o,s.forEach(function(l){i[l]=o}),i});var n="far"in Zr||F.autoFetchSvg,r=ou(Z2,function(i,a){var o=a[0],s=a[1],l=a[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(i.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});$y=r.names,By=r.unicodes,nd=gl(F.styleDefault,{family:F.familyDefault})};z2(function(e){nd=gl(e.styleDefault,{family:F.familyDefault})});Vy();function rd(e,t){return(Fy[e]||{})[t]}function iI(e,t){return(zy[e]||{})[t]}function mr(e,t){return(Hy[e]||{})[t]}function Wy(e){return $y[e]||{prefix:null,iconName:null}}function aI(e){var t=By[e],n=rd("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Qn(){return nd}var id=function(){return{prefix:null,iconName:null,rest:[]}};function gl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?oe:n,i=Ua[r][e],a=Fa[r][e]||Fa[r][i],o=e in Ct.styles?e:null;return a||o||null}var Mp=(Fo={},xe(Fo,oe,Object.keys(za[oe])),xe(Fo,ye,Object.keys(za[ye])),Fo);function vl(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(t={},xe(t,oe,"".concat(F.cssPrefix,"-").concat(oe)),xe(t,ye,"".concat(F.cssPrefix,"-").concat(ye)),t),o=null,s=oe;(e.includes(a[oe])||e.some(function(u){return Mp[oe].includes(u)}))&&(s=oe),(e.includes(a[ye])||e.some(function(u){return Mp[ye].includes(u)}))&&(s=ye);var l=e.reduce(function(u,c){var f=rI(F.cssPrefix,c);if(Zr[c]?(c=eI[s].includes(c)?R2[s][c]:c,o=c,u.prefix=c):tI[s].indexOf(c)>-1?(o=c,u.prefix=gl(c,{family:s})):f?u.iconName=f:c!==F.replacementClass&&c!==a[oe]&&c!==a[ye]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var d=o==="fa"?Wy(u.iconName):{},v=mr(u.prefix,u.iconName);d.prefix&&(o=null),u.iconName=d.iconName||v||u.iconName,u.prefix=d.prefix||u.prefix,u.prefix==="far"&&!Zr.far&&Zr.fas&&!F.autoFetchSvg&&(u.prefix="fas")}return u},id());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===ye&&(Zr.fass||F.autoFetchSvg)&&(l.prefix="fass",l.iconName=mr(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Qn()||"fas"),l}var oI=function(){function e(){y2(this,e),this.definitions={}}return w2(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=L(L({},n.definitions[s]||{}),o[s]),kc(s,o[s]);var l=za[oe][s];l&&kc(l,o[s]),Vy()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],s=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[s][f]=u)}),n[s][l]=u}),n}}]),e}(),jp=[],ei={},di={},sI=Object.keys(di);function lI(e,t){var n=t.mixoutsTo;return jp=e,ei={},Object.keys(di).forEach(function(r){sI.indexOf(r)===-1&&delete di[r]}),jp.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Fs(i[o])==="object"&&Object.keys(i[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){ei[o]||(ei[o]=[]),ei[o].push(a[o])})}r.provides&&r.provides(di)}),n}function bc(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=ei[e]||[];return a.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Tr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=ei[e]||[];i.forEach(function(a){a.apply(null,n)})}function cn(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return di[e]?di[e].apply(null,t):void 0}function xc(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Qn();if(t)return t=mr(n,t)||t,Lp(Ky.definitions,n,t)||Lp(Ct.styles,n,t)}var Ky=new oI,uI=function(){F.autoReplaceSvg=!1,F.observeMutations=!1,Tr("noAuto")},cI={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return mn?(Tr("beforeI2svg",t),cn("pseudoElements2svg",t),cn("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;F.autoReplaceSvg===!1&&(F.autoReplaceSvg=!0),F.observeMutations=!0,Q2(function(){dI({autoReplaceSvgRoot:n}),Tr("watch",t)})}},fI={icon:function(t){if(t===null)return null;if(Fs(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:mr(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=gl(t[0]);return{prefix:r,iconName:mr(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(F.cssPrefix,"-"))>-1||t.match(O2))){var i=vl(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||Qn(),iconName:mr(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=Qn();return{prefix:a,iconName:mr(a,t)||t}}}},lt={noAuto:uI,config:F,dom:cI,parse:fI,library:Ky,findIconDefinition:xc,toHtml:ao},dI=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?le:n;(Object.keys(Ct.styles).length>0||F.autoFetchSvg)&&mn&&F.autoReplaceSvg&&lt.dom.i2svg({node:r})};function yl(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return ao(r)})}}),Object.defineProperty(e,"node",{get:function(){if(mn){var r=le.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function hI(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(td(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};i.style=ml(L(L({},a),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function pI(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?"".concat(t,"-").concat(F.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:L(L({},i),{},{id:o}),children:r}]}]}function ad(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,c=e.titleId,f=e.extra,d=e.watchable,v=d===void 0?!1:d,w=r.found?r:n,_=w.width,x=w.height,p=i==="fak",h=[F.replacementClass,a?"".concat(F.cssPrefix,"-").concat(a):""].filter(function(D){return f.classes.indexOf(D)===-1}).filter(function(D){return D!==""||!!D}).concat(f.classes).join(" "),m={children:[],attributes:L(L({},f.attributes),{},{"data-prefix":i,"data-icon":a,class:h,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(x)})},b=p&&!~f.classes.indexOf("fa-fw")?{width:"".concat(_/x*16*.0625,"em")}:{};v&&(m.attributes[Cr]=""),l&&(m.children.push({tag:"title",attributes:{id:m.attributes["aria-labelledby"]||"title-".concat(c||Ba())},children:[l]}),delete m.attributes.title);var C=L(L({},m),{},{prefix:i,iconName:a,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:L(L({},b),f.styles)}),N=r.found&&n.found?cn("generateAbstractMask",C)||{children:[],attributes:{}}:cn("generateAbstractIcon",C)||{children:[],attributes:{}},g=N.children,O=N.attributes;return C.children=g,C.attributes=O,s?pI(C):hI(C)}function Up(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=L(L(L({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});l&&(u[Cr]="");var c=L({},o.styles);td(i)&&(c.transform=W2({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=ml(c);f.length>0&&(u.style=f);var d=[];return d.push({tag:"span",attributes:u,children:[t]}),a&&d.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),d}function mI(e){var t=e.content,n=e.title,r=e.extra,i=L(L(L({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=ml(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var su=Ct.styles;function Ic(e){var t=e[0],n=e[1],r=e.slice(4),i=Qf(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(F.cssPrefix,"-").concat(pr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(pr.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(pr.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}var gI={found:!1,width:512,height:512};function vI(e,t){!Ny&&!F.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Cc(e,t){var n=t;return t==="fa"&&F.styleDefault!==null&&(t=Qn()),new Promise(function(r,i){if(cn("missingIconAbstract"),n==="fa"){var a=Wy(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&su[t]&&su[t][e]){var o=su[t][e];return r(Ic(o))}vI(e,t),r(L(L({},gI),{},{icon:F.showMissingIcons&&e?cn("missingIconAbstract")||{}:{}}))})}var Fp=function(){},Tc=F.measurePerformance&&Oo&&Oo.mark&&Oo.measure?Oo:{mark:Fp,measure:Fp},ea='FA "6.5.2"',yI=function(t){return Tc.mark("".concat(ea," ").concat(t," begins")),function(){return Yy(t)}},Yy=function(t){Tc.mark("".concat(ea," ").concat(t," ends")),Tc.measure("".concat(ea," ").concat(t),"".concat(ea," ").concat(t," begins"),"".concat(ea," ").concat(t," ends"))},od={begin:yI,end:Yy},as=function(){};function zp(e){var t=e.getAttribute?e.getAttribute(Cr):null;return typeof t=="string"}function wI(e){var t=e.getAttribute?e.getAttribute(Xf):null,n=e.getAttribute?e.getAttribute(Jf):null;return t&&n}function _I(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(F.replacementClass)}function SI(){if(F.autoReplaceSvg===!0)return os.replace;var e=os[F.autoReplaceSvg];return e||os.replace}function EI(e){return le.createElementNS("http://www.w3.org/2000/svg",e)}function kI(e){return le.createElement(e)}function Gy(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?EI:kI:n;if(typeof e=="string")return le.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var a=e.children||[];return a.forEach(function(o){i.appendChild(Gy(o,{ceFn:r}))}),i}function bI(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var os={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(Gy(i),n)}),n.getAttribute(Cr)===null&&F.keepOriginalSource){var r=le.createComment(bI(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ed(n).indexOf(F.replacementClass))return os.replace(t);var i=new RegExp("".concat(F.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(s,l){return l===F.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(s){return ao(s)}).join(`
`);n.setAttribute(Cr,""),n.innerHTML=o}};function $p(e){e()}function Qy(e,t){var n=typeof t=="function"?t:as;if(e.length===0)n();else{var r=$p;F.mutateApproach===T2&&(r=Gn.requestAnimationFrame||$p),r(function(){var i=SI(),a=od.begin("mutate");e.map(i),a(),n()})}}var sd=!1;function qy(){sd=!0}function Pc(){sd=!1}var $s=null;function Bp(e){if(Op&&F.observeMutations){var t=e.treeCallback,n=t===void 0?as:t,r=e.nodeCallback,i=r===void 0?as:r,a=e.pseudoElementsCallback,o=a===void 0?as:a,s=e.observeMutationsRoot,l=s===void 0?le:s;$s=new Op(function(u){if(!sd){var c=Qn();Ri(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!zp(f.addedNodes[0])&&(F.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&F.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&zp(f.target)&&~D2.indexOf(f.attributeName))if(f.attributeName==="class"&&wI(f.target)){var d=vl(ed(f.target)),v=d.prefix,w=d.iconName;f.target.setAttribute(Xf,v||c),w&&f.target.setAttribute(Jf,w)}else _I(f.target)&&i(f.target)})}}),mn&&$s.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function xI(){$s&&$s.disconnect()}function II(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function CI(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=vl(ed(e));return i.prefix||(i.prefix=Qn()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=iI(i.prefix,e.innerText)||rd(i.prefix,Ec(e.innerText))),!i.iconName&&F.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function TI(e){var t=Ri(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return F.autoA11y&&(n?t["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(r||Ba()):(t["aria-hidden"]="true",t.focusable="false")),t}function PI(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ut,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Hp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=CI(e),r=n.iconName,i=n.prefix,a=n.rest,o=TI(e),s=bc("parseNodeAttributes",{},e),l=t.styleParser?II(e):[];return L({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:Ut,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},s)}var RI=Ct.styles;function Xy(e){var t=F.autoReplaceSvg==="nest"?Hp(e,{styleParser:!1}):Hp(e);return~t.extra.classes.indexOf(Ay)?cn("generateLayersText",e,t):cn("generateSvgReplacementMutation",e,t)}var qn=new Set;Zf.map(function(e){qn.add("fa-".concat(e))});Object.keys(Ua[oe]).map(qn.add.bind(qn));Object.keys(Ua[ye]).map(qn.add.bind(qn));qn=ro(qn);function Vp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!mn)return Promise.resolve();var n=le.documentElement.classList,r=function(f){return n.add("".concat(Np,"-").concat(f))},i=function(f){return n.remove("".concat(Np,"-").concat(f))},a=F.autoFetchSvg?qn:Zf.map(function(c){return"fa-".concat(c)}).concat(Object.keys(RI));a.includes("fa")||a.push("fa");var o=[".".concat(Ay,":not([").concat(Cr,"])")].concat(a.map(function(c){return".".concat(c,":not([").concat(Cr,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Ri(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();var l=od.begin("onTree"),u=s.reduce(function(c,f){try{var d=Xy(f);d&&c.push(d)}catch(v){Ny||v.name==="MissingIcon"&&console.error(v)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(d){Qy(d,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(d){l(),f(d)})})}function OI(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Xy(e).then(function(n){n&&Qy([n],t)})}function NI(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:xc(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:xc(i||{})),e(r,L(L({},n),{},{mask:i}))}}var AI=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Ut:r,a=n.symbol,o=a===void 0?!1:a,s=n.mask,l=s===void 0?null:s,u=n.maskId,c=u===void 0?null:u,f=n.title,d=f===void 0?null:f,v=n.titleId,w=v===void 0?null:v,_=n.classes,x=_===void 0?[]:_,p=n.attributes,h=p===void 0?{}:p,m=n.styles,b=m===void 0?{}:m;if(t){var C=t.prefix,N=t.iconName,g=t.icon;return yl(L({type:"icon"},t),function(){return Tr("beforeDOMElementCreation",{iconDefinition:t,params:n}),F.autoA11y&&(d?h["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(w||Ba()):(h["aria-hidden"]="true",h.focusable="false")),ad({icons:{main:Ic(g),mask:l?Ic(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:N,transform:L(L({},Ut),i),symbol:o,title:d,maskId:c,titleId:w,extra:{attributes:h,styles:b,classes:x}})})}},LI={mixout:function(){return{icon:NI(AI)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Vp,n.nodeCallback=OI,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?le:r,a=n.callback,o=a===void 0?function(){}:a;return Vp(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,d=r.extra;return new Promise(function(v,w){Promise.all([Cc(i,s),c.iconName?Cc(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(_){var x=Qf(_,2),p=x[0],h=x[1];v([n,ad({icons:{main:p,mask:h},prefix:s,iconName:i,transform:l,symbol:u,maskId:f,title:a,titleId:o,extra:d,watchable:!0})])}).catch(w)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,s=n.styles,l=ml(s);l.length>0&&(i.style=l);var u;return td(o)&&(u=cn("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(u||a.icon),{children:r,attributes:i}}}},DI={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return yl({type:"layer"},function(){Tr("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(F.cssPrefix,"-layers")].concat(ro(a)).join(" ")},children:o}]})}}}},MI={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return yl({type:"counter",content:n},function(){return Tr("beforeDOMElementCreation",{content:n,params:r}),mI({content:n.toString(),title:a,extra:{attributes:u,styles:f,classes:["".concat(F.cssPrefix,"-layers-counter")].concat(ro(s))}})})}}}},jI={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?Ut:i,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,d=r.styles,v=d===void 0?{}:d;return yl({type:"text",content:n},function(){return Tr("beforeDOMElementCreation",{content:n,params:r}),Up({content:n,transform:L(L({},Ut),a),title:s,extra:{attributes:f,styles:v,classes:["".concat(F.cssPrefix,"-layers-text")].concat(ro(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,s=null,l=null;if(Py){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/u,l=c.height/u}return F.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Up({content:n.innerHTML,width:s,height:l,transform:a,title:i,extra:o,watchable:!0})])}}},UI=new RegExp('"',"ug"),Wp=[1105920,1112319];function FI(e){var t=e.replace(UI,""),n=J2(t,0),r=n>=Wp[0]&&n<=Wp[1],i=t.length===2?t[0]===t[1]:!1;return{value:Ec(i?t[0]:t),isSecondary:r||i}}function Kp(e,t){var n="".concat(C2).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=Ri(e.children),o=a.filter(function(g){return g.getAttribute(Sc)===t})[0],s=Gn.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(N2),u=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var f=s.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?ye:oe,v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Fa[d][l[2].toLowerCase()]:A2[d][u],w=FI(f),_=w.value,x=w.isSecondary,p=l[0].startsWith("FontAwesome"),h=rd(v,_),m=h;if(p){var b=aI(_);b.iconName&&b.prefix&&(h=b.iconName,v=b.prefix)}if(h&&!x&&(!o||o.getAttribute(Xf)!==v||o.getAttribute(Jf)!==m)){e.setAttribute(n,m),o&&e.removeChild(o);var C=PI(),N=C.extra;N.attributes[Sc]=t,Cc(h,v).then(function(g){var O=ad(L(L({},C),{},{icons:{main:g,mask:id()},prefix:v,iconName:m,extra:N,watchable:!0})),D=le.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(D,e.firstChild):e.appendChild(D),D.outerHTML=O.map(function(A){return ao(A)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function zI(e){return Promise.all([Kp(e,"::before"),Kp(e,"::after")])}function $I(e){return e.parentNode!==document.head&&!~P2.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Sc)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Yp(e){if(mn)return new Promise(function(t,n){var r=Ri(e.querySelectorAll("*")).filter($I).map(zI),i=od.begin("searchPseudoElements");qy(),Promise.all(r).then(function(){i(),Pc(),t()}).catch(function(){i(),Pc(),n()})})}var BI={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Yp,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?le:r;F.searchPseudoElements&&Yp(i)}}},Gp=!1,HI={mixout:function(){return{dom:{unwatch:function(){qy(),Gp=!0}}}},hooks:function(){return{bootstrap:function(){Bp(bc("mutationObserverCallbacks",{}))},noAuto:function(){xI()},watch:function(n){var r=n.observeMutationsRoot;Gp?Pc():Bp(bc("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Qp=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],s=a.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},VI={mixout:function(){return{parse:{transform:function(n){return Qp(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Qp(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},d={transform:"translate(".concat(o/2*-1," -256)")},v={outer:s,inner:f,path:d};return{tag:"g",attributes:L({},v.outer),children:[{tag:"g",attributes:L({},v.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:L(L({},r.icon.attributes),v.path)}]}]}}}},lu={x:0,y:0,width:"100%",height:"100%"};function qp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function WI(e){return e.tag==="g"?e.children:[e]}var KI={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?vl(i.split(" ").map(function(o){return o.trim()})):id();return a.prefix||(a.prefix=Qn()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,s=n.maskId,l=n.transform,u=a.width,c=a.icon,f=o.width,d=o.icon,v=V2({transform:l,containerWidth:f,iconWidth:u}),w={tag:"rect",attributes:L(L({},lu),{},{fill:"white"})},_=c.children?{children:c.children.map(qp)}:{},x={tag:"g",attributes:L({},v.inner),children:[qp(L({tag:c.tag,attributes:L(L({},c.attributes),v.path)},_))]},p={tag:"g",attributes:L({},v.outer),children:[x]},h="mask-".concat(s||Ba()),m="clip-".concat(s||Ba()),b={tag:"mask",attributes:L(L({},lu),{},{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,p]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:m},children:WI(d)},b]};return r.push(C,{tag:"rect",attributes:L({fill:"currentColor","clip-path":"url(#".concat(m,")"),mask:"url(#".concat(h,")")},lu)}),{children:r,attributes:i}}}},YI={provides:function(t){var n=!1;Gn.matchMedia&&(n=Gn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:L(L({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=L(L({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:L(L({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:L(L({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:L(L({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:L(L({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:L(L({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:L(L({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:L(L({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},GI={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},QI=[Y2,LI,DI,MI,jI,BI,HI,VI,KI,YI,GI];lI(QI,{mixoutsTo:lt});lt.noAuto;lt.config;lt.library;lt.dom;var Rc=lt.parse;lt.findIconDefinition;lt.toHtml;var qI=lt.icon;lt.layer;lt.text;lt.counter;var Jy={exports:{}},XI="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",JI=XI,ZI=JI;function Zy(){}function e0(){}e0.resetWarningCache=Zy;var eC=function(){function e(r,i,a,o,s,l){if(l!==ZI){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:e0,resetWarningCache:Zy};return n.PropTypes=n,n};Jy.exports=eC();var tC=Jy.exports;const Q=Dc(tC);function Xp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Dt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Xp(Object(n),!0).forEach(function(r){ti(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Bs(e){"@babel/helpers - typeof";return Bs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Bs(e)}function ti(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function nC(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function rC(e,t){if(e==null)return{};var n=nC(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Oc(e){return iC(e)||aC(e)||oC(e)||sC()}function iC(e){if(Array.isArray(e))return Nc(e)}function aC(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function oC(e,t){if(e){if(typeof e=="string")return Nc(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Nc(e,t)}}function Nc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function sC(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lC(e){var t,n=e.beat,r=e.fade,i=e.beatFade,a=e.bounce,o=e.shake,s=e.flash,l=e.spin,u=e.spinPulse,c=e.spinReverse,f=e.pulse,d=e.fixedWidth,v=e.inverse,w=e.border,_=e.listItem,x=e.flip,p=e.size,h=e.rotation,m=e.pull,b=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":a,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":d,"fa-inverse":v,"fa-border":w,"fa-li":_,"fa-flip":x===!0,"fa-flip-horizontal":x==="horizontal"||x==="both","fa-flip-vertical":x==="vertical"||x==="both"},ti(t,"fa-".concat(p),typeof p<"u"&&p!==null),ti(t,"fa-rotate-".concat(h),typeof h<"u"&&h!==null&&h!==0),ti(t,"fa-pull-".concat(m),typeof m<"u"&&m!==null),ti(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(b).map(function(C){return b[C]?C:null}).filter(function(C){return C})}function uC(e){return e=e-0,e===e}function t0(e){return uC(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var cC=["style"];function fC(e){return e.charAt(0).toUpperCase()+e.slice(1)}function dC(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=t0(n.slice(0,r)),a=n.slice(r+1).trim();return i.startsWith("webkit")?t[fC(i)]=a:t[i]=a,t},{})}function n0(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return n0(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,u){var c=t.attributes[u];switch(u){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=dC(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[t0(u)]=c}return l},{attrs:{}}),a=n.style,o=a===void 0?{}:a,s=rC(n,cC);return i.attrs.style=Dt(Dt({},i.attrs.style),o),e.apply(void 0,[t.tag,Dt(Dt({},i.attrs),s)].concat(Oc(r)))}var r0=!1;try{r0=!0}catch{}function hC(){if(!r0&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Jp(e){if(e&&Bs(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Rc.icon)return Rc.icon(e);if(e===null)return null;if(e&&Bs(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function uu(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ti({},e,t):{}}var Zp={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Ht=Vs.forwardRef(function(e,t){var n=Dt(Dt({},Zp),e),r=n.icon,i=n.mask,a=n.symbol,o=n.className,s=n.title,l=n.titleId,u=n.maskId,c=Jp(r),f=uu("classes",[].concat(Oc(lC(n)),Oc((o||"").split(" ")))),d=uu("transform",typeof n.transform=="string"?Rc.transform(n.transform):n.transform),v=uu("mask",Jp(i)),w=qI(c,Dt(Dt(Dt(Dt({},f),d),v),{},{symbol:a,title:s,titleId:l,maskId:u}));if(!w)return hC("Could not find icon",c),null;var _=w.abstract,x={ref:t};return Object.keys(n).forEach(function(p){Zp.hasOwnProperty(p)||(x[p]=n[p])}),pC(_[0],x)});Ht.displayName="FontAwesomeIcon";Ht.propTypes={beat:Q.bool,border:Q.bool,beatFade:Q.bool,bounce:Q.bool,className:Q.string,fade:Q.bool,flash:Q.bool,mask:Q.oneOfType([Q.object,Q.array,Q.string]),maskId:Q.string,fixedWidth:Q.bool,inverse:Q.bool,flip:Q.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Q.oneOfType([Q.object,Q.array,Q.string]),listItem:Q.bool,pull:Q.oneOf(["right","left"]),pulse:Q.bool,rotation:Q.oneOf([0,90,180,270]),shake:Q.bool,size:Q.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Q.bool,spinPulse:Q.bool,spinReverse:Q.bool,symbol:Q.oneOfType([Q.bool,Q.string]),title:Q.string,titleId:Q.string,transform:Q.oneOfType([Q.string,Q.object]),swapOpacity:Q.bool};var pC=n0.bind(null,Vs.createElement),mC={prefix:"fas",iconName:"cart-plus",icon:[576,512,[],"f217","M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z"]},Ac={prefix:"fas",iconName:"eye-slash",icon:[640,512,[],"f070","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]},gC={prefix:"fas",iconName:"circle-right",icon:[512,512,[61838,"arrow-alt-circle-right"],"f35a","M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 135.1l99.9 107.1c3.5 3.8 5.5 8.7 5.5 13.8s-2 10.1-5.5 13.8L294.6 376.9c-4.2 4.5-10.1 7.1-16.3 7.1C266 384 256 374 256 361.7l0-57.7-96 0c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32l96 0 0-57.7c0-12.3 10-22.3 22.3-22.3c6.2 0 12.1 2.6 16.3 7.1z"]},i0=gC,Lc={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},vC={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]},yC={prefix:"fas",iconName:"delete-left",icon:[576,512,[9003,"backspace"],"f55a","M576 128c0-35.3-28.7-64-64-64H205.3c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7H512c35.3 0 64-28.7 64-64V128zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"]};const wC=e=>{const{name:t,img:n,price:r,seller:i,ratings:a}=e.product,o=e.addedProduct;return S.jsxs("div",{className:"shoes",children:[S.jsx("img",{src:n,alt:""}),S.jsxs("div",{className:"shoes-text-style",children:[S.jsx("h4",{children:t}),S.jsxs("p",{children:["Price: ",r]}),S.jsxs("div",{className:"shoes-info",children:[S.jsxs("p",{children:["Manufacturer: ",i]}),S.jsxs("p",{children:["Ratings: ",a," star"]})]})]}),S.jsxs("button",{onClick:()=>o(e.product),className:"add-to-cart-btn",children:["Add to Cart ",S.jsx(Ht,{icon:mC})]})]})},a0=({cart:e,handleClearCart:t,children:n})=>{let r=0,i=0,a=0;for(const l of e)r=r+l.price*l.quantity,i=i+l.shipping*l.quantity,a=a+l.quantity;const o=r*7/100,s=r+i+o;return S.jsxs("div",{className:"cart",children:[S.jsx("h2",{children:"Order Summary"}),S.jsxs("div",{className:"cart-style",children:[S.jsxs("p",{children:["Selected Items :$",a]}),S.jsxs("p",{children:["Total Price :$",r]}),S.jsxs("p",{children:["Total Shipping Charge:$",i]}),S.jsxs("p",{children:["Tax:$",o.toFixed(2)]}),S.jsxs("h3",{children:["Grand Total:$",s.toFixed(2)]})]}),S.jsxs("div",{className:"cart-btn",children:[S.jsxs("button",{onClick:t,className:"clear-cart btn",children:["Clear cart ",S.jsx(Ht,{icon:yC})]}),n]})]})},_C=e=>{let t=wl();const n=t[e];if(!n)t[e]=1;else{const r=n+1;t[e]=r}localStorage.setItem("shopping-cart",JSON.stringify(t))},SC=e=>{const t=wl();e in t&&(delete t[e],localStorage.setItem("shopping-cart",JSON.stringify(t)))},wl=()=>{let e={};const t=localStorage.getItem("shopping-cart");return t&&(e=JSON.parse(t)),e},o0=()=>{localStorage.removeItem("shopping-cart")},EC=()=>{const[e,t]=k.useState([]);k.useEffect(()=>{fetch("products.json").then(o=>o.json()).then(o=>t(o))},[]),k.useEffect(()=>{const o=wl(),s=[];for(const l in o){const u=e.find(c=>c.id===l);if(u){const c=o[l];u.quantity=c,s.push(u)}}r(s)},[e]);const[n,r]=k.useState([]),i=o=>{let s=[];const l=n.find(u=>u.id===o.id);l?(l.quantity=l.quantity+1,s=[...n.filter(c=>c.id!==o.id),l]):(o.quantity=1,s=[...n,o]),r(s),_C(o.id)},a=()=>{r([]),o0()};return S.jsxs("div",{className:"grid-cart",children:[S.jsx("div",{className:"grid",children:e.map(o=>S.jsx(wC,{product:o,addedProduct:i},o.id))}),S.jsx("div",{children:S.jsx(a0,{cart:n,handleClearCart:a,children:S.jsx(It,{to:"/react-ecommerce-website/order",children:S.jsxs("button",{className:"review-cart btn",children:["Review Order ",S.jsx(Ht,{icon:i0})]})})})})]})},kC=({products:e,handleRemoveItems:t})=>S.jsxs("div",{className:"reviewProduct",children:[S.jsx("img",{className:"reviewProductImg",src:e.img,alt:""}),S.jsxs("div",{className:"reviewProductDetails",children:[S.jsxs("div",{className:"reviewProductLevel",children:[S.jsx("p",{className:"reviewProductHead",children:e.name}),S.jsxs("p",{children:["Price:",S.jsxs("span",{style:{color:"#F90"},children:["$",e.price]})]}),S.jsxs("div",{style:{display:"flex"},children:[S.jsxs("p",{children:["Shipping Charge:",S.jsxs("span",{style:{color:"#F90"},children:["$",e.shipping]})]}),S.jsxs("p",{style:{paddingLeft:"20px"},children:["Quantity:",S.jsx("span",{style:{color:"#F90"},children:e.quantity}),"pcs"]})]})]}),S.jsx("div",{onClick:()=>t(e.id),className:"deletebtn",children:S.jsx(Ht,{style:{width:"20px",height:"20px",color:"#EB5757"},icon:vC})})]})]}),bC=()=>{const e=rS(),[t,n]=k.useState(e),r=a=>{console.log(a);const o=t.filter(s=>s.id!==a);n(o),SC(a)},i=()=>{n([]),o0()};return S.jsxs("div",{className:"grid-cart",children:[S.jsx("div",{children:t.map(a=>S.jsx(kC,{products:a,handleRemoveItems:r},a.id))}),S.jsx("div",{className:"cart",children:S.jsx(a0,{cart:t,handleClearCart:i,children:S.jsx(It,{to:"/react-ecommerce-website/checkout",children:S.jsxs("button",{className:"review-cart btn",children:["Proceed Checkout ",S.jsx(Ht,{icon:i0})]})})})})]})},s0="/react-ecommerce-website/assets/Logo-google-icon-PNG-DAPkRTA5.png",xC=()=>{var v,w;const[e,t]=k.useState(!1),[n,r]=k.useState(""),[i,a]=k.useState(""),{signIn:o,user:s,logOut:l}=k.useContext(to),u=Mf(),f=((w=(v=Or().state)==null?void 0:v.from)==null?void 0:w.pathname)||"/react-ecommerce-website/",d=_=>{_.preventDefault();const x=_.target,p=x.email.value,h=x.password.value;o(p,h).then(m=>{const b=m.user;console.log(b),a("Login Successful!"),by.success("Login Successful!"),setTimeout(()=>a(""),3e3),x.reset(),u(f,{replace:!0})}).catch(m=>{const b=m.message;r(b),console.log(b),setTimeout(()=>r(""),3e3)})};return S.jsx("div",{style:{marginTop:"50px"},children:s?S.jsxs("div",{children:[S.jsxs("p",{children:[S.jsx("h2",{children:"Already Login in "}),S.jsx("span",{style:{color:"#F90"},children:s.email})]}),S.jsx("p",{children:"for log in another account, please SignOut from this account first"}),S.jsx("button",{onClick:l,children:"SignOut"})]}):S.jsxs("div",{className:"login-container",children:[S.jsx("h2",{children:"Login"}),S.jsxs("form",{onSubmit:d,className:"login-form",children:[S.jsxs("label",{children:["Email",S.jsx("input",{type:"email",name:"email",required:!0})]}),S.jsxs("label",{className:"password-container",children:["Password",S.jsxs("div",{className:"input-icon-container",children:[S.jsx("input",{type:e?"text":"password",name:"password",required:!0}),S.jsx(Ht,{icon:e?Lc:Ac,onClick:()=>t(!e),className:"password-icon"})]})]}),S.jsx("button",{type:"submit",className:"login-button",children:"Login"}),S.jsxs("p",{children:["New to Ema-john?  ",S.jsx(It,{to:"/react-ecommerce-website/signup",children:S.jsx("span",{style:{color:"#F90"},children:" Create New Account"})})]}),S.jsx("div",{className:"or-separator",children:S.jsx("span",{children:"or"})}),S.jsxs("button",{type:"button",className:"google-button",children:[S.jsx("img",{src:s0,alt:"Google logo"})," Continue with Google"]})]}),S.jsx("span",{style:{color:"red",opacity:"0.7",textAlign:"start"},children:n}),S.jsx("span",{style:{color:"green",opacity:"0.7",textAlign:"start"},children:i})]})})},IC=()=>S.jsx("div",{children:S.jsx("p",{children:"This is manage page"})}),CC=async()=>{const t=await(await fetch("products.json")).json(),n=wl(),r=[];for(const i in n){const a=t.find(o=>o.id===i);if(a){const o=n[i];a.quantity=o,r.push(a)}}return r},TC=()=>S.jsx("div",{children:S.jsx("p",{children:"This is checkout page"})}),PC=()=>S.jsxs("div",{style:{textAlign:"center",marginTop:"50px"},children:[S.jsx("h1",{style:{fontSize:"2em",color:"#333"},children:"404 | Nothing here to see"}),S.jsx(It,{to:"/react-ecommerce-website/",children:S.jsx("button",{style:{marginTop:"20px",padding:"10px 20px",fontSize:"1em",color:"#fff",backgroundColor:"#007BFF",border:"none",borderRadius:"5px",cursor:"pointer"},children:"Go Back Home"})})]}),RC=()=>{const[e,t]=k.useState(!1),[n,r]=k.useState(!1),[i,a]=k.useState(""),[o,s]=k.useState(""),{createUser:l}=k.useContext(to),u=c=>{c.preventDefault();const f=c.target,d=f.email.value,v=f.password.value,w=f.confirm_password.value;if(console.log(f,d,v,w),a(""),s(""),/(?=.*[a-z])/.test(v))if(/(?=.*[A-Z])/.test(v))if(/(?=.*\d)/.test(v))if(/(?=.*[@$!%*?&])/.test(v))if(/^.{8,16}$/.test(v))if(v!==w){a("Password don't match"),setTimeout(()=>a(""),3e3);return}else a("");else{a("minimum 8 characters, maximum 16 characters"),setTimeout(()=>a(""),3e3);return}else{a("at least one special character [@$!%*?&]"),setTimeout(()=>a(""),3e3);return}else{a("at least one digit [0-9]"),setTimeout(()=>a(""),3e3);return}else{a("at least one capital letter [A-Z]"),setTimeout(()=>a(""),3e3);return}else{a("at least one small letter [a-z]"),setTimeout(()=>a(""),3e3);return}l(d,v).then(_=>{const x=_.user;console.log(x),s("Account created successfully!"),by.success("Account created successfully!"),setTimeout(()=>s(""),3e3),f.reset()}).catch(_=>{const x=_.message;a(x),console.log(x),setTimeout(()=>a(""),3e3)})};return S.jsx("div",{style:{marginTop:"50px"},children:S.jsxs("div",{className:"signup-container",children:[S.jsx("h2",{children:"Sign Up"}),S.jsxs("form",{onSubmit:u,className:"signup-form",children:[S.jsxs("label",{children:["Email",S.jsx("input",{type:"email",name:"email",required:!0})]}),S.jsxs("label",{className:"password-container",children:["Password",S.jsxs("div",{className:"input-icon-container",children:[S.jsx("input",{type:e?"text":"password",name:"password",required:!0}),S.jsx(Ht,{icon:e?Lc:Ac,onClick:()=>t(!e),className:"password-icon"})]})]}),S.jsxs("label",{className:"password-container",children:["Confirm Password",S.jsxs("div",{className:"input-icon-container",children:[S.jsx("input",{type:n?"text":"password",name:"confirm_password",required:!0}),S.jsx(Ht,{icon:n?Lc:Ac,onClick:()=>r(!n),className:"password-icon"})]})]}),S.jsx("button",{type:"submit",className:"signup-button",children:"Sign Up"}),S.jsxs("p",{children:["Already have an account? ",S.jsx(It,{to:"/react-ecommerce-website/login",children:S.jsx("span",{style:{color:"#F90"},children:"Login"})})]}),S.jsx("div",{className:"or-separator",children:S.jsx("span",{children:"or"})}),S.jsxs("button",{type:"button",className:"google-button",children:[S.jsx("img",{src:s0,alt:"Google logo"})," Continue with Google"]})]}),S.jsx("span",{style:{color:"red",opacity:"0.7",textAlign:"start"},children:i}),S.jsx("span",{style:{color:"green",opacity:"0.7",textAlign:"start"},children:o})]})})},OC=({children:e})=>{const{user:t,loading:n}=k.useContext(to),r=Or();return n?S.jsx("div",{children:"Loading..........."}):t?e:S.jsx(sS,{to:"/react-ecommerce-website/login",state:{from:r},replace:!0})},NC=gS([{path:"/react-ecommerce-website/",element:S.jsx(v2,{}),children:[{path:"/react-ecommerce-website/",element:S.jsx(EC,{})},{path:"/react-ecommerce-website/order",element:S.jsx(OC,{children:S.jsx(bC,{})}),loader:CC},{path:"/react-ecommerce-website/manage",element:S.jsx(IC,{})},{path:"/react-ecommerce-website/login",element:S.jsx(xC,{})},{path:"/react-ecommerce-website/signup",element:S.jsx(RC,{})},{path:"/react-ecommerce-website/checkout",element:S.jsx(TC,{})},{path:"*",element:S.jsx(PC,{})}]}]);cu.createRoot(document.getElementById("root")).render(S.jsx(Vs.StrictMode,{children:S.jsx(xx,{children:S.jsx(xS,{router:NC})})}));
