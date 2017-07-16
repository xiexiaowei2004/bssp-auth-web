<%@ page language="java" contentType="text/html; charset=utf-8" %>
<!DOCTYPE HTML>
<html>
<head>
    <title>临时车辆登记</title>
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
    <!--[if lt IE 9]>
    <script src="../../../static/common/html5shiv/html5shiv.min.js"></script>
    <script src="../../../static/common/html5shiv/respond.min.js"></script>
    <![endif]-->
    <style>
        #tempRegForm table td {
            border: none;
        }
    </style>
</head>
<body>
<div class="animated fadeInRight">
    <div class="ibox" id="head">
        <div class="ibox-content">
            <a href="javascript:void(0);" class="btn btn-info fa fa-save" id="tempSave"> 保存</a>
            <span class="m-r-sm"> </span>
            <a href="javascript:void(0);" class="btn btn-info fa fa-mail-reply" id="tempReback">返回</a>
        </div>
        <div class="clearfix"></div>
        <div class="ibox-content">
            <form id="tempRegForm">
                <!-- 隐藏字段 -->
                <div id="tempTegHidContainer" class="form-group">
                    <input type="hidden" id="tempTegUid" name="uid">
                    <input type="hidden" id="tempTegSeqNo" name="seqNo">
                </div>
                <table class="table table-condensed no-borders no-margins">
                    <tr>
                        <td class="table-label text-nowrap">车辆备案号</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="vehicleIRegno" name="vehicleIRegno" readonly>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">车牌号<span class="notempty">*</span></td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="vehicleNo" name="vehicleNo" isValidate="true" notempty>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">车牌类型<span
                                class="notempty">*</span></td>
                        <td>
                            <div class="form-group">
                                <select class="input-sm form-control" style="width: 100%" id="plateTypecd"
                                        name="plateTypecd" dll_name="PLATE_TYPE" isShowEmpty="true"
                                        isValidate="true"
                                        notempty></select>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td class="table-label text-nowrap">车辆类型<span class="notempty">*</span></td>
                        <td>
                            <div class="form-group">
                                <select class="input-sm form-control" style="width: 100%" id="vehicleTypecd"
                                        name="vehicleTypecd" dll_name="VEHICLE_TYPECD" isShowEmpty="true"
                                        isValidate="true"
                                        notempty></select>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">车辆自重(KG)<span class="notempty">*</span></td>
                        <td>
                            <div class="form-group">
                                <input type="number" step="0.00001" class="input-sm form-control" id="vehicleWt"
                                       name="vehicleWt" isValidate="true" notempty maxlength="19">
                            </div>
                        </td>
                        <td class="table-label text-nowrap">载重量(吨)<span class="notempty">*</span></td>
                        <td>
                            <div class="form-group">
                                <input type="number" step="0.00001" class="input-sm form-control" id="vehicleLoadWt"
                                       name="vehicleLoadWt" isValidate="true" notempty maxlength="19">
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td class="table-label text-nowrap">车主或车属企业名称<span class="notempty">*</span></td>
                        <td colspan="3">
                            <div class="form-group">
                                <input class="input-sm form-control" id="vehicleEntName" name="vehicleEntName"
                                       isValidate="true" notempty>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">车属企业社会信用代码</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="etpsSccd" name="etpsSccd">
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap">备注</td>
                        <td colspan="5">
                            <div class="form-group">
                                <textarea class="form-control" rows="1" id="rmk" name="rmk"></textarea>
                            </div>
                        </td>
                    </tr>

                    <tr style="height: 20px;"></tr>

                    <tr>
                        <td class="table-label text-nowrap">主管海关</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="masterCuscd" name="masterCuscd" readonly>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">操作人</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="inputerName" name="inputerName" readonly>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">操作时间</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="updateTime" name="updateTime" readonly>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td class="table-label text-nowrap">操作企业</td>
                        <td colspan="5">
                            <div class="form-group">
                                <input class="input-sm form-control" id="inputCopName" name="inputCopName" readonly>
                            </div>
                        </td>
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
<!-- 自定义js -->
<script src="../../../static/common/js/common.js"></script>
<script src="../../../static/sas/js/sasVehicleIReg_tempVehicleRegModal.js"></script>
</body>
</html>