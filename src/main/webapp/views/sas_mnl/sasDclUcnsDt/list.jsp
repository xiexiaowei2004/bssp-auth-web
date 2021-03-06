<%@ page language="java" contentType="text/html; charset=utf-8" %>
<!DOCTYPE HTML>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <title>单损耗正式表</title>
    <link rel="stylesheet" href="../../../static/common/bootstrap-table-master/bootstrap-table.min.css"/>
    <link rel="stylesheet" href="../../../static/common/bootstrap-datepicker-master/css/bootstrap-datepicker3.min.css"/>
    <link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css"/>
    <link rel="stylesheet" href="../../../static/common/select2/css/select2.min.css" type="text/css">
    <link rel="stylesheet" href="../../../static/admin/main/css/animate.css"/>
    <link rel="stylesheet" href="../../../static/admin/main/css/style.css"/>
    <link rel="stylesheet" href="../../../static/common/css/style.css"/>
    <link rel="stylesheet" href="../../../static/common/css/common.css"/>

    <!-- HTML5 Shim 和 Respond.js 用于使IE8支持html5和css3媒介查询 -->
    <!--[if lt IE 9]>
    <script src="../../../static/common/html5shiv/html5shiv.min.js"></script>
    <script src="../../../static/common/html5shiv/respond.min.js"></script>
    <![endif]-->
</head>
<body class="gray-bg">
<div class="animated fadeInRight">
    <form id="searchForm">
        <div class="ibox">
        <input type="hidden" id="modfMarkcd" name="modfMarkcd" value="2">
                <!-- <div class="ibox-title font-bold">查询条件</div> -->
            <div class="ibox-content">
                <div class="row m-b-sm">
                <div class="col-sm-4 form-horizontal">
                    <label class="col-sm-3 control-label text-nowrap text-right">成品序号</label>
                    <div class="col-sm-9">
                        <input type="text" id="mtpckSeqno" name="mtpckSeqno" class="form-control input-sm">
                    </div>
                </div>
                <div class="col-sm-4 form-horizontal">
                    <label class="col-sm-3 control-label text-right text-nowrap">料件序号</label>
                    <div class="col-sm-9">
                        <input type="text" id="endprdSeqno" name="endprdSeqno" class="form-control input-sm">
                    </div>
                </div>
                <div class="col-sm-3 pull-center text-right">
                    <div class="col-sm-2"></div>
                    <div class="col-sm-10">
                        <button type="button" id="search" class="btn btn-success btn-sm"><i class="fa fa-search"></i> 搜索</button>
                        <button type="button" class="btn btn-default btn-sm" id="resetBtn"><i class="fa fa-times"></i> 清除</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </form>
    <!--ibox-->
    <!-- <div class="ibox-title font-bold">列表数据</div> -->
    <div class="ibox-content">
        <div class="row">
            <div class="col-md-12">
                <%--<a href="javascript:void(0)" class="btn btn-info fa fa-refresh" id="refreshBtn">刷新</a>--%>
                <%--<span class="m-r-sm"></span>--%>
                <a href="javascript:void(0)" class="btn btn-info fa fa-check-square" id="affirm">确认</a>
                <a href="javascript:void(0)" class="btn btn-info fa fa-mail-reply" id="reback">返回</a>
                <table id="table"></table>
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
<script src="../../../static/sas_mnl/js/sasdclucnsdt_grid.js"></script>
</body>
</html>