import{t as a,T as s}from"./iframe-krW4WiQS.js";import{D as r,a as l}from"./twig-OXX08FiC.js";import"./preload-helper-PPVm8Dsz.js";l(s);s.cache(!1);const i=t=>t,p=(t={})=>{const n=a.twig({id:"/Users/mc_davidvasquez/Mighty_Citizen/fb-ui/src/stories/01-atoms/inline-text/tooltip/tooltip.twig",data:[{type:"raw",value:`<span x-data="{
    show: false,
    tooltipClasses: '',
    showTooltip(event) {
        this.tooltipClasses = 'bottom-full';
        const tooltip = this.$refs.tooltip;
        const tooltipRect = tooltip.getBoundingClientRect();
        const buttonRect = event.currentTarget.getBoundingClientRect();

        this.show = true;

        // Center the tooltip above the button
        let top = buttonRect.top - tooltipRect.height - 8; // 8px gap
        let left = buttonRect.left + (buttonRect.width / 2) - (tooltipRect.width / 2);

        console.log(top, left);

        // Check if tooltip goes off the top of the viewport
        if (top < 0) {            
            this.tooltipClasses = 'top-full'; // Center below
        } 

        // Adjust left position if it goes out of bounds
        if (left < 0) {
            this.tooltipClasses += \` left-2\`; // Align to the left if out of bounds
        } else if (left + tooltipRect.width > window.innerWidth) {
            this.tooltipClasses += \` right-2\`; // Align to the right if out of bounds
        }else{
            this.tooltipClasses += ' -translate-x-1/2 left-1/2'; // Center tooltip
        }

        // Add top and left styles based on the computed positions        
    },

    hideTooltip() {
        this.show = false;
    },

    
}" class="inline-flex gap-x-2 relative" >

    `,position:{start:0,end:1357}},{type:"output",position:{start:1357,end:1367},stack:[{type:"Twig.expression.type.variable",value:"text",match:["text"],position:{start:1357,end:1367}}]},{type:"raw",value:`
    <span class="relative">
        <button x-ref="button" @click="show = !show;" @focusin="showTooltip($event)" @blur="hideTooltip()" @mouseenter="showTooltip($event)" @mouseleave="hideTooltip()" ><span class="sr-only">Tooltip trigger for `,position:{start:1367,end:1608}},{type:"output",position:{start:1608,end:1618},stack:[{type:"Twig.expression.type.variable",value:"text",match:["text"],position:{start:1608,end:1618}}]},{type:"raw",value:`</span><i class="icon-info-circle"></i></button>
        <span         
            x-ref="tooltip"
            aria-hidden="!show"                       
            :class="tooltipClasses + (show ? ' opacity-100' : ' opacity-0') + ' duration-75 transition-opacity'"
            class="absolute bg-primary text-white text-sm rounded-sm p-2 whitespace-nowrap"
    >
            `,position:{start:1618,end:1996}},{type:"output",position:{start:1996,end:2009},stack:[{type:"Twig.expression.type.variable",value:"tooltip",match:["tooltip"],position:{start:1996,end:2009}}]},{type:"raw",value:`
        </span>
    </span>
 
</span>


`,position:{start:2009,end:2009}}],precompiled:!0});n.options.allowInlineIncludes=!0;try{let e=t.defaultAttributes?t.defaultAttributes:[];return Array.isArray(e)||(e=Object.entries(e)),i(n.render({attributes:new r(e),...t}))}catch(e){return i("An error occurred whilst rendering /Users/mc_davidvasquez/Mighty_Citizen/fb-ui/src/stories/01-atoms/inline-text/tooltip/tooltip.twig: "+e.toString())}},f={title:"Atoms/Inline Text/Tooltip"},u=t=>p(t),o=u.bind({});o.args={text:"Trigger Text",tooltip:"Tooltip Text"};const g=["Tooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return \`<div>\${label}</div>\`;
  return twig(args);
}`,...o.parameters?.docs?.source}}};export{o as Tooltip,g as __namedExportsOrder,f as default};
