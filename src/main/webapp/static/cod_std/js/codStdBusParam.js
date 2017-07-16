//服务器地址
_serverAddress = _server + "/cod_std/codStdBus/list";
//跳转页面
_jumpPage = baselocation + "/views/cod_std/codBizBusParam/";
//操作数组
columns = [
    { title: "",field: "select",radio: true,width: 20,align: "left",valign: "middle"},
    {title: "参数代码", field: "code", align: "left", sortable: true, order: "desc"},
    {title: "参数名称", field: "name", align: "left", sortable: true},
    {title: "参数计量单位", field: "unit", align: "left", sortable: true},
    {title: "参数值", field: "paramValue", align: "left", sortable: true},
    {title: "通关业务名称", field: "clearanceCode", align: "left", sortable: true},
    {title: "参数说明", field: "paramDescript", align: "left", sortable: true},
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
    initDropDown();
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
//页面绑定事件
function initDropDown() {
    $("select[name='customsCode']").change(function () {//关区代码的值改变时的场地下拉框的值的联动
        //根据关区代码的值实现监管场所的联动
        //console.log($("select[name='customsCode']").val()+"...");
        var customsCode = $("select[name='customsCode']").val();
        $.ajax({
            url: _server + "/cod_std/codStdAreaCode" + "/getDataSource",

            dataType: 'json',
            data: {"str": customsCode},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (result) {
                //	console.log(result.data.length+";"+result+"..."+result.data+";"+result.data[0].ID+":"+result.data[0].TEXT);
                $("select[name='areaCode'] option").remove();//清空
                $("select[name='areaCode']").append("<option value=''>--请选择--</option>");
                if (result.data.length > 0) {
                    for (var i = 0; i < result.data.length; i++) {
                        $("select[name='areaCode']").append("<option value='" + result.data[i].id + "'>" + result.data[i].text + "</option>");
                    }
                }
            },
            error: function (result) {

            }
        });
    });

    //获取关区代码的下拉框
    Utils.setParamDropDown("codCusCustomsfec");
}

