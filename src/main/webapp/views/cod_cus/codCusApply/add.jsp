<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>应用-新增</title>
    <link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css"/>
    <link rel="stylesheet" href="../../../static/admin/main/css/animate.css"/>
    <link rel="stylesheet" href="../../../static/admin/main/css/style.css"/>
</head>
<body>
<div class="wrapper">
    <div class="col-sm-12">
        <div class="ibox float-e-margins">
            <div class="ibox-title">
                <h5>应用-新增</h5>
            </div>
            <div class="ibox-content">
                <form id="form" class="form-horizontal">
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">应用编码<span
                                style="color:red;">*</span>：</label>
                        <div class="col-sm-4">
                            <input type="text" maxlength="10" class="form-control" name="applyId" placeholder="请填写应用代码">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">应用名称<span
                                style="color:red;">*</span>：</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" name="applyName" placeholder="请填写应用名称">
                        </div>
                    </div>

                  
                     <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">创建人<span style="color:red;">*</span>：</label>
                        <div class="col-sm-4">
						 <input type="text" class="form-control" name="createBy" placeholder="请填写创建人">
                        </div>
                    </div>

       

                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">状态<span
                                style="color:red;">*</span>：</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" name="state" placeholder="请填写状态">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">备注信息<span
                                style="color:red;">*</span>：</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" name="remarks" placeholder="请填写备注人">
                        </div>
                    </div>

                    <div class="hr-line-dashed"></div>
                    <div class="form-group">
                        <div class="col-sm-offset-4">
                            <button class="btn btn-primary" type="button" id="submit"
                                    onclick="FormUtils.save('form','/add')">保存
                            </button>
                            <button class="btn btn-primary" type="button" id="reback"
                                    onclick="Utils.redirect('../../../views/cod_cus/codCusApply/list.jsp')">返回
                            </button>
                        </div>
                    </div>
                </form>
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
    <!-- 自定义js -->
    <script src="../../../static/admin/main/js/content.js"></script>
    <script src="../../../static/common/js/common.js"></script>
    <!-- 自定义js -->
    <script src="../../../static/cod_cus/js/codCusApply.js"></script>
</tiziFooter>
</body>
</html>