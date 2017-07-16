var emsNo = Utils.search("emsNo");  // 账册编号
var busType = Utils.search("busType");
var seqNo = Utils.search("id");  //单据编号
var chgTmsCnt = Utils.search("chgTmsCnt");  //变更次数
var sasDclNo = Utils.search("sasDclNo");    // 申报表编号
var etpsPreentNo = Utils.search("etpsPreentNo");    // 企业预录入编号
// 列表已存在
var oriactGdsSeqno = Utils.search("oriactGdsSeqno");
if (oriactGdsSeqno == null){
    oriactGdsSeqno = "";
}

//操作数组
var columns=[
    { title: "单选",field: "select",radio: true,width: 20,align: "center",valign: "middle"},
    { title: "商品序号",field: "gdsSeqno",align: "center",sortable: true},
    { title: "商品料号",field: "gdsMtno",align: "center",sortable: true },
    { title: "商品编码",field: "gdecd",align: "center",sortable: true },
    { title: "商品名称",field: "gdsNm",align: "left",sortable: true },
    { title: "商品规格型号描述",field: "endprdGdsSpcfModelDesc",align: "left",sortable: true },
    { title: "申报计量单位",field: "dclUnitnm",align: "center",sortable: true },
    // { title: "法定计量单位",field: "lawfUnitnm",align: "center",sortable: true },
    // { title: "第二法定计量单位",field: "secdLawfUnitnm",align: "center",sortable: true }
];

var _serverlUrl = _server + "/sas/sasDclDt/list/";    //确认操作
//服务器地址(列表)
switch (busType){
    case "wl":
    case "jdjg":
    case "wf":
    case "ls":
        _serverAddress=_server+"/ems_bws/emsBwsCusDt/list/selectByBwsNo?bwsNo=";
        _serverlUrl += "emsBwsCusDt";
        $("#mtpckEndprdTypecdDiv").hide();
        break;
    case "jg":
        _serverAddress=_server+"/ems/emsCusImg/list/selectByEmsNo?emsNo=";   // 默认料件
        _serverlUrl += "emsCusImg";
        columns.push({ title: "料件成品类型",field: "mtpckEndprdTypeNm",align: "center" });   // 料件成品类型
        Utils.setCodesDropDown("MTPCK_TYPECD");
        $("#gdsNmDiv").hide();
        break;
}
//跳转页面
_jumpPage = baselocation + "/views/sas/sasDclDt/";

var param={};
param.columns=columns;
param.height = 325;
param.pageSize = 5;

//页面绑定事件
$(function(){
    // 初始化表格
	param.url=_serverAddress + emsNo;
    DataGridUtils.initGridByUrl(param);

    var addParam = "wl,jdjg,ls,wf";
    var directionTypecd = Utils.search("directionTypecd");  // 出入区标志 默认不携带此参数为入区
    if (directionTypecd == null && addParam.indexOf(busType) > -1){  // 入区且是物流 绑定跳转新增事件
        $("#add").click(function () {
            parent.data = "";
            var url = _jumpPage+"edit.jsp?optype=add&seqNo="+seqNo+"&chgTmsCnt="+chgTmsCnt+
                "&sasDclNo="+sasDclNo+"&etpsPreentNo="+etpsPreentNo+"&busType="+busType+"&emsNo="+emsNo;
            if (busType == "jg") {
                url += "&mtpckEndprdTypecd="+$("#mtpckEndprdTypecd").val();
            }
            Utils.redirect(url);
        });
    }else{  // 出区隐藏按钮
        $("#add").hide();
        $("#add").next().hide();
    }
	//搜索事件
	$("#search").click(function(){
	    if (busType == "jg") {
            var mtpckEndprdTypecd = $("#mtpckEndprdTypecd").val();
            if (mtpckEndprdTypecd == "E"){
                _serverAddress = _server + "/ems/emsCusExg/list/selectByEmsNo?emsNo=";
                _serverlUrl = _serverlUrl.substring(0,_serverlUrl.length-9)+"emsCusExg";
            }else {
                _serverAddress=_server+"/ems/emsCusImg/list/selectByEmsNo?emsNo=";
                _serverlUrl = _serverlUrl.substring(0,_serverlUrl.length-9)+"emsCusImg";
            }
        }
        param.url=_serverAddress + emsNo;
        DataGridUtils.refresh(param);
	});
    // 确认按钮
	$("#affirm").click(function () {
        save();
    });
	//返回
    $("#reback").click(function () {
        Utils.closeModalDialog();
    });
});
//回车事件绑定搜索按钮
$(document).keyup(function(event){
  if(event.keyCode ==13){
      param.url=_serverAddress + emsNo;
      DataGridUtils.refresh(param);
  }
});

function save() {
    var rows = $('#table').bootstrapTable('getSelections');
    if (rows.length == 0) {
        layer.msg("请选择记录", {time: 1500});
        return;
    }
    var gdsSeqno = rows[0]["gdsSeqno"];
    if ($.inArray(gdsSeqno.toString(),oriactGdsSeqno.split(",")) != -1){
        layer.msg("所选商品已存在该单，请检查", {time: 1500});
        return;
    }
    var uid = rows[0]["uid"];
    layer.confirm('确认所选商品 ？', {btn: ['确定', '取消']}, function () {
        $.ajax({
            url: _serverlUrl + "/save",
            type: 'post',
            data: {"id": uid, "seqNo": seqNo,"chgTmsCnt":chgTmsCnt,"sasDclNo":sasDclNo,"etpsPreentNo":etpsPreentNo,"appId": $("#appId").val()},
            dataType: 'json',
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (result) {
                if (result.code == 1) {
                    parent.data = result.data;
                    var url="edit.jsp?optype=add";
                    Utils.redirect(url);
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

function __onAfterLoadCodes(data) {
    $("#mtpckEndprdTypecd").select2().val("I").trigger("change");// 默认为I-料件
}
