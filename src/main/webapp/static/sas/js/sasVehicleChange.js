//服务器地址
_serverAddress = _server + "/sas/sasVehicleCus/list";

//操作数组
var columns = [
    {title: "单选", field: "select", radio: true, align: "center", width: "30"},
    {title: "车牌号", field: "vehicleNo", align: "center", sortable: true},
    {title: "监管车海关编码", field: "vehicleCusNo", align: "left", sortable: true},
    {title: "车辆类型", field: "vehicleTypecd", align: "left", sortable: true},
    {title: "车牌类型", field: "plateTypecd", align: "left", sortable: true},
    {title: "所属企业名称", field: "etpsNm", align: "left", sortable: true},
    {title: "变更次数", field: "chgTmsCnt", align: "center", sortable: true},
    {title: "主管海关", field: "masterCudNm", align: "center", sortable: true},
    {title: "监管场所", field: "areaCode", align: "center", sortable: true},
];
var param=[];
param.columns = columns;
param.height = 350;
param.pageSize = 5;
param.pageList = [5, 10, 20, 50];
//页面绑定事件
$(function () {
    //初始化表格
    param.url = _serverAddress;
    DataGridUtils.initGridByUrl(param);

    //初始化下拉框
    initDropDown();
    //返回事件
    //关闭弹出框
    $("#cancel").click(function () {
        var index = parent.layer.getFrameIndex(window.name);
        parent.layer.close(index);
    });
    //搜索事件
    $("#search").click(function () {
        param.url = _serverAddress;
        DataGridUtils.refresh(param);
    });
})
function initDropDown() {
    //获取参数代码表的集合
    var codesData="codStdCarType";
    Utils.setParamDropDown(codesData);
}
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
    var vehicleNo = rows[0]["vehicleNo"];
    layer.confirm('确定进行变更操作 ？', {btn: ['确定', '取消']}, function () {
        //调用后台服务
        $.ajax({
            url:  _server + "/sas/sasVehicleBsc/list/select",
            type: 'post',
            data: {"id": id,"vehicleNo":vehicleNo,"appId": $("#appId").val()},
            dataType: 'json',
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (result) {
                if (result.code == 1) {
                   // window.parent.getdata(result.data);
                    parent.data=result.data;
                    parent.jump();
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