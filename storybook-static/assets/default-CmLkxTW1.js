import{T as e,t}from"./twig-BXd3Gfe2.js";import{a as i}from"./twig-foVUGi9y.js";import"./header-SDrB5Wc_.js";import"./footer-NQ1pCZuR.js";import"./alert-BFy8As4j.js";i(e);e.cache(!1);t.twig({id:"@components/informational/alert/alert.twig",data:[{type:"raw",value:'<div class="alert-bar bg-white py-6 px-6 shadow ',position:{start:0,end:48}},{type:"output",position:{start:48,end:69},stack:[{type:"Twig.expression.type.variable",value:"class",match:["class"],position:{start:48,end:69}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:48,end:69}}]},{type:"raw",value:'" ',position:{start:69,end:71}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"closable",match:["closable"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:71,end:98},output:[{type:"raw",value:"data-closable",position:{start:98,end:111}}]},position:{open:{start:71,end:98},close:{start:111,end:122}}},{type:"raw",value:`>
  <div class="flex gap-6 justify-center items-center">
    <div class="alert-type-icon">
      <span class="bg-tertiary-100 inline-block w-[56px] h-[56px] rounded-full flex items-center justify-center">
        <i class="icon-lightning-fill text-tertiary-600 text-2xl"></i>
      </span>
    </div>
    <div class="">
      `,position:{start:122,end:448}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:448,end:471},output:[{type:"raw",value:'        <a class="text-lg font-bold text-black" href="',position:{start:472,end:526}},{type:"output",position:{start:526,end:540},stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:526,end:540}},{type:"Twig.expression.type.key.period",position:{start:526,end:540},key:"url"}]},{type:"raw",value:'" ',position:{start:540,end:542}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"target"}],position:{start:542,end:562},output:[{type:"raw",value:'target="',position:{start:562,end:570}},{type:"output",position:{start:570,end:587},stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:570,end:587}},{type:"Twig.expression.type.key.period",position:{start:570,end:587},key:"target"}]},{type:"raw",value:'"',position:{start:587,end:588}}]},position:{open:{start:542,end:562},close:{start:588,end:599}}},{type:"raw",value:">",position:{start:599,end:600}},{type:"output",position:{start:600,end:616},stack:[{type:"Twig.expression.type.variable",value:"alert_type",match:["alert_type"],position:{start:600,end:616}}]},{type:"raw",value:": ",position:{start:616,end:618}},{type:"output",position:{start:618,end:629},stack:[{type:"Twig.expression.type.variable",value:"title",match:["title"],position:{start:618,end:629}}]},{type:"raw",value:`</a>
      `,position:{start:629,end:640}}]},position:{open:{start:448,end:471},close:{start:640,end:650}}},{type:"logic",token:{type:"Twig.logic.type.else",match:["else"],position:{start:640,end:650},output:[{type:"raw",value:'        <span class="alert-bar_label font-bold text-lg">',position:{start:651,end:707}},{type:"output",position:{start:707,end:723},stack:[{type:"Twig.expression.type.variable",value:"alert_type",match:["alert_type"],position:{start:707,end:723}}]},{type:"raw",value:": ",position:{start:723,end:725}},{type:"output",position:{start:725,end:736},stack:[{type:"Twig.expression.type.variable",value:"title",match:["title"],position:{start:725,end:736}}]},{type:"raw",value:`</span>
      `,position:{start:736,end:750}}]},position:{open:{start:640,end:650},close:{start:750,end:761}}},{type:"raw",value:"      ",position:{start:762,end:768}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"text",match:["text"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:768,end:791},output:[{type:"raw",value:'        <span class="block text-neutrals-800">',position:{start:792,end:838}},{type:"output",position:{start:838,end:848},stack:[{type:"Twig.expression.type.variable",value:"text",match:["text"],position:{start:838,end:848}}]},{type:"raw",value:`</span>
      `,position:{start:848,end:862}}]},position:{open:{start:768,end:791},close:{start:862,end:873}}},{type:"raw",value:`    </div>
    `,position:{start:874,end:889}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"closable",match:["closable"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:889,end:916},output:[{type:"raw",value:`      <div>
        <button class="`,position:{start:917,end:952}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"closable_text",match:["closable_text"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.test",filter:"empty"}],position:{start:952,end:993},output:[{type:"raw",value:"close-button",position:{start:993,end:1005}}]},position:{open:{start:952,end:993},close:{start:1005,end:1015}}},{type:"logic",token:{type:"Twig.logic.type.else",match:["else"],position:{start:1005,end:1015},output:[{type:"raw",value:"button",position:{start:1015,end:1021}}]},position:{open:{start:1005,end:1015},close:{start:1021,end:1032}}},{type:"raw",value:`" aria-label="Dismiss alert" type="button" data-close>
          <span class="text-3xl" aria-hidden="true">`,position:{start:1032,end:1139}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"closable_text",match:["closable_text"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:1139,end:1171},output:[{type:"output",position:{start:1171,end:1190},stack:[{type:"Twig.expression.type.variable",value:"closable_text",match:["closable_text"],position:{start:1171,end:1190}}]}]},position:{open:{start:1139,end:1171},close:{start:1190,end:1200}}},{type:"logic",token:{type:"Twig.logic.type.else",match:["else"],position:{start:1190,end:1200},output:[{type:"raw",value:"&times;",position:{start:1200,end:1207}}]},position:{open:{start:1190,end:1200},close:{start:1207,end:1218}}},{type:"raw",value:`</span>
        </button>
      </div>
    `,position:{start:1218,end:1261}}]},position:{open:{start:889,end:916},close:{start:1261,end:1272}}},{type:"raw",value:`  </div>
</div>
`,position:{start:1273,end:1273}}],precompiled:!0});t.twig({id:"@layout/wrapper/footer.twig",data:[{type:"raw",value:`<footer class="l-footer bg-primary-200">
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
`,position:{start:3880,end:3880}}],precompiled:!0});t.twig({id:"@layout/wrapper/header.twig",data:[{type:"raw",value:`<script>
    function focusFirstFocusable() {
        const mainElement = document.getElementById('main');
        const focusableElements = mainElement.querySelectorAll('a, button, input, [tabindex]:not([tabindex="-1"])');

        if (focusableElements.length > 0) {
            focusableElements[0].focus();
        }
    }
<\/script>
<a href="#main" @keydown.enter.prevent="focusFirstFocusable" class="opacity-0 focus:opacity-100 fixed left-0 top-0 bg-primary text-white p-1" >Skip to main</a>
<header class="l-header bg-primary py-3 lg:py-0" id="header" x-data="`,position:{start:0,end:566}},{type:"output",position:{start:566,end:573},stack:[{type:"Twig.expression.type.string",value:"{",position:{start:566,end:573}}]},{type:"raw",value:" mainMenu: false, dropdownOpen: {sm: null, lg: null} ",position:{start:573,end:626}},{type:"output",position:{start:626,end:633},stack:[{type:"Twig.expression.type.string",value:"}",position:{start:626,end:633}}]},{type:"raw",value:`">
  <div class="container relative">
    <div class="grid grid-cols-12 gap-6 items-center align-middle justify-between">
      <div class="col-span-12 lg:block hidden">
        `,position:{start:633,end:811}},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@components/navigation/utility-menu/utility-menu.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"menu"},{type:"Twig.expression.type.variable",value:"utility_menu",match:["utility_menu"]},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}],position:{start:811,end:926}},position:{start:811,end:926}},{type:"raw",value:`      </div>
      <div class="col-span-10 lg:col-span-3">
        `,position:{start:927,end:994}},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@components/logo/logo.twig"}],withStack:[{type:"Twig.expression.type.variable",value:"logo",match:["logo"]}],position:{start:994,end:1046}},position:{start:994,end:1046}},{type:"raw",value:`      </div>
      <div class="col-span-12 lg:col-span-9 lg:block hidden">
        <div class="flex justify-end">
          `,position:{start:1047,end:1171}},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@components/navigation/utility-menu/utility-menu.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"utility_menu"},{type:"Twig.expression.type.variable",value:"cta_menu",match:["cta_menu"]},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}],position:{start:1171,end:1294}},position:{start:1171,end:1294}},{type:"raw",value:`
          <div class="search-form inline-block" x-data="{ open: false }">
            <button x-on:click="open = ! open" class="no-underline text-primary-700 inline-block relative z-30">
              <span class="icon icon-magnifying-glass text-lg ml-2 rounded-full p-2 shadow mr-1" :class="{ 'icon-x bg-secondary-600 text-primary-500': open, 'icon-magnifying-glass bg-white' : !open }"></span>
              <span class="text-white text-2xl font-bold">Search</span>

            </button>
            <div class="search-form-wrapper bg-neutrals-50 absolute z-30 bottom-[-186px] right-0 rounded-b shadow lg:px-10 lg:pt-10 lg:pb-9" x-show="open">
              `,position:{start:1295,end:1957}},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@components/forms/simple-form/simple-form.twig"}],position:{start:1957,end:2019}},position:{start:1957,end:2019}},{type:"raw",value:`            </div>
          </div>

          <div class="header-menu-popup inline-block relative" x-data="{ open: false }">
            <button x-on:click="open = ! open" class="no-underline text-primary-700 inline-block relative z-30">
              <span class="icon icon-list text-lg ml-2 rounded-full p-2 shadow mr-1"
                    :class="{ 'icon-x bg-secondary-600 text-primary-500': open, 'icon-search bg-white' : !open }"
              ></span>
              <span class="text-white text-2xl font-bold">Menu</span>
            </button>
            <div class="header-menu-popup-wrapper bg-white w-[315px] shadow absolute absolute z-30 top-[81px] right-0 lg:px-12 lg:pt-9 lg:pb-7 z-30" x-show="open">
              <span class="h5 block mb-4">Example Label - Optional</span>
              <ul class="menu flex flex-col gap-x-3 gap-y-3 list-none">
                `,position:{start:2020,end:2899}},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"item",expression:[{type:"Twig.expression.type.variable",value:"header_dropdown",match:["header_dropdown"]}],position:{start:2899,end:2932},output:[{type:"raw",value:`                  <li>
                    <a class="font-bold no-underline hover:underline" href="`,position:{start:2933,end:3032}},{type:"output",position:{start:3032,end:3046},stack:[{type:"Twig.expression.type.variable",value:"item",match:["item"],position:{start:3032,end:3046}},{type:"Twig.expression.type.key.period",position:{start:3032,end:3046},key:"url"}]},{type:"raw",value:'">',position:{start:3046,end:3048}},{type:"output",position:{start:3048,end:3063},stack:[{type:"Twig.expression.type.variable",value:"item",match:["item"],position:{start:3048,end:3063}},{type:"Twig.expression.type.key.period",position:{start:3048,end:3063},key:"text"}]},{type:"raw",value:`</a>
                  </li>
                `,position:{start:3063,end:3108}}]},position:{open:{start:2899,end:2932},close:{start:3108,end:3120}}},{type:"raw",value:`              </ul>
            </div>
          </div>


          `,position:{start:3121,end:3189}},{type:"raw",value:`
        </div>
      </div>
      <div class="col-span-2 lg:hidden flex justify-end items-center">
        <div class="search-form inline-block" x-data="{ open: false }">
          <button x-on:click="open = ! open" class="no-underline text-primary-700 inline-block relative z-30">
            <span class="icon icon-magnifying-glass text-lg ml-2 rounded-full p-2 shadow mr-1" :class="{ 'icon-x bg-secondary-600 text-primary-500': open, 'icon-magnifying-glass bg-white' : !open }"></span>
            <span class="text-white text-2xl font-bold sr-only">Search</span>

          </button>
          <div class="search-form-wrapper bg-neutrals-50 absolute z-50 bottom-[-145px] right-0 rounded-b shadow pt-5 pb-5 px-5 lg:px-10 lg:pt-10 lg:pb-9" x-show="open">
            `,position:{start:3603,end:4373}},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@components/forms/simple-form/simple-form.twig"}],position:{start:4373,end:4435}},position:{start:4373,end:4435}},{type:"raw",value:`          </div>
        </div>
        `,position:{start:4436,end:4476}},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@components/utils/hamburger/hamburger.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"toggle"},{type:"Twig.expression.type.string",value:"mainMenu"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}],position:{start:4476,end:4581}},position:{start:4476,end:4581}},{type:"raw",value:`      </div>
    </div>

  </div>
  `,position:{start:4582,end:4618}},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@components/navigation/menu/menu.twig"}],withStack:[{type:"Twig.expression.type.variable",value:"menu",match:["menu"]}],position:{start:4618,end:4681}},position:{start:4618,end:4681}},{type:"raw",value:`</header>
`,position:{start:4682,end:4682}}],precompiled:!0});
