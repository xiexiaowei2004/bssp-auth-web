//服务器地址
_serverAddress = _server + "/cod_cus/codCusLevymode/list";
//跳转页面
_jumpPage = baselocation + "/views/cod_cus/codCusLevymode/";
//操作数组
columns = [
    { title: "",field: "select",radio: true,width: 20,align: "left",valign: "middle"},
    {title: "征免方式代码", field: "dutyMode", align: "left", sortable: true, order: "desc"},
    {title: "征免方式", field: "dutySpec", align: "left", sortable: true},
    /*{
        title: '操作', field: 'id', align: 'center', formatter: function (value, row, index) {
//        var e = '<a href="#" mce_href="#" onclick="Utils.jumpPage(\'' + row.dutyMode + '\',\'edit.jsp\')" title="编辑"><i class="glyphicon glyphicon-edit"></i></a> ';
//        var d = '<a href="#" mce_href="#" onclick="DataGridUtils.removeData(\'' + row.dutyMode + '\')" title="删除"><i class="glyphicon glyphicon-remove"></i></a> ';
        var l = '<a href="#" mce_href="#" onclick="Utils.jumpPage(\'' + row.dutyMode + '\',\'view.jsp\')" title="查阅"><i class="glyphicon glyphicon-search"></i></a> ';
        return l;
    }
    }*/
];

param.columns = columns;


//页面绑定事件
$(function () {
    //新增事件
    console.log(111);
    $("#add").click(function () {
        Utils.redirect(_jumpPage + "add.jsp");
    });
    //删除事件（批量删除）
    $("#delete").click(function () {
        var url = _serverAddress + '/deleteByList';
        param.listUrl = _serverAddress;
        param.idField = "dutyMode";
        param.serverUrl = url;
        DataGridUtils.deleteGrid(param);
    });
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
function load() {
    param.url = _serverAddress;
    DataGridUtils.initGridByUrl(param);
}


/*function JumpPage(id,url){
    //跳转页面

    var path = _jumpPage;
    if(url.indexOf("?")==-1)
        url+="?id="+id;
    else
        url+="&id="+id;
    Utils.redirect(url);
}*/

//列表事件
//行双击
/*
function __onDblClickRow(rowdata,rowobj){
    JumpPage(rowdata.dutyMode,"view.jsp");


}*/
