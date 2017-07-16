<%@ page language="java" contentType="text/html; charset=utf-8"%>
<!DOCTYPE HTML>
<html>
<head>
    <title>车辆信息变更</title>
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
<body style="background-color: white;height: 45px;">
<div class="animated fadeInRight">
    <%--<form>--%>
        <div class="ibox">
                <table class="table table-condensed no-border" style="width:100%;margin-left: 10px;margin-top: 10px;margin-bottom: 10px;">
                    <tr>
                        <td style="border-top: 0px;">
                            <div>
                                <input class="input-sm form-control readonly" id="icCode" name="icCode" fieldName="IC卡编号" isValidate="true" notempty maxlength="18">
                            </div>
                        </td>
                        <td style="border-top: 0px;">
                            <div>
                            <button class="btn btn-info fa fa-check-square" id="makeCardOk">确认</button>
                            <i class="btn btn-info fa fa-mail-reply" id="cancel">返回</i>
                            </div>
                        </td>
                    </tr>
                </table>
        </div>
    <%--</form>--%>
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
</body>
</html>