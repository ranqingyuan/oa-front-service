(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-476a7d90","chunk-836ac184","chunk-2f6039ec","chunk-2d0bdf09","chunk-2d0bdf09","chunk-2d20fed6","chunk-2d20fed6","chunk-2d20fed6","chunk-2d20fed6"],{1895:function(e,t,r){},"2dab":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-date-picker",{attrs:{disabled:e.disabled||e.readOnly,placeholder:e.placeholder,value:e.momVal,showTime:e.showTime,format:e.dateFormat,getCalendarContainer:e.getCalendarContainer},on:{change:e.handleDateChange}})},n=[],o=r("c1df"),i=r.n(o),s={name:"JDate",props:{placeholder:{type:String,default:"",required:!1},value:{type:String,required:!1},dateFormat:{type:String,default:"YYYY-MM-DD",required:!1},triggerChange:{type:Boolean,required:!1,default:!1},readOnly:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1},showTime:{type:Boolean,required:!1,default:!1},getCalendarContainer:{type:Function,default:function(){return document.body}}},data:function(){var e=this.value;return{decorator:"",momVal:e?i()(e,this.dateFormat):null}},watch:{value:function(e){this.momVal=e?i()(e,this.dateFormat):null}},methods:{moment:i.a,handleDateChange:function(e,t){this.$emit("change",t)}},model:{prop:"value",event:"change"}},l=s,c=r("2877"),d=Object(c["a"])(l,a,n,!1,null,null,null);t["default"]=d.exports},8428:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-card",{attrs:{bordered:!1}},[r("div",{staticClass:"table-page-search-wrapper"},[r("a-form",{attrs:{layout:"inline"}},[r("a-row",{attrs:{gutter:24}},[r("a-col",{attrs:{md:6,sm:24}},[r("a-form-item",{attrs:{label:"订单号"}},[r("a-input",{attrs:{placeholder:"请输入订单号"},model:{value:e.queryParam.orderCode,callback:function(t){e.$set(e.queryParam,"orderCode",t)},expression:"queryParam.orderCode"}})],1)],1),r("a-col",{attrs:{md:6,sm:24}},[r("a-form-item",{attrs:{label:"订单类型"}},[r("a-select",{attrs:{placeholder:"请输入订单类型"},model:{value:e.queryParam.ctype,callback:function(t){e.$set(e.queryParam,"ctype",t)},expression:"queryParam.ctype"}},[r("a-select-option",{attrs:{value:"1"}},[e._v("国内订单")]),r("a-select-option",{attrs:{value:"2"}},[e._v("国际订单")])],1)],1)],1),r("a-col",{attrs:{md:6,sm:24}},[r("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[r("a-button",{attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),r("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")])],1)])],1)],1)],1),r("div",{staticClass:"table-operator"},[r("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新增")]),e.selectedRowKeys.length>0?r("a-dropdown",[r("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[r("a-menu-item",{key:"1",on:{click:e.batchDel}},[r("a-icon",{attrs:{type:"delete"}}),e._v("\n          删除\n        ")],1)],1),r("a-button",{staticStyle:{"margin-left":"8px"}},[e._v(" 批量操作\n        "),r("a-icon",{attrs:{type:"down"}})],1)],1):e._e()],1),r("div",[r("div",{staticClass:"ant-alert ant-alert-info",staticStyle:{"margin-bottom":"16px"}},[r("i",{staticClass:"anticon anticon-info-circle ant-alert-icon"}),e._v(" 已选择 "),r("a",{staticStyle:{"font-weight":"600"}},[e._v(e._s(e.selectedRowKeys.length))]),e._v("项\n      "),r("a",{staticStyle:{"margin-left":"24px"},on:{click:e.onClearSelected}},[e._v("清空")])]),r("a-table",{ref:"table",attrs:{bordered:"",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:!1,expandedRowKeys:e.expandedRowKeys,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},on:{change:e.handleTableChange,expand:e.handleExpand},scopedSlots:e._u([{key:"action",fn:function(t,a){return r("span",{},[r("a",{on:{click:function(t){return e.handleEdit(a)}}},[e._v("编辑")]),r("a-divider",{attrs:{type:"vertical"}}),r("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete(a.id)}}},[r("a",[e._v("删除")])])],1)}},{key:"expandedRowRender",fn:function(t){return r("a-table",{attrs:{columns:e.innerColumns,dataSource:e.innerData,size:"middle",bordered:"",rowKey:"id",pagination:!1,loading:e.loading}})}}])})],1),r("jeecgOrderDMain-modal",{ref:"modalForm",on:{ok:e.modalFormOk}})],1)},n=[],o=r("0fea"),i=r("dd9d"),s=r("b65a"),l={name:"TableDemo",mixins:[s["a"]],components:{JeecgOrderDMainModal:i["default"]},data:function(){return{innerColumns:[{title:"客户名",align:"center",width:100,dataIndex:"name",key:"name"},{title:"性别",align:"center",dataIndex:"sex",customRender:function(e){return 1==e?"男":2==e?"女":e}},{title:"身份证号码",align:"center",dataIndex:"idcard"},{title:"电话",dataIndex:"telphone",align:"center"}],innerData:[],expandedRowKeys:[],id:" ",description:"列表展开子表Demo",columns:[{title:"#",dataIndex:"",key:"rowIndex",width:60,align:"center",customRender:function(e,t,r){return parseInt(r)+1}},{title:"订单号",align:"center",dataIndex:"orderCode"},{title:"订单类型",align:"center",dataIndex:"ctype",customRender:function(e){var t="";return"1"===e?t="国内订单":"2"===e&&(t="国际订单"),t}},{title:"订单日期",align:"center",dataIndex:"orderDate"},{title:"订单金额",align:"center",dataIndex:"orderMoney"},{title:"订单备注",align:"center",dataIndex:"content"},{title:"操作",dataIndex:"action",align:"center",scopedSlots:{customRender:"action"}}],type:"radio",url:{list:"/test/order/orderList",delete:"/test/order/delete",deleteBatch:"/test/order/deleteBatch",customerListByMainId:"/test/order/listOrderCustomerByMainId"}}},computed:{currentId:function(){return this.id}},methods:{handleExpand:function(e,t){var r=this;this.expandedRowKeys=[],this.innerData=[],!0===e&&(this.loading=!0,this.expandedRowKeys.push(t.id),Object(o["getAction"])(this.url.customerListByMainId,{mainId:t.id}).then((function(e){e.success&&(r.loading=!1,r.innerData=e.result.records)})))}}},c=l,d=(r("b8f4"),r("2877")),u=Object(d["a"])(c,a,n,!1,null,"3387e46e",null);t["default"]=u.exports},"88bc":function(e,t,r){(function(t){var r=1/0,a=9007199254740991,n="[object Arguments]",o="[object Function]",i="[object GeneratorFunction]",s="[object Symbol]",l="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,d=l||c||Function("return this")();function u(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function f(e,t){var r=-1,a=e?e.length:0,n=Array(a);while(++r<a)n[r]=t(e[r],r,e);return n}function h(e,t){var r=-1,a=t.length,n=e.length;while(++r<a)e[n+r]=t[r];return e}var m=Object.prototype,p=m.hasOwnProperty,g=m.toString,y=d.Symbol,b=m.propertyIsEnumerable,v=y?y.isConcatSpreadable:void 0,w=Math.max;function O(e,t,r,a,n){var o=-1,i=e.length;r||(r=D),n||(n=[]);while(++o<i){var s=e[o];t>0&&r(s)?t>1?O(s,t-1,r,a,n):h(n,s):a||(n[n.length]=s)}return n}function C(e,t){return e=Object(e),x(e,t,(function(t,r){return r in e}))}function x(e,t,r){var a=-1,n=t.length,o={};while(++a<n){var i=t[a],s=e[i];r(s,i)&&(o[i]=s)}return o}function j(e,t){return t=w(void 0===t?e.length-1:t,0),function(){var r=arguments,a=-1,n=w(r.length-t,0),o=Array(n);while(++a<n)o[a]=r[t+a];a=-1;var i=Array(t+1);while(++a<t)i[a]=r[a];return i[t]=o,u(e,this,i)}}function D(e){return M(e)||k(e)||!!(v&&e&&e[v])}function S(e){if("string"==typeof e||L(e))return e;var t=e+"";return"0"==t&&1/e==-r?"-0":t}function k(e){return $(e)&&p.call(e,"callee")&&(!b.call(e,"callee")||g.call(e)==n)}var M=Array.isArray;function R(e){return null!=e&&P(e.length)&&!F(e)}function $(e){return _(e)&&R(e)}function F(e){var t=I(e)?g.call(e):"";return t==o||t==i}function P(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=a}function I(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function _(e){return!!e&&"object"==typeof e}function L(e){return"symbol"==typeof e||_(e)&&g.call(e)==s}var K=j((function(e,t){return null==e?{}:C(e,f(O(t,1),S))}));e.exports=K}).call(this,r("24aa"))},b046:function(e,t,r){"use strict";var a=r("dac8"),n=r.n(a);n.a},b65a:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));r("8e6e"),r("7f7f");var a=r("bd86"),n=(r("456d"),r("ac6a"),r("ca00")),o=r("0fea"),i=r("8bbf"),s=r.n(i),l=r("9fb0");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){Object(a["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u={data:function(){return{tokenHeader:{"X-Access-Token":s.a.ls.get(l["a"])},queryParam:{},dataSource:[],ipagination:{current:1,pageSize:10,pageSizeOptions:["10","20","30"],showTotal:function(e,t){return t[0]+"-"+t[1]+" 共"+e+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},isorter:{column:"createTime",order:"desc"},filters:{},loading:!1,selectedRowKeys:[],selectionRows:[],toggleSearchStatus:!1,superQueryFlag:!1,superQueryParams:""}},created:function(){this.disableMixinCreated||(console.log(" -- mixin created -- "),this.loadData(),this.initDictConfig())},methods:{loadData:function(e){var t=this;if(this.url.list){1===e&&(this.ipagination.current=1);var r=this.getQueryParams();this.loading=!0,Object(o["getAction"])(this.url.list,r).then((function(e){e.success&&(t.dataSource=e.result.records,t.ipagination.total=e.result.total),510===e.code&&t.$message.warning(e.message),t.loading=!1}))}else this.$message.error("请设置url.list属性!")},initDictConfig:function(){console.log("--这是一个假的方法!")},handleSuperQuery:function(e){e?(this.superQueryFlag=!0,this.superQueryParams=JSON.stringify(e)):(this.superQueryParams="",this.superQueryFlag=!1),this.loadData()},getQueryParams:function(){var e={};this.superQueryParams&&(e["superQueryParams"]=encodeURI(this.superQueryParams));var t=Object.assign(e,this.queryParam,this.isorter,this.filters);return t.field=this.getQueryField(),t.pageNo=this.ipagination.current,t.pageSize=this.ipagination.pageSize,Object(n["h"])(t)},getQueryField:function(){var e="id,";return this.columns.forEach((function(t){e+=","+t.dataIndex})),e},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectionRows=t},onClearSelected:function(){this.selectedRowKeys=[],this.selectionRows=[]},searchQuery:function(){this.loadData(1)},superQuery:function(){this.$refs.superQueryModal.show()},searchReset:function(){this.queryParam={},this.loadData(1)},batchDel:function(){if(this.url.deleteBatch)if(this.selectedRowKeys.length<=0)this.$message.warning("请选择一条记录！");else{for(var e="",t=0;t<this.selectedRowKeys.length;t++)e+=this.selectedRowKeys[t]+",";var r=this;this.$confirm({title:"确认删除",content:"是否删除选中数据?",onOk:function(){r.loading=!0,Object(o["deleteAction"])(r.url.deleteBatch,{ids:e}).then((function(e){e.success?(r.$message.success(e.message),r.loadData(),r.onClearSelected()):r.$message.warning(e.message)})).finally((function(){r.loading=!1}))}})}else this.$message.error("请设置url.deleteBatch属性!")},handleDelete:function(e){if(this.url.delete){var t=this;Object(o["deleteAction"])(t.url.delete,{id:e}).then((function(e){e.success?(t.$message.success(e.message),t.loadData()):t.$message.warning(e.message)}))}else this.$message.error("请设置url.delete属性!")},handleEdit:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="编辑",this.$refs.modalForm.disableSubmit=!1},handleAdd:function(){this.$refs.modalForm.add(),this.$refs.modalForm.title="新增",this.$refs.modalForm.disableSubmit=!1},handleTableChange:function(e,t,r){Object.keys(r).length>0&&(this.isorter.column=r.field,this.isorter.order="ascend"==r.order?"asc":"desc"),this.ipagination=e,this.loadData()},handleToggleSearch:function(){this.toggleSearchStatus=!this.toggleSearchStatus},modalFormOk:function(){this.loadData()},handleDetail:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="详情",this.$refs.modalForm.disableSubmit=!0},handleExportXls2:function(){var e=encodeURI(JSON.stringify(this.getQueryParams())),t="".concat(window._CONFIG["domianURL"],"/").concat(this.url.exportXlsUrl,"?paramsStr=").concat(e);window.location.href=t},handleExportXls:function(e){var t=this;e&&"string"==typeof e||(e="导出文件");var r=d({},this.queryParam);this.selectedRowKeys&&this.selectedRowKeys.length>0&&(r["selections"]=this.selectedRowKeys.join(",")),console.log("导出参数",r),Object(o["downFile"])(this.url.exportXlsUrl,r).then((function(r){if(r)if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(new Blob([r],{type:"application/vnd.ms-excel"}),e+".xls");else{var a=window.URL.createObjectURL(new Blob([r],{type:"application/vnd.ms-excel"})),n=document.createElement("a");n.style.display="none",n.href=a,n.setAttribute("download",e+".xls"),document.body.appendChild(n),n.click(),document.body.removeChild(n),window.URL.revokeObjectURL(a)}else t.$message.warning("文件下载失败")}))},handleImportExcel:function(e){var t=this.$createElement;if("uploading"!==e.file.status&&console.log(e.file,e.fileList),"done"===e.file.status)if(e.file.response.success){if(201===e.file.response.code){var r=e.file.response,a=r.message,n=r.result,o=n.msg,i=n.fileUrl,s=n.fileName,l=window._CONFIG["domianURL"]+i;this.$warning({title:a,content:t("div",[t("span",[o]),t("br"),t("span",["具体详情请 ",t("a",{attrs:{href:l,target:"_blank",download:s}},["点击下载"])," "])])})}else this.$message.success(e.file.response.message||"".concat(e.file.name," 文件上传成功"));this.loadData()}else this.$message.error("".concat(e.file.name," ").concat(e.file.response.message,"."));else"error"===e.file.status&&this.$message.error("文件上传失败: ".concat(e.file.msg," "))},getImgView:function(e){return e&&e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),window._CONFIG["staticDomainURL"]+"/"+e},uploadFile:function(e){e?(e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),window.open(window._CONFIG["staticDomainURL"]+"/"+e)):this.$message.warning("未知的文件")}}}},b8f4:function(e,t,r){"use strict";var a=r("1895"),n=r.n(a);n.a},dac8:function(e,t,r){},dd9d:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-modal",{attrs:{title:e.title,width:1e3,visible:e.visible,confirmLoading:e.confirmLoading},on:{ok:e.handleOk,cancel:e.handleCancel}},[r("a-spin",{attrs:{spinning:e.confirmLoading}},[r("a-form",{attrs:{form:e.form}},[r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单号",hasFeedback:""}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["orderCode",{rules:[{required:!0,message:"请输入订单号!"}]}],expression:"['orderCode', {rules: [{ required: true, message: '请输入订单号!' }]}]"}],attrs:{placeholder:"请输入订单号"}})],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单类型"}},[r("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["ctype",{}],expression:"['ctype',{}]"}],attrs:{placeholder:"请输入订单类型"}},[r("a-select-option",{attrs:{value:"1"}},[e._v("国内订单")]),r("a-select-option",{attrs:{value:"2"}},[e._v("国际订单")])],1)],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单日期"}},[r("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["orderDate",{}],expression:"[ 'orderDate',{}]"}],attrs:{showTime:"",format:"YYYY-MM-DD HH:mm:ss"}})],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单金额"}},[r("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["orderMoney",{}],expression:"[ 'orderMoney', {}]"}],staticStyle:{width:"200px"}})],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单备注"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["content",{}],expression:"['content', {}]"}],attrs:{placeholder:"请输入订单备注"}})],1)],1)],1)],1)},n=[],o=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),i=r("0fea"),s=r("2dab"),l=r("88bc"),c=r.n(l),d=r("c1df"),u=r.n(d);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m={name:"JeecgOrderDMainModal",components:{JDate:s["default"]},data:function(){return{title:"操作",visible:!1,orderMainModel:{jeecgOrderCustomerList:[{}],jeecgOrderTicketList:[{}]},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,form:this.$form.createForm(this),validatorRules:{},url:{add:"/test/order/add",edit:"/test/order/edit",orderCustomerList:"/test/order/listOrderCustomerByMainId",orderTicketList:"/test/order/listOrderTicketByMainId"}}},methods:{add:function(){this.edit({})},edit:function(e){var t=this;this.form.resetFields(),this.orderMainModel=Object.assign({},e),console.log(this.orderMainModel.id),this.visible=!0,this.$nextTick((function(){t.form.setFieldsValue(c()(t.orderMainModel,"orderCode","ctype","orderMoney","content")),t.form.setFieldsValue({orderDate:t.orderMainModel.orderDate?u()(t.orderMainModel.orderDate):null})})),console.log(this.orderMainModel)},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var e=this,t=this;this.form.validateFields((function(r,a){if(!r){t.confirmLoading=!0;var n="",o="";e.orderMainModel.id?(n+=e.url.edit,o="put"):(n+=e.url.add,o="post");var s=Object.assign(e.orderMainModel,a);s.orderDate=s.orderDate?s.orderDate.format("YYYY-MM-DD HH:mm:ss"):null;var l=h({},s);console.log(l),Object(i["httpAction"])(n,l,o).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}}))},handleCancel:function(){this.close()}}},p=m,g=(r("b046"),r("2877")),y=Object(g["a"])(p,a,n,!1,null,"3947da84",null);t["default"]=y.exports}}]);