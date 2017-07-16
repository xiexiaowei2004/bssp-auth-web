<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>监管方式证件表-查阅</title>
    <link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css" />
    <link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css" />
    <link rel="stylesheet" href="../../../static/admin/main/css/animate.css" />
    <link rel="stylesheet" href="../../../static/common/css/style.css" />
     <link rel="stylesheet" href="../../../static/common/css/common.css" />
</head>
<body class="gray-bg">
<div class="container animated fadeInRight">
    <div class="ibox">
        <div class="ibox-title font-bold">  <h5>监管方式证件表-查阅</h5>
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
                        <label class="col-sm-2 control-label col-sm-offset-1">代码</label>
                        <div class="col-sm-4 m-t-sm">
                            <span id="tradeMode" name="tradeMode" class="view-span"></span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">国内地区性质标记</label>
                        <div class="col-sm-4 m-t-sm">
                            <span id="districtT" name="districtT" class="view-span"></span>
                        </div>
                    </div>
                      <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">进口适用范围证件</label>
                        <div class="col-sm-4 m-t-sm">
                            <span id="basicIm" name="basicIm" class="view-span"></span>
                        </div>
                    </div>  <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">出口适用范围证件</label>
                        <div class="col-sm-4 m-t-sm">
                            <span id="basicEx" name="basicEx" class="view-span"></span>
                        </div>
                    </div>  <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">进口特殊监管证件</label>
                        <div class="col-sm-4 m-t-sm">
                            <span id="imControl" name="imControl" class="view-span"></span>
                        </div>
                    </div>
                     <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">出口特殊监管证件</label>
                        <div class="col-sm-4 m-t-sm">
                            <span id="exControl" name="exControl" class="view-span"></span>
                        </div>
                    </div>
                    <div class="hr-line-dashed"></div>
                    <div class="form-group">
                        <div class="text-center">
                            <a href="#1" class="btn btn-info fa fa-mail-reply" id="reback" onclick="Utils.redirect('../../../views/cod_cus/codCusTrademode/list.jsp')">返回</a>
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
    <script src="../../../static/cod_cus/js/codCusTrademode.js"></script>
</tiziFooter>
<script>
    $(function () {
    	FormUtils.getData();
    });
</script>
</body>
</html>