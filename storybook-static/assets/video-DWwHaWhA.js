import{t as a,T as s}from"./iframe-krW4WiQS.js";import{D as r,a as o}from"./twig-OXX08FiC.js";import"./loader-B41Kef4N.js";o(s);s.cache(!1);a.twig({id:"@base/utils/loader/loader.twig",data:[{type:"raw",value:`<div class="loader inline-block relative w-20 h-20">
  <div class="absolute w-full h-full border-8 border-black rounded-full animate-loader border-black border-t-transparent border-r-transparent border-b-transparent"></div>
  <div class="absolute w-full h-full border-8 border-black rounded-full animate-loader animate-delay-75 border-black border-t-transparent border-r-transparent border-b-transparent"></div>
  <div class="absolute w-full h-full border-8 border-black rounded-full animate-loader animate-delay-150 border-black border-t-transparent border-r-transparent border-b-transparent"></div>
</div>

<style>
  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .animate-loader {
    animation: loader 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  }

  .animate-delay-75 {
    animation-delay: -0.3s;
  }

  .animate-delay-150 {
    animation-delay: -0.15s;
  }

  .is-loaded .loader {
    display: none;
  }

  .button .loader {
    width: 3.75rem; /* Tailwind equivalent for rem-calc(15) */
    height: 3.75rem;
    margin-top: -0.25rem; /* rem-calc(-1) */
    margin-left: 2rem; /* rem-calc(8) */
    margin-right: -0.75rem; /* rem-calc(-3) */
    vertical-align: middle;
  }

  .button .loader div {
    border-width: 1px; /* Tailwind equivalent for rem-calc(4) */
  }
</style>
`,position:{start:0,end:0}}],precompiled:!0});const n=e=>e,y=(e={})=>{const i=a.twig({id:"/Users/mc_davidvasquez/Mighty_Citizen/fb-ui/src/stories/01-atoms/video/video.twig",data:[{type:"raw",value:`<figure class="mb-0" x-data="{
	    loading: true,
	    playing: false,
	    player: null,
	    firstPlay: true,
	    videoId: '`,position:{start:0,end:128}},{type:"output",position:{start:128,end:142},stack:[{type:"Twig.expression.type.variable",value:"video_id",match:["video_id"],position:{start:128,end:142}}]},{type:"raw",value:`',
	    trigger: '`,position:{start:142,end:160}},{type:"output",position:{start:160,end:192},stack:[{type:"Twig.expression.type.variable",value:"trigger",match:["trigger"],position:{start:160,end:192}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:160,end:192},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:160,end:192}},{type:"Twig.expression.type.string",value:"click",position:{start:160,end:192}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:160,end:192},expression:!1}]}]},{type:"raw",value:`',
	    videoType: '`,position:{start:192,end:212}},{type:"output",position:{start:212,end:249},stack:[{type:"Twig.expression.type.variable",value:"video_type",match:["video_type"],position:{start:212,end:249}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:212,end:249},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:212,end:249}},{type:"Twig.expression.type.string",value:"youtube",position:{start:212,end:249}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:212,end:249},expression:!1}]}]},{type:"raw",value:`',
	
	    init() {
	      if (window.videoPlayers === undefined) {
	        window.videoPlayers = [];
	      }
	      if (window.videoPlayers.includes(this.videoId)) {
	        return;
	      }
	      window.videoPlayers.push(this.videoId);
	
	      this.videoType === 'youtube' ? this.loadYouTubeAPI() : this.setupVimeoPlayer();
	    },
	
	    loadYouTubeAPI() {
	      // load script instead
	      const tag = document.createElement('script');
	      tag.src = 'https://www.youtube.com/iframe_api';
	      document.body.appendChild(tag);
	
	      if (!window.YT) {
	        window.onYouTubeIframeAPIReady = this.onYouTubeIframeAPIReady.bind(this);
	      } else {
	        this.onYouTubeIframeAPIReady();
	      }
	    },
	
	    onYouTubeIframeAPIReady() {
	      this.player = new YT.Player(this.$refs.player, {
	        videoId: this.videoId,
	        playerVars: {
	          'enablejsapi': 1,
	          'fs': 1,
	          'playlist': this.videoId,
	          'loop': 1,
	          'modestbranding': 1,
	          'autoplay': 0,
	          'controls': 1,
	          'showInfo': 0,
	          'mute': 1,
	          'rel': 0
	        },
	        events: {
	          'onReady': this.onPlayerReady.bind(this),
	          'onStateChange': this.onPlayerStateChange.bind(this)
	        }
	      });
	    },
	
	    setupVimeoPlayer() {
	      const tag = document.createElement('script');
	      tag.src = 'https://player.vimeo.com/api/player.js';
	      tag.onload = this.onVimeoAPIReady.bind(this);
	      document.body.appendChild(tag);
	    },
	
	    onVimeoAPIReady() {
	      const vid = this.$refs.player;
	      const playerId = 'vimeo_' + this.videoId;
	      vid.setAttribute('id', playerId);
	
	      const player = new Vimeo.Player(playerId, { id: this.videoId });
	
	      player.ready().then(() => {
	        this.loading = false;
	        this.setVideoSize();
	        this.player = {
	          play: () => player.play(),
	          pause: () => player.pause()
	        };
	        const iframe = player.element;
	        // set tabindex to -1
	        iframe.setAttribute('tabindex', '-1');
	        `,position:{start:249,end:2367}},{type:"raw",value:`
	
	
	      }).catch(error => {
	        console.error('Error with Vimeo player:', error);
	      });
	
	      player.on('play', () => { this.playing = true; });
	      player.on('pause', () => { this.playing = false; });
	    },
	
	    handleClick() {
	      if (!this.player) return;
	
	      if (this.playing) {
	        this.player.pause();
	      } else {
	        this.player.play();
	      }
	
	      this.playing = !this.playing; // Toggle playing state
	    },
	
	    onPlayerReady() {
	      this.loading = false;
	      this.setVideoSize();
	      if (this.firstPlay && this.trigger !== 'background') {
	        setTimeout(() => { this.player.pauseVideo(); }, 5);
	      }
	
	      this.firstPlay = false;
	      const iframe = this.player.g;
	      // set tabindex to -1
	      iframe.setAttribute('tabindex', '-1');
	
	      this.player.play = () => { this.player.playVideo(); };
	      this.player.pause = () => { this.player.pauseVideo(); };
	    },
	
	    onPlayerStateChange(event) {
	      clearTimeout(this.timeout);
            if (this.firstPlay){
              if (this.trigger !== 'background'){
                setTimeout(() => {
                  this.player.pauseVideo();
                }, 5);
              }

            }            
            switch (event.data){
              case 2:
                this.timeout = setTimeout(() => {
                  switch (event.data){
                    case 2:
                      
                      this.playing = false;                      
                      break;
                    case 1:
                      this.playing = true;                      
                      break;
                  }
                }, 300);
                break;
              case 1:
                if (!this.firstPlay) this.player.unMute();
                this.playing = true;
                break;
            }


            this.firstPlay = false;
	    },
	
	    setVideoSize() {
	      const width = this.$el.clientWidth;
	      const height = this.$el.clientHeight;
	      if (this.videoType === 'youtube') {
	        this.player.setSize(width, (width / 16) * 9);
	      } else {
	        const iframe = this.$refs.player.querySelector('iframe');
	        iframe.style.width = \`\${width}px\`;
	        iframe.style.height = \`\${height}px\`;
	      }
	    }
	  }" x-init="init">
	`,position:{start:2427,end:4793}},{type:"logic",token:{type:"Twig.logic.type.set",key:"overlay_class",expression:[{type:"Twig.expression.type.string",value:"bg-black/30"}],position:{start:4793,end:4832}},position:{start:4793,end:4832}},{type:"raw",value:'	<div class="video_wrapper relative" data-video-trigger="',position:{start:4833,end:4890}},{type:"output",position:{start:4890,end:4922},stack:[{type:"Twig.expression.type.variable",value:"trigger",match:["trigger"],position:{start:4890,end:4922}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:4890,end:4922},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:4890,end:4922}},{type:"Twig.expression.type.string",value:"click",position:{start:4890,end:4922}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:4890,end:4922},expression:!1}]}]},{type:"raw",value:'" data-video-type="',position:{start:4922,end:4941}},{type:"output",position:{start:4941,end:4957},stack:[{type:"Twig.expression.type.variable",value:"video_type",match:["video_type"],position:{start:4941,end:4957}}]},{type:"raw",value:`">
		<button @click="handleClick" x-show="!loading && !playing" class="absolute left-0 top-0 z-20 w-full h-full cursor-pointer `,position:{start:4957,end:5084}},{type:"output",position:{start:5084,end:5103},stack:[{type:"Twig.expression.type.variable",value:"overlay_class",match:["overlay_class"],position:{start:5084,end:5103}}]},{type:"raw",value:`">
			<span class="icon-play text-white text-8xl"></span>
			<span class="sr-only">Pause/Play Video</span>
		</button>
		<div class="video_loader absolute z-20 flex justify-center items-center h-full w-full `,position:{start:5103,end:5310}},{type:"output",position:{start:5310,end:5329},stack:[{type:"Twig.expression.type.variable",value:"overlay_class",match:["overlay_class"],position:{start:5310,end:5329}}]},{type:"raw",value:`" x-show="loading">
			`,position:{start:5329,end:5352}},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@base/utils/loader/loader.twig"}],position:{start:5352,end:5398}},position:{start:5352,end:5398}},{type:"raw",value:`		</div>
		`,position:{start:5399,end:5410}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"image",match:["image"]}],position:{start:5410,end:5424},output:[{type:"raw",value:`			<div class="video_image_wrapper image-size--landscapeCropped z-10" x-show="!playing">
				<img src="`,position:{start:5425,end:5528}},{type:"output",position:{start:5528,end:5543},stack:[{type:"Twig.expression.type.variable",value:"image",match:["image"],position:{start:5528,end:5543}},{type:"Twig.expression.type.key.period",position:{start:5528,end:5543},key:"src"}]},{type:"raw",value:'" alt="',position:{start:5543,end:5550}},{type:"output",position:{start:5550,end:5565},stack:[{type:"Twig.expression.type.variable",value:"image",match:["image"],position:{start:5550,end:5565}},{type:"Twig.expression.type.key.period",position:{start:5550,end:5565},key:"alt"}]},{type:"raw",value:`" class="w-full aspect-video object-cover" loading="lazy">
			</div>
		`,position:{start:5565,end:5636}}]},position:{open:{start:5410,end:5424},close:{start:5636,end:5647}}},{type:"raw",value:`
		<div class="video_container " :class="playing ? 'z-10' : 'z-0 opacity-0 absolute top-0 left-0'">
			<div class="video_player_wrapper">
				<div class="video_player aspect-video" x-ref="player" x-trap="playing" data-video-id="`,position:{start:5648,end:5876}},{type:"output",position:{start:5876,end:5890},stack:[{type:"Twig.expression.type.variable",value:"video_id",match:["video_id"],position:{start:5876,end:5890}}]},{type:"raw",value:`"></div>
			</div>
		</div>
	</div>
	`,position:{start:5890,end:5927}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"caption",match:["caption"]}],position:{start:5927,end:5943},output:[{type:"raw",value:'		<figcaption class="video_caption">',position:{start:5944,end:5980}},{type:"output",position:{start:5980,end:5993},stack:[{type:"Twig.expression.type.variable",value:"caption",match:["caption"],position:{start:5980,end:5993}}]},{type:"raw",value:`</figcaption>
	`,position:{start:5993,end:6008}}]},position:{open:{start:5927,end:5943},close:{start:6008,end:6019}}},{type:"raw",value:`</figure>
`,position:{start:6020,end:6020}}],precompiled:!0});i.options.allowInlineIncludes=!0;try{let t=e.defaultAttributes?e.defaultAttributes:[];return Array.isArray(t)||(t=Object.entries(t)),n(i.render({attributes:new r(t),...e}))}catch(t){return n("An error occurred whilst rendering /Users/mc_davidvasquez/Mighty_Citizen/fb-ui/src/stories/01-atoms/video/video.twig: "+t.toString())}};export{y as t};
