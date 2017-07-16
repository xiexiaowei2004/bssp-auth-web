<%@ page language="java" contentType="text/html; charset=utf-8"%>
<!DOCTYPE HTML>
<html>
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <title>加工账册备案</title>
    <link rel="stylesheet" href="../../../static/common/bootstrap-table-master/bootstrap-table.min.css" />
    <link rel="stylesheet" href="../../../static/common/bootstrap-datepicker-master/css/bootstrap-datepicker3.min.css" />
    <link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css" />
    <link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css" />
    <link rel="stylesheet" href="../../../static/admin/main/css/animate.css" />
    <link rel="stylesheet" href="../../../static/common/css/style.css" />
    <link rel="stylesheet" href="../../../static/common/css/common.css" />
    
	<!-- HTML5 Shim 和 Respond.js 用于使IE8支持html5和css3媒介查询 -->  
	<!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
	<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->
</head>
<body class="hold-transition skin-blue sidebar-mini">
	<div class="content-wrapper" style="padding-top:20px;padding-left:5px;">
		    <div class="ibox content">
		    <div class="box box-solid">
		    	<form class="box-body form-horizontal" id="searchForm">
		    	<div class="row">        
				        <div class="form-group col-md-3 col-xs-12 col-sm-12">
				          <label class="col-sm-3 control-label text-nowrap font-light">保税清单编号：</label>
				          <div class="col-sm-9">
				          	<input type="text" class="form-control input-sm" id="bondInvtNo" name="bondInvtNo">
				        	</div>		        
				        </div>        
				       <div class="form-group col-md-3 col-xs-12 col-sm-12">
			            <label class="col-sm-3 text-nowrap control-label font-light">企业内部清单编号:</label>
			           <div class="col-sm-9">
			          		<input type="text" class="form-control input-sm" id="etpsInnerInvtNo" name="etpsInnerInvtNo">
			        	</div>	
			          </div>
			           <div class="form-group col-md-3 col-xs-12 col-sm-12">           
			            <label class="col-sm-3 text-nowrap control-label font-light">备案编号：</label>           
			            <div class="col-sm-9">
			              <select class="form-control select2 form-horizontal" id="putrecNo" name="putrecNo"></select>
			            </div>
			          </div>         
		          </div>
		          <div class="row">             
		          <div class="form-group col-md-3 col-xs-12 col-sm-12">          
		            <label class="col-sm-3 text-nowrap control-label font-light">出入区标识：</label>           
		            <div class="col-sm-9">
		            <select class="form-control select2" id="emapvStucd" name="emapvStucd"></select>
		            </div>		            
		          </div>
		          <div class="form-group col-md-3 col-xs-12 col-sm-12">          
		            <label class="col-sm-3 text-nowrap control-label font-light">清单状态 ：</label>           
		            <div class="col-sm-9">
		            <select class="form-control select2" id="invtStucd" name="invtStucd"></select>
		            </div>		            
		          </div>
		          <div class="form-group col-md-3 col-xs-12">
	                <label class="col-sm-3 text-nowrap control-label font-light">录入日期:</label>
		           <div class="col-sm-4">                          
		               <input type="text" class="form-control datepicker" data-date-format="yyyy-mm-dd"  id="decTimeStart">
		           </div> 
		            <label class="col-sm-1 text-nowrap control-label font-light">至</label> 
		             <div class="col-sm-4">
		               <input type="text" class="form-control datepicker"  data-date-format="yyyy-mm-dd" id="decTimeEnd">               
		             </div>
	              </div>
		           <div class="col-md-2 pad">
		           	<button type="button" class="btn btn-primary">
		            	<i class="fa fa-search">查询</i>
		            </button>            
		            <button type="reset" class="btn btn-danger">
		            	<i class="fa fa-eraser">清除</i>
		            </button>
		           </div>   
		           </div>                   
		      </form>
		      	<div class="clearfix"></div>
		    	<div  class="row row-lg">
	                <div id="toolbar" class="btn-group m-t-sm">
	                     <button id="add" type="button" class="btn btn-default"  title="新增">
	                         <i class="glyphicon glyphicon-plus">新增</i>
	                     </button>
	                     <button id="delete" type="button" class="btn btn-default" title="删除">
	                         <i class="glyphicon glyphicon-trash">删除</i>
	                     </button>
	                 </div>
	               </div>                             
		    <div class="clearfix"></div>
		    </div>
	    	<div class="box-top-line">
	    		<table id="table" class="table table-hover table-striped"></table>
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
    <!-- 自定义js -->
    <script src="../../../static/admin/main/js/contabs.js"></script>
    <script src="../../../static/common/js/common.js"></script>
    <script src="../../../static/bond/js/bondinvtbsc_grid.js"></script>
</body>
</html>