<%@ page language="java" contentType="text/html; charset=utf-8" %>
<!DOCTYPE HTML>
<html>
<head>
    <title>出入区核放单</title>
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
        #bscForm table td {
            border: none;
            /*padding-bottom: 10px;*/
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
                <a href="javascript:void(0);" class="btn btn-success fa fa-check-square-o" id="report">申报</a>
                <span class="m-r-sm"> </span>
                <a href="javascript:void(0);" class="btn btn-info fa fa-mail-reply" id="reback">返回</a>
            <!-- 核放单关联表证，核放单货物默认初始化条件 -->
        </div>
        <div class="ibox-content">
            <%--<form id="searchForm">
                <input type="hidden" name="seqNo">
            </form>--%>

            <form id="bscForm">
                <!-- 隐藏字段 -->
                <div id="hidContainer" class="form-group">
                    <input type="hidden" id="uid" name="uid">
                    <input type="hidden" id="seqNo" name="seqNo">
                    <input type="hidden" id="busType" name="busType"><!--单据类型后缀-->

                    <input type="hidden" name="passportTypecd" id="hidPassportTypecd"><!--核放单类型代码-->
                    <input type="hidden" name="ioTypecd" id="hidIoTypecd"><!--进出标志-->
                    <input type="hidden" name="masterCuscd" id="hidMasterCuscd"><!--主管海关代码-->
                    <input type="hidden" name="areaCode" id="hidAreaCode"><!--监管场所-->
                    <input type="hidden" name="emapvMarkcd" id="hidEmapvMarkcd"><!--审批标志-->
                    <input type="hidden" name="dclTypecd" id="hidDclTypecd"><!--申报类型-->
                    <input type="hidden" name="rltTbTypecd" id="hidRltTbTypecd"><!--关联单证类型-->
                    <input type="hidden" name="chgTmsCnt"><!-- 变更次数 -->
                    <input type="hidden" name="docType"><!-- 单据类型 -->
                    <input type="hidden" name="bizType"><!-- 业务类型 -->
                    <input type="hidden" name="chkStatus" id="hidChkStatus"><!--单据状态-->
                    <input type="hidden" name="modules" id="modules"><!-- 所属模块 -->
                </div>
                <table class="table table-condensed no-borders no-margins">
                    <tr>
                        <td class="table-label text-nowrap">核放单编号</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="passportNo" readonly name="passportNo">
                            </div>
                        </td>
                        <td class="table-label text-nowrap">核放单类型<span
                                class="notempty">*</span></td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="passportTypecd" readonly
                                       name="passportTypecdName" isValidate="true" notempty>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">企业预录入编号</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="etpsPreentNo" name="etpsPreentNo" readonly>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td class="table-label text-nowrap">进出标志<span class="notempty">*</span></td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="ioTypecd" name="ioTypecdName" readonly
                                       isValidate="true" notempty>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">绑定类型<span class="notempty">*</span></td>
                        <td>
                            <div class="form-group">
                                <select class="input-sm form-control" style="width: 100%" id="bindTypecd"
                                        name="bindTypecd" dll_name="BIND_TYPECD" isShowEmpty="true"
                                        isValidate="true"
                                        notempty></select>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">关联单证类型</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="rltTbTypecd" name="rltTbTypecdName"
                                       readonly>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td class="table-label text-nowrap">区内企业编码</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="areainEtpsno" name="areainEtpsno" readonly>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">区内企业社会信用代码</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="areainEtpsSccd" name="areainEtpsSccd"
                                       readonly>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">区内企业名称</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="areainEtpsNm" name="areainEtpsNm"
                                       readonly>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td class="table-label text-nowrap">车牌号</td>
                        <td>
                            <div class="form-group input-group">
                                <input class="input-sm form-control" id="vehicleNo" name="vehicleNo" readonly>
                                <span class="input-group-btn">
                                        <button class="btn btn-sm btn-default" type="button"
                                                id="selectVehicleNo"><i class=" fa fa-ellipsis-h"></i></button>
                                    </span>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">车自重</td>
                        <td>
                            <div class="form-group">
                                <input type="number" step="0.00001" class="input-sm form-control" id="vehicleWt"
                                       name="vehicleWt" maxlength="19" readonly>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">IC卡号(电子车牌)</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="vehicleIcNo" name="vehicleIcNo" readonly>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td class="table-label text-nowrap">货物毛重<span class="notempty">*</span></td>
                        <td>
                            <div class="form-group">
                                <input type="number" step="0.00001" class="input-sm form-control" id="totalGrossWt"
                                       name="totalGrossWt"
                                       maxlength="19" isValidate="true" notempty readonly>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">货物净重<span class="notempty">*</span></td>
                        <td>
                            <div class="form-group">
                                <input type="number" step="0.00001" class="input-sm form-control" id="totalNetWt"
                                       name="totalNetWt"
                                       maxlength="19" isValidate="true" notempty readonly>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">总重量<span class="notempty">*</span></td>
                        <td>
                            <div class="form-group">
                                <input type="number" step="0.00001" class="input-sm form-control" id="totaLWt"
                                       name="totaLWt" maxlength="19"
                                       isValidate="true" notempty readonly>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td class="table-label text-nowrap">车架号<span class="notempty">*</span></td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="vehicleFrameNo" name="vehicleFrameNo"
                                       maxlength="32" isValidate="true" notempty>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">车架重(KG)<span class="notempty">*</span></td>
                        <td>
                            <div class="form-group">
                                <input type="number" step="0.00001" class="input-sm form-control"
                                       id="vehicleFrameWt" name="vehicleFrameWt"
                                       maxlength="19" isValidate="true" notempty>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">地磅重量</td>
                        <td>
                            <div class="form-group">
                                <input type="number" step="0.00001" class="input-sm form-control" id="passCollectWt"
                                       name="passCollectWt"
                                       maxlength="19" readonly>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td class="table-label text-nowrap">集装箱号</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="containerNo" name="containerNo"
                                       maxlength="12">
                            </div>
                        </td>
                        <td class="table-label text-nowrap">集装箱箱型</td>
                        <td>
                            <div class="form-group">
                                <select class="input-sm form-control" style="width: 100%" id="containerType"
                                        name="containerType" dll_name="codStdContaParam"
                                        isShowEmpty="true"></select>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">集装箱重</td>
                        <td>
                            <div class="form-group">
                                <input type="number" step="0.00001" class="input-sm form-control" id="containerWt"
                                       name="containerWt"
                                       maxlength="19">
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td class="table-label text-nowrap">申请日期<span class="notempty">*</span></td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="dclTime" name="dclTime" readonly
                                       isValidate="true" notempty>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">申请人及联系方式<span class="notempty">*</span></td>
                        <td colspan="3">
                            <div class="form-group">
                                <input class="input-sm form-control" id="dclErConc"
                                       name="dclErConc" maxlength="512"
                                       isValidate="true" notempty>
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
                                <%--<select class="input-sm form-control" style="width: 100%" id="masterCuscd"
                                        name="masterCuscd" dll_name="codCusCustomsrel" disabled></select>--%>
                                    <input class="input-sm form-control" id="masterCuscd" name="masterCuscdName"
                                           readonly>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">监管场所</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="areaCode" name="areaCodeName" readonly>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">回执状态</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" name="retChannel" readonly>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td class="table-label text-nowrap">申报类型</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="dclTypecd" name="dclTypecdName" readonly>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">单据状态</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="chkStatus" name="chkStatusName" readonly>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">审批标志</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="emapvMarkcd" name="emapvMarkcdName"
                                       readonly>
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
                                <input class="input-sm form-control" id="decTime" name="decTime" readonly>
                            </div>
                        </td>
                    </tr>
                    <tr style="display: none;">
                        <td class="table-label text-nowrap">企业备案号</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="copEntNo" name="copEntNo" readonly>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">录入单位代码</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="inputCopNo" name="inputCopNo" readonly>
                            </div>
                        </td>
                        <%--<td class="table-label text-nowrap">所属系统<span class="notempty">*</span></td>
                        <td>
                            <div class="form-group">
                                <select class="input-sm form-control" style="width: 100%"
                                        id="ownerSystem"
                                        dll_name="OWNER_SYSTEM" name="ownerSystem"
                                        isShowEmpty="true" isValidate="true"
                                        notempty></select>
                            </div>
                        </td>--%>
                    </tr>
                    <tr style="display: none;">
                        <td class="table-label text-nowrap">核放单预录入编号</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="sasPassportPreentNo" readonly
                                       name="sasPassportPreentNo">
                            </div>
                        </td>
                        <td class="table-label text-nowrap">关联单证编号</td>
                        <td colspan="3">
                            <div class="form-group">
                                <input class="input-sm form-control" id="rltNo" name="rltNo" readonly>
                            </div>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    </div>

    <div class="ibox" id="rltIbox">
        <!-- 核放单关联表证 -->
        <div class="ibox-title">
            <h4 class="box-title pull-left">核放单关联表证</h4>
            <div class="pull-right">
                <a href="#1" class="collapse-link" title="收起表头"><i class="fa fa-chevron-up"></i></a>
            </div>
        </div>
        <div class="ibox-content">
            <div class="box-body">
                <div id="rltToolbar">
                    <%--<a href="#1" class="btn btn-info fa fa-info-circle" id="viewRlt"> 查阅</a>--%>
                    <a href="#1" class="btn btn-info fa fa-plus-square" id="addRlt"> 新增</a>
                    <a href="#1" class="btn btn-info fa fa-trash" id="deleteRlt"> 删除</a>
                </div>
                <table id="rltTab"></table>
            </div>
        </div>
    </div>

    <div class="ibox">
        <!-- 附件 -->
        <div class="ibox-title">
            <h4 class="box-title pull-left">核放单货物</h4>
            <div class="pull-right">
                <a href="javascript:void(0)" class="collapse-link" title="收起表体"><i class="fa fa-chevron-up"></i></a>
            </div>
        </div>

        <div class="ibox-content">
            <div id="dtToolbar" class="m-t-sm">
                    <span id="rltBtnSpan" style="display: none;">
                        <a href="javascript:void(0)" class="btn btn-info fa fa-refresh" id="refreshDt">刷新</a>
                        <span class="m-r-sm"></span>
                        <a href="javascript:void(0)" class="btn btn-info fa fa-info-circle" id="viewDt">查阅</a>
                        <a href="javascript:void(0)" class="btn btn-info fa fa-plus-square" id="addDt">新增</a>
                        <a href="javascript:void(0)" class="btn btn-info fa fa-edit" id="editDt">修改</a>
                        <a href="javascript:void(0)" class="btn btn-info fa fa-trash" id="deleteDt"> 删除</a>
                    </span>
                <table id="dtTab"></table>
            </div>
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
<script src="../../../static/saspass/js/sasPassport_edit.js"></script>
</body>
</html>