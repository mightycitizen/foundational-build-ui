import{T as i,t as p}from"./twig-BXd3Gfe2.js";import{a as s,D as a}from"./twig-foVUGi9y.js";s(i);i.cache(!1);s(i);i.cache(!1);p.twig({id:"@components/forms/simple-form/simple-form.twig",data:[{type:"raw",value:'<form action="',position:{start:0,end:14}},{type:"output",position:{start:14,end:47},stack:[{type:"Twig.expression.type.variable",value:"action",match:["action"],position:{start:14,end:47}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:14,end:47},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:14,end:47}},{type:"Twig.expression.type.string",value:"/search",position:{start:14,end:47}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:14,end:47},expression:!1}]}]},{type:"raw",value:`">
  <div class="relative">
    <label for="`,position:{start:47,end:91}},{type:"output",position:{start:91,end:127},stack:[{type:"Twig.expression.type.variable",value:"input_id",match:["input_id"],position:{start:91,end:127}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:91,end:127},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:91,end:127}},{type:"Twig.expression.type.string",value:"keywords",position:{start:91,end:127}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:91,end:127},expression:!1}]}]},{type:"raw",value:`" class="text-2xl mb-5">Site Search</label>
    <input class="w-full pr-6 shadow rounded" placeholder="Enter your search term" type="search" id="`,position:{start:127,end:272}},{type:"output",position:{start:272,end:308},stack:[{type:"Twig.expression.type.variable",value:"input_id",match:["input_id"],position:{start:272,end:308}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:272,end:308},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:272,end:308}},{type:"Twig.expression.type.string",value:"keywords",position:{start:272,end:308}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:272,end:308},expression:!1}]}]},{type:"raw",value:'" name="',position:{start:308,end:316}},{type:"output",position:{start:316,end:341},stack:[{type:"Twig.expression.type.variable",value:"name",match:["name"],position:{start:316,end:341}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:316,end:341},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:316,end:341}},{type:"Twig.expression.type.string",value:"q",position:{start:316,end:341}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:316,end:341},expression:!1}]}]},{type:"raw",value:`">
    <div class="absolute right-0 bottom-0 flex items-center pl-3">
      <button class="button m-0" type="submit"  value="Submit">
        <span class="">`,position:{start:341,end:498}},{type:"output",position:{start:498,end:535},stack:[{type:"Twig.expression.type.variable",value:"button_text",match:["button_text"],position:{start:498,end:535}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:498,end:535},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:498,end:535}},{type:"Twig.expression.type.string",value:"Search",position:{start:498,end:535}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:498,end:535},expression:!1}]}]},{type:"raw",value:`</span>
      </button>
    </div>
  </div>
</form>
`,position:{start:535,end:535}}],precompiled:!0});const o=e=>e,d=(e={})=>{const n=p.twig({id:"/Users/jabelmunoz/Documents/projects/foundational-build/src/stories/components/navigation/menu/menu.twig",data:[{type:"raw",value:`
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
	  }" class="absolute z-20 bg-black w-full py-4 lg:mt-4 lg:relative lg:block shadow-md lg:shadow-none lg:py-0" :class="(mainMenu ? '' : 'hidden')">
	<div class="container">
		<ul role="menubar"
      x-ref="topbar"
      @keydown.left="handleDirection('left')"
      @keydown.right="handleDirection('right')"
      class="flex flex-col justify-between gap-x-3 list-none lg:-mx-6 lg:flex-row" >
			`,position:{start:0,end:2955}},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"link",expression:[{type:"Twig.expression.type.variable",value:"menu",match:["menu"]}],position:{start:2955,end:2977},output:[{type:"raw",value:`				<li
          @focusin="if (window.innerWidth > this.breakpoint) dropdownOpen.lg = `,position:{start:2978,end:3065}},{type:"output",position:{start:3065,end:3082},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:3065,end:3082}},{type:"Twig.expression.type.key.period",position:{start:3065,end:3082},key:"index0"}]},{type:"raw",value:`"
          role="presentation" class="relative lg:border-0 `,position:{start:3082,end:3142}},{type:"output",position:{start:3142,end:3200},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:3142,end:3200}},{type:"Twig.expression.type.key.period",position:{start:3142,end:3200},key:"last"},{type:"Twig.expression.type.bool",value:!1,position:{start:3142,end:3200}},{type:"Twig.expression.type.operator.binary",value:"==",position:{start:3142,end:3200},precidence:9,associativity:"leftToRight",operator:"=="},{type:"Twig.expression.type.string",value:"border-b border-gray-200",position:{start:3142,end:3200}},{type:"Twig.expression.type.string",value:"",position:{start:3142,end:3200}},{type:"Twig.expression.type.operator.binary",value:"?",position:{start:3142,end:3200},precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"raw",value:`"
          `,position:{start:3200,end:3212}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"children"}],position:{start:3212,end:3234},output:[{type:"raw",value:'            @mouseenter="handleMouseEnter(',position:{start:3235,end:3277}},{type:"output",position:{start:3277,end:3294},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:3277,end:3294}},{type:"Twig.expression.type.key.period",position:{start:3277,end:3294},key:"index0"}]},{type:"raw",value:`)"
            @mouseleave="handleMouseLeave()"
          `,position:{start:3294,end:3352}}]},position:{open:{start:3212,end:3234},close:{start:3352,end:3363}}},{type:"raw",value:`          >

					`,position:{start:3364,end:3382}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"children"},{type:"Twig.expression.type.filter",value:"length",match:["| length","length"]}],position:{start:3382,end:3413},output:[{type:"raw",value:`						<button
              @click="toggleDropdown(`,position:{start:3414,end:3465}},{type:"output",position:{start:3465,end:3482},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:3465,end:3482}},{type:"Twig.expression.type.key.period",position:{start:3465,end:3482},key:"index0"}]},{type:"raw",value:`)"
              class="py-3 text-white no-underline w-full font-bold flex items-center gap-2 justify-between leading-5 lg:hidden " `,position:{start:3482,end:3614}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"new_window"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:3614,end:3648},output:[{type:"raw",value:' target="_blank" rel="noopener" ',position:{start:3648,end:3680}}]},position:{open:{start:3614,end:3648},close:{start:3680,end:3691}}},{type:"raw",value:` role="menuitem">
							`,position:{start:3691,end:3716}},{type:"output",position:{start:3716,end:3792},stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:3716,end:3792}},{type:"Twig.expression.type.key.period",position:{start:3716,end:3792},key:"parent_text"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:3716,end:3792}},{type:"Twig.expression.type.test",position:{start:3716,end:3792},filter:"empty",modifier:"not"},{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:3716,end:3792}},{type:"Twig.expression.type.key.period",position:{start:3716,end:3792},key:"parent_text"},{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:3716,end:3792}},{type:"Twig.expression.type.key.period",position:{start:3716,end:3792},key:"text"},{type:"Twig.expression.type.operator.binary",value:"?",position:{start:3716,end:3792},precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"raw",value:`
							<span :class="(dropdownOpen.sm === `,position:{start:3792,end:3835}},{type:"output",position:{start:3835,end:3852},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:3835,end:3852}},{type:"Twig.expression.type.key.period",position:{start:3835,end:3852},key:"index0"}]},{type:"raw",value:" ? 'rotate-180' : '') + ' ' + (dropdownOpen.lg === ",position:{start:3852,end:3903}},{type:"output",position:{start:3903,end:3920},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:3903,end:3920}},{type:"Twig.expression.type.key.period",position:{start:3903,end:3920},key:"index0"}]},{type:"raw",value:` ? 'lg:text-white' : 'lg:text-white')" class="icon-caret-down text-xs text-primary"></span>
						</button>
					`,position:{start:3920,end:4033}}]},position:{open:{start:3382,end:3413},close:{start:4033,end:4044}}},{type:"raw",value:`
					<a @keydown.enter="toggleDropdown(`,position:{start:4045,end:4085}},{type:"output",position:{start:4085,end:4102},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:4085,end:4102}},{type:"Twig.expression.type.key.period",position:{start:4085,end:4102},key:"index0"}]},{type:"raw",value:')"  role="menuitem" :class="dropdownOpen.lg === ',position:{start:4102,end:4150}},{type:"output",position:{start:4150,end:4167},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:4150,end:4167}},{type:"Twig.expression.type.key.period",position:{start:4150,end:4167},key:"index0"}]},{type:"raw",value:` ? 'bg-primary text-white' : ''" class="`,position:{start:4167,end:4207}},{type:"output",position:{start:4207,end:4268},stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:4207,end:4268}},{type:"Twig.expression.type.key.period",position:{start:4207,end:4268},key:"children"},{type:"Twig.expression.type.string",value:"hidden lg:inline-flex",position:{start:4207,end:4268}},{type:"Twig.expression.type.string",value:"inline-flex",position:{start:4207,end:4268}},{type:"Twig.expression.type.operator.binary",value:"?",position:{start:4207,end:4268},precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"raw",value:" text-white font-bold px-6 py-3 gap-2 leading-5 items-center lg:inline-flex no-underline ",position:{start:4268,end:4357}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"url"},{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"children"},{type:"Twig.expression.type.test",filter:"empty"},{type:"Twig.expression.type.operator.binary",value:"and",precidence:13,associativity:"leftToRight",operator:"and"}],position:{start:4357,end:4401},output:[{type:"raw",value:"hover:underline",position:{start:4401,end:4416}}]},position:{open:{start:4357,end:4401},close:{start:4416,end:4427}}},{type:"raw",value:'" ',position:{start:4427,end:4429}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"url"}],position:{start:4429,end:4446},output:[{type:"raw",value:' href="',position:{start:4446,end:4453}},{type:"output",position:{start:4453,end:4467},stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:4453,end:4467}},{type:"Twig.expression.type.key.period",position:{start:4453,end:4467},key:"url"}]},{type:"raw",value:'"',position:{start:4467,end:4468}}]},position:{open:{start:4429,end:4446},close:{start:4468,end:4479}}},{type:"raw",value:`>
            `,position:{start:4479,end:4493}},{type:"output",position:{start:4493,end:4508},stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:4493,end:4508}},{type:"Twig.expression.type.key.period",position:{start:4493,end:4508},key:"text"}]},{type:"raw",value:`
            `,position:{start:4508,end:4521}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"children"}],position:{start:4521,end:4543},output:[{type:"raw",value:'						  <span :class="(dropdownOpen.sm === ',position:{start:4544,end:4587}},{type:"output",position:{start:4587,end:4604},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:4587,end:4604}},{type:"Twig.expression.type.key.period",position:{start:4587,end:4604},key:"index0"}]},{type:"raw",value:" ? 'rotate-180' : '') + ' ' + (dropdownOpen.lg === ",position:{start:4604,end:4655}},{type:"output",position:{start:4655,end:4672},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:4655,end:4672}},{type:"Twig.expression.type.key.period",position:{start:4655,end:4672},key:"index0"}]},{type:"raw",value:` ? 'lg:text-white' : 'lg:text-white')" class="icon-caret-down text-xs text-white"></span>
            `,position:{start:4672,end:4774}}]},position:{open:{start:4521,end:4543},close:{start:4774,end:4785}}},{type:"raw",value:`					</a>

					`,position:{start:4786,end:4802}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"children"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:4802,end:4834},output:[{type:"raw",value:'						<ul role="presentation" class="list-none lg:absolute lg:bg-white lg:py-3 w-full lg:w-80 lg:shadow-md dropdown" :class="(dropdownOpen.sm === ',position:{start:4835,end:4981}},{type:"output",position:{start:4981,end:4998},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:4981,end:4998}},{type:"Twig.expression.type.key.period",position:{start:4981,end:4998},key:"index0"}]},{type:"raw",value:" || dropdownOpen.lg === ",position:{start:4998,end:5022}},{type:"output",position:{start:5022,end:5039},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:5022,end:5039}},{type:"Twig.expression.type.key.period",position:{start:5022,end:5039},key:"index0"}]},{type:"raw",value:` ? '' : 'hidden') + ' ' + (align + '-0')" x-data=" {
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
							<li role="presentation" class="parent-link font-bold lg:px-6 py-1">
								<a `,position:{start:5039,end:7664}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"new_window"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:7664,end:7698},output:[{type:"raw",value:' target="_blank" rel="noopener" ',position:{start:7698,end:7730}}]},position:{open:{start:7664,end:7698},close:{start:7730,end:7741}}},{type:"raw",value:' href="',position:{start:7741,end:7748}},{type:"output",position:{start:7748,end:7762},stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:7748,end:7762}},{type:"Twig.expression.type.key.period",position:{start:7748,end:7762},key:"url"}]},{type:"raw",value:'" class="text-primary">',position:{start:7762,end:7785}},{type:"output",position:{start:7785,end:7800},stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:7785,end:7800}},{type:"Twig.expression.type.key.period",position:{start:7785,end:7800},key:"text"}]},{type:"raw",value:`
									Overview</a>
							</li>
							`,position:{start:7800,end:7843}},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"child",expression:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"children"}],position:{start:7843,end:7875},output:[{type:"raw",value:`								<li
                  @focusin="if (window.innerWidth > this.breakpoint) childOpen.lg = `,position:{start:7876,end:7972}},{type:"output",position:{start:7972,end:7989},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:7972,end:7989}},{type:"Twig.expression.type.key.period",position:{start:7972,end:7989},key:"index0"}]},{type:"raw",value:`"
                  class="py-1 lg:px-6"
                  `,position:{start:7989,end:8048}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"]},{type:"Twig.expression.type.key.period",key:"children"}],position:{start:8048,end:8071},output:[{type:"raw",value:'                    :class="childOpen.lg === ',position:{start:8072,end:8117}},{type:"output",position:{start:8117,end:8134},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:8117,end:8134}},{type:"Twig.expression.type.key.period",position:{start:8117,end:8134},key:"index0"}]},{type:"raw",value:` ? 'lg:bg-primary-100' : ''"
                    @mouseenter="handleChildMouseEnter(`,position:{start:8134,end:8218}},{type:"output",position:{start:8218,end:8235},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:8218,end:8235}},{type:"Twig.expression.type.key.period",position:{start:8218,end:8235},key:"index0"}]},{type:"raw",value:`)"
                    @mouseleave="handleChildMouseLeave()"
                  `,position:{start:8235,end:8314}}]},position:{open:{start:8048,end:8071},close:{start:8314,end:8325}}},{type:"raw",value:`>
									`,position:{start:8325,end:8336}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"]},{type:"Twig.expression.type.key.period",key:"children"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:8336,end:8369},output:[{type:"raw",value:'										<button @click="toggleChildDropdown(',position:{start:8370,end:8416}},{type:"output",position:{start:8416,end:8433},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:8416,end:8433}},{type:"Twig.expression.type.key.period",position:{start:8416,end:8433},key:"index0"}]},{type:"raw",value:')" role="menuitem" href="',position:{start:8433,end:8458}},{type:"output",position:{start:8458,end:8473},stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"],position:{start:8458,end:8473}},{type:"Twig.expression.type.key.period",position:{start:8458,end:8473},key:"url"}]},{type:"raw",value:`" class="flex items-center gap-2 justify-between w-full lg:hidden text-primary">
                      <span class="underline hover:no-underline flex w-full">
											  `,position:{start:8473,end:8645}},{type:"output",position:{start:8645,end:8661},stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"],position:{start:8645,end:8661}},{type:"Twig.expression.type.key.period",position:{start:8645,end:8661},key:"text"}]},{type:"raw",value:`
                      </span>

                      <span :class="childOpen.sm === `,position:{start:8661,end:8746}},{type:"output",position:{start:8746,end:8763},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:8746,end:8763}},{type:"Twig.expression.type.key.period",position:{start:8746,end:8763},key:"index0"}]},{type:"raw",value:` ? 'rotate-180' : ''" class="icon-caret-down lg:hidden text-primary text-xs no-underline"></span>
                      <span class="icon-caret-right hidden lg:block text-primary text-xs no-underline"></span>

										</button>
									`,position:{start:8763,end:9002}}]},position:{open:{start:8336,end:8369},close:{start:9002,end:9013}}},{type:"raw",value:'									<a @keydown.enter="toggleChildDropdown(',position:{start:9014,end:9062}},{type:"output",position:{start:9062,end:9079},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:9062,end:9079}},{type:"Twig.expression.type.key.period",position:{start:9062,end:9079},key:"index0"}]},{type:"raw",value:')" role="menuitem" class="no-underline ',position:{start:9079,end:9118}},{type:"output",position:{start:9118,end:9215},stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"],position:{start:9118,end:9215}},{type:"Twig.expression.type.key.period",position:{start:9118,end:9215},key:"children"},{type:"Twig.expression.type.string",value:"hidden lg:flex justify-between gap-2 items-center w-full",position:{start:9118,end:9215}},{type:"Twig.expression.type.string",value:"inline-flex",position:{start:9118,end:9215}},{type:"Twig.expression.type.operator.binary",value:"?",position:{start:9118,end:9215},precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"raw",value:'" href="',position:{start:9215,end:9223}},{type:"output",position:{start:9223,end:9237},stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:9223,end:9237}},{type:"Twig.expression.type.key.period",position:{start:9223,end:9237},key:"url"}]},{type:"raw",value:`">
                    <span class="underline flex w-full hover:no-underline">
                      `,position:{start:9237,end:9338}},{type:"output",position:{start:9338,end:9354},stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"],position:{start:9338,end:9354}},{type:"Twig.expression.type.key.period",position:{start:9338,end:9354},key:"text"}]},{type:"raw",value:`
                    </span>
                    `,position:{start:9354,end:9403}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"]},{type:"Twig.expression.type.key.period",key:"children"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:9403,end:9436},output:[{type:"raw",value:`                      <span class="icon-caret-right hidden lg:block text-primary text-xs no-underline"></span>
                    `,position:{start:9437,end:9568}}]},position:{open:{start:9403,end:9436},close:{start:9568,end:9579}}},{type:"raw",value:`                  </a>

									`,position:{start:9580,end:9613}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"]},{type:"Twig.expression.type.key.period",key:"children"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:9613,end:9646},output:[{type:"raw",value:'										<ul role="presentation" class="list-none dropdown lg:absolute my-3 lg:my-0 top-0 bg-primary-100 w-full lg:w-80 p-3 md:px-6 flex flex-col space-y-2 lg:shadow-md" :class="(childOpen.sm === ',position:{start:9647,end:9844}},{type:"output",position:{start:9844,end:9861},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:9844,end:9861}},{type:"Twig.expression.type.key.period",position:{start:9844,end:9861},key:"index0"}]},{type:"raw",value:" || childOpen.lg === ",position:{start:9861,end:9882}},{type:"output",position:{start:9882,end:9899},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:9882,end:9899}},{type:"Twig.expression.type.key.period",position:{start:9882,end:9899},key:"index0"}]},{type:"raw",value:` ? '' : 'hidden') + ' ' + (childAlign === 'right' ? 'lg:right-full' : 'lg:left-full')">
											<li role="presentation" class="font-bold">
												<a `,position:{start:9899,end:10056}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"]},{type:"Twig.expression.type.key.period",key:"new_window"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:10056,end:10091},output:[{type:"raw",value:' target="_blank" rel="noopener" ',position:{start:10091,end:10123}}]},position:{open:{start:10056,end:10091},close:{start:10123,end:10134}}},{type:"raw",value:' href="',position:{start:10134,end:10141}},{type:"output",position:{start:10141,end:10156},stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"],position:{start:10141,end:10156}},{type:"Twig.expression.type.key.period",position:{start:10141,end:10156},key:"url"}]},{type:"raw",value:'">',position:{start:10156,end:10158}},{type:"output",position:{start:10158,end:10174},stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"],position:{start:10158,end:10174}},{type:"Twig.expression.type.key.period",position:{start:10158,end:10174},key:"text"}]},{type:"raw",value:`
													Overview</a>
											</li>
											`,position:{start:10174,end:10229}},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"grandchild",expression:[{type:"Twig.expression.type.variable",value:"child",match:["child"]},{type:"Twig.expression.type.key.period",key:"children"}],position:{start:10229,end:10267},output:[{type:"raw",value:`												<li role="presentation">
													<a role="menuitem" href="`,position:{start:10268,end:10343}},{type:"output",position:{start:10343,end:10363},stack:[{type:"Twig.expression.type.variable",value:"grandchild",match:["grandchild"],position:{start:10343,end:10363}},{type:"Twig.expression.type.key.period",position:{start:10343,end:10363},key:"url"}]},{type:"raw",value:'">',position:{start:10363,end:10365}},{type:"output",position:{start:10365,end:10386},stack:[{type:"Twig.expression.type.variable",value:"grandchild",match:["grandchild"],position:{start:10365,end:10386}},{type:"Twig.expression.type.key.period",position:{start:10365,end:10386},key:"text"}]},{type:"raw",value:`</a>
												</li>
											`,position:{start:10386,end:10420}}]},position:{open:{start:10229,end:10267},close:{start:10420,end:10432}}},{type:"raw",value:`										</ul>
									`,position:{start:10433,end:10458}}]},position:{open:{start:9613,end:9646},close:{start:10458,end:10469}}},{type:"raw",value:`								</li>
							`,position:{start:10470,end:10491}}]},position:{open:{start:7843,end:7875},close:{start:10491,end:10503}}},{type:"raw",value:`						</ul>
					`,position:{start:10504,end:10521}}]},position:{open:{start:4802,end:4834},close:{start:10521,end:10532}}},{type:"raw",value:`				</li>
			`,position:{start:10533,end:10546}}]},position:{open:{start:2955,end:2977},close:{start:10546,end:10558}}},{type:"raw",value:`		</ul>
		<div class="lg:hidden search-wrapper mt-4">
			`,position:{start:10559,end:10616}},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@components/forms/simple-form/simple-form.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"input_id"},{type:"Twig.expression.type.string",value:"keywords_mobile"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}],position:{start:10616,end:10715}},position:{start:10616,end:10715}},{type:"raw",value:`		</div>
	</div>
</div>
`,position:{start:10716,end:10716}}],precompiled:!0});n.options.allowInlineIncludes=!0;try{let t=e.defaultAttributes?e.defaultAttributes:[];return Array.isArray(t)||(t=Object.entries(t)),o(n.render({attributes:new a(t),...e}))}catch(t){return o("An error occurred whilst rendering /Users/jabelmunoz/Documents/projects/foundational-build/src/stories/components/navigation/menu/menu.twig: "+t.toString())}};export{d as t};
