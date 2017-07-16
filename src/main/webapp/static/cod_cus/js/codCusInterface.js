//服务器地址
_serverAddress = _server + "/cod_cus/codCusInterface/list";
//跳转页面
_jumpPage = baselocation + "/views/cod_cus/codCusInterface/";
//操作数组

var columns=[
    { title: "",field: "select",radio: true,width: 20,align: "left",valign: "middle"},
    { title: "接口编码",field: "interfaceId",align: "left",sor: true,order: "desc"},
    { title: "接口名称",field: "interfaceName",align: "left",sor: true },
    { title: "接口地址",field: "interfaceUrl",align: "left",sor: true },
    { title: "创建人",field: "createBy",align: "left",sor: true },
    {title: "状态", field: "state", align: "left", sor: true},
    {title: "备注信息", field: "remarks", align: "left", sor: true},

];
var param={};
param.columns = columns;


//页面绑定事件
$(function () {
	
	param.url=_serverAddress;
    DataGridUtils.initGridByUrl(param);
    
    //刷新事件
	$("#refreshBtn").click(function(){
		DataGridUtils.refresh(param);	
	});
    
    //新增事件
    $("#add").click(function () {
        Utils.redirect(_jumpPage + "add.jsp");
    });
  //修改事件
	$("#modify").click(function(){
		param.idField ="interfaceId";
		DataGridUtils.modify(param);
	});
	//查阅事件
	$("#view").click(function(){
		param.jumPageUrl=_jumpPage+"view.jsp";
		param.idField ="interfaceId";
		DataGridUtils.view(param);
	});
	//删除事件（批量删除）
	$("#delete").click(function(){
		var url=_serverAddress+'/deleteByList';
		param.listUrl=_serverAddress;
		param.idField = "interfaceId";
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
	JumpPage(rowdata.interfaceId,"view.jsp");
	
}

