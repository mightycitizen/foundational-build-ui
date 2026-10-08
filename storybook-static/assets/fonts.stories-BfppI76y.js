import{t as o,T as n}from"./iframe-krW4WiQS.js";import{D as p,a as l}from"./twig-OXX08FiC.js";import"./preload-helper-PPVm8Dsz.js";l(n);n.cache(!1);const a=t=>t,u=(t={})=>{const s=o.twig({id:"/Users/mc_davidvasquez/Mighty_Citizen/fb-ui/src/stories/00-base/fonts/fonts.stories.twig",data:[{type:"raw",value:`
`,position:{start:0,end:1}},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:"key",valueVar:"value",expression:[{type:"Twig.expression.type.variable",value:"fonts",match:["fonts"]}],position:{start:1,end:30},output:[{type:"raw",value:"  ",position:{start:31,end:33}},{type:"logic",token:{type:"Twig.logic.type.set",key:"font",expression:[{type:"Twig.expression.type.variable",value:"value",match:["value"]},{type:"Twig.expression.type.filter",value:"join",match:["| join","join"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.string",value:", "},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}],position:{start:33,end:68}},position:{start:33,end:68}},{type:"raw",value:"  <div class='font-",position:{start:69,end:88}},{type:"output",position:{start:88,end:97},stack:[{type:"Twig.expression.type.variable",value:"key",match:["key"],position:{start:88,end:97}}]},{type:"raw",value:`'>
    <h2 class="text-xl mb-0">`,position:{start:97,end:129}},{type:"output",position:{start:129,end:151},stack:[{type:"Twig.expression.type.variable",value:"key",match:["key"],position:{start:129,end:151}},{type:"Twig.expression.type.filter",value:"capitalize",match:["| capitalize","capitalize"],position:{start:129,end:151}}]},{type:"raw",value:`</h2>  
    <div class="mb-3">    
      <span>Default</span><br />
      <em>Italics</em><br />
      <strong>Bold</strong></p>
    </div>
  </div>
`,position:{start:151,end:300}}]},position:{open:{start:1,end:30},close:{start:300,end:312}}}],precompiled:!0});s.options.allowInlineIncludes=!0;try{let e=t.defaultAttributes?t.defaultAttributes:[];return Array.isArray(e)||(e=Object.entries(e)),a(s.render({attributes:new p(e),...t}))}catch(e){return a("An error occurred whilst rendering /Users/mc_davidvasquez/Mighty_Citizen/fb-ui/src/stories/00-base/fonts/fonts.stories.twig: "+e.toString())}},c=["Roboto","sans-serif"],d=["Georgia","serif"],i={display:c,body:d},w={title:"Base/Fonts"},y=t=>u(t),r=y.bind({});let g=Object.keys(i).reduce((t,s)=>(t[s]=i[s],t),{});r.args={fonts:g};const b=["Fonts"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return \`<div>\${label}</div>\`;
  return twig(args);
}`,...r.parameters?.docs?.source}}};export{r as Fonts,b as __namedExportsOrder,w as default};
