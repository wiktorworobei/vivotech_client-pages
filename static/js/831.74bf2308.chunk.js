"use strict";(globalThis.webpackChunkvivotech_crm_client||=[]).push([[831],{8726(e,r,t){var a=t(4994);r.A=void 0;var o=a(t(9526)),n=t(4414);r.A=(0,o.default)((0,n.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore")},6699(e,r,t){t.d(r,{A:()=>j});var a=t(8587),o=t(8168),n=t(9950),i=t(533),s=t(8465),l=t(1866),c=t(7083),d=t(1676),u=t(4857),m=t(9254),b=t(8283),p=t(1763),f=t(423);function v(e){return(0,f.Ay)("MuiLinearProgress",e)}(0,p.A)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);var A=t(4414);const h=["className","color","value","valueBuffer","variant"];let y,g,w,C,k,x,M=e=>e;const S=(0,l.i7)(y||(y=M`
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
`)),N=(e,r)=>"inherit"===r?"currentColor":e.vars?e.vars.palette.LinearProgress[`${r}Bg`]:"light"===e.palette.mode?(0,c.a)(e.palette[r].main,.62):(0,c.e$)(e.palette[r].main,.5),T=(0,m.Ay)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[`color${(0,d.A)(t.color)}`],r[t.variant]]}})(e=>{let{ownerState:r,theme:t}=e;return(0,o.A)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:N(t,r.color)},"inherit"===r.color&&"buffer"!==r.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===r.variant&&{backgroundColor:"transparent"},"query"===r.variant&&{transform:"rotate(180deg)"})}),H=(0,m.Ay)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.dashed,r[`dashedColor${(0,d.A)(t.color)}`]]}})(e=>{let{ownerState:r,theme:t}=e;const a=N(t,r.color);return(0,o.A)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===r.color&&{opacity:.3},{backgroundImage:`radial-gradient(${a} 0%, ${a} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},(0,l.AH)(C||(C=M`
    animation: ${0} 3s infinite linear;
  `),R)),B=(0,m.Ay)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.bar,r[`barColor${(0,d.A)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&r.bar1Indeterminate,"determinate"===t.variant&&r.bar1Determinate,"buffer"===t.variant&&r.bar1Buffer]}})(e=>{let{ownerState:r,theme:t}=e;return(0,o.A)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===r.color?"currentColor":(t.vars||t).palette[r.color].main},"determinate"===r.variant&&{transition:"transform .4s linear"},"buffer"===r.variant&&{zIndex:1,transition:"transform .4s linear"})},e=>{let{ownerState:r}=e;return("indeterminate"===r.variant||"query"===r.variant)&&(0,l.AH)(k||(k=M`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),S)}),P=(0,m.Ay)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.bar,r[`barColor${(0,d.A)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&r.bar2Indeterminate,"buffer"===t.variant&&r.bar2Buffer]}})(e=>{let{ownerState:r,theme:t}=e;return(0,o.A)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==r.variant&&{backgroundColor:"inherit"===r.color?"currentColor":(t.vars||t).palette[r.color].main},"inherit"===r.color&&{opacity:.3},"buffer"===r.variant&&{backgroundColor:N(t,r.color),transition:"transform .4s linear"})},e=>{let{ownerState:r}=e;return("indeterminate"===r.variant||"query"===r.variant)&&(0,l.AH)(x||(x=M`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),$)}),j=n.forwardRef(function(e,r){const t=(0,b.A)({props:e,name:"MuiLinearProgress"}),{className:n,color:l="primary",value:c,valueBuffer:m,variant:p="indeterminate"}=t,f=(0,a.A)(t,h),y=(0,o.A)({},t,{color:l,variant:p}),g=(e=>{const{classes:r,variant:t,color:a}=e,o={root:["root",`color${(0,d.A)(a)}`,t],dashed:["dashed",`dashedColor${(0,d.A)(a)}`],bar1:["bar",`barColor${(0,d.A)(a)}`,("indeterminate"===t||"query"===t)&&"bar1Indeterminate","determinate"===t&&"bar1Determinate","buffer"===t&&"bar1Buffer"],bar2:["bar","buffer"!==t&&`barColor${(0,d.A)(a)}`,"buffer"===t&&`color${(0,d.A)(a)}`,("indeterminate"===t||"query"===t)&&"bar2Indeterminate","buffer"===t&&"bar2Buffer"]};return(0,s.A)(o,v,r)})(y),w=(0,u.A)(),C={},k={bar1:{},bar2:{}};if("determinate"===p||"buffer"===p)if(void 0!==c){C["aria-valuenow"]=Math.round(c),C["aria-valuemin"]=0,C["aria-valuemax"]=100;let e=c-100;"rtl"===w.direction&&(e=-e),k.bar1.transform=`translateX(${e}%)`}else 0;if("buffer"===p)if(void 0!==m){let e=(m||0)-100;"rtl"===w.direction&&(e=-e),k.bar2.transform=`translateX(${e}%)`}else 0;return(0,A.jsxs)(T,(0,o.A)({className:(0,i.A)(g.root,n),ownerState:y,role:"progressbar"},C,{ref:r},f,{children:["buffer"===p?(0,A.jsx)(H,{className:g.dashed,ownerState:y}):null,(0,A.jsx)(B,{className:g.bar1,ownerState:y,style:k.bar1}),"determinate"===p?null:(0,A.jsx)(P,{className:g.bar2,ownerState:y,style:k.bar2})]}))})},5769(e,r,t){t.d(r,{A:()=>h});var a=t(8587),o=t(8168),n=t(9950),i=t(533),s=t(8465),l=t(646),c=t(8283),d=t(9254),u=t(1763),m=t(423);function b(e){return(0,m.Ay)("MuiTable",e)}(0,u.A)("MuiTable",["root","stickyHeader"]);var p=t(4414);const f=["className","component","padding","size","stickyHeader"],v=(0,d.Ay)("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,t.stickyHeader&&r.stickyHeader]}})(e=>{let{theme:r,ownerState:t}=e;return(0,o.A)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,o.A)({},r.typography.body2,{padding:r.spacing(2),color:(r.vars||r).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},t.stickyHeader&&{borderCollapse:"separate"})}),A="table",h=n.forwardRef(function(e,r){const t=(0,c.A)({props:e,name:"MuiTable"}),{className:d,component:u=A,padding:m="normal",size:h="medium",stickyHeader:y=!1}=t,g=(0,a.A)(t,f),w=(0,o.A)({},t,{component:u,padding:m,size:h,stickyHeader:y}),C=(e=>{const{classes:r,stickyHeader:t}=e,a={root:["root",t&&"stickyHeader"]};return(0,s.A)(a,b,r)})(w),k=n.useMemo(()=>({padding:m,size:h,stickyHeader:y}),[m,h,y]);return(0,p.jsx)(l.A.Provider,{value:k,children:(0,p.jsx)(v,(0,o.A)({as:u,role:u===A?null:"table",ref:r,className:(0,i.A)(C.root,d),ownerState:w},g))})})},4075(e,r,t){t.d(r,{A:()=>y});var a=t(8168),o=t(8587),n=t(9950),i=t(533),s=t(8465),l=t(9330),c=t(8283),d=t(9254),u=t(1763),m=t(423);function b(e){return(0,m.Ay)("MuiTableBody",e)}(0,u.A)("MuiTableBody",["root"]);var p=t(4414);const f=["className","component"],v=(0,d.Ay)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,r)=>r.root})({display:"table-row-group"}),A={variant:"body"},h="tbody",y=n.forwardRef(function(e,r){const t=(0,c.A)({props:e,name:"MuiTableBody"}),{className:n,component:d=h}=t,u=(0,o.A)(t,f),m=(0,a.A)({},t,{component:d}),y=(e=>{const{classes:r}=e;return(0,s.A)({root:["root"]},b,r)})(m);return(0,p.jsx)(l.A.Provider,{value:A,children:(0,p.jsx)(v,(0,a.A)({className:(0,i.A)(y.root,n),as:d,ref:r,role:d===h?null:"rowgroup",ownerState:m},u))})})},9780(e,r,t){t.d(r,{A:()=>y});var a=t(8168),o=t(8587),n=t(9950),i=t(533),s=t(8465),l=t(9330),c=t(8283),d=t(9254),u=t(1763),m=t(423);function b(e){return(0,m.Ay)("MuiTableHead",e)}(0,u.A)("MuiTableHead",["root"]);var p=t(4414);const f=["className","component"],v=(0,d.Ay)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,r)=>r.root})({display:"table-header-group"}),A={variant:"head"},h="thead",y=n.forwardRef(function(e,r){const t=(0,c.A)({props:e,name:"MuiTableHead"}),{className:n,component:d=h}=t,u=(0,o.A)(t,f),m=(0,a.A)({},t,{component:d}),y=(e=>{const{classes:r}=e;return(0,s.A)({root:["root"]},b,r)})(m);return(0,p.jsx)(l.A.Provider,{value:A,children:(0,p.jsx)(v,(0,a.A)({as:d,className:(0,i.A)(y.root,n),ref:r,role:d===h?null:"rowgroup",ownerState:m},u))})})},9213(e,r,t){t.d(r,{A:()=>g});var a=t(8168),o=t(8587),n=t(9950),i=t(533),s=t(8465),l=t(7083),c=t(9330),d=t(8283),u=t(9254),m=t(1763),b=t(423);function p(e){return(0,b.Ay)("MuiTableRow",e)}const f=(0,m.A)("MuiTableRow",["root","selected","hover","head","footer"]);var v=t(4414);const A=["className","component","hover","selected"],h=(0,u.Ay)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,t.head&&r.head,t.footer&&r.footer]}})(e=>{let{theme:r}=e;return{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${f.hover}:hover`]:{backgroundColor:(r.vars||r).palette.action.hover},[`&.${f.selected}`]:{backgroundColor:r.vars?`rgba(${r.vars.palette.primary.mainChannel} / ${r.vars.palette.action.selectedOpacity})`:(0,l.X4)(r.palette.primary.main,r.palette.action.selectedOpacity),"&:hover":{backgroundColor:r.vars?`rgba(${r.vars.palette.primary.mainChannel} / calc(${r.vars.palette.action.selectedOpacity} + ${r.vars.palette.action.hoverOpacity}))`:(0,l.X4)(r.palette.primary.main,r.palette.action.selectedOpacity+r.palette.action.hoverOpacity)}}}}),y="tr",g=n.forwardRef(function(e,r){const t=(0,d.A)({props:e,name:"MuiTableRow"}),{className:l,component:u=y,hover:m=!1,selected:b=!1}=t,f=(0,o.A)(t,A),g=n.useContext(c.A),w=(0,a.A)({},t,{component:u,hover:m,selected:b,head:g&&"head"===g.variant,footer:g&&"footer"===g.variant}),C=(e=>{const{classes:r,selected:t,hover:a,head:o,footer:n}=e,i={root:["root",t&&"selected",a&&"hover",o&&"head",n&&"footer"]};return(0,s.A)(i,p,r)})(w);return(0,v.jsx)(h,(0,a.A)({as:u,ref:r,className:(0,i.A)(C.root,l),role:u===y?null:"row",ownerState:w},f))})}}]);