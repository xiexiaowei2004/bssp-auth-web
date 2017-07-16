<%@ page language="java" contentType="text/html; charset=utf-8" %>
<!DOCTYPE HTML>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <title>加工贸易账册核销-查阅</title>
    <link rel="stylesheet" href="../../../static/common/bootstrap-table-master/bootstrap-table.min.css"/>
    <link rel="stylesheet" href="../../../static/common/bootstrap-datepicker-master/css/bootstrap-datepicker3.min.css"/>
    <link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css"/>
    <link rel="stylesheet" href="../../../static/common/select2/css/select2.min.css" type="text/css">
    <link rel="stylesheet" href="../../../static/common/bootstrapvalidator-master/css/bootstrapValidator.min.css"
          type="text/css">
    <link rel="stylesheet" href="../../../static/admin/main/css/animate.css"/>
    <link rel="stylesheet" href="../../../static/common/css/style.css" />
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
                <a href="javascript:void(0)" class="btn btn-info fa fa-mail-reply" id="reback">返回</a>
            </div>

            <div class="ibox-content">

                <form id="dataForm">
                    <div style="display:none;">
                        <input type="hidden" id="uid" name="uid">
                        <input type="hidden" id="etpsPreentNo" name="etpsPreentNo">
                        <input type="hidden" id="busType" name="busType">
                    </div>
                    <table class="table table-condensed no-borders no-margins">
                        <tr>
                            <td class="table-label text-nowrap text-right no-borders">预录入统一编号<span class="notempty">*</span></td>
                            <td><input class="input-sm form-control" id="seqNo" name="seqNo" readonly></td>
                            <td class="table-label text-nowrap text-right">账册编号<span class="notempty">*</span></td>
                            <td>
                                <div class="form-group">
                                    <input class="input-sm form-control" id="emsNo" name="emsNo" isValidate="true" notempty>
                                </div>
                            </td>
                            <td class="table-label text-nowrap text-right">报核次数<span class="notempty">*</span></td>
                            <td>
                                <div class="form-group">
                                    <input class="input-sm form-control" id="chgTmsCnt" name="chgTmsCnt" isValidate="true" notempty readonly>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table-label text-nowrap text-right">经营单位代码<span class="notempty">*</span></td>
                            <td>
                                <div class="form-group">
                                    <input class="input-sm form-control" id="bizopEtpsno" name="bizopEtpsno" isValidate="true" notempty readonly>
                                </div>
                            </td>
                            <td class="table-label text-nowrap text-right">经营单位社会信用代码</td>
                            <td>
                                <input class="input-sm form-control" id="bizopEtpsSccd" name="bizopEtpsSccd" readonly>
                            </td>
                            <td class="table-label text-nowrap text-right">经营单位名称<span class="notempty">*</span></td>
                            <td>
                                <div class="form-group">
                                    <input class="input-sm form-control" id="bizopEtpsNm" name="bizopEtpsNm" readonly isValidate="true" notempty>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table-label text-nowrap text-right">加工单位代码<span class="notempty">*</span></td>
                            <td>
                                <div class="form-group">
                                    <input class="input-sm form-control" id="rcvgdEtpsno" name="rcvgdEtpsno" isValidate="true" notempty readonly>
                                </div>
                            </td>
                            <td class="table-label text-nowrap text-right">加工单位社会信用代码</td>
                            <td>
                                <input class="input-sm form-control" id="rvsngdEtpsSccd" name="rvsngdEtpsSccd" readonly>
                            </td>
                            <td class="table-label text-nowrap text-right">加工单位名称<span class="notempty">*</span></td>
                            <td>
                                <div class="form-group">
                                    <input class="input-sm form-control" id="rcvgdEtpsNm" name="rcvgdEtpsNm" isValidate="true" notempty readonly>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table-label text-nowrap text-right">申报单位代码<span class="notempty">*</span></td>
                            <td>
                                <div class="form-group">
                                    <input class="input-sm form-control" id="dclEtpsno" name="dclEtpsno" maxlength="10" isValidate="true" notempty>
                                </div>
                            </td>
                            <td class="table-label text-nowrap text-right">申报单位社会信用代码</td>
                            <td>
                                <div class="form-group">
                                    <input class="input-sm form-control" id="dclEtpsSccd" name="dclEtpsSccd" maxlength="18">
                                 </div>
                            </td>
                            <td class="table-label text-nowrap text-right">申报单位名称<span class="notempty">*</span></td>
                            <td>
                                <div class="form-group">
                                    <input class="input-sm form-control" id="dclEtpsNm" name="dclEtpsNm" isValidate="true" notempty>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table-label text-nowrap text-right">申报类型<span class="notempty">*</span></td>
                            <td>
                                <div class="form-group">
                                    <select class="form-control select2 form-horizontal" id="chgoffTypecd"  style="width: 100%"
                                            name="chgoffTypecd" dll_name="CHGOFF_TYPECD" isShowEmpty="true" isValidate="true" notempty disabled>
                                    </select>
                                </div>
                            </td>
                            <td class="table-label text-nowrap text-right">操作时间<span class="notempty">*</span></td>
                            <td>
                                <div class="form-group">
                                    <input class="form-control datepicker" data-date-format="yyyy-mm-dd" style="background-color:#eee;border: 1px solid #e5e6e7;"
                                           id="decTime" name="decTime" disabled>
                                </div>
                            </td>
                            <td class="table-label text-nowrap text-right">报核开始日期<span class="notempty">*</span></td>
                            <td>
                                <div class="form-group">
                                    <input type="text" class="form-control datepicker" data-date-format="yyyy-mm-dd" style="background-color:#eee;border: 1px solid #e5e6e7;"
                                           id="chgoffBeginTime" name="chgoffBeginTime" isValidate="true" notempty disabled>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table-label text-nowrap text-right">报核截止日期<span class="notempty">*</span></td>
                            <td>
                                <div class="form-group">
                                    <input type="text" class="form-control datepicker" data-date-format="yyyy-mm-dd" style="background-color:#eee;border: 1px solid #e5e6e7;"
                                           id="chgoffDueTime" name="chgoffDueTime" isValidate="true" notempty disabled>
                                </div>
                            </td>
                            <td class="table-label text-nowrap text-right">进口报核清单总份数</td>
                            <td>
                                <div class="form-group">
                                    <input class="input-sm form-control" type="number" id="impInvtTotalCnt"
                                           name="impInvtTotalCnt" readonly>
                                </div>
                            </td>
                            <td class="table-label text-nowrap text-right">出口报核清单总份数</td>
                            <td>
                                <div class="form-group">
                                    <input class="input-sm form-control" type="number" id="expInvtTotalCnt"
                                           name="expInvtTotalCnt" readonly>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table-label text-nowrap text-right">录入单位代码<span class="notempty">*</span></td>
                            <td>
                                <input class="input-sm form-control" id="inputCopNo" name="inputCopNo" isValidate="true" notempty readonly>
                            </td>
                            <td class="table-label text-nowrap text-right">录入单位社会信用代码</td>
                            <td><input class="input-sm form-control" id="inputEtpsSccd" name="inputEtpsSccd" readonly></td>
                            <td class="table-label text-nowrap text-right">录入单位名称<span class="notempty">*</span></td>
                            <td>
                                <div class="form-group">
                                    <input class="input-sm form-control" id="inputCopName" name="inputCopName" sValidate="true" notempty readonly>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table-label text-nowrap">申报日期<span class="notempty">*</span></td>
                            <td><input type="text" class="form-control datepicker" data-date-format="yyyy-mm-dd" style="background-color:#eee;border: 1px solid #e5e6e7;"
                                       id="chgoffDclTime" name="chgoffDclTime" disabled></td>
                            <td class="table-label text-nowrap">料件进口总金额</td>
                            <td>
                                <div class="form-group">
                                    <input class="input-sm form-control" type="number" step="0.00001" id="impMtpckTotalAmt" name="impMtpckTotalAmt" readonly>
                                </div>
                            </td>
                            <td class="table-label text-nowrap">成品出口总金额</td>
                            <td>
                                <div class="form-group">
                                    <input class="input-sm form-control" type="number" step="0.00001" id="expEndprdTotalAmt" name="expEndprdTotalAmt" readonly>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table-label text-nowrap text-right">备注</td>
                            <td colspan="5"><textarea class="form-control" rows="1" id="rmk" name="rmk"></textarea></td>
                        </tr>
                    </table>
                </form>

            </div>

        </div>


        <div class="ibox">

            <div class="ibox-title with-border collapsed-box">
                <h4 class="box-title pull-left">表体</h4>
                <div class="pull-right">
                    <a href="javascript:void(0)" class="collapse-link" title="收起表头"><i class="fa fa-chevron-up"></i></a>
                </div>

            </div>

            <div class="ibox-content">
                <ul id="tab" class="nav nav-tabs box-top-line">
                    <li class="active"><a href="#invtLtTab" data-toggle="tab">清单</a></li>
                    <li><a href="#imgTab" data-toggle="tab">料件</a></li>
                    <li><a href="#exgTab" data-toggle="tab">成品</a></li>
                </ul>
                <!-- 清单 -->
                <div class="tab-content">
                    <div  class="tab-pane fade in active m-t-sm" id="invtLtTab">
                        <div id="invtLtToolbar" class="m-t-sm">
                            <a href="javascript:void(0)" class="btn btn-info fa fa-refresh" id="invtLtRefresh">刷新</a>
                            <span class="m-r-sm"></span>
                            <a href="javascript:void(0)" class="btn btn-info fa fa-info-circle" id="invtLtView">查阅</a>
                            <%--<a href="javascript:void(0)" class="btn btn-info fa fa-plus-square" id="invtLtAdd">新增</a>--%>
                            <%--<a href="javascript:void(0)" class="btn btn-info fa fa-edit" id="invtLtEdit">修改</a>--%>
                            <%--<a href="javascript:void(0)" class="btn btn-info fa fa-remove" id="invtLtDelete">删除</a>--%>
                        </div>
                        <table id="invtLtTable"></table>
                    </div>
                    <!-- 料件 -->
                    <div  class="m-t-sm tab-pane fade" id="imgTab">
                        <div id="imgToolbar" class="m-t-sm">
                            <a href="javascript:void(0)" class="btn btn-info fa fa-refresh" id="imgRefresh">刷新</a>
                            <span class="m-r-sm"></span>
                            <a href="javascript:void(0)" class="btn btn-info fa fa-info-circle" id="imgView">查阅</a>
                            <%--<a href="javascript:void(0)" class="btn btn-info fa fa-plus-square" id="imgAdd">新增</a>--%>
                            <%--<a href="javascript:void(0)" class="btn btn-info fa fa-edit" id="imgEdit">修改</a>--%>
                            <%--<a href="javascript:void(0)" class="btn btn-info fa fa-remove" id="imgDelete">删除</a>--%>
                        </div>
                        <table id="imgTable"></table>
                    </div>
                    <!-- 成品 -->
                    <div  class="tab-pane fade m-t-sm" id="exgTab">
                        <div id="exgToolbar" class="m-t-sm">
                            <a href="javascript:void(0)" class="btn btn-info fa fa-refresh" id="exgRefresh">刷新</a>
                            <span class="m-r-sm"></span>
                            <a href="javascript:void(0)" class="btn btn-info fa fa-info-circle" id="exgView">查阅</a>
                            <%--<a href="javascript:void(0)" class="btn btn-info fa fa-plus-square" id="exgAdd">新增</a>--%>
                            <%--<a href="javascript:void(0)" class="btn btn-info fa fa-edit" id="exgEdit">修改</a>--%>
                            <%--<a href="javascript:void(0)" class="btn btn-info fa fa-remove" id="exgDelete">删除</a>--%>
                        </div>
                        <table id="exgTable"></table>
                    </div>
                </div>
            </div>
        </div>

        <div class="ibox">
                <!-- 附件 -->
                <div class="ibox-title">
                    <h4 class="box-title pull-left">附件信息列表</h4>
                    <div class="pull-right">
                        <a href="javascript:void(0)" class="collapse-link" title="收起表体"><i class="fa fa-chevron-up"></i></a>
                    </div>
                </div>

                <div class="ibox-content" id="file">
                    <div id="fileToolbar" class="m-b-sm">
                        <a href="javascript:void(0)" class="btn btn-info fa fa-refresh" id="fileRefresh">刷新</a>
                        <span class="m-r-sm"></span>
                        <a href="javascript:void(0)" class="btn btn-info fa fa-info-circle" id="fileView">查阅</a>
                        <%--<a href="javascript:void(0)" class="btn btn-info fa fa-plus-square" id="fileAdd">新增</a>--%>
                        <%--<a href="javascript:void(0)" class="btn btn-info fa fa-edit"  id="fileEdit">修改</a>--%>
                        <%--<a href="javascript:void(0)" class="btn btn-info fa fa-remove" id="fileDelete">删除</a>--%>
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
    <script src="../../../static/dcr/js/dcrchgoffbsc_form.js"></script>
    <script src="../../../static/admin/main/js/content.js"></script>

    <script>
        $(function () {
            FormUtils.setPageView();
        });
    </script>
</footer>
</body>
</html>