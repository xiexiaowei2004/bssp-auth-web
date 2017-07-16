<%@ page language="java" contentType="text/html; charset=utf-8"%>
<!DOCTYPE HTML>
<html>
<head>
	<meta charset="UTF-8">
    <title>单据流转日志</title>
    <link rel="stylesheet" href="../../../static/common/bootstrap-table-master/bootstrap-table.min.css" />
    <link rel="stylesheet" href="../../../static/common/bootstrap-datepicker-master/css/bootstrap-datepicker.min.css" />
    <link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css" />
    <link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css" />
    <link rel="stylesheet" href="../../../static/admin/main/css/animate.css" />
    <link rel="stylesheet" href="../../../static/common/css/style.css" />
    <link rel="stylesheet" href="../../../static/common/select2/css/select2.min.css" />
</head>

<body class="gray-bg">
<div class="wrapper wrapper-content animated fadeInRight">
    <div class="row">
        <div class="col-sm-12">
            <div class="ibox float-e-margins">
                <div class="ibox-title">
                    <h5>搜索查询</h5>
                    <!-- <div class="ibox-tools">
                        <a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                        <a class="close-link"><i class="fa fa-times"></i></a>
                    </div> -->
                </div>
                <div class="ibox-content search-query">
                    <form  method="post" id="searchForm">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label class="control-label">监管场所</label>
                                <div class="input-group col-sm-10">
                                    <!-- <input type="text" class="form-control" name="areaCode" value=""/> -->
                                	<select class="form-control" id="areaCode" name="areaCode" value="" dll_name="data" isShowEmpty="true"/>
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
                    <!-- <div class="ibox-tools">
                        <a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                        <a class="close-link"><i class="fa fa-times"></i></a>
                    </div> -->
                </div>
                <div class="ibox-content">
                    <div class="row row-lg">
                        <div class="col-sm-12">
                            <div class="example-wrap">
                                <div class="example">
                                    <!-- <div id="toolbar" class="btn-group m-t-sm">
                                        <button id="add" type="button" class="btn btn-default"  title="创建监管场所">
                                            <i class="glyphicon glyphicon-plus"></i>
                                        </button>
                                        <button id="delete" type="button" class="btn btn-default" title="删除监管场所">
                                            <i class="glyphicon glyphicon-trash"></i>
                                        </button>
                                    </div> -->
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
    <script src="../../../static/edi/js/ediCirclationLog.js"></script>
	<script src="../../../static/common/select2/js/select2.full.js"></script>
</tiziFooter>
<script>
    $(function () {
        load(false);
    });
</script>
</body>
</html>
