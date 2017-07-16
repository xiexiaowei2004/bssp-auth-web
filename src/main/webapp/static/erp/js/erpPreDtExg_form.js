//服务器地址
_serverAddress = _server + "/erp/erpPreDtExg/list";
//跳转页面
_jumpPage = baselocation + "/views/erp/erpPreDtExg/";
var id = Utils.search("id");
var optype = Utils.search("optype");
//页面绑定事件
$(function () {
    Utils.initCalendar();
    if (id == null) {
        SetDefault();
    }
    //初始化下拉框
    initDropDown();
    //设置验证

    //返回事件
    $("#reback").click(function () {
        //Utils.redirect("list.jsp");
        parent.Utils.hideEditDiv();
    });
    //新增/修改事件
    $("#save").click(function () {

        //设置表单需要验证
        Validator.setValidateParam("dataForm");
        if(!Validator.validate("dataForm")) return;

        var uid = $("#uid").val();
        if(uid==""){
            FormUtils.save("dataForm","/add",true);
        }else{
            FormUtils.save("dataForm","/update",false);
        }
    });


    /*Validator.setValidateParam("dataForm");*/

});

//保存成功后执行
function __onAfterSave(formData) {
    parent.$("#refresh").click();
    location.href = "edit.jsp?id=" + formData.uid + "&optype=edit";
}

function SetValue(id, value) {
    $("#" + id).val(value);
}
//设置默认值
function SetDefault() {
    Utils.getLoginUserInfo();
    SetValue("successFlag", "0");
    $.ajax({
        url: _serverAddress+"/getMaxGdsSeqno",
        data: {},
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (result) {
            console.log(result);
            SetValue("gdsSeqno", result.data + 1);
        },
        //失败加载空数据
        error: function (result) {

        }
    });
}


//获取登录用户信息的回调方法
function __onAfterGetLoginUserInfo(loginuser) {
    //登录用户信息
    console.log(loginuser);
    //登录用户企业信息
    SetValue("createTime", loginuser.createTime);
    SetValue("createBy", loginuser.createName);
}

function initDropDown() {
    //初始化下拉控件
    Utils.setCodesDropDown("MODF_MARK");
    Utils.setParamDropDown("codCusUnit,codCusCountry,codCusCurr,codCusLevymode");
    var data=[{id:"0",text:"否"},{id:"1",text:"是"}];
    $("#successFlag").select2({data:data});
}

//页面下拉初始化成功后执行
function __onAfterLoadParam(data) {
    if (id != null) {
        FormUtils.getData();
    }
}
//页面赋值成功后执行
function __onAfterLoad(data) {

}