"use strict";(globalThis.webpackChunkvivotech_crm_client||=[]).push([[9234],{9234(r,e,o){o.r(e),o.d(e,{default:()=>R});var a=o(9348),i=o(8965),t=o(9950),n=o(4857),l=o(9635),s=o(7810),d=o(7284),c=o(5671),p=o(6129),m=o(132),u=o(475),g=o(8977),x=o(7961);let h=function(r){return r[r.Custom=0]="Custom",r[r.Today=1]="Today",r[r.Yesterday=2]="Yesterday",r[r.CurrentWeek=3]="CurrentWeek",r[r.PreviousWeek=4]="PreviousWeek",r[r.CurrentMonth=5]="CurrentMonth",r[r.PreviousMonth=6]="PreviousMonth",r[r.CurrentQuarter=7]="CurrentQuarter",r[r.PreviousQuarter=8]="PreviousQuarter",r[r.CurrentYear=9]="CurrentYear",r[r.PreviousYear=10]="PreviousYear",r[r.Last7Days=11]="Last7Days",r[r.Last30Days=12]="Last30Days",r[r.Last90Days=13]="Last90Days",r[r.Last12Months=14]="Last12Months",r}({}),v=function(r){return r[r.None=0]="None",r[r.PreviousEquivalentPeriod=1]="PreviousEquivalentPeriod",r[r.PreviousWeek=2]="PreviousWeek",r[r.PreviousMonth=3]="PreviousMonth",r[r.PreviousQuarter=4]="PreviousQuarter",r[r.PreviousYear=5]="PreviousYear",r[r.Custom=6]="Custom",r[r.Plan=7]="Plan",r[r.Budget=8]="Budget",r[r.TargetKpi=9]="TargetKpi",r}({});var y=o(3594),b=o(6814),f=o(4414);const w=m.Ay.div({display:"grid",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",gap:"16px","@media (max-width: 980px)":{gridTemplateColumns:"1fr"}}),j=m.Ay.div({display:"grid",gridTemplateColumns:"repeat(4, minmax(0, 1fr))",gap:"12px",marginBottom:"16px","@media (max-width: 1100px)":{gridTemplateColumns:"repeat(2, minmax(0, 1fr))"},"@media (max-width: 640px)":{gridTemplateColumns:"1fr"}}),A=(0,m.Ay)(u.ui)({display:"grid",gap:"6px"}),k=m.Ay.span({color:"var(--color-muted)",fontSize:"12px",fontWeight:760}),C=m.Ay.strong({color:"var(--color-text)",fontSize:"clamp(22px, 2.4vw, 30px)",fontWeight:800,letterSpacing:"-.04em",fontVariantNumeric:"tabular-nums"}),M=(0,m.Ay)(u.ui)({display:"grid",gap:"12px",minWidth:0,overflow:"hidden"}),T=m.Ay.h2({margin:0,color:"var(--color-text)",fontSize:"17px",fontWeight:780,letterSpacing:0}),P=m.Ay.div({display:"flex",gap:"10px",alignItems:"center",flexWrap:"wrap"}),W=(r,e)=>new Intl.NumberFormat(e,{maximumFractionDigits:2,minimumFractionDigits:0}).format(r),R=()=>{const r=(0,n.A)(),{locale:e,t:o}=(0,b.Bd)(),m={period:h.CurrentMonth,comparisonMode:v.PreviousEquivalentPeriod,timeZoneId:Intl.DateTimeFormat().resolvedOptions().timeZone||"UTC",operationsPageNumber:1,operationsPageSize:10},{data:R,isLoading:S,isError:z}=(0,y.A7)(m),[I,{isFetching:L}]=(0,y.Ud)(),H=(0,t.useRef)(null),[D,Y]=(0,t.useState)(360);(0,t.useEffect)(()=>{const r=H.current;if(!r)return;const e=()=>{const e=r.getBoundingClientRect().width;if(!e)return;const o=window.getComputedStyle(r);Y(Math.max(220,Math.floor(e-parseFloat(o.paddingLeft)-parseFloat(o.paddingRight)-2)))};e();const o="undefined"===typeof ResizeObserver?void 0:new ResizeObserver(e);return null===o||void 0===o||o.observe(r),window.addEventListener("resize",e),()=>{null===o||void 0===o||o.disconnect(),window.removeEventListener("resize",e)}},[R]);if(S)return(0,f.jsx)(x.A,{});if(z||!R)return(0,f.jsx)(u.Dk,{children:(0,f.jsxs)(u.pp,{children:[(0,f.jsx)("strong",{children:o("\u0410\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0430 \u043d\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u0430")}),(0,f.jsx)("span",{children:o("\u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u044c backend \u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0430\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0438.")})]})});const B=R.timeSeries.map(r=>r.label),E=R.timeSeries.map(r=>r.netRevenue),F=R.itemRankings.slice(0,6).map(r=>r.name),N=R.itemRankings.slice(0,6).map(r=>r.netRevenue),$=R.sourceBreakdown.map(r=>({id:r.key,value:r.netRevenue,label:r.name}));return(0,f.jsxs)(u.Dk,{children:[(0,f.jsxs)(u.zY,{children:[(0,f.jsxs)(u.Fp,{children:[(0,f.jsx)(u.sT,{children:o("\u041e\u0442\u0447\u0435\u0442\u044b")}),(0,f.jsx)(u.I_,{children:o("\u0412\u044b\u0440\u0443\u0447\u043a\u0430, \u0437\u0430\u043a\u0430\u0437\u044b, \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u043f\u043e\u0437\u0438\u0446\u0438\u0438 \u0438 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0438 \u043f\u0440\u043e\u0434\u0430\u0436.")})]}),(0,f.jsx)(P,{children:(0,f.jsx)(g.A,{muiType:"info",leftIcon:(0,f.jsx)(l.A,{}),disabled:L,text:o(L?"\u042d\u043a\u0441\u043f\u043e\u0440\u0442...":"\u042d\u043a\u0441\u043f\u043e\u0440\u0442 CSV"),onClick:async()=>{try{((r,e)=>{const o=URL.createObjectURL(r),a=document.createElement("a");a.href=o,a.download=e,document.body.appendChild(a),a.click(),a.remove(),URL.revokeObjectURL(o)})(await I(m).unwrap(),"sales-analytics.csv"),a.oR.success(o("\u041e\u0442\u0447\u0451\u0442 \u0441\u043e\u0445\u0440\u0430\u043d\u0451\u043d \u0432 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."))}catch(r){const e=(0,i.S)(r,o("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435. \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441."));a.oR.error(e,{toastId:`query-error:${e}`})}}})})]}),(0,f.jsxs)(j,{children:[(0,f.jsxs)(A,{children:[(0,f.jsx)(k,{children:o("\u0412\u0430\u043b\u043e\u0432\u0430\u044f \u0432\u044b\u0440\u0443\u0447\u043a\u0430")}),(0,f.jsxs)(C,{children:[W(R.summary.grossRevenue,e)," BYN"]})]}),(0,f.jsxs)(A,{children:[(0,f.jsx)(k,{children:o("\u0427\u0438\u0441\u0442\u0430\u044f \u0432\u044b\u0440\u0443\u0447\u043a\u0430")}),(0,f.jsxs)(C,{children:[W(R.summary.netRevenue,e)," BYN"]})]}),(0,f.jsxs)(A,{children:[(0,f.jsx)(k,{children:o("\u0417\u0430\u043a\u0430\u0437\u044b")}),(0,f.jsx)(C,{children:R.summary.orderCount})]}),(0,f.jsxs)(A,{children:[(0,f.jsx)(k,{children:o("\u0421\u0440\u0435\u0434\u043d\u0438\u0439 \u0447\u0435\u043a")}),(0,f.jsxs)(C,{children:[W(R.summary.averageCheck,e)," BYN"]})]})]}),(0,f.jsxs)(w,{children:[(0,f.jsxs)(M,{ref:H,children:[(0,f.jsx)(T,{children:o("\u0422\u0440\u0435\u043d\u0434 \u0447\u0438\u0441\u0442\u043e\u0439 \u0432\u044b\u0440\u0443\u0447\u043a\u0438")}),0===B.length?(0,f.jsx)(u.pp,{children:(0,f.jsx)("span",{children:o("\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445")})}):(0,f.jsx)(p.b,{xAxis:[{scaleType:"point",data:B}],series:[{data:E,area:!0}],colors:[r.palette.primary.main],width:D,height:300})]}),(0,f.jsxs)(M,{children:[(0,f.jsx)(T,{children:o("\u0422\u043e\u043f \u043f\u043e\u0437\u0438\u0446\u0438\u0439")}),0===F.length?(0,f.jsx)(u.pp,{children:(0,f.jsx)("span",{children:o("\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445")})}):(0,f.jsx)(c.E,{xAxis:[{scaleType:"band",data:F}],series:[{data:N}],colors:[r.palette.primary.main],width:D,height:300})]}),(0,f.jsxs)(M,{children:[(0,f.jsx)(T,{children:o("\u0422\u0440\u0435\u043d\u0434 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0437\u0430\u043a\u0430\u0437\u043e\u0432")}),0===B.length?(0,f.jsx)(u.pp,{children:(0,f.jsx)("span",{children:o("\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445")})}):(0,f.jsx)(p.b,{xAxis:[{scaleType:"point",data:B}],series:[{data:R.timeSeries.map(r=>r.orderCount)}],colors:[r.palette.primary.main],width:D,height:300})]}),(0,f.jsxs)(M,{children:[(0,f.jsx)(T,{children:o("\u0412\u044b\u0440\u0443\u0447\u043a\u0430 \u043f\u043e \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0430\u043c")}),0===$.length?(0,f.jsx)(u.pp,{children:(0,f.jsx)("span",{children:o("\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0430\u043c")})}):(0,f.jsx)(s.r,{series:[{arcLabel:r=>`${r.label} (${W(Number(r.value),e)})`,arcLabelMinAngle:45,data:$}],sx:{[`& .${d.hM.root}`]:{fill:r.palette.primary.contrastText,fontWeight:"bold"}},colors:[r.palette.primary.main,r.palette.success.main,r.palette.warning.main,r.palette.error.main],width:D,height:300})]})]})]})}},8977(r,e,o){o.d(e,{A:()=>s});o(9950);var a=o(1866),i=o(9254),t=o(226);const n=(0,i.Ay)(t.A,{shouldForwardProp:r=>"muiType"!==r&&"horizontalMargin"!==r&&"verticalMargin"!==r&&"bottomMargin"!==r})`
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
`;var l=o(4414);const s=r=>{let{fullWidth:e,type:o,onClick:a,leftIcon:i,rightIcon:t,text:s,muiType:d,horizontalMargin:c,verticalMargin:p,bottomMargin:m,disabled:u,ariaLabel:g}=r;return(0,l.jsx)(n,{fullWidth:e,type:o,muiType:d,startIcon:i,endIcon:t,onClick:a,verticalMargin:p||!1,horizontalMargin:c||!1,bottomMargin:m||!1,disabled:u,"aria-label":g,children:s})}},475(r,e,o){var a=o(9950),i=o(132),t=o(9254),n=o(34),l=o(6814);const s=i.Ay.div({width:"100%",maxWidth:"1360px",minWidth:0,margin:"0 auto",textAlign:"left"}),d=i.Ay.div({display:"flex",flexWrap:"wrap",alignItems:"flex-start",justifyContent:"space-between",gap:"24px",marginBottom:"28px","@media (max-width: 760px)":{display:"grid"}}),c=i.Ay.div({display:"grid",gap:"10px",minWidth:0}),p=i.Ay.h1({margin:0,color:"var(--color-text)",fontSize:"clamp(28px, 3vw, 36px)",fontWeight:800,letterSpacing:"-.045em",lineHeight:1.18,"@media (max-width: 760px)":{fontSize:"25px"}}),m=i.Ay.p({maxWidth:"720px",margin:0,color:"var(--color-muted)",fontSize:"14px",fontWeight:450,lineHeight:1.6}),u=i.Ay.section({width:"100%",minWidth:0,padding:"var(--panel-padding)",background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"var(--radius-xl)",boxShadow:"var(--shadow-soft)"}),g=i.Ay.div({display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"12px",width:"100%",marginBottom:"14px","@media (max-width: 760px)":{display:"grid"}}),x=i.Ay.div({display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"}),h=i.Ay.div({display:"grid",alignItems:"start",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",gap:"12px","@media (max-width: 760px)":{gridTemplateColumns:"1fr"}}),v=i.Ay.form({display:"grid",gridTemplateColumns:"minmax(0, 1fr)",alignItems:"start",gap:"14px",width:"min(720px, 100%)",minWidth:0,padding:"var(--panel-padding)",background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"16px",boxShadow:"var(--shadow-soft)","@media (max-width: 560px)":{gap:"12px",padding:"14px"}}),y=i.Ay.div({display:"grid",placeItems:"center",gap:"8px",minHeight:"220px",padding:"28px",color:"var(--color-muted)",textAlign:"center",background:"var(--color-surface)",border:"1px dashed var(--color-border-strong)",borderRadius:"16px"}),b=(i.Ay.div({marginBottom:"8px",color:"var(--color-danger)",fontSize:"13px",fontWeight:650}),(0,t.Ay)(n.zh)({width:"100%",minWidth:0,"&.MuiDataGrid-autoHeight":{overflow:"visible","& .MuiDataGrid-main":{overflow:"visible"},"& .MuiDataGrid-columnHeaders":{position:"sticky",top:"var(--app-header-height)",zIndex:2,backgroundColor:"var(--color-surface-soft)",boxShadow:"0 1px 0 var(--color-border)"}}}));o.d(e,["Dk",0,s,"Fp",0,c,"I_",0,m,"M7",0,g,"aN",0,r=>{const{language:e}=(0,l.Bd)(),o=(0,a.useMemo)(()=>({...(0,l.it)(e),...r.localeText}),[e,r.localeText]);return a.createElement(b,{...r,localeText:o})},"kA",0,v,"pp",0,y,"sT",0,p,"ui",0,u,"vY",0,h,"v_",0,x,"zY",0,d])}}]);