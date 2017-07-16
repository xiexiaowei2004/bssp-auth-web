//服务器地址
_serverAddress = _server+"/inv";
//跳转页面
_jumpPage = baselocation+"/views/ems/bondInvtBsc/";
var heardData;
var optype=Utils.search("optype");
var id=Utils.search("id");
var seqNo;
//var bondInvtTypecd =  Utils.search("bondInvtTypecd");
var docType =  Utils.search("docType");//业务类型
var iEFlag1 =  Utils.search("iEFlag1");//加工、物流、加贸 进出菜单标志
var putrecNo = Utils.search("putrecNo"); //集报出入区、简单加工申请表账号
var applyNo = Utils.search("applyNo"); //集报出入区、简单加工申请表 申请表编号
var invTab = Utils.search("invTab");
var isDeclar = false;
//表体类型
var listType = ["sas","img","file"];
var urlParam;
$(function(){
    if(docType!='A0604' && docType!='A0605'&& docType!='A0606'){
        $("#sasHead").remove();
        $("#sasTab").remove();
        $("#ljHead").remove();
        $("#ljTab").remove();
        $("#cpHead").remove();
        $("#cpTab").remove();
        $("#imgHead a").click();
    }else if(docType=='A0604' || docType=='A0605'){
        $("#ljHead").remove();
        $("#ljTab").remove();
        $("#cpHead").remove();
        $("#cpTab").remove();
    }else if(docType=='A0606'){
        $("#sasHead").remove();
        $("#sasTab").remove();
        $("#imgHead").remove();
        $("#imgTab").remove();
        $("#exgHead").remove();
        $("#exgTab").remove();
        $("#ljHead a").click();
    }
    if(optype=="view"){
        FormUtils.setPageView();
        $("#save").hide();
        $("#declare").hide();
        $.each(listType, function (index, field) {
            if (field != "") {
                $("#" + field + "add").hide();
                $("#" + field + "mod").hide();
                $("#" + field + "del").hide();
                $("#" + field + "gen").hide();
                $("#" + field + "refresh").hide();
            }
        });
    }
    //初始化日历控件
    Utils.initCalendar();
    //初始化下拉
    initDropDown();
    //页面加载设置表单需要验证
    //Validator.setValidateParam("dataForm");
    $('#tab li:eq(0) a').tab('show');
    //绑定事件
    BindEvent();
    //新增页面设置默认值
    if(id==null){
        SetDefault();
        if(docType=="A0601" || docType=="A0602" || docType=="A0603"){
            initCusNo();//初始化账册编号
        }
    }
    else{
        $("#uid").val(id);
        $("#putrecNo").attr("disabled","disabled");//账册编号
    }
})

//绑定事件
function BindEvent(){
    /**************设置显示、隐藏事件*****************/
    $("#headHide").click(function(){
        SetStatus("head",false)
    });
    $("#headShow").click(function(){
        SetStatus("head",true)
    });
    $("#detailHide").click(function(){
        SetStatus("detail",false)
    });
    $("#detailShow").click(function(){
        SetStatus("detail",true)
    });

    /**************设置显示、隐藏表头事件*****************/
    /********************返回事件********************/
    $("#reback").click(function(){
        parent.Utils.hideEditDiv();
    });
    /****************绑定保存事件*************************/
    $("#save").click(function(){
        isDeclar = false;
        if(docType=="A0601" || docType=="A0602" || docType=="A0603"){
            if($("#putrecNo").val()==null || $("#putrecNo").val()==""){
                layer.msg("账册编号不能为空,请重新选择！", {time: 1500});
                return;
            }
        }
        if(($("#mtpckEndprdMarkcd").val()==null || $("#mtpckEndprdMarkcd").val()=="")&& docType!='A0606'){
                layer.msg("料件成品标志不能为空,请重新选择！", {time: 1500});
                return;
            }

        _serverAddress = _server+"/inv";
        if(id==null){
            var url = "/invBsc/list/add";
        }else{
            var url = "/invBsc/list/update";
        }
        FormUtils.save("dataForm",url,true);
    });
    //申报
    $("#declare").click(function(){
        if(docType=="A0601" || docType=="A0602" || docType=="A0603"){
            if($("#putrecNo").val()==null || $("#putrecNo").val()==""){
                layer.msg("账册编号不能为空,请重新选择！", {time: 1500});
                return;
            }
        }
        if(($("#mtpckEndprdMarkcd").val()==null || $("#mtpckEndprdMarkcd").val()=="")&& docType!='A0606'){
            layer.msg("料件成品标志不能为空,请重新选择！", {time: 1500});
            return;
        }
        isDeclar = true;
        //页面加载设置表单需要验证
        if(!Validator.validate("dataForm")) return;
        _serverAddress = _server+"/inv";
        var url = "/invBsc/list/submit";
        FormUtils.save("dataForm", url,true);
       // parent.$("#refresh").click();
    });
    $("#putrecNo").change(function () {
        var url;
        if($("#docType").val()=='A0603'){//物流
            url = _server+"/ems_bws/emsBwsCusBsc/list/selectByBwsNo?bwsNo="+this.value;
        }else{
            url = _server+"/ems/emsCusBsc/list/selectByEmsNo?emsNo="+this.value;
        }
        $.ajax({
            url: url,
            type: 'get',
            dataType: 'json',
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (response) {
                if(response.code==1){
                    initCusHeadInfo(response);//初始化账册表头信息
                }
            },
            error: function (response) {
                layer.msg("获取账册表头数据源失败", {time: 1500});
            }
        });
    });
    //报关标志选中表单控制
    $("#dclcusFlag").change(function(){
        if(optype=='view'){
                return;
            }
         if(this.value=='2'){
          /*   $("#dclcusTypecd").attr("disabled",true);
             $("#decType").attr("disabled",true);*/
             $("#corrEntryDclEtpsno ").attr("readonly","readonly");
             $("#rltEntryRcvgdEtpsno").attr("readonly","readonly");
             $("#rltEntryBizopEtpsno").attr("readonly","readonly");
             $("#rltEntryDclEtpsno").attr("readonly","readonly");
             $("#entryNo").attr("readonly","readonly");
             $("#rltEntryNo").attr("readonly","readonly");
             $("#entryDclTime").attr("readonly","readonly");

         /*    $("#listType").removeAttr("disabled");
             $("#rltInvtNo").removeAttr("readonly");
             $("#rltPutrecNo").removeAttr("readonly");
             $("#applyNo").removeAttr("readonly");
*/
         }else {
                 $("#dclcusTypecd").removeAttr("disabled");
                 $("#decType").removeAttr("disabled");
                 $("#corrEntryDclEtpsno ").removeAttr("readonly");
                 $("#rltEntryRcvgdEtpsno").removeAttr("readonly");
                 $("#rltEntryBizopEtpsno").removeAttr("readonly");
                 $("#rltEntryDclEtpsno").removeAttr("readonly");
                 $("#entryNo").removeAttr("readonly");
                 $("#rltEntryNo").removeAttr("readonly");
                 $("#entryDclTime").removeAttr("readonly");
                 $("#listType").removeAttr("disabled");
                 $("#rltInvtNo").removeAttr("readonly");
                 $("#rltPutrecNo").removeAttr("readonly");
                 $("#applyNo").removeAttr("readonly");

             if(this.value=='1'){  //报关标志为报关
              /*   $("#listType").attr("disabled",true);
                 $("#rltInvtNo").attr("readonly","readonly");
                 $("#rltPutrecNo").attr("readonly","readonly");
                 $("#applyNo").attr("readonly","readonly");*/
                 if($("#dclcusTypecd").val()=='1'){//“报关类型”为“对应报关”回填清单申报三项
                     $("#corrEntryDclEtpsno").val($("#dclEtpsno").val());
                     $("#corrEntryDclEtpsSccd").val( $("#dclEtpsSccd").val());
                     $("#corrEntryDclEtpsNm").val($("#dclEtpsNm").val());
                  /*   $("#listType").attr("disabled",true);
                     $("#rltInvtNo").attr("readonly","readonly");
                     $("#rltPutrecNo").attr("readonly","readonly");*/
                     $("#rltEntryRcvgdEtpsno").attr("readonly","readonly");
                     $("#rltEntryBizopEtpsno").attr("readonly","readonly");
                     $("#rltEntryDclEtpsno").attr("readonly","readonly");
                     $("#rltEntryNo").attr("readonly","readonly");

                 }else if($("#dclcusTypecd").val()=='2'){//关联报关
                     $("#corrEntryDclEtpsno").val("");
                     $("#corrEntryDclEtpsSccd").val("");
                     $("#corrEntryDclEtpsNm").val("");
                     //$("#listType").attr("disabled",true);
                    // $("#rltInvtNo").attr("readonly","readonly");
                   //  $("#rltPutrecNo").attr("readonly","readonly");
                     $("#corrEntryDclEtpsno").attr("readonly","readonly");
                     $("#entryNo").attr("readonly","readonly");
                 }
             }
         }
        }
    );
   //报关类型选择
    $("#dclcusTypecd").change(function(){
            if(optype=='view'){
                return;
            }
            if(this.value=='1'){
                if($("#dclcusFlag").val()=='1'){
                    $("#corrEntryDclEtpsno").val($("#dclEtpsno").val());
                    $("#corrEntryDclEtpsSccd").val( $("#dclEtpsSccd").val());
                    $("#corrEntryDclEtpsNm").val($("#dclEtpsNm").val());
                    /*$("#listType").attr("disabled",true);
                    $("#rltInvtNo").attr("readonly","readonly");
                    $("#rltPutrecNo").attr("readonly","readonly");*/
                    $("#rltEntryRcvgdEtpsno").attr("readonly","readonly");
                    $("#rltEntryBizopEtpsno").attr("readonly","readonly");
                    $("#rltEntryDclEtpsno").attr("readonly","readonly");
                    $("#rltEntryNo").attr("readonly","readonly");
                    $("#corrEntryDclEtpsno").removeAttr("readonly");
                    $("#entryNo").removeAttr("readonly");
                }
            }else if(this.value=='2'){
                if($("#dclcusFlag").val()=='1'){
                    $("#corrEntryDclEtpsno").val("");
                    $("#corrEntryDclEtpsSccd").val("");
                    $("#corrEntryDclEtpsNm").val("");
                    $("#corrEntryDclEtpsno").attr("readonly","readonly");
                    $("#entryNo").attr("readonly","readonly");
                    $("#rltEntryRcvgdEtpsno").removeAttr("readonly");
                    $("#rltEntryBizopEtpsno").removeAttr("readonly");
                    $("#rltEntryDclEtpsno").removeAttr("readonly")
                    $("#rltEntryNo").removeAttr("readonly")

                }
            }else if(this.value=="") {
               $("#corrEntryDclEtpsno").removeAttr("readonly");
                $("#rltEntryRcvgdEtpsno").removeAttr("readonly");
                $("#rltEntryBizopEtpsno").removeAttr("readonly");
                $("#rltEntryDclEtpsno").removeAttr("readonly")
                $("#entryNo").removeAttr("readonly");
                $("#rltEntryNo").removeAttr("readonly")
    /*            $("#listType").removeAttr("disabled")
                $("#rltInvtNo").removeAttr("readonly")
                $("#rltPutrecNo").removeAttr("readonly")*/

            }
        }
    );

    // 申报单位代码绑定事件
    $("#dclEtpsno").blur(function () {
        var tradeCode = $(this).val();
        if (tradeCode == "") {
            return;
        }
        $.ajax({
            url: _server + "/cop/copEnt/list/getCopEnt",
            type: 'post',
            dataType: 'json',
            data: {"tradeCode": tradeCode, "appId": $("#appId").val()},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (result) {
                if (result.code == 1) {
                    var data = result.data;
                    SetValue("dclEtpsSccd", data.copGbCode);
                    SetValue("dclEtpsNm", data.entName);
                    $('#dataForm').data('bootstrapValidator').updateStatus('dclEtpsNm', 'NOT_VALIDATED',null).validateField('dclEtpsNm');
                } else {
                    layer.msg("申报单位代码不存在");
                }
            },
            error: function (result) {

            }
        });
    });

    // 收发货单位代码绑定事件
    $("#rcvgdEtpsno").blur(function () {
        var tradeCode = $(this).val();
        if (tradeCode == "") {
            return;
        }
        $.ajax({
            url: _server + "/cop/copEnt/list/getCopEnt",
            type: 'post',
            dataType: 'json',
            data: {"tradeCode": tradeCode, "appId": $("#appId").val()},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (result) {
                if (result.code == 1) {
                    var data = result.data;
                    SetValue("rvsngdEtpsSccd", data.copGbCode);
                    SetValue("rcvgdEtpsNm", data.entName);
                } else {
                    layer.msg("收发货代码不存在");
                }
            },
            error: function (result) {

            }
        });
    });

    //关联报关单收发货人代码
    $("#rltEntryRcvgdEtpsno").blur(function () {
        var tradeCode = $(this).val();
        if (tradeCode == "") {
            return;
        }
        $.ajax({
            url: _server + "/cop/copEnt/list/getCopEnt",
            type: 'post',
            dataType: 'json',
            data: {"tradeCode": tradeCode, "appId": $("#appId").val()},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (result) {
                if (result.code == 1) {
                    var data = result.data;
                    SetValue("rltEntryRvsngdEtpsSccd", data.copGbCode);
                    SetValue("rltEntryRcvgdEtpsNm", data.entName);
                } else {
                    layer.msg("关联报关单收发货人代码不存在");
                }
            },
            error: function (result) {

            }
        });
    });

    //关联报关单申报单位代码
    $("#rltEntryDclEtpsno").blur(function () {
        var tradeCode = $(this).val();
        if (tradeCode == "") {
            return;
        }
        $.ajax({
            url: _server + "/cop/copEnt/list/getCopEnt",
            type: 'post',
            dataType: 'json',
            data: {"tradeCode": tradeCode, "appId": $("#appId").val()},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (result) {
                if (result.code == 1) {
                    var data = result.data;
                    SetValue("rltEntryDclEtpsSccd", data.copGbCode);
                    SetValue("rltEntryDclEtpsNm", data.entName);
                } else {
                    layer.msg("关联报关单申报单位代码不存在");
                }
            },
            error: function (result) {

            }
        });
    });

    //关联报关单生产销售代码
    $("#rltEntryBizopEtpsno").blur(function () {
        var tradeCode = $(this).val();
        if (tradeCode == "") {
            return;
        }
        $.ajax({
            url: _server + "/cop/copEnt/list/getCopEnt",
            type: 'post',
            dataType: 'json',
            data: {"tradeCode": tradeCode, "appId": $("#appId").val()},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (result) {
                if (result.code == 1) {
                    var data = result.data;
                    SetValue("rltEntryBizopEtpsSccd", data.copGbCode);
                    SetValue("rltEntryBizopEtpsNm", data.entName);
                } else {
                    layer.msg("关联报关单生产销售代码不存在");
                }
            },
            error: function (result) {

            }
        });
    });

    //对应报关单位代码
    $("#corrEntryDclEtpsno").blur(function () {
        var tradeCode = $(this).val();
        if (tradeCode == "") {
            return;
        }
        $.ajax({
            url: _server + "/cop/copEnt/list/getCopEnt",
            type: 'post',
            dataType: 'json',
            data: {"tradeCode": tradeCode, "appId": $("#appId").val()},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (result) {
                if (result.code == 1) {
                    var data = result.data;
                    SetValue("corrEntryDclEtpsSccd", data.copGbCode);
                    SetValue("corrEntryDclEtpsNm", data.entName);

                } else {
                    layer.msg("对应报关单位代码不存在");
                }
            },
            error: function (result) {

            }
        });
    });

    //出入库单新增
    $("#sasadd").click(function(){
        if(seqNo == null){
            layer.msg("请先保存表头信息", {time: 1500});
            return;
        }
        showPage('sas','出入库单-新增','../bondInvtImg/sasPassportRltModal.jsp?docType='+$("#docType").val()+'&iEFlag1='+$("#iEFlag1").val()+'&mtpckEndprdMarkcd='+heardData.mtpckEndprdMarkcd+'&seqNo='+heardData.seqNo+'&putrecNo='+heardData.putrecNo+'&applyNo='+heardData.applyNo);
    });

    //出入库单删除
    $("#sasdel").click(function(){
        if(seqNo == null){
            layer.msg("请先保存表头信息", {time: 1500});
            return;
        }
        param.gridId="sasTable";
        param.toolbar="sasToolbar";
        param.listUrl=_server+"/sas/sasStockBsc/list?rltBondInvtNo="+seqNo;
        param.serverUrl = _server+"/inv/deleteSasList";
        deleteSasGrid(param);
    });
    var buttons = ["img","lj","cp","file"];
    var titleParam = {img: "清单商品信息", lj:"加工前商品信息",cp:"加工后商品信息",file: "随附单证信息"};
    $.each(buttons, function (index, field) {
        var id = field;
        if (id != "") {
            var title = titleParam[id];
            //绑定新增事件
            $("#" + id + "add").click(function () {
               addDtDetail(id,title+"-新增");
            });
            //绑定修改事件
            $("#" + id + "mod").click(function () {
                modifyDtDetail(id,title+"-修改",'mod');
            });
            $("#" + id + "view").click(function () {
                modifyDtDetail(id,title+"-查阅",'view');
            });
            $("#" + id + "del").click(function () {
               if(id!='file'){
                   delDtDetail(id);
               }
            });
            $("#" + id + "refresh").click(function () {
                if(seqNo == null){
                    layer.msg("请先保存表头信息", {time: 1500});
                    return;
                }
                refreshGrid(id);
            });
        }
    });

   function  addDtDetail(id,title) {
       if(seqNo == null){
           layer.msg("请先保存表头信息", {time: 1500});
           return;
       }
       if(id!='file'){
           showPage(id,title,'../bondInvtImg/putrec_select.jsp?docType='+$("#docType").val()+'&iEFlag1='+$("#iEFlag1").val()+'&mtpckEndprdMarkcd='+heardData.mtpckEndprdMarkcd+'&seqNo='+heardData.seqNo+'&putrecNo='+heardData.putrecNo+'&btnFlag='+id);
       }else{
           showPage(id,title,'../bondInvAcmpFormDt/edit.jsp?optype=add&chgTmsCnt=0&id='+heardData.seqNo+'&bondInvtNo='+$("#bondInvtNo").val());
       }

   }
   function  modifyDtDetail(ids,title,oprType){
       if(seqNo == null){
           layer.msg("请先保存表头信息", {time: 1500});
           return;
       }
       var rows = $("#"+ids+"Table").bootstrapTable('getSelections');
       if (rows.length == 0) {
           layer.msg("请选择要修改的记录", {time: 1500});
           return;
       }
       var id = $.map(rows, function (row) {
           return row["uid"];
       });
       if(ids=='file'){
           var uid = rows[0]["uid"];
           showPage('file','随附单证-修改','../bondInvAcmpFormDt/edit.jsp?optype='+oprType+'&id='+uid);
       }else{
           showPage(ids,title,'../bondInvtImg/edit.jsp?docType='+$("#docType").val()+'&iEFlag1='+$("#iEFlag1").val()+'&id='+id+'&uid='+heardData.uid+'&mtpckEndprdMarkcd='+heardData.mtpckEndprdMarkcd+'&seqNo='+heardData.seqNo+'&putrecNo='+heardData.putrecNo+'&oprType='+oprType+'&btnFlag='+ids+'&invTab='+invTab);
       }

   }

function delDtDetail(id){
    if(seqNo == null){
        layer.msg("请先保存表头信息", {time: 1500});
        return;
    }
    param.gridId=id+"Table";
    param.toolbar=id+"Toolbar";
    DeleteGridData(id,urlParam);
}

    //生成报关商品
    $("#imggen").click(function(){
        if(seqNo == null){
            layer.msg("请先保存表头信息", {time: 1500});
            return;
        }
        var dclcusFlag = $("#dclcusFlag").val();//1报关、2非报关
        if(dclcusFlag!=1){
            layer.msg("不是报关标志，不能生成报关商品", {time: 1500});
            return;
        }
        var modal = {
            area: ["400px","200px"],
            title: '合并类型选择',
            url: _jumpPage + 'selectTypeModal.jsp?seqNo='+seqNo,
        };
        Utils.showModalDialog(modal);
    });

    //附件删除
    $("#filedel").click(function(){

        if(seqNo == null){
            layer.msg("请先保存表头信息", {time: 1500});
            return;
        }
        var rows = $("#fileTable").bootstrapTable('getSelections');
        if (rows.length == 0) {
            layer.msg("请选择要删除的记录", {time: 1500});
            return;
        }
        var idList = rows[0]["uid"];
        layer.confirm( '确定要删除所选记录吗？', {
            btn: ['确定', '取消'] //按钮
        }, function () {
            $.ajax({
                url: _server + "/inv/invAcmpFormDt/list/deleteByList",
                type: 'post',
                dataType: 'json',
                data: {"idList": idList,"appId": $("#appId").val()},
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true,
                success: function (result) {
                    if (result.code == 1) {
                        layer.msg("删除成功", {icon: 1, time: 1500}, function () {
                            refreshGrid("file");
                        });
                    }
                },
                error: function (result) {
                    layer.msg("删除失败", {time: 1500});
                }
            });
        });
    });
/*    //附件查阅
    $("#fileview").click(function(){
        if(seqNo == null){
            layer.msg("请先保存表头信息", {time: 1500});
            return;
        }
        var rows = $("#fileTable").bootstrapTable('getSelections');
        if (rows.length == 0) {
            layer.msg("请选择记录", {time: 1500});
            return;
        }
        var uid = rows[0]["uid"];
        showPage('file','随附单证-查阅','../bondInvAcmpFormDt/edit.jsp?optype=view&id='+uid);
    });*/

    //附件刷新
/*    $("#filerefresh").click(function(){
        if(seqNo == null){
            layer.msg("请先保存表头信息", {time: 1500});
            return;
        }
        refreshGrid("file");
    });*/
}


function showPage(pageId,title,url){
    var modelParam={};
    var height;
    var width = $(".container").width()+"px";
    if(title=="清单商品信息-修改" || title=='清单商品信息-查阅' || title=='加工前商品-查阅' || title=='加工后商品-查阅'){
        height = "480px";
    }else if(title=='出入库单-新增'){
        height = "650px";
    }else{
        height="710px";
    }

    modelParam.area = [];
    modelParam.area.unshift(width,height);
    modelParam.title=title;
    modelParam.id=pageId;
    //传入单据编号
    if(url.indexOf("?")==-1)
        url+="?seqNo="+seqNo;
    else
        url+="&seqNo="+seqNo;
    modelParam.url=url;
    //Utils.showModel(modelParam);
    Utils.showModalDialog(modelParam);
}
//设置展开、收起
function SetStatus(id,isShow){
    if(isShow){
        $(Utils.stringFormat("#{0}Show",id)).hide();
        $("#"+id).show();
        $(Utils.stringFormat("#{0}Hide",id)).show();
    }
    else{
        $(Utils.stringFormat("#{0}Hide",id)).hide();
        $("#"+id).hide();
        $(Utils.stringFormat("#{0}Show",id)).show();
    }
}
//设置默认值
function SetDefault(){
    $("#docType").val(docType) ;
    $("#iEFlag1").val(iEFlag1);
    //设置日期
    var date=DateUtil.dateToStr("yyyy-MM-dd");
    $("#decTime").val(date);
    $("#invtDclTime").val(date);
}
//标签设置值
function SetValue(id,value){
    $("#"+id).val(value);
}
function initDropDown(){
    //初始化下拉控件
    Utils.setCodesDropDown("INVT_STUCD,IMPEXP_MARKCD,MTPCK_TYPECD,ENTRY_STUCD,DCLCUS_FLAG,DCLCUS_TYPECD,BOND_INVT_TYPECD,LIST_TYPE,DEC_TYPE");
    Utils.setParamDropDown("codCusCustomsfec,codCusCustomsrel,codCusTrade,codCusTransf,codCusCountry,codStdAreaCode");
/*    //获取字典的集合
    var dicData = "INVT_STUCD,IMPEXP_MARKCD,MTPCK_TYPECD,ENTRY_STUCD,DCLCUS_FLAG,DCLCUS_TYPECD,BOND_INVT_TYPECD,LIST_TYPE,DEC_TYPE";
    //获取参数代码表的集合
    var codesData = "codCusCustomsfec,codCusCustomsrel,codCusTrade,codCusTransf,codCusCountry,codStdAreaCode";
    Utils.setDropDown(dicData, codesData);*/
}

//行双击
function __onDblClickRow(rowdata, rowobj) {
   var bizType =  rowdata.bizType;
   var mtpckEndprdMarkcd=  rowdata.mtpckEndprdMarkcd;
   var title;
   var btn;
   if (typeof (bizType)== "undefined"){
       if(seqNo == null){
           layer.msg("请先保存表头信息", {time: 1500});
           return;
       }
       if (docType=='A0606'){
           if(typeof (mtpckEndprdMarkcd) == "undefined"){
               var rows = $("#cpTable").bootstrapTable('getSelections');
               title="加工后商品-查阅";
               btn='cp';
           }else{
               var rows = $("#ljTable").bootstrapTable('getSelections');
               title="加工前商品-查阅";
               btn='lj';
           }
       }else{
           var rows = $("#imgTable").bootstrapTable('getSelections');
           title="清单商品信息-查阅";
           btn='img';
       }

       if (rows.length == 0) {
           layer.msg("请选择要查阅的记录", {time: 1500});
           return;
       }
       var id = $.map(rows, function (row) {
           return row["uid"];
       });
       showPage(btn,title,'../bondInvtImg/edit.jsp?docType='+$("#docType").val()+'&iEFlag1='+$("#iEFlag1").val()+'&id='+id+'&uid='+heardData.uid+'&mtpckEndprdMarkcd='+heardData.mtpckEndprdMarkcd+'&seqNo='+heardData.seqNo+'&putrecNo='+heardData.putrecNo+'&oprType=view&btnFlag='+btn+'&invTab='+invTab);
   }

}

//初始化账册编号
function  initCusNo(){
    var url;
    if($("#docType").val()=="A0601"){//加工
        url = _server+"/ems/emsCusBsc/list/emsNoList?emsTypecd=2";
    }else if($("#docType").val()=="A0602"){
        url = _server+"/ems/emsCusBsc/list/emsNoList?emsTypecd=1";
    }else if($("#docType").val()=="A0603"){
        url = _server+"/ems_bws/emsBwsCusBsc/list/bwsNoList";
    }
    $.ajax({
        url: url,
        type: 'get',
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (response) {
            console.log(response);
            $("#putrecNo").select2({data: response.data, lang: 'zh-CN', allowClear: true,placeholder:""});
            $("#putrecNo").select2().val(null).trigger("change");
        },
        error: function (response) {
            layer.msg("获取账册数据源失败", {time: 1500});
        }
    });
}

//初始化账册表头信息
function initCusHeadInfo(response) {
    SetValue("bizopEtpsno",response.data.bizopEtpsno);//经营单位代码
    SetValue("bizopEtpsSccd",response.data.bizopEtpsSccd);//经营单位社会信用代码
    SetValue("bizopEtpsNm",response.data.bizopEtpsNm);//经营单位名称
}

/*
 * 表体数据保存后刷新列表
 */
function refreshGrid(tableId) {
    if(seqNo == null){
        layer.msg("请先保存表头信息", {time: 1500});
        return;
    }
    var param = {};
    param.gridId = tableId + "Table";
    var url = GetUrlByType(tableId);
    if (url != "")
        DataGridUtils.refresh(param);
}


/*
 * 根据类型设置相应的Url
 */
function GetUrlByType(type) {
    var url = "";
    switch (type) {
        case "sas":
            url = _server + "/sas/sasStockBsc/list?rltBondInvtNo="+seqNo;
            break;
        case "img":
                url = _server + "/inv/invImg/list";//料件
            break;
        case "lj":
            url = _server + "/inv/invImg/list";//加工前商品
            break;
        case "cp":
            url = _server + "/inv/invImg/list";//加工后商品
            break;
        case "exg":
            url = _server + "/inv/invDeclare/list";//报关单
            break;
        case "file":
            url = _server + "/inv/invAcmpFormDt/list";//随单附证
            break;
        default:
            url = _server + "/inv/invBsc/list/";//表头
            break;
    }
    return url;
}

/**
 * 批量删除表格数据
 */
function deleteSasGrid (param) {
    param.gridId = param.gridId || "table";
    param.idField = param.idField || "uid";
    var rows = $('#' + param.gridId).bootstrapTable('getSelections');
    if (rows.length == 0) {
        layer.msg("请选择要删除的记录", {time: 1500});
        return;
    }
    //拼接主键
    var id = $.map(rows, function (row) {
        return row[param.idField];
    });
    var idList = id.join(",");
    layer.confirm('确定要删除所选记录吗？', {
        btn: ['确定', '取消'] //按钮
    }, function () {
        //调用后台服务，执行删除
        $.ajax({
            url: param.serverUrl,
            type: 'post',
            data: {"idList": idList, "appId": $("#appId").val()},
            dataType: 'json',
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (result) {
                if (result.code == 1) {
                    refreshGrid("sas");
                    refreshGrid("img");
                    refreshGrid("exg");
                    layer.closeAll('dialog');
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
}