//服务器地址
_serverAddress = _server+"/sas/vehicleIReg/list";
//跳转页面
_jumpPage = baselocation+"/views/sas/sasVehicleIReg/";

/*********************************列表页面********************************/
columns=[
    { title: "全选",field: "select",checkbox: true,width: 20,align: "center",valign: "middle"},
    { title: "车牌类型",field: "vehicleType",align: "center",sortable: true,order: "desc"},
    { title: "车辆入区登记编号",field: "vehicleIRegno",align: "center",sortable: true },
    { title: "车辆备案标识",field: "vehicleRegFlag",align: "center",sortable: true },
    { title: "车辆自重",field: "vehicleWt",align: "center",sortable: true },
    { title: "电子车牌",field: "vehicleIcNo",align: "center",sortable: true },
    { title: "IC卡编号",field: "icNo",align: "center",sortable: true },
    { title: "IC卡类型",field: "icTypecd",align: "center",sortable: true },
    { title: "运输类型代码",field: "transTypecd",align: "center",sortable: true },
    { title: '操作',field: 'uid',align: 'center',formatter:function(value,row,index){
        var e = '<a href="javascript:;" onclick="Utils.jumpPage(\''+ row.uid +'\', \'edit.jsp\')" title="编辑"><i class="glyphicon glyphicon-edit"></i></a> ';
        var d = '<a href="javascript:;" onclick="DataGridUtils.removeData(\''+row.uid+'\')" title="删除"><i class="glyphicon glyphicon-remove"></i></a> ';
        var l = '<a href="javascript:;" onclick="Utils.jumpPage(\''+ row.uid +'\', \'view.jsp\')" title="查阅"><i class="glyphicon glyphicon-search"></i></a> ';
        return e+d+l;
    	}
    }
];
param.columns=columns;
param.height=500;
param.url=_serverAddress;
param.searchForm="searchForm";
param.gridId="table";

$(function () {
    var currentURL = window.location.href;
    if(currentURL.indexOf('list.jsp') > 0){
        DataGridUtils.initGridByUrl(param); //初始化table
    }else if (currentURL.indexOf('add.jsp') > 0){
        Utils.getBillCode('applyId=001&areaCode=4901&docType=a&serverType=c', 'vehicleIRegno', '企业预录入编号获取失败'); //获取企业预录入编号
    }else if (currentURL.indexOf('edit.jsp') > 0 || currentURL.indexOf('view.jsp') > 0){
        initForm(); //初始化表单form
    }
});

/**
 * 搜索查询
 * type:click
 * @returns
 */
function search(){
	param.url = _serverAddress;
    DataGridUtils.refresh(param);
}
/**
 * 批量删除
 * type:click
 * @returns
 */
function deleteByList(){
	var url=_serverAddress+'/deleteByList';
	param.listUrl=_serverAddress;
	param.idField="uid";
	param.serverUrl=url;
	DataGridUtils.deleteGrid(param);
}

/*********************************新增页面********************************/

/**
 * 新增保存
 * type:click
 * @param dataForm
 * @param paramUrl
 */
function save(dataForm, paramUrl){
    $.ajax({
        url: _serverAddress + paramUrl,
        dataType:'json',
        type: 'POST',
        data: Utils.jsonByForm($("#"+dataForm)),
        xhrFields: { withCredentials: true },
        crossDomain: true,
        success:function (result) {
            layer.msg(result.message,{icon:1,time:1000},function(){
                if(result.code == 1){
                    Utils.redirect(_jumpPage + "/list.jsp");
                }
            });
        },
        error:function (result) {
            layer.alert("保存失败");
        }
    });
}

/*********************************修改页面********************************/

function update(dataForm, paramUrl){
    $.ajax({
        url: _serverAddress + paramUrl,
        dataType:'json',
        type: 'POST',
        data: Utils.jsonByForm($("#"+dataForm)),
        xhrFields: { withCredentials: true },
        crossDomain: true,
        success:function (result) {
            layer.msg(result.message,{icon:1,time:1000},function(){
                if(result.code == 1){
                    Utils.redirect(_jumpPage + "/list.jsp");
                }
            });
        },
        error:function (result) {
            layer.alert("修改失败");
        }
    });
}

/**
 * 获取表单初始化数据，将得到的结果集写入对应的输入框
 */
function initForm(){
    var url = _serverAddress + "/" + Utils.search("id") + "/view";
    $.ajax({
        url: url,
        type:'GET',
        dataType: 'json',
        data: {"appId": $("#appId").val()},
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (result) {
            FormUtils.initForm(result.data);
        },
        error: function (result) {
            layer.alert("表单初始化失败");
        }
    });
}