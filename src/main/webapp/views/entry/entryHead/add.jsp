<%@ page language="java" contentType="text/html; charset=utf-8" %>
<!DOCTYPE HTML>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <title>报关单添加</title>
    <link rel="stylesheet" href="../../../static/common/bootstrap-table-master/bootstrap-table.min.css"/>
    <link rel="stylesheet" href="../../../static/common/bootstrap-datepicker-master/css/bootstrap-datepicker3.min.css"/>
    <link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css"/>
    <link rel="stylesheet" href="../../../static/common/select2/css/select2.min.css" type="text/css">
    <link rel="stylesheet" href="../../../static/common/bootstrapvalidator-master/css/bootstrapValidator.min.css" type="text/css">
    <link rel="stylesheet" href="../../../static/admin/main/css/animate.css"/>
    <link rel="stylesheet" href="../../../static/common/css/style.css"/>
    <link rel="stylesheet" href="../../../static/common/css/common.css"/>

    <!-- HTML5 Shim 和 Respond.js 用于使IE8支持html5和css3媒介查询 -->
    <!--[if lt IE 9]>
    <script src="../../../static/common/html5shiv/html5shiv.min.js"></script>
    <script src="../../../static/common/html5shiv/respond.min.js"></script>
    <![endif]-->
    <style>
    #dataForm td {
    border: none;
    }
    .form-group{
    margin-bottom: 0;
    }
    </style>
</head>
<body class="gray-bg">
<div class="container animated fadeInRight">
    <div class="ibox" id="head">
        <div class="ibox-title with-border collapsed-box">
            <div class="pull-left">
                <h4 class="box-title pull-left">表头</h4>
            </div>
            <div class="pull-right">
                <a href="#1" class="collapse-link" title="收起表头"><i
                        class="fa fa-chevron-up"></i></a>
            </div>
        </div>
        <div class="clearfix"></div>
        <div class="ibox-content">
            <i class="btn btn-info fa fa-save" id="save">暂存</i>
            <i class="btn btn-success fa fa-check-square-o" id="submit" >申报</i>
            <i class="btn btn-info fa fa-mail-reply" id="reback">返回</i>
            <%--<i class="btn btn-info fa fa-hospital-o" id="reb11ack">打印</i>--%>
        </div>
        <div class="ibox-content">
            <form id="dataForm">
                <!-- 隐藏字段 -->
                <div>
                    <input type="hidden" id="iEFlag" name="iEFlag"/>
                    <input type="hidden" id="uid" name="uid" />
                </div>
                <table class="table table-condensed no-border">
                    <tr>
                        <td class="table-label text-nowrap">统一编号</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="seqNo" name="seqNo" notempty>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">预录入号</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="etpsPreentNo" name="etpsPreentNo" notempty>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">海关编号</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="entryId" name="entryId" notempty>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap">申报地海关</td>
                        <td>
                            <div class="form-group">
                                <select class="form-control" id="masterCuscd" name="masterCuscd"
                                        dll_name="codCusCustomsfec" style="width: 100%" fieldName="申报地海关" isValidate="true" notempty></select>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">出口口岸</td>
                        <td>
                            <div class="form-group">
                                <select class="form-control" id="iEPort" name="iEPort"
                                        dll_name="codCusCustomsrel" style="width: 100%" fieldName="出口口岸" isValidate="true" notempty>
                                </select>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">备案号</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="manualNo" name="manualNo" notempty>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap">合同协议号</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="contrNo" name="contrNo" notempty>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">出口日期</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="iEDate" name="iEDate" notempty>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">申报日期</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="dclTime" name="dclTime" notempty>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap">收发货人代码</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="tradeCode" name="tradeCode" notempty>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">收发货人统一编码</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="tradeCodeScc" name="tradeCodeScc" notempty>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">收发货人名称</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="tradeName" name="tradeName" notempty>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap">消费使用代码</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="ownerCode" name="ownerCode" notempty>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">消费使用统一编码</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="ownerCodeScc" name="ownerCodeScc" notempty>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">消费使用名称</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="ownerName" name="ownerName" notempty>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap">申报单位代码</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="agentCode" name="agentCode" notempty>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">申报单位统一编码</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="agentCodeScc" name="agentCodeScc" notempty>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">申报单位名称</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="agentName" name="agentName" notempty>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap">运输方式</td>
                        <td>
                            <div class="form-group">
                                <select class="form-control" id="trafMode" name="trafMode"
                                        dll_name="codCusTransf" style="width: 100%" notempty></select>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">运输工具名称</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="trafName" name="trafName" notempty>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">航次号</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="dcl11Er" name="dclEr" notempty>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap">提运单号</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="billNo" name="billNo" notempty>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">贸易方式</td>
                        <td>
                            <div class="form-group">
                                <select class="form-control" id="tradeMode" name="tradeMode"
                                        dll_name="codCusTrade" style="width: 100%" notempty></select>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">征免性质</td>
                        <td>
                            <div class="form-group">
                                <select class="form-control" id="cutMode" name="cutMode"
                                        dll_name="codCusLevymode" style="width: 100%" notempty></select>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap">纳税单位</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="paymentMark" name="paymentMark" notempty>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">许可证号</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="licenseNo" name="licenseNo" notempty>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">成交方式</td>
                        <td>
                            <div class="form-group">
                                <select class="form-control" id="transMode" name="transMode"
                                        dll_name="codCusTrans" style="width: 100%" notempty></select>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap">运抵国</td>
                        <td>
                            <div class="form-group">
                                <select class="form-control" id="tradeCountry" name="tradeCountry"
                                        dll_name="codCusCountry" style="width: 100%" notempty></select>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">指运港</td>
                        <td>
                            <div class="form-group">
                                <select class="form-control" id="distinatePort" name="distinatePort"
                                        dll_name="codCusPortlin" style="width: 100%" notempty></select>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">境内货源地</td>
                        <td>
                            <div class="form-group">
                                <select class="form-control" id="districtCode" name="districtCode"
                                        dll_name="codCusDistrictrel" style="width: 100%" notempty></select>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap">运费</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="feeRate" name="feeRate" notempty>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">保费</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="insurRate" name="insurRate" notempty>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">杂费</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="otherRate" name="otherRate" notempty>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap">件数</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="packNo" name="packNo" notempty>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">包装种类</td>
                        <td>
                            <div class="form-group">
                                <select class="form-control" id="wrapType" name="wrapType"
                                        dll_name="codCusWrap" style="width: 100%" notempty></select>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">贸易国(地区)</td>
                        <td>
                            <div class="form-group">
                                <select class="form-control" id="tradeAreaCode" name="tradeAreaCode"
                                        dll_name="codStdAreaCode" style="width: 100%" notempty></select>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap">毛重(KG)</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="grossWet" name="grossWet" notempty>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">净重(KG)</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="netWt" name="netWt" notempty>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">集装箱号</td>
                        <td>
                            <div class="form-group">
                                <select class="form-control" id="containerNo" name="containerNo"
                                        dll_name="codStdContaParam" style="width: 100%" notempty></select>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap">随附单证</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="acmpForm" name="acmpForm" notempty>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">报关单类型</td>
                        <td>
                            <div class="form-group">
                                <select class="form-control" id="decType" name="decType" dll_name="DEC_TYPE" style="width: 100%" notempty></select>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">报关员</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="declarant" name="declarant" notempty>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap">监管仓号</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="superviseHouseNo" name="superviseHouseNo" notempty>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">备注</td>
                        <td colspan="4">
                            <div class="form-group">
                                <input class="input-sm form-control" id="noteS" name="noteS" fieldName="备注" notempty>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap">其他事项确认</td>
                        <td colspan="5">
                            <input type="checkbox" name="promiseItmes" value="特殊关系确认-"/>特殊关系确认
                            <input type="checkbox" name="promiseItmes" value="价格影响确认-"/>价格影响确认
                            <input type="checkbox" name="promiseItmes" value="支付特许权使用费确认"/>支付特许权使用费确认
                        </td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap">关联报关单</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="relateEntry" name="relateEntry" notempty>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">关联备案</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="relateReg" name="relateReg" notempty>
                            </div>
                        </td>
                        <td class="table-label text-nowrap">货场代码</td>
                        <td>
                            <div class="form-group">
                                <input class="input-sm form-control" id="warehoseNo" name="warehoseNo"  notempty>
                            </div>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    </div>
    <%--表体--%>
    <div class="ibox">
        <div class="ibox-title font-bold">
            <div class="pull-left">
                <h4 class="box-title pull-left">表体</h4>
            </div>
            <div class="pull-right">
                <a href="#1" class="collapse-link" title="收起表头">
                    <i class="fa fa-chevron-up"></i>
                </a>
            </div>
        </div>
        <div class="ibox-content">
            <ul id="tab" class="nav nav-tabs">
                <li class="active"><a href="#godInfoTab" data-toggle="tab">商品信息</a></li>
                <li><a href="#pagInfoTab" data-toggle="tab">集装箱信息</a></li>
            </ul>
            <div class="row m-t-sm">
                <div class="col-md-12" id="buttonGroup">
                    <a href="javascript:void(0)" class="btn btn-info fa fa-refresh" id="refreshBtn">刷新</a>
                    <span class="m-r-sm"></span>
                    <a href="javascript:void(0)" class="btn btn-info fa fa-plus-square hid" onclick="view('add')">新增</a>
                    <a href="javascript:void(0)" class="btn btn-info fa fa-edit hid" onclick="view('edit')">修改</a>
                    <a href="javascript:void(0)" class="btn btn-info fa fa-file" id="copy">复制</a>
                    <a href="javascript:void(0)" class="btn btn-info fa fa-remove hid" id="remove">删除</a>
                    <div class="tab-content">
                        <!-- 商品信息 -->
                        <div class="tab-pane fade m-t-sm active in" id="godInfoTab">
                            <table id="godInfoTable" class="table-nowrap"></table>
                        </div>
                        <!-- 集装箱信息 -->
                        <div class="tab-pane fade m-t-sm" id="pagInfoTab">
                            <table id="pagInfoTable" class="table-nowrap"></table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <%--随附单证--%>
    <div class="ibox">
        <div class="ibox-title font-bold">
            <div class="pull-left">
                <h4 class="box-title pull-left">随附单证</h4>
            </div>
            <div class="pull-right">
                <a href="#1" class="collapse-link" title="收起表头"><i
                        class="fa fa-chevron-up"></i></a>
            </div>
        </div>
        <div class="ibox-content">
            <ul id="tab2" class="nav nav-tabs">
                <li class="active"><a href="#docInfoTab" data-toggle="tab">随附单证</a></li>
                <li><a href="#uplInfoTab" data-toggle="tab">随附单据上传</a></li>
            </ul>
            <div class="row m-t-sm">
                <div class="col-md-12" id="buttonGroups">
                    <a href="javascript:void(0)" class="btn btn-info fa fa-refresh" id="refreshBtn2">刷新</a>
                    <span class="m-r-sm"></span>
                    <a href="javascript:void(0)" class="btn btn-info fa fa-plus-square hid" onclick="view('add')">新增</a>
                    <a href="javascript:void(0)" class="btn btn-info fa fa-edit hid" onclick="view('edit')">修改</a>
                    <a href="javascript:void(0)" class="btn btn-info fa fa-remove hid" id="remove2">删除</a>
                    <div class="tab-content">
                        <!-- 随附单证 -->
                        <div class="tab-pane fade m-t-sm active in" id="docInfoTab">
                            <table id="docInfoTable" class="table-nowrap"></table>
                        </div>
                        <!-- 随附单据上传 -->
                        <div class="tab-pane fade m-t-sm" id="uplInfoTab">
                            <table id="uplInfoTable" class="table-nowrap"></table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<footer>
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
    <script src="../../../static/common/select2/js/select2.full.js"></script>
    <script src="../../../static/common/select2/js/i18n/zh-CN.js"></script>
    <script src="../../../static/common/bootstrap-table-master/extensions/export/bootstrap-table-export.js"></script>
    <script src="../../../static/common/bootstrapvalidator-master/js/bootstrapValidator.min.js"></script>
    <script src="../../../static/common/bootstrapvalidator-master/js/language/zh_CN.js"></script>
    <!-- Data picker -->
    <script src="../../../static/common/bootstrap-datepicker-master/js/bootstrap-datepicker.js"></script>
    <!-- 自定义js -->
    <script src="../../../static/admin/main/js/contabs.js"></script>
    <script src="../../../static/common/js/common.js"></script>
    <script src="../../../static/admin/main/js/content.js"></script>
    <script src="../../../static/entry/js/entryHead.js"></script>
</footer>
</body>
</html>