(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[9777],{1080:function(e,r,t){"use strict";t.d(r,{Zo:function(){return p},kt:function(){return f}});var n=t(3289);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=c(t),f=a,m=u["".concat(s,".").concat(f)]||u[f]||l[f]||o;return t?n.createElement(m,i(i({ref:r},p),{},{components:t})):n.createElement(m,i({ref:r},p))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var d={};for(var s in r)hasOwnProperty.call(r,s)&&(d[s]=r[s]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3487:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return i},metadata:function(){return d},toc:function(){return s},default:function(){return p}});var n=t(379),a=t(8988),o=(t(3289),t(1080)),i={title:"Rewarded Ads Server-side Verification"},d={unversionedId:"cordova/rewarded-ads-ssv",id:"cordova/rewarded-ads-ssv",isDocsHomePage:!1,title:"Rewarded Ads Server-side Verification",description:"Rewarded video SSV (server-side verification) callbacks provide an extra layer of protection against spoofing of client-side callbacks to reward users.",source:"@site/docs/cordova/rewarded-ads-ssv.md",sourceDirName:"cordova",slug:"/cordova/rewarded-ads-ssv",permalink:"/docs/cordova/rewarded-ads-ssv",editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/docs/cordova/rewarded-ads-ssv.md",version:"current",frontMatter:{title:"Rewarded Ads Server-side Verification"},sidebar:"docs",previous:{title:"Enabling Test Ads",permalink:"/docs/cordova/test-ads"},next:{title:"Targeting",permalink:"/docs/cordova/targeting"}},s=[],c={toc:s};function p(e){var r=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Rewarded video SSV (server-side verification) callbacks provide an extra layer of protection against spoofing of client-side callbacks to reward users."),(0,o.kt)("p",null,"For the server-side implementation, please refer to the official guide for ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/admob/android/rewarded-video-ssv"},"Android")," and ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/admob/ios/rewarded-video-ssv"},"iOS"),"."),(0,o.kt)("p",null,"To set server-side verification options for ",(0,o.kt)("a",{parentName:"p",href:"./ads/rewarded"},(0,o.kt)("inlineCode",{parentName:"a"},"RewardedAd")),","),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"{3-6}","{3-6}":!0},'new admob.RewardedAd({\n  adUnitId: \'ca-app-pub-xxx/yyy\',\n  serverSideVerification: {\n    customData: "SAMPLE_CUSTOM_DATA_STRING",\n    userId: "1234567",\n  }\n})\n')),(0,o.kt)("p",null,"To set server-side verification options for ",(0,o.kt)("a",{parentName:"p",href:"./ads/rewarded-interstitial"},(0,o.kt)("inlineCode",{parentName:"a"},"RewardedInterstitialAd")),","),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"{3-6}","{3-6}":!0},'new admob.RewardedInterstitialAd({\n  adUnitId: \'ca-app-pub-xxx/yyy\',\n  serverSideVerification: {\n    customData: "SAMPLE_CUSTOM_DATA_STRING",\n    userId: "1234567",\n  }\n})\n')))}p.isMDXComponent=!0}}]);