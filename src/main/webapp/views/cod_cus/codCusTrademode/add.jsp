<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>监管方式证件表-新增</title>
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
                <h5>监管方式证件表-新增</h5>
           </div>
            <div class="ibox-content">
                <form id="form" class="form-horizontal">
                    <div class="form-group">
                        <label class="col-sm-2 control-label">序号<span style="color:red;">*</span>：</label>
                        <div class="col-sm-4">
                            <input type="text" maxlength="10" class="form-control" id="pkSeq" name="pkSeq" placeholder="请填写序号">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label">代码<span style="color:red;">*</span>：</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" name="tradeMode" id="tradeMode" placeholder="请填写代码">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label">国内地区性质标记</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" name="districtT" id="districtT" placeholder="请填写国内地区性质标记">
                        </div>
                    </div>
                     <div class="form-group">
                        <label class="col-sm-2 control-label">进口适用范围证件</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" name="basicIm" id="basicIm" placeholder="请填写进口适用范围证件">
                        </div>
                    </div>
                     <div class="form-group">
                        <label class="col-sm-2 control-label">出口适用范围证件</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" name="basicEx" id="basicEx" placeholder="请填写出口适用范围证件">
                        </div>
                    </div>
                     <div class="form-group">
                        <label class="col-sm-2 control-label">进口特殊监管证件</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" name="imControl" id="imControl" placeholder="请填写进口特殊监管证件">
                        </div>
                    </div>
                     <div class="form-group">
                        <label class="col-sm-2 control-label">出口特殊监管证件</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" name="exControl" id="exControl" placeholder="请填写出口特殊监管证件">
                        </div>
                    </div>
                    <div class="hr-line-dashed"></div>
                    <div class="form-group">
                        <div class="col-sm-offset-4">
                            <button class="btn btn-primary" type="button" id="submit" onclick="FormUtils.save('form','/add')">保存</button>
                            <button class="btn btn-primary" type="button" id="reback" onclick="Utils.redirect('../../../views/cod_cus/codCusTrademode/list.jsp')">返回</button>
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
    <script src="../../../static/admin/main/js/content.js"></script>
    <script src="../../../static/common/js/common.js"></script>
    <!-- 自定义js -->
    <script src="../../../static/cod_cus/js/codCusTrademode.js"></script>
</tiziFooter>
</body>
</html>