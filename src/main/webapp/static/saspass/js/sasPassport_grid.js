/**
 * 核放单列表js
 * author 宋轲
 */
$(function () {
    initialization();
});

function initialization() {
    var ioTypecd = Utils.search("ioTypecd"),
        passportTypecd = Utils.search("passportTypecd"),
        docType = Utils.search('docType');

    if(BaseUtil.isParamError(ioTypecd,passportTypecd,docType)) { return; }

    baseParam = { //去掉var，转为全局
        ioTypecd : ioTypecd,
        passportTypecd : passportTypecd,
        docType : docType,
        tabs : 'applyTab'
    }
    param.columns = GlobalParam.sasPassportBscColumns;
    param.url = GlobalParam.bscServerAddress + BaseUtil.spliceParam(true,baseParam);
    DataGridUtils.initGridByUrl(param);

    operateHandle(baseParam);
    BaseUtil.initPlugs();
}

function operateHandle(baseParam) {
    //页签切换
    $('#tab li').click(function () {
        GlobalParam.tabsCode = $(this).attr('id');//赋值给全局页签ID存储
        BaseUtil.doTabs(baseParam);
        DataGridUtils.refresh(param);
    });
    //搜索
    $("#search").click(function(){
        BaseUtil.doTabs(baseParam);
        DataGridUtils.refresh(param);
    });
    //清除搜索条件./避免reset清除隐藏域数据
    $("#reset").click(function () {
        $('#searchForm input').not('input[type=hidden]').val('');//对type=hidden的input数据保留
        $('#searchForm select').select2().val('').trigger("change");
    });
    //刷新
    $("#refresh").click(function () {
        //此处如果使用refresh方法，按条件查询将继续带入查询中
        BaseUtil.doTabs(baseParam);
        DataGridUtils.refresh(param);
        /*window.location.reload();*/
    });
    //查阅跳转
    $('#view').click(function () {
        baseParam.optype = 'view';
        param.jumPageUrl = BaseUtil.doJumpUrl(baseParam);
        DataGridUtils.view(param);
    });
    //修改跳转
    $("#edit").click(function () {
        baseParam.optype = 'modify';
        param.jumPageUrl = BaseUtil.doJumpUrl(baseParam);
        DataGridUtils.modify(param);
    });
    //查看回执
    $("#receipt").click(function () {
        var rowData = DataGridUtils.getRowDatas();//获取当前行数据
        DataGridUtils.viewMessageLog(rowData.seqNo);
    });
    //删除
    $('#remove').click(function () {
        param.idField = 'seqNo';
        param.serverUrl = BaseUtil.doServerUrl() + '/deleteByList';
        DataGridUtils.deleteGrid(param);
    });
    //新增跳转
    $("#add").click(function () {
        baseParam.id = '';//置空ID
        var passportTypecd = baseParam.passportTypecd,
            isSimple = (baseParam.docType == 'A0503.02'),//简单加工
            isOutward = (baseParam.docType == 'A0503.03'),//外发加工
            isTemporary = (baseParam.docType == 'A0503.04'),//临时业务
            isTransport = (baseParam.docType == 'A0503');//运输单据

        //直接跳转新增页面
        if(passportTypecd == '4' || passportTypecd == '5' || isSimple || isOutward || isTemporary){//4=非报关,5=卡口
            baseParam.tabs = GlobalParam.tabsCode;
            baseParam.optype = 'add';
            Utils.showEditDiv(Utils.formatUrl(GlobalParam.jumpPage + 'edit.jsp' + BaseUtil.spliceParam(true,baseParam)));
            /*window.location.href = GlobalParam.jumpPage + 'edit.jsp' + BaseUtil.spliceParam(true,baseParam);*/
        //弹出核放单选择窗口后再跳转新增页面
        }else if((passportTypecd == '2' || passportTypecd == '3') && isTransport){//2=一线报关,3=二线报关
            var width = $(".container").width()+"px", area = [];
            area.unshift(width,"200px");
            var modal = {
                area: area,
                title: '核放单类型选择',
                url: GlobalParam.jumpPage + 'selectTypeModal.jsp' + BaseUtil.spliceParam(true,baseParam) + BaseUtil.spliceParam(false,{'optype':'add'})
            };
            Utils.showModalDialog(modal);
        }
    });
}
/*****************************************************
 *                     回调部分                      *
 *****************************************************/
/**
 * 双击表格
 * @param row
 * @private
 */
function __onDblClickRow(row) {
    param.jumPageUrl = BaseUtil.doJumpUrl(baseParam);
    DataGridUtils.view(param);
}

/*****************************************************
 *                     基本工具                       *
 *****************************************************/
var BaseUtil = {
    /**
     * 参数是否异常
     * 不定入参
     * @returns {boolean} true=参数异常
     */
    isParamError : function () {
        if (arguments.length < 1) { return; }

        for (var i = 0; i < arguments.length; i++) {
            if (!arguments[i])
            {
                layer.msg("初始化参数异常,请重试。", { time: 1500 });
                return true;
            }
        }
        return false;
    },
    /**
     * 拼接参数
     * @param isFirst true./第一个参数
     * @param jsonObj json对象 例{'name':'张三','age':'24'}
     * @returns {string}
     */
    spliceParam : function (isFirst,jsonObj) {
        if(jsonObj == undefined){ return; }

        var url = isFirst ? '?' : '&';
        for(var key in jsonObj){
            url += key + '=' + jsonObj[key] + '&';
        }
        return url.substr(0,url.length-1);
    },
    /**
     * 处理当前页签ID
     * @param baseParam
     */
    doTabs : function (baseParam) {
        switch (GlobalParam.tabsCode)
        {
            case "cusTab"://审批(正式)数据
                $('#crudBtn').hide();
                param.url = GlobalParam.cusBscServerAddress + BaseUtil.spliceParam(true,baseParam);
                break;
            case "hisTab"://申报历史记录
                $('#crudBtn').hide();
                param.url = GlobalParam.hisBscServerAddress + BaseUtil.spliceParam(true,baseParam);
                break;
            default: //预录入申报
                $('#crudBtn').show();
                param.url = GlobalParam.bscServerAddress + BaseUtil.spliceParam(true,baseParam);
                break;
        }
    },
    /**
     * 处理跳转页面url
     * @param baseParam
     * @returns {string}
     */
    doJumpUrl : function (baseParam) {
        var rowData = DataGridUtils.getRowDatas();
        if(!rowData){return}

        baseParam.tabs = GlobalParam.tabsCode;

        baseParam.id = rowData.uid;

        return GlobalParam.jumpPage + 'edit.jsp' + BaseUtil.spliceParam(true,baseParam);
    },
    /**
     * 处理基本服务url
     * @returns {string|*}
     */
    doServerUrl : function () {
        var currentServerUrl = GlobalParam.bscServerAddress;

        switch (GlobalParam.tabsCode)
        {
            case "cusTab"://审批(正式)数据
                currentServerUrl = GlobalParam.cusBscServerAddress;
                break;
            case "hisTab"://申报历史记录
                currentServerUrl = GlobalParam.hisBscServerAddress;
                break;
            default: //预录入申报
                currentServerUrl = GlobalParam.bscServerAddress;
                break;
        }
        return currentServerUrl;
    },
    initPlugs : function () {
        //日期插件
        Utils.initCalendar();
        //开始时间
        $('#finishValidateDateStart').datepicker().on('changeDate', function (e) {
            var startTime = e.date;
            $('#finishValidateDateEnd').datepicker('setStartDate', startTime);
        });
        //结束时间：
        $('#finishValidateDateEnd').datepicker({}).on('changeDate', function (e) {
            var endTime = e.date;
            $('#finishValidateDateStart').datepicker('setEndDate', endTime);
        });
        //下拉插件
        Utils.setCodesDropDown("CHK_STATUS,STOCK_TYPECD,BIND_TYPECD,PASSPORT_TYPECD,DCL_TYPECD_STOCK");
    }
}

/*****************************************************
 *                     基本参数                       *
 *****************************************************/
var GlobalParam = {
    //页签ID
    tabsCode : 'applyTab',
    //预录入服务地址
    bscServerAddress : _server + "/saspass/sasPassportBsc/list",
    //审核服务地址
    cusBscServerAddress : _server + "/saspass/sasPassportCusBsc/list",
    //历史服务地址
    hisBscServerAddress : _server + "/saspass/sasPassportHisBsc/list",
    //跳转页面
    jumpPage : baselocation + "/views/saspass/sasPassportBsc/",
    //核放单表格属性
    sasPassportBscColumns : [
        { title: "单选",field: "select",radio: true,align: "center",width: "30"},
        { title: "核放单编号",field: "passportNo",align: "center",sortable: true},
        { title: "企业预录入编号",field: "etpsPreentNo",align: "center",sortable: true },
        { title: "绑定类型",field: "bindTypecdName",align: "center",sortable: true},
        { title: "进出标志",field: "ioTypecdName",align: "center",sortable: true},
        { title: "车牌号",field: "vehicleNo",align: "center",sortable: true},
        { title: "IC卡号",field: "vehicleIcNo",align: "center",sortable: true},
        { title: "车架号",field: "vehicleFrameNo",align: "center",sortable: true},
        { title: "申报类型",field: "dclTypecdName",align: "center",sortable: true},
        { title: "单据状态",field: "chkStatusName",align: "center",sortable: true},
        { title: "回执状态",field: "retChannel",align: "center",sortable: true},
        { title: "操作时间",field: "decTime",align: "left",sortable: true,order: "desc"},
        { title: "主管海关",field: "masterCuscd",align: "center",sortable: true},
        { title: "监管场所",field: "areaCodeName",align: "center",sortable: true}
    ]
}