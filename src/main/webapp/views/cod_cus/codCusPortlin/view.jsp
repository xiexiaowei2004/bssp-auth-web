<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>港口航线-查阅</title>
    <link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css" />
    <link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css" />
    <link rel="stylesheet" href="../../../static/admin/main/css/animate.css" />
    <link rel="stylesheet" href="../../../static/common/css/style.css" />
    <link rel="stylesheet" href="../../../static/common/css/common.css" />
</head>
<body class="gray-bg">
<div class="container animated fadeInRight">
    <div class="ibox">
        <div class="ibox-title font-bold">   <h5>港口航线-查阅</h5>
            <a href="#1" class="collapse-link pull-right" title="收起"><i class="fa fa-chevron-up"></i></a>
        </div>
            <div class="ibox-content">
                <form id="form" class="form-horizontal">
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">序号</label>
                        <div class="col-sm-4 m-t-sm">
                            <span id="pkSeq" name="pkSeq" class="view-span"></span>
                        </div>
                    </div>
                      <div class="form-group">
                   <label class="col-sm-2 control-label col-sm-offset-1">港口中文名称</label>
                        <div class="col-sm-4 m-t-sm">
                           <span id="portCCod" name="portCCod" class="view-span" placeholder="请填写港口中文名称"></span> 
                        </div>
                    </div>
                      <div class="form-group">
                          <label class="col-sm-2 control-label col-sm-offset-1">港口英文名称</label>
                        <div class="col-sm-4 m-t-sm">
                           <span id="portECod" name="portECod" class="view-span" placeholder="请填写港口英文名称"></span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">航线</label>
                        <div class="col-sm-4 m-t-sm">
                           <span id="portLine" name="portLine" class="view-span" placeholder="请填写航线"></span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">总数</label>
                        <div class="col-sm-4 m-t-sm">
                            <span id="portCount" name="portCount" class="view-span" placeholder="请填写总数"></span> 
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">港口代码</label>
                        <div class="col-sm-4 m-t-sm">
                           <span id="portCode" name="portCode" class="view-span" placeholder="请填写港口代码"></span>
                        </div>
                    </div>
                     <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">隔离</label>
                        <div class="col-sm-4 m-t-sm">
                           <span id="quarantine" name="quarantine" class="view-span"  placeholder="请填写隔离"></span>
                        </div>
                    </div>
                    
                   
                    <div class="hr-line-dashed"></div>
                    <div class="form-group">
                        <div class="text-center">
                            <a href="#1" class="btn btn-info fa fa-mail-reply" id="reback" onclick="Utils.redirect('../../../views/cod_cus/codCusPortlin/list.jsp')">返回</a>
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
    <!-- 自定义js -->
    <script src="../../../static/cod_cus/js/codCusPortlin.js"></script>
</tiziFooter>
<script>
    $(function () {
    	FormUtils.getData();
    });
</script>
</body>
</html>