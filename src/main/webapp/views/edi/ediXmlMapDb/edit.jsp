<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>字段关系-编辑</title>
    <link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css" />
    <link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css" />
    <link rel="stylesheet" href="../../../static/admin/main/css/animate.css" />
    <link rel="stylesheet" href="../../../static/common/css/style.css" />
	<link rel="stylesheet" href="../../../static/common/select2/css/select2.min.css" />
</head>
<body>
<div class="wrapper">
    <div class="col-sm-12">
        <div class="ibox float-e-margins">
            <div class="ibox-title">
                <h5>字段关系-编辑</h5>
            </div>
            <div class="ibox-content">
                <form id="form" class="form-horizontal">
                    <div class="form-group" style="display:none;">
                        <label class="col-sm-2 control-label col-sm-offset-1">主键id<span style="color:red;">*</span>：</label>
                        <div class="col-sm-4">
                            <input type="text" maxlength="10" class="form-control" id="uid" name="uid" placeholder="">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">监管场所：</label>
                        <div class="col-sm-4">
                            <!-- <input type="text" class="form-control" name="docType" placeholder="请填写单据类型"> -->
                        	<select class="form-control" id="areaCode" name="areaCode" value="" dll_name="data" />
                                <!-- <option value="">--请选择--</options> -->
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">单据类型：</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" name="docType" placeholder="请填单据类型">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">业务类型：</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" name="bizType" placeholder="请填写业务类型">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">报文字段	：</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" name="xmlName" placeholder="请填写报文字段">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">字段类型：</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" name="xmlType" placeholder="请填写字段类型">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">字段长度：</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" name="xmlLength" placeholder="请填写字段长度">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">上级根节点：</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" name="xmlRoot" placeholder="请填写上级根节点">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">业务表名：</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" name="dbTable" placeholder="请填写业务表名">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">业务字段：</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" name="dbColumn" placeholder="请填写业务字段">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">字段类型：</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" name="dbType" placeholder="请填写字段类型">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">字段长度：</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" name="dbLength" placeholder="请填写字段长度">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">启用标识：</label>
                        <div class="col-sm-4">
                            <!-- <input type="text" class="form-control" name="status" placeholder="请填写启用标识"> -->
                            <select class="form-control" id="status" name="status" value="" />
                               <option value="Y">启用</options>
                               <option value="N">禁用</options>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">备注：</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" name="remarks" placeholder="请填写备注">
                        </div>
                    </div>
                    <%--<div class="form-group">--%>
                        <%--<label class="col-sm-2 control-label col-sm-offset-1">企业是否年检：</label>--%>
                        <%--<div class="col-sm-4">--%>
                            <%--<input type="text" class="form-control" name="chkAnnual" id="chkAnnual" placeholder="请确认企业是否年检">--%>
                        <%--</div>--%>
                    <%--</div>--%>
                    <div class="hr-line-dashed"></div>
                    <div class="form-group">
                        <div class="col-sm-offset-4">
                            <button class="btn btn-primary" type="button" id="submit" onclick="save('form','/update')">保存</button>
                            <button class="btn btn-primary" type="button" id="reback" onclick="Utils.redirect('../../../views/edi/ediXmlMapDb/list.jsp')">返回</button>
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
    <script> var t1 = new Date().getTime(); baselocation='../../..';</script>
    <!-- 自定义js -->
    <script src="../../../static/admin/main/js/content.js"></script>
    <script src="../../../static/common/js/common.js"></script>
    <!-- 自定义js -->
    <script src="../../../static/edi/js/ediXmlMapDb.js"></script>
	<script src="../../../static/common/select2/js/select2.full.js"></script>
</tiziFooter>
    <script>
        $(function () {
        	initForm();
        });        
    </script>
</body>
</html>