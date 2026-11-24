"use strict";(globalThis.webpackChunkvivotech_crm_client||=[]).push([[5447],{99649(e,r,a){var t=a(77411);r.A=void 0;var o=t(a(31199)),n=a(20811);r.A=(0,o.default)((0,n.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore")},87863(e,r,a){a.d(r,{A:()=>j});var t=a(14780),o=a(76061),n=a(18139),i=a(9520),s=a(98970),l=a(54499),c=a(52418),d=a(64107),u=a(9512),m=a(28751),b=a(2804),p=a(38268),f=a(26108);function v(e){return(0,f.Ay)("MuiLinearProgress",e)}(0,p.A)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);var A=a(20811);const h=["className","color","value","valueBuffer","variant"];let y,g,w,C,k,x,M=e=>e;const S=(0,l.i7)(y||(y=M`
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
`)),$=(0,l.i7)(g||(g=M`
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
`)),R=(0,l.i7)(w||(w=M`
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
`)),N=(e,r)=>"inherit"===r?"currentColor":e.vars?e.vars.palette.LinearProgress[`${r}Bg`]:"light"===e.palette.mode?(0,c.a)(e.palette[r].main,.62):(0,c.e$)(e.palette[r].main,.5),T=(0,m.Ay)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.root,r[`color${(0,d.A)(a.color)}`],r[a.variant]]}})(({ownerState:e,theme:r})=>(0,o.A)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:N(r,e.color)},"inherit"===e.color&&"buffer"!==e.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===e.variant&&{backgroundColor:"transparent"},"query"===e.variant&&{transform:"rotate(180deg)"})),H=(0,m.Ay)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.dashed,r[`dashedColor${(0,d.A)(a.color)}`]]}})(({ownerState:e,theme:r})=>{const a=N(r,e.color);return(0,o.A)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===e.color&&{opacity:.3},{backgroundImage:`radial-gradient(${a} 0%, ${a} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},(0,l.AH)(C||(C=M`
    animation: ${0} 3s infinite linear;
  `),R)),B=(0,m.Ay)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.bar,r[`barColor${(0,d.A)(a.color)}`],("indeterminate"===a.variant||"query"===a.variant)&&r.bar1Indeterminate,"determinate"===a.variant&&r.bar1Determinate,"buffer"===a.variant&&r.bar1Buffer]}})(({ownerState:e,theme:r})=>(0,o.A)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===e.color?"currentColor":(r.vars||r).palette[e.color].main},"determinate"===e.variant&&{transition:"transform .4s linear"},"buffer"===e.variant&&{zIndex:1,transition:"transform .4s linear"}),({ownerState:e})=>("indeterminate"===e.variant||"query"===e.variant)&&(0,l.AH)(k||(k=M`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),S)),P=(0,m.Ay)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.bar,r[`barColor${(0,d.A)(a.color)}`],("indeterminate"===a.variant||"query"===a.variant)&&r.bar2Indeterminate,"buffer"===a.variant&&r.bar2Buffer]}})(({ownerState:e,theme:r})=>(0,o.A)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==e.variant&&{backgroundColor:"inherit"===e.color?"currentColor":(r.vars||r).palette[e.color].main},"inherit"===e.color&&{opacity:.3},"buffer"===e.variant&&{backgroundColor:N(r,e.color),transition:"transform .4s linear"}),({ownerState:e})=>("indeterminate"===e.variant||"query"===e.variant)&&(0,l.AH)(x||(x=M`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),$)),j=n.forwardRef(function(e,r){const a=(0,b.A)({props:e,name:"MuiLinearProgress"}),{className:n,color:l="primary",value:c,valueBuffer:m,variant:p="indeterminate"}=a,f=(0,t.A)(a,h),y=(0,o.A)({},a,{color:l,variant:p}),g=(e=>{const{classes:r,variant:a,color:t}=e,o={root:["root",`color${(0,d.A)(t)}`,a],dashed:["dashed",`dashedColor${(0,d.A)(t)}`],bar1:["bar",`barColor${(0,d.A)(t)}`,("indeterminate"===a||"query"===a)&&"bar1Indeterminate","determinate"===a&&"bar1Determinate","buffer"===a&&"bar1Buffer"],bar2:["bar","buffer"!==a&&`barColor${(0,d.A)(t)}`,"buffer"===a&&`color${(0,d.A)(t)}`,("indeterminate"===a||"query"===a)&&"bar2Indeterminate","buffer"===a&&"bar2Buffer"]};return(0,s.A)(o,v,r)})(y),w=(0,u.A)(),C={},k={bar1:{},bar2:{}};if(("determinate"===p||"buffer"===p)&&void 0!==c){C["aria-valuenow"]=Math.round(c),C["aria-valuemin"]=0,C["aria-valuemax"]=100;let e=c-100;"rtl"===w.direction&&(e=-e),k.bar1.transform=`translateX(${e}%)`}if("buffer"===p&&void 0!==m){let e=(m||0)-100;"rtl"===w.direction&&(e=-e),k.bar2.transform=`translateX(${e}%)`}return(0,A.jsxs)(T,(0,o.A)({className:(0,i.A)(g.root,n),ownerState:y,role:"progressbar"},C,{ref:r},f,{children:["buffer"===p?(0,A.jsx)(H,{className:g.dashed,ownerState:y}):null,(0,A.jsx)(B,{className:g.bar1,ownerState:y,style:k.bar1}),"determinate"===p?null:(0,A.jsx)(P,{className:g.bar2,ownerState:y,style:k.bar2})]}))})},19148(e,r,a){a.d(r,{A:()=>h});var t=a(14780),o=a(76061),n=a(18139),i=a(9520),s=a(98970),l=a(34393),c=a(2804),d=a(28751),u=a(38268),m=a(26108);function b(e){return(0,m.Ay)("MuiTable",e)}(0,u.A)("MuiTable",["root","stickyHeader"]);var p=a(20811);const f=["className","component","padding","size","stickyHeader"],v=(0,d.Ay)("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.root,a.stickyHeader&&r.stickyHeader]}})(({theme:e,ownerState:r})=>(0,o.A)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,o.A)({},e.typography.body2,{padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},r.stickyHeader&&{borderCollapse:"separate"})),A="table",h=n.forwardRef(function(e,r){const a=(0,c.A)({props:e,name:"MuiTable"}),{className:d,component:u=A,padding:m="normal",size:h="medium",stickyHeader:y=!1}=a,g=(0,t.A)(a,f),w=(0,o.A)({},a,{component:u,padding:m,size:h,stickyHeader:y}),C=(e=>{const{classes:r,stickyHeader:a}=e,t={root:["root",a&&"stickyHeader"]};return(0,s.A)(t,b,r)})(w),k=n.useMemo(()=>({padding:m,size:h,stickyHeader:y}),[m,h,y]);return(0,p.jsx)(l.A.Provider,{value:k,children:(0,p.jsx)(v,(0,o.A)({as:u,role:u===A?null:"table",ref:r,className:(0,i.A)(C.root,d),ownerState:w},g))})})},3437(e,r,a){a.d(r,{A:()=>y});var t=a(76061),o=a(14780),n=a(18139),i=a(9520),s=a(98970),l=a(63565),c=a(2804),d=a(28751),u=a(38268),m=a(26108);function b(e){return(0,m.Ay)("MuiTableBody",e)}(0,u.A)("MuiTableBody",["root"]);var p=a(20811);const f=["className","component"],v=(0,d.Ay)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,r)=>r.root})({display:"table-row-group"}),A={variant:"body"},h="tbody",y=n.forwardRef(function(e,r){const a=(0,c.A)({props:e,name:"MuiTableBody"}),{className:n,component:d=h}=a,u=(0,o.A)(a,f),m=(0,t.A)({},a,{component:d}),y=(e=>{const{classes:r}=e;return(0,s.A)({root:["root"]},b,r)})(m);return(0,p.jsx)(l.A.Provider,{value:A,children:(0,p.jsx)(v,(0,t.A)({className:(0,i.A)(y.root,n),as:d,ref:r,role:d===h?null:"rowgroup",ownerState:m},u))})})},10970(e,r,a){a.d(r,{A:()=>y});var t=a(76061),o=a(14780),n=a(18139),i=a(9520),s=a(98970),l=a(63565),c=a(2804),d=a(28751),u=a(38268),m=a(26108);function b(e){return(0,m.Ay)("MuiTableHead",e)}(0,u.A)("MuiTableHead",["root"]);var p=a(20811);const f=["className","component"],v=(0,d.Ay)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,r)=>r.root})({display:"table-header-group"}),A={variant:"head"},h="thead",y=n.forwardRef(function(e,r){const a=(0,c.A)({props:e,name:"MuiTableHead"}),{className:n,component:d=h}=a,u=(0,o.A)(a,f),m=(0,t.A)({},a,{component:d}),y=(e=>{const{classes:r}=e;return(0,s.A)({root:["root"]},b,r)})(m);return(0,p.jsx)(l.A.Provider,{value:A,children:(0,p.jsx)(v,(0,t.A)({as:d,className:(0,i.A)(y.root,n),ref:r,role:d===h?null:"rowgroup",ownerState:m},u))})})},11911(e,r,a){a.d(r,{A:()=>g});var t=a(76061),o=a(14780),n=a(18139),i=a(9520),s=a(98970),l=a(52418),c=a(63565),d=a(2804),u=a(28751),m=a(38268),b=a(26108);function p(e){return(0,b.Ay)("MuiTableRow",e)}const f=(0,m.A)("MuiTableRow",["root","selected","hover","head","footer"]);var v=a(20811);const A=["className","component","hover","selected"],h=(0,u.Ay)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.root,a.head&&r.head,a.footer&&r.footer]}})(({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${f.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${f.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,l.X4)(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,l.X4)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}})),y="tr",g=n.forwardRef(function(e,r){const a=(0,d.A)({props:e,name:"MuiTableRow"}),{className:l,component:u=y,hover:m=!1,selected:b=!1}=a,f=(0,o.A)(a,A),g=n.useContext(c.A),w=(0,t.A)({},a,{component:u,hover:m,selected:b,head:g&&"head"===g.variant,footer:g&&"footer"===g.variant}),C=(e=>{const{classes:r,selected:a,hover:t,head:o,footer:n}=e,i={root:["root",a&&"selected",t&&"hover",o&&"head",n&&"footer"]};return(0,s.A)(i,p,r)})(w);return(0,v.jsx)(h,(0,t.A)({as:u,ref:r,className:(0,i.A)(C.root,l),role:u===y?null:"row",ownerState:w},f))})}}]);