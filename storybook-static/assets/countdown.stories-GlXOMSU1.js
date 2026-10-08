import{t as r,T as o}from"./iframe-krW4WiQS.js";import{D as p,a as u}from"./twig-OXX08FiC.js";import"./preload-helper-PPVm8Dsz.js";u(o);o.cache(!1);const i=t=>t,d=(t={})=>{const a=r.twig({id:"/Users/mc_davidvasquez/Mighty_Citizen/fb-ui/src/stories/02-molecules/countdown/countdown.twig",data:[{type:"raw",value:`<div x-data="{
      targetDate: new Date(`,position:{start:0,end:42}},{type:"output",position:{start:42,end:52},stack:[{type:"Twig.expression.type.variable",value:"date",match:["date"],position:{start:42,end:52}}]},{type:"raw",value:`),
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      init() {
        this.updateCountdown();
        setInterval(() => this.updateCountdown(), 1000);
      },
      updateCountdown() {
        const now = new Date().getTime();
        const distance = this.targetDate - now;

        this.days = Math.max(Math.floor(distance / (1000 * 60 * 60 * 24)), 0);
        this.hours = Math.max(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), 0);
        this.minutes = Math.max(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)), 0);
        this.seconds = Math.max(Math.floor((distance % (1000 * 60)) / 1000), 0);
      },
      formatNumber(num) {
        return String(num).padStart(2, '0');
      }
    }" class="countdown flex justify-center gap-3" data-countdown="`,position:{start:52,end:861}},{type:"output",position:{start:861,end:895},stack:[{type:"Twig.expression.type.variable",value:"date",match:["date"],position:{start:861,end:895}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:861,end:895},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:861,end:895}},{type:"Twig.expression.type.string",value:"1678991854",position:{start:861,end:895}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:861,end:895},expression:!1}]}]},{type:"raw",value:`">
    `,position:{start:895,end:902}},{type:"logic",token:{type:"Twig.logic.type.set",key:"items",expression:[{type:"Twig.expression.type.array.start",value:"[",match:["["]},{type:"Twig.expression.type.string",value:"days"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.string",value:"hours"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.string",value:"minutes"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.string",value:"seconds"},{type:"Twig.expression.type.array.end",value:"]",match:["]"]}],position:{start:902,end:989}},position:{start:902,end:989}},{type:"raw",value:"    ",position:{start:990,end:994}},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"item",expression:[{type:"Twig.expression.type.variable",value:"items",match:["items"]}],position:{start:994,end:1017},output:[{type:"raw",value:'      <div class="countdown_item flex flex-col justify-center items-center" x-ref="',position:{start:1018,end:1101}},{type:"output",position:{start:1101,end:1111},stack:[{type:"Twig.expression.type.variable",value:"item",match:["item"],position:{start:1101,end:1111}}]},{type:"raw",value:`">
        <span class="countdown_item_number bg-white text-black font-bold text-2xl p-2 rounded-sm" x-text="formatNumber(`,position:{start:1111,end:1233}},{type:"output",position:{start:1233,end:1243},stack:[{type:"Twig.expression.type.variable",value:"item",match:["item"],position:{start:1233,end:1243}}]},{type:"raw",value:`)"></span>
        <span class="countdown_item_label text-xs font-bold uppercase">`,position:{start:1243,end:1325}},{type:"output",position:{start:1325,end:1335},stack:[{type:"Twig.expression.type.variable",value:"item",match:["item"],position:{start:1325,end:1335}}]},{type:"raw",value:`</span>
      </div>
    `,position:{start:1335,end:1360}}]},position:{open:{start:994,end:1017},close:{start:1360,end:1372}}},{type:"raw",value:`  
</div>
`,position:{start:1373,end:1373}}],precompiled:!0});a.options.allowInlineIncludes=!0;try{let e=t.defaultAttributes?t.defaultAttributes:[];return Array.isArray(e)||(e=Object.entries(e)),i(a.render({attributes:new p(e),...t}))}catch(e){return i("An error occurred whilst rendering /Users/mc_davidvasquez/Mighty_Citizen/fb-ui/src/stories/02-molecules/countdown/countdown.twig: "+e.toString())}},v={title:"Molecules/Countdown"},l=t=>d(t),n=new Date;n.setMonth(n.getMonth()+1);n.setHours(n.getDate()+1);const c=n.getTime(),m={date:c},s=l.bind({});s.args=m;const x=["Countdown"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return \`<div>\${label}</div>\`;
  return twig(args);
}`,...s.parameters?.docs?.source}}};export{s as Countdown,x as __namedExportsOrder,v as default};
