<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>单据流转-新增</title>
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
                <h5>单据流转-新增</h5>
            </div>
            <div class="ibox-content">
                <form id="form" class="form-horizontal">
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">监管场所<span style="color:red;">*</span>：</label>
                        <div class="col-sm-4">
                           <select class="form-control" id="areaCode" name="areaCode" value="" dll_name="data" />
                                <option value="">--请选择--</options>
                            </select>
                        </div>
                    </div>
                   
                      <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">单据类型<span style="color:red;">*</span>：</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" name="docType" placeholder="请填写单据类型">
                        </div>
                    </div>
                   
                  <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">业务类型<span style="color:red;">*</span>：</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" name="bizType" placeholder="请填写业务类型">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">单据编号<span style="color:red;">*</span>：</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" name="seqNo" placeholder="请填写单据编号">
                        </div>
                    </div>
                   <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">环节号<span style="color:red;">*</span>：</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" name="channel" placeholder="请填写环节号">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">岗位编号 <span style="color:red;"></span>：</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" name="posCode" placeholder="请填写岗位编号 ">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">下一环节号 <span style="color:red;"></span>：</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" name="nextChannel" placeholder="请填写下一环节号">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">下一审批岗位编号<span style="color:red;"></span>：</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" name="nextPosCode" placeholder="请填写下一审批岗位编号">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">处理标识<span style="color:red;">*</span>：</label>
                        <div class="col-sm-4">
                            <select type="text" class="form-control" name="status"  d>
                            <option value="Y" selected="true">开启：Y</option>
                            <option value="N">关闭：N</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">操作人 <span style="color:red;">*</span>：</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" name="transMode" placeholder="请填写操作人 ">
                        </div>
                    </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">传输方式<span style="color:red;">*</span>：</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" name="transMode" placeholder="请填写传输方式">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label col-sm-offset-1">备注<span style="color:red;"></span>：</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" name="remarks" placeholder="请填写备注">
                        </div>
                    </div>
                    <%--<div class="form-group">--%>
                        <%--<label class="col-sm-2 control-label col-sm-offset-1">企业是否年检：</label>--%>
                        <%--<div class="col-sm-4">--%>
                            <%--<input type="text" class="form-control" name="chkAnnual" placeholder="请确认企业是否年检">--%>
                        <%--</div>--%>
                    <%--</div>--%>
                    <div class="hr-line-dashed"></div>
                    <div class="form-group">
                        <div class="col-sm-offset-4">
                            <button class="btn btn-primary" type="button" id="submit" onclick="FormUtils.save('form','/add')">保存</button>
                            <button class="btn btn-primary" type="button" id="reback" onclick="Utils.redirect('../../../views/edi/ediRoutingInfo/list.jsp')">返回</button>
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
</body>
</html>