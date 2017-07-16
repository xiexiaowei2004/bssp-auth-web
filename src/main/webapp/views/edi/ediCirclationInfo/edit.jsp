<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <head>
    <title>路由配置-编辑 </title>
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
                        <h5>路由配置-编辑</h5>
                        <div class="ibox-tools">
                            <a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                        </div>
                    </div>
                    <div class="ibox-content">
                        <form id="dataform" class="form-horizontal">
                        <input type="hidden" name="uid"  />
                        	<div class="form-group">
                            	<label class="col-sm-2 control-label col-sm-offset-1">监管场所：</label>
								<div class="col-sm-6">
                                	<select class="form-control" id="areaCode" name="areaCode" value="" dll_name="data" />
                                		 <option value="">--请选择监管场所--</options> 
                                	</select>
                                </div>
                            </div>
                            <div class="hr-line-dashed"></div>
                            <div class="form-group">
                                <label class="col-sm-2 control-label col-sm-offset-1">认证码	：</label>
								<div class="col-sm-6">
									<input type="text" class="form-control" id="toKen" name="toKen" value="">
                                </div>                               
                            </div>
                            <div class="hr-line-dashed"></div>
                            <div class="form-group">
                            	<label class="col-sm-2 control-label col-sm-offset-1">单据类型：</label>
								<div class="col-sm-6">
                                	<input type="text"  class="form-control" id="docType" name="docType" value="">
                                </div>
                            </div>
                            <div class="hr-line-dashed"></div>
                            <div class="form-group">
                            	<label class="col-sm-2 control-label col-sm-offset-1">单据名称：</label>
								<div class="col-sm-6">
                                	<input type="text"  class="form-control" id="docName" name="docName" value="">
                                </div>
                            </div>
                            <div class="hr-line-dashed"></div>
                            <div class="form-group">
                             <label class="col-sm-2 control-label col-sm-offset-1">业务类型：</label>
								<div class="col-sm-6">
                                	<input type="text"  class="form-control" id="bizType" name="bizType" value="">
                                </div>
                               </div>
                      
                            <div class="hr-line-dashed"></div>
                            <div class="form-group">
                             <label class="col-sm-2 control-label col-sm-offset-1">业务名称：</label>
								<div class="col-sm-6">
                                	<input type="text"  class="form-control" id="bizName" name="bizName" value="">
                                </div>
                               </div>
                            
                            <div class="hr-line-dashed"></div>
                            <div class="form-group">
                             <label class="col-sm-2 control-label col-sm-offset-1">路由标识：</label>
								<div class="col-sm-6">
                                	<input type="text"  class="form-control" id="routeType" name="routeType" value="">
                                </div>
                               </div>
                       
                            <div class="hr-line-dashed"></div>
                            <div class="form-group">
                             <label class="col-sm-2 control-label col-sm-offset-1">报文头：</label>
								<div class="col-sm-6">
                                	<input type="text"  class="form-control" id=" proName" name="proName" value="">
                                </div>
                               </div>
                          
                            <div class="hr-line-dashed"></div>
                            <div class="form-group">
                             <label class="col-sm-2 control-label col-sm-offset-1">启用标识：</label>
								<div class="col-sm-6">
                                	<select type="text"  class="form-control" id="status" name="status" >
                                	<option value="Y" >开启：Y</option>
                            <option value="N">关闭：N</option>
                                	</select>
                                </div>
                               </div>
                         
                            <div class="hr-line-dashed"></div>
                            <div class="form-group">
                             <label class="col-sm-2 control-label col-sm-offset-1">传输方式：</label>
								<div class="col-sm-6">
                                	<input type="text"  class="form-control" id="transMode" name="transMode" value="">
                                </div>
                               </div>
                    
                            <div class="hr-line-dashed"></div>
                             <div class="form-group">
                             <label class="col-sm-2 control-label col-sm-offset-1">备注：</label>
								<div class="col-sm-6">
                                	<input type="text"  class="form-control" id="remarks" name="remarks" value="">
                                </div>
                               </div>
                    
                            <div class="hr-line-dashed"></div>
                            <div class="form-group">
                                <div class="col-sm-4 col-sm-offset-3 add-submit">
                                   <button class="btn btn-primary" type="button" id="submit"
                                    onclick="FormUtils.save('form','/update')">保存
                            </button>
                            <button class="btn btn-primary" type="button" id="reback" onclick="Utils.redirect('../../../views/edi/ediRoutingInfo/list.jsp')">返回</button>
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
    <script src="/bssp-web/static/edi/js/ediRoutingInfo.js"></script>
        <script>
        $(function () {
        	FormUtils.getData();
        });
    </script>
  </body>
</html>