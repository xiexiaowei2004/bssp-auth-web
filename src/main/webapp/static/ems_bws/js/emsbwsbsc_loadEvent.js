/*******************列表事件**********************/
//获取当前登录用户相关信息后，加载列表
function __onAfterGetLoginUserInfo(loginuser) {
	if(loginuser==null||loginuser==undefined||loginuser=="") return;
    //登录用户企业信息
    var copEnt = loginuser.copEnt;
    //获取预录入统一编号
    Utils.getBillCode('applyId=001&areaCode=' + copEnt.areaCode + '&docType=A0402SeqNO&serverType=C', 'seqNo', '预录入统一编号获取失败');
    //获取企业内部编号
    Utils.getBillCode('applyId=001&areaCode=' + copEnt.areaCode + '&docType=A0402CopNO&serverType=C', 'etpsPreentNo,bwsNo', '企业内部编号获取失败');
    $("#masterCuscd").select2().val(copEnt.customsCode).trigger("change");//主管海关
    $("#areaCode").select2().val(copEnt.areaCode).trigger("change");//监管场所
    $("#inputEtpsSccd").val(copEnt.copGbCode); //录入单位社会信用代码
    SetValue("bizopEtpsno", loginuser.inputCopNo);//经营企业编号
    SetValue("bizopEtpsSccd", loginuser.copGbCode);//经营企业社会信用代码
    SetValue("bizopEtpsNm", loginuser.inputCopName);//经营企业名称
    SetValue("dclEtpsno", loginuser.inputCopNo);//申报企业编号
    SetValue("dclEtpsSccd", loginuser.copGbCode);//申报企业社会信用代码
    SetValue("dclEtpsNm", loginuser.inputCopName);//申报企业名称
    SetValue("contactEr", loginuser.inputerName);//联系人
    SetValue("contactTele", copEnt.telCo);//联系电话
}

/*******************表单事件**********************/
/*
 * 表头页面加载完成后，初始化表体列表
 */
function __onAfterLoad(data) {
	var seqNo="",chgTmsCnt="";
	if(data!=null){
		seqNo=data.seqNo;
		chgTmsCnt=data.chgTmsCnt;
	}
    initGrid(seqNo,chgTmsCnt);
    var dclTypecd = $("#dclTypecd").val();
    if (dclTypecd == "2")
        $("#detail").show();
}
/*
 * 页面下拉初始化成功后执行
 */
function __onAfterInitDropDown() {
    //获取页面传递的参数
    var optype = Utils.search("optype");//操作页面：add,modify,view
    var id = Utils.search("id");//主键
    if (id != null) {
        FormUtils.getData();
    }
    else {
        $("#emapvStucd").prop("disabled", true);
        $("#emapvStucd").select2().val("S").trigger("change");
        $("#dclTypecd").prop("disabled", true);
        $("#dclTypecd").select2().val("1").trigger("change");
        //获取当前登录用户相关信息
        Utils.getLoginUserInfo();
        initGrid("","");
    }
    var dclTypecd = $("#dclTypecd").val();
    if (dclTypecd == "2")
        $("#detail").show();
}
/*
 * 保存成功后执行
 */
function __onAfterSave(formData) {
    parent.$("#refreshBtn").click();
    location.href="edit.jsp?optype=modify&id="+formData.uid;
}
/*
 * 初始化列表控件
 */
function initGrid(seqNo,chgTmsCnt) {
    var DtColumns = [
        {title: "", field: "select", radio: true, align: "center", valign: "middle"},
        {title: "商品序号", field: "gdsSeqno", align: "center", sortable: true, order: "desc"},
        {title: "最近入仓(核增）日期", field: "inDate", align: "center", sortable: true},
        {title: "商品名称", field: "gdsNm", align: "left", sortable: true},
        {title: "存储(监管）期限", field: "limitDate", align: "center", sortable: true},
        {title: "入仓数量", field: "inQty", align: "right", sortable: true},
        {title: "国别代码", field: "natcd", align: "left", sortable: true}
    ];
    //附件
    var fileColumns = [
        {title: "", field: "select", radio: true, align: "center", valign: "middle"},
        {title: "随附单证序号", field: "acmpFormSeqno", align: "center", sortable: true, order: "desc"},
        {title: "随附单证类型", field: "acmpFormTypecd", align: "center", sortable: true},
        {title: "随附单证编号", field: "acmpFormNo", align: "center", sortable: true},
        {title: "固定编号", field: "fixdNo", align: "center", sortable: true},
        {title: "随附单证文件名称", field: "acmpFormFileNm", align: "left", sortable: true}
    ];
    var urlParam=Utils.stringFormat("?seqNo={0}&chgTmsCnt={1}",seqNo,chgTmsCnt);
    var param = {};
    //附件
    param.columns = fileColumns;
    param.gridId = "fileTable";
    param.toolbar = "fileToolbar";
    param.url = _server + "/ems_bws/emsBwsAcmpFormDt/list" + urlParam;
    DataGridUtils.initGridByUrl(param);

    //明细
    param.columns = DtColumns;
    param.gridId = "dtTable";
    param.toolbar = "dtToolbar";
    param.url = _server + "/ems_bws/emsBwsDt/list" + urlParam;
    DataGridUtils.initGridByUrl(param);
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
        param.jumPageUrl = "edit.jsp?optype=view";
        DataGridUtils.view(param);
    }
    else//表体列表查阅
        ViewListDetail(tableId);
}
/*
 * 表体列表查阅
 */
function ViewListDetail(tableId) {
    var titleParam = {dtTable: "表体", fileTable: "随单附证"};
    var jumPageUrl = GetUrl(tableId, "client");
    var rows = $('#' + tableId).bootstrapTable('getSelections');
    if (rows.length == 0) {
        layer.msg("请选择要查阅的记录", {time: 1500});
        return;
    }
    var uid = rows[0].uid;
    jumPageUrl += "&id=" + uid;
    showPage(titleParam[tableId] + "-查阅", jumPageUrl, "view");
}
/*
 * 
 */
function __onAfterGridDelete(gridParam, tableId) {
    var gridId = gridParam.gridId;
    var param = {};
    var url = GetUrl(gridId.replace("Table", ""));
    if (url != "")
        DataGridUtils.refresh(param);
    return false;
}
/*
 * 根据类型设置相应的Url
 */
function GetUrl(type, serverType) {
    var serverUrl = "";
    var clientUrl = "";
    switch (type) {
        case "dtTable":
            url = _server + "/ems/emsBwsDt/list";//料件
            clientUrl = "../emsBwsDt/edit.jsp?optype=view";
            break;
        case "fileTable":
            url = _server + "/ems/emsBwsAcmpFormDt/list";//随单附证
            clientUrl = "../emsBwsAcmpFormDt/edit.jsp?optype=view";
            break;
    }
    if (serverType == "client")
        return clientUrl;
    else
        return url;
}