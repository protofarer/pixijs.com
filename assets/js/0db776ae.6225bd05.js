"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[5521],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),c=a,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||l;return n?r.createElement(k,o(o({ref:t},d),{},{components:n})):r.createElement(k,o({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},90433:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={id:"PIXI.CanvasContextSystem.pixi_canvas_renderer",title:"Class: PIXI.CanvasContextSystem",sidebar_label:"PIXI.CanvasContextSystem",custom_edit_url:null},o=void 0,i={unversionedId:"api/classes/PIXI.CanvasContextSystem.pixi_canvas_renderer",id:"api/classes/PIXI.CanvasContextSystem.pixi_canvas_renderer",title:"Class: PIXI.CanvasContextSystem",description:"@pixi/canvas-renderer.CanvasContextSystem",source:"@site/docs/api/classes/PIXI.CanvasContextSystem.pixi_canvas_renderer.mdx",sourceDirName:"api/classes",slug:"/api/classes/PIXI.CanvasContextSystem.pixi_canvas_renderer",permalink:"/api/classes/PIXI.CanvasContextSystem.pixi_canvas_renderer",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"PIXI.CanvasContextSystem.pixi_canvas_renderer",title:"Class: PIXI.CanvasContextSystem",sidebar_label:"PIXI.CanvasContextSystem",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"PIXI.Cache",permalink:"/api/classes/PIXI.Cache.pixi_assets"},next:{title:"PIXI.CanvasExtract",permalink:"/api/classes/PIXI.CanvasExtract.pixi_canvas_extract"}},s={},p=[{value:"Constructor:",id:"constructor",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Members",id:"members",level:2},{value:"_projTransform",id:"_projtransform",level:3},{value:"activeContext",id:"activecontext",level:3},{value:"blendModes",id:"blendmodes",level:3},{value:"rootContext",id:"rootcontext",level:3},{value:"smoothProperty",id:"smoothproperty",level:3},{value:"Methods",id:"methods",level:2},{value:"clear",id:"clear",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"init",id:"init",level:3},{value:"invalidateBlendMode",id:"invalidateblendmode",level:3},{value:"setBlendMode",id:"setblendmode",level:3},{value:"Parameters:",id:"parameters-2",level:4},{value:"setContextTransform",id:"setcontexttransform",level:3},{value:"Parameters:",id:"parameters-3",level:4}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{class:"package-name"},(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../modules/pixi_canvas_renderer"},"@pixi/canvas-renderer"),".CanvasContextSystem")),(0,a.kt)("p",null,"System that manages the canvas ",(0,a.kt)("inlineCode",{parentName:"p"},"2d")," contexts"),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"constructor"},"Constructor:"),(0,a.kt)("h4",null,(0,a.kt)("code",null,"new PIXI.CanvasContextSystem(renderer: CanvasRenderer) ")),(0,a.kt)("h4",{id:"parameters"},"Parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"renderer"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"CanvasRenderer")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null)),(0,a.kt)("td",{parentName:"tr",align:null},"A reference to the current renderer"))))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"members"},"Members"),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"_projtransform"},"_projTransform"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"Matrix")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Default Value"),": ",(0,a.kt)("code",null,"undefined")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," Projection transform, passed in render() stored here")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"activecontext"},"activeContext"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"CrossPlatformCanvasRenderingContext2D")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," The currently active canvas 2d context (could change with renderTextures)")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"blendmodes"},"blendModes"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"string[]")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," Tracks the blend modes useful for this renderer.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"rootcontext"},"rootContext"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"CrossPlatformCanvasRenderingContext2D")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," The root canvas 2d context that everything is drawn with.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"smoothproperty"},"smoothProperty"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"SmoothingEnabledProperties")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Default Value"),": ",(0,a.kt)("code",null,'"imageSmoothingEnabled"')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," The canvas property used to set the canvas smoothing property.")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"clear"},"clear"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"(clearColor",":"," string, alpha",":"," number) -",">"," void")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," Clear the canvas of renderer."),(0,a.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"clearColor"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Clear the canvas with this color, except the canvas is transparent.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"alpha"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"number")),(0,a.kt)("td",{parentName:"tr",align:null},"Alpha to apply to the background fill color."))))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"init"},"init"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"() -",">"," void")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," initiates the system")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"invalidateblendmode"},"invalidateBlendMode"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"() -",">"," void")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," Checks if blend mode has changed.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"setblendmode"},"setBlendMode"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"(blendMode",":"," number, readyForOuterBlend",":"," boolean) -",">"," void")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," Sets the blend mode of the renderer."),(0,a.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"blendMode"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"number")),(0,a.kt)("td",{parentName:"tr",align:null},"See ",(0,a.kt)("a",{parentName:"td",href:"../enums/PIXI.BLEND_MODES.pixi_constants"},"PIXI.BLEND_MODES")," for valid values.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"readyForOuterBlend"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},"Some blendModes are dangerous, they affect outer space of sprite. Pass ",(0,a.kt)("inlineCode",{parentName:"td"},"true")," only if you are ready to use them."))))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"setcontexttransform"},"setContextTransform"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"(transform",":"," Matrix, roundPixels",":"," boolean, localResolution",":"," number) -",">"," void")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," Sets matrix of context. called only from render() methods takes care about resolution"),(0,a.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"transform"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"Matrix")),(0,a.kt)("td",{parentName:"tr",align:null},"world matrix of current element")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"roundPixels"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},"whether to round (tx,ty) coords")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"localResolution"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"number")),(0,a.kt)("td",{parentName:"tr",align:null},"If specified, used instead of ",(0,a.kt)("inlineCode",{parentName:"td"},"renderer.resolution")," for local scaling"))))),(0,a.kt)("hr",null))}u.isMDXComponent=!0}}]);