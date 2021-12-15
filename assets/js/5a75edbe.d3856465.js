"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[3123],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,g=u["".concat(i,".").concat(m)]||u[m]||p[m]||o;return a?r.createElement(g,l(l({ref:t},d),{},{components:a})):r.createElement(g,l({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},34933:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var r=a(83117),n=a(80102),o=(a(67294),a(3905)),l=["components"],s={description:"Learn how to use and print colored messages to the built-in chat",tags:["tutorial-example"]},i="Chat Colors",c={unversionedId:"getting-started/tutorials-and-examples/chat-colors",id:"version-latest/getting-started/tutorials-and-examples/chat-colors",title:"Chat Colors",description:"Learn how to use and print colored messages to the built-in chat",source:"@site/versioned_docs/version-latest/getting-started/tutorials-and-examples/chat-colors.md",sourceDirName:"getting-started/tutorials-and-examples",slug:"/getting-started/tutorials-and-examples/chat-colors",permalink:"/docs/getting-started/tutorials-and-examples/chat-colors",editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/getting-started/tutorials-and-examples/chat-colors.md",tags:[{label:"tutorial-example",permalink:"/docs/tags/tutorial-example"}],version:"latest",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1630320236,formattedLastUpdatedAt:"8/30/2021",frontMatter:{description:"Learn how to use and print colored messages to the built-in chat",tags:["tutorial-example"]},sidebar:"version-latest/main",previous:{title:"Basic HUD (HTML)",permalink:"/docs/getting-started/tutorials-and-examples/basic-hud-html"},next:{title:"Doors",permalink:"/docs/getting-started/tutorials-and-examples/doors"}},d=[{value:"Example",id:"example",children:[],level:2},{value:"All supported text styles/tags",id:"all-supported-text-stylestags",children:[],level:2}],p={toc:d};function u(e){var t=e.components,s=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"chat-colors"},"Chat Colors"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(80110).Z})),(0,o.kt)("p",null,"To stylize a text, just circumvent a piece of text with a style tag: ",(0,o.kt)("inlineCode",{parentName:"p"},"<TAG>my awesome text</>"),"."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'Server.BroadcastChatMessage("Hello with Normal text message!")\nServer.BroadcastChatMessage("Hello with <cyan>Cyan</> text message!")\nServer.BroadcastChatMessage("Hello with <green>Green</> text message!")\nServer.BroadcastChatMessage("Hello with <blue>Blue</> text message!")\nServer.BroadcastChatMessage("Hello with <marengo>Marengo</> text message!")\nServer.BroadcastChatMessage("Hello with <yellow>Yellow</> text message!")\nServer.BroadcastChatMessage("Hello with <orange>Orange</> text message!")\nServer.BroadcastChatMessage("Hello with <red>Red</> text message!")\nServer.BroadcastChatMessage("Hello with <grey>Grey</> text message!")\nServer.BroadcastChatMessage("Hello with <bold>Bold</> text message!")\nServer.BroadcastChatMessage("Hello with <italic>Italic</> text message!")\n')),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It is NOT possible to combine two or more styles together ","(","eg.: Bold + Red",")","."))),(0,o.kt)("h2",{id:"all-supported-text-stylestags"},"All supported text styles/tags"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<cyan>")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<green>")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<blue>")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<purple>")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<marengo>")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<yellow>")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<orange>")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<red>")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<grey>")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<bold>")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<italic>"))))}u.isMDXComponent=!0},80110:function(e,t,a){t.Z=a.p+"assets/images/chat-colors-1bb4fffde3890766721a885e90a326b9.jpg"}}]);