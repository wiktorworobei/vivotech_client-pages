"use strict";(globalThis.webpackChunkvivotech_crm_client||=[]).push([[2932],{2932(r,o,e){e.r(o),e.d(o,{default:()=>R});var a=e.cw(function(r,o){var e=l();o.A=void 0;var a=e(i()),t=n();o.A=(0,a.default)((0,t.jsx)("path",{d:"M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3zM7 9H4V5h3zm10 6h3v4h-3zm0-10h3v4h-3z"}),"AccountTreeOutlined")}),t=e.cw(function(r,o){var e=l();o.A=void 0;var a=e(i()),t=n();o.A=(0,a.default)((0,t.jsx)("path",{d:"M21 6.5c-1.66 0-3 1.34-3 3 0 .07 0 .14.01.21l-2.03.68c-.64-1.21-1.82-2.09-3.22-2.32V5.91C14.04 5.57 15 4.4 15 3c0-1.66-1.34-3-3-3S9 1.34 9 3c0 1.4.96 2.57 2.25 2.91v2.16c-1.4.23-2.58 1.11-3.22 2.32l-2.04-.68C6 9.64 6 9.57 6 9.5c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3c1.06 0 1.98-.55 2.52-1.37l2.03.68c-.2 1.29.17 2.66 1.09 3.69l-1.41 1.77C6.85 17.09 6.44 17 6 17c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3c0-.68-.22-1.3-.6-1.8l1.41-1.77c1.36.76 3.02.75 4.37 0l1.41 1.77c-.37.5-.59 1.12-.59 1.8 0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3c-.44 0-.85.09-1.23.26l-1.41-1.77c.93-1.04 1.29-2.4 1.09-3.69l2.03-.68c.53.82 1.46 1.37 2.52 1.37 1.66 0 3-1.34 3-3S22.66 6.5 21 6.5m-18 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1M6 21c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m5-18c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1m1 12c-1.38 0-2.5-1.12-2.5-2.5S10.62 10 12 10s2.5 1.12 2.5 2.5S13.38 15 12 15m6 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m3-8.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"}),"HubOutlined")}),i=()=>e(9526),n=()=>e(4414),l=()=>e(4994),c=e(9348),d=e(8965),s=e(1252),p=e(9950),g=e(3464),h=e(33),x=e(8170),v=e(8874),u=e(9739),m=e(226),A=e(6080);n();var b=e(7961),f=e(8977),y=e(7489),w=e(4117),j=e(4992);const M=(r,o,e)=>[{field:"name",headerName:e("\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),minWidth:240,flex:1},{field:"Edit",headerName:e("\u041f\u0440\u0430\u0432\u043a\u0430"),type:"actions",width:92,getActions:r=>[(0,n().jsx)(y.Z,{icon:(0,n().jsx)(w.A,{}),label:e("\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"),onClick:()=>o(r.row)})]},{field:"Delete",headerName:e("\u0423\u0434\u0430\u043b\u0438\u0442\u044c"),type:"actions",width:92,getActions:o=>[(0,n().jsx)(y.Z,{icon:(0,n().jsx)(j.A,{}),label:e("\u0423\u0434\u0430\u043b\u0438\u0442\u044c"),onClick:()=>r(o.id)})]}];var C=e(475),k=e(2074),S=e(132),z=e(9642),H=e(6814);const T=S.Ay.form({display:"grid",gap:"12px",padding:"0 24px 16px"}),I=r=>{let{open:o,categoryToEdit:e,setCategoryToEdit:a,setOpen:t,editCategory:i}=r;const{t:l}=(0,H.Bd)(),[s,x]=(0,p.useState)(!1);return e&&o?(0,n().jsxs)(g.A,{fullWidth:!0,open:o,onClose:()=>{s||t(!1)},children:[(0,n().jsx)(h.A,{children:l("\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438")}),(0,n().jsxs)(T,{onSubmit:r=>(async r=>{if(r.preventDefault(),e&&!s){x(!0);try{await i({categoryId:e.id,category:{name:e.name}}).unwrap(),c.oR.success(l("\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0430.")),a(void 0),t(!1)}catch(o){c.oR.error((0,d.S)(o,l("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u044c.")))}finally{x(!1)}}})(r),children:[(0,n().jsx)(z.A,{required:!0,label:l("\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"),value:e.name,onChange:r=>{a({...e,name:r.target.value})}}),(0,n().jsxs)(u.A,{sx:{padding:0},children:[(0,n().jsx)(m.A,{disabled:s,onClick:()=>t(!1),children:l("\u041e\u0442\u043c\u0435\u043d\u0430")}),(0,n().jsx)(m.A,{type:"submit",disabled:s,children:l("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")})]})]})]}):null};var D=e(344),W=e(489);const R=r=>{let{categoryType:o=D.h.Product,basePath:e="/productCategories"}=r;const{data:i=[],isLoading:l,isError:y,error:w,refetch:j}=(0,W.Wm)({type:o}),[S,{isLoading:z}]=(0,W.ec)({}),[T]=(0,W.hj)({}),{t:R}=(0,H.Bd)(),N=o===D.h.Service,[V,$]=(0,p.useState)(-1),[E,B]=(0,p.useState)(),[P,_]=(0,p.useState)(!1),[F,O]=(0,p.useState)(!1);return l?(0,n().jsx)(b.A,{}):y?(0,n().jsx)(C.Dk,{children:(0,n().jsx)(s.A,{error:w,onRetry:j})}):(0,n().jsxs)(C.Dk,{children:[(0,n().jsxs)(g.A,{open:P,onClose:()=>{z||_(!1)},children:[(0,n().jsx)(h.A,{children:R("Confirm category deletion")}),(0,n().jsx)(x.A,{children:(0,n().jsx)(v.A,{children:R("Deleting a category can rebuild the hierarchy. Categories with catalog items cannot be deleted.")})}),(0,n().jsxs)(u.A,{children:[(0,n().jsx)(m.A,{disabled:z,onClick:()=>_(!1),autoFocus:!0,children:R("Cancel")}),(0,n().jsx)(m.A,{color:"error",disabled:z,onClick:async()=>{if(!(z||V<0))try{await S(V).unwrap(),c.oR.success(R("\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f \u0443\u0434\u0430\u043b\u0435\u043d\u0430.")),$(-1),_(!1)}catch(r){c.oR.error((0,d.S)(r,R("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u044c.")))}},children:R("Delete")})]})]}),(0,n().jsx)(I,{open:F,setOpen:O,categoryToEdit:E,setCategoryToEdit:B,editCategory:T}),(0,n().jsx)(C.zY,{children:(0,n().jsxs)(C.Fp,{children:[(0,n().jsx)(C.sT,{children:R(N?"Service categories":"Product categories")}),(0,n().jsx)(C.I_,{children:R(N?"Structure service categories separately from product catalog data.":"Structure product categories separately from service catalog data.")})]})}),(0,n().jsxs)(C.ui,{children:[(0,n().jsx)(C.M7,{children:(0,n().jsxs)(C.v_,{children:[(0,n().jsx)(A.A,{component:k.N_,style:{textDecoration:"none"},to:`${e}/hierarchy`,children:(0,n().jsx)(f.A,{muiType:"info",text:R("Manage hierarchy"),leftIcon:(0,n().jsx)(a().A,{})})}),(0,n().jsx)(A.A,{component:k.N_,style:{textDecoration:"none"},to:`${e}/categoriesGraphTree`,children:(0,n().jsx)(f.A,{text:R("Category map"),leftIcon:(0,n().jsx)(t().A,{})})})]})}),(0,n().jsx)(C.aN,{pagination:!0,autoHeight:!0,rows:i,columns:M(r=>{_(!0),$(r)},r=>{B(r),O(!0)},R),pageSizeOptions:[25,50,100],disableRowSelectionOnClick:!0})]})]})}},1252(r,o,e){e.d(o,{A:()=>c});e(9950);var a=e(5429),t=e(226),i=e(8965),n=e(6814),l=e(4414);function c(r){let{error:o,onRetry:e}=r;const{t:c}=(0,n.Bd)();return(0,l.jsx)(a.A,{severity:"error",action:(0,l.jsx)(t.A,{onClick:()=>{e()},children:c("\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c")}),children:(0,i.S)(o,c("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435. \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441."))})}},8977(r,o,e){e.d(o,{A:()=>c});e(9950);var a=e(1866),t=e(9254),i=e(226);const n=(0,t.Ay)(i.A,{shouldForwardProp:r=>"muiType"!==r&&"horizontalMargin"!==r&&"verticalMargin"!==r&&"bottomMargin"!==r})`
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

  ${r=>{let{muiType:o}=r;switch(o){case"primary":return a.AH`
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
`;var l=e(4414);const c=r=>{let{fullWidth:o,type:e,onClick:a,leftIcon:t,rightIcon:i,text:c,muiType:d,horizontalMargin:s,verticalMargin:p,bottomMargin:g,disabled:h,ariaLabel:x}=r;return(0,l.jsx)(n,{fullWidth:o,type:e,muiType:d,startIcon:t,endIcon:i,onClick:a,verticalMargin:p||!1,horizontalMargin:s||!1,bottomMargin:g||!1,disabled:h,"aria-label":x,children:c})}},475(r,o,e){var a=e(9950),t=e(132),i=e(9254),n=e(34),l=e(6814);const c=t.Ay.div({width:"100%",maxWidth:"1360px",minWidth:0,margin:"0 auto",textAlign:"left"}),d=t.Ay.div({display:"flex",flexWrap:"wrap",alignItems:"flex-start",justifyContent:"space-between",gap:"24px",marginBottom:"28px","@media (max-width: 760px)":{display:"grid"}}),s=t.Ay.div({display:"grid",gap:"10px",minWidth:0}),p=t.Ay.h1({margin:0,color:"var(--color-text)",fontSize:"clamp(28px, 3vw, 36px)",fontWeight:800,letterSpacing:"-.045em",lineHeight:1.18,"@media (max-width: 760px)":{fontSize:"25px"}}),g=t.Ay.p({maxWidth:"720px",margin:0,color:"var(--color-muted)",fontSize:"14px",fontWeight:450,lineHeight:1.6}),h=t.Ay.section({width:"100%",minWidth:0,padding:"var(--panel-padding)",background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"var(--radius-xl)",boxShadow:"var(--shadow-soft)"}),x=t.Ay.div({display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"12px",width:"100%",marginBottom:"14px","@media (max-width: 760px)":{display:"grid"}}),v=t.Ay.div({display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"}),u=t.Ay.div({display:"grid",alignItems:"start",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",gap:"12px","@media (max-width: 760px)":{gridTemplateColumns:"1fr"}}),m=t.Ay.form({display:"grid",gridTemplateColumns:"minmax(0, 1fr)",alignItems:"start",gap:"14px",width:"min(720px, 100%)",minWidth:0,padding:"var(--panel-padding)",background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"16px",boxShadow:"var(--shadow-soft)","@media (max-width: 560px)":{gap:"12px",padding:"14px"}}),A=t.Ay.div({display:"grid",placeItems:"center",gap:"8px",minHeight:"220px",padding:"28px",color:"var(--color-muted)",textAlign:"center",background:"var(--color-surface)",border:"1px dashed var(--color-border-strong)",borderRadius:"16px"}),b=(t.Ay.div({marginBottom:"8px",color:"var(--color-danger)",fontSize:"13px",fontWeight:650}),(0,i.Ay)(n.zh)({width:"100%",minWidth:0,"&.MuiDataGrid-autoHeight":{overflow:"visible","& .MuiDataGrid-main":{overflow:"visible"},"& .MuiDataGrid-columnHeaders":{position:"sticky",top:"var(--app-header-height)",zIndex:2,backgroundColor:"var(--color-surface-soft)",boxShadow:"0 1px 0 var(--color-border)"}}}));e.d(o,["Dk",0,c,"Fp",0,s,"I_",0,g,"M7",0,x,"aN",0,r=>{const{language:o}=(0,l.Bd)(),e=(0,a.useMemo)(()=>({...(0,l.it)(o),...r.localeText}),[o,r.localeText]);return a.createElement(b,{...r,localeText:e})},"kA",0,m,"pp",0,A,"sT",0,p,"ui",0,h,"vY",0,u,"v_",0,v,"zY",0,d])},9642(r,o,e){e.d(o,{A:()=>s});e(9950);var a=e(1866),t=e(9254),i=e(8145);const n=(0,t.Ay)(i.A,{shouldForwardProp:r=>"horizontalMargin"!==r&&"verticalMargin"!==r&&"halfWidth"!==r&&"topMargin"!==r})`
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
`;var l=e(2046),c=e(7988),d=e(4414);const s=r=>{let{required:o=!1,value:e,onChange:a,label:t,verticalMargin:i=!1,horizontalMargin:s=!1,inputEvent:p,halfWidth:g=!1,disabled:h=!1,topMargin:x=!1,type:v="text",register:u,name:m,error:A,fieldArray:b}=r;const f={disabled:h,halfWidth:g,required:o,topMargin:x,verticalMargin:i,horizontalMargin:s,value:e,label:t,type:v,InputProps:p?{endAdornment:(0,d.jsx)(l.A,{position:"end",children:(0,d.jsx)(c.A,{onClick:()=>p()})})}:void 0};return u?(0,d.jsx)(n,{error:!!A,helperText:A,...f,onChange:a,...u(m)}):b?(0,d.jsx)(n,{onChange:a,error:!!A,helperText:A,...f}):(0,d.jsx)(n,{onChange:a,...f})}},7988(r,o,e){var a=e(4994);o.A=void 0;var t=a(e(9526)),i=e(4414);o.A=(0,t.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete")},4992(r,o,e){var a=e(4994);o.A=void 0;var t=a(e(9526)),i=e(4414);o.A=(0,t.default)([(0,i.jsx)("path",{d:"M8 9h8v10H8z",opacity:".3"},"0"),(0,i.jsx)("path",{d:"m15.5 4-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8z"},"1")],"DeleteTwoTone")},4117(r,o,e){var a=e(4994);o.A=void 0;var t=a(e(9526)),i=e(4414);o.A=(0,t.default)([(0,i.jsx)("path",{d:"M5 18.08V19h.92l9.06-9.06-.92-.92z",opacity:".3"},"0"),(0,i.jsx)("path",{d:"M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM5.92 19H5v-.92l9.06-9.06.92.92z"},"1")],"EditTwoTone")},9739(r,o,e){e.d(o,{A:()=>u});var a=e(8587),t=e(8168),i=e(9950),n=e(533),l=e(8465),c=e(9254),d=e(8283),s=e(1763),p=e(423);function g(r){return(0,p.Ay)("MuiDialogActions",r)}(0,s.A)("MuiDialogActions",["root","spacing"]);var h=e(4414);const x=["className","disableSpacing"],v=(0,c.Ay)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(r,o)=>{const{ownerState:e}=r;return[o.root,!e.disableSpacing&&o.spacing]}})(r=>{let{ownerState:o}=r;return(0,t.A)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!o.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})}),u=i.forwardRef(function(r,o){const e=(0,d.A)({props:r,name:"MuiDialogActions"}),{className:i,disableSpacing:c=!1}=e,s=(0,a.A)(e,x),p=(0,t.A)({},e,{disableSpacing:c}),u=(r=>{const{classes:o,disableSpacing:e}=r,a={root:["root",!e&&"spacing"]};return(0,l.A)(a,g,o)})(p);return(0,h.jsx)(v,(0,t.A)({className:(0,n.A)(u.root,i),ownerState:p,ref:o},s))})},8874(r,o,e){e.d(o,{A:()=>m});var a=e(8587),t=e(8168),i=e(9950),n=e(533),l=e(8465),c=e(9254),d=e(8283),s=e(2053),p=e(1763),g=e(423);function h(r){return(0,g.Ay)("MuiDialogContentText",r)}(0,p.A)("MuiDialogContentText",["root"]);var x=e(4414);const v=["children","className"],u=(0,c.Ay)(s.A,{shouldForwardProp:r=>(0,c.ep)(r)||"classes"===r,name:"MuiDialogContentText",slot:"Root",overridesResolver:(r,o)=>o.root})({}),m=i.forwardRef(function(r,o){const e=(0,d.A)({props:r,name:"MuiDialogContentText"}),{className:i}=e,c=(0,a.A)(e,v),s=(r=>{const{classes:o}=r,e=(0,l.A)({root:["root"]},h,o);return(0,t.A)({},o,e)})(c);return(0,x.jsx)(u,(0,t.A)({component:"p",variant:"body1",color:"text.secondary",ref:o,ownerState:c,className:(0,n.A)(s.root,i)},e,{classes:s}))})},7489(r,o,e){var a=e(8168),t=e(8587),i=e(9950),n=e(3266),l=e(4195),c=e(539),d=e(4414);const s=["label","icon","showInMenu","onClick"],p=i.forwardRef((r,o)=>{const{label:e,icon:p,showInMenu:g,onClick:h}=r,x=(0,t.A)(r,s),v=(0,c.A)(),u=r=>{h&&h(r)};var m;return g?(0,d.jsxs)(n.A,(0,a.A)({ref:o},x,{onClick:h,children:[p&&(0,d.jsx)(l.A,{children:p}),e]})):(0,d.jsx)(v.slots.baseIconButton,(0,a.A)({ref:o,size:"small",role:"menuitem","aria-label":e},x,{onClick:u},null==(m=v.slotProps)?void 0:m.baseIconButton,{children:i.cloneElement(p,{fontSize:"small"})}))});e.d(o,["Z",0,p])}}]);