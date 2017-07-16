//获取页面传递的参数
var optype=FormHelper.search("optype");//操作页面：add,edit,view
var flag=FormHelper.search("flag");//变更选择商品时传值
var id=FormHelper.search("id");//主键
/*
 * 保存成功后执行的操作
 */
function __onAfterSave(data){
	parent.refreshGrid("exg");
	var url = FormHelper.stringFormat("?optype=add&seqNo={0}&emsNo={1}&chgTmsCnt={2}&etpsPreentNo={3}", $("#seqNo").val(), $("#emsNo").val(), $("#chgTmsCnt").val(), $("#etpsPreentNo").val());
    location.href="edit.jsp" + url;
}
/*
 * 页面下拉初始化成功后执行
 */
function __onAfterInitDropDown(data){
	if(id==null){
		//新增时修改标志默认为新增，并禁用
		if(optype=="add"){						
			if(flag=="chgSelect"){
				SetData();
				$(".layui-layer-title").html("料件-新增");
			}
			else {
				$("#modfMarkcd").select2().val("3").trigger("change");
				$("#modfMarkcd").prop("disabled",true);
			}
		}		
	}
	else{
		FormHelper.getData();
	}        
	if(optype=="modify"){
		$("#modfMarkcd").prop("disabled",true);
	}
	$("#lawfUnitcd").prop("disabled",true);
	$("#secdLawfUnitcd").prop("disabled",true);
	$("#qtyCntrMarkcd").prop("disabled",true);
	$("#cusmExeMarkcd").prop("disabled",true);
	$("#ucnsTqsnFlag").prop("disabled",true);
	$("#csttnFlag").prop("disabled",true);
	SetModfMark();
}
/*
 * 设置数据加载完成后，设置调用验证框架
 */
function __onAfterLoad(data){
	if(data != null){
		SetModfMark();
	}
}
/**
 * 控制修改标志是否可用
 * @returns
 */
function SetModfMark(){
	if(optype=="view") return;
	var modfMarkcd=$("#modfMarkcd").select2().val();
	if(modfMarkcd=="3" || modfMarkcd == "" || modfMarkcd == null) return;
	$("#gdsSeqno").prop("readonly","readonly");
	$("#gdsMtno").prop("readonly","readonly");
	$("#dclUnitcd").prop("disabled",true);
	$("#modfMarkcd").removeAttr("disabled");
	var data=[{id:"1",text:"修改"},{id:"2",text:"删除"}];
	$("#modfMarkcd").empty();
	$("#modfMarkcd").select2({ data: data}).val(modfMarkcd).trigger("change");
}
/**
 * 变更选择商品后返回此页面赋值
 * @returns
 */
function SetData(){
	var data=parent.data;
	if(data){
		FormUtils.initForm(data);
		var seqNo=parent.$("#seqNo").val();
		var emsNo=parent.$("#emsNo").val();
		var etpsPreentNo=parent.$("#etpsPreentNo").val();
		var chgTmsCnt=parent.$("#chgTmsCnt").val();
		$("#seqNo").val(seqNo);
		$("#emsNo").val(emsNo);
		$("#etpsPreentNo").val(etpsPreentNo);
		$("#chgTmsCnt").val(chgTmsCnt);
		$("#modfMarkcd").select2().val("1").trigger("change");
	}
}
/**
 * 设置商品序号，第一条数据取账册正式表中的最大序号+1，其他则在料件表中取最大值+1
 */
function SetGdsSeqno(result) {
	$("#gdsSeqno").val(result.data);
}