//服务器地址
_serverAddress = _server + "/ems/emsPutrecUcnsDt/list";
//跳转页面
_jumpPage = baselocation + "/views/ems/emsPutrecUcnsDt/";
//保存服务地址
var _saveServiceAddr = "";
var appId = "";
//获取url中的参数
var seqNo = Utils.search("seqNo");
var emsNo = Utils.search("emsNo");
var id = Utils.search("id");
var flag = Utils.search("flag");
var optype = Utils.search("optype");

/**
 * 页面加载事件
 */
$(function () {
	appId = $("#appId").val();
    //初始化日历控件
    Utils.initCalendar();
    //初始化下拉控件
    Utils.setDropDown("MODF_MARK,ETPS_EXE_MARK,UCNS_DCL_STUCD","",false);
    //绑定事件
    BindEvent();
    if (optype == "add") {
        _saveServiceAddr = _serverAddress + "/add";
        if (id == null && flag != "chgSelect") {
            //设置默认值
            SetDefault();
            //设置序号
            SetGdsSeqno();
        }
    }
    else if (optype == "edit")
        _saveServiceAddr = _serverAddress + "/update";
    else if (optype == "view") {
        $("#save").hide();
        FormUtils.setPageView();
    }
})
/**
 * 新增时设置默认值
 * @returns
 */
function SetDefault() {
    var chgTmsCnt = Utils.search("chgTmsCnt");
    var etpsPreentNo = Utils.search("etpsPreentNo");
    SetValue("seqNo", seqNo);
    SetValue("emsNo", emsNo);
    SetValue("chgTmsCnt", chgTmsCnt);
    SetValue("etpsPreentNo", etpsPreentNo);
    var now = new Date();
    now.setFullYear(now.getFullYear()+1);
    var ucnsValidDate=DateUtil.dateToStr("yyyy-MM-dd",now);
    $("#ucnsValidDate").datepicker("setDate",ucnsValidDate);
}
function SetValue(field, fieldValue) {
    if (fieldValue != null) {
        $("#" + field).val(fieldValue);
    }
}
/**
 * 绑定事件
 * @returns
 */
function BindEvent() {
    /********************绑定返回事件********************/
    $("#reback").click(function () {
    	Utils.closeModalDialog();
    });
    /****************绑定保存事件*************************/
    $("#save").click(function () {
    	//设置验证
    	Validator.setValidateParam("dataForm");
        if (!Validator.validate("dataForm")) return;
        var url = "/add";
        if (id != null)
            url = "/update";
        var saveParam = {};
        saveParam.paramUrl = url;
        saveParam.dataForm = "dataForm";
        FormUtils.save("dataForm", url, true);
    });
    //成品序号，失去焦点，从成品表中取出数据赋值
    $("#endprdSeqno").blur(function () {
        var url = _server + "/ems/emsPutrecExg/list/selectGdsByGdsSeqno";
        SetGdsData(url,"EXG");
    });
    //料件序号，失去焦点，从料件表中取出数据赋值
    $("#mtpckSeqno").blur(function () {
        var url = _server + "/ems/emsPutrecImg/list/selectGdsByGdsSeqno";
        SetGdsData(url,"IMG");
    });
  //失去焦点
    $(".calUcnsQty").blur(function () {
    	CalUcnsQty();
    });
}
/**
 * 根据序号获取商品信息赋值
 * @param url 服务地址
 * @param type 料件、成品
 * @param chgTmsCnt 变更次数
 * @returns
 */
function SetGdsData(url,type) {
    var seqNo = Utils.search("seqNo");
    if(seqNo == null) seqNo=$("#seqNo").val();
    var chgTmsCnt =Utils.search("chgTmsCnt");
    if(chgTmsCnt == null) chgTmsCnt=$("#chgTmsCnt").val();
    var gdsSeqno = $("#mtpckSeqno").val();//料件序号
    if(type=="EXG")
    	gdsSeqno = $("#endprdSeqno").val();//成品序号
    $.ajax({
        url: url,
        type: 'post',
        dataType: 'json',
        data: { "appId": $("#appId").val(), "seqNo": seqNo, "gdsSeqno": gdsSeqno,"chgTmsCnt": chgTmsCnt },
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (result) {
            if (result.code == 1) {
            	var gdsMtno="",gdecd="",gdsNm="";
            	if(result.data!=null){
            		gdsMtno=result.data.gdsMtno;
            		gdecd=result.data.gdecd;
            		gdsNm=result.data.gdsNm;
            	}
            	var validator = $('#dataForm').data('bootstrapValidator');
            	if(type=="EXG"){
            		$("#endprdGdsMtno").val(gdsMtno);
                    $("#endprdGdecd").val(gdecd);
                    $("#endprdGdsNm").val(gdsNm);
                    if(typeof(validator) != "undefined") {
                        validator.updateStatus('endprdGdsMtno', 'NOT_VALIDATED', null).validateField('endprdGdsMtno');
                        validator.updateStatus('endprdGdecd', 'NOT_VALIDATED', null).validateField('endprdGdecd');
                        validator.updateStatus('endprdGdsNm', 'NOT_VALIDATED', null).validateField('endprdGdsNm');
                    }
            	}
            	else{
            		$("#mtpckGdsMtno").val(gdsMtno);
                    $("#mtpckGdecd").val(gdecd);
                    $("#mtpckGdsNm").val(gdsNm);
                    if(typeof(validator) != "undefined") {
                        validator.updateStatus('mtpckGdsMtno', 'NOT_VALIDATED', null).validateField('mtpckGdsMtno');
                        validator.updateStatus('mtpckGdecd', 'NOT_VALIDATED', null).validateField('mtpckGdecd');
                        validator.updateStatus('mtpckGdsNm', 'NOT_VALIDATED', null).validateField('mtpckGdsNm');
                    }
            	}
            }
            else {
                console.log(result.message);
            }
        },
        error: function (result) {
            console.log(result.message);
        }
    });
}
/**
 * 设置序号，第一条数据取账册正式表中的最大序号+1，其他则在当前表中取最大值+1
 */
function SetGdsSeqno(){
	var gdsServerUrl = _serverAddress + "/selectMaxUcnsSeqno";
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
            		$("#ucnsSeqno").val(result.data);
            	}
            }
            else {
                console.log(result.message);
            }
        },
        error: function (result) {}
    });
}
/**
 * 计算 单耗数量=净耗/（1-（有形损耗率+无形损耗率）/100）
 * @returns
 */
function CalUcnsQty(){
	var netUseupQty=$("#netUseupQty").val()||0;//净耗
	var tgblLossRate=$("#tgblLossRate").val()||0;//有形损耗率
	var intgbLossRate=$("#intgbLossRate").val()||0;//无形损耗率
	var ucnsQty=Number(netUseupQty)/(1-(Number(tgblLossRate)+Number(intgbLossRate))/100);
	$("#ucnsQty").val(Math.round(ucnsQty*1000000000)/1000000000);
    if(typeof($('#dataForm').data('bootstrapValidator')) != "undefined") {
        $('#dataForm').data('bootstrapValidator').updateStatus('ucnsQty', 'NOT_VALIDATED', null).validateField('ucnsQty');
    }
}