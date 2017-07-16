//服务器地址
var _serverAddress = _server+"/ems/emsPutrecBsc/list";
//跳转页面
var _jumpPage = baselocation+"/views/ems/emsPutrecBsc/";
//操作数组
var columns=[
    { title: "全选",field: "select",checkbox: true,align: "center",valign: "middle"},
    { title: "成品序号",field: "gdsSeqno",align: "center",sortable: true,order: "desc"},
    { title: "料件序号",field: "gdsMtno",align: "center",sortable: true },
    { title: "单损耗版本号",field: "gdecd",align: "center",sortable: true },
    { title: "修改标记",field: "gdsNm",align: "center",sortable: true },
    { title: "单耗数量",field: "endprdGdsSpcfModelDesc",align: "right",sortable: true },
    { title: "净耗数量",field: "decUnitname",align: "right",sortable: true },
    { title: "有形损耗",field: "lawfUnitname",align: "right",sortable: true },
    { title: "无形损耗",field: "adjmtrMarkname",align: "right",sortable: true },
    { title: "单耗申报状态",field: "modfMarkname",align: "center",sortable: true },
    { title: "保税料件比例",field: "modfMarkname",align: "right",sortable: true },
    { title: "企业执行标记",field: "eptsExeMarkname",align: "center",sortable: true }
];
var param={};
param.columns=columns;

//页面绑定事件
$(function(){
	param.url=_serverAddress;
    DataGridUtils.initGridByUrl(param);   
	//新增事件
	$("#add").click(function(){
		
	});
	//搜索事件
	$("#search").click(function(){
        param.url=_serverAddress;
        DataGridUtils.refresh(param);
	});
});
//回车事件绑定搜索按钮
$(document).keyup(function(event){
  if(event.keyCode ==13){
	  param.url=_serverAddress;
      DataGridUtils.refresh(param);
  }
});