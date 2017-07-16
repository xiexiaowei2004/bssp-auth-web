//服务器地址
_serverAddress = _server + "/dcr/dcrChgoffBsc/list";
//跳转页面
_jumpPage = baselocation + "/views/dcr/dcrChgoffBsc/";

var docType = parent.docType;
var busType = parent.busType;
var invtLtUrl = "/dcr/dcrChgoffInvtLt/list";
var imgUrl = "/dcr/dcrChgoffImg/list";
var exgUrl = "/dcr/dcrChgoffExg/list";
var fileUrl = "/dcr/dcrAdjaccAcmpFormDt/list";
var tab = parent.tab;
if (tab == "cusTab"){
    _serverAddress = _server + "/dcr/dcrChgoffCusBsc/list";
    invtLtUrl = "/dcr/dcrChgoffCusInvtLt/list";
    imgUrl = "/dcr/dcrChgoffCusImg/list";
    exgUrl = "/dcr/dcrChgoffCusExg/list";
    fileUrl = "/dcr/dcrAdjaccCusAcmpFormDt/list";
}else if (tab == "hisTab"){
    _serverAddress = _server + "/dcr/dcrChgoffHisBsc/list";
    invtLtUrl = "/dcr/dcrChgoffHisInvtLt/list";
    imgUrl = "/dcr/dcrChgoffHisImg/list";
    exgUrl = "/dcr/dcrChgoffHisExg/list";
    fileUrl = "/dcr/dcrAdjaccHisAcmpFormDt/list";
}
$(function () {
    //初始化日历控件
    Utils.initCalendar();
    //初始化下拉
    initDropDown();
    //控制截止日期只能大于开始日期
    setCalFormat();
    //绑定事件
    BindEvent();

    $("#headTitle").html("账册报核申请表头");
});
//初始化列表控件
function initGrid(data) {
    //清单
    var invtLtColumns = [
        {title: "全选", field: "select", radio: true, align: "center", valign: "middle"},
        {title: "序号", field: "lNo", align: "center", sortable: true},
        {title: "报核清单编号", field: "bondInvtNo", align: "center", sortable: true},
        {title: "进出口标志", field: "ieFlag", align: "center", sortable: true},
        {title: "申报类型", field: "dclTypecd", align: "center", sortable: true},
        {title: "修改标志", field: "modfMarkcd", align: "center", sortable: true},
        {title: "备注", field: "rmk", align: "left", sortable: true}
    ];
    //料件
    var imgColumns = [
        {title: "全选", field: "select", radio: true, align: "center", valign: "middle"},
        {title: "序号", field: "gdsSeqno", align: "center", sortable: true},
        {title: "料件备案序号", field: "gNo", align: "center", sortable: true},
        {title: "料号", field: "copGNo", align: "left", sortable: true},
        {title: "商品编码", field: "codeTs", align: "center", sortable: true},
        {title: "商品名称", field: "gName", align: "left", sortable: true},
        {title: "申报计量单位", field: "unit", align: "center", sortable: true},
        {title: "实际剩余数量", field: "actlRemainQty", align: "center", sortable: true}
    ];
    //成品
    var exgColumns = [
        {title: "全选", field: "select", radio: true, align: "center", valign: "middle"},
        {title: "序号", field: "gdsSeqno", align: "center", sortable: true},
        {title: "料件备案序号", field: "gNo", align: "center", sortable: true},
        {title: "料号", field: "copGNo", align: "left", sortable: true},
        {title: "商品编码", field: "codeTs", align: "center", sortable: true},
        {title: "商品名称", field: "gName", align: "left", sortable: true},
        {title: "申报计量单位", field: "unit", align: "center", sortable: true},
        {title: "实际剩余数量", field: "actlRemainQty", align: "center", sortable: true}
    ];
    //附件
    var fileColumns = [
        {title: "全选", field: "select", radio: true, align: "center", valign: "middle"},
        {title: "随附单证序号", field: "acmpFormSeqno", align: "center", sortable: true},
        {title: "随附单证类型", field: "acmpFormTypecd", align: "center", sortable: true},
        {title: "随附单证编号", field: "acmpFormno", align: "center", sortable: true},
        {title: "固定编号", field: "fixdNo", align: "center", sortable: true},
        {title: "随附单证文件名称", field: "acmpFormFileNm", align: "left", sortable: true},
        {title: "附件大小", field: "acmpFormFileSize", align: "center", sortable: true}
    ];
    var urlParam = Utils.stringFormat("?seqNo={0}", data.seqNo);
    if (tab == "hisTab"){
        urlParam += "&chgTmsCnt=" + data.chgTmsCnt;
    }
    var param = {};
    param.showToggle = false;
    param.showExport = false;
    param.showColumns = false;
    //清单
    param.columns = invtLtColumns;
    param.gridId = "invtLtTable";
    param.toolbar = "invtLtToolbar";
    param.url = _server + invtLtUrl + urlParam;
    DataGridUtils.initGridByUrl(param);
    //料件
    param.columns = imgColumns;
    param.gridId = "imgTable";
    param.toolbar = "imgToolbar";
    param.url = _server + imgUrl + urlParam;
    DataGridUtils.initGridByUrl(param);
    //成品
    param.columns = exgColumns;
    param.gridId = "exgTable";
    param.toolbar = "exgToolbar";
    param.url = _server + exgUrl + urlParam;
    DataGridUtils.initGridByUrl(param);
    //附件
    param.columns = fileColumns;
    param.gridId = "fileTable";
    param.toolbar = "fileToolbar";
    param.url = _server + fileUrl + urlParam;
    DataGridUtils.initGridByUrl(param);
}

var emsNoConstant = "";
//绑定事件
function BindEvent() {
    /********************返回事件********************/
    $("#reback").click(function () {
        parent.Utils.hideEditDiv();
    });
    /****************绑定保存事件*************************/
    $("#save").click(function () {
        var uid = $("#uid").val();
        if (uid == "") {
            FormUtils.save("dataForm", "/add", true);
        } else {
            FormUtils.save("dataForm", "/update", false);
        }
    });
    /********************绑定提交事件***************************/
    $("#submit").click(function () {
        //设置验证
        Validator.setValidateParam("dataForm");
        if (!Validator.validate("dataForm")) return;
        FormUtils.save("dataForm", "/submit", true);
    });
    /***********************表体绑定事件*******************************/
        //表体事件绑定
    var buttons = ["invtLt", "img", "exg", "file"];
    var titleParam = {invtLt: "清单", img: "料件", exg: "成品", file: "随附单证"};
    var urlParam = {invtLt: "../dcrChgoffInvtLt/edit.jsp", img: "../dcrChgoffImg/edit.jsp", exg: "../dcrChgoffExg/edit.jsp", file: "../dcrAdjaccAcmpFormDt/edit.jsp"};
    var serverUrl = {invtLt: invtLtUrl, img: imgUrl, exg: exgUrl, file: fileUrl};
    $.each(buttons, function (index, field) {
        var id = field;
        var height = "350px";
        if (id == "invtLt" || id=="file"){
            height = "280px";
        }
        if (id != "") {
            var title = titleParam[id] + "信息";
            //绑定新增事件
            $("#" + id + "Add").click(function () {
                var param = "&chgTmsCnt=" + $("#chgTmsCnt").val() + "&emsNo=" + $("#emsNo").val();
                if (id == "invtLt") {
                    param += "&dclTypecd=" + $("#chgoffTypecd").val();
                }
                showPage(id, title , urlParam[id] + "?optype=add" + param,height);
            });
            //绑定修改事件
            $("#" + id + "Edit").click(function () {
                detailsPage(id, title, urlParam[id] + "?optype=modify",height);
            });
            $("#" + id + "View").click(function () {
                detailsPage(id, title, urlParam[id] + "?optype=view",height);
            });
            $("#" + id + "Delete").click(function () {
                removeDate(id, serverUrl[id]);
            });
            $("#" + id + "Refresh").click(function () {
                refreshGrid(id, serverUrl[id]);
            });
        }
    });
    //清单 选取按钮
    $("#invtLtCheck").click(function () {
        invtLtCheck();
    });
    //料件 核算按钮
    $("#imgCheck").click(function () {
        imgCheck();
    });

    /***********************主表绑定失去焦点事件*******************************/
    var url = "";
    switch (busType) {
        case "jg":
            url = _server + "/ems/emsCusBsc/list/selectByEmsNo?emsTypecd=2";    // 2-加工
            break;
        case "jm":
            url = _server + "/ems/emsCusBsc/list/selectByEmsNo?emsTypecd=1";    // 1-加贸
            break;
        default:
            url = _server + "/ems/emsCusBsc/list/selectByEmsNo?emsTypecd=2";
            break;
    }
    // 账册编码绑定事件
    $("#emsNo").blur(function () {
        var emsNo = $(this).val();
        if (emsNo == "") {
            return;
        }
        if (emsNo == emsNoConstant){
            return;
        }
        $.ajax({
            url: url,
            type: 'post',
            dataType: 'json',
            data: {"emsNo": emsNo, "appId": $("#appId").val()},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (result) {
                if (result.code == 1) {
                    var data = result.data;
                    SetValue("bizopEtpsno", data.bizopEtpsno);
                    SetValue("bizopEtpsSccd", data.bizopEtpsSccd);
                    SetValue("bizopEtpsNm", data.bizopEtpsNm);
                    SetValue("rcvgdEtpsno", data.rcvgdEtpsno);
                    SetValue("rvsngdEtpsSccd", data.rvsngdEtpsSccd);
                    SetValue("rcvgdEtpsNm", data.rcvgdEtpsNm);
                    SetValue("etpsPreentNo", data.etpsPreentNo);
                    $.ajax({
                        url: _serverAddress + "/getChgTmsCnt",
                        type: 'post',
                        dataType: 'json',
                        data: {"emsNo":emsNo,"appId": $("#appId").val()},
                        xhrFields: {
                            withCredentials: true
                        },
                        crossDomain: true,
                        success: function (result) {
                            if (result.code == 1){
                                SetValue("chgTmsCnt",result.data);
                            }else {
                                SetValue("emsNo","");
                                layer.msg(result.message,{time:1500});
                            }
                        },
                        error: function (result) {
                            layer.msg(result.message,{time:1500});
                        }
                    });
                } else {
                    layer.msg("账册编号不存在", {time: 1500});
                }
            },
            error: function (result) {

            }
        });
    });
    // 申报单位代码绑定事件
    $("#dclEtpsno").blur(function () {
        var tradeCode = $(this).val();
        if (tradeCode == "") {
            return;
        }
        $.ajax({
            url: _server + "/cop/copEnt/list/getCopEnt",
            type: 'post',
            dataType: 'json',
            data: {"tradeCode": tradeCode, "appId": $("#appId").val()},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (result) {
                if (result.code == 1) {
                    var data = result.data;
                    SetValue("dclEtpsSccd", data.copGbCode);
                    SetValue("dclEtpsNm", data.entName);
                } else {
                    layer.msg("申报单位代码不存在");
                }
            },
            error: function (result) {

            }
        });
    });
}
//弹出窗口
var modelParam = {};
modelParam.area = [];
var width = $(".container").width()+"px";
function showPage(pageId, title, url,height) {
    modelParam.area.unshift(width,height);
    var uid = $("#uid").val();
    if (uid == "") {
        layer.alert("表头尚未保存，不能新增！");
        return;
    }
    modelParam.url = url;
    modelParam.title = title;
    modelParam.id = pageId;
    var seqNo = $("#seqNo").val();
    if (url.indexOf("id") == -1) {
        modelParam.url += "&id=" + seqNo;
    }
    modelParam.url += "&tab="+tab;
    Utils.showModalDialog(modelParam);
}

function detailsPage(pageId, title, url,height) {
    var rows = $('#' + pageId + "Table").bootstrapTable('getSelections');
    if (rows.length == 0) {
        layer.msg("请选择记录", {time: 1500});
        return;
    }
    if (rows.length > 1) {
        layer.msg("只能选择一行记录", {time: 1500});
        return;
    }
    var uid = rows[0]["uid"];
    showPage(pageId, title, url + "&id=" + uid,height);
}

// url 对应后台路径
function removeDate(pageId, url) {
    var uid = $("#uid").val();
    if (uid == "") {
        layer.alert("表头尚未保存，不能新增！");
        return;
    }
    url = _server + url + '/deleteByList';
    param.serverUrl = url;
    param.idField = "uid";
    param.gridId = pageId + "Table";
    DataGridUtils.deleteGrid(param);
}

// url 对应后台路径
function refreshGrid(pageId, url) {
    var urlParam = Utils.stringFormat("?seqNo={0}", $("#seqNo").val());
    if (tab == "hisTab"){
        urlParam += "&chgTmsCnt=" +  $("#chgTmsCnt").val();
    }
    param.serverUrl = _server + url + urlParam;
    param.idField = "uid";
    param.gridId = pageId + "Table";
    DataGridUtils.refresh(param);
}

// 清单 选取按钮
function invtLtCheck() {
    var uid = $("#uid").val();
    if (uid == "") {
        layer.msg("表头尚未保存，不能选取！");
        return;
    }
    var emsNo = $("#emsNo").val();
    if (emsNo == "") {
        layer.msg("账册编号不能为空");
        return;
    }
    var chgoffDueTime = $("#chgoffDueTime").val();
    if (chgoffDueTime == "") {
        layer.msg("报核截止日期不能为空");
        return;
    }
    var chgTmsCnt = $("#chgTmsCnt").val();
    if (chgTmsCnt == "") {
        layer.msg("报核次数不能为空", {time: 1500});
        return;
    }
    // modelParam.url="../../ems/bondInvtBsc/chooseList.jsp?putrecNo="+emsNo+"&invtDclTime="+chgoffDueTime+"&seqNo="+$("#seqNo").val()
    //     + "&chgTmsCnt="+$("#chgTmsCnt").val()+"&dclTypecd="+$("#chgoffTypecd").val();
    // modelParam.title="清单选取页面";
    // modelParam.id="invtLt";
    // Utils.showModalDialog(modelParam);
    $.ajax({
        url: _server + "/dcr/dcrChgoffInvtLt/list/getInvDataList",
        type: 'post',
        dataType: 'json',
        data: {
            "emsNo": emsNo, "chgoffDueTime": chgoffDueTime, "seqNo": $("#seqNo").val(), "chgTmsCnt": chgTmsCnt,
            "dclTypecd": $("#chgoffTypecd").val(), "appId": $("#appId").val()
        },
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (result) {
            if (result.code == 1) {
                $("#invtLtRefresh").click()
            } else {
                layer.msg(result.message, {time: 1500});
            }
        },
        error: function (result) {
            layer.msg(result.message);
        }
    });
}

// 料件 核算按钮
function imgCheck() {
    var uid = $("#uid").val();
    if (uid == "") {
        layer.alert("表头尚未保存，不能核算！");
        return;
    }
    var emsNo = $("#emsNo").val();
    if (emsNo == "") {
        layer.msg("账册编号不能为空");
        return;
    }
    var chgTmsCnt = $("#chgTmsCnt").val();
    if (chgTmsCnt == "") {
        layer.msg("报核次数不能为空");
        return;
    }
    $.ajax({
        url: _server + "/dcr/dcrChgoffImg/list/getEmsCusImgByList",
        type: 'post',
        dataType: 'json',
        data: {"emsNo": emsNo, "seqNo": $("#seqNo").val(), "chgTmsCnt": chgTmsCnt, "appId": $("#appId").val()},
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (result) {
            if (result.code == 1) {
                $("#imgRefresh").click()
            } else {
                layer.msg(result.message, {time: 1500});
            }
        },
        error: function (result) {
            layer.msg(result.message);
        }
    });
}

//设置默认值
function SetDefault() {
    //设置日期
    var date = DateUtil.dateToStr("yyyy-MM-dd");
    var dateTime = DateUtil.dateToStr("yyyy-MM-dd HH:mm:ss");
    SetValue("decTime", dateTime);	// 录入日期
    SetValue("chgoffDclTime", date);	// 申报日期
    SetDrop("chgoffTypecd", 1);  //申报类型 1-正常申报
    SetValue("chgTmsCnt",1);    // 报核次数 默认为1
    if (busType != null) {
        SetValue("busType", busType);
        // if (busType == "jm"){
        //     $("#exgTab").hide();
        //     $("#tab a[href='#exgTab']").hide();
        // }
    }

    Utils.getLoginUserInfo();   // 获取当前用户信息
}

// 当前信息获取回调
function __onAfterGetLoginUserInfo(loginuser) {
    SetValue("inputEtpsSccd", loginuser.copGbCode);
    if ($("#seqNo").val() == "") {
        var billParam = "applyId=001&areaCode=" + loginuser.areaCode + "&docType=" + docType + "SeqNO&serverType=C";
        Utils.getBillCode(billParam, "seqNo", "预录入统一编号获取失败");
    }
}


function __onAfterLoad(data) {
    initGrid(data);
    emsNoConstant = data.emsNo;
}

function SetValue(id, value) {
    $("#" + id).val(value);
}
function SetDrop(id, value) {
    $("#" + id).select2().val(value).trigger("change");
}

function __onDblClickRow(rowdata, rowobj) {
    var tableId = rowobj.parent().parent().attr("id");
    if (tableId == "invtLtTable") {
        showPage('invtLt', '清单-查阅', '../dcrChgoffInvtLt/edit.jsp?optype=view&id=' + rowdata.uid,"280px");
    } else if (tableId == "imgTable") {
        showPage('img', '料件-查阅', '../dcrChgoffImg/edit.jsp?optype=view&id=' + rowdata.uid,"350px");
    } else if (tableId == "exgTable") {
        showPage('exg', '成品-查阅', '../dcrChgoffExg/edit.jsp?optype=view&id=' + rowdata.uid,"350px");
    } else {
        showPage('file', '附件-查阅', '../dcrAdjaccAcmpFormDt/edit.jsp?optype=view&id=' + rowdata.uid,"280px");
    }
}

/**
 *
 * @param data
 * @description 回调用于跳转
 */
function __onAfterSave(data) {
    parent.$("#refreshBtn").click();
    if (data == null) {
        return;
    }
    if (data.chkStatus == "D") {
        parent.Utils.hideEditDiv();
    } else {
        location.href=_jumpPage + "edit.jsp?id=" + data.uid;
    }
}

/**
 *
 * @param data
 * @description 保存错误，回调
 */
function __onAfterSaveError(data) {
    parent.$("#refreshBtn").click();
    if (data != null) {
        location.href=_jumpPage + "edit.jsp?id=" + data.uid;
    }
}

/**
 *
 * @param params
 * @description 刷新从表页面
 */
function subPageRefresh(params) {
    DataGridUtils.refresh(params);
}

/**
 * @description 初始化下拉
 */
function initDropDown() {
    /**
     * CHGOFF_TYPECD 申报类型
     */
    Utils.setCodesDropDown("CHGOFF_TYPECD");
}

/**
 *
 * @param params
 * @description 下拉回调
 */
function __onAfterLoadCodes(data) {
    //新增页面设置默认值
    var id = Utils.search("id");
    if (id == null) {
        SetDefault();
    } else {
        FormUtils.getData();
    }
    $("#exgTab").hide();
    $("#tab a[href='#exgTab']").hide();
}

/**
 * @description 控制截止日期只能大于开始日期
 */
function setCalFormat() {
    //报核开始日期
    $('#chgoffBeginTime').datepicker().on('changeDate', function (e) {
        var startTime = e.date;
        $('#chgoffDueTime').datepicker('setStartDate', startTime);
    });
    //报核截止日期
    $('#chgoffDueTime').datepicker({}).on('changeDate', function (e) {
        var endTime = e.date;
        $('#chgoffBeginTime').datepicker('setEndDate', endTime);
    });
}