(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09b8294e"],{"34a6":function(n,t,a){"use strict";var s=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"listbar"},[a("router-link",{attrs:{to:n.path||"#"}},[a("span",[n._v(n._s(n.label))]),a("span",{staticClass:"right"},[n._v(" "+n._s(n.tips)+" "),a("i",{staticClass:"iconfont iconjiantou1"})])])],1)},e=[],i={props:["label","tips","path"]},o=i,r=(a("ff6f"),a("2877")),c=Object(r["a"])(o,s,e,!1,null,"01bbab64",null);t["a"]=c.exports},"475d":function(n,t,a){},6190:function(n,t,a){},"9e8f":function(n,t,a){"use strict";var s=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"nav"},[a("span",{staticClass:"iconfont iconjiantou2",on:{click:function(t){return n.$router.back()}}}),a("strong",[n._v(n._s(n.title))]),n.isShow?a("span",{staticClass:"iconfont iconshouye",on:{click:function(t){return n.$router.push("/")}}}):a("span")])},e=[],i={props:["title","isShow"]},o=i,r=(a("c6a8"),a("2877")),c=Object(r["a"])(o,s,e,!1,null,"4c3cae36",null);t["a"]=c.exports},c6a8:function(n,t,a){"use strict";var s=a("6190"),e=a.n(s);e.a},c90e:function(n,t,a){"use strict";a.r(t);var s=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",[a("Navigate",{attrs:{title:"编辑资料"}}),a("div",{staticClass:"header"},[a("div",{staticClass:"img"},[a("img",{attrs:{src:n.$axios.defaults.baseURL+n.userInfo.head_img}}),a("van-uploader",{staticClass:"uploads",attrs:{"after-read":n.afterRead}})],1)]),a("Listbar",{attrs:{label:"昵称",tips:n.userInfo.nickname},nativeOn:{click:function(t){n.showNickname=!0}}}),a("van-dialog",{attrs:{title:"修改昵称","show-cancel-button":""},on:{confirm:n.confirmNickname},model:{value:n.showNickname,callback:function(t){n.showNickname=t},expression:"showNickname"}},[a("van-field",{attrs:{placeholder:"请输入昵称"},model:{value:n.nickname,callback:function(t){n.nickname=t},expression:"nickname"}})],1),a("Listbar",{attrs:{label:"密码",tips:"******"},nativeOn:{click:function(t){n.showPassword=!0}}}),a("van-dialog",{attrs:{title:"修改密码","show-cancel-button":""},on:{confirm:n.confirmPassword},model:{value:n.showPassword,callback:function(t){n.showPassword=t},expression:"showPassword"}},[a("van-field",{attrs:{placeholder:"请输入密码",type:"password"},model:{value:n.password,callback:function(t){n.password=t},expression:"password"}})],1),a("Listbar",{attrs:{label:"性别",tips:["女","男"][n.userInfo.gender]},nativeOn:{click:function(t){n.showGender=!0}}}),a("van-action-sheet",{attrs:{actions:n.actions,"close-on-click-action":""},on:{select:n.onSelect},model:{value:n.showGender,callback:function(t){n.showGender=t},expression:"showGender"}})],1)},e=[],i=a("34a6"),o=a("9e8f"),r={data:function(){return{userInfo:{},userJson:{},showNickname:!1,nickname:"",showPassword:!1,password:"",showGender:!1,gender:"",actions:[{name:"男",value:1},{name:"女",value:0}]}},components:{Listbar:i["a"],Navigate:o["a"]},mounted:function(){var n=this,t=JSON.parse(localStorage.getItem("userInfor"));this.userJson=t;var a=t.token,s=t.user;this.$axios({url:"/user/"+s.id,headers:{Authorization:a}}).then((function(t){var a=t.data.data;n.userInfo=a,n.nickname=a.nickname}))},methods:{afterRead:function(n){var t=this,a=n.file,s=new FormData;s.append("file",a),this.$axios({url:"/upload",method:"POST",headers:{Authorization:this.userJson.token},data:s}).then((function(n){var a=n.data.data.url;t.userInfo.head_img=a,t.modify({head_img:a})}))},modify:function(n){var t=this;return this.$axios({url:"/user_update/"+this.userJson.user.id,method:"POST",headers:{Authorization:this.userJson.token},data:n}).then((function(n){t.$toast.success("修改成功")}))},confirmNickname:function(){var n=this,t=this.modify({nickname:this.nickname});t.then((function(){n.userInfo.nickname=n.nickname}))},confirmPassword:function(){this.modify({password:this.password})},onSelect:function(n){var t=this,a=this.modify({gender:n.value});a.then((function(){t.userInfo.gender=n.value}))}}},c=r,u=(a("cfc5"),a("2877")),l=Object(u["a"])(c,s,e,!1,null,"302fa26f",null);t["default"]=l.exports},cfc5:function(n,t,a){"use strict";var s=a("ffc5"),e=a.n(s);e.a},ff6f:function(n,t,a){"use strict";var s=a("475d"),e=a.n(s);e.a},ffc5:function(n,t,a){}}]);
//# sourceMappingURL=chunk-09b8294e.e6d14bdf.js.map