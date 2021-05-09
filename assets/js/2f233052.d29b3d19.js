(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[8524],{1080:function(t,e,i){"use strict";i.d(e,{Zo:function(){return d},kt:function(){return f}});var n=i(3289);function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function a(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function s(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?a(Object(i),!0).forEach((function(e){r(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function o(t,e){if(null==t)return{};var i,n,r=function(t,e){if(null==t)return{};var i,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)i=a[n],e.indexOf(i)>=0||(r[i]=t[i]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)i=a[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(r[i]=t[i])}return r}var l=n.createContext({}),c=function(t){var e=n.useContext(l),i=e;return t&&(i="function"==typeof t?t(e):s(s({},e),t)),i},d=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var i=t.components,r=t.mdxType,a=t.originalType,l=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),p=c(i),f=r,m=p["".concat(l,".").concat(f)]||p[f]||u[f]||a;return i?n.createElement(m,s(s({ref:e},d),{},{components:i})):n.createElement(m,s({ref:e},d))}));function f(t,e){var i=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=i.length,s=new Array(a);s[0]=p;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:r,s[1]=o;for(var c=2;c<a;c++)s[c]=i[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},8620:function(t,e,i){"use strict";i.r(e),i.d(e,{frontMatter:function(){return s},metadata:function(){return o},toc:function(){return l},default:function(){return d}});var n=i(379),r=i(8988),a=(i(3289),i(1080)),s={title:"Interstitial Ad",sidebar_label:"Interstitial"},o={unversionedId:"react-native/ads/interstitial",id:"react-native/ads/interstitial",isDocsHomePage:!1,title:"Interstitial Ad",description:"Usage",source:"@site/docs/react-native/ads/interstitial.md",sourceDirName:"react-native/ads",slug:"/react-native/ads/interstitial",permalink:"/docs/react-native/ads/interstitial",editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/docs/react-native/ads/interstitial.md",version:"current",sidebar_label:"Interstitial",frontMatter:{title:"Interstitial Ad",sidebar_label:"Interstitial"},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/react-native"},next:{title:"Rewarded Ad",permalink:"/docs/react-native/ads/rewarded"}},l=[{value:"Usage",id:"usage",children:[]},{value:"Events",id:"events",children:[{value:"<code>interstitial.load</code>",id:"interstitialload",children:[]},{value:"<code>interstitial.loadfail</code>",id:"interstitialloadfail",children:[]},{value:"<code>interstitial.show</code>",id:"interstitialshow",children:[]},{value:"<code>interstitial.showfail</code>",id:"interstitialshowfail",children:[]},{value:"<code>interstitial.dismiss</code>",id:"interstitialdismiss",children:[]},{value:"<code>interstitial.impression</code>",id:"interstitialimpression",children:[]}]}],c={toc:l};function d(t){var e=t.components,i=(0,r.Z)(t,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import React from 'react'\nimport AdMob, { InterstitialAd } from '@admob-plus/react-native'\n\nReact.useEffect(async () => {\n  await AdMob.start()\n\n  const interstitial = new InterstitialAd({\n    adUnitId: 'ca-app-pub-3940256099942544/1033173712',\n  })\n  await interstitial.load()\n  await interstitial.show()\n}, [])\n")),(0,a.kt)("h2",{id:"events"},"Events"),(0,a.kt)("h3",{id:"interstitialload"},(0,a.kt)("inlineCode",{parentName:"h3"},"interstitial.load")),(0,a.kt)("h3",{id:"interstitialloadfail"},(0,a.kt)("inlineCode",{parentName:"h3"},"interstitial.loadfail")),(0,a.kt)("h3",{id:"interstitialshow"},(0,a.kt)("inlineCode",{parentName:"h3"},"interstitial.show")),(0,a.kt)("h3",{id:"interstitialshowfail"},(0,a.kt)("inlineCode",{parentName:"h3"},"interstitial.showfail")),(0,a.kt)("h3",{id:"interstitialdismiss"},(0,a.kt)("inlineCode",{parentName:"h3"},"interstitial.dismiss")),(0,a.kt)("h3",{id:"interstitialimpression"},(0,a.kt)("inlineCode",{parentName:"h3"},"interstitial.impression")))}d.isMDXComponent=!0}}]);