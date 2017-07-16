<%@ page language="java" contentType="text/html; charset=utf-8"%>
<!DOCTYPE HTML>
<html>
<head>
	<title>加工账册商品选择</title>
	<meta name="keywords" content="BSSP">
	<meta name="description" content="BSSP">
	<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
	<link rel="shortcut icon" href="../../../favicon.ico" type="image/x-icon">
	<link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css" type="text/css">
	<link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css" type="text/css">
	<link rel="stylesheet" href="../../../static/admin/main/css/animate.css" type="text/css">
	<link rel="stylesheet" href="../../../static/admin/main/css/style.css" type="text/css">
	<link rel="stylesheet" href="../../../static/common/bootstrap-table-master/bootstrap-table.min.css" type="text/css">
	<link rel="stylesheet" href="../../../static/common/bootstrap-datepicker-master/css/bootstrap-datepicker.min.css" type="text/css">
	<link rel="stylesheet" href="../../../static/common/select2/css/select2.min.css" type="text/css">
</head>
<body class="gray-bg">
<div class="animated fadeInRight">
	<form id="searchForm">
		<div class="ibox">
			<div class="ibox-content">
				<div class="row m-b-sm">
					<div class="col-sm-5 form-horizontal">
						<label class="col-sm-4 control-label text-nowrap text-right">出入库单编号</label>
						<div class="col-sm-8">
							<input type="text" class="form-control input-sm" id="sasStockNo" name="sasStockNo"/>
						</div>
					</div>
					<div class="col-sm-5 form-horizontal">
						<label class="col-sm-4 control-label text-nowrap text-right">申报表编号</label>
						<div class="col-sm-8">
							<input type="text" class="form-control input-sm" id="sasDclNo" name="sasDclNo">
						</div>
					</div>
					 <div class="col-sm-2 pull-right text-right">
						<div class="col-sm-12">
							<button type="button" class="btn btn-success btn-sm" id="search">查询</button>
							<button type="reset" class="btn btn-default btn-sm"> 清除</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</form>
	<div class="ibox-content">
		<div class="row">
			<div class="col-md-12">
				<a href="javascript:void(0)" class="btn btn-info fa fa-check-square" id="ok">确认</a>
				<a href="javascript:void(0)" class="btn btn-info fa fa-mail-reply" id="cancel">返回</a>
				<table id="table"></table>
			</div>
		</div>
	</div>
</div>
<script src="../../../static/common/jquery/jquery-3.1.1.min.js"></script>
<script src="../../../static/common/bootstrap/js/bootstrap.min.js"></script>
<script src="../../../static/admin/main/js/metisMenu/jquery.metisMenu.js"></script>
<script src="../../../static/admin/main/js/slimscroll/jquery.slimscroll.min.js"></script>
<script src="../../../static/common/jquery/jquery-ui.min.js"></script>
<script src="../../../static/common/layer/layer.js"></script>
<script src="../../../static/common/select2/js/select2.full.js"></script>
<script src="../../../static/common/select2/js/i18n/zh-CN.js"></script>
<!-- Bootstrap table -->
<script src="../../../static/common/bootstrap-table-master/bootstrap-table.min.js"></script>
<script src="../../../static/common/bootstrap-table-master/extensions/export/bootstrap-table-export.js"></script>
<script src="../../../static/common/bootstrap-table-master/tableExport.js"></script>
<script src="../../../static/common/bootstrap-table-master/locale/bootstrap-table-zh-CN.min.js"></script>
<script src="../../../static/common/bootstrapvalidator-master/js/bootstrapValidator.min.js"></script>
<script src="../../../static/common/bootstrapvalidator-master/js/language/zh_CN.js"></script>
<script src="../../../static/common/bootstrap-datepicker-master/js/bootstrap-datepicker.js"></script>
<!-- 自定义js -->
<script src="../../../static/admin/main/js/contabs.js"></script>
<script src="../../../static/common/js/common.js"></script>
<script src="../../../static/common/js/formCommon.js"></script>
<script src="../../../static/bond/js/sasPassport_list.js"></script>
<script>
    $(function () {
        load(false);
    });
</script>
</body>
</html>