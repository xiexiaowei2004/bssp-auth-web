var invDtUrl;
var invDtSimpleUrl;
var invDecDtUrl
var invAcmpUrl;
//渲染完下拉框的回调方法
function __onAfterLoadParam() {
   var id =   Utils.search("id");
   //var invTab =   Utils.search("invTab");
    $("#bondInvtTypecd").select2().val("0").trigger("change");
    //$("#areaCode").select2().val("490501").trigger("change");
   if(docType=='A0602'){
       $("#bondInvtTypecd").attr("disabled","disabled");
       $("#copEntNoLabel").hide();
       $("#copEntNoText").hide();
       $("#areaCodeLabel").hide();
       $("#areaCodeText").hide();
   }
   if(id!=null){
       if(invTab=="invTab"){
           _serverAddress = _server+"/inv/invBsc/list";
           invDtUrl=_server + "/inv/invImg/list";
           invDtSimpleUrl=_server + "/inv/invDtSimple/list";
           invDecDtUrl = _server + "/inv/invDeclare/list";
           invAcmpUrl = _server + "/inv/invAcmpFormDt/list";
       }else if(invTab=="cusTab"){
           _serverAddress = _server+"/inv/cus/invCusBsc/list";
           invDtUrl=_server + "/inv/cus/invCusDt/list";
           invDtSimpleUrl=_server + "/inv/invCusDtSimple/list";
           invDecDtUrl = _server + "/inv/cus/invCusDeclare/list";
           invAcmpUrl = _server + "/inv/invCusAcmpFormDt/list";
       }else{
           _serverAddress = _server+"/inv/his/invHisBsc/list";
           invDtUrl=_server + "/inv/his/invHisDt/list";
           invDtSimpleUrl=_server + "/inv/invHisDtSimple/list";
           invDecDtUrl = _server + "/inv/his/invHisDeclare/list";
           invAcmpUrl = _server + "/inv/invHisAcmpFormDt/list";
       }
       FormUtils.getData();
   }else{
       if(docType=='A0603' || docType=='A0605'){
           $("#mtpckEndprdMarkcd").select2().val("I").trigger("change");
           $("#mtpckEndprdMarkcd").attr("disabled","disabled");
       }else if(docType == 'A0606'){
           $("#mtpckEndprdMarkcd").attr("disabled",true);
       }
       if(docType=='A0604' || docType=='A0605' || docType== 'A0606'){
           $("#putrecNo").append("<option value='"+putrecNo+"'selected='selected'>"+putrecNo+"</option>");
           $("#putrecNo").attr("readonly","readonly");
           $("#applyNo").val(applyNo);
           $("#applyNo").attr("readonly","readonly");

       }
       //获取当前登录用户相关信息
       Utils.getLoginUserInfo();
   }
}

function __onAfterLoad(data){
    if(data.vrfdedMarkcd=='0'){
        $("#vrfdedMarkcdnm").val('未核扣');
    }else if(data.vrfdedMarkcd=='1'){
        $("#vrfdedMarkcdnm").val('预核扣');
    }else if(data.vrfdedMarkcd=='2'){
        $("#vrfdedMarkcdnm").val('已核扣');
    }else if(data.vrfdedMarkcd=='3'){
        $("#vrfdedMarkcdnm").val('已核销');
    }
    seqNo=$("#seqNo").val();
    heardData = data;
    if(data.dclcusFlag=="2"){
        $("#imggen").attr("disabled","disabled");
    }
    if(docType=="A0601" || docType=="A0602" || docType=="A0603"){
        initEditCusNo(data);    //初始化账册编号
    }else{
        $("#imgadd").hide();
        $("#imgdel").hide();
        $("#putrecNo").append("<option value='"+data.putrecNo+"' selected='selected'>"+data.putrecNo+"</option>");
        $("#putrecNo").attr("readonly","readonly");
        $("#applyNo").val(data.applyNo);
        $("#applyNo").attr("readonly","readonly");
    }
    $("#putrecNo").attr("disabled","disabled");//账册编号
    $("#mtpckEndprdMarkcd").attr("disabled","disabled");//料件、成品标志
    initGrid(data);    //初始化表体信息
}
//初始化账册编号
function  initEditCusNo(data){
    var url;
    if($("#docType").val()=="A0601"){//加工
        url = _server+"/ems/emsCusBsc/list/emsNoList?emsTypecd=2";
    }else if($("#docType").val()=="A0602"){//加贸
        url = _server+"/ems/emsCusBsc/list/emsNoList?emsTypecd=1";
    }else if($("#docType").val()=="A0603"){//物流
        url = _server+"/ems_bws/emsBwsCusBsc/list/bwsNoList";
    }
    $.ajax({
        url: url,
        type: 'get',
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (response) {
            $("#putrecNo").select2({data: response.data, lang: 'zh-CN', allowClear: true,placeholder:""});
            $("#putrecNo").select2().val(data.putrecNo).trigger("change");
        },
        error: function (response) {
            layer.msg("获取账册数据源失败", {time: 1500});
        }
    });
}
//初始化列表控件
function initGrid(data){
    //出入库单
    var sasColumns = [
        {title: "单选", field: "select", radio: true, align: "center", width: "30"},
        {title: "出入库单编号", field: "sasStockNo", align: "center", sortable: true},
        {title: "申报表编号", field: "sasDclNo", align: "center", sortable: true},
        {title: "预录入编号", field: "sasStockPreentNo", align: "center", sortable: true},
        {title: "审批标志", field: "emapvMarkNm", align: "center", sortable: true},
        {title: "集报标志", field: "centralizedDclTypecd", align: "center", sortable: true},
        {title: "关联核注清单编号", field: "rltBondInvtNo", align: "center", sortable: true,},
        {title: "申报类型", field: "dclTypecd", align: "center", sortable: true},
        {title: "单据状态", field: "chkStatusNm", align: "center", sortable: true},
        {title: "操作时间", field: "decTime", align: "center", sortable: true},
        {title: "回执状态", field: "retChannel", align: "center", sortable: true},
        {title: "主管海关", field: "masterCuscd", align: "center", sortable: true,},
        {title: "监管场所", field: "areaCode", align: "center", sortable: true,}
    ];
    //清单商品明细
    var imgColumns=[
        { title: "单选",field: "select",radio:true,align: "center",formatter:function(value,row,index){
            param.transParam="seqNo,orgNo,gdsSeqno";
        }},
        { title: "序号",field: "gdsSeqno",align: "center",sortable: true,order: "desc"},
        { title: "备案序号",field: "putrecSeqno",align: "center",sortable: true },
        { title: "报关单商品序号",field: "entryGdsSeqno",align: "center",sortable: true },
        { title: "商品编码",field: "gdecd",align: "left",sortable: true },
        { title: "商品名称",field: "gdsNm",align: "left",sortable: true },
        { title: "规格型号",field: "endprdGdsSpcfModelDesc",align: "center",sortable: true },
        { title: "申报计量单位",field: "dclUnitnm",align: "center",sortable: true },
        { title: "法定计量单位",field: "lawfUnitnm",align: "center",sortable: true },
        { title: "第二计量单位",field: "secdLawfUnitnm",align: "center",sortable: true },
        { title: "国别代码",field: "natnm",align: "center",sortable: true },
        { title: "申报数量",field: "dclQty",align: "center",sortable: true },
        { title: "法定数量",field: "lawfQty",align: "center",sortable: true },
        { title: "第二数量",field: "secdLawfQty",align: "center",sortable: true },
        { title: "申报币制",field: "dclCurrnm",align: "center",sortable: true },
        { title: "申报单价",field: "dclUprcAmt",align: "center",sortable: true },
        { title: "申报总价",field: "dclTotalAmt",align: "center",sortable: true },
        { title: "征减免方式",field: "lvyrlfModenm",align: "center",sortable: true }
    ];

    //简单加工前商品明细
    var ljColumns=[
        { title: "单选",field: "select",radio:true,align: "center",formatter:function(value,row,index){
            param.transParam="seqNo,orgNo,gdsSeqno";
        }},
        { title: "序号",field: "gdsSeqno",align: "center",sortable: true,order: "desc"},
        { title: "备案序号",field: "putrecSeqno",align: "center",sortable: true },
        { title: "报关单商品序号",field: "entryGdsSeqno",align: "center",sortable: true },
        { title: "商品编码",field: "gdecd",align: "left",sortable: true },
        { title: "商品名称",field: "gdsNm",align: "left",sortable: true },
        { title: "规格型号",field: "endprdGdsSpcfModelDesc",align: "center",sortable: true },
        { title: "申报计量单位",field: "dclUnitnm",align: "center",sortable: true },
        { title: "法定计量单位",field: "lawfUnitnm",align: "center",sortable: true },
        { title: "第二计量单位",field: "secdLawfUnitnm",align: "center",sortable: true },
        { title: "国别代码",field: "natnm",align: "center",sortable: true },
        { title: "申报数量",field: "dclQty",align: "center",sortable: true },
        { title: "法定数量",field: "lawfQty",align: "center",sortable: true },
        { title: "第二数量",field: "secdLawfQty",align: "center",sortable: true },
        { title: "申报币制",field: "dclCurrnm",align: "center",sortable: true },
        { title: "申报单价",field: "dclUprcAmt",align: "center",sortable: true },
        { title: "申报总价",field: "dclTotalAmt",align: "center",sortable: true },
        { title: "征减免方式",field: "lvyrlfModenm",align: "center",sortable: true }
    ];


    //简单加工后商品明细
    var cpColumns=[
        { title: "单选",field: "select",radio:true,align: "center",formatter:function(value,row,index){
            param.transParam="seqNo,orgNo,gdsSeqno";
        }},
        { title: "序号",field: "gdsSeqno",align: "center",sortable: true,order: "desc"},
        { title: "备案序号",field: "putrecSeqno",align: "center",sortable: true },
        { title: "报关单商品序号",field: "entryGdsSeqno",align: "center",sortable: true },
        { title: "商品编码",field: "gdecd",align: "left",sortable: true },
        { title: "商品名称",field: "gdsNm",align: "left",sortable: true },
        { title: "规格型号",field: "endprdGdsSpcfModelDesc",align: "center",sortable: true },
        { title: "申报计量单位",field: "dclUnitnm",align: "center",sortable: true },
        { title: "法定计量单位",field: "lawfUnitnm",align: "center",sortable: true },
        { title: "第二计量单位",field: "secdLawfUnitnm",align: "center",sortable: true },
        { title: "国别代码",field: "natnm",align: "center",sortable: true },
        { title: "申报数量",field: "dclQty",align: "center",sortable: true },
        { title: "法定数量",field: "lawfQty",align: "center",sortable: true },
        { title: "第二数量",field: "secdLawfQty",align: "center",sortable: true },
        { title: "申报币制",field: "dclCurrnm",align: "center",sortable: true },
        { title: "申报单价",field: "dclUprcAmt",align: "center",sortable: true },
        { title: "申报总价",field: "dclTotalAmt",align: "center",sortable: true },
        { title: "征减免方式",field: "lvyrlfModenm",align: "center",sortable: true }
    ];

    //报关商品
    var exgColumns=[
        { title: "序号",field: "gdsSeqno",align: "center",sortable: true,order: "desc"},
        { title: "备案序号",field: "putrecSeqno",align: "center",sortable: true },
        { title: "报关单商品序号",field: "entryGdsSeqno",align: "center",sortable: true },
        { title: "商品编码",field: "gdecd",align: "left",sortable: true },
        { title: "商品名称",field: "gdsNm",align: "left",sortable: true },
        { title: "规格型号",field: "endprdGdsSpcfModelDesc",align: "center",sortable: true },
        { title: "申报计量单位",field: "dclUnitnm",align: "center",sortable: true },
        { title: "法定计量单位",field: "lawfUnitnm",align: "center",sortable: true },
        { title: "第二计量单位",field: "secdLawfUnitnm",align: "center",sortable: true },
        { title: "国别代码",field: "natnm",align: "center",sortable: true },
        { title: "申报数量",field: "dclQty",align: "center",sortable: true },
        { title: "法定数量",field: "lawfQty",align: "center",sortable: true },
        { title: "第二数量",field: "secdLawfQty",align: "center",sortable: true },
        { title: "申报币制",field: "dclCurrnm",align: "center",sortable: true },
        { title: "申报单价",field: "dclUprcAmt",align: "center",sortable: true },
        { title: "申报总价",field: "dclTotalAmt",align: "center",sortable: true },
        { title: "征减免方式",field: "lvyrlfModenm",align: "center",sortable: true }
    ];

    //附件
    var fileColumns=[
        { title: "全选",field: "select",radio: true,align: "center",valign: "middle"},
        { title: "随附单证序号",field: "acmpFormSeqno",align: "center",sortable: true},
        { title: "随附单证类型",field: "formTypecd",align: "center",sortable: true },
        { title: "随附单证编号",field: "formNo",align: "center",sortable: true },
        { title: "固定编号",field: "fixdNo",align: "center",sortable: true },
        { title: "随附单证文件名称",field: "acmpFormFileNm",align: "left",sortable: true },
        { title: "附件大小",field: "acmpFormFileSize",align: "center",sortable: true }
    ];

    urlParam=Utils.stringFormat("?seqNo={0}",data.seqNo);
	var param={};
	var id;
	param.showToggle=false;
	param.showExport=false;
	param.showColumns=false;
	if(docType == 'A0604' || docType == 'A0605'){//出入库单
        param.columns=sasColumns;
        param.gridId="sasTable";
        param.toolbar="sasToolbar";
        //param.url=_server+"/sas/sasStockBsc/list?rltBondInvtNo="+data.seqNo;
        param.url=_server+"/sas/sasStockCus/list?rltBondInvtNo="+data.seqNo;
        DataGridUtils.initGridByUrl(param);
    }
	//清单商品明细
    if(docType !='A0606'){
        param.columns=imgColumns;
        param.gridId="imgTable";
        param.toolbar="imgToolbar";
        param.url=invDtUrl+urlParam;
        DataGridUtils.initGridByUrl(param);
    }

	if(docType=='A0606'){
        param.columns=ljColumns;
        param.gridId="ljTable";
        param.toolbar="ljToolbar";
        param.url=invDtUrl+urlParam;
        DataGridUtils.initGridByUrl(param);

        param.columns=cpColumns;
        param.gridId="cpTable";
        param.toolbar="cpToolbar";
        param.url=invDtSimpleUrl+urlParam;
        DataGridUtils.initGridByUrl(param);
    }
	//报关商品明细
	param.columns=exgColumns;
	param.gridId="exgTable";
	param.toolbar="exgToolbar";
	param.url=invDecDtUrl+urlParam;
	DataGridUtils.initGridByUrl(param);

	//附件
	param.columns=fileColumns;
	param.gridId="fileTable";
	param.toolbar="fileToolbar";
	param.url=invAcmpUrl+urlParam;
	DataGridUtils.initGridByUrl(param);
}
//页面跳转
function JumpPage(id,url){
	//跳转页面
	var path = baselocation + "/views/ems/";
	if(url.indexOf("?")==-1)
		url+="?id="+id;
	else
		url+="&id="+id;
	Utils.redirect(url);
}
//列表事件
//行双击
/*function __onDblClickRow(rowdata,rowobj){
	JumpPage(rowdata.uid,"addBak.jsp?optype=view");
}*/

//删除
function DeleteGridData(type,urlParam){
    if(type=="img"){
        var url=_server+"/inv/invImg/list/deleteByList"+urlParam+"&delType="+type;
        param.listUrl="/inv/invImg/list"+urlParam;
        param.serverUrl=url;
        DataGridUtils.deleteGrid(param);
    } else if(type=="lj"){
        var url=_server+"/inv/invImg/list/deleteByList"+urlParam+"&delType="+type;
        param.listUrl="/inv/invDtSimple/list"+urlParam;
        param.serverUrl=url;
        DataGridUtils.deleteGrid(param);
    }else if(type=="cp"){
        var url=_server+"/inv/invImg/list/deleteByList"+urlParam+"&delType="+type;
        param.listUrl="/inv/invDtSimple/list"+urlParam;
        param.serverUrl=url;
        DataGridUtils.deleteGrid(param);
    }else if(type=="sas"){

    }else if(type=="file"){

    }
}

/*
 * 保存成功后执行
 */
function __onAfterSave(formData){
    parent.$("#refresh").click();
    if(isDeclar){
        Utils.redirect(baselocation+"/views/ems/bondInvtBsc/list.jsp?docType="+formData.docType+"&iEFlag1="+formData.iEFlag1);
        return ;
    }
    location.href="add.jsp?optype=modify&id="+formData.uid+"&docType="+formData.docType+"&iEFlag1="+formData.iEFlag1+"&invTab="+invTab;
}


//获取当前登录用户相关信息后，加载列表
function __onAfterGetLoginUserInfo(result){
    //登录用户企业信息
    var copEnt = result.copEnt;
    var docType = $("#docType").val()+"SeqNO";
    var docType1 = $("#docType").val()+"CopNO";
    //获取预录入统一编号
    Utils.getBillCode("applyId=001&areaCode="+result.copEnt.areaCode+"&docType="+docType+"&serverType=C","invtPreentNo,seqNo,bondInvtNo","预录入统一编号获取失败");
    //获取企业内部编号
    Utils.getBillCode("applyId=001&areaCode="+result.copEnt.areaCode+"&docType="+docType1+"&serverType=C","etpsInnerInvtNo","企业内部编号获取失败");
    $("#inputCopNo").val(result.inputCopNo); //录入单位社会信用代码
    $("#inputEtpsSccd").val(result.copEnt.copGbCode); //录入单位社会信用代码
    $("#areaCode").select2().val(result.copEnt.areaCode).trigger("change");//监管场所
    $("#masterCuscd").val(result.copEnt.customsCode); //主管关区
    if($("#docType").val()=='A0604' || $("#docType").val()=='A0605' || $("#docType").val()=='A0606'){
        $("#bizopEtpsno").val(result.inputCopNo);//经营单位编码
        $("#bizopEtpsSccd").val(result.copEnt.copGbCode); //经营单位社会信用代码
        $("#bizopEtpsNm").val(result.inputCopName); //经营单位名称
    }

    $("#rcvgdEtpsno").val(result.inputCopNo);//收发货单位编码
    $("#rvsngdEtpsSccd").val(result.copEnt.copGbCode); //收发货单位社会信用代码
    $("#rcvgdEtpsNm").val(result.inputCopName); //收发货单位名称

    $("#dclEtpsno").val(result.inputCopNo);//申报单位编码
    $("#dclEtpsSccd").val(result.copEnt.copGbCode); //申报单位社会信用代码
    $("#dclEtpsNm").val(result.inputCopName); //申报单位名称

}


