<%@ page language="java" contentType="text/html; charset=utf-8"%>
<!DOCTYPE HTML>
<html>
<head>
	<meta charset="UTF-8">
    <title>字段关系设置</title>
    <link rel="stylesheet" href="../../../static/common/bootstrap-table-master/bootstrap-table.min.css" />
    <link rel="stylesheet" href="../../../static/common/bootstrap-datepicker-master/css/bootstrap-datepicker.min.css" />
    <link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css" />
    <link rel="stylesheet" href="../../../static/common/select2/css/select2.min.css"/>
    <link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css" />
    <link rel="stylesheet" href="../../../static/admin/main/css/animate.css" />
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
							<label class="col-sm-3 control-label text-nowrap text-right">单据类型</label>
							<div class="col-sm-9"> 
                               <input type="text" class="form-control Col-sm-6" name="docType" value="">
							</div>
						</div>
						<div class="col-md-4 form-horizontal">
							<label class="col-sm-3 control-label text-nowrap text-right">业务类型</label>
							<div class="col-sm-9">
                               <input type="text" class="form-control Col-sm-6" name="bizType" value="">
							</div>
						</div>
						<div class="col-md-4 form-horizontal">
							<label class="col-sm-3 control-label text-nowrap text-right">监管场所</label>
							<div class="col-sm-9">
								<input type="text" class="form-control Col-sm-6" name="areaCode" value="">
							</div>
						</div>
					</div>
					<div class="row m-b-sm">
						<div class="col-md-4 form-horizontal">
							<label class="col-sm-3 control-label text-nowrap text-right">业务表名</label>
							<div class="col-sm-9">
								<input type="text" class="form-control Col-sm-6" name="dbTable" value="" />
							</div>
						</div>
						<div class="col-md-4 form-horizontal">
							<label class="col-sm-3 control-label text-nowrap text-right">业务字段</label>
							<div class="col-sm-9">
								<input type="text" class="form-control Col-sm-6" name="dbColumn" value="" />
							</div>
						</div>
						<div class="col-md-4 form-horizontal">
							<label class="col-sm-3 control-label text-nowrap text-right">启用标识</label>
							<div class="col-sm-9">
								<select class="form-control select2-width input-sm" id="status" name="status" dll_name="IS_ENABLE" isShowEmpty="true">
								</select>
							</div>
						</div>
						
					</div>
					
					<div class="row m-b-sm">
						<div class="col-md-4 pull-right text-right">
							<div class="col-sm-4"></div>
							<div class="col-sm-8">
								<button type="button" id="search" class="btn btn-success btn-sm">搜索</button>
								<button type="reset" class="btn btn-default btn-sm">清除</button>
							</div>
						</div>
					</div>			
				</div>
			</div>
		</form>
 
 <!--ibox-->
		<div class="ibox-content">
			<div class="row">
				<div class="col-md-12">
					<span class="m-r-sm">
						<a href="#1" class="btn btn-info fa fa-refresh" id="refreshBtn" >刷新</a>
					</span>
					<span class="m-r-sm">
						<a href="#1" class="btn btn-info fa fa-info-circle" id="view">查阅</a>
						<%--<a href="#1" class="btn btn-info fa fa-plus-square" id="add">新增</a>
						<a href="#1" class="btn btn-info fa fa-edit" id="modify">修改</a>	
						<a href="#1" class="btn btn-info fa fa-remove" id=del>删除</a>--%>
					</span>
					<table id="table"></table>
				</div>
			</div>
		</div>
</div>
<!-- <div class="wrapper wrapper-content animated fadeInRight">
    <div class="row">
        <div class="col-sm-12">
            <div class="ibox float-e-margins">
                <div class="ibox-title">
                    <h5>搜索查询</h5>
                </div>
                <div class="ibox-content search-query">
                    <form  method="post" id="searchForm">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label class="control-label">监管场所</label>
                                <div class="input-group col-sm-10">
                                	<select class="form-control" id="areaCode" name="areaCode" value="" dll_name="data" />
                                		<option value="">--请选择--</option> 
                                	</select>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label class="control-label">单据类型</label>
                                <div class="input-group col-sm-10">
                                    <input type="text" class="form-control" name="docType" value=""/>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label class="control-label">业务类型</label>
                                <div class="input-group col-sm-10">
                                    <input type="text" class="form-control" name="bizType" value=""/>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label class="control-label">业务表名</label>
                                <div class="input-group col-sm-10">
                                    <input type="text" class="form-control" name="dbTable" value=""/>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label class="control-label">业务字段</label>
                                <div class="input-group col-sm-10">
                                    <input type="text" class="form-control" name="dbColumn" value=""/>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label class="control-label">启用标识</label>
                                <div class="input-group col-sm-10">
                                    <select class="form-control" id="status" name="status" value="" />
                               			<option value="">--请选择--</option>
                               			<option value="Y">启用</option>
                              			<option value="N">禁用</option>
                            		</select>
                                    <span class="input-group-btn"><button type="button" class="btn btn-primary"
                                                                          id="search">搜索</button> </span>
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
                    <h5>字段关系</h5>
                </div>
                <div class="ibox-content">
                    <div class="row row-lg">
                        <div class="col-sm-12">
                            <div class="example-wrap">
                                <div class="example">
                                    <div id="toolbar" class="btn-group m-t-sm">
                                        <button id="add" type="button" class="btn btn-default"  title="创建监管场所">
                                            <i class="glyphicon glyphicon-plus"></i>
                                        </button>
                                        <button id="delete" type="button" class="btn btn-default" title="删除监管场所">
                                            <i class="glyphicon glyphicon-trash"></i>
                                        </button>
                                    </div>
                                    <table id="table">

                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> -->
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
    <script src="../../../static/edi/js/ediXmlMapDb.js"></script>
	<script src="../../../static/common/select2/js/select2.full.js"></script>
</tiziFooter>
<script>
    $(function () {
        load(false);
    });
</script>
</body>
</html>
