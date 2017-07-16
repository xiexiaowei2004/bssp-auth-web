<%@ page language="java" contentType="text/html; charset=utf-8"%>
<!DOCTYPE HTML>
<html>
<head>
    <title>报文发送队列</title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <link rel="stylesheet" href="../../../static/common/bootstrap-table-master/bootstrap-table.min.css" />
    <link rel="stylesheet" href="../../../static/common/bootstrap-datepicker-master/css/bootstrap-datepicker3.min.css" />
    <link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css" />
    <link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css" />
    <link rel="stylesheet" href="../../../static/common/select2/css/select2.min.css" type="text/css">
    <link rel="stylesheet" href="../../../static/admin/main/css/animate.css" />
    <link rel="stylesheet" href="../../../static/common/css/style.css" />
    <link rel="stylesheet" href="../../../static/common/css/style.css" />
    <!--[if lt IE 9]>
    <script src="../../../static/common/html5shiv/html5shiv.min.js"></script>
    <script src="../../../static/common/html5shiv/respond.min.js"></script>
    <![endif]-->
</head>
<body class="gray-bg">
    <div class="container animated fadeInRight">
        <form method="post" id="searchForm">
            <div class="ibox">
            	<div class="ibox-title font-bold">查询条件</div>
                <div class="ibox-content">
                    <!-- 第一行 -->
                    <div class="row m-b-sm">
                        <div class="col-md-6 form-horizontal">
                            <label class="col-sm-4 control-label text-nowrap text-right">监管场所</label>
                            <div class="col-sm-8">
                                <input type="text" name="areaCode" class="form-control input-sm">
                            </div>
                        </div>
                        <div class="col-md-6 form-horizontal">
                            <label class="col-sm-4 control-label text-nowrap text-right">单据类型</label>
                            <div class="col-sm-8">
                                <input type="text" name="docType" class="form-control input-sm">
                            </div>
                        </div>
                    </div>
                    <!-- 第二行 -->
                    <div class="row m-b-sm">
                        <div class="col-md-6 form-horizontal">
                            <label class="col-sm-4 control-label text-nowrap text-right">业务类型</label>
                            <div class="col-sm-8">
                                <input type="text" name="bizType" class="form-control input-sm">
                            </div>
                        </div>
                        <div class="col-md-6 form-horizontal">
                            <label class="col-sm-4 control-label text-nowrap text-right">单据编号</label>
                            <div class="col-sm-8">
                                <input type="text" name="seqNo" class="form-control input-sm">
                            </div>
                        </div>
                    </div>
                    <!-- 第三行 -->
                    <div class="row">
                        <div class="col-md-4 pull-right text-right">
                            <div class="col-sm-4"></div>
                            <div class="col-sm-8">
                                <button type="button" class="btn btn-success btn-sm" id="search">搜索</button>
                                <button type="reset" class="btn btn-default btn-sm"> 清除</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>

        <!--ibox-->
        <div class="ibox-content">
            <div class="row">
                <div class="col-md-12">
                    <%--<a href="#1" class="btn btn-info fa fa-info-circle" id="find"> 查阅</a>--%>
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
    <script src="../../../static/common/js/common.js"></script>
    <script src="../../../static/edi/js/ediSendLog.js"></script>
</body>
</html>