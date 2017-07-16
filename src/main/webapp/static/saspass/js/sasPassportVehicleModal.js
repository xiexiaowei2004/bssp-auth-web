//服务器地址
/*_serverAddress = _server + "/sas/sasVehicleBsc/list";*/
_serverAddress = _server + "/sas/sasVehicleCus/list";
//操作数组
var vehicleColumns = [
    {title: "单选", field: "select", radio: true, align: "center"},
    {title: "车牌号", field: "vehicleNo", align: "center", sortable: true},
    {title: "车辆类型", field: "vehicleTypecd", align: "center", sortable: true},
    {title: "车牌类型", field: "plateTypecd", align: "center", sortable: true},
    {title: "所属企业编码", field: "etpsno", align: "center", sortable: true},
    {title: "所属企业名称", field: "etpsNm", align: "left", sortable: true},
    {title: "申报类型", field: "dclTypecd", align: "center", sortable: true},
    {title: "变更次数", field: "chgTmsCnt", align: "center", sortable: true},
    {title: "单据状态", field: "chkStatusNm", align: "center", sortable: true},
    {title: "操作时间", field: "decTime", align: "center", sortable: true},
    {title: "回执状态", field: "retChannel", align: "center", sortable: true},
    {title: "主管海关", field: "masterCudNm", align: "center", sortable: true},
    {title: "监管场所", field: "areaCode", align: "center", sortable: true}
];

param.columns = vehicleColumns;
param.gridId = "vehicleTab";
param.idField = "uid";
param.height = 280;
param.url = _serverAddress;


$(function () {
    var index = parent.layer.getFrameIndex(window.name); //获取窗口索引

    var masterCuscd = Utils.search('masterCuscd');
    $('input[name=masterCuscd]').val(masterCuscd);



    /**
     * 退出模态框
     */
    $('#vehicleModalReback').click(function () {
        parent.layer.close(index);
    });

    /**
     * 确认选择
     */
    $('#vehicleModalSave').click(function () {
        var rows = $('#vehicleTab').bootstrapTable('getSelections');
        if (rows.length == 0) {
            layer.msg("请选择记录", {time: 1500});
            return;
        }
        if (window.parent.callBackVehicle(rows[0])){
            layer.msg("选择成功", {time: 1500});
            parent.layer.close(index);
        }
    });

    $("#search").click(function(){
        DataGridUtils.refresh(param);
    });

    DataGridUtils.initGridByUrl(param);

    Utils.initCalendar();
    setCalFormat();

    //获取字典的集合
    var dicData="CHK_STATUS,DCL_TYPE,PLATE_TYPE,OWNER_SYSTEM,DCL_TYPE";
    //获取参数代码表的集合
    var codesData="codStdCarType,codCusCustomsfec";
    Utils.setDropDown(dicData,codesData);
});
function setCalFormat() {
    //开始时间
    $('#decTimeStart').datepicker().on('changeDate', function (e) {
        var startTime = e.date;
        $('#decTimeEnd').datepicker('setStartDate', startTime);
    });
    //结束时间：
    $('#decTimeEnd').datepicker({}).on('changeDate', function (e) {
        var endTime = e.date;
        $('#decTimeStart').datepicker('setEndDate', endTime);
    });
}
