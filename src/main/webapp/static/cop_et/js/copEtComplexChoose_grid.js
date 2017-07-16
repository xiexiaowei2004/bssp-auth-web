//服务器地址
_serverAddress = _server + "/cod_cus/codCusComplex/list";
var _exgServerAddress = _server + "/cop_et/etArcrpExg/list";
var _imgServerAddress = _server + "/cop_et/etArcrpImg/list";

//选取操作数组
chooseColumns = [
    {title: "全选", field: "select", radio: true, width: 20, align: "left", valign: "middle"},
    {title: "HS编码", field: "codeT", align: "center", sortable: true, order: "desc"},
    {title: "附加编码", field: "codeS", align: "center", sortable: true},
    {title: "商品名称", field: "gName", align: "left", sortable: true},
    {title: "备注", field: "noteS", align: "left", sortable: true}
];

var param = {};
param.columns = chooseColumns;
var seqNo = Utils.search("seqNo");
var gdecd = Utils.search("gdecd");
var gridId = Utils.search("gridId");

//页面绑定事件
$(function () {

    if (gridId == "exgTable") {
        param.url = _exgServerAddress + "/complexList?seqNo=" + seqNo + "&codeT=" + gdecd;
    } else if (gridId == "imgTable") {
        param.url = _imgServerAddress + "/complexList?seqNo=" + seqNo + "&codeT=" + gdecd;
    }
    DataGridUtils.initGridByUrl(param);
});

function __onDblClickRow(row) {
    window.parent.printValue(row);
    var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
    parent.layer.close(index);
}