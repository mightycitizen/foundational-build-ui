import{t as o,T as n}from"./twig-BXd3Gfe2.js";import{D as a,a as p}from"./twig-foVUGi9y.js";p(n);n.cache(!1);const s=e=>e,y=(e={})=>{const i=o.twig({id:"/Users/jabelmunoz/Documents/projects/foundational-build/src/stories/components/navigation/local-nav/local-nav.twig",data:[{type:"raw",value:`<div class="local-nav lg:hidden" x-data="{ open: false }">
  <button x-on:click="open = ! open" class="bg-neutrals-50 border border-neutrals-200 border-l-[6px] border-l-primary-500 w-full flex items-center py-3 px-3">
    <span class="icon-list text-primary-500 text-3xl pr-5"></span>
    <span class="font-bold text-lg text-left">In this section</span>
    <span class="icon-plus text-2xl text-primary-500 ml-auto" :class="{ 'icon-minus': open, 'icon-plus' : !open }"></span>
  </button>
  <div class="lg:shadow px-6 py-5" x-show="open" >
    <p class="text-primary-900 font-bold text-2xl mb-5"><a href="#">Parent Page Link</a></p>
    <ul class="list-none font-semibold space-y-2">
      `,position:{start:0,end:690}},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"item",expression:[{type:"Twig.expression.type.variable",value:"local_nav",match:["local_nav"]}],position:{start:690,end:717},output:[{type:"raw",value:`        <li>
          `,position:{start:718,end:741}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"item",match:["item"]},{type:"Twig.expression.type.key.period",key:"url"}],position:{start:741,end:758},output:[{type:"raw",value:'<a class="font-medium text-neutrals-800" href="',position:{start:758,end:805}},{type:"output",position:{start:805,end:819},stack:[{type:"Twig.expression.type.variable",value:"item",match:["item"],position:{start:805,end:819}},{type:"Twig.expression.type.key.period",position:{start:805,end:819},key:"url"}]},{type:"raw",value:'">',position:{start:819,end:821}}]},position:{open:{start:741,end:758},close:{start:821,end:832}}},{type:"raw",value:"            ",position:{start:833,end:845}},{type:"output",position:{start:845,end:860},stack:[{type:"Twig.expression.type.variable",value:"item",match:["item"],position:{start:845,end:860}},{type:"Twig.expression.type.key.period",position:{start:845,end:860},key:"text"}]},{type:"raw",value:`
          `,position:{start:860,end:871}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"item",match:["item"]},{type:"Twig.expression.type.key.period",key:"url"}],position:{start:871,end:888},output:[{type:"raw",value:"</a>",position:{start:888,end:892}}]},position:{open:{start:871,end:888},close:{start:892,end:903}}},{type:"raw",value:`        </li>
      `,position:{start:904,end:924}}]},position:{open:{start:690,end:717},close:{start:924,end:936}}},{type:"raw",value:`    </ul>
  </div>
</div>
<div class="lg:shadow px-6 py-5 hidden lg:block">
  <p class="text-primary-900 font-bold text-2xl mb-5"><a href="#">Parent Page Link</a></p>
  <div x-data="{ showAll: false }">
    <div>
      <ul class="list-none font-semibold space-y-2">
        `,position:{start:937,end:1211}},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"item",expression:[{type:"Twig.expression.type.variable",value:"local_nav",match:["local_nav"]}],position:{start:1211,end:1238},output:[{type:"raw",value:'          <li x-show="',position:{start:1239,end:1261}},{type:"output",position:{start:1261,end:1277},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:1261,end:1277}},{type:"Twig.expression.type.key.period",position:{start:1261,end:1277},key:"index"}]},{type:"raw",value:` <= 3 || showAll">
            `,position:{start:1277,end:1308}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"item",match:["item"]},{type:"Twig.expression.type.key.period",key:"url"}],position:{start:1308,end:1325},output:[{type:"raw",value:'<a class="font-medium text-neutrals-800" href="',position:{start:1325,end:1372}},{type:"output",position:{start:1372,end:1386},stack:[{type:"Twig.expression.type.variable",value:"item",match:["item"],position:{start:1372,end:1386}},{type:"Twig.expression.type.key.period",position:{start:1372,end:1386},key:"url"}]},{type:"raw",value:'">',position:{start:1386,end:1388}}]},position:{open:{start:1308,end:1325},close:{start:1388,end:1399}}},{type:"raw",value:"              ",position:{start:1400,end:1414}},{type:"output",position:{start:1414,end:1429},stack:[{type:"Twig.expression.type.variable",value:"item",match:["item"],position:{start:1414,end:1429}},{type:"Twig.expression.type.key.period",position:{start:1414,end:1429},key:"text"}]},{type:"raw",value:`
              `,position:{start:1429,end:1444}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"item",match:["item"]},{type:"Twig.expression.type.key.period",key:"url"}],position:{start:1444,end:1461},output:[{type:"raw",value:"</a>",position:{start:1461,end:1465}}]},position:{open:{start:1444,end:1461},close:{start:1465,end:1476}}},{type:"raw",value:`          </li>
        `,position:{start:1477,end:1501}}]},position:{open:{start:1211,end:1238},close:{start:1501,end:1513}}},{type:"raw",value:`      </ul>
    </div>
    <div class="flex items-center text-no-underline hover:text-underline text-primary pt-6 cursor-pointer" x-on:click="showAll = !showAll">
      <span class="text-large" x-text="showAll ? 'Show Less' : 'Show More'">
      </span>
      <span class="icon-plus text-xl text-primary-500 ml-4" :class="{ 'icon-minus': showAll, 'icon-plus' : !showAll }"></span>
    </div>
  </div>
</div>



`,position:{start:1514,end:1514}}],precompiled:!0});i.options.allowInlineIncludes=!0;try{let t=e.defaultAttributes?e.defaultAttributes:[];return Array.isArray(t)||(t=Object.entries(t)),s(i.render({attributes:new a(t),...e}))}catch(t){return s("An error occurred whilst rendering /Users/jabelmunoz/Documents/projects/foundational-build/src/stories/components/navigation/local-nav/local-nav.twig: "+t.toString())}};export{y as t};
