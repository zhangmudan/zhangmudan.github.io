(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24570265"],{"1f07":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Navigate",{attrs:{title:"精彩跟帖"}}),s("div",{staticClass:"main"},[s("van-list",{attrs:{finished:t.finished,"finished-text":"我也是有底线的","immediate-check":!1},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(e,a){return s("div",{key:a,staticClass:"comment"},[s("div",{staticClass:"user"},[s("div",{staticClass:"user-info"},[s("img",{attrs:{src:t.$axios.defaults.baseURL+e.user.head_img,alt:"这是图片"}}),s("div",{staticClass:"info"},[s("p",[t._v(t._s(e.user.nickname))]),s("p",{staticClass:"time"},[t._v(t._s(t.moment(e.user.create_date).fromNow()))])])]),s("div",{staticClass:"reply",on:{click:function(s){return t.handleReply(e)}}},[t._v("回复")])]),e.parent?s("CommentFloor",{attrs:{data:e},on:{replyFloor:t.handleReply}}):t._e(),s("div",{staticClass:"content"},[s("p",[t._v(t._s(e.content))])])],1)})),0)],1),s("div",{staticClass:"footer"},[s("van-field",{ref:"textarea",staticClass:"textarea",class:t.isFocus?"active":"",attrs:{rows:t.rows,autosize:!t.isFocus,type:"textarea",placeholder:t.list_item.user?"回复:@"+t.list_item.user.nickname:"说点什么吧...",isFocus:!1},on:{focus:t.focus,blur:t.blur,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit(e)}},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),t.isFocus?s("span",{staticClass:"submit",on:{click:t.submit}},[t._v("发布")]):t._e()],1)],1)},i=[],n=(s("99af"),s("498a"),s("2909")),o=s("9e8f"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"floor"},[s("div",{staticClass:"user-floor"},[t.data.parent?s("CommentFloor",{attrs:{data:t.data.parent},on:{replyFloor:t.handleReply}}):t._e(),s("div",{staticClass:"user-info"},[s("div",{staticClass:"info"},[s("img",{attrs:{src:t.$axios.defaults.baseURL+t.data.user.head_img,alt:""}}),s("div",[s("p",[t._v(t._s(t.data.user.nickname))]),s("p",{staticClass:"time"},[t._v(t._s(t.moment(t.data.user.create_date).fromNow()))])])]),s("div",{staticClass:"reply",on:{click:function(e){return t.handleReply(t.data)}}},[t._v("回复")])]),s("div",{staticClass:"floor-content"},[s("p",[t._v(t._s(t.data.content))])])],1)])},c=[],u=s("c1df"),l=s.n(u),d={name:"CommentFloor",props:["data"],data:function(){return{moment:l.a}},methods:{handleReply:function(t){this.$emit("replyFloor",t)}}},f=d,m=(s("8835"),s("2877")),p=Object(m["a"])(f,r,c,!1,null,"de48fe52",null),v=p.exports;l.a.locale("zh-CN");var h={data:function(){return{moment:l.a,id:"",list:[],loading:!1,finished:!1,pageIndex:1,pageSize:5,message:"",rows:1,isFocus:!1,list_item:{}}},components:{Navigate:o["a"],CommentFloor:v},mounted:function(){var t=this.$route.params.id;this.id=t,this.getList()},methods:{getList:function(){var t=this;this.$axios({url:"/post_comment/"+this.id,params:{pageIndex:this.pageIndex,pageSize:this.pageSize}}).then((function(e){var s=e.data.data;t.list=[].concat(Object(n["a"])(t.list),Object(n["a"])(s)),t.pageIndex+=1,t.loading=!1,s.length<t.pageSize&&(t.finished=!0)}))},onLoad:function(){this.getList()},focus:function(){this.isFocus=!0},blur:function(){var t=this;setTimeout((function(){t.isFocus=!1,""===t.message.trim()&&(t.list_item={})}),200)},submit:function(){var t=this;if(""!=this.message.trim()){var e=JSON.parse(localStorage.getItem("userInfor"))||{},s=e.token,a={content:this.message};this.list_item.id&&(a.parent_id=this.list_item.id),this.$axios({url:"/post_comment/"+this.id,headers:{Authorization:s},data:a,method:"POST"}).then((function(e){t.message="",t.$toast.success(e.data.message),t.list=[],t.pageIndex=1,t.getList(),t.reply={}}))}},handleReply:function(t){var e=this;setTimeout((function(){e.list_item=t,e.isFocus=!0,e.$refs.textarea.focus()}),200)}}},g=h,_=(s("54aa"),Object(m["a"])(g,a,i,!1,null,"6c459af8",null));e["default"]=_.exports},"498a":function(t,e,s){"use strict";var a=s("23e7"),i=s("58a8").trim,n=s("c8d2");a({target:"String",proto:!0,forced:n("trim")},{trim:function(){return i(this)}})},"54aa":function(t,e,s){"use strict";var a=s("7ccb"),i=s.n(a);i.a},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,s){var a=s("1d80"),i=s("5899"),n="["+i+"]",o=RegExp("^"+n+n+"*"),r=RegExp(n+n+"*$"),c=function(t){return function(e){var s=String(a(e));return 1&t&&(s=s.replace(o,"")),2&t&&(s=s.replace(r,"")),s}};t.exports={start:c(1),end:c(2),trim:c(3)}},6190:function(t,e,s){},"7ccb":function(t,e,s){},"85d8":function(t,e,s){},8835:function(t,e,s){"use strict";var a=s("85d8"),i=s.n(a);i.a},"99af":function(t,e,s){"use strict";var a=s("23e7"),i=s("d039"),n=s("e8b5"),o=s("861d"),r=s("7b0b"),c=s("50c4"),u=s("8418"),l=s("65f0"),d=s("1dde"),f=s("b622"),m=s("2d00"),p=f("isConcatSpreadable"),v=9007199254740991,h="Maximum allowed index exceeded",g=m>=51||!i((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),_=d("concat"),x=function(t){if(!o(t))return!1;var e=t[p];return void 0!==e?!!e:n(t)},C=!g||!_;a({target:"Array",proto:!0,forced:C},{concat:function(t){var e,s,a,i,n,o=r(this),d=l(o,0),f=0;for(e=-1,a=arguments.length;e<a;e++)if(n=-1===e?o:arguments[e],x(n)){if(i=c(n.length),f+i>v)throw TypeError(h);for(s=0;s<i;s++,f++)s in n&&u(d,f,n[s])}else{if(f>=v)throw TypeError(h);u(d,f++,n)}return d.length=f,d}})},"9e8f":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"nav"},[s("span",{staticClass:"iconfont iconjiantou2",on:{click:function(e){return t.$router.back()}}}),s("strong",[t._v(t._s(t.title))]),t.isShow?s("span",{staticClass:"iconfont iconshouye",on:{click:function(e){return t.$router.push("/")}}}):s("span")])},i=[],n={props:["title","isShow"]},o=n,r=(s("c6a8"),s("2877")),c=Object(r["a"])(o,a,i,!1,null,"4c3cae36",null);e["a"]=c.exports},c6a8:function(t,e,s){"use strict";var a=s("6190"),i=s.n(a);i.a},c8d2:function(t,e,s){var a=s("d039"),i=s("5899"),n="​᠎";t.exports=function(t){return a((function(){return!!i[t]()||n[t]()!=n||i[t].name!==t}))}}}]);
//# sourceMappingURL=chunk-24570265.aad26209.js.map