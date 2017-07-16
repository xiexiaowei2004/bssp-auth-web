<%@ page language="java" contentType="text/html; charset=utf-8"%>
<!DOCTYPE HTML>
<html>
<head>
	<title>通用回执-查阅</title>
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
		#form td{ border: none; }
	</style>
</head>
<body class="gray-bg">
	<div class="container animated fadeInRight">
		<div class="ibox" id="head">
			<div class="ibox-title no-margins">
				<div class="pull-left">
					<a href="#1" class="btn btn-info fa fa-mail-reply" id="reback"> 返回</a>
				</div>
				<div class="pull-right">
					<a href="#1" class="collapse-link" title="收起表头"><i class="fa fa-chevron-up"></i></a>
				</div>
			</div>
			<div class="clearfix"></div>
			<div class="ibox-content">
				<form id="form">
					<!-- 隐藏字段 -->
					<div style="display:none;">
						<input type="hidden" id="uid" name="uid">
						<input type="hidden" name="seqNo">
					</div>
					<table class="table table-condensed no-borders no-margins">
						<tr>
							<td class="table-label text-nowrap text-right">企业备案号</td>
							<td><input class="form-control" id="seqNo" name="seqNo"></td>
							<td class="table-label text-nowrap text-right">企业海关代码</td>
							<td><input class="form-control" id="tradeCode" name="tradeCode" maxlength="10"></td>
							<td class="table-label text-nowrap text-right">社会信用代码</td>
							<td><input class="form-control"  id="copGbCode" name="copGbCode" maxlength="18"></td>
						</tr>
						<tr>
							<td class="table-label text-nowrap text-right">企业名称</td>
							<td colspan="6"><input class="input-sm form-control"  id="entName" name="entName" maxlength="128"></td>
						</tr>
						<tr>
							<td class="table-label text-nowrap text-right">企业地址</td>
							<td colspan="6"><input class="input-sm form-control"  id="entAddr" name="entAddr" maxlength="128"></td>
						</tr>
						<tr>
							<td class="table-label text-nowrap text-right">主管海关</td>
							<td>
								<select class="form-control select2-width form-horizontal" id="customsCode" name="customsCode" dll_name="codCusCustomsrel"></select>
							</td>
							<td class="table-label text-nowrap text-right">监管场所</td>
							<td>
								<select class="form-control select2-width form-horizontal" id="areaCode" name="areaCode" dll_name="codStdAreaCode"></select>
							</td>
							<td class="table-label text-nowrap text-right">企业性质</td>
							<td>
								<select class="form-control select2-width form-horizontal" id="entProperty" name="entProperty" dll_name="ENT_PROPERTY"></select>
							</td>
						</tr>
						<tr>
							<td class="table-label text-nowrap text-right">企业类型</td>
							<td>
								<select class="form-control select2-width form-horizontal" id="entType" name="entType" dll_name="codCusBusttype"></select>
							</td>
							<td class="table-label text-nowrap text-right">法人代表</td>
							<td><input class="form-control" id="lawMan" name="lawMan" maxlength="30"></td>
							<td class="table-label text-nowrap text-right">注册资本(万)</td>
							<td><input class="form-control" type="number" id="regFund" name="regFund" maxlength="18"></td>
						</tr>
						<tr>
							<td class="table-label text-nowrap text-right">联系人</td>
							<td><input class="form-control" id="contacCo" name="contacCo" maxlength="30"></td>
							<td class="table-label text-nowrap text-right">联系电话</td>
							<td><input class="form-control" type="number" id="telCo" name="telCo" maxlength="30"></td>
							<td class="table-label text-nowrap text-right">有效标识</td>
							<td>
								<select class="form-control select2-width form-horizontal" id="validFlag" name="validFlag" dll_name="IS_VALIDATE"></select>
							</td>
						</tr>
						<tr>
							<td class="table-label text-nowrap text-right">有效日期</td>
							<td><input class="input-sm form-control" name="" ></td>
							<td class="table-label text-nowrap text-right">经营范围</td>
							<td colspan="3"><input class="input-sm form-control" id="tradeArea" name="tradeArea" maxlength="255"></td>
						</tr>
						<tr>
							<td class="table-label text-nowrap text-right">备注</td>
							<td colspan="5"><textarea class="form-control" rows="2" id="remarks" name="remarks"></textarea></td>
						</tr>
						<tr>
							<td class="table-label text-nowrap text-right">操作员</td>
							<td><input class="input-sm form-control"  id="updateBy" name="updateBy" readonly></td>
							<td class="table-label text-nowrap text-right">备案日期</td>
							<td><input class="input-sm form-control"  id="regDate" name="regDate" readonly></td>
							<td class="table-label text-nowrap text-right">最后变更日期</td>
							<td><input class="input-sm form-control"  id="updateTime" name="updateTime" readonly></td>
						</tr>
					</table>
				</form>
			</div>
		</div>
		<div class="ibox">
			<div class="ibox-title">
				<h4 class="box-title pull-left">经营资料列表</h4>
				<div class="pull-right">
					<a href="#1" class="collapse-link" title="收起表头"><i class="fa fa-chevron-up"></i></a>
				</div>
			</div>
			<div  class="ibox-content"  style="height:300px;">
				<div  class="box-body"  style="height:300px;">
					<div id="fileToolbar">
						<a href="#1" class="btn btn-info fa fa-info-circle" id="find"> 查阅</a>
					</div>
					<form id="searchForm"><input type="hidden" name="seqNo"></form>
					<table id="table"></table>
				</div>
			</div>
		</div>
	</div>

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
	<script src="../../../static/common/bootstrapvalidator-master/js/bootstrapValidator.min.js"></script>
	<script src="../../../static/common/bootstrapvalidator-master/js/language/zh_CN.js"></script>
	<!-- Data picker -->
	<script src="../../../static/common/bootstrap-datepicker-master/js/bootstrap-datepicker.js"></script>
	<!-- 自定义js -->
	<script src="../../../static/admin/main/js/contabs.js"></script>
	<script src="../../../static/ems/js/emsputrecbsc_loadEvent.js"></script>
	<script src="../../../static/common/js/common.js"></script>
	<script src="../../../static/cop/js/copcom_view.js"></script>
	<script>
        FormUtils.setPageView();
	</script>
</body>
</html>