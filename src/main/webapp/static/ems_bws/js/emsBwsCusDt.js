//服务器地址
_serverAddress = _server + "/ems_bws/emsBwsCusDt/list";
// 跳转页面
_jumpPage = baselocation + "/views/ems_bws/emsBwsCusDt/";

var _saveServiceAddr = "";
var id = Utils.search("id");
var seqNo = Utils.search("seqNo");
var optype = Utils.search("optype");

$(function() {
	// 初始化日历控件
	Utils.initCalendar();
	// 初始化下拉控件
	Utils.setDropDown("MODF_MARK,CUSM_EXE_MARKCD", "codCusUnit,codCusCurr",false);	
	// 绑定事件
	BindEvent();
	FormUtils.setPageView();
})
// 绑定事件
function BindEvent() {
	/** ******************绑定返回事件******************* */
	$("#reback").click(function() {
		Utils.closeModalDialog();
	});

	// 保存
	$("#save").click(function() {
		var url = "/add";
		if (id != null) {
			url = "/update";
		}
		var saveParam = {};
		saveParam.paramUrl = url;
		saveParam.dataForm = "dataForm";
		FormUtils.save("dataForm", url, true);
	});
}
function __onAfterInitDropDown(){
	FormUtils.getData();
}