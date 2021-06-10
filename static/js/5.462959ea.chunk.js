(this.webpackJsonpuser_manager_app=this.webpackJsonpuser_manager_app||[]).push([[5],{139:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.title;return r.a.createElement("div",{className:"my-1 sm:my-4"},r.a.createElement("h2",{className:"text-gray-800 font-bold text-2xl font-nucleo"},t))}},141:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0),r=a.n(n);function c(e){var t=e.text,a=e.close;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"text-white px-6 py-4 border-0 rounded relative mb-4 bg-teal-500"},r.a.createElement("span",{className:"text-xl inline-block mr-5 align-middle"},r.a.createElement("i",{className:"fas fa-bell"})),r.a.createElement("span",{className:"inline-block align-middle mr-8"},r.a.createElement("b",{className:"capitalize"},t)),r.a.createElement("button",{className:"absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none",onClick:a},r.a.createElement("span",null,"\xd7"))))}},161:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return O}));var n=a(46),r=a.n(n),c=a(68),l=a(7),s=a(0),m=a.n(s),i=a(31),o=a(35),u=a(69),d=a(141),p=a(36),b=a(71),f=a(89),x=a(28),E=a(27),N=a(70),v=a(19);function h(e){var t=v.a().shape({firstName:v.b().required("First name is required"),lastName:v.b().required("Last name is required"),identification:v.b().required("Id is required"),birthDate:v.b().required("BirthDate is required")}),a=Object(s.useState)(),n=Object(l.a)(a,2),d=n[0],h=n[1],y=Object(s.useState)(),g=Object(l.a)(y,2),w=g[0],j=g[1],O=Object(s.useState)(!1),k=Object(l.a)(O,2),S=k[0],D=k[1],F=function(){var t=Object(c.a)(r.a.mark((function t(a){var n,c,l;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,D(!0),t.next=4,u.a.put("clients/".concat(e.client.identification),a);case 4:n=t.sent,c=n.data,h(c.message),j(""),t.next=16;break;case 10:t.prev=10,t.t0=t.catch(0),D(!1),l=t.t0.response.data,j(l.message),h("");case 16:return t.prev=16,setTimeout((function(){e.setShowModal(!1),window.location.reload()}),1e3),t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[0,10,16,19]])})));return function(e){return t.apply(this,arguments)}}();function q(){e.setShowModal(!1)}return m.a.createElement(m.a.Fragment,null,e.showModal?m.a.createElement(m.a.Fragment,null,m.a.createElement("section",{className:"w-3/4 h-screen m-auto sm:pt-10"},m.a.createElement(o.a,null),m.a.createElement(i.a,null,m.a.createElement("div",{className:"flex items-center justify-center py-7 px-2 sm:px-3 lg:px-3"},m.a.createElement("div",{className:"max-w-md w-full flex items-center justify-center"},m.a.createElement(p.c,{initialValues:{identification:e.client.identification,firstName:e.client.firstName,lastName:e.client.lastName,birthDate:e.client.birthDate.split("T")[0]},onSubmit:function(e){return F(e)},validationSchema:t},(function(e){e.values;return m.a.createElement(p.b,{className:"mt-8"},d&&m.a.createElement(b.a,{text:d}),w&&m.a.createElement(f.a,{text:w}),m.a.createElement("input",{type:"hidden",name:"remember",value:"true"}),m.a.createElement("div",null,m.a.createElement("div",{className:"flex"},m.a.createElement("div",{className:"mb-2 mr-2 w-1/2"},m.a.createElement("div",{className:"mb-1"},m.a.createElement(E.a,{text:"First Name"})),m.a.createElement(x.a,{ariaLabel:"First Name",name:"firstName",type:"text",placeholder:"First Name"})),m.a.createElement("div",{className:"mb-2 ml-2 w-1/2 "},m.a.createElement("div",{className:"mb-1"},m.a.createElement(E.a,{text:"Last Name"})),m.a.createElement(x.a,{ariaLabel:"Last Name",name:"lastName",type:"text",placeholder:"Last Name"}))),m.a.createElement("div",{className:"flex"},m.a.createElement("div",{className:"mb-2 mr-2 w-1/2"},m.a.createElement("div",{className:"mb-1"},m.a.createElement(E.a,{text:"Identification"})),m.a.createElement(x.a,{ariaLabel:"Identification",name:"identification",type:"number",placeholder:"Identification"})),m.a.createElement("div",{className:"mb-2 ml-2 w-1/2 "},m.a.createElement("div",{className:"mb-1"},m.a.createElement(E.a,{text:"BirthDate"})),m.a.createElement(x.a,{ariaLabel:"BirthDate",name:"birthDate",type:"Date",placeholder:"BirthDate"})))),m.a.createElement("div",{className:"mt-6 flex items-center justify-center font-nucleo"},m.a.createElement(N.a,{type:"submit",text:"Save",loading:S}),m.a.createElement("div",{className:"ml-6"},m.a.createElement(N.a,{text:"Close",onClick:q}))))}))))))):null)}var y=a(15),g=a(11);function w(e){var t=Object(s.useState)(),a=Object(l.a)(t,2),n=a[0],p=a[1],b=Object(s.useState)(!1),f=Object(l.a)(b,2),x=f[0],E=f[1],N=Object(s.useState)(!1),v=Object(l.a)(N,2),w=v[0],j=v[1],O=Object(s.useState)(),k=Object(l.a)(O,2),S=k[0],D=k[1],F=function(){var t=Object(c.a)(r.a.mark((function t(a){var n,c,l;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.delete("".concat(e.idCampus,"/user/delete/").concat(a));case 3:n=t.sent,c=n.data,p(c.message),E(!0),t.next=14;break;case 9:t.prev=9,t.t0=t.catch(0),l=t.t0.response.data,p(l.message),E(!0);case 14:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}();return m.a.createElement(m.a.Fragment,null,w?m.a.createElement(h,{setShowModal:j,client:S,showModal:w}):m.a.createElement(m.a.Fragment,null,m.a.createElement(o.a,null),m.a.createElement(i.a,null,x?m.a.createElement(d.a,{text:n,close:function(){E(!1)}}):null,m.a.createElement("div",{className:"inline-block min-w-full rounded-lg overflow-hidden"},m.a.createElement("table",{className:"min-w-full leading-normal"},m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",{scope:"col",className:"px-0 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal font-nucleo"},"id"),m.a.createElement("th",{scope:"col",className:"px-0 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal font-nucleo"},"firstname"),m.a.createElement("th",{scope:"col",className:"px-0 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal font-nucleo"},"lastname"),m.a.createElement("th",{scope:"col",className:"px-0 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal font-nucleo"},"birthdate"),m.a.createElement("th",{scope:"col",className:"px-0 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal font-nucleo"},"edit"),m.a.createElement("th",{scope:"col",className:"px-0 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal font-nucleo"},"delete"))),m.a.createElement("tbody",null,e.clients.map((function(e){return m.a.createElement("tr",{key:e._id},m.a.createElement("td",{className:"px-0 py-5 border-b border-gray-200 bg-white text-sm text-center"},m.a.createElement("div",{className:"flex items-center justify-center"},m.a.createElement("div",{className:"ml-3"},m.a.createElement("p",{className:"text-gray-900 whitespace-no-wrap font-serif"},e.identification)))),m.a.createElement("td",{className:"px-0 py-5 border-b border-gray-200 bg-white text-sm text-center"},m.a.createElement("div",{className:"flex items-center justify-center"},m.a.createElement("div",{className:"ml-3"},m.a.createElement("p",{className:"text-gray-900 whitespace-no-wrap font-serif"},e.firstName)))),m.a.createElement("td",{className:"px-0 py-5 border-b border-gray-200 bg-white text-sm text-center"},m.a.createElement("div",{className:"flex items-center justify-center"},m.a.createElement("div",{className:"ml-3"},m.a.createElement("p",{className:"text-gray-900 whitespace-no-wrap font-serif"},e.lastName)))),m.a.createElement("td",{className:"px-0 py-5 border-b border-gray-200 bg-white text-sm ml-5 text-center"},m.a.createElement("div",{className:"flex items-center justify-center"},m.a.createElement("div",{className:"ml-3"},m.a.createElement("p",{className:"text-gray-900 whitespace-no-wrap font-serif"},e.birthDate.split("T")[0])))),m.a.createElement("td",{className:"px-0 py-5 border-b border-gray-200  text-sm items-center"},m.a.createElement("div",{className:"flex justify-center"},m.a.createElement("button",{className:"rounded-full shadow flex items-center px-3 py-3",onClick:function(){return D(e),void j(!0)}},m.a.createElement(y.a,{icon:g.g})))),m.a.createElement("td",{className:"px-0 py-5 border-b border-gray-200 text-sm items-center"},m.a.createElement("div",{className:"flex justify-center"},m.a.createElement("button",{className:"rounded-full shadow hover:text-indigo-900 flex items-center px-3 py-3 ",onClick:function(){return F(e.identification)}},m.a.createElement(y.a,{icon:g.m})))))}))))))))}var j=a(139);function O(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),a=t[0],n=t[1];return Object(s.useEffect)((function(){(function(){var e=Object(c.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("clients");case 2:t=e.sent,a=t.data,n(a.clients);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"container mx-auto px-4"},m.a.createElement(j.a,{title:"Clients"}),m.a.createElement("div",{className:"py-8"},m.a.createElement("div",{className:"-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto"},m.a.createElement("div",null,m.a.createElement(w,{clients:a}))))))}}}]);
//# sourceMappingURL=5.462959ea.chunk.js.map