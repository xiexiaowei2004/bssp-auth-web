<%@ page language="java" contentType="text/html; charset=utf-8" %>
<!DOCTYPE HTML>
<html>
<head>
    <meta charset="UTF-8">
    <title>商品税则参数列表</title>
    <link rel="stylesheet" href="../../../static/common/bootstrap-table-master/bootstrap-table.min.css"/>
    <link rel="stylesheet" href="../../../static/common/bootstrap-datepicker-master/css/bootstrap-datepicker.min.css"/>
    <link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css"/>
    <link rel="stylesheet" href="../../../static/admin/main/css/animate.css"/>
    <link rel="stylesheet" href="../../../static/common/css/style.css" />
    <link rel="stylesheet" href="../../../static/common/css/common.css" />
</head>

<body class="gray-bg">
<div class="animated fadeInRight">
    <form id="searchForm">
		<%--<div class="ibox">--%>
			<%--<div class="ibox-content">--%>
				<%--<div class="row m-b-sm">--%>
					<%--<div class="col-md-4 form-inline">--%>
						<%--<label class="col-sm-2 control-label text-nowrap text-right">商品编码</label>--%>
						<%--<div class="col-sm-4">--%>
							<input type="hidden" name="codeT" id="codeT"/>
						<%--</div>--%>
					<%--</div>--%>
					<%--<div class="col-sm-3">--%>
						<%--<button type="button" id="search" class="btn btn-success btn-sm">搜索</button>--%>
						<%--<button type="reset" class="btn btn-default btn-sm">清除</button>--%>
					<%--</div>--%>
				<%--</div>--%>
			<%--</div>--%>
		<%--</div>--%>
	</form>
 
 <!--ibox-->
	<!-- <div class="ibox-title font-bold">商品参数</div> -->
		<div class="ibox-content">
			<div class="row">
				<div class="col-md-12">
					<span class="m-r-sm">
						<a href="javascript:void(0)" class="btn btn-info fa fa-check-square" id="affirm">确认</a>
                		<a href="javascript:void(0)" class="btn btn-info fa fa-mail-reply" id="reback">返回</a>
					</span>
					<table id="table"></table>
				</div>
			</div>
		</div>
</div>

<tiziFooter>
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
    <script src="../../../static/common/bootstrap-datepicker-master/js/bootstrap-datepicker.min.js"></script>
    <!-- 自定义js -->
    <script src="../../../static/admin/main/js/contabs.js"></script>
    <script src="../../../static/common/js/common.js"></script>
    <script src="../../../static/cod_cus/js/codCusComplex_grid.js"></script>
</tiziFooter>
</body>
</html>
