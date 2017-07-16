//服务器地址
 _serverAddress = _server+"/cod_std/codStdTrpType/list";
//跳转页面
 _jumpPage = baselocation+"/views/cod_std/codStdTransportType/";
var rowcode = Utils.search("rowcode");
//操作数组
columns=[
    { title: "全选",field: "select",radio: true,width: 20,align: "",valign: "middle",formatter:function(value,row,index){
    	if(rowcode.indexOf(row.code)!=-1){
		 return {
	            checked : true//设置选中
	        };
    	}
    }},
    { title: "运输类型代码",field: "code",align: "left",sortable: true,order: "desc"},
    { title: "运输类型简称",field: "name",align: "left",sortable: true },
    { title: "通关业务代码",field: "clearanceCode",align: "left",sortable: true },
    { title: "运输类型全称",field: "fullName",align: "left",sortable: true },
    { title: "关区代码",field: "customsCode",align: "left",sortable: true },
    { title: "监管场所",field: "areaCode",align: "left",sortable: true },
    { title: "说明",field: "remarks",align: "left",sortable: true },
];
 param={};
param.columns=columns;
param.gridId="table";

param.searchForm = "searchForm";  // 查询表单Id
//页面绑定事件
$(function(){
	//新增事件
	$("#ok").click(function(){
		//Utils.redirect(_jumpPage+"add.jsp");
		var url=_serverAddress+'/okByList';
		param.listUrl=_serverAddress;
		param.idField="uid";
		param.serverUrl=url;
		FormUtils.ok(param);
	});
	//取消
	$("#cancel").click(function(){
		layer_close();
	});
	
	//搜索事件
	$("#search").click(function(){
        param.url=_serverAddress;
        DataGridUtils.refresh(param);
	});
	initDropDown();
	
});
function initDropDown(){
	$("select[name='customsCode']").change(function(){//关区代码的值改变时的场地下拉框的值的联动
		console.log("...."+$("select[name='customsCode']").val());
		//根据关区代码的值实现监管场所的联动
		$.ajax({
            url: _server + "/cod_std/codStdAreaCode" + "/getDataSource",
			type:'post',
			dataType : 'json',
			data : {},
			xhrFields : {
				withCredentials : true
			},
			crossDomain : true,
			success : function(result) {
			//	console.log(result.data.length+";"+result+"..."+result.data+";"+result.data[0].ID+":"+result.data[0].TEXT);
				$("select[name='areaCode'] option").remove();//清空
				for(var i=0;i<result.data.length;i++){
					$("select[name='areaCode']").append("<option value='"+result.data[i].ID+"'>"+result.data[i].TEXT+"</option>");
				}
			},
			error : function(result) {

			}
		});
	});
	var url=_server+'/parameter/codCusCustomsfec/getDataSource';
	$.ajax({
        url:url,
        type: 'get',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success:function (response) {
        	Utils.initDropDown(response);
        },
        error:function (response) {
        	layer.alert("资源获取失败");
        }
    });
}
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


//修改或添加数据（paramUrl:用于判断是修改还是添加数据）
function save(dataForm,paramUrl) {
    var url = _serverAddress + paramUrl;
    var json = Utils.jsonByForm($("#"+dataForm));
    $.ajax({
        url:url,
        type:'post',
        dataType:'json',
        data: json,
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success:function (result) { 
            layer.msg(result.message,{icon:1,time:1000});
            if (paramUrl.indexOf("add") != -1 && result.uId){
                location.href = _jumpPage + "edit.jsp?id=" + result.data.uId;
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
function initForm(isEdit) {
    var url = _serverAddress + "/"+Utils.search("id");
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
            console.log(data);
            FormUtils.initForm(data);
        },
        error:function (result) {}
    });
}

/*关闭弹出框口*/
function layer_close(){
	var index = parent.layer.getFrameIndex(window.name);
	parent.layer.close(index);
}


function ok(data){
  	data.gridId=data.gridId||"table";
  	data.idField=data.idField||"ID";
  	var rows=$('#'+data.gridId).bootstrapTable('getSelections');
		if(rows.length==0){
			layer.alert("未选择任何记录");
			return;
		}
		//拼接主键
		var id = $.map(rows, function (row) {
          return row[data.idField];
      });
		var idList=id.join(",");
		layer.confirm('确认所选信息 ？',{btn: ['确定','取消']}, function(){
	        //调用后台服务
	        $.ajax({
	            url:data.serverUrl,
	            type:'post',
	            data: {"idList":idList,"appId":$("#appId").val()},
	            dataType:'json',
	            xhrFields: {
	                withCredentials: true
	            },
	            crossDomain: true,
	            success:function (result) {
	            	if (result.code == 1) {
						parent.layer.msg(result.message, {
							shade : 0.3,
							time : 1500
						}, function() {
							window.parent.location.reload(); // 刷新父页面
						});
					} else {
						layer.msg(result.message, {
							icon : 2,
							time : 1000
						});
					}
	            },
	            error:function (result) {
	                layer.alert('执行失败!');
					return false;
	            }
	        });
	    });
  }

