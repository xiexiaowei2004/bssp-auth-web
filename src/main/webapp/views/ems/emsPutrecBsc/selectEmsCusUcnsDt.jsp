<%@ page language="java" contentType="text/html; charset=utf-8" %>
<!DOCTYPE HTML>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <title>选择账册正式表数据</title>
    <link rel="stylesheet" href="../../../static/common/bootstrap-table-master/bootstrap-table.min.css"/>
    <link rel="stylesheet" href="../../../static/common/bootstrap-datepicker-master/css/bootstrap-datepicker3.min.css"/>
    <link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css"/>
    <link rel="stylesheet" href="../../../static/common/select2/css/select2.min.css" type="text/css">
    <link rel="stylesheet" href="../../../static/admin/main/css/animate.css"/>
    <link rel="stylesheet" href="../../../static/admin/main/css/style.css"/>
    <link rel="stylesheet" href="../../../static/common/css/style.css"/>

    <!-- HTML5 Shim 和 Respond.js 用于使IE8支持html5和css3媒介查询 -->
    <!--[if lt IE 9]>
    <script src="../../../static/common/html5shiv/html5shiv.min.js"></script>
    <script src="../../../static/common/html5shiv/respond.min.js"></script>
    <![endif]-->
</head>
<body>
<div>
    <form id="searchForm">
        <div class="ibox">
            <div class="ibox-content">
                <div class="row m-b-sm">
                    <div class="col-sm-3 form-horizontal">
                        <label class="col-sm-3 control-label text-nowrap text-right">成品序号</label>
                        <div class="col-sm-9">
                            <input type="text" name="endprdSeqno" class="form-control input-sm">
                        </div>
                    </div>
                    <div class="col-sm-3 form-horizontal">
                        <label class="col-sm-3 control-label text-nowrap text-right">料件序号</label>
                        <div class="col-sm-9">
                            <input type="text" name="endprdGdsMtno" class="form-control input-sm">
                        </div>
                    </div>
                    <div class="col-sm-4 form-horizontal">
                        <label class="col-sm-4 control-label text-nowrap text-right">单耗版本号</label>
                        <div class="col-sm-8">
                            <input type="text" name="ucnsVerno" class="form-control input-sm">
                        </div>
                    </div>
                    <div class="col-sm-2 pull-right text-right">
                            <button type="button" class="btn btn-success btn-sm" id="search">搜索</button>
                            <button type="reset" class="btn btn-default btn-sm"> 清除</button>
                        </div>
                </div>
            </div>
        </div>
    </form>
    <!--ibox-->
    <div class="ibox-content">
        <div class="row">
            <div class="col-md-12">
                <a href="javascript:void(0);" class="btn btn-info fa fa-plus-square" id="determine">确定</a>
                <a href="javascript:void(0);" class="btn btn-info fa fa-mail-reply" id="reback">取消</a>
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
<script src="../../../static/ems/js/emscusucnsdt_select.js"></script>
</body>
</html>