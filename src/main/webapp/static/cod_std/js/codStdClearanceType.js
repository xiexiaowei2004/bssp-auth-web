//服务器地址
var _serverAddress = _server + "/cod_std/codStdClearanceType/list";
//跳转页面
var _jumpPage = baselocation + "/views/cod_std/codStdClearanceType/";
//操作数组
var columns = [
    // { title: "",field: "select",radio: true,width: 20,align: "left",valign: "middle"},
    {title: "通关业务代码", field: "code", align: "center", sortable: true, order: "desc"},
    {title: "通关业务名称", field: "name", align: "left", sortable: true},
    {
        title: "是否启用", field: "isEnable", align: "center", sortable: true, formatter: function (val) {
        return val == 'Y' ? '启用' : '禁用';
    }
    },
    {title: "备注", field: "remarks", align: "left", sortable: true}
    /*{
        title: '操作', field: 'id', align: 'center', formatter: function (value, row, index) {
        var l = '<a href="#" mce_href="#" onclick="Utils.jumpPage(\'' + row.uid + '\',\'view.jsp\')" title="查阅"><i class="glyphicon glyphicon-search"></i></a> ';
        return l;
    }
    }*/
];
var param = {};
param.columns = columns;

//页面绑定事件
$(function () {
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
function load(isSearch, searchForm) {
    param.url = _serverAddress;
    param.isSearch = isSearch;
    DataGridUtils.initGridByUrl(param);
}
//点击刷新时刷新页面
function sx() {
    location.reload();
}
/*//双击表单事件
function __onDblClickRow(rowdata) {
    Utils.jumpPage(rowdata.uid, "view.jsp")
}*/


function closeModalDialog() {//关闭model
    var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
    parent.layer.close(index);
}

//删除数据
function del(id) {
    var url = _serverAddress + "/delete";
    $.ajax({
        url: url,
        dataType: 'json',
        data: {"id": id, "appId": $("#appId").val()},
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (result) {
            layer.msg(result.message, {icon: 1, time: 1000});
            if (result.code) {
                param.url = _serverAddress;
                DataGridUtils.refresh(param);
            }
        },
        error: function (result) {
        }
    });
}

//修改或添加数据（paramUrl:用于判断是修改还是添加数据）
function save(dataForm, paramUrl) {
    var url = _serverAddress + paramUrl;
    var json = Utils.jsonByForm($("#" + dataForm));
    $.ajax({
        url: url,
        dataType: 'json',
        data: json,
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (result) {
            layer.msg(result.message, {icon: 1, time: 1000});
            if (paramUrl.indexOf("add") != -1 && result.code) {
                /* location.href = _jumpPage + "edit.jsp?id=" + result.data.uid;
                 Utils.redirect(_jumpPage+"list.jsp");*/
                closeModalDialog();
                window.location.reload();
            }
        },
        error: function (result) {
            layer.alert("删除失败");
        }
    });
}

//----------------------------页面跳转----------------------------------
function jumpPage(id, url) {
    var paramId = "";
    if (id != null) {
        paramId = "?id=" + id
    }
    location.href = _jumpPage + url + paramId;
}


//获取单条数据（isEdit:判断是编辑还是查看页面）
function initForm() {
    var url = _serverAddress + "/edit";
    $.ajax({
        url: url,
        dataType: 'json',
        data: {"id": Utils.search("id"), "appId": $("#appId").val()},
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (result) {
            var data = result.data;
            FormUtils.initForm(data);
        },
        error: function (result) {
        }
    });
}