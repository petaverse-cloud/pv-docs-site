"use strict";(self.webpackChunkpv_docs_site=self.webpackChunkpv_docs_site||[]).push([[5485],{5680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>g});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7498:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(8168),a=(r(6540),r(5680));const o={sidebar_position:2},i="Create a Document",l={unversionedId:"backup/Products/create-a-document",id:"backup/Products/create-a-document",title:"Create a Document",description:"Documents are groups of pages connected through:",source:"@site/docs/backup/Products/create-a-document.md",sourceDirName:"backup/Products",slug:"/backup/Products/create-a-document",permalink:"/fr/docs/backup/Products/create-a-document",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2}},c={},s=[{value:"Create your first Doc",id:"create-your-first-doc",level:2},{value:"Configure the Sidebar",id:"configure-the-sidebar",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(p,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"create-a-document"},"Create a Document"),(0,a.yg)("p",null,"Documents are ",(0,a.yg)("strong",{parentName:"p"},"groups of pages")," connected through:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"a ",(0,a.yg)("strong",{parentName:"li"},"sidebar")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"previous/next navigation")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"versioning"))),(0,a.yg)("h2",{id:"create-your-first-doc"},"Create your first Doc"),(0,a.yg)("p",null,"Create a Markdown file at ",(0,a.yg)("inlineCode",{parentName:"p"},"docs/hello.md"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-md",metastring:'title="docs/hello.md"',title:'"docs/hello.md"'},"# Hello\n\nThis is my **first Docusaurus document**!\n")),(0,a.yg)("p",null,"A new document is now available at ",(0,a.yg)("a",{parentName:"p",href:"http://localhost:3000/docs/hello"},"http://localhost:3000/docs/hello"),"."),(0,a.yg)("h2",{id:"configure-the-sidebar"},"Configure the Sidebar"),(0,a.yg)("p",null,"Docusaurus automatically ",(0,a.yg)("strong",{parentName:"p"},"creates a sidebar")," from the ",(0,a.yg)("inlineCode",{parentName:"p"},"docs")," folder."),(0,a.yg)("p",null,"Add metadata to customize the sidebar label and position:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-md",metastring:'title="docs/hello.md" {1-4}',title:'"docs/hello.md"',"{1-4}":!0},"---\nsidebar_label: 'Hi!'\nsidebar_position: 3\n---\n\n# Hello\n\nThis is my **first Docusaurus document**!\n")),(0,a.yg)("p",null,"It is also possible to create your sidebar explicitly in ",(0,a.yg)("inlineCode",{parentName:"p"},"sidebars.js"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},"module.exports = {\n  petoritySidebar: [\n    'intro',\n    // highlight-next-line\n    'hello',\n    {\n      type: 'category',\n      label: 'Tutorial',\n      items: ['tutorial-basics/create-a-document'],\n    },\n  ],\n};\n")))}d.isMDXComponent=!0}}]);