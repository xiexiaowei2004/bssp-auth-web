<%@ page language="java" contentType="text/html; charset=utf-8" %>
<!DOCTYPE HTML>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <title>物流账册备案-编辑</title>
    <link rel="stylesheet" href="../../../static/common/bootstrap-table-master/bootstrap-table.min.css"/>
    <link rel="stylesheet" href="../../../static/common/bootstrap-datepicker-master/css/bootstrap-datepicker3.min.css"/>
    <link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css"/>
    <link rel="stylesheet" href="../../../static/common/select2/css/select2.min.css" type="text/css">
    <link rel="stylesheet" href="../../../static/common/bootstrapvalidator-master/css/bootstrapValidator.min.css" type="text/css">
    <link rel="stylesheet" href="../../../static/admin/main/css/animate.css"/>
    <link rel="stylesheet" href="../../../static/common/css/style.css"/>
    <link rel="stylesheet" href="../../../static/common/css/common.css"/>
</head>
<body>
<header>
    <div>
        <div class="ibox" id="head">
            <div class="ibox-title no-margins">
                <div class="pull-left">
                    <a href="javascript:void(0);" class="btn btn-info fa fa-mail-reply" id="reback">返回</a>
                </div>
            </div>
            <div class="clearfix"></div>
            <div class="ibox-content">
                <form id="dataForm">
                    <table class="table table-condensed no-borders no-margins">
                        <tr>
                            <td class="table-label text-nowrap text-right">商品序号</td>
                            <td><input class="form-control" id="gdsSeqno" name="gdsSeqno">
                            <td class="table-label text-nowrap text-right">商品料号</td>
                            <td><input class="form-control select2-width" id="gdsMtno" name="gdsMtno"></td>
                            <td class="table-label text-nowrap text-right text-right">商品编码</td>
                            <td><input class="form-control " id="gdecd" name="gdecd"></td>
                        </tr>
                        <tr>
                            <td class="table-label text-nowrap text-right">商品名称</td>
                            <td><input class="form-control" id="gdsNm" name="gdsNm"></td>
                            <td class="table-label text-nowrap text-right">商品规格型号</td>
                            <td><input class="form-control" id="gdsSpcfModelDesc" name="gdsSpcfModelDesc"></td>
                            <td class="table-label text-nowrap text-right">申报计量单位</td>
                            <td>
                                <select class="form-control" name="dclUnitcd" dll_name="codCusUnit" style="width:100%;"></select>
                            </td>
                        </tr>
                        <tr>
                            <td class="table-label text-nowrap text-right">法定计量单位</td>
                            <td>
                                <select class="form-control" name="lawfUnitcd" dll_name="codCusUnit" style="width:100%;"></select>
                            </td>
                            <td class="table-label text-nowrap text-right">第二法定计量单位</td>
                            <td>
                                <select class="form-control" name="secdLawfUnitcd" dll_name="codCusUnit" style="width:100%;"></select>
                            </td>
                            <td class="table-label text-nowrap text-right">申报单价</td>
                            <td><input class="form-control" id="dclUprcAmt" name="dclUprcAmt" type="number" step="0.01">
                            </td>
                        </tr>
                        <tr>
                            <td class="table-label text-nowrap text-right">申报币制</td>
                            <td>
                                <select class="form-control" name="dclCurrcd" style="width:100%;" dll_name="codCusCurr"></select>
                            </td>
                            <td class="table-label text-nowrap text-right">平均美元单价</td>
                            <td>
                                <input class="form-control" id="avgPrice" name="avgPrice">
                            </td>
                            <td class="table-label text-nowrap text-right">库存美元总价</td>
                            <td><input class="form-control" id="houseArea" name="totalAmt"></td>
                        </tr>
                        <tr>
                            <td class="table-label text-nowrap text-right">入仓数量</td>
                            <td><input class="form-control" id="inQty" name="inQty"></td>
                            <td class="table-label text-nowrap text-right">入仓法定数量</td>
                            <td><input class="form-control" id="inLawfQty" name="inLawfQty"></td>
                            <td class="table-label text-nowrap text-right">第二入仓法定数量</td>
                            <td><input class="form-control" id="inSecdLawfQty" name="inSecdLawfQty"></td>
                        </tr>
                        <tr>
                            <td class="table-label text-nowrap text-right">实增数量</td>
                            <td><input class="form-control" id="actlIncQty" name="actlIncQty"></td>
                            <td class="table-label text-nowrap text-right">实减数量</td>
                            <td><input class="form-control" id="actlRedcQty" name="actlRedcQty"></td>
                            <td class="table-label text-nowrap text-right">预增数量</td>
                            <td>
                                <input class="form-control " id="prevdIncQty" name="prevdIncQty">
                            </td>
                        </tr>
                        <tr>
                            <td class="table-label text-nowrap text-right">预减数量</td>
                            <td><input class="form-control" id="prevdRedcQty" name="prevdRedcQty">
                            </td>
                            <td class="table-label text-nowrap text-right">最近入仓(核增）日期</td>
                            <td><input type="text" class="form-control" data-date-format="yyyy-mm-dd" id="inDate" name="inDate"></td>
                            <td class="table-label text-nowrap text-right">最近出仓(区）日期</td>
                            <td><input type="text" class="form-control" data-date-format="yyyy-mm-dd" id="outDate" name="outDate"></td>
                        </tr>
                        <tr>
                            <td class="table-label text-nowrap text-right">存储(监管）期限</td>
                            <td><input class="form-control" id="limitDate" name="limitDate">
                            </td>
                            <td class="table-label text-nowrap text-right">设备入区方式</td>
                            <td>
                                <input class="form-control" id="inType" name="inType">
                            </td>
                            <td class="table-label text-nowrap text-right">记账清单编号</td>
                            <td><input class="form-control" id="invtNo" name="invtNo"></td>
                        </tr>
                        <tr>
                            <td class="table-label text-nowrap text-right">记账清单商品序号</td>
                            <td><input class="form-control" id="invtGNo" name="invtGNo"></td>
                            <td class="table-label text-nowrap text-right">修改标记</td>
                            <td>
                                <select class="form-control" id="modfMarkcd" name="modfMarkcd" dll_name="MODF_MARK" style="width:100%;"></select>
                            </td>
                            <td class="table-label text-nowrap text-right">海关执行标记</td>
                            <td>
                                <select class="form-control" name="cusmExeMarkcd" dll_name="CUSM_EXE_MARKCD" style="width:100%;"></select>
                            </td>
                        </tr>
                        <tr>
                            <td class="table-label text-nowrap text-right">备注</td>
                            <td colspan="5"><input class="form-control" id="rmk" name="rmk"></td>
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
    <script src="../../../static/ems_bws/js/emsBwsCusDt.js"></script>
</footer>
</body>
</html>