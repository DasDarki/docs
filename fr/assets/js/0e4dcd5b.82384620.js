"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[2854],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),g=r,h=m["".concat(d,".").concat(g)]||m[g]||c[g]||i;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},24150:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=["components"],l={description:"How to integrate and communicate with the Sun and Light",tags:["scripting"]},d="Interagir avec le Soleil",p={unversionedId:"core-concepts/scripting/interacting-with-the-sun",id:"version-latest/core-concepts/scripting/interacting-with-the-sun",title:"Interagir avec le Soleil",description:"How to integrate and communicate with the Sun and Light",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-latest/core-concepts/scripting/interacting-with-the-sun.md",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/interacting-with-the-sun",permalink:"/fr/docs/core-concepts/scripting/interacting-with-the-sun",editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/core-concepts/scripting/interacting-with-the-sun.md",tags:[{label:"scripting",permalink:"/fr/docs/tags/scripting"}],version:"latest",frontMatter:{description:"How to integrate and communicate with the Sun and Light",tags:["scripting"]},sidebar:"version-latest/main",previous:{title:"Int\xe9gration de Discord",permalink:"/fr/docs/core-concepts/scripting/discord-integration"},next:{title:"Donn\xe9es persistantes",permalink:"/fr/docs/core-concepts/scripting/persistent-data"}},s=[{value:"Spawning the Default Sun",id:"spawning-the-default-sun",children:[],level:2},{value:"Interagir avec le Soleil",id:"interagir-avec-le-soleil-1",children:[{value:"Weather",id:"weather",children:[],level:3},{value:"Weather Types",id:"weather-types",children:[],level:3}],level:2}],c={toc:s};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interagir-avec-le-soleil"},"Interagir avec le Soleil"),(0,i.kt)("p",null,"How to integrate and communicate with the Sun and Light."),(0,i.kt)("p",null,"In nanos world, we allow the greatest possible customization to be made on your servers and packages. And to make it even easier, we've included some built-in functions in the game which helps integrating and customizing your Servers."),(0,i.kt)("p",null,"A very important concept in nanos world is the ",(0,i.kt)("strong",{parentName:"p"},"Sun"),". We provide some methods on ",(0,i.kt)("a",{parentName:"p",href:"/fr/docs/scripting-reference/static-classes/world"},"World")," class which allows the scripters to, in few lines of codes, modify the current ",(0,i.kt)("strong",{parentName:"p"},"Time of Day"),", ",(0,i.kt)("strong",{parentName:"p"},"Sun Speed"),", ",(0,i.kt)("strong",{parentName:"p"},"Environment Colors")," and even change the ",(0,i.kt)("strong",{parentName:"p"},"Weather")," and ",(0,i.kt)("strong",{parentName:"p"},"Fog"),"."),(0,i.kt)("p",null,"For the methods of interaction with the Sun exposed in the ",(0,i.kt)("a",{parentName:"p",href:"/fr/docs/scripting-reference/static-classes/world"},"World")," to work, it is necessary that your Map is loaded with a sun that our API can identify it, and for that to be possible, we created the method ",(0,i.kt)("inlineCode",{parentName:"p"},"World.SpawnDefaultSun()"),"."),(0,i.kt)("h2",{id:"spawning-the-default-sun"},"Spawning the Default Sun"),(0,i.kt)("p",null,"Once you run the method ",(0,i.kt)("inlineCode",{parentName:"p"},"World.SpawnDefaultSun()"),", the game will destroy all ","(","Unreal",")"," Actors with the tag ",(0,i.kt)("inlineCode",{parentName:"p"},"Sun")," and will spawn a brand new Actor which contains a ",(0,i.kt)("inlineCode",{parentName:"p"},"Directional Light"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Sky Light"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Fog"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Clouds")," and some others components which you will be able to control with ",(0,i.kt)("strong",{parentName:"p"},"World")," methods."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Because of that it is important to set all your ",(0,i.kt)("a",{parentName:"p",href:"/fr/docs/assets-modding/creating-assets/maps-and-levels/importing-maps#rules-for-creating-a-map-level-for-nanos-world"},"Actors with ",(0,i.kt)("inlineCode",{parentName:"a"},"Sun")," tag when creating Maps"),"!"))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Sometimes if you use ",(0,i.kt)("inlineCode",{parentName:"p"},"SpawnDefaultSun()")," in some maps, you may notice you will end up with ",(0,i.kt)("strong",{parentName:"p"},"two")," Directional or Sky Lights, this means the Map wasn't configured with the ",(0,i.kt)("inlineCode",{parentName:"p"},"Sun")," tags."))),(0,i.kt)("h2",{id:"interagir-avec-le-soleil-1"},"Interagir avec le Soleil"),(0,i.kt)("p",null,"It is possible to change Several aspects and settings from the Sun."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"All methods available for customizing the Sun are listed in ",(0,i.kt)("a",{parentName:"p",href:"/fr/docs/scripting-reference/static-classes/world"},"World")," Static Class page."))),(0,i.kt)("p",null,"Some examples of methods are ",(0,i.kt)("inlineCode",{parentName:"p"},"World.SetTime(hours, minutes)")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"World.SetFogDensity(density)")," which will change the current Time and the Fog, respectively."),(0,i.kt)("h3",{id:"weather"},"Weather"),(0,i.kt)("p",null,"We provide some basic methods to change the Weather of the World. You can use the method ",(0,i.kt)("inlineCode",{parentName:"p"},"World.SetWeather()")," to select from a predefined selection of Weathers, or create your own Weather using all the methods the ",(0,i.kt)("a",{parentName:"p",href:"/fr/docs/scripting-reference/static-classes/world"},"World")," provides."),(0,i.kt)("h3",{id:"weather-types"},"Weather Types"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Weather Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Sun Intensity"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Fog Second Density"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Fog Height Falloff"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Sun Light Color"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Sky Rayleigh Scattering"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Sun Temp. Multi."),(0,i.kt)("th",{parentName:"tr",align:"left"},"Sky Light Intensity"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Wind"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"Clear")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"150")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.005")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.2")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Color(1.0, 0.9, 0.8)")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Color(0.17, 0.41, 1.0)")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"1.0")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"1.0")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.25"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"Rain")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"10")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.025")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.03")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Color(0.82, 0.9, 1.0)")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Color(0.73, 0.8, 1.0)")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"2.0")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.3")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"1.0"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"Cloudy")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"10")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.1")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.01")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Color(1.0, 0.9, 0.8)")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Color(0.73, 0.8, 1.0)")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"1.25")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.2")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.3"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"Thunder-storm")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"5")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.5")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.025")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Color(0.82, 0.9, 1.0)")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Color(0.73, 0.8, 1.0)")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"2.0")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.25")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"3.0"))))))}m.isMDXComponent=!0}}]);