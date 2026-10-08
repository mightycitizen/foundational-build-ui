import{t as r}from"./link-Cwb-4-pJ.js";import"./iframe-krW4WiQS.js";import"./preload-helper-PPVm8Dsz.js";import"./twig-OXX08FiC.js";const l={title:"Atoms/Links",argTypes:{text:{control:"text"},url:{control:"text"},size:{control:{type:"select"},options:["","h3"]}}},o=e=>r(e),s={text:"Link Text",url:"#"},t=o.bind({});t.args=s;const p=["Link"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return \`<div>\${label}</div>\`;
  return twig(args);
}`,...t.parameters?.docs?.source}}};export{t as Link,p as __namedExportsOrder,l as default};
