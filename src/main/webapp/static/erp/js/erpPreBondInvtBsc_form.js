//服务器地址
_serverAddress = _server+"/erp/erpPreBondInvtBsc/list";
//跳转页面
_jumpPage = baselocation+"/views/erp/erpPreBondInvtBsc/";
var heardData;
var optype=Utils.search("optype");
var id=Utils.search("id");
var etpsInnerInvtNo = Utils.search("etpsInnerInvtNo");
var urlParam;
$(function(){
    if(optype=="view"){
        FormUtils.setPageView();
        $("#save").hide();
        $("#declare").hide();
        $("#dtadd").hide();
        $("#dtmod").hide();
        $("#dtdel").hide();
    }
    //初始化日历控件
    Utils.initCalendar();
    //初始化下拉
    initDropDown();
    //页面加载设置表单需要验证
    $('#tab li:eq(0) a').tab('show');
    //绑定事件
    BindEvent();
    //新增页面设置默认值
    if(id==null){
        SetDefault();
    }
    else{
        $("#uid").val(id);
    }
    initCusNo();//初始化账册编号

    //申报单位代码失去焦点
    $("#dclEtpsno").blur(function(){
        $.ajax({
            url: _server + "/cop/copEnt/list/getCopEnt",
            data: {tradeCode:$("#dclEtpsno").val()},
            dataType: 'json',
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (result) {
                console.log(result);
                //取到数据
                if (result.code == "1") {
                    SetValue("dclEtpsSccd", result.data.copGbCode);
                    SetValue("dclEtpsNm", result.data.entName);
                }
                else {
                    layer.msg("申报单位代码不存在",{time: 1000});
                    SetValue("dclEtpsSccd", "");
                    SetValue("dclEtpsNm", "");
                }
            },
            //失败加载空数据
            error: function (result) {
                layer.msg("申报单位代码不存在",{time: 1000});
                SetValue("dclEtpsSccd", "");
                SetValue("dclEtpsNm", "");
            }
        });
    });

    //对应报关单申报单位代码失去焦点
    $("#corrEntryDclEtpsno").blur(function(){
        $.ajax({
            url: _server + "/cop/copEnt/list/getCopEnt",
            data: {tradeCode:$("#corrEntryDclEtpsno").val()},
            dataType: 'json',
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (result) {
                console.log(result);
                //取到数据
                if (result.code == "1") {
                    SetValue("corrEntryDclEtpsSccd", result.data.copGbCode);
                    SetValue("corrEntryDclEtpsNm", result.data.entName);
                }
                else {
                    layer.msg("对应报关单申报单位代码不存在",{time: 1000});
                    SetValue("corrEntryDclEtpsSccd", "");
                    SetValue("corrEntryDclEtpsNm", "");
                }
            },
            //失败加载空数据
            error: function (result) {
                layer.msg("对应报关单申报单位代码不存在",{time: 1000});
                SetValue("corrEntryDclEtpsSccd", "");
                SetValue("corrEntryDclEtpsNm", "");
            }
        });
    });

    //关联报关单收发货人代码失去焦点
    $("#rltEntryRcvgdEtpsno").blur(function(){
        $.ajax({
            url: _server + "/cop/copEnt/list/getCopEnt",
            data: {tradeCode:$("#rltEntryRcvgdEtpsno").val()},
            dataType: 'json',
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (result) {
                console.log(result);
                //取到数据
                if (result.code == "1") {
                    SetValue("rltEntryRvsngdEtpsSccd", result.data.copGbCode);
                    SetValue("rltEntryRcvgdEtpsNm", result.data.entName);
                }
                else {
                    layer.msg("关联报关单收发货人代码不存在",{time: 1000});
                    SetValue("rltEntryRvsngdEtpsSccd", "");
                    SetValue("rltEntryRcvgdEtpsNm", "");
                }
            },
            //失败加载空数据
            error: function (result) {
                layer.msg("关联报关单收发货人代码不存在",{time: 1000});
                SetValue("rltEntryRvsngdEtpsSccd", "");
                SetValue("rltEntryRcvgdEtpsNm", "");
            }
        });
    });

    //关联报关单生产销售（消费使用）单位代码失去焦点
    $("#rltEntryBizopEtpsno").blur(function(){
        $.ajax({
            url: _server + "/cop/copEnt/list/getCopEnt",
            data: {tradeCode:$("#rltEntryBizopEtpsno").val()},
            dataType: 'json',
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (result) {
                console.log(result);
                //取到数据
                if (result.code == "1") {
                    SetValue("rltEntryBizopEtpsSccd", result.data.copGbCode);
                    SetValue("rltEntryBizopEtpsNm", result.data.entName);
                }
                else {
                    layer.msg("关联报关单生产销售（消费使用）单位代码不存在",{time: 1000});
                    SetValue("rltEntryBizopEtpsSccd", "");
                    SetValue("rltEntryBizopEtpsNm", "");
                }
            },
            //失败加载空数据
            error: function (result) {
                layer.msg("关联报关单生产销售（消费使用）单位代码不存在",{time: 1000});
                SetValue("rltEntryBizopEtpsSccd", "");
                SetValue("rltEntryBizopEtpsNm", "");
            }
        });
    });

    //关联报关单申报单位代码失去焦点
    $("#rltEntryDclEtpsno").blur(function(){
        $.ajax({
            url: _server + "/cop/copEnt/list/getCopEnt",
            data: {tradeCode:$("#rltEntryDclEtpsno").val()},
            dataType: 'json',
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (result) {
                console.log(result);
                //取到数据
                if (result.code == "1") {
                    SetValue("rltEntryDclEtpsSccd", result.data.copGbCode);
                    SetValue("rltEntryDclEtpsNm", result.data.entName);
                }
                else {
                    layer.msg("关联报关单申报单位代码不存在",{time: 1000});
                    SetValue("rltEntryDclEtpsSccd", "");
                    SetValue("rltEntryDclEtpsNm", "");
                }
            },
            //失败加载空数据
            error: function (result) {
                layer.msg("关联报关单申报单位代码不存在",{time: 1000});
                SetValue("rltEntryDclEtpsSccd", "");
                SetValue("rltEntryDclEtpsNm", "");
            }
        });
    });
})
//绑定事件
function BindEvent(){
    /**************设置显示、隐藏事件*****************/
    $("#headHide").click(function(){
        SetStatus("head",false)
    });
    $("#headShow").click(function(){
        SetStatus("head",true)
    });
    $("#detailHide").click(function(){
        SetStatus("detail",false)
    });
    $("#detailShow").click(function(){
        SetStatus("detail",true)
    });

    /**************设置显示、隐藏表头事件*****************/
    /********************返回事件********************/
    $("#reback").click(function(){
        //Utils.redirect("list.jsp");
        parent.Utils.hideEditDiv();
    });
    /****************绑定保存事件*************************/
    $("#save").click(function(){
        //设置表单需要验证
        Validator.setValidateParam("dataForm");
        if(!Validator.validate("dataForm")) return;

        var uid = $("#uid").val();
        if(uid==""){
            FormUtils.save("dataForm","/add",true);
        }else{
            FormUtils.save("dataForm","/update",false);
        }

    });
    $("#putrecNo").change(function () {

        var url = _server+"/ems/emsCusBsc/list/selectByEmsNo?emsNo="+this.value;

        $.ajax({
            url: url,
            type: 'get',
            dataType: 'json',
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (response) {
                if(response.code==1){
                    initCusHeadInfo(response);//初始化账册表头信息
                }
            },
            error: function (response) {
                layer.msg("获取账册表头数据源失败", {icon: 1, time: 1500});
            }
        });
    });

    //清单商品新增
    $("#dtadd").click(function(){
        if(etpsInnerInvtNo == null){
            layer.msg("请先保存表头信息", {icon: 1, time: 1500});
            return;
        }
        showPage('preBondInvtDt','清单商品-新增','../erpPreBondInvtDt/emsimgexg_select.jsp?&mtpckEndprdMarkcd='+heardData.mtpckEndprdMarkcd+'&etpsInnerInvtNo='+heardData.etpsInnerInvtNo+'&putrecNo='+heardData.putrecNo);
    });
    //清单商品修改
    $("#dtmod").click(function(){
        if(etpsInnerInvtNo == null){
            layer.msg("请先保存表头信息", {icon: 1, time: 1500});
            return;
        }
        var rows = $("#dtTable").bootstrapTable('getSelections');
        if (rows.length == 0) {
            layer.msg("请选择要的记录", {time: 1500});
            return;
        }
        var id = $.map(rows, function (row) {
            return row["uid"];
        });
        showPage('preBondInvtDt','清单商品-修改','../erpPreBondInvtDt/edit.jsp?id='+id+'&mtpckEndprdMarkcd='+heardData.mtpckEndprdMarkcd+'&emsNo='+heardData.putrecNo);
    });

    //清单商品查阅
    $("#dtview").click(function(){
        if(etpsInnerInvtNo == null){
            layer.msg("请先保存表头信息", {time: 1500});
            return;
        }
        var rows = $("#dtTable").bootstrapTable('getSelections');
        if (rows.length == 0) {
            layer.msg("请选择要查阅的记录", {time: 1500});
            return;
        }
        var id = $.map(rows, function (row) {
            return row["uid"];
        });
        showPage('preBondInvtDt','清单商品-查阅','../erpPreBondInvtDt/edit.jsp?id='+id+'&mtpckEndprdMarkcd='+heardData.mtpckEndprdMarkcd+'&opType=view&emsNo='+heardData.putrecNo);
    });
    //清单商品删除
    $("#dtdel").click(function(){
        if(etpsInnerInvtNo == null){
            layer.msg("请先保存表头信息", {icon: 1, time: 1500});
            return;
        }
        param.gridId="dtTable";
        param.toolbar="dtToolbar";
        param.url=_server + "/erp/erpPreBondInvtDt/list";
        param.listUrl=_server + "/erp/erpPreBondInvtDt/list";
        param.serverUrl=_server+"/erp/erpPreBondInvtDt/list/deleteByList";
        DataGridUtils.deleteGrid(param);
    });


}

var modelParam={};
modelParam.area = ["900px", "570px"];
function showPage(pageId,title,url){
    //弹出窗口
    if(title.indexOf("新增")>-1){
        modelParam.area=["1120px","620px"];
    }

    modelParam.title=title;
    modelParam.id=pageId;
    modelParam.url=url;
    Utils.showModalDialog(modelParam);
}
//设置展开、收起
function SetStatus(id,isShow){
    if(isShow){
        $(Utils.stringFormat("#{0}Show",id)).hide();
        $("#"+id).show();
        $(Utils.stringFormat("#{0}Hide",id)).show();
    }
    else{
        $(Utils.stringFormat("#{0}Hide",id)).hide();
        $("#"+id).hide();
        $(Utils.stringFormat("#{0}Show",id)).show();
    }
}
//设置默认值
function SetDefault(){
    //设置日期
    var date=DateUtil.dateToStr("yyyy-MM-dd");
    $("#createTime").val(date);
}
//标签设置值
function SetValue(id,value){
    $("#"+id).val(value);
}
function initDropDown(){
    //初始化下拉控件
    Utils.setCodesDropDown("IMPEXP_MARKCD,MTPCK_TYPECD,DCLCUS_FLAG,DCLCUS_TYPECD,BOND_INVT_TYPECD,LIST_TYPE,DEC_TYPE");
    Utils.setParamDropDown("codCusCustomsrel,codCusTrade,codCusTransf,codCusCountry");
}

//初始化账册编号
function  initCusNo(){
    var url = _server+"/ems/emsCusBsc/list/emsNoList?emsTypecd=1";

    $.ajax({
        url: url,
        type: 'get',
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (response) {
            console.log(response);
            $("#putrecNo").select2({data: response.data, lang: 'zh-CN', allowClear: true,placeholder:""});
            $("#putrecNo").select2().val(null).trigger("change");
        },
        error: function (response) {
            layer.msg("获取账册数据源失败", {icon: 1, time: 1500});
        }
    });
}

//初始化账册表头信息
function initCusHeadInfo(response) {
    SetValue("bizopEtpsno",response.data.bizopEtpsno);//经营单位代码
    SetValue("bizopEtpsSccd",response.data.bizopEtpsSccd);//经营单位社会信用代码
    SetValue("bizopEtpsNm",response.data.bizopEtpsNm);//经营单位名称
    SetValue("rcvgdEtpsno",response.data.rcvgdEtpsno);//收发货单位代码
    SetValue("rvsngdEtpsSccd",response.data.rvsngdEtpsSccd);//收发货单位社会信用代码
    SetValue("rcvgdEtpsNm",response.data.rcvgdEtpsNm);//收发货单位名称
}

/*
 * 表体数据保存后刷新列表
 */
function refreshGrid(tableId) {
    var param = {};
    param.gridId = tableId + "Table";
    param.url =  _server + "/erp/erpPreBondInvtDt/list";
    DataGridUtils.refresh(param);
}




//渲染完下拉框的回调方法
function __onAfterLoadParam() {
    var id =   Utils.search("id");
    $("#bondInvtTypecd").select2().val("0").trigger("change");
    $("#bondInvtTypecd").attr("disabled","disabled");
    if(id!=null){
        _serverAddress = _server+"/erp/erpPreBondInvtBsc/list";
        FormUtils.getData();
        //企业内部编号
        $("#etpsInnerInvtNo").attr("readonly","readonly");
        //进出口标志不能修改
        $("#impexpMarkcd").attr("disabled","disabled");
        //料件成品标志不能修改
        $("#mtpckEndprdMarkcd").attr("disabled","disabled");
        //账册编号
        $("#putrecNo").attr("disabled","disabled");
    }else{
        //获取当前登录用户相关信息
        Utils.getLoginUserInfo();
    }
}

function __onAfterLoad(data){
    heardData = data;
    initGrid(data);    //初始化表体信息*!/
/*    var id =   Utils.search("id");
    //initGrid(data);    //初始化表体信息*!/
    if(id!=null){
        //企业内部编号
        $("#etpsInnerInvtNo").attr("readonly","readonly");
        //进出口标志不能修改
        $("#impexpMarkcd").attr("disabled","disabled");
        //料件成品标志不能修改
        $("#mtpckEndprdMarkcd").attr("disabled","disabled");
        //账册编号
        //$("#putrecNo").attr("disabled","disabled");
    }*/
    /*seqNo=$("#seqNo").val();
    heardData = data;
    if(data.dclcusFlag=="2"){
        $("#imggen").attr("disabled","disabled");
    }
    initEditCusNo(data);    //初始化账册编号
    $("#putrecNo").attr("disabled","disabled");//账册编号
    $("#mtpckEndprdMarkcd").attr("disabled","disabled");//料件、成品标志
    initGrid(data);    //初始化表体信息*/
}

//获取当前登录用户相关信息后，加载列表
function __onAfterGetLoginUserInfo(result){
    //获取企业内部编号
    //Utils.getBillCode("applyId=001&docType=A0602CopNO&serverType=C","etpsInnerInvtNo","企业内部编号获取失败");
    $("#inputCopNo").val(result.inputCopNo); //录入单位社会信用代码
    $("#inputEtpsSccd").val(result.copEnt.copGbCode); //录入单位社会信用代码
    $("#inputCopName").val(result.inputCopName); //录入单位名称
    $("#areaCode").val(result.copEnt.areaCode);
    $("#dclEtpsno").val(result.inputCopNo);//申报单位编码
    $("#dclEtpsSccd").val(result.copEnt.copGbCode); //申报单位社会信用代码
    $("#dclEtpsNm").val(result.inputCopName); //申报单位名称
}

//初始化商品列表控件
function initGrid(data){
    //清单商品明细
    var entColumns=[
        { title: "单选",field: "select",radio:true,align: "center"},
        { title: "序号",field: "listGNo",align: "center",sortable: true,order: "desc"},
        { title: "备案序号",field: "emsGNo",align: "center",sortable: true },
        { title: "商品料号",field: "copGNo",align: "center",sortable: true },
        { title: "商品编码",field: "codeTs",align: "left",sortable: true },
        { title: "商品名称",field: "gName",align: "left",sortable: true },
        { title: "规格型号",field: "gModel",align: "center",sortable: true },
        { title: "申报计量单位",field: "unitName",align: "center",sortable: true },
        { title: "法定计量单位",field: "unitName1",align: "center",sortable: true },
        { title: "第二计量单位",field: "unitName2",align: "center",sortable: true },
        { title: "产销国(地区)",field: "countryName",align: "center",sortable: true },
        { title: "申报数量",field: "qty",align: "center",sortable: true },
        { title: "法定数量",field: "qty1",align: "center",sortable: true },
        { title: "第二数量",field: "qty2",align: "center",sortable: true },
        { title: "申报币制",field: "currName",align: "center",sortable: true },
        { title: "申报单价",field: "decPrice",align: "center",sortable: true },
        { title: "申报总价",field: "decTotal",align: "center",sortable: true },
        { title: "征减免方式",field: "dutySpec",align: "center",sortable: true }
    ];
    urlParam=Utils.stringFormat("?etpsInnerInvtNo={0}",data.etpsInnerInvtNo);
    var param={};
    var id;
    param.showToggle=false;
    param.showExport=false;
    param.showColumns=false;
    //清单商品明细
    param.columns=entColumns;
    param.gridId="dtTable";
    param.toolbar="dtToolbar";
    param.url=_server + "/erp/erpPreBondInvtDt/list"+urlParam;
    console.log(param.url);
    DataGridUtils.initGridByUrl(param);

}

/*
 * 保存成功后执行
 */
function __onAfterSave(formData){
    parent.$("#refresh").click();
    location.href="edit.jsp?optype=modify&id="+formData.uid+"&etpsInnerInvtNo="+formData.etpsInnerInvtNo;
}
