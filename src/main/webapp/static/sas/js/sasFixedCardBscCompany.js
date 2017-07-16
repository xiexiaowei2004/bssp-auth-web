//服务器地址
_serverAddress = _server + "/sas/sasFixedCardBsc/list";
//跳转页面
_jumpPage = baselocation + "/views/sas/sasFixedCardBsc/add.jsp";
var param = {};
param.jumPageUrl=_jumpPage;
param.idField = "uid";
param.url = _serverAddress;

//新增事件
$("#ok").click(function () {
    param.gridId="table";
    var rows = $('#table').bootstrapTable('getSelections');
    if (rows.length == 0) {
        layer.msg("请选择一个企业！", {

            time: 1500
        });
        return false;
    }
    window.parent.company(rows[0]);
    $("#cancel").click();
});
$("#makeCardOk").click(function(){
    var icCode = $("#icCode").val();
    if (icCode.length == 0) {
        layer.msg("请输入IC卡编号！", {

            time: 1500
        });
        return false;
    }
    $.ajax({
        url: _serverAddress + "/select",
        type: 'post',
        dataType: 'json',
        data: {"icCode": icCode},
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (result) {
            if(result.message=="成功"){
                layer.msg("此ID编号已存在！", {
                    time: 1500
                });
                return false;
            }else if(result.message == "失败"){
                window.parent.icCode(icCode);
                $("#cancel").click();
                return true;
            }
           console.log(result)
        },
        error: function (result) {
            layer.msg("发生错误！", {

                time: 1500
            });
            console.log(result)
        }
    });
});
//关闭弹出框
$("#cancel").click(function () {
    Utils.closeModalDialog();
});