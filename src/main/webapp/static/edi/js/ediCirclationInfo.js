//服务器地址
 _serverAddress = _server+"/edi/ediCirclationInfo/list";
//跳转页面
_jumpPage = baselocation+"/views/edi/ediCirclationInfo/";
//操作数组
 columns=[
    { title: "全选",field: "select",checkbox: true,width: 20,align: "center",valign: "middle"},
    { title: "监管场所",field: "areaCode",align: "left",halign:"center",sortable: true,order: "desc"},
    { title: "单据类型",field: "docType",align: "left",halign:"center",sortable: true },
    { title: "业务类型",field: "bizType",align: "left",halign:"center",sortable: true },
    { title: "单据编号 ",field: "seqNo",align: "left",halign:"center",sortable: true },
    { title: "环节号",field: "channel",align: "left",halign:"center",sortable: true },
    { title: "岗位编号",field: "posCode",align: "left",halign:"center",sortable: true },
    { title: "下一环节号  ",field: "nextChannel",align: "left",halign:"center",sortable: true },
    { title: "下一审批岗位编号",field: "nextPosCode",align: "left",halign:"center",sortable: true },
    { title: "处理标识",field: "status",align: "left",halign:"center",sortable: true },
    { title: "操作人",field: "opUser",align: "left",halign:"center",sortable: true },
    { title: "操作时间",field: "opDate",align: "left",halign:"center",sortable: true },
    { title: "备注",field: "remarks",align: "left",halign:"center",sortable: true },
  /*  {
        title: '操作', field: 'id', align: 'center', formatter: function (value, row, index) {
        var e = '<a href="#" mce_href="#" onclick="Utils.jumpPage(\'' + row.uid + '\',\'edit.jsp\')" title="编辑"><i class="glyphicon glyphicon-edit"></i></a> ';
        var d = '<a href="#" mce_href="#" onclick="DataGridUtils.removeData(\'' + row.uid + '\')" title="删除"><i class="glyphicon glyphicon-remove"></i></a> ';
        var l = '<a href="#" mce_href="#" onclick="Utils.jumpPage(\'' + row.uid + '\',\'view.jsp\')" title="查阅"><i class="glyphicon glyphicon-search"></i></a> ';
        return e + d + l;
    }
    }*/
];
 param.columns = columns;

//页面绑定事件
$(function () {
	$.ajax({
        url: _server + "/cod_std/codStdAreaCode" + "/getDataSource",
		dataType : 'json',
		data : {},
		xhrFields : {
			withCredentials : true
		},
		crossDomain : true,
		success : function(result) {
			//console.log(result.data+"..."+result.data[0].ID+" ; ");
			for (var i = 0; i < result.data.length; i++) {
				$("#areaCode").append("<option  value='"
						+ result.data[i].ID + "'>"
						+ result.data[i].TEXT + "</option>");
			}	
		},
		error : function(result) {

		}
	});
 /* //新增事件
  $("#add").click(function () {
      Utils.redirect(_jumpPage + "add.jsp");
  });
  //删除事件（批量删除）
  $("#delete").click(function () {
      var url = _serverAddress + '/deleteByList';
      param.listUrl = _serverAddress;
      param.idField = "uid";
      param.serverUrl = url;
      DataGridUtils.deleteGrid(param);
  });*/
  //搜索事件
  $("#search").click(function () {
      param.url = _serverAddress;
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
//页面列表 (isSearch：是否是查询，searchForm:查询form表单的Id（id是searchForm可不传）)
function load() {
  param.url = _serverAddress;
  DataGridUtils.initGridByUrl(param);
}