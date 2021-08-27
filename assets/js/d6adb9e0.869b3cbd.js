"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[8483],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),h=c(a),m=s,k=h["".concat(l,".").concat(m)]||h[m]||p[m]||i;return a?n.createElement(k,o(o({ref:t},d),{},{components:a})):n.createElement(k,o({ref:t},d))}));function m(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=a.length,o=new Array(i);o[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:s,o[1]=r;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},3015:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return h}});var n=a(7462),s=a(3366),i=(a(7294),a(3905)),o=["components"],r={description:"How to correctly import custom Models into nanos world",sidebar_position:4},l="Characters Meshes",c={unversionedId:"assets-modding/creating-assets/characters-meshes",id:"assets-modding/creating-assets/characters-meshes",isDocsHomePage:!1,title:"Characters Meshes",description:"How to correctly import custom Models into nanos world",source:"@site/docs/assets-modding/creating-assets/characters-meshes.md",sourceDirName:"assets-modding/creating-assets",slug:"/assets-modding/creating-assets/characters-meshes",permalink:"/docs/assets-modding/creating-assets/characters-meshes",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/assets-modding/creating-assets/characters-meshes.md",version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1630069070,formattedLastUpdatedAt:"8/27/2021",sidebarPosition:4,frontMatter:{description:"How to correctly import custom Models into nanos world",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Static Meshes",permalink:"/docs/assets-modding/creating-assets/static-meshes"},next:{title:"WIP: Weapons",permalink:"/docs/assets-modding/creating-assets/wip-weapons"}},d=[{value:"Tips for integrating Skeletal Meshes with nanos world Character",id:"tips-for-integrating-skeletal-meshes-with-nanos-world-character",children:[{value:"1. Use nanos world Skeleton SKEL_Mannequin",id:"1-use-nanos-world-skeleton-skel_mannequin",children:[]},{value:"2. Use nanos world Physics Assets PHYS_Mannequin",id:"2-use-nanos-world-physics-assets-phys_mannequin",children:[]}]},{value:"Importing a new Character Skeletal Mesh",id:"importing-a-new-character-skeletal-mesh",children:[{value:"Downloading the Asset Pack from Unreal Marketplace",id:"downloading-the-asset-pack-from-unreal-marketplace",children:[]},{value:"Copying the wanted files to our Asset Pack folder",id:"copying-the-wanted-files-to-our-asset-pack-folder",children:[]},{value:"Converting the Skeleton to nanos world\u2019s Skeleton and Physics Asset",id:"converting-the-skeleton-to-nanos-worlds-skeleton-and-physics-asset",children:[]},{value:"Exporting / Packaging / Cooking the Assets to nanos world",id:"exporting--packaging--cooking-the-assets-to-nanos-world",children:[]},{value:"Getting the Files &amp; Generating Assets.toml",id:"getting-the-files--generating-assetstoml",children:[]},{value:"Using the Skeletal Mesh in a Character through Scripting",id:"using-the-skeletal-mesh-in-a-character-through-scripting",children:[]}]}],p={toc:d};function h(e){var t=e.components,r=(0,s.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"characters-meshes"},"Characters Meshes"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"nanos.world Characters use Unreal\u2019s Default Mannequin Skeleton. So any Skeletal Mesh which uses it by default will probably work in nanos world as a ",(0,i.kt)("a",{parentName:"p",href:"/docs/scripting-reference/classes/character"},"Character"),"."))),(0,i.kt)("h2",{id:"tips-for-integrating-skeletal-meshes-with-nanos-world-character"},"Tips for integrating Skeletal Meshes with nanos world Character"),(0,i.kt)("h3",{id:"1-use-nanos-world-skeleton-skel_mannequin"},"1. Use nanos world Skeleton SKEL_Mannequin"),(0,i.kt)("p",null,"It\u2019s of paramount importance to convert all ",(0,i.kt)("strong",{parentName:"p"},"Skeleton")," references to use nanos world ",(0,i.kt)("strong",{parentName:"p"},"Skeleton")," instead, if the Skeletal Mesh you imported is 100% equal to UE4\u2019s Mannequin Skeleton, this conversion won\u2019t be even noticed, but if the Skeleton of the Skeletal Mesh you are importing have more bones or is different, it won\u2019t work! You can try remake/modify it in a 3D software like Blender and make it equal to UE4\u2019s Mannequin."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Note:")," It is only possible to convert Skeletal Meshes of Meshes which already use the defualt ",(0,i.kt)("strong",{parentName:"p"},"Unreal Mannequin Skeleton"),"."))),(0,i.kt)("p",null,"For that, just right click on your ",(0,i.kt)("strong",{parentName:"p"},"Skeletal Mesh")," \u27a1 Skeleton \u27a1 Assign Skeleton, and select our Skeleton ",(0,i.kt)("inlineCode",{parentName:"p"},"SKEL_Mannequin"),", press ",(0,i.kt)("em",{parentName:"p"},"Accept")," to convert:  "),(0,i.kt)("h4",{id:"right-click-on-your-mesh-and-select-to-assign-a-skeleton"},"Right click on your mesh and select to assign a Skeleton"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Right click on your mesh and select to assign a Skeleton",src:a(4863).Z})),(0,i.kt)("h4",{id:"selecting-skel_mannequin-and-pressing-accept-to-convert"},"Selecting SKEL_Mannequin and pressing Accept to convert"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Selecting SKEL_Mannequin and pressing Accept to convert",src:a(8561).Z})),(0,i.kt)("h3",{id:"2-use-nanos-world-physics-assets-phys_mannequin"},"2. Use nanos world Physics Assets PHYS","_","Mannequin"),(0,i.kt)("p",null,"Besides converting your mesh to use nanos world ",(0,i.kt)("strong",{parentName:"p"},"Skeleton"),", it is also needed that you set your mesh to use the nanos world ",(0,i.kt)("strong",{parentName:"p"},"Physics Assets"),"."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This is allow your Characters when using your meshes to have a proper Ragdoll physics."))),(0,i.kt)("p",null,"Open your ",(0,i.kt)("strong",{parentName:"p"},"Skeletal Mesh")," and set the ",(0,i.kt)("strong",{parentName:"p"},"Physics Asset")," to use ",(0,i.kt)("inlineCode",{parentName:"p"},"PHYS_Mannequin"),":"),(0,i.kt)("h4",{id:"opening-skeletal-mesh-to-use-the-proper-physics-asset"},"Opening Skeletal Mesh to use the proper Physics Asset"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Opening Skeletal Mesh to use the proper Physics Asset",src:a(7600).Z})),(0,i.kt)("h2",{id:"importing-a-new-character-skeletal-mesh"},"Importing a new Character Skeletal Mesh"),(0,i.kt)("p",null,"Learn how to import and use custom Skeletal Meshes in nanos world Characters."),(0,i.kt)("p",null,"For this Guide, we will import a Skeletal Mesh from ",(0,i.kt)("a",{parentName:"p",href:"https://www.unrealengine.com/marketplace/en-US/product/stylized-male-character-kit-casual"},"Stylized Character Kit: Casual 01")," ","(","which is a ",(0,i.kt)("a",{parentName:"p",href:"https://www.unrealengine.com/en-US/blog/featured-free-marketplace-content---september-2020"},"Free Marketplace Content for September 2020"),")",". "),(0,i.kt)("h4",{id:"stylized-character-kit-from-unreal-engine-marketplace"},"Stylized Character Kit from Unreal Engine Marketplace"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Stylized Character Kit from Unreal Engine Marketplace",src:a(2037).Z})),(0,i.kt)("p",null,"Also, we will be using our ",(0,i.kt)("a",{parentName:"p",href:"adk-assets-development-kit"},"Assets Development Kit - ADK"),", make sure you downloaded it."),(0,i.kt)("h3",{id:"downloading-the-asset-pack-from-unreal-marketplace"},"Downloading the Asset Pack from Unreal Marketplace"),(0,i.kt)("p",null,"The first step is to download the Asset Pack ",(0,i.kt)("em",{parentName:"p"},"Stylized Character Kit: Casual 01")," from UE4 Marketplace, to do so, please follow:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"\u27a1 Epic Games Launcher")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"\u27a1 Unreal Engine")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"\u27a1 Library")),(0,i.kt)("li",{parentName:"ol"},"\u2b07 Scroll to ",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("strong",{parentName:"em"},"VAULT"))," section")),(0,i.kt)("p",null,"In Vault section you will find all your Marketplace content you have in your account, to download it click on ",(0,i.kt)("em",{parentName:"p"},"Add To Project")," and select the ",(0,i.kt)("strong",{parentName:"p"},"Assets Development Kit")," project, this will download all files and \u2018install\u2019 them into the ADK project.  "),(0,i.kt)("h4",{id:"finding-stylized-character-kit-casual-01"},"Finding Stylized Character Kit: Casual 01"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Finding Stylized Character Kit: Casual 01",src:a(6355).Z})),(0,i.kt)("h4",{id:"adding-stylized-character-kit-casual-01-to-adk-project"},"Adding Stylized Character Kit: Casual 01 to ADK Project"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Adding Stylized Character Kit: Casual 01 to ADK Project",src:a(9736).Z})),(0,i.kt)("p",null,"You can now notice that there is a new folder ",(0,i.kt)("inlineCode",{parentName:"p"},"Content/SCK_Casual01/")," in the ADK project, this is the Asset Pack you just downloaded from UE4 Marketplace: "),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(1786).Z})),(0,i.kt)("p",null,"And you can find it\u2019s Skeletal Meshes inside ",(0,i.kt)("inlineCode",{parentName:"p"},"Content/SCK_Casual01/Models/Premade_Characters/"),": "),(0,i.kt)("h4",{id:"opened-premade_characters-folder"},"Opened Premade_Characters folder"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Opened Premade_Characters folder",src:a(7791).Z})),(0,i.kt)("h3",{id:"copying-the-wanted-files-to-our-asset-pack-folder"},"Copying the wanted files to our Asset Pack folder"),(0,i.kt)("p",null,"For this example, let\u2019s import the Skeletal Mesh ",(0,i.kt)("inlineCode",{parentName:"p"},"MESH_PC_00")," to nanos world and use it as our Character\u2019s Mesh: "),(0,i.kt)("h4",{id:"opened-mesh_pc_00"},"Opened MESH_PC_00"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Opened MESH_PC_00",src:a(3650).Z})),(0,i.kt)("p",null,"The first step is to copy it and all it\u2019s dependencies to your ",(0,i.kt)("inlineCode",{parentName:"p"},"AssetPack/")," folder inside the Project:"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you want, you don\u2019t need to do this and instead you can generate an Asset Pack with all files from the Marketplace, but will create a big and kind of useless content for nanos world."))),(0,i.kt)("p",null,"To do so, just drag-n-drop ",(0,i.kt)("inlineCode",{parentName:"p"},"MESH_PC_00")," into your ",(0,i.kt)("inlineCode",{parentName:"p"},"AssetPack/")," folder and select ",(0,i.kt)("em",{parentName:"p"},"Advanced Copy Here"),", this will copy all files and all dependencies in there, i.e. only the real needed ones: "),(0,i.kt)("h4",{id:"right-clicked-mesh_pc_00-and-advancing-copying-into-myassetpack-folder"},"Right clicked MESH_PC_00 and Advancing Copying into MyAssetPack/ folder"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Right clicked MESH_PC_00 and Advancing Copying into MyAssetPack/ folder",src:a(2374).Z})),(0,i.kt)("p",null,"Press OK to confirm: "),(0,i.kt)("h4",{id:"confirming-copying-files"},"Confirming copying files"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Confirming copying files",src:a(7777).Z})),(0,i.kt)("p",null,"And now we have only our wanted Skeletal Mesh and it\u2019s Textures/Materials into our Asset Pack folder, which we will export: "),(0,i.kt)("h4",{id:"all-files-copied-automatically"},"All files copied automatically"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"All files copied automatically",src:a(3314).Z})),(0,i.kt)("h3",{id:"converting-the-skeleton-to-nanos-worlds-skeleton-and-physics-asset"},"Converting the Skeleton to nanos world\u2019s Skeleton and Physics Asset"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Please refer to section ",(0,i.kt)("a",{parentName:"p",href:"/docs/assets-modding/creating-assets/characters-meshes#tips-for-integrating-skeletal-meshs-with-nanos-world-character"},"Tips for integrating Skeletal Meshes with nanos world Character")," for converting the ",(0,i.kt)("inlineCode",{parentName:"p"},"MESH_PC_00")," to use our ",(0,i.kt)("strong",{parentName:"p"},"Skeleton")," and the ",(0,i.kt)("strong",{parentName:"p"},"Physics Asset"),"."))),(0,i.kt)("p",null,"After it\u2019s converted, save everything and you can delete the old Skeleton ","(","which was located at ",(0,i.kt)("inlineCode",{parentName:"p"},"SCK_Casual01/Mannquin/")," folder",")",": "),(0,i.kt)("h4",{id:"deleting-old-useless-skeleton"},"Deleting old useless Skeleton"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Deleting old useless Skeleton",src:a(3697).Z})),(0,i.kt)("h3",{id:"exporting--packaging--cooking-the-assets-to-nanos-world"},"Exporting / Packaging / Cooking the Assets to nanos world"),(0,i.kt)("p",null,"Cooking/Packaging Unreal Engine Projects is very straightforward ","(","this is the same as \u2018generating\u2019 your game\u2019s .exe if you are making a game in UE4",")","."),(0,i.kt)("p",null,"Before we export it, let\u2019s say to UE4 to only export our AssetPack folder, otherwise it will compile and export all folders in the Project. You can skip this step if you don\u2019t care, but will increase the packaging time."),(0,i.kt)("p",null,"For that, open the Project Settings \u27a1 Packaging ","(","or search for ",(0,i.kt)("em",{parentName:"p"},"Directories to never Cook"),")",", and let\u2019s add a blacklist of directories to skip cooking ","(","exporting",")",", I\u2019m selecting the one from which we imported: ",(0,i.kt)("inlineCode",{parentName:"p"},"SCK_Casual01/")," which we don\u2019t want exported together because we had already copied the files we want to our AssetPack/ folder: "),(0,i.kt)("h4",{id:"selecting-which-folders-to-cook"},"Selecting which folders to Cook"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Selecting which folders to Cook",src:a(1087).Z})),(0,i.kt)("p",null,"And now we just need to Package the Project! File \u27a1 Package Project \u27a1 Windows ","(","64-bit",")",", and select a folder in your PC to save it: "),(0,i.kt)("h4",{id:"packaging-the-project"},"Packaging the Project"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Packaging the Project",src:a(8372).Z})),(0,i.kt)("h3",{id:"getting-the-files--generating-assetstoml"},"Getting the Files & Generating Assets.toml"),(0,i.kt)("p",null,"We are almost finished! Now, let\u2019s copy all cooked files into our ",(0,i.kt)("inlineCode",{parentName:"p"},"Server/Assets/")," folder! For that, find and open the folder which you just Packaged from UE4, you will have something like this: "),(0,i.kt)("h4",{id:"packaged-the-project"},"Packaged the Project"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Packaged the Project",src:a(9762).Z})),(0,i.kt)("p",null,"The folder we want is inside ",(0,i.kt)("inlineCode",{parentName:"p"},"Content/YourAssetFolder"),": "),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(2754).Z})),(0,i.kt)("p",null,"Let\u2019s copy it into our ",(0,i.kt)("inlineCode",{parentName:"p"},"Server/Assets/"),": "),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(3780).Z})),(0,i.kt)("p",null,"And the last step is to generate an ",(0,i.kt)("inlineCode",{parentName:"p"},"Assets.toml")," file! For our luck, the ADK comes with a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.nanos.world/modding/AssetsDevelopmentKit.html#assets-toml-generator-nanosworld-blueprints-utility-wbp-assetstomlgenerator"},"Tool")," which generates an ",(0,i.kt)("inlineCode",{parentName:"p"},"Assets.toml")," configuration automatically for us!"),(0,i.kt)("p",null,"We just need to put the AssetPack/ folder name in there and press ",(0,i.kt)("em",{parentName:"p"},"GENERATE"),": "),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(1329).Z})),(0,i.kt)("p",null,"Now you just need to create an ",(0,i.kt)("inlineCode",{parentName:"p"},"Assets.toml")," file inside your ",(0,i.kt)("inlineCode",{parentName:"p"},"Server/Assets/MyAssetPack/")," folder and paste the generated configuration inside of it: "),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(4791).Z})),(0,i.kt)("h3",{id:"using-the-skeletal-mesh-in-a-character-through-scripting"},"Using the Skeletal Mesh in a Character through Scripting"),(0,i.kt)("p",null,"The last step is to use it! For that, you just need to use it\u2019s Key ",(0,i.kt)("inlineCode",{parentName:"p"},"MyAssetPack::MESH_PC_00"),"! E.g.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'local char = Character(Vector(0, 300, 100), Rotator(), "MyAssetPack::MESH_PC_00")\n')),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(9494).Z})),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"And\u2026 voila! Imported and integrated with all nanos world animations! "))))}h.isMDXComponent=!0},4863:function(e,t,a){t.Z=a.p+"assets/images/character-meshes-01-1eec8f8b08fd05799bce45b456c50899.jpg"},8561:function(e,t,a){t.Z=a.p+"assets/images/character-meshes-02-2fcc24aea988b4718757135b07cec045.jpg"},7600:function(e,t,a){t.Z=a.p+"assets/images/character-meshes-03-31b4a0d821df6c468a570beb711bdfbb.jpg"},2037:function(e,t,a){t.Z=a.p+"assets/images/character-meshes-04-6b5bc42cd9dbfbad6e04fac41d97abe7.jpg"},6355:function(e,t,a){t.Z=a.p+"assets/images/character-meshes-05-cdd0b7b8120c2daff11fd6bd89324ebf.jpg"},9736:function(e,t,a){t.Z=a.p+"assets/images/character-meshes-06-c42142eea83a699ba09f9e5133c0b2bd.jpg"},1786:function(e,t,a){t.Z=a.p+"assets/images/character-meshes-07-0bc69419c2bf2435d83f6b29c92090d2.jpg"},7791:function(e,t,a){t.Z=a.p+"assets/images/character-meshes-08-a506268778a08f45d2d8aee1e8898913.jpg"},3650:function(e,t,a){t.Z=a.p+"assets/images/character-meshes-09-3999b43c406aee684da4306a354e610e.jpg"},2374:function(e,t,a){t.Z=a.p+"assets/images/character-meshes-10-9fd3c65f52304a8e8f4825d0b486097a.jpg"},7777:function(e,t,a){t.Z=a.p+"assets/images/character-meshes-11-9bb025ffc68ef59d228d0b555c5596f1.jpg"},3314:function(e,t,a){t.Z=a.p+"assets/images/character-meshes-12-8226d527eacf532b885d80f320a9c90a.jpg"},3697:function(e,t,a){t.Z=a.p+"assets/images/character-meshes-13-3564439dffb1f5a2fdb0565b384517bb.jpg"},1087:function(e,t,a){t.Z=a.p+"assets/images/character-meshes-14-50c30df5bfc4939473590d8fc813b8c2.jpg"},8372:function(e,t,a){t.Z=a.p+"assets/images/character-meshes-15-c1a672e48e10776021c684a26c717337.jpg"},9762:function(e,t,a){t.Z=a.p+"assets/images/character-meshes-16-4217e1f7c4fb809f2cbead3b6cc0e6d8.jpg"},2754:function(e,t,a){t.Z=a.p+"assets/images/character-meshes-17-afbbb6fe6f6288a0a7047bea7c39db4c.jpg"},3780:function(e,t,a){t.Z=a.p+"assets/images/character-meshes-18-05cffd2290bd1a2e847e7c58d707b99f.jpg"},1329:function(e,t,a){t.Z=a.p+"assets/images/character-meshes-19-edf61fd21d4d8bb3249e1d178b8babd4.jpg"},4791:function(e,t,a){t.Z=a.p+"assets/images/character-meshes-20-9a54048b2f7200830cd845ab8c6de7c3.jpg"},9494:function(e,t,a){t.Z=a.p+"assets/images/character-meshes-21-e14ba2678fc5324ce74b1f0d97998f89.jpg"}}]);