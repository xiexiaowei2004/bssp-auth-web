//服务器地址
_serverAddress = _server + "/cod_cus/codCusComplex/list";
var _exgServerAddress = _server + "/cop_et/etArcrpExg/list";
var _imgServerAddress = _server + "/cop_et/etArcrpImg/list";
var _cusExgServerAddress = _server + "/cop_et/etCusExg/list";
var _cusImgServerAddress = _server + "/cop_et/etCusImg/list";

//选取操作数组
chooseColumns = [
    {title: "全选", field: "select", checkbox: true, width: 20, align: "left", valign: "middle"},
    {title: "HS编码", field: "codeT", align: "center", sortable: true, order: "desc"},
    {title: "附加编码", field: "codeS", align: "center", sortable: true},
    {title: "商品名称", field: "gName", align: "left", sortable: true},
    {title: "备注", field: "noteS", align: "left", sortable: true}
];
//变更选取操作数组
changeChooseColumns = [
    {title: "全选", field: "select", checkbox: true, align: "center", valign: "middle"},
    {title: "序号", field: "gdsSeqno", align: "center", sortable: true, order: "desc"},
    {title: "商品编码", field: "gdecd", align: "center", sortable: true},
    {title: "商品名称", field: "gdsNm", align: "left", sortable: true},
    {title: "变更次数", field: "chgTmsCnt", align: "center", sortable: true},
    {title: "修改标志", field: "modfMarkname", align: "center", sortable: true},
    {title: "备注", field: "rmk", align: "left", sortable: true}
];
var param = {};

var seqNo = Utils.search("seqNo");
var chgTmsCnt = Utils.search("chgTmsCnt");
var etArcrpNo = Utils.search("etArcrpNo");
var gridId = Utils.search("gridId");
var optype = Utils.search("optype");
if (optype == "choose") {
    param.columns = chooseColumns;
} else if (optype == "changeChoose") {
    param.columns = changeChooseColumns;
}
//页面绑定事件
$(function () {

    if (gridId == "exgTable") {
        if (optype == "choose") {
            param.url = _exgServerAddress + "/complexList?seqNo=" + seqNo;
        } else if (optype == "changeChoose") {
            param.url = _cusExgServerAddress + "/changeChooseList?seqNo=" + seqNo + "&chgTmsCnt=" + chgTmsCnt;
        }
    } else if (gridId == "imgTable") {
        if (optype == "choose") {
            param.url = _imgServerAddress + "/complexList?seqNo=" + seqNo;
        } else if (optype == "changeChoose") {
            param.url = _cusImgServerAddress + "/changeChooseList?seqNo=" + seqNo + "&chgTmsCnt=" + chgTmsCnt;
        }
    }
    DataGridUtils.initGridByUrl(param);

    //搜索事件
    $("#search").click(function () {
        DataGridUtils.refresh(param);
    });
    //刷新事件
    $("#reset").click(function () {
        DataGridUtils.refresh(param)
    });
    //选取事件
    $("#choose").click(function () {
        choose();
    });
});
//回车事件绑定搜索按钮
$(document).keyup(function (event) {
    if (event.keyCode == 13) {
        param.url = _serverAddress;
        DataGridUtils.refresh(param);
    }
});

function choose() {
    if (gridId == "exgTable") {
        param.serverUrl = _exgServerAddress;
    } else if (gridId == "imgTable") {
        param.serverUrl = _imgServerAddress;
    }
    if (optype == "choose") {
        param.idField = "pkSeq";
        param.serverUrl += "/chooseAdd"
    } else if (optype == "changeChoose") {
        param.idField = "uid";
        param.serverUrl += "/changeChooseAdd"
    }
    var modfMarkcd = 1;//默认修改
    if (optype == "choose") {
        modfMarkcd = 3;//新增
    }
    param.serverUrl += "?etArcrpNo=" + etArcrpNo + "&chgTmsCnt=" + chgTmsCnt + "&modfMarkcd=" + modfMarkcd + "&seqNo=" + seqNo;
    add(param);
}

//弹出框选择 复选框 批量插入
function add(param) {
    var rows = $('#' + param.gridId).bootstrapTable('getSelections');
    if (rows.length == 0) {
        layer.alert("未选择任何记录");
        return;
    }
    //拼接主键
    var id = $.map(rows, function (row) {
        return row[param.idField];
    });
    var idList = id.join(",");
    layer.confirm('确认所选信息 ？', {btn: ['确定', '取消']}, function () {
        //调用后台服务
        $.ajax({
            url: param.serverUrl,
            type: 'post',
            data: {"idList": idList, "appId": $("#appId").val()},
            dataType: 'json',
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (result) {
                if (result.code == 1) {
                    parent.layer.msg(result.message, {time: 1500});
                    if (gridId == "imgTable") {
                        param.url = _imgServerAddress + "?seqNo=" + seqNo + "&chgTmsCnt=" + chgTmsCnt;
                    } else {
                        param.url = _exgServerAddress + "?seqNo=" + seqNo + "&chgTmsCnt=" + chgTmsCnt;
                    }
                    param.gridId = gridId;
                    window.parent.subPageRefresh(param);
                    var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
                    parent.layer.close(index);
                } else {
                    layer.msg(result.message, {time: 1000});
                }
            },
            error: function () {
                layer.alert('执行失败!');
                return false;
            }
        });
    });
}