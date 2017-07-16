/**
 *
 * @author 宋轲
 */
$(function () {
    initialization();
});

/**
 * 全局初始化
 */
function initialization() {
    //经营资料表格属性
    copBusinessColumns = [
        {title: "", field: "select", radio: true, width: 20, align: "center", valign: "middle"},
        {title: "仓库(工厂)代码", field: "storeCode", align: "left", sortable: true, order: "desc"},
        {title: "仓库(工厂)名称", field: "storeName", align: "left", sortable: true},
        {title: "仓库类型", field: "storeType", align: "left", sortable: true},
        {title: "仓库(加工)批准证编号", field: "storeLicence", align: "left", sortable: true},
        {title: "仓库(工厂)面积", field: "storeArea", align: "right", sortable: true},
        {title: "仓库(工厂)体积", field: "storeVolume", align: "right", sortable: true},
        {title: "仓库(工厂)地址", field: "storeAddress", align: "left", sortable: true},
        {title: "储位数量", field: "storeNumber", align: "right", sortable: true}
    ];

    //经营资料服务器地址
    _copBusinessServerAddress = _server + "/cop/copBusiness/list";

    //企业备案跳转页面
    _jumpPage = baselocation + "/views/cop/copEnt/";
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
            addInitialization(findCop, optype, id);
            break;
        case 'edit':
            editInitialization(findCop, optype, id, _jumpPage);
            break;
        default :
            viewInitialization(findCop, optype, id);
            break;
    }
    commonInitialization(findCop, optype, id, _jumpPage);
}
/**
 * 公共部分初始化
 */
function commonInitialization(findCop, optype, id, jumpPage) {
    //返回列表
    $('#reback').click(function () {
        parent.Utils.hideEditDiv();
        /*var url = jumpPage + 'list.jsp' + spliceParam(true,{'findCop':findCop});
        Utils.redirect(url);*/
    });
    //查阅经营资料
    $('#find').click(function () {
        var rowData = DataGridUtils.getRowDatas();
        if (rowData) {
            var url = jumpPage + 'modal.jsp' + spliceParam(true,{'optype':'view','findCop':findCop,'id':rowData.uid});
            setModel('查阅经营资料', url);
        } else {
            layer.msg("未选择任何记录", {time: 1500});
        }

    });
    //初始化插件
    initPlugin();
}
/**
 * 新增部分初始化
 */
function addInitialization(findCop ,optype, id) {
    $('#copBussinessGrid').remove();//新增企业资料移除经营资料表格
    //修改企业资料
    $('#save').click(function () {
        _serverAddress = _server + "/cop/copEnt/list";
        //启用表单验证
        Validator.setValidateParam("form");
        if (!Validator.validate("form")){ return; }

        addCopEnt();

        /*FormUtils.save('form', '/add', true);*/
    });
    //获取登录用户信息
    Utils.getLoginUserInfo();
    //日期插件初始化
    Utils.initCalendar();
}
/**
 * 编辑部分初始化
 */
function editInitialization(findCop ,optype, id, jumpPage) {
    $('#validDate').attr('readonly','readonly');
    //修改企业资料
    $('#save').click(function () {
        _serverAddress = _server + "/cop/copEnt/list";
        //启用表单验证
        Validator.setValidateParam("form");
        if (!Validator.validate("form")){ return; }

        FormUtils.save('form', '/update', true);
    });
    //新增经营资料
    $('#add').click(function () {
        var seqNo = $('input[name=seqNo]').val();
        setModel('新增经营资料',jumpPage + 'modal.jsp' + spliceParam(true,{'optype':'add','findCop':findCop,'seqNo':seqNo}));
    });
    //修改经营资料
    $('#edit').click(function () {
        var rowData = DataGridUtils.getRowDatas();
        if (rowData) {
            var url = jumpPage + 'modal.jsp' + spliceParam(true,{'optype':'edit','findCop':findCop,'id':rowData.uid});
            setModel('修改经营资料', url);
        } else {
            layer.msg("未选择任何记录", {time: 1500});
        }
    });
    //删除经营资料
    $('#remove').click(function () {
        _serverAddress = _server + "/cop/copBusiness/list";
        param.serverUrl = _serverAddress + '/deleteByList';
        DataGridUtils.deleteGrid(param);
    });
    //日期插件初始化
    Utils.initCalendar();
}
/**
 * 查看部分初始化
 */
function viewInitialization(findCop ,optype, id) {
    $('#validDate').datepicker('hide');//查阅隐藏日期插件
    $('#save,#add,#edit,#remove').remove();//清除CRUD按钮
    FormUtils.setPageView();
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
 * 拼接参数
 * @param isFirst true./第一个参数
 * @param jsonObj json对象 例{'name':'张三','age':'24'}
 * @returns {string}
 */
function spliceParam(isFirst,jsonObj) {
    if(jsonObj == undefined){ return; }

    var url = isFirst ? '?' : '&';

    for(var key in jsonObj){
        url += key + '=' + jsonObj[key] + '&';
    }
    return url;
}
/**
 * 插件初始化
 */
function initPlugin() {
    $('#validDate').datepicker('setStartDate',new Date());
    //获取下拉资源
    Utils.setDropDown('IS_VALIDATE,ENT_PROPERTY','codCusCustomsrel,codStdAreaCode,codCusBusttype');
    //初始化经营资料
    param.columns = copBusinessColumns;
}
/**
 * 设置模态框参数
 * @param title
 * @param url
 */
function setModel(title,url) {
    var modal = {
        area : ["65%", "80%"],
        title : title,
        url : url
    };
    Utils.showModalDialog(modal);
}

/***************************************
 *             回调部分                 *
 ***************************************/

/**
 * 保存回调
 * @param data
 * @private
 */
function __onAfterSave(data) {
    var findCop = Utils.search("findCop");
    //数据ID
    var id = Utils.search("id");
    location.href = baselocation + "/views/cop/copEnt/edit.jsp" + spliceParam(true,{'optype':'edit','findCop':findCop,'id':id});
}
/**
 * 下拉加载回调
 * @private
 */
function __onAfterInitDropDown() {
    var optype = Utils.search("optype");
    if(optype =='' || optype == undefined){
        layer.msg("初始化参数异常,请重试！", {time: 1500});
    }else{
        if(optype != 'add'){
            //获取企业资料form表单初始化数据并填充表单
            _serverAddress = _server + "/cop/copEnt/list";
            FormUtils.getData();
        }
    }
}
/**
 * form表单初始化加载回调
 * @private
 */
function __onAfterLoad(data) {
    //获取企业备案号
    var seqNo = $('input[name=seqNo]').val();
    param.url = _server + "/cop/copBusiness/list?seqNo=" + seqNo;
    if(seqNo == '' || seqNo == undefined){
        layer.msg("初始化参数异常,请重试！", {time: 1500});
    }else{
        DataGridUtils.initGridByUrl(param);
    }
}
/**
 * 获取登录用户信息回调
 * @param loginuser
 * @private
 */
function __onAfterGetLoginUserInfo(loginuser) {
    FormUtils.initForm(loginuser);
    //初始企业海关代码和企业名称
    $("#tradeCode").val(loginuser.inputCopNo);
    $("#entName").val(loginuser.inputCopName);
    $("#updateTime").val(loginuser.decTime);
    var codeUrl = "applyId=" + $("#appId").val() + "&areaCode=40901&docType=A0301SeqNO&serverType=C";
    Utils.getBillCode(codeUrl, 'seqNo', '企业备案号获取失败');
}
/**
 * 新增保存企业资料
 */
function addCopEnt() {
    var copEnt = FormUtils.formToJson('form');
    $.ajax({
        url: _server + "/cop/copEnt/list/add",
        dataType: 'json',
        type: 'POST',
        contentType: 'application/json;charset=utf-8',
        data: JSON.stringify(copEnt),
        traditional: true,
        xhrFields: {withCredentials: true},
        crossDomain: true,
        success: function (result) {
            if (result.code != 1) {
                layer.msg(result.message, {time: 1500});
            } else {
                var findCop = Utils.search("findCop");
                var id = Utils.search("id");
                location.href = baselocation + "/views/cop/copEnt/edit.jsp" + spliceParam(true,{'optype':'edit','findCop':findCop,'id':result.data.uid});
            }
        },
        error: function (result) {
            layer.msg("保存失败");
        }
    });
}

