(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{130:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return o})),t.d(r,"toc",(function(){return c})),t.d(r,"default",(function(){return s}));var a=t(3),n=t(7),d=(t(0),t(164)),i={title:"Rewarded Interstitial Ad",sidebar_label:"Rewarded Interstitial"},o={unversionedId:"capacitor/ads/rewarded-interstitial",id:"capacitor/ads/rewarded-interstitial",isDocsHomePage:!1,title:"Rewarded Interstitial Ad",description:"Usage",source:"@site/docs/capacitor/ads/rewarded-interstitial.md",slug:"/capacitor/ads/rewarded-interstitial",permalink:"/docs/capacitor/ads/rewarded-interstitial",editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/docs/capacitor/ads/rewarded-interstitial.md",version:"current",sidebar_label:"Rewarded Interstitial",sidebar:"docs",previous:{title:"Rewarded Ad",permalink:"/docs/capacitor/ads/rewarded"},next:{title:"Getting Started",permalink:"/docs/cordova"}},c=[{value:"Usage",id:"usage",children:[]},{value:"Events",id:"events",children:[{value:"<code>rewardedi.load</code>",id:"rewardediload",children:[]},{value:"<code>rewardedi.loadfail</code>",id:"rewardediloadfail",children:[]},{value:"<code>rewardedi.show</code>",id:"rewardedishow",children:[]},{value:"<code>rewardedi.showfail</code>",id:"rewardedishowfail",children:[]},{value:"<code>rewardedi.reward</code>",id:"rewardedireward",children:[]},{value:"<code>rewardedi.dismiss</code>",id:"rewardedidismiss",children:[]},{value:"<code>rewardedi.impression</code>",id:"rewardediimpression",children:[]}]}],l={toc:c};function s(e){var r=e.components,t=Object(n.a)(e,["components"]);return Object(d.b)("wrapper",Object(a.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(d.b)("h2",{id:"usage"},"Usage"),Object(d.b)("pre",null,Object(d.b)("code",{parentName:"pre",className:"language-ts"},"import { AdMobPlus, RewardedInterstitialAd } from '@admob-plus/capacitor'\n\n(async () => {\n  await AdMobPlus.start()\n\n  const rewarded = new RewardedInterstitialAd({\n    adUnitId: 'ca-app-pub-3940256099942544/6978759866',\n  })\n  await rewarded.load()\n  await rewarded.show()\n})()\n")),Object(d.b)("h2",{id:"events"},"Events"),Object(d.b)("h3",{id:"rewardediload"},Object(d.b)("inlineCode",{parentName:"h3"},"rewardedi.load")),Object(d.b)("h3",{id:"rewardediloadfail"},Object(d.b)("inlineCode",{parentName:"h3"},"rewardedi.loadfail")),Object(d.b)("h3",{id:"rewardedishow"},Object(d.b)("inlineCode",{parentName:"h3"},"rewardedi.show")),Object(d.b)("h3",{id:"rewardedishowfail"},Object(d.b)("inlineCode",{parentName:"h3"},"rewardedi.showfail")),Object(d.b)("h3",{id:"rewardedireward"},Object(d.b)("inlineCode",{parentName:"h3"},"rewardedi.reward")),Object(d.b)("p",null,"User has earned reward."),Object(d.b)("pre",null,Object(d.b)("code",{parentName:"pre",className:"language-js"},'{\n  reward: {\n    amount: 1,\n    type: "Reward"\n  }\n}\n')),Object(d.b)("h3",{id:"rewardedidismiss"},Object(d.b)("inlineCode",{parentName:"h3"},"rewardedi.dismiss")),Object(d.b)("h3",{id:"rewardediimpression"},Object(d.b)("inlineCode",{parentName:"h3"},"rewardedi.impression")))}s.isMDXComponent=!0},164:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return w}));var a=t(0),n=t.n(a);function d(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){d(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},d=Object.keys(e);for(a=0;a<d.length;a++)t=d[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(a=0;a<d.length;a++)t=d[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=n.a.createContext({}),s=function(e){var r=n.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=s(e.components);return n.a.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},b=n.a.forwardRef((function(e,r){var t=e.components,a=e.mdxType,d=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(t),b=a,w=p["".concat(i,".").concat(b)]||p[b]||u[b]||d;return t?n.a.createElement(w,o(o({ref:r},l),{},{components:t})):n.a.createElement(w,o({ref:r},l))}));function w(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var d=t.length,i=new Array(d);i[0]=b;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<d;l++)i[l]=t[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);