"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[8123],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=l,d=c["".concat(i,".").concat(m)]||c[m]||k[m]||a;return n?r.createElement(d,p(p({ref:t},s),{},{components:n})):r.createElement(d,p({ref:t},s))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,p=new Array(a);p[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:l,p[1]=o;for(var u=2;u<a;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67559:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=n(87462),l=(n(67294),n(3905));const a={id:"PIXI.groupD8.pixi_math",title:"Namespace: PIXI.groupD8",sidebar_label:"PIXI.groupD8",custom_edit_url:null},p=void 0,o={unversionedId:"api/namespaces/PIXI.groupD8.pixi_math",id:"api/namespaces/PIXI.groupD8.pixi_math",title:"Namespace: PIXI.groupD8",description:"@pixi/math.groupD8",source:"@site/docs/api/namespaces/PIXI.groupD8.pixi_math.mdx",sourceDirName:"api/namespaces",slug:"/api/namespaces/PIXI.groupD8.pixi_math",permalink:"/api/namespaces/PIXI.groupD8.pixi_math",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"PIXI.groupD8.pixi_math",title:"Namespace: PIXI.groupD8",sidebar_label:"PIXI.groupD8",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"PIXI.graphicsUtils",permalink:"/api/namespaces/PIXI.graphicsUtils.pixi_graphics"},next:{title:"PIXI",permalink:"/api/namespaces/PIXI.pixi_core"}},i={},u=[{value:"Members",id:"members",level:2},{value:"E",id:"e",level:3},{value:"MAIN_DIAGONAL",id:"main_diagonal",level:3},{value:"MIRROR_HORIZONTAL",id:"mirror_horizontal",level:3},{value:"MIRROR_VERTICAL",id:"mirror_vertical",level:3},{value:"N",id:"n",level:3},{value:"NE",id:"ne",level:3},{value:"NW",id:"nw",level:3},{value:"REVERSE_DIAGONAL",id:"reverse_diagonal",level:3},{value:"S",id:"s",level:3},{value:"SE",id:"se",level:3},{value:"SW",id:"sw",level:3},{value:"W",id:"w",level:3}],s={toc:u};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{class:"package-name"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"../modules/pixi_math"},"@pixi/math"),".groupD8")),(0,l.kt)("p",null,"Implements the dihedral group D8, which is similar to ",(0,l.kt)("a",{parentName:"p",href:"http://mathworld.wolfram.com/DihedralGroupD4.html"},"group D4"),"; D8 is the same but with diagonals, and it is used for texture rotations."),(0,l.kt)("p",null,"The directions the U- and V- axes after rotation of an angle of ",(0,l.kt)("inlineCode",{parentName:"p"},"a: GD8Constant")," are the vectors ",(0,l.kt)("inlineCode",{parentName:"p"},"(uX(a), uY(a))"),"and ",(0,l.kt)("inlineCode",{parentName:"p"},"(vX(a), vY(a))"),". These aren't necessarily unit vectors."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Origin",":"),"This is the small part of gameofbombs.com portal system. It works."),(0,l.kt)("h2",{id:"members"},"Members"),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"e"},"E"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Default Value"),": ",(0,l.kt)("code",null,"0")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," ","|"," Rotation ","|"," Direction ","|","\n","|"," -------- ","|"," --------- ","|","\n","|"," 0\xb0       ","|"," East      ","|")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"main_diagonal"},"MAIN_DIAGONAL"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Default Value"),": ",(0,l.kt)("code",null,"10")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Reflection about the main diagonal.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"mirror_horizontal"},"MIRROR_HORIZONTAL"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Default Value"),": ",(0,l.kt)("code",null,"12")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Reflection about X-axis.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"mirror_vertical"},"MIRROR_VERTICAL"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Default Value"),": ",(0,l.kt)("code",null,"8")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Reflection about Y-axis.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"n"},"N"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Default Value"),": ",(0,l.kt)("code",null,"6")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," ","|"," Rotation    ","|"," Direction ","|","\n","|"," ----------- ","|"," --------- ","|","\n","|"," ","-","90\xb0/270\xb0\u21bb ","|"," North     ","|")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"ne"},"NE"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Default Value"),": ",(0,l.kt)("code",null,"7")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," ","|"," Rotation    ","|"," Direction ","|","\n","|"," ----------- ","|"," --------- ","|","\n","|"," ","-","45\xb0/315\xb0\u21bb ","|"," Northeast ","|")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"nw"},"NW"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Default Value"),": ",(0,l.kt)("code",null,"5")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," ","|"," Rotation     ","|"," Direction ","|","\n","|"," ------------ ","|"," --------- ","|","\n","|"," ","-","135\xb0/225\xb0\u21bb ","|"," Northwest ","|")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"reverse_diagonal"},"REVERSE_DIAGONAL"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Default Value"),": ",(0,l.kt)("code",null,"14")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Reflection about reverse diagonal.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"s"},"S"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Default Value"),": ",(0,l.kt)("code",null,"2")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," ","|"," Rotation ","|"," Direction ","|","\n","|"," -------- ","|"," --------- ","|","\n","|"," 90\xb0\u21bb     ","|"," South     ","|")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"se"},"SE"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Default Value"),": ",(0,l.kt)("code",null,"1")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," ","|"," Rotation ","|"," Direction ","|","\n","|"," -------- ","|"," --------- ","|","\n","|"," 45\xb0\u21bb     ","|"," Southeast ","|")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"sw"},"SW"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Default Value"),": ",(0,l.kt)("code",null,"3")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," ","|"," Rotation ","|"," Direction ","|","\n","|"," -------- ","|"," --------- ","|","\n","|"," 135\xb0\u21bb    ","|"," Southwest ","|")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"w"},"W"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Default Value"),": ",(0,l.kt)("code",null,"4")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," ","|"," Rotation ","|"," Direction ","|","\n","|"," -------- ","|"," --------- ","|","\n","|"," 180\xb0     ","|"," West      ","|")),(0,l.kt)("hr",null))}c.isMDXComponent=!0}}]);