(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{169:function(e,t,a){e.exports=a(439)},180:function(e,t,a){},373:function(e,t,a){},408:function(e,t,a){},410:function(e,t,a){},413:function(e,t,a){},415:function(e,t,a){},417:function(e,t,a){},419:function(e,t,a){},436:function(e,t,a){},439:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(57),s=a.n(i),o=a(71),c=a(11),l=a.n(c),u=a(17),h=a(29),m=a(30),p=a(32),d=a(31),f=a(33),g=a(69),b=a(162),v=a(449),E=a(447),y=a(448),k=a(52),w=(a(180),a(14)),S=a.n(w),O=a(160),C=a(70),x=a(375),j=a(441),L=a(442),A=(a(373),function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).handleNoteClick=function(e){e.preventDefault(),a.props.history.push(e.currentTarget.getAttribute("href"))},a.state={isLoading:!0,notes:[]},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.props.isAuthenticated){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,this.notes();case 5:t=e.sent,this.setState({notes:t}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),alert(e.t0);case 12:this.setState({isLoading:!1});case 13:case"end":return e.stop()}},e,this,[[2,9]])}));return function(){return e.apply(this,arguments)}}()},{key:"notes",value:function(){return w.API.get("notes","/notes")}},{key:"renderNotesList",value:function(e){return[{}].concat(e).map(function(e,t){return 0!==t?r.a.createElement(k.LinkContainer,{key:e.noteId,to:"/notes/".concat(e.noteId)},r.a.createElement(x.a,{header:e.content.trim().split("\n")[0]},"Created: "+new Date(e.createdAt).toLocaleString())):r.a.createElement(k.LinkContainer,{key:"new",to:"/notes/new"},r.a.createElement(x.a,null,r.a.createElement("h4",null,r.a.createElement("b",null,"\uff0b")," Create a new note")))})}},{key:"renderLander",value:function(){return r.a.createElement("div",{className:"lander"},r.a.createElement("h1",null,"Scratch"),r.a.createElement("p",null,"A simple note taking app"),r.a.createElement("div",null,r.a.createElement(g.a,{to:"/login",className:"btn btn-info btn-lg"},"Login"),r.a.createElement(g.a,{to:"/signup",className:"btn btn-success btn-lg"},"Signup")))}},{key:"renderNotes",value:function(){return r.a.createElement("div",{className:"notes"},r.a.createElement(j.a,null,"Your Notes"),r.a.createElement(L.a,null,!this.state.isLoading&&this.renderNotesList(this.state.notes)))}},{key:"render",value:function(){return r.a.createElement("div",{className:"Home"},this.props.isAuthenticated?this.renderNotes():this.renderLander())}}]),t}(n.Component)),I=(a(408),function(){return r.a.createElement("div",{className:"NotFound"},r.a.createElement("h3",null,"Sorry, page not found!"))}),N=a(39),T=a(444),P=a(445),D=a(450),_=a(40),F=a(443),z=a(412),R=(a(410),function(e){var t=e.isLoading,a=e.text,n=e.loadingText,i=e.className,s=void 0===i?"":i,o=e.disabled,c=void 0!==o&&o,l=Object(_.a)(e,["isLoading","text","loadingText","className","disabled"]);return r.a.createElement(F.a,Object.assign({className:"LoaderButton ".concat(s),disabled:c||t},l),t&&r.a.createElement(z.a,{glyph:"refresh",className:"spinning"}),t?n:a)}),U=(a(413),function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(N.a)({},e.target.id,e.target.value))},a.handleSubmit=function(){var e=Object(u.a)(l.a.mark(function e(t){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a.setState({isLoading:!0}),e.prev=2,e.next=5,w.Auth.signIn(a.state.email,a.state.password);case 5:a.props.userHasAuthenticated(!0),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),alert(e.t0.message);case 11:case"end":return e.stop()}},e,this,[[2,8]])}));return function(t){return e.apply(this,arguments)}}(),a.state={isLoading:!1,email:"",password:""},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"validateForm",value:function(){return this.state.email.length>0&&this.state.password.length>0}},{key:"render",value:function(){return r.a.createElement("div",{className:"Login"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(T.a,{controlId:"email",bsSize:"large"},r.a.createElement(P.a,null,"Email"),r.a.createElement(D.a,{autoFocus:!0,type:"email",value:this.state.email,onChange:this.handleChange})),r.a.createElement(T.a,{controlId:"password",bsSize:"large"},r.a.createElement(P.a,null,"Password"),r.a.createElement(D.a,{value:this.state.password,onChange:this.handleChange,type:"password"})),r.a.createElement(R,{block:!0,bsSize:"large",disabled:!this.validateForm(),type:"submit",isLoading:this.state.isLoading,text:"Login",loadingText:"Logging in..."})))}}]),t}(n.Component)),H=function(e){var t=e.component,a=e.props,n=Object(_.a)(e,["component","props"]);return r.a.createElement(C.a,Object.assign({},n,{render:function(e){return r.a.createElement(t,Object.assign({},e,a))}}))},M=a(446),G=(a(415),function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(N.a)({},e.target.id,e.target.value))},a.handleSubmit=function(){var e=Object(u.a)(l.a.mark(function e(t){var n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a.setState({isLoading:!0}),e.prev=2,e.next=5,w.Auth.signUp({username:a.state.email,password:a.state.password});case 5:n=e.sent,a.setState({newUser:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),alert(e.t0.message);case 12:a.setState({isLoading:!1});case 13:case"end":return e.stop()}},e,this,[[2,9]])}));return function(t){return e.apply(this,arguments)}}(),a.handleConfirmationSubmit=function(){var e=Object(u.a)(l.a.mark(function e(t){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a.setState({isLoading:!0}),e.prev=2,e.next=5,w.Auth.confirmSignUp(a.state.email,a.state.confirmationCode);case 5:return e.next=7,w.Auth.signIn(a.state.email,a.state.password);case 7:a.props.userHasAuthenticated(!0),a.props.history.push("/"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),alert(e.t0.message),a.setState({isLoading:!1});case 15:case"end":return e.stop()}},e,this,[[2,11]])}));return function(t){return e.apply(this,arguments)}}(),a.state={isLoading:!1,email:"",password:"",confirmPassword:"",confirmationCode:"",newUser:null},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"validateForm",value:function(){return this.state.email.length>0&&this.state.password.length>0&&this.state.password===this.state.confirmPassword}},{key:"validateConfirmationForm",value:function(){return this.state.confirmationCode.length>0}},{key:"renderConfirmationForm",value:function(){return r.a.createElement("form",{onSubmit:this.handleConfirmationSubmit},r.a.createElement(T.a,{controlId:"confirmationCode",bsSize:"large"},r.a.createElement(P.a,null,"Confimation Code"),r.a.createElement(D.a,{autoFocus:!0,type:"tel",value:this.state.confirmationCode,onChange:this.handleChange}),r.a.createElement(M.a,null,"Please check your email for the code.")),r.a.createElement(R,{block:!0,bsSize:"large",disabled:!this.validateConfirmationForm(),type:"submit",isLoading:this.state.isLoading,text:"Verify",loadingText:"Verifying..."}))}},{key:"renderForm",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(T.a,{controlId:"email",bsSize:"large"},r.a.createElement(P.a,null,"Email"),r.a.createElement(D.a,{autoFocus:!0,type:"email",value:this.state.email,onChange:this.handleChange})),r.a.createElement(T.a,{controlId:"password",bsSize:"large"},r.a.createElement(P.a,null,"Password"),r.a.createElement(D.a,{value:this.state.password,onChange:this.handleChange,type:"password"})),r.a.createElement(T.a,{controlId:"confirmPassword",bsSize:"large"},r.a.createElement(P.a,null,"Confirm Password"),r.a.createElement(D.a,{value:this.state.confirmPassword,onChange:this.handleChange,type:"password"})),r.a.createElement(R,{block:!0,bsSize:"large",disabled:!this.validateForm(),type:"submit",isLoading:this.state.isLoading,text:"Signup",loadingText:"Signing up..."}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"Signup"},null===this.state.newUser?this.renderForm():this.renderConfirmationForm())}}]),t}(n.Component)),B={MAX_ATTACHMENT_SIZE:5e6,s3:{REGION:"sinaz-notes-apps-uploads",BUCKET:"us-east-1"},apiGateway:{REGION:"us-east-1",URL:"https://1e9lijdiu6.execute-api.us-east-1.amazonaws.com/prod"},cognito:{REGION:"us-east-1",USER_POOL_ID:"us-east-1_kh7PCsw6g",APP_CLIENT_ID:"5tupi4v0e1p9anvoen0cfq3b3j",IDENTITY_POOL_ID:"us-east-1:5e54d900-d7f6-4013-90c4-8d8a4dc7f107"}};a(417);function X(e){return Z.apply(this,arguments)}function Z(){return(Z=Object(u.a)(l.a.mark(function e(t){var a,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(Date.now(),"-").concat(t.name),e.next=3,w.Storage.vault.put(a,t,{contentType:t.type});case 3:return n=e.sent,e.abrupt("return",n.key);case 5:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}var Y=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(N.a)({},e.target.id,e.target.value))},a.handleFileChange=function(e){a.file=e.target.files[0]},a.handleSubmit=function(){var e=Object(u.a)(l.a.mark(function e(t){var n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(a.file&&a.file.size>B.MAX_ATTACHEMENT_SIZE)){e.next=4;break}return alert("Please pick a file smaller than ".concat(B.MAX_ATTACHMENT_SIZE/1e6," MB.")),e.abrupt("return");case 4:if(a.setState({isLoading:!0}),e.prev=5,!a.file){e.next=12;break}return e.next=9,X(a.file);case 9:e.t0=e.sent,e.next=13;break;case 12:e.t0=null;case 13:return n=e.t0,e.next=16,a.createNote({attachment:n,content:a.state.content});case 16:a.props.history.push("/"),e.next=23;break;case 19:e.prev=19,e.t1=e.catch(5),alert(e.t1),a.setState({isLoading:!1});case 23:case"end":return e.stop()}},e,this,[[5,19]])}));return function(t){return e.apply(this,arguments)}}(),a.file=null,a.state={isLoading:null,content:""},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"validateForm",value:function(){return this.state.content.length>0}},{key:"createNote",value:function(e){return w.API.post("notes","/notes",{body:e})}},{key:"render",value:function(){return r.a.createElement("div",{className:"NewNote"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(T.a,{controlId:"content"},r.a.createElement(D.a,{onChange:this.handleChange,value:this.state.content,compontentClass:"textarea"})),r.a.createElement(T.a,{controlId:"file"},r.a.createElement(P.a,null,"Attachment"),r.a.createElement(D.a,{onChange:this.handleFileChange,type:"file"})),r.a.createElement(R,{block:!0,bsStyle:"primary",bsSize:"large",disabled:!this.validateForm(),type:"submit",isLoading:this.state.isLoading,text:"Create",loadingText:"Creating..."})))}}]),t}(n.Component),W=(a(419),function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(N.a)({},e.target.id,e.target.value))},a.handleFileChange=function(e){a.file=e.target.files[0]},a.handleSubmit=function(){var e=Object(u.a)(l.a.mark(function e(t){var n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(a.file&&a.file.size>B.MAX_ATTACHMENT_SIZE)){e.next=4;break}return alert("Please pick a file smaller than ".concat(B.MAX_ATTACHMENT_SIZE/1e5)),e.abrupt("return");case 4:if(a.setState({isLoading:!0}),e.prev=5,!a.file){e.next=10;break}return e.next=9,X(a.file);case 9:n=e.sent;case 10:return e.next=12,a.saveNote({content:a.state.content,attachment:n||a.state.note.attachment});case 12:a.props.history.push("/"),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(5),alert(e.t0),a.setState({isLoading:!1});case 19:case"end":return e.stop()}},e,this,[[5,15]])}));return function(t){return e.apply(this,arguments)}}(),a.handleDelete=function(){var e=Object(u.a)(l.a.mark(function e(t){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),window.confirm("Are you sure you want to delete this note?")){e.next=4;break}return e.abrupt("return");case 4:return a.setState({isDeleting:!0}),e.prev=5,e.next=8,a.deleteNote();case 8:a.props.history.push("/"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(5),alert(e.t0),a.setState({isDeleting:!1});case 15:case"end":return e.stop()}},e,this,[[5,11]])}));return function(t){return e.apply(this,arguments)}}(),a.file=null,a.state={isLoading:null,isDeleting:null,note:null,content:"",attachementURL:null},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark(function e(){var t,a,n,r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.getNote();case 3:if(a=e.sent,n=a.content,!(r=a.attachment)){e.next=9;break}return e.next=8,w.Storage.vault.get(r);case 8:t=e.sent;case 9:this.setState({note:a,content:n,attachementURL:t}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),alert(e.t0);case 15:case"end":return e.stop()}},e,this,[[0,12]])}));return function(){return e.apply(this,arguments)}}()},{key:"getNote",value:function(){return w.API.get("notes","/notes/".concat(this.props.match.params.id))}},{key:"validateForm",value:function(){return this.state.content.length>0}},{key:"formatFilename",value:function(e){return e.replace(/^\w+-/,"")}},{key:"saveNote",value:function(e){return w.API.put("notes","/notes/".concat(this.props.match.params.id),{body:e})}},{key:"deleteNote",value:function(){return w.API.del("notes","/notes/".concat(this.props.match.params.id))}},{key:"render",value:function(){return r.a.createElement("div",{className:"Notes"},this.state.note&&r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(T.a,{controlId:"content"},r.a.createElement(D.a,{onChange:this.handleChange,value:this.state.content,componentClass:"textarea"})),this.state.note.attachment&&r.a.createElement(T.a,null,r.a.createElement(P.a,null,"Attachment"),r.a.createElement(D.a.Static,null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:this.state.attachementURL},this.formatFilename(this.state.note.attachment)))),r.a.createElement(T.a,{controlId:"file"},!this.state.note.attachment&&r.a.createElement(P.a,null,"Attachment"),r.a.createElement(D.a,{onChange:this.handleFileChange,type:"file"})),r.a.createElement(R,{block:!0,bsStyle:"primary",bsSize:"large",disabled:!this.validateForm(),type:"submit",isLoading:this.state.isLoading,text:"Save",loadingText:"Saving..."}),r.a.createElement(R,{block:!0,bsStyle:"danger",bsSize:"large",isLoading:this.state.isDeleting,onClick:this.handleDelete,text:"Delete",loadingText:"Deleting..."})))}}]),t}(n.Component)),$=a(161),J=function(e){var t=e.component,a=e.props,n=Object(_.a)(e,["component","props"]);return r.a.createElement(C.a,Object.assign({},n,{render:function(e){return a.isAuthenticated?r.a.createElement(t,Object.assign({},e,a)):r.a.createElement($.a,{to:"/login?redirect=".concat(e.location.pathname).concat(e.location.search)})}}))};var K=function(e){var t=e.component,a=e.props,n=Object(_.a)(e,["component","props"]),i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location.href;e=e.replace(/[[]]/g,"\\$&");var a=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)","i").exec(t);return a?a[2]?decodeURIComponent(a[2].replace(/\+/g," ")):"":null}("redirect");return r.a.createElement(C.a,Object.assign({},n,{render:function(e){return a.isAuthenticated?r.a.createElement($.a,{to:""===i||null===i?"/":i}):r.a.createElement(t,Object.assign({},e,a))}}))},V=function(e){var t=e.childProps;return r.a.createElement(O.a,null,r.a.createElement(H,{path:"/",exact:!0,component:A,props:t}),r.a.createElement(K,{path:"/login",exact:!0,component:U,props:t}),r.a.createElement(K,{path:"/signup",exact:!0,component:G,props:t}),r.a.createElement(J,{path:"/notes/new",exact:!0,component:Y,props:t}),r.a.createElement(J,{path:"/notes/:id",exact:!0,component:W,props:t}),r.a.createElement(C.a,{component:I}))},q=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).userHasAuthenticated=function(e){a.setState({isAuthenticated:e})},a.handleLogout=function(){var e=Object(u.a)(l.a.mark(function e(t){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.Auth.signOut();case 2:a.userHasAuthenticated(!1),a.props.history.push("/login");case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.state={isAuthenticated:!1,isAuthenticating:!0},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.Auth.currentSession();case 3:this.userHasAuthenticated(!0),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),"No current user"!==e.t0&&alert(e.t0);case 9:this.setState({isAuthenticating:!1});case 10:case"end":return e.stop()}},e,this,[[0,6]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e={isAuthenticated:this.state.isAuthenticated,userHasAuthenticated:this.userHasAuthenticated};return!this.state.isAuthenticating&&r.a.createElement("div",{className:"App container"},r.a.createElement(v.a,{fluid:!0,collapseOnSelect:!0},r.a.createElement(v.a.Header,null,r.a.createElement(v.a.Brand,null,r.a.createElement(g.a,{to:"/"},"Scratch")),r.a.createElement(v.a.Toggle,null)),r.a.createElement(v.a.Collapse,null,r.a.createElement(E.a,{pullRight:!0},this.state.isAuthenticated?r.a.createElement(y.a,{onClick:this.handleLogout},"Logout"):r.a.createElement(n.Fragment,null,r.a.createElement(k.LinkContainer,{to:"/signup"},r.a.createElement(y.a,null,"Signup")),r.a.createElement(k.LinkContainer,{to:"/login"},r.a.createElement(y.a,null,"Login")))))),r.a.createElement(V,{childProps:e}))}}]),t}(n.Component),Q=Object(b.a)(q);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(436);S.a.configure({Auth:{mandatorySignIn:!0,region:B.cognito.REGION,userPoolId:B.cognito.USER_POOL_ID,identityPoolId:B.cognito.IDENTITY_POOL_ID,userPoolWebClientId:B.cognito.APP_CLIENT_ID},Storage:{region:B.s3.REGION,bucket:B.s3.BUCKET,identityPoolId:B.cognito.IDENTITY_POOL_ID},API:{endpoints:[{name:"notes",endpoint:B.apiGateway.URL,region:B.apiGateway.REGION}]}}),s.a.render(r.a.createElement(o.a,null,r.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},81:function(e,t){}},[[169,2,1]]]);
//# sourceMappingURL=main.6bc5d2d7.chunk.js.map