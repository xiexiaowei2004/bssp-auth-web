//服务器地址
_serverAddress = _server + "/erp/erpPreUcnsDt/list";
//跳转页面
_jumpPage = baselocation + "/views/erp/erpPreUcnsDt/";
var param = {};
//企业编码
var inputCopNo = "";
//变更次数
var chgTmsCnt = 0;
//单据编号
var seqNo = "";
//操作数组
 columns=[
     {title: "全选",field: "select",checkbox: true,width: 20,align: "center",valign: "middle"},
     {title: "成品序号", field: "endprdSeqno", align: "center", sortable: true, order: "asc"},
     {title: "单耗版本号", field: "ucnsVerno", align: "center", sortable: true, order: "asc"},
     {title: "料件序号", field: "mtpckSeqno", align: "center", sortable: true, order: "asc"},
     {title: "单耗", field: "ucnsQty", align: "center", sortable: true},
     {title: "净耗", field: "netUseupQty", align: "center", sortable: true},
     {title: "有形损耗率", field: "tgblLossRate", align: "center", sortable: true},
     {title: "无形损耗率", field: "intgbLossRate", align: "center", sortable: true},
     {title: "保税料件比例", field: "bondMtpckPrpr", align: "center", sortable: true},
     {title: "修改标记", field: "modfMarkcd", align: "center", sortable: true, formatter:function(value,row,index){
         var s;
         if(value=="1"){
             s='修改';
         }else if(value=="2"){
             s='删除';
         }else if(value=="3"){
             s='新增';
         }
         return s;

     }}
];
param.columns=columns;
//param.url=_server+"/erp/erpPreDtImg/list/selectByIds";
$(function(){
	//绑定事件
	BindEvent();
    //取登陆人的信息
    Utils.getLoginUserInfo();
})
//获取登录用户信息的回调方法
function __onAfterGetLoginUserInfo(loginuser) {
    //登录用户信息
    console.log(loginuser);
    //得到企业编号用于过滤帐册表头
    inputCopNo = loginuser.inputCopNo;
}
//绑定事件
function BindEvent(){
	/**************设置显示、隐藏表头事件*****************/
	
	/**************设置显示、隐藏表头事件*****************/
	/********************返回事件********************/
	$("#cancel").click(function(){
        var index = parent.layer.getFrameIndex(window.name);
        parent.layer.close(index);
		 //parent.layer.close(0);
	});
	/****************绑定保存事件*************************/
	$("#ok").click(function(){
		param.idField="uid";
        //param.serverUrl=_serverAddress+"/insertEmsUcnsDataByIds";
        putrecSave(param);
	});

    //搜索事件
    $("#search").click(function () {
        DataGridUtils.refresh(param);
    });
}

//页面列表 (isSearch：是否是查询，searchForm:查询form表单的Id（id是searchForm可不传）)
function load(isSearch,searchForm) {
    param.url = _serverAddress+"?successFlag=0";
    console.log(param.url);
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
        return row[param.idField];
    });
    var idList = id.join(",");
    console.log(idList);
    $.ajax({
        url: _server + "/ems/emsPutrecBsc/list?chkStatus=S&emsTypecd=1&inputCopNo="+inputCopNo,
        type: 'post',
        data: {"appId": $("#appId").val()},
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (result) {
            console.log(result);
            if (result.code == 1) {
                if (result.data.length>1) {
                    parent.showEmsHeadPage('purEmsHead','账册选择','../erpPreDtImg/emshead_select.jsp?ids='+idList+"&from=ucns");
                    $("#cancel").click();
                }
                else {
                    console.log(result);
                    if (result.data.length > 0) {
                        //调用后台服务
                        $.ajax({
                            url: _serverAddress+"/insertEmsUcnsDataByIds",
                            type: 'post',
                            data: {ids:idList, emsId:result.data[0].uid,"appId": $("#appId").val()},
                            dataType: 'json',
                            xhrFields: {
                                withCredentials: true
                            },
                            crossDomain: true,
                            success: function (result) {
                                if (result.code == 1) {
                                    parent.layer.msg(result.data, {
                                        shade: 0.3,
                                        time: 1500
                                    }, function () {
                                        window.parent.location.reload(); // 刷新父页面
                                    });
                                } else {
                                    layer.msg(result.message, {
                                        icon: 2,
                                        time: 1000
                                    });
                                }
                            },
                            error: function (result) {
                                layer.alert('执行失败!');
                                return false;
                            }
                        });
                    }
                    else {
                        layer.alert('没有暂存状态的账册表头数据可匹配，请备案或变更账册表头!');
                        return false;
                    }
                }
            } else {
                layer.msg(result.message, {
                    icon: 2,
                    time: 1000
                });
            }
        },
        error: function (result) {
            layer.alert('执行失败!');
            return false;
        }
    });

}
