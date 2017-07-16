var docType = Utils.search("docType");
var busType = Utils.search("busType");
var serverParam = "?docType="+docType;
//服务器地址
_serverAddress = _server + "/dcr/dcrChgoffBsc/list"+serverParam;
//跳转页面
_jumpPage = baselocation + "/views/dcr/dcrChgoffBsc/";
//操作数组
var columns=[
    { title: "全选",field: "select",radio: true,align: "center",valign: "middle"},
    { title: "账册编号",field: "emsNo",align: "center",sortable: true},
    { title: "经营单位代码",field: "bizopEtpsno",align: "center",sortable: true },
    { title: "经营单位名称",field: "bizopEtpsNm",align: "left",sortable: true },
    { title: "报核申报日期",field: "chgoffDclTime",align: "center",sortable: true,formatter:function(value, row, index){
        var dataTime = row.chgoffDclTime;
        if (dataTime != "" && dataTime != null){
            dataTime = dataTime.split(" ")[0];
        }
        return dataTime;
	}},
    { title: "报核次数",field: "chgTmsCnt",align: "center",sortable: true},
    { title: "申报类型",field: "chgoffTypeNm",align: "center",sortable: true },
    { title: "单据状态",field: "chkStatusNm",align: "center",sortable: true },
    { title: "操作时间",field: "decTime",align: "center",sortable: true },
    { title: "回执状态",field: "retChannel",align: "center",sortable: true },
    { title: "主管海关",field: "masterCuscd",align: "center",sortable: true },
    { title: "监管场所",field: "areaCode",align: "center",sortable: true }
];
var param={};
param.columns=columns;
param.gridId = "table";
// table url
var tabs = ["applyTab", "cusTab", "hisTab"];
var tableName = {applyTab:"table",cusTab:"cusTable",hisTab:"hisTable"};
var serverUrl = {applyTab: "/dcr/dcrChgoffBsc/list", cusTab: "/dcr/dcrChgoffCusBsc/list", hisTab: "/dcr/dcrChgoffHisBsc/list"};
var tab = "applyTab";

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
                // constantParam += "&tab=cusTab"
                // constantParam = urlParam + "&tab=cusTab";;
                // param.gridId = "cusTable";
                break;
            case "hisTab":  //申报历史记录
                $("#buttonGroup a").hide();
                $("#refreshBtn").show();
                $("#view").show();
                // param.gridId = "hisTable";
                // constantParam += "&tab=hisTab";
                // constantParam = urlParam + "&tab=hisTab";
                break;
        }
        // $("#search").click();
    });
	Utils.initCalendar();
	setCalFormat();
    initDropDown();
	initTable(true);
	//新增事件
	$("#add").click(function(){
        Utils.showEditDiv(_jumpPage+"add.jsp");
	});
	//删除事件（批量删除）
	$("#remove").click(function(){
        var url = _server + '/dcr/dcrChgoffBsc/list/deleteByList';
        param.url = _serverAddress;
        param.idField = "seqNo";
        param.serverUrl = url;
        DataGridUtils.deleteGrid(param);
	});
	//搜索事件
	$("#search").click(function(){
        initTable(false);
	});
    //修改事件
    $("#modify").click(function(){
        param.jumPageUrl = _jumpPage + "edit.jsp";
        DataGridUtils.modify(param);
    });
    //查阅事件
    $("#view").click(function(){
        param.jumPageUrl=_jumpPage+"view.jsp";
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
        $("#chgoffDclTimeStart").datepicker('setEndDate', null);
        $("#chgoffDclTimeEnd").datepicker('setStartDate', null);
    })
});
//回车事件绑定搜索按钮
$(document).keyup(function(event){
  if(event.keyCode ==13){
	  param.url=_serverAddress;
      DataGridUtils.refresh(param);
  }
});

function __onDblClickRow(rowdata,rowobj){
    Utils.showEditDiv(_jumpPage + "view.jsp?id=" + rowdata.uid);
}


//设置日期格式，限制开始时间不能大于结束时间
function setCalFormat(){
	/************设置报核申报日期***************/
	//开始时间
	$('#chgoffDclTimeStart').datepicker().on('changeDate',function(e){
	    var startTime = e.date;  
	    $('#chgoffDclTimeEnd').datepicker('setStartDate',startTime);
	});  
	//结束时间：  
	$('#chgoffDclTimeEnd').datepicker({}).on('changeDate',function(e){
	    var endTime = e.date;  
	    $('#chgoffDclTimeStart').datepicker('setEndDate',endTime);
	});
	/************报核申报日期***************/
}


//初始化下拉控件
function initDropDown(){
    Utils.setCodesDropDown("CHGOFF_TYPECD");
}

//初始化tableh和搜索 isInit:判断是初始化还是搜索
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

