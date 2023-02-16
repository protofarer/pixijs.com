"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[4254],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),u=a,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},36909:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const o={hide_table_of_contents:!0},i="Colored Triangle",s={unversionedId:"examples/mesh-and-shaders/triangle-color",id:"examples/mesh-and-shaders/triangle-color",title:"Colored Triangle",description:"",source:"@site/docs/examples/mesh-and-shaders/triangle-color.md",sourceDirName:"examples/mesh-and-shaders",slug:"/examples/mesh-and-shaders/triangle-color",permalink:"/examples/mesh-and-shaders/triangle-color",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/docs/examples/mesh-and-shaders/triangle-color.md",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"examplesSidebar",previous:{title:"Textured Mesh - Basic",permalink:"/examples/mesh-and-shaders/textured-mesh-basic"},next:{title:"Textured Triangle",permalink:"/examples/mesh-and-shaders/triangle-textured"}},l={},c=[],p={toc:c};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"colored-triangle"},"Colored Triangle"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"playground",playground:!0},"import * as PIXI from 'pixi.js';\n\nconst app = new PIXI.Application<HTMLCanvasElement>({ resizeTo: window });\ndocument.body.appendChild(app.view);\n\nconst geometry = new PIXI.Geometry()\n    .addAttribute('aVertexPosition', // the attribute name\n        [-100, -50, // x, y\n            100, -50, // x, y\n            0.0, 100.0], // x, y\n        2) // the size of the attribute\n\n    .addAttribute('aColor', // the attribute name\n        [1, 0, 0, // r, g, b\n            0, 1, 0, // r, g, b\n            0, 0, 1], // r, g, b\n        3); // the size of the attribute\n\nconst shader = PIXI.Shader.from(`\n\n    precision mediump float;\n    attribute vec2 aVertexPosition;\n    attribute vec3 aColor;\n\n    uniform mat3 translationMatrix;\n    uniform mat3 projectionMatrix;\n\n    varying vec3 vColor;\n\n    void main() {\n\n        vColor = aColor;\n        gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    }`,\n\n`precision mediump float;\n\n    varying vec3 vColor;\n\n    void main() {\n        gl_FragColor = vec4(vColor, 1.0);\n    }\n\n`);\n\nconst triangle = new PIXI.Mesh(geometry, shader);\n\ntriangle.position.set(400, 300);\ntriangle.scale.set(2);\n\napp.stage.addChild(triangle);\n\napp.ticker.add((delta) => {\n    triangle.rotation += 0.01;\n});\n")))}d.isMDXComponent=!0}}]);