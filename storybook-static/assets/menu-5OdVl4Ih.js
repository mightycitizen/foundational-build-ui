import{T as i,t as n}from"./iframe-krW4WiQS.js";import{a as s,D as a}from"./twig-OXX08FiC.js";import"./icon-7aXboSWf.js";s(i);i.cache(!1);s(i);i.cache(!1);n.twig({id:"@atoms/icon/icon.twig",data:[{type:"logic",token:{type:"Twig.logic.type.set",key:"modifiers",expression:[{type:"Twig.expression.type.variable",value:"modifiers",match:["modifiers"]},{type:"Twig.expression.type.string",value:""},{type:"Twig.expression.type.operator.binary",value:"??",precidence:15,associativity:"rightToLeft",operator:"??"}],position:{start:0,end:37}},position:{start:0,end:37}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"icon",match:["icon"]},{type:"Twig.expression.type.key.period",key:"background"}],position:{start:38,end:62},output:[{type:"raw",value:"  ",position:{start:63,end:65}},{type:"logic",token:{type:"Twig.logic.type.set",key:"background_classes",expression:[{type:"Twig.expression.type.subexpression.end",value:")",match:[")"],expression:!0,params:[{type:"Twig.expression.type.variable",value:"icon",match:["icon"]},{type:"Twig.expression.type.key.period",key:"background"},{type:"Twig.expression.type.string",value:"light"},{type:"Twig.expression.type.operator.binary",value:"==",precidence:9,associativity:"leftToRight",operator:"=="}]},{type:"Twig.expression.type.string",value:"text-primary bg-primary-50"},{type:"Twig.expression.type.string",value:"text-white bg-primary"},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"}],position:{start:65,end:181}},position:{start:65,end:181}}]},position:{open:{start:38,end:62},close:{start:182,end:193}}},{type:"raw",value:'<span class="text-2xl leading-0',position:{start:194,end:225}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"icon",match:["icon"]},{type:"Twig.expression.type.key.period",key:"background"}],position:{start:225,end:249},output:[{type:"raw",value:" inline-flex items-center justify-center rounded-full py-4 px-4 ",position:{start:249,end:313}},{type:"output",position:{start:313,end:337},stack:[{type:"Twig.expression.type.variable",value:"background_classes",match:["background_classes"],position:{start:313,end:337}}]}]},position:{open:{start:225,end:249},close:{start:337,end:348}}},{type:"raw",value:" ",position:{start:348,end:349}},{type:"output",position:{start:349,end:364},stack:[{type:"Twig.expression.type.variable",value:"modifiers",match:["modifiers"],position:{start:349,end:364}}]},{type:"raw",value:`">
  <span class="`,position:{start:364,end:382}},{type:"output",position:{start:382,end:397},stack:[{type:"Twig.expression.type.variable",value:"icon",match:["icon"],position:{start:382,end:397}},{type:"Twig.expression.type.key.period",position:{start:382,end:397},key:"name"}]},{type:"raw",value:`"></span>
</span>
`,position:{start:397,end:397}}],precompiled:!0});n.twig({id:"@atoms/forms/simple-form/simple-form.twig",data:[{type:"raw",value:'<form action="',position:{start:0,end:14}},{type:"output",position:{start:14,end:47},stack:[{type:"Twig.expression.type.variable",value:"action",match:["action"],position:{start:14,end:47}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:14,end:47},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:14,end:47}},{type:"Twig.expression.type.string",value:"/search",position:{start:14,end:47}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:14,end:47},expression:!1}]}]},{type:"raw",value:`">
  <div class="relative">
    <label for="`,position:{start:47,end:91}},{type:"output",position:{start:91,end:127},stack:[{type:"Twig.expression.type.variable",value:"input_id",match:["input_id"],position:{start:91,end:127}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:91,end:127},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:91,end:127}},{type:"Twig.expression.type.string",value:"keywords",position:{start:91,end:127}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:91,end:127},expression:!1}]}]},{type:"raw",value:`" class="text-2xl mb-5">Site Search</label>
    <input class="w-full pr-6 shadow-sm rounded-sm" placeholder="Enter your search term" type="search" id="`,position:{start:127,end:278}},{type:"output",position:{start:278,end:314},stack:[{type:"Twig.expression.type.variable",value:"input_id",match:["input_id"],position:{start:278,end:314}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:278,end:314},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:278,end:314}},{type:"Twig.expression.type.string",value:"keywords",position:{start:278,end:314}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:278,end:314},expression:!1}]}]},{type:"raw",value:'" name="',position:{start:314,end:322}},{type:"output",position:{start:322,end:347},stack:[{type:"Twig.expression.type.variable",value:"name",match:["name"],position:{start:322,end:347}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:322,end:347},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:322,end:347}},{type:"Twig.expression.type.string",value:"q",position:{start:322,end:347}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:322,end:347},expression:!1}]}]},{type:"raw",value:`">
    <div class="absolute right-0 bottom-0 flex items-center pl-3">
      <button class="button m-0" type="submit"  value="Submit">
        <span class="">`,position:{start:347,end:504}},{type:"output",position:{start:504,end:541},stack:[{type:"Twig.expression.type.variable",value:"button_text",match:["button_text"],position:{start:504,end:541}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:504,end:541},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:504,end:541}},{type:"Twig.expression.type.string",value:"Search",position:{start:504,end:541}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:504,end:541},expression:!1}]}]},{type:"raw",value:`</span>
      </button>
    </div>
  </div>
</form>
`,position:{start:541,end:541}}],precompiled:!0});const p=e=>e,y=(e={})=>{const o=n.twig({id:"/Users/mc_davidvasquez/Mighty_Citizen/fb-ui/src/stories/02-molecules/navigation/menu/menu.twig",data:[{type:"raw",value:`
<div id="main-menu" x-data="{
	    breakpoint: 1024,
	    dropdownOpen: { sm: null, lg: null },
      align: 'left',
      timeout: null,
	    toggleDropdown(index) {
	      if (window.innerWidth <= this.breakpoint) {
	        this.dropdownOpen.sm = this.dropdownOpen.sm === index ? null : index;
	      }else{
          this.dropdownOpen.lg = this.dropdownOpen.lg === index ? null : index;
          setTimeout(() => {
            this.checkDropdownPosition();
          }, 10);
        }
	    },
      checkDropdownPosition() {
        if (window.innerWidth > this.breakpoint) {
          const dropdown = document.querySelector('.dropdown:not(.hidden)');

          if (!dropdown) {
            console.warn('Dropdown reference not found');
            return;
          }

          const dropdownWidth = dropdown.offsetWidth; // Get the width of the dropdown
          const dropdownPosition = dropdown.getBoundingClientRect().left; // Get the left position of the dropdown
          const windowWidth = window.innerWidth; // Get the full width of the viewport
          const windowRight = windowWidth - dropdownPosition - dropdownWidth; // Calculate space on the right side of the dropdown

          // Determine alignment based on available space
          if (windowRight < 0) {
            this.align = 'right'; // Not enough space on the right
          } else {
            this.align = 'left'; // Enough space, align left
          }


        }
      },
	    handleMouseEnter(index) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.align = 'left';
          if (window.innerWidth > this.breakpoint) this.dropdownOpen['lg'] = index;
          setTimeout(() => {
            this.checkDropdownPosition();
          }, 10);
        }, 100);


	    },
	    handleMouseLeave() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
	        if (window.innerWidth > this.breakpoint) this.dropdownOpen['lg'] = null;
        }, 100);
	    },
      handleDirection(direction){
        if (direction === 'left') {
          if (this.dropdownOpen.lg > 0) {
            this.dropdownOpen.lg--;
          }else{
            this.dropdownOpen.lg = $refs.topbar.children.length - 1;
          }
        } else {
          if (this.dropdownOpen.lg < $refs.topbar.children.length - 1) {
            this.dropdownOpen.lg++;
          }else{
            this.dropdownOpen.lg = 0;
          }
        }
        $refs.topbar.children[this.dropdownOpen.lg].querySelector('a').focus();
      }
	  }" class="absolute z-20 bg-primary-900 w-full py-4 lg:relative lg:block shadow-md lg:shadow-none lg:py-0" :class="(mainMenu ? '' : 'hidden')">
	<div class="container">
		<ul role="menubar"
      x-ref="topbar"
      @keydown.left="handleDirection('left')"
      @keydown.right="handleDirection('right')"
      class="flex flex-col justify-between gap-x-3 list-none lg:-mx-6 lg:flex-row" >
			`,position:{start:0,end:2953}},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"link",expression:[{type:"Twig.expression.type.variable",value:"menu",match:["menu"]}],position:{start:2953,end:2975},output:[{type:"raw",value:`				<li
          @focusin="if (window.innerWidth > this.breakpoint) dropdownOpen.lg = `,position:{start:2976,end:3063}},{type:"output",position:{start:3063,end:3080},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:3063,end:3080}},{type:"Twig.expression.type.key.period",position:{start:3063,end:3080},key:"index0"}]},{type:"raw",value:`"
          role="presentation" class="relative lg:border-0 `,position:{start:3080,end:3140}},{type:"output",position:{start:3140,end:3198},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:3140,end:3198}},{type:"Twig.expression.type.key.period",position:{start:3140,end:3198},key:"last"},{type:"Twig.expression.type.bool",value:!1,position:{start:3140,end:3198}},{type:"Twig.expression.type.operator.binary",value:"==",position:{start:3140,end:3198},precidence:9,associativity:"leftToRight",operator:"=="},{type:"Twig.expression.type.string",value:"border-b border-gray-200",position:{start:3140,end:3198}},{type:"Twig.expression.type.string",value:"",position:{start:3140,end:3198}},{type:"Twig.expression.type.operator.binary",value:"?",position:{start:3140,end:3198},precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"raw",value:`"
          `,position:{start:3198,end:3210}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"children"}],position:{start:3210,end:3232},output:[{type:"raw",value:'            @mouseenter="handleMouseEnter(',position:{start:3233,end:3275}},{type:"output",position:{start:3275,end:3292},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:3275,end:3292}},{type:"Twig.expression.type.key.period",position:{start:3275,end:3292},key:"index0"}]},{type:"raw",value:`)"
            @mouseleave="handleMouseLeave()"
          `,position:{start:3292,end:3350}}]},position:{open:{start:3210,end:3232},close:{start:3350,end:3361}}},{type:"raw",value:`          >

					`,position:{start:3362,end:3380}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"children"},{type:"Twig.expression.type.filter",value:"length",match:["| length","length"]}],position:{start:3380,end:3411},output:[{type:"raw",value:`						<button
              @click="toggleDropdown(`,position:{start:3412,end:3463}},{type:"output",position:{start:3463,end:3480},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:3463,end:3480}},{type:"Twig.expression.type.key.period",position:{start:3463,end:3480},key:"index0"}]},{type:"raw",value:`)"
              class="py-3 text-white no-underline w-full font-bold flex items-center gap-2 justify-between leading-5 lg:hidden " `,position:{start:3480,end:3612}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"new_window"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:3612,end:3646},output:[{type:"raw",value:' target="_blank" rel="noopener" ',position:{start:3646,end:3678}}]},position:{open:{start:3612,end:3646},close:{start:3678,end:3689}}},{type:"raw",value:` role="menuitem">
							`,position:{start:3689,end:3714}},{type:"output",position:{start:3714,end:3790},stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:3714,end:3790}},{type:"Twig.expression.type.key.period",position:{start:3714,end:3790},key:"parent_text"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:3714,end:3790}},{type:"Twig.expression.type.test",position:{start:3714,end:3790},filter:"empty",modifier:"not"},{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:3714,end:3790}},{type:"Twig.expression.type.key.period",position:{start:3714,end:3790},key:"parent_text"},{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:3714,end:3790}},{type:"Twig.expression.type.key.period",position:{start:3714,end:3790},key:"text"},{type:"Twig.expression.type.operator.binary",value:"?",position:{start:3714,end:3790},precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"raw",value:`
							<span :class="(dropdownOpen.sm === `,position:{start:3790,end:3833}},{type:"output",position:{start:3833,end:3850},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:3833,end:3850}},{type:"Twig.expression.type.key.period",position:{start:3833,end:3850},key:"index0"}]},{type:"raw",value:" ? 'rotate-180' : '') + ' ' + (dropdownOpen.lg === ",position:{start:3850,end:3901}},{type:"output",position:{start:3901,end:3918},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:3901,end:3918}},{type:"Twig.expression.type.key.period",position:{start:3901,end:3918},key:"index0"}]},{type:"raw",value:` ? 'lg:text-white' : 'lg:text-white')" class="icon-caret-down text-xs text-primary"></span>
						</button>
					`,position:{start:3918,end:4031}}]},position:{open:{start:3380,end:3411},close:{start:4031,end:4042}}},{type:"raw",value:`
					<a @keydown.enter="toggleDropdown(`,position:{start:4043,end:4083}},{type:"output",position:{start:4083,end:4100},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:4083,end:4100}},{type:"Twig.expression.type.key.period",position:{start:4083,end:4100},key:"index0"}]},{type:"raw",value:')"  role="menuitem" :class="dropdownOpen.lg === ',position:{start:4100,end:4148}},{type:"output",position:{start:4148,end:4165},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:4148,end:4165}},{type:"Twig.expression.type.key.period",position:{start:4148,end:4165},key:"index0"}]},{type:"raw",value:` ? 'bg-primary text-white' : ''" class="`,position:{start:4165,end:4205}},{type:"output",position:{start:4205,end:4266},stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:4205,end:4266}},{type:"Twig.expression.type.key.period",position:{start:4205,end:4266},key:"children"},{type:"Twig.expression.type.string",value:"hidden lg:inline-flex",position:{start:4205,end:4266}},{type:"Twig.expression.type.string",value:"inline-flex",position:{start:4205,end:4266}},{type:"Twig.expression.type.operator.binary",value:"?",position:{start:4205,end:4266},precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"raw",value:" text-white font-bold px-6 py-3 gap-2 leading-5 items-center lg:inline-flex no-underline ",position:{start:4266,end:4355}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"url"},{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"children"},{type:"Twig.expression.type.test",filter:"empty"},{type:"Twig.expression.type.operator.binary",value:"and",precidence:13,associativity:"leftToRight",operator:"and"}],position:{start:4355,end:4399},output:[{type:"raw",value:"hover:underline",position:{start:4399,end:4414}}]},position:{open:{start:4355,end:4399},close:{start:4414,end:4425}}},{type:"raw",value:'" ',position:{start:4425,end:4427}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"url"}],position:{start:4427,end:4444},output:[{type:"raw",value:' href="',position:{start:4444,end:4451}},{type:"output",position:{start:4451,end:4465},stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:4451,end:4465}},{type:"Twig.expression.type.key.period",position:{start:4451,end:4465},key:"url"}]},{type:"raw",value:'"',position:{start:4465,end:4466}}]},position:{open:{start:4427,end:4444},close:{start:4466,end:4477}}},{type:"raw",value:`>
            `,position:{start:4477,end:4491}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"icon"}],position:{start:4491,end:4509},output:[{type:"raw",value:"              ",position:{start:4510,end:4524}},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@atoms/icon/icon.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"icon"},{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"icon"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}],position:{start:4524,end:4586}},position:{start:4524,end:4586}},{type:"raw",value:"              ",position:{start:4587,end:4601}},{type:"output",position:{start:4601,end:4616},stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:4601,end:4616}},{type:"Twig.expression.type.key.period",position:{start:4601,end:4616},key:"text"}]},{type:"raw",value:`
            `,position:{start:4616,end:4629}}]},position:{open:{start:4491,end:4509},close:{start:4629,end:4639}}},{type:"logic",token:{type:"Twig.logic.type.else",match:["else"],position:{start:4629,end:4639},output:[{type:"raw",value:'              <span class="my-px">',position:{start:4640,end:4674}},{type:"output",position:{start:4674,end:4689},stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:4674,end:4689}},{type:"Twig.expression.type.key.period",position:{start:4674,end:4689},key:"text"}]},{type:"raw",value:`</span>
            `,position:{start:4689,end:4709}}]},position:{open:{start:4629,end:4639},close:{start:4709,end:4720}}},{type:"raw",value:"            ",position:{start:4721,end:4733}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"children"}],position:{start:4733,end:4755},output:[{type:"raw",value:'						  <span :class="(dropdownOpen.sm === ',position:{start:4756,end:4799}},{type:"output",position:{start:4799,end:4816},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:4799,end:4816}},{type:"Twig.expression.type.key.period",position:{start:4799,end:4816},key:"index0"}]},{type:"raw",value:" ? 'rotate-180' : '') + ' ' + (dropdownOpen.lg === ",position:{start:4816,end:4867}},{type:"output",position:{start:4867,end:4884},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:4867,end:4884}},{type:"Twig.expression.type.key.period",position:{start:4867,end:4884},key:"index0"}]},{type:"raw",value:` ? 'lg:text-white' : 'lg:text-white')" class="icon-caret-down text-xs text-white"></span>
            `,position:{start:4884,end:4986}}]},position:{open:{start:4733,end:4755},close:{start:4986,end:4997}}},{type:"raw",value:`					</a>

					`,position:{start:4998,end:5014}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"children"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:5014,end:5046},output:[{type:"raw",value:'						<ul role="presentation" class="list-none lg:absolute lg:bg-white lg:py-3 w-full lg:w-80 lg:shadow-md dropdown" :class="(dropdownOpen.sm === ',position:{start:5047,end:5193}},{type:"output",position:{start:5193,end:5210},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:5193,end:5210}},{type:"Twig.expression.type.key.period",position:{start:5193,end:5210},key:"index0"}]},{type:"raw",value:" || dropdownOpen.lg === ",position:{start:5210,end:5234}},{type:"output",position:{start:5234,end:5251},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:5234,end:5251}},{type:"Twig.expression.type.key.period",position:{start:5234,end:5251},key:"index0"}]},{type:"raw",value:` ? '' : 'hidden') + ' ' + (align + '-0')" x-data=" {
								    breakpoint: 1024,
								    childOpen: { sm: null, lg: null },
                    childAlign: 'left',
								    toggleChildDropdown(index) {
								      if (window.innerWidth <= this.breakpoint) {
                        this.childOpen.sm = this.childOpen.sm === index ? null : index;
                      }else{
                        this.childOpen.lg = this.childOpen.lg === index ? null : index;
                        setTimeout(() => {
                          this.checkDropdownPosition();
                        }, 25);
                      }

								    },
                    checkDropdownPosition() {
                      if (window.innerWidth > this.breakpoint) {
                        const dropdown = $el.querySelector('.dropdown:not(.hidden)');

                        if (!dropdown) {
                          console.warn('Dropdown reference not found');
                          return;
                        }

                        const dropdownWidth = dropdown.offsetWidth; // Get the width of the dropdown
                        const dropdownPosition = dropdown.getBoundingClientRect().left; // Get the left position of the dropdown
                        const windowWidth = window.innerWidth; // Get the full width of the viewport
                        const windowRight = windowWidth - dropdownPosition - dropdownWidth; // Calculate space on the right side of the dropdown

                        // Determine alignment based on available space
                        if (windowRight < 0) {
                          this.childAlign = 'right'; // Not enough space on the right
                        } else {
                          this.childAlign = 'left'; // Enough space, align left
                        }
                      }
                    },
								    handleChildMouseEnter(index) {
                      this.timeout = setTimeout(() => {
                        this.childAlign = 'left';
                        if (window.innerWidth > this.breakpoint) this.childOpen.lg = index;
                        setTimeout(() => {
                          this.checkDropdownPosition();
                        }, 25);
                      }, 100);
								    },
								    handleChildMouseLeave() {
                      this.timeout = setTimeout(() => {
								        if (window.innerWidth > this.breakpoint) this.childOpen.lg = null;
                      }, 100);
								    }
								  }">
`,position:{start:5251,end:7790}},{type:"raw",value:`
							`,position:{start:8053,end:8061}},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"child",expression:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"children"}],position:{start:8061,end:8093},output:[{type:"raw",value:`								<li
                  @focusin="if (window.innerWidth > this.breakpoint) childOpen.lg = `,position:{start:8094,end:8190}},{type:"output",position:{start:8190,end:8207},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:8190,end:8207}},{type:"Twig.expression.type.key.period",position:{start:8190,end:8207},key:"index0"}]},{type:"raw",value:`"
                  class="py-1 lg:px-6"
                  `,position:{start:8207,end:8266}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"]},{type:"Twig.expression.type.key.period",key:"children"}],position:{start:8266,end:8289},output:[{type:"raw",value:'                    :class="childOpen.lg === ',position:{start:8290,end:8335}},{type:"output",position:{start:8335,end:8352},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:8335,end:8352}},{type:"Twig.expression.type.key.period",position:{start:8335,end:8352},key:"index0"}]},{type:"raw",value:` ? 'lg:bg-primary-100' : ''"
                    @mouseenter="handleChildMouseEnter(`,position:{start:8352,end:8436}},{type:"output",position:{start:8436,end:8453},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:8436,end:8453}},{type:"Twig.expression.type.key.period",position:{start:8436,end:8453},key:"index0"}]},{type:"raw",value:`)"
                    @mouseleave="handleChildMouseLeave()"
                  `,position:{start:8453,end:8532}}]},position:{open:{start:8266,end:8289},close:{start:8532,end:8543}}},{type:"raw",value:`>
									`,position:{start:8543,end:8554}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"]},{type:"Twig.expression.type.key.period",key:"children"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:8554,end:8587},output:[{type:"raw",value:'										<button @click="toggleChildDropdown(',position:{start:8588,end:8634}},{type:"output",position:{start:8634,end:8651},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:8634,end:8651}},{type:"Twig.expression.type.key.period",position:{start:8634,end:8651},key:"index0"}]},{type:"raw",value:')" role="menuitem" href="',position:{start:8651,end:8676}},{type:"output",position:{start:8676,end:8691},stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"],position:{start:8676,end:8691}},{type:"Twig.expression.type.key.period",position:{start:8676,end:8691},key:"url"}]},{type:"raw",value:`" class="flex items-center gap-2 justify-between w-full lg:hidden text-primary">
                      <span class="underline hover:no-underline flex w-full">
											  `,position:{start:8691,end:8863}},{type:"output",position:{start:8863,end:8879},stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"],position:{start:8863,end:8879}},{type:"Twig.expression.type.key.period",position:{start:8863,end:8879},key:"text"}]},{type:"raw",value:`
                      </span>

                      <span :class="childOpen.sm === `,position:{start:8879,end:8964}},{type:"output",position:{start:8964,end:8981},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:8964,end:8981}},{type:"Twig.expression.type.key.period",position:{start:8964,end:8981},key:"index0"}]},{type:"raw",value:` ? 'rotate-180' : ''" class="icon-caret-down lg:hidden text-primary text-xs no-underline"></span>
                      <span class="icon-caret-right hidden lg:block text-primary text-xs no-underline"></span>

										</button>
									`,position:{start:8981,end:9220}}]},position:{open:{start:8554,end:8587},close:{start:9220,end:9231}}},{type:"raw",value:'									<a @keydown.enter="toggleChildDropdown(',position:{start:9232,end:9280}},{type:"output",position:{start:9280,end:9297},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:9280,end:9297}},{type:"Twig.expression.type.key.period",position:{start:9280,end:9297},key:"index0"}]},{type:"raw",value:')" role="menuitem" class="no-underline ',position:{start:9297,end:9336}},{type:"output",position:{start:9336,end:9433},stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"],position:{start:9336,end:9433}},{type:"Twig.expression.type.key.period",position:{start:9336,end:9433},key:"children"},{type:"Twig.expression.type.string",value:"hidden lg:flex justify-between gap-2 items-center w-full",position:{start:9336,end:9433}},{type:"Twig.expression.type.string",value:"inline-flex",position:{start:9336,end:9433}},{type:"Twig.expression.type.operator.binary",value:"?",position:{start:9336,end:9433},precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"raw",value:'" href="',position:{start:9433,end:9441}},{type:"output",position:{start:9441,end:9456},stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"],position:{start:9441,end:9456}},{type:"Twig.expression.type.key.period",position:{start:9441,end:9456},key:"url"}]},{type:"raw",value:`">
                    <span class="underline flex w-full hover:no-underline">
                      `,position:{start:9456,end:9557}},{type:"output",position:{start:9557,end:9573},stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"],position:{start:9557,end:9573}},{type:"Twig.expression.type.key.period",position:{start:9557,end:9573},key:"text"}]},{type:"raw",value:`
                    </span>
                    `,position:{start:9573,end:9622}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"]},{type:"Twig.expression.type.key.period",key:"children"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:9622,end:9655},output:[{type:"raw",value:`                      <span class="icon-caret-right hidden lg:block text-primary text-xs no-underline"></span>
                    `,position:{start:9656,end:9787}}]},position:{open:{start:9622,end:9655},close:{start:9787,end:9798}}},{type:"raw",value:`                  </a>

									`,position:{start:9799,end:9832}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"]},{type:"Twig.expression.type.key.period",key:"children"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:9832,end:9865},output:[{type:"raw",value:'										<ul role="presentation" class="list-none dropdown lg:absolute my-3 lg:my-0 top-0 bg-primary-100 w-full lg:w-80 p-3 md:px-6 flex flex-col space-y-2 lg:shadow-md" :class="(childOpen.sm === ',position:{start:9866,end:10063}},{type:"output",position:{start:10063,end:10080},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:10063,end:10080}},{type:"Twig.expression.type.key.period",position:{start:10063,end:10080},key:"index0"}]},{type:"raw",value:" || childOpen.lg === ",position:{start:10080,end:10101}},{type:"output",position:{start:10101,end:10118},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:10101,end:10118}},{type:"Twig.expression.type.key.period",position:{start:10101,end:10118},key:"index0"}]},{type:"raw",value:` ? '' : 'hidden') + ' ' + (childAlign === 'right' ? 'lg:right-full' : 'lg:left-full')">
											<li role="presentation" class="font-bold">
												<a `,position:{start:10118,end:10275}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"]},{type:"Twig.expression.type.key.period",key:"new_window"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:10275,end:10310},output:[{type:"raw",value:' target="_blank" rel="noopener" ',position:{start:10310,end:10342}}]},position:{open:{start:10275,end:10310},close:{start:10342,end:10353}}},{type:"raw",value:' href="',position:{start:10353,end:10360}},{type:"output",position:{start:10360,end:10375},stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"],position:{start:10360,end:10375}},{type:"Twig.expression.type.key.period",position:{start:10360,end:10375},key:"url"}]},{type:"raw",value:'">',position:{start:10375,end:10377}},{type:"output",position:{start:10377,end:10393},stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"],position:{start:10377,end:10393}},{type:"Twig.expression.type.key.period",position:{start:10377,end:10393},key:"text"}]},{type:"raw",value:`
													Overview</a>
											</li>
											`,position:{start:10393,end:10448}},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"grandchild",expression:[{type:"Twig.expression.type.variable",value:"child",match:["child"]},{type:"Twig.expression.type.key.period",key:"children"}],position:{start:10448,end:10486},output:[{type:"raw",value:`												<li role="presentation">
													<a role="menuitem" href="`,position:{start:10487,end:10562}},{type:"output",position:{start:10562,end:10582},stack:[{type:"Twig.expression.type.variable",value:"grandchild",match:["grandchild"],position:{start:10562,end:10582}},{type:"Twig.expression.type.key.period",position:{start:10562,end:10582},key:"url"}]},{type:"raw",value:'">',position:{start:10582,end:10584}},{type:"output",position:{start:10584,end:10605},stack:[{type:"Twig.expression.type.variable",value:"grandchild",match:["grandchild"],position:{start:10584,end:10605}},{type:"Twig.expression.type.key.period",position:{start:10584,end:10605},key:"text"}]},{type:"raw",value:`</a>
												</li>
											`,position:{start:10605,end:10639}}]},position:{open:{start:10448,end:10486},close:{start:10639,end:10651}}},{type:"raw",value:`										</ul>
									`,position:{start:10652,end:10677}}]},position:{open:{start:9832,end:9865},close:{start:10677,end:10688}}},{type:"raw",value:`								</li>
							`,position:{start:10689,end:10710}}]},position:{open:{start:8061,end:8093},close:{start:10710,end:10722}}},{type:"raw",value:`						</ul>
					`,position:{start:10723,end:10740}}]},position:{open:{start:5014,end:5046},close:{start:10740,end:10751}}},{type:"raw",value:`				</li>
			`,position:{start:10752,end:10765}}]},position:{open:{start:2953,end:2975},close:{start:10765,end:10777}}},{type:"raw",value:`		</ul>
		<div class="lg:hidden search-wrapper mt-4">
			`,position:{start:10778,end:10835}},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@atoms/forms/simple-form/simple-form.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"input_id"},{type:"Twig.expression.type.string",value:"keywords_mobile"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}],position:{start:10835,end:10929}},position:{start:10835,end:10929}},{type:"raw",value:`		</div>
	</div>
</div>
`,position:{start:10930,end:10930}}],precompiled:!0});o.options.allowInlineIncludes=!0;try{let t=e.defaultAttributes?e.defaultAttributes:[];return Array.isArray(t)||(t=Object.entries(t)),p(o.render({attributes:new a(t),...e}))}catch(t){return p("An error occurred whilst rendering /Users/mc_davidvasquez/Mighty_Citizen/fb-ui/src/stories/02-molecules/navigation/menu/menu.twig: "+t.toString())}};export{y as t};
