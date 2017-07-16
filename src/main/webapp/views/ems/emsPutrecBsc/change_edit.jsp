<%@ page language="java" contentType="text/html; charset=utf-8"%>
<!DOCTYPE HTML>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <title>加工账册备案-新增</title>
    <link rel="stylesheet" href="../../../static/common/bootstrap-table-master/bootstrap-table.min.css" />
    <link rel="stylesheet" href="../../../static/common/bootstrap-datepicker-master/css/bootstrap-datepicker3.min.css" />
    <link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css" />
    <link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css" />
    <link rel="stylesheet" href="../../../static/common/select2/css/select2.min.css" type="text/css">
    <link rel="stylesheet" href="../../../static/common/bootstrapvalidator-master/css/bootstrapValidator.min.css" type="text/css">
    <link rel="stylesheet" href="../../../static/admin/main/css/animate.css" />
    <link rel="stylesheet" href="../../../static/common/css/style.css" />

    <!-- HTML5 Shim 和 Respond.js 用于使IE8支持html5和css3媒介查询 -->
    <!--[if lt IE 9]>
    <script src="../../../static/common/html5shiv/html5shiv.min.js"></script>
    <script src="../../../static/common/html5shiv/respond.min.js"></script>
    <![endif]-->
    <style>
	#dataForm td{
		border: none;
	}
	</style>
</head>
<body class="gray-bg">
<header>
    <div class="container animated fadeInRight">                          	
      <div class="ibox" id="head">      
      <div class="ibox-title no-margins">
	        <div class="pull-left">
	            <a href="javascript:void(0);" class="btn btn-info fa fa-save" id="save">暂存</a>
	            <a href="javascript:void(0);" class="btn btn-success fa fa-check-square-o" id="declare">申报</a>
	            <a href="javascript:void(0);" class="btn btn-default fa fa-mail-reply" id="reback">返回</a>
	        </div>       
	        <div class="pull-right">
	          <a href="#1" class="collapse-link" title="收起表头"><i class="fa fa-chevron-up"></i></a> 
	       	</div>       
       </div>       
        <div class="clearfix"></div>   	   	
    	<div class="ibox-content"> 
		   	<form id="dataForm">
		       <table class="table table-condensed no-borders no-margins">
		           <tr>
	           		   <td class="table-label text-nowrap text-right">预录入统一编号<span style="color:#EE0000;">*</span></td>
		               <td><input class="form-control" id="seqNo" name="seqNo" readonly></td>
		               <td class="table-label text-nowrap text-right">加工账册贸易编号<span style="color:#EE0000;">*</span></td>
		               <td><input class="form-control" id="emsNo" name="emsNo" readonly></td>		               
		               <td class="table-label text-nowrap text-right">企业内部编号<span style="color:#EE0000;">*</span></td>
		               <td><input class="form-control"  id="etpsPreentNo" name="etpsPreentNo" readonly></td>
		           </tr>
		           <tr>
		           	   <td class="table-label text-nowrap text-right">经营单位编码<span style="color:#EE0000;">*</span></td>
		               <td><input class="form-control"  id="bizopEtpsno" name="bizopEtpsno" ></td>
		               <td class="table-label text-nowrap text-right">经营单位社会信用代码</td>
		               <td><input class="form-control" id="bizopEtpsSccd" name="bizopEtpsSccd" ></td>
		               <td class="table-label text-nowrap text-right">经营单位名称<span style="color:#EE0000;">*</span></td>
		               <td><input class="form-control"  id="bizopEtpsNm" name="bizopEtpsNm" ></td>
		           </tr>
		           <tr>
		               <td class="table-label text-nowrap text-right">加工单位编号<span style="color:#EE0000;">*</span></td>
		               <td>
		               	<div class="form-group">
		               		<input class="form-control"  id="rcvgdEtpsno" name="rcvgdEtpsno" isValidate="true" notempty>
		               	</div>		
	             		</td>
	             		<td class="table-label text-nowrap text-right">加工单位社会信用代码</td>
		               <td><input class="form-control"  id="rvsngdEtpsSccd" name="rvsngdEtpsSccd" ></td>
		               <td class="table-label text-nowrap text-right">加工单位名称<span style="color:#EE0000;">*</span></td>
		               <td colspan="3">
		               	<div class="form-group">
		               		<input class="form-control" id="rcvgdEtpsNm" name="rcvgdEtpsNm"  isValidate="true" notempty>
		               	</div> 
		               </td>
	               </tr>
		           <tr>
		               <td class="table-label text-nowrap text-right">申报单位编码<span style="color:#EE0000;">*</span></td>
		               <td><input class="form-control" id="dclEtpsno" name="dclEtpsno" ></td>
		               <td class="table-label text-nowrap text-right">申报单位社会信用代码</td>
		               <td><input class="form-control"  id="dclEtpsSccd" name="dclEtpsSccd" ></td>
		               <td class="table-label text-nowrap text-right">申报单位名称<span style="color:#EE0000;">*</span></td>
		               <td><input class="form-control" id="dclEtpsNm" name="dclEtpsNm" ></td>		               
		           </tr>
		           <tr>
		           	   <td class="table-label text-nowrap text-right">申报单位类型</td>
		               <td>
		               		<select class="form-control" id="dclEtpsTypecd" name="dclEtpsTypecd" dll_name="DCL_ETPS_TYPE"></select>
		               </td>
		           	 <td class="table-label text-nowrap text-right">申报类型<span style="color:#EE0000;">*</span></td>
		               <td>
			               	<select class="form-control select2" id="dclTypecd" name="dclTypecd" dll_name="DCL_TYPE"></select>
		               </td>
		               <td class="table-label text-nowrap text-right">账册类型<span style="color:#EE0000;">*</span></td>
		               <td>
		                	<select class="form-control" id="emsTypecd" name="emsTypecd" dll_name="EMS_TYPE"></select>
		               </td> 
		           </tr>         
		           <tr>
		           		<td class="table-label text-nowrap text-right">批准证编号</td>
		               <td>
		                <div class="form-group">
		                	<input class="form-control" id="apcretNo" name="apcretNo" fieldName="批准证编号" isValidate="true" notempty>
		                </div>
		              	</td>
		              	<td class="table-label text-nowrap text-right">联网企业档案库编号</td>
		               <td><input class="form-control"  id="netwkEtpsArcrpNo" name="netwkEtpsArcrpNo" ></td>
		               <td class="table-label text-nowrap text-right">实际进口总金额</td>
		               <td><input class="form-control"  id="imgAmount" name="imgAmount"  type="number"></td>
		          </tr>
		           <tr>
		           	   <td class="table-label text-nowrap text-right">实际出口总金额</td>
		               <td><input class="form-control"  id="exgAmount" name="exgAmount" type="number" ></td>
		               <td class="table-label text-nowrap text-right">料件项数</td>
		               <td><input class="form-control" type="number" id="imgItems" name="imgItems" type="number"></td>
		               <td class="table-label text-nowrap text-right">成品项数</td>
		               <td><input class="form-control" type="number" id="exgItems" name="exgItems" type="number"></td>		                            
		           </tr>
		           <tr>
		           	   <td class="table-label text-nowrap text-right">最大周转金额<span style="color:#EE0000;">*</span></td>
		               <td><input class="form-control" type="number" id="maxTovrAmt" name="maxTovrAmt" type="number"></td>
		               <td class="table-label text-nowrap text-right">主管海关<span style="color:#EE0000;">*</span></td>
		               <td>
		               		<select class="form-control" id="masterCuscd" name="masterCuscd" dll_name="codCusCustomsfec"></select>
		               </td>
		               <td class="table-label text-nowrap text-right">申报日期</td>
		               <td><input class="form-control"  id="delTime" name="delTime" readonly></td>
		           </tr>		           
		           <tr>
		               <td class="table-label text-nowrap text-right">录入单位代码<span style="color:#EE0000;">*</span></td>
		               <td><input class="form-control"  id="inputCopNo" name="inputCopNo" readonly></td>
		               <td class="table-label text-nowrap text-right">录入单位社会信用代码</td>
		               <td><input class="form-control"  id="inputEtpsSccd" name="inputEtpsSccd" readonly></td>
		               <td class="table-label text-nowrap text-right">录入单位名称<span style="color:#EE0000;">*</span></td>
		               <td colspan="3"><input class="form-control"  id="inputCopName" name="inputCopName" readonly></td>
	            	</tr>
	            	<tr>
	            		<td class="table-label text-nowrap text-right">备案批准日期</td>
		               <td><input class="form-control datepicker" data-date-format="yyyy-mm-dd" isFormat="true" id="putrecApprTime" name="putrecApprTime"></td>
		               <td class="table-label text-nowrap text-right">变更批准日期</td>
		               <td><input class="form-control datepicker" data-date-format="yyyy-mm-dd" isFormat="true" id="chgApprTime" name="chgApprTime"></td>
		               <td class="table-label text-nowrap text-right">最近核销日期</td>
		               <td><input class="form-control datepicker" data-date-format="yyyy-mm-dd" isFormat="true" id="rcntVclrTime" name="rcntVclrTime"></td>
	            	</tr>
	            	<tr>
		            	<td class="table-label text-nowrap text-right">录入日期<span style="color:#EE0000;">*</span></td>
			               <td><input class="form-control"  id="decTime" name="decTime" data-date-format="yyyy-mm-dd"  isFormat="true" readonly></td>
			           <td class="table-label text-nowrap text-right">单耗申报环节<span style="color:#EE0000;">*</span></td>
		               <td>
		               		<select class="form-control" id="ucnsDclSegcd" name="ucnsDclSegcd" dll_name="UCNS_DCL_SEG"></select>
		               </td>
		               <td class="table-label text-nowrap text-right">单耗版本号控制标志</td>
		               <td>
		               		<input class="form-control" id="ucnsVernoCntrFlag" name="ucnsVernoCntrFlag" readonly>
		               </td>
	               </tr>
	            	<tr>
		               <td class="table-label text-nowrap text-right">账册结束有效日期<span style="color:#EE0000;">*</span></td>
		               <td><input type="text" class="form-control datepicker" data-date-format="yyyy-mm-dd" id="finishValidDate" name="finishValidDate"></td>
		               <td class="table-label text-nowrap text-right">核销周期值<span style="color:#EE0000;">*</span></td>
		               <td><input class="form-control" type="number" id="vclrPridVal" name="vclrPridVal" value="180"></td>               
		               <td class="table-label text-nowrap text-right">账册执行标志</td>
		               <td><div class="select2-width" >
	               			<select class="form-control"  id="emapvStucd" name="emapvStucd" dll_name="CHK_STATUS"  readonly></select></div>
		               </td>		                
		           </tr>
		           <tr>
		           	   <td class="table-label text-nowrap text-right">账册变更次数</td>
		               <td><input class="form-control" id="chgTmsCnt" name="chgTmsCnt" type="number" value="0" readonly></td>
		               <td class="table-label text-nowrap text-right">监管场所<span style="color:#EE0000;">*</span></td>
		               <td>
		               		<select class="form-control" id="areaCode" name="areaCode" dll_name="codStdAreaCode"></select>
		               </td>
		           </tr>
		           <tr>
		           	<td class="table-label text-nowrap text-right">备注</td>
		               <td colspan="5"><textarea class="form-control" rows="2" id="rmk" name="rmk"></textarea></td>
		           </tr>
		       </table>
		   </form>
	    	</div> 		      
  		</div>   	     
      <div class="ibox">      
      <div class="ibox-title with-border collapsed-box">
      	<h4 class="box-title pull-left">表体明细</h4>
        <div class="pull-right">
		  <a href="#1" class="collapse-link" title="收起表体信息"><i class="fa fa-chevron-up"></i></a> 
	   	</div>               
       </div>                       
       <div class="ibox-content">
	        <ul id="tab" class="nav nav-tabs">
	            <li class="active"><a href="#imgTab" data-toggle="tab">料件</a></li>
	            <li><a href="#exgTab" data-toggle="tab">成品</a></li>
	            <li><a href="#bomTab" data-toggle="tab">单损耗</a></li>
	        </ul>
	        <div class="tab-content">
	      		<!-- 料件 -->
		        <div  class="tab-pane fade m-t-sm active in" id="imgTab">
		            <div id="imgToolbar" class="toolbar">
		            	<button id="imgView" type="button" class="btn btn-info btn-sm"  title="查阅">
		                    <i class="fa fa-info-circle"></i> 查阅
	                	</button>
		                <button id="imgAdd" type="button" class="btn btn-info btn-sm"  title="料件-新增">
		                    <i class="fa fa-plus"></i>新增
		                </button>
		                <button id="imgEdit" type="button" class="btn btn-info btn-sm"  title="料件-修改">
		                    <i class="fa fa-edit"></i>修改
		                </button>
		                <button id="imgDelete" type="button" class="btn btn-info btn-sm" title="料件-删除">
		                    <i class="fa fa-trash"></i> 删除
		                </button>
		                <span class="m-r-sm"></span>
		                <button id="imgEdit_chg" type="button" class="btn btn-danger btn-sm"  title="料件-变更修改">
		                    <i class="fa fa-edit"></i>变更修改
		                </button>
		                <button id="imgDelete_chg" type="button" class="btn btn-danger btn-sm" title="料件-变更删除">
		                    <i class="fa fa-trash"></i>变更删除
		                </button>
		            </div>
		            <table id="imgTable"></table>
		        </div>
		        <!-- 成品 -->
		        <div  class="tab-pane fade  fade m-t-sm" id="exgTab">
		        	<div id="exgToolbar">
		        		<button id="exgView" type="button" class="btn btn-info btn-sm"  title="查阅">
		                    <i class="fa fa-info-circle"></i> 查阅
	                	</button>
		                <button id="exgAdd" type="button" class="btn btn-info btn-sm"  title="成品-新增">
		                    <i class="fa fa-plus"></i> 新增
		                </button>
		                <button id="exgEdit" type="button" class="btn btn-info btn-sm"  title="成品-修改">
		                    <i class="fa fa-edit"></i> 修改
		                </button>
		                <button id="exgDelete" type="button" class="btn btn-info btn-sm" title="成品-删除">
		                    <i class="fa fa-trash"></i> 删除
		                </button>
		                <span class="m-r-sm"></span>
		                <button id="exgEdit_chg" type="button" class="btn btn-danger btn-sm"  title="料件-变更修改">
		                    <i class="fa fa-edit"></i>变更修改
		                </button>
		                <button id="exgDelete_chg" type="button" class="btn btn-danger btn-sm" title="料件-变更删除">
		                    <i class="fa fa-trash"></i>变更删除
		                </button>
		            </div>          
		            <table id="exgTable"></table>
		        </div>
		        <!-- 单损耗 -->
		        <div  class="tab-pane fade m-t-sm" id="bomTab">
	            <div id="bomToolbar">
	            	<button id="bomView" type="button" class="btn btn-info btn-sm"  title="查阅">
		                    <i class="fa fa-info-circle"></i> 查阅
	                </button>
	                <button id="bomAdd" type="button" class="btn btn-info btn-sm"  title="单损耗-新增">
	                    <i class="fa fa-plus"></i> 新增
	                </button>
	                <button id="bomEdit" type="button" class="btn btn-info btn-sm"  title="单损耗-修改">
		                    <i class="fa fa-edit"></i> 修改
	                </button>
	                <button id="bomDelete" type="button" class="btn btn-info btn-sm" title="单损耗-删除">
	                    <i class="fa fa-trash"></i> 删除
	                </button>
	                <span class="m-r-sm"></span>
	                <button id="bomEdit_chg" type="button" class="btn btn-danger btn-sm"  title="料件-变更修改">
	                    <i class="fa fa-edit"></i>变更修改
	                </button>
	                <button id="bomDelete_chg" type="button" class="btn btn-danger btn-sm" title="料件-变更删除">
	                    <i class="fa fa-trash"></i>变更删除
	                </button>
	            </div>
	            <table id="bomTable"></table>
	        </div>
	   		</div>
   		</div>
   	</div>
   	<div class="ibox">
   		<!-- 附件 -->
   		<div class="ibox-title">
          <h4 class="box-title pull-left">随附单证信息列表</h4>
          <div class="pull-right">
			  <a href="#1" class="collapse-link" title="收起随附单证信息"><i class="fa fa-chevron-up"></i></a> 
		   </div>     
        </div>       
        <div  class="ibox-content">
	        <div  class="box-body">
	            <div id="fileToolbar">
	            	<button id="fileView" type="button" class="btn btn-info btn-sm"  title="查阅">
		                    <i class="fa fa-info-circle"></i> 查阅
	                </button>
	                <button id="fileAdd" type="button" class="btn btn-info btn-sm"  title="新增">
	                    <i class="fa fa-plus"></i> 新增
	                </button>
	                <button id="fileEdit" type="button" class="btn btn-info btn-sm"  title="修改">
		                    <i class="fa fa-edit"></i> 修改
	                </button>
	                <button id="fileDelete" type="button" class="btn btn-info btn-sm" title="删除">
	                    <i class="fa fa-trash" id="fileDelete"></i> 删除
	                </button>
	            </div>
	            <table id="fileTable"></table>
	        </div>      
		</div>
   	</div>
 </div>
 </header>
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
    <script src="../../../static/common/js/formCommon.js"></script>
    <script src="../../../static/ems/js/emsputrecbsc_loadEvent.js"></script>
    <script src="../../../static/common/js/common.js"></script>
    <script src="../../../static/ems/js/emsputrecbsc_chg_form.js"></script>
    <script src="../../../static/admin/main/js/content.js"></script>
</footer>
</body>
</html>