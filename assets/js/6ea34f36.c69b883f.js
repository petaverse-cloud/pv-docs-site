"use strict";(self.webpackChunkpv_docs_site=self.webpackChunkpv_docs_site||[]).push([[5810],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),f=o,m=u["".concat(l,".").concat(f)]||u[f]||y[f]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1760:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>y,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1,title:"Alert Types"},i="Alert Types",p={unversionedId:"petority/notification/type",id:"petority/notification/type",title:"Alert Types",description:"Petority offers a range of Alerts that allow you to stay informed about your pet's status and device conditions.",source:"@site/docs/petority/notification/type.md",sourceDirName:"petority/notification",slug:"/petority/notification/type",permalink:"/docs/petority/notification/type",draft:!1,editUrl:"https://github.com/petaverse-cloud/pv-docs-site/tree/main/docs/petority/notification/type.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Alert Types"},sidebar:"petoritySidebar",previous:{title:"Alerts",permalink:"/docs/category/alerts"},next:{title:"Fence Event",permalink:"/docs/petority/notification/fence-event"}},l={},s=[],c={toc:s},u="wrapper";function y(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"alert-types"},"Alert Types"),(0,o.kt)("p",null,"Petority offers a range of Alerts that allow you to stay informed about your pet's status and device conditions."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alert",src:r(3480).Z,width:"1908",height:"1228"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Battery Alert:")),(0,o.kt)("p",{parentName:"li"},"  When your Petority device's battery is running low(Below ",(0,o.kt)("strong",{parentName:"p"},"10%")," or automatic ",(0,o.kt)("strong",{parentName:"p"},"shutdown"),"), you will receive a alert to remind you to charge the device promptly.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Signal Alert:")),(0,o.kt)("p",{parentName:"li"},"  If your Petority device loses connection or experiences weak signal, you'll be notified about the signal status to keep you informed about the device's connectivity.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Heart Rate Alert:")),(0,o.kt)("p",{parentName:"li"},"  Petority can monitor your pet's heart rate. You can set up ",(0,o.kt)("a",{parentName:"p",href:"/docs/petority/notification/enable-nitif"},"heart rate alerts")," to receive alerts in case of abnormal heart rates, allowing you to take action.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/petority/notification/fence-event"},"Fence Alert:"))),(0,o.kt)("p",{parentName:"li"},"  If you've set up a fence (safe zone), you'll receive alerts when your pet enters or exits the defined area, allowing you're always aware of your pet's location.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Health Alert:")),(0,o.kt)("p",{parentName:"li"},"  You can configure health alerts to monitor your pet's activity levels and well-being. Alerts will be sent if there are unusual activities or changes in your pet's health condition.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/petority/devices/upgrade-firmware"},"Firmware Update")," Alert:")),(0,o.kt)("p",{parentName:"li"},"You'll receive firmware update Alerts within the Petority app. These alerts will inform you when a new firmware version is available for your device."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"How to Manage Alerts? See:",(0,o.kt)("a",{parentName:"strong",href:"/docs/petority/general-setting/notification"},"Alert Settings")),"."),(0,o.kt)("p",null,"By familiarizing yourself with the device information and settings in the Petority app, you can optimize the care and safety of your pets while enjoying the convenience of modern technology."))}y.isMDXComponent=!0},3480:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Notification(1)-48d28946137c4109eb14355c5b9c97cf.jpg"}}]);