"use strict";(globalThis.webpackChunkvivotech_crm_client||=[]).push([[962],{3323(r,o,e){e.d(o,{A:()=>d});e(2012);var a=e(4159),i=e(3492),t=e(1712),n=e(2270),l=e(4016);function d(r){let{error:o,onRetry:e}=r;const{t:d}=(0,n.Bd)();return(0,l.jsx)(a.A,{severity:"error",action:(0,l.jsx)(i.A,{onClick:()=>{e()},children:d("\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c")}),children:(0,t.S)(o,d("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435. \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441."))})}},962(r,o,e){e.r(o),e.d(o,{default:()=>b});var a=e(2012),i=e(8759),t=e(5214),n=e(3539),l=e(4119),d=e(9078);var c=e(3779),s=e(3323),p=e(4748),g=e(1712),v=e(4498),m=e(271),h=e(9304),x=e(2270),u=e(4016);const b=()=>{var r,o;const{id:e}=(0,i.g)(),b=(0,i.Zp)(),{t:y}=(0,x.Bd)(),f=(0,a.useMemo)(()=>(r=>d.Ik({name:d.Yj().required(r("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u044d\u0442\u043e \u043f\u043e\u043b\u0435!")),price:d.ai().typeError(r("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u044d\u0442\u043e \u043f\u043e\u043b\u0435!")).moreThan(-1,r("\u0427\u0438\u0441\u043b\u043e \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043f\u043e\u043b\u043e\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u043c \u0438\u043b\u0438 \u0440\u0430\u0432\u043d\u043e \u043d\u0443\u043b\u044e!")).integer().required()}).required())(y),[y]),{reset:w,register:A,handleSubmit:k,formState:{errors:M}}=(0,n.mN)({resolver:(0,l.t)(f)}),{data:j,isLoading:H,isError:W,error:T,refetch:C}=(0,c.tX)(e,{skip:!e}),[I,{isLoading:z}]=(0,c.e1)(),[S,{isLoading:D}]=(0,c.AC)(),$=z||D;(0,a.useEffect)(()=>{w(j)},[j,w]);return e&&H?(0,u.jsx)(p.A,{}):!e||!W&&j?(0,u.jsxs)(v.Dk,{children:[(0,u.jsx)(v.zY,{children:(0,u.jsxs)(v.Fp,{children:[(0,u.jsx)(v.sT,{children:y(e?"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438":"\u041d\u043e\u0432\u044b\u0439 \u0441\u043f\u043e\u0441\u043e\u0431 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438")}),(0,u.jsx)(v.I_,{children:y("\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0438 \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438 \u0434\u043b\u044f \u0440\u0430\u0441\u0447\u0435\u0442\u0430 \u0438\u0442\u043e\u0433\u043e\u0432 \u0437\u0430\u043a\u0430\u0437\u0430.")})]})}),(0,u.jsxs)(v.kA,{onSubmit:k(async r=>{const o={name:r.name,price:r.price};try{if(e){const r={...o,id:e};await S(r).unwrap(),t.oR.success(y("Delivery method was changed"))}else await I(o).unwrap(),t.oR.success(y("Delivery method was created"));b("/deliveryMethods",{replace:!0})}catch(T){t.oR.error((0,g.S)(T,y("Delivery method was not saved")))}}),children:[(0,u.jsx)(m.A,{label:y("\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),register:A,name:"name",error:null===(r=M.name)||void 0===r?void 0:r.message}),(0,u.jsx)(m.A,{type:"number",label:y("\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c"),register:A,name:"price",error:null===(o=M.price)||void 0===o?void 0:o.message}),(0,u.jsx)(h.A,{fullWidth:!0,text:y($?"Saving...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),muiType:"success",type:"submit",disabled:$})]})]}):(0,u.jsx)(v.Dk,{children:(0,u.jsx)(s.A,{error:T,onRetry:C})})}},9304(r,o,e){e.d(o,{A:()=>d});e(2012);var a=e(3012),i=e(9576),t=e(3492);const n=(0,i.Ay)(t.A,{shouldForwardProp:r=>"muiType"!==r&&"horizontalMargin"!==r&&"verticalMargin"!==r&&"bottomMargin"!==r})`
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
`;var l=e(4016);const d=r=>{let{fullWidth:o,type:e,onClick:a,leftIcon:i,rightIcon:t,text:d,muiType:c,horizontalMargin:s,verticalMargin:p,bottomMargin:g,disabled:v,ariaLabel:m}=r;return(0,l.jsx)(n,{fullWidth:o,type:e,muiType:c,startIcon:i,endIcon:t,onClick:a,verticalMargin:p||!1,horizontalMargin:s||!1,bottomMargin:g||!1,disabled:v,"aria-label":m,children:d})}},4498(r,o,e){var a=e(2012),i=e(7906),t=e(9576),n=e(6733),l=e(2270);const d=i.Ay.div({width:"100%",maxWidth:"var(--app-content-width, 1440px)",minWidth:0,margin:"0 auto",textAlign:"left"}),c=i.Ay.div({display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"16px 24px",marginBottom:"24px","@media (max-width: 760px)":{display:"grid",marginBottom:"18px"}}),s=i.Ay.div({display:"grid",gap:"6px",minWidth:0}),p=i.Ay.h1({margin:0,color:"var(--color-text)",fontSize:"clamp(24px, 2.35vw, 34px)",fontWeight:800,letterSpacing:"-.04em",lineHeight:1.2,overflowWrap:"anywhere"}),g=i.Ay.p({maxWidth:"720px",margin:0,color:"var(--color-muted)",fontSize:"14px",fontWeight:450,lineHeight:1.6}),v=i.Ay.section({width:"100%",minWidth:0,padding:"var(--panel-padding)",background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"var(--radius-xl)",boxShadow:"var(--shadow-soft)"}),m=i.Ay.div({display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"12px",width:"100%",marginBottom:"14px","@media (max-width: 760px)":{display:"grid"}}),h=i.Ay.div({display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"}),x=i.Ay.div({display:"grid",alignItems:"start",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",gap:"12px","@media (max-width: 760px)":{gridTemplateColumns:"1fr"}}),u=i.Ay.form({display:"grid",gridTemplateColumns:"minmax(0, 1fr)",alignItems:"start",gap:"14px",width:"min(720px, 100%)",minWidth:0,padding:"var(--panel-padding)",background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"16px",boxShadow:"var(--shadow-soft)","@media (max-width: 560px)":{gap:"12px",padding:"14px"}}),b=i.Ay.div({display:"grid",placeItems:"center",gap:"8px",minHeight:"220px",padding:"28px",color:"var(--color-muted)",textAlign:"center",background:"var(--color-surface)",border:"1px dashed var(--color-border-strong)",borderRadius:"16px"}),y=(i.Ay.div({marginBottom:"8px",color:"var(--color-danger)",fontSize:"13px",fontWeight:650}),(0,t.Ay)(n.zh)({width:"100%",minWidth:0,"&.MuiDataGrid-autoHeight":{overflow:"visible","& .MuiDataGrid-main":{overflow:"visible"},"& .MuiDataGrid-columnHeaders":{position:"sticky",top:"var(--app-header-height)",zIndex:2,backgroundColor:"var(--color-surface-soft)",boxShadow:"0 1px 0 var(--color-border)"}}}));e.d(o,["Dk",0,d,"Fp",0,s,"I_",0,g,"M7",0,m,"aN",0,r=>{const{language:o}=(0,l.Bd)(),e=(0,a.useMemo)(()=>({...(0,l.it)(o),...r.localeText}),[o,r.localeText]);return a.createElement(y,{...r,localeText:e})},"kA",0,u,"pp",0,b,"sT",0,p,"ui",0,v,"vY",0,x,"v_",0,h,"zY",0,c])},271(r,o,e){e.d(o,{A:()=>s});e(2012);var a=e(3012),i=e(9576),t=e(8111);const n=(0,i.Ay)(t.A,{shouldForwardProp:r=>"horizontalMargin"!==r&&"verticalMargin"!==r&&"halfWidth"!==r&&"topMargin"!==r})`
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
`;var l=e(1932),d=e(7610),c=e(4016);const s=r=>{let{required:o=!1,value:e,onChange:a,label:i,verticalMargin:t=!1,horizontalMargin:s=!1,inputEvent:p,halfWidth:g=!1,disabled:v=!1,topMargin:m=!1,type:h="text",inputProps:x,register:u,name:b,error:y,fieldArray:f}=r;const w={disabled:v,halfWidth:g,required:o,topMargin:m,verticalMargin:t,horizontalMargin:s,value:e,label:i,type:h,inputProps:x,InputProps:p?{endAdornment:(0,c.jsx)(l.A,{position:"end",children:(0,c.jsx)(d.A,{onClick:()=>p()})})}:void 0};return u?(0,c.jsx)(n,{error:!!y,helperText:y,...w,onChange:a,...u(b)}):f?(0,c.jsx)(n,{onChange:a,error:!!y,helperText:y,...w}):(0,c.jsx)(n,{onChange:a,...w})}}}]);