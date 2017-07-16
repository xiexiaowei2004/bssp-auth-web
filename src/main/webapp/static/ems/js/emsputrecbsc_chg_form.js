//服务器地址
_serverAddress = _server + "/ems/emsPutrecBsc/list";
//跳转页面
_jumpPage = baselocation + "/views/ems/emsPutrecBsc/";

//表体类型
var listType=["img","exg","bom","file"];

var seqNo=$("#seqNo").val();
var emsNo=$("#emsNo").val();
var chgTmsCnt=$("#chgTmsCnt").val();
var optype=Utils.search("optype");
var id=Utils.search("id");
/*
 * 即时加载
 */
$(function(){
	//初始化日历控件
	Utils.initCalendar();
	//初始化下拉
	initDropDown();
	if(optype=="view"){
		FormUtils.setPageView();
		$("#save").hide();
		$("#declare").hide();
		$.each(listType,function(index,field){
			if(field!=""){
				$("#"+field+"Add").hide();
				$("#"+field+"Edit").hide();
				$("#"+field+"Delete").hide();
			}
		});
	}	
	//页面加载设置表单需要验证
	//Validator.setValidateParam("dataForm");
	$('#tab li:eq(0) a').tab('show');
	//绑定事件
	BindEvent();
	//新增页面设置默认值
	if(id==null){		
		SetDefault();
	}
	SetDisabled();
})

/*
 *绑定事件
 */
function BindEvent(){
	/********************返回事件********************/
	$("#reback").click(function(){
		Utils.redirect("list.jsp");
	});
	/****************绑定保存事件*************************/
	$("#save").click(function(){
		//if(!Validator.validate("dataForm")) return;
		$("select").removeAttr("disabled");
		$("input").removeAttr("disabled");
		var url="/add";
		if(optype=="modify"&&id!=null)
            url="/update?uid="+id;
		FormUtils.save("dataForm",url,true);
	});
	$("#declare").click(function(){
		//if(!Validator.validate("dataForm")) return;
        var url="/add?isCheck=false";
        if(optype=="modify"||id!=null)
            url="/update?isCheck=false&id="+id;
        var saveParam={};
        saveParam.paramUrl=url;
        saveParam.dataForm="dataForm";
        saveParam.afterOptype="refresh";
        saveParam.jumpUrl=_jumpPage+"/edit.jsp?id="+id;
        FormUtils.commonSave(saveParam);
	});	
	var titleParam={img:"料件",exg:"成品",bom:"单损耗",file:"随单附证"};
	var urlParam={img:"../emsPutrecImg/edit.jsp",exg:"../emsPutrecExg/edit.jsp",bom:"../emsPutrecUcnsDt/edit.jsp",file:"../emsPutrecAcmpFormDt/edit.jsp"};
	$.each(listType,function(index,field){
		if(field!=""){
			//绑定查阅事件
			$("#"+field+"View").click(function(){
				var rows = $('#'+field+"Table").bootstrapTable('getSelections');
				if (rows.length == 0) {
	                layer.msg("请选择要查阅的记录", {icon: 1, time: 1500});
	                return;
	            }
				var url=urlParam[field];
				var uid=rows[0].uid;
				url+="?optype=view&id="+uid;
				showPage(titleParam[field]+"-编辑",url,"view");
			});
			//绑定新增事件
			$("#"+field+"Add").click(function(){
				var url=urlParam[field];
				url+="?optype=add&seqNo="+$("#seqNo").val();
				showPage(titleParam[field]+"-新增",url,"add");
			});
			//绑定修改事件
			$("#"+field+"Edit").click(function(){
				var rows = $('#'+field+"Table").bootstrapTable('getSelections');
				if (rows.length == 0) {
	                layer.msg("请选择要修改的记录", {icon: 1, time: 1500});
	                return;
	            }
				var url=urlParam[field];
				var uid=rows[0].uid;
				url+="?optype=modify&id="+uid;
				showPage(titleParam[field]+"-编辑",url,"modify");
			});
			//删除事件绑定
			$("#"+field+"Delete").click(function(){
				var rows = $('#'+field+"Table").bootstrapTable('getSelections');
				if (rows.length == 0) {
	                layer.msg("请选择要删除的记录", {icon: 1, time: 1500});
	                return;
	            }
				var uid=rows[0].uid;
				_serverAddress=GetUrlByType(field);
				DataGridUtils.removeData(uid);
				refreshGrid(field);
			});
		}
	});
}
/*
 * 弹出窗口
 */
var modelParam={};
modelParam.area=["900px","570px"];
function showPage(title,url,optype){
	seqNo=$("#seqNo").val();
	if(optype=="add"&&seqNo==""){
		layer.alert("单据编号不存在，不能新增！");
		return;
	}	
	modelParam.title=title;
	modelParam.url=url;
	Utils.showModalDialog(modelParam);
}
/*
 * 设置默认值
 */
function SetDefault(){	
	//获取单据编号
	if($("#seqNo").val()==""){
		var billParam ="applyId=001&areaCode=4901&docType=B&serverType=C";
		$.ajax({
		    url: _billServer,
		    data: billParam,
		    dataType: 'json',
		    xhrFields: { withCredentials: true },
		    crossDomain: true,
		    success:function (result) {
		    	if(result.code!=1){
		    		console.log("生成单据编号失败");
		    	}else{
		    		$('input[name=seqNo]').val(result.data);
		    		$('input[name=etpsPreentNo]').val(result.data);
		    	}
		    },
		    error:function (result) {
		    	layer.alert("单据编号生成异常");
		    }
		});
	}
	//设置日期
	var date=DateUtil.dateToStr("yyyy-MM-dd");
	$("#delTime").val(date);
	$("#decTime").val(date);
}
/*
 * 标签设置值
 */
function SetValue(id,value){
	$("#"+id).val(value);
}

function SetDisabled(){
	$("#emsTypecd").prop("disabled", true);
	$("#emapvStucd").prop("disabled", true);
	$("#dclTypecd").prop("disabled", true);
}
/*
 * 初始化下拉控件
 */
function initDropDown(){
	//获取字典的集合
	var dicData="CHK_STATUS,DCL_ETPS_TYPE,DCL_TYPE,EMS_TYPE,UCNS_DCL_SEG";
	//获取参数代码表的集合
	var codesData="codCusCustomsfec,codStdAreaCode";
	Utils.setDropDown(dicData,codesData);
}
/*
 * 表体数据保存后刷新列表
 */
function refreshGrid(tableId){
	var param={};
	param.gridId=tableId+"Table";
	var url=GetUrlByType(tableId);
	if(url!="")
		DataGridUtils.refresh(param);
}
/*
 * 根据类型设置相应的Url
 */
function GetUrlByType(type){
	var url="";
	switch(type){
		case "img":url=_server + "/ems/emsPutrecImg/list";//料件
		break;
		case "exg":url=_server + "/ems/emsPutrecExg/list";//成品
		break;
		case "bom":url=_server + "/ems/emsPutrecUcnsDt/list";//单损耗
		break;
		case "file":url=_server + "/ems/emsPutrecAcmpFormDt/list";//随单附证
		break;
	}
	return url;
}