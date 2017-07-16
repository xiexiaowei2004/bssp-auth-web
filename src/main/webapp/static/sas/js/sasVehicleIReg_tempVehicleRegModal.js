var baseParam = {
    optype: Utils.search("optype")
};

var serverParam = {
    //车辆入区登记服务地址
    sasVehicleIRegServerAddress: _server + "/sas/vehicleIReg/list",
    //车辆备案服务地址
    sasVehicleCusServerAddress : _server + "/sas/sasVehicleCus/list",

    jumpPage: baselocation + "/views/sas/sasVehicleIReg/"
};

var businessParam = {
    vehicleNo : Utils.search('vehicleNo')

};
var BaseUtils = {
    /**
     * 参数是否异常
     * 不定入参
     * @returns {boolean} true=参数异常
     */
    isParamError: function () {
        if (arguments.length < 1) { return; }

        for (var i = 0; i < arguments.length; i++) {
            if (!arguments[i]) {
                layer.msg("初始化参数异常,请重试。", {time: 1500});
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
    isParamErrorWithJson: function (params) {
        for (var key in params) {
            if (!params[key]) {
                layer.msg("初始化参数异常,请重试。", {time: 1500});
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
    isParamErrorWithMsg: function () {
        for (var i = 0; i < arguments.length; i++) {
            var $param = arguments[i];
            if (!$param.id) {
                layer.msg($param.msg, {time: 1500});
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
    spliceParam: function (isFirst, jsonObj) {
        if (jsonObj == undefined) { return; }

        var url = isFirst ? '?' : '&';
        for (var key in jsonObj) {
            url += key + '=' + jsonObj[key] + '&';
        }
        return url.substr(0, url.length - 1);
    },
    /**
     * 截取时间
     * @param _elements
     * @param time
     */
    initDateTime: function ($elements, time) {
        var $element = $elements.split(',');
        $.each($element, function (i, t) {
            $('#' + $element[i]).val(time.substring(0, 10));
        });
    },
    /**
     * form表单元素赋值
     * 不定参 {'id':'seqNo','value':123}
     * @param elementType 元素类型
     */
    setFormValue: function (elementType) {
        elementType = elementType || 'input';
        for (var i = 1; i < arguments.length; i++) {
            var $param = arguments[i];
            switch (elementType) {
                case 'select':
                    $("#" + $param.id).select2().val($param.value).trigger("change");
                    break;
                case 'textarea':
                    $("#" + $param.id).text($param.value);
                    break;
                default :
                    $("#" + $param.id).val($param.value);
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
    initialization: function () {
        //取消
        $('#tempReback').click(function () {
            Utils.closeModalDialog();
        });
        //保存
        $('#tempSave').click(function () {
            Validator.setValidateParam("tempRegForm");
            if(!Validator.validate("tempRegForm")) return;

            layer.msg('功能暂未开放');
        });
        BusinessUtils.setForm();
    },
    setForm : function () {
          BaseUtils.setFormValue('input',{'id':'vehicleNo','value':businessParam.vehicleNo});
    },
    //插件初始化
    initPlugs : function () {
        //日期插件
        Utils.initCalendar();
        //下拉插件
        /**
         * PLATE_TYPE = 车牌类型
         * VEHICLE_TYPECD = 车辆类型
         */
        Utils.setDropDown("PLATE_TYPE,VEHICLE_TYPECD");
        //初始化用户信息
        Utils.getLoginUserInfo();
    }
};
/*****************************************************
 *                     回调函数                       *
 *****************************************************/
//获取用户信息回调
function __onAfterGetLoginUserInfo(loginUser) {
    if(!loginUser.copEnt){return}//用户企业信息不存在则不执行

    BaseUtils.setFormValue('input',{'id':'updateTime','value':loginUser.decTime});
    var billURL = 'applyId=001&areaCode='+loginUser.copEnt.areaCode+'&docType=A0504CopNO&serverType=C';
    Utils.getBillCode(billURL, 'etpsPreentNo', '车辆入区登记编号获取失败');
}

$(function () {
    BusinessUtils.initialization();
    BusinessUtils.initPlugs();
});