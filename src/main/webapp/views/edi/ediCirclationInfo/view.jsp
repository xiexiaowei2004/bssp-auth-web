<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>数据字典维护-查阅</title>
    <link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css" />
    <link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css" />
    <link rel="stylesheet" href="../../../static/admin/main/css/animate.css" />
    <link rel="stylesheet" href="../../../static/common/css/style.css" />
    <link rel="stylesheet" href="../../../static/common/css/common.css" />
</head>
<body>
<div class="wrapper">
    <div class="col-sm-12">
        <div class="ibox float-e-margins">
            <div class="ibox-title">
                <h5>路由配置-查阅</h5>
            </div>
            <div class="ibox-content">
                <form id="form" class="form-horizontal">
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">监管场所<span style="color:red;">*</span>：</label>
                        <div class="col-sm-4">
                            <span id="areaCode" name="areaCode" class="view-span"></span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">认证码<span style="color:red;"></span>：</label>
                        <div class="col-sm-4">
                            <span id="toKen" name="toKen" class="view-span"></span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">单据类型<span style="color:red;">*</span>：</label>
                        <div class="col-sm-4">
                            <span id="docType" name="docType" class="view-span"></span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">单据名称<span style="color:red;">*</span>：</label>
                        <div class="col-sm-4">
                            <span id="docName" name="docName" class="view-span"></span>
                        </div>
                    </div>
                <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">业务类型<span style="color:red;">*</span>：</label>
                        <div class="col-sm-4">
                            <span id="bizType" name="bizType" class="view-span"></span>
                        </div>
                    </div>
                   <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">业务名称<span style="color:red;">*</span>：</label>
                        <div class="col-sm-4">
                            <span id="bizType" name="bizName" class="bizName"></span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">路由标识<span style="color:red;"></span>：</label>
                        <div class="col-sm-4">
                            <span id="routeType" name="routeType" class="view-span"></span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">报文头<span style="color:red;"></span>：</label>
                        <div class="col-sm-4">
                            <span id="proName" name="proName" class="view-span"></span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">启用标识<span style="color:red;">*</span>：</label>
                        <div class="col-sm-4">
                            <span id="status" name="status" class="view-span"></span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">传输方式<span style="color:red;">*</span>：</label>
                        <div class="col-sm-4">
                            <span id="transMode" name="transMode" class="view-span"></span>
                        </div>
                    </div>
                     <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">备注  <span style="color:red;"></span>：</label>
                        <div class="col-sm-4">
                            --<span id="remarks" name="remarks" class="view-span"></span> 
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">创建人代码<span style="color:red;">*</span>：</label>
                        <div class="col-sm-4">
                            <span id="createBy" name="createBy" class="view-span"></span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">创建人名称<span style="color:red;">*</span>：</label>
                        <div class="col-sm-4">
                            <span id="createName" name="createName" class="view-span"></span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">创建人时间<span style="color:red;">*</span>：</label>
                        <div class="col-sm-4">
                            <span id="createTime" name="createTime" class="view-span"></span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">修改人代码<span style="color:red;">*</span>：</label>
                        <div class="col-sm-4">
                            <span id="updateBy" name="updateBy" class="view-span"></span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">修改人名称<span style="color:red;">*</span>：</label>
                        <div class="col-sm-4">
                            <span id="updateName" name="updateName" class="view-span"></span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">修改人时间<span style="color:red;">*</span>：</label>
                        <div class="col-sm-4">
                            <span id="updateTime" name="updateTime" class="view-span"></span>
                        </div>
                    </div>
                   
                    <%--<div class="form-group">--%>
                        <%--<label class="col-sm-2 control-label col-sm-offset-1">企业是否年检：</label>--%>
                        <%--<div class="col-sm-4">--%>
                            <%--<span id="chkAnnual" name="chkAnnual" class="view-span"></span>--%>
                        <%--</div>--%>
                    <%--</div>--%>
                    <div class="hr-line-dashed"></div>
                    <div class="form-group">
                        <div class="col-sm-offset-4">
                            <%--<button class="btn btn-primary" type="button" id="submit" onclick="Submit()">提交</button>--%>
                            <button class="btn btn-primary" type="button" id="reback" 
                             onclick="Utils.redirect('../../../views/edi/ediRoutingInfo/list.jsp')">返回</button>
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
    <script src="../../../static/edi/js/ediRoutingInfo.js"></script>
</tiziFooter>
<script>
$(function () {
    FormUtils.getData();
});
</script>
</body>
</html>