import{t as a}from"./label-value-BTYIv30W.js";import"./iframe-krW4WiQS.js";import"./preload-helper-PPVm8Dsz.js";import"./twig-OXX08FiC.js";import"./icon-7aXboSWf.js";const c={title:"Molecules/Lists/Label-Value",argTypes:{items:[{label:{control:"text"},icon:{control:"select",options:["","email","phone"]},value:{control:"text"}}]}},r=t=>a(t),l={items:[{label:"Label",value:"Value"},{label:"Label",value:"Value"},{label:"Label",value:"Value",icon:"book"}]},e=r.bind({});e.args=l;const m=["Listing"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return \`<div>\${label}</div>\`;
  return twig(args);
}`,...e.parameters?.docs?.source}}};export{e as Listing,m as __namedExportsOrder,c as default};
