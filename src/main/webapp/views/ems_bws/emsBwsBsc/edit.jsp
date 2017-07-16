<%@ page language="java" contentType="text/html; charset=utf-8" %>
<!DOCTYPE HTML>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <title></title>
    <link rel="stylesheet" href="../../../static/common/bootstrap-table-master/bootstrap-table.min.css"/>
    <link rel="stylesheet" href="../../../static/common/bootstrap-datepicker-master/css/bootstrap-datepicker3.min.css"/>
    <link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css"/>
    <link rel="stylesheet" href="../../../static/common/select2/css/select2.min.css" type="text/css">
    <link rel="stylesheet" href="../../../static/common/bootstrapvalidator-master/css/bootstrapValidator.min.css" type="text/css">
    <link rel="stylesheet" href="../../../static/admin/main/css/animate.css"/>
    <link rel="stylesheet" href="../../../static/common/css/style.css"/>
    <link rel="stylesheet" href="../../../static/common/css/common.css"/>
</head>
<body class="gray-bg">
<div class="container animated fadeInRight">
    <div class="ibox" id="head">
        <div class="ibox-title with-border collapsed-box">
            <div class="pull-left">
                <h4 class="box-title pull-left">物流账册表头</h4>
            </div>
            <div class="pull-right">
                <a href="#1" class="collapse-link" title="收起表头"><i class="fa fa-chevron-up"></i></a>
            </div>
        </div>
        <div class="clearfix"></div>
        <div class="ibox-content">
            <a href="javascript:void(0);" class="btn btn-info fa fa-save" id="save">暂存</a>
            <a href="javascript:void(0);" class="btn btn-success fa fa-check-square-o" id="declare">申报</a>
            <a href="javascript:void(0);" class="btn btn-info fa fa-mail-reply" id="reback">返回</a>
        </div>
        <div class="clearfix"></div>
        <div class="ibox-content">
            <form id="dataForm">
                <table class="table table-condensed no-borders no-margins">
                    <tr>
                        <td class="table-label text-nowrap text-right text-right no-borders">仓库账册编号</td>
                        <td><input class="form-control" id=bwsNo name="bwsNo" readonly></td>
                        <td class="table-label text-nowrap text-right">企业内部编号</td>
                        <td><input class="form-control" id="etpsPreentNo" name="etpsPreentNo" readonly></td>
                        <td class="table-label text-nowrap text-right">企业预录入编号</td>
                        <td><input class="form-control" id="seqNo" name="seqNo" readonly>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap text-right">经营企业编号</td>
                        <td><input class="form-control" id="bizopEtpsno" name="bizopEtpsno" readonly></td>
                        <td class="table-label text-nowrap text-right">经营企业社会信用代码</td>
                        <td><input class="form-control" id="bizopEtpsSccd" name="bizopEtpsSccd" readonly></td>
                        <td class="table-label text-nowrap text-right">经营企业名称</td>
                        <td><input class="form-control" id="bizopEtpsNm" name="bizopEtpsNm" readonly></td>
                    </tr>
                    <tr>
                        <td class="table-label text-nowrap text-right">申报企业编码</td>
                        <td><input class="form-control" id="dclEtpsno" name="dclEtpsno" readonly></td>
                        <td class="table-label text-nowrap text-right">申报企业社会信用代码</td>
                        <td><input class="form-control" id="dclEtpsSccd" name="dclEtpsSccd" readonly></td>
                        <td class="table-label text-nowrap text-right">申报企业名称</td>
                        <td><input class="form-control" id="dclEtpsNm" name="dclEtpsNm" readonly></td>
                    </tr>
                    <tr>
                    	<td class="table-label text-nowrap text-right">区域场所类别</td>
                        <td>
                            <select class="form-control select2-width" id="bwlTypecd" name="bwlTypecd" style="width:100%;"
                                    dll_name="BWL_TYPECD"></select>
                        </td>
                        <td class="table-label text-nowrap text-right">记账模式<span class="notempty">*</span></td>
                        <td>
                        	<div class="form-group">
                            	<select class="form-control" id="appendTypecd" name="appendTypecd" dll_name="APPEND_TYPECD" style="width:100%;" isValidate="true" notempty></select>
                            </div>
                        </td>
                        <td class="table-label text-nowrap text-right">结束有效日期<span class="notempty">*</span></td>
                        <td>
                        	<div class="form-group">
                            	<input type="text" class="form-control datepicker" data-date-format="yyyy-mm-dd" isFormat="true" id="finishValidDate" name="finishValidDate"  isValidate="true" notempty>
                            </div>
                        </td>
                        </tr>                      
                    <tr>
                        <td class="table-label text-nowrap text-right">仓库编号</td>
                        <td>
                            <div class="form-group">
                                <input class="form-control" id="houseNo" name="houseNo">
                            </div>
                        </td>
                        <td class="table-label text-nowrap text-right">联系人<span class="notempty">*</span></td>
                        <td>
	                        <div class="form-group">
	                        	<input class="form-control" id="contactEr" name="contactEr"  isValidate="true" notempty>
	                        </div>
                        </td>
                        <td class="table-label text-nowrap text-right">联系电话<span class="notempty">*</span></td>
                        <td>
	                        <div class="form-group">
	                        	<input class="form-control" id="contactTele" name="contactTele" type="tel" maxlength="15" isValidate="true" notempty>
	                        </div>
                        </td>
                        </tr>
                    <tr>
                        <td class="table-label text-nowrap text-right">仓库名称<span class="notempty">*</span></td>
                        <td>
                        <div class="form-group">
                        	<input class="form-control" id="houseNm" name="houseNm"  isValidate="true" notempty>
                        </div>
                        </td>
                        <td class="table-label text-nowrap text-right">仓库地址<span class="notempty">*</span></td>
                        <td colspan="3">
                            <div class="form-group">
                                <input class="form-control" id="houseAddress" name="houseAddress"  isValidate="true" notempty>
                            </div>
                        </td>
                    </tr>
                    <tr>
                    	<td class="table-label text-nowrap text-right">企业类型</td>
                        <td>
                            <select class="form-control select2-width" id="houseTypecd" name="houseTypecd" style="width:100%;"
                                    dll_name="BWL_TYPECD"></select>
                        </td>
                        <td class="table-label text-nowrap text-right">仓库面积(m²)<span class="notempty">*</span></td>
                        <td>
                        	<div class="form-group">
                        		<input class="form-control" id="houseArea" name="houseArea" type="number" fixed="5"  isValidate="true" notempty>
                       		</div>
                       	</td>
                        <td class="table-label text-nowrap text-right">仓库容积(m³)<span class="notempty">*</span></td>
                        <td>
	                        <div class="form-group">
	                        	<input class="form-control" id="houseVolume" name="houseVolume"  type="number" step="0.00001" isValidate="true" notempty>
	                        </div>
                        </td>                       
                    </tr>
                    <tr>
                    	<td class="table-label text-nowrap text-right">备注</td>
                        <td  colspan="5"><input class="form-control" id="rmk" name="rmk"></td>
                    </tr>
                    <tr><td  class="form-control" colspan="6"></td></tr>
                    <tr>                        
                        <td class="table-label text-nowrap text-right text-right">主管海关</td>
                        <td>
                            <select class="form-control " id="masterCuscd" name="masterCuscd" style="width:100%;" dll_name="codCusCustomsfec" disabled></select>
                        </td>
                        <td class="table-label text-nowrap text-right">监管场所</td>
                        <td>
                            <select class="form-control" id="areaCode" name="areaCode" dll_name="codStdAreaCode" style="width:100%;"
                                    disabled></select>
                        </td>
                        <td class="table-label text-nowrap text-right">回执状态</td>
                        <td><input class="form-control" id="retChannel" name="retChannel" readonly></td>
                    </tr>
                     <tr>
                        <td class="table-label text-nowrap text-right">申报类型</td>
                        <td>
                            <select class="form-control select2 " id="dclTypecd" name="dclTypecd" style="width:100%;"
                                    dll_name="DCL_TYPECD_BWS" disabled>
                            </select>
                        </td>   
                        <td class="table-label text-nowrap text-right">单据状态</td>
                        <td>
                            <select class="form-control select2 " id="chkStatus" name="chkStatus" style="width:100%;" dll_name="CHK_STATUS" disabled>
                            </select>
                        </td> 
                         <td class="table-label text-nowrap text-right">变更次数</td>
                        <td><input class="form-control" id="chgTmsCnt" name="chgTmsCnt" value="0" readonly></td>                     
                    </tr>
                    <tr>
                    	<td class="table-label text-nowrap text-right">操作企业</td>
                        <td><input class="form-control" id="inputCopName" name="inputCopName" readonly></td>
                        <td class="table-label text-nowrap text-right">操作人</td>
                        <td><input class="form-control" id="inputCopNo" name="inputerName" readonly></td>
                        <td class="table-label text-nowrap text-right">操作时间</td>
                        <td><input class="form-control" id="decTime" name="decTime" readonly></td>                       
                    </tr>
                </table>
            </form>
        </div>
    </div>
    <div class="ibox" id="detail" style="display:none;">
        <!--表体 -->
        <div class="ibox-title">
            <h4 class="box-title pull-left">明细信息</h4>
            <div class="pull-right">
                <a href="#1" class="collapse-link" title="收起"><i class="fa fa-chevron-up"></i></a>
            </div>
        </div>
        <div class="ibox-content">
            <div class="box-body">
                <div id="dtToolbar">
                    <a href="javascript:;" class="btn btn-info fa fa-info-circle" id="dtView">查阅</a>
                </div>
                <table id="dtTable"></table>
            </div>
        </div>
    </div>
    <div class="ibox">
        <!-- 附件 -->
        <div class="ibox-title">
            <h4 class="box-title pull-left">随附单证</h4>
            <div class="pull-right">
                <a href="#1" class="collapse-link" title="收起"><i class="fa fa-chevron-down"></i></a>
            </div>
        </div>
        <div class="ibox-content" style="display:none;">
            <div class="box-body">
                <div id="fileToolbar">
                    <a href="javascript:;" class="btn btn-info fa fa-info-circle" id="fileView">查阅</a>
                    <a href="javascript:;" class="btn btn-info fa fa-plus-square" id="fileAdd">新增</a>
                    <a href="javascript:;" class="btn btn-info fa fa-edit" id="fileEdit">修改</a>
                    <a href="javascript:;" class="btn btn-info fa fa-remove" id="fileDelete">删除</a>
                </div>
                <table id="fileTable"></table>
            </div>
        </div>
    </div>
</div>
<footer>
    <script src="../../../static/common/jquery/jquery-3.1.1.min.js"></script>
    <script src="../../../static/common/bootstrap/js/bootstrap.min.js"></script>
    <script src="../../../static/admin/main/js/metisMenu/jquery.metisMenu.js"></script>
    <script src="../../../static/admin/main/js/slimscroll/jquery.slimscroll.min.js"></script>
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
    <script src="../../../static/common/bootstrapvalidator-master/js/bootstrapValidator.js"></script>
    <script src="../../../static/common/bootstrapvalidator-master/js/language/zh_CN.js"></script>
    <!-- Data picker -->
    <script src="../../../static/common/bootstrap-datepicker-master/js/bootstrap-datepicker.js"></script>
    <!-- 自定义js -->
    <script src="../../../static/admin/main/js/contabs.js"></script>
    <script src="../../../static/ems_bws/js/emsbwsbsc_loadEvent.js"></script>
    <script src="../../../static/common/js/common.js"></script>
    <script src="../../../static/ems_bws/js/emsbws_form.js"></script>
    <script src="../../../static/admin/main/js/content.js"></script>
</footer>
</body>
</html>