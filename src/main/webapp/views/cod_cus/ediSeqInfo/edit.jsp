<%@ page language="java" contentType="text/html; charset=utf-8"%>
<!DOCTYPE HTML>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <title> 单据编码</title>
     <link rel="stylesheet" href="../../../static/common/bootstrap-table-master/bootstrap-table.min.css" />
    <link rel="stylesheet" href="../../../static/common/bootstrap-datepicker-master/css/bootstrap-datepicker3.min.css" />
    <link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css" />
    <link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css" />
    <link rel="stylesheet" href="../../../static/common/select2/css/select2.min.css" type="text/css">
    <link rel="stylesheet" href="../../../static/common/bootstrapvalidator-master/css/bootstrapValidator.min.css" type="text/css">
    <link rel="stylesheet" href="../../../static/admin/main/css/animate.css" />
    <link rel="stylesheet" href="../../../static/common/css/style.css" />
    <link rel="stylesheet" href="../../../static/common/css/common.css" />

    
    <style>
	#dataForm td{
		border: none;
	}
	</style>
    
</head>
<body class="gray-bg">
   <div class="container animated fadeInRight">                        
   
		<div class="ibox" id="head">	
		<div class="ibox-title font-bold">单据编码-修改  
		 <div class="pull-right">
                <a href="#1" class="collapse-link" title="收起表头"><i class="fa fa-chevron-up"></i></a>
            </div>
		</div>
			<div class="ibox-content">
				<div class=" ">
				<a href="#1" class="btn btn-info fa fa-mail-reply" id="reback">返回</a>
		 		</div> 
					
		<form id="dataForm">
			 <table class="table table-condensed no-borders no-margins">
		      <tr>
				<td class="table-label text-nowrap text-right">监管场所</td>
					<td>
						<div class="form-group">
			               	<select class="form-control select2 " id="areaCode" name="areaCode" dll_name="codStdAreaCode" isShowEmpty="true" style="width: 100%" ></select>
			             </div>
		            </td>
				<td class="table-label text-nowrap text-right">单据类型<span class="notempty">*</span></td>
					<td> 
						<div class="form-group">
							  	<input class="form-control"  id="docType" name="docType"isShowEmpty="true" isValidate="true" notempty style="width: 100%" ></select>
						</div>   
					</td>
				<td class="table-label text-nowrap text-right">服务类型<span class="notempty">*</span></td>
					<td>
						<div class="form-group">
							 <select class="form-control select2" id="serverType" name="serverType" isValidate="true" notempty style="width: 100%" >
							 			<option value=" ">--请选择--</option>
		               					<option value="C">C</option>
		               					<option value="S">S</option>
		               					<option value="I">I</option>
		               		</select>
						 </div> 
					</td>
				</tr>
				<tr>
					<td class="table-label text-nowrap text-right">日期规则</td>
						<td>
							<div class="form-group">
										<select class="form-control select2" id="dateRule" name="dateRule" isShowEmpty="true" style="width: 100%" >
										<option value=" ">--请选择--</option>
		               					<option value="MMdd">MMdd</option>
		               					<option value="YYMM">YYMM</option>
		               					<option value="MMDD">MMDD</option>
		               					<option value="MM">MM</option>
		               					</select>
							</div>
						</td>
					<td class="table-label text-nowrap text-right">项目掩码</td>
						<td>
						   <div class="form-group">
							  	<input class="input-sm form-control" id=""mask"" name="mask" >
						   </div> 
		              	</td>
					<td class="table-label text-nowrap text-right">计数器位数</td>
						<td> 
						 <div class="form-group">
							  <input class="input-sm form-control" id="counterLength" name="counterLength" >
						 </div>   
						</td>
					</tr>
					<tr>
						<td class="table-label text-nowrap text-right">模块名称</td>
						<td>
						<div class="form-group">
								<input class="input-sm form-control"  id="modelName" name="modelName" >
								</div>
						</td>
						<td class="table-label text-nowrap text-right">是否启用</td>
						  <td>
						   <div class="form-group">
								  <select class="form-control select2" id="status" name="status" isShowEmpty="true" dll_name="IS_ENABLE" style="width: 100%" ></select>
							  </div>  
		               </td>
					</tr>
		       </table>
		    </form>
		   	</div>
					
		<div class="ibox">
        <!-- 附件 -->
        <div class="ibox-title">
            <h4 class="box-title pull-left">表体</h4>
            <div class="pull-right">
                <a href="#1" class="collapse-link" title="收起表头"><i class="fa fa-chevron-up"></i></a>
            </div>
        </div>
        <div class="ibox-content">
            <div class="box-body" id="file">
                <div id="fileToolbar">
                    <a href="#1" class="btn btn-info fa fa-info-circle" id="View">查阅</a>
                    
                </div>
                <table id="fileTable"></table>
            </div>
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
    <script src="../../../static/cod_cus/js/ediSeqInfo_form.js"></script>
   		
</body>
</html>