(self.webpackChunkadmob_plus_website=self.webpackChunkadmob_plus_website||[]).push([[5273],{1080:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(3289);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5974:function(e,t,n){"use strict";var r=n(3289);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},3301:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(3289),a=n(3889);var i=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(2238),l="tabItem_1S16",s="tabItemActive_VD8K";var c=37,u=39;var d=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,d=e.values,p=e.groupId,m=e.className,f=i(),v=f.tabGroupChoices,b=f.setTabGroupChoices,y=(0,r.useState)(a),g=y[0],x=y[1],k=r.Children.toArray(e.children),h=[];if(null!=p){var w=v[p];null!=w&&w!==g&&d.some((function(e){return e.value===w}))&&x(w)}var O=function(e){var t=e.currentTarget,n=h.indexOf(t),r=d[n].value;x(r),null!=p&&(b(p,r),setTimeout((function(){var e,n,r,a,i,o,l,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,o=window,l=o.innerHeight,c=o.innerWidth,n>=0&&i<=c&&a<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},T=function(e){var t,n;switch(e.keyCode){case u:var r=h.indexOf(e.target)+1;n=h[r]||h[0];break;case c:var a=h.indexOf(e.target)-1;n=h[a]||h[h.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},m)},d.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":g===t}),key:t,ref:function(e){return h.push(e)},onKeyDown:T,onFocus:O,onClick:O},n)}))),t?(0,r.cloneElement)(k.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},3889:function(e,t,n){"use strict";var r=(0,n(3289).createContext)(void 0);t.Z=r},989:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return p},default:function(){return f}});var r=n(730),a=n(1879),i=(n(3289),n(1080)),o=n(3301),l=n(5974),s=["components"],c={title:"Installation",sidebar_label:"Installation",slug:"/react-native"},u=void 0,d={unversionedId:"react-native/installation",id:"version-1.x/react-native/installation",isDocsHomePage:!1,title:"Installation",description:"`shell",source:"@site/versioned_docs/version-1.x/react-native/installation.mdx",sourceDirName:"react-native",slug:"/react-native",permalink:"/docs/1.x/react-native",editUrl:"https://github.com/admob-plus/admob-plus/edit/master/website/versioned_docs/version-1.x/react-native/installation.mdx",version:"1.x",frontMatter:{title:"Installation",sidebar_label:"Installation",slug:"/react-native"},sidebar:"version-1.x/docs",previous:{title:"RewardedInterstitialAd",permalink:"/docs/1.x/ionic/api/classes/rewardedinterstitialad"},next:{title:"Interstitial",permalink:"/docs/1.x/react-native/ads/interstitial"}},p=[],m={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @admob-plus/react-native\n")),(0,i.kt)(o.Z,{defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"android",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="android/app/src/main/AndroidManifest.xml" {3-9}',title:'"android/app/src/main/AndroidManifest.xml"',"{3-9}":!0},'<manifest>\n    <application>\n        <meta-data\n            android:name="com.google.android.gms.ads.APPLICATION_ID"\n            android:value="ca-app-pub-xxx~yyy" />\n\n        <meta-data\n            android:name="com.google.android.gms.ads.DELAY_APP_MEASUREMENT_INIT"\n            android:value="true" />\n  </application>\n</manifest>\n'))),(0,i.kt)(l.Z,{value:"ios",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="ios/<PROJECT_NAME>/Info.plist" {5-13}',title:'"ios/<PROJECT_NAME>/Info.plist"',"{5-13}":!0},'<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n<plist version="1.0">\n<dict>\n    <key>GADApplicationIdentifier</key>\n    <string>ca-app-pub-xxx~yyy</string>\n    <key>SKAdNetworkItems</key>\n    <array>\n        <dict>\n            <key>SKAdNetworkIdentifier</key>\n            <string>cstr6suwn9.skadnetwork</string>\n        </dict>\n    </array>\n    \x3c!-- Add this if your are using requestTrackingAuthorization() --\x3e\n    <key>NSUserTrackingUsageDescription</key>\n    <string>This identifier will be used to deliver personalized ads to you.</string>\n</dict>\n</plist>\n')))))}f.isMDXComponent=!0},2238:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);