//服务器地址
_serverAddress = _server + "/ems_bws/emsBwsCusBsc/list";

//跳转页面
_jumpPage = baselocation + "/views/ems_bws/emsCusBsc/";

//操作数组
var columns=[
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
    { title: "单据状态",field: "chkstatusName",align: "left",sortable: true },
    { title: "回执状态",field: "retChannel",align: "left",sortable: true },
    { title: "操作时间",field: "decTime",align: "center",sortable: true },        
    { title: "主管海关",field: "masterCuscd",align: "center"},
    { title: "监管场所",field: "areaCode",align: "center"}
    
];
var param={};
param.columns=columns;
//页面绑定事件
$(function(){
	Utils.initCalendar();
	setCalFormat();
	//初始化下拉
	initDropDown();
	//初始化table表格
	param.url=_serverAddress;
    DataGridUtils.initGridByUrl(param);
   //刷新事件
	$("#refreshBtn").click(function(){
		DataGridUtils.refresh(param);	
	});
	
	//查阅事件
	$("#view").click(function(){
		param.jumPageUrl=_jumpPage+"view.jsp";
		DataGridUtils.view(param);	
	});

	//搜索事件
	$("#search").click(function(){
        param.url=_serverAddress;
        DataGridUtils.refresh(param);
	});


});
//回车事件绑定搜索按钮
$(document).keyup(function(event){
  if(event.keyCode ==13){
	  param.url=_serverAddress;
      DataGridUtils.refresh(param);
  }
});

//页面跳转
function JumpPage(id,url){
	//跳转页面
	var path = _jumpPage;
	if(url.indexOf("?")==-1)
		url+="?id="+id;
	else
		url+="&id="+id;
	Utils.redirect(url);
}

//列表事件
//行双击
function __onDblClickRow(rowdata,rowobj){
	JumpPage(rowdata.uid,"view.jsp?optype=view");
	
}


//设置日期格式，限制开始时间不能大于结束时间
function setCalFormat(){
	/************设置结束有效日期***************/
	//开始时间
	$('#finishValidateDateStart').datepicker().on('changeDate',function(e){  
	    var startTime = e.date;  
	    $('#finishValidateDateStartEnd').datepicker('setStartDate',startTime);  
	});  
	//结束时间：  
	$('#finishValidateDateStartEnd').datepicker({}).on('changeDate',function(e){  
	    var endTime = e.date;  
	    $('#finishValidateDateStart').datepicker('setEndDate',endTime);  
	});
	/************设置结束有效日期***************/
	/************设置录入日期***************/
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
	/************设置录入日期***************/
}

function initDropDown(){
	Utils.setCodesDropDown("DCL_TYPECD_BWS,CHK_STATUS");	
}