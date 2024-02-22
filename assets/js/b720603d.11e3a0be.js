"use strict";(self.webpackChunkpv_docs_site=self.webpackChunkpv_docs_site||[]).push([[5695],{5680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>g});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),y=a,g=p["".concat(s,".").concat(y)]||p[y]||d[y]||o;return t?r.createElement(g,l(l({ref:n},u),{},{components:t})):r.createElement(g,l({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=y;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},2511:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(8168),a=(t(6540),t(5680));const o={sidebar_position:2},l="Translate your site",i={unversionedId:"backup/Applications/translate-your-site",id:"backup/Applications/translate-your-site",title:"Translate your site",description:"Let's translate docs/intro.md to French.",source:"@site/docs/backup/Applications/translate-your-site.md",sourceDirName:"backup/Applications",slug:"/backup/Applications/translate-your-site",permalink:"/docs/backup/Applications/translate-your-site",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2}},s={},c=[{value:"Configure i18n",id:"configure-i18n",level:2},{value:"Translate a doc",id:"translate-a-doc",level:2},{value:"Start your localized site",id:"start-your-localized-site",level:2},{value:"Add a Locale Dropdown",id:"add-a-locale-dropdown",level:2},{value:"Build your localized site",id:"build-your-localized-site",level:2}],u={toc:c},p="wrapper";function d(e){let{components:n,...o}=e;return(0,a.yg)(p,(0,r.A)({},u,o,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"translate-your-site"},"Translate your site"),(0,a.yg)("p",null,"Let's translate ",(0,a.yg)("inlineCode",{parentName:"p"},"docs/intro.md")," to French."),(0,a.yg)("h2",{id:"configure-i18n"},"Configure i18n"),(0,a.yg)("p",null,"Modify ",(0,a.yg)("inlineCode",{parentName:"p"},"docusaurus.config.js")," to add support for the ",(0,a.yg)("inlineCode",{parentName:"p"},"fr")," locale:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  i18n: {\n    defaultLocale: 'en',\n    locales: ['en', 'fr'],\n  },\n};\n")),(0,a.yg)("h2",{id:"translate-a-doc"},"Translate a doc"),(0,a.yg)("p",null,"Copy the ",(0,a.yg)("inlineCode",{parentName:"p"},"docs/intro.md")," file to the ",(0,a.yg)("inlineCode",{parentName:"p"},"i18n/fr")," folder:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/\n\ncp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md\n")),(0,a.yg)("p",null,"Translate ",(0,a.yg)("inlineCode",{parentName:"p"},"i18n/fr/docusaurus-plugin-content-docs/current/intro.md")," in French."),(0,a.yg)("h2",{id:"start-your-localized-site"},"Start your localized site"),(0,a.yg)("p",null,"Start your site on the French locale:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"npm run start -- --locale fr\n")),(0,a.yg)("p",null,"Your localized site is accessible at ",(0,a.yg)("a",{parentName:"p",href:"http://localhost:3000/fr/"},"http://localhost:3000/fr/")," and the ",(0,a.yg)("inlineCode",{parentName:"p"},"Getting Started")," page is translated."),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"In development, you can only use one locale at a same time.")),(0,a.yg)("h2",{id:"add-a-locale-dropdown"},"Add a Locale Dropdown"),(0,a.yg)("p",null,"To navigate seamlessly across languages, add a locale dropdown."),(0,a.yg)("p",null,"Modify the ",(0,a.yg)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  themeConfig: {\n    navbar: {\n      items: [\n        // highlight-start\n        {\n          type: 'localeDropdown',\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n")),(0,a.yg)("p",null,"The locale dropdown now appears in your navbar:"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Locale Dropdown",src:t(3768).A,width:"370",height:"302"})),(0,a.yg)("h2",{id:"build-your-localized-site"},"Build your localized site"),(0,a.yg)("p",null,"Build your site for a specific locale:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"npm run build -- --locale fr\n")),(0,a.yg)("p",null,"Or build your site to include all the locales at once:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")))}d.isMDXComponent=!0},3768:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/localeDropdown-f0d995e751e7656a1b0dbbc1134e49c2.png"}}]);