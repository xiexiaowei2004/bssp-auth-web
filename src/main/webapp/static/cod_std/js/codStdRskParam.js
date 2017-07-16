//服务器地址
_serverAddress = _server + "/cod_std/codStdRsk/list";
//跳转页面
_jumpPage = baselocation + "/views/cod_biz/codBizRskParam/";
var rowcode = Utils.search("rowcode");
//操作数组
columns = [
    { title: "",field: "select",radio: true,width: 20,align: "left",valign: "middle"},
    {title: "参数代码", field: "code", align: "left", sortable: true, order: "desc"},
    {title: "参数名称", field: "name", align: "left", sortable: true},
    {title: "参数值", field: "paramValue", align: "left", sortable: true},
    {title: "参数说明", field: "paramDescript", align: "left", sortable: true},
    {title: "通关业务名称", field: "clearanceCode", align: "left", sortable: true},
    {title: "关区代码", field: "customsCode", align: "left", sortable: true},
    {title: "监管场所", field: "areaCode", align: "left", sortable: true},
    {
        title: '操作', field: 'id', align: 'center', formatter: function (value, row, index) {
        var l = '<a href="#" mce_href="#" onclick="Utils.jumpPage(\'' + row.uid + '\',\'view.jsp\')" title="查阅"><i class="glyphicon glyphicon-search"></i></a> ';
        return l;
    }
    }
];
var param = {};
param.columns = columns;

//页面绑定事件
$(function () {
    //搜索事件
    $("#search").click(function () {
        param.url = _serverAddress;
        DataGridUtils.refresh(param);
    });
});
//回车事件绑定搜索按钮
$(document).keyup(function (event) {
    if (event.keyCode == 13) {
        param.url = _serverAddress;
        DataGridUtils.refresh(param);
    }
});
//页面列表 (isSearch：是否是查询，searchForm:查询form表单的Id（id是searchForm可不传）)
function load(isSearch, searchForm) {
    param.url = _serverAddress;
    param.isSearch = isSearch;
    DataGridUtils.initGridByUrl(param);
}
//点击刷新时刷新页面
function sx() {
    location.reload();
}
//双击表单事件
function __onDblClickRow(rowdata) {
    Utils.jumpPage(rowdata.uid, "view.jsp")
}


