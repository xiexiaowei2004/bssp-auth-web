//服务器地址
_serverAddress = _server + "/entry/entryHead/list";
//跳转页面
_jumpPage = baselocation + "/views/entry/entryHead/";

var datetime = DateUtil.dateToStr("yyyy-MM-dd HH:mm:ss");
var id = Utils.search("id");
var optype = Utils.search("optype");
var viewType = Utils.search("ieFlag");
var ieFlag = Utils.search("viewType");
$("#iEFlag").val(ieFlag);
var Columns = [
    {title: "全选", field: "select", radio: true, align: "center", valign: "middle"},
    {title: "统一编号", field: "seqNo", align: "center", sortable: true},
    {title: "预录入号", field: "etpsPreentNo", align: "center", sortable: true},
    {title: "报关单号", field: "entryId", align: "center", sortable: true},
    {title: "进出口岸", field: "iEPort", align: "center", sortable: true},
    {title: "单据状态", field: "chkStatus", align: "center", sortable: true,},
    {title: "进出口日期", field: "iEDate", align: "center", sortable: true},
    {title: "申报日期", field: "dclTime", align: "center", sortable: true},
    {title: "操作日期", field: "updateTime", align: "left", sortable: true},
    {title: "指运港", field: "distinatePort", align: "center", sortable: true},
    {title: "提运单号", field: "billNo", align: "center", sortable: true},
    {title: "运输方式", field: "areaCode", align: "center", sortable: true},
];
var param={};
param.columns = Columns;
param.gridId = "mTable";
param.idField="uid";
//页面绑定事件
$(function () {
    if (id == null) {
        SetDefault();
    }
    //初始化表格
    initTable(true);
    //初始化日期控件
    Utils.initCalendar();
    setCalFormat();
    //初始化下拉控件
    initDropDown();
    //刷新事件
    $("#refreshBtn").click(function () {
        param.url=_serverAddress;
        DataGridUtils.refresh(param);
    })
    //返回事件
    $("#reback").click(function () {
        parent.Utils.hideEditDiv();
    });
    //搜索事件
    $("#search").click(function () {
        /*param.url = _serverAddress;
         DataGridUtils.refresh(param);*/
        initTable(false);
    });
    //删除事件
    $("#remove").click(function () {
        removeData();
    });
    //新增/修改事件
    $("#save").click(function () {
        var url = "/add";
        if (id != null)
            url = "/update";
        FormUtils.save("dataForm", url, true);
    });
});

//回车事件绑定搜索按钮
$(document).keyup(function (event) {
    if (event.keyCode == 13) {
        param.url = _serverAddress;
        DataGridUtils.refresh(param);
    }
});
//删除单条数据
function removeData() {
    var rows = $('#' + param.gridId).bootstrapTable('getSelections');
    if (rows.length == 0) {
        layer.msg("未选择任何数据", {icon: 1, time: 1500});
        return;
    }
/*    if (checkChkStatus(rows[0].chkStatus) == false) {
        layer.msg("当前记录不可删除", {time: 2000});
        return;
    }*/
    var id = rows[0].uid;
    layer.confirm('确认删除该记录 ？', {btn: ['确定', '取消']}, function () {
        var url = _serverAddress + "/" + id + "/delete";
        $.ajax({
            url: url,
            type: 'post',
            dataType: 'json',
            data: {"appId": $("#appId").val()},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (result) {
                layer.msg("删除成功", {icon: 1, time: 1000});
                if (result.code == 1) {
                    param.url = _serverAddress;
                    DataGridUtils.refresh(param);
                }
            },
            error: function (result) {
            }
        });
    })
}

//设置默认值
function SetDefault() {
    //设置日期
    var date = DateUtil.dateToStr("yyyy-MM-dd");
    $('#iEDate').val(date);
    $('#dclTime').val(date);
    //给搜索框赋值
    var now = new Date();
    var decTimeStart = new Date(now.getTime() - 1000 * 60 * 60 * 24 * 5);
    $('#dclTimeStart').datepicker('setDate', decTimeStart);
    $('#dclTimeEnd').datepicker('setDate', date);
    $('#updateTimeStart').datepicker('setDate', decTimeStart);
    $('#updateTimeEnd').datepicker('setDate', date);
}


//设置日期格式，限制开始时间不能大于结束时间
function setCalFormat() {
    /************设置申报日期***************/
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
    /************设置申报日期***************/

    /************设置操作日期***************/
    //开始时间
    $('#updateTimeStart').datepicker().on('changeDate', function (e) {
        var startTime = e.date;
        $('#updateTimeEnd').datepicker('setStartDate', startTime);
    });
    //结束时间：
    $('#updateTimeEnd').datepicker({}).on('changeDate', function (e) {
        var endTime = e.date;
        $('#updateTimeStart').datepicker('setEndDate', endTime);
    });
    /************设置操作日期***************/
}
//初始化表格
function initTable(isInit) {
    param.url=_serverAddress;
    if (isInit){
        DataGridUtils.initGridByUrl(param);
    }else {
        DataGridUtils.refresh(param);
    }
}

function view(optype) {

    if (optype == "add") {
        Utils.showEditDiv(_jumpPage + "add.jsp?optype=" + optype+"&viewType="+viewType);
    } else if (optype == "edit") {
        modify(optype);
    }
    else if (optype == "view") {
        modify(optype);
    } else if (optype == "change") {
        modify(optype);
    }
}

function modify(optype) {

    if(optype == "change") {
        modalParam.area = [];
        var width = $(".container").width()+"px";
        modalParam.area.unshift(width,"550px");
        modalParam.url="";
        modalParam.title="";
        Utils.showModalDialog(modalParam);
    }else{
        var rows = $('#' + param.gridId).bootstrapTable('getSelections');
        if (rows.length == 0) {
            layer.msg("未选择任何数据", {icon: 1, time: 1500});
            return;
        }
        if (optype == "edit") {
            if (checkChkStatus(rows[0].chkStatus) == false) {
                layer.msg("当前记录不可修改", {time: 1500});
                return;
            }
        }
        var id = rows[0]["uid"];
        Utils.showEditDiv(_jumpPage + "add.jsp?id=" + id + "&optype=" + optype+"&viewType="+param.gridId);
    }
}
function initDropDown() {
    //获取字典的集合
    var dicData="DEC_TYPE";
    //获取参数代码表的集合
    var codesData="codCusCustomsfec,codCusCustomsrel,codCusTransf," +
        "codCusTrade,codCusLevymode,codCusTrans," +
        "codCusDistrictrel,codStdContaParam,codCusCountry," +
        "codCusPortlin,codCusWrap,codStdAreaCode";
    Utils.setDropDown(dicData,codesData);
}

function __onAfterGetLoginUserInfo(userinfo){
    console.log(userinfo+"----------------");
    /*SetValue("declarant", userinfo.realName);
    if(optype == "add"){
        $("#masterCuscd").select2().val(userinfo.copEnt.customsCode).trigger("change");
        $("#tradeAreaCode").select2().val(userinfo.copEnt.areaCode).trigger("change");
    }*/
    if ($("#seqNo").val() == "") {
        //获取企业预录入编号
        Utils.getBillCode("applyId=001&areaCode="+userinfo.copEnt.areaCode+"&docType=A0504CopNO&serverType=C", "etpsPreentNo", "企业预录入编号获取失败");
        //获取申报端统一编号
        Utils.getBillCode("applyId=001&areaCode="+userinfo.copEnt.areaCode+"&docType=A0504SeqNO&serverType=C", "seqNo", "申报端统一编号获取失败");
    }
}
//页面下拉初始化成功后执行
function __onAfterInitDropDown() {
    if (id != null)
        FormUtils.getData();
    else if(id==null && optype!=null)
        Utils.getLoginUserInfo();   //获取用户信息
}
