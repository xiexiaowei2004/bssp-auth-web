//服务器地址
var _serverAddress = _server + "/edi/ediRecvData/list";
//跳转页面
var _jumpPage = baselocation + "/views/edi/ediRecvData/";

    /**
     * 入库回执表格属性
     * @type {[*]}
     */
    var columns = [
        { title: "",field: "select",radio: true,width: 20,align: "center",valign: "middle"},
        { title: "业务单据编号",field: "docId",align: "center",sortable: true,order: "desc"},
        { title: "监管场所",field: "areaCode",align: "center",sortable: true },
        { title: "单据类型",field: "docType",align: "center",sortable: true },
        { title: "业务类型",field: "bizType",align: "center",sortable: true },
        { title: "单据编号",field: "seqNo",align: "center",sortable: true },
       /* { title: "单据状态",field: "chkStatus",align: "center",sortable: true },*/
        { title: "处理标识",field: "status",align: "center",sortable: true },
      /*  { title: "源数据编号",field: "messageUid",align: "center",sortable: true },*/
        { title: "包唯一标识",field: "pocketId",align: "center",sortable: true },
        { title: "包总数",field: "totalPocketQty",align: "center",sortable: true },
        { title: "当前包序号",field: "curPocketNo",align: "center",sortable: true },
        { title: "录入时间",field: "inputerTime",align: "center",sortable: true }
       /* { title: "备注",field: "rmk",align: "center",sortable: true }*/
    ];
    /**
     * 审核回执表格属性
     * @type {[*]}
     */



    var param={};
    param.columns = columns;
    param.url = _serverAddress;

    $(function() {
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
         * 刷新页面
         */
        $("#refresh").click(function () {
            window.location.reload();
            /*DataGridUtils.refresh(param);*/
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
         * 报文详情，弹出模态框
         */
        $('#query').click(function () {
            var messageUid =$("#messageUid").val();
            $.ajax({
                url : _server + "/edi/ediMessageData" + "/list/view",
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

function __onDblClickRow() {
    var rowData = DataGridUtils.getRowDatas();//获取当前行数据
    param.jumPageUrl = _jumpPage + 'view.jsp?id=' + rowData.uid;
    DataGridUtils.view(param);
}