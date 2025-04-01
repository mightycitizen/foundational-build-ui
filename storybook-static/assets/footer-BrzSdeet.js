import{t as i,T as o}from"./twig-BXd3Gfe2.js";import{D as n,a as p}from"./twig-foVUGi9y.js";import"./social-media-BBQJ4pE2.js";import"./logo-AYNrM0QZ.js";import"./back-to-top-Bf3x7Log.js";import"./link-CIbey7wG.js";p(o);o.cache(!1);i.twig({id:"@components/links/link.twig",data:[{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"value",match:["value"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.variable",value:"url",match:["url"]},{type:"Twig.expression.type.test",filter:"defined",modifier:"not"},{type:"Twig.expression.type.operator.binary",value:"and",precidence:13,associativity:"leftToRight",operator:"and"}],position:{start:0,end:47},output:[{type:"raw",value:"  ",position:{start:48,end:50}},{type:"logic",token:{type:"Twig.logic.type.set",key:"url",expression:[{type:"Twig.expression.type.variable",value:"value",match:["value"]}],position:{start:50,end:71}},position:{start:50,end:71}},{type:"raw",value:"  ",position:{start:72,end:74}},{type:"logic",token:{type:"Twig.logic.type.set",key:"text",expression:[{type:"Twig.expression.type.variable",value:"customText",match:["customText"]}],position:{start:74,end:101}},position:{start:74,end:101}}]},position:{open:{start:0,end:47},close:{start:102,end:113}}},{type:"raw",value:'<a href="',position:{start:114,end:123}},{type:"output",position:{start:123,end:132},stack:[{type:"Twig.expression.type.variable",value:"url",match:["url"],position:{start:123,end:132}}]},{type:"raw",value:'" ',position:{start:132,end:134}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"targetString",match:["targetString"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:134,end:165},output:[{type:"raw",value:'target="',position:{start:165,end:173}},{type:"output",position:{start:173,end:191},stack:[{type:"Twig.expression.type.variable",value:"targetString",match:["targetString"],position:{start:173,end:191}}]},{type:"raw",value:'"',position:{start:191,end:192}}]},position:{open:{start:134,end:165},close:{start:192,end:203}}},{type:"raw",value:' class="',position:{start:203,end:211}},{type:"output",position:{start:211,end:235},stack:[{type:"Twig.expression.type.variable",value:"modifier",match:["modifier"],position:{start:211,end:235}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:211,end:235}}]},{type:"raw",value:'">',position:{start:235,end:237}},{type:"output",position:{start:237,end:247},stack:[{type:"Twig.expression.type.variable",value:"text",match:["text"],position:{start:237,end:247}}]},{type:"raw",value:`</a>
`,position:{start:247,end:247}}],precompiled:!0});i.twig({id:"@components/utils/back-to-top/back-to-top.twig",data:[{type:"raw",value:`<a href="#header" class="backToTop fixed bottom-8 right-8 flex flex-col rounded-full w-12 aspect-square justify-center items-center no-underline bg-opacity-70 bg-gray-700 hover:bg-opacity-100 z-30 transition-all duration-200 " 
  `,position:{start:0,end:230}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"scroll_show",match:["scroll_show"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:230,end:260},output:[{type:"raw",value:`    :class="backToTop ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 -z-10 translate-y-3'"    
  `,position:{start:261,end:359}}]},position:{open:{start:230,end:260},close:{start:359,end:370}}},{type:"raw",value:`>
  <i class="backToTop_icon icon-chevron-up -mt-1"></i>
  <span class="backToTop_text uppercase text-xs font-bold"><span class="sr-only">Back to </span>top</span>  
</a>
`,position:{start:371,end:371}}],precompiled:!0});i.twig({id:"@components/logo/logo.twig",data:[{type:"raw",value:'<a href="',position:{start:0,end:9}},{type:"output",position:{start:9,end:88},stack:[{type:"Twig.expression.type.variable",value:"homepage",match:["homepage"],position:{start:9,end:88}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:9,end:88},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:9,end:88}},{type:"Twig.expression.type.string",value:"/iframe.html?path=/story/pages-templates--templates",position:{start:9,end:88}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:9,end:88},expression:!1}]}]},{type:"raw",value:`" class="logo">
  <img `,position:{start:88,end:111}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"logo",match:["logo"]},{type:"Twig.expression.type.key.period",key:"height"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:111,end:141},output:[{type:"raw",value:'height="',position:{start:141,end:149}},{type:"output",position:{start:149,end:166},stack:[{type:"Twig.expression.type.variable",value:"logo",match:["logo"],position:{start:149,end:166}},{type:"Twig.expression.type.key.period",position:{start:149,end:166},key:"height"}]},{type:"raw",value:'"',position:{start:166,end:167}}]},position:{open:{start:111,end:141},close:{start:167,end:178}}},{type:"raw",value:" ",position:{start:178,end:179}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"logo",match:["logo"]},{type:"Twig.expression.type.key.period",key:"width"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:179,end:208},output:[{type:"raw",value:'width="',position:{start:208,end:215}},{type:"output",position:{start:215,end:231},stack:[{type:"Twig.expression.type.variable",value:"logo",match:["logo"],position:{start:215,end:231}},{type:"Twig.expression.type.key.period",position:{start:215,end:231},key:"width"}]},{type:"raw",value:'"',position:{start:231,end:232}}]},position:{open:{start:179,end:208},close:{start:232,end:243}}},{type:"raw",value:' class="logo_image" src="',position:{start:243,end:268}},{type:"output",position:{start:268,end:282},stack:[{type:"Twig.expression.type.variable",value:"logo",match:["logo"],position:{start:268,end:282}},{type:"Twig.expression.type.key.period",position:{start:268,end:282},key:"src"}]},{type:"raw",value:'" alt="',position:{start:282,end:289}},{type:"output",position:{start:289,end:303},stack:[{type:"Twig.expression.type.variable",value:"logo",match:["logo"],position:{start:289,end:303}},{type:"Twig.expression.type.key.period",position:{start:289,end:303},key:"alt"}]},{type:"raw",value:`"/>
</a>
`,position:{start:303,end:303}}],precompiled:!0});i.twig({id:"@components/utils/social-media/social-media.twig",data:[{type:"raw",value:`<ul class="list-none inline-flex gap-4 mb-0 social-media">
  `,position:{start:0,end:61}},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"item",expression:[{type:"Twig.expression.type.variable",value:"social",match:["social"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:61,end:95},output:[{type:"raw",value:`      <li>
        <a href="`,position:{start:96,end:124}},{type:"output",position:{start:124,end:138},stack:[{type:"Twig.expression.type.variable",value:"item",match:["item"],position:{start:124,end:138}},{type:"Twig.expression.type.key.period",position:{start:124,end:138},key:"url"}]},{type:"raw",value:`" target="_blank" class="icon aspect-square rounded-full text-white text-[32px] w-8 flex items-center justify-center no-underline text-lg hover:opacity-80">
          <span class="sr-only">`,position:{start:138,end:327}},{type:"output",position:{start:327,end:344},stack:[{type:"Twig.expression.type.variable",value:"item",match:["item"],position:{start:327,end:344}},{type:"Twig.expression.type.key.period",position:{start:327,end:344},key:"handle"}]},{type:"raw",value:`</span>
          <span class="icon-`,position:{start:344,end:380}},{type:"output",position:{start:380,end:434},stack:[{type:"Twig.expression.type.variable",value:"item",match:["item"],position:{start:380,end:434}},{type:"Twig.expression.type.key.period",position:{start:380,end:434},key:"icon"},{type:"Twig.expression.type.test",position:{start:380,end:434},filter:"empty",modifier:"not"},{type:"Twig.expression.type.variable",value:"item",match:["item"],position:{start:380,end:434}},{type:"Twig.expression.type.key.period",position:{start:380,end:434},key:"icon"},{type:"Twig.expression.type.variable",value:"item",match:["item"],position:{start:380,end:434}},{type:"Twig.expression.type.key.period",position:{start:380,end:434},key:"handle"},{type:"Twig.expression.type.operator.binary",value:"?",position:{start:380,end:434},precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"raw",value:`"></span>
        </a>
      </li>
  `,position:{start:434,end:471}}]},position:{open:{start:61,end:95},close:{start:471,end:483}}},{type:"raw",value:`  </ul>
`,position:{start:484,end:484}}],precompiled:!0});const s=e=>e,g=(e={})=>{const a=i.twig({id:"/Users/jabelmunoz/Documents/projects/foundational-build/src/stories/layout/wrapper/footer.twig",data:[{type:"raw",value:`<footer class="l-footer bg-primary-200">
  <div class="l-footer-top text-white bg-primary-800 pt-8 pb-10 md:py-8">
    <div class="container">
      <div class="grid grid-cols-12 gap-6">
        <div class="col-span-12 md:col-span-6 mb-4">
          <span class="font-bold block md:inline-block align-top mb-2 md:mb-0 md:mr-4">Connect with us:</span>
          `,position:{start:0,end:361}},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@components/utils/social-media/social-media.twig"}],position:{start:361,end:425}},position:{start:361,end:425}},{type:"raw",value:`        </div>

        <div class="col-span-12 md:col-span-6 md:text-right mb-11 md:mb-0">
          <ul class="menu flex gap-x-3 list-none md:justify-end">
            <li><a class="button" href="#">Apply Now</a></li>
            <li><a class="button secondary" href="#">Take Virtual Tour</a></li>
          </ul>
        </div>

        <div class="col-span-12 md:col-span-3 mb-12 md:mb-0 md:text-left">
          <div class="mb-4">
            `,position:{start:426,end:874}},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@components/logo/logo.twig"}],withStack:[{type:"Twig.expression.type.variable",value:"logo",match:["logo"]}],position:{start:874,end:926}},position:{start:874,end:926}},{type:"raw",value:`          </div>
          <ul class="list-none space-y-5 flex flex-col">
            <li>
              <span class="icon icon-phone-call text-2xl md:text-[32px] align-middle mr-2"></span>
              <span class="font-bold">Phone</span>
              <span>123-456-7889</span>
            </li>
            <li>
              <span class="icon icon-map-pin-line text-2xl md:text-[32px] align-middle mr-2"></span>
              <span class="font-bold"><a href="#">Get Directions</a></span>
            </li>
            <li>
              <span class="icon icon-at text-2xl md:text-[32px] align-middle mr-2"></span>
              <span class="font-bold">Email</span>
              <span><a href="mailto:info@mightyuniversitey.edu">info@mightyuniversity.edu</a></span>
            </li>
          </ul>
        </div>

        <div class="col-span-12 md:col-span-3">
          <span class="h5 block mb-4">Example Label - Optional</span>
          <ul class="menu flex flex-col gap-x-3 gap-y-3 list-none mb-3 md:mb-0">
            `,position:{start:927,end:1959}},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"item",expression:[{type:"Twig.expression.type.variable",value:"menu_column",match:["menu_column"]}],position:{start:1959,end:1988},output:[{type:"raw",value:`              <li>
                <a class="font-bold no-underline hover:underline" href="`,position:{start:1989,end:2080}},{type:"output",position:{start:2080,end:2094},stack:[{type:"Twig.expression.type.variable",value:"item",match:["item"],position:{start:2080,end:2094}},{type:"Twig.expression.type.key.period",position:{start:2080,end:2094},key:"url"}]},{type:"raw",value:'">',position:{start:2094,end:2096}},{type:"output",position:{start:2096,end:2111},stack:[{type:"Twig.expression.type.variable",value:"item",match:["item"],position:{start:2096,end:2111}},{type:"Twig.expression.type.key.period",position:{start:2096,end:2111},key:"text"}]},{type:"raw",value:`</a>
              </li>
            `,position:{start:2111,end:2148}}]},position:{open:{start:1959,end:1988},close:{start:2148,end:2160}}},{type:"raw",value:`          </ul>
        </div>

        <div class="col-span-12 md:col-span-3">
          <span class="h5 block mb-4">Example Label - Optional</span>
          <ul class="menu flex flex-col gap-x-3 gap-y-3 list-none mb-3 md:mb-0">
            `,position:{start:2161,end:2404}},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"item",expression:[{type:"Twig.expression.type.variable",value:"menu_column",match:["menu_column"]}],position:{start:2404,end:2433},output:[{type:"raw",value:`              <li>
                <a class="font-bold no-underline hover:underline" href="`,position:{start:2434,end:2525}},{type:"output",position:{start:2525,end:2539},stack:[{type:"Twig.expression.type.variable",value:"item",match:["item"],position:{start:2525,end:2539}},{type:"Twig.expression.type.key.period",position:{start:2525,end:2539},key:"url"}]},{type:"raw",value:'">',position:{start:2539,end:2541}},{type:"output",position:{start:2541,end:2556},stack:[{type:"Twig.expression.type.variable",value:"item",match:["item"],position:{start:2541,end:2556}},{type:"Twig.expression.type.key.period",position:{start:2541,end:2556},key:"text"}]},{type:"raw",value:`</a>
              </li>
            `,position:{start:2556,end:2593}}]},position:{open:{start:2404,end:2433},close:{start:2593,end:2605}}},{type:"raw",value:`          </ul>
        </div>

        <div class="col-span-12 md:col-span-3">
          <span class="h5 block mb-4">Example Label - Optional</span>
          <ul class="menu flex flex-col gap-x-3 gap-y-3 list-none">
            `,position:{start:2606,end:2836}},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"item",expression:[{type:"Twig.expression.type.variable",value:"menu_column",match:["menu_column"]}],position:{start:2836,end:2865},output:[{type:"raw",value:`              <li>
                <a class="font-bold no-underline hover:underline" href="`,position:{start:2866,end:2957}},{type:"output",position:{start:2957,end:2971},stack:[{type:"Twig.expression.type.variable",value:"item",match:["item"],position:{start:2957,end:2971}},{type:"Twig.expression.type.key.period",position:{start:2957,end:2971},key:"url"}]},{type:"raw",value:'">',position:{start:2971,end:2973}},{type:"output",position:{start:2973,end:2988},stack:[{type:"Twig.expression.type.variable",value:"item",match:["item"],position:{start:2973,end:2988}},{type:"Twig.expression.type.key.period",position:{start:2973,end:2988},key:"text"}]},{type:"raw",value:`</a>
              </li>
            `,position:{start:2988,end:3025}}]},position:{open:{start:2836,end:2865},close:{start:3025,end:3037}}},{type:"raw",value:`          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="l-footer-bottom py-6">
    <div class="container">
      <div class="grid grid-cols-12 gap-6">
        <div class="col-span-12 md:col-span-6">
          <p class="text-lg font-bold">&copy; Copyright `,position:{start:3038,end:3316}},{type:"output",position:{start:3316,end:3352},stack:[{type:"Twig.expression.type.variable",value:"copyright_year",match:["copyright_year"],position:{start:3316,end:3352}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:3316,end:3352},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:3316,end:3352}},{type:"Twig.expression.type.number",value:2025,match:["2025",null],position:{start:3316,end:3352}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:3316,end:3352},expression:!1}]}]},{type:"raw",value:" ",position:{start:3352,end:3353}},{type:"output",position:{start:3353,end:3378},stack:[{type:"Twig.expression.type.variable",value:"site_name",match:["site_name"],position:{start:3353,end:3378}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:3353,end:3378}}]},{type:"raw",value:`</p>
        </div>
        <div class="col-span-12 md:col-span-6">
          <ul class="list-none flex flex-col md:flex-row gap-4 justify-center mb-2">
            `,position:{start:3378,end:3543}},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"link",expression:[{type:"Twig.expression.type.variable",value:"footer_links",match:["footer_links"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:3543,end:3583},output:[{type:"raw",value:`              <li>
                `,position:{start:3584,end:3619}},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@components/links/link.twig"}],withStack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]}],position:{start:3619,end:3672}},position:{start:3619,end:3672}},{type:"raw",value:`              </li>
            `,position:{start:3673,end:3705}}]},position:{open:{start:3543,end:3583},close:{start:3705,end:3717}}},{type:"raw",value:`          </ul>
        </div>
      </div>
    </div>
  </div>
  `,position:{start:3718,end:3784}},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@components/utils/back-to-top/back-to-top.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"scroll_show"},{type:"Twig.expression.type.bool",value:!0},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}],position:{start:3784,end:3879}},position:{start:3784,end:3879}},{type:"raw",value:`</footer>
`,position:{start:3880,end:3880}}],precompiled:!0});a.options.allowInlineIncludes=!0;try{let t=e.defaultAttributes?e.defaultAttributes:[];return Array.isArray(t)||(t=Object.entries(t)),s(a.render({attributes:new n(t),...e}))}catch(t){return s("An error occurred whilst rendering /Users/jabelmunoz/Documents/projects/foundational-build/src/stories/layout/wrapper/footer.twig: "+t.toString())}};export{g as t};
