<%@ page language="java" contentType="text/html; charset=utf-8" %>
<!DOCTYPE HTML>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <title>企业原始单耗相关操作</title>
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
</head>
<body class="gray-bg">
<div class="container animated fadeInRight">
    <div class="ibox">
        <div class="ibox-title font-bold">  <h5>企业原始单耗</h5>
            <a href="#1" class="collapse-link pull-right" title="收起"><i class="fa fa-chevron-up"></i></a>
        </div>
        <div class="ibox-title no-margins">
            <div class="pull-left">
                <div>
                    <i class="btn btn-info fa fa-save" id="save">保存</i>
                    <i class="btn btn-info fa fa-mail-reply" id="reback">返回</i>
                </div>
            </div>
        </div>
        <div class="clearfix"></div>
        <div class="ibox-content">
            <form id="dataForm">
                <!-- 隐藏字段 -->
                <div style="display:none;">
                    <input type="hidden" id="uid" name="uid">
                </div>
                <table class="table table-condensed no-border">
                    <tr>
                        <td class="table-label text-nowrap">成品序号<span class="notempty" >*</span></td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="endprdSeqno" name="endprdSeqno"  isValidate="true" notempty >
                            </div>
                        </td>
                        <td class="table-label text-nowrap">成品料号</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="exgDdsMtno" name="exgDdsMtno"  readonly >
                            </div>
                        </td>

                        <td class="table-label text-nowrap">成品商品编码</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="exgGdecd" name="exgGdecd"  readonly >
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap">成品名称</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="exgGdsNm" name="exgGdsNm"  readonly >
                            </div>
                        </td>
                        <td class="table-label text-nowrap">成品规格型号</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="exgGdsSpcfModelDesc" name="exgGdsSpcfModelDesc"  readonly >
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap">料件序号<span class="notempty" >*</span></td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="mtpckSeqno" name="mtpckSeqno"  isValidate="true" notempty >
                            </div>
                        </td>
                        <td class="table-label text-nowrap">料件料号</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="imgDdsMtno" name="imgDdsMtno"  readonly >
                            </div>
                        </td>

                        <td class="table-label text-nowrap">料件商品编码</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="imgGdecd" name="imgGdecd"  readonly >
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap">料件名称</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="imgGdsNm" name="imgGdsNm"  readonly >
                            </div>
                        </td>
                        <td class="table-label text-nowrap">料件规格型号</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="imgGdsSpcfModelDesc" name="imgGdsSpcfModelDesc"  readonly >
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap">单耗版本号</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="ucnsVerno" name="ucnsVerno">
                            </div>
                        </td>
                        <td class="table-label text-nowrap">单耗<span class="notempty" >*</span></td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="ucnsQty" name="ucnsQty"  isValidate="true" notempty type="number" step="0.000000001">
                            </div>
                        </td>
                        <td class="table-label text-nowrap">净耗<span class="notempty" >*</span></td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="netUseupQty" name="netUseupQty"  isValidate="true" notempty type="number" step="0.000000001">
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap">有形损耗率<span class="notempty" >*</span></td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="tgblLossRate" name="tgblLossRate"  isValidate="true" notempty type="number" step="0.000000001">
                            </div>
                        </td>
                        <td class="table-label text-nowrap">无形损耗率<span class="notempty" >*</span></td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="intgbLossRate" name="intgbLossRate"  isValidate="true" notempty type="number" step="0.000000001">
                            </div>
                        </td>

                        <td class="table-label text-nowrap">单耗申报状态<span class="notempty">*</span></td>
                        <td>
                            <div class="form-group">
                                <select class="form-control" style="width:100%;" id="ucnsDclStucd" name="ucnsDclStucd" dll_name="UCNS_DCL_STUCD" default="2" fieldName="单耗申报状态" isValidate="true" notempty></select>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap">保税料件比例<span class="notempty" >*</span></td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="bondMtpckPrpr" name="bondMtpckPrpr"  isValidate="true" notempty type="number" step="0.000000001">
                            </div>
                        </td>

                        <td class="table-label text-nowrap">备注</td>
                        <td><input class="input-sm form-control" id="rmk" name="rmk"></td>
                        <td class="table-label text-nowrap">修改标记<span class="notempty" >*</span></td>
                        <td>
                            <div class="form-group">
                                <select class="form-control select2 form-horizontal" style="width: 100%" id="modfMarkcd"  name="modfMarkcd" dll_name="MODF_MARK"  default="3"  isValidate="true" notempty disabled>
                                    <option value="">--请选择--</option>
                                </select>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td class="table-label text-nowrap">是否生成备案</td>
                        <td><select class="form-control select2 form-horizontal" style="width: 100%" id="successFlag"  name="successFlag" disabled>
                        </select>
                        </td>

                        <td class="table-label text-nowrap">操作时间</td>
                        <td><input class="input-sm form-control" id="createTime" name="createTime" readonly></td>
                        <td class="table-label text-nowrap">操作员</td>
                        <td><input class="input-sm form-control" id="createBy" name="createBy" readonly></td>
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
    <script src="../../../static/common/bootstrapvalidator-master/js/bootstrapValidator.min.js"></script>
    <script src="../../../static/common/bootstrapvalidator-master/js/language/zh_CN.js"></script>
    <!-- Data picker -->
    <script src="../../../static/common/bootstrap-datepicker-master/js/bootstrap-datepicker.js"></script>
    <!-- 自定义js -->
    <script src="../../../static/admin/main/js/contabs.js"></script>
    <script src="../../../static/common/js/common.js"></script>
    <script src="../../../static/erp/js/erpPreUcnsDt_form.js"></script>
    <script src="../../../static/admin/main/js/content.js"></script>
    <script>
        $(function () {
            if (Utils.search("id") != null) {
                if (Utils.search("dbclick") == "Y") {
                    FormUtils.setPageView();
                }
            }
            if (Utils.search("optype") == "view") {
                $("#save,#report").hide();
                FormUtils.setPageView();
            }
        })
    </script>
</footer>
</body>
</html>