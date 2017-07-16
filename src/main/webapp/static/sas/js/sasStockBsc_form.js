//服务器地址
_serverAddress = _server + "/sas/sasStockBsc/list";
//跳转页面
_jumpPage = baselocation + "/views/sas/sasStockBsc/";
var param={};
param.height=300;
param.pageSize = 5;
param.pageList = [5, 10, 20, 50];
param.gridId="table";
param.toolbar="toolbar";
param.table="sasStockDt";
var id=Utils.search("id");
var optype=Utils.search("optype");
var chargeback=Utils.search("chargeback");
var viewType = Utils.search("viewType");
if(viewType=="cusTable"){
    _serverAddress = _server + "/sas/sasStockCus/list";
    param.table="sasStockCusDt";
}else if(viewType=="hisTable"){
    _serverAddress = _server + "/sas/sasStockHis/list";
    param.table="sasStockHisDt";
}
var decTime=DateUtil.dateToStr("yyyy-MM-dd HH:mm:ss");
$(function(){
    //初始化日历控件
    Utils.initCalendar();
    //初始化下拉
    initDropDown();
    //$('#tab li:eq(0) a').tab('show');
    //绑定事件
    BindEvent();
    //新增页面设置默认值
    if(id==null){
        SetDefault();
    }
});
//初始化列表控件
function initGrid(data){
    //清单
    var Columns=[
        { title: "单选",field: "select",radio: true,align: "center",valign: "middle"},
        { title: "商品序号",field: "sasStockSeqno",align: "center",sortable: true,order: "desc"},
        { title: "申报表序号",field: "sasDclSeqno",align: "center",sortable: true },
       /* { title: "备案序号",field: "oriactGdsSeqno",align: "center",sortable: true },*/
        { title: "商品料号",field: "gdsMtno",align: "center",sortable: true },
        { title: "商品编码",field: "gdecd",align: "center",sortable: true },
        { title: "商品名称",field: "gdsNm",align: "left",sortable: true },
        /*{ title: "商品规格型号描述",field: "gdsSpcfModelDesc",align: "left",sortable: true },*/
        { title: "申报计量单位",field: "dclUnitcd",align: "center",sortable: true },
    /*    { title: "法定计量单位",field: "lawfUnitcd",align: "center",sortable: true },
        { title: "国别",field: "natcd",align: "left",sortable: true },*/
        { title: "申报数量",field: "dclQty",align: "right",sortable: true },
        { title: "申报单价",field: "dclUprcAmt",align: "right",sortable: true },
        { title: "申报总价",field: "dclTotalAmt",align: "right",sortable: true },
        { title: "申报币制",field: "dclCurrcd",align: "center",sortable: true },
     /*   { title: "法定数量",field: "lawfQty",align: "right",sortable: true },
        { title: "征减免方式",field: "lvyrlfModecd",align: "left",sortable: true },*/
    ];
    var urlParam=Utils.stringFormat("?seqNo={0}",data.seqNo);
    //商品
    param.columns=Columns;
    param.url=_server + "/sas/"+param.table+"/list"+urlParam;
    DataGridUtils.initGridByUrl(param);
}
//绑定事件
function BindEvent(){
    /********************返回事件********************/
    $("#reback").click(function(){
        parent.Utils.hideEditDiv();
    });
    /****************绑定保存事件*************************/
    $("#save").click(function(){
        var uid = $("#uid").val();
        if(uid==""){
            FormUtils.save("dataForm","/add",true);
        }else{
            FormUtils.save("dataForm","/update",true);
        }
    });
    /********************绑定提交事件***************************/
    $("#submit").click(function () {
        //页面加载设置表单需要验证
        Validator.setValidateParam("dataForm");
        if (!Validator.validate("dataForm")) return;
        if(parseInt($("#netWt").val())>parseInt($("#grossWt").val())){
            layer.msg("净重必须小于或等于毛重", {time: 1500});
            return;
        }
        var url = "/submit";
        FormUtils.save("dataForm", url,true);
    });
    /***********************表体绑定事件*******************************/
    var urlParam="../sasStockDt/edit.jsp";
    var serverUrl="/sas/sasStockDt/list";
    //绑定新增事件
    $("#Add").click(function(){
        var rows = $("#table").bootstrapTable('getData');
        var sasDclSeqNoList = "";
        if (rows.length != 0) {
            var id = $.map(rows, function (row) {
                return row["sasDclSeqno"];
            });
            sasDclSeqNoList = id.join(",");
        }
        //弹出窗口
        modalParam.area = [];
        var width = $(".container").width()+"px";
        modalParam.area.unshift(width,"540px");
        modalParam.url="../sasDclDt/list.jsp?id="+$("#sasDclNo").val()+"&sasDclSeqNoList="+sasDclSeqNoList+"&seqNo="+$("#seqNo").val()
        modalParam.title="申报表商品选择";
        Utils.showModalDialog(modalParam);
        //showPage("出入库单商品-新增","../sasDclDt/list.jsp?id="+$("#sasDclNo").val()+"&sasDclSeqNoList="+sasDclSeqNoList+"&seqNo="+$("#seqNo").val());
    });
    //绑定修改事件
    $("#Edit").click(function(){
        detailsPage("商品信息",urlParam+"?optype=modify");
    });
    $("#View").click(function () {
        detailsPage("商品信息",urlParam+"?optype=view");
    });
    $("#Delete").click(function () {
        removeDate(serverUrl);
    });
    $("#Refresh").click(function () {
        refreshGrid(serverUrl);
    });
    /*if(optype=="modify" && stockTypecd=="E"){
        $("#table-head").html("物流集报出库单-修改");
        $("#product").html("出库单商品");
    }
    if(optype=="modify" && stockTypecd=="I"){
        $("#table-head").html("物流集报入库单-修改");
        $("#product").html("入库单商品");
    }
    if(optype=="view" && stockTypecd=="E"){
        $("#table-head").html("物流集报出库单-查阅");
        $("#product").html("出库单商品");
    }
    if(optype=="view" && stockTypecd=="I"){
        $("#table-head").html("物流集报入库单-查阅");
        $("#product").html("入库单商品");
    }
    if(optype=="cancellation" && stockTypecd=="E"){
        $("#table-head").html("物流集报出库单-作废申请");
    }
    if(optype=="cancellation" && stockTypecd=="I"){
        $("#table-head").html("物流集报入库单-作废申请");
    }
    if(optype=="add" && stockTypecd=="E"){
        $("#table-head").html("物流集报出库单-新增");
    }
    if(optype=="add" && stockTypecd=="I"){
        $("#table-head").html("物流集报入库单-新增");
    }*/
}
function showPage(title,url){
    var uid=$("#uid").val();
    if(uid==""){
        layer.alert("表头尚未保存，不能新增！");
        return;
    }
    //弹出窗口
    modalParam.area = [];
    var width = $(".container").width()+"px";
    modalParam.area.unshift(width,"520px");
    modalParam.url=url;
    modalParam.title=title;

    var seqNo = $("#seqNo").val();
    if (url.indexOf("id") == -1){
        modalParam.url += "?id=" + seqNo;
    }
    Utils.showModalDialog(modalParam);
}

function detailsPage(title,url){
    var rows = $("#table").bootstrapTable('getSelections');
    if (rows.length == 0) {
        layer.msg("请选择要操作的记录", {time: 1500});
        return;
    }
    var uid=rows[0]["uid"];
    showPage(title,url+"&id="+uid);
}

// url 对应后台路径
function removeDate(url) {
    url = _server + url +'/deleteByList';
    param.serverUrl=url;
    param.idField = "uid";
    param.gridId = "table";
    DataGridUtils.deleteGrid(param);
}

// url 对应后台路径
function refreshGrid(pageId,url) {
    var urlParam=Utils.stringFormat("?seqNo={0}",$("#seqNo").val());
    param.serverUrl= _server + url + urlParam;
    param.idField = "uid";
    param.gridId = "table";
    DataGridUtils.refresh(param);
}

//设置默认值
function SetDefault(){
     //设置录入日期
    var dclTime = DateUtil.dateToStr("yyyy-MM-dd");
    $("#decTime").val(decTime);
    $("#dclTime").val(dclTime);
    Utils.getLoginUserInfo();   //获取用户信息
}



function __onAfterLoad(data){

    if(optype=="modify"){
        $("#decTime").val(decTime);
    }
    if($("#dclTime").val()!=""){
        SetValue("dclTime",$("#dclTime").val().substring(0,10))
    }
    initGrid(data);
}

function SetValue(id,value){
    $("#"+id).val(value);
}

function __onDblClickRow(rowdata,rowobj){
   showPage('出入库单商品-查阅','../sasStockDt/edit.jsp?optype=view&id='+rowdata.uid)
}

/**
 *
 * @param data
 * @description 回调用于跳转
 */
function __onAfterSave(data) {
    parent.$("#refreshBtn").click();
    if(data.chkStatus=="D"){
        parent.Utils.hideEditDiv();
    }else {
        location.href=_jumpPage + "edit.jsp?id=" + data.uid+"&optype=modify";
    }
}

function __onAfterSaveError(data) {
    parent.$("#refreshBtn").click();
    if(data!=null){
        location.href=_jumpPage + "edit.jsp?id=" + data.uid+"&optype=modify";
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
function initDropDown(){
    //获取字典的集合
    var dicData="DCL_TYPE,EMAPV_MARKCD_SAS,SAS_TYPE,CENTRALIZED_DCL_TYPECD,OPERATE_TYPE,DIRECTION_TYPECD,OWNER_SYSTEM,PASS_TYPECD,PASSPORT_USED_TYPECD,CHK_STATUS";
    //获取参数代码表的集合
    var codesData="codCusCustomsfec,codStdAreaCode,codCusWrap";
    Utils.setDropDown(dicData,codesData);
}

/**
 *
 * @param params
 * @description 下拉回调
 */
function __onAfterInitDropDown(data) {
    if(id!=null){
        FormUtils.getData();
    }
    //查阅
    if (optype == "view") {
        $(".hid").hide();
        $("#isview").css("display","");
        FormUtils.setPageView();
    }
    //新增
    if(optype == "add"){
        $(".goods").hide();
        FormUtils.initForm(parent.data);
    }
    //作废申请
    if(optype=="cancellation" || chargeback=="true"){
        $("#save").hide();
        $(".noedit").attr("readonly","readonly");
        $(".ban").attr("disabled",true);
        $(".goods").hide();
        FormUtils.initForm(parent.data);
    }
    //退运
    if(optype=="return"){
        $("#save").hide();
        $(".noedit").attr("readonly","readonly");
        $(".ban").attr("disabled",true);
    }
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
// 获取用户基本信息回调
function __onAfterGetLoginUserInfo(userinfo) {
    if(optype != "cancellation"){
        if ($("#seqNo").val() == "") {
            //获取单据编号
            Utils.getBillCode("applyId=001&areaCode="+userinfo.copEnt.areaCode+"&docType="+parent.docType+"SeqNO&serverType=C", 'seqNo', '单据编号获取失败');
            //获取企业预录入编号
            Utils.getBillCode("applyId=001&areaCode="+userinfo.copEnt.areaCode+"&docType="+parent.docType+'CopNO&serverType=C', 'sasStockPreentNo,etpsPreentNo,copEntNo', '出入库单预录入编号获取失败');
        }
    }
}