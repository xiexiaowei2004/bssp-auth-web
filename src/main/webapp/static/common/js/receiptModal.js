$(function () {
    var index = parent.layer.getFrameIndex(window.name); //获取窗口索引

    var _serverAddress = _server+"/edi/ediMessageLog/list";//服务器地址

    /**
     * 报文处理日志表格属性
     * @type {[*]}
     */
    var messageLogColumns = [
        { title: "",field: "select",radio: true,width: 20,align: "center",valign: "middle"},
        { title: "编号",field: "serialNo",align: "center",sortable: true,order: "desc"},
        { title: "监管场所",field: "areaCode",align: "left",sortable: true },
        { title: "单据类型",field: "docType",align: "center",sortable: true },
        { title: "业务类型",field: "bizType",align: "center",sortable: true },
        { title: "报文名称",field: "fileName",align: "left",sortable: true },
        { title: "处理时间",field: "processingTime",align: "center",sortable: true },
        { title: "处理原因",field: "processingLog",align: "left",sortable: true },
        { title: "状态",field: "status",align: "center",sortable: true }
    ];

    /**
     * 获取请求参数，并执行初始化查询
     */
    initRequest();
    /**
     * 退出模态框
     */
    $('#modalReback').click(function () {
        parent.layer.close(index);
    });

    function initRequest() {
        var serialNo = parent.modalParam.serialNo;
        var docType = parent.modalParam.docType;
        $('#searchForm input[name=serialNo]').val(serialNo);
        $('#searchForm input[name=docType]').val(docType);

        var param={};
        param.columns = messageLogColumns;
        param.url = _serverAddress;

        DataGridUtils.initGridByUrl(param);
    }
});
