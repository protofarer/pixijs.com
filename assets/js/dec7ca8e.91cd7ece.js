"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[7550],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>c});var a=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=a.createContext({}),o=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=o(e.components);return a.createElement(u.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=o(r),k=l,c=m["".concat(u,".").concat(k)]||m[k]||d[k]||n;return r?a.createElement(c,p(p({ref:t},s),{},{components:r})):a.createElement(c,p({ref:t},s))}));function c(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,p=new Array(n);p[0]=k;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[m]="string"==typeof e?e:l,p[1]=i;for(var o=2;o<n;o++)p[o]=r[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},82191:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>n,metadata:()=>i,toc:()=>o});var a=r(87462),l=(r(67294),r(3905));const n={id:"PIXI.TextureMatrix.pixi_core",title:"Class: PIXI.TextureMatrix",sidebar_label:"PIXI.TextureMatrix",custom_edit_url:null},p=void 0,i={unversionedId:"api/classes/PIXI.TextureMatrix.pixi_core",id:"api/classes/PIXI.TextureMatrix.pixi_core",title:"Class: PIXI.TextureMatrix",description:"@pixi/core.TextureMatrix",source:"@site/docs/api/classes/PIXI.TextureMatrix.pixi_core.mdx",sourceDirName:"api/classes",slug:"/api/classes/PIXI.TextureMatrix.pixi_core",permalink:"/api/classes/PIXI.TextureMatrix.pixi_core",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"PIXI.TextureMatrix.pixi_core",title:"Class: PIXI.TextureMatrix",sidebar_label:"PIXI.TextureMatrix",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"PIXI.TextureGCSystem",permalink:"/api/classes/PIXI.TextureGCSystem.pixi_core"},next:{title:"PIXI.TextureSystem",permalink:"/api/classes/PIXI.TextureSystem.pixi_core"}},u={},o=[{value:"Constructor:",id:"constructor",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Members",id:"members",level:2},{value:"clampMargin",id:"clampmargin",level:3},{value:"clampOffset",id:"clampoffset",level:3},{value:"isSimple",id:"issimple",level:3},{value:"mapCoord",id:"mapcoord",level:3},{value:"texture",id:"texture",level:3},{value:"uClampFrame",id:"uclampframe",level:3},{value:"uClampOffset",id:"uclampoffset",level:3},{value:"_textureID",id:"_textureid",level:3},{value:"_updateID",id:"_updateid",level:3},{value:"Methods",id:"methods",level:2},{value:"multiplyUvs",id:"multiplyuvs",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"Returns:",id:"returns",level:4},{value:"update",id:"update",level:3},{value:"Parameters:",id:"parameters-2",level:4},{value:"Returns:",id:"returns-1",level:4}],s={toc:o};function m(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{class:"package-name"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"../modules/pixi_core"},"@pixi/core"),".TextureMatrix")),(0,l.kt)("p",null,"Class controls uv mapping from Texture normal space to BaseTexture normal space.\nTakes ",(0,l.kt)("inlineCode",{parentName:"p"},"trim")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"rotate")," into account. May contain clamp settings for Meshes and TilingSprite."),(0,l.kt)("p",null,"Can be used in Texture ",(0,l.kt)("inlineCode",{parentName:"p"},"uvMatrix")," field, or separately, you can use different clamp settings on the same texture. If you want to add support for texture region of certain feature or filter, that's what you're looking for."),(0,l.kt)("p",null,"Takes track of Texture changes through ",(0,l.kt)("inlineCode",{parentName:"p"},"_lastTextureID")," private field. Use ",(0,l.kt)("inlineCode",{parentName:"p"},"update()")," method call to track it from outside."),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"constructor"},"Constructor:"),(0,l.kt)("h4",null,(0,l.kt)("code",null,"new PIXI.TextureMatrix(texture: Texture, clampMargin: number) ")),(0,l.kt)("h4",{id:"parameters"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"texture"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Texture")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null)),(0,l.kt)("td",{parentName:"tr",align:null},"observed texture")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clampMargin"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null)),(0,l.kt)("td",{parentName:"tr",align:null},"Changes frame clamping, 0.5 by default. Use -0.5 for extra border."))))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"members"},"Members"),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"clampmargin"},"clampMargin"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Default Value"),": ",(0,l.kt)("code",null,"0.5")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Changes frame clamping Works with TilingSprite and Mesh Change to -0.5 to add a pixel to the edge, recommended for transparent trimmed textures in atlas")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"clampoffset"},"clampOffset"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Default Value"),": ",(0,l.kt)("code",null,"0")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Changes frame clamping Works with TilingSprite and Mesh Change to 1.5 if you texture has repeated right and bottom lines, that leads to smoother borders")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"issimple"},"isSimple"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"boolean")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Default Value"),": ",(0,l.kt)("code",null,"false")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," If texture size is the same as baseTexture.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"mapcoord"},"mapCoord"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"Matrix")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Matrix operation that converts texture region coords to texture coords")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"texture"},"texture"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"Texture")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Texture property.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"uclampframe"},"uClampFrame"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"Float32Array")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Clamp region for normalized coords, left-top pixel center in xy , bottom-right in zw. Calculated based on clampOffset.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"uclampoffset"},"uClampOffset"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"Float32Array")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Normalized clamp offset. Calculated based on clampOffset.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"_textureid"},"_textureID"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Tracks Texture frame changes.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"_updateid"},"_updateID"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Tracks Texture frame changes.")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"multiplyuvs"},"multiplyUvs"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"(uvs",":"," Float32Array, out",":"," Float32Array) -",">"," Float32Array")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Multiplies uvs array to transform"),(0,l.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uvs"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Float32Array")),(0,l.kt)("td",{parentName:"tr",align:null},"mesh uvs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"out"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Float32Array")),(0,l.kt)("td",{parentName:"tr",align:null},"output")))),(0,l.kt)("h4",{id:"returns"},"Returns:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Float32Array")),(0,l.kt)("td",{parentName:"tr",align:null},"* output"))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"update"},"update"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"(forceUpdate",":"," boolean) -",">"," boolean")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Updates matrices if texture was changed."),(0,l.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"forceUpdate"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"if true, matrices will be updated any case")))),(0,l.kt)("h4",{id:"returns-1"},"Returns:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"* Whether or not it was updated"))))),(0,l.kt)("hr",null))}m.isMDXComponent=!0}}]);