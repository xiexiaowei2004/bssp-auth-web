//id
var id = Utils.search("id");
var viewType = Utils.search("viewType");
var emsTypecd = Utils.search("emsTypecd"); //账册类型
//服务器地址
_serverAddress = _server + Utils.stringFormat("/ems/ems{0}Bsc/list",viewType);
//跳转页面
_jumpPage = baselocation + Utils.stringFormat("/views/ems/ems{0}Bsc/",viewType);

$(function(){
    //设置表头标题
    setHeadTitle();
	//初始化日历控件
	Utils.initCalendar();
	//初始化下拉
	initDropDown();
	//绑定事件
	BindEvent();
})
//弹出窗口
var modalParam = {};
var width = $(".container").width()+"px";
modalParam.area = [];
modalParam.area.unshift(width,"450px");
function showPage(title, url, optype) {
    modalParam.title = title;
    modalParam.url = url;
    Utils.showModalDialog(modalParam);
}
/*
 * 初始化下拉控件
 */
function initDropDown() {
    //获取字典的集合
    var dicData = "CHK_STATUS,DCL_ETPS_TYPE,DCL_TYPE,EMS_TYPE,UCNS_DCL_SEGC,EMS_EXE_MARK";
    //获取参数代码表的集合
    var codesData = "codCusCustomsfec,codStdAreaCode";
    Utils.setDropDown(dicData, codesData);
}
/**
 *绑定事件
 */
function BindEvent() {
    /********************返回事件********************/
    $("#reback").click(function () {
    	var emsTypecd=Utils.search("emsTypecd");
		if(emsTypecd==null)
    		emsTypecd=$("#emsTypecd").val();
		//Utils.redirect("list.jsp?busType="+emsTypecd);
        parent.Utils.hideEditDiv();
    });
    var titleParam = {img: "料件", exg: "成品", bom: "单损耗", file: "随单附证"};
    var urlParam = {
        img: Utils.stringFormat("../emsCusImg/edit.jsp?viewType={0}",viewType),
        exg: Utils.stringFormat("../emsCusExg/edit.jsp?viewType={0}",viewType),
        bom: Utils.stringFormat("../emsCusUcnsDt/edit.jsp?viewType={0}",viewType),
        file: Utils.stringFormat("../emsCusAcmpFormDt/edit.jsp?viewType={0}",viewType)
    };
  //表体类型
    var listType = ["img", "exg", "bom", "file"];
    $.each(listType, function (index, field) {
        if (field != "") {
            //绑定刷新事件
            $("#" + field + "Refresh").click(function () {
                refreshGrid(field);
            });
            //绑定查阅事件
            $("#" + field + "View").click(function () {
                var rows = $('#' + field + "Table").bootstrapTable('getSelections');
                if (rows.length == 0) {
                    layer.msg("请选择要查阅的记录", {time: 1500});
                    return;
                }
                var url = urlParam[field];
                var uid = rows[0].uid;
                url += "&optype=view&id=" + uid;
                showPage(titleParam[field] + "-查阅", url, "view");
            });
        }
    });
}
/*
 * 表体数据保存后刷新列表
 */
function refreshGrid(tableId) {
    var param = {};
    param.gridId = tableId + "Table";
    var url = GetUrlByType(tableId);
    if (url != "")
        DataGridUtils.refresh(param);
}
/*
 * 根据类型设置相应的Url
 */
function GetUrlByType(type) {
    var url = "";
    switch (type) {
        case "img":
            url = _server + Utils.stringFormat("/ems/ems{0}Img/list",viewType);//料件
            break;
        case "exg":
            url = _server + Utils.stringFormat("/ems/ems{0}Exg/list",viewType);//成品
            break;
        case "bom":
            url = _server + Utils.stringFormat("/ems/ems{0}UcnsDt/list",viewType);//单损耗
            break;
        case "file":
            url = _server + Utils.stringFormat("/ems/ems{0}AcmpFormDt/list",viewType);//随单附证
            break;
        default:
            url = _server + Utils.stringFormat("/ems/ems{0}Bsc/list",viewType);//表头
            break;
    }
    return url;
}
/**
 * 设置表头标题
 */
function setHeadTitle() {
    var emsTypenm = emsTypecd == "1" ? "加贸账册" : "加工账册";
    var viewTypenm = "表头";
    switch (viewType) {
        case "Cus":
            viewTypenm = "正式数据表头";
            break;
        case "His":
            viewTypenm = "申报历史记录表头";
            break;
    }
    var title = emsTypenm + viewTypenm;
    $("#headTitle").html(title);
}