<%@ page language="java" contentType="text/html; charset=utf-8"%>
<!DOCTYPE HTML>
<html>
<head>
    <title>车辆信息变更</title>
    <meta name="keywords" content="BSSP">
    <meta name="description" content="BSSP">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <link rel="shortcut icon" href="../../../favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css" type="text/css">
    <link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css" type="text/css">
    <link rel="stylesheet" href="../../../static/admin/main/css/animate.css" type="text/css">
    <link rel="stylesheet" href="../../../static/common/css/style.css" />
    <link rel="stylesheet" href="../../../static/common/bootstrap-table-master/bootstrap-table.min.css" type="text/css">
    <link rel="stylesheet" href="../../../static/common/bootstrap-datepicker-master/css/bootstrap-datepicker.min.css" type="text/css">
    <link rel="stylesheet" href="../../../static/common/select2/css/select2.min.css" type="text/css">
</head>
<body class="gray-bg">
<div class="container animated fadeInRight">
    <form id="dataForm">
        <div class="ibox">
            <div class="ibox-title font-bold">
                <h4 class="box-title pull-left">长期卡备案-申报</h4>
            </div>
            <div class="ibox-content">
                <div class="m-b-sm">
                    <i class="btn btn-info fa fa-search" id="company">选择企业</i>
                    <i class="btn btn-info fa fa-check-square" id="readCard">读取发卡</i>
                    <i class="btn btn-info fa fa-check-square" id="makeCard">手工发卡</i>
                    <i class="btn btn-info fa fa-save" id="saveChange">保存</i>
                    <i class="btn btn-info fa fa-mail-reply" id="reback">返回</i>
                </div>
            </div>
            <div class="ibox-content">
                <!-- 隐藏字段 -->
                <div>
                    <input type="hidden" id="icCode" name="icCode"/>
                    <input type="hidden" id="validFlag" name="validFlag"/>
                    <input type="hidden" id="fixedCardRegno" name="fixedCardRegno"/>
                    <input type="hidden" id="masterCuscd" name="masterCuscd"/>
                    <input type="hidden" id="areaCode" name="areaCode"/>
                    <input type="hidden" id="seqNo" name="seqNo"/>
                    <input type="hidden" id="uid" name="uid" />
                </div>
                <div class="row m-b-sm">
                    <div class="col-md-5 form-horizontal">
                        <label class="col-sm-4 control-label text-nowrap text-right">领用企业海关代码</label>
                        <div class="col-sm-8">
                            <input type="text" name="useEtpsCode" id="useEtpsCode" readonly class="form-control input-sm">
                        </div>
                    </div>
                    <div class="col-md-5 form-horizontal">
                        <label class="col-sm-4 control-label text-nowrap text-right">领用企业名称</label>
                        <div class="col-sm-8">
                            <input type="text" name="useEtpsName" id="useEtpsName" readonly class="form-control input-sm">
                        </div>
                    </div>
                </div>
                <div class="row m-b-sm">
                    <div class="col-md-5 form-horizontal">
                        <label class="col-sm-4 control-label text-nowrap text-right">社会信用代码</label>
                        <div class="col-sm-8">
                            <input type="text" name="useEtpsSccd" id="useEtpsSccd" readonly class="form-control input-sm">
                        </div>
                    </div>
                    <div class="col-md-5 form-horizontal">
                        <label class="col-sm-4 control-label text-nowrap text-right">有效日期</label>
                        <div class="col-sm-8">
                            <input type="text" class="form-control input-sm datepicker" name="validDate"
                                   id="validDate" data-date-format="yyyy-mm-dd" >
                        </div>
                    </div>
                </div>
                <div class="row m-b-sm">
                    <div class="col-md-5 form-horizontal">
                        <label class="col-sm-4 control-label text-nowrap text-right">车牌号</label>
                        <div class="col-sm-8">
                            <input type="text" name="vehicleNo" id="vehicleNo" class="form-control input-sm" maxlength="32">
                        </div>
                    </div>
                    <div class="col-md-5 form-horizontal">
                        <label class="col-sm-4 control-label text-nowrap text-right">车辆分类</label>
                        <div class="col-sm-8">
                            <select class="form-control" id="vehicleSort" name="vehicleSort" dll_name="codStdCarSort" style="width: 100%"></select>
                        </div>
                    </div>
                </div>
                <div class="row m-b-sm">
                    <div class="col-md-5 form-horizontal">
                        <label class="col-sm-4 control-label text-nowrap text-right">车辆类型</label>
                        <div class="col-sm-8">
                            <select class="form-control" id="vehicleTypecd" name="vehicleTypecd" dll_name="codStdCarType" style="width: 100%" fieldName="车辆类型" isValidate="true" notempty>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
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
<script src="../../../static/common/bootstrap-datepicker-master/js/bootstrap-datepicker.min.js"></script>
<!-- 自定义js -->
<script src="../../../static/admin/main/js/contabs.js"></script>
<script src="../../../static/common/js/common.js"></script>
<script src="../../../static/sas/js/sasFixedCardBsc.js"></script>
</body>
</html>