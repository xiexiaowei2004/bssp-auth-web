<%@ page language="java" contentType="text/html; charset=utf-8"%>
<!DOCTYPE HTML>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <title>表体</title>
    <link rel="stylesheet" href="../../../static/common/bootstrap-table-master/bootstrap-table.min.css" />
    <link rel="stylesheet" href="../../../static/common/bootstrap-datepicker-master/css/bootstrap-datepicker3.min.css" />
    <link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css" />
    <link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css" />
    <link rel="stylesheet" href="../../../static/common/select2/css/select2.min.css" type="text/css">
    <link rel="stylesheet" href="../../../static/common/bootstrapvalidator-master/css/bootstrapValidator.min.css" type="text/css">
    <link rel="stylesheet" href="../../../static/admin/main/css/animate.css" />
    <link rel="stylesheet" href="../../../static/common/css/style.css" />
    <link rel="stylesheet" href="../../../static/common/css/common.css" />

</head>
<body>
	<header>
		<div>
		<div class="ibox" id="head">
			<div class="ibox-title no-margins">
				<div class="pull-left">
					<a href="#1" class="btn btn-info fa fa- mail-reply" id="reback">返回</a>
				</div>
				
			</div>
			<div class="clearfix"></div>
			<div class="ibox-content">
			<form id="dataForm">
						<input type="hidden" id="uid" name="uid">
               			 <input type="hidden" id="ediSeqUid" name="ediSeqUid">
					<table class="table table-condensed no-border">
						<tr>
							<td class="table-label text-nowrap" style="width:100px;">参数编号<span class="notempty">*</span></td>
							<td>
								<div class="form-group">
									<input class="input-sm form-control" placeholder="请输入参数编号" id="paramNo" name="paramNo"  notempty>
								</div>
							</td>
							<td class="table-label text-nowrap">参数说明<span class="notempty">*</span></td>
							<td>
								<input class="input-sm form-control"  id="paramNote" name="paramNote">
							</td>
							
						</tr>
						<tr>
						<td class="table-label text-nowrap" >是否启用<span class="notempty">*</span></td>
							<td>
								<div class="form-group">
									<select class="input-sm form-control" id="status" name="status"  dll_name="IS_ENABLE" notempty style="width: 100%"></select>
								
										
								</div>
								
							</td>
							<td class="table-label text-nowrap">排序<span class="notempty">*</span></td>
							<td>
								<div class="form-group">
									<input class="input-sm form-control" placeholder="排序" id="orderNo" name="orderNo"  notempty>
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
    <script src="../../../static/common/bootstrap-table-master/bootstrap-table.min.js"></script>
    <script src="../../../static/common/bootstrap-table-master/locale/bootstrap-table-zh-CN.min.js"></script>
    <!-- 自定义js -->
    <script src="../../../static/admin/main/js/contabs.js"></script>
    <script src="../../../static/common/js/common.js"></script>
    <script src="../../../static/cod_cus/js/ediSeqList_upload.js"></script>
  
   
</footer>
</body>
</html>