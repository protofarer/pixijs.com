"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[928],{9926:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={},s="v5 Migration Guide",o={unversionedId:"guides/migrations/v5",id:"guides/migrations/v5",title:"v5 Migration Guide",description:"This document is useful for developers who are attempting to upgrading from v4 to v5. This includes gotchas and important context for understanding why your v4 code made need some subtle changes. In general, we've try to be as backward-compatible in v5 with the use of deprecation warnings in the console. There are, however, sometimes when changes are too substantial and require some additional help.",source:"@site/docs/guides/migrations/v5.md",sourceDirName:"guides/migrations",slug:"/guides/migrations/v5",permalink:"/8.x/guides/migrations/v5",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/docs/guides/migrations/v5.md",tags:[],version:"current",frontMatter:{},sidebar:"guidesSidebar",previous:{title:"v6 Migration Guide",permalink:"/8.x/guides/migrations/v6"}},l={},p=[{value:"\ud83d\udea7 API Changes",id:"-api-changes",level:2},{value:"Making WebGL First-Class",id:"making-webgl-first-class",level:3},{value:"Renderer Parameters",id:"renderer-parameters",level:3},{value:"Mesh, Plane, Rope",id:"mesh-plane-rope",level:3},{value:"Graphics Holes",id:"graphics-holes",level:3},{value:"Filter Padding",id:"filter-padding",level:3},{value:"Filter Default Vertex Shader",id:"filter-default-vertex-shader",level:3},{value:"Enable Mipmapping for RenderTexture",id:"enable-mipmapping-for-rendertexture",level:3},{value:"BaseTexture Resources",id:"basetexture-resources",level:3},{value:"BaseTexture.source",id:"basetexturesource",level:3},{value:"Graphics Interaction",id:"graphics-interaction",level:3},{value:"\ud83d\udce6 Publishing Changes",id:"-publishing-changes",level:2},{value:"Canvas Becomes Legacy",id:"canvas-becomes-legacy",level:3},{value:"Bundling Changes",id:"bundling-changes",level:3},{value:"Webpack",id:"webpack",level:3}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"v5-migration-guide"},"v5 Migration Guide"),(0,r.kt)("p",null,"This document is useful for developers who are attempting to ",(0,r.kt)("strong",{parentName:"p"},"upgrading from v4 to v5"),". This includes gotchas and important context for understanding why your v4 code made need some subtle changes. In general, we've try to be as backward-compatible in v5 with the use of deprecation warnings in the ",(0,r.kt)("inlineCode",{parentName:"p"},"console"),". There are, however, sometimes when changes are too substantial and require some additional help."),(0,r.kt)("h2",{id:"-api-changes"},"\ud83d\udea7 API Changes"),(0,r.kt)("h3",{id:"making-webgl-first-class"},"Making WebGL First-Class"),(0,r.kt)("p",null,"PixiJS v5 has made WebGL the first-class renderer and made CanvasRenderer to be second-class. Functionally, there's not much that changed from v4, but there are a bunch of subtle internal naming changes which could trip-up some developers upgrading to v5. For instance:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"WebGLRenderer")," becomes ",(0,r.kt)("inlineCode",{parentName:"li"},"Renderer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"renderWebGL")," becomes ",(0,r.kt)("inlineCode",{parentName:"li"},"render")," (in DisplayObject, Sprite, Container, etc)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_renderWebGL")," becomes ",(0,r.kt)("inlineCode",{parentName:"li"},"_render")," (in DisplayObject, Container, etc)")),(0,r.kt)("p",null,"If you created a plugin or project that previously used ",(0,r.kt)("inlineCode",{parentName:"p"},"render")," on a Container (see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixi.js/issues/5510"},"#5510"),"), this will probably cause your project to not render correctly. Please consider renaming your user-defined ",(0,r.kt)("inlineCode",{parentName:"p"},"render")," to something else. In most other cases, you'll get a deprecation warning trying to invoke WebGL-related classes or methods, e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"new PIXI.WebGLRenderer()"),"."),(0,r.kt)("h3",{id:"renderer-parameters"},"Renderer Parameters"),(0,r.kt)("p",null,"Specifying ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," as a third parameter in ",(0,r.kt)("inlineCode",{parentName:"p"},"Renderer")," constructor is officially dropped (same with ",(0,r.kt)("inlineCode",{parentName:"p"},"PIXI.Application"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"PIXI.autoDetectRenderer")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"PIXI.CanvasRenderer"),"). In v4 we supported two function signatures, but in v5 we dropped ",(0,r.kt)("inlineCode",{parentName:"p"},"width, height, options")," signature. Please add ",(0,r.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"height")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"options"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const renderer = new PIXI.Renderer(800, 600, { transparent: true }); // bad\nconst renderer = new PIXI.Renderer({ width: 800, height: 600, transparent: true }); // good\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Note: Adding ",(0,r.kt)("inlineCode",{parentName:"p"},"transparent: true")," in Renderer or Application constructor options might help with strange artifacts on some devices, but it might reduce FPS. It's much better than ",(0,r.kt)("inlineCode",{parentName:"p"},"preserveDrawingBuffer: true"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you need the v4 default behavior of resizing the canvas using css pixels, add ",(0,r.kt)("inlineCode",{parentName:"p"},"autoDensity: true")," to the options."))),(0,r.kt)("p",null,"Not everything went to params. To enable WebGL1 even if WebGL2 is available, use"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"PIXI.settings.PREFER_ENV = PIXI.ENV.WEBGL;\n")),(0,r.kt)("h3",{id:"mesh-plane-rope"},"Mesh, Plane, Rope"),(0,r.kt)("p",null,"PixiJS v5 introduces a new class called ",(0,r.kt)("inlineCode",{parentName:"p"},"PIXI.Mesh"),". This allows overriding the default shader and the ability to add more attributes to geometry. For ",(0,r.kt)("a",{parentName:"p",href:"https://pixijs.io/examples/#/mesh/triangle-textured.js"},"example"),", you can add colors to vertices."),(0,r.kt)("p",null,"The old v4 Mesh class has moved from ",(0,r.kt)("inlineCode",{parentName:"p"},"PIXI.mesh.Mesh")," to ",(0,r.kt)("a",{parentName:"p",href:"http://pixijs.download/dev/docs/PIXI.SimpleMesh.html"},(0,r.kt)("inlineCode",{parentName:"a"},"PIXI.SimpleMesh")),", it extends ",(0,r.kt)("inlineCode",{parentName:"p"},"PIXI.Mesh"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"PIXI.mesh.Rope"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"PIXI.mesh.Plane"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"PIXI.mesh.NineSlicePlane")," have moved to ",(0,r.kt)("inlineCode",{parentName:"p"},"PIXI.SimpleRope"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"PIXI.SimplePlane")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"PIXI.NineSlicePlane")," respectively."),(0,r.kt)("p",null,"If you used custom shaders or generated meshes in v4, you might be impacted by these changes in v5."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"PIXI.SimpleMesh")," fields ",(0,r.kt)("inlineCode",{parentName:"p"},"vertices"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"uvs"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"indices")," are wrapped inside ",(0,r.kt)("inlineCode",{parentName:"p"},"mesh.geometry")," attribute ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixi.js/blob/dev/packages/core/src/geometry/Buffer.js"},"buffers"),". For example, this is how access to buffers provided through ",(0,r.kt)("inlineCode",{parentName:"p"},"mesh.uvBuffer")," property:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"get uvBuffer()\n{\n    return this.geometry.buffers[1];\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"indices")," property shortcut is also missing, but you can access the data inside ",(0,r.kt)("inlineCode",{parentName:"p"},"mesh.geometry.indexBuffer"),"."),(0,r.kt)("p",null,"You can override buffer data, and notify it that data was changed, in this case buffer will be uploaded to GPU lazily. Previously in v4 mesh had several flags that indicated which attributes have to be updated and their names confused people."),(0,r.kt)("h3",{id:"graphics-holes"},"Graphics Holes"),(0,r.kt)("p",null,"Drawing holes in Graphics was very limited in v4. This only supported non-Shape drawing, like using ",(0,r.kt)("inlineCode",{parentName:"p"},"lineTo"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"bezierCurveTo"),", etc. In v5, we improved the hole API by supporting shapes. Unfortunately, there's no deprecation strategy to support the v4 API. For instance, in v4:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const graphic = new PIXI.Graphics()\n  .beginFill(0xff0000)\n  .moveTo(0, 0)\n  .lineTo(100, 0)\n  .lineTo(100, 100)\n  .lineTo(0, 100)\n  .moveTo(10, 10)\n  .lineTo(90, 10)\n  .lineTo(90, 90)\n  .lineTo(10, 90)\n  .addHole();\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://jsfiddle.net/bigtimebuddy/09L1gxbj/"},"Live example in ",(0,r.kt)("strong",{parentName:"a"},"v4.x"))),(0,r.kt)("p",null,"In v5, Graphics has simplified and the API changed from ",(0,r.kt)("inlineCode",{parentName:"p"},"addHole")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"beginHole")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"endHole"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const graphic = new PIXI.Graphics()\n  .beginFill(0xff0000)\n  .drawRect(0, 0, 100, 100)\n  .beginHole()\n  .drawCircle(50, 50, 30)\n  .endHole();\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://jsfiddle.net/bigtimebuddy/L0hf41mb/"},"Live example in ",(0,r.kt)("strong",{parentName:"a"},"dev"))),(0,r.kt)("h3",{id:"filter-padding"},"Filter Padding"),(0,r.kt)("p",null,"In v4 filters had a default padding of ",(0,r.kt)("inlineCode",{parentName:"p"},"4")," and in v5 this has been changed to a default of ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),". This can cause some filters to look broken when used. To fix this issue simply add some padding to the filters you create."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Glow filter from https://github.com/pixijs/pixi-filters\nconst filter = new PIXI.filters.GlowFilter();\nfilter.padding = 4;\n")),(0,r.kt)("p",null,"Some filters, like ",(0,r.kt)("inlineCode",{parentName:"p"},"BlurFilter"),", automatically calculate the padding so changes may not be necessary."),(0,r.kt)("h3",{id:"filter-default-vertex-shader"},"Filter Default Vertex Shader"),(0,r.kt)("p",null,"We reorganized all uniforms dedicated to coordinate system transforms, and renamed them. If your filter doesn't work anymore, check if you use default vertex shader. In that case, you can use old v4 vertex shader code."),(0,r.kt)("p",null,"All changes are explained in [","[Creating Filters|v5-Creating-filters]","]"),(0,r.kt)("h3",{id:"enable-mipmapping-for-rendertexture"},"Enable Mipmapping for RenderTexture"),(0,r.kt)("p",null,"Previously, you may have ended up with code like this in v4 (specifically if you saw ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixi.js/issues/4155#issuecomment-342471151"},"Ivan's comment/JSFiddle"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const renderer = PIXI.autoDetectRenderer();\nrenderer.bindTexture(baseRenderTex, false, 0);\nconst glTex = baseRenderTex._glTextures[renderer.CONTEXT_UID];\nglTex.enableMipmap(); // this is what actually generates mipmaps in WebGL\nglTex.enableLinearScaling(); // this is what tells WebGL to USE those mipmaps\n")),(0,r.kt)("p",null,"In v5, this code is no longer needed."),(0,r.kt)("h3",{id:"basetexture-resources"},"BaseTexture Resources"),(0,r.kt)("p",null,'One of the newest features in v5 is that we decoupled all the asset-specific functionality from BaseTexture. We created a new system called "resources" and each BaseTexture now has a resource that wraps some specific asset type. For instance: VideoResource, SVGResource, ImageResource, CanvasResource. In the future, we hope to be able to add other resource types. If there were asset-specific methods or properties being called before, these will probably be on ',(0,r.kt)("inlineCode",{parentName:"p"},"baseTexture.resource"),"."),(0,r.kt)("p",null,"Also, we removed all of the ",(0,r.kt)("inlineCode",{parentName:"p"},"from*")," methods from BaseTexture, so you just can call ",(0,r.kt)("inlineCode",{parentName:"p"},"BaseTexture.from")," and pass in whatever resource. Please see ",(0,r.kt)("a",{parentName:"p",href:"http://pixijs.download/dev/docs/PIXI.BaseTexture.html"},"docs")," for more information about ",(0,r.kt)("inlineCode",{parentName:"p"},"from"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const canvas = document.createElement('canvas');\nconst baseTexture = PIXI.BaseTexture.from(canvas);\n")),(0,r.kt)("p",null,"That API also allows to use pure WebGL and 2d context calls, see the ",(0,r.kt)("a",{parentName:"p",href:"https://pixijs.io/examples/#/textures/gradient-resource.js"},"gradient example"),"."),(0,r.kt)("h3",{id:"basetexturesource"},"BaseTexture.source"),(0,r.kt)("p",null,"Has been moved to ",(0,r.kt)("inlineCode",{parentName:"p"},"baseTexture.resource.source"),", moved into resource corresponding to the baseTexture. ",(0,r.kt)("inlineCode",{parentName:"p"},"baseTexture.resource")," does not exist for RenderTexture, and source does not exist for resources that dont have source."),(0,r.kt)("h3",{id:"graphics-interaction"},"Graphics Interaction"),(0,r.kt)("p",null,"If you use transparent interactive graphics trick, make sure that you use specify alpha=0 for all element, not for its parts. How PixiJS deals with shapes that have alpha=0 is considered undefined behaviour. We might change it back, but we have no guarantees about it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"graphics.beginFill(0xffffff, 0.0); //bad\ngraphics.alpha = 0; //good\n")),(0,r.kt)("h2",{id:"-publishing-changes"},"\ud83d\udce6 Publishing Changes"),(0,r.kt)("h3",{id:"canvas-becomes-legacy"},"Canvas Becomes Legacy"),(0,r.kt)("p",null,"Since WebGL and WebGL2 are now first-class, we have removed the canvas-based fallback from the default ",(0,r.kt)("strong",{parentName:"p"},"pixi.js")," package. If you need ",(0,r.kt)("inlineCode",{parentName:"p"},"CanvasRenderer"),", you should switch to use ",(0,r.kt)("strong",{parentName:"p"},"pixi.js-legacy")," instead."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import * as PIXI from "pixi.js";\n// Will NOT return CanvasRenderer because canvas-based\n// functionality was removed from "pixi.js"\nconst renderer = PIXI.autoDetectRenderer(); // return PIXI.Renderer or throws error\n')),(0,r.kt)("p",null,"Instead, use the legacy bundle to have access to the canvas rendering."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import * as PIXI from "pixi.js-legacy";\nconst renderer = PIXI.autoDetectRenderer(); // returns PIXI.Renderer or PIXI.CanvasRenderer\n')),(0,r.kt)("h3",{id:"bundling-changes"},"Bundling Changes"),(0,r.kt)("p",null,"If you're using ",(0,r.kt)("a",{parentName:"p",href:"https://rollupjs.org/"},"Rollup"),", ",(0,r.kt)("a",{parentName:"p",href:"https://parceljs.org"},"Parcel")," or another bundler to add PixiJS into your project there are a few subtle changes when moving to v5. Namely, the global ",(0,r.kt)("inlineCode",{parentName:"p"},"PIXI")," object is no longer created automatically. This was removed from bundling for two purpose: 1) to improve tree-shaking for bundlers, and 2) for security purpose by protecting ",(0,r.kt)("inlineCode",{parentName:"p"},"PIXI"),"."),(0,r.kt)("p",null,"This is no longer a valid way to import:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import "pixi.js";\nconst renderer = PIXI.autoDetectRenderer(); // INVALID! No more global.PIXI!\n')),(0,r.kt)("p",null,"Instead, you should import as a namespace or individual elements:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import * as PIXI from "pixi.js";\nconst renderer = PIXI.autoDetectRenderer();\n\n// or even better:\nimport { autoDetectRenderer } from "pixi.js";\nconst renderer = autoDetectRenderer();\n')),(0,r.kt)("p",null,"Lastly, some 3rd-party plugins maybe expecting ",(0,r.kt)("inlineCode",{parentName:"p"},"window.PIXI"),", so you might have to explicitly expose the global like this, however this is ",(0,r.kt)("em",{parentName:"p"},"not recommended"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import * as PIXI from \'pixi.js\';\nwindow.PIXI = PIXI; // some bundlers might prefer "global" instead of "window"\n')),(0,r.kt)("h3",{id:"webpack"},"Webpack"),(0,r.kt)("p",null,"When ",(0,r.kt)("a",{parentName:"p",href:"https://webpack.js.org/"},"Webpack")," and 3rd-party plugins, like ",(0,r.kt)("strong",{parentName:"p"},"pixi-spine"),", you might have difficulties building the global ",(0,r.kt)("inlineCode",{parentName:"p"},"PIXI")," object resulting in a runtime error ",(0,r.kt)("inlineCode",{parentName:"p"},"ReferenceError: PIXI is not defined"),". Usually this can be resolved by using ",(0,r.kt)("a",{parentName:"p",href:"https://webpack.js.org/guides/shimming/#shimming-globals"},"Webpack shimming globals"),"."),(0,r.kt)("p",null,"For instance, here's your import code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import * as PIXI from 'pixi.js';\nimport 'pixi-spine'; // or other plugins that need global 'PIXI' to be defined first\n")),(0,r.kt)("p",null,"Add a ",(0,r.kt)("inlineCode",{parentName:"p"},"plugins")," section to your ",(0,r.kt)("strong",{parentName:"p"},"webpack.config.js")," to let know Webpack that the global ",(0,r.kt)("inlineCode",{parentName:"p"},"PIXI")," variable make reference to ",(0,r.kt)("inlineCode",{parentName:"p"},"pixi.js")," module. For instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const webpack = require('webpack');\n\nmodule.exports = {\n    entry: '...',\n    output: {\n        ...\n    },\n    plugins: [\n     new webpack.ProvidePlugin({\n       PIXI: 'pixi.js'\n     })\n   ]\n}\n")))}u.isMDXComponent=!0}}]);