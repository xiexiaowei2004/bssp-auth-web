<%@ page language="java" import="java.util.*" contentType="text/html; charset=utf-8"%>
<!DOCTYPE HTML>
<html>
  <head>
    <title>管理员分类列表</title>
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
<div class="wrapper wrapper-content animated fadeInRight">
        <div class="ibox float-e-margins">
            <div class="ibox-title">
                <h5>管理员分类信息</h5>
                <div class="ibox-tools">
                    <a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                    <a class="close-link"><i class="fa fa-times"></i></a>
                </div>
            </div>
            <div class="ibox-content">
                <div class="row row-lg">
                    <div class="col-sm-12">
                        <div class="example-wrap">
                            <div class="example">
                                <%-- <table id="table"
                                   data-toggle="table"
                                   data-height="400"
                                   data-search="true"
                                   data-show-refresh="true"
                                   data-show-toggle="true"
                                   data-show-export="true"
                                   data-show-pagination-switch="true"
                                   data-show-columns="true"
                                   data-striped="true"
                                   data-pagination="true"
                                   data-sort-name="stargazers_count"
                                   data-sort-order="desc">
                                <thead>
                                <tr>
                                	<th data-halign="center" data-align="center" data-sortable="true">编号</th>
                                    <th data-halign="center" data-align="center" data-sortable="true">昵称</th>
                                    <th data-halign="center" data-align="center" data-sortable="true">姓名</th>
                                    <th data-halign="center" data-align="center" data-sortable="true">手机</th>
                                    <th data-halign="center" data-align="center" data-sortable="true">邮箱</th>
                                    <th data-halign="center" data-align="center" data-sortable="true">注册时间</th>
                                    <th data-halign="center" data-align="center" data-sortable="true">最后登录时间</th>
                                    <th data-halign="center" data-align="center" data-sortable="true">登录IP</th>
                                    <th data-halign="center" data-align="center">状态</th>
                                </tr>
                                </thead>
                                <tbody>
                                <c:forEach items="${systemUsers}" var="systemUsers">
                                <tr>
                                	<td>${systemUsers.id}</td>
                                    <td>
                                        <a href="javascript:void(0)" onclick="member_show('${systemUsers.userName}','${ctx}/system/sysuser/list/info','${systemUsers.id}','500','400')">${systemUsers.userName}</a>
                                    </td>
                                    <td>${systemUsers.realName}</td>
                                    <td>${systemUsers.telephone}</td>
                                    <td>${systemUsers.email}</td>
                                    <td><fmt:formatDate value="${systemUsers.createTime}" pattern="yyyy/MM/dd" /></td>
                                    <td><fmt:formatDate value="${systemUsers.lastLoginTime}" pattern="yyyy/MM/dd HH:mm" /></td>
                                    <td>${systemUsers.lastLoginIp}</td>
                                    <td class="td-status">
                                    <c:if test="${systemUsers.status==1}"><span class="label label-primary">正常</span></c:if>
                                    <c:if test="${systemUsers.status==0}"><span class="label label-danger">冻结</span></c:if>
                                    </td>
                                </tr>
                                </c:forEach>
                                </tbody>
                            </table> --%>
                               <table id="dataGrid" class="table table-hover"></table>
                               <div class="form-group">
	                                <div class="col-sm-4 col-sm-offset-4 add-submit">
	                                	<input type="hidden" class="form-control" name="id">
	                                	<button class="btn btn-primary" type="button" id="reback" onclick="Utils.redirect('../../../views/admin/system/system_role_list.jsp')">返回</button>
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
 <!-- jquery-ui-->
        <script src="../../../static/common/jquery/jquery-3.1.1.min.js"></script>
        <script src="../../../static/common/jquery/jquery-ui.min.js"></script>
        <script src="../../../static/common/layer/layer.js"></script>

        <script src="../../../static/common/bootstrap/js/bootstrap.min.js"></script>
        <!-- Bootstrap table -->
        <script src="../../../static/common/bootstrap-table-master/bootstrap-table.js"></script>
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
    <script src="../../../static/admin/main/js/sysroleuser-list.js"></script>
    </tiziFooter>
</body>
</html>