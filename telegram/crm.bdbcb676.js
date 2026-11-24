"use strict";(globalThis.webpackChunkvivotech_crm_client||=[]).push([[5379],{90977(r,o,a){var e=a(77411);o.A=void 0;var i=e(a(31199)),l=a(20811);o.A=(0,i.default)((0,l.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add")},86129(r,o,a){var e=a(77411);o.A=void 0;var i=e(a(31199)),l=a(20811);o.A=(0,i.default)((0,l.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8zm7.5-5-1-1h-5l-1 1H5v2h14V4z"}),"DeleteOutline")},48246(r,o,a){var e=a(77411);o.A=void 0;var i=e(a(31199)),l=a(20811);o.A=(0,i.default)((0,l.jsx)("path",{d:"m14.06 9.02.92.92L5.92 19H5v-.92zM17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"}),"EditOutlined")},22970(r,o,a){a.d(o,{A:()=>h});var e=a(14780),i=a(76061),l=a(18139),n=a(9520),t=a(98970),d=a(28751),s=a(2804),c=a(38268),p=a(26108);function m(r){return(0,p.Ay)("MuiDialogActions",r)}(0,c.A)("MuiDialogActions",["root","spacing"]);var g=a(20811);const u=["className","disableSpacing"],v=(0,d.Ay)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(r,o)=>{const{ownerState:a}=r;return[o.root,!a.disableSpacing&&o.spacing]}})(({ownerState:r})=>(0,i.A)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!r.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})),h=l.forwardRef(function(r,o){const a=(0,s.A)({props:r,name:"MuiDialogActions"}),{className:l,disableSpacing:d=!1}=a,c=(0,e.A)(a,u),p=(0,i.A)({},a,{disableSpacing:d}),h=(r=>{const{classes:o,disableSpacing:a}=r,e={root:["root",!a&&"spacing"]};return(0,t.A)(e,m,o)})(p);return(0,g.jsx)(v,(0,i.A)({className:(0,n.A)(h.root,l),ownerState:p,ref:o},c))})},23854(r,o,a){var e=a(76061),i=a(14780),l=a(18139),n=a(30937),t=a(19850),d=a(70870),s=a(20811);const c=["label","icon","showInMenu","onClick"],p=l.forwardRef((r,o)=>{const{label:a,icon:p,showInMenu:m,onClick:g}=r,u=(0,i.A)(r,c),v=(0,d.A)();var h;return m?(0,s.jsxs)(n.A,(0,e.A)({ref:o},u,{onClick:g,children:[p&&(0,s.jsx)(t.A,{children:p}),a]})):(0,s.jsx)(v.slots.baseIconButton,(0,e.A)({ref:o,size:"small",role:"menuitem","aria-label":a},u,{onClick:r=>{g&&g(r)}},null==(h=v.slotProps)?void 0:h.baseIconButton,{children:l.cloneElement(p,{fontSize:"small"})}))});a.d(o,["Z",0,p])},25379(r,o,a){a.r(o);var e=a(18139),i=a(35566),l=a(83760),n=a(6236),t=a(46143),d=a(66426),s=a(62716),c=a(61718),p=a(30937),m=a(30118),g=a(22970),u=a(29615),v=a(90977),h=a(86129),x=a(48246),b=a(23854),f=a(17361),w=a(51222),A=a(70701),y=a(7176),C=a(56308),j=a(46584),k=a(31802),M=a(18815),S=a(20811);const H={employee:"Employee",company_admin:"Company admin",super_admin:"Super admin"},W={employee:"Работа с заказами и данными своей компании.",company_admin:"Полное управление своей компанией, сотрудниками и заказами. Подключение бота и системные настройки выполняет глобальный администратор.",super_admin:"Полный доступ ко всем компаниям и системным настройкам CRM."},z={name:"",login:"",email:"",role:"employee",password:"",passwordConfirmation:""};a.d(o,["default",0,()=>{var r,o,a;const{user:I}=(0,k.A)(),{t:R}=(0,M.Bd)(),{data:T=[],isLoading:_}=(0,j.gr)(),{data:L=["employee","company_admin"]}=(0,j.NX)(),[D,{isLoading:N}]=(0,j.i0)(),[B,{isLoading:E}]=(0,j.H7)(),[$]=(0,j.HC)(),[P,q]=(0,e.useState)(null),[F,O]=(0,e.useState)(z),[V,G]=(0,e.useState)(!1),Y="super_admin"===(null==I?void 0:I.role)&&L.includes("super_admin"),Z=L.filter(r=>"super_admin"!==r||Y&&!P),X=[{field:"name",headerName:"Имя",minWidth:180,flex:1},{field:"login",headerName:R("Login"),minWidth:150,flex:1},{field:"email",headerName:"Email",minWidth:230,flex:1},{field:"role",headerName:R("Role"),minWidth:210,valueFormatter:r=>H[r.value]?R(H[r.value]):r.value},{field:"actions",type:"actions",width:110,getActions:r=>"super_admin"===r.row.role?[]:[(0,S.jsx)(b.Z,{icon:(0,S.jsx)(x.A,{}),label:"Редактировать",onClick:()=>{return o=r.row,q(o),O({name:o.name,login:null!==(a=o.login)&&void 0!==a?a:"",email:o.email,role:o.role,password:"",passwordConfirmation:""}),void G(!0);var o,a}},"edit"),(0,S.jsx)(b.Z,{icon:(0,S.jsx)(h.A,{}),label:"Удалить",disabled:r.row.id===(null==I?void 0:I.id),onClick:()=>(async r=>{if(window.confirm(`Удалить пользователя ${r.name}?`))try{await $(r.id).unwrap(),f.oR.success("Пользователь удалён")}catch(r){f.oR.error((0,C.S)(r,"Не удалось удалить пользователя"))}})(r.row)},"delete")]}];return _?(0,S.jsx)(y.A,{}):(0,S.jsxs)(w.Dk,{children:[(0,S.jsxs)(w.zY,{children:[(0,S.jsxs)(w.Fp,{children:[(0,S.jsx)(w.sT,{children:"Пользователи компании"}),(0,S.jsx)(w.I_,{children:Y?"Управление пользователями компании и создание главных администраторов CRM.":"Управление сотрудниками, администраторами и паролями в рамках активной компании."})]}),(0,S.jsx)(A.A,{muiType:"success",text:"Добавить пользователя",leftIcon:(0,S.jsx)(v.A,{}),onClick:()=>{q(null),O(z),G(!0)}})]}),(0,S.jsx)(w.ui,{children:(0,S.jsx)(w.aN,{autoHeight:!0,rows:T,columns:X,pageSizeOptions:[25,50],disableRowSelectionOnClick:!0})}),(0,S.jsxs)(i.A,{open:V,onClose:()=>G(!1),fullWidth:!0,maxWidth:"sm",children:[(0,S.jsx)(l.A,{children:P?"Редактирование пользователя":"Новый пользователь"}),(0,S.jsxs)(n.A,{sx:{display:"grid",gap:2,paddingTop:"12px !important"},children:[(0,S.jsx)(t.A,{required:!(!P||null!==(r=F.login)&&void 0!==r&&r.trim()),label:"Имя",value:F.name,onChange:r=>O({...F,name:r.target.value})}),(0,S.jsx)(t.A,{required:!P||!(null!==(o=F.email)&&void 0!==o&&o.trim()),label:R("Login"),value:F.login,autoComplete:"off",inputProps:{maxLength:128},onChange:r=>O({...F,login:r.target.value})}),(0,S.jsx)(t.A,{type:"email",label:"Email",value:F.email,onChange:r=>O({...F,email:r.target.value})}),(0,S.jsxs)(d.A,{children:[(0,S.jsx)(s.A,{id:"user-role-label",children:R("Role")}),(0,S.jsx)(c.A,{labelId:"user-role-label",label:R("Role"),value:F.role,onChange:r=>O({...F,role:r.target.value}),children:Z.map(r=>(0,S.jsx)(p.A,{value:r,children:R(H[r])},r))}),(0,S.jsx)(m.A,{children:W[F.role]})]}),(0,S.jsx)(t.A,{required:!P,type:"password",label:P?"Новый пароль (необязательно)":"Пароль",value:F.password,autoComplete:"new-password",onChange:r=>O({...F,password:r.target.value}),helperText:"Не менее 8 символов"}),(!!F.password||!P)&&(0,S.jsx)(t.A,{required:!0,type:"password",label:R("Confirm password"),value:F.passwordConfirmation,autoComplete:"new-password",error:!!F.passwordConfirmation&&F.password!==F.passwordConfirmation,helperText:F.passwordConfirmation&&F.password!==F.passwordConfirmation?R("Passwords do not match."):void 0,onChange:r=>O({...F,passwordConfirmation:r.target.value})})]}),(0,S.jsxs)(g.A,{children:[(0,S.jsx)(u.A,{onClick:()=>G(!1),children:"Отмена"}),(0,S.jsx)(u.A,{variant:"contained",onClick:async()=>{if(F.password===F.passwordConfirmation)try{P?await B({id:P.id,body:F}).unwrap():await D(F).unwrap(),f.oR.success(P?"Пользователь обновлён":"Пользователь создан"),G(!1)}catch(r){f.oR.error((0,C.S)(r,"Не удалось сохранить пользователя"))}else f.oR.error(R("Passwords do not match."))},disabled:N||E||!Z.includes(F.role)||!(null!==(a=F.login)&&void 0!==a&&a.trim())&&(!P||!F.email.trim()||!F.name.trim())||!P&&!F.password||F.password!==F.passwordConfirmation,children:"Сохранить"})]})]})]})}])},70701(r,o,a){a.d(o,{A:()=>d}),a(18139);var e=a(54499),i=a(28751),l=a(29615);const n=(0,i.Ay)(l.A,{shouldForwardProp:r=>"muiType"!==r&&"horizontalMargin"!==r&&"verticalMargin"!==r&&"bottomMargin"!==r})`
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
`;var t=a(20811);const d=r=>{let{fullWidth:o,type:a,onClick:e,leftIcon:i,rightIcon:l,text:d,muiType:s,horizontalMargin:c,verticalMargin:p,bottomMargin:m,disabled:g,ariaLabel:u}=r;return(0,t.jsx)(n,{fullWidth:o,type:a,muiType:s,startIcon:i,endIcon:l,onClick:e,verticalMargin:p||!1,horizontalMargin:c||!1,bottomMargin:m||!1,disabled:g,"aria-label":u,children:d})}},51222(r,o,a){var e=a(18139),i=a(61),l=a(28751),n=a(4780),t=a(18815);const d=i.Ay.div({width:"100%",maxWidth:"var(--app-content-width, 1440px)",minWidth:0,margin:"0 auto",textAlign:"left"}),s=i.Ay.div({display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"16px 24px",marginBottom:"24px","@media (max-width: 760px)":{display:"grid",marginBottom:"18px"}}),c=i.Ay.div({display:"grid",gap:"6px",minWidth:0}),p=i.Ay.h1({margin:0,color:"var(--color-text)",fontSize:"clamp(24px, 2.35vw, 34px)",fontWeight:800,letterSpacing:"-.04em",lineHeight:1.2,overflowWrap:"anywhere"}),m=i.Ay.p({maxWidth:"720px",margin:0,color:"var(--color-muted)",fontSize:"14px",fontWeight:450,lineHeight:1.6}),g=i.Ay.section({width:"100%",minWidth:0,padding:"var(--panel-padding)",background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"var(--radius-xl)",boxShadow:"var(--shadow-soft)"}),u=i.Ay.div({display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"12px",width:"100%",marginBottom:"14px","@media (max-width: 760px)":{display:"grid"}}),v=i.Ay.div({display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"}),h=i.Ay.div({display:"grid",alignItems:"start",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",gap:"12px","@media (max-width: 760px)":{gridTemplateColumns:"1fr"}}),x=i.Ay.form({display:"grid",gridTemplateColumns:"minmax(0, 1fr)",alignItems:"start",gap:"14px",width:"min(720px, 100%)",minWidth:0,padding:"var(--panel-padding)",background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"16px",boxShadow:"var(--shadow-soft)","@media (max-width: 560px)":{gap:"12px",padding:"14px"}}),b=i.Ay.div({display:"grid",placeItems:"center",gap:"8px",minHeight:"220px",padding:"28px",color:"var(--color-muted)",textAlign:"center",background:"var(--color-surface)",border:"1px dashed var(--color-border-strong)",borderRadius:"16px"}),f=(i.Ay.div({marginBottom:"8px",color:"var(--color-danger)",fontSize:"13px",fontWeight:650}),(0,l.Ay)(n.zh)({width:"100%",minWidth:0,"&.MuiDataGrid-autoHeight":{overflow:"visible","& .MuiDataGrid-main":{overflow:"visible"},"& .MuiDataGrid-columnHeaders":{position:"sticky",top:"var(--app-header-height)",zIndex:2,backgroundColor:"var(--color-surface-soft)",boxShadow:"0 1px 0 var(--color-border)"}}}));a.d(o,["Dk",0,d,"Fp",0,c,"I_",0,m,"M7",0,u,"aN",0,r=>{const{language:o}=(0,t.Bd)(),a=(0,e.useMemo)(()=>({...(0,t.it)(o),...r.localeText}),[o,r.localeText]);return e.createElement(f,{...r,localeText:a})},"kA",0,x,"pp",0,b,"sT",0,p,"ui",0,g,"vY",0,h,"v_",0,v,"zY",0,s])}}]);