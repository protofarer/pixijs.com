"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[5659],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>c});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function u(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},s="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,o=u(t,["components","mdxType","originalType","parentName"]),s=d(a),m=r,c=s["".concat(p,".").concat(m)]||s[m]||k[m]||l;return a?n.createElement(c,i(i({ref:e},o),{},{components:a})):n.createElement(c,i({ref:e},o))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=m;var u={};for(var p in e)hasOwnProperty.call(e,p)&&(u[p]=e[p]);u.originalType=t,u[s]="string"==typeof t?t:r,i[1]=u;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},82662:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={id:"PIXI.QuadUv.pixi_core",title:"Class: PIXI.QuadUv",sidebar_label:"PIXI.QuadUv",custom_edit_url:null},i=void 0,u={unversionedId:"api/classes/PIXI.QuadUv.pixi_core",id:"api/classes/PIXI.QuadUv.pixi_core",title:"Class: PIXI.QuadUv",description:"@pixi/core.QuadUv",source:"@site/docs/api/classes/PIXI.QuadUv.pixi_core.mdx",sourceDirName:"api/classes",slug:"/api/classes/PIXI.QuadUv.pixi_core",permalink:"/api/classes/PIXI.QuadUv.pixi_core",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"PIXI.QuadUv.pixi_core",title:"Class: PIXI.QuadUv",sidebar_label:"PIXI.QuadUv",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"PIXI.Quad",permalink:"/api/classes/PIXI.Quad.pixi_core"},next:{title:"PIXI.Rectangle",permalink:"/api/classes/PIXI.Rectangle.pixi_math"}},p={},d=[{value:"Extends",id:"extends",level:2},{value:"Members",id:"members",level:2},{value:"glVertexArrayObjects",id:"glvertexarrayobjects",level:3},{value:"instanceCount",id:"instancecount",level:3},{value:"instanced",id:"instanced",level:3},{value:"refCount",id:"refcount",level:3},{value:"uvs",id:"uvs",level:3},{value:"vertices",id:"vertices",level:3},{value:"Methods",id:"methods",level:2},{value:"addAttribute",id:"addattribute",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Returns:",id:"returns",level:4},{value:"addIndex",id:"addindex",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"Returns:",id:"returns-1",level:4},{value:"clone",id:"clone",level:3},{value:"Returns:",id:"returns-2",level:4},{value:"destroy",id:"destroy",level:3},{value:"dispose",id:"dispose",level:3},{value:"getAttribute",id:"getattribute",level:3},{value:"Parameters:",id:"parameters-2",level:4},{value:"Returns:",id:"returns-3",level:4},{value:"getBuffer",id:"getbuffer",level:3},{value:"Parameters:",id:"parameters-3",level:4},{value:"Returns:",id:"returns-4",level:4},{value:"getIndex",id:"getindex",level:3},{value:"Returns:",id:"returns-5",level:4},{value:"getSize",id:"getsize",level:3},{value:"Returns:",id:"returns-6",level:4},{value:"interleave",id:"interleave",level:3},{value:"Returns:",id:"returns-7",level:4},{value:"invalidate",id:"invalidate",level:3},{value:"Returns:",id:"returns-8",level:4},{value:"map",id:"map",level:3},{value:"Parameters:",id:"parameters-4",level:4},{value:"Returns:",id:"returns-9",level:4}],o={toc:d};function s(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("div",{class:"package-name"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../modules/pixi_core"},"@pixi/core"),".QuadUv")),(0,r.kt)("p",null,"Helper class to create a quad with uvs like in v4"),(0,r.kt)("article",null,"### Contructor:",(0,r.kt)("h4",null,(0,r.kt)("code",null,"new PIXI()"))),(0,r.kt)("h2",{id:"extends"},"Extends"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../classes/PIXI.Geometry.pixi_core"},"PIXI.Geometry"))),(0,r.kt)("h2",{id:"members"},"Members"),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"glvertexarrayobjects"},"glVertexArrayObjects"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("code",null,"object")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," A map of renderer IDs to webgl VAOs")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"instancecount"},"instanceCount"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("code",null,"number")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Default Value"),": ",(0,r.kt)("code",null,"1")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," Number of instances in this geometry, pass it to ",(0,r.kt)("inlineCode",{parentName:"p"},"GeometrySystem.draw()"),".")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"instanced"},"instanced"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("code",null,"boolean")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," Whether the geometry is instanced.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"refcount"},"refCount"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("code",null,"number")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," Count of existing (not destroyed) meshes that reference this geometry.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"uvs"},"uvs"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("code",null,"Float32Array")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," The Uvs of the quad.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"vertices"},"vertices"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("code",null,"Float32Array")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," An array of vertices.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"addattribute"},"addAttribute"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("code",null,"(id",":"," string, buffer",":"," PIXI.Buffer ","|"," Array","<","number",">",", size",":"," number, normalized",":"," boolean, type",":"," TYPES, stride",":"," number, start",":"," number, instance",":"," boolean) -",">"," this")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," Adds an attribute to the geometry Note",":"," ",(0,r.kt)("inlineCode",{parentName:"p"},"stride")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"start")," should be ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," if you dont know them, not 0!"),(0,r.kt)("h4",{id:"parameters"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"the name of the attribute (matching up to a shader)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"buffer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"PIXI.Buffer ","|"," Array","<","number",">")),(0,r.kt)("td",{parentName:"tr",align:null},"the buffer that holds the data of the attribute . You can also provide an Array and a buffer will be created from it.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"size"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},"the size of the attribute. If you have 2 floats per vertex (eg position x and y) this would be 2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"normalized"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"should the data be normalized.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"TYPES")),(0,r.kt)("td",{parentName:"tr",align:null},"what type of number is the attribute. Check ",(0,r.kt)("a",{parentName:"td",href:"../enums/PIXI.TYPES.pixi_constants"},"PIXI.TYPES")," to see the ones available")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stride"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},"How far apart, in bytes, the start of each value is. (used for interleaving data)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"start"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},"How far into the array to start reading values (used for interleaving data)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"instance"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"Instancing flag")))),(0,r.kt)("h4",{id:"returns"},"Returns:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"this")),(0,r.kt)("td",{parentName:"tr",align:null},"* Returns self, useful for chaining."))))),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"addindex"},"addIndex"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("code",null,"(buffer",":"," PIXI.Buffer ","|"," Array","<","number",">",") -",">"," Geometry")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," Adds an index buffer to the geometry The index buffer contains integers, three for each triangle in the geometry, which reference the various attribute buffers (position, colour, UV coordinates, other UV coordinates, normal, \u2026). There is only ONE index buffer."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"buffer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"PIXI.Buffer ","|"," Array","<","number",">")),(0,r.kt)("td",{parentName:"tr",align:null},"The buffer that holds the data of the index buffer. You can also provide an Array and a buffer will be created from it.")))),(0,r.kt)("h4",{id:"returns-1"},"Returns:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Geometry")),(0,r.kt)("td",{parentName:"tr",align:null},"* Returns self, useful for chaining."))))),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"clone"},"clone"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("code",null,"() -",">"," Geometry")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," Returns a clone of the geometry."),(0,r.kt)("h4",{id:"returns-2"},"Returns:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Geometry")),(0,r.kt)("td",{parentName:"tr",align:null},"* A new clone of this geometry."))))),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"destroy"},"destroy"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("code",null,"() -",">"," void")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," Destroys the geometry.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"dispose"},"dispose"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("code",null,"() -",">"," void")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," Disposes WebGL resources that are connected to this geometry.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"getattribute"},"getAttribute"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("code",null,"(id",":"," string) -",">"," Attribute")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," Returns the requested attribute."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the attribute required")))),(0,r.kt)("h4",{id:"returns-3"},"Returns:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Attribute")),(0,r.kt)("td",{parentName:"tr",align:null},"* The attribute requested."))))),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"getbuffer"},"getBuffer"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("code",null,"(id",":"," string) -",">"," Buffer")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," Returns the requested buffer."),(0,r.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the buffer required.")))),(0,r.kt)("h4",{id:"returns-4"},"Returns:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Buffer")),(0,r.kt)("td",{parentName:"tr",align:null},"* The buffer requested."))))),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"getindex"},"getIndex"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("code",null,"() -",">"," Buffer")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," Returns the index buffer"),(0,r.kt)("h4",{id:"returns-5"},"Returns:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Buffer")),(0,r.kt)("td",{parentName:"tr",align:null},"* The index buffer."))))),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"getsize"},"getSize"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("code",null,"() -",">"," number")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," Get the size of the geometries, in vertices."),(0,r.kt)("h4",{id:"returns-6"},"Returns:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null}))))),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"interleave"},"interleave"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("code",null,"() -",">"," Geometry")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," This function modifies the structure so that all current attributes become interleaved into a single buffer This can be useful if your model remains static as it offers a little performance boost"),(0,r.kt)("h4",{id:"returns-7"},"Returns:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Geometry")),(0,r.kt)("td",{parentName:"tr",align:null},"* Returns self, useful for chaining."))))),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"invalidate"},"invalidate"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("code",null,"() -",">"," this")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," Legacy upload method, just marks buffers dirty."),(0,r.kt)("h4",{id:"returns-8"},"Returns:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"this")),(0,r.kt)("td",{parentName:"tr",align:null},"* Returns itself."))))),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"map"},"map"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("code",null,"(targetTextureFrame",":"," Rectangle, destinationFrame",":"," Rectangle) -",">"," this")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," Maps two Rectangle to the quad."),(0,r.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"targetTextureFrame"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Rectangle")),(0,r.kt)("td",{parentName:"tr",align:null},"The first rectangle")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"destinationFrame"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Rectangle")),(0,r.kt)("td",{parentName:"tr",align:null},"The second rectangle")))),(0,r.kt)("h4",{id:"returns-9"},"Returns:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"this")),(0,r.kt)("td",{parentName:"tr",align:null},"* Returns itself."))))),(0,r.kt)("hr",null))}s.isMDXComponent=!0}}]);