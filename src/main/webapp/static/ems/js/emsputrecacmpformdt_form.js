//服务器地址
_serverAddress = _server + "/ems/emsPutrecAcmpFormDt/list";
//跳转页面
_jumpPage = baselocation + "/views/ems/emsPutrecAcmpFormDt/";

var _saveServiceAddr = "";
//获取url中的参数
var seqNo=Utils.search("seqNo");
var emsNo=Utils.search("emsNo");
var id=Utils.search("id");

$(function(){
	var oFileInput = new FileInput();
    oFileInput.Init("txt_file", _serverAddress + "/file");
	//初始化日历控件
	Utils.initCalendar();
	//初始化下拉控件
	Utils.setDropDown("MODF_MARK,ETPS_EXE_MARK,ACMP_FORM_TYPECD");
	//绑定事件
	BindEvent();
	var optype=Utils.search("optype");
	if(optype=="add"){
		_saveServiceAddr = _serverAddress+"/add";
		if (id == null) {
            //设置默认值
            SetDefault();
            //设置序号
            SetAcmpFormSeqno();
        }
	}		
	else if(optype=="edit")
		_saveServiceAddr = _serverAddress+"/update";
	else if(optype=="view"){
		$("#save").hide();
		FormUtils.setPageView();
	}	
})
//绑定事件
function BindEvent(){
	/********************绑定返回事件********************/
	$("#reback").click(function(){
		Utils.closeModalDialog();
	});
	/****************绑定保存事件*************************/
	$("#save").click(function(){
		if(!Validator.validate("dataForm")) return;
        var id=Utils.search("id");
        var url="/add";
        if(id!=null)
            url="/update";
		var saveParam={};
		saveParam.paramUrl=url;
		saveParam.dataForm="dataForm";
		FormUtils.save("dataForm",url,true);
	});
}
/**
 * 新增时设置默认值
 * @returns
 */
function SetDefault(){
    var chgTmsCnt=Utils.search("chgTmsCnt");
    var etpsPreentNo=Utils.search("etpsPreentNo");
    SetValue("seqNo",seqNo);
    SetValue("emsNo",emsNo);
    SetValue("chgTmsCnt",chgTmsCnt);
    SetValue("etpsPreentNo",etpsPreentNo);
}
function SetValue(field,fieldValue){
    if(fieldValue!=null){
        $("#"+field).val(fieldValue);
    }
}
/**
 * 设置序号，第一条数据取账册正式表中的最大序号+1，其他则在当前表中取最大值+1
 */
function SetAcmpFormSeqno() {
    var gdsServerUrl = _serverAddress + "/selectMaxAcmpFormDtSeqno";
    $.ajax({
        url: gdsServerUrl,
        type: 'get',
        data: {appId: appId, seqNo: seqNo, emsNo: emsNo},
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (result) {
            if (result.code == 1) {
                if (result.data != null) {
                    $("#acmpFormSeqno").val(result.data);
                }
            }
            else {
                console.log(result.message);
            }
        },
        error: function (result) {
        }
    });
}
//初始化fileinput
var FileInput = function () {
    var oFile = new Object();
    //初始化fileinput控件（第一次初始化）
    oFile.Init = function(ctrlName, uploadUrl) {
    var control = $('#' + ctrlName);

    //初始化上传控件的样式
    control.fileinput({
        language: 'zh', //设置语言
        uploadUrl: uploadUrl, //上传的地址
        //allowedFileExtensions: ['jpg', 'gif', 'png'],//接收的文件后缀
        showUpload: false, //是否显示上传按钮
        showCaption: true,//是否显示标题
        maxFileCount: 1, //表示允许同时上传的最大文件个数
        enctype: 'multipart/form-data',
        validateInitialCount:true,
        previewFileIcon: "<i class='glyphicon glyphicon-king'></i>",
        msgFilesTooMany: "选择上传的文件数量({n}) 超过允许的最大数值{m}！",
        dropZoneTitle: "可拖拽文件到这里"
    });

    //导入文件上传完成之后的事件
    $("#txt_file").on("fileuploaded", function (event, data, previewId, index) {
        var data = data.response.lstOrderImport;
        if (data == undefined) {
            toastr.error('文件格式类型不正确');
            return;
        }
        //1.初始化表格
        var oTable = new TableInit();
        oTable.Init(data);
        $("#div_startimport").show();
    });
}
    return oFile;
};