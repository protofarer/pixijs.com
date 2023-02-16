"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[9666],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return r?n.createElement(b,i(i({ref:t},p),{},{components:r})):n.createElement(b,i({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},50631:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const l={id:"PIXI.ObjectRendererSystem.pixi_core",title:"Class: PIXI.ObjectRendererSystem",sidebar_label:"PIXI.ObjectRendererSystem",custom_edit_url:null},i=void 0,o={unversionedId:"api/classes/PIXI.ObjectRendererSystem.pixi_core",id:"api/classes/PIXI.ObjectRendererSystem.pixi_core",title:"Class: PIXI.ObjectRendererSystem",description:"@pixi/core.ObjectRendererSystem",source:"@site/docs/api/classes/PIXI.ObjectRendererSystem.pixi_core.mdx",sourceDirName:"api/classes",slug:"/api/classes/PIXI.ObjectRendererSystem.pixi_core",permalink:"/api/classes/PIXI.ObjectRendererSystem.pixi_core",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"PIXI.ObjectRendererSystem.pixi_core",title:"Class: PIXI.ObjectRendererSystem",sidebar_label:"PIXI.ObjectRendererSystem",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"PIXI.ObjectRenderer",permalink:"/api/classes/PIXI.ObjectRenderer.pixi_core"},next:{title:"PIXI.ObservablePoint",permalink:"/api/classes/PIXI.ObservablePoint.pixi_math"}},s={},c=[{value:"Members",id:"members",level:2},{value:"lastObjectRendered",id:"lastobjectrendered",level:3},{value:"renderingToScreen",id:"renderingtoscreen",level:3},{value:"Methods",id:"methods",level:2},{value:"render",id:"render",level:3},{value:"Parameters:",id:"parameters",level:4}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{class:"package-name"},(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../modules/pixi_core"},"@pixi/core"),".ObjectRendererSystem")),(0,a.kt)("p",null,"system that provides a render function that focussing on rendering Pixi Scene Graph objects to either the main view or to a renderTexture. Used for Canvas ",(0,a.kt)("inlineCode",{parentName:"p"},"WebGL")," contexts"),(0,a.kt)("article",null,"### Contructor:",(0,a.kt)("h4",null,(0,a.kt)("code",null,"new PIXI()"))),(0,a.kt)("h2",{id:"members"},"Members"),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"lastobjectrendered"},"lastObjectRendered"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"IRenderableObject")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," the last object rendered by the renderer. Useful for other plugins like interaction managers")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"renderingtoscreen"},"renderingToScreen"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"boolean")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Default Value"),": ",(0,a.kt)("code",null,"true")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," Flag if we are rendering to the screen vs renderTexture")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"render"},"render"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"(displayObject",":"," IRenderableObject, options",":"," IRendererRenderOptions) -",">"," void")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," Renders the object to its WebGL view."),(0,a.kt)("h4",{id:"parameters"},"Parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"displayObject"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"IRenderableObject")),(0,a.kt)("td",{parentName:"tr",align:null},"The object to be rendered.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"options"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"IRendererRenderOptions")),(0,a.kt)("td",{parentName:"tr",align:null},"the options to be passed to the renderer"))))),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);