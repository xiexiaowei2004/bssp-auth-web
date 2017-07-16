<%@ page language="java" contentType="text/html; charset=utf-8" %>
<!DOCTYPE HTML>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <title>加工贸易账册核销清单</title>
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
    </style>
</head>
<body>
<header>
    <div class=" animated fadeInRight">
        <div class="box box-solid div-pade div-top-pad">
            <div class="pull-left">
                <span class="m-r-sm"> </span>
                <a href="javascript:void(0)" class="btn btn-info fa fa-save" id="save">暂存</a>
                <a href="javascript:void(0)" class="btn btn-info fa fa-mail-reply" id="reback">返回</a>
            </div>
        </div>
        <div class="ibox">
            <div class="box-body no-margin" id="head">
                <div class="ibox-content" style="padding-bottom: 0">
                    <form id="dataForm">
                        <!-- 隐藏字段 -->
                        <div style="display:none;">
                            <input type="hidden" id="uid" name="uid">
                            <input type="hidden" id="seqNo" name="seqNo">
                            <input type="hidden" id="mtpckEndprdTypecd" name="mtpckEndprdTypecd">
                            <input type="hidden" id="operateType" name="operateType">
                            <input type="hidden" id="stockTypecd" name="stockTypecd">
                            <input type="hidden" id="copEntNo" name="copEntNo">
                            <input type="hidden" id="etpsPreentNo" name="etpsPreentNo">
                            <input type="hidden" id="sasStockNo" name="sasStockNo">
                            <input type="hidden" id="docType" name="docType">
                            <input type="hidden" id="bizType" name="bizType">
                            <input type="hidden" id="total" name="total">
                        </div>
                        <table class="table table-condensed noborder">
                            <tr>
                                <td class="table-label text-nowrap text-right">商品序号
                                </td>
                                <td>
                                    <div class="form-group">
                                        <input type="number" class="form-control" id="sasStockSeqno"
                                               name="sasStockSeqno" maxlength="19" fieldName="商品序号" isValidate="true"
                                               notempty>
                                    </div>
                                </td>
                                <td class="table-label text-nowrap text-right">申报表序号</td>
                                <td><input class="form-control" id="sasDclSeqno" name="sasDclSeqno" readonly></td>
                                <td class="table-label text-nowrap text-right">备案序号</td>
                                <td><input class="form-control" id="oriactGdsSeqno" name="oriactGdsSeqno" readonly></td>
                            </tr>
                            <tr>
                                <td class="table-label text-nowrap text-right">商品料号
                                </td>
                                <td>
                                    <div class="form-group">
                                        <input class="form-control" id="gdsMtno" name="gdsMtno" maxlength="32">
                                    </div>
                                </td>
                                <td class="table-label text-nowrap text-right">商品编码<span style="color: red">*</span>
                                </td>
                                <td>
                                    <div class="form-group">
                                        <input class="form-control" id="gdecd" name="gdecd" readonly fieldName="商品编码" isValidate="true"
                                               notempty>
                                    </div>
                                </td>
                                <td class="table-label text-nowrap text-right">商品名称<span style="color: red">*</span>
                                </td>
                                <td>
                                    <div class="form-group">
                                        <input class="form-control" id="gdsNm" name="gdsNm" readonly fieldName="商品名称" isValidate="true"
                                               notempty>
                                    </div>
                                </td>
                            <tr>
                                <td class="table-label text-nowrap text-right">规格型号<span style="color: red">*</span>
                                </td>
                                <td>
                                    <div class="form-group">
                                        <input class="form-control" id="gdsSpcfModelDesc" name="gdsSpcfModelDesc"
                                               maxlength="512" fieldName="规格型号" isValidate="true"
                                               notempty>
                                    </div>
                                </td>
                                <td class="table-label text-nowrap text-right">关联商品序号</td>
                                <td><input class="form-control" id="rltGdsSeqno" name="rltGdsSeqno" readonly></td>
                                <td class="table-label text-nowrap text-right">用途<span style="color: red">*</span></td>
                                <td>
                                    <div class="form-group">
                                        <select class="form-control" id="useCd" name="useCd" dll_name="codCusUserto"
                                                style="width: 100%" fieldName="用途" isValidate="true" notempty>
                                        </select>
                                    </div>
                                </td>


                            </tr>
                            <tr>
                                <td class="table-label text-nowrap text-right">申报计量单位<span style="color: red">*</span>
                                </td>
                                <td>
                                    <div class="form-group">
                                        <select class="form-control select2 form-horizontal" style="width: 100%"
                                                id="dclUnitcd" name="dclUnitcd" dll_name="codCusUnit" disabled fieldName="申报计量单位" isValidate="true"
                                                notempty>
                                        </select>
                                    </div>
                                </td>
                                <td class="table-label text-nowrap text-right">申报数量<span style="color: red">*</span>
                                </td>
                                <td>
                                    <div class="form-group">
                                        <input type="number" step="0.00001" class="form-control" id="dclQty"
                                               name="dclQty"
                                               maxlength="64" fieldName="申报数量" isValidate="true" notempty>
                                    </div>
                                </td>
                                <td class="table-label text-nowrap text-right">申报币制<span style="color: red">*</span>
                                </td>
                                <td>
                                    <div class="form-group">
                                        <select class="form-control" id="dclCurrcd" name="dclCurrcd"
                                                dll_name="codCusCurr"
                                                style="width: 100%" fieldName="申报币制" isValidate="true" notempty>
                                        </select>
                                    </div>
                                </td>


                            </tr>
                            <tr>
                                <td class="table-label text-nowrap text-right">法定计量单位
                                </td>
                                <td>
                                    <div class="form-group">
                                        <select class="form-control select2 form-horizontal" style="width: 100%"
                                                id="lawfUnitcd" name="lawfUnitcd" dll_name="codCusUnit" disabled>
                                        </select>
                                    </div>
                                </td>
                                <td class="table-label text-nowrap text-right">法定数量<span style="color: red">*</span>
                                </td>
                                <td>
                                    <div class="form-group">
                                        <input type="number" step="0.00001" class="form-control" id="lawfQty"
                                               name="lawfQty" fieldName="法定数量" isValidate="true" notempty>
                                    </div>
                                </td>
                                <td class="table-label text-nowrap text-right">国别<span style="color: red">*</span></td>
                                <td>
                                    <div class="form-group">
                                        <select class="form-control" id="natcd" name="natcd" dll_name="codCusCountry"
                                                style="width: 100%" fieldName="国别" isValidate="true" notempty>
                                        </select>
                                    </div>
                                </td>


                            </tr>
                            <tr>
                                <td class="table-label text-nowrap text-right">第二计量单位
                                </td>
                                <td>
                                    <div class="form-group">
                                        <select class="form-control select2 form-horizontal" style="width: 100%"
                                                id="secdLawfUnitcd" name="secdLawfUnitcd" dll_name="codCusUnit"
                                                disabled>
                                        </select>
                                    </div>
                                </td>
                                <td class="table-label text-nowrap text-right">第二法定数量</td>
                                <td><input class="form-control" id="secdLawfQty" name="secdLawfQty"></td>
                                <td class="table-label text-nowrap text-right">征减免方式<span style="color: red">*</span>
                                </td>
                                <td>
                                    <div class="form-group">
                                        <select class="form-control" id="lvyrlfModecd" name="lvyrlfModecd"
                                                dll_name="codCusLevymode"
                                                style="width: 100%" fieldName="征减免方式" isValidate="true" notempty>
                                        </select>
                                    </div>
                                </td>


                            </tr>
                            <tr>
                                <td class="table-label text-nowrap text-right">申报单价<span style="color: red">*</span>
                                </td>
                                <td>
                                    <div class="form-group">
                                        <input type="number" step="0.00001" class="form-control" id="dclUprcAmt"
                                               name="dclUprcAmt" fieldName="申报单价" isValidate="true" notempty>
                                    </div>
                                </td>
                                <td class="table-label text-nowrap text-right">申报总价</td>
                                <td>
                                    <div class="form-group">
                                        <input type="number" step="0.00001" class="form-control" id="dclTotalAmt"
                                               name="dclTotalAmt">
                                    </div>
                                </td>
                                <td class="table-label text-nowrap text-right">美元统计总价</td>
                                <td><input class="form-control" id="usdStatTotalAmt" name="usdStatTotalAmt" readonly>
                                </td>
                            </tr>
                            <tr>
                                <td class="table-label text-nowrap text-right">毛重(KG)<span style="color: red">*</span></td>
                                <td>
                                    <div class="form-group">
                                        <input type="number" step="0.00001" class="form-control" id="grossWt"
                                               name="grossWt" maxlength="19" fieldName="毛重" isValidate="true" notempty>
                                    </div>
                                </td>
                                <td class="table-label text-nowrap text-right">净重(KG)<span style="color: red">*</span></td>
                                <td>
                                    <div class="form-group">
                                        <input type="number" step="0.00001" class="form-control" id="netWt" name="netWt"
                                               maxlength="19" fieldName="净重" isValidate="true" notempty>
                                    </div>
                                </td>
                                <td class="table-label text-nowrap text-right">重量比例因子</td>
                                <td>
                                    <div class="form-group">
                                        <input class="form-control" id="wtSfVal" name="wtSfVal" maxlength="19">
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="table-label text-nowrap">备注</td>
                                <td colspan="5">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="rmk" name="rmk" maxlength="255"
                                               fieldName="备注" isValidate="true"></input>
                                    </div>
                                </td>
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
    <script src="../../../static/sas/js/sasStockDt_form.js"></script>
</footer>
</body>
</html>