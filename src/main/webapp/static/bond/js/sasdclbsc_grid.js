//服务器地址
var docType1;
var busType;
var businessTypecd;
var docType = Utils.search("docType");
var iEFlag1 =  Utils.search("iEFlag1");
//var dclTypecd = '1,2'; //申报类型 备案、变更
var chkStatus = 'P';  //审批通过记录
if(docType=='A0604'){
    docType1="A0501.01";
    busType="jg";
    businessTypecd='A'
}else if (docType=='A0605'){
    docType1="A0501.02";
    busType="wl";
    businessTypecd='A'
}else if(docType=='A0606'){
    docType1="A0501.03";
    busType="jdjg";
    businessTypecd="G";
    iEFlag1 = "";
}
//_serverAddress = _server + "/sas/sasDclBsc/inv/list?busType="+busType+"&docType="+docType1+"&businessTypecd=A&directionTypecd="+iEFlag1+"&dclTypecd="+dclTypecd+"&chkStatus="+chkStatus;
_serverAddress = _server + "/sas/sasDclCusBsc/invCus/list?busType="+busType+"&docType="+docType1+"&businessTypecd="+businessTypecd+"&directionTypecd="+iEFlag1+"&chkStatus="+chkStatus;
//跳转页面
_jumpPage = baselocation + "/views/sas/sasDclBsc/";
//操作数组
columns=[
    { title: "全选",field: "select",radio: true,align: "center",valign: "middle"},
    { title: "申报表编号",field: "sasDclNo",align: "center",sortable: true},
    { title: "申报表预录入编号",field: "sasDclPreentNo",align: "center",sortable: true },
    { title: "货物流向",field: "directionTypecd",align: "center",sortable: true },
    { title: "区内账册编号",field: "areainOriactNo",align: "center",sortable: true },
    { title: "有效期",field: "validTime",align: "center",sortable: true,formatter:function(value, row, index){
    	var dataTime = row.validTime;
    	if (dataTime != "" && dataTime != null){
            dataTime = dataTime.split(" ")[0];
		}
        return dataTime;
    }},

    { title: "区内企业编码",field: "areainEtpsno",align: "center",sortable: true },
    { title: "区内企业名称",field: "areainEtpsNm",align: "left",sortable: true },
    { title: "申报类型",field: "dclTypeNm",align: "center",sortable: true },
    { title: "变更次数",field: "chgTmsCnt",align: "left",sortable: true },
    { title: "单据状态",field: "chkStatusNm",align: "center",sortable: true },
    { title: "操作时间",field: "decTime",align: "center",sortable: true },
    { title: "回执状态",field: "retChannel",align: "left",sortable: true },
    { title: "主管海关代码",field: "masterCuscd",align: "center",sortable: true },
    { title: "监管场所",field: "areaCode",align: "center",sortable: true }
];
param={};
param.columns=columns;
//页面绑定事件
$(function(){
    //确认事件
	$("#ok").click(function () {
        var rows = $("#sasDclBsctable").bootstrapTable('getSelections');
        if (rows.length == 0) {
            layer.msg("请选择集报出入区申请表记录", {time: 1500});
            return;
        }
         parent.sasDclNo = $.map(rows, function (row) {
            return row.sasDclNo;
        });
        parent.areainOriactNo = $.map(rows, function (row) {
            return row.areainOriactNo;
        });
        parent.toBscAdd();
        var index = parent.layer.getFrameIndex(window.name);
        parent.layer.close(index);
    });
    //取消事件
    $("#cancel").click(function(){
        var index = parent.layer.getFrameIndex(window.name);
        parent.layer.close(index);
    });

});

//页面列表 (isSearch：是否是查询，searchForm:查询form表单的Id（id是searchForm可不传）)
function load(isSearch,searchForm) {
    param.url=_serverAddress;
    param.gridId = "sasDclBsctable";
    param.isSearch=isSearch;
    DataGridUtils.initGridByUrl(param);
}


