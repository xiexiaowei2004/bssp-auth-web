<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>日志-查阅</title>
    <link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css" />
    <link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css" />
    <link rel="stylesheet" href="../../../static/admin/main/css/animate.css" />
    <link rel="stylesheet" href="../../../static/common/css/style.css" />
    <link rel="stylesheet" href="../../../static/common/css/common.css" />
</head>
<body class="gray-bg">
<div class="container animated fadeInRight">
    <div class="ibox">
        <div class="ibox-title font-bold"><h5>日志-查阅</h5>
            <a href="#1" class="collapse-link pull-right" title="收起"><i class="fa fa-chevron-up"></i></a>
        </div>
            <div class="ibox-content">
                <form id="form" class="form-horizontal">
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">主键编码<span style="color:red;">*</span>：</label>
                        <div class="col-sm-4">
                            <span id="id" name="id" class="view-span"></span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">应用编码<span style="color:red;">*</span>：</label>
                        <div class="col-sm-4">
                            <span id="applyId" name="applyId" class="view-span"></span>
                        </div>
                    </div>
                 
                      <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">Ip号<span style="color:red;">*</span>：</label>
                        <div class="col-sm-4">
                            <span id="iP" name="ip" class="view-span"></span>
                        </div>
                        </div>
                        
                        
                        <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">问题类型<span style="color:red;">*</span>：</label>
                        <div class="col-sm-4">
                            <span id="type" name="type" class="view-span"></span>
                        </div>
                 
                 
                    <!--   <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">问题类型<span style="color:red;">*</span>：</label>
                        <div class="col-sm-4">
                            <span id="type" name="type" class="view-span"></span>
                        </div> -->
                
                    <div class="hr-line-dashed"></div>
                    <div class="form-group">
                        <div class="text-center">
                          
                            <button class="btn btn-primary" type="button" id="reback" 
                            onclick="Utils.redirect('../../../views/cod_cus/systemLog/list.jsp')">返回</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
<tiziFooter>
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
    <script src="../../../static/cod_cus/js/systemLog.js"></script>
</tiziFooter>
<script>
    $(function () {
        FormUtils.getData();
    });
</script>
</body>
</html>