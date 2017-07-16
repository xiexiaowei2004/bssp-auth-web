<%@ page language="java" contentType="text/html; charset=utf-8" %>
<!DOCTYPE HTML>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <title>加工贸易账册核销清单</title>
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
<body class="hold-transition skin-blue sidebar-mini">
<header>
    <div class="box box-solid div-pade div-top-pad">
        <div class="pull-left">
            <span class="m-r-sm"> </span>
            <a href="javascript:void(0);" class="btn btn-info fa fa-save" id="save">暂存</a>
            <a href="javascript:void(0);" class="btn btn-info fa fa-mail-reply" id="reback">返回</a>
        </div>
        <div class="clearfix"></div>
    </div>
    <div class="box box-primary div-margin">
            <div class="box-body no-margin" id="head">
                <div class="ibox-content" style="padding-bottom: 0">
                <form id="dataForm">
                    <!-- 隐藏字段 -->
                    <div style="display:none;">
                        <input type="hidden" id="uid" name="uid">
                        <input type="hidden" id="seqNo" name="seqNo">
                        <input type="hidden" id="emsNo" name="emsNo">
                        <input type="hidden" id="chgTmsCnt" name="chgTmsCnt">
                    </div>
                     <table class="table table-condensed no-borders">
                         <tr>
                             <td class="table-label text-nowrap" style="width:100px;">序号</td>
                             <td>
                                 <div class="form-group">
                                    <input class="form-control" type="number" id="lNo" name="lNo" readonly>
                                 </div>
                             </td>
                             <td class="table-label text-nowrap">报核清单编号<span class="notempty">*</span></td>
                             <td>
                                 <div class="form-group">
                                    <input class="form-control" id="bondInvtNo" name="bondInvtNo" isValidate="true" notempty>
                                 </div>
                             </td>
                         </tr>
                         <tr>
                             <td class="table-label text-nowrap">进出口标志<span class="notempty">*</span></td>
                             <td>
                                 <div class="form-group">
                                     <select class="form-control select2 form-horizontal" style="width: 100%"  id="ieFlag"
                                             name="ieFlag" dll_name="IMPEXP_MARKCD" isShowEmpty="true" isValidate="true" notempty disabled>
                                     </select>
                                 </div>
                             </td>
                             <td class="table-label text-nowrap">申报类型<span class="notempty">*</span></td>
                             <td>
                                 <div class="form-group">
                                     <select class="form-control select2 form-horizontal" style="width: 100%" id="dclTypecd"
                                             name="dclTypecd" dll_name="CHGOFF_TYPECD" isShowEmpty="true" isValidate="true" notempty disabled>
                                     </select>
                                 </div>
                             </td>
                         </tr>
                         <tr>
                             <td class="table-label text-nowrap">修改标志<span class="notempty">*</span></td>
                             <td>
                                 <div class="form-group">
                                     <select class="form-control select2 form-horizontal" style="width: 100%"  id="modfMarkcd"
                                             isShowEmpty="true"  name="modfMarkcd" dll_name="MODF_MARK" disabled isValidate="true" notempty>
                                     </select>
                                 </div>
                             </td>
                             <td class="table-label text-nowrap"></td>
                             <td></td>
                         </tr>
                         <tr>
                             <td class="table-label text-nowrap">备注</td>
                             <td colspan="3"><textarea class="form-control" rows="1" id="rmk" name="rmk"></textarea></td>
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
    <script src="../../../static/common/bootstrapvalidator-master/js/bootstrapValidator.min.js"></script>
    <script src="../../../static/common/bootstrapvalidator-master/js/language/zh_CN.js"></script>
    <!-- Data picker -->
    <script src="../../../static/common/bootstrap-datepicker-master/js/bootstrap-datepicker.js"></script>
    <!-- 自定义js -->
    <script src="../../../static/admin/main/js/contabs.js"></script>
    <script src="../../../static/common/js/common.js"></script>
    <script src="../../../static/dcr/js/dcrchgoffinvtlt_form.js"></script>
</footer>
</body>
</html>