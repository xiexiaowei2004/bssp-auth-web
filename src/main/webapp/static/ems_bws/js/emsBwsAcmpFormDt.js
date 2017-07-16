//服务器地址
_serverAddress = _server + "/ems_bws/emsBwsAcmpFormDt/list";
//跳转页面
_jumpPage = baselocation + "/views/ems_bws/emsBwsAcmpFormDt/";

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

	var optype = Utils.search("optype");
	if (optype == "add") {
		if (id == null) {
            //设置默认值
            SetDefault();
        }
	} else if (optype == "edit") {
	} else if (optype == "view") {
		$("#save").hide();
		FormUtils.setPageView();
	}
	FormUtils.getData();
})
//绑定事件
function BindEvent() {
	/********************绑定返回事件********************/
	$("#reback").click(function() {
		Utils.closeModalDialog();
	});

	//保存
	$("#save").click(function() {
		//设置验证
		Validator.setValidateParam("dataForm");
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
	parent.refreshGrid("file");
	$("#reback").click();
}
/**
 * 新增时设置默认值
 * @returns
 */
function SetDefault(){
    var chgTmsCnt=Utils.search("chgTmsCnt");
    var etpsPreentNo=Utils.search("etpsPreentNo");
    var bwsNo=Utils.search("bwsNo");
    SetValue("seqNo",seqNo);
    SetValue("bopNo",bwsNo);
    SetValue("chgTmsCnt",chgTmsCnt);
    SetValue("etpsPreentNo",etpsPreentNo);
}
function SetValue(field,fieldValue){
    if(fieldValue!=null){
        $("#"+field).val(fieldValue);
    }
}