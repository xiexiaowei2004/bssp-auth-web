//服务器地址
//_serverAddress = _server + "/erp/erpPreDtImg/list";
//跳转页面
//_jumpPage = baselocation + "/views/erp/erpPreDtImg/";
var param = {};
//获取页面传递的参数
var ids=Utils.search("ids");
var from=Utils.search("from");
//企业编码
var inputCopNo = "";

//操作数组
var columns=[
    { title: "单选",field: "select",radio: true,align: "center"},
    { title: "企业内部编号",field: "etpsPreentNo",align: "left",sortable: true,order: "desc"},
    { title: "账册编号",field: "emsNo",align: "left",sortable: true },
    { title: "经营企业社会信用代码",field: "bizopEtpsSccd",align: "center",sortable: true },
    { title: "经营企业名称",field: "bizopEtpsNm",align: "left",sortable: true},
    { title: "申报类型",field: "dclTypename",align: "center",sortable: true },
    { title: "结束有效日期",field: "finishValidDate",align: "center",sortable: true },
    { title: "申报日期",field: "decTime",align: "center",sortable: true,formatter:function(value,row,index){
        fieldValue = value.replace(/-/g,"/");
        fieldValue=DateUtil.dateToStr("yyyy-MM-dd",new Date(fieldValue));
        return fieldValue;
    }
    },
    { title: "主管海关",field: "masterCuscd",align: "center"},
    { title: "监管场所",field: "areaCode",align: "center"}
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
        //param.serverUrl=_serverAddress+"/insertEmsImgDataByIds";
        putrecSave(param);
	});

    //搜索事件
    $("#search").click(function () {
        //param.url=_server+"/ems/emsCusImg/list/selectByEmsNo?emsNo="+emsNo; //调用加工账册商品接口
        DataGridUtils.refresh(param);
    });
}

//页面列表 (isSearch：是否是查询，searchForm:查询form表单的Id（id是searchForm可不传）)
function load(isSearch,searchForm) {
    param.url = _server + "/ems/emsPutrecBsc/list?chkStatus=S&emsTypecd=1&inputCopNo="+inputCopNo;
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
    var emsid = rows[0]["uid"];
    console.log(emsid);
    console.log("===="+ids);
    var url = "";
    if (from == "img") {
        url = _server + "/erp/erpPreDtImg/list/insertEmsImgDataByIds";
    }
    else  if (from == "exg") {
        url = _server + "/erp/erpPreDtExg/list/insertEmsExgDataByIds";
    }
    else  if (from == "ucns") {
        url = _server + "/erp/erpPreUcnsDt/list/insertEmsUcnsDataByIds";
    }


    //调用后台服务
    $.ajax({
        url: url,
        type: 'post',
        data: {ids:ids, emsId:emsid,"appId": $("#appId").val()},
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
