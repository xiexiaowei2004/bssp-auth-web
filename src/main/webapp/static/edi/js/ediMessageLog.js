//服务器地址
var _serverAddress = _server+"/edi/ediMessageLog/list";
//跳转页面
var _jumpPage = baselocation+"/views/edi/ediMessageLog/";
//操作数组
var columns=[
    { title: "",field: "select",radio: true,width: 20,align: "center",valign: "middle"},
    { title: "编号",field: "serialNo",align: "center",sortable: true,order: "desc"},
    { title: "监管场所",field: "areaCode",align: "center",sortable: true },
    { title: "单据类型",field: "docType",align: "center",sortable: true },
    { title: "业务类型",field: "bizType",align: "center",sortable: true },
    { title: "状态",field: "status",align: "center",sortable: true },
    { title: "处理时间",field: "processingTime",align: "center",sortable: true },
    /*{ title: "处理原因",field: "processingLog",align: "center",sortable: true },*/
    { title: "报文名称",field: "fileName",align: "center",sortable: true }
//    ,{ title: '操作',field: 'id',align: 'center',formatter:function(value,row,index){
//        var l = '<a href="#" mce_href="#" onclick="Utils.jumpPage(\'' + row.uid + '\',\'view.jsp\')" title="查阅"><i class="glyphicon glyphicon-search"></i></a> ';
//        return l;
//    	}
//    }
];
var param={};
param.columns = columns;
param.url = _serverAddress;

$(function(){
    /**
     * 初始化表格
     */
	DataGridUtils.initGridByUrl(param);
    /**
     * 初始化日期插件
     */
	Utils.initCalendar();
    /**
     * 初始化下拉框
     */
   /* Utils.setCodesDropDown('IS_VALIDATE');*/
    /**
     * 条件搜索
     */
    $("#search").click(function () {
        DataGridUtils.refresh(param);
    });
    /**
     * 刷新
     */
     $("#refreshBtn").click(function () {
        DataGridUtils.refresh(param);
    });
    /**
     * 查阅
     */
    $("#find").click(function () {
        var rowData = DataGridUtils.getRowDatas();//获取当前行数据
        param.jumPageUrl = _jumpPage + 'view.jsp?id=' + rowData.uid;
        DataGridUtils.view(param);
    });
    
    
    /**
     * 报文详情
     */
    $("#query").click(function(){
    	var messageUid=$("#messageUid").val();
    	if(messageUid==null || messageUid==''){
            layer.msg("messageUid值为空", {time: 1500});
            return;
    	}
        $.ajax({
    		url : _server + "/edi/ediMessageData/list/view",
    		dataType : 'json',
    		data : {"uid":messageUid},
    		xhrFields : {
    			withCredentials : true
    		},
    		crossDomain : true,
    		success : function(result) {
    			$("#bigData").val(result.data.bigDataStr);
    			$('#myModal').modal('show');
    		},
    		error : function(result) {

    		}
    	});
    });
});
/**
 * 表格行双击事件
 */
function __onDblClickRow(row) {
    /*var rowData = getRowData();//获取当前行数据
    param.jumPageUrl = _jumpPage + 'view.jsp?seqNo=' + rowData.seqNo;
    DataGridUtils.view(param);*/
    Utils.jumpPage(row.uid, "view.jsp")
}
