<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>监管场所-新增</title>
    <link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css" />
    <link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css" />
    <link rel="stylesheet" href="../../../static/admin/main/css/animate.css" />
    <link rel="stylesheet" href="../../../static/common/css/style.css" />
    <link rel="stylesheet" href="../../../static/common/select2/css/select2.min.css" />
</head>
<body>
<div class="wrapper">
    <div class="col-sm-12">
        <div class="ibox float-e-margins">
            <div class="ibox-title">
                <h5>监管场所-新增</h5>
            </div>
            <div class="ibox-content">
                <form id="form" class="form-horizontal">
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">关区代码<span style="color:red;">*</span>：</label>
                        <div class="col-sm-4">
                        	<select class="form-control select2-width input-sm" name="customsCode" value="" dll_name="codCusCustomsfec" />
                                <option value="">--请选择--</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">监管场所<span style="color:red;">*</span>：</label>
                        <div class="col-sm-4">
                            <input type="text" maxlength="10" class="form-control" name="areaCode" placeholder="请填写五位监管场所">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">场地名称<span style="color:red;">*</span>：</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" name="areaName" placeholder="请填写场地名称">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">访问地址1：</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" name="visitUrlFirst" placeholder="请填写访问地址">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">访问地址2：</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" name="visitUrlSec" placeholder="请填写访问地址">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">是否启用：</label>
                        <div class="col-sm-4">
                            <!-- <input type="text" class="form-control" name="isEnable" placeholder="是否启用"> -->
                       		<select type="text" class="form-control" name="isEnable" placeholder="是否启用">
                                    <option value="Y">启用</option>
                                    <option value="N">禁用</option>
                                </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">备注：</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" name="remarks" placeholder="请填写备注">
                        </div>
                    </div>
                    <div class="hr-line-dashed"></div>
                    <div class="form-group">
                        <div class="col-sm-offset-4">
                            <button class="btn btn-primary" type="button" id="submit" onclick="save('form','/add')">保存</button>
                        	<button class="btn btn-primary" type="button" id="modalReback" onclick="closeModalDialog()">返回</button>
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
    <!-- 全局js -->
    <script> var t1 = new Date().getTime(); baselocation='../../..';</script>
    <!-- 自定义js -->
    <script src="../../../static/admin/main/js/content.js"></script>
    <script src="../../../static/common/js/common.js"></script>
    <!-- 自定义js -->
    <script src="../../../static/cod_std/js/codStdAreaCode.js"></script>
	<script src="../../../static/common/select2/js/select2.full.js"></script>
</tiziFooter>
</body>
</html>