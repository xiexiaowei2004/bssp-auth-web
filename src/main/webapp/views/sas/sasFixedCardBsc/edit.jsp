<%@ page language="java" contentType="text/html; charset=utf-8" %>
<!DOCTYPE HTML>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <title>车辆信息备案相关操作</title>
    <link rel="stylesheet" href="../../../static/common/bootstrap-table-master/bootstrap-table.min.css"/>
    <link rel="stylesheet" href="../../../static/common/bootstrap-datepicker-master/css/bootstrap-datepicker3.min.css"/>
    <link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css"/>
    <link rel="stylesheet" href="../../../static/common/select2/css/select2.min.css" type="text/css">
    <link rel="stylesheet" href="../../../static/common/bootstrapvalidator-master/css/bootstrapValidator.min.css" type="text/css">
    <link rel="stylesheet" href="../../../static/admin/main/css/animate.css"/>
    <link rel="stylesheet" href="../../../static/common/css/style.css"/>
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
        .form-group{
            margin-bottom: 0;
        }
    </style>
</head>
<body class="gray-bg">
<div class="container animated fadeInRight">
    <div class="ibox">
        <div class="ibox-title font-bold">
            <h4 class="box-title pull-left" id="table-head">表头 </h4>

        </div>
        <div class="clearfix"></div>
        <div class="ibox-content">
            <div class="m-b-sm">
                <i class="btn btn-info fa fa-save" id="save">保存</i>
                <i class="btn btn-info fa fa-mail-reply" id="reback">返回</i>
                <i class="btn btn-info fa fa-check-square" id="confirm">确定</i>
            </div>
        </div>
        <div class="ibox-content">
            <form id="dataForm">
                <!-- 隐藏字段 -->
                <div>
                    <input type="hidden" id="seqNo" name="seqNo"/>
                    <input type="hidden" id="validFlag" name="validFlag"/>
                    <input type="hidden" id="uid" name="uid" />
                </div>
                <table class="table table-condensed no-border">
                    <tr>
                        <td class="table-label text-nowrap">长期卡备案号<span style="color:red;">*</span></td>
                        <td>
                            <div class="form-group">
                                <div class="form-group">
                                    <input class="input-sm form-control readonly" id="fixedCardRegno" name="fixedCardRegno" fieldName="长期卡备案号" isValidate="true" notempty maxlength="18">
                                </div>
                            </div>
                        </td>
                        <td class="table-label text-nowrap" style="width:160px;">IC卡编号<span style="color:red;">*</span></td>
                        <td><input class="input-sm form-control readonly" id="icCode" name="icCode"></td>
                        <td class="table-label text-nowrap">IC卡类型<span style="color:red;">*</span></td>
                        <td>
                            <select class="form-control readyonly" id="icType" name="icType" dll_name="IC_TYPE" style="width: 100%" fieldName="车辆类型" isValidate="true" notempty>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap">领用企业海关代码<span style="color:red;">*</span></td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control readonly" id="useEtpsCode" name="useEtpsCode" fieldName="领用企业海关代码" isValidate="true" notempty maxlength="64">
                            </div>
                        </td>
                        <td class="table-label text-nowrap" >领用企业名称<span style="color:red;">*</span></td>
                        <td colspan="3"><input class="input-sm form-control readonly" id="useEtpsName" name="useEtpsName"></td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap">社会信用代码</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control readToOne" id="useEtpsSccd" name="useEtpsSccd" isValidate="true"  fieldName="社会信用代码" isValidate="true" notempty maxlength="10">
                            </div>
                        </td>
                        <td class="table-label text-nowrap">有效日期<span style="color:red;">*</span></td>
                        <td>
                            <div class="form-group">
                                <input type="text" class="form-control input-sm datepicker" name="validDate"
                                       id="validDate" data-date-format="yyyy-mm-dd">
                            </div>
                        </td>
                        <td class="table-label text-nowrap">长期卡状态</td>
                        <td colspan="3">
                            <div class="form-group">
                                <select class="form-control readToTwo" id="fixedCardStatus" name="fixedCardStatus" dll_name="FIXED_CARD_STATUS" style="width: 100%"></select>
                            </div>
                        </td>

                    </tr>
                    <tr>
                        <td class="table-label text-nowrap">车牌号</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="vehicleNo" name="vehicleNo">
                            </div>
                        </td>
                        <td class="table-label text-nowrap">车辆分类</td>
                        <td>
                            <div class="form-group">
                                <select class="form-control readyonly" id="vehicleSort" name="vehicleSort" dll_name="codStdCarSort" style="width: 100%"></select>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">车辆类型</td>
                        <td>
                            <div class="form-group">
                                <select class="form-control readyonly" id="vehicleTypecd" name="vehicleTypecd" dll_name="codStdCarType" style="width: 100%" fieldName="车辆类型" isValidate="true" notempty>
                                </select>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap">备注</td>
                        <td colspan="5">
                            <div class="form-group">
                                <input type="text" class="form-control"  id="rmk" name="rmk" maxlength="512"></input>
                            </div>
                        </td>
                    </tr>
                    <tr style="height: 20px"></tr>
                    <tr>
                        <td class="table-label text-nowrap">备案日期</td>
                        <td>
                            <div class="form-group">
                                <input type="text" class="form-control input-sm datepicker read" name="regDate"
                                       id="regDate" data-date-format="yyyy-mm-dd">
                            </div>
                        </td>
                        <td class="table-label text-nowrap text-right">关区码</td>
                        <td>
                            <div class="form-group">
                                <select class="form-control readyonly" id="masterCuscd" name="masterCuscd" dll_name="codCusCustomsfec" style="width: 100%" fieldName="车辆类型" isValidate="true" notempty>
                                </select>
                            </div>
                        </td>
                        <td class="table-label text-nowrap text-right">监督场所</td>
                        <td>
                            <div class="form-group">
                                <select class="form-control readyonly" id="areaCode" name="areaCode" dll_name="codStdAreaCode" style="width: 100%" fieldName="车辆类型" isValidate="true" notempty>
                                </select>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap">录入单位代码</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control readonly" id="inputCopNo" name="inputCopNo">
                            </div>
                        </td>
                        <td class="table-label text-nowrap">录入单位名称</td>
                        <td colspan="3">
                            <input class="input-sm form-control readonly" id="inputCopName" name="inputCopName">
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap text-right">操作时间<span style="color:red;">*</span></td>
                        <td><input class="input-sm form-control" id="decTime" name="decTime" readonly ></td>
                        <td class="table-label text-nowrap text-right">操作人</td>
                        <td><input class="input-sm form-control" id="inputerName" name="inputerName" readonly></td>
                        <td class="table-label text-nowrap text-right">操作员代码</td>
                        <td><input class="input-sm form-control" id="inputerCode" name="inputerCode" readonly>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    </div>
</div>
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
    <script src="../../../static/admin/main/js/content.js"></script>
    <script src="../../../static/sas/js/sasFixedCardBsc.js"></script>
</footer>
</body>
</html>