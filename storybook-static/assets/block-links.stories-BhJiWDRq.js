import{t as r}from"./block-links-y5NnqySv.js";import"./iframe-krW4WiQS.js";import"./preload-helper-PPVm8Dsz.js";import"./twig-OXX08FiC.js";import"./icon-7aXboSWf.js";const p={title:"Molecules/Links/Block Links",argTypes:{text:{control:"text"},url:{control:"text"},size:{control:{type:"select"},options:["","lg"]}}},o=e=>r(e),s={block_links:[{icon:"buildings",text:"Request Information",url:"http://example.com"},{icon:"map-pin-line",text:"Visit Mighty Campus",url:"http://example.com"},{icon:"buildings",text:"Find a major",url:"http://example.com"}]},t=o.bind({});t.args=s;const m=["Default"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return \`<div>\${label}</div>\`;
  return twig(args);
}`,...t.parameters?.docs?.source}}};export{t as Default,m as __namedExportsOrder,p as default};
