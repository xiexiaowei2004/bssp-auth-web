$(function () {
    /********************返回事件********************/
    $("#reback").click(function(){
        Utils.closeModalDialog();
    });
    /****************绑定保存事件*************************/
    $("#save").click(function(){
        Validator.setValidateParam("dataForm");
        if (!Validator.validate("dataForm")) return;
        var areainOriactNo = $("#areainOriactNo").val();
        parent.add(areainOriactNo);
    });
    /****************初始化下拉*************************/
    initDropDown();
});

function initDropDown() {
    /**
     * areainOriactNo 区内账册编号
     */
    var url = "/ems_bws/emsBwsCusBsc/list/bwsNoList";
    if (url != "") {
        $.ajax({
            url: _server + url,
            type: 'post',
            dataType: 'json',
            data: {"appId": $("#appId").val()},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (result) {
                if (result.code == 1) {
                    var data = result.data;
                    $("#areainOriactNo").select2({data: data});
                }
            },
            error: function (result) {

            }
        });
    }
}