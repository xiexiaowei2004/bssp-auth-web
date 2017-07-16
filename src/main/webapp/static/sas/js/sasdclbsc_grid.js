var docType = Utils.search("docType");
var busType = Utils.search("busType");
var businessTypecd = Utils.search("businessTypecd");
var directionTypecd = Utils.search("directionTypecd");
var serverParam = "?docType="+docType+"&businessTypecd="+businessTypecd;
if (directionTypecd != null){
    serverParam += "&directionTypecd="+directionTypecd;
}
//服务器地址
_serverAddress = _server + "/sas/sasDclBsc/list"+serverParam;
// 跳转页面
_jumpPage = baselocation + "/views/sas/sasDclBsc/";
//操作数组
var columns=[
    { title: "全选",field: "select",radio: true,align: "center",valign: "middle"},
    { title: "申报表编号",field: "sasDclNo",align: "center",sortable: true},
    { title: "企业预录入编号",field: "etpsPreentNo",align: "center",sortable: true },
    { title: "货物流向",field: "directionTypecd",align: "center",sortable: true },
    { title: "区内账册编号",field: "areainOriactNo",align: "center",sortable: true },
    { title: "有效期",field: "validTime",align: "center",sortable: true,formatter:function(value, row, index){
    	var dataTime = row.validTime;
    	if (dataTime != "" && dataTime != null){
            dataTime = dataTime.split(" ")[0];
		}
        return dataTime;
    }},
    { title: "申报类型",field: "dclTypeNm",align: "center",sortable: true },
    { title: "变更次数",field: "chgTmsCnt",align: "left",sortable: true },
    { title: "单据状态",field: "chkStatusNm",align: "center",sortable: true },
    { title: "回执状态",field: "retChannel",align: "left",sortable: true },
    { title: "操作时间",field: "decTime",align: "center",sortable: true },
    { title: "主管海关",field: "masterCuscd",align: "center",sortable: true },
    { title: "监管场所",field: "areaCode",align: "center",sortable: true }
];
var param={};
param.columns=columns;
// table url
var tabs = ["applyTab", "cusTab", "hisTab"];
var tableName = {applyTab:"table",cusTab:"cusTable",hisTab:"hisTable"};
var serverUrl = {applyTab: "/sas/sasDclBsc/list", cusTab: "/sas/sasDclCusBsc/list", hisTab: "/sas/sasDclHisBsc/list"};
var tab = "applyTab";
//参数
// var urlParam= "?docType="+Utils.search("docType")+"&busType="+Utils.search("busType")+"&businessTypecd="+
//     Utils.search("businessTypecd")+"&directionTypecd="+Utils.search("directionTypecd");
//页面绑定事件
$(function(){

    $("#tab li").click(function () {
        tab = $(this).children("a").attr("href").split("#")[1];
        _serverAddress = _server + serverUrl[tab] + serverParam;
        param.gridId = tableName[tab];
        switch(tab){

            case "applyTab":   //预录入申报
                $("#buttonGroup a").show();
                // param.gridId = "table";
                // constantParam = urlParam;
                break;
            case "cusTab": //审批(正式)数据
                $("#buttonGroup a").hide();
                $("#refreshBtn").show();
                $("#view").show();
                // constantParam = urlParam + "&tab=cusTab";
                // param.gridId = "cusTable";
                break;
            case "hisTab":  //申报历史记录
                $("#buttonGroup a").hide();
                $("#refreshBtn").show();
                $("#view").show();
                // param.gridId = "hisTable";
                // constantParam = urlParam + "&tab=hisTab";
                break;
        }
    });

    Utils.initCalendar();
    setCalFormat();
    SetDefaul(); // 设置默认日期
    initTable(true);//初始化table
    initDropDown();
    //新增事件
    $("#add").click(function(){
        sasDclModel();
    });
    //删除事件
    $("#remove").click(function(){
        var url = _server + '/sas/sasDclBsc/list/deleteByList';
        param.url = _serverAddress;
        param.idField = "seqNo";
        param.serverUrl = url;
        DataGridUtils.deleteGrid(param);
        // removeData();
	});
	//搜索事件
	$("#search").click(function(){
        initTable(false);
	});
    //修改事件
    $("#modify").click(function(){
        //检查申报类型是结案时不可以修改
        // if (DataGridUtils.getRowDatas().dclTypecd == "3") {
        //     layer.msg("当前状态的单据不能修改！");
        //     return;
        // }
        param.jumPageUrl =_jumpPage + "edit.jsp";
        DataGridUtils.modify(param);
    });
    //业务变更
    $("#businessChange").click(function () {
        isNotEdit("2"); // 2-变更
    })
    //业务结案
    $("#businessColse").click(function () {
        // if (DataGridUtils.getRowDatas().dclTypecd == "3") {
        //     var jumPageUrl = _jumpPage + "edit.jsp" + constantParam + "&dclTypecd=" + param + "&id=" + result.data.uid;
        //     Utils.redirect(jumPageUrl);
        // }
        isNotEdit("3"); // 3-结案
    });
    //查阅事件
    $("#view").click(function(){
        // console.log($("#tab li").index($("#tab li[class='active']")));
        param.jumPageUrl = _jumpPage + "view.jsp";
        DataGridUtils.view(param);
    });
    //刷新事件
	$("#refreshBtn").click(function () {
        param.url=_serverAddress;
        DataGridUtils.refresh(param);
    });
    $("#receipt").click(function () {
        var rowData = DataGridUtils.getRowDatas();//获取当前行数据
        DataGridUtils.viewMessageLog(rowData.seqNo);
    });

    //重置按钮
    $("#resetBtn").click(function () {
        $("#validTimeStart").datepicker('setEndDate', null);
        $("#validTimeEnd").datepicker('setStartDate', null);
        $("#decTimeStart").datepicker('setEndDate', null);
        $("#decTimeEnd").datepicker('setStartDate', null);
    });
});
//回车事件绑定搜索按钮
$(document).keyup(function(event){
  if(event.keyCode ==13){
	  param.url=_serverAddress;
      DataGridUtils.refresh(param);
  }
});

/**
 * 选择页面（区内账册编号）
 */
function sasDclModel() {
    var modelParam={};
    modelParam.area = ["500px","330px"];
    modelParam.url=_jumpPage+"sasDclModal.jsp?busType="+busType;
    modelParam.title="选择页面";
    Utils.showModalDialog(modelParam);
}

function add(areainOriactNo,directionTypecd) {
    layer.closeAll();
    Utils.showEditDiv(_jumpPage+"add.jsp?areainOriactNo="+areainOriactNo);
}

/**
 *  用于判断是否可以进行业务变更或业务结案
 */
function isNotEdit(param){
    var width = $(".container").width()+"px";
    var modelParam={};
    modelParam.area = [width,"600px"];
    modelParam.url=_jumpPage+"cusList.jsp"+serverParam+"&dclTypecd="+param;
    modelParam.title="集报正式表选择";
    Utils.showModalDialog(modelParam);
    // var row = DataGridUtils.getRowDatas();
    // var uid=row.uid;
    // var chkStatus = row.chkStatus;
    // if (chkStatus != "P"){
    //     layer.msg("当前单据不允许进行该操作！",{time:1500});
    //     return;
    // }
    // var url = _server + "/sas/sasDclBsc/list/" + uid + "/judgeBusinessChange";
    // $.ajax({
    //     url: url,
    //     type: 'post',
    //     dataType: 'json',
    //     data: {"dclTypecd":param,"appId": $("#appId").val()},
    //     xhrFields: {
    //         withCredentials: true
    //     },
    //     crossDomain: true,
    //     success: function (result) {
    //         if (result.code == 1){
    //             var confrim = "";
    //             if (param == "2"){
    //                 confrim = "变更";
    //             }else if (param == "3"){
    //                 confrim = "业务结案";
    //             }
    //             layer.confirm('是否进行'+confrim+'？', {btn: ['确定', '取消']}, function () {
    //                 var jumPageUrl = _jumpPage + "edit.jsp"+ constantParam +"&dclTypecd=" + param + "&id=" + result.data.uid;
    //                 Utils.redirect(jumPageUrl);
    //             });
    //         }else{
    //             layer.msg(result.message,{time:1500});
    //         }
    //     },
    //     error: function (result) {
    //     }
    // });

}

/**
 *  删除数据
 */
function removeData() {
    var rows = DataGridUtils.getRowDatas();
    var chkStatus = rows.chkStatus;
    var dclTypecd = rows.dclTypecd;
    // if (dclTypecd != "1"){  // 1-备案
    //     layer.msg("当前单据不允许删除！",{time:1500});
    //     return;
    // }
    //检查单据状态是暂存或审批不同意,才可以删除
    if (!((chkStatus == "S" || chkStatus == "N") && dclTypecd == "1")) {
        layer.msg("单据状态禁止删除！");
        return;
    }

    var seqNo = rows.seqNo;
    layer.confirm('确认删除该记录 ？', {btn: ['确定', '取消']}, function () {
        var url = _server + "/sas/sasDclBsc/list/" + seqNo + "/delete";
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
                if (result.code == 1) {
                    layer.msg(result.message, {icon: 1, time: 1500});
                    $("#refreshBtn").click();
                }
                else{
                    layer.msg(result.message, {time: 1500});
                }
            },
            error: function (result) {
                layer.msg(result.message, {time: 1500});
            }
        });
    });
}


//设置日期格式，限制开始时间不能大于结束时间
function setCalFormat(){
	/************设置有效日期开始***************/
    //开始时间
    $('#validTimeStart').datepicker().on('changeDate',function(e){
        var startTime = e.date;
        $('#validTimeEnd').datepicker('setStartDate',startTime);
    });
    //结束时间：
    $('#validTimeEnd').datepicker({}).on('changeDate',function(e){
        var endTime = e.date;
        $('#validTimeStart').datepicker('setEndDate',endTime);
    });
    /************设置有效日期结束***************/

    /************设置录入日期开始***************/
    //开始时间
    $('#decTimeStart').datepicker().on('changeDate',function(e){
        var startTime = e.date;
        $('#decTimeEnd').datepicker('setStartDate',startTime);
    });
    //结束时间：
    $('#decTimeEnd').datepicker({}).on('changeDate',function(e){
        var endTime = e.date;
        $('#decTimeStart').datepicker('setEndDate',endTime);
    });
    /************设置有效日期结束***************/
}
/**
 * 列表双击跳转 查阅页面
 */
function __onDblClickRow(rowdata,rowobj){
    Utils.showEditDiv(_jumpPage + "view.jsp?id=" + rowdata.uid);
}

//初始化下拉控件
function initDropDown(){
    /**
     * DCL_TYPECD_SAS 申报类型
     * EMAPV_MARKCD_SAS 审批状态代码
     * CHK_STATUS 单据状态代码
     */
    Utils.setCodesDropDown("DCL_TYPECD_SAS,CHK_STATUS");
}


//下拉回调
function SetDefaul() {
    var now = new Date();
    var date=new Date(now.getTime()-1000*60*60*24*5);
    $('#decTimeStart').datepicker('setDate', date);
    $('#decTimeEnd').datepicker('setDate', now);
}

function initTable(isInit) {
    var gridId = param.gridId;
    $.each(tabs, function (index, field) {
        var tab = field;
        param.gridId = tableName[tab];
        param.url=_server+serverUrl[tab]+serverParam;
        if (isInit){
            DataGridUtils.initGridByUrl(param);
        }else {
            DataGridUtils.refresh(param);
        }
    });
    param.gridId = gridId;
}


//中转站
function getData(id,dclTypecd) {
    layer.closeAll();
    Utils.showEditDiv(_jumpPage+"edit.jsp?id="+id+"&dclTypecd="+dclTypecd);
}
