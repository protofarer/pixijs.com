"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[1732],{7319:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var r=i(7462),n=(i(7294),i(3905));const s={},a="v6 Migration Guide",o={unversionedId:"guides/migrations/v6",id:"guides/migrations/v6",title:"v6 Migration Guide",description:"PixiJS 6 comes with few surface-level breaking changes. This document is not complete.",source:"@site/docs/guides/migrations/v6.md",sourceDirName:"guides/migrations",slug:"/guides/migrations/v6",permalink:"/8.x/guides/migrations/v6",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/docs/guides/migrations/v6.md",tags:[],version:"current",frontMatter:{},sidebar:"guidesSidebar",previous:{title:"v7 Migration Guide",permalink:"/8.x/guides/migrations/v7"},next:{title:"v5 Migration Guide",permalink:"/8.x/guides/migrations/v5"}},p={},u=[{value:"Typings",id:"typings",level:2},{value:"Mesh Internals",id:"mesh-internals",level:2}],l={toc:u};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"v6-migration-guide"},"v6 Migration Guide"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixi.js/releases/tag/v6.0.0"},"PixiJS 6")," comes with few surface-level breaking changes. This document is ",(0,n.kt)("strong",{parentName:"p"},"not complete"),"."),(0,n.kt)("h2",{id:"typings"},"Typings"),(0,n.kt)("p",null,"If you're using TypeScript, make sure the follow is added to your ",(0,n.kt)("strong",{parentName:"p"},"tsconfig.json"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "compilerOptions": {\n    "moduleResolution": "node",\n    // Required for importing 3rd-party dependencies like EventEmitter3\n    "esModuleInterop": true\n  }\n}\n')),(0,n.kt)("h2",{id:"mesh-internals"},"Mesh Internals"),(0,n.kt)("p",null,"If you ever overrode ",(0,n.kt)("inlineCode",{parentName:"p"},"Mesh._renderDefault")," to take into account more uniforms like this: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixi.js/blob/b05fb9c4b31efda244d40b680f6abf304c9daec3/packages/mesh/src/Mesh.ts#L314-L317"},"v5 Reference")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"if (shader.program.uniformData.translationMatrix)\n{\n    shader.uniforms.translationMatrix = this.transform.worldTransform.toArray(true);\n}\n")),(0,n.kt)("p",null,"Remove the if, leave the contents, otherwise you might not get correct sync uniform for ",(0,n.kt)("inlineCode",{parentName:"p"},"translationMatrix"),", or even worse - get null pointer. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixi.js/blob/2a4bb1f2b015bd557d9c037d8886f68a467cf40d/packages/mesh/src/Mesh.ts#L318"},"v6 Reference"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"shader.uniforms.translationMatrix = this.transform.worldTransform.toArray(true);\n")))}d.isMDXComponent=!0}}]);