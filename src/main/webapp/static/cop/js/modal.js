/**
 *
 * @author 宋轲
 */
$(function(){
    var index = parent.layer.getFrameIndex(window.name); //获取窗口索引

    //菜单入口参数
    var findCop = Utils.search("findCop");
    //操作类型
    var optype = Utils.search("optype");
    //数据ID
    var id = Utils.search("id");

    if(isParamError(findCop ,optype)){ return; }

    switch (optype)
    {
        case 'add':
            addInitialization();
            break;
        case 'edit':
            editInitialization();
            break;
        default :
            $('#modalSave').remove();//清除CRUD按钮
            FormUtils.setPageView();
            initFormData();
            break;
    }
    /**
     * 退出模态框
     */
    $('#modalReback').click(function () {
        parent.layer.close(index);
    });
});
/**
 * 新增初始化
 */
function addInitialization() {
    var seqNo = Utils.search("seqNo");
    if (seqNo != '' || seqNo != undefined){ $('input[name=seqNo]').val(seqNo); }
    else{ layer.msg("初始化参数异常,请重试。", { time: 1500 }); }
    $('#modalSave').click(function () {
        //启用表单验证
        Validator.setValidateParam('modalForm');
        if(!Validator.validate('modalForm')){ return; }

        _serverAddress = _server + "/cop/copBusiness/list";
        FormUtils.save('modalForm', '/add',true);
    });
}
/**
 * 修改初始化
 */
function editInitialization() {
    initFormData();
    $('#modalSave').click(function () {
        //启用表单验证
        Validator.setValidateParam('modalForm');
        if(!Validator.validate('modalForm')){ return; }

        _serverAddress = _server + "/cop/copBusiness/list";
        FormUtils.save('modalForm', '/update',true);
    });
}

/**
 * 修改保存后回调
 * @param data
 * @private
 */
function __onAfterSave(data) {
    parent.window.location.reload();
}

/**
 * 参数是否异常
 * @param optype
 * @param findCop ,optype ,id
 * @returns {boolean} true-参数错误 ./ false-参数正常
 */
function isParamError(findCop, optype) {
    if(findCop == ''|| findCop == undefined || optype == ''
        || optype == undefined)
    {
        layer.msg("初始化参数异常,请重试。", { time: 1500 });
        return true;
    }
    return false;
}
/**
 * 修改/查阅初始化form表单
 */
function initFormData() {
    _serverAddress = _server + "/cop/copBusiness/list";
    FormUtils.getData();
}
