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
    <script src="../../../static/common/html5shiv/html5shiv.min.js"></script>
    <script src="../../../static/common/html5shiv/respond.min.js"></script>
    <![endif]-->
</head>
<body>
<header>
		<div class="ibox" id="head">
			<div class="ibox-title no-margins">
				<div class="pull-left">
					<a href="javascript:void(0)" class="btn btn-info fa fa-save" id="save">暂存</a>
					<a href="#1" class="btn btn-info fa fa-mail-reply" id="reback">返回</a>
				</div>
			</div>
			<div class="clearfix"></div>
			<div class="ibox-content">
		    	<form id="dataForm">
					<div class="form-group">
						<input type="hidden" id="uid" name="uid">
						<input type="hidden" id="seqNo" name="seqNo">
						<input type="hidden" id="sasDclNo" name="sasDclNo">
						<input type="hidden" id="etpsPreentNo" name="etpsPreentNo">
						<input type="hidden" id="chgTmsCnt" name="chgTmsCnt">
					</div>
			        <table class="table table-condensed noborder">
			            <tr>
							<td class="table-label text-nowrap">加工前商品序号<span style="color:#EE0000;">*</span></td>
							<td>
								<div class="form-group">
									<input class="input-sm form-control" type="number" id="mtpckSeqno" name="mtpckSeqno" isValidate="true" notempty>
								</div>
							</td>
							<td class="table-label text-nowrap" >加工前商品编码<span style="color:#EE0000;">*</span></td>
							<td>
								<div class="form-group">
									<input class="input-sm form-control" id="mtpckGdecd" name="mtpckGdecd" isValidate="true" notempty readonly>
								</div>
							</td>
							<td class="table-label text-nowrap" >加工前商品名称<span style="color:#EE0000;">*</span></td>
							<td>
								<div class="form-group">
									<input class="input-sm form-control" id="mtpckGdsNm" name="mtpckGdsNm" isValidate="true" notempty readonly>
								</div>
							</td>
			             </tr>
			             <tr>
							 <td class="table-label text-nowrap">加工后商品序号<span style="color:#EE0000;">*</span></td>
							 <td>
								 <div class="form-group">
									 <input class="input-sm form-control" type="number" id="endprdSeqno" name=endprdSeqno isValidate="true" notempty>
								 </div>
							 </td>
			            	<td class="table-label text-nowrap">加工后商品编码<span style="color:#EE0000;">*</span></td>
			                <td>
			                	<div class="form-group">
				               		<input class="input-sm form-control" id="endprdGdecd" name="endprdGdecd" isValidate="true" notempty readonly>
				               	</div>	
			                </td>	   
			                <td class="table-label text-nowrap">加工后商品名称<span style="color:#EE0000;">*</span></td>
			                <td>
			                	<div class="form-group">
				               		<input class="input-sm form-control" id="endprdGdsNm" name="endprdGdsNm" isValidate="true" notempty readonly>
				               	</div>	
			                </td>
			             </tr>
			            <tr>
			            	<td class="table-label text-nowrap">净耗数量<span style="color:#EE0000;">*</span></td>
		                	<td>
		                		<div class="form-group">
				               		<input class="input-sm form-control" type="number"  id="netUseupQty" name="netUseupQty" isValidate="true" notempty>
				               	</div>
		                	</td>
							<td class="table-label text-nowrap">损耗率<span style="color:#EE0000;">*</span></td>
							<td>
								<div class="form-group">
									<input class="input-sm form-control" type="number"  id="lossRate" name="lossRate" isValidate="true" notempty>
								</div>
							</td>
							<td class="table-label text-nowrap text-right">修改标记</td>
							<td>
								<div class="form-group">
									<select class="form-control"  id="modfMarkcd" name="modfMarkcd" dll_name="MODF_MARK" default="0" fieldName="修改标记" isValidate="true" notempty style="width:100%;" disabled></select>
								</div>
							</td>
			              </tr>
			            <tr>
			            	<td class="table-label text-nowrap">备注</td>
			                <td colspan="5"><input class="form-control" id="rmk" name="rmk"></td>
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
    <script src="../../../static/sas_mnl/js/sasdclucnsdt_form.js"></script>
</footer>
</body>
</html>