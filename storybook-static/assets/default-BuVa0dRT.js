import{T as e,t}from"./twig-BXd3Gfe2.js";import{a as i}from"./twig-foVUGi9y.js";import"./header-DKktY56F.js";import"./footer-BrzSdeet.js";import"./alert-p_KJy7O1.js";i(e);e.cache(!1);t.twig({id:"@components/informational/alert/alert.twig",data:[{type:"raw",value:'<div class="alert-bar bg-secondary py-4 ',position:{start:0,end:40}},{type:"output",position:{start:40,end:61},stack:[{type:"Twig.expression.type.variable",value:"class",match:["class"],position:{start:40,end:61}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:40,end:61}}]},{type:"raw",value:'" ',position:{start:61,end:63}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"closable",match:["closable"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:63,end:90},output:[{type:"raw",value:"data-closable",position:{start:90,end:103}}]},position:{open:{start:63,end:90},close:{start:103,end:114}}},{type:"raw",value:`>
  <div class="container flex gap-3 justify-center">
    `,position:{start:114,end:172}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"label",match:["label"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:172,end:196},output:[{type:"raw",value:'      <span class="alert-bar_label font-bold">',position:{start:197,end:243}},{type:"output",position:{start:243,end:254},stack:[{type:"Twig.expression.type.variable",value:"label",match:["label"],position:{start:243,end:254}}]},{type:"raw",value:`:</span>
    `,position:{start:254,end:267}}]},position:{open:{start:172,end:196},close:{start:267,end:278}}},{type:"raw",value:"    ",position:{start:279,end:283}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:283,end:306},output:[{type:"raw",value:'      <a href="',position:{start:307,end:322}},{type:"output",position:{start:322,end:336},stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:322,end:336}},{type:"Twig.expression.type.key.period",position:{start:322,end:336},key:"url"}]},{type:"raw",value:'" ',position:{start:336,end:338}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"target"}],position:{start:338,end:358},output:[{type:"raw",value:'target="',position:{start:358,end:366}},{type:"output",position:{start:366,end:383},stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:366,end:383}},{type:"Twig.expression.type.key.period",position:{start:366,end:383},key:"target"}]},{type:"raw",value:'"',position:{start:383,end:384}}]},position:{open:{start:338,end:358},close:{start:384,end:395}}},{type:"raw",value:">",position:{start:395,end:396}},{type:"output",position:{start:396,end:406},stack:[{type:"Twig.expression.type.variable",value:"text",match:["text"],position:{start:396,end:406}}]},{type:"raw",value:`</a>
    `,position:{start:406,end:415}}]},position:{open:{start:283,end:306},close:{start:415,end:425}}},{type:"logic",token:{type:"Twig.logic.type.else",match:["else"],position:{start:415,end:425},output:[{type:"raw",value:"      <span>",position:{start:426,end:438}},{type:"output",position:{start:438,end:448},stack:[{type:"Twig.expression.type.variable",value:"text",match:["text"],position:{start:438,end:448}}]},{type:"raw",value:`</span>      
    `,position:{start:448,end:466}}]},position:{open:{start:415,end:425},close:{start:466,end:477}}},{type:"raw",value:"    ",position:{start:478,end:482}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"closable",match:["closable"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:482,end:509},output:[{type:"raw",value:'      <button class="',position:{start:510,end:531}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"closable_text",match:["closable_text"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.test",filter:"empty"}],position:{start:531,end:572},output:[{type:"raw",value:"close-button",position:{start:572,end:584}}]},position:{open:{start:531,end:572},close:{start:584,end:594}}},{type:"logic",token:{type:"Twig.logic.type.else",match:["else"],position:{start:584,end:594},output:[{type:"raw",value:"button",position:{start:594,end:600}}]},position:{open:{start:584,end:594},close:{start:600,end:611}}},{type:"raw",value:`" aria-label="Dismiss alert" type="button" data-close>
        <span aria-hidden="true">`,position:{start:611,end:699}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"closable_text",match:["closable_text"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:699,end:731},output:[{type:"output",position:{start:731,end:750},stack:[{type:"Twig.expression.type.variable",value:"closable_text",match:["closable_text"],position:{start:731,end:750}}]}]},position:{open:{start:699,end:731},close:{start:750,end:760}}},{type:"logic",token:{type:"Twig.logic.type.else",match:["else"],position:{start:750,end:760},output:[{type:"raw",value:"&times;",position:{start:760,end:767}}]},position:{open:{start:750,end:760},close:{start:767,end:778}}},{type:"raw",value:`</span>
      </button>
    `,position:{start:778,end:806}}]},position:{open:{start:482,end:509},close:{start:806,end:817}}},{type:"raw",value:`  </div>
</div>
`,position:{start:818,end:818}}],precompiled:!0});t.twig({id:"@layout/wrapper/footer.twig",data:[{type:"raw",value:`<footer class="l-footer bg-primary-200">
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
<header class="l-header bg-primary lg:pt-0" id="header" x-data="`,position:{start:0,end:561}},{type:"output",position:{start:561,end:568},stack:[{type:"Twig.expression.type.string",value:"{",position:{start:561,end:568}}]},{type:"raw",value:" mainMenu: false, dropdownOpen: {sm: null, lg: null} ",position:{start:568,end:621}},{type:"output",position:{start:621,end:628},stack:[{type:"Twig.expression.type.string",value:"}",position:{start:621,end:628}}]},{type:"raw",value:`">
  <div class="container relative">
    <div class="grid grid-cols-12 gap-6 items-center align-middle justify-between">
      <div class="col-span-12 lg:block hidden">
        `,position:{start:628,end:806}},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@components/navigation/utility-menu/utility-menu.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"menu"},{type:"Twig.expression.type.variable",value:"utility_menu",match:["utility_menu"]},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}],position:{start:806,end:921}},position:{start:806,end:921}},{type:"raw",value:`      </div>
      <div class="col-span-10 lg:col-span-3">
        `,position:{start:922,end:989}},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@components/logo/logo.twig"}],withStack:[{type:"Twig.expression.type.variable",value:"logo",match:["logo"]}],position:{start:989,end:1041}},position:{start:989,end:1041}},{type:"raw",value:`      </div>
      <div class="col-span-12 lg:col-span-9 lg:block hidden">
        <div class="flex justify-end">
          `,position:{start:1042,end:1166}},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@components/navigation/utility-menu/utility-menu.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"utility_menu"},{type:"Twig.expression.type.variable",value:"cta_menu",match:["cta_menu"]},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}],position:{start:1166,end:1289}},position:{start:1166,end:1289}},{type:"raw",value:`
          <div class="search-form inline-block" x-data="{ open: false }">
            <button x-on:click="open = ! open" class="no-underline text-primary-700 inline-block relative z-30">
              <span class="icon icon-magnifying-glass text-lg ml-2 rounded-full p-2 shadow mr-1" :class="{ 'icon-x bg-secondary-600 text-primary-500': open, 'icon-magnifying-glass bg-white' : !open }"></span>
              <span class="text-white text-2xl font-bold">Search</span>

            </button>
            <div class="search-form-wrapper bg-neutrals-50 absolute z-30 bottom-[-186px] right-0 rounded-b shadow lg:px-10 lg:pt-10 lg:pb-9" x-show="open">
              `,position:{start:1290,end:1952}},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@components/forms/simple-form/simple-form.twig"}],position:{start:1952,end:2014}},position:{start:1952,end:2014}},{type:"raw",value:`            </div>
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
                `,position:{start:2015,end:2894}},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"item",expression:[{type:"Twig.expression.type.variable",value:"header_dropdown",match:["header_dropdown"]}],position:{start:2894,end:2927},output:[{type:"raw",value:`                  <li>
                    <a class="font-bold no-underline hover:underline" href="`,position:{start:2928,end:3027}},{type:"output",position:{start:3027,end:3041},stack:[{type:"Twig.expression.type.variable",value:"item",match:["item"],position:{start:3027,end:3041}},{type:"Twig.expression.type.key.period",position:{start:3027,end:3041},key:"url"}]},{type:"raw",value:'">',position:{start:3041,end:3043}},{type:"output",position:{start:3043,end:3058},stack:[{type:"Twig.expression.type.variable",value:"item",match:["item"],position:{start:3043,end:3058}},{type:"Twig.expression.type.key.period",position:{start:3043,end:3058},key:"text"}]},{type:"raw",value:`</a>
                  </li>
                `,position:{start:3058,end:3103}}]},position:{open:{start:2894,end:2927},close:{start:3103,end:3115}}},{type:"raw",value:`              </ul>
            </div>
          </div>


          `,position:{start:3116,end:3184}},{type:"raw",value:`
        </div>
      </div>
      <div class="col-span-2 lg:hidden flex justify-end items-center">
        `,position:{start:3598,end:3706}},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@components/utils/hamburger/hamburger.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"toggle"},{type:"Twig.expression.type.string",value:"mainMenu"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}],position:{start:3706,end:3811}},position:{start:3706,end:3811}},{type:"raw",value:`      </div>
    </div>

  </div>
  `,position:{start:3812,end:3848}},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@components/navigation/menu/menu.twig"}],withStack:[{type:"Twig.expression.type.variable",value:"menu",match:["menu"]}],position:{start:3848,end:3911}},position:{start:3848,end:3911}},{type:"raw",value:`</header>
`,position:{start:3912,end:3912}}],precompiled:!0});
