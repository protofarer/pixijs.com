"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[438],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>y});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,y=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(y,a(a({ref:t},l),{},{components:n})):r.createElement(y,a({ref:t},l))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19910:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={hide_table_of_contents:!0},a="Mouse Trail",s={unversionedId:"examples/advanced/mouse-trail",id:"examples/advanced/mouse-trail",title:"Mouse Trail",description:"",source:"@site/docs/examples/advanced/mouse-trail.md",sourceDirName:"examples/advanced",slug:"/examples/advanced/mouse-trail",permalink:"/examples/advanced/mouse-trail",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/docs/examples/advanced/mouse-trail.md",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"examplesSidebar",previous:{title:"Collision",permalink:"/examples/advanced/collision-detection"},next:{title:"Scratchcard",permalink:"/examples/advanced/scratchcard"}},p={},c=[],l={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mouse-trail"},"Mouse Trail"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"playground",playground:!0},"import * as PIXI from 'pixi.js';\n\nconst app = new PIXI.Application<HTMLCanvasElement>({ background: '#1099bb', resizeTo: window });\ndocument.body.appendChild(app.view);\n\n// Get the texture for rope.\nconst trailTexture = PIXI.Texture.from('https://beta.pixijs.com/assets/trail.png');\nconst historyX = [];\nconst historyY = [];\n// historySize determines how long the trail will be.\nconst historySize = 20;\n// ropeSize determines how smooth the trail will be.\nconst ropeSize = 100;\nconst points = [];\n\n// Create history array.\nfor (let i = 0; i < historySize; i++) {\n    historyX.push(0);\n    historyY.push(0);\n}\n// Create rope points.\nfor (let i = 0; i < ropeSize; i++) {\n    points.push(new PIXI.Point(0, 0));\n}\n\n// Create the rope\nconst rope = new PIXI.SimpleRope(trailTexture, points);\n\n// Set the blendmode\nrope.blendmode = PIXI.BLEND_MODES.ADD;\n\napp.stage.addChild(rope);\n\nconsole.log('HELLO!');\n\nlet mouseposition = null;\napp.stage.interactive = true;\napp.stage.hitArea = app.screen;\napp.stage.on('mousemove', (event) => {\n    mouseposition = mouseposition || { x: 0, y: 0 };\n    mouseposition.x = event.global.x;\n    mouseposition.y = event.global.y;\n});\n\n// Listen for animate update\napp.ticker.add(() => {\n    if (!mouseposition) return;\n\n    // Update the mouse values to history\n    historyX.pop();\n    historyX.unshift(mouseposition.x);\n    historyY.pop();\n    historyY.unshift(mouseposition.y);\n    // Update the points to correspond with history.\n    for (let i = 0; i < ropeSize; i++) {\n        const p = points[i];\n\n        // Smooth the curve with cubic interpolation to prevent sharp edges.\n        const ix = cubicInterpolation(historyX, i / ropeSize * historySize);\n        const iy = cubicInterpolation(historyY, i / ropeSize * historySize);\n\n        p.x = ix;\n        p.y = iy;\n    }\n});\n\n/**\n * Cubic interpolation based on https://github.com/osuushi/Smooth.js\n */\nfunction clipInput(k, arr) {\n    if (k < 0) k = 0;\n    if (k > arr.length - 1) k = arr.length - 1;\n    return arr[k];\n}\n\nfunction getTangent(k, factor, array) {\n    return factor * (clipInput(k + 1, array) - clipInput(k - 1, array)) / 2;\n}\n\nfunction cubicInterpolation(array, t, tangentFactor) {\n    if (tangentFactor == null) tangentFactor = 1;\n\n    const k = Math.floor(t);\n    const m = [getTangent(k, tangentFactor, array), getTangent(k + 1, tangentFactor, array)];\n    const p = [clipInput(k, array), clipInput(k + 1, array)];\n    t -= k;\n    const t2 = t * t;\n    const t3 = t * t2;\n    return (2 * t3 - 3 * t2 + 1) * p[0] + (t3 - 2 * t2 + t) * m[0] + (-2 * t3 + 3 * t2) * p[1] + (t3 - t2) * m[1];\n}\n")))}u.isMDXComponent=!0}}]);