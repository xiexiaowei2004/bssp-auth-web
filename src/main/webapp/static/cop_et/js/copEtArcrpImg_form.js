//服务器地址
_serverAddress = _server + "/cop_et/etArcrpImg/list";
//跳转页面
_jumpPage = baselocation + "/views/cop_et/copEtArcrpBsc";

var _saveServiceAddr = "";
var id = Utils.search("id");
var view = Utils.search("view");
var seqNo = Utils.search("seqNo");
var optype = Utils.search("optype");
var chgTmsCnt = Utils.search("chgTmsCnt");

$(function () {
    //初始化下拉
    Utils.setCodesDropDown("MODF_MARK");

    //绑定事件
    BindEvent();

    if (optype === "add") {
        //渲染商品序号
        getMaxGdsSeqno();
        $("#chgTmsCnt").val(chgTmsCnt);
        $("#seqNo").val(seqNo);
        _saveServiceAddr = "/add";
    } else if (optype === "modify") {
        _saveServiceAddr = "/update";
    } else if (optype === "view") {
        $("#save").hide();
        FormUtils.setPageView();
    }

    //设置验证
    Validator.setValidateParam("dataForm");
});
//绑定事件
function BindEvent() {
    /********************绑定返回事件********************/
    $("#reback").click(function () {
        var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
        parent.layer.close(index);
    });
    /****************绑定保存事件*************************/
    $("#save").click(function () {
        if (!Validator.validate("dataForm")) {
            return;
        }
        FormUtils.save("dataForm", _saveServiceAddr, true);
    });
    /****************绑定商品编码事件*************************/
    $("#gdecd").keydown(function (event) {
        if (optype !== "view") {
            if (event.keyCode === 13) {
                var gdecd = $(this).val();
                if (gdecd.length < 4) {
                    return;
                }
                var modelParam = {};
                modelParam.area = ["600px", "450px"];
                modelParam.url = _jumpPage + "/complexChooseList.jsp?gdecd=" + gdecd + "&seqNo=" + seqNo + "&gridId=imgTable";
                modelParam.title = "商品参数选择";
                modelParam.id = "complex";
                modelParam.fixed = true;

                Utils.showModalDialog(modelParam);
            }
        }
    });
    $('#gdecd').bind('input', function () {//给文本框绑定input事件
        if (optype !== "view") {
            var gdecd = $(this).val();
            if (gdecd.length < 4) {
                return;
            }
            $.ajax({
                url: _serverAddress + "/getGdsNm?gdecd=" + gdecd + "&seqNo=" + seqNo,
                dataType: 'json',
                async: true,
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true,
                success: function (result) {
                    if (result.code === 1) {
                        $('#gdsNm').val(result.data)
                    } else {
                        $('#gdecd').val(" ");
                        $('#gdsNm').val("");
                        layer.msg(result.data);
                    }
                    $('#dataForm').data('bootstrapValidator').updateStatus('gdecd', 'NOT_VALIDATED', null).validateField('gdecd');
                    $('#dataForm').data('bootstrapValidator').updateStatus('gdsNm', 'NOT_VALIDATED', null).validateField('gdsNm');
                }
            });
        }
    });
}

//保存方法的回调方法
//用于刷新列表
function __onAfterSave(data) {
    var param = {};
    param.gridId = "imgTable";
    param.url = _serverAddress + "?seqNo=" + seqNo + "&chgTmsCnt=" + chgTmsCnt;
    window.parent.subPageRefresh(param);
    if (optype === "modify") {
        $("#reback").click();
    } else if (optype === "add") {
        window.location.reload();
    }
}

//渲染完下拉框的回调方法
function __onAfterLoadCodes() {
    if (id === null) {
        $("#modfMarkcd").select2('val', "3");
    }
    $("#uid").val(id);
    if (optype === "view") {
        _serverAddress = _server + "/cop_et/et" + view + "Img/list";
    }
    FormUtils.getData();
}

//渲染完数据的回调方法
function __onAfterLoad() {
    var modfMarkcd = $("#modfMarkcd").select2('val');
    if (modfMarkcd === "3") {
        $("#modfMarkcd").prop("disabled", true);
    } else {
        $("#modfMarkcd").find("option[value='0']").remove();
        $("#modfMarkcd").find("option[value='3']").remove();
    }
}

//渲染值的方法
function printValue(row) {
    $("#gdecd").val(row.codeT.substring(0, 4));
    $("#gdsNm").val(row.gName);
}

//渲染商品序号
function getMaxGdsSeqno() {
    $.ajax({
        url: _serverAddress + "/" + seqNo + "/getMaxGdsSeqno",
        type: 'post',
        data: {"chgTmsCnt": chgTmsCnt, "appId": $("#appId").val()},
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (result) {
            if (result !== null) {
                $("#gdsSeqno").val(parseInt(result) + 1);
            }
        },
        error: function () {
            layer.msg('获取商品序号失败!');
        }
    });
}
