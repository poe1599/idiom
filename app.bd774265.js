(function(e){function t(t){for(var i,o,s=t[0],a=t[1],u=t[2],l=0,d=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],i=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(i=!1)}i&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},o={app:0},r={app:0},c=[];function s(e){return a.p+"js/"+({index:"index"}[e]||e)+"."+{index:"f1db882f"}[e]+".js"}function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n={index:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var i="css/"+({index:"index"}[e]||e)+"."+{index:"5ab6e921"}[e]+".css",r=a.p+i,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var u=c[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===i||l===r))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===i||l===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var i=t&&t.target&&t.target.src||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=i,delete o[e],f.parentNode.removeChild(f),n(c)},f.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var i=r[e];if(0!==i)if(i)t.push(i[2]);else{var c=new Promise((function(t,n){i=r[e]=[t,n]}));t.push(i[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.src=s(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",d.name="ChunkLoadError",d.type=i,d.request=o,n[1](d)}r[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/idiom/",a.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0606":function(e,t,n){"use strict";n("535d")},1564:function(e,t,n){"use strict";n("b475")},1777:function(e,t,n){"use strict";n("313f")},"313f":function(e,t,n){},"42df":function(e,t,n){},"52c3":function(e,t,n){"use strict";n("70a6")},"535d":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("4d90"),n("ac1f"),n("5319"),n("d3b7"),n("25f0"),n("99af"),n("2d26"),n("96cf");var i=n("a026"),o=n("3280"),r=n.n(o),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],a=(n("52c3"),n("abd0"),n("1564"),n("2877")),u={},l=Object(a["a"])(u,c,s,!1,null,null,null),d=l.exports,f=(n("3ca3"),n("ddb0"),n("8c4f"));i["a"].use(f["a"]);var p=[{path:"/",name:"index",component:function(){return n.e("index").then(n.bind(null,"1e4b"))}}],h=new f["a"]({mode:"history",base:"/idiom/",routes:p}),v=h,m=n("2f62");i["a"].use(m["a"]);var g=new m["a"].Store({state:{},mutations:{},actions:{},modules:{}}),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"dompurify-html",rawName:"v-dompurify-html",value:e.icon,expression:"icon"}],ref:"svgIcon",staticClass:"svgIcon",style:{height:""+e.height,width:""+e.width},on:{click:e.clickIcon}})},y=[],w=(n("a9e3"),n("466d"),{name:"SvgIcon",props:{disable:{type:Boolean,default:!1},active:{type:Boolean,default:!1},type:{type:Number,default:1},item:{type:Object,default:function(){return{}}},iconName:{type:String,default:"cross"},w:{type:String,default:"16px"},h:{type:String,default:"16px"},color:{type:String,default:"#000000"}},data:function(){return{icon:"",height:{type:String,default:""},width:{type:String,default:""}}},computed:{iconSrc:function(){var e=n("7906")("./".concat(this.iconName,".svg"));return e}},watch:{iconSrc:{immediate:!0,handler:function(){this.init()},deep:!0},w:{immediate:!0,handler:function(){this.init()},deep:!0},h:{immediate:!0,handler:function(){this.init()},deep:!0}},mounted:function(){this.init()},methods:{clickIcon:function(){this.$emit("click",this.item)},init:function(){var e=this;this.iconSrc&&(this.height=this.h,this.width=this.w,this.height.match(/^[0-9]+$/)&&(this.height+="px"),this.width.match(/^[0-9]+$/)&&(this.width+="px"),this.icon=this.iconSrc.default.content.replace("symbol","svg"),this.$nextTick((function(){e.$refs.svgIcon&&(e.$refs.svgIcon.querySelector("svg").removeAttribute("fill"),e.$refs.svgIcon.querySelector("svg").setAttribute("width","".concat(e.width)),e.$refs.svgIcon.querySelector("svg").setAttribute("height","".concat(e.height)))})))}}}),x=w,_=(n("0606"),Object(a["a"])(x,b,y,!1,null,"3347f49c",null)),O=_.exports,S=n("53ca"),C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.isOpen,expression:"isOpen"}],ref:"confirmBox",staticClass:"wrapper",attrs:{id:"confirmBox"}},[n("transition",{attrs:{name:"expand"}},[e.isOpen?n("div",{staticClass:"box",style:{width:e.width}},[e.title?n("div",{staticClass:"box__titleItem"},[e._v(e._s(e.title))]):e._e(),e.htmlContent?n("div",{directives:[{name:"dompurify-html",rawName:"v-dompurify-html",value:e.htmlContent,expression:"htmlContent"}],staticClass:"box__content",style:{textAlign:e.textAlign}}):n("div",{staticClass:"box__content",style:{textAlign:e.textAlign}},[e._v(" "+e._s(e.content)+" ")]),e.allowToClose?n("div",{staticClass:"box__buttonGroup"},e._l(e.buttonText,(function(t,i){return n("button",{key:"confirmButton-"+(i+1),class:{"S-button--sub":e.buttonText.length>1&&0===i,"S-button--main":1===e.buttonText.length||1===i},attrs:{id:"confirmButton-"+(i+1)},on:{click:function(t){return e.btnClick(i+1)}}},[e._v(" "+e._s(t)+" ")])})),0):e._e()]):e._e()])],1)},E=[],B={name:"ConfirmBox",props:{title:{type:String,default:""},content:{type:String,default:""},htmlContent:{type:String,default:""},buttonText:{type:Array,default:function(){return["取消","確認"]}},textAlign:{type:String,default:""},width:{type:String,default:""},fn1:{type:Function,default:function(){this.isOpen=!1}},fn2:{type:Function,default:function(){this.isOpen=!1}},hasCloseBtn:{type:Boolean,default:!1},allowToClose:{type:Boolean,default:!0}},data:function(){return{isOpen:!1,resolve:"",reject:"",promise:""}},watch:{isOpen:function(e){e?document.body.classList.add("hideScroll"):document.body.classList.remove("hideScroll")}},methods:{btnClick:function(e){this.isOpen=!1;var t="fn".concat(e);this[t]()},openConfirmBox:function(){var e=this;return this.isOpen=!0,this.promise=new Promise((function(t,n){e.resolve=t,e.reject=n})),this.promise},forceClose:function(){this.isOpen=!1},destroy:function(){this.$destroy();var e=document.getElementById("confirmBox");e.removeChild(this.$el)}}},j=B,k=(n("1777"),Object(a["a"])(j,C,E,!1,null,"a664f5a8",null)),N=k.exports,A={install:function(e){var t,n=e.extend(N),i=function(){t=new n;var e=t.$mount().$el;document.body.appendChild(e)};e.prototype.$confirmBox={show:function(e){var n={title:"",content:"訊息內容",htmlContent:"",buttonText:["取消","確認"],textAlign:"",width:"",hasCloseBtn:!1,fn1:function(){this.isOpen=!1},fn2:function(){this.isOpen=!1}};return t||i(),Object.assign(t,n),"string"===typeof e?t.content=e:"object"===Object(S["a"])(e)&&Object.assign(t,e),t.openConfirmBox().then((function(e){return t=null,Promise.resolve(e)})).catch((function(e){return t=null,Promise.reject(e)}))},hide:function(){t.forceClose()}}}},T=A,D=n("84a2"),I=n.n(D),L=(i["a"].directive("scroll",{inserted:function(e,t){var n=function n(i){t.value(i,e)&&window.removeEventListener("scroll",n)};window.addEventListener("scroll",I()(n,100))}}),i["a"].directive("clickOutside",{bind:function(e,t){function n(n){if(e.contains(n.target))return!1;t.expression&&t.value(n)}e.__vueClickOutside__=n,document.addEventListener("click",n)},unbind:function(e){document.removeEventListener("click",e.__vueClickOutside__),delete e.__vueClickOutside__}}));i["a"].config.productionTip=!1,i["a"].component("Icon",O),i["a"].use(L),i["a"].use(T),i["a"].use(r.a,{hooks:{afterSanitizeAttributes:function(e){"target"in e&&e.setAttribute("target","_blank")}}});var P=Object({NODE_ENV:"production",BASE_URL:"/idiom/"}),$=P.NODE_ENV,M=P.VUE_APP_URL_ENV;t["default"]=new i["a"]({router:v,store:g,render:function(e){return e(d)}}).$mount("#app");function q(){var e=new Date,t=e.getFullYear(),n=String(e.getMonth()+1),i=n.padStart(2,"0"),o=String(e.getDate()),r=o.padStart(2,"0"),c=String(e.getHours()),s=c.padStart(2,"0"),a=String(e.getMinutes()),u=a.padStart(2,"0"),l=Date.now();"undefined"!==typeof performance&&"function"===typeof performance.now&&(l+=performance.now());var d="xxxx".replace(/[x]/g,(function(e){var t=(l+16*Math.random())%16|0;return l=Math.floor(l/16),("x"===e?t:3&t|8).toString(16)}));return"".concat(t).concat(i).concat(r,"-").concat(d).concat(s).concat(u)}var U=n("9224"),V=U.version,R=q();if("production"===$&&"SIT"!==M)console.log("%cBUILD_VERSION: ".concat(M," v").concat(V),"color:DodgerBlue"),console.log("%cBUILD_TIME_STAMP: ".concat(R),"color:DodgerBlue");else{console.log("%cThe app info shows only in non-production environment.","color:DodgerBlue");var z="%c    TIME_STAMP_VERSION: ".concat(R);for(var F in console.log(z,"color:DodgerBlue"),Object({NODE_ENV:"production",BASE_URL:"/idiom/"}))if(Object.prototype.hasOwnProperty.call(Object({NODE_ENV:"production",BASE_URL:"/idiom/"}),F)){var J=Object({NODE_ENV:"production",BASE_URL:"/idiom/"})[F];console.log("%c    ".concat(F,": ").concat(J),"color:DodgerBlue")}console.log("%cThe app info ends.","color:DodgerBlue")}},"70a6":function(e,t,n){},7906:function(e,t,n){var i={"./question.svg":"7d62"};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}o.keys=function(){return Object.keys(i)},o.resolve=r,e.exports=o,o.id="7906"},"7d62":function(e,t,n){"use strict";n.r(t);var i=n("e017"),o=n.n(i),r=n("21a1"),c=n.n(r),s=new o.a({id:"question",use:"question-usage",viewBox:"0 0 512 512",content:'<symbol aria-hidden="true" class="svg-inline--fa fa-question-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="question"><path fill="currentColor" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z" /></symbol>'});c.a.add(s);t["default"]=s},9224:function(e){e.exports=JSON.parse('{"name":"idiom","version":"0.1.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"core-js":"^3.6.5","dayjs":"^1.10.4","lodash.debounce":"^4.0.8","lodash.throttle":"^4.1.1","postcss":"^8.3.11","postcss-scss":"^4.0.2","qrcode":"^1.4.4","regenerator-runtime":"^0.13.7","register-service-worker":"^1.7.2","secure-ls":"^1.2.6","ua-parser-js":"^1.0.2","vue":"^2.6.11","vue-content-loader":"^0.2.3","vue-dompurify-html":"^2.3.0","vue-router":"^3.2.0","vue-signature-pad":"2.0.4","vuex":"^3.4.0","vuex-persistedstate":"^4.0.0-beta.3"},"devDependencies":{"@babel/core":"^7.16.5","@babel/eslint-parser":"^7.16.5","@vue/cli-plugin-babel":"~4.5.15","@vue/cli-plugin-router":"~4.5.15","@vue/cli-plugin-vuex":"~4.5.15","@vue/cli-service":"~4.5.15","@vue/eslint-config-airbnb":"^6.0.0","eslint":"^8.6.0","eslint-config-prettier":"^8.1.0","eslint-import-resolver-webpack":"^0.13.0","eslint-plugin-flowtype":"^8.0.3","eslint-plugin-import":"^2.20.2","eslint-plugin-prettier":"^3.3.1","eslint-plugin-vue":"^8.2.0","postcss-html":"^1.2.0","prettier":"^2.2.1","sass":"^1.26.11","sass-loader":"^10.0.2","stylelint":"^14.1.0","stylelint-config-prettier":"^9.0.3","stylelint-config-recommended-vue":"^1.0.0","stylelint-config-sass-guidelines":"^9.0.1","stylelint-config-standard":"^24.0.0","stylelint-order":"^5.0.0","stylelint-scss":"^4.0.0","svg-sprite-loader":"^6.0.5","vue-template-compiler":"^2.6.11","webpack":"^4.44.2","webpack-bundle-analyzer":"^4.4.0"}}')},abd0:function(e,t,n){"use strict";n("42df")},b475:function(e,t,n){}});