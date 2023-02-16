"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[3034],{3905:(e,n,r)=>{r.d(n,{Zo:()=>l,kt:()=>v});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=t.createContext({}),p=function(e){var n=t.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},l=function(e){var n=p(e.components);return t.createElement(d.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(r),u=a,v=m["".concat(d,".").concat(u)]||m[u]||c[u]||i;return r?t.createElement(v,o(o({ref:n},l),{},{components:r})):t.createElement(v,o({ref:n},l))}));function v(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},46919:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var t=r(87462),a=(r(67294),r(3905));const i={hide_table_of_contents:!0},o="Multipass Shader Mesh",s={unversionedId:"examples/mesh-and-shaders/multipass-shader-generated-mesh",id:"examples/mesh-and-shaders/multipass-shader-generated-mesh",title:"Multipass Shader Mesh",description:"",source:"@site/docs/examples/mesh-and-shaders/multipass-shader-generated-mesh.md",sourceDirName:"examples/mesh-and-shaders",slug:"/examples/mesh-and-shaders/multipass-shader-generated-mesh",permalink:"/examples/mesh-and-shaders/multipass-shader-generated-mesh",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/docs/examples/mesh-and-shaders/multipass-shader-generated-mesh.md",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"examplesSidebar",previous:{title:"Merging Geometry",permalink:"/examples/mesh-and-shaders/merging-geometry"},next:{title:"Shadertoy",permalink:"/examples/mesh-and-shaders/shadertoy-mesh"}},d={},p=[],l={toc:p};function m(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"multipass-shader-mesh"},"Multipass Shader Mesh"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"playground",playground:!0},"import * as PIXI from 'pixi.js';\n\nconst app = new PIXI.Application<HTMLCanvasElement>({ height: 640, resizeTo: window });\ndocument.body.appendChild(app.view);\n\n// Build geometry.\nconst geometry = new PIXI.Geometry()\n    .addAttribute('aVertexPosition', // the attribute name\n        [0, 0, // x, y\n            200, 0, // x, y\n            200, 200,\n            0, 200], // x, y\n        2) // the size of the attribute\n    .addAttribute('aUvs', // the attribute name\n        [0, 0, // u, v\n            1, 0, // u, v\n            1, 1,\n            0, 1], // u, v\n        2) // the size of the attribute\n    .addIndex([0, 1, 2, 0, 2, 3]);\n\n// Vertex shader. Use same shader for all passes.\nconst vertexSrc = `\n\n    precision mediump float;\n\n    attribute vec2 aVertexPosition;\n    attribute vec2 aUvs;\n\n    uniform mat3 translationMatrix;\n    uniform mat3 projectionMatrix;\n\n    varying vec2 vUvs;\n\n    void main() {\n\n        vUvs = aUvs;\n        gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    }`;\n\n// Load a perlinnoise texture for one of the shaders.\nconst perlinTexture = PIXI.Texture.from('https://beta.pixijs.com/assets/perlin.jpg');\n\n// First pass, generates a grid.\nconst fragmentGridSrc = `\nprecision mediump float;\nvarying vec2 vUvs;\nuniform float zoom;\n\nvoid main()\n{\n    //Generate a simple grid.\n    //Offset uv so that center is 0,0 and edges are -1,1\n    vec2 uv = (vUvs-vec2(0.5))*2.0;\n    vec2 gUv = floor(uv*zoom);\n    vec4 color1 = vec4(0.8, 0.8, 0.8, 1.0);\n    vec4 color2 = vec4(0.4, 0.4, 0.4, 1.0);\n    vec4 outColor = mod(gUv.x + gUv.y, 2.) < 0.5 ? color1 : color2;\n    gl_FragColor = outColor;\n    \n}`;\n\nconst gridUniforms = {\n    zoom: 10,\n};\nconst gridShader = PIXI.Shader.from(vertexSrc, fragmentGridSrc, gridUniforms);\n// Sharing textures and meshes is possible. But for simplicity each pass has it's own output texture and mesh in this example.\nconst gridTexture = PIXI.RenderTexture.create({ width: 200, height: 200 });\nconst gridQuad = new PIXI.Mesh(geometry, gridShader);\nconst gridContainer = new PIXI.Container();\ngridContainer.addChild(gridQuad);\n\n// Second pass. Takes grid as input and makes it ripple.\nconst fragmentRippleSrc = `\nprecision mediump float;\nvarying vec2 vUvs;\nuniform float amount;\nuniform float phase;\nuniform sampler2D texIn;\n\nvoid main()\n{\n    //Generate a simple grid.\n    vec2 uv = vUvs;\n    //Calculate distance from center\n    float distance = length( uv - vec2(0.5));\n    vec4 color = texture2D(texIn, uv);\n    color.rgb *= sin(distance*25.0+phase) * amount+1.;\n    gl_FragColor = color;\n}`;\nconst rippleUniforms = {\n    amount: 0.5,\n    phase: 0,\n    texIn: gridTexture,\n};\nconst rippleShader = PIXI.Shader.from(vertexSrc, fragmentRippleSrc, rippleUniforms);\nconst rippleTexture = PIXI.RenderTexture.create({ width: 200, height: 200 });\nconst rippleQuad = new PIXI.Mesh(geometry, rippleShader);\nconst rippleContainer = new PIXI.Container();\nrippleContainer.addChild(rippleQuad);\n\n// Second effect. Generates a filtered noise.\nconst fragmentNoiseSrc = `\nprecision mediump float;\nvarying vec2 vUvs;\nuniform float limit;\nuniform sampler2D noise;\n\nvoid main()\n{\n    float color = texture2D(noise, vUvs).r;\n    color = step(limit, color);\n    gl_FragColor = vec4(color);\n}`;\nconst noiseUniforms = {\n    limit: 0.5,\n    noise: perlinTexture,\n};\nconst noiseShader = PIXI.Shader.from(vertexSrc, fragmentNoiseSrc, noiseUniforms);\nconst noiseTexture = PIXI.RenderTexture.create({ width: 200, height: 200 });\nconst noiseQuad = new PIXI.Mesh(geometry, noiseShader);\nconst noiseContainer = new PIXI.Container();\nnoiseContainer.addChild(noiseQuad);\n\n// Third effect\nconst fragmentWaveSrc = `\nprecision mediump float;\nvarying vec2 vUvs;\nuniform float amplitude;\nuniform float time;\n\nvoid main()\n{\n    //Offset uv so that center is 0,0 and edges are -1,1\n    vec2 uv = (vUvs-vec2(0.5))*2.0;\n    \n    vec3 outColor = vec3(0.);\n    \n    //Simple wavefunctions inversed and with small offsets.\n    outColor += 5./length(uv.y*200. - 50.0*sin( uv.x*0.25+ time*0.25)*amplitude);\n    outColor += 4./length(uv.y*300. - 100.0*sin(uv.x*0.5+time*0.5)*amplitude*1.2);\n    outColor += 3./length(uv.y*400. - 150.0*sin(uv.x*0.75+time*0.75)*amplitude*1.4);\n    outColor += 2./length(uv.y*500. - 200.0*sin(uv.x+time)*amplitude*1.6);\n    \n    gl_FragColor = vec4(outColor,1.0);\n}`;\nconst waveUniforms = {\n    amplitude: 0.75,\n    time: 0,\n};\nconst waveShader = PIXI.Shader.from(vertexSrc, fragmentWaveSrc, waveUniforms);\nconst waveTexture = PIXI.RenderTexture.create({ width: 200, height: 200 });\nconst waveQuad = new PIXI.Mesh(geometry, waveShader);\nconst waveContainer = new PIXI.Container();\nwaveContainer.addChild(waveQuad);\n\n// Final combination pass\nconst fragmentCombineSrc = `\nprecision mediump float;\nvarying vec2 vUvs;\n\nuniform sampler2D texRipple;\nuniform sampler2D texNoise;\nuniform sampler2D texWave;\n\nvoid main()\n{\n    //Read color from all\n    vec4 ripple = texture2D(texRipple, vUvs);\n    vec4 noise = texture2D(texNoise, vUvs);\n    vec4 wave = texture2D(texWave, vUvs);\n    \n    gl_FragColor = mix(ripple, wave,noise.r);\n}`;\nconst combineUniforms = {\n    texRipple: rippleTexture,\n    texNoise: noiseTexture,\n    texWave: waveTexture,\n};\nconst combineShader = PIXI.Shader.from(vertexSrc, fragmentCombineSrc, combineUniforms);\nconst combineQuad = new PIXI.Mesh(geometry, combineShader);\n\ngridContainer.position.set(10, 10);\nrippleContainer.position.set(220, 10);\nnoiseContainer.position.set(10, 220);\nwaveContainer.position.set(10, 430);\ncombineQuad.position.set(430, 220);\n\n// Add all phases to stage so all the phases can be seen separately.\napp.stage.addChild(gridContainer);\napp.stage.addChild(rippleContainer);\napp.stage.addChild(noiseContainer);\napp.stage.addChild(waveContainer);\napp.stage.addChild(combineQuad);\n\n// start the animation..\nlet time = 0;\napp.ticker.add((delta) => {\n    time += 1 / 60;\n    // gridQuad.shader.uniforms.zoom = Math.sin(time)*5+10;\n    rippleQuad.shader.uniforms.phase = -time;\n    waveQuad.shader.uniforms.time = time;\n    noiseQuad.shader.uniforms.limit = Math.sin(time * 0.5) * 0.35 + 0.5;\n\n    // Render the passes to get textures.\n    app.renderer.render(gridQuad, { renderTexture: gridTexture });\n    app.renderer.render(rippleQuad, { renderTexture: rippleTexture });\n    app.renderer.render(noiseQuad, { renderTexture: noiseTexture });\n    app.renderer.render(waveQuad, { renderTexture: waveTexture });\n});\n")))}m.isMDXComponent=!0}}]);