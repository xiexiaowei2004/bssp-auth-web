    var _serverAddress = _server+"/edi/ediMessageLog/list";//服务器地址

    /**
     * 报文处理日志表格属性
     * @type {[*]}
     */
    var messageLogColumns = [
        { title: "",field: "select",radio: true,width: 20,align: "center",valign: "middle"},
        { title: "编号",field: "serialNo",align: "center",sortable: true,order: "desc"},
        { title: "监管场所",field: "areaCode",align: "center",sortable: true },
        { title: "单据类型",field: "docType",align: "center",sortable: true },
        { title: "业务类型",field: "bizType",align: "center",sortable: true },
        { title: "状态",field: "status",align: "center",sortable: true },
        { title: "处理时间",field: "processingTime",align: "center",sortable: true },
        /*{ title: "处理原因",field: "processingLog",align: "center",sortable: true },*/
        { title: "报文名称",field: "fileName",align: "center",sortable: true }
    ];


    $(function () {
        /**
         * 返回
         */
        $('#shut').click(function () {
            Utils.closeModalDialog();
        });
        /**
         * 报文详情，弹出模态框
         */
        $('#view').click(function () {
        	var rowData = DataGridUtils.getRowDatas();//获取当前行数据
        	$.ajax({
        		url : _server + "/edi/ediMessageData" + "/list/view",
        		dataType : 'json',
        		data : {"uid":rowData.messageUid},
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

        /**
         * 获取请求参数，并执行初始化查询
         */
        initRequest();
        
        
        /**
         * 查阅
         */
        $("#find").click(function () {
            var rowData = DataGridUtils.getRowDatas();//获取当前行数据
            modalParam.area=["700px", "400px"];
            modalParam.title = "查阅";
            modalParam.url = baselocation + '/views/common/receipt/view.jsp?id=' + rowData.uid;
            Utils.showModalDialog(modalParam);
        });
        
        /**
         * 返回按钮
         */
        $('#back').click(function () {
            Utils.closeModalDialog();
        });
       
    });
    
    
    /**
     * 表格行双击事件
     */
    function __onDblClickRow(row) {
        var rowData = DataGridUtils.getRowDatas();//获取当前行数据
        modalParam.area=["700px", "400px"];
        modalParam.title = "查阅";
        modalParam.url = baselocation + '/views/common/receipt/view.jsp?id=' + rowData.uid;
        Utils.showModalDialog(modalParam);
    }

    
    /**
     * 初始化请求页面
     */
    function initRequest() {
        var serialNo = Utils.getRequestParam('serialNo');
        $('#searchForm input[name=serialNo]').val(serialNo);

        var param={};
        param.columns = messageLogColumns;
        param.url = _serverAddress;
        param.height = 400 ;


        DataGridUtils.initGridByUrl(param);
    }
    

