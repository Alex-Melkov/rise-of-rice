(self.webpackChunkrise_of_rice=self.webpackChunkrise_of_rice||[]).push([[362],{5966:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return ne}});var n=r(2982),c=r(8683),s=r(885),l=r(2791),i=r(7689),o=r(2808),a=r.n(o),u=r(9434),d=r(9637),h="Categories_categories__QVSOV",_="Categories_active__yuIOs",f=r(184),x=["\u0412\u0441\u0435","\u0417\u0430\u043f\u0435\u0447\u0435\u043d\u043d\u044b\u0435","\u0425\u043e\u043b\u043e\u0434\u043d\u044b\u0435","\u0416\u0430\u0440\u0435\u043d\u044b\u0435"],m=l.memo((function(){var e=(0,u.v9)((function(e){return e.filterReducer.categoryId})),t=(0,u.I0)();return(0,f.jsx)("div",{className:h,children:(0,f.jsx)("ul",{children:x.map((function(r,n){return(0,f.jsx)("li",{onClick:function(){return function(e){t((0,d.uA)(e))}(n)},className:e===n?"".concat(_):"",children:r},r)}))})})})),j="Sort_sort__6K4DB",g="Sort_sortLabel__j9vjo",v="Sort_open__Op3mC",p="Sort_sortLabelRanking__2v4nU",C="Sort_activeButton__qtKQ+",y="Sort_sortPopup__5dYtK",k=[{name:"\u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u0438",sortProperty:"rating"},{name:"\u0446\u0435\u043d\u0435",sortProperty:"price"},{name:"\u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0443",sortProperty:"title"}],w=l.memo((function(e){var t=e.value,r=e.orderType,n=e.setOrderType,c=(0,u.I0)(),i=l.useRef(null),o=l.useState(!1),a=(0,s.Z)(o,2),h=a[0],_=a[1];return l.useEffect((function(){var e=function(e){i.current&&!e.composedPath().includes(i.current)&&_(!1)};return document.body.addEventListener("click",e),function(){document.body.removeEventListener("click",e)}}),[]),(0,f.jsxs)("div",{ref:i,className:j,children:[(0,f.jsxs)("div",{className:g,children:[(0,f.jsx)("svg",{className:h?"".concat(v):"",width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,f.jsx)("path",{d:"M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z",fill:"#2C2C2C"})}),(0,f.jsx)("b",{children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u043f\u043e:"}),(0,f.jsx)("span",{onClick:function(){return _(!h)},children:t.name}),(0,f.jsxs)("div",{className:p,children:[(0,f.jsx)("button",{className:"asc"===r?C:"",onClick:function(){return n("asc")},children:"\u2191"}),(0,f.jsx)("button",{className:"desc"===r?C:"",onClick:function(){return n("desc")},children:"\u2193"})]})]}),h&&(0,f.jsx)("div",{className:y,children:(0,f.jsx)("ul",{children:k.map((function(e,r){return(0,f.jsx)("li",{onClick:function(){return function(e){c((0,d.HD)(e)),_(!1)}(e)},className:t.sortProperty===e.sortProperty?"active":"",children:e.name},r)}))})})]})})),N=r(1087),R=r(639),P="RollBlock_wrapper__5Nm2O",B="RollBlock_rollBlock__UzMZP",b="RollBlock_rollBlockImage__GlsKw",L="RollBlock_rollBlockTitle__UZbad",E="RollBlock_rollBlockDescription__n3LgU",Z="RollBlock_rollBlockSelector__9KhPq",I="RollBlock_active__xFwJd",S="RollBlock_rollBlockBottom__6d0PA",T="RollBlock_rollBlockPrice__bGzQJ",V="RollBlock_addProduct__zhQPs",U="RollBlock_buttonMinus__OHiEW",M="RollBlock_buttonPlus__biB4k",A=["\u043c\u0438\u043d\u0438","\u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442"],K=function(e){var t=e.id,r=e.title,n=e.structure,c=e.price,i=e.imageUrl,o=e.types,a=(0,u.I0)(),d=l.useState(0),h=(0,s.Z)(d,2),_=h[0],x=h[1],m=(0,u.v9)((function(e){return e.cartReducer.items.find((function(e){return e.id===t&&e.type===A[_]}))})),j=(0,u.v9)((function(e){return e.cartReducer.items.find((function(e){return e.id===t}))})),g=m?m.count:0;l.useEffect((function(){j&&("\u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442"===j.type?setTimeout((function(){return x(1)}),0):"\u043c\u0438\u043d\u0438"===j.type&&setTimeout((function(){return x(0)}),0))}),[]);return(0,f.jsx)("div",{className:P,children:(0,f.jsxs)("div",{className:B,children:[(0,f.jsxs)(N.rU,{to:"roll/".concat(t),children:[(0,f.jsx)("img",{className:b,src:i,alt:"Roll"}),(0,f.jsx)("h4",{className:L,children:r})]}),(0,f.jsx)("div",{className:E,children:(0,f.jsx)("p",{children:n})}),(0,f.jsx)("div",{className:Z,children:(0,f.jsx)("ul",{children:o.map((function(e,t){return(0,f.jsx)("li",{onClick:function(){return x(e)},className:_===t?"".concat(I):"",children:A[e]},t)}))})}),(0,f.jsxs)("div",{className:S,children:[(0,f.jsxs)("div",{className:T,children:[c[_]," \u20bd"]}),(0,f.jsxs)("div",{className:V,children:[g>0&&(0,f.jsxs)(l.Fragment,{children:[(0,f.jsx)("button",{onClick:function(){var e={id:t,title:r,price:c[_],imageUrl:i,type:A[_],count:0,unicId:t+_};a((0,R.uz)(e)),1===g&&a((0,R.cl)(e))},className:U,children:(0,f.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,f.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),(0,f.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})}),(0,f.jsx)("b",{children:g})]}),(0,f.jsx)("button",{onClick:function(){var e={id:t,title:r,price:c[_],imageUrl:i,type:A[_],count:0,unicId:t+_};a((0,R.jX)(e))},className:M,children:(0,f.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,f.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),(0,f.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})})]})]})]})})},O=r(8175),Q=function(){return(0,f.jsxs)(O.ZP,{className:P,speed:2,width:"100%",height:"100%",viewBox:"0 0 280 500",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[(0,f.jsx)("rect",{x:"0",y:"293",rx:"10",ry:"10",width:"280",height:"23"}),(0,f.jsx)("rect",{x:"0",y:"340",rx:"10",ry:"10",width:"280",height:"50"}),(0,f.jsx)("rect",{x:"0",y:"455",rx:"10",ry:"10",width:"95",height:"30"}),(0,f.jsx)("rect",{x:"10",y:"0",rx:"30",ry:"30",width:"260",height:"260"}),(0,f.jsx)("circle",{cx:"263",cy:"466",r:"18"}),(0,f.jsx)("rect",{x:"0",y:"410",rx:"10",ry:"10",width:"144",height:"35"})]})},W=r(6048),z=r.n(W),D="Pagination_paginate__NQL+8",H=function(e){var t=e.onChangePage,r=e.countRolls,n=e.itemsPerPage;return(0,f.jsx)(z(),{className:D,breakLabel:"...",nextLabel:">",previousLabel:"<",onPageChange:function(e){return t(e.selected+1)},pageRangeDisplayed:n,pageCount:Math.ceil(r/n)})},F="ContentError_root__WG-Zf",G=function(){return(0,f.jsxs)("div",{className:F,children:[(0,f.jsx)("h2",{children:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \ud83d\ude15"}),(0,f.jsx)("p",{children:"\u043a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0440\u043e\u043b\u043b\u044b"})]})},q=r(3421),J=r(9738),X="Rolls_container__r0kPN",Y="Rolls_contentTop__xsWV+",$="Rolls_contentTitle__n6SKr",ee="Rolls_contentItems__Yo9tW",te="Rolls_contentItemsNotInfo__K5sWt",re="Rolls_nothingFound__R26HX",ne=function(){var e=(0,u.v9)((function(e){return e.filterReducer})),t=e.searchValue,r=e.categoryId,o=e.currentPage,h=e.sort,_=(0,u.v9)((function(e){return e.rollReducer})),x=_.items,j=_.countRolls,g=_.status,v=(0,i.s0)(),p=(0,J.TL)(),C=l.useRef(!1),y=l.useRef(!1),k=l.useState("asc"),N=(0,s.Z)(k,2),R=N[0],P=N[1];l.useEffect((function(){if(y.current){var e=a().stringify({sortProperty:h.sortProperty,categoryId:r,currentPage:o});v("?".concat(e))}y.current=!0}),[r,h,R,o,t]),l.useEffect((function(){if(window.location.search){var e=a().parse(window.location.search.slice(1));p((0,d.rr)((0,c.Z)({},e))),C.current=!0}}),[]),l.useEffect((function(){if(window.scrollTo(0,0),!C.current){var e=r>0?"category=".concat(r):"",n=t?"&search=".concat(t):"";p((0,q.b)({currentPage:o,itemsPerPage:8,category:e,sort:h.sortProperty,orderType:R,search:n}))}C.current=!1}),[r,h,R,o,t]);var B=x.map((function(e){return(0,f.jsx)(K,(0,c.Z)({},e),e.title)})),b=(0,n.Z)(new Array(10)).map((function(e,t){return(0,f.jsx)(Q,{},t)}));return(0,f.jsxs)("div",{className:X,children:[(0,f.jsxs)("div",{className:Y,children:[(0,f.jsx)(m,{}),(0,f.jsx)(w,{value:h,orderType:R,setOrderType:P})]}),(0,f.jsx)("h2",{className:$,children:"\u0420\u041e\u041b\u041b\u042b"}),"error"===g?(0,f.jsx)(G,{}):(0,f.jsx)("div",{className:"success"===g&&t.length>0&&0===x.length?"".concat(te):ee,children:"loading"===g?b:t.length>0&&0===x.length?(0,f.jsx)("h2",{className:re,children:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e \ud83d\ude15"}):B}),(0,f.jsx)("div",{style:"success"===g&&t.length>0&&0===x.length?{visibility:"hidden"}:{visibility:"visible"},children:(0,f.jsx)(H,{onChangePage:function(e){p((0,d.dU)(e))},countRolls:j,itemsPerPage:8})})]})}},4654:function(){}}]);
//# sourceMappingURL=Rolls.c0fac6e8.chunk.js.map