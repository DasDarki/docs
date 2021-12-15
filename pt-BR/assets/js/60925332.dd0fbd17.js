"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[4540],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return u}});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var d=n.createContext({}),c=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,d=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(a),u=s,v=m["".concat(d,".").concat(u)]||m[u]||p[u]||r;return a?n.createElement(v,o(o({ref:t},l),{},{components:a})):n.createElement(v,o({ref:t},l))}));function u(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,o=new Array(r);o[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},49723:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return l},default:function(){return m}});var n=a(83117),s=a(80102),r=(a(67294),a(3905)),o=["components"],i={description:"Tudo o que voc\xea precisa saber sobre as aulas",sidebar_position:0,tags:["script"]},d="Classes Guide",c={unversionedId:"core-concepts/scripting/classes-guide",id:"core-concepts/scripting/classes-guide",title:"Classes Guide",description:"Tudo o que voc\xea precisa saber sobre as aulas",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/core-concepts/scripting/classes-guide.md",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/classes-guide",permalink:"/pt-BR/docs/next/core-concepts/scripting/classes-guide",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/core-concepts/scripting/classes-guide.md",tags:[{label:"script",permalink:"/pt-BR/docs/next/tags/script"}],version:"current",sidebarPosition:0,frontMatter:{description:"Tudo o que voc\xea precisa saber sobre as aulas",sidebar_position:0,tags:["script"]},sidebar:"main",previous:{title:"Tela de carregamento",permalink:"/pt-BR/docs/next/core-concepts/packages/loading-screen"},next:{title:"Events Guide",permalink:"/pt-BR/docs/next/core-concepts/scripting/events-guide"}},l=[{value:"Classes",id:"classes",children:[{value:"Heran\xe7a de aulas",id:"heran\xe7a-de-aulas",children:[],level:3},{value:"Gerando Entidades",id:"gerando-entidades",children:[],level:3},{value:"Destruindo Entidades",id:"destruindo-entidades",children:[],level:3}],level:2},{value:"Static Classes",id:"static-classes",children:[],level:2},{value:"Utility Classes",id:"utility-classes",children:[],level:2}],p={toc:l};function m(e){var t=e.components,a=(0,s.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"classes-guide"},"Classes Guide"),(0,r.kt)("p",null,"Tudo o que voc\xea precisa saber sobre as aulas"),(0,r.kt)("p",null,"Todas as entidades em nanos no mundo s\xe3o representadas por um Class. In Lua, classes are represented by ",(0,r.kt)("a",{parentName:"p",href:"/pt-BR/docs/next/scripting-reference/glossary/basic-types#table"},"tables"),". That means that every interaction with entities (Players, Characters, Props, etc) are made with Classes/tables methods following an ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Object-oriented_programming"},"OOP ","(","Object-oriented programming")," pattern",")",". Nesta p\xe1gina vamos explicar mais sobre isso."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"In nanos world we have 3 types of Classes (or structures): ",(0,r.kt)("inlineCode",{parentName:"p"},"Classes"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Static Classes")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Utility Classes"),"."))),(0,r.kt)("h2",{id:"classes"},"Classes"),(0,r.kt)("p",null,"If you read our ",(0,r.kt)("a",{parentName:"p",href:"/pt-BR/docs/next/getting-started/quick-start"},"Quick Start")," guide, you noticed we were spawning entities in the following format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"-- Criando uma entidade com um Construtor\nmy_entity = Entity()\n\n-- Interagindo com a entidade com seus m\xe9todos\nmy_entity:MyFunction()\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Acesso a ",(0,r.kt)("strong",{parentName:"p"},"Entidades / Objetos Gerados")," ",(0,r.kt)("strong",{parentName:"p"},"M\xe9todos")," s\xe3o feitos com ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},":")),"."))),(0,r.kt)("p",null,"\xc9 assim que ",(0,r.kt)("strong",{parentName:"p"},"OP")," funciona! Voc\xea cria objetos e chama fun\xe7\xf5es/capturar eventos sobre esse objeto. Ao contr\xe1rio de outros jogos de script que t\xeam toneladas de fun\xe7\xf5es e eventos globais para interagir com as entidades, nanos world scripting \xe9 uma ",(0,r.kt)("strong",{parentName:"p"},"abordagem moderna")," para ",(0,r.kt)("strong",{parentName:"p"},"programa\xe7\xe3o moderna"),"."),(0,r.kt)("h3",{id:"heran\xe7a-de-aulas"},"Heran\xe7a de aulas"),(0,r.kt)("p",null,"Sob os capas, nanos as Classes do mundo seguem um ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Inheritance_%28object-oriented_programming%29"},"Padr\xe3o de Heran\xe7a"),", o que significa que temos classes primas b\xe1sicas, e crian\xe7as que herdam todas as fun\xe7\xf5es, eventos e propriedades deles. You will notice that all Classes that can be spawned in the world are ",(0,r.kt)("a",{parentName:"p",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/actor"},"Actors"),", for example in Character and ",(0,r.kt)("a",{parentName:"p",href:"/pt-BR/docs/next/scripting-reference/classes/prop"},"Prop")," ","(","which are Actors",")"," it is possible to call the function: ",(0,r.kt)("inlineCode",{parentName:"p"},":SetLocation(Vector)"),"."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("a",{parentName:"p",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/actor"},"Base Class Actor")," is a very important class in nanos world. Cont\xe9m a maior parte dos m\xe9todos que s\xe3o partilhados por todas as nossas Classes e tamb\xe9m ",(0,r.kt)("strong",{parentName:"p"},"M\xe9todos est\xe1ticos")," para obter e recuperar entidades diretamente."))),(0,r.kt)("h3",{id:"gerando-entidades"},"Gerando Entidades"),(0,r.kt)("p",null,"Gerar entidades em nanos o mundo \xe9 extremamente f\xe1cil e direto, digamos que queremos gerar um personagem:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},"meu_personagem local = Caracter\xedstica()\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Cada classe conter\xe1 seus pr\xf3prios ",(0,r.kt)("strong",{parentName:"p"},"Construtores"),", ",(0,r.kt)("strong",{parentName:"p"},"Propriedades"),", ",(0,r.kt)("strong",{parentName:"p"},"M\xe9todos")," e ",(0,r.kt)("strong",{parentName:"p"},"Eventos"),"."),(0,r.kt)("p",{parentName:"div"},"Verificar todas as classes que o mundo do nanos fornece no item da barra lateral ",(0,r.kt)("strong",{parentName:"p"},"Refer\xeancia de Scripts -> Classes"),"."))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Tenha em mente que algumas Classes s\xf3 podem ser geradas no ",(0,r.kt)("strong",{parentName:"p"},"Servidor"),", outros s\xf3 podem ser gerados no cliente ****."))),(0,r.kt)("h3",{id:"destruindo-entidades"},"Destruindo Entidades"),(0,r.kt)("p",null,"Todas as classes ","(","mas Player",")"," permitem que voc\xea destrua-as com o m\xe9todo ",(0,r.kt)("inlineCode",{parentName:"p"},"Destroy()"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},"meu_caractere:Destruir()\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Destroying an Entity will trigger the event ",(0,r.kt)("inlineCode",{parentName:"p"},"Destroy")," and also will automatically detach all attached entities it had attached*."),(0,r.kt)("p",{parentName:"div"},"*",(0,r.kt)("em",{parentName:"p"},"If you attached entities with ",(0,r.kt)("inlineCode",{parentName:"em"},"auto_destroy_when_detached")," parameter, all attached entities will be destroyed as well \ud83d\ude09"),"."))),(0,r.kt)("h2",{id:"static-classes"},"Static Classes"),(0,r.kt)("p",null,"Aulas est\xe1ticas em nanos o mundo s\xe3o Classes que voc\xea n\xe3o pode gerar. Em vez disso, voc\xea pode usar m\xe9todos diretamente com ",(0,r.kt)("inlineCode",{parentName:"p"},"."),"."),(0,r.kt)("p",null,"Por exemplo, se voc\xea quiser interagir com o Mundo ","(","mover o sol, selecion\xe1-lo chover, etc",")",", voc\xea precisar\xe1 da ",(0,r.kt)("inlineCode",{parentName:"p"},"Classe Est\xe1tica de"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},"-- Fa\xe7a com que 9:25 AM\nWorld.SetTime(9, 25)\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Acesso a ",(0,r.kt)("strong",{parentName:"p"},"Classes Est\xe1ticas / M\xe9todos Est\xe1ticos")," s\xe3o feitos com ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},".")),"."))),(0,r.kt)("h2",{id:"utility-classes"},"Utility Classes"),(0,r.kt)("p",null,"Al\xe9m de Aulas e Aulas Est\xe1ticas, temos as ",(0,r.kt)("strong",{parentName:"p"},"Classes de Utilidade"),"! Essas s\xe3o principalmente constru\xe7\xf5es usadas na nanos API mundo como Vector, Rotator, Color, JSON e algumas outras."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Todos as Classes Utilit\xe1rias s\xe3o C\xf3digo Aberto no ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nanos-world/nanos-world-lua-lib"},"https://github.com/nanos-world/nanos-world-lua-lib"),". Feel free to push merge requests and suggest changes!"))))}m.isMDXComponent=!0}}]);