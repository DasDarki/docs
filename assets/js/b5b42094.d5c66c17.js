"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[7649],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(a),u=o,g=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return a?n.createElement(g,i(i({ref:t},p),{},{components:a})):n.createElement(g,i({ref:t},p))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},78585:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var n=a(83117),o=a(80102),r=(a(67294),a(3905)),i=["components"],c={description:"All you need to know to communicate between different Packages",sidebar_position:3,tags:["scripting"]},l="Packages Communication",s={unversionedId:"core-concepts/scripting/communicating-between-packages",id:"core-concepts/scripting/communicating-between-packages",title:"Packages Communication",description:"All you need to know to communicate between different Packages",source:"@site/docs/core-concepts/scripting/communicating-between-packages.md",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/communicating-between-packages",permalink:"/docs/next/core-concepts/scripting/communicating-between-packages",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/core-concepts/scripting/communicating-between-packages.md",tags:[{label:"scripting",permalink:"/docs/next/tags/scripting"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1634210882,formattedLastUpdatedAt:"10/14/2021",sidebarPosition:3,frontMatter:{description:"All you need to know to communicate between different Packages",sidebar_position:3,tags:["scripting"]},sidebar:"main",previous:{title:"Authority Concepts",permalink:"/docs/next/core-concepts/scripting/authority-concepts"},next:{title:"Entity Values",permalink:"/docs/next/core-concepts/scripting/entity-values"}},p=[{value:"Custom Events",id:"custom-events",children:[{value:"Communicating with Packages in the same Side",id:"communicating-with-packages-in-the-same-side",children:[],level:3},{value:"Sending data through the network",id:"sending-data-through-the-network",children:[],level:3}],level:2},{value:"Packages Exported Functions",id:"packages-exported-functions",children:[{value:"Exporting a Function",id:"exporting-a-function",children:[],level:3},{value:"Calling an Exported Function from another Package",id:"calling-an-exported-function-from-another-package",children:[],level:3}],level:2},{value:"Using Package&#39;s RequirePackage",id:"using-packages-requirepackage",children:[{value:"Output",id:"output",children:[],level:4}],level:2}],m={toc:p};function d(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"packages-communication"},"Packages Communication"),(0,r.kt)("p",null,"All you need to know to communicate between different Packages"),(0,r.kt)("p",null,"In nanos world there are 3 main ways which you can interact with other ",(0,r.kt)("strong",{parentName:"p"},"Packages"),". In this page we will explain in details how to do so."),(0,r.kt)("h2",{id:"custom-events"},"Custom Events"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For more information and examples about using Custom Events, please refer to Events."))),(0,r.kt)("h3",{id:"communicating-with-packages-in-the-same-side"},"Communicating with Packages in the same Side"),(0,r.kt)("p",null,"Custom Events are the easier way to send data or information to other packages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="PackageOne/Server/Index.lua"',title:'"PackageOne/Server/Index.lua"'},'local my_parameter1 = 123\nlocal my_parameter2 = "hello there"\nlocal my_parameter3 = { important_stuff = "omg!" }\n\nEvents.Call("MyAwesomeEvent", my_parameter1, my_parameter2, my_parameter3)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="PackageTwo/Server/Index.lua"',title:'"PackageTwo/Server/Index.lua"'},'Events.Subscribe("MyAwesomeEvent", function(parameter1, parameter2, parameter3)\n    Package.Log("Received " .. parameter1) -- Received 123\n    Package.Log("Received " .. parameter2) -- Received hello there\n    Package.Log("Received " .. parameter3) -- Received table\nend)\n')),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Note:")," Calling events will trigger the event in all Packages."))),(0,r.kt)("h3",{id:"sending-data-through-the-network"},"Sending data through the network"),(0,r.kt)("p",null,"Sending information through the network is not different from sending in the same side:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'local my_parameter1 = "cool data from network"\n\n-- Call this event to all Players\nEvents.BroadcastRemote("GetThisFromServer", my_parameter1)\n\nlocal player_02 = GetPlayerSomehow()\n\n-- Or call this event to a specific player\nEvents.CallRemote("GetThisFromServer", player_02, my_parameter1)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},'Events.Subscribe("GetThisFromServer", function(parameter1, parameter2, parameter3)\n    Package.Log("Received " .. parameter1) -- Received cool data from network\nend)\n')),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Note:")," Calling network events will trigger the event in all Packages from the other side."))),(0,r.kt)("h2",{id:"packages-exported-functions"},"Packages Exported Functions"),(0,r.kt)("p",null,"Another way of communicating is using Exported Functions. With Exported Functions you can define functions in your Package which can be called by any other Package and have a value returned."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Unlike events, exported functions can return values to the caller. But you can only call Exported Functions from the same side ","(","Server or Client",")","."))),(0,r.kt)("h3",{id:"exporting-a-function"},"Exporting a Function"),(0,r.kt)("p",null,"For exporting functions, use ",(0,r.kt)("inlineCode",{parentName:"p"},"Package.Export()")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="PackageOne/Server/Index.lua"',title:'"PackageOne/Server/Index.lua"'},'-- Defines a function which you want to export\nfunction SpawnCoolWeapon(location, rotation)\n    local cool_weapon = Weapon(location or Vector(), rotation or Rotator(), ...)\n    return cool_weapon\nend\n\n-- Exports the function to be called by other Packages \nPackage.Export("SpawnCoolWeapon", SpawnCoolWeapon)\n')),(0,r.kt)("h3",{id:"calling-an-exported-function-from-another-package"},"Calling an Exported Function from another Package"),(0,r.kt)("p",null,"For calling a function exported by another Package, use ",(0,r.kt)("inlineCode",{parentName:"p"},"Package.Call()")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="PackageTwo/Server/Index.lua"',title:'"PackageTwo/Server/Index.lua"'},'-- Calls the exported function\nlocal cool_weapon = Package.Call("PackageOne","SpawnCoolWeapon", Vector(), Rotator())\n')),(0,r.kt)("h2",{id:"using-packages-requirepackage"},"Using Package's RequirePackage"),(0,r.kt)("p",null,"The last way of communicating between Packages is by loading other Packages inside the current Package:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="PackageOne/Server/Index.lua"',title:'"PackageOne/Server/Index.lua"'},'Package.Log("Hello from Package One!")\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="PackageTwo/Server/Index.lua"',title:'"PackageTwo/Server/Index.lua"'},'Package.RequirePackage("PackageOne")\n\nPackage.Log("Hello from Package Two!")\n')),(0,r.kt)("h4",{id:"output"},"Output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Hello from Package One!\nHello from Package Two!\n")),(0,r.kt)("p",null,"This will load the file Index.lua from PackageOne into the VM of PackageOne where you called ",(0,r.kt)("inlineCode",{parentName:"p"},"Package.RequirePackage()"),"."),(0,r.kt)("p",null,"Also the Required Package will be sent to the clients, then you can ",(0,r.kt)("inlineCode",{parentName:"p"},"RequirePackage")," in the client side too."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"To be able to ",(0,r.kt)("inlineCode",{parentName:"p"},"RequirePackage")," in the Client, you must first ",(0,r.kt)("inlineCode",{parentName:"p"},"RequirePackage")," it in the Server, so it can be loaded and sent to Clients."))))}d.isMDXComponent=!0}}]);