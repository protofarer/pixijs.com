"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[726],{3905:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>f});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=r.createContext({}),i=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},k=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},o="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,p=e.parentName,k=m(e,["components","mdxType","originalType","parentName"]),o=i(a),s=l,f=o["".concat(p,".").concat(s)]||o[s]||d[s]||n;return a?r.createElement(f,u(u({ref:t},k),{},{components:a})):r.createElement(f,u({ref:t},k))}));function f(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,u=new Array(n);u[0]=s;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m[o]="string"==typeof e?e:l,u[1]=m;for(var i=2;i<n;i++)u[i]=a[i];return r.createElement.apply(null,u)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},49526:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>o,frontMatter:()=>n,metadata:()=>m,toc:()=>i});var r=a(87462),l=(a(67294),a(3905));const n={id:"PIXI.FramebufferSystem.pixi_core",title:"Class: PIXI.FramebufferSystem",sidebar_label:"PIXI.FramebufferSystem",custom_edit_url:null},u=void 0,m={unversionedId:"api/classes/PIXI.FramebufferSystem.pixi_core",id:"api/classes/PIXI.FramebufferSystem.pixi_core",title:"Class: PIXI.FramebufferSystem",description:"@pixi/core.FramebufferSystem",source:"@site/docs/api/classes/PIXI.FramebufferSystem.pixi_core.mdx",sourceDirName:"api/classes",slug:"/api/classes/PIXI.FramebufferSystem.pixi_core",permalink:"/api/classes/PIXI.FramebufferSystem.pixi_core",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"PIXI.FramebufferSystem.pixi_core",title:"Class: PIXI.FramebufferSystem",sidebar_label:"PIXI.FramebufferSystem",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"PIXI.Framebuffer",permalink:"/api/classes/PIXI.Framebuffer.pixi_core"},next:{title:"PIXI.GLFramebuffer",permalink:"/api/classes/PIXI.GLFramebuffer.pixi_core"}},p={},i=[{value:"Constructor:",id:"constructor",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Members",id:"members",level:2},{value:"managedFramebuffers",id:"managedframebuffers",level:3},{value:"size",id:"size",level:3},{value:"unknownFramebuffer",id:"unknownframebuffer",level:3},{value:"Methods",id:"methods",level:2},{value:"bind",id:"bind",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"blit",id:"blit",level:3},{value:"Parameters:",id:"parameters-2",level:4},{value:"clear",id:"clear",level:3},{value:"Parameters:",id:"parameters-3",level:4},{value:"disposeAll",id:"disposeall",level:3},{value:"Parameters:",id:"parameters-4",level:4},{value:"disposeFramebuffer",id:"disposeframebuffer",level:3},{value:"Parameters:",id:"parameters-5",level:4},{value:"reset",id:"reset",level:3},{value:"setViewport",id:"setviewport",level:3},{value:"Parameters:",id:"parameters-6",level:4},{value:"canMultisampleFramebuffer",id:"canmultisampleframebuffer",level:3},{value:"Parameters:",id:"parameters-7",level:4},{value:"Returns:",id:"returns",level:4},{value:"contextChange",id:"contextchange",level:3},{value:"detectSamples",id:"detectsamples",level:3},{value:"Parameters:",id:"parameters-8",level:4},{value:"Returns:",id:"returns-1",level:4},{value:"initFramebuffer",id:"initframebuffer",level:3},{value:"Parameters:",id:"parameters-9",level:4},{value:"Returns:",id:"returns-2",level:4},{value:"resizeFramebuffer",id:"resizeframebuffer",level:3},{value:"Parameters:",id:"parameters-10",level:4},{value:"updateFramebuffer",id:"updateframebuffer",level:3},{value:"Parameters:",id:"parameters-11",level:4}],k={toc:i};function o(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{class:"package-name"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"../modules/pixi_core"},"@pixi/core"),".FramebufferSystem")),(0,l.kt)("p",null,"System plugin to the renderer to manage framebuffers."),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"constructor"},"Constructor:"),(0,l.kt)("h4",null,(0,l.kt)("code",null,"new PIXI.FramebufferSystem(renderer: Renderer) ")),(0,l.kt)("h4",{id:"parameters"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"renderer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Renderer")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null)),(0,l.kt)("td",{parentName:"tr",align:null},"The renderer this System works for."))))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"members"},"Members"),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"managedframebuffers"},"managedFramebuffers"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"Array","<","Framebuffer",">")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," A list of managed framebuffers.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"size"},"size"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"{"," x ",":"," number, y ",":"," number, width ",":"," number, height ",":"," number ","}")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Get the size of the current width and height. Returns object with ",(0,l.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"height")," values.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"unknownframebuffer"},"unknownFramebuffer"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"Framebuffer")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Framebuffer value that shows that we don't know what is bound.")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"bind"},"bind"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"(framebuffer",":"," Framebuffer, frame",":"," Rectangle, mipLevel",":"," number) -",">"," void")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Bind a framebuffer."),(0,l.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"framebuffer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Framebuffer")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"frame"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Rectangle")),(0,l.kt)("td",{parentName:"tr",align:null},"frame, default is framebuffer size")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mipLevel"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"optional mip level to set on the framebuffer - defaults to 0"))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"blit"},"blit"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"(framebuffer",":"," Framebuffer, sourcePixels",":"," Rectangle, destPixels",":"," Rectangle) -",">"," void")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Only works with WebGL2\nblits framebuffer to another of the same or bigger size after that target framebuffer is bound"),(0,l.kt)("p",null,"Fails with WebGL warning if blits multisample framebuffer to different size"),(0,l.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"framebuffer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Framebuffer")),(0,l.kt)("td",{parentName:"tr",align:null},'by default it blits "into itself", from renderBuffer to texture.')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sourcePixels"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Rectangle")),(0,l.kt)("td",{parentName:"tr",align:null},"source rectangle in pixels")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"destPixels"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Rectangle")),(0,l.kt)("td",{parentName:"tr",align:null},"dest rectangle in pixels, assumed to be the same as sourcePixels"))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"clear"},"clear"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"(r",":"," number, g",":"," number, b",":"," number, a",":"," number, mask",":"," PIXI.BUFFER_BITS) -",">"," void")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Clear the color of the context"),(0,l.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"r"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"Red value from 0 to 1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"g"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"Green value from 0 to 1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"b"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"Blue value from 0 to 1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"a"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"Alpha value from 0 to 1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mask"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"PIXI.BUFFER_BITS")),(0,l.kt)("td",{parentName:"tr",align:null},"Bitwise OR of masks that indicate the buffers to be cleared, by default COLOR and DEPTH buffers."))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"disposeall"},"disposeAll"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"(contextLost",":"," boolean) -",">"," void")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Disposes all framebuffers, but not textures bound to them."),(0,l.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"contextLost"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"If context was lost, we suppress all delete function calls"))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"disposeframebuffer"},"disposeFramebuffer"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"(framebuffer",":"," Framebuffer, contextLost",":"," boolean) -",">"," void")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Disposes framebuffer."),(0,l.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"framebuffer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Framebuffer")),(0,l.kt)("td",{parentName:"tr",align:null},"framebuffer that has to be disposed of")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"contextLost"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"If context was lost, we suppress all delete function calls"))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"reset"},"reset"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"() -",">"," void")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Resets framebuffer stored state, binds screen framebuffer. Should be called before renderTexture reset().")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"setviewport"},"setViewport"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"(x",":"," number, y",":"," number, width",":"," number, height",":"," number) -",">"," void")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Set the WebGLRenderingContext's viewport."),(0,l.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"X position of viewport")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"y"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"Y position of viewport")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"width"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"Width of viewport")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"height"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"Height of viewport"))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"canmultisampleframebuffer"},"canMultisampleFramebuffer"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"(framebuffer",":"," Framebuffer) -",">"," boolean")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Returns true if the frame buffer can be multisampled."),(0,l.kt)("h4",{id:"parameters-7"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"framebuffer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Framebuffer")),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"returns"},"Returns:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null}))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"contextchange"},"contextChange"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"() -",">"," void")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Sets up the renderer context and necessary buffers.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"detectsamples"},"detectSamples"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"(samples",":"," MSAA_QUALITY) -",">"," MSAA_QUALITY")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Detects number of samples that is not more than a param but as close to it as possible"),(0,l.kt)("h4",{id:"parameters-8"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"samples"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"MSAA_QUALITY")),(0,l.kt)("td",{parentName:"tr",align:null},"number of samples")))),(0,l.kt)("h4",{id:"returns-1"},"Returns:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"MSAA_QUALITY")),(0,l.kt)("td",{parentName:"tr",align:null},"* recommended number of samples"))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"initframebuffer"},"initFramebuffer"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"(framebuffer",":"," Framebuffer) -",">"," GLFramebuffer")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Initialize framebuffer for this context"),(0,l.kt)("h4",{id:"parameters-9"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"framebuffer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Framebuffer")),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"returns-2"},"Returns:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"GLFramebuffer")),(0,l.kt)("td",{parentName:"tr",align:null},"* created GLFramebuffer"))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"resizeframebuffer"},"resizeFramebuffer"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"(framebuffer",":"," Framebuffer) -",">"," void")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Resize the framebuffer"),(0,l.kt)("h4",{id:"parameters-10"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"framebuffer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Framebuffer")),(0,l.kt)("td",{parentName:"tr",align:null}))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"updateframebuffer"},"updateFramebuffer"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"(framebuffer",":"," Framebuffer, mipLevel",":"," number) -",">"," void")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Update the framebuffer"),(0,l.kt)("h4",{id:"parameters-11"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"framebuffer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Framebuffer")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mipLevel"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null}))))),(0,l.kt)("hr",null))}o.isMDXComponent=!0}}]);