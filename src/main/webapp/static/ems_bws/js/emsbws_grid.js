//服务器地址
_serverAddress = _server + "/ems_bws/emsBwsBsc/list";
//跳转页面
_jumpPage = baselocation + "/views/ems_bws/emsBwsBsc/";
//操作数组
var columns = [
    {title: "", field: "select", radio: true, align: "center", width: "30"},
    { title: "仓库账册编号",field: "bwsNo",align: "left",sortable: true },
    { title: "经营企业编码",field: "bizopEtpsno",align: "center",sortable: true },
    { title: "经营企业名称",field: "bizopEtpsNm",align: "left",width:300,sortable: true},    
    { title: "结束有效日期",field: "finishValidDate",align: "center",sortable: true,formatter: function (value, row, index) {
	        if (value != "" && value != null && value.length>10) {
	            return value.substring(0, 10);
	        } else {
	            return value;
	        }
	    }
    },
    { title: "申报类型",field: "dclTypecd",align: "center",sortable: true },
    { title: "变更次数",field: "chgTmsCnt",align: "center",sortable: true },
    { title: "单据状态",field: "chkStatusName",align: "left",sortable: true },
    { title: "回执状态",field: "retChannel",align: "left",sortable: true },
    { title: "操作时间",field: "decTime",align: "center",sortable: true },        
    { title: "主管海关",field: "masterCuscd",align: "center"},
    { title: "监管场所",field: "areaCode",align: "center"}

];
var height = DataGridUtils.getHeight();
var param={columns:columns,gridId:"table",height:height,pageSize:9,pageList:[9,20,50]};
param.url = _serverAddress;

var cusParam={columns:columns,gridId:"cusTable",height:height,pageSize:9,pageList:[9,20,50]};
cusParam.url = _server + "/ems_bws/emsBwsCusBsc/list";

var hisParam={columns:columns,gridId:"hisTable",height:height,pageSize:9,pageList:[9,20,50]};
hisParam.url = _server + "/ems_bws/emsBwsHisBsc/list";
//页面绑定事件
$(function () {
    Utils.initCalendar();
    setCalFormat();
    //初始化下拉
    initDropDown();
    //初始化table表格
    //加载预录入列表
	DataGridUtils.initGridByUrl(param);
	//加载正式表列表
	DataGridUtils.initGridByUrl(cusParam);
	//加载历史表
	DataGridUtils.initGridByUrl(hisParam);

    //搜索事件
    $("#search").click(function () {
    	//var activeId = $("div.active").attr("id");获取当前活动的页签
		DataGridUtils.refresh(param);
		DataGridUtils.refresh(cusParam);
		DataGridUtils.refresh(hisParam);
    });
    //刷新事件
    $("#refresh").click(function () {
        DataGridUtils.refresh(param);
    });
    //刷新事件
	$("#cusRefresh").click(function(){
		DataGridUtils.refresh(cusParam);	
	});
	//刷新事件
	$("#hisRefresh").click(function(){
		DataGridUtils.refresh(hisParam);
	});
    //新增事件
    $("#add").click(function () {
        Utils.showEditDiv(_jumpPage + "edit.jsp?optype=add");
    });
    //修改事件
    $("#modify").click(function () {
        DataGridUtils.modify(param);
    });
    //查阅事件
    $("#view").click(function () {
        param.jumPageUrl = _jumpPage + "edit.jsp";
        DataGridUtils.view(param);
    });
    //正式表查阅事件
	$("#cusView").click(function(){
		cusParam.jumPageUrl = baselocation + "/views/ems_bws/emsCusBsc/view.jsp?viewType=Cus";
		DataGridUtils.view(cusParam);		
	});
	//历史表查阅事件
	$("#hisView").click(function(){
		hisParam.jumPageUrl = baselocation + "/views/ems_bws/emsCusBsc/view.jsp?viewType=His";
		DataGridUtils.view(hisParam);		
	});
    //变更事件
    $("#change").click(function () {
        var url = _jumpPage + "selectEms.jsp?optype=chg";
        var modalParam = {};
        modalParam.title = "账册选择";
        modalParam.url = url;
        modalParam.area = ["65%", "500px"];
        Utils.showModalDialog(modalParam);
    });
    //注销事件
    $("#cancel").click(function () {

    });
    //删除事件（批量删除）
    $("#delete").click(function () {
        var url = _serverAddress + '/deleteByList';
        param.listUrl = _serverAddress;
        param.idField = "uid";
        param.serverUrl = url;
        DataGridUtils.deleteGrid(param);
    });
    /**
     * 查看回执
     */
    $("#receipt").click(function () {
        var rowData = DataGridUtils.getRowDatas();//获取当前行数据
        DataGridUtils.viewMessageLog(rowData.seqNo);
    });

});
//回车事件绑定搜索按钮
$(document).keyup(function (event) {
    if (event.keyCode == 13) {
        param.url = _serverAddress;
        DataGridUtils.refresh(param);
    }
});

//页面跳转
function JumpPage(id, url) {
    //跳转页面
    var path = _jumpPage;
    if (url.indexOf("?") == -1)
        url += "?id=" + id;
    else
        url += "&id=" + id;
    Utils.redirect(url);
}

//列表事件
//行双击
function __onDblClickRow(rowdata, rowobj) {
    var tableId=rowobj[0].offsetParent.id;
	if(tableId=="table"){//主页面列表查阅
		$("#view").click();
	}
	else if(tableId=="cusTable"){//主页面列表查阅
		$("#cusView").click();
	}
	else if(tableId=="hisTable"){//主页面列表查阅
		$("#hisView").click();
	}
}
//设置日期格式，限制开始时间不能大于结束时间
function setCalFormat() {
    /************设置录入日期***************/
    //开始时间
    $('#decTimeStart,#finishValidDateStart').datepicker().on('changeDate', function (e) {
        var startTime = e.date;
        $('#decTimeEnd,#finishValidDateEnd').datepicker('setStartDate', startTime);
    });
    //结束时间：
    $('#decTimeEnd,#finishValidDateEnd').datepicker({}).on('changeDate', function (e) {
        var endTime = e.date;
        $('#decTimeStart,#finishValidDateStart').datepicker('setEndDate', endTime);
    });
    /************设置录入日期***************/
}

function initDropDown() {
    Utils.setCodesDropDown("DCL_TYPECD_BWS,CHK_STATUS");
}