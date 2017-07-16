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
    //车辆备案参数
    sasVehicleCusParam : {
        //车辆备案标识 0--备案车辆，1--临时车辆
        vehicleRegFlag : '0',
        //有效标识
        validFlag : '0',
        //车牌号
        vehicleNo : '',
        //车辆类型
        vehicleTypecd : '',
        //主管海关
        masterCuscd : '',
    },
    sasVehicleRegParam : {
        //车牌号
        vehicleNo : '',
        //主管海关
        masterCuscd : '',
        //单据状态 = 1-已发送、2-生效
        chkStatus : '1'
    },
    //根据车牌号查询的车辆登记结果集
    sasVehicleRegResult : ''
};

var BaseUtils = {
    /**
     * 参数是否异常
     * 不定入参
     * @returns {boolean} true=参数异常
     */
    isParamError: function () {
        if (arguments.length < 1) {
            return;
        }

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
        if (jsonObj == undefined) {
            return;
        }

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
        $('#rebackModal').click(function () {
            Utils.closeModalDialog();
        });
        //查询
        $('#queryModal').click(function () {
            var vehicleNo = $('#vehicleNo').val();
            if(!vehicleNo){return}
            //赋值车牌号到全局
            businessParam.sasVehicleCusParam.vehicleNo = vehicleNo;
            businessParam.sasVehicleRegParam.vehicleNo = vehicleNo;

            BusinessUtils.getVehicleRegInfo();//获取车辆登记信息

            BusinessUtils.getVehicleInfo();//获取车辆备案信息，并执行下一步检查
        });
        BusinessUtils.getMasterCuscdInfo();//初始化主管海关
    },
    /**
     * 获取主管海关信息
     */
    getMasterCuscdInfo : function () {
        $.ajax({
            url: _loginUserUrl,
            type: 'get',
            dataType: 'json',
            async: true,
            xhrFields: { withCredentials: true },
            crossDomain: true,
            success: function (result) {
                if (result.status == 1) {
                    var loginUser = result.data.loginuser;
                    //赋值主管海关到全局参数
                    businessParam.sasVehicleCusParam.masterCuscd = loginUser.customsCode;
                    businessParam.sasVehicleRegParam.masterCuscd = loginUser.customsCode;
                }
            },
            error: function (response) {
                console.log("获取用户信息失败");
            }
        });
    },
    /**
     * 获取车辆备案信息
     */
    getVehicleInfo : function () {
        $.ajax({
            url: serverParam.sasVehicleCusServerAddress,
            type: 'get',
            data: businessParam.sasVehicleCusParam,
            dataType: 'json',
            xhrFields: { withCredentials: true },
            crossDomain: true,
            success: function (result) {
                if (result.code == 1) {
                    BusinessUtils.doCheck(result.data[0]);
                }
                else {
                    layer.msg('车辆备案信息获取失败,请重试。');
                }
            },
            error: function (result) {
                layer.msg('车辆备案信息获取异常');
            }
        });
    },
    /**
     * 获取车辆登记信息
     */
    getVehicleRegInfo : function(){
        $.ajax({
            url: serverParam.sasVehicleIRegServerAddress,
            type: 'get',
            async : false,
            data: businessParam.sasVehicleRegParam,
            dataType: 'json',
            xhrFields: { withCredentials: true },
            crossDomain: true,
            success: function (result) {
                if (result.code == 1) {
                    businessParam.sasVehicleRegResult = result.data[0];
                }
                else {
                    layer.msg('车辆登记信息获取失败,请重试。');
                }
            },
            error: function (result) {
                layer.msg('车辆登记信息获取异常');
            }
        });
    },
    doCheck : function (data) {
        if(data){
            if(!businessParam.sasVehicleRegResult){
                BusinessUtils.jumpIReg(data);
            }else{
                parent.layer.confirm('是否确认该车牌号的车辆前次运输已经完成，否则将会退单？', {
                    btn: ['是', '否']
                }, function (index) {
                    parent.layer.msg('该功能暂未开放');
                }, function (index) {
                    $('#vehicleNo').val('');
                    parent.layer.msg('请重新输入车牌号');
                    layer.close(index);
                });
            }
        }else{
            parent.layer.confirm('此车牌号，未进行车辆备案与登记，是否进行临时车辆登记?', {
                btn: ['确定', '取消']
            }, function (index) {
                parent.layer.close(index);//关闭当前确定层

                BusinessUtils.jumpTempReg();//跳转到临时车辆登记

                Utils.closeModalDialog();//关闭原查询车牌号层
            }, function (index) {
                layer.close(index);
            });
        }
    },
    /**
     * 跳转车辆登记页
     * @param data
     */
    jumpIReg : function (data) {
        businessParam.sasVehicleCusParam.vehicleNo = data.vehicleNo;//替换输入的车牌号，后台是模糊匹配
        businessParam.sasVehicleCusParam.plateTypecd = data.plateTypecd;//车牌类型
        businessParam.sasVehicleCusParam.vehicleTypecd = data.vehicleTypecd//车辆类型
        businessParam.sasVehicleCusParam.vehicleWt = data.vehicleWt;//车辆自重
        businessParam.sasVehicleCusParam.vehicleIcNo = data.secVehicleIcNo;//FIXME 电子车牌
        //合并基本参数和业务参数
        var newJson = $.extend(baseParam,businessParam.sasVehicleCusParam),
            jumpURL = BaseUtils.doJumpUrl(newJson);

        parent.Utils.showEditDiv(Utils.formatUrl(jumpURL));
        Utils.closeModalDialog();//关闭原查询车牌号层
    },
    /**
     * 跳转车辆临时登记页
     */
    jumpTempReg : function () {
        var area = [],
            width = parent.$(".container").width()+"px",
            newJson = $.extend(baseParam,businessParam.sasVehicleCusParam),
            url = serverParam.jumpPage + 'tempVehicleRegModal.jsp' + BaseUtils.spliceParam(true,newJson);

        area.unshift(width,"480px");
        var modal = {
            area: area,
            title: '临时车辆登记',
            url: url
        };
        parent.Utils.showModalDialog(modal);//弹出临时登记层
    }
};

$(function () {
    BusinessUtils.initialization();
});