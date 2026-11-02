"use strict";(globalThis.webpackChunkvivotech_crm_client||=[]).push([[5922],{3341(e,r,o){const a=o(9827).MW.injectEndpoints({endpoints:e=>({currencySettings:e.query({query:e=>`/firms/${e}/currency-settings`,providesTags:(e,r,o)=>[{type:"Firms",id:`currency:${o}`}]}),saveCurrencySettings:e.mutation({query:e=>{let{firmId:r,...o}=e;return{url:`/firms/${r}/currency-settings`,method:"PUT",body:o}},invalidatesTags:(e,r,o)=>{let{firmId:a}=o;return[{type:"Firms",id:`currency:${a}`}]}}),currencyRates:e.query({query:e=>({url:"/currencies/rates",params:e}),keepUnusedDataFor:600})})}),{useCurrencySettingsQuery:i,useSaveCurrencySettingsMutation:n,useCurrencyRatesQuery:t}=a;o.d(r,["IO",0,t,"Uj",0,n,"e1",0,i])},5154(e,r,o){function a(e){const r=e=>null!=e&&Number.isFinite(e)&&e>0;return[!r(e.purchasePrice)&&"\u0437\u0430\u043a\u0443\u043f\u043e\u0447\u043d\u0430\u044f \u0446\u0435\u043d\u0430",!r(e.costPrice)&&"\u0441\u0435\u0431\u0435\u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c",(null==e.markupPercent||!Number.isFinite(e.markupPercent)||e.markupPercent<0)&&"\u043d\u0430\u0434\u0431\u0430\u0432\u043a\u0430",!r(e.price)&&"\u043a\u043e\u043d\u0435\u0447\u043d\u0430\u044f \u0446\u0435\u043d\u0430"].filter(e=>Boolean(e))}o.d(r,{k:()=>a});o.d(r,["V",0,e=>Boolean(e.requiresPriceApproval)||a(e).length>0])},5922(e,r,o){o.r(r),o.d(r,{default:()=>pe});var a=o(8965),i=o(1252),n=o(9950),t=o(2433),l=o(3464),c=o(33),d=o(8170),s=o(8874),u=o(9739),p=o(226),m=o(5277),g=o(8145),x=o(2046),h=o(5333),v=o(3788),y=o(3011),b=o(6699),A=o(3230),f=o(2053),j=o(2235),w=o(3038),C=o(3812),k=o(9532),S=o(7762),z=o(9440),M=o(6592),P=o(5410),I=o(2074),W=o(132),T=o(7961),$=o(8977),D=o(475),N=o(3929),H=o(6089),R=o(3263),F=o(9985),B=o(6213),q=o(3274),Y=o(6817),E=o(3266),L=o(4195),V=o(1413),O=o(3978),U=o(7906),_=o(5154),G=o(1884),K=o(4414);function Q(e){let{id:r,name:o,onDelete:a,t:i}=e;const[t,l]=(0,n.useState)(null);return(0,K.jsxs)(y.A,{sx:{display:"flex",gap:.5},children:[(0,K.jsx)(q.A,{title:i("\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"),children:(0,K.jsx)(h.A,{size:"small",component:I.k2,to:`/productsManagement/editProduct/productDetails/${r}`,"aria-label":`${i("\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435")}: ${o}`,children:(0,K.jsx)(F.A,{fontSize:"small"})})}),(0,K.jsx)(q.A,{title:i("Actions"),children:(0,K.jsx)(h.A,{size:"small","aria-label":`${i("Actions")}: ${o}`,"aria-haspopup":"menu","aria-expanded":Boolean(t),onClick:e=>l(e.currentTarget),children:(0,K.jsx)(B.A,{fontSize:"small"})})}),(0,K.jsxs)(Y.A,{anchorEl:t,open:Boolean(t),onClose:()=>l(null),children:[(0,K.jsxs)(E.A,{component:I.k2,to:`/productsManagement/editProduct/${r}`,onClick:()=>l(null),children:[(0,K.jsx)(L.A,{children:(0,K.jsx)(H.A,{fontSize:"small"})}),i("\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c")]}),(0,K.jsxs)(E.A,{component:I.k2,to:`/productsManagement/copyProduct/${r}`,onClick:()=>l(null),children:[(0,K.jsx)(L.A,{children:(0,K.jsx)(N.A,{fontSize:"small"})}),i("\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c")]}),(0,K.jsxs)(E.A,{sx:{color:"error.main"},onClick:()=>{l(null),a(r)},children:[(0,K.jsx)(L.A,{sx:{color:"inherit"},children:(0,K.jsx)(R.A,{fontSize:"small"})}),i("\u0423\u0434\u0430\u043b\u0438\u0442\u044c")]})]})]})}function J(e){var r,o,a;let{product:i,locale:n,primaryCurrency:t="BYN"}=e;return(0,K.jsxs)(y.A,{sx:{py:1,lineHeight:1.5,fontVariantNumeric:"tabular-nums"},children:[(0,K.jsx)(y.A,{sx:{fontSize:11,color:"text.secondary"},children:"\u041a\u043e\u043d\u0435\u0447\u043d\u0430\u044f \u0446\u0435\u043d\u0430"}),(0,K.jsx)(G.A,{amount:null===(r=i.currencyPrices)||void 0===r?void 0:r.price,byn:i.price,primary:t,locale:n}),(0,K.jsx)(y.A,{sx:{fontSize:11,color:"text.secondary"},children:"\u0417\u0430\u043a\u0443\u043f\u043e\u0447\u043d\u0430\u044f \u0446\u0435\u043d\u0430"}),(0,K.jsx)(G.A,{amount:null===(o=i.currencyPrices)||void 0===o?void 0:o.purchasePrice,byn:i.purchasePrice,primary:t,locale:n,dense:!0}),(0,K.jsx)(y.A,{sx:{fontSize:11,color:"text.secondary"},children:"\u0421\u0435\u0431\u0435\u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c"}),(0,K.jsx)(G.A,{amount:null===(a=i.currencyPrices)||void 0===a?void 0:a.costPrice,byn:i.costPrice,primary:t,locale:n,dense:!0}),(0,K.jsxs)(y.A,{sx:{fontSize:12,color:"text.secondary"},children:["\u041d\u0430\u0434\u0431\u0430\u0432\u043a\u0430: ",null==i.markupPercent?"\u041d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u0430":`${i.markupPercent.toLocaleString(n)} %`]})]})}const X=function(e,r){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(0,U.UN)((0,O.UK)()).locale,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"BYN";return[{field:"imageName",align:"center",headerName:"",width:56,sortable:!1,renderCell:e=>(0,K.jsx)(V.A,{sx:{width:36,height:36,borderRadius:"10px",bgcolor:"primary.light",color:"primary.main",fontSize:14,fontWeight:700},variant:"rounded",src:e.value,alt:e.row.name,children:String(e.row.name||"").slice(0,1)})},{field:"name",headerName:r("\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),minWidth:220,flex:1,renderCell:e=>(0,K.jsx)(y.A,{component:I.k2,to:`/productsManagement/editProduct/productDetails/${e.id}`,sx:{fontWeight:650,color:"text.primary",textDecoration:"none","&:hover":{color:"primary.main"}},children:e.value})},{field:"price",headerName:`\u0426\u0435\u043d\u044b \xb7 ${a}`,description:"\u041a\u043e\u043d\u0435\u0447\u043d\u0430\u044f \u0446\u0435\u043d\u0430, \u0437\u0430\u043a\u0443\u043f\u043e\u0447\u043d\u0430\u044f \u0446\u0435\u043d\u0430, \u0441\u0435\u0431\u0435\u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0438 \u043d\u0430\u0434\u0431\u0430\u0432\u043a\u0430",type:"number",align:"left",headerAlign:"left",width:270,renderCell:e=>(0,K.jsx)(J,{product:e.row,locale:o,primaryCurrency:a})},{field:"requiresPriceApproval",headerName:"\u0421\u0442\u0430\u0442\u0443\u0441 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438",width:150,renderCell:e=>{const r=(0,_.V)(e.row);return(0,K.jsx)(q.A,{title:r?"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0437\u0430\u043a\u0443\u043f\u043e\u0447\u043d\u0443\u044e \u0446\u0435\u043d\u0443, \u0441\u0435\u0431\u0435\u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c, \u043d\u0430\u0434\u0431\u0430\u0432\u043a\u0443 \u0438 \u043a\u043e\u043d\u0435\u0447\u043d\u0443\u044e \u0446\u0435\u043d\u0443; \u0443\u0442\u0432\u0435\u0440\u0436\u0434\u0451\u043d\u043d\u044b\u0435 \u0446\u0435\u043d\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u044b":"\u041a\u0430\u0440\u0442\u043e\u0447\u043a\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0434\u043b\u044f \u0437\u0430\u043a\u0430\u0437\u043e\u0432",children:(0,K.jsx)(m.A,{size:"small",color:r?"warning":"success",label:r?"\u041d\u0435\u0430\u043a\u0442\u0438\u0432\u043d\u0430: \u0446\u0435\u043d\u044b":"\u0410\u043a\u0442\u0438\u0432\u043d\u0430"})})}},{field:"gtin",headerName:"GTIN",minWidth:136,flex:.55},{field:"category",headerName:r("\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f"),minWidth:144,flex:.6,renderCell:e=>e.value?(0,K.jsx)(m.A,{size:"small",label:e.value,sx:{bgcolor:"action.hover",color:"text.secondary"}}):"\u2014"},{field:"actions",headerName:r("Actions"),width:92,align:"right",headerAlign:"right",sortable:!1,filterable:!1,disableColumnMenu:!0,renderCell:o=>(0,K.jsx)(Q,{id:o.id,name:o.row.name,onDelete:e,t:r})}]};var Z=o(3236),ee=o(341),re=o(344),oe=o(489),ae=o(9292),ie=o(6458),ne=o(1225),te=o(9348),le=o(516),ce=o(3341);const de=W.Ay.div({display:"flex",alignItems:"center",gap:"8px",color:"var(--color-muted)",fontSize:"13px",fontWeight:700}),se=W.Ay.div({display:"grid",gridTemplateColumns:"minmax(0, 1fr) minmax(0, 0.6fr) auto",gap:"14px",alignItems:"end","@media (max-width: 820px)":{gridTemplateColumns:"1fr"}}),ue={pageNumber:1,pageSize:25,productCategories:[],searchTerm:""},pe=()=>{var e,r,o,W,N;const H=Number((0,le.gF)()),{data:R}=(0,ce.e1)(H,{skip:!H}),{t:F,locale:B}=(0,O.Bd)(),q=(0,t.A)("(max-width:700px)"),[Y,E]=(0,n.useState)(ue),{data:L,isLoading:V,isFetching:U,isError:G,error:pe,refetch:me}=(0,ee.Kc)(Y),{data:ge=[]}=(0,oe.md)({type:re.h.Product}),[xe,{isLoading:he}]=(0,ee.lY)({}),[ve,{isLoading:ye}]=(0,ee.IT)(),[be,Ae]=(0,n.useState)(""),fe=(0,Z.A)(be),[je,we]=(0,n.useState)(!1),[Ce,ke]=(0,n.useState)(""),[Se,ze]=(0,n.useState)([]),[Me,Pe]=(0,n.useState)(!1),[Ie,We]=(0,n.useState)({page:0,pageSize:ue.pageSize}),Te=[{id:"",name:F("All categories")},...ge.map(e=>({id:e.name,name:e.name}))],$e=e=>{we(!0),ke(e)};(0,n.useEffect)(()=>{E(e=>({...e,searchTerm:fe,pageNumber:1})),We(e=>({...e,page:0}))},[fe]);const De=e=>{E(r=>({...r,pageNumber:e.page+1,pageSize:e.pageSize})),We(e)};return V&&!be?(0,K.jsx)(T.A,{}):G?(0,K.jsx)(D.Dk,{children:(0,K.jsx)(i.A,{error:pe,onRetry:me})}):(0,K.jsxs)(D.Dk,{children:[(0,K.jsx)(ne.A,{open:Me,selectedCount:Se.length,isLoading:ye,onClose:()=>Pe(!1),onConfirm:async()=>{try{const e=await ve({ids:Se.map(Number)}).unwrap();ze([]),Pe(!1),te.oR.success(F("Deleted items: {count}",{count:e.deleted}))}catch(e){te.oR.error((0,a.S)(e,F("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u044c.")))}}}),(0,K.jsxs)(l.A,{open:je,onClose:()=>{he||we(!1)},children:[(0,K.jsx)(c.A,{children:F("\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430")}),(0,K.jsx)(d.A,{children:(0,K.jsx)(s.A,{children:F("\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u044d\u0442\u043e\u0442 \u043f\u0440\u043e\u0434\u0443\u043a\u0442 \u0438\u0437 \u0441\u0438\u0441\u0442\u0435\u043c\u044b?")})}),(0,K.jsxs)(u.A,{children:[(0,K.jsx)(p.A,{disabled:he,onClick:()=>we(!1),children:F("\u041e\u0442\u043c\u0435\u043d\u0430")}),(0,K.jsx)(p.A,{color:"error",disabled:he,onClick:()=>{!async function(){try{await xe(Ce).unwrap(),te.oR.success(F("\u041f\u0440\u043e\u0434\u0443\u043a\u0442 \u0443\u0434\u0430\u043b\u0451\u043d.")),ze(e=>e.filter(e=>e!==Ce)),we(!1)}catch(e){te.oR.error((0,a.S)(e,F("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u044c.")))}}()},autoFocus:!0,children:F("\u0423\u0434\u0430\u043b\u0438\u0442\u044c")})]})]}),(0,K.jsxs)(D.zY,{children:[(0,K.jsxs)(D.Fp,{children:[(0,K.jsx)(D.sT,{children:F("\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b")}),(0,K.jsx)(D.I_,{children:F("\u041a\u0430\u0442\u0430\u043b\u043e\u0433 \u0442\u043e\u0432\u0430\u0440\u043e\u0432 \u0441 \u0446\u0435\u043d\u0430\u043c\u0438, \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f\u043c\u0438, \u0431\u044b\u0441\u0442\u0440\u044b\u043c \u043f\u043e\u0438\u0441\u043a\u043e\u043c \u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f\u043c\u0438.")})]}),(0,K.jsx)(I.k2,{to:"createProduct",style:{textDecoration:"none"},children:(0,K.jsx)($.A,{muiType:"success",text:F("\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0440\u043e\u0434\u0443\u043a\u0442"),leftIcon:(0,K.jsx)(k.A,{})})})]}),(0,K.jsxs)(D.ui,{children:[(0,K.jsxs)(D.M7,{children:[(0,K.jsxs)(de,{children:[(0,K.jsx)(z.A,{fontSize:"small"}),F("Catalog filters"),(0,K.jsx)(m.A,{size:"small",color:"primary",label:F("Found: {count}",{count:null!==(e=null===L||void 0===L?void 0:L.metaData.totalCount)&&void 0!==e?e:0})})]}),(0,K.jsxs)(D.v_,{children:[Se.length>0&&(0,K.jsx)($.A,{muiType:"secondary",text:F("Clear selection"),leftIcon:(0,K.jsx)(S.A,{}),onClick:()=>ze([])}),Se.length>0&&(0,K.jsx)($.A,{muiType:"error",text:F("Delete selected ({count})",{count:Se.length}),leftIcon:(0,K.jsx)(M.A,{}),disabled:0===Se.length||ye,onClick:()=>Pe(!0)})]})]}),(0,K.jsxs)(se,{children:[(0,K.jsx)(g.A,{size:"small",value:be||"",label:F("\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u0430 \u0438\u043b\u0438 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435..."),onChange:e=>Ae(e.target.value),InputProps:{startAdornment:(0,K.jsx)(x.A,{position:"start",children:(0,K.jsx)(P.A,{fontSize:"small"})}),endAdornment:be?(0,K.jsx)(x.A,{position:"end",children:(0,K.jsx)(h.A,{size:"small","aria-label":"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043f\u043e\u0438\u0441\u043a \u0442\u043e\u0432\u0430\u0440\u043e\u0432",onClick:()=>Ae(""),children:(0,K.jsx)(S.A,{fontSize:"small"})})}):void 0}}),(0,K.jsxs)(ae.A,{children:[(0,K.jsx)(v.A,{children:F("Category")}),(0,K.jsx)(ie.A,{required:!1,value:null!==(r=Y.categories)&&void 0!==r?r:"",label:F("Category"),menuItemProps:Te,onChange:e=>{E(r=>({...r,categories:String(e.target.value)||void 0,pageNumber:1})),We(e=>({...e,page:0}))}})]}),(0,K.jsx)($.A,{muiType:"secondary",text:F("Reset filters"),leftIcon:(0,K.jsx)(S.A,{}),disabled:!be&&!Y.categories,onClick:()=>{Ae(""),E({...ue}),We({page:0,pageSize:ue.pageSize})}})]}),q?(0,K.jsxs)(y.A,{sx:{mt:2.5},children:[U&&(0,K.jsx)(b.A,{"aria-label":"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0430"}),(0,K.jsxs)(A.A,{spacing:1.5,children:[!(null!==L&&void 0!==L&&L.items.length)&&(0,K.jsx)(f.A,{color:"text.secondary",children:"\u0422\u043e\u0432\u0430\u0440\u044b \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b. \u0418\u0437\u043c\u0435\u043d\u0438\u0442\u0435 \u043f\u043e\u0438\u0441\u043a \u0438\u043b\u0438 \u0441\u0431\u0440\u043e\u0441\u044c\u0442\u0435 \u0444\u0438\u043b\u044c\u0442\u0440\u044b."}),null===L||void 0===L?void 0:L.items.map(e=>(0,K.jsxs)(j.A,{variant:"outlined",sx:{p:1.5,minWidth:0},children:[(0,K.jsxs)(A.A,{direction:"row",alignItems:"flex-start",gap:1,children:[(0,K.jsx)(w.A,{size:"small",checked:Se.includes(e.id),inputProps:{"aria-label":`\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0442\u043e\u0432\u0430\u0440: ${e.name}`},onChange:(r,o)=>ze(r=>o?[...r,e.id]:r.filter(r=>r!==e.id))}),(0,K.jsxs)(y.A,{sx:{flex:1,minWidth:0},children:[(0,K.jsx)(f.A,{component:I.k2,to:`/productsManagement/editProduct/productDetails/${e.id}`,sx:{fontWeight:700,color:"text.primary",textDecoration:"none",overflowWrap:"anywhere"},children:e.name}),(0,K.jsxs)(f.A,{variant:"caption",display:"block",color:"text.secondary",children:[e.category||"\u0411\u0435\u0437 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438",e.gtin?` \xb7 ${e.gtin}`:""]})]}),(0,K.jsx)(Q,{id:e.id,name:e.name,onDelete:$e,t:F})]}),(0,K.jsx)(J,{product:e,locale:B,primaryCurrency:null===R||void 0===R?void 0:R.workingCurrency}),(0,K.jsx)(m.A,{size:"small",color:(0,_.V)(e)?"warning":"success",label:(0,_.V)(e)?"\u041d\u0435\u0430\u043a\u0442\u0438\u0432\u043d\u0430: \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0446\u0435\u043d\u044b":"\u0410\u043a\u0442\u0438\u0432\u043d\u0430"})]},e.id))]}),(0,K.jsx)(C.A,{component:"div",count:null!==(o=null===L||void 0===L?void 0:L.metaData.totalCount)&&void 0!==o?o:0,page:Ie.page,rowsPerPage:Ie.pageSize,rowsPerPageOptions:[25,50,100],labelRowsPerPage:"\u041d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435",labelDisplayedRows:e=>{let{from:r,to:o,count:a}=e;return`${r}\u2013${o} \u0438\u0437 ${a}`},onPageChange:(e,r)=>De({...Ie,page:r}),onRowsPerPageChange:e=>De({page:0,pageSize:Number(e.target.value)})})]}):(0,K.jsx)(D.aN,{sx:{mt:2.5},pagination:!0,paginationMode:"server",rowCount:null!==(W=null===L||void 0===L?void 0:L.metaData.totalCount)&&void 0!==W?W:0,autoHeight:!0,rowHeight:192,rows:null!==(N=null===L||void 0===L?void 0:L.items)&&void 0!==N?N:[],columns:X($e,F,B,null===R||void 0===R?void 0:R.workingCurrency),loading:V||U,onPaginationModelChange:e=>De(e),paginationModel:Ie,pageSizeOptions:[25,50,100],disableRowSelectionOnClick:!0,checkboxSelection:!0,keepNonExistentRowsSelected:!0,rowSelectionModel:Se,onRowSelectionModelChange:ze})]})]})}},1884(e,r,o){o.d(r,{A:()=>i});o(9950);var a=o(4414);function i(e){var r;let{amount:o,byn:i,primary:n="BYN",locale:t="ru-RU",large:l=!1,dense:c=!1}=e;const d=o&&o.byn===i?o:{byn:i,usd:null,rub:null},s=[n,...["USD","RUB","BYN"].filter(e=>e!==n)],u=e=>{const r=d[e.toLowerCase()];return null==r||r<=0?"\u2014":r.toLocaleString(t,{minimumFractionDigits:c?0:2,maximumFractionDigits:c?6:2})};return(0,a.jsxs)("div",{title:null!==o&&void 0!==o&&o.date?`\u041a\u0443\u0440\u0441 \u043d\u0430 ${o.date}. ${null!==(r=o.source)&&void 0!==r?r:""}`:"\u0421\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0439 \u043a\u0443\u0440\u0441 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442",style:{fontVariantNumeric:"tabular-nums"},children:[(0,a.jsxs)("strong",{style:{display:"block",fontWeight:800,fontSize:l?"clamp(30px, 3vw, 44px)":c?12:17},children:[u(n)," ",n]}),(0,a.jsx)("div",{style:{fontSize:l?13:c?10:11,fontWeight:400,opacity:.8},children:s.slice(1).map(e=>(0,a.jsxs)("span",{style:{display:"inline-block",marginRight:12},children:[u(e)," ",e]},e))})]})}},1252(e,r,o){o.d(r,{A:()=>c});o(9950);var a=o(5429),i=o(226),n=o(8965),t=o(3978),l=o(4414);function c(e){let{error:r,onRetry:o}=e;const{t:c}=(0,t.Bd)();return(0,l.jsx)(a.A,{severity:"error",action:(0,l.jsx)(i.A,{onClick:()=>{o()},children:c("\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c")}),children:(0,n.S)(r,c("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435. \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441."))})}},1225(e,r,o){o(9950);var a=o(3464),i=o(33),n=o(8170),t=o(8874),l=o(9739),c=o(226),d=o(3978),s=o(4414);const u=e=>{let{open:r,selectedCount:o,isLoading:u=!1,onClose:p,onConfirm:m}=e;const{t:g}=(0,d.Bd)(),x=o>500;return(0,s.jsxs)(a.A,{open:r,onClose:u?void 0:p,children:[(0,s.jsx)(i.A,{children:g("Delete selected items?")}),(0,s.jsxs)(n.A,{children:[(0,s.jsx)(t.A,{children:g("You are about to delete {count} selected items. This action cannot be undone.",{count:o})}),x&&(0,s.jsx)(t.A,{color:"error",children:g("You can delete no more than 500 items at once.")})]}),(0,s.jsxs)(l.A,{children:[(0,s.jsx)(c.A,{onClick:p,disabled:u,children:g("Cancel")}),(0,s.jsx)(c.A,{color:"error",onClick:m,disabled:u||0===o||x,autoFocus:!0,children:u?g("Deleting..."):g("Delete selected ({count})",{count:o})})]})]})};o.d(r,["A",0,u])},3236(e,r,o){var a=o(9950);const i=function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;const[o,i]=(0,a.useState)(e);return(0,a.useEffect)(()=>{const o=setTimeout(()=>{i(e)},r);return()=>{clearTimeout(o)}},[e,r]),o};o.d(r,["A",0,i])},8977(e,r,o){o.d(r,{A:()=>c});o(9950);var a=o(1866),i=o(9254),n=o(226);const t=(0,i.Ay)(n.A,{shouldForwardProp:e=>"muiType"!==e&&"horizontalMargin"!==e&&"verticalMargin"!==e&&"bottomMargin"!==e})`
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
`;var l=o(4414);const c=e=>{let{fullWidth:r,type:o,onClick:a,leftIcon:i,rightIcon:n,text:c,muiType:d,horizontalMargin:s,verticalMargin:u,bottomMargin:p,disabled:m,ariaLabel:g}=e;return(0,l.jsx)(t,{fullWidth:r,type:o,muiType:d,startIcon:i,endIcon:n,onClick:a,verticalMargin:u||!1,horizontalMargin:s||!1,bottomMargin:p||!1,disabled:m,"aria-label":g,children:c})}},475(e,r,o){var a=o(9950),i=o(132),n=o(9254),t=o(8707),l=o(3978);const c=i.Ay.div({width:"100%",maxWidth:"1360px",minWidth:0,margin:"0 auto",textAlign:"left"}),d=i.Ay.div({display:"flex",flexWrap:"wrap",alignItems:"flex-start",justifyContent:"space-between",gap:"24px",marginBottom:"28px","@media (max-width: 760px)":{display:"grid"}}),s=i.Ay.div({display:"grid",gap:"10px",minWidth:0}),u=i.Ay.h1({margin:0,color:"var(--color-text)",fontSize:"clamp(28px, 3vw, 36px)",fontWeight:800,letterSpacing:"-.045em",lineHeight:1.18,"@media (max-width: 760px)":{fontSize:"25px"}}),p=i.Ay.p({maxWidth:"720px",margin:0,color:"var(--color-muted)",fontSize:"14px",fontWeight:450,lineHeight:1.6}),m=i.Ay.section({width:"100%",minWidth:0,padding:"var(--panel-padding)",background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"var(--radius-xl)",boxShadow:"var(--shadow-soft)"}),g=i.Ay.div({display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"12px",width:"100%",marginBottom:"14px","@media (max-width: 760px)":{display:"grid"}}),x=i.Ay.div({display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"}),h=i.Ay.div({display:"grid",alignItems:"start",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",gap:"12px","@media (max-width: 760px)":{gridTemplateColumns:"1fr"}}),v=i.Ay.form({display:"grid",gridTemplateColumns:"minmax(0, 1fr)",alignItems:"start",gap:"14px",width:"min(720px, 100%)",minWidth:0,padding:"var(--panel-padding)",background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"16px",boxShadow:"var(--shadow-soft)","@media (max-width: 560px)":{gap:"12px",padding:"14px"}}),y=i.Ay.div({display:"grid",placeItems:"center",gap:"8px",minHeight:"220px",padding:"28px",color:"var(--color-muted)",textAlign:"center",background:"var(--color-surface)",border:"1px dashed var(--color-border-strong)",borderRadius:"16px"}),b=(i.Ay.div({marginBottom:"8px",color:"var(--color-danger)",fontSize:"13px",fontWeight:650}),(0,n.Ay)(t.zh)({width:"100%",minWidth:0,"&.MuiDataGrid-autoHeight":{overflow:"visible","& .MuiDataGrid-main":{overflow:"visible"},"& .MuiDataGrid-columnHeaders":{position:"sticky",top:"var(--app-header-height)",zIndex:2,backgroundColor:"var(--color-surface-soft)",boxShadow:"0 1px 0 var(--color-border)"}}}));o.d(r,["Dk",0,c,"Fp",0,s,"I_",0,p,"M7",0,g,"aN",0,e=>{const{language:r}=(0,l.Bd)(),o=(0,a.useMemo)(()=>({...(0,l.it)(r),...e.localeText}),[r,e.localeText]);return a.createElement(b,{...e,localeText:o})},"kA",0,v,"pp",0,y,"sT",0,u,"ui",0,m,"vY",0,h,"v_",0,x,"zY",0,d])},9292(e,r,o){o.d(r,{A:()=>c});o(9950);var a=o(1866),i=o(9254),n=o(5979);const t=(0,i.Ay)(n.A,{shouldForwardProp:e=>"horizontalMargin"!==e&&"verticalMargin"!==e})`
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
`;var l=o(4414);const c=e=>{let{verticalMargin:r,horizontalMargin:o,error:a,children:i}=e;return(0,l.jsx)(t,{fullWidth:!0,error:a,horizontalMargin:o,verticalMargin:r,children:i})}},6458(e,r,o){o.d(r,{A:()=>d});o(9950);var a=o(1866),i=o(9254),n=o(6);const t=(0,i.Ay)(n.A,{shouldForwardProp:e=>"halfWidth"!==e})`
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
`;var l=o(3266),c=o(4414);const d=e=>{let{id:r,labelId:o,value:a,onChange:i,label:n,menuItemProps:d,register:s,name:u,error:p,required:m,defaultValue:g,disabled:x,withoutId:h}=e;return s&&h?(0,c.jsx)(t,{id:r,labelId:o,displayEmpty:!0,defaultValue:g,disabled:x,required:m,error:!!p,...s(u),value:a,onChange:i,label:n,children:d&&d.map(e=>(0,c.jsx)(l.A,{value:e,children:e},String(e)))}):s?(0,c.jsx)(t,{id:r,labelId:o,displayEmpty:!0,defaultValue:g,disabled:x,required:m,error:!!p,...s(u),value:a,onChange:i,label:n,children:d&&d.map(e=>(0,c.jsx)(l.A,{value:e.id,children:e.name},e.id))}):(0,c.jsx)(t,{id:r,labelId:o,value:a,onChange:i,label:n,required:!1!==m,disabled:x,error:!!p,children:d&&d.map(e=>(0,c.jsx)(l.A,{value:e.id,children:e.name},e.id))})}}}]);