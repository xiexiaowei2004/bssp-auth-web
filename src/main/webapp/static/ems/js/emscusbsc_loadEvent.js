var viewType = FormHelper.search("viewType");
/*******************表单事件**********************/
/*
 * 表头页面加载完成后，初始化表体列表
 */
function __onAfterLoad(data) {
    var seqNo = "";
    var chgTmsCnt = "0";
    if (data != null) {
        seqNo = data.seqNo;
        chgTmsCnt = data.chgTmsCnt;
    }
    initGrid(seqNo, chgTmsCnt);
}
/*
 * 页面下拉初始化成功后执行
 */
function __onAfterInitDropDown(data) {
    FormHelper.getData();
}
/*
 * 初始化列表控件
 */
var imgParam = {};
var exgParam = {};
var ucnsParam = {};
var ampFormParam = {};
function initGrid(seqNo, chgTmsCnt) {
    //料件
    var imgColumns = [
        {title: "单选", field: "imgSelect", radio: true, align: "center", valign: "middle"},
        {title: "序号", field: "gdsSeqno", align: "center", sortable: true},
        {title: "料号", field: "gdsMtno", align: "left", sortable: true},
        {title: "商品编码", field: "gdecd", align: "center", sortable: true},
        {title: "商品名称", field: "gdsNm", align: "left", sortable: true, width: 300},
        {title: "规格型号", field: "endprdGdsSpcfModelDesc", align: "left", sortable: true},
        {title: "申报计量单位", field: "dclUnitnm", align: "center", sortable: true},
        {title: "法定计量单位", field: "lawfUnitnm", align: "center", sortable: true},
        {title: "申报单价", field: "dclUprcAmt", align: "right", sortable: true},
        {title: "币制", field: "dclCurrnm", align: "left", sortable: true},
        {title: "辅料标记", field: "adjmtrMarknm", align: "center", sortable: true},
        {title: "修改标记", field: "modfMarknm", align: "center", sortable: true},
        {title: "企业执行标记", field: "etpsExeMarknm", align: "center", sortable: true}
    ];
    //成品
    var exgColumns = [
        {title: "单选", field: "exgSelect", radio: true, align: "center", valign: "middle"},
        {title: "序号", field: "gdsSeqno", align: "center", sortable: true},
        {title: "料号", field: "gdsMtno", align: "left", sortable: true},
        {title: "商品编码", field: "gdecd", align: "center", sortable: true},
        {title: "商品名称", field: "gdsNm", align: "left", sortable: true},
        {title: "规格型号", field: "endprdGdsSpcfModelDesc", align: "left", sortable: true},
        {title: "申报计量单位", field: "dclUnitnm", align: "center", sortable: true},
        {title: "法定计量单位", field: "lawfUnitnm", align: "center", sortable: true},
        {title: "申报单价", field: "dclUprcAmt", align: "right", sortable: true},
        {title: "币制", field: "dclCurrnm", align: "left", sortable: true},
        {title: "修改标记", field: "modfMarknm", align: "center", sortable: true},
        {title: "企业执行标记", field: "etpsExeMarknm", align: "center", sortable: true}
    ];
    //单损耗
    var bomColumns = [
        {title: "单选", field: "bomSelect", radio: true, align: "center", valign: "middle"},
        {title: "序号", field: "ucnsSeqno", align: "center", sortable: true},
        {title: "成品序号", field: "endprdSeqno", align: "center", sortable: true},
        {title: "单损耗版本号", field: "ucnsVerno", align: "left", sortable: true},
        {title: "料件序号", field: "mtpckSeqno", align: "center", sortable: true},
        {title: "单耗数量", field: "ucnsQty", align: "right", sortable: true},
        {title: "净耗数量", field: "netUseupQty", align: "right", sortable: true},
        {title: "有形损耗率", field: "tgblLossRate", align: "right", sortable: true},
        {title: "无形损耗率", field: "intgbLossRate", align: "right", sortable: true},
        {title: "保税料件比例", field: "bondMtpckPrpr", align: "right", sortable: true},
        {title: "修改标记", field: "modfMarknm", align: "center", sortable: true}/*,
         { title: "单耗申报状态",field: "ucnsDclStunm",align: "center",sortable: true }*/
    ];
    //附件
    var fileColumns = [
        {title: "单选", field: "fileSelect", radio: true, align: "center", valign: "middle"},
        {title: "随附单证序号", field: "acmpFormSeqno", align: "center", sortable: true},
        {title: "随附单证类型", field: "acmpFormTypenm", align: "center", sortable: true},
        {title: "随附单证编号", field: "acmpFormNo", align: "center", sortable: true},
        {title: "固定编号", field: "fixdNo", align: "center", sortable: true},
        {title: "随附单证文件名称", field: "acmpFormFileNm", align: "left", sortable: true},
        {title: "附件大小", field: "acmpFormFileSize", align: "right", sortable: true}
    ];
    var urlParam = Utils.stringFormat("?seqNo={0}&chgTmsCnt={1}", seqNo, chgTmsCnt);
    //料件
    imgParam.columns = imgColumns;
    imgParam.gridId = "imgTable";
    imgParam.toolbar = "imgToolbar";
    imgParam.height = 500;
    imgParam.url = _server + Utils.stringFormat("/ems/ems{0}Img/list", viewType) + urlParam;
    DataGridUtils.initGridByUrl(imgParam);
    //成品
    exgParam.columns = exgColumns;
    exgParam.gridId = "exgTable";
    exgParam.toolbar = "exgToolbar";
    exgParam.height = 500;
    exgParam.url = _server + Utils.stringFormat("/ems/ems{0}Exg/list", viewType) + urlParam;
    DataGridUtils.initGridByUrl(exgParam);
    //单损耗
    ucnsParam.columns = bomColumns;
    ucnsParam.gridId = "bomTable";
    ucnsParam.toolbar = "bomToolbar";
    ucnsParam.height = 500;
    ucnsParam.url = _server + Utils.stringFormat("/ems/ems{0}UcnsDt/list", viewType) + urlParam;
    DataGridUtils.initGridByUrl(ucnsParam);
    //随单附证
    ampFormParam.columns = fileColumns;
    ampFormParam.gridId = "fileTable";
    ampFormParam.toolbar = "fileToolbar";
    ampFormParam.height = 500;
    ampFormParam.url = _server + Utils.stringFormat("/ems/ems{0}AcmpFormDt/list", viewType) + urlParam;
    DataGridUtils.initGridByUrl(ampFormParam);
}
/*
 * 页面跳转
 */
function JumpPage(id, url) {
    //跳转页面
    var path = baselocation + "/views/ems/";
    if (url.indexOf("?") == -1)
        url += "?id=" + id;
    else
        url += "&id=" + id;
    Utils.redirect(url);
}
/*
 * 行双击事件
 */
function __onDblClickRow(rowdata, rowobj) {
    var tableId = rowobj[0].offsetParent.id;
    if (tableId == "table") {//主页面列表查阅
        var param = {};
        param.gridId = "table";
        var emsTypecd = Utils.search("busType");
        param.jumPageUrl = "edit.jsp?viewType=Cus&optype=view&emsTypecd=" + emsTypecd;
        DataGridUtils.view(param);
    }
    else//表体列表查阅
        ViewListDetail(tableId);
}
/*
 * 表体列表查阅
 */
function ViewListDetail(tableId) {
    var titleParam = {imgTable: "料件", exgTable: "成品", bomTable: "单损耗", fileTable: "随单附证"};
    var jumPageUrl = GetUrl(tableId, "client");
    var rows = $('#' + tableId).bootstrapTable('getSelections');
    if (rows.length == 0) {
        layer.msg("请选择要查阅的记录", {time: 1500});
        return;
    }
    var uid = rows[0].uid;
    jumPageUrl += "&viewType=Cus&id=" + uid;
    showPage(titleParam[tableId] + "-查阅", jumPageUrl, "view");
}
/*
 * 根据类型设置相应的Url
 */
function GetUrl(type, serverType) {
    var serverUrl = "";
    var clientUrl = "";
    switch (type) {
        case "imgTable":
            serverUrl = _server + "/ems/emsCusImg/list";//料件
            clientUrl = Utils.stringFormat("../emsCusImg/edit.jsp?optype=view&viewType={0}", viewType);
            break;
        case "exgTable":
            serverUrl = _server + "/ems/emsCusExg/list";//成品
            clientUrl = Utils.stringFormat("../emsCusExg/edit.jsp?optype=view&viewType={0}", viewType);
            break;
        case "bomTable":
            serverUrl = _server + "/ems/emsCusUcnsDt/list";//单损耗
            clientUrl = Utils.stringFormat("../emsCusUcnsDt/edit.jsp?optype=view&viewType={0}", viewType);
            break;
        case "fileTable":
            serverUrl = _server + "/ems/emsCusAcmpFormDt/list";//随单附证
            clientUrl = Utils.stringFormat("../emsCusAcmpFormDt/edit.jsp?optype=view&viewType={0}", viewType);
            break;
    }
    if (serverType == "client")
        return clientUrl;
    else
        return serverUrl;
}