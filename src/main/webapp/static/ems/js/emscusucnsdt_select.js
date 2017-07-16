var seqNo = Utils.search("seqNo");
var chgTmsCnt = Utils.search("chgTmsCnt");
//服务器地址
_serverAddress = _server + "/ems/emsCusUcnsDt/list/selectByEmsNo";
//跳转页面
_jumpPage = baselocation + "/views/ems/emsPutrecUcnsDt/edit.jsp";

//操作数组
var columns = [
    {title: "单选", field: "select", checkbox: true, align: "center", valign: "middle"},
    { title: "序号",field: "ucnsSeqno",align: "center",sortable: true},
    { title: "成品序号",field: "endprdSeqno",align: "center",sortable: true},
    { title: "料件序号",field: "mtpckSeqno",align: "center",sortable: true},
    { title: "单损耗版本号",field: "ucnsVerno",align: "center",sortable: true },
    { title: "单耗数量",field: "ucnsQty",align: "right",sortable: true },
    { title: "净耗数量",field: "netUseupQty",align: "right",sortable: true },
    { title: "有形损耗率",field: "tgblLossRate",align: "right",sortable: true },
    { title: "无形损耗率",field: "intgbLossRate",align: "right",sortable: true },
    { title: "保税料件比例",field: "bondMtpckPrpr",align: "right",sortable: true },
    { title: "单耗申报状态",field: "ucnsDclStunm",align: "center",sortable: true },
    { title: "修改标记",field: "modfMarknm",align: "center",sortable: true },	    
    { title: "企业执行标记",field: "etpsExeMarknm",align: "center",sortable: true }
];
var param = {};
param.height = 380;
param.columns = columns;
param.url = _serverAddress + "?seqNo=" + seqNo + "&filterSelect=" + chgTmsCnt;
/**
 * 页面绑定事件
 */
$(function () {
    DataGridUtils.initGridByUrl(param);
    //搜索事件
    $("#search").click(function () {
        DataGridUtils.refresh(param);
    });
    //确定事件
    $("#determine").click(function () {
        Determine();
    });
    //返回
    $("#reback").click(function () {
        Utils.closeModalDialog();
    });
});
/**
 * 回车事件绑定搜索按钮
 */
$(document).keyup(function (event) {
    if (event.keyCode == 13) {
        param.url = _serverAddress;
        DataGridUtils.refresh(param);
    }
});
/**
 *确定事件
 */
function Determine() {
    var rows = $('#table').bootstrapTable('getSelections');
    if (rows.length == 0) {
        layer.msg("未选择记录", {time: 1500});
        return;
    }
    //parent.data = rows[0];
    //var url = _jumpPage + "?optype=add&flag=chgSelect";
    //Utils.redirect(url); 
    //2017-06-27 改为多选
    //拼接主键
    var id = $.map(rows, function (row) {
        return row.uid;
    });
    var idList = id.join(",");
    var url = _server + "/ems/emsCusUcnsDt/list/insertToPre";
    $.ajax({
        url: url,
        type: 'post',
        dataType: 'json',
        data: { appId: $("#appId").val(), seqNo: seqNo, chgTmsCnt: chgTmsCnt,idList:idList },
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (result) {
            if (result.code == "1") {
            	layer.msg("单耗选择成功", {time: 1500});
                parent.refreshGrid("bom");
                Utils.closeModalDialog();
            }
            else {
                layer.msg(result.message, {time: 1500});
            }
        },
        error: function (result) {
            layer.msg(result.respondText, {time: 1500});
        }
    });
}