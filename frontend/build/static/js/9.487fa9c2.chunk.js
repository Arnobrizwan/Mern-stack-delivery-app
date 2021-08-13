(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[9,11],{134:function(n,e,t){"use strict";t.d(e,"a",(function(){return o})),t.d(e,"b",(function(){return s}));var i,a,r=t(3),c=t(2),o=c.b.a(i||(i=Object(r.a)(["\n     box-shadow: ",";\npadding: 15px 40px;\ncolor:#fff;\nwidth:max-content;\n  background:",';\n  text-transform: uppercase;\n  text-align:center;\n  font-size: 16px;\n  font-family: "Oswald", sans-serif;\n  font-weight:600px;\n line-height:23.5px;\n  cursor:pointer;\n  letter-spacing:2px;\n  border-radius:4px;\n    text-decoration: none;\n\n    transform:\'',"';\n  transition:all 0.5s ease;\n  &:hover{\n    background-color:",";\n  }\n  & > * {\n    cursor:pointer;\n  }\n    @media screen and (max-width: 550px){\n   transform:scale(0.8);\n"])),(function(n){return n.theme.lightBoxShadow}),(function(n){return n.theme.darckYellow}),(function(n){return n.small?"scale(0.7)":"scale(1)"}),(function(n){return n.theme.black})),s=Object(c.b)(o)(a||(a=Object(r.a)(["\n  background:",";\n"])),(function(n){return n.theme.orange}))},135:function(n,e,t){"use strict";t.d(e,"b",(function(){return s})),t.d(e,"a",(function(){return d})),t.d(e,"c",(function(){return l}));var i,a,r=t(3),c=t(2),o=t(0),s=c.b.select(i||(i=Object(r.a)(["\n    color: rgb(0 0 0 / 50%);\n    padding: 7px;\n    border-radius: 5px;\n    outline: none;\n    cursor: pointer;\n    font-size: 14px;\n    margin: 0;\n    border: none;\n    margin-bottom: 20px;\n    background: #fff;\nbox-shadow:  1px 1px 6px 0px #ccc;\n    text-transform: capitalize;\n    margin: 0 20px 20px auto;\n\n"]))),d=c.b.option(a||(a=Object(r.a)(["\n&:checked{\n   background: #fcba1c;\n}\n"])));function l(n){var e=n.setSortPreferece,t=n.defaultValue;return Object(o.jsxs)(s,{name:"sortProductBy",value:t,onChange:function(n){return e(n.target.value)},children:[Object(o.jsx)(d,{value:"-createdAt",children:"M\xe1s recientes"}),Object(o.jsx)(d,{value:"createdAt",children:"M\xe1s antiguos"}),Object(o.jsx)(d,{value:"price",children:"Menor precio"}),Object(o.jsx)(d,{value:"-price",children:"Mayor precio"}),Object(o.jsx)(d,{value:"-sold",children:"Populares"})]})}},138:function(n,e,t){"use strict";t.d(e,"a",(function(){return s}));var i,a=t(3),r=t(2),c=t(0),o=r.b.div(i||(i=Object(a.a)(["\ndisplay:flex;\njustify-content:center;\nwidth:100%;\ngap:15px;\n&> button{\n  padding: 5px 10px 6px;\n  cursor:pointer;\n  background:",";\n    color:",";\nbox-shadow:",";\n    border:transparent;\n    outline:transparent;\n    fornt-size:20px;\n    font-family:oswald;\n    lettter-spacing: 1px;\n    border-radius: 10px;\n}\n@media screen and (min-width:500px){\n  &> button{\n    transform:scale(1.1);\n  }\n}\n"])),(function(n){return n.theme.black}),(function(n){return n.theme.darckYellow}),(function(n){return n.theme.lightBoxShadow}));function s(n){var e=n.page,t=n.maxPage,i=n.setPage;return Object(c.jsxs)(o,{children:[e>1?Object(c.jsxs)("button",{onClick:function(n){return i(e-1)},children:["<< ","Prev"]}):null,e<t?Object(c.jsxs)("button",{onClick:function(n){return i(e+1)},children:["Next"," >>"]}):null]})}},140:function(n,e,t){"use strict";t.r(e),t.d(e,"SectionTitle",(function(){return V})),t.d(e,"ProductsSection",(function(){return A})),t.d(e,"NotFaundMessage",(function(){return F}));var i=t(3),a=t(2),r=t(56),c=t(33),o=t(144),s=t(5),d=t.n(s),l=t(6),b=t(7),u=t(1),p=t(8),x=t(10);var j,h,f,m,g,O,v,w,y,k=t(143),S=t(135),P=t(147),z=t(138),C=t(142),L=t(0),T=a.b.main(j||(j=Object(i.a)(["\nmin-height:100vh;\nwidth:100vw;\npadding: 65px 0 20px;\nmargin:0;\nmargin-bottom:20px;\ntext-aling:center;\n\n"]))),V=a.b.h2(h||(h=Object(i.a)(["\ntext-align:center;\ntext-transform: uppercase;\n    margin-bottom: 40px;\ncolor:",";\n text-shadow: ",";\n"])),(function(n){return n.light?"#fff":"#fcba1c"}),(function(n){return n.theme.darckTextShadow})),I=a.b.section(f||(f=Object(i.a)(["\ndisplay:flex;\nflex-direction: column;\nflex-wrap: wrap;\npadding-bottom: 20px ;\nwidth:100%;\n    & >"," {\n  position: fixed;\n    top: 50%;\n    left: 50%;\n    z-index: 500;\n    margin: -60px 0  0 -60px ;\n\n}\n"])),c.a),B=a.b.h4(m||(m=Object(i.a)(["\n    text-align: center;\n    line-height: 15px;\n    color: #fcba1c;\nfont-size: 25px;\n    margin: 10px 5px;\n text-shadow: ",';\n    text-transform: capitalize;\n&:before {\n  content:".";\n}\n'])),(function(n){return n.theme.darckTextShadow})),E=a.b.div(g||(g=Object(i.a)(["\nwidth:100vw;\n    margin: 30px auto 40px\n"]))),q=a.b.section(O||(O=Object(i.a)(["\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    background: ",";\n    justify-content: center;\n    margin: -10px 0 20px;\n    padding:  20px 15px;\n    box-shadow: inset 0 0 20px 0 #1111118c;\n\n"])),(function(n){return n.theme.darckRed})),A=a.b.div(v||(v=Object(i.a)(["\n    &:before{\n    display: ",';\n      position:absolute;\n      content:" ";\n      top:0;\n      left:0;\n    right:0;\n    bottom:0;\n    background:#ffffff57;\n    z-index:400;\n    }\n    width: 100%;\n    gap: 30px;\n    display: grid;\n    padding: 0 15px 30px;\n    grid-template-columns: repeat( auto-fit,minmax(250px,300px) );\n    max-width: 1000px;\n    margin: 0 auto;\njustify-content: center;\n\n'])),(function(n){return n.isLoading?"block":"none"})),F=a.b.h4(w||(w=Object(i.a)(["\nmargin-top: 20px;\ndisplay:block;\nwidth:100%;\n"]))),N=a.b.div(y||(y=Object(i.a)(["\n    flex-wrap: wrap;\n    margin: 0 15px 20px;\n    display: flex;\n    align-items: center;\n    max-width: max-content;\n    & > select {\n      margin: 0 10px 10px 0;\n\n}\n\n"])));e.default=Object(r.a)((function(){var n=function(){var n,e=Object(p.g)(),t=Object(p.h)(),i=Object(x.a)().categories,a=null===i||void 0===i?void 0:i.filter((function(n){return(null===n||void 0===n?void 0:n.quantity)>0})),r=Object(u.useState)(new URLSearchParams(t.search)),c=Object(b.a)(r,2),o=c[0],s=(c[1],Object(u.useState)(!1)),j=Object(b.a)(s,2),h=j[0],f=j[1],m=Object(u.useState)(o.get("page")||1),g=Object(b.a)(m,2),O=g[0],v=g[1],w=Object(u.useState)(1),y=Object(b.a)(w,2),k=y[0],S=y[1],P=Object(u.useState)([]),z=Object(b.a)(P,2),C=z[0],L=z[1],T=Object(u.useState)(o.get("category")||"all"),V=Object(b.a)(T,2),I=V[0],B=V[1],E=Object(u.useState)(o.get("sort")||"-createdAt"),q=Object(b.a)(E,2),A=q[0],F=q[1],N=Object(u.useState)(o.get("title")||""),R=Object(b.a)(N,2),M=R[0],D=R[1],Y=Object(u.useState)(!0),_=Object(b.a)(Y,2),G=_[0],U=_[1];return G?n=new URLSearchParams(o.toString()):((n=new URLSearchParams).append("active",!0),n.append("sort",A),n.append("page",O),n.append("limit",6)),Object(u.useEffect)((function(){"all"!==I&&n.append("category",I),""!==M&&(n.append("title",M),F("-createdAt"),B("all")),v(1)}),[A,I,M]),Object(u.useEffect)((function(){var t=new AbortController,i=t.signal;return f(!0),function(){var t=Object(l.a)(d.a.mark((function t(){var a,r,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/api/products?".concat(n),{signal:i});case 3:return a=t.sent,t.next=6,a.json();case 6:return r=t.sent,L(r.data),c=parseInt(r.total),S(Math.ceil(c/6)),document.querySelector("body").scrollTo(0,100),f(!1),U(!1),t.abrupt("return",e.push("/menu?".concat(n)));case 16:t.prev=16,t.t0=t.catch(0),"AbortError"===t.t0.name?console.log("Fetch Canseled: caught abort"):console.log(t.t0);case 19:case"end":return t.stop()}}),t,null,[[0,16]])})));return function(){return t.apply(this,arguments)}}()(),function(){t.abort()}}),[M,A,O,I]),{isLoading:h,maxPage:k,products:C,populatedCategories:a,page:O,setPage:v,setCategory:B,setSorting:F,setTitle:D,isFirstRender:G,sorting:A,category:I,title:M}}(),e=n.isLoading,t=n.maxPage,i=n.products,a=n.populatedCategories,r=n.sorting,s=n.page,j=n.setPage,h=n.setCategory,f=n.setSorting,m=n.setTitle,g=n.isFirstRender,O=n.category,v=n.title;return Object(L.jsxs)(T,{children:[Object(L.jsx)(V,{children:"Men\xfa"}),Object(L.jsx)(E,{children:Object(L.jsx)(k.a,{setSearch:m,defaultValue:v})}),Object(L.jsxs)(I,{children:[Object(L.jsx)(q,{children:null===a||void 0===a?void 0:a.map((function(n,e){return Object(L.jsx)(B,{children:n.name},e)}))}),Object(L.jsxs)(N,{children:[Object(L.jsx)(P.a,{defaultValue:O,categories:a,setCategoryPreferece:h}),Object(L.jsx)(S.c,{defaultValue:r,setSortPreferece:f,sortPreference:r})]}),e&&Object(L.jsx)(c.a,{}),e&&g?Object(L.jsx)(o.b,{}):Object(L.jsx)(C.c,{isLoading:e,products:i})]}),Object(L.jsx)(z.a,{setPage:j,page:s,maxPage:t})]})}))},142:function(n,e,t){"use strict";t.d(e,"b",(function(){return l})),t.d(e,"a",(function(){return b})),t.d(e,"c",(function(){return u}));var i,a,r=t(3),c=t(2),o=t(145),s=t(58),d=t(0),l=c.b.div(i||(i=Object(r.a)(["\n    &:before{\n    display: ",';\n      position:absolute;\n      content:" ";\n      top:0;\n      left:0;\n    right:0;\n    bottom:0;\n    background:#ffffff57;\n    z-index:400;\n    }\n    width: 100%;\n    gap: 30px;\n    display: grid;\n    padding: 0 15px 30px;\n    grid-template-columns: repeat( auto-fit,minmax(250px,300px) );\n    max-width: 1000px;\n    margin: 0 auto;\njustify-content: center;\n\n'])),(function(n){return n.isLoading?"block":"none"})),b=c.b.h4(a||(a=Object(r.a)(["\ndisplay:block;\nwidth:100%;\nmargin 20px 0;\ntext-align:center;\npadding: 0 10px;\n"])));function u(n){var e=n.isLoading,t=n.products;return Object(d.jsx)(l,{children:e||0!==(null===t||void 0===t?void 0:t.length)?null===t||void 0===t?void 0:t.map((function(n){return Object(d.jsx)(o.a,{"data-testid":"productItem",item:n,children:Object(d.jsx)(s.c,{thisProductInfo:n})},n._id)})):Object(d.jsx)(b,{children:"No se han encontrado coincidencias, intenta de nuevo!!"})})}},143:function(n,e,t){"use strict";t.d(e,"a",(function(){return j}));var i,a,r,c,o=t(3),s=t(2),d=t.p+"static/media/loupe.21575f61.svg",l=t(0),b=s.b.form(i||(i=Object(o.a)(["\nwidth:max-content;\nmargin:0 auto;\nposition:relative;\n"]))),u=s.b.input(a||(a=Object(o.a)(["\nposition:relative;\nwidth:200px;\npadding: 8px;\npadding-left: 15px;\nborder-radius: 15px;\noutline: none;\nbox-shadow: ",";\ntransition: all 0.5s ease;\nborder:none;\nmargin-left: -6px;\nposition: relative;\n&:focus{\n  width:250px;\nbox-shadow: 0 0 10px rgba(0,0,0,0.2);\n\n}\n&::placeholder {\n    font-size: 14px;\n\n}\n&:focus + div{\n  margin-left: 210px;\n\n}\n&::-webkit-search-cancel-button{\n  display:none;\n}\n"])),(function(n){return n.theme.lightBoxShadow})),p=s.b.div(r||(r=Object(o.a)(["\nwidth:30px;\nheight:30px;\nposition:absolute;\nmargin-top:-34px;\nmargin-left: 160px;\ntransition: all 0.5s ease;\ntransform:scale(0.7);\n"]))),x=s.b.img(c||(c=Object(o.a)(["\nheight: 100%;\n"])));function j(n){var e=n.setSearch,t=n.placeholder,i=n.defaultValue;return Object(l.jsxs)(b,{onSubmit:function(n){var t,i;n.preventDefault();var a=null===(t=n.target)||void 0===t||null===(i=t.search)||void 0===i?void 0:i.value;e(a)},children:[Object(l.jsx)(u,{name:"search",defaultValue:i||"",placeholder:t||"Buscar...",type:"search",onChange:function(n){""===n.target.value&&e("")}}),Object(l.jsx)(p,{children:Object(l.jsx)(x,{src:d,alt:"search"})})]})}},144:function(n,e,t){"use strict";t.d(e,"a",(function(){return x})),t.d(e,"b",(function(){return j}));var i,a,r,c,o=t(3),s=t(2),d=t(0),l=s.b.section(i||(i=Object(o.a)(["\n width: 100%;\n    gap: 30px;\n    display: grid;\n    padding: 10px 15px 30px;\n    grid-template-columns: repeat( auto-fit,minmax(250px,300px) );\n    max-width: 1000px;\n    margin: 0 auto;\njustify-content: center;\n"]))),b=s.b.figure(a||(a=Object(o.a)(["\ndisplay:flex;\nbox-sizing:border-box;\nborder-radius:5px;\nposition:relative;\nmin-width: 250px;\nheight:350px;\nflex-flow:column;\nover-flow:hidden;\npadding:20px;\nborder: 1px solid #00000026;\nbox-shadow: 1px 1px 5px #00000057;\nbackground:#f3f3f3;\n"]))),u=s.b.div(r||(r=Object(o.a)(["\nheight:150px;\nwidth:100%;\npositon:relative;\ndisplay:flex;\nbackground:#fff;\nmargin-bottom:10px;\nborder-radius:5px;\nbox-shadow: 0 1px 3px #ccc;\n\n"]))),p=s.b.div(c||(c=Object(o.a)(["\nheight:20px;\nwidth:100%;\nbackground:#fff;\nmargin: 10px auto;\nbox-shadow: 0 1px 3px #ccc;\n"])));function x(){return Object(d.jsxs)(b,{children:[Object(d.jsx)(u,{}),Object(d.jsx)(p,{}),Object(d.jsx)(p,{})]})}function j(){return Object(d.jsxs)(l,{"data-testid":"products-skeketom",children:[Object(d.jsx)(x,{}),Object(d.jsx)(x,{}),Object(d.jsx)(x,{}),Object(d.jsx)(x,{}),Object(d.jsx)(x,{}),Object(d.jsx)(x,{})]})}},145:function(n,e,t){"use strict";var i,a,r,c,o,s,d,l=t(7),b=t(3),u=t(2),p=t(1),x=t(8),j=t(61),h=t(0),f=u.b.article(i||(i=Object(b.a)(["\ndisplay:flex;\nbox-sizing:border-box;\nborder-radius:5px;\nposition:relative;\n\nmin-width: 250px;\nheight:350px;\nflex-flow:column;\nover-flow:hidden;\npadding:20px;\nborder: 1px solid #00000026;\nbox-shadow: 1px 1px 5px #00000057;\n"]))),m=u.b.div(a||(a=Object(b.a)(["\ndisplay:flex;\nalign-items:center;\npadding-bottom:5px;\n"]))),g=u.b.h3(r||(r=Object(b.a)(['\ntext-decoration:none;\nmargin-bottom:2px;\n  color: #272727;\nletter-spasing:0;\ncursor:pointer;\nline-height:35px;\ntext-transform:capitalize ;\ntransition: all 0.5s;\n  font-family: "Oswald", sans-serif;\n  font-size: 25px;\n&:hover {\n      color: color: rgb(0 0 0 / 50%);\n\n}\n']))),O=u.b.small(c||(c=Object(b.a)(["\nalign-self: flex-start;\n    color: rgba(0,0,0,0.8);\n    font-weight: 600;\n    margin: 10px;\n    margin-top: 8px;\n"]))),v=u.b.h4(o||(o=Object(b.a)(['\n    align-self: end;\n    color: #fcba1c;\n    margin:0;\n&:before{\n  content:"$";\n}\n']))),w=u.b.div(s||(s=Object(b.a)(["\nheight:150px;\nwidth:100%;\noverflow:hidden;\npositon:relative;\ndisplay:flex;\njustify-content:center;\nmargin-bottom:10px;\nborder-radius:5px;\nbox-shadow: 0 1px 3px #ccc;\n    background-image: ",";\n    background-repeat: no-repeat;\n    background-size: auto 100%;\n    backface-visibility: hidden;\n    background-position: center;\n"])),(function(n){return n.isLoaded?"none":"url(".concat(j.a,")")})),y=u.b.img(d||(d=Object(b.a)(["\ntransition:all 0.5s ease;\nheight:100%;\n&:hover{\n  transform:scale(0.8);\n}\n\n"])));e.a=function(n){var e=Object(x.g)(),t=Object(x.h)(),i=n.item,a=Object(p.useState)(!1),r=Object(l.a)(a,2),c=r[0],o=r[1];return Object(h.jsxs)(f,{"data-testid":"productItem",children:[Object(h.jsx)(w,{isLoaded:c,children:Object(h.jsx)(y,{src:null===i||void 0===i?void 0:i.img,onLoad:function(){return o(!0)},alt:i.name})}),Object(h.jsx)(g,{onClick:function(){return n=i._id,e.push({pathname:"/menu/"+n,search:"?from="+t.pathname});var n},children:i.name}),Object(h.jsxs)(m,{children:[Object(h.jsx)(v,{children:i.price})," ",Object(h.jsxs)(O,{children:[i.size,"  "]}),"  "]}),n.children]},i._id)}},147:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var i=t(135),a=t(0);function r(n){var e=n.categories,t=n.setCategoryPreferece,r=n.defaultValue;return Object(a.jsxs)(i.b,{value:r,name:"filterProductsByCategory",onChange:function(n){return function(n){n.preventDefault(),t(n.target.value)}(n)},children:[Object(a.jsx)(i.a,{value:"all",children:"Todas las categor\xedas"}),null===e||void 0===e?void 0:e.map((function(n){return Object(a.jsx)(i.a,{value:n.name,children:n.name},n._id)}))]})}},173:function(n,e,t){"use strict";t.r(e);var i=t(3),a=t(2),r=t(56),c=t(11),o=t(7),s=t(1);var d,l,b,u,p,x,j,h,f,m,g,O,v=t(134),w=t.p+"static/media/hamburger-slide.022f44da.jpg",y=t.p+"static/media/pizza-slide.e9d29dd4.jpg",k=t.p+"static/media/empanadas-slide.9fed3e86.jpg",S=t(0),P=a.b.section(d||(d=Object(i.a)(["\nposition:relative;\nwidth:100vw;\n    height: calc(100vh - 58px);\ntext-aling:center;\nmargin-bottom:20px;\n"]))),z=a.b.div(l||(l=Object(i.a)(["\nheigth:100%;\nwidth:100%;\n"]))),C=a.b.div(b||(b=Object(i.a)(["\nposition:absolute;\ndisplay:flex;\njustify-content:space-between;\ntop:50%;\nleft:0;\ntransform:translate(0,-50%);\nwidth:100%;\nheight:25px;\nz-index:55;\npadding:0 35px;\n\n"]))),L=a.b.div(u||(u=Object(i.a)(["\nheight:25px;\nwidth:25px;\nborder-left: 5px solid rgba(255,255,255,1);\nborder-bottom: 5px solid rgba(255,255,255,1);\ntransform: rotate(45deg);\ncursor:pointer;\n\n&:hover{\n  border-color:rgba(255,255,255,0.8);\n}\n@media screen and (max-width:750px){\ndisplay:none;\n}\n"]))),T=Object(a.b)(L)(p||(p=Object(i.a)(["\nborder:none;\nborder-top: 5px solid rgba(255,255,255,1);\nborder-right: 5px solid rgba(255,255,255,1);\ntransform: rotate(45deg);\n"]))),V=a.b.div(x||(x=Object(i.a)(["\nposition:absolute;\ndisplay:flex;\nalign-items:center;\njustify-content:center;\nbottom:20px;\nleft:0;\nwidth:100%;\nheight:25px;\nz-index:55;\n\n\n"]))),I=a.b.div(j||(j=Object(i.a)([" \nheight:15px;\nwidth:15px;\nborder-radius:50%;\nborder:2px solid #fff;\nbackground: "," ;\nmargin:0 5px;\ncursor:pointer;\nbox-shadow:",";\n"])),(function(n){return n.slide===parseInt(n.index)?"#fff":"transparent"}),(function(n){return n.theme.lightTextShadow})),B=a.b.div(h||(h=Object(i.a)(["\nposition:absolute;\ntop:50%;\nleft:50%;\ntransform:translate(-50%,-50%);\nheight:70%;\nwidth:80%;\ndisplay:flex;\nflex-flow:column;\njustify-content: flex-end;\n@media screen and (max-width:500px){\n& > a{\n      margin-left: -15px;\n}\n}\n"]))),E=a.b.h4(f||(f=Object(i.a)(["\nfont-size: 22px;\ntext-transform: uppercase;\ntext-align:justify;\ncolor:#fff;\ntext-shadow: 1px 1px 2px #000;\nmargin-bottom:40px;\ncolor:#fcba1c;\n\n"]))),q=a.b.h3(m||(m=Object(i.a)(["\nfont-size: 30px;\ntext-transform: uppercase;\ncolor:#fff;\ntext-shadow: 1px 1px 2px #000;\nmargin-bottom:40px;\nline-height:1.2em;\n@media screen and (min-width:500px){\nfont-size: 45px;\n}\n@media screen and (min-width:750px){\nfont-size: 75px;\n}\n"]))),A=a.b.img(g||(g=Object(i.a)(["\nposition:absolute;\ntop:0;\nleft:50%;\ntransform:translate(-50%,0);\nwidth:100%;\nheight:120%;\n\n@media screen and (max-width:850px){\n  width:130%;\n  height:100%;\n}\n@media screen and (max-width:500px){\n  width:200%;\n}\n"]))),F=a.b.div(O||(O=Object(i.a)([" \nposition:absolute;\ndisplay:",";\noverflow:hidden;\nalign-items:center;\ntop:0;\nleft:0;\nwidth:100%;\nheight:100%;\n background-color: 2px solid ",";\ntransition:all 2s ease;\n\n"])),(function(n){return n.slide===parseInt(n.index)?"block":"none"}),(function(n){return n.theme.lightYellow}));function N(){var n=function(){var n=Object(s.useState)(1),e=Object(o.a)(n,2),t=e[0],i=e[1],a=function(){i(t+1),3===t&&i(1)};return Object(s.useEffect)((function(){var n=setInterval(a,4e3);return function(){return clearInterval(n)}})),{prevSlide:function(){i(t-1),1===t&&i(3)},nextSlide:a,moveToSlide:function(n){i(n)},slide:t}}(),e=n.prevSlide,t=n.nextSlide,i=n.moveToSlide,a=n.slide;return Object(S.jsx)(P,{children:Object(S.jsxs)(z,{children:[Object(S.jsxs)(F,{"data-testid":"slider1",slide:a,index:1,children:[Object(S.jsx)(A,{src:w,alt:"burger"}),Object(S.jsxs)(B,{children:[Object(S.jsx)(E,{children:"las mejores ofertas"}),Object(S.jsxs)(q,{children:["super descuento ",Object(S.jsx)("br",{}),"hamburgesa"]}),Object(S.jsx)(v.b,{as:c.b,to:"/menu",children:"ordenar"})]})]}),Object(S.jsxs)(F,{"data-testid":"slider2",slide:a,index:2,children:[Object(S.jsx)(A,{src:y,alt:"pizza"}),Object(S.jsxs)(B,{children:[Object(S.jsx)(E,{children:"las mejores ofertas"}),Object(S.jsxs)(q,{children:["super descuento ",Object(S.jsx)("br",{}),"Pizza"]}),Object(S.jsx)(v.b,{as:c.b,to:"/menu",children:"ordenar"})]})]}),Object(S.jsxs)(F,{"data-testid":"slider3",slide:a,index:3,children:[Object(S.jsx)(A,{src:k,alt:"empanadas"}),Object(S.jsxs)(B,{children:[Object(S.jsx)(E,{children:"las mejores ofertas"}),Object(S.jsxs)(q,{children:["super descuento ",Object(S.jsx)("br",{}),"Empanadas"]}),Object(S.jsx)(v.b,{as:c.b,to:"/menu",children:"ordenar"})]})]}),Object(S.jsxs)(C,{children:[Object(S.jsx)(L,{"data-testid":"prevButton",onClick:e}),Object(S.jsx)(T,{"data-testid":"nextButton",onClick:t})]}),Object(S.jsxs)(V,{children:[Object(S.jsx)(I,{"data-testid":"dot1",slide:a,index:1,onClick:function(){return i(1)}}),Object(S.jsx)(I,{"data-testid":"dot2",slide:a,index:2,onClick:function(){return i(2)}}),Object(S.jsx)(I,{"data-testid":"dot3",slide:a,index:3,onClick:function(){return i(3)}})]})]})})}var R=t(5),M=t.n(R),D=t(6);var Y,_,G,U,J,W,Q,$,H=t.p+"static/media/left-quote.f294a5b8.svg",K=t.p+"static/media/Error-503-backend-fetch-failed.a8d4be79.png",X=a.b.div(Y||(Y=Object(i.a)(["\nmin-height:360px;\nposition:relative;\n\nbackground:",";\nbackground-size:contain;\n"])),(function(n){return!0===n.error?"url(".concat(K,") no-repeat center center"):"none"})),Z=Object(a.b)(F)(_||(_=Object(i.a)(["\nbackground:",";\n\n"])),(function(n){return n.theme.black})),nn=Object(a.b)(B)(G||(G=Object(i.a)(["\njustify-content:center;\npadding: 50px 0;\n"]))),en=Object(a.b)(I)(U||(U=Object(i.a)(["\nborder:2px solid ",";\nbackground: "," ;\n"])),(function(n){return n.theme.darckYellow}),(function(n){return n.slide===parseInt(n.index)?"#fcba1c":"transparent"})),tn=a.b.q(J||(J=Object(i.a)(["\ncolor: #fff;\ntext-align:center;\n\n"]))),an=a.b.h4(W||(W=Object(i.a)(["\nline-height: 25px;\nfont-size:20px;\ncolor: #fcba1c;\ntext-align:center;\ntext-shadow: ",";\n    height: 30px;\n"])),(function(n){return n.theme.darckTextShadow})),rn=a.b.small(Q||(Q=Object(i.a)(["\ncolor:",";\ntext-align:center;\nmargin-top:30px;\npadding-bottom: 50px;\n"])),(function(n){return n.theme.darckYellow})),cn=a.b.img($||($=Object(i.a)(["\nwidth:60px;\nheight: auto;\nmargin:0 auto;\nmargin-bottom:10px;\n"])));function on(){var n=Object(s.useState)([]),e=Object(o.a)(n,2),t=e[0],i=e[1],a=Object(s.useState)(!1),r=Object(o.a)(a,2),c=r[0],d=r[1],l=Object(s.useRef)(0);Object(s.useEffect)((function(){function n(){return e.apply(this,arguments)}function e(){return(e=Object(D.a)(M.a.mark((function e(){var t,a,r;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!1),e.prev=1,e.next=4,fetch("https://jsonplaceholder.typicode.com/comments");case 4:return t=e.sent,e.next=7,t.json();case 7:(a=e.sent).length=5,i(a),e.next=18;break;case 12:e.prev=12,e.t0=e.catch(1),r=l.current,console.log(e.t0),r<6&&(n(),l.current+=1),d(!0);case 18:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}n()}),[]);var b=function(n){var e=Object(s.useState)(0),t=Object(o.a)(e,2),i=t[0],a=t[1],r=function(){a(i+1),i===n.length-1&&a(0)};return Object(s.useEffect)((function(){var n=setInterval(r,4e3);return function(){return clearInterval(n)}})),{slide:i,moveToSlide:function(n){a(n)},testimonials:n}}(t),u=b.slide,p=b.moveToSlide;return Object(S.jsx)(X,{error:c,children:Object(S.jsxs)(z,{children:[t.map((function(n,e){return Object(S.jsx)(Z,{slide:u,index:e,children:Object(S.jsxs)(nn,{children:[Object(S.jsx)(an,{children:n.name}),Object(S.jsx)(cn,{src:H,alt:"happy-clients"}),Object(S.jsx)(tn,{children:n.body}),Object(S.jsx)(rn,{children:n.email})]})},e)})),Object(S.jsx)(V,{children:t.map((function(n,e){return Object(S.jsx)(en,{slide:u,index:e,onClick:function(){return p(e)}},e)}))})]})})}var sn,dn,ln,bn,un=t.p+"static/media/People-Eating-And-Drinking-90673271.265692fe.jpg",pn=a.b.section(sn||(sn=Object(i.a)(["\nwidth:100vw;\nmargin-bottom:20px;\n"]))),xn=a.b.div(dn||(dn=Object(i.a)(["\nwidth:100%;\nmin-height:360px;\ndispley:flex;\nflex-wrap: wrap;\n& > * {\n    width:100%;\n  }\n@media screen and (min-width:960px){\n  & > * {\n    width:50%;\n  }\n}\n\n\n"]))),jn=a.b.div(ln||(ln=Object(i.a)(["\noverflow:hidden;\nheight:360px;\n\n"]))),hn=a.b.img(bn||(bn=Object(i.a)(["\nwidth:130%;\nmin-height:100%;\n"])));function fn(){return Object(S.jsx)(pn,{children:Object(S.jsxs)(xn,{className:"flex",children:[Object(S.jsx)(jn,{children:Object(S.jsx)(hn,{src:un,alt:"happy-clients"})}),Object(S.jsx)(on,{})]})})}var mn,gn,On,vn,wn,yn,kn,Sn=t.p+"static/media/about-background.fd4c3f69.png",Pn=t(140),zn=t.p+"static/media/stopwatch-solid.5108b0ef.svg",Cn=t.p+"static/media/hamburger-solid.8608a56a.svg",Ln=t.p+"static/media/wallet-solid.3db48c66.svg",Tn=a.b.section(mn||(mn=Object(i.a)(["\nwidth:100vw;\nmargin-bottom:40px;\n\n"]))),Vn=a.b.article(gn||(gn=Object(i.a)(["\nmax-width:1250px;\njustify-content:center;\nmin-height: 300px;\nwidth:100vw;\ndisplay:flex;\nflex-flow: row;\nflex-wrap: wrap;\nmargin: 0 auto;\n\n  & > *{\n    flex:1 0 1;\n margin-top:-50px;\n    @media  screen and (min-width:950px){\n      width:50%;\n         margin-top:0;\n    }\n  }\n"]))),In=a.b.div(On||(On=Object(i.a)(["\ndisplay:flex;\njustify-content:center;\n\n"]))),Bn=a.b.img(vn||(vn=Object(i.a)(["\nmax-width:400px;\nmargin: 0 auto;\n@media  screen and (min-width:950px){\n    margin-top:-45px;\n    }\n"]))),En=a.b.div(wn||(wn=Object(i.a)(["\ntext-align:center;\npadding:  50px 15px;\nmargin-left:-6px;\ndisplay:flex;\njustify-content:flex-start;\nflex-flow: column;\nalign-items:center;\nline-heigth:35px;\n&>","{\nmargin: 0 auto 20px;\n}\n@media  screen and (min-width:950px){\n  max-width:600px;\n    margin-right: -100px;\n    align-items:flex-start;\n}\n\n\n\n"])),Pn.SectionTitle),qn=a.b.div(yn||(yn=Object(i.a)(["\ndisplay:flex;\ngap:30px;\nopacity:0.8;\nmargin: 40px auto 20px;\n& div {\n  display:flex;\n  flex-direction:column;\nalign-items:center;\njustify-content:center;\ntransition: 0.5s ease;\n\n}\n& div:hover{\ntransform:scale(1.1);\n}\n& div h4{\nmargin-bottom:0;\n}\n"]))),An=a.b.img(kn||(kn=Object(i.a)(["\nwidth:40px;\n"])));function Fn(){return Object(S.jsx)(Tn,{children:Object(S.jsxs)(Vn,{cassName:"flex",children:[Object(S.jsxs)(En,{children:[Object(S.jsx)(Pn.SectionTitle,{children:"Sobre Nosotros"}),Object(S.jsx)("p",{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem temporibus quod itaque mollitia quidem. Eos nemo nam corrupti ipsam iusto facilis sit blanditiis, placeat omnis amet voluptatem. Dolor, recusandae atque?. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt voluptates quasi corporis nihil pariatur repudiandae debitis! Sed sit, quaerat laudantium consectetur quibusdam ab aut laboriosam veniam ducimus. Odit, sed aperiam!"}),Object(S.jsxs)(qn,{children:[Object(S.jsxs)("div",{children:[Object(S.jsx)(An,{src:Cn,alt:"best-ingredients"}),Object(S.jsx)("h4",{children:"Quality"})]}),Object(S.jsxs)("div",{children:[Object(S.jsx)(An,{src:Ln,alt:"best-prices"}),Object(S.jsx)("h4",{children:"Prices"})]}),Object(S.jsxs)("div",{children:[Object(S.jsx)(An,{src:zn,alt:"super-fast"}),Object(S.jsx)("h4",{children:"Speed"})]})]})]}),Object(S.jsx)(In,{children:Object(S.jsx)(Bn,{src:Sn,alt:"burger"})})]})})}var Nn=t(174),Rn=t(170),Mn=t(145),Dn=t(58),Yn=t(57);var _n,Gn=function(){var n=Object(s.useState)(!1),e=Object(o.a)(n,2),t=e[0],i=e[1],a=Object(s.useState)([]),r=Object(o.a)(a,2),c=r[0],d=r[1],l=Object(s.useRef)(0);return Object(s.useEffect)((function(){var n=new AbortController,e=n.signal,t=function(){var n=Object(D.a)(M.a.mark((function n(){var a,r,c;return M.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i(!0),n.prev=1,n.next=4,fetch("api/products?active=true&sort=-createdAt&page=1&limit=6",{signal:e});case 4:return a=n.sent,n.next=7,a.json();case 7:r=n.sent,d(Object(Yn.a)(r.data)),i(!1),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(1),"AbortError"===n.t0.name?console.log("Fetch Canseled: caught abort"):(c=l.current,console.log(n.t0),c<6&&(t(),l.current+=1));case 15:case"end":return n.stop()}}),n,null,[[1,12]])})));return function(){return n.apply(this,arguments)}}();return t(),function(){n.abort()}}),[]),{isLoading:t,latestProducts:c}},Un=t(144),Jn=(t(159),t(160),t(161),t(172)),Wn=t(168),Qn=t(169);function $n(){return Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)(Nn.a,{slidesPerView:1,spaceBetween:20,slidesPerGroup:3,loop:!0,loopFillGroupWithBlank:!0,pagination:{clickable:!0},navigation:!0,className:"mySwiper",breakpoints:{330:{width:660,slidesPerView:2},660:{width:970,slidesPerView:3},970:{width:1200,slidesPerView:4}},children:[Object(S.jsx)(Rn.a,{children:Object(S.jsx)(Un.a,{})}),Object(S.jsx)(Rn.a,{children:Object(S.jsx)(Un.a,{})}),Object(S.jsx)(Rn.a,{children:Object(S.jsx)(Un.a,{})}),Object(S.jsx)(Rn.a,{children:Object(S.jsx)(Un.a,{})}),Object(S.jsx)(Rn.a,{children:Object(S.jsx)(Un.a,{})}),Object(S.jsx)(Rn.a,{children:Object(S.jsx)(Un.a,{})})]})})}function Hn(){var n=Gn(),e=n.isLoading,t=n.latestProducts;return e?Object(S.jsx)($n,{}):Object(S.jsx)(S.Fragment,{children:Object(S.jsx)(Nn.a,{slidesPerView:1,spaceBetween:20,slidesPerGroup:3,loop:!0,loopFillGroupWithBlank:!0,pagination:{clickable:!0},navigation:!0,className:"mySwiper  ",breakpoints:{330:{width:660,slidesPerView:2},660:{width:970,slidesPerView:3},970:{width:1200,slidesPerView:4}},children:t.map((function(n){return Object(S.jsx)(Rn.a,{children:Object(S.jsx)(Mn.a,{item:n,children:Object(S.jsx)(Dn.c,{thisProductInfo:n})})},n._id)}))})})}Jn.a.use([Wn.a,Qn.a]),Jn.a.use([Wn.a,Qn.a]);var Kn,Xn=a.b.section(_n||(_n=Object(i.a)(["\n  width: 100%;\n  max-width: 1240px;\n  margin: 0 auto;\n  margin-bottom: 20px;\n  padding: 0 15px;\n"])));function Zn(){return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(Pn.SectionTitle,{children:"\xdaltimas Novedades"}),Object(S.jsx)(Xn,{children:Object(S.jsx)(Hn,{})})]})}var ne=a.b.main(Kn||(Kn=Object(i.a)(["\n\nwidth:100vw;\npadding: 58px 0  0 0;\ntext-aling:center;\n"])));e.default=Object(r.a)((function(){return Object(S.jsxs)(ne,{children:[Object(S.jsx)(N,{}),Object(S.jsx)(Zn,{}),Object(S.jsx)(fn,{}),Object(S.jsx)(Fn,{})]})}))}}]);
//# sourceMappingURL=9.487fa9c2.chunk.js.map