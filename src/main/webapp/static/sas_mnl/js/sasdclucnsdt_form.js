//服务器地址
_serverAddress = _server + "/sas/sasDclUcnsDt/list";
//跳转页面
_jumpPage = baselocation + "/views/sas_mnl/sasDclUcnsDt/";
var tab = Utils.search("tab");
if (tab == "cusTab"){
    _serverAddress = _server + "/sas/sasDclCusUcnsDt/list";
}else if (tab == "hisTab"){
    _serverAddress = _server + "/sas/sasDclHisUcnsDt/list";
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
        if (!Validator.validate("dataForm")) {
            return;
        }
        var uid = $("#uid").val();
        var url = "";
        if(uid==""){
            url = "/add";
        }else{
            url = "/update";
        }
        FormUtils.save("dataForm",url,true);
    });

    $("#mtpckSeqno,#endprdSeqno").blur(function () {
        var optype=Utils.search("optype");
        if($(this).val() != ""){
            var id=$(this).attr("id");
            var mtpckEndprdTypecd="E";
            if(id=="mtpckSeqno"){
                mtpckEndprdTypecd="I";
            }
            $.ajax({
                url: _serverAddress+"/getDtInfo",
                type: 'post',
                dataType: 'json',
                data: {"seqNo": Utils.search("seqNo"),"sasDclSeqno":$(this).val(),"mtpckEndprdTypecd":mtpckEndprdTypecd,"optype":optype},
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true,
                success: function (result) {
                    if (result.code == 1) {
                        if(id=="mtpckSeqno"){
                            $("#mtpckGdecd").val(result.data.gdecd);
                            $("#mtpckGdsNm").val(result.data.gdsNm);
                            $('#dataForm').data('bootstrapValidator').updateStatus('mtpckGdecd', 'NOT_VALIDATED',null).validateField('mtpckGdecd');
                            $('#dataForm').data('bootstrapValidator').updateStatus('mtpckGdsNm', 'NOT_VALIDATED',null).validateField('mtpckGdsNm');
                        }else{
                            $("#endprdGdecd").val(result.data.gdecd);
                            $("#endprdGdsNm").val(result.data.gdsNm);
                            $('#dataForm').data('bootstrapValidator').updateStatus('endprdGdecd', 'NOT_VALIDATED',null).validateField('endprdGdecd');
                            $('#dataForm').data('bootstrapValidator').updateStatus('endprdGdsNm', 'NOT_VALIDATED',null).validateField('endprdGdsNm');
                        }
                    }
                    else {
                        if(id == "mtpckSeqno"){
                            layer.msg("输入的加工前商品序号不存在,请检查", {time: 1500});
                            $("#mtpckGdecd").val("");
                            $("#mtpckGdsNm").val("");
                        }else{
                            layer.msg("输入的商品加工后序号不存在,请检查", {time: 1500});
                            $("#endprdGdecd").val("");
                            $("#endprdGdsNm").val("");

                        }
                    }
                },
                error: function (result) {
                    layer.msg(result.message, {time: 1500});
                }
            });
        }
    })
}

/*******************回调函数**************************/
/**
 *
 * @param data
 * @description 保存回调
 */
function __onAfterSave(data) {
    parent.$("#bomRefresh").click();
    $("#reback").click();
}

/**
 *
 * @param params
 * @description 下拉回调
 */
function __onAfterInitDropDown(data) {
    var optype = Utils.search("optype");
    switch (optype) {
        case "add":
            var seqNo = Utils.search("seqNo");
            var chgTmsCnt = Utils.search("chgTmsCnt");
            var sasDclNo = Utils.search("sasDclNo");
            var etpsPreentNo = Utils.search("etpsPreentNo");
            SetValue("seqNo", seqNo);
            SetValue("chgTmsCnt", chgTmsCnt);
            SetValue("sasDclNo", sasDclNo);
            SetValue("etpsPreentNo", etpsPreentNo);
            SetDefault(); // 设置默认值
            break;
        case "modify":
            FormUtils.getData();
            break;
        case "change":
            FormUtils.initForm(parent.data);
            __onAfterLoad(parent.data);
            break;
        case "view":
            $("#save").hide()
            FormUtils.getData();
            FormUtils.setPageView();
            break;
    }
}
/**
 * @description 获取数据回调
 */
function __onAfterLoad(data) {
    var optype=Utils.search("optype");
    if(optype=="change"){
        $("#gdecd").attr("readonly",true);
        $("#mtpckSeqno,#endprdSeqno").blur();
        if(data.modfMarkcd == "0" || data.modfMarkcd == "1"){ // 修改标记代码 1-修改 0-未修改
        }else if (data.modfMarkcd == "2"){    // 修改标记代码 2-删除
            FormUtils.setPageView();
        }
    }else if(optype=="modify" || optype=="view" || optype=="change"){
        $("#mtpckSeqno,#endprdSeqno").blur();
    }
}

/****************************************************/
/**
 * @description 初始化下拉
 */
function initDropDown(){
    /**
     * MODF_MARK 修改标记
     * GDS_MARKCD 商品标记代码
     * codCusUnit 申报计量单位
     * codCusCurr 币制代码
     */
    Utils.setDropDown("MODF_MARK,GDS_MARKCD","codCusUnit,codCusCurr")
}

//设置默认值
function SetDefault() {
    if (typeof (parent.data) != "undefined" && parent.data !== ""){
        FormUtils.initForm(parent.data);
        return;
    }
    SetDrop("modfMarkcd", 3);    // 修改标记 3-增加
    //SetValue("mtpckEndprdTypecd", meType);    // 料件成品标记代码 I-料件
    SetValue("chgTmsCnt", Utils.search("chgTmsCnt"));
}

/***********辅助函数*************/
function SetValue(id,value){
    if(value == undefined || value == null)
        value = "";
    $("#"+id).val(value);
}
function SetDrop(id,value) {
    $("#"+id).select2().val(value).trigger("change");
}
