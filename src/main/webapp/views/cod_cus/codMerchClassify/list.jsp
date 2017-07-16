<%@ page language="java" contentType="text/html; charset=utf-8"%>
<!DOCTYPE HTML>
<html>
<head>
	<meta charset="UTF-8">
    <title>规范申报目录</title>
    <link rel="stylesheet" href="../../../static/common/bootstrap-table-master/bootstrap-table.min.css" />
    <link rel="stylesheet" href="../../../static/common/bootstrap-datepicker-master/css/bootstrap-datepicker.min.css" />
    <link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css" />
    <link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css" />
    <link rel="stylesheet" href="../../../static/admin/main/css/animate.css" />
    <link rel="stylesheet" href="../../../static/common/css/style.css" />
    <link rel="stylesheet" href="../../../static/common/css/common.css" />
    <link rel="stylesheet" href="../../../static/common/select2/css/select2.min.css" />
</head>
<body class="gray-bg">
<div class="container animated fadeInRight">
    <form method="post" id="searchForm">
			<div class="ibox">
				<div class="ibox-title font-bold">查询条件</div>
				<div class="ibox-content">
					<div class="row m-b-sm">
						<div class="col-md-6 form-horizontal">
							<label class="col-sm-3 control-label text-nowrap text-right">税则号</label>
							<div class="col-sm-9">
								<input type="text" class="form-control Col-sm-6" name="codeTs" value="" placeholder="请输入税则号"> 
							</div>
						</div>
						<div class="col-md-4 pull-right text-right">
							<div class="col-sm-4"></div>
							<div class="col-sm-8">
								<button type="button" id="search" class="btn btn-success btn-sm">搜索</button>
								<button type="reset" class="btn btn-default btn-sm"> 清除</button>
							</div>
						</div>
					</div>				
				</div>
			</div>
		</form>
 
 <!--ibox-->
	<div class="ibox-title font-bold">规范申报</div>
	<div class="ibox-content">
		<div class="row">
			<div class="col-md-12">
				<!-- <span class="m-r-sm">
                    <a href="#1" class="btn btn-info fa fa-refresh" id="refreshBtn" onclick="sx()">刷新</a>
                </span>
                <span class="m-r-sm">
                    <a href="#1" class="btn btn-info fa fa-info-circle" id="view">查阅</a>
                    <a href="#1" class="btn btn-info fa fa-plus-square" id="add">新增</a>
                    <a href="#1" class="btn btn-info fa fa-edit" id="modify">修改</a>
                    <a href="#1" class="btn btn-info fa fa-remove" id=del>删除</a>
                </span> -->
				<table id="table"></table>
			</div>
		</div>
	</div>

		
</div>

       <!-- 新增模态框（Modal） -->
	<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	    <div class="modal-dialog" style="width: 60%;">
	        <div class="modal-content">
	            <div class="modal-header caption">
	                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
	                <h4 class="modal-title" id="addModalLabel">规范申报目录</h4>
	            </div>
	            <div class="modal-body" style="padding-bottom: 0;">
	            		<div class="col-sm-6 form-horizontal">
							<div class="form-group">
								<label class="col-sm-2 control-label text-nowrap text-right">税则号</label>
								<div class="input-group col-sm-10">
									<input type="text" class="form-control input-sm" id="codeTs" name="codeTs" readonly="readonly" value="">
								</div>
							</div>
						</div>
						<div class="col-sm-6 form-horizontal">
							<div class="form-group">
								<label class="col-sm-2 control-label text-nowrap text-right">商品名称</label>
								<div class="input-group col-sm-10">
									<input type="text" class="form-control input-sm" id="gName" name="gName" readonly="readonly" value="">
								</div>
							</div>
						</div>
	            </div>
	             <div class="ibox float-e-margins">
			<table class="table table-striped table-bordered" style="width: 95%; margin: auto;" id="table1">
				<caption><h4 class="modal-title" style="font-size: 16px;">规范申报目录子表</h4></caption>
				<thead>
					<tr>
						<!-- <th>税则号</th> -->
						<th>要素序号</th>
						<th>申报要素</th>
					</tr>
				</thead>
				<tbody id="sTa" name="sTa">
					<!-- <tr>
						<td>Tanmay</td>
						<td>Bangalore</td>
						<td>560001</td>
					</tr>  -->
					
				</tbody>
			</table>
		</div>
	    
	            
	            <div class="modal-footer">
	                <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
	            </div>
	        </div><!-- /.modal-content -->
	    </div><!-- /.modal-dialog -->
	   
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
    <script src="../../../static/cod_cus/js/codMerchClassify.js"></script>
	<script src="../../../static/common/select2/js/select2.full.js"></script>
	</tiziFooter>
	
<script>
    $(function () {
        load(false);
    });
</script>
</body>
</html>
