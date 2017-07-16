//服务器地址
_serverAddress = _server + "/sas/sasFixedCardBsc/list";
//跳转页面
_jumpPage = baselocation + "/views/sas/sasFixedCardBsc/";
var id = Utils.search("id");
var optype = Utils.search("optype");
var viewType = Utils.search("viewType");
if(viewType=="cusTable"){
    _serverAddress = _server + "/sas/sasFixedCardCus/list";
}else if(viewType=="hisTable"){
    _serverAddress = _server + "/sas/sasFixedCardHis/list";
}
var datetime = DateUtil.dateToStr("yyyy-MM-dd HH:mm:ss");
//单据状态-审批通过
var success = "P";
//操作数组
var bscColumns = [
    {title: "单选", field: "select", radio: true, align: "center", width: "30"},
    {title: "长期卡备案号", field: "fixedCardRegno", align: "center", sortable: true},
    //{title: "IC卡物理卡号", field: "icPhysicsCode", align: "center", sortable: true},
    {title: "IC卡编号", field: "icCode", align: "left", sortable: true},
    {title: "领用企业海关代码", field: "useEtpsCode", align: "left", sortable: true},
    {title: "领用企业名称", field: "useEtpsName", align: "left", sortable: true},
    {title: "社会信用代码", field: "useEtpsSccd", align: "left", sortable: true},
    {title: "长期卡状态", field: "fixedCardStatus", align: "center", sortable: true},
    //{title: "IC卡类型", field: "icType", align: "cfenter", sortable: true,},
    {title: "有效日期", field: "validDate", align: "center", sortable: true,formatter:function(value, row, index){
    var dataTime = row.validDate;
    if (dataTime != "" && dataTime != null){
        dataTime = dataTime.split(" ")[0];
    }
    return dataTime;
    }},
    {title: "备案日期", field: "regDate", align: "left", sortable: true,formatter:function(value, row, index){
        var dataTime = row.regDate;
        if (dataTime != "" && dataTime != null){
            dataTime = dataTime.split(" ")[0];
        }
        return dataTime;
    }},
    {title: "操作时间", field: "decTime", align: "left", sortable: true},
    {title: "关区码", field: "masterCuscd", align: "center", sortable: true},
    //{title: "录入单位代码", field: "inputCopNo", align: "center", sortable: true},
    //{title: "录入单位名称", field: "inputCopName", align: "center", sortable: true},
    {title: "录入员名称", field: "inputerName", align: "center", sortable: true},
    //{title: "录入人代码", field: "inputerCode", align: "center", sortable: true},
    {title: "车牌号", field: "vehicleNo", align: "center", sortable: true},
    {title: "车辆分类", field: "vehicleSort", align: "center", sortable: true},
    //{title: "车辆类型", field: "vehicleTypecd", align: "center", sortable: true},
    //{title: "备注", field: "rmk", align: "center", sortable: true},
];
var cusColumns = [
    {title: "单选", field: "select", radio: true, align: "center", width: "30"},
    {title: "长期卡备案号", field: "fixedCardRegno", align: "center", sortable: true},
    {title: "IC卡编号", field: "icCode", align: "left", sortable: true},
    {title: "领用企业海关代码", field: "useEtpsCode", align: "left", sortable: true},
    {title: "领用企业名称", field: "useEtpsName", align: "left", sortable: true},
    {title: "社会信用代码", field: "useEtpsSccd", align: "left", sortable: true},
    {title: "长期卡状态", field: "fixedCardStatus", align: "center", sortable: true},
    {title: "有效日期", field: "validDate", align: "center", sortable: true,formatter:function(value, row, index){
        var dataTime = row.validDate;
        if (dataTime != "" && dataTime != null){
            dataTime = dataTime.split(" ")[0];
        }
        return dataTime;
    }},
    {title: "备案日期", field: "regDate", align: "left", sortable: true,formatter:function(value, row, index){
        var dataTime = row.regDate;
        if (dataTime != "" && dataTime != null){
            dataTime = dataTime.split(" ")[0];
        }
        return dataTime;
    }},
    {title: "操作时间", field: "decTime", align: "left", sortable: true},
    {title: "关区码", field: "masterCuscd", align: "center", sortable: true},
    {title: "录入员名称", field: "inputerName", align: "center", sortable: true},
    {title: "车牌号", field: "vehicleNo", align: "center", sortable: true},
    {title: "车辆分类", field: "vehicleSort", align: "center", sortable: true},
];
var hisColumns = [
    {title: "单选", field: "select", radio: true, align: "center", width: "30"},
    {title: "长期卡备案号", field: "fixedCardRegno", align: "center", sortable: true},
    {title: "IC卡编号", field: "icCode", align: "left", sortable: true},
    {title: "领用企业海关代码", field: "useEtpsCode", align: "left", sortable: true},
    {title: "领用企业名称", field: "useEtpsName", align: "left", sortable: true},
    {title: "社会信用代码", field: "useEtpsSccd", align: "left", sortable: true},
    {title: "长期卡状态", field: "fixedCardStatus", align: "center", sortable: true},
    {title: "有效日期", field: "validDate", align: "center", sortable: true,formatter:function(value, row, index){
        var dataTime = row.validDate;
        if (dataTime != "" && dataTime != null){
            dataTime = dataTime.split(" ")[0];
        }
        return dataTime;
    }},
    {title: "备案日期", field: "regDate", align: "left", sortable: true,formatter:function(value, row, index){
        var dataTime = row.regDate;
        if (dataTime != "" && dataTime != null){
            dataTime = dataTime.split(" ")[0];
        }
        return dataTime;
    }},
    {title: "操作时间", field: "decTime", align: "left", sortable: true},
    {title: "关区码", field: "masterCuscd", align: "center", sortable: true},
    {title: "录入员名称", field: "inputerName", align: "center", sortable: true},
    {title: "车牌号", field: "vehicleNo", align: "center", sortable: true},
    {title: "车辆分类", field: "vehicleSort", align: "center", sortable: true},
];
var param={};
param.columns = bscColumns;
param.gridId = 'bscTable';
param.idField = "uid";
param.url = _serverAddress;
//页面绑定事件
$(function () {

    if(optype==null){
        //初始化表格
        DataGridUtils.initGridByUrl(param);
    }
    initDropDown();
    Utils.initCalendar();
    setCalFormat();
    if (id == null) {
        SetDefault();
    }
    //返回事件
    $("#reback").click(function () {
        parent.Utils.hideEditDiv();
        //Utils.redirect("list.jsp");
    });
    //关闭弹出框
    $("#cancel").click(function () {
        var index = parent.layer.getFrameIndex(window.name);
        parent.layer.close(index);
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
        $("#validDate").val();
        $("#fixedCardStatus").val();
        $("#useEtpsSccd").val();
        var vehicleSort = $("#vehicleSort").val();
        if(vehicleSort != 1){
            var vehicleNo = $("#vehicleNo").val();
            var vehicleTypecd=$("#vehicleTypecd").val();
            if (vehicleNo.length == 0) {
                layer.msg("车牌号不能为空！", {

                    time: 1500
                });
                return false;
            }

            if (vehicleTypecd.length == 0) {
                layer.msg("请选择车辆类型！", {

                    time: 1500
                });
                return false;
            }
        }
        if (validDate.length == 0) {
            layer.msg("有效日期不能为空！", {

                time: 1500
            });
            return false;
        }
        if (fixedCardStatus.length == 0) {
            layer.msg("请选择长期卡状态！", {

                time: 1500
            });
            return false;
        }
        if (useEtpsSccd.length == 0) {
            layer.msg("社会信用代码不能为空！", {

                time: 1500
            });
            return false;
        }
        if (id != null)
            url = "/update";
        FormUtils.save("dataForm", url, true);
    });


    //新增/修改事件
    $("#saveChange").click(function () {
        var icCode = $("#icCode").val();
        var useEtpsName = $("#useEtpsName").val();
        var validDate = $("#validDate").val();
        var vehicleSort = $("#vehicleSort").val();
        if(vehicleSort != 1){
            var vehicleNo = $("#vehicleNo").val();
            var vehicleTypecd=$("#vehicleTypecd").val();
            if (vehicleNo.length == 0) {
                layer.msg("车牌号不能为空！", {

                    time: 1500
                });
                return false;
            }

            if (vehicleTypecd.length == 0) {
                layer.msg("请选择车辆类型！", {

                    time: 1500
                });
                return false;
            }
        }
        if (icCode.length == 0) {
            layer.msg("请输入IC卡编号！", {

                time: 1500
            });
            return false;
        }

        if (useEtpsName.length == 0) {
            layer.msg("请选择企业。", {

                time: 1500
            });
            return false;
        }

        if (validDate.length == 0) {
            layer.msg("请输入有效日期！", {

                time: 1500
            });
            return false;
        }

        if (vehicleSort.length == 0) {
            layer.msg("请选择车辆分类！", {

                time: 1500
            });
            return false;
        }
        var url = "/add";
        if (id != null)
            url = "/update";
        FormUtils.save("dataForm", url, true);
    });

    //删除事件
    $("#remove").click(function () {
        removeData();
    });
    //搜索事件
    $("#search").click(function () {
        param.url = _serverAddress;
        DataGridUtils.refresh(param);
    });
    if (optype=="add"){
        $("#table-head").html("长期卡备案-新增")
    } else if(optype=="edit" ){
        $("#table-head").html("长期卡备案-修改")
    }else if(optype=="view" ){
        $("#table-head").html("长期卡备案-查阅")
    }else if(optype=="change" ){
        $("#table-head").html("长期卡备案-变更")
    }

    /**
     * 页签切换
     */
    $('#tab li').click(function () {
        var tab = $(this).children("a").attr("href").split("#")[1];
        switch (tab)
        {
            case 'cusTab':
                $(".hid").hide();
                param.columns = cusColumns;
                param.gridId = 'cusTable';
                _serverAddress=_server + "/sas/sasFixedCardCus/list";
                param.url = _serverAddress;
                break;
            case 'hisTab':
                $(".hid").hide();
                param.columns = hisColumns;
                param.gridId = 'hisTable';
                _serverAddress=_server + "/sas/sasFixedCardHis/list";
                param.url = _serverAddress;
                break;
            default:
                $(".hid").show();
                param.columns = bscColumns;
                param.gridId = 'bscTable';
                _serverAddress = _server + "/sas/sasFixedCardBsc/list";
                param.url = _serverAddress;
                break;
        }
        DataGridUtils.initGridByUrl(param);
        //必须调用刷新方法，否则条件查询去除后将失效
        DataGridUtils.refresh(param);
    });
});

//保存成功后执行
function __onAfterSave(formData) {
    parent.$("#refreshBtn").click();
    //location.href = "edit.jsp?id=" + formData.uid + "&optype=edit";
    location.href = baselocation + "/views/sas/sasFixedCardBsc/list.jsp";
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
    // if (checkChkStatus(rows[0].chkStatus) == false) {
    //     layer.msg("当前记录不可删除", {time: 2000});
    //     return;
    // }
    var id = rows[0][param.idField];
    layer.confirm('是否移除该长期卡记录？', {btn: ['确定', '取消']}, function () {
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
    var rows = $('#' + param.gridId).bootstrapTable('getSelections');
    if (rows.length == 0) {
        layer.msg("未选择任何数据", {icon: 1, time: 1500});
        return;
    }

    if(optype == "change") {
        var id = rows[0][param.idField];
        Utils.showEditDiv(_jumpPage + "edit.jsp?id=" + id + "&optype=" + optype+"&viewType="+param.gridId);
        //Utils.showEditDiv(_jumpPage + "add.jsp?id=" + id + "&optype=" + optype+"&viewType="+param.gridId);
    }else{
        if (optype == "edit") {
            if (checkChkStatus(rows[0].chkStatus) != false) {
                layer.msg("当前记录不可修改", {time: 1500});
                return;
            }
        }
        var id = rows[0][param.idField];
        Utils.showEditDiv(_jumpPage + "edit.jsp?id=" + id + "&optype=" + optype+"&viewType="+param.gridId);
    }
}
//行双击
function __onDblClickRow(rowdata, rowobj) {
    Utils.showEditDiv(_jumpPage + "edit.jsp?id=" + rowdata.uid + "&optype=view");
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
    /************设置有效日期***************/
    //开始时间
    $('#validDateStart').datepicker().on('changeDate', function (e) {
        var startTime = e.date;
        $('#validDateEnd').datepicker('setStartDate', startTime);
    });
    //结束时间：
    $('#validDateEnd').datepicker({}).on('changeDate', function (e) {
        var endTime = e.date;
        $('#validDateStart').datepicker('setEndDate', endTime);
    });
    /************设置有效日期***************/
    /************设置备案日期***************/
    //开始时间
    $('#regDateStart').datepicker().on('changeDate', function (e) {
        var startTime = e.date;
        $('#regDateEnd').datepicker('setStartDate', startTime);
    });
    //结束时间：
    $('#regDateEnd').datepicker({}).on('changeDate', function (e) {
        var endTime = e.date;
        $('#regDateStart').datepicker('setEndDate', endTime);
    });
    /************设置备案日期***************/
}

function SetValue(id, value) {
    $("#" + id).val(value);
}
//设置默认值
function SetDefault() {
    //设置日期
    var date = DateUtil.dateToStr("yyyy-MM-dd");
    $("#decTime").val(datetime);
    //$("#dclTime").val(datetime);
    //$("#dclTime").val(date);
    //给搜索框赋值
    var now = new Date();
    var decTimeStart = new Date(now.getTime() - 1000 * 60 * 60 * 24 * 5);
    // $('#decTimeStart').datepicker('setDate', decTimeStart);
    // $('#decTimeEnd').datepicker('setDate', date);
    if(optype=="add"){
        SetValue("validFlag", "0"); //有效标识
        //给有效日期赋值
        var now = new Date();
        //DateUtil.dateToStr(now);
        now.setFullYear(now.getFullYear()+1);
        $("#validDate").datepicker('setDate', now);
    }
}


function __onAfterGetLoginUserInfo(userinfo){
    SetValue("inputerCode", userinfo.inputerCode);
    SetValue("masterCuscd", userinfo.copEnt.customsCode);
    SetValue("areaCode",userinfo.copEnt.areaCode);
    //初始化下拉框
    if(optype=="add"){
        if ($("#fixedCardRegno").val() == "") {
            //获取长期卡备案号
            Utils.getBillCode("applyId=001&areaCode="+userinfo.copEnt.areaCode+"&docType=A0504CopNO&serverType=C", "fixedCardRegno", "长期卡备案号获取失败");
            //获取单据编号
            Utils.getBillCode("applyId=001&areaCode="+userinfo.copEnt.areaCode+"&docType=A0504SeqNO&serverType=C", "seqNo", "单据编号获取失败");
        }
    }
}



function initDropDown() {
    //获取字典的集合
    var dicData="FIXED_CARD_STATUS,IC_TYPE";
    //获取参数代码表的集合
    var codesData="codStdCarSort,codStdCarType,codCusCustomsfec,codStdAreaCode";
    Utils.setDropDown(dicData,codesData);
}

//页面下拉初始化成功后执行
function __onAfterInitDropDown() {
    //变更
    if (optype == "change") {
        FormUtils.initForm( eval('(' + decodeURI(Utils.search("data")) + ')'));
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
        $("#save,#submit,#confirm").hide();
        FormUtils.setPageView();
    }
    //编辑
    if(optype=="edit"){
        $("#decTime").val(datetime);
        __onediting();
    }
    //变更
    if(optype=="change"){
        $("#confirm").hide();
        $("#decTime").val(datetime);
        changeCompany();
    }
}
function __onAfterSaveError(data) {
    FormUtils.initForm(data);
}
function getdata(data) {
    layer.closeAll();
    Utils.showEditDiv(encodeURI(_jumpPage+"edit.jsp?optype=change&data="+encodeURI(JSON.stringify(data))));
}

function changeCompany() {
    $(".readonly").attr("readonly", true);
    $(".readyonly").prop("disabled", true);
    $(".readToTwo").prop("disabled", true);
    $(".read").unbind("focus");
    $(".read").attr("readonly", true);
    $("textarea").attr("readonly", true);
    $("span").attr("readonly", true);
}

function __onediting(){
    $(".readonly").attr("readonly", true);
    $(".readyonly").prop("disabled", true);
    $(".readToOne").attr("readonly", true);
    $(".read").unbind("focus");
    $(".read").attr("readonly", true);
    $("textarea").attr("readonly", true);
    $("span").attr("readonly", true);
}
$("#company").click(function(){
    modalParam.area = [];
    var width = $(".container").width()+"px";
    modalParam.area.unshift(width,"623px");
    modalParam.url="company.jsp";
    modalParam.title="选择企业";
    Utils.showModalDialog(modalParam);
});

$("#makeCard").click(function(){
    modalParam.area = [];
    modalParam.area.unshift("500px","105px");
    modalParam.url="makeCard.jsp";
    modalParam.title="IC卡编号输入";
    Utils.showModalDialog(modalParam);
});

function company(data){
    var tradeCode = data["tradeCode"];
    var entName = data["entName"];
    var copGbCode = data["copGbCode"];
    $("#useEtpsCode").val(tradeCode);
    $("#useEtpsName").val(entName);
    $("#useEtpsSccd").val(copGbCode);
}

function icCode(Code){
    $("#icCode").val(Code);
}

$("#vehicleSort").change(function(){
    //alert($("#vehicleSort").val());
   if($("#vehicleSort").val() == 1){
       $("#vehicleNo").val("");
       $("#vehicleNo").attr("readonly",true);
       $("#vehicleTypecd").val("");
       $("#vehicleTypecd").prop("disabled", true);
    }else{
       $("#vehicleNo").attr("readonly",false);
       $("#vehicleTypecd").prop("disabled", false);
   }
});

$("#confirm").click(function () {
    layer.confirm('是否将该记录移至历史表？', {btn: ['确定', '取消']},function () {
        var url="/move";
        FormUtils.save("dataForm", url, true);
    })
});