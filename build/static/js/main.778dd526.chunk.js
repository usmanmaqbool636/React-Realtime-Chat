(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{272:function(e,t,a){e.exports=a(552)},277:function(e,t,a){},287:function(e,t,a){},288:function(e,t,a){},289:function(e,t,a){},290:function(e,t,a){},291:function(e,t,a){},292:function(e,t,a){},293:function(e,t,a){},550:function(e,t,a){},551:function(e,t,a){},552:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(266),s=a.n(l),c=(a(277),a(6)),r=a(7),o=a(9),m=a(8),u=a(10),d=a(36),E=a(14),f=a(50),g=a(268),p=Object(E.b)(function(e,t){return{auth:e.firebase.auth}},null)(function(e){var t=e.component,a=Object(g.a)(e,["component"]);return a.auth.uid?i.a.createElement(f.b,Object.assign({},a,{component:t})):i.a.createElement(f.a,{to:{pathname:"/login"}})}),h={AUTH_LOGIN_SUCCESS:"AUTH_LOGIN_SUCCESS",AUTH_LOGIN_FAILED:"AUTH_LOGIN__FAILED",AUTH_LOGOUT_SUCCESS:"AUTH_LOGOUT_SUCCESS"},b={LOADING_CREATE:"LOADING_CREATE",LOADING_REMOVE:"LOADING_REMOVE"},v=function(e,t,a,n,i){n({type:b.LOADING_CREATE,payload:{status:"warning",head:"Please Wait",body:"Complete SingIn in order to proceed"}}),e.auth().signInWithPopup(a).then(function(e){return t.collection("users").doc(e.user.uid).set({fullname:e.user.displayName,image:e.user.photoURL,isLogin:!0,lastLogin:(new Date).getTime().toString(),uid:e.user.uid})}).then(function(e){var t=i().firebase.auth;n({type:h.AUTH_LOGIN_SUCCESS,payload:{fullname:t.displayName,image:t.photoURL}})}).catch(function(e){n({type:h.AUTH_LOGIN_FAILED,payload:e.message}),n({type:b.LOADING_CREATE,payload:{status:"danger",head:"Error In Signing",body:e.message}}),setTimeout(function(){n({type:b.LOADING_REMOVE})},3e3)})};a(287);var N=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).writeTitle=function(e,t,n){var i=0,l=n||0,s=(t||100)/String(e).length;setTimeout(function(){var t=setInterval(function(){a.state.title===e?clearInterval(t):a.setState({title:String(e).slice(0,i+1)}),i++},s)},l)},a.state={title:""},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.writeTitle(this.props.text,this.props.speed,this.props.delay)}},{key:"render",value:function(){return this.state.title}}]),t}(n.Component),O=(a(288),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).selectImage=function(e){var t=e.currentTarget;document.querySelectorAll(".SelectImage").forEach(function(e){e.classList.remove("active")}),t.classList.add("active"),a.setState({img:t.alt})},a.handelUsername=function(e){var t=e.currentTarget;a.setState({username:t.value})},a.state={username:"",img:""},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"option"},i.a.createElement("div",{className:"flex-align-item-center flex-container flex-justify-center model animated slideIn"},i.a.createElement("div",{className:"item flex-container flex-column flex-align-item-start flex-justify-space-between flex-wrap "},i.a.createElement("div",{className:"item header"},i.a.createElement("h3",null,"Add New User"),i.a.createElement("input",{type:"text",style:{padding:"15px",marginTop:"13px",borderRadius:"100px"},placeholder:"Full Name",onChange:this.handelUsername,value:this.state.username})),i.a.createElement("div",{className:"item body w-100 text-center"},["/assets/images/1.jpeg","/assets/images/2.jpeg","/assets/images/3.jpeg","/assets/images/4.jpeg","/assets/images/5.jpeg","/assets/images/6.jpeg","/assets/images/7.jpeg","/assets/images/8.jpeg","/assets/images/9.jpeg","/assets/images/10.jpeg","/assets/images/11.jpeg","/assets/images/12.jpeg"].map(function(t,a){return i.a.createElement("img",{src:t,className:"SelectImage",key:a,alt:t,onClick:e.selectImage})})),i.a.createElement("div",{className:"item footer text-center w-100"},i.a.createElement("button",{className:"btn ",style:{display:"inline"},disabled:!this.state.username||!this.state.img,onClick:function(){return e.props.anonymouslyLogin(e.state)}},"Add User"),i.a.createElement("button",{className:"btn danger",style:{background:"red",display:"inline"},onClick:function(){return e.props.disabledModal()}},"Cancel")))))}}]),t}(n.Component)),y=Object(E.b)(null,function(e,t){return{anonymouslyLogin:function(t){e(function(e){return function(t,a,n){var i=n.getFirebase,l=n.getFirestore;t({type:b.LOADING_CREATE,payload:{status:"warning",head:"Please Wait",body:"We are Loading All Your Data it take some time.!!"}});var s=i(),c=l();s.auth().signInAnonymously().then(function(t){return c.collection("users").doc(t.user.uid).set({fullname:e.username,image:e.img,isLogin:!0,lastLogin:(new Date).getTime().toString(),uid:t.user.uid})}).then(function(a){t({type:h.AUTH_LOGIN_SUCCESS,payload:{fullname:e.username,image:e.img}})}).catch(function(e){t({type:h.AUTH_LOGIN_FAILED,payload:!1}),t({type:b.LOADING_CREATE,payload:{status:"danger",head:"Error In Signing",body:e.message}}),setTimeout(function(){t({type:b.LOADING_REMOVE})},3e3)})}}(t))}}})(O),j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).shuffle=function(e){return e.sort(function(){return Math.random()-.5})},a.handelGoogleLogin=function(){(0,a.props.googleLogin)()},a.handelTwitterLogin=function(){(0,a.props.twitterLogin)()},a.handelFacebookLogin=function(){(0,a.props.facebookLogin)()},a.handelGithubLogin=function(){(0,a.props.githubLogin)()},a.handelAnonymouslyLogin=function(){a.setState({modal:!0})},a.disabledModal=function(){a.setState({modal:!1})},a.state={title:"",modal:!1},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.auth.isLoaded?this.props.loadingRemove():this.props.loadingCreate()}},{key:"componentDidUpdate",value:function(e,t){this.props.auth.isLoaded?this.props.loadingRemove():this.props.loadingCreate()}},{key:"render",value:function(){var e=this.props.auth,t=this.state.modal;if(e.uid)return i.a.createElement(f.a,{to:"/"});return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"login"},i.a.createElement("div",{className:"flex-container"},i.a.createElement("div",{className:"item head flex-container"},i.a.createElement("div",{className:"item"},i.a.createElement("div",{className:"background"},this.shuffle(["color-1","color-2","color-3","color-4","color-5","color-6","color-7"]).map(function(e,t){return i.a.createElement("div",{className:"ball ball-".concat(t+1," ").concat(e),key:t})}),i.a.createElement("div",{className:"flex-container title"},i.a.createElement("div",{className:"item"},i.a.createElement("h1",null,i.a.createElement(N,{delay:"400",text:"connect.",speed:"1000"}))),i.a.createElement("div",{className:"item"},i.a.createElement("h4",null,"Technology"),i.a.createElement("div",{className:"flex-container technology"},i.a.createElement("div",{className:"item"},i.a.createElement("i",{className:"fab fa-html5"})),i.a.createElement("div",{className:"item"},i.a.createElement("i",{className:"fab fa-css3-alt"})),i.a.createElement("div",{className:"item"},i.a.createElement("i",{className:"fab fa-js"})),i.a.createElement("div",{className:"item"},i.a.createElement("i",{className:"fab fa-node"})),i.a.createElement("div",{className:"item"},i.a.createElement("i",{className:"fab fa-react"})),i.a.createElement("div",{className:"item"},i.a.createElement("i",{className:"fab fa-git"})),i.a.createElement("div",{className:"item"},i.a.createElement("i",{className:"fab fa-gripfire"})))))))),i.a.createElement("div",{className:"item body flex-container"},i.a.createElement("div",{className:"item"},i.a.createElement("h1",null,"Connect."),i.a.createElement("p",null,"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nihil placeat quia possimus praesentium sapiente inventore non et eos ullam tempora mollitia suscipit reiciendis nam accusantium, quaerat dolorem culpa repellendus.")),i.a.createElement("div",{className:"item"}),i.a.createElement("div",{className:"item"},i.a.createElement("button",{className:"btn flex-container",onClick:this.handelAnonymouslyLogin},i.a.createElement("i",{className:"far fa-grin-tears item"}),i.a.createElement("span",{className:"item"},"Guess Login")),i.a.createElement("button",{className:"btn flex-container",onClick:this.handelFacebookLogin},i.a.createElement("i",{className:"fab fa-facebook-square item"}),i.a.createElement("span",{className:"item"},"Login With Facebook")),i.a.createElement("button",{className:"btn flex-container",onClick:this.handelTwitterLogin},i.a.createElement("i",{className:"fab fa-twitter-square item"}),i.a.createElement("span",{className:"item"},"Login With Twitter")),i.a.createElement("button",{className:"btn flex-container",onClick:this.handelGoogleLogin},i.a.createElement("i",{className:"fab fa-google-plus-square item"}),i.a.createElement("span",{className:"item"},"Login With Google +")),i.a.createElement("button",{className:"btn flex-container",onClick:this.handelGithubLogin},i.a.createElement("i",{className:"fab fa-github-square item"}),i.a.createElement("span",{className:"item"},"Login With GitHub")))))),t&&i.a.createElement(y,{disabledModal:this.disabledModal}))}}]),t}(n.Component),L=Object(E.b)(function(e,t){return{auth:e.firebase.auth,status:e.auth.status}},function(e,t){return{googleLogin:function(){e(function(e,t,a){var n=a.getFirebase,i=a.getFirestore,l=n(),s=i(),c=new l.auth.GoogleAuthProvider;v(l,s,c,e,t)})},facebookLogin:function(){e(function(e,t,a){var n=a.getFirebase,i=a.getFirestore,l=n(),s=i(),c=new l.auth.FacebookAuthProvider;v(l,s,c,e,t)})},githubLogin:function(){e(function(e,t,a){var n=a.getFirebase,i=a.getFirestore,l=n(),s=i(),c=new l.auth.GithubAuthProvider;v(l,s,c,e,t)})},twitterLogin:function(){e(function(e,t,a){var n=a.getFirebase,i=a.getFirestore,l=n(),s=i(),c=new l.auth.TwitterAuthProvider;v(l,s,c,e,t)})},loadingCreate:function(){e(function(e,t,a){var n=e||null;return function(e,i){e({type:b.LOADING_CREATE,payload:{status:n,head:t,body:a}})}}())},loadingRemove:function(){e(function(e,t){e({type:b.LOADING_REMOVE})})}}})(j),x=a(27),C=(a(289),a(290),function(e){var t=e.shortName,a=e.style,n=e.username,l=e.image;return i.a.createElement("div",{className:"profile flex-container",style:a},i.a.createElement("div",{className:"item"},i.a.createElement("img",{src:l,alt:""})),i.a.createElement("div",{className:"item"},i.a.createElement("h4",{style:{maxWidth:t?"90px":""}},String(n)),i.a.createElement("p",null,i.a.createElement("i",{className:"fas fa-dot-circle"})," Online")))}),A=(a(291),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.sibling,a=e.mine;return i.a.createElement("div",{className:"message flex-container ".concat(t?"secondMessage":""," ").concat(a?"mine":"")},!a&&i.a.createElement("img",{src:"/assets/images/2.jpeg",alt:"",className:"item"}),i.a.createElement("div",{className:"item message-body"},i.a.createElement("p",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea mollitia, accusamus debitis necessitatibus sint labore corporis numquam assumenda sapiente. Soluta, doloribus repellendus. Optio ratione officiis magnam corrupti adipisci facilis eius!"),i.a.createElement("p",null,i.a.createElement("span",null,i.a.createElement("strong",null,"Delivered at")," \xa0"),"14 min ago"),i.a.createElement("p",null,i.a.createElement("strong",null,"Message Not Send"))))}}]),t}(n.Component)),S=(a(292),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"typing flex-container"},i.a.createElement("img",{src:"/assets/images/2.jpeg",alt:"",className:"item"}),i.a.createElement("div",{className:"item message-body"},i.a.createElement("p",null,i.a.createElement("i",{className:"fas fa-dot-circle",style:{animationDelay:"0.3s"}}),i.a.createElement("i",{className:"fas fa-dot-circle",style:{animationDelay:"0.5s"}}),i.a.createElement("i",{className:"fas fa-dot-circle",style:{animationDelay:"0.1s"}}))))}}]),t}(n.Component)),w=(a(293),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.active,a=e.status,n=e.name,l=e.image,s=e.message,c=(e.date,e.online);return i.a.createElement("div",{className:"messageBox flex-container ".concat(t?"active":"")},i.a.createElement("div",{className:"item"},i.a.createElement("img",{src:l,alt:""})),i.a.createElement("div",{className:"item"},i.a.createElement("h4",null,n),!a&&i.a.createElement("p",null,String(s).length>=40?s:String(s).slice(0,40).concat("..."))),i.a.createElement("div",{className:"item"},i.a.createElement("p",null,"date"),i.a.createElement("p",{className:c?"online":""},i.a.createElement("i",{className:"fas fa-dot-circle"}))))}}]),t}(n.Component)),I=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"item"},i.a.createElement(w,null)),i.a.createElement("div",{className:"item"},i.a.createElement(w,{active:!0})))},_=a(24),T=a(37),k=Object(_.d)(Object(E.b)(function(e,t){return{users:e.firestore.ordered.users}},null),Object(T.firestoreConnect)([{collection:"users"}]))(function(e){return!!e.users&&i.a.createElement(i.a.Fragment,null,e.users.map(function(e,t){return i.a.createElement("div",{className:"item",key:t},i.a.createElement(w,{status:!0,name:e.fullname,image:e.image,date:e.lastLogin,online:e.isLogin}))}))}),U=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handelToggleMenu=function(){var e=a.state.isMenu;a.setState(function(t){return Object(x.a)({},t,{isMenu:!e})})},a.isUnder850px=function(){window.innerWidth>850?a.setState(function(e){return Object(x.a)({},e,{isMenu:!1})}):a.setState(function(e){return Object(x.a)({},e,{isMenu:!0})})},a.handleChangeNav=function(e){a.setState({visible:e})},a.state={isMenu:!1,visible:"newMessage"},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.isUnder850px)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.isUnder850px)}},{key:"render",value:function(){var e=this,t=this.state,a=t.isMenu,n=t.visible,l=this.props.user?this.props.user:null,s=l?l[Object.keys(l)[0]]:{};return i.a.createElement("div",{className:"home"},i.a.createElement("div",{className:"flex-container"},i.a.createElement("div",{className:"item"},i.a.createElement("div",{className:"flex-container"},i.a.createElement("div",{className:"item"},i.a.createElement("h2",null,i.a.createElement(N,{delay:"400",text:"CONNECT.",speed:"1000"})),i.a.createElement("span",{onClick:this.handelToggleMenu},i.a.createElement("i",{className:"fas fa-ellipsis-h "}))),i.a.createElement("div",{className:"item ".concat(a?"d-none":"")},i.a.createElement(C,{shortName:!0,style:{padding:"10px"},username:s.fullname,image:s.image})),i.a.createElement("div",{className:"item ".concat(a?"d-none":"")},i.a.createElement("hr",null)),i.a.createElement("div",{className:"item ".concat(a?"d-none":"")},i.a.createElement("div",{className:"flex-container"},i.a.createElement("div",{onClick:function(){return e.handleChangeNav("newMessage")},className:"item ".concat("newMessage"===n?"active":"")},i.a.createElement("p",null,"New Message (2)")),i.a.createElement("div",{onClick:function(){return e.handleChangeNav("people")},className:"item ".concat("people"===n?"active":"")},i.a.createElement("p",null,"Peoples (2)")),i.a.createElement("div",{onClick:function(){return e.handleChangeNav("online")},className:"item ".concat("online"===n?"active":"")},i.a.createElement("p",null,"Online (2)")),i.a.createElement("div",{className:"item"},i.a.createElement("p",null,i.a.createElement(d.b,{to:"/logout"},"Logout"))))))),i.a.createElement("div",{className:"item ".concat(a?"d-none":"")},i.a.createElement("div",{className:"flex-container"},i.a.createElement("div",{className:"item"},i.a.createElement("div",{className:"flex-container search"},i.a.createElement("i",{className:"fas fa-search item"}),i.a.createElement("input",{type:"text ",className:"item",placeholder:"Search Here"}))),"newMessage"===n?i.a.createElement("div",{className:"item flex-container"},i.a.createElement(I,null)):"people"===n?i.a.createElement("div",{className:"item flex-container"},i.a.createElement(k,null)):"online"===n?i.a.createElement("div",{className:"item flex-container"},i.a.createElement(k,null)):null)),i.a.createElement("div",{className:"item"},i.a.createElement("div",{className:"flex-container"},i.a.createElement("div",{className:"item"},i.a.createElement(C,{username:s.fullname,image:s.image})),i.a.createElement("div",{className:"item"},i.a.createElement("div",{className:"flex-container"},i.a.createElement("div",{className:"item"},i.a.createElement(A,null)),i.a.createElement("div",{className:"item"},i.a.createElement(A,{sibling:!0})),i.a.createElement("div",{className:"item"},i.a.createElement(A,{mine:!0})),i.a.createElement("div",{className:"item"},i.a.createElement(A,{sibling:!0,mine:!0})),i.a.createElement("div",{className:"item"},i.a.createElement(A,null)),i.a.createElement("div",{className:"item"},i.a.createElement(A,{mine:!0})),i.a.createElement("div",{className:"item"},i.a.createElement(S,null)))),i.a.createElement("div",{className:"item"},i.a.createElement("div",{className:"flex-container"},i.a.createElement("div",{className:"item"},i.a.createElement("div",{className:"fas fa-camera"})),i.a.createElement("div",{className:"item"},i.a.createElement("textarea",{placeholder:"Enter Message"})),i.a.createElement("div",{className:"item"},i.a.createElement("button",{className:"btn "},"Send"))))))))}}]),t}(n.Component),G=Object(_.d)(Object(E.b)(function(e,t){return{uid:e.firebase.auth.uid,user:e.firestore.data.users}},null),Object(T.firestoreConnect)(function(e){return[{collection:"users",doc:e.uid}]}))(U),D=Object(E.b)(function(e,t){return{auth:e.firebase.auth}},function(e,t){return{logout:function(){e(function(e,t,a){var n=a.getFirebase,i=a.getFirestore;e({type:b.LOADING_CREATE,payload:{}});var l=n(),s=i(),c=t().firebase.auth.uid;s.collection("users").doc(c).set({isLogin:!1},{merge:!0}).then(function(){l.auth().signOut().then(function(t){e({type:h.AUTH_LOGOUT_SUCCESS}),e({type:b.LOADING_REMOVE})})})})}}})(function(e){return e.logout(),e.auth.uid?i.a.createElement("div",null):i.a.createElement(f.a,{to:"/login"})}),M=function(){return i.a.createElement(f.d,null,i.a.createElement(p,{path:"/chat",exact:!0,component:G}),i.a.createElement(f.b,{path:"/login",exact:!0,component:L}),i.a.createElement(p,{path:"/logout",exact:!0,component:D}),i.a.createElement(p,{path:"/",exact:!0,component:G}),i.a.createElement(f.a,{to:"/404"}))},F=a(270),R=a(271),H=a(77),W={status:{isError:null,message:null},user:null},P={status:!1,type:null,head:null,body:null},V=Object(_.c)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.LOADING_CREATE:var a=t.payload,n=a.status,i=a.head,l=a.body,s=n||null;return Object(x.a)({},e,{status:!0,type:s,head:i,body:l});case b.LOADING_REMOVE:return Object(x.a)({},e,{status:!1,type:null,head:null,body:null});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.AUTH_LOGIN_SUCCESS:return Object(x.a)({},e,{status:{isError:!0,message:"Successfully Login"},user:t.payload});case h.AUTH_LOGIN_FAILED:return Object(x.a)({},e,{status:{status:!1,message:t.payload}});case h.AUTH_LOGOUT_SUCCESS:return Object(x.a)({},e,{status:{isError:null,message:null},user:null});default:return e}},firebase:T.firebaseReducer,firestore:H.firestoreReducer}),q=a(119),B=a.n(q);a(541),a(545);B.a.initializeApp({apiKey:"AIzaSyCspseAH2VQNpWNHFCSSNCf6bvLgPG5sm0",authDomain:"react-chat-3cb5c.firebaseapp.com",databaseURL:"https://react-chat-3cb5c.firebaseio.com",projectId:"react-chat-3cb5c",storageBucket:"react-chat-3cb5c.appspot.com",messagingSenderId:"443045259344"}),B.a.firestore();var z=B.a,J=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||_.d)(Object(_.a)(F.a.withExtraArgument({getFirebase:T.getFirebase,getFirestore:H.getFirestore}),Object(R.createLogger)()),Object(H.reduxFirestore)(z),Object(T.reduxReactFirebase)(z)),X=Object(_.e)(V,J),K=(a(547),a(548),a(549),a(550),a(551),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){document.getElementById("routing").children[0].classList.add("inActive")}},{key:"componentWillUnmount",value:function(){document.getElementById("routing").children[0].classList.remove("inActive")}},{key:"render",value:function(){var e=this.props.status;return i.a.createElement("div",{className:"modal animated fadeIn"},i.a.createElement("div",{className:"flex-align-item-center flex-container flex-justify-center model animated slideIn"},i.a.createElement("div",{className:"item flex-container flex-column flex-align-item-start flex-justify-space-between flex-wrap ".concat(e)},i.a.createElement("div",{className:"item header"},i.a.createElement("h3",null,this.props.children[0])),i.a.createElement("div",{className:"item body w-100 text-center"},this.props.children[1]),i.a.createElement("div",{className:"item footer text-center w-100"},this.props.children[2]))))}}]),t}(n.Component)),Q=Object(E.b)(function(e,t){return{loading:e.loading}},null)(function(e){var t;return e.loading.status&&null===e.loading.type?t="default":e.loading.status&&e.loading.type&&(t=e.loading.type),i.a.createElement("div",{className:"common"},"default"===t?i.a.createElement(K,{status:""},i.a.createElement("span",null,"Loading"),i.a.createElement("span",null,"We Are Loading Some Time Special"),i.a.createElement("img",{src:"/assets/images/loading.gif",alt:""})):t?i.a.createElement(K,{status:t},i.a.createElement("span",null,e.loading.head),i.a.createElement("span",null,e.loading.body)):null)}),Y=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(E.a,{store:X},i.a.createElement(d.a,null,i.a.createElement("div",{id:"routing"},i.a.createElement(M,null)),i.a.createElement(Q,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[272,1,2]]]);
//# sourceMappingURL=main.778dd526.chunk.js.map