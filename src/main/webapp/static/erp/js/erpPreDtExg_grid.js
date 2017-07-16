/**
 * Created by powerbridge on 2017/6/3.
 */
//服务器地址
_serverAddress = _server + "/erp/erpPreDtExg/list";
//跳转页面
_jumpPage = baselocation + "/views/erp/erpPreDtExg/";
var id = Utils.search("id");
var optype = Utils.search("optype");
//操作数组
var columns = [
    {title: "全选", field: "select", radio: true, align: "center", valign: "middle"},
    {title: "成品序号", field: "gdsSeqno", align: "center", sortable: true, order: "asc"},
    {title: "成品料号", field: "gdsMtno", align: "center", sortable: true},
    {title: "是否生成备案", field: "successFlag", align: "center", sortable: true,formatter:function(value,row,index){
        var s;
        if(row.successFlag==1){
            s='是';
        }else{
            s='否';
        }
        return s;

    }},
    {title: "商品编码", field: "gdecd", align: "center", sortable: true},
    {title: "商品名称", field: "gdsNm", align: "center", sortable: true},
    {title: "规格型号", field: "gdsSpcfModelDesc", align: "center", sortable: true},
    {title: "企业单位", field: "entUnitcd", align: "center", sortable: true},
    {title: "计量单位", field: "dclUnitNm", align: "center", sortable: true},
    {title: "修改标记", field: "modfMarkcd", align: "center", sortable: true,formatter:function(value,row,index){
        var s;
        if(row.modfMarkcd=='1'){
            s='修改';
        }else if(row.modfMarkcd=='2'){
            s='删除';
        }else if(row.modfMarkcd=='3'){
            s='新增';
        }
        return s;

    }},
    {title: "操作时间",field: "createTime",align: "center",sortable: true ,formatter:function(value,row,index){
        fieldValue = value.replace(/-/g,"/");
        fieldValue=DateUtil.dateToStr("yyyy-MM-dd",new Date(fieldValue));
        return fieldValue;
    }}
];
var param = {};
param.columns = columns;

//页面绑定事件
$(function () {
    Utils.initCalendar();
    setCalFormat();
    //初始化下拉控件
    initDropDown();
    param.url = _serverAddress;
    DataGridUtils.initGridByUrl(param);

    //搜索事件
    $("#search").click(function () {
        DataGridUtils.refresh(param);
    });
    //刷新事件
    $("#refresh").click(function () {
        DataGridUtils.refresh(param)
    });

    //导入中间表数据
    $("#getMidExg").click(function () {
        $.ajax({
            url: _serverAddress+"/getMidExgData",
            data: {},
            dataType: 'json',
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (result) {
                console.log(result);
                layer.alert(result.message);
                DataGridUtils.refresh(param);
            },
            //失败加载空数据
            error: function (result) {
                layer.msg(result.message,{time: 1000});
                return;
            }
        });
    });

    $("#genEmsPurExg").click(function(){
        showPage('purExg','企业原始成品选择','../erpPreDtExg/select.jsp');
    });
});
//回车事件绑定搜索按钮
$(document).keyup(function (event) {
    if (event.keyCode == 13) {
        param.url = _serverAddress;
        DataGridUtils.refresh(param);
    }
});

//设置日期格式，限制开始时间不能大于结束时间
function setCalFormat() {
    /************设置录入日期***************/
    //开始时间
    $('#createTimeStart').datepicker().on('changeDate', function (e) {
        var startTime = e.date;
        $('#createTimeEnd').datepicker('setStartDate', startTime);
    });
    //结束时间：
    $('#createTimeEnd').datepicker({}).on('changeDate', function (e) {
        var endTime = e.date;
        $('#createTimeStart').datepicker('setEndDate', endTime);
    });
}

//双击表单事件
function __onDblClickRow(rowdata) {
    view("view");
}

//初始化下拉控件
function initDropDown() {
    var data=[{id:"1",text:"全部"},{id:"2",text:"已备案"},{id:"3",text:"未备案"}];
    $("#filterCond").select2({data:data})
}

//查阅事件
function view(optype) {
    if (optype == "add") {
        Utils.showEditDiv(_jumpPage + "edit.jsp");
    } else if (optype == "edit") {
        modify(optype);
    }
    else if (optype == "view") {
        modify(optype);
    }
}
function modify(optype) {
    var rows = $('#' + param.gridId).bootstrapTable('getSelections');
    if (rows.length == 0) {
        layer.msg("未选择任何数据", {icon: 1, time: 1500});
        return;
    }
    var successFlag  = rows[0]["successFlag"];
    if (successFlag=="1" && optype=="edit") {
        layer.msg("成品已生成备案，不允许修改", {time: 1500});
        return;
    }
    var modfMarkcd = rows[0]["modfMarkcd"];
    if (modfMarkcd == "2" && optype=="edit") {
        layer.msg("修改标记为删除，不允许修改", {icon: 1, time: 1500});
        return;
    }
    console.log(rows[0]);
    var id = rows[0]["uid"];

    Utils.showEditDiv(_jumpPage + "edit.jsp?id=" + id + "&optype=" + optype);
}

//删除事件
$("#remove").click(function () {
    removeData();
});

//删除单条数据
function removeData() {
    var rows = $('#' + param.gridId).bootstrapTable('getSelections');
    if (rows.length == 0) {
        layer.msg("未选择任何数据", {icon: 1, time: 1500});
        return;
    }
    var successFlag  = rows[0]["successFlag"];
    if (successFlag=="1") {
        layer.msg("成品已生成备案，不允许删除", {time: 1500});
        return;
    }
    var modfMarkcd = rows[0]["modfMarkcd"];
    if (modfMarkcd == "1" || modfMarkcd == "2") {
        layer.msg("修改标记为修改或删除，不允许删除", {icon: 1, time: 1500});
        return;
    }
    var id = rows[0]["uid"];
    layer.confirm('确认删除该记录 ？', {btn: ['确定', '取消']}, function () {
        var url = _serverAddress + "/" + id + "/delete";
        $.ajax({
            url: url,
            type: 'post',
            dataType: 'json',
            data: {"appId": $("#appId").val()},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (result) {
                layer.msg("删除成功", {icon: 1, time: 1000});
                if (result.code == 1) {
                    param.url = _serverAddress;
                    DataGridUtils.refresh(param);
                }
            },
            error: function (result) {
            }
        });
    })
}

var modelParam={};
modelParam.area = ["900px", "570px"];
function showPage(pageId,title,url){
    //弹出窗口
    if(title.indexOf("企业原始成品选择")>-1){
        modelParam.area=["1120px","620px"];
    }

    modelParam.title=title;
    modelParam.id=pageId;
    modelParam.url=url;
    Utils.showModalDialog(modelParam);
}

function showEmsHeadPage(pageId,title,url){
    //弹出窗口
    if(title.indexOf("账册选择")>-1){
        modelParam.area=["1120px","620px"];
    }

    modelParam.title=title;
    modelParam.id=pageId;
    modelParam.url=url;
    Utils.showModalDialog(modelParam);
}