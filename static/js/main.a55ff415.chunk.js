(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{27:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(0),c=n.n(o),s=n(3),a=n.n(s),i=n(6),u=n(2),h=n(15),b=n(16),d=(n(27),n(4)),l=n(5),j=n(8),p=n(7),O=function(e){var t=e.id,n=e.name,o=e.email;return Object(r.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(r.jsx)("img",{src:"https://robohash.org/".concat(t,"?200x200"),alt:"robots"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:n}),Object(r.jsx)("p",{children:o})]})]})},g=function(e){var t=e.robots;return Object(r.jsx)("div",{children:t.map((function(e,t){return Object(r.jsx)(O,{id:e.id,name:e.name,email:e.email},e.id)}))})},f=function(e){return Object(r.jsx)("div",{className:"pa2",children:Object(r.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search robots",onChange:e.searchChange})})},x=function(e){return Object(r.jsx)("div",{style:{overflow:"scroll",border:"2px solid black",height:"600px"},children:e.children})},v=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(e){var r;return Object(d.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(l.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState((function(){return{hasError:!0}}))}},{key:"render",value:function(){return this.state.hasError?Object(r.jsx)("h1",{children:"Oooops! An unknown error has occured!"}):this.props.children}}]),n}(o.Component),y="CHANGE_SEARCH_TEXT",m="REQUEST_ROBOTS_PENDING",R="REQUEST_ROBOTS_SUCCESS",C="REQUEST_ROBOTS_FAILED",T=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchText,n=e.onSearchTextChange,o=e.robots,c=e.isPending,s=o.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return c?Object(r.jsx)("h3",{children:"Loading..."}):Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)("h1",{className:"f1",children:"RoboFriends - Redux version"}),Object(r.jsx)(f,{searchChange:n}),Object(r.jsx)(x,{children:Object(r.jsx)(v,{children:Object(r.jsx)(g,{robots:s})})})]})}}]),n}(c.a.Component),E=Object(i.b)((function(e){return{searchText:e.searchRobots.searchText,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchTextChange:function(t){return e((n=t.target.value,{type:y,payload:n}));var n},onRequestRobots:function(){return e((function(e){e({type:m}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:R,payload:t})})).catch((function(t){return e({type:C,payload:t})}))}))}}}))(T),S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),o(e),c(e),s(e)}))},w=(n(28),{searchText:""}),P={isPending:!1,robots:[],error:""},k=Object(h.createLogger)(),N=Object(u.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.type;switch(console.log("action.type: ".concat(n)),t.type){case y:return Object.assign({},e,{searchText:t.payload});default:return console.log("default case selected!"),e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case m:return Object.assign({},e,{isPending:!0});case R:return Object.assign({},e,{robots:t.payload,isPending:!1});case C:return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),_=Object(u.d)(N,Object(u.a)(b.a,k));a.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(i.a,{store:_,children:Object(r.jsx)(E,{})})}),document.getElementById("root")),S()}},[[29,1,2]]]);
//# sourceMappingURL=main.a55ff415.chunk.js.map