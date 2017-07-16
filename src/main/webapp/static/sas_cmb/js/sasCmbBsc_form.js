//服务器地址
var _serverAddress = _server + "/sas_cmb/sasCmbBsc/list";
var _rbgServerAddress = _server + "/sas_cmb/sasCmbRbg/list";
var _imgServerAddress = _server + "/sas_cmb/sasCmbImg/list";
var _invtServerAddress = _server + "/sas_cmb/sasCmbInvt/list";

//跳转页面
var _jumpPage = baselocation + "/views/sas_cmb/sasCmbBsc/";
var _rbgJumpPage = baselocation + "/views/sas_cmb/sasCmbRbg/";
var _imgJumpPage = baselocation + "/views/sas_cmb/sasCmbImg/";
var _invtJumpPage = baselocation + "/views/sas_cmb/sasCmbInvt/";

var param = {};
var optype = Utils.search("optype");
var isSubmit = false;
var id = Utils.search("id");

$(function () {
    //初始化日历控件
    Utils.initCalendar();
    //初始化下拉
    initDropDown();
    if (optype == "view") {
        FormUtils.setPageView();
        $(".bscBtn").hide();//隐藏保存按钮
    } else if (optype == "add") {
        //新增页面设置默认值
        SetDefault();
        $("#dtBox").hide();//隐藏表体
        $("#rbgBox").hide();
    } 
    //绑定事件
    BindEvent();

});
//绑定事件
function BindEvent() {
    /********************返回事件********************/
    $("#reback").click(function () {
        Utils.redirect("list.jsp");
    });
    /****************绑定暂存事件*************************/
    $("#save").click(function () {
        //解除下拉框禁用，用于提交数据
        banParam();
        isSubmit = false;
        if (optype == "add") {
            FormUtils.save("dataForm", "/add", true)
        } else if (optype == "modify") {
            FormUtils.save("dataForm", "/update", true)
        }
    });
/*    *//****************绑定申报事件*************************//*
    $("#submit").click(function () {
        //数据验证
        if (!Validator.validate("dataForm")) {
            return;
        }
        //解除下拉框禁用，用于提交数据
        banParam();
        isSubmit = true;
        if (optype == "add" || optype == "change") {
            FormUtils.save("dataForm", "/add?isCheck=true", true)
        } else if (optype == "modify") {
            FormUtils.save("dataForm", "/update?isCheck=true", true)
        }
    });*/
    /****************绑定申报事件*************************/
    $("#declare").click(function () {
    	//设置表单需要验证
        Validator.setValidateParam("dataForm");
        if(!Validator.validate("dataForm")) return;
        var appId=$("#appId").val();
    	$.ajax({
            url: _serverAddress+"/declare",
            type: 'post',
            dataType: 'json',
            data: {id:id,appId:appId},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (result) {
                if (result.code == 1) {
                    layer.msg(result.message, {icon: 1, time: 1500}, function () {
                    	Utils.redirect(_jumpPage + "list.jsp");
                    });
                }
                else {
                    layer.msg(result.data, {time: 1500});
                }
            },
            error: function (result) {
                layer.msg(result.responseText,function () {                   
                });
            }
        });
    });
    /****************绑定清单操作事件*************************/
    //新增事件
    $("#invtAdd").click(function () {
        showPage("invtTable", "清单-新增", _invtJumpPage + "edit.jsp", "add");
    });
    //修改事件
    $("#invtModify").click(function () {
        showPage("invtTable", "清单-修改", _invtJumpPage + "edit.jsp", "modify");
    });
    //查阅事件
    $("#invtView").click(function () {
        showPage("invtTable", "清单-查阅", _invtJumpPage + "edit.jsp", "view");
    });
    //删除事件
    $("#invtDelete").click(function () {
        var rows = $('#invtTable').bootstrapTable('getSelections');
        if (rows[0]["modfMarkname"] == "新增") {
            deleteAdd(rows, "invtTable");
        } else {
        	//这里需要修改——————————————————————————————————————————————————————————————————
            var url = _invtServerAddress + '/delete/byIds';
            param.url = _invtServerAddress + "?seqNo=" + $("#seqNo").val() + "&chgTmsCnt=" + $("#chgTmsCnt").val();
            param.serverUrl = url;
            param.gridId = "invtTable";
            DataGridUtils.deleteGrid(param);
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
        showPage("imgTable", "料件-查阅", _imgJumpPage + "edit.jsp", "view");
    });
    //删除事件
    $("#imgDelete").click(function () {
        var rows = $('#imgTable').bootstrapTable('getSelections');
        if (rows[0]["modfMarkname"] == "新增") {
            deleteAdd(rows, "imgTable");
        } else {
        	//这里需要修改
            var url = _imgServerAddress + '/delete/byIds';
            param.url = _imgServerAddress + "?seqNo=" + $("#seqNo").val() + "&chgTmsCnt=" + $("#chgTmsCnt").val();
            param.serverUrl = url;
            param.gridId = "imgTable";
            DataGridUtils.deleteGrid(param);
        }
    });
    /****************绑定边角料操作事件*************************/
    //新增事件
    $("#rbgAdd").click(function () {
        showPage("rbgTable", "附件-新增", _rbgJumpPage + "edit.jsp", "add");
    });
    //修改事件
    $("#rbgModify").click(function () {
        showPage("rbgTable", "附件-修改", _rbgJumpPage + "edit.jsp", "modify");
    });
    //查阅事件
    $("#rbgView").click(function () {
        showPage("rbgTable", "附件-查阅", _rbgJumpPage + "edit.jsp", "view");
    });
    //删除事件
    $("#rbgDelete").click(function () {
        var url = _rbgServerAddress + '/delete/byIds';
        param.url = _rbgServerAddress + "?seqNo=" + $("#seqNo").val() + "&chgTmsCnt=" + $("#chgTmsCnt").val();
        param.serverUrl = url;
        param.gridId = "rbgTable";
        DataGridUtils.deleteGrid(param);
    });
}

//弹出窗口
function showPage(gridId, title, url, optype) {
    var modelParam = {};

    var seqNo = $("#seqNo").val();
    url += "?optype=" + optype + "&seqNo=" + seqNo + "&chgTmsCnt=" + $("#chgTmsCnt").val();

    if (optype == "add") {
        if (seqNo == "") {
            layer.alert("单据编号不存在，不能新增！");
            return;
        }
    } else if (optype == "modify" || optype == "view") {
        var rows = $('#' + gridId).bootstrapTable('getSelections');
        if (rows.length == 0) {
            layer.msg("未选择记录");
            return;
        }
        var uid = rows[0]["uid"];
        url += "&id=" + uid;
    } else if (optype == "choose" || optype == "changeChoose") {
        url += "&seqNo=" + seqNo + "&chgTmsCnt=" + $("#chgTmsCnt").val() + "&etArcrpNo=" + $("#etArcrpNo").val() + "&optype=" + optype + "&gridId=" + gridId;
        modelParam.maxmin = true;
    }
    modelParam.area = ["900px", "350px"];
    modelParam.url = url;
    modelParam.title = title;
    modelParam.id = uid;
    Utils.showModalDialog(modelParam);
}

//设置默认值
function SetDefault() {
    //设置日期
    var date = DateUtil.dateToStr("yyyy-MM-dd");
    SetValue("updateTime", date);//修改时间
    SetValue("createTime", date);//创建时间 
    SetValue("chgTmsCnt", 0);//变更次数
}

//标签设置值
function SetValue(id, value) {
    $("#" + id).val(value);
}

//初始化下拉
function initDropDown() {
	//codCusCustomsfec主管海关
    //耗料单类型CM_TYPECD;审批标记EMAPV_MARKCD_SAS;申报来源DCL_SOURCE_MARKCD;状态STUCD;申报类型DCL_TYPECD_STOCK;codStdAreaCode监管场所;CHK_STATUS单据状态
    Utils.setDropDown("CM_TYPECD,EMAPV_MARKCD_SAS,DCL_SOURCE_MARKCD,STUCD,DCL_TYPECD_STOCK,CHK_STATUS");
    Utils.setParamDropDown("codCusCustomsfec,codStdAreaCode");
}

//渲染完下拉框的回调方法
function __onAfterInitDropDown() {
    if (optype != "add") {
            FormUtils.getData();
        }
    else {
        $("#dclTypecd").select2('val', "1"); 
        Utils.getLoginUserInfo();
    }
}

//数据加载完后调用的方法
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
    //清单
    var invtColumns = [
        {title: "全选", field: "select", radio: true, align: "center", valign: "middle"},
        {title: "耗料单编号", field: "cmbNo", align: "center", sortable: true, order: "desc"},
        {title: "保税清单编号", field: "bondInvtNo", align: "left", sortable: true},
        {title: "变更次数", field: "chgTmsCnt", align: "center", sortable: true},
        {title: "修改标志", field: "modfMarkcd", align: "center", sortable: true},
        {title: "备注", field: "rmk", align: "center", sortable: true},
    ];
    //料件
    var imgColumns = [
        {title: "全选", field: "select", radio: true, align: "center", valign: "middle"},
        {title: "耗料单编号", field: "cmbNo", align: "center", sortable: true, order: "desc"},
        {title: "料件序号", field: "mtpckSeqno", align: "center", sortable: true},
        {title: "耗用数量", field: "ucnsNetUseupQty", align: "left", sortable: true},
        {title: "变更次数", field: "chgTmsCnt", align: "center", sortable: true},
        {title: "修改标志", field: "modfMarkcd", align: "center", sortable: true},
        {title: "备注", field: "rmk", align: "center", sortable: true}
    ];
    //边角料
    var rbgColumns = [
        {title: "全选", field: "select", radio: true, align: "center", valign: "middle"},
        {title: "耗料单编号", field: "cmbNo", align: "center", sortable: true, order: "desc"},
        {title: "料件序号", field: "mtpckSeqno", align: "center", sortable: true},
        {title: "商品编码", field: "gdecd", align: "center", sortable: true},
        {title: "商品名称", field: "gdsNm", align: "center", sortable: true},
        {title: "变更次数", field: "chgTmsCnt", align: "right", sortable: true},
        {title: "备注", field: "rmk", align: "right", sortable: true}
    ];

    var urlParam = "?seqNo=" + data.seqNo + "&chgTmsCnt=" + data.chgTmsCnt;
    var param = {};
    param.showToggle = false;
    param.showExport = false;
    param.showColumns = false;
    //清单
    param.columns = invtColumns;
    param.gridId = "invtTable";
    param.toolbar = "invtToolbar";
    param.url = _server + "/sas_cmb/sasCmbInvt/list" + urlParam;
    DataGridUtils.initGridByUrl(param);
    //料件
    param.columns = imgColumns;
    param.gridId = "imgTable";
    param.toolbar = "imgToolbar";
    param.url = _server + "/sas_cmb/sasCmbImg/list" + urlParam;
    DataGridUtils.initGridByUrl(param);
    //边角料
    param.columns = rbgColumns;
    param.gridId = "rbgTable";
    param.toolbar = "rbgToolbar";
    param.url = _server + "/sas_cmb/sasCmbRbg/list" + urlParam;
    DataGridUtils.initGridByUrl(param);
}

//获取登录用户信息的回调方法
function __onAfterGetLoginUserInfo(loginuser) {
	
    var copEnt = loginuser.copEnt;
    SetValue("bizopEtpsno", loginuser.inputCopNo);//经营企业编号
    SetValue("bizopEtpsSccd", loginuser.copGbCode);//经营企业社会信用代码
    SetValue("bizopEtpsNm", loginuser.inputCopName);//经营企业名称
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
    SetValue("masterCuscd", copEnt.customsCode);
	
}
	

//保存成功的回调方法
function __onAfterSave(data) {
    if (isSubmit) {
        layer.alert("跳转至列表页面", {time: 1000});
        Utils.redirect("list.jsp");
    } else {
        if (optype == "add" || optype == "modify") {
            layer.alert("跳转至编辑页面", {time: 1000});
            location.href = baselocation + "/views/sas_cmb/sasCmbBsc/list.jsp";
         
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
    if (gridId == "invtTable") {
        showPage("invtTable", "清单-查阅", _invtJumpPage + "edit.jsp", "view");
    } else if (gridId == "imgTable") {
        showPage("imgTable", "料件-查阅", _imgJumpPage + "edit.jsp", "view");
    } else if (gridId == "rbgTable") {
        showPage("rbgTable", "边角料-查阅", _rbgJumpPage + "edit.jsp", "view");
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

//删除新增标志的方法
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