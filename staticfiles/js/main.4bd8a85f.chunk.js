(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{120:function(e,t,a){},121:function(e,t,a){},134:function(e,t,a){},135:function(e,t,a){},136:function(e,t,a){},137:function(e,t,a){},138:function(e,t,a){},139:function(e,t,a){},140:function(e,t,a){},142:function(e,t,a){},143:function(e,t,a){},144:function(e,t,a){},145:function(e,t,a){},146:function(e,t,a){},147:function(e,t,a){},148:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(20),r=a.n(s),i=a(12),o=(a(87),a(88),a(8)),l=a.n(o),j=a(11),u=a(7),d=a(14),b=a(156),h=a(155),O=(a(90),a(1));function p(e){var t=e.username,a=e.loggedIn,n=e.setLoggedIn,c=e.userID;var s="/details/".concat(c,"/");return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(b.a,{collapseOnSelect:!0,bg:"light",expand:"lg",children:[Object(O.jsx)(b.a.Brand,{children:"\xa9 Coding Tutor"}),Object(O.jsx)(b.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(O.jsx)(b.a.Collapse,{id:"responsive-navbar-nav",children:Object(O.jsxs)(h.a,{className:"mr-auto",children:[Object(O.jsx)(i.b,{className:"links",to:"/",children:"\xa0Home \xa0"}),a?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("span",{className:"spaces",children:"\xa0 | \xa0"}),Object(O.jsxs)(i.b,{className:"links",to:s,children:["\xa0 Hello, ",t," \xa0 "]}),Object(O.jsx)("span",{className:"spaces",children:"\xa0 | \xa0"}),Object(O.jsx)(i.b,{className:"links",to:"/dashboard/",children:"\xa0 Dashboard \xa0 "}),Object(O.jsx)("span",{className:"spaces",children:"\xa0 | \xa0"}),Object(O.jsx)(i.b,{className:"links",to:"/about",children:"\xa0 About \xa0 "}),Object(O.jsx)("span",{className:"spaces",children:"\xa0 | \xa0"})]}):"",a?Object(O.jsx)(i.b,{className:"links",onClick:function(){localStorage.removeItem("token"),n(!1)},to:"/",children:"Log Out"}):""]})})]})})}var x=a(15),m=a(13),f=a(10),g=a.n(f);a(120);function v(e){var t=e.setUser,a=e.setLoggedIn,c=Object(n.useState)({username:"",password:""}),s=Object(u.a)(c,2),r=s[0],o=s[1],d=Object(n.useState)(""),b=Object(u.a)(d,2),h=b[0],p=b[1];function f(e){o(Object(m.a)(Object(m.a)({},r),{},Object(x.a)({},e.target.name,e.target.value)))}function v(){return(v=Object(j.a)(l.a.mark((function e(n){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(""),c={url:"/api/token-auth/",method:"POST",headers:{"Content-Type":"application/json"},data:{username:r.username,password:r.password}},n.preventDefault(),e.prev=3,e.next=6,g()(c).then((function(e){localStorage.setItem("token",e.data.token),t({id:e.data.id,username:e.data.username}),a(localStorage.getItem("token"))}));case 6:e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),p("Invalid Credentials");case 12:case"end":return e.stop()}}),e,null,[[3,9]])})))).apply(this,arguments)}function k(){return(k=Object(j.a)(l.a.mark((function e(n){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(""),c={url:"/api/token-auth/",method:"POST",headers:{"Content-Type":"application/json"},data:{username:"tutor",password:"1234567"}},n.preventDefault(),e.prev=3,e.next=6,g()(c).then((function(e){localStorage.setItem("token",e.data.token),t({id:e.data.id,username:e.data.username}),a(localStorage.getItem("token"))}));case 6:e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),p("Invalid Credentials");case 12:case"end":return e.stop()}}),e,null,[[3,9]])})))).apply(this,arguments)}return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"login",children:[Object(O.jsxs)("form",{onSubmit:function(e){return v.apply(this,arguments)},autoComplete:"off",children:[Object(O.jsx)("h4",{children:" LOG IN "}),Object(O.jsx)("input",{placeholder:"Username",type:"text",name:"username",value:r.username,onChange:f,required:!0}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{placeholder:"Password",type:"password",name:"password",value:r.password,onChange:f,required:!0}),Object(O.jsx)("br",{}),Object(O.jsxs)("button",{class:"btn btn-primary",type:"submit",children:[" ","LOG IN"," "]}),Object(O.jsx)("br",{}),h]}),Object(O.jsxs)("div",{className:"login-nav",children:[Object(O.jsx)(i.b,{to:"/about",children:"About"}),Object(O.jsx)("form",{onSubmit:function(e){return k.apply(this,arguments)},autoComplete:"off",children:Object(O.jsx)("button",{class:"button-link",type:"submit",children:"Login to Demo Account"})})]}),Object(O.jsx)("br",{})]})})}var k=a(82);a(121);function S(e){var t=e.setUser,a=e.setLoggedIn;g.a.defaults.xsrfHeaderName="X-CSRFToken";var c=Object(n.useState)(!0),s=Object(u.a)(c,2),r=s[0],i=s[1],o=Object(n.useState)(""),d=Object(u.a)(o,2),b=d[0],h=d[1],p=Object(n.useState)({username:"",email:"",password:"",bio:"",zipcode:"",skills:"",rate:"",image:""}),f=Object(u.a)(p,2),v=f[0],S=f[1],w=Object(n.useState)(""),y=Object(u.a)(w,2),N=y[0],C=y[1];function I(e){e.target.files?(h(e.target.files[0]),S(Object(m.a)(Object(m.a)({},v),{},Object(x.a)({},e.target.name,e.target.files[0])))):S(Object(m.a)(Object(m.a)({},v),{},Object(x.a)({},e.target.name,e.target.value)))}var T=Choices.pairs("skills");function A(){return(A=Object(j.a)(l.a.mark((function e(n){var c,s,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((c=new FormData).append("image",b),c.append("upload_preset","xdgkaefq"),s="https://fierce-wildwood-46381.herokuapp.com/",i="https://maps.googleapis.com/maps/api/geocode/json?components=postal_code:".concat(v.zipcode,"|country:USA&key=").concat("AIzaSyBZ4pYjoaUk-hmt9ol-7jopN8X3_LhlecI"),n.preventDefault(),""!==v.rate&&""!==v.skills){e.next=10;break}if(!0!==r){e.next=10;break}return C("As a tutor, please list skills and set rate!"),e.abrupt("return");case 10:return C(""),e.prev=11,e.next=14,fetch(s+i).then((function(e){return e.json()})).then(function(){var e=Object(j.a)(l.a.mark((function e(n){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("ZERO_RESULTS"!==n.status){e.next=4;break}C("Invalid Zipcode"),e.next=10;break;case 4:if("OK"!==n.status){e.next=10;break}return C("Sign up SUCCESS! Redirecting..."),S(Object(m.a)(Object(m.a)({},v),{},{place_id:n.results[0].place_id})),s={url:"/api/users/",method:"POST",headers:{"Content-Type":"application/json"},data:{username:v.username,firstName:v.firstName,lastName:v.lastName,email:v.email,password:v.password,bio:v.bio,zipcode:v.zipcode,place_id:n.results[0].place_id,skills:v.skills,rate:v.rate}},e.next=10,g()(s).then(function(){var e=Object(j.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(C("Sign up SUCCESS! Redirecting..."),localStorage.setItem("token",n.data.token),t({id:n.data.id,username:n.data.username,place_id:n.data.place_id}),""!==b&&null!==b&&void 0!==b){e.next=8;break}console.log("no image"),a(localStorage.getItem("token")),e.next=10;break;case 8:return e.next=10,g.a.put("/api/users/image/",c,{headers:{Authorization:"JWT ".concat(localStorage.getItem("token")),"content-type":"multipart/form-data"}}).then((function(e){a(localStorage.getItem("token"))}));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(11),C("Sign Up Failed");case 19:case"end":return e.stop()}}),e,null,[[11,16]])})))).apply(this,arguments)}return Object(O.jsxs)("div",{children:[Object(O.jsx)("br",{}),Object(O.jsxs)("form",{onSubmit:function(e){return A.apply(this,arguments)},autoComplete:"off",className:"signup",children:[Object(O.jsx)("h4",{children:" Sign Up "}),Object(O.jsx)("div",{children:Object(O.jsx)("span",{class:"btn btn-success",onClick:function(){S(Object(m.a)(Object(m.a)({},v),{},{skills:"",rate:""})),i(!r)},children:r?"CLICK IF YOU ARE A STUDENT":"CLICK IF YOU ARE A TUTOR"})}),Object(O.jsx)("label",{children:"Add an Image"}),Object(O.jsx)("input",{className:"image",type:"file",onChange:function(e){h(e.target.files[0])}}),Object(O.jsx)("input",{placeholder:"Username",type:"text",name:"username",value:v.username,onChange:I,required:!0}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{placeholder:"First Name",type:"text",name:"firstName",value:v.firstName,onChange:I,required:!0}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{placeholder:"Last Name",type:"text",name:"lastName",value:v.lastName,onChange:I,required:!0}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{placeholder:"Email",type:"text",name:"email",value:v.email,onChange:I,required:!0}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{placeholder:"Password",type:"password",name:"password",value:v.password,onChange:I,required:!0}),Object(O.jsx)("br",{}),Object(O.jsx)("textarea",{placeholder:"Bio",type:"text",name:"bio",value:v.bio,onChange:I}),Object(O.jsx)("br",{}),"Invalid Zipcode"===N?Object(O.jsx)("span",{class:"text-danger",children:"* "}):"",Object(O.jsx)("input",{placeholder:"VALID ZIPCODE REQUIRED",type:"number",name:"zipcode",value:v.zipcode,onChange:I,required:!0}),Object(O.jsx)("br",{}),Object(O.jsx)("span",{children:'Uncomfortable with providing zipcode? (Used for geolocation purposes) Head back to login and click "Login to Demo Account"'}),Object(O.jsx)("hr",{}),r?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("label",{children:[" ","As a tutor, please list skills and set rate!"===N?Object(O.jsx)("span",{class:"text-danger",children:"* "}):"","Skills "]}),Object(O.jsx)(k.a,{onChange:function(e){var t="";e.map((function(e,a){t+=0===a?e.label:", ".concat(e.label)})),S(Object(m.a)(Object(m.a)({},v),{},{skills:t}))},isMulti:!0,name:"colors",options:T,className:"basic-multi-select",classNamePrefix:"select"}),Object(O.jsx)("br",{}),Object(O.jsxs)("label",{children:[" ","As a tutor, please list skills and set rate!"===N?Object(O.jsx)("span",{class:"text-danger",children:"* "}):"","Rate Per Hour "]}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"number",name:"rate",value:v.rate,onChange:I}),Object(O.jsx)("br",{})]}):Object(O.jsx)("h1",{}),Object(O.jsx)("br",{}),Object(O.jsx)("p",{class:"text-danger",children:N}),Object(O.jsx)("br",{}),Object(O.jsxs)("button",{className:"btn btn-primary",disabled:"Sign up SUCCESS! Redirecting..."===N,type:"submit",children:[" ","SIGN UP"," "]}),Object(O.jsx)("br",{})]})]})}a(80);function w(e){var t=e.setLoggedIn,a=e.setUser,c=Object(n.useState)(!0),s=Object(u.a)(c,2),r=s[0],i=s[1];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h1",{children:"Coding Tutor"}),r?Object(O.jsx)(v,{setUser:a,setLoggedIn:t}):Object(O.jsx)(S,{setUser:a,setLoggedIn:t}),Object(O.jsxs)("div",{children:[Object(O.jsx)("br",{}),Object(O.jsx)("button",{class:"btn btn-outline-dark",onClick:function(){return i(!r)},children:r?"CLICK TO SIGN UP A NEW ACCOUNT":"CLICK TO LOG IN TO AN EXISTING ACCOUNT"})]})]})}var y=a(60),N=(a(134),a(59));a(135);function C(e){var t=e.tutorId,a=e.user,c=(e.key,e.slot),s=e.setSlots,r=e.setError,i=Object(n.useState)(!0),o=Object(u.a)(i,2),b=(o[0],o[1],Object(d.g)(),Object(n.useState)(c.student)),h=Object(u.a)(b,2),p=h[0];h[1];function x(e){return m.apply(this,arguments)}function m(){return(m=Object(j.a)(l.a.mark((function e(n){var i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i={url:"/api/slots/".concat(c.id,"/assoc_student/").concat(a.id,"/"),method:"PUT",headers:{Authorization:"JWT ".concat(localStorage.getItem("token"))},data:{tutorId:t}},n.preventDefault(),t!=a.id){e.next=5;break}return r(Object(O.jsx)("p",{className:"error",children:"You can't sign up for your own timeslots, dummy!"})),e.abrupt("return");case 5:return e.prev=5,e.next=8,g()(i).then((function(e){s([]),r(Object(O.jsx)("p",{className:"success",children:"Successfully signed up for timeslot. Mark your calendars!"})),s(e.data)}));case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(5),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[5,10]])})))).apply(this,arguments)}var f=null===p?Object(O.jsx)("form",{onSubmit:x,children:Object(O.jsxs)(N.a,{className:"slotButton",type:"submit",variant:"primary",children:[c.hour,":00"]})}):p===a.id?Object(O.jsxs)(N.a,{className:"slotButton",variant:"success",onClick:function(){return r(Object(O.jsx)("p",{className:"error",children:"You currently have this slot held."}))},children:[c.hour,":00"]}):Object(O.jsxs)(N.a,{className:"slotButton",variant:"danger",onClick:function(){return r(Object(O.jsx)("p",{className:"error",children:"This slot belongs to another student."}))},children:[c.hour,":00"]});return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"slots",children:f})})}function I(e){var t=e.tutorId,a=(e.tutor,e.user),c=Object(n.useState)(new Date),s=Object(u.a)(c,2),r=s[0],i=s[1],o=Object(n.useState)([]),d=Object(u.a)(o,2),b=d[0],h=d[1],p=Object(n.useState)({hour:"00",date:r.toLocaleDateString("en-US")}),x=Object(u.a)(p,2),f=x[0],v=x[1],k=Object(n.useState)(""),S=Object(u.a)(k,2),w=S[0],N=S[1],I=Object(n.useState)([]),T=Object(u.a)(I,2),A=T[0],D=T[1],L=Object(n.useState)([]),U=Object(u.a)(L,2),R=U[0],E=U[1];Object(n.useEffect)((function(){function e(){return(e=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g.a.get("/api/slots/".concat(t,"/available_slots/"),{headers:{Authorization:"JWT ".concat(localStorage.getItem("token"))}}).then((function(e){D(e.data)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),Object(n.useEffect)((function(){var e=A.map((function(e,n){return Object(O.jsx)(C,{tutorId:t,user:a,slot:e,setSlots:D,setError:N},n)}));E(e)}),[A,t,a]),Object(n.useEffect)((function(){var e=r.toLocaleDateString("en-US"),t=R.filter((function(t){return e===t.props.slot.date}));h(t)}),[R]);return Object(O.jsxs)("section",{className:"calContainer",children:[Object(O.jsx)("main",{className:"cal",children:Object(O.jsx)(y.a,{value:r,onClickDay:function(e,t){var a=e.toLocaleDateString("en-US");v(Object(m.a)(Object(m.a)({},f),{},{date:a})),i(e);var n=R.filter((function(e){return a===e.props.slot.date}));h(n)},tileClassName:function(e){var t=e.date;return"month"===e.view&&A.find((function(e){return e.date===t.toLocaleDateString("en-US")}))?"highlight":""}})}),Object(O.jsxs)("div",{className:"slotHolder",children:[Object(O.jsx)("h2",{className:"slotTop",children:"Available Time Slots"}),Object(O.jsx)("div",{className:"slotBot",children:b})]}),w]})}a(136);var T=a.p+"static/media/Placeholder.42b01977.png";function A(e){e.user;var t=e.tutor,a=null===t.image?T:t.image;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"container2",children:Object(O.jsxs)("div",{className:"panel-body",children:[Object(O.jsxs)("h2",{children:["Name:",t.first_name," ",t.last_name," "]}),Object(O.jsx)("img",{className:"imgPf",src:a,alt:"tutor profile pic"}),Object(O.jsx)("br",{}),Object(O.jsxs)("h2",{children:[" Email: ",t.email]}),Object(O.jsx)("br",{}),Object(O.jsxs)("h2",{children:["Bio: ",t.bio]}),Object(O.jsx)("br",{}),t.rate?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("h2",{children:["Skills: ",t.skills]}),Object(O.jsx)("br",{}),Object(O.jsxs)("h2",{children:["Rate: $",t.rate,"/hour"]}),Object(O.jsx)("br",{}),Object(O.jsxs)("h2",{children:["Zipcode: ",t.zipcode]})]}):null,Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)(i.b,{className:"btn btn-success",to:"/",children:"RETURN TO TUTOR HOMEPAGE"})]})})})}var D=a(49),L=a(51);function U(e){var t=e.review;return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(L.a,{border:"primary",style:{width:"100%"},children:[Object(O.jsxs)(L.a.Header,{children:["Student ID: ",t.student]}),Object(O.jsx)(L.a.Body,{children:Object(O.jsxs)(L.a.Text,{children:["Rating: ",t.rating,Object(O.jsx)("br",{}),Object(O.jsxs)("p",{children:["Comment: ",t.comment]})]})})]})})}a(137),a(138);function R(e){for(var t=e.reviewsPerPage,a=e.totalReviews,n=e.paginate,c=e.currentPage,s=[],r=1;r<=Math.ceil(a/t);r++)s.push(r);function i(e,t){e.preventDefault(),n(t)}return Object(O.jsxs)("div",{className:"pagination",children:[1===c?Object(O.jsx)("button",{disabled:!0,className:"pagination-button arrows",children:"\xab"}):Object(O.jsx)("button",{className:"pagination-button arrows",onClick:function(e){i(e,c-1)},children:"\xab"}),"\xa0\xa0\xa0",s.map((function(e,t){return Object(O.jsx)("button",{className:"pagination-button",id:c===t+1?"chosen":"",onClick:function(t){i(t,e)},children:e})})),"\xa0\xa0\xa0",c>=s.length?Object(O.jsx)("button",{disabled:!0,className:"pagination-button arrows",children:"\xbb"}):Object(O.jsx)("button",{className:"pagination-button arrows",onClick:function(e){i(e,c+1)},children:"\xbb"})]})}function E(e){var t=e.userId,a=e.tutorId,c=e.reviews,s=e.setReviews,r=Object(n.useState)([]),i=Object(u.a)(r,2),o=i[0],d=i[1],b=Object(n.useState)(1),h=Object(u.a)(b,2),p=h[0],f=h[1],v=Object(n.useState)(3),k=Object(u.a)(v,2),S=k[0],w=(k[1],Object(n.useState)({rating:"",comment:""})),y=Object(u.a)(w,2),N=y[0],C=y[1];function I(e){C(Object(m.a)(Object(m.a)({},N),{},Object(x.a)({},e.target.name,e.target.value)))}function T(){return(T=Object(j.a)(l.a.mark((function e(n){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r={url:"/api/details/".concat(a,"/add_review/").concat(t,"/"),method:"POST",headers:{Authorization:"JWT ".concat(localStorage.getItem("token"))},data:{form:N}},e.prev=2,e.next=5,g()(r).then((function(e){s([].concat(Object(D.a)(c),[e.data]))}));case 5:e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){var e=p*S,t=e-S,a=c.slice(t,e).map((function(e,t){return Object(O.jsx)(U,{review:e},t)}));d(a)}),[c,p]),Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Reviews"}),Object(O.jsxs)("div",{className:"reviewCards",children:[Object(O.jsx)(R,{reviewsPerPage:S,totalReviews:c.length,paginate:function(e){f(e)},currentPage:p}),o]}),Object(O.jsx)("h1",{children:"Add Review"}),Object(O.jsxs)("form",{onSubmit:function(e){return T.apply(this,arguments)},children:[Object(O.jsx)("p",{children:" Rating: "}),Object(O.jsxs)("div",{class:"form-check form-check-inline",children:[Object(O.jsx)("input",{class:"form-check-input",type:"radio",name:"rating",id:"inlineRadio1",value:"1",onChange:I}),Object(O.jsx)("label",{class:"form-check-label",for:"inlineRadio1",children:"1"})]}),Object(O.jsxs)("div",{class:"form-check form-check-inline",children:[Object(O.jsx)("input",{class:"form-check-input",type:"radio",name:"rating",id:"inlineRadio2",value:"2",onChange:I}),Object(O.jsx)("label",{class:"form-check-label",for:"inlineRadio2",children:"2"})]}),Object(O.jsxs)("div",{class:"form-check form-check-inline",children:[Object(O.jsx)("input",{class:"form-check-input",type:"radio",name:"rating",id:"inlineRadio3",value:"3",onChange:I}),Object(O.jsx)("label",{class:"form-check-label",for:"inlineRadio3",children:"3"})]}),Object(O.jsxs)("div",{class:"form-check form-check-inline",children:[Object(O.jsx)("input",{class:"form-check-input",type:"radio",name:"rating",id:"inlineRadio4",value:"4",onChange:I}),Object(O.jsx)("label",{class:"form-check-label",for:"inlineRadio4",children:"4"})]}),Object(O.jsxs)("div",{class:"form-check form-check-inline",children:[Object(O.jsx)("input",{class:"form-check-input",type:"radio",name:"rating",id:"inlineRadio5",value:"5",onChange:I}),Object(O.jsx)("label",{class:"form-check-label",for:"inlineRadio5",children:"5"})]}),Object(O.jsx)("textarea",{name:"comment",rows:"5",cols:"60",placeholder:"WRITE REVIEW HERE",onChange:I,className:"reviewArea"}),Object(O.jsx)("br",{}),Object(O.jsx)("button",{children:"SUBMIT"})]})]})}a(139);var P=a(50),_=a(81),F=a(70);a(140);function z(e){var t=e.tutor,a=e.details;return Object(O.jsx)(_.a,{trigger:"click",placement:"bottom",overlay:Object(O.jsx)(F.a,{id:"popover-positioned-bottom",children:Object(O.jsx)(F.a.Content,{children:a?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("span",{children:"Legend:"}),Object(O.jsx)("br",{}),Object(O.jsx)("hr",{}),Object(O.jsx)("strong",{children:"Dates with underlines may have availability "}),Object(O.jsx)("br",{}),Object(O.jsx)("span",{className:"black",children:"date"}),"- Open for booking ",Object(O.jsx)("br",{}),Object(O.jsx)("hr",{}),Object(O.jsx)("span",{className:"red",children:"date"}),"- Booked by another student ",Object(O.jsx)("br",{}),Object(O.jsx)("hr",{}),Object(O.jsx)("span",{className:"green",children:"date"}),"- Booked by you ",Object(O.jsx)("br",{})]}):t?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("strong",{children:"Add slots for students to sign up!"}),Object(O.jsx)("br",{}),Object(O.jsx)("span",{children:"Legend:"}),Object(O.jsx)("br",{}),Object(O.jsx)("hr",{}),Object(O.jsx)("span",{className:"tut1",children:"date"}),"- No Slots ",Object(O.jsx)("br",{}),Object(O.jsx)("hr",{}),Object(O.jsx)("span",{className:"tut2",children:"date"}),"- Slots open and vacant ",Object(O.jsx)("br",{}),Object(O.jsx)("hr",{}),Object(O.jsx)("span",{className:"tut3",children:"date**"}),"- Slots open and booked ",Object(O.jsx)("br",{})]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("strong",{children:"Begin by finding a tutor and signing up!"}),Object(O.jsx)("br",{}),Object(O.jsx)("span",{children:"Legend:"}),Object(O.jsx)("br",{}),Object(O.jsx)("hr",{}),Object(O.jsx)("span",{className:"tut1",children:"date"}),"- Not booked ",Object(O.jsx)("br",{}),Object(O.jsx)("hr",{}),Object(O.jsx)("span",{className:"tut3",children:"date**"}),"- Booked with tutor ",Object(O.jsx)("br",{})]})})}),children:Object(O.jsx)(N.a,{variant:"secondary",className:"pop-button",children:"?"})},"bottom")}function M(e){var t=e.user,a=Object(n.useState)([]),c=Object(u.a)(a,2),s=c[0],r=c[1],i=Object(n.useState)([]),o=Object(u.a)(i,2),b=o[0],h=o[1],p=Object(d.h)(),x=Object(n.useState)(!1),m=Object(u.a)(x,2),f=m[0],v=m[1],k=Object(n.useState)(),S=Object(u.a)(k,2),w=S[0],y=S[1];return Object(n.useEffect)((function(){function e(){return(e=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g.a.get("/api/details/".concat(p.id,"/"),{headers:{Authorization:"JWT ".concat(localStorage.getItem("token"))}}).then(function(){var e=Object(j.a)(l.a.mark((function e(a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(a.data),e.next=3,g.a.get("/api/details/user_reviews/".concat(p.id),{headers:{Authorization:"JWT ".concat(localStorage.getItem("token"))}}).then((function(e){r(e.data),y(Object(O.jsx)(I,{tutorId:p.id,tutor:b,user:t}))}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[p]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:b.rate?"holder":"",children:[Object(O.jsx)("div",{className:"header",children:Object(O.jsxs)("h1",{children:["User Details ",Object(O.jsx)(z,{tutor:t.isTutor,details:!0})]})}),Object(O.jsxs)("div",{className:"details",children:[Object(O.jsx)(A,{user:t,tutor:b}),b.rate?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(N.a,{variant:"danger",className:"showButton",onClick:function(){return v(!0)},children:"Schedule an appointment"}),Object(O.jsx)("hr",{}),Object(O.jsx)("div",{className:"reviews",children:Object(O.jsx)(E,{userId:t.id,tutorId:p.id,reviews:s,setReviews:r})})]}):null]}),Object(O.jsx)("div",{className:"calendar",children:b.rate?w:null})]}),Object(O.jsxs)(P.a,{show:f,onHide:function(){return v(!1)},dialogClassName:"modal-90w","aria-labelledby":"example-custom-modal-styling-title",children:[Object(O.jsx)(P.a.Header,{closeButton:!0,children:Object(O.jsx)(P.a.Title,{id:"example-custom-modal-styling-title",children:"Pick a timeslot"})}),Object(O.jsx)(P.a.Body,{children:w})]})]})}var B=a(153),G=a(154),W=(a(142),a.p+"static/media/Pin.64af410c.png");function J(e){var t=e.tutor,a=e.distance,n="/details/".concat(t.user),c=null===t.image?T:t.image;return Object(O.jsx)(B.a,{children:Object(O.jsx)(G.a,{lg:12,children:Object(O.jsx)(L.a,{className:"card justify-content-center",children:Object(O.jsxs)(L.a.Body,{children:[Object(O.jsxs)(L.a.Title,{children:["Name: ",t.first_name," ",t.last_name]}),Object(O.jsx)(L.a.Img,{className:"img",variant:"top",src:c}),Object(O.jsxs)(L.a.Text,{children:[Object(O.jsx)("br",{}),Object(O.jsxs)("h5",{children:["Skills: ",t.skills]}),Object(O.jsxs)("p",{children:["Rate: $",t.rate,"/hour"]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("span",{children:Object(O.jsx)("img",{src:W,alt:"pin",class:"img-distance"})}),"Distance: ",0===a?0:a.distance.text]})]}),Object(O.jsx)(i.b,{to:n,children:Object(O.jsx)(N.a,{variant:"primary",children:"CLICK TO SCHEDULE"})})]})})})})}a(143);function H(e){var t=e.user,a=Object(n.useState)([]),c=Object(u.a)(a,2),s=c[0],r=c[1],i=Object(n.useState)([]),o=Object(u.a)(i,2),d=o[0],b=o[1],h=Object(n.useState)(""),p=Object(u.a)(h,2),x=p[0],m=p[1],f=Object(n.useRef)({tutors:s,user:t});return Object(n.useEffect)((function(){function e(){return(e=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("/api/all_profiles/",{headers:{Authorization:"JWT ".concat(localStorage.getItem("token"))}}).then((function(e){var t=e.data.filter((function(e){return null!==e.rate}));r(t)}));case 2:e.sent;case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){function e(){return(e=Object(j.a)(l.a.mark((function e(){var a,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f.current.tutors===s||0===Object.keys(t).length){e.next=16;break}for(console.log("Geocode run"),a=[],n=0;n<25;n++)void 0!==s[n]&&a.push("place_id:".concat(s[n].place_id,"|"));return"https://fierce-wildwood-46381.herokuapp.com/",c="https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=place_id:".concat(t.place_id,"&destinations=").concat(a.join(""),"&key=").concat("AIzaSyBZ4pYjoaUk-hmt9ol-7jopN8X3_LhlecI"),e.prev=6,e.next=9,fetch("https://fierce-wildwood-46381.herokuapp.com/"+c).then((function(e){return e.json()})).then(function(){var e=Object(j.a)(l.a.mark((function e(a){var n,c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("OK"===a.status){for(n=a.rows[0].elements,c=[],r=0;r<25;r++)void 0!==s[r]&&t.id!==s[r].user&&c.push(Object(O.jsx)(J,{tutor:s[r],distance:n[r]},r));c.sort((function(e,t){return e.props.distance.distance.value-t.props.distance.distance.value})),b(c)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 9:e.next=15;break;case 11:e.prev=11,e.t0=e.catch(6),console.log("catch triggered"),m("There seems to be an issue with google's location matrix... Distance features have been disabled temporarily. We apologize for the inconvenience");case 15:f.current={tutors:s,user:t};case 16:case"end":return e.stop()}}),e,null,[[6,11]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[s,t]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("br",{}),Object(O.jsx)("h1",{children:"All Tutors in your Area"}),Object(O.jsx)("br",{}),x,Object(O.jsx)("div",{className:"home",children:d}),Object(O.jsx)("br",{})," ",Object(O.jsx)("br",{})]})}a(144),a(145);function q(e){var t=e.user,a=e.slots,c=e.setSlots,s=e.setDateClicked,r=Object(n.useState)(new Date),i=Object(u.a)(r,2),o=i[0],d=i[1],b=Object(n.useState)({date:o.toLocaleDateString("en-US")}),h=Object(u.a)(b,2),p=h[0],x=h[1],f=Object(n.useState)([]),v=Object(u.a)(f,2),k=v[0],S=v[1],w=Object(n.useState)(""),C=Object(u.a)(w,2),I=(C[0],C[1],Object(n.useState)(new Array(13).fill(!1))),T=Object(u.a)(I,2),A=T[0],D=T[1],L=Object(n.useState)(!1),U=Object(u.a)(L,2),R=U[0],E=U[1];function P(){return(P=Object(j.a)(l.a.mark((function e(n){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r={url:"/api/slots/".concat(t.id,"/add_slot/"),method:"POST",headers:{Authorization:"JWT ".concat(localStorage.getItem("token"))},data:{hour:k,date:p.date}},e.prev=2,e.next=5,g()(r).then((function(e){if(S([]),D(new Array(13).fill(!1)),E(!1),0!==e.data.length){c(a.concat(e.data)),s("");var t=o.toLocaleDateString("en-US");s(t)}}));case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})))).apply(this,arguments)}for(var _=[],F=function(e){_.push(Object(O.jsx)("div",{id:"ck-button",children:Object(O.jsxs)("label",{children:[Object(O.jsx)("input",{checked:A[e-8],type:"checkbox",onChange:function(t){return function(e,t){var a=A.map((function(t,a){return a===e?!t:t}));D(a),!0===t.target.checked?k.push(t.target.value):S(k.filter((function(e){return e!==t.target.value})))}(e-8,t)},value:e<10?"0".concat(e):"".concat(e)}),Object(O.jsx)("span",{children:e<13?"".concat(e," am"):"".concat(e-12," pm")})]})}))},z=8;z<21;z++)F(z);return Object(O.jsx)("div",{className:"DashCalendar",children:Object(O.jsxs)("form",{onSubmit:function(e){return P.apply(this,arguments)},autoComplete:"off",children:[Object(O.jsx)("main",{className:"dashCal",children:Object(O.jsx)(y.a,{onChange:function(e,t){d(e),e.toLocaleDateString("en-US")},value:o,onClickDay:function(e,t){var a=e.toLocaleDateString("en-US");x(Object(m.a)(Object(m.a)({},p),{},{date:a})),s(a)},tileContent:function(e){var t=e.date;return"month"===e.view&&a.find((function(e){return e.date===t.toLocaleDateString("en-US")&&null!==e.student}))?"**":null},tileClassName:function(e){var t=e.date;return"month"===e.view&&a.find((function(e){return e.date===t.toLocaleDateString("en-US")}))?"highlight":""}})}),t.isTutor?Object(O.jsxs)("div",{className:"dashChoices",children:[Object(O.jsx)("label",{children:Object(O.jsx)("h2",{children:"Select A time"})}),Object(O.jsx)("br",{}),_,Object(O.jsx)("br",{}),R?Object(O.jsx)(N.a,{className:"dash-button",onClick:function(){D(new Array(13).fill(!1)),S([]),E(!1)},children:" Deselect All "}):Object(O.jsx)(N.a,{className:"dash-button",onClick:function(){D(new Array(13).fill(!0)),S(["08","09","10","11","12","13","14","15","16","17","18","19","20"]),E(!0)},children:" Select All "}),Object(O.jsx)("br",{}),Object(O.jsx)(N.a,{className:"dash-submit",type:"submit",children:" CONFIRM TIME SLOT "})]}):null]})})}a(146);function K(e){var t=e.user,a=(e.slots,e.displayedSlots),c=Object(n.useState)([]),s=Object(u.a)(c,2),r=s[0],o=s[1],l={"08":"8:00 AM","09":"9:00 AM",10:"10:00 AM",11:"11:00 AM",12:"12:00 PM",13:"1:00 PM",14:"2:00 PM",15:"3:00 PM",16:"4:00 PM",17:"5:00 PM",18:"6:00 PM",19:"7:00 PM",20:"8:00 PM"};return Object(n.useEffect)((function(){if(t){var e=t.isTutor?a.map((function(e){var t=null!==e.student?"/details/".concat(e.student.id):"";return Object(O.jsxs)("li",{className:null===e.student?"open":"close",children:[Object(O.jsx)("span",{className:"time_element",children:l["".concat(e.hour)]})," : ",null===e.student?"Open slot":Object(O.jsxs)(i.b,{className:"dash-link",to:t,children:[" ",e.student.last_name,", ",e.student.first_name]})]})})):a.map((function(e){var t=null!==e.tutor?"/details/".concat(e.tutor.id):"";return Object(O.jsxs)("li",{className:null===e.tutor?"open":"close",children:[Object(O.jsx)("span",{className:"time_element",children:l["".concat(e.hour)]})," : ",Object(O.jsxs)(i.b,{className:"dash-link",to:t,children:[" ",e.tutor.last_name,", ",e.tutor.first_name]})]})}));o(e)}}),[a]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h1",{children:"Date Details:"})," ",Object(O.jsx)("br",{}),Object(O.jsx)("h3",{children:0!==a.length?"".concat(a[0].date):"Quiet day... If you are a tutor, begin adding slots to start onboarding students! If you are a student, visit a tutor's profile to sign up for them on your free time!"}),Object(O.jsx)("ul",{className:"list_items",children:r})]})}function Z(e){var t=e.user,a=Object(n.useState)([]),c=Object(u.a)(a,2),s=c[0],r=c[1],i=Object(n.useState)([]),o=Object(u.a)(i,2),d=o[0],b=o[1],h=Object(n.useState)(""),p=Object(u.a)(h,2),x=p[0],m=p[1];return Object(n.useEffect)((function(){function e(){return(e=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g.a.get("/api/dashboard/".concat(t.id,"/"),{headers:{Authorization:"JWT ".concat(localStorage.getItem("token"))}}).then((function(e){r(e.data);var t=e.data.filter((function(e){return(new Date).toLocaleDateString("en-US")===e.date}));b(t)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),Object(n.useEffect)((function(){s.length;var e=s.filter((function(e){return x===e.date}));b(e)}),[x]),Object(O.jsx)("div",{className:"Dashboard",children:Object(O.jsxs)("div",{className:t.isTutor?"t":"s",children:[Object(O.jsxs)("div",{className:"header",children:[Object(O.jsxs)("h1",{children:[t.isTutor?"Tutor Dashboard":"Student Dashboard"," ",Object(O.jsx)(z,{tutor:t.isTutor})]}),Object(O.jsx)("p",{children:"This page is currently under construction! For now, TUTOR accounts will be able to manage their time slots and find out who signed up for their services while STUDENT accounts are only able to view the days and times for their appointments."})]}),t.isTutor?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"details",children:Object(O.jsx)(q,{user:t,slots:s,setSlots:r,setDateClicked:m})}),Object(O.jsx)("div",{className:"right",children:Object(O.jsx)(K,{user:t,slots:s,displayedSlots:d})})]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"details",children:Object(O.jsx)(K,{user:t,slots:s,displayedSlots:d})}),Object(O.jsx)("div",{className:"right",children:Object(O.jsx)(q,{user:t,slots:s,setSlots:r,setDateClicked:m})})]})]})})}a(147);function Y(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h1",{children:"Coding Tutor"}),Object(O.jsxs)("div",{className:"about-holder",children:[Object(O.jsx)("h3",{children:" About "}),Object(O.jsx)(i.b,{to:"/",className:"btn btn-primary button-left",children:"Back"}),Object(O.jsx)("br",{}),Object(O.jsxs)("dl",{children:[Object(O.jsx)("dt",{children:"What is this?"}),Object(O.jsxs)("dd",{children:["A GA SEI collaboration project! ",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"Are you learning to code and want some help from someone more experienced? Or maybe you are an established programmer wanting to make some money tutoring new learners, either way, Coding Tutor is the choice for you! With the Coding Tutor app you can create an account as a student or tutor, students are able to view tutor profiles and schedule meetings with tutors. Tutors are able to list their skills, such as JavaScript, React, Django, etc., and create time slots for students to schedule meetings."]}),Object(O.jsx)("dt",{children:"Getting Started:"}),Object(O.jsx)("dd",{children:"Sign up or login to reach the home screen, which will display 25 tutors(API limitations) sorted from closest to furthest away from you based on your zipcode! If you are uncomfortable providing your zipcode, you may log onto the demo account. Details on login screen."}),Object(O.jsx)("dt",{children:"Tech Used:"}),Object(O.jsxs)("dd",{children:["Python, Django, PostgreSQL, Javascript, React, Css",Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"APIs used: Google Geolocation, Google Distance Matrix, Cloudinary "}),Object(O.jsx)("li",{children:"Notable libraries: Django-js-choices, BeautifulSoup, React-Calendar, React-Select"})]})]}),Object(O.jsx)("dt",{children:"Credits:"}),Object(O.jsx)("dd",{children:Object(O.jsx)("table",{className:"about-table",children:Object(O.jsxs)("tr",{children:[Object(O.jsxs)("td",{children:[Object(O.jsx)("h5",{children:"Trong Nguyen"}),"Github: ",Object(O.jsx)("a",{href:"https://github.com/onionsalot",target:"new",children:"Link"}),Object(O.jsx)("br",{}),"LinkedIn: ",Object(O.jsx)("a",{href:"https://www.linkedin.com/in/trong-nguyen1008/",target:"new",children:"Link"})]}),Object(O.jsxs)("td",{children:[Object(O.jsx)("h5",{children:"Denise Onukwue"}),"Github: ",Object(O.jsx)("a",{href:"https://github.com/denisekathy",target:"new",children:"Link"}),Object(O.jsx)("br",{}),"LinkedIn: ",Object(O.jsx)("a",{href:"https://www.linkedin.com/in/deniseonukwue/",target:"new",children:"Link"})]}),Object(O.jsxs)("td",{children:[Object(O.jsx)("h5",{children:"Alex Mrak"}),"Github: ",Object(O.jsx)("a",{href:"https://github.com/alexandermrak",target:"new",children:"Link"}),Object(O.jsx)("br",{}),"LinkedIn: ",Object(O.jsx)("a",{href:"https://www.linkedin.com/in/alexandermrak/",target:"new",children:"Link"})]})]})})})]})]})]})}var X=Object(d.i)((function(e){var t=e.history;return Object(n.useEffect)((function(){var e=t.listen((function(){window.scrollTo(0,0)}));return function(){e()}}),[]),null}));function Q(){g.a.defaults.xsrfCookieName="csrftoken",g.a.defaults.xsrfHeaderName="X-CSRFToken",g.a.defaults.withCredentials=!0;var e=Object(n.useState)(localStorage.getItem("token")),t=Object(u.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)({}),r=Object(u.a)(s,2),i=r[0],o=r[1];return Object(n.useEffect)((function(){function e(){return(e=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a&&g.a.get("/api/current_user/",{headers:{Authorization:"JWT ".concat(localStorage.getItem("token"))}}).then((function(e){o(e.data)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a]),Object(O.jsx)("main",{className:"App",children:a?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(p,{username:i.username,loggedIn:a,setLoggedIn:c,userID:i.id}),Object(O.jsx)(X,{}),Object(O.jsxs)(d.d,{children:[Object(O.jsx)(d.b,{exact:!0,path:"/",children:Object(O.jsx)(H,{user:i})}),Object(O.jsx)(d.b,{exact:!0,path:"/details/:id",children:Object(O.jsx)(M,{user:i})}),Object(O.jsx)(d.b,{exact:!0,path:"/dashboard",children:Object(O.jsx)(Z,{user:i})}),Object(O.jsx)(d.b,{exact:!0,path:"/add_slot",children:Object(O.jsx)(I,{user:i})}),Object(O.jsx)(d.b,{exact:!0,path:"/about",children:Object(O.jsx)(Y,{})}),Object(O.jsx)(d.a,{to:"/"})]})]}):Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(d.d,{children:[Object(O.jsx)(d.b,{exact:!0,path:"/",children:Object(O.jsx)(w,{setLoggedIn:c,setUser:o})}),Object(O.jsx)(d.b,{exact:!0,path:"/about",children:Object(O.jsx)(Y,{})})]})})})}r.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(i.a,{children:Object(O.jsx)(Q,{})})}),document.getElementById("root"))},80:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},90:function(e,t,a){}},[[148,1,2]]]);
//# sourceMappingURL=main.4bd8a85f.chunk.js.map