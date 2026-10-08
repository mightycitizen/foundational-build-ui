import{t as i,T as t}from"./iframe-krW4WiQS.js";import{D as l,a as d}from"./twig-OXX08FiC.js";d(t);t.cache(!1);const n=e=>e,b=(e={})=>{const a=i.twig({id:"/Users/mc_davidvasquez/Mighty_Citizen/fb-ui/src/stories/00-base/utils/loader/loader.twig",data:[{type:"raw",value:`<div class="loader inline-block relative w-20 h-20">
  <div class="absolute w-full h-full border-8 border-black rounded-full animate-loader border-black border-t-transparent border-r-transparent border-b-transparent"></div>
  <div class="absolute w-full h-full border-8 border-black rounded-full animate-loader animate-delay-75 border-black border-t-transparent border-r-transparent border-b-transparent"></div>
  <div class="absolute w-full h-full border-8 border-black rounded-full animate-loader animate-delay-150 border-black border-t-transparent border-r-transparent border-b-transparent"></div>
</div>

<style>
  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .animate-loader {
    animation: loader 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  }

  .animate-delay-75 {
    animation-delay: -0.3s;
  }

  .animate-delay-150 {
    animation-delay: -0.15s;
  }

  .is-loaded .loader {
    display: none;
  }

  .button .loader {
    width: 3.75rem; /* Tailwind equivalent for rem-calc(15) */
    height: 3.75rem;
    margin-top: -0.25rem; /* rem-calc(-1) */
    margin-left: 2rem; /* rem-calc(8) */
    margin-right: -0.75rem; /* rem-calc(-3) */
    vertical-align: middle;
  }

  .button .loader div {
    border-width: 1px; /* Tailwind equivalent for rem-calc(4) */
  }
</style>
`,position:{start:0,end:0}}],precompiled:!0});a.options.allowInlineIncludes=!0;try{let r=e.defaultAttributes?e.defaultAttributes:[];return Array.isArray(r)||(r=Object.entries(r)),n(a.render({attributes:new l(r),...e}))}catch(r){return n("An error occurred whilst rendering /Users/mc_davidvasquez/Mighty_Citizen/fb-ui/src/stories/00-base/utils/loader/loader.twig: "+r.toString())}};export{b as t};
