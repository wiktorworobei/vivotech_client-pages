"use strict";(globalThis.webpackChunkvivotech_crm_client||=[]).push([[2310],{88627(r,e,a){var o=a(77411);e.A=void 0;var i=o(a(31199)),t=a(20811);e.A=(0,i.default)((0,t.jsx)("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7zm2 16H5V5h11.17L19 7.83zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3M6 6h9v4H6z"}),"SaveOutlined")},62310(r,e,a){a.r(e),a.d(e,{default:()=>V});var o=a.cw(function(r,e){var a=s();e.A=void 0;var o=a(t()),i=n();e.A=(0,o.default)((0,i.jsx)("path",{d:"M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3zm2-8h6v8H5zm5-6H6L5 5H2v2h12V5h-3z"}),"DeleteSweepOutlined")}),i=a.cw(function(r,e){var a=s();e.A=void 0;var o=a(t()),i=n();e.A=(0,o.default)((0,i.jsx)("path",{d:"M13 11.33 18 18H6l5-6.67V6h2m2.96-2H8.04c-.42 0-.65.48-.39.81L9 6.5v4.17L3.2 18.4c-.49.66-.02 1.6.8 1.6h16c.82 0 1.29-.94.8-1.6L15 10.67V6.5l1.35-1.69c.26-.33.03-.81-.39-.81"}),"ScienceOutlined")}),t=()=>a(31199),n=()=>a(20811),s=()=>a(77411),l=a(18139),c=a(46143),d=a(40361),p=a(59018),u=a(88627);n();var h=a(61),x=a(17361),m=a(56308),g=a(70701),v=a(7176),y=a(51222),A=a(22172),b=a(17096),f=a(18815),j=a(31802),w=a(80741),C=a(20128),S=a(85792),k=a(12010),D=a(29615),T=a(55753),M=a(46747),z=a(84470);function I(){const{data:r,isFetching:e,isError:a,refetch:o}=(0,z.M0)(),[i,t]=(0,z.sD)(),[s,p]=(0,z.mX)(),[h,x]=(0,l.useState)(""),[v,A]=(0,l.useState)(""),[b,f]=(0,l.useState)(!1),[j,w]=(0,l.useState)(""),[C,I]=(0,l.useState)(""),H=t.isLoading||p.isLoading;function R(){x(""),A(""),f(!1)}return(0,n().jsxs)(y.ui,{children:[(0,n().jsxs)(y.M7,{children:[(0,n().jsxs)("div",{children:[(0,n().jsx)(S.A,{component:"h2",fontSize:14,fontWeight:760,children:"DaData — проверка контрагентов"}),(0,n().jsx)(S.A,{variant:"body2",color:"text.secondary",children:"Ключи действуют для выбранной компании. API-ключ нужен для поиска организаций, секретный — для стандартизации и личного кабинета DaData."})]}),(0,n().jsx)(y.v_,{children:(0,n().jsx)(g.A,{type:"button",muiType:"success",leftIcon:(0,n().jsx)(u.A,{}),text:t.isLoading?"Сохранение...":"Сохранить ключи DaData",onClick:()=>{!async function(){I(""),w("");try{await i({apiKey:h.trim()||void 0,secretKey:v.trim()||void 0,clearSecretKey:b}).unwrap(),R(),w("Настройки DaData сохранены. Новые запросы используют сохранённые ключи.")}catch(r){I((0,m.S)(r,"Не удалось сохранить настройки DaData."))}finally{t.reset()}}()},disabled:H||e||!r||!h.trim()&&!v.trim()&&!b||!r.hasApiKey&&!h.trim()})})]}),(0,n().jsxs)(k.A,{spacing:2,children:[e&&(0,n().jsx)(S.A,{role:"status",variant:"body2",children:"Загрузка настроек DaData..."}),a&&(0,n().jsx)(d.A,{severity:"error",action:(0,n().jsx)(D.A,{onClick:()=>{o()},children:"Повторить"}),children:"Не удалось загрузить настройки DaData."}),r&&(0,n().jsxs)(d.A,{severity:r.hasApiKey?"success":"info",children:[r.hasApiKey?"API-ключ задан. "+(r.hasSecretKey?"Секретный ключ задан.":"Секретный ключ не задан."):"API-ключ ещё не задан.",r.usesServerDefaults&&r.hasApiKey?" Используются общие настройки сервера.":""]}),(0,n().jsxs)(k.A,{direction:{xs:"column",md:"row"},spacing:2,children:[(0,n().jsx)(c.A,{fullWidth:!0,type:"password",label:"API-ключ DaData",autoComplete:"new-password",value:h,disabled:H||e||!r,inputProps:{maxLength:256},helperText:null!=r&&r.hasApiKey?"Оставьте пустым, чтобы сохранить текущий API-ключ.":"Вставьте API-ключ из личного кабинета DaData.",onChange:r=>{x(r.target.value),w("")}}),(0,n().jsx)(c.A,{fullWidth:!0,type:"password",label:"Секретный ключ DaData",autoComplete:"new-password",value:v,disabled:H||e||!r||b,inputProps:{maxLength:256},helperText:null!=r&&r.hasSecretKey?"Оставьте пустым, чтобы сохранить текущий секретный ключ.":"Необязательно для поиска организаций.",onChange:r=>{A(r.target.value),w("")}})]}),(null==r?void 0:r.hasSecretKey)&&(0,n().jsx)(T.A,{label:"Удалить секретный ключ",control:(0,n().jsx)(M.A,{checked:b,disabled:H||e,onChange:r=>{f(r.target.checked),A(""),w("")}})}),(0,n().jsx)(S.A,{variant:"caption",color:"text.secondary",children:"Ключи хранятся на сервере в зашифрованном виде. Сохранённые значения не отображаются."}),r&&!r.usesServerDefaults&&(0,n().jsx)(D.A,{color:"error",disabled:H||e,onClick:()=>{!async function(){I(""),w("");try{await s().unwrap(),R(),w("Ключи компании удалены. Используются общие настройки DaData сервера, если они заданы.")}catch(r){I((0,m.S)(r,"Не удалось сбросить настройки DaData."))}}()},sx:{alignSelf:"flex-start"},children:"Сбросить ключи компании"}),j&&(0,n().jsx)(d.A,{severity:"success",children:j}),C&&(0,n().jsx)(d.A,{severity:"error",children:C})]})]})}function H(){const{isCompanyAdmin:r}=(0,j.A)();return r?(0,n().jsx)(I,{}):null}var R=a(81219),W=a(30937),L=a(60538);function N(){const{isCompanyAdmin:r,isSuperAdmin:e}=(0,j.A)(),a=r||e,o=Number((0,w.gF)()),i=(0,L.e1)(o,{skip:!o}),[t,s]=(0,L.Uj)(),[p,u]=(0,l.useState)("BYN"),[h,x]=(0,l.useState)(""),[g,v]=(0,l.useState)("");return(0,l.useEffect)(()=>{i.data&&u(i.data.workingCurrency)},[i.data]),(0,n().jsx)(R.A,{variant:"outlined",sx:{p:2},children:(0,n().jsxs)(k.A,{spacing:2,children:[(0,n().jsx)(S.A,{variant:"h6",children:"Основная валюта компании"}),(0,n().jsx)(S.A,{children:"Эта валюта используется по умолчанию. Валюту отображения для всего приложения можно выбрать в верхней панели: выбор сохраняется в этом браузере. Другие суммы доступны в подсказке к цене. История прихода сохраняет курсы на его дату."}),i.isError&&(0,n().jsxs)(d.A,{severity:"error",children:["Не удалось загрузить валюту компании. ",(0,n().jsx)(D.A,{onClick:()=>{i.refetch()},children:"Повторить"})]}),!a&&(0,n().jsx)(S.A,{color:"text.secondary",children:"Основную валюту меняет администратор компании."}),(0,n().jsxs)(c.A,{select:!0,label:"Валюта работы компании",value:p,disabled:!a||i.isFetching||s.isLoading||i.isError,onChange:r=>{u(r.target.value),x("")},children:[(0,n().jsx)(W.A,{value:"BYN",children:"BYN — Белорусский рубль"}),(0,n().jsx)(W.A,{value:"USD",children:"USD — Доллар США"}),(0,n().jsx)(W.A,{value:"RUB",children:"RUB — Российский рубль"})]}),g&&(0,n().jsx)(d.A,{severity:"error",children:g}),h&&(0,n().jsx)(d.A,{severity:"success",children:h}),a&&(0,n().jsx)(D.A,{disabled:!i.data||i.isFetching||i.isError||s.isLoading||p===i.data.workingCurrency,onClick:async()=>{v("");try{await t({firmId:o,workingCurrency:p}).unwrap(),x("Основная валюта сохранена.")}catch(r){v((0,m.S)(r,"Не удалось сохранить валюту компании."))}},children:"Сохранить основную валюту"})]})})}var O=a(59291),B=a(68066);const F=h.Ay.div({display:"grid",gap:"10px"}),E=h.Ay.div({display:"grid",gap:"16px"}),P=h.Ay.div({display:"grid",gridTemplateColumns:"minmax(0, 1fr) auto 120px",alignItems:"center",gap:"12px",minHeight:"58px",padding:"10px 12px",background:"var(--color-surface-soft)",border:"1px solid var(--color-border)",borderRadius:"12px","@media (max-width: 640px)":{gridTemplateColumns:"1fr",alignItems:"stretch"}}),$=h.Ay.div({display:"grid",gridTemplateColumns:"repeat(3, minmax(0, 1fr))",gap:"10px","@media (max-width: 820px)":{gridTemplateColumns:"1fr"}}),K=h.Ay.div({color:"var(--color-text)",fontSize:"14px",fontWeight:760}),_=h.Ay.p({margin:0,color:"var(--color-muted)",fontSize:"14px",lineHeight:1.55}),V=()=>{const{t:r}=(0,f.Bd)(),{isCompanyAdmin:e,isSuperAdmin:a,updateFirmName:t,reloadWorkspace:s}=(0,j.A)(),h=Number((0,w.gF)()),{data:S,isLoading:k}=(0,b.mz)(),[D,{isLoading:T}]=(0,b.EX)(),M=(0,l.useMemo)(()=>function(){const r=new Map((arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map(r=>[r.item,r]));return A.Om.map(e=>({...e,...r.get(e.item)})).sort((r,e)=>r.displayOrder-e.displayOrder)}(S),[S]),[z,I]=(0,l.useState)(M),{data:R}=(0,C._2)(h,{skip:!e}),[W,{isLoading:L}]=(0,C.KP)(),[V,Y]=(0,l.useState)(""),[U,G]=(0,l.useState)(""),{data:q,isFetching:X,refetch:J}=(0,O.q9)(void 0,{skip:!a}),[Z,{isLoading:Q}]=(0,O.GJ)(),[rr,{isLoading:er}]=(0,O.Aq)(),{data:ar,isFetching:or}=(0,B.P4)(void 0,{skip:!e}),[ir,{isLoading:tr}]=(0,B.Z0)(),[nr,sr]=(0,l.useState)(""),[lr,cr]=(0,l.useState)(""),[dr,pr]=(0,l.useState)(""),[ur,hr]=(0,l.useState)("");(0,l.useEffect)(()=>{I(M)},[M]),(0,l.useEffect)(()=>{R&&(Y(R.name),G(R.address))},[R]),(0,l.useEffect)(()=>{ar&&(sr(ar.nameColumnName),cr(ar.countColumnName),pr(ar.selectedColumnNames.join("\n")),hr(Object.entries(ar.additionalFields).map(r=>{let[e,a]=r;return`${e}=${a}`}).join("\n")))},[ar]);const xr=(r,e)=>{I(a=>a.map(a=>a.item===r?{...a,...e}:a))};return k?(0,n().jsx)(v.A,{}):(0,n().jsxs)(y.Dk,{children:[(0,n().jsx)(y.zY,{children:(0,n().jsxs)(y.Fp,{children:[(0,n().jsx)(y.sT,{children:r("Settings")}),(0,n().jsx)(y.I_,{children:"Подключения, импорт из Excel и навигация компании."})]})}),(0,n().jsxs)(E,{children:[(0,n().jsx)(H,{},h),(0,n().jsx)(N,{},`currency:${h}`),a&&(0,n().jsxs)(y.ui,{children:[(0,n().jsxs)(y.M7,{children:[(0,n().jsx)(K,{children:"Реквизиты компании"}),(0,n().jsx)(y.v_,{children:(0,n().jsx)(g.A,{muiType:"success",text:L?"Сохранение...":"Сохранить компанию",leftIcon:(0,n().jsx)(u.A,{}),onClick:async()=>{try{const r=await W({id:h,body:{name:V,address:U}}).unwrap();t(r.name),x.oR.success("Компания обновлена")}catch(r){x.oR.error((0,m.S)(r,"Не удалось обновить компанию"))}},disabled:L||!V.trim()})})]}),(0,n().jsxs)(F,{children:[(0,n().jsx)(c.A,{label:"Название компании",value:V,onChange:r=>Y(r.target.value)}),(0,n().jsx)(c.A,{label:"Адрес",value:U,onChange:r=>G(r.target.value)})]})]}),e&&(0,n().jsxs)(y.ui,{children:[(0,n().jsxs)(y.M7,{children:[(0,n().jsx)(K,{children:"Тестовые данные"}),(0,n().jsxs)(y.v_,{children:[(0,n().jsx)(g.A,{muiType:"success",text:Q?"Наполнение...":"Наполнить тестовыми данными",leftIcon:(0,n().jsx)(i().A,{}),onClick:async()=>{try{const r=await Z().unwrap();x.oR.success(r.addedRecordCount>0?`Тестовые данные добавлены (${r.addedRecordCount} записей)`:"Тестовые данные уже добавлены"),await J(),window.setTimeout(s,450)}catch(r){x.oR.error((0,m.S)(r,"Не удалось добавить тестовые данные"))}},disabled:Q||er||X||Boolean(null==q?void 0:q.hasTestData)}),(0,n().jsx)(g.A,{muiType:"error",text:er?"Удаление...":"Убрать тестовые данные",leftIcon:(0,n().jsx)(o().A,{}),onClick:async()=>{if(window.confirm("Удалить все данные, созданные тестовым сидером? Пользовательские данные останутся в базе."))try{const r=await rr().unwrap(),e=r.preservedRecordCount>0?` Сохранено связанных пользовательских записей: ${r.preservedRecordCount}.`:"";x.oR.success(`Тестовые данные удалены.${e}`),await J(),window.setTimeout(s,450)}catch(r){x.oR.error((0,m.S)(r,"Не удалось удалить тестовые данные"))}},disabled:Q||er||X||!(null!=q&&q.hasTestData)})]})]}),(0,n().jsxs)(F,{children:[(0,n().jsx)(_,{children:"Добавьте демонстрационные компании, пользователей, каталог, клиентов, заказы и логистику. При очистке удалятся только добавленные тестовые записи. Ваши собственные данные сохранятся."}),(0,n().jsx)(d.A,{severity:null!=q&&q.hasTestData?"info":"success",children:X?"Проверяем состояние тестовых данных...":null!=q&&q.legacySeedDetected?"Найдены ранее добавленные демонстрационные данные. Их можно убрать этой кнопкой.":null!=q&&q.hasTestData?`Тестовые данные добавлены. Отслеживается записей: ${q.trackedRecordCount}.`:"Тестовых данных в базе нет."})]})]}),e&&(0,n().jsxs)(y.ui,{children:[(0,n().jsxs)(y.M7,{children:[(0,n().jsxs)("div",{children:[(0,n().jsx)(K,{children:"Импорт товаров из Excel"}),(0,n().jsx)(_,{children:"Укажите заголовки колонок из шаблона поставщика. При загрузке файла они будут выбраны автоматически. Цены заполняются в карточке или из файла для прихода. В ePass количество упаковки сохраняется как характеристика, складской остаток не переносится."})]}),(0,n().jsx)(y.v_,{children:(0,n().jsx)(g.A,{muiType:"success",text:tr?"Сохранение...":"Сохранить настройки импорта",leftIcon:(0,n().jsx)(u.A,{}),onClick:async()=>{const r=dr.split(/\r?\n/).map(r=>r.trim()).filter(Boolean),e={},a=new Set;for(const r of ur.split(/\r?\n/).map(r=>r.trim()).filter(Boolean)){const o=r.indexOf("="),i=o<0?"":r.slice(0,o).trim(),t=o<0?"":r.slice(o+1).trim(),n=i.toLocaleLowerCase();if(!i||!t)return void x.oR.error("Дополнительные поля указываются в формате Название=Значение");if(a.has(n))return void x.oR.error(`Поле «${i}» указано несколько раз`);a.add(n),e[i]=t}try{await ir({nameColumnName:nr.trim(),priceColumnName:"",countColumnName:lr.trim(),selectedColumnNames:r,additionalFields:e}).unwrap(),x.oR.success("Настройки импорта товаров сохранены")}catch(r){x.oR.error((0,m.S)(r,"Не удалось сохранить настройки импорта"))}},disabled:tr||or})})]}),(0,n().jsxs)(F,{children:[(0,n().jsxs)($,{children:[(0,n().jsx)(c.A,{fullWidth:!0,size:"small",label:"Колонка названия",placeholder:"Например: Название товара",value:nr,onChange:r=>sr(r.target.value)}),(0,n().jsx)(c.A,{fullWidth:!0,size:"small",label:"Колонка остатка",placeholder:"Например: Остаток",value:lr,onChange:r=>cr(r.target.value)})]}),(0,n().jsx)(c.A,{multiline:!0,minRows:3,label:"Колонки, которые нужно добавлять в поля товара",placeholder:"Бренд\nСтрана производства\nАртикул поставщика",helperText:"По одному точному заголовку колонки на строку.",value:dr,onChange:r=>pr(r.target.value)}),(0,n().jsx)(c.A,{multiline:!0,minRows:2,label:"Постоянные дополнительные поля",placeholder:"Поставщик=Основной поставщик\nКанал=Excel",helperText:"Этих колонок может не быть в файле: поле будет добавлено каждому товару. Формат — Название=Значение.",value:ur,onChange:r=>hr(r.target.value)})]})]}),(0,n().jsxs)(y.ui,{children:[(0,n().jsxs)(y.M7,{children:[(0,n().jsx)(K,{children:r("Firm menu")}),(0,n().jsx)(y.v_,{children:(0,n().jsx)(g.A,{muiType:"success",text:r(T?"Saving...":"Save"),leftIcon:(0,n().jsx)(u.A,{}),onClick:async()=>{try{await D([...z].sort((r,e)=>r.displayOrder-e.displayOrder)).unwrap(),x.oR.success(r("Menu settings saved"))}catch(e){x.oR.error((0,m.S)(e,r("Menu settings were not saved")))}},disabled:T})})]}),(0,n().jsx)(F,{children:z.map(e=>(0,n().jsxs)(P,{children:[(0,n().jsx)(K,{children:r(A.Oz[e.item])}),(0,n().jsx)(p.A,{checked:e.isVisible,inputProps:{"aria-label":r(A.Oz[e.item])},onChange:r=>xr(e.item,{isVisible:r.target.checked})}),(0,n().jsx)(c.A,{size:"small",type:"number",label:r("Order"),value:e.displayOrder,onChange:r=>xr(e.item,{displayOrder:Number(r.target.value)})})]},e.item))})]})]})]})}},70701(r,e,a){a.d(e,{A:()=>l}),a(18139);var o=a(54499),i=a(28751),t=a(29615);const n=(0,i.Ay)(t.A,{shouldForwardProp:r=>"muiType"!==r&&"horizontalMargin"!==r&&"verticalMargin"!==r&&"bottomMargin"!==r})`
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

  ${r=>{let{muiType:e}=r;switch(e){case"primary":return o.AH`
          border-color: var(--color-primary-border);
          background: var(--color-primary);
          color: var(--color-on-primary);

          &:hover {
            background: var(--color-primary-hover);
            color: var(--color-on-primary);
          }
        `;case"secondary":return o.AH`
          border-color: var(--color-border-strong);
          background: var(--color-surface);
          color: var(--color-text);

          &:hover {
            border-color: var(--color-primary);
            background: var(--color-primary-soft);
            color: var(--color-primary);
          }
        `;case"success":return o.AH`
          border-color: var(--color-primary);
          background: var(--color-primary);
          color: var(--color-on-primary);

          &:hover {
            background: var(--color-primary-hover);
            color: var(--color-on-primary);
          }
        `;case"error":return o.AH`
          border-color: var(--color-danger-border);
          background: var(--color-danger-soft);
          color: var(--color-danger-text);

          &:hover {
            background: var(--color-danger-soft);
            border-color: var(--color-danger);
            color: var(--color-danger-text);
          }
        `;case"edit":return o.AH`
          border-color: var(--color-warning-border);
          background: var(--color-warning-soft);
          color: var(--color-warning-text);

          &:hover {
            background: var(--color-warning-soft);
            border-color: var(--color-warning);
            color: var(--color-warning-text);
          }
        `;case"info":return o.AH`
          border-color: var(--color-primary-border);
          background: var(--color-primary-soft);
          color: var(--color-primary);

          &:hover {
            background: var(--color-primary-soft-hover);
            color: var(--color-primary-hover);
          }
        `;default:return o.AH`
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

  ${r=>o.AH`
  ${!0===r.horizontalMargin&&o.AH`
    margin-left: 8px;
    margin-right: 8px;
  `}

  ${!0===r.verticalMargin&&o.AH`
    margin-top: 8px;
    margin-bottom: 8px;
  `}

  ${!0===r.bottomMargin&&o.AH`
    margin-top: 8px;
    margin-bottom: 24px;
  `}
`}
`;var s=a(20811);const l=r=>{let{fullWidth:e,type:a,onClick:o,leftIcon:i,rightIcon:t,text:l,muiType:c,horizontalMargin:d,verticalMargin:p,bottomMargin:u,disabled:h,ariaLabel:x}=r;return(0,s.jsx)(n,{fullWidth:e,type:a,muiType:c,startIcon:i,endIcon:t,onClick:o,verticalMargin:p||!1,horizontalMargin:d||!1,bottomMargin:u||!1,disabled:h,"aria-label":x,children:l})}},51222(r,e,a){var o=a(18139),i=a(61),t=a(28751),n=a(4780),s=a(18815);const l=i.Ay.div({width:"100%",maxWidth:"var(--app-content-width, 1440px)",minWidth:0,margin:"0 auto",textAlign:"left"}),c=i.Ay.div({display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"16px 24px",marginBottom:"24px","@media (max-width: 760px)":{display:"grid",marginBottom:"18px"}}),d=i.Ay.div({display:"grid",gap:"6px",minWidth:0}),p=i.Ay.h1({margin:0,color:"var(--color-text)",fontSize:"clamp(24px, 2.35vw, 34px)",fontWeight:800,letterSpacing:"-.04em",lineHeight:1.2,overflowWrap:"anywhere"}),u=i.Ay.p({maxWidth:"720px",margin:0,color:"var(--color-muted)",fontSize:"14px",fontWeight:450,lineHeight:1.6}),h=i.Ay.section({width:"100%",minWidth:0,padding:"var(--panel-padding)",background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"var(--radius-xl)",boxShadow:"var(--shadow-soft)"}),x=i.Ay.div({display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"12px",width:"100%",marginBottom:"14px","@media (max-width: 760px)":{display:"grid"}}),m=i.Ay.div({display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"}),g=i.Ay.div({display:"grid",alignItems:"start",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",gap:"12px","@media (max-width: 760px)":{gridTemplateColumns:"1fr"}}),v=i.Ay.form({display:"grid",gridTemplateColumns:"minmax(0, 1fr)",alignItems:"start",gap:"14px",width:"min(720px, 100%)",minWidth:0,padding:"var(--panel-padding)",background:"var(--color-surface)",border:"1px solid var(--color-border)",borderRadius:"16px",boxShadow:"var(--shadow-soft)","@media (max-width: 560px)":{gap:"12px",padding:"14px"}}),y=i.Ay.div({display:"grid",placeItems:"center",gap:"8px",minHeight:"220px",padding:"28px",color:"var(--color-muted)",textAlign:"center",background:"var(--color-surface)",border:"1px dashed var(--color-border-strong)",borderRadius:"16px"}),A=(i.Ay.div({marginBottom:"8px",color:"var(--color-danger)",fontSize:"13px",fontWeight:650}),(0,t.Ay)(n.zh)({width:"100%",minWidth:0,"&.MuiDataGrid-autoHeight":{overflow:"visible","& .MuiDataGrid-main":{overflow:"visible"},"& .MuiDataGrid-columnHeaders":{position:"sticky",top:"var(--app-header-height)",zIndex:2,backgroundColor:"var(--color-surface-soft)",boxShadow:"0 1px 0 var(--color-border)"}}}));a.d(e,["Dk",0,l,"Fp",0,d,"I_",0,u,"M7",0,x,"aN",0,r=>{const{language:e}=(0,s.Bd)(),a=(0,o.useMemo)(()=>({...(0,s.it)(e),...r.localeText}),[e,r.localeText]);return o.createElement(A,{...r,localeText:a})},"kA",0,v,"pp",0,y,"sT",0,p,"ui",0,h,"vY",0,g,"v_",0,m,"zY",0,c])}}]);