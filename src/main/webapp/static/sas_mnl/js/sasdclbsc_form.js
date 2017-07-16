//服务器地址
_serverAddress = _server + "/sas/sasDclBsc/list";
//跳转页面
_jumpPage = baselocation + "/views/sas_mnl/sasDclBsc/";

var docType = parent.docType;
var busType = parent.busType;
var businessTypecd = parent.businessTypecd;
var directionTypecd = parent.directionTypecd;
var commodityUrl = "/sas/sasDclDt/list";
var bomUrl = "/sas/sasDclUcnsDt/list";
var fileUrl = "/sas/sasDclAcmpFormDt/list";
var tab = parent.tab;
var optype=Utils.search("optype");
if (tab == "cusTab"){
    _serverAddress = _server + "/sas/sasDclCusBsc/list";
    commodityUrl = "/sas/sasDclCusDt/list";
    fileUrl = "/sas/sasDclCusAcmpFormDt/list";
}else if (tab == "hisTab"){
    _serverAddress = _server + "/sas/sasDclHisBsc/list";
    commodityUrl = "/sas/sasDclHisDt/list";
    fileUrl = "/sas/sasDclHisAcmpFormDt/list";
}
//加工前商品
var imgParam = {gridId:"imgTable",toolbar:"imgToolbar"};
//加工后商品
var exgParam = {gridId:"exgTable",toolbar:"exgToolbar"};
//单耗
var bomParam = {gridId:"bomTable",toolbar:"bomToolbar"};
//附件
var fileParam = {gridId:"fileTable",toolbar:"fileToolbar"};

$(function () {
    //初始化日历控件
    Utils.initCalendar();
    //初始化下拉
    initDropDown();
    //绑定事件
    BindEvent();
    //有效日期只能选择当前日期及之后的日期
    $('#validTime').datepicker('setStartDate', DateUtil.dateToStr("yyyy-MM-dd")).on('hide',function(e) {
        var validator = $('#dataForm').data('bootstrapValidator');
        if(validator != undefined)
            validator.updateStatus('validTime', 'NOT_VALIDATED',null).validateField('validTime');
    });
    SetValue("busType", busType);
});
//初始化列表控件
function initGrid(data) {
    //商品
    var dtColumns = [
        {title: "全选", field: "select", radio: true, align: "center", valign: "middle"},
        {title: "申报序号", field: "sasDclSeqno", align: "center", sortable: true, order: "desc"},
        {title: "底账商品序号", field: "oriactGdsSeqno", align: "center", sortable: true},
        {title: "商品编码", field: "gdecd", align: "center", sortable: true},
        {title: "商品名称", field: "gdsNm", align: "left", sortable: true},
        {title: "数量", field: "dclQty", align: "center", sortable: true},
        {title: "申报计量单位", field: "dclUnitcd", align: "left", sortable: true},
        {title: "单价", field: "dclUprcAmt", align: "right", sortable: true},
        {title: "总价", field: "dclTotalAmt", align: "right", sortable: true},
        {title: "币制", field: "dclCurrcd", align: "center", sortable: true},
        {title: "变更次数", field: "chgTmsCnt", align: "center", sortable: true},
        {title: "修改标志", field: "modfMarkname", align: "center", sortable: true}
    ];
    //单损耗
    var bomColumns=[
        { title: "单选",field: "bomSelect",radio: true,align: "center",valign: "middle"},
        { title: "成品序号",field: "endprdSeqno",align: "center",sortable: true},
        { title: "料件序号",field: "mtpckSeqno",align: "center",sortable: true},
        { title: "损耗率",field: "lossRate",align: "right",sortable: true },
        { title: "净耗数量",field: "netUseupQty",align: "right",sortable: true },
        { title: "修改标记",field: "modfMarknm",align: "center",sortable: true }
    ];
    //附件
    var fileColumns = [
        {title: "全选", field: "select", radio: true, align: "center", valign: "middle"},
        {title: "随附单证序号", field: "acmpFormSeqno", align: "center", sortable: true, order: "desc"},
        {title: "随附单证类型", field: "formTypecd", align: "center", sortable: true},
        {title: "随附单证编号", field: "formNo", align: "center", sortable: true},
        {title: "固定编号", field: "fixdNo", align: "center", sortable: true},
        {title: "随附单证文件名称", field: "acmpFormFileNm", align: "left", sortable: true},
        {title: "附件大小", field: "acmpFormFileSize", align: "center", sortable: true}
    ];
    var urlParam = Utils.stringFormat("?seqNo={0}", data.seqNo);
    if (tab == "hisTab"){
        urlParam += "&chgTmsCnt=" + data.chgTmsCnt;
    }
    imgParam.columns = dtColumns;
    imgParam.url = _server + commodityUrl + urlParam + "&mtpckEndprdTypecd=I";
    DataGridUtils.initGridByUrl(imgParam);

    exgParam.columns = dtColumns;
    exgParam.url = _server + commodityUrl + urlParam + "&mtpckEndprdTypecd=E";
    DataGridUtils.initGridByUrl(exgParam);

    bomParam.columns = bomColumns;
    bomParam.url = _server + bomUrl + urlParam;
    DataGridUtils.initGridByUrl(bomParam);

    fileParam.columns = fileColumns;
    fileParam.url = _server + fileUrl + urlParam;
    DataGridUtils.initGridByUrl(fileParam);
}
//绑定事件
function BindEvent() {
    /********************返回事件********************/
    $("#reback").click(function () {
        parent.Utils.hideEditDiv();
    });
    /****************绑定保存事件*************************/
    $("#save").click(function () {
        var date = DateUtil.dateToStr("yyyy-MM-dd HH:mm:SS");
        SetValue("decTime", date);	// 操作时间
        SetValue("dclTime", date);	// 申报时间
        var uid = $("#uid").val();
        // var dclTypecd = Utils.search("dclTypecd");
        if (uid == "") {
            FormUtils.save("dataForm", "/add", true);
        } else {
            FormUtils.save("dataForm", "/update", true);
        }
    });
    /********************绑定提交事件***************************/
    $("#submit").click(function () {
        var date = DateUtil.dateToStr("yyyy-MM-dd HH:mm:SS");
        SetValue("decTime", date);	// 操作时间
        SetValue("dclTime", date);	// 申报时间
        //页面初始化，添加验证
        Validator.setValidateParam("dataForm");
        if (!Validator.validate("dataForm")) return;
        FormUtils.save("dataForm", "/submit", true);
    });
    /***********************表体绑定事件*******************************/
        //表体事件绑定
    var buttons = ["img","exg","bom","file"];
    var titleParam = {img: "加工前商品", exg: "加工后商品", bom: "单损耗", file: "随附单证"};
    var urlParam = {img: "../sasDclDt/edit.jsp?meType=I",exg: "../sasDclDt/edit.jsp?meType=E",bom: "../sasDclUcnsDt/edit.jsp", file: "../sasDclAcmpFormDt/edit.jsp"};
    var serverUrl = {img: commodityUrl,exg: commodityUrl,bom: bomUrl, file: fileUrl};
    $.each(buttons, function (index, field) {
        var id = field;
        var height = "480px";
        if (id == "bom") {
            height = "320px";
        }
        else if (id == "file") {
            height = "280px";
        }
        if (id != "") {
            var title = titleParam[buttons[index]] + "信息";
            var jumpUrl=urlParam[id];
            if(jumpUrl.indexOf("?") == -1)
                jumpUrl += "?";
            else
                jumpUrl += "&";
            //绑定修改事件
            $("#" + id + "Edit").click(function () {
                detailsPage(id, title, jumpUrl + "optype=modify", height);
            });
            //绑定查阅事件
            $("#" + id + "View").click(function () {
                detailsPage(id, title, jumpUrl + "optype=view", height);
            });
            //绑定删除事件
            $("#" + id + "Delete").click(function () {
                removeDate(id, serverUrl[id]);
            });
            //绑定刷新事件
            $("#" + id + "Refresh").click(function () {
                refreshGrid(id, serverUrl[id]);
            });
            //绑定新增事件
            $("#" + id + "Add").click(function () {
                var url = urlParam[id];
                var param = "optype=add&emsNo={0}&chgTmsCnt={1}&sasDclNo={2}&etpsPreentNo={3}&busType={4}&seqNo={5}";
                param = Utils.stringFormat(param, $("#areainOriactNo").val(), $("#chgTmsCnt").val(), $("#sasDclNo").val(), $("#etpsPreentNo").val(), busType,$("#seqNo").val());
                if(url.indexOf("?") == -1)
                    url += "?";
                else
                    url += "&";
                url += param;
                if (id == "img" || id == "exg") {
                    var directionTypecd = $("#directionTypecd").val();
                    /*if (directionTypecd == "E") { // 出区
                        url += "&directionTypecd=" + directionTypecd;
                    }*/
                    var rows = $('#' + id + 'Table').bootstrapTable('getData');
                    //拼接序号
                    var keyId = $.map(rows, function (row) {
                        return row["oriactGdsSeqno"];
                    });
                    url += "&oriactGdsSeqno=" + keyId.join(",");
                }
                showPage(id, titleParam[id], url, height);
            });
        }
    });
    $("#" + buttons[0] + "Copy").click(function () {
        copy(buttons[0], serverUrl[buttons[0]]);
    });

    $.each(buttons, function (index, field) {
        var id = field;
        $("#" + id + "ChangeEdit").click(function () {
            change(id,"modify");
        })
        $("#" + id + "ChangeRemove").click(function () {
            change(id,"delete");
        })
    })
    /***********************表体绑定事件*******************************/
}

/**********************弹出窗口***********************************/
//弹出窗口
var modalParam = {};
modalParam.area = [];
var width = $(".container").width()+"px";
function showPage(pageId, title, url, height) {
    modalParam.area.unshift(width,height);
    var uid = $("#uid").val();
    if (uid == "") {
        layer.alert("表头尚未保存，不能进行该操作！");
        return;
    }
    modalParam.url = url;
    modalParam.title = title;
    modalParam.id = pageId;

    var seqNo = $("#seqNo").val();
    if (url.indexOf("id") == -1) {
        modalParam.url += "&id=" + seqNo;
    }
    modalParam.url += "&tab=" + tab;
    Utils.showModalDialog(modalParam);
}

/**************************子表点击事件********************************/
//子表修改
function detailsPage(pageId, title, url,height) {
    var rows = $('#' + pageId + "Table").bootstrapTable('getSelections');
    if (rows.length == 0) {
        layer.msg("请选择记录", {time: 1500});
        return;
    }
    var uid = rows[0]["uid"];
    if(pageId=="bom"){
        url+="&seqNo="+$("#seqNo").val();
    }
    showPage(pageId, title, url + "&id=" + uid,height);
}

//子表删除 url 对应后台路径
function removeDate(pageId, url) {
    var uid = $("#uid").val();
    if (uid == "") {
        layer.alert("表头尚未保存，不能进行该操作！");
        return;
    }
    var rows = $('#' + pageId + "Table").bootstrapTable('getSelections');
    if (rows.length == 0) {
        layer.msg("请选择要删除的记录", {time: 1500});
        return;
    }

    var confirm = "";
    var id = rows[0]["uid"];
    layer.confirm(confirm + '确定要删除所选记录吗？', {
        btn: ['确定', '取消'] //按钮
    }, function () {
        $.ajax({
            url: _server + url + "/" + id + "/delete",
            type: 'post',
            dataType: 'json',
            data: {"appId": $("#appId").val()},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (result) {
                if (result.code == 1) {
                    layer.msg("删除成功", {icon: 1, time: 1500}, function () {
                        $("#" + pageId + "Refresh").click();
                    });
                }
            },
            error: function (result) {
                layer.msg(result.message, {time: 1500});
            }
        });
    });
}

//子表刷新 url 对应后台路径
function refreshGrid(pageId, url) {
    var uid = $("#uid").val();
    if (uid == "") {
        layer.alert("表头尚未保存，不能进行该操作！");
        return;
    }
    var urlParam = Utils.stringFormat("?seqNo={0}", $("#seqNo").val());
    if (tab == "hisTab"){
        urlParam += "&chgTmsCnt=" +  $("#chgTmsCnt").val();
    }
    param.serverUrl = _server + url + urlParam;
    param.idField = "uid";
    param.gridId = pageId + "Table";
    DataGridUtils.refresh(param);
}

// 复制当前商品
function copy(pageId, url) {
    var uid = $("#uid").val();
    if (uid == "") {
        layer.alert("表头尚未保存，不能进行该操作！");
        return;
    }
    var rows = $('#' + pageId + "Table").bootstrapTable('getSelections');
    if (rows.length == 0) {
        layer.msg("请选择要复制的商品记录", {time: 1500});
        return;
    }
    var uid = rows[0]["uid"];
    $.ajax({
        url: _server + url + "/copy",
        data: {"id": uid, "appId": $("#appId").val()},
        dataType: 'json',
        xhrFields: {withCredentials: true},
        crossDomain: true,
        success: function (result) {
            if (result.code == 38) {
                layer.msg(result.message, {time: 1000}, function () {
                    refreshGrid(pageId, url);
                });
            } else {
                layer.msg(result.message, {time: 1000});
            }
        },
        error: function (result) {
            layer.alert(result.message);
        }
    });
}

/**
 * @description 业务申报商品正式表选择
 */
function change(pageId,optype){
    var rows = $('#' + pageId + "Table").bootstrapTable('getData');
    var sasDclSeqNoList = "";
    var mtpckEndprdTypecd="E";
    if (rows.length != 0) {
        var id = $.map(rows, function (row) {
            return row["sasDclSeqno"];
        });
        sasDclSeqNoList = id.join(",");
    }
    if(pageId == "img"){
        mtpckEndprdTypecd="I";
    }
    var title = "业务申报商品正式表选择";
    var url = "../sasDclDt/list.jsp?optype=" + optype + "&id="+$("#sasDclNo").val()+"&sasDclSeqNoList="+sasDclSeqNoList+"&mtpckEndprdTypecd="+mtpckEndprdTypecd;
    if(pageId == "bom"){
        url = "../sasDclUcnsDt/list.jsp?optype=" + optype + "&id="+$("#sasDclNo").val();
    }
    var height ="540px";
    showPage(pageId,title,url,height);
}
/******************默认值设置**********************/
function SetDefault() {
    var date = DateUtil.dateToStr("yyyy-MM-dd HH:mm:SS");
    SetValue("decTime", date);	// 操作时间
    SetValue("dclTime", date);	// 申报时间
    SetValue("chgTmsCnt", 0);    // 变更次数=0
    SetDrop("chkStatus", "S"); // 审批标记代码 S-暂存
    SetDrop("dclTypecd", 1);     // 申报类型代码=“1-备案”
    if (directionTypecd != null) {
        SetDrop("directionTypecd", directionTypecd); // 货物流向
    }

    if (businessTypecd != null) {
        SetDrop("businessTypecd", businessTypecd); // 业务类型代码
    }

    var url = "";
    SetDrop("ownerSystem", 2)    // 所属系统 1-特殊区域
    url = _server + "/ems_bws/emsBwsCusBsc/list/selectByBwsNo?bwsNo=";

    var areainOriactNo = Utils.search("areainOriactNo");
    if (areainOriactNo != null) {

        SetValue("areainOriactNo", areainOriactNo); // 区内账册编号
        $.ajax({
            url: url + areainOriactNo,
            type: 'post',
            dataType: 'json',
            data: {"appId": $("#appId").val()},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (result) {
                var data = result.data;
                SetDrop("masterCuscd", data.masterCuscd);//主管海关
                SetDrop("areaCode", data.areaCode);//监管场所
                SetValue("areainEtpsno", data.bizopEtpsno);//区内企业编码
                SetValue("areainEtpsNm", data.bizopEtpsNm);//区内企业名称
                SetValue("dclEr", data.bizopEtpsNm);//申请人
                SetValue("areainEtpsSccd", data.bizopEtpsSccd);//区内社会信用代码
                SetValue("copEntNo", data.copEntNo);//企业备案号
            },
            error: function (result) {

            }
        });
    }
    Utils.getLoginUserInfo();   // 获取当前登录用户信息
}
/******************下拉初始化***************************/
function initDropDown() {
    /**
     *
     * DCL_TYPECD_SAS 申报类型
     * DIRECTION_TYPECD 货物流向
     * SAS_TYPE 业务类型
     * EMAPV_MARKCD_SAS 审批状态代码
     * codCusCustomsfec 主管海关代码
     * codStdAreaCode 监管场所
     * OWNER_SYSTEM 所属系统
     * CHK_STATUS 单据状态
     */
    Utils.setDropDown("DCL_TYPECD_SAS,DIRECTION_TYPECD,SAS_TYPE,CHK_STATUS,OWNER_SYSTEM", "codCusCustomsfec,codStdAreaCode");
}
/************************回调事件****************************************/
// 数据加载 回调
function __onAfterLoad(data) {
    SetStyle(data.dclTypecd);
    initGrid(data);
}

// 获取用户基本信息回调
function __onAfterGetLoginUserInfo(data) {
    SetValue("inputerCode", data.inputerCode); // 操作人代码
    if ($("#seqNo").val() == "") {
        var billParam = "applyId=001&areaCode=" + data.areaCode + "&docType=" + docType + "SeqNO&serverType=C";
        Utils.getBillCode(billParam, "seqNo", "单据编号获取失败");
    }
    if ($("#sasDclPreentNo").val() == "") {
        var billParam = "applyId=001&areaCode=" + data.areaCode + "&docType=" + docType + "CopNO&serverType=C";
        Utils.getBillCode(billParam, "sasDclPreentNo,etpsPreentNo", "申报表预录入编号获取失败");
    }
}

/**
 *
 * @param data
 * @description 保存回调
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

//  双击查阅事件
function __onDblClickRow(rowdata, rowobj) {
    var tableId = rowobj.parent().parent().attr("id");
    var height = "450px";
    if (tableId === "bomTable") {
        height = "300px";
    }
    if (tableId === "imgTable") {
        detailsPage("img", "加工前商品信息","../sasDclDt/edit.jsp?optype=view&id=" + rowdata.uid,height);
    } else if (tableId === "exgTable") {
        detailsPage("exg", "加工后商品信息","../sasDclDt/edit.jsp?optype=view&id=" + rowdata.uid,height);
    } else if (tableId === "bomTable") {
        detailsPage("bom", "单损耗信息","../sasDclUcnsDt/edit.jsp?optype=view&id=" + rowdata.uid,height);
    }
}

/**
 * 初始化表体
 * @description 下拉回调
 */
function __onAfterInitDropDown(data) {
    //新增页面设置默认值
    var id = Utils.search("id");  // 主键
    var dclTypecd = Utils.search("dclTypecd");    // 类型 用于判断是从那里进来的 2-变更 3-结案
    if (id == null && dclTypecd == null) {
        SetDefault();
    } else if (dclTypecd != null && dclTypecd != "1") {       // 1-备案
        getData(id, dclTypecd);
    } else {
        FormUtils.getData();
        if(id != null && optype == "view"){
            FormUtils.setPageView();//form表单设置禁用
            $(".view").hide(); //隐藏部分按钮
        }
    }
}

/*******************辅助函数*****************************/
function SetValue(id, value) {
    $("#" + id).val(value);
}

function SetDrop(id, value) {
    $("#" + id).select2().val(value).trigger("change");
}
/**
 * 获取表格参数选项
 * @param gridId
 * @returns {{}}
 */
function getTableParam(gridId) {
    var options = {};
    switch (gridId){
        case "img":
            options = imgParam;
            break;
        case "exg":
            options = exgParam;
            break;
        case "bom":
            options = bomParam;
            break;
        case "file":
            options = fileParam;
            break;
    }
    return options;
}
/**
 * @description 用于子表刷新从表页面
 */
function subPageRefresh(gridId) {
    DataGridUtils.refresh(getTableParam(gridId));
}


/**
 * 用于获取数据（业务变更,业务结案）
 */
function getData(id, dclTypecd) {
    var url = _serverAddress + "/" + id + "/edit";
    $.ajax({
        url: url,
        type: 'post',
        dataType: 'json',
        data: {"dclTypecd": dclTypecd, "appId": $("#appId").val()},
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (result) {
            var data = result.data;
            FormUtils.initForm(data);
            if (typeof(__onAfterLoad) == "function") {
                __onAfterLoad(data);
            }
        },
        error: function (result) {
        }
    });
}

/**
 * 设置业务变更和业务结案进来属性是否禁用
 */
function SetStyle(dclTypecd) {
    if (dclTypecd == "2") {      // 变更
        // $("#directionTypecd").attr("disabled",true);//货物流向
        if(optype != "view"){
            $("#dpstLevyBlNo").attr("readonly", true);//保税金征收单编号
            $(".change").show();
        }

    } else if (dclTypecd == "3") {  // 结案
        FormUtils.setPageView();//form表单设置禁用
        $("#validTime").attr("disabled", true);//有效期禁用
        $("#validTime").attr("style", "background-color:#eee;border: 1px solid #e5e6e7");//有效期添加样式
        $("#rmk").removeAttr("readonly");//备注启用
        // 子表隐藏
        $(". ja").hide();
        //保存按钮隐藏
        $("#save").hide();
    }
}
