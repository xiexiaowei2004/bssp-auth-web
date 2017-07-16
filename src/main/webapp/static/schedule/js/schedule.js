//服务器地址
_serverAddress = "http://192.168.1.126:9000/schedule/list";
//跳转页面
_jumpPage = baselocation + "/views/schedule/schedule/";
//操作数组
columns = [
    { title: "",field: "select",radio: true,width: 20,align: "left",valign: "middle"},
    {title: "任务名称", field: "jobName", align: "left", sortable: true, order: "desc"},
    {title: "任务分组", field: "jobGroup", align: "left", sortable: true},
    {title: "任务描述", field: "jobDescription", align: "left", sortable: true},
    {title: "任务状态", field: "jobStatus", align: "left", sortable: true},
    {title: "任务表达式", field: "cronExpression", align: "left", sortable: true},
    {title: "创建时间", field: "createTime", align: "left", sortable: true}/*,
    /!*{ title: "是否年检",field: "chkAnnual",align: "center",sortable: true },*!/
    {
        title: '操作', field: 'id', align: 'center', formatter: function (value, row, index) {
//        var e = '<a href="#" mce_href="#" onclick="Utils.jumpPage(\'' + row.regCoCgac + '\',\'edit.jsp\')" title="编辑"><i class="glyphicon glyphicon-edit"></i></a> ';
//        var d = '<a href="#" mce_href="#" onclick="DataGridUtils.removeData(\'' + row.regCoCgac + '\')" title="删除"><i class="glyphicon glyphicon-remove"></i></a> ';
        var l = '<a href="#" mce_href="#" onclick="Utils.jumpPage(\'' + row.regCoCgac + '\',\'view.jsp\')" title="查阅"><i class="glyphicon glyphicon-search"></i></a> ';
        return l;
    }
    }*/
];
param.columns = columns;
//页面绑定事件
$(function () {
    //新增事件
    $("#add").click(function () {
        Utils.redirect(_jumpPage + "add.jsp");
    });
    $("#edit").click(function () {
        var rows = $('#table').bootstrapTable('getSelections');
        if (rows.length == 0) {
            layer.msg("请选择要修改的记录", {time: 1500});
            return;
        }
        Utils.redirect(_jumpPage + "edit.jsp?"+"jobName="+rows[0].jobName+"&jobGroup="+rows[0].jobGroup);
    });

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
function JumpPage(id,url){
    //跳转页面
    var path = _jumpPage;
    if(url.indexOf("?")==-1)
        url+="?id="+id;
    else
        url+="&id="+id;
    Utils.redirect(url);
}
//删除事件
function operateType(type) {
    var rows = $('#table').bootstrapTable('getSelections');
    if (rows.length == 0) {
        switch (type) {
            case "delete":
                layer.msg("请选择要删除的记录", {time: 1500});

                break;
            case "resume"
            :
                layer.msg("请选择要恢复的记录", {time: 1500});

                break;
            case "pause"
            :
                layer.msg("请选择要暂停的记录", {time: 1500});

                break;
        } return;

    }
    $.ajax({
        url:_serverAddress +"/"+type+"/"+rows[0].jobName+"/"+rows[0].jobGroup,
        type: 'get',
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (result) {
            if (result.code == 1) {
                layer.msg("操作成功", {time: 1000}, function () {
                    DataGridUtils.refresh(param);
                });
            }
            else {
                layer.msg('操作失败!');
            }
        },
        error: function (result) {
            layer.msg('操作失败!');
        }

    });
}
function save(type) {
    var formData = $("#dataForm").serializeForm();
    $.ajax({
        url: _serverAddress + "/"+type,
        type: 'post',
        dataType: 'json',
        data: formData,
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (result) {
            if (result.code == 1) {
                layer.msg(result.message, {icon: 1, time: 1000}, function () {

                    Utils.redirect(_jumpPage + "list.jsp");

                });
            }
            else {
                layer.msg(result.message, {time: 1500});
            }
        },
        error: function (result) {
            layer.msg(result.message, {icon: 1, time: 1500}, function () {
                if (typeof (__onAfterSaveError) == "function") {
                    __onAfterSaveError(result.data);    //保存失败 回调
                }
            });
        }
    });
}
function GetDate(){
    var url = _serverAddress  + "/view"+"/"+Utils.search("jobName")+"/"+Utils.search("jobGroup");
    $.ajax({
        url: url,
        type: 'get',
        dataType: 'json',
        data: {"appId": $("#appId").val()},
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (result) {
            var data = result.data;
            FormUtils.initForm(data);
        /*    if (typeof(__onAfterLoad) == "function") {
                __onAfterLoad(data);
            }*/
        },
        error: function (result) {
        }
    });
}
//列表事件
//行双击
/*
function __onDblClickRow(rowdata,rowobj){
    JumpPage(rowdata.regCoCgac,"view.jsp");


}*/
