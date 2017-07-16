//服务器地址
_serverAddress = _server + "/ems/emsPutrecBsc/list";
//跳转页面
_jumpPage = baselocation + "/views/ems/emsPutrecBsc/";

//表体类型
var listType = ["img", "exg", "bom", "file"];
var seqNo = $("#seqNo").val();
var emsNo = $("#emsNo").val();
var chgTmsCnt = $("#chgTmsCnt").val();
var optype = Utils.search("optype");
var dclTypecd = Utils.search("dclTypecd"); //申报类型
var emsTypecd = Utils.search("emsTypecd"); //账册类型
var viewType = Utils.search("viewType"); //账册类型
var id = Utils.search("id");
/**
 * 即时加载
 */
$(function () {
    if (emsTypecd == "1") {//加贸账册隐藏场地代码，联网企业备案号必填
        $(".hidArea").hide();
        $("#netwkEtpsArcrpNo").attr("isValidate", "true");
        $("#netwkEtpsArcrpNo").attr("notempty", "true");
    }
    else {
        $("#netwkEtpsArcrpNo_span").hide();
        $("#netwkEtpsArcrpNo").attr("readonly", "readonly");
    }
    //设置表头标题
    setHeadTitle();
    //初始化日历控件
    Utils.initCalendar();
    //设置账册结束有效日期大于等于今天
    var startTime = DateUtil.dateToStr("yyyy-MM-dd");
    $('#finishValidDate').datepicker('setStartDate', startTime).on('hide', function (e) {
        if ($('#dataForm').data('bootstrapValidator') == undefined) return;
        $('#dataForm').data('bootstrapValidator').updateStatus('finishValidDate', 'NOT_VALIDATED', null).validateField('finishValidDate');
    });
    //初始化下拉
    initDropDown();
    //查阅
    if (optype == "view") {
        FormUtils.setPageView();
        $(".chg").hide();
        $("#save").hide();
        $("#declare").hide();
        $.each(listType, function (index, field) {
            if (field != "") {
                $("#" + field + "Add").hide();
                $("#" + field + "Edit").hide();
                $("#" + field + "Delete").hide();
                $("#" + field + "PreCopy").hide();
            }
        });
    }
    //新增时隐藏表体按钮
    if (id == null) {
        $.each(listType, function (index, field) {
            if (field != "") {
                $("#" + field + "Toolbar").hide();
            }
        });
    }
    //绑定事件
    BindEvent();
    //新增页面设置默认值
    if (id == null) {
        SetDefault();
    }
    SetDisabled();
})
/**
 * 弹出窗口
 */
var modalParam = {};
var width = $(".container").width() + "px";
modalParam.area = [];
modalParam.area.unshift(width, "520px");
function showPage(title, url, optype) {
    seqNo = $("#seqNo").val();
    if (optype == "add" && seqNo == "") {
        layer.msg("预录入统一编号不存在，不能新增！", {time: 1500});
        return;
    }
    modalParam.title = title;
    modalParam.url = url;
    Utils.showModalDialog(modalParam);
}
/**
 *绑定事件
 */
function BindEvent() {
    /********************返回事件********************/
    $("#reback").click(function () {
        var emsTypecd = Utils.search("emsTypecd");
        if (emsTypecd == null)
            emsTypecd = $("#emsTypecd").val();
        //Utils.redirect("list.jsp?busType="+emsTypecd);
        parent.Utils.hideEditDiv();
    });
    /****************绑定保存事件*************************/
    $("#save").click(function () {
        $("select").removeAttr("disabled");
        $("input").removeAttr("disabled");
        var url = "/add";
        if (optype == "modify" && id != null)
            url = "/update?uid=" + id;
        FormUtils.save("dataForm", url, true);
    });
    /****************绑定申报事件*************************/
    $("#declare").click(function () {
        //设置表单需要验证
        Validator.setValidateParam("dataForm");
        if (!Validator.validate("dataForm")) return;
        _serverAddress = _server + "/ems/emsPutrecBsc/list";
        var id = Utils.search("id");
        var formData = $("#dataForm").serializeForm();
        $.ajax({
            url: _serverAddress + "/declare?uid=" + id,
            type: 'post',
            dataType: 'json',
            data: formData,
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (result) {
                if (result.code == 1) {
                    layer.msg(result.message, {time: 1500}, function () {
                        var emsTypecd = Utils.search("emsTypecd");
                        if (emsTypecd == null)
                            emsTypecd = $("#emsTypecd").val();
                        Utils.redirect(_jumpPage + "list.jsp?busType=" + emsTypecd);
                    });
                }
                else {
                    layer.msg(result.message, {time: 1500}, function () {
                        location.reload();
                    });

                }
            },
            error: function (result) {
                layer.msg(result.responseText, function () {
                });
            }
        });
    });
    /**
     * 申报单位失去焦点事件,申报单位填写完后自动带出申报单位信用代码、申报单位名称
     */
    $("#dclEtpsno").blur(function () {
        var dclEtpsno = $("#dclEtpsno").val();
        if (dclEtpsno == "") {
            $("#dclEtpsSccd").val("");
            $("#dclEtpsNm").val("");
            return;
        }
        var copEntUrl = _server + "/cop/copEnt/list/getCopEntInfo";
        $.ajax({
            url: copEntUrl,
            type: 'get',
            dataType: 'json',
            data: {"appId": $("#appId").val(), "tradeCode": dclEtpsno},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (result) {
                if (result.code == "1") {
                    if (result.data && result.data.length > 0) {
                        $("#dclEtpsSccd").val(result.data[0].copGbCode);
                        $("#dclEtpsNm").val(result.data[0].entName);
                    }
                }
            },
            error: function (result) {
                $("#dclEtpsSccd").val("");
                $("#dclEtpsNm").val("");
            }
        });

    });
    var titleParam = {img: "料件", exg: "成品", bom: "单损耗", file: "随单附证"};
    var urlParam = {
        img: "../emsPutrecImg/edit.jsp",
        exg: "../emsPutrecExg/edit.jsp",
        bom: "../emsPutrecUcnsDt/edit.jsp",
        file: "../emsPutrecAcmpFormDt/edit.jsp"
    };
    $.each(listType, function (index, field) {
        if (field != "") {
            //绑定刷新事件
            $("#" + field + "Refresh").click(function () {
                refreshGrid(field);
            });
            //绑定查阅事件
            $("#" + field + "View").click(function () {
                var rows = $('#' + field + "Table").bootstrapTable('getSelections');
                if (rows.length == 0) {
                    layer.msg("请选择要查阅的记录", {time: 1500});
                    return;
                }
                var url = urlParam[field];
                var uid = rows[0].uid;
                url += "?optype=view&id=" + uid;
                showPage(titleParam[field] + "-查阅", url, "view");
            });
            //绑定新增事件
            $("#" + field + "Add").click(function () {
                var url = urlParam[field];
                url += Utils.stringFormat("?optype=add&seqNo={0}&emsNo={1}&chgTmsCnt={2}&etpsPreentNo={3}", $("#seqNo").val(), $("#emsNo").val(), $("#chgTmsCnt").val(), $("#etpsPreentNo").val());
                if (field == "file") {
                    modalParam.area[1] = "85%";
                }
                showPage(titleParam[field] + "-新增", url, "add");
            });
            //绑定修改事件
            $("#" + field + "Edit").click(function () {
                var rows = $('#' + field + "Table").bootstrapTable('getSelections');
                if (rows.length == 0) {
                    layer.msg("请选择要修改的记录", {time: 1500});
                    return;
                }
                var url = urlParam[field];
                var uid = rows[0].uid;
                url += Utils.stringFormat("?optype=modify&seqNo={0}&id={1}", $("#seqNo").val(), uid);
                showPage(titleParam[field] + "-编辑", url, "modify");
            });
            //删除事件绑定
            $("#" + field + "Delete").click(function () {
                var param = {};
                param.gridId = field + "Table";
                _serverAddress = GetUrlByType(field);
                param.serverUrl = _serverAddress + '/deleteByList';
                DataGridUtils.deleteGrid(param);
            });
            //绑定复制当前商品事件
            if (field == "img" || field == "exg") {
                $("#" + field + "PreCopy").click(function () {
                    var rows = $('#' + field + "Table").bootstrapTable('getSelections');
                    if (rows.length == 0) {
                        layer.msg("请选择要复制的商品", {time: 1500});
                        return;
                    }
                    var url = GetUrlByType(field) + "/copyGds";
                    var uid = rows[0].uid;
                    $.ajax({
                        url: url,
                        type: 'post',
                        dataType: 'json',
                        data: {"appId": $("#appId").val(), "id": uid},
                        xhrFields: {
                            withCredentials: true
                        },
                        crossDomain: true,
                        success: function (result) {
                            if (result.code == "1") {
                                layer.msg("复制成功", {time: 1500});
                                refreshGrid(field);
                            }
                            else {
                                layer.msg(result.message, {time: 1500});
                            }
                        },
                        error: function (result) {
                            layer.msg(result.message, {time: 1500});
                        }
                    });
                });
            }
            //绑定变更事件
            $("#" + field + "Chg").click(function () {
                var seqNo = $("#seqNo").val();
                if (seqNo == "") {
                    layer.msg("预录入统一编号不能为空！", {time: 1500});
                    return;
                }
                var emsNo = $("#emsNo").val();
                if (emsNo == "") {
                    layer.msg("账册编号不能为空", {time: 1500});
                    return;
                }
                var mtpckType = "";
                switch (field) {
                    case "img":
                        mtpckType = "Img";
                        break;
                    case "exg":
                        mtpckType = "Exg";
                        break;
                    case "bom":
                        mtpckType = "UcnsDt";
                        break;
                }
                var url = Utils.stringFormat("selectEmsCusDt.jsp?mtpckType={0}&seqNo={1}&chgTmsCnt={2}", mtpckType, seqNo, $("#chgTmsCnt").val());
                if (field == "bom")
                    url = Utils.stringFormat("selectEmsCusUcnsDt.jsp?mtpckType={0}&seqNo={1}&chgTmsCnt={2}", mtpckType, seqNo, $("#chgTmsCnt").val());
                modalParam.area[1] = "600px";
                showPage("账册" + titleParam[field] + "-选择", url, "modify");
            });
        }
    });

}
/**
 * 设置默认值
 */
function SetDefault() {
    //设置日期
    var date = DateUtil.dateToStr("yyyy-MM-dd hh:mm:ss");
    $("#dclTime").val(date);
    $("#decTime").val(date);
}
/**
 * 标签设置值
 */
function SetValue(id, value) {
    $("#" + id).val(value);
}
/**
 * 设置禁用
 * @returns
 */
function SetDisabled() {
    $("#emsTypecd").prop("disabled", true);
    $("#emapvStucd").prop("disabled", true);
    $("#dclTypecd").prop("disabled", true);
    $("#emsExeMark").prop("disabled", true);
}
/*
 * 初始化下拉控件
 */
function initDropDown() {
    //获取字典的集合
    var dicData = "CHK_STATUS,DCL_ETPS_TYPE,DCL_TYPE,EMS_TYPE,UCNS_DCL_SEGC,EMS_EXE_MARK";
    //获取参数代码表的集合
    var codesData = "codCusCustomsfec,codStdAreaCode";
    Utils.setDropDown(dicData, codesData);
}
/*
 * 表体数据保存后刷新列表
 */
function refreshGrid(tableId) {
    var param = {};
    param.gridId = tableId + "Table";
    var url = GetUrlByType(tableId);
    if (url != "")
        DataGridUtils.refresh(param);
}
/*
 * 根据类型设置相应的Url
 */
function GetUrlByType(type) {
    var url = "";
    switch (type) {
        case "img":
            url = _server + "/ems/emsPutrecImg/list";//料件
            break;
        case "exg":
            url = _server + "/ems/emsPutrecExg/list";//成品
            break;
        case "bom":
            url = _server + "/ems/emsPutrecUcnsDt/list";//单损耗
            break;
        case "file":
            url = _server + "/ems/emsPutrecAcmpFormDt/list";//随单附证
            break;
        default:
            url = _server + "/ems/emsPutrecBsc/list";//表头
            break;
    }
    return url;
}
/**
 * 设置表头标题
 */
function setHeadTitle() {
    var title = emsTypecd == "1" ? "加贸账册预录入申报表头" : "加工账册预录入申报表头";
    $("#headTitle").html(title);
}