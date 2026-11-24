"use strict";(globalThis.webpackChunkvivotech_crm_client||=[]).push([[6663],{6663(r,o,a){a.r(o);var e=a(2012),i=a(7298),l=a(2287),n=a(3172),t=a(8111),d=a(5385),s=a(2134),c=a(1164),p=a(3152),m=a(7102),g=a(5533),u=a(3492),v=a(478),h=a(578),x=a(175),b=a(7203),f=a(5214),w=a(4498),A=a(9304),y=a(4748),C=a(1712),j=a(1260),k=a(3574),M=a(2270),S=a(4016);const H={employee:"Employee",company_admin:"Company admin",super_admin:"Super admin"},W={employee:"\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 \u0437\u0430\u043a\u0430\u0437\u0430\u043c\u0438 \u0438 \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u0441\u0432\u043e\u0435\u0439 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438.",company_admin:"\u041f\u043e\u043b\u043d\u043e\u0435 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u0432\u043e\u0435\u0439 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0435\u0439, \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430\u043c\u0438 \u0438 \u0437\u0430\u043a\u0430\u0437\u0430\u043c\u0438. \u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0431\u043e\u0442\u0430 \u0438 \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0439 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440.",super_admin:"\u041f\u043e\u043b\u043d\u044b\u0439 \u0434\u043e\u0441\u0442\u0443\u043f \u043a\u043e \u0432\u0441\u0435\u043c \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044f\u043c \u0438 \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u043c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u043c CRM."},z={name:"",login:"",email:"",role:"employee",password:"",passwordConfirmation:""},I=()=>{var r,o,a;const{user:I}=(0,k.A)(),{t:R}=(0,M.Bd)(),{data:T=[],isLoading:_}=(0,j.gr)(),{data:L=["employee","company_admin"]}=(0,j.NX)(),[D,{isLoading:N}]=(0,j.i0)(),[B,{isLoading:E}]=(0,j.H7)(),[$]=(0,j.HC)(),[P,q]=(0,e.useState)(null),[F,O]=(0,e.useState)(z),[V,G]=(0,e.useState)(!1),Y="super_admin"===(null===I||void 0===I?void 0:I.role)&&L.includes("super_admin"),Z=L.filter(r=>"super_admin"!==r||Y&&!P),X=[{field:"name",headerName:"\u0418\u043c\u044f",minWidth:180,flex:1},{field:"login",headerName:R("Login"),minWidth:150,flex:1},{field:"email",headerName:"Email",minWidth:230,flex:1},{field:"role",headerName:R("Role"),minWidth:210,valueFormatter:r=>H[r.value]?R(H[r.value]):r.value},{field:"actions",type:"actions",width:110,getActions:r=>"super_admin"===r.row.role?[]:[(0,S.jsx)(b.Z,{icon:(0,S.jsx)(x.A,{}),label:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",onClick:()=>(r=>{var o;q(r),O({name:r.name,login:null!==(o=r.login)&&void 0!==o?o:"",email:r.email,role:r.role,password:"",passwordConfirmation:""}),G(!0)})(r.row)},"edit"),(0,S.jsx)(b.Z,{icon:(0,S.jsx)(h.A,{}),label:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",disabled:r.row.id===(null===I||void 0===I?void 0:I.id),onClick:()=>(async r=>{if(window.confirm(`\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f ${r.name}?`))try{await $(r.id).unwrap(),f.oR.success("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0443\u0434\u0430\u043b\u0451\u043d")}catch(o){f.oR.error((0,C.S)(o,"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"))}})(r.row)},"delete")]}];return _?(0,S.jsx)(y.A,{}):(0,S.jsxs)(w.Dk,{children:[(0,S.jsxs)(w.zY,{children:[(0,S.jsxs)(w.Fp,{children:[(0,S.jsx)(w.sT,{children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"}),(0,S.jsx)(w.I_,{children:Y?"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c\u0438 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 \u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0433\u043b\u0430\u0432\u043d\u044b\u0445 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u043e\u0432 CRM.":"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430\u043c\u0438, \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0430\u043c\u0438 \u0438 \u043f\u0430\u0440\u043e\u043b\u044f\u043c\u0438 \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0439 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438."})]}),(0,S.jsx)(A.A,{muiType:"success",text:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",leftIcon:(0,S.jsx)(v.A,{}),onClick:()=>{q(null),O(z),G(!0)}})]}),(0,S.jsx)(w.ui,{children:(0,S.jsx)(w.aN,{autoHeight:!0,rows:T,columns:X,pageSizeOptions:[25,50],disableRowSelectionOnClick:!0})}),(0,S.jsxs)(i.A,{open:V,onClose:()=>G(!1),fullWidth:!0,maxWidth:"sm",children:[(0,S.jsx)(l.A,{children:P?"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f":"\u041d\u043e\u0432\u044b\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c"}),(0,S.jsxs)(n.A,{sx:{display:"grid",gap:2,paddingTop:"12px !important"},children:[(0,S.jsx)(t.A,{required:!!P&&!(null!==(r=F.login)&&void 0!==r&&r.trim()),label:"\u0418\u043c\u044f",value:F.name,onChange:r=>O({...F,name:r.target.value})}),(0,S.jsx)(t.A,{required:!P||!(null!==(o=F.email)&&void 0!==o&&o.trim()),label:R("Login"),value:F.login,autoComplete:"off",inputProps:{maxLength:128},onChange:r=>O({...F,login:r.target.value})}),(0,S.jsx)(t.A,{type:"email",label:"Email",value:F.email,onChange:r=>O({...F,email:r.target.value})}),(0,S.jsxs)(d.A,{children:[(0,S.jsx)(s.A,{id:"user-role-label",children:R("Role")}),(0,S.jsx)(c.A,{labelId:"user-role-label",label:R("Role"),value:F.role,onChange:r=>O({...F,role:r.target.value}),children:Z.map(r=>(0,S.jsx)(p.A,{value:r,children:R(H[r])},r))}),(0,S.jsx)(m.A,{children:W[F.role]})]}),(0,S.jsx)(t.A,{required:!P,type:"password",label:P?"\u041d\u043e\u0432\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c (\u043d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e)":"\u041f\u0430\u0440\u043e\u043b\u044c",value:F.password,autoComplete:"new-password",onChange:r=>O({...F,password:r.target.value}),helperText:"\u041d\u0435 \u043c\u0435\u043d\u0435\u0435 8 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"}),(!!F.password||!P)&&(0,S.jsx)(t.A,{required:!0,type:"password",label:R("Confirm password"),value:F.passwordConfirmation,autoComplete:"new-password",error:!!F.passwordConfirmation&&F.password!==F.passwordConfirmation,helperText:F.passwordConfirmation&&F.password!==F.passwordConfirmation?R("Passwords do not match."):void 0,onChange:r=>O({...F,passwordConfirmation:r.target.value})})]}),(0,S.jsxs)(g.A,{children:[(0,S.jsx)(u.A,{onClick:()=>G(!1),children:"\u041e\u0442\u043c\u0435\u043d\u0430"}),(0,S.jsx)(u.A,{variant:"contained",onClick:async()=>{if(F.password===F.passwordConfirmation)try{P?await B({id:P.id,body:F}).unwrap():await D(F).unwrap(),f.oR.success(P?"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043e\u0431\u043d\u043e\u0432\u043b\u0451\u043d":"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441\u043e\u0437\u0434\u0430\u043d"),G(!1)}catch(r){f.oR.error((0,C.S)(r,"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"))}else f.oR.error(R("Passwords do not match."))},disabled:N||E||!Z.includes(F.role)||!(null!==(a=F.login)&&void 0!==a&&a.trim())&&(!P||!F.email.trim()||!F.name.trim())||!P&&!F.password||F.password!==F.passwordConfirmation,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})]})]})};a.d(o,["default",0,I])},9304(r,o,a){a.d(o,{A:()=>d});a(2012);var e=a(3012),i=a(9576),l=a(3492);const n=(0,i.Ay)(l.A,{shouldForwardProp:r=>"muiType"!==r&&"horizontalMargin"!==r&&"verticalMargin"!==r&&"bottomMargin"!==r})`
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

  ${r=>{let{muiType:o}=r;switch(o){case"primary":return e.AH`
          border-color: var(--color-primary-border);
          background: var(--color-primary);
          color: var(--color-on-primary);

          &:hover {
            background: var(--color-primary-hover);
            color: var(--color-on-primary);
          }
        `;case"secondary":return e.AH`
          border-color: var(--color-border-strong);
          background: var(--color-surface);
          color: var(--color-text);

          &:hover {
            border-color: var(--color-primary);
            background: var(--color-primary-soft);
            color: var(--color-primary);
          }
        `;case"success":return e.AH`
          border-color: var(--color-primary);
          background: var(--color-primary);
          color: var(--color-on-primary);

          &:hover {
            background: var(--color-primary-hover);
            color: var(--color-on-primary);
          }
        `;case"error":return e.AH`
          border-color: var(--color-danger-border);
          background: var(--color-danger-soft);
          color: var(--color-danger-text);

          &:hover {
            background: var(--color-danger-soft);
            border-color: var(--color-danger);
            color: var(--color-danger-text);
          }
        `;case"edit":return e.AH`
          border-color: var(--color-warning-border);
          background: var(--color-warning-soft);
          color: var(--color-warning-text);

          &:hover {
            background: var(--color-warning-soft);
            border-color: var(--color-warning);
            color: var(--color-warning-text);
          }
        `;case"info":return e.AH`
          border-color: var(--color-primary-border);
          background: var(--color-primary-soft);
          color: var(--color-primary);

          &:hover {
            background: var(--color-primary-soft-hover);
            color: var(--color-primary-hover);
          }
        `;default:return e.AH`
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

  ${r=>e.AH`
  ${!0===r.horizontalMargin&&e.AH`
    margin-left: 8px;
    margin-right: 8px;
  `}

  ${!0===r.verticalMargin&&e.AH`
    margin-top: 8px;
    margin-bottom: 8px;
  `}

  ${!0===r.bottomMargin&&e.AH`
    margin-top: 8px;
    margin-bottom: 24px;
  `}
`}
`;var t=a(4016);const d=r=>{let{fullWidth:o,type:a,onClick:e,leftIcon:i,rightIcon:l,text:d,muiType:s,horizontalMargin:c,verticalMargin:p,bottomMargin:m,disabled:g,ariaLabel:u}=r;return(0,t.jsx)(n,{fullWidth:o,type:a,muiType:s,startIcon:i,endIcon:l,onClick:e,verticalMargin:p||!1,horizontalMargin:c||!1,bottomMargin:m||!1,disabled:g,"aria-label":u,children:d})}},4498(r,o,a){var e=a(2012),i=a(7906),l=a(9576),n=a(6733),t=a(2270);const d=i.Ay.div({width:"100%",maxWidth:"var(--app-content-width, 1440px)",minWidth:0,margin:"0 auto",textAlign:"left"}),s=i.Ay.div({display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"16px 24px",marginBottom:"24px","@media (max-width: 760px)":{display:"grid",marginBottom:"18px"}}),c=i.Ay.div({display:"grid",gap:"6px",minWidth:0}),p=i.Ay.h1({margin:0,color:"var(--color-text)",fontSize:"clamp(24px, 2.35vw, 34px)",fontWeight:800,letterSpacing:"-.04em",lineHeight:1.2,overflowWrap:"anywhere"}),m=i.Ay.p({maxWidth:"720px",margin:0,color:"var(--color-muted)",fontSize:"14px",fontWeight:450,lineHeight:1.6}),g=i.Ay.section({width:"100%",minWidth:0,padding:"var(--panel-padding)",background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"var(--radius-xl)",boxShadow:"var(--shadow-soft)"}),u=i.Ay.div({display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"12px",width:"100%",marginBottom:"14px","@media (max-width: 760px)":{display:"grid"}}),v=i.Ay.div({display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"}),h=i.Ay.div({display:"grid",alignItems:"start",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",gap:"12px","@media (max-width: 760px)":{gridTemplateColumns:"1fr"}}),x=i.Ay.form({display:"grid",gridTemplateColumns:"minmax(0, 1fr)",alignItems:"start",gap:"14px",width:"min(720px, 100%)",minWidth:0,padding:"var(--panel-padding)",background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"16px",boxShadow:"var(--shadow-soft)","@media (max-width: 560px)":{gap:"12px",padding:"14px"}}),b=i.Ay.div({display:"grid",placeItems:"center",gap:"8px",minHeight:"220px",padding:"28px",color:"var(--color-muted)",textAlign:"center",background:"var(--color-surface)",border:"1px dashed var(--color-border-strong)",borderRadius:"16px"}),f=(i.Ay.div({marginBottom:"8px",color:"var(--color-danger)",fontSize:"13px",fontWeight:650}),(0,l.Ay)(n.zh)({width:"100%",minWidth:0,"&.MuiDataGrid-autoHeight":{overflow:"visible","& .MuiDataGrid-main":{overflow:"visible"},"& .MuiDataGrid-columnHeaders":{position:"sticky",top:"var(--app-header-height)",zIndex:2,backgroundColor:"var(--color-surface-soft)",boxShadow:"0 1px 0 var(--color-border)"}}}));a.d(o,["Dk",0,d,"Fp",0,c,"I_",0,m,"M7",0,u,"aN",0,r=>{const{language:o}=(0,t.Bd)(),a=(0,e.useMemo)(()=>({...(0,t.it)(o),...r.localeText}),[o,r.localeText]);return e.createElement(f,{...r,localeText:a})},"kA",0,x,"pp",0,b,"sT",0,p,"ui",0,g,"vY",0,h,"v_",0,v,"zY",0,s])},478(r,o,a){var e=a(7411);o.A=void 0;var i=e(a(3792)),l=a(4016);o.A=(0,i.default)((0,l.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add")},578(r,o,a){var e=a(7411);o.A=void 0;var i=e(a(3792)),l=a(4016);o.A=(0,i.default)((0,l.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8zm7.5-5-1-1h-5l-1 1H5v2h14V4z"}),"DeleteOutline")},175(r,o,a){var e=a(7411);o.A=void 0;var i=e(a(3792)),l=a(4016);o.A=(0,i.default)((0,l.jsx)("path",{d:"m14.06 9.02.92.92L5.92 19H5v-.92zM17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"}),"EditOutlined")},5533(r,o,a){a.d(o,{A:()=>h});var e=a(4780),i=a(6061),l=a(2012),n=a(819),t=a(7595),d=a(9576),s=a(6805),c=a(1421),p=a(4921);function m(r){return(0,p.Ay)("MuiDialogActions",r)}(0,c.A)("MuiDialogActions",["root","spacing"]);var g=a(4016);const u=["className","disableSpacing"],v=(0,d.Ay)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(r,o)=>{const{ownerState:a}=r;return[o.root,!a.disableSpacing&&o.spacing]}})(r=>{let{ownerState:o}=r;return(0,i.A)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!o.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})}),h=l.forwardRef(function(r,o){const a=(0,s.A)({props:r,name:"MuiDialogActions"}),{className:l,disableSpacing:d=!1}=a,c=(0,e.A)(a,u),p=(0,i.A)({},a,{disableSpacing:d}),h=(r=>{const{classes:o,disableSpacing:a}=r,e={root:["root",!a&&"spacing"]};return(0,t.A)(e,m,o)})(p);return(0,g.jsx)(v,(0,i.A)({className:(0,n.A)(h.root,l),ownerState:p,ref:o},c))})},7203(r,o,a){var e=a(6061),i=a(4780),l=a(2012),n=a(3152),t=a(9809),d=a(393),s=a(4016);const c=["label","icon","showInMenu","onClick"],p=l.forwardRef((r,o)=>{const{label:a,icon:p,showInMenu:m,onClick:g}=r,u=(0,i.A)(r,c),v=(0,d.A)(),h=r=>{g&&g(r)};var x;return m?(0,s.jsxs)(n.A,(0,e.A)({ref:o},u,{onClick:g,children:[p&&(0,s.jsx)(t.A,{children:p}),a]})):(0,s.jsx)(v.slots.baseIconButton,(0,e.A)({ref:o,size:"small",role:"menuitem","aria-label":a},u,{onClick:h},null==(x=v.slotProps)?void 0:x.baseIconButton,{children:l.cloneElement(p,{fontSize:"small"})}))});a.d(o,["Z",0,p])}}]);