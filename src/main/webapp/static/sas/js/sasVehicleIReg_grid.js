var baseParam = {

};

var businessParam = {
    sasVehicleIRegColumns : [
        { title: "单选",field: "select",radio: true,align: "center",width: "30"},
        { title: "车辆入区登记编号",field: "etpsPreentNo",align: "center",sortable: true},
        { title: "车牌号",field: "vehicleNo",align: "center",sortable: true },
        { title: "车辆类型",field: "vehicleTypecd",align: "center",sortable: true},
        { title: "IC卡编号",field: "icNo",align: "center",sortable: true},
        { title: "运输类型",field: "transTypecd",align: "center",sortable: true},
        { title: "入区运输单号",field: "iTransNo",align: "center",sortable: true},
        { title: "出区运输单号",field: "eTransNo",align: "center",sortable: true},
        { title: "单据状态",field: "chkStatus",align: "center",sortable: true},
        { title: "入区登记日期",field: "iRegDate",align: "center",sortable: true,formatter: function (value, row, index){
            var iRegDate = row.iRegDate;
            if (iRegDate != "" && iRegDate != null) {
                iRegDate = iRegDate.split(" ")[0];
            }
            return iRegDate;
        }},
        { title: "本次有效日期",field: "thisValidateDate",align: "center",sortable: true,order: "desc",formatter: function (value, row, index){
            var thisValidateDate = row.thisValidateDate;
            if (thisValidateDate != "" && thisValidateDate != null) {
                thisValidateDate = thisValidateDate.split(" ")[0];
            }
            return thisValidateDate;
        }},
        { title: "主管海关",field: "masterCuscd",align: "center",sortable: true},
        { title: "通关业务类型",field: "clearanceType",align: "center",sortable: true}
    ],

    sasVehicleIRegServerAddress : _server + "/sas/vehicleIReg/list",

    jumpPage : baselocation + "/views/sas/sasVehicleIReg/"
};

var BaseUtils = {
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
     * 参数是否异常
     * @param params {'id' : seqNo}
     * @returns {boolean}
     */
    isParamErrorWithJson : function (params) {
        for (var key in params) {
            if(!params[key]){
                layer.msg("初始化参数异常,请重试。", { time: 1500 });
                return true;
            }
        }
        return false;
    },
    /**
     * 自定义消息参数检测
     * 不定参var param = {'id' : seqNo,'msg': '编号不能为空'}
     * @returns {boolean}true=参数异常
     */
    isParamErrorWithMsg : function () {
        for (var i = 0; i < arguments.length; i++) {
            var $param = arguments[i];
            if(!$param.id){
                layer.msg($param.msg, { time: 1500 });
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
     * 截取时间
     * @param _elements
     * @param time
     */
    initDateTime : function ($elements,time) {
        var $element = $elements.split(',');
        $.each($element,function (i,t) {
            $('#'+ $element[i]).val(time.substring(0, 10));
        });
    },
    /**
     * form表单元素赋值
     * 不定参 {'id':'seqNo','value':123}
     * @param elementType 元素类型
     */
    setFormValue : function (elementType) {
        elementType = elementType || 'input';
        for (var i = 1; i < arguments.length; i++) {
            var $param = arguments[i];
            switch (elementType)
            {
                case 'select':
                    $("#"+$param.id).select2().val($param.value).trigger("change");
                    break;
                case 'textarea':
                    $("#"+$param.id).text($param.value);
                    break;
                default :
                    $("#"+$param.id).val($param.value);
                    break;
            }

        }
    },
    /**
     * 处理页面跳转
     * @returns {string}
     */
    doJumpUrl : function () {
        var rowData = DataGridUtils.getRowDatas();
        if(!rowData){return}

        baseParam.id = rowData.uid;

        return businessParam.jumpPage + 'edit.jsp' + BaseUtils.spliceParam(true,baseParam);
    },
};

var BusinessUtils = {
    initialization : function () {
        param.columns = businessParam.sasVehicleIRegColumns;
        param.url = businessParam.sasVehicleIRegServerAddress;
        DataGridUtils.initGridByUrl(param);
        //搜索表单
        BusinessUtils.searchFormOperate();
        //表格
        BusinessUtils.gridOperate();
    },
    searchFormOperate : function () {
        //搜索
        $('#search').click(function () {
            param.url = businessParam.sasVehicleIRegServerAddress;
            DataGridUtils.refresh(param);
        });
        //清除
        $("#reset").click(function () {
            $('#searchForm input').not('input[type=hidden]').val('');//对type=hidden的input数据保留
            $('#searchForm select').select2().val('').trigger("change");
        });
    },
    gridOperate : function () {
        //刷新
        $("#refresh").click(function () {
            param.url = businessParam.sasVehicleIRegServerAddress;
            DataGridUtils.refresh(param);
        });
        //查阅跳转
        $('#view').click(function () {
            baseParam.optype = 'view';
            param.jumPageUrl = BaseUtils.doJumpUrl();
            DataGridUtils.view(param);
        });
        //新增跳转
        $("#add").click(function () {
            baseParam.optype = 'add';
            var width = $(".container").width()+"px",
                url = businessParam.jumpPage + 'queryVehicleNoModal.jsp' + BaseUtils.spliceParam(true,baseParam),
                area = [];
            area.unshift(width,"200px");
            var modal = {
                area: area,
                title: '车牌号查询',
                url: url
            };
            Utils.showModalDialog(modal);
            /*baseParam.optype = 'add';
            param.jumPageUrl = BaseUtils.doJumpUrl();
            Utils.showEditDiv(Utils.formatUrl(param.jumPageUrl));*/
        });
        //修改跳转
        $("#edit").click(function () {
            baseParam.optype = 'modify';
            param.jumPageUrl = BaseUtils.doJumpUrl();
            DataGridUtils.modify(param);
        });
        //删除
        $('#remove').click(function () {
            param.idField = 'uid';
            param.serverUrl = businessParam.sasVehicleIRegServerAddress + '/deleteByList';
            DataGridUtils.deleteGrid(param);
        });
    },
    initPlugs : function () {
        //日期插件
        Utils.initCalendar();
        //开始时间
        $('#iRegDateStart').datepicker().on('changeDate', function (e) {
            var startTime = e.date;
            $('#iRegDateEnd').datepicker('setStartDate', startTime);
        });
        //结束时间：
        $('#iRegDateEnd').datepicker({}).on('changeDate', function (e) {
            var endTime = e.date;
            $('#iRegDateStart').datepicker('setEndDate', endTime);
        });
        //下拉插件
        Utils.setCodesDropDown("PASSPORT_STUCD");
    }
};

$(function () {
    BusinessUtils.initialization();
    BusinessUtils.initPlugs();
});