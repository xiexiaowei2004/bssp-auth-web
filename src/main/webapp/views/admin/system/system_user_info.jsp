<%@ page language="java" import="java.util.*" contentType="text/html; charset=utf-8"%>
<!DOCTYPE HTML>
<html>
  <head>
    <title></title>
    <link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css" />
    <link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css" />
    <link rel="stylesheet" href="../../../static/admin/main/css/animate.css" />
    <link rel="stylesheet" href="../../../static/common/css/style.css" />
    <link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css" />
    <link rel="stylesheet" href="../../../static/common/bootstrap-table-master/bootstrap-table.min.css" />
    <link rel="stylesheet" href="../../../static/common/bootstrap-datepicker-master/css/bootstrap-datepicker.min.css" />
    <link rel="stylesheet" href="../../../static/common/bootstrap-table-master/bootstrap-table.min.css">
    <link rel="stylesheet" href="../../../static/common/css/common.css"/>
  </head>
  
  <body class="system-message gray-bg">
    <div class="wrapper wrapper-content animated fadeInRight system-message">
        <div class="row">
            <div class="col-sm-5">
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>管理员信息</h5>
                       <div class="ibox-tools">
                            <a href="#1" class="collapse-link" title="收起表头"><i class="fa fa-chevron-up"></i></a>
                        </div> 
                    </div>
                    <div class="ibox-content form-horizontal" id="system-info" style="height:530px">
                    	<form id="form-info">
                           <div class="form-group">
                                <label class="col-sm-3 control-label">账号名称：</label>
                                <div class="col-sm-6">
                                    <input name="userName" type="text" class="form-control form-disabled" disabled="disabled" value="">
                                </div>
                                <div class="col-sm-3"><button type="button" class="btn btn-warning pull-right" onclick="change_Password();">修改密码</button></div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-3 control-label">真实姓名：</label>
                                <div class="col-sm-6">
                                    <input name="realName" type="text" class="form-control form-disabled" disabled="disabled" value="">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-3 control-label">性别：</label>
                                <div class="col-sm-6">
                                    <input id="sex" name="sex" type="text" class="form-control" disabled="disabled" value="">
                                    <label class="radio-inline add-radio" >
                                        <input type="radio"  name="sex" value="1" checked="checked" >  男</label>
                                    <label class="radio-inline add-radio">
                                        <input type="radio" name="sex" value="2" >  女</label>
                                    <label class="radio-inline add-radio">
                                        <input type="radio" name="sex" value="0"  >  保密</label>
                                </div> 
                            </div>
                            <div class="form-group">
                                <label class="col-sm-3 control-label">年龄：</label>
                                <div class="col-sm-6">
                                    <input name="age" type="text" class="form-control form-disabled" disabled="disabled">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-3 control-label">移动电话：</label>
                                <div class="col-sm-6">
                                     <input name="telephone" type="text" class="form-control form-disabled" disabled="disabled">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-3 control-label ">电子邮箱：</label>
                                <div class="col-sm-6 stm-inp">
                                     <input name="email" type="text" class="form-control form-disabled" disabled="disabled">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-3 control-label">权限：</label>
                                <div class="col-sm-6">
                                     <input id="user-role" type="text" class="form-control" disabled="disabled">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-3 control-label">注册时间：</label>
                                <div class="col-sm-6">
                                     <input name="createTime" type="text" class="form-control" disabled="disabled" value="" pattern="yyyy/MM/dd HH:mm" >
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-8 col-sm-offset-3">
                                	<button type="button" class="btn btn-primary pull-left m-r-md" onclick="modify();">修改信息</button>
                                    <button type="submit" class="btn btn-success" onclick="save_info();">保存修改</button>
                                </div>
                            </div>
                    	</form>
                    </div>
                </div>
            </div>
            <div class="col-sm-7">
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>管理员登录记录</h5>
                        <div class="ibox-tools">
                            <a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                         </div>
                    </div>
                    <div class="ibox-content">
                        <div class="row row-lg">
                            <div class="col-sm-12">
                                <div class="example-wrap">
                                    <div class="example">
                                        <%-- <table id="table"
                                           data-toggle="table"
                                           data-height="450"
                                           data-search="true"
                                           data-show-refresh="true"
                                           data-show-toggle="true"
                                           data-show-export="true"
                                           data-show-pagination-switch="true"
                                           data-striped="true"
                                           data-pagination="true"
                                           data-sort-name="stargazers_count"
                                           data-sort-order="desc">
                                        <thead>
                                        <tr>
                                            <th data-halign="center" data-align="center" data-sortable="true">登录时间</th>
                                            <th data-halign="center" data-align="center" data-sortable="true">登录IP</th>
                                            <th data-halign="center" data-align="center" data-sortable="true">操作系统</th>
                                            <th data-halign="center" data-align="center" data-sortable="true">游览器</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <c:forEach items="${systemUserLoginLogList}" var="systemUserLoginLogList">
                                        <tr>
                                            <td><fmt:formatDate value="${systemUserLoginLogList.loginTime}" pattern="yyyy/MM/dd HH:mm" /></td>
                                            <td>${systemUserLoginLogList.userIp}</td>
                                            <td>${systemUserLoginLogList.operatingSystem}</td>
                                            <td>${systemUserLoginLogList.browser}</td>
                                        </tr>
                                        </c:forEach>
                                        </tbody>
                                    </table> --%>
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
    <div class="ibox-content form-horizontal change_Pass_style" id="change_Pass">
        <div class="form-group">
            <label class="col-sm-4 control-label">原密码：</label>
            <div class="col-sm-6">
                <input name="nowPassword" type="password" class="form-control" >
            </div>
        </div>
        
        <div class="form-group">
            <label class="col-sm-4 control-label">新密码：</label>
            <div class="col-sm-6">
                <input name="newPassword" type="password" class="form-control" >
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-4 control-label">确认密码：</label>
            <div class="col-sm-6">
                 <input name="confirmPwd" type="password" class="form-control">
            </div>
        </div>
    </div>
	     <!-- jquery-ui-->
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
        <script src="../../../static/common/js/common.js"></script>
        <!-- 自定义js -->
    	<!-- 自定义js -->
    	<script src="../../../static/admin/main/js/sysuser-info.js"></script>

  </body>
</html>
