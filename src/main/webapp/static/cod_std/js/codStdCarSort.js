//服务器地址
_serverAddress = _server+"/cod_std/codStdCarSort/list";
//跳转页面
_jumpPage = baselocation+"/views/cod_std/codStdCarSort/";
//操作数组
var columns=[
    // { title: "",field: "select",radio: true,width: 20,align: "left",valign: "middle"},
    {title: "车辆分类编码", field: "code", align: "left", sortable: true, order: "desc"},
    {title: "车辆分类名称", field: "name", align: "left", sortable: true},
    { title: "创建人",field: "createBy",align: "left",sortable: true },
    { title: "启用",field: "enable",align: "center",sortable: true , formatter: function (val) {
        return val == 'Y' ? '启用' : '禁用';
    }}
    /*{ title: '操作',field: 'id',align: 'center',formatter:function(value,row,index){
        var l = '<a href="#" mce_href="#" onclick="Utils.jumpPage(\'' + row.uid + '\',\'view.jsp\')" title="查阅"><i class="glyphicon glyphicon-search"></i></a> ';
        return l;
    }
    }*/
];
var param = {};
param.columns=columns;

//页面绑定事件
$(function(){
    //搜索事件
    $("#search").click(function () {
        param.url=_serverAddress;
        DataGridUtils.refresh(param);
    });
});
//回车事件绑定搜索按钮
$(document).keyup(function(event){
    if (event.keyCode == 13) {
        param.url = _serverAddress;
        DataGridUtils.refresh(param);
    }
});
//页面列表 (isSearch：是否是查询，searchForm:查询form表单的Id（id是searchForm可不传）)
function load(isSearch,searchForm) {
    param.url=_serverAddress;
    param.isSearch = isSearch;
    DataGridUtils.initGridByUrl(param);
}
//点击刷新时刷新页面
function sx() {
    location.reload();
}
/*//双击表单事件
function __onDblClickRow(rowdata) {
    Utils.jumpPage(rowdata.uid, "view.jsp")
}*/

