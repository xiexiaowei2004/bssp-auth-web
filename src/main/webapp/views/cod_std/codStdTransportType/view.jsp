<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>企业类型-查阅</title>
    <link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css"/>
    <link rel="stylesheet" href="../../../static/admin/main/css/animate.css"/>
    <link rel="stylesheet" href="../../../static/admin/main/css/style.css"/>
    <link rel="stylesheet" href="../../../static/common/css/common.css"/>
    <link rel="stylesheet" href="../../../static/common/select2/css/select2.min.css"/>
</head>
<body class="gray-bg">
<div class="container animated fadeInRight">
    <div class="ibox">
        <div class="ibox-title font-bold"> <h5>运输类型参数-查阅</h5>
            <a href="#1" class="collapse-link pull-right" title="收起"><i class="fa fa-chevron-up"></i></a>
        </div>
            <div class="ibox-content">
                <form id="form" class="form-horizontal">
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">运输类型参数代码：</label>
                        <div class="col-sm-4 m-t-sm">
                            <span id="code" name="code" class="view-span"></span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">运输类型参数名称：</label>
                        <div class="col-sm-4 m-t-sm">
                            <span id="name" name="name" class="view-span"></span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">关区名称：</label>
                        <div class="col-sm-4">
                            <select class="form-control select2-width input-sm" id="customsCode" name="customsCode" value="" dll_name="codCusCustomsfec" disabled></select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">场地名称：</label>
                        <div class="col-sm-4">
                            <select class="form-control select2-width input-sm" id="areaCode" name="areaCode" value="" dll_name="codStdAreaCode" disabled></select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">是否启用：</label>
                        <div class="col-sm-4 m-t-sm">
                            <span id="isEnable" name="isEnable" class="view-span"></span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">创建人：</label>
                        <div class="col-sm-4 m-t-sm">
                            <span id="createBy" name="createBy" class="view-span"></span>
                        </div>
                    </div>
                    <div class="hr-line-dashed"></div>
                    <div class="form-group">
                        <div class="text-center">
                            <a href="#1" class="btn btn-info fa fa-mail-reply" id="reback" onclick="Utils.redirect('../../../views/cod_std/codStdTransportType/list.jsp')">返回</a>
                        </div>
                    </div>
                </form>
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
    <script src="../../../static/admin/main/js/content.js"></script>
    <script src="../../../static/common/js/common.js"></script>
    <script src="../../../static/common/select2/js/select2.full.js"></script>
    <!-- 自定义js -->
    <script src="../../../static/cod_std/js/codStdTransportType_form.js"></script>
</tiziFooter>
</body>
</html>