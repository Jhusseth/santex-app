(this.webpackJsonpuser_manager_app=this.webpackJsonpuser_manager_app||[]).push([[4],{139:function(e,a,t){"use strict";var r=t(0),n=t.n(r);a.a=function(e){var a=e.title;return n.a.createElement("div",{className:"my-1 sm:my-4"},n.a.createElement("h2",{className:"text-gray-800 font-bold text-2xl font-nucleo"},a))}},141:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var r=t(0),n=t.n(r);function l(e){var a=e.text,t=e.close;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"text-white px-6 py-4 border-0 rounded relative mb-4 bg-teal-500"},n.a.createElement("span",{className:"text-xl inline-block mr-5 align-middle"},n.a.createElement("i",{className:"fas fa-bell"})),n.a.createElement("span",{className:"inline-block align-middle mr-8"},n.a.createElement("b",{className:"capitalize"},a)),n.a.createElement("button",{className:"absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none",onClick:t},n.a.createElement("span",null,"\xd7"))))}},160:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return S}));var r=t(46),n=t.n(r),l=t(68),c=t(7),m=t(0),s=t.n(m),i=t(70),o=t(35),d=t(31),u=t(36),p=t(71),b=t(89),f=t(28),E=t(27),x=t(19),N=t(69);function v(e){var a=x.a().shape({firstName:x.b().required("First name is required"),lastName:x.b().required("Last name is required"),identification:x.b().required("Id is required"),birthDate:x.b().required("BirthDate is required"),email:x.b().email("Invalid email").required("Email is required"),password:x.b().required("Password is required")}),t=Object(m.useState)(),r=Object(c.a)(t,2),v=r[0],h=r[1],y=Object(m.useState)(),w=Object(c.a)(y,2),g=w[0],j=w[1],O=Object(m.useState)(!1),S=Object(c.a)(O,2),q=S[0],k=S[1],D=Object(m.useState)(!1),L=Object(c.a)(D,2),F=L[0],I=L[1],B=function(){var a=Object(l.a)(n.a.mark((function a(t){var r,l,c;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,I(!0),a.next=4,N.a.post("admins",t);case 4:r=a.sent,l=r.data,h(l.message),j(""),setTimeout((function(){k(!0)}),50),a.next=17;break;case 11:a.prev=11,a.t0=a.catch(0),I(!1),c=a.t0.response.data,j(c.message),h("");case 17:return a.prev=17,e.showAddPanel(),window.location.reload(),a.finish(17);case 21:case"end":return a.stop()}}),a,null,[[0,11,17,21]])})));return function(e){return a.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,q&&window.location.reload(),s.a.createElement("section",{className:"w-4/5 h-screen m-auto sm:pt-10"},s.a.createElement(o.a,null),s.a.createElement(d.a,null,s.a.createElement("div",{className:"flex items-center justify-center py-7 px-2 sm:px-3 lg:px-3"},s.a.createElement("div",{className:"max-w-md w-full flex items-center justify-center"},s.a.createElement(u.c,{initialValues:{firstName:"",lastName:"",identification:"",birthDate:"",email:"",password:""},onSubmit:function(e){return B(e)},validationSchema:a},(function(e){e.values;return s.a.createElement(u.b,{className:"mt-8"},v&&s.a.createElement(p.a,{text:v}),g&&s.a.createElement(b.a,{text:g}),s.a.createElement("input",{type:"hidden",name:"remember",value:"true"}),s.a.createElement("div",null,s.a.createElement("div",{className:"flex"},s.a.createElement("div",{className:"mb-2 mr-2 w-1/2"},s.a.createElement("div",{className:"mb-1"},s.a.createElement(E.a,{text:"First Name"})),s.a.createElement(f.a,{ariaLabel:"First Name",name:"firstName",type:"text",placeholder:"First Name"})),s.a.createElement("div",{className:"mb-2 ml-2 w-1/2 "},s.a.createElement("div",{className:"mb-1"},s.a.createElement(E.a,{text:"Last Name"})),s.a.createElement(f.a,{ariaLabel:"Last Name",name:"lastName",type:"text",placeholder:"Last Name"}))),s.a.createElement("div",{className:"flex"},s.a.createElement("div",{className:"mb-2 mr-2 w-1/2"},s.a.createElement("div",{className:"mb-1"},s.a.createElement(E.a,{text:"Identification"})),s.a.createElement(f.a,{ariaLabel:"Identification",name:"identification",type:"number",placeholder:"Identification"})),s.a.createElement("div",{className:"mb-2 ml-2 w-1/2 "},s.a.createElement("div",{className:"mb-1"},s.a.createElement(E.a,{text:"BirthDate"})),s.a.createElement(f.a,{ariaLabel:"BirthDate",name:"birthDate",type:"Date",placeholder:"BirthDate"}))),s.a.createElement("div",{className:"mb-2"},s.a.createElement("div",{className:"mb-1"},s.a.createElement(E.a,{text:"Email address"})),s.a.createElement(f.a,{ariaLabel:"Email address",name:"email",type:"email",placeholder:"Email address"})),s.a.createElement("div",null,s.a.createElement("div",{className:"mb-1"},s.a.createElement(E.a,{text:"Password"})),s.a.createElement(f.a,{ariaLabel:"Password",name:"password",type:"password",placeholder:"Password"}))),s.a.createElement("div",{className:"mt-6 flex items-center justify-center font-nucleo"},s.a.createElement(i.a,{type:"submit",text:"Save",loading:F})))})))))))}var h=t(141);function y(e){var a=x.a().shape({firstName:x.b().required("First name is required"),lastName:x.b().required("Last name is required"),identification:x.b().required("Id is required"),birthDate:x.b().required("BirthDate is required")}),t=Object(m.useState)(),r=Object(c.a)(t,2),v=r[0],h=r[1],y=Object(m.useState)(),w=Object(c.a)(y,2),g=w[0],j=w[1],O=Object(m.useState)(!1),S=Object(c.a)(O,2),q=S[0],k=S[1],D=function(){var a=Object(l.a)(n.a.mark((function a(t){var r,l,c;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,k(!0),a.next=4,N.a.put("admins/".concat(e.admin.identification),t);case 4:r=a.sent,l=r.data,h(l.message),j(""),a.next=16;break;case 10:a.prev=10,a.t0=a.catch(0),k(!1),c=a.t0.response.data,j(c.message),h("");case 16:return a.prev=16,setTimeout((function(){e.setShowModal(!1),window.location.reload()}),1e3),a.finish(16);case 19:case"end":return a.stop()}}),a,null,[[0,10,16,19]])})));return function(e){return a.apply(this,arguments)}}();function L(){e.setShowModal(!1)}return s.a.createElement(s.a.Fragment,null,e.showModal?s.a.createElement(s.a.Fragment,null,s.a.createElement("section",{className:"w-3/4 h-screen m-auto sm:pt-10"},s.a.createElement(o.a,null),s.a.createElement(d.a,null,s.a.createElement("div",{className:"flex items-center justify-center py-7 px-2 sm:px-3 lg:px-3"},s.a.createElement("div",{className:"max-w-md w-full flex items-center justify-center"},s.a.createElement(u.c,{initialValues:{identification:e.admin.identification,firstName:e.admin.firstName,lastName:e.admin.lastName,birthDate:e.admin.birthDate.split("T")[0]},onSubmit:function(e){return D(e)},validationSchema:a},(function(e){e.values;return s.a.createElement(u.b,{className:"mt-8"},v&&s.a.createElement(p.a,{text:v}),g&&s.a.createElement(b.a,{text:g}),s.a.createElement("input",{type:"hidden",name:"remember",value:"true"}),s.a.createElement("div",null,s.a.createElement("div",{className:"flex"},s.a.createElement("div",{className:"mb-2 mr-2 w-1/2"},s.a.createElement("div",{className:"mb-1"},s.a.createElement(E.a,{text:"First Name"})),s.a.createElement(f.a,{ariaLabel:"First Name",name:"firstName",type:"text",placeholder:"First Name"})),s.a.createElement("div",{className:"mb-2 ml-2 w-1/2 "},s.a.createElement("div",{className:"mb-1"},s.a.createElement(E.a,{text:"Last Name"})),s.a.createElement(f.a,{ariaLabel:"Last Name",name:"lastName",type:"text",placeholder:"Last Name"}))),s.a.createElement("div",{className:"flex"},s.a.createElement("div",{className:"mb-2 mr-2 w-1/2"},s.a.createElement("div",{className:"mb-1"},s.a.createElement(E.a,{text:"Identification"})),s.a.createElement(f.a,{ariaLabel:"Identification",name:"identification",type:"number",placeholder:"Identification"})),s.a.createElement("div",{className:"mb-2 ml-2 w-1/2 "},s.a.createElement("div",{className:"mb-1"},s.a.createElement(E.a,{text:"BirthDate"})),s.a.createElement(f.a,{ariaLabel:"BirthDate",name:"birthDate",type:"Date",placeholder:"BirthDate"})))),s.a.createElement("div",{className:"mt-6 flex items-center justify-center font-nucleo"},s.a.createElement(i.a,{type:"submit",text:"Save",loading:q}),s.a.createElement("div",{className:"ml-6"},s.a.createElement(i.a,{text:"Close",onClick:L}))))}))))))):null)}var w=t(15),g=t(11);function j(e){var a=Object(m.useState)(),t=Object(c.a)(a,2),r=t[0],i=t[1],u=Object(m.useState)(!1),p=Object(c.a)(u,2),b=p[0],f=p[1],E=Object(m.useState)(!1),x=Object(c.a)(E,2),v=x[0],j=x[1],O=Object(m.useState)(),S=Object(c.a)(O,2),q=S[0],k=S[1],D=function(){var e=Object(l.a)(n.a.mark((function e(a){var t,r,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.delete("admins/".concat(a));case 3:t=e.sent,r=t.data,i(r.message),f(!0),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(0),l=e.t0.response.data,i(l.message),f(!0);case 14:setTimeout((function(){window.location.reload()}),500);case 15:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,v?s.a.createElement(y,{setShowModal:j,admin:q,showModal:j}):s.a.createElement(s.a.Fragment,null,s.a.createElement(o.a,null),s.a.createElement(d.a,null,b?s.a.createElement(h.a,{text:r,close:function(){f(!1)}}):null,s.a.createElement("div",{className:"inline-block min-w-full rounded-lg overflow-hidden"},s.a.createElement("table",{className:"min-w-full leading-normal"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{scope:"col",className:"px-0 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal font-nucleo"},"id"),s.a.createElement("th",{scope:"col",className:"px-0 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal font-nucleo"},"firstname"),s.a.createElement("th",{scope:"col",className:"px-0 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal font-nucleo"},"lastname"),s.a.createElement("th",{scope:"col",className:"px-0 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal font-nucleo"},"birthdate"),s.a.createElement("th",{scope:"col",className:"px-0 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal font-nucleo"},"edit"),s.a.createElement("th",{scope:"col",className:"px-0 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal font-nucleo"},"delete"))),s.a.createElement("tbody",null,e.admins.map((function(e){return s.a.createElement("tr",{key:e._id},s.a.createElement("td",{className:"px-0 py-5 border-b border-gray-200 bg-white text-sm"},s.a.createElement("div",{className:"flex items-center justify-center"},s.a.createElement("div",{className:"ml-3"},s.a.createElement("p",{className:"text-gray-900 whitespace-no-wrap font-serif"},e.identification)))),s.a.createElement("td",{className:"px-0 py-5 border-b border-gray-200 bg-white text-sm text-center"},s.a.createElement("div",{className:"flex items-center justify-center"},s.a.createElement("div",{className:"ml-3"},s.a.createElement("p",{className:"text-gray-900 whitespace-no-wrap font-serif"},e.firstName)))),s.a.createElement("td",{className:"px-0 py-5 border-b border-gray-200 bg-white text-sm text-center"},s.a.createElement("div",{className:"flex items-center justify-center"},s.a.createElement("div",{className:"ml-3"},s.a.createElement("p",{className:"text-gray-900 whitespace-no-wrap font-serif"},e.lastName)))),s.a.createElement("td",{className:"px-0 py-5 border-b border-gray-200 bg-white text-sm"},s.a.createElement("div",{className:"flex items-center justify-center"},s.a.createElement("div",{className:"ml-3"},s.a.createElement("p",{className:"text-gray-900 whitespace-no-wrap font-serif"},e.birthDate.split("T")[0])))),s.a.createElement("td",{className:"px-0 py-5 border-b border-gray-200  text-sm items-center"},s.a.createElement("div",{className:"flex justify-center"},s.a.createElement("button",{className:"rounded-full shadow flex items-center px-3 py-3",onClick:function(){return function(e){k(e),j(!0)}(e)}},s.a.createElement(w.a,{icon:g.g})))),s.a.createElement("td",{className:"px-0 py-5 border-b border-gray-200 text-sm items-center"},s.a.createElement("div",{className:"flex justify-center"},s.a.createElement("button",{className:"rounded-full shadow hover:text-indigo-900 flex items-center px-3 py-3",onClick:function(){return D(e.identification)}},s.a.createElement(w.a,{icon:g.m})))))}))))))))}var O=t(139);function S(){var e=Object(m.useState)(!1),a=Object(c.a)(e,2),t=a[0],r=a[1],o=Object(m.useState)([]),d=Object(c.a)(o,2),u=d[0],p=d[1];Object(m.useEffect)((function(){(function(){var e=Object(l.a)(n.a.mark((function e(){var a,t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("admins");case 2:a=e.sent,t=a.data,p(t.admins);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var b=function(){r(!t)};return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"container mx-auto px-4"},s.a.createElement(O.a,{title:"Administrators"}),s.a.createElement("div",{className:"py-5"},s.a.createElement("div",{className:"-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto"},s.a.createElement("div",null,s.a.createElement(j,{admins:u})),s.a.createElement("div",{className:"container-add font-nucleo"},s.a.createElement(i.a,{text:"Add > ",onClick:b})),s.a.createElement("div",{style:{display:"".concat(t?"block":"none")}},s.a.createElement(v,{showPanel:b}))))))}}}]);
//# sourceMappingURL=4.5dc290de.chunk.js.map