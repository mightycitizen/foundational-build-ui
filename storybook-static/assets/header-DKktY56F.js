import{t as e,T as p}from"./twig-BXd3Gfe2.js";import{D as s,a}from"./twig-foVUGi9y.js";import"./utility-menu-DqiezcRL.js";import"./logo-AYNrM0QZ.js";import"./menu-BfDqxCDU.js";import"./hamburger-C7LFUHH7.js";a(p);p.cache(!1);e.twig({id:"@components/navigation/menu/menu.twig",data:[{type:"raw",value:`
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
`,position:{start:10716,end:10716}}],precompiled:!0});e.twig({id:"@components/utils/hamburger/hamburger.twig",data:[{type:"logic",token:{type:"Twig.logic.type.set",key:"hamburger_class",expression:[{type:"Twig.expression.type.string",value:"bg-primary h-[3px] rounded absolute w-full"}],position:{start:0,end:72}},position:{start:0,end:72}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"is_demo",match:["is_demo"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:73,end:99},output:[{type:"raw",value:'<div x-data="{ ',position:{start:100,end:115}},{type:"output",position:{start:115,end:127},stack:[{type:"Twig.expression.type.variable",value:"toggle",match:["toggle"],position:{start:115,end:127}}]},{type:"raw",value:`: false }">
`,position:{start:127,end:139}}]},position:{open:{start:73,end:99},close:{start:139,end:150}}},{type:"raw",value:'  <button class="hamburger flex items-center flex-col" type="button" id="hamburger" @click="',position:{start:151,end:243}},{type:"output",position:{start:243,end:255},stack:[{type:"Twig.expression.type.variable",value:"toggle",match:["toggle"],position:{start:243,end:255}}]},{type:"raw",value:" = !",position:{start:255,end:259}},{type:"output",position:{start:259,end:271},stack:[{type:"Twig.expression.type.variable",value:"toggle",match:["toggle"],position:{start:259,end:271}}]},{type:"raw",value:`" aria-label="Toggle navigation">
    <div class="relative w-8 h-5">
      <div class="`,position:{start:271,end:358}},{type:"output",position:{start:358,end:379},stack:[{type:"Twig.expression.type.variable",value:"hamburger_class",match:["hamburger_class"],position:{start:358,end:379}}]},{type:"raw",value:' origin-center transition-all left-0 top-0" :class="',position:{start:379,end:431}},{type:"output",position:{start:431,end:443},stack:[{type:"Twig.expression.type.variable",value:"toggle",match:["toggle"],position:{start:431,end:443}}]},{type:"raw",value:` ? 'rotate-45 translate-y-2' : ''"></div>
      <div class="`,position:{start:443,end:503}},{type:"output",position:{start:503,end:524},stack:[{type:"Twig.expression.type.variable",value:"hamburger_class",match:["hamburger_class"],position:{start:503,end:524}}]},{type:"raw",value:' top-1/2 mt-0" x-show="!',position:{start:524,end:548}},{type:"output",position:{start:548,end:560},stack:[{type:"Twig.expression.type.variable",value:"toggle",match:["toggle"],position:{start:548,end:560}}]},{type:"raw",value:`"></div>
      <div class="`,position:{start:560,end:587}},{type:"output",position:{start:587,end:608},stack:[{type:"Twig.expression.type.variable",value:"hamburger_class",match:["hamburger_class"],position:{start:587,end:608}}]},{type:"raw",value:' origin-center transition-all left-0 top-full" :class="',position:{start:608,end:663}},{type:"output",position:{start:663,end:675},stack:[{type:"Twig.expression.type.variable",value:"toggle",match:["toggle"],position:{start:663,end:675}}]},{type:"raw",value:` ? ' -rotate-45 -translate-y-3' : ''"></div>
    </div>
    <span class="hamburger-text mt-2 uppercase font-bold text-xs tracking-wider" x-text="`,position:{start:675,end:820}},{type:"output",position:{start:820,end:832},stack:[{type:"Twig.expression.type.variable",value:"toggle",match:["toggle"],position:{start:820,end:832}}]},{type:"raw",value:` ? 'Close' : 'Menu'">Menu</span>
  </button>
`,position:{start:832,end:877}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"is_demo",match:["is_demo"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:877,end:903},output:[{type:"raw",value:`  
</div>
`,position:{start:903,end:913}}]},position:{open:{start:877,end:903},close:{start:913,end:924}}}],precompiled:!0});e.twig({id:"@components/forms/simple-form/simple-form.twig",data:[{type:"raw",value:'<form action="',position:{start:0,end:14}},{type:"output",position:{start:14,end:47},stack:[{type:"Twig.expression.type.variable",value:"action",match:["action"],position:{start:14,end:47}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:14,end:47},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:14,end:47}},{type:"Twig.expression.type.string",value:"/search",position:{start:14,end:47}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:14,end:47},expression:!1}]}]},{type:"raw",value:`">
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
  <img `,position:{start:88,end:111}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"logo",match:["logo"]},{type:"Twig.expression.type.key.period",key:"height"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:111,end:141},output:[{type:"raw",value:'height="',position:{start:141,end:149}},{type:"output",position:{start:149,end:166},stack:[{type:"Twig.expression.type.variable",value:"logo",match:["logo"],position:{start:149,end:166}},{type:"Twig.expression.type.key.period",position:{start:149,end:166},key:"height"}]},{type:"raw",value:'"',position:{start:166,end:167}}]},position:{open:{start:111,end:141},close:{start:167,end:178}}},{type:"raw",value:" ",position:{start:178,end:179}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"logo",match:["logo"]},{type:"Twig.expression.type.key.period",key:"width"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:179,end:208},output:[{type:"raw",value:'width="',position:{start:208,end:215}},{type:"output",position:{start:215,end:231},stack:[{type:"Twig.expression.type.variable",value:"logo",match:["logo"],position:{start:215,end:231}},{type:"Twig.expression.type.key.period",position:{start:215,end:231},key:"width"}]},{type:"raw",value:'"',position:{start:231,end:232}}]},position:{open:{start:179,end:208},close:{start:232,end:243}}},{type:"raw",value:' class="logo_image" src="',position:{start:243,end:268}},{type:"output",position:{start:268,end:282},stack:[{type:"Twig.expression.type.variable",value:"logo",match:["logo"],position:{start:268,end:282}},{type:"Twig.expression.type.key.period",position:{start:268,end:282},key:"src"}]},{type:"raw",value:'" alt="',position:{start:282,end:289}},{type:"output",position:{start:289,end:303},stack:[{type:"Twig.expression.type.variable",value:"logo",match:["logo"],position:{start:289,end:303}},{type:"Twig.expression.type.key.period",position:{start:289,end:303},key:"alt"}]},{type:"raw",value:`"/>
</a>
`,position:{start:303,end:303}}],precompiled:!0});e.twig({id:"@components/navigation/utility-menu/utility-menu.twig",data:[{type:"raw",value:`
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
`,position:{start:3912,end:3912}}],precompiled:!0});n.options.allowInlineIncludes=!0;try{let t=i.defaultAttributes?i.defaultAttributes:[];return Array.isArray(t)||(t=Object.entries(t)),o(n.render({attributes:new s(t),...i}))}catch(t){return o("An error occurred whilst rendering /Users/jabelmunoz/Documents/projects/foundational-build/src/stories/layout/wrapper/header.twig: "+t.toString())}};export{g as t};
