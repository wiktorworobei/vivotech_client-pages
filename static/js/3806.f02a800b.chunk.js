"use strict";(globalThis.webpackChunkvivotech_crm_client||=[]).push([[3806],{3806(r,e,o){o.r(e),o.d(e,{default:()=>G});var a=o(8965),t=o(9950),i=o(3464),n=o(33),d=o(8170),l=o(8874),c=o(9739),s=o(226),p=o(2432),g=o(6080),m=o(2053),x=o(5180),h=o(1413),u=o(3569),v=o(704),y=o(5713),b=o(8429),f=o(2074),A=o(9156),w=o(392),j=o(8055),k=o(3766),C=o(7961),M=o(8977),I=o(9642),S=o(344),T=o(475),W=o(132),H=o(9254),z=o(8089);const $=W.Ay.div({display:"grid",gridTemplateColumns:"repeat(3, minmax(0, 1fr))",gap:"14px",marginTop:"16px",marginBottom:"16px","@media (max-width: 1100px)":{gridTemplateColumns:"repeat(2, minmax(0, 1fr))"},"@media (max-width: 720px)":{gridTemplateColumns:"1fr"}}),P=(0,H.Ay)(z.A)({display:"grid",overflow:"hidden",border:"1px solid var(--color-border)",borderRadius:"16px",boxShadow:"var(--shadow-soft)"}),R=W.Ay.div({display:"grid",gridTemplateColumns:"repeat(3, minmax(0, 1fr))",gap:"12px",marginTop:"14px","@media (max-width: 980px)":{gridTemplateColumns:"repeat(2, minmax(0, 1fr))"},"@media (max-width: 640px)":{gridTemplateColumns:"1fr"}}),B=W.Ay.div({display:"flex",alignItems:"center",justifyContent:"space-between",gap:"12px",minHeight:"56px",padding:"0 16px",color:"var(--color-text)",backgroundColor:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"14px",boxShadow:"var(--shadow-soft)",transition:"transform 160ms ease, border-color 160ms ease, box-shadow 160ms ease","&:hover":{transform:"translateY(-1px)",borderColor:"var(--color-border-strong)",boxShadow:"var(--shadow-hover)"},h3:{margin:0,minWidth:0,overflow:"hidden",fontSize:"15px",fontWeight:760,textOverflow:"ellipsis",whiteSpace:"nowrap"}}),O=W.Ay.div({display:"flex",alignItems:"center",gap:"8px",padding:"8px 16px 16px"}),L=W.Ay.div({display:"grid",placeItems:"center",minWidth:"38px",height:"38px",padding:"0 10px",color:"var(--color-text)",background:"var(--color-surface-soft)",border:"1px solid var(--color-border)",borderRadius:"10px",fontWeight:780});var N=o(489),D=o(341),F=o(7125),Y=o(3214),_=o(6814),q=o(7280),U=o(9348),E=o(4414);const G=r=>{let{isOrder:e,categoryType:o=S.h.Product,basePath:W="/productCategories"}=r;const H=(0,k.jL)(),{id:z}=(0,b.g)(),{pathname:G}=(0,b.zy)(),Z=(0,b.Zp)(),{t:J}=(0,_.Bd)(),X=e?S.h.Product:o,K=X===S.h.Product,[Q,{isLoading:V}]=(0,N.XY)(),[rr,{isLoading:er}]=(0,D.l$)(),[or,ar]=(0,t.useState)(()=>(0,q.y5)().orderItems||[]),tr=(0,t.useMemo)(()=>{const r=G.match(/^\/ordersManagement\/editOrder\/([^/]+)\/categories/);return r?`/ordersManagement/editOrder/${r[1]}/categories`:"/ordersManagement/createOrder/categories"},[G]),{data:ir=[],isLoading:nr}=(0,N.P5)({parentCategoryId:z,type:X}),{data:dr=[],isLoading:lr}=(0,D.a2)(z||"-1",{skip:!z||!K}),{data:cr=[],isLoading:sr}=(0,F.gt)(z||"-1",{skip:!z||K}),[pr,gr]=(0,t.useState)(!1),[mr,xr]=(0,t.useState)({name:"",type:X});if(nr||(K?lr:sr))return(0,E.jsx)(C.A,{});function hr(r){const e={id:r.id,itemType:Y.a.Product,productId:r.id,serviceId:null,name:r.name,imageName:r.imageName||null,price:r.price,count:1,sum:0},o=or.findIndex(e=>e.id===r.id);if(o>=0){const r=or.map((r,e)=>e===o?{...r,count:r.count+1}:r);ar(r),(0,q.Us)(r)}else{const r=[...or,e];ar(r),(0,q.Us)(r)}}const ur=K?dr.length>0:cr.length>0,vr=ur&&K?async function(){const r={name:mr.name,type:S.h.Product};if(z)try{await rr({categoryId:z,category:r}).unwrap(),H(N.Zx.util.invalidateTags(["Categories"])),U.oR.success(J("\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f \u0431\u044b\u043b\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0430")),xr({name:"",type:X}),gr(!1),Z(W,{replace:!0})}catch(e){U.oR.error((0,a.S)(e,J("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e.")))}}:async function(){const r={name:mr.name,type:X,parentCategoryId:z};try{await Q(r).unwrap(),U.oR.success(J("\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f \u0431\u044b\u043b\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0430")),xr({name:"",type:X}),gr(!1),Z(W,{replace:!0})}catch(e){U.oR.error((0,a.S)(e,J("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e.")))}};return(0,E.jsxs)(T.Dk,{children:[(0,E.jsxs)(i.A,{fullWidth:!0,open:pr,onClose:()=>gr(!1),children:[ur&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(n.A,{children:J("Subcategory required")}),(0,E.jsx)(d.A,{children:(0,E.jsx)(l.A,{children:J(K?"This category already has products. Create a subcategory for the existing catalog items.":"This category already has services. Create a service subcategory to keep the service tree consistent.")})})]}),(0,E.jsx)(n.A,{children:J("Create category")}),(0,E.jsx)(d.A,{children:(0,E.jsx)(I.A,{label:J("Category name"),type:"text",value:mr.name,onChange:r=>xr({name:r.target.value,type:X})})}),(0,E.jsxs)(c.A,{children:[(0,E.jsx)(s.A,{onClick:()=>gr(!1),children:J("Cancel")}),(0,E.jsx)(s.A,{disabled:V||er,onClick:vr,children:J("Save")})]})]}),(0,E.jsxs)(T.zY,{children:[(0,E.jsxs)(T.Fp,{children:[(0,E.jsx)(T.sT,{children:J(e?"Product selection":K?"Product category hierarchy":"Service category hierarchy")}),(0,E.jsx)(T.I_,{children:J(e?"Browse product categories and add products to the order.":"Browse, split, and maintain the selected catalog category tree.")})]}),!e&&(0,E.jsx)(M.A,{muiType:"success",text:J("Add category"),onClick:()=>{gr(!0)}})]}),(0,E.jsxs)(T.ui,{children:[(0,E.jsxs)(p.A,{separator:(0,E.jsx)(w.A,{fontSize:"small"}),"aria-label":J("Category navigation"),children:[(0,E.jsx)(g.A,{component:f.k2,replace:!!e,underline:"hover",color:"inherit",to:e?tr:W,children:J(K?"Product categories":"Service categories")}),(0,E.jsx)(m.A,{color:"text.primary",children:z?J("Category {id}",{id:z}):J("Root")})]}),ir.length>0&&(0,E.jsx)(R,{children:ir.map(r=>(0,E.jsx)(f.k2,{replace:!!e,style:{textDecoration:"none"},to:e?`${tr}/${r.id}`:`${W}/hierarchy/${r.id}`,children:(0,E.jsxs)(B,{children:[(0,E.jsx)("h3",{children:r.name}),(0,E.jsx)(w.A,{fontSize:"small"})]})},r.id))})]}),K?(0,E.jsx)($,{children:dr.map(r=>{var o,a,t;const i=or.findIndex(e=>e.id===r.id),n=i>=0?null===(o=or[i])||void 0===o?void 0:o.count:0;return(0,E.jsxs)(P,{children:[(0,E.jsx)(x.A,{avatar:(0,E.jsx)(h.A,{children:null!==(a=null===(t=r.name)||void 0===t?void 0:t[0])&&void 0!==a?a:"P"}),title:r.name,subheader:`${r.price} BYN`}),(0,E.jsx)(u.A,{sx:{objectFit:"contain",background:"var(--color-surface-soft)"},component:"img",height:"180",image:r.imageName,alt:r.name}),(0,E.jsx)(v.A,{children:(0,E.jsx)(m.A,{variant:"body2",color:"text.secondary",children:r.category})}),e&&(-1===i?(0,E.jsx)(y.A,{sx:{padding:"0 16px 16px"},children:(0,E.jsx)(M.A,{onClick:()=>hr(r),muiType:"success",text:J("Add to order")})}):(0,E.jsxs)(O,{children:[(0,E.jsx)(M.A,{muiType:"success",onClick:()=>hr(r),rightIcon:(0,E.jsx)(A.A,{}),ariaLabel:J("Add more: {name}",{name:r.name})}),(0,E.jsx)(L,{children:n}),(0,E.jsx)(M.A,{muiType:"error",onClick:()=>function(r){const e=or.findIndex(e=>e.id===r);if(e>=0){const r=or.map((r,o)=>{if(o===e){const e=r.count-1;return e<=0?null:{...r,count:e}}return r}).filter(r=>null!==r);ar(r),(0,q.Us)(r)}}(r.id),leftIcon:(0,E.jsx)(j.A,{}),ariaLabel:J("Decrease quantity: {name}",{name:r.name})})]}))]},r.id)})}):(0,E.jsx)($,{children:cr.map(r=>{var e,o;return(0,E.jsxs)(P,{children:[(0,E.jsx)(x.A,{avatar:(0,E.jsx)(h.A,{children:null!==(e=null===(o=r.name)||void 0===o?void 0:o[0])&&void 0!==e?e:"S"}),title:r.name,subheader:`${r.price} BYN`}),(0,E.jsx)(v.A,{children:(0,E.jsx)(m.A,{variant:"body2",color:"text.secondary",children:r.category||J("Service")})})]},r.id)})})]})}},7280(r,e,o){const a="createOrder",t=()=>{const r=window.localStorage.getItem(a);if(!r)return{};try{return JSON.parse(r)}catch{return{}}};o.d(e,["OE",0,a,"Us",0,r=>{const e=t();window.localStorage.setItem(a,JSON.stringify({...e,orderItems:r}))},"Zg",0,()=>{window.localStorage.removeItem(a)},"y5",0,t])},3214(r,e,o){o.d(e,{a:()=>a});let a=function(r){return r[r.Product=0]="Product",r[r.Service=1]="Service",r}({})},8977(r,e,o){o.d(e,{A:()=>l});o(9950);var a=o(1866),t=o(9254),i=o(226);const n=(0,t.Ay)(i.A,{shouldForwardProp:r=>"muiType"!==r&&"horizontalMargin"!==r&&"verticalMargin"!==r&&"bottomMargin"!==r})`
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
`;var d=o(4414);const l=r=>{let{fullWidth:e,type:o,onClick:a,leftIcon:t,rightIcon:i,text:l,muiType:c,horizontalMargin:s,verticalMargin:p,bottomMargin:g,disabled:m,ariaLabel:x}=r;return(0,d.jsx)(n,{fullWidth:e,type:o,muiType:c,startIcon:t,endIcon:i,onClick:a,verticalMargin:p||!1,horizontalMargin:s||!1,bottomMargin:g||!1,disabled:m,"aria-label":x,children:l})}},475(r,e,o){var a=o(9950),t=o(132),i=o(9254),n=o(34),d=o(6814);const l=t.Ay.div({width:"100%",maxWidth:"1360px",minWidth:0,margin:"0 auto",textAlign:"left"}),c=t.Ay.div({display:"flex",flexWrap:"wrap",alignItems:"flex-start",justifyContent:"space-between",gap:"24px",marginBottom:"28px","@media (max-width: 760px)":{display:"grid"}}),s=t.Ay.div({display:"grid",gap:"10px",minWidth:0}),p=t.Ay.h1({margin:0,color:"var(--color-text)",fontSize:"clamp(28px, 3vw, 36px)",fontWeight:800,letterSpacing:"-.045em",lineHeight:1.18,"@media (max-width: 760px)":{fontSize:"25px"}}),g=t.Ay.p({maxWidth:"720px",margin:0,color:"var(--color-muted)",fontSize:"14px",fontWeight:450,lineHeight:1.6}),m=t.Ay.section({width:"100%",minWidth:0,padding:"var(--panel-padding)",background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"var(--radius-xl)",boxShadow:"var(--shadow-soft)"}),x=t.Ay.div({display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"12px",width:"100%",marginBottom:"14px","@media (max-width: 760px)":{display:"grid"}}),h=t.Ay.div({display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"}),u=t.Ay.div({display:"grid",alignItems:"start",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",gap:"12px","@media (max-width: 760px)":{gridTemplateColumns:"1fr"}}),v=t.Ay.form({display:"grid",gridTemplateColumns:"minmax(0, 1fr)",alignItems:"start",gap:"14px",width:"min(720px, 100%)",minWidth:0,padding:"var(--panel-padding)",background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"16px",boxShadow:"var(--shadow-soft)","@media (max-width: 560px)":{gap:"12px",padding:"14px"}}),y=t.Ay.div({display:"grid",placeItems:"center",gap:"8px",minHeight:"220px",padding:"28px",color:"var(--color-muted)",textAlign:"center",background:"var(--color-surface)",border:"1px dashed var(--color-border-strong)",borderRadius:"16px"}),b=(t.Ay.div({marginBottom:"8px",color:"var(--color-danger)",fontSize:"13px",fontWeight:650}),(0,i.Ay)(n.zh)({width:"100%",minWidth:0,"&.MuiDataGrid-autoHeight":{overflow:"visible","& .MuiDataGrid-main":{overflow:"visible"},"& .MuiDataGrid-columnHeaders":{position:"sticky",top:"var(--app-header-height)",zIndex:2,backgroundColor:"var(--color-surface-soft)",boxShadow:"0 1px 0 var(--color-border)"}}}));o.d(e,["Dk",0,l,"Fp",0,s,"I_",0,g,"M7",0,x,"aN",0,r=>{const{language:e}=(0,d.Bd)(),o=(0,a.useMemo)(()=>({...(0,d.it)(e),...r.localeText}),[e,r.localeText]);return a.createElement(b,{...r,localeText:o})},"kA",0,v,"pp",0,y,"sT",0,p,"ui",0,m,"vY",0,u,"v_",0,h,"zY",0,c])},9642(r,e,o){o.d(e,{A:()=>s});o(9950);var a=o(1866),t=o(9254),i=o(8145);const n=(0,t.Ay)(i.A,{shouldForwardProp:r=>"horizontalMargin"!==r&&"verticalMargin"!==r&&"halfWidth"!==r&&"topMargin"!==r})`
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
`;var d=o(2046),l=o(7988),c=o(4414);const s=r=>{let{required:e=!1,value:o,onChange:a,label:t,verticalMargin:i=!1,horizontalMargin:s=!1,inputEvent:p,halfWidth:g=!1,disabled:m=!1,topMargin:x=!1,type:h="text",register:u,name:v,error:y,fieldArray:b}=r;const f={disabled:m,halfWidth:g,required:e,topMargin:x,verticalMargin:i,horizontalMargin:s,value:o,label:t,type:h,InputProps:p?{endAdornment:(0,c.jsx)(d.A,{position:"end",children:(0,c.jsx)(l.A,{onClick:()=>p()})})}:void 0};return u?(0,c.jsx)(n,{error:!!y,helperText:y,...f,onChange:a,...u(v)}):b?(0,c.jsx)(n,{onChange:a,error:!!y,helperText:y,...f}):(0,c.jsx)(n,{onChange:a,...f})}}}]);