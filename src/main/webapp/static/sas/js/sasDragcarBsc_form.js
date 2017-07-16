//服务器地址
var _serverAddress = _server + "/sas/sasDragcarBsc/list";


//跳转页面
var _jumpPage = baselocation + "/views/sas/sasDragcarBsc/";


var param = {};
var optype = Utils.search("optype");
var isSubmit = false;
var id = Utils.search("id");

$(function () {
    //初始化日历控件
    Utils.initCalendar();
    //初始化下拉
    initDropDown();
    if (optype == "view") {
        FormUtils.setPageView();
        $(".bscBtn").hide();//隐藏保存按钮.bscBtn方法名
    } else if (optype == "add") {
        //新增页面设置默认值
        SetDefault();
       
    } 
    //绑定事件
    BindEvent();

});
//绑定事件
function BindEvent() {
    /********************返回事件********************/
    $("#reback").click(function () {
        Utils.redirect("list.jsp");
    });
    /****************绑定暂存事件*************************/
    $("#save").click(function () {
        //启用表单验证
        Validator.setValidateParam("dataForm");
        if(!Validator.validate("dataForm")) return;
        //解除下拉框禁用，用于提交数据
        banParam();
        isSubmit = false;
        if (optype == "add") {
            FormUtils.save("dataForm", "/add", true)
        } else if (optype == "modify") {
            FormUtils.save("dataForm", "/update", true)
        }
    });

}

//弹出窗口
function showPage(gridId, title, url, optype) {
    var modelParam = {};

    var seqNo = $("#seqNo").val();
    url += "?optype=" + optype + "&seqNo=" + seqNo + "&chgTmsCnt=" + $("#chgTmsCnt").val();

    if (optype == "add") {
        if (seqNo == "") {
            layer.alert("单据编号不存在，不能新增！");
            return;
        }
    } else if (optype == "modify" || optype == "view") {
        var rows = $('#' + gridId).bootstrapTable('getSelections');
        if (rows.length == 0) {
            layer.msg("未选择记录");
            return;
        }
        var uid = rows[0]["uid"];
        url += "&id=" + uid;
    } else if (optype == "choose" || optype == "changeChoose") {
        url += "&seqNo=" + seqNo + "&chgTmsCnt=" + $("#chgTmsCnt").val() + "&etArcrpNo=" + $("#etArcrpNo").val() + "&optype=" + optype + "&gridId=" + gridId;
        modelParam.maxmin = true;
    }
    modelParam.area = ["900px", "520px"];
    modelParam.url = url;
    modelParam.title = title;
    modelParam.id = uid;
    Utils.showModalDialog(modelParam);
}

//设置默认值
function SetDefault() {
    //设置日期
    var date = DateUtil.dateToStr("yyyy-MM-dd");
    SetValue("updateTime", date);//修改时间
    SetValue("createTime", date);//创建时间 
    SetValue("chgTmsCnt", 0);//变更次数
}

//标签设置值
function SetValue(id, value) {
    $("#" + id).val(value);
}

//初始化下拉
function initDropDown() {
	//codCusCustomsfec主管海关
   //业务类型SAS_TYPE;单据状态CHK_STATUS
    Utils.setDropDown("SAS_TYPE,CHK_STATUS");
    Utils.setParamDropDown("codCusCustomsfec,codStdAreaCode");
}

//渲染完下拉框的回调方法
function __onAfterInitDropDown() {
    if (optype != "add") {
            FormUtils.getData();
        }
    else {
        
        Utils.getLoginUserInfo();
    }
}

//数据加载完后调用的方法
function __onAfterLoad(data) {
    if (optype == "change") {
        //变更申请 不加载表体数据
        $("#dclTypecd").select2('val', "2");
        $("#chgTmsCnt").val(parseInt($("#chgTmsCnt").val()) + 1);
        return;
    } else if (optype == "modify") {
        //备案的编辑不能进行变更选取操作
        var chgTmsCnt = $("#chgTmsCnt").val();
        if (chgTmsCnt == 0) {
            $(".changeBtn").hide();
        }
    }
   
}

//获取登录用户信息的回调方法
function __onAfterGetLoginUserInfo(loginuser) {
	
    var copEnt = loginuser.copEnt;
    SetValue("bizopEtpsno", loginuser.inputCopNo);//经营企业编号
    SetValue("bizopEtpsSccd", loginuser.copGbCode);//经营企业社会信用代码
    SetValue("bizopEtpsNm", loginuser.inputCopName);//经营企业名称
    SetValue("prcsEtpsno", loginuser.inputCopNo);
    SetValue("prcsEtpsSccd", loginuser.copGbCode);
    SetValue("prcsEtpsNm", loginuser.inputCopName);
    SetValue("dclEtpsno", loginuser.inputCopNo);
    SetValue("dclEtpsSccd", loginuser.copGbCode);
    SetValue("dclEtpsNm", loginuser.inputCopName);
    SetValue("inputEtpsSccd", loginuser.copGbCode);

    /*SetValue("concAddr", copEnt.entAddr);
    SetValue("telnum", copEnt.telCo);
    SetValue("areaCode", copEnt.areaCode);
    SetValue("masterCuscd", copEnt.customsCode);*/
	
}
	

//保存成功的回调方法
function __onAfterSave(data) {
    if (isSubmit) {
        layer.alert("跳转至列表页面", {time: 1000});
        Utils.redirect("list.jsp");
    } else {
        if (optype == "add" || optype == "modify") {
            layer.alert("跳转至编辑页面", {time: 1000});
            location.href = baselocation + "/views/sas/sasDragcarBsc/list.jsp";
         
        }
    }
}

//保存失败的回调方法
function __onAfterSaveError() {
    notBanParam(); //重新禁用
}


//界面刷新方法
function subPageRefresh(param) {
    DataGridUtils.refresh(param);
}

//保存时解禁下拉框用于获取值
var disabledParam = [];
function banParam() {
    disabledParam[0] = "dclTypecd";
    disabledParam[1] = "exeMarkcd";
    disabledParam[2] = "riskAssureMarkcd";
    $(disabledParam).each(function () {
        $("#" + this).removeAttr("disabled", true);
    });
}
//保存失败时重新禁用下拉框
function notBanParam() {
    $(disabledParam).each(function () {
        $("#" + this).attr("disabled", true);
    });
}

