<%@ page language="java" contentType="text/html; charset=utf-8" %>
<!DOCTYPE HTML>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <title>商品参数-查阅</title>
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
<body>
<header>
    <div class=" animated fadeInRight">
        <div class="box box-solid div-pade div-top-pad">
            <div class="pull-left">
                <span class="m-r-sm"> </span>
                <a href="javascript:void(0)" class="btn btn-info fa fa-mail-reply" id="reback">返回</a>
            </div>
        </div>
        <div class="ibox">
            <div class="box-body no-margin" id="head">
                <div class="ibox-content">
                    <form id="form">
                        <table class="table table-condensed noborder">
                            <tr>
                                <td class="table-label text-nowrap text-right">序号</td>
                                <td><input class="form-control" id="pkSeq" name="pkSeq" readonly></td>
                                <td class="table-label text-nowrap text-right">HS编码</td>
                                <td><input class="form-control" id="codeT" name="codeT" readonly></td>
                                <td class="table-label text-nowrap text-right">附件编码</td>
                                <td><input class="form-control" id="codeS" name="codeS" readonly></td>
                            </tr>
                            <tr>
                                <td class="table-label text-nowrap text-right">商品名称</td>
                                <td><input class="form-control" id="gName" name="gName" readonly></td>
                                <td class="table-label text-nowrap text-right">进口优惠关税</td>
                                <td><input class="form-control" id="lowRate" name="lowRate" readonly></td>
                                <td class="table-label text-nowrap text-right">进口普通关税</td>
                                <td><input class="form-control" id="highRate" name="highRate" readonly></td>
                            </tr>
                            <tr>
                            <td class="table-label text-nowrap text-right">出口关税</td>
                            <td><input class="form-control" id="outRate" name="outRate" readonly></td>
                            <td class="table-label text-nowrap text-right">申报标志</td>
                            <td>
                                <select class="form-control select2 form-horizontal" style="width: 100%"
                                        id="regMark" name="regMark" dll_name="DCL_MARKCD" disabled>
                                </select>
                            </td>
                            <td class="table-label text-nowrap text-right">消费税</td>
                            <td><input class="form-control" id="regRate" name="regRate" readonly></td>
                            </tr>
                            <tr>
                                <td class="table-label text-nowrap text-right">征税类型</td>
                                <td><input class="form-control" id="taxType" name="taxType" readonly></td>
                                <td class="table-label text-nowrap text-right">增值税</td>
                                <td><input class="form-control" id="taxRate" name="taxRate" readonly></td>
                                <td class="table-label text-nowrap text-right">一般税率</td>
                                <td><input class="form-control" id="commRate" name="commRate" readonly></td>
                            </tr>
                            <tr>
                                <td class="table-label text-nowrap text-right">对台调节税</td>
                                <td><input class="form-control" id="taiwanRate" name="taiwanRate" readonly></td>
                                <td class="table-label text-nowrap text-right">其它类型</td>
                                <td><input class="form-control" id="otherType" name="otherType" readonly></td>
                                <td class="table-label text-nowrap text-right">其它费税率</td>
                                <td><input class="form-control" id="otherRate" name="otherRate" readonly></td>
                            </tr>
                            <tr>
                                <td class="table-label text-nowrap text-right">法定单位</td>
                                <td>
                                    <select class="form-control select2 form-horizontal" style="width: 100%"
                                            id="unit1" name="unit1" dll_name="codCusUnit" disabled>
                                    </select>
                                </td>
                                <td class="table-label text-nowrap text-right">法定第二单位</td>
                                <td>
                                    <select class="form-control select2 form-horizontal" style="width: 100%"
                                            id="unit2" name="unit2" dll_name="codCusUnit" disabled>
                                    </select>
                                </td>
                                <td class="table-label text-nowrap text-right">进口最低单价</td>
                                <td><input class="form-control" id="ilowPrice" name="ilowPrice" readonly></td>
                            </tr>
                            <tr>
                                <td class="table-label text-nowrap text-right">进口最高单价</td>
                                <td><input class="form-control" id="ihighPrice" name="ihighPrice" readonly></td>
                                <td class="table-label text-nowrap text-right">出口最低单价</td>
                                <td><input class="form-control" id="elowPrice" name="elowPrice" readonly></td>
                                <td class="table-label text-nowrap text-right">出口最高单价</td>
                                <td><input class="form-control" id="ehighPrice" name="ehighPrice" readonly></td>
                            </tr>
                            <tr>
                                <td class="table-label text-nowrap text-right">最大进口量</td>
                                <td><input class="form-control" id="maxIn" name="maxIn" readonly></td>
                                <td class="table-label text-nowrap text-right">最大出口量</td>
                                <td><input class="form-control" id="maxOut" name="maxOut" readonly></td>
                                <td class="table-label text-nowrap text-right">监管条件</td>
                                <td><input class="form-control" id="controlMa" name="controlMa" readonly></td>
                            </tr>
                            <tr>
                                <td class="table-label text-nowrap text-right">价格</td>
                                <td><input class="form-control" id="chkPrice" name="chkPrice" readonly></td>
                                <td class="table-label text-nowrap text-right">关税标志</td>
                                <td><input class="form-control" id="tariffMark" name="tariffMark" readonly></td>
                            </tr>
                            <tr>
                                <td class="table-label text-nowrap text-right">备注</td>
                                <td colspan="5"><input class="form-control" id="noteS" name="noteS" readonly></td>
                            </tr>
                        </table>
                    </form>
                </div>
            </div>
        </div>
    </div>
</header>
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
    <script src="../../../static/cod_cus/js/codCusComplex.js"></script>
</footer>
</body>
</html>