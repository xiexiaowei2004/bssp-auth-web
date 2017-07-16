//服务器地址
_serverAddress = _server + "/cod_cus/codCusApply/list";
//跳转页面
_jumpPage = baselocation + "/views/cod_cus/codCusApply/";
//操作数组

var columns=[
    { title: "",field: "select",radio: true,width: 20,align: "left",valign: "middle"},
    { title: "应用编码",field: "applyId",align: "left",sortable: true,order: "desc"},
    { title: "应用名称",field: "applyName",align: "left",sortable: true },
    { title: "创建人",field: "createBy",align: "left",sortable: true },
    { title: "状态",field: "state",align: "left",sortable: true },
    { title: "备注信息",field: "remarks",align: "left",sortable: true },

];
var param={};
param.columns = columns;


//页面绑定事件
$(function () {
	
	param.url=_serverAddress;
    DataGridUtils.initGridByUrl(param);
    
    //刷新事件
	$("#refresh").click(function(){
		DataGridUtils.refresh(param);	
	});
    
    //新增事件
    $("#add").click(function () {
        Utils.redirect(_jumpPage + "add.jsp");
    });
  //修改事件
	$("#modify").click(function(){
		param.idField ="applyId";
		DataGridUtils.modify(param);
	});
	//查阅事件
	$("#view").click(function(){
		param.jumPageUrl=_jumpPage+"view.jsp";
		param.idField ="applyId";
		DataGridUtils.view(param);
	});
	//删除事件（批量删除）
	$("#delete").click(function(){
		var url=_serverAddress+'/deleteByList';
		param.listUrl=_serverAddress;
		param.idField = "applyId";
		param.serverUrl=url;
		DataGridUtils.deleteGrid(param);
	});
	//搜索事件
	$("#search").click(function(){
        param.url=_serverAddress;
        DataGridUtils.refresh(param);
	});
});
//回车事件绑定搜索按钮
$(document).keyup(function (event) {
    if (event.keyCode == 13) {
        param.url = _serverAddress;
        DataGridUtils.refresh(param);
    }
});

//页面跳转
function JumpPage(id,url){
	//跳转页面
	var path = _jumpPage;
	if(url.indexOf("?")==-1)
		url+="?id="+id;
	else
		url+="&id="+id;
	Utils.redirect(url);
}

//列表事件
//行双击
function __onDblClickRow(rowdata,rowobj){
	JumpPage(rowdata.applyId,"view.jsp");
	
}
