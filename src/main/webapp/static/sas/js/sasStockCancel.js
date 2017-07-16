//服务器地址
_serverAddress = _server + "/sas/sasStockCus/list";
var parameter = "?stockTypecd=" + parent.stockTypecd + "&docType=" + parent.docType+"&dclTypecd=3";
//操作数组
var columns = [
    {title: "单选", field: "select", radio: true, align: "center", width: "30"},
    {title: "出入库单编号", field: "sasStockNo", align: "center", sortable: true},
    {title: "企业预录入编号", field: "etpsPreentNo", align: "center", sortable: true},
    {title: "申报表编号", field: "sasDclNo", align: "center", sortable: true},
    {title: "集报标志", field: "centralizedDclTypecd", align: "center", sortable: true},
    {title: "核放单生成标志", field: "passportUsedTypecd", align: "center", sortable: true},
    {title: "过卡标志", field: "passTypecd", align: "center", sortable: true,},
    {title: "主管海关", field: "masterCuscd", align: "center", sortable: true,},
    {title: "场地代码", field: "areaCode", align: "center", sortable: true,},
];
var param = [];
param.columns = columns;
param.height = 350;
param.pageSize = 5;
param.pageList = [5, 10, 20, 50];
//页面绑定事件
$(function () {
    //初始化表格
    param.url = _serverAddress + parameter;
    DataGridUtils.initGridByUrl(param);

    //初始化下拉框
    //initDropDown();
    //关闭弹出框
    $("#cancel").click(function () {
        var index = parent.layer.getFrameIndex(window.name);
        parent.layer.close(index);
    });
    //搜索事件
    $("#search").click(function () {
        param.url = _serverAddress + parameter;
        DataGridUtils.refresh(param);
    });
})
/*function initDropDown() {
 //获取参数代码表的集合
 var codesData="codStdCarType";
 Utils.setParamDropDown(codesData);
 }*/
//新增事件
$("#ok").click(function () {
    var rows = $('#table').bootstrapTable('getSelections');
    if (rows.length == 0) {
        layer.alert("未选择任何记录");
        return;
    }
    if (rows[0].rltBondInvtNo != "" && rows[0].rltBondInvtNo != null) {
        layer.msg("该单已经做了核注清单，请先删除核注清单后，再进行作废申请", {time: 1500});
        return;
    }
    //获取主键
    var id = rows[0]["uid"];
    layer.confirm('确定进行作废申请 ？', {btn: ['确定', '取消']}, function () {
        $.ajax({
            url: _server + "/sas/sasStockBsc/list/check",
            type: 'post',
            dataType: 'json',
            data: {"seqNo": rows[0].seqNo},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (result) {
                if (result.code == 1) {
                    layer.msg(result.message, {time: 1500});
                    return;
                } else if (result.code == 0) {
                    $.ajax({
                        url: _server + "/sas/sasStockBsc/list/choose",
                        type: 'post',
                        data: {"id": id, "appId": $("#appId").val()},
                        dataType: 'json',
                        xhrFields: {
                            withCredentials: true
                        },
                        crossDomain: true,
                        success: function (result) {
                            if (result.code == 1) {
                                //window.parent.assignment(result.data);
                                parent.data=result.data;
                                parent.jump2();
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
                }
            },
            error: function (result) {
                layer.msg("系统错误", {time: 1500})
            }
        });
    });
});