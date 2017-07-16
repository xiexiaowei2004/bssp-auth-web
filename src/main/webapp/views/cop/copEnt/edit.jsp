﻿<%@ page language="java" contentType="text/html; charset=utf-8" %>
<!DOCTYPE HTML>
<html>
<head>
    <title>企业备案信息-修改</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <link rel="stylesheet" href="../../../static/common/bootstrap-table-master/bootstrap-table.min.css"/>
    <link rel="stylesheet" href="../../../static/common/bootstrap-datepicker-master/css/bootstrap-datepicker3.min.css"/>
    <link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css"/>
    <link rel="stylesheet" href="../../../static/common/select2/css/select2.min.css" type="text/css">
    <link rel="stylesheet" href="../../../static/common/bootstrapvalidator-master/css/bootstrapValidator.min.css" type="text/css">
    <link rel="stylesheet" href="../../../static/admin/main/css/animate.css"/>
    <link rel="stylesheet" href="../../../static/common/css/style.css" />
    <link rel="stylesheet" href="../../../static/common/css/common.css"/>

    <!--[if lt IE 9]>
    <script src="../../../static/common/html5shiv/html5shiv.min.js"></script>
    <script src="../../../static/common/html5shiv/respond.min.js"></script>
    <![endif]-->
    <style>
        .form-group {
            margin-bottom: 0;
        }

        #form td {
            border: none;
        }
    </style>
</head>
<body class="gray-bg">
	<div class="container animated fadeInRight">
			<div class="ibox" id="head">
				<div class="ibox-title with-border collapsed-box">
					<div class="pull-left">
						<h4 class="box-title pull-left">企业信息备案-修改</h4>
					</div>
					<div class="pull-right">
						<a href="#1" class="collapse-link" title="收起表头"><i
							class="fa fa-chevron-up"></i></a>
					</div>
				</div>
				<div class="clearfix"></div>
				<div class="ibox-content">
					<a href="javascript:void(0);" class="btn btn-info fa fa-save" id="save">暂存</a>
					<a href="javascript:void(0);" class="btn btn-info fa fa-mail-reply" id="reback">返回</a>
				</div>
				<div class="ibox-content">
	            <form id="form">
	                <!-- 隐藏字段 -->
	                <div style="display:none;">
	                    <input type="hidden" id="uid" name="uid">
	                </div>
	                <table class="table table-condensed no-borders no-margins">
	                    <tr>
	                        <td class="table-label text-nowrap ">企业备案号</td>
	                        <td>
	                            <div class="form-group">
	                                <input class="form-control" id="seqNo" name="seqNo" readonly>
	                            </div>
	                        </td>
	                        <td class="table-label text-nowrap ">企业海关代码<span class="notempty">*</span></td>
	                        <td>
	                            <div class="form-group">
	                                <input class="form-control" id="tradeCode" name="tradeCode" maxlength="10"
	                                       readonly="readonly" isValidate="true" notempty>
	                            </div>
	                        </td>
	                        <td class="table-label text-nowrap ">社会信用代码<span class="notempty">*</span></td>
	                        <td>
	                            <div class="form-group">
	                                <input class="form-control" id="copGbCode" name="copGbCode" isValidate="true" notempty
	                                       minlength="18" maxlength="18">
	                            </div>
	                        </td>
	                    </tr>
	                    <tr>
	                        <td class="table-label text-nowrap ">企业名称<span class="notempty">*</span></td>
	                        <td>
	                            <div class="form-group">
	                                <input class="input-sm form-control" id="entName" name="entName" isValidate="true" notempty
	                                       maxlength="128" readonly="readonly">
	                            </div>
	                        </td>
	                        <td class="table-label text-nowrap ">企业地址<span class="notempty">*</span></td>
	                        <td colspan="3">
	                            <div class="form-group">
	                                <input class="input-sm form-control" id="entAddr" name="entAddr" isValidate="true" notempty
	                                       maxlength="128">
	                            </div>
	                        </td>
	                    </tr>
	                    <tr>
	                        <td class="table-label text-nowrap ">主管海关<span class="notempty">*</span></td>
	                        <td>
	                            <div class="form-group">
	                                <select class="form-control select2-width form-horizontal" style="width: 100%"
	                                        id="customsCode" name="customsCode" isShowEmpty="true" isValidate="true" notempty
	                                        notempty dll_name="codCusCustomsrel">
	                                </select>
	                            </div>
	                        </td>
	                        <td class="table-label text-nowrap ">监管场所<span class="notempty">*</span></td>
	                        <td>
	                            <div class="form-group">
	                                <select class="form-control select2-width form-horizontal" style="width: 100%"
	                                        id="areaCode" name="areaCode" isValidate="true" notempty isShowEmpty="true"
	                                        dll_name="codStdAreaCode">
	                                </select>
	                            </div>
	                        </td>
	                        <td class="table-label text-nowrap ">有效标识<span class="notempty">*</span></td>
	                        <td>
	                            <div class="form-group">
	                                <select class="form-control select2-width form-horizontal" style="width: 100%"
	                                        id="validFlag" name="validFlag" isShowEmpty="true" isValidate="true" notempty
	                                        dll_name="IS_VALIDATE">
	                                </select>
	                            </div>
	                        </td>	                        
	                    </tr>
	                    <tr>
	                        <td class="table-label text-nowrap ">企业类型<span class="notempty">*</span></td>
	                        <td>
	                            <div class="form-group">
	                                <select class="form-control select2-width form-horizontal" style="width: 100%"
	                                        id="entType" name="entType" isShowEmpty="true" isValidate="true" notempty
	                                        dll_name="codCusBusttype">
	                                </select>
	                            </div>
	                        </td>
	                        <td class="table-label text-nowrap ">企业性质<span class="notempty">*</span></td>
	                        <td>
	                            <div class="form-group">
	                                <select class="form-control select2-width form-horizontal" style="width: 100%"
	                                        id="entProperty" name="entProperty" isShowEmpty="true" isValidate="true"
	                                        notempty dll_name="ENT_PROPERTY">
	                                </select>
	                            </div>
	                        </td>	                        
	                        <td class="table-label text-nowrap ">注册资本(万元)</td>
	                        <td>
	                            <div class="form-group">
	                                <input class="form-control" type="number" id="regFund" name="regFund" maxlength="18">
	                            </div>
	                        </td>
	                    </tr>
	                    <tr>
	                    	<td class="table-label text-nowrap ">法人代表<span class="notempty">*</span></td>
	                        <td>
	                            <div class="form-group">
	                                <input class="form-control" id="lawMan" name="lawMan" isValidate="true" notempty maxlength="30">
	                            </div>
	                        </td>
	                        <td class="table-label text-nowrap ">联系人<span class="notempty">*</span></td>
	                        <td>
	                            <div class="form-group">
	                                <input class="form-control" id="contacCo" name="contacCo" isValidate="true" notempty maxlength="30">
	                            </div>
	                        </td>
	                        <td class="table-label text-nowrap ">联系电话<span class="notempty">*</span></td>
	                        <td>
	                            <div class="form-group">
	                                <input class="form-control" id="telCo" name="telCo" isValidate="true" notempty maxlength="30">
	                            </div>
	                        </td>
	                        
	                    </tr>
	                    <tr>
	                        <td class="table-label text-nowrap ">有效日期<span class="notempty">*</span></td>
	                        <td>
	                            <div class="form-group">
	                                <input class="input-sm form-control datepicker" id="validDate" name="validDate"
	                                       isValidate="true" notempty data-date-format="yyyy-mm-dd"  isFormat="true">
	                            </div>
	                        </td>
	                        <td class="table-label text-nowrap ">经营范围<span class="notempty">*</span></td>
	                        <td colspan="3">
	                            <div class="form-group">
	                                <input class="input-sm form-control" id="tradeArea" name="tradeArea" isValidate="true" notempty
	                                       maxlength="255">
	                            </div>
	                        </td>
	                    </tr>
	                    <tr>
	                        <td class="table-label text-nowrap ">备注</td>
	                        <td colspan="5"><input class="form-control"  id="remarks" name="remarks"></td>
	                    </tr>
	                    <tr><td  class="form-control" colspan="6"></td></tr>
	                    <tr>
	                        <td class="table-label text-nowrap text-right">操作企业</td>
                        <td><input class="form-control" id="inputCopName" name="inputCopName" readonly></td>
                        <td class="table-label text-nowrap text-right">操作人</td>
                        <td><input class="form-control" id="inputerName" name="inputerName" readonly></td>
	                        <td class="table-label text-nowrap ">操作时间</td>
	                        <td>
	                            <input class="input-sm form-control" id="updateTime" name="updateTime" readonly>
	                        </td>
	                    </tr>
	                </table>
	            </form>
	        </div>
	
	    </div>
	    <div class="ibox" id="copBussinessGrid">
	        <div class="ibox-title">
	            <h4 class="box-title pull-left">经营资料列表</h4>
	            <div class="pull-right">
	                <a href="#1" class="collapse-link" title="收起表头"><i class="fa fa-chevron-up"></i></a>
	            </div>
	        </div>
	        <div class="ibox-content">
	            <div class="box-body">
	                <div id="fileToolbar">
	                    <a href="#1" class="btn btn-info fa fa-info-circle" id="find"> 查阅</a>
	                    <a href="#1" class="btn btn-info fa fa-plus-square" id="add"> 新增</a>
	                    <a href="#1" class="btn btn-info fa fa-edit" id="edit"> 修改</a>
	                    <a href="#1" class="btn btn-info fa fa-remove" id="remove"> 删除</a>
	                </div>
	                <form id="searchForm"><input type="hidden" name="seqNo"></form>
	                <table id="table"></table>
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
	<script src="../../../static/cop/js/copcom_edit.js"></script>
	<script src="../../../static/admin/main/js/content.js"></script>
</body>
</html>