"use strict";(globalThis.webpackChunkvivotech_crm_client||=[]).push([[2535],{88215(r,o,e){e.d(o,{A:()=>d}),e(18139);var a=e(40361),i=e(29615),t=e(56308),n=e(18815),l=e(20811);function d(r){let{error:o,onRetry:e}=r;const{t:d}=(0,n.Bd)();return(0,l.jsx)(a.A,{severity:"error",action:(0,l.jsx)(i.A,{onClick:()=>{e()},children:d("Повторить")}),children:(0,t.S)(o,d("Не удалось загрузить данные. Повторите запрос."))})}},2535(r,o,e){e.r(o),e.d(o,{default:()=>b});var a=e(18139),i=e(56840),t=e(17361),n=e(63454),l=e(35658),d=e(37866),c=e(76295),s=e(88215),p=e(7176),g=e(56308),v=e(51222),m=e(69797),h=e(70701),x=e(18815),u=e(20811);const b=()=>{var r,o;const{id:e}=(0,i.g)(),b=(0,i.Zp)(),{t:y}=(0,x.Bd)(),f=(0,a.useMemo)(()=>(r=>d.Ik({name:d.Yj().required(r("Пожалуйста, заполните это поле!")),price:d.ai().typeError(r("Пожалуйста, заполните это поле!")).moreThan(-1,r("Число должно быть положительным или равно нулю!")).integer().required()}).required())(y),[y]),{reset:w,register:A,handleSubmit:k,formState:{errors:M}}=(0,n.mN)({resolver:(0,l.t)(f)}),{data:j,isLoading:H,isError:W,error:T,refetch:C}=(0,c.tX)(e,{skip:!e}),[I,{isLoading:z}]=(0,c.e1)(),[S,{isLoading:D}]=(0,c.AC)(),$=z||D;return(0,a.useEffect)(()=>{w(j)},[j,w]),e&&H?(0,u.jsx)(p.A,{}):!e||!W&&j?(0,u.jsxs)(v.Dk,{children:[(0,u.jsx)(v.zY,{children:(0,u.jsxs)(v.Fp,{children:[(0,u.jsx)(v.sT,{children:y(e?"Редактирование доставки":"Новый способ доставки")}),(0,u.jsx)(v.I_,{children:y("Название и стоимость доставки для расчета итогов заказа.")})]})}),(0,u.jsxs)(v.kA,{onSubmit:k(async r=>{const o={name:r.name,price:r.price};try{if(e){const r={...o,id:e};await S(r).unwrap(),t.oR.success(y("Delivery method was changed"))}else await I(o).unwrap(),t.oR.success(y("Delivery method was created"));b("/deliveryMethods",{replace:!0})}catch(r){t.oR.error((0,g.S)(r,y("Delivery method was not saved")))}}),children:[(0,u.jsx)(m.A,{label:y("Название"),register:A,name:"name",error:null===(r=M.name)||void 0===r?void 0:r.message}),(0,u.jsx)(m.A,{type:"number",label:y("Стоимость"),register:A,name:"price",error:null===(o=M.price)||void 0===o?void 0:o.message}),(0,u.jsx)(h.A,{fullWidth:!0,text:y($?"Saving...":"Сохранить"),muiType:"success",type:"submit",disabled:$})]})]}):(0,u.jsx)(v.Dk,{children:(0,u.jsx)(s.A,{error:T,onRetry:C})})}},70701(r,o,e){e.d(o,{A:()=>d}),e(18139);var a=e(54499),i=e(28751),t=e(29615);const n=(0,i.Ay)(t.A,{shouldForwardProp:r=>"muiType"!==r&&"horizontalMargin"!==r&&"verticalMargin"!==r&&"bottomMargin"!==r})`
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
`;var l=e(20811);const d=r=>{let{fullWidth:o,type:e,onClick:a,leftIcon:i,rightIcon:t,text:d,muiType:c,horizontalMargin:s,verticalMargin:p,bottomMargin:g,disabled:v,ariaLabel:m}=r;return(0,l.jsx)(n,{fullWidth:o,type:e,muiType:c,startIcon:i,endIcon:t,onClick:a,verticalMargin:p||!1,horizontalMargin:s||!1,bottomMargin:g||!1,disabled:v,"aria-label":m,children:d})}},51222(r,o,e){var a=e(18139),i=e(61),t=e(28751),n=e(4780),l=e(18815);const d=i.Ay.div({width:"100%",maxWidth:"var(--app-content-width, 1440px)",minWidth:0,margin:"0 auto",textAlign:"left"}),c=i.Ay.div({display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"16px 24px",marginBottom:"24px","@media (max-width: 760px)":{display:"grid",marginBottom:"18px"}}),s=i.Ay.div({display:"grid",gap:"6px",minWidth:0}),p=i.Ay.h1({margin:0,color:"var(--color-text)",fontSize:"clamp(24px, 2.35vw, 34px)",fontWeight:800,letterSpacing:"-.04em",lineHeight:1.2,overflowWrap:"anywhere"}),g=i.Ay.p({maxWidth:"720px",margin:0,color:"var(--color-muted)",fontSize:"14px",fontWeight:450,lineHeight:1.6}),v=i.Ay.section({width:"100%",minWidth:0,padding:"var(--panel-padding)",background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"var(--radius-xl)",boxShadow:"var(--shadow-soft)"}),m=i.Ay.div({display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"12px",width:"100%",marginBottom:"14px","@media (max-width: 760px)":{display:"grid"}}),h=i.Ay.div({display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"}),x=i.Ay.div({display:"grid",alignItems:"start",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",gap:"12px","@media (max-width: 760px)":{gridTemplateColumns:"1fr"}}),u=i.Ay.form({display:"grid",gridTemplateColumns:"minmax(0, 1fr)",alignItems:"start",gap:"14px",width:"min(720px, 100%)",minWidth:0,padding:"var(--panel-padding)",background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"16px",boxShadow:"var(--shadow-soft)","@media (max-width: 560px)":{gap:"12px",padding:"14px"}}),b=i.Ay.div({display:"grid",placeItems:"center",gap:"8px",minHeight:"220px",padding:"28px",color:"var(--color-muted)",textAlign:"center",background:"var(--color-surface)",border:"1px dashed var(--color-border-strong)",borderRadius:"16px"}),y=(i.Ay.div({marginBottom:"8px",color:"var(--color-danger)",fontSize:"13px",fontWeight:650}),(0,t.Ay)(n.zh)({width:"100%",minWidth:0,"&.MuiDataGrid-autoHeight":{overflow:"visible","& .MuiDataGrid-main":{overflow:"visible"},"& .MuiDataGrid-columnHeaders":{position:"sticky",top:"var(--app-header-height)",zIndex:2,backgroundColor:"var(--color-surface-soft)",boxShadow:"0 1px 0 var(--color-border)"}}}));e.d(o,["Dk",0,d,"Fp",0,s,"I_",0,g,"M7",0,m,"aN",0,r=>{const{language:o}=(0,l.Bd)(),e=(0,a.useMemo)(()=>({...(0,l.it)(o),...r.localeText}),[o,r.localeText]);return a.createElement(y,{...r,localeText:e})},"kA",0,u,"pp",0,b,"sT",0,p,"ui",0,v,"vY",0,x,"v_",0,h,"zY",0,c])},69797(r,o,e){e.d(o,{A:()=>s}),e(18139);var a=e(54499),i=e(28751),t=e(46143);const n=(0,i.Ay)(t.A,{shouldForwardProp:r=>"horizontalMargin"!==r&&"verticalMargin"!==r&&"halfWidth"!==r&&"topMargin"!==r})`
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
`;var l=e(70166),d=e(42407),c=e(20811);const s=r=>{let{required:o=!1,value:e,onChange:a,label:i,verticalMargin:t=!1,horizontalMargin:s=!1,inputEvent:p,halfWidth:g=!1,disabled:v=!1,topMargin:m=!1,type:h="text",inputProps:x,register:u,name:b,error:y,fieldArray:f}=r;const w={disabled:v,halfWidth:g,required:o,topMargin:m,verticalMargin:t,horizontalMargin:s,value:e,label:i,type:h,inputProps:x,InputProps:p?{endAdornment:(0,c.jsx)(l.A,{position:"end",children:(0,c.jsx)(d.A,{onClick:()=>p()})})}:void 0};return u?(0,c.jsx)(n,{error:!!y,helperText:y,...w,onChange:a,...u(b)}):f?(0,c.jsx)(n,{onChange:a,error:!!y,helperText:y,...w}):(0,c.jsx)(n,{onChange:a,...w})}}}]);