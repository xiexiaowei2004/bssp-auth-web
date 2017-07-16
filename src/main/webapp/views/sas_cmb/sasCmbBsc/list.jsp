<%@ page language="java" contentType="text/html; charset=utf-8"%>
<!DOCTYPE HTML>
<html>
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <title>耗料单</title>
    <link rel="stylesheet" href="../../../static/common/bootstrap-table-master/bootstrap-table.min.css" />
    <link rel="stylesheet" href="../../../static/common/bootstrap-datepicker-master/css/bootstrap-datepicker3.min.css" />
    <link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css" />
    <link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css" />
    <link rel="stylesheet" href="../../../static/common/select2/css/select2.min.css" type="text/css">
    <link rel="stylesheet" href="../../../static/admin/main/css/animate.css" />
    <link rel="stylesheet" href="../../../static/common/css/style.css" />
    <link rel="stylesheet" href="../../../static/common/css/common.css"/>
</head>
<body class="gray-bg">
	<div class="container animated fadeInRight">
    <form id="searchForm">
       <div class="ibox">
        <div class="ibox-title font-bold">查询条件</div>
            <div class="ibox-content">
                <div class="row m-b-sm">
                    <div class="col-md-4 form-horizontal">
                        <label class="col-sm-4 control-label text-nowrap text-right">账册编号</label>
                        <div class="col-sm-8">
                            <input type="text" id="emsNo" name="emsNo" class="form-control input-sm">
                        </div>
                    </div>
                      <div class="col-md-3 form-horizontal">
                        <label class="col-sm-3 control-label text-nowrap text-right">申报类型</label>
                        <div class="col-sm-9">
                            <select class="form-control select2 form-horizontal" id="dclTypecd" name="dclTypecd" dll_name="DCL_TYPECD_STOCK">
                       			 <option value="">-请选择-</option>
                       			 </select>
                        </div>
                    </div>
                    <div class="col-md-5 form-horizontal">
                        <label class="col-sm-3 control-label text-nowrap text-right">耗料单编号</label>
                        <div class="col-sm-9">
                            <input type="text" id="cmbNo" name="cmbNo" class="form-control input-sm">
                        </div>
                    </div>
                  
                 </div>
                <div class="row m-b-sm">
                	<div class="col-md-4 form-horizontal">
                        <label class="col-sm-4 control-label text-nowrap text-right">耗料单预录入编号</label>
                        <div class="col-sm-8">
                            <input type="text" id="sasCmbPreentNo" name="sasCmbPreentNo" class="form-control input-sm">
                        </div>
                    </div>
                    
                    <div class="col-md-3 form-horizontal">
                        <label class="col-sm-3 control-label text-right text-nowrap">单据状态</label>
                        <div class="col-sm-9">
                            <select class="form-control select2" id="chkStatus" name="chkStatus" dll_name="CHK_STATUS">
                        	<option value="">-请选择-</option>
                        	 </select>
                        </div>
                    </div>
                    <div class="col-md-5 form-horizontal">
                        <label class="col-sm-3 control-label text-right text-nowrap">操作时间</label>
                        <div class="col-sm-9">
                            <div class="input-group">
                                <input type="text" class="form-control input-sm datepicker" id="dclTimeStart" name="dclTimeStart" data-date-format="yyyy-mm-dd">
                                <span class="input-group-addon">到</span>
                                <input type="text" class="form-control input-sm datepicker" id="dclTimeEnd" name="dclTimeEnd" data-date-format="yyyy-mm-dd">
                            </div>
                        </div>
                    </div>
                </div>
                <!--第二行-->
                <div class="row">
                    <div class="col-md-4 pull-right text-right">
                        <div class="col-sm-4"></div>
                        <div class="col-sm-8">
                            <button type="button" class="btn btn-success btn-sm" id="search">搜索</button>
                            <button type="reset" class="btn btn-default btn-sm"id="reset">清除</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
    <!--ibox-->
    <div class="ibox-title font-bold">耗料单列表</div>
    <div class="ibox-content">
      
			<div class="row">
                  <div class="col-md-12">    
					  <a href="#1" class="btn btn-info fa fa-refresh" id="refreshBtn"> 刷新</a>
					  <span class="m-r-sm"></span>
					  <a href="#1" class="btn btn-info fa fa-info-circle" id="view"> 查阅</a>
					  <a href="#1" class="btn btn-info fa fa-plus-square" id="add"> 新增</a>
					  <a href="#1" class="btn btn-info fa fa-edit" id="modify"> 修改</a>
					  <a href="#1" class="btn btn-info fa fa-remove" id="delete"> 删除</a>
					   <span class="m-r-sm"></span>
                	<a href="#1" class="btn btn-danger fa fa-exclamation-circle" id="change">变更</a>
					 
                <table id="table"></table>
            </div>
        </div>
    </div>
</div>

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
    <script src="../../../static/common/bootstrap-datepicker-master/js/bootstrap-datepicker.js"></script>
    <!-- select2 -->
    <script src="../../../static/common/select2/js/select2.full.js"></script>
    <script src="../../../static/common/select2/js/i18n/zh-CN.js"></script>
    <!-- 自定义js -->
    <script src="../../../static/admin/main/js/contabs.js"></script>
    <script src="../../../static/common/js/common.js"></script>
	<script src="../../../static/sas_cmb/js/sasCmbBsc_grid.js"></script>

</body>
</html>