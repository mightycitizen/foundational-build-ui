import{t as i}from"./video-DWwHaWhA.js";import"./iframe-krW4WiQS.js";import"./preload-helper-PPVm8Dsz.js";import"./twig-OXX08FiC.js";import"./loader-B41Kef4N.js";const m={title:"Atoms/Video",argTypes:{}},s=o=>i(o),a={trigger:"click",video_type:"youtube",video_id:"gJ6APKIjFQY",image:{src:"https://placehold.co/900x500",alt:""}},e=s.bind({});e.args=a;const r=s.bind({});r.args=Object.assign({...a},{trigger:"scroll"});const t=s.bind({});t.args=Object.assign({...a},{video_type:"vimeo",video_id:"559422073"});const g=["Default","Scroll","Vimeo"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return \`<div>\${label}</div>\`;
  return twig(args);
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return \`<div>\${label}</div>\`;
  return twig(args);
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return \`<div>\${label}</div>\`;
  return twig(args);
}`,...t.parameters?.docs?.source}}};export{e as Default,r as Scroll,t as Vimeo,g as __namedExportsOrder,m as default};
