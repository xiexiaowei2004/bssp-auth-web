<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <head>
    <title>集装箱参数-编辑 </title>
	<meta name="author" content="BSSP-joky" />
	<meta name="keywords" content="BSSP">
	<meta name="description" content="BSSP">
	<link rel="shortcut icon" href="/bssp-web/favicon.ico" type="image/x-icon" />
	<link rel="stylesheet" href="/bssp-web/static/common/bootstrap/css/bootstrap.min.css" />
	<link rel="stylesheet" href="/bssp-web/static/common/font-awesome/css/font-awesome.min.css" />
	<link rel="stylesheet" href="/bssp-web/static/admin/main/css/animate.css" />
	<link rel="stylesheet" href="/bssp-web/static/admin/main/css/style.css" />
    <link rel="stylesheet" href="/bssp-web/static/common/icheck/flat/green.css" />
  
  </head>
  <body class="fixed-sidebar full-height-layout gray-bg">
  	
    <div class="wrapper">
        <div class="row">
            <div class="col-sm-12">
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>集装箱参数-编辑</h5>
                        <div class="ibox-tools">
                            <a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                        </div>
                    </div>
                    <div class="ibox-content">
                        <form id="dataform" class="form-horizontal">
                        <input type="hidden" name="uid"  />
                        	<div class="form-group">
                            	<label class="col-sm-2 control-label col-sm-offset-1">集装箱编号：</label>
								<div class="col-sm-6">
                                	<input type="text"  class="form-control" id="code" name="code" >
                                </div>
                            </div>
                            <div class="hr-line-dashed"></div>
                            <div class="form-group">
                                <label class="col-sm-2 control-label col-sm-offset-1">集装箱名称：</label>
								<div class="col-sm-6">
									<input type="text" class="form-control" id="name" name="name" value="">
                                </div>                               
                            </div>
                            <div class="hr-line-dashed"></div>
                            <div class="form-group">
                            	<label class="col-sm-2 control-label col-sm-offset-1">集装箱型号：</label>
								<div class="col-sm-6">
                                	<input type="text"  class="form-control" id="model" name="model" value="">
                                </div>
                            </div>
                            <div class="hr-line-dashed"></div>
                            <div class="form-group">
                            	<label class="col-sm-2 control-label col-sm-offset-1">集装箱尺寸：</label>
								<div class="col-sm-6">
                                	<input type="text"  class="form-control" id="size" name="size" value="">
                                </div>
                            </div>
                            <div class="hr-line-dashed"></div>
                          
                            <div class="form-group">
                            	<label class="col-sm-2 control-label col-sm-offset-1">集装箱空重KG：</label>
								<div class="col-sm-6">
                                	<input type="text"  class="form-control" id="empty" name="empty" value="">
                                </div>
                            </div>
                            <div class="hr-line-dashed"></div>
                            <div class="form-group">
                            	<label class="col-sm-2 control-label col-sm-offset-1">集装箱柜型：</label>
								<div class="col-sm-6">
                                	<input type="text"  class="form-control" id="cabinetType" name="cabinetType" value="">
                                </div>
                            </div>
                            <div class="hr-line-dashed"></div>
                            <div class="form-group">
                            	<label class="col-sm-2 control-label col-sm-offset-1">集装箱容积：</label>
								<div class="col-sm-6">
                                	<input type="text"  class="form-control" id="volume" name="volume" value="">
                                </div>
                            </div>
                            <div class="hr-line-dashed"></div>
                              <div class="form-group">
                            	<label class="col-sm-2 control-label col-sm-offset-1">标准箱数量：</label>
								<div class="col-sm-6">
                                	<input type="text"  class="form-control" id="boxNumber" name="boxNumber" value="">
                                </div>
                            </div>
                            <div class="hr-line-dashed"></div>
                            <div class="form-group">
                                <div class="col-sm-4 col-sm-offset-3 add-submit">
                                   <button class="btn btn-primary" type="button" id="submit" onclick="save('dataform','/update')">保存</button>
                            <button class="btn btn-primary" type="button" id="reback" onclick="Utils.redirect('../../../views/cod_std/codStdContaParam/list.jsp')">返回</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 全局js -->  
	<script src="/bssp-web/static/common/jquery/jquery-3.1.1.min.js"></script>
    <script src="/bssp-web/static/common/jquery/jquery-ui.min.js"></script>
    <script src="/bssp-web/static/common/layer/layer.js"></script>
    <script src="/bssp-web/static/common/bootstrap/js/bootstrap.min.js"></script>
    <script src="/bssp-web/static/common/bootstrap-table-master/bootstrap-table.min.js"></script>
     <script src="/bssp-web/static/common/js/common.js"></script>
     <!-- 自定义js -->
     <script src="/bssp-web/static/admin/main/js/contabs.js"></script>
	<script src="/bssp-web/static/admin/main/js/content.js"></script>
    <script src="/bssp-web/static/cod_std/js/codStdContaParam.js"></script>
        <script>
        $(function () {
        	FormUtils.getData();
        });
    </script>
  </body>
</html>