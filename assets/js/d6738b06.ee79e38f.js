(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(162)),o={title:"Interstitial Ad",sidebar_label:"Interstitial"},c={unversionedId:"ionic/ads/interstitial",id:"ionic/ads/interstitial",isDocsHomePage:!1,title:"Interstitial Ad",description:"Usage",source:"@site/docs/ionic/ads/interstitial.md",slug:"/ionic/ads/interstitial",permalink:"/docs/ionic/ads/interstitial",editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/docs/ionic/ads/interstitial.md",version:"current",sidebar_label:"Interstitial",sidebar:"docs",previous:{title:"Banner Ad",permalink:"/docs/ionic/ads/banner"},next:{title:"Rewarded Ad",permalink:"/docs/ionic/ads/rewarded"}},l=[{value:"Usage",id:"usage",children:[]},{value:"Related",id:"related",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"import { AdMob } from '@admob-plus/ionic/ngx';\nimport { Component } from '@angular/core';\nimport { Platform } from '@ionic/angular';\n\n@Component({\n  selector: 'app-home',\n  templateUrl: 'home.page.html',\n  styleUrls: ['home.page.scss'],\n})\nexport class HomePage {\n  constructor(private platform: Platform, private admob: AdMob) {\n    this.platform.ready().then(async () => {\n      await this.admob.start();\n\n      const interstitial = new this.admob.InterstitialAd({\n        adUnitId: 'ca-app-pub-xxx/yyy',\n      })\n\n      await interstitial.load()\n      await interstitial.show()\n    });\n  }\n}\n")),Object(i.b)("h2",{id:"related"},"Related"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/cordova/ads/interstitial"},"Interstitial Ad - Cordova"))))}p.isMDXComponent=!0},162:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,b=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return n?a.a.createElement(b,c(c({ref:t},s),{},{components:n})):a.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);