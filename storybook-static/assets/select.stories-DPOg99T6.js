import{t as o}from"./select-Bo__LXzS.js";import{f as l}from"./filterable-soeEFAv5.js";import"./iframe-krW4WiQS.js";import"./preload-helper-PPVm8Dsz.js";import"./twig-OXX08FiC.js";import"./label-CVQl4xwv.js";const b={title:"Atoms/Forms/Select Dropdown",argTypes:{filterable:{control:{type:"boolean"}},required:{control:{type:"boolean"}}}},n=t=>o(t),a={label:"Select Dropdown",id:"dropdown",name:"dropdown",placeholder:"Select an option",options:[{label:"Dropdown A",value:0},{label:"Dropdown B",value:1},{label:"Dropdown C",value:2}]},e=n.bind({});e.args=a;const s=t=>l(t),r=s.bind({});r.args=Object.assign({...a},{name:"select_filterable",id:"select_filterable"});const g=["Default","Filterable"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return \`<div>\${label}</div>\`;
  return twig(args);
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return \`<div>\${label}</div>\`;
  return filterableTwig(args);
}`,...r.parameters?.docs?.source}}};export{e as Default,r as Filterable,g as __namedExportsOrder,b as default};
