//服务器地址
_serverAddress = _server + "/cod_cus/codCusComplex/list";
//跳转页面
_jumpPage = baselocation + "/views/cod_cus/codCusComplex/";
var id=Utils.search("id");
//操作数组
columns = [
    { title: "",field: "select",radio: true,width: 20,align: "left",valign: "middle"},
    {title: "序号", field: "pkSeq", align: "left", sortable: true, order: "desc"},
    {title: "HS编码", field: "codeT", align: "left", sortable: true},
    {title: "附加编码", field: "codeS", align: "left", sortable: true},
    {title: "商品名称", field: "gName", align: "left", sortable: true},
    {title: "法定单位", field: "unit1", align: "left", sortable: true},
    {title: "法定第二单位", field: "unit2", align: "left", sortable: true},
    {
        title: '操作', field: 'id', align: 'center', formatter: function (value, row, index) {
//        var e = '<a href="#" mce_href="#" onclick="Utils.jumpPage(\'' + row.pkSeq + '\',\'edit.jsp\')" title="编辑"><i class="glyphicon glyphicon-edit"></i></a> ';
//        var d = '<a href="#" mce_href="#" onclick="DataGridUtils.removeData(\'' + row.pkSeq + '\')" title="删除"><i class="glyphicon glyphicon-remove"></i></a> ';
        var l = '<a href="#" mce_href="#" onclick="view(\'' + row.pkSeq + '\')" title="查阅"><i class="glyphicon glyphicon-search"></i></a> ';
        return l;
    }
    }
];
param.columns = columns;

//页面绑定事件
$(function () {
    //新增事件
    $("#add").click(function () {
        Utils.redirect(_jumpPage + "add.jsp");
    });
    //删除事件（批量删除）
    $("#delete").click(function () {
        var url = _serverAddress + '/deleteByList';
        param.listUrl = _serverAddress;
        param.idField = "pkSeq";
        param.serverUrl = url;
        DataGridUtils.deleteGrid(param);
    });
    //搜索事件
    $("#search").click(function () {
        param.url = _serverAddress;
        DataGridUtils.refresh(param);
    });
    if(id!=null){
        //初始化下拉
        initDropDown();
    }
});
//回车事件绑定搜索按钮
$(document).keyup(function (event) {
    if (event.keyCode == 13) {
        param.url = _serverAddress;
        DataGridUtils.refresh(param);
    }
});
//页面列表
function load() {
    param.url = _serverAddress;
    DataGridUtils.initGridByUrl(param);
}

function JumpPage(id,url){
    //跳转页面
    var path = _jumpPage;
    if(url.indexOf("?")==-1)
        url+="?id="+id;
    else
        url+="&id="+id;
    Utils.redirect(url);
}

function view(id) {
    modalParam.area = [];
    var width = $(".container").width()+"px";
    modalParam.area.unshift(width,"560px");
    modalParam.url="view.jsp?id="+id;
    modalParam.title="商品参数";
    Utils.showModalDialog(modalParam);
}

//关闭弹出框
$("#reback").click(function () {
    var index = parent.layer.getFrameIndex(window.name);
    parent.layer.close(index);
});

//列表事件
//行双击
function __onDblClickRow(rowdata){
    view(rowdata.pkSeq);

}
/**
 * @description 初始化下拉
 */
function initDropDown(){
    //获取字典的集合
    var dicData="DCL_MARKCD";
    //获取参数代码表的集合
    var codesData="codCusUnit";
    Utils.setDropDown(dicData,codesData);
}

/**
 *
 * @param params
 * @description 下拉回调
 */
function __onAfterInitDropDown(data) {
    if(id!=null){
        FormUtils.getData();
    }
}