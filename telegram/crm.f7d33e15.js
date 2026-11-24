"use strict";(globalThis.webpackChunkvivotech_crm_client||=[]).push([[1773],{90977(r,e,o){var a=o(77411);e.A=void 0;var t=a(o(31199)),i=o(20811);e.A=(0,t.default)((0,i.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add")},86129(r,e,o){var a=o(77411);e.A=void 0;var t=a(o(31199)),i=o(20811);e.A=(0,t.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8zm7.5-5-1-1h-5l-1 1H5v2h14V4z"}),"DeleteOutline")},48246(r,e,o){var a=o(77411);e.A=void 0;var t=a(o(31199)),i=o(20811);e.A=(0,t.default)((0,i.jsx)("path",{d:"m14.06 9.02.92.92L5.92 19H5v-.92zM17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"}),"EditOutlined")},22970(r,e,o){o.d(e,{A:()=>h});var a=o(14780),t=o(76061),i=o(18139),n=o(9520),l=o(98970),d=o(28751),c=o(2804),s=o(38268),p=o(26108);function g(r){return(0,p.Ay)("MuiDialogActions",r)}(0,s.A)("MuiDialogActions",["root","spacing"]);var m=o(20811);const u=["className","disableSpacing"],v=(0,d.Ay)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:o}=r;return[e.root,!o.disableSpacing&&e.spacing]}})(({ownerState:r})=>(0,t.A)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!r.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})),h=i.forwardRef(function(r,e){const o=(0,c.A)({props:r,name:"MuiDialogActions"}),{className:i,disableSpacing:d=!1}=o,s=(0,a.A)(o,u),p=(0,t.A)({},o,{disableSpacing:d}),h=(r=>{const{classes:e,disableSpacing:o}=r,a={root:["root",!o&&"spacing"]};return(0,l.A)(a,g,e)})(p);return(0,m.jsx)(v,(0,t.A)({className:(0,n.A)(h.root,i),ownerState:p,ref:e},s))})},47638(r,e,o){o.d(e,{A:()=>x});var a=o(14780),t=o(76061),i=o(18139),n=o(9520),l=o(98970),d=o(28751),c=o(2804),s=o(85792),p=o(38268),g=o(26108);function m(r){return(0,g.Ay)("MuiDialogContentText",r)}(0,p.A)("MuiDialogContentText",["root"]);var u=o(20811);const v=["children","className"],h=(0,d.Ay)(s.A,{shouldForwardProp:r=>(0,d.ep)(r)||"classes"===r,name:"MuiDialogContentText",slot:"Root",overridesResolver:(r,e)=>e.root})({}),x=i.forwardRef(function(r,e){const o=(0,c.A)({props:r,name:"MuiDialogContentText"}),{className:i}=o,d=(0,a.A)(o,v),s=(r=>{const{classes:e}=r,o=(0,l.A)({root:["root"]},m,e);return(0,t.A)({},e,o)})(d);return(0,u.jsx)(h,(0,t.A)({component:"p",variant:"body1",color:"text.secondary",ref:e,ownerState:d,className:(0,n.A)(s.root,i)},o,{classes:s}))})},23854(r,e,o){var a=o(76061),t=o(14780),i=o(18139),n=o(30937),l=o(19850),d=o(70870),c=o(20811);const s=["label","icon","showInMenu","onClick"],p=i.forwardRef((r,e)=>{const{label:o,icon:p,showInMenu:g,onClick:m}=r,u=(0,t.A)(r,s),v=(0,d.A)();var h;return g?(0,c.jsxs)(n.A,(0,a.A)({ref:e},u,{onClick:m,children:[p&&(0,c.jsx)(l.A,{children:p}),o]})):(0,c.jsx)(v.slots.baseIconButton,(0,a.A)({ref:e,size:"small",role:"menuitem","aria-label":o},u,{onClick:r=>{m&&m(r)}},null==(h=v.slotProps)?void 0:h.baseIconButton,{children:i.cloneElement(p,{fontSize:"small"})}))});o.d(e,["Z",0,p])},51773(r,e,o){o.r(e);var a=o(18139),t=o(35566),i=o(83760),n=o(6236),l=o(47638),d=o(22970),c=o(29615),s=o(23854),p=o(48246),g=o(86129),m=o(90977),u=o(72619),v=o(56840),h=o(17361),x=o(11731),b=o(2578),f=o(64396),A=o(18815),y=o(56308),w=o(74253),j=o(68066),k=o(90510),C=o(83668),M=o(7176),S=o(70701),T=o(51222),H=o(20811);o.d(e,["default",0,()=>{const{t:r,language:e}=(0,A.Bd)(),o=(0,v.Zp)(),I=(0,w.jL)(),{data:z=[],isLoading:D,isFetching:R}=(0,f.H3)(void 0,{pollingInterval:3e3}),[W,{isLoading:N}]=(0,f.z0)(),[B,P]=(0,a.useState)(),F=(0,a.useMemo)(()=>({[b.j.Pending]:r("Pending"),[b.j.Running]:r("Running"),[b.j.Completed]:r("Completed"),[b.j.Failed]:r("Failed"),[b.j.Cancelled]:r("Cancelled")}),[r]),G=(0,a.useMemo)(()=>[{field:"name",headerName:r("Batch name"),minWidth:210,flex:1},{field:"baseItemName",headerName:r("Base product or service"),minWidth:200,flex:1},{field:"itemType",headerName:r("Type"),width:120,valueFormatter:e=>{let{value:o}=e;return o===x.h.Product?r("Product"):r("Service")}},{field:"status",headerName:r("Status"),width:140,valueFormatter:r=>{var e;let{value:o}=r;return null!==(e=F[o])&&void 0!==e?e:String(o)}},{field:"created",headerName:r("Created items"),type:"number",width:125},{field:"total",headerName:r("Planned items"),type:"number",width:125},{field:"createdAt",headerName:r("Created"),width:180,valueFormatter:r=>{let{value:o}=r;return new Intl.DateTimeFormat(e,{dateStyle:"short",timeStyle:"short"}).format(new Date(o))}},{field:"actions",type:"actions",headerName:r("Actions"),width:110,getActions:e=>[(0,H.jsx)(s.Z,{icon:(0,H.jsx)(p.A,{}),label:r("Edit batch"),disabled:e.row.status===b.j.Pending||e.row.status===b.j.Running,onClick:()=>o(`/catalogGeneration?editBatchId=${e.row.id}`)},"edit"),(0,H.jsx)(s.Z,{icon:(0,H.jsx)(g.A,{}),label:r("Delete batch"),onClick:()=>P(e.row)},"delete")]}],[e,o,F,r]);return D?(0,H.jsx)(M.A,{}):(0,H.jsxs)(T.Dk,{children:[(0,H.jsxs)(t.A,{open:Boolean(B),onClose:()=>!N&&P(void 0),children:[(0,H.jsx)(i.A,{children:r("Delete generation batch?")}),(0,H.jsx)(n.A,{children:(0,H.jsx)(l.A,{children:r("All products and services created by batch {name} will be removed from the catalog.",{name:null==B?void 0:B.name})})}),(0,H.jsxs)(d.A,{children:[(0,H.jsx)(c.A,{disabled:N,onClick:()=>P(void 0),children:r("Cancel")}),(0,H.jsx)(c.A,{disabled:N,color:"error",onClick:async()=>{if(B)try{const e=await W(B.id).unwrap();h.oR.success(r("Deleted products: {products}; services: {services}",{products:e.deletedProducts,services:e.deletedServices})),I(j.ZN.util.invalidateTags(["Products","Product"])),I(k.XU.util.invalidateTags(["Services","Service"])),I(C.Rx.util.invalidateTags(["Stock"])),P(void 0)}catch(e){h.oR.error((0,y.S)(e,r("Generation batch could not be deleted.")))}},children:r("Delete")})]})]}),(0,H.jsxs)(T.zY,{children:[(0,H.jsxs)(T.Fp,{children:[(0,H.jsx)(T.sT,{children:r("Generation batches")}),(0,H.jsx)(T.I_,{children:r("Generated catalog groups, their progress, editing, and complete removal.")})]}),(0,H.jsx)(u.k2,{to:"/catalogGeneration",style:{textDecoration:"none"},children:(0,H.jsx)(S.A,{muiType:"success",text:r("Create generation batch"),leftIcon:(0,H.jsx)(m.A,{})})})]}),(0,H.jsx)(T.ui,{children:(0,H.jsx)(T.aN,{autoHeight:!0,rows:z,columns:G,loading:R,pageSizeOptions:[25,50,100],initialState:{pagination:{paginationModel:{pageSize:25,page:0}}},disableRowSelectionOnClick:!0})})]})}])},2578(r,e,o){o.d(e,{W:()=>t,j:()=>a});let a=function(r){return r[r.Pending=0]="Pending",r[r.Running=1]="Running",r[r.Completed=2]="Completed",r[r.Failed=3]="Failed",r[r.Cancelled=4]="Cancelled",r}({}),t=function(r){return r[r.Single=0]="Single",r[r.ByModification=1]="ByModification",r}({})},70701(r,e,o){o.d(e,{A:()=>d}),o(18139);var a=o(54499),t=o(28751),i=o(29615);const n=(0,t.Ay)(i.A,{shouldForwardProp:r=>"muiType"!==r&&"horizontalMargin"!==r&&"verticalMargin"!==r&&"bottomMargin"!==r})`
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
`;var l=o(20811);const d=r=>{let{fullWidth:e,type:o,onClick:a,leftIcon:t,rightIcon:i,text:d,muiType:c,horizontalMargin:s,verticalMargin:p,bottomMargin:g,disabled:m,ariaLabel:u}=r;return(0,l.jsx)(n,{fullWidth:e,type:o,muiType:c,startIcon:t,endIcon:i,onClick:a,verticalMargin:p||!1,horizontalMargin:s||!1,bottomMargin:g||!1,disabled:m,"aria-label":u,children:d})}},51222(r,e,o){var a=o(18139),t=o(61),i=o(28751),n=o(4780),l=o(18815);const d=t.Ay.div({width:"100%",maxWidth:"var(--app-content-width, 1440px)",minWidth:0,margin:"0 auto",textAlign:"left"}),c=t.Ay.div({display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"16px 24px",marginBottom:"24px","@media (max-width: 760px)":{display:"grid",gridTemplateColumns:"minmax(0, 1fr)",marginBottom:"18px"}}),s=t.Ay.div({display:"grid",gap:"6px",minWidth:0}),p=t.Ay.h1({margin:0,color:"var(--color-text)",fontSize:"clamp(24px, 2.35vw, 34px)",fontWeight:800,letterSpacing:"-.04em",lineHeight:1.2,overflowWrap:"anywhere"}),g=t.Ay.p({maxWidth:"720px",margin:0,color:"var(--color-muted)",fontSize:"14px",fontWeight:450,lineHeight:1.6}),m=t.Ay.section({width:"100%",minWidth:0,padding:"var(--panel-padding)",background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"var(--radius-xl)",boxShadow:"var(--shadow-soft)"}),u=t.Ay.div({display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"12px",width:"100%",marginBottom:"14px","@media (max-width: 760px)":{display:"grid",gridTemplateColumns:"minmax(0, 1fr)"}}),v=t.Ay.div({display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"}),h=t.Ay.div({display:"grid",alignItems:"start",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",gap:"12px","@media (max-width: 760px)":{gridTemplateColumns:"minmax(0, 1fr)"}}),x=t.Ay.form({display:"grid",gridTemplateColumns:"minmax(0, 1fr)",alignItems:"start",gap:"14px",width:"min(720px, 100%)",minWidth:0,padding:"var(--panel-padding)",background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"16px",boxShadow:"var(--shadow-soft)","@media (max-width: 560px)":{gap:"12px",padding:"14px"}}),b=t.Ay.div({display:"grid",placeItems:"center",gap:"8px",minHeight:"220px",padding:"28px",color:"var(--color-muted)",textAlign:"center",background:"var(--color-surface)",border:"1px dashed var(--color-border-strong)",borderRadius:"16px"}),f=(t.Ay.div({marginBottom:"8px",color:"var(--color-danger)",fontSize:"13px",fontWeight:650}),(0,i.Ay)(n.zh)({width:"100%",minWidth:0,"&.MuiDataGrid-autoHeight":{overflow:"visible","& .MuiDataGrid-main":{overflow:"visible"},"& .MuiDataGrid-columnHeaders":{position:"sticky",top:"var(--app-header-height)",zIndex:2,backgroundColor:"var(--color-surface-soft)",boxShadow:"0 1px 0 var(--color-border)"}}}));o.d(e,["Dk",0,d,"Fp",0,s,"I_",0,g,"M7",0,u,"aN",0,r=>{const{language:e}=(0,l.Bd)(),o=(0,a.useMemo)(()=>({...(0,l.it)(e),...r.localeText}),[e,r.localeText]);return a.createElement(f,{...r,localeText:o})},"kA",0,x,"pp",0,b,"sT",0,p,"ui",0,m,"vY",0,h,"v_",0,v,"zY",0,c])}}]);