//全局变量
//服务器地址
var _server = "http://localhost:8090/bssp-admin";
//业务系统地址
var baselocation = "http://localhost:8080/bssp-auth-web"
//单据编号生成服务端
var _billServer = "http://localhost:8090/bssp-admin/bill/list";
//redis下拉数据服务地址
var _redisServer = "http://localhost:8090/bssp-admin/redis";

//服务器地址 定义
var _serverAddress;
//跳转页面 定义
var _jumpPage;

//获取当前登录用户信息和部分公共字段接口,定义在SystemUserController
var _loginUserUrl = _server + "/system/sysuser/loginuser";

var _modalUrl = baselocation + "/views/common/receipt/receiptModal.jsp";

var _receiptMessageLogUrl = baselocation + "/views/common/receipt/receiptMessageLog.jsp";

//操作数组
var columns;
var param = {};
//初始化table id
var $index = 0;
var modalParam = {};
var $table = $('#table');

param.gridId = "table";
param.height = $(window).height() - 310;
param.searchForm = "searchForm";  // 查询表单Id

(function ($) {
    $.fn.serializeJson = function () {
        var serializeObj = {};
        var array = this.serializeArray();
        var str = this.serialize();
        $(array).each(function () {
            if (serializeObj[this.name]) {
                if ($.isArray(serializeObj[this.name])) {
                    serializeObj[this.name].push(this.value);
                } else {
                    serializeObj[this.name] = [serializeObj[this.name], this.value];
                }
            } else {
                serializeObj[this.name] = this.value;
            }
        });
        return serializeObj;
    };
    //自定义序列化表单，禁用值也能取
    $.fn.serializeForm = function () {
        var serializeObj = {};
        var formSerialize = "";
        var array = this.serializeFormArray();
        $(array).each(function () {
            if (serializeObj[this.name]) {
                if ($.isArray(serializeObj[this.name])) {
                    serializeObj[this.name].push(this.value);
                } else {
                    serializeObj[this.name] = [serializeObj[this.name], this.value];
                }
            } else {
                serializeObj[this.name] = this.value;
                if (formSerialize == "")
                    formSerialize += this.name + "=" + this.value;
                else
                    formSerialize += "&" + this.name + "=" + this.value;
            }
        });
        return serializeObj;
    };
    //获取表单name属性的控件值
    $.fn.serializeFormArray = function () {
        var ia = /^(?:checkbox|radio)$/i;
        var tb = /\[\]$/,
            ub = /\r?\n/g,
            vb = /^(?:submit|button|image|reset|file)$/i,
            wb = /^(?:input|select|textarea|keygen)/i;
        return this.map(function () {
            var a = $.prop(this, "elements");
            return a ? $.makeArray(a) : this
        }).filter(function () {
            var a = this.type;
            return this.name && wb.test(this.nodeName) && !vb.test(a) && (this.checked || !ia.test(a))
        }).map(function (a, b) {
            var c = $(this).val();
            return null == c ? null : $.isArray(c) ? $.map(c, function (a) {
                return {
                    name: b.name,
                    value: a.replace(ub, "\r\n")
                }
            }) : {
                name: b.name,
                value: c.replace(ub, "\r\n")
            }
        }).get()
    };
})(jQuery);

//检查单据是否可以修改和删除
function checkChkStatus(chkStatus) {
    // var chkStatus = rows[0]["chkStatus"];
    if (chkStatus != null && chkStatus != "") {
        if (chkStatus != "S" && chkStatus != "N") {
            return false;
        }
    }
    return true;
}

//表格工具类
var DataGridUtils = {
        //初始化table,以json方式填充table
        initGrid: function (param) {
            param.gridId = param.gridId || "table";
            $('#' + param.gridId).bootstrapTable({
                //url:param.url,
                //数据源
                data: param.data,
                //为每一行指定唯一的标识符
                uniqueId: param.uniqueId || "uid",
                //指定主键列
                idField: param.idField || "uid",
                //是否启用缓存
                cache: param.cache || false,
                //传递格式
                dataType: "json",
                //表格列是否可以拖动
                resizable: param.resizable || true,
                //设置为 true 在点击分页按钮或搜索按钮时，将记住checkbox的选择项
                maintainSelected: true,
                //服务端返回数据键值 就是说记录放的键值是rows，分页时使用总记录数的键值为total
                dataField: param.dataField || "data",
                //刷新事件
                silent: true,
                //加载消息
                formatLoadingMessage: function () {
                    return "请稍等，正在加载中...";
                },
                //高度调整
                height: param.height || 500,
                //是否显示行间隔色
                striped: param.striped || true,
                //是否分页
                pagination: param.isPageination || true,
                //单页记录数
                pageSize: param.pageSize || 10,
                //分页步进值
                pageList: param.pageList || [10, 20, 50, 100],
                //服务端分页:server,客户端分页:client
                sidePagination: param.sidePagination || "client",
                //
                totalRows: param.totalRows || 0,
                //是否显示导出
                showExport: param.showExport || false,
                //请求方式
                contentType: "application/x-www-form-urlencoded",
                //是否显示查询
                search: param.search || false,
                //查询框对齐方式
                searchAlign: param.searchAlign || "right",
                //分页对齐方式
                paginationDetailHAlign: param.paginationDetailHAlign || "right",
                //切换视图
                showToggle: param.showToggle || false,
                //查询参数组织方式
                queryParamsType: "limit",
                //查询参数
                queryParams: function (params) {
                    return {
                        pageSize: params.limit,   //页面大小
                        pageNumber: params.pageNumber,  //页码
                        sort: params.sort,  //排序列名
                        sortOrder: params.order//排位命令（desc，asc）
                    };
                },
                //回车搜索
                searchOnEnterKey: param.searchOnEnterKey || false,
                //是否显示刷新按钮
                showRefresh: param.showRefresh || false,
                //列选择按钮
                showColumns: param.showColumns || true,
                //按钮对齐方式
                buttonsAlign: param.buttonsAlign || "right",
                //指定工具栏
                toolbar: param.toolbar || "#toolbar",
                //工具栏对齐方式
                toolbarAlign: param.toolbarAlign || "left",
                //列
                columns: param.columns || [],
                //是否显示导出
                showExport: param.showExport || true,
                //设置true 将在点击行时，自动选择rediobox 和 checkbox
                clickToSelect: param.clickToSelect || true,
                //数据导出模式：basic'：当前页数据导出, 'all'：所有数据导出, 'selected'：选中数据导出
                exportDataType: param.exportDataType || "basic",
                //单击row事件
                onClickRow: function (row, $element) {
                    if (typeof(__onClickRow) == "function")
                        __onClickRow(row, $element);
                    return false;
                },
                //双击row事件
                onDblClickRow: function (row, $element) {
                    if (typeof(__onDblClickRow) == "function")
                        __onDblClickRow(row, $element);
                },
                //中文支持,
                //locale: "zh-CN",
                //是否显示详情折叠
                detailView: param.detailView || false,
                //详情格式化
                detailFormatter: function (index, row, element) {
                    var html = '';
                    $.each(row, function (key, val) {
                        html += "<p>" + key + ":" + val + "</p>"
                    });
                    return html;
                }
            });
        },
        //初始化table,调用后台服务，直接返回符合bootstrap table的json数据
        initGridByUrl: function (param) {
        	//layer.load();
            param.gridId = param.gridId || "table";
            $('#' + param.gridId).bootstrapTable({
                //后台服务地址
                url: param.url,
                // method: 'post',
                //为每一行指定唯一的标识符
                uniqueId: param.uniqueId || "uid",
                //指定主键列
                idField: param.idField || "uid",
                escape: true,
                //是否启用缓存
                cache: param.cache || false,
                cardView: false,
                //是否自定义列宽
                resizable: param.resizable || false,
                //传递格式
                dataType: "json",
                //表格列是否可以拖动
                resizable: true,
                //设置为 true 在点击分页按钮或搜索按钮时，将记住checkbox的选择项
                maintainSelected: true,
                //服务端返回数据键值 就是说记录放的键值是rows，分页时使用总记录数的键值为total
                dataField: param.dataField || "data",
                //刷新事件
                silent: true,
                //加载消息
                formatLoadingMessage: function () {
                    return "请稍等，正在加载中...";
                },
                //高度调整
                height: param.height || 500,
                //是否显示行间隔色
                striped: param.striped || true,
                //是否分页
                pagination: param.isPageination || true,
                //单页记录数
                pageSize: param.pageSize || 10,
                //分页步进值
                pageList: param.pageList || [10, 20, 50, 100],
                //服务端分页:server,客户端分页:client
                sidePagination: param.sidePagination || "server",
                //请求方式
                contentType: "application/x-www-form-urlencoded",
                //是否显示查询
                search: param.search || false,
                //查询框对齐方式
                searchAlign: param.searchAlign || "right",
                //分页对齐方式
                paginationDetailHAlign: param.paginationDetailHAlign || "right",
                //是否显示 切换试图（table/card）按钮
                showToggle: param.showToggle || false,
                //查询参数组织方式
                queryParamsType: "limit",
                //查询参数
                queryParams: function (params) {
                    params.searchForm = params.searchForm || "searchForm";
                    return Utils.jsonByForm($("#" + params.searchForm), params);
                },
                //回车搜索
                searchOnEnterKey: param.searchOnEnterKey || false,
                //是否显示刷新按钮
                showRefresh: param.showRefresh || false,
                //列选择按钮
                showColumns: param.showColumns || false,
                //按钮对齐方式
                buttonsAlign: param.buttonsAlign || "right",
                //指定工具栏
                toolbar: param.toolbar || "#toolbar",
                //工具栏对齐方式
                toolbarAlign: param.toolbarAlign || "left",
                //列
                columns: param.columns || [],
                //是否显示导出
                showExport: param.showExport || false,
                //设置true 将在点击行时，自动选择rediobox 和 checkbox
                clickToSelect: param.clickToSelect || true,
                //数据导出模式：basic'：当前页数据导出, 'all'：所有数据导出, 'selected'：选中数据导出
                exportDataType: param.exportDataType || "all",
                //单击row事件
                onClickRow: function (row, $element) {
                    if (typeof(__onClickRow) == "function")
                        __onClickRow(row, $element);
                    return false;
                },
                //双击row事件
                onDblClickRow: function (row, $element) {
                    if (typeof(__onDblClickRow) == "function")
                        __onDblClickRow(row, $element);
                },
                //列表加载成功后,默认选中第一行
                onLoadSuccess: function () {
                	//layer.closeAll();
                	$('#' + param.gridId).bootstrapTable({
                	    resizable: true
                	});
                	$('#' + param.gridId).addClass("table-nowrap");
                    var isCheck = true;
                    if (param.isCheck != undefined) isCheck = param.isCheck;
                    if (isCheck) {
                        var rows = $('#' + param.gridId).bootstrapTable('getData');
                        if (rows.length != 0)
                            $('#' + param.gridId).bootstrapTable('check', 0);
                    }
                    if(param.height == undefined){
	                    var height = DataGridUtils.getHeight();
	                    $('#' + param.gridId).bootstrapTable('resetView', {"height": height});
                    }
                    //td加title属性
                    var cellIndex=parseInt($("#"+ param.gridId+" th").length);
                    $("#"+ param.gridId+" tr td").each(function(){
	                    if(this.cellIndex != cellIndex){
	                    	$(this).attr("title",$(this).text());
	                    }
                    });
                },
                onLoadError:function(){
                	//layer.close(timer);
                },
                //中文支持,
                locale: "zh-CN",
                //是否显示详情折叠
                detailView: param.detailView || false,
                //是否单选
                singleSelect: param.singleSelect || false,
                //详情格式化
                detailFormatter: function (index, row, element) {
                    var html = '';
                    $.each(row, function (key, val) {
                        html += "<p>" + key + ":" + val + "</p>"
                    });
                    return html;
                }
            });
        },
        getHeight:function(){
        	//设置高度
            var height = $(window).height();
            var formHeight = $("#searchForm").height();
            var tabHeight = $(".nav").height();
            /*if(tabHeight > 0) tabHeight += 14;*/
            var titleHeight = 0;
            $.each($(".ibox-title"), function (index,obj) {
            	titleHeight += $(obj).height();
            });
            titleHeight = titleHeight || 10;
            var height = height - formHeight - titleHeight - tabHeight -65;
            if (height > 500)
                height = 500;
            if (height < 200)
                height = 200;
            return height;
        },
        //获取选中行
        getSelectSection: function (gridId) {
            return $('#' + gridId).bootstrapTable('getSelections');
        },
        /*
         * 列表通用查阅方法
         */
        view: function (param) {
            param.gridId = param.gridId || "table";
            param.idField = param.idField || "uid";
            var jumPageUrl = param.jumPageUrl || _jumpPage + "view.jsp";
            var transParam = param.transParam || "";
            var rows = $('#' + param.gridId).bootstrapTable('getSelections');
            if (rows.length == 0) {
                layer.msg("请选择要查阅的记录", {time: 1500});
                return;
            }
            if (rows.length > 1) {
                layer.msg("只能选择一行记录", {time: 1500});
                return;
            }
            var id = rows[0][param.idField];
            if (id == undefined || id == null || id == "") {
                layer.msg("未找到主键字段", {time: 1500});
                return;
            }
            if (jumPageUrl.indexOf("?") == -1)
                jumPageUrl += "?optype=view&id=" + id;
            else
                jumPageUrl += "&optype=view&id=" + id;
            //拼接列表参数传入Url
            var strParam = "";
            var params = transParam.split(",");
            $.each(params, function (index, val) {
                if (rows[0][val]) {
                    strParam += Utils.stringFormat("&{0}={1}", val, rows[0][val])
                }
            });
            jumPageUrl += strParam;
            //拼接传递的其他参数传入Url
            if (param.joinUrl != undefined)
                jumPageUrl += param.joinUrl;
            Utils.showEditDiv(Utils.formatUrl(jumPageUrl));
        },
        /*
         * 列表通用修改方法
         * 参数说明：param为参数对象
         * 此方法默认只取id传递，如需传其他参数，请设置param.transParam，transParam为行对象中的列值，可传多个，逗号隔开
         * jumPageUrl为跳转页面地址，不传则默认跳转当前目录下的edit.jsp页面
         */
        modify: function (param) {
            param.gridId = param.gridId || "table";
            param.idField = param.idField || "uid";
            param.chkStatus = param.chkStatus || "chkStatus";
            var jumPageUrl = param.jumPageUrl || _jumpPage + "edit.jsp";
            var transParam = param.transParam || "";
            var rows = $('#' + param.gridId).bootstrapTable('getSelections');
            if (rows.length == 0) {
                layer.msg("请选择要修改的记录");
                return;
            }
            if (rows.length > 1) {
                layer.msg("只能选择一行记录");
                return;
            }

            //检查单据状态是暂存或审批不同意才可以修改和删除
            if (checkChkStatus(rows[0][param.chkStatus]) == false) {
                layer.msg("当前状态的单据不能修改！");
                return;
            }
            var id = rows[0][param.idField];
            if (jumPageUrl.indexOf("?") == -1)
                jumPageUrl += "?optype=modify&id=" + id;
            else
                jumPageUrl += "&optype=modify&id=" + id;
            //拼接列表参数传入Url
            var strParam = "";
            var params = transParam.split(",");
            $.each(params, function (index, val) {
                if (rows[0][val]) {
                    strParam += Utils.stringFormat("&{0}={1}", val, rows[0][val])
                }
            });
            jumPageUrl += strParam;
            //拼接传递的其他参数传入Url
            if (param.joinUrl != undefined)
                jumPageUrl += param.joinUrl;
            Utils.showEditDiv(Utils.formatUrl(jumPageUrl));
        },
        /*
         * 列表通用变更方法
         * 参数说明：param为参数对象
         * 此方法默认只取id传递，如需传其他参数，请设置param.transParam，transParam为行对象中的列值，可传多个，逗号隔开
         * jumPageUrl为跳转页面地址，不传则默认跳转当前目录下的edit.jsp页面
         */
        change: function (param) {
            param.gridId = param.gridId || "table";
            param.idField = param.idField || "seqNo";
            var jumPageUrl = param.jumPageUrl || _jumpPage + "edit.jsp";
            param.transParam = param.transParam || "";
            var rows = $('#' + param.gridId).bootstrapTable('getSelections');
            if (rows.length == 0) {
                layer.msg("请选择要变更的记录");
                return;
            }
            if (rows.length > 1) {
                layer.msg("只能选择一行记录");
                return;
            }
            var seqNo = rows[0][param.idField];
            if (jumPageUrl.indexOf("?") == -1)
                jumPageUrl += "?optype=change&seqNo=" + seqNo;
            else
                jumPageUrl += "&optype=change&seqNo=" + seqNo;
            var strParam = "";
            var params = param.transParam.split(",");
            $.each(params, function (index, val) {
                if (rows[0][val]) {
                    strParam += Utils.stringFormat("&{0}={1}", val, rows[0][val])
                }
            });
            jumPageUrl += strParam;
            parent.Utils.showEditDiv(Utils.formatUrl(jumPageUrl));
        },
        /**
         * 批量删除表格数据
         */
        deleteGrid: function (param) {
            param.gridId = param.gridId || "table";
            param.idField = param.idField || "uid";
            param.chkStatus = param.chkStatus || "chkStatus";
            var rows = $('#' + param.gridId).bootstrapTable('getSelections');
            if (rows.length == 0) {
                layer.msg("请选择要删除的记录", {time: 1500});
                return;
            }

            //检查单据状态是暂存或审批不同意才可以修改和删除
            if (checkChkStatus(rows[0][param.chkStatus]) == false) {
                layer.msg("当前状态的单据不能删除！");
                return;
            }

            //拼接主键
            var id = $.map(rows, function (row) {
                return row[param.idField];
            });
            var idList = id.join(",");
            layer.confirm('确定要删除所选记录吗？', {
                btn: ['确定', '取消'] //按钮
            }, function () {
                //调用后台服务，执行删除
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
                            layer.msg("删除成功", {time: 1000}, function () {
                                DataGridUtils.refresh(param);
                            });
                        }
                        else {
                            layer.msg('删除失败!');
                        }
                    },
                    error: function (result) {
                        layer.msg('删除失败!');
                    }
                });
            }, function () {
                layer.closeAll('dialog');
            });
        },
        /**
         * 静态批量删除表格
         * 从table中删除数据，同步移除暂存的array中的数据
         * array： 示例格式[{storeCode: "9", hid: "9"},{storeCode: "8", hid: "8"}]
         */
        deleteStaticGrid: function (array) {
            var ids = $.map($table.bootstrapTable('getSelections'), function (row) {
                return row.hid;
            });
            if (ids.length == 0) {
                layer.alert("未选择任何记录");
                return;
            }
            layer.confirm('确认要删除吗？', {btn: ['确定', '取消']}, function () {
                layer.closeAll('dialog');
                //将数据从table中删除
                $table.bootstrapTable('remove', {field: 'hid', values: ids});
                //将数据从数组中删除
                for (var i = 0; i < ids.length; i++) {
                    for (var j = 0; j < array.length; j++) {
                        if (array[j].hid == ids[i]) {
                            array.splice(j, 1);
                            continue;
                        }
                    }
                }
            });
        },
        //删除数据 id:主键,tableId
        removeData: function (id, tableId) {
            var url = _serverAddress + "/" + id + "/delete";
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
                    if (result.code == 1) {
                        layer.msg("删除成功", {icon: 1, time: 1500});
                        if (typeof(__onAfterGridDelete) == "function") {
                            if (!__onAfterGridDelete(param, tableId)) return;
                        }
                        param.url = _serverAddress;
                        DataGridUtils.refresh(param);
                    }
                    else {
                        layer.msg("删除失败", {time: 1500});
                    }
                },
                error: function (result) {
                    layer.msg("删除失败", {time: 1500});
                }
            });
        },
        removeStaticData: function (id, array, table) {
            //删除table显示数据
            table.bootstrapTable('removeByUniqueId', id);
            //同步删除缓存的数组数据
            for (var i = 0; i < array.length; i++) {
                if (array[i].hid == id) {
                    array.splice(i, 1);
                    return true;
                }
            }
        },
        //加载数据 param：bootstrap table 相关参数，isSearch：是否是查询，url：调用服务接口地址，searchForm：查询栏form的id
        loadData: function (param) {
            var searchForm = param.searchForm || "searchForm";
            var json = Utils.jsonByForm($("#" + searchForm), param);
            $.ajax({
                url: param.listUrl,
                data: {"jsonData": json},
                dataType: 'json',
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true,
                success: function (result) {
                    //是否查询，查询时直接替换数据
                    if (param.isSearch) {
                        DataGridUtils.refresh(param);
                    }
                    //不是查询时，先初始化table
                    else {
                        param.data = result.data;
                        DataGridUtils.initGrid(param);
                    }
                },
                //失败加载空数据
                error: function (result) {
                    param.data = [];
                    DataGridUtils.initGrid(param);
                }
            });
        },
        //刷新数据
        refresh: function (param) {
            var gridId = param.gridId || "table";
            var searchForm = param.searchForm || "searchForm";
            var queryData = $("#" + searchForm).serialize();
            $("#" + gridId).bootstrapTable('refresh', {url: param.url, data: queryData, method: "post"});
        },
        /**
         * 获取选中行所有数据
         * @author 宋轲
         */
        getRowDatas: function () {
            var ids = $.map($table.bootstrapTable('getSelections'), function (row) {
                return row.uid;
            });
            if (ids[0] != '' && ids[0] != undefined) {
                return $table.bootstrapTable('getRowByUniqueId', ids[0]);
            } else {
                layer.msg("未选择任何记录", {time: 1500});
            }
        },
        getReceiptModal: function (rowData) {
            if (rowData) {
                modalParam.serialNo = rowData.etpsPreentNo;
                modalParam.docType = rowData.docType;

                var modal = {};
                modal.area = ["900px", "500px"];
                modal.title = '查看回执';
                modal.url = _modalUrl;
                Utils.showModalDialog(modal);
            } else {
                layer.msg("未选择任何记录", {time: 1500});
            }
        },
        viewMessageLog: function (seqNo) {
            var url = baselocation + "/views/common/receipt/receiptMessageLog.jsp?serialNo=" + seqNo;
            var modalParam = {url: url};
            modalParam.area = ["800px", "500px"];
            var width = $(".container").width()+"px";
          //  modalParam.area.unshift(width,"600px");
            modalParam.title="查看回执";
            Utils.showModalDialog(modalParam);
        }
    }
;
//表单工具类
var FormUtils = {
    //页面初始化赋值，data：页面json格式数据
    initForm: function (data) {
        if (data === null || data === undefined || data === "") return;
        //遍历input赋值
        $.each($("input[name]"), function (index, val) {
            var type = $(this).attr("type");
            var field = $(this).attr("name");
            var fieldValue = data[field];
            if (fieldValue == undefined) return true;
            if (field == 'appId') return true;
            var isFormat = $(this).attr("isFormat");
            var dataFormat = $(this).attr("data-date-format");
            if (isFormat == "true") {
            	dataFormat=dataFormat.replace("-mm-","-MM-");
                fieldValue = fieldValue.replace(/-/g, "/");
                fieldValue = DateUtil.dateToStr(dataFormat, new Date(fieldValue));
                $(this).datepicker('setDate', fieldValue);
            }
            else if (type == "radio") {
                $('input[name="' + field + '"][value="' + fieldValue + '"]').attr("checked", "checked").parent().addClass("checked");
            }
            else {
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
                if (typeof(__onAfterLoad) == "function") {
                    __onAfterLoad(data);
                }
            },
            error: function (result) {
            }
        });
    },
    //获取单条变更数据
    getChangeData: function (param) {
        var dataUrl = param.dataUrl || _serverAddress;
        dataUrl += "/" + Utils.search("seqNo") + "/changeView";
        $.ajax({
            url: dataUrl,
            type: 'post',
            dataType: 'json',
            data: {"appId": $("#appId").val()},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (result) {
                FormUtils.initForm(result.data);
                if (typeof(__onAfterLoad) == "function") {
                    __onAfterLoad(result.data);
                }
            },
            error: function (result) {
            }
        });
    },
    /**
     * 从table的当前行获取数据并初始化到input中
     * author 宋轲
     */
    getRowData: function (id, fromId) {
        var data = $table.bootstrapTable('getRowByUniqueId', id);
        $.each($("#" + fromId + " input[name]"), function (index, val) {
            var field = $(this).attr("name");
            if (field == 'appId') return true;
            $("input[name=" + field + "]").val(data[field]);
        });
    },
    //表单序列化
    serializeForm: function (formId) {
        formId = formId || "dataForm";
        return $("#" + formId).serializeForm();
    },
    /**
     * 封装json对象
     * 页面需指定name='hid'的隐藏input元素
     * @param formId 需要转化的form的id
     * @returns 示例{storeCode: "", storeName: "", storeType: "", storeLicence: "", storeArea: ""}
     * author 宋轲
     */
    formToJson: function (formId, $index1) {
        var column = {},
            data = $('#' + formId).serializeArray();
        if ($index1 != '' && $index1 != undefined) {
            $index = $index1;
        }
        $.each(data, function () {
            if (this.name == 'hid') {
                column[this.name] = $index;
            } else {
                if (column[this.name]) {
                    if (!column[this.name].push) {
                        column[this.name] = [column[this.name]];
                    }
                    column[this.name].push(this.value || '');
                } else {
                    column[this.name] = this.value || '';
                }
            }
        });
        $index++;
        return column;
    },
    /**
     通用保存
     dataForm：form表单
     paramUrl：用于对映后台的新增还是修改
     isRedirectEdit：是否跳转编辑页面（不传isRedirectEdit值:list页面，true：回调函数,false:不做任何操作）
     */
    save: function (dataForm, paramUrl, isRedirectEdit) {
        var url = _serverAddress + paramUrl;
        var formData = $("#" + dataForm).serializeForm();
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
                if (result.code == 1) {
                    layer.msg(result.message, {icon: 1, time: 1000}, function () {
                        if (isRedirectEdit) {
                            if (typeof(__onAfterSave) == "function") {
                                __onAfterSave(result.data);   //回调函数 用于处理逻辑或跳转
                            }
                        } else if (typeof (isRedirectEdit) == "undefined") {
                            Utils.redirect(_jumpPage + "list.jsp");
                        }
                    });
                }
                else {
                    layer.msg(result.message, {time: 1500}, function () {
                        if (typeof (__onAfterSaveError) == "function") {
                            __onAfterSaveError(result.data);    //保存失败 回调
                        }
                    });
                }
            },
            error: function (result) {
                layer.msg(result.message, {icon: 1, time: 1500}, function () {
                    if (typeof (__onAfterSaveError) == "function") {
                        __onAfterSaveError(result.data);    //保存失败 回调
                    }
                });
            }
        });
    },
    //通用保存 json形式传回后台  修改或添加数据
    //dataParam参数说明：dataForm:form表单d ，paramUrl:用于对映后台的新增还是修改
    //afterOptype：保存成功后执行操作（refreshForm:刷新页面,refreshGrid：刷新列表，redirect:跳转页面）
    //gridId:table id,gridUrl
    commonSave: function (dataParam) {
        var url = _serverAddress + dataParam.paramUrl;
        var formData = JSON.stringify($("#" + dataParam.dataForm).serializeJson());
        var afterOptype = dataParam.afterOptype || "reback";
        var jumpage = _jumpPage + dataParam.jumpage || "list.jsp";//页面跳转默认返回列表页面
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
                if (result.code == 1) {
                    layer.msg("保存成功", {icon: 1, time: 1000}, function () {
                        //保存后执行
                        //页面跳转
                        if (afterOptype == "redirect")
                            Utils.redirect(dataParam.jumpUrl);
                        //刷新列表
                        else if (afterOptype == "refreshGrid") {

                        }
                        //刷新本页面
                        else {
                            var href = location.href;
                            if (Utils.search("id") == null) {
                                if (href.indexOf("?") == -1)
                                    href += "?id=" + result.data.uid;
                                else
                                    href += "&id=" + result.data.uid;
                            }
                            location.href = Utils.formatUrl(href);
                        }
                    });
                }
                else
                    layer.alert("保存失败");
            },
            error: function (result) {
                layer.alert("保存错误，原因为:" + result);
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
    setPageView: function () {
        $("input").attr("readonly", "readonly");
        $("select").prop("disabled", true);
        $("textarea").attr("readonly", "readonly");
        $("span").attr("readonly", "readonly");
        $(".datepicker").unbind("focus");
    }
};
//工具类
var Utils = {
    //跳转页面
    redirect: function (url) {
        location.href = Utils.formatUrl(url);
    },
    //页面跳转 参数（id：唯一标识，url：url地址）
    jumpPage: function (id, url) {
        if (url.indexOf("?") == -1)
            url += "?id=" + id;
        else
            url += "&id=" + id;
        location.href = Utils.formatUrl(_jumpPage + url);
    },
    //form表单数据，转换为json格式
    jsonByForm: function (dataForm, params) {
        var data = dataForm.serialize();
        if (params != null && typeof(params) != "undefined") {
            if (typeof(params.sort) == "undefined") params.sort = "";
            var page = "&pageSize=" + params.limit //页面条数
                + "&pageNumber=" + params.offset //起始行数
                + "&sort=" + params.sort //排序列名
                + "&sortOrder=" + params.order; //排位命令（desc，asc）
            data = data + page;
        }
        return data;
    },
    //查找location.href中的参数
    search: function (name) {
        var searchParam = location.href.split("?")[1];
        if (searchParam === undefined) return null;
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
    //下拉控件初始化,select须设置dll_name属性
    initDropDown: function (jsonData) {
        $.each($("select[dll_name]"), function () {
            var field = $(this).attr("name");
            var dll_name = $(this).attr("dll_name");
            var isShowEmpty = $(this).attr("isShowEmpty");
            var defaultValue = $(this).attr("default") || "";
            var dropDownData = jsonData[dll_name];
            if (dropDownData != undefined) {
                if (isShowEmpty == "true") {
                    var option = "<option value=''>--请选择--</option>";
                    $(this).append(option);
                }
                var options={data: dropDownData, lang: 'zh-CN', allowClear: true, theme: "classic"};
                $(this).select2(options);
                $(this).select2().val(defaultValue).trigger("change");

            }
        });
    },
    /* 异步加载获取下拉数据源，并根据select标签中已配置dll_name属性初始化下拉控件。
     * dictionaryValue为需要获取的字典值，可传多个,逗号隔开，格式为：dcl_type,ems_type
     * async：是否异步请求
     */
    setCodesDropDown: function (dictionaryValue, async) {
        $.ajax({
            url: _redisServer + '/getDictionary?dictionaryValue=' + dictionaryValue,
            type: 'get',
            async: async || true,
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (response) {
                Utils.initDropDown(response.data);
                if (typeof(__onAfterLoadCodes) == "function") {
                    __onAfterLoadCodes(response.data);
                }
            },
            error: function (response) {
                console.log("获取下拉数据源失败");
            }
        });
    },
    /*异步加载获取系统参数表的下拉数据源，并根据select标签中已配置dll_name属性初始化下拉控件。
     *tableNames为需要获取表名，可传多个,逗号隔开，格式为：codStdContaParam,codCusUnit
     * async：是否异步请求
     */
    setParamDropDown: function (tableNames, async) {
        $.ajax({
            url: _redisServer + '/getDataSource?tableNames=' + tableNames,
            type: 'get',
            async: async || true,
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (response) {
                Utils.initDropDown(response.data);
                if (typeof(__onAfterLoadParam) == "function") {
                    __onAfterLoadParam(response.data);
                }
            },
            error: function (response) {
                console.log("获取下拉数据源失败");
            }
        });
    },
    /*
     * 设置下拉初始化
     * dictionaryValue：字典表数据
     * tableNames：参数代码表数据
     * async：是否异步加载
     */
    setDropDown: function (dictionaryValue, tableNames, async) {
        var dropDownData = {};
        if(async == undefined) async = true;
        $.ajax({
            url: _redisServer + '/getDictionary?dictionaryValue=' + dictionaryValue,
            type: 'get',
            async: async,
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (response) {
                Utils.initDropDown(response.data);
                if (tableNames != null && tableNames != undefined && tableNames != "") {
                    $.ajax({
                        url: _redisServer + '/getDataSource?tableNames=' + tableNames,
                        type: 'get',
                        async: async,
                        xhrFields: {
                            withCredentials: true
                        },
                        crossDomain: true,
                        success: function (result) {
                            Utils.initDropDown(result.data);
                            if (typeof(__onAfterInitDropDown) == "function") {
                                __onAfterInitDropDown();
                            }
                        },
                        error: function (response) {
                            console.log("获取下拉数据源失败");
                        }
                    });
                }
                else {
                    if (typeof(__onAfterInitDropDown) == "function") {
                        __onAfterInitDropDown();
                    }
                }
            },
            error: function (response) {
                console.log("获取下拉数据源失败");
            }
        });
    },
    initCalendar: function () {
        $(".datepicker").datepicker({
            todayBtn: "linked",
            autoclose: true,
            todayHighlight: true,
            languge: "cn",
            showButtonPanel: true,//是否显示按钮面板
            clearText: "清除",//清除日期的按钮名称
            closeText: "关闭",//关闭选择框的按钮名称
        });
    },
    //打开模态窗口
    showModalDialog: function (options) {
        var area = options.area == undefined ? ["800px", "600px"] : options.area;
        var param ={
                type: 2,
                area: area,//宽高度
                title: options.title,
                id: options.id,
                scrollbar: false,
                anim: 2,
                shadeClose: false,
                shade: 0.5,
                closeBtn:options.closeBtn || 1,
                fixed: options.fixed || false, //不固定
                maxmin: options.maxmin || false,//最大化
                content: Utils.formatUrl(options.url)
            }
        if(options.offset!=undefined)
        	param.offset = options.offset;
        layer.open(param);
    },
    closeModalDialog: function () {
        var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
        parent.layer.close(index);
    },
    /**
     * 获取单据号
     * @param billParam 指定请求参数，示例：‘applyId=001&areaCode=4901&docType=a&serverType=c’
     * @param inputName 被写入的input的name
     * @param errorMsg  获取失败后的错误信息
     */
    getBillCode: function (billParam, inputName, errorMsg) {
        var nameArr = inputName.split(",");
        $.ajax({
            url: _billServer,
            data: billParam,
            dataType: 'json',
            xhrFields: {withCredentials: true},
            crossDomain: true,
            success: function (result) {
                if (result.code != 1) {
                    layer.msg(result.message, {time: 1500});
                } else {
                    $.each(nameArr, function (index, item) {
                        $('input[name=' + nameArr[index] + ']').val(result.data);//将生成的单据号写入input
                    });
                    if (typeof(__onAftergetBillCode) == "function") {
                        __onAftergetBillCode(result.data);
                    }
                }
            },
            error: function (result) {
                layer.alert(errorMsg);
            }
        });
    },
    /**
     * 获取企业备案号
     * param:指定传入的参数
     * inputName:需要写入的input元素name名称
     * 此方法适用于新增生成单据号，并以单据号作为查询条件获取表格初始化数据
     * 其他情况请调用其他方法
     * auhor 宋轲
     */
    getBillCodeAsParam: function (billParam, inputName, errorMsg) {
        var billUrl = _billServer;
        $.ajax({
            url: billUrl,
            data: billParam,
            dataType: 'json',
            xhrFields: {withCredentials: true},
            crossDomain: true,
            success: function (result) {
                if (result.code != 1) {
                    layer.msg(result.message, {icon: 1, time: 1000});
                } else {
                    $('input[name=' + inputName + ']').val(result.data);//将生成的企业备案号写入input
                    //由于加载顺序的问题，表格初始化必须放置在此
                    //先获取单据号，再以单据号为条件查询并执行初始化
                    DataGridUtils.initGridByUrl(param);
                }
            },
            error: function (result) {
                layer.alert(errorMsg);
            }
        });
    },
    formatUrl: function (url) {
        if (url.indexOf("?") == -1)
            url += "?t=" + Math.random();
        else
            url += "&t=" + Math.random();
        return url;
    },
    /*
     * 获取当前登录人信息，并赋值到页面相关值
     */
    getLoginUserInfo: function () {
        $.ajax({
            url: _loginUserUrl,
            type: 'get',
            dataType: 'json',
            async: true,
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (result) {
                if (result.status == 1) {
                    Utils.setSystemParam(result.data.loginuser);
                    if (typeof(__onAfterGetLoginUserInfo) == "function") {
                        __onAfterGetLoginUserInfo(result.data.loginuser);
                    }
                }
            },
            error: function (response) {
                console.log("获取下拉数据源失败");
            }
        });
    },
    /*
     * 设置系统字段
     */
    setSystemParam: function (data) {
        $("#inputerName").val(data.inputerName);//操作人名称
        $("#inputCopNo").val(data.inputCopNo);//操作单位编码
        $("#inputCopName").val(data.inputCopName); //操作单位名称
        if (data.copEnt == undefined) return;
        // $("#masterCuscd").select2().val(data.copEnt.customsCode).trigger("change");//主管关区
        //$("#areaCode").select2().val(data.copEnt.areaCode).trigger("areaCode");//监管场所copGbCode
    },
    getRequestParam: function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    },
    //四舍五入 val传入值 dec 精度
    doRound: function (val, dec) {
        if (arguments.length == 1) {
            dec = 0;
        }
        var _iResult = val * Math.pow(10, dec);

        _iResult = Math.round(_iResult) / Math.pow(10, dec);
        return _iResult;
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
                    eval(param.callbackSuccess + "(" + result + ")");
                }
            },
            //失败回调失败函数
            error: function (result) {
                if (param.callbackError) {
                    eval(param.callbackError + "(" + result + ")");
                }
            }
        });
    },
    /**
     * 打开div页面
     */
    showEditDiv:function(url, editDivId, editIframeId) {
    	var editDiv = editDivId || "editDiv";
    	var editIframe = editIframeId || "editIframe";
    	if ($("#" + editDiv).length == 0) {
    		$("body").append('<div id="' + editDiv + '" type="iframe" class=""><iframe id="' + editIframe + '" frameborder="0" scrolling="auto"  allowtransparency="true"  src=""></iframe></div>');
    	}
    	$("#" + editDiv).width($(window).width());
    	$("#" + editDiv).height($(window).height());
    	$("#" + editIframe).height($(window).height()-10);
    	$("#" + editIframe).width($(window).width()+8);
    	$("#" + editIframe).attr("src", url);
        $(".container").hide();
    	$("#" + editDiv).show();

/*    	var area = ["100%","100%"];
    	area[0] = "100%";
    	area[1] = $(window).height()+"px";
    	var id = Math.random();
    	var options = {area:area,url:url,title:"",offset:["0px","0px"],id:id};
    	var index = Utils.showModalDialog(options);
    	layer.full(index);
    	$(".layui-layer-setwin").hide();*/
    },
    /**
     * 关闭div页面
     */
    hideEditDiv:function(editDivId, editIframeId) {
    	var editDiv = editDivId || "editDiv";
    	var editIframe = editIframeId || "editIframe";
    	$("#" + editIframe).attr("src", "");
		$("#" + editDiv).hide();
		$(".container").show();
		/*$("body").removeClass("overflow");    	
    	$(".layui-layer-close").click();*/
    },
    validationNumber:function(e, num) {
        var regu = /^[0-9]+\.?[0-9]*$/;
        if (e.value != "") {
          if (!regu.test(e.value)) {
            e.value = e.value.substring(0, e.value.length - 1);
            e.focus();
          } else {
            if (num == 0) {
              if (e.value.indexOf('.') > -1) {
                e.value = e.value.substring(0, e.value.length - 1);
                e.focus();
              }
            }
            if (e.value.indexOf('.') > -1) {
              if (e.value.split('.')[1].length > num) {
                e.value = e.value.substring(0, e.value.length - 1);
                e.focus();
              }
            }
          }
        }
      }
};
var dynamicLoading = {
    css: function (path) {
        if (!path || path.length === 0) {
            throw new Error('argument "path" is required !');
        }
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.href = path;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        head.appendChild(link);
    },
    js: function (path) {
        if (!path || path.length === 0) {
            throw new Error('argument "path" is required !');
        }
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.src = path;
        script.type = 'text/javascript';
        head.appendChild(script);
    }
};
/**
 * 日期处理工具类
 */
var DateUtil = {
    /**
     * 日期对象转换为指定格式的字符串
     * @param formatStr 日期格式,格式定义如下 yyyy-MM-dd HH:mm:ss
     * @param date Date日期对象, 如果缺省，则为当前时间
     *
     * @return string 指定格式的时间字符串
     */
    dateToStr: function (formatStr, date) {
        formatStr = arguments[0] || "yyyy-MM-dd HH:mm:ss";
        date = arguments[1] || new Date();
        var str = formatStr;
        var Week = ['日', '一', '二', '三', '四', '五', '六'];
        str = str.replace(/yyyy|YYYY/, date.getFullYear());
        str = str.replace(/yy|YY/, (date.getYear() % 100) > 9 ? (date.getYear() % 100).toString() : '0' + (date.getYear() % 100));
        str = str.replace(/MM/, date.getMonth() > 9 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1));
        str = str.replace(/M/g, date.getMonth());
        str = str.replace(/w|W/g, Week[date.getDay()]);

        str = str.replace(/dd|DD/, date.getDate() > 9 ? date.getDate().toString() : '0' + date.getDate());
        str = str.replace(/d|D/g, date.getDate());

        str = str.replace(/hh|HH/, date.getHours() > 9 ? date.getHours().toString() : '0' + date.getHours());
        str = str.replace(/h|H/g, date.getHours());
        str = str.replace(/mm/, date.getMinutes() > 9 ? date.getMinutes().toString() : '0' + date.getMinutes());
        str = str.replace(/m/g, date.getMinutes());

        str = str.replace(/ss|SS/, date.getSeconds() > 9 ? date.getSeconds().toString() : '0' + date.getSeconds());
        str = str.replace(/s|S/g, date.getSeconds());

        return str;
    },
    /**
     * 字符串转换为日期对象
     * @param date Date 格式为yyyy-MM-dd HH:mm:ss，必须按年月日时分秒的顺序，中间分隔符不限制
     */
    strToDate: function (dateStr) {
        var data = dateStr;
        var reCat = /(\d{1,4})/gm;
        var t = data.match(reCat);
        t[1] = t[1] - 1;
        eval('var d = new Date(' + t.join(',') + ');');
        return d;
    }
}
//
/**
 * 表单验证工具类
 **/
var Validator = {
    //获取设置验证的字段集合
    getValidateFields: function () {
        var fields = $("*[isValidate=true]");
        var fieldParam = {};
        $.each(fields, function (index, val) {
            var validateParam = {};
            var fieldName = $(this).attr("fieldName");
            if (typeof(fieldName) == "undefined") fieldName = "必填项";
            var attrName = $(this).attr("name");

            //验证不为空
            var notempty = $(this).attr("notempty");
            if (typeof(notempty) != "undefined") {
                validateParam.notEmpty = {message: fieldName + "不能为空"};
                fieldParam[attrName] = {message: "验证不通过", validators: validateParam};
            }
            //邮编email
            var email = $(this).attr("email");
            if (typeof(email) != "undefined") {
                validateParam.emailAddress = {message: "email格式无效"};
                fieldParam[attrName] = {message: "验证不通过", validators: validateParam};
            }
            //验证长度
            var maxLength = $(this).attr("maxLength");
            var minLength = $(this).attr("minLength");
            if (typeof(minLength) != "undefined" || typeof(maxLength) != "undefined") {
                validateParam.stringLength = {message: "长度验证不通过"};
                var min = typeof(minLength) == "undefined" ? "" : minLength;
                var max = typeof(maxLength) == "undefined" ? "" : maxLength;
                if ((typeof(minLength) != "undefined" && min != "") && (typeof(maxLength) != "undefined" && max != "")) {
                    var message = "字符长度最小为" + min + "最大为" + max;
                    if(min == max){
                    	message = "字符长度应为" + min +"位";
                    }
                    validateParam.stringLength = {message: message, min: min, max: max};
                }
                else if (typeof(minLength) != "undefined" && min != "") {
                    var message = "字段长度最小为" + min;
                    validateParam.stringLength = {message: message, min: min};
                }
                else if (typeof(maxLength) != "undefined" && max != "") {
                    var message = "字段长度最大为" + max;
                    validateParam.stringLength = {message: message, max: max};
                }
                fieldParam[attrName] = {message: "验证不通过", validators: validateParam};
            }
        });
        return fieldParam;
    },
    //设置验证
    setValidateParam: function (formId) {
        //获取需要验证的字段集合
        var fields = this.getValidateFields();
        $('#' + formId)
            .bootstrapValidator({
                message: '验证不通过',
                //excluded: [':disabled', ':hidden', ':not(:visible)'],
                //live:'submitted',//验证模式：submitted：提交时触发，disabled：禁用触发，enabled：启用触发
                feedbackIcons: {
                    valid: 'glyphicon glyphicon-ok',
                    invalid: 'glyphicon glyphicon-remove',
                    validating: 'glyphicon glyphicon-refresh'
                },
                fields: fields //验证字段集合
            })
    },
    //验证是否通过
    validate: function (formId) {
        var dataForm = $('#' + formId);
        var data = dataForm.data('bootstrapValidator');
        if (data) {
            dataForm.bootstrapValidator('validate');
            if (!data.isValid()) {
                return false;
            }
        }
        return true;
    }
}
$(function () {
    $("form").append("<input type='hidden' id='appId' name='appId' value='1'>");
    /*
     * 查询栏 清除事件
     */
    $("button[type=reset]").click(function () {
        $("input").val("");
        if ($("select").length > 0)
            $("select").select2().val("").trigger("change");
        if ($(".datepicker").length > 0){
        	$(".datepicker").datepicker("clearDates");
        	$(".datepicker").datepicker("setStartDate",null);
        	$(".datepicker").datepicker("setEndDate",null);
        }         
    });
    /**
     * 控制小数位数
     */
    $("input[type='number']").bind("keypress", function(event) {
		 var event = event || window.event;
		 var getValue = $(this).val();
		 var step = $(this).attr("step") || "";
		 //控制第一个不能输入小数点"."
		 if (getValue.length == 0 && event.which == 46) {
			 event.preventDefault();
			 return;
		 }
		 //控制只能输入一个小数点"."
		 if (getValue.indexOf('.') != -1 && event.which == 46) {
			 event.preventDefault();
			 return;
		 }
		 //控制只能输入的值
		 if (event.which && (event.which < 48 || event.which > 57) && event.which != 8 && event.which != 46) {
				event.preventDefault();
				return;
		 }
	});
	/**
	 * 失去焦点时触发
	 */
    $("input[type='number']").bind("blur", function (event) {
        var step = $(this).attr("step") || ".";
        var len = step.split(".")[1].length;
        var value = $(this).val();
        var reg = new RegExp('^[\\+\\-]?\\d+\\.?\\d{0,' + len + '}');
        if (reg.test(value)) {
            value = value.match(reg)[0];
            $(this).val(value);
        }
    });
	/**
	 * 回车实现tab
	 */
	 var $target = $('input,button,select');
     $target.bind('keydown', function (e) {
    	 if(e==undefined) return;
         var key = e.which;
         if (key == 13) {
             e.preventDefault();
             var nxtIdx = $target.index(this) + 1;
             if ($target.eq(nxtIdx).attr("type") == "submit") {
                 $target.eq(nxtIdx).click();
             } else {
                 $target.eq(nxtIdx).focus();
             }
         }
     });
    /**
     * 前端防止重复点击
     * author 宋轲
     */
    /*var $lastElement;
    $(document).click(function (event) {
        var $element = event.target,
            $elementClass = $element.className.toString(),
            $elementLocal = $element.localName.toString(),
            $excludeElement = '搜索,清除';

        //排除搜索,清除,刷新按钮
        if($excludeElement.indexOf($element.innerText)>=0 || $elementClass.indexOf('fa-refresh')>=0){ return }

        if($elementClass.indexOf('layui-layer-close')>=0){//模态框关闭
            $($lastElement).css({ "pointer-events": "auto" });
            $($lastElement).removeAttr('disabled');
        }

        if($elementClass.indexOf('btn')>=0){
            $($lastElement).removeAttr('disabled');//解禁上个按钮
            $($element).attr('disabled','disabled');
            //处理a标签禁用
            if($elementLocal.indexOf('a')>=0){
                $($lastElement).css({ "pointer-events": "auto" });
                $($element).css({ "pointer-events": "none" });
            }
            $lastElement = $element;
        }
    });*/
})