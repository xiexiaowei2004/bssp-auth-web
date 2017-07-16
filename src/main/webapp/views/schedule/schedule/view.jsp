<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>管理定时任务-查阅</title>
    <link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css"/>
    <link rel="stylesheet" href="../../../static/admin/main/css/animate.css"/>
    <link rel="stylesheet" href="../../../static/admin/main/css/style.css"/>
    <link rel="stylesheet" href="../../../static/common/css/common.css"/>
</head>
<body class="gray-bg">
<div class="container animated fadeInRight">
        <div class="ibox">
            <div class="ibox-title font-bold"> <h5>管理定时任务-查阅</h5>
                <a href="#1" class="collapse-link pull-right" title="收起"><i class="fa fa-chevron-up"></i></a>
            </div>
            <div class="ibox-content">
                <form id="form" class="form-horizontal">
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">任务名称</label>
                        <div class="col-sm-4 m-t-sm">
                            <span id="jobName" name="jobName" class="view-span"></span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">任务分组</label>
                        <div class="col-sm-4 m-t-sm">
                            <span id="jobGroup" name="jobGroup" class="view-span"></span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">任务描述</label>
                        <div class="col-sm-4 m-t-sm">
                            <span id="jobDescription" name="jobDescription" class="view-span"></span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">任务状态</label>
                        <div class="col-sm-4 m-t-sm">
                            <span id="jobStatus" name="jobStatus" class="view-span"></span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">任务表达式</label>
                        <div class="col-sm-4 m-t-sm">
                            <span id="cronExpression" name="cronExpression" class="view-span"></span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">创建时间</label>
                        <div class="col-sm-4 m-t-sm">
                            <span id="createTime" name="createTime" class="view-span"></span>
                        </div>
                    </div>
                   
                    <div class="hr-line-dashed"></div>
                    <div class="form-group">
                        <div class="text-center">
                            <a href="#1" class="btn btn-info fa fa-mail-reply" id="reback" onclick="Utils.redirect('../../../views/schedule/schedule/list.jsp')">返回</a>
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
    <!-- 自定义js -->
    <script src="../../../static/admin/main/js/content.js"></script>
    <script src="../../../static/common/js/common.js"></script>
    <!-- 自定义js -->
    <script src="../../../static/schedule/js/schedule.js"></script>
</tiziFooter>
<script>
    $(function () {
        FormUtils.getData();
    });
</script>
</body>
</html>