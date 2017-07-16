/**
 * 核放单类型选择js
 * author 宋轲
 */
$(function () {
    initialization();
});
function initialization() {
    var _jumpPage = baselocation + "/views/saspass/sasPassportBsc/",
        index = parent.layer.getFrameIndex(window.name), //获取窗口索引
        ioTypecd = Utils.search("ioTypecd"),
        passportTypecd = Utils.search("passportTypecd"),
        optype = Utils.search("optype"),
        docType = Utils.search('docType'),
        tabs = Utils.search("tabs");
    if(BaseUtil.isParamError(ioTypecd,passportTypecd,optype,tabs)) { return; }//参数检查
    var baseParam = {
        ioTypecd : ioTypecd,
        passportTypecd : passportTypecd,
        optype : optype,
        docType : docType,
        tabs : tabs
    }

    /**
     * 取消选择
     */
    $('#typeModalReback').click(function () {
        parent.layer.close(index);
    });
    /**
     * 确认选择
     */
    $('#typeModalSave').click(function () {
        Validator.setValidateParam("typeModalForm");
        if(!Validator.validate("typeModalForm")) return;
        //获取选择的核放单类型
        var passportTypecd = $("select option:selected").val();
        baseParam.passportTypecd = passportTypecd;
        //父层页面跳转
        parent.Utils.showEditDiv(Utils.formatUrl(_jumpPage + "edit.jsp" + BaseUtil.spliceParam(true,baseParam)));
        parent.layer.close(index);
        /*parent.window.location.href = _jumpPage + "edit.jsp" + BaseUtil.spliceParam(true,baseParam);*/
    });

    Utils.setCodesDropDown("PASSPORT_TYPECD");
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
    }
}