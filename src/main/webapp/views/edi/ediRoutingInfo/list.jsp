<%@ page language="java" contentType="text/html; charset=utf-8"%>
<!DOCTYPE HTML>
<html>
<head>
	<meta charset="UTF-8">
    <title>路由配置</title>
    <link rel="stylesheet" href="../../../static/common/bootstrap-table-master/bootstrap-table.min.css" />
    <link rel="stylesheet" href="../../../static/common/bootstrap-datepicker-master/css/bootstrap-datepicker.min.css" />
    <link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css" />
    <link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css" />
    <link rel="stylesheet" href="../../../static/admin/main/css/animate.css" />
    <link rel="stylesheet" href="../../../static/common/select2/css/select2.min.css"/>
    <link rel="stylesheet" href="../../../static/common/css/style.css" />
</head>

<body class="gray-bg">
	<div class="container animated fadeInRight">
    <form method="post" id="searchForm">
			<div class="ibox">
				<div class="ibox-title font-bold">查询条件</div>
				<div class="ibox-content">
					<div class="row m-b-sm">
						<div class="col-md-4 form-horizontal">
							<label class="col-sm-4 control-label text-nowrap text-right">单据类型</label>
							<div class="col-sm-8">
                               <input type="text" class="form-control Col-sm-6" name="docType" id="docType">
							</div>
						</div>
						<div class="col-md-4 form-horizontal">
							<label class="col-sm-4 control-label text-nowrap text-right">业务类型</label>
							<div class="col-sm-8"> 
                               <input type="text" class="form-control Col-sm-6" name="bizType" id="bizType">
							</div>
						</div>
						<div class="col-md-4 form-horizontal">
							<label class="col-sm-4 control-label text-nowrap text-right">监管场所</label>
							<div class="col-sm-8">
								<select class="form-control select2-width input-sm" id="areaCode" name="areaCode" isShowEmpty="true" dll_name="codStdAreaCode">
								</select>
							</div>
						</div>
					</div>
						
					<div class="row m-b-sm">
						<div class="col-md-4 form-horizontal">
							<label class="col-sm-4 control-label text-nowrap text-right">报文头</label>
							<div class="col-sm-8">
								<input type="text" class="form-control Col-sm-6" name="proname" id="proName" />
							</div>
						</div>
						<div class="col-md-4 form-horizontal">
							<label class="col-sm-4 control-label text-nowrap text-right">启用标识</label>
							<div class="col-sm-8">
								<select class="form-control select2-width" id="status" name="status" isShowEmpty="true" dll_name="IS_VALIDATE" >
								</select>
							</div>
						</div>
						<div class="col-md-4 form-horizontal">
							<label class="col-sm-4 control-label text-nowrap text-right">传输类型</label>
							<div class="col-sm-8">
								<select class="form-control select2-width" id="passageway" name="passageway" isShowEmpty="true" dll_name="PASSAGEWAY" >
								</select>
							</div>
						</div>
					</div>
					
					<div class="row m-b-sm">
						<div class="col-md-4 pull-right text-right">
							<div class="col-sm-4"></div>
							<div class="col-sm-8">
								<button type="button" id="search" class="btn btn-success btn-sm"><i class="fa fa-search"></i> 搜索</button>
								<button type="reset" class="btn btn-default btn-sm" id="resetBtn"><i class="fa fa-times"></i> 清除</button>
							</div>
						</div>
					</div>			
				</div>
			</div>
		</form>
 
 <!--ibox-->
		<div class="ibox-title font-bold">列表数据</div>
		<div class="ibox-content">
			<div class="row">
				<div class="col-md-12">
					 <span class="m-r-sm">
						<a href="#1" class="btn btn-info fa fa-refresh" id="refreshBtn" onclick="sx()">刷新</a>
					</span>
					<span class="m-r-sm">
						<a href="#1" class="btn btn-info fa fa-info-circle" id="view">查阅</a>
						<a href="#1" class="btn btn-info fa fa-plus-square" id="add">新增</a>	
						<a href="#1" class="btn btn-info fa fa-edit" id="modify">修改</a>	
						<a href="#1" class="btn btn-info fa fa-remove" id=delete>删除</a>
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
    <script src="../../../static/common/select2/js/select2.full.js"></script>
    <script src="../../../static/admin/main/js/contabs.js"></script>
    <script src="../../../static/common/js/common.js"></script>
    <script src="../../../static/edi/js/ediRoutingInfo.js"></script>
</tiziFooter>
<script>
    $(function () {
        load();
    });
</script>
</body>
</html>
