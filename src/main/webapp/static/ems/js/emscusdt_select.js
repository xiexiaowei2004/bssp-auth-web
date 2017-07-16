var seqNo = Utils.search("seqNo");
var chgTmsCnt = Utils.search("chgTmsCnt");
// 料件成品类型
var mtpckType = Utils.search("mtpckType");
// 服务器地址
_serverAddress = _server + Utils.stringFormat("/ems/emsCus{0}/list/selectByEmsNo", mtpckType);
// 跳转页面
_jumpPage = baselocation + Utils.stringFormat("/views/ems/emsPutrec{0}/edit.jsp", mtpckType);

// 操作数组
var columns = [ 
	{ title : "全选",field : "select",checkbox : true,align : "center",valign : "middle" }, 
	{ title: "序号",field: "gdsSeqno",align: "center",sortable: true},
    { title: "料号",field: "gdsMtno",align: "left",sortable: true },
    { title: "商品编码",field: "gdecd",align: "center",sortable: true },
    { title: "商品名称",field: "gdsNm",align: "left",sortable: true,width:300 },
    { title: "规格型号",field: "endprdGdsSpcfModelDesc",align: "left",sortable: true },
    { title: "申报计量单位",field: "dclUnitnm",align: "center",sortable: true },
    { title: "法定计量单位",field: "lawfUnitnm",align: "center",sortable: true },
    { title: "申报单价",field: "dclUprcAmt",align: "right",sortable: true },
    { title: "币制",field: "dclCurrnm",align: "left",sortable: true },
    { title: "辅料标记",field: "adjmtrMarknm",align: "center",sortable: true },
    { title: "修改标记",field: "modfMarknm",align: "center",sortable: true },
    { title: "企业执行标记",field: "etpsExeMarknm",align: "center",sortable: true } 
    ];
var param = {};
param.height = 350;
param.pageSize = 5;
param.pageList = [5, 10, 20, 50];
param.columns = columns;
param.url = _serverAddress + "?seqNo=" + seqNo + "&filterSelect=" + chgTmsCnt;
/**
 * 页面绑定事件
 */
$(function() {
	DataGridUtils.initGridByUrl(param);
	// 搜索事件
	$("#search").click(function() {
		DataGridUtils.refresh(param);
	});
	// 确定事件
	$("#determine").click(function() {
		Determine();
	});
	// 返回
	$("#reback").click(function() {
		Utils.closeModalDialog();
	});
});
/**
 * 回车事件绑定搜索按钮
 */
$(document).keyup(function(event) {
	if (event.keyCode == 13) {
		param.url = _serverAddress;
		DataGridUtils.refresh(param);
	}
});
/**
 * 确定事件
 */
function Determine() {
	var rows = $('#table').bootstrapTable('getSelections');
	if (rows.length == 0) {
		layer.msg("未选择记录", {
			time : 1500
		});
		return;
	}
	/*var pGdsSeqnos = getParentGdsSeqno();
	var gdsSeqno = rows[0].gdsSeqno;
	if (pGdsSeqnos.indexOf(gdsSeqno) != -1) {
		layer.msg("序号为" + gdsSeqno + "的记录已存在", {time : 1500 });
		return;
	}
	parent.data = rows[0];
	var url = _jumpPage + "?optype=add&flag=chgSelect";
	Utils.redirect(url);*/
	//2017-06-27 改为多选
    //拼接主键
    var id = $.map(rows, function (row) {
        return row.uid;
    });
    var idList = id.join(",");
    var url = _server + Utils.stringFormat("/ems/emsCus{0}/list/insertToPre", mtpckType);
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
                layer.msg("商品选择成功", {time: 1500},function(){
	                parent.refreshGrid(mtpckType.toLowerCase());
	                Utils.closeModalDialog();
                });
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
/**
 * 查询父页面的列表序号
 * 
 * @returns
 */
function getParentGdsSeqno() {
	if(mtpckType=="") return "";
	var gridId="";
	if(mtpckType=="Img")
		gridId="imgTable";
	else if(mtpckType=="Exg")
		gridId="exgTable";
	var rows = parent.$('#'+gridId).bootstrapTable('getData');
	// 拼接主键
	var gdsSeqno = $.map(rows, function(row) {
		return row.gdsSeqno;
	});
	return gdsSeqno;
}