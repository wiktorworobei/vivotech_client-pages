"use strict";(globalThis.webpackChunkvivotech_crm_client||=[]).push([[170],{87863(e,r,a){a.d(r,{A:()=>H});var t=a(14780),o=a(76061),n=a(18139),i=a(9520),l=a(98970),d=a(54499),s=a(52418),c=a(64107),u=a(9512),p=a(28751),m=a(2804),g=a(38268),h=a(26108);function v(e){return(0,h.Ay)("MuiLinearProgress",e)}(0,g.A)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);var x=a(20811);const b=["className","color","value","valueBuffer","variant"];let f,A,y,w,j,S,C=e=>e;const M=(0,d.i7)(f||(f=C`
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
`)),k=(0,d.i7)(A||(A=C`
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
`)),I=(0,d.i7)(y||(y=C`
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
`)),P=(e,r)=>"inherit"===r?"currentColor":e.vars?e.vars.palette.LinearProgress[`${r}Bg`]:"light"===e.palette.mode?(0,s.a)(e.palette[r].main,.62):(0,s.e$)(e.palette[r].main,.5),W=(0,p.Ay)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.root,r[`color${(0,c.A)(a.color)}`],r[a.variant]]}})(({ownerState:e,theme:r})=>(0,o.A)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:P(r,e.color)},"inherit"===e.color&&"buffer"!==e.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===e.variant&&{backgroundColor:"transparent"},"query"===e.variant&&{transform:"rotate(180deg)"})),z=(0,p.Ay)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.dashed,r[`dashedColor${(0,c.A)(a.color)}`]]}})(({ownerState:e,theme:r})=>{const a=P(r,e.color);return(0,o.A)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===e.color&&{opacity:.3},{backgroundImage:`radial-gradient(${a} 0%, ${a} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},(0,d.AH)(w||(w=C`
    animation: ${0} 3s infinite linear;
  `),I)),$=(0,p.Ay)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.bar,r[`barColor${(0,c.A)(a.color)}`],("indeterminate"===a.variant||"query"===a.variant)&&r.bar1Indeterminate,"determinate"===a.variant&&r.bar1Determinate,"buffer"===a.variant&&r.bar1Buffer]}})(({ownerState:e,theme:r})=>(0,o.A)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===e.color?"currentColor":(r.vars||r).palette[e.color].main},"determinate"===e.variant&&{transition:"transform .4s linear"},"buffer"===e.variant&&{zIndex:1,transition:"transform .4s linear"}),({ownerState:e})=>("indeterminate"===e.variant||"query"===e.variant)&&(0,d.AH)(j||(j=C`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),M)),T=(0,p.Ay)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.bar,r[`barColor${(0,c.A)(a.color)}`],("indeterminate"===a.variant||"query"===a.variant)&&r.bar2Indeterminate,"buffer"===a.variant&&r.bar2Buffer]}})(({ownerState:e,theme:r})=>(0,o.A)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==e.variant&&{backgroundColor:"inherit"===e.color?"currentColor":(r.vars||r).palette[e.color].main},"inherit"===e.color&&{opacity:.3},"buffer"===e.variant&&{backgroundColor:P(r,e.color),transition:"transform .4s linear"}),({ownerState:e})=>("indeterminate"===e.variant||"query"===e.variant)&&(0,d.AH)(S||(S=C`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),k)),H=n.forwardRef(function(e,r){const a=(0,m.A)({props:e,name:"MuiLinearProgress"}),{className:n,color:d="primary",value:s,valueBuffer:p,variant:g="indeterminate"}=a,h=(0,t.A)(a,b),f=(0,o.A)({},a,{color:d,variant:g}),A=(e=>{const{classes:r,variant:a,color:t}=e,o={root:["root",`color${(0,c.A)(t)}`,a],dashed:["dashed",`dashedColor${(0,c.A)(t)}`],bar1:["bar",`barColor${(0,c.A)(t)}`,("indeterminate"===a||"query"===a)&&"bar1Indeterminate","determinate"===a&&"bar1Determinate","buffer"===a&&"bar1Buffer"],bar2:["bar","buffer"!==a&&`barColor${(0,c.A)(t)}`,"buffer"===a&&`color${(0,c.A)(t)}`,("indeterminate"===a||"query"===a)&&"bar2Indeterminate","buffer"===a&&"bar2Buffer"]};return(0,l.A)(o,v,r)})(f),y=(0,u.A)(),w={},j={bar1:{},bar2:{}};if(("determinate"===g||"buffer"===g)&&void 0!==s){w["aria-valuenow"]=Math.round(s),w["aria-valuemin"]=0,w["aria-valuemax"]=100;let e=s-100;"rtl"===y.direction&&(e=-e),j.bar1.transform=`translateX(${e}%)`}if("buffer"===g&&void 0!==p){let e=(p||0)-100;"rtl"===y.direction&&(e=-e),j.bar2.transform=`translateX(${e}%)`}return(0,x.jsxs)(W,(0,o.A)({className:(0,i.A)(A.root,n),ownerState:f,role:"progressbar"},w,{ref:r},h,{children:["buffer"===g?(0,x.jsx)(z,{className:A.dashed,ownerState:f}):null,(0,x.jsx)($,{className:A.bar1,ownerState:f,style:j.bar1}),"determinate"===g?null:(0,x.jsx)(T,{className:A.bar2,ownerState:f,style:j.bar2})]}))})},20536(e,r,a){let t;a.d(r,{A:()=>u});var o=a(18139),n=a(9887),i=a(18914),l=a(58973);function d(e,r,a,t,n){const[i,d]=o.useState(()=>n&&a?a(e).matches:t?t(e).matches:r);return(0,l.A)(()=>{let r=!0;if(!a)return;const t=a(e),o=()=>{r&&d(t.matches)};return o(),t.addListener(o),()=>{r=!1,t.removeListener(o)}},[e,a]),i}const s=(t||(t=a.t(o,2))).useSyncExternalStore;function c(e,r,a,t,n){const i=o.useCallback(()=>r,[r]),l=o.useMemo(()=>{if(n&&a)return()=>a(e).matches;if(null!==t){const{matches:r}=t(e);return()=>r}return i},[i,e,t,n,a]),[d,c]=o.useMemo(()=>{if(null===a)return[i,()=>()=>{}];const r=a(e);return[()=>r.matches,e=>(r.addListener(e),()=>{r.removeListener(e)})]},[i,a,e]);return s(c,d,l)}function u(e,r={}){const a=(0,i.A)(),t="undefined"!=typeof window&&void 0!==window.matchMedia,{defaultMatches:o=!1,matchMedia:l=(t?window.matchMedia:null),ssrMatchMedia:u=null,noSsr:p=!1}=(0,n.A)({name:"MuiUseMediaQuery",props:r,theme:a});let m="function"==typeof e?e(a):e;return m=m.replace(/^@media( ?)/m,""),(void 0!==s?c:d)(m,o,l,u,p)}},50170(e,r,a){a.r(r),a.d(r,{default:()=>ne});var t=a.cw(function(e,r){var a=i();r.A=void 0;var t=a(o()),l=n();r.A=(0,t.default)((0,l.jsx)("path",{d:"M3 10h11v2H3zm0-2h11V6H3zm0 8h7v-2H3zm15.01-3.13.71-.71c.39-.39 1.02-.39 1.41 0l.71.71c.39.39.39 1.02 0 1.41l-.71.71zm-.71.71-5.3 5.3V21h2.12l5.3-5.3z"}),"EditNote")}),o=()=>a(31199),n=()=>a(20811),i=()=>a(77411),l=a(18139),d=a(20536),s=a(35566),c=a(83760),u=a(6236),p=a(47638),m=a(22970),g=a(29615),h=a(62716),v=a(40361),x=a(83120),b=a(95958);n();var f=a(57427),A=a(61),y=a(7176),w=a(69797),j=a(70701),S=a(51222),C=a(95837),M=a(44088),k=a(23854),I=a(4728),P=a(30164),W=a(54424),z=a(72619);const $=function(e,r){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ru-RU";return[{field:"imageName",align:"center",headerName:"",width:64,renderCell:e=>(0,n().jsx)(P.A,{sx:{width:36,height:36,borderRadius:"10px"},variant:"rounded",src:e.value,alt:e.row.name})},{field:"name",headerName:r("Название"),minWidth:260,flex:1,renderCell:e=>(0,n().jsx)(W.A,{component:z.N_,to:`/productsManagement/editProduct/productDetails/${e.id}`,sx:{fontWeight:650},children:e.value})},{field:"price",headerName:r("Цена"),type:"number",align:"center",width:120,renderCell:e=>(0,n().jsx)("strong",{children:Number(e.value)>0?(0,n().jsx)(M.v0,{value:Number(e.value),locale:a}):"Не указана"})},{field:"category",headerName:r("Категория"),sortable:!0,minWidth:150,flex:.7},{field:"count",headerName:r("Остаток, шт."),sortable:!0,align:"center",width:130},{field:"Edit",headerName:r("Изменить"),type:"actions",width:104,getActions:a=>[(0,n().jsx)(k.Z,{icon:(0,n().jsx)(I.A,{}),label:r("Изменить остаток"),onClick:()=>e(a.row)})]}]};var T=a(18815),H=a(83668),N=a(17361);const B=A.Ay.form({display:"grid",gap:"10px",marginTop:"12px"}),R=e=>{let{id:r,name:a,count:t,handleClose:o}=e;const{t:i}=(0,T.Bd)(),[d,s]=(0,l.useState)(String(t)),[c,{isLoading:u}]=(0,H.RE)();return(0,n().jsxs)(B,{onSubmit:e=>(async e=>{if(e.preventDefault(),r&&""!==d){const e={count:Number(d),id:r};try{await c(e).unwrap(),N.oR.success(i("Остаток продукта зафиксирован")),o()}catch{N.oR.error(i("Ошибка управления складом"))}}})(e),children:[(0,n().jsx)(w.A,{disabled:!0,value:a,label:i("Название")}),(0,n().jsx)(w.A,{value:d,type:"number",inputProps:{step:"any"},label:i("Количество"),required:!0,onChange:e=>s(e.target.value)}),(0,n().jsx)(j.A,{fullWidth:!0,text:i("Сохранить"),muiType:"success",type:"submit",disabled:u})]})};var q=a(64396),L=a(11731),E=a(81819),D=a(38048);let F=function(e){return e[e.Set=0]="Set",e[e.Add=1]="Add",e[e.Subtract=2]="Subtract",e}({});var O=a(56308);const _=e=>{var r;let{open:a,selectedIds:t,generationBatchId:o,targetLabel:i,onClose:d,onSubmit:p}=e;const{t:g}=(0,T.Bd)(),[v,x]=(0,l.useState)(F.Set),[b,f]=(0,l.useState)(""),[A,y]=(0,l.useState)(""),[S,C]=(0,l.useState)(!1),M=(null!==(r=null==t?void 0:t.length)&&void 0!==r?r:0)>500,k=[{id:F.Set,name:g("Set exact stock quantity")},{id:F.Add,name:g("Add to current stock")},{id:F.Subtract,name:g("Subtract from current stock")}],I=()=>{S||(f(""),y(""),d())};return(0,n().jsx)(s.A,{open:a,onClose:I,fullWidth:!0,maxWidth:"sm",children:(0,n().jsxs)("form",{onSubmit:async e=>{if(e.preventDefault(),M)return;const r=Number(b);if(!Number.isFinite(r)||r<0||v!==F.Set&&0===r)y(g("Enter a valid non-negative stock quantity."));else{C(!0),y("");try{const e=await p({ids:o?void 0:t,generationBatchId:o,mode:v,value:r});N.oR.success(g("Updated stock items: {count}",{count:e.updated})),f(""),d()}catch(e){y((0,O.S)(e,g("Bulk stock editing failed.")))}finally{C(!1)}}},children:[(0,n().jsx)(c.A,{children:g("Bulk stock editing")}),(0,n().jsxs)(u.A,{sx:{display:"grid",gap:2,paddingTop:"10px !important"},children:[(0,n().jsx)("div",{children:i}),(0,n().jsxs)(E.A,{children:[(0,n().jsx)(h.A,{children:g("Stock operation")}),(0,n().jsx)(D.A,{value:v,label:g("Stock operation"),menuItemProps:k,onChange:e=>x(Number(e.target.value))})]}),(0,n().jsx)(w.A,{fieldArray:!0,required:!0,type:"number",value:b,label:g("Quantity"),onChange:e=>f(e.target.value)}),M&&(0,n().jsx)("p",{style:{margin:0,color:"var(--color-danger)"},children:g("You can edit no more than 500 stock items at once.")}),A&&(0,n().jsx)("p",{style:{margin:0,color:"var(--color-danger)"},children:A})]}),(0,n().jsxs)(m.A,{children:[(0,n().jsx)(j.A,{type:"button",muiType:"secondary",disabled:S,text:g("Cancel"),onClick:I}),(0,n().jsx)(j.A,{type:"submit",muiType:"success",disabled:S||M,text:g(S?"Saving...":"Apply changes")})]})]})})};var G=a(12010),V=a(87863),Y=a(46143),U=a(30937),Q=a(55753),X=a(46747),Z=a(81219),J=a(3712),K=a(85792),ee=a(86799);const re=[["name","Название"],["category","Категория"],["price","Цена"],["count","Остаток, шт."]];function ae(e){var r;let{products:a,total:t,loading:o,pagination:i,onPaginationChange:l,sort:d,onSortChange:s,selected:c,onSelectionChange:u,onEdit:p}=e;const{t:m,locale:h}=(0,T.Bd)(),[v]=d,x=null===(r=re.find(e=>{let[r]=e;return r===(null==v?void 0:v.field)}))||void 0===r?void 0:r[0],b=x&&v.sort?[...a].sort((e,r)=>{const a=e[x],t=r[x],o="number"==typeof a&&"number"==typeof t?a-t:String(null!=a?a:"").localeCompare(String(null!=t?t:""),h,{numeric:!0});return"desc"===v.sort?-o:o}):a,f=a.filter(e=>c.includes(e.id)).length;return(0,n().jsxs)(G.A,{spacing:1.25,sx:{mt:2,minWidth:0},"aria-busy":o,children:[o&&(0,n().jsx)(V.A,{"aria-label":m("Обновление остатков")}),a.length>0&&(0,n().jsxs)(n().Fragment,{children:[(0,n().jsxs)(Y.A,{select:!0,size:"small",label:m("Сортировка"),value:x&&v.sort?`${x}:${v.sort}`:"default",onChange:e=>{const[r,a]=e.target.value.split(":");s("default"===r?[]:[{field:r,sort:"desc"===a?"desc":"asc"}])},children:[(0,n().jsx)(U.A,{value:"default",children:m("По умолчанию")}),re.flatMap(e=>{let[r,a]=e;return[(0,n().jsxs)(U.A,{value:`${r}:asc`,children:[m(a)," ↑"]},`${r}:asc`),(0,n().jsxs)(U.A,{value:`${r}:desc`,children:[m(a)," ↓"]},`${r}:desc`)]})]}),(0,n().jsx)(Q.A,{control:(0,n().jsx)(X.A,{checked:f===a.length,indeterminate:f>0&&f<a.length,onChange:(e,r)=>(e=>{const r=new Set(a.map(e=>e.id));u(e?Array.from(new Set(c.concat(Array.from(r)))):c.filter(e=>!r.has(Number(e))))})(r)}),label:m("Выбрать все товары на странице")}),(0,n().jsx)(G.A,{component:"ul",spacing:1.25,sx:{m:0,p:0,listStyle:"none"},children:b.map(e=>(0,n().jsxs)(Z.A,{component:"li",variant:"outlined",sx:{p:1.5,minWidth:0},children:[(0,n().jsxs)(G.A,{direction:"row",alignItems:"flex-start",spacing:1,children:[(0,n().jsx)(X.A,{checked:c.includes(e.id),inputProps:{"aria-label":m("Выбрать товар: {name}",{name:e.name})},onChange:(r,a)=>u(a?[...c,e.id]:c.filter(r=>r!==e.id)),sx:{flexShrink:0,minWidth:44,minHeight:44}}),(0,n().jsx)(P.A,{variant:"rounded",src:e.imageName,"aria-hidden":"true",sx:{width:40,height:40}}),(0,n().jsxs)(J.A,{sx:{minWidth:0,overflowWrap:"anywhere"},children:[(0,n().jsx)(W.A,{component:z.N_,to:`/productsManagement/editProduct/productDetails/${e.id}`,fontWeight:700,children:e.name}),(0,n().jsx)(K.A,{variant:"body2",color:"text.secondary",children:e.category||m("Без категории")})]})]}),(0,n().jsxs)(J.A,{component:"dl",sx:{display:"grid",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",gap:1,my:1.25},children:[(0,n().jsxs)(J.A,{children:[(0,n().jsx)(K.A,{component:"dt",variant:"caption",color:"text.secondary",children:m("Остаток, шт.")}),(0,n().jsx)(K.A,{component:"dd",fontWeight:700,sx:{m:0,overflowWrap:"anywhere"},children:e.count.toLocaleString(h,{maximumFractionDigits:6})})]}),(0,n().jsxs)(J.A,{children:[(0,n().jsx)(K.A,{component:"dt",variant:"caption",color:"text.secondary",children:m("Цена")}),(0,n().jsx)(K.A,{component:"dd",fontWeight:700,sx:{m:0,overflowWrap:"anywhere"},children:e.price>0?(0,n().jsx)(M.v0,{value:e.price,locale:h}):m("Не указана")})]})]}),(0,n().jsx)(g.A,{fullWidth:!0,variant:"outlined",onClick:()=>p(e),sx:{minHeight:44},children:m("Изменить остаток")})]},e.id))})]}),!o&&0===a.length&&(0,n().jsx)(K.A,{color:"text.secondary",children:m("Товары не найдены")}),(0,n().jsx)(ee.A,{component:"div",count:t,page:Math.min(i.page,Math.max(0,Math.ceil(t/i.pageSize)-1)),rowsPerPage:i.pageSize,rowsPerPageOptions:[25,50,100],labelRowsPerPage:m("На странице"),labelDisplayedRows:e=>{let{from:r,to:a,count:t}=e;return`${r}–${a} / ${t}`},getItemAriaLabel:e=>m("previous"===e?"Назад":"Далее"),onPageChange:(e,r)=>l({...i,page:r}),onRowsPerPageChange:e=>l({page:0,pageSize:Number(e.target.value)}),sx:{"& .MuiTablePagination-toolbar":{flexWrap:"wrap",p:0,gap:.5},"& .MuiTablePagination-spacer":{display:"none"},"& .MuiTablePagination-actions":{ml:0}}})]})}const te=A.Ay.div({display:"flex",alignItems:"center",gap:"8px",color:"var(--color-muted)",fontSize:"13px",fontWeight:760}),oe=A.Ay.div({display:"grid",gridTemplateColumns:"minmax(0, 1fr) minmax(0, 0.65fr)",gap:"14px",alignItems:"end","@media (max-width: 760px)":{gridTemplateColumns:"1fr"}}),ne=()=>{var e,r,a;const{t:o,locale:i}=(0,T.Bd)(),A=(0,d.A)("(max-width: 760px)"),[M,k]=(0,l.useState)({pageNumber:1,pageSize:25,productCategories:[],searchTerm:""}),[I,P]=(0,l.useState)(""),W=(0,C.A)(I),{data:z,isLoading:N,isFetching:B,isError:F,refetch:O}=(0,H.u7)(M),{data:G=[]}=(0,q.H3)(),[V]=(0,H.Pl)(),Y=(null==z?void 0:z.items)||[],U=null==z?void 0:z.metaData,[Q,X]=(0,l.useState)(!1),[Z,J]=(0,l.useState)(),[K,ee]=(0,l.useState)({pageSize:M.pageSize,page:M.pageNumber-1}),[re,ne]=(0,l.useState)([]),[ie,le]=(0,l.useState)([]),[de,se]=(0,l.useState)(null),ce=[{id:"",name:o("All generation batches")},...G.filter(e=>e.itemType===L.h.Product).map(e=>({id:e.id,name:e.name}))],ue=G.find(e=>e.id===M.generationBatchId),pe=()=>{X(!1)},me=e=>{J(e),X(!0)};(0,l.useEffect)(()=>{k(e=>({...e,searchTerm:W,pageNumber:1})),ee(e=>({...e,page:0}))},[W]);const ge=e=>{k(r=>({...r,pageNumber:e.page+1,pageSize:e.pageSize})),ee(e)};return N?(0,n().jsx)(y.A,{}):(0,n().jsxs)(S.Dk,{children:[(0,n().jsx)(_,{open:null!==de,selectedIds:"selection"===de?re.map(Number):void 0,generationBatchId:"batch"===de?M.generationBatchId:void 0,targetLabel:"batch"===de?o("Entire generation batch: {name}",{name:null!==(e=null==ue?void 0:ue.name)&&void 0!==e?e:""}):o("Selected products: {count}",{count:re.length}),onClose:()=>se(null),onSubmit:async e=>{const r=await V(e).unwrap();return ne([]),se(null),r}}),(0,n().jsxs)(s.A,{open:Q,onClose:()=>pe(),children:[(0,n().jsx)(c.A,{children:o("Изменение остатков на складе")}),(0,n().jsxs)(u.A,{children:[(0,n().jsx)(p.A,{children:o("Внесите актуальное количество товара на складе.")}),(0,n().jsx)(R,{id:null==Z?void 0:Z.id,name:null==Z?void 0:Z.name,count:null==Z?void 0:Z.count,handleClose:pe})]}),(0,n().jsx)(m.A,{children:(0,n().jsx)(g.A,{onClick:()=>pe(),children:o("Отмена")})})]}),(0,n().jsx)(S.zY,{children:(0,n().jsxs)(S.Fp,{children:[(0,n().jsx)(S.sT,{children:o("Склад")}),(0,n().jsx)(S.I_,{children:o("Остатки товаров, контроль наличия и быстрое обновление количества.")})]})}),(0,n().jsxs)(S.ui,{children:[(0,n().jsxs)(S.M7,{children:[(0,n().jsxs)(te,{children:[(0,n().jsx)(x.A,{fontSize:"small"}),o("Поиск по складу")]}),(!A||re.length>0||M.generationBatchId)&&(0,n().jsxs)(S.v_,{children:[re.length>0&&(0,n().jsx)(j.A,{text:o("Clear selection"),leftIcon:(0,n().jsx)(f.A,{}),muiType:"secondary",onClick:()=>ne([])}),(!A||re.length>0)&&(0,n().jsx)(j.A,{text:o("Edit selected stock ({count})",{count:re.length}),leftIcon:(0,n().jsx)(t().A,{}),muiType:"edit",disabled:F||0===re.length,onClick:()=>se("selection")}),M.generationBatchId&&(0,n().jsx)(j.A,{text:o("Edit entire batch stock"),leftIcon:(0,n().jsx)(b.A,{}),muiType:"success",disabled:F,onClick:()=>se("batch")})]})]}),(0,n().jsxs)(oe,{children:[(0,n().jsx)(w.A,{verticalMargin:!0,value:I||"",label:o("Название товара или описание..."),onChange:e=>P(e.target.value)}),(0,n().jsxs)(E.A,{children:[(0,n().jsx)(h.A,{id:"stock-generation-batch-label",children:o("Generation batch")}),(0,n().jsx)(D.A,{labelId:"stock-generation-batch-label",required:!1,value:null!==(r=M.generationBatchId)&&void 0!==r?r:"",label:o("Generation batch"),menuItemProps:ce,onChange:e=>{const r=String(e.target.value)||void 0;k(e=>({...e,generationBatchId:r,pageNumber:1})),ee(e=>({...e,page:0})),ne([])}})]})]}),F?(0,n().jsx)(v.A,{severity:"error",sx:{mt:2},action:(0,n().jsx)(g.A,{color:"inherit",disabled:B,onClick:()=>{O()},children:o("Повторить")}),children:o("Не удалось загрузить данные. Повторите запрос.")}):A?(0,n().jsx)(ae,{products:Y,total:null!==(a=null==U?void 0:U.totalCount)&&void 0!==a?a:0,loading:B,pagination:K,onPaginationChange:ge,sort:ie,onSortChange:le,selected:re,onSelectionChange:ne,onEdit:me}):(0,n().jsx)(S.aN,{loading:B,pagination:!0,paginationMode:"server",rowCount:(null==U?void 0:U.totalCount)||0,autoHeight:!0,rows:Y,columns:$(me,o,i),paginationModel:K,onPaginationModelChange:e=>ge(e),sortModel:ie,onSortModelChange:le,pageSizeOptions:[25,50,100],disableRowSelectionOnClick:!0,checkboxSelection:!0,keepNonExistentRowsSelected:!0,rowSelectionModel:re,onRowSelectionModelChange:ne})]})]})}},95837(e,r,a){var t=a(18139);a.d(r,["A",0,function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;const[a,o]=(0,t.useState)(e);return(0,t.useEffect)(()=>{const a=setTimeout(()=>{o(e)},r);return()=>{clearTimeout(a)}},[e,r]),a}])},70701(e,r,a){a.d(r,{A:()=>d}),a(18139);var t=a(54499),o=a(28751),n=a(29615);const i=(0,o.Ay)(n.A,{shouldForwardProp:e=>"muiType"!==e&&"horizontalMargin"!==e&&"verticalMargin"!==e&&"bottomMargin"!==e})`
  min-height: var(--control-height);
  padding: 10px 16px;
  border-radius: 10px;
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  color: var(--color-text);
  box-shadow: var(--shadow-control);
  text-transform: none;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1.3;
  text-align: center;
  white-space: normal;

  ${e=>{let{muiType:r}=e;switch(r){case"primary":return t.AH`
          border-color: var(--color-primary-border);
          background: var(--color-primary);
          color: var(--color-on-primary);

          &:hover {
            background: var(--color-primary-hover);
            color: var(--color-on-primary);
          }
        `;case"secondary":return t.AH`
          border-color: var(--color-border-strong);
          background: var(--color-surface);
          color: var(--color-text);

          &:hover {
            border-color: var(--color-primary);
            background: var(--color-primary-soft);
            color: var(--color-primary);
          }
        `;case"success":return t.AH`
          border-color: var(--color-primary);
          background: var(--color-primary);
          color: var(--color-on-primary);

          &:hover {
            background: var(--color-primary-hover);
            color: var(--color-on-primary);
          }
        `;case"error":return t.AH`
          border-color: var(--color-danger-border);
          background: var(--color-danger-soft);
          color: var(--color-danger-text);

          &:hover {
            background: var(--color-danger-soft);
            border-color: var(--color-danger);
            color: var(--color-danger-text);
          }
        `;case"edit":return t.AH`
          border-color: var(--color-warning-border);
          background: var(--color-warning-soft);
          color: var(--color-warning-text);

          &:hover {
            background: var(--color-warning-soft);
            border-color: var(--color-warning);
            color: var(--color-warning-text);
          }
        `;case"info":return t.AH`
          border-color: var(--color-primary-border);
          background: var(--color-primary-soft);
          color: var(--color-primary);

          &:hover {
            background: var(--color-primary-soft-hover);
            color: var(--color-primary-hover);
          }
        `;default:return t.AH`
          &:hover {
            border-color: var(--color-border-strong);
            background: var(--color-surface-soft);
            color: var(--color-text);
          }
        `}}}

  &:disabled {
    border-color: var(--color-border);
    background: var(--color-disabled);
    color: var(--color-disabled-text);
    box-shadow: none;
  }

  ${e=>t.AH`
  ${!0===e.horizontalMargin&&t.AH`
    margin-left: 8px;
    margin-right: 8px;
  `}

  ${!0===e.verticalMargin&&t.AH`
    margin-top: 8px;
    margin-bottom: 8px;
  `}

  ${!0===e.bottomMargin&&t.AH`
    margin-top: 8px;
    margin-bottom: 24px;
  `}
`}
`;var l=a(20811);const d=e=>{let{fullWidth:r,type:a,onClick:t,leftIcon:o,rightIcon:n,text:d,muiType:s,horizontalMargin:c,verticalMargin:u,bottomMargin:p,disabled:m,ariaLabel:g}=e;return(0,l.jsx)(i,{fullWidth:r,type:a,muiType:s,startIcon:o,endIcon:n,onClick:t,verticalMargin:u||!1,horizontalMargin:c||!1,bottomMargin:p||!1,disabled:m,"aria-label":g,children:d})}},51222(e,r,a){var t=a(18139),o=a(61),n=a(28751),i=a(4780),l=a(18815);const d=o.Ay.div({width:"100%",maxWidth:"var(--app-content-width, 1440px)",minWidth:0,margin:"0 auto",textAlign:"left"}),s=o.Ay.div({display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"16px 24px",marginBottom:"24px","@media (max-width: 760px)":{display:"grid",gridTemplateColumns:"minmax(0, 1fr)",marginBottom:"18px"}}),c=o.Ay.div({display:"grid",gap:"6px",minWidth:0}),u=o.Ay.h1({margin:0,color:"var(--color-text)",fontSize:"clamp(24px, 2.35vw, 34px)",fontWeight:800,letterSpacing:"-.04em",lineHeight:1.2,overflowWrap:"anywhere"}),p=o.Ay.p({maxWidth:"720px",margin:0,color:"var(--color-muted)",fontSize:"14px",fontWeight:450,lineHeight:1.6}),m=o.Ay.section({width:"100%",minWidth:0,padding:"var(--panel-padding)",background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"var(--radius-xl)",boxShadow:"var(--shadow-soft)"}),g=o.Ay.div({display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"12px",width:"100%",marginBottom:"14px","@media (max-width: 760px)":{display:"grid",gridTemplateColumns:"minmax(0, 1fr)"}}),h=o.Ay.div({display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"}),v=o.Ay.div({display:"grid",alignItems:"start",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",gap:"12px","@media (max-width: 760px)":{gridTemplateColumns:"minmax(0, 1fr)"}}),x=o.Ay.form({display:"grid",gridTemplateColumns:"minmax(0, 1fr)",alignItems:"start",gap:"14px",width:"min(720px, 100%)",minWidth:0,padding:"var(--panel-padding)",background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"16px",boxShadow:"var(--shadow-soft)","@media (max-width: 560px)":{gap:"12px",padding:"14px"}}),b=o.Ay.div({display:"grid",placeItems:"center",gap:"8px",minHeight:"220px",padding:"28px",color:"var(--color-muted)",textAlign:"center",background:"var(--color-surface)",border:"1px dashed var(--color-border-strong)",borderRadius:"16px"}),f=(o.Ay.div({marginBottom:"8px",color:"var(--color-danger)",fontSize:"13px",fontWeight:650}),(0,n.Ay)(i.zh)({width:"100%",minWidth:0,"&.MuiDataGrid-autoHeight":{overflow:"visible","& .MuiDataGrid-main":{overflow:"visible"},"& .MuiDataGrid-columnHeaders":{position:"sticky",top:"var(--app-header-height)",zIndex:2,backgroundColor:"var(--color-surface-soft)",boxShadow:"0 1px 0 var(--color-border)"}}}));a.d(r,["Dk",0,d,"Fp",0,c,"I_",0,p,"M7",0,g,"aN",0,e=>{const{language:r}=(0,l.Bd)(),a=(0,t.useMemo)(()=>({...(0,l.it)(r),...e.localeText}),[r,e.localeText]);return t.createElement(f,{...e,localeText:a})},"kA",0,x,"pp",0,b,"sT",0,u,"ui",0,m,"vY",0,v,"v_",0,h,"zY",0,s])},81819(e,r,a){a.d(r,{A:()=>d}),a(18139);var t=a(54499),o=a(28751),n=a(66426);const i=(0,o.Ay)(n.A,{shouldForwardProp:e=>"horizontalMargin"!==e&&"verticalMargin"!==e})`
  width: 100%;
  min-width: 0;

  ${e=>!0===e.horizontalMargin&&t.AH`
      margin-left: 8px;
      margin-right: 8px;
      width: calc(100% - 16px);
    `}

  ${e=>!0===e.verticalMargin&&t.AH`
      margin-top: 8px;
      margin-bottom: 8px;
    `}
`;var l=a(20811);const d=e=>{let{verticalMargin:r,horizontalMargin:a,error:t,children:o}=e;return(0,l.jsx)(i,{fullWidth:!0,error:t,horizontalMargin:a,verticalMargin:r,children:o})}},38048(e,r,a){a.d(r,{A:()=>s}),a(18139);var t=a(54499),o=a(28751),n=a(61718);const i=(0,o.Ay)(n.A,{shouldForwardProp:e=>"halfWidth"!==e})`
  width: 100%;
  border-radius: 10px;
  background-color: var(--color-surface);

  .MuiOutlinedInput-notchedOutline {
    border-color: var(--color-border);
  }

  &:hover .MuiOutlinedInput-notchedOutline {
    border-color: var(--color-border-strong);
  }

  &.Mui-focused {
    box-shadow: var(--focus-ring);
  }

  ${e=>!0===e.halfWidth&&t.AH`
      width: min(100%, 520px);
    `}
`;var l=a(30937),d=a(20811);const s=e=>{let{id:r,labelId:a,value:t,onChange:o,label:n,menuItemProps:s,register:c,name:u,error:p,required:m,defaultValue:g,disabled:h,withoutId:v}=e;return c&&v?(0,d.jsx)(i,{id:r,labelId:a,displayEmpty:!0,defaultValue:g,disabled:h,required:m,error:!!p,...c(u),value:t,onChange:o,label:n,children:s&&s.map(e=>(0,d.jsx)(l.A,{value:e,children:e},String(e)))}):c?(0,d.jsx)(i,{id:r,labelId:a,displayEmpty:!0,defaultValue:g,disabled:h,required:m,error:!!p,...c(u),value:t,onChange:o,label:n,children:s&&s.map(e=>(0,d.jsx)(l.A,{value:e.id,children:e.name},e.id))}):(0,d.jsx)(i,{id:r,labelId:a,value:t,onChange:o,label:n,required:!1!==m,disabled:h,error:!!p,children:s&&s.map(e=>(0,d.jsx)(l.A,{value:e.id,children:e.name},e.id))})}},69797(e,r,a){a.d(r,{A:()=>c}),a(18139);var t=a(54499),o=a(28751),n=a(46143);const i=(0,o.Ay)(n.A,{shouldForwardProp:e=>"horizontalMargin"!==e&&"verticalMargin"!==e&&"halfWidth"!==e&&"topMargin"!==e})`
  width: 100%;
  min-width: 0;

  .MuiOutlinedInput-root {
    border-radius: 10px;
    background-color: var(--color-surface);
  }

  .MuiFormHelperText-root {
    font-weight: 650;
  }

  ${e=>!0===e.horizontalMargin&&t.AH`
      margin-left: 8px;
      margin-right: 8px;
      width: calc(100% - 16px);
    `}

  ${e=>!0===e.verticalMargin&&t.AH`
      margin-top: 8px;
      margin-bottom: 8px;
    `}

  ${e=>!0===e.topMargin&&t.AH`
        margin-top: 12px;
      `}

  ${e=>!0===e.halfWidth&&t.AH`
      width: min(100%, 520px);
    `}
`;var l=a(70166),d=a(42407),s=a(20811);const c=e=>{let{required:r=!1,value:a,onChange:t,label:o,verticalMargin:n=!1,horizontalMargin:c=!1,inputEvent:u,halfWidth:p=!1,disabled:m=!1,topMargin:g=!1,type:h="text",inputProps:v,register:x,name:b,error:f,fieldArray:A}=e;const y={disabled:m,halfWidth:p,required:r,topMargin:g,verticalMargin:n,horizontalMargin:c,value:a,label:o,type:h,inputProps:v,InputProps:u?{endAdornment:(0,s.jsx)(l.A,{position:"end",children:(0,s.jsx)(d.A,{onClick:()=>u()})})}:void 0};return x?(0,s.jsx)(i,{error:!!f,helperText:f,...y,onChange:t,...x(b)}):A?(0,s.jsx)(i,{onChange:t,error:!!f,helperText:f,...y}):(0,s.jsx)(i,{onChange:t,...y})}}}]);