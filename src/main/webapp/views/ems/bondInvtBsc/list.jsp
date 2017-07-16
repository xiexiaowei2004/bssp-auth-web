<%@ page language="java" contentType="text/html; charset=utf-8"%>
<!DOCTYPE HTML>
<html>
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
	<title>加工出入区核注清单</title>
	<link rel="stylesheet" href="../../../static/common/bootstrap-table-master/bootstrap-table.min.css" />
	<link rel="stylesheet" href="../../../static/common/bootstrap-datepicker-master/css/bootstrap-datepicker3.min.css" />
	<link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css" />
	<link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css" />
	<link rel="stylesheet" href="../../../static/common/select2/css/select2.min.css" type="text/css">
	<link rel="stylesheet" href="../../../static/admin/main/css/animate.css" />
	<link rel="stylesheet" href="../../../static/common/css/style.css" />
	<link rel="stylesheet" href="../../../static/common/css/common.css" />

	<!-- HTML5 Shim 和 Respond.js 用于使IE8支持html5和css3媒介查询 -->
	<!--[if lt IE 9]>
	<script src="../../../static/common/html5shiv/html5shiv.min.js"></script>
	<script src="../../../static/common/html5shiv/respond.min.js"></script>
	<![endif]-->
</head>
<body class="gray-bg">
<div class="container animated fadeInRight">
	<form id="searchForm">
		<input type="hidden" id="docType" name="docType"/>
		<input type="hidden" id="iEFlag1" name="iEFlag1"/>
		<div class="ibox">
			<div class="ibox-title font-bold">查询条件</div>
			<div class="ibox-content">
				<div class="row m-b-sm">
					<div class="col-md-4 form-horizontal">
						<label class="col-sm-5 control-label text-nowrap text-right">保税清单编号</label>
						<div class="col-sm-7">
							<input type="text" name="bondInvtNo" id="bondInvtNo" class="form-control input-sm">
						</div>
					</div>
					<%--	<div class="col-md-3 form-horizontal">
							<label class="col-sm-4 control-label text-nowrap text-right">出入区标识</label>
							<div class="col-sm-8">
								<select class="form-control select2 form-horizontal" id="iEFlag" isShowEmpty="true" name="iEFlag" dll_name="DIRECTION_TYPECD"></select>
							</div>
						</div>--%>
					<div class="col-md-5 form-horizontal">
						<label class="col-sm-3 control-label text-nowrap text-right">备案编号</label>
						<div class="col-sm-9">
							<input type="text" name="putrecNo" id="putrecNo" class="form-control input-sm">
						</div>
					</div>

					<div class="col-md-3 form-horizontal">
						<label class="col-sm-4 control-label text-right text-nowrap">单据状态</label>
						<div class="col-sm-8">
							<select class="form-control select2" id="chkStatus" name="chkStatus" dll_name="CHK_STATUS" isShowEmpty="true">
							</select>
						</div>
					</div>
				</div>
				<div class="row m-b-sm">
					<%--	<div class="col-md-4 form-horizontal">
							<label class="col-sm-4 control-label text-nowrap text-right">企业内部清单编号</label>
							<div class="col-sm-8">
								<input type="text" name="etpsInnerInvtNo" id="etpsInnerInvtNo" class="form-control input-sm">
							</div>
						</div>--%>
					<div class="col-md-4 form-horizontal">
						<label class="col-sm-5 control-label text-nowrap text-right">企业内部清单编号</label>
						<div class="col-sm-7">
							<input type="text" name="etpsInnerInvtNo" id="etpsInnerInvtNo" class="form-control input-sm">
						</div>
					</div>

					<div class="col-md-5 form-horizontal">
						<label class="col-sm-3 control-label text-right text-nowrap">操作时间</label>
						<div class="col-sm-9">
							<div class="input-group">
								<input type="text" class="form-control input-sm datepicker" id="decTimeStart" name="decTimeStart" data-date-format="yyyy-mm-dd">
								<span class="input-group-addon">到</span>
								<input type="text" class="form-control input-sm datepicker" id="decTimeEnd" name="decTimeEnd" data-date-format="yyyy-mm-dd">
							</div>
						</div>
					</div>
					<div class="col-md-3 form-horizontal">
						<label class="col-sm-4 control-label text-right text-nowrap">清单类型</label>
						<div class="col-sm-8">
							<%--<input class="form-control"  id="invtIochkptStucd" name="invtIochkptStucd" readonly>--%>
							<select class="form-control select2" id="bondInvtTypecd" name="bondInvtTypecd" isShowEmpty="true" dll_name="BOND_INVT_TYPECD"></select>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-4 pull-right text-right">
						<div class="col-sm-4"></div>
						<div class="col-sm-8">
							<button type="button" class="btn btn-success btn-sm" id="search">搜索</button>
							<button type="reset" class="btn btn-default btn-sm"> 清除</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</form>
	<!--ibox-->
	<div class="ibox-title font-bold" id="tableTitle"></div>
	<div class="ibox-content">
		<ul id="tab" class="nav nav-tabs box-top-line">
			<li class="active" id="invTab"><a href="#invTab" data-toggle="tab">预录入申报</a></li>
			<li id="cusTab"><a href="#cusTab" data-toggle="tab">审批(正式)数据</a></li>
			<li id="hisTab"><a href="#hisTab" data-toggle="tab">申报历史记录</a></li>
		</ul>
		<div class="row m-t-sm">
			<div class="col-md-12">
				<a href="#1" class="btn btn-info fa fa-refresh" id="refresh">刷新</a>
				<span class="m-r-sm"></span>
				<a href="#1" class="btn btn-info fa fa-info-o" id="view">查阅</a>
				<span id="crudBtn">
				<a href="#1" class="btn btn-info fa fa-plus-square" id="add">新增</a>
				<a href="#1" class="btn btn-info fa fa-edit" id="modify">修改</a>
				<a href="#1" class="btn btn-info fa fa-remove" id="delete">删除</a>
				<span class="m-r-sm"></span>
				<a href="javascript:void(0)" class="btn btn-info fa fa-search" id="receipt">查看回执</a>
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
<!-- Data picker -->
<script src="../../../static/common/bootstrap-datepicker-master/js/bootstrap-datepicker.js"></script>
<!-- select2 -->
<script src="../../../static/common/select2/js/select2.full.js"></script>
<script src="../../../static/common/select2/js/i18n/zh-CN.js"></script>
<!-- 自定义js -->
<script src="../../../static/admin/main/js/contabs.js"></script>
<script src="../../../static/bond/js/bondinvbsc_loadEvent.js"></script>
<script src="../../../static/common/js/common.js"></script>
<script src="../../../static/bond/js/bondinvtbsc_grid.js"></script>
</body>
</html>