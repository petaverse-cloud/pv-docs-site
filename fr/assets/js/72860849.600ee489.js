"use strict";(self.webpackChunkpv_docs_site=self.webpackChunkpv_docs_site||[]).push([[5478],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(r),d=a,m=c["".concat(p,".").concat(d)]||c[d]||f[d]||i;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4951:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:4,title:"Refresh Rates"},o="Setting Petority Refresh Rates",s={unversionedId:"petority/general-setting/refresh-rates",id:"petority/general-setting/refresh-rates",title:"Refresh Rates",description:"Petority offers users the flexibility to customize the refresh rates for pet location and health data updates.",source:"@site/docs/petority/general-setting/refresh-rates.md",sourceDirName:"petority/general-setting",slug:"/petority/general-setting/refresh-rates",permalink:"/fr/docs/petority/general-setting/refresh-rates",draft:!1,editUrl:"https://github.com/petaverse-cloud/pv-docs-site/tree/main/docs/petority/general-setting/refresh-rates.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Refresh Rates"},sidebar:"petoritySidebar",previous:{title:"Notification Settings",permalink:"/fr/docs/petority/general-setting/notification"},next:{title:"Unit Settings",permalink:"/fr/docs/petority/general-setting/unit"}},p={},l=[{value:"Available Refresh Rate Options:",id:"available-refresh-rate-options",level:2},{value:"Configuring Refresh Rates:",id:"configuring-refresh-rates",level:2}],u={toc:l},c="wrapper";function f(e){let{components:t,...i}=e;return(0,a.kt)(c,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setting-petority-refresh-rates"},"Setting Petority Refresh Rates"),(0,a.kt)("p",null,"Petority offers users the flexibility to customize the refresh rates for pet location and health data updates. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"fren",src:r(3061).Z,width:"1908",height:"1228"})),(0,a.kt)("h2",{id:"available-refresh-rate-options"},"Available Refresh Rate Options:"),(0,a.kt)("p",null,"Petority provides four refresh rate options for updating pet location and health data:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"10 Seconds:")," "),(0,a.kt)("p",{parentName:"li"},"For users who require real-time updates and want to monitor their pet's location and health with minimal delay. Please note that this option may consume device battery more quickly due to frequent updates.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"30 Seconds:")," "),(0,a.kt)("p",{parentName:"li"},"A balanced option that offers updates every half-minute, suitable for most users' needs. It strikes a good balance between real-time monitoring and battery conservation.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"60 Seconds:")," "),(0,a.kt)("p",{parentName:"li"},"Designed for users who prioritize device battery life over very frequent updates. This option updates the data once every minute.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"90 Seconds:")," "),(0,a.kt)("p",{parentName:"li"},"Offers longer intervals between updates, suitable for users who want to maximize device battery life and don't require very frequent data updates."))),(0,a.kt)("h2",{id:"configuring-refresh-rates"},"Configuring Refresh Rates:"),(0,a.kt)("p",null,"Follow these steps to configure the refresh rates within the Petority app:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open the Petority App: "),(0,a.kt)("p",{parentName:"li"},"Ensure you have the Petority app installed on your smartphone, and log in to your account.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Access Settings: "),(0,a.kt)("p",{parentName:"li"},"Tap ",(0,a.kt)("strong",{parentName:"p"},"User")," > ",(0,a.kt)("strong",{parentName:"p"},"Setting")," > ",(0,a.kt)("strong",{parentName:"p"},"Location frequency"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select Your Preferred Rate:"),(0,a.kt)("p",{parentName:"li"},"Choose from the available refresh rate options (",(0,a.kt)("strong",{parentName:"p"},"10")," seconds, ",(0,a.kt)("strong",{parentName:"p"},"30")," seconds, ",(0,a.kt)("strong",{parentName:"p"},"60")," seconds, or ",(0,a.kt)("strong",{parentName:"p"},"90")," seconds) based on your tracking needs and preferences.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Save Changes: "),(0,a.kt)("p",{parentName:"li"},"After selecting your desired refresh rate, save the changes to apply the new settings."))),(0,a.kt)("p",null,"Petority's customizable refresh rate feature empowers users to fine-tune their tracking experience. Whether you need real-time updates or prioritize device battery life, there's a refresh rate option to suit your requirements. By configuring these settings, you can ensure that you are getting the most out of Petority while keeping your pet safe and healthy."))}f.isMDXComponent=!0},3061:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Refresh-Rates-5d297464d7b95277784a2aa78b9ee3ef.jpg"}}]);