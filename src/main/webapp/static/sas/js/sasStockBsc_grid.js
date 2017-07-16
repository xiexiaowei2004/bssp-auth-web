var stockTypecd=Utils.search("stockTypecd");
var busType=Utils.search("busType");
var docType=Utils.search("docType");
var type=Utils.search("type");
var success = "P";
var parameter="?stockTypecd=" + stockTypecd+"&docType="+docType;
//服务器地址
_serverAddress = _server + "/sas/sasStockBsc/list"+parameter;
//跳转页面
_jumpPage = baselocation + "/views/sas/sasStockBsc/";

//操作数组
var Columns = [
    {title: "单选", field: "select", radio: true, align: "center", width: "30"},
    {title: "出入库单编号", field: "sasStockNo", align: "center", sortable: true},
    {title: "企业预录入编号", field: "etpsPreentNo", align: "center", sortable: true},
    {title: "申报表编号", field: "sasDclNo", align: "center", sortable: true},
    {title: "集报标志", field: "centralizedDclTypecd", align: "center", sortable: true},
    {title: "核放单生成标志", field: "passportUsedTypecd", align: "center", sortable: true},
    {title: "过卡标志", field: "passTypecd", align: "center", sortable: true,},
    {title: "申报类型", field: "dclTypecd", align: "center", sortable: true},
    {title: "单据状态", field: "chkStatusNm", align: "left", sortable: true},
    {title: "回执状态", field: "retChannel", align: "center", sortable: true},
    {title: "操作时间", field: "decTime", align: "center", sortable: true},
    {title: "主管海关", field: "masterCuscd", align: "center", sortable: true,},
    {title: "监管场所", field: "areaCode", align: "center", sortable: true,},
];
/*var cusColumns = [
    {title: "单选", field: "select", radio: true, align: "center", width: "30"},
    {title: "出入库单编号", field: "sasStockNo", align: "center", sortable: true},
    {title: "企业预录入编号", field: "etpsPreentNo", align: "center", sortable: true},
    {title: "申报表编号", field: "sasDclNo", align: "center", sortable: true},
    {title: "集报标志", field: "centralizedDclTypecd", align: "center", sortable: true},
    {title: "核放单生成标志", field: "passportUsedTypecd", align: "center", sortable: true},
    {title: "过卡标志", field: "passTypecd", align: "center", sortable: true,},
    {title: "申报类型", field: "dclTypecd", align: "center", sortable: true},
    {title: "单据状态", field: "chkStatusNm", align: "left", sortable: true},
    {title: "回执状态", field: "retChannel", align: "center", sortable: true},
    {title: "操作时间", field: "decTime", align: "center", sortable: true},
    {title: "主管海关", field: "masterCuscd", align: "center", sortable: true,},
    {title: "场地代码", field: "areaCode", align: "center", sortable: true,},
];
var hisColumns = [
    {title: "单选", field: "select", radio: true, align: "center", width: "30"},
    {title: "出入库单编号", field: "sasStockNo", align: "center", sortable: true},
    {title: "企业预录入编号", field: "etpsPreentNo", align: "center", sortable: true},
    {title: "申报表编号", field: "sasDclNo", align: "center", sortable: true},
    {title: "集报标志", field: "centralizedDclTypecd", align: "center", sortable: true},
    {title: "核放单生成标志", field: "passportUsedTypecd", align: "center", sortable: true},
    {title: "过卡标志", field: "passTypecd", align: "center", sortable: true,},
    {title: "申报类型", field: "dclTypecd", align: "center", sortable: true},
    {title: "单据状态", field: "chkStatusNm", align: "left", sortable: true},
    {title: "回执状态", field: "retChannel", align: "center", sortable: true},
    {title: "操作时间", field: "decTime", align: "center", sortable: true},
    {title: "主管海关", field: "masterCuscd", align: "center", sortable: true,},
    {title: "场地代码", field: "areaCode", align: "center", sortable: true,},
];*/

//var parameter="?stockTypecd=" + stockTypecd+"&docType="+docType+"&busType="+busType+"&type="+type;
var param={};
param.columns = Columns;
var tabs = ["busTab", "cusTab", "hisTab"];
var tableName = {busTab:"bscTable",cusTab:"cusTable",hisTab:"hisTable"};
var serverUrl = {busTab: "/sas/sasStockBsc/list", cusTab: "/sas/sasStockCus/list", hisTab: "/sas/sasStockHis/list"};
var tab = "bscTable";
//页面绑定事件
$(function () {
    //初始化下拉框
    initDropDown();
    //日期控件
    Utils.initCalendar();
    setCalFormat();
    //搜索框设置默认值
    setDefault();
    //初始化表格
    //DataGridUtils.initGridByUrl(param);
    initTable(true);
    //新增事件
    $("#add").click(function(){
        /*var rows = $("#table").bootstrapTable('getData');
        var sasDclNoList = "";
        if (rows.length != 0) {
            var id = $.map(rows, function (row) {
                return row["sasDclNo"];
            });
            sasDclNoList = id.join(",");
        }*/
        //弹出窗口
        modalParam.area = [];
        var width = $(".container").width()+"px";
        modalParam.area.unshift(width,"580px");
        modalParam.url="modal.jsp";
        modalParam.title="业务申报表选择";
        Utils.showModalDialog(modalParam);
    });
    //删除事件（批量删除）
    $("#remove").click(function(){
        var url=_server + "/sas/sasStockBsc/list/deleteByList";
        param.url = _serverAddress;
        param.serverUrl=url;
        param.idField = "seqNo";
        DataGridUtils.deleteGrid(param);
    });
    //搜索事件
    $("#search").click(function(){
        initTable(false);
    });
    //修改事件
    $("#modify").click(function(){
        var rows = $('#' + param.gridId).bootstrapTable('getSelections');
        var chargeback="false";
        if (rows.length == 0) {
            layer.msg("请选择要修改的记录");
            return;
        }
        if (rows.length > 1) {
            layer.msg("只能选择一行记录");
            return;
        }
        if("作废".indexOf(rows[0].dclTypecd)!=-1){;
            chargeback="true";
        }
        param.jumPageUrl=_jumpPage + "edit.jsp?chargeback="+chargeback;
        DataGridUtils.modify(param);
    });
    //查阅事件
    $("#view").click(function(){
        param.jumPageUrl=_jumpPage+"edit.jsp?viewType="+param.gridId;
        DataGridUtils.view(param);
    });
    //退运事件
    $("#return").click(function(){
        var rows = $('#' + param.gridId).bootstrapTable('getSelections');
        var jumPageUrl = _jumpPage + "edit.jsp?optype=return&id="+ rows[0].uid;
        if (rows.length == 0) {
            layer.msg("请选择要退运的记录", {time: 1500});
            return;
        }
        if (rows.length > 1) {
            layer.msg("只能选择一行记录", {time: 1500});
            return;
        }
        if(rows[0].emapvMarkcd != success){
            layer.msg("当前出入库单不是通过的单据，不可退运", {time: 1500});
            return;
        }

        $.ajax({
            url: _server + "/sas/sasStockBsc/list/check",
            type: 'post',
            dataType: 'json',
            data: {"sasStockNo": rows[0].sasStockNo},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (result) {
                if (result.code == 1) {
                    Utils.redirect(Utils.formatUrl(jumPageUrl));
                }else if(result.code == 0){
                    layer.confirm('该单据未做核放单，请确认是否继续？', {
                            btn: ['确定', '取消']
                        }, function () {
                            Utils.redirect(Utils.formatUrl(jumPageUrl));
                    })
                }
            },
            error: function (result) {

            }
        });
    });
    //作废申请事件
    $("#cancellation").click(function(){
        //弹出窗口
        modalParam.area = [];
        var width = $(".container").width()+"px";
        modalParam.area.unshift(width,"580px");
        modalParam.url="cancel.jsp";
        modalParam.title="作废申请";
        Utils.showModalDialog(modalParam);

        /*var rows = $('#' + param.gridId).bootstrapTable('getSelections');
        console.log(rows[0]);
        var jumPageUrl = _jumpPage + "edit.jsp"+parameter+"&optype=cancellation&id="+ rows[0].uid;
        if (rows.length == 0) {
            layer.msg("请选择要作废的记录", {time: 1500});
            return;
        }
        if (rows.length > 1) {
            layer.msg("只能选择一行记录", {time: 1500});
            return;
        }
        if(rows[0].chkStatus != success){
            layer.msg("当前出入库单尚未审批通过，不可作废", {time: 1500});
            return;
        }
        if(rows[0].rltBondInvtNo!=""){
            layer.msg("该单已经做了核放单，请先删除核注清单后，再进行作废申请", {time: 1500});
            return;
        }

        $.ajax({
            url: _serverAddress + "/check",
            type: 'post',
            dataType: 'json',
            data: {"seqNo": rows[0].seqNo},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (result) {
                if (result.code == 1) {
                    layer.msg("该单已经做了核放单，请先删除核放单后，再进行作废申请", {time: 1500});
                    return;
                }else if(result.code == 0){
                    Utils.redirect(Utils.formatUrl(jumPageUrl));
                }
            },
            error: function (result) {

            }
        });*/
    });
    //刷新事件
    $("#refreshBtn").click(function () {
        param.url=_serverAddress;
        DataGridUtils.refresh(param);
    })
    //回执
    $("#receipt").click(function () {
        var rows = $('#bscTable').bootstrapTable('getSelections');
        if (rows[0] != '' && rows[0] != undefined) {
            DataGridUtils.viewMessageLog(rows[0].seqNo);
        } else {
            layer.msg("未选择任何记录", {time: 1500});
        }
    });


    //回车事件绑定搜索按钮
    $(document).keyup(function (event) {
        if (event.keyCode == 13) {
            param.url = _serverAddress;
            DataGridUtils.refresh(param);
        }
    });
    /*if(stockTypecd=="I"){
        $("#stockTypecd").val("I");
        $("#title").text("分送入库单");
    }else{
        $("#stockTypecd").val("E");
        $("#title").text("分送出库单");
    }*/
    /**
     * 页签切换
     */
    $('#tab li').click(function () {
        var tab = $(this).children("a").attr("href").split("#")[1];
        param.gridId = tableName[tab];
        _serverAddress = _server + serverUrl[tab]+parameter;
        switch (tab)
        {
            case 'cusTab':
                $(".hid").hide();
                break;
            case 'hisTab':
                $(".hid").hide();
                break;
            default:
                $(".hid").show();
                break;
        }
    });
})

//行双击
function __onDblClickRow(rowdata) {
    Utils.showEditDiv(_jumpPage + "edit.jsp?id=" + rowdata.uid + "&optype=view"+"&viewType="+param.gridId);
}

//设置日期格式，限制开始时间不能大于结束时间
function setCalFormat() {
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
//初始化下拉控件
function initDropDown() {
    Utils.setCodesDropDown("DCL_TYPECD_STOCK,CHK_STATUS,CENTRALIZED_DCL_TYPECD,PASSPORT_USED_TYPECD,PASS_TYPECD");
}

function setDefault() {
    var date = DateUtil.dateToStr("yyyy-MM-dd");
    //给搜索框赋值
    var now = new Date();
    var decTimeStart = new Date(now.getTime() - 1000 * 60 * 60 * 24 * 5);
    $('#decTimeStart').datepicker('setDate', decTimeStart);
    $('#decTimeEnd').datepicker('setDate', date);
}

function jump1() {
    layer.closeAll();
    Utils.showEditDiv(_jumpPage+"edit.jsp?optype=add");
}

function jump2() {
    layer.closeAll();
    Utils.showEditDiv(_jumpPage+"edit.jsp?optype=cancellation");
}

function initTable(isInit) {
    $.each(tabs, function (index, field) {
        var tab = field;
        param.gridId = tableName[tab];
        param.url=_server+serverUrl[tab]+parameter;
        if (isInit){
            DataGridUtils.initGridByUrl(param);
        }else {
            DataGridUtils.refresh(param);
        }
    });
    param.gridId = "bscTable";
}