<%@ page language="java" contentType="text/html; charset=utf-8"%>
<!DOCTYPE HTML>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <title>加工账册备案-编辑</title>
    <link rel="stylesheet" href="../../../static/common/bootstrap-table-master/bootstrap-table.min.css" />
    <link rel="stylesheet" href="../../../static/common/bootstrap-datepicker-master/css/bootstrap-datepicker3.min.css" />
    <link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css" />
    <link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css" />
    <link rel="stylesheet" href="../../../static/common/select2/css/select2.min.css" type="text/css">
    <link rel="stylesheet" href="../../../static/common/bootstrapvalidator-master/css/bootstrapValidator.min.css" type="text/css">
    <link rel="stylesheet" href="../../../static/admin/main/css/animate.css" />
    <link rel="stylesheet" href="../../../static/common/css/style.css" />
    <link rel="stylesheet" href="../../../static/common/css/common.css" />

    <!-- HTML5 Shim 和 Respond.js 用于使IE8支持html5和css3媒介查询 -->
    <!--[if lt IE 9]>
    <script src="https：//oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https：//oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body class="hold-transition skin-blue sidebar-mini">
<header>
    <div class="box box-solid div-pad box-line">
        <div class="btn-group div-left-pad">
            <i class="btn btn-default fa fa-save" id="save">保存</i>
            <i class="btn btn-default fa fa-mail-reply" id="reback">退出</i>
        </div> 
    </div>
        <div class="box box-primary no-margin">                        
      		<div class="box-body no-margin" id="head"> 
		    	<form id="dataForm">
		    	<input value="E" style="display:none;" id="mtpckEndprdTypecd" name="mtpckEndprdTypecd">
         		<input  value="成品" style="display:none;" id="mtpckEndprdTypename" name="mtpckEndprdTypename" readonly>			               		
		        <table class="table table-condensed no-border">
		            <tr>
		                <td class="table-label text-nowrap">商品序号<span class="notempty">*</span>：</td>
		                <td>
		                	<div class="form-group">
			               		<input class="input-sm form-control" id="gdsSeqno" name="gdsSeqno" fieldName="商品序号" isValidate="true" notempty>
			               	</div>	
		                </td>	                
		                <td class="table-label text-nowrap" >商品料号<span class="notempty">*</span>：</td>
		                <td>
		                	<div class="form-group">
			               		<input class="input-sm form-control"  id="gdsMtno" name="gdsMtno" fieldName="商品料号" isValidate="true" notempty>
			               	</div>	
		                </td>
		                <td class="table-label text-nowrap">核销周期初始数量：</td>
	                	<td><input class="input-sm form-control"></td>
		            </tr>
		            <tr>
		            	<td class="table-label text-nowrap">商品编码<span class="notempty">*</span>：</td>
		                <td>
		                	<div class="form-group">
			               		<input class="input-sm form-control" id="gdecd" name="gdecd" fieldName="商品编码" isValidate="true" notempty>
			               	</div>	
		                </td>
		                <td class="table-label text-nowrap">商品名称<span class="notempty">*</span>：</td>
		                <td colspan="3">
		                	<div class="form-group">
			               		<input class="input-sm form-control" id="gdsNm" name="gdsNm" fieldName="商品名称" isValidate="true" notempty>
			               	</div>	
		                </td>
		              </tr>
		            <tr>
		            <tr>
		                <td class="table-label text-nowrap">商品规格型号描述：</td>
		                <td colspan="5">
		                	<input class="input-sm form-control" id="endprdGdsSpcfModelDesc" name="endprdGdsSpcfModelDesc">
		                </td>
		              </tr>
		            <tr>
		                <td class="table-label text-nowrap">申报计量单位<span class="notempty">*</span>：</td>
		                <td>
		                	<div class="form-group">
		                		<input class="input-sm form-control"  id="dclUnitcd" name="dclUnitcd" fieldName="申报计量单位" isValidate="true" notempty>
		                	</div>
	                	</td>
		                <td class="table-label text-nowrap">法定计量单位：</td>
		                <td>
		                	<input class="input-sm form-control" id="lawfUnitcd" name="lawfUnitcd">
		                </td>
		                <td class="table-label text-nowrap">第二法定计量单位：</td>
		                <td>
		                	<input class="input-sm form-control" id="secdLawfUnitcd" name="secdLawfUnitcd">
		                </td>
	                </tr>
		            <tr>
		            	<td class="table-label text-nowrap">辅料标记<span class="notempty">*</span>：</td>
		                <td>
	                		<div class="form-group validate-height">
		                		<select class="dropdown-width"  id="adjmtrMarkcd" name="adjmtrMarkcd" dll_name="ADJMTR_MARK" fieldName="辅料标记" isValidate="true" notempty readonly></select>
	                		</div>		                
		                </td>		                		
		                <td class="table-label text-nowrap">修改标记：</td>
		                <td>
		                	<div class="form-group validate-height">
	                			<select class="dropdown-width"  id="modfMarkcd" name="etpsExeMarkcd" dll_name="MODF_MARK"  fieldName="修改标记" isValidate="true" notempty></select>
	                		</div>
		                </td>
		                <td class="table-label text-nowrap">企业执行标记：</td>
		                <td colspan="3">
	                		<div class="form-group validate-height">
	                			<select class="dropdown-width"  id="etpsExeMarkcd" name="etpsExeMarkcd" dll_name="ETPS_EXE_MARK"  fieldName="企业执行标记" isValidate="true" notempty></select>
	                		</div>
		                </td>                	
	                </tr>		           
		            <tr>		            	
		                <td class="table-label text-nowrap">备注：</td>
		                <td colspan="5"><textarea class="form-control" rows="2" id="rmk" name="rmk"></textarea></td>
		            </tr>
		        </table>
		    </form>
	    </div>
    	</div>
</header>
<footer>
    <script src="../../../static/common/jquery/jquery-3.1.1.min.js"></script>
    <script src="../../../static/common/bootstrap/js/bootstrap.min.js"></script>
    <script src="../../../static/admin/main/js/metisMenu/jquery.metisMenu.js"></script>
    <script src="../../../static/admin/main/js/slimscroll/jquery.slimscroll.min.js"></script>
    <script src="../../../static/common/jquery/jquery-ui.min.js"></script>
    <script src="../../../static/common/layer/layer.js"></script>
    <script src="../../../static/common/select2/js/select2.full.js"></script>
    <script src="../../../static/common/select2/js/i18n/zh-CN.js"></script>
    <script src="../../../static/common/bootstrapvalidator-master/js/bootstrapValidator.min.js"></script>
    <script src="../../../static/common/bootstrapvalidator-master/js/language/zh_CN.js"></script>
    <script src="../../../static/common/bootstrap-datepicker-master/js/bootstrap-datepicker.js"></script>
    <!-- 自定义js -->
    <script src="../../../static/admin/main/js/contabs.js"></script>
    <script src="../../../static/common/js/common.js"></script>
    <script src="../../../static/ems/js/emsputrecimg_form.js"></script>
</footer>
</body>
</html>