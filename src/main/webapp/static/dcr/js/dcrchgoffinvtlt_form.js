//服务器地址
_serverAddress = _server + "/dcr/dcrChgoffInvtLt/list";
//跳转页面
_jumpPage = baselocation + "/views/dcr/dcrChgoffInvtLt/";
var tab = Utils.search("tab");
if (tab == "cusTab"){
    _serverAddress = _server + "/dcr/dcrChgoffCusInvtLt/list";
}else if (tab == "hisTab"){
    _serverAddress = _server + "/dcr/dcrChgoffHisInvtLt/list";
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
    $("#bondInvtNo").blur(function () {
        var formData = $("#dataForm").serializeForm();
        $.ajax({
            url: _serverAddress +  "/getInvData",
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
                    layer.msg("不存在报核清单编号",{time:1500});
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
    param.gridId = "invtLtTable";
    param.url = _serverAddress+"?seqNo="+data.seqNo;
    window.parent.subPageRefresh(param);
    $("#reback").click();
}

function SetValue(id,value){
    $("#"+id).val(value);
}

function SetDrop(id,value) {
    $("#"+id).select2().val(value).trigger("change");
}

function SetDefault() {
    SetDrop("modfMarkcd",3); //修改标志
    // 获取序号
    $.ajax({
        url: _serverAddress + "/getLno",
        type: 'post',
        dataType: 'json',
        data: {"seqNo":$("#seqNo").val(),"appId": $("#appId").val()},
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (result) {
            SetValue("lNo",result.data);
        },
        error: function (result) {
            layer.msg(result.message,{time:1500});
        }
    });

}

/**
 * @description 初始化下拉
 */
function initDropDown(){
    /**
     * 申报类型 CHGOFF_TYPECD
     * 修改标记 MODF_MARK
     * 进出口标记代码 IMPEXP_MARKCD
     */
    Utils.setCodesDropDown("IMPEXP_MARKCD,CHGOFF_TYPECD,MODF_MARK");
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
        var dclTypecd = Utils.search("dclTypecd");
        if(seqNo!=null){
            SetValue("seqNo",seqNo);
        }
        if (chgTmsCnt!=null){
            SetValue("chgTmsCnt",chgTmsCnt);
        }
        if (emsNo != null){
            SetValue("emsNo",emsNo);
        }
        if (dclTypecd != null){
            SetDrop("dclTypecd",dclTypecd);
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