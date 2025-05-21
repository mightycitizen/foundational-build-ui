import{t as e,T as p}from"./twig-BXd3Gfe2.js";import{D as s,a}from"./twig-foVUGi9y.js";import"./utility-menu-DqiezcRL.js";import"./logo-CbkVP_fk.js";import"./menu-DmikTENH.js";import"./hamburger-C5tqHZAP.js";a(p);p.cache(!1);e.twig({id:"@components/navigation/menu/menu.twig",data:[{type:"raw",value:`
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
`,position:{start:10722,end:10722}}],precompiled:!0});e.twig({id:"@components/utils/hamburger/hamburger.twig",data:[{type:"logic",token:{type:"Twig.logic.type.set",key:"hamburger_class",expression:[{type:"Twig.expression.type.string",value:"bg-primary h-[3px] rounded absolute w-full"}],position:{start:0,end:72}},position:{start:0,end:72}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"is_demo",match:["is_demo"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:73,end:99},output:[{type:"raw",value:'<div x-data="{ ',position:{start:100,end:115}},{type:"output",position:{start:115,end:127},stack:[{type:"Twig.expression.type.variable",value:"toggle",match:["toggle"],position:{start:115,end:127}}]},{type:"raw",value:`: false }">
`,position:{start:127,end:139}}]},position:{open:{start:73,end:99},close:{start:139,end:150}}},{type:"raw",value:'  <button class="hamburger flex items-center flex-col" type="button" id="hamburger" @click="',position:{start:151,end:243}},{type:"output",position:{start:243,end:255},stack:[{type:"Twig.expression.type.variable",value:"toggle",match:["toggle"],position:{start:243,end:255}}]},{type:"raw",value:" = !",position:{start:255,end:259}},{type:"output",position:{start:259,end:271},stack:[{type:"Twig.expression.type.variable",value:"toggle",match:["toggle"],position:{start:259,end:271}}]},{type:"raw",value:`" aria-label="Toggle navigation">
    <span class="icon icon-list text-lg ml-2 rounded-full p-2 shadow mr-1"
          :class="`,position:{start:271,end:398}},{type:"output",position:{start:398,end:410},stack:[{type:"Twig.expression.type.variable",value:"toggle",match:["toggle"],position:{start:398,end:410}}]},{type:"raw",value:` ? ' icon-x bg-secondary-600 text-primary-500' : 'icon-search bg-white'"
    ></span>
`,position:{start:410,end:496}},{type:"raw",value:`
`,position:{start:534,end:535}},{type:"raw",value:`
`,position:{start:683,end:684}},{type:"raw",value:`
`,position:{start:771,end:772}},{type:"raw",value:`
`,position:{start:926,end:927}},{type:"raw",value:`
    <span class="sr-only hamburger-text mt-2 uppercase font-bold text-xs tracking-wider" x-text="`,position:{start:941,end:1039}},{type:"output",position:{start:1039,end:1051},stack:[{type:"Twig.expression.type.variable",value:"toggle",match:["toggle"],position:{start:1039,end:1051}}]},{type:"raw",value:` ? 'Close' : 'Menu'">Menu</span>
  </button>
`,position:{start:1051,end:1096}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"is_demo",match:["is_demo"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:1096,end:1122},output:[{type:"raw",value:`</div>
`,position:{start:1123,end:1130}}]},position:{open:{start:1096,end:1122},close:{start:1130,end:1141}}}],precompiled:!0});e.twig({id:"@components/forms/simple-form/simple-form.twig",data:[{type:"raw",value:'<form action="',position:{start:0,end:14}},{type:"output",position:{start:14,end:47},stack:[{type:"Twig.expression.type.variable",value:"action",match:["action"],position:{start:14,end:47}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:14,end:47},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:14,end:47}},{type:"Twig.expression.type.string",value:"/search",position:{start:14,end:47}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:14,end:47},expression:!1}]}]},{type:"raw",value:`">
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
`,position:{start:535,end:535}}],precompiled:!0});e.twig({id:"@components/logo/logo.twig",data:[{type:"raw",value:'<a href="',position:{start:0,end:9}},{type:"output",position:{start:9,end:88},stack:[{type:"Twig.expression.type.variable",value:"homepage",match:["homepage"],position:{start:9,end:88}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:9,end:88},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:9,end:88}},{type:"Twig.expression.type.string",value:"/iframe.html?path=/story/pages-templates--templates",position:{start:9,end:88}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:9,end:88},expression:!1}]}]},{type:"raw",value:`" class="logo">
  <img `,position:{start:88,end:111}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"logo",match:["logo"]},{type:"Twig.expression.type.key.period",key:"height"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:111,end:141},output:[{type:"raw",value:'height="',position:{start:141,end:149}},{type:"output",position:{start:149,end:166},stack:[{type:"Twig.expression.type.variable",value:"logo",match:["logo"],position:{start:149,end:166}},{type:"Twig.expression.type.key.period",position:{start:149,end:166},key:"height"}]},{type:"raw",value:'"',position:{start:166,end:167}}]},position:{open:{start:111,end:141},close:{start:167,end:178}}},{type:"raw",value:" ",position:{start:178,end:179}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"logo",match:["logo"]},{type:"Twig.expression.type.key.period",key:"width"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:179,end:208},output:[{type:"raw",value:'width="',position:{start:208,end:215}},{type:"output",position:{start:215,end:231},stack:[{type:"Twig.expression.type.variable",value:"logo",match:["logo"],position:{start:215,end:231}},{type:"Twig.expression.type.key.period",position:{start:215,end:231},key:"width"}]},{type:"raw",value:'"',position:{start:231,end:232}}]},position:{open:{start:179,end:208},close:{start:232,end:243}}},{type:"raw",value:' class="logo_image ',position:{start:243,end:262}},{type:"output",position:{start:262,end:278},stack:[{type:"Twig.expression.type.variable",value:"logo",match:["logo"],position:{start:262,end:278}},{type:"Twig.expression.type.key.period",position:{start:262,end:278},key:"class"}]},{type:"raw",value:'" src="',position:{start:278,end:285}},{type:"output",position:{start:285,end:299},stack:[{type:"Twig.expression.type.variable",value:"logo",match:["logo"],position:{start:285,end:299}},{type:"Twig.expression.type.key.period",position:{start:285,end:299},key:"src"}]},{type:"raw",value:'" alt="',position:{start:299,end:306}},{type:"output",position:{start:306,end:320},stack:[{type:"Twig.expression.type.variable",value:"logo",match:["logo"],position:{start:306,end:320}},{type:"Twig.expression.type.key.period",position:{start:306,end:320},key:"alt"}]},{type:"raw",value:`"/>
</a>
`,position:{start:320,end:320}}],precompiled:!0});e.twig({id:"@components/navigation/utility-menu/utility-menu.twig",data:[{type:"raw",value:`
<div id="`,position:{start:0,end:10}},{type:"output",position:{start:10,end:36},stack:[{type:"Twig.expression.type.variable",value:"utility_menu",match:["utility_menu"],position:{start:10,end:36}},{type:"Twig.expression.type.key.period",position:{start:10,end:36},key:"menu_id"}]},{type:"raw",value:`" x-data="{
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
	  }" class="absolute `,position:{start:36,end:2597}},{type:"output",position:{start:2597,end:2638},stack:[{type:"Twig.expression.type.variable",value:"utility_menu",match:["utility_menu"],position:{start:2597,end:2638}},{type:"Twig.expression.type.key.period",position:{start:2597,end:2638},key:"menu_wrapper_modifiers"}]},{type:"raw",value:`" :class="(mainMenu ? '' : '')">

    <ul role="menubar"
        x-ref="topbar"
        @keydown.left="handleDirection('left')"
        @keydown.right="handleDirection('right')"
        class="`,position:{start:2638,end:2831}},{type:"output",position:{start:2831,end:2868},stack:[{type:"Twig.expression.type.variable",value:"utility_menu",match:["utility_menu"],position:{start:2831,end:2868}},{type:"Twig.expression.type.key.period",position:{start:2831,end:2868},key:"menu_bar_modifiers"}]},{type:"raw",value:`">
      `,position:{start:2868,end:2877}},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"link",expression:[{type:"Twig.expression.type.variable",value:"utility_menu",match:["utility_menu"]},{type:"Twig.expression.type.key.period",key:"links"}],position:{start:2877,end:2913},output:[{type:"raw",value:`        <li
          @focusin="if (window.innerWidth > this.breakpoint) dropdownOpen.lg = `,position:{start:2914,end:3005}},{type:"output",position:{start:3005,end:3022},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:3005,end:3022}},{type:"Twig.expression.type.key.period",position:{start:3005,end:3022},key:"index0"}]},{type:"raw",value:`"
          role="presentation" class="relative lg:border-0 `,position:{start:3022,end:3082}},{type:"output",position:{start:3082,end:3140},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:3082,end:3140}},{type:"Twig.expression.type.key.period",position:{start:3082,end:3140},key:"last"},{type:"Twig.expression.type.bool",value:!1,position:{start:3082,end:3140}},{type:"Twig.expression.type.operator.binary",value:"==",position:{start:3082,end:3140},precidence:9,associativity:"leftToRight",operator:"=="},{type:"Twig.expression.type.string",value:"border-b border-gray-200",position:{start:3082,end:3140}},{type:"Twig.expression.type.string",value:"",position:{start:3082,end:3140}},{type:"Twig.expression.type.operator.binary",value:"?",position:{start:3082,end:3140},precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"raw",value:`"
          `,position:{start:3140,end:3152}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"children"}],position:{start:3152,end:3174},output:[{type:"raw",value:'            @mouseenter="handleMouseEnter(',position:{start:3175,end:3217}},{type:"output",position:{start:3217,end:3234},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:3217,end:3234}},{type:"Twig.expression.type.key.period",position:{start:3217,end:3234},key:"index0"}]},{type:"raw",value:`)"
            @mouseleave="handleMouseLeave()"
          `,position:{start:3234,end:3292}}]},position:{open:{start:3152,end:3174},close:{start:3292,end:3303}}},{type:"raw",value:`        >

          `,position:{start:3304,end:3325}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"children"},{type:"Twig.expression.type.filter",value:"length",match:["| length","length"]}],position:{start:3325,end:3356},output:[{type:"raw",value:`            <button
              @click="toggleDropdown(`,position:{start:3357,end:3414}},{type:"output",position:{start:3414,end:3431},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:3414,end:3431}},{type:"Twig.expression.type.key.period",position:{start:3414,end:3431},key:"index0"}]},{type:"raw",value:`)"
              class="`,position:{start:3431,end:3455}},{type:"output",position:{start:3455,end:3509},stack:[{type:"Twig.expression.type.variable",value:"utility_menu",match:["utility_menu"],position:{start:3455,end:3509}},{type:"Twig.expression.type.key.period",position:{start:3455,end:3509},key:"parent_link_mobile_button_modifiers"}]},{type:"raw",value:' " ',position:{start:3509,end:3512}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"new_window"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:3512,end:3546},output:[{type:"raw",value:' target="_blank" rel="noopener" ',position:{start:3546,end:3578}}]},position:{open:{start:3512,end:3546},close:{start:3578,end:3589}}},{type:"raw",value:` role="menuitem">
              `,position:{start:3589,end:3621}},{type:"output",position:{start:3621,end:3697},stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:3621,end:3697}},{type:"Twig.expression.type.key.period",position:{start:3621,end:3697},key:"parent_text"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:3621,end:3697}},{type:"Twig.expression.type.test",position:{start:3621,end:3697},filter:"empty",modifier:"not"},{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:3621,end:3697}},{type:"Twig.expression.type.key.period",position:{start:3621,end:3697},key:"parent_text"},{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:3621,end:3697}},{type:"Twig.expression.type.key.period",position:{start:3621,end:3697},key:"text"},{type:"Twig.expression.type.operator.binary",value:"?",position:{start:3621,end:3697},precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"raw",value:`
              <span :class="(dropdownOpen.sm === `,position:{start:3697,end:3747}},{type:"output",position:{start:3747,end:3764},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:3747,end:3764}},{type:"Twig.expression.type.key.period",position:{start:3747,end:3764},key:"index0"}]},{type:"raw",value:" ? 'rotate-180' : '') + ' ' + (dropdownOpen.lg === ",position:{start:3764,end:3815}},{type:"output",position:{start:3815,end:3832},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:3815,end:3832}},{type:"Twig.expression.type.key.period",position:{start:3815,end:3832},key:"index0"}]},{type:"raw",value:` ? 'lg:text-gray' : 'lg:text-white')" class="`,position:{start:3832,end:3877}},{type:"output",position:{start:3877,end:3936},stack:[{type:"Twig.expression.type.variable",value:"utility_menu",match:["utility_menu"],position:{start:3877,end:3936}},{type:"Twig.expression.type.key.period",position:{start:3877,end:3936},key:"parent_link_mobile_button_icon_modifiers"}]},{type:"raw",value:`"></span>
            </button>
          `,position:{start:3936,end:3978}}]},position:{open:{start:3325,end:3356},close:{start:3978,end:3989}}},{type:"raw",value:`
          <a @keydown.enter="toggleDropdown(`,position:{start:3990,end:4035}},{type:"output",position:{start:4035,end:4052},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:4035,end:4052}},{type:"Twig.expression.type.key.period",position:{start:4035,end:4052},key:"index0"}]},{type:"raw",value:')"  role="menuitem" :class="dropdownOpen.lg === ',position:{start:4052,end:4100}},{type:"output",position:{start:4100,end:4117},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:4100,end:4117}},{type:"Twig.expression.type.key.period",position:{start:4100,end:4117},key:"index0"}]},{type:"raw",value:" ? '",position:{start:4117,end:4121}},{type:"output",position:{start:4121,end:4167},stack:[{type:"Twig.expression.type.variable",value:"utility_menu",match:["utility_menu"],position:{start:4121,end:4167}},{type:"Twig.expression.type.key.period",position:{start:4121,end:4167},key:"parent_link_hover_modifiers"}]},{type:"raw",value:`' : ''" class="`,position:{start:4167,end:4182}},{type:"output",position:{start:4182,end:4243},stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:4182,end:4243}},{type:"Twig.expression.type.key.period",position:{start:4182,end:4243},key:"children"},{type:"Twig.expression.type.string",value:"hidden lg:inline-flex",position:{start:4182,end:4243}},{type:"Twig.expression.type.string",value:"inline-flex",position:{start:4182,end:4243}},{type:"Twig.expression.type.operator.binary",value:"?",position:{start:4182,end:4243},precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"raw",value:" ",position:{start:4243,end:4244}},{type:"output",position:{start:4244,end:4283},stack:[{type:"Twig.expression.type.variable",value:"utility_menu",match:["utility_menu"],position:{start:4244,end:4283}},{type:"Twig.expression.type.key.period",position:{start:4244,end:4283},key:"parent_link_modifiers"}]},{type:"raw",value:" ",position:{start:4283,end:4284}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"url"},{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"children"},{type:"Twig.expression.type.test",filter:"empty"},{type:"Twig.expression.type.operator.binary",value:"and",precidence:13,associativity:"leftToRight",operator:"and"}],position:{start:4284,end:4328},output:[{type:"raw",value:"hover:underline",position:{start:4328,end:4343}}]},position:{open:{start:4284,end:4328},close:{start:4343,end:4354}}},{type:"raw",value:'" ',position:{start:4354,end:4356}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"url"}],position:{start:4356,end:4373},output:[{type:"raw",value:' href="',position:{start:4373,end:4380}},{type:"output",position:{start:4380,end:4394},stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:4380,end:4394}},{type:"Twig.expression.type.key.period",position:{start:4380,end:4394},key:"url"}]},{type:"raw",value:'"',position:{start:4394,end:4395}}]},position:{open:{start:4356,end:4373},close:{start:4395,end:4406}}},{type:"raw",value:`>
            `,position:{start:4406,end:4420}},{type:"output",position:{start:4420,end:4435},stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:4420,end:4435}},{type:"Twig.expression.type.key.period",position:{start:4420,end:4435},key:"text"}]},{type:"raw",value:`
            `,position:{start:4435,end:4448}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"children"}],position:{start:4448,end:4470},output:[{type:"raw",value:'              <span :class="(dropdownOpen.sm === ',position:{start:4471,end:4520}},{type:"output",position:{start:4520,end:4537},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:4520,end:4537}},{type:"Twig.expression.type.key.period",position:{start:4520,end:4537},key:"index0"}]},{type:"raw",value:" ? 'rotate-180' : '') + ' ' + (dropdownOpen.lg === ",position:{start:4537,end:4588}},{type:"output",position:{start:4588,end:4605},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:4588,end:4605}},{type:"Twig.expression.type.key.period",position:{start:4588,end:4605},key:"index0"}]},{type:"raw",value:` ? 'lg:text-white' : 'lg:text-white')" class="`,position:{start:4605,end:4651}},{type:"output",position:{start:4651,end:4696},stack:[{type:"Twig.expression.type.variable",value:"utility_menu",match:["utility_menu"],position:{start:4651,end:4696}},{type:"Twig.expression.type.key.period",position:{start:4651,end:4696},key:"parent_link_icon_modifiers"}]},{type:"raw",value:`"></span>
            `,position:{start:4696,end:4718}}]},position:{open:{start:4448,end:4470},close:{start:4718,end:4729}}},{type:"raw",value:`          </a>

          `,position:{start:4730,end:4756}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"children"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:4756,end:4788},output:[{type:"raw",value:'            <ul role="presentation" class="list-none lg:absolute lg:bg-white lg:py-3 w-full lg:w-80 lg:shadow-md dropdown" :class="(dropdownOpen.sm === ',position:{start:4789,end:4941}},{type:"output",position:{start:4941,end:4958},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:4941,end:4958}},{type:"Twig.expression.type.key.period",position:{start:4941,end:4958},key:"index0"}]},{type:"raw",value:" || dropdownOpen.lg === ",position:{start:4958,end:4982}},{type:"output",position:{start:4982,end:4999},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:4982,end:4999}},{type:"Twig.expression.type.key.period",position:{start:4982,end:4999},key:"index0"}]},{type:"raw",value:` ? '' : 'hidden') + ' ' + (align + '-0')" x-data=" {
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
                <a `,position:{start:4999,end:7639}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"new_window"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:7639,end:7673},output:[{type:"raw",value:' target="_blank" rel="noopener" ',position:{start:7673,end:7705}}]},position:{open:{start:7639,end:7673},close:{start:7705,end:7716}}},{type:"raw",value:' href="',position:{start:7716,end:7723}},{type:"output",position:{start:7723,end:7737},stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:7723,end:7737}},{type:"Twig.expression.type.key.period",position:{start:7723,end:7737},key:"url"}]},{type:"raw",value:'" class="text-primary">',position:{start:7737,end:7760}},{type:"output",position:{start:7760,end:7775},stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:7760,end:7775}},{type:"Twig.expression.type.key.period",position:{start:7760,end:7775},key:"text"}]},{type:"raw",value:`
                  Overview</a>
              </li>
              `,position:{start:7775,end:7841}},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"child",expression:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"children"}],position:{start:7841,end:7873},output:[{type:"raw",value:`                <li
                  @focusin="if (window.innerWidth > this.breakpoint) childOpen.lg = `,position:{start:7874,end:7978}},{type:"output",position:{start:7978,end:7995},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:7978,end:7995}},{type:"Twig.expression.type.key.period",position:{start:7978,end:7995},key:"index0"}]},{type:"raw",value:`"
                  class="py-1 lg:px-6"
                  `,position:{start:7995,end:8054}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"]},{type:"Twig.expression.type.key.period",key:"children"}],position:{start:8054,end:8077},output:[{type:"raw",value:'                  :class="childOpen.lg === ',position:{start:8078,end:8121}},{type:"output",position:{start:8121,end:8138},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:8121,end:8138}},{type:"Twig.expression.type.key.period",position:{start:8121,end:8138},key:"index0"}]},{type:"raw",value:` ? 'lg:bg-primary-100' : ''"
                  @mouseenter="handleChildMouseEnter(`,position:{start:8138,end:8220}},{type:"output",position:{start:8220,end:8237},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:8220,end:8237}},{type:"Twig.expression.type.key.period",position:{start:8220,end:8237},key:"index0"}]},{type:"raw",value:`)"
                  @mouseleave="handleChildMouseLeave()"
                  `,position:{start:8237,end:8314}}]},position:{open:{start:8054,end:8077},close:{start:8314,end:8325}}},{type:"raw",value:`>
                  `,position:{start:8325,end:8345}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"]},{type:"Twig.expression.type.key.period",key:"children"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:8345,end:8378},output:[{type:"raw",value:'                    <button @click="toggleChildDropdown(',position:{start:8379,end:8435}},{type:"output",position:{start:8435,end:8452},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:8435,end:8452}},{type:"Twig.expression.type.key.period",position:{start:8435,end:8452},key:"index0"}]},{type:"raw",value:')" role="menuitem" href="',position:{start:8452,end:8477}},{type:"output",position:{start:8477,end:8492},stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"],position:{start:8477,end:8492}},{type:"Twig.expression.type.key.period",position:{start:8477,end:8492},key:"url"}]},{type:"raw",value:`" class="flex items-center gap-2 justify-between w-full lg:hidden text-primary">
                      <span class="underline hover:no-underline flex w-full">
											  `,position:{start:8492,end:8664}},{type:"output",position:{start:8664,end:8680},stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"],position:{start:8664,end:8680}},{type:"Twig.expression.type.key.period",position:{start:8664,end:8680},key:"text"}]},{type:"raw",value:`
                      </span>

                      <span :class="childOpen.sm === `,position:{start:8680,end:8765}},{type:"output",position:{start:8765,end:8782},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:8765,end:8782}},{type:"Twig.expression.type.key.period",position:{start:8765,end:8782},key:"index0"}]},{type:"raw",value:` ? 'rotate-180' : ''" class="icon-caret-down lg:hidden text-primary text-xs no-underline"></span>
                      <span class="icon-caret-right hidden lg:block text-primary text-xs no-underline"></span>

                    </button>
                  `,position:{start:8782,end:9040}}]},position:{open:{start:8345,end:8378},close:{start:9040,end:9051}}},{type:"raw",value:'                  <a @keydown.enter="toggleChildDropdown(',position:{start:9052,end:9109}},{type:"output",position:{start:9109,end:9126},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:9109,end:9126}},{type:"Twig.expression.type.key.period",position:{start:9109,end:9126},key:"index0"}]},{type:"raw",value:')" role="menuitem" class="no-underline ',position:{start:9126,end:9165}},{type:"output",position:{start:9165,end:9262},stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"],position:{start:9165,end:9262}},{type:"Twig.expression.type.key.period",position:{start:9165,end:9262},key:"children"},{type:"Twig.expression.type.string",value:"hidden lg:flex justify-between gap-2 items-center w-full",position:{start:9165,end:9262}},{type:"Twig.expression.type.string",value:"inline-flex",position:{start:9165,end:9262}},{type:"Twig.expression.type.operator.binary",value:"?",position:{start:9165,end:9262},precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"raw",value:'" href="',position:{start:9262,end:9270}},{type:"output",position:{start:9270,end:9284},stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:9270,end:9284}},{type:"Twig.expression.type.key.period",position:{start:9270,end:9284},key:"url"}]},{type:"raw",value:`">
                    <span class="underline flex w-full hover:no-underline">
                      `,position:{start:9284,end:9385}},{type:"output",position:{start:9385,end:9401},stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"],position:{start:9385,end:9401}},{type:"Twig.expression.type.key.period",position:{start:9385,end:9401},key:"text"}]},{type:"raw",value:`
                    </span>
                    `,position:{start:9401,end:9450}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"]},{type:"Twig.expression.type.key.period",key:"children"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:9450,end:9483},output:[{type:"raw",value:`                      <span class="icon-caret-right hidden lg:block text-primary text-xs no-underline"></span>
                    `,position:{start:9484,end:9615}}]},position:{open:{start:9450,end:9483},close:{start:9615,end:9626}}},{type:"raw",value:`                  </a>

                  `,position:{start:9627,end:9669}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"]},{type:"Twig.expression.type.key.period",key:"children"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:9669,end:9702},output:[{type:"raw",value:'                    <ul role="presentation" class="list-none dropdown lg:absolute my-3 lg:my-0 top-0 bg-primary-100 w-full lg:w-80 p-3 md:px-6 flex flex-col space-y-2 lg:shadow-md" :class="(childOpen.sm === ',position:{start:9703,end:9910}},{type:"output",position:{start:9910,end:9927},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:9910,end:9927}},{type:"Twig.expression.type.key.period",position:{start:9910,end:9927},key:"index0"}]},{type:"raw",value:" || childOpen.lg === ",position:{start:9927,end:9948}},{type:"output",position:{start:9948,end:9965},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:9948,end:9965}},{type:"Twig.expression.type.key.period",position:{start:9948,end:9965},key:"index0"}]},{type:"raw",value:` ? '' : 'hidden') + ' ' + (childAlign === 'right' ? 'lg:right-full' : 'lg:left-full')">
                      <li role="presentation" class="font-bold">
                        <a `,position:{start:9965,end:10145}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"]},{type:"Twig.expression.type.key.period",key:"new_window"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:10145,end:10180},output:[{type:"raw",value:' target="_blank" rel="noopener" ',position:{start:10180,end:10212}}]},position:{open:{start:10145,end:10180},close:{start:10212,end:10223}}},{type:"raw",value:' href="',position:{start:10223,end:10230}},{type:"output",position:{start:10230,end:10245},stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"],position:{start:10230,end:10245}},{type:"Twig.expression.type.key.period",position:{start:10230,end:10245},key:"url"}]},{type:"raw",value:'">',position:{start:10245,end:10247}},{type:"output",position:{start:10247,end:10263},stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"],position:{start:10247,end:10263}},{type:"Twig.expression.type.key.period",position:{start:10247,end:10263},key:"text"}]},{type:"raw",value:`
                          Overview</a>
                      </li>
                      `,position:{start:10263,end:10353}},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"grandchild",expression:[{type:"Twig.expression.type.variable",value:"child",match:["child"]},{type:"Twig.expression.type.key.period",key:"children"}],position:{start:10353,end:10391},output:[{type:"raw",value:`                        <li role="presentation">
                          <a role="menuitem" href="`,position:{start:10392,end:10492}},{type:"output",position:{start:10492,end:10512},stack:[{type:"Twig.expression.type.variable",value:"grandchild",match:["grandchild"],position:{start:10492,end:10512}},{type:"Twig.expression.type.key.period",position:{start:10492,end:10512},key:"url"}]},{type:"raw",value:'">',position:{start:10512,end:10514}},{type:"output",position:{start:10514,end:10535},stack:[{type:"Twig.expression.type.variable",value:"grandchild",match:["grandchild"],position:{start:10514,end:10535}},{type:"Twig.expression.type.key.period",position:{start:10514,end:10535},key:"text"}]},{type:"raw",value:`</a>
                        </li>
                      `,position:{start:10535,end:10592}}]},position:{open:{start:10353,end:10391},close:{start:10592,end:10604}}},{type:"raw",value:`                    </ul>
                  `,position:{start:10605,end:10649}}]},position:{open:{start:9669,end:9702},close:{start:10649,end:10660}}},{type:"raw",value:`                </li>
              `,position:{start:10661,end:10697}}]},position:{open:{start:7841,end:7873},close:{start:10697,end:10709}}},{type:"raw",value:`            </ul>
          `,position:{start:10710,end:10738}}]},position:{open:{start:4756,end:4788},close:{start:10738,end:10749}}},{type:"raw",value:`        </li>
      `,position:{start:10750,end:10770}}]},position:{open:{start:2877,end:2913},close:{start:10770,end:10782}}},{type:"raw",value:`    </ul>

</div>
`,position:{start:10783,end:10783}}],precompiled:!0});const o=i=>i,g=(i={})=>{const n=e.twig({id:"/Users/jabelmunoz/Documents/projects/foundational-build/src/stories/layout/wrapper/header.twig",data:[{type:"raw",value:`<script>
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
`,position:{start:4682,end:4682}}],precompiled:!0});n.options.allowInlineIncludes=!0;try{let t=i.defaultAttributes?i.defaultAttributes:[];return Array.isArray(t)||(t=Object.entries(t)),o(n.render({attributes:new s(t),...i}))}catch(t){return o("An error occurred whilst rendering /Users/jabelmunoz/Documents/projects/foundational-build/src/stories/layout/wrapper/header.twig: "+t.toString())}};export{g as t};
