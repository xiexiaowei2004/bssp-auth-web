//服务器地址
 _serverAddress = _server+"/erp/erpPreBondInvtDt/list";
//跳转页面
 _jumpPage = baselocation+"/views/erp/erpPreBondInvtDt/";
var mtpckEndprdMarkcd =  Utils.search("mtpckEndprdMarkcd");
var id =  Utils.search("id");
var opType = Utils.search("opType");
var emsNo = Utils.search("emsNo");

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
    if(mtpckEndprdMarkcd=="E"){//成品
        initInvExgDetail();
    }
	//初始化表单数据
	FormUtils.getData();

    //绑定事件
	BindEvent();
	console.log(opType);
    if(opType=="view"){
        //设置控件禁用
        FormUtils.setPageView();
        $("#save").hide();
    }
})

//绑定事件
function BindEvent(){
	/********************返回事件********************/
	$("#reback").click(function(){
        parent.refreshGrid("dt");
        var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
        parent.layer.close(index);
	});
	/****************绑定保存事件*************************/
	$("#save").click(function(){
        //页面加载设置表单需要验证
        Validator.setValidateParam("dataForm");
        if(!Validator.validate("dataForm")) return;
		    var url = "/update";
            var saveParam={};
            saveParam.paramUrl=url;
            saveParam.dataForm="dataForm";
            FormUtils.save("dataForm",url,true);
	});

    /****************商品编码输入4位回车弹出商品表选择*************************/
    $("#gdecd").keydown(function () {
        if(event.keyCode !=13) return;
        var gdecd = $(this).val();
        if (gdecd.length == 4) {
            var url = baselocation + "/views/cod_cus/codCusComplex/chooseList.jsp?code=" + gdecd;
            var modalParam = {url: url};
            Utils.showModalDialog(modalParam);
        }
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

/*
 * 保存成功后执行
 */
function __onAfterSave(formData){
    parent.refreshGrid("dt");
}