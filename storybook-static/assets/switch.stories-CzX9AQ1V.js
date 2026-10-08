import{t as n,T as a}from"./iframe-krW4WiQS.js";import{D as o,a as c}from"./twig-OXX08FiC.js";import"./preload-helper-PPVm8Dsz.js";c(a);a.cache(!1);const i=e=>e,l=(e={})=>{const r=n.twig({id:"/Users/mc_davidvasquez/Mighty_Citizen/fb-ui/src/stories/01-atoms/forms/switch/switch.twig",data:[{type:"raw",value:`   <div x-data="{ isChecked: false }" class="flex items-center">
        <label for="toggle" class="relative inline-flex items-center cursor-pointer mb-0">
            <input type="checkbox" id="toggle" x-model="isChecked" class="sr-only" />
            <div :class="isChecked ? 'bg-primary' : 'bg-gray'" class="w-11 h-6 rounded-full shadow-inner"></div>
            <div :class="isChecked ? 'translate-x-5' : 'translate-x-1'" class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform"></div>
        </label>
        <span class="ml-3 text-gray-700" x-text="isChecked ? 'On' : 'Off'"></span>
    </div>`,position:{start:0,end:0}}],precompiled:!0});r.options.allowInlineIncludes=!0;try{let t=e.defaultAttributes?e.defaultAttributes:[];return Array.isArray(t)||(t=Object.entries(t)),i(r.render({attributes:new o(t),...e}))}catch(t){return i("An error occurred whilst rendering /Users/mc_davidvasquez/Mighty_Citizen/fb-ui/src/stories/01-atoms/forms/switch/switch.twig: "+t.toString())}},h={title:"Atoms/Forms/Switch",argTypes:{required:{control:{type:"boolean"}}}},d=e=>l(e),s=d.bind({});s.args={label:"Switch",id:"switch",name:"switch"};const w=["Switch"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return \`<div>\${label}</div>\`;
  return twig(args);
}`,...s.parameters?.docs?.source}}};export{s as Switch,w as __namedExportsOrder,h as default};
