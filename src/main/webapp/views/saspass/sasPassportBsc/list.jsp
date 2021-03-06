<%@ page language="java" contentType="text/html; charset=utf-8"%>
<!DOCTYPE HTML>
<html>
<head>
	<title>出入区核放单</title>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
	<link rel="shortcut icon" href="../../../favicon.ico" type="image/x-icon">
	<link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css" type="text/css">
	<link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css" type="text/css">
	<link rel="stylesheet" href="../../../static/admin/main/css/animate.css" type="text/css">
	<link rel="stylesheet" href="../../../static/common/css/style.css" />
	<link rel="stylesheet" href="../../../static/common/bootstrap-table-master/bootstrap-table.min.css" type="text/css">
	<link rel="stylesheet" href="../../../static/common/bootstrap-datepicker-master/css/bootstrap-datepicker.min.css" type="text/css">
	<link rel="stylesheet" href="../../../static/common/select2/css/select2.min.css" type="text/css">
	<!--[if lt IE 9]>
	<script src="../../../static/common/html5shiv/html5shiv.min.js"></script>
	<script src="../../../static/common/html5shiv/respond.min.js"></script>
	<![endif]-->
</head>
<body class="gray-bg">
	<div class="container animated fadeInRight">
		<form id="searchForm">
			<div class="ibox">
				<div class="ibox-title font-bold">查询条件</div>
				<div class="ibox-content">
					<!-- 第一行 -->
					<div class="row m-b-sm">
						<div class="col-md-3 form-horizontal">
							<label class="col-sm-4 control-label text-nowrap text-right">核放单编号</label>
							<div class="col-sm-8">
								<input type="text" class="form-control input-sm" id="passportNo" name="passportNo">
							</div>
						</div>
						<div class="col-md-4 form-horizontal">
							<label class="col-sm-4 control-label text-right text-nowrap">企业预录入编号</label>
							<div class="col-sm-8">
								<input type="text" class="form-control input-sm" id="etpsPreentNo" name="etpsPreentNo">
							</div>
						</div>
						<div class="col-md-5 form-horizontal">
							<label class="col-sm-4 control-label text-right text-nowrap">绑定类型</label>
							<div class="col-sm-8">
								<select class="form-control select2"  id="bindTypecd" name="bindTypecd" dll_name="BIND_TYPECD" isShowEmpty="true"></select>
							</div>
						</div>
					</div>
					<!-- 第二行 -->
					<div class="row m-b-sm">
						<div class="col-md-3 form-horizontal">
							<label class="col-sm-4 control-label text-nowrap text-right">车牌号</label>
							<div class="col-sm-8">
								<input type="text" class="form-control input-sm" id="vehicleNo" name="vehicleNo">
							</div>
						</div>
						<div class="col-md-4 form-horizontal">
							<label class="col-sm-4 control-label text-right text-nowrap">IC卡号</label>
							<div class="col-sm-8">
								<input type="text" class="form-control input-sm" id="vehicleIcNo" name="vehicleIcNo">
							</div>
						</div>
						<div class="col-md-5 form-horizontal">
							<label class="col-sm-4 control-label text-right text-nowrap">车架号</label>
							<div class="col-sm-8">
								<input type="text" class="form-control input-sm" id="vehicleFrameNo" name="vehicleFrameNo">
							</div>
						</div>
					</div>
					<!-- 第三行 -->
					<div class="row m-b-sm">
						<div class="col-md-3 form-horizontal">
							<label class="col-sm-4 control-label text-nowrap text-right">申报类型</label>
							<div class="col-sm-8">
								<select class="form-control select2"  id="dclTypecd" name="dclTypecd" dll_name="DCL_TYPECD_STOCK" isShowEmpty="true"></select>
							</div>
						</div>
						<div class="col-md-4 form-horizontal">
							<label class="col-sm-4 control-label text-right text-nowrap">单据状态</label>
							<div class="col-sm-8">
								<select class="form-control select2" id="chkStatus" name="chkStatus" dll_name="CHK_STATUS" isShowEmpty="true"></select>
							</div>
						</div>
						<div class="col-md-5 form-horizontal">
							<label class="col-sm-4 control-label text-right text-nowrap">操作时间</label>
							<div class="col-sm-8">
								<div class="input-group">
									<input type="text" class="form-control input-sm datepicker" id="finishValidateDateStart" name="finishValidateDateStart" data-date-format="yyyy-mm-dd">
									<span class="input-group-addon">到</span>
									<input type="text" class="form-control input-sm datepicker" id="finishValidateDateEnd" name="finishValidateDateEnd" data-date-format="yyyy-mm-dd">
								</div>
							</div>
						</div>
					</div>
					<!-- 第四行 -->
					<div class="row m-b-sm">
						<div class="col-md-4 pull-right text-right">
							<div class="col-sm-4"></div>
							<div class="col-sm-8">
								<button type="button" class="btn btn-success btn-sm" id="search">搜索</button>
								<button type="button" class="btn btn-default btn-sm" id="reset"> 清除</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<%--<input type="hidden" name="ioTypecd">
			<input type="hidden" name="passportTypecd">--%>
		</form>

		<!--ibox-->
		<div class="ibox-title font-bold">核放单</div>
		<div class="ibox-content">
			<ul id="tab" class="nav nav-tabs box-top-line">
				<li class="active" id="applyTab"><a href="#applyTab" data-toggle="tab">预录入申报</a></li>
				<li id="cusTab"><a href="#cusTab" data-toggle="tab">审批(正式)数据</a></li>
				<li id="hisTab"><a href="#hisTab" data-toggle="tab">申报历史记录</a></li>
			</ul>
			<div class="row m-t-sm">
				<div class="col-md-12">
					<a href="#1" class="btn btn-info fa fa-refresh" id="refresh"> 刷新</a>
					<%--<span class="m-r-sm"></span>--%>
					<a href="#1" class="btn btn-info fa fa-info-circle" id="view"> 查阅</a>
					<span id="crudBtn">
						<a href="#1" class="btn btn-info fa fa-plus-square" id="add"> 新增</a>
						<a href="#1" class="btn btn-info fa fa-edit" id="edit"> 修改</a>
						<a href="#1" class="btn btn-info fa fa-remove" id="remove"> 删除</a>
						<span class="m-r-sm"></span>
						<a href="#1" class="btn btn-info fa fa-search" id="receipt"> 查看回执</a>
					</span>
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
	<script src="../../../static/common/bootstrap-table-master/extensions/export/bootstrap-table-export.js"></script>
	<script src="../../../static/common/bootstrapvalidator-master/js/bootstrapValidator.min.js"></script>
	<script src="../../../static/common/bootstrapvalidator-master/js/language/zh_CN.js"></script>
	<!-- Data picker -->
	<script src="../../../static/common/bootstrap-datepicker-master/js/bootstrap-datepicker.min.js"></script>
	<!-- 自定义js -->
	<script src="../../../static/admin/main/js/contabs.js"></script>
	<script src="../../../static/common/js/common.js"></script>
	<script src="../../../static/saspass/js/sasPassport_grid.js"></script>
</body>
</html>