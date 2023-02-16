"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[1302],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(r),m=l,k=c["".concat(o,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(k,i(i({ref:t},s),{},{components:r})):n.createElement(k,i({ref:t},s))}));function k(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:l,i[1]=p;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},68219:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var n=r(87462),l=(r(67294),r(3905));const a={id:"PIXI.GLTexture.pixi_core",title:"Class: PIXI.GLTexture",sidebar_label:"PIXI.GLTexture",custom_edit_url:null},i=void 0,p={unversionedId:"api/classes/PIXI.GLTexture.pixi_core",id:"api/classes/PIXI.GLTexture.pixi_core",title:"Class: PIXI.GLTexture",description:"@pixi/core.GLTexture",source:"@site/docs/api/classes/PIXI.GLTexture.pixi_core.mdx",sourceDirName:"api/classes",slug:"/api/classes/PIXI.GLTexture.pixi_core",permalink:"/api/classes/PIXI.GLTexture.pixi_core",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"PIXI.GLTexture.pixi_core",title:"Class: PIXI.GLTexture",sidebar_label:"PIXI.GLTexture",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"PIXI.GLProgram",permalink:"/api/classes/PIXI.GLProgram.pixi_core"},next:{title:"PIXI.GenerateTextureSystem",permalink:"/api/classes/PIXI.GenerateTextureSystem.pixi_core"}},o={},u=[{value:"Members",id:"members",level:2},{value:"dirtyId",id:"dirtyid",level:3},{value:"dirtyStyleId",id:"dirtystyleid",level:3},{value:"height",id:"height",level:3},{value:"internalFormat",id:"internalformat",level:3},{value:"mipmap",id:"mipmap",level:3},{value:"samplerType",id:"samplertype",level:3},{value:"texture",id:"texture",level:3},{value:"type",id:"type",level:3},{value:"width",id:"width",level:3},{value:"wrapMode",id:"wrapmode",level:3}],s={toc:u};function c(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{class:"package-name"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"../modules/pixi_core"},"@pixi/core"),".GLTexture")),(0,l.kt)("p",null,"Internal texture for WebGL context."),(0,l.kt)("article",null,"### Contructor:",(0,l.kt)("h4",null,(0,l.kt)("code",null,"new PIXI()"))),(0,l.kt)("h2",{id:"members"},"Members"),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"dirtyid"},"dirtyId"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Texture contents dirty flag.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"dirtystyleid"},"dirtyStyleId"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Texture style dirty flag.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"height"},"height"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Height of texture that was used in texImage2D.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"internalformat"},"internalFormat"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Type copied from baseTexture.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"mipmap"},"mipmap"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"boolean")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Whether mip levels has to be generated.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"samplertype"},"samplerType"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Type of sampler corresponding to this texture. See ",(0,l.kt)("a",{parentName:"p",href:"../enums/PIXI.SAMPLER_TYPES.pixi_constants"},"PIXI.SAMPLER_TYPES"))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"texture"},"texture"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"WebGLTexture")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," The WebGL texture.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"type"},"type"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Type copied from baseTexture.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"width"},"width"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Width of texture that was used in texImage2D.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"wrapmode"},"wrapMode"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," WrapMode copied from baseTexture.")),(0,l.kt)("hr",null))}c.isMDXComponent=!0}}]);