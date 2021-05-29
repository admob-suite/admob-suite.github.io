(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[908],{1080:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return h}});var a=t(3289);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=s(t),h=r,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||i;return t?a.createElement(m,o(o({ref:n},p),{},{components:t})):a.createElement(m,o({ref:n},p))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d.mdxType="string"==typeof e?e:r,o[1]=d;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3374:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return d},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var a=t(379),r=t(8988),i=(t(3289),t(1080)),o=["components"],d={id:"show-banner",title:"Showing Banner Ad",sidebar_label:"Banner Ad"},l={unversionedId:"show-banner",id:"version-0.x/show-banner",isDocsHomePage:!1,title:"Showing Banner Ad",description:"Banner ads are rectangular image or text ads that occupy a spot within an app's layout. They stay on screen while users are interacting with the app, and can refresh automatically after a certain period of time.",source:"@site/versioned_docs/version-0.x/show-banner.md",sourceDirName:".",slug:"/show-banner",permalink:"/docs/0.x/show-banner",editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/versioned_docs/version-0.x/show-banner.md",version:"0.x",sidebar_label:"Banner Ad",frontMatter:{id:"show-banner",title:"Showing Banner Ad",sidebar_label:"Banner Ad"},sidebar:"version-0.x/docs",previous:{title:"Installation",permalink:"/docs/0.x/"},next:{title:"Showing Interstitial Ad",permalink:"/docs/0.x/show-interstitial"}},s=[{value:"Usage",id:"usage",children:[]},{value:"Methods",id:"methods",children:[{value:"<code>admob.banner.show(config: IBannerRequest)</code>",id:"admobbannershowconfig-ibannerrequest",children:[]},{value:"<code>admob.banner.hide(id: AdUnitIDOption)</code>",id:"admobbannerhideid-adunitidoption",children:[]}]},{value:"Events",id:"events",children:[{value:"Load Event",id:"load-event",children:[]},{value:"Load Fail Event",id:"load-fail-event",children:[]},{value:"Open Event",id:"open-event",children:[]},{value:"Exit Application Event",id:"exit-application-event",children:[]},{value:"Close Event",id:"close-event",children:[]}]}],p={toc:s};function c(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Banner ads are rectangular image or text ads that occupy a spot within an app's layout. They stay on screen while users are interacting with the app, and can refresh automatically after a certain period of time."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"document.addEventListener('deviceready', () => {\n  admob.banner.show({\n    id: {\n      // replace with your ad unit IDs\n      android: 'ca-app-pub-xxx/yyy',\n      ios: 'ca-app-pub-xxx/zzz',\n    },\n  }).then(() => {\n    setTimeout(() => {\n      admob.banner.hide({\n        // replace with your ad unit IDs\n        android: 'ca-app-pub-xxx/yyy',\n        ios: 'ca-app-pub-xxx/zzz',\n      })\n    }, 10000)\n  })\n}, false)\n")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"admobbannershowconfig-ibannerrequest"},(0,i.kt)("inlineCode",{parentName:"h3"},"admob.banner.show(config: IBannerRequest)")),(0,i.kt)("p",null,"Displays banner ad."),(0,i.kt)("p",null,"Returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise")," that resolves as soon as banner is start loading, rejects when there is a problem calling native code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface IBannerRequest extends IAdRequest {\n  position?: BannerPosition\n  size?: AdSize\n}\n\ntype BannerPosition = 'bottom' | 'top'\n\ntype AdSize =\n  | AdSizeType\n  | {\n      width: number;\n      height: number;\n    }\n\nenum AdSizeType {\n  BANNER,\n  LARGE_BANNER,\n  MEDIUM_RECTANGLE,\n  FULL_BANNER,\n  LEADERBOARD,\n  SMART_BANNER,\n}\n")),(0,i.kt)("p",null,"See also ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.x/ad-request-options#iadrequest"},(0,i.kt)("inlineCode",{parentName:"a"},"IAdRequest")),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: The current implementation is minimum, the return value of this API will likely be changed.")),(0,i.kt)("h3",{id:"admobbannerhideid-adunitidoption"},(0,i.kt)("inlineCode",{parentName:"h3"},"admob.banner.hide(id: AdUnitIDOption)")),(0,i.kt)("p",null,"Hides banner ad of ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.x/ad-request-options#adunitidoption"},(0,i.kt)("inlineCode",{parentName:"a"},"id")),"."),(0,i.kt)("p",null,"Returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise")," that resolves as soon as banner is hidden, rejects when there is a problem calling native code."),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)("h3",{id:"load-event"},"Load Event"),(0,i.kt)("p",null,"Called when banner ad is loaded."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"document.addEventListener('admob.banner.load', () => {\n  // handle event\n})\n")),(0,i.kt)("h3",{id:"load-fail-event"},"Load Fail Event"),(0,i.kt)("p",null,"Called when banner ad request failed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"document.addEventListener('admob.banner.load_fail', () => {\n  // handle event\n})\n")),(0,i.kt)("h3",{id:"open-event"},"Open Event"),(0,i.kt)("p",null,"Called when user tap on the banner ad."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"document.addEventListener('admob.banner.open', () => {\n  // handle event\n})\n")),(0,i.kt)("h3",{id:"exit-application-event"},"Exit Application Event"),(0,i.kt)("p",null,"Called after Open Event, when a user click opens another app (such as the Google Play), backgrounding the current app."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"document.addEventListener('admob.banner.exit_app', () => {\n  // handle event\n})\n")),(0,i.kt)("h3",{id:"close-event"},"Close Event"),(0,i.kt)("p",null,"When a user returns to the app after viewing an ad's destination URL, this method is invoked. Your app can use it to resume suspended activities or perform any other work necessary to make itself ready for interaction."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"document.addEventListener('admob.banner.close', () => {\n  // handle event\n})\n")))}c.isMDXComponent=!0}}]);