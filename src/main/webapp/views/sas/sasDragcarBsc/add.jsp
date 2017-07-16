<%@ page language="java" contentType="text/html; charset=utf-8" %>
<!DOCTYPE HTML>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <title>t托卡备案-编辑</title>
    <link rel="stylesheet" href="../../../static/common/bootstrap-table-master/bootstrap-table.min.css"/>
    <link rel="stylesheet" href="../../../static/common/bootstrap-datepicker-master/css/bootstrap-datepicker3.min.css"/>
    <link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css"/>
    <link rel="stylesheet" href="../../../static/common/select2/css/select2.min.css" type="text/css"/>
    <link rel="stylesheet" href="../../../static/common/bootstrapvalidator-master/css/bootstrapValidator.min.css" type="text/css"/>
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
    </style>
</head>
<body class="gray-bg">
<div class="container animated fadeInRight">
    <div class="ibox">
        <div class="ibox-title font-bold">
            <h4 class="box-title pull-left" id="table-head">表头</h4>
        </div>
        <div class="clearfix"></div>
        <div class="ibox-content">
            <div class="m-b-sm">
                <i class="btn btn-info fa fa-save" id="save">暂存</i>
                <i class="btn btn-success fa fa-check-square-o" id="submit" >申报</i>
                <i class="btn btn-info fa fa-mail-reply" id="reback">返回</i>
            </div>
                <form id="dataForm">
                    <!-- 隐藏字段 -->
                    <div>
                        <input type="hidden" id="validFlag" name="validFlag"/>
                        <input type="hidden" id="uid" name="uid" />
                    </div>
                    <table class="table table-condensed no-border">
                        <tr>
                            <td class="table-label text-nowrap">申报端统一编号<span style="color:red;">*</span></td>
                            <td>
                                <div class="form-group">
                                    <div class="form-group">
                                        <input class="input-sm form-control" id="seqNo" name="seqNo" readonly fieldName="申报端统一编号" isValidate="true" notempty maxlength="18">
                                    </div>
                                </div>
                            </td>
                            <td class="table-label text-nowrap" style="width:160px;">企业预录入编号</td>
                            <td>
                                <input class="input-sm form-control" id="etpsPreentNo" name="etpsPreentNo" readonly>
                            </td>
                            <td class="table-label text-nowrap">所属系统</td>
                            <td>
                                <select class="form-control" id="ownerSystem" name="ownerSystem"
                                        dll_name="OWNER_SYSTEM" style="width: 100%" disabled></select>
                            </td>
                        </tr>
                        <tr>
                            <td class="table-label text-nowrap">车架号<span style="color:red;">*</span></td>
                            <td>
                                <div class="form-group">
                                    <input class="input-sm form-control" id="vehicleFrameNo" name="vehicleFrameNo" fieldName="车架号" isValidate="true" notempty maxlength="64">
                                </div>
                            </td>
                            <td class="table-label text-nowrap"><%--车架类型--%>申报(录入)人代码</td>
                            <td>
                                <input class="input-sm form-control" id="inputerCode" name="inputerCode" readonly>
                               <%-- <select class="form-control" id="vehicleTypecd" name="vehicleTypecd" dll_name="codStdCarType" style="width: 100%" fieldName="车辆类型" isValidate="true" notempty>
                                </select>--%>
                            </td>
                            <td class="table-label text-nowrap">联系人</td>
                            <td>
                                <div class="form-group">
                                    <input class="form-control" id="contactEr" name="contactEr"  isValidate="true" notempty>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table-label text-nowrap">联系电话<span style="color:red;">*</span>:</td>
                            <td>
                                <div class="form-group">
                                    <input class="form-control" id="contactTele" name="contactTele" isValidate="true" notempty>
                                </div>
                            </td>
                            <td class="table-label text-nowrap">联系地址</td>
                            <td>
                                <div class="form-group">
                                    <input class="form-control" id="contactAddress" name="contactAddress" style="width: 100%">
                                </div>
                            </td>
                            <td class="table-label text-nowrap">车架自重(KG)<span style="color:red;">*</span></td>
                            <td>
                                <div class="form-group">
                                    <input class="input-sm form-control" type="number" step="0.00001" id="vehicleFrameWt" name="vehicleFrameWt" fieldName="车架自重" isValidate="true" notempty>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table-label text-nowrap">所属企业编码<span style="color:red;">*</span></td>
                            <td>
                                <div class="form-group">
                                    <input class="input-sm form-control" id="etpsno" name="etpsno" isValidate="true"  fieldName="所属企业编码" isValidate="true" notempty maxlength="10">
                                </div>
                            </td>
                            <td class="table-label text-nowrap">所属企业社会信用编码</td>
                            <td>
                                <div class="form-group">
                                    <input class="input-sm form-control" id="etpsSccd" name="etpsSccd" maxlength="18">
                                </div>
                            </td>
                            <td class="table-label text-nowrap">所属企业名称<span style="color:red;">*</span></td>
                            <td colspan="3">
                                <div class="form-group">
                                    <input class="input-sm form-control" id="etpsNm" name="etpsNm" isValidate="true"
                                           fieldName="所属企业名称" isValidate="true" notempty maxlength="512">
                                </div>
                            </td>

                        </tr>
                        <tr>
                            <td class="table-label text-nowrap">申报日期</td>
                            <td><input type="text" class="form-control input-sm" id="dclTime" name="dclTime" readonly></td>
                            <td class="table-label text-nowrap">申请人<span style="color:red;">*</span></td>
                            <td colspan="3">
                                <div class="form-group">
                                    <input class="input-sm form-control" id="dclEr" name="dclEr" fieldName="申请人" isValidate="true" notempty>
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
                            <td class="table-label text-nowrap">主管海关</td>
                            <td>
                                <div class="form-group">
                                    <select class="form-control" id="masterCuscd" name="masterCuscd"
                                            dll_name="codCusCustomsfec" style="width: 100%" disabled fieldName="主管海关" isValidate="true" notempty></select>
                                </div>
                            </td>
                            <td class="table-label text-nowrap text-right">监管场所</td>
                            <td>
                                <div class="form-group">
                                    <select class="form-control carry" id="areaCode" name="areaCode"
                                            dll_name="codStdAreaCode"
                                            style="width: 100%" disabled fieldName="监管场所" isValidate="true" notempty>
                                    </select>
                                </div>
                            </td>
                            <td class="table-label text-nowrap text-right">回执状态</td>
                            <td>
                                <input class="input-sm form-control" id="retChannel" name="retChannel" readonly>
                            </td>
                        </tr>
                        <tr>
                            <td class="table-label text-nowrap">申报类型</td>
                            <td>
                                <div class="form-group">
                                    <select class="form-control" id="dclTypecd" name="dclTypecd" dll_name="DCL_TYPE" default="1" disabled style="width: 100%" fieldName="申报类型" isValidate="true" notempty></select>
                                </div>
                            </td>
                            <td class="table-label text-nowrap">单据状态</td>
                            <td>
                                <select class="form-control" id="chkStatus" name="chkStatus" dll_name="CHK_STATUS" default="S" disabled style="width: 100%"></select>
                            </td>
                            <td class="table-label text-nowrap" style="width:160px;">变更次数</td>
                            <td>
                                <div class="form-group">
                                    <input class="input-sm form-control" id="chgTmsCnt" name="chgTmsCnt" readonly fieldName="变更次数" isValidate="true" notempty>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table-label text-nowrap text-right">操作企业</td>
                            <td><input class="input-sm form-control" id="inputCopName" name="inputCopName" readonly>
                            </td>
                            <td class="table-label text-nowrap text-right">操作人</td>
                            <td><input class="input-sm form-control" id="inputerName" name="inputerName" readonly></td>
                            <td class="table-label text-nowrap text-right">操作时间</td>
                            <td><input class="input-sm form-control" id="decTime" name="decTime" readonly></td>
                        </tr>
                    </table>
                </form>
        </div>
    </div>
</div>
<footer>
    <script src="../../../static/common/jquery/jquery-3.1.1.min.js"></script>
    <script src="../../../static/common/bootstrap/js/bootstrap.min.js"></script>
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
    <script src="../../../static/sas/js/sasDragcarBsc.js"></script>
    <script src="../../../static/admin/main/js/content.js"></script>
</footer>
</body>
</html>