(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2893:function(e,t,n){Promise.resolve().then(n.bind(n,3762)),Promise.resolve().then(n.bind(n,7777)),Promise.resolve().then(n.bind(n,5290)),Promise.resolve().then(n.bind(n,8014)),Promise.resolve().then(n.bind(n,5273)),Promise.resolve().then(n.bind(n,1775))},3762:function(e,t,n){"use strict";n.d(t,{IntroduceSectionLinkButtonGroup:function(){return s}});var r=n(7437);n(2265);var i=n(1775),o=n(495);let s=()=>(0,r.jsx)(i.n.Consumer,{children:e=>(0,r.jsxs)("div",{className:"flex space-x-4",children:[(0,r.jsx)(o.z,{onClick:()=>e.actions.setPresentSection("instructor"),children:"Instructor"}),(0,r.jsx)(o.z,{onClick:()=>e.actions.setPresentSection("classes"),children:"Classes"})]})})},7777:function(e,t,n){"use strict";n.d(t,{LinkButton:function(){return s}});var r=n(7437);n(2265);var i=n(495),o=n(6463);let s=e=>{let{to:t,children:n,...s}=e,c=(0,o.useRouter)();return(0,r.jsx)(i.z,{onClick:()=>c.push(t),...s,children:n})}},5290:function(e,t,n){"use strict";n.d(t,{SwitchThemeButton:function(){return c}});var r=n(7437);n(2265);var i=n(9512),o=n(495),s=n(7692);let c=e=>{let{theme:t,setTheme:n}=(0,i.F)();return(0,r.jsx)(o.z,{size:"icon",onClick:()=>{n("dark"===t?"light":"dark")},...e,children:"dark"===t?(0,r.jsx)(s.wGo,{}):(0,r.jsx)(s.PJC,{})})}},8014:function(e,t,n){"use strict";n.d(t,{HeaderIcon:function(){return s}});var r=n(7437);n(2265);var i=n(6648),o=n(9512);let s=()=>{let{theme:e}=(0,o.F)();return(0,r.jsxs)("div",{className:"flex w-auto items-center",children:[(0,r.jsx)(i.default,{src:"/svgs/pickpick.svg",alt:"pickpick",width:35,height:35}),"dark"===e&&(0,r.jsx)(i.default,{src:"/icons/logo-dark.png",alt:"Logo",width:60,height:30}),"light"===e&&(0,r.jsx)(i.default,{src:"/icons/logo-light.png",alt:"Logo",width:60,height:30})]})}},495:function(e,t,n){"use strict";n.d(t,{z:function(){return a}});var r=n(7437),i=n(2265),o=n(1538),s=n(2218),c=n(7440);let u=(0,s.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),a=i.forwardRef((e,t)=>{let{className:n,variant:i,size:s,asChild:a=!1,...l}=e,d=a?o.g7:"button";return(0,r.jsx)(d,{className:(0,c.cn)(u({variant:i,size:s,className:n})),ref:t,...l})});a.displayName="Button"},5273:function(e,t,n){"use strict";n.d(t,{Tabs:function(){return c},TabsContent:function(){return l},TabsList:function(){return u},TabsTrigger:function(){return a}});var r=n(7437),i=n(2265),o=n(822),s=n(7440);let c=o.fC,u=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,r.jsx)(o.aV,{ref:t,className:(0,s.cn)("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",n),...i})});u.displayName=o.aV.displayName;let a=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,r.jsx)(o.xz,{ref:t,className:(0,s.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",n),...i})});a.displayName=o.xz.displayName;let l=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,r.jsx)(o.VY,{ref:t,className:(0,s.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",n),...i})});l.displayName=o.VY.displayName},7440:function(e,t,n){"use strict";n.d(t,{cn:function(){return o}});var r=n(4839),i=n(6164);function o(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,i.m6)((0,r.W)(t))}},1775:function(e,t,n){"use strict";n.d(t,{MainScrollProvider:function(){return a},n:function(){return u}});var r=n(7437),i=n(2265);let o=["introduce","instructor","classes"];function s(e){return o[Math.min(o.indexOf(e)+1,o.length-1)]}function c(e){return o[Math.max(o.indexOf(e)-1,0)]}let u=(0,i.createContext)({state:{presentSection:"introduce"},actions:{setPresentSection:e=>{}}}),a=e=>{let{children:t}=e;(0,i.useEffect)(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow="auto"}),[]);let[n,o]=(0,i.useState)("introduce");(0,i.useEffect)(()=>{let e=document.getElementById(n);e&&e.scrollIntoView({behavior:"smooth"})},[n]);let a=(0,i.useRef)(null),l=(0,i.useRef)(null),d=(0,i.useCallback)(e=>{if(a.current&&clearTimeout(a.current),a.current=setTimeout(()=>{l.current=null},100),l.current===e.target)return;l.current=e.target;let t=e.deltaY>0?"down":"up";"down"===t&&o(s(n)),"up"===t&&o(c(n))},[n]);(0,i.useEffect)(()=>(window.addEventListener("wheel",d),()=>{window.removeEventListener("wheel",d)}),[d]);let f=(0,i.useRef)(0),v=(0,i.useRef)(0),h=(0,i.useRef)(0),m=(0,i.useCallback)(e=>{window.scroll(0,window.scrollY-e.touches[0].clientY+h.current),h.current=e.touches[0].clientY},[]),g=(0,i.useCallback)(e=>{f.current=h.current=e.touches[0].clientY,v.current=Date.now(),window.addEventListener("touchmove",m)},[m]),b=(0,i.useCallback)(e=>{let t=e.changedTouches[0].clientY,r=window.innerHeight,i=(Date.now()-v.current)/1e3;if(t-f.current>r/Math.max(4,1/i))o(c(n));else if(f.current-t>Math.max(4,1/i))o(s(n));else{let e=document.getElementById(n);e&&e.scrollIntoView({behavior:"smooth"})}f.current=0,window.removeEventListener("touchmove",m)},[m,n]);return(0,i.useEffect)(()=>(window.addEventListener("touchstart",g),window.addEventListener("touchend",b),()=>{window.removeEventListener("touchstart",g),window.removeEventListener("touchend",b)}),[g,b]),(0,r.jsx)(u.Provider,{value:{state:{presentSection:n},actions:{setPresentSection:o}},children:t})}}},function(e){e.O(0,[665,445,971,23,744],function(){return e(e.s=2893)}),_N_E=e.O()}]);