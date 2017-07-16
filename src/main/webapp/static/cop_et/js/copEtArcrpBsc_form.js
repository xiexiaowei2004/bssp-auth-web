//服务器地址
var _serverAddress = _server + "/cop_et/etArcrpBsc/list";
var _cusServerAddress = _server + "/cop_et/etCusBsc/list";
var _exgServerAddress = _server + "/cop_et/etArcrpExg/list";
var _imgServerAddress = _server + "/cop_et/etArcrpImg/list";
var _acmpFormDtServerAddress = _server + "/cop_et/etArcrpAcmpFormDt/list";
//跳转页面
var _jumpPage = baselocation + "/views/cop_et/copEtArcrpBsc/";
var _exgJumpPage = baselocation + "/views/cop_et/copEtArcrpExg/";
var _imgJumpPage = baselocation + "/views/cop_et/copEtArcrpImg/";
var _acmpFormDtJumpPage = baselocation + "/views/cop_et/copEtArcrpAcmpFormDt/";

var param = {};
var optype = Utils.search("optype");
var view = Utils.search("view");
if (optype !== "view") {
    view = "Arcrp";
}
var isSubmit = false;

$(function () {
    //初始化日历控件
    Utils.initCalendar();
    //初始化下拉
    initDropDown();
    if (optype === "view") {
        FormUtils.setPageView();
        $(".bscBtn").hide();
        $(".changeBtn").hide();
    } else if (optype === "add") {
        //新增页面设置默认值
        SetDefault();
        $(".changeBtn").hide();
        $("#dtBox").hide();
        $("#acmpFormDtBox").hide();
    }
    //绑定事件
    BindEvent();

    //设置验证
    Validator.setValidateParam("dataForm");
});
//绑定事件
function BindEvent() {
    /********************返回事件********************/
    $("#reback").click(function () {
        parent.Utils.hideEditDiv();
    });
    /****************绑定暂存事件*************************/
    $("#save").click(function () {
        //解除下拉框禁用，用于提交数据
        banParam();
        isSubmit = false;
        if (optype === "add" || optype === "change") {
            FormUtils.save("dataForm", "/add", true)
        } else if (optype === "modify") {
            FormUtils.save("dataForm", "/update", true)
        }
        parent.$("#search").click();
    });
    /****************绑定申报事件*************************/
    $("#submit").click(function () {
        //数据验证
        if (!Validator.validate("dataForm")) {
            return;
        }
        //解除下拉框禁用，用于提交数据
        banParam();
        isSubmit = true;
        if (optype === "add" || optype === "change") {
            FormUtils.save("dataForm", "/add?isCheck=true", true)
        } else if (optype === "modify") {
            FormUtils.save("dataForm", "/update?isCheck=true", true)
        }
    });
    /****************绑定料件操作事件*************************/
    //新增事件
    $("#imgAdd").click(function () {
        showPage("imgTable", "料件-新增", _imgJumpPage + "edit.jsp", "add");
    });
    //修改事件
    $("#imgModify").click(function () {
        showPage("imgTable", "料件-修改", _imgJumpPage + "edit.jsp", "modify");
    });
    //查阅事件
    $("#imgView").click(function () {
        showPage("imgTable", "料件-查阅", _imgJumpPage + "edit.jsp?view=" + view, "view");
    });
    //删除事件
    $("#imgDelete").click(function () {
        var rows = $('#imgTable').bootstrapTable('getSelections');
        if (rows[0]["modfMarkname"] === "新增") {
            deleteAdd(rows, "imgTable");
        } else {
            var url = _imgServerAddress + '/delete/byIds';
            param.url = _imgServerAddress + "?seqNo=" + $("#seqNo").val() + "&chgTmsCnt=" + $("#chgTmsCnt").val();
            param.serverUrl = url;
            param.gridId = "imgTable";
            DataGridUtils.deleteGrid(param);
        }
    });
    //选取事件
    $("#imgChoose").click(function () {
        showPage("imgTable", "料件-选取", _jumpPage + "complexList.jsp", "choose");
    });
    //变更选取事件
    $("#imgChangeChoose").click(function () {
        showPage("imgTable", "料件-变更选取", _jumpPage + "complexList.jsp", "changeChoose");
    });
    /****************绑定成品操作事件*************************/
    //新增事件
    $("#exgAdd").click(function () {
        showPage("exgTable", "成品-新增", _exgJumpPage + "edit.jsp", "add");
    });
    //修改事件
    $("#exgModify").click(function () {
        showPage("exgTable", "成品-修改", _exgJumpPage + "edit.jsp", "modify");
    });
    //查阅事件
    $("#exgView").click(function () {
        showPage("exgTable", "成品-查阅", _exgJumpPage + "edit.jsp?view=" + view, "view");
    });
    //删除事件
    $("#exgDelete").click(function () {
        var rows = $('#exgTable').bootstrapTable('getSelections');
        if (rows[0]["modfMarkname"] == "新增") {
            deleteAdd(rows, "exgTable");
        } else {
            var url = _exgServerAddress + '/delete/byIds';
            param.url = _exgServerAddress + "?seqNo=" + $("#seqNo").val() + "&chgTmsCnt=" + $("#chgTmsCnt").val();
            param.serverUrl = url;
            param.gridId = "exgTable";
            DataGridUtils.deleteGrid(param);
        }
    });
    //选取事件
    $("#exgChoose").click(function () {
        showPage("exgTable", "成品-选取", _jumpPage + "complexList.jsp", "choose");
    });
    //变更选取事件
    $("#exgChangeChoose").click(function () {
        showPage("exgTable", "成品-变更选取", _jumpPage + "complexList.jsp", "changeChoose");
    });
    /****************绑定附件操作事件*************************/
    //新增事件
    $("#acmpFormDtAdd").click(function () {
        showPage("acmpFormDtTable", "附件-新增", _acmpFormDtJumpPage + "edit.jsp", "add");
    });
    //修改事件
    $("#acmpFormDtModify").click(function () {
        showPage("acmpFormDtTable", "附件-修改", _acmpFormDtJumpPage + "edit.jsp", "modify");
    });
    //查阅事件
    $("#acmpFormDtView").click(function () {
        showPage("acmpFormDtTable", "附件-查阅", _acmpFormDtJumpPage + "edit.jsp?view=" + view, "view");
    });
    //删除事件
    $("#acmpFormDtDelete").click(function () {
        var url = _acmpFormDtServerAddress + '/delete/byIds';
        param.url = _acmpFormDtServerAddress + "?seqNo=" + $("#seqNo").val() + "&chgTmsCnt=" + $("#chgTmsCnt").val();
        param.serverUrl = url;
        param.gridId = "acmpFormDtTable";
        DataGridUtils.deleteGrid(param);
    });

    //根据企业代码 渲染企业信用代码和企业名称
    $("#bizopEtpsno").blur(function () {
        inputCopInfo("bizopEtpsno", "bizopEtpsSccd", "bizopEtpsNm");
    });
    //根据企业代码 渲染企业信用代码和企业名称
    $("#prcsEtpsno").blur(function () {
        inputCopInfo("prcsEtpsno", "prcsEtpsSccd", "prcsEtpsNm");
    });
    //根据企业代码 渲染企业信用代码和企业名称
    $("#dclEtpsno").blur(function () {
        inputCopInfo("dclEtpsno", "dclEtpsSccd", "dclEtpsNm");
    });
}

//弹出窗口
function showPage(gridId, title, url, optype) {
    var modelParam = {};

    var seqNo = $("#seqNo").val();
    if (url.indexOf("?") == -1) {
        url += "?optype=" + optype;
    } else {
        url += "&optype=" + optype;
    }
    url += "&seqNo=" + seqNo + "&chgTmsCnt=" + $("#chgTmsCnt").val();

    if (optype === "add") {
        if (seqNo === "") {
            layer.alert("单据编号不存在，不能新增！");
            return;
        }
    } else if (optype === "modify" || optype === "view") {
        var rows = $('#' + gridId).bootstrapTable('getSelections');
        if (rows.length === 0) {
            layer.msg("未选择记录");
            return;
        }
        var uid = rows[0]["uid"];
        url += "&id=" + uid;
    } else if (optype === "choose" || optype === "changeChoose") {
        url += "&etArcrpNo=" + $("#etArcrpNo").val() + "&gridId=" + gridId;
        modelParam.maxmin = true;
    }
    modelParam.area = ["900px", "450px"];
    modelParam.url = url;
    modelParam.title = title;
    modelParam.id = uid;
    Utils.showModalDialog(modelParam);
}

//设置默认值
function SetDefault() {
    //设置日期
    var date = DateUtil.dateToStr("yyyy-MM-dd");
    SetValue("dclTime", date);
    SetValue("decTime", date);
    SetValue("chgTmsCnt", 0);
}

//标签设置值
function SetValue(id, value) {
    $("#" + id).val(value);
}

/**
 * 第一步 初始化下拉
 */
function initDropDown() {
    //DCL_ETPS_TYPE 申报企业类型代码 RISK_ASSURE_MARKCD 风险担保标记代码 DCL_TYPE 申报类型代码 DCL_SOURCE_MARKCD 申报来源标记代码 EXE_MARKCD 执行标志代码
    //Utils.setCodesDropDown("DCL_ETPS_TYPE,RISK_ASSURE_MARKCD,DCL_TYPE,EXE_MARKCD")
    //codCusCustomsfec 主管海关代码
    //Utils.setParamDropDown("codCusCustomsfec");
    Utils.setDropDown("DCL_ETPS_TYPE,RISK_ASSURE_MARKCD,DCL_TYPE,EXE_MARKCD", "codCusCustomsfec");
}

/**
 * 第二步 渲染完下拉框的回调方法
 * @private  用渲染数据
 */
function __onAfterInitDropDown() {
    if (optype !== "add") {
        if (optype !== "change") {
            if (optype === "view") {
                _serverAddress = _server + "/cop_et/et" + view + "Bsc/list";
            }
            FormUtils.getData();
        } else {
            param.dataUrl = _cusServerAddress;
            FormUtils.getChangeData(param);
        }
    } else {
        $("#dclTypecd").select2('val', "1");
        $("#declareErType").select2('val', "1");
        Utils.getLoginUserInfo();
    }
}

/**
 * 第三步 数据加载完后调用的方法
 * @param data 加载的数据
 * @private 加载表体数据
 */
function __onAfterLoad(data) {
    if (optype == "change") {
        //变更申请 不加载表体数据
        $("#dclTypecd").select2('val', "2");
        $("#chgTmsCnt").val(parseInt($("#chgTmsCnt").val()) + 1);
        return;
    } else if (optype == "modify") {
        //备案的编辑不能进行变更选取操作
        var chgTmsCnt = $("#chgTmsCnt").val();
        if (chgTmsCnt == 0) {
            $(".changeBtn").hide();
        }
    }
    if (optype != "view") {
        view = "Arcrp";
    }
    //料件 成品
    var dtColumns = [
        {title: "全选", field: "select", radio: true, align: "center", valign: "middle"},
        {title: "序号", field: "gdsSeqno", align: "center", sortable: true, order: "desc"},
        {title: "商品编码", field: "gdecd", align: "center", sortable: true},
        {title: "商品名称", field: "gdsNm", align: "left", sortable: true},
        {title: "变更次数", field: "chgTmsCnt", align: "center", sortable: true},
        {title: "修改标志", field: "modfMarkname", align: "center", sortable: true},
        {title: "备注", field: "rmk", align: "center", sortable: true}
    ];
    //附件
    var acmpFormDtColumns = [
        {title: "全选", field: "select", radio: true, align: "center", valign: "middle"},
        {title: "随附单证序号", field: "acmpFormSeqno", align: "center", sortable: true, order: "desc"},
        {title: "随附单证类型", field: "acmpFormTypenm", align: "center", sortable: true},
        {title: "随附单证编号", field: "acmpFormNo", align: "center", sortable: true},
        {title: "固定编号", field: "fixdNo", align: "center", sortable: true},
        {title: "随附单证文件名称", field: "acmpFormFileNm", align: "right", sortable: true},
        {title: "备注", field: "rmk", align: "right", sortable: true}
    ];

    var urlParam = "?seqNo=" + data.seqNo + "&chgTmsCnt=" + data.chgTmsCnt;
    var param = {};
    param.showToggle = false;
    param.showExport = false;
    param.showColumns = false;
    //料件
    param.columns = dtColumns;
    param.gridId = "imgTable";
    param.toolbar = "imgToolbar";
    param.url = _server + "/cop_et/et" + view + "Img/list" + urlParam;
    DataGridUtils.initGridByUrl(param);
    //成品
    param.columns = dtColumns;
    param.gridId = "exgTable";
    param.toolbar = "exgToolbar";
    param.url = _server + "/cop_et/et" + view + "Exg/list" + urlParam;
    DataGridUtils.initGridByUrl(param);
    //附件
    param.columns = acmpFormDtColumns;
    param.gridId = "acmpFormDtTable";
    param.toolbar = "acmpFormDtToolbar";
    param.url = _server + "/cop_et/et" + view + "AcmpFormDt/list" + urlParam;
    DataGridUtils.initGridByUrl(param);
}

//获取登录用户信息的回调方法
function __onAfterGetLoginUserInfo(loginuser) {
    //登录用户企业信息
    var copEnt = loginuser.copEnt;
    SetValue("bizopEtpsno", loginuser.inputCopNo);
    SetValue("bizopEtpsSccd", loginuser.copGbCode);
    SetValue("bizopEtpsNm", loginuser.inputCopName);
    SetValue("prcsEtpsno", loginuser.inputCopNo);
    SetValue("prcsEtpsSccd", loginuser.copGbCode);
    SetValue("prcsEtpsNm", loginuser.inputCopName);
    SetValue("dclEtpsno", loginuser.inputCopNo);
    SetValue("dclEtpsSccd", loginuser.copGbCode);
    SetValue("dclEtpsNm", loginuser.inputCopName);
    SetValue("inputEtpsSccd", loginuser.copGbCode);

    SetValue("concAddr", copEnt.entAddr);
    SetValue("telnum", copEnt.telCo);
    SetValue("areaCode", copEnt.areaCode);
    $("#masterCuscd").select2().val(copEnt.customsCode).trigger("change");//主管关区

    //获取预录入统一编号
    Utils.getBillCode('applyId=001&areaCode=' + copEnt.areaCode + '&docType=A0302SeqNO&serverType=C', 'seqNo', '预录入统一编号获取失败');
    //获取企业内部编号
    Utils.getBillCode('applyId=001&areaCode=' + copEnt.areaCode + '&docType=A0302CopNO&serverType=C', 'etpsPreentNo,etArcrpNo', '企业内部编号获取失败');
}

//保存成功的回调方法
function __onAfterSave(data) {
    if (isSubmit) {
        parent.Utils.hideEditDiv();
    } else {
        if (optype === "add" || optype === "change") {
            layer.alert("跳转至编辑页面", {time: 1000});
            location.href = baselocation + "/views/cop_et/copEtArcrpBsc/edit.jsp?optype=modify&id=" + data.uid;
            $("#dtBox").show();
            $("#acmpFormDtBox").show();
        }
    }
}

//保存失败的回调方法
function __onAfterSaveError() {
    notBanParam(); //重新禁用
}

//双击表单事件
function __onDblClickRow(row, element) {
    var gridId = element[0].offsetParent.id;
    if (gridId === "imgTable") {
        showPage("imgTable", "料件-查阅", _imgJumpPage + "edit.jsp?view=" + view, "view");
    } else if (gridId === "exgTable") {
        showPage("exgTable", "成品-查阅", _exgJumpPage + "edit.jsp?view=" + view, "view");
    } else if (gridId === "acmpFormDtTable") {
        showPage("acmpFormDtTable", "附件-查阅", _acmpFormDtJumpPage + "edit.jsp?view=" + view, "view");
    }
}

//界面刷新方法
function subPageRefresh(param) {
    DataGridUtils.refresh(param);
}

//保存时解禁下拉框用于获取值
var disabledParam = [];
function banParam() {
    disabledParam[0] = "dclTypecd";
    disabledParam[1] = "exeMarkcd";
    disabledParam[2] = "riskAssureMarkcd";
    $(disabledParam).each(function () {
        $("#" + this).removeAttr("disabled", true);
    });
}
//保存失败时重新禁用下拉框
function notBanParam() {
    $(disabledParam).each(function () {
        $("#" + this).attr("disabled", true);
    });
}

//删除表体修改标记为新增的数据
function deleteAdd(rows, gridId) {
    var url = "";
    if (gridId == "imgTable") {
        url += _imgServerAddress;
        param.url = _imgServerAddress;
    } else {
        url += _exgServerAddress;
        param.url = _exgServerAddress;
    }
    url += "/deleteAdd?seqNo=" + $("#seqNo").val() + "&uid=" + rows[0]["uid"] + "&gdsSeqno=" + rows[0]["gdsSeqno"] + "&chgTmsCnt=" + rows[0]["chgTmsCnt"]
    $.ajax({
        url: url,
        type: 'post',
        data: {"appId": $("#appId").val()},
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (result) {
            if (result.code == 1) {
                layer.msg("删除成功", {time: 1000}, function () {
                    param.url += "?seqNo=" + $("#seqNo").val() + "&chgTmsCnt=" + $("#chgTmsCnt").val();
                    param.gridId = gridId;
                    DataGridUtils.refresh(param);
                });
            } else {
                layer.msg('删除失败!');
            }
        },
        error: function () {
            layer.msg('删除失败!');
        }
    });
}

/**
 * //根据企业代码 渲染企业信用代码和企业名称
 */
function inputCopInfo(etpsno, etpsSccd, etpsNm) {
    var etpsno = $("#" + etpsno).val();
    if (etpsno == "") {
        $("#" + etpsSccd).val("");
        $("#" + etpsNm).val("");
        return;
    }
    $.ajax({
        url: _server + "/cop/copEnt/list/getCopEntInfo",
        type: 'get',
        dataType: 'json',
        data: {"appId": $("#appId").val(), "tradeCode": etpsno},
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (result) {
            if (result.code == "1") {
                if (result.data && result.data.length > 0) {
                    $("#" + etpsSccd).val(result.data[0].copGbCode);
                    $("#" + etpsNm).val(result.data[0].entName);
                }
            }
        },
        error: function () {
            $("#" + etpsSccd).val("");
            $("#" + etpsNm).val("");
        }
    });
}
