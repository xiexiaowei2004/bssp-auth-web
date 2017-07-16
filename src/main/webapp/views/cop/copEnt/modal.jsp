<%@ page language="java" contentType="text/html; charset=utf-8"%>
<!DOCTYPE HTML>
<html>
<head>
    <title>企业备案信息-新增</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
	<link rel="stylesheet" href="../../../static/common/bootstrap-table-master/bootstrap-table.min.css" />
	<link rel="stylesheet" href="../../../static/common/bootstrap-datepicker-master/css/bootstrap-datepicker3.min.css" />
	<link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css" />
	<link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css" />
	<link rel="stylesheet" href="../../../static/common/select2/css/select2.min.css" type="text/css">
	<link rel="stylesheet" href="../../../static/common/bootstrapvalidator-master/css/bootstrapValidator.min.css" type="text/css">
	<link rel="stylesheet" href="../../../static/admin/main/css/animate.css" />
	<link rel="stylesheet" href="../../../static/common/css/style.css" />
	<link rel="stylesheet" href="../../../static/common/css/common.css" />
	<!--[if lt IE 9]>
	<script src="../../../static/common/html5shiv/html5shiv.min.js"></script>
	<script src="../../../static/common/html5shiv/respond.min.js"></script>
	<![endif]-->
	<style>
		.form-group{ margin-bottom: 0; }
		#modalForm table td{border: none;}
	</style>
</head>
<body class="hold-transition skin-blue sidebar-mini">
	<header>
		<div class="box box-solid div-pad box-line">
			<div class="btn div-left-pad">
				<a href="#1" class="btn btn-info fa fa-save" id="modalSave"> 保存</a>
				<a href="#1" class="btn btn-info fa fa-mail-reply" id="modalReback"> 退出</a>
			</div>
		</div>
		<div class="box box-primary no-margin">
			<div class="box-body no-margin" id="head">
				<form id="modalForm">
					<table class="table table-condensed no-border">
						<tr>
							<td class="table-label text-nowrap">仓库(工厂)代码<span class="notempty">*</span></td>
							<td>
								<div class="form-group">
									<input class="input-sm form-control" id="storeCode" name="storeCode" isValidate="true" notempty maxlength="18">
								</div>
							</td>
							<td class="table-label text-nowrap" >仓库(工厂)名称<span class="notempty">*</span></td>
							<td>
								<div class="form-group">
									<input class="input-sm form-control" id="storeName" name="storeName" isValidate="true" notempty maxlength="60">
								</div>
							</td>

							<td class="table-label text-nowrap" >仓库(加工)批准证编号<span class="notempty">*</span></td>
							<td>
								<div class="form-group">
									<input class="input-sm form-control" id="storeLicence" name="storeLicence" isValidate="true" notempty maxlength="20">
								</div>
							</td>
						</tr>

						<tr>
							<td class="table-label text-nowrap">仓库(工厂)面积<span class="notempty">*</span></td>
							<td>
								<div class="form-group">
									<input type="number" step="0.00001" class="input-sm form-control" id="storeArea" name="storeArea" isValidate="true" notempty maxlength="18">
								</div>
							</td>
							<td class="table-label text-nowrap">仓库(工厂)体积<span class="notempty">*</span></td>
							<td>
								<div class="form-group">
									<input type="number" step="0.00001" class="input-sm form-control" id="storeVolume" name="storeVolume" isValidate="true" notempty maxlength="18">
								</div>
							</td>
							<td class="table-label text-nowrap">仓库(工厂)地址<span class="notempty">*</span></td>
							<td>
								<div class="form-group">
									<input  class="input-sm form-control" id="storeAddress" name="storeAddress" isValidate="true" notempty maxlength="128">
								</div>
							</td>
						</tr>

						<tr>
							<td class="table-label text-nowrap">仓库类型<span class="notempty">*</span></td>
							<td>
								<div class="form-group">
									<input class="input-sm form-control" id="storeType" name="storeType" isValidate="true" notempty maxlength="20">
								</div>
							</td>
							<td class="table-label text-nowrap">储位数量<span class="notempty">*</span></td>
							<td>
								<div class="form-group">
									<input type="number" step="1" class="input-sm form-control" id="storeNumber" name="storeNumber" isValidate="true" notempty maxlength="10">
								</div>
							</td>
							<td class="table-label text-nowrap">加工范围<span class="notempty">*</span></td>
							<td>
								<div class="form-group">
									<input class="input-sm form-control" id="procRang" name="procRang" isValidate="true" notempty maxlength="255">
								</div>
							</td>
						</tr>
						<tr>
							<td class="table-label text-nowrap">备注</td>
							<td colspan="5"><textarea class="form-control" rows="2" id="remarks" name="remarks"></textarea></td>
						</tr>
					</table>
					<div style="display: none;">
						<input type="hidden" name="uid">
						<input type="hidden" name="seqNo">
					</div>
				</form>
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
		<script src="../../../static/common/bootstrap-table-master/bootstrap-table.min.js"></script>
		<script src="../../../static/common/bootstrap-table-master/extensions/export/bootstrap-table-export.js"></script>
		<script src="../../../static/common/bootstrap-table-master/tableExport.js"></script>
		<script src="../../../static/common/bootstrap-table-master/locale/bootstrap-table-zh-CN.min.js"></script>
		<script src="../../../static/common/select2/js/select2.full.js"></script>
		<script src="../../../static/common/select2/js/i18n/zh-CN.js"></script>
		<script src="../../../static/common/bootstrap-table-master/extensions/export/bootstrap-table-export.js"></script>
		<script src="../../../static/common/bootstrapvalidator-master/js/bootstrapValidator.min.js"></script>
		<script src="../../../static/common/bootstrapvalidator-master/js/language/zh_CN.js"></script>
		<!-- 自定义js -->
		<script src="../../../static/common/js/common.js"></script>
		<script src="../../../static/cop/js/modal.js"></script>
	</footer>
</body>
</html>