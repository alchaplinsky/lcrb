(self.webpackChunklangchain=self.webpackChunklangchain||[]).push([[9911],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),p=o,g=d["".concat(c,".").concat(p)]||d[p]||m[p]||a;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},614:(e,t,n)=>{"use strict";n.d(t,{Z:()=>q});var r=n(7462),o=n(7294),a=n(2389),i=n(6010),s=n(2949),c=n(6668);function l(){const{prism:e}=(0,c.L)(),{colorMode:t}=(0,s.I)(),n=e.theme,r=e.darkTheme||n;return"dark"===t?r:n}var u=n(5281),d=n(7594),m=n.n(d);const p=/title=(?<quote>["'])(?<title>.*?)\1/,g=/\{(?<range>[\d,-]+)\}/,f={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function h(e,t){const n=e.map((e=>{const{start:n,end:r}=f[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${r})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function b(e,t){let n=e.replace(/\n$/,"");const{language:r,magicComments:o,metastring:a}=t;if(a&&g.test(a)){const e=a.match(g).groups.range;if(0===o.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${a}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=o[0].className,r=m()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(r),code:n}}if(void 0===r)return{lineClassNames:{},code:n};const i=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return h(["js","jsBlock"],t);case"jsx":case"tsx":return h(["js","jsBlock","jsx"],t);case"html":return h(["js","jsBlock","html"],t);case"python":case"py":case"bash":return h(["bash"],t);case"markdown":case"md":return h(["html","jsx","bash"],t);default:return h(Object.keys(f),t)}}(r,o),s=n.split("\n"),c=Object.fromEntries(o.map((e=>[e.className,{start:0,range:""}]))),l=Object.fromEntries(o.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),u=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),d=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let m=0;m<s.length;){const e=s[m].match(i);if(!e){m+=1;continue}const t=e.slice(1).find((e=>void 0!==e));l[t]?c[l[t]].range+=`${m},`:u[t]?c[u[t]].start=m:d[t]&&(c[d[t]].range+=`${c[d[t]].start}-${m-1},`),s.splice(m,1)}n=s.join("\n");const p={};return Object.entries(c).forEach((e=>{let[t,{range:n}]=e;m()(n).forEach((e=>{p[e]??=[],p[e].push(t)}))})),{lineClassNames:p,code:n}}const y={codeBlockContainer:"codeBlockContainer_Ckt0"};function v(e){let{as:t,...n}=e;const a=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[r,o]=e;const a=t[r];a&&"string"==typeof o&&(n[a]=o)})),n}(l());return o.createElement(t,(0,r.Z)({},n,{style:a,className:(0,i.Z)(n.className,y.codeBlockContainer,u.k.common.codeBlock)}))}const E={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function k(e){let{children:t,className:n}=e;return o.createElement(v,{as:"pre",tabIndex:0,className:(0,i.Z)(E.codeBlockStandalone,"thin-scrollbar",n)},o.createElement("code",{className:E.codeBlockLines},t))}var N=n(902);const w={attributes:!0,characterData:!0,childList:!0,subtree:!0};function C(e,t){const[n,r]=(0,o.useState)(),a=(0,o.useCallback)((()=>{r(e.current?.closest("[role=tabpanel][hidden]"))}),[e,r]);(0,o.useEffect)((()=>{a()}),[a]),function(e,t,n){void 0===n&&(n=w);const r=(0,N.zX)(t),a=(0,N.Ql)(n);(0,o.useEffect)((()=>{const t=new MutationObserver(r);return e&&t.observe(e,a),()=>t.disconnect()}),[e,r,a])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),a())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}const B={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var S={Prism:n(7410).Z,theme:B};function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(){return x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x.apply(this,arguments)}var Z=/\r\n|\r|\n/,L=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},j=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)};function O(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var _=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),T(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=x({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=x({},n,{backgroundColor:null}),o}(e.theme,e.language):void 0;return t.themeDict=n})),T(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,a=x({},O(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(a.style=i.plain),void 0!==o&&(a.style=void 0!==a.style?x({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),T(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var i=r?{display:"inline-block"}:{},s=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[i].concat(s))}})),T(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,a=e.token,i=x({},O(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(i.style=void 0!==i.style?x({},i.style,o):o),void 0!==n&&(i.key=n),r&&(i.className+=" "+r),i})),T(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var a=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,a=this.getThemeDict(this.props),i=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],a=0,i=0,s=[],c=[s];i>-1;){for(;(a=r[i]++)<o[i];){var l=void 0,u=t[i],d=n[i][a];if("string"==typeof d?(u=i>0?u:["plain"],l=d):(u=j(u,d.type),d.alias&&(u=j(u,d.alias)),l=d.content),"string"==typeof l){var m=l.split(Z),p=m.length;s.push({types:u,content:m[0]});for(var g=1;g<p;g++)L(s),c.push(s=[]),s.push({types:u,content:m[g]})}else i++,t.push(u),n.push(l),r.push(0),o.push(l.length)}i--,t.pop(),n.pop(),r.pop(),o.pop()}return L(s),c}(void 0!==i?this.tokenize(t,r,i,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);const z=_,A={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function P(e){let{line:t,classNames:n,showLineNumbers:a,getLineProps:s,getTokenProps:c}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const l=s({line:t,className:(0,i.Z)(n,a&&A.codeLine)}),u=t.map(((e,t)=>o.createElement("span",(0,r.Z)({key:t},c({token:e,key:t})))));return o.createElement("span",l,a?o.createElement(o.Fragment,null,o.createElement("span",{className:A.codeLineNumber}),o.createElement("span",{className:A.codeLineContent},u)):u,o.createElement("br",null))}var I=n(5999);function M(e){return o.createElement("svg",(0,r.Z)({viewBox:"0 0 24 24"},e),o.createElement("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"}))}function $(e){return o.createElement("svg",(0,r.Z)({viewBox:"0 0 24 24"},e),o.createElement("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))}const D={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function R(e){let{code:t,className:n}=e;const[r,a]=(0,o.useState)(!1),s=(0,o.useRef)(void 0),c=(0,o.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const r=document.createElement("textarea"),o=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";const a=document.getSelection(),i=a.rangeCount>0&&a.getRangeAt(0);n.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch{}r.remove(),i&&(a.removeAllRanges(),a.addRange(i)),o&&o.focus()}(t),a(!0),s.current=window.setTimeout((()=>{a(!1)}),1e3)}),[t]);return(0,o.useEffect)((()=>()=>window.clearTimeout(s.current)),[]),o.createElement("button",{type:"button","aria-label":r?(0,I.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,I.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,I.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,i.Z)("clean-btn",n,D.copyButton,r&&D.copyButtonCopied),onClick:c},o.createElement("span",{className:D.copyButtonIcons,"aria-hidden":"true"},o.createElement(M,{className:D.copyButtonIcon}),o.createElement($,{className:D.copyButtonSuccessIcon})))}function H(e){return o.createElement("svg",(0,r.Z)({viewBox:"0 0 24 24"},e),o.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"}))}const W={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function V(e){let{className:t,onClick:n,isEnabled:r}=e;const a=(0,I.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return o.createElement("button",{type:"button",onClick:n,className:(0,i.Z)("clean-btn",t,r&&W.wordWrapButtonEnabled),"aria-label":a,title:a},o.createElement(H,{className:W.wordWrapButtonIcon,"aria-hidden":"true"}))}function F(e){let{children:t,className:n="",metastring:a,title:s,showLineNumbers:u,language:d}=e;const{prism:{defaultLanguage:m,magicComments:g}}=(0,c.L)(),f=d??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??m,h=l(),y=function(){const[e,t]=(0,o.useState)(!1),[n,r]=(0,o.useState)(!1),a=(0,o.useRef)(null),i=(0,o.useCallback)((()=>{const n=a.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[a,e]),s=(0,o.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=a.current,n=e>t||a.current.querySelector("code").hasAttribute("style");r(n)}),[a]);return C(a,s),(0,o.useEffect)((()=>{s()}),[e,s]),(0,o.useEffect)((()=>(window.addEventListener("resize",s,{passive:!0}),()=>{window.removeEventListener("resize",s)})),[s]),{codeBlockRef:a,isEnabled:e,isCodeScrollable:n,toggle:i}}(),k=function(e){return e?.match(p)?.groups.title??""}(a)||s,{lineClassNames:N,code:w}=b(t,{metastring:a,language:f,magicComments:g}),B=u??function(e){return Boolean(e?.includes("showLineNumbers"))}(a);return o.createElement(v,{as:"div",className:(0,i.Z)(n,f&&!n.includes(`language-${f}`)&&`language-${f}`)},k&&o.createElement("div",{className:E.codeBlockTitle},k),o.createElement("div",{className:E.codeBlockContent},o.createElement(z,(0,r.Z)({},S,{theme:h,code:w,language:f??"text"}),(e=>{let{className:t,tokens:n,getLineProps:r,getTokenProps:a}=e;return o.createElement("pre",{tabIndex:0,ref:y.codeBlockRef,className:(0,i.Z)(t,E.codeBlock,"thin-scrollbar")},o.createElement("code",{className:(0,i.Z)(E.codeBlockLines,B&&E.codeBlockLinesWithNumbering)},n.map(((e,t)=>o.createElement(P,{key:t,line:e,getLineProps:r,getTokenProps:a,classNames:N[t],showLineNumbers:B})))))})),o.createElement("div",{className:E.buttonGroup},(y.isEnabled||y.isCodeScrollable)&&o.createElement(V,{className:E.codeButton,onClick:()=>y.toggle(),isEnabled:y.isEnabled}),o.createElement(R,{className:E.codeButton,code:w}))))}function q(e){let{children:t,...n}=e;const i=(0,a.Z)(),s=function(e){return o.Children.toArray(e).some((e=>(0,o.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),c="string"==typeof s?F:k;return o.createElement(c,(0,r.Z)({key:String(i)},n),s)}},2503:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(7462),o=n(7294),a=n(6010),i=n(5999),s=n(6668),c=n(9960);const l={anchorWithStickyNavbar:"anchorWithStickyNavbar_LWe7",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_WYt5"};function u(e){let{as:t,id:n,...u}=e;const{navbar:{hideOnScroll:d}}=(0,s.L)();if("h1"===t||!n)return o.createElement(t,(0,r.Z)({},u,{id:void 0}));const m=(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof u.children?u.children:n});return o.createElement(t,(0,r.Z)({},u,{className:(0,a.Z)("anchor",d?l.anchorWithHideOnScrollNavbar:l.anchorWithStickyNavbar,u.className),id:n}),u.children,o.createElement(c.Z,{className:"hash-link",to:`#${n}`,"aria-label":m,title:m},"\u200b"))}},5203:(e,t,n)=>{"use strict";n.d(t,{Z:()=>_});var r=n(7294),o=n(3905),a=n(7462),i=n(5742);var s=n(8573);var c=n(9960);var l=n(6010),u=n(2389),d=n(6043);const m={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function p(e){return!!e&&("SUMMARY"===e.tagName||p(e.parentElement))}function g(e,t){return!!e&&(e===t||g(e.parentElement,t))}function f(e){let{summary:t,children:n,...o}=e;const i=(0,u.Z)(),s=(0,r.useRef)(null),{collapsed:c,setCollapsed:f}=(0,d.u)({initialState:!o.open}),[h,b]=(0,r.useState)(o.open),y=r.isValidElement(t)?t:r.createElement("summary",null,t??"Details");return r.createElement("details",(0,a.Z)({},o,{ref:s,open:h,"data-collapsed":c,className:(0,l.Z)(m.details,i&&m.isBrowser,o.className),onMouseDown:e=>{p(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;p(t)&&g(t,s.current)&&(e.preventDefault(),c?(f(!1),b(!0)):f(!0))}}),y,r.createElement(d.z,{lazy:!1,collapsed:c,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{f(e),b(!e)}},r.createElement("div",{className:m.collapsibleContent},n)))}const h={details:"details_b_Ee"},b="alert alert--info";function y(e){let{...t}=e;return r.createElement(f,(0,a.Z)({},t,{className:(0,l.Z)(b,h.details,t.className)}))}var v=n(2503);function E(e){return r.createElement(v.Z,e)}const k={containsTaskList:"containsTaskList_mC6p"};const N={img:"img_ev3q"};var w=n(5281),C=n(5999);const B="admonition_LlT9",S="admonitionHeading_tbUL",T="admonitionIcon_kALy",x="admonitionContent_S0QG";const Z={note:{infimaClassName:"secondary",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:r.createElement(C.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:r.createElement(C.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:r.createElement(C.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:r.createElement(C.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:r.createElement(C.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},L={secondary:"note",important:"info",success:"tip",warning:"danger"};function j(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=r.Children.toArray(e),n=t.find((e=>r.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),o=r.createElement(r.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:o}}(e.children);return{...e,title:e.title??t,children:n}}const O={head:function(e){const t=r.Children.map(e.children,(e=>r.isValidElement(e)?function(e){if(e.props?.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...o}=e.props;return r.createElement(e.props.originalType,o)}return e}(e):e));return r.createElement(i.Z,e,t)},code:function(e){const t=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return r.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,r.isValidElement)(e)&&t.includes(e.props?.mdxType)))?r.createElement("code",e):r.createElement(s.Z,e)},a:function(e){return r.createElement(c.Z,e)},pre:function(e){return r.createElement(s.Z,(0,r.isValidElement)(e.children)&&"code"===e.children.props?.originalType?e.children.props:{...e})},details:function(e){const t=r.Children.toArray(e.children),n=t.find((e=>r.isValidElement(e)&&"summary"===e.props?.mdxType)),o=r.createElement(r.Fragment,null,t.filter((e=>e!==n)));return r.createElement(y,(0,a.Z)({},e,{summary:n}),o)},ul:function(e){return r.createElement("ul",(0,a.Z)({},e,{className:(t=e.className,(0,l.Z)(t,t?.includes("contains-task-list")&&k.containsTaskList))}));var t},img:function(e){return r.createElement("img",(0,a.Z)({loading:"lazy"},e,{className:(t=e.className,(0,l.Z)(t,N.img))}));var t},h1:e=>r.createElement(E,(0,a.Z)({as:"h1"},e)),h2:e=>r.createElement(E,(0,a.Z)({as:"h2"},e)),h3:e=>r.createElement(E,(0,a.Z)({as:"h3"},e)),h4:e=>r.createElement(E,(0,a.Z)({as:"h4"},e)),h5:e=>r.createElement(E,(0,a.Z)({as:"h5"},e)),h6:e=>r.createElement(E,(0,a.Z)({as:"h6"},e)),admonition:function(e){const{children:t,type:n,title:o,icon:a}=j(e),i=function(e){const t=L[e]??e,n=Z[t];return n||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),Z.info)}(n),s=o??i.label,{iconComponent:c}=i,u=a??r.createElement(c,null);return r.createElement("div",{className:(0,l.Z)(w.k.common.admonition,w.k.common.admonitionType(e.type),"alert",`alert--${i.infimaClassName}`,B)},r.createElement("div",{className:S},r.createElement("span",{className:T},u),s),r.createElement("div",{className:x},t))},mermaid:n(1875).Z};function _(e){let{children:t}=e;return r.createElement(o.Zo,{components:O},t)}},7594:(e,t)=>{function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,a]=t;if(r&&a){r=parseInt(r),a=parseInt(a);const e=r<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=r;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},9385:()=>{!function(e){e.languages.ruby=e.languages.extend("clike",{comment:{pattern:/#.*|^=begin\s[\s\S]*?^=end/m,greedy:!0},"class-name":{pattern:/(\b(?:class|module)\s+|\bcatch\s+\()[\w.\\]+|\b[A-Z_]\w*(?=\s*\.\s*new\b)/,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:BEGIN|END|alias|and|begin|break|case|class|def|define_method|defined|do|each|else|elsif|end|ensure|extend|for|if|in|include|module|new|next|nil|not|or|prepend|private|protected|public|raise|redo|require|rescue|retry|return|self|super|then|throw|undef|unless|until|when|while|yield)\b/,operator:/\.{2,3}|&\.|===|<?=>|[!=]?~|(?:&&|\|\||<<|>>|\*\*|[+\-*/%<>!^&|=])=?|[?:]/,punctuation:/[(){}[\].,;]/}),e.languages.insertBefore("ruby","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}});var t={pattern:/((?:^|[^\\])(?:\\{2})*)#\{(?:[^{}]|\{[^{}]*\})*\}/,lookbehind:!0,inside:{content:{pattern:/^(#\{)[\s\S]+(?=\}$)/,lookbehind:!0,inside:e.languages.ruby},delimiter:{pattern:/^#\{|\}$/,alias:"punctuation"}}};delete e.languages.ruby.function;var n="(?:"+[/([^a-zA-Z0-9\s{(\[<=])(?:(?!\1)[^\\]|\\[\s\S])*\1/.source,/\((?:[^()\\]|\\[\s\S]|\((?:[^()\\]|\\[\s\S])*\))*\)/.source,/\{(?:[^{}\\]|\\[\s\S]|\{(?:[^{}\\]|\\[\s\S])*\})*\}/.source,/\[(?:[^\[\]\\]|\\[\s\S]|\[(?:[^\[\]\\]|\\[\s\S])*\])*\]/.source,/<(?:[^<>\\]|\\[\s\S]|<(?:[^<>\\]|\\[\s\S])*>)*>/.source].join("|")+")",r=/(?:"(?:\\.|[^"\\\r\n])*"|(?:\b[a-zA-Z_]\w*|[^\s\0-\x7F]+)[?!]?|\$.)/.source;e.languages.insertBefore("ruby","keyword",{"regex-literal":[{pattern:RegExp(/%r/.source+n+/[egimnosux]{0,6}/.source),greedy:!0,inside:{interpolation:t,regex:/[\s\S]+/}},{pattern:/(^|[^/])\/(?!\/)(?:\[[^\r\n\]]+\]|\\.|[^[/\\\r\n])+\/[egimnosux]{0,6}(?=\s*(?:$|[\r\n,.;})#]))/,lookbehind:!0,greedy:!0,inside:{interpolation:t,regex:/[\s\S]+/}}],variable:/[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/,symbol:[{pattern:RegExp(/(^|[^:]):/.source+r),lookbehind:!0,greedy:!0},{pattern:RegExp(/([\r\n{(,][ \t]*)/.source+r+/(?=:(?!:))/.source),lookbehind:!0,greedy:!0}],"method-definition":{pattern:/(\bdef\s+)\w+(?:\s*\.\s*\w+)?/,lookbehind:!0,inside:{function:/\b\w+$/,keyword:/^self\b/,"class-name":/^\w+/,punctuation:/\./}}}),e.languages.insertBefore("ruby","string",{"string-literal":[{pattern:RegExp(/%[qQiIwWs]?/.source+n),greedy:!0,inside:{interpolation:t,string:/[\s\S]+/}},{pattern:/("|')(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|(?!\1)[^\\#\r\n])*\1/,greedy:!0,inside:{interpolation:t,string:/[\s\S]+/}},{pattern:/<<[-~]?([a-z_]\w*)[\r\n](?:.*[\r\n])*?[\t ]*\1/i,alias:"heredoc-string",greedy:!0,inside:{delimiter:{pattern:/^<<[-~]?[a-z_]\w*|\b[a-z_]\w*$/i,inside:{symbol:/\b\w+/,punctuation:/^<<[-~]?/}},interpolation:t,string:/[\s\S]+/}},{pattern:/<<[-~]?'([a-z_]\w*)'[\r\n](?:.*[\r\n])*?[\t ]*\1/i,alias:"heredoc-string",greedy:!0,inside:{delimiter:{pattern:/^<<[-~]?'[a-z_]\w*'|\b[a-z_]\w*$/i,inside:{symbol:/\b\w+/,punctuation:/^<<[-~]?'|'$/}},string:/[\s\S]+/}}],"command-literal":[{pattern:RegExp(/%x/.source+n),greedy:!0,inside:{interpolation:t,command:{pattern:/[\s\S]+/,alias:"string"}}},{pattern:/`(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|[^\\`#\r\n])*`/,greedy:!0,inside:{interpolation:t,command:{pattern:/[\s\S]+/,alias:"string"}}}]}),delete e.languages.ruby.string,e.languages.insertBefore("ruby","number",{builtin:/\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Fixnum|Float|Hash|IO|Integer|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|Stat|String|Struct|Symbol|TMS|Thread|ThreadGroup|Time|TrueClass)\b/,constant:/\b[A-Z][A-Z0-9_]*(?:[?!]|\b)/}),e.languages.rb=e.languages.ruby}(Prism)}}]);