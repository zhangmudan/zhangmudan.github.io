(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6bfb47b3"],{"11c8":function(t,e,r){"use strict";var n=r("a87b"),i=r.n(n);i.a},"4b4b":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Navigate",{attrs:{title:"栏目管理"}}),r("div",{staticClass:"del"},[r("p",[t._v("点击删除以下频道")]),r("div",{staticClass:"channe"},t._l(t.delArr,(function(e,n){return r("span",{key:n,class:["关注","头条"].includes(e.name)?"active":"",on:{click:function(r){return t.getDel(e,n)}}},[t._v(t._s(e.name))])})),0)]),r("div",{staticClass:"add"},[r("p",[t._v("点击添加以下频道")]),r("div",{staticClass:"channe"},t._l(t.addArr,(function(e,n){return r("span",{key:n,on:{click:function(r){return t.getAdd(e,n)}}},[t._v(t._s(e.name))])})),0)])],1)},i=[],a=(r("99af"),r("4de4"),r("caad"),r("a434"),r("b0c0"),r("2909")),c=r("9e8f"),s={data:function(){return{categories:[],delArr:[],addArr:[]}},components:{Navigate:c["a"]},mounted:function(){var t=JSON.parse(localStorage.getItem("categories"));this.categories=t,this.delArr=t.filter((function(t){return 1===t.is_top})),this.addArr=t.filter((function(t){return 0===t.is_top}))},destroyed:function(){this.categories=[].concat(Object(a["a"])(this.delArr),Object(a["a"])(this.addArr),[this.categories[this.categories.length-1]]),localStorage.setItem("categories",JSON.stringify(this.categories))},methods:{getDel:function(t,e){["关注","头条"].includes(t.name)||(t.is_top=0,this.delArr.splice(e,1),this.addArr.push(t))},getAdd:function(t,e){t.is_top=1,this.addArr.splice(e,1),this.delArr.push(t)}}},o=s,l=(r("11c8"),r("2877")),u=Object(l["a"])(o,n,i,!1,null,"459f9ea5",null);e["default"]=u.exports},"4de4":function(t,e,r){"use strict";var n=r("23e7"),i=r("b727").filter,a=r("1dde"),c=r("ae40"),s=a("filter"),o=c("filter");n({target:"Array",proto:!0,forced:!s||!o},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},6190:function(t,e,r){},"99af":function(t,e,r){"use strict";var n=r("23e7"),i=r("d039"),a=r("e8b5"),c=r("861d"),s=r("7b0b"),o=r("50c4"),l=r("8418"),u=r("65f0"),d=r("1dde"),f=r("b622"),h=r("2d00"),p=f("isConcatSpreadable"),g=9007199254740991,v="Maximum allowed index exceeded",b=h>=51||!i((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),A=d("concat"),_=function(t){if(!c(t))return!1;var e=t[p];return void 0!==e?!!e:a(t)},m=!b||!A;n({target:"Array",proto:!0,forced:m},{concat:function(t){var e,r,n,i,a,c=s(this),d=u(c,0),f=0;for(e=-1,n=arguments.length;e<n;e++)if(a=-1===e?c:arguments[e],_(a)){if(i=o(a.length),f+i>g)throw TypeError(v);for(r=0;r<i;r++,f++)r in a&&l(d,f,a[r])}else{if(f>=g)throw TypeError(v);l(d,f++,a)}return d.length=f,d}})},"9e8f":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"nav"},[r("span",{staticClass:"iconfont iconjiantou2",on:{click:function(e){return t.$router.back()}}}),r("strong",[t._v(t._s(t.title))]),t.isShow?r("span",{staticClass:"iconfont iconshouye",on:{click:function(e){return t.$router.push("/")}}}):r("span")])},i=[],a={props:["title","isShow"]},c=a,s=(r("c6a8"),r("2877")),o=Object(s["a"])(c,n,i,!1,null,"4c3cae36",null);e["a"]=o.exports},a434:function(t,e,r){"use strict";var n=r("23e7"),i=r("23cb"),a=r("a691"),c=r("50c4"),s=r("7b0b"),o=r("65f0"),l=r("8418"),u=r("1dde"),d=r("ae40"),f=u("splice"),h=d("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,g=Math.min,v=9007199254740991,b="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!f||!h},{splice:function(t,e){var r,n,u,d,f,h,A=s(this),_=c(A.length),m=i(t,_),w=arguments.length;if(0===w?r=n=0:1===w?(r=0,n=_-m):(r=w-2,n=g(p(a(e),0),_-m)),_+r-n>v)throw TypeError(b);for(u=o(A,n),d=0;d<n;d++)f=m+d,f in A&&l(u,d,A[f]);if(u.length=n,r<n){for(d=m;d<_-n;d++)f=d+n,h=d+r,f in A?A[h]=A[f]:delete A[h];for(d=_;d>_-n+r;d--)delete A[d-1]}else if(r>n)for(d=_-n;d>m;d--)f=d+n-1,h=d+r-1,f in A?A[h]=A[f]:delete A[h];for(d=0;d<r;d++)A[d+m]=arguments[d+2];return A.length=_-n+r,u}})},a87b:function(t,e,r){},c6a8:function(t,e,r){"use strict";var n=r("6190"),i=r.n(n);i.a},caad:function(t,e,r){"use strict";var n=r("23e7"),i=r("4d64").includes,a=r("44d2"),c=r("ae40"),s=c("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:!s},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),a("includes")}}]);
//# sourceMappingURL=chunk-6bfb47b3.46a0822b.js.map