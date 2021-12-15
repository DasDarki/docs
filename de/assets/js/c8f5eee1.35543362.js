"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[6356],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?o.createElement(f,i(i({ref:t},c),{},{components:r})):o.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},31931:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var o=r(83117),n=r(80102),a=(r(67294),r(3905)),i=["components"],s={description:"This sample code modifies a Weapon to make it shoot Props instead of normal bullets",tags:["tutorial-example","scripting"]},l="Prop Shooter",p={unversionedId:"getting-started/tutorials-and-examples/prop-shooter",id:"getting-started/tutorials-and-examples/prop-shooter",title:"Prop Shooter",description:"This sample code modifies a Weapon to make it shoot Props instead of normal bullets",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/getting-started/tutorials-and-examples/prop-shooter.md",sourceDirName:"getting-started/tutorials-and-examples",slug:"/getting-started/tutorials-and-examples/prop-shooter",permalink:"/de/docs/next/getting-started/tutorials-and-examples/prop-shooter",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/getting-started/tutorials-and-examples/prop-shooter.md",tags:[{label:"tutorial-example",permalink:"/de/docs/next/tags/tutorial-example"},{label:"scripting",permalink:"/de/docs/next/tags/scripting"}],version:"current",frontMatter:{description:"This sample code modifies a Weapon to make it shoot Props instead of normal bullets",tags:["tutorial-example","scripting"]},sidebar:"main",previous:{title:"Prop Rain",permalink:"/de/docs/next/getting-started/tutorials-and-examples/prop-rain"},next:{title:"Weapon Flashlight",permalink:"/de/docs/next/getting-started/tutorials-and-examples/weapon-flashlight"}},c=[],u={toc:c};function d(e){var t=e.components,r=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"prop-shooter"},"Prop Shooter"),(0,a.kt)("p",null,"This sample code modifies a Weapon to make it shoot Props instead of normal bullets"),(0,a.kt)("video",{controls:"true",allowfullscreen:"true"},(0,a.kt)("source",{src:"/videos/docs/tutorials/prop-shooter.mp4",type:"video/mp4"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'Package.RequirePackage("nanos-world-weapons")\n\nlocal my_weap = NanosWorldWeapons.AR4(Vector(-2250, 9153, 192), Rotator(0, 90, 90))\nmy_weap:SetDamage(0)\n\nmy_weap:Subscribe("Fire", function(shooter)\n    local control_rotation = shooter:GetControlRotation()\n    local forward_vector = control_rotation:GetForwardVector()\n    local spawn_location = shooter:GetLocation() + Vector(0, 0, 40) + forward_vector * Vector(200)\n\n    local prop = Prop(spawn_location, control_rotation, "nanos-world::SM_TeaPot_Interior", 1)\n    prop:AddImpulse(forward_vector * Vector(10000), true)\nend)\n')))}d.isMDXComponent=!0}}]);