<%@ page language="java" contentType="text/html; charset=utf-8" %>
<!DOCTYPE HTML>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <title>企业原始料件相关操作</title>
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
        <div class="ibox-title font-bold">  <h5>企业原始料件</h5>
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
                        <td class="table-label text-nowrap">料件序号<span class="notempty" >*</span></td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="gdsSeqno" name="gdsSeqno"  isValidate="true" notempty readonly>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">料件料号<span class="notempty" >*</span></td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="gdsMtno" name="gdsMtno"  isValidate="true" notempty >
                            </div>
                        </td>
                        <td class="table-label text-nowrap">主料标志<span class="notempty" >*</span></td>
                        <td>
                            <div class="form-group">
                                <select class="form-control select2 form-horizontal" style="width: 100%" id="adjmtrMarkcd"  name="adjmtrMarkcd" dll_name="ADJMTR_MARK"  isValidate="true" notempty>
                                <option value="">--请选择--</option>
                                </select>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap">商品编码<span class="notempty" >*</span></td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="gdecd" name="gdecd"  isValidate="true" notempty >
                            </div>
                        </td>
                        <td class="table-label text-nowrap">商品名称<span class="notempty" >*</span></td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="gdsNm" name="gdsNm"  isValidate="true" notempty >
                            </div>
                        </td>
                        <td class="table-label text-nowrap">规格型号</td>
                        <td><input class="input-sm form-control" id="gdsSpcfModelDesc" name="gdsSpcfModelDesc" ></td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap">英文商品名称</td>
                        <td><input class="input-sm form-control" id="engGdsNm" name="engGdsNm" ></td>
                        <td class="table-label text-nowrap">英文规格型号</td>
                        <td><input class="input-sm form-control" id="engGdsSpcfModelDesc" name="engGdsSpcfModelDesc"></td>
                        <td class="table-label text-nowrap">企业单位</td>
                        <td><input class="input-sm form-control" id="entUnitcd" name="entUnitcd"></td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap">计量单位<span class="notempty" >*</span></td>
                        <td>
                            <div class="form-group">
                                <select class="form-control select2 form-horizontal" style="width: 100%" id="dclUnitcd"  name="dclUnitcd" dll_name="codCusUnit"  isValidate="true" notempty>
                                    <option value="">--请选择--</option>
                                </select>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">法定单位<span class="notempty" >*</span></td>
                        <td>
                            <div class="form-group">
                                <select class="form-control select2 form-horizontal" style="width: 100%" id="lawfUnitcd"  name="lawfUnitcd" dll_name="codCusUnit"  isValidate="true" notempty>
                                    <option value="">--请选择--</option>
                                </select>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">第二单位</td>
                        <td><select class="form-control select2 form-horizontal" style="width: 100%" id="secdLawfUnitcd"  name="secdLawfUnitcd" dll_name="codCusUnit" >
                            <option value="">--请选择--</option>
                        </select>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap">产终地</td>
                        <td><select class="form-control select2 form-horizontal" style="width: 100%" id="natcd"  name="natcd" dll_name="codCusCountry" >
                            <option value="">--请选择--</option>
                        </select>
                        </td>
                        <td class="table-label text-nowrap">申报单价</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="dclUprcAmt" name="dclUprcAmt" type="number" step="0.00001">
                            </div>
                        </td>
                        <td class="table-label text-nowrap">币制</td>
                        <td><select class="form-control select2 form-horizontal" style="width: 100%" id="dclCurrcd"  name="dclCurrcd" dll_name="codCusCurr">
                            <option value="">--请选择--</option>
                        </select>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap">申报单价人民币</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="dclUprcAmtRmb" name="dclUprcAmtRmb" type="number" step="0.00001">
                            </div>
                        </td>
                        <td class="table-label text-nowrap">征免方式</td>
                        <td><select class="form-control select2 form-horizontal" style="width: 100%" id="lvyrlfModecd"  name="dclCurrcd" dll_name="codCusLevymode">
                            <option value="">--请选择--</option>
                        </select>
                        </td>
                        <td class="table-label text-nowrap">是否保税<span style="color:red;">*</span></td>
                        <td>
                            <div class="form-group">
                                <select class="form-control select2 form-horizontal" style="width: 100%" id="bondedFlag"  name="bondedFlag" isValidate="true" notempty>
                                    <option value="">--请选择--</option>
                                </select>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap">备注</td>
                        <td colspan="3"><input class="input-sm form-control" id="rmk" name="rmk"></td>
                        <td class="table-label text-nowrap">修改标记<span class="notempty" >*</span></td>
                        <td>
                            <div class="form-group">
                                <select class="form-control select2 form-horizontal" style="width: 100%" id="modfMarkcd"  name="modfMarkcd" dll_name="MODF_MARK" default="3"  isValidate="true" notempty disabled>
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
    <script src="../../../static/erp/js/erpPreDtImg_form.js"></script>
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