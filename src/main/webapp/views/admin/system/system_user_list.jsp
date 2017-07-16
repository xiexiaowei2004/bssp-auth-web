<%@ page language="java" import="java.util.*" contentType="text/html; charset=utf-8"%>
<!DOCTYPE HTML>
<html>
  <head>
    <title>用户列表</title>
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
                        <h5>搜索查询</h5>
                        <div class="ibox-tools">
                            <a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                            <a class="close-link"><i class="fa fa-times"></i></a>
                        </div>
                    </div>
                    <div class="ibox-content search-query">
                    <form method="post" id="searchForm">
                        <div class="col-sm-6">
                            <div class="form-group" id="data_5">
                                <label class="control-label">添加时间</label>
                                <div class="input-daterange input-group" id="datepicker">
                                    <input type="text" class="form-control" name="queryUser.beginCreateTime" value="" />
                                    <span class="input-group-addon">到</span>
                                    <input type="text" class="form-control" name="queryUser.endCreateTime" value="" />
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label class="control-label">会员名称</label>
                                <div class="input-group">
                                    <input type="text" class="form-control" name="queryUser.searchContent"> 
                                    <span class="input-group-btn"><button type="button" class="btn btn-primary" id="buttonSearch">搜索</button> </span>
                                </div>
                            </div>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
       </div>
       <div class="row">
            <div class="col-sm-12">
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>用户信息</h5>
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
                                             <button id="add" type="button" class="btn btn-default" title="创建用户">
                                                <i class="glyphicon glyphicon-plus"></i>
                                            </button>
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
       <script src="../../../static/common/jquery/jquery-3.1.1.min.js"></script>
        <script src="../../../static/common/jquery/jquery-ui.min.js"></script>
        <script src="../../../static/common/layer/layer.js"></script>

        <script src="../../../static/common/bootstrap/js/bootstrap.min.js"></script>
        <!-- Bootstrap table -->
        <script src="../../../static/common/bootstrap-table-master/bootstrap-table.min.js"></script>
        <script src="../../../static/common/bootstrap-table-master/extensions/export/bootstrap-table-export.js"></script>
        <script src="../../../static/common/bootstrap-table-master/tableExport.js"></script>
        <script src="../../../static/common/bootstrap-table-master/locale/bootstrap-table-zh-CN.min.js"></script>
        <!-- Data picker -->
        <script src="../../../static/common/bootstrap-datepicker-master/js/bootstrap-datepicker.min.js"></script>
        <!-- 自定义js -->
		<script src="../../../static/admin/main/js/content.js"></script>
        <script src="../../../static/common/js/common.js"></script>
    	<!-- 自定义js -->
    <script src="../../../static/admin/main/js/sysuser-list.js"></script>
    </tiziFooter>

  </body>
</html>
