"use strict";(globalThis.webpackChunkvivotech_crm_client||=[]).push([[3062],{1252(r,o,a){a.d(o,{A:()=>d});a(9950);var e=a(5429),i=a(226),t=a(8965),n=a(6814),l=a(4414);function d(r){let{error:o,onRetry:a}=r;const{t:d}=(0,n.Bd)();return(0,l.jsx)(e.A,{severity:"error",action:(0,l.jsx)(i.A,{onClick:()=>{a()},children:d("\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c")}),children:(0,t.S)(o,d("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435. \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441."))})}},3062(r,o,a){a.r(o),a.d(o,{default:()=>b});var e=a(9950),i=a(8977),t=a(8429),n=a(9348),l=a(1252),d=a(7961),c=a(8965),s=a(475),p=a(9449),g=a(6473),m=a(9642),v=a(624);var h=a(4748),x=a(6814),u=a(4414);const b=()=>{var r;const{id:o}=(0,t.g)(),a=(0,t.Zp)(),{t:b}=(0,x.Bd)(),y=(0,e.useMemo)(()=>(r=>v.Ik({name:v.Yj().required(r("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u044d\u0442\u043e \u043f\u043e\u043b\u0435!"))}).required())(b),[b]),{reset:f,register:w,handleSubmit:A,formState:{errors:k}}=(0,p.mN)({resolver:(0,g.t)(y)}),{data:M,isLoading:j,isError:H,error:W,refetch:T}=(0,h.J)(o,{skip:!o}),[z,{isLoading:I}]=(0,h.KA)(),[C,{isLoading:S}]=(0,h.a4)(),$=I||S;(0,e.useEffect)(()=>{f(M)},[M,f]);return j?(0,u.jsx)(d.A,{}):!o||!H&&M?(0,u.jsxs)(s.Dk,{children:[(0,u.jsx)(s.zY,{children:(0,u.jsxs)(s.Fp,{children:[(0,u.jsx)(s.sT,{children:b(o?"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043e\u043f\u043b\u0430\u0442\u044b":"\u041d\u043e\u0432\u044b\u0439 \u0441\u043f\u043e\u0441\u043e\u0431 \u043e\u043f\u043b\u0430\u0442\u044b")}),(0,u.jsx)(s.I_,{children:b("\u041c\u0435\u0442\u043e\u0434 \u043e\u043f\u043b\u0430\u0442\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u0443\u0434\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d \u043f\u0440\u0438 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0438 \u0437\u0430\u043a\u0430\u0437\u0430.")})]})}),(0,u.jsxs)(s.kA,{onSubmit:A(async r=>{const e={name:r.name};try{if(o){const r={...e,id:o};await C(r).unwrap(),n.oR.success(b("Payment method was changed"))}else await z(e).unwrap(),n.oR.success(b("Payment method was created"));a("/paymentMethods",{replace:!0})}catch(W){n.oR.error((0,c.S)(W,b("Payment method was not saved")))}}),children:[(0,u.jsx)(m.A,{label:b("\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),register:w,name:"name",error:null===(r=k.name)||void 0===r?void 0:r.message}),(0,u.jsx)(i.A,{fullWidth:!0,text:b($?"Saving...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),muiType:"success",type:"submit",disabled:$})]})]}):(0,u.jsx)(s.Dk,{children:(0,u.jsx)(l.A,{error:W,onRetry:T})})}},8977(r,o,a){a.d(o,{A:()=>d});a(9950);var e=a(1866),i=a(9254),t=a(226);const n=(0,i.Ay)(t.A,{shouldForwardProp:r=>"muiType"!==r&&"horizontalMargin"!==r&&"verticalMargin"!==r&&"bottomMargin"!==r})`
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
`;var l=a(4414);const d=r=>{let{fullWidth:o,type:a,onClick:e,leftIcon:i,rightIcon:t,text:d,muiType:c,horizontalMargin:s,verticalMargin:p,bottomMargin:g,disabled:m,ariaLabel:v}=r;return(0,l.jsx)(n,{fullWidth:o,type:a,muiType:c,startIcon:i,endIcon:t,onClick:e,verticalMargin:p||!1,horizontalMargin:s||!1,bottomMargin:g||!1,disabled:m,"aria-label":v,children:d})}},475(r,o,a){var e=a(9950),i=a(132),t=a(9254),n=a(34),l=a(6814);const d=i.Ay.div({width:"100%",maxWidth:"1360px",minWidth:0,margin:"0 auto",textAlign:"left"}),c=i.Ay.div({display:"flex",flexWrap:"wrap",alignItems:"flex-start",justifyContent:"space-between",gap:"24px",marginBottom:"28px","@media (max-width: 760px)":{display:"grid"}}),s=i.Ay.div({display:"grid",gap:"10px",minWidth:0}),p=i.Ay.h1({margin:0,color:"var(--color-text)",fontSize:"clamp(28px, 3vw, 36px)",fontWeight:800,letterSpacing:"-.045em",lineHeight:1.18,"@media (max-width: 760px)":{fontSize:"25px"}}),g=i.Ay.p({maxWidth:"720px",margin:0,color:"var(--color-muted)",fontSize:"14px",fontWeight:450,lineHeight:1.6}),m=i.Ay.section({width:"100%",minWidth:0,padding:"var(--panel-padding)",background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"var(--radius-xl)",boxShadow:"var(--shadow-soft)"}),v=i.Ay.div({display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"12px",width:"100%",marginBottom:"14px","@media (max-width: 760px)":{display:"grid"}}),h=i.Ay.div({display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"}),x=i.Ay.div({display:"grid",alignItems:"start",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",gap:"12px","@media (max-width: 760px)":{gridTemplateColumns:"1fr"}}),u=i.Ay.form({display:"grid",gridTemplateColumns:"minmax(0, 1fr)",alignItems:"start",gap:"14px",width:"min(720px, 100%)",minWidth:0,padding:"var(--panel-padding)",background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"16px",boxShadow:"var(--shadow-soft)","@media (max-width: 560px)":{gap:"12px",padding:"14px"}}),b=i.Ay.div({display:"grid",placeItems:"center",gap:"8px",minHeight:"220px",padding:"28px",color:"var(--color-muted)",textAlign:"center",background:"var(--color-surface)",border:"1px dashed var(--color-border-strong)",borderRadius:"16px"}),y=(i.Ay.div({marginBottom:"8px",color:"var(--color-danger)",fontSize:"13px",fontWeight:650}),(0,t.Ay)(n.zh)({width:"100%",minWidth:0,"&.MuiDataGrid-autoHeight":{overflow:"visible","& .MuiDataGrid-main":{overflow:"visible"},"& .MuiDataGrid-columnHeaders":{position:"sticky",top:"var(--app-header-height)",zIndex:2,backgroundColor:"var(--color-surface-soft)",boxShadow:"0 1px 0 var(--color-border)"}}}));a.d(o,["Dk",0,d,"Fp",0,s,"I_",0,g,"M7",0,v,"aN",0,r=>{const{language:o}=(0,l.Bd)(),a=(0,e.useMemo)(()=>({...(0,l.it)(o),...r.localeText}),[o,r.localeText]);return e.createElement(y,{...r,localeText:a})},"kA",0,u,"pp",0,b,"sT",0,p,"ui",0,m,"vY",0,x,"v_",0,h,"zY",0,c])},9642(r,o,a){a.d(o,{A:()=>s});a(9950);var e=a(1866),i=a(9254),t=a(8145);const n=(0,i.Ay)(t.A,{shouldForwardProp:r=>"horizontalMargin"!==r&&"verticalMargin"!==r&&"halfWidth"!==r&&"topMargin"!==r})`
  width: 100%;
  min-width: 0;

  .MuiOutlinedInput-root {
    border-radius: 10px;
    background-color: var(--color-surface);
  }

  .MuiFormHelperText-root {
    font-weight: 650;
  }

  ${r=>!0===r.horizontalMargin&&e.AH`
      margin-left: 8px;
      margin-right: 8px;
      width: calc(100% - 16px);
    `}

  ${r=>!0===r.verticalMargin&&e.AH`
      margin-top: 8px;
      margin-bottom: 8px;
    `}

  ${r=>!0===r.topMargin&&e.AH`
        margin-top: 12px;
      `}

  ${r=>!0===r.halfWidth&&e.AH`
      width: min(100%, 520px);
    `}
`;var l=a(2046),d=a(7988),c=a(4414);const s=r=>{let{required:o=!1,value:a,onChange:e,label:i,verticalMargin:t=!1,horizontalMargin:s=!1,inputEvent:p,halfWidth:g=!1,disabled:m=!1,topMargin:v=!1,type:h="text",register:x,name:u,error:b,fieldArray:y}=r;const f={disabled:m,halfWidth:g,required:o,topMargin:v,verticalMargin:t,horizontalMargin:s,value:a,label:i,type:h,InputProps:p?{endAdornment:(0,c.jsx)(l.A,{position:"end",children:(0,c.jsx)(d.A,{onClick:()=>p()})})}:void 0};return x?(0,c.jsx)(n,{error:!!b,helperText:b,...f,onChange:e,...x(u)}):y?(0,c.jsx)(n,{onChange:e,error:!!b,helperText:b,...f}):(0,c.jsx)(n,{onChange:e,...f})}}}]);