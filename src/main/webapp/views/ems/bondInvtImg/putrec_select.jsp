<%@ page language="java" contentType="text/html; charset=utf-8"%>
<!DOCTYPE HTML>
<html>
<head>
    <title>加工账册商品选择</title>
    <meta name="keywords" content="BSSP">
    <meta name="description" content="BSSP">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <link rel="shortcut icon" href="../../../favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css" type="text/css">
    <link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css" type="text/css">
    <link rel="stylesheet" href="../../../static/admin/main/css/animate.css" type="text/css">
    <link rel="stylesheet" href="../../../static/admin/main/css/style.css" type="text/css">
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
                    <div class="col-sm-7 form-horizontal">
                        <label class="col-sm-3 control-label text-right text-nowrap">商品序号</label>
                        <div class="col-sm-9">
                            <div class="input-group">
                                <input id="gdsSeqnoStart" name="gdsSeqnoStart" type="number" class="form-control input-sm">
                                <span class="input-group-addon">到</span>
                                <input id="gdsSeqnoEnd" name="gdsSeqnoEnd" type="number" class="form-control input-sm">
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-5 form-horizontal">
                        <label class="col-sm-4 control-label text-nowrap text-right">商品料号</label>
                        <div class="col-sm-8">
                            <input type="text" id="gdsMtno" name="gdsMtno" class="form-control input-sm">
                        </div>
                    </div>
                </div>
                <div class="row m-b-sm">
                    <div class="col-sm-7 form-horizontal">
                        <label class="col-sm-3 control-label text-nowrap text-right">商品编码</label>
                        <div class="col-sm-9">
                            <input type="text" name="gdecd" class="form-control input-sm">
                        </div>
                    </div>
                    <div class="col-sm-5 form-horizontal">
                        <label class="col-sm-4 control-label text-nowrap text-right">商品名称</label>
                        <div class="col-sm-8">
                            <input type="text" name="gdsNm" class="form-control input-sm">
                        </div>
                    </div>
                  <%--  <div class="col-sm-4 form-horizontal">
                        <div class="col-sm-4"></div>
                        <div class="col-sm-8">
                            <button type="button" class="btn btn-success btn-sm" id="search">搜索</button>
                            <button type="reset" class="btn btn-default btn-sm"> 清除</button>
                        </div>
                   </div>--%>
                   <%-- <div class="col-sm-2 pull-right text-right">
                        <button type="button" class="btn btn-success btn-sm" id="search">搜索</button>
                        <button type="reset" class="btn btn-default btn-sm"> 清除</button>
                    </div>--%>
             </div>
                <div class="row">
                    <div class="col-sm-12 pull-right text-right">
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
    <div class="ibox-content">
        <div class="row">
            <div class="col-md-12">
                <a href="javascript:void(0)" class="btn btn-info fa fa-check-square" id="ok">确认</a>
                <a href="javascript:void(0)" class="btn btn-info fa fa-plus-square" id="add-flag">新增商品</a>
                <a href="javascript:void(0)" class="btn btn-info fa fa-mail-reply" id="cancel">返回</a>
                <table id="table"></table>
            </div>
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
<script src="../../../static/bond/js/putrecselect_list.js"></script>
<script>
    $(function () {
        load(false);
    });
</script>
</body>
</html>