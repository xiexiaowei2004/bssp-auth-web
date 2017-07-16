//服务器地址
_serverAddress = _server + "/sas/sasDclCusBsc/list?directionTypecd="+parent.stockTypecd+"&docType="+parent.type+"&dclTypecdParam=3";
//跳转页面
_jumpPage = baselocation + "/views/sas/sasStockBsc/";

/*var sasDclNoList = Utils.search("sasDclNoList");
var docType=Utils.search("docType");
var busType=Utils.search("busType");
var type=Utils.search("type");
var stockTypecd=Utils.search("directionTypecd");*/
/*if (sasDclNoList == null){
    sasDclNoList = "";
}*/
var columns = [
    {title: "单选", field: "select", radio: true, align: "center", width: "30"},
    {title: "申报表编号", field: "sasDclNo", align: "center", sortable: true},
    {title: "区内账册编号", field: "areainOriactNo", align: "center", sortable: true},
    {title: "有效期", field: "validTime", align: "center", sortable: true},
    /*{title: "申报表状态", field: "dclTbStucd", align: "center", sortable: true},
    {title: "备案审批时间", field: "putrecEmapvTime", align: "center", sortable: true},
    {title: "变更审批时间", field: "chgEmapvTime", align: "center", sortable: true},*/
    {title: "区内企业编码", field: "areainEtpsno", align: "center", sortable: true,},
    {title: "区内企业名称", field: "areainEtpsNm", align: "center", sortable: true,},
    {title: "主管海关", field: "masterCuscd", align: "center", sortable: true,},
    {title: "监管场所", field: "areaCode", align: "center", sortable: true,},
];

var param={};
param.columns=columns;
param.height = 350;
param.pageSize = 5;
param.pageList = [5, 10, 20, 50];
//页面绑定事件
$(function () {
    //日期控件
    Utils.initCalendar();
    setCalFormat();
    //初始化表格
    param.url = _serverAddress;
    DataGridUtils.initGridByUrl(param);

    //搜索事件
    $("#search").click(function(){
        param.url = _serverAddress;
        DataGridUtils.refresh(param);
    });
    //新增事件
    $("#ok").click(function () {
        var rows = $('#table').bootstrapTable('getSelections');
        if (rows.length == 0) {
            layer.alert("未选择任何记录");
            return;
        }
       /* var sasDclNo = rows[0]["sasDclNo"];
        if ($.inArray(sasDclNo.toString(),sasDclNoList.split(",")) != -1){
            layer.msg("所选申报单已存在，请检查", {time: 1500});
            return;
        }*/
        //获取主键
        var id = rows[0]["uid"];
        layer.confirm('确认所选信息 ？', {btn: ['确定', '取消']}, function () {
            //调用后台服务
            $.ajax({
                url:  _server + "/sas/sasStockBsc/list/select",
                type: 'post',
                data: {"id": id, "busType":parent.busType,"appId": $("#appId").val()},
                dataType: 'json',
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true,
                success: function (result) {
                    if (result.code == 1) {
                        //window.parent.getdata(result.data);
                        parent.data=result.data;
                        parent.jump1();
                    } else {
                        layer.msg(result.message, {
                            icon: 2,
                            time: 1000
                        });
                    }
                },
                error: function (result) {
                    layer.alert('执行失败!');
                    return false;
                }
            });
        });
    });
    //关闭弹出框
    $("#cancel").click(function () {
        var index = parent.layer.getFrameIndex(window.name);
        parent.layer.close(index);
    });
    /*//新增事件
    $("#add").click(function(){
        Utils.redirect(_jumpPage+"add.jsp");
    });
    //删除事件（批量删除）
    $("#remove").click(function(){
        var url=_serverAddress+'/deleteByList';
        param.serverUrl=url;
        param.idField = "seqNo";
        DataGridUtils.deleteGrid(param);
    });
    //修改事件
    $("#modify").click(function(){
        DataGridUtils.modify(param);
    });
    //查阅事件
    $("#view").click(function(){
        param.jumPageUrl=_jumpPage+"edit.jsp";
        DataGridUtils.view(param);
    });
    //刷新事件
    $("#refreshBtn").click(function () {
        param.url=_serverAddress;
        DataGridUtils.refresh(param);
    })
*/
    //回车事件绑定搜索按钮
    $(document).keyup(function (event) {
        if (event.keyCode == 13) {
            param.url = _serverAddress;
            DataGridUtils.refresh(param);
        }
    });
})


//设置日期格式，限制开始时间不能大于结束时间
function setCalFormat() {
    /************设置录入日期***************/
    //开始时间
    $('#validTimeStart').datepicker().on('changeDate', function (e) {
        var startTime = e.date;
        $('#validTimeEnd').datepicker('setStartDate', startTime);
    });
    //结束时间：
    $('#validTimeEnd').datepicker({}).on('changeDate', function (e) {
        var endTime = e.date;
        $('#validTimeStart').datepicker('setEndDate', endTime);
    });
    /************设置录入日期***************/
}
