"use strict";(globalThis.webpackChunkvivotech_crm_client||=[]).push([[9278],{19687(r,e,o){var a=o(77411);e.A=void 0;var i=a(o(31199)),t=o(20811);e.A=(0,i.default)((0,t.jsx)("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"}),"AddCircleOutline")},86129(r,e,o){var a=o(77411);e.A=void 0;var i=a(o(31199)),t=o(20811);e.A=(0,i.default)((0,t.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8zm7.5-5-1-1h-5l-1 1H5v2h14V4z"}),"DeleteOutline")},11945(r,e,o){var a=o(77411);e.A=void 0;var i=a(o(31199)),t=o(20811);e.A=(0,i.default)((0,t.jsx)("path",{d:"M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-4.86 8.86-3 3.87L9 13.14 6 17h12z"}),"ImageOutlined")},8793(r,e,o){var a=o(77411);e.A=void 0;var i=a(o(31199)),t=o(20811);e.A=(0,i.default)((0,t.jsx)("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm4 18H6V4h7v5h5zM8 15.01l1.41 1.41L11 14.84V19h2v-4.16l1.59 1.59L16 15.01 12.01 11z"}),"UploadFileOutlined")},88215(r,e,o){o.d(e,{A:()=>d}),o(18139);var a=o(40361),i=o(29615),t=o(56308),l=o(18815),n=o(20811);function d(r){let{error:e,onRetry:o}=r;const{t:d}=(0,l.Bd)();return(0,n.jsx)(a.A,{severity:"error",action:(0,n.jsx)(i.A,{onClick:()=>{o()},children:d("Повторить")}),children:(0,t.S)(e,d("Не удалось загрузить данные. Повторите запрос."))})}},54652(r,e,o){var a=o(18139),i=o(19687),t=o(86129),l=o(61),n=o(70701),d=o(69797),c=o(20811);const p=l.Ay.section({display:"grid",gap:"12px",padding:"16px",border:"1px solid var(--color-border)",borderRadius:"12px",background:"var(--color-surface-soft)"}),s=l.Ay.h2({margin:0,color:"var(--color-text)",fontSize:"18px"}),g=l.Ay.p({margin:0,color:"var(--color-muted)",fontSize:"13px",lineHeight:1.5}),h=l.Ay.div({display:"grid",gridTemplateColumns:"minmax(0, 1fr) minmax(0, 1fr) auto",gap:"10px",alignItems:"center","@media (max-width: 640px)":{gridTemplateColumns:"1fr"}}),m=l.Ay.p({margin:0,color:"var(--color-danger)",fontSize:"13px",fontWeight:650});o.d(e,["A",0,r=>{let{title:e,description:o,nameLabel:l,valueLabel:v,addLabel:u,removeLabel:x,value:b,onChange:f,error:A}=r;const y=(0,a.useId)(),w=(r,e,o)=>{f(b.map((a,i)=>i===r?{...a,[e]:o}:a))};return(0,c.jsxs)(p,{"aria-labelledby":y,children:[(0,c.jsx)(s,{id:y,children:e}),o&&(0,c.jsx)(g,{children:o}),b.map((r,e)=>(0,c.jsxs)(h,{children:[(0,c.jsx)(d.A,{fieldArray:!0,value:r.name,label:l,onChange:r=>w(e,"name",r.target.value)}),(0,c.jsx)(d.A,{fieldArray:!0,value:r.value,label:v,onChange:r=>w(e,"value",r.target.value)}),(0,c.jsx)(n.A,{type:"button",muiType:"error",leftIcon:(0,c.jsx)(t.A,{}),ariaLabel:x,onClick:()=>f(b.filter((r,o)=>o!==e))})]},e)),A&&(0,c.jsx)(m,{children:A}),(0,c.jsx)(n.A,{type:"button",muiType:"info",leftIcon:(0,c.jsx)(i.A,{}),text:u,onClick:()=>f([...b,{name:"",value:""}])})]})}])},83186(r,e,o){o(18139);var a=o(18815),i=o(54652),t=o(20811);o.d(e,["Ay",0,r=>{let{value:e,onChange:o,error:l}=r;const{t:n}=(0,a.Bd)();return(0,t.jsx)(i.A,{title:n("Custom fields"),description:n("For example: GTIN, vendor code or another value that does not create a modification."),nameLabel:n("Field name"),valueLabel:n("Value"),addLabel:n("Add field"),removeLabel:n("Remove field"),value:e,onChange:o,error:l})},"IT",0,(r,e)=>{const o=new Set;for(const a of r){const r=a.name.trim(),i=a.value.trim();if(!r||!i)return e("Field name and value are required.");if(r.length>100)return e("Field name cannot exceed 100 characters.");if(i.length>250)return e("Field value cannot exceed 250 characters.");const t=r.toLocaleLowerCase();if(o.has(t))return e("Field names must be unique.");o.add(t)}return""},"hN",0,r=>Object.entries(null!=r?r:{}).map(r=>{let[e,o]=r;return{name:e,value:o}}),"xP",0,r=>Object.fromEntries(r.map(r=>{let{name:e,value:o}=r;return[e.trim(),o.trim()]}))])},70701(r,e,o){o.d(e,{A:()=>d}),o(18139);var a=o(54499),i=o(28751),t=o(29615);const l=(0,i.Ay)(t.A,{shouldForwardProp:r=>"muiType"!==r&&"horizontalMargin"!==r&&"verticalMargin"!==r&&"bottomMargin"!==r})`
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
`;var n=o(20811);const d=r=>{let{fullWidth:e,type:o,onClick:a,leftIcon:i,rightIcon:t,text:d,muiType:c,horizontalMargin:p,verticalMargin:s,bottomMargin:g,disabled:h,ariaLabel:m}=r;return(0,n.jsx)(l,{fullWidth:e,type:o,muiType:c,startIcon:i,endIcon:t,onClick:a,verticalMargin:s||!1,horizontalMargin:p||!1,bottomMargin:g||!1,disabled:h,"aria-label":m,children:d})}},51222(r,e,o){var a=o(18139),i=o(61),t=o(28751),l=o(4780),n=o(18815);const d=i.Ay.div({width:"100%",maxWidth:"var(--app-content-width, 1440px)",minWidth:0,margin:"0 auto",textAlign:"left"}),c=i.Ay.div({display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"16px 24px",marginBottom:"24px","@media (max-width: 760px)":{display:"grid",gridTemplateColumns:"minmax(0, 1fr)",marginBottom:"18px"}}),p=i.Ay.div({display:"grid",gap:"6px",minWidth:0}),s=i.Ay.h1({margin:0,color:"var(--color-text)",fontSize:"clamp(24px, 2.35vw, 34px)",fontWeight:800,letterSpacing:"-.04em",lineHeight:1.2,overflowWrap:"anywhere"}),g=i.Ay.p({maxWidth:"720px",margin:0,color:"var(--color-muted)",fontSize:"14px",fontWeight:450,lineHeight:1.6}),h=i.Ay.section({width:"100%",minWidth:0,padding:"var(--panel-padding)",background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"var(--radius-xl)",boxShadow:"var(--shadow-soft)"}),m=i.Ay.div({display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"12px",width:"100%",marginBottom:"14px","@media (max-width: 760px)":{display:"grid",gridTemplateColumns:"minmax(0, 1fr)"}}),v=i.Ay.div({display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"}),u=i.Ay.div({display:"grid",alignItems:"start",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",gap:"12px","@media (max-width: 760px)":{gridTemplateColumns:"minmax(0, 1fr)"}}),x=i.Ay.form({display:"grid",gridTemplateColumns:"minmax(0, 1fr)",alignItems:"start",gap:"14px",width:"min(720px, 100%)",minWidth:0,padding:"var(--panel-padding)",background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"16px",boxShadow:"var(--shadow-soft)","@media (max-width: 560px)":{gap:"12px",padding:"14px"}}),b=i.Ay.div({display:"grid",placeItems:"center",gap:"8px",minHeight:"220px",padding:"28px",color:"var(--color-muted)",textAlign:"center",background:"var(--color-surface)",border:"1px dashed var(--color-border-strong)",borderRadius:"16px"}),f=(i.Ay.div({marginBottom:"8px",color:"var(--color-danger)",fontSize:"13px",fontWeight:650}),(0,t.Ay)(l.zh)({width:"100%",minWidth:0,"&.MuiDataGrid-autoHeight":{overflow:"visible","& .MuiDataGrid-main":{overflow:"visible"},"& .MuiDataGrid-columnHeaders":{position:"sticky",top:"var(--app-header-height)",zIndex:2,backgroundColor:"var(--color-surface-soft)",boxShadow:"0 1px 0 var(--color-border)"}}}));o.d(e,["Dk",0,d,"Fp",0,p,"I_",0,g,"M7",0,m,"aN",0,r=>{const{language:e}=(0,n.Bd)(),o=(0,a.useMemo)(()=>({...(0,n.it)(e),...r.localeText}),[e,r.localeText]);return a.createElement(f,{...r,localeText:o})},"kA",0,x,"pp",0,b,"sT",0,s,"ui",0,h,"vY",0,u,"v_",0,v,"zY",0,c])},89739(r,e,o){o(18139);var a=o(30118),i=o(20811);o.d(e,["A",0,r=>{let{errorMessage:e}=r;return(0,i.jsx)(a.A,{sx:{color:"var(--color-danger-text)",marginLeft:"16px !important"},children:e})}])},5169(r,e,o){var a=o(18139),i=o(29615),t=o(11945),l=o(8793),n=o(61),d=o(20811);const c=n.Ay.div({display:"grid",gap:"8px",width:"100%",minWidth:0}),p=n.Ay.label({width:"fit-content",color:"var(--color-muted)",fontSize:"13px",fontWeight:650,lineHeight:1.4}),s=n.Ay.div({display:"grid",gridTemplateColumns:"88px minmax(0, 1fr)",gap:"14px",alignItems:"center",minWidth:0,padding:"12px",border:"1px solid var(--color-border)",borderRadius:"12px",background:"var(--color-surface-muted)","@media (max-width: 420px)":{gridTemplateColumns:"72px minmax(0, 1fr)",gap:"10px",padding:"10px"}}),g=n.Ay.div({display:"grid",placeItems:"center",width:"88px",height:"88px",overflow:"hidden",color:"var(--color-muted)",border:"1px solid var(--color-border)",borderRadius:"10px",background:"var(--color-surface)",img:{width:"100%",height:"100%",objectFit:"cover"},"@media (max-width: 420px)":{width:"72px",height:"72px"}}),h=n.Ay.div({display:"grid",gap:"7px",minWidth:0}),m=n.Ay.span({minWidth:0,color:"var(--color-text)",fontSize:"13px",fontWeight:620,lineHeight:1.4,overflowWrap:"anywhere"}),v=n.Ay.span({color:"var(--color-muted)",fontSize:"12px",lineHeight:1.4}),u=n.Ay.input({position:"absolute",width:"1px",height:"1px",padding:0,margin:"-1px",overflow:"hidden",clip:"rect(0 0 0 0)",whiteSpace:"nowrap",border:0});o.d(e,["A",0,r=>{let{label:e,actionText:o,emptyText:n,hint:x,fileName:b,previewSrc:f,previewAlt:A,accept:y="image/png,image/jpeg,image/webp",disabled:w=!1,onChange:j}=r;const M=(0,a.useId)(),C=(0,a.useId)(),[H,k]=(0,a.useState)(!1);(0,a.useEffect)(()=>{k(!1)},[f]);const z=Boolean(f)&&!H;return(0,d.jsxs)(c,{children:[(0,d.jsx)(p,{htmlFor:M,children:e}),(0,d.jsxs)(s,{children:[(0,d.jsx)(g,{"aria-hidden":!z,children:z?(0,d.jsx)("img",{src:f,alt:A,onError:()=>k(!0)}):(0,d.jsx)(t.A,{fontSize:"large","aria-hidden":"true"})}),(0,d.jsxs)(h,{children:[(0,d.jsxs)(i.A,{component:"label",variant:"outlined",startIcon:(0,d.jsx)(l.A,{}),disabled:w,fullWidth:!0,children:[o,(0,d.jsx)(u,{id:M,type:"file",accept:y,"aria-describedby":x?C:void 0,onChange:j,disabled:w})]}),(0,d.jsx)(m,{children:b||n}),x&&(0,d.jsx)(v,{id:C,children:x})]})]})]})}])},81819(r,e,o){o.d(e,{A:()=>d}),o(18139);var a=o(54499),i=o(28751),t=o(66426);const l=(0,i.Ay)(t.A,{shouldForwardProp:r=>"horizontalMargin"!==r&&"verticalMargin"!==r})`
  width: 100%;
  min-width: 0;

  ${r=>!0===r.horizontalMargin&&a.AH`
      margin-left: 8px;
      margin-right: 8px;
      width: calc(100% - 16px);
    `}

  ${r=>!0===r.verticalMargin&&a.AH`
      margin-top: 8px;
      margin-bottom: 8px;
    `}
`;var n=o(20811);const d=r=>{let{verticalMargin:e,horizontalMargin:o,error:a,children:i}=r;return(0,n.jsx)(l,{fullWidth:!0,error:a,horizontalMargin:o,verticalMargin:e,children:i})}},38048(r,e,o){o.d(e,{A:()=>c}),o(18139);var a=o(54499),i=o(28751),t=o(61718);const l=(0,i.Ay)(t.A,{shouldForwardProp:r=>"halfWidth"!==r})`
  width: 100%;
  border-radius: 10px;
  background-color: var(--color-surface);

  .MuiOutlinedInput-notchedOutline {
    border-color: var(--color-border);
  }

  &:hover .MuiOutlinedInput-notchedOutline {
    border-color: var(--color-border-strong);
  }

  &.Mui-focused {
    box-shadow: var(--focus-ring);
  }

  ${r=>!0===r.halfWidth&&a.AH`
      width: min(100%, 520px);
    `}
`;var n=o(30937),d=o(20811);const c=r=>{let{id:e,labelId:o,value:a,onChange:i,label:t,menuItemProps:c,register:p,name:s,error:g,required:h,defaultValue:m,disabled:v,withoutId:u}=r;return p&&u?(0,d.jsx)(l,{id:e,labelId:o,displayEmpty:!0,defaultValue:m,disabled:v,required:h,error:!!g,...p(s),value:a,onChange:i,label:t,children:c&&c.map(r=>(0,d.jsx)(n.A,{value:r,children:r},String(r)))}):p?(0,d.jsx)(l,{id:e,labelId:o,displayEmpty:!0,defaultValue:m,disabled:v,required:h,error:!!g,...p(s),value:a,onChange:i,label:t,children:c&&c.map(r=>(0,d.jsx)(n.A,{value:r.id,children:r.name},r.id))}):(0,d.jsx)(l,{id:e,labelId:o,value:a,onChange:i,label:t,required:!1!==h,disabled:v,error:!!g,children:c&&c.map(r=>(0,d.jsx)(n.A,{value:r.id,children:r.name},r.id))})}},69797(r,e,o){o.d(e,{A:()=>p}),o(18139);var a=o(54499),i=o(28751),t=o(46143);const l=(0,i.Ay)(t.A,{shouldForwardProp:r=>"horizontalMargin"!==r&&"verticalMargin"!==r&&"halfWidth"!==r&&"topMargin"!==r})`
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
`;var n=o(70166),d=o(42407),c=o(20811);const p=r=>{let{required:e=!1,value:o,onChange:a,label:i,verticalMargin:t=!1,horizontalMargin:p=!1,inputEvent:s,halfWidth:g=!1,disabled:h=!1,topMargin:m=!1,type:v="text",inputProps:u,register:x,name:b,error:f,fieldArray:A}=r;const y={disabled:h,halfWidth:g,required:e,topMargin:m,verticalMargin:t,horizontalMargin:p,value:o,label:i,type:v,inputProps:u,InputProps:s?{endAdornment:(0,c.jsx)(n.A,{position:"end",children:(0,c.jsx)(d.A,{onClick:()=>s()})})}:void 0};return x?(0,c.jsx)(l,{error:!!f,helperText:f,...y,onChange:a,...x(b)}):A?(0,c.jsx)(l,{onChange:a,error:!!f,helperText:f,...y}):(0,c.jsx)(l,{onChange:a,...y})}}}]);