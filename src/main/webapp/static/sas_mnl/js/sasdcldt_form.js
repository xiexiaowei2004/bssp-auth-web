//服务器地址
_serverAddress = _server + "/sas/sasDclDt/list";
//跳转页面
_jumpPage = baselocation + "/views/sas_mnl/sasDclDt/";
var tab = Utils.search("tab");
if (tab == "cusTab"){
    _serverAddress = _server + "/sas/sasDclCusDt/list";
}else if (tab == "hisTab"){
    _serverAddress = _server + "/sas/sasDclHisDt/list";
}
//料件成品标识
var meType = Utils.search("meType");
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
        var gdecd = $("#gdecd").val();
        if (gdecd.length != 10){
            layer.msg("商品编码不符合规范");
            return;
        }else{
            $.ajax({
                url: _server +"/cod_cus/codCusComplex/list/getCodCusComplex",
                type: 'post',
                dataType: 'json',
                data: {"code":gdecd,"appId": $("#appId").val()},
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true,
                success: function (result) {
                    if (result.code == 1){
                        var uid = $("#uid").val();
                        var url = "";
                        if(uid==""){
                            url = "/add";
                        }else{
                            url = "/update";
                        }
                        FormUtils.save("dataForm",url,true);
                    }else{
                        layer.msg("商品编码不存在");
                    }
                },
                error: function (result) {
                    layer.msg(result.message);
                }
            });
        }
    });
    /****************绑定商品编码事件*************************/
    $("#gdecd").keydown(function(event){
        if(event.keyCode ==13){
            var gdecd = $(this).val();
            if (gdecd.length < 4){
                return;
            }
            var modelParam =　{};
            modelParam.area = ["100%","120%"];
            modelParam.url="../../cod_cus/codCusComplex/chooseList.jsp?code="+$("#gdecd").val();
            modelParam.title="商品参数选择";
            modelParam.id="commodity";
            modelParam.fixed = true;

            Utils.showModalDialog(modelParam);
        }
    });
    /****************绑定单价失去焦点事件*************************/
    $("#dclUprcAmt").blur(function () {
        var dclUprcAmt = $(this).val();
        if (dclUprcAmt == ""){
            return;
        }
        var dclQty = $("#dclQty").val();
        if (dclQty == ""){
            return;
        }
        var dclTotalAmt = $(this).val() * dclQty;
        SetValue("dclTotalAmt",Utils.doRound(dclTotalAmt,5));
    });
    /****************绑定数量失去焦点事件*************************/
    $("#dclQty").blur(function () {
        var dclQty = $(this).val();
        if (dclQty == ""){
            return;
        }
        var dclUprcAmt = $("#dclUprcAmt").val();
        if (dclUprcAmt == ""){
            return
        }
        var dclTotalAmt = dclQty * dclUprcAmt;
        SetValue("dclTotalAmt",Utils.doRound(dclTotalAmt,5));
    });
    /****************绑定总价失去焦点事件*************************/
    $("#dclTotalAmt").blur(function () {
        var dclTotalAmt = $(this).val();
        if (dclTotalAmt == ""){
            return;
        }
        var dclQty = $("#dclQty").val();
        var dclUprcAmt = "";
        if (dclQty != "" && dclQty != "0"){
            dclUprcAmt = Utils.doRound(dclTotalAmt / dclQty,5);
        }
        SetValue("dclUprcAmt",dclUprcAmt);
    });
}

/*******************回调函数**************************/
/**
 *
 * @param data
 * @description 保存回调
 */
function __onAfterSave(data) {
    var param = {};
    if(meType == "I"){
        parent.$("#imgRefresh").click();
    }else if(meType == "E"){
        parent.$("#exgRefresh").click();
    }
    $("#reback").click();
}

/**
 *
 * @param params
 * @description 下拉回调
 */
function __onAfterInitDropDown(data) {
    var optype=Utils.search("optype");
    switch (optype){
        case "add":
            var seqNo=Utils.search("seqNo");
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
        if(data.modfMarkcd == "0" || data.modfMarkcd == "1"){ // 修改标记代码 1-修改 0-未修改
            // $("#sasDclSeqno").attr("readonly",true);//申报序号
            $("#oriactGdsSeqno").attr("readonly",true);//底账商品序号
        }else if (data.modfMarkcd == "2"){    // 修改标记代码 2-删除
            FormUtils.setPageView();
            $("#licenceValidTime").attr("disabled",true);//许可证有效期
            $("#licenceValidTime").attr("style","background-color:#eee;border: 1px solid #e5e6e7");//许可证有效期添加样式
            $("#rmk").removeAttr("readonly");//备注启用
        }
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
        $("#gdecd").attr("readonly",true);
        FormUtils.initForm(parent.data);
        return;
    }
    SetDrop("modfMarkcd", 3);    // 修改标记 3-增加
    SetValue("mtpckEndprdTypecd", meType);    // 料件成品标记代码 I-料件
    // 申报序号 获取
    $.ajax({
        url: _serverAddress + "/getSasDclSeqNo",
        type: 'post',
        dataType: 'json',
        data: {"seqNo":$("#seqNo").val(),"mtpckEndprdTypecd":meType,"appId": $("#appId").val()},
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (result) {
            SetValue("sasDclSeqno",result.data);
        },
        error: function (result) {

        }
    });
    // 底账商品序号获取
    var busType = Utils.search("busType");
    var url=_server + "/ems_bws/emsBwsCusDt/list/selectMaxGdsSeqno?bwsNo=";
    $.ajax({
        url:url + Utils.search("emsNo"),
        type: 'post',
        dataType: 'json',
        data: {"appId": $("#appId").val()},
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (result) {
            if(result.code == 1){
                SetValue("oriactGdsSeqno",result.data);
            }
        },
        error: function (result) {

        }
    });
}


/***********辅助函数*************/
function SetValue(id,value){
    $("#"+id).val(value);
}

function SetDrop(id,value) {
    $("#"+id).select2().val(value).trigger("change");
}


// 商品编号 赋值（用于子表向父表赋值）
function valuation(data){
    SetValue("gdecd",data.codeT+data.codeS);
    SetValue("gdsNm",data.gName);
    SetDrop("dclUnitcd",data.unit1);
    if(typeof($('#dataForm').data('bootstrapValidator')) != "undefined"){
        $('#dataForm').data('bootstrapValidator').updateStatus('gdsNm', 'NOT_VALIDATED',null).validateField('gdsNm');
    }
    return true;
}