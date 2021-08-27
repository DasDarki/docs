"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[2786],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3701:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={description:"How to display information in the Screen for the Player",sidebar_position:5},c="User Interface",l={unversionedId:"core-concepts/scripting/user-interface",id:"core-concepts/scripting/user-interface",isDocsHomePage:!1,title:"User Interface",description:"How to display information in the Screen for the Player",source:"@site/docs/core-concepts/scripting/user-interface.md",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/user-interface",permalink:"/docs/core-concepts/scripting/user-interface",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/core-concepts/scripting/user-interface.md",version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1630069070,formattedLastUpdatedAt:"8/27/2021",sidebarPosition:5,frontMatter:{description:"How to display information in the Screen for the Player",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Entity Values",permalink:"/docs/core-concepts/scripting/entity-values"},next:{title:"Artificial Intelligence",permalink:"/docs/core-concepts/scripting/artificial-intelligence"}},p=[{value:"WebUI",id:"webui",children:[{value:"Basic WebUI Setup",id:"basic-webui-setup",children:[]}]},{value:"Canvas",id:"canvas",children:[]}],u={toc:p};function d(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"user-interface"},"User Interface"),(0,i.kt)("p",null,"How to display information in the Screen for the Player."),(0,i.kt)("p",null,"In nanos world there are 2 official ways of plotting screen data: ",(0,i.kt)("strong",{parentName:"p"},"WebUI")," and Render ",(0,i.kt)("strong",{parentName:"p"},"Canvas"),"."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Although we highly recommend using ",(0,i.kt)("strong",{parentName:"p"},"WebUI"),", using Render Canvas is still supported but deprecated."))),(0,i.kt)("h2",{id:"webui"},"WebUI"),(0,i.kt)("p",null,"With WebUI you can load HTML pages which integrate with your Packages in Lua using Events."),(0,i.kt)("h3",{id:"basic-webui-setup"},"Basic WebUI Setup"),(0,i.kt)("p",null,"This sample code shows how to add a basic page using HTML+JavaScript with the WebUI class."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Note:")," All WebUI code runs on Client side!"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},'-- Spawns a WebUI with the HTML file you just created\nMyUI = WebUI("My UI", "file:///UI/index.html")\n\n-- When the HTML is ready, triggers an Event in there\nMyUI:Subscribe("Ready", function()\n    MyUI:CallEvent("MyAwesomeEvent", "Hello! You are ready!")\nend)\n\nMyUI:Subscribe("MyAwesomeAnswer", function(param1)\n    Package.Log("Received an answer! Message: " .. param1)\nend)\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="Client/UI/index.html"',title:'"Client/UI/index.html"'},'<html>\n    <head>\n        <script src="index.js"><\/script>\n    </head>\n    <body>\n        Hello World!\n    </body>\n</html>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Client/UI/index.js"',title:'"Client/UI/index.js"'},'// Register for "MyAwesomeEvent" from Lua\nEvents.Subscribe("MyAwesomeEvent", function(param1) {\n    console.log("Triggered! " + param1);\n\n    // Triggers "MyAwesomeAnswer" on Lua\n    Events.Call("MyAwesomeAnswer", "Hey there!");\n})\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"WebUI results",src:n(2975).Z})),(0,i.kt)("p",null,"This will output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"[WebUI]  Triggered! Hello! You are ready!\n[Script] Received an answer! Message: Hey there!\n")),(0,i.kt)("p",null,'{% page-ref page="../../getting-started/tutorials-and-examples/basic-hud-html.md" %}'),(0,i.kt)("h2",{id:"canvas"},"Canvas"),(0,i.kt)("p",null,'{% page-ref page="../../getting-started/tutorials-and-examples/basic-hud-canvas.md" %}'))}d.isMDXComponent=!0},2975:function(e,t,n){t.Z=n.p+"assets/images/user-interface-7e95b34bf99d9b0891c7fd3a8d9fc278.jpg"}}]);