<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <title>报文收发处理日志-查阅</title>
    <link rel="stylesheet" href="../../../static/common/bootstrap-table-master/bootstrap-table.min.css"/>
    <link rel="stylesheet" href="../../../static/common/bootstrap-datepicker-master/css/bootstrap-datepicker3.min.css"/>
    <link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css"/>
    <link rel="stylesheet" href="../../../static/common/select2/css/select2.min.css" type="text/css">
    <link rel="stylesheet" href="../../../static/common/bootstrapvalidator-master/css/bootstrapValidator.min.css"
          type="text/css">
    <link rel="stylesheet" href="../../../static/admin/main/css/animate.css"/>
    <link rel="stylesheet" href="../../../static/admin/main/css/style.css"/>
    <link rel="stylesheet" href="../../../static/common/css/common.css"/>

    <!-- HTML5 Shim 和 Respond.js 用于使IE8支持html5和css3媒介查询 -->
    <!--[if lt IE 9]>
    <script src="../../../static/common/html5shiv/html5shiv.min.js"></script>
    <script src="../../../static/common/html5shiv/respond.min.js"></script>
    <![endif]-->
    <style>
        #dataForm td {
            border: none;
        }

        .form-group {
            margin-bottom: 0;
        }

        #form td {
            border: none;
        }
    </style>
</head>
<body class="gray-bg">
<div class="container animated fadeInRight">
    <div class="ibox">
        <div class="ibox-title with-border collapsed-box">
            <div class="pull-left">
                <h4 class="box-title pull-left" id="headTitle">报文收发处理日志-查阅</h4>
            </div>
            <div class="pull-right">
                <a href="#1" class="collapse-link" title="收起表头"><i class="fa fa-chevron-up"></i></a>
            </div>
        </div>
        <div class="ibox-content">
            	<span class="m-r-sm">
						<a href="#1" class="btn btn-info fa fa-info-circle" id="query">报文详情</a>
                </span>
            <a href="#1" class="btn btn-info fa fa-mail-reply" id="reback"
               onclick="Utils.redirect('../../../views/edi/ediMessageLog/list.jsp')">返回</a>
        </div>
        <div class="ibox-content">
            <form id="form" class="form-horizontal">
                <input type="hidden" id="messageUid" name="messageUid">
                <table class="table table-condensed noborder">
                    <tr>
                        <td class="table-label text-nowrap text-right">编号</td>
                        <td><input class="form-control" id="serialNo" name="serialNo" readonly></td>
                        <td class="table-label text-nowrap text-right">监管场所</td>
                        <td><input class="form-control" id="areaCode" name="areaCode" readonly></td>
                        <td class="table-label text-nowrap text-right">单据类型</td>
                        <td><input class="form-control" id="docType" name="docType" readonly></td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap text-right">业务类型</td>
                        <td><input class="form-control" id="bizType" name="bizType" readonly></td>
                        <td class="table-label text-nowrap text-right">报文名称</td>
                        <td><input class="form-control" id="fileName" name="fileName" readonly></td>
                        <td class="table-label text-nowrap text-right">处理时间</td>
                        <td><input class="form-control" id="processingTime" name="processingTime" readonly></td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap text-right">状态</td>
                        <td><input class="form-control" id="status" name="status" readonly></td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap text-right">检查信息</td>
                        <td colspan="5">
                            <textarea class="form-control" rows="6" cols="80%" id="checkInfoStr" name="checkInfoStr" readonly="readonly"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap text-right">处理原因</td>
                        <td colspan="5">
                            <textarea class="form-control" rows="15" cols="80%" id="processingLogStr" name="processingLogStr" readonly="readonly"></textarea>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    </div>


    <!-- 新增模态框（Modal） -->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog" style="width: 70%;">
            <div class="modal-content">
                <div class="modal-header caption">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title" id="addModalLabel">报文详情</h4>
                </div>
                <div class="ibox-content">
                    <button type="button" class="btn btn-info fa fa-mail-reply" data-dismiss="modal">关闭</button>
                </div>

                <div class="modal-body ibox-content" style="padding-bottom: 0;">

                </div>
                <div class="ibox float-e-margins">
                    <%--<table class="table table-striped table-bordered" style="width: 95%; margin: auto;" id="table1">--%>
                    <div id="shur" class="text-center">
                        <textarea rows="15" cols="100%" id="bigData" readonly="readonly"></textarea>
                    </div>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
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
<script src="../../../static/admin/main/js/content.js"></script>
<script src="../../../static/common/bootstrap-datepicker-master/js/bootstrap-datepicker.js"></script>
<!-- select2 -->
<script src="../../../static/common/select2/js/select2.full.js"></script>
<script src="../../../static/common/select2/js/i18n/zh-CN.js"></script>
<!-- 自定义js -->
<script src="../../../static/common/js/common.js"></script>
<script src="../../../static/edi/js/ediMessageLog.js"></script>


<script>
    $(function () {
        FormUtils.getData();
    });
</script>
</body>
</html>