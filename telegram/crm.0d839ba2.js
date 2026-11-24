"use strict";(globalThis.webpackChunkvivotech_crm_client||=[]).push([[1460],{1460(r,e,o){o.r(e),o.d(e,{default:()=>J});var a=o(44088),t=o(56308),i=o(18139),n=o(35566),d=o(83760),l=o(6236),c=o(47638),s=o(22970),p=o(29615),g=o(51460),m=o(54424),x=o(85792),h=o(74259),u=o(30164),v=o(49056),y=o(57457),b=o(71919),f=o(56840),A=o(72619),w=o(65305),j=o(64435),C=o(48404),k=o(74253),M=o(7176),T=o(70701),I=o(69797),S=o(11731),W=o(51222),H=o(61),P=o(28751),$=o(94764);const z=H.Ay.div({display:"grid",gridTemplateColumns:"repeat(3, minmax(0, 1fr))",gap:"14px",marginTop:"16px",marginBottom:"16px","@media (max-width: 1100px)":{gridTemplateColumns:"repeat(2, minmax(0, 1fr))"},"@media (max-width: 720px)":{gridTemplateColumns:"1fr"}}),O=(0,P.Ay)($.A)({display:"grid",overflow:"hidden",border:"1px solid var(--color-border)",borderRadius:"16px",boxShadow:"var(--shadow-soft)"}),R=H.Ay.div({display:"grid",gridTemplateColumns:"repeat(3, minmax(0, 1fr))",gap:"12px",marginTop:"14px","@media (max-width: 980px)":{gridTemplateColumns:"repeat(2, minmax(0, 1fr))"},"@media (max-width: 640px)":{gridTemplateColumns:"1fr"}}),B=H.Ay.div({display:"flex",alignItems:"center",justifyContent:"space-between",gap:"12px",minHeight:"56px",padding:"0 16px",color:"var(--color-text)",backgroundColor:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"14px",boxShadow:"var(--shadow-soft)",transition:"transform 160ms ease, border-color 160ms ease, box-shadow 160ms ease","&:hover":{transform:"translateY(-1px)",borderColor:"var(--color-border-strong)",boxShadow:"var(--shadow-hover)"},h3:{margin:0,minWidth:0,overflow:"hidden",fontSize:"15px",fontWeight:760,textOverflow:"ellipsis",whiteSpace:"nowrap"}}),L=H.Ay.div({display:"flex",alignItems:"center",gap:"8px",padding:"8px 16px 16px"}),F=H.Ay.div({display:"grid",placeItems:"center",minWidth:"38px",height:"38px",padding:"0 10px",color:"var(--color-text)",background:"var(--color-surface-soft)",border:"1px solid var(--color-border)",borderRadius:"10px",fontWeight:780});var D=o(35762),N=o(68066),Y=o(90510),_=o(88819),q=o(18815),U=o(19645),G=o(17361),Z=o(20811);const E=(r,e)=>r.findIndex(r=>{var o,a;return(null!==(o=r.itemType)&&void 0!==o?o:_.a.Product)===_.a.Product&&(null!==(a=r.productId)&&void 0!==a?a:r.id)===e}),J=r=>{var e;let{isOrder:o,categoryType:H=S.h.Product,basePath:P="/productCategories"}=r;const $=(0,k.jL)(),{id:J}=(0,f.g)(),{pathname:K}=(0,f.zy)(),X=null===(e=K.match(/^\/ordersManagement\/editOrder\/([^/]+)\//))||void 0===e?void 0:e[1],Q=(0,f.Zp)(),{t:V}=(0,q.Bd)(),rr=o?S.h.Product:H,er=rr===S.h.Product,[or,{isLoading:ar}]=(0,D.XY)(),[tr,{isLoading:ir}]=(0,N.l$)(),[nr,dr]=(0,i.useState)(()=>(0,U.y5)(X).orderItems||[]),lr=(0,i.useMemo)(()=>{const r=K.match(/^\/ordersManagement\/editOrder\/([^/]+)\/categories/);return r?`/ordersManagement/editOrder/${r[1]}/categories`:"/ordersManagement/createOrder/categories"},[K]),{data:cr=[],isLoading:sr}=(0,D.P5)({parentCategoryId:J,type:rr}),{data:pr=[],isLoading:gr}=(0,N.a2)(J||"-1",{skip:!J||!er}),{data:mr=[],isLoading:xr}=(0,Y.gt)(J||"-1",{skip:!J||er}),[hr,ur]=(0,i.useState)(!1),[vr,yr]=(0,i.useState)({name:"",type:rr});if(sr||(er?gr:xr))return(0,Z.jsx)(M.A,{});function br(r){const e={id:r.id,itemType:_.a.Product,productId:r.id,serviceId:null,name:r.name,imageName:r.imageName||null,price:r.price,count:1,sum:0},o=E(nr,r.id);if(o>=0){const r=nr.map((r,e)=>e===o?{...r,count:r.count+1}:r);dr(r),(0,U.Us)(r,X)}else{const r=[...nr,e];dr(r),(0,U.Us)(r,X)}}const fr=er?pr.length>0:mr.length>0,Ar=fr&&er?async function(){const r={name:vr.name,type:S.h.Product};if(J)try{await tr({categoryId:J,category:r}).unwrap(),$(D.Zx.util.invalidateTags(["Categories"])),G.oR.success(V("Категория была создана")),yr({name:"",type:rr}),ur(!1),Q(P,{replace:!0})}catch(r){G.oR.error((0,t.S)(r,V("Не удалось сохранить категорию.")))}}:async function(){const r={name:vr.name,type:rr,parentCategoryId:J};try{await or(r).unwrap(),G.oR.success(V("Категория была создана")),yr({name:"",type:rr}),ur(!1),Q(P,{replace:!0})}catch(r){G.oR.error((0,t.S)(r,V("Не удалось сохранить категорию.")))}};return(0,Z.jsxs)(W.Dk,{children:[(0,Z.jsxs)(n.A,{fullWidth:!0,open:hr,onClose:()=>ur(!1),children:[fr&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(d.A,{children:V("Subcategory required")}),(0,Z.jsx)(l.A,{children:(0,Z.jsx)(c.A,{children:V(er?"This category already has products. Create a subcategory for the existing catalog items.":"This category already has services. Create a service subcategory to keep the service tree consistent.")})})]}),(0,Z.jsx)(d.A,{children:V("Create category")}),(0,Z.jsx)(l.A,{children:(0,Z.jsx)(I.A,{label:V("Category name"),type:"text",value:vr.name,onChange:r=>yr({name:r.target.value,type:rr})})}),(0,Z.jsxs)(s.A,{children:[(0,Z.jsx)(p.A,{onClick:()=>ur(!1),children:V("Cancel")}),(0,Z.jsx)(p.A,{disabled:ar||ir,onClick:Ar,children:V("Save")})]})]}),(0,Z.jsxs)(W.zY,{children:[(0,Z.jsxs)(W.Fp,{children:[(0,Z.jsx)(W.sT,{children:V(o?"Product selection":er?"Product category hierarchy":"Service category hierarchy")}),(0,Z.jsx)(W.I_,{children:V(o?"Browse product categories and add products to the order.":"Browse, split, and maintain the selected catalog category tree.")})]}),!o&&(0,Z.jsx)(T.A,{muiType:"success",text:V("Add category"),onClick:()=>{ur(!0)}})]}),(0,Z.jsxs)(W.ui,{children:[(0,Z.jsxs)(g.A,{separator:(0,Z.jsx)(j.A,{fontSize:"small"}),"aria-label":V("Category navigation"),children:[(0,Z.jsx)(m.A,{component:A.k2,replace:!!o,underline:"hover",color:"inherit",to:o?lr:P,children:V(er?"Product categories":"Service categories")}),(0,Z.jsx)(x.A,{color:"text.primary",children:J?V("Category {id}",{id:J}):V("Root")})]}),cr.length>0&&(0,Z.jsx)(R,{children:cr.map(r=>(0,Z.jsx)(A.k2,{replace:!!o,style:{textDecoration:"none"},to:o?`${lr}/${r.id}`:`${P}/hierarchy/${r.id}`,children:(0,Z.jsxs)(B,{children:[(0,Z.jsx)("h3",{children:r.name}),(0,Z.jsx)(j.A,{fontSize:"small"})]})},r.id))})]}),er?(0,Z.jsx)(z,{children:pr.map(r=>{var e,t,i;const n=E(nr,r.id),d=n>=0?null===(e=nr[n])||void 0===e?void 0:e.count:0;return(0,Z.jsxs)(O,{children:[(0,Z.jsx)(h.A,{avatar:(0,Z.jsx)(u.A,{children:null!==(t=null===(i=r.name)||void 0===i?void 0:i[0])&&void 0!==t?t:"P"}),title:r.name,subheader:(0,Z.jsx)(a.v0,{value:r.price})}),(0,Z.jsx)(v.A,{sx:{objectFit:"contain",background:"var(--color-surface-soft)"},component:"img",height:"180",image:r.imageName,alt:r.name}),(0,Z.jsx)(y.A,{children:(0,Z.jsx)(x.A,{variant:"body2",color:"text.secondary",children:r.category})}),o&&(-1===n?(0,Z.jsx)(b.A,{sx:{padding:"0 16px 16px"},children:(0,Z.jsx)(T.A,{onClick:()=>br(r),muiType:"success",text:V("Add to order")})}):(0,Z.jsxs)(L,{children:[(0,Z.jsx)(T.A,{muiType:"success",onClick:()=>br(r),rightIcon:(0,Z.jsx)(w.A,{}),ariaLabel:V("Add more: {name}",{name:r.name})}),(0,Z.jsx)(F,{children:d}),(0,Z.jsx)(T.A,{muiType:"error",onClick:()=>function(r){const e=E(nr,r);if(e>=0){const r=nr.map((r,o)=>{if(o===e){const e=r.count-1;return e<=0?null:{...r,count:e}}return r}).filter(r=>null!==r);dr(r),(0,U.Us)(r,X)}}(r.id),leftIcon:(0,Z.jsx)(C.A,{}),ariaLabel:V("Decrease quantity: {name}",{name:r.name})})]}))]},r.id)})}):(0,Z.jsx)(z,{children:mr.map(r=>{var e,o;return(0,Z.jsxs)(O,{children:[(0,Z.jsx)(h.A,{avatar:(0,Z.jsx)(u.A,{children:null!==(e=null===(o=r.name)||void 0===o?void 0:o[0])&&void 0!==e?e:"S"}),title:r.name,subheader:(0,Z.jsx)(a.v0,{value:r.price})}),(0,Z.jsx)(y.A,{children:(0,Z.jsx)(x.A,{variant:"body2",color:"text.secondary",children:r.category||V("Service")})})]},r.id)})})]})}},19645(r,e,o){var a=o(80741);const t=r=>{var e;const o=null!==(e=(0,a.j4)())&&void 0!==e?e:"anonymous",t=`${(0,a.gF)()||"unselected"}:${o}`;return r?`editOrder:${t}:${r}`:`createOrder:${t}`},i=r=>{const e=window.localStorage.getItem(t(r));if(!e)return{};try{return JSON.parse(e)}catch{return{}}};o.d(e,["Kg",0,t,"Us",0,(r,e)=>{const o=i(e);window.localStorage.setItem(t(e),JSON.stringify({...o,orderItems:r}))},"Zg",0,r=>{window.localStorage.removeItem(t(r))},"y5",0,i])},88819(r,e,o){o.d(e,{a:()=>a});let a=function(r){return r[r.Product=0]="Product",r[r.Service=1]="Service",r}({})},70701(r,e,o){o.d(e,{A:()=>l}),o(18139);var a=o(54499),t=o(28751),i=o(29615);const n=(0,t.Ay)(i.A,{shouldForwardProp:r=>"muiType"!==r&&"horizontalMargin"!==r&&"verticalMargin"!==r&&"bottomMargin"!==r})`
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
`;var d=o(20811);const l=r=>{let{fullWidth:e,type:o,onClick:a,leftIcon:t,rightIcon:i,text:l,muiType:c,horizontalMargin:s,verticalMargin:p,bottomMargin:g,disabled:m,ariaLabel:x}=r;return(0,d.jsx)(n,{fullWidth:e,type:o,muiType:c,startIcon:t,endIcon:i,onClick:a,verticalMargin:p||!1,horizontalMargin:s||!1,bottomMargin:g||!1,disabled:m,"aria-label":x,children:l})}},51222(r,e,o){var a=o(18139),t=o(61),i=o(28751),n=o(4780),d=o(18815);const l=t.Ay.div({width:"100%",maxWidth:"var(--app-content-width, 1440px)",minWidth:0,margin:"0 auto",textAlign:"left"}),c=t.Ay.div({display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"16px 24px",marginBottom:"24px","@media (max-width: 760px)":{display:"grid",gridTemplateColumns:"minmax(0, 1fr)",marginBottom:"18px"}}),s=t.Ay.div({display:"grid",gap:"6px",minWidth:0}),p=t.Ay.h1({margin:0,color:"var(--color-text)",fontSize:"clamp(24px, 2.35vw, 34px)",fontWeight:800,letterSpacing:"-.04em",lineHeight:1.2,overflowWrap:"anywhere"}),g=t.Ay.p({maxWidth:"720px",margin:0,color:"var(--color-muted)",fontSize:"14px",fontWeight:450,lineHeight:1.6}),m=t.Ay.section({width:"100%",minWidth:0,padding:"var(--panel-padding)",background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"var(--radius-xl)",boxShadow:"var(--shadow-soft)"}),x=t.Ay.div({display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"12px",width:"100%",marginBottom:"14px","@media (max-width: 760px)":{display:"grid",gridTemplateColumns:"minmax(0, 1fr)"}}),h=t.Ay.div({display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"}),u=t.Ay.div({display:"grid",alignItems:"start",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",gap:"12px","@media (max-width: 760px)":{gridTemplateColumns:"minmax(0, 1fr)"}}),v=t.Ay.form({display:"grid",gridTemplateColumns:"minmax(0, 1fr)",alignItems:"start",gap:"14px",width:"min(720px, 100%)",minWidth:0,padding:"var(--panel-padding)",background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"16px",boxShadow:"var(--shadow-soft)","@media (max-width: 560px)":{gap:"12px",padding:"14px"}}),y=t.Ay.div({display:"grid",placeItems:"center",gap:"8px",minHeight:"220px",padding:"28px",color:"var(--color-muted)",textAlign:"center",background:"var(--color-surface)",border:"1px dashed var(--color-border-strong)",borderRadius:"16px"}),b=(t.Ay.div({marginBottom:"8px",color:"var(--color-danger)",fontSize:"13px",fontWeight:650}),(0,i.Ay)(n.zh)({width:"100%",minWidth:0,"&.MuiDataGrid-autoHeight":{overflow:"visible","& .MuiDataGrid-main":{overflow:"visible"},"& .MuiDataGrid-columnHeaders":{position:"sticky",top:"var(--app-header-height)",zIndex:2,backgroundColor:"var(--color-surface-soft)",boxShadow:"0 1px 0 var(--color-border)"}}}));o.d(e,["Dk",0,l,"Fp",0,s,"I_",0,g,"M7",0,x,"aN",0,r=>{const{language:e}=(0,d.Bd)(),o=(0,a.useMemo)(()=>({...(0,d.it)(e),...r.localeText}),[e,r.localeText]);return a.createElement(b,{...r,localeText:o})},"kA",0,v,"pp",0,y,"sT",0,p,"ui",0,m,"vY",0,u,"v_",0,h,"zY",0,c])},69797(r,e,o){o.d(e,{A:()=>s}),o(18139);var a=o(54499),t=o(28751),i=o(46143);const n=(0,t.Ay)(i.A,{shouldForwardProp:r=>"horizontalMargin"!==r&&"verticalMargin"!==r&&"halfWidth"!==r&&"topMargin"!==r})`
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
`;var d=o(70166),l=o(42407),c=o(20811);const s=r=>{let{required:e=!1,value:o,onChange:a,label:t,verticalMargin:i=!1,horizontalMargin:s=!1,inputEvent:p,halfWidth:g=!1,disabled:m=!1,topMargin:x=!1,type:h="text",inputProps:u,register:v,name:y,error:b,fieldArray:f}=r;const A={disabled:m,halfWidth:g,required:e,topMargin:x,verticalMargin:i,horizontalMargin:s,value:o,label:t,type:h,inputProps:u,InputProps:p?{endAdornment:(0,c.jsx)(d.A,{position:"end",children:(0,c.jsx)(l.A,{onClick:()=>p()})})}:void 0};return v?(0,c.jsx)(n,{error:!!b,helperText:b,...A,onChange:a,...v(y)}):f?(0,c.jsx)(n,{onChange:a,error:!!b,helperText:b,...A}):(0,c.jsx)(n,{onChange:a,...A})}}}]);