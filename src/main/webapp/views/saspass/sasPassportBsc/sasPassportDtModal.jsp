<%@ page language="java" contentType="text/html; charset=utf-8" %>
<!DOCTYPE HTML>
<html>
<head>
    <title>核放单货物</title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <link rel="stylesheet" href="../../../static/common/bootstrap-table-master/bootstrap-table.min.css"/>
    <link rel="stylesheet" href="../../../static/common/bootstrap-datepicker-master/css/bootstrap-datepicker3.min.css"/>
    <link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css"/>
    <link rel="stylesheet" href="../../../static/common/select2/css/select2.min.css" type="text/css">
    <link rel="stylesheet" href="../../../static/admin/main/css/animate.css"/>
    <link rel="stylesheet" href="../../../static/common/css/style.css"/>
    <link rel="stylesheet" href="../../../static/common/bootstrapvalidator-master/css/bootstrapValidator.min.css"
          type="text/css">
    <link rel="stylesheet" href="../../../static/common/css/common.css"/>
    <!-- HTML5 Shim 和 Respond.js 用于使IE8支持html5和css3媒介查询 -->
    <!--[if lt IE 9]>
    <script src="../../../static/common/html5shiv/html5shiv.min.js"></script>
    <script src="../../../static/common/html5shiv/respond.min.js"></script>
    <![endif]-->
    <style>
        #dtModalForm td { border: none; }
        .form-group{ margin-bottom: 15px; }
    </style>
</head>
<body>
<div class="animated fadeInRight">
    <div class="ibox" id="head">
        <div class="ibox-content">
            <a href="javascript:void(0)" class="btn btn-info fa fa-save" id="dtModalSave"> 保存</a>
            <a href="javascript:void(0)" class="btn btn-info fa fa-mail-reply" id="dtModalReback"> 返回</a>
        </div>
        <div class="clearfix"></div>
        <div class="ibox-content">
            <form id="dtModalForm" style="margin-right: 2%;margin-top: 30px;">
                <div id="hidDiv">
                    <input type="hidden" id="uid" name="uid">
                    <input type="hidden" id="seqNo" name="seqNo">
                    <input type="hidden" id="chgTmsCnt" name="chgTmsCnt" value="0">
                </div>
                <table class="table table-condensed no-borders no-margins">
                    <tr>
                        <td class="table-label text-nowrap">序号<span
                                class="notempty">*</span>
                        </td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="passportSeqno"
                                       name="passportSeqno"
                                       isValidate="true" notempty>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">
                            商品料号<%--<span class="notempty">*</span>--%></td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="gdsMtno" name="gdsMtno">
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap">商品编码<span
                                class="notempty">*</span>
                        </td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="gdecd" name="gdecd"
                                       isvalidate="true"
                                       notempty>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">计量单位<span
                                class="notempty">*</span>
                        </td>
                        <td>
                            <div class="form-group">
                                <select class="form-control select2 form-horizontal select2-hidden-accessible"
                                        style="width: 100%" id="dclUnitcd" name="dclUnitcd"
                                        isshowempty="true"
                                        dll_name="codCusUnit" isvalidate="true" notempty></select>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap">商品名称<span
                                class="notempty">*</span>
                        </td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="gdsNm" name="gdsNm"
                                       isValidate="true"
                                       notempty>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">数量<span class="notempty">*</span>
                        </td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" type="number" step="0.00001"
                                       id="dclQty"
                                       name="dclQty" isValidate="true" notempty>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap">货物毛重<span class="notempty">*</span></td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="grossWt" name="grossWt"
                                       isValidate="true"
                                       notempty>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">货物净重<span class="notempty">*</span></td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="netWt" name="netWt"
                                       isValidate="true"
                                       notempty>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap">备注</td>
                        <td colspan="5"><textarea class="form-control" rows="1" id="rmk"
                                                  name="rmk"></textarea></td>
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
<script src="../../../static/saspass/js/sasPassportDtModal.js"></script>
</body>
</html>