"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[5225],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(n),c=s,v=m["".concat(l,".").concat(c)]||m[c]||u[c]||r;return n?a.createElement(v,i(i({ref:t},p),{},{components:n})):a.createElement(v,i({ref:t},p))}));function c(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2710:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return d},assets:function(){return p},toc:function(){return u},default:function(){return c}});var a=n(83117),s=n(80102),r=(n(67294),n(3905)),i=["components"],o={description:"nanos world Assets Development Kit - ADK",sidebar_position:2,tags:["assets"],keywords:["SDK","ADK","assets","kit","unreal"]},l="Kit de D\xe9veloppement des Assets",d={unversionedId:"assets-modding/creating-assets/adk-assets-development-kit",id:"version-latest/assets-modding/creating-assets/adk-assets-development-kit",title:"Kit de D\xe9veloppement des Assets",description:"nanos world Assets Development Kit - ADK",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-latest/assets-modding/creating-assets/adk-assets-development-kit.md",sourceDirName:"assets-modding/creating-assets",slug:"/assets-modding/creating-assets/adk-assets-development-kit",permalink:"/fr/docs/assets-modding/creating-assets/adk-assets-development-kit",editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/assets-modding/creating-assets/adk-assets-development-kit.md",tags:[{label:"assets",permalink:"/fr/docs/tags/assets"}],version:"latest",sidebarPosition:2,frontMatter:{description:"nanos world Assets Development Kit - ADK",sidebar_position:2,tags:["assets"],keywords:["SDK","ADK","assets","kit","unreal"]},sidebar:"version-latest/main",previous:{title:"Importer des assets personnalis\xe9s",permalink:"/fr/docs/assets-modding/creating-assets/importing-assets"},next:{title:"Static Meshes",permalink:"/fr/docs/assets-modding/creating-assets/static-meshes/"}},p={},u=[{value:"T\xe9l\xe9chargement du kit de d\xe9veloppement des assets de nanos world - ADK",id:"t\xe9l\xe9chargement-du-kit-de-d\xe9veloppement-des-assets-de-nanos-world---adk",level:2},{value:"Ouverture du projet du kit de d\xe9veloppement d&#39;assets",id:"ouverture-du-projet-du-kit-de-d\xe9veloppement-dassets",level:2},{value:"Outils disponibles dans le projet ADK",id:"outils-disponibles-dans-le-projet-adk",level:2},{value:"Blueprints placeholders",id:"blueprints-placeholders",level:3},{value:"<code>NanosWorld/Blueprints/Placeholders/</code>",id:"nanosworldblueprintsplaceholders",level:4},{value:"G\xe9n\xe9rateur de code Lua",id:"g\xe9n\xe9rateur-de-code-lua",level:3},{value:"<code>NanosWorld/Blueprints/Utility/WBP_LuaCodeGenerator</code>",id:"nanosworldblueprintsutilitywbp_luacodegenerator",level:4},{value:"G\xe9n\xe9rateur Assets.toml",id:"g\xe9n\xe9rateur-assetstoml",level:3},{value:"<code>NanosWorld/Blueprints/Utility/WBP_AssetsTomlGenerator</code>",id:"nanosworldblueprintsutilitywbp_assetstomlgenerator",level:4},{value:"Acteur de Soleil &amp; Ciel",id:"acteur-de-soleil--ciel",level:3},{value:"<code>NanosWorld/Blueprints/World/BP_SunSky</code>",id:"nanosworldblueprintsworldbp_sunsky",level:4},{value:"Mat\xe9riaux physiques",id:"mat\xe9riaux-physiques",level:3},{value:"<code>NanosWorld/MaterialLibrary/PhysicalMaterials/</code>",id:"nanosworldmateriallibraryphysicalmaterials",level:4},{value:"Squelette du mannequin",id:"squelette-du-mannequin",level:3},{value:"<code>NanosWorld/Characters/Common/SKEL_Mannequin</code>",id:"nanosworldcharacterscommonskel_mannequin",level:4},{value:"G\xe9n\xe9rateur de vignettes",id:"g\xe9n\xe9rateur-de-vignettes",level:3},{value:"<code>NanosWorld/Blueprints/Utility/ThumbnailGenerator</code>",id:"nanosworldblueprintsutilitythumbnailgenerator",level:4}],m={toc:u};function c(e){var t=e.components,o=(0,s.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kit-de-d\xe9veloppement-des-assets"},"Kit de D\xe9veloppement des Assets"),(0,r.kt)("p",null,"nanos world Assets Development Kit - ADK"),(0,r.kt)("p",null,"nanos world fournit un ",(0,r.kt)("strong",{parentName:"p"},"Projet Unreal Engine")," enti\xe8rement configurable et pr\xeat \xe0 l'emploi appel\xe9 ",(0,r.kt)("strong",{parentName:"p"},"nanos world Assets Development Kit - ADK")," pour vous aider \xe0 int\xe9grer et exporter des Models et des Maps beaucoup plus rapidement et simplement. Ce projet contient des ",(0,r.kt)("strong",{parentName:"p"},"Espaces r\xe9serv\xe9s"),", ",(0,r.kt)("strong",{parentName:"p"},"Outils")," et ",(0,r.kt)("strong",{parentName:"p"},"R\xe9f\xe9rences correctes")," qui doit \xeatre utilis\xe9 pour cr\xe9er des ",(0,r.kt)("strong",{parentName:"p"},"Caract\xe8res "),", ",(0,r.kt)("strong",{parentName:"p"},"Models"),", etc."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"To be able to use the ",(0,r.kt)("strong",{parentName:"p"},"ADK"),", you will need to have ",(0,r.kt)("a",{parentName:"p",href:"#installing-unreal-engine-4"},"Unreal Engine")," installed."))),(0,r.kt)("h2",{id:"t\xe9l\xe9chargement-du-kit-de-d\xe9veloppement-des-assets-de-nanos-world---adk"},"T\xe9l\xe9chargement du kit de d\xe9veloppement des assets de nanos world - ADK"),(0,r.kt)("p",null,"Notre ADK est t\xe9l\xe9charg\xe9 dans ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nanos-world/assets-development-kit/releases/latest"},"GitHub"),", veuillez le t\xe9l\xe9charger dans sa derni\xe8re version et l'extraire dans votre ordinateur."),(0,r.kt)("h2",{id:"ouverture-du-projet-du-kit-de-d\xe9veloppement-dassets"},"Ouverture du projet du kit de d\xe9veloppement d'assets"),(0,r.kt)("p",null,"Vous y trouverez un fichier ",(0,r.kt)("inlineCode",{parentName:"p"},"NanosWorldADK.uproject"),", il suffit de l'ouvrir avec Unreal Engine et vous \xeates pr\xeat !"),(0,r.kt)("p",null,"Vous allez voir qu'on a deux dossiers le r\xe9pertoire: ",(0,r.kt)("inlineCode",{parentName:"p"},"NanosWorld/")," et ",(0,r.kt)("inlineCode",{parentName:"p"},"MyAssetPack/"),"."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can rename ",(0,r.kt)("inlineCode",{parentName:"p"},"MyAssetPack")," to anything you want to be your Asset Pack. Ou vous pouvez le supprimer, mais notez que la suppression de ce dossier par Unreal peut ne pas fonctionner. Si vous souhaitez le supprimer, veuillez le faire via l'Explorateur Windows."))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Veuillez ne pas ",(0,r.kt)("strong",{parentName:"p"},"MODIFIER"),", ",(0,r.kt)("strong",{parentName:"p"},"SUPPRIMER"),", ",(0,r.kt)("strong",{parentName:"p"},"CR\xc9ER")," ou ",(0,r.kt)("strong",{parentName:"p"},"COPIER")," n'importe quel fichier pr\xe9sent dans le dossier ",(0,r.kt)("inlineCode",{parentName:"p"},"NanosWorld/")," sinon, l'ADK ne fonctionnera pas correctement. Veillez \xe9galement \xe0 ne pas les modifier involontairement ! Si l'on vous demande d'y enregistrer un fichier modifi\xe9, annulez-le ! Toutes les r\xe9f\xe9rences doivent utiliser ",(0,r.kt)("inlineCode",{parentName:"p"},"NanosWorld/")," l\xe0 o\xf9 elles se trouvent."),(0,r.kt)("p",{parentName:"div"},"Le dossier ",(0,r.kt)("inlineCode",{parentName:"p"},"NanosWorld/")," contient quelques assets que vous pouvez utiliser pour r\xe9f\xe9rencer ",(0,r.kt)("strong",{parentName:"p"},"vos")," assets et faire en sorte que l'exportation conserve les bonnes r\xe9f\xe9rences lors de leur utilisation dans le jeu."))),(0,r.kt)("h2",{id:"outils-disponibles-dans-le-projet-adk"},"Outils disponibles dans le projet ADK"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"adk-assets-development-kit#placeholder-blueprints"},"Blueprints placeholders ",(0,r.kt)("inlineCode",{parentName:"a"},"NanosWorld/Blueprints/Placeholders/"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"adk-assets-development-kit#lua-code-generator"},"G\xe9n\xe9rateur de code Lua ",(0,r.kt)("inlineCode",{parentName:"a"},"NanosWorld/Blueprints/Utility/WBP_LuaCodeGenerator"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"adk-assets-development-kit#assets-toml-generator"},"G\xe9n\xe9rateur Assets.toml ",(0,r.kt)("inlineCode",{parentName:"a"},"NanosWorld/Blueprints/Utility/WBP_AssetsTomlGenerator"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"adk-assets-development-kit#sunand-sky-actor"},"Acteur Soleil & Ciel ",(0,r.kt)("inlineCode",{parentName:"a"},"NanosWorld/Blueprints/World/BP_SunSky"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"adk-assets-development-kit#physical-materials"},"Mat\xe9riaux physiques ",(0,r.kt)("inlineCode",{parentName:"a"},"NanosWorld/MaterialLibrary/PhysicalMaterials/"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"adk-assets-development-kit#mannequin-skeleton"},"Squelette du mannequin ",(0,r.kt)("inlineCode",{parentName:"a"},"NanosWorld/Characters/Common/SKEL_Mannequin"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"adk-assets-development-kit#thumbnail-generator"},"G\xe9n\xe9rateur de vignettes ",(0,r.kt)("inlineCode",{parentName:"a"},"NanosWorld/Blueprints/Utility/ThumbnailGenerator")))),(0,r.kt)("h3",{id:"blueprints-placeholders"},"Blueprints placeholders"),(0,r.kt)("h4",{id:"nanosworldblueprintsplaceholders"},(0,r.kt)("inlineCode",{parentName:"h4"},"NanosWorld/Blueprints/Placeholders/")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Placeholder Blueprints overview",src:n(20802).Z,width:"1213",height:"186"})),(0,r.kt)("p",null,"Vous pouvez utiliser les ",(0,r.kt)("strong",{parentName:"p"},"Blueprints placeholders")," pour d\xe9finir les positions de spawn des ",(0,r.kt)("strong",{parentName:"p"},"v\xe9hicules"),", ",(0,r.kt)("strong",{parentName:"p"},"armes"),", ",(0,r.kt)("strong",{parentName:"p"},"personnages")," et ",(0,r.kt)("strong",{parentName:"p"},"props"),". Cela ne fonctionne que pour vous aider \xe0 g\xe9n\xe9rer un code Lua avec des positions de spawn apr\xe8s tout. Ces blueprints ne sont pas export\xe9s avec la carte. Utilisez le ",(0,r.kt)("a",{parentName:"p",href:"adk-assets-development-kit#lua-code-generator-nanosworld-blueprints-utility-wbp_luacodegenerator"},"Lua Code Generator")," pour g\xe9n\xe9rer le script Lua avec tous les emplacements de spawn."),(0,r.kt)("h3",{id:"g\xe9n\xe9rateur-de-code-lua"},"G\xe9n\xe9rateur de code Lua"),(0,r.kt)("h4",{id:"nanosworldblueprintsutilitywbp_luacodegenerator"},(0,r.kt)("inlineCode",{parentName:"h4"},"NanosWorld/Blueprints/Utility/WBP_LuaCodeGenerator")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Lua Code Generator Widget",src:n(2949).Z,width:"1009",height:"606"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Lua Code Generator")," est un ",(0,r.kt)("strong",{parentName:"p"},"Editor Utility Widget")," qui scanne la carte qui est actuellement charg\xe9e dans votre Unreal et g\xe9n\xe8re une liste de code de spawn avec l'emplacement exact et la rotation pour chaque ",(0,r.kt)("a",{parentName:"p",href:"adk-assets-development-kit#placeholder-blueprints-nanosworld-blueprints-placeholders"},"Blueprint Placeholder "),"que vous aviez spawn\xe9."),(0,r.kt)("p",null,"Pour l'ouvrir, faites un clic droit dessus et appuyez sur ",(0,r.kt)("strong",{parentName:"p"},"Run Editor Utility Widget")," :"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:n(80741).Z,width:"318",height:"606"})),(0,r.kt)("h3",{id:"g\xe9n\xe9rateur-assetstoml"},"G\xe9n\xe9rateur Assets.toml"),(0,r.kt)("h4",{id:"nanosworldblueprintsutilitywbp_assetstomlgenerator"},(0,r.kt)("inlineCode",{parentName:"h4"},"NanosWorld/Blueprints/Utility/WBP_AssetsTomlGenerator")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:n(47187).Z,width:"1006",height:"654"})),(0,r.kt)("p",null,"Il s'agit d'un ",(0,r.kt)("strong",{parentName:"p"},"Editor Utility Widget")," qui scanne un dossier (d\xe9termin\xe9 par la TextBox) et g\xe9n\xe8re la configuration d'un Assets.toml avec tous les assets du dossier (qui peuvent \xeatre utilis\xe9s dans nanos world)."),(0,r.kt)("h3",{id:"acteur-de-soleil--ciel"},"Acteur de Soleil ","&"," Ciel"),(0,r.kt)("h4",{id:"nanosworldblueprintsworldbp_sunsky"},(0,r.kt)("inlineCode",{parentName:"h4"},"NanosWorld/Blueprints/World/BP_SunSky")),(0,r.kt)("p",null,"Il s'agit d'un ",(0,r.kt)("strong",{parentName:"p"},"Sun ","&"," Sky Blueprint")," pr\xe9configur\xe9 qui peut \xeatre utilis\xe9 et facilement remplac\xe9 par le soleil officiel de nanos world avec ",(0,r.kt)("inlineCode",{parentName:"p"},"World,SpawnDefaultSun()"),". Ceci est utile pour obtenir un r\xe9sultat approximatif de la fa\xe7on dont la lumi\xe8re se pr\xe9sentera dans le jeu si vous d\xe9cidez de faire appara\xeetre le soleil par d\xe9faut."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Note:")," Remplacer le Soleil par le Scripting avec ",(0,r.kt)("inlineCode",{parentName:"p"},"World.SpawnDefaultSun()"),", respawnera l'acteur du Soleil, ce qui signifie qu'aucune configuration faite sur l'acteur Soleil ","&"," ; Ciel ne persistera"),(0,r.kt)("p",{parentName:"div"},"Exemple : L'intensit\xe9 lumineuse, la couleur, le post-traitement et toute autre configuration seront perdus."))),(0,r.kt)("h3",{id:"mat\xe9riaux-physiques"},"Mat\xe9riaux physiques"),(0,r.kt)("h4",{id:"nanosworldmateriallibraryphysicalmaterials"},(0,r.kt)("inlineCode",{parentName:"h4"},"NanosWorld/MaterialLibrary/PhysicalMaterials/")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:n(85410).Z,width:"1213",height:"172"})),(0,r.kt)("p",null,"Si vous cr\xe9ez un ",(0,r.kt)("strong",{parentName:"p"},"Mat\xe9riau"),", vous pouvez (et devriez) utiliser ces ",(0,r.kt)("strong",{parentName:"p"},"Mat\xe9riaux physiques")," pour mieux vous int\xe9grer au nanos world. L'utilisation de ces mat\xe9riaux physiques permettra \xe0 nanos world de reconna\xeetre le type de surface de votre prop/objet et de lui attribuer un son quand touch\xe9."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"NE PAS ",(0,r.kt)("strong",{parentName:"p"},"modifier")," ou ",(0,r.kt)("strong",{parentName:"p"},"renommer")," les Mat\xe9riaux physiques, mais seulement les utiliser en les r\xe9f\xe9ren\xe7ant dans vos Mat\xe9riaux."))),(0,r.kt)("h3",{id:"squelette-du-mannequin"},"Squelette du mannequin"),(0,r.kt)("h4",{id:"nanosworldcharacterscommonskel_mannequin"},(0,r.kt)("inlineCode",{parentName:"h4"},"NanosWorld/Characters/Common/SKEL_Mannequin")),(0,r.kt)("p",null,"Pour pouvoir cr\xe9er des skeletal meshes qui fonctionnent avec notre classe ",(0,r.kt)("a",{parentName:"p",href:"/fr/docs/scripting-reference/classes/character"},"Character"),", vous devez configurer votre skeletal mesh pour utiliser notre ",(0,r.kt)("strong",{parentName:"p"},"Squelette"),". Ce squelette est le m\xeame que le mannequin par d\xe9faut de l'Unreal Engine 4, donc tout skeletal mesh qui utilise le squelette du mannequin de l'UE4 fonctionnera pour nous !"),(0,r.kt)("p",null,"Pour changer le squelette d'un mesh : cliquez dessus avec le bouton droit de la souris ",">",">"," ; Skeleton ",">",">"," Assign Skeleton et changez-le en notre ",(0,r.kt)("inlineCode",{parentName:"p"},"SKEL_Mannequin"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:n(88622).Z,width:"685",height:"779"})),(0,r.kt)("h3",{id:"g\xe9n\xe9rateur-de-vignettes"},"G\xe9n\xe9rateur de vignettes"),(0,r.kt)("h4",{id:"nanosworldblueprintsutilitythumbnailgenerator"},(0,r.kt)("inlineCode",{parentName:"h4"},"NanosWorld/Blueprints/Utility/ThumbnailGenerator")),(0,r.kt)("p",null,"Nous avons lanc\xe9 notre outil ",(0,r.kt)("strong",{parentName:"p"},"G\xe9n\xe9rateur de vignettes")," pour vous aider \xe0 g\xe9n\xe9rer des images ",(0,r.kt)("inlineCode",{parentName:"p"},".jpg")," de vos assets. Pour l'utiliser, il suffit d'ouvrir le niveau ",(0,r.kt)("strong",{parentName:"p"},"ThumbnailGenerator")," et de cliquer sur Play. Vous pourrez ensuite d\xe9finir un dossier pour la recherche des assets (actuellement, seuls les static et skeletal meshes sont pris en charge) et un dossier pour la sauvegarde des images (en .jpg). Vous pouvez \xe9ventuellement conserver la hi\xe9rarchie des r\xe9pertoires dans le dossier de sortie ou enregistrer toutes les images dans le m\xeame dossier. Une fois que vous avez appuy\xe9 sur ",(0,r.kt)("strong",{parentName:"p"},"G\xe9n\xe9rer"),", le processus commence, l'outil charge tous les assets et prends une photo \xe0 partir de ceux-ci."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Note:")," cela peut \xeatre un processus lent selon si vos assets ont d\xe9j\xe0 \xe9t\xe9 compil\xe9s pr\xe9c\xe9demment."),(0,r.kt)("p",{parentName:"div"},"Il est \xe9galement recommand\xe9 de g\xe9n\xe9rer deux fois les vignettes, afin de garantir qu'elles seront enregistr\xe9es dans la meilleure qualit\xe9 possible."))),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:n(9870).Z,width:"1236",height:"740"})))}c.isMDXComponent=!0},20802:function(e,t,n){t.Z=n.p+"assets/images/adk-01-846dffe0833b1e8575996e97fd7e2f11.jpg"},2949:function(e,t,n){t.Z=n.p+"assets/images/adk-02-0b901da3e84e694b48131cfd2471dcbc.jpg"},80741:function(e,t,n){t.Z=n.p+"assets/images/adk-03-99cb2ed3fa24d3d2bd2695e72d8beb7d.jpg"},47187:function(e,t,n){t.Z=n.p+"assets/images/adk-04-f297905ad88d6675b6929d42464bd5c8.jpg"},85410:function(e,t,n){t.Z=n.p+"assets/images/adk-05-a9aa9bbd747fce98c31237cdcd581d1a.jpg"},88622:function(e,t,n){t.Z=n.p+"assets/images/adk-06-0c1907dc91241995355b74b649e78e76.jpg"},9870:function(e,t,n){t.Z=n.p+"assets/images/adk-07-bd0c7e89faf5509e4555728466eeca11.jpg"}}]);