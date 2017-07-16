<%@ page language="java" contentType="text/html; charset=utf-8"%>
<!DOCTYPE HTML>
<html>
<head>
    <title>选择企业</title>
    <meta name="keywords" content="BSSP">
    <meta name="description" content="BSSP">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <link rel="shortcut icon" href="../../../favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css" type="text/css">
    <link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css" type="text/css">
    <link rel="stylesheet" href="../../../static/admin/main/css/animate.css" type="text/css">
    <link rel="stylesheet" href="../../../static/common/css/style.css" />
    <link rel="stylesheet" href="../../../static/common/bootstrap-table-master/bootstrap-table.min.css" type="text/css">
    <link rel="stylesheet" href="../../../static/common/bootstrap-datepicker-master/css/bootstrap-datepicker.min.css" type="text/css">
    <link rel="stylesheet" href="../../../static/common/select2/css/select2.min.css" type="text/css">
</head>
<body class="gray-bg">
<div class="animated fadeInRight">
    <form id="searchForm">
        <div class="ibox">
            <div class="ibox-content">
                <div class="row m-b-sm">
                    <div class="col-md-4 form-horizontal">
                        <label class="col-sm-4 control-label text-nowrap text-right">企业名称</label>
                        <div class="col-sm-8">
                            <input type="text" id="entName" name="entName" class="form-control input-sm">
                        </div>
                    </div>
                    <div class="col-md-4 form-horizontal">
                        <label class="col-sm-4 control-label text-nowrap text-right">社会信用代码</label>
                        <div class="col-sm-8">
                            <input type="text" id="copGbCode" name="copGbCode" class="form-control input-sm">
                        </div>
                    </div>
                    <div class="col-md-4 form-horizontal">
                        <label class="col-sm-2 control-label text-right text-nowrap">有效期</label>
                        <div class="col-sm-10">
                            <div class="input-group">
                                <input type="text" class="form-control input-sm datepicker" name="validDateStart"
                                       id="validDateStart" data-date-format="yyyy-mm-dd">
                                <span class="input-group-addon">至</span>
                                <input type="text" class="form-control input-sm datepicker" name="validDateEnd"
                                       id="validDateEnd" data-date-format="yyyy-mm-dd">
                            </div>
                        </div>
                    </div>
                </div>
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
    <div class="ibox-title font-bold">企业备案信息</div>
    <div class="ibox-content">
        <div class="m-b-sm">
            <i class="btn btn-info fa fa-check-square" id="ok">确认</i>
            <i class="btn btn-info fa fa-mail-reply" id="cancel">返回</i>
        </div>
        <div class="row">
            <div class="col-md-12">
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
<script src="../../../static/sas/js/sasFixedCardBscCompany.js"></script>
<script src="../../../static/sas/js/sasFixedCardBsc_cop.js"></script>
</body>
</html>