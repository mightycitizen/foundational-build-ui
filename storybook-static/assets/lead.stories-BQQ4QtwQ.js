import{t as n,T as i}from"./iframe-krW4WiQS.js";import{D as o,a as d}from"./twig-OXX08FiC.js";import"./preload-helper-PPVm8Dsz.js";d(i);i.cache(!1);const s=t=>t,l=(t={})=>{const a=n.twig({id:"/Users/mc_davidvasquez/Mighty_Citizen/fb-ui/src/stories/01-atoms/inline-text/lead/lead.twig",data:[{type:"raw",value:`<p class="text-2xl">
  `,position:{start:0,end:23}},{type:"output",position:{start:23,end:33},stack:[{type:"Twig.expression.type.variable",value:"text",match:["text"],position:{start:23,end:33}}]},{type:"raw",value:`
</p>
`,position:{start:33,end:33}}],precompiled:!0});a.options.allowInlineIncludes=!0;try{let e=t.defaultAttributes?t.defaultAttributes:[];return Array.isArray(e)||(e=Object.entries(e)),s(a.render({attributes:new o(e),...t}))}catch(e){return s("An error occurred whilst rendering /Users/mc_davidvasquez/Mighty_Citizen/fb-ui/src/stories/01-atoms/inline-text/lead/lead.twig: "+e.toString())}},g={title:"Atoms/Inline Text/Lead"},u=t=>l(t),r=u.bind({});r.args={text:"Lead"};const w=["Lead"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return \`<div>\${label}</div>\`;
  return twig(args);
}`,...r.parameters?.docs?.source}}};export{r as Lead,w as __namedExportsOrder,g as default};
