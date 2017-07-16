<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>商品归类-新增</title>
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
                <h5>商品归类-新增</h5>
            </div>
            <div class="ibox-content">
                <form id="form" class="form-horizontal">
                    <div class="form-group">
                        <label class="col-sm-1 control-label col-sm-offset-1">序号<span
                                style="color:red;">*</span>：</label>
                        <div class="col-sm-3">
                            <input type="text" maxlength="10" class="form-control" name="pkSeq" placeholder="请填写序号">
                        </div>
                        <label class="col-sm-1 control-label">商品名称<span style="color:red;">*</span>：</label>
                        <div class="col-sm-3">
                            <input type="text" maxlength="10" class="form-control" name="gName" placeholder="请填写商品名称">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-1 control-label col-sm-offset-1">商品英文名称<span
                                style="color:red;">*</span>：</label>
                        <div class="col-sm-3">
                            <input type="text" maxlength="10" class="form-control" name="keyName"
                                   placeholder="请填写商品英文名称">
                        </div>
                        <label class="col-sm-1 control-label">归类描述<span style="color:red;">*</span>：</label>
                        <div class="col-sm-3">
                            <input type="text" class="form-control" name="classSpec" placeholder="请填写归类描述">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-1 control-label col-sm-offset-1">商品编码<span
                                style="color:red;">*</span>：</label>
                        <div class="col-sm-3">
                            <input type="text" maxlength="10" class="form-control" name="codeT" placeholder="请填写商品编码">
                        </div>
                        <label class="col-sm-1 control-label">扩展编码<span style="color:red;">*</span>：</label>
                        <div class="col-sm-3">
                            <input type="text" maxlength="10" class="form-control" name="codeS" placeholder="请填写扩展编码">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-1 control-label col-sm-offset-1">归类号<span
                                style="color:red;">*</span>：</label>
                        <div class="col-sm-3">
                            <input type="text" maxlength="10" class="form-control" name="classNo" placeholder="请填写归类号">
                        </div>
                    </div>
                    <div class="hr-line-dashed"></div>
                    <div class="form-group">
                        <div class="col-sm-offset-4">
                            <button class="btn btn-primary" type="button" id="submit"
                                    onclick="FormUtils.save('form','/add')">保存
                            </button>
                            <button class="btn btn-primary" type="button" id="reback"
                                    onclick="Utils.redirect('../../../views/cod_cus/codCusClassify/list.jsp')">返回
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
    <script src="../../../static/cod_cus/js/codCusClassify.js"></script>
</tiziFooter>
</body>
</html>