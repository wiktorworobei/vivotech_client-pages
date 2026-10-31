"use strict";(globalThis.webpackChunkvivotech_crm_client||=[]).push([[7004],{7004(r,e,o){o.r(e),o.d(e,{default:()=>$});var a=o(3518),t=o(2817),i=o(5043),n=o(35),l=o(6600),c=o(5316),d=o(8533),s=o(9347),p=o(1906),h=o(6974),g=o(2505),x=o(6360),v=o(155),u=o(697),m=o(5475),b=o(2153),f=o(2225),A=o(2790),y=o(580),w=o(1680),j=o(2815),k=o(8220),M=o(1045),C=o(4918),S=o(6688),z=o(677),H=o(579);const T=(r,e)=>[{field:"imageName",align:"center",headerName:"",width:64,renderCell:r=>(0,H.jsx)(M.A,{sx:{width:36,height:36,borderRadius:"10px"},variant:"rounded",src:r.value,alt:r.row.name})},{field:"name",headerName:e("Name"),minWidth:240,flex:1,renderCell:r=>(0,H.jsx)(m.k2,{to:`/servicesManagement/${r.id}`,style:{color:"inherit",textDecoration:"none"},children:r.value})},{field:"price",headerName:e("Price, BYN"),type:"number",align:"center",width:130},{field:"category",headerName:e("Category"),sortable:!0,minWidth:160,flex:.7},{field:"Edit",headerName:e("Edit"),type:"actions",width:92,getActions:r=>[(0,H.jsx)(C.Z,{icon:(0,H.jsx)(m.k2,{style:{textDecoration:"none",color:"inherit"},to:`/servicesManagement/editService/${r.id}`,children:(0,H.jsx)(S.A,{})}),label:e("Edit")})]},{field:"Delete",headerName:e("Delete"),type:"actions",width:92,getActions:o=>[(0,H.jsx)(C.Z,{icon:(0,H.jsx)(z.A,{}),label:e("Delete"),onClick:()=>r(o.id)})]}];var D=o(8784),W=o(7830),I=o(2145);const N=b.Ay.div({display:"flex",alignItems:"center",gap:"8px",color:"var(--color-muted)",fontSize:"13px",fontWeight:760}),R={pageNumber:1,pageSize:15,categories:[],searchTerm:""},$=()=>{var r,e;const{t:o}=(0,D.Bd)(),[b,M]=(0,i.useState)(R),{data:C,isLoading:S,isFetching:z,isError:$,error:B,refetch:E}=(0,k.Gs)(b),[F,{isLoading:P}]=(0,k.B0)({}),[L,{isLoading:Y}]=(0,k.kR)(),[_,V]=(0,i.useState)(""),G=(0,j.A)(_),[O,q]=(0,i.useState)(!1),[Z,J]=(0,i.useState)(""),[K,Q]=(0,i.useState)([]),[U,X]=(0,i.useState)(!1);(0,i.useEffect)(()=>{M(r=>({...r,searchTerm:G}))},[G]);return S&&!_?(0,H.jsx)(f.A,{}):$?(0,H.jsx)(w.Dk,{children:(0,H.jsx)(t.A,{error:B,onRetry:E})}):(0,H.jsxs)(w.Dk,{children:[(0,H.jsx)(W.A,{open:U,selectedCount:K.length,isLoading:Y,onClose:()=>X(!1),onConfirm:async()=>{try{const r=await L({ids:K.map(Number)}).unwrap();Q([]),X(!1),I.oR.success(o("Deleted items: {count}",{count:r.deleted}))}catch(r){I.oR.error((0,a.S)(r,o("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u044c.")))}}}),(0,H.jsxs)(n.A,{open:O,onClose:()=>{P||q(!1)},children:[(0,H.jsx)(l.A,{children:o("Confirm service deletion")}),(0,H.jsx)(c.A,{children:(0,H.jsx)(d.A,{children:o("Do you really want to delete this service from the system?")})}),(0,H.jsxs)(s.A,{children:[(0,H.jsx)(p.A,{disabled:P,onClick:()=>q(!1),children:o("Cancel")}),(0,H.jsx)(p.A,{color:"error",disabled:P,onClick:()=>{!async function(){try{await F(Z).unwrap(),I.oR.success(o("\u0423\u0441\u043b\u0443\u0433\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0430.")),Q(r=>r.filter(r=>r!==Z)),q(!1)}catch(r){I.oR.error((0,a.S)(r,o("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u044c.")))}}()},autoFocus:!0,children:o("Delete")})]})]}),(0,H.jsxs)(w.zY,{children:[(0,H.jsxs)(w.Fp,{children:[(0,H.jsx)(w.sT,{children:o("Services")}),(0,H.jsx)(w.I_,{children:o("Service catalog with prices, categories, and quick search.")})]}),(0,H.jsx)(m.k2,{to:"createService",style:{textDecoration:"none"},children:(0,H.jsx)(A.A,{muiType:"success",text:o("Add service"),leftIcon:(0,H.jsx)(g.A,{})})})]}),(0,H.jsxs)(w.ui,{children:[(0,H.jsxs)(w.M7,{children:[(0,H.jsxs)(N,{children:[(0,H.jsx)(x.A,{fontSize:"small"}),o("Service search")]}),(0,H.jsxs)(w.v_,{children:[K.length>0&&(0,H.jsx)(A.A,{muiType:"secondary",text:o("Clear selection"),leftIcon:(0,H.jsx)(v.A,{}),onClick:()=>Q([])}),(0,H.jsx)(A.A,{muiType:"error",text:o("Delete selected ({count})",{count:K.length}),leftIcon:(0,H.jsx)(u.A,{}),disabled:0===K.length||Y,onClick:()=>X(!0)}),(0,H.jsx)(A.A,{text:o("Filters"),leftIcon:(0,H.jsx)(h.A,{})})]})]}),(0,H.jsx)(y.A,{verticalMargin:!0,value:_||"",label:o("Service name or description..."),onChange:r=>{V(r.target.value)}}),(0,H.jsx)(w.aN,{pagination:!0,paginationMode:"server",rowCount:null!==(r=null===C||void 0===C?void 0:C.metaData.totalCount)&&void 0!==r?r:0,autoHeight:!0,rows:null!==(e=null===C||void 0===C?void 0:C.items)&&void 0!==e?e:[],columns:T(r=>{q(!0),J(r)},o),loading:S||z,onPaginationModelChange:r=>(r=>{M(e=>({...e,pageNumber:r.page,pageSize:r.pageSize}))})(r),pageSizeOptions:[25,50,100],disableRowSelectionOnClick:!0,checkboxSelection:!0,keepNonExistentRowsSelected:!0,rowSelectionModel:K,onRowSelectionModelChange:Q})]})]})}},2817(r,e,o){o.d(e,{A:()=>c});o(5043);var a=o(7254),t=o(1906),i=o(3518),n=o(8784),l=o(579);function c(r){let{error:e,onRetry:o}=r;const{t:c}=(0,n.Bd)();return(0,l.jsx)(a.A,{severity:"error",action:(0,l.jsx)(t.A,{onClick:()=>{o()},children:c("\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c")}),children:(0,i.S)(e,c("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435. \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441."))})}},7830(r,e,o){o(5043);var a=o(35),t=o(6600),i=o(5316),n=o(8533),l=o(9347),c=o(1906),d=o(8784),s=o(579);const p=r=>{let{open:e,selectedCount:o,isLoading:p=!1,onClose:h,onConfirm:g}=r;const{t:x}=(0,d.Bd)(),v=o>500;return(0,s.jsxs)(a.A,{open:e,onClose:p?void 0:h,children:[(0,s.jsx)(t.A,{children:x("Delete selected items?")}),(0,s.jsxs)(i.A,{children:[(0,s.jsx)(n.A,{children:x("You are about to delete {count} selected items. This action cannot be undone.",{count:o})}),v&&(0,s.jsx)(n.A,{color:"error",children:x("You can delete no more than 500 items at once.")})]}),(0,s.jsxs)(l.A,{children:[(0,s.jsx)(c.A,{onClick:h,disabled:p,children:x("Cancel")}),(0,s.jsx)(c.A,{color:"error",onClick:g,disabled:p||0===o||v,autoFocus:!0,children:p?x("Deleting..."):x("Delete selected ({count})",{count:o})})]})]})};o.d(e,["A",0,p])},2815(r,e,o){var a=o(5043);const t=function(r){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;const[o,t]=(0,a.useState)(r);return(0,a.useEffect)(()=>{const o=setTimeout(()=>{t(r)},e);return()=>{clearTimeout(o)}},[r,e]),o};o.d(e,["A",0,t])},2790(r,e,o){o.d(e,{A:()=>c});o(5043);var a=o(7819),t=o(4535),i=o(1906);const n=(0,t.Ay)(i.A,{shouldForwardProp:r=>"muiType"!==r&&"horizontalMargin"!==r&&"verticalMargin"!==r&&"bottomMargin"!==r})`
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
`;var l=o(579);const c=r=>{let{fullWidth:e,type:o,onClick:a,leftIcon:t,rightIcon:i,text:c,muiType:d,horizontalMargin:s,verticalMargin:p,bottomMargin:h,disabled:g,ariaLabel:x}=r;return(0,l.jsx)(n,{fullWidth:e,type:o,muiType:d,startIcon:t,endIcon:i,onClick:a,verticalMargin:p||!1,horizontalMargin:s||!1,bottomMargin:h||!1,disabled:g,"aria-label":x,children:c})}},1680(r,e,o){var a=o(5043),t=o(2153),i=o(4535),n=o(3080),l=o(8784);const c=t.Ay.div({width:"100%",maxWidth:"1360px",minWidth:0,margin:"0 auto",textAlign:"left"}),d=t.Ay.div({display:"flex",flexWrap:"wrap",alignItems:"flex-start",justifyContent:"space-between",gap:"24px",marginBottom:"28px","@media (max-width: 760px)":{display:"grid"}}),s=t.Ay.div({display:"grid",gap:"10px",minWidth:0}),p=t.Ay.h1({margin:0,color:"var(--color-text)",fontSize:"clamp(28px, 3vw, 36px)",fontWeight:800,letterSpacing:"-.045em",lineHeight:1.18,"@media (max-width: 760px)":{fontSize:"25px"}}),h=t.Ay.p({maxWidth:"720px",margin:0,color:"var(--color-muted)",fontSize:"14px",fontWeight:450,lineHeight:1.6}),g=t.Ay.section({width:"100%",minWidth:0,padding:"var(--panel-padding)",background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"var(--radius-xl)",boxShadow:"var(--shadow-soft)"}),x=t.Ay.div({display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"12px",width:"100%",marginBottom:"14px","@media (max-width: 760px)":{display:"grid"}}),v=t.Ay.div({display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"}),u=t.Ay.div({display:"grid",alignItems:"start",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",gap:"12px","@media (max-width: 760px)":{gridTemplateColumns:"1fr"}}),m=t.Ay.form({display:"grid",gridTemplateColumns:"minmax(0, 1fr)",alignItems:"start",gap:"14px",width:"min(720px, 100%)",minWidth:0,padding:"var(--panel-padding)",background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"16px",boxShadow:"var(--shadow-soft)","@media (max-width: 560px)":{gap:"12px",padding:"14px"}}),b=t.Ay.div({display:"grid",placeItems:"center",gap:"8px",minHeight:"220px",padding:"28px",color:"var(--color-muted)",textAlign:"center",background:"var(--color-surface)",border:"1px dashed var(--color-border-strong)",borderRadius:"16px"}),f=(t.Ay.div({marginBottom:"8px",color:"var(--color-danger)",fontSize:"13px",fontWeight:650}),(0,i.Ay)(n.zh)({width:"100%",minWidth:0,"&.MuiDataGrid-autoHeight":{overflow:"visible","& .MuiDataGrid-main":{overflow:"visible"},"& .MuiDataGrid-columnHeaders":{position:"sticky",top:"var(--app-header-height)",zIndex:2,backgroundColor:"var(--color-surface-soft)",boxShadow:"0 1px 0 var(--color-border)"}}}));o.d(e,["Dk",0,c,"Fp",0,s,"I_",0,h,"M7",0,x,"aN",0,r=>{const{language:e}=(0,l.Bd)(),o=(0,a.useMemo)(()=>({...(0,l.it)(e),...r.localeText}),[e,r.localeText]);return a.createElement(f,{...r,localeText:o})},"kA",0,m,"pp",0,b,"sT",0,p,"ui",0,g,"vY",0,u,"v_",0,v,"zY",0,d])},580(r,e,o){o.d(e,{A:()=>s});o(5043);var a=o(7819),t=o(4535),i=o(7784);const n=(0,t.Ay)(i.A,{shouldForwardProp:r=>"horizontalMargin"!==r&&"verticalMargin"!==r&&"halfWidth"!==r&&"topMargin"!==r})`
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
`;var l=o(1787),c=o(3471),d=o(579);const s=r=>{let{required:e=!1,value:o,onChange:a,label:t,verticalMargin:i=!1,horizontalMargin:s=!1,inputEvent:p,halfWidth:h=!1,disabled:g=!1,topMargin:x=!1,type:v="text",inputProps:u,register:m,name:b,error:f,fieldArray:A}=r;const y={disabled:g,halfWidth:h,required:e,topMargin:x,verticalMargin:i,horizontalMargin:s,value:o,label:t,type:v,inputProps:u,InputProps:p?{endAdornment:(0,d.jsx)(l.A,{position:"end",children:(0,d.jsx)(c.A,{onClick:()=>p()})})}:void 0};return m?(0,d.jsx)(n,{error:!!f,helperText:f,...y,onChange:a,...m(b)}):A?(0,d.jsx)(n,{onChange:a,error:!!f,helperText:f,...y}):(0,d.jsx)(n,{onChange:a,...y})}},2505(r,e,o){var a=o(4994);e.A=void 0;var t=a(o(39)),i=o(579);e.A=(0,t.default)((0,i.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add")},697(r,e,o){var a=o(4994);e.A=void 0;var t=a(o(39)),i=o(579);e.A=(0,t.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8zm7.5-5-1-1h-5l-1 1H5v2h14V4z"}),"DeleteOutline")},677(r,e,o){var a=o(4994);e.A=void 0;var t=a(o(39)),i=o(579);e.A=(0,t.default)([(0,i.jsx)("path",{d:"M8 9h8v10H8z",opacity:".3"},"0"),(0,i.jsx)("path",{d:"m15.5 4-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8z"},"1")],"DeleteTwoTone")}}]);
//# sourceMappingURL=7004.ebabe3df.chunk.js.map