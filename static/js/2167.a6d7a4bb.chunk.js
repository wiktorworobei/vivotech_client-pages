"use strict";(globalThis.webpackChunkvivotech_crm_client||=[]).push([[2167],{2167(r,e,o){o.r(e),o.d(e,{default:()=>O});var a=o.cw(function(r,e){var o=n();e.A=void 0;var a=o(t()),l=i();e.A=(0,a.default)((0,l.jsx)("path",{d:"M3 10h11v2H3zm0-2h11V6H3zm0 8h7v-2H3zm15.01-3.13.71-.71c.39-.39 1.02-.39 1.41 0l.71.71c.39.39.39 1.02 0 1.41l-.71.71zm-.71.71-5.3 5.3V21h2.12l5.3-5.3z"}),"EditNote")}),t=()=>o(9526),i=()=>o(4414),n=()=>o(4994),l=o(9950),d=o(3464),c=o(33),s=o(8170),u=o(8874),p=o(9739),g=o(226),h=o(3788),m=o(9223),x=o(7565);i();var v=o(7762),b=o(132),f=o(7961),A=o(9642),y=o(8977),w=o(475),j=o(3236),S=o(7489),k=o(4117),M=o(1413);const C=(r,e)=>[{field:"imageName",align:"center",headerName:"",width:64,renderCell:r=>(0,i().jsx)(M.A,{sx:{width:36,height:36,borderRadius:"10px"},variant:"rounded",src:r.value,alt:r.row.name})},{field:"name",headerName:e("\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),minWidth:260,flex:1},{field:"price",headerName:e("\u0426\u0435\u043d\u0430, BYN"),type:"number",align:"center",width:120},{field:"category",headerName:e("\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f"),sortable:!0,minWidth:150,flex:.7},{field:"count",headerName:e("\u041e\u0441\u0442\u0430\u0442\u043e\u043a, \u0448\u0442."),sortable:!0,align:"center",width:130},{field:"Edit",headerName:e("\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"),type:"actions",width:104,getActions:o=>[(0,i().jsx)(S.Z,{icon:(0,i().jsx)(k.A,{}),label:e("\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043e\u0441\u0442\u0430\u0442\u043e\u043a"),onClick:()=>r(o.row)})]}];var I=o(6814),z=o(5383),T=o(9348);const H=b.Ay.form({display:"grid",gap:"10px",marginTop:"12px"}),W=r=>{let{id:e,name:o,count:a,handleClose:t}=r;const{t:n}=(0,I.Bd)(),[d,c]=(0,l.useState)(a),[s,{isLoading:u}]=(0,z.RE)();return(0,i().jsxs)(H,{onSubmit:r=>(async r=>{if(r.preventDefault(),e){const r={count:d,id:e};try{await s(r).unwrap(),T.oR.success(n("\u041e\u0441\u0442\u0430\u0442\u043e\u043a \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430 \u0437\u0430\u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d")),t()}catch{T.oR.error(n("\u041e\u0448\u0438\u0431\u043a\u0430 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0441\u043a\u043b\u0430\u0434\u043e\u043c"))}}})(r),children:[(0,i().jsx)(A.A,{disabled:!0,value:o,label:n("\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435")}),(0,i().jsx)(A.A,{value:d,type:"number",label:n("\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"),required:!0,onChange:r=>c(Number(r.target.value))}),(0,i().jsx)(y.A,{fullWidth:!0,text:n("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),muiType:"success",type:"submit",disabled:u})]})};var N=o(9823),B=o(344),E=o(9292),$=o(6458);let q=function(r){return r[r.Set=0]="Set",r[r.Add=1]="Add",r[r.Subtract=2]="Subtract",r}({});var P=o(8965);const R=r=>{var e;let{open:o,selectedIds:a,generationBatchId:t,targetLabel:n,onClose:u,onSubmit:g}=r;const{t:m}=(0,I.Bd)(),[x,v]=(0,l.useState)(q.Set),[b,f]=(0,l.useState)(""),[w,j]=(0,l.useState)(""),[S,k]=(0,l.useState)(!1),M=(null!==(e=null===a||void 0===a?void 0:a.length)&&void 0!==e?e:0)>500,C=[{id:q.Set,name:m("Set exact stock quantity")},{id:q.Add,name:m("Add to current stock")},{id:q.Subtract,name:m("Subtract from current stock")}],z=()=>{S||(f(""),j(""),u())};return(0,i().jsx)(d.A,{open:o,onClose:z,fullWidth:!0,maxWidth:"sm",children:(0,i().jsxs)("form",{onSubmit:async r=>{if(r.preventDefault(),M)return;const e=Number(b);if(!Number.isFinite(e)||e<0||x!==q.Set&&0===e)j(m("Enter a valid non-negative stock quantity."));else{k(!0),j("");try{const r=await g({ids:t?void 0:a,generationBatchId:t,mode:x,value:e});T.oR.success(m("Updated stock items: {count}",{count:r.updated})),f(""),u()}catch(o){j((0,P.S)(o,m("Bulk stock editing failed.")))}finally{k(!1)}}},children:[(0,i().jsx)(c.A,{children:m("Bulk stock editing")}),(0,i().jsxs)(s.A,{sx:{display:"grid",gap:2,paddingTop:"10px !important"},children:[(0,i().jsx)("div",{children:n}),(0,i().jsxs)(E.A,{children:[(0,i().jsx)(h.A,{children:m("Stock operation")}),(0,i().jsx)($.A,{value:x,label:m("Stock operation"),menuItemProps:C,onChange:r=>v(Number(r.target.value))})]}),(0,i().jsx)(A.A,{fieldArray:!0,required:!0,type:"number",value:b,label:m("Quantity"),onChange:r=>f(r.target.value)}),M&&(0,i().jsx)("p",{style:{margin:0,color:"var(--color-danger)"},children:m("You can edit no more than 500 stock items at once.")}),w&&(0,i().jsx)("p",{style:{margin:0,color:"var(--color-danger)"},children:w})]}),(0,i().jsxs)(p.A,{children:[(0,i().jsx)(y.A,{type:"button",muiType:"secondary",disabled:S,text:m("Cancel"),onClick:z}),(0,i().jsx)(y.A,{type:"submit",muiType:"success",disabled:S||M,text:m(S?"Saving...":"Apply changes")})]})]})})},F=b.Ay.div({display:"flex",alignItems:"center",gap:"8px",color:"var(--color-muted)",fontSize:"13px",fontWeight:760}),D=b.Ay.div({display:"grid",gridTemplateColumns:"minmax(0, 1fr) minmax(0, 0.65fr)",gap:"14px",alignItems:"end","@media (max-width: 760px)":{gridTemplateColumns:"1fr"}}),O=()=>{var r,e;const{t:o}=(0,I.Bd)(),[t,n]=(0,l.useState)({pageNumber:1,pageSize:25,productCategories:[],searchTerm:""}),[b,S]=(0,l.useState)(""),k=(0,j.A)(b),{data:M,isLoading:T,isFetching:H}=(0,z.u7)(t),{data:q=[]}=(0,N.H3)(),[P]=(0,z.Pl)(),O=(null===M||void 0===M?void 0:M.items)||[],_=null===M||void 0===M?void 0:M.metaData,[G,L]=(0,l.useState)(!1),[V,Y]=(0,l.useState)(),[Q,U]=(0,l.useState)({pageSize:t.pageSize,page:t.pageNumber-1}),[Z,J]=(0,l.useState)([]),[K,X]=(0,l.useState)(null),rr=[{id:"",name:o("All generation batches")},...q.filter(r=>r.itemType===B.h.Product).map(r=>({id:r.id,name:r.name}))],er=q.find(r=>r.id===t.generationBatchId),or=()=>{L(!1)};(0,l.useEffect)(()=>{n(r=>({...r,searchTerm:k,pageNumber:1})),U(r=>({...r,page:0}))},[k]);return T?(0,i().jsx)(f.A,{}):(0,i().jsxs)(w.Dk,{children:[(0,i().jsx)(R,{open:null!==K,selectedIds:"selection"===K?Z.map(Number):void 0,generationBatchId:"batch"===K?t.generationBatchId:void 0,targetLabel:"batch"===K?o("Entire generation batch: {name}",{name:null!==(r=null===er||void 0===er?void 0:er.name)&&void 0!==r?r:""}):o("Selected products: {count}",{count:Z.length}),onClose:()=>X(null),onSubmit:async r=>{const e=await P(r).unwrap();return J([]),X(null),e}}),(0,i().jsxs)(d.A,{open:G,onClose:()=>or(),children:[(0,i().jsx)(c.A,{children:o("\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043e\u0441\u0442\u0430\u0442\u043a\u043e\u0432 \u043d\u0430 \u0441\u043a\u043b\u0430\u0434\u0435")}),(0,i().jsxs)(s.A,{children:[(0,i().jsx)(u.A,{children:o("\u0412\u043d\u0435\u0441\u0438\u0442\u0435 \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0442\u043e\u0432\u0430\u0440\u0430 \u043d\u0430 \u0441\u043a\u043b\u0430\u0434\u0435.")}),(0,i().jsx)(W,{id:null===V||void 0===V?void 0:V.id,name:null===V||void 0===V?void 0:V.name,count:null===V||void 0===V?void 0:V.count,handleClose:or})]}),(0,i().jsx)(p.A,{children:(0,i().jsx)(g.A,{onClick:()=>or(),children:o("\u041e\u0442\u043c\u0435\u043d\u0430")})})]}),(0,i().jsx)(w.zY,{children:(0,i().jsxs)(w.Fp,{children:[(0,i().jsx)(w.sT,{children:o("\u0421\u043a\u043b\u0430\u0434")}),(0,i().jsx)(w.I_,{children:o("\u041e\u0441\u0442\u0430\u0442\u043a\u0438 \u0442\u043e\u0432\u0430\u0440\u043e\u0432, \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c \u043d\u0430\u043b\u0438\u0447\u0438\u044f \u0438 \u0431\u044b\u0441\u0442\u0440\u043e\u0435 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430.")})]})}),(0,i().jsxs)(w.ui,{children:[(0,i().jsxs)(w.M7,{children:[(0,i().jsxs)(F,{children:[(0,i().jsx)(m.A,{fontSize:"small"}),o("\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0441\u043a\u043b\u0430\u0434\u0443")]}),(0,i().jsxs)(w.v_,{children:[Z.length>0&&(0,i().jsx)(y.A,{text:o("Clear selection"),leftIcon:(0,i().jsx)(v.A,{}),muiType:"secondary",onClick:()=>J([])}),(0,i().jsx)(y.A,{text:o("Edit selected stock ({count})",{count:Z.length}),leftIcon:(0,i().jsx)(a().A,{}),muiType:"edit",disabled:0===Z.length,onClick:()=>X("selection")}),t.generationBatchId&&(0,i().jsx)(y.A,{text:o("Edit entire batch stock"),leftIcon:(0,i().jsx)(x.A,{}),muiType:"success",onClick:()=>X("batch")})]})]}),(0,i().jsxs)(D,{children:[(0,i().jsx)(A.A,{verticalMargin:!0,value:b||"",label:o("\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u0430 \u0438\u043b\u0438 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435..."),onChange:r=>S(r.target.value)}),(0,i().jsxs)(E.A,{children:[(0,i().jsx)(h.A,{children:o("Generation batch")}),(0,i().jsx)($.A,{required:!1,value:null!==(e=t.generationBatchId)&&void 0!==e?e:"",label:o("Generation batch"),menuItemProps:rr,onChange:r=>{const e=String(r.target.value)||void 0;n(r=>({...r,generationBatchId:e,pageNumber:1})),U(r=>({...r,page:0})),J([])}})]})]}),(0,i().jsx)(w.aN,{loading:H,pagination:!0,paginationMode:"server",rowCount:(null===_||void 0===_?void 0:_.totalCount)||0,autoHeight:!0,rows:O,columns:C(r=>{Y(r),L(!0)},o),paginationModel:Q,onPaginationModelChange:r=>(r=>{n(e=>({...e,pageNumber:r.page+1,pageSize:r.pageSize})),U(r)})(r),pageSizeOptions:[25,50,100],disableRowSelectionOnClick:!0,checkboxSelection:!0,keepNonExistentRowsSelected:!0,rowSelectionModel:Z,onRowSelectionModelChange:J})]})]})}},3236(r,e,o){var a=o(9950);const t=function(r){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;const[o,t]=(0,a.useState)(r);return(0,a.useEffect)(()=>{const o=setTimeout(()=>{t(r)},e);return()=>{clearTimeout(o)}},[r,e]),o};o.d(e,["A",0,t])},8977(r,e,o){o.d(e,{A:()=>d});o(9950);var a=o(1866),t=o(9254),i=o(226);const n=(0,t.Ay)(i.A,{shouldForwardProp:r=>"muiType"!==r&&"horizontalMargin"!==r&&"verticalMargin"!==r&&"bottomMargin"!==r})`
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
`;var l=o(4414);const d=r=>{let{fullWidth:e,type:o,onClick:a,leftIcon:t,rightIcon:i,text:d,muiType:c,horizontalMargin:s,verticalMargin:u,bottomMargin:p,disabled:g,ariaLabel:h}=r;return(0,l.jsx)(n,{fullWidth:e,type:o,muiType:c,startIcon:t,endIcon:i,onClick:a,verticalMargin:u||!1,horizontalMargin:s||!1,bottomMargin:p||!1,disabled:g,"aria-label":h,children:d})}},475(r,e,o){var a=o(9950),t=o(132),i=o(9254),n=o(34),l=o(6814);const d=t.Ay.div({width:"100%",maxWidth:"1360px",minWidth:0,margin:"0 auto",textAlign:"left"}),c=t.Ay.div({display:"flex",flexWrap:"wrap",alignItems:"flex-start",justifyContent:"space-between",gap:"24px",marginBottom:"28px","@media (max-width: 760px)":{display:"grid"}}),s=t.Ay.div({display:"grid",gap:"10px",minWidth:0}),u=t.Ay.h1({margin:0,color:"var(--color-text)",fontSize:"clamp(28px, 3vw, 36px)",fontWeight:800,letterSpacing:"-.045em",lineHeight:1.18,"@media (max-width: 760px)":{fontSize:"25px"}}),p=t.Ay.p({maxWidth:"720px",margin:0,color:"var(--color-muted)",fontSize:"14px",fontWeight:450,lineHeight:1.6}),g=t.Ay.section({width:"100%",minWidth:0,padding:"var(--panel-padding)",background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"var(--radius-xl)",boxShadow:"var(--shadow-soft)"}),h=t.Ay.div({display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"12px",width:"100%",marginBottom:"14px","@media (max-width: 760px)":{display:"grid"}}),m=t.Ay.div({display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"}),x=t.Ay.div({display:"grid",alignItems:"start",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",gap:"12px","@media (max-width: 760px)":{gridTemplateColumns:"1fr"}}),v=t.Ay.form({display:"grid",gridTemplateColumns:"minmax(0, 1fr)",alignItems:"start",gap:"14px",width:"min(720px, 100%)",minWidth:0,padding:"var(--panel-padding)",background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"16px",boxShadow:"var(--shadow-soft)","@media (max-width: 560px)":{gap:"12px",padding:"14px"}}),b=t.Ay.div({display:"grid",placeItems:"center",gap:"8px",minHeight:"220px",padding:"28px",color:"var(--color-muted)",textAlign:"center",background:"var(--color-surface)",border:"1px dashed var(--color-border-strong)",borderRadius:"16px"}),f=(t.Ay.div({marginBottom:"8px",color:"var(--color-danger)",fontSize:"13px",fontWeight:650}),(0,i.Ay)(n.zh)({width:"100%",minWidth:0,"&.MuiDataGrid-autoHeight":{overflow:"visible","& .MuiDataGrid-main":{overflow:"visible"},"& .MuiDataGrid-columnHeaders":{position:"sticky",top:"var(--app-header-height)",zIndex:2,backgroundColor:"var(--color-surface-soft)",boxShadow:"0 1px 0 var(--color-border)"}}}));o.d(e,["Dk",0,d,"Fp",0,s,"I_",0,p,"M7",0,h,"aN",0,r=>{const{language:e}=(0,l.Bd)(),o=(0,a.useMemo)(()=>({...(0,l.it)(e),...r.localeText}),[e,r.localeText]);return a.createElement(f,{...r,localeText:o})},"kA",0,v,"pp",0,b,"sT",0,u,"ui",0,g,"vY",0,x,"v_",0,m,"zY",0,c])},9292(r,e,o){o.d(e,{A:()=>d});o(9950);var a=o(1866),t=o(9254),i=o(5979);const n=(0,t.Ay)(i.A,{shouldForwardProp:r=>"horizontalMargin"!==r&&"verticalMargin"!==r})`
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
`;var l=o(4414);const d=r=>{let{verticalMargin:e,horizontalMargin:o,error:a,children:t}=r;return(0,l.jsx)(n,{fullWidth:!0,error:a,horizontalMargin:o,verticalMargin:e,children:t})}},6458(r,e,o){o.d(e,{A:()=>c});o(9950);var a=o(1866),t=o(9254),i=o(6);const n=(0,t.Ay)(i.A,{shouldForwardProp:r=>"halfWidth"!==r})`
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
`;var l=o(3266),d=o(4414);const c=r=>{let{value:e,onChange:o,label:a,menuItemProps:t,register:i,name:c,error:s,required:u,defaultValue:p,disabled:g,withoutId:h}=r;return i&&h?(0,d.jsx)(n,{displayEmpty:!0,defaultValue:p,disabled:g,required:u,error:!!s,...i(c),value:e,onChange:o,label:a,children:t&&t.map(r=>(0,d.jsx)(l.A,{value:r,children:r},String(r)))}):i?(0,d.jsx)(n,{displayEmpty:!0,defaultValue:p,disabled:g,required:u,error:!!s,...i(c),value:e,onChange:o,label:a,children:t&&t.map(r=>(0,d.jsx)(l.A,{value:r.id,children:r.name},r.id))}):(0,d.jsx)(n,{value:e,onChange:o,label:a,required:!1!==u,disabled:g,children:t&&t.map(r=>(0,d.jsx)(l.A,{value:r.id,children:r.name},r.id))})}},9642(r,e,o){o.d(e,{A:()=>s});o(9950);var a=o(1866),t=o(9254),i=o(8145);const n=(0,t.Ay)(i.A,{shouldForwardProp:r=>"horizontalMargin"!==r&&"verticalMargin"!==r&&"halfWidth"!==r&&"topMargin"!==r})`
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
`;var l=o(2046),d=o(7988),c=o(4414);const s=r=>{let{required:e=!1,value:o,onChange:a,label:t,verticalMargin:i=!1,horizontalMargin:s=!1,inputEvent:u,halfWidth:p=!1,disabled:g=!1,topMargin:h=!1,type:m="text",register:x,name:v,error:b,fieldArray:f}=r;const A={disabled:g,halfWidth:p,required:e,topMargin:h,verticalMargin:i,horizontalMargin:s,value:o,label:t,type:m,InputProps:u?{endAdornment:(0,c.jsx)(l.A,{position:"end",children:(0,c.jsx)(d.A,{onClick:()=>u()})})}:void 0};return x?(0,c.jsx)(n,{error:!!b,helperText:b,...A,onChange:a,...x(v)}):f?(0,c.jsx)(n,{onChange:a,error:!!b,helperText:b,...A}):(0,c.jsx)(n,{onChange:a,...A})}}}]);