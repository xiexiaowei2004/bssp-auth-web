//服务器地址
_serverAddress = _server + "/ems_bws/emsBwsBsc/list";
//跳转页面
_jumpPage = baselocation + "/views/ems_bws/emsBwsBsc/";

//表体类型
var listType = ["dt", "file"];
var listData;
var seqNo = $("#seqNo").val();
var bwsNo = $("#bwsNo").val();
var chgTmsCnt = $("#chgTmsCnt").val();
var optype = Utils.search("optype");
var dclTypecd = Utils.search("dclTypecd");
var id = Utils.search("id");
/**
 * 即时加载
 */
$(function () {
    //初始化日历控件
    Utils.initCalendar();
    //设置账册结束有效日期大于等于今天
    var startTime = DateUtil.dateToStr("yyyy-MM-dd");  
    $('#finishValidDate').datepicker('setStartDate',startTime).on('hide',function(e) {
    	$('#dataForm').data('bootstrapValidator').updateStatus('finishValidDate', 'NOT_VALIDATED',null).validateField('finishValidDate');
	}); 
    //初始化下拉
    initDropDown();
    //查阅
    if (optype == "view") {
        FormUtils.setPageView();
        $("#save").hide();
        $("#declare").hide();
        $.each(listType, function (index, field) {
            if (field != "") {
                $("#" + field + "Add").hide();
                $("#" + field + "Edit").hide();
                $("#" + field + "Delete").hide();
            }
        });
    }
    //新增时隐藏表体按钮
    if (id == null) {
        $.each(listType, function (index, field) {
            if (field != "") {
                $("#" + field + "Toolbar").hide();
            }
        });
    }    
    //绑定事件
    BindEvent();
    //新增页面设置默认值
    if (id == null) {
        SetDefault();
    }
})
/**
 * 弹出窗口
 */
var modalParam = {};
modalParam.area = ["900px", "600px"];
function showPage(title, url, optype) {
    seqNo = $("#seqNo").val();
    if (optype == "add" && seqNo == "") {
        layer.msg("预录入统一编号不存在，不能新增！",{time: 1500});
        return;
    }
    modalParam.title = title;
    modalParam.url = url;
    Utils.showModalDialog(modalParam);
}
/**
 *绑定事件
 */
function BindEvent() {
    /********************返回事件********************/
    $("#reback").click(function () {
        //Utils.redirect("list.jsp");
        parent.Utils.hideEditDiv();
    });
    /****************绑定保存事件*************************/
    $("#save").click(function () {
        $("select").removeAttr("disabled");
        $("input").removeAttr("disabled");
        var url = "/add";
        if (optype == "modify" && id != null)
            url = "/update?uid=" + id;
        FormUtils.save("dataForm", url, true);
    });
    /****************绑定申报事件*************************/
    $("#declare").click(function () {
    	//设置表单需要验证
        Validator.setValidateParam("dataForm");
        if(!Validator.validate("dataForm")) return;
        _serverAddress = _server + "/ems_bws/emsBwsBsc/list";
        var id=Utils.search("id");
        var formData = $("#dataForm").serializeForm();
    	$.ajax({
    		url: _serverAddress+"/declare?uid="+id,
            type: 'post',
            dataType: 'json',
            data: formData,
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (result) {
                if (result.code == 1) {
                    layer.msg(result.message, {icon: 1, time: 1500}, function () {
                    	Utils.redirect(_jumpPage + "list.jsp");
                    });
                }
                else {
                    layer.msg(result.message, {time: 1500});
                }
            },
            error: function (result) {
                layer.msg(result.responseText,function () {                   
                });
            }
        });
    });
    var titleParam = {dt: "表体", file: "随附单证"};
    var urlParam = {
        dt: "../emsBwsDt/edit.jsp",
        file: "../emsBwsAcmpFormDt/edit.jsp"
    };
    $.each(listType, function (index, field) {
        if (field != "") {
            //绑定查阅事件
            $("#" + field + "View").click(function () {
                var rows = $('#' + field + "Table").bootstrapTable('getSelections');
                if (rows.length == 0) {
                    layer.msg("请选择要查阅的记录", {time: 1500});
                    return;
                }
                var url = urlParam[field];
                var uid = rows[0].uid;
                url += "?optype=view&id=" + uid;
                showPage(titleParam[field] + "-查阅", url, "view");
            });
            //绑定新增事件
            $("#" + field + "Add").click(function () {
                var url = urlParam[field];
                url += Utils.stringFormat("?optype=add&seqNo={0}&bwsNo={1}&chgTmsCnt={2}&etpsPreentNo={3}", $("#seqNo").val(), $("#bwsNo").val(), $("#chgTmsCnt").val(), $("#etpsPreentNo").val());
                showPage(titleParam[field] + "-新增", url, "add");
            });
            //绑定修改事件
            $("#" + field + "Edit").click(function () {
                var rows = $('#' + field + "Table").bootstrapTable('getSelections');
                if (rows.length == 0) {
                    layer.msg("请选择要修改的记录", {time: 1500});
                    return;
                }
                var url = urlParam[field];
                var uid = rows[0].uid;
                url += "?optype=modify&id=" + uid;
                showPage(titleParam[field] + "-编辑", url, "modify");
            });
            //删除事件绑定
            $("#" + field + "Delete").click(function () {
                var param = {};
                param.gridId = field + "Table";
                _serverAddress = GetUrlByType(field);
                param.serverUrl = _serverAddress + '/deleteByList';
                DataGridUtils.deleteGrid(param);
            });            
        }
    });

}
/**
 * 设置默认值
 */
function SetDefault() {
    //设置日期
    var date = DateUtil.dateToStr("yyyy-MM-dd hh:mm:ss");
    $("#dclTime").val(date);
    $("#decTime").val(date);
}
/**
 * 标签设置值
 */
function SetValue(id, value) {
    $("#" + id).val(value);
}
/*
 * 初始化下拉控件
 */
function initDropDown() {
    //获取字典的集合
    var dicData = "DCL_TYPECD_BWS,APPEND_TYPECD,EMAPV_STUCD_BWS,BWL_TYPECD,CHK_STATUS";
    //获取参数代码表的集合
    var codesData = "codStdAreaCode,codCusCustomsfec";
    Utils.setDropDown(dicData, codesData,false);
}
/*
 * 表体数据保存后刷新列表
 */
function refreshGrid(tableId) {
    var param = {};
    param.gridId = tableId + "Table";
    var url = GetUrlByType(tableId);
    if (url != "")
        DataGridUtils.refresh(param);
}
/*
 * 根据类型设置相应的Url
 */
function GetUrlByType(type) {
    var url = "";
    switch (type) {
        case "dt":
            url = _server + "/ems_bws/emsBwsDt/list";//料件
            break;
            break;
        case "file":
            url = _server + "/ems_bws/emsBwsAcmpFormDt/list";//随单附证
            break;
        default:
            url = _server + "/ems_bws/emsBwsBsc/list";//表头
            break;
    }
    return url;
}