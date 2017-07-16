//服务器地址
_serverAddress = _server + "/cop_et/etCusBsc/list";
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
var param = {};
param.height = "100%";
param.columns = columns;
param.url = _serverAddress;

//页面绑定事件
$(function () {

    DataGridUtils.initGridByUrl(param);

    //确定事件
    $("#confirm").click(function () {
        confirmChoose();
    });
    //返回
    $("#cancel").click(function () {
        Utils.closeModalDialog();
    });
});

/**
 *确定事件
 */
function confirmChoose() {
    DataGridUtils.change(param);
}

/**
 * 双击表单事件
 * @param row 行数据
 * @private
 */
function __onDblClickRow(row, element) {
    DataGridUtils.change(param);
}