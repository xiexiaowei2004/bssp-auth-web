<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>申报报文日志-修改</title>
    <link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css" />
    <link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css" />
    <link rel="stylesheet" href="../../../static/admin/main/css/animate.css" />
    <link rel="stylesheet" href="../../../static/common/css/style.css" />
    <link rel="stylesheet" href="../../../static/common/css/common.css" />
</head>
<body class="gray-bg">
<div class="container animated fadeInRight">
    <div class="ibox">
    	<div class="ibox-title font-bold">申报报文日志-修改
			<div class="pull-right">
				<a href="#1" class="collapse-link" title="收起表头"><i class="fa fa-chevron-up"></i></a>
			</div>
		</div>
		<div class="ibox-content">
        	<div class="row">
                <div class="col-md-12 m-b-sm">
                   	<!-- <span class="m-r-sm">
						<a href="#1" class="btn btn-info fa fa-info-circle" id="query">报文详情</a>
					</span> -->

                    <button class="btn btn-primary" type="button" id="submit" onclick="FormUtils.save('dataForm','/update','false')">保存</button>
                    <button class="btn btn-primary" type="button" id="reback" onclick="Utils.redirect('../../../views/edi/ediSendLog/list.jsp')">返回</button>
                </div>
                <form id="dataForm" class="form-horizontal">
                    <input type="hidden" id="uid" name="uid">
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">监管场所</label>
                        <div class="col-sm-4 m-t-sm">
                            <input class="form-control" id="areaCode" name="areaCode" >
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">单据类型</label>
                        <div class="col-sm-4 m-t-sm">
                           <input class="form-control" id="docType" name="docType" >
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">业务类型</label>
                        <div class="col-sm-4 m-t-sm">
                             <input class="form-control" id="bizType" name="bizType" >
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">单据编号</label>
                        <div class="col-sm-4 m-t-sm">
                            <input class="form-control" id="seqNo" name="seqNo" >
                        </div>
                    </div>
                <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">处理标识</label>
                        <div class="col-sm-4 m-t-sm">
                            <input class="form-control" id="status" name="status" >
                        </div>
                    </div>
                   <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">备注</label>
                        <div class="col-sm-4 m-t-sm">

                            <input class="form-control" id="remarks" name="remarks" >
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">创建时间</label>
                        <div class="col-sm-4 m-t-sm">
                          <input class="form-control" id="createTime" name="createTime" >
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">修改时间</label>
                        <div class="col-sm-4 m-t-sm">
                            <input class="form-control" id="updateTime" name="updateTime" >
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">错误原因</label>
                        <div class="col-sm-4 m-t-sm">

                            <td colspan="5"><textarea class="form-control" rows="4" id="rmk" name="rmk"></textarea></td>

                        </div>

                    </div>
                </form>
            </div>
        </div>

    </div>
</div>


    <script src="../../../static/common/jquery/jquery-3.1.1.min.js"></script>
    <script src="../../../static/common/bootstrap/js/bootstrap.min.js"></script>
    <script src="../../../static/admin/main/js/metisMenu/jquery.metisMenu.js"></script>
    <script src="../../../static/admin/main/js/slimscroll/jquery.slimscroll.min.js"></script>
    <!-- jquery-ui-->
    <script src="../../../static/common/jquery/jquery-ui.min.js"></script>
    <!-- layer javascript -->
    <script src="../../../static/common/layer/layer.js"></script>
    <!-- Bootstrap table -->
    <script src="../../../static/common/bootstrap-table-master/bootstrap-table.min.js"></script>
    <script src="../../../static/common/bootstrap-table-master/extensions/export/bootstrap-table-export.js"></script>
    <script src="../../../static/common/bootstrap-table-master/tableExport.js"></script>
    <script src="../../../static/common/bootstrap-table-master/locale/bootstrap-table-zh-CN.min.js"></script>
    <!-- Data picker -->
    <script src="../../../static/admin/main/js/content.js"></script>
    <script src="../../../static/common/bootstrap-datepicker-master/js/bootstrap-datepicker.js"></script>
    <!-- select2 -->
    <script src="../../../static/common/select2/js/select2.full.js"></script>
    <script src="../../../static/common/select2/js/i18n/zh-CN.js"></script>
    <!-- 自定义js -->
    <script src="../../../static/common/js/common.js"></script>
    <script src="../../../static/edi/js/ediSendLog.js"></script>

<script>
$(function () {
    FormUtils.getData();
});
</script>
</body>
</html>