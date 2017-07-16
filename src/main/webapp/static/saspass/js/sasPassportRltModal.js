/**
 * 核放单关联表证部分js
 */

/**
 * 保税核注清单表格属性
 * @type {[*]}
 */
var invBscColumns = [
    { title: "全选",field: "select",checkbox: true,align: "center",formatter:function(value,row,index){
        param.transParam="seqNo,orgNo";
    }},
    { title: "保税清单编号",field: "bondInvtNo",align: "center",sortable: true,order: "desc"},
    { title: "企业内部清单编号",field: "etpsInnerInvtNo",align: "center",sortable: true },
    { title: "备案编号",field: "putrecNo",align: "center",sortable: true },
    { title: "经营企业社会信用代码",field: "bizopEtpsSccd",align: "center",sortable: true },
    { title: "经营企业名称",field: "bizopEtpsNm",align: "center",sortable: true },
    { title: "清单类型",field: "bondInvtTypecdnm",align: "center",sortable: true },
    { title: "清单申报日期",field: "invtDclTime",align: "center",sortable: true,formatter:function(value,row,index){
        fieldValue = value.replace(/-/g,"/");
        fieldValue=DateUtil.dateToStr("yyyy-MM-dd",new Date(fieldValue));
        return fieldValue;
    } },
    { title: "单据状态",field: "chkStatusnm",align: "left",sortable: true },
    { title: "操作时间",field: "decTime",align: "center",sortable: true ,formatter:function(value,row,index){
        fieldValue = value.replace(/-/g,"/");
        fieldValue=DateUtil.dateToStr("yyyy-MM-dd",new Date(fieldValue));
        return fieldValue;
    }},
    { title: "回执状态",field: "retChannel",align: "left",sortable: true },
    { title: "申报地海关",field: "dclPlcCuscd",align: "center"},
    { title: "监管场所",field: "areaCode",align: "center"}

];
/**
 * 出入库单表格属性
 * @type {[*]}
 */
var sassasStockBscColumns = [
    {title: "单选", field: "select", checkbox: true, align: "center", width: "30"},
    {title: "出入库单编号", field: "sasStockNo", align: "center", sortable: true},
    {title: "申报表编号", field: "sasDclNo", align: "center", sortable: true},
    {title: "预录入编号", field: "sasStockPreentNo", align: "center", sortable: true},
    {title: "审批标志", field: "emapvMarkNm", align: "center", sortable: true},
    {title: "集报标志", field: "centralizedDclTypecd", align: "center", sortable: true},
    {title: "关联核注清单编号", field: "rltBondInvtNo", align: "center", sortable: true},
    {title: "申报类型", field: "dclTypecd", align: "center", sortable: true},
    {title: "单据状态", field: "chkStatusNm", align: "center", sortable: true},
    {title: "操作时间", field: "decTime", align: "center", sortable: true},
    {title: "回执状态", field: "retChannel", align: "center", sortable: true},
    {title: "主管海关", field: "masterCuscd", align: "center", sortable: true},
    {title: "监管场所", field: "areaCode", align: "center", sortable: true}
];

//核放单关联表证服务器地址
_sasPassportRltServerAddress = _server + "/saspass/sasPassportRlt/list";
//保税核注清单服务器地址
/*_invBscServerAddress = _server + "/inv/invBsc/list";*/
_invBscServerAddress = _server + "/inv/cus/invCusBsc/list";
//出入库单服务器地址
/*_sassasStockBscServerAddress = _server + "/sas/sasStockBsc/list";*/
_sassasStockBscServerAddress =  _server + "/sas/sasStockCus/list";

var _jumpPage = baselocation + "/views/saspass/sasPassportBsc/";
//主管海关代码
var masterCuscd = '';

$(function () {
    var index = parent.layer.getFrameIndex(window.name); //获取窗口索引

    /**
	 * 退出模态框
     */
	$('#rltModalReback').click(function () {
        parent.layer.close(index);
    });
    /**
	 * 确定按钮
     */
	$('#rltModalSave').click(function () {
        var rows = $.map($('#invBacTab').bootstrapTable('getSelections'), function (row) { return row; });
        if (rows.length == 0) { layer.alert("未选择任何记录"); return; }

        var bindTypecd = Utils.search('bindTypecd');//绑定类型 ./ 1：一车多票  2：一票一车  3：一票多车
        var rltTbTypecd = Utils.search('rltTbTypecd');//关联单证类型 ./ 1-核注清单 2-出入库单 3-提货单

        //判断当前所选择的关联单证，已经在其它核放单中使用，目前系统不支持车与票多对多关联（N：M），继续申请有可能退单
        if(bindTypecd == '' || bindTypecd == undefined || rltTbTypecd == '' || rltTbTypecd == undefined){
            layer.msg('操作异常，请重试', { time: 1500 });  return;
        }else if (bindTypecd == '1'){ //绑定类型代码=1:一车多票
            if(rltTbTypecd == '1'){
                //检查当前选中的关联单证记录,存在=false,不存在=true
                var checkResult =  checkSelectRltRecord(rows, _sasPassportRltServerAddress + '/checkByRltNo', 'seqNo');
                //核放单关联单证表.关联单证编号=选择的（保税核注清单表.）保税清单编号，查询核放单关联单证表
                if(!checkResult){ confirmMsg(rows); }
                else{ writeDataToRltAndDt(rows); }
            }else if(rltTbTypecd == '2'){
                //核放单关联单证表.关联单证编号=出入库表. 出入库单编号，查询出入库表
                var checkResult =  checkSelectRltRecord(rows, _sasPassportRltServerAddress + '/checkByRltNo', 'seqNo');
                if(!checkResult){ confirmMsg(rows); }
                else{ writeDataToRltAndDt(rows); }
            }else if(rltTbTypecd == '3'){
                //待定提货单表-提货单编号
                // confirmMsg(rows);
                layer.msg('该功能暂未开放,请耐心等待', { time: 1500 });
            }
        }else if(bindTypecd == '2'){ //绑定类型代码=2:一票一车
            if(rows.length > 1){ layer.msg('一票一车、一票多车的核放单只可有一条关联单证记录,请重新选择。', { time: 1500 });  return; }
            else if(rltTbTypecd == '1'){
                //检查当前选中的关联单证记录,存在=false,不存在=true
                var checkResult =  checkSelectRltRecord(rows, _sasPassportRltServerAddress + '/checkByRltNo','seqNo');
                //核放单关联单证表.关联单证编号=选择的（保税核注清单表.）保税清单编号，查询核放单关联单证表
                if(!checkResult){ confirmMsg(rows); }
                else{ writeDataToRltAndDt(rows); }
            }else if(rltTbTypecd == '2'){
                //核放单关联单证表.关联单证编号=出入库表. 出入库单编号，查询出入库表
                var checkResult =  checkSelectRltRecord(rows, _sasPassportRltServerAddress + '/checkByRltNo', 'seqNo');
                if(!checkResult){ confirmMsg(rows); }
                else{ writeDataToRltAndDt(rows); }
            }else if(rltTbTypecd == '3'){
                //待定提货单表-提货单编号
                // confirmMsg(rows);
                layer.msg('该功能暂未开放,请耐心等待', { time: 1500 });
            }
        }else{ //绑定类型代码=3:一票多车
            if(rows.length > 1){ layer.msg('一票一车、一票多车的核放单只可有一条关联单证记录,请重新选择。', { time: 1500 });  return; }
            writeDataToRltAndDt(rows);
        }
    });

    /**
     * 条件搜索
     */
	$('#rltSearch').click(function () {
        DataGridUtils.refresh(param);
    });

    /******************************初始化部分******************************/
    /*var id = Utils.search("id");*/

    var seqNo = Utils.search('seqNo');

    var ioTypecd = Utils.search('ioTypecd');

    var optype = Utils.search("optype");

    if(optype == 'add'){ //新增跳入页面
        if (seqNo == '' || seqNo == undefined){
            layer.msg("获取单据编号异常，请重试", { time: 1500 });
            $('#dtModalSave').attr('disabled','disabled');
        }else{
            $('input[name=seqNo]').val(seqNo);
            $('input[name=ioTypecd]').val(ioTypecd);
            initInvAndSasBsc();
        }
    }else {
        layer.msg("操作异常，请重试", { time: 1500 });
        $('#rltModalSave').remove();//移除crud按钮
    }
    commonInitialization();
});
/**
 * 公共部分初始化
 */
function commonInitialization() {
    //初始化日历控件
    Utils.initCalendar();
}
/**
 * 初始化保税核注清单表格./初始化出入库单表格
 */
function initInvAndSasBsc() {
    var ioTypecd = Utils.search('ioTypecd');
    var rltTbTypecd = Utils.search("rltTbTypecd");
    // $('#hidSearchParam').append('<input type="hidden" name="chkStatus" value="P">');//单据状态P-审批通过<条件已写在jsp页面>
    if(rltTbTypecd == '1'){//保税核注清单
        $('.inv_bsc').show();
        $('.sas_bsc').hide();
        $('#hidSearchParam').append('<input type="hidden" name="iEFlag" value="'+ioTypecd+'">');//进出标志代码=出入区标识
        param.url = _invBscServerAddress;
        param.columns = invBscColumns;
    }else if(rltTbTypecd == '2'){//出入库单
        $('.sas_bsc').show();
        $('.inv_bsc').hide();
        //出入库单类型--进出标识
        $('#hidSearchParam').append('<input type="hidden" name="stockTypecd" value="'+ioTypecd+'">');//出入库单类型-->入库/出库

        param.url = _sassasStockBscServerAddress + "?dclTypecd=3";
        param.columns = sassasStockBscColumns;
    }else if(rltTbTypecd == '3'){//提货单 -->待定
        param.url = '';
        param.columns = '';
    }
    param.gridId = "invBacTab";
    param.height = 280;
    DataGridUtils.initGridByUrl(param);
}
/**
 * 新增确认核放单关联表./检查当前选中的关联单证记录
 * 存在：false, 不存在：true
 */
function checkSelectRltRecord(rows, url ,attribute) {
    var flag = true;
    var rltInvtNo = $.map(rows, function (row) { return row[attribute]; });
    var rltNos = rltInvtNo.join(",");

    $.ajax({
        url: url,
        type: 'GET',
        async: false,
        data: {"rltNos": rltNos, "appId": $("#appId").val()},
        crossDomain: true,
        xhrFields: { withCredentials: true },
        success: function (response) {
            if (response.code == 1) {
                if (response.data != 0) flag = false;
            }else{
                layer.msg('关联单证记录获取失败,请重试', { time: 1500 });
            }
        },
        error: function (response) { layer.msg('关联单证记录获取失败,请重试', { time: 1500 }); }
    });
    return flag;
}
/**
 * 保存时确认信息
 */
function confirmMsg(rows) {
    var msg = '当前所选择的关联单证，已经在其它核放单中使用，' +
        '目前系统不支持车与票多对多关联，继续申请有可能退单，是否确认，继续？';

    parent.layer.confirm(msg, {
        btn: ['确定', '取消']
    }, function () {
        writeDataToRltAndDt(rows);
        parent.layer.closeAll('dialog');
    });
}
/**
 * 检查当前选中的核注清单或出入库单是否在当前的单据中存在
 * 存在true,不存在false
 * @param rows
 * @param attribute
 * @returns {boolean}
 */
function checkCurrentRltRecord(rows, url, attribute) {
    var flag = false;
    var seqNo = $('input[name=seqNo]').val();
    var rltInvtNo = $.map(rows, function (row) { return row[attribute]; });
    var rltNos = rltInvtNo.join(",");

    $.ajax({
        url: url,
        type: 'GET',
        async: false,
        data: {"seqNo": seqNo, "rltNos":rltNos, "appId": $("#appId").val()},
        xhrFields: { withCredentials: true },
        crossDomain: true,
        success: function (response) {
            if (response.code == 1) {
                if (response.data > 0) flag = true;
            }else{
                layer.msg('关联单证记录获取失败,请重试', { time: 1500 });
            }
        },
        error: function (response) {
            layer.msg('关联单证记录获取失败,请重试', { time: 1500 });
        }
    });
    return flag;
}

/**
 * 写入数据到核放单关联单证
 */
function writeDataToRltAndDt(rows) {
    var che = checkCurrentRltRecord(rows, _sasPassportRltServerAddress + '/checkCurrentRlt','seqNo');
    if(che){
        layer.alert('您选择的单据在当前核放单中已经存在,请重新选择。');
        return;
    }
    var id = Utils.search("id");
    var rltTbTypecd = Utils.search("rltTbTypecd");
    //获取关联表预录入编号，关联其子表<货物表>
    var seqNoUrl = "applyId="+$("#appId").val()+"&areaCode=490101&docType=A0503SeqNO&serverType=C";
    Utils.getBillCode(seqNoUrl,'etpsPreentNo','获取统一编号异常');
    var etpsPreentNo = $('#hidEtpsPreentNo').val();

    var sasPassportRltEntitys;
    var sasPassportDtEntitys;

    if(rltTbTypecd == '1'){//保税核注清单
        sasPassportRltEntitys = getInvBscData(rows);
        sasPassportDtEntitys = getInvDtData(rows);
    }else if(rltTbTypecd == '2'){//出入库单
        sasPassportRltEntitys = getSasBscData(rows);
        sasPassportDtEntitys = getSasDtData(rows);
    }else if(rltTbTypecd == '3'){//提货单 -->待定
        sasPassportRltEntitys = {};
        sasPassportDtEntitys = {};
    }
    if(sasPassportDtEntitys.length == 0){
        layer.msg('没有找到对应的货物单信息,请联系管理员。', { time: 1500 });
        return;
    }
    if(sasPassportRltEntitys.length == 0){
        layer.msg('关联单证信息获取失败,请重试', { time: 1500 });
        return;
    }
    var sasPass = {
        uid : id,
        masterCuscd : masterCuscd,//主管海关
        sasPassportRlts : sasPassportRltEntitys,
        sasPassportDts : sasPassportDtEntitys
    };
    $.ajax({
        url: _sasPassportRltServerAddress + '/addByList',
        dataType:'json',
        type: 'POST',
        contentType : 'application/json;charset=utf-8',
        data: JSON.stringify(sasPass),
        traditional:true,
        xhrFields: { withCredentials: true },
        crossDomain: true,
        success:function (result) {
            if(result.code == 1){
                layer.msg(result.message, { time :1500 },function () {
                    parent.window.location.reload();
                });
            }else{
                layer.msg(result.message,{ time :1500 });
            }
        },
        error:function (result) {
            layer.msg("保存失败",{ time :1500 });
        }
    });
}

/**
 * 获取核注清单bsc数据
 */
function getInvBscData(rows) {
    var rltTbTypecd = Utils.search('rltTbTypecd');
    var seqNo = $('input[name=seqNo]').val();

    //获取批量资源，用于批量保存
    var sasPassportRltEntitys = new Array();
    for (var i = 0; i < rows.length; i++) {
        var sasPassportRlt = {};
        var item = rows[i];
        sasPassportRlt['rltTbTypecd'] = rltTbTypecd;//关联单证类型
        sasPassportRlt['rltNo'] = item.seqNo;//关联清单编号-->保税清单编号
        sasPassportRlt['copEntNo'] = item.putrecNo;//企业备案号
        sasPassportRlt['bizopEtpsNm'] = item.inputCopName;//关联单证经营企业名称
        sasPassportRlt['chgTmsCnt'] = item.chgTmsCnt//变更次数
        sasPassportRlt['etpsPreentNo'] = item.invtPreentNo;//企业预录入编号
        sasPassportRlt['createBy'] = item.createBy;
        sasPassportRlt['createName'] = item.createName;
        sasPassportRlt['createTime'] = item.createTime;
        sasPassportRlt['updateBy'] = item.updateBy;
        sasPassportRlt['updateName'] = item.updateName;
        sasPassportRlt['updateTime'] = item.updateTime;

        sasPassportRlt['seqNo'] = seqNo;//单据编号，从核放单传入，关联三张表
        sasPassportRltEntitys.push(sasPassportRlt);
        masterCuscd = item.masterCuscd;//主管海关
    }
    return sasPassportRltEntitys;
}
/**
 * 获取核注清单dt数据
 * @param rows
 */
function getInvDtData(rows) {
    var seqNo = $('input[name=seqNo]').val();
    var sasPassportDtEntitys = new Array();
    var url = _invBscServerAddress + '/getStockDt';
    //获取批量关联单编号
    var invtNo = $.map(rows, function (row) { return row['seqNo']; });
    var invtNos = invtNo.join(",");
    //根据保税清单编号从InvDt中批量拉取数据
    $.ajax({
        url: url,
        type: 'GET',
        async: false,
        data: {'seqNoList': invtNos},
        xhrFields: { withCredentials: true },
        crossDomain: true,
        success: function (result) {//返回list集合
            if(result.code == 1){
                $.each(result.data,function (index,item) {
                    var sasPassportDt = {};
                    sasPassportDt['passportSeqno'] = item.gdsSeqno;//商品序号
                    sasPassportDt['passportNo'] = '';//核放单编号-->回执后产生，由回执反填
                    sasPassportDt['gdsMtno'] = item.gdsMtno;//商品料号
                    sasPassportDt['gdecd'] = item.gdecd;//商品编码
                    sasPassportDt['gdsNm'] = item.gdsNm;//商品名称
                    sasPassportDt['grossWt'] = item.grossWt;//货物毛重
                    sasPassportDt['netWt'] = item.netWt;//货物净重
                    sasPassportDt['dclUnitcd'] = item.dclUnitcd //申报计量单位
                    sasPassportDt['dclQty'] = item.dclQty;//申报数量
                    sasPassportDt['rltGdsSeqno'] = item.gdsSeqno;//关联商品序号
                    sasPassportDt['rltNo'] = item.seqNo;//关联单证编号
                    sasPassportDt['chgTmsCnt'] = item.chgTmsCnt;//变更次数
                    sasPassportDt['grossWt'] = item.grossWt;//毛重
                    sasPassportDt['netWt'] = item.netWt;//净重
                    sasPassportDt['createBy'] = item.createBy;
                    sasPassportDt['createName'] = item.createName;
                    sasPassportDt['createTime'] = item.createTime;
                    sasPassportDt['updateBy'] = item.updateBy;
                    sasPassportDt['updateName'] = item.updateName;
                    sasPassportDt['updateTime'] = item.updateTime;

                    sasPassportDt['seqNo'] = seqNo;//单据编号，从核放单传入，关联三张表
                    sasPassportDt['rltNo'] = item.seqNo;//关联单证编号,从出入库表头获得，关联两张表
                    sasPassportDtEntitys.push(sasPassportDt);
                });
            }else{
                layer.msg(result.message,{ time :1500 });
            }
        },
        error: function (response) {
            layer.msg('关联单证信息获取失败,请重试', { time: 1500 });
        }
    });
    return sasPassportDtEntitys;
}
/**
 * 获取出入库单bsc数据
 * @param rows
 */
function getSasBscData(rows) {
    var rltTbTypecd = Utils.search('rltTbTypecd');
    var seqNo = $('input[name=seqNo]').val();

    var sasPassportRltEntitys = new Array();
    for (var i = 0; i < rows.length; i++) {
        var sasPassportRlt = {};
        var item = rows[i];
        sasPassportRlt['rltTbTypecd'] = rltTbTypecd;//关联单证类型
        // sasPassportRlt['rltNo'] = item.sasStockNo;//暂时预留
        sasPassportRlt['rltNo'] = item.seqNo;//关联清单编号-->出入库单编号
        sasPassportRlt['copEntNo'] = item.sasDclNo;//企业备案号
        sasPassportRlt['bizopEtpsNm'] = item.inputCopName;//企业名称
        sasPassportRlt['chgTmsCnt'] = item.chgTmsCnt//变更次数
        sasPassportRlt['etpsPreentNo'] = item.etpsPreentNo;//企业预录入编号
        sasPassportRlt['createBy'] = item.createBy;
        sasPassportRlt['createName'] = item.createName;
        sasPassportRlt['createTime'] = item.createTime;
        sasPassportRlt['updateBy'] = item.updateBy;
        sasPassportRlt['updateName'] = item.updateName;
        sasPassportRlt['updateTime'] = item.updateTime;

        sasPassportRlt['seqNo'] = seqNo;//单据编号，从核放单传入，关联三张表
        sasPassportRltEntitys.push(sasPassportRlt);
        masterCuscd = item.masterCuscd;//主管海关
    }
    return sasPassportRltEntitys;
}
/**
 * 获取出入库单dt数据
 * @param rows
 */
function getSasDtData(rows) {
    var seqNo = $('input[name=seqNo]').val();
    var sasPassportDtEntitys = new Array();
    var url = _sassasStockBscServerAddress + '/getStockCusDt';
    //获取批量关联单编号
    var sasStockNo = $.map(rows, function (row) { return row['seqNo']; });
    var sasStockNos = sasStockNo.join(",");
    //出入库单编号从SasDt中批量拉取数据
    $.ajax({
        url: url,
        type: 'GET',
        async: false,
        data: {'seqNoList': sasStockNos},
        xhrFields: { withCredentials: true },
        crossDomain: true,
        success: function (result) {//返回list集合
            if(result.code == 1){
                $.each(result.data,function (index,item) {
                     var sasPassportDt = {};
                     sasPassportDt['passportSeqno'] = item.sasStockSeqno;//商品序号
                     sasPassportDt['passportNo'] = '';//核放单编号-->回执后产生，由回执反填
                     sasPassportDt['gdsMtno'] = item.gdsMtno;//商品料号
                     sasPassportDt['gdecd'] = item.gdecd;//商品编码
                     sasPassportDt['gdsNm'] = item.gdsNm;//商品名称
                     sasPassportDt['grossWt'] = item.grossWt;//货物毛重
                     sasPassportDt['netWt'] = item.netWt;//货物净重
                     sasPassportDt['dclUnitcd'] = item.dclUnitcd //申报计量单位
                     sasPassportDt['dclQty'] = item.dclQty;//申报数量
                     sasPassportDt['rltGdsSeqno'] = item.rltGdsSeqno;//关联商品序号
                     sasPassportDt['chgTmsCnt'] = item.chgTmsCnt;//变更次数
                     sasPassportDt['grossWt'] = item.grossWt;//毛重
                     sasPassportDt['netWt'] = item.netWt;//净重
                     sasPassportDt['createBy'] = item.createBy;
                     sasPassportDt['createName'] = item.createName;
                     sasPassportDt['createTime'] = item.createTime;
                     sasPassportDt['updateBy'] = item.updateBy;
                     sasPassportDt['updateName'] = item.updateName;
                     sasPassportDt['updateTime'] = item.updateTime;
                     sasPassportDt['etpsPreentNo'] = item.etpsPreentNo;//企业预录入编号

                     sasPassportDt['seqNo'] = seqNo;//单据编号，从核放单传入，关联三张表
                     sasPassportDt['rltNo'] = item.seqNo;//关联单证编号,从出入库表头获得，关联两张表
                     sasPassportDtEntitys.push(sasPassportDt);
                 });
            }//此处不对错误作处理，在方法调用处统一处理
        },
        error: function (response) {
            layer.msg('关联单证信息获取失败,请重试', { time: 1500 });
        }
    });
    return sasPassportDtEntitys;
}
