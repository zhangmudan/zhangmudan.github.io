(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-149edfe5"],{"193a":function(t,a,n){},6190:function(t,a,n){},"9bba":function(t,a,n){"use strict";var e=n("193a"),s=n.n(e);s.a},"9e8f":function(t,a,n){"use strict";var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"nav"},[n("span",{staticClass:"iconfont iconjiantou2",on:{click:function(a){return t.$router.back()}}}),n("strong",[t._v(t._s(t.title))]),t.isShow?n("span",{staticClass:"iconfont iconshouye",on:{click:function(a){return t.$router.push("/")}}}):n("span")])},s=[],i={props:["title","isShow"]},c=i,o=(n("c6a8"),n("2877")),r=Object(o["a"])(c,e,s,!1,null,"4c3cae36",null);a["a"]=r.exports},c6a8:function(t,a,n){"use strict";var e=n("6190"),s=n.n(e);s.a},d701:function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[n("Navigate",{attrs:{title:"我的收藏"}}),t._l(t.data_list,(function(a,e){return n("div",{key:e},[a.cover.length<3&&a.cover.length>0?n("div",{staticClass:"img"},[n("div",{staticClass:"left"},[n("h4",[t._v(t._s(a.title))]),n("p",[t._v(t._s(a.user.nickname)+" "+t._s(a.comments.length)+"跟帖")])]),n("img",{attrs:{src:t.$axios.defaults.baseURL+a.cover[0].url,alt:""}})]):t._e()])}))],2)},s=[],i=n("9e8f"),c={data:function(){return{local:{},data_list:[]}},components:{Navigate:i["a"]},mounted:function(){var t=this,a=JSON.parse(localStorage.getItem("userInfor"));this.local=a,this.$axios({url:"/user_star",headers:{Authorization:a.token}}).then((function(a){var n=a.data.data;t.data_list=n}))}},o=c,r=(n("9bba"),n("2877")),u=Object(r["a"])(o,e,s,!1,null,"7dc1bcb2",null);a["default"]=u.exports}}]);
//# sourceMappingURL=chunk-149edfe5.ae16ca95.js.map