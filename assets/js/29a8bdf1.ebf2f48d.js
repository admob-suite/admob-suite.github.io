(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{151:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){d(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},d=Object.keys(e);for(r=0;r<d.length;r++)a=d[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(r=0;r<d.length;r++)a=d[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),o=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},c=function(e){var t=o(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,d=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=o(a),u=r,m=c["".concat(i,".").concat(u)]||c[u]||p[u]||d;return a?n.a.createElement(m,b(b({ref:t},s),{},{components:a})):n.a.createElement(m,b({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var d=a.length,i=new Array(d);i[0]=u;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:r,i[1]=b;for(var s=2;s<d;s++)i[s]=a[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},88:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return o}));var r=a(3),n=a(7),d=(a(0),a(151)),i={id:"events",title:"Enumeration: Events",sidebar_label:"Events",custom_edit_url:null,hide_title:!0},b={unversionedId:"cordova/api/enums/events",id:"cordova/api/enums/events",isDocsHomePage:!1,title:"Enumeration: Events",description:"Enumeration: Events",source:"@site/docs/cordova/api/enums/events.md",slug:"/cordova/api/enums/events",permalink:"/docs/cordova/api/enums/events",editUrl:null,version:"current",sidebar_label:"Events",sidebar:"docs",previous:{title:"Enumeration: ChildDirectedTreatmentTag",permalink:"/docs/cordova/api/enums/childdirectedtreatmenttag"},next:{title:"Enumeration: MaxAdContentRating",permalink:"/docs/cordova/api/enums/maxadcontentrating"}},l=[{value:"Enumeration members",id:"enumeration-members",children:[{value:"bannerClick",id:"bannerclick",children:[]},{value:"bannerClose",id:"bannerclose",children:[]},{value:"bannerImpression",id:"bannerimpression",children:[]},{value:"bannerLoad",id:"bannerload",children:[]},{value:"bannerLoadFail",id:"bannerloadfail",children:[]},{value:"bannerOpen",id:"banneropen",children:[]},{value:"interstitialDismiss",id:"interstitialdismiss",children:[]},{value:"interstitialLoad",id:"interstitialload",children:[]},{value:"interstitialLoadFail",id:"interstitialloadfail",children:[]},{value:"interstitialShow",id:"interstitialshow",children:[]},{value:"interstitialShowFail",id:"interstitialshowfail",children:[]},{value:"ready",id:"ready",children:[]},{value:"rewardedDismiss",id:"rewardeddismiss",children:[]},{value:"rewardedInterstitialDismiss",id:"rewardedinterstitialdismiss",children:[]},{value:"rewardedInterstitialLoad",id:"rewardedinterstitialload",children:[]},{value:"rewardedInterstitialLoadFail",id:"rewardedinterstitialloadfail",children:[]},{value:"rewardedInterstitialReward",id:"rewardedinterstitialreward",children:[]},{value:"rewardedInterstitialShow",id:"rewardedinterstitialshow",children:[]},{value:"rewardedInterstitialShowFail",id:"rewardedinterstitialshowfail",children:[]},{value:"rewardedLoad",id:"rewardedload",children:[]},{value:"rewardedLoadFail",id:"rewardedloadfail",children:[]},{value:"rewardedReward",id:"rewardedreward",children:[]},{value:"rewardedShow",id:"rewardedshow",children:[]},{value:"rewardedShowFail",id:"rewardedshowfail",children:[]}]}],s={toc:l};function o(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(d.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(d.b)("h1",{id:"enumeration-events"},"Enumeration: Events"),Object(d.b)("h2",{id:"enumeration-members"},"Enumeration members"),Object(d.b)("h3",{id:"bannerclick"},"bannerClick"),Object(d.b)("p",null,"\u2022 ",Object(d.b)("strong",{parentName:"p"},"bannerClick"),': = "admob.banner.click"'),Object(d.b)("p",null,"Defined in: ",Object(d.b)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/d612617/packages/cordova/ts/generated.ts#L23"},"generated.ts:23")),Object(d.b)("hr",null),Object(d.b)("h3",{id:"bannerclose"},"bannerClose"),Object(d.b)("p",null,"\u2022 ",Object(d.b)("strong",{parentName:"p"},"bannerClose"),': = "admob.banner.close"'),Object(d.b)("p",null,"Defined in: ",Object(d.b)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/d612617/packages/cordova/ts/generated.ts#L24"},"generated.ts:24")),Object(d.b)("hr",null),Object(d.b)("h3",{id:"bannerimpression"},"bannerImpression"),Object(d.b)("p",null,"\u2022 ",Object(d.b)("strong",{parentName:"p"},"bannerImpression"),': = "admob.banner.impression"'),Object(d.b)("p",null,"Defined in: ",Object(d.b)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/d612617/packages/cordova/ts/generated.ts#L25"},"generated.ts:25")),Object(d.b)("hr",null),Object(d.b)("h3",{id:"bannerload"},"bannerLoad"),Object(d.b)("p",null,"\u2022 ",Object(d.b)("strong",{parentName:"p"},"bannerLoad"),': = "admob.banner.load"'),Object(d.b)("p",null,"Defined in: ",Object(d.b)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/d612617/packages/cordova/ts/generated.ts#L26"},"generated.ts:26")),Object(d.b)("hr",null),Object(d.b)("h3",{id:"bannerloadfail"},"bannerLoadFail"),Object(d.b)("p",null,"\u2022 ",Object(d.b)("strong",{parentName:"p"},"bannerLoadFail"),': = "admob.banner.loadFail"'),Object(d.b)("p",null,"Defined in: ",Object(d.b)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/d612617/packages/cordova/ts/generated.ts#L27"},"generated.ts:27")),Object(d.b)("hr",null),Object(d.b)("h3",{id:"banneropen"},"bannerOpen"),Object(d.b)("p",null,"\u2022 ",Object(d.b)("strong",{parentName:"p"},"bannerOpen"),': = "admob.banner.open"'),Object(d.b)("p",null,"Defined in: ",Object(d.b)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/d612617/packages/cordova/ts/generated.ts#L28"},"generated.ts:28")),Object(d.b)("hr",null),Object(d.b)("h3",{id:"interstitialdismiss"},"interstitialDismiss"),Object(d.b)("p",null,"\u2022 ",Object(d.b)("strong",{parentName:"p"},"interstitialDismiss"),': = "admob.interstitial.dismiss"'),Object(d.b)("p",null,"Defined in: ",Object(d.b)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/d612617/packages/cordova/ts/generated.ts#L29"},"generated.ts:29")),Object(d.b)("hr",null),Object(d.b)("h3",{id:"interstitialload"},"interstitialLoad"),Object(d.b)("p",null,"\u2022 ",Object(d.b)("strong",{parentName:"p"},"interstitialLoad"),': = "admob.interstitial.load"'),Object(d.b)("p",null,"Defined in: ",Object(d.b)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/d612617/packages/cordova/ts/generated.ts#L30"},"generated.ts:30")),Object(d.b)("hr",null),Object(d.b)("h3",{id:"interstitialloadfail"},"interstitialLoadFail"),Object(d.b)("p",null,"\u2022 ",Object(d.b)("strong",{parentName:"p"},"interstitialLoadFail"),': = "admob.interstitial.loadFail"'),Object(d.b)("p",null,"Defined in: ",Object(d.b)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/d612617/packages/cordova/ts/generated.ts#L31"},"generated.ts:31")),Object(d.b)("hr",null),Object(d.b)("h3",{id:"interstitialshow"},"interstitialShow"),Object(d.b)("p",null,"\u2022 ",Object(d.b)("strong",{parentName:"p"},"interstitialShow"),': = "admob.interstitial.show"'),Object(d.b)("p",null,"Defined in: ",Object(d.b)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/d612617/packages/cordova/ts/generated.ts#L32"},"generated.ts:32")),Object(d.b)("hr",null),Object(d.b)("h3",{id:"interstitialshowfail"},"interstitialShowFail"),Object(d.b)("p",null,"\u2022 ",Object(d.b)("strong",{parentName:"p"},"interstitialShowFail"),': = "admob.interstitial.showFail"'),Object(d.b)("p",null,"Defined in: ",Object(d.b)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/d612617/packages/cordova/ts/generated.ts#L33"},"generated.ts:33")),Object(d.b)("hr",null),Object(d.b)("h3",{id:"ready"},"ready"),Object(d.b)("p",null,"\u2022 ",Object(d.b)("strong",{parentName:"p"},"ready"),': = "admob.ready"'),Object(d.b)("p",null,"Defined in: ",Object(d.b)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/d612617/packages/cordova/ts/generated.ts#L34"},"generated.ts:34")),Object(d.b)("hr",null),Object(d.b)("h3",{id:"rewardeddismiss"},"rewardedDismiss"),Object(d.b)("p",null,"\u2022 ",Object(d.b)("strong",{parentName:"p"},"rewardedDismiss"),': = "admob.rewarded.dismiss"'),Object(d.b)("p",null,"Defined in: ",Object(d.b)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/d612617/packages/cordova/ts/generated.ts#L35"},"generated.ts:35")),Object(d.b)("hr",null),Object(d.b)("h3",{id:"rewardedinterstitialdismiss"},"rewardedInterstitialDismiss"),Object(d.b)("p",null,"\u2022 ",Object(d.b)("strong",{parentName:"p"},"rewardedInterstitialDismiss"),': = "admob.rewardedInterstitial.dismiss"'),Object(d.b)("p",null,"Defined in: ",Object(d.b)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/d612617/packages/cordova/ts/generated.ts#L36"},"generated.ts:36")),Object(d.b)("hr",null),Object(d.b)("h3",{id:"rewardedinterstitialload"},"rewardedInterstitialLoad"),Object(d.b)("p",null,"\u2022 ",Object(d.b)("strong",{parentName:"p"},"rewardedInterstitialLoad"),': = "admob.rewardedInterstitial.load"'),Object(d.b)("p",null,"Defined in: ",Object(d.b)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/d612617/packages/cordova/ts/generated.ts#L37"},"generated.ts:37")),Object(d.b)("hr",null),Object(d.b)("h3",{id:"rewardedinterstitialloadfail"},"rewardedInterstitialLoadFail"),Object(d.b)("p",null,"\u2022 ",Object(d.b)("strong",{parentName:"p"},"rewardedInterstitialLoadFail"),': = "admob.rewardedInterstitial.loadFail"'),Object(d.b)("p",null,"Defined in: ",Object(d.b)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/d612617/packages/cordova/ts/generated.ts#L38"},"generated.ts:38")),Object(d.b)("hr",null),Object(d.b)("h3",{id:"rewardedinterstitialreward"},"rewardedInterstitialReward"),Object(d.b)("p",null,"\u2022 ",Object(d.b)("strong",{parentName:"p"},"rewardedInterstitialReward"),': = "admob.rewardedInterstitial.reward"'),Object(d.b)("p",null,"Defined in: ",Object(d.b)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/d612617/packages/cordova/ts/generated.ts#L39"},"generated.ts:39")),Object(d.b)("hr",null),Object(d.b)("h3",{id:"rewardedinterstitialshow"},"rewardedInterstitialShow"),Object(d.b)("p",null,"\u2022 ",Object(d.b)("strong",{parentName:"p"},"rewardedInterstitialShow"),': = "admob.rewardedInterstitial.show"'),Object(d.b)("p",null,"Defined in: ",Object(d.b)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/d612617/packages/cordova/ts/generated.ts#L40"},"generated.ts:40")),Object(d.b)("hr",null),Object(d.b)("h3",{id:"rewardedinterstitialshowfail"},"rewardedInterstitialShowFail"),Object(d.b)("p",null,"\u2022 ",Object(d.b)("strong",{parentName:"p"},"rewardedInterstitialShowFail"),': = "admob.rewardedInterstitial.showFail"'),Object(d.b)("p",null,"Defined in: ",Object(d.b)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/d612617/packages/cordova/ts/generated.ts#L41"},"generated.ts:41")),Object(d.b)("hr",null),Object(d.b)("h3",{id:"rewardedload"},"rewardedLoad"),Object(d.b)("p",null,"\u2022 ",Object(d.b)("strong",{parentName:"p"},"rewardedLoad"),': = "admob.rewarded.load"'),Object(d.b)("p",null,"Defined in: ",Object(d.b)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/d612617/packages/cordova/ts/generated.ts#L42"},"generated.ts:42")),Object(d.b)("hr",null),Object(d.b)("h3",{id:"rewardedloadfail"},"rewardedLoadFail"),Object(d.b)("p",null,"\u2022 ",Object(d.b)("strong",{parentName:"p"},"rewardedLoadFail"),': = "admob.rewarded.loadFail"'),Object(d.b)("p",null,"Defined in: ",Object(d.b)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/d612617/packages/cordova/ts/generated.ts#L43"},"generated.ts:43")),Object(d.b)("hr",null),Object(d.b)("h3",{id:"rewardedreward"},"rewardedReward"),Object(d.b)("p",null,"\u2022 ",Object(d.b)("strong",{parentName:"p"},"rewardedReward"),': = "admob.rewarded.reward"'),Object(d.b)("p",null,"Defined in: ",Object(d.b)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/d612617/packages/cordova/ts/generated.ts#L44"},"generated.ts:44")),Object(d.b)("hr",null),Object(d.b)("h3",{id:"rewardedshow"},"rewardedShow"),Object(d.b)("p",null,"\u2022 ",Object(d.b)("strong",{parentName:"p"},"rewardedShow"),': = "admob.rewarded.show"'),Object(d.b)("p",null,"Defined in: ",Object(d.b)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/d612617/packages/cordova/ts/generated.ts#L45"},"generated.ts:45")),Object(d.b)("hr",null),Object(d.b)("h3",{id:"rewardedshowfail"},"rewardedShowFail"),Object(d.b)("p",null,"\u2022 ",Object(d.b)("strong",{parentName:"p"},"rewardedShowFail"),': = "admob.rewarded.showFail"'),Object(d.b)("p",null,"Defined in: ",Object(d.b)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/d612617/packages/cordova/ts/generated.ts#L46"},"generated.ts:46")))}o.isMDXComponent=!0}}]);