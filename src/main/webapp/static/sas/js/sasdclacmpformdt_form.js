//服务器地址
_serverAddress = _server + "/sas/sasDclAcmpFormDt/list";
//跳转页面
_jumpPage = baselocation + "/views/sas/sasDclAcmpFormDt/";
var tab = Utils.search("tab");
if (tab == "cusTab"){
    _serverAddress = _server + "/sas/sasDclCusAcmpFormDt/list";
}else if (tab == "hisTab"){
    _serverAddress = _server + "/sas/sasDclHisCudAcmpFormDt/list";
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
        //页面初始化，添加验证
        Validator.setValidateParam("dataForm");
        if (!Validator.validate("dataForm")) return;
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
 * @description 初始化下拉
 */
function initDropDown(){
    /**
     * 随附单证类型 ACMP_FORM_TYPECD
     */
    Utils.setCodesDropDown("ACMP_FORM_TYPECD");
}

/***************回调函数**********************/
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
 *
 * @param params
 * @description 下拉回调
 */
function __onAfterLoadCodes(data) {
    var optype=Utils.search("optype");
    if(optype=="add"){
        var seqNo=Utils.search("id");
        var chgTmsCnt=Utils.search("chgTmsCnt");
        var sasDclNo = Utils.search("sasDclNo");
        var etpsPreentNo = Utils.search("etpsPreentNo");
        if(seqNo!=null){
            SetValue("seqNo",seqNo);
        }
        if (chgTmsCnt!=null){
            SetValue("chgTmsCnt",chgTmsCnt);
        }
        if (sasDclNo != null){
            SetValue("sasDclNo",sasDclNo);
        }
        if (etpsPreentNo!=null){
            SetValue("etpsPreentNo",etpsPreentNo);
        }
        SetDefault();
    } else if(optype=="modify"){
        FormUtils.getData();
    } else if(optype=="view"){
        $("#save").hide();
        FormUtils.getData();
        FormUtils.setPageView();
    }
}

// 设置默认值
function SetDefault(){
    SetDrop("acmpFormTypecd","R");  //默认 R-减免税证明
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

/*************辅助函数*****************/
function SetDrop(id,value) {
    $("#"+id).select2().val(value).trigger("change");
}


function SetValue(id,value){
    $("#"+id).val(value);
}

