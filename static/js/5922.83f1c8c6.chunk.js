"use strict";(globalThis.webpackChunkvivotech_crm_client||=[]).push([[5922],{5922(e,r,o){o.r(r),o.d(r,{default:()=>de});var a=o(8965),i=o(1252),t=o(9950),n=o(2433),l=o(3464),d=o(33),c=o(8170),s=o(8874),p=o(9739),u=o(226),g=o(5277),x=o(8145),m=o(2046),h=o(5333),v=o(3788),A=o(3011),b=o(6699),f=o(3230),j=o(2053),y=o(2235),w=o(3038),C=o(3812),k=o(9532),S=o(7762),z=o(9440),M=o(6592),I=o(5410),P=o(2074),W=o(132),D=o(7961),T=o(8977),$=o(475),H=o(3929),N=o(6089),R=o(3263),F=o(9985),B=o(6213),L=o(3274),q=o(6817),E=o(3266),Y=o(4195),O=o(1413),_=o(3978),G=o(7906),V=o(4414);function K(e){let{id:r,name:o,onDelete:a,t:i}=e;const[n,l]=(0,t.useState)(null);return(0,V.jsxs)(A.A,{sx:{display:"flex",gap:.5},children:[(0,V.jsx)(L.A,{title:i("\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"),children:(0,V.jsx)(h.A,{size:"small",component:P.k2,to:`/productsManagement/editProduct/productDetails/${r}`,"aria-label":`${i("\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435")}: ${o}`,children:(0,V.jsx)(F.A,{fontSize:"small"})})}),(0,V.jsx)(L.A,{title:i("Actions"),children:(0,V.jsx)(h.A,{size:"small","aria-label":`${i("Actions")}: ${o}`,"aria-haspopup":"menu","aria-expanded":Boolean(n),onClick:e=>l(e.currentTarget),children:(0,V.jsx)(B.A,{fontSize:"small"})})}),(0,V.jsxs)(q.A,{anchorEl:n,open:Boolean(n),onClose:()=>l(null),children:[(0,V.jsxs)(E.A,{component:P.k2,to:`/productsManagement/editProduct/${r}`,onClick:()=>l(null),children:[(0,V.jsx)(Y.A,{children:(0,V.jsx)(N.A,{fontSize:"small"})}),i("\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c")]}),(0,V.jsxs)(E.A,{component:P.k2,to:`/productsManagement/copyProduct/${r}`,onClick:()=>l(null),children:[(0,V.jsx)(Y.A,{children:(0,V.jsx)(H.A,{fontSize:"small"})}),i("\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c")]}),(0,V.jsxs)(E.A,{sx:{color:"error.main"},onClick:()=>{l(null),a(r)},children:[(0,V.jsx)(Y.A,{sx:{color:"inherit"},children:(0,V.jsx)(R.A,{fontSize:"small"})}),i("\u0423\u0434\u0430\u043b\u0438\u0442\u044c")]})]})]})}function U(e){let{product:r,locale:o}=e;const a=e=>null==e||e<=0?"\u041d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u0430":e.toLocaleString(o,{maximumFractionDigits:6});return(0,V.jsxs)(A.A,{sx:{py:1,lineHeight:1.5,fontVariantNumeric:"tabular-nums"},children:[(0,V.jsx)(A.A,{component:"strong",sx:{display:"block",fontSize:15},children:r.price&&r.price>0?`${r.price.toLocaleString(o,{minimumFractionDigits:2,maximumFractionDigits:2})} BYN`:"\u0426\u0435\u043d\u0430 \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u0430"}),(0,V.jsxs)(A.A,{sx:{fontSize:12,color:"text.secondary"},children:["\u0417\u0430\u043a\u0443\u043f\u043e\u0447\u043d\u0430\u044f: ",a(r.purchasePrice)]}),(0,V.jsxs)(A.A,{sx:{fontSize:12,color:"text.secondary"},children:["\u0421\u0435\u0431\u0435\u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c: ",a(r.costPrice)]}),(0,V.jsxs)(A.A,{sx:{fontSize:12,color:"text.secondary"},children:["\u041d\u0430\u0434\u0431\u0430\u0432\u043a\u0430: ",null==r.markupPercent?"\u041d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u0430":`${r.markupPercent.toLocaleString(o)} %`]})]})}const J=function(e,r){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(0,G.UN)((0,_.UK)()).locale;return[{field:"imageName",align:"center",headerName:"",width:56,sortable:!1,renderCell:e=>(0,V.jsx)(O.A,{sx:{width:36,height:36,borderRadius:"10px",bgcolor:"primary.light",color:"primary.main",fontSize:14,fontWeight:700},variant:"rounded",src:e.value,alt:e.row.name,children:String(e.row.name||"").slice(0,1)})},{field:"name",headerName:r("\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),minWidth:220,flex:1,renderCell:e=>(0,V.jsx)(A.A,{component:P.k2,to:`/productsManagement/editProduct/productDetails/${e.id}`,sx:{fontWeight:650,color:"text.primary",textDecoration:"none","&:hover":{color:"primary.main"}},children:e.value})},{field:"price",headerName:"\u0426\u0435\u043d\u044b, BYN",description:"\u041a\u043e\u043d\u0435\u0447\u043d\u0430\u044f \u0446\u0435\u043d\u0430, \u0437\u0430\u043a\u0443\u043f\u043e\u0447\u043d\u0430\u044f \u0446\u0435\u043d\u0430, \u0441\u0435\u0431\u0435\u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0438 \u043d\u0430\u0434\u0431\u0430\u0432\u043a\u0430",type:"number",align:"left",headerAlign:"left",width:220,renderCell:e=>(0,V.jsx)(U,{product:e.row,locale:o})},{field:"requiresPriceApproval",headerName:"\u0421\u0442\u0430\u0442\u0443\u0441 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438",width:150,renderCell:e=>(0,V.jsx)(L.A,{title:e.value?"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0437\u0430\u043a\u0443\u043f\u043e\u0447\u043d\u0443\u044e \u0446\u0435\u043d\u0443, \u0441\u0435\u0431\u0435\u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c, \u043d\u0430\u0434\u0431\u0430\u0432\u043a\u0443 \u0438 \u043a\u043e\u043d\u0435\u0447\u043d\u0443\u044e \u0446\u0435\u043d\u0443":"\u041a\u0430\u0440\u0442\u043e\u0447\u043a\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0434\u043b\u044f \u0437\u0430\u043a\u0430\u0437\u043e\u0432",children:(0,V.jsx)(g.A,{size:"small",color:e.value?"warning":"success",label:e.value?"\u041d\u0435\u0430\u043a\u0442\u0438\u0432\u043d\u0430: \u0446\u0435\u043d\u044b":"\u0410\u043a\u0442\u0438\u0432\u043d\u0430"})})},{field:"gtin",headerName:"GTIN",minWidth:136,flex:.55},{field:"category",headerName:r("\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f"),minWidth:144,flex:.6,renderCell:e=>e.value?(0,V.jsx)(g.A,{size:"small",label:e.value,sx:{bgcolor:"action.hover",color:"text.secondary"}}):"\u2014"},{field:"actions",headerName:r("Actions"),width:92,align:"right",headerAlign:"right",sortable:!1,filterable:!1,disableColumnMenu:!0,renderCell:o=>(0,V.jsx)(K,{id:o.id,name:o.row.name,onDelete:e,t:r})}]};var Q=o(3236),X=o(341),Z=o(344),ee=o(489),re=o(9292),oe=o(6458),ae=o(1225),ie=o(9348);const te=W.Ay.div({display:"flex",alignItems:"center",gap:"8px",color:"var(--color-muted)",fontSize:"13px",fontWeight:700}),ne=W.Ay.div({display:"grid",gridTemplateColumns:"minmax(0, 1fr) minmax(0, 0.6fr) auto",gap:"14px",alignItems:"end","@media (max-width: 820px)":{gridTemplateColumns:"1fr"}}),le={pageNumber:1,pageSize:25,productCategories:[],searchTerm:""},de=()=>{var e,r,o,W,H;const{t:N,locale:R}=(0,_.Bd)(),F=(0,n.A)("(max-width:700px)"),[B,L]=(0,t.useState)(le),{data:q,isLoading:E,isFetching:Y,isError:O,error:G,refetch:de}=(0,X.Kc)(B),{data:ce=[]}=(0,ee.md)({type:Z.h.Product}),[se,{isLoading:pe}]=(0,X.lY)({}),[ue,{isLoading:ge}]=(0,X.IT)(),[xe,me]=(0,t.useState)(""),he=(0,Q.A)(xe),[ve,Ae]=(0,t.useState)(!1),[be,fe]=(0,t.useState)(""),[je,ye]=(0,t.useState)([]),[we,Ce]=(0,t.useState)(!1),[ke,Se]=(0,t.useState)({page:0,pageSize:le.pageSize}),ze=[{id:"",name:N("All categories")},...ce.map(e=>({id:e.name,name:e.name}))],Me=e=>{Ae(!0),fe(e)};(0,t.useEffect)(()=>{L(e=>({...e,searchTerm:he,pageNumber:1})),Se(e=>({...e,page:0}))},[he]);const Ie=e=>{L(r=>({...r,pageNumber:e.page+1,pageSize:e.pageSize})),Se(e)};return E&&!xe?(0,V.jsx)(D.A,{}):O?(0,V.jsx)($.Dk,{children:(0,V.jsx)(i.A,{error:G,onRetry:de})}):(0,V.jsxs)($.Dk,{children:[(0,V.jsx)(ae.A,{open:we,selectedCount:je.length,isLoading:ge,onClose:()=>Ce(!1),onConfirm:async()=>{try{const e=await ue({ids:je.map(Number)}).unwrap();ye([]),Ce(!1),ie.oR.success(N("Deleted items: {count}",{count:e.deleted}))}catch(e){ie.oR.error((0,a.S)(e,N("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u044c.")))}}}),(0,V.jsxs)(l.A,{open:ve,onClose:()=>{pe||Ae(!1)},children:[(0,V.jsx)(d.A,{children:N("\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430")}),(0,V.jsx)(c.A,{children:(0,V.jsx)(s.A,{children:N("\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u044d\u0442\u043e\u0442 \u043f\u0440\u043e\u0434\u0443\u043a\u0442 \u0438\u0437 \u0441\u0438\u0441\u0442\u0435\u043c\u044b?")})}),(0,V.jsxs)(p.A,{children:[(0,V.jsx)(u.A,{disabled:pe,onClick:()=>Ae(!1),children:N("\u041e\u0442\u043c\u0435\u043d\u0430")}),(0,V.jsx)(u.A,{color:"error",disabled:pe,onClick:()=>{!async function(){try{await se(be).unwrap(),ie.oR.success(N("\u041f\u0440\u043e\u0434\u0443\u043a\u0442 \u0443\u0434\u0430\u043b\u0451\u043d.")),ye(e=>e.filter(e=>e!==be)),Ae(!1)}catch(e){ie.oR.error((0,a.S)(e,N("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u044c.")))}}()},autoFocus:!0,children:N("\u0423\u0434\u0430\u043b\u0438\u0442\u044c")})]})]}),(0,V.jsxs)($.zY,{children:[(0,V.jsxs)($.Fp,{children:[(0,V.jsx)($.sT,{children:N("\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b")}),(0,V.jsx)($.I_,{children:N("\u041a\u0430\u0442\u0430\u043b\u043e\u0433 \u0442\u043e\u0432\u0430\u0440\u043e\u0432 \u0441 \u0446\u0435\u043d\u0430\u043c\u0438, \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f\u043c\u0438, \u0431\u044b\u0441\u0442\u0440\u044b\u043c \u043f\u043e\u0438\u0441\u043a\u043e\u043c \u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f\u043c\u0438.")})]}),(0,V.jsx)(P.k2,{to:"createProduct",style:{textDecoration:"none"},children:(0,V.jsx)(T.A,{muiType:"success",text:N("\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0440\u043e\u0434\u0443\u043a\u0442"),leftIcon:(0,V.jsx)(k.A,{})})})]}),(0,V.jsxs)($.ui,{children:[(0,V.jsxs)($.M7,{children:[(0,V.jsxs)(te,{children:[(0,V.jsx)(z.A,{fontSize:"small"}),N("Catalog filters"),(0,V.jsx)(g.A,{size:"small",color:"primary",label:N("Found: {count}",{count:null!==(e=null===q||void 0===q?void 0:q.metaData.totalCount)&&void 0!==e?e:0})})]}),(0,V.jsxs)($.v_,{children:[je.length>0&&(0,V.jsx)(T.A,{muiType:"secondary",text:N("Clear selection"),leftIcon:(0,V.jsx)(S.A,{}),onClick:()=>ye([])}),je.length>0&&(0,V.jsx)(T.A,{muiType:"error",text:N("Delete selected ({count})",{count:je.length}),leftIcon:(0,V.jsx)(M.A,{}),disabled:0===je.length||ge,onClick:()=>Ce(!0)})]})]}),(0,V.jsxs)(ne,{children:[(0,V.jsx)(x.A,{size:"small",value:xe||"",label:N("\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u0430 \u0438\u043b\u0438 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435..."),onChange:e=>me(e.target.value),InputProps:{startAdornment:(0,V.jsx)(m.A,{position:"start",children:(0,V.jsx)(I.A,{fontSize:"small"})}),endAdornment:xe?(0,V.jsx)(m.A,{position:"end",children:(0,V.jsx)(h.A,{size:"small","aria-label":"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043f\u043e\u0438\u0441\u043a \u0442\u043e\u0432\u0430\u0440\u043e\u0432",onClick:()=>me(""),children:(0,V.jsx)(S.A,{fontSize:"small"})})}):void 0}}),(0,V.jsxs)(re.A,{children:[(0,V.jsx)(v.A,{children:N("Category")}),(0,V.jsx)(oe.A,{required:!1,value:null!==(r=B.categories)&&void 0!==r?r:"",label:N("Category"),menuItemProps:ze,onChange:e=>{L(r=>({...r,categories:String(e.target.value)||void 0,pageNumber:1})),Se(e=>({...e,page:0}))}})]}),(0,V.jsx)(T.A,{muiType:"secondary",text:N("Reset filters"),leftIcon:(0,V.jsx)(S.A,{}),disabled:!xe&&!B.categories,onClick:()=>{me(""),L({...le}),Se({page:0,pageSize:le.pageSize})}})]}),F?(0,V.jsxs)(A.A,{sx:{mt:2.5},children:[Y&&(0,V.jsx)(b.A,{"aria-label":"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0430"}),(0,V.jsxs)(f.A,{spacing:1.5,children:[!(null!==q&&void 0!==q&&q.items.length)&&(0,V.jsx)(j.A,{color:"text.secondary",children:"\u0422\u043e\u0432\u0430\u0440\u044b \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b. \u0418\u0437\u043c\u0435\u043d\u0438\u0442\u0435 \u043f\u043e\u0438\u0441\u043a \u0438\u043b\u0438 \u0441\u0431\u0440\u043e\u0441\u044c\u0442\u0435 \u0444\u0438\u043b\u044c\u0442\u0440\u044b."}),null===q||void 0===q?void 0:q.items.map(e=>(0,V.jsxs)(y.A,{variant:"outlined",sx:{p:1.5,minWidth:0},children:[(0,V.jsxs)(f.A,{direction:"row",alignItems:"flex-start",gap:1,children:[(0,V.jsx)(w.A,{size:"small",checked:je.includes(e.id),inputProps:{"aria-label":`\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0442\u043e\u0432\u0430\u0440: ${e.name}`},onChange:(r,o)=>ye(r=>o?[...r,e.id]:r.filter(r=>r!==e.id))}),(0,V.jsxs)(A.A,{sx:{flex:1,minWidth:0},children:[(0,V.jsx)(j.A,{component:P.k2,to:`/productsManagement/editProduct/productDetails/${e.id}`,sx:{fontWeight:700,color:"text.primary",textDecoration:"none",overflowWrap:"anywhere"},children:e.name}),(0,V.jsxs)(j.A,{variant:"caption",display:"block",color:"text.secondary",children:[e.category||"\u0411\u0435\u0437 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438",e.gtin?` \xb7 ${e.gtin}`:""]})]}),(0,V.jsx)(K,{id:e.id,name:e.name,onDelete:Me,t:N})]}),(0,V.jsx)(U,{product:e,locale:R}),(0,V.jsx)(g.A,{size:"small",color:e.requiresPriceApproval?"warning":"success",label:e.requiresPriceApproval?"\u041d\u0435\u0430\u043a\u0442\u0438\u0432\u043d\u0430: \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0446\u0435\u043d\u044b":"\u0410\u043a\u0442\u0438\u0432\u043d\u0430"})]},e.id))]}),(0,V.jsx)(C.A,{component:"div",count:null!==(o=null===q||void 0===q?void 0:q.metaData.totalCount)&&void 0!==o?o:0,page:ke.page,rowsPerPage:ke.pageSize,rowsPerPageOptions:[25,50,100],labelRowsPerPage:"\u041d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435",labelDisplayedRows:e=>{let{from:r,to:o,count:a}=e;return`${r}\u2013${o} \u0438\u0437 ${a}`},onPageChange:(e,r)=>Ie({...ke,page:r}),onRowsPerPageChange:e=>Ie({page:0,pageSize:Number(e.target.value)})})]}):(0,V.jsx)($.aN,{sx:{mt:2.5},pagination:!0,paginationMode:"server",rowCount:null!==(W=null===q||void 0===q?void 0:q.metaData.totalCount)&&void 0!==W?W:0,autoHeight:!0,rowHeight:112,rows:null!==(H=null===q||void 0===q?void 0:q.items)&&void 0!==H?H:[],columns:J(Me,N,R),loading:E||Y,onPaginationModelChange:e=>Ie(e),paginationModel:ke,pageSizeOptions:[25,50,100],disableRowSelectionOnClick:!0,checkboxSelection:!0,keepNonExistentRowsSelected:!0,rowSelectionModel:je,onRowSelectionModelChange:ye})]})]})}},1252(e,r,o){o.d(r,{A:()=>d});o(9950);var a=o(5429),i=o(226),t=o(8965),n=o(3978),l=o(4414);function d(e){let{error:r,onRetry:o}=e;const{t:d}=(0,n.Bd)();return(0,l.jsx)(a.A,{severity:"error",action:(0,l.jsx)(i.A,{onClick:()=>{o()},children:d("\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c")}),children:(0,t.S)(r,d("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435. \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441."))})}},1225(e,r,o){o(9950);var a=o(3464),i=o(33),t=o(8170),n=o(8874),l=o(9739),d=o(226),c=o(3978),s=o(4414);const p=e=>{let{open:r,selectedCount:o,isLoading:p=!1,onClose:u,onConfirm:g}=e;const{t:x}=(0,c.Bd)(),m=o>500;return(0,s.jsxs)(a.A,{open:r,onClose:p?void 0:u,children:[(0,s.jsx)(i.A,{children:x("Delete selected items?")}),(0,s.jsxs)(t.A,{children:[(0,s.jsx)(n.A,{children:x("You are about to delete {count} selected items. This action cannot be undone.",{count:o})}),m&&(0,s.jsx)(n.A,{color:"error",children:x("You can delete no more than 500 items at once.")})]}),(0,s.jsxs)(l.A,{children:[(0,s.jsx)(d.A,{onClick:u,disabled:p,children:x("Cancel")}),(0,s.jsx)(d.A,{color:"error",onClick:g,disabled:p||0===o||m,autoFocus:!0,children:p?x("Deleting..."):x("Delete selected ({count})",{count:o})})]})]})};o.d(r,["A",0,p])},3236(e,r,o){var a=o(9950);const i=function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;const[o,i]=(0,a.useState)(e);return(0,a.useEffect)(()=>{const o=setTimeout(()=>{i(e)},r);return()=>{clearTimeout(o)}},[e,r]),o};o.d(r,["A",0,i])},8977(e,r,o){o.d(r,{A:()=>d});o(9950);var a=o(1866),i=o(9254),t=o(226);const n=(0,i.Ay)(t.A,{shouldForwardProp:e=>"muiType"!==e&&"horizontalMargin"!==e&&"verticalMargin"!==e&&"bottomMargin"!==e})`
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
`;var l=o(4414);const d=e=>{let{fullWidth:r,type:o,onClick:a,leftIcon:i,rightIcon:t,text:d,muiType:c,horizontalMargin:s,verticalMargin:p,bottomMargin:u,disabled:g,ariaLabel:x}=e;return(0,l.jsx)(n,{fullWidth:r,type:o,muiType:c,startIcon:i,endIcon:t,onClick:a,verticalMargin:p||!1,horizontalMargin:s||!1,bottomMargin:u||!1,disabled:g,"aria-label":x,children:d})}},475(e,r,o){var a=o(9950),i=o(132),t=o(9254),n=o(8707),l=o(3978);const d=i.Ay.div({width:"100%",maxWidth:"1360px",minWidth:0,margin:"0 auto",textAlign:"left"}),c=i.Ay.div({display:"flex",flexWrap:"wrap",alignItems:"flex-start",justifyContent:"space-between",gap:"24px",marginBottom:"28px","@media (max-width: 760px)":{display:"grid"}}),s=i.Ay.div({display:"grid",gap:"10px",minWidth:0}),p=i.Ay.h1({margin:0,color:"var(--color-text)",fontSize:"clamp(28px, 3vw, 36px)",fontWeight:800,letterSpacing:"-.045em",lineHeight:1.18,"@media (max-width: 760px)":{fontSize:"25px"}}),u=i.Ay.p({maxWidth:"720px",margin:0,color:"var(--color-muted)",fontSize:"14px",fontWeight:450,lineHeight:1.6}),g=i.Ay.section({width:"100%",minWidth:0,padding:"var(--panel-padding)",background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"var(--radius-xl)",boxShadow:"var(--shadow-soft)"}),x=i.Ay.div({display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"12px",width:"100%",marginBottom:"14px","@media (max-width: 760px)":{display:"grid"}}),m=i.Ay.div({display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"}),h=i.Ay.div({display:"grid",alignItems:"start",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",gap:"12px","@media (max-width: 760px)":{gridTemplateColumns:"1fr"}}),v=i.Ay.form({display:"grid",gridTemplateColumns:"minmax(0, 1fr)",alignItems:"start",gap:"14px",width:"min(720px, 100%)",minWidth:0,padding:"var(--panel-padding)",background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"16px",boxShadow:"var(--shadow-soft)","@media (max-width: 560px)":{gap:"12px",padding:"14px"}}),A=i.Ay.div({display:"grid",placeItems:"center",gap:"8px",minHeight:"220px",padding:"28px",color:"var(--color-muted)",textAlign:"center",background:"var(--color-surface)",border:"1px dashed var(--color-border-strong)",borderRadius:"16px"}),b=(i.Ay.div({marginBottom:"8px",color:"var(--color-danger)",fontSize:"13px",fontWeight:650}),(0,t.Ay)(n.zh)({width:"100%",minWidth:0,"&.MuiDataGrid-autoHeight":{overflow:"visible","& .MuiDataGrid-main":{overflow:"visible"},"& .MuiDataGrid-columnHeaders":{position:"sticky",top:"var(--app-header-height)",zIndex:2,backgroundColor:"var(--color-surface-soft)",boxShadow:"0 1px 0 var(--color-border)"}}}));o.d(r,["Dk",0,d,"Fp",0,s,"I_",0,u,"M7",0,x,"aN",0,e=>{const{language:r}=(0,l.Bd)(),o=(0,a.useMemo)(()=>({...(0,l.it)(r),...e.localeText}),[r,e.localeText]);return a.createElement(b,{...e,localeText:o})},"kA",0,v,"pp",0,A,"sT",0,p,"ui",0,g,"vY",0,h,"v_",0,m,"zY",0,c])},9292(e,r,o){o.d(r,{A:()=>d});o(9950);var a=o(1866),i=o(9254),t=o(5979);const n=(0,i.Ay)(t.A,{shouldForwardProp:e=>"horizontalMargin"!==e&&"verticalMargin"!==e})`
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
`;var l=o(4414);const d=e=>{let{verticalMargin:r,horizontalMargin:o,error:a,children:i}=e;return(0,l.jsx)(n,{fullWidth:!0,error:a,horizontalMargin:o,verticalMargin:r,children:i})}},6458(e,r,o){o.d(r,{A:()=>c});o(9950);var a=o(1866),i=o(9254),t=o(6);const n=(0,i.Ay)(t.A,{shouldForwardProp:e=>"halfWidth"!==e})`
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
`;var l=o(3266),d=o(4414);const c=e=>{let{id:r,labelId:o,value:a,onChange:i,label:t,menuItemProps:c,register:s,name:p,error:u,required:g,defaultValue:x,disabled:m,withoutId:h}=e;return s&&h?(0,d.jsx)(n,{id:r,labelId:o,displayEmpty:!0,defaultValue:x,disabled:m,required:g,error:!!u,...s(p),value:a,onChange:i,label:t,children:c&&c.map(e=>(0,d.jsx)(l.A,{value:e,children:e},String(e)))}):s?(0,d.jsx)(n,{id:r,labelId:o,displayEmpty:!0,defaultValue:x,disabled:m,required:g,error:!!u,...s(p),value:a,onChange:i,label:t,children:c&&c.map(e=>(0,d.jsx)(l.A,{value:e.id,children:e.name},e.id))}):(0,d.jsx)(n,{id:r,labelId:o,value:a,onChange:i,label:t,required:!1!==g,disabled:m,error:!!u,children:c&&c.map(e=>(0,d.jsx)(l.A,{value:e.id,children:e.name},e.id))})}}}]);