(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33b3ecba","chunk-2d20fed6","chunk-2d20fed6","chunk-2d20fed6","chunk-2d20fed6"],{"05ed2":function(e,t,a){},"3a3e":function(e,t,a){"use strict";var i=a("5e48"),s=a.n(i);s.a},"5e48":function(e,t,a){},b65a:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));a("8e6e"),a("7f7f");var i=a("bd86"),s=(a("456d"),a("ac6a"),a("ca00")),n=a("0fea"),r=a("8bbf"),o=a.n(r),l=a("9fb0");function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){Object(i["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var u={data:function(){return{tokenHeader:{"X-Access-Token":o.a.ls.get(l["a"])},queryParam:{},dataSource:[],ipagination:{current:1,pageSize:10,pageSizeOptions:["10","20","30"],showTotal:function(e,t){return t[0]+"-"+t[1]+" 共"+e+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},isorter:{column:"createTime",order:"desc"},filters:{},loading:!1,selectedRowKeys:[],selectionRows:[],toggleSearchStatus:!1,superQueryFlag:!1,superQueryParams:""}},created:function(){this.disableMixinCreated||(console.log(" -- mixin created -- "),this.loadData(),this.initDictConfig())},methods:{loadData:function(e){var t=this;if(this.url.list){1===e&&(this.ipagination.current=1);var a=this.getQueryParams();this.loading=!0,Object(n["getAction"])(this.url.list,a).then((function(e){e.success&&(t.dataSource=e.result.records,t.ipagination.total=e.result.total),510===e.code&&t.$message.warning(e.message),t.loading=!1}))}else this.$message.error("请设置url.list属性!")},initDictConfig:function(){console.log("--这是一个假的方法!")},handleSuperQuery:function(e){e?(this.superQueryFlag=!0,this.superQueryParams=JSON.stringify(e)):(this.superQueryParams="",this.superQueryFlag=!1),this.loadData()},getQueryParams:function(){var e={};this.superQueryParams&&(e["superQueryParams"]=encodeURI(this.superQueryParams));var t=Object.assign(e,this.queryParam,this.isorter,this.filters);return t.field=this.getQueryField(),t.pageNo=this.ipagination.current,t.pageSize=this.ipagination.pageSize,Object(s["h"])(t)},getQueryField:function(){var e="id,";return this.columns.forEach((function(t){e+=","+t.dataIndex})),e},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectionRows=t},onClearSelected:function(){this.selectedRowKeys=[],this.selectionRows=[]},searchQuery:function(){this.loadData(1)},superQuery:function(){this.$refs.superQueryModal.show()},searchReset:function(){this.queryParam={},this.loadData(1)},batchDel:function(){if(this.url.deleteBatch)if(this.selectedRowKeys.length<=0)this.$message.warning("请选择一条记录！");else{for(var e="",t=0;t<this.selectedRowKeys.length;t++)e+=this.selectedRowKeys[t]+",";var a=this;this.$confirm({title:"确认删除",content:"是否删除选中数据?",onOk:function(){a.loading=!0,Object(n["deleteAction"])(a.url.deleteBatch,{ids:e}).then((function(e){e.success?(a.$message.success(e.message),a.loadData(),a.onClearSelected()):a.$message.warning(e.message)})).finally((function(){a.loading=!1}))}})}else this.$message.error("请设置url.deleteBatch属性!")},handleDelete:function(e){if(this.url.delete){var t=this;Object(n["deleteAction"])(t.url.delete,{id:e}).then((function(e){e.success?(t.$message.success(e.message),t.loadData()):t.$message.warning(e.message)}))}else this.$message.error("请设置url.delete属性!")},handleEdit:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="编辑",this.$refs.modalForm.disableSubmit=!1},handleAdd:function(){this.$refs.modalForm.add(),this.$refs.modalForm.title="新增",this.$refs.modalForm.disableSubmit=!1},handleTableChange:function(e,t,a){Object.keys(a).length>0&&(this.isorter.column=a.field,this.isorter.order="ascend"==a.order?"asc":"desc"),this.ipagination=e,this.loadData()},handleToggleSearch:function(){this.toggleSearchStatus=!this.toggleSearchStatus},modalFormOk:function(){this.loadData()},handleDetail:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="详情",this.$refs.modalForm.disableSubmit=!0},handleExportXls2:function(){var e=encodeURI(JSON.stringify(this.getQueryParams())),t="".concat(window._CONFIG["domianURL"],"/").concat(this.url.exportXlsUrl,"?paramsStr=").concat(e);window.location.href=t},handleExportXls:function(e){var t=this;e&&"string"==typeof e||(e="导出文件");var a=d({},this.queryParam);this.selectedRowKeys&&this.selectedRowKeys.length>0&&(a["selections"]=this.selectedRowKeys.join(",")),console.log("导出参数",a),Object(n["downFile"])(this.url.exportXlsUrl,a).then((function(a){if(a)if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(new Blob([a],{type:"application/vnd.ms-excel"}),e+".xls");else{var i=window.URL.createObjectURL(new Blob([a],{type:"application/vnd.ms-excel"})),s=document.createElement("a");s.style.display="none",s.href=i,s.setAttribute("download",e+".xls"),document.body.appendChild(s),s.click(),document.body.removeChild(s),window.URL.revokeObjectURL(i)}else t.$message.warning("文件下载失败")}))},handleImportExcel:function(e){var t=this.$createElement;if("uploading"!==e.file.status&&console.log(e.file,e.fileList),"done"===e.file.status)if(e.file.response.success){if(201===e.file.response.code){var a=e.file.response,i=a.message,s=a.result,n=s.msg,r=s.fileUrl,o=s.fileName,l=window._CONFIG["domianURL"]+r;this.$warning({title:i,content:t("div",[t("span",[n]),t("br"),t("span",["具体详情请 ",t("a",{attrs:{href:l,target:"_blank",download:o}},["点击下载"])," "])])})}else this.$message.success(e.file.response.message||"".concat(e.file.name," 文件上传成功"));this.loadData()}else this.$message.error("".concat(e.file.name," ").concat(e.file.response.message,"."));else"error"===e.file.status&&this.$message.error("文件上传失败: ".concat(e.file.msg," "))},getImgView:function(e){return e&&e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),window._CONFIG["staticDomainURL"]+"/"+e},uploadFile:function(e){e?(e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),window.open(window._CONFIG["staticDomainURL"]+"/"+e)):this.$message.warning("未知的文件")}}}},cb6b:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{staticClass:"j-address-list-right-card-box",attrs:{loading:e.cardLoading,bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"}},[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:6,sm:12}},[a("a-form-item",{staticStyle:{"margin-left":"8px"},attrs:{label:"姓名"}},[a("a-input",{attrs:{placeholder:"请输入姓名查询"},model:{value:e.queryParam.realname,callback:function(t){e.$set(e.queryParam,"realname",t)},expression:"queryParam.realname"}})],1)],1),a("a-col",{attrs:{md:6,sm:12}},[a("a-form-item",{staticStyle:{"margin-left":"8px"},attrs:{label:"工号"}},[a("a-input",{attrs:{placeholder:"请输入工号查询"},model:{value:e.queryParam.workNo,callback:function(t){e.$set(e.queryParam,"workNo",t)},expression:"queryParam.workNo"}})],1)],1),a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-col",{attrs:{md:6,sm:24}},[a("a-button",{staticStyle:{"margin-left":"18px"},attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")])],1)],1)],1)],1)],1),a("a-table",{ref:"table",attrs:{size:"middle",bordered:"",rowKey:"userId",pagination:e.ipagination,columns:e.columns,dataSource:e.dataSource,loading:e.loading},on:{change:e.handleTableChange}})],1)},s=[],n=(a("8e6e"),a("7f7f"),a("ac6a"),a("456d"),a("bd86")),r=(a("28a5"),a("0fea")),o=a("b65a");function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){Object(n["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var d={name:"AddressListRight",mixins:[o["a"]],components:{},props:["value"],data:function(){var e=this;return{description:"用户信息",cardLoading:!0,positionInfo:{},columns:[{title:"#",key:"rowIndex",dataIndex:"",width:60,align:"center",customRender:function(e,t,a){return parseInt(a)+1}},{title:"姓名",width:"15%",align:"center",dataIndex:"realname"},{title:"工号",width:"15%",align:"center",dataIndex:"workNo"},{title:"部门",width:"20%",align:"center",dataIndex:"departName"},{title:"职务",width:"15%",align:"center",dataIndex:"post",customRender:function(t){return(t||"").split(",").map((function(t){return e.positionInfo[t]?e.positionInfo[t]:t})).join(",")}},{title:"手机号",width:"12%",align:"center",dataIndex:"phone"},{title:"公司邮箱",width:"15%",align:"center",dataIndex:"email"}],url:{list:"/sys/user/queryByOrgCodeForAddressList",listByPosition:"/sys/position/list"}}},watch:{value:{immediate:!0,handler:function(e){this.dataSource=[],this.loadData(1,e)}}},created:function(){this.queryPositionInfo()},methods:{loadData:function(e,t){var a=this;this.loading=!0,1===e&&(this.ipagination.current=1),t?Object(r["getAction"])(this.url.list,c({orgCode:t},this.getQueryParams())).then((function(e){e.success&&(a.dataSource=e.result.records,a.ipagination.total=e.result.total)})).finally((function(){a.loading=!1,a.cardLoading=!1})):Object(r["getAction"])(this.url.list,c({},this.getQueryParams())).then((function(e){e.success&&(a.dataSource=e.result.records,a.ipagination.total=e.result.total)})).finally((function(){a.loading=!1,a.cardLoading=!1}))},searchQuery:function(){this.loadData(1,this.value)},searchReset:function(){this.queryParam={},this.loadData(1,this.value)},handleTableChange:function(e,t,a){Object.keys(a).length>0&&(this.isorter.column=a.field,this.isorter.order="ascend"===a.order?"asc":"desc"),this.ipagination=e,this.loadData(null,this.value)},queryPositionInfo:function(){var e=this;Object(r["getAction"])(this.url.listByPosition,{pageSize:99999}).then((function(t){if(t.success){var a={};t.result.records.forEach((function(e){a[e["code"]]=e["name"]})),e.positionInfo=a}}))}}},u=d,h=(a("d5e7"),a("3a3e"),a("2877")),f=Object(h["a"])(u,i,s,!1,null,"3ed7351e",null);t["default"]=f.exports},d5e7:function(e,t,a){"use strict";var i=a("05ed2"),s=a.n(i);s.a}}]);