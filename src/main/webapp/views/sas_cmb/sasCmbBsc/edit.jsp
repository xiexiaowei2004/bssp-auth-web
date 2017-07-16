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
            <a href="#1" class="btn btn-success fa fa-check-square-o bscBtn" id="declare">申报</a>
            <span class="m-r-sm"> </span>
            <a href="#1" class="btn btn-info fa fa-mail-reply" id="reback">返回</a>
        </div>
        <div class="clearfix"></div>
        <div class="ibox-content">
            <form id="dataForm">
                <!-- 隐藏字段 -->
                <input type="hidden" id="uid" name="uid">
                <table class="table table-condensed noborder">
                    <tr>
                        <td class="table-label text-nowrap text-right">耗料单编号<span style="color: red" class="notempty">*</span></td>
                        <td><input class="form-control" id="cmbNo" name="cmbNo" readonly></td>
                        <td class="table-label text-nowrap text-right">变更次数<span style="color: red" class="notempty">*</span></td>
                        <td><input class="form-control" id="chgTmsCnt" name="chgTmsCnt" readonly></td>
                        <td class="table-label text-nowrap text-right">耗料单预录入编号<span style="color: red" class="notempty">*</span></td>
                        <td><input class="form-control" id="sasCmbPreentNo" name="sasCmbPreentNo" readonly></td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap text-right">申报类型<span style="color: red" class="notempty">*</span></td>
                        <td>
                            <select class="form-control select2-width" id="dclTypecd" name="dclTypecd" dll_name="DCL_TYPECD_STOCK" isValidate="true" style="width:100%;" notempty disabled>
                                <option value="">-请选择-</option>
                            </select>
                        </td>
                        <td class="table-label text-nowrap text-right">耗料单类型<span style="color: red" class="notempty">*</span></td>
                        <td>
                            <select class="form-control select2-width" style="width:100%" id="cmTypecd" name="cmTypecd" dll_name="CM_TYPECD" isValidate="true" notempty>
                                <option value="">-请选择-</option>
                            </select>
                        </td>
                        <td class="table-label text-nowrap text-right">账册编号<span style="color: red" class="notempty">*</span></td>
                        <td><input class="form-control" id="emsNo" name="emsNo" readonly></td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap text-right">主管海关<span style="color: red" class="notempty">*</span></td>
                        <td>
                            <select class="form-control select2-width" style="width:100%" id="masterCuscd" name="masterCuscd" dll_name="codCusCustomsfec" isValidate="true" notempty>
                                <option value="">-请选择-</option>
                            </select>
                        </td>
                        <td class="table-label text-nowrap text-right">耗料单开始时间<span style="color: red" class="notempty">*</span></td>
                        <td>
                            <input class="form-control datepicker" data-date-format="yyyy-mm-dd" id="cmBeginTime" name="cmBeginTime" isValidate="true" notempty>
                        </td>
                        <td class="table-label text-nowrap text-right">耗料单截止时间<span style="color: red" class="notempty">*</span></td>
                        <td>
                            <input class="form-control datepicker" data-date-format="yyyy-mm-dd" id="cmEndTime" name="cmEndTime" isValidate="true" notempty>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap text-right">经营企业编号<span style="color: red" class="notempty">*</span></td>
                        <td>
                            <input class="form-control" id="bizopEtpsno" name="bizopEtpsno">
                        </td>
                        <td class="table-label text-nowrap text-right">经营企业名称<span style="color: red" class="notempty">*</span></td>
                        <td>
                            <input class="form-control" id="bizopEtpsNm" name="bizopEtpsNm">
                        </td>
                        <td class="table-label text-nowrap text-right">经营企业社会信用代码</td>
                        <td>
                            <input class="form-control" id="bizopEtpsSccd" name="bizopEtpsSccd">
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap text-right">收货企业编号<span style="color: red" class="notempty">*</span></td>
                        <td>
                            <input class="form-control" id="rcvgdEtpsno" name="rcvgdEtpsno">
                        </td>
                        <td class="table-label text-nowrap text-right">收货企业名称<span style="color: red" class="notempty">*</span></td>
                        <td>
                            <input class="form-control" id="rcvgdEtpsNm" name="rcvgdEtpsNm">
                        </td>
                        <td class="table-label text-nowrap text-right">收发货企业社会信用代码</td>
                        <td>
                            <input class="form-control" id="rvsngdEtpsSccd" name="rvsngdEtpsSccd">
                        </td>
                    </tr>
                    <tr>
                        <%--<td class="table-label text-nowrap text-right">状态</td>
                        <td>
                            <select class="form-control select2-width" style="width:100%" id="stucd" name="stucd" dll_name="STUCD"  disabled>
                                <option value="">-请选择-</option>
                            </select>
                        </td>--%>
                        <td class="table-label text-nowrap text-right">单据编号</td>
                            <td>
                                <input class="form-control" id="seqNo" name="seqNo" >
                            </td>
                        <td class="table-label text-nowrap text-right">监管场所</td>
                        <td>
                            <select class="form-control select2-width" style="width:100%" id="areaCode" name="areaCode" dll_name="codStdAreaCode" isValidate="true" notempty>
                                <option value="">-请选择-</option>
                            </select>
                        </td>
                        <td class="table-label text-nowrap text-right">录入日期</td>
                        <td>
                            <input class="form-control datepicker" data-date-format="yyyy-mm-dd" id="decTime" name="decTime" >
                        </td>
                       <%-- <td class="table-label text-nowrap text-right">业务类型</td>
                        <td>
                            <input class="form-control" id="bizType" name="bizType" >
                        </td>--%>
                    </tr>
                    <tr>
                        <%--<td class="table-label text-nowrap text-right">单据状态</td>
                        <td>
                            <select class="form-control select2-width" style="width:100%" id="chkStatus" name="chkStatus" dll_name="CHK_STATUS" isValidate="true" style="width:100%;" notempty disabled>
                                <option value="">-请选择-</option>
                            </select>
                        </td>--%>
                        <%--<td class="table-label text-nowrap text-right">申报(录入)企业社会信用代码</td>
                        <td>
                            <input class="form-control" id="inputEtpsSccd" name="inputEtpsSccd" >
                        </td>
                        <td class="table-label text-nowrap text-right">申报(录入)企业名称</td>
                        <td>
                            <input class="form-control" id="inputCopName" name="inputCopName" >
                        </td>--%>
                    </tr>
                    <tr>
                        <%--<td class="table-label text-nowrap text-right">单据类别</td>
                        <td>
                            <input class="form-control" id="docType" name="docType" >
                        </td>--%>
                       <%-- <td class="table-label text-nowrap text-right">回执状态</td>
                        <td>
                            <input class="form-control" id="retChannel" name="retChannel" >
                        </td>--%>

                    </tr>
                    <tr>

                        <%--<td class="table-label text-nowrap text-right">申报(录入)人代码</td>
                        <td>
                            <input class="form-control" id="inputerCode" name="inputerCode" >
                        </td>--%>
                        <%--<td class="table-label text-nowrap text-right">申报(录入)人名称</td>
                        <td>
                            <input class="form-control" id="inputerName" name="inputerName" >
                        </td>--%>
                    </tr>
                    <tr>
                        <%--<td class="table-label text-nowrap text-right">申报(录入)企业代码</td>
                        <td>
                            <input class="form-control" id="inputCopNo" name="inputCopNo" >
                        </td>--%>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap text-right">备注：</td>
                        <td colspan="5"><textarea class="form-control" rows="2" id="rmk" name="rmk"></textarea></td>
                    </tr>
                </table>

               <%-- <table class="table table-condensed no-borders no-margins">
                    <tr>
                        <td class="table-label text-nowrap text-right" style="width:160px;">耗料单编号<span style="color: red" class="notempty">*</span></td>
                        <td>
                            <div class="form-group">
                                <input class="form-control" id="cmbNo" name="cmbNo"  isValidate="true" notempty>
                            </div>
                        </td>
                        <td class="table-label text-nowrap text-right" style="width:160px;">变更次数<span style="color: red" class="notempty">*</span></td>
                        <td>
                            <div class="form-group">
                                <input class="form-control" id="chgTmsCnt" name="chgTmsCnt"  isValidate="true" notempty>
                            </div>
                        </td>
                        <td class="table-label text-nowrap text-right" style="width:160px;">耗料单预录入编号<span style="color: red" class="notempty">*</span></td>
                        <td>
                            <div class="form-group">
                                <input class="form-control" id="sasCmbPreentNo" name="sasCmbPreentNo"  isValidate="true" notempty>
                            </div>
                        </td>
                    </tr>--%>
                    <%--<tr>
                        <td class="table-label text-nowrap text-right">申报类型<span style="color: red" class="notempty">*</span></td>
                        <td>
                            <div class="form-group">
                                <select class="form-control select2-width" id="dclTypecd" name="dclTypecd" dll_name="DCL_TYPECD_STOCK" isValidate="true" style="width:100%;" notempty disabled>
                                    <option value="">-请选择-</option>
                                </select>
                            </div>
                        </td> 
                        <td class="table-label text-nowrap text-right">耗料单类型<span style="color: red" class="notempty">*</span></td>
                        <td>
                        <div class="form-group">
                                <select class="form-control select2-width" id="cmTypecd" name="cmTypecd" dll_name="CM_TYPECD" isValidate="true" notempty>
                                    <option value="">-请选择-</option>
                                </select>
                            </div></td>
                        <td class="table-label text-nowrap text-right">账册编号<span style="color: red" class="notempty">*</span></td>
                        <td>
                            <div class="form-group">
                                <input class="form-control" id="emsNo" name="emsNo" isValidate="true" notempty>
                            </div>
                        </td>
                    </tr>
                    --%>
                <%--
                    <tr>
                        <td class="table-label text-nowrap text-right">主管海关<span style="color: red" class="notempty">*</span></td>
                        <td>
                            <div class="form-group">
                                <select class="form-control select2-width" id="masterCuscd" name="masterCuscd" dll_name="codCusCustomsfec" isValidate="true" notempty>
                                    <option value="">-请选择-</option>
                                </select>
                            </div>
                        </td>
                        <td class="table-label text-nowrap text-right">耗料单开始时间<span style="color: red" class="notempty">*</span></td>
                        <td>
                        <div class="form-group">
							<input class="form-control datepicker" data-date-format="yyyy-mm-dd" id="cmBeginTime" name="cmBeginTime" isValidate="true" notempty>
							</div>
							</td>
                        <td class="table-label text-nowrap text-right">耗料单截止时间<span style="color: red" class="notempty">*</span></td>
                        <td>
                            <div class="form-group">
                              <input class="form-control datepicker" data-date-format="yyyy-mm-dd" id="cmEndTime" name="cmEndTime" isValidate="true" notempty>
							</div>
                        </td>
                    </tr>--%>
                <%-- <tr>
                     <td class="table-label text-nowrap text-right">经营企业社会信用代码</td>
                     <td>
                         <div class="form-group">
                             <input class="form-control" id="bizopEtpsSccd" name="bizopEtpsSccd">
                         </div>
                     </td>
                     <td class="table-label text-nowrap text-right">经营企业编号<span style="color: red" class="notempty">*</span></td>
                     <td>
                         <div class="form-group">
                         <input class="form-control" id="bizopEtpsno" name="bizopEtpsno" isValidate="true" notempty>
                         </div>
                     </td>
                     <td class="table-label text-nowrap text-right">经营企业名称<span style="color: red" class="notempty">*</span></td>
                     <td>
                         <div class="form-group">
                             <input class="form-control" id="bizopEtpsNm" name="bizopEtpsNm" isValidate="true" notempty>
                         </div>
                     </td>
                 </tr>--%>
                <%--   <tr>
                       <td class="table-label text-nowrap text-right">收发货企业社会信用代码</td>
                       <td>
                        <input class="form-control" id="rvsngdEtpsSccd" name="rvsngdEtpsSccd" >
                       </td>
                       <td class="table-label text-nowrap text-right">收货企业编号<span style="color: red" class="notempty">*</span></td>
                       <td>
                           <div class="form-group">
                           <input class="form-control" id="rcvgdEtpsno" name="rcvgdEtpsno" isValidate="true" notempty>
                           </div>
                       </td>
                       <td class="table-label text-nowrap text-right">收货企业名称<span style="color: red" class="notempty">*</span></td>
                       <td><div class="form-group">
                           <input type="tel" class="form-control" id="rcvgdEtpsNm" name="rcvgdEtpsNm" isValidate="true" notempty>
                       </div>
                       </td>
                   </tr>--%>
                <%--    <tr>

                        <td class="table-label text-nowrap text-right">备案审批时间</td>
                        <td>
                            <div class="form-group">
                                <input class="form-control datepicker" data-date-format="yyyy-mm-dd" id="putrecApprTime" name="putrecApprTime" >
                            </div>
                        </td>
                        <td class="table-label text-nowrap text-right">变更审批时间</td>
                        <td><div class="form-group">
                                <input class="form-control datepicker" data-date-format="yyyy-mm-dd" id="chgApprTime" name="chgApprTime">
                            </div>
                            </td>
                        <td class="table-label text-nowrap text-right">申报时间<span style="color: red" class="notempty">*</span></td>
                        <td>
                            <div class="form-group">
                                <input class="form-control datepicker" data-date-format="yyyy-mm-dd" id="dclTime" name="dclTime" isValidate="true" notempty>
                            </div>
                        </td>
                    </tr>--%>
                <%--    <tr>

                        <td class="table-label text-nowrap text-right">申报来源<span style="color: red" class="notempty">*</span></td>
                        <td>
                              <div class="form-group">
                                <select class="form-control select2-width" id="dclMarkcd" name="dclMarkcd" dll_name="DCL_SOURCE_MARKCD" isValidate="true" style="width:100%;" notempty>
                                    <option value="">-请选择-</option>
                                </select>
                            </div>
                        </td>
                        <td class="table-label text-nowrap text-right">状态</td>
                        <td>
                         <div class="form-group">
                                <select class="form-control select2-width" id="stucd" name="stucd" dll_name="STUCD"  disabled>
                                    <option value="">-请选择-</option>
                                </select>
                            </div>
                        </td>
                        <td class="table-label text-nowrap text-right">监管场所</td>
                        <td>
                            <div class="form-group">
                                <select class="form-control select2-width" id="areaCode" name="areaCode" dll_name="codStdAreaCode" isValidate="true" notempty>
                                    <option value="">-请选择-</option>
                                </select>
                            </div></td>
                    </tr>--%>
                <%--   <tr>
                      <td class="table-label text-nowrap text-right">业务类型</td>
                      <td><input class="form-control" id="bizType" name="bizType" ></td>
                      <td class="table-label text-nowrap text-right" style="width:160px;">申报（录入）企业社会信用代码</td>
                      <td><input class="form-control" id="inputEtpsSccd" name="inputEtpsSccd" ></td>
                      <td class="table-label text-nowrap text-right">申报（录入）企业名称</td>
                      <td><input class="form-control" id="inputCopName" name="inputCopName" ></td>
                  </tr>--%>
                <%--  <tr>
                      <td class="table-label text-nowrap text-right">单据状态</td>
                      <td>
                       <div class="form-group">
                              <select class="form-control select2-width" id="chkStatus" name="chkStatus" dll_name="CHK_STATUS" isValidate="true" style="width:100%;" notempty disabled>
                                  <option value="">-请选择-</option>
                              </select>
                          </div></td>
                      <td class="table-label text-nowrap text-right">单据类别</td>
                      <td><input class="form-control" id="docType" name="docType" ></td>
                      <td class="table-label text-nowrap text-right">回执状态</td>
                      <td><input class="form-control" id="retChannel" name="retChannel" ></td>
                  </tr>
                  <tr>
                      <td class="table-label text-nowrap text-right">录入日期</td>
                      <td>
                          <div class="form-group">
                              <input class="form-control datepicker" data-date-format="yyyy-mm-dd" id="decTime" name="decTime" >
                          </div>
                      </td>
                      <td class="table-label text-nowrap text-right">单据编号</td>
                      <td><input class="form-control" id="seqNo" name="seqNo" ></td>
                      <td class="table-label text-nowrap text-right">审批时间</td>
                      <td><div class="form-group">
                              <input class="form-control datepicker" data-date-format="yyyy-mm-dd" id="chkTime" name="chkTime" >
                          </div></td>
                  </tr>
                  <tr>
                      <td class="table-label text-nowrap text-right" style="width:160px;">申报（录入）人代码</td>
                      <td><input class="form-control" id="inputerCode" name="inputerCode" ></td>
                      <td class="table-label text-nowrap text-right">申报（录入）人名称</td>
                     <td><input class="form-control" id="inputerName" name="inputerName" ></td>
                       <td class="table-label text-nowrap text-right" style="width:160px;">申报（录入）企业代码</td>
                      <td><input class="form-control" id="inputCopNo" name="inputCopNo" ></td>
                  </tr>
                   <tr>
                       <td class="table-label text-nowrap text-right">备注：</td>
                       <td colspan="5"><textarea class="form-control" rows="2" id="rmk" name="rmk"></textarea></td>

                  </tr>

              </table>
              --%>
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
                <li class="active"><a href="#invtTab" data-toggle="tab">清单</a></li>
                <li><a href="#imgTab" data-toggle="tab">料件</a></li>
            </ul>
            <div class="tab-content">
                <!-- 清单 -->
                <div class="tab-pane fade m-t-sm active in" id="invtTab">
                    <div id="invtToolbar">
                        <a href="#1" class="btn btn-info fa fa-info-circle" id="invtView">查阅</a>
                        <a href="#1" class="btn btn-info fa fa-plus-square bscBtn" id="invtAdd">新增</a>
                        <a href="#1" class="btn btn-info fa fa-edit bscBtn" id="invtModify">修改</a>
                        <a href="#1" class="btn btn-info fa fa-remove bscBtn" id="invtDelete">删除</a>
                       </div> 
                    <table id="invtTable"></table>
                </div>                         
                <!-- 料件-->
                <div class="tab-pane fade m-t-sm" id="imgTab">
                    <div id="imgToolbar">
                        <a href="#1" class="btn btn-info fa fa-info-circle" id="imgView">查阅</a>
                        <a href="#1" class="btn btn-info fa fa-plus-square bscBtn" id="imgAdd">新增</a>
                        <a href="#1" class="btn btn-info fa fa-edit bscBtn" id="imgModify">修改</a>
                        <a href="#1" class="btn btn-info fa fa-remove bscBtn" id="imgDelete">删除</a>
                    </div>
                    <table id="imgTable"></table>
                </div>
            </div>
        </div>
    </div>
    <div class="ibox" id="rbgBox">
        <!-- 边角料 -->
        <div class="ibox-title">
            <h4 class="box-title pull-left">边角料列表</h4>
            <div class="pull-right">
                <a href="#1" class="collapse-link" title="收起表头"><i class="fa fa-chevron-up"></i></a>
            </div>
        </div>
        <div class="ibox-content">
            <div class="box-body" id="rbg">
                <div id="rbgToolbar">
                    <a href="#1" class="btn btn-info fa fa-info-circle" id="rbgView">查阅</a>
                    <a href="#1" class="btn btn-info fa fa-plus-square bscBtn" id="rbgAdd">新增</a>
                    <a href="#1" class="btn btn-info fa fa-edit bscBtn" id="rbgModify">修改</a>
                    <a href="#1" class="btn btn-info fa fa-remove bscBtn" id="rbgDelete">删除</a>
                </div>
                <table id="rbgTable"></table>
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
    <script src="../../../static/sas_cmb/js/sasCmbBsc_form.js"></script>
    <script src="../../../static/admin/main/js/content.js"></script>
</footer>
</body>
</html>