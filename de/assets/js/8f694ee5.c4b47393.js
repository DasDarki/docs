"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[4403],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(n),c=r,g=m["".concat(o,".").concat(c)]||m[c]||k[c]||i;return n?a.createElement(g,s(s({ref:t},p),{},{components:n})):a.createElement(g,s({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var d=2;d<i;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},48315:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),s=["components"],l={description:"Alles, was Sie \xfcber Pakete wissen m\xfcssen",sidebar_position:0,tags:["scripting","pakete"],keywords:["pakete","scripting","lua"]},o="Paketleitfaden",d={unversionedId:"core-concepts/packages/packages-guide",id:"version-latest/core-concepts/packages/packages-guide",title:"Paketleitfaden",description:"Alles, was Sie \xfcber Pakete wissen m\xfcssen",source:"@site/i18n/de/docusaurus-plugin-content-docs/version-latest/core-concepts/packages/packages-guide.md",sourceDirName:"core-concepts/packages",slug:"/core-concepts/packages/packages-guide",permalink:"/de/docs/core-concepts/packages/packages-guide",editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/core-concepts/packages/packages-guide.md",tags:[{label:"scripting",permalink:"/de/docs/tags/scripting"},{label:"pakete",permalink:"/de/docs/tags/pakete"}],version:"latest",sidebarPosition:0,frontMatter:{description:"Alles, was Sie \xfcber Pakete wissen m\xfcssen",sidebar_position:0,tags:["scripting","pakete"],keywords:["pakete","scripting","lua"]},sidebar:"version-latest/main",previous:{title:"Game Panels",permalink:"/de/docs/core-concepts/server-manual/game-panels"},next:{title:"Ladebildschirm",permalink:"/de/docs/core-concepts/packages/loading-screen"}},p=[{value:"Ordnerstruktur",id:"ordnerstruktur",children:[],level:2},{value:"Paketkonfiguration",id:"paketkonfiguration",children:[{value:"Einstellungen detailliert",id:"einstellungen-detailliert",children:[],level:3},{value:"Paketarten",id:"paketarten",children:[],level:3}],level:2}],k={toc:p};function m(e){var t=e.components,l=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},k,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"paketleitfaden"},"Paketleitfaden"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Pakete")," sind Teile/Komponenten deines Servers, die beispielsweise Lua-Skripte ausf\xfchren, um mit dem Spiel zu interagieren."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(14915).Z,width:"628",height:"170"})),(0,i.kt)("p",null,"Jedes Paket ist isoliert und hat seine eigene Lua Virtual Machine. Dies bedeutet, dass jeder seinen eigenen globalen Anwendungsbereich hat und nicht direkt auf andere Daten zugreifen kann."),(0,i.kt)("h2",{id:"ordnerstruktur"},"Ordnerstruktur"),(0,i.kt)("p",null,"Alle Pakete m\xfcssen unter den Ordner ",(0,i.kt)("inlineCode",{parentName:"p"},"Server/Packages/")," liegen. Jedes Paket ist ein Ordner unter diesem Pfad."),(0,i.kt)("p",null,"Ein Paket muss dabei folgende Ordner enthalten: ",(0,i.kt)("inlineCode",{parentName:"p"},"Server"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Client")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"Shared"),". Nur ",(0,i.kt)("strong",{parentName:"p"},"Client")," und ",(0,i.kt)("strong",{parentName:"p"},"Shared")," Ordner werden an die Clients gesendet und geladen, sobald diese sich mit dem Server verbinden."),(0,i.kt)("p",null,"Jedes ",(0,i.kt)("strong",{parentName:"p"},"Package")," ","(","Paket",")"," muss eine Datei namens ",(0,i.kt)("inlineCode",{parentName:"p"},"Index.lua")," besitzen. Dabei sollte die Datei in den Ordnern ",(0,i.kt)("strong",{parentName:"p"},"Server"),", ",(0,i.kt)("strong",{parentName:"p"},"Client")," oder ",(0,i.kt)("strong",{parentName:"p"},"Shared")," hinterlegt werden. Dies ist die einzige Datei, welche ausgel\xf6st wird, sobald das Paket geladen wird. Auf dieser Weise ist diese Datei verantwortlich f\xfcr die Aufnahme anderer Dateien und das Starten der Funktionalit\xe4ten."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Server Folder"',title:'"Server','Folder"':!0},"NanosWorldServer.exe\nPackages/\n\u251c\u2500\u2500 My_Package_01/\n\u2502   \u251c\u2500\u2500 Server/\n\u2502   \u2502   \u251c\u2500\u2500 Index.lua\n\u2502   \u2502   \u2514\u2500\u2500 *.lua\n\u2502   \u251c\u2500\u2500 Client/\n\u2502   \u2502   \u2514\u2500\u2500 *.lua\n\u2502   \u251c\u2500\u2500 Shared/\n\u2502   \u2502   \u2514\u2500\u2500 *.lua\n\u2502   \u2514\u2500\u2500 Package.toml\n\u251c\u2500\u2500 My_Package_02/\n\u2502   \u251c\u2500\u2500 Package.toml\n\u2502   \u2514\u2500\u2500 ...\nAssets/\nConfig.toml\n")),(0,i.kt)("h2",{id:"paketkonfiguration"},"Paketkonfiguration"),(0,i.kt)("p",null,"Pakete haben eine Konfigurationsdatei im Stammverzeichnis des Paket-Ordners, genannt ",(0,i.kt)("inlineCode",{parentName:"p"},"Package.toml"),". In dieser Datei k\xf6nnen alle relevanten Einstellungen f\xfcr das Paket hinterlegt werden:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml",metastring:"reference",reference:!0},"https://github.com/nanos-world/nanos-world-server/blob/main/Package.toml\n")),(0,i.kt)("h3",{id:"einstellungen-detailliert"},"Einstellungen detailliert"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Einstellung"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"name"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Freundlicher Name des Pakets")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"autor"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Autoren des Pakets")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"version"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Version des Pakets - siehe ",(0,i.kt)("a",{parentName:"td",href:"https://semver.org/"},"SemVer"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"bild"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"URL des Bildes im Tresor anzeigen")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"type"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Typ des Pakets - siehe ",(0,i.kt)("a",{parentName:"td",href:"#package-types"},"Paketarten"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"force_no_map_script"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Aktivieren zwingt das Map-Skript ","(","falls vorhanden",")"," NICHT zu laden")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"auto_cleanup"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Aktivieren wird alle Entit\xe4ten dieses Pakets zerst\xf6ren, wenn es entl\xe4dt")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"packages_requirements"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Liste der Pakete, die zuerst geladen werden m\xfcssen")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"assets_requirements"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Liste der zu ladenden Asset-Pakete beim Laden dieses Pakets")))),(0,i.kt)("h3",{id:"paketarten"},"Paketarten"),(0,i.kt)("p",null,"In nanos world haben wir 3 Arten von Paketen: ",(0,i.kt)("strong",{parentName:"p"},"script"),", ",(0,i.kt)("strong",{parentName:"p"},"game-mode")," und ",(0,i.kt)("strong",{parentName:"p"},"loading-screen"),", jeweils mit einer spezifischen Funktionalit\xe4t und einem einzigartigen Zweck."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"script"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Normales Paket, wird seine Skripte ausf\xfchren und beim Start eine neue ",(0,i.kt)("strong",{parentName:"td"},"Lua VM")," erzeugen.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"game-mode"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Wie ",(0,i.kt)("inlineCode",{parentName:"td"},"script"),", jedoch kann lediglich ein einziges Paket mit dem Typ ",(0,i.kt)("inlineCode",{parentName:"td"},"game-mode")," pro Server-Instanz geladen werden.",(0,i.kt)("br",null)," Gerade dann n\xfctzlich, wenn Sie vollst\xe4ndige Spiele erstellen, welche nicht riskieren k\xf6nnen, mit anderen Spielepaketen geladen zu werden.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"loading-screen"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Special Package which will be loaded during player's loading screen.",(0,i.kt)("br",null),"Those packages must have an ",(0,i.kt)("inlineCode",{parentName:"td"},"Index.html")," in the root.",(0,i.kt)("br",null),"Please refer to ",(0,i.kt)("a",{parentName:"td",href:"/de/docs/core-concepts/packages/loading-screen"},"Loading Screen")," for more information.")))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Wenn Sie eine ",(0,i.kt)("strong",{parentName:"p"},"Bibliothek"),", ein ",(0,i.kt)("strong",{parentName:"p"},"Werkzeug")," oder ein ",(0,i.kt)("strong",{parentName:"p"},"Utility/Dienstprogramm")," als Paket erstellen, machen Sie es ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"script")),"!"),(0,i.kt)("p",{parentName:"div"},"Wenn Sie ein einzigartiges und komplettes <0>Spiel</0> mit mehreren Funktionen erstellen, die nicht durcheinanderbringen gebracht werden sollen, falls jemand zwei volle Spiele l\xe4dt, dann machen Sie es <1>game-mode</1>!"))))}m.isMDXComponent=!0},14915:function(e,t,n){t.Z=n.p+"assets/images/packages-01-e5ca40b3250f77522f7e280d3a183cf9.jpg"}}]);