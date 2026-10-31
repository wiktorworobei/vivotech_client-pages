"use strict";(globalThis.webpackChunkvivotech_crm_client||=[]).push([[5922],{5154(e,r,o){function a(e){const r=e=>null!=e&&Number.isFinite(e)&&e>0;return[!r(e.purchasePrice)&&"\u0437\u0430\u043a\u0443\u043f\u043e\u0447\u043d\u0430\u044f \u0446\u0435\u043d\u0430",!r(e.costPrice)&&"\u0441\u0435\u0431\u0435\u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c",(null==e.markupPercent||!Number.isFinite(e.markupPercent)||e.markupPercent<0)&&"\u043d\u0430\u0434\u0431\u0430\u0432\u043a\u0430",!r(e.price)&&"\u043a\u043e\u043d\u0435\u0447\u043d\u0430\u044f \u0446\u0435\u043d\u0430"].filter(e=>Boolean(e))}o.d(r,{k:()=>a});o.d(r,["V",0,e=>Boolean(e.requiresPriceApproval)||a(e).length>0])},5922(e,r,o){o.r(r),o.d(r,{default:()=>ce});var a=o(8965),i=o(1252),t=o(9950),n=o(2433),l=o(3464),d=o(33),c=o(8170),s=o(8874),u=o(9739),p=o(226),g=o(5277),m=o(8145),x=o(2046),h=o(5333),v=o(3788),A=o(3011),b=o(6699),f=o(3230),j=o(2053),y=o(2235),w=o(3038),C=o(3812),k=o(9532),S=o(7762),z=o(9440),M=o(6592),P=o(5410),I=o(2074),W=o(132),D=o(7961),T=o(8977),N=o(475),$=o(3929),H=o(6089),R=o(3263),F=o(9985),B=o(6213),L=o(3274),E=o(6817),V=o(3266),Y=o(4195),q=o(1413),O=o(3978),_=o(7906),G=o(5154),K=o(4414);function U(e){let{id:r,name:o,onDelete:a,t:i}=e;const[n,l]=(0,t.useState)(null);return(0,K.jsxs)(A.A,{sx:{display:"flex",gap:.5},children:[(0,K.jsx)(L.A,{title:i("\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"),children:(0,K.jsx)(h.A,{size:"small",component:I.k2,to:`/productsManagement/editProduct/productDetails/${r}`,"aria-label":`${i("\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435")}: ${o}`,children:(0,K.jsx)(F.A,{fontSize:"small"})})}),(0,K.jsx)(L.A,{title:i("Actions"),children:(0,K.jsx)(h.A,{size:"small","aria-label":`${i("Actions")}: ${o}`,"aria-haspopup":"menu","aria-expanded":Boolean(n),onClick:e=>l(e.currentTarget),children:(0,K.jsx)(B.A,{fontSize:"small"})})}),(0,K.jsxs)(E.A,{anchorEl:n,open:Boolean(n),onClose:()=>l(null),children:[(0,K.jsxs)(V.A,{component:I.k2,to:`/productsManagement/editProduct/${r}`,onClick:()=>l(null),children:[(0,K.jsx)(Y.A,{children:(0,K.jsx)(H.A,{fontSize:"small"})}),i("\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c")]}),(0,K.jsxs)(V.A,{component:I.k2,to:`/productsManagement/copyProduct/${r}`,onClick:()=>l(null),children:[(0,K.jsx)(Y.A,{children:(0,K.jsx)($.A,{fontSize:"small"})}),i("\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c")]}),(0,K.jsxs)(V.A,{sx:{color:"error.main"},onClick:()=>{l(null),a(r)},children:[(0,K.jsx)(Y.A,{sx:{color:"inherit"},children:(0,K.jsx)(R.A,{fontSize:"small"})}),i("\u0423\u0434\u0430\u043b\u0438\u0442\u044c")]})]})]})}function J(e){let{product:r,locale:o}=e;const a=e=>null==e||e<=0?"\u041d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u0430":e.toLocaleString(o,{maximumFractionDigits:6});return(0,K.jsxs)(A.A,{sx:{py:1,lineHeight:1.5,fontVariantNumeric:"tabular-nums"},children:[(0,K.jsx)(A.A,{sx:{fontSize:11,color:"text.secondary"},children:"\u041a\u043e\u043d\u0435\u0447\u043d\u0430\u044f \u0446\u0435\u043d\u0430"}),(0,K.jsx)(A.A,{component:"strong",sx:{display:"block",fontSize:15},children:r.price&&r.price>0?`${r.price.toLocaleString(o,{minimumFractionDigits:2,maximumFractionDigits:2})} BYN`:"\u0426\u0435\u043d\u0430 \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u0430"}),(0,K.jsxs)(A.A,{sx:{fontSize:12,color:"text.secondary"},children:["\u0417\u0430\u043a\u0443\u043f\u043e\u0447\u043d\u0430\u044f \u0446\u0435\u043d\u0430: ",a(r.purchasePrice)]}),(0,K.jsxs)(A.A,{sx:{fontSize:12,color:"text.secondary"},children:["\u0421\u0435\u0431\u0435\u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c: ",a(r.costPrice)]}),(0,K.jsxs)(A.A,{sx:{fontSize:12,color:"text.secondary"},children:["\u041d\u0430\u0434\u0431\u0430\u0432\u043a\u0430: ",null==r.markupPercent?"\u041d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u0430":`${r.markupPercent.toLocaleString(o)} %`]})]})}const Q=function(e,r){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(0,_.UN)((0,O.UK)()).locale;return[{field:"imageName",align:"center",headerName:"",width:56,sortable:!1,renderCell:e=>(0,K.jsx)(q.A,{sx:{width:36,height:36,borderRadius:"10px",bgcolor:"primary.light",color:"primary.main",fontSize:14,fontWeight:700},variant:"rounded",src:e.value,alt:e.row.name,children:String(e.row.name||"").slice(0,1)})},{field:"name",headerName:r("\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),minWidth:220,flex:1,renderCell:e=>(0,K.jsx)(A.A,{component:I.k2,to:`/productsManagement/editProduct/productDetails/${e.id}`,sx:{fontWeight:650,color:"text.primary",textDecoration:"none","&:hover":{color:"primary.main"}},children:e.value})},{field:"price",headerName:"\u0426\u0435\u043d\u044b, BYN",description:"\u041a\u043e\u043d\u0435\u0447\u043d\u0430\u044f \u0446\u0435\u043d\u0430, \u0437\u0430\u043a\u0443\u043f\u043e\u0447\u043d\u0430\u044f \u0446\u0435\u043d\u0430, \u0441\u0435\u0431\u0435\u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0438 \u043d\u0430\u0434\u0431\u0430\u0432\u043a\u0430",type:"number",align:"left",headerAlign:"left",width:220,renderCell:e=>(0,K.jsx)(J,{product:e.row,locale:o})},{field:"requiresPriceApproval",headerName:"\u0421\u0442\u0430\u0442\u0443\u0441 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438",width:150,renderCell:e=>{const r=(0,G.V)(e.row);return(0,K.jsx)(L.A,{title:r?"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0437\u0430\u043a\u0443\u043f\u043e\u0447\u043d\u0443\u044e \u0446\u0435\u043d\u0443, \u0441\u0435\u0431\u0435\u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c, \u043d\u0430\u0434\u0431\u0430\u0432\u043a\u0443 \u0438 \u043a\u043e\u043d\u0435\u0447\u043d\u0443\u044e \u0446\u0435\u043d\u0443; \u0443\u0442\u0432\u0435\u0440\u0436\u0434\u0451\u043d\u043d\u044b\u0435 \u0446\u0435\u043d\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u044b":"\u041a\u0430\u0440\u0442\u043e\u0447\u043a\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0434\u043b\u044f \u0437\u0430\u043a\u0430\u0437\u043e\u0432",children:(0,K.jsx)(g.A,{size:"small",color:r?"warning":"success",label:r?"\u041d\u0435\u0430\u043a\u0442\u0438\u0432\u043d\u0430: \u0446\u0435\u043d\u044b":"\u0410\u043a\u0442\u0438\u0432\u043d\u0430"})})}},{field:"gtin",headerName:"GTIN",minWidth:136,flex:.55},{field:"category",headerName:r("\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f"),minWidth:144,flex:.6,renderCell:e=>e.value?(0,K.jsx)(g.A,{size:"small",label:e.value,sx:{bgcolor:"action.hover",color:"text.secondary"}}):"\u2014"},{field:"actions",headerName:r("Actions"),width:92,align:"right",headerAlign:"right",sortable:!1,filterable:!1,disableColumnMenu:!0,renderCell:o=>(0,K.jsx)(U,{id:o.id,name:o.row.name,onDelete:e,t:r})}]};var X=o(3236),Z=o(341),ee=o(344),re=o(489),oe=o(9292),ae=o(6458),ie=o(1225),te=o(9348);const ne=W.Ay.div({display:"flex",alignItems:"center",gap:"8px",color:"var(--color-muted)",fontSize:"13px",fontWeight:700}),le=W.Ay.div({display:"grid",gridTemplateColumns:"minmax(0, 1fr) minmax(0, 0.6fr) auto",gap:"14px",alignItems:"end","@media (max-width: 820px)":{gridTemplateColumns:"1fr"}}),de={pageNumber:1,pageSize:25,productCategories:[],searchTerm:""},ce=()=>{var e,r,o,W,$;const{t:H,locale:R}=(0,O.Bd)(),F=(0,n.A)("(max-width:700px)"),[B,L]=(0,t.useState)(de),{data:E,isLoading:V,isFetching:Y,isError:q,error:_,refetch:ce}=(0,Z.Kc)(B),{data:se=[]}=(0,re.md)({type:ee.h.Product}),[ue,{isLoading:pe}]=(0,Z.lY)({}),[ge,{isLoading:me}]=(0,Z.IT)(),[xe,he]=(0,t.useState)(""),ve=(0,X.A)(xe),[Ae,be]=(0,t.useState)(!1),[fe,je]=(0,t.useState)(""),[ye,we]=(0,t.useState)([]),[Ce,ke]=(0,t.useState)(!1),[Se,ze]=(0,t.useState)({page:0,pageSize:de.pageSize}),Me=[{id:"",name:H("All categories")},...se.map(e=>({id:e.name,name:e.name}))],Pe=e=>{be(!0),je(e)};(0,t.useEffect)(()=>{L(e=>({...e,searchTerm:ve,pageNumber:1})),ze(e=>({...e,page:0}))},[ve]);const Ie=e=>{L(r=>({...r,pageNumber:e.page+1,pageSize:e.pageSize})),ze(e)};return V&&!xe?(0,K.jsx)(D.A,{}):q?(0,K.jsx)(N.Dk,{children:(0,K.jsx)(i.A,{error:_,onRetry:ce})}):(0,K.jsxs)(N.Dk,{children:[(0,K.jsx)(ie.A,{open:Ce,selectedCount:ye.length,isLoading:me,onClose:()=>ke(!1),onConfirm:async()=>{try{const e=await ge({ids:ye.map(Number)}).unwrap();we([]),ke(!1),te.oR.success(H("Deleted items: {count}",{count:e.deleted}))}catch(e){te.oR.error((0,a.S)(e,H("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u044c.")))}}}),(0,K.jsxs)(l.A,{open:Ae,onClose:()=>{pe||be(!1)},children:[(0,K.jsx)(d.A,{children:H("\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430")}),(0,K.jsx)(c.A,{children:(0,K.jsx)(s.A,{children:H("\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u044d\u0442\u043e\u0442 \u043f\u0440\u043e\u0434\u0443\u043a\u0442 \u0438\u0437 \u0441\u0438\u0441\u0442\u0435\u043c\u044b?")})}),(0,K.jsxs)(u.A,{children:[(0,K.jsx)(p.A,{disabled:pe,onClick:()=>be(!1),children:H("\u041e\u0442\u043c\u0435\u043d\u0430")}),(0,K.jsx)(p.A,{color:"error",disabled:pe,onClick:()=>{!async function(){try{await ue(fe).unwrap(),te.oR.success(H("\u041f\u0440\u043e\u0434\u0443\u043a\u0442 \u0443\u0434\u0430\u043b\u0451\u043d.")),we(e=>e.filter(e=>e!==fe)),be(!1)}catch(e){te.oR.error((0,a.S)(e,H("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u044c.")))}}()},autoFocus:!0,children:H("\u0423\u0434\u0430\u043b\u0438\u0442\u044c")})]})]}),(0,K.jsxs)(N.zY,{children:[(0,K.jsxs)(N.Fp,{children:[(0,K.jsx)(N.sT,{children:H("\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b")}),(0,K.jsx)(N.I_,{children:H("\u041a\u0430\u0442\u0430\u043b\u043e\u0433 \u0442\u043e\u0432\u0430\u0440\u043e\u0432 \u0441 \u0446\u0435\u043d\u0430\u043c\u0438, \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f\u043c\u0438, \u0431\u044b\u0441\u0442\u0440\u044b\u043c \u043f\u043e\u0438\u0441\u043a\u043e\u043c \u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f\u043c\u0438.")})]}),(0,K.jsx)(I.k2,{to:"createProduct",style:{textDecoration:"none"},children:(0,K.jsx)(T.A,{muiType:"success",text:H("\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0440\u043e\u0434\u0443\u043a\u0442"),leftIcon:(0,K.jsx)(k.A,{})})})]}),(0,K.jsxs)(N.ui,{children:[(0,K.jsxs)(N.M7,{children:[(0,K.jsxs)(ne,{children:[(0,K.jsx)(z.A,{fontSize:"small"}),H("Catalog filters"),(0,K.jsx)(g.A,{size:"small",color:"primary",label:H("Found: {count}",{count:null!==(e=null===E||void 0===E?void 0:E.metaData.totalCount)&&void 0!==e?e:0})})]}),(0,K.jsxs)(N.v_,{children:[ye.length>0&&(0,K.jsx)(T.A,{muiType:"secondary",text:H("Clear selection"),leftIcon:(0,K.jsx)(S.A,{}),onClick:()=>we([])}),ye.length>0&&(0,K.jsx)(T.A,{muiType:"error",text:H("Delete selected ({count})",{count:ye.length}),leftIcon:(0,K.jsx)(M.A,{}),disabled:0===ye.length||me,onClick:()=>ke(!0)})]})]}),(0,K.jsxs)(le,{children:[(0,K.jsx)(m.A,{size:"small",value:xe||"",label:H("\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u0430 \u0438\u043b\u0438 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435..."),onChange:e=>he(e.target.value),InputProps:{startAdornment:(0,K.jsx)(x.A,{position:"start",children:(0,K.jsx)(P.A,{fontSize:"small"})}),endAdornment:xe?(0,K.jsx)(x.A,{position:"end",children:(0,K.jsx)(h.A,{size:"small","aria-label":"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043f\u043e\u0438\u0441\u043a \u0442\u043e\u0432\u0430\u0440\u043e\u0432",onClick:()=>he(""),children:(0,K.jsx)(S.A,{fontSize:"small"})})}):void 0}}),(0,K.jsxs)(oe.A,{children:[(0,K.jsx)(v.A,{children:H("Category")}),(0,K.jsx)(ae.A,{required:!1,value:null!==(r=B.categories)&&void 0!==r?r:"",label:H("Category"),menuItemProps:Me,onChange:e=>{L(r=>({...r,categories:String(e.target.value)||void 0,pageNumber:1})),ze(e=>({...e,page:0}))}})]}),(0,K.jsx)(T.A,{muiType:"secondary",text:H("Reset filters"),leftIcon:(0,K.jsx)(S.A,{}),disabled:!xe&&!B.categories,onClick:()=>{he(""),L({...de}),ze({page:0,pageSize:de.pageSize})}})]}),F?(0,K.jsxs)(A.A,{sx:{mt:2.5},children:[Y&&(0,K.jsx)(b.A,{"aria-label":"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0430"}),(0,K.jsxs)(f.A,{spacing:1.5,children:[!(null!==E&&void 0!==E&&E.items.length)&&(0,K.jsx)(j.A,{color:"text.secondary",children:"\u0422\u043e\u0432\u0430\u0440\u044b \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b. \u0418\u0437\u043c\u0435\u043d\u0438\u0442\u0435 \u043f\u043e\u0438\u0441\u043a \u0438\u043b\u0438 \u0441\u0431\u0440\u043e\u0441\u044c\u0442\u0435 \u0444\u0438\u043b\u044c\u0442\u0440\u044b."}),null===E||void 0===E?void 0:E.items.map(e=>(0,K.jsxs)(y.A,{variant:"outlined",sx:{p:1.5,minWidth:0},children:[(0,K.jsxs)(f.A,{direction:"row",alignItems:"flex-start",gap:1,children:[(0,K.jsx)(w.A,{size:"small",checked:ye.includes(e.id),inputProps:{"aria-label":`\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0442\u043e\u0432\u0430\u0440: ${e.name}`},onChange:(r,o)=>we(r=>o?[...r,e.id]:r.filter(r=>r!==e.id))}),(0,K.jsxs)(A.A,{sx:{flex:1,minWidth:0},children:[(0,K.jsx)(j.A,{component:I.k2,to:`/productsManagement/editProduct/productDetails/${e.id}`,sx:{fontWeight:700,color:"text.primary",textDecoration:"none",overflowWrap:"anywhere"},children:e.name}),(0,K.jsxs)(j.A,{variant:"caption",display:"block",color:"text.secondary",children:[e.category||"\u0411\u0435\u0437 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438",e.gtin?` \xb7 ${e.gtin}`:""]})]}),(0,K.jsx)(U,{id:e.id,name:e.name,onDelete:Pe,t:H})]}),(0,K.jsx)(J,{product:e,locale:R}),(0,K.jsx)(g.A,{size:"small",color:(0,G.V)(e)?"warning":"success",label:(0,G.V)(e)?"\u041d\u0435\u0430\u043a\u0442\u0438\u0432\u043d\u0430: \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0446\u0435\u043d\u044b":"\u0410\u043a\u0442\u0438\u0432\u043d\u0430"})]},e.id))]}),(0,K.jsx)(C.A,{component:"div",count:null!==(o=null===E||void 0===E?void 0:E.metaData.totalCount)&&void 0!==o?o:0,page:Se.page,rowsPerPage:Se.pageSize,rowsPerPageOptions:[25,50,100],labelRowsPerPage:"\u041d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435",labelDisplayedRows:e=>{let{from:r,to:o,count:a}=e;return`${r}\u2013${o} \u0438\u0437 ${a}`},onPageChange:(e,r)=>Ie({...Se,page:r}),onRowsPerPageChange:e=>Ie({page:0,pageSize:Number(e.target.value)})})]}):(0,K.jsx)(N.aN,{sx:{mt:2.5},pagination:!0,paginationMode:"server",rowCount:null!==(W=null===E||void 0===E?void 0:E.metaData.totalCount)&&void 0!==W?W:0,autoHeight:!0,rowHeight:112,rows:null!==($=null===E||void 0===E?void 0:E.items)&&void 0!==$?$:[],columns:Q(Pe,H,R),loading:V||Y,onPaginationModelChange:e=>Ie(e),paginationModel:Se,pageSizeOptions:[25,50,100],disableRowSelectionOnClick:!0,checkboxSelection:!0,keepNonExistentRowsSelected:!0,rowSelectionModel:ye,onRowSelectionModelChange:we})]})]})}},1252(e,r,o){o.d(r,{A:()=>d});o(9950);var a=o(5429),i=o(226),t=o(8965),n=o(3978),l=o(4414);function d(e){let{error:r,onRetry:o}=e;const{t:d}=(0,n.Bd)();return(0,l.jsx)(a.A,{severity:"error",action:(0,l.jsx)(i.A,{onClick:()=>{o()},children:d("\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c")}),children:(0,t.S)(r,d("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435. \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441."))})}},1225(e,r,o){o(9950);var a=o(3464),i=o(33),t=o(8170),n=o(8874),l=o(9739),d=o(226),c=o(3978),s=o(4414);const u=e=>{let{open:r,selectedCount:o,isLoading:u=!1,onClose:p,onConfirm:g}=e;const{t:m}=(0,c.Bd)(),x=o>500;return(0,s.jsxs)(a.A,{open:r,onClose:u?void 0:p,children:[(0,s.jsx)(i.A,{children:m("Delete selected items?")}),(0,s.jsxs)(t.A,{children:[(0,s.jsx)(n.A,{children:m("You are about to delete {count} selected items. This action cannot be undone.",{count:o})}),x&&(0,s.jsx)(n.A,{color:"error",children:m("You can delete no more than 500 items at once.")})]}),(0,s.jsxs)(l.A,{children:[(0,s.jsx)(d.A,{onClick:p,disabled:u,children:m("Cancel")}),(0,s.jsx)(d.A,{color:"error",onClick:g,disabled:u||0===o||x,autoFocus:!0,children:u?m("Deleting..."):m("Delete selected ({count})",{count:o})})]})]})};o.d(r,["A",0,u])},3236(e,r,o){var a=o(9950);const i=function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;const[o,i]=(0,a.useState)(e);return(0,a.useEffect)(()=>{const o=setTimeout(()=>{i(e)},r);return()=>{clearTimeout(o)}},[e,r]),o};o.d(r,["A",0,i])},8977(e,r,o){o.d(r,{A:()=>d});o(9950);var a=o(1866),i=o(9254),t=o(226);const n=(0,i.Ay)(t.A,{shouldForwardProp:e=>"muiType"!==e&&"horizontalMargin"!==e&&"verticalMargin"!==e&&"bottomMargin"!==e})`
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
`;var l=o(4414);const d=e=>{let{fullWidth:r,type:o,onClick:a,leftIcon:i,rightIcon:t,text:d,muiType:c,horizontalMargin:s,verticalMargin:u,bottomMargin:p,disabled:g,ariaLabel:m}=e;return(0,l.jsx)(n,{fullWidth:r,type:o,muiType:c,startIcon:i,endIcon:t,onClick:a,verticalMargin:u||!1,horizontalMargin:s||!1,bottomMargin:p||!1,disabled:g,"aria-label":m,children:d})}},475(e,r,o){var a=o(9950),i=o(132),t=o(9254),n=o(8707),l=o(3978);const d=i.Ay.div({width:"100%",maxWidth:"1360px",minWidth:0,margin:"0 auto",textAlign:"left"}),c=i.Ay.div({display:"flex",flexWrap:"wrap",alignItems:"flex-start",justifyContent:"space-between",gap:"24px",marginBottom:"28px","@media (max-width: 760px)":{display:"grid"}}),s=i.Ay.div({display:"grid",gap:"10px",minWidth:0}),u=i.Ay.h1({margin:0,color:"var(--color-text)",fontSize:"clamp(28px, 3vw, 36px)",fontWeight:800,letterSpacing:"-.045em",lineHeight:1.18,"@media (max-width: 760px)":{fontSize:"25px"}}),p=i.Ay.p({maxWidth:"720px",margin:0,color:"var(--color-muted)",fontSize:"14px",fontWeight:450,lineHeight:1.6}),g=i.Ay.section({width:"100%",minWidth:0,padding:"var(--panel-padding)",background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"var(--radius-xl)",boxShadow:"var(--shadow-soft)"}),m=i.Ay.div({display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"12px",width:"100%",marginBottom:"14px","@media (max-width: 760px)":{display:"grid"}}),x=i.Ay.div({display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"}),h=i.Ay.div({display:"grid",alignItems:"start",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",gap:"12px","@media (max-width: 760px)":{gridTemplateColumns:"1fr"}}),v=i.Ay.form({display:"grid",gridTemplateColumns:"minmax(0, 1fr)",alignItems:"start",gap:"14px",width:"min(720px, 100%)",minWidth:0,padding:"var(--panel-padding)",background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"16px",boxShadow:"var(--shadow-soft)","@media (max-width: 560px)":{gap:"12px",padding:"14px"}}),A=i.Ay.div({display:"grid",placeItems:"center",gap:"8px",minHeight:"220px",padding:"28px",color:"var(--color-muted)",textAlign:"center",background:"var(--color-surface)",border:"1px dashed var(--color-border-strong)",borderRadius:"16px"}),b=(i.Ay.div({marginBottom:"8px",color:"var(--color-danger)",fontSize:"13px",fontWeight:650}),(0,t.Ay)(n.zh)({width:"100%",minWidth:0,"&.MuiDataGrid-autoHeight":{overflow:"visible","& .MuiDataGrid-main":{overflow:"visible"},"& .MuiDataGrid-columnHeaders":{position:"sticky",top:"var(--app-header-height)",zIndex:2,backgroundColor:"var(--color-surface-soft)",boxShadow:"0 1px 0 var(--color-border)"}}}));o.d(r,["Dk",0,d,"Fp",0,s,"I_",0,p,"M7",0,m,"aN",0,e=>{const{language:r}=(0,l.Bd)(),o=(0,a.useMemo)(()=>({...(0,l.it)(r),...e.localeText}),[r,e.localeText]);return a.createElement(b,{...e,localeText:o})},"kA",0,v,"pp",0,A,"sT",0,u,"ui",0,g,"vY",0,h,"v_",0,x,"zY",0,c])},9292(e,r,o){o.d(r,{A:()=>d});o(9950);var a=o(1866),i=o(9254),t=o(5979);const n=(0,i.Ay)(t.A,{shouldForwardProp:e=>"horizontalMargin"!==e&&"verticalMargin"!==e})`
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
`;var l=o(3266),d=o(4414);const c=e=>{let{id:r,labelId:o,value:a,onChange:i,label:t,menuItemProps:c,register:s,name:u,error:p,required:g,defaultValue:m,disabled:x,withoutId:h}=e;return s&&h?(0,d.jsx)(n,{id:r,labelId:o,displayEmpty:!0,defaultValue:m,disabled:x,required:g,error:!!p,...s(u),value:a,onChange:i,label:t,children:c&&c.map(e=>(0,d.jsx)(l.A,{value:e,children:e},String(e)))}):s?(0,d.jsx)(n,{id:r,labelId:o,displayEmpty:!0,defaultValue:m,disabled:x,required:g,error:!!p,...s(u),value:a,onChange:i,label:t,children:c&&c.map(e=>(0,d.jsx)(l.A,{value:e.id,children:e.name},e.id))}):(0,d.jsx)(n,{id:r,labelId:o,value:a,onChange:i,label:t,required:!1!==g,disabled:x,error:!!p,children:c&&c.map(e=>(0,d.jsx)(l.A,{value:e.id,children:e.name},e.id))})}}}]);