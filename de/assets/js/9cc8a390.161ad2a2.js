"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[5120],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return g}});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=i.createContext({}),d=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=d(e.components);return i.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(t),g=r,m=u["".concat(c,".").concat(g)]||u[g]||p[g]||a;return t?i.createElement(m,o(o({ref:n},l),{},{components:t})):i.createElement(m,o({ref:n},l))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<a;d++)o[d]=t[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},74526:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return l},default:function(){return u}});var i=t(83117),r=t(80102),a=(t(67294),t(3905)),o=["components"],s={description:"Wie man nanos world Discord Methoden verwendet, um eine sch\xf6ne Integration f\xfcr deinen Server zu erstellen",tags:["scripting"]},c="Discord Integration",d={unversionedId:"core-concepts/scripting/discord-integration",id:"version-latest/core-concepts/scripting/discord-integration",title:"Discord Integration",description:"Wie man nanos world Discord Methoden verwendet, um eine sch\xf6ne Integration f\xfcr deinen Server zu erstellen",source:"@site/i18n/de/docusaurus-plugin-content-docs/version-latest/core-concepts/scripting/discord-integration.md",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/discord-integration",permalink:"/de/docs/core-concepts/scripting/discord-integration",editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/core-concepts/scripting/discord-integration.md",tags:[{label:"scripting",permalink:"/de/docs/tags/scripting"}],version:"latest",frontMatter:{description:"Wie man nanos world Discord Methoden verwendet, um eine sch\xf6ne Integration f\xfcr deinen Server zu erstellen",tags:["scripting"]},sidebar:"version-latest/main",previous:{title:"Extending Classes",permalink:"/de/docs/core-concepts/scripting/extending-classes"},next:{title:"Interacting with the Sun",permalink:"/de/docs/core-concepts/scripting/interacting-with-the-sun"}},l=[{value:"Aktualisiere die Discord Aktivit\xe4t des Spielers (Rich Presence)",id:"aktualisiere-die-discord-aktivit\xe4t-des-spielers-rich-presence",children:[],level:2},{value:"Benutze deine eigene Applikations-ID",id:"benutze-deine-eigene-applikations-id",children:[],level:2}],p={toc:l};function u(e){var n=e.components,s=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},p,s,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"discord-integration"},"Discord Integration"),(0,a.kt)("p",null,"Wie man nanos world Discord Methoden verwendet, um eine sch\xf6ne Integration f\xfcr deinen Server zu erstellen."),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(19705).Z})),(0,a.kt)("p",null,"Die Integration deines Servers mit Discord ist wirklich einfach! Wir bieten eine integrierte Integration, die einsatzbereit ist, aber du kannst auch deine eigene Discord Applikations-ID hinzuf\xfcgen und deine eigene Anwendung verwenden!"),(0,a.kt)("h2",{id:"aktualisiere-die-discord-aktivit\xe4t-des-spielers-rich-presence"},"Aktualisiere die Discord Aktivit\xe4t des Spielers ","(","Rich Presence",")"),(0,a.kt)("p",null,"Wir haben den Prozess sehr einfach gemacht, wir haben eine Methode, um die Aktivit\xe4t des Spielers zu \xe4ndern:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},'local state = "Working as Truck Driver"\nlocal details = "Awesome Roleplay"\nlocal large_text = "Honk!"\nlocal large_image = "screenshot_191"\n\nClient. etDiscordActivity(Status, Details, large_image, large_text)\n')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Wie es aussehen wird",src:t(91021).Z})),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Sie k\xf6nnen Ihre eigene Applikations-ID verwenden, um Ihre eigenen Bilder hochzuladen!"))),(0,a.kt)("h2",{id:"benutze-deine-eigene-applikations-id"},"Benutze deine eigene Applikations-ID"),(0,a.kt)("p",null,"Die Verwendung Ihrer eigenen Anwendungs-ID bringt den Vorteil, dass Sie sie so konfigurieren k\xf6nnen, wie Sie wollen, und sogar Ihre eigenen Bilder hochladen, die in der Rich-Pr\xe4sentation angezeigt werden."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Wie es aussehen wird",src:t(37829).Z})),(0,a.kt)("p",null,"Die Initialisierung Ihrer eigenen Applikations-ID ist sehr einfach. F\xfchren Sie einfach den folgenden Code auf der Client-Seite aus:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},"Client.InitializeDiscord(client_id)\n")),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"And you are done! Jetzt k\xf6nnen Sie die ",(0,a.kt)("inlineCode",{parentName:"p"},"Client.SetDiscordActivity()"),"Methode verwenden!"))))}u.isMDXComponent=!0},91021:function(e,n,t){n.Z=t.p+"assets/images/discord-integration-01-362ab77a7fdee9c9c4c6629b99a49dd8.jpg"},37829:function(e,n,t){n.Z=t.p+"assets/images/discord-integration-02-4bcbe9b207ba7a21fa2dca85efcd2a40.jpg"},19705:function(e,n,t){n.Z=t.p+"assets/images/discord-847e1ae1272681dc4f48fde28b370c6b.jpg"}}]);