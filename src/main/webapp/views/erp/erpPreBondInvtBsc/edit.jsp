<%@ page language="java" contentType="text/html; charset=utf-8"%>
<!DOCTYPE HTML>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
	<title>企业原始清单</title>
	<link rel="stylesheet" href="../../../static/common/bootstrap-table-master/bootstrap-table.min.css" />
	<link rel="stylesheet" href="../../../static/common/bootstrap-datepicker-master/css/bootstrap-datepicker3.min.css" />
	<link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css" />
	<link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css" />
	<link rel="stylesheet" href="../../../static/common/select2/css/select2.min.css" type="text/css">
	<link rel="stylesheet" href="../../../static/common/bootstrapvalidator-master/css/bootstrapValidator.min.css" type="text/css">
	<link rel="stylesheet" href="../../../static/admin/main/css/animate.css" />
	<link rel="stylesheet" href="../../../static/common/css/style.css" />
	<link rel="stylesheet" href="../../../static/common/css/common.css" />
	<!-- HTML5 Shim 和 Respond.js 用于使IE8支持html5和css3媒介查询 -->
	<!--[if lt IE 9]>
	<script src="../../../static/common/html5shiv/html5shiv.min.js"></script>
	<script src="../../../static/common/html5shiv/respond.min.js"></script>
	<![endif]-->
	<style>
		#dataForm td{
			border: none;
		}
	</style>
</head>
<body class="gray-bg">
<div class="container animated fadeInRight">
	<div class="ibox" id="head">
		<div class="ibox-title with-border collapsed-box">
			<div class="pull-left">
				<h4 class="box-title pull-left">企业原始清单表头</h4>
			</div>
			<div class="pull-right">
				<a href="#1" class="collapse-link" title="收起表头"><i class="fa fa-chevron-up"></i></a>
			</div>
		</div>
		<div class="clearfix"></div>
		<div class="ibox-title no-margins">
			<div class="pull-left">
				<i class="btn btn-info fa fa-save" id="save">保存</i>
				<i class="btn btn-info fa fa-mail-reply" id="reback">返回</i>
			</div>
			<div class="pull-right">
				<a href="#1" class="collapse-link" title="收起表头"><i class="fa fa-chevron-up"></i></a>
			</div>
		</div>
		<div class="clearfix"></div>
		<div class="ibox-content">
			<form id="dataForm">
				<!-- 隐藏字段 -->
				<div style="display:none;">
					<input type="hidden" id="uid" name="uid">
				</div>
				<table class="table table-condensed no-borders no-margins">
					<tr>
						<td class="table-label text-nowrap text-right">企业内部编号<span class="notempty">*</span></td>
						<td>
							<div class="form-group">
								<input class="form-control"  id="etpsInnerInvtNo" name="etpsInnerInvtNo" isValidate="true" notempty >
							</div>
						</td>
						<td class="table-label text-nowrap text-right">进出口标志<span class="notempty">*</span></td>
						<td style="width:20%;">
							<div class="form-group">
								<select class="form-control select2-width" id="impexpMarkcd" name="impexpMarkcd" dll_name="IMPEXP_MARKCD"  isShowEmpty="true" isValidate="true" notempty></select>
							</div>
						</td>
						<td class="table-label text-nowrap text-right text-right">手(账)册编号<span class="notempty">*</span></td>
						<td style="width: 20%;" colspan="3">
							<div class="form-group">
								<select class="form-control select2-width" id="putrecNo" name="putrecNo"  isValidate="true" notempty >
									<option value=''>--请选择--</option>
								</select>
							</div>
						</td>

					</tr>

					<tr>
						<td class="table-label text-nowrap text-right">经营单位代码<span class="notempty">*</span></td>
						<td>
							<div class="form-group">
								<input class="form-control"  id="bizopEtpsno" name="bizopEtpsno"  isValidate="true" notempty readonly>
							</div>
						</td>
						<td class="table-label text-nowrap text-right">经营单位社会信用代码</td>
						<td><input class="form-control"  id="bizopEtpsSccd" name="bizopEtpsSccd"  readonly></td>
						<td class="table-label text-nowrap text-right">经营单位名称<span class="notempty">*</span></td>
						<td colspan="3">
							<div class="form-group">
								<input class="form-control"  id="bizopEtpsNm" name="bizopEtpsNm" isValidate="true" notempty readonly>
							</div>
						</td>
					</tr>
					<tr>
						<td class="table-label text-nowrap text-right">收发货单位代码<span class="notempty">*</span></td>
						<td>
							<div class="form-group">
								<input class="form-control"  id="rcvgdEtpsno" name="rcvgdEtpsno" isValidate="true" notempty readonly>
							</div>
						</td>
						<td class="table-label text-nowrap text-right">收发货单位社会信用代码</td>
						<td><input class="form-control"  id="rvsngdEtpsSccd" name="rvsngdEtpsSccd" readonly></td>
						<td class="table-label text-nowrap text-right">收发货单位名称<span class="notempty">*</span></td>
						<td colspan="3">
							<div class="form-group">
								<input class="form-control" id="rcvgdEtpsNm" name="rcvgdEtpsNm" isValidate="true" notempty  readonly>
							</div>
						</td>
					</tr>
					<tr>
						<td class="table-label text-nowrap text-right">申报单位代码<span class="notempty">*</span></td>
						<td>
							<div class="form-group">
								<input class="form-control" id="dclEtpsno" name="dclEtpsno" isValidate="true" notempty>
							</div>
						</td>
						<td class="table-label text-nowrap text-right">申报单位社会信用代码</td>
						<td><input class="form-control"  id="dclEtpsSccd" name="dclEtpsSccd"></td>
						<td class="table-label text-nowrap text-right">申报单位名称<span class="notempty">*</span></td>
						<td colspan="3">
							<div class="form-group">
								<input class="form-control" id="dclEtpsNm" name="dclEtpsNm" isValidate="true" notempty>
							</div>
						</td>
					</tr>

					<tr>
						<td class="table-label text-nowrap text-right">料件、成品标志<span class="notempty">*</span></td>
						<td style="width:20%;">
							<div class="form-group">
								<select class="form-control select2-width" id="mtpckEndprdMarkcd" name="mtpckEndprdMarkcd" dll_name="MTPCK_TYPECD"  isShowEmpty="true" isValidate="true" notempty></select>
							</div>
						</td>
						<td class="table-label text-nowrap text-right">监管方式<span class="notempty">*</span></td>
						<td style="width:20%;">
							<div class="form-group">
								<select class="form-control select2-width" id="supvModecd" name="supvModecd" dll_name="codCusTrade" isShowEmpty="true" isValidate="true" notempty ></select>
							</div>
						</td>
						<td class="table-label text-nowrap text-right">运输方式<span class="notempty">*</span></td>
						<td style="width:20%;">
							<div class="form-group">
								<select class="form-control select2-width" id=trspModecd name="trspModecd" dll_name="codCusTransf" isShowEmpty="true"  isValidate="true" notempty></select>
							</div>
						</td>
					</tr>

					<tr>
						<td class="table-label text-nowrap text-right">进（出）口口岸<span class="notempty">*</span></td>
						<td>
							<div class="form-group">
								<select class="form-control select2-width" id=impexpPortcd name="impexpPortcd" dll_name="codCusCustomsrel" isShowEmpty="true" isValidate="true" notempty></select>
							</div>
						</td>
						<td class="table-label text-nowrap text-right">申报地海关<span class="notempty">*</span></td>
						<td>
							<div class="form-group">
								<select class="form-control select2-width" id="dclPlcCuscd" name="dclPlcCuscd" dll_name="codCusCustomsrel" isShowEmpty="true" isValidate="true" notempty></select>
							</div>
						</td>
						<td class="table-label text-nowrap text-right">起运运抵国别<span class="notempty">*</span></td>
						<td>
							<div class="form-group">
								<select class="form-control select2-width" id="natcd" name="natcd" dll_name="codCusCountry" isShowEmpty="true" isValidate="true" notempty></select>
							</div>
						</td>
					</tr>
					<tr>

						<td class="table-label text-nowrap text-right">申请表编号</td>
						<td><input class="form-control"  id="applyNo" name="applyNo"></td>
						<td class="table-label text-nowrap text-right">清单类型<span class="notempty">*</span></td>
						<td>
							<div class="form-group">
								<select class="form-control select2-width" id="bondInvtTypecd" name="bondInvtTypecd" dll_name="BOND_INVT_TYPECD" isShowEmpty="true" isValidate="true" notempty></select>
							</div>
						</td>
						<td class="table-label text-nowrap text-right">录入日期<span class="notempty">*</span></td>
						<td>
							<div class="form-group">
								<input type="text" class="form-control datepicker" data-date-format="yyyy-mm-dd" isFormat="true" id="createTime" name="createTime" isValidate="true" notempty readonly>
							</div>
						</td>
					</tr>
					<tr>
						<td class="table-label text-nowrap text-right">录入单位代码<span class="notempty">*</span></td>
						<td>
							<div class="form-group">
								<input class="form-control"  id="inputCopNo" name="inputCopNo" isValidate="true" notempty readonly>
							</div>
						</td>
						<td class="table-label text-nowrap text-right">录入单位社会信用代码</td>
						<td><input class="form-control"  id="inputEtpsSccd" name="inputEtpsSccd" readonly></td>
						<td class="table-label text-nowrap text-right">录入单位名称<span class="notempty">*</span></td>
						<td >
							<div class="form-group">
								<input class="form-control"  id="inputCopName" name="inputCopName" isValidate="true" notempty readonly>
							</div>
						</td>

					</tr>
					<tr>
						<td class="table-label text-nowrap text-right">报关标志<span class="notempty">*</span></td>
						<td>
							<div class="form-group">
								<select class="form-control select2-width" id="dclcusFlag" name="dclcusFlag" dll_name="DCLCUS_FLAG" isShowEmpty="true" isValidate="true" notempty></select>
							</div>
						</td>
						<td class="table-label text-nowrap text-right">报关类型</td>
						<td><select class="form-control select2-width" id="dclcusTypecd" name="dclcusTypecd" isShowEmpty="true" dll_name="DCLCUS_TYPECD" ></select></td>
						<td class="table-label text-nowrap text-right">报关单类型</td>
						<td colspan="3">
							<div class="form-group">
								<select class="form-control select2-width" id="decTypecd" name="decTypecd" isShowEmpty="true" dll_name="DEC_TYPE" >
								</select>
							</div>
						</td>
					</tr>
					<tr>
						<td class="table-label text-nowrap text-right">流转类型</td>
						<td>
							<div class="form-group">
								<select class="form-control select2-width" id="listType" name="listType" isShowEmpty="true" dll_name="LIST_TYPE" >
								</select>
							</div>
						</td>
						<td class="table-label text-nowrap text-right">关联清单编号</td>
						<td><input class="form-control"  id="rltInvtNo" name="rltInvtNo" ></td>
						<td class="table-label text-nowrap text-right">关联手（账）册备案号</td>
						<td colspan="3"><input class="form-control"  id="rltPutrecNo" name="rltPutrecNo" ></td>
					</tr>
					<tr>
						<td class="table-label text-nowrap text-right">备注</td>
						<td colspan="7"><input class="form-control"  id="rmk" name="rmk" ></td>
					</tr>

					<tr>
						<td class="table-label text-nowrap text-right">对应报关单申报单位代码</td>
						<td><input class="form-control"  id="corrEntryDclEtpsno" name="corrEntryDclEtpsno"></td>
						<td class="table-label text-nowrap text-right">对应报关单申报单位名称</td>
						<td><input class="form-control"  id="corrEntryDclEtpsNm" name="corrEntryDclEtpsNm" readonly></td>
						<td class="table-label text-right">对应报关单申报<br>单位社会信用代码</td>
						<td colspan="3"><input class="form-control"  id="corrEntryDclEtpsSccd" name="corrEntryDclEtpsSccd" readonly></td>
					</tr>

					<tr>
						<td class="table-label text-nowrap text-right">关联报关单收发货人代码</td>
						<td>
							<div class="form-group">
								<input class="form-control"  id="rltEntryRcvgdEtpsno" name="rltEntryRcvgdEtpsno">
							</div>
						</td>
						<td class="table-label text-nowrap text-right">收发货人名称</td>
						<td><input class="form-control"  id="rltEntryRcvgdEtpsNm" name="rltEntryRcvgdEtpsNm" readonly></td>
						<td class="table-label text-nowrap text-right">社会信用代码</td>
						<td colspan="3"><input class="form-control"  id="rltEntryRvsngdEtpsSccd" name="rltEntryRvsngdEtpsSccd" readonly></td>
					</tr>
					<tr>
						<td class="table-label text-right">关联报关单生产销售<br>（消费使用）单位代码</td>
						<td>
							<div class="form-group">
								<input class="form-control"  id="rltEntryBizopEtpsno" name="rltEntryBizopEtpsno">
							</div>
						</td>
						<td class="table-label text-nowrap text-right">单位名称</td>
						<td><input class="form-control"  id="rltEntryBizopEtpsNm" name="rltEntryBizopEtpsNm" readonly></td>
						<td class="table-label text-nowrap text-right">社会信用代码</td>
						<td colspan="3"><input class="form-control"  id="rltEntryBizopEtpsSccd" name="rltEntryBizopEtpsSccd" readonly></td>
					</tr>
					<tr>
						<td class="table-label text-nowrap text-right">关联报关单申报单位代码</td>
						<td>
							<div class="form-group">
								<input class="form-control"  id="rltEntryDclEtpsno" name="rltEntryDclEtpsno">
							</div>
						</td>
						<td class="table-label text-nowrap text-right">申报单位名称</td>
						<td><input class="form-control"  id="rltEntryDclEtpsNm" name="rltEntryDclEtpsNm" readonly></td>
						<td class="table-label text-nowrap text-right">社会信用代码</td>
						<td colspan="3"><input class="form-control"  id="rltEntryDclEtpsSccd" name="rltEntryDclEtpsSccd" readonly></td>
					</tr>
					<tr>
						<td class="table-label text-nowrap text-right">对应报关单编号</td>
						<td ><input class="form-control"  id="entryNo" name="entryNo"></td>
						<td class="table-label text-nowrap text-right">关联报关单编号</td>
						<td><input class="form-control"  id="rltEntryNo" name="rltEntryNo"></td>
						<td class="table-label text-nowrap text-right">报关单申报日期</td>
						<td  colspan="3"><input type="text" class="form-control datepicker" data-date-format="yyyy-mm-dd" isFormat="true" id="entryDclTime" name="entryDclTime"></td>
					</tr>

				</table>
			</form>
		</div>
	</div>
	<div class="ibox">
		<div class="ibox-title with-border collapsed-box">
			<h4 class="box-title pull-left">表体明细</h4>
			<div class="pull-right">
				<a href="#1" class="collapse-link" title="收起表头"><i class="fa fa-chevron-up"></i></a>
			</div>
		</div>
		<div class="ibox-content" >
			<!-- 清单商品 -->
			<div  class="tab-pane fade m-t-sm active in" id="imgTab">
				<div id="dtToolbar">
					<button id="dtview" type="button" class="btn btn-info btn-sm"  title="查阅">
						<i class="fa fa-info-circle"></i> 查阅
					</button>
					<button id="dtadd" type="button" class="btn btn-info btn-sm"  title="新增">
						<i class="fa fa-plus" >新增</i>
					</button>
					<button id="dtmod" type="button" class="btn btn-info btn-sm"  title="修改">
						<i class="fa fa-edit">修改</i>
					</button>
					<button id="dtdel" type="button" class="btn btn-info btn-sm" title="删除">
						<i class="fa fa-trash">删除</i>
					</button>
					<span class="m-r-sm"></span>


				</div>
				<table id="dtTable"></table>
			</div>
		</div>
	</div>

</div>
<footer>
	<script src="../../../static/common/jquery/jquery-3.1.1.min.js"></script>
	<script src="../../../static/common/bootstrap/js/bootstrap.min.js"></script>
	<script src="../../../static/admin/main/js/metisMenu/jquery.metisMenu.js"></script>
	<script src="../../../static/admin/main/js/slimscroll/jquery.slimscroll.min.js"></script>
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
	<script src="../../../static/erp/js/erpPreBondInvtBsc_form.js"></script>
	<script src="../../../static/admin/main/js/content.js"></script>
</footer>
</body>
</html>