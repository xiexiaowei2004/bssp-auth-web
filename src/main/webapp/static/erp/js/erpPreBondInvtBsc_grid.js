//服务器地址
_serverAddress = _server+"/erp/erpPreBondInvtBsc/list";
//跳转页面
_jumpPage = baselocation+"/views/erp/erpPreBondInvtBsc/";

//操作数组
columns=[
    { title: "全选", field: "select", radio: true, align: "center", valign: "middle",formatter:function(value,row,index){
        param.transParam="etpsInnerInvtNo";
    }},
    { title: "清单企业内部编号",field: "etpsInnerInvtNo",align: "center",sortable: true },
    { title: "料件/成品标志",field: "mtpckEndprdMarkcd",align: "center",sortable: true ,formatter:function(value,row,index){
        var s;
        if(row.mtpckEndprdMarkcd=="I"){
            s='料件';
        }else{
            s='成品';
        }
        return s;

    }},
    { title: "监管方式",field: "supvModecdName",align: "center",sortable: true },
    { title: "进出口标志",field: "impexpMarkcd",align: "center",sortable: true,formatter:function(value,row,index){
        var s;
        if(row.impexpMarkcd=="I"){
            s='进口';
        }else{
            s='出口';
        }
        return s;

    }},
    { title: "进出口岸",field: "impexpPortcdName",align: "center"},
    { title: "申报地海关",field: "dclPlcCuscdName",align: "center"},
    { title: "操作时间",field: "createTime",align: "center",sortable: true ,formatter:function(value,row,index){
        fieldValue = value.replace(/-/g,"/");
        fieldValue=DateUtil.dateToStr("yyyy-MM-dd",new Date(fieldValue));
        return fieldValue;
    }},
    {title: "是否生成清单", field: "successFlag", align: "center", sortable: true,formatter:function(value,row,index){
        var s;
        if(row.successFlag==1){
            s='是';
        }else{
            s='否';
        }
        return s;

    }}


];
param={};
param.columns=columns;

//页面绑定事件
$(function(){
    Utils.initCalendar();
    //初始化下拉控件
    initDropDown();
    setCalFormat();
    param.url= _server+"/erp/erpPreBondInvtBsc/list";

    //console.log(param.url)
    DataGridUtils.initGridByUrl(param);

    //新增事件
    $("#add").click(function(){
        console.log(_jumpPage+"edit.jsp");
        Utils.showEditDiv(_jumpPage+"edit.jsp");
        //location.href=_jumpPage+"edit.jsp";
    });
    //修改事件
    $("#modify").click(function(){
        var rows = $('#' + param.gridId).bootstrapTable('getSelections');
        if (rows.length == 0) {
            layer.msg("未选择任何数据", {icon: 1, time: 1500});
            return;
        }
        if (rows[0].successFlag == '1') {
            layer.msg("清单已生成备案，不允许修改", {icon: 1, time: 1500});
            return;
        }
        param.jumPageUrl=baselocation+"/views/erp/erpPreBondInvtBsc/edit.jsp";
        DataGridUtils.modify(param);
    });
    //查阅事件
    $("#view").click(function(){
        var rows = $('#' + param.gridId).bootstrapTable('getSelections');
        if (rows.length == 0) {
            layer.msg("未选择任何数据", {icon: 1, time: 1500});
            return;
        }
        param.jumPageUrl=baselocation+"/views/erp/erpPreBondInvtBsc/edit.jsp?etpsInnerInvtNo="+etpsInnerInvtNo;
        DataGridUtils.view(param);
    });

    //删除事件（批量删除）
    $("#delete").click(function(){
        var rows = $('#' + param.gridId).bootstrapTable('getSelections');
        if (rows.length == 0) {
            layer.msg("未选择任何数据", {icon: 1, time: 1500});
            return;
        }
        if (rows[0].successFlag == '1') {
            layer.msg("清单已生成备案，不允许删除", {icon: 1, time: 1500});
            return;
        }
        var id = rows[0]["uid"];
        var url = _serverAddress + "/" + id + "/delete";
        console.log(url);
        param.listUrl=_serverAddress;
        param.serverUrl=url;
        DataGridUtils.deleteGrid(param);
    });
    //搜索事件
    $("#search").click(function(){
        param.url=_serverAddress;
        DataGridUtils.refresh(param);
    });

    //刷新事件
    $("#refresh").click(function () {
        DataGridUtils.refresh(param)
    });

    //导入中间表数据
    $("#getMidBondInvt").click(function () {
        $.ajax({
            url: _serverAddress+"/getMidData",
            data: {},
            dataType: 'json',
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (result) {
                console.log(result);
                //layer.msg(result.data,{time: 2000});
                layer.alert(result.message);
                DataGridUtils.refresh(param);
            },
            //失败加载空数据
            error: function (result) {
                //layer.msg(result.message,{time: 1000});
                layer.alert(result.message);
                return;
            }
        });
    });

    //生成核注清单
    $("#genBondInvt").click(function () {
        var rows = $('#' + param.gridId).bootstrapTable('getSelections');
        if (rows.length == 0) {
            layer.msg("未选择任何数据", {icon: 1, time: 1500});
            return;
        }
        console.log(rows[0].successFlag);
        if (rows[0].successFlag == '1') {
            layer.msg("清单已生成备案，不允许重复生成", {icon: 1, time: 1500});
            return;
        }
        var id = rows[0]["uid"];
        $.ajax({
            url: _serverAddress+"/genBondInvt?id="+id,
            data: {},
            dataType: 'json',
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (result) {
                console.log(result);
                //layer.msg(result.data,{time: 2000});
                layer.alert(result.message);
                DataGridUtils.refresh(param);
            },
            //失败加载空数据
            error: function (result) {
                layer.alert(result.message);
                return;
            }
        });
    });


});
//行双击
function __onDblClickRow(rowdata, rowobj) {
    $("#view").click();
}

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
    $('#createTimeStart').datepicker().on('changeDate',function(e){
        var startTime = e.date;
        $('#createTimeEnd').datepicker('setStartDate',startTime);
    });
    //结束时间：
    $('#createTimeEnd').datepicker({}).on('changeDate',function(e){
        var endTime = e.date;
        $('#createTimeStart').datepicker('setEndDate',endTime);
    });
}
//初始化下拉控件
function initDropDown(){
    Utils.setCodesDropDown("EMAPV_MARKCD_SAS,BOND_INVT_TYPECD");
    var data=[{id:"1",text:"全部"},{id:"2",text:"已备案"},{id:"3",text:"未备案"}];
    $("#filterCond").select2({data:data})
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

/**
 * 获取表格行数据
 *
function getRowData() {
    var ids = $.map($('#table').bootstrapTable('getSelections'), function (row) { return row.uid; });
    if(ids[0] != '' && ids[0] != undefined){
        var data = $table.bootstrapTable('getRowByUniqueId', ids[0]);
        return data;
    }else{
        layer.msg("未选择任何记录", { time: 1500 });
    }
}*/

//回车事件绑定搜索按钮
$(document).keyup(function(event){
    if(event.keyCode ==13){
        param.url=_serverAddress;
        DataGridUtils.refresh(param);
    }
});