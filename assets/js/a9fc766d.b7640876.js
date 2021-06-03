(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[277],{1080:function(e,r,t){"use strict";t.d(r,{Zo:function(){return l},kt:function(){return w}});var a=t(3289);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function d(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?d(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},d=Object.keys(e);for(a=0;a<d.length;a++)t=d[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(a=0;a<d.length;a++)t=d[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),c=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=c(e.components);return a.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},p=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,d=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=c(t),w=n,m=p["".concat(s,".").concat(w)]||p[w]||u[w]||d;return t?a.createElement(m,i(i({ref:r},l),{},{components:t})):a.createElement(m,i({ref:r},l))}));function w(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var d=t.length,i=new Array(d);i[0]=p;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<d;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1696:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var a=t(379),n=t(8988),d=(t(3289),t(1080)),i=["components"],o={title:"Rewarded Ad",sidebar_label:"Rewarded"},s={unversionedId:"react-native/ads/rewarded",id:"version-1.x/react-native/ads/rewarded",isDocsHomePage:!1,title:"Rewarded Ad",description:"Usage",source:"@site/versioned_docs/version-1.x/react-native/ads/rewarded.md",sourceDirName:"react-native/ads",slug:"/react-native/ads/rewarded",permalink:"/docs/1.x/react-native/ads/rewarded",editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/versioned_docs/version-1.x/react-native/ads/rewarded.md",version:"1.x",sidebar_label:"Rewarded",frontMatter:{title:"Rewarded Ad",sidebar_label:"Rewarded"},sidebar:"version-1.x/docs",previous:{title:"Interstitial Ad",permalink:"/docs/1.x/react-native/ads/interstitial"},next:{title:"Rewarded Interstitial Ad",permalink:"/docs/1.x/react-native/ads/rewarded-interstitial"}},c=[{value:"Usage",id:"usage",children:[]},{value:"Events",id:"events",children:[{value:"<code>rewarded.load</code>",id:"rewardedload",children:[]},{value:"<code>rewarded.loadfail</code>",id:"rewardedloadfail",children:[]},{value:"<code>rewarded.show</code>",id:"rewardedshow",children:[]},{value:"<code>rewarded.showfail</code>",id:"rewardedshowfail",children:[]},{value:"<code>rewarded.reward</code>",id:"rewardedreward",children:[]},{value:"<code>rewarded.dismiss</code>",id:"rewardeddismiss",children:[]},{value:"<code>rewarded.impression</code>",id:"rewardedimpression",children:[]}]}],l={toc:c};function u(e){var r=e.components,t=(0,n.Z)(e,i);return(0,d.kt)("wrapper",(0,a.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,d.kt)("h2",{id:"usage"},"Usage"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-ts"},"import React from 'react'\nimport AdMob, { RewardedAd } from '@admob-plus/react-native'\n\nReact.useEffect(async () => {\n  await AdMobPlus.start()\n\n  const rewarded = new RewardedAd({\n    adUnitId: 'ca-app-pub-3940256099942544/5224354917',\n  })\n  await rewarded.load()\n  await rewarded.show()\n}, [])\n")),(0,d.kt)("h2",{id:"events"},"Events"),(0,d.kt)("h3",{id:"rewardedload"},(0,d.kt)("inlineCode",{parentName:"h3"},"rewarded.load")),(0,d.kt)("h3",{id:"rewardedloadfail"},(0,d.kt)("inlineCode",{parentName:"h3"},"rewarded.loadfail")),(0,d.kt)("h3",{id:"rewardedshow"},(0,d.kt)("inlineCode",{parentName:"h3"},"rewarded.show")),(0,d.kt)("h3",{id:"rewardedshowfail"},(0,d.kt)("inlineCode",{parentName:"h3"},"rewarded.showfail")),(0,d.kt)("h3",{id:"rewardedreward"},(0,d.kt)("inlineCode",{parentName:"h3"},"rewarded.reward")),(0,d.kt)("p",null,"User has earned reward."),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-js"},'{\n  reward: {\n    amount: 10,\n    type: "coins"\n  }\n}\n')),(0,d.kt)("h3",{id:"rewardeddismiss"},(0,d.kt)("inlineCode",{parentName:"h3"},"rewarded.dismiss")),(0,d.kt)("h3",{id:"rewardedimpression"},(0,d.kt)("inlineCode",{parentName:"h3"},"rewarded.impression")))}u.isMDXComponent=!0}}]);