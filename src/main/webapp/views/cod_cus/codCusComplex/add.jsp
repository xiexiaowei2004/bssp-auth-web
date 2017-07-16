<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>商品税则-新增</title>
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
                <h5>商品税则-新增</h5>
            </div>
            <div class="ibox-content">
                <form id="form" class="form-horizontal">
                    <div class="form-group">
                        <label class="col-sm-1 control-label">序号<span style="color:red;">*</span>：</label>
                        <div class="col-sm-3">
                            <input type="text" maxlength="10" class="form-control" name="pkSeq" placeholder="请填写序号">
                        </div>
                        <label class="col-sm-1 control-label ">HS编码<span style="color:red;">*</span>：</label>
                        <div class="col-sm-3">
                            <input type="text" maxlength="10" class="form-control" name="codeT" placeholder="请填写HS编码">
                        </div>
                        <label class="col-sm-1 control-label ">附件编码<span style="color:red;">*</span>：</label>
                        <div class="col-sm-3">
                            <input type="text" maxlength="10" class="form-control" name="codeS" placeholder="请填写附件编码">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-1 control-label">商品名称<span style="color:red;">*</span>：</label>
                        <div class="col-sm-3">
                            <input type="text" maxlength="10" class="form-control" name="gName" placeholder="请填写商品名称">
                        </div>
                        <label class="col-sm-1 control-label">进口优惠关税<span style="color:red;">*</span>：</label>
                        <div class="col-sm-3">
                            <input type="text" maxlength="10" class="form-control" name="lowRate"
                                   placeholder="请填写进口优惠关税">
                        </div>
                        <label class="col-sm-1 control-label">进口普通关税<span style="color:red;">*</span>：</label>
                        <div class="col-sm-3">
                            <input type="text" maxlength="10" class="form-control" name="highRate"
                                   placeholder="请填写进口普通关税">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-1 control-label">出口关税<span style="color:red;">*</span>：</label>
                        <div class="col-sm-3">
                            <input type="text" maxlength="10" class="form-control" name="outRate" placeholder="请填写出口关税">
                        </div>
                        <label class="col-sm-1 control-label">申报标志<span style="color:red;">*</span>：</label>
                        <div class="col-sm-3">
                            <input type="text" maxlength="10" class="form-control" name="regMark" placeholder="请填写申报标志">
                        </div>
                        <label class="col-sm-1 control-label">消费税<span style="color:red;">*</span>：</label>
                        <div class="col-sm-3">
                            <input type="text" maxlength="10" class="form-control" name="regRate" placeholder="请填写消费税">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-1 control-label">征税类型<span style="color:red;">*</span>：</label>
                        <div class="col-sm-3">
                            <input type="text" maxlength="10" class="form-control" name="taxType" placeholder="请填写征税类型">
                        </div>
                        <label class="col-sm-1 control-label">增值税<span style="color:red;">*</span>：</label>
                        <div class="col-sm-3">
                            <input type="text" maxlength="10" class="form-control" name="taxRate" placeholder="请填写增值税">
                        </div>
                        <label class="col-sm-1 control-label">一般税率<span style="color:red;">*</span>：</label>
                        <div class="col-sm-3">
                            <input type="text" maxlength="10" class="form-control" name="commRate"
                                   placeholder="请填写一般税率">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-1 control-label">对台调节税<span style="color:red;">*</span>：</label>
                        <div class="col-sm-3">
                            <input type="text" maxlength="10" class="form-control" name="taiwanRate"
                                   placeholder="请填写对台调节税">
                        </div>
                        <label class="col-sm-1 control-label">其它类型<span style="color:red;">*</span>：</label>
                        <div class="col-sm-3">
                            <input type="text" maxlength="10" class="form-control" name="otherType"
                                   placeholder="请填写其它类型">
                        </div>
                        <label class="col-sm-1 control-label">其它费税率<span style="color:red;">*</span>：</label>
                        <div class="col-sm-3">
                            <input type="text" maxlength="10" class="form-control" name="otherRate"
                                   placeholder="请填写其它费税率">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-1 control-label">法定单位<span style="color:red;">*</span>：</label>
                        <div class="col-sm-3">
                            <input type="text" maxlength="10" class="form-control" name="unit1" placeholder="请填写法定单位">
                        </div>
                        <label class="col-sm-1 control-label">法定第二单位<span style="color:red;">*</span>：</label>
                        <div class="col-sm-3">
                            <input type="text" maxlength="10" class="form-control" name="unit2" placeholder="请填写法定第二单位">
                        </div>
                        <label class="col-sm-1 control-label">进口最低单价<span style="color:red;">*</span>：</label>
                        <div class="col-sm-3">
                            <input type="text" maxlength="10" class="form-control" name="ilowPrice"
                                   placeholder="请填写进口最低单价">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-1 control-label">进口最高单价<span style="color:red;">*</span>：</label>
                        <div class="col-sm-3">
                            <input type="text" maxlength="10" class="form-control" name="ihighPrice"
                                   placeholder="请填写进口最高单价">
                        </div>
                        <label class="col-sm-1 control-label">出口最低单价<span style="color:red;">*</span>：</label>
                        <div class="col-sm-3">
                            <input type="text" maxlength="10" class="form-control" name="elowPrice"
                                   placeholder="请填写出口最低单价">
                        </div>
                        <label class="col-sm-1 control-label">出口最高单价<span style="color:red;">*</span>：</label>
                        <div class="col-sm-3">
                            <input type="text" maxlength="10" class="form-control" name="ehighPrice"
                                   placeholder="请填写出口最高单价">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-1 control-label">最大进口量<span style="color:red;">*</span>：</label>
                        <div class="col-sm-3">
                            <input type="text" maxlength="10" class="form-control" name="maxIn" placeholder="请填写最大进口量">
                        </div>
                        <label class="col-sm-1 control-label">最大出口量<span style="color:red;">*</span>：</label>
                        <div class="col-sm-3">
                            <input type="text" maxlength="10" class="form-control" name="maxOut" placeholder="请填写最大出口量">
                        </div>
                        <label class="col-sm-1 control-label">监管条件<span style="color:red;">*</span>：</label>
                        <div class="col-sm-3">
                            <input type="text" maxlength="10" class="form-control" name="controlMa"
                                   placeholder="请填写监管条件">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-1 control-label">价格<span style="color:red;">*</span>：</label>
                        <div class="col-sm-3">
                            <input type="text" maxlength="10" class="form-control" name="chkPrice" placeholder="请填写价格">
                        </div>
                        <label class="col-sm-1 control-label">关税标志<span style="color:red;">*</span>：</label>
                        <div class="col-sm-3">
                            <input type="text" maxlength="10" class="form-control" name="tariffMark"
                                   placeholder="请填写关税标志">
                        </div>
                        <label class="col-sm-1 control-label">备注<span style="color:red;">*</span>：</label>
                        <div class="col-sm-3">
                            <input type="text" maxlength="10" class="form-control" name="noteS" placeholder="请填写备注">
                        </div>
                    </div>
                    <div class="hr-line-dashed"></div>
                    <div class="form-group">
                        <div class="col-sm-offset-4">
                            <button class="btn btn-primary" type="button" id="submit"
                                    onclick="FormUtils.save('form','/add')">保存
                            </button>
                            <button class="btn btn-primary" type="button" id="reback"
                                    onclick="Utils.redirect('../../../views/cod_cus/codCusComplex/list.jsp')">返回
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
    <script src="../../../static/cod_cus/js/codCusComplex.js"></script>
</tiziFooter>
</body>
</html>