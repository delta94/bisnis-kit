(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"5f6a156239b6d3f45d6a":function(e,t,a){"use strict";a.r(t);var n=a("8af190b70a6bc55c6f1b"),r=a.n(n),o=a("0d7f0986bcd2f33d8a2a"),i=a("1037a6e0d5914309f74c"),u=a.n(i),c=(a("8a2d1b95e05b6a321e74"),a("6938d226fd372a75cbf9")),s=a("ab4cb61bcb2dc161defb"),l=a("d7dd51e1bf6bfc2c9c3d"),m=a("4dd2a92e69dcbe1bab10"),f=a("b8d975e1ed63a87481a1"),d=a("a28fc3c963a1d4d1a2e5");function p(e){return e}var b,y=Object(d.a)(function(e){return p(e).get("currentPage")},function(e){return p(e).get("inbox")},function(e,t){switch(e){case"inbox":return t.filter(function(e){return"sent"!==e.get("category")&&"spam"!==e.get("category")});case"stared":return t.filter(function(e){return e.get("stared")});case"sent":return t.filter(function(e){return"sent"===e.get("category")});case"spam":return t.filter(function(e){return"spam"===e.get("category")});case"updates":return t.filter(function(e){return"updates"===e.get("category")});case"social":return t.filter(function(e){return"social"===e.get("category")});case"forums":return t.filter(function(e){return"forums"===e.get("category")});case"promos":return t.filter(function(e){return"promos"===e.get("category")});default:return t}}),g=a("8f621ea01ad83fa39d8b"),v=[{key:"1",avatar:g.a[6],name:"John Doe",date:"May, 11 2018",subject:"Lorem ipsum dolor sit amet",category:"promos",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed urna in justo euismod condimentum. Fusce placerat enim et odio molestie sagittis. Vestibulum dignissim orci vitae eros rutrum euismod.",attachment:[],stared:!1},{key:"2",avatar:g.a[8],name:"Jim Doe",date:"May, 12 2018",subject:"Nunc quis sem quis velit tincidunt",category:"promos",content:"Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam. Vestibulum feugiat rhoncus metus. In non erat et ipsum molestie porta sit amet ut felis. Vestibulum a massa vestibulum, gravida odio id, fringilla ipsum. Ut sed eros finibus, placerat orci id, dapibus mauris.",attachment:[],stared:!0},{key:"3",avatar:g.a[2],name:"Jane Doe",date:"May, 13 2018",subject:"Vivamus sit",category:"updates",content:"Pellentesque ullamcorper aliquet ultrices.",attachment:[],stared:!0},{key:"4",avatar:g.a[9],name:"Jinx Doe",date:"May, 13 2018",subject:"Vestibulum faucibus eget erat eget pretium",category:"promos",content:"Nulla vehicula leo ut augue tincidunt, placerat tempus nulla rutrum. Integer orci justo, fringilla at faucibus vel, pulvinar in eros. Suspendisse eleifend nunc non varius rhoncus. Nam posuere accumsan porta. Integer id orci sed ante tincidunt tincidunt sit amet sed libero.",attachment:[],stared:!1},{key:"5",avatar:g.a[4],name:"Jihan Doe",date:"May, 15 2018",subject:"Aliquam venenatis magna et odio lobortis maximus",category:"promos",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed urna in justo euismod condimentum. Fusce placerat enim et odio molestie sagittis. Vestibulum dignissim orci vitae eros rutrum euismod.",attachment:[],stared:!1},{key:"6",avatar:g.a[7],name:"Johny Doe",date:"May, 15 2018",subject:"Vivamus sit amet interdum elit",category:"updates",content:"Integer orci justo, fringilla at faucibus vel, pulvinar in eros.",attachment:[],stared:!1},{key:"7",avatar:g.a[5],name:"Jane Doe",date:"May, 16 2018",subject:"Lorem ipsum dolor sit amet",category:"spam",content:"Nam posuere accumsan porta.",attachment:[],stared:!0},{key:"8",avatar:g.a[6],name:"Me",date:"May, 16 2018",subject:"Lorem ipsum dolor sit amet",category:"sent",content:"Nam posuere accumsan porta.",attachment:[],stared:!1},{key:"9",avatar:g.a[7],name:"James Doe",date:"May, 17 2018",subject:"Pellentesque ullamcorper aliquet ultrices",category:"sent",content:"Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero. Quisque ut metus sit amet augue rutrum feugiat. Vestibulum bibendum nisi eget magna malesuada, at mattis eros efficitur. Vivamus facilisis quam ullamcorper iaculis gravida.",attachment:[],stared:!0},{key:"10",avatar:g.a[3],name:"Jihan Doe",date:"May, 17 2018",subject:"Dolor",category:"sent",content:"Nulla vehicula leo ut augue tincidunt, placerat tempus nulla rutrum. Integer orci justo, fringilla at faucibus vel, pulvinar in eros.",attachment:[],stared:!1},{key:"11",avatar:g.a[10],name:"Johny Doe",date:"May, 20 2018",subject:"Vivamus sit amet interdum elit",category:"spam",content:"Integer orci justo, fringilla at faucibus vel, pulvinar in eros.",attachment:[],stared:!1}],h=a("64d60600a7b0e7b54c28"),j=a("8b9b1be7a46c5caaf212"),w=function(e){return{type:j.c,items:e}},O=function(e){return{type:j.i,payload:e}},D=function(e){return{type:j.g,mail:e}},k=function(e){return{type:j.j,mail:e}},S=function(e,t){return{type:j.e,mail:e,group:t}},M=function(e){return{type:j.f,mail:e}},A=function(e){return{type:j.d,filter:e}},P={type:j.a},C={type:j.b},I=function(e){return{type:j.h,keyword:e}},V={type:h.a};function q(e){return(q="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function J(e,t,a,n){b||(b="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=n;else if(o>1){for(var i=new Array(o),u=0;u<o;u++)i[u]=arguments[u+3];t.children=i}if(t&&r)for(var c in r)void 0===t[c]&&(t[c]=r[c]);else t||(t=r||{});return{$$typeof:b,type:e,key:void 0===a?null:""+a,ref:null,props:t,_owner:null}}function N(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=x(e);if(t){var r=x(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return function(e,t){if(t&&("object"===q(t)||"function"===typeof t))return t;return R(e)}(this,a)}}function R(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var F=function(e){return e&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)?"Invalid email":""},L=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(c,r.a.Component);var t,a,n,i=_(c);function c(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c);for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return E(R(e=i.call.apply(i,[this].concat(a))),"state",{to:"",subject:"",validMail:"",mobileOpen:!1}),E(R(e),"handleChange",function(t,a){"to"===a&&e.setState({validMail:F(t.target.value)}),e.setState(E({},a,t.target.value))}),E(R(e),"handleReply",function(t){(0,e.props.compose)(),e.setState({to:t.get("name"),subject:"Reply: "+t.get("subject")})}),E(R(e),"handleCompose",function(){(0,e.props.compose)(),e.setState({to:"  ",subject:"  "})}),E(R(e),"handleDrawerToggle",function(){e.setState(function(e){return{mobileOpen:!e.mobileOpen}})}),e}return t=c,(a=[{key:"componentDidMount",value:function(){(0,this.props.fetchData)(v)}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.emailData,n=e.openMail,r=e.goto,i=e.currentPage,c=(e.openFrm,e.discard,e.search),s=e.keyword,l=(e.sendEmail,e.remove),f=e.moveTo,d=e.toggleStar,p=e.closeNotif,b=e.messageNotif,y=this.state,g=(y.to,y.subject,y.validMail,y.mobileOpen),v=u.a.name+" - Email",h=u.a.desc;return J("div",{},void 0,J(o.Helmet,{},void 0,J("title",{},void 0,v),J("meta",{name:"description",content:h}),J("meta",{property:"og:title",content:v}),J("meta",{property:"og:description",content:h}),J("meta",{property:"twitter:title",content:v}),J("meta",{property:"twitter:description",content:h})),J(m.m,{close:function(){return p()},message:b}),J("div",{className:t.root},void 0,J(m.d,{search:c,handleDrawerToggle:this.handleDrawerToggle}),J(m.f,{goto:r,selected:i,handleDrawerToggle:this.handleDrawerToggle,mobileOpen:g}),J(m.e,{emailData:a,openMail:n,keyword:s,moveTo:f,remove:l,toggleStar:d,reply:this.handleReply})))}}])&&N(t.prototype,a),n&&N(t,n),c}(),Z=Object(l.connect)(function(e){return{force:e,keyword:e.getIn(["email","keywordValue"]),initValues:e.getIn(["email","formValues"]),emailData:y(e.get("email")),currentPage:e.getIn(["email","currentPage"]),openFrm:e.getIn(["email","openFrm"]),messageNotif:e.getIn(["email","notifMsg"])}},function(e){return{fetchData:Object(s.bindActionCreators)(w,e),openMail:Object(s.bindActionCreators)(M,e),goto:Object(s.bindActionCreators)(A,e),search:Object(s.bindActionCreators)(I,e),moveTo:Object(s.bindActionCreators)(S,e),remove:Object(s.bindActionCreators)(D,e),toggleStar:Object(s.bindActionCreators)(k,e),compose:function(){return e(P)},discard:function(){return e(C)},sendEmail:Object(s.bindActionCreators)(O,e),closeNotif:function(){return e(V)}}})(L);t.default=Object(c.withStyles)(f.a)(Z)}}]);