"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[5282],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>N});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var i=n.createContext({}),u=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):d(d({},e),t)),a},m=function(t){var e=u(t.components);return n.createElement(i.Provider,{value:e},t.children)},k="mdxType",o={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,i=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),k=u(a),s=l,N=k["".concat(i,".").concat(s)]||k[s]||o[s]||r;return a?n.createElement(N,d(d({ref:e},m),{},{components:a})):n.createElement(N,d({ref:e},m))}));function N(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,d=new Array(r);d[0]=s;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p[k]="string"==typeof t?t:l,d[1]=p;for(var u=2;u<r;u++)d[u]=a[u];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},53283:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>d,default:()=>k,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var n=a(87462),l=(a(67294),a(3905));const r={id:"PIXI.Bounds.pixi_display",title:"Class: PIXI.Bounds",sidebar_label:"PIXI.Bounds",custom_edit_url:null},d=void 0,p={unversionedId:"api/classes/PIXI.Bounds.pixi_display",id:"api/classes/PIXI.Bounds.pixi_display",title:"Class: PIXI.Bounds",description:"@pixi/display.Bounds",source:"@site/docs/api/classes/PIXI.Bounds.pixi_display.mdx",sourceDirName:"api/classes",slug:"/api/classes/PIXI.Bounds.pixi_display",permalink:"/api/classes/PIXI.Bounds.pixi_display",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"PIXI.Bounds.pixi_display",title:"Class: PIXI.Bounds",sidebar_label:"PIXI.Bounds",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"PIXI.BlurFilterPass",permalink:"/api/classes/PIXI.BlurFilterPass.pixi_filter_blur"},next:{title:"PIXI.Buffer",permalink:"/api/classes/PIXI.Buffer.pixi_core"}},i={},u=[{value:"Members",id:"members",level:2},{value:"maxX",id:"maxx",level:3},{value:"maxY",id:"maxy",level:3},{value:"minX",id:"minx",level:3},{value:"minY",id:"miny",level:3},{value:"updateID",id:"updateid",level:3},{value:"Methods",id:"methods",level:2},{value:"addBounds",id:"addbounds",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"addBoundsArea",id:"addboundsarea",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"addBoundsMask",id:"addboundsmask",level:3},{value:"Parameters:",id:"parameters-2",level:4},{value:"addBoundsMatrix",id:"addboundsmatrix",level:3},{value:"Parameters:",id:"parameters-3",level:4},{value:"addFrame",id:"addframe",level:3},{value:"Parameters:",id:"parameters-4",level:4},{value:"addFrameMatrix",id:"addframematrix",level:3},{value:"Parameters:",id:"parameters-5",level:4},{value:"addFramePad",id:"addframepad",level:3},{value:"Parameters:",id:"parameters-6",level:4},{value:"addPoint",id:"addpoint",level:3},{value:"Parameters:",id:"parameters-7",level:4},{value:"addPointMatrix",id:"addpointmatrix",level:3},{value:"Parameters:",id:"parameters-8",level:4},{value:"addQuad",id:"addquad",level:3},{value:"Parameters:",id:"parameters-9",level:4},{value:"addVertexData",id:"addvertexdata",level:3},{value:"Parameters:",id:"parameters-10",level:4},{value:"addVertices",id:"addvertices",level:3},{value:"Parameters:",id:"parameters-11",level:4},{value:"addVerticesMatrix",id:"addverticesmatrix",level:3},{value:"Parameters:",id:"parameters-12",level:4},{value:"clear",id:"clear",level:3},{value:"getRectangle",id:"getrectangle",level:3},{value:"Parameters:",id:"parameters-13",level:4},{value:"Returns:",id:"returns",level:4},{value:"isEmpty",id:"isempty",level:3},{value:"Returns:",id:"returns-1",level:4},{value:"pad",id:"pad",level:3},{value:"Parameters:",id:"parameters-14",level:4}],m={toc:u};function k(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("div",{class:"package-name"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"../modules/pixi_display"},"@pixi/display"),".Bounds")),(0,l.kt)("p",null,"'Builder' pattern for bounds rectangles.\nThis could be called an Axis-Aligned Bounding Box. It is not an actual shape. It is a mutable thing; no 'EMPTY' or those kind of problems."),(0,l.kt)("article",null,"### Contructor:",(0,l.kt)("h4",null,(0,l.kt)("code",null,"new PIXI()"))),(0,l.kt)("h2",{id:"members"},"Members"),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"maxx"},"maxX"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Default Value"),": ",(0,l.kt)("code",null,"-Infinity"))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"maxy"},"maxY"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Default Value"),": ",(0,l.kt)("code",null,"-Infinity"))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"minx"},"minX"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Default Value"),": ",(0,l.kt)("code",null,"Infinity"))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"miny"},"minY"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Default Value"),": ",(0,l.kt)("code",null,"Infinity"))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"updateid"},"updateID"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," It is updated to _boundsID of corresponding object to keep bounds in sync with content. Updated from outside, thus public modifier.")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"addbounds"},"addBounds"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"(bounds",":"," Bounds) -",">"," void")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Adds other ",(0,l.kt)("a",{parentName:"p",href:"../classes/PIXI.Bounds.pixi_display"},"PIXI.Bounds"),"."),(0,l.kt)("h4",{id:"parameters"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bounds"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Bounds")),(0,l.kt)("td",{parentName:"tr",align:null},"The Bounds to be added"))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"addboundsarea"},"addBoundsArea"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"(bounds",":"," Bounds, area",":"," Rectangle) -",">"," void")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Adds other Bounds, masked with Rectangle."),(0,l.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bounds"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Bounds")),(0,l.kt)("td",{parentName:"tr",align:null},"TODO")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"area"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Rectangle")),(0,l.kt)("td",{parentName:"tr",align:null},"TODO"))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"addboundsmask"},"addBoundsMask"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"(bounds",":"," Bounds, mask",":"," Bounds) -",">"," void")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Adds other Bounds, masked with Bounds."),(0,l.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bounds"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Bounds")),(0,l.kt)("td",{parentName:"tr",align:null},"The Bounds to be added.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mask"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Bounds")),(0,l.kt)("td",{parentName:"tr",align:null},"TODO"))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"addboundsmatrix"},"addBoundsMatrix"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"(bounds",":"," Bounds, matrix",":"," Matrix) -",">"," void")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Adds other Bounds, multiplied by matrix. Bounds shouldn't be empty."),(0,l.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bounds"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Bounds")),(0,l.kt)("td",{parentName:"tr",align:null},"other bounds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"matrix"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Matrix")),(0,l.kt)("td",{parentName:"tr",align:null},"multiplicator"))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"addframe"},"addFrame"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"(transform",":"," Transform, x0",":"," number, y0",":"," number, x1",":"," number, y1",":"," number) -",">"," void")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Adds sprite frame, transformed."),(0,l.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"transform"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Transform")),(0,l.kt)("td",{parentName:"tr",align:null},"transform to apply")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"x0"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"left X of frame")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"y0"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"top Y of frame")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"x1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"right X of frame")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"y1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"bottom Y of frame"))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"addframematrix"},"addFrameMatrix"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"(matrix",":"," Matrix, x0",":"," number, y0",":"," number, x1",":"," number, y1",":"," number) -",">"," void")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Adds sprite frame, multiplied by matrix"),(0,l.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"matrix"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Matrix")),(0,l.kt)("td",{parentName:"tr",align:null},"matrix to apply")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"x0"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"left X of frame")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"y0"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"top Y of frame")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"x1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"right X of frame")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"y1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"bottom Y of frame"))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"addframepad"},"addFramePad"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"(x0",":"," number, y0",":"," number, x1",":"," number, y1",":"," number, padX",":"," number, padY",":"," number) -",">"," void")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Adds padded frame. (x0, y0) should be strictly less than (x1, y1)"),(0,l.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"x0"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"left X of frame")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"y0"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"top Y of frame")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"x1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"right X of frame")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"y1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"bottom Y of frame")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"padX"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"padding X")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"padY"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"padding Y"))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"addpoint"},"addPoint"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"(point",":"," IPointData) -",">"," void")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," This function should be inlined when its possible."),(0,l.kt)("h4",{id:"parameters-7"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"point"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"IPointData")),(0,l.kt)("td",{parentName:"tr",align:null},"The point to add."))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"addpointmatrix"},"addPointMatrix"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"(matrix",":"," Matrix, point",":"," IPointData) -",">"," void")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Adds a point, after transformed. This should be inlined when its possible."),(0,l.kt)("h4",{id:"parameters-8"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"matrix"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Matrix")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"point"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"IPointData")),(0,l.kt)("td",{parentName:"tr",align:null}))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"addquad"},"addQuad"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"(vertices",":"," Float32Array) -",">"," void")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Adds a quad, not transformed"),(0,l.kt)("h4",{id:"parameters-9"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"vertices"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Float32Array")),(0,l.kt)("td",{parentName:"tr",align:null},"The verts to add."))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"addvertexdata"},"addVertexData"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"(vertexData",":"," Float32Array, beginOffset",":"," number, endOffset",":"," number) -",">"," void")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Adds screen vertices from array"),(0,l.kt)("h4",{id:"parameters-10"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"vertexData"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Float32Array")),(0,l.kt)("td",{parentName:"tr",align:null},"calculated vertices")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"beginOffset"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"begin offset")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"endOffset"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"end offset, excluded"))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"addvertices"},"addVertices"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"(transform",":"," Transform, vertices",":"," Float32Array, beginOffset",":"," number, endOffset",":"," number) -",">"," void")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Add an array of mesh vertices"),(0,l.kt)("h4",{id:"parameters-11"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"transform"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Transform")),(0,l.kt)("td",{parentName:"tr",align:null},"mesh transform")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"vertices"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Float32Array")),(0,l.kt)("td",{parentName:"tr",align:null},"mesh coordinates in array")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"beginOffset"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"begin offset")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"endOffset"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"end offset, excluded"))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"addverticesmatrix"},"addVerticesMatrix"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"(matrix",":"," Matrix, vertices",":"," Float32Array, beginOffset",":"," number, endOffset",":"," number, padX",":"," number, padY",":"," ) -",">"," void")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Add an array of mesh vertices."),(0,l.kt)("h4",{id:"parameters-12"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"matrix"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Matrix")),(0,l.kt)("td",{parentName:"tr",align:null},"mesh matrix")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"vertices"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Float32Array")),(0,l.kt)("td",{parentName:"tr",align:null},"mesh coordinates in array")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"beginOffset"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"begin offset")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"endOffset"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"end offset, excluded")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"padX"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"x padding")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"padY"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"y padding"))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"clear"},"clear"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"() -",">"," void")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Clears the bounds and resets.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"getrectangle"},"getRectangle"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"(rect",":"," Rectangle) -",">"," Rectangle")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Can return Rectangle.EMPTY constant, either construct new rectangle, either use your rectangle It is not guaranteed that it will return tempRect"),(0,l.kt)("h4",{id:"parameters-13"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rect"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Rectangle")),(0,l.kt)("td",{parentName:"tr",align:null},"Temporary object will be used if AABB is not empty")))),(0,l.kt)("h4",{id:"returns"},"Returns:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Rectangle")),(0,l.kt)("td",{parentName:"tr",align:null},"* A rectangle of the bounds"))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"isempty"},"isEmpty"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"() -",">"," boolean")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Checks if bounds are empty."),(0,l.kt)("h4",{id:"returns-1"},"Returns:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"* True if empty."))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"pad"},"pad"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"(paddingX",":"," number, paddingY",":"," ) -",">"," void")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Pads bounds object, making it grow in all directions. If paddingY is omitted, both paddingX and paddingY will be set to paddingX."),(0,l.kt)("h4",{id:"parameters-14"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"paddingX"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"The horizontal padding amount.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"paddingY"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The vertical padding amount."))))),(0,l.kt)("hr",null))}k.isMDXComponent=!0}}]);