//服务器地址
 _serverAddress = _server+"/inv/invImg/list";
//跳转页面
 _jumpPage = baselocation+"/views/ems/bondInvtImg/";
//var uid =  Utils.search("uid");
var id =  Utils.search("id");
var seqNo = Utils.search("seqNo");
var orgNo = Utils.search("orgNo");
var emsNo = Utils.search("putrecNo");
var gdsSeqno = Utils.search("gdsSeqno");
var mtpckEndprdMarkcd = Utils.search("mtpckEndprdMarkcd");
var docType =  Utils.search("docType");
var iEFlag1 =  Utils.search("iEFlag1");
var add_flag = Utils.search("add_flag");
var oprType = Utils.search("oprType");
var btnFlag =  Utils.search("btnFlag");
var invTab = Utils.search("invTab");
//初始化单耗版本号明细
function  initInvExgDetail(){
    $.ajax({
        url: _server+"/ems/emsCusUcnsDt/list/selectByEmsNo?emsNo="+emsNo,
        type: 'get',
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (response) {
            $("#ucnsVerno").select2({data: response.data, lang: 'zh-CN', allowClear: true,placeholder:""});
            $("#ucnsVerno").select2().val(null).trigger("change");
        },
        error: function (response) {
            console.log("获取账册数据源失败");
        }
    });
}
$(function(){
    //初始化日历控件
    Utils.initCalendar();
    //初始化下拉控件
    Utils.setDropDown("MODF_MARK,ETPS_EXE_MARK,ADJMTR_MARK,CUSM_EXE_MARKCD","codCusUnit,codCusCurr,codCusCountry,codCusLevymode,codCusUserto");
    //绑定事件
  /*  if(mtpckEndprdMarkcd=="E"){//成品
        initInvExgDetail();
    }*/
	//初始化表单数据
	//FormUtils.getData();
    if(add_flag==1){
        $("#seqNo").val(seqNo);
    }
    //绑定事件
	BindEvent();
    if(oprType=="view"){
        //设置控件禁用
        FormUtils.setPageView();
        $("#save").hide();
    }
    if(docType != 'A0603' && docType !='A0606'){
       $("#gdsMtno").attr("readonly","readonly");
       $("#gdecd").attr("readonly","readonly");
    }
    if((docType == 'A0604' || docType=='A0605')&& oprType=='mod'){
        FormUtils.setPageView();
        $("#entryGdsSeqno").removeAttr("readonly",true);
    }
})

function SetValue(id,value){
    $("#"+id).val(value);
}

//绑定事件
function BindEvent(){
	/********************返回事件********************/
	$("#reback").click(function(){
	    if (oprType=='mod' || oprType=='view'){
            parent.refreshGrid("img");
        }else{
            parent.parent.refreshGrid("img");
        }
        var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
        parent.layer.close(index);
	});
	/****************绑定保存事件*************************/
	$("#save").click(function(){
        //页面加载设置表单需要验证
        Validator.setValidateParam("dataForm");
        if(!Validator.validate("dataForm")) return;
  /*      if(parseFloat($("#netWt").val())<0){
            layer.msg("净重必须大于0", {time: 1500});
            return;
        }
        if(parseFloat($("#grossWt").val())<0){
            layer.msg("毛重必须大于0", {time: 1500});
            return;
        }*/
        if(parseFloat($("#netWt").val())>parseFloat($("#grossWt").val())){
            layer.msg("净重必须小于或等于毛重", {time: 1500});
            return;
        }
        if($("#gdsMtno").val().length>32){
            layer.msg("商品料号超出最大长度32位");
            return;
        }
        if( $("#entryGdsSeqno").val().length>19){
            layer.msg("报关单商品序号超出最大长度19位");
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
                        if(btnFlag=='cp'){
                            _serverAddress = _server+"/inv/invDtSimple/list";
                        }
                        var url = "/update";
                        var saveParam={};
                        saveParam.paramUrl=url;
                        saveParam.dataForm="dataForm";
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

    $("#save-add").click(function(){
        var url = "/add";
        var saveParam={};
        saveParam.paramUrl=url;
        saveParam.dataForm="dataForm";
        FormUtils.save("dataForm",url,true);
    });

    /****************商品编码输入4位回车弹出商品表选择*************************/
    $("#gdecd").keydown(function () {
        if(event.keyCode !=13) return;
        var gdecd = $(this).val();
        if (gdecd.length >= 4) {
            var modelParam={};
            var width = parent.parent.$(".container").width()+"px";
            modelParam.area = [];
            modelParam.area.unshift(width,"518px");
            var url = baselocation + "/views/cod_cus/codCusComplex/chooseList.jsp?code=" + gdecd;
            modelParam.url=url;
            Utils.showModalDialog(modelParam);
        }
    });

    /****************绑定单价失去焦点事件*************************/
    $("#dclUprcAmt").blur(function () {
        SetValue("dclUprcAmt",Utils.doRound($(this).val(),5));
        var dclTotalAmt = $(this).val() * $("#dclQty").val();
        SetValue("dclTotalAmt",Utils.doRound(dclTotalAmt,5));
    });
    /****************绑定数量失去焦点事件*************************/
    $("#dclQty").blur(function () {
        SetValue("dclQty",Utils.doRound($(this).val(),5));
        var dclTotalAmt = $(this).val() * $("#dclUprcAmt").val();
        SetValue("dclTotalAmt",Utils.doRound(dclTotalAmt,5));
       if($("#dclUnitcd").val()==$("#lawfUnitcd").val()){
            $("#lawfQty").val($("#dclQty").val());
       }
    });
    /****************绑定总价失去焦点事件*************************/
    $("#dclTotalAmt").blur(function () {
        var dclQty = $("#dclQty").val();
        var dclUprcAmt = 0;
        if (dclQty != null && dclQty != ""){
            dclUprcAmt = $(this).val() / $("#dclQty").val();
        }
        SetValue("dclUprcAmt",Utils.doRound(dclUprcAmt,5));
    });

}

/**
 * 选择商品后赋值商品信息
 * @param data
 * @returns
 */
function valuation(data) {
    $("#putrecSeqno").val(data.pkSeq);
    $("#gdecd").val(data.codeT + data.codeS);
    $("#gdsNm").val(data.gName);
    $("#dclUnitcd").select2().val(data.unit1).trigger("change");
    $("#lawfUnitcd").select2().val(data.unit1).trigger("change");
    $("#secdLawfUnitcd").select2().val(data.unit2).trigger("change");
    return true;
}


function edit(id,seqNo,orgNo){
    var paramId = "";
    if (id != null) {
        paramId = "?id=" + id
    }
    if(seqNo != null){
        paramId += "&seqNo="+seqNo
    }
    
    if(orgNo != null){
    	paramId += "&orgNo="+orgNo
    }
    location.href = baselocation+"/views/ems/bondInvtBsc/add.jsp" + paramId;
}