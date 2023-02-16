"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[5895],{3905:(t,e,l)=>{l.d(e,{Zo:()=>s,kt:()=>c});var r=l(67294);function n(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function a(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,r)}return l}function i(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?a(Object(l),!0).forEach((function(e){n(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function u(t,e){if(null==t)return{};var l,r,n=function(t,e){if(null==t)return{};var l,r,n={},a=Object.keys(t);for(r=0;r<a.length;r++)l=a[r],e.indexOf(l)>=0||(n[l]=t[l]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)l=a[r],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(n[l]=t[l])}return n}var p=r.createContext({}),o=function(t){var e=r.useContext(p),l=e;return t&&(l="function"==typeof t?t(e):i(i({},e),t)),l},s=function(t){var e=o(t.components);return r.createElement(p.Provider,{value:e},t.children)},d="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var l=t.components,n=t.mdxType,a=t.originalType,p=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),d=o(l),m=n,c=d["".concat(p,".").concat(m)]||d[m]||k[m]||a;return l?r.createElement(c,i(i({ref:e},s),{},{components:l})):r.createElement(c,i({ref:e},s))}));function c(t,e){var l=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=l.length,i=new Array(a);i[0]=m;var u={};for(var p in e)hasOwnProperty.call(e,p)&&(u[p]=e[p]);u.originalType=t,u[d]="string"==typeof t?t:n,i[1]=u;for(var o=2;o<a;o++)i[o]=l[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,l)}m.displayName="MDXCreateElement"},41502:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>o});var r=l(87462),n=(l(67294),l(3905));const a={id:"PIXI.BlurFilterPass.pixi_filter_blur",title:"Class: PIXI.BlurFilterPass",sidebar_label:"PIXI.BlurFilterPass",custom_edit_url:null},i=void 0,u={unversionedId:"api/classes/PIXI.BlurFilterPass.pixi_filter_blur",id:"api/classes/PIXI.BlurFilterPass.pixi_filter_blur",title:"Class: PIXI.BlurFilterPass",description:"@pixi/filter-blur.BlurFilterPass",source:"@site/docs/api/classes/PIXI.BlurFilterPass.pixi_filter_blur.mdx",sourceDirName:"api/classes",slug:"/api/classes/PIXI.BlurFilterPass.pixi_filter_blur",permalink:"/api/classes/PIXI.BlurFilterPass.pixi_filter_blur",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"PIXI.BlurFilterPass.pixi_filter_blur",title:"Class: PIXI.BlurFilterPass",sidebar_label:"PIXI.BlurFilterPass",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"PIXI.BlurFilter",permalink:"/api/classes/PIXI.BlurFilter.pixi_filter_blur"},next:{title:"PIXI.Bounds",permalink:"/api/classes/PIXI.Bounds.pixi_display"}},p={},o=[{value:"Constructor:",id:"constructor",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Extends",id:"extends",level:2},{value:"Members",id:"members",level:2},{value:"autoFit",id:"autofit",level:3},{value:"blendMode",id:"blendmode",level:3},{value:"blur",id:"blur",level:3},{value:"enabled",id:"enabled",level:3},{value:"legacy",id:"legacy",level:3},{value:"multisample",id:"multisample",level:3},{value:"padding",id:"padding",level:3},{value:"program",id:"program",level:3},{value:"quality",id:"quality",level:3},{value:"resolution",id:"resolution",level:3},{value:"state",id:"state",level:3},{value:"uniforms",id:"uniforms",level:3},{value:"Methods",id:"methods",level:2},{value:"apply",id:"apply",level:3},{value:"Parameters:",id:"parameters-1",level:4}],s={toc:o};function d(t){let{components:e,...l}=t;return(0,n.kt)("wrapper",(0,r.Z)({},s,l,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("div",{class:"package-name"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"../modules/pixi_filter_blur"},"@pixi/filter-blur"),".BlurFilterPass")),(0,n.kt)("p",null,"The BlurFilterPass applies a horizontal or vertical Gaussian blur to an object."),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"constructor"},"Constructor:"),(0,n.kt)("h4",null,(0,n.kt)("code",null,"new PIXI.BlurFilterPass(horizontal: boolean, strength: number, quality: number, resolution: , kernelSize: number) ")),(0,n.kt)("h4",{id:"parameters"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"horizontal"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"boolean")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null)),(0,n.kt)("td",{parentName:"tr",align:null},"Do pass along the x-axis (",(0,n.kt)("inlineCode",{parentName:"td"},"true"),") or y-axis (",(0,n.kt)("inlineCode",{parentName:"td"},"false"),").")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"strength"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"number")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"8")),(0,n.kt)("td",{parentName:"tr",align:null},"The strength of the blur filter.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"quality"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"number")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"4")),(0,n.kt)("td",{parentName:"tr",align:null},"The quality of the blur filter.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"resolution"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null)),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null)),(0,n.kt)("td",{parentName:"tr",align:null},"The resolution of the blur filter.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"kernelSize"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"number")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"5")),(0,n.kt)("td",{parentName:"tr",align:null},"The kernelSize of the blur filter.Options",":"," 5, 7, 9, 11, 13, 15."))))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"extends"},"Extends"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../classes/PIXI.Filter.pixi_core"},"PIXI.Filter"))),(0,n.kt)("h2",{id:"members"},"Members"),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"autofit"},"autoFit"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Type:")," ",(0,n.kt)("code",null,"boolean")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Default Value"),": ",(0,n.kt)("code",null,"true")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Description:")," If enabled, PixiJS will fit the filter area into boundaries for better performance. Switch it off if it does not work for specific shader.")),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"blendmode"},"blendMode"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Type:")," ",(0,n.kt)("code",null,"BLEND_MODES")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Default Value"),": ",(0,n.kt)("code",null,"PIXI.BLEND_MODES.NORMAL")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Description:")," Sets the blend mode of the filter.")),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"blur"},"blur"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Type:")," ",(0,n.kt)("code",null,"number")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Default Value"),": ",(0,n.kt)("code",null,"16")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Description:")," Sets the strength of both the blur.")),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"enabled"},"enabled"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Type:")," ",(0,n.kt)("code",null,"boolean")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Description:")," If enabled is true the filter is applied, if false it will not.")),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"legacy"},"legacy"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Type:")," ",(0,n.kt)("code",null,"boolean")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Description:")," Legacy filters use position and uvs from attributes (set by filter system)")),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"multisample"},"multisample"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Type:")," ",(0,n.kt)("code",null,"MSAA_QUALITY")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Description:")," The samples override of the filter instance.")),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"padding"},"padding"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Type:")," ",(0,n.kt)("code",null,"number")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Description:")," The padding of the filter. Some filters require extra space to breath such as a blur. Increasing this will add extra width and height to the bounds of the object that the filter is applied to.")),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"program"},"program"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Type:")," ",(0,n.kt)("code",null,"Program")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Description:")," Program that the shader uses.")),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"quality"},"quality"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Type:")," ",(0,n.kt)("code",null,"number")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Default Value"),": ",(0,n.kt)("code",null,"4")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Description:")," Sets the quality of the blur by modifying the number of passes. More passes means higher quality bluring but the lower the performance.")),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"resolution"},"resolution"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Type:")," ",(0,n.kt)("code",null,"number")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Description:")," The resolution of the filter. Setting this to be lower will lower the quality but increase the performance of the filter.")),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"state"},"state"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Type:")," ",(0,n.kt)("code",null,"State")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Description:")," The WebGL state the filter requires to render.")),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"uniforms"},"uniforms"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Type:")," ",(0,n.kt)("code",null,"Dict","<","any",">")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Description:")," Shader uniform values, shortcut for ",(0,n.kt)("inlineCode",{parentName:"p"},"uniformGroup.uniforms"),".")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"apply"},"apply"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Type:")," ",(0,n.kt)("code",null,"(filterManager",":"," FilterSystem, input",":"," RenderTexture, output",":"," RenderTexture, clearMode",":"," CLEAR_MODES) -",">"," void")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Description:")," Applies the filter."),(0,n.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"filterManager"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"FilterSystem")),(0,n.kt)("td",{parentName:"tr",align:null},"The manager.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"input"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"RenderTexture")),(0,n.kt)("td",{parentName:"tr",align:null},"The input target.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"output"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"RenderTexture")),(0,n.kt)("td",{parentName:"tr",align:null},"The output target.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"clearMode"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"CLEAR_MODES")),(0,n.kt)("td",{parentName:"tr",align:null},"How to clear"))))),(0,n.kt)("hr",null))}d.isMDXComponent=!0}}]);