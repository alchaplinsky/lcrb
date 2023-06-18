"use strict";(self.webpackChunklangchain=self.webpackChunklangchain||[]).push([[530],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=a,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1170:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:2},c="Usage",s={unversionedId:"vector-databases/usage",id:"vector-databases/usage",title:"Usage",description:"- Pick a vector database from list above and install the gem listed under Gem Requirements",source:"@site/docs/vector-databases/usage.md",sourceDirName:"vector-databases",slug:"/vector-databases/usage",permalink:"/docs/vector-databases/usage",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/vector-databases/usage.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/docs/vector-databases/intro"}},i={},l=[],u={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"usage"},"Usage"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Pick a vector database from list above and install the gem listed under Gem Requirements"),(0,a.kt)("li",{parentName:"ul"},"Set the environment variable(s) listed under ENV Requirements"),(0,a.kt)("li",{parentName:"ul"},"Instantiate the vector database class:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},'weaviate = Langchain::Vectorsearch::Weaviate.new(\n  url:         ENV["WEAVIATE_URL"],\n  api_key:     ENV["WEAVIATE_API_KEY"],\n  index_name:  "Documents",\n  llm:         :openai,              # or :cohere, :hugging_face, :google_palm, or :replicate\n  llm_api_key: ENV["OPENAI_API_KEY"] # API key for the selected LLM\n)\n\n# You can instantiate other supported vector databases the same way:\n\nmilvus = Langchain::Vectorsearch::Milvus.new(...)\nqdrant = Langchain::Vectorsearch::Qdrant.new(...)\npinecone = Langchain::Vectorsearch::Pinecone.new(...)\nchrome = Langchain::Vectorsearch::Chroma.new(...)\npgvector = Langchain::Vectorsearch::Pgvector.new(...)\n')))}d.isMDXComponent=!0}}]);