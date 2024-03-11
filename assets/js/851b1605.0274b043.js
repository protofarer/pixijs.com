"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[5225],{9739:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(7462),s=(t(7294),t(3905));const o={},i="Assets",l={unversionedId:"guides/components/assets",id:"guides/components/assets",title:"Assets",description:"The Assets package",source:"@site/docs/guides/components/assets.md",sourceDirName:"guides/components",slug:"/guides/components/assets",permalink:"/8.x/guides/components/assets",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/docs/guides/components/assets.md",tags:[],version:"current",frontMatter:{},sidebar:"guidesSidebar",previous:{title:"Render Groups",permalink:"/8.x/guides/advanced/render-groups"},next:{title:"Containers",permalink:"/8.x/guides/components/containers"}},r={},p=[{value:"The Assets package",id:"the-assets-package",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Making our first Assets Promise",id:"making-our-first-assets-promise",level:2},{value:"Warning about solved promises",id:"warning-about-solved-promises",level:2},{value:"Using Async/Await",id:"using-asyncawait",level:2},{value:"Loading multiple assets",id:"loading-multiple-assets",level:2},{value:"Background loading",id:"background-loading",level:2}],d={toc:p};function u(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"assets"},"Assets"),(0,s.kt)("h2",{id:"the-assets-package"},"The Assets package"),(0,s.kt)("p",null,"The Assets package is a modern replacement for the old ",(0,s.kt)("inlineCode",{parentName:"p"},"Loader")," class. It is a promise-based resource management solution that will download, cache and parse your assets into something you can use. The downloads can be simultaneous and in the background, meaning faster startup times for your app, the cache ensures that you never download the same asset twice and the extensible parser system allows you to easily extend and customize the process to your needs."),(0,s.kt)("h2",{id:"getting-started"},"Getting started"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Assets")," relies heavily on JavaScript Promises that all modern browsers support, however, if your target browser ",(0,s.kt)("a",{parentName:"p",href:"https://caniuse.com/promises"},"doesn't support promises")," you should look into ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/zloirock/core-js#ecmascript-promise"},"polyfilling them"),"."),(0,s.kt)("h2",{id:"making-our-first-assets-promise"},"Making our first Assets Promise"),(0,s.kt)("p",null,"To quickly use the ",(0,s.kt)("inlineCode",{parentName:"p"},"Assets")," instance, you just need to call ",(0,s.kt)("inlineCode",{parentName:"p"},"Assets.load")," and pass in an asset. This will return a promise that when resolved will yield the value you seek.\nIn this example, we will load a texture and then turn it into a sprite."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { Application, Assets, Sprite } from 'pixi.js';\n\n// Create a new application\nconst app = new Application();\n\n// Initialize the application\nawait app.init({ background: '#1099bb', resizeTo: window });\n\n// Append the application canvas to the document body\ndocument.body.appendChild(app.canvas);\n\n// Start loading right away and create a promise\nconst texturePromise = Assets.load('https://pixijs.com/assets/bunny.png');\n\n// When the promise resolves, we have the texture!\ntexturePromise.then((resolvedTexture) =>\n{\n    // create a new Sprite from the resolved loaded Texture\n    const bunny = Sprite.from(resolvedTexture);\n\n    // center the sprite's anchor point\n    bunny.anchor.set(0.5);\n\n    // move the sprite to the center of the screen\n    bunny.x = app.screen.width / 2;\n    bunny.y = app.screen.height / 2;\n\n    app.stage.addChild(bunny);\n});\n")),(0,s.kt)("p",null,"One very important thing to keep in mind while using ",(0,s.kt)("inlineCode",{parentName:"p"},"Assets")," is that all requests are cached and if the URL is the same, the promise returned will also be the same.\nTo show it in code:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"promise1 = Assets.load('bunny.png')\npromise2 = Assets.load('bunny.png')\n// promise1 === promise2\n")),(0,s.kt)("p",null,"Out of the box, the following assets types can be loaded without the need for external plugins:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Textures (",(0,s.kt)("inlineCode",{parentName:"li"},"avif"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"webp"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"png"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"jpg"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"gif"),")"),(0,s.kt)("li",{parentName:"ul"},"Sprite sheets (",(0,s.kt)("inlineCode",{parentName:"li"},"json"),")"),(0,s.kt)("li",{parentName:"ul"},"Bitmap fonts (",(0,s.kt)("inlineCode",{parentName:"li"},"xml"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"fnt"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"txt"),")"),(0,s.kt)("li",{parentName:"ul"},"Web fonts (",(0,s.kt)("inlineCode",{parentName:"li"},"ttf"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"woff"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"woff2"),")"),(0,s.kt)("li",{parentName:"ul"},"Json files (",(0,s.kt)("inlineCode",{parentName:"li"},"json"),")"),(0,s.kt)("li",{parentName:"ul"},"Text files (",(0,s.kt)("inlineCode",{parentName:"li"},"txt"),")")),(0,s.kt)("p",null,"More types can be added fairly easily by creating additional loader parsers."),(0,s.kt)("h2",{id:"warning-about-solved-promises"},"Warning about solved promises"),(0,s.kt)("p",null,"When an asset is downloaded, it is cached as a promise inside the ",(0,s.kt)("inlineCode",{parentName:"p"},"Assets")," instance and if you try to download it again you will get a reference to the already resolved promise.\nHowever promise handlers ",(0,s.kt)("inlineCode",{parentName:"p"},".then(...)"),"/",(0,s.kt)("inlineCode",{parentName:"p"},".catch(...)"),"/",(0,s.kt)("inlineCode",{parentName:"p"},".finally(...)")," are always asynchronous, this means that even if a promise was already resolved the code below the ",(0,s.kt)("inlineCode",{parentName:"p"},".then(...)"),"/",(0,s.kt)("inlineCode",{parentName:"p"},".catch(...)"),"/",(0,s.kt)("inlineCode",{parentName:"p"},".finally(...)")," will execute before the code inside them.\nSee this example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"console.log(1);\nalreadyResolvedPromise.then(() => console.log(2));\nconsole.log(3);\n\n// Console output:\n// 1\n// 3\n// 2\n")),(0,s.kt)("p",null,"To learn more about why this happens you will need to learn about ",(0,s.kt)("a",{parentName:"p",href:"https://javascript.info/microtask-queue"},"Microtasks"),", however, using async functions should mitigate this problem."),(0,s.kt)("h2",{id:"using-asyncawait"},"Using Async/Await"),(0,s.kt)("p",null,"There is a way to work with promises that is more intuitive and easier to read: ",(0,s.kt)("inlineCode",{parentName:"p"},"async"),"/",(0,s.kt)("inlineCode",{parentName:"p"},"await"),"."),(0,s.kt)("p",null,"To use it we first need to create a function/method and mark it as ",(0,s.kt)("inlineCode",{parentName:"p"},"async"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"async function test() {\n    // ...\n}\n")),(0,s.kt)("p",null,"This function now wraps the return value in a promise and allows us to use the ",(0,s.kt)("inlineCode",{parentName:"p"},"await")," keyword before a promise to halt the execution of the code until it is resolved and gives us the value."),(0,s.kt)("p",null,"See this example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// Create a new application\nconst app = new Application();\n// Initialize the application\nawait app.init({ background: '#1099bb', resizeTo: window });\n// Append the application canvas to the document body\ndocument.body.appendChild(app.canvas);\nconst texture = await Assets.load('https://pixijs.com/assets/bunny.png');\n// Create a new Sprite from the awaited loaded Texture\nconst bunny = Sprite.from(texture);\n// Center the sprite's anchor point\nbunny.anchor.set(0.5);\n// Move the sprite to the center of the screen\nbunny.x = app.screen.width / 2;\nbunny.y = app.screen.height / 2;\napp.stage.addChild(bunny);\n")),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"texture")," variable now is not a promise but the resolved texture that resulted after waiting for this promise to resolve."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const texture = await Assets.load('examples/assets/bunny.png');\n")),(0,s.kt)("p",null,"This allows us to write more readable code without falling into callback hell and to better think when our program halts and yields."),(0,s.kt)("h2",{id:"loading-multiple-assets"},"Loading multiple assets"),(0,s.kt)("p",null,"We can add assets to the cache and then load them all simultaneously by using ",(0,s.kt)("inlineCode",{parentName:"p"},"Assets.add(...)")," and then calling ",(0,s.kt)("inlineCode",{parentName:"p"},"Assets.load(...)")," with all the keys you want to have loaded.\nSee the following example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// Append the application canvas to the document body\ndocument.body.appendChild(app.canvas);\n// Add the assets to load\nAssets.add({ alias: 'flowerTop', src: 'https://pixijs.com/assets/flowerTop.png' });\nAssets.add({ alias: 'eggHead', src: 'https://pixijs.com/assets/eggHead.png' });\n// Load the assets and get a resolved promise once both are loaded\nconst texturesPromise = Assets.load(['flowerTop', 'eggHead']); // => Promise<{flowerTop: Texture, eggHead: Texture}>\n// When the promise resolves, we have the texture!\ntexturesPromise.then((textures) =>\n{\n    // Create a new Sprite from the resolved loaded Textures\n    const flower = Sprite.from(textures.flowerTop);\n    flower.anchor.set(0.5);\n    flower.x = app.screen.width * 0.25;\n    flower.y = app.screen.height / 2;\n    app.stage.addChild(flower);\n    const egg = Sprite.from(textures.eggHead);\n    egg.anchor.set(0.5);\n    egg.x = app.screen.width * 0.75;\n    egg.y = app.screen.height / 2;\n    app.stage.addChild(egg);\n});\n")),(0,s.kt)("p",null,"However, if you want to take full advantage of ",(0,s.kt)("inlineCode",{parentName:"p"},"@pixi/Assets")," you should use bundles.\nBundles are just a way to group assets together and can be added manually by calling ",(0,s.kt)("inlineCode",{parentName:"p"},"Assets.addBundle(...)"),"/",(0,s.kt)("inlineCode",{parentName:"p"},"Assets.loadBundle(...)"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"  Assets.addBundle('animals', {\n    bunny: 'bunny.png',\n    chicken: 'chicken.png',\n    thumper: 'thumper.png',\n  });\n\n const assets = await Assets.loadBundle('animals');\n")),(0,s.kt)("p",null,"However, the best way to handle bundles is to use a manifest and call ",(0,s.kt)("inlineCode",{parentName:"p"},"Assets.init({manifest})")," with said manifest (or even better, an URL pointing to it).\nSplitting our assets into bundles that correspond to screens or stages of our app will come in handy for loading in the background while the user is using the app instead of locking them in a single monolithic loading screen."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "bundles":[\n      {\n         "name":"load-screen",\n         "assets":[\n            {\n               "alias":"background",\n               "src":"sunset.png"\n            },\n            {\n               "alias":"bar",\n               "src":"load-bar.{png,webp}"\n            }\n         ]\n      },\n      {\n         "name":"game-screen",\n         "assets":[\n            {\n               "alias":"character",\n               "src":"robot.png"\n            },\n            {\n               "alias":"enemy",\n               "src":"bad-guy.png"\n            }\n         ]\n      }\n   ]\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'Assets.init({manifest: "path/manifest.json"});\n')),(0,s.kt)("p",null,"Beware that ",(0,s.kt)("strong",{parentName:"p"},"you can only call ",(0,s.kt)("inlineCode",{parentName:"strong"},"init")," once"),"."),(0,s.kt)("p",null,"Remember there is no downside in repeating URLs since they will all be cached, so if you need the same asset in two bundles you can duplicate the request without any extra cost!"),(0,s.kt)("h2",{id:"background-loading"},"Background loading"),(0,s.kt)("p",null,"The old approach to loading was to use ",(0,s.kt)("inlineCode",{parentName:"p"},"Loader")," to load all your assets at the beginning of your app, but users are less patient now and want content to be instantly available so the practices are moving towards loading the bare minimum needed to show the user some content and, while they are interacting with that, we keep loading the following content in the background."),(0,s.kt)("p",null,"Luckily, ",(0,s.kt)("inlineCode",{parentName:"p"},"Assets")," has us covered with a system that allows us to load everything in the background and in case we need some assets right now, bump them to the top of the queue so we can minimize loading times."),(0,s.kt)("p",null,"To achieve this, we have the methods ",(0,s.kt)("inlineCode",{parentName:"p"},"Assets.backgroundLoad(...)")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"Assets.backgroundLoadBundle(...)")," that will passively begin to load these assets in the background. So when you finally come to loading them you will get a promise that resolves to the loaded assets immediately."),(0,s.kt)("p",null,"When you finally need the assets to show, you call the usual ",(0,s.kt)("inlineCode",{parentName:"p"},"Assets.load(...)")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"Assets.loadBundle(...)")," and you will get the corresponding promise."),(0,s.kt)("p",null,"The best way to do this is using bundles, see the following example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { Application, Assets, Sprite } from 'pixi.js';\n\n// Create a new application\nconst app = new Application();\n\nasync function init()\n{\n    // Initialize the application\n    await app.init({ background: '#1099bb', resizeTo: window });\n\n    // Append the application canvas to the document body\n    document.body.appendChild(app.canvas);\n\n    // Manifest example\n    const manifestExample = {\n        bundles: [\n            {\n                name: 'load-screen',\n                assets: [\n                    {\n                        alias: 'flowerTop',\n                        src: 'https://pixijs.com/assets/flowerTop.png',\n                    },\n                ],\n            },\n            {\n                name: 'game-screen',\n                assets: [\n                    {\n                        alias: 'eggHead',\n                        src: 'https://pixijs.com/assets/eggHead.png',\n                    },\n                ],\n            },\n        ],\n    };\n\n    await Assets.init({ manifest: manifestExample });\n\n    // Bundles can be loaded in the background too!\n    Assets.backgroundLoadBundle(['load-screen', 'game-screen']);\n}\n\ninit();\n")),(0,s.kt)("p",null,"We create one bundle for each screen our game will have and set them all to start downloading at the beginning of our app. If the user progresses slowly enough in our app then they should never get to see a loading screen after the first one!"))}u.isMDXComponent=!0}}]);