"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[9214],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(a),u=r,h=c["".concat(l,".").concat(u)]||c[u]||m[u]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2116:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return c}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],s={description:"nanos world Assets Development Kit - ADK",sidebar_position:2},l="Assets Development Kit",d={unversionedId:"assets-modding/creating-assets/adk-assets-development-kit",id:"assets-modding/creating-assets/adk-assets-development-kit",isDocsHomePage:!1,title:"Assets Development Kit",description:"nanos world Assets Development Kit - ADK",source:"@site/docs/assets-modding/creating-assets/adk-assets-development-kit.md",sourceDirName:"assets-modding/creating-assets",slug:"/assets-modding/creating-assets/adk-assets-development-kit",permalink:"/docs/assets-modding/creating-assets/adk-assets-development-kit",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/assets-modding/creating-assets/adk-assets-development-kit.md",version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1630069070,formattedLastUpdatedAt:"8/27/2021",sidebarPosition:2,frontMatter:{description:"nanos world Assets Development Kit - ADK",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Importing Custom Assets",permalink:"/docs/assets-modding/creating-assets/importing-assets"},next:{title:"Creating Custom Maps",permalink:"/docs/assets-modding/creating-assets/maps-and-levels/importing-maps"}},p=[{value:"Downloading nanos world Assets Development Kit - ADK",id:"downloading-nanos-world-assets-development-kit---adk",children:[]},{value:"Opening the Assets Development Kit Project",id:"opening-the-assets-development-kit-project",children:[]},{value:"Tools available in the ADK project",id:"tools-available-in-the-adk-project",children:[{value:"Placeholder Blueprints",id:"placeholder-blueprints",children:[]},{value:"Lua Code Generator",id:"lua-code-generator",children:[]},{value:"Assets.toml Generator",id:"assetstoml-generator",children:[]},{value:"Sun &amp; Sky Actor",id:"sun--sky-actor",children:[]},{value:"Physical Materials",id:"physical-materials",children:[]},{value:"Mannequin Skeleton",id:"mannequin-skeleton",children:[]},{value:"Thumbnail Generator",id:"thumbnail-generator",children:[]}]}],m={toc:p};function c(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"assets-development-kit"},"Assets Development Kit"),(0,o.kt)("p",null,"nanos world provides a fully configurable and ready ",(0,o.kt)("strong",{parentName:"p"},"Unreal Project")," called Assets Development Kit ","(","ADK",")"," to help you integrating and exporting Assets and Maps much faster. This project contains ",(0,o.kt)("strong",{parentName:"p"},"Placeholders"),", ",(0,o.kt)("strong",{parentName:"p"},"Tools")," and ",(0,o.kt)("strong",{parentName:"p"},"Correct References")," that must be used in order to create ",(0,o.kt)("strong",{parentName:"p"},"Characters")," and make proper ",(0,o.kt)("strong",{parentName:"p"},"Physical Materials"),", for example."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Note:")," To be able to use the ",(0,o.kt)("strong",{parentName:"p"},"ADK"),", you will need to have ",(0,o.kt)("a",{parentName:"p",href:"./#installing-unreal-engine-4"},"Unreal Engine")," installed."))),(0,o.kt)("h2",{id:"downloading-nanos-world-assets-development-kit---adk"},"Downloading nanos world Assets Development Kit - ADK"),(0,o.kt)("p",null,"Our ADK is uploaded in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nanos-world/assets-development-kit/releases/latest"},"GitHub"),", please download it latest version and extract it in your computer."),(0,o.kt)("h2",{id:"opening-the-assets-development-kit-project"},"Opening the Assets Development Kit Project"),(0,o.kt)("p",null,"You will find a file ",(0,o.kt)("inlineCode",{parentName:"p"},"NanosWorldADK.uproject")," in there, just open it with Unreal Engine and you are set!"),(0,o.kt)("p",null,"You will notice we two folders in the root directory: ",(0,o.kt)("inlineCode",{parentName:"p"},"NanosWorld/")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"MyAssetPack/"),"."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Tip:")," You can rename ",(0,o.kt)("inlineCode",{parentName:"p"},"MyAssetPack")," to anything you want to be your Asset Pack. Or you can delete it, but note that deleting this folder through Unreal may not work. If you want to delete it, please do it through Windows Explorer."))),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Please do not ",(0,o.kt)("strong",{parentName:"p"},"MODIFY"),", ",(0,o.kt)("strong",{parentName:"p"},"DELETE"),", ",(0,o.kt)("strong",{parentName:"p"},"CREATE")," or ",(0,o.kt)("strong",{parentName:"p"},"COPY")," any file inside ",(0,o.kt)("inlineCode",{parentName:"p"},"NanosWorld/")," folder, otherwise the ADK will not work properly. Also make sure you DO NOT modify them unintentionally! If asked to save any modified file in there, cancel it! All references must use ",(0,o.kt)("inlineCode",{parentName:"p"},"NanosWorld/")," where they are."),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"NanosWorld/")," folder has some Assets which you can use to reference ",(0,o.kt)("strong",{parentName:"p"},"your")," assets and make the export keep the correct references when using them in-game."))),(0,o.kt)("h2",{id:"tools-available-in-the-adk-project"},"Tools available in the ADK project"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"adk-assets-development-kit#placeholder-blueprints"},"Placeholder Blueprints ",(0,o.kt)("inlineCode",{parentName:"a"},"NanosWorld/Blueprints/Placeholders/"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"adk-assets-development-kit#lua-code-generator"},"Lua Code Generator ",(0,o.kt)("inlineCode",{parentName:"a"},"NanosWorld/Blueprints/Utility/WBP_LuaCodeGenerator"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"adk-assets-development-kit#assets-toml-generator"},"Assets.toml Generator ",(0,o.kt)("inlineCode",{parentName:"a"},"NanosWorld/Blueprints/Utility/WBP_AssetsTomlGenerator"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"adk-assets-development-kit#sunand-sky-actor"},"Sun & Sky Actor ",(0,o.kt)("inlineCode",{parentName:"a"},"NanosWorld/Blueprints/World/BP_SunSky"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"adk-assets-development-kit#physical-materials"},"Physical Materials ",(0,o.kt)("inlineCode",{parentName:"a"},"NanosWorld/MaterialLibrary/PhysicalMaterials/"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"adk-assets-development-kit#mannequin-skeleton"},"Mannequin Skeleton ",(0,o.kt)("inlineCode",{parentName:"a"},"NanosWorld/Characters/Common/SKEL_Mannequin"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"adk-assets-development-kit#thumbnail-generator"},"Thumbnail Generator ",(0,o.kt)("inlineCode",{parentName:"a"},"NanosWorld/Blueprints/Utility/ThumbnailGenerator")))),(0,o.kt)("h3",{id:"placeholder-blueprints"},"Placeholder Blueprints"),(0,o.kt)("h4",{id:"nanosworldblueprintsplaceholders"},(0,o.kt)("inlineCode",{parentName:"h4"},"NanosWorld/Blueprints/Placeholders/")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Placeholder Blueprints overview",src:a(7457).Z})),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("strong",{parentName:"p"},"Placeholder Blueprints")," to set Spawn Positions of ",(0,o.kt)("strong",{parentName:"p"},"Vehicles"),", ",(0,o.kt)("strong",{parentName:"p"},"Weapons"),", ",(0,o.kt)("strong",{parentName:"p"},"Characters")," and ",(0,o.kt)("strong",{parentName:"p"},"Props"),". This works only to help you generating a Lua code with spawn positions after all. These Blueprints aren\u2019t cooked with the map. Use the ",(0,o.kt)("a",{parentName:"p",href:"adk-assets-development-kit#lua-code-generator-nanosworld-blueprints-utility-wbp_luacodegenerator"},"Lua Code Generator")," to generate the Lua script with all spawn locations."),(0,o.kt)("h3",{id:"lua-code-generator"},"Lua Code Generator"),(0,o.kt)("h4",{id:"nanosworldblueprintsutilitywbp_luacodegenerator"},(0,o.kt)("inlineCode",{parentName:"h4"},"NanosWorld/Blueprints/Utility/WBP_LuaCodeGenerator")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Lua Code Generator Widget",src:a(8629).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Lua Code Generator")," is an ",(0,o.kt)("strong",{parentName:"p"},"Editor Utility Widget")," which scans the map which is currently loaded in your Unreal and generate a list of spawn code with exact Location and Rotation for every ",(0,o.kt)("a",{parentName:"p",href:"adk-assets-development-kit#placeholder-blueprints-nanosworld-blueprints-placeholders"},"Placeholder Blueprint "),"you had spawned."),(0,o.kt)("p",null,"To open it, right click on it and press ",(0,o.kt)("strong",{parentName:"p"},"Run Editor Utility Widget"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(2409).Z})),(0,o.kt)("h3",{id:"assetstoml-generator"},"Assets.toml Generator"),(0,o.kt)("h4",{id:"nanosworldblueprintsutilitywbp_assetstomlgenerator"},(0,o.kt)("inlineCode",{parentName:"h4"},"NanosWorld/Blueprints/Utility/WBP_AssetsTomlGenerator")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(8964).Z})),(0,o.kt)("p",null,"This is an ",(0,o.kt)("strong",{parentName:"p"},"Editor Utility Widget")," which scans a folder ","(","determined by the TextBox",")"," and generates the configuration for an Assets.toml with all Assets in the folder ","(","which can be used in nanos world",")","."),(0,o.kt)("h3",{id:"sun--sky-actor"},"Sun & Sky Actor"),(0,o.kt)("h4",{id:"nanosworldblueprintsworldbp_sunsky"},(0,o.kt)("inlineCode",{parentName:"h4"},"NanosWorld/Blueprints/World/BP_SunSky")),(0,o.kt)("p",null,"This is a pre-configured ",(0,o.kt)("strong",{parentName:"p"},"Sun & Sky Blueprint")," which can be used and easily replaced by nanos world Official Sun with ",(0,o.kt)("inlineCode",{parentName:"p"},"World,SpawnDefaultSun()"),". This is useful to get an approximate result of how the light will look like in-game if you decide to Spawn the Default Sun."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Note:")," Overriding the Sun through Scripting with ",(0,o.kt)("inlineCode",{parentName:"p"},"World.SpawnDefaultSun()"),", will respawn the Sun actor, which means no configuration did on the Sun & Sky actor will persist"),(0,o.kt)("p",{parentName:"div"},"Example: Light Intensity, Color, Post Process and other configuration will be lost."))),(0,o.kt)("h3",{id:"physical-materials"},"Physical Materials"),(0,o.kt)("h4",{id:"nanosworldmateriallibraryphysicalmaterials"},(0,o.kt)("inlineCode",{parentName:"h4"},"NanosWorld/MaterialLibrary/PhysicalMaterials/")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(2087).Z})),(0,o.kt)("p",null,"If you are creating a ",(0,o.kt)("strong",{parentName:"p"},"Material"),", you can ","(","and should",")"," use these ",(0,o.kt)("strong",{parentName:"p"},"Physical Materials")," do integrate better with nanos world. Using these Physical Materials will allow nanos world recognize which type of surface your Prop/Object is, giving it the proper auto-generated Hit or Footstep sound."),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"DO NOT ",(0,o.kt)("strong",{parentName:"p"},"modify")," or ",(0,o.kt)("strong",{parentName:"p"},"rename")," any Physical Materials, only use by referencing them in your Materials."))),(0,o.kt)("h3",{id:"mannequin-skeleton"},"Mannequin Skeleton"),(0,o.kt)("h4",{id:"nanosworldcharacterscommonskel_mannequin"},(0,o.kt)("inlineCode",{parentName:"h4"},"NanosWorld/Characters/Common/SKEL_Mannequin")),(0,o.kt)("p",null,"To be able to create Skeletal ","(","Character",")"," Meshes which work with our ",(0,o.kt)("a",{parentName:"p",href:"/docs/scripting-reference/classes/character"},"Character "),"class, you must set your Skeletal Mesh to use our ",(0,o.kt)("strong",{parentName:"p"},"Mannequin Skeleton"),". This Skeleton is the same as Unreal Engine 4 default Mannequin, so any Skeletal Mesh which uses UE4\u2019s Mannequin Skeleton will work for us!"),(0,o.kt)("p",null,"To change a Skeletal Mesh\u2019s Skeleton: right click on it ",">",">"," Skeleton ",">",">"," Assign Skeleton and change it to our ",(0,o.kt)("inlineCode",{parentName:"p"},"SKEL_Mannequin"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(8002).Z})),(0,o.kt)("h3",{id:"thumbnail-generator"},"Thumbnail Generator"),(0,o.kt)("h4",{id:"nanosworldblueprintsutilitythumbnailgenerator"},(0,o.kt)("inlineCode",{parentName:"h4"},"NanosWorld/Blueprints/Utility/ThumbnailGenerator")),(0,o.kt)("p",null,"We\u2019ve shipped a ",(0,o.kt)("strong",{parentName:"p"},"Thumbnail Generator")," tool to help you generating ",(0,o.kt)("inlineCode",{parentName:"p"},".jpg")," images of your assets. To use that, just open ",(0,o.kt)("strong",{parentName:"p"},"ThumbnailGenerator")," level and hit Play. Then you will be able to define a folder for search the assets ","(","currently only Static and Skeletal Meshes are supported",")"," and a folder to save the images ","(",".jpg",")",". You can optionally keep the directory hierarchy in the output folder or save all images in the same folder. Once you hit ",(0,o.kt)("strong",{parentName:"p"},"Generate"),", it will start loading all assets and taking a photo from them."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Note:")," this may be a slow process depending if your assets were already compiled previously."),(0,o.kt)("p",{parentName:"div"},"It is also recommended to generate the Thumbnails twice, so you grant they will be saved in the max quality possible."))),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(5741).Z})))}c.isMDXComponent=!0},7457:function(e,t,a){t.Z=a.p+"assets/images/adk-01-846dffe0833b1e8575996e97fd7e2f11.jpg"},8629:function(e,t,a){t.Z=a.p+"assets/images/adk-02-0b901da3e84e694b48131cfd2471dcbc.jpg"},2409:function(e,t,a){t.Z=a.p+"assets/images/adk-03-99cb2ed3fa24d3d2bd2695e72d8beb7d.jpg"},8964:function(e,t,a){t.Z=a.p+"assets/images/adk-04-f297905ad88d6675b6929d42464bd5c8.jpg"},2087:function(e,t,a){t.Z=a.p+"assets/images/adk-05-a9aa9bbd747fce98c31237cdcd581d1a.jpg"},8002:function(e,t,a){t.Z=a.p+"assets/images/adk-06-0c1907dc91241995355b74b649e78e76.jpg"},5741:function(e,t,a){t.Z=a.p+"assets/images/adk-07-bd0c7e89faf5509e4555728466eeca11.jpg"}}]);