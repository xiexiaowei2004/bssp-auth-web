<%@ page language="java" contentType="text/html; charset=utf-8" %>
<!DOCTYPE HTML>
<html>
<head>
    <title>车辆入区登记</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
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
    <!--[if lt IE 9]>
    <script src="../../../static/common/html5shiv/html5shiv.min.js"></script>
    <script src="../../../static/common/html5shiv/respond.min.js"></script>
    <![endif]-->
    <style>
        #iRegForm table td {
            border: none;
        }
    </style>
</head>
<body class="gray-bg">
<div class="container animated fadeInRight">
    <div class="ibox" id="head">
        <div class="ibox-title with-border collapsed-box">
            <div class="pull-left">
                <h4 class="box-title pull-left" id="table-head">表头</h4>
            </div>
            <div class="pull-right">
                <a href="#1" class="collapse-link" title="收起表头">
                    <i class="fa fa-chevron-up"></i>
                </a>
            </div>
        </div>
        <div class="clearfix"></div>
        <div class="ibox-content">
            <a href="javascript:void(0);" class="btn btn-info fa fa-save" id="save"> 暂存</a>
            <span class="m-r-sm"> </span>
            <a href="javascript:void(0);" class="btn btn-info fa fa-mail-reply" id="reback">返回</a>
        </div>
        <div class="ibox-content">
            <form id="iRegForm">
                <!-- 隐藏字段 -->
                <div id="hidContainer" class="form-group">
                    <input type="hidden" id="uid" name="uid">
                    <input type="hidden" id="seqNo" name="seqNo">
                    <input type="hidden" id="vehicleRegFlag" name="vehicleRegFlag"><!--车辆备案标识-->
                    <input type="hidden" id="clearanceType" name="clearanceType"><!--通关业务类型-->
                    <input type="hidden" id="masterCuscd" name="masterCuscd"><!--主管海关-->
                </div>
                <table class="table table-condensed no-borders no-margins">
                    <tr>
                        <td class="table-label text-nowrap">车牌号</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="vehicleNo" readonly name="vehicleNo">
                            </div>
                        </td>
                        <td class="table-label text-nowrap">车牌类型</td>
                        <td>
                            <div class="form-group">
                                <select class="input-sm form-control" style="width: 100%" id="plateTypecd"
                                        name="plateTypecd" dll_name="PLATE_TYPE" isShowEmpty="true" disabled></select>
                                <%--<input class="input-sm form-control" id="plateTypecd" readonly name="plateTypecd">--%>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">车辆备案标识</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="vehicleRegFlagCN" name="vehicleRegFlagCN" readonly>
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
                        <td class="table-label text-nowrap">车辆自重<span class="notempty">*</span></td>
                        <td>
                            <div class="form-group">
                                <input type="number" step="0.00001" class="input-sm form-control" id="vehicleWt" name="vehicleWt" isValidate="true" notempty maxlength="19">
                            </div>
                        </td>
                        <td class="table-label text-nowrap">电子车牌</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="vehicleIcNo" name="vehicleIcNo"
                                       >
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td class="table-label text-nowrap">运输类型<span class="notempty">*</span></td>
                        <td>
                            <div class="form-group">
                                <select class="input-sm form-control" style="width: 100%" id="transTypecd"
                                        name="transTypecd" dll_name="BIND_TYPECD" isShowEmpty="true"
                                        isValidate="true"
                                        notempty>
                                    <option value="0">重进空出</option>
                                </select>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">IC卡编号</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="icNo" name="icNo"
                                       readonly>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">IC卡类型</td>
                        <td>
                            <div class="form-group">
                                <select class="input-sm form-control" style="width: 100%" id="icTypecd"
                                        name="icTypecd" dll_name="IC_TYPE" isShowEmpty="true"></select>
                                <%--<input class="input-sm form-control" id="icTypecd" name="icTypecd"
                                       readonly>--%>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap">入区运输单编号</td>
                        <td>
                            <div class="form-group"><!--input-group-->
                                <input class="input-sm form-control" id="iTransNo" name="iTransNo">
                                <%--<span class="input-group-btn">
                                        <button class="btn btn-sm btn-default" type="button"
                                                id="selectVehicleNo"><i class=" fa fa-ellipsis-h"></i></button>
                                    </span>--%>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">入区运输单类型</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="iTransTypeCode"
                                       name="iTransTypeCode" readonly>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">入区车架编号</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="iVehicleFrameNo" name="iVehicleFrameNo">
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td class="table-label text-nowrap">入区车架重量</td>
                        <td>
                            <div class="form-group">
                                <input type="number" step="0.00001" class="input-sm form-control" id="iVehicleFrameWt" name="iVehicleFrameWt" maxlength="19">
                            </div>
                        </td>
                        <td class="table-label text-nowrap">入区区内企业代码<span class="notempty">*</span></td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="iAreainEtpsno"
                                       name="iAreainEtpsno" isValidate="true" notempty>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">入区区内企业名称<span class="notempty">*</span></td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="iAreainEtpsnm"
                                       name="iAreainEtpsnm"
                                       isValidate="true" notempty readonly>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td class="table-label text-nowrap">入区流向<span class="notempty">*</span></td>
                        <td>
                            <div class="form-group">
                                <select class="input-sm form-control" style="width: 100%" id="iFlow"
                                        name="iFlow" dll_name="BIND_TYPECD" isShowEmpty="true"
                                        isValidate="true"
                                        notempty>
                                    <option value="0">境内区外</option>
                                </select>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">入区场地代码</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control"
                                       id="iAreaCode" name="iAreaCode" readonly>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">单据状态</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="chkStatus"
                                       name="chkStatus" readonly value="1">
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td class="table-label text-nowrap">出区运输单编号</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="eTransNo" name="eTransNo">
                            </div>
                        </td>
                        <td class="table-label text-nowrap">出区运输单类型</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="eTransType" name="eTransType" readonly>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">出区车架编号</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="eVehicleFrameNo"
                                       name="eVehicleFrameNo">
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td class="table-label text-nowrap">出区车架重量</td>
                        <td>
                            <div class="form-group">
                                <input  type="number" step="0.00001" class="input-sm form-control" id="eVehicleFrameWt" name="eVehicleFrameWt" maxlength="19">
                            </div>
                        </td>
                        <td class="table-label text-nowrap">出区区内企业代码<span class="notempty">*</span></td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="eAreainEtpsno"
                                       name="eAreainEtpsno" maxlength="512"
                                       isValidate="true" notempty>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">出区区内企业名称<span class="notempty">*</span></td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="eAreainEtpsnm"
                                       name="eAreainEtpsnm" maxlength="512"
                                       isValidate="true" notempty readonly>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap">出区流向<span class="notempty">*</span></td>
                        <td>
                            <div class="form-group">
                                <select class="input-sm form-control" style="width: 100%" id="eFlow"
                                        name="eFlow" dll_name="BIND_TYPECD" isShowEmpty="true"
                                        isValidate="true"
                                        notempty>
                                    <option value="0">境内区外</option>
                                </select>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">出区场地代码</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="eAreaCode"
                                       name="eAreaCode" readonly>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">入区登记日期</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="iRegDate"
                                       name="iRegDate" readonly>
                            </div>
                        </td>
                    </tr>


                    <tr>
                        <td class="table-label text-nowrap">本次有效日期</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control datepicker" id="thisValidateDate" name="thisValidateDate" data-date-format="yyyy-mm-dd">
                            </div>
                        </td>
                        <td class="table-label text-nowrap">收卡时间</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control datepicker" id="icRecyceTime"
                                       name="icRecyceTime" data-date-format="yyyy-mm-dd">
                            </div>
                        </td>
                        <td class="table-label text-nowrap">作业单标识</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="workFlagCode"
                                       name="workFlagCode" readonly>
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
                        <td class="table-label text-nowrap">通关业务类型</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="clearanceTypeCN" name="clearanceTypeCN"
                                       readonly>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">主管海关</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="masterCuscdCN" name="masterCuscdCN"
                                       readonly>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">车辆入区登记编号</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="etpsPreentNo" name="etpsPreentNo" readonly>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap">操作企业</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="inputCopName" name="inputCopName" readonly>
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
<script src="../../../static/common/bootstrapvalidator-master/js/bootstrapValidator.min.js"></script>
<script src="../../../static/common/bootstrapvalidator-master/js/language/zh_CN.js"></script>
<!-- Data picker -->
<script src="../../../static/common/bootstrap-datepicker-master/js/bootstrap-datepicker.js"></script>
<!-- 自定义js -->
<script src="../../../static/admin/main/js/contabs.js"></script>
<script src="../../../static/common/js/common.js"></script>
<script src="../../../static/admin/main/js/content.js"></script>
<script src="../../../static/sas/js/sasVehicleIReg_edit.js"></script>
</body>
</html>