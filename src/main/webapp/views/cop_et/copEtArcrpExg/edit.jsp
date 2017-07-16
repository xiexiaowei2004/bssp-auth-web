<%@ page language="java" contentType="text/html; charset=utf-8" %>
<!DOCTYPE HTML>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <title>联网企业档案库成品-编辑</title>
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
            <a href="#1" class="btn btn-info fa fa-save" id="save">暂存</a>
            <a href="#1" class="btn btn-info fa fa-mail-reply" id="reback">返回</a>
        </div>
    </div>
    <div class="ibox-content">
        <form id="dataForm">
            <!-- 隐藏字段 -->
            <div class="form-group">
                <input type="hidden" id="uid" name="uid"/>
                <input type="hidden" id="seqNo" name="seqNo"/>
                <input type="hidden" value="E" id="mtpckEndprdTypecd" name="mtpckEndprdTypecd"/>
                <input type="hidden" value="成品" id="mtpckEndprdTypename" name="mtpckEndprdTypename"/>
            </div>
            <table class="table table-condensed no-borders no-margins">
                <tr>
                    <td class="table-label text-nowrap text-right" style="width:120px;">商品序号<span class="notempty">*</span></td>
                    <td>
                        <div class="form-group" style="width:260px;">
                            <input class="form-control" style="width:260px;" id="gdsSeqno" name="gdsSeqno" fieldName="商品序号" isValidate="true" notempty readonly/>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="table-label text-nowrap text-right">商品编码<span class="notempty">*</span></td>
                    <td>
                        <div class="form-group" style="width:260px;">
                            <input onkeyup="this.value=this.value.replace(/\D/g,'')" class="form-control" style="width:260px;" id="gdecd" name="gdecd" minlength="4" maxlength="4"
                                   placeholder="输入4位编码回车选择商品" fieldName="商品编码" isValidate="true" notempty/>
                        </div>
                    </td>
                    <td class="table-label text-nowrap text-right" style="width:120px;">商品名称<span class="notempty">*</span></td>
                    <td>
                        <div class="form-group" style="width:260px;">
                            <input class="form-control" style="width:260px;" id="gdsNm" name="gdsNm" fieldName="商品名称" isValidate="true" maxlength="512" notempty/>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="table-label text-nowrap text-right">变更次数</td>
                    <td>
                        <div class="form-group" style="width:260px;">
                            <input class="form-control" style="width:260px;" id="chgTmsCnt" name="chgTmsCnt" readonly/>
                        </div>
                    </td>
                    <td class="table-label text-nowrap text-right">修改标记</td>
                    <td>
                        <div class="form-group" style="width:260px;">
                            <select class="form-control select2-width" style="width:260px;" id="modfMarkcd" name="modfMarkcd" dll_name="MODF_MARK" fieldName="修改标记"></select>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="table-label text-nowrap text-right">备注</td>
                    <td colspan="3">
                        <input class="form-control" style="width:695px;" id="rmk" name="rmk"/>
                    </td>
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
<script src="../../../static/cop_et/js/copEtArcrpExg_form.js"></script>
</body>
</html>