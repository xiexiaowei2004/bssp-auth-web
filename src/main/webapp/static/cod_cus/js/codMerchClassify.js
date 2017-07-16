//服务器地址
var _serverAddress = _server+"/cod_cus/codMerchClassify/list";
//跳转页面
var _jumpPage = baselocation+"/views/cod_cus/codMerchClassify/";
//操作数组
var columns=[
    { title: "",field: "select",radio: true,width: 20,align: "left",valign: "middle"},
    { title: "税则号",field: "codeTs",align: "left",sortable: true,order: "desc" },
    { title: "商品名称",field: "gName",align: "left",sortable: true},
    
    { title: '操作',field: 'id',align: 'center',formatter:function(value,row,index){
        var l = '<a href="#" mce_href="#" onclick="view(\''+row.codeTs+'\',\''+row.gName+'\')" title="查阅子表"><i class="glyphicon glyphicon-search"></i></a> ';
        return l;
    }
    }
];
var param={};
param.columns=columns;
param.gridId="table";

param.searchForm = "searchForm";  // 查询表单Id

//页面绑定事件
$(function(){
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
//页面列表 (isSearch：是否是查询，searchForm:查询form表单的Id（id是searchForm可不传）)
function load(isSearch,searchForm) {
    param.url=_serverAddress;
    param.isSearch=isSearch;
    DataGridUtils.initGridByUrl(param);
}


//----------------------------查询子表方法----------------------------------
function view(codeTs,gName) {
	$(".modal-dialog").width($(".container").width()+"px");
	$('#myModal').modal('show');
   $.ajax({
		url : _server + "/cod_cus/codMerchClassify" + "/list/view",
		dataType : 'json',
		data : {"codeTs":codeTs},
		xhrFields : {
			withCredentials : true
		},
		crossDomain : true,
		success : function(result) {
			$("#codeTs").val(codeTs);
			$("#gName").val(gName);
			$("#sTa").html("");//清空
			for(var i=0;i<result.data.length;i++){
				$("#sTa").append("<tr> "+ "<td>"+result.data[i].sNum+"</td>"+"<td>"+result.data[i].element+"</td>"+"</tr>");				
			}
		},
		error : function(result) {

		}
	});
}


function JumpPage(rowdata,url){
    view(rowdata.codeTs,rowdata.gName);
}

//列表事件
//行双击
function __onDblClickRow(rowdata,rowobj){
    JumpPage(rowdata,"view.jsp");


}

