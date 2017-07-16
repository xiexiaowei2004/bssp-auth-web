/*
 * 保存成功后执行的操作
 */
function __onAfterSave(data){
	parent.refreshGrid("file");
	Utils.closeModalDialog();
}
/*
 * 页面下拉初始化成功后执行
 */
function __onAfterInitDropDown(data){
	//获取页面传递的参数
	var optype=FormHelper.search("optype");//操作页面：add,edit,view
	var id=FormHelper.search("id");//主键
	if(id!=null)
        FormHelper.getData();
}
/*
 * 设置数据加载完成后，设置调用验证框架
 */
function __onAfterLoad(){
	//设置验证
	Validator.setValidateParam("dataForm");
}