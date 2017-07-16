//服务器地址
_serverAddress = _server + "/sas/sasDclCusUcnsDt/list";
// 列表默认选中
/*var sasDclSeqNoList = Utils.search("sasDclSeqNoList");
if (sasDclSeqNoList == null){
    sasDclSeqNoList = "";
}*/
//操作数组
//单损耗
var columns=[
    { title: "单选",field: "bomSelect",radio: true,align: "center",valign: "middle"},
    { title: "成品序号",field: "endprdSeqno",align: "center",sortable: true},
    { title: "料件序号",field: "mtpckSeqno",align: "center",sortable: true},
    { title: "损耗率",field: "lossRate",align: "right",sortable: true },
    { title: "净耗数量",field: "netUseupQty",align: "right",sortable: true },
    { title: "修改标记",field: "modfMarknm",align: "center",sortable: true }
];
var param={};
param.columns=columns;
param.height = 350;
param.pageSize = 5;
param.pageList = [5, 10, 20, 50];

var sasDclNo = Utils.search("id");// 申报表编号
//页面绑定事件
$(function(){
	param.url=_serverAddress + "?sasDclNo="+sasDclNo;
    DataGridUtils.initGridByUrl(param);   
	//搜索事件
	$("#search").click(function(){
        param.url=_serverAddress + "?sasDclNo="+sasDclNo;
        DataGridUtils.refresh(param);
	});
    //刷新事件
    // $("#refreshBtn").click(function () {
    //     param.url=_serverAddress;
    //     DataGridUtils.refresh(param);
    // });
	$("#affirm").click(function () {
        save();
    });
	//返回
    $("#reback").click(function () {
        Utils.closeModalDialog();
    });
    $("#resetBtn").click(function () {
        $("#mtpckSeqno").val("");
        $("#endprdSeqno").val("");
    })
});
//回车事件绑定搜索按钮
$(document).keyup(function(event){
  if(event.keyCode ==13){
      param.url=_serverAddress + "?sasDclNo="+sasDclNo;
      DataGridUtils.refresh(param);
  }
});

function save() {
    var rows = $('#table').bootstrapTable('getSelections');
    if (rows.length == 0) {
        layer.msg("还未选择任何记录!", {time: 1500});
        return;
    }
    if (rows.length > 1) {
        layer.msg("只能选择一行记录", {time: 1500});
        return;
    }
    /*var sasDclSeqno = rows[0]["sasDclSeqno"];
    if ($.inArray(sasDclSeqno.toString(),sasDclSeqNoList.split(",")) != -1){
        layer.msg("所选记录已存在该单，请检查", {time: 1500});
        return;
    }*/
    var uid = rows[0]["uid"];
    var optype = Utils.search("optype");
    var url = _server + "/sas/sasDclUcnsDt/list/getSasDclCusUcnsDt?optype="+optype;

    layer.confirm('确认所选记录 ？', {btn: ['确定', '取消']}, function () {
        $.ajax({
            url: url,
            type: 'post',
            data: {"uid": uid, "appId": $("#appId").val()},
            dataType: 'json',
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (result) {
                if (result.code == 1) {
                        parent.data=result.data;
                        Utils.redirect("../sasDclUcnsDt/edit.jsp?optype=change&seqNo="+parent.$("#seqNo").val());
                } else {
                    layer.msg(result.message, {time: 1500});
                }
            },
            error: function (result) {
                layer.msg(result.message, {time: 1500});
            }
        });
    })
}
