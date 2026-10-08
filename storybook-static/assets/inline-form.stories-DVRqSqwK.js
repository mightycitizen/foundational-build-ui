import{t as a,T as s}from"./iframe-krW4WiQS.js";import{D as o,a as l}from"./twig-OXX08FiC.js";import"./preload-helper-PPVm8Dsz.js";l(s);s.cache(!1);const i=e=>e,u=(e={})=>{const n=a.twig({id:"/Users/mc_davidvasquez/Mighty_Citizen/fb-ui/src/stories/01-atoms/forms/inline-form/inline-form.twig",data:[{type:"raw",value:`
<label for="inline">Inline</label>
<div class="flex items-center gap-3">
  <span class="input-group-label">$</span>
  <input id="inline" class="input-group-field" type="number">
  <div class="input-group-button">
    <input type="submit" class="button" value="Submit">
  </div>
</div>


`,position:{start:0,end:0}}],precompiled:!0});n.options.allowInlineIncludes=!0;try{let t=e.defaultAttributes?e.defaultAttributes:[];return Array.isArray(t)||(t=Object.entries(t)),i(n.render({attributes:new o(t),...e}))}catch(t){return i("An error occurred whilst rendering /Users/mc_davidvasquez/Mighty_Citizen/fb-ui/src/stories/01-atoms/forms/inline-form/inline-form.twig: "+t.toString())}},f={title:"Atoms/Forms/Inline Form"},m=e=>u(e),r=m.bind({}),g=["InlineForm"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return \`<div>\${label}</div>\`;
  return twig(args);
}`,...r.parameters?.docs?.source}}};export{r as InlineForm,g as __namedExportsOrder,f as default};
