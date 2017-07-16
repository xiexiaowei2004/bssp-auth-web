var viewType = Utils.search("viewType");
//服务器地址
_serverAddress = _server + Utils.stringFormat("/ems/ems{0}Exg/list",viewType);
//跳转页面
_jumpPage = baselocation + Utils.stringFormat("/views/ems/ems{0}Exg/",viewType);

//保存服务地址
var _saveServiceAddr="";
var appId=$("#appId").val();
//获取url中的参数
var seqNo=Utils.search("seqNo");
var emsNo=Utils.search("emsNo");
var id=Utils.search("id");
var flag = Utils.search("flag");

$(function(){
	//初始化日历控件
	Utils.initCalendar();
	//初始化下拉控件
	Utils.setDropDown("MODF_MARK,ETPS_EXE_MARK,ADJMTR_MARK,CUSM_EXE_MARKCD,QTY_CNTR_MARKCD,UCNS_TQSN_FLAG,CSTTN_FLAG", "codCusUnit,codCusCurr,codCusLevymode");
    //绑定事件
	BindEvent();
	FormUtils.setPageView();
})
//绑定事件
function BindEvent(){
	/********************绑定返回事件********************/
	$("#reback").click(function(){
		Utils.closeModalDialog();
	});
	
}