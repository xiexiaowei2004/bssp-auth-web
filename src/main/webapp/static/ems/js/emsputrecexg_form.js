//服务器地址
_serverAddress = _server + "/ems/emsPutrecExg/list";
//跳转页面
_jumpPage = baselocation + "/views/ems/emsPutrecExg/";

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
	Utils.setDropDown("MODF_MARK,ETPS_EXE_MARK,ADJMTR_MARK,CUSM_EXE_MARKCD,QTY_CNTR_MARKCD,UCNS_TQSN_FLAG,CSTTN_FLAG", "codCusUnit,codCusCurr,codCusLevymode",false);
    //绑定事件
	BindEvent();
	var optype=Utils.search("optype");
	if(optype=="add"){
        _saveServiceAddr = _serverAddress + "/add";
        if (id == null && flag != "chgSelect") {
            //设置默认值
            SetDefault();
            //设置序号
            SetGdsSeqno();
        }
    }
	else if(optype=="edit")
		_saveServiceAddr=_serverAddress+"/update";
	else if(optype=="view"){
		$("#save").hide();
		FormUtils.setPageView();
	}
})
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
//绑定事件
function BindEvent(){
	/********************绑定返回事件********************/
	$("#reback").click(function(){
		Utils.closeModalDialog();
	});
	/****************绑定保存事件*************************/
	$("#save").click(function(){
		//设置验证
		Validator.setValidateParam("dataForm");
		if(!Validator.validate("dataForm")) return;
		if($("#gdecd").val().length != 10){
        	layer.msg("商品编码长度为10位");
        	return;
        }
		var url="/add";
		if(id!=null)
			url="/update";
		var saveParam={};
		saveParam.paramUrl=url;
		saveParam.dataForm="dataForm";
		FormUtils.save("dataForm",url,true);
	});
	/****************商品编码输入4位回车弹出商品表选择*************************/
    $("#gdecd").keydown(function (event) {
        if (event.keyCode != 13) return;
        var gdecd = $(this).val();
        if (gdecd.length >= 4) {
            var url = baselocation + "/views/cod_cus/codCusComplex/chooseList.jsp?height=350&code=" + gdecd;
            var modalParam = {url: url};
            var width = parent.$(".container").width()+"px";
            modalParam.area = [];
            modalParam.area.unshift(width,"450px");
            modalParam.title="商品信息";
            Utils.showModalDialog(modalParam);
        }
    });
}
/**
 * 选择商品后赋值商品信息
 * @param data
 * @returns
 */
function valuation(data){
	$("#gdecd").val(data.codeT+data.codeS);
	$("#gdsNm").val(data.gName);
	$("#dclUnitcd").select2().val(data.unit1).trigger("change");
	$("#lawfUnitcd").select2().val(data.unit1).trigger("change");
	$("#secdLawfUnitcd").select2().val(data.unit2).trigger("change");
	return true;
}
/**
 * 设置序号，第一条数据取账册正式表中的最大序号+1，其他则在当前表中取最大值+1
 */
function SetGdsSeqno(){
	var gdsServerUrl = _serverAddress + "/selectMaxGdsSeqno";
	$.ajax({
        url: gdsServerUrl,
        type: 'get',
        dataType: 'json',
        data: {appId: appId, seqNo: seqNo, emsNo: emsNo},
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (result) {
            if (result.code == 1) {
            	if(result.data!=null){
            		$("#gdsSeqno").val(result.data);
            	}
            }
            else {
                console.log(result.message);
            }
        },
        error: function (result) {}
    });
}