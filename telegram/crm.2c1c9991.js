"use strict";(globalThis.webpackChunkvivotech_crm_client||=[]).push([[118],{90977(r,e,o){var a=o(77411);e.A=void 0;var t=a(o(31199)),i=o(20811);e.A=(0,t.default)((0,i.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add")},86129(r,e,o){var a=o(77411);e.A=void 0;var t=a(o(31199)),i=o(20811);e.A=(0,t.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8zm7.5-5-1-1h-5l-1 1H5v2h14V4z"}),"DeleteOutline")},77437(r,e,o){var a=o(77411);e.A=void 0;var t=a(o(31199)),i=o(20811);e.A=(0,t.default)([(0,i.jsx)("path",{d:"M8 9h8v10H8z",opacity:".3"},"0"),(0,i.jsx)("path",{d:"m15.5 4-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8z"},"1")],"DeleteTwoTone")},70118(r,e,o){o.r(e),o.d(e,{default:()=>B});var a=o(56308),t=o(88215),i=o(18139),n=o(35566),l=o(83760),c=o(6236),d=o(47638),s=o(22970),p=o(29615),h=o(95958),g=o(90977),x=o(83120),v=o(57427),u=o(86129),m=o(72619),b=o(61),f=o(7176),A=o(70701),y=o(69797),w=o(51222),j=o(95837),k=o(90510),C=o(44088),M=o(30164),S=o(23854),H=o(4728),z=o(77437),T=o(20811);const W=(r,e)=>[{field:"imageName",align:"center",headerName:"",width:64,renderCell:r=>(0,T.jsx)(M.A,{sx:{width:36,height:36,borderRadius:"10px"},variant:"rounded",src:r.value,alt:r.row.name})},{field:"name",headerName:e("Name"),minWidth:240,flex:1,renderCell:r=>(0,T.jsx)(m.k2,{to:`/servicesManagement/${r.id}`,style:{color:"inherit",textDecoration:"none"},children:r.value})},{field:"price",headerName:e("Price"),renderCell:r=>(0,T.jsx)(C.v0,{value:r.value}),type:"number",align:"center",width:130},{field:"category",headerName:e("Category"),sortable:!0,minWidth:160,flex:.7},{field:"Edit",headerName:e("Edit"),type:"actions",width:92,getActions:r=>[(0,T.jsx)(S.Z,{icon:(0,T.jsx)(m.k2,{style:{textDecoration:"none",color:"inherit"},to:`/servicesManagement/editService/${r.id}`,children:(0,T.jsx)(H.A,{})}),label:e("Edit")})]},{field:"Delete",headerName:e("Delete"),type:"actions",width:92,getActions:o=>[(0,T.jsx)(S.Z,{icon:(0,T.jsx)(z.A,{}),label:e("Delete"),onClick:()=>r(o.id)})]}];var D=o(18815),I=o(63080),N=o(17361);const R=b.Ay.div({display:"flex",alignItems:"center",gap:"8px",color:"var(--color-muted)",fontSize:"13px",fontWeight:760}),$={pageNumber:1,pageSize:15,categories:[],searchTerm:""},B=()=>{var r,e;const{t:o}=(0,D.Bd)(),[b,C]=(0,i.useState)($),{data:M,isLoading:S,isFetching:H,isError:z,error:B,refetch:E}=(0,k.Gs)(b),[F,{isLoading:P}]=(0,k.B0)({}),[L,{isLoading:_}]=(0,k.kR)(),[V,Y]=(0,i.useState)(""),G=(0,j.A)(V),[O,q]=(0,i.useState)(!1),[Z,J]=(0,i.useState)(""),[K,Q]=(0,i.useState)([]),[U,X]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{C(r=>({...r,searchTerm:G}))},[G]),S&&!V?(0,T.jsx)(f.A,{}):z?(0,T.jsx)(w.Dk,{children:(0,T.jsx)(t.A,{error:B,onRetry:E})}):(0,T.jsxs)(w.Dk,{children:[(0,T.jsx)(I.A,{open:U,selectedCount:K.length,isLoading:_,onClose:()=>X(!1),onConfirm:async()=>{try{const r=await L({ids:K.map(Number)}).unwrap();Q([]),X(!1),N.oR.success(o("Deleted items: {count}",{count:r.deleted}))}catch(r){N.oR.error((0,a.S)(r,o("Не удалось удалить запись.")))}}}),(0,T.jsxs)(n.A,{open:O,onClose:()=>{P||q(!1)},children:[(0,T.jsx)(l.A,{children:o("Confirm service deletion")}),(0,T.jsx)(c.A,{children:(0,T.jsx)(d.A,{children:o("Do you really want to delete this service from the system?")})}),(0,T.jsxs)(s.A,{children:[(0,T.jsx)(p.A,{disabled:P,onClick:()=>q(!1),children:o("Cancel")}),(0,T.jsx)(p.A,{color:"error",disabled:P,onClick:()=>{!async function(){try{await F(Z).unwrap(),N.oR.success(o("Услуга удалена.")),Q(r=>r.filter(r=>r!==Z)),q(!1)}catch(r){N.oR.error((0,a.S)(r,o("Не удалось удалить запись.")))}}()},autoFocus:!0,children:o("Delete")})]})]}),(0,T.jsxs)(w.zY,{children:[(0,T.jsxs)(w.Fp,{children:[(0,T.jsx)(w.sT,{children:o("Services")}),(0,T.jsx)(w.I_,{children:o("Service catalog with prices, categories, and quick search.")})]}),(0,T.jsx)(m.k2,{to:"createService",style:{textDecoration:"none"},children:(0,T.jsx)(A.A,{muiType:"success",text:o("Add service"),leftIcon:(0,T.jsx)(g.A,{})})})]}),(0,T.jsxs)(w.ui,{children:[(0,T.jsxs)(w.M7,{children:[(0,T.jsxs)(R,{children:[(0,T.jsx)(x.A,{fontSize:"small"}),o("Service search")]}),(0,T.jsxs)(w.v_,{children:[K.length>0&&(0,T.jsx)(A.A,{muiType:"secondary",text:o("Clear selection"),leftIcon:(0,T.jsx)(v.A,{}),onClick:()=>Q([])}),(0,T.jsx)(A.A,{muiType:"error",text:o("Delete selected ({count})",{count:K.length}),leftIcon:(0,T.jsx)(u.A,{}),disabled:0===K.length||_,onClick:()=>X(!0)}),(0,T.jsx)(A.A,{text:o("Filters"),leftIcon:(0,T.jsx)(h.A,{})})]})]}),(0,T.jsx)(y.A,{verticalMargin:!0,value:V||"",label:o("Service name or description..."),onChange:r=>{Y(r.target.value)}}),(0,T.jsx)(w.aN,{pagination:!0,paginationMode:"server",rowCount:null!==(r=null==M?void 0:M.metaData.totalCount)&&void 0!==r?r:0,autoHeight:!0,rows:null!==(e=null==M?void 0:M.items)&&void 0!==e?e:[],columns:W(r=>{q(!0),J(r)},o),loading:S||H,onPaginationModelChange:r=>(r=>{C(e=>({...e,pageNumber:r.page,pageSize:r.pageSize}))})(r),pageSizeOptions:[25,50,100],disableRowSelectionOnClick:!0,checkboxSelection:!0,keepNonExistentRowsSelected:!0,rowSelectionModel:K,onRowSelectionModelChange:Q})]})]})}},88215(r,e,o){o.d(e,{A:()=>c}),o(18139);var a=o(40361),t=o(29615),i=o(56308),n=o(18815),l=o(20811);function c(r){let{error:e,onRetry:o}=r;const{t:c}=(0,n.Bd)();return(0,l.jsx)(a.A,{severity:"error",action:(0,l.jsx)(t.A,{onClick:()=>{o()},children:c("Повторить")}),children:(0,i.S)(e,c("Не удалось загрузить данные. Повторите запрос."))})}},63080(r,e,o){o(18139);var a=o(35566),t=o(83760),i=o(6236),n=o(47638),l=o(22970),c=o(29615),d=o(18815),s=o(20811);o.d(e,["A",0,r=>{let{open:e,selectedCount:o,isLoading:p=!1,onClose:h,onConfirm:g}=r;const{t:x}=(0,d.Bd)(),v=o>500;return(0,s.jsxs)(a.A,{open:e,onClose:p?void 0:h,children:[(0,s.jsx)(t.A,{children:x("Delete selected items?")}),(0,s.jsxs)(i.A,{children:[(0,s.jsx)(n.A,{children:x("You are about to delete {count} selected items. This action cannot be undone.",{count:o})}),v&&(0,s.jsx)(n.A,{color:"error",children:x("You can delete no more than 500 items at once.")})]}),(0,s.jsxs)(l.A,{children:[(0,s.jsx)(c.A,{onClick:h,disabled:p,children:x("Cancel")}),(0,s.jsx)(c.A,{color:"error",onClick:g,disabled:p||0===o||v,autoFocus:!0,children:p?x("Deleting..."):x("Delete selected ({count})",{count:o})})]})]})}])},95837(r,e,o){var a=o(18139);o.d(e,["A",0,function(r){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;const[o,t]=(0,a.useState)(r);return(0,a.useEffect)(()=>{const o=setTimeout(()=>{t(r)},e);return()=>{clearTimeout(o)}},[r,e]),o}])},70701(r,e,o){o.d(e,{A:()=>c}),o(18139);var a=o(54499),t=o(28751),i=o(29615);const n=(0,t.Ay)(i.A,{shouldForwardProp:r=>"muiType"!==r&&"horizontalMargin"!==r&&"verticalMargin"!==r&&"bottomMargin"!==r})`
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

  ${r=>{let{muiType:e}=r;switch(e){case"primary":return a.AH`
          border-color: var(--color-primary-border);
          background: var(--color-primary);
          color: var(--color-on-primary);

          &:hover {
            background: var(--color-primary-hover);
            color: var(--color-on-primary);
          }
        `;case"secondary":return a.AH`
          border-color: var(--color-border-strong);
          background: var(--color-surface);
          color: var(--color-text);

          &:hover {
            border-color: var(--color-primary);
            background: var(--color-primary-soft);
            color: var(--color-primary);
          }
        `;case"success":return a.AH`
          border-color: var(--color-primary);
          background: var(--color-primary);
          color: var(--color-on-primary);

          &:hover {
            background: var(--color-primary-hover);
            color: var(--color-on-primary);
          }
        `;case"error":return a.AH`
          border-color: var(--color-danger-border);
          background: var(--color-danger-soft);
          color: var(--color-danger-text);

          &:hover {
            background: var(--color-danger-soft);
            border-color: var(--color-danger);
            color: var(--color-danger-text);
          }
        `;case"edit":return a.AH`
          border-color: var(--color-warning-border);
          background: var(--color-warning-soft);
          color: var(--color-warning-text);

          &:hover {
            background: var(--color-warning-soft);
            border-color: var(--color-warning);
            color: var(--color-warning-text);
          }
        `;case"info":return a.AH`
          border-color: var(--color-primary-border);
          background: var(--color-primary-soft);
          color: var(--color-primary);

          &:hover {
            background: var(--color-primary-soft-hover);
            color: var(--color-primary-hover);
          }
        `;default:return a.AH`
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

  ${r=>a.AH`
  ${!0===r.horizontalMargin&&a.AH`
    margin-left: 8px;
    margin-right: 8px;
  `}

  ${!0===r.verticalMargin&&a.AH`
    margin-top: 8px;
    margin-bottom: 8px;
  `}

  ${!0===r.bottomMargin&&a.AH`
    margin-top: 8px;
    margin-bottom: 24px;
  `}
`}
`;var l=o(20811);const c=r=>{let{fullWidth:e,type:o,onClick:a,leftIcon:t,rightIcon:i,text:c,muiType:d,horizontalMargin:s,verticalMargin:p,bottomMargin:h,disabled:g,ariaLabel:x}=r;return(0,l.jsx)(n,{fullWidth:e,type:o,muiType:d,startIcon:t,endIcon:i,onClick:a,verticalMargin:p||!1,horizontalMargin:s||!1,bottomMargin:h||!1,disabled:g,"aria-label":x,children:c})}},51222(r,e,o){var a=o(18139),t=o(61),i=o(28751),n=o(4780),l=o(18815);const c=t.Ay.div({width:"100%",maxWidth:"var(--app-content-width, 1440px)",minWidth:0,margin:"0 auto",textAlign:"left"}),d=t.Ay.div({display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"16px 24px",marginBottom:"24px","@media (max-width: 760px)":{display:"grid",gridTemplateColumns:"minmax(0, 1fr)",marginBottom:"18px"}}),s=t.Ay.div({display:"grid",gap:"6px",minWidth:0}),p=t.Ay.h1({margin:0,color:"var(--color-text)",fontSize:"clamp(24px, 2.35vw, 34px)",fontWeight:800,letterSpacing:"-.04em",lineHeight:1.2,overflowWrap:"anywhere"}),h=t.Ay.p({maxWidth:"720px",margin:0,color:"var(--color-muted)",fontSize:"14px",fontWeight:450,lineHeight:1.6}),g=t.Ay.section({width:"100%",minWidth:0,padding:"var(--panel-padding)",background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"var(--radius-xl)",boxShadow:"var(--shadow-soft)"}),x=t.Ay.div({display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"12px",width:"100%",marginBottom:"14px","@media (max-width: 760px)":{display:"grid",gridTemplateColumns:"minmax(0, 1fr)"}}),v=t.Ay.div({display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"}),u=t.Ay.div({display:"grid",alignItems:"start",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",gap:"12px","@media (max-width: 760px)":{gridTemplateColumns:"minmax(0, 1fr)"}}),m=t.Ay.form({display:"grid",gridTemplateColumns:"minmax(0, 1fr)",alignItems:"start",gap:"14px",width:"min(720px, 100%)",minWidth:0,padding:"var(--panel-padding)",background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"16px",boxShadow:"var(--shadow-soft)","@media (max-width: 560px)":{gap:"12px",padding:"14px"}}),b=t.Ay.div({display:"grid",placeItems:"center",gap:"8px",minHeight:"220px",padding:"28px",color:"var(--color-muted)",textAlign:"center",background:"var(--color-surface)",border:"1px dashed var(--color-border-strong)",borderRadius:"16px"}),f=(t.Ay.div({marginBottom:"8px",color:"var(--color-danger)",fontSize:"13px",fontWeight:650}),(0,i.Ay)(n.zh)({width:"100%",minWidth:0,"&.MuiDataGrid-autoHeight":{overflow:"visible","& .MuiDataGrid-main":{overflow:"visible"},"& .MuiDataGrid-columnHeaders":{position:"sticky",top:"var(--app-header-height)",zIndex:2,backgroundColor:"var(--color-surface-soft)",boxShadow:"0 1px 0 var(--color-border)"}}}));o.d(e,["Dk",0,c,"Fp",0,s,"I_",0,h,"M7",0,x,"aN",0,r=>{const{language:e}=(0,l.Bd)(),o=(0,a.useMemo)(()=>({...(0,l.it)(e),...r.localeText}),[e,r.localeText]);return a.createElement(f,{...r,localeText:o})},"kA",0,m,"pp",0,b,"sT",0,p,"ui",0,g,"vY",0,u,"v_",0,v,"zY",0,d])},69797(r,e,o){o.d(e,{A:()=>s}),o(18139);var a=o(54499),t=o(28751),i=o(46143);const n=(0,t.Ay)(i.A,{shouldForwardProp:r=>"horizontalMargin"!==r&&"verticalMargin"!==r&&"halfWidth"!==r&&"topMargin"!==r})`
  width: 100%;
  min-width: 0;

  .MuiOutlinedInput-root {
    border-radius: 10px;
    background-color: var(--color-surface);
  }

  .MuiFormHelperText-root {
    font-weight: 650;
  }

  ${r=>!0===r.horizontalMargin&&a.AH`
      margin-left: 8px;
      margin-right: 8px;
      width: calc(100% - 16px);
    `}

  ${r=>!0===r.verticalMargin&&a.AH`
      margin-top: 8px;
      margin-bottom: 8px;
    `}

  ${r=>!0===r.topMargin&&a.AH`
        margin-top: 12px;
      `}

  ${r=>!0===r.halfWidth&&a.AH`
      width: min(100%, 520px);
    `}
`;var l=o(70166),c=o(42407),d=o(20811);const s=r=>{let{required:e=!1,value:o,onChange:a,label:t,verticalMargin:i=!1,horizontalMargin:s=!1,inputEvent:p,halfWidth:h=!1,disabled:g=!1,topMargin:x=!1,type:v="text",inputProps:u,register:m,name:b,error:f,fieldArray:A}=r;const y={disabled:g,halfWidth:h,required:e,topMargin:x,verticalMargin:i,horizontalMargin:s,value:o,label:t,type:v,inputProps:u,InputProps:p?{endAdornment:(0,d.jsx)(l.A,{position:"end",children:(0,d.jsx)(c.A,{onClick:()=>p()})})}:void 0};return m?(0,d.jsx)(n,{error:!!f,helperText:f,...y,onChange:a,...m(b)}):A?(0,d.jsx)(n,{onChange:a,error:!!f,helperText:f,...y}):(0,d.jsx)(n,{onChange:a,...y})}}}]);