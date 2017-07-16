<%@ page language="java" import="java.util.*" contentType="text/html; charset=utf-8"%>
<!DOCTYPE HTML>
<html>
  <head>
    <title>角色列表</title>
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
       <div class="row">
            <div class="col-sm-3">
                <div class="ibox" >
                    <div class="ibox-content" style="height:600px">
                        <h3>管理员角色列表</h3>
                        <p class="small"><i class="fa fa-hand-o-up"></i> 在列表之间拖动管理员角色</p>
                        <ul id="sys-role" class="sortable-list connectList agile-list">
                      <%--   <c:forEach items="${systemRoles}" var="systemRole" varStatus="status">
                            <li class="<c:if test="${status.index % 3 == 0 }">success-element</c:if><c:if test="${status.index % 3 == 1 }">warning-element</c:if><c:if test="${status.index % 3 == 2 }">info-element</c:if>">
                                ${systemRole.roleName }<span class="badge <c:if test="${status.index % 3 == 0 }">badge-primary</c:if><c:if test="${status.index % 3 == 1 }">badge-warning</c:if><c:if test="${status.index % 3 == 2 }">badge-success</c:if> m-l">${systemRole.number}</span>
                                <div class="agile-detail">
                                    <a onclick="role_show('${systemRole.roleName }','${ctx }/system/sysuser/list','${systemRole.id}','role','1000',null)" class="pull-right btn btn-xs <c:if test="${status.index % 3 == 0 }">btn-primary</c:if><c:if test="${status.index % 3 == 1 }">btn-warning</c:if><c:if test="${status.index % 3 == 2 }">btn-success</c:if>">查看</a>
                                    <i class="fa fa-clock-o"></i> <fmt:formatDate value="${systemRole.updateTime}" pattern="yyyy.MM.dd" />
                                </div>
                            </li>
                        </c:forEach> --%>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-sm-9">
                <div class="ibox float-e-margins" >
                    <div class="ibox-title" >
                        <h5>角色列表</h5>
                        <div class="ibox-tools">
                            <a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                            <a class="close-link"><i class="fa fa-times"></i></a>
                        </div>
                    </div>
                    <div class="ibox-content" style="height:552px">
                        <div class="row row-lg">
                            <div class="col-sm-12">
                                <div class="example-wrap">
                                    <div class="example">
                                        <div id="toolbar" class="btn-group m-t-sm">
                                            <button id="add" type="button" class="btn btn-default"  title="创建角色">
                                                <i class="glyphicon glyphicon-plus"></i>
                                            </button>
                                        </div>
                                        <%-- <table id="table"
                                           data-toggle="table"
                                           data-height="500"
                                           data-search="true"
                                           data-show-refresh="true"
                                           data-show-toggle="true"
                                           data-show-export="true"
                                           data-show-pagination-switch="true"
                                           data-show-columns="true"
                                           data-striped="true"
                                           data-pagination="true"
                                           data-sort-name="stargazers_count"
                                           data-sort-order="desc"
                                           data-toolbar="#toolbar">
                                        <thead>
                                        <tr>
                                            <th data-halign="center" data-align="center" data-sortable="true">角色名称</th>
                                            <th data-halign="center" data-align="center" data-sortable="true">创建者</th>
                                            <th data-halign="center" data-align="center" data-sortable="true">创建时间</th>
                                            <th data-halign="center" data-align="center" data-sortable="true">系统数据</th>
                                            <th data-halign="center" data-align="center">状态</th>
                                            <th data-halign="center" data-align="center">操作</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <c:forEach items="${roleList}" var="systemRole">
                                        <tr>
                                            <td>${systemRole.roleName}</td>
                                            <td>${systemRole.createBy}</td>
                                            <td><fmt:formatDate value="${systemRole.createTime}" pattern="yyyy/MM/dd" /></td>
                                            <td class="td-isSystem">
                                            <c:if test="${systemRole.isSystem==1}"><span class="label label-primary">是</span></c:if>
                                            <c:if test="${systemRole.isSystem==0}"><span class="label label-danger">否</span></c:if>
                                            </td>
                                            <td class="td-status">
                                            <c:if test="${systemRole.status==1}"><span class="label label-primary">正常</span></c:if>
                                            <c:if test="${systemRole.status==0}"><span class="label label-danger">冻结</span></c:if>
                                            </td>
                                            <td class="td-manage">  
                                            <c:if test="${systemRole.status==1}"><a class="like text-info" href="javascript:void(0)" onClick="role_stop(this,${systemRole.id})" title="冻结"><i class="glyphicon glyphicon-pause"></i></a></c:if>
                                            <c:if test="${systemRole.status==0}"><a class="like text-info" href="javascript:void(0)" onClick="role_start(this,${systemRole.id})" title="启用"><i class="glyphicon glyphicon-play"></i></a></c:if>
                                            <a class="edit m-l-sm text-warning" href="javascript:void(0)" onclick="role_show('${systemRole.roleName}','${ctx}/system/sysrole/list','${systemRole.id}','edit','900',null)" title="编辑">
                                            <i class="glyphicon glyphicon-edit"></i>
                                            </a>
                                            <a class="remove m-l-sm text-danger" href="javascript:void(0)" onclick="role_del(this,${systemRole.id})" title="删除">
                                            <i class="glyphicon glyphicon-remove"></i>
                                            </a>
                                            </td>
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
        <script src="../../../static/common/js/common.js"></script>
    <!-- 自定义js -->
    <script src="../../../static/admin/main/js/sysrole-list.js"></script>
    </tiziFooter>

  </body>
</html>
