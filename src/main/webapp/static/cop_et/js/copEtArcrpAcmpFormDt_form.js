//服务器地址
_serverAddress = _server + "/cop_et/etArcrpAcmpFormDt/list";
//跳转页面
_jumpPage = baselocation + "/views/cop_et/copEtArcrpAcmpFormDt/";

var _saveServiceAddr;
var id = Utils.search("id");
var seqNo = Utils.search("seqNo");
var optype = Utils.search("optype");
var netwkEtpsArcrpNo = Utils.search("netwkEtpsArcrpNo");

$(function () {
    //初始化下拉
    Utils.setCodesDropDown("ACMP_FORM_TYPECD");
    if (id !== null) {
        $("#uid").val(id);
        FormUtils.getData();
    }
    //绑定事件
    BindEvent();

    if (optype == "add") {
        $("#chgTmsCnt").val(0);
        $("#seqNo").val(seqNo);
        $("#netwkEtpsArcrpNo").val(netwkEtpsArcrpNo);
        _saveServiceAddr = "/add";
    } else if (optype == "view") {
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
}

//保存方法的回调方法
//用于刷新列表
function __onAfterSave(data) {
    var param = {};
    param.gridId = "acmpFormDtTable";
    param.url = _serverAddress + "?seqNo=" + data.seqNo;
    DataGridUtils.refresh(param);
}