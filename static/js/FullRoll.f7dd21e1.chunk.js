"use strict";(self.webpackChunkrise_of_rice=self.webpackChunkrise_of_rice||[]).push([[611],{3031:function(l,e,s){s.r(e),s.d(e,{default:function(){return y}});var i=s(4165),t=s(5861),n=s(885),r=s(2791),c=s(9434),o=s(7689),a=s(1044),u=s(2002),d=s(639),h="FullRoll_container__qXs6L",_="FullRoll_containerRoll__TWJ9s",j="FullRoll_imageBlock__u8WgN",p="FullRoll_content__DC+mn",x="FullRoll_description__c+Dy6",C="FullRoll_title__Emrrc",m="FullRoll_weight__gbuj1",f="FullRoll_structure__5l5Qj",v="FullRoll_purchase__UZ6Ft",w="FullRoll_priceAndType__rHYwR",g="FullRoll_rollType__jS+oj",k="FullRoll_active__aLj1d",L="FullRoll_price__zi9jc",R="FullRoll_addProduct__-ZnW6",F="FullRoll_addInCart__084Ko",N="FullRoll_buttonMinus__8UIbl",Z="FullRoll_buttonPlus__lsOWh",b="FullRoll_goBack__sGrnE",E=s(184),B=["\u043c\u0438\u043d\u0438","\u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442"],y=function(){var l=r.useState(),e=(0,n.Z)(l,2),s=e[0],y=e[1],M=r.useState(0),U=(0,n.Z)(M,2),V=U[0],W=U[1],A=(0,o.UO)().id,H=(0,o.s0)(),I=(0,c.I0)();r.useEffect((function(){function l(){return(l=(0,t.Z)((0,i.Z)().mark((function l(){var e,s;return(0,i.Z)().wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,a.ZP.get("https://6358b289c26aac906f46af7c.mockapi.io/items/"+A);case 3:e=l.sent,s=e.data,y(s.items),l.next=12;break;case 8:l.prev=8,l.t0=l.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0440\u043e\u043b\u043b\u0430"),H("rolls");case 12:case"end":return l.stop()}}),l,null,[[0,8]])})))).apply(this,arguments)}!function(){l.apply(this,arguments)}()}),[]);var P=(0,c.v9)((function(l){return l.cartReducer.items.find((function(l){return l.id===A&&l.type===B[V]}))})),S=P?P.count:0,T=function(){var l;s&&A&&(l={id:A,title:s.title,price:s.price[V],imageUrl:s.imageUrl,type:B[V],count:0},I((0,d.jX)(l)))};return s?(0,E.jsx)("div",{className:h,children:(0,E.jsxs)("div",{className:_,children:[(0,E.jsx)("div",{className:j,children:(0,E.jsx)("img",{src:s.imageUrl,alt:"FullRoll"})}),(0,E.jsxs)("div",{className:p,children:[(0,E.jsxs)("div",{className:x,children:[(0,E.jsx)("h2",{className:C,children:s.title}),(0,E.jsxs)("div",{className:m,children:["\u0412\u0435\u0441:",(0,E.jsxs)("p",{children:[s.weight[V]," \u0433"]})]}),(0,E.jsxs)("div",{className:f,children:["\u0421\u043e\u0441\u0442\u0430\u0432:",(0,E.jsxs)("p",{children:[s.structure,"."]})]})]}),(0,E.jsxs)("div",{className:v,children:[(0,E.jsxs)("div",{className:w,children:[(0,E.jsx)("div",{className:g,children:(0,E.jsx)("ul",{children:B.map((function(l,e){return(0,E.jsx)("li",{onClick:function(){return W(e)},className:V===e?"".concat(k):"",children:B[e]},e)}))})}),(0,E.jsxs)("div",{className:L,children:[s.price[V]," \u20bd"]})]}),(0,E.jsx)("div",{className:R,children:0===S?(0,E.jsxs)("button",{className:F,onClick:T,children:[(0,E.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,E.jsx)("path",{d:"M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),(0,E.jsx)("path",{d:"M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),(0,E.jsx)("path",{d:"M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]}),"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"]}):(0,E.jsxs)(r.Fragment,{children:[(0,E.jsx)("button",{onClick:function(){var l;s&&A&&(l={id:A,title:s.title,price:s.price[V],imageUrl:s.imageUrl,type:B[V],count:0},I(1===S?(0,d.cl)(l):(0,d.uz)(l)))},className:N,children:(0,E.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,E.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),(0,E.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})}),(0,E.jsx)("b",{children:S}),(0,E.jsx)("button",{onClick:T,className:Z,children:(0,E.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,E.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),(0,E.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})})]})})]}),(0,E.jsx)("button",{className:b,onClick:function(){H(-1)},children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"})]})]})}):(0,E.jsx)(u.Z,{})}}}]);
//# sourceMappingURL=FullRoll.f7dd21e1.chunk.js.map