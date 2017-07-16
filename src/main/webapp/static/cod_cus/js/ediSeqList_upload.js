//服务器地址
_serverAddress = _server + "/cod_cus/ediSeqList/list";
//跳转页面
_jumpPage = baselocation + "/views/cod_cus/ediSeqList/";

var _saveServiceAddr="";

var uid = Utils.search("id");




$(function(){


	//初始化日历控件
//	Utils.initCalendar();
	//初始化下拉控件
	Utils.setCodesDropDown("IS_ENABLE");
	
//	_onRedirect();


	//绑定事件
	BindEvent();
	
	
	FormUtils.getData();
	
	var ediSeqUid = Utils.search("ediSeqUid");
	var optype=Utils.search("optype");
	if(optype=="add"){
        $("#ediSeqUid").val(ediSeqUid);
      _saveServiceAddr=_serverAddress+"/add";
	}else if(optype=="edit"){
	_saveServiceAddr=_serverAddress+"/update";
	}else if(optype=="view"){
		FormUtils.setPageView();
	}
		
	

	if(uid!=null){
		$("#uid").val(uid);
		
	}
	//设置验证
	Validator.setValidateParam("dataForm");
})
//绑定事件
function BindEvent(){
	/********************绑定返回事件********************/
	$("#reback").click(function(){
		var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
        parent.layer.close(index);
	});
	/****************绑定保存事件*************************/  
	//保存
    $("#save").click(function(){
    	
		var url="/add";
		if(uid!=null){
			url="/update";
		}
			
		var saveParam={};
		saveParam.paramUrl=url;
		saveParam.dataForm="dataForm";
		FormUtils.save("dataForm",url,true);
	});
}


function __onAfterSave(data) {
    var param = {};
    var ediSeqUid = $("#ediSeqUid").val();
    param.gridId = "fileTable";
    param.url = _serverAddress+"?ediSeqUid="+ediSeqUid;
    window.parent.subPageRefresh(param);
    $("#reback").click();
}



