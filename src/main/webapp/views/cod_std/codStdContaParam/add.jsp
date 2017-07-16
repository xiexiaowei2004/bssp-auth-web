<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>集装箱参数-新增</title>
    <link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css" />
    <link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css" />
    <link rel="stylesheet" href="../../../static/admin/main/css/animate.css" />
    <link rel="stylesheet" href="../../../static/common/css/style.css" />
</head>
<body>
<div class="wrapper">
    <div class="col-sm-12">
        <div class="ibox float-e-margins">
            <div class="ibox-title">
                <h5>集装箱参数-新增</h5>
            </div>
            <div class="ibox-content">
                <form id="form" class="form-horizontal">
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">集装箱编号<span style="color:red;">*</span>：</label>
                        <div class="col-sm-4">
                            <input type="text" maxlength="10" class="form-control" name="code" placeholder="请填写集装箱编号">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">集装箱名称<span style="color:red;">*</span>：</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" name="name" placeholder="请填写集装箱名称">
                        </div>
                    </div>
                      <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">集装箱型号<span style="color:red;">*</span>：</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" name="model" placeholder="请填写集装箱型号">
                        </div>
                    </div>
                      <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">集装箱尺寸<span style="color:red;">*</span>：</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" name="size" placeholder="请填写集装箱尺寸">
                        </div>
                    </div>
                      <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">集装箱空重<span style="color:red;">*</span>：</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" name="empty" placeholder="请填写集装箱空重">
                        </div>
                    </div>
                      <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">集装箱柜型<span style="color:red;">*</span>：</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" name="cabinetType" placeholder="集装箱柜型">
                        </div>
                    </div>
                      <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">集装箱容积<span style="color:red;">*</span>：</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" name="volume" placeholder="集装箱容积">
                        </div>
                    </div>
                      <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">标准箱数量<span style="color:red;">*</span>：</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" name="boxNumber" placeholder="标准箱数量">
                        </div>
                    </div>
                    <%--<div class="form-group">--%>
                        <%--<label class="col-sm-2 control-label col-sm-offset-1">企业是否年检：</label>--%>
                        <%--<div class="col-sm-4">--%>
                            <%--<input type="text" class="form-control" name="chkAnnual" placeholder="请确认企业是否年检">--%>
                        <%--</div>--%>
                    <%--</div>--%>
                    <div class="hr-line-dashed"></div>
                    <div class="form-group">
                        <div class="col-sm-offset-4">
                            <button class="btn btn-primary" type="button" id="submit" onclick="FormUtils.save('form','/add')">保存</button>
                            <button class="btn btn-primary" type="button" id="reback" onclick="Utils.redirect('../../../views/cod_std/codStdContaParam/list.jsp')">返回</button>
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
    <script src="../../../static/cod_stdjs/codStdContaParam.js"></script>
</tiziFooter>
</body>
</html>