//服务器地址
var _serverAddress = _server+"/edi/ediSendQueue/list";

//跳转页面
var _jumpPage = baselocation+"/views/edi/ediSendQueue/";
//操作数组
var table = "ediSendQueue";
var tableId = 'ediSendQueueTable';
var ediSendQueue = [
    { title: "",field: "select",radio: true,width: 20,align: "center",valign: "middle"},
    { title: "监管场所",field: "areaCode",align: "center",sortable: true,order: "desc"},
    { title: "单据类型",field: "docType",align: "center",sortable: true },
    { title: "业务类型",field: "bizType",align: "center",sortable: true },
    { title: "单据编号",field: "seqNo",align: "center",sortable: true },
    { title: "处理标识",field: "status",align: "center",sortable: true ,formatter:function(value,row,index){
        if(row.status=="N"){
            status="待处理"
        }else if (row.status=="1"){  status="生成报文异常";}

        return status;
    }},
    { title: "创建时间",field: "createTime",align: "center",sortable: true },
    { title: "修改时间",field: "updateTime",align: "center",sortable: true },
    { title: "备注",field: "remarks",align: "center",sortable: true }
];
var ediSendLog = [
    { title: "",field: "select",radio: true,width: 20,align: "center",valign: "middle"},
    { title: "监管场所",field: "areaCode",align: "center",sortable: true,order: "desc"},
    { title: "单据类型",field: "docType",align: "center",sortable: true },
    { title: "业务类型",field: "bizType",align: "center",sortable: true },
    { title: "单据编号",field: "seqNo",align: "center",sortable: true },
    { title: "处理标识",field: "status",align: "center",sortable: true ,formatter:function(value,row,index){
        if(row.status=="Y"){
            status="生成报文成功"
        }else if (row.status=="N"){  status="生成报文异常";}

        return status;
    }},
    { title: "创建时间",field: "createTime",align: "center",sortable: true },
    { title: "修改时间",field: "updateTime",align: "center",sortable: true },
    { title: "备注",field: "remarks",align: "center",sortable: true }
];

$(function(){
    /**
     * 初始化表格
     */
    var param={};
    param.height = "500px";
    param.columns = ediSendQueue;
    param.gridId = 'ediSendQueueTable';
    param.url = _server + "/edi/ediSendQueue/list";
	DataGridUtils.initGridByUrl(param);
    param.table = "ediSendQueue";
    /**
     * 初始化日期插件
     */
	Utils.initCalendar();
    /**
     * 初始化下拉框
     */
    Utils.setCodesDropDown('IS_VALIDATE');
    /**
     * 条件搜索
     */
    $("#search").click(function () {
        DataGridUtils.refresh(param);
    });
    /**
     * 刷新页面
     */
    $("#refresh").click(function () {
        window.location.reload();
        /*DataGridUtils.refresh(param);*/
    });

    //修改事件
    $("#modify").click(function(){
        var rows = $('#' + tableId).bootstrapTable('getSelections');
        console.log(rows[0].uid)
        param.jumPageUrl = baselocation+"/views/edi/"+param.table + '/edit.jsp?id=' + rows[0].uid;
        DataGridUtils.view(param);
    });
    $('#tab li').click(function () {
        var cls = $(this).attr('class');
        switch (cls)
        {
            case 'queue':
                param.table = "ediSendQueue";
                tableId = 'ediSendQueueTable';

                param.columns = ediSendQueue;
                param.gridId = 'ediSendQueueTable';
                param.url = _server + "/edi/ediSendQueue/list";
                _jumpPage = baselocation+"/views/edi/ediSendQueue/";
                break;
            case 'log':
                param.table = "ediSendLog";
                tableId = 'ediSendLogTable';

                param.columns = ediSendLog;
                param.gridId = 'ediSendLogTable';
                param.url = _server + "/edi/ediSendLog/list";
                _jumpPage = baselocation+"/views/edi/ediSendLog/";
                break;
        }
        DataGridUtils.initGridByUrl(param);
        //必须调用刷新方法，否则条件查询去除后将失效
        DataGridUtils.refresh(param);
    });


       /* // var rows = $('#' + tableId).bootstrapTable('getSelections');
        // console.log(rows[0].uid)
        // param.jumPageUrl = baselocation+"/views/edi/"+param.table + '/edit.jsp?id=' + rows[0].uid;
        param.url = _server + "/edi/ediSendQueue/list/";
        DataGridUtils.modify(param);
    });*/
    /**
    /**
     * 查阅
     */
    $("#find").click(function () {
        var rows = $('#' + tableId).bootstrapTable('getSelections');
    	 console.log(rows[0].uid)
         param.jumPageUrl = baselocation+"/views/edi/"+param.table + '/view.jsp?id=' + rows[0].uid;
         DataGridUtils.view(param);
    });

    /**
     * 重置
     */
    $("#reset").click(function(){
        var rows = $('#' + tableId).bootstrapTable('getSelections');
        var status = rows[0].status ;
     //   console.log(status == 1);
        if(status == 1){
            //询问框
            layer.confirm('请确认重置！', {
                btn: ['确认','取消'] //按钮
            }, function(){
                $.ajax({
                    url : _server + "/edi/ediSendQueue" + "/list/update",
                    dataType : 'json',
                    data : {"uid":rows[0].uid,"status":"N"},
                    xhrFields : {
                        withCredentials : true
                    },
                    crossDomain : true,
                    success : function(result) {
                        layer.msg("重置成功！", {time: 1500});
                        //    window.location.reload();
                        //   history.go(0);
                        DataGridUtils.refresh(param);//刷新页面
                    },
                    error : function(result) {
                        layer.msg("重置失败！", {time: 1500});
                    }
                });
               // parent.location.reload();
            }, function(){

            });

        }else{
            layer.msg("重置失败！", {time: 1500});
        }
    });


    $('#tab li').click(function () {
        var cls = $(this).attr('class');
        switch (cls)
        {
            case 'queue':
                param.table = "ediSendQueue";
                tableId = 'ediSendQueueTable';

                param.columns = ediSendQueue;
                param.gridId = 'ediSendQueueTable';
                param.url = _server + "/edi/ediSendQueue/list";
                _jumpPage = baselocation+"/views/edi/ediSendQueue/";
                $("#reset").show();
                break;
            case 'log':
                param.table = "ediSendLog";
                tableId = 'ediSendLogTable';

                param.columns = ediSendLog;
                param.gridId = 'ediSendLogTable';
                param.url = _server + "/edi/ediSendLog/list";
                _jumpPage = baselocation+"/views/edi/ediSendLog/";

                $("#reset").hide();
                break;
        }
        DataGridUtils.initGridByUrl(param);
        //必须调用刷新方法，否则条件查询去除后将失效
        DataGridUtils.refresh(param);
    });
});

/**
 * 表格行双击事件
 */
function __onDblClickRow(row) {
	Utils.jumpPage(row.uid, "view.jsp");
}

