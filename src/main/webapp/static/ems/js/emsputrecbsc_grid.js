//服务器地址
_serverAddress = _server + "/ems/emsPutrecBsc/list";
//跳转页面
_jumpPage = baselocation + "/views/ems/emsPutrecBsc/";
//操作数组
var columns = [
    {title: "单选", field: "select", radio: true, width: 36, align: "center"},
    {title: "账册编号", field: "emsNo", align: "left", sortable: true},
    {title: "预录入统一编号", field: "seqNo", align: "left", sortable: true, order: "desc"},
    {title: "企业内部编号", field: "etpsPreentNo", align: "left", sortable: true, order: "desc"},
    {title: "经营企业社会信用代码", field: "bizopEtpsSccd", align: "center", sortable: true},
    {title: "经营企业名称", field: "bizopEtpsNm", align: "left", width: 300, sortable: true},
    {title: "结束有效日期", field: "finishValidDate", align: "center", sortable: true},
    {title: "申报类型", field: "dclTypename", align: "center", sortable: true},
    {title: "变更次数", field: "chgTmsCnt", align: "center", sortable: true},
    {title: "单据状态", field: "chkStatusName", align: "left", sortable: true},
    {title: "操作时间", field: "decTime", align: "center", sortable: true},
    {title: "回执状态", field: "retChannel", align: "left", sortable: true},
    {title: "主管海关", field: "masterCuscd", align: "center"},
    {title: "监管场所", field: "areaCode", align: "center"}
];
var height = DataGridUtils.getHeight() - 10;
var emsTypecd = Utils.search("busType");
var param = {columns: columns, gridId: "table", height: height, pageSize: 8, pageList: [8, 20, 50]};
param.url = _serverAddress + "?emsTypecd=" + emsTypecd;

var cusParam = {columns: columns, gridId: "cusTable", height: height, pageSize: 8, pageList: [8, 20, 50]};
cusParam.url = _server + "/ems/emsCusBsc/list?emsTypecd=" + emsTypecd;

var hisParam = {columns: columns, gridId: "hisTable", height: height, pageSize: 8, pageList: [8, 20, 50]};
hisParam.url = _server + "/ems/emsHisBsc/list?emsTypecd=" + emsTypecd;

//页面绑定事件
$(function () {
    //初始化日历控件
    Utils.initCalendar();
    setCalFormat();
    //初始化下拉控件
    Utils.setCodesDropDown("CHK_STATUS,DCL_TYPE");
    //加载预录入列表
    DataGridUtils.initGridByUrl(param);
    //加载正式表列表
    DataGridUtils.initGridByUrl(cusParam);
    //加载历史表
    DataGridUtils.initGridByUrl(hisParam);

    $('#table').bootstrapTable('resetView', {"height": height});
    $('#cusTable').bootstrapTable('resetView', {"height": height});
    $('#hisTable').bootstrapTable('resetView', {"height": height});
    $(".fixed-table-container").height(height - 120);
    if (emsTypecd == "1") {
        $("#tableTitle").html("加贸账册");
        $("#table").bootstrapTable("hideColumn", "areaCode");
    }
    else if (emsTypecd == "2") {
        $("#tableTitle").html("加工账册");
    }
    //刷新事件
    $("#refresh").click(function () {
        DataGridUtils.refresh(param);
    });
    //刷新事件
    $("#cusRefresh").click(function () {
        DataGridUtils.refresh(cusParam);
    });
    //刷新事件
    $("#hisRefresh").click(function () {
        DataGridUtils.refresh(hisParam);
    });
    //新增事件
    $("#add").click(function () {
        Utils.showEditDiv(_jumpPage + "edit.jsp?optype=add&viewType=Pre&emsTypecd=" + emsTypecd);
    });
    //修改事件
    $("#modify").click(function () {
        param.transParam = "dclTypecd,emsTypecd";
        param.joinUrl = "&viewType=Pre";
        DataGridUtils.modify(param);
    });
    //预录入表查阅事件
    $("#view").click(function () {
        param.transParam = "emsTypecd";
        param.jumPageUrl = _jumpPage + "edit.jsp?viewType=Pre";
        DataGridUtils.view(param);
    });
    //正式表查阅事件
    $("#cusView").click(function () {
        cusParam.transParam = "emsTypecd";
        cusParam.jumPageUrl = baselocation + "/views/ems/emsCusBsc/edit.jsp?viewType=Cus";
        DataGridUtils.view(cusParam);
    });
    //历史表查阅事件
    $("#hisView").click(function () {
        hisParam.transParam = "emsTypecd";
        hisParam.jumPageUrl = baselocation + "/views/ems/emsCusBsc/edit.jsp?viewType=His";
        DataGridUtils.view(hisParam);
    });
    //变更事件
    $("#change").click(function () {
        var url = _jumpPage + "selectEms.jsp?optype=chg&emsTypecd=" + emsTypecd;
        var modalParam = {};
        modalParam.title = "账册选择";
        modalParam.url = url;
        var width = $(".container").width() + "px";
        modalParam.area = [];
        modalParam.area.unshift(width, "450px");
        Utils.showModalDialog(modalParam);
    });
    //删除事件（批量删除）
    $("#delete").click(function () {
        var url = _serverAddress + '/deleteByList';
        param.listUrl = _serverAddress;
        param.serverUrl = url;
        DataGridUtils.deleteGrid(param);
    });
    //搜索事件
    $("#search").click(function () {
        //var activeId = $("div.active").attr("id");获取当前活动的页签
        DataGridUtils.refresh(param);
        DataGridUtils.refresh(cusParam);
        DataGridUtils.refresh(hisParam);
    });
    /**
     * 查看回执
     */
    $("#receipt").click(function () {
        var rowData = DataGridUtils.getRowDatas();//获取当前行数据
        DataGridUtils.viewMessageLog(rowData.seqNo);
    });
});
//回车事件绑定搜索按钮
$(document).keyup(function (event) {
    if (event.keyCode == 13) {
        DataGridUtils.refresh(param);
    }
});
//设置日期格式，限制开始时间不能大于结束时间
function setCalFormat() {
    /************设置结束有效日期***************/
    //开始时间
    $('#finishValidDateStart').datepicker().on('changeDate', function (e) {
        var startTime = e.date;
        $('#finishValidDateEnd').datepicker('setStartDate', startTime);
    });
    //结束时间：
    $('#finishValidDateEnd').datepicker({}).on('changeDate', function (e) {
        var endTime = e.date;
        $('#finishValidDateStart').datepicker('setEndDate', endTime);
    });
    /************设置结束有效日期***************/
    /************设置录入日期***************/
    //开始时间
    $('#decTimeStart').datepicker().on('changeDate', function (e) {
        var startTime = e.date;
        $('#decTimeEnd').datepicker('setStartDate', startTime);
    });
    //结束时间：
    $('#decTimeEnd').datepicker({}).on('changeDate', function (e) {
        var endTime = e.date;
        $('#decTimeStart').datepicker('setEndDate', endTime);
    });
    /************设置录入日期***************/
}