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
        // var directionTypecd = $("input[name='directionTypecd']:checked").val();
        window.parent.add(areainOriactNo);
    });
    /****************初始化下拉*************************/
    initDropDown();
});

function initDropDown() {
    /**
     * areainOriactNo 区内账册编号
     * DIRECTION_TYPECD 货物流向
     */
    var url = "";
    var busType = Utils.search("busType");
    switch (busType){
        case "wl":  //物流
        case "jdjg":  //简单加工
        case "wf":  //外发加工
        case "ls":  //临时出入区
            url = "/ems_bws/emsBwsCusBsc/list/bwsNoList";
            break;
        case "jg":  //加工
            url = "/ems/emsCusBsc/list/emsNoList?emsTypecd=2";
            break;
    }
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
                    $("#areainOriactNo").select2({data: data, lang: 'zh-CN'});
                    // $("#areainOriactNo").select2().val(data[0].id).trigger("change");
                }
            },
            error: function (result) {

            }
        });
    }
    // Utils.setCodesDropDown("DIRECTION_TYPECD");
}

/**
 * 下拉回调
 */
// function __onAfterLoadCodes(data) {
//     var dataDrop = data.DIRECTION_TYPECD;
//     var directionTypecd = $("input[name='directionTypecd']");
//     var directionTypeNm = $("span[name='directionTypeNm']");
//     $.each(directionTypecd,function (index) {
//         $(this).val(dataDrop[index].id);
//         $(directionTypeNm[index]).html(dataDrop[index].text);
//     });
// }