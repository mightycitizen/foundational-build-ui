import{t as s}from"./callout-pbiKcj6w.js";import"./iframe-krW4WiQS.js";import"./preload-helper-PPVm8Dsz.js";import"./twig-OXX08FiC.js";const u={title:"Molecules/Callout",argTypes:{label:{control:"text"},link:{control:"text"},closable:{control:"boolean"}}},r=o=>s(o),a={title:"Callout title",text:"Callout, 250 character max - Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan morbi et non facilisi iaculis, tempus curabitur bibendum.",link:{url:"#",target:"new_tab",text:"Alert title goes here lorem ipsum dolor sit amet.]"},icon:"book-bookmark"},e=r.bind({});e.args=a;const t=r.bind({});t.args=Object.assign({...a},{icon:null,image:{src:"/images/callout.jpg",alt:"image alt"}});const m=["Default","Image"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return \`<div>\${label}</div>\`;

  return twig(args);
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return \`<div>\${label}</div>\`;

  return twig(args);
}`,...t.parameters?.docs?.source}}};export{e as Default,t as Image,m as __namedExportsOrder,u as default};
