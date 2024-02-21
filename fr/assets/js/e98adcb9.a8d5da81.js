"use strict";(self.webpackChunkpv_docs_site=self.webpackChunkpv_docs_site||[]).push([[8604],{5680:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>g});var i=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},y="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),y=s(n),u=o,g=y["".concat(p,".").concat(u)]||y[u]||f[u]||r;return n?i.createElement(g,a(a({ref:t},l),{},{components:n})):i.createElement(g,a({ref:t},l))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[y]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<r;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1044:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>f,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var i=n(8168),o=(n(6540),n(5680));const r={sidebar_position:1,title:"Notification Types"},a="Notification Types",c={unversionedId:"petority/notification/type",id:"petority/notification/type",title:"Notification Types",description:"Petority offers a range of notifications and notification types that allow you to stay informed about your pet's status and device conditions.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/petority/notification/type.md",sourceDirName:"petority/notification",slug:"/petority/notification/type",permalink:"/fr/docs/petority/notification/type",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Notification Types"},sidebar:"petoritySidebar",previous:{title:"Alerts",permalink:"/fr/docs/category/alerts"},next:{title:"Fence Event",permalink:"/fr/docs/petority/notification/fence-event"}},p={},s=[],l={toc:s},y="wrapper";function f(e){let{components:t,...r}=e;return(0,o.yg)(y,(0,i.A)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"notification-types"},"Notification Types"),(0,o.yg)("p",null,"Petority offers a range of notifications and notification types that allow you to stay informed about your pet's status and device conditions."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"alert",src:n(6250).A,width:"1908",height:"1228"})),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Battery Notification:")),(0,o.yg)("p",{parentName:"li"},"  When your Petority device's battery is running low(Below ",(0,o.yg)("strong",{parentName:"p"},"10%")," or automatic ",(0,o.yg)("strong",{parentName:"p"},"shutdown"),"), you will receive a notification to ensure you can charge the device promptly.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Signal Notification:")),(0,o.yg)("p",{parentName:"li"},"  In case your Petority device loses connection or experiences weak signal, you'll be notified about the signal status to keep you informed about the device's connectivity.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Heart Rate Notification:")),(0,o.yg)("p",{parentName:"li"},"  Petority can monitor your pet's heart rate. You can set up ",(0,o.yg)("a",{parentName:"p",href:"/docs/petority/notification/enable-nitif"},"heart rate notifications")," to receive alerts in case of abnormal heart rates, enabling you to take timely action.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("a",{parentName:"strong",href:"/docs/petority/notification/fence-event"},"Geofence Notification:"))),(0,o.yg)("p",{parentName:"li"},"  If you've set up a geofence (safe zone), you'll receive notifications when your pet enters or exits the defined area, ensuring you're always aware of your pet's location.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Health Notification:")),(0,o.yg)("p",{parentName:"li"},"  You can configure health notifications to monitor your pet's activity levels and well-being. Notifications will be sent if there are unusual activities or changes in your pet's health condition.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("a",{parentName:"strong",href:"/docs/petority/devices/upgrade-firmware"},"Upgrade Firmware")," Notification:")),(0,o.yg)("p",{parentName:"li"},"You'll receive firmware update notifications within the Petority app. These notifications will inform you when a new firmware version is available for your device."))),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"How to Manage Notifications? see:",(0,o.yg)("a",{parentName:"strong",href:"/docs/petority/general-setting/notification"},"Notification Settings")),"."),(0,o.yg)("p",null,"By familiarizing yourself with the device information and settings in the Petority app, you can optimize the care and safety of your pets while enjoying the convenience of modern technology."))}f.isMDXComponent=!0},6250:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/Notification(1)-66b41363a5c6bccb4bf08448f96d07c7.jpg"}}]);