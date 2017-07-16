<%@ page language="java" contentType="text/html; charset=utf-8"%>
<!DOCTYPE HTML>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <title>报关单</title>
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
                        <label class="col-sm-3 control-label text-nowrap text-right">统一编号</label>
                        <div class="col-sm-9">
                            <input type="text" id="seqNo" name="seqNo" class="form-control input-sm">
                        </div>
                    </div>
                    <div class="col-md-4 form-horizontal">
                        <label class="col-sm-3 control-label text-right text-nowrap">报关单号</label>
                        <div class="col-sm-9">
                            <input type="text" id="entryId" name="entryId" class="form-control input-sm">
                        </div>
                    </div>
                    <div class="col-md-4 form-horizontal">
                       <label class="col-sm-3 control-label text-nowrap text-right">预录入号</label>
                        <div class="col-sm-9">
                            <input type="text" id="etpsPreentNo" name="etpsPreentNo" class="form-control input-sm">
                        </div>
                    </div>
                   </div>
                <div class="row m-b-sm">
                    <div class="col-md-4 form-horizontal">
                            <label class="col-sm-3 control-label text-nowrap text-right">收发货人代码</label>
                            <div class="col-sm-9">
                                <input type="text" id="tradeCode" name="tradeCode" class="form-control input-sm">
                            </div>
                    </div>
                    <div class="col-md-4 form-horizontal">
                        <label class="col-sm-3 control-label text-nowrap text-right">进出口岸</label>
                        <div class="col-sm-9">
                            <select class="form-control select2" id="iEPort" name="iEPort" dll_name="CHK_STATUS">
                                <option value="">--请选择--</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-4 form-horizontal"></div>
                </div>
                <div class="row m-b-sm">
                    <div class="col-md-4 form-horizontal">
                        <label class="col-sm-3 control-label text-nowrap text-right">申报日期</label>
                        <div class="col-sm-9">
                            <div class="input-group">
                                <input type="text" class="form-control input-sm datepicker" name="dclTimeStart"
                                       id="dclTimeStart" data-date-format="yyyy-mm-dd">
                                <span class="input-group-addon">至</span>
                                <input type="text" class="form-control input-sm datepicker" name="dclTimeEnd"
                                       id="dclTimeEnd" data-date-format="yyyy-mm-dd">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 form-horizontal">
                        <label class="col-sm-3 control-label text-right text-nowrap">操作日期</label>
                        <div class="col-sm-9">
                            <div class="input-group">
                                <input type="text" class="form-control input-sm datepicker" name="updateTimeStart"
                                       id="updateTimeStart" data-date-format="yyyy-mm-dd">
                                <span class="input-group-addon">至</span>
                                <input type="text" class="form-control input-sm datepicker" name="updateTimeEnd"
                                       id="updateTimeEnd" data-date-format="yyyy-mm-dd">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 form-horizontal"></div>
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
    <div class="ibox-title font-bold">报关单</div>
    <div class="ibox-content">
        <div class="row m-t-sm">
            <div class="col-md-12" id="buttonGroup">
                <a href="javascript:void(0)" class="btn btn-info fa fa-refresh" id="refreshBtn">刷新</a>
                <span class="m-r-sm"></span>
                <a href="javascript:void(0)" class="btn btn-info fa fa-info-circle" onclick="view('view')">查阅/审批</a>
                <a href="javascript:void(0)" class="btn btn-info fa fa-plus-square hid" onclick="view('add')">新增</a>
                <a href="javascript:void(0)" class="btn btn-info fa fa-edit hid" onclick="view('edit')">修改</a>
                <a href="javascript:void(0)" class="btn btn-info fa fa-sign-in" id="import">导入</a>
                <a href="javascript:void(0)" class="btn btn-info fa fa-download" id="download">导入模板下载</a>
                <a href="javascript:void(0)" class="btn btn-info fa fa-file" id="copy">复制</a>
                <a href="javascript:void(0)" class="btn btn-info fa fa-remove hid" id="remove">删除</a>
                <span class="m-r-sm"></span>
                <a href="javascript:void(0)" class="btn btn-info fa fa-search hid" id="receipt">查看回执</a>
                <div class="tab-content">
                    <table id="mTable" class="table-nowrap"></table>
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

	<script src="../../../static/entry/js/entryHead.js"></script>

</body>
</html>