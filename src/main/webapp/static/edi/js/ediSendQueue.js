//服务器地址
var _serverAddress = _server + "/edi/ediSendQueue/list";
//跳转页面
var _jumpPage = baselocation + "/views/edi/ediSendQueue/";
//操作数组
var columns=[
    { title: "",field: "select",radio: true,width: 20,align: "center",valign: "middle"},
    { title: "监管场所",field: "areaCode",align: "center",sortable: true,order: "desc"},
    { title: "单据类型",field: "docType",align: "center",sortable: true },
    { title: "业务类型",field: "bizType",align: "center",sortable: true },
    { title: "单据编号",field: "seqNo",align: "center",sortable: true },
    { title: "处理标识",field: "status",align: "center",sortable: true },
    { title: "创建时间",field: "createTime",align: "center",sortable: true },
    { title: "修改时间",field: "updateTime",align: "center",sortable: true },
    { title: "备注",field: "remarks",align: "center",sortable: true }
];
var param={};
param.columns = columns;
param.url = _serverAddress;

$(function(){
    /**
     * 初始化表格
     */
	DataGridUtils.initGridByUrl(param);
    /**
     * 初始化日期插件
     */
	Utils.initCalendar();
    /**
     * 初始化下拉框
     */
    Utils.setCodesDropDown('IS_VALIDATE');
    /**
     * 条件搜索
     */
    $("#search").click(function () {
        DataGridUtils.refresh(param);
    });
    /**
     * 刷新页面
     */
    $("#refresh").click(function () {
        window.location.reload();
        /*DataGridUtils.refresh(param);*/
    });

});

