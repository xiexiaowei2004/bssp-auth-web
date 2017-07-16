//服务器地址
_serverAddress = _server + "/dcr/dcrAdjaccAcmpFormDt/list";
//跳转页面
_jumpPage = baselocation + "/views/dcr/dcrAdjaccAcmpFormDt/";
var tab = Utils.search("tab");
if (tab == "cusTab"){
    _serverAddress = _server + "/dcr/dcrAdjaccCusAcmpFormDt/list";
}else if (tab == "hisTab"){
    _serverAddress = _server + "/dcr/dcrAdjaccHisAcmpFormDt/list";
}
$(function(){
    //初始化日历控件
    Utils.initCalendar();
    // 初始化下拉
    initDropDown();
    //绑定事件
    BindEvent();

});
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
        var uid = $("#uid").val();
        var url = "";
        if(uid==""){
            url = "/add";
        }else{
            url = "/update";
        }
        FormUtils.save("dataForm",url,true);
    });
}

/**
 *
 * @param data
 * @description 回调用于跳转
 */
function __onAfterSave(data) {
    var param = {};
    param.gridId = "fileTable";
    param.url = _serverAddress+"?seqNo="+data.seqNo;
    window.parent.subPageRefresh(param);
    $("#reback").click();
}

/**
 * @description 初始化下拉
 */
function initDropDown(){
    /**
     * 随附单证类型 ACMP_FORM_TYPECD
     */
    Utils.setCodesDropDown("ACMP_FORM_TYPECD");
}

/**
 *
 * @param params
 * @description 下拉回调
 */
function __onAfterLoadCodes(data) {
    var optype=Utils.search("optype");
    if(optype=="add"){
        var seqNo=Utils.search("id");
        var chgTmsCnt=Utils.search("chgTmsCnt");
        var emsNo = Utils.search("emsNo");
        if(seqNo!=null){
            SetValue("seqNo",seqNo);
        }
        if (chgTmsCnt!=null){
            SetValue("chgTmsCnt",chgTmsCnt);
        }
        if (emsNo != null){
            SetValue("emsNo",emsNo);
        }
        SetDefault(); // 设置默认值
    } else if(optype=="modify"){
        FormUtils.getData();
    } else if(optype=="view"){
        $("#save").hide();
        FormUtils.getData();
        FormUtils.setPageView();
    }
}

function SetDefault(){
    SetDrop("formTypecd","R");  //默认 R-减免税证明
    $.ajax({
        url: _serverAddress + "/getAcmpFormSeqno",
        type: 'post',
        dataType: 'json',
        data: {"seqNo":$("#seqNo").val(),"appId": $("#appId").val()},
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (result) {
            SetValue("acmpFormSeqno",result.data);
        },
        error: function (result) {

        }
    });
}

function SetDrop(id,value) {
    $("#"+id).select2().val(value).trigger("change");
}


function SetValue(id,value){
    $("#"+id).val(value);
}

