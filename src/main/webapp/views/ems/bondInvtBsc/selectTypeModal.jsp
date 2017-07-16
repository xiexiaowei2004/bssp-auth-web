<%@ page language="java" contentType="text/html; charset=utf-8"%>
<!DOCTYPE HTML>
<html>
<head>
	<title>合并类型选择</title>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
	<link rel="stylesheet" href="../../../static/common/bootstrap-table-master/bootstrap-table.min.css" />
	<link rel="stylesheet" href="../../../static/common/bootstrap-datepicker-master/css/bootstrap-datepicker3.min.css" />
	<link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css" />
	<link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css" />
	<link rel="stylesheet" href="../../../static/common/select2/css/select2.min.css" type="text/css">
	<link rel="stylesheet" href="../../../static/admin/main/css/animate.css" />
	<link rel="stylesheet" href="../../../static/common/css/style.css" />
	<!--[if lt IE 9]>
	<script src="../../../static/common/html5shiv/html5shiv.min.js"></script>
	<script src="../../../static/common/html5shiv/respond.min.js"></script>
	<![endif]-->
</head>
<body class="hold-transition skin-blue sidebar-mini">
<header>
	<div class="box box-primary no-margin">
		<div class="box-body no-margin">
			<form id="typeModalForm">
				<div class="ibox">
					<div class="ibox-content  text-center">
						<div class="row"></div>
						<div class="row">
							<div class="col-xs-12 form-horizontal">
								<!-- <label class="col-xs-2 control-label">合并类型选择</label> -->
								<div class="col-sm-12 col-xs-12">
									<label>
										<input type="radio" name="mergeType" value="1" checked> 自动合并
									</label>
									<span class="m-r-sm"></span>
									<label>
										<input type="radio" name="mergeType" value="2"> 一对一合并
									</label>
									<span class="m-r-sm"></span>
									<label>
										<input type="radio" name="mergeType" value="3"> 手动合并
									</label>								
								</div>
							</div>
						</div>
					</div>
					<div class="ibox-content text-center">
						<a href="#1" class="btn btn-info fa fa-save" id="typeModalSave"> 确认</a>
						<a href="#1" class="btn btn-info fa fa-mail-reply" id="typeModalReback"> 取消</a>
					</div>
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
	<script src="../../../static/bond/js/selectTypeModal.js"></script>
</footer>
</body>
</html>