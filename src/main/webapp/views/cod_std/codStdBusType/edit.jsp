<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>业务网分类-编辑</title>
    <link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css" />
    <link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css" />
    <link rel="stylesheet" href="../../../static/admin/main/css/animate.css" />
    <link rel="stylesheet" href="../../../static/common/css/style.css" />
</head>
<body>
<div class="wrapper">
    <div class="col-sm-48">
        <div class="ibox float-e-margins">
            <div class="ibox-title">
                <h5>业务分类-编辑</h5>
            </div>
            <div class="ibox-content">
                <form id="form" class="form-horizontal">
                    <div class="form-group">

                        <div class="col-sm-4">
                            <input type="hidden" class="form-control" name="uId" id="uId" placeholder="请填写编码">
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">业务分类编码<span style="color:red;">*</span>：</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" name="code" id="code" placeholder="请填写编码">
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">业务分类名称<span style="color:red;">*</span>：</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" name="name" id="name" placeholder="请填写业务分类名称">
                        </div>
                    </div>
                     <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">是否启用<span style="color:red;">*</span>：</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" name="enable" id="enable" placeholder="请填写是否启用">
                        </div>
                    </div>
                   
                    <div class="hr-line-dashed"></div>
                    <div class="form-group">
                        <div class="col-sm-offset-4">
                            <button class="btn btn-primary" type="button" id="submit"
                                    onclick="FormUtils.save('form','/update')">保存
                            </button>
                            <button class="btn btn-primary" type="button" id="reback"
                                    onclick="Utils.redirect('../../../views/cod_std/codStdBusType/list.jsp')">返回
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
    <script src="../../../static/cod_std/js/codStdBusType.js"></script>
</tiziFooter>
    <script>
    $(function () {
        FormUtils.getData();
    });
    </script>
</body>
</html>