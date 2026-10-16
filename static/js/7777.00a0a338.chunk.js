"use strict";(globalThis.webpackChunkvivotech_crm_client||=[]).push([[7777],{1252(r,o,e){e.d(o,{A:()=>c});e(9950);var a=e(5429),t=e(226),i=e(8965),n=e(6814),l=e(4414);function c(r){let{error:o,onRetry:e}=r;const{t:c}=(0,n.Bd)();return(0,l.jsx)(a.A,{severity:"error",action:(0,l.jsx)(t.A,{onClick:()=>{e()},children:c("\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c")}),children:(0,i.S)(o,c("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435. \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441."))})}},7777(r,o,e){e.r(o),e.d(o,{default:()=>S});var a=e(9348),t=e(8965),i=e(1252),n=e(9950),l=e(2074),c=e(9532),d=e(8977),s=e(7489),p=e(4117),g=e(4992),v=e(4414);const x=(r,o)=>[{field:"name",headerName:o("\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),minWidth:220,flex:1},{field:"price",headerName:o("\u0426\u0435\u043d\u0430, BYN"),width:130},{field:"Edit",headerName:o("\u041f\u0440\u0430\u0432\u043a\u0430"),type:"actions",width:92,getActions:r=>[(0,v.jsx)(s.Z,{icon:(0,v.jsx)(l.k2,{style:{textDecoration:"none",color:"inherit"},to:`/deliveryMethods/editDeliveryMethod/${r.id}`,children:(0,v.jsx)(p.A,{})}),label:o("\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c")})]},{field:"Delete",headerName:o("\u0423\u0434\u0430\u043b\u0438\u0442\u044c"),type:"actions",width:92,getActions:e=>[(0,v.jsx)(s.Z,{icon:(0,v.jsx)(g.A,{}),label:o("\u0423\u0434\u0430\u043b\u0438\u0442\u044c"),onClick:()=>r(e.id)})]}];var h=e(475),m=e(3464),u=e(33),b=e(8170),A=e(8874),f=e(9739),y=e(226),w=e(6814);const j=r=>{let{isOpen:o,isDeleting:e,setOpen:a,deleteDeliveryMethod:t}=r;const{t:i}=(0,w.Bd)();return(0,v.jsxs)(m.A,{open:o,onClose:()=>{e||a(!1)},children:[(0,v.jsx)(u.A,{children:i("\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u0441\u043f\u043e\u0441\u043e\u0431\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438")}),(0,v.jsx)(b.A,{children:(0,v.jsx)(A.A,{children:i("\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u044d\u0442\u043e\u0442 \u0441\u043f\u043e\u0441\u043e\u0431 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438 \u0438\u0437 \u0441\u0438\u0441\u0442\u0435\u043c\u044b?")})}),(0,v.jsxs)(f.A,{children:[(0,v.jsx)(y.A,{disabled:e,onClick:()=>a(!1),children:i("\u041e\u0442\u043c\u0435\u043d\u0430")}),(0,v.jsx)(y.A,{color:"error",disabled:e,onClick:()=>t(),autoFocus:!0,children:i("\u0423\u0434\u0430\u043b\u0438\u0442\u044c")})]})]})};var M=e(7961),k=e(7716);const S=()=>{const{t:r}=(0,w.Bd)(),[o,e]=(0,n.useState)(),[s,p]=(0,n.useState)(!1),{data:g=[],isLoading:m,isError:u,error:b,refetch:A}=(0,k._7)({}),[f,{isLoading:y}]=(0,k.b1)({});return m?(0,v.jsx)(M.A,{}):u?(0,v.jsx)(h.Dk,{children:(0,v.jsx)(i.A,{error:b,onRetry:A})}):(0,v.jsxs)(h.Dk,{children:[(0,v.jsx)(j,{isOpen:s,isDeleting:y,setOpen:p,deleteDeliveryMethod:async function(){if(!y&&void 0!==o)try{await f(o).unwrap(),a.oR.success(r("\u0421\u043f\u043e\u0441\u043e\u0431 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438 \u0443\u0434\u0430\u043b\u0451\u043d.")),p(!1)}catch(e){a.oR.error((0,t.S)(e,r("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u044c.")))}}}),(0,v.jsxs)(h.zY,{children:[(0,v.jsxs)(h.Fp,{children:[(0,v.jsx)(h.sT,{children:r("\u0421\u043f\u043e\u0441\u043e\u0431\u044b \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438")}),(0,v.jsx)(h.I_,{children:r("\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0438 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438 \u0434\u043b\u044f \u0440\u0430\u0441\u0447\u0435\u0442\u0430 \u0437\u0430\u043a\u0430\u0437\u043e\u0432.")})]}),(0,v.jsx)(l.k2,{to:"createDeliveryMethod",style:{textDecoration:"none"},children:(0,v.jsx)(d.A,{muiType:"success",leftIcon:(0,v.jsx)(c.A,{}),text:r("\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u043f\u043e\u0441\u043e\u0431")})})]}),(0,v.jsx)(h.ui,{children:(0,v.jsx)(h.aN,{loading:m,pagination:!0,autoHeight:!0,rows:g,columns:x(r=>{p(!0),e(r)},r),pageSizeOptions:[25,50,100],disableRowSelectionOnClick:!0})})]})}},8977(r,o,e){e.d(o,{A:()=>c});e(9950);var a=e(1866),t=e(9254),i=e(226);const n=(0,t.Ay)(i.A,{shouldForwardProp:r=>"muiType"!==r&&"horizontalMargin"!==r&&"verticalMargin"!==r&&"bottomMargin"!==r})`
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
`;var l=e(4414);const c=r=>{let{fullWidth:o,type:e,onClick:a,leftIcon:t,rightIcon:i,text:c,muiType:d,horizontalMargin:s,verticalMargin:p,bottomMargin:g,disabled:v,ariaLabel:x}=r;return(0,l.jsx)(n,{fullWidth:o,type:e,muiType:d,startIcon:t,endIcon:i,onClick:a,verticalMargin:p||!1,horizontalMargin:s||!1,bottomMargin:g||!1,disabled:v,"aria-label":x,children:c})}},475(r,o,e){var a=e(9950),t=e(132),i=e(9254),n=e(34),l=e(6814);const c=t.Ay.div({width:"100%",maxWidth:"1360px",minWidth:0,margin:"0 auto",textAlign:"left"}),d=t.Ay.div({display:"flex",flexWrap:"wrap",alignItems:"flex-start",justifyContent:"space-between",gap:"24px",marginBottom:"28px","@media (max-width: 760px)":{display:"grid"}}),s=t.Ay.div({display:"grid",gap:"10px",minWidth:0}),p=t.Ay.h1({margin:0,color:"var(--color-text)",fontSize:"clamp(28px, 3vw, 36px)",fontWeight:800,letterSpacing:"-.045em",lineHeight:1.18,"@media (max-width: 760px)":{fontSize:"25px"}}),g=t.Ay.p({maxWidth:"720px",margin:0,color:"var(--color-muted)",fontSize:"14px",fontWeight:450,lineHeight:1.6}),v=t.Ay.section({width:"100%",minWidth:0,padding:"var(--panel-padding)",background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"var(--radius-xl)",boxShadow:"var(--shadow-soft)"}),x=t.Ay.div({display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"12px",width:"100%",marginBottom:"14px","@media (max-width: 760px)":{display:"grid"}}),h=t.Ay.div({display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"}),m=t.Ay.div({display:"grid",alignItems:"start",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",gap:"12px","@media (max-width: 760px)":{gridTemplateColumns:"1fr"}}),u=t.Ay.form({display:"grid",gridTemplateColumns:"minmax(0, 1fr)",alignItems:"start",gap:"14px",width:"min(720px, 100%)",minWidth:0,padding:"var(--panel-padding)",background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"16px",boxShadow:"var(--shadow-soft)","@media (max-width: 560px)":{gap:"12px",padding:"14px"}}),b=t.Ay.div({display:"grid",placeItems:"center",gap:"8px",minHeight:"220px",padding:"28px",color:"var(--color-muted)",textAlign:"center",background:"var(--color-surface)",border:"1px dashed var(--color-border-strong)",borderRadius:"16px"}),A=(t.Ay.div({marginBottom:"8px",color:"var(--color-danger)",fontSize:"13px",fontWeight:650}),(0,i.Ay)(n.zh)({width:"100%",minWidth:0,"&.MuiDataGrid-autoHeight":{overflow:"visible","& .MuiDataGrid-main":{overflow:"visible"},"& .MuiDataGrid-columnHeaders":{position:"sticky",top:"var(--app-header-height)",zIndex:2,backgroundColor:"var(--color-surface-soft)",boxShadow:"0 1px 0 var(--color-border)"}}}));e.d(o,["Dk",0,c,"Fp",0,s,"I_",0,g,"M7",0,x,"aN",0,r=>{const{language:o}=(0,l.Bd)(),e=(0,a.useMemo)(()=>({...(0,l.it)(o),...r.localeText}),[o,r.localeText]);return a.createElement(A,{...r,localeText:e})},"kA",0,u,"pp",0,b,"sT",0,p,"ui",0,v,"vY",0,m,"v_",0,h,"zY",0,d])},9532(r,o,e){var a=e(4994);o.A=void 0;var t=a(e(9526)),i=e(4414);o.A=(0,t.default)((0,i.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add")},4992(r,o,e){var a=e(4994);o.A=void 0;var t=a(e(9526)),i=e(4414);o.A=(0,t.default)([(0,i.jsx)("path",{d:"M8 9h8v10H8z",opacity:".3"},"0"),(0,i.jsx)("path",{d:"m15.5 4-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8z"},"1")],"DeleteTwoTone")},4117(r,o,e){var a=e(4994);o.A=void 0;var t=a(e(9526)),i=e(4414);o.A=(0,t.default)([(0,i.jsx)("path",{d:"M5 18.08V19h.92l9.06-9.06-.92-.92z",opacity:".3"},"0"),(0,i.jsx)("path",{d:"M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM5.92 19H5v-.92l9.06-9.06.92.92z"},"1")],"EditTwoTone")},9739(r,o,e){e.d(o,{A:()=>m});var a=e(8587),t=e(8168),i=e(9950),n=e(533),l=e(8465),c=e(9254),d=e(8283),s=e(1763),p=e(423);function g(r){return(0,p.Ay)("MuiDialogActions",r)}(0,s.A)("MuiDialogActions",["root","spacing"]);var v=e(4414);const x=["className","disableSpacing"],h=(0,c.Ay)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(r,o)=>{const{ownerState:e}=r;return[o.root,!e.disableSpacing&&o.spacing]}})(r=>{let{ownerState:o}=r;return(0,t.A)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!o.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})}),m=i.forwardRef(function(r,o){const e=(0,d.A)({props:r,name:"MuiDialogActions"}),{className:i,disableSpacing:c=!1}=e,s=(0,a.A)(e,x),p=(0,t.A)({},e,{disableSpacing:c}),m=(r=>{const{classes:o,disableSpacing:e}=r,a={root:["root",!e&&"spacing"]};return(0,l.A)(a,g,o)})(p);return(0,v.jsx)(h,(0,t.A)({className:(0,n.A)(m.root,i),ownerState:p,ref:o},s))})},8874(r,o,e){e.d(o,{A:()=>u});var a=e(8587),t=e(8168),i=e(9950),n=e(533),l=e(8465),c=e(9254),d=e(8283),s=e(2053),p=e(1763),g=e(423);function v(r){return(0,g.Ay)("MuiDialogContentText",r)}(0,p.A)("MuiDialogContentText",["root"]);var x=e(4414);const h=["children","className"],m=(0,c.Ay)(s.A,{shouldForwardProp:r=>(0,c.ep)(r)||"classes"===r,name:"MuiDialogContentText",slot:"Root",overridesResolver:(r,o)=>o.root})({}),u=i.forwardRef(function(r,o){const e=(0,d.A)({props:r,name:"MuiDialogContentText"}),{className:i}=e,c=(0,a.A)(e,h),s=(r=>{const{classes:o}=r,e=(0,l.A)({root:["root"]},v,o);return(0,t.A)({},o,e)})(c);return(0,x.jsx)(m,(0,t.A)({component:"p",variant:"body1",color:"text.secondary",ref:o,ownerState:c,className:(0,n.A)(s.root,i)},e,{classes:s}))})},7489(r,o,e){var a=e(8168),t=e(8587),i=e(9950),n=e(3266),l=e(4195),c=e(539),d=e(4414);const s=["label","icon","showInMenu","onClick"],p=i.forwardRef((r,o)=>{const{label:e,icon:p,showInMenu:g,onClick:v}=r,x=(0,t.A)(r,s),h=(0,c.A)(),m=r=>{v&&v(r)};var u;return g?(0,d.jsxs)(n.A,(0,a.A)({ref:o},x,{onClick:v,children:[p&&(0,d.jsx)(l.A,{children:p}),e]})):(0,d.jsx)(h.slots.baseIconButton,(0,a.A)({ref:o,size:"small",role:"menuitem","aria-label":e},x,{onClick:m},null==(u=h.slotProps)?void 0:u.baseIconButton,{children:i.cloneElement(p,{fontSize:"small"})}))});e.d(o,["Z",0,p])}}]);