<%@ page language="java" contentType="text/html; charset=utf-8" %>
<!DOCTYPE HTML>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <title>出入库单-修改</title>
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

        .form-group {
            margin-bottom: 0;
        }
    </style>
</head>
<body class="gray-bg">
<header>
    <div class="container animated fadeInRight">
        <div class="ibox" id="head">
            <div class="ibox-title with-border collapsed-box">
                <div class="pull-left">
                    <h4 class="box-title pull-left">出入库单表头</h4>
                </div>
                <div class="pull-right">
                    <a href="#1" class="collapse-link" title="收起表头"><i
                            class="fa fa-chevron-up"></i></a>
                </div>
            </div>
            <div class="clearfix"></div>
            <div class="ibox-content">
                <a href="javascript:void(0);" class="btn btn-info fa fa-save hid" id="save">暂存</a>
                <a href="javascript:void(0);" class="btn btn-success fa fa-check-square-o hid" id="submit">申报</a>
                <a href="javascript:void(0);" class="btn btn-info fa fa-mail-reply" id="reback">返回</a>
            </div>
            <div class="ibox-content">

                <form id="dataForm">
                    <div style="display:none;">
                        <input type="hidden" id="uid" name="uid">
                        <input type="hidden" id="seqNo" name="seqNo">
                        <input type="hidden" id="copEntNo" name="copEntNo">
                        <input type="hidden" id="docType" name="docType">
                        <input type="hidden" id="bizType" name="bizType">
                        <input type="hidden" id="sasStockPreentNo" name="sasStockPreentNo">
                        <input type="hidden" id="chgTmsCnt" name="chgTmsCnt">
                    </div>
                    <table class="table table-condensed no-borders no-margins">
                        <tr>
                            <td class="table-label text-nowrap text-right">出入库单编号</td>
                            <td><input class="form-control" id="sasStockNo" name="sasStockNo" readonly></td>
                            <td class="table-label text-nowrap text-right">申报表编号</td>
                            <td>
                                <div class="form-group">
                                    <input class="form-control" id="sasDclNo" name="sasDclNo" maxlength="64" readonly
                                           fieldName="申报表编号" isValidate="true" notempty>
                                </div>
                            </td>
                            <td class="table-label text-nowrap text-right">企业预录入编号</td>
                            <td>
                                <div class="form-group">
                                    <input class="form-control" id="etpsPreentNo" name="etpsPreentNo" readonly
                                           fieldName="企业预录入编号" isValidate="true" notempty>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table-label text-nowrap text-right">业务类型</td>
                            <td>
                                <div class="form-group">
                                    <select class="form-control carry" id="businessTypecd" name="businessTypecd"
                                            dll_name="SAS_TYPE"
                                            style="width: 100%" disabled fieldName="业务类型" isValidate="true" notempty>
                                    </select>
                                </div>
                            </td>
                            <td class="table-label text-nowrap text-right">货物流向</td>
                            <td>
                                <div class="form-group">
                                    <select class="form-control carry" id="stockTypecd" name="stockTypecd"
                                            dll_name="DIRECTION_TYPECD"
                                            style="width: 100%" disabled fieldName="货物流向" isValidate="true" notempty>
                                    </select>
                                </div>
                            </td>
                            <td class="table-label text-nowrap text-right">所属系统</td>
                            <td>
                                <div class="form-group">
                                    <select class="form-control carry" id="ownerSystem" name="ownerSystem"
                                            dll_name="OWNER_SYSTEM"
                                            style="width: 100%" disabled fieldName="所属系统" isValidate="true" notempty>
                                    </select>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table-label text-nowrap text-right">关联核注清单编号</td>
                            <td><input class="form-control" id="rltBondInvtNo" name="rltBondInvtNo" readonly></td>
                            <td class="table-label text-nowrap text-right">关联出入库单编号</td>
                            <td><input class="form-control" id="rltSasStockNo" name="rltSasStockNo" readonly></td>
                            <td class="table-label text-nowrap text-right">核放单生成标志</td>
                            <td>
                                <div class="form-group">
                                    <select class="form-control carry" id="passportUsedTypecd" name="passportUsedTypecd"
                                            dll_name="PASSPORT_USED_TYPECD"
                                            style="width: 100%"  disabled fieldName="核放单生成标志"
                                            isValidate="true" notempty>
                                    </select>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table-label text-nowrap text-right">集报标志</td>
                            <td>
                                <div class="form-group">
                                    <select class="form-control carry" id="centralizedDclTypecd"
                                            name="centralizedDclTypecd" dll_name="CENTRALIZED_DCL_TYPECD"
                                            style="width: 100%"  disabled fieldName="集报标志" isValidate="true"
                                            notempty>
                                    </select>
                                </div>
                            </td>
                            <td class="table-label text-nowrap text-right">过卡标志</td>
                            <td>
                                <div class="form-group">
                                    <select class="form-control carry" id="passTypecd" name="passTypecd"
                                            dll_name="PASS_TYPECD"
                                            style="width: 100%"  disabled fieldName="过卡标志" isValidate="true"
                                            notempty>
                                    </select>
                                </div>
                            </td>
                            <td class="table-label text-nowrap text-right">包装种类</td>
                            <td>
                                <select class="form-control ban" id="packType" name="packType" dll_name="codCusWrap"
                                        style="width: 100%">
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td class="table-label text-nowrap text-right">毛重(KG)</td>
                            <td>
                                <div class="form-group">
                                    <input type="number" step="0.00001" class="form-control noedit" id="grossWt"
                                           name="grossWt">
                                </div>
                            </td>
                            <td class="table-label text-nowrap text-right">净重(KG)</td>
                            <td>
                                <div class="form-group">
                                    <input type="number" step="0.00001" class="form-control noedit" id="netWt"
                                           name="netWt">
                                </div>
                            </td>
                            <td class="table-label text-nowrap text-right">件数</td>
                            <td>
                                <div class="form-group">
                                    <input type="number" step="0.00001" class="form-control noedit" id="packageQty"
                                           name="packageQty">
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table-label text-nowrap text-right">申报日期</td>
                            <td>
                                <div class="form-group">
                                    <input class="form-control" id="dclTime" name="dclTime" readonly fieldName="申报日期"
                                           isValidate="true" notempty>
                                </div>
                            </td>
                            <td class="table-label text-nowrap text-right">申请人<span style="color: red">*</span></td>
                            <td colspan="3">
                                <div class="form-group">
                                    <input class="form-control noedit" id="dclEr" name="dclEr" fieldName="申请人"
                                           isValidate="true" notempty>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table-label text-nowrap text-right">备注</td>
                            <td colspan="5">
                                <div class="form-group">
                                    <input type="text" class="form-control" maxlength="250" id="rmk" name="rmk"></textarea>
                                </div>
                            </td>
                        </tr>
                        <tr style="height: 30px"></tr>
                        <tr>
                            <td class="table-label text-nowrap text-right">主管海关</td>
                            <td>
                                <div class="form-group">
                                    <select class="form-control carry" id="masterCuscd" name="masterCuscd"
                                            dll_name="codCusCustomsfec"
                                            style="width: 100%" disabled fieldName="主管海关" isValidate="true" notempty>
                                    </select>
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
                            <td><input class="input-sm form-control" id="retChannel" name="retChannel" readonly></td>
                        </tr>
                        <tr>
                            <td class="table-label text-nowrap text-right">申报类型</td>
                            <td><select class="form-control carry" id="dclTypecd" name="dclTypecd" dll_name="DCL_TYPE"
                                        style="width: 100%" disabled>
                            </select></td>
                            <td class="table-label text-nowrap text-right">单据状态</td>
                            <td><select class="form-control select2 form-horizontal" id="chkStatus" name="chkStatus"
                                        dll_name="CHK_STATUS" isShowEmpty="true" disabled style="width: 100%"></select></td>
                            <td class="table-label text-nowrap text-right">审批标志</td>
                            <td><select class="form-control carry" id="emapvMarkcd" name="emapvMarkcd"
                                        dll_name="EMAPV_MARKCD_SAS"
                                        style="width: 100%" disabled>
                            </select></td>
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


        <div class="ibox goods">

            <div class="ibox-title with-border collapsed-box">
                <h4 class="box-title pull-left" id="product">商品信息</h4>
                <div class="pull-right">
                    <a href="javascript:void(0)" class="collapse-link" title="收起表体"><i class="fa fa-chevron-up"></i></a>
                </div>
            </div>
            <div class="ibox-content goods">
                <!-- 出入库商品 -->
                <div class="tab-content">
                    <div class="tab-pane fade in active m-t-sm" id="invtLtTab">
                        <div id="toolbar" class="m-t-sm">
                            <a href="javascript:void(0)" class="btn btn-info fa fa-refresh hid" id="Refresh">刷新</a>
                            <span class="m-r-sm"></span>
                            <a href="javascript:void(0)" class="btn btn-info fa fa-info-circle" id="View">查阅</a>
                            <a href="javascript:void(0)" class="btn btn-info fa fa-plus-square hid" id="Add">新增</a>
                            <a href="javascript:void(0)" class="btn btn-info fa fa-edit hid" id="Edit">修改</a>
                            <a href="javascript:void(0)" class="btn btn-info fa fa-remove hid" id="Delete">删除</a>
                            <a href="javascript:void(0)" class="btn btn-info fa fa-remove" id="wares"
                               style="display: none">退运商品</a>
                        </div>
                        <table id="table"></table>
                    </div>
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
    <script src="../../../static/admin/main/js/content.js"></script>
    <script src="../../../static/sas/js/sasStockBsc_form.js"></script>
</footer>
</body>
</html>