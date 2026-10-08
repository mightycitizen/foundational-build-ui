import{t as i}from"./alert-Cvtzurhr.js";import"./iframe-krW4WiQS.js";import"./preload-helper-PPVm8Dsz.js";import"./twig-OXX08FiC.js";import"./icon-7aXboSWf.js";const m={title:"Molecules/Cards/Alert/Dismissible",argTypes:{label:{control:"text"},link:{control:"text"},closable:{control:"boolean"}}},r=o=>i(o),a={alert_type:{type:"emergency",label:"Emergency Alert",icon:{name:"icon-lightning-fill"},icon_colors:"bg-tertiary-100 text-tertiary-600"},title:"Alert title",text:"[Text goes here]  Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan morbi et non facilisi iaculis, tempus curabitur bibendum.",link:{url:"#",target:"new_tab",text:"Alert title goes here lorem ipsum dolor sit amet.]"},closable:!0},e=r.bind({});e.args=a;const t=r.bind({});t.args=Object.assign({...a},{link:"#"});const p=["Default","Link"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return \`<div>\${label}</div>\`;

  return twig(args);
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return \`<div>\${label}</div>\`;

  return twig(args);
}`,...t.parameters?.docs?.source}}};export{e as Default,t as Link,p as __namedExportsOrder,m as default};
