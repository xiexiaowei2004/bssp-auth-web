<%@ page language="java" import="java.util.*" contentType="text/html; charset=utf-8"%>
<!DOCTYPE HTML>
<html>
  <head>
    <title>创建角色</title>
    <link rel="stylesheet" href="../../../static/common/icheck/flat/green.css" />
    <link type="text/css" rel="stylesheet" href="../../../static/common/ztree/css/metroStyle/metroStyle.css" />
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
    <div class="wrapper add-member-content animated fadeInRight">
        <div class="row">
            <div class="col-sm-12">
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <%-- <h5><c:if test="${empty systemRole}">创建角色</c:if><c:if test="${!empty systemRole}">修改角色信息</c:if></h5> --%>
                        <h5>创建角色</h5>
                        <div class="ibox-tools">
                            <a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                            <a class="close-link"><i class="fa fa-times"></i></a>
                        </div>
                    </div>
                    <div class="ibox-content">
                        <form id="systemRoleform" class="form-horizontal">
                            <div class="form-group">
                                <label class="col-sm-2 control-label">角色名称：</label>
								<div class="col-sm-4">
									<input type="text" class="form-control" name="roleName" value="">
                                </div> 
                            </div>
                            <div class="hr-line-dashed"></div>
                            <div class="form-group">
                                <label class="col-sm-2 control-label">角色类型：</label>
                                <div class="col-sm-4">
                                    <label class="radio-inline add-radio">
                                        <input id="open-roleType" class="flag-status" type="radio" name="roleType"
                                               value="0">平台角色</label>
                                    <label class="radio-inline add-radio">
                                        <input id="close-roleType" class="flag-status" type="radio" name="roleType"
                                               value="1">企业角色</label>
                                </div>
                            </div>
                            <div class="hr-line-dashed"></div>
                            <div class="form-group">
                                <label class="col-sm-2 control-label">系统数据：</label>
                                <div class="col-sm-4">
                                   <label class="radio-inline add-radio">
                                        <input id="is-system" class="flag-system" type="radio" name="isSystem" value="1">是</label>
                   					<label class="radio-inline add-radio">
                                        <input id="no-system" class="flag-system" type="radio" name="isSystem" value="0">否</label>                              
                                </div>
                            </div>
                            <div class="hr-line-dashed"></div>
                            <div class="form-group">
                                <label class="col-sm-2 control-label">状态：</label>
                                <div class="col-sm-4">
                                   <label class="radio-inline add-radio">
                                        <input id="open-status" class="flag-status" type="radio" name="status" value="1">开启</label>
                                   <label class="radio-inline add-radio">
                                        <input id="close-status" class="flag-status" type="radio" name="status" value="0" >关闭</label>
                                </div>                            
                            </div>
                             <div class="hr-line-dashed"></div>
                             <div class="form-group">
                              <label class="col-sm-2 control-label">拥有菜单：</label>
                                <div class="col-sm-6">
									<div id="ztreedemo" class="ztree"></div>
                                </div>
                             </div>
                            <div class="hr-line-dashed"></div>
                            <div class="form-group">
                                <div class="col-sm-4 col-sm-offset-4 add-submit">
                                	<input type="hidden" class="form-control" name="id" value="">
                                    <button class="btn btn-primary sysrolesubmit" type="button" id="submit">提交</button>
                                    <button class="btn btn-primary" type="button" id="reback" onclick="Utils.redirect('../../../views/admin/system/system_role_list.jsp')">返回</button>
                                </div>
                            </div>
                        </form>
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
        <!-- 全局js -->
        <script> var t1 = new Date().getTime();</script>
        <!-- 自定义js -->
		<script src="../../../static/admin/main/js/content.js"></script>
	   	<!-- iCheck -->
		<script src="../../../static/common/icheck/icheck.min.js"></script>
		 <!-- bootstrapvalidator-master前端验证框架 -->
		<script src="../../../static/common/bootstrapvalidator-master/js/bootstrapValidator.min.js"></script>
		<!-- layer javascript -->
	    <script src="../../../static/common/layer/layer.js"></script>
		<script type="text/javascript" src="../../../static/common/ztree/jquery.ztree.all.min.js"></script>
		<script src="../../../static/common/js/common.js"></script>
        <script src="../../../static/admin/main/js/sysrole-add.js"></script>
		<!-- 自定义js -->
	 <!--   <script type="text/javascript">
		var treedata='${jsonMenu}';
		$(function(){
			initMenuTree(treedata);
		});
	</script> -->
	</tiziFooter>  
</body>
</html>
