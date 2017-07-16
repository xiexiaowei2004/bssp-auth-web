<%@ page language="java" contentType="text/html; charset=utf-8" %>
<!DOCTYPE HTML>
<html>
<head>
    <meta charset="UTF-8">
    <title>应用参数列表</title>
   <link rel="stylesheet" href="../../../static/common/bootstrap-table-master/bootstrap-table.min.css"/>
    <link rel="stylesheet" href="../../../static/common/bootstrap-datepicker-master/css/bootstrap-datepicker.min.css"/>
    <link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css"/>
    <link rel="stylesheet" href="../../../static/admin/main/css/animate.css"/>
    <link rel="stylesheet" href="../../../static/admin/main/css/style.css"/>
</head>

<body class="gray-bg">
<div class="wrapper wrapper-content animated fadeInRight">
    <div class="container animated fadeInRight">
    <form id="searchForm">
        <div class="ibox">
            <div class="ibox-title font-bold">查询条件</div>
            <div class="ibox-content">
                <div class="row m-b-sm">
                
                    <div class="col-md-3 form-horizontal">
                        <label class="col-sm-3 control-label text-nowrap text-right">应用编码</label>
                        <div class="col-sm-9">
                            <input type="text" id="applyId" name="applyId" class="form-control input-sm">
                        </div>
                    </div>
                    
                     <div class="col-md-4 form-horizontal">
                        <label class="col-sm-4 control-label text-nowrap text-right">应用名称</label>
                        <div class="col-sm-8">
                            <input type="text" id="applyName" name="applyName" class="form-control input-sm">
                        </div>
                    </div>
                    </div>
                    
                    <div class="row">
                    <div class="col-md-4 pull-right text-right">
                        <div class="col-sm-4"></div>
                        <div class="col-sm-8">
                            <button type="button" class="btn btn-success btn-sm" id="search">搜索</button>
                            <button type="reset" class="btn btn-default btn-sm">清除</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
          </form>
       <!--ibox-->
        <div class="ibox-title font-bold">应用维护</div>
    <div class="ibox-content">
      
			<div class="row">
                  <div class="col-md-12">    
					  <a href="#1" class="btn btn-info fa fa-refresh" id="refreshBtn"> 刷新</a>
					  <span class="m-r-sm"></span>
					  <a href="#1" class="btn btn-info fa fa-info-circle" id="view"> 查阅</a>
					  <a href="#1" class="btn btn-info fa fa-plus-square" id="add"> 新增</a>
					  <a href="#1" class="btn btn-info fa fa-edit" id="modify"> 修改</a>
					  <a href="#1" class="btn btn-info fa fa-remove" id="delete"> 删除</a>
				
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
    <script src="../../../static/cod_cus/js/codCusApply.js"></script>
</tiziFooter></div>
</body>
</html>
