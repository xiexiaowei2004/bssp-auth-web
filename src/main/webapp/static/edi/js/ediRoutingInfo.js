//服务器地址
_serverAddress = _server+"/edi/ediRoutingInfo/list";
//跳转页面
_jumpPage = baselocation+"/views/edi/ediRoutingInfo/";
//操作数组
columns=[
    { title: "",field: "select",radio: true,width: 20,align: "left",valign: "middle"},
    { title: "单据类型",field: "docType",align: "left",halign:"center",sortable: true },
    { title: "单据名称",field: "docName",align: "left",halign:"center",sortable: true},
    { title: "业务类型",field: "bizType",align: "center",halign:"center",sortable: true },
    { title: "监管场所",field: "areaCode",align: "center",halign:"center",sortable: true},
    { title: "报文头",field: "proname",align: "left",halign:"center",sortable: true },
    { title: "启用标识",field: "status",align: "center",halign:"center",sortable: true },
    {title: "传输类型", field: "passageway", align: "center", sortable: true},
    { title: "路由标识",field: "routeType",align: "left",halign:"center",sortable: true },
    {title: "发送方编号", field: "senderId", align: "center", sortable: true},
    {title: "接收方编号", field: "receiverId", align: "center", sortable: true}
    // {title: "接收url", field: "reclUrl", align: "center", sortable: true},
    // {title: "发送url", field: "sendUrl", align: "center", sortable: true},
    // {
    //    title: '操作', field: 'id', align: 'center', formatter: function (value, row, index) {
    //        var l = '<a href="#" mce_href="#" onclick="Utils.jumpPage(\'' + row.uid + '\',\'view.jsp\')" title="查阅"><i class="glyphicon glyphicon-search"></i></a> ';
    //        return l;
    //    }
    // }
];
var param={};
param.columns = columns;

//页面绑定事件
$(function () {
    initDropDown();
    $("#refresh").click(function(){
        DataGridUtils.refresh(param);
    });
    //新增事件
    $("#add").click(function () {
        Utils.redirect(_jumpPage + "add.jsp");
    });
    //删除事件（批量删除）
    $("#delete").click(function () {
        var url = _serverAddress + '/deleteByList';
        param.listUrl = _serverAddress;
        param.idField = "uid";
        param.serverUrl = url;
        DataGridUtils.deleteGrid(param);
    });//修改事件
    $("#modify").click(function(){
        DataGridUtils.modify(param);
    });
    /**
     * 查阅
     */
    $("#view").click(function () {
        // var rowData = DataGridUtils.getRowData();//获取当前行数据
        // param.jumPageUrl = _jumpPage + 'view.jsp?id=' + rowData.uid;
        DataGridUtils.view(param);
    });
    //搜索事件
    $("#search").click(function () {
        param.url = _serverAddress;
        DataGridUtils.refresh(param);
    });
    //保存事件
    $("#save").click(function () {
        //设置验证
        Validator.setValidateParam("dataForm");
        if (!Validator.validate("dataForm")) return;
        var uid = $("#uid").val();
        if (uid == "") {
            FormUtils.save("dataForm", "/add", true);
        } else {
            FormUtils.save("dataForm", "/update", false);
        }
    });
    // 返回事件
    $("#reback").click(function () {
        Utils.redirect("list.jsp");
    });
});
//回车事件绑定搜索按钮
$(document).keyup(function (event) {
    if (event.keyCode == 13) {
        param.url = _serverAddress;
        DataGridUtils.refresh(param);
    }
});
$("#refreshBtn").click(function () {
    param.url=_serverAddress;
    DataGridUtils.refresh(param);
});

//页面列表 (isSearch：是否是查询，searchForm:查询form表单的Id（id是searchForm可不传）)
function load() {
    param.url = _serverAddress;
    DataGridUtils.initGridByUrl(param);
}
//初始化下拉
function initDropDown() {
    //PASSAGEWAY传输方式，IS_VALIDATE是否有效,codStdAreaCode 监管场所
    Utils.setDropDown("PASSAGEWAY,IS_VALIDATE","codStdAreaCode");
}

function __onAfterInitDropDown(data) {
    var id = Utils.search("id");
    if (id != null){
        FormUtils.getData();
    }
}

function __onDblClickRow(rowdata, rowobj) {
    $("#view").click();
}
