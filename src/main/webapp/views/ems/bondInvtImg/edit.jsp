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
					<a href="javascript:void(0);" class="btn btn-info fa fa-save" id="save">暂存</a>
					<a href="javascript:void(0);" class="btn btn-info fa fa-mail-reply" id="reback">返回</a>
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
								<div class="form-group ">
									<input class="form-control" id="gdsSeqno" name="gdsSeqno" fieldName="序号"  readonly>
								</div>
							</td>
							<td class="table-label text-nowrap text-right" >备案序号<span style="color:#EE0000;">*</span></td>
							<td>
								<div class="form-group ">
									<input class="input-sm form-control"  id="putrecSeqno" name="putrecSeqno" fieldName="备案序号"  isValidate="true" notempty readonly>
								</div>
							</td>
							<td class="table-label text-nowrap text-right" >商品料号<span style="color:#EE0000;">*</span></td>
							<td>
								<div class="form-group ">
									<input class="form-control"  id="gdsMtno" name="gdsMtno" fieldName="商品料号"   isValidate="true" notempty >
								</div>
							</td>

						</tr>
						<tr>
							<td class="table-label text-nowrap text-right">报关单商品序号</td>
							<td>
								<div class="form-group ">
									<input class="input-sm form-control" id="entryGdsSeqno" name="entryGdsSeqno" type="number">
								</div>
							</td>
							<td class="table-label text-nowrap text-right">流转单报表序号</td>
							<td>
								<div class="form-group ">
									<input class="input-sm form-control" id="applyTbSeqno" name="applyTbSeqno" type="number" maxlength="19">
								</div>
							</td>
							<td class="table-label text-nowrap text-right">商品编码</td>
							<td>
								<div class="form-group ">
									<input class="form-control" id="gdecd" name="gdecd" placeholder="输入4位以上编码回车选择商品" fieldName="商品编码" isValidate="true" notempty >
								</div>
							</td>
						</tr>
						<tr>
							<td class="table-label text-nowrap text-right">商品名称</td>
							<td>
								<div class="form-group ">
									<input class="form-control" id="gdsNm" name="gdsNm" fieldName="商品名称" isValidate="true" notempty readonly>
								</div>
							</td>
							<td class="table-label text-nowrap text-right">规格型号</td>
							<td>
								<div class="form-group ">
								<input class="form-control" id="endprdGdsSpcfModelDesc" name="endprdGdsSpcfModelDesc" readonly>
								</div>
							</td>
							<td class="table-label text-nowrap text-right">币制<span style="color:#EE0000;">*</span></td>
							<td>
								<div class="form-group ">
									<select style="width: 100%" class="form-control"  id="dclCurrcd" name="dclCurrcd" dll_name="codCusCurr" isShowEmpty="true" isValidate="true" notempty></select>
								</div>
							</td>
						</tr>
						<tr>
							<td class="table-label text-nowrap text-right">申报计量单位</td>
							<td>
								<div class="form-group">
									<select style="width: 100%;" class="form-control"  id="dclUnitcd" name="dclUnitcd" dll_name="codCusUnit"></select>
								</div>
							</td>
							<td class="table-label text-nowrap text-right">法定计量单位</td>
							<td>
								<div class="form-group ">
									<select style="width: 100%;" class="form-control"  id="lawfUnitcd" name="lawfUnitcd" dll_name="codCusUnit"  default="" fieldName="法定计量单位"  disabled></select>
								</div>
							</td>
							<td class="table-label text-nowrap text-right">第二计量单位</td>
							<td>
								<div class="form-group ">
									<select style="width: 100%" class="form-control"  id="secdLawfUnitcd" name="secdLawfUnitcd" dll_name="codCusUnit" disabled></select>
								</div>
							</td>
						</tr>
						<tr>
							<td class="table-label text-nowrap text-right">申报数量<span style="color:#EE0000;">*</span></td>
							<td>
								<div class="form-group ">
									<input class="form-control" step="0.00001" maxlength="19" id="dclQty" name="dclQty" type="number"  isValidate="true" notempty>
								</div>
							</td>
							<td class="table-label text-nowrap text-right">申报单价<span style="color:#EE0000;">*</span></td>
							<td>
								<div class="form-group ">
									<input class="form-control" step="0.00001" maxlength="25" id="dclUprcAmt" name="dclUprcAmt" type="number" step="0.01" isValidate="true" notempty>
								</div>
							</td>
							<td class="table-label text-nowrap text-right">申报总价<span style="color:#EE0000;">*</span></td>
							<td>
								<div class="form-group ">
									<input class="input-sm form-control" step="0.00001" maxlength="25" id="dclTotalAmt" name="dclTotalAmt" type="number"  isValidate="true" notempty>
								</div>
							</td>

						</tr>
						<tr>
							<td class="table-label text-nowrap text-right">法定数量<span style="color:#EE0000;">*</span></td>
							<td>
								<div class="form-group ">
									<input class="input-sm form-control" step="0.00001" maxlength="19"  id="lawfQty" name="lawfQty" type="number"  isValidate="true" notempty>
								</div>
							</td>

							<td class="table-label text-nowrap text-right">第二数量</td>
							<td>
								<div class="form-group ">
									<input class="input-sm form-control" step="0.00001" maxlength="19"  id="secdLawfQty" name="secdLawfQty" type="number">
								</div>
							</td>

							<td class="table-label text-nowrap text-right">产销国（地区）<span style="color:#EE0000;">*</span></td>
							<td>
								<div class="form-group ">
									<select style="width: 100%" class="dropdown-width"  id="natcd" name="natcd" dll_name="codCusCountry" isShowEmpty="true" isValidate="true" notempty></select>
								</div>
							</td>
						</tr>
						<tr>
							<td class="table-label text-nowrap text-right">重量比例因子</td>
							<td>
								<div class="form-group ">
									<input  type="number" step="0.00001" class="input-sm form-control" id="wtSfVal" name="wtSfVal" maxlength="19">
								</div>
							</td>
							<td class="table-label text-nowrap text-right">第一比例因子</td>
							<td>
								<div class="form-group ">
									<input type="number" step="0.00001" class="input-sm form-control" id="fstSfVal" name="fstSfVal" maxlength="19">
								</div>
							</td>
							<td class="table-label text-nowrap text-right">第二比例因子</td>
							<td>
								<div class="form-group ">
									<input type="number" step="0.00001" class="input-sm form-control" id="secdSfVal" name="secdSfVal" maxlength="19">
								</div>
							</td>
						</tr>

						<tr>
							<td class="table-label text-nowrap text-right">毛重<span style="color:#EE0000;">*</span></td>
							<td>
								<div class="form-group ">
									<input type="number" step="0.00001"  class="input-sm form-control" id="grossWt" name="grossWt" maxlength="19" isValidate="true" notempty>
								</div>
							</td>
							<td class="table-label text-nowrap text-right">净重<span style="color:#EE0000;">*</span></td>
							<td>
								<div class="form-group ">
									<input type="number" step="0.00001" class="input-sm form-control" id="netWt" name="netWt"  maxlength="19" isValidate="true" notempty>
								</div>
							</td>
							<td class="table-label text-nowrap text-right">用途代码<span style="color:#EE0000;">*</span></td>
							<td>
								<div class="form-group ">
									<select style="width: 100%" class="dropdown-width"  id="useCd" name="useCd" dll_name="codCusUserto" isShowEmpty="true" isValidate="true" notempty></select>
								</div>
							</td>
						</tr>
						<tr>
							<td class="table-label text-nowrap text-right">征减免方式<span style="color:#EE0000;">*</span></td>
							<td>
								<div class="form-group ">
									<select style="width: 100%" class="dropdown-width"  id="lvyrlfModecd" name="lvyrlfModecd" dll_name="codCusLevymode"  isShowEmpty="true" isValidate="true" notempty></select>
								</div>
							</td>
							<td class="table-label text-nowrap text-right">单耗版本号</td>
							<td>
								<div class="form-group ">
									<%--<select style="width: 100%" class="dropdown-width"  id="ucnsVerno" name="ucnsVerno" dll_name="UCNS_VERNO" fieldName="单耗明细版本号" &lt;%&ndash;isValidate="true" notempty&ndash;%&gt; readonly></select>--%>
									<input class="input-sm form-control" id="ucnsVerno" name="ucnsVerno">
								</div>
							</td>
							<td class="table-label text-nowrap text-right">备注</td>
							<td >
								<div class="form-group ">
								<input class="input-sm form-control" id="rmk" name="rmk">
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
	<script src="../../../static/common/jquery/jquery-ui.min.js"></script>
	<script src="../../../static/common/layer/layer.js"></script>
	<script src="../../../static/common/select2/js/select2.full.js"></script>
	<script src="../../../static/common/select2/js/i18n/zh-CN.js"></script>
	<script src="../../../static/common/bootstrapvalidator-master/js/bootstrapValidator.min.js"></script>
	<script src="../../../static/common/bootstrapvalidator-master/js/language/zh_CN.js"></script>
	<script src="../../../static/common/bootstrap-datepicker-master/js/bootstrap-datepicker.js"></script>
	<!-- 自定义js -->
	<script src="../../../static/admin/main/js/contabs.js"></script>
	<script src="../../../static/bond/js/invimg/bondInvImg_loadEvent.js"></script>
	<script src="../../../static/common/js/common.js"></script>
	<script src="../../../static/bond/js/invimg/bondInvtImg_from.js"></script>
</footer>
</body>
</html>