/*******************列表事件**********************/
//获取当前登录用户相关信息后，加载列表
function __onAfterGetLoginUserInfo(result){
	if(result === null || result === undefined || result === "") return;
	var emsTypecd = Utils.search("emsTypecd");
	var docType="";
	if(emsTypecd=="1"){
		docType="A0403";
	}
	else if(emsTypecd=="2"){
		docType="A0401";
	}
	Utils.getBillCode("applyId=001&areaCode="+result.copEnt.areaCode+"&docType="+docType+"SeqNO&serverType=C","seqNo");
    Utils.getBillCode("applyId=001&areaCode="+result.copEnt.areaCode+"&docType="+docType+"CopNO&serverType=C","etpsPreentNo,emsNo");
	$("#inputEtpsSccd").val(result.copEnt.copGbCode); //录入单位社会信用代码
	$("#bizopEtpsno").val(result.inputCopNo);//经营单位编码
	$("#bizopEtpsSccd").val(result.copEnt.copGbCode); //经营单位社会信用代码
	$("#bizopEtpsNm").val(result.inputCopName); //经营单位名称
	$("#rcvgdEtpsno").val(result.inputCopNo);//加工单位编码
	$("#rvsngdEtpsSccd").val(result.copEnt.copGbCode); //加工单位社会信用代码
	$("#rcvgdEtpsNm").val(result.inputCopName); //加工单位名称
	$("#dclEtpsno").val(result.inputCopNo);//申报单位编码
	$("#dclEtpsSccd").val(result.copEnt.copGbCode); //申报单位社会信用代码
	$("#dclEtpsNm").val(result.inputCopName); //申报单位名称
	$("#masterCuscd").select2().val(result.copEnt.customsCode).trigger("change");//主管海关
    $("#areaCode").select2().val(result.copEnt.areaCode).trigger("change");//监管场所
}

/*******************表单事件**********************/
/*
 * 表头页面加载完成后，初始化表体列表
 */
function __onAfterLoad(data){
	var seqNo="",chgTmsCnt="";
	if(data!=null){
		seqNo=data.seqNo;
		chgTmsCnt=data.chgTmsCnt;
	}		
	initGrid(seqNo,chgTmsCnt);
	var optype = Utils.search("optype");
	//变更时显示变更按钮
	if(data!=null&&data.dclTypecd=="2"&&optype!="view"){
		FormUtils.setPageView();
		$("#rmk").removeAttr("disabled");
		$("#rmk").removeAttr("readonly");
		$(".chg").show();
	}
	else {
		$(".chg").hide();
	}
}
/*
 * 页面下拉初始化成功后执行
 */
function __onAfterInitDropDown(data){
	//获取页面传递的参数
	var optype=Utils.search("optype");//操作页面：add,modify,view
	var id=Utils.search("id");//主键
	if(id!=null){
		FormUtils.getData();
	}
	else{
		var emsTypecd = Utils.search("emsTypecd");
		$("#emsTypecd").prop("disabled", true);
		$("#emsTypecd").select2().val(emsTypecd).trigger("change");
		$("#emapvStucd").prop("disabled", true);
		$("#emapvStucd").select2().val("S").trigger("change");
		$("#dclTypecd").prop("disabled", true);
		$("#dclTypecd").select2().val("1").trigger("change");
		//获取当前登录用户相关信息
		Utils.getLoginUserInfo();
		initGrid("","");
	}
}
/*
 * 保存成功后执行
 */
function __onAfterSave(formData){
	parent.$("#refresh").click();
    location.href="edit.jsp?optype=modify&id="+formData.uid;
}
/*
 * 初始化列表控件
 */
var imgParam={};
var exgParam={};
var ucnsParam={};
var ampFormParam={};
/**
 * 
 * @param seqNo 单据编号
 * @param chgTmsCnt 变更次数
 * @returns
 */
function initGrid(seqNo,chgTmsCnt){
	//料件
	var imgColumns=[
	    { title: "单选",field: "imgSelect",radio: true,align: "center",valign: "middle"},
	    { title: "序号",field: "gdsSeqno",align: "center",sortable: true},
	    { title: "料号",field: "gdsMtno",align: "left",sortable: true },
	    { title: "商品编码",field: "gdecd",align: "center",sortable: true },
	    { title: "商品名称",field: "gdsNm",align: "left",sortable: true,width:300 },
	    { title: "规格型号",field: "endprdGdsSpcfModelDesc",align: "left",sortable: true },
	    { title: "申报计量单位",field: "dclUnitnm",align: "center",sortable: true },
	    { title: "法定计量单位",field: "lawfUnitnm",align: "center",sortable: true },
	    { title: "申报单价",field: "dclUprcAmt",align: "right",sortable: true },
	    { title: "币制",field: "dclCurrnm",align: "left",sortable: true },
	    { title: "辅料标记",field: "adjmtrMarknm",align: "center",sortable: true },
	    { title: "修改标记",field: "modfMarknm",align: "center",sortable: true }/*,
	    { title: "企业执行标记",field: "etpsExeMarknm",align: "center",sortable: true }*/
	];
	//成品
	var exgColumns=[
	    { title: "单选",field: "exgSelect",radio: true,align: "center",valign: "middle"},
	    { title: "序号",field: "gdsSeqno",align: "center",sortable: true},
	    { title: "料号",field: "gdsMtno",align: "left",sortable: true },
	    { title: "商品编码",field: "gdecd",align: "center",sortable: true },
	    { title: "商品名称",field: "gdsNm",align: "left",sortable: true },
	    { title: "规格型号",field: "endprdGdsSpcfModelDesc",align: "left",sortable: true },
	    { title: "申报计量单位",field: "dclUnitnm",align: "center",sortable: true },
	    { title: "法定计量单位",field: "lawfUnitnm",align: "center",sortable: true },
	    { title: "申报单价",field: "dclUprcAmt",align: "right",sortable: true },
	    { title: "币制",field: "dclCurrnm",align: "left",sortable: true },
	    { title: "修改标记",field: "modfMarknm",align: "center",sortable: true }/*,
	    { title: "企业执行标记",field: "etpsExeMarknm",align: "center",sortable: true }*/
	];
	//单损耗
	var bomColumns=[
	    { title: "单选",field: "bomSelect",radio: true,align: "center",valign: "middle"},
	    { title: "序号",field: "ucnsSeqno",align: "center",sortable: true},
	    { title: "成品序号",field: "endprdSeqno",align: "center",sortable: true},
	    { title: "单损耗版本号",field: "ucnsVerno",align: "left",sortable: true },
	    { title: "料件序号",field: "mtpckSeqno",align: "center",sortable: true},	    
	    { title: "单耗数量",field: "ucnsQty",align: "right",sortable: true },
	    { title: "净耗数量",field: "netUseupQty",align: "right",sortable: true },
	    { title: "有形损耗率",field: "tgblLossRate",align: "right",sortable: true },
	    { title: "无形损耗率",field: "intgbLossRate",align: "right",sortable: true },
	    { title: "保税料件比例",field: "bondMtpckPrpr",align: "right",sortable: true },
	    { title: "修改标记",field: "modfMarknm",align: "center",sortable: true }/*,
	    { title: "单耗申报状态",field: "ucnsDclStunm",align: "center",sortable: true }*/
	];
	//附件
	var fileColumns=[
	    { title: "单选",field: "fileSelect",radio: true,align: "center",valign: "middle"},
	    { title: "随附单证序号",field: "acmpFormSeqno",align: "center",sortable: true},
	    { title: "随附单证类型",field: "acmpFormTypenm",align: "center",sortable: true },
	    { title: "随附单证编号",field: "acmpFormNo",align: "center",sortable: true },
	    { title: "固定编号",field: "fixdNo",align: "center",sortable: true },
	    { title: "随附单证文件名称",field: "acmpFormFileNm",align: "left",sortable: true },
	    { title: "附件大小",field: "acmpFormFileSize",align: "right",sortable: true }
	];
	var urlParam=Utils.stringFormat("?seqNo={0}&chgTmsCnt={1}",seqNo,chgTmsCnt);
	//料件
	imgParam.columns=imgColumns;
	imgParam.gridId="imgTable";
	imgParam.toolbar="imgToolbar";
	imgParam.height = 500;
	imgParam.url=_server + "/ems/emsPutrecImg/list"+urlParam;
	DataGridUtils.initGridByUrl(imgParam);
	//成品
	exgParam.columns=exgColumns;
	exgParam.gridId="exgTable";
	exgParam.toolbar="exgToolbar";
	exgParam.height = 500;
	exgParam.url=_server + "/ems/emsPutrecExg/list"+urlParam;
	DataGridUtils.initGridByUrl(exgParam);
	//单损耗
	ucnsParam.columns=bomColumns;
	ucnsParam.gridId="bomTable";
	ucnsParam.toolbar="bomToolbar";
	ucnsParam.height = 500;
	ucnsParam.url=_server + "/ems/emsPutrecUcnsDt/list"+urlParam;
	DataGridUtils.initGridByUrl(ucnsParam);
	//随单附证
	ampFormParam.columns=fileColumns;
	ampFormParam.gridId="fileTable";
	ampFormParam.toolbar="fileToolbar";
	ampFormParam.height = 500;
	ampFormParam.url=_server + "/ems/emsPutrecAcmpFormDt/list"+urlParam;
	DataGridUtils.initGridByUrl(ampFormParam);
}
/*
 * 页面跳转
 */
function JumpPage(id,url){
	//跳转页面
	var path = baselocation + "/views/ems/";
	if(url.indexOf("?")==-1)
		url+="?id="+id;
	else
		url+="&id="+id;
	Utils.redirect(url);
}
/*
 * 行双击事件
 */
function __onDblClickRow(rowdata,rowobj){
	var tableId=rowobj[0].offsetParent.id;
	if(tableId=="table"){//主页面列表查阅
		$("#view").click();
	}
	else if(tableId=="cusTable"){//主页面列表查阅
		$("#cusView").click();
	}
	else if(tableId=="hisTable"){//主页面列表查阅
		$("#hisView").click();
	}
	else//表体列表查阅
		ViewListDetail(tableId);
}
/*
 * 表体列表查阅
 */
function ViewListDetail(tableId){
	var titleParam={imgTable:"料件",exgTable:"成品",bomTable:"单损耗",fileTable:"随单附证"};
	var jumPageUrl=GetUrl(tableId,"client");
	var rows = $('#'+tableId).bootstrapTable('getSelections');
	if (rows.length == 0) {
        layer.msg("请选择要查阅的记录", {time: 1500});
        return;
    }
	var uid=rows[0].uid;
	jumPageUrl+="&id="+uid;
	showPage(titleParam[tableId]+"-查阅",jumPageUrl,"view");
}
/*
 * 
 */
function __onAfterGridDelete(gridParam,tableId){
	var gridId=gridParam.gridId;
	var param={};
	var url=GetUrl(gridId.replace("Table",""));
	if(url!="")
		DataGridUtils.refresh(param);
	return false;
}
/*
 * 根据类型设置相应的Url
 */
function GetUrl(type,serverType){
	var serverUrl="";
	var clientUrl="";
	switch(type){
		case "imgTable":
			url=_server + "/ems/emsPutrecImg/list";//料件
			clientUrl="../emsPutrecImg/edit.jsp?optype=view";
			break;
		case "exgTable":
			url=_server + "/ems/emsPutrecExg/list";//成品
			clientUrl="../emsPutrecExg/edit.jsp?optype=view";
			break;
		case "bomTable":
			url=_server + "/ems/emsPutrecUcnsDt/list";//单损耗
			clientUrl="../emsPutrecUcnsDt/edit.jsp?optype=view";
			break;
		case "fileTable":
			url=_server + "/ems/emsPutrecAcmpFormDt/list";//随单附证
			clientUrl="../emsPutrecAcmpFormDt/edit.jsp?optype=view";
			break;
	}
	if(serverType=="client")
		return clientUrl;
	else
		return url;
}