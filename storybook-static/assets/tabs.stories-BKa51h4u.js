import{t as r}from"./tabs-vsbk9zG1.js";import"./iframe-krW4WiQS.js";import"./preload-helper-PPVm8Dsz.js";import"./twig-OXX08FiC.js";const l={title:"Molecules/Tabs",argTypes:{}},s=a=>r(a),o=[...Array(15)].map((a,e)=>({text:"Tab "+(0+e),id:"tab-"+e,content:`<h2>Tab Content</h2><p>Lorem ipsum ${e}</p><p><a href='' class='read-more'>Styled Link</a></p>`})),n={tabs_id:"example-tabs",tabs:o},t=s.bind({});t.args=n;const d=["Tabs"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return \`<div>\${label}</div>\`;
  return twig(args);
}`,...t.parameters?.docs?.source}}};export{t as Tabs,d as __namedExportsOrder,l as default};
