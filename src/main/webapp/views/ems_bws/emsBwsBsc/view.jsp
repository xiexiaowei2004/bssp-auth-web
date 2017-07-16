<%@ page language="java" contentType="text/html; charset=utf-8"%>
<!DOCTYPE HTML>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <title>物流账册备案</title>
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
      <div class="ibox-title no-margins">
	        <div class="pull-left">
	           <a href="#1" class="btn btn-info fa fa-mail-reply" id="reback">返回</a>
	        </div>  
        <div class="pull-right">
           <a href="#1" class="collapse-link" title="收起表头"><i class="fa fa-chevron-up"></i></a> 
        </div> 
     </div>
     <div class="clearfix"></div>   	   	
    	<div class="ibox-content">  
		   	<form id="dataForm">
			   	<!-- 隐藏字段 -->
			   	<div style="display:none;">
			   		<input type="hidden" id="uid" name="uid">
			   		<input type="hidden" id="inputerCode" name="inputerCode">
			   		
		   		</div>
		      
		     <table class="table table-condensed no-borders no-margins">
		           <tr>
		         		<td class="table-label text-nowrap text-right text-right no-borders">仓库账册编号:</td>
						<td><input class="form-control" id="bwsNo" name="bwsNo" readonly></td>
						<td class="table-label text-nowrap text-right">变更次数:</td>
						<td><input class="form-control" id="chgTmsCnt" name="chgTmsCnt"></td>
						<td class="table-label text-nowrap text-right">企业预录入编号:</td>
						<td><input class="form-control"  id="seqNo" name="seqNo">
		           
		           </tr>
		           <tr>
		        <td class="table-label text-nowrap text-right">统一编码：</td>
						<td><input class="form-control" id="etpsPreentNo" name="etpsPreentNo"></td>
						<td class="table-label text-nowrap text-right">区域场所类别:</td>
						<td>
						<select class="form-control select2-width" id="bwlTypecd" name="bwlTypecd" dll_name="BWL_TYPECD"></select>
						</td>
						<td class="table-label text-nowrap text-right text-right">主管海关代码:</td>
						 <td>
		               		<select class="form-control " id="masterCuscd" name="masterCuscd" dll_name="codCusCustomsfec"></select>
		               </td> 
		               
		           </tr>
		           <tr>
		              <td class="table-label text-nowrap text-right">经营企业编号：</td>
						<td><input class="form-control"  id="bizopEtpsno" name="bizopEtpsno" ></td>
						<td class="table-label text-nowrap text-right">经营企业名称：</td>
						<td colspan="3"><input class="form-control"  id="bizopEtpsNm" name="bizopEtpsNm" ></td>
	               </tr>
		           <tr>
		               <td class="table-label text-nowrap text-right">经营企业社会信用代码：</td>
						<td><input class="form-control"  id="bizopEtpsSccd" name="bizopEtpsSccd" ></td>
						<td class="table-label text-nowrap text-right">仓库名称：</td>
						<td colspan="3"><input class="form-control"  id="houseNm" name="houseNm" ></td>
		              
		               </tr>
		           <tr>
		              <td class="table-label text-nowrap text-right">仓库编号：</td>
						<td>
							<div class="form-group">
								<input class="form-control"  id="houseNo" name="houseNo">
							</div>
						</td>
						<td class="table-label text-nowrap text-right">仓库地址:</td>
						<td colspan="3">
							<div class="form-group">
								<input class="form-control" id="houseAddress" name="houseAddress" >
							</div>
						</td>
		          </tr>
		           <tr>
		              <td class="table-label text-nowrap text-right">仓库面积:</td>
						<td><input class="form-control"  id="houseArea" name="houseArea" ></td>
						<td class="table-label text-nowrap text-right">仓库容积:</td>
						<td><input class="form-control" id="houseVolume" name="houseVolume"></td>
						<td class="table-label text-nowrap text-right">申报企业社会信用代码：</td>
						<td><input class="form-control"  id="dclEtpsSccd" name="dclEtpsSccd" ></td>
		            </tr>
		           <tr>
		           	 <td class="table-label text-nowrap text-right">申报企业编号:</td>
						<td><input class="form-control" id="dclEtpsno" name=dclEtpsno ></td>
						<td class="table-label text-nowrap text-right">申报企业名称：</td>
						<td colspan="3"><input class="form-control" id="dclEtpsNm" name="dclEtpsNm" ></td>
		           </tr>
		           <tr>
		           	<td class="table-label text-nowrap text-right">申报单位类型：</td>
						<td>
		               		<select class="form-control " id="dclEtpsTypecd" name="dclEtpsTypecd" dll_name="DCL_ETPS_TYPE"></select>
		               </td>
						<td class="table-label text-nowrap text-right">申报时间：</td>
						<td><input class="form-control"  id="dclTime" name="dclTime">
						</td>
						<td class="table-label text-nowrap text-right">审批状态:</td>
						<td><div class="select2-width" >
	               			<select class="form-control "  id="emapvStucd" name="emapvStucd" dll_name="CHK_STATUS" readonly></select></div>
		               </td>	                       
		           </tr>
		           <tr>
		           	<td class="table-label text-nowrap text-right">结束有效日期:</td>
						<td><input type="text" class="form-control datepicker" data-date-format="yyyy-mm-dd" id="finishValidDate" name="finishValidDate"></td>
						<td class="table-label text-nowrap text-right">记账模式：</td>
						<td>
						<select class="form-control"  id="appendTypecd" name="appendTypecd" dll_name="EMS_TYPE" readonly></select></div>
							
						</td>
						<td class="table-label text-nowrap text-right">所属系统:</td>
						<td>
						<select class="form-control"  id="ownerSystem" name="ownerSystem" dll_name="OWNER_SYSTEM"></select></div>
					</td>      
		           </tr>
		           <tr>
		               <td class="table-label text-nowrap text-right">备注：</td>
		               <td colspan="5"><textarea class="form-control" rows="2" id="rmk" name="rmk"></textarea></td>
		           </tr>
		           <tr>
		              <td class="table-label text-nowrap text-right">企业备案号：</td>
						<td><input class="form-control"  id="copEntNo" name="copEntNo"></td>
						<td class="table-label text-nowrap text-right">监管场所:</td>
						   <td>
		               		<select class="form-control" id="areaCode" name="areaCode" dll_name="codStdAreaCode"></select>
		               </td>
						<td class="table-label text-nowrap text-right">录入日期：</td>
						<td><input class="form-control"  id="inputDate" name="decTime" data-date-format="yyyy-mm-dd" readonly></td>
	            	</tr>
		           <tr>
		           <td class="table-label text-nowrap text-right">录入单位代码：</td>
						<td><input class="form-control"  id="inputCopNo" name="inputCopNo"></td>
						<td class="table-label text-nowrap text-right">录入单位名称:</td>
						<td colspan="3"><input class="form-control"  id="inputCopName" name="inputCopName"></td>            
		           </tr>
		           <tr>
						<td class="table-label text-nowrap text-right">申报类型：</td>
						  <td>
			               	<select class="form-control select2 " id="dclTypecd" name="dclTypecd" dll_name="DCL_TYPECD_BWS">
			              	</select>
		               </td>
						<td class="table-label text-nowrap text-right">操作员：</td>
						<td><input class="form-control"  id="inputerName" name="inputerName" readonly></td>
						<td class="table-label text-nowrap text-right">联系人：</td>
						<td><input class="form-control"  id="contactEr" name="contactEr" readonly></td>
					</tr>
					<tr>
						<td class="table-label text-nowrap text-right">联系电话：</td>
						<td><input class="form-control"  id="contactTele" name="contactTele" readonly></td>
					</tr>
		       </table>
		       
		   </form>
  		</div> 
  		</div> 
  <div class="ibox">
        <!-- 附件 -->
        <div class="ibox-title">
            <h4 class="box-title pull-left">附件信息列表</h4>
            <div class="pull-right">
                <a href="#1" class="collapse-link" title="收起表头"><i class="fa fa-chevron-up"></i></a>
            </div>
        </div>
        <div class="ibox-content">
            <div class="box-body" id="file">
                <div id="fileToolbar">
                    <a href="#1" class="btn btn-info fa fa-info-circle" id="acmpFormDtView">查阅</a>
                    
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
    <script src="../../../static/ems_bws/js/emsbws_form.js"></script>
    	 <script src="../../../static/admin/main/js/content.js"></script>
    
</footer>
</body>
</html>