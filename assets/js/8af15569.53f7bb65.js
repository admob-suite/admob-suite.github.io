(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[1718],{1080:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(3289);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),u=r,k=c["".concat(o,".").concat(u)]||c[u]||m[u]||i;return n?a.createElement(k,p(p({ref:t},d),{},{components:n})):a.createElement(k,p({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var s=2;s<i;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4037:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return s},default:function(){return m}});var a=n(379),r=n(8988),i=(n(3289),n(1080)),p=["components"],l={id:"admob",title:"Class: AdMob",sidebar_label:"AdMob",sidebar_position:0,custom_edit_url:null},o={unversionedId:"ionic/api/classes/admob",id:"ionic/api/classes/admob",isDocsHomePage:!1,title:"Class: AdMob",description:"Hierarchy",source:"@site/docs/ionic/api/classes/admob.md",sourceDirName:"ionic/api/classes",slug:"/ionic/api/classes/admob",permalink:"/docs/ionic/api/classes/admob",editUrl:null,version:"current",sidebar_label:"AdMob",sidebarPosition:0,frontMatter:{id:"admob",title:"Class: AdMob",sidebar_label:"AdMob",sidebar_position:0,custom_edit_url:null},sidebar:"docs",previous:{title:"Enumeration: TrackingAuthorizationStatus",permalink:"/docs/ionic/api/enums/trackingauthorizationstatus"},next:{title:"Class: BannerAd",permalink:"/docs/ionic/api/classes/bannerad"}},s=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Implements",id:"implements",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"BannerAd",id:"bannerad",children:[]},{value:"InterstitialAd",id:"interstitialad",children:[]},{value:"RewardedAd",id:"rewardedad",children:[]},{value:"RewardedInterstitialAd",id:"rewardedinterstitialad",children:[]},{value:"platforms",id:"platforms",children:[]},{value:"plugin",id:"plugin",children:[]},{value:"pluginName",id:"pluginname",children:[]},{value:"pluginRef",id:"pluginref",children:[]},{value:"repo",id:"repo",children:[]}]},{value:"Accessors",id:"accessors",children:[{value:"admob",id:"admob",children:[]}]},{value:"Methods",id:"methods",children:[{value:"configRequest",id:"configrequest",children:[]},{value:"on",id:"on",children:[]},{value:"requestTrackingAuthorization",id:"requesttrackingauthorization",children:[]},{value:"setAppMuted",id:"setappmuted",children:[]},{value:"setAppVolume",id:"setappvolume",children:[]},{value:"start",id:"start",children:[]}]}],d={toc:s};function m(e){var t=e.components,n=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"IonicNativePlugin")),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},"AdMob")))),(0,i.kt)("h2",{id:"implements"},"Implements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Omit"),"<IAdMob, ",(0,i.kt)("inlineCode",{parentName:"li"},'"AppOpenAd"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"li"},'"BannerAd"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"li"},'"Events"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"li"},'"InterstitialAd"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"li"},'"RewardedAd"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"li"},'"RewardedInterstitialAd"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"li"},'"TrackingAuthorizationStatus"'),">")),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"+"," ",(0,i.kt)("strong",{parentName:"p"},"new AdMob"),"(): ",(0,i.kt)("a",{parentName:"p",href:"/docs/ionic/api/classes/admob"},(0,i.kt)("em",{parentName:"a"},"AdMob"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/ionic/api/classes/admob"},(0,i.kt)("em",{parentName:"a"},"AdMob"))),(0,i.kt)("p",null,"Inherited from: IonicNativePlugin.constructor"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"bannerad"},"BannerAd"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"BannerAd"),": ",(0,i.kt)("em",{parentName:"p"},"typeof")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/ionic/api/classes/bannerad"},(0,i.kt)("em",{parentName:"a"},"BannerAd"))),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/95c0cc1/packages/ionic/src/ngx/index.ts#L189"},"ionic/src/ngx/index.ts:189")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"interstitialad"},"InterstitialAd"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"InterstitialAd"),": ",(0,i.kt)("em",{parentName:"p"},"typeof")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/ionic/api/classes/interstitialad"},(0,i.kt)("em",{parentName:"a"},"InterstitialAd"))),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/95c0cc1/packages/ionic/src/ngx/index.ts#L190"},"ionic/src/ngx/index.ts:190")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"rewardedad"},"RewardedAd"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"RewardedAd"),": ",(0,i.kt)("em",{parentName:"p"},"typeof")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/ionic/api/classes/rewardedad"},(0,i.kt)("em",{parentName:"a"},"RewardedAd"))),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/95c0cc1/packages/ionic/src/ngx/index.ts#L191"},"ionic/src/ngx/index.ts:191")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"rewardedinterstitialad"},"RewardedInterstitialAd"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"RewardedInterstitialAd"),": ",(0,i.kt)("em",{parentName:"p"},"typeof")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/ionic/api/classes/rewardedinterstitialad"},(0,i.kt)("em",{parentName:"a"},"RewardedInterstitialAd"))),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/95c0cc1/packages/ionic/src/ngx/index.ts#L192"},"ionic/src/ngx/index.ts:192")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"platforms"},"platforms"),(0,i.kt)("p",null,"\u25aa ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"platforms"),": ",(0,i.kt)("em",{parentName:"p"},"string"),"[]"),(0,i.kt)("p",null,"Overrides: IonicNativePlugin.platforms"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/95c0cc1/packages/ionic/src/ngx/index.ts#L183"},"ionic/src/ngx/index.ts:183")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"plugin"},"plugin"),(0,i.kt)("p",null,"\u25aa ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"plugin"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Overrides: IonicNativePlugin.plugin"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/95c0cc1/packages/ionic/src/ngx/index.ts#L184"},"ionic/src/ngx/index.ts:184")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"pluginname"},"pluginName"),(0,i.kt)("p",null,"\u25aa ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"pluginName"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Overrides: IonicNativePlugin.pluginName"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/95c0cc1/packages/ionic/src/ngx/index.ts#L185"},"ionic/src/ngx/index.ts:185")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"pluginref"},"pluginRef"),(0,i.kt)("p",null,"\u25aa ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"pluginRef"),": ",(0,i.kt)("em",{parentName:"p"},"string"),"= 'admob'"),(0,i.kt)("p",null,"Overrides: IonicNativePlugin.pluginRef"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/95c0cc1/packages/ionic/src/ngx/index.ts#L186"},"ionic/src/ngx/index.ts:186")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"repo"},"repo"),(0,i.kt)("p",null,"\u25aa ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"repo"),": ",(0,i.kt)("em",{parentName:"p"},"string"),"= '",(0,i.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus'"},"https://github.com/admob-plus/admob-plus'")),(0,i.kt)("p",null,"Overrides: IonicNativePlugin.repo"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/95c0cc1/packages/ionic/src/ngx/index.ts#L187"},"ionic/src/ngx/index.ts:187")),(0,i.kt)("h2",{id:"accessors"},"Accessors"),(0,i.kt)("h3",{id:"admob"},"admob"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," get ",(0,i.kt)("strong",{parentName:"p"},"admob"),"(): ",(0,i.kt)("em",{parentName:"p"},"AdMob")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"AdMob")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/95c0cc1/packages/ionic/src/ngx/index.ts#L194"},"ionic/src/ngx/index.ts:194")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"configrequest"},"configRequest"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"configRequest"),"(...",(0,i.kt)("inlineCode",{parentName:"p"},"opts"),": ","[requestConfig: RequestConfig]","): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<unknown",">"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"...opts")),(0,i.kt)("td",{parentName:"tr",align:"left"},"[requestConfig: RequestConfig]")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<unknown",">"),(0,i.kt)("p",null,"Implementation of: Omit.configRequest"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/95c0cc1/packages/ionic/src/ngx/index.ts#L198"},"ionic/src/ngx/index.ts:198")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"on"},"on"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"on"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"event"),": ",(0,i.kt)("em",{parentName:"p"},"string"),"): ",(0,i.kt)("em",{parentName:"p"},"Observable"),"<any",">"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"event")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Observable"),"<any",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/95c0cc1/packages/ionic/src/ngx/index.ts#L220"},"ionic/src/ngx/index.ts:220")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"requesttrackingauthorization"},"requestTrackingAuthorization"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"requestTrackingAuthorization"),"(): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"false")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/ionic/api/enums/trackingauthorizationstatus"},(0,i.kt)("em",{parentName:"a"},"TrackingAuthorizationStatus")),">"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"false")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/ionic/api/enums/trackingauthorizationstatus"},(0,i.kt)("em",{parentName:"a"},"TrackingAuthorizationStatus")),">"),(0,i.kt)("p",null,"Implementation of: Omit.requestTrackingAuthorization"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/95c0cc1/packages/ionic/src/ngx/index.ts#L216"},"ionic/src/ngx/index.ts:216")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setappmuted"},"setAppMuted"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"setAppMuted"),"(...",(0,i.kt)("inlineCode",{parentName:"p"},"opts"),": ","[value: boolean]","): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<unknown",">"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"...opts")),(0,i.kt)("td",{parentName:"tr",align:"left"},"[value: boolean]")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<unknown",">"),(0,i.kt)("p",null,"Implementation of: Omit.setAppMuted"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/95c0cc1/packages/ionic/src/ngx/index.ts#L208"},"ionic/src/ngx/index.ts:208")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setappvolume"},"setAppVolume"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"setAppVolume"),"(...",(0,i.kt)("inlineCode",{parentName:"p"},"opts"),": ","[value: number]","): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<unknown",">"),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"...opts")),(0,i.kt)("td",{parentName:"tr",align:"left"},"[value: number]")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<unknown",">"),(0,i.kt)("p",null,"Implementation of: Omit.setAppVolume"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/95c0cc1/packages/ionic/src/ngx/index.ts#L212"},"ionic/src/ngx/index.ts:212")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"start"},"start"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"start"),"(): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"version"),": ",(0,i.kt)("em",{parentName:"p"},"string"),"  }",">"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"version"),": ",(0,i.kt)("em",{parentName:"p"},"string"),"  }",">"),(0,i.kt)("p",null,"Implementation of: Omit.start"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/admob-plus/admob-plus/blob/95c0cc1/packages/ionic/src/ngx/index.ts#L204"},"ionic/src/ngx/index.ts:204")))}m.isMDXComponent=!0}}]);