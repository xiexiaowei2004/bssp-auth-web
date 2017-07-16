<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>回执报文查询-查阅</title>
    <link rel="stylesheet" href="../../../static/common/bootstrap-table-master/bootstrap-table.min.css"/>
    <link rel="stylesheet" href="../../../static/common/bootstrap-datepicker-master/css/bootstrap-datepicker3.min.css"/>
    <link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css"/>
    <link rel="stylesheet" href="../../../static/common/select2/css/select2.min.css" type="text/css">
    <link rel="stylesheet" href="../../../static/admin/main/css/animate.css"/>
    <link rel="stylesheet" href="../../../static/common/css/style.css"/>
    <link rel="stylesheet" href="../../../static/common/css/style.css"/>

    <style>
        #form td {
            border: none;
        }
    </style>
</head>
<body class="gray-bg">
<div class="container animated fadeInRight">
    <div class="ibox">
        <div class="ibox-title with-border collapsed-box">
            <div class="pull-left">
                <h4 class="box-title pull-left" id="headTitle">回执报文查询-查阅</h4>
            </div>
            <div class="pull-right">
                <a href="#1" class="collapse-link" title="收起表头"><i class="fa fa-chevron-up"></i></a>
            </div>
        </div>
        <div class="ibox-content">
            	<span class="m-r-sm">
						<a href="#1" class="btn btn-info fa fa-info-circle" id="query">报文详情</a>
                </span>
            <a href="#1" class="btn btn-info fa fa-mail-reply" id="reback" onclick="Utils.redirect('../../../views/edi/ediRecvData/list.jsp')">返回</a>
        </div>
        <div class="ibox-content">
            <form id="form" class="form-horizontal">
                <table class="table table-condensed noborder">
                    <tr>
                        <td class="table-label text-nowrap text-right">业务单据编号</td>
                        <td><input class="form-control" id="docId" name="docId" readonly></td>
                        <td class="table-label text-nowrap text-right">监管场所</td>
                        <td><input class="form-control" id="areaCode" name="areaCode" readonly></td>
                        <td class="table-label text-nowrap text-right">单据类型</td>
                        <td><input class="form-control" id="docType" name="docType" readonly></td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap text-right">业务类型</td>
                        <td><input class="form-control" id="bizType" name="bizType" readonly></td>
                        <td class="table-label text-nowrap text-right">单据编号</td>
                        <td><input class="form-control" id="seqNo" name="seqNo" readonly></td>
                        <td class="table-label text-nowrap text-right">单据状态</td>
                        <td><input class="form-control" id="chkStatus" name="chkStatus" readonly></td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap text-right">全程通道</td>
                        <td><input class="form-control" id="retChannel" name="retChannel" readonly></td>
                        <td class="table-label text-nowrap text-right">主管海关</td>
                        <td><input class="form-control" id="customsCode" name="customsCode" readonly></td>
                        <td class="table-label text-nowrap text-right">国检代码</td>
                        <td><input class="form-control" id="ciqCode" name="ciqCode" readonly></td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap text-right">公共代码</td>
                        <td><input class="form-control" id="publcCode" name="publcCode" readonly></td>
                        <td class="table-label text-nowrap text-right">录入时间</td>
                        <td><input class="form-control" id="inputerTime" name="inputerTime" readonly></td>
                        <td class="table-label text-nowrap text-right">处理标识</td>
                        <td><input class="form-control" id="status" name="status" readonly></td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap text-right">源数据编号</td>
                        <td><input class="form-control" id="messageUid" name="messageUid" readonly></td>
                        <td class="table-label text-nowrap text-right">包唯一标识</td>
                        <td><input class="form-control" id="pocketId" name="pocketId" readonly></td>
                        <td class="table-label text-nowrap text-right">包总数</td>
                        <td><input class="form-control" id="totalPocketQty" name="totalPocketQty" readonly></td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap text-right">当前包序号</td>
                        <td><input class="form-control" id="curPocketNo" name="curPocketNo" readonly></td>
                        <%--<td class="table-label text-nowrap text-right">XML数据</td>
                        <td><input class="form-control" id="bigDataStr" name="bigDataStr" readonly></td>--%>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap text-right">XML数据</td>
                        <td colspan="5">
                            <textarea class="form-control" rows="8" cols="100%" id="bigDataStr" name="bigDataStr" readonly></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap text-right">备注</td>
                        <td colspan="5"><input class="form-control" id="note" name="note" readonly></td>
                    </tr>
                </table>
            </form>
        </div>
    </div>


    <!-- 新增模态框（Modal） -->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog" style="width: 80%;">
            <div class="modal-content">
                <div class="modal-header caption">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title" id="addModalLabel">报文详情</h4>
                </div>
                <div class="ibox-content">
                    <button type="button" class="btn btn-info fa fa-mail-reply" data-dismiss="modal">关闭</button>
                </div>

                <div class="modal-body ibox-content" style="padding-bottom: 0;">

                </div>
                <div class="ibox float-e-margins">
                    <table class="table table-striped table-bordered" style="width: 95%; margin: auto;" id="table1"></table>
                    <div id="shur" class="text-center">
                        <textarea  rows="15" cols="80%" id="bigData" readonly="readonly"></textarea>
                    </div>
                </div>

            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
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
<script src="../../../static/edi/js/ediRecvData.js"></script>


<script>
    $(function () {
        FormUtils.getData();
    });
</script>
</body>
</html>