"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[4138],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>c});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var o=a.createContext({}),p=function(t){var e=a.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),d=p(r),k=n,c=d["".concat(o,".").concat(k)]||d[k]||m[k]||l;return r?a.createElement(c,i(i({ref:e},s),{},{components:r})):a.createElement(c,i({ref:e},s))}));function c(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,i=new Array(l);i[0]=k;var u={};for(var o in e)hasOwnProperty.call(e,o)&&(u[o]=e[o]);u.originalType=t,u[d]="string"==typeof t?t:n,i[1]=u;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},67105:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const l={id:"PIXI.Geometry.pixi_core",title:"Class: PIXI.Geometry",sidebar_label:"PIXI.Geometry",custom_edit_url:null},i=void 0,u={unversionedId:"api/classes/PIXI.Geometry.pixi_core",id:"api/classes/PIXI.Geometry.pixi_core",title:"Class: PIXI.Geometry",description:"@pixi/core.Geometry",source:"@site/docs/api/classes/PIXI.Geometry.pixi_core.mdx",sourceDirName:"api/classes",slug:"/api/classes/PIXI.Geometry.pixi_core",permalink:"/api/classes/PIXI.Geometry.pixi_core",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"PIXI.Geometry.pixi_core",title:"Class: PIXI.Geometry",sidebar_label:"PIXI.Geometry",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"PIXI.GenerateTextureSystem",permalink:"/api/classes/PIXI.GenerateTextureSystem.pixi_core"},next:{title:"PIXI.GeometrySystem",permalink:"/api/classes/PIXI.GeometrySystem.pixi_core"}},o={},p=[{value:"Constructor:",id:"constructor",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Members",id:"members",level:2},{value:"glVertexArrayObjects",id:"glvertexarrayobjects",level:3},{value:"instanceCount",id:"instancecount",level:3},{value:"instanced",id:"instanced",level:3},{value:"refCount",id:"refcount",level:3},{value:"Methods",id:"methods",level:2},{value:"merge",id:"merge",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"Returns:",id:"returns",level:4},{value:"addAttribute",id:"addattribute",level:3},{value:"Parameters:",id:"parameters-2",level:4},{value:"Returns:",id:"returns-1",level:4},{value:"addIndex",id:"addindex",level:3},{value:"Parameters:",id:"parameters-3",level:4},{value:"Returns:",id:"returns-2",level:4},{value:"clone",id:"clone",level:3},{value:"Returns:",id:"returns-3",level:4},{value:"destroy",id:"destroy",level:3},{value:"dispose",id:"dispose",level:3},{value:"getAttribute",id:"getattribute",level:3},{value:"Parameters:",id:"parameters-4",level:4},{value:"Returns:",id:"returns-4",level:4},{value:"getBuffer",id:"getbuffer",level:3},{value:"Parameters:",id:"parameters-5",level:4},{value:"Returns:",id:"returns-5",level:4},{value:"getIndex",id:"getindex",level:3},{value:"Returns:",id:"returns-6",level:4},{value:"getSize",id:"getsize",level:3},{value:"Returns:",id:"returns-7",level:4},{value:"interleave",id:"interleave",level:3},{value:"Returns:",id:"returns-8",level:4}],s={toc:p};function d(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("div",{class:"package-name"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"../modules/pixi_core"},"@pixi/core"),".Geometry")),(0,n.kt)("p",null,"The Geometry represents a model. It consists of two components",":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"GeometryStyle - The structure of the model such as the attributes layout"),(0,n.kt)("li",{parentName:"ul"},"GeometryData - the data of the model - this consists of buffers. This can include anything from positions, uvs, normals, colors etc.")),(0,n.kt)("p",null,"Geometry can be defined without passing in a style or data if required (thats how I prefer!)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"}," import { Geometry } from 'pixi.js';\n\n const geometry = new Geometry();\n\n geometry.addAttribute('positions', [0, 0, 100, 0, 100, 100, 0, 100], 2);\n geometry.addAttribute('uvs', [0, 0, 1, 0, 1, 1, 0, 1], 2);\n geometry.addIndex([0, 1, 2, 1, 3, 2]);\n")),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"constructor"},"Constructor:"),(0,n.kt)("h4",null,(0,n.kt)("code",null,"new PIXI.Geometry(buffers: Array<Buffer>, attributes: { [key: string]: Attribute }) ")),(0,n.kt)("h4",{id:"parameters"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"buffers"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"Array","<","Buffer",">")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null)),(0,n.kt)("td",{parentName:"tr",align:null},"An array of buffers. optional.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"attributes"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"{"," ","[key",":"," string]",":"," Attribute ","}")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null)),(0,n.kt)("td",{parentName:"tr",align:null},"Of the geometry, optional structure of the attributes layout"))))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"members"},"Members"),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"glvertexarrayobjects"},"glVertexArrayObjects"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Type:")," ",(0,n.kt)("code",null,"object")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Description:")," A map of renderer IDs to webgl VAOs")),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"instancecount"},"instanceCount"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Type:")," ",(0,n.kt)("code",null,"number")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Default Value"),": ",(0,n.kt)("code",null,"1")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Description:")," Number of instances in this geometry, pass it to ",(0,n.kt)("inlineCode",{parentName:"p"},"GeometrySystem.draw()"),".")),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"instanced"},"instanced"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Type:")," ",(0,n.kt)("code",null,"boolean")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Description:")," Whether the geometry is instanced.")),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"refcount"},"refCount"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Type:")," ",(0,n.kt)("code",null,"number")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Description:")," Count of existing (not destroyed) meshes that reference this geometry.")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"merge"},"merge"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Type:")," ",(0,n.kt)("code",null,"(geometries",":"," Array","<","Geometry",">",") -",">"," Geometry")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Description:")," Merges an array of geometries into a new single one.\nGeometry attribute styles must match for this operation to work."),(0,n.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"geometries"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"Array","<","Geometry",">")),(0,n.kt)("td",{parentName:"tr",align:null},"array of geometries to merge")))),(0,n.kt)("h4",{id:"returns"},"Returns:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"Geometry")),(0,n.kt)("td",{parentName:"tr",align:null},"* Shiny new geometry!"))))),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"addattribute"},"addAttribute"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Type:")," ",(0,n.kt)("code",null,"(id",":"," string, buffer",":"," PIXI.Buffer ","|"," Array","<","number",">",", size",":"," number, normalized",":"," boolean, type",":"," TYPES, stride",":"," number, start",":"," number, instance",":"," boolean) -",">"," this")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Description:")," Adds an attribute to the geometry Note",":"," ",(0,n.kt)("inlineCode",{parentName:"p"},"stride")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"start")," should be ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined")," if you dont know them, not 0!"),(0,n.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"string")),(0,n.kt)("td",{parentName:"tr",align:null},"the name of the attribute (matching up to a shader)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"buffer"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"PIXI.Buffer ","|"," Array","<","number",">")),(0,n.kt)("td",{parentName:"tr",align:null},"the buffer that holds the data of the attribute . You can also provide an Array and a buffer will be created from it.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"size"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"number")),(0,n.kt)("td",{parentName:"tr",align:null},"the size of the attribute. If you have 2 floats per vertex (eg position x and y) this would be 2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"normalized"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"boolean")),(0,n.kt)("td",{parentName:"tr",align:null},"should the data be normalized.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"type"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"TYPES")),(0,n.kt)("td",{parentName:"tr",align:null},"what type of number is the attribute. Check ",(0,n.kt)("a",{parentName:"td",href:"../enums/PIXI.TYPES.pixi_constants"},"PIXI.TYPES")," to see the ones available")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"stride"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"number")),(0,n.kt)("td",{parentName:"tr",align:null},"How far apart, in bytes, the start of each value is. (used for interleaving data)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"start"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"number")),(0,n.kt)("td",{parentName:"tr",align:null},"How far into the array to start reading values (used for interleaving data)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"instance"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"boolean")),(0,n.kt)("td",{parentName:"tr",align:null},"Instancing flag")))),(0,n.kt)("h4",{id:"returns-1"},"Returns:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"this")),(0,n.kt)("td",{parentName:"tr",align:null},"* Returns self, useful for chaining."))))),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"addindex"},"addIndex"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Type:")," ",(0,n.kt)("code",null,"(buffer",":"," PIXI.Buffer ","|"," Array","<","number",">",") -",">"," Geometry")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Description:")," Adds an index buffer to the geometry The index buffer contains integers, three for each triangle in the geometry, which reference the various attribute buffers (position, colour, UV coordinates, other UV coordinates, normal, \u2026). There is only ONE index buffer."),(0,n.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"buffer"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"PIXI.Buffer ","|"," Array","<","number",">")),(0,n.kt)("td",{parentName:"tr",align:null},"The buffer that holds the data of the index buffer. You can also provide an Array and a buffer will be created from it.")))),(0,n.kt)("h4",{id:"returns-2"},"Returns:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"Geometry")),(0,n.kt)("td",{parentName:"tr",align:null},"* Returns self, useful for chaining."))))),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"clone"},"clone"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Type:")," ",(0,n.kt)("code",null,"() -",">"," Geometry")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Description:")," Returns a clone of the geometry."),(0,n.kt)("h4",{id:"returns-3"},"Returns:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"Geometry")),(0,n.kt)("td",{parentName:"tr",align:null},"* A new clone of this geometry."))))),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"destroy"},"destroy"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Type:")," ",(0,n.kt)("code",null,"() -",">"," void")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Description:")," Destroys the geometry.")),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"dispose"},"dispose"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Type:")," ",(0,n.kt)("code",null,"() -",">"," void")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Description:")," Disposes WebGL resources that are connected to this geometry.")),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"getattribute"},"getAttribute"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Type:")," ",(0,n.kt)("code",null,"(id",":"," string) -",">"," Attribute")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Description:")," Returns the requested attribute."),(0,n.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"string")),(0,n.kt)("td",{parentName:"tr",align:null},"The name of the attribute required")))),(0,n.kt)("h4",{id:"returns-4"},"Returns:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"Attribute")),(0,n.kt)("td",{parentName:"tr",align:null},"* The attribute requested."))))),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"getbuffer"},"getBuffer"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Type:")," ",(0,n.kt)("code",null,"(id",":"," string) -",">"," Buffer")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Description:")," Returns the requested buffer."),(0,n.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"string")),(0,n.kt)("td",{parentName:"tr",align:null},"The name of the buffer required.")))),(0,n.kt)("h4",{id:"returns-5"},"Returns:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"Buffer")),(0,n.kt)("td",{parentName:"tr",align:null},"* The buffer requested."))))),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"getindex"},"getIndex"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Type:")," ",(0,n.kt)("code",null,"() -",">"," Buffer")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Description:")," Returns the index buffer"),(0,n.kt)("h4",{id:"returns-6"},"Returns:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"Buffer")),(0,n.kt)("td",{parentName:"tr",align:null},"* The index buffer."))))),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"getsize"},"getSize"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Type:")," ",(0,n.kt)("code",null,"() -",">"," number")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Description:")," Get the size of the geometries, in vertices."),(0,n.kt)("h4",{id:"returns-7"},"Returns:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"number")),(0,n.kt)("td",{parentName:"tr",align:null}))))),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"interleave"},"interleave"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Type:")," ",(0,n.kt)("code",null,"() -",">"," Geometry")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Description:")," This function modifies the structure so that all current attributes become interleaved into a single buffer This can be useful if your model remains static as it offers a little performance boost"),(0,n.kt)("h4",{id:"returns-8"},"Returns:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"Geometry")),(0,n.kt)("td",{parentName:"tr",align:null},"* Returns self, useful for chaining."))))),(0,n.kt)("hr",null))}d.isMDXComponent=!0}}]);