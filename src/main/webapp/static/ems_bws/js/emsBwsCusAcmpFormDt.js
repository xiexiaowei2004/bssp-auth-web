var viewType = Utils.search("viewType");
//服务器地址
_serverAddress = _server + "/ems_bws/emsBwsCusAcmpFormDt/list";
//跳转页面
_jumpPage = baselocation + "/views/ems_bws/emsBwsCusAcmpFormDt/";

var _saveServiceAddr = "";
var id = Utils.search("id");
var seqNo = Utils.search("seqNo");

$(function() {
	//初始化日历控件
	Utils.initCalendar();
	//初始化下拉控件
	//ACMP_FORM_TYPECD随附单证类型
	Utils.setCodesDropDown("ACMP_FORM_TYPECD");
	if (id != null) {
		$("#uid").val(id);
		FormUtils.getData();
	}
	//绑定事件
	BindEvent();
	var seqNo = Utils.search("seqNo");
	var optype = Utils.search("optype");
	if (optype == "add") {
		$("#seqNo").val(seqNo);
	} else if (optype == "edit") {
	} else if (optype == "view") {
		$("#save").hide();
		FormUtils.setPageView();
	}
	FormUtils.getData();

	//设置验证
	Validator.setValidateParam("dataForm");
})
//绑定事件
function BindEvent() {
	/********************绑定返回事件********************/
	$("#reback").click(function() {
		var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
		parent.layer.close(index);
	});
	//保存
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
//保存方法的回调方法
//用于刷新列表

function __onAfterSave(data) {
	var seqNo = $("#seqNo").val();
	var param = {};
	param.gridId = "fileTable";
	param.url = _serverAddress + "?seqNo=" + seqNo;
	window.parent.subPageRefresh(param);
	$("#reback").click();
}