<%@ page language="java" contentType="text/html; charset=utf-8"%>
<!DOCTYPE HTML>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
	<title>加工账册料件-编辑</title>
	<link rel="stylesheet" href="../../../static/common/bootstrap-table-master/bootstrap-table.min.css" />
	<link rel="stylesheet" href="../../../static/common/bootstrap-datepicker-master/css/bootstrap-datepicker3.min.css" />
	<link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css" />
	<link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css" />
	<link rel="stylesheet" href="../../../static/common/select2/css/select2.min.css" type="text/css">
	<link rel="stylesheet" href="../../../static/common/bootstrapvalidator-master/css/bootstrapValidator.min.css" type="text/css">
	<link rel="stylesheet" href="../../../static/admin/main/css/animate.css" />
	<link rel="stylesheet" href="../../../static/common/css/style.css" />

	<!-- HTML5 Shim 和 Respond.js 用于使IE8支持html5和css3媒介查询 -->
	<!--[if lt IE 9]>
	<script src="../../../static/common/html5shiv/html5shiv.min.js"></script>
	<script src="../../../static/common/html5shiv/respond.min.js"></script>
	<![endif]-->
	<style>
		#dataForm td{
			border: none;
		}
		.form-group{
			margin-bottom:0;
		}
	</style>
</head>
<body>
<header>
	<div>
		<div class="ibox" id="head">
			<div class="ibox-title no-margins">
				<div class="pull-left">
					<a href="javascript:void(0);" class="btn btn-info fa fa-save" id="save-add">暂存</a>
					<a href="javascript:void(0);" class="btn btn-default fa fa-mail-reply" id="reback">返回</a>
				</div>
			</div>
			<div class="clearfix"></div>
			<div class="ibox-content">
				<form id="dataForm">
					<!-- 隐藏字段 -->
					<div style="display:none;">
						<input type="hidden" id="uid" name="uid">
						<input type="hidden" id="seqNo" name="seqNo">
						<input type="hidden" id="chgTmsCnt" name="chgTmsCnt">
					</div>
					<table class="table table-condensed no-border">
						<tr>
							<td class="table-label text-nowrap text-right">序号</td>
							<td>
								<div class="form-group">
									<input class="form-control" id="gdsSeqno" name="gdsSeqno" fieldName="商品序号" isValidate="true" notempty readonly>
								</div>
							</td>
							<td class="table-label text-nowrap text-right" >备案序号<span style="color:#EE0000;">*</span></td>
							<td>
								<div class="form-group">
									<input class="input-sm form-control"  id="putrecSeqno" name="putrecSeqno" fieldName="备案序号" isValidate="true" notempty>
								</div>
							</td>
							<td class="table-label text-nowrap text-right" >商品料号<span style="color:#EE0000;">*</span></td>
							<td>
								<div class="form-group">
									<input class="form-control"  id="gdsMtno" name="gdsMtno" fieldName="商品料号" isValidate="true" notempty >
								</div>
							</td>

						</tr>
						<tr>
							<td class="table-label text-nowrap">报关单商品序号</td>
							<td>
								<div class="form-group validate-height">
									<input class="input-sm form-control" id="entryGdsSeqno" name="entryGdsSeqno">
								</div>
							</td>
							<td class="table-label text-nowrap">流转单报表序号</td>
							<td>
								<div class="form-group validate-height">
									<input class="input-sm form-control" id="88" name="88">
								</div>
							</td>
							<td class="table-label text-nowrap text-right">商品编码</td>
							<td>
								<div class="form-group">
									<input class="form-control" id="gdecd" name="gdecd" fieldName="商品编码" isValidate="true" notempty readonly>
								</div>
							</td>
						</tr>
						<tr>
							<td class="table-label text-nowrap text-right">商品名称</td>
							<td>
								<div class="form-group">
									<input class="form-control" id="gdsNm" name="gdsNm" fieldName="商品名称" isValidate="true" notempty readonly>
								</div>
							</td>
							<td class="table-label text-nowrap text-right">规格型号</td>
							<td>
								<input class="form-control" id="endprdGdsSpcfModelDesc" name="endprdGdsSpcfModelDesc" readonly>
							</td>
							<td class="table-label text-nowrap text-right">币制<span style="color:#EE0000;">*</span></td>
							<td>
								<div class="form-group">
									<select class="form-control"  id="dclCurrcd" name="dclCurrcd" dll_name="codCusCurr"></select>
								</div>
							</td>
						</tr>
						<tr>
							<td class="table-label text-nowrap text-right">申报计量单位</td>
							<td>
								<div class="form-group">
									<select class="form-control"  id="dclUnitcd" name="dclUnitcd" dll_name="codCusUnit" readonly></select>
								</div>
							</td>
							<td class="table-label text-nowrap text-right">法定计量单位</td>
							<td>
								<div class="form-group">
									<select class="form-control"  id="lawfUnitcd" name="lawfUnitcd" dll_name="codCusUnit"  default="" fieldName="法定计量单位"  <%--isValidate="true" notempty--%> readonly></select>
								</div>
							</td>
							<td class="table-label text-nowrap text-right">第二法定计量单位</td>
							<td>
								<div class="form-group">
									<select class="form-control"  id="secdLawfUnitcd" name="secdLawfUnitcd" dll_name="codCusUnit"></select>
								</div>
							</td>
						</tr>
						<tr>
							<td class="table-label text-nowrap text-right">申报数量<span style="color:#EE0000;">*</span></td>
							<td>
								<div class="form-group">
									<input class="form-control" id="dclQty" name="dclQty" type="number">
								</div>
							</td>
							<td class="table-label text-nowrap text-right">企业申报单价<span style="color:#EE0000;">*</span></td>
							<td><input class="form-control" id="dclUprcAmt" name="dclUprcAmt"></td>
							<td class="table-label text-nowrap text-right">企业申报总价<span style="color:#EE0000;">*</span></td>
							<td>
								<div class="form-group validate-height">
									<input class="input-sm form-control" id="dclTotalAmt" name="dclTotalAmt">
								</div>
							</td>

						</tr>
						<tr>
							<td class="table-label text-nowrap text-right">法定数量<span style="color:#EE0000;">*</span></td>
							<td>
								<div class="form-group validate-height">
									<input class="input-sm form-control" id="lawfQty" name="lawfQty">
								</div>
							</td>

							<td class="table-label text-nowrap text-right">第二法定数量</td>
							<td>
								<div class="form-group validate-height">
									<input class="input-sm form-control" id="secdLawfQty" name="secdLawfQty">
								</div>
							</td>

							<td class="table-label text-nowrap text-right">产销国（地区）<span style="color:#EE0000;">*</span></td>
							<td>
								<div class="form-group validate-height">
									<select class="dropdown-width"  id="natcd" name="natcd" dll_name="codCusCountry" fieldName="国别代码" isValidate="true" notempty readonly></select>
								</div>
							</td>
						</tr>
						<tr>
							<td class="table-label text-nowrap text-right">重量比例因子</td>
							<td>
								<div class="form-group validate-height">
									<input class="input-sm form-control" id="wtSfVal" name="wtSfVal">
								</div>
							</td>
							<td class="table-label text-nowrap text-right">第一比例因子</td>
							<td>
								<div class="form-group validate-height">
									<input class="input-sm form-control" id="fstSfVal" name="fstSfVal">
								</div>
							</td>
							<td class="table-label text-nowrap text-right">第二比例因子</td>
							<td>
								<div class="form-group validate-height">
									<input class="input-sm form-control" id="secdSfVal" name="secdSfVal">
								</div>
							</td>
						</tr>

						<tr>
							<td class="table-label text-nowrap text-right">毛重</td>
							<td>
								<div class="form-group validate-height">
									<input class="input-sm form-control" id="grossWt" name="grossWt">
								</div>
							</td>
							<td class="table-label text-nowrap text-right">净重</td>
							<td>
								<div class="form-group validate-height">
									<input class="input-sm form-control" id="netWt" name="netWt">
								</div>
							</td>
							<td class="table-label text-nowrap text-right">用途代码<span style="color:#EE0000;">*</span></td>
							<td>
								<div class="form-group validate-height">
									<input class="input-sm form-control" id="useCd" name="useCd">
								</div>
							</td>
						</tr>
						<tr>
							<td class="table-label text-nowrap text-right">征减免方式<span style="color:#EE0000;">*</span></td>
							<td>
								<div class="form-group validate-height">
									<select class="dropdown-width"  id="lvyrlfModecd" name="lvyrlfModecd" dll_name="codCusLevymode"  <%--isValidate="true" notempty--%> readonly></select>
								</div>
							</td>
							<td class="table-label text-nowrap text-right">单耗版本号</td>
							<td>
								<div class="form-group validate-height">
									<select class="dropdown-width"  id="ucnsVerno" name="ucnsVerno" dll_name="UCNS_VERNO" fieldName="单耗明细版本号" <%--isValidate="true" notempty--%> readonly></select>
								</div>
							</td>
							<td class="table-label text-nowrap text-right">备注</td>
							<td >
								<input class="input-sm form-control" id="rmk" name="rmk">
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
	<script src="../../../static/common/jquery/jquery-ui.min.js"></script>
	<script src="../../../static/common/layer/layer.js"></script>
	<script src="../../../static/common/select2/js/select2.full.js"></script>
	<script src="../../../static/common/select2/js/i18n/zh-CN.js"></script>
	<script src="../../../static/common/bootstrapvalidator-master/js/bootstrapValidator.min.js"></script>
	<script src="../../../static/common/bootstrapvalidator-master/js/language/zh_CN.js"></script>
	<script src="../../../static/common/bootstrap-datepicker-master/js/bootstrap-datepicker.js"></script>
	<!-- 自定义js -->
	<script src="../../../static/admin/main/js/contabs.js"></script>
	<script src="../../../static/common/js/formCommon.js"></script>
	<script src="../../../static/bond/js/invimg/bondInvImg_loadEvent.js"></script>
	<script src="../../../static/common/js/common.js"></script>
	<script src="../../../static/bond/js/invimg/bondInvtImg_from.js"></script>
</footer>
</body>
</html>