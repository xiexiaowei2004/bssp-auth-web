//服务器地址
var _serverAddress = _server + "/edi/ediXmlMapDb/list";
//跳转页面
var _jumpPage = baselocation + "/views/edi/ediXmlMapDb/";
var id=Utils.search("id");
//操作数组
var columns=[
    { title: "",field: "select",radio: true,width: 20,align: "center",valign: "middle"},
    { title: "单据类型",field: "docType",align: "center",sortable: true},
    { title: "业务类型",field: "bizType",align: "center",sortable: true},
    { title: "监管场所",field: "areaCode",align: "center",sortable: true},
    { title: "业务表名",field: "dbTable",align: "center",sortable: true},
    { title: "业务字段",field: "dbColumn",align: "center",sortable: true},
    { title: "报文字段",field: "xmlName",align: "center",sortable: true},
    { title: "排序号",field: "orderNo",align: "center",sortable: true},
    { title: "通道",field: "passageway",align: "center",sortable: true},
    { title: "启用标识",field: "status",align: "center",sortable: true,formatter:function(val){
    	return val=='Y'?'启用':'禁用';
	}},
/*{ title: '操作',field: 'id',align: 'center',formatter:function(value,row,index){
//        var e = '<a href="#" mce_href="#" onclick="jumpPage(\''+ row.uid +'\',\'edit.jsp\')" title="编辑"><i class="glyphicon glyphicon-edit"></i></a> ';
//        var d = '<a href="#" mce_href="#" onclick="del(\''+ row.uid +'\')" title="删除"><i class="glyphicon glyphicon-remove"></i></a> ';
        var l = '<a href="#" mce_href="#" onclick="jumpPage(\''+ row.uid +'\',\'view.jsp\')" title="查阅"><i class="glyphicon glyphicon-search"></i></a> ';
        return l;
    }
    }*/
];
var param={};
param.columns=columns;
param.gridId="table";

param.searchForm = "searchForm";  // 查询表单Id

//页面绑定事件
$(function(){
    initDropDown();
	/*$.ajax({
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
	});*/

	// 新增事件
	$("#add").click(function(){
		Utils.redirect(_jumpPage+"add.jsp");
	});
	//删除事件（批量删除）
	$("#delete").click(function(){
		var url=_serverAddress+'/deleteByList';
		param.listUrl=_serverAddress;
		param.idField="uid";
		param.serverUrl=url;
		DataGridUtils.deleteGrid(param);
	});
    $("#refreshBtn").click(function () {
        param.url=_serverAddress;
        DataGridUtils.refresh(param);
    });
    /**
     * 查阅
     */
    $("#view").click(function () {
     //   view();
        DataGridUtils.view(param);
    });
	//搜索事件
	$("#search").click(function(){
        param.url=_serverAddress;
        DataGridUtils.refresh(param);
	});

    // 返回事件
    $("#reback").click(function () {
        Utils.redirect("list.jsp");
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

function view() {
    var rowData = DataGridUtils.getRowDatas();//获取当前行数据
    modalParam.area = [];
    var width = $(".container").width()+"px";
    modalParam.area.unshift(width,"350px");
    modalParam.url="view.jsp?id="+ rowData.uid;
    modalParam.title="字段关系";
    Utils.showModalDialog(modalParam);
}

//删除数据
function del(id) {
    var url = _serverAddress + "/delete";
    $.ajax({
        url:url,
        dataType:'json',
        data: {"id":id,"appId":$("#appId").val()},
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success:function (result) {
            layer.msg(result.message,{icon:1,time:1000});
            if (result.code){
            	param.url=_serverAddress;
                DataGridUtils.refresh(param);
            }
        },
        error:function (result) {
        }
    });
}

//修改或添加数据（paramUrl:用于判断是修改还是添加数据）
function save(dataForm,paramUrl) {
    var url = _serverAddress + paramUrl;
    var json = Utils.jsonByForm($("#"+dataForm));
    console.log(url+" ; "+dataForm+" ..A.."+paramUrl);
    $.ajax({
        url:url,
        dataType:'json',
        data: json,
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success:function (result) {
            layer.msg(result.message,{icon:1,time:1000});
            if (paramUrl.indexOf("add") != -1 && result.code){
                location.href = _jumpPage + "edit.jsp?id=" + result.data.uid;
                Utils.redirect(_jumpPage+"list.jsp");
            }
        },
        error:function (result) {
        	layer.alert("删除失败");
        }
    });
}

//----------------------------页面跳转----------------------------------
function jumpPage(id,url) {
    var paramId = "";
    if (id != null){
        paramId = "?id=" +id
    }
    location.href=_jumpPage +url+paramId;
}


//获取单条数据（isEdit:判断是编辑还是查看页面）
function initForm() {
    var url = _serverAddress + "/edit";
    $.ajax({
        url:url,
        dataType:'json',
        data:{"id":Utils.search("id"),"appId":$("#appId").val()},
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success:function (result) {
            var data = result.data;
            FormUtils.initForm(data);
        },
        error:function (result) {}
    });
}

//初始化下拉控件
function initDropDown() {
    //获取字典的集合
    var dicData="IS_ENABLE";
    //获取参数代码表的集合
    var codesData="codStdAreaCode";
    Utils.setDropDown(dicData,codesData);
}
//行双击
function __onDblClickRow(){
    DataGridUtils.view(param);

}
/*//关闭弹出框
$("#reback").click(function () {
    var index = parent.layer.getFrameIndex(window.name);
    parent.layer.close(index);
});*/
function __onAfterInitDropDown() {
    if(id!=null){
        initForm();
    }
}