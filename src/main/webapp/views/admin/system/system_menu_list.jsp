<%@ page language="java" import="java.util.*" contentType="text/html; charset=utf-8"%>
<!DOCTYPE HTML>
<html>
  <head>
    <title>菜单列表</title>
    <link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css" />
    <link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css" />
    <link rel="stylesheet" href="../../../static/admin/main/css/animate.css" />
    <link rel="stylesheet" href="../../../static/common/css/style.css" />
    <link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css" />
    <link rel="stylesheet" href="../../../static/common/bootstrap-table-master/bootstrap-table.min.css" />
    <link rel="stylesheet" href="../../../static/common/bootstrap-datepicker-master/css/bootstrap-datepicker.min.css" />
    <link rel="stylesheet" href="../../../static/common/bootstrap-table-master/bootstrap-table.min.css">
  </head>
  
  <body class="gray-bg">
	<div class="wrapper wrapper-content animated fadeInRight">
       <div class="row">
            <div class="col-sm-12">
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>菜单列表</h5>
                        <div class="ibox-tools">
                            <a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                            <a class="close-link"><i class="fa fa-times"></i></a>
                        </div>
                    </div>
                    <div class="ibox-content">
                        <div class="row row-lg">
                            <div class="col-sm-12">
                                <div class="example-wrap">
                                    <div class="example">
                                        <div id="toolbar" class="btn-group m-t-sm">
                                            <button id="add" type="button" class="btn btn-default" title="创建菜单">
                                                <i class="glyphicon glyphicon-plus"></i>
                                            </button>
                                             <!-- <button id=delete type="button" class="btn btn-default" title="删除菜单">
                                                <i class="glyphicon glyphicon-trash"></i>
                                            </button>  -->
                                        </div>
                                        <table id="dataGrid" class="table table-hover"></table>
                                    </div>
                                </div>
                        	</div>
                    	</div>
                    </div>
                </div>
            </div>
    	</div>
    </div>
    <tiziFooter>
         <!-- jquery-ui-->
        <script src="../../../static/common/jquery/jquery-3.1.1.min.js"></script>
        <script src="../../../static/common/jquery/jquery-ui.min.js"></script>
        <script src="../../../static/common/layer/layer.js"></script>

        <script src="../../../static/common/bootstrap/js/bootstrap.min.js"></script>
        <!-- Bootstrap table -->
        <script src="../../../static/common/bootstrap-table-master/bootstrap-table.js"></script>
        <script src="../../../static/common/bootstrap-table-master/extensions/export/bootstrap-table-export.js"></script>
        <script src="../../../static/common/bootstrap-table-master/tableExport.js"></script>
        <script src="../../../static/common/bootstrap-table-master/locale/bootstrap-table-zh-CN.min.js"></script>
        <!-- Data picker -->
        <script src="../../../static/common/bootstrap-datepicker-master/js/bootstrap-datepicker.min.js"></script>
        <!-- 全局js -->
        <script> var t1 = new Date().getTime();</script>
        <!-- 自定义js -->
		<script src="../../../static/admin/main/js/content.js"></script>
        <script src="../../../static/common/js/common.js"></script>
        <!-- 自定义js -->
    
    <!-- 自定义js -->
    <script src="../../../static/admin/main/js/sysmenu-list.js"></script>
    </tiziFooter>

  </body>
</html>
