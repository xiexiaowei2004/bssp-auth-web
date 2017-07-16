/**
 * 包含核放单，核放单关联表证，核放单货物部分的新增，修改，查阅的js
 * 所有插件的初始化建议放置到js的最后，以免因为异常阻塞后续的js
 * 注：新增核放单时，核放单关联表证，核放单货物部分的初始化在获取单据编号后的回调函数__onAftergetBillCode中执行
 *    修改核放单时，核放单关联表证，核放单货物部分的初始化在主表form初始化后回调函数__onAfterLoad中执行
 */
$(function () {
    initialization();
});

function initialization() {
    var ioTypecd = Utils.search("ioTypecd"),
        passportTypecd = Utils.search("passportTypecd"),
        optype = Utils.search("optype"),
        docType = Utils.search('docType'),
        tabs = Utils.search("tabs");
    if(BaseUtil.isParamError(ioTypecd,passportTypecd,optype,tabs)) { return; }//参数检查
    baseParam = {//去掉var,转为全局变量
        ioTypecd : ioTypecd,
        passportTypecd : passportTypecd,
        docType : docType,
        optype : optype,
        tabs : tabs
    }
    doOperate(optype,baseParam);
}

/**
 * 处理请求的操作
 * @param optype = add./edit./view
 */
function doOperate(optype,baseParam) {
    //根据传入的页签标识获取服务器url
    urls = BaseUtil.doServerUrl(baseParam.tabs);//去掉var,转为全局变量
    commonInitialization(baseParam,urls);
    switch (optype)
    {
        case 'add'://新增跳入
            addInitialization(baseParam,urls);
            break;
        case 'modify'://修改跳入
            editInitialization(baseParam,urls);
            break;
        default://查看跳入
            viewInitialization(baseParam,urls);
    }
}

function addInitialization(baseParam,urls) {
    $("#table-head").html("核放单-新增");
    var elements = {
        'hidDclTypecd' : '1',
        'dclTypecd' : '备案',//申报类型 显示中文 1-备案、2-变更、3-作废。目前核放单不允许变更
        'hidEmapvMarkcd' : 'A',
        'emapvMarkcd' : '暂存',//审批标志 //显示中文 A-暂存、B-申报、E-待绑卡、1-通过、2-转人工3-退单、Y-入库成功Z-入库失败、6-作废
        'hidChkStatus' : 'S',
        'chkStatus' : '暂存' //单据状态
    }
    //新增初始化常量
    BaseUtil.setElementValue(elements);
    //新增初始化进出标识，完成后执行关联单证类型的初始化 @initRltTbTypecd
    BaseUtil.initIoTypecd(baseParam.passportTypecd,baseParam.ioTypecd);
    //新增初始化核放单类型
    BaseUtil.initPassportTypecd(baseParam.passportTypecd);
    //新增核放单操作函数
    BaseUtil.addBscOperateHandle(urls);
    //获取用户信息
    Utils.getLoginUserInfo();
    //获取集装箱信息
    BaseUtil.getContainerInfo();
}

function editInitialization(baseParam,urls) {
    $("#table-head").html("核放单-修改");
    GlobalParam.isPreSave = true;
    //修改核放单操作函数
    BaseUtil.editBscOperateHandle(urls);
    //执行表单初始化，表单初始化的回调中执行表体的表格初始化 @ __onAfterLoad
    BaseUtil.initForm(urls);

    BaseUtil.getContainerInfo();//获取集装箱信息
}

function viewInitialization(baseParam,urls) {
    $("#table-head").html("核放单-查阅")
    $('#selectVehicleNo').attr('disabled','disabled');//禁用车辆选择按钮
    $('#save,#report,#addRlt,#deleteRlt,#addDt,#editDt,#deleteDt').remove();//移除crud按钮
    FormUtils.setPageView();//禁用表单
    //执行表单初始化，表单初始化的回调中执行表体的表格初始化 @ __onAfterLoad
    BaseUtil.initForm(urls);
}

function commonInitialization(baseParam,urls) {
    var isSimple = (baseParam.docType == 'A0503.02'),//简单加工
        isOutward = (baseParam.docType == 'A0503.03'),//外发加工
        isTemporary = (baseParam.docType == 'A0503.04'),//临时业务
        isTransport = (baseParam.docType == 'A0503');//运输单据

    BaseUtil.doBusType(baseParam.docType);
    //卡口货物登记
    if(baseParam.passportTypecd == '5' || isSimple || isOutward || isTemporary){
        $('#rltIbox').hide();
        $('#rltBtnSpan').show();
    }
    //返回列表
    $("#reback").click(function () {
        //刷新父页面
        var requestUrl = urls.bscServerUrl + BaseUtil.spliceParam(true,baseParam);
        parent.$("#table").bootstrapTable('refresh', {url: requestUrl, method: "get"});
        parent.Utils.hideEditDiv();
    });
    //申报
    BaseUtil.commonBscOperateHandle(baseParam,urls);
    /*****************************************************
     *                     关联单部分                     *
     *****************************************************/
    BaseUtil.commonRltOperateHandle(baseParam,urls);
    /*****************************************************
     *                     货物单部分                     *
     *****************************************************/
    BaseUtil.commonDtOperateHandle(baseParam,urls);

    //初始化插件
    BaseUtil.initPlugs();
}

/*****************************************************
 *                     回调函数                       *
 *****************************************************/
/**
 * 下拉加载回调
 * @private
 */
function __onAfterInitDropDown() {
    if(baseParam.optype != 'add'){
        BaseUtil.initForm(urls);//此处针对集装箱类型再次赋值
    }
    /*if(baseParam.optype == 'add'){
        $("#masterCuscd").select2().val(GlobalParam.masterCuscd).trigger("change");//主管海关./此处只用于用户查看到海关
    }*/
}
/**
 * 用户信息加载回调函数(只在新增时执行)
 * @param loginuser
 * @private
 */
function __onAfterGetLoginUserInfo(loginuser){
    //格式化时间
    BaseUtil.initDateTime('dclTime',loginuser.decTime);
    //初始化用户基本信息
    FormUtils.initForm(loginuser);
    //初始企业名称,企业信用代码,海关代码
    BaseUtil.setElementValue({'areainEtpsno':loginuser.inputCopNo,'areainEtpsNm':loginuser.inputCopName,'hidMasterCuscd':loginuser.customsCode,'hidAreaCode':loginuser.areaCode});
    if(loginuser.copEnt != undefined){
        BaseUtil.setElementValue({'areainEtpsSccd':loginuser.copEnt.copGbCode});

        //核放单新增获取单据编号./此处需注意加载顺序不可反置，新增的回调__onAftergetBillCode函数中对子表执行了初始化，必须保证单据号写入到input中后，再执行子表初始化
        var seqNoUrl = "applyId="+$("#appId").val()+"&areaCode="+loginuser.copEnt.areaCode+"&docType=A0503SeqNO&serverType=C";
        var copNoUrl = "applyId="+$("#appId").val()+"&areaCode="+loginuser.copEnt.areaCode+"&docType=A0503CopNO&serverType=C";
        Utils.getBillCode(seqNoUrl,'seqNo,sasPassportPreentNo,etpsPreentNo','获取统一编号异常');//seqNo,sasPassportPreentNo,etpsPreentNo
        Utils.getBillCode(copNoUrl,'copEntNo','获取内部编号异常');//copEntNo
    }
}
/**
 * form表单初始化回调函数(只在修改和查阅时执行)
 * @private
 */
function __onAfterLoad(data) {
    $('#bindTypecd').attr('disabled','disabled');//禁用绑定类型
    //格式化时间
    BaseUtil.initDateTime('dclTime',$('#dclTime').val());
    //初始化表体
    var seqNo = $('input[name=seqNo]').val();
    BaseUtil.initGrid(urls,seqNo);//调用全局变量urls
}
/**
 * 保存成功回调
 * @param data
 * @private
 */
function __onAfterSave(data){
    baseParam.optype = 'modify';
    baseParam.id = data.uid;

    var url = GlobalParam.jumpPage + 'edit.jsp' + BaseUtil.spliceParam(true,baseParam);
    Utils.redirect(url);
}
/**
 * 获取车辆信息回调
 * @param data
 * @returns {boolean}
 */
function callBackVehicle(data) {
    $('#vehicleNo').val(data.vehicleNo);
    $('#vehicleWt').val(data.vehicleWt);
    return true;
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
     * 检查参数初始化加载是否异常
     * @param jsonParam {message:param}
     * @returns {boolean} true=参数异常
     */
    isParamLoadError : function (jsonParam,customMsg) {
        var msg = customMsg || '初始化异常,请重新加载。';
        for(var key in jsonParam){
            if (!jsonParam[key])
            {
                layer.msg(key + msg, { time: 1500 });
                return true;
            }
        }
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
    initDateTime : function (_elements,time) {
        var _element = _elements.split(',');
        $.each(_element,function (i,t) {
            $('#'+ _element[i]).val(time.substring(0, 10));
        });
    },
    /**
     * 给页面元素赋值
     * @param jsonObj json对象 例{'name':'张三','age':'24'}
     */
    setElementValue : function (jsonObj) {
        if(!jsonObj){ return; }
        for(var key in jsonObj){
            $('#'+key).val(jsonObj[key]);
        }
    },
    doBusType : function (docType) {
        switch (docType)
        {
            case 'A0503.02':
                $('#busType').val('simple');
                break;
            case 'A0503.03':
                $('#busType').val('outward');
                break;
            case 'A0503.04':
                $('#busType').val('temporary');
                break;
            default:
                $('#busType').val(null);
                break;
        }
    },
    /**
     * 处理核放单服务url
     * @returns {string|*}
     */
    doServerUrl : function (tabsCode) {
        var Urls = {};
        switch (tabsCode)
        {
            case "cusTab"://审批(正式)数据
                Urls.bscServerUrl = GlobalParam.cusBscServerAddress;
                Urls.rLTServerUrl = GlobalParam.cusRltServerAddress;
                Urls.dtServerUrl = GlobalParam.cusDtServerAddress;
                break;
            case "hisTab"://申报历史记录
                Urls.bscServerUrl = GlobalParam.hisBscServerAddress;
                Urls.rLTServerUrl = GlobalParam.hisRltServerAddress;
                Urls.dtServerUrl = GlobalParam.hisDtServerAddress;
                break;
            default: //预录入申报
                Urls.bscServerUrl = GlobalParam.bscServerAddress;
                Urls.rLTServerUrl = GlobalParam.rltServerAddress;
                Urls.dtServerUrl = GlobalParam.dtServerAddress;
                break;
        }
        return Urls;
    },
    /**
     * 获取选中的第一行数据(默认返回第一行)
     * @param tableCode
     */
    getFirstRowDatas : function (tableCode) {
        var rows = $('#'+tableCode).bootstrapTable('getSelections');
        if (rows.length == 0) {
            layer.msg("未选择任何记录", {time: 1500});
        }else{
            return rows[0];
        }
    },
    /**
     * 获取全部被选中的行数据
     * @param tableCode
     * @returns {jQuery}
     */
    getRowDatas : function (tableCode) {
        var rows = $('#'+tableCode).bootstrapTable('getSelections');
        if (rows.length == 0) {
            layer.msg("未选择任何记录", {time: 1500});
        }else{
            return rows;
        }
    },
    /**
     * 初始化插件
     */
    initPlugs : function () {
        //初始化日历控件
        Utils.initCalendar();
        //初始化下拉插件
        Utils.setDropDown('BIND_TYPECD,OWNER_SYSTEM','codCusCustomsrel,codStdContaParam');
    },
    /**
     * 初始化form表单
     * @param urls
     */
    initForm : function (urls) {
        _serverAddress = urls.bscServerUrl;
        FormUtils.getData();

    },
    /**
     * 初始化表体表格
     * @param urls
     * @param seqNo
     */
    initGrid : function (urls,seqNo) {
        //初始化关联单表格
        param.url = urls.rLTServerUrl + BaseUtil.spliceParam(true,{'seqNo':seqNo});
        param.gridId = "rltTab";
        param.columns = GlobalParam.sasPassportRltColumns;
        DataGridUtils.initGridByUrl(param);
        //初始化货物单表单
        param.url = urls.dtServerUrl + BaseUtil.spliceParam(true,{'seqNo':seqNo});
        param.gridId = "dtTab";
        param.columns = GlobalParam.sasPassportDtColumns;
        DataGridUtils.initGridByUrl(param);
    },
    /**
     * 初始化进出标识(新增)
     * @param ioTypecd
     */
    initIoTypecd : function (passportTypecd,ioTypecd) {
        $.ajax({
            url: _redisServer + '/getDictionary?dictionaryValue=STOCK_TYPECD',
            type: 'GET',
            xhrFields: { withCredentials: true },
            crossDomain: true,
            success: function (response) {
                $.each(response.data.STOCK_TYPECD,function (index,item) {
                    if(ioTypecd == item.id){
                        $('#hidIoTypecd').val(item.id);
                        $('#ioTypecd').val(item.text);
                        BaseUtil.initRltTbTypecd(passportTypecd,ioTypecd);
                        return;
                    }
                });
            },
            error: function (response) {
                layer.msg('进出口标识获取失败,请重试', { time: 1500 });
            }
        });
    },
    /**
     * 初始化关联单证类型(新增)
     * @param passportTypecd 核放单类型代码
     * @param ioTypecd 进出标志代码
     */
    initRltTbTypecd : function (passportTypecd,ioTypecd) {
        $.ajax({
            url: _redisServer + '/getDictionary?dictionaryValue=RLT_TB_TYPECD',
            type: 'GET',
            xhrFields: { withCredentials: true },
            crossDomain: true,
            success: function (response) {
                $.each(response.data.RLT_TB_TYPECD,function (index,item) {
                    if(passportTypecd == '1' && (ioTypecd == 'I' || ioTypecd == 'E') && item.id == '3'){//3：提货单
                        $('#hidRltTbTypecd').val('3');
                        $('#rltTbTypecd').val(item.text);
                    }else if(passportTypecd == '2' && (ioTypecd == 'I' || ioTypecd == 'E') && item.id == '1'){// 1：核注清单
                        $('#hidRltTbTypecd').val('1');
                        $('#rltTbTypecd').val(item.text);
                    }else if(passportTypecd == '3' && (ioTypecd == 'I' || ioTypecd == 'E') && item.id == '1'){// 1：核注清单
                        $('#hidRltTbTypecd').val('1');
                        $('#rltTbTypecd').val(item.text);
                    }else if(passportTypecd == '4' && (ioTypecd == 'I' || ioTypecd == 'E') && item.id == '2'){//2：出入库单
                        $('#hidRltTbTypecd').val('2');
                        $('#rltTbTypecd').val(item.text);
                    }else if(passportTypecd == '5' && (ioTypecd == 'I' || ioTypecd == 'E')){//空，不填入
                        $('#hidRltTbTypecd').val('');
                        $('#rltTbTypecd').val('');
                    }else if(passportTypecd == '6' && (ioTypecd == 'I' || ioTypecd == 'E')){//空，不填入
                        $('#hidRltTbTypecd').val('');
                        $('#rltTbTypecd').val('');
                    }
                });
            },
            error: function (response) {
                layer.msg('关联单证类型获取失败,请重试', { time: 1500 });
            }
        });
    },
    initPassportTypecd : function (passportTypecd) {
        $.ajax({
            url: _redisServer + '/getDictionary?dictionaryValue=PASSPORT_TYPECD',
            type: 'GET',
            xhrFields: { withCredentials: true },
            crossDomain: true,
            success: function (response) {
                $.each(response.data.PASSPORT_TYPECD,function (index,item) {
                    if(item.id == passportTypecd){
                        $('#hidPassportTypecd').val(item.id);
                        $('#passportTypecd').val(item.text);
                        return;
                    }
                });
            },
            error: function (response) {
                layer.msg('核放单类型获取失败,请重试', { time: 1500 });
            }
        });
    },
    /**
     * 检查核放单初始化参数
     * @returns {boolean} true-参数异常
     */
    checkBscParam : function () {
        var jsonParam = {
            '进出标志': $('input[name=ioTypecd]').val(),
            '核放单类型代码' : $('input[name=passportTypecd]').val(),
            '主管海关代码' : $('input[name=masterCuscd]').val(),
            /*'关联单证类型' : $('input[name=rltTbTypecd]').val(),*/ //卡口登记不需要
            '申报类型' : $('input[name=dclTypecd]').val(),
            '单据状态' : $('input[name=chkStatus]').val(),
            '绑定类型' : $('#bindTypecd').val()
        }
        if(BaseUtil.isParamLoadError(jsonParam)) { return true; }
        else{ return false; }
    },
    addBscOperateHandle : function (urls) {
        //新增保存核放单
        $('#save').click(function () {
            var bindTypecd = $('#bindTypecd').val();
            if(!bindTypecd){ layer.msg("请选择绑定类型", { time: 1500 }); return; }
            //参数检查
            if(BaseUtil.checkBscParam()){ return; }
            _serverAddress = urls.bscServerUrl;
            FormUtils.save('bscForm', '/add', true);//新增保存
        });
    },
    editBscOperateHandle : function (urls) {
        //修改保存核放单
        $('#save').click(function () {
            //参数检查
            if(BaseUtil.checkBscParam()){ return; }
            var id = Utils.search("id");
            if(!id){ layer.msg("操作异常，请重试。", { time: 1500 }); return; }
            $('#bindTypecd').removeAttr('disabled');//解禁绑定类型
            _serverAddress = urls.bscServerUrl;
            FormUtils.save('bscForm', '/update', true);//修改保存
        });
    },
    showRltModal : function (title, page, jsonParam) {
        var width = $(".container").width()+"px", area = [];
        area.unshift(width,"540px");
        var modal = {
            area: area,
            title: title,
            url: GlobalParam.jumpPage + page + BaseUtil.spliceParam(true,jsonParam)
        };
        Utils.showModalDialog(modal);
    },
    showDtModal : function (title, page, height, baseParam, jsonParam) {
        var width = $(".container").width()+"px", area = [];
        area.unshift(width,height);
        jsonParam.ioTypecd = baseParam.ioTypecd;
        jsonParam.passportTypecd = baseParam.passportTypecd;
        jsonParam.tabs = baseParam.tabs;
        var modal = {
            area: area,
            title: title,
            url: GlobalParam.jumpPage + page + BaseUtil.spliceParam(true,jsonParam)
        };
        Utils.showModalDialog(modal);
    },
    /**
     * 检查关联单记录
     * @param seqNo
     * @param urls
     * @returns {boolean} false=有记录
     */
    chechRltRecord : function (seqNo,urls) {
        var flag = true;
        $.ajax({
            url: urls.rLTServerUrl,
            type: 'GET',
            async: false,
            data: {"seqNo": seqNo},
            xhrFields: { withCredentials: true },
            crossDomain: true,
            success: function (response) {
                if(response.data.length > 0){ flag = false; }
            },
            error: function (response) {
                layer.msg('关联单证记录获取失败,请重试', { time: 1500 });
            }
        });
        return flag;
    },
    commonBscOperateHandle : function (baseParam,urls) {
        //申报核放单
        $('#report').click(function () {
            Validator.setValidateParam("bscForm");
            if(!Validator.validate("bscForm")) return;
            //参数检查
            if(BaseUtil.checkBscParam()){ return; }
            $('#bindTypecd').removeAttr('disabled');//解禁绑定类型
            _serverAddress = GlobalParam.bscServerAddress;//申报只存在预录入表中，注意此处地址
            _jumpPage = GlobalParam.jumpPage;
            BaseUtil.reports(baseParam);
            /*FormUtils.save('bscForm', '/reports');*/
        });
        //获取车辆资源信息
        $('#selectVehicleNo').click(function () {
            var masterCuscd = $('#hidMasterCuscd').val(),
                width = $(".container").width()+"px",
                area = [];
                area.unshift(width,"540px");
            if(BaseUtil.isParamLoadError({'主管海关代码':masterCuscd},'初始化异常,请联系管理员。')){ return }
            var modal = {
                area: area,
                title: '车辆选择',
                url: GlobalParam.jumpPage + 'sasPassportVehiclelModal.jsp?masterCuscd=' + masterCuscd
            };
            Utils.showModalDialog(modal);
        });
    },
    commonRltOperateHandle : function (baseParam,urls) {
        /**
         * 新增关联单需求：
         * 绑定类型代码=1:一车多票,关联单证类型代码=1:核注清单 -->保税核注清单
         * 绑定类型代码=1:一车多票,关联单证类型代码=2:出入库单 -->出入库单
         * 绑定类型代码=1:一车多票,关联单证类型代码=3:提货单 -->待定
         * 绑定类型代码=2:一票一车||3:一票多车,关联单证类型代码=1:核注清单 -->保税核注清单
         * 绑定类型代码=2:一票一车||3:一票多车,关联单证类型代码=2:出入库单 -->出入库单
         * 绑定类型代码=2:一票一车||3:一票多车,关联单证类型代码=3:提货单 -->待定
         */
        $('#addRlt').click(function () {
            if(!GlobalParam.isPreSave){ layer.msg('核放单尚未保存，请先暂存', { time: 1500 }); return }

            var bindTypecd = $('#bindTypecd :checked').val(),//绑定类型 ./ 1：一车多票  2：一票一车  3：一票多车
                rltTbTypecd = $('#hidRltTbTypecd').val(),//关联单证类型 ./ 1-核注清单 2-出入库单 3-提货单
                seqNo = $('input[name=seqNo]').val(),
                bindTypecdExp = new RegExp(bindTypecd),
                bindTypecdStr = '2,3',
                id = $('input[name=uid]').val(),
                jsonParam = {
                    'id': id,
                    'optype' : 'add',
                    'seqNo' : seqNo,
                    'bindTypecd' : bindTypecd,
                    'rltTbTypecd' : rltTbTypecd,
                    'ioTypecd' : baseParam.ioTypecd,
                    'passportTypecd' : baseParam.passportTypecd,
                };

            //参数检查
            if(BaseUtil.isParamError(bindTypecd,rltTbTypecd,seqNo,baseParam.ioTypecd,baseParam.passportTypecd)){ return; }

            if(bindTypecd == '1' && rltTbTypecd){
                BaseUtil.showRltModal('关联单选择', 'sasPassportRltModal.jsp', jsonParam);
            }else if(bindTypecdExp.test(bindTypecdStr) && rltTbTypecd){
                if(BaseUtil.chechRltRecord(seqNo,urls)){//检查记录是否存在
                    BaseUtil.showRltModal('关联单选择', 'sasPassportRltModal.jsp', jsonParam);
                }else{
                    layer.msg('一票一车、一票多车的核放单只可有一条关联单证记录。', { time: 1500 }); return;
                }
            }else{
                layer.msg('检查绑定类型代码异常,请与系统人员联系。', { time: 1500 }); return;
            }
        });
        //删除关联单
        $('#deleteRlt').click(function () {
            var rows = BaseUtil.getFirstRowDatas('rltTab');
            if(!rows){ return; }

            //检查单据状态是暂存或审批不同意才可以修改和删除
            if (checkChkStatus(rows['chkStatus']) == false) {
                layer.msg("当前状态的单据不能删除！");
                return;
            }

            layer.confirm('确定要删除所选记录吗？', {
                btn: ['确定', '取消'] //按钮
            }, function () {
                //调用后台服务，执行删除
                $.ajax({
                    url: urls.rLTServerUrl + '/deleteByList',
                    type: 'post',
                    data: {"idList": rows['uid'], "appId": $("#appId").val()},
                    dataType: 'json',
                    xhrFields: {
                        withCredentials: true
                    },
                    crossDomain: true,
                    success: function (result) {
                        if (result.code == 1) {
                            layer.msg("删除成功", {time: 1000}, function () {
                                window.location.reload();
                            });
                        }
                        else {
                            layer.msg('删除失败!');
                        }
                    },
                    error: function (result) {
                        layer.msg('删除失败!');
                    }
                });
            }, function () {
                layer.closeAll('dialog');
            });
        });
    },
    commonDtOperateHandle : function (baseParam,urls) {
        //刷新货物单(用于卡口货物登记和简单加工)
        $('#refreshDt').click(function () {
            window.location.reload();
        });
        //删除货物单(用于卡口货物登记和简单加工)
        $('#deleteDt').click(function () {
            var rows = BaseUtil.getFirstRowDatas('dtTab');
            if(!rows){ return; }

            //检查单据状态是暂存或审批不同意才可以修改和删除
            if (checkChkStatus(rows['chkStatus']) == false) {
                layer.msg("当前状态的单据不能删除！");
                return;
            }

            layer.confirm('确定要删除所选记录吗？', {
                btn: ['确定', '取消'] //按钮
            }, function () {
                //调用后台服务，执行删除
                $.ajax({
                    url: urls.dtServerUrl + '/deleteByList',
                    type: 'post',
                    data: {"idList": rows['uid'], "appId": $("#appId").val()},
                    dataType: 'json',
                    xhrFields: {
                        withCredentials: true
                    },
                    crossDomain: true,
                    success: function (result) {
                        if (result.code == 1) {
                            layer.msg("删除成功", {time: 1000}, function () {
                                window.location.reload();
                            });
                        }
                        else {
                            layer.msg('删除失败!');
                        }
                    },
                    error: function (result) {
                        layer.msg('删除失败!');
                    }
                });
            }, function () {
                layer.closeAll('dialog');
            });
        });
        //查阅货物单(用于卡口货物登记和简单加工)
        $('#viewDt').click(function () {
            var rowData = BaseUtil.getFirstRowDatas('dtTab'),
                jsonParam = {'optype':'view','id':rowData.uid};
            BaseUtil.showDtModal('查阅商品','sasPassportDtModal.jsp','520px',baseParam,jsonParam);
        });
        /*BaseUtil.conveyDt(baseParam,urls);*/
        if(baseParam.docType == 'A0503'){//运输单据管理
            BaseUtil.conveyDt(baseParam,urls);
        }else if(baseParam.docType == 'A0503.02'){//简单加工核放单
            BaseUtil.simpleDt(baseParam,urls);
        }else if(baseParam.docType == 'A0503.03'){//外发加工
            BaseUtil.outwardDt(baseParam,urls);
        }else if(baseParam.docType == 'A0503.04'){//临时业务
            BaseUtil.temporaryDt(baseParam,urls);
        }
    },
    reports : function (baseParam) {
        var url = _serverAddress + "/reports";
        var formData = $("#bscForm").serializeForm();
        $.ajax({
            url: url,
            type: 'post',
            dataType: 'json',
            data: formData,
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (result) {
                if (result.code == 1) {
                    layer.msg(result.message, {icon: 1, time: 1000}, function () {
                        Utils.redirect(_jumpPage + "list.jsp" + BaseUtil.spliceParam(true,baseParam));
                    });
                }
                else {
                    layer.msg(result.message, {time: 1500});
                }
            },
            error: function (result) {
                layer.msg(result.message, {icon: 1, time: 1500});
            }
        });
    },
    /**
     * 运输单据货物单
     */
    conveyDt : function (baseParam,urls) {
        //新增货物单(只用于卡口货物登记)
        $('#addDt').click(function () {
            if(!GlobalParam.isPreSave){ layer.msg('核放单尚未保存，请先暂存', { time: 1500 }); return }
            var seqNo = $('#seqNo').val(),
                jsonParam = {'optype':'add','seqNo':seqNo};
            BaseUtil.showDtModal('新增商品','sasPassportDtModal.jsp','520px',baseParam,jsonParam);
        });
        //修改货物单(只用于卡口货物登记)
        $('#editDt').click(function () {
            var rowData = BaseUtil.getFirstRowDatas('dtTab'),
                jsonParam = {'optype':'modify','id':rowData.uid};
            BaseUtil.showDtModal('修改商品','sasPassportDtModal.jsp','520px',baseParam,jsonParam);
        });
    },
    /**
     * 简单加工货物单
     */
    simpleDt : function (baseParam,urls) {
        //新增货物单
        $('#addDt').click(function () {
            if(!GlobalParam.isPreSave){ layer.msg('核放单尚未保存，请先暂存', { time: 1500 }); return }
            var seqNo = $('#seqNo').val(),
                jsonParam = {'optype':'add','seqNo':seqNo};
            BaseUtil.showDtModal('选择商品','simpleDtModal.jsp','520px',baseParam,jsonParam);
        });
    },
    /**
     * 外发加工
     */
    outwardDt : function (baseParam,urls) {//FIXME 暂定
        $('#addDt').click(function () {
            if(!GlobalParam.isPreSave){ layer.msg('核放单尚未保存，请先暂存', { time: 1500 }); return }
            var seqNo = $('#seqNo').val(),
                jsonParam = {'optype':'add','seqNo':seqNo};
            BaseUtil.showDtModal('选择商品','simpleDtModal.jsp','520px',baseParam,jsonParam);
        });
    },
    /**
     * 临时业务
     */
    temporaryDt :function (baseParam,urls) {//FIXME 暂定
        $('#addDt').click(function () {
            if(!GlobalParam.isPreSave){ layer.msg('核放单尚未保存，请先暂存', { time: 1500 }); return }
            var seqNo = $('#seqNo').val(),
                jsonParam = {'optype':'add','seqNo':seqNo};
            BaseUtil.showDtModal('选择商品','simpleDtModal.jsp','520px',baseParam,jsonParam);
        });
    },
    /**
     * 集装箱选择事件
     */
    getContainerInfo : function () {
        //集装箱下拉事件
        $('#containerType').on("change", function(e){
            var targetValue = e.target.value;
            if(targetValue){
                $.ajax({
                    url: _redisServer + '/getDataSource?tableNames=codStdContaParam',
                    type: 'get',
                    xhrFields: { withCredentials: true },
                    crossDomain: true,
                    success: function (result) {
                        $.each(result.data.codStdContaParam,function (index,item) {
                            if(item.id == targetValue){
                                BaseUtil.setElementValue({/*'containerNo' : item.code,*/'containerWt' : item.empty});
                                return;
                            }
                        })
                    },
                    error: function (response) {
                        console.log("获取下拉数据源失败");
                    }
                });
            }
        });
    },
    getAreaCodeInfo : function () {
        $.ajax({
            url: _redisServer + '/getDataSource?tableNames=codStdAreaCode',
            type: 'get',
            xhrFields: { withCredentials: true },
            crossDomain: true,
            success: function (result) {
                /*$.each(result.data.codStdContaParam,function (index,item) {
                    if(item.id == targetValue){
                        BaseUtil.setElementValue({'containerNo' : item.code,'containerWt' : item.empty});
                        return;
                    }
                })*/
            },
            error: function (response) {
                console.log("获取下拉数据源失败");
            }
        });
    }
}

/*****************************************************
 *                     基本参数                       *
 *****************************************************/
var GlobalParam = {
    //保存标识
    isPreSave : false,
    //页签ID
    tabsCode : 'applyTab',
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

    //跳转页面
    jumpPage : baselocation + "/views/saspass/sasPassportBsc/",
    //关联单表格属性
    sasPassportRltColumns : [
        { title: "单选",field: "select",radio: true,align: "center"},
        { title: "关联单证类型",field: "rltTbTypecdName",align: "center",sortable: true,order: "desc"},
        { title: "关联单证编号",field: "rltNo",align: "center",sortable: true },
        { title: "关联单证企业备案号",field: "copEntNo",align: "center",sortable: true },
        { title: "关联单证经营企业名称",field: "bizopEtpsNm",align: "left",sortable: true }
    ],
    //货物单表格属性
    sasPassportDtColumns : [
        { title: "单选",field: "select",radio: true,align: "center" },
        { title: "商品料号",field: "gdsMtno",align: "center",sortable: true,order: "desc" },
        { title: "商品编码",field: "gdecd",align: "center",sortable: true },
        { title: "商品名称",field: "gdsNm",align: "left",sortable: true },
        { title: "货物毛重",field: "grossWt",align: "right",sortable: true },
        { title: "货物净重",field: "netWt",align: "right",sortable: true },
        { title: "申报计量单位",field: "dclUnitcdName",align: "center",sortable: true },
        { title: "申报数量",field: "dclQty",align: "right",sortable: true },
        { title: "关联商品序号",field: "rltGdsSeqno",align: "center",sortable: true },
        { title: "关联单证编号",field: "rltNo",align: "center",sortable: true }
    ]
}