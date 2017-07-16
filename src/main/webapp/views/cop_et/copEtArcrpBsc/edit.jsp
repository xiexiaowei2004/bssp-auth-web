<%@ page language="java" contentType="text/html; charset=utf-8" %>
<!DOCTYPE HTML>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <title>联网企业档案库-编辑</title>
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
    <div class="ibox" id="head">
        <div class="ibox-title with-border collapsed-box">
            <div class="pull-left">
                <h4 class="box-title pull-left">表头</h4>
            </div>
            <div class="pull-right">
                <a href="#1" class="collapse-link" title="收起表头"><i class="fa fa-chevron-up"></i></a>
            </div>
        </div>
        <div class="clearfix"></div>
        <div class="ibox-content">
            <a href="#1" class="btn btn-info fa fa-save bscBtn" id="save">暂存</a>
            <a href="#1" class="btn btn-success fa fa-check-square-o bscBtn" id="submit">申报</a>
            <span class="m-r-sm"> </span>
            <a href="#1" class="btn btn-info fa fa-mail-reply" id="reback">返回</a>
        </div>
        <div class="clearfix"></div>
        <div class="ibox-content">
            <form id="dataForm">
                <!-- 隐藏字段 -->
                <div class="form-group">
                    <input type="hidden" id="uid" name="uid">
                    <input type="hidden" id="areaCode" name="areaCode">
                    <input type="hidden" id="chkStatus" name="chkStatus">
                    <input type="hidden" id="docType" name="docType">
                    <input type="hidden" id="bizType" name="bizType">
                </div>
                <table class="table table-condensed no-borders no-margins">
                    <tr>
                        <td class="table-label text-nowrap text-right" style="width:160px;">预录入统一编号</td>
                        <td>
                            <div class="form-group">
                                <input class="form-control" id="seqNo" name="seqNo" readonly notempty>
                            </div>
                        </td>
                        <td class="table-label text-nowrap text-right" style="width:160px;">档案库编号</td>
                        <td>
                            <div class="form-group">
                                <input class="form-control" id="etArcrpNo" name="etArcrpNo" readonly notempty>
                            </div>
                        </td>
                        <td class="table-label text-nowrap text-right" style="width:160px;">企业内部编号</td>
                        <td>
                            <div class="form-group">
                                <input class="form-control" id="etpsPreentNo" name="etpsPreentNo" readonly notempty>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap text-right">经营单位代码<span class="notempty">*</span></td>
                        <td>
                            <div class="form-group">
                                <input class="form-control" id="bizopEtpsno" name="bizopEtpsno" isValidate="true" maxlength="10" notempty>
                            </div>
                        </td>
                        <td class="table-label text-nowrap text-right">经营单位社会信用代码</td>
                        <td>
                            <div class="form-group">
                                <input class="form-control" id="bizopEtpsSccd" name="bizopEtpsSccd" maxlength="18" readonly>
                            </div>
                        </td>
                        <td class="table-label text-nowrap text-right">经营单位名称<span class="notempty">*</span></td>
                        <td>
                            <div class="form-group">
                                <input class="form-control" id="bizopEtpsNm" name="bizopEtpsNm" isValidate="true" maxlength="512" notempty readonly>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap text-right">加工单位代码<span class="notempty">*</span></td>
                        <td>
                            <div class="form-group">
                                <input class="form-control" id="prcsEtpsno" name="prcsEtpsno" isValidate="true" maxlength="10" notempty>
                            </div>
                        </td>
                        <td class="table-label text-nowrap text-right">加工单位社会信用代码</td>
                        <td>
                            <div class="form-group">
                                <input class="form-control" id="prcsEtpsSccd" name="prcsEtpsSccd" maxlength="18" readonly>
                            </div>
                        </td>
                        <td class="table-label text-nowrap text-right">加工单位名称<span class="notempty">*</span></td>
                        <td>
                            <div class="form-group">
                                <input class="form-control" id="prcsEtpsNm" name="prcsEtpsNm" isValidate="true" maxlength="512" readonly notempty>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap text-right">申报单位编号<span class="notempty">*</span></td>
                        <td>
                            <div class="form-group">
                                <input class="form-control" id="dclEtpsno" name="dclEtpsno" isValidate="true" maxlength="10" notempty>
                            </div>
                        </td>
                        <td class="table-label text-nowrap text-right">申报单位社会信用代码</td>
                        <td>
                            <div class="form-group">
                                <input class="form-control" id="dclEtpsSccd" name="dclEtpsSccd" maxlength="18" readonly>
                            </div>
                        </td>
                        <td class="table-label text-nowrap text-right">申报单位名称<span class="notempty">*</span></td>
                        <td>
                            <div class="form-group">
                                <input class="form-control" id="dclEtpsNm" name="dclEtpsNm" isValidate="true" maxlength="512" readonly notempty>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap text-right">申报单位类型</td>
                        <td>
                            <div class="form-group">
                                <select class="form-control select2-width" id="declareErType" name="declareErType" dll_name="DCL_ETPS_TYPE">
                                    <option value="">-请选择-</option>
                                </select>
                            </div>
                        </td>
                        <td class="table-label text-nowrap text-right">联系地址</td>
                        <td>
                            <div class="form-group">
                                <input class="form-control" id="concAddr" name="concAddr" maxlength="512">
                            </div>
                        </td>
                        <td class="table-label text-nowrap text-right">联系电话</td>
                        <td>
                            <div class="form-group">
                                <input type="tel" class="form-control" id="telnum" name="telnum" maxlength="15">
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap text-right">申报类型</td>
                        <td>
                            <div class="form-group">
                                <select class="form-control select2-width" id="dclTypecd" name="dclTypecd" dll_name="DCL_TYPE" disabled></select>
                            </div>
                        </td>
                        <td class="table-label text-nowrap text-right">结束有效时间<span class="notempty">*</span></td>
                        <td>
                            <div class="form-group">
                                <input class="form-control datepicker" data-date-format="yyyy-mm-dd" id="finishValidDate" name="finishValidDate" isValidate="true" notempty>
                            </div>
                        </td>
                        <td class="table-label text-nowrap text-right">批准证编号</td>
                        <td>
                            <div class="form-group">
                                <input class="form-control" id="apcretNo" name="apcretNo" maxlength="64">
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap text-right">加工生产能力<span class="notempty">*</span></td>
                        <td>
                            <div class="form-group">
                                <input type="number" class="form-control" id="prcsPrdcAbltAmt" name="prcsPrdcAbltAmt" isValidate="true" maxlength="25" notempty>
                            </div>
                        </td>
                        <td class="table-label text-nowrap text-right">主管海关<span class="notempty">*</span></td>
                        <td>
                            <div class="form-group">
                                <select class="form-control select2-width" id="masterCuscd" name="masterCuscd" dll_name="codCusCustomsfec" isValidate="true" notempty>
                                    <option value="">-请选择-</option>
                                </select>
                            </div>
                        </td>
                        <td class="table-label text-nowrap text-right">申报日期<span class="notempty">*</span></td>
                        <td>
                            <div class="form-group">
                                <input class="form-control" id="dclTime" name="dclTime" readonly notempty>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap text-right">录入单位代码</td>
                        <td>
                            <div class="form-group">
                                <input class="form-control" id="inputCopNo" name="inputCopNo" readonly>
                            </div>
                        </td>
                        <td class="table-label text-nowrap text-right">录入单位社会信用代码</td>
                        <td>
                            <div class="form-group">
                                <input class="form-control" id="inputEtpsSccd" name="inputEtpsSccd" readonly>
                            </div>
                        </td>
                        <td class="table-label text-nowrap text-right">录入单位名称</td>
                        <td>
                            <div class="form-group">
                                <input class="form-control" id="inputCopName" name="inputCopName" readonly>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap text-right">备案批准时间</td>
                        <td>
                            <div class="form-group">
                                <input class="form-control" id="putrecApprTime" name="putrecApprTime" readonly>
                            </div>
                        </td>
                        <td class="table-label text-nowrap text-right">变更批准时间</td>
                        <td>
                            <div class="form-group">
                                <input class="form-control" id="chgApprTime" name="chgApprTime" readonly>
                            </div>
                        </td>
                        <td class="table-label text-nowrap text-right">执行标志</td>
                        <td>
                            <div class="form-group">
                                <select class="form-control select2-width" id="exeMarkcd" name="exeMarkcd" dll_name="EXE_MARKCD" disabled></select>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap text-right">录入日期<span class="notempty">*</span></td>
                        <td>
                            <div class="form-group">
                                <input class="form-control datepicker" data-date-format="yyyy-mm-dd" id="decTime" name="decTime" isValidate="true" notempty>
                            </div>
                        </td>
                        <td class="table-label text-nowrap text-right">风险担保标志</td>
                        <td>
                            <div class="form-group">
                                <select class="form-control select2-width" id="riskAssureMarkcd" name="riskAssureMarkcd" dll_name="RISK_ASSURE_MARKCD" disabled></select>
                            </div>
                        </td>
                        <td class="table-label text-nowrap text-right">关联单证号</td>
                        <td>
                            <div class="form-group">
                                <input class="form-control" id="rltFormNo" name="rltFormNo" readonly>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap text-right" style="width:160px;">变更次数</td>
                        <td>
                            <div class="form-group">
                                <input class="form-control" id="chgTmsCnt" name="chgTmsCnt" readonly>
                            </div>
                        </td>
                        <td class="table-label text-nowrap text-right">备注</td>
                        <td colspan="3">
                            <div class="form-group">
                                <input class="form-control" id="rmk" name="rmk"/>
                            </div>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    </div>
    <div class="ibox" id="dtBox">
        <div class="ibox-title with-border collapsed-box">
            <h4 class="box-title pull-left">表体</h4>
            <div class="pull-right">
                <a href="#1" class="collapse-link" title="收起表体信息"><i class="fa fa-chevron-up"></i></a>
            </div>
        </div>
        <div class="ibox-content">
            <ul id="tab" class="nav nav-tabs">
                <li class="active"><a href="#imgTab" data-toggle="tab">料件</a></li>
                <li><a href="#exgTab" data-toggle="tab">成品</a></li>
            </ul>
            <div class="tab-content">
                <!-- 料件 -->
                <div class="tab-pane fade m-t-sm active in" id="imgTab">
                    <div id="imgToolbar">
                        <a href="#1" class="btn btn-info fa fa-info-circle" id="imgView">查阅</a>
                        <a href="#1" class="btn btn-info fa fa-plus-square bscBtn" id="imgAdd">新增</a>
                        <a href="#1" class="btn btn-info fa fa-edit bscBtn" id="imgModify">修改</a>
                        <a href="#1" class="btn btn-info fa fa-remove bscBtn" id="imgDelete">删除</a>
                        <span class="m-r-sm"></span>
                        <a href="#1" class="btn btn-info fa fa-edit bscBtn" id="imgChoose">选取</a>
                        <a href="#1" class="btn btn-info fa fa-edit changeBtn" id="imgChangeChoose">变更选取</a>
                    </div>
                    <table id="imgTable"></table>
                </div>
                <!-- 成品 -->
                <div class="tab-pane fade m-t-sm" id="exgTab">
                    <div id="exgToolbar">
                        <a href="#1" class="btn btn-info fa fa-info-circle" id="exgView">查阅</a>
                        <a href="#1" class="btn btn-info fa fa-plus-square bscBtn" id="exgAdd">新增</a>
                        <a href="#1" class="btn btn-info fa fa-edit bscBtn" id="exgModify">修改</a>
                        <a href="#1" class="btn btn-info fa fa-remove bscBtn" id="exgDelete">删除</a>
                        <span class="m-r-sm"></span>
                        <a href="#1" class="btn btn-info fa fa-edit bscBtn" id="exgChoose">选取</a>
                        <a href="#1" class="btn btn-info fa fa-edit changeBtn" id="exgChangeChoose">变更选取</a>
                    </div>
                    <table id="exgTable"></table>
                </div>
            </div>
        </div>
    </div>
    <div class="ibox" id="acmpFormDtBox">
        <!-- 附件 -->
        <div class="ibox-title">
            <h4 class="box-title pull-left">附件信息列表</h4>
            <div class="pull-right">
                <a href="#1" class="collapse-link" title="收起表头"><i class="fa fa-chevron-down"></i></a>
            </div>
        </div>
        <div class="ibox-content">
            <div class="box-body" id="acmpFormDt" style="display:none;">
                <div id="acmpFormDtToolbar">
                    <a href="#1" class="btn btn-info fa fa-info-circle" id="acmpFormDtView">查阅</a>
                    <a href="#1" class="btn btn-info fa fa-plus-square bscBtn" id="acmpFormDtAdd">新增</a>
                    <a href="#1" class="btn btn-info fa fa-edit bscBtn" id="acmpFormDtModify">修改</a>
                    <a href="#1" class="btn btn-info fa fa-remove bscBtn" id="acmpFormDtDelete">删除</a>
                </div>
                <table id="acmpFormDtTable"></table>
            </div>
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
    <script src="../../../static/cop_et/js/copEtArcrpBsc_form.js"></script>
    <script src="../../../static/admin/main/js/content.js"></script>
</footer>
</body>
</html>