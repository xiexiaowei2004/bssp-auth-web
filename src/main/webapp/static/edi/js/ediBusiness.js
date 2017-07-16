$(function () {
    /**
     * 入库回执表格属性
     * @type {[*]}
     */
    var storageColumn = [
        { title: "报文类型",field: "messagType",align: "center",sortable: true,order: "desc"},
        { title: "报文名称",field: "messegeName",align: "center",sortable: true },
        { title: "回执类型",field: "resultType",align: "center",sortable: true },
        { title: "企业预录入编号",field: "etpsPreentNo",align: "center",sortable: true },
        { title: "原始报文编号",field: "pocketId",align: "center",sortable: true },
        { title: "总包数",field: "totalPocketQty",align: "center",sortable: true },
        { title: "当前包序号",field: "curPocketNo",align: "center",sortable: true },
        { title: "业务编号",field: "businessId",align: "center",sortable: true },
        { title: "处理结果",field: "manageResult",align: "center",sortable: true },
        { title: "入库时间",field: "manageDate",align: "center",sortable: true },
        { title: "保存日期",field: "storageTime",align: "center",sortable: true },
        { title: "备注",field: "rmk",align: "center",sortable: true }
    ];
    /**
     * 审核回执表格属性
     * @type {[*]}
     */
    var auditColumn = [
        { title: "报文类型",field: "messagType",align: "center",sortable: true,order: "desc"},
        { title: "报文名称",field: "messegeName",align: "center",sortable: true },
        { title: "企业预录入编号",field: "etpsPreentNo",align: "center",sortable: true },
        { title: "业务编号",field: "businessId",align: "center",sortable: true },
        { title: "变更/报核次数",field: "tmsCnt",align: "center",sortable: true },
        { title: "业务类型",field: "typecd",align: "center",sortable: true },
        { title: "处理结果",field: "manageResult",align: "center",sortable: true },
        { title: "处理日期",field: "manageDate",align: "center",sortable: true },
        { title: "保存日期",field: "storageTime",align: "center",sortable: true },
        { title: "备注",field: "rmk",align: "center",sortable: true }
    ];
    /**
     * 检查信息表格属性
     * @type {[*]}
     */
    var checkColumn = [
        { title: "企业预录入编号",field: "etpsPreentNo",align: "center",sortable: true,order: "desc"},
        { title: "业务编号",field: "businessId",align: "center",sortable: true },
        { title: "保存日期",field: "storageTime",align: "center",sortable: true },
        { title: "检查信息",field: "note",align: "center",sortable: true }
    ];
    var param={};
    param.columns = storageColumn;
    param.gridId = 'storageTable';
    param.url = _server + "/edi/storageReceipt/list";
    //默认初始化入库回执
    DataGridUtils.initGridByUrl(param);

    /**
     * 页签切换
     */
    $('#tab li').click(function () {
        var cls = $(this).attr('class');
        switch (cls)
        {
            case 'audit':
                param.columns = auditColumn;
                param.gridId = 'auditTable';
                param.url = _server + "/edi/auditReceipt/list";
                break;
            case 'check':
                param.columns = checkColumn;
                param.gridId = 'checkTable';
                param.url = _server + "/edi/checkReceipt/list";
                break;
            default:
                param.columns = storageColumn;
                param.gridId = 'storageTable';
                param.url = _server + "/edi/storageReceipt/list";
                break;
        }
        DataGridUtils.initGridByUrl(param);
        //必须调用刷新方法，否则条件查询去除后将失效
        DataGridUtils.refresh(param);
    });

    /**
     * 条件查询
     */
    $('#search').click(function () {
        DataGridUtils.refresh(param);
    });
});