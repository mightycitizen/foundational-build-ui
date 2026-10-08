import{t as o,T as a}from"./iframe-krW4WiQS.js";import{D as i,a as l}from"./twig-OXX08FiC.js";import"./preload-helper-PPVm8Dsz.js";l(a);a.cache(!1);const r=t=>t,c=(t={})=>{const s=o.twig({id:"/Users/mc_davidvasquez/Mighty_Citizen/fb-ui/src/stories/02-molecules/modal/modal.twig",data:[{type:"raw",value:`


<!-- Inline Modal -->
<div x-data="{ open: true }" @keydown.escape.window="open = false" class="modal" >
    <button @click.prevent="open = true" class="button">Open Modal</button>    
    <div class="bg-black/40 fixed left-0 top-0 w-full h-full flex justify-center items-center"  @click="open = false" x-show="open" x-transition>
        <div  @click.stop class="bg-white p-8 shadow-lg max-w-screen-md relative transition-opacity duration-300" x-show="open" x-transition>
            <h2>Modal Heading Here</h2>
            <div class="prose">
                <p>Phasellus odio nisl, imperdiet vel tempus eu, blandit et erat. Nunc eget ligula quis quam viverra posuere eu vel magna.</p>
                <p>Sed faucibus non arcu ac consectetur. Donec erat lectus, pharetra ut nisi quis, mattis rhoncus sem.</p>                
            </div>        
            <button @click="open = false" class="absolute right-4 top-3 text-3xl">
                <span class="sr-only">Close</span>
                <span class="icon-close"></span>
            </button>
        </div>
    </div>
</div>

<script>
    function openModal(content) {
        this.modalContent = content;
        this.open = true;
    }
<\/script>
`,position:{start:0,end:0}}],precompiled:!0});s.options.allowInlineIncludes=!0;try{let e=t.defaultAttributes?t.defaultAttributes:[];return Array.isArray(e)||(e=Object.entries(e)),r(s.render({attributes:new i(e),...t}))}catch(e){return r("An error occurred whilst rendering /Users/mc_davidvasquez/Mighty_Citizen/fb-ui/src/stories/02-molecules/modal/modal.twig: "+e.toString())}},b={title:"Molecules/Modal",argTypes:{heading:{control:"text"},summary:{control:"text"},subheading:{control:"text"},button:{url:{control:"text"},text:{control:"text"}},categories:[{text:{control:"text"},url:{control:"text"}}]}},u=t=>c(t),d={heading:"Hero",summary:"Summary",subheading:"Subheading"},n=u.bind({});n.args=d;const f=["Modal"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return \`<div>\${label}</div>\`;
  return twig(args);
}`,...n.parameters?.docs?.source}}};export{n as Modal,f as __namedExportsOrder,b as default};
