(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29e59c82"],{"05ed":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-card",{attrs:{loading:t.loading,"body-style":{padding:"20px 24px 8px"},bordered:!1}},[a("div",{staticClass:"chart-card-header"},[a("div",{staticClass:"meta"},[a("span",{staticClass:"chart-card-title"},[t._v(t._s(t.title))]),a("span",{staticClass:"chart-card-action"},[t._t("action")],2)]),a("div",{staticClass:"total"},[a("span",[t._v(t._s(t.total))])])]),a("div",{staticClass:"chart-card-content"},[a("div",{staticClass:"content-fix"},[t._t("default")],2)]),a("div",{staticClass:"chart-card-footer"},[a("div",{staticClass:"field"},[t._t("footer")],2)])])},i=[],s={name:"ChartCard",props:{title:{type:String,default:""},total:{type:String,default:""},loading:{type:Boolean,default:!1}}},r=s,o=(a("7227"),a("2877")),c=Object(o["a"])(r,n,i,!1,null,"bc1c776e",null);e["default"]=c.exports},"0923":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"rank"},[a("h4",{staticClass:"title"},[t._v(t._s(t.title))]),a("ul",{staticClass:"list",style:{height:t.height?t.height+"px":"auto",overflow:"auto"}},t._l(t.list,(function(e,n){return a("li",{key:n},[a("span",{class:n<3?"active":null},[t._v(t._s(n+1))]),a("span",[t._v(t._s(e.name))]),a("span",[t._v(t._s(e.total))])])})),0)])},i=[],s=(a("c5f6"),{name:"RankList",props:{title:{type:String,default:""},list:{type:Array,default:null},height:{type:Number,default:null}}}),r=s,o=(a("cd1e"),a("2877")),c=Object(o["a"])(r,n,i,!1,null,"83c80048",null);e["default"]=c.exports},"1d43":function(t,e,a){"use strict";a.r(e);for(var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"antv-chart-mini"},[a("div",{staticClass:"chart-wrapper",style:{height:46}},[a("v-chart",{attrs:{"force-fit":!0,height:t.height,data:t.data,scale:t.scale,padding:[36,0,18,0]}},[a("v-tooltip"),a("v-smooth-area",{attrs:{position:"x*y"}})],1)],1)])},i=[],s=a("5a0c"),r=a.n(s),o=[],c=(new Date).getTime(),l=0;l<10;l++)o.push({x:r()(new Date(c+864e5*l)).format("YYYY-MM-DD"),y:Math.round(10*Math.random())});var u={name:"MiniArea",props:{dataSource:{type:Array,default:function(){return[]}},x:{type:String,default:"x"},y:{type:String,default:"y"}},data:function(){return{data:[],height:100}},computed:{scale:function(){return[{dataKey:"x",title:this.x,alias:this.x},{dataKey:"y",title:this.y,alias:this.y}]}},created:function(){0===this.dataSource.length?this.data=o:this.data=this.dataSource}},d=u,p=(a("9815"),a("2877")),f=Object(p["a"])(d,n,i,!1,null,"1efcadbe",null);e["default"]=f.exports},"1f7c":function(t,e,a){},"2f3a":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-header-index-wide"},[a("a-row",{attrs:{gutter:24}},[a("a-col",{style:{marginBottom:"24px"},attrs:{sm:24,md:12,xl:6}},[a("chart-card",{attrs:{loading:t.loading,title:"总流程数",total:t.vwflowTotal}},[a("a-tooltip",{attrs:{slot:"action",title:"指标说明"},slot:"action"},[a("a-icon",{attrs:{type:"info-circle-o"}})],1),a("div",[a("trend",{staticStyle:{"margin-right":"16px"},attrs:{flag:t.vwflowMonthlyRatio>0?"up":"down"}},[a("span",{attrs:{slot:"term"},slot:"term"},[t._v("月同比")]),t._v("\n            "+t._s(t.vwflowMonthlyRatio)+"%\n          ")]),a("trend",{attrs:{flag:t.vwflowDailyRatio>0?"up":"down"}},[a("span",{attrs:{slot:"term"},slot:"term"},[t._v("日同比")]),t._v("\n            "+t._s(t.vwflowDailyRatio)+"%\n          ")])],1),a("template",{slot:"footer"},[a("trend",{staticStyle:{"margin-right":"16px"}},[a("span",{attrs:{slot:"term"},slot:"term"},[t._v("月流程数")]),t._v("\n            "+t._s(t.vwflowMonthTotal)+"\n          ")]),a("trend",{staticStyle:{"margin-left":"16px"}},[a("span",{attrs:{slot:"term"},slot:"term"},[t._v("日流程数")]),t._v("\n            "+t._s(t.vwflowDayTotal)+"\n          ")])],1)],2)],1),a("a-col",{style:{marginBottom:"24px"},attrs:{sm:24,md:12,xl:6}},[a("chart-card",{attrs:{loading:t.loading,title:"总用户数",total:t._f("NumberFormat")(t.vuserTotal)}},[a("a-tooltip",{attrs:{slot:"action",title:"指标说明"},slot:"action"},[a("a-icon",{attrs:{type:"info-circle-o"}})],1),a("div",[a("mini-bar",{attrs:{height:40}})],1),a("template",{slot:"footer"},[t._v("\n          月新增用户数\n          "),a("span",[t._v(t._s(t.vNewUserTotal))])])],2)],1),a("a-col",{style:{marginBottom:"24px"},attrs:{sm:24,md:12,xl:6}},[a("chart-card",{attrs:{loading:t.loading,title:"总访问量",total:t._f("NumberFormat")(t.vtotal)}},[a("a-tooltip",{attrs:{slot:"action",title:"指标说明"},slot:"action"},[a("a-icon",{attrs:{type:"info-circle-o"}})],1),a("div",[a("mini-area")],1),a("template",{slot:"footer"},[t._v("\n          日访问量\n          "),a("span",[t._v(t._s(t._f("NumberFormat")(t.ctotal)))])])],2)],1),a("a-col",{style:{marginBottom:"24px"},attrs:{sm:24,md:12,xl:6}},[a("chart-card",{attrs:{loading:t.loading,title:"总业务数",total:t._f("NumberFormat")(t.vBussinessTotal)}},[a("a-tooltip",{attrs:{slot:"action",title:"指标说明"},slot:"action"},[a("a-icon",{attrs:{type:"info-circle-o"}})],1),a("div",[a("mini-bar",{attrs:{height:40}})],1),a("template",{slot:"footer"},[t._v("\n          业务分布\n          "),a("span")])],2)],1)],1),a("a-card",{attrs:{loading:t.loading,bordered:!1,"body-style":{padding:"0"}}},[a("div",{staticClass:"salesCard"},[a("a-tabs",{attrs:{size:"large",defaultActiveKey:"1","tab-bar-style":{marginBottom:"24px",paddingLeft:"16px"}},on:{change:t.getData},model:{value:t.activeKey,callback:function(e){t.activeKey=e},expression:"activeKey"}},[a("div",{staticClass:"extra-wrapper",attrs:{slot:"tabBarExtraContent"},slot:"tabBarExtraContent"},[a("div",{staticClass:"extra-item"},[a("a-tag",{attrs:{color:"cyan"},on:{click:function(e){return t.reloadData()}}},[t._v(" 刷 新 ")])],1)]),a("a-tab-pane",{key:"1",attrs:{loading:"true",tab:"我的待办"}},[[a("div",{staticStyle:{top:"50px"}},[a("a-spin",{staticStyle:{top:"50px"},attrs:{spinning:t.spinning}},[a("div",{staticClass:"spin-content"})])],1),a("a-table",{staticStyle:{"padding-top":"-10px","margin-top":"-10px"},attrs:{columns:t.columns,dataSource:t.dataWaitList,pagination:!1},scopedSlots:t._u([{key:"type",fn:function(e,n){return a("a",{},[a("a-menu-item",[a("a",{attrs:{"data-info":JSON.stringify(n)},on:{click:function(e){return t.handleDetailWF(n)}}},[a("span",{domProps:{innerHTML:t._s(n.type)}})])])],1)}},{key:"topic",fn:function(e,n){return a("a",{},[a("a-menu-item",[a("a",{staticStyle:{color:"#303030"},attrs:{"data-info":JSON.stringify(n)},on:{click:function(e){return t.handleDetailWF(n)}}},[a("span",{staticStyle:{color:"#303030"},domProps:{innerHTML:t._s(n.topic)}})])])],1)}},{key:"name",fn:function(e,n){return a("span",{},[a("a-tag",{key:n.name,attrs:{color:n.name.length>5?"geekblue":"green"},on:{click:function(e){return t.handleDetailWF(n)}}},[t._v(t._s(n.name.toUpperCase()))])],1)}},{key:"username",fn:function(e){return a("span",{},t._l(e,(function(e){return a("a-tag",{key:e,attrs:{color:"admin"===e?"volcano":e.length>5?"geekblue":"green"}},[t._v(t._s(e))])})),1)}},{key:"proponents",fn:function(e,n){return a("span",{},[a("a-tag",{key:n.proponents,attrs:{color:"volcano"}},[t._v(t._s(n.proponents))])],1)}},{key:"create_time",fn:function(e,n){return a("span",{},[a("a-tag",{key:n.create_time,attrs:{color:"red"}},[t._v("\n                  "+t._s(n.create_time)+"\n                ")])],1)}}])})]],2),a("a-tab-pane",{key:"2",attrs:{loading:"true",tab:"我的已办"}},[[a("div",{staticStyle:{top:"50px"}},[a("a-spin",{staticStyle:{top:"50px"},attrs:{spinning:t.spinning}},[a("div",{staticClass:"spin-content"})])],1),a("a-table",{staticStyle:{"padding-top":"-10px","margin-top":"-10px"},attrs:{columns:t.columns,dataSource:t.dataDoneList,pagination:!1},scopedSlots:t._u([{key:"type",fn:function(e,n){return a("a",{},[a("a-menu-item",[a("a",{attrs:{"data-info":JSON.stringify(n)},on:{click:function(e){return t.handleDetailWF(n)}}},[a("span",{domProps:{innerHTML:t._s(n.type)}})])])],1)}},{key:"topic",fn:function(e,n){return a("a",{},[a("a-menu-item",[a("a",{staticStyle:{color:"#303030"},attrs:{"data-info":JSON.stringify(n)},on:{click:function(e){return t.handleDetailWF(n)}}},[a("span",{staticStyle:{color:"#303030"},domProps:{innerHTML:t._s(n.topic)}})])])],1)}},{key:"name",fn:function(e,n){return a("span",{},[a("a-tag",{key:n.name,attrs:{color:n.name.length>5?"geekblue":"green"},on:{click:function(e){return t.handleDetailWF(n)}}},[t._v(t._s(n.name))])],1)}},{key:"username",fn:function(e,n){return a("span",{},t._l(n.username,(function(e){return a("a-tag",{key:e,attrs:{color:"admin"===e?"volcano":e.length>5?"geekblue":"green"}},[t._v(t._s(e))])})),1)}},{key:"proponents",fn:function(e,n){return a("span",{},[a("a-tag",{key:n.proponents,attrs:{color:"volcano"}},[t._v(t._s(n.proponents))])],1)}},{key:"create_time",fn:function(e,n){return a("span",{},[a("a-tag",{key:n.create_time,attrs:{color:"blue"}},[t._v("\n                  "+t._s(n.create_time)+"\n                ")])],1)}}])})]],2),a("a-tab-pane",{key:"5",attrs:{loading:"true",tab:"行政公告"}},[[a("div",{staticStyle:{top:"50px"}},[a("a-spin",{staticStyle:{top:"50px"},attrs:{spinning:t.spinning}},[a("div",{staticClass:"spin-content"})])],1),a("a-table",{staticStyle:{"padding-top":"-10px","margin-top":"-10px"},attrs:{columns:t.announce_columns,dataSource:t.dataAnnounceList,pagination:!1},scopedSlots:t._u([{key:"announce_type",fn:function(e,n){return a("span",{},[a("a-tag",{key:n.announce_type,attrs:{color:"cyan"},on:{click:function(e){return t.handleAnnounceInfo(n,n.table_name)}}},[t._v(t._s(n.announce_type))])],1)}},{key:"ctitle",fn:function(e,n){return a("span",{},[a("a",{key:n.title,staticStyle:{color:"#303030"},on:{click:function(e){return t.handleAnnounceInfo(n,n.table_name)}}},[t._v(t._s(n.title))])])}},{key:"create_by",fn:function(e,n){return a("span",{},[a("a-tag",{key:n.create_by,attrs:{color:"geekblue"}},[t._v(t._s(n.create_by))])],1)}},{key:"create_time",fn:function(e,n){return a("span",{},[a("a-tag",{key:n.create_time,attrs:{color:"pink"}},[t._v(t._s(n.create_time))])],1)}}])})]],2),a("a-tab-pane",{key:"6",attrs:{loading:"true",tab:"红头文件"}},[[a("div",{staticStyle:{top:"50px"}},[a("a-spin",{staticStyle:{top:"50px"},attrs:{spinning:t.spinning}},[a("div",{staticClass:"spin-content"})])],1),a("a-table",{staticStyle:{"padding-top":"-10px","margin-top":"-10px"},attrs:{columns:t.announce_columns,dataSource:t.dataHeadList,pagination:!1},scopedSlots:t._u([{key:"announce_type",fn:function(e,n){return a("span",{},[a("a-tag",{key:n.announce_type,attrs:{color:"cyan"},on:{click:function(e){return t.handleAnnounceInfo(n,n.table_name)}}},[t._v(t._s(n.announce_type))])],1)}},{key:"ctitle",fn:function(e,n){return a("span",{},[a("a",{key:n.title,staticStyle:{color:"#303030"},on:{click:function(e){return t.handleAnnounceInfo(n,n.table_name)}}},[t._v(t._s(n.title))])])}},{key:"create_by",fn:function(e,n){return a("span",{},[a("a-tag",{key:n.create_by,attrs:{color:"geekblue"}},[t._v(t._s(n.create_by))])],1)}},{key:"create_time",fn:function(e,n){return a("span",{},[a("a-tag",{key:n.create_time,attrs:{color:"pink"}},[t._v(t._s(n.create_time))])],1)}}])})]],2),a("a-tab-pane",{key:"7",attrs:{loading:"true",tab:"新闻资讯"}},[[a("div",{staticStyle:{top:"50px"}},[a("a-spin",{staticStyle:{top:"50px"},attrs:{spinning:t.spinning}},[a("div",{staticClass:"spin-content"})])],1),a("a-table",{staticStyle:{"padding-top":"-10px","margin-top":"-10px"},attrs:{columns:t.announce_columns,dataSource:t.dataNewsList,pagination:!1},scopedSlots:t._u([{key:"announce_type",fn:function(e,n){return a("span",{},[a("a-tag",{key:n.announce_type,attrs:{color:"cyan"},on:{click:function(e){return t.handleAnnounceInfo(n,n.table_name)}}},[t._v(t._s(n.announce_type))])],1)}},{key:"ctitle",fn:function(e,n){return a("span",{},[a("a",{key:n.title,staticStyle:{color:"#303030"},on:{click:function(e){return t.handleAnnounceInfo(n,n.table_name)}}},[t._v(t._s(n.title))])])}},{key:"create_by",fn:function(e,n){return a("span",{},[a("a-tag",{key:n.create_by,attrs:{color:"geekblue"}},[t._v(t._s(n.create_by))])],1)}},{key:"create_time",fn:function(e,n){return a("span",{},[a("a-tag",{key:n.create_time,attrs:{color:"pink"}},[t._v(t._s(n.create_time))])],1)}}])})]],2),a("a-tab-pane",{key:"8",attrs:{loading:"true",tab:"奖罚通报"}},[[a("div",{staticStyle:{top:"50px"}},[a("a-spin",{staticStyle:{top:"50px"},attrs:{spinning:t.spinning}},[a("div",{staticClass:"spin-content"})])],1),a("a-table",{staticStyle:{"padding-top":"-10px","margin-top":"-10px"},attrs:{columns:t.announce_columns,dataSource:t.dataNoticeList,pagination:!1},scopedSlots:t._u([{key:"announce_type",fn:function(e,n){return a("span",{},[a("a-tag",{key:n.announce_type,attrs:{color:"cyan"},on:{click:function(e){return t.handleAnnounceInfo(n,n.table_name)}}},[t._v(t._s(n.announce_type))])],1)}},{key:"ctitle",fn:function(e,n){return a("span",{},[a("a",{key:n.title,staticStyle:{color:"#303030"},on:{click:function(e){return t.handleAnnounceInfo(n,n.table_name)}}},[t._v(t._s(n.title))])])}},{key:"create_by",fn:function(e,n){return a("span",{},[a("a-tag",{key:n.create_by,attrs:{color:"geekblue"}},[t._v(t._s(n.create_by))])],1)}},{key:"create_time",fn:function(e,n){return a("span",{},[a("a-tag",{key:n.create_time,attrs:{color:"pink"}},[t._v(t._s(n.create_time))])],1)}}])})]],2),a("a-tab-pane",{key:"9",attrs:{loading:"true",tab:"市场观察"}},[[a("div",{staticStyle:{top:"50px"}},[a("a-spin",{staticStyle:{top:"50px"},attrs:{spinning:t.spinning}},[a("div",{staticClass:"spin-content"})])],1),a("a-table",{staticStyle:{"padding-top":"-10px","margin-top":"-10px"},attrs:{columns:t.announce_columns,dataSource:t.dataViewsList,pagination:!1},scopedSlots:t._u([{key:"announce_type",fn:function(e,n){return a("span",{},[a("a-tag",{key:n.announce_type,attrs:{color:"cyan"},on:{click:function(e){return t.handleAnnounceInfo(n,n.table_name)}}},[t._v(t._s(n.announce_type))])],1)}},{key:"ctitle",fn:function(e,n){return a("span",{},[a("a",{key:n.title,staticStyle:{color:"#303030"},on:{click:function(e){return t.handleAnnounceInfo(n,n.table_name)}}},[t._v(t._s(n.title))])])}},{key:"create_by",fn:function(e,n){return a("span",{},[a("a-tag",{key:n.create_by,attrs:{color:"geekblue"}},[t._v(t._s(n.create_by))])],1)}},{key:"create_time",fn:function(e,n){return a("span",{},[a("a-tag",{key:n.create_time,attrs:{color:"blue"}},[t._v(t._s(n.create_time))])],1)}}])})]],2)],1)],1)]),a("a-row",[a("a-col",{attrs:{span:24}},[a("a-card",{style:{marginTop:"24px"},attrs:{loading:t.loading,bordered:!1,title:"近期访问统计"}},[a("div",{staticClass:"extra-wrapper",staticStyle:{position:"relative",float:"right",top:"-63px","margin-left":"5px",left:"6px"}},[a("div",{staticClass:"extra-item"},[a("a-tag",{attrs:{color:"blue"},on:{click:function(e){return t.reloadVisitData()}}},[t._v(" 刷 新 ")])],1)]),a("a-row",[a("a-col",{attrs:{span:6}},[a("head-info",{attrs:{title:"今日访问IP数",content:t.loginfo.todayIp}})],1),a("a-col",{attrs:{span:2}},[a("a-spin",{staticClass:"circle-cust"},[a("a-icon",{staticStyle:{"font-size":"24px"},attrs:{slot:"indicator",type:"environment"},slot:"indicator"})],1)],1),a("a-col",{attrs:{span:6}},[a("head-info",{attrs:{title:"今日访问次数",content:t.loginfo.todayVisitCount}})],1),a("a-col",{attrs:{span:2}},[a("a-spin",{staticClass:"circle-cust"},[a("a-icon",{staticStyle:{"font-size":"24px"},attrs:{slot:"indicator",type:"team"},slot:"indicator"})],1)],1),a("a-col",{attrs:{span:6}},[a("head-info",{attrs:{title:"访问总次数",content:t.loginfo.totalVisitCount}})],1),a("a-col",{attrs:{span:2}},[a("a-spin",{staticClass:"circle-cust"},[a("a-icon",{staticStyle:{"font-size":"24px"},attrs:{slot:"indicator",type:"rise"},slot:"indicator"})],1)],1)],1),a("line-chart-multid",{attrs:{fields:t.visitFields,dataSource:t.visitInfo}})],1),[a("div",[a("a-back-top")],1)]],2)],1)],1)},i=[],s=(a("456d"),a("28a5"),a("6b54"),a("ac4d"),a("8a81"),a("ac6a"),a("96cf"),a("3b8d")),r=a("05ed"),o=a("da05"),c=a("3896"),l=a("1d43"),u=a("942d"),d=a("bf13"),p=a("0923"),f=a("edd9"),y=a("4ec6"),h=a("81d1"),v=a("611e"),m=a("4ec3"),g=a("0fea"),_=a("5d2d"),b=a("ca00"),x=[],k=[],w=[{title:"办理事项",dataIndex:"type",key:"type",slots:{title:"type"},width:100,align:"center",scopedSlots:{customRender:"type"}},{title:"业务",width:100,align:"center",key:"name",dataIndex:"name",scopedSlots:{customRender:"name"}},{title:"主题",width:400,align:"left",key:"topic",dataIndex:"topic",scopedSlots:{customRender:"topic"}},{title:"操作人员",key:"username",width:150,align:"left",dataIndex:"username",scopedSlots:{customRender:"username"}},{title:"流程发起人",key:"proponents",width:150,align:"left",dataIndex:"proponents",scopedSlots:{customRender:"proponents"}},{title:"创建时间",width:100,align:"center",key:"create_time",dataIndex:"create_time",scopedSlots:{customRender:"create_time"}}],S=[{title:"类型",dataIndex:"announce_type",key:"announce_type",slots:{title:"announce_type"},width:100,align:"center",scopedSlots:{customRender:"announce_type"}},{title:"标题",dataIndex:"title",key:"title",slots:{title:"ctitle"},width:800,align:"left",scopedSlots:{customRender:"ctitle"}},{title:"时间",width:100,align:"center",key:"create_time",dataIndex:"create_time",scopedSlots:{customRender:"create_time"}}],L={name:"Analysis",components:{ATooltip:c["a"],ACol:o["b"],ChartCard:r["default"],MiniArea:l["default"],MiniBar:u["default"],MiniProgress:d["default"],RankList:p["default"],Bar:f["default"],Trend:v["a"],LineChartMultid:y["default"],HeadInfo:h["default"]},data:function(){var t=this.$createElement;return{loading:!0,vtotal:0,ctotal:0,center:null,rankList:x,barData:k,loginfo:{},visitFields:["ip","visit"],visitInfo:[],vuserTotal:"-",vNewUserTotal:"-",vwflowTotal:"-",vwflowMonthTotal:"-",vwflowDayTotal:"-",vwflowDailyRatio:"-",vwflowMonthlyRatio:"-",vBussinessTotal:"-",indicator:t("a-icon",{attrs:{type:"loading",spin:!0},style:"font-size: 24px"}),dataWaitList:[],dataDoneList:[],dataAnnounceList:[],dataNoticeList:[],dataHeadList:[],dataNewsList:[],dataViewsList:[],dataNotice:[],columns:w,announce_columns:S,activeKey:"1",loadingMore:!1,showLoadingMore:!0,spinning:!1}},created:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return setTimeout((function(){e.loading=!e.loading}),1e3),this.initLogInfo(),t.next=4,this.getData(1);case 4:setInterval((function(){g["queryToken"]()}),6e5);case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),mounted:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getData();case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{getData:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var a,n,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=_["e"]("cur_user"),n=a["username"],i=a["realname"],1!=this.activeKey&&1!=e){t.next=10;break}return t.next=6,g["queryProcessLogWait"](n,i);case 6:this.dataWaitList=t.sent,this.dataWaitList=this.dataWaitList.slice(0,10),t.next=56;break;case 10:if(2!=this.activeKey&&2!=e){t.next=17;break}return t.next=13,g["queryProcessLogDone"](n,i);case 13:this.dataDoneList=t.sent,this.dataDoneList=this.dataDoneList.slice(0,10),t.next=56;break;case 17:if(3!=this.activeKey&&3!=e){t.next=20;break}t.next=56;break;case 20:if(4!=this.activeKey&&4!=e){t.next=23;break}t.next=56;break;case 23:if(5!=this.activeKey&&5!=e){t.next=30;break}return t.next=26,g["queryAnnounceList"](0,10);case 26:this.dataAnnounceList=t.sent,this.dataAnnounceList=this.dataAnnounceList.slice(0,10),t.next=56;break;case 30:if(6!=this.activeKey&&6!=e){t.next=37;break}return t.next=33,g["queryHeadList"](0,10);case 33:this.dataHeadList=t.sent,this.dataHeadList=this.dataHeadList.slice(0,10),t.next=56;break;case 37:if(7!=this.activeKey&&7!=e){t.next=44;break}return t.next=40,g["queryNewsList"](0,10);case 40:this.dataNewsList=t.sent,this.dataNewsList=this.dataNewsList.slice(0,10),t.next=56;break;case 44:if(8!=this.activeKey&&8!=e){t.next=51;break}return t.next=47,g["queryNoticeList"](0,10);case 47:this.dataNoticeList=t.sent,this.dataNoticeList=this.dataNoticeList.slice(0,10),t.next=56;break;case 51:if(9!=this.activeKey&&9!=e){t.next=56;break}return t.next=54,g["queryViewsList"](0,10);case 54:this.dataViewsList=t.sent,this.dataViewsList=this.dataViewsList.slice(0,10);case 56:return this.transUsername(this.dataWaitList),this.transUsername(this.dataDoneList),t.prev=58,t.next=61,g["queryTableDataAll"]("v_visit_total");case 61:s=t.sent,s=s[0],this.ctotal=s["ctotal"],this.vtotal=s["vtotal"],t.next=70;break;case 67:t.prev=67,t.t0=t["catch"](58),console.log("error :"+t.t0);case 70:case"end":return t.stop()}}),t,this,[[58,67]])})));function e(e){return t.apply(this,arguments)}return e}(),transUsername:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var a,n,i,s,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=!0,n=!1,i=void 0,t.prev=3,s=e[Symbol.iterator]();case 5:if(a=(r=s.next()).done){t.next=23;break}return o=r.value,t.prev=7,t.next=10,g["patchEnameCname"](o["username"].toString());case 10:return o["username"]=t.sent,t.next=13,g["patchEnameCname"](o["proponents"]);case 13:o["proponents"]=t.sent,o["username"]=b["e"](o["username"]).split(","),t.next=20;break;case 17:t.prev=17,t.t0=t["catch"](7),console.log(t.t0);case 20:a=!0,t.next=5;break;case 23:t.next=29;break;case 25:t.prev=25,t.t1=t["catch"](3),n=!0,i=t.t1;case 29:t.prev=29,t.prev=30,a||null==s.return||s.return();case 32:if(t.prev=32,!n){t.next=35;break}throw i;case 35:return t.finish(32);case 36:return t.finish(29);case 37:case"end":return t.stop()}}),t,null,[[3,25,29,37],[7,17],[30,,32,36]])})));function e(e){return t.apply(this,arguments)}return e}(),reloadData:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.spinning=!0,e=_["e"]("cur_user"),a=e["username"],n=e["realname"],1!=this.activeKey){t.next=11;break}return t.next=7,g["queryProcessLogWait"](a,n);case 7:this.dataWaitList=t.sent,this.dataWaitList=this.dataWaitList.slice(0,10),t.next=59;break;case 11:if(2!=this.activeKey){t.next=18;break}return t.next=14,g["queryProcessLogDone"](a,n);case 14:this.dataDoneList=t.sent,this.dataDoneList=this.dataDoneList.slice(0,10),t.next=59;break;case 18:if(3!=this.activeKey){t.next=22;break}console.log(this.activeKey),t.next=59;break;case 22:if(4!=this.activeKey){t.next=26;break}console.log(this.activeKey),t.next=59;break;case 26:if(5!=this.activeKey){t.next=33;break}return t.next=29,g["queryAnnounceList"](0,10);case 29:this.dataAnnounceList=t.sent,this.dataAnnounceList=this.dataAnnounceList.slice(0,10),t.next=59;break;case 33:if(6!=this.activeKey){t.next=40;break}return t.next=36,g["queryHeadList"](0,10);case 36:this.dataHeadList=t.sent,this.dataHeadList=this.dataHeadList.slice(0,10),t.next=59;break;case 40:if(7!=this.activeKey){t.next=47;break}return t.next=43,g["queryNewsList"](0,10);case 43:this.dataNewsList=t.sent,this.dataNewsList=this.dataNewsList.slice(0,10),t.next=59;break;case 47:if(8!=this.activeKey){t.next=54;break}return t.next=50,g["queryNoticeList"](0,10);case 50:this.dataNoticeList=t.sent,this.dataNoticeList=this.dataNoticeList.slice(0,10),t.next=59;break;case 54:if(9!=this.activeKey){t.next=59;break}return t.next=57,g["queryViewsList"](0,10);case 57:this.dataViewsList=t.sent,this.dataViewsList=this.dataViewsList.slice(0,10);case 59:this.transUsername(this.dataWaitList),this.transUsername(this.dataDoneList),this.spinning=!1;case 62:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),reloadVisitData:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.initLogInfo();case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),handleDetailWF:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var a,n,i,s,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=JSON.parse(JSON.stringify(e)),n=_["e"]("cur_user"),i=a["tname"],s="知会"==a["type"]?"notify":"workflow",r="/workflow/view?table_name=".concat(i,"&id=").concat(a.id,"&processLogID=").concat(a.pid,"&user=").concat(n.username,"&type=").concat(s),this.$router.push(r);case 6:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),handleAnnounceInfo:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e,a){var n,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=JSON.parse(JSON.stringify(e)),i=_["e"]("cur_user"),s="/workflow/view?table_name=".concat(a,"&id=").concat(n.id,"&user=").concat(i.username,"&type=notify"),this.$router.push(s);case 4:case"end":return t.stop()}}),t,this)})));function e(e,a){return t.apply(this,arguments)}return e}(),initLogInfo:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return Object(m["t"])(null).then((function(t){t.success&&(Object.keys(t.result).forEach((function(e){t.result[e]=t.result[e]+""})),e.loginfo=t.result)})),Object(m["A"])().then((function(t){t.success&&(e.visitInfo=t.result)})),t.next=4,g["queryUserCount"]();case 4:return this.vuserTotal=t.sent,t.next=7,g["queryWflowCount"]();case 7:return this.vwflowTotal=t.sent,t.next=10,g["queryWflowMonthCount"]();case 10:return this.vwflowMonthTotal=t.sent,t.next=13,g["queryWflowDayCount"]();case 13:return this.vwflowDayTotal=t.sent,t.next=16,g["queryWflowDailyRatio"]();case 16:return this.vwflowDailyRatio=t.sent,t.next=19,g["queryWflowMonthlyRatio"]();case 19:return this.vwflowMonthlyRatio=t.sent,t.next=22,g["queryNewUserTotal"]();case 22:return this.vNewUserTotal=t.sent,t.next=25,g["queryBusinessTotal"]();case 25:this.vBussinessTotal=t.sent,console.log(this.vuserTotal);case 27:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},C=L,D=(a("d8fb"),a("2877")),j=Object(D["a"])(C,n,i,!1,null,"571a89fe",null);e["default"]=j.exports},"3c24":function(t,e,a){"use strict";var n=a("5b10"),i=a.n(n);i.a},"4daf":function(t,e,a){},"4ec6":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:{padding:"0 0 32px 32px"}},[a("h4",{style:{marginBottom:"20px"}},[t._v(t._s(t.title))]),a("v-chart",{attrs:{"force-fit":!0,height:t.height,data:t.data,scale:t.scale,onClick:t.handleClick}},[a("v-tooltip"),a("v-axis"),a("v-legend"),a("v-line",{attrs:{position:"type*y",color:"x"}}),a("v-point",{attrs:{position:"type*y",color:"x",size:4,"v-style":t.style,shape:"circle"}})],1)],1)},i=[],s=(a("ac4d"),a("8a81"),a("ac6a"),a("c5f6"),a("7104")),r=a("c917"),o={name:"LineChartMultid",mixins:[r["a"]],props:{title:{type:String,default:""},dataSource:{type:Array,default:function(){return[{type:"Jan",jeecg:7,jeebt:3.9},{type:"Feb",jeecg:6.9,jeebt:4.2},{type:"Mar",jeecg:9.5,jeebt:5.7},{type:"Apr",jeecg:14.5,jeebt:8.5},{type:"May",jeecg:18.4,jeebt:11.9},{type:"Jun",jeecg:21.5,jeebt:15.2},{type:"Jul",jeecg:25.2,jeebt:17},{type:"Aug",jeecg:26.5,jeebt:16.6},{type:"Sep",jeecg:23.3,jeebt:14.2},{type:"Oct",jeecg:18.3,jeebt:10.3},{type:"Nov",jeecg:13.9,jeebt:6.6},{type:"Dec",jeecg:9.6,jeebt:4.8}]}},fields:{type:Array,default:function(){return["jeecg","jeebt"]}},aliases:{type:Array,default:function(){return[]}},height:{type:Number,default:254}},data:function(){return{scale:[{dataKey:"x",min:0,max:1}],style:{stroke:"#fff",lineWidth:1}}},computed:{data:function(){var t=this,e=(new s["DataSet"].View).source(this.dataSource);e.transform({type:"fold",fields:this.fields,key:"x",value:"y"});var a=e.rows;return a.forEach((function(e){var a=!0,n=!1,i=void 0;try{for(var s,r=t.aliases[Symbol.iterator]();!(a=(s=r.next()).done);a=!0){var o=s.value;if(o.field===e.x){e.x=o.alias;break}}}catch(c){n=!0,i=c}finally{try{a||null==r.return||r.return()}finally{if(n)throw i}}})),a}}},c=o,l=a("2877"),u=Object(l["a"])(c,n,i,!1,null,"7ba9da5d",null);e["default"]=u.exports},"5b10":function(t,e,a){},7227:function(t,e,a){"use strict";var n=a("e4d8"),i=a.n(n);i.a},"79ef":function(t,e,a){},"81d1":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"head-info",class:t.center&&"center"},[a("span",[t._v(t._s(t.title))]),a("p",[t._v(t._s(t.content))]),t.bordered?a("em"):t._e()])},i=[],s={name:"HeadInfo",props:{title:{type:String,default:""},content:{type:String,default:""},bordered:{type:Boolean,default:!1},center:{type:Boolean,default:!0}}},r=s,o=(a("c002"),a("2877")),c=Object(o["a"])(r,n,i,!1,null,"35671dcd",null);e["default"]=c.exports},"942d":function(t,e,a){"use strict";a.r(e);for(var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:{width:null==t.width?"auto":t.width+"px"}},[a("v-chart",{attrs:{forceFit:null==t.width,height:t.height,data:t.data,padding:"0"}},[a("v-tooltip"),a("v-bar",{attrs:{position:"x*y"}})],1)],1)},i=[],s=(a("c5f6"),a("5a0c")),r=a.n(s),o=[],c=(new Date).getTime(),l=0;l<10;l++)o.push({x:r()(new Date(c+864e5*l)).format("YYYY-MM-DD"),y:Math.round(10*Math.random())});var u=["x*y",function(t,e){return{name:t,value:e}}],d=[{dataKey:"x",min:2},{dataKey:"y",title:"时间",min:1,max:30}],p={name:"MiniBar",props:{dataSource:{type:Array,default:function(){return[]}},width:{type:Number,default:null},height:{type:Number,default:200}},created:function(){0===this.dataSource.length?this.data=o:this.data=this.dataSource},data:function(){return{tooltip:u,data:[],scale:d}}},f=p,y=(a("a8f1"),a("2877")),h=Object(y["a"])(f,n,i,!1,null,"ebc8c03c",null);e["default"]=h.exports},9815:function(t,e,a){"use strict";var n=a("79ef"),i=a.n(n);i.a},"9b79":function(t,e,a){},a8f1:function(t,e,a){"use strict";var n=a("4daf"),i=a.n(n);i.a},bf13:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"chart-mini-progress"},[a("div",{staticClass:"target",style:{left:t.target+"%"}},[a("span",{style:{backgroundColor:t.color}}),a("span",{style:{backgroundColor:t.color}})]),a("div",{staticClass:"progress-wrapper"},[a("div",{staticClass:"progress",style:{backgroundColor:t.color,width:t.percentage+"%",height:t.height+"px"}})])])},i=[],s=(a("c5f6"),{name:"MiniProgress",props:{target:{type:Number,default:0},height:{type:Number,default:10},color:{type:String,default:"#13C2C2"},percentage:{type:Number,default:0}}}),r=s,o=(a("3c24"),a("2877")),c=Object(o["a"])(r,n,i,!1,null,"bc81620e",null);e["default"]=c.exports},c002:function(t,e,a){"use strict";var n=a("1f7c"),i=a.n(n);i.a},c917:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var n={methods:{handleClick:function(t,e){this.handleEvent("click",t,e)},handleEvent:function(t,e,a){this.$emit(t,e,a)}}}},cc9b:function(t,e,a){},cd1e:function(t,e,a){"use strict";var n=a("cc9b"),i=a.n(n);i.a},d8fb:function(t,e,a){"use strict";var n=a("9b79"),i=a.n(n);i.a},e4d8:function(t,e,a){},edd9:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:{padding:"0 0 32px 32px"}},[a("h4",{style:{marginBottom:"20px"}},[t._v(t._s(t.title))]),a("v-chart",{attrs:{forceFit:!0,height:t.height,data:t.dataSource,scale:t.scale,padding:t.padding}},[a("v-tooltip"),a("v-axis"),a("v-bar",{attrs:{position:"x*y"}})],1)],1)},i=[],s=(a("c5f6"),a("ca00")),r={name:"Bar",props:{dataSource:{type:Array,required:!0},yaxisText:{type:String,default:"y"},title:{type:String,default:""},height:{type:Number,default:254}},data:function(){return{padding:["auto","auto","40","50"]}},computed:{scale:function(){return[{dataKey:"y",alias:this.yaxisText}]}},mounted:function(){Object(s["s"])()}},o=r,c=a("2877"),l=Object(c["a"])(o,n,i,!1,null,null,null);e["default"]=l.exports}}]);