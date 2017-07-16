//服务器地址
_serverAddress = _server + "/sas_cmb/sasCmbBsc/list";
//跳转页面
_jumpPage = baselocation + "/views/sas_cmb/sasCmbBsc/";
//操作数组
var columns = [
    {title: "全选", field: "select", radio: true, align: "center", valign: "middle"},
    {title: "耗料单编号", field: "cmbNo", align: "center", sortable: true, order: "desc"},
    {title: "耗料单预录入编号", field: "sasCmbPreentNo", align: "center", sortable: true},
    {title: "申报类型", field: "dclTypecd", align: "center", sortable: true},
    {title: "变更次数", field: "chgTmsCnt", align: "center", sortable: true},
    {title: "单据状态", field: "chkstatusName", align: "center", sortable: true},
    {title: "操作时间", field: "dclTime", align: "center", sortable: true},
    {title: "回执状态", field: "updateName", align: "center", sortable: true},
    {title: "主管海关", field: "masterCuscd", align: "center", sortable: true},
    {title: "监管场所", field: "areaCode", align: "center", sortable: true},

];
var param = {};
param.columns = columns;

//页面绑定事件
$(function () {
    //初始化日期控件
    Utils.initCalendar();
    setCalFormat();
    //初始化list的列表
    param.url = _serverAddress;
    DataGridUtils.initGridByUrl(param);

    //搜索事件
    $("#search").click(function () {
        DataGridUtils.refresh(param);
    });
    //清除事件
    $("#reset").click(function () {
        DataGridUtils.refresh(param)
    });
    //刷新事件
    $("#refresh").click(function () {
        DataGridUtils.refresh(param)
    });
    //新增事件
    $("#add").click(function () {
        Utils.redirect(_jumpPage + "edit.jsp?optype=add");
    });
    //修改事件
    $("#modify").click(function () {
        DataGridUtils.modify(param);
    });
    //查阅事件
    $("#view").click(function () {
        param.jumPageUrl = _jumpPage + "edit.jsp";
        DataGridUtils.view(param);
    });
    //删除事件
    $("#delete").click(function () {
        var url = _serverAddress + '/deleteByList';
        param.url = _serverAddress;
        param.serverUrl = url;
        DataGridUtils.deleteGrid(param);
    });
    //变更事件
    $("#change").click(function () {
        var rows = $('#table').bootstrapTable('getSelections');
        var chkStatus = rows[0]["chkStatus"];
        if (chkStatus !== "P") {
            layer.msg("未通过的备案不能变更");
            return;
        }
        isCanChange();
    });
    //初始化下拉控件
    initDropDown();

});

//回车事件绑定搜索按钮
$(document).keyup(function (event) {
    if (event.keyCode == 13) {
        param.url = _serverAddress;
        DataGridUtils.refresh(param);
    }
});

//设置日期格式，限制开始时间不能大于结束时间
function setCalFormat() {
    /************设置申报时间***************/
    //开始时间
    $('#dclTimeStart').datepicker().on('changeDate', function (e) {
        var startTime = e.date;
        $('#dclTimeEnd').datepicker('setStartDate', startTime);
    });
    //结束时间：
    $('#dclTimeEnd').datepicker({}).on('changeDate', function (e) {
        var endTime = e.date;
        $('#dclTimeStart').datepicker('setEndDate', endTime);
    });
}

//双击表单事件
function __onDblClickRow(rowdata) {
    Utils.jumpPage(rowdata.uid, "edit.jsp?optype=view")
}

//初始化下拉控件
function initDropDown() {
	 //DCL_TYPECD_STOCK申报类型：备案、变更、作废 ;CHK_STATUS单据状态
	Utils.setCodesDropDown("DCL_TYPECD_STOCK,CHK_STATUS");
}
function isCanChange() {
    var rows = $('#table').bootstrapTable('getSelections');
    $.ajax({
        url: _serverAddress + "/" + rows[0]["seqNo"] + "/isCanChange",
        type: 'post',
        data: {"appId": $("#appId").val()},
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (result) {
            if (result) {
                DataGridUtils.change(param);
            } else {
                layer.msg('存在未通过审批的记录,该单据不可变更!');
            }
        },
        error: function () {
            layer.msg('变更失败!');
        }
    });
}


