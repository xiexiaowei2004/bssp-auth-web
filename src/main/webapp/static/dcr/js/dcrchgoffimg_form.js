//服务器地址
_serverAddress = _server + "/dcr/dcrChgoffImg/list";
//跳转页面
_jumpPage = baselocation + "/views/dcr/dcrChgoffImg/";
var tab = Utils.search("tab");
if (tab == "cusTab"){
    _serverAddress = _server + "/dcr/dcrChgoffCusImg/list";
}else if (tab == "hisTab"){
    _serverAddress = _server + "/dcr/dcrChgoffHisImg/list";
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
        var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
        parent.layer.close(index);
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
    /****************绑定失去焦点事件*************************/
    $("#gdsSeqno").blur(function () {
        var formData = $("#dataForm").serializeForm();
        $.ajax({
            url: _serverAddress +  "/getEmsCusImg",
            type: 'post',
            dataType: 'json',
            data: formData,
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (result) {
                if (result.code == 1){
                    FormUtils.initForm(result.data);
                }else{
                    layer.msg("不存在料件备案序号",{time:1500});
                }
            },
            error: function (result) {
                layer.msg(result.message);
            }
        });
    });
}

/**
 *
 * @param data
 * @description 回调用于跳转
 */
function __onAfterSave(data) {
    var param = {};
    param.gridId = "imgTable";
    param.url = _serverAddress+"?seqNo="+data.seqNo;
    window.parent.subPageRefresh(param);
    $("#reback").click();
}

/**
 * @description 初始化下拉
 */
function initDropDown(){
    Utils.setParamDropDown("codCusUnit");
}

function SetValue(id,value){
    $("#"+id).val(value);
}

//设置默认值
function SetDefault() {
    SetValue("typecd","I"); //料件成品标记代码 I-料件
    //序号获取
    $.ajax({
        url: _serverAddress + "/getGdsSeqno",
        type: 'post',
        dataType: 'json',
        data: {"seqNo":$("#seqNo").val(),"appId": $("#appId").val()},
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (result) {
            SetValue("gNo",result.data);
        },
        error: function (result) {
            layer.msg(result.message,{time:1500});
        }
    });
}

/**
 *
 * @param params
 * @description 下拉回调
 */
function __onAfterLoadParam(data) {
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
        SetDefault();
    } else if(optype=="modify"){
        FormUtils.getData();
    } else if(optype=="view"){
        $("#save").hide();
        FormUtils.getData();
        FormUtils.setPageView();
    }
}