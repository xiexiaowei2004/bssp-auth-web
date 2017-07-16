<%@ page language="java" contentType="text/html; charset=utf-8" %>
<!DOCTYPE HTML>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <title>集报出入申请商品</title>
    <link rel="stylesheet" href="../../../static/common/bootstrap-table-master/bootstrap-table.min.css"/>
    <link rel="stylesheet" href="../../../static/common/bootstrap-datepicker-master/css/bootstrap-datepicker3.min.css"/>
    <link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css"/>
    <link rel="stylesheet" href="../../../static/common/select2/css/select2.min.css" type="text/css"/>
    <link rel="stylesheet" href="../../../static/common/bootstrapvalidator-master/css/bootstrapValidator.min.css"
          type="text/css"/>
    <link rel="stylesheet" href="../../../static/admin/main/css/animate.css"/>
    <link rel="stylesheet" href="../../../static/common/css/style.css" />
    <link rel="stylesheet" href="../../../static/common/css/common.css"/>

    <!-- HTML5 Shim 和 Respond.js 用于使IE8支持html5和css3媒介查询 -->
    <!--[if lt IE 9]>
    <script src="../../../static/common/html5shiv/html5shiv.min.js"></script>
    <script src="../../../static/common/html5shiv/respond.min.js"></script>
    <![endif]-->
</head>
<body class="hold-transition skin-blue sidebar-mini">
<header>
    <div class="box box-solid div-pade div-top-pad">
        <div class="pull-left">
            <span class="m-r-sm"> </span>
            <a href="javascript:void(0);" class="btn btn-info fa fa-save" id="save">暂存</a>
            <a href="javascript:void(0);" class="btn btn-info fa fa-mail-reply" id="reback">返回</a>
        </div>
        <div class="clearfix"></div>
    </div>
    <div class="box box-primary div-margin">
        <div class="box-body no-margin">
            <div class="ibox-content" style="padding-bottom: 0">
            <form id="dataForm">
                <div class="form-group">
                    <input type="hidden" id="uid" name="uid">
                    <input type="hidden" id="seqNo" name="seqNo">
                    <input type="hidden" id="sasDclNo" name="sasDclNo">
                    <input type="hidden" id="etpsPreentNo" name="etpsPreentNo">
                    <input type="hidden" id="mtpckEndprdTypecd" name="mtpckEndprdTypecd">
                </div>
                <table class="table table-condensed no-borders no-margins">
                    <tr>
                        <td class="table-label text-nowrap text-right no-borders">申报序号<span class="notempty">*</span></td>
                        <td>
                            <div class="form-group">
                                <input class="form-control" id="sasDclSeqno" name="sasDclSeqno" isValidate="true" readonly notempty>
                            </div>
                        </td>
                        <td class="table-label text-nowrap text-right">修改标志</td>
                        <td>
                            <div class="form-group">
                                <select class="form-control select2 form-horizontal" isShowEmpty="true" id="modfMarkcd" style="width: 100%" name="modfMarkcd" dll_name="MODF_MARK" disabled="disabled">
                                </select>
                            </div>
                        </td>
                        <td class="table-label text-nowrap text-right">变更次数</td>
                        <td>
                            <div class="form-group">
                                <input class="form-control" id="chgTmsCnt" name="chgTmsCnt" readonly>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap text-right">商品编码<span class="notempty">*</span></td>
                        <td>
                            <div class="form-group">
                                <input class="form-control" id="gdecd" name="gdecd" maxlength="10" placeholder="输入4位编码回车选择商品" isValidate="true" notempty>
                            </div>
                        </td>
                        <td class="table-label text-nowrap text-right">商品名称<span class="notempty">*</span></td>
                        <td colspan="3">
                            <div class="form-group">
                                <input class="form-control" id="gdsNm" name="gdsNm" maxlength="512" isValidate="true" notempty>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap text-right">规格型号<span class="notempty">*</span></td>
                        <td colspan="5">
                            <div class="form-group">
                                <input class="form-control" id="gdsSpcfModelDesc" name="gdsSpcfModelDesc" maxlength="512" isValidate="true" notempty>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap text-right">数量<span class="notempty">*</span></td>
                        <td>
                            <div class="form-group">
                                <input class="form-control" type="number" step="0.00001" maxlength="19" id="dclQty" name="dclQty" isValidate="true" notempty>
                            </div>
                        </td>
                        <td class="table-label text-nowrap text-right">申报计量单位<span class="notempty">*</span></td>
                        <td>
                            <div class="form-group">
                                <select class="form-control select2 form-horizontal" style="width: 100%" id="dclUnitcd" name="dclUnitcd"
                                        dll_name="codCusUnit" isShowEmpty="true" isValidate="true" notempty>
                                </select>
                            </div>
                        </td>
                        <td class="table-label text-nowrap text-right">币制<span class="notempty">*</span></td>
                        <td>
                            <div class="form-group">
                                <select class="form-control select2 form-horizontal" style="width: 100%" id="dclCurrcd" name="dclCurrcd"
                                        dll_name="codCusCurr" isShowEmpty="true" isValidate="true" notempty>
                                </select>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap text-right">申报单价<span class="notempty">*</span></td>
                        <td>
                            <div class="form-group">
                                <input class="form-control" type="number" step="0.00001" maxlength="25" id="dclUprcAmt" name="dclUprcAmt" isValidate="true" notempty>
                            </div>
                        </td>
                        <td class="table-label text-nowrap text-right">总价</td>
                        <td>
                            <div class="form-group">
                                <input class="form-control" type="number" step="0.00001" readonly maxlength="25" id="dclTotalAmt" name="dclTotalAmt">
                            </div>
                        </td>
                        <td class="table-label text-nowrap text-right">商品标记</td>
                        <td>
                            <div class="form-group">
                                <select class="form-control select2 form-horizontal" style="width: 100%" id="gdsMarkcd" isShowEmpty="true" name="gdsMarkcd" dll_name="GDS_MARKCD">
                                </select>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap text-right">许可证编号</td>
                        <td>
                            <div class="form-group">
                                <input type="text" class="form-control" id="licenceNo" name="licenceNo" maxlength="30">
                            </div>
                        </td>
                        <td class="table-label text-nowrap text-right">许可证有效期</td>
                        <td>
                            <div class="form-group">
                                <input type="text" class="form-control datepicker" data-date-format="yyyy-mm-dd" id="licenceValidTime" name="licenceValidTime">
                            </div>
                        </td>
                        <td class="table-label text-nowrap text-right">底账商品序号<span class="notempty">*</span></td>
                        <td>
                            <div class="form-group">
                                <input class="form-control" id="oriactGdsSeqno" name="oriactGdsSeqno" isValidate="true" readonly notempty>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap text-right">商品备注</td>
                        <td colspan="5">
                            <div class="form-group">
                                <textarea class="form-control" rows="1" id="gdsRmk" name="gdsRmk"></textarea>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap text-right">备注</td>
                        <td colspan="5">
                            <div class="form-group">
                                <textarea class="form-control" rows="1" id="rmk" name="rmk"></textarea>
                            </div>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
        </div>
    </div>
</header>
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
<script src="../../../static/sas/js/sasdcldt_form.js"></script>
</body>
</html>