//服务器地址
var mtpckEndprdMarkcd =  Utils.search("mtpckEndprdMarkcd");
var docType =  Utils.search("docType");
var iEFlag1 =  Utils.search("iEFlag1");
var seqNo =  Utils.search("seqNo");
var emsNo =  Utils.search("putrecNo");
var btnFlag =  Utils.search("btnFlag");
if(docType=="A0603"){//物流
    param.url=_server+"/ems_bws/emsBwsCusDt/list/selectByBwsNo?bwsNo="+emsNo;
}else if(docType=='A0601' || docType=='A0602'){//加工、加贸
    if(mtpckEndprdMarkcd=="I"){
        param.url=_server+"/ems/emsCusImg/list/selectByEmsNo?emsNo="+emsNo;
    }else{
        param.url=_server+"/ems/emsCusExg/list/selectByEmsNo?emsNo="+emsNo;
    }
}

//操作数组
 columns=[
    { title: "单选",field: "select",radio: true,width: 20,align: "center",valign: "middle"},
    { title: "商品序号",field: "gdsSeqno",align: "center",sortable: true},
/*    { title: "料件成品类型",field: "mtpckEndprdTypename",align: "center",sortable: true },*/
    { title: "商品料号",field: "gdsMtno",align: "center",sortable: true },
    { title: "商品编码",field: "gdecd",align: "center",sortable: true },
    { title: "商品名称",field: "gdsNm",align: "center",sortable: true },
    { title: "商品规格型号描述",field: "endprdGdsSpcfModelDesc",align: "center",sortable: true },
    { title: "申报计量单位",field: "dclUnitnm",align: "center",sortable: true },
    { title: "法定计量单位",field: "lawfUnitnm",align: "center",sortable: true },
    { title: "第二法定计量单位",field: "secdLawfUnitnm",align: "center",sortable: true }
];
//var param={};
param.columns=columns;
param.height=470;
//param.gridId="table";
//param.height=$(window).height() - 310;
//param.searchForm = "searchForm";  // 查询表单Id


$(function(){
    if((docType=='A0603' &&  iEFlag1=='I') || docType=='A0606'){
    }else{
        $("#add-flag").css("display","none");
    }
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
        if(docType=='A0606'){
            parent.refreshGrid("lj");
        }
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
    /*    if(mtpckEndprdMarkcd=="I"){
            param.serverUrl=_server+"/inv/invImg/list/add";
        }else{
            param.serverUrl=_server+"/inv/invExg/list/add";
        }*/
        putrecSave(param);
	});

    $("#add-flag").click(function(){
       // Utils.redirect('../bondInvtImg/edit.jsp?seqNo='+seqNo+'&add_flag=1&docType='+docType+'&iEFlag1='+iEFlag1+'&putrecNo='+emsNo+'&btnFlag='+btnFlag);
        showPage('img','清单商品-新增','../bondInvtImg/edit.jsp?seqNo='+seqNo+'&add_flag=1&docType='+docType+'&iEFlag1='+iEFlag1+'&putrecNo='+emsNo+'&btnFlag='+btnFlag);
    });

    //搜索事件
    $("#search").click(function () {
        //param.url=_server+"/ems/emsCusImg/list/selectByEmsNo?emsNo="+emsNo; //调用加工账册商品接口
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
        return row[param.idField];
    });

    var idList = id.join(",");
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
                   //Utils.redirect('../bondInvtImg/edit.jsp?id='+ result.data.uid+'&mtpckEndprdMarkcd='+result.data.mtpckEndprdMarkcd+'&seqNo='+result.data.seqNo+'&putrecNo='+emsNo+'&iEFlag1='+iEFlag1+'&docType='+docType);
                    showPage('img','清单商品-修改','../bondInvtImg/edit.jsp?id='+ result.data.uid+'&mtpckEndprdMarkcd='+result.data.mtpckEndprdMarkcd+'&seqNo='+result.data.seqNo+'&putrecNo='+emsNo+'&iEFlag1='+iEFlag1+'&docType='+docType);
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
}


function showPage(pageId,title,url){
    var modelParam={};
    var width = parent.$(".container").width()+"px";
    modelParam.area = [];
    modelParam.area.unshift(width,"480px");
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

