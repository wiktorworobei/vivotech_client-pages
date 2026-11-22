"use strict";(globalThis.webpackChunkvivotech_crm_client||=[]).push([[2434],{2434(r,e,o){o.r(e),o.d(e,{default:()=>E});var a=o(4796),t=o(1712),i=o(2012),n=o(7298),d=o(2287),l=o(3172),c=o(8459),s=o(5533),p=o(3492),g=o(9642),m=o(2590),x=o(6427),h=o(4546),u=o(4871),v=o(3027),y=o(9994),b=o(9319),f=o(8759),A=o(2064),w=o(4986),j=o(3306),k=o(7861),C=o(5900),M=o(4748),S=o(9304),T=o(271),I=o(9487),W=o(4498),H=o(7906),P=o(9576),$=o(1227);const z=H.Ay.div({display:"grid",gridTemplateColumns:"repeat(3, minmax(0, 1fr))",gap:"14px",marginTop:"16px",marginBottom:"16px","@media (max-width: 1100px)":{gridTemplateColumns:"repeat(2, minmax(0, 1fr))"},"@media (max-width: 720px)":{gridTemplateColumns:"1fr"}}),O=(0,P.Ay)($.A)({display:"grid",overflow:"hidden",border:"1px solid var(--color-border)",borderRadius:"16px",boxShadow:"var(--shadow-soft)"}),R=H.Ay.div({display:"grid",gridTemplateColumns:"repeat(3, minmax(0, 1fr))",gap:"12px",marginTop:"14px","@media (max-width: 980px)":{gridTemplateColumns:"repeat(2, minmax(0, 1fr))"},"@media (max-width: 640px)":{gridTemplateColumns:"1fr"}}),B=H.Ay.div({display:"flex",alignItems:"center",justifyContent:"space-between",gap:"12px",minHeight:"56px",padding:"0 16px",color:"var(--color-text)",backgroundColor:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"14px",boxShadow:"var(--shadow-soft)",transition:"transform 160ms ease, border-color 160ms ease, box-shadow 160ms ease","&:hover":{transform:"translateY(-1px)",borderColor:"var(--color-border-strong)",boxShadow:"var(--shadow-hover)"},h3:{margin:0,minWidth:0,overflow:"hidden",fontSize:"15px",fontWeight:760,textOverflow:"ellipsis",whiteSpace:"nowrap"}}),L=H.Ay.div({display:"flex",alignItems:"center",gap:"8px",padding:"8px 16px 16px"}),F=H.Ay.div({display:"grid",placeItems:"center",minWidth:"38px",height:"38px",padding:"0 10px",color:"var(--color-text)",background:"var(--color-surface-soft)",border:"1px solid var(--color-border)",borderRadius:"10px",fontWeight:780});var N=o(8534),D=o(5046),U=o(8949),Y=o(8863),_=o(2270),q=o(9089),G=o(5214),J=o(4016);const Z=(r,e)=>r.findIndex(r=>{var o,a;return(null!==(o=r.itemType)&&void 0!==o?o:Y.a.Product)===Y.a.Product&&(null!==(a=r.productId)&&void 0!==a?a:r.id)===e}),E=r=>{var e;let{isOrder:o,categoryType:H=I.h.Product,basePath:P="/productCategories"}=r;const $=(0,C.jL)(),{id:E}=(0,f.g)(),{pathname:K}=(0,f.zy)(),X=null===(e=K.match(/^\/ordersManagement\/editOrder\/([^/]+)\//))||void 0===e?void 0:e[1],Q=(0,f.Zp)(),{t:V}=(0,_.Bd)(),rr=o?I.h.Product:H,er=rr===I.h.Product,[or,{isLoading:ar}]=(0,N.XY)(),[tr,{isLoading:ir}]=(0,D.l$)(),[nr,dr]=(0,i.useState)(()=>(0,q.y5)(X).orderItems||[]),lr=(0,i.useMemo)(()=>{const r=K.match(/^\/ordersManagement\/editOrder\/([^/]+)\/categories/);return r?`/ordersManagement/editOrder/${r[1]}/categories`:"/ordersManagement/createOrder/categories"},[K]),{data:cr=[],isLoading:sr}=(0,N.P5)({parentCategoryId:E,type:rr}),{data:pr=[],isLoading:gr}=(0,D.a2)(E||"-1",{skip:!E||!er}),{data:mr=[],isLoading:xr}=(0,U.gt)(E||"-1",{skip:!E||er}),[hr,ur]=(0,i.useState)(!1),[vr,yr]=(0,i.useState)({name:"",type:rr});if(sr||(er?gr:xr))return(0,J.jsx)(M.A,{});function br(r){const e={id:r.id,itemType:Y.a.Product,productId:r.id,serviceId:null,name:r.name,imageName:r.imageName||null,price:r.price,count:1,sum:0},o=Z(nr,r.id);if(o>=0){const r=nr.map((r,e)=>e===o?{...r,count:r.count+1}:r);dr(r),(0,q.Us)(r,X)}else{const r=[...nr,e];dr(r),(0,q.Us)(r,X)}}const fr=er?pr.length>0:mr.length>0,Ar=fr&&er?async function(){const r={name:vr.name,type:I.h.Product};if(E)try{await tr({categoryId:E,category:r}).unwrap(),$(N.Zx.util.invalidateTags(["Categories"])),G.oR.success(V("\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f \u0431\u044b\u043b\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0430")),yr({name:"",type:rr}),ur(!1),Q(P,{replace:!0})}catch(e){G.oR.error((0,t.S)(e,V("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e.")))}}:async function(){const r={name:vr.name,type:rr,parentCategoryId:E};try{await or(r).unwrap(),G.oR.success(V("\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f \u0431\u044b\u043b\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0430")),yr({name:"",type:rr}),ur(!1),Q(P,{replace:!0})}catch(e){G.oR.error((0,t.S)(e,V("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e.")))}};return(0,J.jsxs)(W.Dk,{children:[(0,J.jsxs)(n.A,{fullWidth:!0,open:hr,onClose:()=>ur(!1),children:[fr&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(d.A,{children:V("Subcategory required")}),(0,J.jsx)(l.A,{children:(0,J.jsx)(c.A,{children:V(er?"This category already has products. Create a subcategory for the existing catalog items.":"This category already has services. Create a service subcategory to keep the service tree consistent.")})})]}),(0,J.jsx)(d.A,{children:V("Create category")}),(0,J.jsx)(l.A,{children:(0,J.jsx)(T.A,{label:V("Category name"),type:"text",value:vr.name,onChange:r=>yr({name:r.target.value,type:rr})})}),(0,J.jsxs)(s.A,{children:[(0,J.jsx)(p.A,{onClick:()=>ur(!1),children:V("Cancel")}),(0,J.jsx)(p.A,{disabled:ar||ir,onClick:Ar,children:V("Save")})]})]}),(0,J.jsxs)(W.zY,{children:[(0,J.jsxs)(W.Fp,{children:[(0,J.jsx)(W.sT,{children:V(o?"Product selection":er?"Product category hierarchy":"Service category hierarchy")}),(0,J.jsx)(W.I_,{children:V(o?"Browse product categories and add products to the order.":"Browse, split, and maintain the selected catalog category tree.")})]}),!o&&(0,J.jsx)(S.A,{muiType:"success",text:V("Add category"),onClick:()=>{ur(!0)}})]}),(0,J.jsxs)(W.ui,{children:[(0,J.jsxs)(g.A,{separator:(0,J.jsx)(j.A,{fontSize:"small"}),"aria-label":V("Category navigation"),children:[(0,J.jsx)(m.A,{component:A.k2,replace:!!o,underline:"hover",color:"inherit",to:o?lr:P,children:V(er?"Product categories":"Service categories")}),(0,J.jsx)(x.A,{color:"text.primary",children:E?V("Category {id}",{id:E}):V("Root")})]}),cr.length>0&&(0,J.jsx)(R,{children:cr.map(r=>(0,J.jsx)(A.k2,{replace:!!o,style:{textDecoration:"none"},to:o?`${lr}/${r.id}`:`${P}/hierarchy/${r.id}`,children:(0,J.jsxs)(B,{children:[(0,J.jsx)("h3",{children:r.name}),(0,J.jsx)(j.A,{fontSize:"small"})]})},r.id))})]}),er?(0,J.jsx)(z,{children:pr.map(r=>{var e,t,i;const n=Z(nr,r.id),d=n>=0?null===(e=nr[n])||void 0===e?void 0:e.count:0;return(0,J.jsxs)(O,{children:[(0,J.jsx)(h.A,{avatar:(0,J.jsx)(u.A,{children:null!==(t=null===(i=r.name)||void 0===i?void 0:i[0])&&void 0!==t?t:"P"}),title:r.name,subheader:(0,J.jsx)(a.v0,{value:r.price})}),(0,J.jsx)(v.A,{sx:{objectFit:"contain",background:"var(--color-surface-soft)"},component:"img",height:"180",image:r.imageName,alt:r.name}),(0,J.jsx)(y.A,{children:(0,J.jsx)(x.A,{variant:"body2",color:"text.secondary",children:r.category})}),o&&(-1===n?(0,J.jsx)(b.A,{sx:{padding:"0 16px 16px"},children:(0,J.jsx)(S.A,{onClick:()=>br(r),muiType:"success",text:V("Add to order")})}):(0,J.jsxs)(L,{children:[(0,J.jsx)(S.A,{muiType:"success",onClick:()=>br(r),rightIcon:(0,J.jsx)(w.A,{}),ariaLabel:V("Add more: {name}",{name:r.name})}),(0,J.jsx)(F,{children:d}),(0,J.jsx)(S.A,{muiType:"error",onClick:()=>function(r){const e=Z(nr,r);if(e>=0){const r=nr.map((r,o)=>{if(o===e){const e=r.count-1;return e<=0?null:{...r,count:e}}return r}).filter(r=>null!==r);dr(r),(0,q.Us)(r,X)}}(r.id),leftIcon:(0,J.jsx)(k.A,{}),ariaLabel:V("Decrease quantity: {name}",{name:r.name})})]}))]},r.id)})}):(0,J.jsx)(z,{children:mr.map(r=>{var e,o;return(0,J.jsxs)(O,{children:[(0,J.jsx)(h.A,{avatar:(0,J.jsx)(u.A,{children:null!==(e=null===(o=r.name)||void 0===o?void 0:o[0])&&void 0!==e?e:"S"}),title:r.name,subheader:(0,J.jsx)(a.v0,{value:r.price})}),(0,J.jsx)(y.A,{children:(0,J.jsx)(x.A,{variant:"body2",color:"text.secondary",children:r.category||V("Service")})})]},r.id)})})]})}},9089(r,e,o){var a=o(8577);const t=r=>{let e="anonymous";try{const r=JSON.parse(window.localStorage.getItem("authUser")||"null");Number(null===r||void 0===r?void 0:r.id)>0&&(e=String(r.id))}catch{}const o=`${(0,a.gF)()||"unselected"}:${e}`;return r?`editOrder:${o}:${r}`:`createOrder:${o}`},i=r=>{const e=window.localStorage.getItem(t(r));if(!e)return{};try{return JSON.parse(e)}catch{return{}}};o.d(e,["Kg",0,t,"Us",0,(r,e)=>{const o=i(e);window.localStorage.setItem(t(e),JSON.stringify({...o,orderItems:r}))},"Zg",0,r=>{window.localStorage.removeItem(t(r))},"y5",0,i])},8863(r,e,o){o.d(e,{a:()=>a});let a=function(r){return r[r.Product=0]="Product",r[r.Service=1]="Service",r}({})},9304(r,e,o){o.d(e,{A:()=>l});o(2012);var a=o(3012),t=o(9576),i=o(3492);const n=(0,t.Ay)(i.A,{shouldForwardProp:r=>"muiType"!==r&&"horizontalMargin"!==r&&"verticalMargin"!==r&&"bottomMargin"!==r})`
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
`;var d=o(4016);const l=r=>{let{fullWidth:e,type:o,onClick:a,leftIcon:t,rightIcon:i,text:l,muiType:c,horizontalMargin:s,verticalMargin:p,bottomMargin:g,disabled:m,ariaLabel:x}=r;return(0,d.jsx)(n,{fullWidth:e,type:o,muiType:c,startIcon:t,endIcon:i,onClick:a,verticalMargin:p||!1,horizontalMargin:s||!1,bottomMargin:g||!1,disabled:m,"aria-label":x,children:l})}},4498(r,e,o){var a=o(2012),t=o(7906),i=o(9576),n=o(6733),d=o(2270);const l=t.Ay.div({width:"100%",maxWidth:"var(--app-content-width, 1440px)",minWidth:0,margin:"0 auto",textAlign:"left"}),c=t.Ay.div({display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"16px 24px",marginBottom:"24px","@media (max-width: 760px)":{display:"grid",marginBottom:"18px"}}),s=t.Ay.div({display:"grid",gap:"6px",minWidth:0}),p=t.Ay.h1({margin:0,color:"var(--color-text)",fontSize:"clamp(24px, 2.35vw, 34px)",fontWeight:800,letterSpacing:"-.04em",lineHeight:1.2,overflowWrap:"anywhere"}),g=t.Ay.p({maxWidth:"720px",margin:0,color:"var(--color-muted)",fontSize:"14px",fontWeight:450,lineHeight:1.6}),m=t.Ay.section({width:"100%",minWidth:0,padding:"var(--panel-padding)",background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"var(--radius-xl)",boxShadow:"var(--shadow-soft)"}),x=t.Ay.div({display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"12px",width:"100%",marginBottom:"14px","@media (max-width: 760px)":{display:"grid"}}),h=t.Ay.div({display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"}),u=t.Ay.div({display:"grid",alignItems:"start",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",gap:"12px","@media (max-width: 760px)":{gridTemplateColumns:"1fr"}}),v=t.Ay.form({display:"grid",gridTemplateColumns:"minmax(0, 1fr)",alignItems:"start",gap:"14px",width:"min(720px, 100%)",minWidth:0,padding:"var(--panel-padding)",background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"16px",boxShadow:"var(--shadow-soft)","@media (max-width: 560px)":{gap:"12px",padding:"14px"}}),y=t.Ay.div({display:"grid",placeItems:"center",gap:"8px",minHeight:"220px",padding:"28px",color:"var(--color-muted)",textAlign:"center",background:"var(--color-surface)",border:"1px dashed var(--color-border-strong)",borderRadius:"16px"}),b=(t.Ay.div({marginBottom:"8px",color:"var(--color-danger)",fontSize:"13px",fontWeight:650}),(0,i.Ay)(n.zh)({width:"100%",minWidth:0,"&.MuiDataGrid-autoHeight":{overflow:"visible","& .MuiDataGrid-main":{overflow:"visible"},"& .MuiDataGrid-columnHeaders":{position:"sticky",top:"var(--app-header-height)",zIndex:2,backgroundColor:"var(--color-surface-soft)",boxShadow:"0 1px 0 var(--color-border)"}}}));o.d(e,["Dk",0,l,"Fp",0,s,"I_",0,g,"M7",0,x,"aN",0,r=>{const{language:e}=(0,d.Bd)(),o=(0,a.useMemo)(()=>({...(0,d.it)(e),...r.localeText}),[e,r.localeText]);return a.createElement(b,{...r,localeText:o})},"kA",0,v,"pp",0,y,"sT",0,p,"ui",0,m,"vY",0,u,"v_",0,h,"zY",0,c])},271(r,e,o){o.d(e,{A:()=>s});o(2012);var a=o(3012),t=o(9576),i=o(8111);const n=(0,t.Ay)(i.A,{shouldForwardProp:r=>"horizontalMargin"!==r&&"verticalMargin"!==r&&"halfWidth"!==r&&"topMargin"!==r})`
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
`;var d=o(1932),l=o(7610),c=o(4016);const s=r=>{let{required:e=!1,value:o,onChange:a,label:t,verticalMargin:i=!1,horizontalMargin:s=!1,inputEvent:p,halfWidth:g=!1,disabled:m=!1,topMargin:x=!1,type:h="text",inputProps:u,register:v,name:y,error:b,fieldArray:f}=r;const A={disabled:m,halfWidth:g,required:e,topMargin:x,verticalMargin:i,horizontalMargin:s,value:o,label:t,type:h,inputProps:u,InputProps:p?{endAdornment:(0,c.jsx)(d.A,{position:"end",children:(0,c.jsx)(l.A,{onClick:()=>p()})})}:void 0};return v?(0,c.jsx)(n,{error:!!b,helperText:b,...A,onChange:a,...v(y)}):f?(0,c.jsx)(n,{onChange:a,error:!!b,helperText:b,...A}):(0,c.jsx)(n,{onChange:a,...A})}}}]);