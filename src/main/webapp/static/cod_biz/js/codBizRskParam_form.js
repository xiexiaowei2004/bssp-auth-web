//服务器地址
_serverAddress = _server + "/cod_biz/codBizRsk/list";
//跳转页面
_jumpPage = baselocation + "/views/cod_biz/codBizRskParam/";

//页面绑定事件
$(function () {
    initDropDown();
});

//页面绑定事件
function initDropDown() {
    //获取关区代码的下拉框codCusCustomsfec
    //获取监管场所的下拉框codStdAreaCode
    Utils.setParamDropDown("codCusCustomsfec,codStdAreaCode");
}

//加载完下拉框数据后再渲染数据
function __onAfterLoadParam() {
    FormUtils.getData();
}