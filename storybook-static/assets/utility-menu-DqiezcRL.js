import{t as p,T as o}from"./twig-BXd3Gfe2.js";import{D as s,a}from"./twig-foVUGi9y.js";a(o);o.cache(!1);const n=e=>e,d=(e={})=>{const i=p.twig({id:"/Users/jabelmunoz/Documents/projects/foundational-build/src/stories/components/navigation/utility-menu/utility-menu.twig",data:[{type:"raw",value:`
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
`,position:{start:10783,end:10783}}],precompiled:!0});i.options.allowInlineIncludes=!0;try{let t=e.defaultAttributes?e.defaultAttributes:[];return Array.isArray(t)||(t=Object.entries(t)),n(i.render({attributes:new s(t),...e}))}catch(t){return n("An error occurred whilst rendering /Users/jabelmunoz/Documents/projects/foundational-build/src/stories/components/navigation/utility-menu/utility-menu.twig: "+t.toString())}};export{d as t};
