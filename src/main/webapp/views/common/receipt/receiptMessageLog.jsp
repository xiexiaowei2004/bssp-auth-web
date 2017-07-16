<%@ page language="java" contentType="text/html; charset=utf-8"%>
<!DOCTYPE HTML>
<html>
<head>
    <title>回执</title>
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
</head>
<body class="hold-transition skin-blue sidebar-mini gray-bg">

    <div >
       <%-- <div class="btn div-left-pad">
            <a href="#1" class="btn btn-info fa fa-mail-reply" id="reback"> 退出</a>
        </div>--%>
        <form id="searchForm">
            <input type="hidden" name="serialNo">
        </form>
    </div>
    <div class="box box-primary no-margin">
        <div class="box-body no-margin" id="head">
            <div class="ibox-content">
                <div class="row">
                    <div class="col-md-12">
                    	<span class="m-r-sm">
                        	<a href="#1" class="btn btn-info fa fa-info-circle" id="view"> 报文详情</a>
                    	</span>
                        <span class="m-r-sm">
                        	<a href="#1" class="btn btn-info fa fa-info-circle" id="find"> 查阅</a>
                        </span>
                        <span class="m-r-sm">
                            <a href="#1" class="btn btn-info fa fa-mail-reply" id="shut">返回</a>
                        </span>
                        <table id="table"></table>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <!-- 新增模态框（Modal） -->
	<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	    <div class="modal-dialog" style="width: 80%;">
	        <div class="modal-content">
	            <div class="modal-header caption">
	                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
	                <h4 class="modal-title" id="addModalLabel">报文详情</h4>
	            </div>
                <div class="ibox-content">
                    <button type="button" class="btn btn-info fa fa-mail-reply" data-dismiss="modal">返回</button>
                </div>

                <div class="modal-body ibox-content" style="padding-bottom: 0;">

	            </div>
	            <div class="ibox float-e-margins">
                    <table class="table table-striped table-bordered" style="width: 80%; margin: auto;" id="table1"></table>
						<div id="shur" class="text-center">
							<textarea  rows="12" cols="80%" id="bigData" readonly="readonly"></textarea>
						</div>
				</div>

	        </div><!-- /.modal-content -->
	    </div><!-- /.modal-dialog -->
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
    <script src="../../../static/common/js/common.js"></script>
    <script src="../../../static/common/js/receiptMessageLog.js"></script>
</body>
</html>