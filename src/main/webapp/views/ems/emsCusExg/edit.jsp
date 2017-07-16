<%@ page language="java" contentType="text/html; charset=utf-8"%>
<!DOCTYPE HTML>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <title>加工账册成品-编辑</title>
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
    <script src="../../../static/common/html5shiv/html5shiv.min.js"></script>
    <script src="../../../static/common/html5shiv/respond.min.js"></script>
    <![endif]-->
</head>
<body> 
    <header>
	    <div>                          	
	      <div class="ibox" id="head">      
	      <div class="ibox-title no-margins">
		        <div class="pull-left">
		            <a href="javascript:void(0);" class="btn btn-info fa fa-mail-reply" id="reback">返回</a>
		        </div>      
	       </div>       
	        <div class="clearfix"></div>   	   	
	    	<div class="ibox-content"> 
		    	<form id="dataForm">				    	
			        <table class="table table-condensed noborder">
			            <tr>
			                <td class="table-label text-nowrap text-right">序号<span style="color:#EE0000;">*</span></td>
			                <td>
			                	<div class="form-group">
				               		<input class="form-control" id="gdsSeqno" name="gdsSeqno" fieldName="商品序号" isValidate="true" notempty>
				               	</div>	
			                </td>	                
			                <td class="table-label text-nowrap text-right" >料号<span style="color:#EE0000;">*</span></td>
			                <td>
			                	<div class="form-group">
				               		<input class="form-control"  id="gdsMtno" name="gdsMtno" fieldName="商品料号" isValidate="true" notempty>
				               	</div>	
			                </td>
			                <td class="table-label text-nowrap text-right">商品编码<span style="color:#EE0000;">*</span></td>
			                <td>
			                	<div class="form-group">
				               		<input class="form-control" id="gdecd" name="gdecd" fieldName="商品编码" isValidate="true" notempty>
				               	</div>	
			                </td>
			                
			            </tr>
			            <tr>			            	
			                <td class="table-label text-nowrap text-right">商品名称<span style="color:#EE0000;">*</span></td>
			                <td>
			                	<div class="form-group">
				               		<input class="form-control" id="gdsNm" name="gdsNm" fieldName="商品名称" isValidate="true" notempty>
				               	</div>	
			                </td>
			                <td class="table-label text-nowrap text-right">规格型号</td>
			                <td>
			                	<input class="form-control" id="endprdGdsSpcfModelDesc" name="endprdGdsSpcfModelDesc">
			                </td>
			                <td class="table-label text-nowrap text-right">申报计量单位<span style="color:#EE0000;">*</span></td>
			                <td>
			                	<div class="form-group">
			                		<select class="form-control"  id="dclUnitcd" name="dclUnitcd" dll_name="codCusUnit" style="width:100%;"></select>
			                	</div>
		                	</td>
		              	</tr>
			            <tr>			                
			                <td class="table-label text-nowrap text-right">法定计量单位</td>
			                <td>
				                <div class="form-group">
				                	<select class="form-control"  id="lawfUnitcd" name="lawfUnitcd" dll_name="codCusUnit"  default="" fieldName="法定计量单位"  isValidate="true" notempty style="width:100%;"></select>
			                	</div>
			                </td>
			                <td class="table-label text-nowrap text-right">第二法定计量单位</td>
			                <td>
				                <div class="form-group">
				                	<select class="form-control"  id="secdLawfUnitcd" name="secdLawfUnitcd" default="" dll_name="codCusUnit" style="width:100%;"></select>
			                	</div>
			                </td>
			                <td class="table-label text-nowrap text-right">币制</td>
			                <td>
				                <div class="form-group">
				                	<select class="form-control"  id="dclCurrcd" name="dclCurrcd" dll_name="codCusCurr" style="width:100%;"></select>
			                	</div>
			                </td>			                
		                </tr>
		                <tr>			                
			                <td class="table-label text-nowrap text-right">申报单价</td>
		                	<td><input class="form-control" id="dclUprcAmt" name="dclUprcAmt"></td>
			                <td class="table-label text-nowrap text-right">申报数量</td>
			                <td>
				                <div class="form-group">
				                	<input class="form-control" id="dclQty" name="dclQty" type="number">
			                	</div>
			                </td>
			                <td class="table-label text-nowrap text-right">征免方式</td>
		                	<td>
		                		<select class="form-control"  id="lvyrlfModecd" name="lvyrlfModecd" dll_name="codCusLevymode" style="width:100%;"></select>
		                	</td>
		                </tr>
			            <tr>
			            	<td class="table-label text-nowrap text-right">数量控制标记</td>
			                <td>
		                		<div class="form-group">
		                			<select class="form-control"  id="qtyCntrMarkcd" name="qtyCntrMarkcd" dll_name="QTY_CNTR_MARKCD" fieldName="企业执行标记" isValidate="true" notempty style="width:100%;"></select>
		                		</div>
			                </td>
			                <td class="table-label text-nowrap text-right">企业执行标记<span style="color:#EE0000;">*</span></td>
			                <td>
		                		<div class="form-group">
		                			<select class="form-control"  id="etpsExeMarkcd" name="etpsExeMarkcd" dll_name="ETPS_EXE_MARK" default="1" fieldName="企业执行标记" isValidate="true" notempty style="width:100%;"></select>
		                		</div>
			                </td>
			                <td class="table-label text-nowrap text-right">修改标记</td>
			                <td>
	                			<select class="form-control"  id="modfMarkcd" name="modfMarkcd" dll_name="MODF_MARK" readonly style="width:100%;"></select>
			                </td>
		                </tr>
		                <tr>
			                <td class="table-label text-nowrap text-right">海关执行标记</td>
			                <td>
			                	<div class="form-group">
		                			<select class="form-control"  id="cusmExeMarkcd" name="cusmExeMarkcd" dll_name="CUSM_EXE_MARKCD"  fieldName="修改标记" isValidate="true" notempty style="width:100%;"></select>
		                		</div>
			                </td>
			                <td class="table-label text-nowrap text-right">单耗质疑标志</td>
			                <td>
		                		<div class="form-group">
		                			<select class="form-control"  id="ucnsTqsnFlag" name="ucnsTqsnFlag" dll_name="UCNS_TQSN_FLAG"  fieldName="企业执行标记" isValidate="true" notempty style="width:100%;"></select>
		                		</div>
			                </td>
			                <td class="table-label text-nowrap text-right">磋商标志</td>
			                <td>
		                		<div class="form-group">
		                			<select class="form-control"  id="csttnFlag" name="csttnFlag" dll_name="CSTTN_FLAG"   fieldName="企业执行标记" isValidate="true" notempty style="width:100%;"></select>
		                		</div>
			                </td>
		                </tr>		           
			            <tr>
			            	<td class="table-label text-nowrap text-right">批准最大余数量</td>
		                	<td><input class="form-control" type="number" id="apprMaxSurpQty" name="apprMaxSurpQty" readonly></td>
			                <td  class="table-label text-nowrap text-right">备注</td>
			                <td colspan="3"><input class="form-control" id="rmk" name="rmk"></td>
			            </tr>
			        </table>
			    </form>
		    </div>
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
	    <script src="../../../static/common/js/formCommon.js"></script>
	    <script>
	    /*
	     * 页面下拉初始化成功后执行
	     */
	    function __onAfterInitDropDown(){
	    	var id=FormHelper.search("id");//主键
	    	if(id!=null){
	    		FormHelper.getData();
	    	}	
	    }
	    </script>
	    <script src="../../../static/common/js/common.js"></script>
	    <script src="../../../static/ems/js/emscusexg_form.js"></script>
	</footer>
</body>
</html>