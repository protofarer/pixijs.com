"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[5804],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var l=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=l.createContext({}),o=function(e){var t=l.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=o(e.components);return l.createElement(u.Provider,{value:t},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=o(a),m=r,c=d["".concat(u,".").concat(m)]||d[m]||k[m]||n;return a?l.createElement(c,i(i({ref:t},s),{},{components:a})):l.createElement(c,i({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[d]="string"==typeof e?e:r,i[1]=p;for(var o=2;o<n;o++)i[o]=a[o];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}m.displayName="MDXCreateElement"},42919:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>p,toc:()=>o});var l=a(87462),r=(a(67294),a(3905));const n={id:"PIXI.ImageBitmapResource.pixi_core",title:"Class: PIXI.ImageBitmapResource",sidebar_label:"PIXI.ImageBitmapResource",custom_edit_url:null},i=void 0,p={unversionedId:"api/classes/PIXI.ImageBitmapResource.pixi_core",id:"api/classes/PIXI.ImageBitmapResource.pixi_core",title:"Class: PIXI.ImageBitmapResource",description:"@pixi/core.ImageBitmapResource",source:"@site/docs/api/classes/PIXI.ImageBitmapResource.pixi_core.mdx",sourceDirName:"api/classes",slug:"/api/classes/PIXI.ImageBitmapResource.pixi_core",permalink:"/api/classes/PIXI.ImageBitmapResource.pixi_core",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"PIXI.ImageBitmapResource.pixi_core",title:"Class: PIXI.ImageBitmapResource",sidebar_label:"PIXI.ImageBitmapResource",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"PIXI.HTMLTextStyle",permalink:"/api/classes/PIXI.HTMLTextStyle.pixi_text_html"},next:{title:"PIXI.ImageResource",permalink:"/api/classes/PIXI.ImageResource.pixi_core"}},u={},o=[{value:"Constructor:",id:"constructor",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Extends",id:"extends",level:2},{value:"Members",id:"members",level:2},{value:"alphaMode",id:"alphamode",level:3},{value:"crossOrigin",id:"crossorigin",level:3},{value:"destroyed",id:"destroyed",level:3},{value:"height",id:"height",level:3},{value:"internal",id:"internal",level:3},{value:"source",id:"source",level:3},{value:"src",id:"src",level:3},{value:"url",id:"url",level:3},{value:"valid",id:"valid",level:3},{value:"width",id:"width",level:3},{value:"_height",id:"_height",level:3},{value:"_width",id:"_width",level:3},{value:"Methods",id:"methods",level:2},{value:"test",id:"test",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"Returns:",id:"returns",level:4},{value:"bind",id:"bind",level:3},{value:"Parameters:",id:"parameters-2",level:4},{value:"destroy",id:"destroy",level:3},{value:"dispose",id:"dispose",level:3},{value:"resize",id:"resize",level:3},{value:"Parameters:",id:"parameters-3",level:4},{value:"style",id:"style",level:3},{value:"Parameters:",id:"parameters-4",level:4},{value:"Returns:",id:"returns-1",level:4},{value:"unbind",id:"unbind",level:3},{value:"Parameters:",id:"parameters-5",level:4},{value:"update",id:"update",level:3},{value:"upload",id:"upload",level:3},{value:"Parameters:",id:"parameters-6",level:4},{value:"Returns:",id:"returns-2",level:4},{value:"load",id:"load",level:3},{value:"Returns:",id:"returns-3",level:4}],s={toc:o};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,l.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{class:"package-name"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../modules/pixi_core"},"@pixi/core"),".ImageBitmapResource")),(0,r.kt)("p",null,"Resource type for ImageBitmap."),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"constructor"},"Constructor:"),(0,r.kt)("h4",null,(0,r.kt)("code",null,"new PIXI.ImageBitmapResource(source: ImageBitmap | string, options: IImageBitmapResourceOptions) ")),(0,r.kt)("h4",{id:"parameters"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"source"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"ImageBitmap ","|"," string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null)),(0,r.kt)("td",{parentName:"tr",align:null},"ImageBitmap or URL to use")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"IImageBitmapResourceOptions")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null)),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options.autoLoad"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"true")),(0,r.kt)("td",{parentName:"tr",align:null},"Start loading process automatically when constructed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options.crossOrigin"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"true")),(0,r.kt)("td",{parentName:"tr",align:null},"Load image using cross origin.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options.alphaMode"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"PIXI.ALPHA_MODES")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"null")),(0,r.kt)("td",{parentName:"tr",align:null},"Alpha mode used when creating the ImageBitmap."))))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"extends"},"Extends"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../classes/PIXI.BaseImageResource.pixi_core"},"PIXI.BaseImageResource"))),(0,r.kt)("h2",{id:"members"},"Members"),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"alphamode"},"alphaMode"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("code",null,"ALPHA_MODES ","|"," null")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," Controls texture alphaMode field Copies from options Default is ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),", copies option from baseTexture")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"crossorigin"},"crossOrigin"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("code",null,"boolean")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Default Value"),": ",(0,r.kt)("code",null,"false")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," Load image using cross origin.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"destroyed"},"destroyed"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("code",null,"boolean")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Default Value"),": ",(0,r.kt)("code",null,"false")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," If resource has been destroyed.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"height"},"height"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("code",null,"number")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," The height of the resource.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"internal"},"internal"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("code",null,"boolean")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if resource is created by BaseTexture useful for doing cleanup with BaseTexture destroy and not cleaning up resources that were created externally.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"source"},"source"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("code",null,"HTMLImageElement ","|"," HTMLVideoElement ","|"," ImageBitmap ","|"," PIXI.ICanvas")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," The source element.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"src"},"src"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("code",null,"string")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," The url of the resource")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"url"},"url"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("code",null,"string ","|"," null")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," URL of the image source.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"valid"},"valid"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("code",null,"boolean")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," Has been validated")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"width"},"width"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("code",null,"number")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," The width of the resource.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"_height"},"_height"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("code",null,"number")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," Internal height of the resource.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"_width"},"_width"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("code",null,"number")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," Internal width of the resource.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"test"},"test"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("code",null,"(source",":"," unknown) -",">"," boolean")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," Used to auto-detect the type of resource."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"source"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"unknown")),(0,r.kt)("td",{parentName:"tr",align:null},"The source object")))),(0,r.kt)("h4",{id:"returns"},"Returns:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")," if current environment support ImageBitmap, and source is string or ImageBitmap"))))),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"bind"},"bind"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("code",null,"(baseTexture",":"," BaseTexture) -",">"," void")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," Bind to a parent BaseTexture"),(0,r.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"baseTexture"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"BaseTexture")),(0,r.kt)("td",{parentName:"tr",align:null},"Parent texture"))))),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"destroy"},"destroy"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("code",null,"() -",">"," void")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," Call when destroying resource, unbind any BaseTexture object before calling this method, as reference counts are maintained internally.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"dispose"},"dispose"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("code",null,"() -",">"," void")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," Destroys this resource.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"resize"},"resize"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("code",null,"(width",":"," number, height",":"," number) -",">"," void")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," Trigger a resize event"),(0,r.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"width"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},"X dimension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"height"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},"Y dimension"))))),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"style"},"style"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("code",null,"(_renderer",":"," Renderer, _baseTexture",":"," BaseTexture, _glTexture",":"," GLTexture) -",">"," boolean")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," Set the style, optional to override"),(0,r.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_renderer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Renderer")),(0,r.kt)("td",{parentName:"tr",align:null},"yeah, renderer!")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_baseTexture"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"BaseTexture")),(0,r.kt)("td",{parentName:"tr",align:null},"the texture")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_glTexture"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"GLTexture")),(0,r.kt)("td",{parentName:"tr",align:null},"texture instance for this webgl context")))),(0,r.kt)("h4",{id:"returns-1"},"Returns:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"* ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," is success"))))),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"unbind"},"unbind"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("code",null,"(baseTexture",":"," BaseTexture) -",">"," void")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," Unbind to a parent BaseTexture"),(0,r.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"baseTexture"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"BaseTexture")),(0,r.kt)("td",{parentName:"tr",align:null},"Parent texture"))))),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"update"},"update"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("code",null,"() -",">"," void")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," Checks if source width/height was changed, resize can cause extra baseTexture update. Triggers one update in any case.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"upload"},"upload"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("code",null,"(renderer",":"," Renderer, baseTexture",":"," BaseTexture, glTexture",":"," GLTexture) -",">"," boolean")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," Upload the image bitmap resource to GPU."),(0,r.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"renderer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Renderer")),(0,r.kt)("td",{parentName:"tr",align:null},"Renderer to upload to")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"baseTexture"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"BaseTexture")),(0,r.kt)("td",{parentName:"tr",align:null},"BaseTexture for this resource")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"glTexture"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"GLTexture")),(0,r.kt)("td",{parentName:"tr",align:null},"GLTexture to use")))),(0,r.kt)("h4",{id:"returns-2"},"Returns:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"true is success"))))),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"load"},"load"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("code",null,"() -",">"," Promise","<","Resource",">")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," This can be overridden to start preloading a resource or do any other prepare step."),(0,r.kt)("h4",{id:"returns-3"},"Returns:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Promise","<","Resource",">")),(0,r.kt)("td",{parentName:"tr",align:null},"Handle the validate event"))))),(0,r.kt)("hr",null))}d.isMDXComponent=!0}}]);