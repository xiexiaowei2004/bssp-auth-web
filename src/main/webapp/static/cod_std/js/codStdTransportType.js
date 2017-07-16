//服务器地址
var _serverAddress = _server+"/cod_std/codStdTransportType/list";
//跳转页面
var _jumpPage = baselocation+"/views/cod_std/codStdTransportType/";
var rowcode="";
//操作数组
var columns=[
    // { title: "",field: "select",radio: true,width: 20,align: "left",valign: "middle"},
    { title: "运输类型代码",field: "code",align: "center",sortable: true,order: "desc"},
    { title: "运输类型简称",field: "name",align: "left",sortable: true },
    { title: "通关业务代码",field: "clearanceCode",align: "center",sortable: true },
    { title: "运输类型全称",field: "fullName",align: "left",sortable: true },
    { title: "关区代码",field: "customsCode",align: "center",sortable: true },
    { title: "监管场所",field: "areaCode",align: "center",sortable: true },
    { title: "说明", field: "remarks", align: "left", sortable: true}
    /*{ title: '操作',field: 'id',align: 'center',formatter:function(value,row,index){
        var l = '<a href="#" mce_href="#" onclick="Utils.jumpPage(\'' + row.uid + '\',\'view.jsp\')" title="查阅"><i class="glyphicon glyphicon-search"></i></a> ';
        return l;
    }
    }*/
];
var param={};
param.columns=columns;

//页面绑定事件
$(function(){
    initDropDown();
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
    param.isSearch=isSearch;
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

//页面绑定事件
function initDropDown() {
    $("select[name='customsCode']").change(function () {//关区代码的值改变时的场地下拉框的值的联动
        //根据关区代码的值实现监管场所的联动
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
    //获取关区代码的下拉框codCusCustomsfec
    Utils.setParamDropDown("codCusCustomsfec");
}
//加载完下拉框数据后再渲染数据
function __onAfterLoadParam() {
    FormUtils.getData();
}

