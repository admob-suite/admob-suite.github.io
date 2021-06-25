(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[1718],{1080:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return k}});var i=n(3289);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=i.createContext({}),d=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return i.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=d(n),k=a,c=u["".concat(o,".").concat(k)]||u[k]||m[k]||r;return n?i.createElement(c,l(l({ref:t},s),{},{components:n})):i.createElement(c,l({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var d=2;d<r;d++)l[d]=n[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1362:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return s},default:function(){return u}});var i=n(730),a=n(1879),r=(n(3289),n(1080)),l=["components"],p={id:"admob",title:"Class: AdMob",sidebar_label:"AdMob",sidebar_position:0,custom_edit_url:null},o=void 0,d={unversionedId:"ionic/api/classes/admob",id:"ionic/api/classes/admob",isDocsHomePage:!1,title:"Class: AdMob",description:"Hierarchy",source:"@site/docs/ionic/api/classes/admob.md",sourceDirName:"ionic/api/classes",slug:"/ionic/api/classes/admob",permalink:"/docs/ionic/api/classes/admob",editUrl:null,version:"current",sidebarPosition:0,frontMatter:{id:"admob",title:"Class: AdMob",sidebar_label:"AdMob",sidebar_position:0,custom_edit_url:null},sidebar:"docs",previous:{title:"TrackingAuthorizationStatus",permalink:"/docs/ionic/api/enums/trackingauthorizationstatus"},next:{title:"BannerAd",permalink:"/docs/ionic/api/classes/bannerad"}},s=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Implements",id:"implements",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"BannerAd",id:"bannerad",children:[]},{value:"InterstitialAd",id:"interstitialad",children:[]},{value:"RewardedAd",id:"rewardedad",children:[]},{value:"RewardedInterstitialAd",id:"rewardedinterstitialad",children:[]},{value:"platforms",id:"platforms",children:[]},{value:"plugin",id:"plugin",children:[]},{value:"pluginName",id:"pluginname",children:[]},{value:"pluginRef",id:"pluginref",children:[]},{value:"repo",id:"repo",children:[]}]},{value:"Accessors",id:"accessors",children:[{value:"admob",id:"admob",children:[]}]},{value:"Methods",id:"methods",children:[{value:"configRequest",id:"configrequest",children:[]},{value:"on",id:"on",children:[]},{value:"requestTrackingAuthorization",id:"requesttrackingauthorization",children:[]},{value:"setAppMuted",id:"setappmuted",children:[]},{value:"setAppVolume",id:"setappvolume",children:[]},{value:"start",id:"start",children:[]}]}],m={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"IonicNativePlugin")),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"AdMob"))))),(0,r.kt)("h2",{id:"implements"},"Implements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Omit"),"<",(0,r.kt)("inlineCode",{parentName:"li"},"IAdMob"),", ",(0,r.kt)("inlineCode",{parentName:"li"},'"AppOpenAd"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"li"},'"BannerAd"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"li"},'"Events"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"li"},'"InterstitialAd"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"li"},'"NativeAd"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"li"},'"RewardedAd"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"li"},'"RewardedInterstitialAd"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"li"},'"TrackingAuthorizationStatus"'),">")),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new AdMob"),"()"),(0,r.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,r.kt)("p",null,"IonicNativePlugin.constructor"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"bannerad"},"BannerAd"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"BannerAd"),": typeof ",(0,r.kt)("a",{parentName:"p",href:"/docs/ionic/api/classes/bannerad"},(0,r.kt)("inlineCode",{parentName:"a"},"BannerAd"))),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/4b88ac5/packages/ionic/src/ngx/index.ts#L190"},"ionic/src/ngx/index.ts:190")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"interstitialad"},"InterstitialAd"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"InterstitialAd"),": typeof ",(0,r.kt)("a",{parentName:"p",href:"/docs/ionic/api/classes/interstitialad"},(0,r.kt)("inlineCode",{parentName:"a"},"InterstitialAd"))),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/4b88ac5/packages/ionic/src/ngx/index.ts#L191"},"ionic/src/ngx/index.ts:191")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"rewardedad"},"RewardedAd"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"RewardedAd"),": typeof ",(0,r.kt)("a",{parentName:"p",href:"/docs/ionic/api/classes/rewardedad"},(0,r.kt)("inlineCode",{parentName:"a"},"RewardedAd"))),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/4b88ac5/packages/ionic/src/ngx/index.ts#L192"},"ionic/src/ngx/index.ts:192")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"rewardedinterstitialad"},"RewardedInterstitialAd"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"RewardedInterstitialAd"),": typeof ",(0,r.kt)("a",{parentName:"p",href:"/docs/ionic/api/classes/rewardedinterstitialad"},(0,r.kt)("inlineCode",{parentName:"a"},"RewardedInterstitialAd"))),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/4b88ac5/packages/ionic/src/ngx/index.ts#L193"},"ionic/src/ngx/index.ts:193")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"platforms"},"platforms"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"platforms"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,r.kt)("h4",{id:"overrides"},"Overrides"),(0,r.kt)("p",null,"IonicNativePlugin.platforms"),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/4b88ac5/packages/ionic/src/ngx/index.ts#L184"},"ionic/src/ngx/index.ts:184")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"plugin"},"plugin"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"plugin"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"overrides-1"},"Overrides"),(0,r.kt)("p",null,"IonicNativePlugin.plugin"),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/4b88ac5/packages/ionic/src/ngx/index.ts#L185"},"ionic/src/ngx/index.ts:185")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"pluginname"},"pluginName"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"pluginName"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"overrides-2"},"Overrides"),(0,r.kt)("p",null,"IonicNativePlugin.pluginName"),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/4b88ac5/packages/ionic/src/ngx/index.ts#L186"},"ionic/src/ngx/index.ts:186")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"pluginref"},"pluginRef"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"pluginRef"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"'admob'")),(0,r.kt)("h4",{id:"overrides-3"},"Overrides"),(0,r.kt)("p",null,"IonicNativePlugin.pluginRef"),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/4b88ac5/packages/ionic/src/ngx/index.ts#L187"},"ionic/src/ngx/index.ts:187")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"repo"},"repo"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"repo"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"'https://github.com/admob-plus/admob-plus'")),(0,r.kt)("h4",{id:"overrides-4"},"Overrides"),(0,r.kt)("p",null,"IonicNativePlugin.repo"),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/4b88ac5/packages/ionic/src/ngx/index.ts#L188"},"ionic/src/ngx/index.ts:188")),(0,r.kt)("h2",{id:"accessors"},"Accessors"),(0,r.kt)("h3",{id:"admob"},"admob"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"admob"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"AdMob")),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"AdMob")),(0,r.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/4b88ac5/packages/ionic/src/ngx/index.ts#L195"},"ionic/src/ngx/index.ts:195")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"configrequest"},"configRequest"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"configRequest"),"(...",(0,r.kt)("inlineCode",{parentName:"p"},"opts"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),">"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"...opts")),(0,r.kt)("td",{parentName:"tr",align:"left"},"[requestConfig: RequestConfig]")))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),">"),(0,r.kt)("h4",{id:"implementation-of"},"Implementation of"),(0,r.kt)("p",null,"Omit.configRequest"),(0,r.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/4b88ac5/packages/ionic/src/ngx/index.ts#L199"},"ionic/src/ngx/index.ts:199")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"on"},"on"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"on"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"event"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Observable"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"event")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Observable"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,r.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/4b88ac5/packages/ionic/src/ngx/index.ts#L221"},"ionic/src/ngx/index.ts:221")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"requesttrackingauthorization"},"requestTrackingAuthorization"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"requestTrackingAuthorization"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"false")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/docs/ionic/api/enums/trackingauthorizationstatus"},(0,r.kt)("inlineCode",{parentName:"a"},"TrackingAuthorizationStatus")),">"),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"false")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/docs/ionic/api/enums/trackingauthorizationstatus"},(0,r.kt)("inlineCode",{parentName:"a"},"TrackingAuthorizationStatus")),">"),(0,r.kt)("h4",{id:"implementation-of-1"},"Implementation of"),(0,r.kt)("p",null,"Omit.requestTrackingAuthorization"),(0,r.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/4b88ac5/packages/ionic/src/ngx/index.ts#L217"},"ionic/src/ngx/index.ts:217")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"setappmuted"},"setAppMuted"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"setAppMuted"),"(...",(0,r.kt)("inlineCode",{parentName:"p"},"opts"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),">"),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"...opts")),(0,r.kt)("td",{parentName:"tr",align:"left"},"[value: boolean]")))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),">"),(0,r.kt)("h4",{id:"implementation-of-2"},"Implementation of"),(0,r.kt)("p",null,"Omit.setAppMuted"),(0,r.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/4b88ac5/packages/ionic/src/ngx/index.ts#L209"},"ionic/src/ngx/index.ts:209")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"setappvolume"},"setAppVolume"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"setAppVolume"),"(...",(0,r.kt)("inlineCode",{parentName:"p"},"opts"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),">"),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"...opts")),(0,r.kt)("td",{parentName:"tr",align:"left"},"[value: number]")))),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),">"),(0,r.kt)("h4",{id:"implementation-of-3"},"Implementation of"),(0,r.kt)("p",null,"Omit.setAppVolume"),(0,r.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/4b88ac5/packages/ionic/src/ngx/index.ts#L213"},"ionic/src/ngx/index.ts:213")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"start"},"start"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"start"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Object"),">"),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Object"),">"),(0,r.kt)("h4",{id:"implementation-of-4"},"Implementation of"),(0,r.kt)("p",null,"Omit.start"),(0,r.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/4b88ac5/packages/ionic/src/ngx/index.ts#L205"},"ionic/src/ngx/index.ts:205")))}u.isMDXComponent=!0}}]);