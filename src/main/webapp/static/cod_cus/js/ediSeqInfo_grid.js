//服务器地址
var _serverAddress = _server+"/cod_cus/ediSeqInfo/list";
//跳转页面
var _jumpPage = baselocation+"/views/cod_cus/ediSeqInfo/";

var columns=[
    { title: "",field: "select",radio: true,width: 20,align: "left",valign: "middle"},
    { title: "单据类型",field: "docType",align: "cneter",sortable: true,order: "desc"},
    { title: "模块名称",field: "modelName",align: "cneter",sortable: true },
    { title: "状态",field: "status",align: "cneter",sortable: true },
    { title: "计数器",field: "counterLength",align: "left",sortable: true },
    { title: "创建人",field: "createName",align: "cneter",sortable: true },
    { title: "日期规则",field: "dateRule",align: "left",sortable: true },
    { title: "创建时间",field: "createTime",align: "center",sortable: true, formatter: function (value, row, index) {
        var datetime = row.createTime;
        if (datetime != "" && datetime != null) {
            return datetime.substring(0, 10);
        } else {
            return datetime;
        }
    }
    },
   
];
var param={};
param.columns=columns;


$(function(){
	//初始化日历
	Utils.initCalendar();
	//初始化下拉
	initDropDown();
	//初始化表格
	param.url=_serverAddress;
	DataGridUtils.initGridByUrl(param);
    $("#refresh").click(function(){
        DataGridUtils.refresh(param);
    });
	

	//新增事件
	$("#add").click(function(){
		Utils.redirect(_jumpPage+"add.jsp");	
	});
	//修改事件
	$("#modify").click(function(){
		DataGridUtils.modify(param);
	});
	//查阅事件
	$("#view").click(function(){
		param.gridId="table";
		param.jumPageUrl=_jumpPage+"view.jsp";
		DataGridUtils.view(param);
	});

	//删除事件（批量删除）
	$("#delete").click(function(){
		var url=_serverAddress+'/deleteByList';
		param.listUrl=_serverAddress;
		param.idField = "uid";
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
$(document).keyup(function(event){
  if(event.keyCode ==13){
	  param.url=_serverAddress;
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
	JumpPage(rowdata.uid,"view.jsp");
}
function initDropDown(){
	Utils.setCodesDropDown("DOC_TYPE");
	Utils.setCodesDropDown("IS_ENABLE");
	Utils.setParamDropDown("codStdAreaCode");

}
