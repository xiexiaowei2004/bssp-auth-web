<%@ page language="java" contentType="text/html; charset=utf-8"%>
<!DOCTYPE HTML>
<html>
<head>
	<title>选择页面</title>
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
    <link rel="stylesheet" href="../../../static/common/css/common.css" />
	<!--[if lt IE 9]>
	<script src="../../../static/common/html5shiv/html5shiv.min.js"></script>
	<script src="../../../static/common/html5shiv/respond.min.js"></script>
	<![endif]-->
</head>
<body>
	<div class="animated fadeInRight">
	    <form id="dataForm">
	       <div class="ibox">
	            <div class="ibox-content">
	                <div class="row m-b-sm">
	                    <div class="col-xs-12 form-horizontal">
	                        <label style="padding-top:5px;" class="col-xs-4 text-nowrap text-right">区内账册编号<span class="notempty">*</span></label>
	                        <div class="col-xs-8">
	                        	<div class="form-group">
		                            <select class="form-control" id="areainOriactNo" name="areainOriactNo" fieldName="区内账册编号"  isValidate="true" notempty>
									</select>
								</div>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        	<div class="ibox-content  box-solid text-center">
	        		<a href="javascript:void(0)" class="btn btn-info fa fa-save" id="save"> 确认</a>
					<a href="javascript:void(0)" class="btn btn-default fa fa-mail-reply" id="reback"> 取消</a>
	        	</div>
	        </div>
	    </form>
	</div>
</body>
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
	<!-- 自定义js -->
	<script src="../../../static/common/js/common.js"></script>
	<script src="../../../static/sas_mnl/js/sasDclModal.js"></script>
</footer>
</body>
</html>