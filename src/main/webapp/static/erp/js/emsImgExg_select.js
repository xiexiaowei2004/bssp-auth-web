var param = {};
//服务器地址
var mtpckEndprdMarkcd =  Utils.search("mtpckEndprdMarkcd");
var etpsInnerInvtNo =  Utils.search("etpsInnerInvtNo");
var putrecNo =  Utils.search("putrecNo");
if(mtpckEndprdMarkcd=="I"){
    param.url=_server+"/ems/emsCusImg/list/selectByEmsNo?emsNo="+putrecNo;
    // console.log( param.url);
}else{
    param.url=_server+"/ems/emsCusExg/list/selectByEmsNo?emsNo="+putrecNo;
}

//操作数组
 columns=[
    { title: "单选",field: "select",radio: true,width: 20,align: "center",valign: "middle"},
    { title: "商品序号",field: "gdsSeqno",align: "center",sortable: true},
    { title: "商品料号",field: "gdsMtno",align: "center",sortable: true },
    { title: "商品编码",field: "gdecd",align: "center",sortable: true },
    { title: "商品名称",field: "gdsNm",align: "center",sortable: true },
    { title: "商品规格型号描述",field: "endprdGdsSpcfModelDesc",align: "center",sortable: true },
    { title: "申报计量单位",field: "dclUnitnm",align: "center",sortable: true },
    { title: "法定计量单位",field: "lawfUnitnm",align: "center",sortable: true },
    { title: "第二法定计量单位",field: "secdLawfUnitnm",align: "center",sortable: true }
];
param.columns=columns;


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
        parent.refreshGrid("dt");
        var index = parent.layer.getFrameIndex(window.name);
        parent.layer.close(index);
		 //parent.layer.close(0);
	});
	/****************绑定保存事件*************************/
	$("#ok").click(function(){
		param.mtpckEndprdMarkcd = mtpckEndprdMarkcd;
		param.etpsInnerInvtNo= etpsInnerInvtNo;
		param.idField="uid";
        param.serverUrl=_server+"/erp/erpPreBondInvtDt/list/add";
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
    console.log(param);
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
    layer.confirm('确认所选信息 ？', {btn: ['确定', '取消']}, function () {
        //调用后台服务
        $.ajax({
            url: param.serverUrl,
            type: 'post',
            data: {"idList": idList,"appId": $("#appId").val(),"mtpckEndprdMarkcd":mtpckEndprdMarkcd,"etpsInnerInvtNo":etpsInnerInvtNo},
            dataType: 'json',
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (result) {
                console.log(result.data);
                if (result.code == 1) {
                   Utils.redirect('../erpPreBondInvtDt/edit.jsp?id='+ result.data.uid+"&mtpckEndprdMarkcd="+ result.data.mtpckEndprdMarkcd);
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

var modelParam={};
modelParam.area = ["900px", "570px"];
function showPage(pageId,title,url){
    //弹出窗口
    modelParam.title=title;
    modelParam.id=pageId;
    //传入单据编号
    if(url.indexOf("?")==-1)
        url+="?seqNo="+seqNo;
    else
        url+="&seqNo="+seqNo;
    modelParam.url=url;
    //Utils.showModel(modelParam);
    Utils.showModalDialog(modelParam);
}

