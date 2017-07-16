<%@ page language="java" contentType="text/html; charset=utf-8"%>
<!DOCTYPE HTML>
<html>
<head>
	<title>车辆信息变更</title>
	<meta name="keywords" content="BSSP">
	<meta name="description" content="BSSP">
	<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
	<link rel="shortcut icon" href="../../../favicon.ico" type="image/x-icon">
	<link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css" type="text/css">
	<link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css" type="text/css">
	<link rel="stylesheet" href="../../../static/admin/main/css/animate.css" type="text/css">
	<link rel="stylesheet" href="../../../static/common/css/style.css" />
	<link rel="stylesheet" href="../../../static/common/bootstrap-table-master/bootstrap-table.min.css" type="text/css">
	<link rel="stylesheet" href="../../../static/common/bootstrap-datepicker-master/css/bootstrap-datepicker.min.css" type="text/css">
	<link rel="stylesheet" href="../../../static/common/select2/css/select2.min.css" type="text/css">
</head>
<body class="gray-bg">
<div class="animated fadeInRight">
	<form id="searchForm">
		<div class="ibox">
			<div class="ibox-content" style="padding-bottom: 0">
				<div class="row m-b-sm">
					<div class="col-md-3 form-horizontal">
						<label class="col-sm-4 control-label text-nowrap text-right">出入库单编号</label>
						<div class="col-sm-8">
							<input type="text" name="sasStockNo" class="form-control input-sm">
						</div>
					</div>
					<div class="col-md-4 form-horizontal">
						<label class="col-sm-4 control-label text-nowrap text-right">企业预录入编号</label>
						<div class="col-sm-8">
							<input type="text" name="etpsPreentNo" class="form-control input-sm">
						</div>
					</div>
					<div class="col-md-5 form-horizontal">
						<label class="col-sm-3 control-label text-nowrap text-right">申报表编号</label>
						<div class="col-sm-9">
							<input type="text" name="sasDclNo" class="form-control input-sm">
						</div>
					</div>
				</div>

				<!--第二行-->
				<div class="row">
					<div class="col-sm-3 pull-right text-right">
						<div class="col-sm-2"></div>
						<div class="col-sm-10">
							<button type="button" id="search" class="btn btn-success btn-sm"><i class="fa fa-search"></i> 搜索</button>
							<button type="reset" class="btn btn-default btn-sm" id="resetBtn"><i class="fa fa-times"></i> 清除</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</form>
	<div class="ibox-content">
		<div class="row">
			<div class="col-md-12">
				<%--<a href="javascript:void(0)" class="btn btn-info fa fa-refresh" id="refreshBtn">刷新</a>--%>
				<%--<span class="m-r-sm"></span>--%>
				<a href="javascript:void(0)" class="btn btn-info fa fa-check-square" id="ok">确认</a>
				<a href="javascript:void(0)" class="btn btn-info fa fa-mail-reply" id="cancel">返回</a>
				<table id="table"></table>
			</div>
		</div>
	</div>
	<%--<div class="row">
		<div class="col-sm-12">
			<div class="ibox float-e-margins">
				<div class="ibox-content">
					<div class="row row-lg">
						<div class="col-sm-12">
							<div class="example-wrap">
								<div class="example">
									<div id="toolbar" class="btn-group m-t-sm">
										<button id="ok" type="button" class="btn btn-info fa fa-check-square" title="确定">
											确认
										</button>
										<span class="m-r-sm"></span>
										<button id="cancel" type="button" class="btn btn-default fa fa-mail-reply" title="取消">
											返回
										</button>
									</div>
									<table id="table">
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>--%>
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
<script src="../../../static/common/bootstrap-table-master/extensions/export/bootstrap-table-export.js"></script>
<script src="../../../static/common/bootstrapvalidator-master/js/bootstrapValidator.min.js"></script>
<script src="../../../static/common/bootstrapvalidator-master/js/language/zh_CN.js"></script>
<!-- Data picker -->
<script src="../../../static/common/bootstrap-datepicker-master/js/bootstrap-datepicker.min.js"></script>
<!-- 自定义js -->
<script src="../../../static/admin/main/js/contabs.js"></script>
<script src="../../../static/common/js/common.js"></script>
<script src="../../../static/sas/js/sasStockCancel.js"></script>
</body>
</html>