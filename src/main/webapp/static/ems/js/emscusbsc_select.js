//服务器地址
_serverAddress = _server + "/ems/emsCusBsc/list";
//跳转页面
_jumpPage = baselocation + "/views/ems/emsCusBsc/";
var emsTypecd=Utils.search("emsTypecd");
//操作数组
var columns = [
        {title: "单选", field: "select", radio: true, align: "center"},
        {title: "账册编号", field: "emsNo", align: "left", sortable: true},
        {title: "经营企业社会信用代码", field: "bizopEtpsSccd", align: "center", sortable: true},
        {title: "经营企业名称", field: "bizopEtpsNm", align: "left", sortable: true},
        {title: "账册类型", field: "emsTypenm", align: "center", sortable: true},
        {title: "结束有效日期", field: "finishValidDate", align: "center", sortable: true},
        {title: "备案批准时间", field: "decTime", align: "center", sortable: true, formatter: function (value, row, index) {
	            if(value==null) return "";
        		fieldValue = value.replace(/-/g, "/");
	            fieldValue = DateUtil.dateToStr("yyyy-MM-dd", new Date(fieldValue));
	            return fieldValue;
	        }
        },
        {title: "变更批准时间", field: "decTime", align: "center", sortable: true, formatter: function (value, row, index) {
	        	if(value==null) return "";    
	        	fieldValue = value.replace(/-/g, "/");
	            fieldValue = DateUtil.dateToStr("yyyy-MM-dd", new Date(fieldValue));
	            return fieldValue;
	        }
        },
        {title: "主管海关", field: "masterCuscd", align: "center", sortable: true},
        {title: "监管场所", field: "areaCode", align: "center", sortable: true}
    ];
var param = {};
param.height = 350;
param.columns = columns;
param.pageSize = 5;
param.pageList = [5, 10, 20, 50];
param.url = _serverAddress+"?emsTypecd="+emsTypecd;
//页面绑定事件
$(function () {
    //初始化下拉控件
    Utils.setCodesDropDown("CHK_STATUS,DCL_TYPE");
    //初始化日历控件
    Utils.initCalendar();
    SetCalFormat();
    DataGridUtils.initGridByUrl(param);
    //查阅事件
    $("#view").click(function () {
        param.jumPageUrl = _jumpPage + "edit.jsp";
        DataGridUtils.view(param);
    });
    //搜索事件
    $("#search").click(function () {
        DataGridUtils.refresh(param);
    });
    //确定事件
    $("#determine").click(function () {
        Determine();
    });
    //返回
    $("#reback").click(function () {
        Utils.closeModalDialog();
    });
});
/**
 * 回车事件绑定搜索按钮
 */
$(document).keyup(function (event) {
    if (event.keyCode == 13) {
        param.url = _serverAddress;
        DataGridUtils.refresh(param);
    }
});
/**
 * 设置日期格式，限制开始时间不能大于结束时间
 */
function SetCalFormat() {
    /************设置结束有效日期***************/
    //开始时间
    $('#finishValidDateStart').datepicker().on('changeDate', function (e) {
        var startTime = e.date;
        $('#finishValidDateStartEnd').datepicker('setStartDate', startTime);
    });
    //结束时间：
    $('#finishValidDateStartEnd').datepicker({}).on('changeDate', function (e) {
        var endTime = e.date;
        $('#finishValidDateStart').datepicker('setEndDate', endTime);
    });
    /************设置结束有效日期***************/
    /************设置录入日期***************/
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
    /************设置录入日期***************/
}

/**
 *确定事件
 */
function Determine() {
    var rows = $('#table').bootstrapTable('getSelections');
    if (rows.length == 0) {
        layer.msg("未选择记录", {time: 1500});
        return;
    }
    var emsCusBscId = rows[0].uid;
    var serverUrl = _server + "/ems/emsCusBsc/list/generateEmsPutrecBscChgData";
    $.ajax({
        url: serverUrl,
        type: 'post',
        data: {"emsCusBscId": emsCusBscId, "appId": $("#appId").val()},
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (result) {
            if (result.code == 1) {
                layer.msg("账册选择成功", {time: 1500}, function () {
                    var editUrl = baselocation + "/views/ems/emsPutrecBsc/edit.jsp?optype=modify&id=" + result.data.uid;
                    parent.Utils.showEditDiv(editUrl);
                    Utils.closeModalDialog();
                });
            }
            else {
                layer.msg(result.message,{time: 1000});
            }
        },
        error: function (result) {
        	layer.msg(result.message,{time: 1000});
        }
    });
}