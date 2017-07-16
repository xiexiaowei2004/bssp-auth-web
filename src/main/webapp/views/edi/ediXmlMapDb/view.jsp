<%@ page language="java" contentType="text/html; charset=utf-8" %>
<!DOCTYPE HTML>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <title>字段关系-查阅</title>
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
        #form td {
            border: none;
        }
    </style>
</head>
<body class="gray-bg">

    <div class="container animated fadeInRight">
        <div class="ibox" id="head">
            <div class="ibox-title with-border collapsed-box">
                <div class="pull-left">
                    <h4 class="box-title pull-left" id="headTitle">字段关系</h4>
                </div>
                <div class="pull-right">
                    <a href="#1" class="collapse-link" title="收起表头"><i
                            class="fa fa-chevron-up"></i></a>
                </div>
            </div>
            <div class="ibox-content">
                <a href="javascript:void(0)" class="btn btn-info fa fa-mail-reply" id="reback">返回</a>
            </div>
            <div class="ibox-content">
                <form id="form">
                    <table class="table table-condensed noborder">
                        <tr>
                            <td class="table-label text-nowrap text-right">单据类型</td>
                            <td><input class="form-control" id="docType" name="docType" readonly></td>
                            <td class="table-label text-nowrap text-right">监管场所</td>
                            <td>
                                <select class="form-control select2-width input-sm" id="areaCode" name="areaCode"
                                        dll_name="codStdAreaCode" isShowEmpty="true" style="width: 100%"
                                        disabled></select>
                            </td>
                            <td class="table-label text-nowrap text-right">启用标识</td>
                            <td>
                                <select class="form-control select2-width input-sm" id="status" name="status"
                                        dll_name="IS_ENABLE" isShowEmpty="true" style="width: 100%" disabled></select>
                            </td>
                        </tr>
                        <tr>
                            <td class="table-label text-nowrap text-right">业务表名</td>
                            <td><input class="form-control" id="dbTable" name="dbTable" readonly></td>
                            <td class="table-label text-nowrap text-right">上级根节点</td>
                            <td colspan="3"><input class="form-control" id="xmlRoot" name="xmlRoot" readonly></td>
                        </tr>
                        <tr>
                            <td class="table-label text-nowrap text-right">业务字段</td>
                            <td><input class="form-control" id="dbColumn" name="dbColumn" readonly></td>
                            <td class="table-label text-nowrap text-right">字段类型</td>
                            <td><input class="form-control" id="dbType" name="dbType" readonly></td>
                            <td class="table-label text-nowrap text-right">字段长度</td>
                            <td><input class="form-control" id="dbLength" name="dbLength" readonly></td>
                        </tr>
                        <tr>
                            <td class="table-label text-nowrap text-right">报文字段</td>
                            <td><input class="form-control" id="xmlName" name="xmlName" readonly></td>
                            <td class="table-label text-nowrap text-right">字段类型</td>
                            <td><input class="form-control" id="xmlType" name="xmlType" readonly></td>
                            <td class="table-label text-nowrap text-right">字段长度</td>
                            <td><input class="form-control" id="xmlLength" name="xmlLength" readonly></td>
                        </tr>
                        <tr>
                            <td class="table-label text-nowrap">备注</td>
                            <td colspan="5">
                                <div class="form-group">
                                    <input type="text" class="form-control" id="remarks" name="remarks" readonly>
                                </div>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
    </div>

<footer>
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
    <script src="../../../static/common/bootstrap-datepicker-master/js/bootstrap-datepicker.js"></script>
    <!-- 自定义js -->
    <script src="../../../static/admin/main/js/contabs.js"></script>
    <script src="../../../static/common/js/common.js"></script>
    <script src="../../../static/edi/js/ediXmlMapDb.js"></script>
    <script src="../../../static/admin/main/js/content.js"></script>

</footer>
</body>
</html>