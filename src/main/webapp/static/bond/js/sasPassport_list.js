//服务器地址
var mtpckEndprdMarkcd =  Utils.search("mtpckEndprdMarkcd");
var docType =  Utils.search("docType");
var iEFlag1 =  Utils.search("iEFlag1");
var seqNo =  Utils.search("seqNo");
var emsNo =  Utils.search("putrecNo");
var sasDclNo =  Utils.search("applyNo");
if(sasDclNo != null){
    $("#sasDclNo").val(sasDclNo);
}
if(docType=="A0604"){//加工
    param.url=_server+"/sas/sasStockCus/list?docType=A0502.01&stockTypecd="+iEFlag1+"&centralizedDclTypecd=1&chkStatus=P&dclTypecd=3";
}else if(docType=="A0605"){//物流
    param.url=_server+"/sas/sasStockCus/list?docType=A0502.02&stockTypecd="+iEFlag1+"&centralizedDclTypecd=1&chkStatus=P&dclTypecd=3";
}

//操作数组
var columns = [
    {title: "全选", field: "select", checkbox: true, align: "center", width: "30"},
    {title: "出入库单编号", field: "sasStockNo", align: "center", sortable: true},
    {title: "申报表编号", field: "sasDclNo", align: "center", sortable: true},
    {title: "预录入编号", field: "sasStockPreentNo", align: "center", sortable: true},
    {title: "集报标志", field: "centralizedDclTypecd", align: "center", sortable: true},
    {title: "申报类型", field: "dclTypecd", align: "center", sortable: true},
    {title: "单据状态", field: "chkStatusNm", align: "center", sortable: true},
    {title: "操作时间", field: "decTime", align: "center", sortable: true},
    {title: "回执状态", field: "retChannel", align: "center", sortable: true},
    {title: "主管海关", field: "masterCuscd", align: "center", sortable: true,},
    {title: "监管场所", field: "areaCode", align: "center", sortable: true,}
];
param.columns=columns;
param.height=470;
$(function(){
    //绑定事件
	BindEvent();
})
//绑定事件
function BindEvent(){
	/**************设置显示、隐藏表头事件*****************/
	
	/**************设置显示、隐藏表头事件*****************/
	/********************返回事件********************/
	$("#cancel").click(function(){
        parent.refreshGrid("img");
        var index = parent.layer.getFrameIndex(window.name);
        parent.layer.close(index);
		 //parent.layer.close(0);
	});
	/****************绑定保存事件*************************/
	$("#ok").click(function(){
	    param.docType = docType;
		param.mtpckEndprdMarkcd = mtpckEndprdMarkcd;
		param.seqNo= seqNo;
		param.idField="uid";
        param.serverUrl=_server+"/inv/invImg/list/add";
        putrecSave(param);
	});

    //搜索事件
    $("#search").click(function () {
        DataGridUtils.refresh(param);
    });
}

//页面列表 (isSearch：是否是查询，searchForm:查询form表单的Id（id是searchForm可不传）)
function load(isSearch,searchForm) {
    param.isSearch=isSearch;
    DataGridUtils.initGridByUrl(param);
}

function putrecSave(param) {
    param.gridId = param.gridId || "table";
    param.idField = param.idField || "ID";
    var rows = $('#' + param.gridId).bootstrapTable('getSelections');
    if (rows.length == 0) {
        layer.alert("未选择任何记录");
        return;
    }
    //拼接主键
    var id = $.map(rows, function (row) {
        return row.seqNo;
    });

    var idList = id.join(",");
    layer.confirm('确认所选信息 ？', {btn: ['确定', '取消']}, function () {
        //调用后台服务
        $.ajax({
            url: param.serverUrl,
            type: 'post',
            data: {"idList": idList,"appId": $("#appId").val(),"docType":docType,"mtpckEndprdMarkcd":param.mtpckEndprdMarkcd,"seqNo":param.seqNo,"iEFlag1":iEFlag1,"putrecNo":emsNo},
            dataType: 'json',
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (result) {
                if (result.code == 1) {
                    parent.refreshGrid("sas");
                    parent.refreshGrid("img");
                    var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
                    parent.layer.close(index);
                } else {
                    layer.msg(result.message, {
                        time: 1500
                    });
                }
            },
            error: function (result) {
                layer.alert('执行失败!');
                return false;
            }
        });
    });
}

function showPage(pageId,title,url){
    var modelParam={};
    var width = $(".container").width()+"px";
    modelParam.area = [];
    modelParam.area.unshift(width,"570px");
    modelParam.title=title;
    modelParam.id=pageId;
    //传入单据编号
    if(url.indexOf("?")==-1)
        url+="?seqNo="+seqNo;
    else
        url+="&seqNo="+seqNo;
    modelParam.url=url;
    Utils.showModalDialog(modelParam);
}

