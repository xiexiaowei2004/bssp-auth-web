<%@ page language="java" contentType="text/html; charset=utf-8"%>
<!DOCTYPE HTML>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <title>加贸账册商品选择 </title>
    <link rel="stylesheet" href="../../../static/common/bootstrap-table-master/bootstrap-table.min.css" />
    <link rel="stylesheet" href="../../../static/common/bootstrap-datepicker-master/css/bootstrap-datepicker3.min.css" />
    <link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css" />
    <link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css" />
    <link rel="stylesheet" href="../../../static/common/select2/css/select2.min.css" type="text/css">
    <link rel="stylesheet" href="../../../static/common/bootstrapvalidator-master/css/bootstrapValidator.min.css" type="text/css">
    <link rel="stylesheet" href="../../../static/admin/main/css/animate.css" />
    <link rel="stylesheet" href="../../../static/common/css/style.css" />
    <link rel="stylesheet" href="../../../static/common/css/common.css" />

    <!-- HTML5 Shim 和 Respond.js 用于使IE8支持html5和css3媒介查询 -->
    <!--[if lt IE 9]>
    <script src="../../../static/common/html5shiv/html5shiv.min.js"></script>
    <script src="../../../static/common/html5shiv/respond.min.js"></script>
    <![endif]-->
</head>
<body class="hold-transition skin-blue sidebar-mini">
<div class="animated fadeInRight">
    <form id="searchForm">
        <input type="hidden" name="directionTypecd" id="directionTypecd">
        <div class="ibox">
            <div class="ibox-content">
           <%--     <div class="row m-b-sm">
                    <div class="col-md-6 form-horizontal">
                        <label class="col-sm-4 control-label text-nowrap text-right">商品序号</label>
                        <div class="col-sm-8">
                            <input type="text" name="putrecSeqno" class="form-control input-sm">
                        </div>
                    </div>
                    <div class="col-md-6 form-horizontal">
                        <label class="col-sm-4 control-label text-nowrap text-right">商品料号</label>
                        <div class="col-sm-8">
                            <input type="text" name="gdsMtno" class="form-control input-sm">
                        </div>
                    </div>
                </div>--%>
                <div class="row m-b-sm">
                    <div class="col-md-6 form-horizontal">
                        <label class="col-sm-4 control-label text-nowrap text-right">商品编码</label>
                        <div class="col-sm-8">
                            <input type="text" name="gdecd" class="form-control input-sm">
                        </div>
                    </div>
                    <div class="col-md-6 form-horizontal">
                        <label class="col-sm-4 control-label text-nowrap text-right">商品名称</label>
                        <div class="col-sm-8">
                            <input type="text" name="gdsNm" class="form-control input-sm">
                        </div>
                    </div>
                </div>
                <!--第二行-->
                <div class="row">
                    <div class="col-md-4 pull-right text-right">
                        <div class="col-sm-4"></div>
                        <div class="col-sm-8">
                            <button type="button" class="btn btn-success btn-sm" id="search">查询</button>
                            <button type="reset" class="btn btn-default btn-sm"> 清除</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
    <div class="row">
        <div class="col-md-12">
                <a href="javascript:void(0)" class="btn btn-info fa fa-check-square" id="ok">确认</a>
                <a href="javascript:void(0)" class="btn btn-default fa fa-mail-reply" id="cancel">返回</a>
            <table id="table"></table>
        </div>
    </div>
</div>
<script src="../../../static/common/jquery/jquery-3.1.1.min.js"></script>
<script src="../../../static/common/bootstrap/js/bootstrap.min.js"></script>
<script src="../../../static/admin/main/js/metisMenu/jquery.metisMenu.js"></script>
<script src="../../../static/admin/main/js/slimscroll/jquery.slimscroll.min.js"></script>
<script src="../../../static/common/jquery/jquery-ui.min.js"></script>
<script src="../../../static/common/layer/layer.js"></script>
<script src="../../../static/common/select2/js/select2.full.js"></script>
<script src="../../../static/common/select2/js/i18n/zh-CN.js"></script>
<!-- Bootstrap table -->
<script src="../../../static/common/bootstrap-table-master/bootstrap-table.min.js"></script>
<script src="../../../static/common/bootstrap-table-master/extensions/export/bootstrap-table-export.js"></script>
<script src="../../../static/common/bootstrap-table-master/tableExport.js"></script>
<script src="../../../static/common/bootstrap-table-master/locale/bootstrap-table-zh-CN.min.js"></script>
<script src="../../../static/common/bootstrapvalidator-master/js/bootstrapValidator.min.js"></script>
<script src="../../../static/common/bootstrapvalidator-master/js/language/zh_CN.js"></script>
<script src="../../../static/common/bootstrap-datepicker-master/js/bootstrap-datepicker.js"></script>
<!-- 自定义js -->
<script src="../../../static/admin/main/js/contabs.js"></script>
<script src="../../../static/common/js/common.js"></script>
<script src="../../../static/common/js/formCommon.js"></script>
<script src="../../../static/erp/js/emsImgExg_select.js"></script>
<script>
    $(function () {
        load(false);
    });
</script>

</body>
</html>