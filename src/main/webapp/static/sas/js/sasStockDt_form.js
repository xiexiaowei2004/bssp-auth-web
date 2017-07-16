//服务器地址
_serverAddress = _server + "/sas/sasStockDt/list";
var tab = parent.viewType;
if (tab == "cusTable"){
    _serverAddress = _server + "/sas/sasStockCusDt/list";
}else if (tab == "hisTable"){
    _serverAddress = _server + "/sas/sasStockHisDt/list";
}
//跳转页面
_jumpPage = baselocation + "/views/sas/sasStockDt/";
var rate="";
$(function(){
    //初始化日历控件
    Utils.initCalendar();
    // 初始化下拉
    initDropDown();
    //设置验证
    // Validator.setValidateParam("dataForm");
    //绑定事件
    BindEvent();
    parent.$(".layui-layer-title").html("商品信息")

});
function SetValue(id,value){
    $("#"+id).val(value);
}
//绑定事件
function BindEvent(){
    /********************绑定返回事件********************/
    $("#reback").click(function(){
        var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
        parent.layer.close(index);
    });
    /****************绑定保存事件*************************/
    $("#save").click(function(){
        /*if($("#dclUprcAmt").val()==""){
            SetValue("dclUprcAmt",0);
        }
        if($("#dclQty").val()==""){
            SetValue("dclQty",0);
        }
        if($("#dclTotalAmt").val()==""){
            SetValue("dclTotalAmt",0);
        }*/
        var netWt=parseInt($("#netWt").val());
        var grossWt=parseInt($("#grossWt").val());
        if(netWt<=0 || grossWt<=0){
            layer.msg("净重或毛重必须大于0", {time: 1500});
            return;
        }else if(netWt>grossWt){
            layer.msg("净重必须小于或等于毛重", {time: 1500});
            return;
        }
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
    /****************绑定单价失去焦点事件*************************/
    $("#dclUprcAmt").blur(function () {
        if ($(this).val() == ""){
            return;
        }
        SetValue("dclUprcAmt",Utils.doRound($(this).val(),5));
        if($("#dclQty").val()==""){
            return;
        }
        var dclTotalAmt = $(this).val() * $("#dclQty").val();
        SetValue("dclTotalAmt",Utils.doRound(dclTotalAmt,5));
        SetValue("usdStatTotalAmt",Utils.doRound(dclTotalAmt*rate,5));
    });
    /****************绑定数量失去焦点事件*************************/
    $("#dclQty").blur(function () {
        if ($(this).val() == ""){
            return;
        }
        if($("#dclUnitcd").val()==$("#lawfUnitcd").val()){
            SetValue("lawfQty",$(this).val());
        }
        SetValue("dclQty",Utils.doRound($(this).val(),5));
        if($("#dclUprcAmt").val()==""){
            return;
        }
        var dclTotalAmt = $(this).val() * $("#dclUprcAmt").val();
        SetValue("dclTotalAmt",Utils.doRound(dclTotalAmt,5));
        SetValue("usdStatTotalAmt",Utils.doRound(dclTotalAmt*rate,5));
    });
    /****************绑定总价失去焦点事件*************************/
    $("#dclTotalAmt").blur(function () {
        if ($(this).val() == ""){
            SetValue("usdStatTotalAmt","");
            return;
        }
        var dclQty = $("#dclQty").val();
        var dclUprcAmt = "";
        if (dclQty != "" && dclQty != "0"){
            dclUprcAmt = Utils.doRound($(this).val() / dclQty,5);
        }
        SetValue("dclUprcAmt",Utils.doRound(dclUprcAmt,5));
        SetValue("usdStatTotalAmt",Utils.doRound($(this).val()*rate,5));
    });

    $("#dclCurrcd").change(function () {
        $.ajax({
            url: _serverAddress + '/getRate?dclCurrcd=' + $(this).val(),
            type: 'get',
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (result) {
                if (result.code==1) {
                    rate=result.data.usdRate;
                    if($("#dclTotalAmt").val()!= "")
                    $("#usdStatTotalAmt").val(Utils.doRound($("#dclTotalAmt").val()*rate,5));
                }
            },
            error: function (response) {
                console.log("获取汇率失败");
            }
        });
    })

}

/**
 *
 * @param data
 * @description 回调用于跳转
 */
function __onAfterSave(data) {
    var param = {};
    param.gridId = "table";
    param.url = _serverAddress+"?seqNo="+data.seqNo;
    window.parent.subPageRefresh(param);
    $("#reback").click();
}

/**
 * @description 初始化下拉
 */
function initDropDown(){
    //获取参数代码表的集合
    var codesData="codCusCountry,codCusCurr,codCusLevymode,codCusUserto,codCusUnit";
    Utils.setParamDropDown(codesData);
}

/**
 *
 * @param params
 * @description 下拉回调
 */
function __onAfterLoadParam(data) {
    var optype=Utils.search("optype");
    if(optype=="add"){
        FormUtils.initForm(parent.data);
    } else if(optype=="modify"){
        FormUtils.getData();
    } else if(optype=="view"){
        $("#save").hide();
        FormUtils.getData();
        FormUtils.setPageView();
    }
}

/*
function __onAfterLoad() {
    $.ajax({
        url: _serverAddress + '/getRate?dclCurrcd=' + $("#dclCurrcd").val(),
        type: 'get',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (result) {
            if (result.code==1) {
                rate=result.data.usdRate;
            }
        },
        error: function (response) {
            console.log("获取汇率失败");
        }
    });
}*/
