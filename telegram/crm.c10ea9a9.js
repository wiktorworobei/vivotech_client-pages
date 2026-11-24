"use strict";(globalThis.webpackChunkvivotech_crm_client||=[]).push([[3473],{93473(r,e,o){o.r(e),o.d(e,{default:()=>I});var a=o(44088),t=o(17361),i=o(56308),n=o(18139),l=o(29615),s=o(46143),d=o(30937),c=o(87863),p=o(9512),m=o(73332),u=o(11596),x=o(88779),g=o(16839),h=o(17408),v=o(61),y=o(51222),b=o(70701),f=o(7176);let w=function(r){return r[r.Custom=0]="Custom",r[r.Today=1]="Today",r[r.Yesterday=2]="Yesterday",r[r.CurrentWeek=3]="CurrentWeek",r[r.PreviousWeek=4]="PreviousWeek",r[r.CurrentMonth=5]="CurrentMonth",r[r.PreviousMonth=6]="PreviousMonth",r[r.CurrentQuarter=7]="CurrentQuarter",r[r.PreviousQuarter=8]="PreviousQuarter",r[r.CurrentYear=9]="CurrentYear",r[r.PreviousYear=10]="PreviousYear",r[r.Last7Days=11]="Last7Days",r[r.Last30Days=12]="Last30Days",r[r.Last90Days=13]="Last90Days",r[r.Last12Months=14]="Last12Months",r}({}),j=function(r){return r[r.None=0]="None",r[r.PreviousEquivalentPeriod=1]="PreviousEquivalentPeriod",r[r.PreviousWeek=2]="PreviousWeek",r[r.PreviousMonth=3]="PreviousMonth",r[r.PreviousQuarter=4]="PreviousQuarter",r[r.PreviousYear=5]="PreviousYear",r[r.Custom=6]="Custom",r[r.Plan=7]="Plan",r[r.Budget=8]="Budget",r[r.TargetKpi=9]="TargetKpi",r}({});var A=o(59349),k=o(18815),C=o(20811);const M=v.Ay.div({display:"grid",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",gap:"16px","@media (max-width: 980px)":{gridTemplateColumns:"1fr"}}),T=v.Ay.div({display:"grid",gridTemplateColumns:"repeat(4, minmax(0, 1fr))",gap:"12px",marginBottom:"16px","@media (max-width: 1100px)":{gridTemplateColumns:"repeat(2, minmax(0, 1fr))"},"@media (max-width: 640px)":{gridTemplateColumns:"1fr"}}),W=(0,v.Ay)(y.ui)({display:"grid",gap:"6px"}),P=v.Ay.span({color:"var(--color-muted)",fontSize:"12px",fontWeight:760}),R=v.Ay.strong({color:"var(--color-text)",fontSize:"clamp(22px, 2.4vw, 30px)",fontWeight:800,letterSpacing:"-.04em",fontVariantNumeric:"tabular-nums"}),S=(0,v.Ay)(y.ui)({display:"grid",gap:"12px",minWidth:0,overflow:"hidden"}),z=v.Ay.h2({margin:0,color:"var(--color-text)",fontSize:"17px",fontWeight:780,letterSpacing:0}),L=v.Ay.div({display:"flex",gap:"10px",alignItems:"center",flexWrap:"wrap"}),I=()=>{const r=(0,p.A)(),{locale:e,t:o}=(0,k.Bd)(),v=(0,a.zJ)(),[I,D]=(0,n.useState)(w.CurrentMonth),H={period:I,comparisonMode:j.PreviousEquivalentPeriod,timeZoneId:Intl.DateTimeFormat().resolvedOptions().timeZone||"UTC",operationsPageNumber:1,operationsPageSize:10},{data:Y,isLoading:B,isError:F,isFetching:E,refetch:$}=(0,A.A7)(H),[N,{isFetching:Q}]=(0,A.Ud)(),U=(0,n.useRef)(null),[O,_]=(0,n.useState)(360);if((0,n.useEffect)(()=>{const r=U.current;if(!r)return;const e=()=>{const e=r.getBoundingClientRect().width;if(!e)return;const o=window.getComputedStyle(r);_(Math.max(220,Math.floor(e-parseFloat(o.paddingLeft)-parseFloat(o.paddingRight)-2)))};e();const o="undefined"==typeof ResizeObserver?void 0:new ResizeObserver(e);return null==o||o.observe(r),window.addEventListener("resize",e),()=>{null==o||o.disconnect(),window.removeEventListener("resize",e)}},[Y]),B)return(0,C.jsx)(f.A,{});if(F||!Y)return(0,C.jsx)(y.Dk,{children:(0,C.jsxs)(y.pp,{children:[(0,C.jsx)("strong",{children:o("Аналитика не загружена")}),(0,C.jsx)("span",{children:"Не удалось получить отчёт. Повторите загрузку."}),(0,C.jsx)(l.A,{onClick:()=>{$()},children:"Повторить загрузку отчёта"})]})});if(!v.rateReady)return(0,C.jsx)(y.Dk,{children:(0,C.jsx)("p",{children:v.isFetching?"Загружаем курс валюты…":"Курс валюты недоступен. Выберите BYN или повторите загрузку курса."})});const q=Y.timeSeries.map(r=>r.label),G=Y.timeSeries.map(r=>v.convert(r.netRevenue)),K=Y.itemRankings.slice(0,6).map(r=>r.name),V=Y.itemRankings.slice(0,6).map(r=>v.convert(r.netRevenue)),Z=Y.sourceBreakdown.map(r=>{var e;return{id:r.key,value:null!==(e=v.convert(r.netRevenue))&&void 0!==e?e:0,label:r.name}});return(0,C.jsxs)(y.Dk,{children:[(0,C.jsxs)(y.zY,{children:[(0,C.jsxs)(y.Fp,{children:[(0,C.jsx)(y.sT,{children:o("Отчеты")}),(0,C.jsx)(y.I_,{children:o("Выручка, заказы, популярные позиции и источники продаж.")})]}),(0,C.jsxs)(L,{children:[(0,C.jsx)(s.A,{select:!0,size:"small",label:"Период отчёта",value:I,disabled:E,onChange:r=>D(Number(r.target.value)),sx:{minWidth:190},children:[[w.Today,"Сегодня"],[w.Yesterday,"Вчера"],[w.CurrentWeek,"Текущая неделя"],[w.CurrentMonth,"Текущий месяц"],[w.PreviousMonth,"Прошлый месяц"],[w.Last30Days,"Последние 30 дней"],[w.CurrentYear,"Текущий год"]].map(r=>{let[e,o]=r;return(0,C.jsx)(d.A,{value:e,children:o},e)})}),(0,C.jsx)(b.A,{muiType:"info",leftIcon:(0,C.jsx)(m.A,{}),disabled:Q||E,text:o(Q?"Экспорт...":"Экспорт CSV"),onClick:async()=>{try{(r=>{const e=URL.createObjectURL(r),o=document.createElement("a");o.href=e,o.download="sales-analytics.csv",document.body.appendChild(o),o.click(),o.remove(),URL.revokeObjectURL(e)})(await N(H).unwrap()),t.oR.success(o("Отчёт сохранён в загрузки."))}catch(r){const e=(0,i.S)(r,o("Не удалось загрузить данные. Повторите запрос."));t.oR.error(e,{toastId:`query-error:${e}`})}}})]})]}),E&&(0,C.jsx)(c.A,{"aria-label":"Обновление отчёта",sx:{mb:2}}),(0,C.jsxs)(T,{children:[(0,C.jsxs)(W,{children:[(0,C.jsx)(P,{children:o("Валовая выручка")}),(0,C.jsx)(R,{children:v.format(Y.summary.grossRevenue,{locale:e})})]}),(0,C.jsxs)(W,{children:[(0,C.jsx)(P,{children:o("Чистая выручка")}),(0,C.jsx)(R,{children:v.format(Y.summary.netRevenue,{locale:e})})]}),(0,C.jsxs)(W,{children:[(0,C.jsx)(P,{children:o("Заказы")}),(0,C.jsx)(R,{children:Y.summary.orderCount})]}),(0,C.jsxs)(W,{children:[(0,C.jsx)(P,{children:o("Средний чек")}),(0,C.jsx)(R,{children:v.format(Y.summary.averageCheck,{locale:e})})]})]}),(0,C.jsxs)(M,{children:[(0,C.jsxs)(S,{ref:U,children:[(0,C.jsx)(z,{children:o("Тренд чистой выручки")}),0===q.length?(0,C.jsx)(y.pp,{children:(0,C.jsx)("span",{children:o("Нет данных")})}):(0,C.jsx)(h.b,{xAxis:[{scaleType:"point",data:q}],series:[{data:G,area:!0,label:v.currency}],colors:[r.palette.primary.main],width:O,height:300})]}),(0,C.jsxs)(S,{children:[(0,C.jsx)(z,{children:o("Топ позиций")}),0===K.length?(0,C.jsx)(y.pp,{children:(0,C.jsx)("span",{children:o("Нет данных")})}):(0,C.jsx)(g.E,{xAxis:[{scaleType:"band",data:K}],series:[{data:V,label:v.currency}],colors:[r.palette.primary.main],width:O,height:300})]}),(0,C.jsxs)(S,{children:[(0,C.jsx)(z,{children:o("Тренд количества заказов")}),0===q.length?(0,C.jsx)(y.pp,{children:(0,C.jsx)("span",{children:o("Нет данных")})}):(0,C.jsx)(h.b,{xAxis:[{scaleType:"point",data:q}],series:[{data:Y.timeSeries.map(r=>r.orderCount)}],yAxis:[{min:0,tickMinStep:1}],colors:[r.palette.primary.main],width:O,height:300})]}),(0,C.jsxs)(S,{children:[(0,C.jsx)(z,{children:o("Выручка по источникам")}),0===Z.length?(0,C.jsx)(y.pp,{children:(0,C.jsx)("span",{children:o("Нет данных по источникам")})}):(0,C.jsx)(u.r,{series:[{arcLabel:r=>`${r.label} (${((r,e)=>new Intl.NumberFormat(e,{maximumFractionDigits:2,minimumFractionDigits:0}).format(r))(Number(r.value),e)} ${v.currency})`,arcLabelMinAngle:45,data:Z}],sx:{[`& .${x.hM.root}`]:{fill:r.palette.primary.contrastText,fontWeight:"bold"}},colors:[r.palette.primary.main,r.palette.success.main,r.palette.warning.main,r.palette.error.main],width:O,height:300})]})]})]})}},70701(r,e,o){o.d(e,{A:()=>s}),o(18139);var a=o(54499),t=o(28751),i=o(29615);const n=(0,t.Ay)(i.A,{shouldForwardProp:r=>"muiType"!==r&&"horizontalMargin"!==r&&"verticalMargin"!==r&&"bottomMargin"!==r})`
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
`;var l=o(20811);const s=r=>{let{fullWidth:e,type:o,onClick:a,leftIcon:t,rightIcon:i,text:s,muiType:d,horizontalMargin:c,verticalMargin:p,bottomMargin:m,disabled:u,ariaLabel:x}=r;return(0,l.jsx)(n,{fullWidth:e,type:o,muiType:d,startIcon:t,endIcon:i,onClick:a,verticalMargin:p||!1,horizontalMargin:c||!1,bottomMargin:m||!1,disabled:u,"aria-label":x,children:s})}},51222(r,e,o){var a=o(18139),t=o(61),i=o(28751),n=o(4780),l=o(18815);const s=t.Ay.div({width:"100%",maxWidth:"var(--app-content-width, 1440px)",minWidth:0,margin:"0 auto",textAlign:"left"}),d=t.Ay.div({display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"16px 24px",marginBottom:"24px","@media (max-width: 760px)":{display:"grid",marginBottom:"18px"}}),c=t.Ay.div({display:"grid",gap:"6px",minWidth:0}),p=t.Ay.h1({margin:0,color:"var(--color-text)",fontSize:"clamp(24px, 2.35vw, 34px)",fontWeight:800,letterSpacing:"-.04em",lineHeight:1.2,overflowWrap:"anywhere"}),m=t.Ay.p({maxWidth:"720px",margin:0,color:"var(--color-muted)",fontSize:"14px",fontWeight:450,lineHeight:1.6}),u=t.Ay.section({width:"100%",minWidth:0,padding:"var(--panel-padding)",background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"var(--radius-xl)",boxShadow:"var(--shadow-soft)"}),x=t.Ay.div({display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"12px",width:"100%",marginBottom:"14px","@media (max-width: 760px)":{display:"grid"}}),g=t.Ay.div({display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"}),h=t.Ay.div({display:"grid",alignItems:"start",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",gap:"12px","@media (max-width: 760px)":{gridTemplateColumns:"1fr"}}),v=t.Ay.form({display:"grid",gridTemplateColumns:"minmax(0, 1fr)",alignItems:"start",gap:"14px",width:"min(720px, 100%)",minWidth:0,padding:"var(--panel-padding)",background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"16px",boxShadow:"var(--shadow-soft)","@media (max-width: 560px)":{gap:"12px",padding:"14px"}}),y=t.Ay.div({display:"grid",placeItems:"center",gap:"8px",minHeight:"220px",padding:"28px",color:"var(--color-muted)",textAlign:"center",background:"var(--color-surface)",border:"1px dashed var(--color-border-strong)",borderRadius:"16px"}),b=(t.Ay.div({marginBottom:"8px",color:"var(--color-danger)",fontSize:"13px",fontWeight:650}),(0,i.Ay)(n.zh)({width:"100%",minWidth:0,"&.MuiDataGrid-autoHeight":{overflow:"visible","& .MuiDataGrid-main":{overflow:"visible"},"& .MuiDataGrid-columnHeaders":{position:"sticky",top:"var(--app-header-height)",zIndex:2,backgroundColor:"var(--color-surface-soft)",boxShadow:"0 1px 0 var(--color-border)"}}}));o.d(e,["Dk",0,s,"Fp",0,c,"I_",0,m,"M7",0,x,"aN",0,r=>{const{language:e}=(0,l.Bd)(),o=(0,a.useMemo)(()=>({...(0,l.it)(e),...r.localeText}),[e,r.localeText]);return a.createElement(b,{...r,localeText:o})},"kA",0,v,"pp",0,y,"sT",0,p,"ui",0,u,"vY",0,h,"v_",0,g,"zY",0,d])}}]);