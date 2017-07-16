//服务器地址
_serverAddress = _server+"/inv/invBsc/list";
//跳转页面
_jumpPage = baselocation+"/views/ems/bondInvtBsc/";
//单据状态-暂存、审批不通过、入库失败
var status = "S、N、2";
var docType =  Utils.search("docType");//业务类型
var iEFlag1 =  Utils.search("iEFlag1");//出入区标志
$("#docType").val(docType);
$("#iEFlag1").val(iEFlag1);
var areainOriactNo;
var sasDclNo;
var tab = 'invTab';

//操作数组
columns=[
    { title: "单选",field: "select",radio: true,align: "center",formatter:function(value,row,index){
        param.transParam="seqNo,orgNo";
    }},
    { title: "保税清单编号",field: "bondInvtNo",align: "center",sortable: true,order: "desc"},
    { title: "企业内部编号",field: "etpsInnerInvtNo",align: "center",sortable: true },
    { title: "清单申报日期",field: "invtDclTime",align: "center",sortable: true,formatter:function(value,row,index){
        fieldValue = value.replace(/-/g,"/");
        if(docType=="A0602"){
            fieldValue=DateUtil.dateToStr("yyyy-MM-dd",new Date(fieldValue));
        }else{
            fieldValue=DateUtil.dateToStr("yyyy-MM-dd HH:mm:ss",new Date(fieldValue));
        }
        return fieldValue;
    } },
    { title: "备案编号",field: "putrecNo",align: "center",sortable: true },
    { title: "清单类型",field: "bondInvtTypecdnm",align: "center",sortable: true },
    { title: "监管方式",field: "supvModecdName",align: "center",sortable: true },
    { title: "单据状态",field: "chkStatusnm",align: "left",sortable: true },
    { title: "回执状态",field: "retChannel",align: "left",sortable: true },
    { title: "操作时间",field: "decTime",align: "center",sortable: true ,formatter:function(value,row,index){
        fieldValue = value.replace(/-/g,"/");
        fieldValue=DateUtil.dateToStr("yyyy-MM-dd HH:mm:ss",new Date(fieldValue));
        return fieldValue;
    }},
    { title: "申报单位代码",field: "dclEtpsno",align: "center",sortable: true},
    { title: "申报单位名称",field: "dclEtpsNm",align: "center",sortable: true},
    { title: "申报地海关",field: "dclPlcCuscd",align: "center",sortable: true}
];
param={};
param.columns=columns;

//页面绑定事件
$(function(){
    //设置列表标题
    var tableTitle="";
    if(iEFlag1=="I")
        tableTitle="入区核注清单";
    else if(iEFlag1=="E")
        tableTitle="出区核注清单";
    $("#tableTitle").html(tableTitle);

    $('#tab li').click(function () {
        tab = $(this).attr('id');
        switch (tab)
        {
            case "cusTab"://审批(正式)数据
                $('#crudBtn').hide();
                param.url = _server + "/inv/cus/invCusBsc/list";
                _serverAddress = _server + "/inv/cus/invCusBsc/list";
                break;
            case "hisTab"://申报历史记录
                $('#crudBtn').hide();
                param.url = _server + "/inv/his/invHisBsc/list";
                _serverAddress = _server + "/inv/his/invHisBsc/list";
                break;
            default: //预录入申报
                $('#crudBtn').show();
                param.url= _server+"/inv/invBsc/list";
                _serverAddress = _server+"/inv/invBsc/list";
                break;
        }
        DataGridUtils.refresh(param);
    });

    /**
     * 初始化表格
     */
    param.url= _server+"/inv/invBsc/list";
    DataGridUtils.initGridByUrl(param);

    Utils.initCalendar();
    setCalFormat();

    //刷新事件
    $("#refresh").click(function () {
        DataGridUtils.refresh(param)
    });

    //新增事件
    var modelParam={};
    $("#add").click(function(){
        if (docType=="A0604"|| docType=="A0605" || docType=='A0606'){
            modelParam.area=["1120px","620px"];
            if(iEFlag1=='I'){
                if (docType=='A0606'){
                    modelParam.title="简单加工入区申请表-选择";
                }else{
                    modelParam.title="集报入区申请表-选择";
                }
            }else{
                if (docType=='A0606'){
                    modelParam.title="简单加工出区申请表-选择";
                }else{
                    modelParam.title="集报出区申请表-选择";
                }
            }
            modelParam.id="sasDclBsctable";
            modelParam.url="sasDclBsc.jsp?docType="+docType+"&iEFlag1="+iEFlag1;
            Utils.showModalDialog(modelParam);
        }else{
           // location.href=_jumpPage+"addBak.jsp?docType="+docType+"&iEFlag1="+iEFlag1;
            Utils.showEditDiv(_jumpPage+"add.jsp?docType="+docType+"&iEFlag1="+iEFlag1+"&invTab="+tab);
        }

    });
    //修改事件
    $("#modify").click(function(){
        var rows = $('#' + param.gridId).bootstrapTable('getSelections');
        if (rows.length == 0) {
            layer.msg("未选择任何数据", {time: 1500});
            return;
        }
        if (status.indexOf(rows[0].chkStatus) == -1) {
            layer.msg("当前记录不可修改", {time: 1500});
            return;
        }
        param.jumPageUrl=baselocation+"/views/ems/bondInvtBsc/add.jsp?docType="+docType+"&iEFlag1="+iEFlag1+"&invTab="+tab;
        DataGridUtils.modify(param);
 /*       if (docType=="A0604"|| docType=="A0605"){
            param.jumPageUrl=baselocation+"/views/ems/bondInvtBsc/add.jsp?docType="+docType+"&iEFlag1="+iEFlag1+"&tab="+tab;
            DataGridUtils.modify(param);
        }else{
            param.jumPageUrl=baselocation+"/views/ems/bondInvtBsc/addBak.jsp?docType="+docType+"&iEFlag1="+iEFlag1+"&tab="+tab;
            DataGridUtils.modify(param);
        }*/

    });
    //查阅事件
    $("#view").click(function(){
        param.jumPageUrl=baselocation+"/views/ems/bondInvtBsc/add.jsp?docType="+docType+"&iEFlag1="+iEFlag1+"&invTab="+tab+"&optype=view";
        DataGridUtils.view(param);
 /*       if (docType=="A0604"|| docType=="A0605"){
            //param.jumPageUrl=baselocation+"/views/ems/bondInvtBsc/add.jsp";
            param.jumPageUrl=baselocation+"/views/ems/bondInvtBsc/add.jsp?docType="+docType+"&iEFlag1="+iEFlag1+"&tab="+tab;
            DataGridUtils.view(param);
        }else{
            //param.jumPageUrl=baselocation+"/views/ems/bondInvtBsc/addBak.jsp";
            param.jumPageUrl=baselocation+"/views/ems/bondInvtBsc/addBak.jsp?docType="+docType+"&iEFlag1="+iEFlag1+"&tab="+tab;
            DataGridUtils.view(param);
        }*/
    });

    //删除事件（批量删除）
    $("#delete").click(function(){
        var rows = $('#' + param.gridId).bootstrapTable('getSelections');
        if (rows.length == 0) {
            layer.msg("未选择任何数据", {time: 1500});
            return;
        }
        if (status.indexOf(rows[0].chkStatus) == -1) {
            layer.msg("当前记录不可删除", {time: 1500});
            return;
        }
        var url=_serverAddress+'/deleteByList?docType='+docType;
        param.listUrl=_serverAddress;
        param.serverUrl=url;
        DataGridUtils.deleteGrid(param);
    });
    //搜索事件
    $("#search").click(function(){
        $("#docType").val(docType);
        $("#iEFlag1").val(iEFlag1);
        param.url=_serverAddress;
        DataGridUtils.refresh(param);
    });

    /**
     * 查看回执
     */
    $("#receipt").click(function () {
        var rowData = DataGridUtils.getRowDatas();//获取当前行数据
       DataGridUtils.viewMessageLog(rowData.seqNo);
    });

    //初始化下拉控件
    initDropDown();
});
//回车事件绑定搜索按钮
$(document).keyup(function(event){
    if(event.keyCode ==13){
        param.url=_serverAddress;
        DataGridUtils.refresh(param);
    }
});
//删除数据
function del(id) {
    var url = _serverAddress + "/delete";
    $.ajax({
        url:url,
        dataType:'json',
        data: {"id":id,"appId":$("#appId").val()},
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success:function (result) {
            layer.msg(result.message,{icon:1,time:1000});
            if (result.code){
                param.url=_serverAddress;
                DataGridUtils.refresh(param);
            }
        },
        error:function (result) {
        }
    });
}
//设置日期格式，限制开始时间不能大于结束时间
function setCalFormat(){
    /************设置结束有效日期***************/
    //开始时间
    $('#decTimeStart').datepicker().on('changeDate',function(e){
        var startTime = e.date;
        $('#decTimeEnd').datepicker('setStartDate',startTime);
    });
    //结束时间：
    $('#decTimeEnd').datepicker({}).on('changeDate',function(e){
        var endTime = e.date;
        $('#decTimeStart').datepicker('setEndDate',endTime);
    });
}
//初始化下拉控件
function initDropDown(){
    Utils.setCodesDropDown("EMAPV_MARKCD_SAS,BOND_INVT_TYPECD,CHK_STATUS");
}

//行双击
function __onDblClickRow(rowdata, rowobj) {
    param.jumPageUrl=baselocation+"/views/ems/bondInvtBsc/add.jsp?docType="+docType+"&iEFlag1="+iEFlag1+"&invTab="+tab+"&optype=view";
    DataGridUtils.view(param);
/*    if (docType=="A0604"|| docType=="A0605"){
        //param.jumPageUrl=baselocation+"/views/ems/bondInvtBsc/add.jsp";
        param.jumPageUrl=baselocation+"/views/ems/bondInvtBsc/add.jsp?docType="+docType+"&iEFlag1="+iEFlag1+"&tab="+tab;
        DataGridUtils.view(param);
    }else{
        //param.jumPageUrl=baselocation+"/views/ems/bondInvtBsc/addBak.jsp";
        param.jumPageUrl=baselocation+"/views/ems/bondInvtBsc/addBak.jsp?docType="+docType+"&iEFlag1="+iEFlag1+"&tab="+tab;
        DataGridUtils.view(param);
    }*/
}

/**
 * 弹出bootstrap模态框
 * 该方法适用于通过模态框执行CRUD操作，通过一个模块框分别进行新增，修改和查看
 * 给定的模态框的保存按钮的ID需命名为id="saveModal"
 * id: 对象id
 * modal：需要弹出的模态框ID
 * type：执行的操作类型，新增：add,修改：edit,查看：view
 */
function showModal(id, modal, type){
    $('#'+modal).modal('show');
}

/**
 * 保存模态框数据
 * 不执行后台的CRUD
 * @returns
 */
function saveModal(){
    var bondInvtTypeParam = Utils.jsonByForm($("#bondInvtTypeForm"));
    $('#bondInvtTypeModal').modal('hide');
    location.href=_jumpPage+"add.jsp?"+bondInvtTypeParam;
}



function toBscAdd() {
   //location.href=_jumpPage+"add.jsp?docType="+docType+"&iEFlag1="+iEFlag1+"&putrecNo="+areainOriactNo+"&applyNo="+sasDclNo;
    Utils.showEditDiv(_jumpPage+"add.jsp?docType="+docType+"&iEFlag1="+iEFlag1+"&putrecNo="+areainOriactNo+"&applyNo="+sasDclNo+"&invTab="+tab);
}