"use strict";(globalThis.webpackChunkvivotech_crm_client||=[]).push([[5922],{5922(r,e,o){o.r(e),o.d(e,{default:()=>rr});var a=o(8965),i=o(1252),t=o(9950),n=o(3464),l=o(33),d=o(8170),c=o(8874),s=o(9739),u=o(226),p=o(5277),g=o(8145),m=o(2046),h=o(5333),x=o(3788),v=o(9532),b=o(7762),A=o(9440),f=o(6592),y=o(5410),j=o(2074),w=o(132),C=o(7961),k=o(8977),S=o(475),z=o(3929),M=o(6089),I=o(3263),T=o(9985),W=o(6213),D=o(3011),H=o(3274),N=o(6817),$=o(3266),R=o(4195),P=o(1413),F=o(6814),B=o(7906),E=o(4414);function L(r){let{id:e,name:o,onDelete:a,t:i}=r;const[n,l]=(0,t.useState)(null);return(0,E.jsxs)(D.A,{sx:{display:"flex",gap:.5},children:[(0,E.jsx)(H.A,{title:i("\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"),children:(0,E.jsx)(h.A,{size:"small",component:j.k2,to:`/productsManagement/editProduct/productDetails/${e}`,"aria-label":`${i("\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435")}: ${o}`,children:(0,E.jsx)(T.A,{fontSize:"small"})})}),(0,E.jsx)(H.A,{title:i("Actions"),children:(0,E.jsx)(h.A,{size:"small","aria-label":`${i("Actions")}: ${o}`,"aria-haspopup":"menu","aria-expanded":Boolean(n),onClick:r=>l(r.currentTarget),children:(0,E.jsx)(W.A,{fontSize:"small"})})}),(0,E.jsxs)(N.A,{anchorEl:n,open:Boolean(n),onClose:()=>l(null),children:[(0,E.jsxs)($.A,{component:j.k2,to:`/productsManagement/editProduct/${e}`,onClick:()=>l(null),children:[(0,E.jsx)(R.A,{children:(0,E.jsx)(M.A,{fontSize:"small"})}),i("\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c")]}),(0,E.jsxs)($.A,{component:j.k2,to:`/productsManagement/copyProduct/${e}`,onClick:()=>l(null),children:[(0,E.jsx)(R.A,{children:(0,E.jsx)(z.A,{fontSize:"small"})}),i("\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c")]}),(0,E.jsxs)($.A,{sx:{color:"error.main"},onClick:()=>{l(null),a(e)},children:[(0,E.jsx)(R.A,{sx:{color:"inherit"},children:(0,E.jsx)(I.A,{fontSize:"small"})}),i("\u0423\u0434\u0430\u043b\u0438\u0442\u044c")]})]})]})}const Y=function(r,e){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(0,B.UN)((0,F.UK)()).locale;return[{field:"imageName",align:"center",headerName:"",width:56,sortable:!1,renderCell:r=>(0,E.jsx)(P.A,{sx:{width:36,height:36,borderRadius:"10px",bgcolor:"primary.light",color:"primary.main",fontSize:14,fontWeight:700},variant:"rounded",src:r.value,alt:r.row.name,children:String(r.row.name||"").slice(0,1)})},{field:"name",headerName:e("\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),minWidth:220,flex:1,renderCell:r=>(0,E.jsx)(D.A,{component:j.k2,to:`/productsManagement/editProduct/productDetails/${r.id}`,sx:{fontWeight:650,color:"text.primary",textDecoration:"none","&:hover":{color:"primary.main"}},children:r.value})},{field:"price",headerName:e("\u0426\u0435\u043d\u0430, BYN"),type:"number",align:"right",headerAlign:"right",width:118,valueFormatter:r=>Number(r.value).toLocaleString(o,{minimumFractionDigits:2,maximumFractionDigits:2})},{field:"gtin",headerName:"GTIN",minWidth:136,flex:.55},{field:"category",headerName:e("\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f"),minWidth:144,flex:.6,renderCell:r=>r.value?(0,E.jsx)(p.A,{size:"small",label:r.value,sx:{bgcolor:"action.hover",color:"text.secondary"}}):"\u2014"},{field:"actions",headerName:e("Actions"),width:92,align:"right",headerAlign:"right",sortable:!1,filterable:!1,disableColumnMenu:!0,renderCell:o=>(0,E.jsx)(L,{id:o.id,name:o.row.name,onDelete:r,t:e})}]};var O=o(3236),_=o(341),q=o(344),G=o(489),V=o(9292),K=o(6458),U=o(1225),J=o(9348);const Q=w.Ay.div({display:"flex",alignItems:"center",gap:"8px",color:"var(--color-muted)",fontSize:"13px",fontWeight:700}),X=w.Ay.div({display:"grid",gridTemplateColumns:"minmax(0, 1fr) minmax(0, 0.6fr) auto",gap:"14px",alignItems:"end","@media (max-width: 820px)":{gridTemplateColumns:"1fr"}}),Z={pageNumber:1,pageSize:25,productCategories:[],searchTerm:""},rr=()=>{var r,e,o,w;const{t:z,locale:M}=(0,F.Bd)(),[I,T]=(0,t.useState)(Z),{data:W,isLoading:D,isFetching:H,isError:N,error:$,refetch:R}=(0,_.Kc)(I),{data:P=[]}=(0,G.md)({type:q.h.Product}),[B,{isLoading:L}]=(0,_.lY)({}),[rr,{isLoading:er}]=(0,_.IT)(),[or,ar]=(0,t.useState)(""),ir=(0,O.A)(or),[tr,nr]=(0,t.useState)(!1),[lr,dr]=(0,t.useState)(""),[cr,sr]=(0,t.useState)([]),[ur,pr]=(0,t.useState)(!1),[gr,mr]=(0,t.useState)({page:0,pageSize:Z.pageSize}),hr=[{id:"",name:z("All categories")},...P.map(r=>({id:r.name,name:r.name}))];(0,t.useEffect)(()=>{T(r=>({...r,searchTerm:ir,pageNumber:1})),mr(r=>({...r,page:0}))},[ir]);return D&&!or?(0,E.jsx)(C.A,{}):N?(0,E.jsx)(S.Dk,{children:(0,E.jsx)(i.A,{error:$,onRetry:R})}):(0,E.jsxs)(S.Dk,{children:[(0,E.jsx)(U.A,{open:ur,selectedCount:cr.length,isLoading:er,onClose:()=>pr(!1),onConfirm:async()=>{try{const r=await rr({ids:cr.map(Number)}).unwrap();sr([]),pr(!1),J.oR.success(z("Deleted items: {count}",{count:r.deleted}))}catch(r){J.oR.error((0,a.S)(r,z("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u044c.")))}}}),(0,E.jsxs)(n.A,{open:tr,onClose:()=>{L||nr(!1)},children:[(0,E.jsx)(l.A,{children:z("\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430")}),(0,E.jsx)(d.A,{children:(0,E.jsx)(c.A,{children:z("\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u044d\u0442\u043e\u0442 \u043f\u0440\u043e\u0434\u0443\u043a\u0442 \u0438\u0437 \u0441\u0438\u0441\u0442\u0435\u043c\u044b?")})}),(0,E.jsxs)(s.A,{children:[(0,E.jsx)(u.A,{disabled:L,onClick:()=>nr(!1),children:z("\u041e\u0442\u043c\u0435\u043d\u0430")}),(0,E.jsx)(u.A,{color:"error",disabled:L,onClick:()=>{!async function(){try{await B(lr).unwrap(),J.oR.success(z("\u041f\u0440\u043e\u0434\u0443\u043a\u0442 \u0443\u0434\u0430\u043b\u0451\u043d.")),sr(r=>r.filter(r=>r!==lr)),nr(!1)}catch(r){J.oR.error((0,a.S)(r,z("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u044c.")))}}()},autoFocus:!0,children:z("\u0423\u0434\u0430\u043b\u0438\u0442\u044c")})]})]}),(0,E.jsxs)(S.zY,{children:[(0,E.jsxs)(S.Fp,{children:[(0,E.jsx)(S.sT,{children:z("\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b")}),(0,E.jsx)(S.I_,{children:z("\u041a\u0430\u0442\u0430\u043b\u043e\u0433 \u0442\u043e\u0432\u0430\u0440\u043e\u0432 \u0441 \u0446\u0435\u043d\u0430\u043c\u0438, \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f\u043c\u0438, \u0431\u044b\u0441\u0442\u0440\u044b\u043c \u043f\u043e\u0438\u0441\u043a\u043e\u043c \u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f\u043c\u0438.")})]}),(0,E.jsx)(j.k2,{to:"createProduct",style:{textDecoration:"none"},children:(0,E.jsx)(k.A,{muiType:"success",text:z("\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0440\u043e\u0434\u0443\u043a\u0442"),leftIcon:(0,E.jsx)(v.A,{})})})]}),(0,E.jsxs)(S.ui,{children:[(0,E.jsxs)(S.M7,{children:[(0,E.jsxs)(Q,{children:[(0,E.jsx)(A.A,{fontSize:"small"}),z("Catalog filters"),(0,E.jsx)(p.A,{size:"small",color:"primary",label:z("Found: {count}",{count:null!==(r=null===W||void 0===W?void 0:W.metaData.totalCount)&&void 0!==r?r:0})})]}),(0,E.jsxs)(S.v_,{children:[cr.length>0&&(0,E.jsx)(k.A,{muiType:"secondary",text:z("Clear selection"),leftIcon:(0,E.jsx)(b.A,{}),onClick:()=>sr([])}),cr.length>0&&(0,E.jsx)(k.A,{muiType:"error",text:z("Delete selected ({count})",{count:cr.length}),leftIcon:(0,E.jsx)(f.A,{}),disabled:0===cr.length||er,onClick:()=>pr(!0)})]})]}),(0,E.jsxs)(X,{children:[(0,E.jsx)(g.A,{size:"small",value:or||"",label:z("\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u0430 \u0438\u043b\u0438 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435..."),onChange:r=>ar(r.target.value),InputProps:{startAdornment:(0,E.jsx)(m.A,{position:"start",children:(0,E.jsx)(y.A,{fontSize:"small"})}),endAdornment:or?(0,E.jsx)(m.A,{position:"end",children:(0,E.jsx)(h.A,{size:"small","aria-label":"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043f\u043e\u0438\u0441\u043a \u0442\u043e\u0432\u0430\u0440\u043e\u0432",onClick:()=>ar(""),children:(0,E.jsx)(b.A,{fontSize:"small"})})}):void 0}}),(0,E.jsxs)(V.A,{children:[(0,E.jsx)(x.A,{children:z("Category")}),(0,E.jsx)(K.A,{required:!1,value:null!==(e=I.categories)&&void 0!==e?e:"",label:z("Category"),menuItemProps:hr,onChange:r=>{T(e=>({...e,categories:String(r.target.value)||void 0,pageNumber:1})),mr(r=>({...r,page:0}))}})]}),(0,E.jsx)(k.A,{muiType:"secondary",text:z("Reset filters"),leftIcon:(0,E.jsx)(b.A,{}),disabled:!or&&!I.categories,onClick:()=>{ar(""),T({...Z}),mr({page:0,pageSize:Z.pageSize})}})]}),(0,E.jsx)(S.aN,{sx:{mt:2.5},pagination:!0,paginationMode:"server",rowCount:null!==(o=null===W||void 0===W?void 0:W.metaData.totalCount)&&void 0!==o?o:0,autoHeight:!0,rows:null!==(w=null===W||void 0===W?void 0:W.items)&&void 0!==w?w:[],columns:Y(r=>{nr(!0),dr(r)},z,M),loading:D||H,onPaginationModelChange:r=>(r=>{T(e=>({...e,pageNumber:r.page+1,pageSize:r.pageSize})),mr(r)})(r),paginationModel:gr,pageSizeOptions:[25,50,100],disableRowSelectionOnClick:!0,checkboxSelection:!0,keepNonExistentRowsSelected:!0,rowSelectionModel:cr,onRowSelectionModelChange:sr})]})]})}},1252(r,e,o){o.d(e,{A:()=>d});o(9950);var a=o(5429),i=o(226),t=o(8965),n=o(6814),l=o(4414);function d(r){let{error:e,onRetry:o}=r;const{t:d}=(0,n.Bd)();return(0,l.jsx)(a.A,{severity:"error",action:(0,l.jsx)(i.A,{onClick:()=>{o()},children:d("\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c")}),children:(0,t.S)(e,d("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435. \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441."))})}},1225(r,e,o){o(9950);var a=o(3464),i=o(33),t=o(8170),n=o(8874),l=o(9739),d=o(226),c=o(6814),s=o(4414);const u=r=>{let{open:e,selectedCount:o,isLoading:u=!1,onClose:p,onConfirm:g}=r;const{t:m}=(0,c.Bd)(),h=o>500;return(0,s.jsxs)(a.A,{open:e,onClose:u?void 0:p,children:[(0,s.jsx)(i.A,{children:m("Delete selected items?")}),(0,s.jsxs)(t.A,{children:[(0,s.jsx)(n.A,{children:m("You are about to delete {count} selected items. This action cannot be undone.",{count:o})}),h&&(0,s.jsx)(n.A,{color:"error",children:m("You can delete no more than 500 items at once.")})]}),(0,s.jsxs)(l.A,{children:[(0,s.jsx)(d.A,{onClick:p,disabled:u,children:m("Cancel")}),(0,s.jsx)(d.A,{color:"error",onClick:g,disabled:u||0===o||h,autoFocus:!0,children:u?m("Deleting..."):m("Delete selected ({count})",{count:o})})]})]})};o.d(e,["A",0,u])},3236(r,e,o){var a=o(9950);const i=function(r){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;const[o,i]=(0,a.useState)(r);return(0,a.useEffect)(()=>{const o=setTimeout(()=>{i(r)},e);return()=>{clearTimeout(o)}},[r,e]),o};o.d(e,["A",0,i])},8977(r,e,o){o.d(e,{A:()=>d});o(9950);var a=o(1866),i=o(9254),t=o(226);const n=(0,i.Ay)(t.A,{shouldForwardProp:r=>"muiType"!==r&&"horizontalMargin"!==r&&"verticalMargin"!==r&&"bottomMargin"!==r})`
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
`;var l=o(4414);const d=r=>{let{fullWidth:e,type:o,onClick:a,leftIcon:i,rightIcon:t,text:d,muiType:c,horizontalMargin:s,verticalMargin:u,bottomMargin:p,disabled:g,ariaLabel:m}=r;return(0,l.jsx)(n,{fullWidth:e,type:o,muiType:c,startIcon:i,endIcon:t,onClick:a,verticalMargin:u||!1,horizontalMargin:s||!1,bottomMargin:p||!1,disabled:g,"aria-label":m,children:d})}},475(r,e,o){var a=o(9950),i=o(132),t=o(9254),n=o(34),l=o(6814);const d=i.Ay.div({width:"100%",maxWidth:"1360px",minWidth:0,margin:"0 auto",textAlign:"left"}),c=i.Ay.div({display:"flex",flexWrap:"wrap",alignItems:"flex-start",justifyContent:"space-between",gap:"24px",marginBottom:"28px","@media (max-width: 760px)":{display:"grid"}}),s=i.Ay.div({display:"grid",gap:"10px",minWidth:0}),u=i.Ay.h1({margin:0,color:"var(--color-text)",fontSize:"clamp(28px, 3vw, 36px)",fontWeight:800,letterSpacing:"-.045em",lineHeight:1.18,"@media (max-width: 760px)":{fontSize:"25px"}}),p=i.Ay.p({maxWidth:"720px",margin:0,color:"var(--color-muted)",fontSize:"14px",fontWeight:450,lineHeight:1.6}),g=i.Ay.section({width:"100%",minWidth:0,padding:"var(--panel-padding)",background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"var(--radius-xl)",boxShadow:"var(--shadow-soft)"}),m=i.Ay.div({display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"12px",width:"100%",marginBottom:"14px","@media (max-width: 760px)":{display:"grid"}}),h=i.Ay.div({display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"}),x=i.Ay.div({display:"grid",alignItems:"start",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",gap:"12px","@media (max-width: 760px)":{gridTemplateColumns:"1fr"}}),v=i.Ay.form({display:"grid",gridTemplateColumns:"minmax(0, 1fr)",alignItems:"start",gap:"14px",width:"min(720px, 100%)",minWidth:0,padding:"var(--panel-padding)",background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"16px",boxShadow:"var(--shadow-soft)","@media (max-width: 560px)":{gap:"12px",padding:"14px"}}),b=i.Ay.div({display:"grid",placeItems:"center",gap:"8px",minHeight:"220px",padding:"28px",color:"var(--color-muted)",textAlign:"center",background:"var(--color-surface)",border:"1px dashed var(--color-border-strong)",borderRadius:"16px"}),A=(i.Ay.div({marginBottom:"8px",color:"var(--color-danger)",fontSize:"13px",fontWeight:650}),(0,t.Ay)(n.zh)({width:"100%",minWidth:0,"&.MuiDataGrid-autoHeight":{overflow:"visible","& .MuiDataGrid-main":{overflow:"visible"},"& .MuiDataGrid-columnHeaders":{position:"sticky",top:"var(--app-header-height)",zIndex:2,backgroundColor:"var(--color-surface-soft)",boxShadow:"0 1px 0 var(--color-border)"}}}));o.d(e,["Dk",0,d,"Fp",0,s,"I_",0,p,"M7",0,m,"aN",0,r=>{const{language:e}=(0,l.Bd)(),o=(0,a.useMemo)(()=>({...(0,l.it)(e),...r.localeText}),[e,r.localeText]);return a.createElement(A,{...r,localeText:o})},"kA",0,v,"pp",0,b,"sT",0,u,"ui",0,g,"vY",0,x,"v_",0,h,"zY",0,c])},9292(r,e,o){o.d(e,{A:()=>d});o(9950);var a=o(1866),i=o(9254),t=o(5979);const n=(0,i.Ay)(t.A,{shouldForwardProp:r=>"horizontalMargin"!==r&&"verticalMargin"!==r})`
  width: 100%;
  min-width: 0;

  ${r=>!0===r.horizontalMargin&&a.AH`
      margin-left: 8px;
      margin-right: 8px;
      width: calc(100% - 16px);
    `}

  ${r=>!0===r.verticalMargin&&a.AH`
      margin-top: 8px;
      margin-bottom: 8px;
    `}
`;var l=o(4414);const d=r=>{let{verticalMargin:e,horizontalMargin:o,error:a,children:i}=r;return(0,l.jsx)(n,{fullWidth:!0,error:a,horizontalMargin:o,verticalMargin:e,children:i})}},6458(r,e,o){o.d(e,{A:()=>c});o(9950);var a=o(1866),i=o(9254),t=o(6);const n=(0,i.Ay)(t.A,{shouldForwardProp:r=>"halfWidth"!==r})`
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

  ${r=>!0===r.halfWidth&&a.AH`
      width: min(100%, 520px);
    `}
`;var l=o(3266),d=o(4414);const c=r=>{let{value:e,onChange:o,label:a,menuItemProps:i,register:t,name:c,error:s,required:u,defaultValue:p,disabled:g,withoutId:m}=r;return t&&m?(0,d.jsx)(n,{displayEmpty:!0,defaultValue:p,disabled:g,required:u,error:!!s,...t(c),value:e,onChange:o,label:a,children:i&&i.map(r=>(0,d.jsx)(l.A,{value:r,children:r},String(r)))}):t?(0,d.jsx)(n,{displayEmpty:!0,defaultValue:p,disabled:g,required:u,error:!!s,...t(c),value:e,onChange:o,label:a,children:i&&i.map(r=>(0,d.jsx)(l.A,{value:r.id,children:r.name},r.id))}):(0,d.jsx)(n,{value:e,onChange:o,label:a,required:!1!==u,disabled:g,children:i&&i.map(r=>(0,d.jsx)(l.A,{value:r.id,children:r.name},r.id))})}}}]);