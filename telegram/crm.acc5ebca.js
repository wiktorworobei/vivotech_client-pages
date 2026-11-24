"use strict";(globalThis.webpackChunkvivotech_crm_client||=[]).push([[6376],{27568(r,e,t){var a=t(77411);e.A=void 0;var o=a(t(31199)),n=t(20811);e.A=(0,o.default)((0,n.jsx)("path",{d:"M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9m-1 5v5l4.25 2.52.77-1.28-3.52-2.09V8z"}),"HistoryOutlined")},8793(r,e,t){var a=t(77411);e.A=void 0;var o=a(t(31199)),n=t(20811);e.A=(0,o.default)((0,n.jsx)("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm4 18H6V4h7v5h5zM8 15.01l1.41 1.41L11 14.84V19h2v-4.16l1.59 1.59L16 15.01 12.01 11z"}),"UploadFileOutlined")},22970(r,e,t){t.d(e,{A:()=>p});var a=t(14780),o=t(76061),n=t(18139),i=t(9520),s=t(98970),l=t(28751),c=t(2804),u=t(38268),d=t(26108);function f(r){return(0,d.Ay)("MuiDialogActions",r)}(0,u.A)("MuiDialogActions",["root","spacing"]);var m=t(20811);const b=["className","disableSpacing"],v=(0,l.Ay)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.root,!t.disableSpacing&&e.spacing]}})(({ownerState:r})=>(0,o.A)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!r.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})),p=n.forwardRef(function(r,e){const t=(0,c.A)({props:r,name:"MuiDialogActions"}),{className:n,disableSpacing:l=!1}=t,u=(0,a.A)(t,b),d=(0,o.A)({},t,{disableSpacing:l}),p=(r=>{const{classes:e,disableSpacing:t}=r,a={root:["root",!t&&"spacing"]};return(0,s.A)(a,f,e)})(d);return(0,m.jsx)(v,(0,o.A)({className:(0,i.A)(p.root,n),ownerState:d,ref:e},u))})},87863(r,e,t){t.d(e,{A:()=>H});var a=t(14780),o=t(76061),n=t(18139),i=t(9520),s=t(98970),l=t(54499),c=t(52418),u=t(64107),d=t(9512),f=t(28751),m=t(2804),b=t(38268),v=t(26108);function p(r){return(0,v.Ay)("MuiLinearProgress",r)}(0,b.A)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);var h=t(20811);const g=["className","color","value","valueBuffer","variant"];let A,y,w,S,C,M,x=r=>r;const $=(0,l.i7)(A||(A=x`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),k=(0,l.i7)(y||(y=x`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),L=(0,l.i7)(w||(w=x`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),P=(r,e)=>"inherit"===e?"currentColor":r.vars?r.vars.palette.LinearProgress[`${e}Bg`]:"light"===r.palette.mode?(0,c.a)(r.palette[e].main,.62):(0,c.e$)(r.palette[e].main,.5),B=(0,f.Ay)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.root,e[`color${(0,u.A)(t.color)}`],e[t.variant]]}})(({ownerState:r,theme:e})=>(0,o.A)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:P(e,r.color)},"inherit"===r.color&&"buffer"!==r.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===r.variant&&{backgroundColor:"transparent"},"query"===r.variant&&{transform:"rotate(180deg)"})),I=(0,f.Ay)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.dashed,e[`dashedColor${(0,u.A)(t.color)}`]]}})(({ownerState:r,theme:e})=>{const t=P(e,r.color);return(0,o.A)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===r.color&&{opacity:.3},{backgroundImage:`radial-gradient(${t} 0%, ${t} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},(0,l.AH)(S||(S=x`
    animation: ${0} 3s infinite linear;
  `),L)),j=(0,f.Ay)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.bar,e[`barColor${(0,u.A)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&e.bar1Indeterminate,"determinate"===t.variant&&e.bar1Determinate,"buffer"===t.variant&&e.bar1Buffer]}})(({ownerState:r,theme:e})=>(0,o.A)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===r.color?"currentColor":(e.vars||e).palette[r.color].main},"determinate"===r.variant&&{transition:"transform .4s linear"},"buffer"===r.variant&&{zIndex:1,transition:"transform .4s linear"}),({ownerState:r})=>("indeterminate"===r.variant||"query"===r.variant)&&(0,l.AH)(C||(C=x`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),$)),z=(0,f.Ay)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.bar,e[`barColor${(0,u.A)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&e.bar2Indeterminate,"buffer"===t.variant&&e.bar2Buffer]}})(({ownerState:r,theme:e})=>(0,o.A)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==r.variant&&{backgroundColor:"inherit"===r.color?"currentColor":(e.vars||e).palette[r.color].main},"inherit"===r.color&&{opacity:.3},"buffer"===r.variant&&{backgroundColor:P(e,r.color),transition:"transform .4s linear"}),({ownerState:r})=>("indeterminate"===r.variant||"query"===r.variant)&&(0,l.AH)(M||(M=x`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),k)),H=n.forwardRef(function(r,e){const t=(0,m.A)({props:r,name:"MuiLinearProgress"}),{className:n,color:l="primary",value:c,valueBuffer:f,variant:b="indeterminate"}=t,v=(0,a.A)(t,g),A=(0,o.A)({},t,{color:l,variant:b}),y=(r=>{const{classes:e,variant:t,color:a}=r,o={root:["root",`color${(0,u.A)(a)}`,t],dashed:["dashed",`dashedColor${(0,u.A)(a)}`],bar1:["bar",`barColor${(0,u.A)(a)}`,("indeterminate"===t||"query"===t)&&"bar1Indeterminate","determinate"===t&&"bar1Determinate","buffer"===t&&"bar1Buffer"],bar2:["bar","buffer"!==t&&`barColor${(0,u.A)(a)}`,"buffer"===t&&`color${(0,u.A)(a)}`,("indeterminate"===t||"query"===t)&&"bar2Indeterminate","buffer"===t&&"bar2Buffer"]};return(0,s.A)(o,p,e)})(A),w=(0,d.A)(),S={},C={bar1:{},bar2:{}};if(("determinate"===b||"buffer"===b)&&void 0!==c){S["aria-valuenow"]=Math.round(c),S["aria-valuemin"]=0,S["aria-valuemax"]=100;let r=c-100;"rtl"===w.direction&&(r=-r),C.bar1.transform=`translateX(${r}%)`}if("buffer"===b&&void 0!==f){let r=(f||0)-100;"rtl"===w.direction&&(r=-r),C.bar2.transform=`translateX(${r}%)`}return(0,h.jsxs)(B,(0,o.A)({className:(0,i.A)(y.root,n),ownerState:A,role:"progressbar"},S,{ref:e},v,{children:["buffer"===b?(0,h.jsx)(I,{className:y.dashed,ownerState:A}):null,(0,h.jsx)(j,{className:y.bar1,ownerState:A,style:C.bar1}),"determinate"===b?null:(0,h.jsx)(z,{className:y.bar2,ownerState:A,style:C.bar2})]}))})},20536(r,e,t){let a;t.d(e,{A:()=>d});var o=t(18139),n=t(9887),i=t(18914),s=t(58973);function l(r,e,t,a,n){const[i,l]=o.useState(()=>n&&t?t(r).matches:a?a(r).matches:e);return(0,s.A)(()=>{let e=!0;if(!t)return;const a=t(r),o=()=>{e&&l(a.matches)};return o(),a.addListener(o),()=>{e=!1,a.removeListener(o)}},[r,t]),i}const c=(a||(a=t.t(o,2))).useSyncExternalStore;function u(r,e,t,a,n){const i=o.useCallback(()=>e,[e]),s=o.useMemo(()=>{if(n&&t)return()=>t(r).matches;if(null!==a){const{matches:e}=a(r);return()=>e}return i},[i,r,a,n,t]),[l,u]=o.useMemo(()=>{if(null===t)return[i,()=>()=>{}];const e=t(r);return[()=>e.matches,r=>(e.addListener(r),()=>{e.removeListener(r)})]},[i,t,r]);return c(u,l,s)}function d(r,e={}){const t=(0,i.A)(),a="undefined"!=typeof window&&void 0!==window.matchMedia,{defaultMatches:o=!1,matchMedia:s=(a?window.matchMedia:null),ssrMatchMedia:d=null,noSsr:f=!1}=(0,n.A)({name:"MuiUseMediaQuery",props:e,theme:t});let m="function"==typeof r?r(t):r;return m=m.replace(/^@media( ?)/m,""),(void 0!==c?u:l)(m,o,s,d,f)}}}]);