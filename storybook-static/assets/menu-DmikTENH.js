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
	  }" class="absolute z-20 bg-primary-900 w-full py-4 lg:mt-4 lg:relative lg:block shadow-md lg:shadow-none lg:py-0" :class="(mainMenu ? '' : 'hidden')">
	<div class="container">
		<ul role="menubar"
      x-ref="topbar"
      @keydown.left="handleDirection('left')"
      @keydown.right="handleDirection('right')"
      class="flex flex-col justify-between gap-x-3 list-none lg:-mx-6 lg:flex-row" >
			`,position:{start:0,end:2961}},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"link",expression:[{type:"Twig.expression.type.variable",value:"menu",match:["menu"]}],position:{start:2961,end:2983},output:[{type:"raw",value:`				<li
          @focusin="if (window.innerWidth > this.breakpoint) dropdownOpen.lg = `,position:{start:2984,end:3071}},{type:"output",position:{start:3071,end:3088},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:3071,end:3088}},{type:"Twig.expression.type.key.period",position:{start:3071,end:3088},key:"index0"}]},{type:"raw",value:`"
          role="presentation" class="relative lg:border-0 `,position:{start:3088,end:3148}},{type:"output",position:{start:3148,end:3206},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:3148,end:3206}},{type:"Twig.expression.type.key.period",position:{start:3148,end:3206},key:"last"},{type:"Twig.expression.type.bool",value:!1,position:{start:3148,end:3206}},{type:"Twig.expression.type.operator.binary",value:"==",position:{start:3148,end:3206},precidence:9,associativity:"leftToRight",operator:"=="},{type:"Twig.expression.type.string",value:"border-b border-gray-200",position:{start:3148,end:3206}},{type:"Twig.expression.type.string",value:"",position:{start:3148,end:3206}},{type:"Twig.expression.type.operator.binary",value:"?",position:{start:3148,end:3206},precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"raw",value:`"
          `,position:{start:3206,end:3218}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"children"}],position:{start:3218,end:3240},output:[{type:"raw",value:'            @mouseenter="handleMouseEnter(',position:{start:3241,end:3283}},{type:"output",position:{start:3283,end:3300},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:3283,end:3300}},{type:"Twig.expression.type.key.period",position:{start:3283,end:3300},key:"index0"}]},{type:"raw",value:`)"
            @mouseleave="handleMouseLeave()"
          `,position:{start:3300,end:3358}}]},position:{open:{start:3218,end:3240},close:{start:3358,end:3369}}},{type:"raw",value:`          >

					`,position:{start:3370,end:3388}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"children"},{type:"Twig.expression.type.filter",value:"length",match:["| length","length"]}],position:{start:3388,end:3419},output:[{type:"raw",value:`						<button
              @click="toggleDropdown(`,position:{start:3420,end:3471}},{type:"output",position:{start:3471,end:3488},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:3471,end:3488}},{type:"Twig.expression.type.key.period",position:{start:3471,end:3488},key:"index0"}]},{type:"raw",value:`)"
              class="py-3 text-white no-underline w-full font-bold flex items-center gap-2 justify-between leading-5 lg:hidden " `,position:{start:3488,end:3620}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"new_window"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:3620,end:3654},output:[{type:"raw",value:' target="_blank" rel="noopener" ',position:{start:3654,end:3686}}]},position:{open:{start:3620,end:3654},close:{start:3686,end:3697}}},{type:"raw",value:` role="menuitem">
							`,position:{start:3697,end:3722}},{type:"output",position:{start:3722,end:3798},stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:3722,end:3798}},{type:"Twig.expression.type.key.period",position:{start:3722,end:3798},key:"parent_text"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:3722,end:3798}},{type:"Twig.expression.type.test",position:{start:3722,end:3798},filter:"empty",modifier:"not"},{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:3722,end:3798}},{type:"Twig.expression.type.key.period",position:{start:3722,end:3798},key:"parent_text"},{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:3722,end:3798}},{type:"Twig.expression.type.key.period",position:{start:3722,end:3798},key:"text"},{type:"Twig.expression.type.operator.binary",value:"?",position:{start:3722,end:3798},precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"raw",value:`
							<span :class="(dropdownOpen.sm === `,position:{start:3798,end:3841}},{type:"output",position:{start:3841,end:3858},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:3841,end:3858}},{type:"Twig.expression.type.key.period",position:{start:3841,end:3858},key:"index0"}]},{type:"raw",value:" ? 'rotate-180' : '') + ' ' + (dropdownOpen.lg === ",position:{start:3858,end:3909}},{type:"output",position:{start:3909,end:3926},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:3909,end:3926}},{type:"Twig.expression.type.key.period",position:{start:3909,end:3926},key:"index0"}]},{type:"raw",value:` ? 'lg:text-white' : 'lg:text-white')" class="icon-caret-down text-xs text-primary"></span>
						</button>
					`,position:{start:3926,end:4039}}]},position:{open:{start:3388,end:3419},close:{start:4039,end:4050}}},{type:"raw",value:`
					<a @keydown.enter="toggleDropdown(`,position:{start:4051,end:4091}},{type:"output",position:{start:4091,end:4108},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:4091,end:4108}},{type:"Twig.expression.type.key.period",position:{start:4091,end:4108},key:"index0"}]},{type:"raw",value:')"  role="menuitem" :class="dropdownOpen.lg === ',position:{start:4108,end:4156}},{type:"output",position:{start:4156,end:4173},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:4156,end:4173}},{type:"Twig.expression.type.key.period",position:{start:4156,end:4173},key:"index0"}]},{type:"raw",value:` ? 'bg-primary text-white' : ''" class="`,position:{start:4173,end:4213}},{type:"output",position:{start:4213,end:4274},stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:4213,end:4274}},{type:"Twig.expression.type.key.period",position:{start:4213,end:4274},key:"children"},{type:"Twig.expression.type.string",value:"hidden lg:inline-flex",position:{start:4213,end:4274}},{type:"Twig.expression.type.string",value:"inline-flex",position:{start:4213,end:4274}},{type:"Twig.expression.type.operator.binary",value:"?",position:{start:4213,end:4274},precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"raw",value:" text-white font-bold px-6 py-3 gap-2 leading-5 items-center lg:inline-flex no-underline ",position:{start:4274,end:4363}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"url"},{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"children"},{type:"Twig.expression.type.test",filter:"empty"},{type:"Twig.expression.type.operator.binary",value:"and",precidence:13,associativity:"leftToRight",operator:"and"}],position:{start:4363,end:4407},output:[{type:"raw",value:"hover:underline",position:{start:4407,end:4422}}]},position:{open:{start:4363,end:4407},close:{start:4422,end:4433}}},{type:"raw",value:'" ',position:{start:4433,end:4435}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"url"}],position:{start:4435,end:4452},output:[{type:"raw",value:' href="',position:{start:4452,end:4459}},{type:"output",position:{start:4459,end:4473},stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:4459,end:4473}},{type:"Twig.expression.type.key.period",position:{start:4459,end:4473},key:"url"}]},{type:"raw",value:'"',position:{start:4473,end:4474}}]},position:{open:{start:4435,end:4452},close:{start:4474,end:4485}}},{type:"raw",value:`>
            `,position:{start:4485,end:4499}},{type:"output",position:{start:4499,end:4514},stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:4499,end:4514}},{type:"Twig.expression.type.key.period",position:{start:4499,end:4514},key:"text"}]},{type:"raw",value:`
            `,position:{start:4514,end:4527}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"children"}],position:{start:4527,end:4549},output:[{type:"raw",value:'						  <span :class="(dropdownOpen.sm === ',position:{start:4550,end:4593}},{type:"output",position:{start:4593,end:4610},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:4593,end:4610}},{type:"Twig.expression.type.key.period",position:{start:4593,end:4610},key:"index0"}]},{type:"raw",value:" ? 'rotate-180' : '') + ' ' + (dropdownOpen.lg === ",position:{start:4610,end:4661}},{type:"output",position:{start:4661,end:4678},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:4661,end:4678}},{type:"Twig.expression.type.key.period",position:{start:4661,end:4678},key:"index0"}]},{type:"raw",value:` ? 'lg:text-white' : 'lg:text-white')" class="icon-caret-down text-xs text-white"></span>
            `,position:{start:4678,end:4780}}]},position:{open:{start:4527,end:4549},close:{start:4780,end:4791}}},{type:"raw",value:`					</a>

					`,position:{start:4792,end:4808}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"children"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:4808,end:4840},output:[{type:"raw",value:'						<ul role="presentation" class="list-none lg:absolute lg:bg-white lg:py-3 w-full lg:w-80 lg:shadow-md dropdown" :class="(dropdownOpen.sm === ',position:{start:4841,end:4987}},{type:"output",position:{start:4987,end:5004},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:4987,end:5004}},{type:"Twig.expression.type.key.period",position:{start:4987,end:5004},key:"index0"}]},{type:"raw",value:" || dropdownOpen.lg === ",position:{start:5004,end:5028}},{type:"output",position:{start:5028,end:5045},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:5028,end:5045}},{type:"Twig.expression.type.key.period",position:{start:5028,end:5045},key:"index0"}]},{type:"raw",value:` ? '' : 'hidden') + ' ' + (align + '-0')" x-data=" {
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
								<a `,position:{start:5045,end:7670}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"new_window"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:7670,end:7704},output:[{type:"raw",value:' target="_blank" rel="noopener" ',position:{start:7704,end:7736}}]},position:{open:{start:7670,end:7704},close:{start:7736,end:7747}}},{type:"raw",value:' href="',position:{start:7747,end:7754}},{type:"output",position:{start:7754,end:7768},stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:7754,end:7768}},{type:"Twig.expression.type.key.period",position:{start:7754,end:7768},key:"url"}]},{type:"raw",value:'" class="text-primary">',position:{start:7768,end:7791}},{type:"output",position:{start:7791,end:7806},stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:7791,end:7806}},{type:"Twig.expression.type.key.period",position:{start:7791,end:7806},key:"text"}]},{type:"raw",value:`
									Overview</a>
							</li>
							`,position:{start:7806,end:7849}},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"child",expression:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"children"}],position:{start:7849,end:7881},output:[{type:"raw",value:`								<li
                  @focusin="if (window.innerWidth > this.breakpoint) childOpen.lg = `,position:{start:7882,end:7978}},{type:"output",position:{start:7978,end:7995},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:7978,end:7995}},{type:"Twig.expression.type.key.period",position:{start:7978,end:7995},key:"index0"}]},{type:"raw",value:`"
                  class="py-1 lg:px-6"
                  `,position:{start:7995,end:8054}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"]},{type:"Twig.expression.type.key.period",key:"children"}],position:{start:8054,end:8077},output:[{type:"raw",value:'                    :class="childOpen.lg === ',position:{start:8078,end:8123}},{type:"output",position:{start:8123,end:8140},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:8123,end:8140}},{type:"Twig.expression.type.key.period",position:{start:8123,end:8140},key:"index0"}]},{type:"raw",value:` ? 'lg:bg-primary-100' : ''"
                    @mouseenter="handleChildMouseEnter(`,position:{start:8140,end:8224}},{type:"output",position:{start:8224,end:8241},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:8224,end:8241}},{type:"Twig.expression.type.key.period",position:{start:8224,end:8241},key:"index0"}]},{type:"raw",value:`)"
                    @mouseleave="handleChildMouseLeave()"
                  `,position:{start:8241,end:8320}}]},position:{open:{start:8054,end:8077},close:{start:8320,end:8331}}},{type:"raw",value:`>
									`,position:{start:8331,end:8342}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"]},{type:"Twig.expression.type.key.period",key:"children"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:8342,end:8375},output:[{type:"raw",value:'										<button @click="toggleChildDropdown(',position:{start:8376,end:8422}},{type:"output",position:{start:8422,end:8439},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:8422,end:8439}},{type:"Twig.expression.type.key.period",position:{start:8422,end:8439},key:"index0"}]},{type:"raw",value:')" role="menuitem" href="',position:{start:8439,end:8464}},{type:"output",position:{start:8464,end:8479},stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"],position:{start:8464,end:8479}},{type:"Twig.expression.type.key.period",position:{start:8464,end:8479},key:"url"}]},{type:"raw",value:`" class="flex items-center gap-2 justify-between w-full lg:hidden text-primary">
                      <span class="underline hover:no-underline flex w-full">
											  `,position:{start:8479,end:8651}},{type:"output",position:{start:8651,end:8667},stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"],position:{start:8651,end:8667}},{type:"Twig.expression.type.key.period",position:{start:8651,end:8667},key:"text"}]},{type:"raw",value:`
                      </span>

                      <span :class="childOpen.sm === `,position:{start:8667,end:8752}},{type:"output",position:{start:8752,end:8769},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:8752,end:8769}},{type:"Twig.expression.type.key.period",position:{start:8752,end:8769},key:"index0"}]},{type:"raw",value:` ? 'rotate-180' : ''" class="icon-caret-down lg:hidden text-primary text-xs no-underline"></span>
                      <span class="icon-caret-right hidden lg:block text-primary text-xs no-underline"></span>

										</button>
									`,position:{start:8769,end:9008}}]},position:{open:{start:8342,end:8375},close:{start:9008,end:9019}}},{type:"raw",value:'									<a @keydown.enter="toggleChildDropdown(',position:{start:9020,end:9068}},{type:"output",position:{start:9068,end:9085},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:9068,end:9085}},{type:"Twig.expression.type.key.period",position:{start:9068,end:9085},key:"index0"}]},{type:"raw",value:')" role="menuitem" class="no-underline ',position:{start:9085,end:9124}},{type:"output",position:{start:9124,end:9221},stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"],position:{start:9124,end:9221}},{type:"Twig.expression.type.key.period",position:{start:9124,end:9221},key:"children"},{type:"Twig.expression.type.string",value:"hidden lg:flex justify-between gap-2 items-center w-full",position:{start:9124,end:9221}},{type:"Twig.expression.type.string",value:"inline-flex",position:{start:9124,end:9221}},{type:"Twig.expression.type.operator.binary",value:"?",position:{start:9124,end:9221},precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"raw",value:'" href="',position:{start:9221,end:9229}},{type:"output",position:{start:9229,end:9243},stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:9229,end:9243}},{type:"Twig.expression.type.key.period",position:{start:9229,end:9243},key:"url"}]},{type:"raw",value:`">
                    <span class="underline flex w-full hover:no-underline">
                      `,position:{start:9243,end:9344}},{type:"output",position:{start:9344,end:9360},stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"],position:{start:9344,end:9360}},{type:"Twig.expression.type.key.period",position:{start:9344,end:9360},key:"text"}]},{type:"raw",value:`
                    </span>
                    `,position:{start:9360,end:9409}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"]},{type:"Twig.expression.type.key.period",key:"children"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:9409,end:9442},output:[{type:"raw",value:`                      <span class="icon-caret-right hidden lg:block text-primary text-xs no-underline"></span>
                    `,position:{start:9443,end:9574}}]},position:{open:{start:9409,end:9442},close:{start:9574,end:9585}}},{type:"raw",value:`                  </a>

									`,position:{start:9586,end:9619}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"]},{type:"Twig.expression.type.key.period",key:"children"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:9619,end:9652},output:[{type:"raw",value:'										<ul role="presentation" class="list-none dropdown lg:absolute my-3 lg:my-0 top-0 bg-primary-100 w-full lg:w-80 p-3 md:px-6 flex flex-col space-y-2 lg:shadow-md" :class="(childOpen.sm === ',position:{start:9653,end:9850}},{type:"output",position:{start:9850,end:9867},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:9850,end:9867}},{type:"Twig.expression.type.key.period",position:{start:9850,end:9867},key:"index0"}]},{type:"raw",value:" || childOpen.lg === ",position:{start:9867,end:9888}},{type:"output",position:{start:9888,end:9905},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:9888,end:9905}},{type:"Twig.expression.type.key.period",position:{start:9888,end:9905},key:"index0"}]},{type:"raw",value:` ? '' : 'hidden') + ' ' + (childAlign === 'right' ? 'lg:right-full' : 'lg:left-full')">
											<li role="presentation" class="font-bold">
												<a `,position:{start:9905,end:10062}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"]},{type:"Twig.expression.type.key.period",key:"new_window"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:10062,end:10097},output:[{type:"raw",value:' target="_blank" rel="noopener" ',position:{start:10097,end:10129}}]},position:{open:{start:10062,end:10097},close:{start:10129,end:10140}}},{type:"raw",value:' href="',position:{start:10140,end:10147}},{type:"output",position:{start:10147,end:10162},stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"],position:{start:10147,end:10162}},{type:"Twig.expression.type.key.period",position:{start:10147,end:10162},key:"url"}]},{type:"raw",value:'">',position:{start:10162,end:10164}},{type:"output",position:{start:10164,end:10180},stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"],position:{start:10164,end:10180}},{type:"Twig.expression.type.key.period",position:{start:10164,end:10180},key:"text"}]},{type:"raw",value:`
													Overview</a>
											</li>
											`,position:{start:10180,end:10235}},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"grandchild",expression:[{type:"Twig.expression.type.variable",value:"child",match:["child"]},{type:"Twig.expression.type.key.period",key:"children"}],position:{start:10235,end:10273},output:[{type:"raw",value:`												<li role="presentation">
													<a role="menuitem" href="`,position:{start:10274,end:10349}},{type:"output",position:{start:10349,end:10369},stack:[{type:"Twig.expression.type.variable",value:"grandchild",match:["grandchild"],position:{start:10349,end:10369}},{type:"Twig.expression.type.key.period",position:{start:10349,end:10369},key:"url"}]},{type:"raw",value:'">',position:{start:10369,end:10371}},{type:"output",position:{start:10371,end:10392},stack:[{type:"Twig.expression.type.variable",value:"grandchild",match:["grandchild"],position:{start:10371,end:10392}},{type:"Twig.expression.type.key.period",position:{start:10371,end:10392},key:"text"}]},{type:"raw",value:`</a>
												</li>
											`,position:{start:10392,end:10426}}]},position:{open:{start:10235,end:10273},close:{start:10426,end:10438}}},{type:"raw",value:`										</ul>
									`,position:{start:10439,end:10464}}]},position:{open:{start:9619,end:9652},close:{start:10464,end:10475}}},{type:"raw",value:`								</li>
							`,position:{start:10476,end:10497}}]},position:{open:{start:7849,end:7881},close:{start:10497,end:10509}}},{type:"raw",value:`						</ul>
					`,position:{start:10510,end:10527}}]},position:{open:{start:4808,end:4840},close:{start:10527,end:10538}}},{type:"raw",value:`				</li>
			`,position:{start:10539,end:10552}}]},position:{open:{start:2961,end:2983},close:{start:10552,end:10564}}},{type:"raw",value:`		</ul>
		<div class="lg:hidden search-wrapper mt-4">
			`,position:{start:10565,end:10622}},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@components/forms/simple-form/simple-form.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"input_id"},{type:"Twig.expression.type.string",value:"keywords_mobile"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}],position:{start:10622,end:10721}},position:{start:10622,end:10721}},{type:"raw",value:`		</div>
	</div>
</div>
`,position:{start:10722,end:10722}}],precompiled:!0});n.options.allowInlineIncludes=!0;try{let t=e.defaultAttributes?e.defaultAttributes:[];return Array.isArray(t)||(t=Object.entries(t)),o(n.render({attributes:new a(t),...e}))}catch(t){return o("An error occurred whilst rendering /Users/jabelmunoz/Documents/projects/foundational-build/src/stories/components/navigation/menu/menu.twig: "+t.toString())}};export{d as t};
