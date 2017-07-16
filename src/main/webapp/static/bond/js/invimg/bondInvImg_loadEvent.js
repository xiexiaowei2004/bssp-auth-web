/*
 * 保存成功后执行的操作
 */
function __onAfterSave(data){
	if(docType=='A0606'){
        parent.refreshGrid("lj");
        parent.refreshGrid("cp");
    }else{
	    if(oprType=='mod' || oprType=='view'){
            parent.refreshGrid("img");
        }else{
            parent.parent.refreshGrid("img");
        }
    }
	var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
    parent.layer.close(index);
}
/*
 * 页面下拉初始化成功后执行
 */
function __onAfterInitDropDown(data){
	//获取页面传递的参数
	//var optype=FormHelper.search("optype");//操作页面：add,edit,view
	var id=Utils.search("id");//主键
	if(id!=null){
	    if(btnFlag=='cp' && invTab=='invTab'){
            _serverAddress = _server+"/inv/invDtSimple/list";
        }else if(btnFlag=='cp' && invTab=='cusTab'){
            _serverAddress = _server+"/inv/cus/invCusDtSimple/list";
        }else if(btnFlag=='cp' && invTab=='hisTab'){
            _serverAddress = _server+"/inv/his/invHisDtSimple/list";
        }else if(btnFlag=='img' && invTab=='invTab'){
            _serverAddress = _server+"/inv/invImg/list";
        }else if(btnFlag=='img' && invTab=='cusTab'){
            _serverAddress = _server+"/inv/cus/invCusDt/list";
        }else if(btnFlag=='img' && invTab=='hisTab'){
            _serverAddress = _server+"/inv/his/invHisDt/list";
        }
        FormUtils.getData();
	}else{
        $.ajax({
            url: _server+"/inv/list/selectMaxSeqno?seqNo="+seqNo+"&btnFlag="+btnFlag,
            type: 'get',
            dataType: 'json',
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (response) {
            	console.log(response);
              if(response.status==1){
					$("#gdsSeqno").val(response.data);
			  }else{
                  layer.msg("获取最大商品序号失败", {time: 1500});
                  return;
			  }
            },
            error: function (response) {
                layer.msg("获取最大商品序号失败", {time: 1500});
                return;
            }
        });
	}

}
/*
 * 设置数据加载完成后，设置调用验证框架
 */
function __onAfterLoad(){
	//设置验证
	//Validator.setValidateParam("dataForm");
}
