"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[1412],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return p}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(r),p=o,g=h["".concat(c,".").concat(p)]||h[p]||d[p]||a;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},39301:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return h}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),i=["components"],s={description:"How to create a Monster Truck using the Vehicle system",tags:["tutorial-example","scripting","verm\xf6gen"]},c="Monster Truck",l={unversionedId:"getting-started/tutorials-and-examples/monster-truck",id:"version-latest/getting-started/tutorials-and-examples/monster-truck",title:"Monster Truck",description:"How to create a Monster Truck using the Vehicle system",source:"@site/i18n/de/docusaurus-plugin-content-docs/version-latest/getting-started/tutorials-and-examples/monster-truck.md",sourceDirName:"getting-started/tutorials-and-examples",slug:"/getting-started/tutorials-and-examples/monster-truck",permalink:"/de/docs/getting-started/tutorials-and-examples/monster-truck",editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/getting-started/tutorials-and-examples/monster-truck.md",tags:[{label:"tutorial-example",permalink:"/de/docs/tags/tutorial-example"},{label:"scripting",permalink:"/de/docs/tags/scripting"},{label:"verm\xf6gen",permalink:"/de/docs/tags/vermogen"}],version:"latest",frontMatter:{description:"How to create a Monster Truck using the Vehicle system",tags:["tutorial-example","scripting","verm\xf6gen"]},sidebar:"version-latest/main",previous:{title:"Hosting Server 4Free - Google Cloud",permalink:"/de/docs/getting-started/tutorials-and-examples/hosting-server-4free-gcp"},next:{title:"Name Tags",permalink:"/de/docs/getting-started/tutorials-and-examples/name-tags"}},u=[],d={toc:u};function h(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"monster-truck"},"Monster Truck"),(0,a.kt)("p",null,"How to create a Monster Truck using the Vehicle system."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(4202).Z})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'-- Spawns a Pickup\nlocal vehicle = Vehicle(Vector(0, 0, 100), Rotator(), "nanos-world::SK_Pickup", 0, true, false, true, "nanos-world::A_Vehicle_Engine_10")\n\n-- Configures it\nvehicle:SetEngineSetup(4500)\nvehicle:SetSteeringWheelSetup(Vector(0, 27, 120), 24)\nvehicle:SetHeadlightsSetup(Vector(250, 0, 70))\n\n-- Adds 4 Static Mesh wheels attached to each mesh\'s Wheel Bone (those won\'t have collision and are visual only)\nvehicle:AddStaticMeshAttached("wheel_rear_left",   "nanos-world::SM_Tire_01", "Wheel_Rear_Left",   Vector(0, -35, 0), Rotator(0, -90, 0))\nvehicle:AddStaticMeshAttached("wheel_rear_right",  "nanos-world::SM_Tire_01", "Wheel_Rear_Right",  Vector(0,  45, 0), Rotator(0, -90, 0))\nvehicle:AddStaticMeshAttached("wheel_front_left",  "nanos-world::SM_Tire_01", "Wheel_Front_Left",  Vector(0, -35, 0), Rotator(0,  90, 0))\nvehicle:AddStaticMeshAttached("wheel_front_right", "nanos-world::SM_Tire_01", "Wheel_Front_Right", Vector(0,  45, 0), Rotator(0,  90, 0))\n\n-- Configures each "Physical" Wheel, note that as our Wheel Static Mesh has height of 160 and width 60, we configure the wheels to have radius\n-- of 80 and width 60, also because of SK_Pickup bones are not perfectly aligned, left wheels must be laterally offset a bit\nvehicle:SetWheel(0, "Wheel_Front_Left",  80, 60, 30, 20, 0.25, 2, 17, 1000, 0, 100, 10, 7, 1, 1500, 3000, true, Vector(0, -80, 0))\nvehicle:SetWheel(1, "Wheel_Front_Right", 80, 60, 30, 20, 0.25, 2, 17, 1000, 0, 100, 10, 7, 1, 1500, 3000, true, Vector(0,  90, 0))\nvehicle:SetWheel(2, "Wheel_Rear_Left",   80, 60, 30, 20, 0.25, 2, 17, 1000, 0, 100, 10, 7, 1, 1500, 3000, true, Vector(0, -80, 0))\nvehicle:SetWheel(3, "Wheel_Rear_Right",  80, 60, 30, 20, 0.25, 2, 17, 1000, 0, 100, 10, 7, 1, 1500, 3000, true, Vector(0,  90, 0))\n\n-- Adds only a Passenger and Driver door/seat\nvehicle:SetDoor(0, Vector(50, -75, 105), Vector( 8, -32.5,  95), Rotator(0, 0, 10), 70, -150)\nvehicle:SetDoor(1, Vector(50,  75, 105), Vector(25,    50,  90), Rotator(0, 0,  0), 70,  150)\n\n-- As we set AutoCreatePhysics = false on the constructor, we need to call this after configuring it (so if there is any player connected, he\n-- doesn\'t need to recreate the physics for each function called - improving the performance)\nvehicle:RecreatePhysics()\n')))}h.isMDXComponent=!0},4202:function(e,t,r){t.Z=r.p+"assets/images/monster-truck-02f3d04227b14d117feb4a452481af7f.jpg"}}]);