var baseParam = {
    optype : Utils.search("optype")
};

var serverParam = {
    //车辆入区登记服务地址
    sasVehicleIRegServerAddress : _server + "/sas/vehicleIReg/list",
    //正式表核放单服务地址
    sasPassportCusBscServerAddress : _server + "/saspass/sasPassportCusBsc/list",

    codCusCustomsrelServerAddress : _server + "/cod_cus/codCusCustomsrel/list",

    jumpPage : baselocation + "/views/sas/sasVehicleIReg/"
}

var iRegParam = {
    id : Utils.search('id'),
    masterCuscd : Utils.search('masterCuscd'),//主管海关
    vehicleNo : Utils.search('vehicleNo'),//车牌号
    plateTypecd : Utils.search('plateTypecd'),//车牌类型
    vehicleTypecd : Utils.search('vehicleTypecd'),//车辆类型
    vehicleWt : Utils.search('vehicleWt'),//车辆自重
    vehicleIcNo : Utils.search('vehicleIcNo'),//电子车牌
    vehicleRegFlag : Utils.search('vehicleRegFlag'),//车辆备案标识
    clearanceType : 'A',//通关业务类型

    masterCuscd_cn : '',//主管海关中文名
    vehicleRegFlag_cn : '备案车辆',//车辆备案标识中文
    clearanceType_cn : '保税业务',//通关业务类型中文
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
    doJumpUrl : function (jsonParam) {
        return serverParam.jumpPage + 'edit.jsp' + BaseUtils.spliceParam(true,jsonParam);
    }
};

var BusinessUtils = {
    initialization : function () {
        BusinessUtils.commonInitialization();

        if(BaseUtils.isParamErrorWithJson(baseParam)){BusinessUtils.setView();return}

        switch (baseParam.optype)
        {
            case 'add':
                BusinessUtils.addInitialization();
                break;
            case 'modify':
                BusinessUtils.editInitialization();
                break;
            default:
                BusinessUtils.viewInitialization();
                break;
        }
    },
    //新增初始化
    addInitialization : function () {
        //获取主管海关中文
        BusinessUtils.getMasterCuscdCN();

        delete iRegParam.id;//新增初始化移除id属性
        if(iRegParam.vehicleRegFlag == '1'){ iRegParam.vehicleRegFlag_cn = '临时车辆'; }

        BaseUtils.setFormValue('input',
            {'id':'vehicleWt','value':iRegParam.vehicleWt},
            {'id':'vehicleIcNo','value':iRegParam.vehicleIcNo},
            {'id':'vehicleNo','value':iRegParam.vehicleNo},
            {'id':'vehicleRegFlag','value':iRegParam.vehicleRegFlag},
            {'id':'vehicleRegFlagCN','value':iRegParam.vehicleRegFlag_cn},
            {'id':'clearanceType','value':iRegParam.clearanceType},
            {'id':'clearanceTypeCN','value':iRegParam.clearanceType_cn},
            {'id':'masterCuscd','value':iRegParam.masterCuscd},
            {'id':'masterCuscdCN','value':iRegParam.masterCuscd_cn});
        //新增保存
        $('#save').click(function () {
            Validator.setValidateParam("iRegForm");
            if(!Validator.validate("iRegForm")) return;
            BusinessUtils.setBeforeSave();//解禁
            _serverAddress = serverParam.sasVehicleIRegServerAddress;
            FormUtils.save('iRegForm', '/add', true);
        });

        Utils.getLoginUserInfo();//初始化用户信息
    },
    //修改初始化
    editInitialization : function () {
        if(BaseUtils.isParamError(iRegParam.id)){return}
        //修改保存
        $('#save').click(function () {
            Validator.setValidateParam("iRegForm");
            if(!Validator.validate("iRegForm")) return;
            layer.msg('功能暂未开放');
        });
    },
    //查阅初始化
    viewInitialization :function () {
        BusinessUtils.setView();
        if(BaseUtils.isParamError(iRegParam.id)){return}
    },
    //公共初始化
    commonInitialization : function () {
        //返回
        $('#reback').click(function () {
            var parentURL = serverParam.sasVehicleIRegServerAddress + BaseUtils.spliceParam(true,baseParam);
            parent.$("#table").bootstrapTable('refresh', {url: parentURL, method: "get"});
            parent.Utils.hideEditDiv();
        });
    },
    //表单赋值
    setForm : function () {
        if(baseParam.optype == 'add'){
            BaseUtils.setFormValue('select',
                {'id':'vehicleTypecd','value':iRegParam.vehicleTypecd},//车辆类型
                {'id':'plateTypecd','value':iRegParam.plateTypecd}//车牌类型
            );
            return;
        }//新增不执行数据表单赋值
        _serverAddress = serverParam.sasVehicleIRegServerAddress;
        FormUtils.getData();
    },
    /**
     * 保存前设置
     */
    setBeforeSave : function () {
        $('#plateTypecd').removeAttr('disabled');//移除车牌类型禁用
    },
    //查阅设置
    setView : function () {
        FormUtils.setPageView();//禁用表单
        $('#save').remove();
    },
    /**
     * 获取主管海关中文名
     */
    getMasterCuscdCN : function () {
        var url = serverParam.codCusCustomsrelServerAddress + "/" + iRegParam.masterCuscd + "/view";
        $.ajax({
            url: url,
            async: false,
            type: 'get',
            dataType: 'json',
            xhrFields: { withCredentials: true },
            crossDomain: true,
            success: function (result) {
                if (result.code == 1) {
                    iRegParam.masterCuscd_cn = result.data.customsName;
                }else {
                    layer.msg('主管海关信息获取失败,请重试。');
                }
            },
            error: function (result) {
                layer.msg('主管海关信息获取异常');
            }
        });
    },
    //插件初始化
    initPlugs : function () {
        //日期插件
        Utils.initCalendar();
        //下拉插件
        /**
         * PLATE_TYPE = 车牌类型
         * VEHICLE_TYPECD = 车辆类型
         * IC_TYPE = IC卡类型
         */
        Utils.setDropDown("PLATE_TYPE,VEHICLE_TYPECD,IC_TYPE");
    }
};

/*****************************************************
 *                     回调函数                       *
 *****************************************************/
//下拉回调
function __onAfterInitDropDown() {
    BusinessUtils.setForm();//表单赋值
}
//获取用户信息回调
function __onAfterGetLoginUserInfo(loginUser) {
    if(!loginUser.copEnt){return}//用户企业信息不存在则不执行

    BaseUtils.initDateTime('iRegDate',loginUser.decTime);

    BaseUtils.setFormValue('input',
        {'id':'updateTime','value':loginUser.decTime},
        {'id':'iAreaCode','value':loginUser.copEnt.areaCode},
        {'id':'eAreaCode','value':loginUser.copEnt.areaCode},
        {'id':'eAreainEtpsnm','value':loginUser.inputCopName},
        {'id':'iAreainEtpsnm','value':loginUser.inputCopName},
        {'id':'iAreainEtpsno','value':loginUser.inputCopNo},
        {'id':'eAreainEtpsno','value':loginUser.inputCopNo});
    var billURL = 'applyId=001&areaCode='+loginUser.copEnt.areaCode+'&docType=A0504CopNO&serverType=C';
    Utils.getBillCode(billURL, 'etpsPreentNo', '车辆入区登记编号获取失败');
}
//保存回调
function __onAfterSave(data) {
    var jsonParma = {
        optype : 'modify',
        id : data.uid
    }
    BaseUtils.doJumpUrl(jsonParma);
}

/*****************************************************
 *                     入口函数                       *
 *****************************************************/
$(function () {
    BusinessUtils.initialization();//初始化入口
    BusinessUtils.initPlugs();//插件初始化
});