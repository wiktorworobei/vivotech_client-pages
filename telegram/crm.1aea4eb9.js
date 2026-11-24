"use strict";(globalThis.webpackChunkvivotech_crm_client||=[]).push([[3882],{23882(r,e,o){o.r(e),o.d(e,{default:()=>L});var a=o.cw(function(r,e){var o=n();e.A=void 0;var a=o(t()),l=i();e.A=(0,a.default)((0,l.jsx)("path",{d:"M3 10h11v2H3zm0-2h11V6H3zm0 8h7v-2H3zm15.01-3.13.71-.71c.39-.39 1.02-.39 1.41 0l.71.71c.39.39.39 1.02 0 1.41l-.71.71zm-.71.71-5.3 5.3V21h2.12l5.3-5.3z"}),"EditNote")}),t=()=>o(31199),i=()=>o(20811),n=()=>o(77411),l=o(18139),d=o(35566),c=o(83760),s=o(6236),u=o(47638),p=o(22970),g=o(29615),h=o(62716),m=o(83120),x=o(95958);i();var v=o(57427),b=o(61),f=o(7176),A=o(69797),y=o(70701),w=o(51222),j=o(95837),S=o(44088),k=o(23854),M=o(4728),C=o(30164),I=o(54424),z=o(72619);const T=function(r,e){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ru-RU";return[{field:"imageName",align:"center",headerName:"",width:64,renderCell:r=>(0,i().jsx)(C.A,{sx:{width:36,height:36,borderRadius:"10px"},variant:"rounded",src:r.value,alt:r.row.name})},{field:"name",headerName:e("Название"),minWidth:260,flex:1,renderCell:r=>(0,i().jsx)(I.A,{component:z.N_,to:`/productsManagement/editProduct/productDetails/${r.id}`,sx:{fontWeight:650},children:r.value})},{field:"price",headerName:e("Цена"),type:"number",align:"center",width:120,renderCell:r=>(0,i().jsx)("strong",{children:Number(r.value)>0?(0,i().jsx)(S.v0,{value:Number(r.value),locale:o}):"Не указана"})},{field:"category",headerName:e("Категория"),sortable:!0,minWidth:150,flex:.7},{field:"count",headerName:e("Остаток, шт."),sortable:!0,align:"center",width:130},{field:"Edit",headerName:e("Изменить"),type:"actions",width:104,getActions:o=>[(0,i().jsx)(k.Z,{icon:(0,i().jsx)(M.A,{}),label:e("Изменить остаток"),onClick:()=>r(o.row)})]}]};var W=o(18815),H=o(83668),N=o(17361);const B=b.Ay.form({display:"grid",gap:"10px",marginTop:"12px"}),P=r=>{let{id:e,name:o,count:a,handleClose:t}=r;const{t:n}=(0,W.Bd)(),[d,c]=(0,l.useState)(String(a)),[s,{isLoading:u}]=(0,H.RE)();return(0,i().jsxs)(B,{onSubmit:r=>(async r=>{if(r.preventDefault(),e&&""!==d){const r={count:Number(d),id:e};try{await s(r).unwrap(),N.oR.success(n("Остаток продукта зафиксирован")),t()}catch{N.oR.error(n("Ошибка управления складом"))}}})(r),children:[(0,i().jsx)(A.A,{disabled:!0,value:o,label:n("Название")}),(0,i().jsx)(A.A,{value:d,type:"number",inputProps:{step:"any"},label:n("Количество"),required:!0,onChange:r=>c(r.target.value)}),(0,i().jsx)(y.A,{fullWidth:!0,text:n("Сохранить"),muiType:"success",type:"submit",disabled:u})]})};var E=o(64396),$=o(11731),R=o(81819),q=o(38048);let D=function(r){return r[r.Set=0]="Set",r[r.Add=1]="Add",r[r.Subtract=2]="Subtract",r}({});var F=o(56308);const O=r=>{var e;let{open:o,selectedIds:a,generationBatchId:t,targetLabel:n,onClose:u,onSubmit:g}=r;const{t:m}=(0,W.Bd)(),[x,v]=(0,l.useState)(D.Set),[b,f]=(0,l.useState)(""),[w,j]=(0,l.useState)(""),[S,k]=(0,l.useState)(!1),M=(null!==(e=null==a?void 0:a.length)&&void 0!==e?e:0)>500,C=[{id:D.Set,name:m("Set exact stock quantity")},{id:D.Add,name:m("Add to current stock")},{id:D.Subtract,name:m("Subtract from current stock")}],I=()=>{S||(f(""),j(""),u())};return(0,i().jsx)(d.A,{open:o,onClose:I,fullWidth:!0,maxWidth:"sm",children:(0,i().jsxs)("form",{onSubmit:async r=>{if(r.preventDefault(),M)return;const e=Number(b);if(!Number.isFinite(e)||e<0||x!==D.Set&&0===e)j(m("Enter a valid non-negative stock quantity."));else{k(!0),j("");try{const r=await g({ids:t?void 0:a,generationBatchId:t,mode:x,value:e});N.oR.success(m("Updated stock items: {count}",{count:r.updated})),f(""),u()}catch(r){j((0,F.S)(r,m("Bulk stock editing failed.")))}finally{k(!1)}}},children:[(0,i().jsx)(c.A,{children:m("Bulk stock editing")}),(0,i().jsxs)(s.A,{sx:{display:"grid",gap:2,paddingTop:"10px !important"},children:[(0,i().jsx)("div",{children:n}),(0,i().jsxs)(R.A,{children:[(0,i().jsx)(h.A,{children:m("Stock operation")}),(0,i().jsx)(q.A,{value:x,label:m("Stock operation"),menuItemProps:C,onChange:r=>v(Number(r.target.value))})]}),(0,i().jsx)(A.A,{fieldArray:!0,required:!0,type:"number",value:b,label:m("Quantity"),onChange:r=>f(r.target.value)}),M&&(0,i().jsx)("p",{style:{margin:0,color:"var(--color-danger)"},children:m("You can edit no more than 500 stock items at once.")}),w&&(0,i().jsx)("p",{style:{margin:0,color:"var(--color-danger)"},children:w})]}),(0,i().jsxs)(p.A,{children:[(0,i().jsx)(y.A,{type:"button",muiType:"secondary",disabled:S,text:m("Cancel"),onClick:I}),(0,i().jsx)(y.A,{type:"submit",muiType:"success",disabled:S||M,text:m(S?"Saving...":"Apply changes")})]})]})})},_=b.Ay.div({display:"flex",alignItems:"center",gap:"8px",color:"var(--color-muted)",fontSize:"13px",fontWeight:760}),G=b.Ay.div({display:"grid",gridTemplateColumns:"minmax(0, 1fr) minmax(0, 0.65fr)",gap:"14px",alignItems:"end","@media (max-width: 760px)":{gridTemplateColumns:"1fr"}}),L=()=>{var r,e;const{t:o,locale:t}=(0,W.Bd)(),[n,b]=(0,l.useState)({pageNumber:1,pageSize:25,productCategories:[],searchTerm:""}),[S,k]=(0,l.useState)(""),M=(0,j.A)(S),{data:C,isLoading:I,isFetching:z}=(0,H.u7)(n),{data:N=[]}=(0,E.H3)(),[B]=(0,H.Pl)(),D=(null==C?void 0:C.items)||[],F=null==C?void 0:C.metaData,[L,V]=(0,l.useState)(!1),[Y,U]=(0,l.useState)(),[Q,Z]=(0,l.useState)({pageSize:n.pageSize,page:n.pageNumber-1}),[J,K]=(0,l.useState)([]),[X,rr]=(0,l.useState)(null),er=[{id:"",name:o("All generation batches")},...N.filter(r=>r.itemType===$.h.Product).map(r=>({id:r.id,name:r.name}))],or=N.find(r=>r.id===n.generationBatchId),ar=()=>{V(!1)};return(0,l.useEffect)(()=>{b(r=>({...r,searchTerm:M,pageNumber:1})),Z(r=>({...r,page:0}))},[M]),I?(0,i().jsx)(f.A,{}):(0,i().jsxs)(w.Dk,{children:[(0,i().jsx)(O,{open:null!==X,selectedIds:"selection"===X?J.map(Number):void 0,generationBatchId:"batch"===X?n.generationBatchId:void 0,targetLabel:"batch"===X?o("Entire generation batch: {name}",{name:null!==(r=null==or?void 0:or.name)&&void 0!==r?r:""}):o("Selected products: {count}",{count:J.length}),onClose:()=>rr(null),onSubmit:async r=>{const e=await B(r).unwrap();return K([]),rr(null),e}}),(0,i().jsxs)(d.A,{open:L,onClose:()=>ar(),children:[(0,i().jsx)(c.A,{children:o("Изменение остатков на складе")}),(0,i().jsxs)(s.A,{children:[(0,i().jsx)(u.A,{children:o("Внесите актуальное количество товара на складе.")}),(0,i().jsx)(P,{id:null==Y?void 0:Y.id,name:null==Y?void 0:Y.name,count:null==Y?void 0:Y.count,handleClose:ar})]}),(0,i().jsx)(p.A,{children:(0,i().jsx)(g.A,{onClick:()=>ar(),children:o("Отмена")})})]}),(0,i().jsx)(w.zY,{children:(0,i().jsxs)(w.Fp,{children:[(0,i().jsx)(w.sT,{children:o("Склад")}),(0,i().jsx)(w.I_,{children:o("Остатки товаров, контроль наличия и быстрое обновление количества.")})]})}),(0,i().jsxs)(w.ui,{children:[(0,i().jsxs)(w.M7,{children:[(0,i().jsxs)(_,{children:[(0,i().jsx)(m.A,{fontSize:"small"}),o("Поиск по складу")]}),(0,i().jsxs)(w.v_,{children:[J.length>0&&(0,i().jsx)(y.A,{text:o("Clear selection"),leftIcon:(0,i().jsx)(v.A,{}),muiType:"secondary",onClick:()=>K([])}),(0,i().jsx)(y.A,{text:o("Edit selected stock ({count})",{count:J.length}),leftIcon:(0,i().jsx)(a().A,{}),muiType:"edit",disabled:0===J.length,onClick:()=>rr("selection")}),n.generationBatchId&&(0,i().jsx)(y.A,{text:o("Edit entire batch stock"),leftIcon:(0,i().jsx)(x.A,{}),muiType:"success",onClick:()=>rr("batch")})]})]}),(0,i().jsxs)(G,{children:[(0,i().jsx)(A.A,{verticalMargin:!0,value:S||"",label:o("Название товара или описание..."),onChange:r=>k(r.target.value)}),(0,i().jsxs)(R.A,{children:[(0,i().jsx)(h.A,{children:o("Generation batch")}),(0,i().jsx)(q.A,{required:!1,value:null!==(e=n.generationBatchId)&&void 0!==e?e:"",label:o("Generation batch"),menuItemProps:er,onChange:r=>{const e=String(r.target.value)||void 0;b(r=>({...r,generationBatchId:e,pageNumber:1})),Z(r=>({...r,page:0})),K([])}})]})]}),(0,i().jsx)(w.aN,{loading:z,pagination:!0,paginationMode:"server",rowCount:(null==F?void 0:F.totalCount)||0,autoHeight:!0,rows:D,columns:T(r=>{U(r),V(!0)},o,t),paginationModel:Q,onPaginationModelChange:r=>(r=>{b(e=>({...e,pageNumber:r.page+1,pageSize:r.pageSize})),Z(r)})(r),pageSizeOptions:[25,50,100],disableRowSelectionOnClick:!0,checkboxSelection:!0,keepNonExistentRowsSelected:!0,rowSelectionModel:J,onRowSelectionModelChange:K})]})]})}},95837(r,e,o){var a=o(18139);o.d(e,["A",0,function(r){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;const[o,t]=(0,a.useState)(r);return(0,a.useEffect)(()=>{const o=setTimeout(()=>{t(r)},e);return()=>{clearTimeout(o)}},[r,e]),o}])},70701(r,e,o){o.d(e,{A:()=>d}),o(18139);var a=o(54499),t=o(28751),i=o(29615);const n=(0,t.Ay)(i.A,{shouldForwardProp:r=>"muiType"!==r&&"horizontalMargin"!==r&&"verticalMargin"!==r&&"bottomMargin"!==r})`
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
`;var l=o(20811);const d=r=>{let{fullWidth:e,type:o,onClick:a,leftIcon:t,rightIcon:i,text:d,muiType:c,horizontalMargin:s,verticalMargin:u,bottomMargin:p,disabled:g,ariaLabel:h}=r;return(0,l.jsx)(n,{fullWidth:e,type:o,muiType:c,startIcon:t,endIcon:i,onClick:a,verticalMargin:u||!1,horizontalMargin:s||!1,bottomMargin:p||!1,disabled:g,"aria-label":h,children:d})}},51222(r,e,o){var a=o(18139),t=o(61),i=o(28751),n=o(4780),l=o(18815);const d=t.Ay.div({width:"100%",maxWidth:"var(--app-content-width, 1440px)",minWidth:0,margin:"0 auto",textAlign:"left"}),c=t.Ay.div({display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"16px 24px",marginBottom:"24px","@media (max-width: 760px)":{display:"grid",marginBottom:"18px"}}),s=t.Ay.div({display:"grid",gap:"6px",minWidth:0}),u=t.Ay.h1({margin:0,color:"var(--color-text)",fontSize:"clamp(24px, 2.35vw, 34px)",fontWeight:800,letterSpacing:"-.04em",lineHeight:1.2,overflowWrap:"anywhere"}),p=t.Ay.p({maxWidth:"720px",margin:0,color:"var(--color-muted)",fontSize:"14px",fontWeight:450,lineHeight:1.6}),g=t.Ay.section({width:"100%",minWidth:0,padding:"var(--panel-padding)",background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"var(--radius-xl)",boxShadow:"var(--shadow-soft)"}),h=t.Ay.div({display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"12px",width:"100%",marginBottom:"14px","@media (max-width: 760px)":{display:"grid"}}),m=t.Ay.div({display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"}),x=t.Ay.div({display:"grid",alignItems:"start",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",gap:"12px","@media (max-width: 760px)":{gridTemplateColumns:"1fr"}}),v=t.Ay.form({display:"grid",gridTemplateColumns:"minmax(0, 1fr)",alignItems:"start",gap:"14px",width:"min(720px, 100%)",minWidth:0,padding:"var(--panel-padding)",background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"16px",boxShadow:"var(--shadow-soft)","@media (max-width: 560px)":{gap:"12px",padding:"14px"}}),b=t.Ay.div({display:"grid",placeItems:"center",gap:"8px",minHeight:"220px",padding:"28px",color:"var(--color-muted)",textAlign:"center",background:"var(--color-surface)",border:"1px dashed var(--color-border-strong)",borderRadius:"16px"}),f=(t.Ay.div({marginBottom:"8px",color:"var(--color-danger)",fontSize:"13px",fontWeight:650}),(0,i.Ay)(n.zh)({width:"100%",minWidth:0,"&.MuiDataGrid-autoHeight":{overflow:"visible","& .MuiDataGrid-main":{overflow:"visible"},"& .MuiDataGrid-columnHeaders":{position:"sticky",top:"var(--app-header-height)",zIndex:2,backgroundColor:"var(--color-surface-soft)",boxShadow:"0 1px 0 var(--color-border)"}}}));o.d(e,["Dk",0,d,"Fp",0,s,"I_",0,p,"M7",0,h,"aN",0,r=>{const{language:e}=(0,l.Bd)(),o=(0,a.useMemo)(()=>({...(0,l.it)(e),...r.localeText}),[e,r.localeText]);return a.createElement(f,{...r,localeText:o})},"kA",0,v,"pp",0,b,"sT",0,u,"ui",0,g,"vY",0,x,"v_",0,m,"zY",0,c])},81819(r,e,o){o.d(e,{A:()=>d}),o(18139);var a=o(54499),t=o(28751),i=o(66426);const n=(0,t.Ay)(i.A,{shouldForwardProp:r=>"horizontalMargin"!==r&&"verticalMargin"!==r})`
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
`;var l=o(20811);const d=r=>{let{verticalMargin:e,horizontalMargin:o,error:a,children:t}=r;return(0,l.jsx)(n,{fullWidth:!0,error:a,horizontalMargin:o,verticalMargin:e,children:t})}},38048(r,e,o){o.d(e,{A:()=>c}),o(18139);var a=o(54499),t=o(28751),i=o(61718);const n=(0,t.Ay)(i.A,{shouldForwardProp:r=>"halfWidth"!==r})`
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
`;var l=o(30937),d=o(20811);const c=r=>{let{id:e,labelId:o,value:a,onChange:t,label:i,menuItemProps:c,register:s,name:u,error:p,required:g,defaultValue:h,disabled:m,withoutId:x}=r;return s&&x?(0,d.jsx)(n,{id:e,labelId:o,displayEmpty:!0,defaultValue:h,disabled:m,required:g,error:!!p,...s(u),value:a,onChange:t,label:i,children:c&&c.map(r=>(0,d.jsx)(l.A,{value:r,children:r},String(r)))}):s?(0,d.jsx)(n,{id:e,labelId:o,displayEmpty:!0,defaultValue:h,disabled:m,required:g,error:!!p,...s(u),value:a,onChange:t,label:i,children:c&&c.map(r=>(0,d.jsx)(l.A,{value:r.id,children:r.name},r.id))}):(0,d.jsx)(n,{id:e,labelId:o,value:a,onChange:t,label:i,required:!1!==g,disabled:m,error:!!p,children:c&&c.map(r=>(0,d.jsx)(l.A,{value:r.id,children:r.name},r.id))})}},69797(r,e,o){o.d(e,{A:()=>s}),o(18139);var a=o(54499),t=o(28751),i=o(46143);const n=(0,t.Ay)(i.A,{shouldForwardProp:r=>"horizontalMargin"!==r&&"verticalMargin"!==r&&"halfWidth"!==r&&"topMargin"!==r})`
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
`;var l=o(70166),d=o(42407),c=o(20811);const s=r=>{let{required:e=!1,value:o,onChange:a,label:t,verticalMargin:i=!1,horizontalMargin:s=!1,inputEvent:u,halfWidth:p=!1,disabled:g=!1,topMargin:h=!1,type:m="text",inputProps:x,register:v,name:b,error:f,fieldArray:A}=r;const y={disabled:g,halfWidth:p,required:e,topMargin:h,verticalMargin:i,horizontalMargin:s,value:o,label:t,type:m,inputProps:x,InputProps:u?{endAdornment:(0,c.jsx)(l.A,{position:"end",children:(0,c.jsx)(d.A,{onClick:()=>u()})})}:void 0};return v?(0,c.jsx)(n,{error:!!f,helperText:f,...y,onChange:a,...v(b)}):A?(0,c.jsx)(n,{onChange:a,error:!!f,helperText:f,...y}):(0,c.jsx)(n,{onChange:a,...y})}}}]);