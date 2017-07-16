<%@ page language="java" contentType="text/html; charset=utf-8" %>
<!DOCTYPE HTML>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <title>路由配置</title>
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
<header>
    <div class="container animated fadeInRight">

        <div class="ibox" id="head">

            <div class="ibox-title with-border collapsed-box">
                <div class="pull-left">
                    <h4 class="box-title pull-left" id="headTitle">路由配置</h4>
                </div>
                <div class="pull-right">
                    <a href="#1" class="collapse-link" title="收起表头"><i
                            class="fa fa-chevron-up"></i></a>
                </div>
            </div>

            <div class="clearfix"></div>

            <div class="ibox-content">
                <%--<a href="javascript:void(0)" class="btn btn-info fa fa-save" id="save">暂存</a>--%>
                <%--<span class="m-r-sm"> </span>--%>
                <a href="javascript:void(0)" class="btn btn-info fa fa-mail-reply" id="reback">返回</a>
            </div>

            <div class="ibox-content">
                <form id="dataForm">
                    <input type="hidden" id="uid" name="uid">
                    <table class="table table-condensed no-borders no-margins">
                        <tr>
                            <td class="table-label text-nowrap text-right no-borders">单据类型<span class="notempty">*</span></td>
                            <td>
                                <div class="form-group">
                                    <input type="text" class="input-sm form-control" id="docType" name="docType" maxlength="15" placeholder="请填写单据类型" isValidate="true" notempty>
                                </div>
                            </td>
                            <td class="table-label text-nowrap text-right">单据名称<span class="notempty">*</span></td>
                            <td>
                                <div class="form-group">
                                    <input type="text" class="input-sm form-control" id="docName" name="docName" maxlength="100" placeholder="请填写单据名称" isValidate="true" notempty>
                                </div>
                            </td>
                            <td class="table-label text-nowrap text-right">监管场所</td>
                            <td>
                                <div class="form-group">
                                    <select class="form-control select2 form-horizontal" id="areaCode"  style="width: 100%"
                                            name="areaCode" dll_name="codStdAreaCode" isShowEmpty="true">
                                    </select>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table-label text-nowrap text-right">业务类型<span class="notempty">*</span></td>
                            <td>
                                <div class="form-group">
                                    <input class="input-sm form-control" id="bizType" name="bizType" maxlength="15" placeholder="请填写业务类型" isValidate="true" notempty>
                                </div>
                            </td>
                            <td class="table-label text-nowrap text-right">业务名称<span class="notempty">*</span></td>
                            <td>
                                <div class="form-group">
                                    <input class="input-sm form-control" id="bizName" name="bizName" maxlength="100" placeholder="请填写业务名称" isValidate="true" notempty>
                                </div>
                            </td>
                            <td class="table-label text-nowrap text-right">认证码</td>
                            <td>
                                <div class="form-group">
                                    <input class="input-sm form-control" id="toKen" name="toKen" maxlength="128" placeholder="请填写认证码">
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table-label text-nowrap text-right">报文头</td>
                            <td>
                                <div class="form-group">
                                    <input class="input-sm form-control" id="proname" name="proname" maxlength="15" placeholder="请填写报文头">
                                </div>
                            </td>
                            <td class="table-label text-nowrap text-right">路由标识</td>
                            <td>
                                <div class="form-group">
                                    <input class="input-sm form-control" id="routeType" name="routeType" maxlength="18" placeholder="请填写路由标识">
                                </div>
                            </td>
                            <td class="table-label text-nowrap text-right">启用标识<span class="notempty">*</span></td>
                            <td>
                                <div class="form-group">
                                    <select class="form-control select2 form-horizontal" id="status" style="width: 100%"
                                            name="status" isValidate="true" notempty dll_name="IS_VALIDATE" isShowEmpty="true">
                                    </select>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table-label text-nowrap text-right">传输方式<span class="notempty">*</span></td>
                            <td>
                                <div class="form-group">
                                    <input class="input-sm form-control" id="transMode" name="transMode" placeholder="请填写传输方式" maxlength="20" isValidate="true" notempty>
                                </div>
                            </td>
                            <td class="table-label text-nowrap text-right">发送方编号</td>
                            <td>
                                <div class="form-group">
                                    <input class="input-sm form-control" id="senderId" name="senderId" maxlength="16"  placeholder="请填写发送方编号">
                                </div>
                            </td>
                            <td class="table-label text-nowrap text-right">接收方编号</td>
                            <td>
                                <div class="form-group">
                                    <input class="input-sm form-control" id="receiverId" name="receiverId" placeholder="请填写接收方编号" maxlength="16">
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table-label text-nowrap text-right">传输类型</td>
                            <td>
                                <div class="form-group">
                                    <select class="form-control select2 form-horizontal" id="passageway" style="width: 100%"
                                            name="passageway" isValidate="true" notempty dll_name="PASSAGEWAY" isShowEmpty="true">
                                    </select>
                                </div>
                            </td>
                            <td class="table-label text-nowrap text-right">发送url<span class="notempty">*</span></td>
                            <td>
                                <div class="form-group">
                                    <input class="input-sm form-control" id="sendUrl" name="sendUrl" isValidate="true" maxlength="255" notempty placeholder="请填写发送url">
                                </div>
                            </td>
                            <td class="table-label text-nowrap text-right">接收url<span class="notempty">*</span></td>
                            <td>
                                <div class="form-group">
                                    <input class="input-sm form-control" id="reclUrl" name="reclUrl" isValidate="true" maxlength="255" notempty placeholder="请填写接收url">
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table-label text-nowrap text-right">备注</td>
                            <td colspan="5">
                                <div class="form-group">
                                    <textarea class="form-control" rows="1" maxlength="255" id="remarks" name="remarks"></textarea>
                                </div>
                            </td>
                        </tr>
                    </table>
                </form>
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
    <script src="../../../static/common/bootstrapvalidator-master/js/bootstrapValidator.js"></script>
    <script src="../../../static/common/bootstrapvalidator-master/js/language/zh_CN.js"></script>
    <!-- Data picker -->
    <script src="../../../static/common/bootstrap-datepicker-master/js/bootstrap-datepicker.js"></script>
    <!-- 自定义js -->
    <script src="../../../static/admin/main/js/contabs.js"></script>
    <script src="../../../static/common/js/common.js"></script>
    <script src="../../../static/edi/js/ediRoutingInfo.js"></script>
    <script src="../../../static/admin/main/js/content.js"></script>
</footer>
<script>
    $(function () {
        FormUtils.setPageView();
    });
</script>
</body>
</html>