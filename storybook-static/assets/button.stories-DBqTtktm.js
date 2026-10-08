import{t as l}from"./button-uXfrrMM2.js";import"./iframe-krW4WiQS.js";import"./preload-helper-PPVm8Dsz.js";import"./twig-OXX08FiC.js";const p={title:"Atoms/Links/Button",argTypes:{text:{control:"text"},url:{control:"text"},color:{control:{type:"select"},options:["primary","secondary","tertiary","alert","warning","success"]},hollow:{control:"boolean"},size:{control:{type:"select"},options:["xs","sm","lg"]}}},e=i=>l(i),r={text:"Button",url:"#"},t=e.bind({});t.args=r;const s=e.bind({});s.args=Object.assign({...r},{color:"secondary"});const a=e.bind({});a.args=Object.assign({...r},{color:"tertiary"});const n=e.bind({});n.args=Object.assign({...r},{size:"sm"});const o=e.bind({});o.args=Object.assign({...r},{size:"xs"});const c=e.bind({});c.args=Object.assign({...r},{size:"lg"});const b=["Default","Secondary","Tertiary","Small","XSmall","Large"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return \`<div>\${label}</div>\`;
  return twig(args);
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return \`<div>\${label}</div>\`;
  return twig(args);
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return \`<div>\${label}</div>\`;
  return twig(args);
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return \`<div>\${label}</div>\`;
  return twig(args);
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return \`<div>\${label}</div>\`;
  return twig(args);
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return \`<div>\${label}</div>\`;
  return twig(args);
}`,...c.parameters?.docs?.source}}};export{t as Default,c as Large,s as Secondary,n as Small,a as Tertiary,o as XSmall,b as __namedExportsOrder,p as default};
