<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>申报报文日志-查阅</title>
    <link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css" />
    <link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css" />
    <link rel="stylesheet" href="../../../static/admin/main/css/animate.css" />
    <link rel="stylesheet" href="../../../static/common/css/style.css" />
    <link rel="stylesheet" href="../../../static/common/css/common.css" />

    <style>
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
                <h4 class="box-title pull-left" id="headTitle">申报报文日志</h4>
            </div>
            <div class="pull-right">
                <a href="#1" class="collapse-link" title="收起表头"><i class="fa fa-chevron-up"></i></a>
            </div>
        </div>
        <div class="ibox-content">
            <a href="#1" class="btn btn-info fa fa-mail-reply" id="reback" onclick="Utils.redirect('../../../views/edi/ediSendLog/list.jsp')">返回</a>
        </div>
		<div class="ibox-content">
                <form id="form" class="form-horizontal">
                    <table class="table table-condensed noborder">
                        <tr>
                            <td class="table-label text-nowrap text-right">监管场所</td>
                            <td><input class="form-control" id="areaCode" name="areaCode" readonly></td>
                            <td class="table-label text-nowrap text-right">单据类型</td>
                            <td><input class="form-control" id="docType" name="docType" readonly></td>
                            <td class="table-label text-nowrap text-right">业务类型</td>
                            <td><input class="form-control" id="bizType" name="bizType" readonly></td>
                        </tr>
                        <tr>
                            <td class="table-label text-nowrap text-right">单据编号</td>
                            <td ><input class="form-control" id="seqNo" name="seqNo" readonly></td>
                            <td class="table-label text-nowrap text-right">处理标识</td>
                            <td><input class="form-control" id="status" name="status" readonly></td>
                            <td class="table-label text-nowrap text-right">变更次数</td>
                            <td><input class="form-control" id="chgTmsCnt" name="chgTmsCnt" readonly></td>
                        </tr>
                        <tr>
                            <td class="table-label text-nowrap text-right">创建时间</td>
                            <td ><input class="form-control" id="createTime" name="createTime" readonly></td>
                            <td class="table-label text-nowrap text-right">修改时间</td>
                            <td><input class="form-control" id="updateTime" name="updateTime" readonly></td>

                        </tr>
                        <tr>
                            <td class="table-label text-nowrap text-right">备注</td>
                            <td colspan="5"><input class="form-control" id="remarks" name="remarks" readonly></td>
                        </tr>
                    </table>
                </form>
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
    <script src="../../../static/admin/main/js/content.js"></script>
    <script src="../../../static/common/bootstrap-datepicker-master/js/bootstrap-datepicker.js"></script>
    <!-- select2 -->
    <script src="../../../static/common/select2/js/select2.full.js"></script>
    <script src="../../../static/common/select2/js/i18n/zh-CN.js"></script>
    <!-- 自定义js -->
    <script src="../../../static/common/js/common.js"></script>
    <script src="../../../static/edi/js/ediSendLog.js"></script>

<script>var _serverAddress = _server+"/edi/ediSendLog/list";
$(function () {
    FormUtils.getData();
});
</script>
</body>
</html>