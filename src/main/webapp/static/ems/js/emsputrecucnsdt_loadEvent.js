//获取页面传递的参数
var optype=FormHelper.search("optype");//操作页面：add,edit,view
var flag=FormHelper.search("flag");//变更选择商品时传值
var id=FormHelper.search("id");//主键
/*
 * 保存成功后执行的操作
 */
function __onAfterSave(data){
	parent.refreshGrid("bom");
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
                $(".layui-layer-title").html("单损耗-新增");
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
}
/**
 * 数据加载完成后
 */
function __onAfterLoad(data){
	if(data != null){
		SetModfMark(data.modfMarkcd);
	}
}
/**
 * 变更选择数据后返回此页面赋值
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
 * 控制修改标志是否可用
 * @returns
 */
function SetModfMark(modfMarkcd){
	if(optype=="view") return;	
	if(modfMarkcd=="3"||modfMarkcd==""||modfMarkcd==null) return;
	$("#ucnsSeqno").prop("readonly","readonly");
	$("#endprdSeqno").prop("readonly","readonly");
	$("#mtpckSeqno").prop("readonly","readonly");
	$("#modfMarkcd").removeAttr("disabled");
	var data=[{id:"1",text:"修改"},{id:"2",text:"删除"}];
	$("#modfMarkcd").empty();
	$("#modfMarkcd").select2({ data: data}).val(modfMarkcd).trigger("change");
}