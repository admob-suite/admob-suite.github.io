(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[85],{1080:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return m}});var o=t(3289);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),c=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||i;return t?o.createElement(f,a(a({ref:n},u),{},{components:t})):o.createElement(f,a({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7295:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var o=t(730),r=t(1879),i=(t(3289),t(1080)),a=["components"],l={id:"ionic",title:"Ionic",sidebar_label:"Installation"},p=void 0,c={unversionedId:"ionic",id:"version-0.x/ionic",isDocsHomePage:!1,title:"Ionic",description:"Installation",source:"@site/versioned_docs/version-0.x/ionic.md",sourceDirName:".",slug:"/ionic",permalink:"/docs/0.x/ionic",editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/versioned_docs/version-0.x/ionic.md",version:"0.x",frontMatter:{id:"ionic",title:"Ionic",sidebar_label:"Installation"},sidebar:"version-0.x/docs",previous:{title:"Designed for Families",permalink:"/docs/0.x/designed-for-families"},next:{title:"Ad Request Options",permalink:"/docs/0.x/ad-request-options"}},u=[{value:"Installation",id:"installation",children:[]},{value:"Add Plugin to Your App&#39;s Module",id:"add-plugin-to-your-apps-module",children:[]}],s={toc:u};function d(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"ionic cordova plugin add cordova-admob-plus --variable APP_ID_ANDROID=ca-app-pub-xxx~xxx --variable APP_ID_IOS=ca-app-pub-xxx~xxx\nnpm install --save ionic-admob\n")),(0,i.kt)("p",null,"If your project depends on ",(0,i.kt)("inlineCode",{parentName:"p"},"@ionic-native/core@beta"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"@admob-plus/ionic")," should be used instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"ionic-admob"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Ionic team and community maintain ",(0,i.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/native/admob-plus/"},"a native plugin")," too.\nDue to different release cycle, it may get outdated and break sometime.")),(0,i.kt)("h2",{id:"add-plugin-to-your-apps-module"},"Add Plugin to Your App's Module"),(0,i.kt)("p",null,"After installing a plugin\u2019s package, add it to your app\u2019s ",(0,i.kt)("inlineCode",{parentName:"p"},"NgModule"),"."),(0,i.kt)("p",null,"Default is path ",(0,i.kt)("inlineCode",{parentName:"p"},"src/app/app.module.ts"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'...\n\nimport { AdMob } from "ionic-admob";\n\n@NgModule({\n  ...\n\n  providers: [\n    ...\n    AdMob,\n    ...\n  ]\n  ...\n})\nexport class AppModule { }\n')),(0,i.kt)("p",null,"Then you would be able to inject ",(0,i.kt)("inlineCode",{parentName:"p"},"AdMob")," instance to component."),(0,i.kt)("p",null,"For example, edit path ",(0,i.kt)("inlineCode",{parentName:"p"},"src/app/app.component.ts"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'import { AdMob } from "ionic-admob";\n\nconstructor(private admob: AdMob) {\n    ...\n\n    platform.ready().then(() => {\n        admob.banner.show({ id: "test" });\n    });\n}\n\n')))}d.isMDXComponent=!0}}]);