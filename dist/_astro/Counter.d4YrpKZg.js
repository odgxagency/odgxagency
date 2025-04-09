import{j as et}from"./jsx-runtime.D_zvdyIk.js";import{a as st,r as M}from"./index.B7Ka2zNO.js";import{a as ot,g as ut}from"./_commonjsHelpers.D6-XlEtG.js";var K={},Z=function(){return Z=Object.assign||function(r){for(var a,o=1,u=arguments.length;o<u;o++)for(var e in a=arguments[o])Object.prototype.hasOwnProperty.call(a,e)&&(r[e]=a[e]);return r},Z.apply(this,arguments)},lt=function(){function r(a,o,u){var e=this;this.endVal=o,this.options=u,this.version="2.8.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(l){e.startTime||(e.startTime=l);var f=l-e.startTime;e.remaining=e.duration-f,e.useEasing?e.countDown?e.frameVal=e.startVal-e.easingFn(f,0,e.startVal-e.endVal,e.duration):e.frameVal=e.easingFn(f,e.startVal,e.endVal-e.startVal,e.duration):e.frameVal=e.startVal+(e.endVal-e.startVal)*(f/e.duration);var c=e.countDown?e.frameVal<e.endVal:e.frameVal>e.endVal;e.frameVal=c?e.endVal:e.frameVal,e.frameVal=Number(e.frameVal.toFixed(e.options.decimalPlaces)),e.printValue(e.frameVal),f<e.duration?e.rAF=requestAnimationFrame(e.count):e.finalEndVal!==null?e.update(e.finalEndVal):e.options.onCompleteCallback&&e.options.onCompleteCallback()},this.formatNumber=function(l){var f,c,h,m,g=l<0?"-":"";f=Math.abs(l).toFixed(e.options.decimalPlaces);var w=(f+="").split(".");if(c=w[0],h=w.length>1?e.options.decimal+w[1]:"",e.options.useGrouping){m="";for(var C=3,P=0,E=0,z=c.length;E<z;++E)e.options.useIndianSeparators&&E===4&&(C=2,P=1),E!==0&&P%C==0&&(m=e.options.separator+m),P++,m=c[z-E-1]+m;c=m}return e.options.numerals&&e.options.numerals.length&&(c=c.replace(/[0-9]/g,function(x){return e.options.numerals[+x]}),h=h.replace(/[0-9]/g,function(x){return e.options.numerals[+x]})),g+e.options.prefix+c+h+e.options.suffix},this.easeOutExpo=function(l,f,c,h){return c*(1-Math.pow(2,-10*l/h))*1024/1023+f},this.options=Z(Z({},this.defaults),u),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(o),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,this.options.separator===""&&(this.options.useGrouping=!1),this.el=typeof a=="string"?document.getElementById(a):a,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined",typeof window<"u"&&this.options.enableScrollSpy&&(this.error?console.error(this.error,a):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return e.handleScroll(e)}),window.onscroll=function(){window.onScrollFns.forEach(function(l){return l()})},this.handleScroll(this)))}return r.prototype.handleScroll=function(a){if(a&&window&&!a.once){var o=window.innerHeight+window.scrollY,u=a.el.getBoundingClientRect(),e=u.top+window.pageYOffset,l=u.top+u.height+window.pageYOffset;l<o&&l>window.scrollY&&a.paused?(a.paused=!1,setTimeout(function(){return a.start()},a.options.scrollSpyDelay),a.options.scrollSpyOnce&&(a.once=!0)):(window.scrollY>l||e>o)&&!a.paused&&a.reset()}},r.prototype.determineDirectionAndSmartEasing=function(){var a=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>a;var o=a-this.startVal;if(Math.abs(o)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=a;var u=this.countDown?1:-1;this.endVal=a+u*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=a,this.finalEndVal=null;this.finalEndVal!==null?this.useEasing=!1:this.useEasing=this.options.useEasing},r.prototype.start=function(a){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),a&&(this.options.onCompleteCallback=a),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},r.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},r.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},r.prototype.update=function(a){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(a),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal==null&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},r.prototype.printValue=function(a){var o;if(this.el){var u=this.formattingFn(a);!((o=this.options.plugin)===null||o===void 0)&&o.render?this.options.plugin.render(this.el,u):this.el.tagName==="INPUT"?this.el.value=u:this.el.tagName==="text"||this.el.tagName==="tspan"?this.el.textContent=u:this.el.innerHTML=u}},r.prototype.ensureNumber=function(a){return typeof a=="number"&&!isNaN(a)},r.prototype.validateValue=function(a){var o=Number(a);return this.ensureNumber(o)?o:(this.error="[CountUp] invalid start or end value: ".concat(a),null)},r.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},r}();const ct=Object.freeze(Object.defineProperty({__proto__:null,CountUp:lt},Symbol.toStringTag,{value:"Module"})),ft=ot(ct);var nt;function dt(){if(nt)return K;nt=1,Object.defineProperty(K,"__esModule",{value:!0});var r=st(),a=ft;function o(i,t){var n=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(n!=null){var s,d,p,R,S=[],y=!0,b=!1;try{if(p=(n=n.call(i)).next,t!==0)for(;!(y=(s=p.call(n)).done)&&(S.push(s.value),S.length!==t);y=!0);}catch(V){b=!0,d=V}finally{try{if(!y&&n.return!=null&&(R=n.return(),Object(R)!==R))return}finally{if(b)throw d}}return S}}function u(i,t){var n=Object.keys(i);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(i);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(i,d).enumerable})),n.push.apply(n,s)}return n}function e(i){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?u(Object(n),!0).forEach(function(s){c(i,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach(function(s){Object.defineProperty(i,s,Object.getOwnPropertyDescriptor(n,s))})}return i}function l(i,t){if(typeof i!="object"||!i)return i;var n=i[Symbol.toPrimitive];if(n!==void 0){var s=n.call(i,t);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(i)}function f(i){var t=l(i,"string");return typeof t=="symbol"?t:String(t)}function c(i,t,n){return t=f(t),t in i?Object.defineProperty(i,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):i[t]=n,i}function h(){return h=Object.assign?Object.assign.bind():function(i){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=n[s])}return i},h.apply(this,arguments)}function m(i,t){if(i==null)return{};var n={},s=Object.keys(i),d,p;for(p=0;p<s.length;p++)d=s[p],!(t.indexOf(d)>=0)&&(n[d]=i[d]);return n}function g(i,t){if(i==null)return{};var n=m(i,t),s,d;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(i);for(d=0;d<p.length;d++)s=p[d],!(t.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(i,s)&&(n[s]=i[s])}return n}function w(i,t){return C(i)||o(i,t)||P(i,t)||z()}function C(i){if(Array.isArray(i))return i}function P(i,t){if(i){if(typeof i=="string")return E(i,t);var n=Object.prototype.toString.call(i).slice(8,-1);if(n==="Object"&&i.constructor&&(n=i.constructor.name),n==="Map"||n==="Set")return Array.from(i);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return E(i,t)}}function E(i,t){(t==null||t>i.length)&&(t=i.length);for(var n=0,s=new Array(t);n<t;n++)s[n]=i[n];return s}function z(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var x=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?r.useLayoutEffect:r.useEffect;function v(i){var t=r.useRef(i);return x(function(){t.current=i}),r.useCallback(function(){for(var n=arguments.length,s=new Array(n),d=0;d<n;d++)s[d]=arguments[d];return t.current.apply(void 0,s)},[])}var A=function(t,n){var s=n.decimal,d=n.decimals,p=n.duration,R=n.easingFn,S=n.end,y=n.formattingFn,b=n.numerals,V=n.prefix,_=n.separator,N=n.start,G=n.suffix,$=n.useEasing,U=n.useGrouping,F=n.useIndianSeparators,B=n.enableScrollSpy,O=n.scrollSpyDelay,L=n.scrollSpyOnce,I=n.plugin;return new a.CountUp(t,S,{startVal:N,duration:p,decimal:s,decimalPlaces:d,easingFn:R,formattingFn:y,numerals:b,separator:_,prefix:V,suffix:G,plugin:I,useEasing:$,useIndianSeparators:F,useGrouping:U,enableScrollSpy:B,scrollSpyDelay:O,scrollSpyOnce:L})},T=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],J={decimal:".",separator:",",delay:null,prefix:"",suffix:"",duration:2,start:0,decimals:0,startOnMount:!0,enableReinitialize:!0,useEasing:!0,useGrouping:!0,useIndianSeparators:!1},q=function(t){var n=Object.fromEntries(Object.entries(t).filter(function(j){var H=w(j,2),Q=H[1];return Q!==void 0})),s=r.useMemo(function(){return e(e({},J),n)},[t]),d=s.ref,p=s.startOnMount,R=s.enableReinitialize,S=s.delay,y=s.onEnd,b=s.onStart,V=s.onPauseResume,_=s.onReset,N=s.onUpdate,G=g(s,T),$=r.useRef(),U=r.useRef(),F=r.useRef(!1),B=v(function(){return A(typeof d=="string"?d:d.current,G)}),O=v(function(j){var H=$.current;if(H&&!j)return H;var Q=B();return $.current=Q,Q}),L=v(function(){var j=function(){return O(!0).start(function(){y?.({pauseResume:I,reset:D,start:W,update:Y})})};S&&S>0?U.current=setTimeout(j,S*1e3):j(),b?.({pauseResume:I,reset:D,update:Y})}),I=v(function(){O().pauseResume(),V?.({reset:D,start:W,update:Y})}),D=v(function(){O().el&&(U.current&&clearTimeout(U.current),O().reset(),_?.({pauseResume:I,start:W,update:Y}))}),Y=v(function(j){O().update(j),N?.({pauseResume:I,reset:D,start:W})}),W=v(function(){D(),L()}),k=v(function(j){p&&(j&&D(),L())});return r.useEffect(function(){F.current?R&&k(!0):(F.current=!0,k())},[R,F,k,S,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.formattingFn]),r.useEffect(function(){return function(){D()}},[D]),{start:W,pauseResume:I,reset:D,update:Y,getCountUp:O}},it=["className","redraw","containerProps","children","style"],at=function(t){var n=t.className,s=t.redraw,d=t.containerProps,p=t.children,R=t.style,S=g(t,it),y=r.useRef(null),b=r.useRef(!1),V=q(e(e({},S),{},{ref:y,startOnMount:typeof p!="function"||t.delay===0,enableReinitialize:!1})),_=V.start,N=V.reset,G=V.update,$=V.pauseResume,U=V.getCountUp,F=v(function(){_()}),B=v(function(I){t.preserveValue||N(),G(I)}),O=v(function(){if(typeof t.children=="function"&&!(y.current instanceof Element)){console.error(`Couldn't find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.`);return}U()});r.useEffect(function(){O()},[O]),r.useEffect(function(){b.current&&B(t.end)},[t.end,B]);var L=s&&t;return r.useEffect(function(){s&&b.current&&F()},[F,s,L]),r.useEffect(function(){!s&&b.current&&F()},[F,s,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.className,t.formattingFn]),r.useEffect(function(){b.current=!0},[]),typeof p=="function"?p({countUpRef:y,start:_,reset:N,update:G,pauseResume:$,getCountUp:U}):r.createElement("span",h({className:n,ref:y,style:R},d),typeof t.start<"u"?U().formattingFn(t.start):"")};return K.default=at,K.useCountUp=q,K}var ht=dt();const pt=ut(ht);var tt=new Map,X=new WeakMap,rt=0,mt=void 0;function gt(r){return r?(X.has(r)||(rt+=1,X.set(r,rt.toString())),X.get(r)):"0"}function vt(r){return Object.keys(r).sort().filter(a=>r[a]!==void 0).map(a=>`${a}_${a==="root"?gt(r.root):r[a]}`).toString()}function yt(r){const a=vt(r);let o=tt.get(a);if(!o){const u=new Map;let e;const l=new IntersectionObserver(f=>{f.forEach(c=>{var h;const m=c.isIntersecting&&e.some(g=>c.intersectionRatio>=g);r.trackVisibility&&typeof c.isVisible>"u"&&(c.isVisible=m),(h=u.get(c.target))==null||h.forEach(g=>{g(m,c)})})},r);e=l.thresholds||(Array.isArray(r.threshold)?r.threshold:[r.threshold||0]),o={id:a,observer:l,elements:u},tt.set(a,o)}return o}function bt(r,a,o={},u=mt){if(typeof window.IntersectionObserver>"u"&&u!==void 0){const h=r.getBoundingClientRect();return a(u,{isIntersecting:u,target:r,intersectionRatio:typeof o.threshold=="number"?o.threshold:0,time:0,boundingClientRect:h,intersectionRect:h,rootBounds:h}),()=>{}}const{id:e,observer:l,elements:f}=yt(o),c=f.get(r)||[];return f.has(r)||f.set(r,c),c.push(a),l.observe(r),function(){c.splice(c.indexOf(a),1),c.length===0&&(f.delete(r),l.unobserve(r)),f.size===0&&(l.disconnect(),tt.delete(e))}}function Vt({threshold:r,delay:a,trackVisibility:o,rootMargin:u,root:e,triggerOnce:l,skip:f,initialInView:c,fallbackInView:h,onChange:m}={}){var g;const[w,C]=M.useState(null),P=M.useRef(m),[E,z]=M.useState({inView:!!c,entry:void 0});P.current=m,M.useEffect(()=>{if(f||!w)return;let T;return T=bt(w,(J,q)=>{z({inView:J,entry:q}),P.current&&P.current(J,q),q.isIntersecting&&l&&T&&(T(),T=void 0)},{root:e,rootMargin:u,threshold:r,trackVisibility:o,delay:a},h),()=>{T&&T()}},[Array.isArray(r)?r.toString():r,w,e,u,l,f,o,h,a]);const x=(g=E.entry)==null?void 0:g.target,v=M.useRef(void 0);!w&&x&&!l&&!f&&v.current!==x&&(v.current=x,z({inView:!!c,entry:void 0}));const A=[C,E.inView,E.entry];return A.ref=A[0],A.inView=A[1],A.entry=A[2],A}const Ot=({count:r,suffix:a,prefix:o,duration:u,className:e,start:l,end:f})=>{const{ref:c,inView:h}=Vt({threshold:0,triggerOnce:!0}),[m,g]=M.useState(l),[w,C]=M.useState(f);return M.useEffect(()=>{h?(g(l),C(f)):(g(f),C(l))},[h,l,f]),et.jsx("span",{ref:c,children:h&&et.jsx(pt,{...u&&{duration:u},prefix:o,className:`${e}`,end:r?+r:w,suffix:a,start:m})})};export{Ot as default};
