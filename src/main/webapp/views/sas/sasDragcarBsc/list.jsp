<%@ page language="java" contentType="text/html; charset=utf-8"%>
<!DOCTYPE HTML>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <title>托卡备案</title>
    <link rel="stylesheet" href="../../../static/common/bootstrap-table-master/bootstrap-table.min.css" />
    <link rel="stylesheet" href="../../../static/common/bootstrap-datepicker-master/css/bootstrap-datepicker3.min.css" />
    <link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css" />
    <link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css" />
    <link rel="stylesheet" href="../../../static/common/select2/css/select2.min.css" type="text/css">
    <link rel="stylesheet" href="../../../static/admin/main/css/animate.css" />
    <link rel="stylesheet" href="../../../static/common/css/style.css" />
    <link rel="stylesheet" href="../../../static/common/css/common.css"/>
</head>
<body class="gray-bg">
<div class="container animated fadeInRight">
    <form id="searchForm">
       <div class="ibox">
        <div class="ibox-title font-bold">查询条件</div>
            <div class="ibox-content">
                <div class="row m-b-sm">
                    <div class="col-md-4 form-horizontal">
                        <label class="col-sm-4 control-label text-nowrap text-right">车架号</label>
                        <div class="col-sm-8">
                            <input type="text" id="vehicleFrameNo" name="vehicleFrameNo" class="form-control input-sm">
                        </div>
                    </div>
                    <div class="col-md-4 form-horizontal">
                        <label class="col-sm-4 control-label text-right text-nowrap">所属企业名称</label>
                        <div class="col-sm-8">
                            <input type="text" id="etpsNm" name="etpsNm" class="form-control input-sm">
                        </div>
                    </div>
                    <div class="col-md-4 form-horizontal">
                       <label class="col-sm-2 control-label text-nowrap text-right">预录编号</label>
                        <div class="col-sm-10">
                            <input type="text" id="etpsPreentNo" name="etpsPreentNo" class="form-control input-sm">
                        </div>
                    </div>
                    <%--<div class="col-md-4 form-horizontal">
                        <label class="col-sm-4 control-label text-nowrap text-right">业务类型</label>
                        <div class="col-sm-8">
                            <select class="form-control select2 form-horizontal" id="bizType" name="bizType" dll_name="SAS_TYPE">
                                <option value="">-请选择-</option>
                            </select>
                        </div>
                    </div>--%>

                   </div>
                <div class="row m-b-sm">
                	<%--<div class="col-md-4 form-horizontal">
                        <label class="col-sm-4 control-label text-nowrap text-right">监管场所</label>
                        <div class="col-sm-8">
                            <select class="form-control select2" id="areaCode" name="areaCode" dll_name="codStdAreaCode">
                                <option value="">--请选择--</option>
                            </select>
                        </div>
                    </div>--%>
                        <div class="col-md-4 form-horizontal">
                            <label class="col-sm-4 control-label text-nowrap text-right">申报类型</label>
                            <div class="col-sm-8">
                                <select class="form-control select2 form-horizontal" id="dclTypecd" name="dclTypecd"
                                        dll_name="DCL_TYPE" isShowEmpty="true"></select>
                            </div>
                        </div>
                    <div class="col-md-4 form-horizontal">
                        <label class="col-sm-4 control-label text-right text-nowrap">单据状态</label>
                        <div class="col-sm-8">
                            <select class="form-control select2" id="chkStatus" name="chkStatus" dll_name="CHK_STATUS">
                                <option value="">--请选择--</option>
                            </select>

                        </div>
                    </div>
                    <div class="col-md-4 form-horizontal">
                        <label class="col-sm-2 control-label text-right text-nowrap">操作时间</label>
                        <div class="col-sm-10">
                            <div class="input-group">
                                <input type="text" class="form-control input-sm datepicker" id="decTimeStart" name="decTimeStart" data-date-format="yyyy-mm-dd">
                                <span class="input-group-addon">至</span>
                                <input type="text" class="form-control input-sm datepicker" id="decTimeEnd" name="decTimeEnd" data-date-format="yyyy-mm-dd">
                            </div>
                        </div>
                    </div>
                </div>
                <!--第二行-->
                <div class="row">
                    <div class="col-md-4 pull-right text-right">
                        <div class="col-sm-4"></div>
                        <div class="col-sm-8">
                            <button type="button" class="btn btn-success btn-sm" id="search">
                                <i class="fa fa-search"></i>搜索
                            </button>
                            <button type="reset" class="btn btn-default btn-sm"id="reset">
                                <i class="fa fa-times"></i>清除
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
    <!--ibox-->
    <div class="ibox-title font-bold">托卡备案</div>
    <div class="ibox-content">
        <ul id="tab" class="nav nav-tabs">
            <li class="active bsc"><a href="#busTab" data-toggle="tab">预录入申报</a></li>
            <li class="cus"><a href="#cusTab" data-toggle="tab">审批(正式)数据</a></li>
            <li class="his"><a href="#hisTab" data-toggle="tab">申报历史记录</a></li>
        </ul>
        <div class="row m-t-sm">
            <div class="col-md-12" id="buttonGroup">
                <a href="javascript:void(0)" class="btn btn-info fa fa-refresh" id="refreshBtn">刷新</a>
                <span class="m-r-sm"></span>
                <a href="javascript:void(0)" class="btn btn-info fa fa-info-circle" onclick="view('view')">查阅</a>
                <a href="javascript:void(0)" class="btn btn-info fa fa-plus-square hid" onclick="view('add')">新增</a>
                <a href="javascript:void(0)" class="btn btn-info fa fa-edit hid" onclick="view('edit')">修改</a>
                <a href="javascript:void(0)" class="btn btn-info fa fa-remove hid" id="remove">删除</a>
                <span class="m-r-sm"></span>
                <a href="javascript:void(0)" class="btn btn-danger fa fa-exclamation-circle hid"
                   onclick="view('change')">变更</a>
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
    <!-- Data picker -->
    <script src="../../../static/common/bootstrap-datepicker-master/js/bootstrap-datepicker.js"></script>
    <!-- select2 -->
    <script src="../../../static/common/select2/js/select2.full.js"></script>
    <script src="../../../static/common/select2/js/i18n/zh-CN.js"></script>
    <!-- 自定义js -->
    <script src="../../../static/admin/main/js/contabs.js"></script>

    <script src="../../../static/common/js/common.js"></script>

	<script src="../../../static/sas/js/sasDragcarBsc.js"></script>

</body>
</html>