"use strict";(globalThis.webpackChunkvivotech_crm_client||=[]).push([[2152],{2152(r,o,e){e.r(o),e.d(o,{default:()=>R});var a=e.cw(function(r,o){var e=c();o.A=void 0;var a=e(t()),i=d();o.A=(0,a.default)([(0,i.jsx)("path",{d:"M2 4h15v2H2zm13 13h2v-3h1v-2l-1-5H2l-1 5v2h1v6h9v-6h4zm-6 1H4v-4h5zm-5.96-6 .6-3h11.72l.6 3z"},"0"),(0,i.jsx)("path",{d:"M23 18h-3v-3h-2v3h-3v2h3v3h2v-3h3z"},"1")],"AddBusinessOutlined")}),i=e.cw(function(r,o){var e=c();o.A=void 0;var a=e(t()),i=d();o.A=(0,a.default)((0,i.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12m8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8"}),"BlockOutlined")}),n=e.cw(function(r,o){var e=c();o.A=void 0;var a=e(t()),i=d();o.A=(0,a.default)((0,i.jsx)("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z"}),"LaunchOutlined")}),l=e.cw(function(r,o){var e=c();o.A=void 0;var a=e(t()),i=d();o.A=(0,a.default)((0,i.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h2c0-1.66 1.34-3 3-3s3 1.34 3 3v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m0 12H6V10h12zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2"}),"LockOpenOutlined")}),t=()=>e(3792),d=()=>e(4016),c=()=>e(7411),s=e(2012),p=e(4851),v=e(4540),u=e(6427),m=e(3492),h=e(4159),g=e(7298),x=e(2287),b=e(3172),f=e(8111),A=e(5533);d();var w=e(578),y=e(175),j=e(7203),k=e(5214),C=e(4498),M=e(9304),S=e(4748),z=e(1712),H=e(6036),I=e(3574);const W={name:"",address:""},B={employee:"\u0421\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a",company_admin:"\u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438",super_admin:"\u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440 \u0441\u0438\u0441\u0442\u0435\u043c\u044b"},R=()=>{const{user:r,switchFirm:o}=(0,I.A)(),{data:e=[],isLoading:t}=(0,H.PC)(),[c,{isLoading:R}]=(0,H.LM)(),[N,{isLoading:T}]=(0,H.KP)(),[L,{isLoading:D}]=(0,H.u)(),[O]=(0,H.Gi)(),[V,$]=(0,s.useState)(null),[E,_]=(0,s.useState)(null),[F,Z]=(0,s.useState)(W),[q,G]=(0,s.useState)(!1),P=(0,s.useMemo)(()=>{var r;return null!==(r=e.find(r=>r.id===E))&&void 0!==r?r:null},[e,E]),{data:Y=[],isFetching:U,isError:K}=(0,H.CE)(null!==E&&void 0!==E?E:0,{skip:null===E});(0,s.useEffect)(()=>{e.length?null!==E&&e.some(r=>r.id===E)||_(e[0].id):_(null)},[e,E]);const J=[{field:"name",headerName:"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f",minWidth:220,flex:1},{field:"address",headerName:"\u0410\u0434\u0440\u0435\u0441",minWidth:240,flex:1},{field:"isBlocked",headerName:"\u0414\u043e\u0441\u0442\u0443\u043f",width:140,renderCell:r=>r.value?(0,d().jsx)(p.A,{size:"small",color:"error",label:"\u0417\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d\u0430"}):(0,d().jsx)(p.A,{size:"small",color:"success",variant:"outlined",label:"\u0410\u043a\u0442\u0438\u0432\u043d\u0430"})},{field:"activeUserCount",headerName:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439",width:130},{field:"employeeCount",headerName:"\u0421\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u043e\u0432",width:125},{field:"companyAdminCount",headerName:"\u0410\u0434\u043c\u0438\u043d\u043e\u0432",width:100},{field:"actions",type:"actions",width:190,getActions:e=>[(0,d().jsx)(j.Z,{icon:(0,d().jsx)(n().A,{}),label:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c CRM \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438",disabled:e.row.isBlocked,onClick:()=>o(e.row.id),showInMenu:!0},"open"),(0,d().jsx)(j.Z,{icon:(0,d().jsx)(y.A,{}),label:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",onClick:()=>{return r=e.row,$(r),Z({name:r.name,address:r.address}),void G(!0);var r}},"edit"),(0,d().jsx)(j.Z,{icon:e.row.isBlocked?(0,d().jsx)(l().A,{}):(0,d().jsx)(i().A,{}),label:e.row.isBlocked?"\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f":"\u0417\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c",disabled:D||e.row.isRequired||!e.row.isBlocked&&e.row.id===(null===r||void 0===r?void 0:r.firmId),onClick:()=>(async r=>{const o=r.isBlocked?"\u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f":"\u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c",e=r.isBlocked?"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 \u0441\u043d\u043e\u0432\u0430 \u0441\u043c\u043e\u0433\u0443\u0442 \u0432\u043e\u0439\u0442\u0438 \u0438 \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u0443.":"\u0412\u0441\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 \u043d\u0435\u043c\u0435\u0434\u043b\u0435\u043d\u043d\u043e \u043f\u043e\u0442\u0435\u0440\u044f\u044e\u0442 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0435.";if(window.confirm(`\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 ${o} \u0434\u043b\u044f \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 \xab${r.name}\xbb?\n\n${e}`))try{await L({id:r.id,isBlocked:!r.isBlocked}).unwrap(),k.oR.success(r.isBlocked?"\u0414\u043e\u0441\u0442\u0443\u043f \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d":"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f \u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d\u0430")}catch(a){k.oR.error((0,z.S)(a,"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"))}})(e.row)},"access"),(0,d().jsx)(j.Z,{icon:(0,d().jsx)(w.A,{}),label:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",disabled:e.row.isRequired||e.row.id===(null===r||void 0===r?void 0:r.firmId),onClick:()=>(async r=>{if(window.confirm(`\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044e \xab${r.name}\xbb \u0438 \u0435\u0451 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439? \u042d\u0442\u043e \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043d\u0435\u043b\u044c\u0437\u044f \u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c.`))try{await O(r.id).unwrap(),k.oR.success("\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f \u0443\u0434\u0430\u043b\u0435\u043d\u0430")}catch(o){k.oR.error((0,z.S)(o,"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044e"))}})(e.row)},"delete")]}],Q=[{field:"name",headerName:"\u0418\u043c\u044f",minWidth:180,flex:1},{field:"email",headerName:"Email",minWidth:220,flex:1},{field:"role",headerName:"\u0420\u043e\u043b\u044c",minWidth:220,valueFormatter:r=>B[r.value]||r.value}];return t?(0,d().jsx)(S.A,{}):(0,d().jsxs)(C.Dk,{children:[(0,d().jsxs)(C.zY,{children:[(0,d().jsxs)(C.Fp,{children:[(0,d().jsx)(C.sT,{children:"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"}),(0,d().jsx)(C.I_,{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0439 \u0438 \u0438\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439. \u0411\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0430 \u043d\u0435\u043c\u0435\u0434\u043b\u0435\u043d\u043d\u043e \u0437\u0430\u043a\u0440\u044b\u0432\u0430\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f \u0432\u0441\u0435\u043c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u0439 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438, \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0435\u0433\u043e \u0431\u0435\u0437 \u043f\u043e\u0442\u0435\u0440\u0438 \u0434\u0430\u043d\u043d\u044b\u0445."})]}),(0,d().jsx)(M.A,{muiType:"success",text:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044e",leftIcon:(0,d().jsx)(a().A,{}),onClick:()=>{$(null),Z(W),G(!0)}})]}),(0,d().jsx)(C.ui,{children:(0,d().jsx)(C.aN,{autoHeight:!0,rows:e,columns:J,pageSizeOptions:[25,50],onRowClick:r=>_(Number(r.id)),rowSelectionModel:null===E?[]:[E],onRowSelectionModelChange:r=>{r.length&&_(Number(r[0]))}})}),(0,d().jsx)(C.ui,{style:{marginTop:18},children:P?(0,d().jsxs)(v.A,{spacing:2,children:[(0,d().jsxs)(v.A,{direction:{xs:"column",sm:"row"},spacing:1,alignItems:{xs:"flex-start",sm:"center"},justifyContent:"space-between",children:[(0,d().jsxs)("div",{children:[(0,d().jsxs)(u.A,{variant:"h6",fontWeight:750,children:["\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438: ",P.name]}),(0,d().jsxs)(u.A,{variant:"body2",color:"text.secondary",children:[P.activeUserCount," \u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0445 \u0443\u0447\u0451\u0442\u043d\u044b\u0445 \u0437\u0430\u043f\u0438\u0441\u0435\u0439"]})]}),(0,d().jsxs)(v.A,{direction:"row",spacing:1,alignItems:"center",children:[(0,d().jsx)(m.A,{variant:"contained",startIcon:(0,d().jsx)(n().A,{}),disabled:P.isBlocked,onClick:()=>o(P.id),children:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c CRM \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"}),(0,d().jsx)(p.A,{color:P.isBlocked?"error":"success",variant:P.isBlocked?"filled":"outlined",label:P.isBlocked?"\u0414\u043e\u0441\u0442\u0443\u043f \u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d":"\u0414\u043e\u0441\u0442\u0443\u043f \u0440\u0430\u0437\u0440\u0435\u0448\u0451\u043d"})]})]}),K?(0,d().jsx)(h.A,{severity:"error",children:"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438."}):(0,d().jsx)(C.aN,{autoHeight:!0,loading:U,rows:Y,columns:Q,pageSizeOptions:[25,50],disableRowSelectionOnClick:!0})]}):(0,d().jsx)(h.A,{severity:"info",children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044e, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0435\u0451 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439."})}),(0,d().jsxs)(g.A,{open:q,onClose:()=>G(!1),fullWidth:!0,maxWidth:"sm",children:[(0,d().jsx)(x.A,{children:V?"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438":"\u041d\u043e\u0432\u0430\u044f \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044f"}),(0,d().jsxs)(b.A,{sx:{display:"grid",gap:2,paddingTop:"12px !important"},children:[(0,d().jsx)(f.A,{required:!0,label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",value:F.name,disabled:null===V||void 0===V?void 0:V.isRequired,onChange:r=>Z({...F,name:r.target.value})}),(0,d().jsx)(f.A,{label:"\u0410\u0434\u0440\u0435\u0441",value:F.address,onChange:r=>Z({...F,address:r.target.value})})]}),(0,d().jsxs)(A.A,{children:[(0,d().jsx)(m.A,{onClick:()=>G(!1),children:"\u041e\u0442\u043c\u0435\u043d\u0430"}),(0,d().jsx)(m.A,{variant:"contained",onClick:async()=>{try{V?await N({id:V.id,body:F}).unwrap():await c(F).unwrap(),k.oR.success(V?"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0430":"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0430"),G(!1)}catch(r){k.oR.error((0,z.S)(r,"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044e"))}},disabled:R||T||!F.name.trim(),children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})]})]})}},9304(r,o,e){e.d(o,{A:()=>d});e(2012);var a=e(3012),i=e(9576),n=e(3492);const l=(0,i.Ay)(n.A,{shouldForwardProp:r=>"muiType"!==r&&"horizontalMargin"!==r&&"verticalMargin"!==r&&"bottomMargin"!==r})`
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
`;var t=e(4016);const d=r=>{let{fullWidth:o,type:e,onClick:a,leftIcon:i,rightIcon:n,text:d,muiType:c,horizontalMargin:s,verticalMargin:p,bottomMargin:v,disabled:u,ariaLabel:m}=r;return(0,t.jsx)(l,{fullWidth:o,type:e,muiType:c,startIcon:i,endIcon:n,onClick:a,verticalMargin:p||!1,horizontalMargin:s||!1,bottomMargin:v||!1,disabled:u,"aria-label":m,children:d})}},4498(r,o,e){var a=e(2012),i=e(7906),n=e(9576),l=e(6733),t=e(3279);const d=i.Ay.div({width:"100%",maxWidth:"1360px",minWidth:0,margin:"0 auto",textAlign:"left"}),c=i.Ay.div({display:"flex",flexWrap:"wrap",alignItems:"flex-start",justifyContent:"space-between",gap:"24px",marginBottom:"28px","@media (max-width: 760px)":{display:"grid"}}),s=i.Ay.div({display:"grid",gap:"10px",minWidth:0}),p=i.Ay.h1({margin:0,color:"var(--color-text)",fontSize:"clamp(26px, 2.5vw, 32px)",fontWeight:750,letterSpacing:"-.035em",lineHeight:1.25,"@media (max-width: 760px)":{fontSize:"25px"}}),v=i.Ay.p({maxWidth:"720px",margin:0,color:"var(--color-muted)",fontSize:"14px",fontWeight:450,lineHeight:1.6}),u=i.Ay.section({width:"100%",minWidth:0,padding:"var(--panel-padding)",background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"var(--radius-xl)",boxShadow:"var(--shadow-soft)"}),m=i.Ay.div({display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"12px",width:"100%",marginBottom:"14px","@media (max-width: 760px)":{display:"grid"}}),h=i.Ay.div({display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"}),g=i.Ay.div({display:"grid",alignItems:"start",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",gap:"12px","@media (max-width: 760px)":{gridTemplateColumns:"1fr"}}),x=i.Ay.form({display:"grid",gridTemplateColumns:"minmax(0, 1fr)",alignItems:"start",gap:"14px",width:"min(720px, 100%)",minWidth:0,padding:"var(--panel-padding)",background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"16px",boxShadow:"var(--shadow-soft)","@media (max-width: 560px)":{gap:"12px",padding:"14px"}}),b=i.Ay.div({display:"grid",placeItems:"center",gap:"8px",minHeight:"220px",padding:"28px",color:"var(--color-muted)",textAlign:"center",background:"var(--color-surface)",border:"1px dashed var(--color-border-strong)",borderRadius:"16px"}),f=(i.Ay.div({marginBottom:"8px",color:"var(--color-danger)",fontSize:"13px",fontWeight:650}),(0,n.Ay)(l.zh)({width:"100%",minWidth:0,"&.MuiDataGrid-autoHeight":{overflow:"visible","& .MuiDataGrid-main":{overflow:"visible"},"& .MuiDataGrid-columnHeaders":{position:"sticky",top:"var(--app-header-height)",zIndex:2,backgroundColor:"var(--color-surface-soft)",boxShadow:"0 1px 0 var(--color-border)"}}}));e.d(o,["Dk",0,d,"Fp",0,s,"I_",0,v,"M7",0,m,"aN",0,r=>{const{language:o}=(0,t.Bd)(),e=(0,a.useMemo)(()=>({...(0,t.it)(o),...r.localeText}),[o,r.localeText]);return a.createElement(f,{...r,localeText:e})},"kA",0,x,"pp",0,b,"sT",0,p,"ui",0,u,"vY",0,g,"v_",0,h,"zY",0,c])},578(r,o,e){var a=e(7411);o.A=void 0;var i=a(e(3792)),n=e(4016);o.A=(0,i.default)((0,n.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8zm7.5-5-1-1h-5l-1 1H5v2h14V4z"}),"DeleteOutline")},175(r,o,e){var a=e(7411);o.A=void 0;var i=a(e(3792)),n=e(4016);o.A=(0,i.default)((0,n.jsx)("path",{d:"m14.06 9.02.92.92L5.92 19H5v-.92zM17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"}),"EditOutlined")},5533(r,o,e){e.d(o,{A:()=>g});var a=e(4780),i=e(6061),n=e(2012),l=e(819),t=e(7595),d=e(9576),c=e(6805),s=e(1421),p=e(4921);function v(r){return(0,p.Ay)("MuiDialogActions",r)}(0,s.A)("MuiDialogActions",["root","spacing"]);var u=e(4016);const m=["className","disableSpacing"],h=(0,d.Ay)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(r,o)=>{const{ownerState:e}=r;return[o.root,!e.disableSpacing&&o.spacing]}})(r=>{let{ownerState:o}=r;return(0,i.A)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!o.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})}),g=n.forwardRef(function(r,o){const e=(0,c.A)({props:r,name:"MuiDialogActions"}),{className:n,disableSpacing:d=!1}=e,s=(0,a.A)(e,m),p=(0,i.A)({},e,{disableSpacing:d}),g=(r=>{const{classes:o,disableSpacing:e}=r,a={root:["root",!e&&"spacing"]};return(0,t.A)(a,v,o)})(p);return(0,u.jsx)(h,(0,i.A)({className:(0,l.A)(g.root,n),ownerState:p,ref:o},s))})},7203(r,o,e){var a=e(6061),i=e(4780),n=e(2012),l=e(3152),t=e(9809),d=e(393),c=e(4016);const s=["label","icon","showInMenu","onClick"],p=n.forwardRef((r,o)=>{const{label:e,icon:p,showInMenu:v,onClick:u}=r,m=(0,i.A)(r,s),h=(0,d.A)(),g=r=>{u&&u(r)};var x;return v?(0,c.jsxs)(l.A,(0,a.A)({ref:o},m,{onClick:u,children:[p&&(0,c.jsx)(t.A,{children:p}),e]})):(0,c.jsx)(h.slots.baseIconButton,(0,a.A)({ref:o,size:"small",role:"menuitem","aria-label":e},m,{onClick:g},null==(x=h.slotProps)?void 0:x.baseIconButton,{children:n.cloneElement(p,{fontSize:"small"})}))});e.d(o,["Z",0,p])}}]);