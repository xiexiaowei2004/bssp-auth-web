<%@ page language="java" contentType="text/html; charset=utf-8" %>
<!DOCTYPE HTML>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <title>加工贸易账册核销料件</title>
    <link rel="stylesheet" href="../../../static/common/bootstrap-table-master/bootstrap-table.min.css"/>
    <link rel="stylesheet" href="../../../static/common/bootstrap-datepicker-master/css/bootstrap-datepicker3.min.css"/>
    <link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css"/>
    <link rel="stylesheet" href="../../../static/common/select2/css/select2.min.css" type="text/css">
    <link rel="stylesheet" href="../../../static/common/bootstrapvalidator-master/css/bootstrapValidator.min.css"
          type="text/css">
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
            <div class="box-body no-margin" id="head">
                <div class="ibox-content" style="padding-bottom: 0">
                <form id="dataForm">
                    <!-- 隐藏字段 -->
                    <div style="display:none;">
                        <input type="hidden" id="uid" name="uid">
                        <input type="hidden" id="seqNo" name="seqNo">
                        <input type="hidden" id="emsNo" name="emsNo">
                        <input type="hidden" id="chgTmsCnt" name="chgTmsCnt">
                        <input type="hidden" id="typecd" name="typecd">
                    </div>
                    <table class="table table-condensed no-borders no-margins">
                        <tr>
                            <td class="table-label text-nowrap text-right">序号</td>
                            <td>
                                <div class="form-group">
                                    <input class="form-control" type="number" id="gdsSeqno" name="gdsSeqno" isValidate="true" notempty readonly>
                                </div>
                            </td>
                            <td class="table-label text-nowrap text-right">料件备案序号<span class="notempty">*</span></td>
                            <td>
                                <div class="form-group">
                                    <input class="form-control" type="number" id="gNo" name="gNo" isValidate="true" notempty>
                                </div>
                            </td>
                            <td class="table-label text-nowrap text-right">料号</td>
                            <td>
                               <input class="form-control" id="copGNo" name="copGNo" readonly>
                            </td>
                        </tr>
                        <tr>
                            <td class="table-label text-nowrap text-right">商品编码</td>
                            <td>
                                <input class="input-sm form-control" id="codeTs" name="codeTs" readonly>
                            </td>
                            <td class="table-label text-nowrap text-right">商品名称</td>
                            <td>
                                <input class="input-sm form-control" id="gName" name="gName" readonly>
                            </td>
                            <td class="table-label text-nowrap text-right">申报计量单位</td>
                            <td><select class="form-control select2 form-horizontal" id="unit" name="unit" style="width: 100%"
                                        dll_name="codCusUnit" isShowEmpty="true" disabled>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td class="table-label text-nowrap text-right">实际剩余数量<span class="notempty">*</span></td>
                            <td>
                                <div class="form-group">
                                    <input class="input-sm form-control" type="number" step="0.00001" isValidate="true" notempty
                                           id="actlRemainQty" name="actlRemainQty">
                                </div>
                            </td>
                            <td class="table-label text-nowrap text-right">期初数量</td>
                            <td>
                                <div class="form-group">
                                    <input class="input-sm form-control" type="number" step="0.00001" id="firstQty" name="firstQty" readonly>
                                </div>
                            </td>
                            <td class="table-label text-nowrap text-right">进出口总数量</td>
                            <td>
                                <div class="form-group">
                                     <input class="input-sm form-control" type="number" step="0.00001" id="impOrExpTotalQty" name="impOrExpTotalQty" readonly>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table-label text-nowrap text-right">消耗总数量</td>
                            <td>
                                <div class="form-group">
                                    <input class="input-sm form-control" type="number" step="0.00001" id="csmTotalQty" name="csmTotalQty" readonly>
                                </div>
                            </td>
                            <td class="table-label text-nowrap text-right">应剩余数量</td>
                            <td>
                                <div class="form-group">
                                    <input class="input-sm form-control" type="number" step="0.00001" id="shdRemainQty" name="shdRemainQty" readonly>
                                </div>
                            </td>
                            <td class="table-label text-nowrap text-right">应剩余价值</td>
                            <td>
                                <div class="form-group">
                                    <input class="input-sm form-control" type="number" step="0.00001" id="shdRemainTotalAmt" name="shdRemainTotalAmt" readonly>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table-label text-nowrap text-right">差异数量</td>
                            <td>
                                <div class="form-group">
                                    <input class="input-sm form-control" type="number" step="0.00001" id="dsmlQty" name="dsmlQty" readonly>
                                </div>
                            </td>
                            <td class="table-label text-nowrap text-right">差异价值</td>
                            <td>
                                <div class="form-group">
                                    <input class="input-sm form-control" type="number" step="0.00001" id="dsmlAmt" name="dsmlAmt" readonly>
                                </div>
                            </td>
                            <td class="table-label text-nowrap text-right">本期剩余数量</td>
                            <td>
                                <div class="form-group">
                                    <input class="input-sm form-control" type="number" step="0.00001" id="tcycleBalQty" name="tcycleBalQty" readonly>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table-label text-nowrap text-right">备注</td>
                            <td colspan="3"><textarea class="form-control" rows="1" id="rmk" name="rmk"></textarea></td>
                        </tr>
                    </table>
                </form>
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
    <script src="../../../static/dcr/js/dcrchgoffimg_form.js"></script>
</footer>
</body>
</html>