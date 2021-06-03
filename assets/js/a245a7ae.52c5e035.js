(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[4185],{1080:function(e,r,a){"use strict";a.d(r,{Zo:function(){return l},kt:function(){return w}});var t=a(3289);function d(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function n(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?n(Object(a),!0).forEach((function(r){d(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function o(e,r){if(null==e)return{};var a,t,d=function(e,r){if(null==e)return{};var a,t,d={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],r.indexOf(a)>=0||(d[a]=e[a]);return d}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(d[a]=e[a])}return d}var c=t.createContext({}),s=function(e){var r=t.useContext(c),a=r;return e&&(a="function"==typeof e?e(r):i(i({},r),e)),a},l=function(e){var r=s(e.components);return t.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var a=e.components,d=e.mdxType,n=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=s(a),w=d,m=u["".concat(c,".").concat(w)]||u[w]||p[w]||n;return a?t.createElement(m,i(i({ref:r},l),{},{components:a})):t.createElement(m,i({ref:r},l))}));function w(e,r){var a=arguments,d=r&&r.mdxType;if("string"==typeof e||d){var n=a.length,i=new Array(n);i[0]=u;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o.mdxType="string"==typeof e?e:d,i[1]=o;for(var s=2;s<n;s++)i[s]=a[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},556:function(e,r,a){"use strict";a.r(r),a.d(r,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var t=a(379),d=a(8988),n=(a(3289),a(1080)),i=["components"],o={title:"Rewarded Ad",sidebar_label:"Rewarded"},c={unversionedId:"capacitor/ads/rewarded",id:"version-1.x/capacitor/ads/rewarded",isDocsHomePage:!1,title:"Rewarded Ad",description:"Usage",source:"@site/versioned_docs/version-1.x/capacitor/ads/rewarded.md",sourceDirName:"capacitor/ads",slug:"/capacitor/ads/rewarded",permalink:"/docs/1.x/capacitor/ads/rewarded",editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/versioned_docs/version-1.x/capacitor/ads/rewarded.md",version:"1.x",sidebar_label:"Rewarded",frontMatter:{title:"Rewarded Ad",sidebar_label:"Rewarded"},sidebar:"version-1.x/docs",previous:{title:"Interstitial Ad",permalink:"/docs/1.x/capacitor/ads/interstitial"},next:{title:"Rewarded Interstitial Ad",permalink:"/docs/1.x/capacitor/ads/rewarded-interstitial"}},s=[{value:"Usage",id:"usage",children:[]},{value:"Events",id:"events",children:[{value:"<code>rewarded.load</code>",id:"rewardedload",children:[]},{value:"<code>rewarded.loadfail</code>",id:"rewardedloadfail",children:[]},{value:"<code>rewarded.show</code>",id:"rewardedshow",children:[]},{value:"<code>rewarded.showfail</code>",id:"rewardedshowfail",children:[]},{value:"<code>rewarded.reward</code>",id:"rewardedreward",children:[]},{value:"<code>rewarded.dismiss</code>",id:"rewardeddismiss",children:[]},{value:"<code>rewarded.impression</code>",id:"rewardedimpression",children:[]}]}],l={toc:s};function p(e){var r=e.components,a=(0,d.Z)(e,i);return(0,n.kt)("wrapper",(0,t.Z)({},l,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"import { AdMobPlus, RewardedAd } from '@admob-plus/capacitor'\n\n(async () => {\n  await AdMobPlus.start()\n\n  const rewarded = new RewardedAd({\n    adUnitId: 'ca-app-pub-3940256099942544/5224354917',\n  })\n  await rewarded.load()\n  await rewarded.show()\n})()\n")),(0,n.kt)("h2",{id:"events"},"Events"),(0,n.kt)("h3",{id:"rewardedload"},(0,n.kt)("inlineCode",{parentName:"h3"},"rewarded.load")),(0,n.kt)("h3",{id:"rewardedloadfail"},(0,n.kt)("inlineCode",{parentName:"h3"},"rewarded.loadfail")),(0,n.kt)("h3",{id:"rewardedshow"},(0,n.kt)("inlineCode",{parentName:"h3"},"rewarded.show")),(0,n.kt)("h3",{id:"rewardedshowfail"},(0,n.kt)("inlineCode",{parentName:"h3"},"rewarded.showfail")),(0,n.kt)("h3",{id:"rewardedreward"},(0,n.kt)("inlineCode",{parentName:"h3"},"rewarded.reward")),(0,n.kt)("p",null,"User has earned reward."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'{\n  reward: {\n    amount: 10,\n    type: "coins"\n  }\n}\n')),(0,n.kt)("h3",{id:"rewardeddismiss"},(0,n.kt)("inlineCode",{parentName:"h3"},"rewarded.dismiss")),(0,n.kt)("h3",{id:"rewardedimpression"},(0,n.kt)("inlineCode",{parentName:"h3"},"rewarded.impression")))}p.isMDXComponent=!0}}]);