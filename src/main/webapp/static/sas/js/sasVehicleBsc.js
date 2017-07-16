//服务器地址
_serverAddress = _server + "/sas/sasVehicleBsc/list";
//跳转页面
_jumpPage = baselocation + "/views/sas/sasVehicleBsc/";
var id = Utils.search("id");
var optype = Utils.search("optype");
var viewType = Utils.search("viewType");
if(viewType=="cusTable"){
    _serverAddress = _server + "/sas/sasVehicleCus/list";
}else if(viewType=="hisTable"){
    _serverAddress = _server + "/sas/sasVehicleHis/list";
}
var datetime = DateUtil.dateToStr("yyyy-MM-dd HH:mm:ss");
//单据状态-审批通过
var success = "P";
//操作数组
var Columns = [
    {title: "单选", field: "select", radio: true, align: "center", width: "30"},
    {title: "车牌号", field: "vehicleNo", align: "center", sortable: true},
    {title: "监管车海关编码", field: "vehicleCusNo", align: "left", sortable: true},
    {title: "车辆类型", field: "vehicleTypeNm", align: "left", sortable: true},
    {title: "车牌类型", field: "plateTypeNm", align: "left", sortable: true},
    {title: "所属企业名称", field: "etpsNm", align: "left", sortable: true},
    {title: "申报类型", field: "dclTypecd", align: "center", sortable: true,},
    {title: "变更次数", field: "chgTmsCnt", align: "center", sortable: true},
    {title: "单据状态", field: "chkStatusNm", align: "left", sortable: true},
    {title: "回执状态", field: "retChannel", align: "left", sortable: true},
    {title: "操作时间", field: "decTime", align: "center", sortable: true},
    {title: "主管海关", field: "masterCuscd", align: "center", sortable: true},
    {title: "监管场所", field: "areaCode", align: "center", sortable: true},
];
/*var cusColumns = [
 {title: "单选", field: "select", radio: true, align: "center", width: "30"},
 {title: "车牌号", field: "vehicleNo", align: "center", sortable: true},
 {title: "监管车海关编码", field: "vehicleCusNo", align: "left", sortable: true},
 {title: "车辆类型", field: "vehicleTypecd", align: "left", sortable: true},
 {title: "车牌类型", field: "plateTypecd", align: "left", sortable: true},
 {title: "所属企业名称", field: "etpsNm", align: "left", sortable: true},
 {title: "申报类型", field: "dclTypecd", align: "center", sortable: true,},
 {title: "变更次数", field: "chgTmsCnt", align: "center", sortable: true},
 {title: "单据状态", field: "chkStatusNm", align: "left", sortable: true},
 {title: "回执状态", field: "retChannel", align: "left", sortable: true},
 {title: "操作时间", field: "decTime", align: "center", sortable: true},
 {title: "主管海关", field: "masterCudNm", align: "center", sortable: true},
 {title: "场地代码", field: "areaCode", align: "center", sortable: true},
 ];
 var hisColumns = [
 {title: "单选", field: "select", radio: true, align: "center", width: "30"},
 {title: "车牌号", field: "vehicleNo", align: "center", sortable: true},
 {title: "监管车海关编码", field: "vehicleCusNo", align: "left", sortable: true},
 {title: "车辆类型", field: "vehicleTypecd", align: "left", sortable: true},
 {title: "车牌类型", field: "plateTypecd", align: "left", sortable: true},
 {title: "所属企业名称", field: "etpsNm", align: "left", sortable: true},
 {title: "申报类型", field: "dclTypecd", align: "center", sortable: true,},
 {title: "变更次数", field: "chgTmsCnt", align: "center", sortable: true},
 {title: "单据状态", field: "chkStatusNm", align: "left", sortable: true},
 {title: "回执状态", field: "retChannel", align: "left", sortable: true},
 {title: "操作时间", field: "decTime", align: "center", sortable: true},
 {title: "主管海关", field: "masterCudNm", align: "center", sortable: true},
 {title: "场地代码", field: "areaCode", align: "center", sortable: true},
 ];*/
var param={};
param.columns = Columns;
var tabs = ["busTab", "cusTab", "hisTab"];
var tableName = {busTab:"bscTable",cusTab:"cusTable",hisTab:"hisTable"};
var serverUrl = {busTab: "/sas/sasVehicleBsc/list", cusTab: "/sas/sasVehicleCus/list", hisTab: "/sas/sasVehicleHis/list"};
var tab = "bscTable";
param.idField="uid";
//页面绑定事件
$(function () {
    if (id == null) {
        SetDefault();
    }
   if(optype==null){
       //初始化表格
       //DataGridUtils.initGridByUrl(param);
       initTable(true);
   }
    //初始化下拉框
    initDropDown();
    Utils.initCalendar();
    setCalFormat();
    //返回事件
    $("#reback").click(function () {
        parent.Utils.hideEditDiv();
        //Utils.redirect("list.jsp");
    });
    //刷新事件
    $("#refreshBtn").click(function () {
        param.url=_serverAddress;
        DataGridUtils.refresh(param);
    })

    //回执
    $("#receipt").click(function () {
        var rowData = DataGridUtils.getRowDatas();//获取当前行数据
        DataGridUtils.viewMessageLog(rowData.seqNo);
    });

    //新增/修改事件
    $("#save").click(function () {
        var url = "/add";
        if (id != null)
            url = "/update";
        FormUtils.save("dataForm", url, true);
    });
    //申报事件
    $("#submit").click(function () {
        //页面加载设置表单需要验证
        Validator.setValidateParam("dataForm");
        if (!Validator.validate("dataForm")) return;
        var url = "/submit";
        FormUtils.save("dataForm", url);
    });

    //删除事件
    $("#remove").click(function () {
        removeData();
    });

    //删除事件（批量删除）
    $("#delete").click(function () {
        var url = _serverAddress + '/deleteByList';
        param.listUrl = _serverAddress;
        param.serverUrl = url;
        DataGridUtils.deleteGrid(param);
    });
    //搜索事件
    $("#search").click(function () {
        /*param.url = _serverAddress;
        DataGridUtils.refresh(param);*/
        initTable(false);
    });
    if (optype=="add"){
        $("#table-head").html("车辆备案-新增")
    } else if(optype=="edit" ){
        $("#table-head").html("车辆备案-修改")
    }else if(optype=="view" ){
        $("#table-head").html("车辆备案-查阅")
    }else if(optype=="change" ){
        $("#table-head").html("车辆备案-变更")
    }

    /**
     * 页签切换
     */
    $('#tab li').click(function () {
        var tab = $(this).children("a").attr("href").split("#")[1];
        param.gridId = tableName[tab];
        _serverAddress = _server + serverUrl[tab];
        switch (tab)
        {
            case 'cusTab':
                $(".hid").hide();

                break;
            case 'hisTab':
                $(".hid").hide();

                break;
            default:
                $(".hid").show();
                break;
        }
    });

});

//保存成功后执行
function __onAfterSave(formData) {
    parent.$("#refreshBtn").click();
    location.href = "add.jsp?id=" + formData.uid + "&optype=edit";
}


//查阅事件
function view(optype) {
    if (optype == "add") {
        Utils.showEditDiv(_jumpPage + "add.jsp?optype=" + optype);
    } else if (optype == "edit") {
        modify(optype);
    }
    else if (optype == "view") {
        modify(optype);
    } else if (optype == "change") {
        modify(optype);
    }
}


//删除单条数据
function removeData() {
    var rows = $('#' + param.gridId).bootstrapTable('getSelections');
    if (rows.length == 0) {
        layer.msg("未选择任何数据", {icon: 1, time: 1500});
        return;
    }
    if (checkChkStatus(rows[0].chkStatus) == false) {
        layer.msg("当前记录不可删除", {time: 2000});
        return;
    }
    var id = rows[0][param.idField];
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

function modify(optype) {

    if(optype == "change") {
        modalParam.area = [];
        var width = $(".container").width()+"px";
        modalParam.area.unshift(width,"550px");
        modalParam.url="change.jsp";
        modalParam.title="车辆信息变更";
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
//行双击
function __onDblClickRow(rowdata, rowobj) {
    Utils.showEditDiv(_jumpPage + "add.jsp?id=" + rowdata.uid + "&optype=view"+"&viewType="+param.gridId);
}


//回车事件绑定搜索按钮
$(document).keyup(function (event) {
    if (event.keyCode == 13) {
        param.url = _serverAddress;
        DataGridUtils.refresh(param);
    }
});

//设置日期格式，限制开始时间不能大于结束时间
function setCalFormat() {
    /************设置录入日期***************/
    //开始时间
    $('#decTimeStart').datepicker().on('changeDate', function (e) {
        var startTime = e.date;
        $('#decTimeEnd').datepicker('setStartDate', startTime);
    });
    //结束时间：
    $('#decTimeEnd').datepicker({}).on('changeDate', function (e) {
        var endTime = e.date;
        $('#decTimeStart').datepicker('setEndDate', endTime);
    });
    /************设置录入日期***************/
}

function SetValue(id, value) {
    $("#" + id).val(value);
}
//设置默认值
function SetDefault() {
    //设置日期
    var date = DateUtil.dateToStr("yyyy-MM-dd");
    $("#decTime").val(datetime);
    $("#dclTime").val(datetime);
    //$("#dclTime").val(date);
    //给搜索框赋值
    var now = new Date();
    var decTimeStart = new Date(now.getTime() - 1000 * 60 * 60 * 24 * 5);
    $('#decTimeStart').datepicker('setDate', decTimeStart);
    $('#decTimeEnd').datepicker('setDate', date);
    if(optype=="add"){
        SetValue("chgTmsCnt", "0"); //变更次数
        SetValue("validFlag", "0"); //有效标识
    }
}


function __onAfterGetLoginUserInfo(userinfo){
    SetValue("dclEr", userinfo.realName);
    SetValue("inputerCode", userinfo.inputerCode);
    if(optype == "add"){
        $("#masterCuscd").select2().val(userinfo.copEnt.customsCode).trigger("change");
        $("#areaCode").select2().val(userinfo.copEnt.areaCode).trigger("change");
    }
    if ($("#seqNo").val() == "") {
        //获取企业预录入编号
        Utils.getBillCode("applyId=001&areaCode="+userinfo.copEnt.areaCode+"&docType=A0504CopNO&serverType=C", "etpsPreentNo", "企业预录入编号获取失败");
        //获取申报端统一编号
        Utils.getBillCode("applyId=001&areaCode="+userinfo.copEnt.areaCode+"&docType=A0504SeqNO&serverType=C", "seqNo,dclPreentNo", "申报端统一编号获取失败");
    }
}



function initDropDown() {
    //获取字典的集合
    var dicData="CHK_STATUS,DCL_TYPE,PLATE_TYPE,OWNER_SYSTEM,DCL_TYPE";
    //获取参数代码表的集合
    var codesData="codStdCarType,codCusCustomsfec,codStdAreaCode";
    Utils.setDropDown(dicData,codesData);
}

//页面下拉初始化成功后执行
function __onAfterInitDropDown() {
    //变更
    if (optype == "change") {
        FormUtils.initForm(parent.data);
        $("#vehicleNo").attr("readonly", "readonly");
    }
    if (id != null)
        FormUtils.getData();
    else if(id==null && optype!=null)
        Utils.getLoginUserInfo();   //获取用户信息
}
//页面赋值成功后执行
function __onAfterLoad(data) {
    //查阅
    if (optype == "view") {
        $("#save,#submit").hide();
        FormUtils.setPageView();
    }
    //编辑
    if(optype=="edit"){
        $("#decTime").val(datetime);
    }
    if($("#dclTime").val()!=""){
        SetValue("dclTime",$("#dclTime").val().substring(0,10))
    }
}
function __onAfterSaveError(data) {
    FormUtils.initForm(data);
}
function jump() {
    layer.closeAll();
    Utils.showEditDiv(_jumpPage+"add.jsp?optype=change");
}


function initTable(isInit) {
    $.each(tabs, function (index, field) {
        var tab = field;
        param.gridId = tableName[tab];
        param.url=_server+serverUrl[tab];
        if (isInit){
            DataGridUtils.initGridByUrl(param);
        }else {
            DataGridUtils.refresh(param);
        }
    });
    param.gridId = "bscTable";
}
//查找location.href中的参数
/*
 function search(name) {
 var str=location.href; //取得整个地址栏
 var num=str.indexOf("?");
 var searchParam=str.substr(num+1);

 if (searchParam === undefined) return null;
 var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
 var r = searchParam.match(reg);
 if (r != null) return unescape(r[2]);
 return null;
 }*/
