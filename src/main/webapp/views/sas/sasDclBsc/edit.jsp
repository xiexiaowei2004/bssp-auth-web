<%@ page language="java" contentType="text/html; charset=utf-8" %>
<!DOCTYPE HTML>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <title>集报出入申请-修改</title>
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
</head>
<body class="gray-bg">
<header>
    <div class="container animated fadeInRight">
        <div class="ibox" id="head">
            <div class="ibox-title with-border collapsed-box">
                <div class="pull-left">
                    <h4 class="box-title pull-left" id="headTitle">表头</h4>
                </div>
                <div class="pull-right">
                    <a href="#1" class="collapse-link" title="收起表头"><i
                            class="fa fa-chevron-up"></i></a>
                </div>
            </div>
            <div class="clearfix"></div>
            <div class="ibox-content">
                <a href="javascript:void(0)" class="btn btn-info fa fa-save" id="save">暂存</a>
                <a href="javascript:void(0)" class="btn btn-success fa fa-check-square-o" id="submit">申报</a>
                <span class="m-r-sm"> </span>
                <a href="javascript:void(0)" class="btn btn-info fa fa-mail-reply" id="reback">返回</a>
            </div>
            <div class="ibox-content">
                <form id="dataForm">
                    <div>
                        <input type="hidden" id="uid" name="uid">
                        <input type="hidden" id="seqNo" name="seqNo">
                        <input type="hidden" id="copEntNo" name="copEntNo">
                        <input type="hidden" id="sasDclPreentNo" name="sasDclPreentNo">
                        <input type="hidden" id="inputerCode" name="inputerCode">
                        <input type="hidden" id="inputCopNo" name="inputCopNo">
                        <input type="hidden" id="busType" name="busType">
                    </div>
                    <table class="table table-condensed no-borders no-margins">

                        <tr>
                            <td class="table-label text-nowrap text-right no-borders">申报表编号</td>
                            <td><input class="input-sm form-control" id="sasDclNo" name="sasDclNo" readonly></td>
                            <td class="table-label text-nowrap text-right">区内账册编号<span class="notempty">*</span></td>
                            <td>
                                <div class="form-group">
                                    <input class="input-sm form-control" id="areainOriactNo" name="areainOriactNo" isValidate="true" notempty readonly>
                                </div>
                            </td>
                            <td class="table-label text-nowrap text-right">企业预录入编号<span class="notempty">*</span></td>
                            <td>
                                <div class="form-group">
                                    <input class="input-sm form-control" id="etpsPreentNo" name="etpsPreentNo" isValidate="true" notempty readonly>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td class="table-label text-nowrap text-right">业务类型<span class="notempty">*</span></td>
                            <td>
                                <div class="form-group">
                                    <select class="form-control select2 form-horizontal" id="businessTypecd" style="width:100%" isValidate="true" notempty
                                            name="businessTypecd" dll_name="SAS_TYPE" isShowEmpty="true" disabled>
                                    </select>
                                </div>
                            </td>
                            <td class="table-label text-nowrap text-right">货物流向<span class="notempty directionTypecd">*</span></td>
                            <td>
                                <div class="form-group">
                                    <select class="form-control select2 form-horizontal" id="directionTypecd" style="width:100%" disabled
                                            name="directionTypecd" isShowEmpty="true" dll_name="DIRECTION_TYPECD">
                                    </select>
                                </div>
                            </td>
                            <td class="table-label text-nowrap">所属系统</td>
                            <td>
                                <div class="form-group">
                                    <select class="form-control select2 form-horizontal" id="ownerSystem" style="width:100%" disabled
                                            name="ownerSystem" isShowEmpty="true" dll_name="OWNER_SYSTEM">
                                    </select>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td class="table-label text-nowrap text-right">区内企业编码<span class="notempty">*</span></td>
                            <td>
                                <div class="form-group">
                                    <input class="input-sm form-control" id="areainEtpsno" name="areainEtpsno" isValidate="true" notempty readonly>
                                </div>
                            </td>
                            <td class="table-label text-nowrap text-right">区内企业社会信用代码</td>
                            <td>
                                <div class="form-group">
                                    <input class="input-sm form-control" id="areainEtpsSccd" name="areainEtpsSccd" readonly>
                                </div>
                            </td>
                            <td class="table-label text-nowrap text-right">区内企业名称<span class="notempty">*</span></td>
                            <td colspan="3">
                                <div class="form-group">
                                    <input class="input-sm form-control" id="areainEtpsNm" name="areainEtpsNm" isValidate="true" notempty readonly>
                                </div>
                            </td>
                        </tr>

                        <tr>
                        <td class="table-label text-nowrap text-right">区外企业编码</td>
                        <td>
                            <div class="form-group">
                                <input type="text" class="input-sm form-control" id="areaoutEtpsno" name="areaoutEtpsno" maxlength="10">
                            </div>
                        </td>
                        <td class="table-label text-nowrap text-right">区外企业社会信用代码</td>
                        <td>
                            <div class="form-group">
                                <input type="text" class="input-sm form-control" id="areaoutEtpsSccd" name="areaoutEtpsSccd" maxlength="512">
                            </div>
                        </td>
                        <td class="table-label text-nowrap text-right">区外企业名称</td>
                        <td colspan="3">
                            <div class="form-group">
                                <input class="input-sm form-control" type="text" id="areaoutEtpsNm" name="areaoutEtpsNm" maxlength="512">
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td class="table-label text-nowrap text-right">区外账册编号</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="areaoutOriactNo" name="areaoutOriactNo" maxlength="64">
                            </div>
                        </td>
                        <td class="table-label text-nowrap text-right">保证金征收单编号</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="dpstLevyBlNo" name="dpstLevyBlNo" maxlength="64">
                            </div>
                        </td>
                        <td class="table-label text-nowrap text-right">有效期<span class="notempty">*</span></td>
                        <td>
                            <div class="form-group">
                                <input class="form-control datepicker" data-date-format="yyyy-mm-dd" id="validTime" name="validTime"
                                       isValidate="true" notempty>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td class="table-label text-nowrap text-right">申报日期<span class="notempty">*</span></td>
                        <td>
                            <div class="form-group">
                                <input type="text" class="form-control datepicker" data-date-format="yyyy-mm-dd" isValidate="true" notempty
                                       id="dclTime" name="dclTime" style="background-color:#eee;border: 1px solid #e5e6e7;" isFormat="true" disabled>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">申请人<span class="notempty">*</span></td>
                        <td colspan="3">
                            <div class="form-group">
                                <input type="text" class="input-sm form-control" id="dclEr" name="dclEr" maxlength="256" isValidate="true" notempty>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td class="table-label text-nowrap text-right">备注</td>
                        <td colspan="5">
                            <div class="form-group">
                                <textarea class="form-control" rows="1" id="rmk" name="rmk" maxlength="512"></textarea>
                            </div>
                        </td>
                    </tr>

                    <tr height="20px"></tr>

                    <tr>
                        <td class="table-label text-nowrap text-right">主管海关</td>
                        <td>
                            <div class="form-group">
                                <select class="form-control select2 form-horizontal" id="masterCuscd" style="width:100%" isValidate="true" notempty
                                        name="masterCuscd" dll_name="codCusCustomsfec" isShowEmpty="true" disabled>
                                </select>
                            </div>
                        </td>
                        <td class="table-label text-nowrap text-right">监管场所</td>
                        <td>
                            <div class="form-group">
                                <select class="form-control select2 form-horizontal" id="areaCode" style="width:100%" isValidate="true" notempty
                                        name="areaCode" dll_name="codStdAreaCode" isShowEmpty="true" disabled>
                                </select>
                            </div>
                        </td>
                        <td class="table-label text-nowrap text-right">回执状态</td>
                        <td><input class="input-sm form-control" id="retChannel" name="retChannel" readonly></td>
                    </tr>

                    <tr>
                        <td class="table-label text-nowrap text-right">申报类型</td>
                        <td>
                            <div class="form-group">
                                <select class="form-control select2 form-horizontal" id="dclTypecd" style="width:100%" isValidate="true" notempty
                                        name="dclTypecd" dll_name="DCL_TYPECD_SAS" isShowEmpty="true" disabled>
                                </select>
                            </div>
                        </td>
                        <td class="table-label text-nowrap text-right">单据状态</td>
                        <td>
                            <div class="form-group">
                                <select class="form-control select2 form-horizontal" id="chkStatus" style="width:100%" isValidate="true" notempty
                                        name="chkStatus" dll_name="CHK_STATUS" isShowEmpty="true" disabled>
                                </select>
                            </div>
                        </td>
                        <td class="table-label text-nowrap text-right">变更次数</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" type="number" id="chgTmsCnt" name="chgTmsCnt" readonly>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td class="table-label text-nowrap text-right">操作企业</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" type="text" id="inputCopName"
                                       name="inputCopName" readonly>
                            </div>
                        </td>
                        <td class="table-label text-nowrap text-right">操作人</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" type="text" id="inputerName" isValidate="true" notempty
                                       name="inputerName" readonly>
                            </div>
                        </td>
                        <td class="table-label text-nowrap text-right">操作时间</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" style="background-color:#eee;border: 1px solid #e5e6e7;"
                                       id="decTime" name="decTime" isValidate="true" notempty disabled>
                            </div>
                        </td>
                    </tr>

                    </table>
                </form>
            </div>
        </div>
        <!-- 商品信息 -->
        <div class="ibox" id="commodityBox">
            <div class="ibox-title">
                <h4 class="box-title pull-left">商品信息</h4>
                <div class="pull-right">
                    <a href="javascript:void(0)" class="collapse-link" title="收起表体"><i class="fa fa-chevron-up"></i></a>
                </div>
            </div>

            <div class="ibox-content">
                <div id="commodityToolbar" class="m-b-sm">
                    <a href="javascript:void(0)" class="btn btn-info fa fa-refresh" id="commodityRefresh">刷新</a>
                    <span class="m-r-sm"></span>
                    <a href="javascript:void(0)" class="btn btn-info fa fa-info-circle" id="commodityView">查阅</a>
                    <a href="javascript:void(0)" class="btn btn-info fa fa-plus-square" id="commodityAdd">新增</a>
                    <a href="javascript:void(0)" class="btn btn-info fa fa-edit" id="commodityEdit">修改</a>
                    <a href="javascript:void(0)" class="btn btn-info fa fa-remove" id="commodityDelete">删除</a>
                    <span class="m-r-sm"></span>
                    <%--<a href="javascript:void(0)" class="btn btn-info fa fa-copy" id="commodityCopy">当前商品复制</a>--%>
                    <a href="javascript:void(0)" class="btn btn-danger fa fa-edit" id="changeEdit" style="display: none">变更修改</a>
                    <a href="javascript:void(0)" class="btn btn-danger fa fa-remove" id="changeRemove" style="display: none">变更删除</a>
                    <table id="commodityTable"></table>
                </div>
            </div>
        </div>

        <!-- 附件信息 -->
        <div class="ibox" id="fileBox">
            <div class="ibox-title">
                <h4 class="box-title pull-left">随附单证</h4>
                <div class="pull-right">
                    <a href="#1" class="collapse-link" title="收起"><i class="fa fa-chevron-down"></i></a>
                </div>
            </div>

            <div class="ibox-content" style="display:none;">
                <div id="fileToolbar" class="m-b-sm">
                    <a href="javascript:void(0)" class="btn btn-info fa fa-refresh" id="fileRefresh">刷新</a>
                    <span class="m-r-sm"></span>
                    <a href="javascript:void(0)" class="btn btn-info fa fa-info-circle" id="fileView">查阅</a>
                    <a href="javascript:void(0)" class="btn btn-info fa fa-plus-square" id="fileAdd">新增</a>
                    <a href="javascript:void(0)" class="btn btn-info fa fa-edit" id="fileEdit">修改</a>
                    <a href="javascript:void(0)" class="btn btn-info fa fa-remove" id="fileDelete">删除</a>
                    <table id="fileTable"></table>
                </div>
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
    <script src="../../../static/sas/js/sasdclbsc_form.js"></script>
    <script src="../../../static/admin/main/js/content.js"></script>
</footer>
</body>
</html>