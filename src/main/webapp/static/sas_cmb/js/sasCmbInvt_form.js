//服务器地址
_serverAddress = _server + "/sas_cmb/sasCmbInvt/list";
//跳转页面
_jumpPage = baselocation + "/views/sas_cmb/sasCmbInvt";

var _saveServiceAddr = "";
var id = Utils.search("id");
var seqNo = Utils.search("seqNo");
var optype = Utils.search("optype");
var chgTmsCnt = Utils.search("chgTmsCnt");

$(function () {
	 //初始化下拉
    initDropDown();
	
    //绑定事件
    BindEvent();

    if (optype == "add") {
        $("#chgTmsCnt").val(chgTmsCnt);
        $("#seqNo").val(seqNo);
        _saveServiceAddr = "/add";
    } else if (optype == "modify") {
        _saveServiceAddr = "/update";
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
    param.gridId = "invtTable";
    param.url = _serverAddress + "?seqNo=" + seqNo + "&chgTmsCnt=" + chgTmsCnt;
    window.parent.subPageRefresh(param);
    if (optype == "modify") {
        $("#reback").click();
    } else if (optype == "add") {
        window.location.reload();
    }
	
}

//渲染完下拉框的回调方法
function __onAfterInitDropDown() {
   
    $("#uid").val(id);
    FormUtils.getData();
}

/*//渲染完数据的回调方法
function __onAfterLoad() {
    var modfMarkcd = $("#modfMarkcd").select2('val');
    if (modfMarkcd == "3") {
        $("#modfMarkcd").prop("disabled", true);
    } else {
        $("#modfMarkcd option[value='0']").remove();
        $("#modfMarkcd option[value='3']").remove();
    }
}*/


function initDropDown() {
    //初始化下拉
    Utils.setDropDown("MODF_MARK");
	}

