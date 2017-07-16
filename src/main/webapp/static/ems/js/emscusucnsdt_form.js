var viewType = Utils.search("viewType");
//服务器地址
_serverAddress = _server + Utils.stringFormat("/ems/ems{0}UcnsDt/list",viewType);
//跳转页面
_jumpPage = baselocation + Utils.stringFormat("/views/ems/ems{0}UcnsDt/",viewType);

/**
 * 页面加载事件
 */
$(function () {
    //初始化日历控件
    Utils.initCalendar();
    //初始化下拉控件
    Utils.setDropDown("MODF_MARK,ETPS_EXE_MARK,UCNS_DCL_STUCD");
    //绑定事件
    BindEvent(); 
  //设置控件禁用
    FormUtils.setPageView();
})
//绑定事件
function BindEvent() {
    /********************绑定返回事件********************/
    $("#reback").click(function () {
        Utils.closeModalDialog();
    });  
}