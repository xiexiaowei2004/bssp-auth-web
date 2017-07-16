<%@ page language="java" contentType="text/html; charset=utf-8" %>
<!DOCTYPE HTML>
<html>
<head>
    <title>出入库单</title>
    <meta name="keywords" content="BSSP">
    <meta name="description" content="BSSP">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <link rel="stylesheet" href="../../../static/common/bootstrap-table-master/bootstrap-table.min.css"/>
    <link rel="stylesheet" href="../../../static/common/bootstrap-datepicker-master/css/bootstrap-datepicker3.min.css"/>
    <link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css"/>
    <link rel="stylesheet" href="../../../static/common/select2/css/select2.min.css" type="text/css">
    <link rel="stylesheet" href="../../../static/admin/main/css/animate.css"/>
    <link rel="stylesheet" href="../../../static/common/css/style.css"/>
    <link rel="stylesheet" href="../../../static/common/css/common.css"/>
    <!-- HTML5 Shim 和 Respond.js 用于使IE8支持html5和css3媒介查询 -->
    <!--[if lt IE 9]>
    <script src="../../../static/common/html5shiv/html5shiv.min.js"></script>
    <script src="../../../static/common/html5shiv/respond.min.js"></script>
    <![endif]-->
</head>
<body class="gray-bg">
<div class="container animated fadeInRight">
    <form id="searchForm">
        <%--<input type="hidden" id="stockTypecd" name="stockTypecd">--%>
        <div class="ibox">
            <div class="ibox-title font-bold">查询条件</div>
            <div class="ibox-content">
                <div class="row m-b-sm">
                    <div class="col-md-3 form-horizontal">
                        <label class="col-sm-4 control-label text-nowrap text-right">出入库单编号</label>
                        <div class="col-sm-8">
                            <input type="text" name="sasStockNo" class="form-control input-sm">
                        </div>
                    </div>
                    <div class="col-md-4 form-horizontal">
                        <label class="col-sm-4 control-label text-nowrap text-right">企业预录入编号</label>
                        <div class="col-sm-8">
                            <input type="text" name="etpsPreentNo" class="form-control input-sm">
                        </div>
                    </div>
                    <div class="col-md-5 form-horizontal">
                        <label class="col-sm-3 control-label text-nowrap text-right">申报表编号</label>
                        <div class="col-sm-9">
                            <input type="text" name="sasDclNo" class="form-control input-sm">
                        </div>
                    </div>
                </div>
                <div class="row m-b-sm">
                    <div class="col-md-3 form-horizontal">
                        <label class="col-sm-4 control-label text-right text-nowrap">集报标志</label>
                        <div class="col-sm-8">
                            <select class="form-control select2 form-horizontal" id="centralizedDclTypecd"
                                    name="centralizedDclTypecd" dll_name="CENTRALIZED_DCL_TYPECD"
                                    isShowEmpty="true"></select>
                        </div>
                    </div>
                    <div class="col-md-4 form-horizontal">
                        <label class="col-sm-4 control-label text-right text-nowrap">核放单生成标志</label>
                        <div class="col-sm-8">
                            <select class="form-control select2 form-horizontal" id="passportUsedTypecd"
                                    name="passportUsedTypecd" dll_name="PASSPORT_USED_TYPECD"
                                    isShowEmpty="true"></select>
                        </div>
                    </div>
                    <div class="col-md-5 form-horizontal">
                        <label class="col-sm-3 control-label text-right text-nowrap">过卡标志</label>
                        <div class="col-sm-9">
                            <select class="form-control select2 form-horizontal" id="passTypecd" name="passTypecd"
                                    dll_name="PASS_TYPECD" isShowEmpty="true"></select>
                        </div>
                    </div>
                </div>
                <div class="row m-b-sm">
                    <div class="col-md-3 form-horizontal">
                        <label class="col-sm-4 control-label text-right text-nowrap">申报类型</label>
                        <div class="col-sm-8">
                            <select class="form-control select2 form-horizontal" id="dclTypecd" name="dclTypecd"
                                    dll_name="DCL_TYPECD_STOCK" isShowEmpty="true"></select>
                        </div>
                    </div>
                    <div class="col-md-4 form-horizontal">
                        <label class="col-sm-4 control-label text-right text-nowrap">单据状态</label>
                        <div class="col-sm-8">
                            <select class="form-control select2 form-horizontal" id="chkStatus" name="chkStatus"
                                    dll_name="CHK_STATUS" isShowEmpty="true"></select>
                        </div>
                    </div>
                    <div class="col-md-5 form-horizontal">
                        <label class="col-sm-3 control-label text-right text-nowrap">操作时间</label>
                        <div class="col-sm-9">
                            <div class="input-group">
                                <input type="text" class="form-control input-sm datepicker" name="decTimeStart"
                                       id="decTimeStart" data-date-format="yyyy-mm-dd">
                                <span class="input-group-addon">至</span>
                                <input type="text" class="form-control input-sm datepicker" name="decTimeEnd"
                                       id="decTimeEnd" data-date-format="yyyy-mm-dd">
                            </div>
                        </div>
                    </div>
                </div>
                <!--第二行-->
                <div class="row">
                    <div class="col-md-4 pull-right text-right">
                        <div class="col-sm-4"></div>
                        <div class="col-sm-8">
                            <button type="button" id="search" class="btn btn-success btn-sm"><i
                                    class="fa fa-search"></i> 搜索
                            </button>
                            <button type="reset" class="btn btn-default btn-sm" id="resetBtn"><i
                                    class="fa fa-times"></i> 清除
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
    <!--ibox-->
    <div class="ibox-title font-bold" id="title">列表数据</div>
    <div class="ibox-content">
            <ul id="tab" class="nav nav-tabs">
                <li class="active"><a href="#busTab" data-toggle="tab">预录入申报</a></li>
                <li><a href="#cusTab" data-toggle="tab">审批(正式)数据</a></li>
                <li><a href="#hisTab" data-toggle="tab">申报历史记录</a></li>
            </ul>
            <div class="row m-t-sm">
                <div class="col-md-12" id="buttonGroup">
                <a href="#1" class="btn btn-info fa fa-refresh" id="refreshBtn">刷新</a>
                <span class="m-r-sm"></span>
                <a href="javascript:void(0)" class="btn btn-info fa fa-info-circle" id="view">查阅</a>
                <a href="javascript:void(0)" class="btn btn-info fa fa-plus-square hid" id="add">新增</a>
                <a href="javascript:void(0)" class="btn btn-info fa fa-edit hid" id="modify">修改</a>
                <a href="javascript:void(0)" class="btn btn-info fa fa-remove hid" id="remove">删除</a>
                <span class="m-r-sm"></span>
                <a href="javascript:void(0)" class="btn btn-danger fa fa-exclamation-circle hid"
                   id="cancellation">作废申请</a>
                <%--<a href="javascript:void(0)" class="btn btn-danger fa fa-exclamation-circle" id="return">退运</a>--%>
                <span class="m-r-sm"></span>
                <a href="javascript:void(0)" class="btn btn-info fa fa-search hid" id="receipt">查看回执</a>
                <div class="tab-content">
                    <!-- 申请表 -->
                    <div class="tab-pane fade m-t-sm active in" id="busTab">
                        <table id="bscTable" class="table-nowrap"></table>
                    </div>
                    <!-- 正式表 -->
                    <div class="tab-pane fade  fade m-t-sm" id="cusTab">
                        <table id="cusTable" class="table-nowrap"></table>
                    </div>
                    <!-- 历史表 -->
                    <div class="tab-pane fade m-t-sm" id="hisTab">
                        <table id="hisTable" class="table-nowrap"></table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script src="../../../static/common/jquery/jquery-3.1.1.min.js"></script>
<script src="../../../static/common/bootstrap/js/bootstrap.min.js"></script>
<script src="../../../static/admin/main/js/metisMenu/jquery.metisMenu.js"></script>
<script src="../../../static/admin/main/js/slimscroll/jquery.slimscroll.min.js"></script>
<!-- jquery-ui-->
<script src="../../../static/common/jquery/jquery-ui.min.js"></script>
<!-- layer javascript -->
<script src="../../../static/common/layer/layer.js"></script>
<!-- Bootstrap table -->
<script src="../../../static/common/bootstrap-table-master/bootstrap-table.min.js"></script>
<script src="../../../static/common/bootstrap-table-master/extensions/export/bootstrap-table-export.js"></script>
<script src="../../../static/common/bootstrap-table-master/tableExport.js"></script>
<script src="../../../static/common/bootstrap-table-master/locale/bootstrap-table-zh-CN.min.js"></script>
<script src="../../../static/common/select2/js/select2.full.js"></script>
<script src="../../../static/common/select2/js/i18n/zh-CN.js"></script>
<script src="../../../static/common/bootstrap-table-master/extensions/export/bootstrap-table-export.js"></script>
<script src="../../../static/common/bootstrapvalidator-master/js/bootstrapValidator.min.js"></script>
<script src="../../../static/common/bootstrapvalidator-master/js/language/zh_CN.js"></script>
<!-- Data picker -->
<script src="../../../static/common/bootstrap-datepicker-master/js/bootstrap-datepicker.min.js"></script>
<!-- 自定义js -->
<script src="../../../static/admin/main/js/contabs.js"></script>
<script src="../../../static/common/js/common.js"></script>
<script src="../../../static/sas/js/sasStockBsc_grid.js"></script>
</body>
</html>