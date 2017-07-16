//服务器地址
_serverAddress = _server + "/sas/sasDclCusDt/list";
// 列表默认选中
var sasDclSeqNoList = Utils.search("sasDclSeqNoList");
if (sasDclSeqNoList == null){
    sasDclSeqNoList = "";
}
 /*var ids="";*/
var seqNo = Utils.search("seqNo");
//跳转页面
_jumpPage = baselocation + "/views/sas/sasDclDt/";
//操作数组
var columns=[
    { title: "全选",field: "select",radio: true,align: "center",valign: "middle"/*, formatter:function(value, row, index){
            var sasDclSeqno = row.sasDclSeqno;
            if ($.inArray(sasDclSeqno.toString(),sasDclSeqNoList.split(",")) != -1){
                ids += row.uid + ",";
                return {
                    checked: true//设置选中
                };
            }
        }*/
    },
    { title: "申报序号",field: "sasDclSeqno",align: "center",sortable: true},
    { title: "商品编码",field: "gdecd",align: "center",sortable: true },
    { title: "商品名称",field: "gdsNm",align: "left",sortable: true },
    { title: "数量",field: "dclQty",align: "right",sortable: true},
    { title: "申报计量单位",field: "dclUnitcd",align: "center",sortable: true},
    { title: "单价",field: "dclUprcAmt",align: "right",sortable: true },
    { title: "总价",field: "dclTotalAmt",align: "right",sortable: true },
    { title: "币制",field: "dclCurrcd",align: "left",sortable: true }
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
        $("#gdecd").val("");
        $("#gdsNm").val("");
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
        layer.msg("还未选择任何商品!", {time: 1500});
        return;
    }
   /* //拼接主键
    var id = $.map(rows, function (row) {
        var uid = row["uid"];
        if ($.inArray(uid.toString(),ids.split(",")) == -1){
            return uid;
        }
    });
    if (!id.length){
        $("#reback").click();
        return;
    }
    var idList = id.join(",");*/
    if (rows.length > 1) {
        layer.msg("只能选择一行记录", {time: 1500});
        return;
    }
    var sasDclSeqno = rows[0]["sasDclSeqno"];
    if ($.inArray(sasDclSeqno.toString(),sasDclSeqNoList.split(",")) != -1){
        layer.msg("所选商品已存在该单，请检查", {time: 1500});
        return;
    }
    var uid = rows[0]["uid"];
    var url = _server + "/sas/sasDclDt/list/change?seqNo="+seqNo;
    var optype = Utils.search("optype");
    if (optype != null){
        url = _server + "/sas/sasDclDt/list/getSasDclCusDt?optype="+optype;
    }
    layer.confirm('确认所选商品 ？', {btn: ['确定', '取消']}, function () {
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
                    /*layer.msg(result.message, {time: 1500}, function () {
                        var param = {};
                        param.url = _server + "/sas/sasStockDt/list?seqNo=" + result.data.seqNo;
                        window.parent.subPageRefresh(param);
                        $("#reback").click();
                    });*/
                        parent.data=result.data;
                        var url="../sasStockDt/edit.jsp?optype=add";
                        if (optype != null){
                            url="../sasDclDt/edit.jsp?optype=change";
                        }
                        Utils.redirect(url);
                        //window.parent.getdata(result.data,"add");
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
