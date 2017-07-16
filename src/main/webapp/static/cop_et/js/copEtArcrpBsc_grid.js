//服务器地址
_arcrpServerAddress = _server + "/cop_et/etArcrpBsc/list";
_cusServerAddress = _server + "/cop_et/etCusBsc/list";
_hisServerAddress = _server + "/cop_et/etHisBsc/list";
//跳转页面
_jumpPage = baselocation + "/views/cop_et/copEtArcrpBsc/";
//操作数组
var columns = [
    {title: "全选", field: "select", radio: true, align: "center", valign: "middle"},
    {title: "档案库编号", field: "etArcrpNo", align: "center", sortable: true, order: "desc"},
    {title: "预录入统一编号", field: "seqNo", align: "center", sortable: true},
    {title: "企业内部编号", field: "etpsPreentNo", align: "center", sortable: true},
    {title: "经营企业代码", field: "bizopEtpsno", align: "center", sortable: true},
    {title: "加工企业代码", field: "prcsEtpsno", align: "center", sortable: true},
    {title: "申报企业代码", field: "dclEtpsno", align: "center", sortable: true},
    {title: "变更次数", field: "chgTmsCnt", align: "center", sortable: true},
    {title: "申报类型", field: "dclTypename", align: "center", sortable: true},
    {title: "主管海关", field: "masterCuscd", align: "center", sortable: true},
    {title: "单据状态", field: "chkStatusName", align: "center", sortable: true},
    {title: "回执状态", field: "retChannel", align: "center", sortable: true}
];

var arcrpParam = {};
arcrpParam.columns = columns;
arcrpParam.url = _arcrpServerAddress;
arcrpParam.gridId = "arcrpTable";

var cusParam = {};
cusParam.columns = columns;
cusParam.url = _cusServerAddress;
cusParam.gridId = "cusTable";

var hisParam = {};
hisParam.columns = columns;
hisParam.url = _hisServerAddress;
hisParam.gridId = "hisTable";

$(function () {
    //初始化日期控件
    Utils.initCalendar();

    //设置日期格式，限制开始时间不能大于结束时间
    setCalFormat();

    //初始化表格数据
    initGridData();

    //按钮绑定事件
    bindEvent();

    //初始化下拉控件
    initDropDown();

});

/**
 * 回车事件绑定搜索按钮
 */
$(document).keyup(function (event) {
    if (event.keyCode == 13) {
        //预录入表数据
        DataGridUtils.refresh(arcrpParam);
        //正式表数据
        DataGridUtils.refresh(cusParam);
        //历史表数据
        DataGridUtils.refresh(hisParam);
    }
});

/**
 * 设置日期格式，限制开始时间不能大于结束时间
 */
function setCalFormat() {
    /************设置结束有效日期***************/
    //开始时间
    $('#finishValidDateStart').datepicker().on('changeDate', function (e) {
        var startTime = e.date;
        $('#finishValidDateEnd').datepicker('setStartDate', startTime);
    });
    //结束时间
    $('#finishValidDateEnd').datepicker({}).on('changeDate', function (e) {
        var endTime = e.date;
        $('#finishValidDateStart').datepicker('setEndDate', endTime);
    });
    /************设置录入日期***************/
    //开始时间
    $('#decTimeStart').datepicker().on('changeDate', function (e) {
        var startTime = e.date;
        $('#decTimeEnd').datepicker('setStartDate', startTime);
    });
    //结束时间
    $('#decTimeEnd').datepicker({}).on('changeDate', function (e) {
        var endTime = e.date;
        $('#decTimeStart').datepicker('setEndDate', endTime);
    });
}

/**
 * 初始化表格数据
 */
function initGridData() {
    //预录入表数据
    DataGridUtils.initGridByUrl(arcrpParam);
    //正式表数据
    DataGridUtils.initGridByUrl(cusParam);
    //历史表数据
    DataGridUtils.initGridByUrl(hisParam);
}

/**
 * 按钮事件绑定
 */
function bindEvent() {
    //搜索事件
    $("#search").click(function () {
        DataGridUtils.refresh(arcrpParam);
        DataGridUtils.refresh(cusParam);
        DataGridUtils.refresh(hisParam);
    });
    //清除事件
    $("#reset").click(function () {
        DataGridUtils.refresh(arcrpParam);
        DataGridUtils.refresh(cusParam);
        DataGridUtils.refresh(hisParam);
    });
    //预录入表刷新事件
    $("#arcrpRefresh").click(function () {
        DataGridUtils.refresh(arcrpParam)
    });
    //正式表刷新事件
    $("#cusRefresh").click(function () {
        DataGridUtils.refresh(cusParam)
    });
    //历史表刷新事件
    $("#hisRefresh").click(function () {
        DataGridUtils.refresh(hisParam)
    });
    //新增事件
    $("#arcrpAdd").click(function () {
        Utils.showEditDiv(Utils.formatUrl(_jumpPage + "edit.jsp?optype=add"));
    });
    //修改事件
    $("#modify").click(function () {
        DataGridUtils.modify(arcrpParam);
    });
    //预录入表查阅事件
    $("#arcrpView").click(function () {
        arcrpParam.jumPageUrl = _jumpPage + "edit.jsp?view=Arcrp";
        DataGridUtils.view(arcrpParam);
    });
    //历史表查阅事件
    $("#cusView").click(function () {
        cusParam.jumPageUrl = _jumpPage + "edit.jsp?view=Cus";
        DataGridUtils.view(cusParam);
    });
    //历史表查阅事件
    $("#hisView").click(function () {
        hisParam.jumPageUrl = _jumpPage + "edit.jsp?view=His";
        DataGridUtils.view(hisParam);
    });
    //变更事件
    $("#change").click(function () {
        var modelParam = {};
        modelParam.area = ["900px", "520px"];
        modelParam.url = _jumpPage + "selectEt.jsp";
        modelParam.title = "选择变更档案库记录";
        modelParam.id = "selectEt";
        Utils.showModalDialog(modelParam);
    });
    //注销事件
    $("#cancel").click(function () {
        Utils.redirect(_jumpPage + "edit.jsp?optype=cancel");
    });
    //删除事件
    $("#delete").click(function () {
        arcrpParam.url = _arcrpServerAddress;
        arcrpParam.gridId = "arcrpTable";
        arcrpParam.serverUrl = _arcrpServerAddress + '/deleteByList';
        DataGridUtils.deleteGrid(arcrpParam);
    });
    //查看回执
    $("#receipt").click(function () {
        var rowData = $('#arcrpTable').bootstrapTable('getSelections');//获取当前行数据
        DataGridUtils.viewMessageLog(rowData.seqNo);
    });
}

/**
 * 双击表单事件
 * @param row 行数据
 * @private
 */
function __onDblClickRow(row, element) {
    var gridId = element[0].offsetParent.id;
    var url = _jumpPage + "edit.jsp";
    if (gridId === "arcrpTable") {
        arcrpParam.jumPageUrl = url + "?view=Arcrp";
        DataGridUtils.view(arcrpParam);
    } else if (gridId === "cusTable") {
        cusParam.jumPageUrl = url + "?view=Cus";
        DataGridUtils.view(cusParam);
    } else if (gridId === "hisTable") {
        hisParam.jumPageUrl = url + "?view=His";
        DataGridUtils.view(hisParam);
    }
}

/**
 * 初始化下拉控件
 */
function initDropDown() {
    Utils.setCodesDropDown("CHK_STATUS,DCL_TYPE");
}
