import{T as t,t as s}from"./iframe-krW4WiQS.js";import{a as e}from"./twig-OXX08FiC.js";e(t);t.cache(!1);e(t);t.cache(!1);s.twig({id:"@molecules/carousel/carousel-nav.twig",data:[{type:"raw",value:'<div class="splide__arrows splide__nav flex justify-center gap-6 items-center md:items-start mt-4 md:mt-8 ',position:{start:0,end:106}},{type:"output",position:{start:106,end:138},stack:[{type:"Twig.expression.type.variable",value:"splide_nav_class",match:["splide_nav_class"],position:{start:106,end:138}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:106,end:138}}]},{type:"raw",value:" ",position:{start:138,end:139}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"inline",match:["inline"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:139,end:163},output:[{type:"raw",value:"splide-nav--inline",position:{start:163,end:181}}]},position:{open:{start:139,end:163},close:{start:181,end:192}}},{type:"raw",value:`">
		<button class="splide__arrow splide__arrow--prev aspect-square button bg-white border-primary-700 border rounded-full w-10 h-10 flex items-center justify-center p-0 hover:bg-primary-700">
			<span class="ph ph-[arrow-left] text-xl text-primary-700"></span>
      <span class="sr-only">Prev</span>
		</button>
    <div class="md:pt-2">
      <ul class="splide__pagination list-none hidden md:block gap-4"></ul>
      <div class="splide__counter text-primary-700 font-bold text-center md:mt-4"></div>
    </div>
		<button class="splide__arrow splide__arrow--next aspect-square button bg-white border-primary-700 border rounded-full w-10 h-10 flex items-center justify-center p-0">
      <span class="ph ph-[arrow-right] text-xl text-primary-700"></span>
      <span class="sr-only">Next</span>
		</button>
  `,position:{start:192,end:1003}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"pause",match:["pause"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:1003,end:1027},output:[{type:"raw",value:`    <button class="js-splide-toggle splide__toggle">
      <span class="sr-only">Toggle Pause/Play</span>
      <span class="icon-pause active"></span>
      <span class="icon-play inactive"></span>
    </button>
  `,position:{start:1028,end:1243}}]},position:{open:{start:1003,end:1027},close:{start:1243,end:1254}}},{type:"raw",value:`</div>
`,position:{start:1255,end:1255}}],precompiled:!0});
