<%@ page language="java" contentType="text/html; charset=utf-8"%>
<!DOCTYPE HTML>
<html>
<head>
	<title>核放单关联表证</title>
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
	<style>
		.sas_bsc{display: none;}
	</style>
</head>
<body class="gray-bg">
<div class="animated fadeInRight">
	<!-- 保税核注清单 -->
	<form id="searchForm">
		<div class="ibox">
			<div class="ibox-content">
				<div style="display: none;" id="hidSearchParam">
					<%--<input type="hidden" name="chkStatus" value="P">--%><!-- 单据状态 -->
					<input type="hidden" name="isFilterRlt" value="1"><!--过滤已被使用的数据-->
				</div>
				<!-- 第一行 -->
				<div class="row m-b-sm">
					<div class="col-sm-6 form-horizontal inv_bsc">
						<label class="col-sm-4 control-label text-nowrap text-right">保税清单编号</label>
						<div class="col-sm-8">
							<input type="text" class="form-control input-sm" id="bondInvtNo" name="bondInvtNo">
						</div>
					</div>
					<div class="col-sm-6 form-horizontal inv_bsc">
						<label class="col-sm-4 control-label text-right text-nowrap">经营企业</label>
						<div class="col-sm-8">
							<input type="text" class="form-control input-sm" id="bizopEtpsNm" name="bizopEtpsNm">
						</div>
					</div>
					<div class="col-sm-6 form-horizontal sas_bsc">
						<label class="col-sm-4 control-label text-nowrap text-right">出入库单编号</label>
						<div class="col-sm-8">
							<input type="text" class="form-control input-sm" id="sasStockNo" name="sasStockNo">
						</div>
					</div>
					<div class="col-sm-6 form-horizontal sas_bsc">
						<label class="col-sm-4 control-label text-right text-nowrap">申报表编号</label>
						<div class="col-sm-8">
							<input type="text" class="form-control input-sm" id="sasDclNo" name="sasDclNo">
						</div>
					</div>
				</div>
				<!-- 第二行 -->
				<div class="row m-b-sm">
					<div class="col-sm-6 form-horizontal inv_bsc">
						<label class="col-sm-4 control-label text-right text-nowrap">清单申报日期</label>
						<div class="col-sm-8">
							<div class="input-group">
								<input type="text" class="form-control input-sm datepicker" id="invtDclTimeStart" name="invtDclTimeStart" data-date-format="yyyy-mm-dd">
								<span class="input-group-addon">到</span>
								<input type="text" class="form-control input-sm datepicker" id="invtDclTimeEnd" name="invtDclTimeEnd" data-date-format="yyyy-mm-dd">
							</div>
						</div>
					</div>
					<div class="col-sm-6 form-horizontal sas_bsc">
						<label class="col-sm-4 control-label text-right text-nowrap">录入日期</label>
						<div class="col-sm-8">
							<div class="input-group">
								<input type="text" class="form-control input-sm datepicker" id="decTimeStart" name="decTimeStart" data-date-format="yyyy-mm-dd">
								<span class="input-group-addon">到</span>
								<input type="text" class="form-control input-sm datepicker" id="decTimeEnd" name="decTimeEnd" data-date-format="yyyy-mm-dd">
							</div>
						</div>
					</div>
					<div class="col-sm-6 pull-right text-right">
						<div class="col-sm-4"></div>
						<div class="col-sm-8">
							<button type="button" class="btn btn-success btn-sm" id="rltSearch">搜索</button>
							<button type="reset" class="btn btn-default btn-sm"> 清除</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</form>
	<form id="rltModalForm">
		<div class="ibox-content">
			<div class="row">
				<div class="col-md-12">
					<a href="javascript:void(0)" class="btn btn-info fa fa-check-square" id="rltModalSave">确认</a>
					<a href="javascript:void(0)" class="btn btn-default fa fa-mail-reply" id="rltModalReback">返回</a>
					<table id="invBacTab"></table>
				</div>
			</div>
		</div>
		<input type="hidden" name="seqNo">
	</form>
</div>
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
<script src="../../../static/saspass/js/sasPassportRltModal.js"></script>
</body>
</html>