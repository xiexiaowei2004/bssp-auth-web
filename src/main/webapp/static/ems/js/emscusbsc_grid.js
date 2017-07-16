//服务器地址
_serverAddress = _server + "/ems/emsCusBsc/list";
//跳转页面
_jumpPage = baselocation + "/views/ems/emsCusBsc/";
//操作数组
var columns=[
	{ title: "单选",field: "select",radio: true,width:36,align: "center"},
	{ title: "账册编号",field: "emsNo",align: "center",sortable: true },
    { title: "预录入统一编号",field: "seqNo",align: "center",sortable: true,order: "desc"},
    { title: "企业内部编号",field: "etpsPreentNo",align: "center",sortable: true,order: "desc"},
    { title: "经营企业社会信用代码",field: "bizopEtpsSccd",align: "center",sortable: true },
    { title: "经营企业名称",field: "bizopEtpsNm",align: "left",width:300,sortable: true},    
    { title: "结束有效日期",field: "finishValidDate",align: "center",sortable: true },
    { title: "申报类型",field: "dclTypename",align: "center",sortable: true },
    { title: "变更次数",field: "chgTmsCnt",align: "center",sortable: true },
    { title: "单据状态",field: "chkStatusName",align: "left",sortable: true },
    { title: "操作时间",field: "decTime",align: "center",sortable: true },    
    { title: "回执状态",field: "retChannel",align: "left",sortable: true },
    { title: "主管海关",field: "masterCuscd",align: "center"},
    { title: "监管场所",field: "areaCode",align: "center"}
];
var emsTypecd=Utils.search("busType");
var param={};
param.columns=columns;
param.url=_serverAddress+"?emsTypecd="+emsTypecd;
//页面绑定事件
$(function(){	
	//初始化下拉控件
	Utils.setCodesDropDown("CHK_STATUS,DCL_TYPE",false);
	//初始化日历控件
	Utils.initCalendar();
	setCalFormat();
	DataGridUtils.initGridByUrl(param);
	if(emsTypecd=="1"){
		$("#tableTitle").html("加贸账册查询");
		$("#table").bootstrapTable("hideColumn","areaCode");
	}
	else if(emsTypecd=="2"){
		$("#tableTitle").html("加工账册查询");
	}
	//查阅事件
	$("#view").click(function(){
		param.transParam="emsTypecd";
		param.jumPageUrl=_jumpPage+"edit.jsp?viewType=Cus";
		DataGridUtils.view(param);
	});	
	//搜索事件
	$("#search").click(function(){
        DataGridUtils.refresh(param);
	});	
});
//回车事件绑定搜索按钮
$(document).keyup(function(event){
  if(event.keyCode ==13){
      DataGridUtils.refresh(param);
  }
});
//设置日期格式，限制开始时间不能大于结束时间
function setCalFormat(){
	/************设置结束有效日期***************/
	//开始时间
	$('#finishValidDateStart').datepicker().on('changeDate',function(e){  
	    var startTime = e.date;
	    $('#finishValidDateStartEnd').datepicker('setStartDate',startTime);	      
	});
	//结束时间：  
	$('#finishValidDateStartEnd').datepicker({}).on('changeDate',function(e){  
	    var endTime = e.date;  
	    $('#finishValidDateStart').datepicker('setEndDate',endTime);  
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
