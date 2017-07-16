var serverParam = "?docType="+Utils.search("docType")+"&businessTypecd="+Utils.search("businessTypecd");

//服务器地址
_serverAddress = _server + "/sas/sasDclCusBsc/list"+serverParam;
//操作数组
var columns=[
    { title: "全选",field: "select",radio: true,align: "center",valign: "middle"},
    { title: "申报表编号",field: "sasDclNo",align: "center",sortable: true},
    { title: "企业预录入编号",field: "etpsPreentNo",align: "center",sortable: true },
    { title: "货物流向",field: "directionTypecd",align: "center",sortable: true },
    { title: "区内账册编号",field: "areainOriactNo",align: "center",sortable: true },
    { title: "有效期",field: "validTime",align: "center",sortable: true,formatter:function(value, row, index){
    	var dataTime = row.validTime;
    	if (dataTime != "" && dataTime != null){
            dataTime = dataTime.split(" ")[0];
		}
        return dataTime;
    }},
    { title: "申报类型",field: "dclTypeNm",align: "center",sortable: true },
    { title: "变更次数",field: "chgTmsCnt",align: "left",sortable: true },
    { title: "单据状态",field: "chkStatusNm",align: "center",sortable: true },
    { title: "回执状态",field: "retChannel",align: "left",sortable: true },
    { title: "操作时间",field: "decTime",align: "center",sortable: true },
    { title: "主管海关",field: "masterCuscd",align: "center",sortable: true },
    { title: "监管场所",field: "areaCode",align: "center",sortable: true }
];
var param={};
param.columns=columns;
param.pageSize = 6;
//页面绑定事件
$(function(){
    initDropDown();
    SetDefault();
	//搜索事件
	$("#search").click(function(){
        param.url=_serverAddress;
        DataGridUtils.refresh(param);
	});
    //刷新事件
	$("#refreshBtn").click(function () {
        param.url=_serverAddress;
        DataGridUtils.refresh(param);
    });
    /********************绑定返回事件********************/
    $("#reback").click(function(){
        Utils.closeModalDialog();
    });
    /****************绑定保存事件*************************/
    $("#affirm").click(function(){
        var dclTypecd = Utils.search("dclTypecd");
        var confrim = "";
        if (dclTypecd == "2"){
            confrim = "变更";
        }else if (dclTypecd == "3"){
            confrim = "结案";
        }
        layer.confirm('是否进行'+confrim+'？', {btn: ['确定', '取消']}, function () {
            var row = DataGridUtils.getRowDatas();
            var uid=row.uid;
            var url = _server + "/sas/sasDclCusBsc/list/"+ uid +"/edit";
            $.ajax({
                url: url,
                type: 'post',
                dataType: 'json',
                data: {"dclTypecd":dclTypecd,"appId": $("#appId").val()},
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true,
                success: function (result) {
                    if (result.code == 1){
                        if (dclTypecd == "2") {
                            window.parent.getData(result.data.uid, result.data.dclTypecd);
                        }else if (dclTypecd == "3"){
                            window.parent.getData(uid,dclTypecd);
                        }
                    }else{
                        layer.msg(result.message,{time:1500});
                    }
                },
                error: function (result) {
                    layer.msg(result.message,{time:1500});
                }
            });
        });
    });
});
//回车事件绑定搜索按钮
$(document).keyup(function(event){
  if(event.keyCode ==13){
	  param.url=_serverAddress;
      DataGridUtils.refresh(param);
  }
});

//初始化下拉控件
function initDropDown(){
    /**
     * DCL_TYPECD_SAS 申报类型
     * EMAPV_MARKCD_SAS 审批状态代码
     * CHK_STATUS 单据状态代码
     */
    Utils.setCodesDropDown("DCL_TYPECD_SAS");
}


//下拉回调
function __onAfterLoadCodes(data) {
    // var now = new Date();
    // var date=new Date(now.getTime()-1000*60*60*24*5);
    // $('#decTimeStart').datepicker('setDate', date);
    // $('#decTimeEnd').datepicker('setDate', now);
    param.url=_serverAddress;
    DataGridUtils.initGridByUrl(param);
}

function SetDefault() {
    $("#dclTypecdParam").val(3) //过滤结案数据
}
