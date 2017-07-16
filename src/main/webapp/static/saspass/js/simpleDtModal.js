/**
 * 核放单货物部分js
 * 包含新增，修改，查阅功能
 * author 宋轲
 */
function initialization() {
    BusinessUtils.commonInit();

    if (BaseUtils.isParamErrorWithLoad(baseParams)){ return };//参数检测

    BusinessUtils.doServerUrl();//根据tabs动态处理服务地址，由Urls中获取动态的服务地址

    BusinessUtils.simpleInit();
}

/*****************************************************
 *                     回调函数                       *
 *****************************************************/

/*****************************************************
 *                     基础工具类和基础参数            *
 *****************************************************/
/**
 * 基础url
 * @type {{bscServerAddress: string, cusBscServerAddress: string, hisBscServerAddress: string, rltServerAddress: string, cusRltServerAddress: string, hisRltServerAddress: string, dtServerAddress: string, cusDtServerAddress: string, hisDtServerAddress: string, jumpPage: string}}
 */
var baseUrls = {
    //预录入核放单服务地址
    bscServerAddress : _server + "/saspass/sasPassportBsc/list",
    //审核核放单服务地址
    cusBscServerAddress : _server + "/saspass/sasPassportCusBsc/list",
    //历史核放单服务地址
    hisBscServerAddress : _server + "/saspass/sasPassportHisBsc/list",

    //预录入关联单服务地址
    rltServerAddress : _server + "/saspass/sasPassportRlt/list",
    //审核关联单服务地址
    cusRltServerAddress : _server + "/saspass/sasPassportCusRlt/list",
    //历史关联单服务地址
    hisRltServerAddress : _server + "/saspass/sasPassportHisRlt/list",

    //预录入货物单服务地址
    dtServerAddress : _server + "/saspass/sasPassportDt/list",
    //审核货物单服务地址
    cusDtServerAddress : _server + "/saspass/sasPassportCusDt/list",
    //历史货物单服务地址
    hisDtServerAddress : _server + "/saspass/sasPassportHisDt/list",

    jumpPage : baselocation + "/views/saspass/sasPassportBsc/"
}
/**
 * 基础参数
 * @type {{optype: *, ioTypecd: *, passportTypecd: *, tabs: *}}
 */
var baseParams = {
    'optype' : Utils.search('optype'),
    'ioTypecd' : Utils.search('ioTypecd'),
    'passportTypecd' : Utils.search('passportTypecd'),
    'tabs' : Utils.search('tabs')
}
/**
 * 基础工具
 * @type {{isParamError: BaseUtils.isParamError, isParamErrorWithLoad: BaseUtils.isParamErrorWithLoad, isParamErrorWithMsg: BaseUtils.isParamErrorWithMsg, spliceParam: BaseUtils.spliceParam, initDateTime: BaseUtils.initDateTime, setFormValue: BaseUtils.setFormValue}}
 */
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
    isParamErrorWithLoad : function (params) {
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
    }
}

/*****************************************************
 *                     业务工具类和业务参数            *
 *****************************************************/
/**
 * 服务地址，由BusinessUtils.doServerUrl()动态赋值
 * @type {{}}
 */
var Urls = {
    bscServerUrl : baseUrls.bscServerAddress,
    rLTServerUrl : baseUrls.rltServerAddress,
    dtServerUrl : baseUrls.dtServerAddress
}
/**
 * 业务参数
 * @type {{seqNo: *, id: *}}
 */
var businessParams = {
    'seqNo' : Utils.search('seqNo'),
    'id' : Utils.search('id')
}
/**
 * 业务工具
 * @type {{doServerUrl: BusinessUtils.doServerUrl, spliceParamWithBaseParam: BusinessUtils.spliceParamWithBaseParam, setView: BusinessUtils.setView, setConveyPlugs: BusinessUtils.setConveyPlugs, setSimplePlugs: BusinessUtils.setSimplePlugs, conveyInit: BusinessUtils.conveyInit, simpleInit: BusinessUtils.simpleInit, commonInit: BusinessUtils.commonInit, conveyAddHandle: BusinessUtils.conveyAddHandle, conveyModiyHandle: BusinessUtils.conveyModiyHandle, conveyCommonHandle: BusinessUtils.conveyCommonHandle}}
 */
var BusinessUtils = {
    /**
     * 根据tabs处理不同的参数
     * @param tabs
     * @returns {{}}
     */
    doServerUrl : function () {
        switch (baseParams.tabs) {
            case "cusTab"://审批(正式)数据
                Urls.bscServerUrl = baseUrls.cusBscServerAddress;
                Urls.rLTServerUrl = baseUrls.cusRltServerAddress;
                Urls.dtServerUrl = baseUrls.cusDtServerAddress;
                break;
            case "hisTab"://申报历史记录
                Urls.bscServerUrl = baseUrls.hisBscServerAddress;
                Urls.rLTServerUrl = baseUrls.hisRltServerAddress;
                Urls.dtServerUrl = baseUrls.hisDtServerAddress;
                break;
            default: //预录入申报
                Urls.bscServerUrl = baseUrls.bscServerAddress;
                Urls.rLTServerUrl = baseUrls.rltServerAddress;
                Urls.dtServerUrl = baseUrls.dtServerAddress;
                break;
        }
    },
    /**
     * 在原参数的基础上拼接新参数
     * @param isFirst
     * @param jsonParam
     * @returns {*}
     */
    spliceParamWithBaseParam : function (isFirst,jsonParam) {
        return BaseUtils.spliceParam(isFirst,jsonParam) + BaseUtils.spliceParam(false,baseParams);
    },
    /**
     * 设置查阅模式属性
     */
    setView : function () {
        FormUtils.setPageView();//禁用表单
        $('#dtModalSave').remove();//移除crud按钮
    },
    /**
     * 公共部分初始化
     */
    commonInit : function () {
        var index = parent.layer.getFrameIndex(window.name);
        //退出模态框
        $('#dtModalReback').click(function () {
            parent.layer.close(index);
        });
    },
    /**
     * 简单加工初始化
     */
    simpleInit : function () {
        switch (baseParams.optype)
        {
            case 'add':
                if(BaseUtils.isParamErrorWithMsg({'id':businessParams.seqNo,'msg':'单据编号异常,请重试'})){
                    $('#dtModalSave').attr('disabled','disabled');//参数错误，禁用保存按钮
                }else{
                    $('input[name=seqNo]').val(businessParams.seqNo);
                    BusinessUtils.simpleAddHandle();
                }
                break;
            case 'modify':
                BusinessUtils.simpleModifyHandle();
                break;
            default:
                BusinessUtils.setView();
                BusinessUtils.simpleViewHandle();
                break;
        }
        BusinessUtils.setSimplePlugs();
    },
    /**
     * 简单加工新增操作句柄
     */
    simpleAddHandle : function () {

    },
    /**
     * 简单加工修改操作句柄
     */
    simpleModifyHandle : function () {
        //默认不执行，本模块应该不存在修改功能
    },
    /**
     * 简单加工查阅操作句柄
     */
    simpleViewHandle : function () {
        //默认不执行，该模块查阅功能在sasPassportDtModal.js中处理执行
    },
    /**
     * 设置简单加工插件
     */
    setSimplePlugs : function () {

    }
}

$(function () {
    initialization();
});