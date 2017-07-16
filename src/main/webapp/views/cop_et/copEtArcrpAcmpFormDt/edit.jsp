<%@ page language="java" contentType="text/html; charset=utf-8" %>
<!DOCTYPE HTML>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <title>联网企业档案库随附单证明细-编辑</title>
    <link rel="stylesheet" href="../../../static/common/bootstrap-table-master/bootstrap-table.min.css"/>
    <link rel="stylesheet" href="../../../static/common/bootstrap-datepicker-master/css/bootstrap-datepicker3.min.css"/>
    <link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css"/>
    <link rel="stylesheet" href="../../../static/common/select2/css/select2.min.css" type="text/css">
    <link rel="stylesheet" href="../../../static/common/bootstrapvalidator-master/css/bootstrapValidator.min.css" type="text/css">
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
    </style>
</head>
<body class="gray-bg">
<div class="ibox m-t-none" id="head">
    <div class="ibox-title">
        <div class="pull-left">
            <a href="#1" class="btn btn-info fa fa-save" id="save">保存</a>
            <a href="#1" class="btn btn-info fa fa- mail-reply" id="reback">返回</a>
        </div>
        <div class="pull-right">
            <a href="#1" class="collapse-link" title="收起表头"><i class="fa fa-chevron-up"></i></a>
        </div>
    </div>
    <div class="clearfix"></div>
    <div class="ibox-content">
        <form id="dataForm">
            <!-- 隐藏字段 -->
            <input type="hidden" id="uid" name="uid">
            <input type="hidden" id="seqNo" name="seqNo">
            <table class="table table-condensed no-borders no-margins">
                <tr>
                    <td class="table-label text-nowrap text-right" style="width:120px;">档案库编号<span class="notempty">*</span></td>
                    <td>
                        <div class="form-group">
                            <input class="form-control" id="netwkEtpsArcrpNo" name="netwkEtpsArcrpNo" readonly>
                        </div>
                    </td>
                    <td class="table-label text-nowrap text-right" style="width:120px;">随附单证序号<span class="notempty">*</span></td>
                    <td>
                        <div class="form-group">
                            <input class="form-control" id="acmpFormSeqno" name="acmpFormSeqno">
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="table-label text-nowrap text-right">随附单证类型</td>
                    <td>
                        <div class="form-group">
                            <select class="form-control" id="acmpFormTypecd" name="acmpFormTypecd" dll_name="ACMP_FORM_TYPECD"></select>
                        </div>
                    </td>
                    <td class="table-label text-nowrap text-right">随附单证编号<span class="notempty">*</span></td>
                    <td>
                        <div class="form-group">
                            <input class="form-control" id="acmpFormNo" name="acmpFormNo" isValidate="true" notempty>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="table-label text-nowrap text-right">变更次数<span class="notempty">*</span></td>
                    <td><input class="form-control" id="chgTmsCnt" name="chgTmsCnt" readonly></td>
                    <td class="table-label text-nowrap text-right">固定编号<span class="notempty">*</span></td>
                    <td><input class="form-control" id="fixdNo" name="fixdNo"></td>
                </tr>
                <tr>
                    <td class="table-label text-nowrap text-right">随附单证文件名称<span class="notempty">*</span></td>
                    <td colspan="3">
                        <div class="form-group">
                            <input type="file" class="form-control" id="acmpFormFileNm" name="acmpFormFileNm" fieldName="随附单证文件名称" isValidate="true" notempty>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="table-label text-nowrap text-right">备注</td>
                    <td colspan="3"><textarea class="form-control" rows="2" id="rmk" name="rmk"></textarea></td>
                </tr>
            </table>
        </form>
    </div>
</div>
<script src="../../../static/common/jquery/jquery-3.1.1.min.js"></script>
<script src="../../../static/common/bootstrap/js/bootstrap.min.js"></script>
<script src="../../../static/common/jquery/jquery-ui.min.js"></script>
<script src="../../../static/common/layer/layer.js"></script>
<script src="../../../static/common/select2/js/select2.full.js"></script>
<script src="../../../static/common/select2/js/i18n/zh-CN.js"></script>
<script src="../../../static/common/bootstrapvalidator-master/js/bootstrapValidator.min.js"></script>
<script src="../../../static/common/bootstrapvalidator-master/js/language/zh_CN.js"></script>
<script src="../../../static/common/bootstrap-datepicker-master/js/bootstrap-datepicker.js"></script>
<script src="../../../static/common/bootstrap-table-master/bootstrap-table.min.js"></script>
<script src="../../../static/common/bootstrap-table-master/locale/bootstrap-table-zh-CN.min.js"></script>
<!-- 自定义js -->
<script src="../../../static/admin/main/js/contabs.js"></script>
<script src="../../../static/common/js/common.js"></script>
<script src="../../../static/cop_et/js/copEtArcrpAcmpFormDt_form.js"></script>
</body>
</html>