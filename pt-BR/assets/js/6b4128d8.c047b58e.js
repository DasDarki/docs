"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[5745],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return k}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),c=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=c(t.components);return n.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),m=c(a),k=r,g=m["".concat(o,".").concat(k)]||m[k]||d[k]||l;return a?n.createElement(g,i(i({ref:e},p),{},{components:a})):n.createElement(g,i({ref:e},p))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=m;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},87469:function(t,e,a){a.d(e,{YS:function(){return i},SM:function(){return s},Yb:function(){return m},aj:function(){return N},rt:function(){return f},Ut:function(){return u},PZ:function(){return h},p2:function(){return b}});a(83117),a(80102),a(67294);var n=a(3905),r=a(80907),l=function(){return(0,r.zu)().path},i=function(t){var e=t.title,a=t.description,r=t.href,i=t.image_src;return(0,n.kt)("a",{class:"card-link",href:r.startsWith("http")?r:l()+"/"+r},(0,n.kt)("img",{src:i||"/img/docs/nanos-world-background.jpg"}),(0,n.kt)("h4",null,e),(0,n.kt)("p",null,a))},s=function(t){var e=t.children,a=t.href;return(0,n.kt)("a",{class:"reference-link",href:a.startsWith("http")?a:l()+"/"+a},e,(0,n.kt)("span",null,a))},o=function(t,e){return(0,n.kt)("a",{class:"authority-availability",href:l()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,n.kt)("img",{src:t,title:e}))},c=function(t){return(0,n.kt)("a",{href:l()+"/scripting-reference/glossary/basic-types#"+t.toLowerCase()},t)},p=function(t,e){return(0,n.kt)("a",{href:l()+"/scripting-reference/utility-classes/"+(e||t.toLowerCase())},t)},d=function(t,e){return(0,n.kt)("a",{href:l()+"/scripting-reference/classes/"+(e||t.toLowerCase())},t)},m=function(t){var e=t.children;return(0,n.kt)("a",{href:l()+"/scripting-reference/glossary/enums#"+e.toLowerCase(),title:e+" Enum (number)"},e)},k=function(t){return(0,n.kt)("a",{href:l()+"/core-concepts/assets#referencing-assets-in-scripting",title:"Asset Path (string)"},t)},g=function(t){return(0,n.kt)("a",{href:l()+"/scripting-reference/glossary/basic-types#specialpath",title:"Special Path (string)"},t)},N={AuthorityOnly:function(){return o("/img/scripting/authority-only.svg","authority-only - this can be called only on the side which spawned it!")},ServerOnly:function(){return o("/img/scripting/server-only.svg","server-only - this can be called only on server side!")},ClientOnly:function(){return o("/img/scripting/client-only.svg","client-only - this can be called only on client side!")},Both:function(){return o("/img/scripting/both.png","both-sides - this can be called on any side!")}},f={Number:function(){return c("number")},String:function(){return c("string")},Boolean:function(){return c("boolean")},Table:function(){return c("table")},Iterator:function(){return c("iterator")},Any:function(){return c("any")},Function:function(){return c("function")},Nil:function(){return c("nil")}},u={Vector:function(){return p("Vector")},Rotator:function(){return p("Rotator")},Color:function(){return p("Color")},Quat:function(){return p("Quat","quaternion")},Vector2D:function(){return p("Vector2D","vectortwod")}},h={Actor:function(){return d("Actor","base-classes/actor")},Paintable:function(){return d("Paintable","base-classes/paintable")},Pickable:function(){return d("Pickable","base-classes/pickable")},Cable:function(){return d("Cable")},Character:function(){return d("Character")},File:function(){return d("File")},Grenade:function(){return d("Grenade")},Melee:function(){return d("Melee")},Light:function(){return d("Light")},Particle:function(){return d("Particle")},Player:function(){return d("Player")},Prop:function(){return d("Prop")},Sound:function(){return d("Sound")},SceneCapture:function(){return d("SceneCapture","scene-capture")},StaticMesh:function(){return d("StaticMesh","static-mesh")},TextRender:function(){return d("TextRender","text-render")},Trigger:function(){return d("Trigger")},Vehicle:function(){return d("Vehicle")},Weapon:function(){return d("Weapon")},WebUI:function(){return d("WebUI")}},b={StaticMesh:function(){return k("StaticMesh Asset")},SkeletalMesh:function(){return k("SkeletalMesh Asset")},Animation:function(){return k("Animation Asset")},Particle:function(){return k("Particle Asset")},Material:function(){return k("Material Asset")},Map:function(){return k("Map Asset")},Sound:function(){return g("Sound Asset or Special Path")},Image:function(){return g("Image Special Path")},HTML:function(){return g("HTML Special Path")}}},68758:function(t,e,a){a.d(e,{ZP:function(){return p}});var n=a(83117),r=a(80102),l=a(67294),i=a(3905),s=a(87469),o=["components"],c={toc:[]};function p(t){var e=t.components,a=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)(l.Fragment,null,a.hidden_reference?(0,i.kt)(l.Fragment,null):(0,i.kt)(s.SM,{href:"scripting-reference/classes/base-classes/actor",mdxType:"ReferenceLink"},"Base Actor")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"}),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Returns")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Name")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Description")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.AuthorityOnly,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/actor#addimpulse"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"AddImpulse")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Applies a Force in world space to this Actor")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.AuthorityOnly,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/actor#attachto"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"AttachTo")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Attaches this Actor to another Actor")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.AuthorityOnly,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/actor#destroy"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"Destroy")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Destroys this Actor")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.AuthorityOnly,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/actor#detach"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"Detach")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Detaches this Actor if attached")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.AuthorityOnly,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/actor#setcollision"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"SetCollision")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sets this Actor\u2019s collision type")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.AuthorityOnly,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/actor#setforce"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"SetForce")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Adds a permanent force to this Actor")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.AuthorityOnly,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/actor#setgravityenabled"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"SetGravityEnabled")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sets whether gravity is enabled on this Actor")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.AuthorityOnly,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/actor#setvisibility"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"SetVisibility")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sets the Actor visibility")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.ClientOnly,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/actor#sethighlightenabled"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"SetHighlightEnabled")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sets whether the highlight is enabled on this Actor, and which highlight index to use")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.AuthorityOnly,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/actor#setlifespan"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"SetLifeSpan")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sets the time ","(","in seconds",")"," before this Actor is destroyed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.AuthorityOnly,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/actor#setlocation"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"SetLocation")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sets this Actor\u2019s location in the game world")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.ServerOnly,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/actor#setnetworkauthority"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"SetNetworkAuthority")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sets the Player this Actor will have its physics calculated on ",(0,i.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/core-concepts/scripting/authority-concepts#network-authority"},"Network Authority"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.AuthorityOnly,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/actor#setrelativelocation"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"SetRelativeLocation")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sets this Actor\u2019s relative location in local space")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.AuthorityOnly,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/actor#setrelativerotation"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"SetRelativeRotation")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sets this Actor\u2019s relative rotation in local space")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.AuthorityOnly,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/actor#setrotation"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"SetRotation")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sets this Actor\u2019s rotation in the game world")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.AuthorityOnly,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/actor#setscale"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"SetScale")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sets this Actor\u2019s scale")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.Both,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/actor#setvalue"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"SetValue")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sets a value in this Actor, which can be accessed by any package")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.AuthorityOnly,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/actor#translateto"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"TranslateTo")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Smoothly moves this Actor to the specified location")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.AuthorityOnly,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/actor#rotateto"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"RotateTo")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Smoothly rotates this Actor to the specified angle")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.Both,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(s.rt.Boolean,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/actor#isbeingdestroyed"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"IsBeingDestroyed")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Gets if this Actor is being destroyed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.Both,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(s.rt.Boolean,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/actor#isgravityenabled"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"IsGravityEnabled")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Gets whether gravity is enabled on this Actor")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.Both,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(s.rt.Boolean,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/actor#isinwater"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"IsInWater")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Gets if this Actor is in water")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.Both,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(s.rt.Boolean,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/actor#isnetworkdistributed"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"IsNetworkDistributed")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Gets if this Actor is ",(0,i.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/core-concepts/scripting/authority-concepts#overriding-the-current-network-authority"},"Network Distributed"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.Both,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(s.rt.Boolean,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/actor#isvalid"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"IsValid")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Returns if this Actor is valid (i.e. not destroyed)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.Both,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(s.rt.Table,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/actor#getattachedentities"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"GetAttachedEntities")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Gets all Actors attached to this Actor")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.Both,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(s.rt.Any,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/actor#getattachedto"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"GetAttachedTo")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Gets the Actor this Actor is attached to")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.ClientOnly,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(s.rt.Table,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/actor#getbounds"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"GetBounds")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Gets this Actor's bounds")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.Both,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(s.rt.Number,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/actor#getcollision"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"GetCollision")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Gets this Actor\u2019s collision type")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.Both,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(s.rt.Number,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/actor#getid"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"GetID")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Gets the universal network ID of this Actor")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.Both,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(s.Ut.Vector,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/actor#getlocation"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"GetLocation")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Gets this Actor\u2019s location in the game world")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.Both,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(s.Ut.Rotator,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/actor#getrotation"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"GetRotation")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Gets this Actor\u2019s angle in the game world")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.Both,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(s.Ut.Vector,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/actor#getscale"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"GetScale")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Gets this Actor\u2019s scale")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.Both,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(s.rt.String,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/actor#gettype"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"GetType")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Gets the type of this Actor")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.Both,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(s.rt.Any,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/actor#getvalue"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"GetValue")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Gets a value stored on this Actor at the given key")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.ClientOnly,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(s.Ut.Vector,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/actor#GetVelocity"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"GetVelocity")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Returns this Actor's current velocity")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.Both,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(s.rt.Function,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/actor#subscribe"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"Subscribe")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Subscribes to an Event")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.Both,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/actor#unsubscribe"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"Unsubscribe")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Unsubscribes from an Event")))))}p.isMDXComponent=!0},57121:function(t,e,a){a.d(e,{ZP:function(){return p}});var n=a(83117),r=a(80102),l=a(67294),i=a(3905),s=a(87469),o=["components"],c={toc:[]};function p(t){var e=t.components,a=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)(l.Fragment,null,a.hidden_reference?(0,i.kt)(l.Fragment,null):(0,i.kt)(s.SM,{href:"scripting-reference/classes/base-classes/paintable",mdxType:"ReferenceLink"},"Base Paintable")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"}),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Returns")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Name")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Description")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.Both,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/paintable#setmaterial"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"SetMaterial")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sets the material at the specified index of this Actor")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.ClientOnly,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/paintable#setmaterialfromwebui"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"SetMaterialFromWebUI")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sets the material at the specified index of this Actor to a WebUI object")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.ClientOnly,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/paintable#setmaterialfromscenecapture"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"SetMaterialFromSceneCapture")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sets the material at the specified index of this Actor to a SceneCapture object")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.ClientOnly,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/paintable#resetmaterial"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"ResetMaterial")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Resets the material from the specified index to the original one")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.Both,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/paintable#setmaterialcolorparameter"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"SetMaterialColorParameter")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sets a Color parameter in this Actor\u2019s material")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.Both,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/paintable#setmaterialscalarparameter"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"SetMaterialScalarParameter")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sets a scalar parameter in this Actor\u2019s material")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.Both,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/paintable#setmaterialtextureparameter"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"SetMaterialTextureParameter")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sets a texture parameter in this Actor's material to an image on disk")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.Both,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/paintable#setmaterialvectorparameter"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"SetMaterialVectorParameter")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sets a Vector parameter in this Actor\u2019s material")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.Both,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/paintable#setphysicalmaterial"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"SetPhysicalMaterial")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Overrides this Actor's Physical Material with a new one")))))}p.isMDXComponent=!0},62062:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return k},default:function(){return N}});var n=a(83117),r=a(80102),l=(a(67294),a(3905)),i=a(87469),s=a(68758),o=a(57121),c=["components"],p={description:"A Billboard is a 2D Material that will be rendered always facing the camera.",sidebar_position:0,tags:["class","client"]},d="\ud83e\udea7 Billboard",m={unversionedId:"scripting-reference/classes/billboard",id:"scripting-reference/classes/billboard",title:"\ud83e\udea7 Billboard",description:"A Billboard is a 2D Material that will be rendered always facing the camera.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/scripting-reference/classes/billboard.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/billboard",permalink:"/pt-BR/docs/next/scripting-reference/classes/billboard",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/scripting-reference/classes/billboard.mdx",tags:[{label:"class",permalink:"/pt-BR/docs/next/tags/class"},{label:"client",permalink:"/pt-BR/docs/next/tags/client"}],version:"current",sidebarPosition:0,frontMatter:{description:"A Billboard is a 2D Material that will be rendered always facing the camera.",sidebar_position:0,tags:["class","client"]},sidebar:"main",previous:{title:"Ciclo de Vida do Server & Client",permalink:"/pt-BR/docs/next/core-concepts/server-and-client-lifecycle"},next:{title:"\u26d3\ufe0f Cable",permalink:"/pt-BR/docs/next/scripting-reference/classes/cable"}},k=[{value:"Usage",id:"usage",children:[],level:2},{value:"Constructor Parameters",id:"constructor-parameters",children:[],level:2},{value:"Functions",id:"functions",children:[],level:2}],g={toc:k};function N(t){var e=t.components,p=(0,r.Z)(t,c);return(0,l.kt)("wrapper",(0,n.Z)({},g,p,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"-billboard"},"\ud83e\udea7 Billboard"),(0,l.kt)("p",null,"A Billboard is a 2D Material that will be rendered always facing the camera."),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(4743).Z})),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\ud83d\udfe7 ",(0,l.kt)("strong",{parentName:"p"},"Authority:")," This class can only be spawned on ",(0,l.kt)("a",{parentName:"p",href:"/pt-BR/docs/next/core-concepts/scripting/authority-concepts"},"Client"),"."),(0,l.kt)("p",{parentName:"div"},"\u23ec ",(0,l.kt)("strong",{parentName:"p"},"Inheritance:")," This class inherits from ",(0,l.kt)(i.PZ.Actor,null)," and ",(0,l.kt)(i.PZ.Paintable,null),"."))),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:"title=Client/Index.lua",title:"Client/Index.lua"},'local my_billboard = Billboard(\n    Vector(200, 200, 200), -- location\n    "nanos-world::M_NanosMasked", -- material\n    Vector2D(32, 32), -- size\n    true\n)\n\nmy_billboard:SetMaterialTextureParameter("Texture", "package///my_package/Client/image.jpg")\n')),(0,l.kt)("h2",{id:"constructor-parameters"},"Constructor Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Type")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Name")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Default")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Description")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.Ut.Vector,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"location"))),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Vector(0, 0, 0)")),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.p2.Material,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"material_asset"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"``"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Material Asset")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.Ut.Vector2D,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"size"))),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Vector2D(32, 32)")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Size of the Billboard")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Boolean,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"size_in_screen_space"))),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Size is in Screen or World Space")))),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Inherited Actor Functions"),(0,l.kt)(s.ZP,{mdxType:"BaseActorFunctions"}))," ",(0,l.kt)("details",null,(0,l.kt)("summary",null,"Inherited Paintable Functions"),(0,l.kt)(o.ZP,{mdxType:"BasePaintableFunctions"})))}N.isMDXComponent=!0},4743:function(t,e,a){e.Z=a.p+"assets/images/billboard-b071df97d1983ac3b213eeacb6a836ce.jpg"}}]);