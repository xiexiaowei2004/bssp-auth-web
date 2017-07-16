/**
 * 表单回调函数，用于解决由于异步调用执行回调
 * Created by jokylao on 2017-05-26.
 */
var FormHelper = {
    //页面初始化赋值，data：页面json格式数据
    initForm: function (data) {
        if (data == null || data == undefined || data == "") return;
        //遍历input赋值
        $.each($("input[name]"), function (index, val) {
            var field = $(this).attr("name");
            var fieldValue=data[field];
            if (field == 'appId') return true;
            var isFormat=$(this).attr("isFormat");
            var dataFormat=$(this).attr("data-date-format");
            if(isFormat=="true"){
                fieldValue=DateUtil.dateToStr(dataFormat,new Date(fieldValue));
                $(this).datepicker('setDate',fieldValue);
            }
            else{
                $(this).val(fieldValue);
            }
        });
        //遍历div赋值
        $.each($("div[name]"), function (index, val) {
            var field = $(this).attr("name");
            $(this).html(data[field]);
        });
        //遍历div赋值
        $.each($("span[name]"), function (index, val) {
            var field = $(this).attr("name");
            $(this).html(data[field]);
        });
        //遍历select赋值
        $.each($("select[name]"), function (index, val) {
            var field = $(this).attr("name");
            $(this).select2().val(data[field]).trigger("change");

        });
        //遍历textarea赋值
        $.each($("textarea[name]"), function (index, val) {
            var field = $(this).attr("name");
            $(this).val(data[field]);

        });
    },
    //获取单条数据
    getData: function () {
        var url = _serverAddress + "/" + Utils.search("id") + "/view";
        $.ajax({
            url: url,
            type: 'post',
            dataType: 'json',
            data: {"appId": $("#appId").val()},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (result) {
                var data = result.data;
                FormUtils.initForm(data);
                if(typeof(__onAfterLoad)=="function"){
                    __onAfterLoad(data);
                }
            },
            error: function (result) {
            }
        });
    },
    //通用保存  修改或添加数据（dataForm:form表单 paramUrl:用于对映后台的新增还是修改）
    save: function (dataForm, paramUrl) {
        var url = _serverAddress + paramUrl;
        var formData = Utils.jsonByForm($("#" + dataForm));
        $.ajax({
            url: url,
            type: 'post',
            dataType: 'json',
            data: formData,
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (result) {
                layer.msg(result.message, {icon: 1, time: 1000}, function () {
                    if (result.code == 1) {
                        Utils.redirect(_jumpPage + "list.jsp");
                    }
                });
            },
            error: function (result) {
                layer.alert("保存失败");
            }
        });
    },
    //获取restful接口资源，url：rest接口请求路径 ，obj：追加对象
    getSelectResource: function (url, obj) {
        $.ajax({
            url: url,
            type: 'get',
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (response) {
                $.each(response.data, function (index, item) {
                    $(obj).append('<option value="' + item.id + '">' + item.text + '</option>');
                })
            },
            error: function (response) {
                layer.alert("资源获取失败");
            }
        });
    },
    //弹出框选择 复选框 批量插入
    ok: function (param) {
        param.gridId = param.gridId || "table";
        param.idField = param.idField || "ID";
        var rows = $('#' + param.gridId).bootstrapTable('getSelections');
        if (rows.length == 0) {
            layer.alert("未选择任何记录");
            return;
        }
        //拼接主键
        var id = $.map(rows, function (row) {
            return row[param.idField];
        });
        var idList = id.join(",");
        layer.confirm('确认所选信息 ？', {btn: ['确定', '取消']}, function () {
            //调用后台服务
            $.ajax({
                url: param.serverUrl,
                type: 'post',
                data: {"idList": idList, "appId": $("#appId").val()},
                dataType: 'json',
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true,
                success: function (result) {
                    if (result.code == 1) {
                        parent.layer.msg(result.message, {
                            shade: 0.3,
                            time: 1500
                        }, function () {
                            window.parent.location.reload(); // 刷新父页面
                        });
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
        });
    },
    //查阅页面设置控件禁用
    setPageView:function(){
        $("input").attr("disabled","disabled");
        $("select").attr("disabled","disabled");
        $("textarea").attr("disabled","disabled");
        $("span").attr("disabled","disabled");
    },
    //查找location.href中的参数
    search: function (name) {
        var searchParam = location.href.split("?")[1];
        if (searchParam == undefined) return null;
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = searchParam.match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    },
    //格式化字符串,用法 Utils.stringFormat("{0}你好","张三") 输出：张三你好
    stringFormat: function () {
        if (arguments.length == 0)
            return null;
        var str = arguments[0];
        for (var i = 1; i < arguments.length; i++) {
            var re = new RegExp('\\{' + (i - 1) + '\\}', 'gm');
            str = str.replace(re, arguments[i]);
        }
        return str;
    },
    /**
     * 执行ajaxy请求,执行结果返回回调函数中
     * @param param
     */
    ajaxRespond: function (param) {
        $.ajax({
            url: param.url,//请求地址
            type: param.post || 'post',//方式
            dataType: param.dataType || 'text',//回调类型
            data: param.data || null,//参数
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            //成功回调成功函数
            success: function (result) {
                if (param.callbackSuccess) {
                    eval(param.callbackSuccess+"("+result+")");
                }
            },
            //失败回调失败函数
            error: function (result) {
                if (param.callbackError) {
                    eval(param.callbackError+"("+result+")");
                }
            }
        });
    }
};