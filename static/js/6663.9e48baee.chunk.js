"use strict";(globalThis.webpackChunkvivotech_crm_client||=[]).push([[6663],{6663(r,o,a){a.r(o);var e=a(2012),i=a(7298),l=a(2287),n=a(3172),t=a(8111),d=a(5385),c=a(2134),s=a(1164),p=a(3152),m=a(7102),g=a(5533),v=a(3492),u=a(478),x=a(578),h=a(175),b=a(7203),f=a(5214),A=a(4498),y=a(9304),w=a(4748),j=a(1712),k=a(1260),M=a(3574),C=a(4016);const S={employee:"\u0421\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a",company_admin:"\u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438",super_admin:"\u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440 \u0441\u0438\u0441\u0442\u0435\u043c\u044b"},H={name:"",email:"",role:"employee",password:""},z=()=>{const{user:r}=(0,M.A)(),{data:o=[],isLoading:a}=(0,k.gr)(),{data:z=["employee","company_admin"]}=(0,k.NX)(),[I,{isLoading:W}]=(0,k.i0)(),[T,{isLoading:R}]=(0,k.H7)(),[D]=(0,k.HC)(),[_,N]=(0,e.useState)(null),[L,B]=(0,e.useState)(H),[$,E]=(0,e.useState)(!1),F=[{field:"name",headerName:"\u0418\u043c\u044f",minWidth:180,flex:1},{field:"email",headerName:"Email",minWidth:230,flex:1},{field:"role",headerName:"\u0420\u043e\u043b\u044c",minWidth:210,valueFormatter:r=>S[r.value]||r.value},{field:"actions",type:"actions",width:110,getActions:o=>[(0,C.jsx)(b.Z,{icon:(0,C.jsx)(h.A,{}),label:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",onClick:()=>{return r=o.row,N(r),B({name:r.name,email:r.email,role:r.role,password:""}),void E(!0);var r}},"edit"),(0,C.jsx)(b.Z,{icon:(0,C.jsx)(x.A,{}),label:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",disabled:o.row.id===(null===r||void 0===r?void 0:r.id),onClick:()=>(async r=>{if(window.confirm(`\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f ${r.name}?`))try{await D(r.id).unwrap(),f.oR.success("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0443\u0434\u0430\u043b\u0451\u043d")}catch(o){f.oR.error((0,j.S)(o,"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"))}})(o.row)},"delete")]}];return a?(0,C.jsx)(w.A,{}):(0,C.jsxs)(A.Dk,{children:[(0,C.jsxs)(A.zY,{children:[(0,C.jsxs)(A.Fp,{children:[(0,C.jsx)(A.sT,{children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"}),(0,C.jsx)(A.I_,{children:"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430\u043c\u0438, \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0430\u043c\u0438 \u0438 \u043f\u0430\u0440\u043e\u043b\u044f\u043c\u0438 \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0439 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438."})]}),(0,C.jsx)(y.A,{muiType:"success",text:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",leftIcon:(0,C.jsx)(u.A,{}),onClick:()=>{N(null),B(H),E(!0)}})]}),(0,C.jsx)(A.ui,{children:(0,C.jsx)(A.aN,{autoHeight:!0,rows:o,columns:F,pageSizeOptions:[25,50],disableRowSelectionOnClick:!0})}),(0,C.jsxs)(i.A,{open:$,onClose:()=>E(!1),fullWidth:!0,maxWidth:"sm",children:[(0,C.jsx)(l.A,{children:_?"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f":"\u041d\u043e\u0432\u044b\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c"}),(0,C.jsxs)(n.A,{sx:{display:"grid",gap:2,paddingTop:"12px !important"},children:[(0,C.jsx)(t.A,{required:!0,label:"\u0418\u043c\u044f",value:L.name,onChange:r=>B({...L,name:r.target.value})}),(0,C.jsx)(t.A,{required:!0,type:"email",label:"Email",value:L.email,onChange:r=>B({...L,email:r.target.value})}),(0,C.jsxs)(d.A,{children:[(0,C.jsx)(c.A,{id:"user-role-label",children:"\u0420\u043e\u043b\u044c"}),(0,C.jsx)(s.A,{labelId:"user-role-label",label:"\u0420\u043e\u043b\u044c",value:L.role,onChange:r=>B({...L,role:r.target.value}),children:z.filter(r=>"super_admin"!==r).map(r=>(0,C.jsx)(p.A,{value:r,children:S[r]},r))}),(0,C.jsx)(m.A,{children:"company_admin"===L.role?"\u041f\u043e\u043b\u043d\u043e\u0435 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u0432\u043e\u0435\u0439 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0435\u0439, \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430\u043c\u0438 \u0438 \u0437\u0430\u043a\u0430\u0437\u0430\u043c\u0438. \u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0431\u043e\u0442\u0430 \u0438 \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0439 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440.":"\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 \u0437\u0430\u043a\u0430\u0437\u0430\u043c\u0438 \u0438 \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u0441\u0432\u043e\u0435\u0439 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438."})]}),(0,C.jsx)(t.A,{required:!_,type:"password",label:_?"\u041d\u043e\u0432\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c (\u043d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e)":"\u041f\u0430\u0440\u043e\u043b\u044c",value:L.password,onChange:r=>B({...L,password:r.target.value}),helperText:"\u041d\u0435 \u043c\u0435\u043d\u0435\u0435 8 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"})]}),(0,C.jsxs)(g.A,{children:[(0,C.jsx)(v.A,{onClick:()=>E(!1),children:"\u041e\u0442\u043c\u0435\u043d\u0430"}),(0,C.jsx)(v.A,{variant:"contained",onClick:async()=>{try{_?await T({id:_.id,body:L}).unwrap():await I(L).unwrap(),f.oR.success(_?"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043e\u0431\u043d\u043e\u0432\u043b\u0451\u043d":"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441\u043e\u0437\u0434\u0430\u043d"),E(!1)}catch(r){f.oR.error((0,j.S)(r,"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"))}},disabled:W||R||!L.name||!L.email||!_&&!L.password,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})]})]})};a.d(o,["default",0,z])},9304(r,o,a){a.d(o,{A:()=>d});a(2012);var e=a(3012),i=a(9576),l=a(3492);const n=(0,i.Ay)(l.A,{shouldForwardProp:r=>"muiType"!==r&&"horizontalMargin"!==r&&"verticalMargin"!==r&&"bottomMargin"!==r})`
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
`;var t=a(4016);const d=r=>{let{fullWidth:o,type:a,onClick:e,leftIcon:i,rightIcon:l,text:d,muiType:c,horizontalMargin:s,verticalMargin:p,bottomMargin:m,disabled:g,ariaLabel:v}=r;return(0,t.jsx)(n,{fullWidth:o,type:a,muiType:c,startIcon:i,endIcon:l,onClick:e,verticalMargin:p||!1,horizontalMargin:s||!1,bottomMargin:m||!1,disabled:g,"aria-label":v,children:d})}},4498(r,o,a){var e=a(2012),i=a(7906),l=a(9576),n=a(6733),t=a(3279);const d=i.Ay.div({width:"100%",maxWidth:"1360px",minWidth:0,margin:"0 auto",textAlign:"left"}),c=i.Ay.div({display:"flex",flexWrap:"wrap",alignItems:"flex-start",justifyContent:"space-between",gap:"24px",marginBottom:"28px","@media (max-width: 760px)":{display:"grid"}}),s=i.Ay.div({display:"grid",gap:"10px",minWidth:0}),p=i.Ay.h1({margin:0,color:"var(--color-text)",fontSize:"clamp(26px, 2.5vw, 32px)",fontWeight:750,letterSpacing:"-.035em",lineHeight:1.25,"@media (max-width: 760px)":{fontSize:"25px"}}),m=i.Ay.p({maxWidth:"720px",margin:0,color:"var(--color-muted)",fontSize:"14px",fontWeight:450,lineHeight:1.6}),g=i.Ay.section({width:"100%",minWidth:0,padding:"var(--panel-padding)",background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"var(--radius-xl)",boxShadow:"var(--shadow-soft)"}),v=i.Ay.div({display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"12px",width:"100%",marginBottom:"14px","@media (max-width: 760px)":{display:"grid"}}),u=i.Ay.div({display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"}),x=i.Ay.div({display:"grid",alignItems:"start",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",gap:"12px","@media (max-width: 760px)":{gridTemplateColumns:"1fr"}}),h=i.Ay.form({display:"grid",gridTemplateColumns:"minmax(0, 1fr)",alignItems:"start",gap:"14px",width:"min(720px, 100%)",minWidth:0,padding:"var(--panel-padding)",background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"16px",boxShadow:"var(--shadow-soft)","@media (max-width: 560px)":{gap:"12px",padding:"14px"}}),b=i.Ay.div({display:"grid",placeItems:"center",gap:"8px",minHeight:"220px",padding:"28px",color:"var(--color-muted)",textAlign:"center",background:"var(--color-surface)",border:"1px dashed var(--color-border-strong)",borderRadius:"16px"}),f=(i.Ay.div({marginBottom:"8px",color:"var(--color-danger)",fontSize:"13px",fontWeight:650}),(0,l.Ay)(n.zh)({width:"100%",minWidth:0,"&.MuiDataGrid-autoHeight":{overflow:"visible","& .MuiDataGrid-main":{overflow:"visible"},"& .MuiDataGrid-columnHeaders":{position:"sticky",top:"var(--app-header-height)",zIndex:2,backgroundColor:"var(--color-surface-soft)",boxShadow:"0 1px 0 var(--color-border)"}}}));a.d(o,["Dk",0,d,"Fp",0,s,"I_",0,m,"M7",0,v,"aN",0,r=>{const{language:o}=(0,t.Bd)(),a=(0,e.useMemo)(()=>({...(0,t.it)(o),...r.localeText}),[o,r.localeText]);return e.createElement(f,{...r,localeText:a})},"kA",0,h,"pp",0,b,"sT",0,p,"ui",0,g,"vY",0,x,"v_",0,u,"zY",0,c])},478(r,o,a){var e=a(7411);o.A=void 0;var i=e(a(3792)),l=a(4016);o.A=(0,i.default)((0,l.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add")},578(r,o,a){var e=a(7411);o.A=void 0;var i=e(a(3792)),l=a(4016);o.A=(0,i.default)((0,l.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8zm7.5-5-1-1h-5l-1 1H5v2h14V4z"}),"DeleteOutline")},175(r,o,a){var e=a(7411);o.A=void 0;var i=e(a(3792)),l=a(4016);o.A=(0,i.default)((0,l.jsx)("path",{d:"m14.06 9.02.92.92L5.92 19H5v-.92zM17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"}),"EditOutlined")},5533(r,o,a){a.d(o,{A:()=>x});var e=a(4780),i=a(6061),l=a(2012),n=a(819),t=a(7595),d=a(9576),c=a(6805),s=a(1421),p=a(4921);function m(r){return(0,p.Ay)("MuiDialogActions",r)}(0,s.A)("MuiDialogActions",["root","spacing"]);var g=a(4016);const v=["className","disableSpacing"],u=(0,d.Ay)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(r,o)=>{const{ownerState:a}=r;return[o.root,!a.disableSpacing&&o.spacing]}})(r=>{let{ownerState:o}=r;return(0,i.A)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!o.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})}),x=l.forwardRef(function(r,o){const a=(0,c.A)({props:r,name:"MuiDialogActions"}),{className:l,disableSpacing:d=!1}=a,s=(0,e.A)(a,v),p=(0,i.A)({},a,{disableSpacing:d}),x=(r=>{const{classes:o,disableSpacing:a}=r,e={root:["root",!a&&"spacing"]};return(0,t.A)(e,m,o)})(p);return(0,g.jsx)(u,(0,i.A)({className:(0,n.A)(x.root,l),ownerState:p,ref:o},s))})},7203(r,o,a){var e=a(6061),i=a(4780),l=a(2012),n=a(3152),t=a(9809),d=a(393),c=a(4016);const s=["label","icon","showInMenu","onClick"],p=l.forwardRef((r,o)=>{const{label:a,icon:p,showInMenu:m,onClick:g}=r,v=(0,i.A)(r,s),u=(0,d.A)(),x=r=>{g&&g(r)};var h;return m?(0,c.jsxs)(n.A,(0,e.A)({ref:o},v,{onClick:g,children:[p&&(0,c.jsx)(t.A,{children:p}),a]})):(0,c.jsx)(u.slots.baseIconButton,(0,e.A)({ref:o,size:"small",role:"menuitem","aria-label":a},v,{onClick:x},null==(h=u.slotProps)?void 0:h.baseIconButton,{children:l.cloneElement(p,{fontSize:"small"})}))});a.d(o,["Z",0,p])}}]);