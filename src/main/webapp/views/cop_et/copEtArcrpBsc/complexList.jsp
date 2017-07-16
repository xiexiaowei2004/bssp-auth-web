<%@ page language="java" contentType="text/html; charset=utf-8" %>
<!DOCTYPE HTML>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <title>商品列表</title>
    <link rel="stylesheet" href="../../../static/common/bootstrap-table-master/bootstrap-table.min.css"/>
    <link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css"/>
    <link rel="stylesheet" href="../../../static/common/select2/css/select2.min.css" type="text/css">
    <link rel="stylesheet" href="../../../static/admin/main/css/animate.css"/>
    <link rel="stylesheet" href="../../../static/admin/main/css/style.css"/>
    <link rel="stylesheet" href="../../../static/common/css/common.css"/>

    <!-- HTML5 Shim 和 Respond.js 用于使IE8支持html5和css3媒介查询 -->
    <!--[if lt IE 9]>
    <script src="../../../static/common/html5shiv/html5shiv.min.js"></script>
    <script src="../../../static/common/html5shiv/respond.min.js"></script>
    <![endif]-->
</head>
<body class="gray-bg">
<div class="ibox m-t-none m-b-n">
    <div class="ibox-content">
        <form method="post" id="searchForm">
            <div class="row m-b-sm">
                <div class="col-sm-4 form-horizontal">
                    <label class="col-sm-3 control-label text-nowrap text-right">商品编码</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" maxlength="4" name="codeT"/>
                    </div>
                </div>
                <div class="col-sm-4 form-horizontal">
                    <label class="col-sm-3 control-label text-nowrap text-right">商品名称</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" name="gName"/>
                    </div>
                </div>
                <div class="col-sm-4 form-horizontal pull-right text-right">
                    <button type="button" id="search" class="btn btn-success btn-sm">搜索</button>
                    <button type="reset" id="reset" class="btn btn-default btn-sm">清除</button>
                </div>
            </div>
        </form>
    </div>
</div>
<!--ibox-->
<div class="ibox m-t-none">
    <div class="ibox-content">
        <div class="row">
            <div class="col-md-12">
                <a href="#1" class="btn btn-info fa fa-plus-square" id="choose">选取</a>
                <table id="table"></table>
            </div>
        </div>
    </div>
</div>
<script src="../../../static/common/jquery/jquery-3.1.1.min.js"></script>
<script src="../../../static/common/bootstrap/js/bootstrap.min.js"></script>
<!-- jquery-ui-->
<script src="../../../static/common/jquery/jquery-ui.min.js"></script>
<!-- layer javascript -->
<script src="../../../static/common/layer/layer.js"></script>
<!-- Bootstrap table -->
<script src="../../../static/common/bootstrap-table-master/bootstrap-table.min.js"></script>
<script src="../../../static/common/bootstrap-table-master/extensions/export/bootstrap-table-export.js"></script>
<script src="../../../static/common/bootstrap-table-master/tableExport.js"></script>
<script src="../../../static/common/bootstrap-table-master/locale/bootstrap-table-zh-CN.min.js"></script>
<!-- 自定义js -->
<script src="../../../static/admin/main/js/contabs.js"></script>
<script src="../../../static/common/js/common.js"></script>
<script src="../../../static/cop_et/js/copEtComplex_grid.js"></script>
</body>
</html>