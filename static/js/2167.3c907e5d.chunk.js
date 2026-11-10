"use strict";(globalThis.webpackChunkvivotech_crm_client||=[]).push([[2167],{2167(e,r,o){o.r(r),o.d(r,{default:()=>L});var a=o.cw(function(e,r){var o=n();r.A=void 0;var a=o(t()),l=i();r.A=(0,a.default)((0,l.jsx)("path",{d:"M3 10h11v2H3zm0-2h11V6H3zm0 8h7v-2H3zm15.01-3.13.71-.71c.39-.39 1.02-.39 1.41 0l.71.71c.39.39.39 1.02 0 1.41l-.71.71zm-.71.71-5.3 5.3V21h2.12l5.3-5.3z"}),"EditNote")}),t=()=>o(9526),i=()=>o(4414),n=()=>o(4994),l=o(9950),d=o(3464),c=o(33),s=o(8170),u=o(8874),p=o(9739),g=o(226),h=o(3788),m=o(9223),v=o(7565);i();var x=o(7762),b=o(132),f=o(7961),A=o(9642),y=o(8977),w=o(475),j=o(3236),S=o(5909),k=o(7489),M=o(4117),C=o(1413),I=o(6080),z=o(2074);const T=function(e,r){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ru-RU";return[{field:"imageName",align:"center",headerName:"",width:64,renderCell:e=>(0,i().jsx)(C.A,{sx:{width:36,height:36,borderRadius:"10px"},variant:"rounded",src:e.value,alt:e.row.name})},{field:"name",headerName:r("\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),minWidth:260,flex:1,renderCell:e=>(0,i().jsx)(I.A,{component:z.N_,to:`/productsManagement/editProduct/productDetails/${e.id}`,sx:{fontWeight:650},children:e.value})},{field:"price",headerName:r("\u0426\u0435\u043d\u0430"),type:"number",align:"center",width:120,renderCell:e=>(0,i().jsx)("strong",{children:Number(e.value)>0?(0,i().jsx)(S.v0,{value:Number(e.value),locale:o}):"\u041d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u0430"})},{field:"category",headerName:r("\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f"),sortable:!0,minWidth:150,flex:.7},{field:"count",headerName:r("\u041e\u0441\u0442\u0430\u0442\u043e\u043a, \u0448\u0442."),sortable:!0,align:"center",width:130},{field:"Edit",headerName:r("\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"),type:"actions",width:104,getActions:o=>[(0,i().jsx)(k.Z,{icon:(0,i().jsx)(M.A,{}),label:r("\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043e\u0441\u0442\u0430\u0442\u043e\u043a"),onClick:()=>e(o.row)})]}]};var H=o(3978),W=o(5383),N=o(9348);const B=b.Ay.form({display:"grid",gap:"10px",marginTop:"12px"}),E=e=>{let{id:r,name:o,count:a,handleClose:t}=e;const{t:n}=(0,H.Bd)(),[d,c]=(0,l.useState)(a),[s,{isLoading:u}]=(0,W.RE)();return(0,i().jsxs)(B,{onSubmit:e=>(async e=>{if(e.preventDefault(),r){const e={count:d,id:r};try{await s(e).unwrap(),N.oR.success(n("\u041e\u0441\u0442\u0430\u0442\u043e\u043a \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430 \u0437\u0430\u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d")),t()}catch{N.oR.error(n("\u041e\u0448\u0438\u0431\u043a\u0430 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0441\u043a\u043b\u0430\u0434\u043e\u043c"))}}})(e),children:[(0,i().jsx)(A.A,{disabled:!0,value:o,label:n("\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435")}),(0,i().jsx)(A.A,{value:d,type:"number",label:n("\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"),required:!0,onChange:e=>c(Number(e.target.value))}),(0,i().jsx)(y.A,{fullWidth:!0,text:n("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),muiType:"success",type:"submit",disabled:u})]})};var P=o(9823),$=o(344),R=o(9292),q=o(6458);let D=function(e){return e[e.Set=0]="Set",e[e.Add=1]="Add",e[e.Subtract=2]="Subtract",e}({});var F=o(8965);const O=e=>{var r;let{open:o,selectedIds:a,generationBatchId:t,targetLabel:n,onClose:u,onSubmit:g}=e;const{t:m}=(0,H.Bd)(),[v,x]=(0,l.useState)(D.Set),[b,f]=(0,l.useState)(""),[w,j]=(0,l.useState)(""),[S,k]=(0,l.useState)(!1),M=(null!==(r=null===a||void 0===a?void 0:a.length)&&void 0!==r?r:0)>500,C=[{id:D.Set,name:m("Set exact stock quantity")},{id:D.Add,name:m("Add to current stock")},{id:D.Subtract,name:m("Subtract from current stock")}],I=()=>{S||(f(""),j(""),u())};return(0,i().jsx)(d.A,{open:o,onClose:I,fullWidth:!0,maxWidth:"sm",children:(0,i().jsxs)("form",{onSubmit:async e=>{if(e.preventDefault(),M)return;const r=Number(b);if(!Number.isFinite(r)||r<0||v!==D.Set&&0===r)j(m("Enter a valid non-negative stock quantity."));else{k(!0),j("");try{const e=await g({ids:t?void 0:a,generationBatchId:t,mode:v,value:r});N.oR.success(m("Updated stock items: {count}",{count:e.updated})),f(""),u()}catch(o){j((0,F.S)(o,m("Bulk stock editing failed.")))}finally{k(!1)}}},children:[(0,i().jsx)(c.A,{children:m("Bulk stock editing")}),(0,i().jsxs)(s.A,{sx:{display:"grid",gap:2,paddingTop:"10px !important"},children:[(0,i().jsx)("div",{children:n}),(0,i().jsxs)(R.A,{children:[(0,i().jsx)(h.A,{children:m("Stock operation")}),(0,i().jsx)(q.A,{value:v,label:m("Stock operation"),menuItemProps:C,onChange:e=>x(Number(e.target.value))})]}),(0,i().jsx)(A.A,{fieldArray:!0,required:!0,type:"number",value:b,label:m("Quantity"),onChange:e=>f(e.target.value)}),M&&(0,i().jsx)("p",{style:{margin:0,color:"var(--color-danger)"},children:m("You can edit no more than 500 stock items at once.")}),w&&(0,i().jsx)("p",{style:{margin:0,color:"var(--color-danger)"},children:w})]}),(0,i().jsxs)(p.A,{children:[(0,i().jsx)(y.A,{type:"button",muiType:"secondary",disabled:S,text:m("Cancel"),onClick:I}),(0,i().jsx)(y.A,{type:"submit",muiType:"success",disabled:S||M,text:m(S?"Saving...":"Apply changes")})]})]})})},_=b.Ay.div({display:"flex",alignItems:"center",gap:"8px",color:"var(--color-muted)",fontSize:"13px",fontWeight:760}),G=b.Ay.div({display:"grid",gridTemplateColumns:"minmax(0, 1fr) minmax(0, 0.65fr)",gap:"14px",alignItems:"end","@media (max-width: 760px)":{gridTemplateColumns:"1fr"}}),L=()=>{var e,r;const{t:o,locale:t}=(0,H.Bd)(),[n,b]=(0,l.useState)({pageNumber:1,pageSize:25,productCategories:[],searchTerm:""}),[S,k]=(0,l.useState)(""),M=(0,j.A)(S),{data:C,isLoading:I,isFetching:z}=(0,W.u7)(n),{data:N=[]}=(0,P.H3)(),[B]=(0,W.Pl)(),D=(null===C||void 0===C?void 0:C.items)||[],F=null===C||void 0===C?void 0:C.metaData,[L,V]=(0,l.useState)(!1),[Y,U]=(0,l.useState)(),[Q,Z]=(0,l.useState)({pageSize:n.pageSize,page:n.pageNumber-1}),[J,K]=(0,l.useState)([]),[X,ee]=(0,l.useState)(null),re=[{id:"",name:o("All generation batches")},...N.filter(e=>e.itemType===$.h.Product).map(e=>({id:e.id,name:e.name}))],oe=N.find(e=>e.id===n.generationBatchId),ae=()=>{V(!1)};(0,l.useEffect)(()=>{b(e=>({...e,searchTerm:M,pageNumber:1})),Z(e=>({...e,page:0}))},[M]);return I?(0,i().jsx)(f.A,{}):(0,i().jsxs)(w.Dk,{children:[(0,i().jsx)(O,{open:null!==X,selectedIds:"selection"===X?J.map(Number):void 0,generationBatchId:"batch"===X?n.generationBatchId:void 0,targetLabel:"batch"===X?o("Entire generation batch: {name}",{name:null!==(e=null===oe||void 0===oe?void 0:oe.name)&&void 0!==e?e:""}):o("Selected products: {count}",{count:J.length}),onClose:()=>ee(null),onSubmit:async e=>{const r=await B(e).unwrap();return K([]),ee(null),r}}),(0,i().jsxs)(d.A,{open:L,onClose:()=>ae(),children:[(0,i().jsx)(c.A,{children:o("\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043e\u0441\u0442\u0430\u0442\u043a\u043e\u0432 \u043d\u0430 \u0441\u043a\u043b\u0430\u0434\u0435")}),(0,i().jsxs)(s.A,{children:[(0,i().jsx)(u.A,{children:o("\u0412\u043d\u0435\u0441\u0438\u0442\u0435 \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0442\u043e\u0432\u0430\u0440\u0430 \u043d\u0430 \u0441\u043a\u043b\u0430\u0434\u0435.")}),(0,i().jsx)(E,{id:null===Y||void 0===Y?void 0:Y.id,name:null===Y||void 0===Y?void 0:Y.name,count:null===Y||void 0===Y?void 0:Y.count,handleClose:ae})]}),(0,i().jsx)(p.A,{children:(0,i().jsx)(g.A,{onClick:()=>ae(),children:o("\u041e\u0442\u043c\u0435\u043d\u0430")})})]}),(0,i().jsx)(w.zY,{children:(0,i().jsxs)(w.Fp,{children:[(0,i().jsx)(w.sT,{children:o("\u0421\u043a\u043b\u0430\u0434")}),(0,i().jsx)(w.I_,{children:o("\u041e\u0441\u0442\u0430\u0442\u043a\u0438 \u0442\u043e\u0432\u0430\u0440\u043e\u0432, \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c \u043d\u0430\u043b\u0438\u0447\u0438\u044f \u0438 \u0431\u044b\u0441\u0442\u0440\u043e\u0435 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430.")})]})}),(0,i().jsxs)(w.ui,{children:[(0,i().jsxs)(w.M7,{children:[(0,i().jsxs)(_,{children:[(0,i().jsx)(m.A,{fontSize:"small"}),o("\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0441\u043a\u043b\u0430\u0434\u0443")]}),(0,i().jsxs)(w.v_,{children:[J.length>0&&(0,i().jsx)(y.A,{text:o("Clear selection"),leftIcon:(0,i().jsx)(x.A,{}),muiType:"secondary",onClick:()=>K([])}),(0,i().jsx)(y.A,{text:o("Edit selected stock ({count})",{count:J.length}),leftIcon:(0,i().jsx)(a().A,{}),muiType:"edit",disabled:0===J.length,onClick:()=>ee("selection")}),n.generationBatchId&&(0,i().jsx)(y.A,{text:o("Edit entire batch stock"),leftIcon:(0,i().jsx)(v.A,{}),muiType:"success",onClick:()=>ee("batch")})]})]}),(0,i().jsxs)(G,{children:[(0,i().jsx)(A.A,{verticalMargin:!0,value:S||"",label:o("\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u0430 \u0438\u043b\u0438 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435..."),onChange:e=>k(e.target.value)}),(0,i().jsxs)(R.A,{children:[(0,i().jsx)(h.A,{children:o("Generation batch")}),(0,i().jsx)(q.A,{required:!1,value:null!==(r=n.generationBatchId)&&void 0!==r?r:"",label:o("Generation batch"),menuItemProps:re,onChange:e=>{const r=String(e.target.value)||void 0;b(e=>({...e,generationBatchId:r,pageNumber:1})),Z(e=>({...e,page:0})),K([])}})]})]}),(0,i().jsx)(w.aN,{loading:z,pagination:!0,paginationMode:"server",rowCount:(null===F||void 0===F?void 0:F.totalCount)||0,autoHeight:!0,rows:D,columns:T(e=>{U(e),V(!0)},o,t),paginationModel:Q,onPaginationModelChange:e=>(e=>{b(r=>({...r,pageNumber:e.page+1,pageSize:e.pageSize})),Z(e)})(e),pageSizeOptions:[25,50,100],disableRowSelectionOnClick:!0,checkboxSelection:!0,keepNonExistentRowsSelected:!0,rowSelectionModel:J,onRowSelectionModelChange:K})]})]})}},3236(e,r,o){var a=o(9950);const t=function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;const[o,t]=(0,a.useState)(e);return(0,a.useEffect)(()=>{const o=setTimeout(()=>{t(e)},r);return()=>{clearTimeout(o)}},[e,r]),o};o.d(r,["A",0,t])},8977(e,r,o){o.d(r,{A:()=>d});o(9950);var a=o(1866),t=o(9254),i=o(226);const n=(0,t.Ay)(i.A,{shouldForwardProp:e=>"muiType"!==e&&"horizontalMargin"!==e&&"verticalMargin"!==e&&"bottomMargin"!==e})`
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

  ${e=>{let{muiType:r}=e;switch(r){case"primary":return a.AH`
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

  ${e=>a.AH`
  ${!0===e.horizontalMargin&&a.AH`
    margin-left: 8px;
    margin-right: 8px;
  `}

  ${!0===e.verticalMargin&&a.AH`
    margin-top: 8px;
    margin-bottom: 8px;
  `}

  ${!0===e.bottomMargin&&a.AH`
    margin-top: 8px;
    margin-bottom: 24px;
  `}
`}
`;var l=o(4414);const d=e=>{let{fullWidth:r,type:o,onClick:a,leftIcon:t,rightIcon:i,text:d,muiType:c,horizontalMargin:s,verticalMargin:u,bottomMargin:p,disabled:g,ariaLabel:h}=e;return(0,l.jsx)(n,{fullWidth:r,type:o,muiType:c,startIcon:t,endIcon:i,onClick:a,verticalMargin:u||!1,horizontalMargin:s||!1,bottomMargin:p||!1,disabled:g,"aria-label":h,children:d})}},475(e,r,o){var a=o(9950),t=o(132),i=o(9254),n=o(8707),l=o(3978);const d=t.Ay.div({width:"100%",maxWidth:"1360px",minWidth:0,margin:"0 auto",textAlign:"left"}),c=t.Ay.div({display:"flex",flexWrap:"wrap",alignItems:"flex-start",justifyContent:"space-between",gap:"24px",marginBottom:"28px","@media (max-width: 760px)":{display:"grid"}}),s=t.Ay.div({display:"grid",gap:"10px",minWidth:0}),u=t.Ay.h1({margin:0,color:"var(--color-text)",fontSize:"clamp(26px, 2.5vw, 32px)",fontWeight:750,letterSpacing:"-.035em",lineHeight:1.25,"@media (max-width: 760px)":{fontSize:"25px"}}),p=t.Ay.p({maxWidth:"720px",margin:0,color:"var(--color-muted)",fontSize:"14px",fontWeight:450,lineHeight:1.6}),g=t.Ay.section({width:"100%",minWidth:0,padding:"var(--panel-padding)",background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"var(--radius-xl)",boxShadow:"var(--shadow-soft)"}),h=t.Ay.div({display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"12px",width:"100%",marginBottom:"14px","@media (max-width: 760px)":{display:"grid"}}),m=t.Ay.div({display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"}),v=t.Ay.div({display:"grid",alignItems:"start",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",gap:"12px","@media (max-width: 760px)":{gridTemplateColumns:"1fr"}}),x=t.Ay.form({display:"grid",gridTemplateColumns:"minmax(0, 1fr)",alignItems:"start",gap:"14px",width:"min(720px, 100%)",minWidth:0,padding:"var(--panel-padding)",background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"16px",boxShadow:"var(--shadow-soft)","@media (max-width: 560px)":{gap:"12px",padding:"14px"}}),b=t.Ay.div({display:"grid",placeItems:"center",gap:"8px",minHeight:"220px",padding:"28px",color:"var(--color-muted)",textAlign:"center",background:"var(--color-surface)",border:"1px dashed var(--color-border-strong)",borderRadius:"16px"}),f=(t.Ay.div({marginBottom:"8px",color:"var(--color-danger)",fontSize:"13px",fontWeight:650}),(0,i.Ay)(n.zh)({width:"100%",minWidth:0,"&.MuiDataGrid-autoHeight":{overflow:"visible","& .MuiDataGrid-main":{overflow:"visible"},"& .MuiDataGrid-columnHeaders":{position:"sticky",top:"var(--app-header-height)",zIndex:2,backgroundColor:"var(--color-surface-soft)",boxShadow:"0 1px 0 var(--color-border)"}}}));o.d(r,["Dk",0,d,"Fp",0,s,"I_",0,p,"M7",0,h,"aN",0,e=>{const{language:r}=(0,l.Bd)(),o=(0,a.useMemo)(()=>({...(0,l.it)(r),...e.localeText}),[r,e.localeText]);return a.createElement(f,{...e,localeText:o})},"kA",0,x,"pp",0,b,"sT",0,u,"ui",0,g,"vY",0,v,"v_",0,m,"zY",0,c])},9292(e,r,o){o.d(r,{A:()=>d});o(9950);var a=o(1866),t=o(9254),i=o(5979);const n=(0,t.Ay)(i.A,{shouldForwardProp:e=>"horizontalMargin"!==e&&"verticalMargin"!==e})`
  width: 100%;
  min-width: 0;

  ${e=>!0===e.horizontalMargin&&a.AH`
      margin-left: 8px;
      margin-right: 8px;
      width: calc(100% - 16px);
    `}

  ${e=>!0===e.verticalMargin&&a.AH`
      margin-top: 8px;
      margin-bottom: 8px;
    `}
`;var l=o(4414);const d=e=>{let{verticalMargin:r,horizontalMargin:o,error:a,children:t}=e;return(0,l.jsx)(n,{fullWidth:!0,error:a,horizontalMargin:o,verticalMargin:r,children:t})}},6458(e,r,o){o.d(r,{A:()=>c});o(9950);var a=o(1866),t=o(9254),i=o(6);const n=(0,t.Ay)(i.A,{shouldForwardProp:e=>"halfWidth"!==e})`
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

  ${e=>!0===e.halfWidth&&a.AH`
      width: min(100%, 520px);
    `}
`;var l=o(3266),d=o(4414);const c=e=>{let{id:r,labelId:o,value:a,onChange:t,label:i,menuItemProps:c,register:s,name:u,error:p,required:g,defaultValue:h,disabled:m,withoutId:v}=e;return s&&v?(0,d.jsx)(n,{id:r,labelId:o,displayEmpty:!0,defaultValue:h,disabled:m,required:g,error:!!p,...s(u),value:a,onChange:t,label:i,children:c&&c.map(e=>(0,d.jsx)(l.A,{value:e,children:e},String(e)))}):s?(0,d.jsx)(n,{id:r,labelId:o,displayEmpty:!0,defaultValue:h,disabled:m,required:g,error:!!p,...s(u),value:a,onChange:t,label:i,children:c&&c.map(e=>(0,d.jsx)(l.A,{value:e.id,children:e.name},e.id))}):(0,d.jsx)(n,{id:r,labelId:o,value:a,onChange:t,label:i,required:!1!==g,disabled:m,error:!!p,children:c&&c.map(e=>(0,d.jsx)(l.A,{value:e.id,children:e.name},e.id))})}},9642(e,r,o){o.d(r,{A:()=>s});o(9950);var a=o(1866),t=o(9254),i=o(8145);const n=(0,t.Ay)(i.A,{shouldForwardProp:e=>"horizontalMargin"!==e&&"verticalMargin"!==e&&"halfWidth"!==e&&"topMargin"!==e})`
  width: 100%;
  min-width: 0;

  .MuiOutlinedInput-root {
    border-radius: 10px;
    background-color: var(--color-surface);
  }

  .MuiFormHelperText-root {
    font-weight: 650;
  }

  ${e=>!0===e.horizontalMargin&&a.AH`
      margin-left: 8px;
      margin-right: 8px;
      width: calc(100% - 16px);
    `}

  ${e=>!0===e.verticalMargin&&a.AH`
      margin-top: 8px;
      margin-bottom: 8px;
    `}

  ${e=>!0===e.topMargin&&a.AH`
        margin-top: 12px;
      `}

  ${e=>!0===e.halfWidth&&a.AH`
      width: min(100%, 520px);
    `}
`;var l=o(2046),d=o(7988),c=o(4414);const s=e=>{let{required:r=!1,value:o,onChange:a,label:t,verticalMargin:i=!1,horizontalMargin:s=!1,inputEvent:u,halfWidth:p=!1,disabled:g=!1,topMargin:h=!1,type:m="text",inputProps:v,register:x,name:b,error:f,fieldArray:A}=e;const y={disabled:g,halfWidth:p,required:r,topMargin:h,verticalMargin:i,horizontalMargin:s,value:o,label:t,type:m,inputProps:v,InputProps:u?{endAdornment:(0,c.jsx)(l.A,{position:"end",children:(0,c.jsx)(d.A,{onClick:()=>u()})})}:void 0};return x?(0,c.jsx)(n,{error:!!f,helperText:f,...y,onChange:a,...x(b)}):A?(0,c.jsx)(n,{onChange:a,error:!!f,helperText:f,...y}):(0,c.jsx)(n,{onChange:a,...y})}}}]);