"use strict";(globalThis.webpackChunkvivotech_crm_client||=[]).push([[2708],{2708(r,e,o){o.r(e);var a=o(9950),t=o(3464),i=o(33),n=o(8170),l=o(8874),d=o(9739),c=o(226),s=o(7489),p=o(6089),g=o(6592),u=o(9532),v=o(2074),m=o(8429),h=o(9348),x=o(344),b=o(8535),f=o(9823),A=o(3978),y=o(8965),w=o(3766),j=o(341),k=o(7125),C=o(5383),M=o(7961),S=o(8977),T=o(475),z=o(4414);const H=()=>{const{t:r,language:e}=(0,A.Bd)(),o=(0,m.Zp)(),H=(0,w.jL)(),{data:I=[],isLoading:D,isFetching:R}=(0,f.H3)(void 0,{pollingInterval:3e3}),[N,{isLoading:W}]=(0,f.z0)(),[P,B]=(0,a.useState)(),F=(0,a.useMemo)(()=>({[b.j.Pending]:r("Pending"),[b.j.Running]:r("Running"),[b.j.Completed]:r("Completed"),[b.j.Failed]:r("Failed"),[b.j.Cancelled]:r("Cancelled")}),[r]),G=(0,a.useMemo)(()=>[{field:"name",headerName:r("Batch name"),minWidth:210,flex:1},{field:"baseItemName",headerName:r("Base product or service"),minWidth:200,flex:1},{field:"itemType",headerName:r("Type"),width:120,valueFormatter:e=>{let{value:o}=e;return o===x.h.Product?r("Product"):r("Service")}},{field:"status",headerName:r("Status"),width:140,valueFormatter:r=>{var e;let{value:o}=r;return null!==(e=F[o])&&void 0!==e?e:String(o)}},{field:"created",headerName:r("Created items"),type:"number",width:125},{field:"total",headerName:r("Planned items"),type:"number",width:125},{field:"createdAt",headerName:r("Created"),width:180,valueFormatter:r=>{let{value:o}=r;return new Intl.DateTimeFormat(e,{dateStyle:"short",timeStyle:"short"}).format(new Date(o))}},{field:"actions",type:"actions",headerName:r("Actions"),width:110,getActions:e=>[(0,z.jsx)(s.Z,{icon:(0,z.jsx)(p.A,{}),label:r("Edit batch"),disabled:e.row.status===b.j.Pending||e.row.status===b.j.Running,onClick:()=>o(`/catalogGeneration?editBatchId=${e.row.id}`)},"edit"),(0,z.jsx)(s.Z,{icon:(0,z.jsx)(g.A,{}),label:r("Delete batch"),onClick:()=>B(e.row)},"delete")]}],[e,o,F,r]);return D?(0,z.jsx)(M.A,{}):(0,z.jsxs)(T.Dk,{children:[(0,z.jsxs)(t.A,{open:Boolean(P),onClose:()=>!W&&B(void 0),children:[(0,z.jsx)(i.A,{children:r("Delete generation batch?")}),(0,z.jsx)(n.A,{children:(0,z.jsx)(l.A,{children:r("All products and services created by batch {name} will be removed from the catalog.",{name:null===P||void 0===P?void 0:P.name})})}),(0,z.jsxs)(d.A,{children:[(0,z.jsx)(c.A,{disabled:W,onClick:()=>B(void 0),children:r("Cancel")}),(0,z.jsx)(c.A,{disabled:W,color:"error",onClick:async()=>{if(P)try{const e=await N(P.id).unwrap();h.oR.success(r("Deleted products: {products}; services: {services}",{products:e.deletedProducts,services:e.deletedServices})),H(j.ZN.util.invalidateTags(["Products","Product"])),H(k.XU.util.invalidateTags(["Services","Service"])),H(C.Rx.util.invalidateTags(["Stock"])),B(void 0)}catch(e){h.oR.error((0,y.S)(e,r("Generation batch could not be deleted.")))}},children:r("Delete")})]})]}),(0,z.jsxs)(T.zY,{children:[(0,z.jsxs)(T.Fp,{children:[(0,z.jsx)(T.sT,{children:r("Generation batches")}),(0,z.jsx)(T.I_,{children:r("Generated catalog groups, their progress, editing, and complete removal.")})]}),(0,z.jsx)(v.k2,{to:"/catalogGeneration",style:{textDecoration:"none"},children:(0,z.jsx)(S.A,{muiType:"success",text:r("Create generation batch"),leftIcon:(0,z.jsx)(u.A,{})})})]}),(0,z.jsx)(T.ui,{children:(0,z.jsx)(T.aN,{autoHeight:!0,rows:I,columns:G,loading:R,pageSizeOptions:[25,50,100],initialState:{pagination:{paginationModel:{pageSize:25,page:0}}},disableRowSelectionOnClick:!0})})]})};o.d(e,["default",0,H])},8535(r,e,o){o.d(e,{W:()=>t,j:()=>a});let a=function(r){return r[r.Pending=0]="Pending",r[r.Running=1]="Running",r[r.Completed=2]="Completed",r[r.Failed=3]="Failed",r[r.Cancelled=4]="Cancelled",r}({}),t=function(r){return r[r.Single=0]="Single",r[r.ByModification=1]="ByModification",r}({})},8977(r,e,o){o.d(e,{A:()=>d});o(9950);var a=o(1866),t=o(9254),i=o(226);const n=(0,t.Ay)(i.A,{shouldForwardProp:r=>"muiType"!==r&&"horizontalMargin"!==r&&"verticalMargin"!==r&&"bottomMargin"!==r})`
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
`;var l=o(4414);const d=r=>{let{fullWidth:e,type:o,onClick:a,leftIcon:t,rightIcon:i,text:d,muiType:c,horizontalMargin:s,verticalMargin:p,bottomMargin:g,disabled:u,ariaLabel:v}=r;return(0,l.jsx)(n,{fullWidth:e,type:o,muiType:c,startIcon:t,endIcon:i,onClick:a,verticalMargin:p||!1,horizontalMargin:s||!1,bottomMargin:g||!1,disabled:u,"aria-label":v,children:d})}},475(r,e,o){var a=o(9950),t=o(132),i=o(9254),n=o(8707),l=o(3978);const d=t.Ay.div({width:"100%",maxWidth:"1360px",minWidth:0,margin:"0 auto",textAlign:"left"}),c=t.Ay.div({display:"flex",flexWrap:"wrap",alignItems:"flex-start",justifyContent:"space-between",gap:"24px",marginBottom:"28px","@media (max-width: 760px)":{display:"grid"}}),s=t.Ay.div({display:"grid",gap:"10px",minWidth:0}),p=t.Ay.h1({margin:0,color:"var(--color-text)",fontSize:"clamp(28px, 3vw, 36px)",fontWeight:800,letterSpacing:"-.045em",lineHeight:1.18,"@media (max-width: 760px)":{fontSize:"25px"}}),g=t.Ay.p({maxWidth:"720px",margin:0,color:"var(--color-muted)",fontSize:"14px",fontWeight:450,lineHeight:1.6}),u=t.Ay.section({width:"100%",minWidth:0,padding:"var(--panel-padding)",background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"var(--radius-xl)",boxShadow:"var(--shadow-soft)"}),v=t.Ay.div({display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"12px",width:"100%",marginBottom:"14px","@media (max-width: 760px)":{display:"grid"}}),m=t.Ay.div({display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"}),h=t.Ay.div({display:"grid",alignItems:"start",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",gap:"12px","@media (max-width: 760px)":{gridTemplateColumns:"1fr"}}),x=t.Ay.form({display:"grid",gridTemplateColumns:"minmax(0, 1fr)",alignItems:"start",gap:"14px",width:"min(720px, 100%)",minWidth:0,padding:"var(--panel-padding)",background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"16px",boxShadow:"var(--shadow-soft)","@media (max-width: 560px)":{gap:"12px",padding:"14px"}}),b=t.Ay.div({display:"grid",placeItems:"center",gap:"8px",minHeight:"220px",padding:"28px",color:"var(--color-muted)",textAlign:"center",background:"var(--color-surface)",border:"1px dashed var(--color-border-strong)",borderRadius:"16px"}),f=(t.Ay.div({marginBottom:"8px",color:"var(--color-danger)",fontSize:"13px",fontWeight:650}),(0,i.Ay)(n.zh)({width:"100%",minWidth:0,"&.MuiDataGrid-autoHeight":{overflow:"visible","& .MuiDataGrid-main":{overflow:"visible"},"& .MuiDataGrid-columnHeaders":{position:"sticky",top:"var(--app-header-height)",zIndex:2,backgroundColor:"var(--color-surface-soft)",boxShadow:"0 1px 0 var(--color-border)"}}}));o.d(e,["Dk",0,d,"Fp",0,s,"I_",0,g,"M7",0,v,"aN",0,r=>{const{language:e}=(0,l.Bd)(),o=(0,a.useMemo)(()=>({...(0,l.it)(e),...r.localeText}),[e,r.localeText]);return a.createElement(f,{...r,localeText:o})},"kA",0,x,"pp",0,b,"sT",0,p,"ui",0,u,"vY",0,h,"v_",0,m,"zY",0,c])},9532(r,e,o){var a=o(4994);e.A=void 0;var t=a(o(9526)),i=o(4414);e.A=(0,t.default)((0,i.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add")},6592(r,e,o){var a=o(4994);e.A=void 0;var t=a(o(9526)),i=o(4414);e.A=(0,t.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8zm7.5-5-1-1h-5l-1 1H5v2h14V4z"}),"DeleteOutline")},6089(r,e,o){var a=o(4994);e.A=void 0;var t=a(o(9526)),i=o(4414);e.A=(0,t.default)((0,i.jsx)("path",{d:"m14.06 9.02.92.92L5.92 19H5v-.92zM17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"}),"EditOutlined")},9739(r,e,o){o.d(e,{A:()=>h});var a=o(8587),t=o(8168),i=o(9950),n=o(533),l=o(8465),d=o(9254),c=o(8283),s=o(1763),p=o(423);function g(r){return(0,p.Ay)("MuiDialogActions",r)}(0,s.A)("MuiDialogActions",["root","spacing"]);var u=o(4414);const v=["className","disableSpacing"],m=(0,d.Ay)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:o}=r;return[e.root,!o.disableSpacing&&e.spacing]}})(r=>{let{ownerState:e}=r;return(0,t.A)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!e.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})}),h=i.forwardRef(function(r,e){const o=(0,c.A)({props:r,name:"MuiDialogActions"}),{className:i,disableSpacing:d=!1}=o,s=(0,a.A)(o,v),p=(0,t.A)({},o,{disableSpacing:d}),h=(r=>{const{classes:e,disableSpacing:o}=r,a={root:["root",!o&&"spacing"]};return(0,l.A)(a,g,e)})(p);return(0,u.jsx)(m,(0,t.A)({className:(0,n.A)(h.root,i),ownerState:p,ref:e},s))})},8874(r,e,o){o.d(e,{A:()=>x});var a=o(8587),t=o(8168),i=o(9950),n=o(533),l=o(8465),d=o(9254),c=o(8283),s=o(2053),p=o(1763),g=o(423);function u(r){return(0,g.Ay)("MuiDialogContentText",r)}(0,p.A)("MuiDialogContentText",["root"]);var v=o(4414);const m=["children","className"],h=(0,d.Ay)(s.A,{shouldForwardProp:r=>(0,d.ep)(r)||"classes"===r,name:"MuiDialogContentText",slot:"Root",overridesResolver:(r,e)=>e.root})({}),x=i.forwardRef(function(r,e){const o=(0,c.A)({props:r,name:"MuiDialogContentText"}),{className:i}=o,d=(0,a.A)(o,m),s=(r=>{const{classes:e}=r,o=(0,l.A)({root:["root"]},u,e);return(0,t.A)({},e,o)})(d);return(0,v.jsx)(h,(0,t.A)({component:"p",variant:"body1",color:"text.secondary",ref:e,ownerState:d,className:(0,n.A)(s.root,i)},o,{classes:s}))})},7489(r,e,o){var a=o(8168),t=o(8587),i=o(9950),n=o(3266),l=o(4195),d=o(539),c=o(4414);const s=["label","icon","showInMenu","onClick"],p=i.forwardRef((r,e)=>{const{label:o,icon:p,showInMenu:g,onClick:u}=r,v=(0,t.A)(r,s),m=(0,d.A)(),h=r=>{u&&u(r)};var x;return g?(0,c.jsxs)(n.A,(0,a.A)({ref:e},v,{onClick:u,children:[p&&(0,c.jsx)(l.A,{children:p}),o]})):(0,c.jsx)(m.slots.baseIconButton,(0,a.A)({ref:e,size:"small",role:"menuitem","aria-label":o},v,{onClick:h},null==(x=m.slotProps)?void 0:x.baseIconButton,{children:i.cloneElement(p,{fontSize:"small"})}))});o.d(e,["Z",0,p])}}]);