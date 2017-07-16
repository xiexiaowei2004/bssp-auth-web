<%@ page language="java" import="java.util.*" contentType="text/html; charset=utf-8"%>
<!DOCTYPE HTML>
<html>
  <head>
    <title>创建用户</title>	
     <link rel="stylesheet" href="../../../static/common/icheck/flat/green.css" />
 	<link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css" />
	<link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css" />
	<link rel="stylesheet" href="../../../static/admin/main/css/animate.css" />
	<link rel="stylesheet" href="../../../static/common/css/style.css" />
      <style>
          .bsspuser{
              display: none;
          }
      </style>
  </head>
  
  <body class="gray-bg">
    <div class="wrapper add-member-content animated fadeInRight">
        <div class="row">
            <div class="col-sm-12">
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>创建用户 <small>  用户个人信息时应当遵循合法、正当、必要的原则，明示目的、方式和范围，并经用户同意。</small></h5>
                        <div class="ibox-tools">
                            <a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                             <a class="close-link"><i class="fa fa-times"></i></a>
                        </div>
                    </div>
                    <div class="ibox-content">
                        <form id="systemuserform" class="form-horizontal">
                       	  <div id="create-user" class="form-group m-t">
                            	<label class="col-sm-2 control-label">账号ID：</label>
								<div class="col-sm-4">
                                	<input type="text" maxlength="10" class="form-control" name="loginName"  readonly="readonly" isValidate="true" notempty>
                                </div>
								<label class="col-sm-2 control-label">密码：</label>
								<div class="col-sm-4">
                                	<input type="password" maxlength="32" class="form-control" name="loginPassword"  readonly="readonly" isValidate="true" notempty>
                                </div>  								
                            </div>
                            <div id="line-dashed" class="hr-line-dashed"></div>
                            <div class="form-group">
                                <label class="col-sm-2 control-label">账号名称：</label>
								<div class="col-sm-4">
									<input type="text" class="form-control" name="userName" isValidate="true" notempty>
                                </div> 
                                <label class="col-sm-2 control-label">真实姓名：</label>
								<div class="col-sm-4">
                                	<input type="text" maxlength="11" class="form-control" name="realName" isValidate="true" notempty>
                                </div>                                
                            </div>
                            <div class="hr-line-dashed"></div>
                            <div class="form-group">
                                <label class="col-sm-2 control-label">电子邮箱：</label>
								<div class="col-sm-4">
									<input type="text" class="form-control" name="email" isValidate="true" notempty>
                                </div> 
                                <label class="col-sm-2 control-label">移动电话：</label>
								<div class="col-sm-4">
                                	<input type="text" maxlength="11" class="form-control" name="telephone" isValidate="true" notempty>
                                </div>                                
                            </div>
                            <div class="hr-line-dashed"></div>
                            <div class="form-group">
                                <label class="col-sm-2 control-label">性别：</label>
                                <div class="col-sm-4">
                                    <label class="radio-inline add-radio">
                                        <input id="nan-sex" class="flag-sex" type="radio" name="sex" value="1" isValidate="true" notempty >  男</label>
                                    <label class="radio-inline add-radio">
                                        <input id="nv-sex" class="flag-sex" type="radio" name="sex" value="2" isValidate="true" notempty >  女</label>
                              
                                    <label class="radio-inline add-radio">
                                        <input id="bm-sex" class="flag-sex" type="radio" name="sex" value="0" isValidate="true" notempty>  保密</label>
                                
                                </div>
                                <label class="col-sm-2 control-label">状态：</label>
                                <div class="col-sm-4">
                                   <label class="radio-inline add-radio">
                                        <input id="open-status" class="flag-status" type="radio" name="status" value="1" isValidate="true" notempty>开启</label>
                                   <label class="radio-inline add-radio">
                                        <input id="close-status" class="flag-status" type="radio" name="status" value="0" isValidate="true" notempty>关闭</label>
                                </div>
                            </div>

                            <div class="hr-line-dashed bsspuser"></div>
                            <div class="form-group bsspuser">
                                <label class="col-sm-2 control-label">用户类型：</label>
                                <div class="col-sm-4">
                                    <label class="radio-inline add-radio">
                                        <input id="open-userType" class="flag-status" type="radio" name="userType"
                                               value="0" isValidate="true" notempty>平台用户</label>
                                    <label class="radio-inline add-radio">
                                        <input id="close-userType" class="flag-status" type="radio" name="userType"
                                               value="1" isValidate="true" notempty>企业用户</label>
                                </div>
                            </div>
                            <div class="hr-line-dashed"></div>
                            <div class="form-group">
                                <label class="col-sm-2 control-label">企业编号：</label>
                                <div class="col-sm-4">
                                    <input type="text" maxlength="10" class="form-control" name="tradeCode" readonly="readonly">
                                </div>
                                <label class="col-sm-2 control-label">企业名称：</label>
                                <div class="col-sm-4">
                                    <input type="text" maxlength="128" class="form-control" name="entName" readonly="readonly">
                                </div>
                            </div>
                            <div class="hr-line-dashed bsspuser"></div>
                            <div class="form-group bsspuser">
                                <label class="col-sm-2 control-label">权限：</label>
								<div id="sys-role" class="col-sm-10">
								<%-- <c:forEach items="${systemRoles }" var="systemRole">
	                                <div class="checkbox col-sm-3">
	                                    <label>
	                                        <input type="checkbox" name="roleId" value="${systemRole.id }" <c:forEach items="${systemRoleList}" var="systemRoleList"> <c:if test="${systemRole.id==systemRoleList.roleId }">checked="checked"</c:if></c:forEach>/>&nbsp&nbsp${systemRole.roleName}
	                                    </label>
	                                </div>
	                            </c:forEach> --%>
                                <%--</div>                             --%>
                                </div>
                                <div class="hr-line-dashed"></div>
                              </div>
                            <%--按钮提出--%>
                            <div class="form-group">
                                <div class="col-sm-4 col-sm-offset-4 add-submit">
                                    <input type="hidden" class="form-control" name="id">
                                    <button class="btn btn-primary sysusersubmit"  id="sysusersubmit" >提交</button>
                                    <button class="btn btn-primary" type="button" id="reback" onclick="Utils.redirect('../../../views/admin/system/system_user_list.jsp')">返回</button>
                                </div>
                            </div>
                        </form>
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
    <!-- iCheck -->
	<script src="../../../static/common/icheck/icheck.min.js"></script>
	<!-- bootstrapvalidator-master前端验证框架 -->
    <script src="../../../static/common/bootstrapvalidator-master/css/bootstrapValidator.css"></script>
	<script src="../../../static/common/bootstrapvalidator-master/js/bootstrapValidator.min.js"></script>

    <script src="../../../static/common/bootstrap-table-master/bootstrap-table.min.js"></script>
    <script src="../../../static/common/js/common.js"></script>
	<!-- 自定义js -->
    <script src="../../../static/admin/main/js/sysuser-add.js"></script>
    <script src="../../../static/admin/main/js/content.js"></script>
	</tiziFooter>  
</body>
</html>
