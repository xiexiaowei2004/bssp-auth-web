<%@ page language="java" import="java.util.*" contentType="text/html; charset=utf-8"%>
<!DOCTYPE HTML>
<html>
  <head>
    <title>创建菜单</title>
    <link rel="stylesheet" href="../../../static/common/icheck/flat/green.css" />
 	<link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css" />
	<link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css" />
	<link rel="stylesheet" href="../../../static/admin/main/css/animate.css" />
	<link rel="stylesheet" href="../../../static/common/css/style.css" />
  </head>
  
  <body class="gray-bg">
    <div class="wrapper add-member-content animated fadeInRight">
        <div class="row">
            <div class="col-sm-12">
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5 id="show-title">创建菜单</h5>
                        <div class="ibox-tools">
                            <a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                            <a class="close-link"><i class="fa fa-times"></i></a>
                        </div>
                    </div>
                    <div class="ibox-content">
                        <form id="systemmenuform" class="form-horizontal">
                            <div class="form-group"> 
                                <label class="col-sm-2 control-label">上级菜单：</label>
								<div class="col-sm-4">
										<select class="form-control" id="systemMenuParent">
										  <option id="root-option" data-parent="0">根菜单</option>
										</select>
                                </div> 
                            </div>
                             <div class="hr-line-dashed"></div>
                             <div class="form-group">
                              <label class="col-sm-2 control-label">菜单名称：</label>
								<div class="col-sm-4">
                                	<input type="text" maxlength="30" class="form-control" name="menuName" placeholder="请填写菜单名称">
                                </div> 
                             </div>
                            <div class="hr-line-dashed"></div>
                             <div class="form-group">
                              <label class="col-sm-2 control-label">菜单链接：</label>
								<div class="col-sm-4">
                                	<input type="text" maxlength="60" class="form-control" name="href" placeholder="请填写菜单链接">
                                </div> 
                             </div>
                            <div class="hr-line-dashed"></div>
                            <div class="form-group">
                                <label class="col-sm-2 control-label">菜单类型：</label>
								<div class="col-sm-8">
                                  <label class="radio-inline">
									  <input id="opr-type" class="menu-type" type="radio"  value="0" name="menuType"/>操作
									</label>
									<label class="radio-inline">
									  <input id="menu-type" class="menu-type" type="radio"  value="1"name="menuType"/> 菜单
									</label>
									<label class="radio-inline">
									  <input id="func-type" class="menu-type" type="radio"  value="2" name="menuType"/> 功能
									</label>               
                                </div> 
                            </div>
                            <div class="hr-line-dashed"></div>
                            <div class="form-group">
                                 <label class="col-sm-2 control-label">授权标识：</label>
								<div class="col-sm-4">
                                	<input type="text" maxlength="60" class="form-control" name="permission">
                                </div> 
                                 <label class="col-sm-2 control-label">权限代码：</label>
								<div class="col-sm-4">
                                	<input type="text" class="form-control" name="menuCode"/>
                                </div>
                                
                            </div>
                            <div class="hr-line-dashed"></div>
                            <div class="form-group">
                            <label class="col-sm-2 control-label">排序：</label>
								<div class="col-sm-4">
                                	<input type="text" class="form-control" name="sort"/>
                                </div> 
                                <label class="col-sm-2 control-label">图标：</label>
								<div class="col-sm-4">
									<input type="text" class="form-control" name="icon" value="">
                                </div> 
                            </div>
                            <div class="hr-line-dashed"></div>
                             <div class="form-group">
                             	<label class="col-sm-2 control-label">状态：</label>
                                <div class="col-sm-4">
                                   <label class="radio-inline add-radio">
                                    <input id="open-status" class="flag-status" type="radio" name="status" value="1"/>  开启</label>
                                    <label class="radio-inline add-radio">  <input id="close-status" class="flag-status" type="radio" name="status" value="0"/>  关闭</label>
                                </div>
                             </div>
                            <div class="hr-line-dashed"></div>
                            <div class="form-group">
                                <div class="col-sm-4 col-sm-offset-4 add-submit">
                                	<input type="hidden" class="form-control" name="id"/>
                                    <button class="btn btn-primary sysmenusubmit" type="button" id="submit">提交</button>
                                    <button class="btn btn-primary" type="button" id="reback" onclick="Utils.redirect('../../../views/admin/system/system_menu_list.jsp')">返回</button>
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
	<script src="../../../static/common/bootstrapvalidator-master/js/bootstrapValidator.min.js"></script>
    <script src="../../../static/common/bootstrap-table-master/bootstrap-table.min.js"></script>
    <script src="../../../static/common/js/common.js"></script>
     	<!-- 自定义js -->
    <script src="../../../static/admin/main/js/sysmenu-add.js"></script>
    </tiziFooter>
</body>
</html>
