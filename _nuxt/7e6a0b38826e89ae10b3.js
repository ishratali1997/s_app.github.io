(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{364:function(t,n,e){"use strict";var o={props:["name","welcome"]},l=e(29),component=Object(l.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"row p-4"},[e("div",{staticClass:"col-lg-9 col-sm-6 col-xs-6 float-left"},[e("p",{staticStyle:{"font-size":"31px"}},[t._v("\n      "+t._s(t.welcome)),e("b",[t._v(" "+t._s(t.name))])])]),t._v(" "),t._m(0)])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"col-lg-3  col-sm-6 col-xs-6 float-right"},[n("div",{staticClass:"dropdown text-lg-right"},[n("button",{staticClass:"btn btn-danger dropdown-toggle",attrs:{type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[this._v("\n        Abel Estanisao Grade-1 "),n("i",{staticClass:"fa fa-angle-down"})]),this._v(" "),n("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuButton"}},[n("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[this._v("Abel Estanisao Grade-5 ")])])])])}],!1,null,null,null);n.a=component.exports},386:function(t,n,e){var content=e(412);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(33).default)("0059b52a",content,!0,{sourceMap:!0})},411:function(t,n,e){"use strict";var o=e(386);e.n(o).a},412:function(t,n,e){(n=e(32)(!0)).push([t.i,".card[data-v-09e29266]{border:none}.container[data-v-09e29266]{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.title[data-v-09e29266]{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle[data-v-09e29266]{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links[data-v-09e29266]{padding-top:15px}.nav-icon[data-v-09e29266]{font-size:33px;margin-top:7px;margin-left:7px}","",{version:3,sources:["C:/Users/ACER/Desktop/school_web/pages/index.vue"],names:[],mappings:"AAiIA,uBACE,WACF,CACA,4BACE,aAAc,CACd,gBAAiB,CACjB,YAAa,CACb,sBAAuB,CACvB,kBAAmB,CACnB,iBACF,CAEA,wBACE,sHACyD,CACzD,aAAc,CACd,eAAgB,CAChB,eAAgB,CAChB,aAAc,CACd,kBACF,CAEA,2BACE,eAAgB,CAChB,cAAe,CACf,aAAc,CACd,gBAAiB,CACjB,mBACF,CAEA,wBACE,gBACF,CACA,2BACE,cAAe,CACf,cAAe,CACf,eACF",file:"index.vue",sourcesContent:['\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.card {\n  border: none;\n}\n.container {\n  margin: 0 auto;\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n\n.title {\n  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,\n    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;\n  display: block;\n  font-weight: 300;\n  font-size: 100px;\n  color: #35495e;\n  letter-spacing: 1px;\n}\n\n.subtitle {\n  font-weight: 300;\n  font-size: 42px;\n  color: #526488;\n  word-spacing: 5px;\n  padding-bottom: 15px;\n}\n\n.links {\n  padding-top: 15px;\n}\n.nav-icon {\n  font-size: 33px;\n  margin-top: 7px;\n  margin-left: 7px;\n}\n']}]),t.exports=n},418:function(t,n,e){"use strict";e.r(n);var o=e(364),l={data:function(){return{isActive:"",subjectData:[{id:"1",time:"08:00 AM",name:"The Solar System",detail:"Read an extra",score:"Score 20",quiz:"Short Quiz"},{id:"2",time:"10:00 PM",name:"The City School",detail:"Read more about The City School..",score:"Score 20",quiz:"Short Quiz"},{id:"3",time:"11:00 PM",name:"Allied School",detail:"Read more about The City School..",score:"Score 10",quiz:"Short Quiz"},{id:"4",time:"11:00 PM",name:"Allied School",detail:"Read more about The City School..",score:"Score 10",quiz:"Short Quiz"}]}},props:["name","time","detail"],created:function(){this.isActive=this.subjectData[0].id,$nuxt.$emit("my-custom-event",1)},methods:{onClick:function(t){this.isActive=t,$nuxt.$emit("my-custom-event",t)}}},c=e(29),r=Object(c.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",t._l(t.subjectData,(function(data,n){return e("div",{key:n},[e("div",{staticClass:"row main-row mb-2 border border-danger",class:t.isActive==data.id?"main_row_active":"",staticStyle:{"border-radius":"6px",cursor:"pointer","font-size":"12px","margin-top":"0px !important","padding-top":"0px !important"},on:{click:function(n){return t.onClick(data.id)}}},[e("div",{staticClass:"col-lg-2 col-sm-2 col-xs-2 bg-danger text-center m-0 p-0 pt-4 pb-4 rounded text-bold"},[t._v("\n        "+t._s(data.time)+"\n      ")]),t._v(" "),e("div",{staticClass:"col-lg-6 col-sm-6 col-xs-6 m-auto"},[e("p",[t._v(t._s(data.name))]),t._v(" "),e("p",{staticClass:"text-muted"},[t._v(t._s(data.detail))])]),t._v(" "),e("div",{staticClass:"col-lg-3 col-sm-3 col-xs-3 m-auto"},[e("p",{staticClass:"text-right text-danger"},[e("b",[t._v(t._s(data.score))])]),t._v(" "),e("p",{staticClass:"text-right text-muted mt-0 pt-0"},[t._v(t._s(data.quiz))])]),t._v(" "),t._m(0,!0)])])})),0)}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"col-lg-1 col-sm-1 m-auto"},[n("span",{staticClass:"fas fa-ellipsis-v text-muted"})])}],!1,null,null,null).exports,d={data:function(){return{bgColor:"#dc3545",beginZero:!1,borderColor:"#dc3545",data:{day:[1,3,5,3,1],week:[12,14,16,18,11,13,15]},dataLabel:"",labels:{day:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],week:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},radio:"day"}}},v=Object(c.a)(d,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"}),t._v(" "),e("div",{staticClass:"card-img-bottom"},[e("chartjs-line",{attrs:{backgroundcolor:t.bgColor,beginzero:t.beginZero,bind:!0,bordercolor:t.borderColor,data:t.data[t.radio],datalabel:t.dataLabel,labels:t.labels[t.radio]}})],1)])}),[],!1,null,null,null).exports,m={components:{GradeComponent:o.a,Latest:r,ChartLine:v}},C=(e(411),Object(c.a)(m,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("GradeComponent",{attrs:{name:"Ishrat Ali",welcome:"Good Morning"}}),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"row pr-4 pl-4 pt-3"},[e("div",{staticClass:"col-lg-6 col-sm-12"},[t._m(1),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"card pr-2 pl-2 minimum-height"},[e("div",{staticClass:"card-body"},[e("p",{staticClass:"text-muted mb-0 pb-1"},[t._v("Tue, 19 Aug 2019")]),t._v(" "),e("div",{staticClass:"row mt-0 rounded",staticStyle:{"font-size":"12px"}}),t._v(" "),e("hr"),t._v(" "),e("Latest")],1)])])])]),t._v(" "),e("div",{staticClass:"col-lg-6 col-sm-12"},[e("h4",[t._v("Performance Matrix")]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12 col-sm-12"},[e("div",{staticClass:"card pr-3 minimum-height"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"chart"},[e("ChartLine")],1)])])])])])])],1)}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"row pt-1 pl-4 pr-4"},[e("div",{staticClass:"col-lg-3 col-sm-12"},[e("div",{staticClass:"card mr-1",staticStyle:{"margin-left":"-10px !important","margin-right":"-10px !important"}},[e("i",{staticClass:"nav-icon far fa-circle text-danger"}),t._v(" "),e("div",{staticClass:"card-body"},[e("h1",{staticClass:"ml-0 text-danger"},[t._v("12")]),t._v(" "),e("p",[t._v("Total Todos")])])])]),t._v(" "),e("div",{staticClass:"col-lg-3 col-sm-12"},[e("div",{staticClass:"card",staticStyle:{"margin-left":"-10px !important","margin-right":"-10px !important"}},[e("i",{staticClass:"nav-icon far fa-circle text-danger"}),t._v(" "),e("div",{staticClass:"card-body"},[e("h1",{staticClass:"ml-0 text-danger"},[t._v("145")]),t._v(" "),e("p",[t._v("Average Score")])])])]),t._v(" "),e("div",{staticClass:"col-lg-3 col-sm-12"},[e("div",{staticClass:"card pr-0",staticStyle:{"margin-left":"-10px !important","margin-right":"-10px !important"}},[e("i",{staticClass:"nav-icon far fa-circle text-danger"}),t._v(" "),e("div",{staticClass:"card-body"},[e("h1",{staticClass:"text-danger"},[t._v("85%")]),t._v(" "),e("p",[t._v("Score Percentage")])])])]),t._v(" "),e("div",{staticClass:"col-lg-3 col-sm-12"},[e("div",{staticClass:"card pr-3",staticStyle:{"margin-left":"-10px !important","margin-right":"-10px !important"}},[e("i",{staticClass:"nav-icon far fa-circle text-danger"}),t._v(" "),e("div",{staticClass:"card-body"},[e("h1",{staticClass:"ml-0 text-danger"},[t._v("12")]),t._v(" "),e("p",[t._v("Achievements")])])])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-10 col-md-10 col-sm-6 col-xs-6 float-left"},[n("h4",{staticClass:"mb-sm-0"},[this._v("Latest")])]),this._v(" "),n("div",{staticClass:"col-lg-2 col-md-2 col-sm-6 col-xs-6 float-right mt-2"},[n("a",{staticClass:"text-danger text-right float-right"},[this._v("See All")])])])}],!1,null,"09e29266",null));n.default=C.exports}}]);