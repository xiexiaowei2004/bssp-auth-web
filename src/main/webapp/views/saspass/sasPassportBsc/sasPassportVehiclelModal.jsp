<%@ page language="java" contentType="text/html; charset=utf-8" %>
<!DOCTYPE HTML>
<html>
<head>
    <title>车辆信息</title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <link rel="stylesheet" href="../../../static/common/bootstrap-table-master/bootstrap-table.min.css" />
    <link rel="stylesheet" href="../../../static/common/bootstrap-datepicker-master/css/bootstrap-datepicker3.min.css" />
    <link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css" />
    <link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css" />
    <link rel="stylesheet" href="../../../static/common/select2/css/select2.min.css" type="text/css">
    <link rel="stylesheet" href="../../../static/admin/main/css/animate.css" />
    <link rel="stylesheet" href="../../../static/common/css/style.css" />
    <link rel="stylesheet" href="../../../static/common/css/style.css" />
    <!--[if lt IE 9]>
    <script src="../../../static/common/html5shiv/html5shiv.min.js"></script>
    <script src="../../../static/common/html5shiv/respond.min.js"></script>
    <![endif]-->
</head>
<body class="gray-bg">
<div class="animated fadeInRight">
    <form id="searchForm">
        <div class="ibox">
            <div class="ibox-content">
                <div style="display: none;" id="hidSearchParam">
                    <input type="hidden" name="masterCuscd">
                    <%--<input type="hidden" name="chkStatus" value="P">--%>
                </div>

                <div class="row m-b-sm">
                    <div class="col-sm-3 form-horizontal">
                        <label class="col-sm-4 control-label text-nowrap text-right">单据状态</label>
                        <div class="col-sm-8">
                            <select class="form-control select2 form-horizontal" id="chkStatus" name="chkStatus"
                                    dll_name="CHK_STATUS" isShowEmpty="true"></select>
                        </div>
                    </div>
                    <div class="col-sm-4 form-horizontal">
                        <label class="col-sm-4 control-label text-nowrap text-right">车牌号</label>
                        <div class="col-sm-8">
                            <input type="text" name="vehicleNo" class="form-control input-sm">
                        </div>
                    </div>
                    <div class="col-sm-5 form-horizontal">
                        <label class="col-sm-3 control-label text-nowrap text-right">车属企业</label>
                        <div class="col-sm-9">
                            <input type="text" name="vehicleEtps" class="form-control input-sm">
                        </div>
                    </div>
                </div>

                <div class="row m-b-sm">
                    <div class="col-sm-3 form-horizontal">
                        <label class="col-sm-4 control-label text-nowrap text-right">申报类型</label>
                        <div class="col-sm-8">
                            <select class="form-control select2 form-horizontal" id="dclTypecd" name="dclTypecd"
                                    dll_name="DCL_TYPE" isShowEmpty="true"></select>
                        </div>
                    </div>
                    <div class="col-sm-4 form-horizontal">
                        <label class="col-sm-4 control-label text-nowrap text-right">车辆类型</label>
                        <div class="col-sm-8">
                            <select class="form-control select2 form-horizontal" id="vehicleTypecd" name="vehicleTypecd"
                                    dll_name="codStdCarType" isShowEmpty="true"></select>
                        </div>
                    </div>
                    <div class="col-sm-5 form-horizontal">
                        <label class="col-sm-3 control-label text-right text-nowrap">操作时间</label>
                        <div class="col-sm-9">
                            <div class="input-group">
                                <input type="text" class="form-control input-sm datepicker" name="decTimeStart"
                                       id="decTimeStart" data-date-format="yyyy-mm-dd">
                                <span class="input-group-addon">至</span>
                                <input type="text" class="form-control input-sm datepicker" name="decTimeEnd"
                                       id="decTimeEnd" data-date-format="yyyy-mm-dd">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row m-b-sm">
                    <div class="col-sm-4 pull-right text-right">
                        <div class="col-sm-4"></div>
                        <div class="col-sm-8">
                            <button type="button" class="btn btn-success btn-sm" id="search">搜索</button>
                            <button type="reset" class="btn btn-default btn-sm"> 清除</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
    <form id="vehicleModalForm">
        <div class="ibox-content">
            <div class="row">
                <div class="col-sm-12">
                    <a href="javascript:void(0)" class="btn btn-info fa fa-check-square" id="vehicleModalSave">确认</a>
                    <a href="javascript:void(0)" class="btn btn-default fa fa-mail-reply" id="vehicleModalReback">返回</a>
                    <table id="vehicleTab"></table>
                </div>
            </div>
        </div>
        <input type="hidden" name="seqNo">
    </form>
</div>
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
<script src="../../../static/common/bootstrap-table-master/extensions/export/bootstrap-table-export.js"></script>
<script src="../../../static/common/bootstrap-table-master/tableExport.js"></script>
<script src="../../../static/common/bootstrap-table-master/locale/bootstrap-table-zh-CN.min.js"></script>
<script src="../../../static/common/select2/js/select2.full.js"></script>
<script src="../../../static/common/select2/js/i18n/zh-CN.js"></script>
<script src="../../../static/common/bootstrap-table-master/extensions/export/bootstrap-table-export.js"></script>
<script src="../../../static/common/bootstrapvalidator-master/js/bootstrapValidator.min.js"></script>
<script src="../../../static/common/bootstrapvalidator-master/js/language/zh_CN.js"></script>
<!-- 自定义js -->
<script src="../../../static/common/js/common.js"></script>
<script src="../../../static/saspass/js/sasPassportVehicleModal.js"></script>
</body>
</html>